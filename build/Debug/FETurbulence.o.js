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
H_BASE = parentModule["_malloc"](200 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 200;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore12FETurbulenceC1EPNS_6FilterENS_14TurbulenceTypeEffifb;
/* memory initializer */ allocate([85,78,75,78,79,87,78,0,34,93,10,0,0,0,0,0,115,116,105,116,99,104,84,105,108,101,115,61,34,0,0,0,110,117,109,79,99,116,97,118,101,115,61,34,0,0,0,0,115,101,101,100,61,34,0,0,44,32,0,0,0,0,0,0,98,97,115,101,70,114,101,113,117,101,110,99,121,61,34,0,34,32,0,0,0,0,0,0,78,79,73,83,69,0,0,0,84,85,82,66,85,76,65,78,67,69,0,0,0,0,0,0,32,116,121,112,101,61,34,0,91,102,101,84,117,114,98,117,108,101,110,99,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiffifi(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  try {
    Module["dynCall_viiiffifi"](index,a1,a2,a3,a4,a5,a6,a7,a8);
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
  var __ZTVN7WebCore12FETurbulenceE=(H_BASE+144)|0;
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
  var invoke_viiiffifi=env.invoke_viiiffifi;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _ceilf=env._ceilf;
  var _sqrtf=env._sqrtf;
  var _fabsf=env._fabsf;
  var _floorf=env._floorf;
  var ___setErrNo=env.___setErrNo;
  var _rint=env._rint;
  var _malloc=env._malloc;
  var _free=env._free;
  var _round=env._round;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore12FETurbulence21platformApplySoftwareEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, d14 = +0, d15 = +0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 18560 | 0;
 i3 = i2 | 0;
 i4 = i2 + 18520 | 0;
 i5 = __ZN7WebCore12FilterEffect29createUnmultipliedImageResultEv(i1 | 0) | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 + 44 | 0;
 i7 = i1 + 48 | 0;
 if ((HEAP32[i6 >> 2] | 0) < 1 | (HEAP32[i7 >> 2] | 0) < 1) {
  i8 = i5 + 16 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i9 | 0) == 0) {
    i10 = 0;
   } else {
    if ((HEAP32[i9 + 12 >> 2] | 0) == 0) {
     i10 = 0;
     break;
    }
    i10 = HEAP32[i5 + 20 >> 2] | 0;
   }
  } while (0);
  i9 = i5 | 0;
  i11 = i5;
  FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 7](i9) | 0;
  if (i10 >>> 0 > (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 7](i9) | 0) >>> 0) {
   STACKTOP = i2;
   return;
  }
  i9 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i9 | 0) == 0) {
    i12 = 0;
   } else {
    if ((HEAP32[i9 + 12 >> 2] | 0) == 0) {
     i12 = 0;
     break;
    }
    i12 = HEAP32[i5 + 8 >> 2] | 0;
   }
  } while (0);
  _memset(i12 | 0, 0, i10 | 0) | 0;
  STACKTOP = i2;
  return;
 }
 i10 = ~~+HEAPF32[i1 + 136 >> 2];
 i12 = i1 + 80 | 0;
 d13 = +HEAPF32[i12 >> 2];
 d14 = +HEAPF32[i12 + 4 >> 2];
 d15 = +_round(+d13);
 do {
  if (d15 < +2147483647) {
   if (d15 <= +-2147483648) {
    i16 = 0;
    i17 = -2147483648;
    break;
   }
   i16 = 0;
   i17 = ~~d15;
  } else {
   i16 = 0;
   i17 = 2147483647;
  }
 } while (0);
 d15 = +_round(+d14);
 do {
  if (d15 < +2147483647) {
   if (d15 <= +-2147483648) {
    i18 = -2147483648;
    i19 = 0;
    break;
   }
   i18 = ~~d15;
   i19 = 0;
  } else {
   i18 = 2147483647;
   i19 = 0;
  }
 } while (0);
 HEAP32[i3 >> 2] = i10;
 i10 = i3 + 18508 | 0;
 HEAP32[i10 >> 2] = i19 | i17;
 HEAP32[i10 + 4 >> 2] = i18 | i16;
 __ZN7WebCore12FETurbulence9initPaintERNS0_12PaintingDataE(0, i3);
 i16 = Math_imul(HEAP32[i7 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
 do {
  if ((i16 | 0) > 19999) {
   i6 = i4 | 0;
   __ZN3WTF19ParallelEnvironmentC1EPFvPvEji(i6, F_BASE_vi + 12 | 0, 20, (i16 | 0) / 1e4 & -1);
   i18 = i4 + 24 | 0;
   HEAP32[i18 >> 2] = 0;
   i10 = i4 + 28 | 0;
   HEAP32[i10 >> 2] = 0;
   i17 = i4 + 32 | 0;
   HEAP32[i17 >> 2] = 0;
   i19 = HEAP32[i4 + 8 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i12 = i19 >>> 0 < 16 >>> 0 ? 16 : i19;
     do {
      if ((i12 | 0) != 0) {
       if (i12 >>> 0 > 214748364 >>> 0) {
        _WTFCrash();
       } else {
        i9 = __ZN3WTF18fastMallocGoodSizeEj(i12 * 20 & -1) | 0;
        HEAP32[i10 >> 2] = (i9 >>> 0) / 20 & -1;
        HEAP32[i18 >> 2] = __ZN3WTF10fastMallocEj(i9) | 0;
        break;
       }
      }
     } while (0);
     HEAP32[i17 >> 2] = i19;
     if ((i19 | 0) <= 1) {
      break;
     }
     i12 = HEAP32[i7 >> 2] | 0;
     i9 = (i12 | 0) / (i19 | 0) & -1;
     i8 = (i12 | 0) % (i19 | 0) & -1;
     i12 = 0;
     i11 = i19;
     i20 = i19;
     while (1) {
      i21 = i11 - 1 | 0;
      if (i20 >>> 0 <= i21 >>> 0) {
       i22 = 27;
       break;
      }
      i23 = HEAP32[i18 >> 2] | 0;
      HEAP32[i23 + (i21 * 20 & -1) >> 2] = i1;
      HEAP32[i23 + (i21 * 20 & -1) + 4 >> 2] = i5;
      HEAP32[i23 + (i21 * 20 & -1) + 8 >> 2] = i3;
      HEAP32[i23 + (i21 * 20 & -1) + 12 >> 2] = i12;
      i24 = i12 + i9 + ((i11 | 0) < (i8 | 0)) | 0;
      HEAP32[i23 + (i21 * 20 & -1) + 16 >> 2] = i24;
      if ((i21 | 0) <= 0) {
       break;
      }
      i12 = i24;
      i11 = i21;
      i20 = HEAP32[i17 >> 2] | 0;
     }
     if ((i22 | 0) == 27) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     __ZN3WTF19ParallelEnvironment7executeEPv(i6, HEAP32[i18 >> 2] | 0);
     if ((HEAP32[i17 >> 2] | 0) != 0) {
      HEAP32[i17 >> 2] = 0;
     }
     i20 = HEAP32[i18 >> 2] | 0;
     if ((i20 | 0) != 0) {
      HEAP32[i18 >> 2] = 0;
      HEAP32[i10 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i20);
     }
     i20 = i4 + 20 | 0;
     i11 = HEAP32[i20 >> 2] | 0;
     i12 = i4 + 12 | 0;
     if ((i11 | 0) != 0) {
      i8 = HEAP32[i12 >> 2] | 0;
      i9 = i8 + (i11 << 2) | 0;
      i11 = i8;
      while (1) {
       i8 = HEAP32[i11 >> 2] | 0;
       do {
        if ((i8 | 0) != 0) {
         i21 = i8 | 0;
         i24 = i8 | 0;
         i23 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
         if ((i23 | 0) == 0) {
          __ZN3WTF15ThreadConditionD1Ev(i21 + 40 | 0);
          __ZN3WTF5MutexD1Ev(i21 + 16 | 0);
          __ZN3WTF8fastFreeEPv(i8);
          break;
         } else {
          HEAP32[i24 >> 2] = i23;
          break;
         }
        }
       } while (0);
       i11 = i11 + 4 | 0;
       if ((i11 | 0) == (i9 | 0)) {
        break;
       }
      }
      HEAP32[i20 >> 2] = 0;
     }
     i9 = HEAP32[i12 >> 2] | 0;
     if ((i9 | 0) == 0) {
      STACKTOP = i2;
      return;
     }
     HEAP32[i12 >> 2] = 0;
     HEAP32[i4 + 16 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i9);
     STACKTOP = i2;
     return;
    }
   } while (0);
   HEAP32[i17 >> 2] = 0;
   i6 = HEAP32[i18 >> 2] | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i18 >> 2] = 0;
    HEAP32[i10 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i6);
   }
   i6 = i4 + 20 | 0;
   i19 = HEAP32[i6 >> 2] | 0;
   i9 = i4 + 12 | 0;
   if ((i19 | 0) != 0) {
    i11 = HEAP32[i9 >> 2] | 0;
    i8 = i11 + (i19 << 2) | 0;
    i19 = i11;
    while (1) {
     i11 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i11 | 0) != 0) {
       i23 = i11 | 0;
       i24 = i11 | 0;
       i21 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
       if ((i21 | 0) == 0) {
        __ZN3WTF15ThreadConditionD1Ev(i23 + 40 | 0);
        __ZN3WTF5MutexD1Ev(i23 + 16 | 0);
        __ZN3WTF8fastFreeEPv(i11);
        break;
       } else {
        HEAP32[i24 >> 2] = i21;
        break;
       }
      }
     } while (0);
     i19 = i19 + 4 | 0;
     if ((i19 | 0) == (i8 | 0)) {
      break;
     }
    }
    HEAP32[i6 >> 2] = 0;
   }
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   HEAP32[i9 >> 2] = 0;
   HEAP32[i4 + 16 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i8);
  }
 } while (0);
 __ZN7WebCore12FETurbulence10fillRegionEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEERNS0_12PaintingDataEii(i1, i5, i3, 0, HEAP32[i7 >> 2] | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12FETurbulence10fillRegionEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEERNS0_12PaintingDataEii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 24 | 0;
 i10 = i6 + 32 | 0;
 i11 = HEAP32[i1 + 36 >> 2] | 0;
 i12 = HEAP32[i1 + 44 >> 2] | 0;
 i13 = (HEAP32[i1 + 40 >> 2] | 0) + i4 | 0;
 i14 = i7 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i7 + 4 | 0;
 HEAP32[i15 >> 2] = i13;
 i16 = Math_imul(i4 << 2, i12) | 0;
 _memset(i8 | 0, 0, 16) | 0;
 if ((i4 | 0) >= (i5 | 0)) {
  STACKTOP = i6;
  return;
 }
 i17 = i1 + 68 | 0;
 i18 = i2 + 8 | 0;
 if ((i12 | 0) <= 0) {
  i2 = i4;
  i19 = i13;
  while (1) {
   i19 = i19 + 1 | 0;
   HEAP32[i15 >> 2] = i19;
   HEAP32[i14 >> 2] = i11;
   i2 = i2 + 1 | 0;
   if ((i2 | 0) >= (i5 | 0)) {
    break;
   }
  }
  STACKTOP = i6;
  return;
 }
 i2 = i12 << 2;
 i19 = i16;
 i16 = i4;
 i4 = i13;
 while (1) {
  HEAP32[i15 >> 2] = i4 + 1;
  HEAP32[i14 >> 2] = i11;
  i13 = i19;
  i20 = 1;
  i21 = i11;
  while (1) {
   HEAP32[i14 >> 2] = i21 + 1;
   i22 = HEAP32[i17 >> 2] | 0;
   i23 = HEAP32[(HEAP32[i22 >> 2] | 0) + 28 >> 2] | 0;
   __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i10, i7);
   FUNCTION_TABLE_viii[i23 & 3](i9, i22, i10);
   d24 = +(((__ZN7WebCore12FETurbulence32calculateTurbulenceValueForPointEiRNS0_12PaintingDataERNS0_10StitchDataERKNS_10FloatPointE(i1, 0, i3, i8, i9) | 0) & 255) >>> 0);
   HEAPF64[tempDoublePtr >> 3] = d24;
   i22 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
   i23 = 2146435072;
   if (i22 >>> 0 > i23 >>> 0 | i22 >>> 0 == i23 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0) {
    i25 = 0;
   } else {
    i25 = (_rint(+d24) | 0) & 255;
   }
   HEAP8[(HEAP32[i18 >> 2] | 0) + i13 | 0] = i25;
   i23 = HEAP32[i17 >> 2] | 0;
   i22 = HEAP32[(HEAP32[i23 >> 2] | 0) + 28 >> 2] | 0;
   __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i10, i7);
   FUNCTION_TABLE_viii[i22 & 3](i9, i23, i10);
   d24 = +(((__ZN7WebCore12FETurbulence32calculateTurbulenceValueForPointEiRNS0_12PaintingDataERNS0_10StitchDataERKNS_10FloatPointE(i1, 1, i3, i8, i9) | 0) & 255) >>> 0);
   HEAPF64[tempDoublePtr >> 3] = d24;
   i23 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
   i22 = 2146435072;
   if (i23 >>> 0 > i22 >>> 0 | i23 >>> 0 == i22 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0) {
    i26 = 0;
   } else {
    i26 = (_rint(+d24) | 0) & 255;
   }
   HEAP8[(HEAP32[i18 >> 2] | 0) + (i13 + 1) | 0] = i26;
   i22 = HEAP32[i17 >> 2] | 0;
   i23 = HEAP32[(HEAP32[i22 >> 2] | 0) + 28 >> 2] | 0;
   __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i10, i7);
   FUNCTION_TABLE_viii[i23 & 3](i9, i22, i10);
   d24 = +(((__ZN7WebCore12FETurbulence32calculateTurbulenceValueForPointEiRNS0_12PaintingDataERNS0_10StitchDataERKNS_10FloatPointE(i1, 2, i3, i8, i9) | 0) & 255) >>> 0);
   HEAPF64[tempDoublePtr >> 3] = d24;
   i22 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
   i23 = 2146435072;
   if (i22 >>> 0 > i23 >>> 0 | i22 >>> 0 == i23 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0) {
    i27 = 0;
   } else {
    i27 = (_rint(+d24) | 0) & 255;
   }
   HEAP8[(HEAP32[i18 >> 2] | 0) + (i13 + 2) | 0] = i27;
   i23 = HEAP32[i17 >> 2] | 0;
   i22 = HEAP32[(HEAP32[i23 >> 2] | 0) + 28 >> 2] | 0;
   __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i10, i7);
   FUNCTION_TABLE_viii[i22 & 3](i9, i23, i10);
   d24 = +(((__ZN7WebCore12FETurbulence32calculateTurbulenceValueForPointEiRNS0_12PaintingDataERNS0_10StitchDataERKNS_10FloatPointE(i1, 3, i3, i8, i9) | 0) & 255) >>> 0);
   HEAPF64[tempDoublePtr >> 3] = d24;
   i23 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
   i22 = 2146435072;
   if (i23 >>> 0 > i22 >>> 0 | i23 >>> 0 == i22 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0) {
    i28 = 0;
   } else {
    i28 = (_rint(+d24) | 0) & 255;
   }
   HEAP8[(HEAP32[i18 >> 2] | 0) + (i13 + 3) | 0] = i28;
   if ((i20 | 0) >= (i12 | 0)) {
    break;
   }
   i13 = i13 + 4 | 0;
   i20 = i20 + 1 | 0;
   i21 = HEAP32[i14 >> 2] | 0;
  }
  i21 = i16 + 1 | 0;
  if ((i21 | 0) >= (i5 | 0)) {
   break;
  }
  i19 = i2 + i19 | 0;
  i16 = i21;
  i4 = HEAP32[i15 >> 2] | 0;
 }
 STACKTOP = i6;
 return;
}
function __ZN7WebCore12FETurbulence32calculateTurbulenceValueForPointEiRNS0_12PaintingDataERNS0_10StitchDataERKNS_10FloatPointE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, i12 = 0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, d33 = +0, i34 = 0, i35 = 0, i36 = 0, d37 = +0, i38 = 0, d39 = +0, i40 = 0, d41 = +0, i42 = 0, d43 = +0, i44 = 0, i45 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 d8 = +(HEAP32[i3 + 18508 >> 2] | 0);
 d9 = +(HEAP32[i3 + 18512 >> 2] | 0);
 d10 = +HEAPF32[i1 + 124 >> 2];
 d11 = +HEAPF32[i1 + 128 >> 2];
 i12 = i1 + 140 | 0;
 if ((HEAP8[i12] & 1) == 0) {
  d13 = d10;
  d14 = d11;
 } else {
  if (d10 != +0) {
   d15 = d8 * d10;
   d16 = +Math_floor(d15) / d8;
   d17 = +Math_ceil(d15) / d8;
   d18 = d10 / d16 < d17 / d10 ? d16 : d17;
  } else {
   d18 = d10;
  }
  if (d11 != +0) {
   d10 = d9 * d11;
   d17 = +Math_floor(d10) / d9;
   d16 = +Math_ceil(d10) / d9;
   d19 = d11 / d17 < d16 / d11 ? d17 : d16;
  } else {
   d19 = d11;
  }
  i20 = ~~+_round(+(d8 * d18));
  HEAP32[i4 >> 2] = i20;
  HEAP32[i4 + 4 >> 2] = i20 + 4096;
  i20 = ~~+_round(+(d9 * d19));
  HEAP32[i4 + 8 >> 2] = i20;
  HEAP32[i4 + 12 >> 2] = i20 + 4096;
  d13 = d18;
  d14 = d19;
 }
 d19 = d13 * +HEAPF32[i5 >> 2];
 d13 = d14 * +HEAPF32[i5 + 4 >> 2];
 i5 = i7 | 0;
 HEAPF32[i5 >> 2] = d19;
 i20 = i7 + 4 | 0;
 HEAPF32[i20 >> 2] = d13;
 i21 = i1 + 132 | 0;
 i22 = HEAP32[i21 >> 2] | 0;
 i23 = i1 + 120 | 0;
 i24 = HEAP32[i23 >> 2] | 0;
 i25 = (i24 | 0) == 1;
 if ((i22 | 0) > 0) {
  i26 = i4 | 0;
  i27 = i4 + 4 | 0;
  i28 = i4 + 8 | 0;
  i29 = i4 + 12 | 0;
  d14 = +0;
  d18 = +1;
  i30 = 0;
  i31 = i25;
  d9 = d19;
  d19 = d13;
  i32 = i22;
  i22 = i24;
  while (1) {
   d13 = +__ZN7WebCore12FETurbulence7noise2DEiRNS0_12PaintingDataERNS0_10StitchDataERKNS_10FloatPointE(i1, i2, i3, i4, i7);
   if (i31) {
    d33 = d13;
   } else {
    d33 = +Math_abs(+d13);
   }
   d13 = d14 + d33 / d18;
   d8 = d9 * +2;
   HEAPF32[i5 >> 2] = d8;
   d11 = d19 * +2;
   HEAPF32[i20 >> 2] = d11;
   if ((HEAP8[i12] & 1) == 0) {
    i34 = i32;
    i35 = i22;
   } else {
    HEAP32[i26 >> 2] = HEAP32[i26 >> 2] << 1;
    HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] << 1) - 4096;
    HEAP32[i28 >> 2] = HEAP32[i28 >> 2] << 1;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] << 1) - 4096;
    i34 = HEAP32[i21 >> 2] | 0;
    i35 = HEAP32[i23 >> 2] | 0;
   }
   i24 = i30 + 1 | 0;
   i36 = (i35 | 0) == 1;
   if ((i24 | 0) < (i34 | 0)) {
    d14 = d13;
    d18 = d18 * +2;
    i30 = i24;
    i31 = i36;
    d9 = d8;
    d19 = d11;
    i32 = i34;
    i22 = i35;
   } else {
    d37 = d13;
    i38 = i36;
    break;
   }
  }
 } else {
  d37 = +0;
  i38 = i25;
 }
 if (!i38) {
  d39 = d37;
  i40 = d39 > +1;
  d41 = i40 ? +1 : d39;
  i42 = d41 < +0;
  d43 = d41 * +255;
  i44 = ~~d43;
  i45 = i42 ? 0 : i44;
  STACKTOP = i6;
  return i45 | 0;
 }
 d39 = d37 * +.5 + +.5;
 i40 = d39 > +1;
 d41 = i40 ? +1 : d39;
 i42 = d41 < +0;
 d43 = d41 * +255;
 i44 = ~~d43;
 i45 = i42 ? 0 : i44;
 STACKTOP = i6;
 return i45 | 0;
}
function __ZN7WebCore12FETurbulence9initPaintERNS0_12PaintingDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, i10 = 0, i11 = 0;
 i1 = i2 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) < 1) {
  i4 = 1 - ((i3 | 0) % 2147483646 & -1) | 0;
  HEAP32[i1 >> 2] = i4;
  i5 = i4;
 } else {
  i5 = i3;
 }
 if ((i5 | 0) == 2147483647) {
  HEAP32[i1 >> 2] = 2147483646;
  i6 = 0;
 } else {
  i6 = 0;
 }
 while (1) {
  i5 = 0;
  while (1) {
   HEAP32[i2 + 4 + (i5 << 2) >> 2] = i5;
   i3 = HEAP32[i1 >> 2] | 0;
   i4 = (((i3 | 0) / 127773 & -1) * -2836 & -1) + (((i3 | 0) % 127773 & -1) * 16807 & -1) | 0;
   i3 = (i4 | 0) < 1 ? i4 + 2147483647 | 0 : i4;
   d7 = +(((i3 | 0) % 512 & -1) - 256 | 0) * +.00390625;
   i4 = (((i3 | 0) / 127773 & -1) * -2836 & -1) + (((i3 | 0) % 127773 & -1) * 16807 & -1) | 0;
   i3 = (i4 | 0) < 1 ? i4 + 2147483647 | 0 : i4;
   HEAP32[i1 >> 2] = i3;
   d8 = +(((i3 | 0) % 512 & -1) - 256 | 0) * +.00390625;
   d9 = +Math_sqrt(d7 * d7 + d8 * d8);
   HEAPF32[i2 + 2060 + (i6 * 4112 & -1) + (i5 << 3) >> 2] = d7 / d9;
   HEAPF32[i2 + 2060 + (i6 * 4112 & -1) + (i5 << 3) + 4 >> 2] = d8 / d9;
   i5 = i5 + 1 | 0;
   if ((i5 | 0) >= 256) {
    break;
   }
  }
  i5 = i6 + 1 | 0;
  if ((i5 | 0) < 4) {
   i6 = i5;
  } else {
   i10 = 255;
   break;
  }
 }
 while (1) {
  i6 = i2 + 4 + (i10 << 2) | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i3 = HEAP32[i1 >> 2] | 0;
  i4 = (((i3 | 0) / 127773 & -1) * -2836 & -1) + (((i3 | 0) % 127773 & -1) * 16807 & -1) | 0;
  i3 = (i4 | 0) < 1 ? i4 + 2147483647 | 0 : i4;
  HEAP32[i1 >> 2] = i3;
  i4 = i2 + 4 + (((i3 | 0) % 256 & -1) << 2) | 0;
  HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i4 >> 2] = i5;
  i5 = i10 - 1 | 0;
  if ((i5 | 0) > 0) {
   i10 = i5;
  } else {
   i11 = 0;
   break;
  }
 }
 while (1) {
  i10 = i11 + 256 | 0;
  HEAP32[i2 + 4 + (i10 << 2) >> 2] = HEAP32[i2 + 4 + (i11 << 2) >> 2];
  HEAPF32[i2 + 2060 + (i10 << 3) >> 2] = +HEAPF32[i2 + 2060 + (i11 << 3) >> 2];
  HEAPF32[i2 + 2060 + (i10 << 3) + 4 >> 2] = +HEAPF32[i2 + 2060 + (i11 << 3) + 4 >> 2];
  HEAPF32[i2 + 6172 + (i10 << 3) >> 2] = +HEAPF32[i2 + 6172 + (i11 << 3) >> 2];
  HEAPF32[i2 + 6172 + (i10 << 3) + 4 >> 2] = +HEAPF32[i2 + 6172 + (i11 << 3) + 4 >> 2];
  HEAPF32[i2 + 10284 + (i10 << 3) >> 2] = +HEAPF32[i2 + 10284 + (i11 << 3) >> 2];
  HEAPF32[i2 + 10284 + (i10 << 3) + 4 >> 2] = +HEAPF32[i2 + 10284 + (i11 << 3) + 4 >> 2];
  HEAPF32[i2 + 14396 + (i10 << 3) >> 2] = +HEAPF32[i2 + 14396 + (i11 << 3) >> 2];
  HEAPF32[i2 + 14396 + (i10 << 3) + 4 >> 2] = +HEAPF32[i2 + 14396 + (i11 << 3) + 4 >> 2];
  i11 = i11 + 1 | 0;
  if ((i11 | 0) >= 258) {
   break;
  }
 }
 return;
}
function __ZN7WebCore12FETurbulence7noise2DEiRNS0_12PaintingDataERNS0_10StitchDataERKNS_10FloatPointE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var d6 = +0, i7 = 0, d8 = +0, d9 = +0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0, d18 = +0, d19 = +0;
 d6 = +HEAPF32[i5 >> 2] + +4096;
 i7 = ~~d6;
 d8 = d6 - +(i7 | 0);
 d6 = +HEAPF32[i5 + 4 >> 2] + +4096;
 i5 = ~~d6;
 d9 = d6 - +(i5 | 0);
 do {
  if ((HEAP8[i1 + 140 | 0] & 1) == 0) {
   i10 = i5;
   i11 = i7;
  } else {
   i12 = HEAP32[i4 + 4 >> 2] | 0;
   i13 = HEAP32[i4 >> 2] | 0;
   i14 = i7 - ((i7 | 0) < (i12 | 0) ? 0 : i13) | 0;
   if ((i14 | 0) < (i12 - 1 | 0)) {
    i15 = i14;
   } else {
    i15 = 1 - i13 + i14 | 0;
   }
   i14 = HEAP32[i4 + 12 >> 2] | 0;
   i13 = HEAP32[i4 + 8 >> 2] | 0;
   i12 = i5 - ((i5 | 0) < (i14 | 0) ? 0 : i13) | 0;
   if ((i12 | 0) < (i14 - 1 | 0)) {
    i10 = i12;
    i11 = i15;
    break;
   }
   i10 = 1 - i13 + i12 | 0;
   i11 = i15;
  }
 } while (0);
 i15 = i10 & 255;
 d6 = d8 * d8 * (+3 - d8 * +2);
 i10 = (HEAP32[i3 + 4 + ((i11 & 255) << 2) >> 2] | 0) + i15 | 0;
 i5 = HEAP32[i3 + 4 + (i10 << 2) >> 2] | 0;
 d16 = d8 * +HEAPF32[i3 + 2060 + (i2 * 4112 & -1) + (i5 << 3) >> 2] + d9 * +HEAPF32[i3 + 2060 + (i2 * 4112 & -1) + (i5 << 3) + 4 >> 2];
 i5 = (HEAP32[i3 + 4 + ((i11 + 1 & 255) << 2) >> 2] | 0) + i15 | 0;
 i15 = HEAP32[i3 + 4 + (i5 << 2) >> 2] | 0;
 d17 = d8 + +-1;
 d18 = d16 + d6 * (d17 * +HEAPF32[i3 + 2060 + (i2 * 4112 & -1) + (i15 << 3) >> 2] + d9 * +HEAPF32[i3 + 2060 + (i2 * 4112 & -1) + (i15 << 3) + 4 >> 2] - d16);
 i15 = HEAP32[i3 + 4 + (i10 + 1 << 2) >> 2] | 0;
 d16 = d9 + +-1;
 d19 = d8 * +HEAPF32[i3 + 2060 + (i2 * 4112 & -1) + (i15 << 3) >> 2] + d16 * +HEAPF32[i3 + 2060 + (i2 * 4112 & -1) + (i15 << 3) + 4 >> 2];
 i15 = HEAP32[i3 + 4 + (i5 + 1 << 2) >> 2] | 0;
 return +(d18 + d9 * d9 * (+3 - d9 * +2) * (d19 + d6 * (d17 * +HEAPF32[i3 + 2060 + (i2 * 4112 & -1) + (i15 << 3) >> 2] + d16 * +HEAPF32[i3 + 2060 + (i2 * 4112 & -1) + (i15 << 3) + 4 >> 2] - d19) - d18));
}
function __ZNK7WebCore12FETurbulence22externalRepresentationERNS_10TextStreamEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3);
 __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 128 | 0) | 0;
 __ZNK7WebCore12FilterEffect22externalRepresentationERNS_10TextStreamEi(i1 | 0, i2, 0) | 0;
 i3 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 120 | 0) | 0;
 i4 = HEAP32[i1 + 120 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore10TextStreamlsEPKc(i3, H_BASE + 8 | 0) | 0;
 } else if ((i4 | 0) == 2) {
  __ZN7WebCore10TextStreamlsEPKc(i3, H_BASE + 104 | 0) | 0;
 } else if ((i4 | 0) == 1) {
  __ZN7WebCore10TextStreamlsEPKc(i3, H_BASE + 96 | 0) | 0;
 }
 i4 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEPKc(i3, H_BASE + 88 | 0) | 0, H_BASE + 72 | 0) | 0;
 i3 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i4, +HEAPF32[i1 + 124 >> 2]) | 0, H_BASE + 64 | 0) | 0;
 i4 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i3, +HEAPF32[i1 + 128 >> 2]) | 0, H_BASE + 88 | 0) | 0, H_BASE + 56 | 0) | 0;
 i3 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i4, +HEAPF32[i1 + 136 >> 2]) | 0, H_BASE + 88 | 0) | 0, H_BASE + 40 | 0) | 0;
 i4 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(i3, HEAP32[i1 + 132 >> 2] | 0) | 0, H_BASE + 88 | 0) | 0, H_BASE + 24 | 0) | 0;
 __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEb(i4, (HEAP8[i1 + 140 | 0] & 1) != 0) | 0, H_BASE + 16 | 0) | 0;
 return i2 | 0;
}
function __ZN7WebCore12FETurbulence26determineAbsolutePaintRectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i4;
 i6 = i1 + 52 | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i3, i4);
 i4 = i1 + 36 | 0;
 i1 = i3;
 HEAP32[i4 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12FETurbulence6createEPNS_6FilterENS_14TurbulenceTypeEffifb(i1, i2, i3, d4, d5, i6, d7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 d5 = +d5;
 i6 = i6 | 0;
 d7 = +d7;
 i8 = i8 | 0;
 var i9 = 0;
 i9 = __ZN3WTF10fastMallocEj(144) | 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i9, i2);
 HEAP32[i9 >> 2] = H_BASE + 152;
 HEAP32[i9 + 120 >> 2] = i3;
 HEAPF32[i9 + 124 >> 2] = d4;
 HEAPF32[i9 + 128 >> 2] = d5;
 HEAP32[i9 + 132 >> 2] = i6;
 HEAPF32[i9 + 136 >> 2] = d7;
 HEAP8[i9 + 140 | 0] = i8 & 1;
 HEAP32[i1 >> 2] = i9;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 4;
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
function __ZN7WebCore12FETurbulenceC2EPNS_6FilterENS_14TurbulenceTypeEffifb(i1, i2, i3, d4, d5, i6, d7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 d5 = +d5;
 i6 = i6 | 0;
 d7 = +d7;
 i8 = i8 | 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 152;
 HEAP32[i1 + 120 >> 2] = i3;
 HEAPF32[i1 + 124 >> 2] = d4;
 HEAPF32[i1 + 128 >> 2] = d5;
 HEAP32[i1 + 132 >> 2] = i6;
 HEAPF32[i1 + 136 >> 2] = d7;
 HEAP8[i1 + 140 | 0] = i8 & 1;
 return;
}
function __ZN7WebCore12FETurbulenceC1EPNS_6FilterENS_14TurbulenceTypeEffifb(i1, i2, i3, d4, d5, i6, d7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 d5 = +d5;
 i6 = i6 | 0;
 d7 = +d7;
 i8 = i8 | 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 152;
 HEAP32[i1 + 120 >> 2] = i3;
 HEAPF32[i1 + 124 >> 2] = d4;
 HEAPF32[i1 + 128 >> 2] = d5;
 HEAP32[i1 + 132 >> 2] = i6;
 HEAPF32[i1 + 136 >> 2] = d7;
 HEAP8[i1 + 140 | 0] = i8 & 1;
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
function __ZN7WebCore12FETurbulence16fillRegionWorkerEPNS0_20FillRegionParametersE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12FETurbulence10fillRegionEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEERNS0_12PaintingDataEii(HEAP32[i1 >> 2] | 0, HEAP32[i1 + 4 >> 2] | 0, HEAP32[i1 + 8 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0, HEAP32[i1 + 16 >> 2] | 0);
 return;
}
function dynCall_viiiffifi(i1, i2, i3, i4, d5, d6, i7, d8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 d6 = +d6;
 i7 = i7 | 0;
 d8 = +d8;
 i9 = i9 | 0;
 FUNCTION_TABLE_viiiffifi[i1 & 3](i2 | 0, i3 | 0, i4 | 0, +d5, +d6, i7 | 0, +d8, i9 | 0);
}
function __ZN7WebCore12FETurbulence7setTypeENS_14TurbulenceTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 120 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 HEAP32[i3 >> 2] = i2;
 i4 = 1;
 return i4 | 0;
}
function __ZN7WebCore12FETurbulence14setStitchTilesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 140 | 0;
 if ((HEAP8[i3] & 1 | 0) == (i2 & 1 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 HEAP8[i3] = i2 & 1;
 i4 = 1;
 return i4 | 0;
}
function __ZN7WebCore12FETurbulence13setNumOctavesEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 132 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 HEAP32[i3 >> 2] = i2;
 i4 = 1;
 return i4 | 0;
}
function __ZN7WebCore12FETurbulence17setBaseFrequencyYEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0;
 i3 = i1 + 128 | 0;
 if (+HEAPF32[i3 >> 2] == d2) {
  i4 = 0;
  return i4 | 0;
 }
 HEAPF32[i3 >> 2] = d2;
 i4 = 1;
 return i4 | 0;
}
function __ZN7WebCore12FETurbulence17setBaseFrequencyXEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0;
 i3 = i1 + 124 | 0;
 if (+HEAPF32[i3 >> 2] == d2) {
  i4 = 0;
  return i4 | 0;
 }
 HEAPF32[i3 >> 2] = d2;
 i4 = 1;
 return i4 | 0;
}
function __ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12FilterEffect25transformResultColorSpaceENS_10ColorSpaceE(i2, HEAP32[i1 + 112 >> 2] | 0);
 return;
}
function __ZN7WebCore12FETurbulence7setSeedEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0;
 i3 = i1 + 136 | 0;
 if (+HEAPF32[i3 >> 2] == d2) {
  i4 = 0;
  return i4 | 0;
 }
 HEAPF32[i3 >> 2] = d2;
 i4 = 1;
 return i4 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function b0(i1, i2, i3, d4, d5, i6, d7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 d5 = +d5;
 i6 = i6 | 0;
 d7 = +d7;
 i8 = i8 | 0;
 abort(0);
}
function __ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 112 >> 2] = i2;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 116 >> 2] = i2;
 return;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore12FETurbulenceD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12FilterEffectD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
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
function __ZNK7WebCore12FETurbulence11stitchTilesEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 140 | 0] & 1) != 0 | 0;
}
function __ZNK7WebCore12FETurbulence14baseFrequencyYEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[i1 + 128 >> 2]);
}
function __ZNK7WebCore12FETurbulence14baseFrequencyXEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[i1 + 124 >> 2]);
}
function __ZN7WebCore12FETurbulenceD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12FilterEffectD2Ev(i1 | 0);
 return;
}
function __ZNK7WebCore12FETurbulence10numOctavesEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 132 >> 2] | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12FETurbulence4seedEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[i1 + 136 >> 2]);
}
function __ZNK7WebCore12FETurbulence4typeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 120 >> 2] | 0;
}
function __ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
 return 0;
}
function __ZNK7WebCore12FilterEffect16filterEffectTypeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function __ZN7WebCore12FETurbulence4dumpEv(i1) {
 i1 = i1 | 0;
 return;
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
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiffifi = [b0,b0,__ZN7WebCore12FETurbulenceC2EPNS_6FilterENS_14TurbulenceTypeEffifb,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore12FETurbulenceD0Ev,b1,__ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv,b1,__ZN7WebCore12FETurbulence26determineAbsolutePaintRectEv,b1,__ZN7WebCore12FETurbulenceD1Ev,b1,__ZN7WebCore12FETurbulence4dumpEv,b1,__ZN7WebCore12FETurbulence16fillRegionWorkerEPNS0_20FillRegionParametersE,b1,__ZN7WebCore12FETurbulence21platformApplySoftwareEv,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE,b2,__ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore12FilterEffect16filterEffectTypeEv,b3,__ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv,b3,b3,b3];
  var FUNCTION_TABLE_iiii = [b4,b4,__ZNK7WebCore12FETurbulence22externalRepresentationERNS_10TextStreamEi,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiffifi: dynCall_viiiffifi, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiffifi": invoke_viiiffifi, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_ceilf": _ceilf, "_sqrtf": _sqrtf, "_fabsf": _fabsf, "_floorf": _floorf, "___setErrNo": ___setErrNo, "_rint": _rint, "_malloc": _malloc, "_free": _free, "_round": _round, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiffifi = Module["dynCall_viiiffifi"] = asm["dynCall_viiiffifi"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore12FETurbulence10fillRegionEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEERNS0_12PaintingDataEii","__ZNK7WebCore12FETurbulence14baseFrequencyYEv","__ZN7WebCore12FETurbulence6createEPNS_6FilterENS_14TurbulenceTypeEffifb","_strlen","__ZNK7WebCore12FETurbulence14baseFrequencyXEv","__ZN7WebCore12FETurbulence4dumpEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore12FETurbulence21platformApplySoftwareEv","__ZN7WebCore12FETurbulence7noise2DEiRNS0_12PaintingDataERNS0_10StitchDataERKNS_10FloatPointE","__ZN7WebCore12FETurbulenceD0Ev","__ZN7WebCore12FETurbulenceC2EPNS_6FilterENS_14TurbulenceTypeEffifb","_memset","__ZN7WebCore12FETurbulenceD1Ev","__ZN7WebCore12FETurbulence17setBaseFrequencyYEf","__ZNK7WebCore12FETurbulence10numOctavesEv","_memcpy","__ZNK7WebCore12FETurbulence4typeEv","__ZN7WebCore12FETurbulence16fillRegionWorkerEPNS0_20FillRegionParametersE","__ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i","__ZNK7WebCore12FETurbulence22externalRepresentationERNS_10TextStreamEi","__ZNK7WebCore12FETurbulence4seedEv","__ZN7WebCore12FETurbulence17setBaseFrequencyXEf","__ZN7WebCore12FETurbulence7setTypeENS_14TurbulenceTypeE","__ZN7WebCore12FETurbulence26determineAbsolutePaintRectEv","__ZN7WebCore12FETurbulence7setSeedEf","__ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE","__ZNK7WebCore12FilterEffect16filterEffectTypeEv","__ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv","__ZN7WebCore12FETurbulence13setNumOctavesEi","__ZN7WebCore12FETurbulence9initPaintERNS0_12PaintingDataE","__ZN7WebCore12FETurbulence32calculateTurbulenceValueForPointEiRNS0_12PaintingDataERNS0_10StitchDataERKNS_10FloatPointE","__ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv","__ZN7WebCore12FETurbulence14setStitchTilesEb","__ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE","__ZNK7WebCore12FETurbulence11stitchTilesEv"]

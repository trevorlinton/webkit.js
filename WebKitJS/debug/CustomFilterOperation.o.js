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
H_BASE = parentModule["_malloc"](64 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 64;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore21CustomFilterOperationC1EN3WTF10PassRefPtrINS_19CustomFilterProgramEEERKNS_25CustomFilterParameterListEjj;
var __ZN7WebCore21CustomFilterOperationD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
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
function invoke_viiidii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiidii"](index,a1,a2,a3,a4,a5,a6);
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
function invoke_viiidi(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiidi"](index,a1,a2,a3,a4,a5);
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
  var __ZTVN7WebCore21CustomFilterOperationE=(H_BASE+8)|0;
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
  var invoke_viiidii=env.invoke_viiidii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiidi=env.invoke_viiidi;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore21CustomFilterOperation5blendEPKNS_15FilterOperationEdRKNS_10LayoutSizeEb(i1, i2, i3, d4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 do {
  if ((i3 | 0) == 0 | i6) {
   i9 = i2 | 0;
  } else {
   i10 = i2 | 0;
   if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 7](i3, i10) | 0)) {
    i9 = i10;
    break;
   }
   i11 = i2 + 12 | 0;
   do {
    if ((HEAP32[i11 >> 2] | 0) == (HEAP32[i3 + 12 >> 2] | 0)) {
     i12 = i2 + 28 | 0;
     do {
      if ((HEAP32[i12 >> 2] | 0) == (HEAP32[i3 + 28 >> 2] | 0)) {
       i13 = i2 + 32 | 0;
       if ((HEAP32[i13 >> 2] | 0) != (HEAP32[i3 + 32 >> 2] | 0)) {
        break;
       }
       __ZN7WebCore25CustomFilterParameterListC1Ev(i8);
       __ZNK7WebCore25CustomFilterParameterList5blendERKS0_dRKNS_10LayoutSizeERS0_(i2 + 16 | 0, i3 + 16 | 0, d4, i5, i8);
       i14 = HEAP32[i11 >> 2] | 0;
       if ((i14 | 0) != 0) {
        i15 = i14 + 4 | 0;
        HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
       }
       i15 = HEAP32[i12 >> 2] | 0;
       i16 = HEAP32[i13 >> 2] | 0;
       i13 = __ZN3WTF10fastMallocEj(36) | 0;
       HEAP32[i13 + 4 >> 2] = 1;
       HEAP32[i13 + 8 >> 2] = 11;
       HEAP32[i13 >> 2] = H_BASE + 16;
       HEAP32[i13 + 12 >> 2] = i14;
       i14 = i8 + 4 | 0;
       i17 = HEAP32[i14 >> 2] | 0;
       i18 = i8 + 8 | 0;
       i19 = HEAP32[i18 >> 2] | 0;
       i20 = i13 + 16 | 0;
       HEAP32[i20 >> 2] = 0;
       i21 = i13 + 20 | 0;
       HEAP32[i21 >> 2] = 0;
       HEAP32[i13 + 24 >> 2] = i19;
       do {
        if ((i17 | 0) != 0) {
         if (i17 >>> 0 > 1073741823 >>> 0) {
          _WTFCrash();
         }
         i19 = __ZN3WTF18fastMallocGoodSizeEj(i17 << 2) | 0;
         HEAP32[i21 >> 2] = i19 >>> 2;
         i22 = __ZN3WTF10fastMallocEj(i19) | 0;
         i19 = i22;
         HEAP32[i20 >> 2] = i19;
         if ((i22 | 0) == 0) {
          break;
         }
         i22 = HEAP32[i8 >> 2] | 0;
         i23 = HEAP32[i18 >> 2] | 0;
         i24 = i22 + (i23 << 2) | 0;
         if ((i23 | 0) == 0) {
          break;
         } else {
          i25 = i22;
          i26 = i19;
         }
         while (1) {
          i19 = HEAP32[i25 >> 2] | 0;
          HEAP32[i26 >> 2] = i19;
          if ((i19 | 0) != 0) {
           i22 = i19 + 4 | 0;
           HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
          }
          i22 = i25 + 4 | 0;
          if ((i22 | 0) == (i24 | 0)) {
           break;
          } else {
           i25 = i22;
           i26 = i26 + 4 | 0;
          }
         }
        }
       } while (0);
       HEAP32[i13 + 28 >> 2] = i15;
       HEAP32[i13 + 32 >> 2] = i16;
       HEAP32[i1 >> 2] = i13;
       i20 = HEAP32[i18 >> 2] | 0;
       i21 = i8 | 0;
       if ((i20 | 0) != 0) {
        i17 = HEAP32[i21 >> 2] | 0;
        i24 = i17 + (i20 << 2) | 0;
        i20 = i17;
        while (1) {
         i17 = HEAP32[i20 >> 2] | 0;
         do {
          if ((i17 | 0) != 0) {
           i22 = i17 + 4 | 0;
           i19 = i22 | 0;
           i23 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
           if ((i23 | 0) != 0) {
            HEAP32[i19 >> 2] = i23;
            break;
           }
           i23 = i22 - 4 | 0;
           if ((i23 | 0) == 0) {
            break;
           }
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 7](i23);
          }
         } while (0);
         i20 = i20 + 4 | 0;
         if ((i20 | 0) == (i24 | 0)) {
          break;
         }
        }
        HEAP32[i18 >> 2] = 0;
       }
       i24 = HEAP32[i21 >> 2] | 0;
       if ((i24 | 0) == 0) {
        STACKTOP = i7;
        return;
       }
       HEAP32[i21 >> 2] = 0;
       HEAP32[i14 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i24);
       STACKTOP = i7;
       return;
      }
     } while (0);
     HEAP32[i1 >> 2] = i10;
     if ((i2 | 0) != 0) {
      break;
     }
     STACKTOP = i7;
     return;
    } else {
     HEAP32[i1 >> 2] = i10;
    }
   } while (0);
   i10 = i2 + 4 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   STACKTOP = i7;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = i9;
 if ((i2 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i9 = i2 + 4 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 STACKTOP = i7;
 return;
}
function __ZN7WebCore21CustomFilterOperationC2EN3WTF10PassRefPtrINS_19CustomFilterProgramEEERKNS_25CustomFilterParameterListEjj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 + 8 >> 2] = 11;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i2;
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 i6 = i3 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i1 + 16 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 20 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = i7;
 do {
  if ((i2 | 0) != 0) {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
   HEAP32[i9 >> 2] = i7 >>> 2;
   i10 = __ZN3WTF10fastMallocEj(i7) | 0;
   i7 = i10;
   HEAP32[i8 >> 2] = i7;
   if ((i10 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i3 >> 2] | 0;
   i11 = HEAP32[i6 >> 2] | 0;
   i12 = i10 + (i11 << 2) | 0;
   if ((i11 | 0) == 0) {
    break;
   } else {
    i13 = i10;
    i14 = i7;
   }
   while (1) {
    i7 = HEAP32[i13 >> 2] | 0;
    HEAP32[i14 >> 2] = i7;
    if ((i7 | 0) != 0) {
     i10 = i7 + 4 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
    }
    i10 = i13 + 4 | 0;
    if ((i10 | 0) == (i12 | 0)) {
     break;
    } else {
     i13 = i10;
     i14 = i14 + 4 | 0;
    }
   }
  }
 } while (0);
 HEAP32[i1 + 28 >> 2] = i4;
 HEAP32[i1 + 32 >> 2] = i5;
 return;
}
function __ZN7WebCore21CustomFilterOperationC1EN3WTF10PassRefPtrINS_19CustomFilterProgramEEERKNS_25CustomFilterParameterListEjj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 + 8 >> 2] = 11;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i2;
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 i6 = i3 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i1 + 16 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 20 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = i7;
 do {
  if ((i2 | 0) != 0) {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
   HEAP32[i9 >> 2] = i7 >>> 2;
   i10 = __ZN3WTF10fastMallocEj(i7) | 0;
   i7 = i10;
   HEAP32[i8 >> 2] = i7;
   if ((i10 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i3 >> 2] | 0;
   i11 = HEAP32[i6 >> 2] | 0;
   i12 = i10 + (i11 << 2) | 0;
   if ((i11 | 0) == 0) {
    break;
   } else {
    i13 = i10;
    i14 = i7;
   }
   while (1) {
    i7 = HEAP32[i13 >> 2] | 0;
    HEAP32[i14 >> 2] = i7;
    if ((i7 | 0) != 0) {
     i10 = i7 + 4 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
    }
    i10 = i13 + 4 | 0;
    if ((i10 | 0) == (i12 | 0)) {
     break;
    } else {
     i13 = i10;
     i14 = i14 + 4 | 0;
    }
   }
  }
 } while (0);
 HEAP32[i1 + 28 >> 2] = i4;
 HEAP32[i1 + 32 >> 2] = i5;
 return;
}
function __ZN7WebCore21CustomFilterOperationD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 16 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 + 4 | 0;
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
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = i4;
  return;
 }
 i4 = i1 - 4 | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 7](i4);
 return;
}
function __ZN7WebCore21CustomFilterOperationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 16 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 + 4 | 0;
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
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = i4;
  return;
 }
 i4 = i1 - 4 | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 7](i4);
 return;
}
function __ZNK7WebCore21CustomFilterOperationeqERKNS_15FilterOperationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 7](i1 | 0, i2) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 28 >> 2] | 0) != (HEAP32[i2 + 28 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 32 >> 2] | 0) != (HEAP32[i2 + 32 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore25CustomFilterParameterListeqERKS0_(i1 + 16 | 0, i2 + 16 | 0) | 0;
 return i3 | 0;
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
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_viiidi + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_viiidii + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 2;
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
function __ZNK7WebCore15FilterOperation10isSameTypeERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 15](i2) | 0;
 return (i3 | 0) == (HEAP32[i1 + 8 >> 2] | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiidii(i1, i2, i3, i4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiidii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0, i7 | 0);
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function dynCall_viiidi(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiidi[i1 & 3](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0);
}
function __ZN7WebCore15FilterOperation5blendEPKS0_db(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore21CustomFilterOperationD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore21CustomFilterOperationD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
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
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
}
function b2(i1, i2, i3, d4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(2);
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
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function b6(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 abort(6);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function __ZNK7WebCore21CustomFilterOperation25blendingNeedsRendererSizeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore15FilterOperation4typeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 8 >> 2] | 0;
}
function __ZNK7WebCore21CustomFilterOperation14affectsOpacityEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function __ZNK7WebCore21CustomFilterOperation11movesPixelsEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore15FilterOperation9isDefaultEv(i1) {
 i1 = i1 | 0;
 return 0;
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore21CustomFilterOperationC2EN3WTF10PassRefPtrINS_19CustomFilterProgramEEERKNS_25CustomFilterParameterListEjj,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore21CustomFilterOperationD0Ev,b1,__ZN7WebCore21CustomFilterOperationD2Ev,b1,b1,b1];
  var FUNCTION_TABLE_viiidii = [b2,b2,__ZN7WebCore21CustomFilterOperation5blendEPKNS_15FilterOperationEdRKNS_10LayoutSizeEb,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore21CustomFilterOperation25blendingNeedsRendererSizeEv,b3,__ZNK7WebCore15FilterOperation9isDefaultEv,b3,__ZNK7WebCore21CustomFilterOperation11movesPixelsEv,b3,__ZNK7WebCore15FilterOperation4typeEv,b3,__ZNK7WebCore21CustomFilterOperation14affectsOpacityEv,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5,__ZNK7WebCore21CustomFilterOperationeqERKNS_15FilterOperationE,b5,__ZNK7WebCore15FilterOperation10isSameTypeERKS0_,b5,b5,b5];
  var FUNCTION_TABLE_viiidi = [b6,b6,__ZN7WebCore15FilterOperation5blendEPKS0_db,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_viiidii: dynCall_viiidii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiidi: dynCall_viiidi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_viiidii": invoke_viiidii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiidi": invoke_viiidi, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_viiidii = Module["dynCall_viiidii"] = asm["dynCall_viiidii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiidi = Module["dynCall_viiidi"] = asm["dynCall_viiidi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore21CustomFilterOperationD0Ev","_strlen","__ZNK7WebCore21CustomFilterOperation25blendingNeedsRendererSizeEv","__ZN7WebCore21CustomFilterOperationC2EN3WTF10PassRefPtrINS_19CustomFilterProgramEEERKNS_25CustomFilterParameterListEjj","__ZNK7WebCore21CustomFilterOperationeqERKNS_15FilterOperationE","__ZNK7WebCore15FilterOperation10isSameTypeERKS0_","_memset","__ZN7WebCore21CustomFilterOperation5blendEPKNS_15FilterOperationEdRKNS_10LayoutSizeEb","__ZN7WebCore21CustomFilterOperationD2Ev","__ZNK7WebCore15FilterOperation9isDefaultEv","_memcpy","__ZN7WebCore15FilterOperation5blendEPKS0_db","__ZNK7WebCore21CustomFilterOperation11movesPixelsEv","__ZNK7WebCore15FilterOperation4typeEv","__ZNK7WebCore21CustomFilterOperation14affectsOpacityEv"]

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
H_BASE = parentModule["_malloc"](16 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 16;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([48,0,0,0,0,0,0,0,45,48,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
  var __ZSt7nothrow=env.__ZSt7nothrow|0;
  var __ZN3WTF9emptyAtomE=env.__ZN3WTF9emptyAtomE|0;
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
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore31bestFitSourceForImageAttributesEfRKN3WTF6StringES3_(i1, d2, i3, i4) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, d39 = +0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, d65 = +0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 48 | 0;
 i11 = i9 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i9 + 4 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i9 + 8 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i7;
 i15 = i4 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 L1 : do {
  if ((i16 | 0) == 0) {
   i17 = 0;
   i18 = 0;
  } else {
   i19 = HEAP32[i16 + 4 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i17 = 0;
    i18 = 0;
    break;
   }
   i20 = i7 | 0;
   i21 = i7 + 4 | 0;
   i22 = i7 + 8 | 0;
   i23 = i7;
   i24 = i19 - 1 | 0;
   i25 = i16;
   i26 = 0;
   i27 = 0;
   i28 = 0;
   while (1) {
    i29 = __ZN3WTF10StringImpl4findEPFbtEj(i25, F_BASE_ii + 2 | 0, i26) | 0;
    if ((i29 | 0) == -1) {
     i17 = i27;
     i18 = i28;
     break L1;
    }
    i30 = HEAP32[i15 >> 2] | 0;
    i31 = (i30 | 0) == 0;
    do {
     if (i31) {
      i32 = 10;
     } else {
      if ((HEAP32[i30 + 4 >> 2] | 0) >>> 0 <= i29 >>> 0) {
       i32 = 10;
       break;
      }
      i33 = i30 + 8 | 0;
      if ((HEAP32[i30 + 16 >> 2] & 32 | 0) == 0) {
       i34 = HEAP16[(HEAP32[i33 >> 2] | 0) + (i29 << 1) >> 1] | 0;
      } else {
       i34 = HEAPU8[(HEAP32[i33 >> 2] | 0) + i29 | 0] | 0;
      }
      i33 = i29 + 1 | 0;
      if (i34 << 16 >> 16 == 44) {
       i35 = i33;
       i36 = i27;
       i37 = i28;
      } else {
       i38 = i33;
       i32 = 12;
      }
     }
    } while (0);
    if ((i32 | 0) == 10) {
     i32 = 0;
     i38 = i29 + 1 | 0;
     i32 = 12;
    }
    L16 : do {
     if ((i32 | 0) == 12) {
      i32 = 0;
      L18 : do {
       if (i31) {
        d39 = +1;
        i40 = i19;
        i41 = i19;
       } else {
        i33 = __ZN3WTF10StringImpl4findEPFbtEj(i30, F_BASE_ii + 6 | 0, i38) | 0;
        if ((i33 | 0) == -1) {
         d39 = +1;
         i40 = i19;
         i41 = i19;
         break;
        }
        i42 = i33 - 1 | 0;
        i43 = HEAP32[i15 >> 2] | 0;
        if ((i43 | 0) == 0) {
         d39 = +1;
         i40 = i33;
         i41 = i19;
         break;
        }
        if ((HEAP32[i43 + 4 >> 2] | 0) >>> 0 > i42 >>> 0) {
         i44 = i43 + 8 | 0;
         if ((HEAP32[i43 + 16 >> 2] & 32 | 0) == 0) {
          i45 = HEAP16[(HEAP32[i44 >> 2] | 0) + (i42 << 1) >> 1] | 0;
         } else {
          i45 = HEAPU8[(HEAP32[i44 >> 2] | 0) + i42 | 0] | 0;
         }
         if (i45 << 16 >> 16 == 44) {
          d39 = +1;
          i40 = i42;
          i41 = i42;
          break;
         }
        }
        i42 = __ZN3WTF10StringImpl4findEPFbtEj(i43, F_BASE_ii + 2 | 0, i33 + 1 | 0) | 0;
        if ((i42 | 0) == -1) {
         d39 = +1;
         i40 = i33;
         i41 = i19;
         break;
        }
        i43 = HEAP32[i15 >> 2] | 0;
        if ((i43 | 0) == 0) {
         i46 = -1;
         i47 = 0;
        } else {
         if ((HEAP32[i43 + 4 >> 2] | 0) >>> 0 > i42 >>> 0) {
          i44 = i43 + 8 | 0;
          if ((HEAP32[i43 + 16 >> 2] & 32 | 0) == 0) {
           i48 = HEAP16[(HEAP32[i44 >> 2] | 0) + (i42 << 1) >> 1] | 0;
          } else {
           i48 = HEAPU8[(HEAP32[i44 >> 2] | 0) + i42 | 0] | 0;
          }
          if (i48 << 16 >> 16 == 44) {
           d39 = +1;
           i40 = i33;
           i41 = i42;
           break;
          }
         }
         i44 = __ZN3WTF10StringImpl4findEPFbtEj(i43, F_BASE_ii + 4 | 0, i42 + 1 | 0) | 0;
         i46 = i44;
         i47 = HEAP32[i15 >> 2] | 0;
        }
        i44 = (i46 | 0) == -1 ? i19 : i46;
        L40 : do {
         if (i44 >>> 0 < i24 >>> 0) {
          i43 = i47 + 16 | 0;
          i49 = i47 + 8 | 0;
          i50 = i49;
          i51 = i49 | 0;
          if ((i47 | 0) == 0) {
           i17 = i27;
           i18 = i28;
           break L1;
          }
          i49 = HEAP32[i47 + 4 >> 2] | 0;
          i52 = i44;
          L43 : while (1) {
           i53 = HEAP32[i43 >> 2] | 0;
           if (i49 >>> 0 <= i52 >>> 0) {
            break;
           }
           i54 = (i53 & 32 | 0) == 0;
           if (i54) {
            i55 = HEAP32[i50 >> 2] | 0;
            i56 = HEAP16[i55 + (i52 << 1) >> 1] | 0;
            i57 = i55;
            i58 = i55;
           } else {
            i55 = HEAP32[i51 >> 2] | 0;
            i56 = HEAPU8[i55 + i52 | 0] | 0;
            i57 = i55;
            i58 = i55;
           }
           if ((i56 & 65535) >>> 0 >= 33 >>> 0) {
            i32 = 38;
            break;
           }
           switch (i56 << 16 >> 16) {
           case 32:
           case 10:
           case 9:
           case 13:
           case 12:
            {
             break;
            }
           default:
            {
             i32 = 38;
             break L43;
            }
           }
           i55 = i52 + 1 | 0;
           if (i55 >>> 0 < i24 >>> 0) {
            i52 = i55;
           } else {
            i59 = i55;
            break L40;
           }
          }
          if ((i32 | 0) == 38) {
           i32 = 0;
           if (i54) {
            i60 = HEAP16[i57 + (i52 << 1) >> 1] | 0;
           } else {
            i60 = HEAPU8[i58 + i52 | 0] | 0;
           }
           if (i60 << 16 >> 16 == 44) {
            i59 = i52;
            break;
           }
          }
          i51 = i52 + 1 | 0;
          if ((i53 & 32 | 0) == 0) {
           i43 = HEAP32[i50 >> 2] | 0;
           i55 = i51;
           while (1) {
            if (i55 >>> 0 >= i49 >>> 0) {
             i17 = i27;
             i18 = i28;
             break L1;
            }
            if ((HEAP16[i43 + (i55 << 1) >> 1] | 0) == 44) {
             i61 = i55;
             break;
            } else {
             i55 = i55 + 1 | 0;
            }
           }
          } else {
           i55 = HEAP32[i47 + 8 >> 2] | 0;
           i43 = i51;
           while (1) {
            if (i43 >>> 0 >= i49 >>> 0) {
             i17 = i27;
             i18 = i28;
             break L1;
            }
            if ((HEAP8[i55 + i43 | 0] | 0) == 44) {
             i61 = i43;
             break;
            } else {
             i43 = i43 + 1 | 0;
            }
           }
          }
          if ((i61 | 0) == -1) {
           i17 = i27;
           i18 = i28;
           break L1;
          }
          i35 = i61 + 1 | 0;
          i36 = i27;
          i37 = i28;
          break L16;
         } else {
          i59 = i44;
         }
        } while (0);
        i43 = i44 - 1 | 0;
        do {
         if ((i47 | 0) != 0) {
          if ((HEAP32[i47 + 4 >> 2] | 0) >>> 0 <= i43 >>> 0) {
           break;
          }
          i55 = (HEAP32[i47 + 16 >> 2] & 32 | 0) == 0;
          i49 = i47 + 8 | 0;
          if (i55) {
           i51 = HEAP32[i49 >> 2] | 0;
           i62 = HEAP16[i51 + (i43 << 1) >> 1] | 0;
           i63 = i51;
          } else {
           i51 = HEAP32[i49 >> 2] | 0;
           i62 = HEAPU8[i51 + i43 | 0] | 0;
           i63 = i51;
          }
          if (i62 << 16 >> 16 != 120) {
           break;
          }
          HEAP8[i6] = 0;
          if (i55) {
           i64 = i63;
          } else {
           i64 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i47) | 0;
          }
          d65 = +__ZN3WTF17charactersToFloatEPKtjPb(i64 + (i42 << 1) | 0, i44 + ~i42 | 0, i6);
          if ((HEAP8[i6] & 1) != 0) {
           d39 = d65;
           i40 = i33;
           i41 = i59;
           break L18;
          }
          i35 = i59 + 1 | 0;
          i36 = i27;
          i37 = i28;
          break L16;
         }
        } while (0);
        i35 = i59 + 1 | 0;
        i36 = i27;
        i37 = i28;
        break L16;
       }
      } while (0);
      HEAP32[i20 >> 2] = i29;
      HEAP32[i21 >> 2] = i40 - i29;
      HEAPF32[i22 >> 2] = d39;
      if ((i27 | 0) == (HEAP32[i12 >> 2] | 0)) {
       i33 = i27 + 1 | 0;
       do {
        if (i28 >>> 0 > i7 >>> 0) {
         i32 = 68;
        } else {
         if ((i28 + (i27 * 12 & -1) | 0) >>> 0 <= i7 >>> 0) {
          i32 = 68;
          break;
         }
         __ZN3WTF6VectorIN7WebCore14ImageWithScaleELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i9, i33);
         i42 = HEAP32[i11 >> 2] | 0;
         i66 = i42 + (((i23 - i28 | 0) / 12 & -1) * 12 & -1) | 0;
         i67 = i42;
        }
       } while (0);
       if ((i32 | 0) == 68) {
        i32 = 0;
        __ZN3WTF6VectorIN7WebCore14ImageWithScaleELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i9, i33);
        i66 = i7;
        i67 = HEAP32[i11 >> 2] | 0;
       }
       i42 = HEAP32[i13 >> 2] | 0;
       i44 = i67 + (i42 * 12 & -1) | 0;
       i43 = i66;
       HEAP32[i44 >> 2] = HEAP32[i43 >> 2];
       HEAP32[i44 + 4 >> 2] = HEAP32[i43 + 4 >> 2];
       HEAP32[i44 + 8 >> 2] = HEAP32[i43 + 8 >> 2];
       i68 = i67;
       i69 = i42;
      } else {
       i42 = i28 + (i27 * 12 & -1) | 0;
       HEAP32[i42 >> 2] = HEAP32[i14 >> 2];
       HEAP32[i42 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
       HEAP32[i42 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
       i68 = i28;
       i69 = i27;
      }
      i42 = i69 + 1 | 0;
      HEAP32[i13 >> 2] = i42;
      i35 = i41 + 1 | 0;
      i36 = i42;
      i37 = i68;
     }
    } while (0);
    if (i35 >>> 0 >= i19 >>> 0) {
     i17 = i36;
     i18 = i37;
     break L1;
    }
    i29 = HEAP32[i15 >> 2] | 0;
    if ((i29 | 0) == 0) {
     i17 = i36;
     i18 = i37;
     break;
    } else {
     i25 = i29;
     i26 = i35;
     i27 = i36;
     i28 = i37;
    }
   }
  }
 } while (0);
 i37 = i3 | 0;
 i3 = HEAP32[i37 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i70 = i17;
   i71 = i18;
  } else {
   if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
    i70 = i17;
    i71 = i18;
    break;
   }
   HEAP32[i10 >> 2] = 0;
   HEAP32[i10 + 4 >> 2] = 0;
   HEAPF32[i10 + 8 >> 2] = +1;
   if ((i17 | 0) != (HEAP32[i12 >> 2] | 0)) {
    i36 = i18 + (i17 * 12 & -1) | 0;
    i35 = i10;
    HEAP32[i36 >> 2] = HEAP32[i35 >> 2];
    HEAP32[i36 + 4 >> 2] = HEAP32[i35 + 4 >> 2];
    HEAP32[i36 + 8 >> 2] = HEAP32[i35 + 8 >> 2];
    i35 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
    HEAP32[i13 >> 2] = i35;
    i70 = i35;
    i71 = i18;
    break;
   }
   i35 = i17 + 1 | 0;
   do {
    if (i18 >>> 0 > i10 >>> 0) {
     i32 = 78;
    } else {
     if ((i18 + (i17 * 12 & -1) | 0) >>> 0 <= i10 >>> 0) {
      i32 = 78;
      break;
     }
     __ZN3WTF6VectorIN7WebCore14ImageWithScaleELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i9, i35);
     i36 = HEAP32[i11 >> 2] | 0;
     i72 = i36 + (((i10 - i18 | 0) / 12 & -1) * 12 & -1) | 0;
     i73 = i36;
    }
   } while (0);
   if ((i32 | 0) == 78) {
    __ZN3WTF6VectorIN7WebCore14ImageWithScaleELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i9, i35);
    i72 = i10;
    i73 = HEAP32[i11 >> 2] | 0;
   }
   i36 = HEAP32[i13 >> 2] | 0;
   i15 = i73 + (i36 * 12 & -1) | 0;
   i68 = i72;
   HEAP32[i15 >> 2] = HEAP32[i68 >> 2];
   HEAP32[i15 + 4 >> 2] = HEAP32[i68 + 4 >> 2];
   HEAP32[i15 + 8 >> 2] = HEAP32[i68 + 8 >> 2];
   i68 = i36 + 1 | 0;
   HEAP32[i13 >> 2] = i68;
   i70 = i68;
   i71 = i73;
  }
 } while (0);
 do {
  if ((i70 | 0) == 0) {
   HEAP32[i1 >> 2] = 0;
  } else {
   i73 = i71 + (i70 * 12 & -1) | 0;
   HEAP32[i8 >> 2] = F_BASE_iii + 2;
   i72 = i70 * 12 & -1;
   i10 = (i72 | 0) / 12 & -1;
   do {
    if ((i72 | 0) > 1536) {
     i9 = i10;
     while (1) {
      i74 = __ZnwjRKSt9nothrow_t(i9 * 12 & -1, __ZSt7nothrow) | 0;
      i75 = i74;
      if ((i74 | 0) != 0) {
       i32 = 88;
       break;
      }
      if ((i9 | 0) > 1) {
       i9 = (i9 | 0) / 2 & -1;
      } else {
       i32 = 86;
       break;
      }
     }
     if ((i32 | 0) == 86) {
      __ZNSt3__113__stable_sortIRPFbRKN7WebCore14ImageWithScaleES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeEi(i71, i73, i8, i10, i75, 0);
      break;
     } else if ((i32 | 0) == 88) {
      __ZNSt3__113__stable_sortIRPFbRKN7WebCore14ImageWithScaleES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeEi(i71, i73, i8, i10, i75, i9);
      __ZdlPv(i74);
      break;
     }
    } else {
     __ZNSt3__113__stable_sortIRPFbRKN7WebCore14ImageWithScaleES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeEi(i71, i73, i8, i10, 0, 0);
    }
   } while (0);
   i10 = i70 - 1 | 0;
   i73 = 0;
   while (1) {
    if (i73 >>> 0 >= i10 >>> 0) {
     i32 = 98;
     break;
    }
    if (i70 >>> 0 <= i73 >>> 0) {
     i32 = 92;
     break;
    }
    if (+HEAPF32[i71 + (i73 * 12 & -1) + 8 >> 2] < d2) {
     i73 = i73 + 1 | 0;
    } else {
     i32 = 94;
     break;
    }
   }
   do {
    if ((i32 | 0) == 94) {
     i72 = HEAP32[i71 + (i73 * 12 & -1) + 4 >> 2] | 0;
     if ((i72 | 0) != 0) {
      __ZNK3WTF6String20substringSharingImplEjj(i1, i4, HEAP32[i71 + (i73 * 12 & -1) >> 2] | 0, i72);
      break;
     }
     i72 = HEAP32[i37 >> 2] | 0;
     HEAP32[i1 >> 2] = i72;
     if ((i72 | 0) == 0) {
      break;
     }
     i35 = i72 | 0;
     HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 2;
    } else if ((i32 | 0) == 98) {
     if ((i70 | 0) == 0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     i35 = HEAP32[i71 + (i10 * 12 & -1) + 4 >> 2] | 0;
     if ((i35 | 0) != 0) {
      __ZNK3WTF6String20substringSharingImplEjj(i1, i4, HEAP32[i71 + (i10 * 12 & -1) >> 2] | 0, i35);
      break;
     }
     i35 = HEAP32[i37 >> 2] | 0;
     HEAP32[i1 >> 2] = i35;
     if ((i35 | 0) == 0) {
      break;
     }
     i72 = i35 | 0;
     HEAP32[i72 >> 2] = (HEAP32[i72 >> 2] | 0) + 2;
    } else if ((i32 | 0) == 92) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   } while (0);
   if ((i70 | 0) == 0) {
    break;
   }
   HEAP32[i13 >> 2] = 0;
  }
 } while (0);
 if ((i71 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i11 >> 2] = 0;
 HEAP32[i12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i71);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore16parseHTMLIntegerERKN3WTF6StringERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 72 | 0;
 i10 = HEAP32[i1 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 i1 = HEAP32[i10 + 4 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i12 = 0;
  } else {
   if ((HEAP32[i10 + 16 >> 2] & 32 | 0) != 0) {
    i12 = i1;
    break;
   }
   i13 = HEAP32[i10 + 8 >> 2] | 0;
   i14 = i13 + (i1 << 1) | 0;
   L8 : do {
    if ((i1 | 0) > 0) {
     i15 = i13;
     while (1) {
      i16 = HEAP16[i15 >> 1] | 0;
      if ((i16 & 65535) >>> 0 >= 33 >>> 0) {
       i17 = i15;
       break L8;
      }
      switch (i16 << 16 >> 16) {
      case 32:
      case 10:
      case 9:
      case 13:
      case 12:
       {
        break;
       }
      default:
       {
        i17 = i15;
        break L8;
       }
      }
      i16 = i15 + 2 | 0;
      if (i16 >>> 0 < i14 >>> 0) {
       i15 = i16;
      } else {
       i17 = i16;
       break L8;
      }
     }
    } else {
     i17 = i13;
    }
   } while (0);
   if ((i17 | 0) == (i14 | 0)) {
    i11 = 0;
    STACKTOP = i3;
    return i11 | 0;
   }
   i13 = HEAP16[i17 >> 1] | 0;
   if ((i13 << 16 >> 16 | 0) == 45) {
    i18 = -1;
    i19 = i17 + 2 | 0;
   } else if ((i13 << 16 >> 16 | 0) == 43) {
    i18 = 1;
    i19 = i17 + 2 | 0;
   } else {
    i18 = 1;
    i19 = i17;
   }
   if ((i19 | 0) == (i14 | 0)) {
    i11 = 0;
    STACKTOP = i3;
    return i11 | 0;
   }
   if (((HEAP16[i19 >> 1] | 0) - 48 & 65535) >>> 0 >= 10 >>> 0) {
    i11 = 0;
    STACKTOP = i3;
    return i11 | 0;
   }
   i13 = i8 | 0;
   HEAP32[i13 >> 2] = 0;
   i15 = i8 + 4 | 0;
   HEAP32[i15 >> 2] = 0;
   i16 = i8 + 8 | 0;
   HEAP32[i16 >> 2] = 0;
   i20 = i8 + 12 | 0;
   HEAP8[i20] = 1;
   HEAP32[i8 + 16 >> 2] = 0;
   i21 = i8 + 20 | 0;
   HEAP32[i21 >> 2] = 0;
   do {
    if (i19 >>> 0 < i14 >>> 0) {
     i22 = i8 + 20 | 0;
     i23 = i19;
     while (1) {
      i24 = HEAP16[i23 >> 1] | 0;
      if ((i24 - 48 & 65535) >>> 0 >= 10 >>> 0) {
       break;
      }
      i23 = i23 + 2 | 0;
      HEAP16[i7 >> 1] = i24;
      i25 = HEAP32[i16 >> 2] | 0;
      do {
       if ((i25 | 0) == 0) {
        i26 = 66;
       } else {
        i27 = HEAP32[i13 >> 2] | 0;
        if (i27 >>> 0 >= (HEAP32[i25 + 4 >> 2] | 0) >>> 0) {
         i26 = 66;
         break;
        }
        if ((HEAP32[i15 >> 2] | 0) != 0) {
         i26 = 66;
         break;
        }
        if ((HEAP8[i20] & 1) == 0) {
         HEAP32[i13 >> 2] = i27 + 1;
         HEAP16[(HEAP32[i22 >> 2] | 0) + (i27 << 1) >> 1] = i24;
         break;
        }
        if ((i24 & 65535) >>> 0 > 255 >>> 0) {
         i26 = 66;
         break;
        }
        HEAP32[i13 >> 2] = i27 + 1;
        HEAP8[(HEAP32[i21 >> 2] | 0) + i27 | 0] = i24;
       }
      } while (0);
      if ((i26 | 0) == 66) {
       i26 = 0;
       __ZN3WTF13StringBuilder6appendEPKtj(i8, i7, 1);
      }
      if (i23 >>> 0 >= i14 >>> 0) {
       break;
      }
     }
     i23 = HEAP32[i13 >> 2] | 0;
     i22 = (i23 | 0) == 0;
     if ((HEAP8[i20] & 1) != 0) {
      if (i22) {
       i28 = 0;
       i29 = 0;
       i26 = 72;
       break;
      }
      i24 = HEAP32[i15 >> 2] | 0;
      if ((i24 | 0) == 0) {
       i28 = HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0;
       i29 = i23;
       i26 = 72;
       break;
      } else {
       i28 = HEAP32[i24 + 8 >> 2] | 0;
       i29 = i23;
       i26 = 72;
       break;
      }
     }
     do {
      if (i22) {
       i30 = 0;
      } else {
       i24 = HEAP32[i15 >> 2] | 0;
       if ((i24 | 0) == 0) {
        i30 = HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0;
        break;
       } else {
        i30 = HEAP32[i24 + 8 >> 2] | 0;
        break;
       }
      }
     } while (0);
     i31 = __ZN3WTF21charactersToIntStrictEPKtjPbi(i30, i23, i9, 10) | 0;
    } else {
     i28 = 0;
     i29 = 0;
     i26 = 72;
    }
   } while (0);
   if ((i26 | 0) == 72) {
    i31 = __ZN3WTF21charactersToIntStrictEPKhjPbi(i28, i29, i9, 10) | 0;
   }
   HEAP32[i2 >> 2] = Math_imul(i31, i18) | 0;
   i20 = (HEAP8[i9] & 1) != 0;
   i13 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i14 = i13 | 0;
     i21 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i14 >> 2] = i21;
      break;
     }
    }
   } while (0);
   i13 = HEAP32[i15 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i11 = i20;
    STACKTOP = i3;
    return i11 | 0;
   }
   i16 = i13 | 0;
   i21 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    i11 = i20;
    STACKTOP = i3;
    return i11 | 0;
   } else {
    HEAP32[i16 >> 2] = i21;
    i11 = i20;
    STACKTOP = i3;
    return i11 | 0;
   }
  }
 } while (0);
 i9 = HEAP32[i10 + 8 >> 2] | 0;
 i10 = i9 + i12 | 0;
 L75 : do {
  if ((i12 | 0) > 0) {
   i18 = i9;
   while (1) {
    i31 = HEAP8[i18] | 0;
    if ((i31 & 255) >>> 0 >= 33 >>> 0) {
     i32 = i18;
     break L75;
    }
    switch (i31 & 255) {
    case 32:
    case 10:
    case 9:
    case 13:
    case 12:
     {
      break;
     }
    default:
     {
      i32 = i18;
      break L75;
     }
    }
    i31 = i18 + 1 | 0;
    if (i31 >>> 0 < i10 >>> 0) {
     i18 = i31;
    } else {
     i32 = i31;
     break L75;
    }
   }
  } else {
   i32 = i9;
  }
 } while (0);
 if ((i32 | 0) == (i10 | 0)) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 i9 = HEAP8[i32] | 0;
 if ((i9 << 24 >> 24 | 0) == 45) {
  i33 = -1;
  i34 = i32 + 1 | 0;
 } else if ((i9 << 24 >> 24 | 0) == 43) {
  i33 = 1;
  i34 = i32 + 1 | 0;
 } else {
  i33 = 1;
  i34 = i32;
 }
 if ((i34 | 0) == (i10 | 0)) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 if (((HEAP8[i34] | 0) - 48 & 255) >>> 0 >= 10 >>> 0) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 i32 = i5 | 0;
 HEAP32[i32 >> 2] = 0;
 i9 = i5 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i12 = i5 + 8 | 0;
 HEAP32[i12 >> 2] = 0;
 i18 = i5 + 12 | 0;
 HEAP8[i18] = 1;
 HEAP32[i5 + 16 >> 2] = 0;
 i20 = i5 + 20 | 0;
 HEAP32[i20 >> 2] = 0;
 do {
  if (i34 >>> 0 < i10 >>> 0) {
   i15 = i5 + 20 | 0;
   i31 = i34;
   while (1) {
    i29 = HEAP8[i31] | 0;
    if ((i29 - 48 & 255) >>> 0 >= 10 >>> 0) {
     break;
    }
    i31 = i31 + 1 | 0;
    HEAP8[i4] = i29;
    i28 = HEAP32[i12 >> 2] | 0;
    do {
     if ((i28 | 0) == 0) {
      i26 = 25;
     } else {
      i30 = HEAP32[i32 >> 2] | 0;
      if (i30 >>> 0 >= (HEAP32[i28 + 4 >> 2] | 0) >>> 0) {
       i26 = 25;
       break;
      }
      if ((HEAP32[i9 >> 2] | 0) != 0) {
       i26 = 25;
       break;
      }
      if ((HEAP8[i18] & 1) == 0) {
       HEAP32[i32 >> 2] = i30 + 1;
       HEAP16[(HEAP32[i15 >> 2] | 0) + (i30 << 1) >> 1] = i29 & 255;
       break;
      } else {
       HEAP32[i32 >> 2] = i30 + 1;
       HEAP8[(HEAP32[i20 >> 2] | 0) + i30 | 0] = i29;
       break;
      }
     }
    } while (0);
    if ((i26 | 0) == 25) {
     i26 = 0;
     __ZN3WTF13StringBuilder6appendEPKhj(i5, i4, 1);
    }
    if (i31 >>> 0 >= i10 >>> 0) {
     break;
    }
   }
   i31 = HEAP32[i32 >> 2] | 0;
   i15 = (i31 | 0) == 0;
   if ((HEAP8[i18] & 1) != 0) {
    if (i15) {
     i35 = 0;
     i36 = 0;
     i26 = 31;
     break;
    }
    i29 = HEAP32[i9 >> 2] | 0;
    if ((i29 | 0) == 0) {
     i35 = HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0;
     i36 = i31;
     i26 = 31;
     break;
    } else {
     i35 = HEAP32[i29 + 8 >> 2] | 0;
     i36 = i31;
     i26 = 31;
     break;
    }
   }
   do {
    if (i15) {
     i37 = 0;
    } else {
     i29 = HEAP32[i9 >> 2] | 0;
     if ((i29 | 0) == 0) {
      i37 = HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0;
      break;
     } else {
      i37 = HEAP32[i29 + 8 >> 2] | 0;
      break;
     }
    }
   } while (0);
   i38 = __ZN3WTF21charactersToIntStrictEPKtjPbi(i37, i31, i6, 10) | 0;
  } else {
   i35 = 0;
   i36 = 0;
   i26 = 31;
  }
 } while (0);
 if ((i26 | 0) == 31) {
  i38 = __ZN3WTF21charactersToIntStrictEPKhjPbi(i35, i36, i6, 10) | 0;
 }
 HEAP32[i2 >> 2] = Math_imul(i38, i33) | 0;
 i33 = (HEAP8[i6] & 1) != 0;
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 | 0;
   i38 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i38 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i12 >> 2] = i38;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i11 = i33;
  STACKTOP = i3;
  return i11 | 0;
 }
 i9 = i6 | 0;
 i38 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i38 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  i11 = i33;
  STACKTOP = i3;
  return i11 | 0;
 } else {
  HEAP32[i9 >> 2] = i38;
  i11 = i33;
  STACKTOP = i3;
  return i11 | 0;
 }
 return 0;
}
function __ZN7WebCore27parseHTMLNonNegativeIntegerERKN3WTF6StringERj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 72 | 0;
 i10 = HEAP32[i1 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 i1 = HEAP32[i10 + 4 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i12 = 0;
  } else {
   if ((HEAP32[i10 + 16 >> 2] & 32 | 0) == 0) {
    i12 = i1;
    break;
   }
   i13 = HEAP32[i10 + 8 >> 2] | 0;
   i14 = i13 + i1 | 0;
   L8 : do {
    if ((i1 | 0) > 0) {
     i15 = i13;
     while (1) {
      i16 = HEAP8[i15] | 0;
      if ((i16 & 255) >>> 0 >= 33 >>> 0) {
       i17 = i15;
       break L8;
      }
      switch (i16 & 255) {
      case 32:
      case 10:
      case 9:
      case 13:
      case 12:
       {
        break;
       }
      default:
       {
        i17 = i15;
        break L8;
       }
      }
      i16 = i15 + 1 | 0;
      if (i16 >>> 0 < i14 >>> 0) {
       i15 = i16;
      } else {
       i17 = i16;
       break L8;
      }
     }
    } else {
     i17 = i13;
    }
   } while (0);
   if ((i17 | 0) == (i14 | 0)) {
    i11 = 0;
    STACKTOP = i3;
    return i11 | 0;
   }
   i13 = (HEAP8[i17] | 0) == 43 ? i17 + 1 | 0 : i17;
   if ((i13 | 0) == (i14 | 0)) {
    i11 = 0;
    STACKTOP = i3;
    return i11 | 0;
   }
   if (((HEAP8[i13] | 0) - 48 & 255) >>> 0 >= 10 >>> 0) {
    i11 = 0;
    STACKTOP = i3;
    return i11 | 0;
   }
   i15 = i5 | 0;
   HEAP32[i15 >> 2] = 0;
   i16 = i5 + 4 | 0;
   HEAP32[i16 >> 2] = 0;
   i18 = i5 + 8 | 0;
   HEAP32[i18 >> 2] = 0;
   i19 = i5 + 12 | 0;
   HEAP8[i19] = 1;
   HEAP32[i5 + 16 >> 2] = 0;
   i20 = i5 + 20 | 0;
   HEAP32[i20 >> 2] = 0;
   do {
    if (i13 >>> 0 < i14 >>> 0) {
     i21 = i5 + 20 | 0;
     i22 = i13;
     while (1) {
      i23 = HEAP8[i22] | 0;
      if ((i23 - 48 & 255) >>> 0 >= 10 >>> 0) {
       break;
      }
      i22 = i22 + 1 | 0;
      HEAP8[i4] = i23;
      i24 = HEAP32[i18 >> 2] | 0;
      do {
       if ((i24 | 0) == 0) {
        i25 = 22;
       } else {
        i26 = HEAP32[i15 >> 2] | 0;
        if (i26 >>> 0 >= (HEAP32[i24 + 4 >> 2] | 0) >>> 0) {
         i25 = 22;
         break;
        }
        if ((HEAP32[i16 >> 2] | 0) != 0) {
         i25 = 22;
         break;
        }
        if ((HEAP8[i19] & 1) == 0) {
         HEAP32[i15 >> 2] = i26 + 1;
         HEAP16[(HEAP32[i21 >> 2] | 0) + (i26 << 1) >> 1] = i23 & 255;
         break;
        } else {
         HEAP32[i15 >> 2] = i26 + 1;
         HEAP8[(HEAP32[i20 >> 2] | 0) + i26 | 0] = i23;
         break;
        }
       }
      } while (0);
      if ((i25 | 0) == 22) {
       i25 = 0;
       __ZN3WTF13StringBuilder6appendEPKhj(i5, i4, 1);
      }
      if (i22 >>> 0 >= i14 >>> 0) {
       break;
      }
     }
     i22 = HEAP32[i15 >> 2] | 0;
     i21 = (i22 | 0) == 0;
     if ((HEAP8[i19] & 1) != 0) {
      if (i21) {
       i27 = 0;
       i28 = 0;
       i25 = 28;
       break;
      }
      i23 = HEAP32[i16 >> 2] | 0;
      if ((i23 | 0) == 0) {
       i27 = HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0;
       i28 = i22;
       i25 = 28;
       break;
      } else {
       i27 = HEAP32[i23 + 8 >> 2] | 0;
       i28 = i22;
       i25 = 28;
       break;
      }
     }
     do {
      if (i21) {
       i29 = 0;
      } else {
       i23 = HEAP32[i16 >> 2] | 0;
       if ((i23 | 0) == 0) {
        i29 = HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0;
        break;
       } else {
        i29 = HEAP32[i23 + 8 >> 2] | 0;
        break;
       }
      }
     } while (0);
     i30 = __ZN3WTF22charactersToUIntStrictEPKtjPbi(i29, i22, i6, 10) | 0;
    } else {
     i27 = 0;
     i28 = 0;
     i25 = 28;
    }
   } while (0);
   if ((i25 | 0) == 28) {
    i30 = __ZN3WTF22charactersToUIntStrictEPKhjPbi(i27, i28, i6, 10) | 0;
   }
   HEAP32[i2 >> 2] = i30;
   i19 = (HEAP8[i6] & 1) != 0;
   i15 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i14 = i15 | 0;
     i20 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i14 >> 2] = i20;
      break;
     }
    }
   } while (0);
   i15 = HEAP32[i16 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i11 = i19;
    STACKTOP = i3;
    return i11 | 0;
   }
   i18 = i15 | 0;
   i20 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    i11 = i19;
    STACKTOP = i3;
    return i11 | 0;
   } else {
    HEAP32[i18 >> 2] = i20;
    i11 = i19;
    STACKTOP = i3;
    return i11 | 0;
   }
  }
 } while (0);
 if ((HEAP32[i10 + 16 >> 2] & 32 | 0) == 0) {
  i31 = HEAP32[i10 + 8 >> 2] | 0;
 } else {
  i31 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i10) | 0;
 }
 i10 = i31 + (i12 << 1) | 0;
 L74 : do {
  if ((i12 | 0) > 0) {
   i6 = i31;
   while (1) {
    i30 = HEAP16[i6 >> 1] | 0;
    if ((i30 & 65535) >>> 0 >= 33 >>> 0) {
     i32 = i6;
     break L74;
    }
    switch (i30 << 16 >> 16) {
    case 32:
    case 10:
    case 9:
    case 13:
    case 12:
     {
      break;
     }
    default:
     {
      i32 = i6;
      break L74;
     }
    }
    i30 = i6 + 2 | 0;
    if (i30 >>> 0 < i10 >>> 0) {
     i6 = i30;
    } else {
     i32 = i30;
     break L74;
    }
   }
  } else {
   i32 = i31;
  }
 } while (0);
 if ((i32 | 0) == (i10 | 0)) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 i31 = (HEAP16[i32 >> 1] | 0) == 43 ? i32 + 2 | 0 : i32;
 if ((i31 | 0) == (i10 | 0)) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 if (((HEAP16[i31 >> 1] | 0) - 48 & 65535) >>> 0 >= 10 >>> 0) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 i32 = i8 | 0;
 HEAP32[i32 >> 2] = 0;
 i12 = i8 + 4 | 0;
 HEAP32[i12 >> 2] = 0;
 i6 = i8 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 i19 = i8 + 12 | 0;
 HEAP8[i19] = 1;
 HEAP32[i8 + 16 >> 2] = 0;
 i16 = i8 + 20 | 0;
 HEAP32[i16 >> 2] = 0;
 do {
  if (i31 >>> 0 < i10 >>> 0) {
   i30 = i8 + 20 | 0;
   i28 = i31;
   while (1) {
    i27 = HEAP16[i28 >> 1] | 0;
    if ((i27 - 48 & 65535) >>> 0 >= 10 >>> 0) {
     break;
    }
    i28 = i28 + 2 | 0;
    HEAP16[i7 >> 1] = i27;
    i29 = HEAP32[i6 >> 2] | 0;
    do {
     if ((i29 | 0) == 0) {
      i25 = 63;
     } else {
      i4 = HEAP32[i32 >> 2] | 0;
      if (i4 >>> 0 >= (HEAP32[i29 + 4 >> 2] | 0) >>> 0) {
       i25 = 63;
       break;
      }
      if ((HEAP32[i12 >> 2] | 0) != 0) {
       i25 = 63;
       break;
      }
      if ((HEAP8[i19] & 1) == 0) {
       HEAP32[i32 >> 2] = i4 + 1;
       HEAP16[(HEAP32[i30 >> 2] | 0) + (i4 << 1) >> 1] = i27;
       break;
      }
      if ((i27 & 65535) >>> 0 > 255 >>> 0) {
       i25 = 63;
       break;
      }
      HEAP32[i32 >> 2] = i4 + 1;
      HEAP8[(HEAP32[i16 >> 2] | 0) + i4 | 0] = i27;
     }
    } while (0);
    if ((i25 | 0) == 63) {
     i25 = 0;
     __ZN3WTF13StringBuilder6appendEPKtj(i8, i7, 1);
    }
    if (i28 >>> 0 >= i10 >>> 0) {
     break;
    }
   }
   i28 = HEAP32[i32 >> 2] | 0;
   i30 = (i28 | 0) == 0;
   if ((HEAP8[i19] & 1) != 0) {
    if (i30) {
     i33 = 0;
     i34 = 0;
     i25 = 69;
     break;
    }
    i27 = HEAP32[i12 >> 2] | 0;
    if ((i27 | 0) == 0) {
     i33 = HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0;
     i34 = i28;
     i25 = 69;
     break;
    } else {
     i33 = HEAP32[i27 + 8 >> 2] | 0;
     i34 = i28;
     i25 = 69;
     break;
    }
   }
   do {
    if (i30) {
     i35 = 0;
    } else {
     i27 = HEAP32[i12 >> 2] | 0;
     if ((i27 | 0) == 0) {
      i35 = HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0;
      break;
     } else {
      i35 = HEAP32[i27 + 8 >> 2] | 0;
      break;
     }
    }
   } while (0);
   i36 = __ZN3WTF22charactersToUIntStrictEPKtjPbi(i35, i28, i9, 10) | 0;
  } else {
   i33 = 0;
   i34 = 0;
   i25 = 69;
  }
 } while (0);
 if ((i25 | 0) == 69) {
  i36 = __ZN3WTF22charactersToUIntStrictEPKhjPbi(i33, i34, i9, 10) | 0;
 }
 HEAP32[i2 >> 2] = i36;
 i36 = (HEAP8[i9] & 1) != 0;
 i9 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i6 = i9 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i11 = i36;
  STACKTOP = i3;
  return i11 | 0;
 }
 i12 = i9 | 0;
 i2 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i9);
  i11 = i36;
  STACKTOP = i3;
  return i11 | 0;
 } else {
  HEAP32[i12 >> 2] = i2;
  i11 = i36;
  STACKTOP = i3;
  return i11 | 0;
 }
 return 0;
}
function __ZNSt3__115__inplace_mergeIRPFbRKN7WebCore14ImageWithScaleES4_EPS2_EEvT0_S9_S9_T_NS_15iterator_traitsIS9_E15difference_typeESD_PNSC_10value_typeEi(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i10 = i9 + 64 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 i11 = i9 + 48 | 0;
 i12 = i9 + 32 | 0;
 i13 = i9 | 0;
 i14 = i9 + 16 | 0;
 i15 = i3;
 i3 = i5;
 i5 = i6;
 i6 = i2;
 i2 = i1;
 L4 : while (1) {
  i1 = i15;
  i16 = i3;
  i17 = i5;
  i18 = i6;
  i19 = i2;
  while (1) {
   if ((i16 | 0) == 0) {
    i20 = 50;
    break L4;
   } else {
    i21 = i16;
    i22 = i19;
   }
   while (1) {
    if (FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 3](i18, i22) | 0) {
     break;
    }
    i23 = i21 - 1 | 0;
    if ((i23 | 0) == 0) {
     i20 = 47;
     break L4;
    } else {
     i21 = i23;
     i22 = i22 + 12 | 0;
    }
   }
   if (!((i21 | 0) > (i8 | 0) & (i17 | 0) > (i8 | 0))) {
    i20 = 8;
    break L4;
   }
   if ((i21 | 0) < (i17 | 0)) {
    i23 = (i17 | 0) / 2 & -1;
    i24 = i18 + (i23 * 12 & -1) | 0;
    i25 = i22;
    i26 = i22;
    i27 = (i18 - i25 | 0) / 12 & -1;
    L15 : while (1) {
     i28 = i27;
     while (1) {
      if ((i28 | 0) == 0) {
       break L15;
      }
      i29 = (i28 | 0) / 2 & -1;
      if (FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 3](i24, i26 + (i29 * 12 & -1) | 0) | 0) {
       i28 = i29;
      } else {
       break;
      }
     }
     i26 = i26 + ((i29 + 1 | 0) * 12 & -1) | 0;
     i27 = i28 - 1 - i29 | 0;
    }
    i30 = i23;
    i31 = (i26 - i25 | 0) / 12 & -1;
    i32 = i26;
    i33 = i24;
   } else {
    if ((i21 | 0) == 1) {
     i20 = 17;
     break L4;
    }
    i27 = (i21 | 0) / 2 & -1;
    i34 = i22 + (i27 * 12 & -1) | 0;
    i35 = i18;
    i36 = i18;
    i37 = (i1 - i35 | 0) / 12 & -1;
    L24 : while (1) {
     i38 = i37;
     while (1) {
      if ((i38 | 0) == 0) {
       break L24;
      }
      i39 = (i38 | 0) / 2 & -1;
      if (FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 3](i36 + (i39 * 12 & -1) | 0, i34) | 0) {
       break;
      } else {
       i38 = i39;
      }
     }
     i36 = i36 + ((i39 + 1 | 0) * 12 & -1) | 0;
     i37 = i38 - 1 - i39 | 0;
    }
    i30 = (i36 - i35 | 0) / 12 & -1;
    i31 = i27;
    i32 = i34;
    i33 = i36;
   }
   i40 = i21 - i31 | 0;
   i41 = i17 - i30 | 0;
   L32 : do {
    if ((i32 | 0) == (i18 | 0)) {
     i42 = i33;
    } else {
     if ((i18 | 0) == (i33 | 0)) {
      i42 = i32;
      break;
     }
     if ((i32 + 12 | 0) == (i18 | 0)) {
      _llvm_lifetime_start(12, 0, i11 | 0);
      i37 = i32;
      HEAP32[i11 >> 2] = HEAP32[i37 >> 2];
      HEAP32[i11 + 4 >> 2] = HEAP32[i37 + 4 >> 2];
      HEAP32[i11 + 8 >> 2] = HEAP32[i37 + 8 >> 2];
      i24 = i33 - i18 | 0;
      _memmove(i37 | 0, i18 | 0, i24 | 0) | 0;
      i37 = i32 + (((i24 | 0) / 12 & -1) * 12 & -1) | 0;
      i24 = i37;
      HEAP32[i24 >> 2] = HEAP32[i11 >> 2];
      HEAP32[i24 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
      HEAP32[i24 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
      _llvm_lifetime_end(12, 0, i11 | 0);
      i42 = i37;
      break;
     }
     if ((i18 + 12 | 0) == (i33 | 0)) {
      _llvm_lifetime_start(12, 0, i12 | 0);
      i37 = i33 - 12 | 0;
      i24 = i37;
      HEAP32[i12 >> 2] = HEAP32[i24 >> 2];
      HEAP32[i12 + 4 >> 2] = HEAP32[i24 + 4 >> 2];
      HEAP32[i12 + 8 >> 2] = HEAP32[i24 + 8 >> 2];
      i24 = i37 - i32 | 0;
      i37 = i33 + (((i24 | 0) / -12 & -1) * 12 & -1) | 0;
      i26 = i32;
      _memmove(i37 | 0, i26 | 0, i24 | 0) | 0;
      HEAP32[i26 >> 2] = HEAP32[i12 >> 2];
      HEAP32[i26 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
      HEAP32[i26 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
      _llvm_lifetime_end(12, 0, i12 | 0);
      i42 = i37;
      break;
     }
     _llvm_lifetime_start(12, 0, i13 | 0);
     _llvm_lifetime_start(12, 0, i14 | 0);
     i37 = i18;
     i26 = (i37 - i32 | 0) / 12 & -1;
     i24 = i33;
     i25 = (i24 - i37 | 0) / 12 & -1;
     if ((i26 | 0) == (i25 | 0)) {
      i37 = i18;
      i23 = i32;
      while (1) {
       i28 = i23;
       HEAP32[i13 >> 2] = HEAP32[i28 >> 2];
       HEAP32[i13 + 4 >> 2] = HEAP32[i28 + 4 >> 2];
       HEAP32[i13 + 8 >> 2] = HEAP32[i28 + 8 >> 2];
       i43 = i37;
       HEAP32[i28 >> 2] = HEAP32[i43 >> 2];
       HEAP32[i28 + 4 >> 2] = HEAP32[i43 + 4 >> 2];
       HEAP32[i28 + 8 >> 2] = HEAP32[i43 + 8 >> 2];
       HEAP32[i43 >> 2] = HEAP32[i13 >> 2];
       HEAP32[i43 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
       HEAP32[i43 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
       i43 = i23 + 12 | 0;
       if ((i43 | 0) == (i18 | 0)) {
        i42 = i18;
        break L32;
       } else {
        i37 = i37 + 12 | 0;
        i23 = i43;
       }
      }
     } else {
      i44 = i26;
      i45 = i25;
     }
     while (1) {
      i23 = (i44 | 0) % (i45 | 0) & -1;
      if ((i23 | 0) == 0) {
       break;
      } else {
       i44 = i45;
       i45 = i23;
      }
     }
     if ((i45 | 0) != 0) {
      i23 = i26 - 1 | 0;
      i37 = i32 + (i45 * 12 & -1) | 0;
      while (1) {
       i38 = i37 - 12 | 0;
       i43 = i38;
       HEAP32[i14 >> 2] = HEAP32[i43 >> 2];
       HEAP32[i14 + 4 >> 2] = HEAP32[i43 + 4 >> 2];
       HEAP32[i14 + 8 >> 2] = HEAP32[i43 + 8 >> 2];
       i43 = i37 + (i23 * 12 & -1) | 0;
       i28 = i38;
       while (1) {
        i46 = i28;
        i47 = i43;
        HEAP32[i46 >> 2] = HEAP32[i47 >> 2];
        HEAP32[i46 + 4 >> 2] = HEAP32[i47 + 4 >> 2];
        HEAP32[i46 + 8 >> 2] = HEAP32[i47 + 8 >> 2];
        i46 = (i24 - i43 | 0) / 12 & -1;
        if ((i26 | 0) < (i46 | 0)) {
         i48 = i43 + (i26 * 12 & -1) | 0;
        } else {
         i48 = i32 + ((i26 - i46 | 0) * 12 & -1) | 0;
        }
        if ((i48 | 0) == (i38 | 0)) {
         break;
        } else {
         i28 = i43;
         i43 = i48;
        }
       }
       HEAP32[i47 >> 2] = HEAP32[i14 >> 2];
       HEAP32[i47 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
       HEAP32[i47 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
       if ((i38 | 0) == (i32 | 0)) {
        break;
       } else {
        i37 = i38;
       }
      }
     }
     i42 = i32 + (i25 * 12 & -1) | 0;
    }
   } while (0);
   if ((i30 + i31 | 0) >= (i41 + i40 | 0)) {
    break;
   }
   __ZNSt3__115__inplace_mergeIRPFbRKN7WebCore14ImageWithScaleES4_EPS2_EEvT0_S9_S9_T_NS_15iterator_traitsIS9_E15difference_typeESD_PNSC_10value_typeEi(i22, i32, i42, i4, i31, i30, i7, i8);
   if ((i17 | 0) == (i30 | 0)) {
    i20 = 51;
    break L4;
   } else {
    i16 = i40;
    i17 = i41;
    i18 = i33;
    i19 = i42;
   }
  }
  __ZNSt3__115__inplace_mergeIRPFbRKN7WebCore14ImageWithScaleES4_EPS2_EEvT0_S9_S9_T_NS_15iterator_traitsIS9_E15difference_typeESD_PNSC_10value_typeEi(i42, i33, i15, i4, i40, i41, i7, i8);
  if ((i30 | 0) == 0) {
   i20 = 52;
   break;
  } else {
   i15 = i42;
   i3 = i31;
   i5 = i30;
   i6 = i32;
   i2 = i22;
  }
 }
 if ((i20 | 0) == 8) {
  __ZNSt3__124__buffered_inplace_mergeIRPFbRKN7WebCore14ImageWithScaleES4_EPS2_EEvT0_S9_S9_T_NS_15iterator_traitsIS9_E15difference_typeESD_PNSC_10value_typeE(i22, i18, i15, i4, i21, i17, i7);
  STACKTOP = i9;
  return;
 } else if ((i20 | 0) == 17) {
  i7 = i10;
  i10 = i22;
  HEAP32[i7 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i7 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
  HEAP32[i7 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
  i22 = i18;
  HEAP32[i10 >> 2] = HEAP32[i22 >> 2];
  HEAP32[i10 + 4 >> 2] = HEAP32[i22 + 4 >> 2];
  HEAP32[i10 + 8 >> 2] = HEAP32[i22 + 8 >> 2];
  HEAP32[i22 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i22 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
  HEAP32[i22 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
  STACKTOP = i9;
  return;
 } else if ((i20 | 0) == 47) {
  STACKTOP = i9;
  return;
 } else if ((i20 | 0) == 50) {
  STACKTOP = i9;
  return;
 } else if ((i20 | 0) == 51) {
  STACKTOP = i9;
  return;
 } else if ((i20 | 0) == 52) {
  STACKTOP = i9;
  return;
 }
}
function __ZNSt3__118__stable_sort_moveIRPFbRKN7WebCore14ImageWithScaleES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 if ((i4 | 0) == 1) {
  if ((i5 | 0) == 0) {
   return;
  }
  i6 = i5;
  i7 = i1;
  HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
  HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
  return;
 } else if ((i4 | 0) == 0) {
  return;
 } else if ((i4 | 0) == 2) {
  i7 = i2 - 12 | 0;
  i6 = (i5 | 0) == 0;
  if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i7, i1) | 0) {
   if (!i6) {
    i8 = i5;
    i9 = i7;
    HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
    HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
    HEAP32[i8 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
   }
   i9 = i5 + 12 | 0;
   if ((i9 | 0) == 0) {
    return;
   }
   i8 = i9;
   i9 = i1;
   HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
   HEAP32[i8 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
   return;
  } else {
   if (!i6) {
    i6 = i5;
    i9 = i1;
    HEAP32[i6 >> 2] = HEAP32[i9 >> 2];
    HEAP32[i6 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
    HEAP32[i6 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
   }
   i9 = i5 + 12 | 0;
   if ((i9 | 0) == 0) {
    return;
   }
   i6 = i9;
   i9 = i7;
   HEAP32[i6 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i6 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
   HEAP32[i6 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
   return;
  }
 } else {
  if ((i4 | 0) < 9) {
   if ((i1 | 0) == (i2 | 0)) {
    return;
   }
   if ((i5 | 0) == 0) {
    i10 = 0;
   } else {
    i9 = i5;
    i6 = i1;
    HEAP32[i9 >> 2] = HEAP32[i6 >> 2];
    HEAP32[i9 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
    HEAP32[i9 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
    i10 = i5;
   }
   i6 = i1 + 12 | 0;
   if ((i6 | 0) == (i2 | 0)) {
    return;
   }
   i9 = i5;
   i7 = i10;
   i10 = i6;
   while (1) {
    i6 = i7 + 12 | 0;
    i8 = (i6 | 0) == 0;
    do {
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i10, i7) | 0) {
      if (!i8) {
       i11 = i6;
       i12 = i7;
       HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
       HEAP32[i11 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
       HEAP32[i11 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
      }
      L47 : do {
       if ((i7 | 0) == (i5 | 0)) {
        i13 = i9;
       } else {
        i12 = i7;
        while (1) {
         i11 = i12 - 12 | 0;
         i14 = i12;
         if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i10, i11) | 0)) {
          i13 = i14;
          break L47;
         }
         i15 = i11;
         HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
         HEAP32[i14 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
         HEAP32[i14 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
         if ((i11 | 0) == (i5 | 0)) {
          i13 = i9;
          break;
         } else {
          i12 = i11;
         }
        }
       }
      } while (0);
      i12 = i10;
      HEAP32[i13 >> 2] = HEAP32[i12 >> 2];
      HEAP32[i13 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
      HEAP32[i13 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
      i16 = i6;
     } else {
      if (i8) {
       i16 = 0;
       break;
      }
      i12 = i6;
      i11 = i10;
      HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
      HEAP32[i12 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
      HEAP32[i12 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
      i16 = i6;
     }
    } while (0);
    i6 = i10 + 12 | 0;
    if ((i6 | 0) == (i2 | 0)) {
     break;
    } else {
     i7 = i16;
     i10 = i6;
    }
   }
   return;
  }
  i10 = (i4 | 0) / 2 & -1;
  i16 = i1 + (i10 * 12 & -1) | 0;
  __ZNSt3__113__stable_sortIRPFbRKN7WebCore14ImageWithScaleES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeEi(i1, i16, i3, i10, i5, i10);
  i7 = i4 - i10 | 0;
  __ZNSt3__113__stable_sortIRPFbRKN7WebCore14ImageWithScaleES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeEi(i16, i2, i3, i7, i5 + (i10 * 12 & -1) | 0, i7);
  L55 : do {
   if ((i4 + 1 | 0) >>> 0 < 3 >>> 0) {
    i17 = i16;
    i18 = i5;
   } else {
    i7 = i16;
    i10 = i5;
    i13 = i1;
    while (1) {
     if ((i7 | 0) == (i2 | 0)) {
      break;
     }
     i9 = (i10 | 0) == 0;
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i7, i13) | 0) {
      if (!i9) {
       i6 = i10;
       i8 = i7;
       HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
       HEAP32[i6 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
       HEAP32[i6 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
      }
      i19 = i13;
      i20 = i7 + 12 | 0;
     } else {
      if (!i9) {
       i9 = i10;
       i8 = i13;
       HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
       HEAP32[i9 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
       HEAP32[i9 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
      }
      i19 = i13 + 12 | 0;
      i20 = i7;
     }
     i8 = i10 + 12 | 0;
     if ((i19 | 0) == (i16 | 0)) {
      i17 = i20;
      i18 = i8;
      break L55;
     } else {
      i7 = i20;
      i10 = i8;
      i13 = i19;
     }
    }
    if ((i13 | 0) == (i16 | 0)) {
     return;
    } else {
     i21 = i10;
     i22 = i13;
    }
    while (1) {
     if ((i21 | 0) != 0) {
      i7 = i21;
      i8 = i22;
      HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
      HEAP32[i7 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
      HEAP32[i7 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
     }
     i8 = i22 + 12 | 0;
     if ((i8 | 0) == (i16 | 0)) {
      break;
     } else {
      i21 = i21 + 12 | 0;
      i22 = i8;
     }
    }
    return;
   }
  } while (0);
  if ((i17 | 0) == (i2 | 0)) {
   return;
  } else {
   i23 = i17;
   i24 = i18;
  }
  while (1) {
   if ((i24 | 0) != 0) {
    i18 = i24;
    i17 = i23;
    HEAP32[i18 >> 2] = HEAP32[i17 >> 2];
    HEAP32[i18 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
    HEAP32[i18 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
   }
   i17 = i23 + 12 | 0;
   if ((i17 | 0) == (i2 | 0)) {
    break;
   } else {
    i23 = i17;
    i24 = i24 + 12 | 0;
   }
  }
  return;
 }
}
function __ZNSt3__113__stable_sortIRPFbRKN7WebCore14ImageWithScaleES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeEi(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i8 = i7 | 0;
 i9 = i7 + 16 | 0;
 if ((i4 | 0) == 0 | (i4 | 0) == 1) {
  STACKTOP = i7;
  return;
 } else if ((i4 | 0) == 2) {
  i10 = i2 - 12 | 0;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i10, i1) | 0)) {
   STACKTOP = i7;
   return;
  }
  i11 = i9;
  i9 = i1;
  HEAP32[i11 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i11 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
  HEAP32[i11 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
  i12 = i10;
  HEAP32[i9 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
  HEAP32[i9 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
  HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i12 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
  HEAP32[i12 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
  STACKTOP = i7;
  return;
 } else {
  if ((i4 | 0) < 129) {
   i11 = i8;
   if ((i1 | 0) == (i2 | 0)) {
    STACKTOP = i7;
    return;
   }
   i12 = i1 + 12 | 0;
   if ((i12 | 0) == (i2 | 0)) {
    STACKTOP = i7;
    return;
   }
   i9 = i1;
   i10 = i12;
   while (1) {
    i12 = i10;
    HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
    HEAP32[i11 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
    HEAP32[i11 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
    L19 : do {
     if ((i10 | 0) == (i1 | 0)) {
      i13 = i9;
     } else {
      i12 = i10;
      while (1) {
       i14 = i12 - 12 | 0;
       i15 = i12;
       if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i8, i14) | 0)) {
        i13 = i15;
        break L19;
       }
       i16 = i14;
       HEAP32[i15 >> 2] = HEAP32[i16 >> 2];
       HEAP32[i15 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
       HEAP32[i15 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
       if ((i14 | 0) == (i1 | 0)) {
        i13 = i9;
        break;
       } else {
        i12 = i14;
       }
      }
     }
    } while (0);
    HEAP32[i13 >> 2] = HEAP32[i11 >> 2];
    HEAP32[i13 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
    HEAP32[i13 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
    i10 = i10 + 12 | 0;
    if ((i10 | 0) == (i2 | 0)) {
     break;
    }
   }
   STACKTOP = i7;
   return;
  }
  i10 = (i4 | 0) / 2 & -1;
  i11 = i1 + (i10 * 12 & -1) | 0;
  if ((i4 | 0) > (i6 | 0)) {
   __ZNSt3__113__stable_sortIRPFbRKN7WebCore14ImageWithScaleES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeEi(i1, i11, i3, i10, i5, i6);
   i13 = i4 - i10 | 0;
   __ZNSt3__113__stable_sortIRPFbRKN7WebCore14ImageWithScaleES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeEi(i11, i2, i3, i13, i5, i6);
   __ZNSt3__115__inplace_mergeIRPFbRKN7WebCore14ImageWithScaleES4_EPS2_EEvT0_S9_S9_T_NS_15iterator_traitsIS9_E15difference_typeESD_PNSC_10value_typeEi(i1, i11, i2, i3, i10, i13, i5, i6);
   STACKTOP = i7;
   return;
  }
  __ZNSt3__118__stable_sort_moveIRPFbRKN7WebCore14ImageWithScaleES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeE(i1, i11, i3, i10, i5);
  i6 = i5 + (i10 * 12 & -1) | 0;
  __ZNSt3__118__stable_sort_moveIRPFbRKN7WebCore14ImageWithScaleES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeE(i11, i2, i3, i4 - i10 | 0, i6);
  i10 = i5 + (i4 * 12 & -1) | 0;
  L30 : do {
   if ((i4 + 1 | 0) >>> 0 < 3 >>> 0) {
    i17 = i6;
    i18 = i1;
   } else {
    i2 = i6;
    i11 = i1;
    i13 = i5;
    while (1) {
     if ((i2 | 0) == (i10 | 0)) {
      break;
     }
     i9 = i11;
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i2, i13) | 0) {
      i8 = i2;
      HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
      HEAP32[i9 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
      HEAP32[i9 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
      i19 = i13;
      i20 = i2 + 12 | 0;
     } else {
      i8 = i13;
      HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
      HEAP32[i9 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
      HEAP32[i9 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
      i19 = i13 + 12 | 0;
      i20 = i2;
     }
     i8 = i11 + 12 | 0;
     if ((i19 | 0) == (i6 | 0)) {
      i17 = i20;
      i18 = i8;
      break L30;
     } else {
      i2 = i20;
      i11 = i8;
      i13 = i19;
     }
    }
    if ((i13 | 0) == (i6 | 0)) {
     STACKTOP = i7;
     return;
    } else {
     i21 = i11;
     i22 = i13;
    }
    while (1) {
     i2 = i21;
     i8 = i22;
     HEAP32[i2 >> 2] = HEAP32[i8 >> 2];
     HEAP32[i2 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
     HEAP32[i2 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
     i8 = i22 + 12 | 0;
     if ((i8 | 0) == (i6 | 0)) {
      break;
     } else {
      i21 = i21 + 12 | 0;
      i22 = i8;
     }
    }
    STACKTOP = i7;
    return;
   }
  } while (0);
  if ((i17 | 0) == (i10 | 0)) {
   STACKTOP = i7;
   return;
  } else {
   i23 = i17;
   i24 = i18;
  }
  while (1) {
   i18 = i24;
   i17 = i23;
   HEAP32[i18 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i18 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
   HEAP32[i18 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
   i17 = i23 + 12 | 0;
   if ((i17 | 0) == (i10 | 0)) {
    break;
   } else {
    i23 = i17;
    i24 = i24 + 12 | 0;
   }
  }
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = HEAP32[__ZN3WTF9emptyAtomE >> 2] | 0;
  HEAP32[i1 >> 2] = i8;
  if ((i8 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
  i9 = i4 | 0;
  HEAP32[i9 >> 2] = i2;
  i8 = i2 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  i8 = HEAP32[i6 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i10 = 0;
  } else {
   i10 = HEAP32[i8 + 8 >> 2] | 0;
  }
  i8 = 0;
  L17 : while (1) {
   i11 = HEAP8[i10 + i8 | 0] | 0;
   if ((i11 & 255) >>> 0 >= 33 >>> 0) {
    i12 = i8;
    break;
   }
   switch (i11 & 255) {
   case 32:
   case 10:
   case 9:
   case 13:
   case 12:
    {
     break;
    }
   default:
    {
     i12 = i8;
     break L17;
    }
   }
   i11 = i8 + 1 | 0;
   if (i11 >>> 0 < i7 >>> 0) {
    i8 = i11;
   } else {
    i12 = i11;
    break;
   }
  }
  do {
   if ((i12 | 0) == (i7 | 0)) {
    i8 = HEAP32[((HEAP32[i9 >> 2] | 0) == 0 ? i4 : __ZN3WTF9emptyAtomE | 0) >> 2] | 0;
    HEAP32[i1 >> 2] = i8;
    if ((i8 | 0) == 0) {
     break;
    }
    i11 = i8 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   } else {
    i11 = i7 - 1 | 0;
    i8 = 0;
    i13 = 0;
    L24 : while (1) {
     i14 = HEAP8[i10 + (i11 + i13) | 0] | 0;
     if ((i14 & 255) >>> 0 >= 33 >>> 0) {
      i15 = i8;
      i16 = i13;
      break;
     }
     switch (i14 & 255) {
     case 32:
     case 10:
     case 9:
     case 13:
     case 12:
      {
       break;
      }
     default:
      {
       i15 = i8;
       i16 = i13;
       break L24;
      }
     }
     i14 = i8 + 1 | 0;
     i17 = ~i8;
     if (i14 >>> 0 < i7 >>> 0) {
      i8 = i14;
      i13 = i17;
     } else {
      i15 = i14;
      i16 = i17;
      break;
     }
    }
    if ((i15 | i12 | 0) == 0) {
     i13 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = 0;
     HEAP32[i1 >> 2] = i13;
     break;
    } else {
     __ZNK3WTF6String9substringEjj(i1, i4, i12, i7 - i12 + i16 | 0);
     break;
    }
   }
  } while (0);
  i16 = HEAP32[i9 >> 2] | 0;
  if ((i16 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i9 = i16 | 0;
  i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
  if ((i12 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i16);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i9 >> 2] = i12;
   STACKTOP = i3;
   return;
  }
 }
 i12 = i5 | 0;
 HEAP32[i12 >> 2] = i2;
 i9 = i2 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 i9 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i18 = 0;
  } else {
   if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
    i18 = HEAP32[i9 + 8 >> 2] | 0;
    break;
   } else {
    i18 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i9) | 0;
    break;
   }
  }
 } while (0);
 i9 = 0;
 L50 : while (1) {
  i6 = HEAP16[i18 + (i9 << 1) >> 1] | 0;
  if ((i6 & 65535) >>> 0 >= 33 >>> 0) {
   i19 = i9;
   break;
  }
  switch (i6 << 16 >> 16) {
  case 32:
  case 10:
  case 9:
  case 13:
  case 12:
   {
    break;
   }
  default:
   {
    i19 = i9;
    break L50;
   }
  }
  i6 = i9 + 1 | 0;
  if (i6 >>> 0 < i7 >>> 0) {
   i9 = i6;
  } else {
   i19 = i6;
   break;
  }
 }
 do {
  if ((i19 | 0) == (i7 | 0)) {
   i9 = HEAP32[((HEAP32[i12 >> 2] | 0) == 0 ? i5 : __ZN3WTF9emptyAtomE | 0) >> 2] | 0;
   HEAP32[i1 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   i6 = i9 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
  } else {
   i6 = i7 - 1 | 0;
   i9 = 0;
   i2 = 0;
   L57 : while (1) {
    i16 = HEAP16[i18 + (i6 + i2 << 1) >> 1] | 0;
    if ((i16 & 65535) >>> 0 >= 33 >>> 0) {
     i20 = i9;
     i21 = i2;
     break;
    }
    switch (i16 << 16 >> 16) {
    case 32:
    case 10:
    case 9:
    case 13:
    case 12:
     {
      break;
     }
    default:
     {
      i20 = i9;
      i21 = i2;
      break L57;
     }
    }
    i16 = i9 + 1 | 0;
    i4 = ~i9;
    if (i16 >>> 0 < i7 >>> 0) {
     i9 = i16;
     i2 = i4;
    } else {
     i20 = i16;
     i21 = i4;
     break;
    }
   }
   if ((i20 | i19 | 0) == 0) {
    i2 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    HEAP32[i1 >> 2] = i2;
    break;
   } else {
    __ZNK3WTF6String9substringEjj(i1, i5, i19, i7 - i19 + i21 | 0);
    break;
   }
  }
 } while (0);
 i21 = HEAP32[i12 >> 2] | 0;
 if ((i21 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i12 = i21 | 0;
 i19 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i19 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i21);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i12 >> 2] = i19;
  STACKTOP = i3;
  return;
 }
}
function __ZNSt3__124__buffered_inplace_mergeIRPFbRKN7WebCore14ImageWithScaleES4_EPS2_EEvT0_S9_S9_T_NS_15iterator_traitsIS9_E15difference_typeESD_PNSC_10value_typeE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i8 = i1;
 i9 = i2;
 if ((i5 | 0) <= (i6 | 0)) {
  L3 : do {
   if ((i1 | 0) == (i2 | 0)) {
    i10 = i1;
    i11 = i2;
   } else {
    i6 = (((i2 - 12 + (-i8 | 0) | 0) >>> 0) / 12 & -1) + 1 | 0;
    i5 = i7;
    i12 = i1;
    while (1) {
     if ((i5 | 0) != 0) {
      i13 = i5;
      i14 = i12;
      HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
      HEAP32[i13 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
      HEAP32[i13 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
     }
     i14 = i12 + 12 | 0;
     if ((i14 | 0) == (i2 | 0)) {
      break;
     } else {
      i5 = i5 + 12 | 0;
      i12 = i14;
     }
    }
    i12 = i7 + (i6 * 12 & -1) | 0;
    if ((i12 | 0) == (i7 | 0)) {
     i10 = i1;
     i11 = i2;
     break;
    } else {
     i15 = i1;
     i16 = i7;
     i17 = i2;
    }
    while (1) {
     if ((i17 | 0) == (i3 | 0)) {
      break;
     }
     i5 = i15;
     if (FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 3](i17, i16) | 0) {
      i14 = i17;
      HEAP32[i5 >> 2] = HEAP32[i14 >> 2];
      HEAP32[i5 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
      HEAP32[i5 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
      i18 = i16;
      i19 = i17 + 12 | 0;
     } else {
      i14 = i16;
      HEAP32[i5 >> 2] = HEAP32[i14 >> 2];
      HEAP32[i5 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
      HEAP32[i5 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
      i18 = i16 + 12 | 0;
      i19 = i17;
     }
     i14 = i15 + 12 | 0;
     if ((i18 | 0) == (i12 | 0)) {
      i10 = i14;
      i11 = i19;
      break L3;
     } else {
      i15 = i14;
      i16 = i18;
      i17 = i19;
     }
    }
    _memmove(i15 | 0, i16 | 0, i12 - i16 | 0) | 0;
    return;
   }
  } while (0);
  _memmove(i10 | 0, i11 | 0, i3 - i11 | 0) | 0;
  return;
 }
 if ((i2 | 0) == (i3 | 0)) {
  i20 = i7;
 } else {
  i11 = (((i3 - 12 + (-i9 | 0) | 0) >>> 0) / 12 & -1) + 1 | 0;
  i9 = i7;
  i10 = i2;
  while (1) {
   if ((i9 | 0) != 0) {
    i16 = i9;
    i15 = i10;
    HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
    HEAP32[i16 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
    HEAP32[i16 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
   }
   i15 = i10 + 12 | 0;
   if ((i15 | 0) == (i3 | 0)) {
    break;
   } else {
    i9 = i9 + 12 | 0;
    i10 = i15;
   }
  }
  i20 = i7 + (i11 * 12 & -1) | 0;
 }
 L32 : do {
  if ((i2 | 0) == (i1 | 0)) {
   i21 = i20;
   i22 = i3;
  } else {
   i11 = i2;
   i10 = i20;
   i9 = i3;
   while (1) {
    if ((i10 | 0) == (i7 | 0)) {
     break;
    }
    i15 = i10 - 12 | 0;
    i16 = i11 - 12 | 0;
    i19 = i9 - 12 | 0;
    i17 = i19;
    if (FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 3](i15, i16) | 0) {
     i18 = i16;
     HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
     HEAP32[i17 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
     HEAP32[i17 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
     i23 = i16;
     i24 = i10;
    } else {
     i16 = i15;
     HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
     HEAP32[i17 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
     HEAP32[i17 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
     i23 = i11;
     i24 = i15;
    }
    if ((i23 | 0) == (i1 | 0)) {
     i21 = i24;
     i22 = i19;
     break L32;
    } else {
     i11 = i23;
     i10 = i24;
     i9 = i19;
    }
   }
   if ((i11 | 0) == (i1 | 0)) {
    return;
   } else {
    i25 = i11;
    i26 = i9;
   }
   while (1) {
    i26 = i26 - 12 | 0;
    i25 = i25 - 12 | 0;
    i10 = i26;
    i12 = i25;
    HEAP32[i10 >> 2] = HEAP32[i12 >> 2];
    HEAP32[i10 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
    HEAP32[i10 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
    if ((i25 | 0) == (i1 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i21 | 0) == (i7 | 0)) {
  return;
 } else {
  i27 = i22;
  i28 = i21;
 }
 while (1) {
  i27 = i27 - 12 | 0;
  i28 = i28 - 12 | 0;
  i21 = i27;
  i22 = i28;
  HEAP32[i21 >> 2] = HEAP32[i22 >> 2];
  HEAP32[i21 + 4 >> 2] = HEAP32[i22 + 4 >> 2];
  HEAP32[i21 + 8 >> 2] = HEAP32[i22 + 8 >> 2];
  if ((i28 | 0) == (i7 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore27parseToDecimalForNumberTypeERKN3WTF6StringERKNS_7DecimalE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i4 + 48 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((HEAP32[i8 + 4 >> 2] | 0) == 0) {
    break;
   }
   i9 = i8 + 8 | 0;
   if ((HEAP32[i8 + 16 >> 2] & 32 | 0) == 0) {
    i10 = HEAP16[HEAP32[i9 >> 2] >> 1] | 0;
   } else {
    i10 = HEAPU8[HEAP32[i9 >> 2] | 0] | 0;
   }
   if (!((i10 - 45 & 65535) >>> 0 < 2 >>> 0 | (i10 - 48 & 65535) >>> 0 < 10 >>> 0)) {
    break;
   }
   __ZN7WebCore7Decimal10fromStringERKN3WTF6StringE(i5, i2);
   i9 = i5 + 12 | 0;
   i11 = HEAP32[i9 >> 2] | 0;
   if ((i11 | 0) == 2 | (i11 | 0) == 0) {
    __ZN7WebCore7DecimalC1ERKS0_(i1, i3);
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore7Decimal10fromDoubleEd(i6, 3.4028234663852886e+38);
   __ZNK7WebCore7DecimalngEv(i7, i6);
   do {
    if (!(__ZNK7WebCore7DecimalltERKS0_(i5, i7) | 0)) {
     if (__ZNK7WebCore7DecimalgtERKS0_(i5, i6) | 0) {
      break;
     }
     if ((HEAP32[i9 >> 2] | 0) == 3) {
      __ZN7WebCore7DecimalC1Ei(i1, 0);
      STACKTOP = i4;
      return;
     } else {
      __ZN7WebCore7DecimalC1ERKS0_(i1, i5);
      STACKTOP = i4;
      return;
     }
    }
   } while (0);
   __ZN7WebCore7DecimalC1ERKS0_(i1, i3);
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN7WebCore7DecimalC1ERKS0_(i1, i3);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore26parseToDoubleForNumberTypeERKN3WTF6StringEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0, i7 = 0, i8 = 0, d9 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  d6 = d2;
  STACKTOP = i3;
  return +d6;
 }
 if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
  d6 = d2;
  STACKTOP = i3;
  return +d6;
 }
 i7 = i5 + 8 | 0;
 if ((HEAP32[i5 + 16 >> 2] & 32 | 0) == 0) {
  i8 = HEAP16[HEAP32[i7 >> 2] >> 1] | 0;
 } else {
  i8 = HEAPU8[HEAP32[i7 >> 2] | 0] | 0;
 }
 if (!((i8 - 45 & 65535) >>> 0 < 2 >>> 0 | (i8 - 48 & 65535) >>> 0 < 10 >>> 0)) {
  d6 = d2;
  STACKTOP = i3;
  return +d6;
 }
 HEAP8[i4] = 0;
 d9 = +__ZNK3WTF6String8toDoubleEPb(i1, i4);
 if ((HEAP8[i4] & 1) == 0) {
  d6 = d2;
  STACKTOP = i3;
  return +d6;
 }
 HEAPF64[tempDoublePtr >> 3] = d9;
 i4 = HEAP32[tempDoublePtr + 4 >> 2] & 2146435072;
 i1 = 2146435072;
 if (!(i4 >>> 0 < i1 >>> 0 | i4 >>> 0 == i1 >>> 0 & (HEAP32[tempDoublePtr >> 2] & 0) >>> 0 < 0 >>> 0)) {
  d6 = d2;
  STACKTOP = i3;
  return +d6;
 }
 if (d9 < -3.4028234663852886e+38 | d9 > 3.4028234663852886e+38) {
  d6 = d2;
  STACKTOP = i3;
  return +d6;
 }
 d6 = d9 != +0 ? d9 : +0;
 STACKTOP = i3;
 return +d6;
}
function __ZN7WebCore26parseToDoubleForNumberTypeERKN3WTF6StringE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, d5 = +0, i6 = 0, i7 = 0, d8 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  d5 = +NaN;
  STACKTOP = i2;
  return +d5;
 }
 if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
  d5 = +NaN;
  STACKTOP = i2;
  return +d5;
 }
 i6 = i4 + 8 | 0;
 if ((HEAP32[i4 + 16 >> 2] & 32 | 0) == 0) {
  i7 = HEAP16[HEAP32[i6 >> 2] >> 1] | 0;
 } else {
  i7 = HEAPU8[HEAP32[i6 >> 2] | 0] | 0;
 }
 if (!((i7 - 45 & 65535) >>> 0 < 2 >>> 0 | (i7 - 48 & 65535) >>> 0 < 10 >>> 0)) {
  d5 = +NaN;
  STACKTOP = i2;
  return +d5;
 }
 HEAP8[i3] = 0;
 d8 = +__ZNK3WTF6String8toDoubleEPb(i1, i3);
 if ((HEAP8[i3] & 1) == 0) {
  d5 = +NaN;
  STACKTOP = i2;
  return +d5;
 }
 HEAPF64[tempDoublePtr >> 3] = d8;
 i3 = HEAP32[tempDoublePtr + 4 >> 2] & 2146435072;
 i1 = 2146435072;
 if (!(i3 >>> 0 < i1 >>> 0 | i3 >>> 0 == i1 >>> 0 & (HEAP32[tempDoublePtr >> 2] & 0) >>> 0 < 0 >>> 0)) {
  d5 = +NaN;
  STACKTOP = i2;
  return +d5;
 }
 if (d8 < -3.4028234663852886e+38 | d8 > 3.4028234663852886e+38) {
  d5 = +NaN;
  STACKTOP = i2;
  return +d5;
 }
 d5 = d8 != +0 ? d8 : +0;
 STACKTOP = i2;
 return +d5;
}
function __ZN3WTF6VectorIN7WebCore14ImageWithScaleELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
 i1 = i2 + (i6 * 12 & -1) | 0;
 if (i5 >>> 0 > 357913941 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 * 12 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 12 & -1;
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
   i8 = i6 + 12 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
    i7 = i7 + 12 | 0;
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
function __ZN7WebCore15threadSafeMatchERKNS_13QualifiedNameES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] | 0;
 if ((i3 | 0) == (i1 | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 i2 = HEAP32[i3 + 16 >> 2] | 0;
 if (i2 >>> 0 > 127 >>> 0) {
  i5 = i2 >>> 7;
 } else {
  i5 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if (i2 >>> 0 > 127 >>> 0) {
  i6 = i2 >>> 7;
 } else {
  i6 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i1) | 0;
 }
 if ((i5 | 0) != (i6 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = __ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i3, i1) | 0;
 return i4 | 0;
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
function __ZN7WebCoreL18isHTMLSpaceOrCommaEt(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 L1 : do {
  if ((i1 & 65535) >>> 0 < 33 >>> 0) {
   switch (i1 << 16 >> 16) {
   case 32:
   case 10:
   case 9:
   case 13:
   case 12:
    {
     i2 = 1;
     break L1;
     break;
    }
   default:
    {}
   }
   i2 = 0;
  } else {
   i2 = 0;
  }
 } while (0);
 return i2 | i1 << 16 >> 16 == 44 | 0;
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
function __ZN7WebCore14isNotHTMLSpaceEt(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 L1 : do {
  if ((i1 & 65535) >>> 0 < 33 >>> 0) {
   switch (i1 << 16 >> 16) {
   case 32:
   case 10:
   case 9:
   case 13:
   case 12:
    {
     i2 = 0;
     break L1;
     break;
    }
   default:
    {}
   }
   i2 = 1;
  } else {
   i2 = 1;
  }
 } while (0);
 return i2 | 0;
}
function __ZN7WebCore11isHTMLSpaceEt(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 L1 : do {
  if ((i1 & 65535) >>> 0 < 33 >>> 0) {
   switch (i1 << 16 >> 16) {
   case 32:
   case 10:
   case 9:
   case 13:
   case 12:
    {
     i2 = 1;
     break L1;
     break;
    }
   default:
    {}
   }
   i2 = 0;
  } else {
   i2 = 0;
  }
 } while (0);
 return i2 | 0;
}
function __ZN7WebCore27parseToDecimalForNumberTypeERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 __ZN7WebCore7Decimal3nanEv(i4);
 __ZN7WebCore27parseToDecimalForNumberTypeERKN3WTF6StringERKNS_7DecimalE(i1, i2, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22serializeForNumberTypeERKNS_7DecimalE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 3) {
  __ZN3WTF6StringC1EPKc(i1, (HEAP32[i2 + 16 >> 2] | 0) == 1 ? H_BASE + 16 | 0 : H_BASE + 8 | 0);
  return;
 } else {
  __ZNK7WebCore7Decimal8toStringEv(i1, i2);
  return;
 }
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCoreL20compareByScaleFactorERKNS_14ImageWithScaleES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +HEAPF32[i1 + 8 >> 2] < +HEAPF32[i2 + 8 >> 2] | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore22serializeForNumberTypeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 __ZN3WTF6String24numberToStringECMAScriptEd(i1, d2);
 return;
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
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b1() {
 abort(1);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0,__ZN7WebCore14isNotHTMLSpaceEt,b0,__ZN7WebCoreL18isHTMLSpaceOrCommaEt,b0,__ZN7WebCore11isHTMLSpaceEt,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iii = [b2,b2,__ZN7WebCoreL20compareByScaleFactorERKNS_14ImageWithScaleES2_,b2];
  var FUNCTION_TABLE_vi = [b3,b3];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZSt7nothrow": __ZSt7nothrow, "__ZN3WTF9emptyAtomE": __ZN3WTF9emptyAtomE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN3WTF6VectorIN7WebCore14ImageWithScaleELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore16parseHTMLIntegerERKN3WTF6StringERi","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore11isHTMLSpaceEt","__ZNSt3__115__inplace_mergeIRPFbRKN7WebCore14ImageWithScaleES4_EPS2_EEvT0_S9_S9_T_NS_15iterator_traitsIS9_E15difference_typeESD_PNSC_10value_typeEi","_memset","__ZNSt3__113__stable_sortIRPFbRKN7WebCore14ImageWithScaleES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeEi","__ZNSt3__118__stable_sort_moveIRPFbRKN7WebCore14ImageWithScaleES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeE","_memcpy","__ZN7WebCore22serializeForNumberTypeERKNS_7DecimalE","__ZN7WebCoreL20compareByScaleFactorERKNS_14ImageWithScaleES2_","__ZN7WebCore27parseToDecimalForNumberTypeERKN3WTF6StringERKNS_7DecimalE","__ZNSt3__124__buffered_inplace_mergeIRPFbRKN7WebCore14ImageWithScaleES4_EPS2_EEvT0_S9_S9_T_NS_15iterator_traitsIS9_E15difference_typeESD_PNSC_10value_typeE","__ZN7WebCore15threadSafeMatchERKNS_13QualifiedNameES2_","__ZN7WebCore22serializeForNumberTypeEd","__ZN7WebCore26parseToDoubleForNumberTypeERKN3WTF6StringEd","__ZN7WebCore31bestFitSourceForImageAttributesEfRKN3WTF6StringES3_","__ZN7WebCore27parseHTMLNonNegativeIntegerERKN3WTF6StringERj","__ZN7WebCoreL18isHTMLSpaceOrCommaEt","__ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE","__ZN7WebCore26parseToDoubleForNumberTypeERKN3WTF6StringE","__ZN7WebCore14isNotHTMLSpaceEt","__ZN7WebCore27parseToDecimalForNumberTypeERKN3WTF6StringE","_memmove"]

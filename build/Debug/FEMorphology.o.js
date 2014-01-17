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
H_BASE = parentModule["_malloc"](160 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 160;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore12FEMorphologyC1EPNS_6FilterENS_22MorphologyOperatorTypeEff;
/* memory initializer */ allocate([68,73,76,65,84,69,0,0,69,82,79,68,69,0,0,0,85,78,75,78,79,87,78,0,34,93,10,0,0,0,0,0,44,32,0,0,0,0,0,0,114,97,100,105,117,115,61,34,0,0,0,0,0,0,0,0,34,32,0,0,0,0,0,0,32,111,112,101,114,97,116,111,114,61,34,0,0,0,0,0,91,102,101,77,111,114,112,104,111,108,111,103,121,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_fif(index,a1,a2) {
  try {
    return Module["dynCall_fif"](index,a1,a2);
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
function invoke_viiiff(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiff"](index,a1,a2,a3,a4,a5);
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
  var __ZTVN7WebCore12FEMorphologyE=(H_BASE+104)|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_fif=env.invoke_fif;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiiff=env.invoke_viiiff;
  var _malloc=env._malloc;
  var _floorf=env._floorf;
  var ___setErrNo=env.___setErrNo;
  var _rint=env._rint;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore12FEMorphology20platformApplyGenericEPNS0_12PaintingDataEii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, d62 = +0, i63 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 i10 = HEAP32[i2 + 4 >> 2] | 0;
 i11 = HEAP32[i2 + 8 >> 2] | 0;
 i12 = HEAP32[i2 + 12 >> 2] | 0;
 i13 = i11 << 2;
 i14 = HEAP32[i2 + 16 >> 2] | 0;
 i15 = HEAP32[i2 + 20 >> 2] | 0;
 i2 = i6 | 0;
 HEAP32[i2 >> 2] = 0;
 i16 = i6 + 4 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i6 + 8 | 0;
 HEAP32[i17 >> 2] = 0;
 do {
  if ((i3 | 0) < (i4 | 0)) {
   i18 = i12 - 1 | 0;
   i19 = (i14 | 0) < 0;
   i20 = (i11 | 0) > 0;
   i21 = i11 - 1 | 0;
   i22 = i9 + 8 | 0;
   i23 = i1 + 120 | 0;
   i24 = i10 + 8 | 0;
   i25 = i3;
   L3 : while (1) {
    i26 = i25 - i15 | 0;
    i27 = (i26 | 0) > 0 ? i26 : 0;
    i26 = i25 + i15 | 0;
    i28 = (i26 | 0) < (i18 | 0) ? i26 : i18;
    i26 = Math_imul(i27, i13) | 0;
    i29 = i27 + 1 | 0;
    i27 = (i29 | 0) > (i28 | 0);
    i30 = Math_imul(i25, i13) | 0;
    i31 = (i29 | 0) < (i28 | 0);
    i32 = 0;
    while (1) {
     do {
      if ((HEAP32[i16 >> 2] | 0) != 0) {
       if ((HEAP32[i17 >> 2] | 0) != 0) {
        HEAP32[i17 >> 2] = 0;
       }
       i33 = HEAP32[i2 >> 2] | 0;
       if ((i33 | 0) == 0) {
        break;
       }
       HEAP32[i2 >> 2] = 0;
       HEAP32[i16 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i33);
      }
     } while (0);
     L14 : do {
      if (!i19) {
       i33 = i32 + i26 | 0;
       if (i31) {
        i34 = 0;
       } else {
        i35 = 0;
        while (1) {
         i36 = HEAP8[(HEAP32[i22 >> 2] | 0) + (i33 + (i35 << 2)) | 0] | 0;
         HEAP8[i7] = i36;
         i37 = HEAP32[i17 >> 2] | 0;
         if ((i37 | 0) == (HEAP32[i16 >> 2] | 0)) {
          __ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE14appendSlowCaseIRhEEvOT_(i6, i7);
         } else {
          HEAP8[(HEAP32[i2 >> 2] | 0) + i37 | 0] = i36;
          HEAP32[i17 >> 2] = i37 + 1;
         }
         i35 = i35 + 1 | 0;
         if ((i35 | 0) > (i14 | 0)) {
          break L14;
         }
        }
       }
       while (1) {
        i35 = i34 << 2;
        i37 = HEAP32[i22 >> 2] | 0;
        i36 = HEAP8[i37 + (i33 + i35) | 0] | 0;
        HEAP8[i7] = i36;
        i38 = i35 + i32 | 0;
        i35 = HEAP32[i23 >> 2] | 0;
        i39 = i29;
        i40 = i35;
        i41 = i36;
        while (1) {
         i36 = HEAP8[i37 + (i38 + (Math_imul(i39, i13) | 0)) | 0] | 0;
         if ((i40 | 0) == 1) {
          if ((i36 & 255) >>> 0 > (i41 & 255) >>> 0) {
           i42 = i35;
           i43 = 17;
          } else {
           i44 = 1;
           i43 = 19;
          }
         } else {
          i42 = i40;
          i43 = 17;
         }
         do {
          if ((i43 | 0) == 17) {
           i43 = 0;
           if ((i42 | 0) != 2) {
            i45 = i42;
            i46 = i41;
            break;
           }
           if ((i36 & 255) >>> 0 < (i41 & 255) >>> 0) {
            i45 = 2;
            i46 = i41;
           } else {
            i44 = 2;
            i43 = 19;
           }
          }
         } while (0);
         if ((i43 | 0) == 19) {
          i43 = 0;
          HEAP8[i7] = i36;
          i45 = i44;
          i46 = i36;
         }
         i47 = i39 + 1 | 0;
         if ((i47 | 0) < (i28 | 0)) {
          i39 = i47;
          i40 = i45;
          i41 = i46;
         } else {
          break;
         }
        }
        i41 = HEAP32[i17 >> 2] | 0;
        if ((i41 | 0) == (HEAP32[i16 >> 2] | 0)) {
         __ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE14appendSlowCaseIRhEEvOT_(i6, i7);
        } else {
         HEAP8[(HEAP32[i2 >> 2] | 0) + i41 | 0] = i46;
         HEAP32[i17 >> 2] = i41 + 1;
        }
        i34 = i34 + 1 | 0;
        if ((i34 | 0) > (i14 | 0)) {
         break;
        }
       }
      }
     } while (0);
     if (i20) {
      i33 = i32 + i26 | 0;
      i41 = i32 + i30 | 0;
      i40 = 0;
      while (1) {
       i39 = i40 + i14 | 0;
       i35 = ((i21 | 0) < (i39 | 0) ? i21 : i39) << 2;
       i38 = HEAP32[i22 >> 2] | 0;
       i37 = HEAP8[i38 + (i33 + i35) | 0] | 0;
       HEAP8[i8] = i37;
       if (!i27) {
        i47 = i35 + i32 | 0;
        i35 = HEAP32[i23 >> 2] | 0;
        i48 = i29;
        i49 = i35;
        i50 = i37;
        while (1) {
         i37 = HEAP8[i38 + (i47 + (Math_imul(i48, i13) | 0)) | 0] | 0;
         if ((i49 | 0) == 1) {
          if ((i37 & 255) >>> 0 > (i50 & 255) >>> 0) {
           i51 = i35;
           i43 = 32;
          } else {
           i52 = 1;
           i43 = 35;
          }
         } else {
          i51 = i49;
          i43 = 32;
         }
         do {
          if ((i43 | 0) == 32) {
           i43 = 0;
           if ((i51 | 0) != 2) {
            i53 = i51;
            i54 = i50;
            break;
           }
           if ((i37 & 255) >>> 0 < (i50 & 255) >>> 0) {
            i53 = 2;
            i54 = i50;
           } else {
            i52 = 2;
            i43 = 35;
           }
          }
         } while (0);
         if ((i43 | 0) == 35) {
          i43 = 0;
          HEAP8[i8] = i37;
          i53 = i52;
          i54 = i37;
         }
         i55 = i48 + 1 | 0;
         if ((i55 | 0) > (i28 | 0)) {
          break;
         } else {
          i48 = i55;
          i49 = i53;
          i50 = i54;
         }
        }
       }
       if ((i40 - i14 | 0) > -1) {
        i50 = HEAP32[i2 >> 2] | 0;
        i49 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
        _memmove(i50 | 0, i50 + 1 | 0, i49 | 0) | 0;
        HEAP32[i17 >> 2] = i49;
       }
       do {
        if ((i39 | 0) > (i11 | 0)) {
         i43 = 42;
        } else {
         i49 = HEAP32[i17 >> 2] | 0;
         if ((i49 | 0) == (HEAP32[i16 >> 2] | 0)) {
          __ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE14appendSlowCaseIRhEEvOT_(i6, i8);
          i43 = 42;
          break;
         } else {
          HEAP8[(HEAP32[i2 >> 2] | 0) + i49 | 0] = HEAP8[i8] | 0;
          i50 = i49 + 1 | 0;
          HEAP32[i17 >> 2] = i50;
          i56 = i50;
          break;
         }
        }
       } while (0);
       if ((i43 | 0) == 42) {
        i43 = 0;
        i56 = HEAP32[i17 >> 2] | 0;
       }
       if ((i56 | 0) == 0) {
        i43 = 44;
        break L3;
       }
       i39 = HEAP32[i2 >> 2] | 0;
       i50 = HEAP8[i39] | 0;
       L70 : do {
        if (i56 >>> 0 > 1 >>> 0) {
         i49 = HEAP32[i23 >> 2] | 0;
         if ((i49 | 0) == 1) {
          i48 = i50;
          i35 = 1;
          while (1) {
           i47 = HEAP8[i39 + i35 | 0] | 0;
           if ((i47 & 255) >>> 0 > (i48 & 255) >>> 0) {
            i57 = i48;
           } else {
            if (i56 >>> 0 > i35 >>> 0) {
             i57 = i47;
            } else {
             i43 = 68;
             break L3;
            }
           }
           i47 = i35 + 1 | 0;
           if (i47 >>> 0 < i56 >>> 0) {
            i48 = i57;
            i35 = i47;
           } else {
            i58 = i57;
            break L70;
           }
          }
         } else {
          i59 = i50;
          i60 = 1;
         }
         while (1) {
          do {
           if ((i49 | 0) == 2) {
            if (i56 >>> 0 <= i60 >>> 0) {
             i43 = 52;
             break L3;
            }
            if ((HEAPU8[i39 + i60 | 0] | 0) >>> 0 < (i59 & 255) >>> 0) {
             i61 = i59;
             break;
            }
            if (i56 >>> 0 <= i60 >>> 0) {
             i43 = 69;
             break L3;
            }
            i61 = HEAP8[i39 + i60 | 0] | 0;
           } else {
            i61 = i59;
           }
          } while (0);
          i36 = i60 + 1 | 0;
          if (i36 >>> 0 < i56 >>> 0) {
           i59 = i61;
           i60 = i36;
          } else {
           i58 = i61;
           break;
          }
         }
        } else {
         i58 = i50;
        }
       } while (0);
       d62 = +((i58 & 255) >>> 0);
       HEAPF64[tempDoublePtr >> 3] = d62;
       i50 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
       i39 = 2146435072;
       if (i50 >>> 0 > i39 >>> 0 | i50 >>> 0 == i39 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0) {
        i63 = 0;
       } else {
        i63 = (_rint(+d62) | 0) & 255;
       }
       HEAP8[(HEAP32[i24 >> 2] | 0) + (i41 + (i40 << 2)) | 0] = i63;
       i40 = i40 + 1 | 0;
       if ((i40 | 0) >= (i11 | 0)) {
        break;
       }
      }
     }
     i32 = i32 + 1 | 0;
     if (i32 >>> 0 >= 4 >>> 0) {
      break;
     }
    }
    i32 = i25 + 1 | 0;
    if ((i32 | 0) < (i4 | 0)) {
     i25 = i32;
    } else {
     i43 = 63;
     break;
    }
   }
   if ((i43 | 0) == 44) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i43 | 0) == 52) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i43 | 0) == 63) {
    if ((HEAP32[i17 >> 2] | 0) == 0) {
     break;
    }
    HEAP32[i17 >> 2] = 0;
    break;
   } else if ((i43 | 0) == 68) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i43 | 0) == 69) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 i43 = HEAP32[i2 >> 2] | 0;
 if ((i43 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i16 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i43);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore12FEMorphology13platformApplyEPNS0_12PaintingDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i2 + 12 | 0;
 i6 = Math_imul(HEAP32[i5 >> 2] | 0, HEAP32[i2 + 8 >> 2] | 0) | 0;
 do {
  if ((i6 | 0) > 179999) {
   i7 = i4 | 0;
   __ZN3WTF19ParallelEnvironmentC1EPFvPvEji(i7, F_BASE_vi + 6 | 0, 16, (i6 | 0) / 9e4 & -1);
   i8 = i4 + 24 | 0;
   HEAP32[i8 >> 2] = 0;
   i9 = i4 + 28 | 0;
   HEAP32[i9 >> 2] = 0;
   i10 = i4 + 32 | 0;
   HEAP32[i10 >> 2] = 0;
   i11 = HEAP32[i4 + 8 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i12 = i11 >>> 0 < 16 >>> 0 ? 16 : i11;
     do {
      if ((i12 | 0) != 0) {
       if (i12 >>> 0 > 268435455 >>> 0) {
        _WTFCrash();
       } else {
        i13 = __ZN3WTF18fastMallocGoodSizeEj(i12 << 4) | 0;
        HEAP32[i9 >> 2] = i13 >>> 4;
        HEAP32[i8 >> 2] = __ZN3WTF10fastMallocEj(i13) | 0;
        break;
       }
      }
     } while (0);
     HEAP32[i10 >> 2] = i11;
     if ((i11 | 0) <= 1) {
      break;
     }
     i12 = HEAP32[i5 >> 2] | 0;
     i13 = (i12 | 0) / (i11 | 0) & -1;
     i14 = (i12 | 0) % (i11 | 0) & -1;
     i12 = 0;
     i15 = i11;
     i16 = i11;
     while (1) {
      i17 = i15 - 1 | 0;
      if (i16 >>> 0 <= i17 >>> 0) {
       i18 = 11;
       break;
      }
      i19 = HEAP32[i8 >> 2] | 0;
      HEAP32[i19 + (i17 << 4) >> 2] = i1;
      HEAP32[i19 + (i17 << 4) + 4 >> 2] = i12;
      i20 = i12 + i13 + ((i17 | 0) < (i14 | 0)) | 0;
      HEAP32[i19 + (i17 << 4) + 8 >> 2] = i20;
      HEAP32[i19 + (i17 << 4) + 12 >> 2] = i2;
      if ((i17 | 0) <= 0) {
       break;
      }
      i12 = i20;
      i15 = i17;
      i16 = HEAP32[i10 >> 2] | 0;
     }
     if ((i18 | 0) == 11) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     __ZN3WTF19ParallelEnvironment7executeEPv(i7, HEAP32[i8 >> 2] | 0);
     if ((HEAP32[i10 >> 2] | 0) != 0) {
      HEAP32[i10 >> 2] = 0;
     }
     i16 = HEAP32[i8 >> 2] | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i8 >> 2] = 0;
      HEAP32[i9 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i16);
     }
     i16 = i4 + 20 | 0;
     i15 = HEAP32[i16 >> 2] | 0;
     i12 = i4 + 12 | 0;
     if ((i15 | 0) != 0) {
      i14 = HEAP32[i12 >> 2] | 0;
      i13 = i14 + (i15 << 2) | 0;
      i15 = i14;
      while (1) {
       i14 = HEAP32[i15 >> 2] | 0;
       do {
        if ((i14 | 0) != 0) {
         i17 = i14 | 0;
         i20 = i14 | 0;
         i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
         if ((i19 | 0) == 0) {
          __ZN3WTF15ThreadConditionD1Ev(i17 + 40 | 0);
          __ZN3WTF5MutexD1Ev(i17 + 16 | 0);
          __ZN3WTF8fastFreeEPv(i14);
          break;
         } else {
          HEAP32[i20 >> 2] = i19;
          break;
         }
        }
       } while (0);
       i15 = i15 + 4 | 0;
       if ((i15 | 0) == (i13 | 0)) {
        break;
       }
      }
      HEAP32[i16 >> 2] = 0;
     }
     i13 = HEAP32[i12 >> 2] | 0;
     if ((i13 | 0) == 0) {
      STACKTOP = i3;
      return;
     }
     HEAP32[i12 >> 2] = 0;
     HEAP32[i4 + 16 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i13);
     STACKTOP = i3;
     return;
    }
   } while (0);
   HEAP32[i10 >> 2] = 0;
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i9 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i7);
   }
   i7 = i4 + 20 | 0;
   i11 = HEAP32[i7 >> 2] | 0;
   i13 = i4 + 12 | 0;
   if ((i11 | 0) != 0) {
    i15 = HEAP32[i13 >> 2] | 0;
    i14 = i15 + (i11 << 2) | 0;
    i11 = i15;
    while (1) {
     i15 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i15 | 0) != 0) {
       i19 = i15 | 0;
       i20 = i15 | 0;
       i17 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
       if ((i17 | 0) == 0) {
        __ZN3WTF15ThreadConditionD1Ev(i19 + 40 | 0);
        __ZN3WTF5MutexD1Ev(i19 + 16 | 0);
        __ZN3WTF8fastFreeEPv(i15);
        break;
       } else {
        HEAP32[i20 >> 2] = i17;
        break;
       }
      }
     } while (0);
     i11 = i11 + 4 | 0;
     if ((i11 | 0) == (i14 | 0)) {
      break;
     }
    }
    HEAP32[i7 >> 2] = 0;
   }
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   HEAP32[i13 >> 2] = 0;
   HEAP32[i4 + 16 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i14);
  }
 } while (0);
 __ZN7WebCore12FEMorphology20platformApplyGenericEPNS0_12PaintingDataEii(i1, i2, 0, HEAP32[i5 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12FEMorphology21platformApplySoftwareEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 40 | 0;
 i7 = i1 | 0;
 i8 = __ZNK7WebCore12FilterEffect11inputEffectEj(i7, 0) | 0;
 i9 = __ZN7WebCore12FilterEffect30createPremultipliedImageResultEv(i7) | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP8[i1 + 32 | 0] = HEAP8[i8 + 32 | 0] & 1;
 d10 = +HEAPF32[i1 + 124 >> 2];
 do {
  if (d10 > +0) {
   i11 = i1 + 128 | 0;
   if (+HEAPF32[i11 >> 2] <= +0) {
    break;
   }
   i12 = HEAP32[i1 + 68 >> 2] | 0;
   i13 = i12;
   i14 = ~~+Math_floor(+FUNCTION_TABLE_fif[HEAP32[(HEAP32[i13 >> 2] | 0) + 12 >> 2] & 1](i12, d10));
   i15 = ~~+Math_floor(+FUNCTION_TABLE_fif[HEAP32[(HEAP32[i13 >> 2] | 0) + 16 >> 2] & 1](i12, +HEAPF32[i11 >> 2]));
   i11 = i4;
   i12 = i8 + 36 | 0;
   HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i11 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
   HEAP32[i11 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
   HEAP32[i11 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
   __ZNK7WebCore12FilterEffect31requestedRegionOfInputImageDataERKNS_7IntRectE(i3, i7, i4);
   __ZN7WebCore12FilterEffect20asPremultipliedImageERKNS_7IntRectE(i5, i8, i3);
   i12 = i5 | 0;
   i11 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i6 >> 2] = i11;
   HEAP32[i6 + 4 >> 2] = i9;
   i12 = HEAP32[i3 + 8 >> 2] | 0;
   HEAP32[i6 + 8 >> 2] = i12;
   i13 = HEAP32[i3 + 12 >> 2] | 0;
   HEAP32[i6 + 12 >> 2] = i13;
   i16 = i12 - 1 | 0;
   HEAP32[i6 + 16 >> 2] = (i14 | 0) < (i16 | 0) ? i14 : i16;
   i16 = i13 - 1 | 0;
   HEAP32[i6 + 20 >> 2] = (i15 | 0) < (i16 | 0) ? i15 : i16;
   __ZN7WebCore12FEMorphology13platformApplyEPNS0_12PaintingDataE(i1, i6);
   if ((i11 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   i16 = i11 + 4 | 0;
   i11 = i16 | 0;
   i15 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i11 >> 2] = i15;
    STACKTOP = i2;
    return;
   }
   i15 = i16 - 4 | 0;
   if ((i15 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 12 >> 2] & 15](i15);
   STACKTOP = i2;
   return;
  }
 } while (0);
 i6 = i9 + 16 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i17 = 0;
  } else {
   if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
    i17 = 0;
    break;
   }
   i17 = HEAP32[i9 + 20 >> 2] | 0;
  }
 } while (0);
 i1 = i9 | 0;
 i3 = i9;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 7](i1) | 0;
 if (i17 >>> 0 > (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 7](i1) | 0) >>> 0) {
  STACKTOP = i2;
  return;
 }
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i18 = 0;
  } else {
   if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
    i18 = 0;
    break;
   }
   i18 = HEAP32[i9 + 8 >> 2] | 0;
  }
 } while (0);
 _memset(i18 | 0, 0, i17 | 0) | 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12FEMorphology26determineAbsolutePaintRectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 48 | 0;
 i7 = i2 + 64 | 0;
 i8 = i4;
 i9 = (__ZNK7WebCore12FilterEffect11inputEffectEj(i1 | 0, 0) | 0) + 36 | 0;
 HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i3, i4);
 i4 = HEAP32[i1 + 68 >> 2] | 0;
 i9 = i4;
 d10 = +FUNCTION_TABLE_fif[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 1](i4, +HEAPF32[i1 + 124 >> 2]);
 i8 = i3 | 0;
 HEAPF32[i8 >> 2] = +HEAPF32[i8 >> 2] - d10;
 i8 = i3 + 8 | 0;
 HEAPF32[i8 >> 2] = d10 + (d10 + +HEAPF32[i8 >> 2]);
 d10 = +FUNCTION_TABLE_fif[HEAP32[(HEAP32[i9 >> 2] | 0) + 16 >> 2] & 1](i4, +HEAPF32[i1 + 128 >> 2]);
 i4 = i3 + 4 | 0;
 HEAPF32[i4 >> 2] = +HEAPF32[i4 >> 2] - d10;
 i4 = i3 + 12 | 0;
 HEAPF32[i4 >> 2] = d10 + (d10 + +HEAPF32[i4 >> 2]);
 i4 = i1 + 52 | 0;
 if ((HEAP8[i1 + 108 | 0] & 1) == 0) {
  i9 = i6;
  i8 = i4;
  HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
  HEAP32[i9 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
  HEAP32[i9 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
  __ZN7WebCore9FloatRect5uniteERKS0_(i3, i6);
  __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i7, i3);
  i11 = i1 + 36 | 0;
  i12 = i11;
  i13 = i7;
  HEAP32[i12 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i12 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
  HEAP32[i12 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
  HEAP32[i12 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
  STACKTOP = i2;
  return;
 } else {
  i6 = i5;
  i8 = i4;
  HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i6 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
  HEAP32[i6 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
  HEAP32[i6 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
  __ZN7WebCore9FloatRect9intersectERKS0_(i3, i5);
  __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i7, i3);
  i11 = i1 + 36 | 0;
  i12 = i11;
  i13 = i7;
  HEAP32[i12 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i12 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
  HEAP32[i12 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
  HEAP32[i12 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE14appendSlowCaseIRhEEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + i4 | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = i2 - i7 | 0;
   i10 = i1 + 4 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = i11 + 1 + (i11 >>> 2) | 0;
   i13 = i12 >>> 0 > 16 >>> 0 ? i12 : 16;
   i12 = i13 >>> 0 > i5 >>> 0 ? i13 : i5;
   do {
    if (i11 >>> 0 < i12 >>> 0) {
     i13 = __ZN3WTF18fastMallocGoodSizeEj(i12) | 0;
     HEAP32[i10 >> 2] = i13;
     i14 = __ZN3WTF10fastMallocEj(i13) | 0;
     HEAP32[i6 >> 2] = i14;
     _memcpy(i14 | 0, i7 | 0, i4) | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     if ((HEAP32[i6 >> 2] | 0) == (i7 | 0)) {
      HEAP32[i6 >> 2] = 0;
      HEAP32[i10 >> 2] = 0;
     }
     __ZN3WTF8fastFreeEPv(i7);
    }
   } while (0);
   i15 = (HEAP32[i6 >> 2] | 0) + i9 | 0;
  }
 } while (0);
 do {
  if ((i8 | 0) == 3) {
   i10 = i1 + 4 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   i11 = i12 + 1 + (i12 >>> 2) | 0;
   i14 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
   i11 = i14 >>> 0 > i5 >>> 0 ? i14 : i5;
   if (i12 >>> 0 >= i11 >>> 0) {
    i15 = i2;
    break;
   }
   i12 = __ZN3WTF18fastMallocGoodSizeEj(i11) | 0;
   HEAP32[i10 >> 2] = i12;
   i11 = __ZN3WTF10fastMallocEj(i12) | 0;
   HEAP32[i6 >> 2] = i11;
   _memcpy(i11 | 0, i7 | 0, i4) | 0;
   if ((i7 | 0) == 0) {
    i15 = i2;
    break;
   }
   if ((HEAP32[i6 >> 2] | 0) == (i7 | 0)) {
    HEAP32[i6 >> 2] = 0;
    HEAP32[i10 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i7);
   i15 = i2;
  }
 } while (0);
 HEAP8[(HEAP32[i6 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0] = HEAP8[i15] | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZNK7WebCore12FEMorphology22externalRepresentationERNS_10TextStreamEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3);
 __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 88 | 0) | 0;
 i4 = i1 | 0;
 __ZNK7WebCore12FilterEffect22externalRepresentationERNS_10TextStreamEi(i4, i2, 0) | 0;
 i5 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 72 | 0) | 0;
 i6 = HEAP32[i1 + 120 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore10TextStreamlsEPKc(i5, H_BASE + 24 | 0) | 0;
 } else if ((i6 | 0) == 1) {
  __ZN7WebCore10TextStreamlsEPKc(i5, H_BASE + 16 | 0) | 0;
 } else if ((i6 | 0) == 2) {
  __ZN7WebCore10TextStreamlsEPKc(i5, H_BASE + 8 | 0) | 0;
 }
 i6 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEPKc(i5, H_BASE + 64 | 0) | 0, H_BASE + 48 | 0) | 0;
 i5 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i6, +HEAPF32[i1 + 124 >> 2]) | 0, H_BASE + 40 | 0) | 0;
 __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i5, +HEAPF32[i1 + 128 >> 2]) | 0, H_BASE + 32 | 0) | 0;
 i1 = __ZNK7WebCore12FilterEffect11inputEffectEj(i4, 0) | 0;
 FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 3](i1, i2, i3 + 1 | 0) | 0;
 return i2 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 4;
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
function __ZN7WebCore12FEMorphology6createEPNS_6FilterENS_22MorphologyOperatorTypeEff(i1, i2, i3, d4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 d5 = +d5;
 var i6 = 0;
 i6 = __ZN3WTF10fastMallocEj(132) | 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i6, i2);
 HEAP32[i6 >> 2] = H_BASE + 112;
 HEAP32[i6 + 120 >> 2] = i3;
 HEAPF32[i6 + 124 >> 2] = d4;
 HEAPF32[i6 + 128 >> 2] = d5;
 HEAP32[i1 >> 2] = i6;
 return;
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
function __ZN7WebCore12FEMorphologyC2EPNS_6FilterENS_22MorphologyOperatorTypeEff(i1, i2, i3, d4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 d5 = +d5;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 112;
 HEAP32[i1 + 120 >> 2] = i3;
 HEAPF32[i1 + 124 >> 2] = d4;
 HEAPF32[i1 + 128 >> 2] = d5;
 return;
}
function __ZN7WebCore12FEMorphologyC1EPNS_6FilterENS_22MorphologyOperatorTypeEff(i1, i2, i3, d4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 d5 = +d5;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 112;
 HEAP32[i1 + 120 >> 2] = i3;
 HEAPF32[i1 + 124 >> 2] = d4;
 HEAPF32[i1 + 128 >> 2] = d5;
 return;
}
function __ZN7WebCore12FEMorphology19platformApplyWorkerEPNS0_23PlatformApplyParametersE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12FEMorphology20platformApplyGenericEPNS0_12PaintingDataEii(HEAP32[i1 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0, HEAP32[i1 + 4 >> 2] | 0, HEAP32[i1 + 8 >> 2] | 0);
 return;
}
function __ZN7WebCore12FEMorphology21setMorphologyOperatorENS_22MorphologyOperatorTypeE(i1, i2) {
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
function __ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12FilterEffect25transformResultColorSpaceENS_10ColorSpaceE(i2, HEAP32[i1 + 112 >> 2] | 0);
 return;
}
function __ZN7WebCore12FEMorphology10setRadiusYEf(i1, d2) {
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
function __ZN7WebCore12FEMorphology10setRadiusXEf(i1, d2) {
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiiff(i1, i2, i3, i4, d5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 d6 = +d6;
 FUNCTION_TABLE_viiiff[i1 & 3](i2 | 0, i3 | 0, i4 | 0, +d5, +d6);
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0) | 0;
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
function __ZN7WebCore12FEMorphologyD0Ev(i1) {
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
function dynCall_fif(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_fif[i1 & 1](i2 | 0, +d3);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function __ZNK7WebCore12FEMorphology18morphologyOperatorEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 120 >> 2] | 0;
}
function __ZN7WebCore12FEMorphologyD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12FilterEffectD2Ev(i1 | 0);
 return;
}
function b8(i1, i2, i3, d4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 d5 = +d5;
 abort(8);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZNK7WebCore12FEMorphology7radiusYEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[i1 + 128 >> 2]);
}
function __ZNK7WebCore12FEMorphology7radiusXEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[i1 + 124 >> 2]);
}
function __ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
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
function __ZN7WebCore12FEMorphology4dumpEv(i1) {
 i1 = i1 | 0;
 return;
}
function b4(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(4);
 return +0;
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
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
  var FUNCTION_TABLE_ii = [b0,b0,__ZNK7WebCore12FilterEffect16filterEffectTypeEv,b0,__ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv,b1,__ZN7WebCore12FEMorphology21platformApplySoftwareEv,b1,__ZN7WebCore12FEMorphology19platformApplyWorkerEPNS0_23PlatformApplyParametersE,b1,__ZN7WebCore12FEMorphology4dumpEv,b1,__ZN7WebCore12FEMorphology26determineAbsolutePaintRectEv,b1,__ZN7WebCore12FEMorphologyD1Ev,b1,__ZN7WebCore12FEMorphologyD0Ev,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE,b2,__ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE,b2,b2,b2];
  var FUNCTION_TABLE_iiii = [b3,b3,__ZNK7WebCore12FEMorphology22externalRepresentationERNS_10TextStreamEi,b3];
  var FUNCTION_TABLE_fif = [b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  var FUNCTION_TABLE_viiiff = [b8,b8,__ZN7WebCore12FEMorphologyC2EPNS_6FilterENS_22MorphologyOperatorTypeEff,b8];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiii: dynCall_iiii, dynCall_fif: dynCall_fif, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiiff: dynCall_viiiff };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiii": invoke_iiii, "invoke_fif": invoke_fif, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiiff": invoke_viiiff, "_malloc": _malloc, "_floorf": _floorf, "___setErrNo": ___setErrNo, "_rint": _rint, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_fif = Module["dynCall_fif"] = asm["dynCall_fif"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiiff = Module["dynCall_viiiff"] = asm["dynCall_viiiff"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore12FEMorphology6createEPNS_6FilterENS_22MorphologyOperatorTypeEff","_strlen","__ZN7WebCore12FEMorphology21setMorphologyOperatorENS_22MorphologyOperatorTypeE","__ZN7WebCore12FEMorphology20platformApplyGenericEPNS0_12PaintingDataEii","__ZN7WebCore12FEMorphology13platformApplyEPNS0_12PaintingDataE","__ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv","__ZN7WebCore12FEMorphology26determineAbsolutePaintRectEv","_memset","_memcpy","__ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i","__ZNK7WebCore12FEMorphology7radiusXEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore12FEMorphology7radiusYEv","__ZN7WebCore12FEMorphology21platformApplySoftwareEv","__ZN7WebCore12FEMorphology19platformApplyWorkerEPNS0_23PlatformApplyParametersE","__ZNK7WebCore12FEMorphology22externalRepresentationERNS_10TextStreamEi","__ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE14appendSlowCaseIRhEEvOT_","__ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE","__ZN7WebCore12FEMorphologyD0Ev","__ZN7WebCore12FEMorphologyC2EPNS_6FilterENS_22MorphologyOperatorTypeEff","__ZN7WebCore12FEMorphologyD1Ev","__ZN7WebCore12FEMorphology10setRadiusXEf","__ZNK7WebCore12FilterEffect16filterEffectTypeEv","__ZNK7WebCore12FEMorphology18morphologyOperatorEv","__ZN7WebCore12FEMorphology10setRadiusYEf","_memmove","__ZN7WebCore12FEMorphology4dumpEv","__ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv","__ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE"]

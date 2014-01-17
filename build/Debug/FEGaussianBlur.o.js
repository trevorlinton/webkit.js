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
var __ZN7WebCore14FEGaussianBlurC1EPNS_6FilterEffNS_12EdgeModeTypeE;
/* memory initializer */ allocate([34,93,10,0,0,0,0,0,44,32,0,0,0,0,0,0,32,115,116,100,68,101,118,105,97,116,105,111,110,61,34,0,91,102,101,71,97,117,115,115,105,97,110,66,108,117,114,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiffi(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiffi"](index,a1,a2,a3,a4,a5);
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
  var __ZTVN7WebCore14FEGaussianBlurE=(H_BASE+56)|0;
  var __ZTVN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEEE=(H_BASE+120)|0;
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
  var invoke_viiffi=env.invoke_viiffi;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var _floorf=env._floorf;
  var ___setErrNo=env.___setErrNo;
  var _rint=env._rint;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore14FEGaussianBlur13platformApplyEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEES5_jjRNS_7IntSizeE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i8 = i7 | 0;
 i9 = i7 + 40 | 0;
 i10 = i7 + 48 | 0;
 i11 = i6 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = i12 << 2;
 i14 = ~~(+((i5 * 3 & -1) >>> 0 >>> 0) * +.5);
 i15 = i6 + 4 | 0;
 i16 = (Math_imul(HEAP32[i15 >> 2] | 0, i12) | 0) / ((Math_imul(i12, i14) | 0) + 1e4 | 0) & -1;
 if ((i16 | 0) > 1) {
  i12 = i8 | 0;
  __ZN3WTF19ParallelEnvironmentC1EPFvPvEji(i12, F_BASE_vi + 14 | 0, 28, i16);
  i16 = i8 + 24 | 0;
  i17 = i16 | 0;
  HEAP32[i17 >> 2] = 0;
  HEAP32[i8 + 28 >> 2] = 0;
  i18 = i8 + 32 | 0;
  HEAP32[i18 >> 2] = 0;
  i19 = HEAP32[i8 + 8 >> 2] | 0;
  do {
   if ((i19 | 0) == 0) {
    HEAP32[i18 >> 2] = 0;
   } else {
    __ZN3WTF6VectorIN7WebCore14FEGaussianBlur23PlatformApplyParametersELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i16, i19 >>> 0 < 16 >>> 0 ? 16 : i19);
    i20 = HEAP32[i17 >> 2] | 0;
    do {
     if ((i20 | 0) != 0) {
      i21 = HEAP32[i18 >> 2] | 0;
      i22 = i20 + (i19 * 28 & -1) | 0;
      if ((i21 | 0) == (i19 | 0)) {
       break;
      }
      i23 = i20 + (i21 * 28 & -1) | 0;
      while (1) {
       HEAP32[i23 + 4 >> 2] = 0;
       HEAP32[i23 + 8 >> 2] = 0;
       i23 = i23 + 28 | 0;
       if ((i23 | 0) == (i22 | 0)) {
        break;
       }
      }
     }
    } while (0);
    HEAP32[i18 >> 2] = i19;
    if ((i19 | 0) <= 1) {
     break;
    }
    i20 = HEAP32[i15 >> 2] | 0;
    i22 = (i20 | 0) / (i19 | 0) & -1;
    i23 = (i20 | 0) % (i19 | 0) & -1;
    i20 = i8 + 24 | 0;
    i21 = i19 - 1 | 0;
    i24 = i9 | 0;
    i25 = i10 | 0;
    i26 = i2 + 16 | 0;
    i27 = i2 + 8 | 0;
    i28 = (i2 | 0) == 0;
    i29 = (i3 | 0) == 0;
    i30 = i3 + 4 | 0;
    i31 = i2 + 4 | 0;
    i32 = 0;
    i33 = 0;
    i34 = i19;
    while (1) {
     if (i34 >>> 0 <= i32 >>> 0) {
      i35 = 11;
      break;
     }
     i36 = HEAP32[i20 >> 2] | 0;
     HEAP32[i36 + (i32 * 28 & -1) >> 2] = i1;
     i37 = (i32 | 0) != 0;
     i38 = i37 ? i33 - i14 | 0 : 0;
     i39 = i33 + i22 + ((i32 | 0) < (i23 | 0)) | 0;
     i40 = i39 + ((i32 | 0) == (i21 | 0) ? 0 : i14) - i38 | 0;
     i41 = Math_imul(i40, i13) | 0;
     i42 = i36 + (i32 * 28 & -1) + 4 | 0;
     do {
      if (i37) {
       __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE19createUninitializedEj(i9, i41);
       i43 = HEAP32[i24 >> 2] | 0;
       HEAP32[i24 >> 2] = 0;
       i44 = i42 | 0;
       i45 = HEAP32[i44 >> 2] | 0;
       HEAP32[i44 >> 2] = i43;
       do {
        if ((i45 | 0) != 0) {
         i43 = i45 + 4 | 0;
         i46 = i43 | 0;
         i47 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
         if ((i47 | 0) != 0) {
          HEAP32[i46 >> 2] = i47;
          break;
         }
         i47 = i43 - 4 | 0;
         if ((i47 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i47 >> 2] | 0) + 12 >> 2] & 31](i47);
        }
       } while (0);
       __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE19createUninitializedEj(i10, i41);
       i45 = HEAP32[i25 >> 2] | 0;
       HEAP32[i25 >> 2] = 0;
       i47 = i36 + (i32 * 28 & -1) + 8 | 0;
       i43 = HEAP32[i47 >> 2] | 0;
       HEAP32[i47 >> 2] = i45;
       do {
        if ((i43 | 0) != 0) {
         i45 = i43 + 4 | 0;
         i47 = i45 | 0;
         i46 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
         if ((i46 | 0) != 0) {
          HEAP32[i47 >> 2] = i46;
          break;
         }
         i46 = i45 - 4 | 0;
         if ((i46 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i46 >> 2] | 0) + 12 >> 2] & 31](i46);
        }
       } while (0);
       i43 = HEAP32[i44 >> 2] | 0;
       i46 = HEAP32[i43 + 16 >> 2] | 0;
       do {
        if ((i46 | 0) == 0) {
         i48 = 0;
        } else {
         if ((HEAP32[i46 + 12 >> 2] | 0) == 0) {
          i48 = 0;
          break;
         }
         i48 = HEAP32[i43 + 8 >> 2] | 0;
        }
       } while (0);
       i43 = HEAP32[i26 >> 2] | 0;
       do {
        if ((i43 | 0) == 0) {
         i49 = 0;
        } else {
         if ((HEAP32[i43 + 12 >> 2] | 0) == 0) {
          i49 = 0;
          break;
         }
         i49 = HEAP32[i27 >> 2] | 0;
        }
       } while (0);
       _memcpy(i48 | 0, i49 + (Math_imul(i38, i13) | 0) | 0, i41) | 0;
      } else {
       if (!i28) {
        HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
       }
       i43 = i42 | 0;
       i46 = HEAP32[i43 >> 2] | 0;
       HEAP32[i43 >> 2] = i2;
       do {
        if ((i46 | 0) != 0) {
         i43 = i46 + 4 | 0;
         i44 = i43 | 0;
         i45 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
         if ((i45 | 0) != 0) {
          HEAP32[i44 >> 2] = i45;
          break;
         }
         i45 = i43 - 4 | 0;
         if ((i45 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i45 >> 2] | 0) + 12 >> 2] & 31](i45);
        }
       } while (0);
       if (!i29) {
        HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
       }
       i46 = i36 + 8 | 0;
       i45 = HEAP32[i46 >> 2] | 0;
       HEAP32[i46 >> 2] = i3;
       if ((i45 | 0) == 0) {
        break;
       }
       i46 = i45 + 4 | 0;
       i45 = i46 | 0;
       i43 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
       if ((i43 | 0) != 0) {
        HEAP32[i45 >> 2] = i43;
        break;
       }
       i43 = i46 - 4 | 0;
       if ((i43 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i43 >> 2] | 0) + 12 >> 2] & 31](i43);
      }
     } while (0);
     HEAP32[i36 + (i32 * 28 & -1) + 12 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i36 + (i32 * 28 & -1) + 16 >> 2] = i40;
     HEAP32[i36 + (i32 * 28 & -1) + 20 >> 2] = i4;
     HEAP32[i36 + (i32 * 28 & -1) + 24 >> 2] = i5;
     i42 = i32 + 1 | 0;
     if ((i42 | 0) >= (i19 | 0)) {
      break;
     }
     i32 = i42;
     i33 = i39;
     i34 = HEAP32[i18 >> 2] | 0;
    }
    if ((i35 | 0) == 11) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
    __ZN3WTF19ParallelEnvironment7executeEPv(i12, HEAP32[i20 >> 2] | 0);
    i34 = Math_imul(i13, i14) | 0;
    i33 = i2 + 16 | 0;
    i32 = i2 + 8 | 0;
    i30 = 1;
    i29 = 0;
    while (1) {
     if ((HEAP32[i18 >> 2] | 0) >>> 0 <= i30 >>> 0) {
      i35 = 48;
      break;
     }
     i31 = HEAP32[i20 >> 2] | 0;
     i28 = ((i30 | 0) < (i23 | 0)) + i22 | 0;
     i29 = i28 + i29 | 0;
     i27 = Math_imul(i29, i13) | 0;
     i26 = Math_imul(i28, i13) | 0;
     i28 = HEAP32[i33 >> 2] | 0;
     do {
      if ((i28 | 0) == 0) {
       i50 = 0;
      } else {
       if ((HEAP32[i28 + 12 >> 2] | 0) == 0) {
        i50 = 0;
        break;
       }
       i50 = HEAP32[i32 >> 2] | 0;
      }
     } while (0);
     i28 = i50 + i27 | 0;
     i39 = HEAP32[i31 + (i30 * 28 & -1) + 4 >> 2] | 0;
     i36 = HEAP32[i39 + 16 >> 2] | 0;
     do {
      if ((i36 | 0) == 0) {
       i51 = 0;
      } else {
       if ((HEAP32[i36 + 12 >> 2] | 0) == 0) {
        i51 = 0;
        break;
       }
       i51 = HEAP32[i39 + 8 >> 2] | 0;
      }
     } while (0);
     _memcpy(i28 | 0, i51 + i34 | 0, i26) | 0;
     i30 = i30 + 1 | 0;
     if ((i30 | 0) >= (i19 | 0)) {
      break;
     }
    }
    if ((i35 | 0) == 48) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
    __ZN3WTF12ParallelJobsIN7WebCore14FEGaussianBlur23PlatformApplyParametersEED2Ev(i8);
    STACKTOP = i7;
    return;
   }
  } while (0);
  __ZN3WTF12ParallelJobsIN7WebCore14FEGaussianBlur23PlatformApplyParametersEED2Ev(i8);
 }
 __ZN7WebCore14FEGaussianBlur20platformApplyGenericEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEES5_jjRNS_7IntSizeE(i1, i2, i3, i4, i5, i6);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore7boxBlurEPN3JSC21GenericTypedArrayViewINS0_19Uint8ClampedAdaptorEEES4_jiiiiiibNS_12EdgeModeTypeE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 i11 = i11 | 0;
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, d31 = +0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 if ((i9 | 0) <= 0) {
  return;
 }
 i12 = (i11 | 0) == 3;
 i11 = (i8 | 0) < (i5 | 0) ? i8 : i5;
 i13 = (i11 | 0) > 0;
 i14 = (i8 | 0) > 0;
 i15 = i2 + 8 | 0;
 i2 = Math_imul(i6, i5) | 0;
 i16 = i1 + 8 | 0;
 i1 = Math_imul(i6, i4) | 0;
 i17 = Math_imul(i8 - 1 | 0, i6) | 0;
 i18 = -i4 | 0;
 i19 = (i18 | 0) < (i5 | 0);
 i20 = 0;
 while (1) {
  i21 = Math_imul(i20, i7) | 0;
  i22 = i21 + i17 | 0;
  i23 = 3;
  while (1) {
   if ((i23 | 0) <= -1) {
    break;
   }
   do {
    if (i12) {
     if (i13) {
      i24 = i23 + i21 | 0;
      i25 = HEAP32[i16 >> 2] | 0;
      i26 = 0;
      i27 = 0;
      while (1) {
       i28 = (HEAPU8[i25 + (i24 + (Math_imul(i26, i6) | 0)) | 0] | 0) + i27 | 0;
       i29 = i26 + 1 | 0;
       if ((i29 | 0) < (i11 | 0)) {
        i26 = i29;
        i27 = i28;
       } else {
        i30 = i28;
        break;
       }
      }
     } else {
      i30 = 0;
     }
     if (!i14) {
      break;
     }
     i27 = i23 + i21 | 0;
     i26 = 0;
     i24 = i30;
     while (1) {
      i25 = i27 + (Math_imul(i26, i6) | 0) | 0;
      d31 = +(((i24 >>> 0) / (i3 >>> 0) & -1 & 255) >>> 0);
      HEAPF64[tempDoublePtr >> 3] = d31;
      i28 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
      i29 = 2146435072;
      if (i28 >>> 0 > i29 >>> 0 | i28 >>> 0 == i29 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0) {
       i32 = 0;
      } else {
       i32 = (_rint(+d31) | 0) & 255;
      }
      HEAP8[(HEAP32[i15 >> 2] | 0) + i25 | 0] = i32;
      if ((i26 | 0) < (i4 | 0)) {
       i33 = i24;
      } else {
       i33 = i24 - (HEAPU8[(HEAP32[i16 >> 2] | 0) + (i25 - i1) | 0] | 0) | 0;
      }
      if ((i26 + i5 | 0) < (i8 | 0)) {
       i34 = (HEAPU8[(HEAP32[i16 >> 2] | 0) + (i25 + i2) | 0] | 0) + i33 | 0;
      } else {
       i34 = i33;
      }
      i25 = i26 + 1 | 0;
      if ((i25 | 0) < (i8 | 0)) {
       i26 = i25;
       i24 = i34;
      } else {
       break;
      }
     }
    } else {
     i24 = i23 + i21 | 0;
     i26 = HEAP32[i16 >> 2] | 0;
     i27 = HEAPU8[i26 + i24 | 0] | 0;
     i25 = HEAPU8[i26 + (i22 + i23) | 0] | 0;
     if (i19) {
      i29 = 0;
      i28 = i18;
      while (1) {
       do {
        if ((i28 | 0) < 0) {
         i35 = i27;
        } else {
         if ((i28 | 0) >= (i8 | 0)) {
          i35 = i25;
          break;
         }
         i35 = HEAPU8[i26 + (i24 + (Math_imul(i28, i6) | 0)) | 0] | 0;
        }
       } while (0);
       i36 = i35 + i29 | 0;
       i37 = i28 + 1 | 0;
       if ((i37 | 0) < (i5 | 0)) {
        i29 = i36;
        i28 = i37;
       } else {
        i38 = i36;
        break;
       }
      }
     } else {
      i38 = 0;
     }
     if (i14) {
      i39 = i38;
      i40 = 0;
     } else {
      break;
     }
     while (1) {
      i28 = i24 + (Math_imul(i40, i6) | 0) | 0;
      d31 = +(((i39 >>> 0) / (i3 >>> 0) & -1 & 255) >>> 0);
      HEAPF64[tempDoublePtr >> 3] = d31;
      i29 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
      i26 = 2146435072;
      if (i29 >>> 0 > i26 >>> 0 | i29 >>> 0 == i26 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0) {
       i41 = 0;
      } else {
       i41 = (_rint(+d31) | 0) & 255;
      }
      HEAP8[(HEAP32[i15 >> 2] | 0) + i28 | 0] = i41;
      if ((i40 | 0) < (i4 | 0)) {
       i42 = i27;
      } else {
       i42 = HEAPU8[(HEAP32[i16 >> 2] | 0) + (i28 - i1) | 0] | 0;
      }
      if ((i40 + i5 | 0) < (i8 | 0)) {
       i43 = HEAPU8[(HEAP32[i16 >> 2] | 0) + (i28 + i2) | 0] | 0;
      } else {
       i43 = i25;
      }
      i28 = i40 + 1 | 0;
      if ((i28 | 0) < (i8 | 0)) {
       i39 = i39 - i42 + i43 | 0;
       i40 = i28;
      } else {
       break;
      }
     }
    }
   } while (0);
   if (i10) {
    break;
   } else {
    i23 = i23 - 1 | 0;
   }
  }
  i20 = i20 + 1 | 0;
  if ((i20 | 0) >= (i9 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore14FEGaussianBlur20platformApplyGenericEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEES5_jjRNS_7IntSizeE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i7 = i6 | 0;
 i8 = HEAP32[i7 >> 2] << 2;
 i9 = i6 + 4 | 0;
 i6 = i1 + 32 | 0;
 i10 = i1 + 128 | 0;
 i1 = i4;
 i4 = i5;
 i5 = 0;
 i11 = 0;
 i12 = 0;
 i13 = 0;
 i14 = i2;
 i15 = i3;
 i3 = 0;
 while (1) {
  if ((i1 | 0) == 0) {
   i16 = i15;
   i17 = i14;
   i18 = i11;
   i19 = i5;
   i20 = 0;
  } else {
   do {
    if ((i3 | 0) == 0) {
     i21 = i1 >>> 1;
     if ((i1 & 1 | 0) == 0) {
      i22 = i21 - 1 | 0;
      i23 = i1 - i22 | 0;
      i24 = i22;
      i25 = i1;
      break;
     } else {
      i23 = i1 - i21 | 0;
      i24 = i21;
      i25 = i1;
      break;
     }
    } else if ((i3 | 0) == 1) {
     if ((i1 & 1 | 0) != 0) {
      i23 = i11;
      i24 = i5;
      i25 = i1;
      break;
     }
     i23 = i11 - 1 | 0;
     i24 = i5 + 1 | 0;
     i25 = i1;
    } else if ((i3 | 0) == 2) {
     if ((i1 & 1 | 0) != 0) {
      i23 = i11;
      i24 = i5;
      i25 = i1;
      break;
     }
     i23 = i11 + 1 | 0;
     i24 = i5;
     i25 = i1 + 1 | 0;
    } else {
     i23 = i11;
     i24 = i5;
     i25 = i1;
    }
   } while (0);
   __ZN7WebCore7boxBlurEPN3JSC21GenericTypedArrayViewINS0_19Uint8ClampedAdaptorEEES4_jiiiiiibNS_12EdgeModeTypeE(i14, i15, i25, i24, i23, 4, i8, HEAP32[i7 >> 2] | 0, HEAP32[i9 >> 2] | 0, (HEAP8[i6] & 1) != 0, HEAP32[i10 >> 2] | 0);
   i16 = i14;
   i17 = i15;
   i18 = i23;
   i19 = i24;
   i20 = i25;
  }
  if ((i4 | 0) == 0) {
   i26 = i16;
   i27 = i17;
   i28 = i13;
   i29 = i12;
   i30 = 0;
  } else {
   do {
    if ((i3 | 0) == 0) {
     i21 = i4 >>> 1;
     if ((i4 & 1 | 0) == 0) {
      i22 = i21 - 1 | 0;
      i31 = i4 - i22 | 0;
      i32 = i22;
      i33 = i4;
      break;
     } else {
      i31 = i4 - i21 | 0;
      i32 = i21;
      i33 = i4;
      break;
     }
    } else if ((i3 | 0) == 1) {
     if ((i4 & 1 | 0) != 0) {
      i31 = i13;
      i32 = i12;
      i33 = i4;
      break;
     }
     i31 = i13 - 1 | 0;
     i32 = i12 + 1 | 0;
     i33 = i4;
    } else if ((i3 | 0) == 2) {
     if ((i4 & 1 | 0) != 0) {
      i31 = i13;
      i32 = i12;
      i33 = i4;
      break;
     }
     i31 = i13 + 1 | 0;
     i32 = i12;
     i33 = i4 + 1 | 0;
    } else {
     i31 = i13;
     i32 = i12;
     i33 = i4;
    }
   } while (0);
   __ZN7WebCore7boxBlurEPN3JSC21GenericTypedArrayViewINS0_19Uint8ClampedAdaptorEEES4_jiiiiiibNS_12EdgeModeTypeE(i17, i16, i33, i32, i31, i8, 4, HEAP32[i9 >> 2] | 0, HEAP32[i7 >> 2] | 0, (HEAP8[i6] & 1) != 0, HEAP32[i10 >> 2] | 0);
   i26 = i17;
   i27 = i16;
   i28 = i31;
   i29 = i32;
   i30 = i33;
  }
  i21 = i3 + 1 | 0;
  if ((i21 | 0) < 3) {
   i1 = i20;
   i4 = i30;
   i5 = i19;
   i11 = i18;
   i12 = i29;
   i13 = i28;
   i14 = i27;
   i15 = i26;
   i3 = i21;
  } else {
   break;
  }
 }
 if ((i26 | 0) != (i2 | 0)) {
  return;
 }
 i26 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i26 | 0) == 0) {
   i34 = 0;
  } else {
   if ((HEAP32[i26 + 12 >> 2] | 0) == 0) {
    i34 = 0;
    break;
   }
   i34 = HEAP32[i2 + 8 >> 2] | 0;
  }
 } while (0);
 i2 = HEAP32[i27 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i35 = 0;
   i36 = 0;
  } else {
   if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
    i35 = 0;
    i36 = 0;
    break;
   }
   i35 = HEAP32[i27 + 20 >> 2] | 0;
   i36 = HEAP32[i27 + 8 >> 2] | 0;
  }
 } while (0);
 _memcpy(i34 | 0, i36 | 0, i35) | 0;
 return;
}
function __ZN7WebCore14FEGaussianBlur26determineAbsolutePaintRectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, i11 = 0, d12 = +0, d13 = +0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 48 | 0;
 i7 = i2 + 64 | 0;
 i8 = i2 + 80 | 0;
 i9 = HEAP32[i1 + 68 >> 2] | 0;
 d10 = +HEAPF32[i1 + 124 >> 2];
 i11 = i9;
 d12 = +FUNCTION_TABLE_fif[HEAP32[(HEAP32[i11 >> 2] | 0) + 12 >> 2] & 1](i9, +HEAPF32[i1 + 120 >> 2]);
 d13 = +FUNCTION_TABLE_fif[HEAP32[(HEAP32[i11 >> 2] | 0) + 16 >> 2] & 1](i9, d10);
 if (d12 != +0) {
  i9 = ~~+Math_floor(d12 * 1.8799712657928467 + +.5);
  i14 = i9 >>> 0 > 2 >>> 0 ? i9 : 2;
 } else {
  i14 = 0;
 }
 if (d13 != +0) {
  i9 = ~~+Math_floor(d13 * 1.8799712657928467 + +.5);
  i15 = i9 >>> 0 > 2 >>> 0 ? i9 : 2;
 } else {
  i15 = 0;
 }
 i9 = i4;
 i11 = (__ZNK7WebCore12FilterEffect11inputEffectEj(i1 | 0, 0) | 0) + 36 | 0;
 HEAP32[i9 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i3, i4);
 if ((HEAP32[i1 + 128 >> 2] | 0) != 3) {
  __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i5, i3);
  i4 = i1 + 36 | 0;
  i11 = i5;
  HEAP32[i4 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i4 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
  HEAP32[i4 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
  HEAP32[i4 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
  STACKTOP = i2;
  return;
 }
 d13 = i14 >>> 0 > 1e3 >>> 0 ? +1500 : +((i14 * 3 & -1) >>> 0 >>> 0) * +.5;
 i14 = i3 | 0;
 HEAPF32[i14 >> 2] = +HEAPF32[i14 >> 2] - d13;
 i14 = i3 + 8 | 0;
 HEAPF32[i14 >> 2] = d13 + (d13 + +HEAPF32[i14 >> 2]);
 d13 = i15 >>> 0 > 1e3 >>> 0 ? +1500 : +((i15 * 3 & -1) >>> 0 >>> 0) * +.5;
 i15 = i3 + 4 | 0;
 HEAPF32[i15 >> 2] = +HEAPF32[i15 >> 2] - d13;
 i15 = i3 + 12 | 0;
 HEAPF32[i15 >> 2] = d13 + (d13 + +HEAPF32[i15 >> 2]);
 i15 = i1 + 52 | 0;
 if ((HEAP8[i1 + 108 | 0] & 1) == 0) {
  i14 = i7;
  i11 = i15;
  HEAP32[i14 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i14 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
  HEAP32[i14 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
  HEAP32[i14 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
  __ZN7WebCore9FloatRect5uniteERKS0_(i3, i7);
 } else {
  i7 = i6;
  i11 = i15;
  HEAP32[i7 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i7 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
  HEAP32[i7 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
  HEAP32[i7 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
  __ZN7WebCore9FloatRect9intersectERKS0_(i3, i6);
 }
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i8, i3);
 i3 = i1 + 36 | 0;
 i1 = i8;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14FEGaussianBlur21platformApplySoftwareEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, d13 = +0, d14 = +0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i7 = i1 | 0;
 i8 = __ZNK7WebCore12FilterEffect11inputEffectEj(i7, 0) | 0;
 i9 = __ZN7WebCore12FilterEffect30createPremultipliedImageResultEv(i7) | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP8[i1 + 32 | 0] = HEAP8[i8 + 32 | 0] & 1;
 i10 = i4;
 i11 = i8 + 36 | 0;
 HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
 __ZNK7WebCore12FilterEffect31requestedRegionOfInputImageDataERKNS_7IntRectE(i3, i7, i4);
 __ZN7WebCore12FilterEffect22copyPremultipliedImageEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEERKNS_7IntRectE(i8, i9, i3);
 d12 = +HEAPF32[i1 + 120 >> 2];
 d13 = +HEAPF32[i1 + 124 >> 2];
 if (!(d12 != +0 | d13 != +0)) {
  STACKTOP = i2;
  return;
 }
 i3 = HEAP32[i1 + 68 >> 2] | 0;
 i8 = i3;
 d14 = +FUNCTION_TABLE_fif[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 1](i3, d12);
 d12 = +FUNCTION_TABLE_fif[HEAP32[(HEAP32[i8 >> 2] | 0) + 16 >> 2] & 1](i3, d13);
 if (d14 != +0) {
  i3 = ~~+Math_floor(d14 * 1.8799712657928467 + +.5);
  i15 = i3 >>> 0 > 2 >>> 0 ? i3 : 2;
 } else {
  i15 = 0;
 }
 if (d12 != +0) {
  i3 = ~~+Math_floor(d12 * 1.8799712657928467 + +.5);
  i16 = i3 >>> 0 > 2 >>> 0 ? i3 : 2;
 } else {
  i16 = 0;
 }
 i3 = i1 + 44 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i8;
 HEAP32[i5 + 4 >> 2] = i4;
 __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE19createUninitializedEj(i6, Math_imul(i8 << 2, i4) | 0);
 i4 = i6 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore14FEGaussianBlur13platformApplyEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEES5_jjRNS_7IntSizeE(i1, i9, i6, i15 >>> 0 > 1e3 >>> 0 ? 1e3 : i15, i16 >>> 0 > 1e3 >>> 0 ? 1e3 : i16, i5);
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i6 + 4 | 0;
 i6 = i5 | 0;
 i16 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i16 | 0) != 0) {
  HEAP32[i6 >> 2] = i16;
  STACKTOP = i2;
  return;
 }
 i16 = i5 - 4 | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 12 >> 2] & 31](i16);
 STACKTOP = i2;
 return;
}
function __ZN3WTF6VectorIN7WebCore14FEGaussianBlur23PlatformApplyParametersELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 28 & -1) | 0;
 if (i2 >>> 0 > 153391689 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 28 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 28 & -1;
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
   HEAP32[i7 + 20 >> 2] = HEAP32[i6 + 20 >> 2];
   HEAP32[i7 + 24 >> 2] = HEAP32[i6 + 24 >> 2];
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i8 = i9 + 4 | 0;
     i10 = i8 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) != 0) {
      HEAP32[i10 >> 2] = i11;
      break;
     }
     i11 = i8 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 12 >> 2] & 31](i11);
    }
   } while (0);
   i9 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i11 = i9 + 4 | 0;
     i8 = i11 | 0;
     i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i8 >> 2] = i10;
      break;
     }
     i10 = i11 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 12 >> 2] & 31](i10);
    }
   } while (0);
   i9 = i6 + 28 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 28 | 0;
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
function __ZN3JSC23JSGenericTypedArrayViewINS_19Uint8ClampedAdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i3 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = 3;
  } else {
   if ((HEAP32[i8 + 12 >> 2] | 0) == 0) {
    i9 = 3;
    break;
   }
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = i8;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i12 = i8;
   i13 = i11;
   i14 = 0;
   i15 = HEAP32[i7 >> 2] | 0;
  }
 } while (0);
 if ((i9 | 0) == 3) {
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = 0;
  i12 = 0;
  i13 = i9;
  i14 = 1;
  i15 = i3;
 }
 i3 = HEAP32[i15 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i16 = 0;
   i17 = 0;
  } else {
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i18 = 0;
   } else {
    i18 = HEAP32[i15 + 12 >> 2] & 2147483647;
   }
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i16 = 0;
    i17 = i18;
    break;
   }
   i16 = HEAP32[i15 + 20 >> 2] | 0;
   i17 = i18;
  }
 } while (0);
 __ZN3JSC17JSArrayBufferView19ConstructionContextC1ERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i5, i1, i2, i6, i17, i16);
 i16 = HEAP32[i13 >> 2] | 0;
 if ((i16 | 0) != 0) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i16 | 0);
 }
 i16 = i1 + 13264 | 0;
 i13 = i16 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i19 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i16, 20) | 0;
 } else {
  HEAP32[i13 >> 2] = HEAP32[i17 >> 2];
  i19 = i17;
 }
 HEAP32[i19 >> 2] = 0;
 i17 = i19;
 i13 = i19;
 __ZN3JSC17JSArrayBufferViewC2ERNS_2VMERNS0_19ConstructionContextE(i13, i1, i5);
 __ZN3JSC17JSArrayBufferView14finishCreationERNS_2VME(i13, i1);
 if (i14) {
  STACKTOP = i4;
  return i17 | 0;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i12 | 0);
 STACKTOP = i4;
 return i17 | 0;
}
function __ZN3WTF12ParallelJobsIN7WebCore14FEGaussianBlur23PlatformApplyParametersEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 24 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 28 & -1) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 + 8 >> 2] | 0;
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
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 31](i9);
    }
   } while (0);
   i5 = HEAP32[i3 + 4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i9 = i5 + 4 | 0;
     i7 = i9 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i7 >> 2] = i8;
      break;
     }
     i8 = i9 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 31](i8);
    }
   } while (0);
   i3 = i3 + 28 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 28 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 20 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i6 = i1 + 12 | 0;
 if ((i4 | 0) != 0) {
  i3 = HEAP32[i6 >> 2] | 0;
  i5 = i3 + (i4 << 2) | 0;
  i4 = i3;
  while (1) {
   i3 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i8 = i3 | 0;
     i9 = i3 | 0;
     i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF15ThreadConditionD1Ev(i8 + 40 | 0);
      __ZN3WTF5MutexD1Ev(i8 + 16 | 0);
      __ZN3WTF8fastFreeEPv(i3);
      break;
     } else {
      HEAP32[i9 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i5 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = (i2 | 0) == 0;
 if (!i7) {
  i8 = i2 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 if (i8 >>> 0 < i3 >>> 0) {
  i9 = 0;
 } else {
  i9 = (i8 - i3 | 0) >>> 0 >= i4 >>> 0;
 }
 if (!i7) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 }
 if (i9) {
  i9 = __ZN3WTF10fastMallocEj(24) | 0;
  if (!i7) {
   i8 = i2 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
  i8 = i6 | 0;
  HEAP32[i8 >> 2] = i2;
  __ZN3JSC15ArrayBufferViewC2EN3WTF10PassRefPtrINS_11ArrayBufferEEEj(i9, i6, i3);
  i3 = HEAP32[i8 >> 2] | 0;
  if ((i3 | 0) != 0) {
   __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i3 | 0);
  }
  HEAP32[i9 >> 2] = H_BASE + 128;
  HEAP32[i9 + 20 >> 2] = i4;
  HEAP32[i1 >> 2] = i9;
 } else {
  HEAP32[i1 >> 2] = 0;
 }
 if (i7) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 STACKTOP = i5;
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE19createUninitializedEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 do {
  if ((i2 | 0) < 0) {
   i6 = 3;
  } else {
   __ZN3WTF13tryFastMallocEj(i4, i2);
   i7 = i4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   if ((i8 | 0) == 0) {
    i6 = 3;
    break;
   }
   i7 = __ZN3WTF10fastMallocEj(24) | 0;
   i9 = i7;
   HEAP32[i9 >> 2] = 2;
   _memset(i7 + 4 | 0, 0, 20) | 0;
   HEAP32[i7 + 12 >> 2] = i8;
   HEAP32[i7 + 16 >> 2] = i2;
   __ZN3WTF8fastFreeEPv(0);
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = i5 | 0;
   HEAP32[i8 >> 2] = i7;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i1, i5, 0, i2);
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) != 0) {
    __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i9 | 0);
   }
   __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i7);
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i6 | 0) == 3) {
  __ZN3WTF8fastFreeEPv(0);
 }
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i3;
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i2 = HEAP32[i3 + 484 >> 2] | 0;
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i7 = i1 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = __ZN3JSC23JSGenericTypedArrayViewINS_19Uint8ClampedAdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i6, i2, i5) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return i7 | 0;
 }
 i2 = i3 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i2);
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN7WebCore14FEGaussianBlur19calculateKernelSizeEPNS_6FilterERjS3_ff(i1, i2, i3, d4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 d5 = +d5;
 var i6 = 0, d7 = +0, i8 = 0, i9 = 0, i10 = 0;
 i6 = i1;
 d7 = +FUNCTION_TABLE_fif[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 1](i1, d4);
 d4 = +FUNCTION_TABLE_fif[HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] & 1](i1, d5);
 if (d7 != +0) {
  i1 = ~~+Math_floor(d7 * 1.8799712657928467 + +.5);
  i8 = i1 >>> 0 > 2 >>> 0 ? i1 : 2;
 } else {
  i8 = 0;
 }
 HEAP32[i2 >> 2] = i8;
 if (d4 != +0) {
  i8 = ~~+Math_floor(d4 * 1.8799712657928467 + +.5);
  i9 = i8 >>> 0 > 2 >>> 0 ? i8 : 2;
 } else {
  i9 = 0;
 }
 HEAP32[i3 >> 2] = i9;
 if ((HEAP32[i2 >> 2] | 0) >>> 0 > 1e3 >>> 0) {
  HEAP32[i2 >> 2] = 1e3;
  i10 = HEAP32[i3 >> 2] | 0;
 } else {
  i10 = i9;
 }
 if (i10 >>> 0 <= 1e3 >>> 0) {
  return;
 }
 HEAP32[i3 >> 2] = 1e3;
 return;
}
function __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) != 0 | (i1 | 0) == 0) {
  return;
 }
 i3 = i1 + 20 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i3);
 }
 __ZN3WTF8fastFreeEPv(HEAP32[i1 + 12 >> 2] | 0);
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i3 & 1 | 0) == 0) {
   i2 = i3;
   if ((i3 | 0) == 0) {
    break;
   }
   i4 = i2 + 8 | 0;
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
   }
   i4 = i2 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
    HEAP32[i2 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i5);
   }
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore14FEGaussianBlur22externalRepresentationERNS_10TextStreamEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3);
 __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 40 | 0) | 0;
 i4 = i1 | 0;
 __ZNK7WebCore12FilterEffect22externalRepresentationERNS_10TextStreamEi(i4, i2, 0) | 0;
 i5 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 24 | 0) | 0;
 i6 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i5, +HEAPF32[i1 + 120 >> 2]) | 0, H_BASE + 16 | 0) | 0;
 __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i6, +HEAPF32[i1 + 124 >> 2]) | 0, H_BASE + 8 | 0) | 0;
 i1 = __ZNK7WebCore12FilterEffect11inputEffectEj(i4, 0) | 0;
 FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 7](i1, i2, i3 + 1 | 0) | 0;
 return i2 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_iiii + 4;
}
function __ZN7WebCore14FEGaussianBlur27calculateUnscaledKernelSizeERjS1_ff(i1, i2, d3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if (d3 != +0) {
  i5 = ~~+Math_floor(d3 * 1.8799712657928467 + +.5);
  i6 = i5 >>> 0 > 2 >>> 0 ? i5 : 2;
 } else {
  i6 = 0;
 }
 HEAP32[i1 >> 2] = i6;
 if (d4 != +0) {
  i6 = ~~+Math_floor(d4 * 1.8799712657928467 + +.5);
  i7 = i6 >>> 0 > 2 >>> 0 ? i6 : 2;
 } else {
  i7 = 0;
 }
 HEAP32[i2 >> 2] = i7;
 if ((HEAP32[i1 >> 2] | 0) >>> 0 > 1e3 >>> 0) {
  HEAP32[i1 >> 2] = 1e3;
  i8 = HEAP32[i2 >> 2] | 0;
 } else {
  i8 = i7;
 }
 if (i8 >>> 0 <= 1e3 >>> 0) {
  return;
 }
 HEAP32[i2 >> 2] = 1e3;
 return;
}
function __ZN7WebCore14FEGaussianBlur19platformApplyWorkerEPNS0_23PlatformApplyParametersE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i1 + 12 >> 2];
 HEAP32[i3 + 4 >> 2] = i4;
 __ZN7WebCore14FEGaussianBlur20platformApplyGenericEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEES5_jjRNS_7IntSizeE(HEAP32[i1 >> 2] | 0, HEAP32[i1 + 4 >> 2] | 0, HEAP32[i1 + 8 >> 2] | 0, HEAP32[i1 + 20 >> 2] | 0, HEAP32[i1 + 24 >> 2] | 0, i3);
 STACKTOP = i2;
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
function __ZN7WebCore14FEGaussianBlur6createEPNS_6FilterEffNS_12EdgeModeTypeE(i1, i2, d3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0;
 i6 = __ZN3WTF10fastMallocEj(132) | 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i6, i2);
 HEAP32[i6 >> 2] = H_BASE + 64;
 HEAPF32[i6 + 120 >> 2] = d3;
 HEAPF32[i6 + 124 >> 2] = d4;
 HEAP32[i6 + 128 >> 2] = i5;
 HEAP32[i1 >> 2] = i6;
 return;
}
function __ZNK3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE10byteLengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
    i3 = 0;
    break;
   }
   i3 = HEAP32[i1 + 20 >> 2] | 0;
  }
 } while (0);
 return i3 | 0;
}
function __ZN7WebCore14FEGaussianBlurC2EPNS_6FilterEffNS_12EdgeModeTypeE(i1, i2, d3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 i5 = i5 | 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAPF32[i1 + 120 >> 2] = d3;
 HEAPF32[i1 + 124 >> 2] = d4;
 HEAP32[i1 + 128 >> 2] = i5;
 return;
}
function __ZN7WebCore14FEGaussianBlurC1EPNS_6FilterEffNS_12EdgeModeTypeE(i1, i2, d3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 i5 = i5 | 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAPF32[i1 + 120 >> 2] = d3;
 HEAPF32[i1 + 124 >> 2] = d4;
 HEAP32[i1 + 128 >> 2] = i5;
 return;
}
function __ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12FilterEffect25transformResultColorSpaceENS_10ColorSpaceE(i2, HEAP32[i1 + 112 >> 2] | 0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiffi(i1, i2, i3, d4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 d5 = +d5;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiffi[i1 & 3](i2 | 0, i3 | 0, +d4, +d5, i6 | 0);
}
function __ZN7WebCore14FEGaussianBlur21calculateStdDeviationEf(d1) {
 d1 = +d1;
 var d2 = +0;
 d2 = (d1 * +2 / +3 + +-.5) / 1.8799712657928467;
 return +(d2 < +0 ? +0 : d2);
}
function __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
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
function __ZN7WebCore14FEGaussianBlur11setEdgeModeENS_12EdgeModeTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 128 >> 2] = i2;
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore14FEGaussianBlurD0Ev(i1) {
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
function __ZN7WebCore14FEGaussianBlur16setStdDeviationYEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 HEAPF32[i1 + 124 >> 2] = d2;
 return;
}
function __ZN7WebCore14FEGaussianBlur16setStdDeviationXEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 HEAPF32[i1 + 120 >> 2] = d2;
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
function __ZNK7WebCore14FEGaussianBlur13stdDeviationYEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[i1 + 124 >> 2]);
}
function __ZNK7WebCore14FEGaussianBlur13stdDeviationXEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[i1 + 120 >> 2]);
}
function __ZN7WebCore14FEGaussianBlurD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12FilterEffectD2Ev(i1 | 0);
 return;
}
function __ZNK3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE7getTypeEv(i1) {
 i1 = i1 | 0;
 return 3;
}
function b7(i1, i2, d3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 i5 = i5 | 0;
 abort(7);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function __ZNK7WebCore14FEGaussianBlur8edgeModeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 128 >> 2] | 0;
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
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
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
function __ZN7WebCore14FEGaussianBlur4dumpEv(i1) {
 i1 = i1 | 0;
 return;
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
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
  var FUNCTION_TABLE_ii = [b0,b0,__ZNK7WebCore12FilterEffect16filterEffectTypeEv,b0,__ZNK3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE7getTypeEv,b0,__ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv,b0,__ZNK3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE10byteLengthEv,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv,b1,__ZN7WebCore14FEGaussianBlur26determineAbsolutePaintRectEv,b1,__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEED1Ev,b1,__ZN7WebCore14FEGaussianBlur4dumpEv,b1,__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEED0Ev,b1,__ZN7WebCore14FEGaussianBlurD1Ev,b1,__ZN7WebCore14FEGaussianBlur19platformApplyWorkerEPNS0_23PlatformApplyParametersE,b1,__ZN7WebCore14FEGaussianBlurD0Ev,b1,__ZN7WebCore14FEGaussianBlur21platformApplySoftwareEv,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE,b2,__ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE,b2,b2,b2];
  var FUNCTION_TABLE_iiii = [b3,b3,__ZNK7WebCore14FEGaussianBlur22externalRepresentationERNS_10TextStreamEi,b3,__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE,b3,b3,b3];
  var FUNCTION_TABLE_fif = [b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_viiffi = [b7,b7,__ZN7WebCore14FEGaussianBlurC2EPNS_6FilterEffNS_12EdgeModeTypeE,b7];
  var FUNCTION_TABLE_iii = [b8,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiii: dynCall_iiii, dynCall_fif: dynCall_fif, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiffi: dynCall_viiffi, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiii": invoke_iiii, "invoke_fif": invoke_fif, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiffi": invoke_viiffi, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "_floorf": _floorf, "___setErrNo": ___setErrNo, "_rint": _rint, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
var dynCall_viiffi = Module["dynCall_viiffi"] = asm["dynCall_viiffi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore14FEGaussianBlurC2EPNS_6FilterEffNS_12EdgeModeTypeE","__ZN7WebCore14FEGaussianBlur26determineAbsolutePaintRectEv","__ZN7WebCore14FEGaussianBlur21calculateStdDeviationEf","_memset","__ZNK7WebCore14FEGaussianBlur13stdDeviationYEv","__ZN7WebCore14FEGaussianBlur13platformApplyEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEES5_jjRNS_7IntSizeE","__ZN7WebCore14FEGaussianBlur16setStdDeviationXEf","__ZN7WebCore14FEGaussianBlur19calculateKernelSizeEPNS_6FilterERjS3_ff","__ZNK3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE7getTypeEv","__ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv","__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE19createUninitializedEj","__ZN7WebCore7boxBlurEPN3JSC21GenericTypedArrayViewINS0_19Uint8ClampedAdaptorEEES4_jiiiiiibNS_12EdgeModeTypeE","__ZN3JSC23JSGenericTypedArrayViewINS_19Uint8ClampedAdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE","__ZN7WebCore14FEGaussianBlurD1Ev","__ZN3WTF12ParallelJobsIN7WebCore14FEGaussianBlur23PlatformApplyParametersEED2Ev","_memcpy","__ZN7WebCore14FEGaussianBlur4dumpEv","__ZN7WebCore14FEGaussianBlur21platformApplySoftwareEv","__ZNK7WebCore14FEGaussianBlur22externalRepresentationERNS_10TextStreamEi","__ZN7WebCore14FEGaussianBlur16setStdDeviationYEf","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF6VectorIN7WebCore14FEGaussianBlur23PlatformApplyParametersELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore14FEGaussianBlur27calculateUnscaledKernelSizeERjS1_ff","__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE","__ZN7WebCore14FEGaussianBlur11setEdgeModeENS_12EdgeModeTypeE","__ZNK3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE10byteLengthEv","__ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE","__ZN7WebCore14FEGaussianBlur20platformApplyGenericEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEES5_jjRNS_7IntSizeE","__ZN7WebCore14FEGaussianBlurD0Ev","__ZN7WebCore14FEGaussianBlur6createEPNS_6FilterEffNS_12EdgeModeTypeE","__ZNK7WebCore14FEGaussianBlur13stdDeviationXEv","__ZNK7WebCore12FilterEffect16filterEffectTypeEv","__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj","__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEED1Ev","__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEED0Ev","__ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv","__ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i","__ZN7WebCore14FEGaussianBlur19platformApplyWorkerEPNS0_23PlatformApplyParametersE","__ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv","__ZNK7WebCore14FEGaussianBlur8edgeModeEv","__ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE"]

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
H_BASE = parentModule["_malloc"](56 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 56;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore11MemoryCacheC1Ev;
/* memory initializer */ allocate([71,69,84,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9FrameView22sCurrentPaintTimeStampE=env.__ZN7WebCore9FrameView22sCurrentPaintTimeStampE|0;
  var __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE=env.__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore16CrossThreadTask1IN3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEES4_EE=(H_BASE+16)|0;
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
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore11MemoryCache24pruneDeadResourcesToSizeEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 2 | 0;
 if ((HEAP8[i6] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP8[i6] = 1;
 i7 = i1 + 32 | 0;
 i8 = i1 + 40 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = (i9 | 0) > 0;
 L4 : do {
  if (i10) {
   i11 = i7 | 0;
   i12 = 0;
   i13 = i9;
   while (1) {
    if (i13 >>> 0 <= i12 >>> 0) {
     break;
    }
    i14 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i12 << 3) + 4 >> 2] | 0;
    if ((i14 | 0) != 0) {
     i15 = i14;
     while (1) {
      i14 = HEAP32[i15 + 596 >> 2] | 0;
      if (__ZNK7WebCore14CachedResource9wasPurgedEv(i15) | 0) {
       __ZN7WebCore11MemoryCache5evictEPNS_14CachedResourceE(i1, i15);
      }
      if ((i14 | 0) == 0) {
       break;
      } else {
       i15 = i14;
      }
     }
    }
    i15 = i12 + 1 | 0;
    if ((i15 | 0) >= (i9 | 0)) {
     break L4;
    }
    i12 = i15;
    i13 = HEAP32[i8 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i13 = (i2 | 0) != 0;
 if (i13) {
  if (!((HEAP32[i1 + 28 >> 2] | 0) >>> 0 <= i2 >>> 0 | i10 ^ 1)) {
   i16 = 15;
  }
 } else {
  if (i10) {
   i16 = 15;
  }
 }
 L22 : do {
  if ((i16 | 0) == 15) {
   i10 = i7 | 0;
   i12 = i1 + 36 | 0;
   i11 = i5 | 0;
   i15 = i1 + 28 | 0;
   i14 = i5 | 0;
   i17 = i4 | 0;
   i18 = i4 | 0;
   i19 = 1;
   i20 = i9;
   i21 = HEAP32[i8 >> 2] | 0;
   L24 : while (1) {
    i22 = i19 ^ 1;
    i23 = i20;
    i24 = i21;
    while (1) {
     i25 = i23 - 1 | 0;
     if (i24 >>> 0 <= i25 >>> 0) {
      i16 = 19;
      break L24;
     }
     i26 = HEAP32[(HEAP32[i10 >> 2] | 0) + (i25 << 3) + 4 >> 2] | 0;
     L29 : do {
      if ((i26 | 0) != 0) {
       i27 = i26;
       while (1) {
        __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i17, HEAP32[i27 + 596 >> 2] | 0);
        do {
         if ((HEAP32[i27 + 16 >> 2] | 0) == 0) {
          if ((HEAP32[i27 + 36 >> 2] | 0) != 0) {
           break;
          }
          if ((HEAP32[i27 + 584 >> 2] | 0) != 0) {
           break;
          }
          if ((HEAP8[i27 + 588 | 0] & 32) != 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 68 >> 2] & 7](i27);
          if (!i13) {
           break;
          }
          if ((HEAP32[i15 >> 2] | 0) >>> 0 <= i2 >>> 0) {
           i16 = 27;
           break L24;
          }
         }
        } while (0);
        i27 = HEAP32[i18 >> 2] | 0;
        if ((i27 | 0) == 0) {
         break;
        }
        i28 = (HEAP8[i27 + 588 | 0] & 16) == 0;
        __ZN7WebCore24CachedResourceHandleBaseD2Ev(i17);
        if (i28) {
         break L29;
        }
       }
       __ZN7WebCore24CachedResourceHandleBaseD2Ev(i17);
      }
     } while (0);
     if ((HEAP32[i8 >> 2] | 0) >>> 0 <= i25 >>> 0) {
      i16 = 32;
      break L24;
     }
     i26 = HEAP32[(HEAP32[i10 >> 2] | 0) + (i25 << 3) + 4 >> 2] | 0;
     L43 : do {
      if ((i26 | 0) != 0) {
       i27 = i26;
       while (1) {
        __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i11, HEAP32[i27 + 596 >> 2] | 0);
        do {
         if ((HEAP32[i27 + 16 >> 2] | 0) == 0) {
          if ((HEAP32[i27 + 36 >> 2] | 0) != 0) {
           break;
          }
          if ((HEAP32[i27 + 584 >> 2] | 0) != 0) {
           break;
          }
          if ((HEAP32[i27 + 612 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore11MemoryCache5evictEPNS_14CachedResourceE(i1, i27);
          if (!i13) {
           break;
          }
          if ((HEAP32[i15 >> 2] | 0) >>> 0 <= i2 >>> 0) {
           i16 = 40;
           break L24;
          }
         }
        } while (0);
        i27 = HEAP32[i14 >> 2] | 0;
        if ((i27 | 0) == 0) {
         break;
        }
        i28 = (HEAP8[i27 + 588 | 0] & 16) == 0;
        __ZN7WebCore24CachedResourceHandleBaseD2Ev(i11);
        if (i28) {
         break L43;
        }
       }
       __ZN7WebCore24CachedResourceHandleBaseD2Ev(i11);
      }
     } while (0);
     i29 = HEAP32[i8 >> 2] | 0;
     if (i29 >>> 0 <= i25 >>> 0) {
      i16 = 45;
      break L24;
     }
     i26 = HEAP32[i10 >> 2] | 0;
     i30 = (HEAP32[i26 + (i25 << 3) >> 2] | 0) != 0;
     if (i30 | i22) {
      break;
     }
     do {
      if (i29 >>> 0 < i25 >>> 0) {
       i27 = HEAP32[i12 >> 2] | 0;
       if (i27 >>> 0 < i25 >>> 0) {
        i28 = i27 + 1 + (i27 >>> 2) | 0;
        i27 = i28 >>> 0 > 16 >>> 0 ? i28 : 16;
        __ZN3WTF6VectorIN7WebCore11MemoryCache7LRUListELj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i7, i27 >>> 0 > i25 >>> 0 ? i27 : i25);
        i31 = HEAP32[i10 >> 2] | 0;
       } else {
        i31 = i26;
       }
       if ((i31 | 0) == 0) {
        break;
       }
       i27 = HEAP32[i8 >> 2] | 0;
       i28 = i31 + (i25 << 3) | 0;
       if ((i27 | 0) == (i25 | 0)) {
        break;
       }
       i32 = i31 + (i27 << 3) | 0;
       while (1) {
        HEAP32[i32 >> 2] = 0;
        HEAP32[i32 + 4 >> 2] = 0;
        i32 = i32 + 8 | 0;
        if ((i32 | 0) == (i28 | 0)) {
         break;
        }
       }
      }
     } while (0);
     HEAP32[i8 >> 2] = i25;
     if ((i25 | 0) > 0) {
      i23 = i25;
      i24 = i25;
     } else {
      break L22;
     }
    }
    if ((i25 | 0) > 0) {
     i19 = i19 & (i30 ^ 1);
     i20 = i25;
     i21 = i29;
    } else {
     break L22;
    }
   }
   if ((i16 | 0) == 45) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i16 | 0) == 32) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i16 | 0) == 40) {
    __ZN7WebCore24CachedResourceHandleBaseD2Ev(i11);
    break;
   } else if ((i16 | 0) == 19) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i16 | 0) == 27) {
    __ZN7WebCore24CachedResourceHandleBaseD2Ev(i17);
    break;
   }
  }
 } while (0);
 HEAP8[i6] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11MemoryCache25removeResourcesWithOriginEPNS_14SecurityOriginE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i1 + 308 >> 2] | 0;
 i7 = HEAP32[i1 + 312 >> 2] | 0;
 i8 = i6 + (i7 << 3) | 0;
 if ((HEAP32[i1 + 320 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 L4 : do {
  if ((i7 | 0) == 0) {
   i9 = i6;
  } else {
   i10 = i6;
   while (1) {
    i11 = HEAP32[i10 >> 2] | 0;
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     i9 = i10;
     break L4;
    }
    i10 = i10 + 8 | 0;
    if ((i10 | 0) == (i8 | 0)) {
     break;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i9 | 0) == (i8 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i5 | 0;
 i7 = i4;
 i10 = 0;
 i11 = 0;
 i12 = 0;
 i13 = i9;
 L13 : while (1) {
  i9 = HEAP32[i13 + 4 >> 2] | 0;
  HEAP32[i4 >> 2] = i9;
  __ZN7WebCore14SecurityOrigin16createFromStringERKN3WTF6StringE(i5, __ZNK7WebCore19ResourceRequestBase3urlEv(i9 + 48 | 0) | 0);
  i9 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  do {
   if ((i9 | 0) == 0) {
    i14 = i10;
    i15 = i11;
    i16 = i12;
   } else {
    do {
     if (__ZNK7WebCore14SecurityOrigin5equalEPKS0_(i9, i2) | 0) {
      if ((i10 | 0) != (i11 | 0)) {
       HEAP32[i12 + (i10 << 2) >> 2] = HEAP32[i4 >> 2];
       i17 = i10 + 1 | 0;
       i18 = i11;
       i19 = i12;
       break;
      }
      i20 = i11 + 1 | 0;
      do {
       if (i12 >>> 0 > i4 >>> 0) {
        i21 = 14;
       } else {
        if ((i12 + (i11 << 2) | 0) >>> 0 <= i4 >>> 0) {
         i21 = 14;
         break;
        }
        i22 = i7 - i12 >> 2;
        i23 = i20 + (i11 >>> 2) | 0;
        i24 = i23 >>> 0 > 16 >>> 0 ? i23 : 16;
        i23 = i24 >>> 0 > i20 >>> 0 ? i24 : i20;
        do {
         if (i11 >>> 0 < i23 >>> 0) {
          if (i23 >>> 0 > 1073741823 >>> 0) {
           i21 = 21;
           break L13;
          }
          i24 = __ZN3WTF18fastMallocGoodSizeEj(i23 << 2) | 0;
          i25 = i24 >>> 2;
          i26 = __ZN3WTF10fastMallocEj(i24) | 0;
          i24 = i26;
          i27 = i12;
          _memcpy(i26 | 0, i27 | 0, i11 << 2) | 0;
          if ((i12 | 0) == 0) {
           i28 = i24;
           i29 = i25;
           break;
          }
          i26 = (i24 | 0) == (i12 | 0);
          __ZN3WTF8fastFreeEPv(i27);
          i28 = i26 ? 0 : i24;
          i29 = i26 ? 0 : i25;
         } else {
          i28 = i12;
          i29 = i11;
         }
        } while (0);
        i30 = i28 + (i22 << 2) | 0;
        i31 = i28;
        i32 = i29;
       }
      } while (0);
      do {
       if ((i21 | 0) == 14) {
        i21 = 0;
        i23 = i20 + (i11 >>> 2) | 0;
        i25 = i23 >>> 0 > 16 >>> 0 ? i23 : 16;
        i23 = i25 >>> 0 > i20 >>> 0 ? i25 : i20;
        if (i11 >>> 0 >= i23 >>> 0) {
         i30 = i4;
         i31 = i12;
         i32 = i11;
         break;
        }
        if (i23 >>> 0 > 1073741823 >>> 0) {
         i21 = 16;
         break L13;
        }
        i25 = __ZN3WTF18fastMallocGoodSizeEj(i23 << 2) | 0;
        i23 = i25 >>> 2;
        i26 = __ZN3WTF10fastMallocEj(i25) | 0;
        i25 = i26;
        i24 = i12;
        _memcpy(i26 | 0, i24 | 0, i11 << 2) | 0;
        if ((i12 | 0) == 0) {
         i30 = i4;
         i31 = i25;
         i32 = i23;
         break;
        }
        i26 = (i25 | 0) == (i12 | 0);
        __ZN3WTF8fastFreeEPv(i24);
        i30 = i4;
        i31 = i26 ? 0 : i25;
        i32 = i26 ? 0 : i23;
       }
      } while (0);
      HEAP32[i31 + (i11 << 2) >> 2] = HEAP32[i30 >> 2];
      i17 = i20;
      i18 = i32;
      i19 = i31;
     } else {
      i17 = i10;
      i18 = i11;
      i19 = i12;
     }
    } while (0);
    i23 = i9 | 0;
    if (((tempValue = HEAP32[i23 >> 2] | 0, HEAP32[i23 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
     i14 = i17;
     i15 = i18;
     i16 = i19;
     break;
    }
    __ZN7WebCore14SecurityOriginD2Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    i14 = i17;
    i15 = i18;
    i16 = i19;
   }
  } while (0);
  i9 = i13 + 8 | 0;
  if ((i9 | 0) == (i8 | 0)) {
   i21 = 7;
   break;
  } else {
   i33 = i9;
  }
  while (1) {
   i9 = HEAP32[i33 >> 2] | 0;
   if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
    break;
   }
   i9 = i33 + 8 | 0;
   if ((i9 | 0) == (i8 | 0)) {
    i21 = 7;
    break L13;
   } else {
    i33 = i9;
   }
  }
  if ((i33 | 0) == (i8 | 0)) {
   i21 = 7;
   break;
  } else {
   i10 = i14;
   i11 = i15;
   i12 = i16;
   i13 = i33;
  }
 }
 if ((i21 | 0) == 7) {
  do {
   if ((i14 | 0) == 0) {
    if ((i16 | 0) != 0) {
     break;
    }
    STACKTOP = i3;
    return;
   } else {
    i33 = 0;
    while (1) {
     __ZN7WebCore11MemoryCache5evictEPNS_14CachedResourceE(i1, HEAP32[i16 + (i33 << 2) >> 2] | 0);
     i33 = i33 + 1 | 0;
     if (i33 >>> 0 >= i14 >>> 0) {
      break;
     }
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i16);
  STACKTOP = i3;
  return;
 } else if ((i21 | 0) == 16) {
  _WTFCrash();
 } else if ((i21 | 0) == 21) {
  _WTFCrash();
 }
}
function __ZN7WebCore11MemoryCache5evictEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = i2 + 588 | 0;
 if ((HEAP8[i3] & 16) == 0) {
  i4 = __ZN7WebCore14CachedResource16deleteIfPossibleEv(i2) | 0;
  return;
 }
 i5 = i1 + 308 | 0;
 i6 = __ZNK7WebCore19ResourceRequestBase3urlEv(i2 + 48 | 0) | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i1 + 312 >> 2] | 0;
  i10 = i9 << 3 | 0;
  i11 = 0;
  i12 = i9;
 } else {
  i9 = HEAP32[i1 + 316 >> 2] | 0;
  i13 = i6 | 0;
  i6 = HEAP32[i13 >> 2] | 0;
  i14 = HEAP32[i6 + 16 >> 2] | 0;
  if (i14 >>> 0 > 127 >>> 0) {
   i15 = i14 >>> 7;
  } else {
   i15 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i6) | 0;
  }
  i6 = (i15 >>> 23) + ~i15 | 0;
  i14 = i6 << 12 ^ i6;
  i6 = i14 >>> 7 ^ i14;
  i14 = i6 << 2 ^ i6;
  i6 = i14 >>> 20 ^ i14 | 1;
  i14 = i15;
  i15 = 0;
  while (1) {
   i16 = i14 & i9;
   i17 = i8 + (i16 << 3) | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   i19 = i18;
   if ((i19 | 0) == 0) {
    i20 = 0;
    break;
   } else if ((i19 | 0) != (-1 | 0)) {
    if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i18, HEAP32[i13 >> 2] | 0) | 0) {
     i20 = i17;
     break;
    }
   }
   i17 = (i15 | 0) == 0 ? i6 : i15;
   i14 = i17 + i16 | 0;
   i15 = i17;
  }
  i15 = HEAP32[i7 >> 2] | 0;
  i7 = HEAP32[i1 + 312 >> 2] | 0;
  i10 = (i20 | 0) == 0 ? i15 + (i7 << 3) | 0 : i20;
  i11 = i15;
  i12 = i7;
 }
 i7 = i5 | 0;
 i5 = i1 + 312 | 0;
 do {
  if ((i10 | 0) != (i11 + (i12 << 3) | 0)) {
   i15 = i10 | 0;
   i20 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i14 = i20 | 0;
     i6 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i14 >> 2] = i6;
      break;
     }
    }
   } while (0);
   HEAP32[i15 >> 2] = -1;
   i20 = i1 + 324 | 0;
   HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   i20 = i1 + 320 | 0;
   i6 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   HEAP32[i20 >> 2] = i6;
   i20 = HEAP32[i5 >> 2] | 0;
   if (!((i6 * 6 & -1 | 0) < (i20 | 0) & (i20 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore14CachedResourceEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i7, (i20 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 HEAP8[i3] = HEAP8[i3] & -17;
 do {
  if ((HEAP32[i2 + 576 >> 2] | 0) != 0) {
   i7 = __ZN7WebCore11MemoryCache10lruListForEPNS_14CachedResourceE(i1, i2) | 0;
   i5 = i2 + 592 | 0;
   i10 = HEAP32[i5 >> 2] | 0;
   i12 = i2 + 596 | 0;
   i11 = HEAP32[i12 >> 2] | 0;
   i20 = (i10 | 0) == 0;
   i6 = (i11 | 0) == 0;
   if (i20 & i6) {
    if ((HEAP32[i7 >> 2] | 0) != (i2 | 0)) {
     break;
    }
   }
   HEAP32[i5 >> 2] = 0;
   HEAP32[i12 >> 2] = 0;
   do {
    if (i20) {
     i12 = i7 + 4 | 0;
     if ((HEAP32[i12 >> 2] | 0) != (i2 | 0)) {
      break;
     }
     HEAP32[i12 >> 2] = i11;
    } else {
     HEAP32[i10 + 596 >> 2] = i11;
    }
   } while (0);
   if (!i6) {
    HEAP32[i11 + 592 >> 2] = i10;
    break;
   }
   i20 = i7 | 0;
   if ((HEAP32[i20 >> 2] | 0) != (i2 | 0)) {
    break;
   }
   HEAP32[i20 >> 2] = i10;
  }
 } while (0);
 i20 = HEAP8[i3] | 0;
 do {
  if ((i20 & 4) != 0) {
   HEAP8[i3] = i20 & -5;
   i15 = i2 + 600 | 0;
   i12 = HEAP32[i15 >> 2] | 0;
   i5 = i2 + 604 | 0;
   i14 = HEAP32[i5 >> 2] | 0;
   i13 = (i12 | 0) == 0;
   i8 = (i14 | 0) == 0;
   if (i13 & i8) {
    if ((HEAP32[i1 + 300 >> 2] | 0) != (i2 | 0)) {
     break;
    }
   }
   HEAP32[i15 >> 2] = 0;
   HEAP32[i5 >> 2] = 0;
   do {
    if (i13) {
     i5 = i1 + 304 | 0;
     if ((HEAP32[i5 >> 2] | 0) != (i2 | 0)) {
      break;
     }
     HEAP32[i5 >> 2] = i14;
    } else {
     HEAP32[i12 + 604 >> 2] = i14;
    }
   } while (0);
   if (!i8) {
    HEAP32[i14 + 600 >> 2] = i12;
    break;
   }
   i13 = i1 + 300 | 0;
   if ((HEAP32[i13 >> 2] | 0) != (i2 | 0)) {
    break;
   }
   HEAP32[i13 >> 2] = i12;
  }
 } while (0);
 if ((HEAP32[i2 + 16 >> 2] | 0) == 0) {
  i21 = (HEAP32[i2 + 36 >> 2] | 0) != 0;
 } else {
  i21 = 1;
 }
 i20 = (HEAP32[i2 + 572 >> 2] | 0) + (HEAP32[i2 + 568 >> 2] | 0) | 0;
 i3 = i20 + (__ZNK7WebCore14CachedResource12overheadSizeEv(i2) | 0) | 0;
 if (i21) {
  i21 = i1 + 24 | 0;
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) - i3;
  i4 = __ZN7WebCore14CachedResource16deleteIfPossibleEv(i2) | 0;
  return;
 } else {
  i21 = i1 + 28 | 0;
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) - i3;
  i4 = __ZN7WebCore14CachedResource16deleteIfPossibleEv(i2) | 0;
  return;
 }
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14SecurityOriginEEES4_NS_17IdentityExtractorENS2_18SecurityOriginHashENS_10HashTraitsIS4_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14SecurityOriginEEES4_NS_17IdentityExtractorENS2_18SecurityOriginHashENS_10HashTraitsIS4_EES8_E6rehashEiPS4_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = __ZN7WebCore18SecurityOriginHash4hashEPNS_14SecurityOriginE(HEAP32[i8 >> 2] | 0) | 0;
 i9 = i3 & i6;
 i7 = i10 + (i9 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
  } else {
   i13 = (i3 >>> 23) + ~i3 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i9;
   i17 = i7;
   i18 = i11;
   L9 : while (1) {
    do {
     if ((i18 | 0) == -1) {
      i19 = i17;
     } else {
      i20 = HEAP32[i8 >> 2] | 0;
      if ((i20 | 0) == 0) {
       if ((i18 | 0) == 0) {
        i21 = 11;
        break L9;
       } else {
        i19 = i15;
        break;
       }
      } else {
       if (__ZNK7WebCore14SecurityOrigin20isSameSchemeHostPortEPKS0_(i18, i20) | 0) {
        i21 = 11;
        break L9;
       } else {
        i19 = i15;
        break;
       }
      }
     }
    } while (0);
    i20 = (i14 | 0) == 0 ? i13 : i14;
    i22 = i20 + i16 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i21 = 13;
     break;
    } else {
     i14 = i20;
     i15 = i19;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
   if ((i21 | 0) == 13) {
    if ((i19 | 0) == 0) {
     i12 = i23;
     break;
    }
    HEAP32[i19 >> 2] = 0;
    i18 = i2 + 16 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) - 1;
    i12 = i19;
    break;
   } else if ((i21 | 0) == 11) {
    i18 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i16 = i1;
    HEAP32[i16 >> 2] = i17;
    HEAP32[i16 + 4 >> 2] = i18;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 i21 = i4 | 0;
 i4 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 i21 = i12 | 0;
 i19 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = i4;
 do {
  if ((i19 | 0) != 0) {
   i4 = i19 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i19);
   __ZN3WTF8fastFreeEPv(i19);
  }
 } while (0);
 i19 = i2 + 12 | 0;
 i4 = (HEAP32[i19 >> 2] | 0) + 1 | 0;
 HEAP32[i19 >> 2] = i4;
 i19 = i2 + 4 | 0;
 i21 = HEAP32[i19 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i21 | 0)) {
  i25 = i12;
  i26 = i21;
 } else {
  if ((i21 | 0) == 0) {
   i27 = 8;
  } else {
   i23 = i21 << 1;
   i27 = (i4 * 6 & -1 | 0) < (i23 | 0) ? i21 : i23;
  }
  i23 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14SecurityOriginEEES4_NS_17IdentityExtractorENS2_18SecurityOriginHashENS_10HashTraitsIS4_EES8_E6rehashEiPS4_(i2, i27, i12) | 0;
  i25 = i23;
  i26 = HEAP32[i19 >> 2] | 0;
 }
 i19 = (HEAP32[i5 >> 2] | 0) + (i26 << 2) | 0;
 i26 = i1;
 HEAP32[i26 >> 2] = i25;
 HEAP32[i26 + 4 >> 2] = i19;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore11MemoryCache32removeFragmentIdentifierIfNeededERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 if (!(__ZNK7WebCore3URL21hasFragmentIdentifierEv(i2) | 0)) {
  i5 = HEAP32[i2 >> 2] | 0;
  HEAP32[i1 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i6 = i5 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
  }
  i6 = i2 + 4 | 0;
  i5 = i1 + 4 | 0;
  i7 = HEAP8[i5] & -2 | HEAP8[i6] & 1;
  HEAP8[i5] = i7;
  HEAP8[i5] = i7 & -3 | HEAP8[i6] & 2;
  HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
  HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
  HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
  HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
  HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
  HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
  HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
  HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
  HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
  HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
  STACKTOP = i3;
  return;
 }
 i6 = i2 + 4 | 0;
 i7 = HEAP8[i6] | 0;
 if ((i7 & 2) == 0) {
  i5 = HEAP32[i2 >> 2] | 0;
  HEAP32[i1 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i8 = i5 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
  i8 = i1 + 4 | 0;
  i5 = HEAP8[i8] & -2 | HEAP8[i6] & 1;
  HEAP8[i8] = i5;
  HEAP8[i8] = i5 & -3 | HEAP8[i6] & 2;
  HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
  HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
  HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
  HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
  HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
  HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
  HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
  HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
  HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
  HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
  STACKTOP = i3;
  return;
 }
 i5 = i4 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i5 >> 2] = i8;
 if ((i8 | 0) == 0) {
  i9 = i7;
  i10 = 0;
  i11 = i4 + 4 | 0;
 } else {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  i7 = i4 + 4 | 0;
  i9 = HEAP8[i6] | 0;
  i10 = HEAP8[i7] & -4;
  i11 = i7;
 }
 HEAP8[i11] = i10 | i9 & 1 | i9 & 2;
 i9 = i4 + 8 | 0;
 HEAP32[i9 >> 2] = HEAP32[i2 + 8 >> 2];
 i10 = i4 + 12 | 0;
 HEAP32[i10 >> 2] = HEAP32[i2 + 12 >> 2];
 i7 = i4 + 16 | 0;
 HEAP32[i7 >> 2] = HEAP32[i2 + 16 >> 2];
 i6 = i4 + 20 | 0;
 HEAP32[i6 >> 2] = HEAP32[i2 + 20 >> 2];
 i8 = i4 + 24 | 0;
 HEAP32[i8 >> 2] = HEAP32[i2 + 24 >> 2];
 i12 = i4 + 28 | 0;
 HEAP32[i12 >> 2] = HEAP32[i2 + 28 >> 2];
 i13 = i4 + 32 | 0;
 HEAP32[i13 >> 2] = HEAP32[i2 + 32 >> 2];
 i14 = i4 + 36 | 0;
 HEAP32[i14 >> 2] = HEAP32[i2 + 36 >> 2];
 i15 = i4 + 40 | 0;
 HEAP32[i15 >> 2] = HEAP32[i2 + 40 >> 2];
 i16 = i4 + 44 | 0;
 HEAP32[i16 >> 2] = HEAP32[i2 + 44 >> 2];
 __ZN7WebCore3URL24removeFragmentIdentifierEv(i4);
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 >> 2] = i4;
 i4 = HEAP8[i11] | 0;
 i11 = i1 + 4 | 0;
 HEAP8[i11] = HEAP8[i11] & -4 | i4 & 1 | i4 & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i16 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore14CachedResourceEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_RS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore14CachedResourceEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i11 = i9 >>> 7;
 } else {
  i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i11 >>> 23) + ~i11 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i7 = i11;
 i11 = 0;
 while (1) {
  i12 = i7 & i6;
  i13 = i10 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 11;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i11 | 0) == 0 ? i3 : i11;
  i9 = i16;
  i7 = i14 + i12 | 0;
  i11 = i14;
 }
 if ((i17 | 0) == 11) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 HEAP32[i18 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i13 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i13;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i13 << 1 | 0) < (i8 | 0)) {
  i19 = i18;
  i20 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i21 = 8;
  } else {
   i9 = i8 << 1;
   i21 = (i13 * 6 & -1 | 0) < (i9 | 0) ? i8 : i9;
  }
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore14CachedResourceEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i2, i21, i18) | 0;
  i19 = i9;
  i20 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore14CachedResourceEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 << 3) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i13 + 16 >> 2] | 0;
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   i13 = (i18 >>> 23) + ~i18 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == (-1 | 0)) {
     i25 = i22;
    } else if ((i24 | 0) == 0) {
     i26 = 9;
     break;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i25 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i25;
   }
   if ((i26 | 0) == 9) {
    i26 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i19 >> 2] = i17;
   HEAP32[i27 + 4 >> 2] = HEAP32[i7 + (i10 << 3) + 4 >> 2];
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
  }
  i17 = i10 + 1 | 0;
  if ((i17 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i17;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i28 << 3) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 | 0;
    i27 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i10 >> 2] = i27;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i28 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore11MemoryCache21revalidationSucceededEPNS_14CachedResourceERKNS_16ResourceResponseE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i2 + 612 >> 2] | 0;
 HEAP32[i5 >> 2] = i7;
 __ZN7WebCore11MemoryCache5evictEPNS_14CachedResourceE(i1, i2);
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore14CachedResourceEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_RS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i6, i1 + 308 | 0, __ZNK7WebCore19ResourceRequestBase3urlEv(i7 + 48 | 0) | 0, i5);
 i7 = HEAP32[i5 >> 2] | 0;
 if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
  HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] = i7;
 }
 i6 = i7 + 588 | 0;
 HEAP8[i6] = HEAP8[i6] | 16;
 __ZN7WebCore14CachedResource31updateResponseAfterRevalidationERKNS_16ResourceResponseE(i7, i3);
 i3 = __ZN7WebCore11MemoryCache10lruListForEPNS_14CachedResourceE(i1, i7) | 0;
 i5 = i3 | 0;
 i8 = i7 + 592 | 0;
 HEAP32[i8 >> 2] = HEAP32[i5 >> 2];
 i9 = HEAP32[i5 >> 2] | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i9 + 596 >> 2] = i7;
 }
 HEAP32[i5 >> 2] = i7;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  HEAP32[i3 + 4 >> 2] = i7;
 }
 i3 = i7 + 572 | 0;
 i8 = (HEAP32[i3 >> 2] | 0) + (HEAP32[i7 + 568 >> 2] | 0) | 0;
 i5 = i8 + (__ZNK7WebCore14CachedResource12overheadSizeEv(i7) | 0) | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   if ((HEAP32[i7 + 16 >> 2] | 0) == 0) {
    if ((HEAP32[i7 + 36 >> 2] | 0) == 0) {
     break;
    }
   }
   HEAP8[i6] = HEAP8[i6] | 4;
   i8 = i1 + 300 | 0;
   i9 = i7 + 600 | 0;
   HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
   i10 = HEAP32[i8 >> 2] | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i10 + 604 >> 2] = i7;
   }
   HEAP32[i8 >> 2] = i7;
   if ((HEAP32[i9 >> 2] | 0) != 0) {
    break;
   }
   HEAP32[i1 + 304 >> 2] = i7;
  }
 } while (0);
 if ((i5 | 0) == 0) {
  i11 = i2;
  i12 = HEAP32[i11 >> 2] | 0;
  i13 = i12 + 76 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  FUNCTION_TABLE_vi[i14 & 7](i2);
  __ZN7WebCore14CachedResource25clearResourceToRevalidateEv(i2);
  STACKTOP = i4;
  return;
 }
 do {
  if ((HEAP32[i7 + 16 >> 2] | 0) == 0) {
   if ((HEAP32[i7 + 36 >> 2] | 0) != 0) {
    break;
   }
   i6 = i1 + 28 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + i5;
   i11 = i2;
   i12 = HEAP32[i11 >> 2] | 0;
   i13 = i12 + 76 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   FUNCTION_TABLE_vi[i14 & 7](i2);
   __ZN7WebCore14CachedResource25clearResourceToRevalidateEv(i2);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i7 = i1 + 24 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i5;
 i11 = i2;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = i12 + 76 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 FUNCTION_TABLE_vi[i14 & 7](i2);
 __ZN7WebCore14CachedResource25clearResourceToRevalidateEv(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore18SecurityOriginHash4hashEPNS_14SecurityOriginE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = (i3 | 0) == 0;
 do {
  if (i4) {
   i5 = 0;
   i6 = 0;
   i7 = 1;
   i8 = 0;
  } else {
   i9 = i3 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   i9 = HEAP32[i2 >> 2] | 0;
   if ((i9 | 0) != 0) {
    i10 = i9 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   }
   i10 = HEAP32[i9 + 16 >> 2] | 0;
   if (i10 >>> 0 > 127 >>> 0) {
    i5 = i10 >>> 23 & 65535;
    i6 = i10 >>> 7 & 65535;
    i7 = 0;
    i8 = i9;
    break;
   } else {
    i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i9) | 0;
    i5 = i10 >>> 16 & 65535;
    i6 = i10 & 65535;
    i7 = 0;
    i8 = i9;
    break;
   }
  }
 } while (0);
 i2 = i1 + 8 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i11 = HEAP16[i1 + 20 >> 1] | 0;
   i12 = 0;
   i13 = 0;
  } else {
   i10 = i9 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i14 = HEAP32[i2 >> 2] | 0;
   i15 = (i14 | 0) == 0;
   if (!i15) {
    i16 = i14 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   }
   i16 = HEAP32[i14 + 16 >> 2] | 0;
   if (i16 >>> 0 > 127 >>> 0) {
    i17 = i16 >>> 7 & 65535;
    i18 = i16 >>> 23 & 65535;
   } else {
    i16 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i14) | 0;
    i17 = i16 & 65535;
    i18 = i16 >>> 16 & 65535;
   }
   i16 = HEAP16[i1 + 20 >> 1] | 0;
   do {
    if (!i15) {
     i19 = i14 | 0;
     i20 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i19 >> 2] = i20;
      break;
     }
    }
   } while (0);
   i14 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    i11 = i16;
    i12 = i18;
    i13 = i17;
    break;
   } else {
    HEAP32[i10 >> 2] = i14;
    i11 = i16;
    i12 = i18;
    i13 = i17;
    break;
   }
  }
 } while (0);
 do {
  if (!(i7 | (i8 | 0) == 0)) {
   i17 = i8 | 0;
   i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i17 >> 2] = i18;
    break;
   }
  }
 } while (0);
 do {
  if (!i4) {
   i8 = i3 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i3 = (i6 & 65535) - 1640531527 | 0;
 i6 = (i5 & 65535) << 11 ^ i3 ^ i3 << 16;
 i3 = (i6 >>> 11) + i6 + (i13 & 65535) | 0;
 i13 = (i12 & 65535) << 11 ^ i3 ^ i3 << 16;
 i3 = i13 + (i11 & 65535) + (i13 >>> 11) | 0;
 i13 = i3 << 16 ^ i3;
 i3 = (i13 >>> 11) + i13 | 0;
 i13 = i3 << 3 ^ i3;
 i3 = (i13 >>> 5) + i13 | 0;
 i13 = i3 << 2 ^ i3;
 i3 = (i13 >>> 15) + i13 | 0;
 i13 = (i3 << 10 ^ i3) & 16777215;
 return ((i13 | 0) == 0 ? 8388608 : i13) | 0;
}
function __ZN7WebCore11MemoryCache19getOriginsWithCacheERN3WTF7HashSetINS1_6RefPtrINS_14SecurityOriginEEENS_18SecurityOriginHashENS1_10HashTraitsIS5_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[i1 + 308 >> 2] | 0;
 i8 = HEAP32[i1 + 312 >> 2] | 0;
 i9 = i7 + (i8 << 3) | 0;
 if ((HEAP32[i1 + 320 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 L4 : do {
  if ((i8 | 0) == 0) {
   i10 = i7;
  } else {
   i1 = i7;
   while (1) {
    i11 = HEAP32[i1 >> 2] | 0;
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     i10 = i1;
     break L4;
    }
    i1 = i1 + 8 | 0;
    if ((i1 | 0) == (i9 | 0)) {
     break;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i10 | 0) == (i9 | 0)) {
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 i8 = i5 | 0;
 i1 = i2 | 0;
 i2 = i10;
 L13 : while (1) {
  __ZN7WebCore14SecurityOrigin16createFromStringERKN3WTF6StringE(i5, __ZNK7WebCore19ResourceRequestBase3urlEv((HEAP32[i2 + 4 >> 2] | 0) + 48 | 0) | 0);
  i10 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i7 >> 2] = i10;
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14SecurityOriginEEES4_NS_17IdentityExtractorENS2_18SecurityOriginHashENS_10HashTraitsIS4_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S6_S8_S8_EEEEOT0_OT1_(i6, i1, i4, i4);
  i10 = HEAP32[i7 >> 2] | 0;
  do {
   if ((i10 | 0) != 0) {
    i11 = i10 | 0;
    if (((tempValue = HEAP32[i11 >> 2] | 0, HEAP32[i11 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
     break;
    }
    __ZN7WebCore14SecurityOriginD2Ev(i10);
    __ZN3WTF8fastFreeEPv(i10);
   }
  } while (0);
  i10 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i10 | 0) != 0) {
    i11 = i10 | 0;
    if (((tempValue = HEAP32[i11 >> 2] | 0, HEAP32[i11 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
     break;
    }
    __ZN7WebCore14SecurityOriginD2Ev(i10);
    __ZN3WTF8fastFreeEPv(i10);
   }
  } while (0);
  i10 = i2 + 8 | 0;
  if ((i10 | 0) == (i9 | 0)) {
   i12 = 21;
   break;
  } else {
   i13 = i10;
  }
  while (1) {
   i10 = HEAP32[i13 >> 2] | 0;
   if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
    break;
   }
   i10 = i13 + 8 | 0;
   if ((i10 | 0) == (i9 | 0)) {
    i12 = 23;
    break L13;
   } else {
    i13 = i10;
   }
  }
  if ((i13 | 0) == (i9 | 0)) {
   i12 = 22;
   break;
  } else {
   i2 = i13;
  }
 }
 if ((i12 | 0) == 21) {
  STACKTOP = i3;
  return;
 } else if ((i12 | 0) == 22) {
  STACKTOP = i3;
  return;
 } else if ((i12 | 0) == 23) {
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11MemoryCache24pruneLiveResourcesToSizeEjb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, d5 = +0, d6 = +0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = i1 + 2 | 0;
 if ((HEAP8[i4] & 1) != 0) {
  return;
 }
 HEAP8[i4] = 1;
 d5 = +HEAPF64[__ZN7WebCore9FrameView22sCurrentPaintTimeStampE >> 3];
 if (d5 != +0) {
  d6 = d5;
 } else {
  d6 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
 }
 i7 = HEAP32[i1 + 304 >> 2] | 0;
 i8 = i1 + 24 | 0;
 L7 : do {
  if ((i7 | 0) != 0) {
   i1 = (i2 | 0) == 0;
   if (i3) {
    if (i1) {
     i9 = i7;
     while (1) {
      i10 = HEAP32[i9 + 604 >> 2] | 0;
      do {
       if ((HEAP8[i9 + 588 | 0] & 32) == 0) {
        if ((HEAP32[i9 + 572 >> 2] | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 68 >> 2] & 7](i9);
       }
      } while (0);
      if ((i10 | 0) == 0) {
       break L7;
      } else {
       i9 = i10;
      }
     }
    } else {
     i9 = i7;
     L12 : while (1) {
      i11 = HEAP32[i9 + 604 >> 2] | 0;
      do {
       if ((HEAP8[i9 + 588 | 0] & 32) == 0) {
        if ((HEAP32[i9 + 572 >> 2] | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 68 >> 2] & 7](i9);
        if ((HEAP32[i8 >> 2] | 0) >>> 0 <= i2 >>> 0 | (i11 | 0) == 0) {
         break L7;
        } else {
         i9 = i11;
         continue L12;
        }
       }
      } while (0);
      if ((i11 | 0) == 0) {
       break L7;
      } else {
       i9 = i11;
      }
     }
    }
   }
   if (i1) {
    i9 = i7;
    while (1) {
     i10 = HEAP32[i9 + 604 >> 2] | 0;
     do {
      if ((HEAP8[i9 + 588 | 0] & 32) == 0) {
       if ((HEAP32[i9 + 572 >> 2] | 0) == 0) {
        break;
       }
       if (d6 - +HEAPF64[i9 + 552 >> 3] < +1) {
        break L7;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 68 >> 2] & 7](i9);
      }
     } while (0);
     if ((i10 | 0) == 0) {
      break;
     } else {
      i9 = i10;
     }
    }
   } else {
    i9 = i7;
    L26 : while (1) {
     i1 = HEAP32[i9 + 604 >> 2] | 0;
     do {
      if ((HEAP8[i9 + 588 | 0] & 32) == 0) {
       if ((HEAP32[i9 + 572 >> 2] | 0) == 0) {
        break;
       }
       if (d6 - +HEAPF64[i9 + 552 >> 3] < +1) {
        break L7;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 68 >> 2] & 7](i9);
       if ((HEAP32[i8 >> 2] | 0) >>> 0 <= i2 >>> 0 | (i1 | 0) == 0) {
        break L7;
       } else {
        i9 = i1;
        continue L26;
       }
      }
     } while (0);
     if ((i1 | 0) == 0) {
      break;
     } else {
      i9 = i1;
     }
    }
   }
  }
 } while (0);
 HEAP8[i4] = 0;
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14SecurityOriginEEES4_NS_17IdentityExtractorENS2_18SecurityOriginHashENS_10HashTraitsIS4_EES8_E6rehashEiPS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 HEAP32[i8 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i10 = 0;
  i11 = i9;
  __ZN3WTF8fastFreeEPv(i11);
  STACKTOP = i4;
  return i10 | 0;
 }
 i2 = i5 | 0;
 i8 = 0;
 i6 = 0;
 while (1) {
  i12 = i9 + (i8 << 2) | 0;
  i13 = i12 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i6;
  } else {
   __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14SecurityOriginEEES4_NS_17IdentityExtractorENS2_18SecurityOriginHashENS_10HashTraitsIS4_EES8_E16lookupForWritingINS_22IdentityHashTranslatorIS6_EES4_EENSt3__14pairIPS4_bEERKT0_(i5, i1, i12);
   i14 = HEAP32[i2 >> 2] | 0;
   i16 = i14 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i18 = i17 | 0;
     if (((tempValue = HEAP32[i18 >> 2] | 0, HEAP32[i18 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
      break;
     }
     __ZN7WebCore14SecurityOriginD2Ev(i17);
     __ZN3WTF8fastFreeEPv(i17);
    }
   } while (0);
   i17 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i16 >> 2] = i17;
   i15 = (i12 | 0) == (i3 | 0) ? i14 : i6;
  }
  i17 = i8 + 1 | 0;
  if ((i17 | 0) == (i7 | 0)) {
   break;
  } else {
   i8 = i17;
   i6 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i7 | 0) > 0) {
  i19 = 0;
 } else {
  i10 = i15;
  i11 = i9;
  __ZN3WTF8fastFreeEPv(i11);
  STACKTOP = i4;
  return i10 | 0;
 }
 while (1) {
  i1 = HEAP32[i9 + (i19 << 2) >> 2] | 0;
  i6 = i1;
  do {
   if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
    i8 = i1 | 0;
    if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0 | (i1 | 0) == 0) {
     break;
    }
    __ZN7WebCore14SecurityOriginD2Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
   }
  } while (0);
  i1 = i19 + 1 | 0;
  if ((i1 | 0) < (i7 | 0)) {
   i19 = i1;
  } else {
   i10 = i15;
   break;
  }
 }
 i11 = i9;
 __ZN3WTF8fastFreeEPv(i11);
 STACKTOP = i4;
 return i10 | 0;
}
function __ZN7WebCore15ResourceRequestC2ERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i5, 0, i2);
 i2 = i5 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP8[i5 + 4 | 0] | 0;
 i6 = i1 + 4 | 0;
 HEAP8[i6] = HEAP8[i6] & -4 | i7 & 1 | i7 & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i5 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i5 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i5 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i5 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i5 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i5 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i5 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i5 + 44 >> 2];
 HEAP32[i1 + 48 >> 2] = 0;
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
 i5 = i1 + 64 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i5);
 HEAP32[i4 >> 2] = H_BASE + 8;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 112 | 0, i4);
 __ZN7WebCore13HTTPHeaderMapC1Ev(i1 + 116 | 0);
 _memset(i1 + 136 | 0, 0, 16) | 0;
 HEAP8[i1 + 152 | 0] = 11;
 HEAP32[i1 + 156 >> 2] = 1;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i3;
  return;
 }
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11MemoryCache16resourceAccessedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = i2 + 576 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  i4 = 13;
 } else {
  i5 = __ZN7WebCore11MemoryCache10lruListForEPNS_14CachedResourceE(i1, i2) | 0;
  i6 = i2 + 592 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  i8 = i2 + 596 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  i10 = (i7 | 0) == 0;
  i11 = (i9 | 0) == 0;
  if (i10 & i11) {
   if ((HEAP32[i5 >> 2] | 0) == (i2 | 0)) {
    i4 = 4;
   }
  } else {
   i4 = 4;
  }
  do {
   if ((i4 | 0) == 4) {
    HEAP32[i6 >> 2] = 0;
    HEAP32[i8 >> 2] = 0;
    do {
     if (i10) {
      i12 = i5 + 4 | 0;
      if ((HEAP32[i12 >> 2] | 0) != (i2 | 0)) {
       break;
      }
      HEAP32[i12 >> 2] = i9;
     } else {
      HEAP32[i7 + 596 >> 2] = i9;
     }
    } while (0);
    if (!i11) {
     HEAP32[i9 + 592 >> 2] = i7;
     break;
    }
    i12 = i5 | 0;
    if ((HEAP32[i12 >> 2] | 0) != (i2 | 0)) {
     break;
    }
    HEAP32[i12 >> 2] = i7;
   }
  } while (0);
  if ((HEAP32[i3 >> 2] | 0) == 0) {
   i4 = 13;
  }
 }
 do {
  if ((i4 | 0) == 13) {
   if ((HEAP32[i2 + 16 >> 2] | 0) == 0) {
    i13 = (HEAP32[i2 + 36 >> 2] | 0) != 0;
   } else {
    i13 = 1;
   }
   i7 = (HEAP32[i2 + 572 >> 2] | 0) + (HEAP32[i2 + 568 >> 2] | 0) | 0;
   i5 = i7 + (__ZNK7WebCore14CachedResource12overheadSizeEv(i2) | 0) | 0;
   if (i13) {
    i7 = i1 + 24 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i5;
    break;
   } else {
    i7 = i1 + 28 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i5;
    break;
   }
  }
 } while (0);
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = __ZN7WebCore11MemoryCache10lruListForEPNS_14CachedResourceE(i1, i2) | 0;
 i1 = i3 | 0;
 i13 = i2 + 592 | 0;
 HEAP32[i13 >> 2] = HEAP32[i1 >> 2];
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i4 + 596 >> 2] = i2;
 }
 HEAP32[i1 >> 2] = i2;
 if ((HEAP32[i13 >> 2] | 0) != 0) {
  return;
 }
 HEAP32[i3 + 4 >> 2] = i2;
 return;
}
function __ZN7WebCore34CrossThreadResourceRequestDataBaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 132 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 128 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 120 | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i3 >> 2] | 0;
  i6 = i5 + (i4 << 2) | 0;
  i4 = i5;
  while (1) {
   i5 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 124 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 116 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF6VectorINSt3__14pairINS_6StringES3_EELj0ENS_15CrashOnOverflowEED2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore11MemoryCache13getStatisticsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 _memset(i1 | 0, 0, 120) | 0;
 i3 = HEAP32[i2 + 308 >> 2] | 0;
 i4 = HEAP32[i2 + 312 >> 2] | 0;
 i5 = i3 + (i4 << 3) | 0;
 if ((HEAP32[i2 + 320 >> 2] | 0) == 0) {
  return;
 }
 L4 : do {
  if ((i4 | 0) == 0) {
   i6 = i3;
  } else {
   i2 = i3;
   while (1) {
    i7 = HEAP32[i2 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i6 = i2;
     break L4;
    }
    i2 = i2 + 8 | 0;
    if ((i2 | 0) == (i5 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i6 | 0) == (i5 | 0)) {
  return;
 }
 i3 = i1 | 0;
 i4 = i1 + 24 | 0;
 i2 = i1 + 48 | 0;
 i7 = i1 + 72 | 0;
 i8 = i1 + 96 | 0;
 i1 = i6;
 L13 : while (1) {
  i6 = HEAP32[i1 + 4 >> 2] | 0;
  switch ((HEAP32[i6 + 588 >> 2] | 0) >>> 7 & 15 | 0) {
  case 7:
   {
    __ZN7WebCore11MemoryCache13TypeStatistic11addResourceEPNS_14CachedResourceE(i7, i6);
    break;
   }
  case 4:
   {
    __ZN7WebCore11MemoryCache13TypeStatistic11addResourceEPNS_14CachedResourceE(i8, i6);
    break;
   }
  case 1:
   {
    __ZN7WebCore11MemoryCache13TypeStatistic11addResourceEPNS_14CachedResourceE(i3, i6);
    break;
   }
  case 3:
   {
    __ZN7WebCore11MemoryCache13TypeStatistic11addResourceEPNS_14CachedResourceE(i2, i6);
    break;
   }
  case 2:
   {
    __ZN7WebCore11MemoryCache13TypeStatistic11addResourceEPNS_14CachedResourceE(i4, i6);
    break;
   }
  default:
   {}
  }
  i6 = i1 + 8 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   i9 = 19;
   break;
  } else {
   i10 = i6;
  }
  while (1) {
   i6 = HEAP32[i10 >> 2] | 0;
   if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
    break;
   }
   i6 = i10 + 8 | 0;
   if ((i6 | 0) == (i5 | 0)) {
    i9 = 22;
    break L13;
   } else {
    i10 = i6;
   }
  }
  if ((i10 | 0) == (i5 | 0)) {
   i9 = 21;
   break;
  } else {
   i1 = i10;
  }
 }
 if ((i9 | 0) == 19) {
  return;
 } else if ((i9 | 0) == 21) {
  return;
 } else if ((i9 | 0) == 22) {
  return;
 }
}
function __ZN7WebCore11MemoryCache18resourceForRequestERKNS_15ResourceRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 __ZN7WebCore11MemoryCache32removeFragmentIdentifierIfNeededERKNS_3URLE(i4, __ZNK7WebCore19ResourceRequestBase3urlEv(i2 | 0) | 0);
 i2 = HEAP32[i1 + 316 >> 2] | 0;
 i5 = HEAP32[i1 + 308 >> 2] | 0;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 i7 = HEAP32[i4 + 16 >> 2] | 0;
 if (i7 >>> 0 > 127 >>> 0) {
  i8 = i7 >>> 7;
 } else {
  i8 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i4) | 0;
 }
 L5 : do {
  if ((i5 | 0) == 0) {
   i9 = 0;
  } else {
   i4 = (i8 >>> 23) + ~i8 | 0;
   i7 = i4 << 12 ^ i4;
   i4 = i7 >>> 7 ^ i7;
   i7 = i4 << 2 ^ i4;
   i4 = i7 >>> 20 ^ i7 | 1;
   i7 = i8;
   i10 = 0;
   while (1) {
    i11 = i7 & i2;
    i12 = i5 + (i11 << 3) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    i14 = i13;
    if ((i14 | 0) == 0) {
     i9 = 0;
     break L5;
    } else if ((i14 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i13, HEAP32[i6 >> 2] | 0) | 0) {
      break;
     }
    }
    i13 = (i10 | 0) == 0 ? i4 : i10;
    i7 = i13 + i11 | 0;
    i10 = i13;
   }
   if ((i12 | 0) == 0) {
    i9 = 0;
    break;
   }
   i10 = HEAP32[i5 + (i11 << 3) + 4 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i9 = 0;
    break;
   }
   if (__ZN7WebCore14CachedResource13makePurgeableEb(i10, 0) | 0) {
    i9 = i10;
    break;
   }
   __ZN7WebCore11MemoryCache5evictEPNS_14CachedResourceE(i1, i10);
   i9 = 0;
  }
 } while (0);
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return i9 | 0;
 }
 i6 = i1 | 0;
 i11 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return i9 | 0;
 } else {
  HEAP32[i6 >> 2] = i11;
  STACKTOP = i3;
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCore19ResourceRequestBaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 144 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 136 | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i3 >> 2] | 0;
  i6 = i5 + (i4 << 2) | 0;
  i4 = i5;
  while (1) {
   i5 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 140 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore13HTTPHeaderMapD1Ev(i1 + 116 | 0);
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14SecurityOriginEEES4_NS_17IdentityExtractorENS2_18SecurityOriginHashENS_10HashTraitsIS4_EES8_E16lookupForWritingINS_22IdentityHashTranslatorIS6_EES4_EENSt3__14pairIPS4_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i3 | 0;
 i3 = __ZN7WebCore18SecurityOriginHash4hashEPNS_14SecurityOriginE(HEAP32[i2 >> 2] | 0) | 0;
 i6 = i3 & i5;
 i7 = i4 + (i6 << 2) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L1 : do {
  if ((i8 | 0) == 0) {
   i9 = 0;
   i10 = i7;
  } else {
   i11 = (i3 >>> 23) + ~i3 | 0;
   i12 = i11 << 12 ^ i11;
   i11 = i12 >>> 7 ^ i12;
   i12 = i11 << 2 ^ i11;
   i11 = i12 >>> 20 ^ i12 | 1;
   i12 = 0;
   i13 = 0;
   i14 = i6;
   i15 = i7;
   i16 = i8;
   L3 : while (1) {
    do {
     if ((i16 | 0) == -1) {
      i17 = i15;
     } else {
      i18 = HEAP32[i2 >> 2] | 0;
      if ((i18 | 0) == 0) {
       if ((i16 | 0) == 0) {
        break L3;
       } else {
        i17 = i12;
        break;
       }
      } else {
       if (__ZNK7WebCore14SecurityOrigin20isSameSchemeHostPortEPKS0_(i16, i18) | 0) {
        break L3;
       } else {
        i17 = i12;
        break;
       }
      }
     }
    } while (0);
    i18 = (i13 | 0) == 0 ? i11 : i13;
    i19 = i18 + i14 & i5;
    i20 = i4 + (i19 << 2) | 0;
    i21 = HEAP32[i20 >> 2] | 0;
    if ((i21 | 0) == 0) {
     i9 = i17;
     i10 = i20;
     break L1;
    } else {
     i12 = i17;
     i13 = i18;
     i14 = i19;
     i15 = i20;
     i16 = i21;
    }
   }
   HEAP32[i1 >> 2] = i15;
   HEAP8[i1 + 4 | 0] = 1;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = (i9 | 0) != 0 ? i9 : i10;
 HEAP8[i1 + 4 | 0] = 0;
 return;
}
function __ZN7WebCore11MemoryCache10lruListForEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = HEAP32[i2 + 576 >> 2] | 0;
 i4 = (HEAP32[i2 + 572 >> 2] | 0) + (HEAP32[i2 + 568 >> 2] | 0) | 0;
 i5 = ((i4 + (__ZNK7WebCore14CachedResource12overheadSizeEv(i2) | 0) | 0) >>> 0) / (((i3 | 0) == 0 ? 1 : i3) >>> 0) & -1;
 i3 = (i5 - 1 & i5 | 0) != 0 | 0;
 i2 = i5 >>> 16;
 i4 = (i2 | 0) == 0;
 i6 = i4 ? i5 : i2;
 i2 = i4 ? i3 : i3 | 16;
 i3 = i6 >>> 8;
 i4 = (i3 | 0) == 0;
 i5 = i4 ? i6 : i3;
 i3 = i4 ? i2 : i2 | 8;
 i2 = i5 >>> 4;
 i4 = (i2 | 0) == 0;
 i6 = i4 ? i5 : i2;
 i2 = i4 ? i3 : i3 | 4;
 i3 = i6 >>> 2;
 i4 = (i3 | 0) == 0;
 i5 = ((i4 ? i6 : i3) >>> 0 > 1 >>> 0) + (i4 ? i2 : i2 + 2 | 0) | 0;
 i2 = i1 + 32 | 0;
 i4 = i1 + 40 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if (i3 >>> 0 > i5 >>> 0) {
  i7 = i3;
 } else {
  i3 = i5 + 1 | 0;
  i6 = HEAP32[i1 + 36 >> 2] | 0;
  if (i6 >>> 0 < i3 >>> 0) {
   i1 = i6 + 1 + (i6 >>> 2) | 0;
   i6 = i1 >>> 0 > 16 >>> 0 ? i1 : 16;
   __ZN3WTF6VectorIN7WebCore11MemoryCache7LRUListELj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i6 >>> 0 > i3 >>> 0 ? i6 : i3);
  }
  i6 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i1 = HEAP32[i4 >> 2] | 0;
    i8 = i6 + (i3 << 3) | 0;
    if ((i1 | 0) == (i3 | 0)) {
     break;
    }
    i9 = i6 + (i1 << 3) | 0;
    while (1) {
     HEAP32[i9 >> 2] = 0;
     HEAP32[i9 + 4 >> 2] = 0;
     i9 = i9 + 8 | 0;
     if ((i9 | 0) == (i8 | 0)) {
      break;
     }
    }
   }
  } while (0);
  HEAP32[i4 >> 2] = i3;
  i7 = i3;
 }
 if (i7 >>> 0 > i5 >>> 0) {
  return (HEAP32[i2 >> 2] | 0) + (i5 << 3) | 0;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
}
function __ZN7WebCore11MemoryCache5pruneEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 i5 = i1 + 4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 + i3 | 0) >>> 0 <= i6 >>> 0) {
   if (i4 >>> 0 > (HEAP32[i1 + 12 >> 2] | 0) >>> 0) {
    break;
   }
   return;
  }
 } while (0);
 i7 = i1 + 1 | 0;
 i8 = HEAP8[i7] | 0;
 do {
  if ((i8 & 1) == 0) {
   i9 = i8;
  } else {
   i10 = i6 - (i6 >>> 0 < i3 >>> 0 ? i6 : i3) | 0;
   i11 = HEAP32[i1 + 8 >> 2] | 0;
   i12 = i10 >>> 0 < i11 >>> 0 ? i11 : i10;
   i10 = HEAP32[i1 + 12 >> 2] | 0;
   i11 = i10 >>> 0 < i12 >>> 0 ? i10 : i12;
   if (!((i11 | 0) == 0 | i4 >>> 0 > i11 >>> 0)) {
    i9 = i8;
    break;
   }
   __ZN7WebCore11MemoryCache24pruneDeadResourcesToSizeEj(i1, ~~(+(i11 >>> 0 >>> 0) * +.949999988079071));
   i9 = HEAP8[i7] | 0;
  }
 } while (0);
 if ((i9 & 1) == 0) {
  return;
 }
 i9 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i2 = i9 - (i9 >>> 0 < i5 >>> 0 ? i9 : i5) | 0;
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 i8 = i2 >>> 0 < i7 >>> 0 ? i7 : i2;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i7 = i2 >>> 0 < i8 >>> 0 ? i2 : i8;
 i8 = i9 - i7 | 0;
 do {
  if ((i9 | 0) == (i7 | 0)) {
   i13 = 0;
  } else {
   if (i5 >>> 0 > i8 >>> 0) {
    i13 = i8;
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore11MemoryCache24pruneLiveResourcesToSizeEjb(i1, ~~(+(i13 >>> 0 >>> 0) * +.949999988079071), 0);
 return;
}
function __ZN7WebCore11MemoryCache13TypeStatistic11addResourceEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = __ZNK7WebCore14CachedResource9wasPurgedEv(i2) | 0;
 i4 = (__ZNK7WebCore14CachedResource11isPurgeableEv(i2) | 0) & (i3 ^ 1);
 i5 = i2 + 568 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + 4095 + (__ZNK7WebCore14CachedResource12overheadSizeEv(i2) | 0) & -4096;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 if (i3) {
  i8 = 0;
 } else {
  i6 = (HEAP32[i2 + 572 >> 2] | 0) + (HEAP32[i5 >> 2] | 0) | 0;
  i8 = i6 + (__ZNK7WebCore14CachedResource12overheadSizeEv(i2) | 0) | 0;
 }
 i6 = i1 + 4 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + i8;
 do {
  if ((HEAP32[i2 + 16 >> 2] | 0) == 0) {
   if ((HEAP32[i2 + 36 >> 2] | 0) != 0) {
    i9 = 6;
    break;
   }
   i10 = 0;
   i11 = i2 + 572 | 0;
  } else {
   i9 = 6;
  }
 } while (0);
 if ((i9 | 0) == 6) {
  i9 = i2 + 572 | 0;
  i8 = (HEAP32[i9 >> 2] | 0) + (HEAP32[i5 >> 2] | 0) | 0;
  i10 = i8 + (__ZNK7WebCore14CachedResource12overheadSizeEv(i2) | 0) | 0;
  i11 = i9;
 }
 i9 = i1 + 8 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + i10;
 i10 = i1 + 12 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + (HEAP32[i11 >> 2] | 0);
 i11 = i1 + 16 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + (i4 ? i7 : 0);
 i4 = i1 + 20 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + (i3 ? i7 : 0);
 return;
}
function __ZN7WebCore11MemoryCache26removeRequestFromCacheImplEPNS_22ScriptExecutionContextERKNS_15ResourceRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if (HEAP8[H_BASE + 48 | 0] | 0) {
  i3 = HEAP32[H_BASE + 56 >> 2] | 0;
 } else {
  i1 = __ZN3WTF10fastMallocEj(328) | 0;
  i4 = i1;
  HEAP8[i1] = 0;
  HEAP8[i1 + 1 | 0] = 1;
  HEAP8[i1 + 2 | 0] = 0;
  HEAP32[i1 + 4 >> 2] = 8388608;
  HEAP32[i1 + 8 >> 2] = 0;
  HEAP32[i1 + 12 >> 2] = 8388608;
  _memset(i1 + 16 | 0, 0, 16) | 0;
  HEAP32[i1 + 32 >> 2] = i1 + 44;
  HEAP32[i1 + 36 >> 2] = 32;
  HEAP32[i1 + 40 >> 2] = 0;
  _memset(i1 + 300 | 0, 0, 28) | 0;
  HEAP32[H_BASE + 56 >> 2] = i4;
  HEAP8[H_BASE + 48 | 0] = 1;
  i3 = i4;
 }
 i4 = __ZN7WebCore11MemoryCache18resourceForRequestERKNS_15ResourceRequestE(i3, i2) | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 if (HEAP8[H_BASE + 48 | 0] | 0) {
  i5 = HEAP32[H_BASE + 56 >> 2] | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(328) | 0;
  i3 = i2;
  HEAP8[i2] = 0;
  HEAP8[i2 + 1 | 0] = 1;
  HEAP8[i2 + 2 | 0] = 0;
  HEAP32[i2 + 4 >> 2] = 8388608;
  HEAP32[i2 + 8 >> 2] = 0;
  HEAP32[i2 + 12 >> 2] = 8388608;
  _memset(i2 + 16 | 0, 0, 16) | 0;
  HEAP32[i2 + 32 >> 2] = i2 + 44;
  HEAP32[i2 + 36 >> 2] = 32;
  HEAP32[i2 + 40 >> 2] = 0;
  _memset(i2 + 300 | 0, 0, 28) | 0;
  HEAP32[H_BASE + 56 >> 2] = i3;
  HEAP8[H_BASE + 48 | 0] = 1;
  i5 = i3;
 }
 __ZN7WebCore11MemoryCache5evictEPNS_14CachedResourceE(i5, i4);
 return;
}
function __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i2 + 4 | 0;
 i6 = i1 + 4 | 0;
 i8 = HEAP8[i6] & -2 | HEAP8[i7] & 1;
 HEAP8[i6] = i8;
 HEAP8[i6] = i8 & -3 | HEAP8[i7] & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
 HEAP32[i1 + 48 >> 2] = i3;
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
 i3 = i1 + 64 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i3);
 HEAP32[i5 >> 2] = H_BASE + 8;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 112 | 0, i5);
 __ZN7WebCore13HTTPHeaderMapC1Ev(i1 + 116 | 0);
 _memset(i1 + 136 | 0, 0, 16) | 0;
 HEAP8[i1 + 152 | 0] = 11;
 HEAP32[i1 + 156 >> 2] = 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore30CrossThreadResourceRequestDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 156 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 152 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 144 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore34CrossThreadResourceRequestDataBaseD2Ev(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = i1 | 0;
  __ZN7WebCore34CrossThreadResourceRequestDataBaseD2Ev(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1 | 0;
  __ZN7WebCore34CrossThreadResourceRequestDataBaseD2Ev(i5);
  return;
 }
}
function __ZN7WebCore15ResourceRequestD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 172 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 168 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 164 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 160 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore11MemoryCache7LRUListELj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
  if (i2 >>> 0 > 32 >>> 0) {
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
   HEAP32[i3 >> 2] = 32;
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
function __ZN7WebCore11MemoryCache22removeRequestFromCacheEPNS_22ScriptExecutionContextERKNS_15ResourceRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 3](i1) | 0)) {
  __ZN7WebCore11MemoryCache26removeRequestFromCacheImplEPNS_22ScriptExecutionContextERKNS_15ResourceRequestE(0, i2);
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[(HEAP32[i1 + 264 >> 2] | 0) + 120 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0;
 __ZN7WebCore21CrossThreadCopierBaseILb0ELb0ENS_15ResourceRequestEE4copyERKS1_(i4, i2);
 i2 = __ZN3WTF10fastMallocEj(12) | 0;
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = H_BASE + 24;
 HEAP32[i2 + 4 >> 2] = F_BASE_vii + 2;
 HEAP32[i2 + 8 >> 2] = i4;
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = i2;
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore30CrossThreadResourceRequestDataD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 FUNCTION_TABLE_vii[i1 & 7](i6, i5);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11MemoryCache14evictResourcesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  return;
 }
 HEAP8[i2] = 1;
 i3 = i1 + 320 | 0;
 i4 = i1 + 308 | 0;
 i5 = i1 + 312 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 L4 : do {
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   i8 = i6;
   i9 = i7;
   i10 = i6 + (i7 << 3) | 0;
   while (1) {
    L8 : do {
     if ((i9 | 0) == 0) {
      i11 = i8;
     } else {
      i12 = i8;
      while (1) {
       i13 = HEAP32[i12 >> 2] | 0;
       if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
        i11 = i12;
        break L8;
       }
       i12 = i12 + 8 | 0;
       if ((i12 | 0) == (i10 | 0)) {
        break L4;
       }
      }
     }
    } while (0);
    if ((i11 | 0) == (i10 | 0)) {
     break L4;
    }
    __ZN7WebCore11MemoryCache5evictEPNS_14CachedResourceE(i1, HEAP32[i11 + 4 >> 2] | 0);
    i12 = HEAP32[i4 >> 2] | 0;
    i13 = HEAP32[i5 >> 2] | 0;
    if ((HEAP32[i3 >> 2] | 0) == 0) {
     break;
    } else {
     i8 = i12;
     i9 = i13;
     i10 = i12 + (i13 << 3) | 0;
    }
   }
  }
 } while (0);
 HEAP8[i2] = 0;
 return;
}
function __ZN3WTF6VectorINSt3__14pairINS_6StringES3_EELj0ENS_15CrashOnOverflowEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 3) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i8 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i3 = i3 + 8 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore14SecurityOriginD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore11MemoryCache11setDisabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 HEAP8[i1 | 0] = i2 & 1;
 if (!i2) {
  return;
 }
 i2 = i1 + 320 | 0;
 i3 = i1 + 308 | 0;
 i4 = i1 + 312 | 0;
 L4 : while (1) {
  i5 = HEAP32[i3 >> 2] | 0;
  i6 = HEAP32[i4 >> 2] | 0;
  i7 = i5 + (i6 << 3) | 0;
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   i8 = 13;
   break;
  }
  L7 : do {
   if ((i6 | 0) == 0) {
    i9 = i5;
   } else {
    i10 = i5;
    while (1) {
     i11 = HEAP32[i10 >> 2] | 0;
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      i9 = i10;
      break L7;
     }
     i11 = i10 + 8 | 0;
     if ((i11 | 0) == (i7 | 0)) {
      i8 = 10;
      break L4;
     } else {
      i10 = i11;
     }
    }
   }
  } while (0);
  if ((i9 | 0) == (i7 | 0)) {
   i8 = 11;
   break;
  }
  __ZN7WebCore11MemoryCache5evictEPNS_14CachedResourceE(i1, HEAP32[i9 + 4 >> 2] | 0);
 }
 if ((i8 | 0) == 10) {
  return;
 } else if ((i8 | 0) == 13) {
  return;
 } else if ((i8 | 0) == 11) {
  return;
 }
}
function __ZN7WebCore11MemoryCache3addEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = i2;
 if ((HEAP8[i1 | 0] & 1) != 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore14CachedResourceEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_RS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i5, i1 + 308 | 0, __ZNK7WebCore19ResourceRequestBase3urlEv(i2 + 48 | 0) | 0, i4);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] = i2;
 }
 i5 = i2 + 588 | 0;
 HEAP8[i5] = HEAP8[i5] | 16;
 __ZN7WebCore11MemoryCache16resourceAccessedEPNS_14CachedResourceE(i1, i2);
 i6 = 1;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN7WebCore11MemoryCache33crossThreadRemoveRequestFromCacheEPNS_22ScriptExecutionContextEN3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i1 | 0;
 i4 = i1 + 8 | 0;
 i5 = i4 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i5 >> 2] = i2;
 __ZN7WebCore19ResourceRequestBase5adoptEN3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEE(i3, i4);
 i4 = i3 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore30CrossThreadResourceRequestDataD2Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN7WebCore11MemoryCache26removeRequestFromCacheImplEPNS_22ScriptExecutionContextERKNS_15ResourceRequestE(0, i3);
 if ((i3 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 __ZN7WebCore15ResourceRequestD2Ev(i3);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i1;
 return;
}
function __ZN7WebCore11MemoryCache17removeFromLRUListEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if ((HEAP32[i2 + 576 >> 2] | 0) == 0) {
  return;
 }
 i3 = __ZN7WebCore11MemoryCache10lruListForEPNS_14CachedResourceE(i1, i2) | 0;
 i1 = i2 + 592 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i5 = i2 + 596 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = (i4 | 0) == 0;
 i8 = (i6 | 0) == 0;
 do {
  if (i7 & i8) {
   if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
    break;
   }
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if (i7) {
   i5 = i3 + 4 | 0;
   if ((HEAP32[i5 >> 2] | 0) != (i2 | 0)) {
    break;
   }
   HEAP32[i5 >> 2] = i6;
  } else {
   HEAP32[i4 + 596 >> 2] = i6;
  }
 } while (0);
 if (!i8) {
  HEAP32[i6 + 592 >> 2] = i4;
  return;
 }
 i6 = i3 | 0;
 if ((HEAP32[i6 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 HEAP32[i6 >> 2] = i4;
 return;
}
function __ZN7WebCore11MemoryCache34removeFromLiveDecodedResourcesListEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i2 + 588 | 0;
 i4 = HEAP8[i3] | 0;
 if ((i4 & 4) == 0) {
  return;
 }
 HEAP8[i3] = i4 & -5;
 i4 = i2 + 600 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i5 = i2 + 604 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = (i3 | 0) == 0;
 i8 = (i6 | 0) == 0;
 do {
  if (i7 & i8) {
   if ((HEAP32[i1 + 300 >> 2] | 0) == (i2 | 0)) {
    break;
   }
   return;
  }
 } while (0);
 HEAP32[i4 >> 2] = 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if (i7) {
   i5 = i1 + 304 | 0;
   if ((HEAP32[i5 >> 2] | 0) != (i2 | 0)) {
    break;
   }
   HEAP32[i5 >> 2] = i6;
  } else {
   HEAP32[i3 + 604 >> 2] = i6;
  }
 } while (0);
 if (!i8) {
  HEAP32[i6 + 600 >> 2] = i3;
  return;
 }
 i6 = i1 + 300 | 0;
 if ((HEAP32[i6 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 HEAP32[i6 >> 2] = i3;
 return;
}
function __ZN7WebCore11MemoryCache18pruneLiveResourcesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if ((HEAP8[i1 + 1 | 0] & 1) == 0) {
  return;
 }
 do {
  if (i2) {
   i3 = 0;
  } else {
   i4 = HEAP32[i1 + 4 >> 2] | 0;
   i5 = HEAP32[i1 + 24 >> 2] | 0;
   i6 = i4 - (i4 >>> 0 < i5 >>> 0 ? i4 : i5) | 0;
   i7 = HEAP32[i1 + 8 >> 2] | 0;
   i8 = i6 >>> 0 < i7 >>> 0 ? i7 : i6;
   i6 = HEAP32[i1 + 12 >> 2] | 0;
   i7 = i6 >>> 0 < i8 >>> 0 ? i6 : i8;
   i8 = i4 - i7 | 0;
   if ((i4 | 0) == (i7 | 0)) {
    i3 = 0;
    break;
   }
   if (i5 >>> 0 > i8 >>> 0) {
    i3 = i8;
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore11MemoryCache24pruneLiveResourcesToSizeEjb(i1, ~~(+(i3 >>> 0 >>> 0) * +.949999988079071), i2);
 return;
}
function __ZN7WebCore11MemoryCache17pruneToPercentageEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 1 | 0;
 i4 = HEAP8[i3] | 0;
 do {
  if ((i4 & 1) == 0) {
   i5 = i4;
  } else {
   if (d2 < +0 | d2 > +.949999988079071) {
    i5 = i4;
    break;
   }
   __ZN7WebCore11MemoryCache24pruneDeadResourcesToSizeEj(i1, ~~(+(((HEAP32[i1 + 28 >> 2] | 0) + (HEAP32[i1 + 24 >> 2] | 0) | 0) >>> 0 >>> 0) * d2));
   i5 = HEAP8[i3] | 0;
  }
 } while (0);
 if ((i5 & 1) == 0) {
  return;
 }
 if (d2 < +0 | d2 > +.949999988079071) {
  return;
 }
 __ZN7WebCore11MemoryCache24pruneLiveResourcesToSizeEjb(i1, ~~(+(((HEAP32[i1 + 28 >> 2] | 0) + (HEAP32[i1 + 24 >> 2] | 0) | 0) >>> 0 >>> 0) * d2), 0);
 return;
}
function __ZN7WebCore11memoryCacheEv() {
 var i1 = 0, i2 = 0, i3 = 0;
 if (HEAP8[H_BASE + 48 | 0] | 0) {
  i1 = HEAP32[H_BASE + 56 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(328) | 0;
  i3 = i2;
  HEAP8[i2] = 0;
  HEAP8[i2 + 1 | 0] = 1;
  HEAP8[i2 + 2 | 0] = 0;
  HEAP32[i2 + 4 >> 2] = 8388608;
  HEAP32[i2 + 8 >> 2] = 0;
  HEAP32[i2 + 12 >> 2] = 8388608;
  _memset(i2 + 16 | 0, 0, 16) | 0;
  HEAP32[i2 + 32 >> 2] = i2 + 44;
  HEAP32[i2 + 36 >> 2] = 32;
  HEAP32[i2 + 40 >> 2] = 0;
  _memset(i2 + 300 | 0, 0, 28) | 0;
  HEAP32[H_BASE + 56 >> 2] = i3;
  HEAP8[H_BASE + 48 | 0] = 1;
  i1 = i3;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore16CrossThreadTask1IN3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEES4_E11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 i6 = i4 | 0;
 i7 = i1 + 8 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i1;
 FUNCTION_TABLE_vii[i5 & 7](i2, i4);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore30CrossThreadResourceRequestDataD2Ev(i4);
 __ZN3WTF8fastFreeEPv(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11MemoryCache18pruneDeadResourcesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP8[i1 + 1 | 0] & 1) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 i4 = i2 - (i2 >>> 0 < i3 >>> 0 ? i2 : i3) | 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i2 = i4 >>> 0 < i3 >>> 0 ? i3 : i4;
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i3 = i4 >>> 0 < i2 >>> 0 ? i4 : i2;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP32[i1 + 28 >> 2] | 0) >>> 0 > i3 >>> 0) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore11MemoryCache24pruneDeadResourcesToSizeEj(i1, ~~(+(i3 >>> 0 >>> 0) * +.949999988079071));
 return;
}
function __ZN7WebCore11MemoryCache27removeFromLiveResourcesSizeEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i2 + 568 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 572 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = __ZNK7WebCore14CachedResource12overheadSizeEv(i2) | 0;
 i8 = i1 + 24 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) - (i6 + i4 + i7);
 i7 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0;
 i3 = i7 + (__ZNK7WebCore14CachedResource12overheadSizeEv(i2) | 0) | 0;
 i2 = i1 + 28 | 0;
 HEAP32[i2 >> 2] = i3 + (HEAP32[i2 >> 2] | 0);
 return;
}
function __ZN7WebCore11MemoryCache22addToLiveResourcesSizeEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i2 + 568 | 0;
 i4 = i2 + 572 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0;
 i6 = i5 + (__ZNK7WebCore14CachedResource12overheadSizeEv(i2) | 0) | 0;
 i5 = i1 + 24 | 0;
 HEAP32[i5 >> 2] = i6 + (HEAP32[i5 >> 2] | 0);
 i5 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i4 = __ZNK7WebCore14CachedResource12overheadSizeEv(i2) | 0;
 i2 = i1 + 28 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - (i3 + i5 + i4);
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
function __ZN7WebCore11MemoryCache14resourceForURLERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i4 = i3 | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i4 | 0, i2, 0);
 _memset(i4 + 160 | 0, 0, 19) | 0;
 HEAP32[i4 + 180 >> 2] = 15;
 i2 = __ZN7WebCore11MemoryCache18resourceForRequestERKNS_15ResourceRequestE(i1, i4) | 0;
 __ZN7WebCore15ResourceRequestD2Ev(i4);
 STACKTOP = i3;
 return i2 | 0;
}
function __ZN7WebCore11MemoryCache15insertInLRUListEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = __ZN7WebCore11MemoryCache10lruListForEPNS_14CachedResourceE(i1, i2) | 0;
 i1 = i3 | 0;
 i4 = i2 + 592 | 0;
 HEAP32[i4 >> 2] = HEAP32[i1 >> 2];
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i5 + 596 >> 2] = i2;
 }
 HEAP32[i1 >> 2] = i2;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  return;
 }
 HEAP32[i3 + 4 >> 2] = i2;
 return;
}
function __ZN7WebCore11MemoryCache32insertInLiveDecodedResourcesListEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i2 + 588 | 0;
 HEAP8[i3] = HEAP8[i3] | 4;
 i3 = i1 + 300 | 0;
 i4 = i2 + 600 | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i5 + 604 >> 2] = i2;
 }
 HEAP32[i3 >> 2] = i2;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  return;
 }
 HEAP32[i1 + 304 >> 2] = i2;
 return;
}
function __ZN7WebCore11MemoryCache18removeUrlFromCacheEPNS_22ScriptExecutionContextERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i4 = i3 | 0;
 __ZN7WebCore15ResourceRequestC2ERKN3WTF6StringE(i4, i2);
 __ZN7WebCore11MemoryCache22removeRequestFromCacheEPNS_22ScriptExecutionContextERKNS_15ResourceRequestE(i1, i4);
 __ZN7WebCore15ResourceRequestD2Ev(i4);
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
function __ZN7WebCore16CrossThreadTask1IN3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEES4_ED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 24;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore30CrossThreadResourceRequestDataD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore11MemoryCacheC2Ev(i1) {
 i1 = i1 | 0;
 HEAP8[i1 | 0] = 0;
 HEAP8[i1 + 1 | 0] = 1;
 HEAP8[i1 + 2 | 0] = 0;
 HEAP32[i1 + 4 >> 2] = 8388608;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 8388608;
 _memset(i1 + 16 | 0, 0, 16) | 0;
 HEAP32[i1 + 32 >> 2] = i1 + 44;
 HEAP32[i1 + 36 >> 2] = 32;
 HEAP32[i1 + 40 >> 2] = 0;
 _memset(i1 + 300 | 0, 0, 28) | 0;
 return;
}
function __ZN7WebCore11MemoryCacheC1Ev(i1) {
 i1 = i1 | 0;
 HEAP8[i1 | 0] = 0;
 HEAP8[i1 + 1 | 0] = 1;
 HEAP8[i1 + 2 | 0] = 0;
 HEAP32[i1 + 4 >> 2] = 8388608;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 8388608;
 _memset(i1 + 16 | 0, 0, 16) | 0;
 HEAP32[i1 + 32 >> 2] = i1 + 44;
 HEAP32[i1 + 36 >> 2] = 32;
 HEAP32[i1 + 40 >> 2] = 0;
 _memset(i1 + 300 | 0, 0, 28) | 0;
 return;
}
function __ZN7WebCore16CrossThreadTask1IN3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEES4_ED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 24;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore30CrossThreadResourceRequestDataD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZNK7WebCore11MemoryCache12liveCapacityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 i4 = i2 - (i2 >>> 0 < i3 >>> 0 ? i2 : i3) | 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i5 = i4 >>> 0 < i3 >>> 0 ? i3 : i4;
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 return i2 - (i4 >>> 0 < i5 >>> 0 ? i4 : i5) | 0;
}
function __ZN7WebCore11MemoryCache30pruneLiveResourcesToPercentageEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 if ((HEAP8[i1 + 1 | 0] & 1) == 0) {
  return;
 }
 if (d2 < +0 | d2 > +.949999988079071) {
  return;
 }
 __ZN7WebCore11MemoryCache24pruneLiveResourcesToSizeEjb(i1, ~~(+(((HEAP32[i1 + 28 >> 2] | 0) + (HEAP32[i1 + 24 >> 2] | 0) | 0) >>> 0 >>> 0) * d2), 0);
 return;
}
function __ZN7WebCore11MemoryCache30pruneDeadResourcesToPercentageEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 if ((HEAP8[i1 + 1 | 0] & 1) == 0) {
  return;
 }
 if (d2 < +0 | d2 > +.949999988079071) {
  return;
 }
 __ZN7WebCore11MemoryCache24pruneDeadResourcesToSizeEj(i1, ~~(+(((HEAP32[i1 + 28 >> 2] | 0) + (HEAP32[i1 + 24 >> 2] | 0) | 0) >>> 0 >>> 0) * d2));
 return;
}
function __ZNK7WebCore11MemoryCache12deadCapacityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 i4 = i2 - (i2 >>> 0 < i3 >>> 0 ? i2 : i3) | 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i2 = i4 >>> 0 < i3 >>> 0 ? i3 : i4;
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 return (i4 >>> 0 < i2 >>> 0 ? i4 : i2) | 0;
}
function __ZN7WebCore11MemoryCache10adjustSizeEbi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if (i2) {
  i2 = i1 + 24 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + i3;
  return;
 } else {
  i2 = i1 + 28 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + i3;
  return;
 }
}
function __ZN7WebCore11MemoryCache13setCapacitiesEjjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 HEAP32[i1 + 8 >> 2] = i2;
 HEAP32[i1 + 12 >> 2] = i3;
 HEAP32[i1 + 4 >> 2] = i4;
 __ZN7WebCore11MemoryCache5pruneEv(i1);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function runPostSets() {
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 2;
}
function __ZN7WebCore11MemoryCache18revalidationFailedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14CachedResource25clearResourceToRevalidateEv(i2);
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
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore11MemoryCache21makeResourcePurgeableEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
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
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function __ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
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
function b1(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(1);
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
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore16CrossThreadTask1IN3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEES4_ED1Ev,b0,__ZN7WebCore16CrossThreadTask1IN3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEES4_ED0Ev,b0,__ZN7WebCore11MemoryCacheC2Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore11MemoryCache33crossThreadRemoveRequestFromCacheEPNS_22ScriptExecutionContextEN3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEE,b1,__ZN7WebCore16CrossThreadTask1IN3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEES4_E11performTaskEPNS_22ScriptExecutionContextE,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9FrameView22sCurrentPaintTimeStampE": __ZN7WebCore9FrameView22sCurrentPaintTimeStampE, "__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE": __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore11MemoryCache13setCapacitiesEjjj","__ZN7WebCore11MemoryCache33crossThreadRemoveRequestFromCacheEPNS_22ScriptExecutionContextEN3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEE","__ZN7WebCore11MemoryCache5evictEPNS_14CachedResourceE","__ZN7WebCore16CrossThreadTask1IN3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEES4_ED1Ev","__ZN7WebCore11MemoryCache16resourceAccessedEPNS_14CachedResourceE","__ZN3WTF6VectorIN7WebCore11MemoryCache7LRUListELj32ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore11MemoryCache13getStatisticsEv","__ZN3WTF6VectorINSt3__14pairINS_6StringES3_EELj0ENS_15CrashOnOverflowEED2Ev","_strlen","__ZN7WebCore11MemoryCache11setDisabledEb","__ZN7WebCore16CrossThreadTask1IN3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEES4_E11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore11MemoryCache22addToLiveResourcesSizeEPNS_14CachedResourceE","__ZN7WebCore11MemoryCache21revalidationSucceededEPNS_14CachedResourceERKNS_16ResourceResponseE","__ZN7WebCore11MemoryCache17pruneToPercentageEf","__ZNK7WebCore11MemoryCache12liveCapacityEv","__ZN7WebCore11memoryCacheEv","__ZN7WebCore11MemoryCache10adjustSizeEbi","__ZN7WebCore11MemoryCache32insertInLiveDecodedResourcesListEPNS_14CachedResourceE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore14CachedResourceEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_","__ZN7WebCore30CrossThreadResourceRequestDataD2Ev","__ZN7WebCore18SecurityOriginHash4hashEPNS_14SecurityOriginE","__ZN7WebCore11MemoryCache18pruneDeadResourcesEv","__ZN7WebCore11MemoryCache24pruneDeadResourcesToSizeEj","__ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE","_memset","__ZN7WebCore11MemoryCache34removeFromLiveDecodedResourcesListEPNS_14CachedResourceE","__ZN7WebCore16CrossThreadTask1IN3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEES4_ED0Ev","__ZN7WebCore15ResourceRequestD2Ev","__ZN7WebCore15ResourceRequestC2ERKN3WTF6StringE","__ZN7WebCore11MemoryCache18resourceForRequestERKNS_15ResourceRequestE","__ZN7WebCore14SecurityOriginD2Ev","__ZN7WebCore11MemoryCache3addEPNS_14CachedResourceE","__ZNK7WebCore11MemoryCache12deadCapacityEv","__ZN7WebCore11MemoryCache21makeResourcePurgeableEPNS_14CachedResourceE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore11MemoryCache14evictResourcesEv","__ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv","__ZN7WebCore11MemoryCache15insertInLRUListEPNS_14CachedResourceE","__ZN7WebCore11MemoryCache18removeUrlFromCacheEPNS_22ScriptExecutionContextERKN3WTF6StringE","__ZN7WebCore11MemoryCache30pruneDeadResourcesToPercentageEf","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore14SecurityOriginEEES4_NS_17IdentityExtractorENS2_18SecurityOriginHashENS_10HashTraitsIS4_EES8_E6rehashEiPS4_","__ZN7WebCore11MemoryCache25removeResourcesWithOriginEPNS_14SecurityOriginE","__ZN7WebCore11MemoryCache5pruneEv","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore14SecurityOriginEEES4_NS_17IdentityExtractorENS2_18SecurityOriginHashENS_10HashTraitsIS4_EES8_E16lookupForWritingINS_22IdentityHashTranslatorIS6_EES4_EENSt3__14pairIPS4_bEERKT0_","__ZN7WebCore11MemoryCache26removeRequestFromCacheImplEPNS_22ScriptExecutionContextERKNS_15ResourceRequestE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore14SecurityOriginEEES4_NS_17IdentityExtractorENS2_18SecurityOriginHashENS_10HashTraitsIS4_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore19ResourceRequestBaseD2Ev","__ZN7WebCore11MemoryCache24pruneLiveResourcesToSizeEjb","__ZN7WebCore11MemoryCache32removeFragmentIdentifierIfNeededERKNS_3URLE","__ZN7WebCore11MemoryCache19getOriginsWithCacheERN3WTF7HashSetINS1_6RefPtrINS_14SecurityOriginEEENS_18SecurityOriginHashENS1_10HashTraitsIS5_EEEE","__ZN7WebCore11MemoryCache13TypeStatistic11addResourceEPNS_14CachedResourceE","__ZN7WebCore11MemoryCache27removeFromLiveResourcesSizeEPNS_14CachedResourceE","__ZN7WebCore11MemoryCache22removeRequestFromCacheEPNS_22ScriptExecutionContextERKNS_15ResourceRequestE","__ZN7WebCore34CrossThreadResourceRequestDataBaseD2Ev","__ZN7WebCore11MemoryCache18revalidationFailedEPNS_14CachedResourceE","_memcpy","__ZN7WebCore11MemoryCache30pruneLiveResourcesToPercentageEf","__ZN7WebCore11MemoryCache14resourceForURLERKNS_3URLE","__ZN7WebCore11MemoryCache10lruListForEPNS_14CachedResourceE","__ZN7WebCore11MemoryCache18pruneLiveResourcesEb","__ZN7WebCore11MemoryCacheC2Ev","__ZN7WebCore11MemoryCache17removeFromLRUListEPNS_14CachedResourceE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore14CachedResourceEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_RS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_"]

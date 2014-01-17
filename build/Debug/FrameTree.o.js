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
H_BASE = parentModule["_malloc"](88 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 88;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore9FrameTreeD1Ev;
/* memory initializer */ allocate([95,112,97,114,101,110,116,0,95,116,111,112,0,0,0,0,95,99,117,114,114,101,110,116,0,0,0,0,0,0,0,0,95,115,101,108,102,0,0,0,45,45,62,45,45,62,0,0,47,60,33,45,45,102,114,97,109,101,0,0,0,0,0,0,95,98,108,97,110,107,0,0,60,33,45,45,102,114,97,109,101,80,97,116,104,32,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function __ZNK7WebCore9FrameTree15uniqueChildNameERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 88 | 0;
 i8 = i4 + 96 | 0;
 i9 = i4 + 120 | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 L1 : do {
  if ((i3 | 0) != 0) {
   if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
    break;
   }
   i11 = i2 + 24 | 0;
   while (1) {
    i12 = HEAP32[i11 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    if ((HEAP32[i12 + 52 >> 2] | 0) == (i3 | 0)) {
     break L1;
    } else {
     i11 = i12 + 56 | 0;
    }
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i3, H_BASE + 72 | 0) | 0) {
    break;
   }
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i1 >> 2] = i11;
   if ((i11 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i12 = i11 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i10 = i6 + 12 | 0;
 i3 = i6 | 0;
 HEAP32[i3 >> 2] = i10;
 i12 = i6 + 4 | 0;
 HEAP32[i12 >> 2] = 16;
 i11 = i6 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i6;
 L14 : do {
  if ((i6 | 0) != 0) {
   i13 = i7;
   i14 = i6;
   i15 = 0;
   L16 : while (1) {
    i16 = HEAP32[i14 + 52 >> 2] | 0;
    if ((i16 | 0) == 0) {
     i17 = i15;
    } else {
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i16, H_BASE + 80 | 0, 14, 1) | 0) {
      break L14;
     }
     i17 = HEAP32[i11 >> 2] | 0;
    }
    if ((i17 | 0) == (HEAP32[i12 >> 2] | 0)) {
     i16 = i17 + 1 | 0;
     i18 = HEAP32[i3 >> 2] | 0;
     do {
      if (i18 >>> 0 > i7 >>> 0) {
       i19 = 18;
      } else {
       if ((i18 + (i17 << 2) | 0) >>> 0 <= i7 >>> 0) {
        i19 = 18;
        break;
       }
       i20 = i13 - i18 >> 2;
       i21 = i16 + (i17 >>> 2) | 0;
       i22 = i21 >>> 0 > 16 >>> 0 ? i21 : 16;
       i21 = i22 >>> 0 > i16 >>> 0 ? i22 : i16;
       do {
        if (i17 >>> 0 < i21 >>> 0) {
         if (i21 >>> 0 > 16 >>> 0) {
          if (i21 >>> 0 > 1073741823 >>> 0) {
           i19 = 32;
           break L16;
          }
          i22 = __ZN3WTF18fastMallocGoodSizeEj(i21 << 2) | 0;
          HEAP32[i12 >> 2] = i22 >>> 2;
          i23 = __ZN3WTF10fastMallocEj(i22) | 0;
          HEAP32[i3 >> 2] = i23;
          i24 = i23;
         } else {
          HEAP32[i3 >> 2] = i10;
          HEAP32[i12 >> 2] = 16;
          i24 = i10;
         }
         i23 = i18;
         _memcpy(i24 | 0, i23 | 0, i17 << 2) | 0;
         if ((i10 | 0) == (i18 | 0) | (i18 | 0) == 0) {
          break;
         }
         if ((HEAP32[i3 >> 2] | 0) == (i18 | 0)) {
          HEAP32[i3 >> 2] = 0;
          HEAP32[i12 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i23);
        }
       } while (0);
       i21 = HEAP32[i3 >> 2] | 0;
       i25 = i21 + (i20 << 2) | 0;
       i26 = i21;
      }
     } while (0);
     if ((i19 | 0) == 18) {
      i19 = 0;
      i21 = i16 + (i17 >>> 2) | 0;
      i23 = i21 >>> 0 > 16 >>> 0 ? i21 : 16;
      i21 = i23 >>> 0 > i16 >>> 0 ? i23 : i16;
      do {
       if (i17 >>> 0 < i21 >>> 0) {
        if (i21 >>> 0 > 16 >>> 0) {
         if (i21 >>> 0 > 1073741823 >>> 0) {
          i19 = 21;
          break L16;
         }
         i23 = __ZN3WTF18fastMallocGoodSizeEj(i21 << 2) | 0;
         HEAP32[i12 >> 2] = i23 >>> 2;
         i22 = __ZN3WTF10fastMallocEj(i23) | 0;
         HEAP32[i3 >> 2] = i22;
         i27 = i22;
        } else {
         HEAP32[i3 >> 2] = i10;
         HEAP32[i12 >> 2] = 16;
         i27 = i10;
        }
        i22 = i18;
        _memcpy(i27 | 0, i22 | 0, i17 << 2) | 0;
        if ((i10 | 0) == (i18 | 0) | (i18 | 0) == 0) {
         break;
        }
        if ((HEAP32[i3 >> 2] | 0) == (i18 | 0)) {
         HEAP32[i3 >> 2] = 0;
         HEAP32[i12 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i22);
       }
      } while (0);
      i25 = i7;
      i26 = HEAP32[i3 >> 2] | 0;
     }
     HEAP32[i26 + (HEAP32[i11 >> 2] << 2) >> 2] = HEAP32[i25 >> 2];
     i28 = HEAP32[i11 >> 2] | 0;
    } else {
     HEAP32[(HEAP32[i3 >> 2] | 0) + (i17 << 2) >> 2] = HEAP32[i7 >> 2];
     i28 = HEAP32[i11 >> 2] | 0;
    }
    i15 = i28 + 1 | 0;
    HEAP32[i11 >> 2] = i15;
    i14 = HEAP32[(HEAP32[i7 >> 2] | 0) + 44 >> 2] | 0;
    HEAP32[i7 >> 2] = i14;
    if ((i14 | 0) == 0) {
     break L14;
    }
   }
   if ((i19 | 0) == 21) {
    _WTFCrash();
   } else if ((i19 | 0) == 32) {
    _WTFCrash();
   }
  }
 } while (0);
 i28 = i8 | 0;
 HEAP32[i28 >> 2] = 0;
 i17 = i8 + 4 | 0;
 HEAP32[i17 >> 2] = 0;
 i25 = i8 + 8 | 0;
 HEAP32[i25 >> 2] = 0;
 i26 = i8 + 12 | 0;
 HEAP8[i26] = 1;
 HEAP32[i8 + 16 >> 2] = 0;
 i27 = i8 + 20 | 0;
 HEAP32[i27 >> 2] = 0;
 __ZN3WTF13StringBuilder6appendEPKhj(i8, H_BASE + 80 | 0, 14);
 i24 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i6 = i24 + 52 | 0;
   i14 = HEAP32[i6 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i29 = -17;
   } else {
    i29 = (HEAP32[i14 + 4 >> 2] | 0) - 17 | 0;
   }
   __ZNK3WTF6String9substringEjj(i9, i6 | 0, 14, i29);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i8, i9);
   i6 = HEAP32[i9 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i14 = i6 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i11 >> 2] | 0;
 i29 = i9 - 1 | 0;
 L70 : do {
  if ((i29 | 0) > -1) {
   i24 = i8 + 20 | 0;
   i15 = i29;
   i14 = i9;
   while (1) {
    if (i14 >>> 0 <= i15 >>> 0) {
     break;
    }
    HEAP32[i7 >> 2] = HEAP32[(HEAP32[i3 >> 2] | 0) + (i15 << 2) >> 2];
    HEAP8[i5] = 47;
    i6 = HEAP32[i25 >> 2] | 0;
    do {
     if ((i6 | 0) == 0) {
      i19 = 59;
     } else {
      i13 = HEAP32[i28 >> 2] | 0;
      if (i13 >>> 0 >= (HEAP32[i6 + 4 >> 2] | 0) >>> 0) {
       i19 = 59;
       break;
      }
      if ((HEAP32[i17 >> 2] | 0) != 0) {
       i19 = 59;
       break;
      }
      i18 = (HEAP8[i26] & 1) == 0;
      HEAP32[i28 >> 2] = i13 + 1;
      if (i18) {
       HEAP16[(HEAP32[i24 >> 2] | 0) + (i13 << 1) >> 1] = 47;
       break;
      } else {
       HEAP8[(HEAP32[i27 >> 2] | 0) + i13 | 0] = 47;
       break;
      }
     }
    } while (0);
    if ((i19 | 0) == 59) {
     i19 = 0;
     __ZN3WTF13StringBuilder6appendEPKhj(i8, i5, 1);
    }
    __ZN3WTF13StringBuilder6appendERKNS_6StringE(i8, (HEAP32[i7 >> 2] | 0) + 52 | 0);
    i6 = i15 - 1 | 0;
    if ((i6 | 0) <= -1) {
     break L70;
    }
    i15 = i6;
    i14 = HEAP32[i11 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 __ZN3WTF13StringBuilder6appendEPKhj(i8, H_BASE + 56 | 0, 10);
 i7 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i30 = 0;
 } else {
  i2 = 0;
  i5 = i7;
  while (1) {
   i7 = i2 + 1 | 0;
   i19 = HEAP32[i5 + 56 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i30 = i7;
    break;
   } else {
    i2 = i7;
    i5 = i19;
   }
  }
 }
 __ZN3WTF13StringBuilder12appendNumberEj(i8, i30);
 __ZN3WTF13StringBuilder6appendEPKhj(i8, H_BASE + 48 | 0, 6);
 __ZNK3WTF13StringBuilder14toAtomicStringEv(i1, i8);
 i8 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i25 = i8 | 0;
   i1 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i25 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i17 = i8 | 0;
   i1 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i17 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i11 >> 2] | 0) != 0) {
  HEAP32[i11 >> 2] = 0;
 }
 i11 = HEAP32[i3 >> 2] | 0;
 if ((i10 | 0) == (i11 | 0) | (i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i11);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9FrameTree4findERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = i2 | 0;
 do {
  if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 40 | 0) | 0)) {
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 24 | 0) | 0) {
    break;
   }
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i2, H_BASE + 16 | 0) | 0) {
    i2 = HEAP32[i1 >> 2] | 0;
    if ((i2 | 0) == 0) {
     i4 = 0;
     return i4 | 0;
    } else {
     i5 = i2;
    }
    while (1) {
     i2 = HEAP32[i5 + 44 >> 2] | 0;
     if ((i2 | 0) == 0) {
      i4 = i5;
      break;
     } else {
      i5 = i2;
     }
    }
    return i4 | 0;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 8 | 0) | 0) {
    i2 = HEAP32[i1 + 4 >> 2] | 0;
    if ((i2 | 0) != 0) {
     i4 = i2;
     return i4 | 0;
    }
    i4 = HEAP32[i1 >> 2] | 0;
    return i4 | 0;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 72 | 0) | 0) {
    i4 = 0;
    return i4 | 0;
   }
   i2 = HEAP32[i1 >> 2] | 0;
   L24 : do {
    if ((i2 | 0) == 0) {
     i6 = 0;
    } else {
     i7 = HEAP32[i3 >> 2] | 0;
     i8 = i2;
     while (1) {
      if ((HEAP32[i8 + 52 >> 2] | 0) == (i7 | 0)) {
       i4 = i8;
       break;
      }
      i9 = HEAP32[i8 + 64 >> 2] | 0;
      if ((i9 | 0) != 0) {
       i8 = i9;
       continue;
      }
      i9 = HEAP32[i8 + 40 >> 2] | 0;
      if ((i9 | 0) == (i2 | 0)) {
       i6 = i2;
       break L24;
      }
      i10 = HEAP32[i8 + 56 >> 2] | 0;
      if ((i10 | 0) == 0) {
       i11 = i9;
      } else {
       i8 = i10;
       continue;
      }
      while (1) {
       i10 = HEAP32[i11 + 44 >> 2] | 0;
       if ((i10 | 0) == (i2 | 0)) {
        i12 = 0;
        i13 = i11;
        break;
       }
       if ((i10 | 0) == 0) {
        i6 = i2;
        break L24;
       }
       i9 = HEAP32[i10 + 56 >> 2] | 0;
       if ((i9 | 0) == 0) {
        i11 = i10;
       } else {
        i12 = i9;
        i13 = i10;
        break;
       }
      }
      i10 = (i13 | 0) == 0 ? 0 : i12;
      if ((i10 | 0) == 0) {
       i6 = i2;
       break L24;
      } else {
       i8 = i10;
      }
     }
     return i4 | 0;
    }
   } while (0);
   i2 = HEAP32[i6 + 28 >> 2] | 0;
   L38 : do {
    if ((i2 | 0) != 0) {
     i8 = HEAP32[i3 >> 2] | 0;
     i7 = i2;
     L40 : while (1) {
      if ((HEAP32[i7 + 52 >> 2] | 0) == (i8 | 0)) {
       i4 = i7;
       break;
      }
      i10 = HEAP32[i7 + 64 >> 2] | 0;
      if ((i10 | 0) != 0) {
       i7 = i10;
       continue;
      }
      i10 = HEAP32[i7 + 40 >> 2] | 0;
      if ((i10 | 0) == 0) {
       break L38;
      }
      i9 = HEAP32[i7 + 56 >> 2] | 0;
      if ((i9 | 0) == 0) {
       i14 = i10;
      } else {
       i7 = i9;
       continue;
      }
      while (1) {
       i9 = HEAP32[i14 + 44 >> 2] | 0;
       if ((i9 | 0) == 0) {
        break L38;
       }
       i10 = HEAP32[i9 + 56 >> 2] | 0;
       if ((i10 | 0) == 0) {
        i14 = i9;
       } else {
        i7 = i10;
        continue L40;
       }
      }
     }
     return i4 | 0;
    }
   } while (0);
   i2 = HEAP32[i6 + 32 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i4 = 0;
    return i4 | 0;
   }
   i7 = i2 + 160 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore4Page9initGroupEv(i2);
    i15 = HEAP32[i7 >> 2] | 0;
   } else {
    i15 = i8;
   }
   i8 = HEAP32[i15 + 24 >> 2] | 0;
   i7 = HEAP32[i15 + 28 >> 2] | 0;
   i10 = i8 + (i7 << 2) | 0;
   if ((HEAP32[i15 + 36 >> 2] | 0) == 0) {
    i4 = 0;
    return i4 | 0;
   }
   L59 : do {
    if ((i7 | 0) == 0) {
     i16 = i8;
    } else {
     i9 = i8;
     while (1) {
      i17 = HEAP32[i9 >> 2] | 0;
      if (!((i17 | 0) == (-1 | 0) | (i17 | 0) == 0)) {
       i16 = i9;
       break L59;
      }
      i17 = i9 + 4 | 0;
      if ((i17 | 0) == (i10 | 0)) {
       i4 = 0;
       break;
      } else {
       i9 = i17;
      }
     }
     return i4 | 0;
    }
   } while (0);
   if ((i16 | 0) == (i10 | 0)) {
    i4 = 0;
    return i4 | 0;
   } else {
    i18 = i16;
   }
   L67 : while (1) {
    i8 = HEAP32[i18 >> 2] | 0;
    L69 : do {
     if ((i8 | 0) != (i2 | 0)) {
      i7 = HEAP32[i8 + 60 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      i9 = HEAP32[i3 >> 2] | 0;
      i17 = i7;
      L72 : while (1) {
       if ((HEAP32[i17 + 52 >> 2] | 0) == (i9 | 0)) {
        i4 = i17;
        i19 = 68;
        break L67;
       }
       i7 = HEAP32[i17 + 64 >> 2] | 0;
       if ((i7 | 0) != 0) {
        i17 = i7;
        continue;
       }
       i7 = HEAP32[i17 + 40 >> 2] | 0;
       if ((i7 | 0) == 0) {
        break L69;
       }
       i20 = HEAP32[i17 + 56 >> 2] | 0;
       if ((i20 | 0) == 0) {
        i21 = i7;
       } else {
        i17 = i20;
        continue;
       }
       while (1) {
        i20 = HEAP32[i21 + 44 >> 2] | 0;
        if ((i20 | 0) == 0) {
         break L69;
        }
        i7 = HEAP32[i20 + 56 >> 2] | 0;
        if ((i7 | 0) == 0) {
         i21 = i20;
        } else {
         i17 = i7;
         continue L72;
        }
       }
      }
     }
    } while (0);
    i8 = i18 + 4 | 0;
    if ((i8 | 0) == (i10 | 0)) {
     i4 = 0;
     i19 = 59;
     break;
    } else {
     i22 = i8;
    }
    while (1) {
     i8 = HEAP32[i22 >> 2] | 0;
     if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
      break;
     }
     i8 = i22 + 4 | 0;
     if ((i8 | 0) == (i10 | 0)) {
      i4 = 0;
      i19 = 62;
      break L67;
     } else {
      i22 = i8;
     }
    }
    if ((i22 | 0) == (i10 | 0)) {
     i4 = 0;
     i19 = 60;
     break;
    } else {
     i18 = i22;
    }
   }
   if ((i19 | 0) == 59) {
    return i4 | 0;
   } else if ((i19 | 0) == 60) {
    return i4 | 0;
   } else if ((i19 | 0) == 62) {
    return i4 | 0;
   } else if ((i19 | 0) == 68) {
    return i4 | 0;
   }
  }
 } while (0);
 i4 = HEAP32[i1 >> 2] | 0;
 return i4 | 0;
}
function __ZN7WebCore9FrameTree13transferChildEN3WTF10PassRefPtrINS_5FrameEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = i2 + 44 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == (i7 | 0)) {
  i8 = 0;
  return i8 | 0;
 }
 if ((i5 | 0) == 0) {
  i9 = i7;
  i10 = i2;
 } else {
  HEAP32[i4 >> 2] = 0;
  i4 = i5 + 64 | 0;
  i7 = i2 + 60 | 0;
  if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
   i11 = i4;
   i12 = i2;
  } else {
   i4 = (HEAP32[i7 >> 2] | 0) + 56 | 0;
   i11 = i4;
   i12 = HEAP32[i4 >> 2] | 0;
  }
  i4 = i5 + 68 | 0;
  i13 = i2 + 56 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = (HEAP32[i4 >> 2] | 0) == (i2 | 0) ? i4 : i14 + 60 | 0;
  HEAP32[i11 >> 2] = i14;
  HEAP32[i13 >> 2] = i12;
  HEAP32[i15 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i7 >> 2] = 0;
  i7 = HEAP32[i13 >> 2] | 0;
  HEAP32[i13 >> 2] = 0;
  do {
   if ((i7 | 0) != 0) {
    i13 = i7 + 4 | 0;
    i15 = i13 | 0;
    i12 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    if ((i12 | 0) != 0) {
     HEAP32[i15 >> 2] = i12;
     break;
    }
    i12 = i13 - 4 | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 3](i12);
   }
  } while (0);
  HEAP32[i5 + 72 >> 2] = -1;
  i9 = HEAP32[i6 >> 2] | 0;
  i10 = HEAP32[i3 >> 2] | 0;
 }
 HEAP32[i10 + 44 >> 2] = i9;
 i9 = HEAP32[i3 >> 2] | 0;
 __ZN7WebCore9FrameTree7setNameERKN3WTF12AtomicStringE(i9 + 40 | 0, i9 + 48 | 0);
 i9 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 28 | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i9;
 do {
  if ((i10 | 0) == 0) {
   i3 = i1 + 24 | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i9;
   if ((i6 | 0) == 0) {
    break;
   }
   i3 = i6 + 4 | 0;
   i6 = i3 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i6 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
  } else {
   HEAP32[i9 + 60 >> 2] = i10;
   i5 = i10 + 56 | 0;
   i3 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i9;
   if ((i3 | 0) == 0) {
    break;
   }
   i5 = i3 + 4 | 0;
   i3 = i5 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i3 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 3](i6);
  }
 } while (0);
 HEAP32[i1 + 32 >> 2] = -1;
 i8 = 1;
 return i8 | 0;
}
function __ZN7WebCore9FrameTreeD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i3 | 0;
   i7 = i5;
   while (1) {
    HEAP32[i6 >> 2] = 0;
    __ZN7WebCore5Frame7setViewEN3WTF10PassRefPtrINS_9FrameViewEEE(i7, i3);
    i8 = HEAP32[i6 >> 2] | 0;
    do {
     if ((i8 | 0) != 0) {
      i9 = i8 + 4 | 0;
      i10 = i9 | 0;
      i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
      if ((i11 | 0) != 0) {
       HEAP32[i10 >> 2] = i11;
       break;
      }
      i11 = i9 - 4 | 0;
      if ((i11 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 3](i11);
     }
    } while (0);
    i7 = HEAP32[i7 + 56 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break;
    }
   }
   i7 = HEAP32[i4 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i6 = i7 + 4 | 0;
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i7 >> 2] = i8;
    break;
   }
   i8 = i6 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 3](i8);
  }
 } while (0);
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 + 4 | 0;
   i5 = i3 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i5 >> 2] = i8;
    break;
   }
   i8 = i3 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 3](i8);
  }
 } while (0);
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i8 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore9FrameTreeD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i3 | 0;
   i7 = i5;
   while (1) {
    HEAP32[i6 >> 2] = 0;
    __ZN7WebCore5Frame7setViewEN3WTF10PassRefPtrINS_9FrameViewEEE(i7, i3);
    i8 = HEAP32[i6 >> 2] | 0;
    do {
     if ((i8 | 0) != 0) {
      i9 = i8 + 4 | 0;
      i10 = i9 | 0;
      i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
      if ((i11 | 0) != 0) {
       HEAP32[i10 >> 2] = i11;
       break;
      }
      i11 = i9 - 4 | 0;
      if ((i11 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 3](i11);
     }
    } while (0);
    i7 = HEAP32[i7 + 56 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break;
    }
   }
   i7 = HEAP32[i4 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i6 = i7 + 4 | 0;
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i7 >> 2] = i8;
    break;
   }
   i8 = i6 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 3](i8);
  }
 } while (0);
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 + 4 | 0;
   i5 = i3 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i5 >> 2] = i8;
    break;
   }
   i8 = i3 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 3](i8);
  }
 } while (0);
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i8 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  STACKTOP = i2;
  return;
 }
}
function __ZNK3WTF13StringBuilder14toAtomicStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i2 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  i9 = HEAP32[__ZN3WTF9emptyAtomE >> 2] | 0;
  HEAP32[i1 >> 2] = i9;
  if ((i9 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i10 = i9 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
  STACKTOP = i3;
  return;
 }
 if (!(__ZNK3WTF13StringBuilder9canShrinkEv(i2) | 0)) {
  i10 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i10 | 0) == 0) {
   __ZN3WTF12AtomicString3addEPNS_10StringImplEjj(i7, HEAP32[i2 + 8 >> 2] | 0, 0, HEAP32[i8 >> 2] | 0);
   HEAP32[i1 >> 2] = HEAP32[i7 >> 2];
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i10 + 16 >> 2] & 16 | 0) == 0) {
   __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i6, i10);
   i11 = i6 | 0;
  } else {
   i7 = i6 | 0;
   HEAP32[i7 >> 2] = i10;
   i6 = i10 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   i11 = i7;
  }
  HEAP32[i1 >> 2] = HEAP32[i11 >> 2];
  STACKTOP = i3;
  return;
 }
 i11 = HEAP32[i8 >> 2] | 0;
 i8 = (i11 | 0) == 0;
 if ((HEAP8[i2 + 12 | 0] & 1) == 0) {
  do {
   if (i8) {
    i12 = 0;
   } else {
    i7 = HEAP32[i2 + 4 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i12 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 8 >> 2] | 0;
     break;
    } else {
     i12 = HEAP32[i7 + 8 >> 2] | 0;
     break;
    }
   }
  } while (0);
  __ZN3WTF12AtomicString3addEPKtj(i5, i12, i11);
  HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
  STACKTOP = i3;
  return;
 } else {
  do {
   if (i8) {
    i13 = 0;
   } else {
    i5 = HEAP32[i2 + 4 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i13 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 8 >> 2] | 0;
     break;
    } else {
     i13 = HEAP32[i5 + 8 >> 2] | 0;
     break;
    }
   }
  } while (0);
  __ZN3WTF12AtomicString3addEPKhj(i4, i13, i11);
  HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore9FrameTree7setNameERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i1 + 8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i8 = i1 + 4 | 0;
 i7 = i1 + 12 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  i1 = HEAP32[i5 >> 2] | 0;
  if ((i1 | 0) != 0) {
   i5 = i1 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
  }
  i5 = i7 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i1;
  if ((i6 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i1 = i6 | 0;
  i5 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
  if ((i5 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i6);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i1 >> 2] = i5;
   STACKTOP = i3;
   return;
  }
 }
 i5 = i7 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i7 | 0) != 0) {
   i1 = i7 | 0;
   i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i1 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZNK7WebCore9FrameTree15uniqueChildNameERKN3WTF12AtomicStringE(i4, (HEAP32[i8 >> 2] | 0) + 40 | 0, i2);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
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
function __ZN7WebCore9FrameTree19actuallyAppendChildEN3WTF10PassRefPtrINS_5FrameEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 28 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   HEAP32[i5 >> 2] = 0;
   i2 = i1 + 24 | 0;
   i6 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i3;
   if ((i6 | 0) == 0) {
    break;
   }
   i2 = i6 + 4 | 0;
   i6 = i2 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = i2 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 3](i7);
  } else {
   HEAP32[i3 + 60 >> 2] = i4;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   i2 = i4 + 56 | 0;
   i6 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i7;
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i6 + 4 | 0;
   i6 = i7 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i6 >> 2] = i2;
    break;
   }
   i2 = i7 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 3](i2);
  }
 } while (0);
 HEAP32[i1 + 32 >> 2] = -1;
 return;
}
function __ZN7WebCore9FrameTree11appendChildEN3WTF10PassRefPtrINS_5FrameEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i2 | 0;
 HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] = HEAP32[i1 >> 2];
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 28 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 do {
  if ((i4 | 0) == 0) {
   i3 = i1 + 24 | 0;
   i5 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i2;
   if ((i5 | 0) == 0) {
    break;
   }
   i3 = i5 + 4 | 0;
   i5 = i3 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 3](i6);
  } else {
   HEAP32[i2 + 60 >> 2] = i4;
   i6 = i4 + 56 | 0;
   i3 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i2;
   if ((i3 | 0) == 0) {
    break;
   }
   i6 = i3 + 4 | 0;
   i3 = i6 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i3 >> 2] = i5;
    break;
   }
   i5 = i6 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
  }
 } while (0);
 HEAP32[i1 + 32 >> 2] = -1;
 return;
}
function __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  return i4 | 0;
 }
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == (i2 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5;
  return i4 | 0;
 }
 L10 : do {
  if ((i2 | 0) == 0) {
   i5 = i3;
   while (1) {
    i1 = HEAP32[i5 + 44 >> 2] | 0;
    if ((i1 | 0) == 0) {
     i4 = 0;
     break;
    }
    i6 = HEAP32[i1 + 56 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i5 = i1;
    } else {
     i7 = i6;
     i8 = i1;
     break L10;
    }
   }
   return i4 | 0;
  } else {
   i5 = i3;
   while (1) {
    i1 = HEAP32[i5 + 44 >> 2] | 0;
    if ((i1 | 0) == (i2 | 0)) {
     i7 = 0;
     i8 = i5;
     break L10;
    }
    if ((i1 | 0) == 0) {
     i4 = 0;
     break;
    }
    i6 = HEAP32[i1 + 56 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i5 = i1;
    } else {
     i7 = i6;
     i8 = i1;
     break L10;
    }
   }
   return i4 | 0;
  }
 } while (0);
 i4 = (i8 | 0) == 0 ? 0 : i7;
 return i4 | 0;
}
function __ZN7WebCore9FrameTree11removeChildEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i2 + 44 >> 2] = 0;
 i3 = i1 + 24 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  i4 = i3;
 } else {
  i4 = (HEAP32[i2 + 60 >> 2] | 0) + 56 | 0;
 }
 i3 = i1 + 28 | 0;
 i5 = HEAP32[i2 + 56 >> 2] | 0;
 i6 = (HEAP32[i3 >> 2] | 0) == (i2 | 0) ? i3 : i5 + 60 | 0;
 i3 = i4 | 0;
 i4 = i2 + 56 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 HEAP32[i4 >> 2] = i7;
 i7 = i2 + 60 | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i7 | 0) == 0) {
  i8 = i1 + 32 | 0;
  HEAP32[i8 >> 2] = -1;
  return;
 }
 i4 = i7 + 4 | 0;
 i7 = i4 | 0;
 i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i7 >> 2] = i6;
  i8 = i1 + 32 | 0;
  HEAP32[i8 >> 2] = -1;
  return;
 }
 i6 = i4 - 4 | 0;
 if ((i6 | 0) == 0) {
  i8 = i1 + 32 | 0;
  HEAP32[i8 >> 2] = -1;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 3](i6);
 i8 = i1 + 32 | 0;
 HEAP32[i8 >> 2] = -1;
 return;
}
function __ZNK7WebCore9FrameTree16scopedChildCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != -1) {
  i4 = i3;
  return i4 | 0;
 }
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
 i5 = (i3 | 0) == 0 ? 0 : i3 + 44 | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = 0;
  } else {
   i3 = HEAP32[i1 + 24 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i6 = 0;
    break;
   } else {
    i7 = 0;
    i8 = i3;
   }
   while (1) {
    i3 = HEAP32[i8 + 456 >> 2] | 0;
    do {
     if ((i3 | 0) == 0) {
      i9 = 0;
     } else {
      i10 = __ZNK7WebCore8Document12ownerElementEv(i3) | 0;
      if ((i10 | 0) == 0) {
       i9 = 0;
       break;
      }
      i9 = (HEAP32[i10 + 20 >> 2] | 0) == (i5 | 0) | 0;
     }
    } while (0);
    i3 = i9 + i7 | 0;
    i10 = HEAP32[i8 + 56 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i6 = i3;
     break;
    } else {
     i7 = i3;
     i8 = i10;
    }
   }
  }
 } while (0);
 HEAP32[i2 >> 2] = i6;
 i4 = i6;
 return i4 | 0;
}
function __ZNK7WebCore9FrameTree11scopedChildEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
 i4 = (i3 | 0) == 0 ? 0 : i3 + 44 | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 } else {
  i6 = 0;
  i7 = i3;
 }
 L6 : while (1) {
  i3 = HEAP32[i7 + 456 >> 2] | 0;
  do {
   if ((i3 | 0) == 0) {
    i8 = i6;
   } else {
    i1 = __ZNK7WebCore8Document12ownerElementEv(i3) | 0;
    if ((i1 | 0) == 0) {
     i8 = i6;
     break;
    }
    if ((HEAP32[i1 + 20 >> 2] | 0) != (i4 | 0)) {
     i8 = i6;
     break;
    }
    if ((i6 | 0) == (i2 | 0)) {
     i5 = i7;
     i9 = 11;
     break L6;
    }
    i8 = i6 + 1 | 0;
   }
  } while (0);
  i3 = HEAP32[i7 + 56 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i5 = 0;
   i9 = 10;
   break;
  } else {
   i6 = i8;
   i7 = i3;
  }
 }
 if ((i9 | 0) == 10) {
  return i5 | 0;
 } else if ((i9 | 0) == 11) {
  return i5 | 0;
 }
 return 0;
}
function __ZNK7WebCore9FrameTree11scopedChildERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
 i4 = (i3 | 0) == 0 ? 0 : i3 + 44 | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i1 = i2 | 0;
 i2 = i3;
 L7 : while (1) {
  do {
   if ((HEAP32[i2 + 52 >> 2] | 0) == (HEAP32[i1 >> 2] | 0)) {
    i3 = HEAP32[i2 + 456 >> 2] | 0;
    if ((i3 | 0) == 0) {
     break;
    }
    i6 = __ZNK7WebCore8Document12ownerElementEv(i3) | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    if ((HEAP32[i6 + 20 >> 2] | 0) == (i4 | 0)) {
     i5 = i2;
     i7 = 12;
     break L7;
    }
   }
  } while (0);
  i6 = HEAP32[i2 + 56 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i5 = 0;
   i7 = 11;
   break;
  } else {
   i2 = i6;
  }
 }
 if ((i7 | 0) == 11) {
  return i5 | 0;
 } else if ((i7 | 0) == 12) {
  return i5 | 0;
 }
 return 0;
}
function __ZNK7WebCore9FrameTree20traverseNextWithWrapEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  return i4 | 0;
 }
 i3 = HEAP32[i1 >> 2] | 0;
 L4 : do {
  if ((i3 | 0) != 0) {
   i5 = HEAP32[i1 + 16 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i6 = i3;
   } else {
    i4 = i5;
    return i4 | 0;
   }
   while (1) {
    i5 = HEAP32[i6 + 44 >> 2] | 0;
    if ((i5 | 0) == 0) {
     break L4;
    }
    i7 = HEAP32[i5 + 56 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i6 = i5;
    } else {
     i4 = i7;
     break;
    }
   }
   return i4 | 0;
  }
 } while (0);
 if (!i2) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = HEAP32[i3 + 28 >> 2] | 0;
 return i4 | 0;
}
function __ZNK7WebCore9FrameTree24traversePreviousWithWrapEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  i5 = HEAP32[i3 + 40 >> 2] | 0;
  while (1) {
   i3 = HEAP32[i4 + 68 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i6 = i5;
    break;
   } else {
    i4 = i3;
    i5 = i3;
   }
  }
  return i6 | 0;
 }
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) != 0 | i2 ^ 1) {
  i6 = i5;
  return i6 | 0;
 }
 i5 = i1 + 28 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 while (1) {
  i1 = HEAP32[i5 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i6 = i2;
   break;
  } else {
   i5 = i1 + 68 | 0;
   i2 = i1;
  }
 }
 return i6 | 0;
}
function __ZN7WebCore9FrameTree9clearNameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = i1 + 12 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  return;
 } else {
  HEAP32[i3 >> 2] = i4;
  return;
 }
}
function __ZNK7WebCore9FrameTree14isDescendantOfEPKNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 >> 2] | 0;
 if ((HEAP32[i4 + 32 >> 2] | 0) != (HEAP32[i2 + 32 >> 2] | 0) | (i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i5 = i4;
 }
 while (1) {
  if ((i5 | 0) == (i2 | 0)) {
   i3 = 1;
   i6 = 8;
   break;
  }
  i4 = HEAP32[i5 + 44 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i3 = 0;
   i6 = 7;
   break;
  } else {
   i5 = i4;
  }
 }
 if ((i6 | 0) == 7) {
  return i3 | 0;
 } else if ((i6 | 0) == 8) {
  return i3 | 0;
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
function __ZNK7WebCore9FrameTree5childERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i2 | 0;
 i2 = i1 + 24 | 0;
 while (1) {
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i4 = 0;
   i5 = 6;
   break;
  }
  if ((HEAP32[i1 + 52 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
   i4 = i1;
   i5 = 5;
   break;
  } else {
   i2 = i1 + 56 | 0;
  }
 }
 if ((i5 | 0) == 5) {
  return i4 | 0;
 } else if ((i5 | 0) == 6) {
  return i4 | 0;
 }
 return 0;
}
function __ZNK7WebCore9FrameTree5childEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) != 0 & (i3 | 0) != 0) {
  i4 = 0;
  i5 = i3;
 } else {
  i6 = i3;
  return i6 | 0;
 }
 while (1) {
  i3 = i4 + 1 | 0;
  i1 = HEAP32[i5 + 56 >> 2] | 0;
  if ((i3 | 0) != (i2 | 0) & (i1 | 0) != 0) {
   i4 = i3;
   i5 = i1;
  } else {
   i6 = i1;
   break;
  }
 }
 return i6 | 0;
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
function __ZNK7WebCore9FrameTree10childCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = 0;
  i5 = i2;
 }
 while (1) {
  i2 = i4 + 1 | 0;
  i1 = HEAP32[i5 + 56 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = i2;
   break;
  } else {
   i4 = i2;
   i5 = i1;
  }
 }
 return i3 | 0;
}
function __ZNK7WebCore9FrameTree3topEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 while (1) {
  i2 = HEAP32[i4 + 44 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = i4;
   break;
  } else {
   i4 = i2;
  }
 }
 return i3 | 0;
}
function __ZNK7WebCore9FrameTree13deepLastChildEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 while (1) {
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) == 0) {
   break;
  } else {
   i2 = i1 + 68 | 0;
   i3 = i1;
  }
 }
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
function __ZNK7WebCore9FrameTree6parentEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 4 >> 2] | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
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
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iii = [b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore9FrameTreeD2Ev,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN3WTF9emptyAtomE": __ZN3WTF9emptyAtomE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore9FrameTree20traverseNextWithWrapEb","__ZN7WebCore9FrameTree19actuallyAppendChildEN3WTF10PassRefPtrINS_5FrameEEE","__ZNK7WebCore9FrameTree16scopedChildCountEv","__ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE","__ZNK7WebCore9FrameTree11scopedChildERKN3WTF12AtomicStringE","__ZNK7WebCore9FrameTree15uniqueChildNameERKN3WTF12AtomicStringE","__ZNK7WebCore9FrameTree4findERKN3WTF12AtomicStringE","__ZN7WebCore9FrameTree9clearNameEv","_memset","_memcpy","__ZNK7WebCore9FrameTree14isDescendantOfEPKNS_5FrameE","__ZNK7WebCore9FrameTree24traversePreviousWithWrapEb","__ZNK7WebCore9FrameTree10childCountEv","__ZN7WebCore9FrameTreeD2Ev","__ZN7WebCore9FrameTree13transferChildEN3WTF10PassRefPtrINS_5FrameEEE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore9FrameTree11appendChildEN3WTF10PassRefPtrINS_5FrameEEE","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZNK7WebCore9FrameTree13deepLastChildEv","__ZN7WebCore9FrameTree7setNameERKN3WTF12AtomicStringE","__ZNK3WTF13StringBuilder14toAtomicStringEv","__ZNK7WebCore9FrameTree6parentEv","__ZNK7WebCore9FrameTree5childERKN3WTF12AtomicStringE","__ZNK7WebCore9FrameTree5childEj","__ZN7WebCore9FrameTree11removeChildEPNS_5FrameE","__ZNK7WebCore9FrameTree11scopedChildEj","__ZNK7WebCore9FrameTree3topEv"]

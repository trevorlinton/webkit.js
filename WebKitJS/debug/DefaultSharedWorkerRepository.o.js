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
H_BASE = parentModule["_malloc"](232 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 232;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore17SharedWorkerProxyC1ERKN3WTF6StringERKNS_3URLENS1_10PassRefPtrINS_14SecurityOriginEEE;
var __ZN7WebCore24SharedWorkerScriptLoaderC1EN3WTF10PassRefPtrINS_12SharedWorkerEEENS1_10PassOwnPtrINS_18MessagePortChannelEEENS2_INS_17SharedWorkerProxyEEE;
var __ZN7WebCore29DefaultSharedWorkerRepositoryC1Ev;
var __ZN7WebCore29DefaultSharedWorkerRepositoryD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,248,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
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
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var __ZTVN7WebCore16CrossThreadTask4IN3WTF6StringERKS2_iiiiS2_S4_EE=(H_BASE+192)|0;
  var __ZTVN7WebCore17SharedWorkerProxyE=(H_BASE+72)|0;
  var __ZTVN7WebCore24SharedWorkerScriptLoaderE=(H_BASE+8)|0;
  var __ZTVN7WebCore23SharedWorkerConnectTaskE=(H_BASE+40)|0;
  var __ZTVN7WebCore16CrossThreadTask6INS_13MessageSourceES1_NS_12MessageLevelES2_N3WTF6StringERKS4_S4_S6_ijijEE=(H_BASE+160)|0;
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
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiii=env.invoke_viiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore29DefaultSharedWorkerRepository8getProxyERKN3WTF6StringERKNS_3URLE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 56 | 0;
 i9 = i5 + 64 | 0;
 i10 = i5 + 72 | 0;
 __ZNKR3WTF6String12isolatedCopyEv(i8, i4 | 0);
 __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i7, 0, i8);
 __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i6, i7);
 i11 = i6 | 0;
 i6 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i7 = i11 | 0;
   i12 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i7 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i8 = i11 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i8 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i11 = i2 + 24 | 0;
 i12 = i2 + 32 | 0;
 L13 : do {
  if ((HEAP32[i12 >> 2] | 0) != 0) {
   i8 = i11 | 0;
   i7 = i9 | 0;
   i13 = (i6 | 0) == 0;
   i14 = i6 | 0;
   L15 : do {
    if (i13) {
     i15 = 0;
     while (1) {
      i16 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i15 << 2) >> 2] | 0;
      L27 : do {
       if ((HEAP8[i16 + 12 | 0] & 1) == 0) {
        HEAP32[i7 >> 2] = 0;
        i17 = __ZNK7WebCore17SharedWorkerProxy7matchesERKN3WTF6StringENS1_10PassRefPtrINS_14SecurityOriginEEERKNS_3URLE(i16, i3, i9, i4) | 0;
        i18 = HEAP32[i7 >> 2] | 0;
        do {
         if ((i18 | 0) != 0) {
          i19 = i18 | 0;
          if (((tempValue = HEAP32[i19 >> 2] | 0, HEAP32[i19 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
           break;
          }
          __ZN7WebCore14SecurityOriginD2Ev(i18);
          __ZN3WTF8fastFreeEPv(i18);
          if (i17) {
           i20 = i15;
           break L15;
          } else {
           break L27;
          }
         }
        } while (0);
        if (i17) {
         i20 = i15;
         break L15;
        }
       }
      } while (0);
      i15 = i15 + 1 | 0;
      if (i15 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
       break L13;
      }
     }
    } else {
     i15 = 0;
     while (1) {
      i16 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i15 << 2) >> 2] | 0;
      L18 : do {
       if ((HEAP8[i16 + 12 | 0] & 1) == 0) {
        HEAP32[i7 >> 2] = i6;
        tempValue = HEAP32[i14 >> 2] | 0, HEAP32[i14 >> 2] = tempValue + 1, tempValue;
        i18 = __ZNK7WebCore17SharedWorkerProxy7matchesERKN3WTF6StringENS1_10PassRefPtrINS_14SecurityOriginEEERKNS_3URLE(i16, i3, i9, i4) | 0;
        i19 = HEAP32[i7 >> 2] | 0;
        do {
         if ((i19 | 0) != 0) {
          i21 = i19 | 0;
          if (((tempValue = HEAP32[i21 >> 2] | 0, HEAP32[i21 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
           break;
          }
          __ZN7WebCore14SecurityOriginD2Ev(i19);
          __ZN3WTF8fastFreeEPv(i19);
          if (i18) {
           i20 = i15;
           break L15;
          } else {
           break L18;
          }
         }
        } while (0);
        if (i18) {
         i20 = i15;
         break L15;
        }
       }
      } while (0);
      i15 = i15 + 1 | 0;
      if (i15 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
       break L13;
      }
     }
    }
   } while (0);
   if ((HEAP32[i12 >> 2] | 0) >>> 0 <= i20 >>> 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i7 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i20 << 2) >> 2] | 0;
   HEAP32[i1 >> 2] = i7;
   if ((i7 | 0) != 0) {
    i15 = i7 + 4 | 0;
    tempValue = HEAP32[i15 >> 2] | 0, HEAP32[i15 >> 2] = tempValue + 1, tempValue;
   }
   if (i13) {
    STACKTOP = i5;
    return;
   }
   if (((tempValue = HEAP32[i14 >> 2] | 0, HEAP32[i14 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    STACKTOP = i5;
    return;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
   STACKTOP = i5;
   return;
  }
 } while (0);
 i20 = __ZN3WTF10fastMallocEj(120) | 0;
 i9 = i20;
 HEAP32[i20 + 4 >> 2] = 1;
 HEAP32[i20 >> 2] = H_BASE + 80;
 HEAP32[i20 + 8 >> 2] = H_BASE + 124;
 HEAP8[i20 + 12 | 0] = 0;
 __ZNKR3WTF6String12isolatedCopyEv(i20 + 16 | 0, i3);
 __ZNK7WebCore3URL4copyEv(i20 + 20 | 0, i4);
 HEAP32[i20 + 68 >> 2] = 0;
 HEAP32[i20 + 72 >> 2] = i6;
 _memset(i20 + 76 | 0, 0, 20) | 0;
 __ZN3WTF5MutexC1Ev(i20 + 96 | 0);
 i6 = i10 | 0;
 HEAP32[i6 >> 2] = i9;
 i4 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i4 | 0) == (HEAP32[i2 + 28 >> 2] | 0)) {
   i3 = i4 + 1 | 0;
   i15 = i11 | 0;
   i7 = HEAP32[i15 >> 2] | 0;
   do {
    if (i7 >>> 0 > i10 >>> 0) {
     i22 = 32;
    } else {
     if ((i7 + (i4 << 2) | 0) >>> 0 <= i10 >>> 0) {
      i22 = 32;
      break;
     }
     __ZN3WTF6VectorINS_6RefPtrIN7WebCore17SharedWorkerProxyEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i11, i3);
     i16 = HEAP32[i15 >> 2] | 0;
     i23 = i16 + (i10 - i7 >> 2 << 2) | 0;
     i24 = i16;
    }
   } while (0);
   if ((i22 | 0) == 32) {
    __ZN3WTF6VectorINS_6RefPtrIN7WebCore17SharedWorkerProxyEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i11, i3);
    i23 = i10;
    i24 = HEAP32[i15 >> 2] | 0;
   }
   i7 = HEAP32[i23 >> 2] | 0;
   HEAP32[i24 + (HEAP32[i12 >> 2] << 2) >> 2] = i7;
   if ((i7 | 0) == 0) {
    break;
   }
   i14 = i7 + 4 | 0;
   tempValue = HEAP32[i14 >> 2] | 0, HEAP32[i14 >> 2] = tempValue + 1, tempValue;
  } else {
   HEAP32[(HEAP32[i11 >> 2] | 0) + (i4 << 2) >> 2] = i9;
   if ((i20 | 0) == 0) {
    break;
   }
   i14 = i20 + 4 | 0;
   tempValue = HEAP32[i14 >> 2] | 0, HEAP32[i14 >> 2] = tempValue + 1, tempValue;
  }
 } while (0);
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 HEAP32[i1 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore29DefaultSharedWorkerRepository18workerScriptLoadedERNS_17SharedWorkerProxyERKN3WTF6StringES6_NS3_10PassOwnPtrINS_18MessagePortChannelEEES6_NS_21ContentSecurityPolicy10HeaderTypeE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 72 | 0;
 i14 = i1 | 0;
 i15 = (i1 | 0) == 0;
 if (!i15) {
  __ZN3WTF5Mutex4lockEv(i14);
 }
 i1 = i2 + 12 | 0;
 do {
  if ((HEAP8[i1] & 1) == 0) {
   i16 = i2 + 68 | 0;
   do {
    if ((HEAP32[i16 >> 2] | 0) == 0) {
     __ZNKR3WTF6String12isolatedCopyEv(i11, i2 + 16 | 0);
     __ZNKR3WTF6String12isolatedCopyEv(i9, i2 + 20 | 0);
     __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i12, 0, i9);
     i17 = HEAP32[i9 >> 2] | 0;
     do {
      if ((i17 | 0) != 0) {
       i18 = i17 | 0;
       i19 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
       if ((i19 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i17);
        break;
       } else {
        HEAP32[i18 >> 2] = i19;
        break;
       }
      }
     } while (0);
     do {
      if ((HEAP8[i1] & 1) == 0) {
       i17 = HEAP32[i2 + 76 >> 2] | 0;
       i19 = HEAP32[i2 + 80 >> 2] | 0;
       i18 = i17 + (i19 << 2) | 0;
       L16 : do {
        if ((HEAP32[i2 + 88 >> 2] | 0) == 0) {
         i20 = i18;
        } else {
         if ((i19 | 0) == 0) {
          i20 = i17;
          break;
         } else {
          i21 = i17;
         }
         while (1) {
          i22 = HEAP32[i21 >> 2] | 0;
          if (!((i22 | 0) == (-1 | 0) | (i22 | 0) == 0)) {
           i20 = i21;
           break L16;
          }
          i22 = i21 + 4 | 0;
          if ((i22 | 0) == (i18 | 0)) {
           i20 = i18;
           break;
          } else {
           i21 = i22;
          }
         }
        }
       } while (0);
       i18 = HEAP32[i20 >> 2] | 0;
       if ((__ZNK7WebCore8Document4pageEv(i18) | 0) == 0) {
        i23 = 0;
        break;
       }
       i17 = __ZNK7WebCore8Document4pageEv(i18) | 0;
       i18 = i17 + 160 | 0;
       i19 = HEAP32[i18 >> 2] | 0;
       if ((i19 | 0) == 0) {
        __ZN7WebCore4Page9initGroupEv(i17);
        i24 = HEAP32[i18 >> 2] | 0;
       } else {
        i24 = i19;
       }
       i23 = HEAP32[i24 + 104 >> 2] | 0;
      } else {
       i23 = 0;
      }
     } while (0);
     __ZN7WebCore18SharedWorkerThread6createERKN3WTF6StringERKNS_3URLES4_PKNS_13GroupSettingsES4_RNS_17WorkerLoaderProxyERNS_20WorkerReportingProxyENS_21WorkerThreadStartModeES4_NS_21ContentSecurityPolicy10HeaderTypeE(i10, i11, i12, i3, i23, i4, i2 | 0, i2 + 8 | 0, 0, i6, i7);
     i19 = i10 | 0;
     i18 = HEAP32[i19 >> 2] | 0;
     HEAP32[i19 >> 2] = 0;
     i19 = HEAP32[i12 >> 2] | 0;
     do {
      if ((i19 | 0) != 0) {
       i17 = i19 | 0;
       i22 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
       if ((i22 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i19);
        break;
       } else {
        HEAP32[i17 >> 2] = i22;
        break;
       }
      }
     } while (0);
     i19 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i19 | 0) != 0) {
       i22 = i19 | 0;
       i17 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
       if ((i17 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i19);
        break;
       } else {
        HEAP32[i22 >> 2] = i17;
        break;
       }
      }
     } while (0);
     i19 = (i18 | 0) == 0;
     if (!i19) {
      i17 = i18 + 4 | 0;
      HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     }
     i17 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = i18;
     do {
      if ((i17 | 0) != 0) {
       i22 = i17 + 4 | 0;
       i25 = i22 | 0;
       i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
       if ((i26 | 0) != 0) {
        HEAP32[i25 >> 2] = i26;
        break;
       }
       i26 = i22 - 4 | 0;
       if ((i26 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 63](i26);
      }
     } while (0);
     __ZN7WebCore12WorkerThread5startEv(i18 | 0) | 0;
     if (i19) {
      break;
     }
     i17 = i18 + 4 | 0;
     i26 = i17 | 0;
     i22 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     if ((i22 | 0) != 0) {
      HEAP32[i26 >> 2] = i22;
      break;
     }
     i22 = i17 - 4 | 0;
     if ((i22 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 63](i22);
    }
   } while (0);
   i22 = (HEAP32[i16 >> 2] | 0) + 12 | 0;
   i17 = i5 | 0;
   i26 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   i17 = __ZN3WTF10fastMallocEj(8) | 0;
   HEAP32[i17 >> 2] = H_BASE + 48;
   HEAP32[i17 + 4 >> 2] = i26;
   i26 = i13 | 0;
   HEAP32[i26 >> 2] = i17;
   __ZN7WebCore13WorkerRunLoop8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE(i22, i13);
   i22 = HEAP32[i26 >> 2] | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 63](i22);
  }
 } while (0);
 if (i15) {
  STACKTOP = i8;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i14);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore24SharedWorkerScriptLoader14notifyFinishedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i1 + 20 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i1 + 8 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((HEAP8[i9 + 144 | 0] & 1) == 0) {
   i12 = HEAP32[i11 + 4 >> 2] | 0;
   i13 = HEAP32[i9 + 148 >> 2] | 0;
   __ZN7WebCore18WorkerScriptLoader6scriptEv(i4, i9);
   do {
    if ((i12 | 0) != 0) {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] & 3](i12) | 0) {
      i14 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(__ZNK7WebCore8Document4pageEv(i12 - 156 + 68 | 0) | 0) | 0;
     } else {
      i14 = __ZN7WebCore24InspectorInstrumentation40instrumentingAgentsForNonDocumentContextEPNS_22ScriptExecutionContextE(i12) | 0;
     }
     if ((i14 | 0) == 0) {
      break;
     }
     __ZN7WebCore24InspectorInstrumentation18scriptImportedImplEPNS_19InstrumentingAgentsEmRKN3WTF6StringE(i14, i13, i4);
    }
   } while (0);
   i13 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i12 = i13 | 0;
     i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i12 >> 2] = i15;
      break;
     }
    }
   } while (0);
   __ZN3WTF36lockAtomicallyInitializedStaticMutexEv();
   if (!(HEAP8[H_BASE + 224 | 0] | 0)) {
    i13 = __ZN3WTF10fastMallocEj(36) | 0;
    __ZN3WTF5MutexC1Ev(i13);
    HEAP32[i13 + 24 >> 2] = 0;
    HEAP32[i13 + 28 >> 2] = 0;
    HEAP32[i13 + 32 >> 2] = 0;
    HEAP32[H_BASE + 232 >> 2] = i13;
    HEAP8[H_BASE + 224 | 0] = 1;
   }
   __ZN3WTF38unlockAtomicallyInitializedStaticMutexEv();
   i13 = HEAP32[H_BASE + 232 >> 2] | 0;
   i15 = HEAP32[i1 + 16 >> 2] | 0;
   i12 = HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i12 >> 2] | 0) + 32 >> 2] & 3](i5, i12, (HEAP32[i8 >> 2] | 0) + 48 | 0);
   __ZN7WebCore18WorkerScriptLoader6scriptEv(i6, HEAP32[i8 >> 2] | 0);
   i12 = i1 + 12 | 0;
   i16 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i12 = i7 | 0;
   HEAP32[i12 >> 2] = i16;
   i16 = __ZNK7WebCore21ContentSecurityPolicy16deprecatedHeaderEv(HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] | 0) + 16 >> 2] | 0) | 0;
   __ZN7WebCore29DefaultSharedWorkerRepository18workerScriptLoadedERNS_17SharedWorkerProxyERKN3WTF6StringES6_NS3_10PassOwnPtrINS_18MessagePortChannelEEES6_NS_21ContentSecurityPolicy10HeaderTypeE(i13, i15, i5, i6, i7, i16, __ZNK7WebCore21ContentSecurityPolicy20deprecatedHeaderTypeEv(HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] | 0) + 16 >> 2] | 0) | 0);
   i16 = HEAP32[i12 >> 2] | 0;
   if ((i16 | 0) != 0) {
    __ZN7WebCore18MessagePortChannelD1Ev(i16);
    __ZN3WTF8fastFreeEPv(i16);
   }
   i16 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i12 = i16 | 0;
     i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i12 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i16 = HEAP32[i5 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   i15 = i16 | 0;
   i12 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i15 >> 2] = i12;
    break;
   }
  } else {
   i12 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 148 | 0;
   i15 = __ZN3WTF10fastMallocEj(56) | 0;
   __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i15, i12, 0, 1);
   i12 = i3 | 0;
   HEAP32[i12 >> 2] = i15;
   __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i11 + 16 | 0, i3) | 0;
   i15 = HEAP32[i12 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i12 = i15 + 8 | 0;
   i15 = i12 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i15 >> 2] = i16;
    break;
   }
   i16 = i12 - 8 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
  }
 } while (0);
 i3 = HEAP32[i10 >> 2] | 0;
 i10 = i3 + 8 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) - 1;
 i10 = i3 + 12 | 0;
 i3 = i10 | 0;
 i11 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 do {
  if ((i11 | 0) == 0) {
   i5 = i10 - 12 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 63](i5);
  } else {
   HEAP32[i3 >> 2] = i11;
  }
 } while (0);
 i11 = i1 + 4 | 0;
 i1 = i11 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  STACKTOP = i2;
  return;
 }
 i3 = i11 - 4 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 63](i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore29DefaultSharedWorkerRepository15connectToWorkerEN3WTF10PassRefPtrINS_12SharedWorkerEEENS1_10PassOwnPtrINS_18MessagePortChannelEEERKNS_3URLERKNS1_6StringERi(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 32 | 0;
 i11 = i7 + 40 | 0;
 i12 = i7 + 88 | 0;
 i13 = i1 | 0;
 i14 = (i1 | 0) == 0;
 if (!i14) {
  __ZN3WTF5Mutex4lockEv(i13);
 }
 __ZN7WebCore29DefaultSharedWorkerRepository8getProxyERKN3WTF6StringERKNS_3URLE(i10, i1, i5, i4);
 i5 = i10 | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i2 | 0;
 i2 = HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] | 0;
 i1 = i10 + 96 | 0;
 i15 = (i1 | 0) == 0;
 if (!i15) {
  __ZN3WTF5Mutex4lockEv(i1);
 }
 if ((i2 | 0) == 0) {
  i16 = 0;
 } else {
  i16 = i2 - 156 + 68 | 0;
 }
 HEAP32[i9 >> 2] = i16;
 __ZN3WTF9HashTableIPN7WebCore8DocumentES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i7 + 16 | 0, i10 + 76 | 0, i9, i9);
 if (!i15) {
  __ZN3WTF5Mutex6unlockEv(i1);
 }
 __ZNKR3WTF6String12isolatedCopyEv(i8, i10 + 20 | 0);
 __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i11, 0, i8);
 i1 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i8 = i1 | 0;
   i15 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i8 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i1 = i11 | 0;
 i11 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0;
 i15 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i1 = i15 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i1 >> 2] = i8;
    break;
   }
  }
 } while (0);
 do {
  if (i11) {
   i15 = HEAP32[i10 + 68 >> 2] | 0;
   if ((i15 | 0) != 0) {
    i8 = i3 | 0;
    i1 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = 0;
    i8 = __ZN3WTF10fastMallocEj(8) | 0;
    HEAP32[i8 >> 2] = H_BASE + 48;
    HEAP32[i8 + 4 >> 2] = i1;
    i1 = i12 | 0;
    HEAP32[i1 >> 2] = i8;
    __ZN7WebCore13WorkerRunLoop8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE(i15 + 12 | 0, i12);
    i15 = HEAP32[i1 >> 2] | 0;
    if ((i15 | 0) == 0) {
     i17 = 31;
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 63](i15);
    i17 = 31;
    break;
   }
   i15 = __ZN3WTF10fastMallocEj(24) | 0;
   i1 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   i8 = i3 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i8 = i15 + 4 | 0;
   HEAP32[i15 >> 2] = H_BASE + 16;
   i16 = i15 + 8 | 0;
   HEAP32[i16 >> 2] = i1;
   HEAP32[i15 + 12 >> 2] = i9;
   HEAP32[i15 + 16 >> 2] = i10;
   i9 = i15 + 20 | 0;
   HEAP32[i9 >> 2] = 0;
   HEAP32[i8 >> 2] = 2;
   i2 = i1 + 12 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
   i2 = i1 + 8 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
   i2 = __ZN3WTF10fastMallocEj(156) | 0;
   __ZN7WebCore18WorkerScriptLoaderC1Ev(i2);
   i1 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i2;
   do {
    if ((i1 | 0) != 0) {
     i2 = i1 + 4 | 0;
     i18 = i2 | 0;
     i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i18 >> 2] = i19;
      break;
     }
     i19 = i2 - 4 | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 36 >> 2] & 63](i19);
    }
   } while (0);
   __ZN7WebCore18WorkerScriptLoader18loadAsynchronouslyEPNS_22ScriptExecutionContextERKNS_3URLENS_24CrossOriginRequestPolicyEPNS_24WorkerScriptLoaderClientE(HEAP32[i9 >> 2] | 0, HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] | 0, i4, 0, i15);
   if ((i15 | 0) == 0) {
    break;
   }
   i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 12 >> 2] & 63](i15);
    break;
   } else {
    HEAP32[i8 >> 2] = i1;
    break;
   }
  } else {
   HEAP32[i6 >> 2] = 21;
   i17 = 31;
  }
 } while (0);
 do {
  if ((i17 | 0) == 31) {
   if ((i10 | 0) == 0) {
    break;
   }
   i6 = i10 + 4 | 0;
   i4 = i6 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i4 = i6 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  }
 } while (0);
 if (i14) {
  STACKTOP = i7;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i13);
 STACKTOP = i7;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore8DocumentES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
  __ZN3WTF9HashTableIPN7WebCore8DocumentES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore8DocumentES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore17SharedWorkerProxy32postConsoleMessageToWorkerObjectENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEiiS6_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 HEAP32[i9 >> 2] = i2;
 HEAP32[i10 >> 2] = i3;
 HEAP32[i11 >> 2] = i5;
 HEAP32[i12 >> 2] = i6;
 i6 = i1 + 96 | 0;
 i5 = (i6 | 0) == 0;
 if (!i5) {
  __ZN3WTF5Mutex4lockEv(i6);
 }
 i3 = i1 + 76 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i14 = i1 + 80 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = i2 + (i15 << 2) | 0;
 L4 : do {
  if ((HEAP32[i1 + 88 >> 2] | 0) != 0) {
   L6 : do {
    if ((i15 | 0) == 0) {
     i17 = i2;
    } else {
     i18 = i2;
     while (1) {
      i19 = HEAP32[i18 >> 2] | 0;
      if (!((i19 | 0) == (-1 | 0) | (i19 | 0) == 0)) {
       i17 = i18;
       break L6;
      }
      i18 = i18 + 4 | 0;
      if ((i18 | 0) == (i16 | 0)) {
       break L4;
      }
     }
    }
   } while (0);
   if ((i17 | 0) == (i16 | 0)) {
    break;
   }
   i18 = i13 | 0;
   i19 = i17;
   while (1) {
    i20 = HEAP32[i19 >> 2] | 0;
    i21 = HEAP32[(HEAP32[i20 >> 2] | 0) + 288 >> 2] | 0;
    __ZN7WebCore18createCallbackTaskINS_13MessageSourceES1_NS_12MessageLevelES2_N3WTF6StringERKS4_S4_S6_ijijEENS3_10PassOwnPtrINS_22ScriptExecutionContext4TaskEEEPFvPS8_T0_T2_T4_T6_T8_T10_ERKT_RKT1_RKT3_RKT5_RKT7_RKT9_(i13, F_BASE_viiiiiii + 6 | 0, i9, i10, i4, i7, i11, i12);
    FUNCTION_TABLE_vii[i21 & 15](i20, i13);
    i20 = HEAP32[i18 >> 2] | 0;
    if ((i20 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 63](i20);
    }
    i20 = i19 + 4 | 0;
    L17 : do {
     if ((i20 | 0) == (i16 | 0)) {
      i22 = i16;
     } else {
      i21 = i20;
      while (1) {
       i23 = HEAP32[i21 >> 2] | 0;
       if (!((i23 | 0) == (-1 | 0) | (i23 | 0) == 0)) {
        i22 = i21;
        break L17;
       }
       i23 = i21 + 4 | 0;
       if ((i23 | 0) == (i16 | 0)) {
        i22 = i16;
        break;
       } else {
        i21 = i23;
       }
      }
     }
    } while (0);
    if ((i22 | 0) == ((HEAP32[i3 >> 2] | 0) + (HEAP32[i14 >> 2] << 2) | 0)) {
     break;
    } else {
     i19 = i22;
    }
   }
  }
 } while (0);
 if (i5) {
  STACKTOP = i8;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i6);
 STACKTOP = i8;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore8DocumentES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore23SharedWorkerConnectTask11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = __ZN3WTF10fastMallocEj(52) | 0;
 i9 = i8;
 __ZN7WebCore11MessagePortC1ERNS_22ScriptExecutionContextE(i9, i2);
 i10 = i1 + 4 | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i4 | 0;
 HEAP32[i10 >> 2] = i1;
 __ZN7WebCore11MessagePort8entangleEN3WTF10PassOwnPtrINS_18MessagePortChannelEEE(i9, i4);
 i4 = HEAP32[i10 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore18MessagePortChannelD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i2 + 160 | 0;
 i2 = HEAP32[(HEAP32[i4 >> 2] | 0) + 32 >> 2] | 0;
 i10 = i7 | 0;
 HEAP32[i10 >> 2] = i9;
 i1 = (i8 | 0) == 0;
 if (!i1) {
  i11 = i8 + 36 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 __ZN7WebCore18createConnectEventEN3WTF10PassRefPtrINS_11MessagePortEEE(i6, i7);
 i7 = i5 | 0;
 i11 = i6 | 0;
 i6 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i7 >> 2] = i6;
 FUNCTION_TABLE_iii[i2 & 1](i4, i5) | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 8 | 0;
   i4 = i7 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i4 >> 2] = i2;
    break;
   }
   i2 = i7 - 8 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
  }
 } while (0);
 i5 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i11 = i5 + 8 | 0;
   i2 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
    break;
   } else {
    HEAP32[i11 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 36 | 0;
   i2 = i10 | 0;
   i11 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i2 >> 2] = i11;
    break;
   }
   i11 = i10 - 36 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 44 >> 2] & 63](i11);
  }
 } while (0);
 if (i1) {
  STACKTOP = i3;
  return;
 }
 i1 = i8 + 36 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] & 63](i9);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17SharedWorkerProxy27postExceptionToWorkerObjectERKN3WTF6StringEiiS4_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 HEAP32[i7 >> 2] = i3;
 HEAP32[i8 >> 2] = i4;
 i4 = i1 + 96 | 0;
 i3 = (i4 | 0) == 0;
 if (!i3) {
  __ZN3WTF5Mutex4lockEv(i4);
 }
 i10 = i1 + 76 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i1 + 80 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i11 + (i13 << 2) | 0;
 L4 : do {
  if ((HEAP32[i1 + 88 >> 2] | 0) != 0) {
   L6 : do {
    if ((i13 | 0) == 0) {
     i15 = i11;
    } else {
     i16 = i11;
     while (1) {
      i17 = HEAP32[i16 >> 2] | 0;
      if (!((i17 | 0) == (-1 | 0) | (i17 | 0) == 0)) {
       i15 = i16;
       break L6;
      }
      i16 = i16 + 4 | 0;
      if ((i16 | 0) == (i14 | 0)) {
       break L4;
      }
     }
    }
   } while (0);
   if ((i15 | 0) == (i14 | 0)) {
    break;
   }
   i16 = i9 | 0;
   i17 = i15;
   while (1) {
    i18 = HEAP32[i17 >> 2] | 0;
    i19 = HEAP32[(HEAP32[i18 >> 2] | 0) + 288 >> 2] | 0;
    __ZN7WebCore18createCallbackTaskIN3WTF6StringERKS2_iiiiS2_S4_EENS1_10PassOwnPtrINS_22ScriptExecutionContext4TaskEEEPFvPS6_T0_T2_T4_T6_ERKT_RKT1_RKT3_RKT5_(i9, F_BASE_viiiii + 2 | 0, i2, i7, i8, i5);
    FUNCTION_TABLE_vii[i19 & 15](i18, i9);
    i18 = HEAP32[i16 >> 2] | 0;
    if ((i18 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 63](i18);
    }
    i18 = i17 + 4 | 0;
    L17 : do {
     if ((i18 | 0) == (i14 | 0)) {
      i20 = i14;
     } else {
      i19 = i18;
      while (1) {
       i21 = HEAP32[i19 >> 2] | 0;
       if (!((i21 | 0) == (-1 | 0) | (i21 | 0) == 0)) {
        i20 = i19;
        break L17;
       }
       i21 = i19 + 4 | 0;
       if ((i21 | 0) == (i14 | 0)) {
        i20 = i14;
        break;
       } else {
        i19 = i21;
       }
      }
     }
    } while (0);
    if ((i20 | 0) == ((HEAP32[i10 >> 2] | 0) + (HEAP32[i12 >> 2] << 2) | 0)) {
     break;
    } else {
     i17 = i20;
    }
   }
  }
 } while (0);
 if (i3) {
  STACKTOP = i6;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i4);
 STACKTOP = i6;
 return;
}
function __ZN3WTF7HashSetIPN7WebCore8DocumentENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 2) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore8DocumentES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZNK7WebCore17SharedWorkerProxy7matchesERKN3WTF6StringENS1_10PassRefPtrINS_14SecurityOriginEEERKNS_3URLE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 if (!(__ZNK7WebCore14SecurityOrigin5equalEPKS0_(HEAP32[i3 >> 2] | 0, HEAP32[i1 + 72 >> 2] | 0) | 0)) {
  i8 = 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i9 = 5;
  } else {
   if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
    i9 = 5;
    break;
   }
   i10 = HEAP32[i1 + 16 >> 2] | 0;
  }
 } while (0);
 do {
  if ((i9 | 0) == 5) {
   i2 = HEAP32[i1 + 16 >> 2] | 0;
   if ((i2 | 0) != 0) {
    if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
     i10 = i2;
     break;
    }
   }
   __ZNKR3WTF6String12isolatedCopyEv(i6, i1 + 20 | 0);
   __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i7, 0, i6);
   i2 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i11 = i2 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i2 = i7 | 0;
   i12 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i4 >> 2] | 0, HEAP32[i2 >> 2] | 0) | 0;
   i11 = HEAP32[i2 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i8 = i12;
    STACKTOP = i5;
    return i8 | 0;
   }
   i2 = i11 | 0;
   i13 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    i8 = i12;
    STACKTOP = i5;
    return i8 | 0;
   } else {
    HEAP32[i2 >> 2] = i13;
    i8 = i12;
    STACKTOP = i5;
    return i8 | 0;
   }
  }
 } while (0);
 i8 = __ZN3WTF5equalEPKNS_10StringImplES2_(i3, i10) | 0;
 STACKTOP = i5;
 return i8 | 0;
}
function __ZN7WebCore29DefaultSharedWorkerRepository16hasSharedWorkersEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = i1 | 0;
 i4 = (i1 | 0) == 0;
 if (!i4) {
  __ZN3WTF5Mutex4lockEv(i3);
 }
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 L4 : do {
  if ((i5 | 0) == 0) {
   i6 = 0;
  } else {
   i7 = HEAP32[i1 + 24 >> 2] | 0;
   i8 = i2;
   i9 = i8 + ~(i8 << 15) | 0;
   i8 = (i9 >>> 10 ^ i9) * 9 & -1;
   i9 = i8 >>> 6 ^ i8;
   i8 = i9 + ~(i9 << 11) | 0;
   i9 = i8 >>> 16 ^ i8;
   i8 = (i9 >>> 23) + ~i9 | 0;
   i10 = i8 << 12 ^ i8;
   i8 = i10 >>> 7 ^ i10;
   i10 = i8 << 2 ^ i8;
   i8 = i10 >>> 20 ^ i10 | 1;
   i10 = 0;
   while (1) {
    i11 = HEAP32[i7 + (i10 << 2) >> 2] | 0;
    i12 = HEAP32[i11 + 76 >> 2] | 0;
    L8 : do {
     if ((i12 | 0) != 0) {
      i13 = HEAP32[i11 + 84 >> 2] | 0;
      i14 = i13 & i9;
      i15 = i12 + (i14 << 2) | 0;
      i16 = HEAP32[i15 >> 2] | 0;
      if ((i16 | 0) == (i2 | 0)) {
       i17 = i15;
      } else {
       i15 = 0;
       i18 = i14;
       i14 = i16;
       while (1) {
        if ((i14 | 0) == 0) {
         break L8;
        }
        i16 = (i15 | 0) == 0 ? i8 : i15;
        i19 = i16 + i18 & i13;
        i20 = i12 + (i19 << 2) | 0;
        i21 = HEAP32[i20 >> 2] | 0;
        if ((i21 | 0) == (i2 | 0)) {
         i17 = i20;
         break;
        } else {
         i15 = i16;
         i18 = i19;
         i14 = i21;
        }
       }
      }
      if ((i17 | 0) != 0) {
       i6 = 1;
       break L4;
      }
     }
    } while (0);
    i12 = i10 + 1 | 0;
    if (i12 >>> 0 < i5 >>> 0) {
     i10 = i12;
    } else {
     i6 = 0;
     break;
    }
   }
  }
 } while (0);
 if (i4) {
  return i6 | 0;
 }
 __ZN3WTF5Mutex6unlockEv(i3);
 return i6 | 0;
}
function __ZN7WebCore18createCallbackTaskINS_13MessageSourceES1_NS_12MessageLevelES2_N3WTF6StringERKS4_S4_S6_ijijEENS3_10PassOwnPtrINS_22ScriptExecutionContext4TaskEEEPFvPS8_T0_T2_T4_T6_T8_T10_ERKT_RKT1_RKT3_RKT5_RKT7_RKT9_(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 __ZN7WebCore21CrossThreadCopierBaseILb0ELb0EN3WTF6StringEE4copyERKS2_(i10, i5);
 __ZN7WebCore21CrossThreadCopierBaseILb0ELb0EN3WTF6StringEE4copyERKS2_(i11, i6);
 i6 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 i8 = __ZN3WTF10fastMallocEj(32) | 0;
 HEAP32[i8 >> 2] = H_BASE + 168;
 HEAP32[i8 + 4 >> 2] = i2;
 HEAP32[i8 + 8 >> 2] = i12;
 HEAP32[i8 + 12 >> 2] = i3;
 i3 = i10 | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 HEAP32[i8 + 16 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i12 = i10 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = i11 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 HEAP32[i8 + 20 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i10 = i11 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP32[i8 + 24 >> 2] = i6;
 HEAP32[i8 + 28 >> 2] = i7;
 HEAP32[i1 >> 2] = i8;
 i8 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i12 = i8 | 0;
   i1 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i12 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i3 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 i3 = i8 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i9;
  return;
 } else {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i9;
  return;
 }
}
function __ZN7WebCore18createCallbackTaskIN3WTF6StringERKS2_iiiiS2_S4_EENS1_10PassOwnPtrINS_22ScriptExecutionContext4TaskEEEPFvPS6_T0_T2_T4_T6_ERKT_RKT1_RKT3_RKT5_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 __ZN7WebCore21CrossThreadCopierBaseILb0ELb0EN3WTF6StringEE4copyERKS2_(i8, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 __ZN7WebCore21CrossThreadCopierBaseILb0ELb0EN3WTF6StringEE4copyERKS2_(i9, i6);
 i6 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i6 >> 2] = H_BASE + 200;
 HEAP32[i6 + 4 >> 2] = i2;
 i2 = i8 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i6 + 8 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i5 = i8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 HEAP32[i6 + 12 >> 2] = i3;
 HEAP32[i6 + 16 >> 2] = i4;
 i4 = i9 | 0;
 i9 = HEAP32[i4 >> 2] | 0;
 HEAP32[i6 + 20 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i3 = i9 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i6;
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i2 = i6 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore17SharedWorkerProxy26workerGlobalScopeDestroyedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 __ZN3WTF36lockAtomicallyInitializedStaticMutexEv();
 if (!(HEAP8[H_BASE + 224 | 0] | 0)) {
  i2 = __ZN3WTF10fastMallocEj(36) | 0;
  __ZN3WTF5MutexC1Ev(i2);
  HEAP32[i2 + 24 >> 2] = 0;
  HEAP32[i2 + 28 >> 2] = 0;
  HEAP32[i2 + 32 >> 2] = 0;
  HEAP32[H_BASE + 232 >> 2] = i2;
  HEAP8[H_BASE + 224 | 0] = 1;
 }
 __ZN3WTF38unlockAtomicallyInitializedStaticMutexEv();
 i2 = HEAP32[H_BASE + 232 >> 2] | 0;
 i3 = i2 | 0;
 i4 = (i2 | 0) == 0;
 if (!i4) {
  __ZN3WTF5Mutex4lockEv(i3);
 }
 i5 = i2 + 32 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i2 + 24 | 0;
 i2 = 0;
 while (1) {
  if (i2 >>> 0 >= i6 >>> 0) {
   break;
  }
  i8 = HEAP32[i7 >> 2] | 0;
  i9 = i8 + (i2 << 2) | 0;
  i10 = i2 + 1 | 0;
  if ((HEAP32[i9 >> 2] | 0) == (i1 | 0)) {
   i11 = 8;
   break;
  } else {
   i2 = i10;
  }
 }
 if ((i11 | 0) == 8) {
  do {
   if ((i1 | 0) != 0) {
    i11 = i1 + 4 | 0;
    i2 = i11 | 0;
    if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
     break;
    }
    i2 = i11 - 4 | 0;
    if ((i2 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
   }
  } while (0);
  i1 = i8 + (i10 << 2) | 0;
  _memmove(i9 | 0, i1 | 0, (HEAP32[i7 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) - i1 | 0) | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - 1;
 }
 if (i4) {
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i3);
 return;
}
function __ZN7WebCore17SharedWorkerProxy16postTaskToLoaderEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 96 | 0;
 i6 = (i5 | 0) == 0;
 if (!i6) {
  __ZN3WTF5Mutex4lockEv(i5);
 }
 do {
  if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
   i7 = HEAP32[i1 + 76 >> 2] | 0;
   i8 = HEAP32[i1 + 80 >> 2] | 0;
   i9 = i7 + (i8 << 2) | 0;
   L6 : do {
    if ((HEAP32[i1 + 88 >> 2] | 0) == 0) {
     i10 = i9;
    } else {
     if ((i8 | 0) == 0) {
      i10 = i7;
      break;
     } else {
      i11 = i7;
     }
     while (1) {
      i12 = HEAP32[i11 >> 2] | 0;
      if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
       i10 = i11;
       break L6;
      }
      i12 = i11 + 4 | 0;
      if ((i12 | 0) == (i9 | 0)) {
       i10 = i9;
       break;
      } else {
       i11 = i12;
      }
     }
    }
   } while (0);
   i9 = HEAP32[i10 >> 2] | 0;
   i7 = HEAP32[(HEAP32[i9 >> 2] | 0) + 288 >> 2] | 0;
   i8 = i4 | 0;
   i12 = i2 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i8 >> 2] = i13;
   FUNCTION_TABLE_vii[i7 & 15](i9, i4);
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
  }
 } while (0);
 if (i6) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore24SharedWorkerScriptLoaderD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 36 >> 2] & 63](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i3 = i5 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i3 = i5 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore18MessagePortChannelD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1;
  __ZN3WTF8fastFreeEPv(i6);
  return;
 }
 i3 = i2 + 12 | 0;
 i2 = i3 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i6 = i1;
  __ZN3WTF8fastFreeEPv(i6);
  return;
 }
 i5 = i3 - 12 | 0;
 if ((i5 | 0) == 0) {
  i6 = i1;
  __ZN3WTF8fastFreeEPv(i6);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 63](i5);
 i6 = i1;
 __ZN3WTF8fastFreeEPv(i6);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_viiiiiii + 2;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_viiiiiii + 4;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 2;
}
function __ZN7WebCore17SharedWorkerProxyD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 80;
 HEAP32[i1 + 8 >> 2] = H_BASE + 124;
 __ZN3WTF5MutexD1Ev(i1 + 96 | 0);
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i2);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 68 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
function __ZN7WebCore29DefaultSharedWorkerRepository16documentDetachedEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 i6 = (i1 | 0) == 0;
 if (!i6) {
  __ZN3WTF5Mutex4lockEv(i5);
 }
 i7 = i1 + 32 | 0;
 if ((HEAP32[i7 >> 2] | 0) != 0) {
  i8 = i1 + 24 | 0;
  i1 = 0;
  while (1) {
   i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i1 << 2) >> 2] | 0;
   HEAP32[i4 >> 2] = i2;
   i10 = i9 + 12 | 0;
   do {
    if ((HEAP8[i10] & 1) == 0) {
     i11 = i9 + 96 | 0;
     i12 = (i11 | 0) == 0;
     if (!i12) {
      __ZN3WTF5Mutex4lockEv(i11);
     }
     __ZN3WTF7HashSetIPN7WebCore8DocumentENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i9 + 76 | 0, i4) | 0;
     do {
      if ((HEAP32[i9 + 88 >> 2] | 0) == 0) {
       HEAP8[i10] = 1;
       i13 = HEAP32[i9 + 68 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       }
       __ZN7WebCore12WorkerThread4stopEv(i13 | 0);
      }
     } while (0);
     if (i12) {
      break;
     }
     __ZN3WTF5Mutex6unlockEv(i11);
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if (i1 >>> 0 >= (HEAP32[i7 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 if (i6) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore24SharedWorkerScriptLoaderD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 36 >> 2] & 63](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i3 = i5 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i3 = i5 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore18MessagePortChannelD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 12 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 12 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 63](i3);
 return;
}
function __ZN7WebCore29DefaultSharedWorkerRepository11removeProxyEPNS_17SharedWorkerProxyE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 | 0;
 i4 = (i1 | 0) == 0;
 if (!i4) {
  __ZN3WTF5Mutex4lockEv(i3);
 }
 i5 = i1 + 32 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 24 | 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= i6 >>> 0) {
   break;
  }
  i8 = HEAP32[i7 >> 2] | 0;
  i9 = i8 + (i1 << 2) | 0;
  i10 = i1 + 1 | 0;
  if ((HEAP32[i9 >> 2] | 0) == (i2 | 0)) {
   i11 = 6;
   break;
  } else {
   i1 = i10;
  }
 }
 if ((i11 | 0) == 6) {
  do {
   if ((i2 | 0) != 0) {
    i11 = i2 + 4 | 0;
    i1 = i11 | 0;
    if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
     break;
    }
    i1 = i11 - 4 | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
   }
  } while (0);
  i2 = i8 + (i10 << 2) | 0;
  _memmove(i9 | 0, i2 | 0, (HEAP32[i7 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) - i2 | 0) | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - 1;
 }
 if (i4) {
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i3);
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
function __ZN7WebCore24SharedWorkerScriptLoader4loadERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 4 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 12 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i4 + 8 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = __ZN3WTF10fastMallocEj(156) | 0;
 __ZN7WebCore18WorkerScriptLoaderC1Ev(i5);
 i4 = i1 + 20 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 + 4 | 0;
   i7 = i5 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i7 >> 2] = i8;
    break;
   }
   i8 = i5 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] & 63](i8);
  }
 } while (0);
 __ZN7WebCore18WorkerScriptLoader18loadAsynchronouslyEPNS_22ScriptExecutionContextERKNS_3URLENS_24CrossOriginRequestPolicyEPNS_24WorkerScriptLoaderClientE(HEAP32[i4 >> 2] | 0, HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] | 0, i2, 0, i1 | 0);
 return;
}
function __ZNK7WebCore17SharedWorkerProxy13groupSettingsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if ((HEAP8[i1 + 12 | 0] & 1) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 76 >> 2] | 0;
 i4 = HEAP32[i1 + 80 >> 2] | 0;
 i5 = i3 + (i4 << 2) | 0;
 L4 : do {
  if ((HEAP32[i1 + 88 >> 2] | 0) == 0) {
   i6 = i5;
  } else {
   if ((i4 | 0) == 0) {
    i6 = i3;
    break;
   } else {
    i7 = i3;
   }
   while (1) {
    i8 = HEAP32[i7 >> 2] | 0;
    if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
     i6 = i7;
     break L4;
    }
    i8 = i7 + 4 | 0;
    if ((i8 | 0) == (i5 | 0)) {
     i6 = i5;
     break;
    } else {
     i7 = i8;
    }
   }
  }
 } while (0);
 i7 = HEAP32[i6 >> 2] | 0;
 if ((__ZNK7WebCore8Document4pageEv(i7) | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i6 = __ZNK7WebCore8Document4pageEv(i7) | 0;
 i7 = i6 + 160 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore4Page9initGroupEv(i6);
  i9 = HEAP32[i7 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i2 = HEAP32[i9 + 104 >> 2] | 0;
 return i2 | 0;
}
function __ZN7WebCore29DefaultSharedWorkerRepositoryD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 24 | 0;
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
     if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i8 = i7 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
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
 if ((i2 | 0) == 0) {
  i9 = i1 | 0;
  __ZN3WTF5MutexD1Ev(i9);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i9 = i1 | 0;
 __ZN3WTF5MutexD1Ev(i9);
 return;
}
function __ZN7WebCore29DefaultSharedWorkerRepositoryD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 24 | 0;
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
     if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i8 = i7 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
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
 if ((i2 | 0) == 0) {
  i9 = i1 | 0;
  __ZN3WTF5MutexD1Ev(i9);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i9 = i1 | 0;
 __ZN3WTF5MutexD1Ev(i9);
 return;
}
function __ZN7WebCore17SharedWorkerProxy34postTaskForModeToWorkerGlobalScopeEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEERKNS1_6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((HEAP8[i1 + 12 | 0] & 1) != 0) {
  i6 = 0;
  STACKTOP = i4;
  return i6 | 0;
 }
 i7 = (HEAP32[i1 + 68 >> 2] | 0) + 12 | 0;
 i1 = i5 | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 __ZN7WebCore13WorkerRunLoop15postTaskForModeEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEERKNS1_6StringE(i7, i5, i3);
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i6 = 1;
  STACKTOP = i4;
  return i6 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 i6 = 1;
 STACKTOP = i4;
 return i6 | 0;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore17SharedWorkerProxyEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
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
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i3 >> 2] = i1 >>> 2;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore16CrossThreadTask6INS_13MessageSourceES1_NS_12MessageLevelES2_N3WTF6StringERKS4_S4_S6_ijijED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 168;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
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
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore17SharedWorkerProxy16documentDetachedEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 i2 = i1 + 12 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 + 96 | 0;
 i6 = (i5 | 0) == 0;
 if (!i6) {
  __ZN3WTF5Mutex4lockEv(i5);
 }
 __ZN3WTF7HashSetIPN7WebCore8DocumentENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 76 | 0, i4) | 0;
 do {
  if ((HEAP32[i1 + 88 >> 2] | 0) == 0) {
   HEAP8[i2] = 1;
   i4 = HEAP32[i1 + 68 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore12WorkerThread4stopEv(i4 | 0);
  }
 } while (0);
 if (i6) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16CrossThreadTask6INS_13MessageSourceES1_NS_12MessageLevelES2_N3WTF6StringERKS4_S4_S6_ijijED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 168;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
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
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN7WebCoreL17postExceptionTaskEPNS_22ScriptExecutionContextERKN3WTF6StringEiiS5_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore22ScriptExecutionContext15reportExceptionERKN3WTF6StringEiiS4_NS1_10PassRefPtrINS_15ScriptCallStackEEEPNS_12CachedScriptE(i1, i2, i3, i4, i5, i7, 0);
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i8 = i7 | 0;
 i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore15ScriptCallStackD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i8 >> 2] = i5;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore17SharedWorkerProxy20addToWorkerDocumentsEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i1 + 96 | 0;
 i6 = (i5 | 0) == 0;
 if (!i6) {
  __ZN3WTF5Mutex4lockEv(i5);
 }
 if ((i2 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = i2 - 156 + 68 | 0;
 }
 HEAP32[i4 >> 2] = i7;
 __ZN3WTF9HashTableIPN7WebCore8DocumentES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 76 | 0, i4, i4);
 if (i6) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16CrossThreadTask4IN3WTF6StringERKS2_iiiiS2_S4_ED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 200;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
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
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore24SharedWorkerScriptLoader18didReceiveResponseEmRKNS_16ResourceResponseE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i3 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 3](i3) | 0) {
  i4 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(__ZNK7WebCore8Document4pageEv(i3 - 156 + 68 | 0) | 0) | 0;
 } else {
  i4 = __ZN7WebCore24InspectorInstrumentation40instrumentingAgentsForNonDocumentContextEPNS_22ScriptExecutionContextE(i3) | 0;
 }
 if ((i4 | 0) == 0) {
  return;
 }
 __ZN7WebCore24InspectorInstrumentation28didReceiveScriptResponseImplEPNS_19InstrumentingAgentsEm(i4, i2);
 return;
}
function __ZN7WebCore16CrossThreadTask4IN3WTF6StringERKS2_iiiiS2_S4_ED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 200;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
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
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore24SharedWorkerScriptLoaderC2EN3WTF10PassRefPtrINS_12SharedWorkerEEENS1_10PassOwnPtrINS_18MessagePortChannelEEENS2_INS_17SharedWorkerProxyEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i3;
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i4;
 HEAP32[i1 + 20 >> 2] = 0;
 return;
}
function __ZN7WebCore24SharedWorkerScriptLoaderC1EN3WTF10PassRefPtrINS_12SharedWorkerEEENS1_10PassOwnPtrINS_18MessagePortChannelEEENS2_INS_17SharedWorkerProxyEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i3;
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i4;
 HEAP32[i1 + 20 >> 2] = 0;
 return;
}
function __ZN7WebCore17SharedWorkerProxyC2ERKN3WTF6StringERKNS_3URLENS1_10PassRefPtrINS_14SecurityOriginEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 80;
 HEAP32[i1 + 8 >> 2] = H_BASE + 124;
 HEAP8[i1 + 12 | 0] = 0;
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 16 | 0, i2);
 __ZNK7WebCore3URL4copyEv(i1 + 20 | 0, i3);
 HEAP32[i1 + 68 >> 2] = 0;
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 72 >> 2] = i4;
 _memset(i1 + 76 | 0, 0, 20) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 96 | 0);
 return;
}
function __ZN7WebCore17SharedWorkerProxyC1ERKN3WTF6StringERKNS_3URLENS1_10PassRefPtrINS_14SecurityOriginEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 80;
 HEAP32[i1 + 8 >> 2] = H_BASE + 124;
 HEAP8[i1 + 12 | 0] = 0;
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 16 | 0, i2);
 __ZNK7WebCore3URL4copyEv(i1 + 20 | 0, i3);
 HEAP32[i1 + 68 >> 2] = 0;
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 72 >> 2] = i4;
 _memset(i1 + 76 | 0, 0, 20) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 96 | 0);
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
function __ZN7WebCore29DefaultSharedWorkerRepository8instanceEv() {
 var i1 = 0;
 __ZN3WTF36lockAtomicallyInitializedStaticMutexEv();
 if (!(HEAP8[H_BASE + 224 | 0] | 0)) {
  i1 = __ZN3WTF10fastMallocEj(36) | 0;
  __ZN3WTF5MutexC1Ev(i1);
  HEAP32[i1 + 24 >> 2] = 0;
  HEAP32[i1 + 28 >> 2] = 0;
  HEAP32[i1 + 32 >> 2] = 0;
  HEAP32[H_BASE + 232 >> 2] = i1;
  HEAP8[H_BASE + 224 | 0] = 1;
 }
 __ZN3WTF38unlockAtomicallyInitializedStaticMutexEv();
 return HEAP32[H_BASE + 232 >> 2] | 0;
}
function __ZThn8_N7WebCore17SharedWorkerProxy32postConsoleMessageToWorkerObjectENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEiiS6_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 __ZN7WebCore17SharedWorkerProxy32postConsoleMessageToWorkerObjectENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEiiS6_(i1 - 120 + 112 | 0, i2, i3, i4, i5, i6, i7);
 return;
}
function __ZN7WebCore29DefaultSharedWorkerRepository11isAvailableEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i1 = __ZN7WebCore18platformStrategiesEv() | 0;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 3](i1) | 0;
  HEAP32[i2 >> 2] = i4;
  i5 = i4;
 } else {
  i5 = i3;
 }
 return FUNCTION_TABLE_ii[HEAP32[HEAP32[i5 >> 2] >> 2] & 3](i5) | 0;
}
function __ZN7WebCoreL22postConsoleMessageTaskEPNS_22ScriptExecutionContextENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES7_jj(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 __ZN7WebCore22ScriptExecutionContext17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjPN3JSC9ExecStateEm(i1, i2, i3, i4, i5, i6, i7, 0, 0);
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
function __ZN7WebCore16CrossThreadTask6INS_13MessageSourceES1_NS_12MessageLevelES2_N3WTF6StringERKS4_S4_S6_ijijE11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_viiiiiii[HEAP32[i1 + 4 >> 2] & 7](i2, HEAP32[i1 + 8 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0, i1 + 16 | 0, i1 + 20 | 0, HEAP32[i1 + 24 >> 2] | 0, HEAP32[i1 + 28 >> 2] | 0);
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
function __ZN7WebCore23SharedWorkerConnectTaskD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore18MessagePortChannelD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZThn8_N7WebCore17SharedWorkerProxy27postExceptionToWorkerObjectERKN3WTF6StringEiiS4_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore17SharedWorkerProxy27postExceptionToWorkerObjectERKN3WTF6StringEiiS4_(i1 - 120 + 112 | 0, i2, i3, i4, i5);
 return;
}
function __ZThn8_N7WebCore17SharedWorkerProxy23workerGlobalScopeClosedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 120 + 124 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  return;
 }
 HEAP8[i2] = 1;
 i2 = HEAP32[i1 - 120 + 180 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore12WorkerThread4stopEv(i2 | 0);
 return;
}
function __ZN7WebCore23SharedWorkerConnectTaskD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore18MessagePortChannelD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore17SharedWorkerProxy23workerGlobalScopeClosedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 12 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  return;
 }
 HEAP8[i2] = 1;
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore12WorkerThread4stopEv(i2 | 0);
 return;
}
function __ZN7WebCore16CrossThreadTask4IN3WTF6StringERKS2_iiiiS2_S4_E11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_viiiii[HEAP32[i1 + 4 >> 2] & 7](i2, i1 + 8 | 0, HEAP32[i1 + 12 >> 2] | 0, HEAP32[i1 + 16 >> 2] | 0, i1 + 20 | 0);
 return;
}
function dynCall_viiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore17SharedWorkerProxy5closeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP8[i1 + 12 | 0] = 1;
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore12WorkerThread4stopEv(i2 | 0);
 return;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZN7WebCore29DefaultSharedWorkerRepositoryC2Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF5MutexC1Ev(i1 | 0);
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 return;
}
function __ZN7WebCore29DefaultSharedWorkerRepositoryC1Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF5MutexC1Ev(i1 | 0);
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 return;
}
function __ZThn8_N7WebCore17SharedWorkerProxy26workerGlobalScopeDestroyedEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17SharedWorkerProxy26workerGlobalScopeDestroyedEv(i1 - 120 + 112 | 0);
 return;
}
function __ZThn8_N7WebCore17SharedWorkerProxyD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 120 + 112 | 0;
 __ZN7WebCore17SharedWorkerProxyD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function b9(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(9);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore17SharedWorkerProxyD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17SharedWorkerProxyD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZThn8_N7WebCore17SharedWorkerProxyD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17SharedWorkerProxyD2Ev(i1 - 120 + 112 | 0);
 return;
}
function __ZThn8_N7WebCore17SharedWorkerProxy26postMessageToPageInspectorERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore17SharedWorkerProxy26postMessageToPageInspectorERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function __ZN7WebCore17SharedWorkerProxyD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17SharedWorkerProxyD2Ev(i1);
 return;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
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
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
 return 0;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
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
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCoreL17postExceptionTaskEPNS_22ScriptExecutionContextERKN3WTF6StringEiiS5_,b0,__ZThn8_N7WebCore17SharedWorkerProxy27postExceptionToWorkerObjectERKN3WTF6StringEiiS4_,b0,__ZN7WebCore17SharedWorkerProxy27postExceptionToWorkerObjectERKN3WTF6StringEiiS4_,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore29DefaultSharedWorkerRepositoryC2Ev,b1,__ZN7WebCore16CrossThreadTask4IN3WTF6StringERKS2_iiiiS2_S4_ED1Ev,b1,__ZThn8_N7WebCore17SharedWorkerProxyD0Ev,b1,__ZN7WebCore24SharedWorkerScriptLoader14notifyFinishedEv,b1,__ZN7WebCore16CrossThreadTask6INS_13MessageSourceES1_NS_12MessageLevelES2_N3WTF6StringERKS4_S4_S6_ijijED1Ev,b1,__ZN7WebCore17SharedWorkerProxy26workerGlobalScopeDestroyedEv,b1,__ZN7WebCore16CrossThreadTask6INS_13MessageSourceES1_NS_12MessageLevelES2_N3WTF6StringERKS4_S4_S6_ijijED0Ev,b1,__ZN7WebCore17SharedWorkerProxyD0Ev,b1,__ZN7WebCore17SharedWorkerProxyD1Ev,b1,__ZN7WebCore24SharedWorkerScriptLoaderD0Ev,b1,__ZN7WebCore17SharedWorkerProxy23workerGlobalScopeClosedEv,b1,__ZN7WebCore23SharedWorkerConnectTaskD0Ev,b1,__ZN7WebCore23SharedWorkerConnectTaskD1Ev,b1,__ZThn8_N7WebCore17SharedWorkerProxy23workerGlobalScopeClosedEv
  ,b1,__ZN7WebCore16CrossThreadTask4IN3WTF6StringERKS2_iiiiS2_S4_ED0Ev,b1,__ZThn8_N7WebCore17SharedWorkerProxyD1Ev,b1,__ZN7WebCore29DefaultSharedWorkerRepositoryD2Ev,b1,__ZN7WebCore24SharedWorkerScriptLoaderD1Ev,b1,__ZThn8_N7WebCore17SharedWorkerProxy26workerGlobalScopeDestroyedEv,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore16CrossThreadTask6INS_13MessageSourceES1_NS_12MessageLevelES2_N3WTF6StringERKS4_S4_S6_ijijE11performTaskEPNS_22ScriptExecutionContextE,b2,__ZN7WebCore17SharedWorkerProxy26postMessageToPageInspectorERKN3WTF6StringE,b2,__ZN7WebCore16CrossThreadTask4IN3WTF6StringERKS2_iiiiS2_S4_E11performTaskEPNS_22ScriptExecutionContextE,b2,__ZThn8_N7WebCore17SharedWorkerProxy26postMessageToPageInspectorERKN3WTF6StringE,b2,__ZN7WebCore23SharedWorkerConnectTask11performTaskEPNS_22ScriptExecutionContextE,b2,__ZN7WebCore17SharedWorkerProxy16postTaskToLoaderEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv,b3];
  var FUNCTION_TABLE_iiii = [b4,b4,__ZN7WebCore17SharedWorkerProxy34postTaskForModeToWorkerGlobalScopeEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEERKNS1_6StringE,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZN7WebCore24SharedWorkerScriptLoader18didReceiveResponseEmRKNS_16ResourceResponseE,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,__ZN7WebCore17SharedWorkerProxyC2ERKN3WTF6StringERKNS_3URLENS1_10PassRefPtrINS_14SecurityOriginEEE,b7,__ZN7WebCore24SharedWorkerScriptLoaderC2EN3WTF10PassRefPtrINS_12SharedWorkerEEENS1_10PassOwnPtrINS_18MessagePortChannelEEENS2_INS_17SharedWorkerProxyEEE,b7,b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8];
  var FUNCTION_TABLE_viiiiiii = [b9,b9,__ZN7WebCore17SharedWorkerProxy32postConsoleMessageToWorkerObjectENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEiiS6_,b9,__ZThn8_N7WebCore17SharedWorkerProxy32postConsoleMessageToWorkerObjectENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEiiS6_,b9,__ZN7WebCoreL22postConsoleMessageTaskEPNS_22ScriptExecutionContextENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES7_jj,b9];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiii: dynCall_viiii, dynCall_iii: dynCall_iii, dynCall_viiiiiii: dynCall_viiiiiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiii": invoke_viiii, "invoke_iii": invoke_iii, "invoke_viiiiiii": invoke_viiiiiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCoreL17postExceptionTaskEPNS_22ScriptExecutionContextERKN3WTF6StringEiiS5_","__ZN7WebCore16CrossThreadTask6INS_13MessageSourceES1_NS_12MessageLevelES2_N3WTF6StringERKS4_S4_S6_ijijE11performTaskEPNS_22ScriptExecutionContextE","_strlen","__ZN7WebCore24SharedWorkerScriptLoader18didReceiveResponseEmRKNS_16ResourceResponseE","__ZN3WTF6VectorINS_6RefPtrIN7WebCore17SharedWorkerProxyEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore29DefaultSharedWorkerRepositoryC2Ev","__ZN7WebCore18createCallbackTaskINS_13MessageSourceES1_NS_12MessageLevelES2_N3WTF6StringERKS4_S4_S6_ijijEENS3_10PassOwnPtrINS_22ScriptExecutionContext4TaskEEEPFvPS8_T0_T2_T4_T6_T8_T10_ERKT_RKT1_RKT3_RKT5_RKT7_RKT9_","__ZN7WebCore16CrossThreadTask4IN3WTF6StringERKS2_iiiiS2_S4_ED1Ev","__ZN7WebCore17SharedWorkerProxy34postTaskForModeToWorkerGlobalScopeEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEERKNS1_6StringE","__ZThn8_N7WebCore17SharedWorkerProxyD0Ev","__ZN7WebCore23SharedWorkerConnectTaskD0Ev","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore24SharedWorkerScriptLoader14notifyFinishedEv","__ZN7WebCore24SharedWorkerScriptLoader4loadERKNS_3URLE","__ZN7WebCore17SharedWorkerProxy26postMessageToPageInspectorERKN3WTF6StringE","__ZN7WebCore17SharedWorkerProxyC2ERKN3WTF6StringERKNS_3URLENS1_10PassRefPtrINS_14SecurityOriginEEE","__ZN7WebCore16CrossThreadTask6INS_13MessageSourceES1_NS_12MessageLevelES2_N3WTF6StringERKS4_S4_S6_ijijED1Ev","__ZN7WebCore17SharedWorkerProxy26workerGlobalScopeDestroyedEv","__ZN7WebCore16CrossThreadTask6INS_13MessageSourceES1_NS_12MessageLevelES2_N3WTF6StringERKS4_S4_S6_ijijED0Ev","__ZN7WebCore17SharedWorkerProxyD0Ev","__ZN7WebCore29DefaultSharedWorkerRepository16documentDetachedEPNS_8DocumentE","__ZN7WebCore17SharedWorkerProxyD1Ev","_memset","__ZN7WebCore17SharedWorkerProxy16documentDetachedEPNS_8DocumentE","_memcpy","__ZN7WebCore29DefaultSharedWorkerRepository15connectToWorkerEN3WTF10PassRefPtrINS_12SharedWorkerEEENS1_10PassOwnPtrINS_18MessagePortChannelEEERKNS_3URLERKNS1_6StringERi","__ZN7WebCore17SharedWorkerProxy32postConsoleMessageToWorkerObjectENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEiiS6_","__ZN7WebCore14SecurityOriginD2Ev","__ZN7WebCore29DefaultSharedWorkerRepository18workerScriptLoadedERNS_17SharedWorkerProxyERKN3WTF6StringES6_NS3_10PassOwnPtrINS_18MessagePortChannelEEES6_NS_21ContentSecurityPolicy10HeaderTypeE","__ZN7WebCore23SharedWorkerConnectTaskD1Ev","__ZThn8_N7WebCore17SharedWorkerProxy27postExceptionToWorkerObjectERKN3WTF6StringEiiS4_","__ZN7WebCore17SharedWorkerProxy5closeEv","__ZN7WebCore29DefaultSharedWorkerRepository16hasSharedWorkersEPNS_8DocumentE","__ZN7WebCore24SharedWorkerScriptLoaderD0Ev","__ZN7WebCore17SharedWorkerProxyD2Ev","__ZN3WTF9HashTableIPN7WebCore8DocumentES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv","__ZN7WebCore16CrossThreadTask4IN3WTF6StringERKS2_iiiiS2_S4_E11performTaskEPNS_22ScriptExecutionContextE","__ZThn8_N7WebCore17SharedWorkerProxy26postMessageToPageInspectorERKN3WTF6StringE","__ZN7WebCore17SharedWorkerProxy23workerGlobalScopeClosedEv","__ZN7WebCore24SharedWorkerScriptLoaderD1Ev","__ZN7WebCore17SharedWorkerProxy27postExceptionToWorkerObjectERKN3WTF6StringEiiS4_","__ZThn8_N7WebCore17SharedWorkerProxy32postConsoleMessageToWorkerObjectENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEiiS6_","__ZN7WebCore17SharedWorkerProxy20addToWorkerDocumentsEPNS_22ScriptExecutionContextE","__ZN7WebCore29DefaultSharedWorkerRepository8getProxyERKN3WTF6StringERKNS_3URLE","__ZThn8_N7WebCore17SharedWorkerProxy23workerGlobalScopeClosedEv","__ZN7WebCore16CrossThreadTask4IN3WTF6StringERKS2_iiiiS2_S4_ED0Ev","__ZN7WebCore18createCallbackTaskIN3WTF6StringERKS2_iiiiS2_S4_EENS1_10PassOwnPtrINS_22ScriptExecutionContext4TaskEEEPFvPS6_T0_T2_T4_T6_ERKT_RKT1_RKT3_RKT5_","__ZN3WTF9HashTableIPN7WebCore8DocumentES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZThn8_N7WebCore17SharedWorkerProxyD1Ev","__ZN7WebCore29DefaultSharedWorkerRepositoryD2Ev","_memmove","__ZN7WebCore24SharedWorkerScriptLoaderC2EN3WTF10PassRefPtrINS_12SharedWorkerEEENS1_10PassOwnPtrINS_18MessagePortChannelEEENS2_INS_17SharedWorkerProxyEEE","__ZN7WebCore23SharedWorkerConnectTask11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore29DefaultSharedWorkerRepository11isAvailableEv","__ZNK7WebCore17SharedWorkerProxy13groupSettingsEv","__ZN7WebCore29DefaultSharedWorkerRepository11removeProxyEPNS_17SharedWorkerProxyE","__ZNK7WebCore17SharedWorkerProxy7matchesERKN3WTF6StringENS1_10PassRefPtrINS_14SecurityOriginEEERKNS_3URLE","__ZN7WebCoreL22postConsoleMessageTaskEPNS_22ScriptExecutionContextENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES7_jj","__ZN7WebCore17SharedWorkerProxy16postTaskToLoaderEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE","__ZThn8_N7WebCore17SharedWorkerProxy26workerGlobalScopeDestroyedEv","__ZN3WTF7HashSetIPN7WebCore8DocumentENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore29DefaultSharedWorkerRepository8instanceEv"]

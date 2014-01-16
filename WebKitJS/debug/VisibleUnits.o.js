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
var __ZN7WebCore31CachedLogicallyOrderedLeafBoxesC1Ev;
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
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5);
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
  var __ZN7WebCore9HTMLNames5brTagE=env.__ZN7WebCore9HTMLNames5brTagE|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viii=env.invoke_viii;
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
function __ZN7WebCoreL12nextBoundaryERKNS_15VisiblePositionEPFjPKtjjNS_33BoundarySearchContextAvailabilityERbE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 2736 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 88 | 0;
 i16 = i4 + 96 | 0;
 i17 = i4 + 112 | 0;
 i18 = i4 + 2176 | 0;
 i19 = i4 + 2184 | 0;
 i20 = i4 + 2192 | 0;
 i21 = i4 + 2200 | 0;
 i22 = i4 + 2288 | 0;
 i23 = i4 + 2296 | 0;
 i24 = i4 + 2304 | 0;
 i25 = i4 + 2312 | 0;
 i26 = i4 + 2448 | 0;
 i27 = i4 + 2456 | 0;
 i28 = i4 + 2464 | 0;
 i29 = i4 + 2480 | 0;
 i30 = i4 + 2488 | 0;
 i31 = i4 + 2640 | 0;
 i32 = i4 + 2648 | 0;
 i33 = i4 + 2664 | 0;
 i34 = i4 + 2680 | 0;
 i35 = i4 + 2696 | 0;
 i36 = i4 + 2712 | 0;
 i37 = i4 + 2728 | 0;
 i38 = i14 | 0;
 i39 = HEAP32[i2 >> 2] | 0;
 HEAP32[i38 >> 2] = i39;
 if ((i39 | 0) == 0) {
  i40 = i14 + 8 | 0;
  i41 = 0;
  i42 = i40;
  i43 = i40;
 } else {
  i40 = i39 + 8 | 0;
  HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 1;
  i40 = i14 + 8 | 0;
  i39 = i40;
  i41 = HEAP32[i39 >> 2] & -8;
  i42 = i40;
  i43 = i39;
 }
 i39 = i14 + 4 | 0;
 HEAP32[i39 >> 2] = HEAP32[i2 + 4 >> 2];
 i40 = HEAP32[i2 + 8 >> 2] | 0;
 i44 = i41 | i40 & 7;
 HEAP32[i43 >> 2] = i44;
 HEAP8[i42] = i44 & 255 & -9 | i40 & 8;
 i40 = __ZNK7WebCore8Position21parentEditingBoundaryEv(i14) | 0;
 do {
  if ((i40 | 0) == 0) {
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   i44 = i1 + 8 | 0;
   i41 = i44;
   i45 = HEAP32[i41 >> 2] | 0;
   HEAP32[i41 >> 2] = i45 & -8;
   HEAP8[i44] = i45 & 255 & -16;
   HEAP32[i1 + 12 >> 2] = 1;
  } else {
   i45 = HEAP32[(HEAP32[i40 + 20 >> 2] | 0) + 8 >> 2] | 0;
   __ZN7WebCore8Document11createRangeEv(i15, i45);
   i44 = i15 | 0;
   i41 = HEAP32[i44 >> 2] | 0;
   HEAP32[i44 >> 2] = 0;
   __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i16, i14);
   i44 = i17 + 12 | 0;
   i46 = i17 | 0;
   HEAP32[i46 >> 2] = i44;
   i47 = i17 + 4 | 0;
   HEAP32[i47 >> 2] = 1024;
   i48 = i17 + 8 | 0;
   HEAP32[i48 >> 2] = 0;
   i49 = _u_getIntPropertyValue(__ZNK7WebCore15VisiblePosition14characterAfterEv(i2) | 0, 4104) | 0;
   do {
    if ((i49 | 0) == 37 | (i49 | 0) == 24 | (i49 | 0) == 14) {
     __ZN7WebCore8Document11createRangeEv(i18, i45);
     i50 = i18 | 0;
     i51 = HEAP32[i50 >> 2] | 0;
     HEAP32[i50 >> 2] = 0;
     i50 = i16 | 0;
     i52 = HEAP32[i50 >> 2] | 0;
     i53 = i19 | 0;
     HEAP32[i53 >> 2] = i52;
     if ((i52 | 0) != 0) {
      i54 = i52 + 8 | 0;
      HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
     }
     i54 = i16 + 8 | 0;
     do {
      if ((HEAP8[i54] & 8) == 0) {
       i52 = HEAP32[i54 >> 2] & 7;
       if (!((i52 | 0) == 2 | (i52 | 0) == 4)) {
        i55 = 12;
        break;
       }
       i56 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i16) | 0;
      } else {
       i55 = 12;
      }
     } while (0);
     if ((i55 | 0) == 12) {
      i56 = HEAP32[i16 + 4 >> 2] | 0;
     }
     i54 = i20 | 0;
     HEAP32[i54 >> 2] = 0;
     __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i51, i19, i56, i54);
     i54 = HEAP32[i53 >> 2] | 0;
     do {
      if ((i54 | 0) != 0) {
       i52 = i54 + 8 | 0;
       i57 = i52 | 0;
       i58 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
       HEAP32[i57 >> 2] = i58;
       if ((i58 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore31SimplifiedBackwardsTextIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE(i21, i51, 0);
     i54 = i21 + 48 | 0;
     L25 : do {
      if ((HEAP32[i54 >> 2] | 0) == 0) {
       i59 = 0;
      } else {
       i53 = i21 + 79 | 0;
       i52 = i21 + 60 | 0;
       i58 = i21 + 64 | 0;
       i57 = 0;
       L27 : while (1) {
        if ((HEAP8[i53] & 1) != 0) {
         i59 = i57;
         break L25;
        }
        i60 = HEAP32[i52 >> 2] | 0;
        i61 = HEAP32[i58 >> 2] | 0;
        i62 = __ZN7WebCore30startOfLastWordBoundaryContextEPKti(i60, i61) | 0;
        i63 = i61 - i62 | 0;
        i64 = HEAP32[i48 >> 2] | 0;
        i65 = i64 + i63 | 0;
        i66 = HEAP32[i47 >> 2] | 0;
        if (i65 >>> 0 > i66 >>> 0) {
         i67 = i66 + 1 + (i66 >>> 2) | 0;
         i68 = i67 >>> 0 > 16 >>> 0 ? i67 : 16;
         i67 = i68 >>> 0 > i65 >>> 0 ? i68 : i65;
         do {
          if (i66 >>> 0 < i67 >>> 0) {
           i68 = HEAP32[i46 >> 2] | 0;
           if (i67 >>> 0 > 1024 >>> 0) {
            if ((i67 | 0) < 0) {
             i55 = 25;
             break L27;
            }
            i69 = __ZN3WTF18fastMallocGoodSizeEj(i67 << 1) | 0;
            HEAP32[i47 >> 2] = i69 >>> 1;
            i70 = __ZN3WTF10fastMallocEj(i69) | 0;
            HEAP32[i46 >> 2] = i70;
            i71 = i70;
           } else {
            HEAP32[i46 >> 2] = i44;
            HEAP32[i47 >> 2] = 1024;
            i71 = i44;
           }
           i70 = i68;
           _memcpy(i71 | 0, i70 | 0, i64 << 1) | 0;
           if ((i44 | 0) == (i68 | 0) | (i68 | 0) == 0) {
            break;
           }
           if ((HEAP32[i46 >> 2] | 0) == (i68 | 0)) {
            HEAP32[i46 >> 2] = 0;
            HEAP32[i47 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i70);
          }
         } while (0);
         i72 = HEAP32[i48 >> 2] | 0;
        } else {
         i72 = i64;
        }
        if (i65 >>> 0 < i72 >>> 0) {
         i55 = 34;
         break;
        }
        i67 = HEAP32[i46 >> 2] | 0;
        _memmove(i67 + (i63 << 1) | 0, i67 | 0, i72 << 1 | 0) | 0;
        if ((i61 | 0) != (i62 | 0)) {
         i66 = 0;
         while (1) {
          HEAP16[i67 + (i66 << 1) >> 1] = HEAP16[i60 + (i66 + i62 << 1) >> 1] | 0;
          i66 = i66 + 1 | 0;
          if (i66 >>> 0 >= i63 >>> 0) {
           break;
          }
         }
        }
        HEAP32[i48 >> 2] = i65;
        i66 = i63 + i57 | 0;
        if ((i62 | 0) > 0) {
         i59 = i66;
         break L25;
        }
        __ZN7WebCore31SimplifiedBackwardsTextIterator7advanceEv(i21);
        if ((HEAP32[i54 >> 2] | 0) == 0) {
         i59 = i66;
         break L25;
        } else {
         i57 = i66;
        }
       }
       if ((i55 | 0) == 25) {
        _WTFCrash();
       } else if ((i55 | 0) == 34) {
        _WTFCrash();
       }
      }
     } while (0);
     __ZN7WebCore8BitStackD1Ev(i21 + 12 | 0);
     if ((i51 | 0) == 0) {
      i73 = i59;
      i74 = i50;
      break;
     }
     i54 = i51 | 0;
     i57 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
     if ((i57 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i51);
      __ZN3WTF8fastFreeEPv(i51);
      i73 = i59;
      i74 = i50;
      break;
     } else {
      HEAP32[i54 >> 2] = i57;
      i73 = i59;
      i74 = i50;
      break;
     }
    } else {
     i73 = 0;
     i74 = i16 | 0;
    }
   } while (0);
   i45 = i22 | 0;
   HEAP32[i45 >> 2] = 0;
   __ZN7WebCore5Range18selectNodeContentsEPNS_4NodeERi(i41, i40, i45);
   i45 = HEAP32[i74 >> 2] | 0;
   i49 = i23 | 0;
   HEAP32[i49 >> 2] = i45;
   if ((i45 | 0) != 0) {
    i57 = i45 + 8 | 0;
    HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
   }
   i57 = i16 + 8 | 0;
   do {
    if ((HEAP8[i57] & 8) == 0) {
     i45 = HEAP32[i57 >> 2] & 7;
     if (!((i45 | 0) == 2 | (i45 | 0) == 4)) {
      i55 = 47;
      break;
     }
     i75 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i16) | 0;
    } else {
     i55 = 47;
    }
   } while (0);
   if ((i55 | 0) == 47) {
    i75 = HEAP32[i16 + 4 >> 2] | 0;
   }
   i57 = i24 | 0;
   HEAP32[i57 >> 2] = 0;
   __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i41, i23, i75, i57);
   i57 = HEAP32[i49 >> 2] | 0;
   do {
    if ((i57 | 0) != 0) {
     i45 = i57 + 8 | 0;
     i54 = i45 | 0;
     i58 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
     HEAP32[i54 >> 2] = i58;
     if ((i58 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore12TextIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE(i25, i41, 1);
   HEAP8[i26] = 0;
   i57 = i25 + 52 | 0;
   L74 : do {
    if ((HEAP32[i57 >> 2] | 0) == 0) {
     i76 = 0;
    } else {
     i49 = i25 + 133 | 0;
     i45 = i25 + 68 | 0;
     i58 = i25 + 76 | 0;
     i54 = i25 + 60 | 0;
     i52 = i25 + 72 | 0;
     i53 = i27 | 0;
     i66 = i9 | 0;
     i60 = 0;
     L76 : while (1) {
      if ((HEAP8[i49] & 1) != 0) {
       i76 = i60;
       break L74;
      }
      do {
       if ((__ZNK7WebCore12TextIterator4nodeEv(i25) | 0) == 0) {
        i77 = 0;
       } else {
        i67 = __ZNK7WebCore12TextIterator4nodeEv(i25) | 0;
        i61 = i67 + 32 | 0;
        if ((HEAP32[i67 + 12 >> 2] & 2048 | 0) == 0) {
         i78 = i61 | 0;
        } else {
         i78 = HEAP32[i61 >> 2] | 0;
        }
        if ((HEAP32[i78 >> 2] | 0) == 0) {
         i77 = 0;
         break;
        }
        i61 = __ZNK7WebCore12TextIterator4nodeEv(i25) | 0;
        i67 = i61 + 32 | 0;
        if ((HEAP32[i61 + 12 >> 2] & 2048 | 0) == 0) {
         i79 = i67 | 0;
        } else {
         i79 = HEAP32[i67 >> 2] | 0;
        }
        i67 = HEAP32[i79 >> 2] | 0;
        if ((HEAP32[i67 + 20 >> 2] & 768 | 0) == 256) {
         i80 = HEAP32[(HEAP32[i67 + 8 >> 2] | 0) + 36 >> 2] | 0;
        } else {
         i80 = HEAP32[i67 + 36 >> 2] | 0;
        }
        i77 = (HEAP32[(HEAP32[i80 + 24 >> 2] | 0) + 88 >> 2] & 12 | 0) != 0;
       }
      } while (0);
      i67 = HEAP32[i45 >> 2] | 0;
      if ((i67 | 0) == 0) {
       i61 = HEAP32[i58 >> 2] | 0;
       do {
        if ((i61 | 0) == 0) {
         i81 = 0;
        } else {
         if ((HEAP32[i61 + 16 >> 2] & 32 | 0) == 0) {
          i81 = HEAP32[i61 + 8 >> 2] | 0;
          break;
         } else {
          i81 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i61) | 0;
          break;
         }
        }
       } while (0);
       i82 = i81 + (HEAP32[i54 >> 2] << 1) | 0;
      } else {
       i82 = i67;
      }
      i61 = HEAP32[i52 >> 2] | 0;
      do {
       if (i77) {
        __ZN3WTF6StringC1EPKtj(i27, i82, i61);
        i64 = HEAP32[i53 >> 2] | 0;
        do {
         if ((i64 | 0) != 0) {
          __ZN3WTF10StringImpl4fillEt(i9, i64, 120);
          i70 = HEAP32[i53 >> 2] | 0;
          HEAP32[i53 >> 2] = HEAP32[i66 >> 2];
          if ((i70 | 0) == 0) {
           break;
          }
          i68 = i70 | 0;
          i69 = (HEAP32[i68 >> 2] | 0) - 2 | 0;
          if ((i69 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i70);
           break;
          } else {
           HEAP32[i68 >> 2] = i69;
           break;
          }
         }
        } while (0);
        i64 = HEAP32[i53 >> 2] | 0;
        do {
         if ((i64 | 0) == 0) {
          i83 = 0;
          i84 = 0;
         } else {
          if ((HEAP32[i64 + 16 >> 2] & 32 | 0) == 0) {
           i85 = HEAP32[i64 + 8 >> 2] | 0;
           i86 = i64;
          } else {
           i62 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i64) | 0;
           i85 = i62;
           i86 = HEAP32[i53 >> 2] | 0;
          }
          if ((i86 | 0) == 0) {
           i83 = 0;
           i84 = i85;
           break;
          }
          i83 = HEAP32[i86 + 4 >> 2] | 0;
          i84 = i85;
         }
        } while (0);
        i64 = HEAP32[i48 >> 2] | 0;
        i62 = i64 + i83 | 0;
        i63 = HEAP32[i47 >> 2] | 0;
        if (i62 >>> 0 > i63 >>> 0) {
         i65 = i63 + 1 + (i63 >>> 2) | 0;
         i69 = i65 >>> 0 > 16 >>> 0 ? i65 : 16;
         i65 = i69 >>> 0 > i62 >>> 0 ? i69 : i62;
         do {
          if (i63 >>> 0 < i65 >>> 0) {
           i69 = HEAP32[i46 >> 2] | 0;
           if (i65 >>> 0 > 1024 >>> 0) {
            if ((i65 | 0) < 0) {
             i55 = 107;
             break L76;
            }
            i68 = __ZN3WTF18fastMallocGoodSizeEj(i65 << 1) | 0;
            HEAP32[i47 >> 2] = i68 >>> 1;
            i70 = __ZN3WTF10fastMallocEj(i68) | 0;
            HEAP32[i46 >> 2] = i70;
            i87 = i70;
           } else {
            HEAP32[i46 >> 2] = i44;
            HEAP32[i47 >> 2] = 1024;
            i87 = i44;
           }
           i70 = i69;
           _memcpy(i87 | 0, i70 | 0, i64 << 1) | 0;
           if ((i44 | 0) == (i69 | 0) | (i69 | 0) == 0) {
            break;
           }
           if ((HEAP32[i46 >> 2] | 0) == (i69 | 0)) {
            HEAP32[i46 >> 2] = 0;
            HEAP32[i47 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i70);
          }
         } while (0);
         i88 = HEAP32[i48 >> 2] | 0;
        } else {
         i88 = i64;
        }
        if (i62 >>> 0 < i88 >>> 0) {
         i55 = 116;
         break L76;
        }
        i65 = HEAP32[i46 >> 2] | 0;
        if ((i83 | 0) != 0) {
         i63 = 0;
         while (1) {
          HEAP16[i65 + (i63 + i88 << 1) >> 1] = HEAP16[i84 + (i63 << 1) >> 1] | 0;
          i63 = i63 + 1 | 0;
          if (i63 >>> 0 >= i83 >>> 0) {
           break;
          }
         }
        }
        HEAP32[i48 >> 2] = i62;
        i63 = HEAP32[i53 >> 2] | 0;
        if ((i63 | 0) == 0) {
         break;
        }
        i65 = i63 | 0;
        i64 = (HEAP32[i65 >> 2] | 0) - 2 | 0;
        if ((i64 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i63);
         break;
        } else {
         HEAP32[i65 >> 2] = i64;
         break;
        }
       } else {
        i64 = HEAP32[i48 >> 2] | 0;
        i65 = i64 + i61 | 0;
        i63 = HEAP32[i47 >> 2] | 0;
        if (i65 >>> 0 > i63 >>> 0) {
         i70 = i63 + 1 + (i63 >>> 2) | 0;
         i69 = i70 >>> 0 > 16 >>> 0 ? i70 : 16;
         i70 = i69 >>> 0 > i65 >>> 0 ? i69 : i65;
         do {
          if (i63 >>> 0 < i70 >>> 0) {
           i69 = HEAP32[i46 >> 2] | 0;
           if (i70 >>> 0 > 1024 >>> 0) {
            if ((i70 | 0) < 0) {
             i55 = 79;
             break L76;
            }
            i68 = __ZN3WTF18fastMallocGoodSizeEj(i70 << 1) | 0;
            HEAP32[i47 >> 2] = i68 >>> 1;
            i89 = __ZN3WTF10fastMallocEj(i68) | 0;
            HEAP32[i46 >> 2] = i89;
            i90 = i89;
           } else {
            HEAP32[i46 >> 2] = i44;
            HEAP32[i47 >> 2] = 1024;
            i90 = i44;
           }
           i89 = i69;
           _memcpy(i90 | 0, i89 | 0, i64 << 1) | 0;
           if ((i44 | 0) == (i69 | 0) | (i69 | 0) == 0) {
            break;
           }
           if ((HEAP32[i46 >> 2] | 0) == (i69 | 0)) {
            HEAP32[i46 >> 2] = 0;
            HEAP32[i47 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i89);
          }
         } while (0);
         i91 = HEAP32[i48 >> 2] | 0;
        } else {
         i91 = i64;
        }
        if (i65 >>> 0 < i91 >>> 0) {
         i55 = 88;
         break L76;
        }
        i70 = HEAP32[i46 >> 2] | 0;
        if ((i61 | 0) != 0) {
         i63 = 0;
         while (1) {
          HEAP16[i70 + (i63 + i91 << 1) >> 1] = HEAP16[i82 + (i63 << 1) >> 1] | 0;
          i63 = i63 + 1 | 0;
          if (i63 >>> 0 >= i61 >>> 0) {
           break;
          }
         }
        }
        HEAP32[i48 >> 2] = i65;
       }
      } while (0);
      i61 = FUNCTION_TABLE_iiiiii[i3 & 31](HEAP32[i46 >> 2] | 0, HEAP32[i48 >> 2] | 0, i73, 1, i26) | 0;
      if ((i61 | 0) != (HEAP32[i48 >> 2] | 0)) {
       i76 = i61;
       break L74;
      }
      __ZN7WebCore12TextIterator7advanceEv(i25);
      if ((HEAP32[i57 >> 2] | 0) == 0) {
       i76 = i61;
       break L74;
      } else {
       i60 = i61;
      }
     }
     if ((i55 | 0) == 79) {
      _WTFCrash();
     } else if ((i55 | 0) == 88) {
      _WTFCrash();
     } else if ((i55 | 0) == 107) {
      _WTFCrash();
     } else if ((i55 | 0) == 116) {
      _WTFCrash();
     }
    }
   } while (0);
   if ((HEAP8[i26] & 1) == 0) {
    i92 = i76;
   } else {
    i92 = FUNCTION_TABLE_iiiiii[i3 & 31](HEAP32[i46 >> 2] | 0, HEAP32[i48 >> 2] | 0, i73, 0, i26) | 0;
   }
   if ((HEAP32[i57 >> 2] | 0) == 0) {
    i55 = 129;
   } else {
    if ((HEAP8[i25 + 133 | 0] & 1) == 0) {
     i55 = 152;
    } else {
     i55 = 129;
    }
   }
   do {
    if ((i55 | 0) == 129) {
     if ((i92 | 0) != (HEAP32[i48 >> 2] | 0)) {
      i55 = 152;
      break;
     }
     __ZNK7WebCore12TextIterator5rangeEv(i29, i25);
     i60 = i29 | 0;
     i53 = HEAP32[i60 >> 2] | 0;
     i66 = i53 + 12 | 0;
     i52 = HEAP32[i66 >> 2] | 0;
     if ((i52 | 0) > -1) {
      i93 = i52;
     } else {
      i52 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i53 + 16 >> 2] | 0) | 0) + 1 | 0;
      HEAP32[i66 >> 2] = i52;
      i93 = i52;
     }
     i52 = HEAP32[i53 + 8 >> 2] | 0;
     if ((i52 | 0) == 0) {
      i94 = i93;
     } else {
      i53 = i52 + 8 | 0;
      HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
      i94 = HEAP32[i66 >> 2] | 0;
     }
     i66 = i7 | 0;
     HEAP32[i66 >> 2] = i52;
     HEAP32[i8 >> 2] = i94;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i28, i7, i8);
     i52 = HEAP32[i66 >> 2] | 0;
     do {
      if ((i52 | 0) != 0) {
       i66 = i52 + 8 | 0;
       i53 = i66 | 0;
       i54 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
       HEAP32[i53 >> 2] = i54;
       if ((i54 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i66 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i66 - 8 | 0);
      }
     } while (0);
     i52 = i28 | 0;
     i66 = HEAP32[i52 >> 2] | 0;
     if ((i66 | 0) != 0) {
      i54 = i66 + 8 | 0;
      HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
     }
     i54 = HEAP32[i38 >> 2] | 0;
     HEAP32[i38 >> 2] = i66;
     do {
      if ((i54 | 0) != 0) {
       i66 = i54 + 8 | 0;
       i53 = i66 | 0;
       i58 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
       HEAP32[i53 >> 2] = i58;
       if ((i58 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i66 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i66 - 8 | 0);
      }
     } while (0);
     HEAP32[i39 >> 2] = HEAP32[i28 + 4 >> 2];
     i54 = HEAP32[i28 + 8 >> 2] | 0;
     i66 = HEAP32[i43 >> 2] & -8 | i54 & 7;
     HEAP32[i43 >> 2] = i66;
     HEAP8[i42] = i66 & 255 & -9 | i54 & 8;
     i54 = HEAP32[i52 >> 2] | 0;
     do {
      if ((i54 | 0) != 0) {
       i66 = i54 + 8 | 0;
       i58 = i66 | 0;
       i53 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
       HEAP32[i58 >> 2] = i53;
       if ((i53 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i66 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i66 - 8 | 0);
      }
     } while (0);
     i54 = HEAP32[i60 >> 2] | 0;
     if ((i54 | 0) == 0) {
      break;
     }
     i52 = i54 | 0;
     i66 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
     if ((i66 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i54);
      __ZN3WTF8fastFreeEPv(i54);
      break;
     } else {
      HEAP32[i52 >> 2] = i66;
      break;
     }
    }
   } while (0);
   do {
    if ((i55 | 0) == 152) {
     if ((i92 | 0) == (i73 | 0)) {
      break;
     }
     __ZN7WebCore17CharacterIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE(i30, i41, 1);
     __ZN7WebCore17CharacterIterator7advanceEi(i30, i92 + ~i73 | 0);
     __ZNK7WebCore17CharacterIterator5rangeEv(i31, i30);
     i57 = i31 | 0;
     i66 = HEAP32[i57 >> 2] | 0;
     HEAP32[i57 >> 2] = 0;
     i57 = i66 + 24 | 0;
     i52 = HEAP32[i57 >> 2] | 0;
     if ((i52 | 0) > -1) {
      i95 = i52;
     } else {
      i52 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i66 + 28 >> 2] | 0) | 0) + 1 | 0;
      HEAP32[i57 >> 2] = i52;
      i95 = i52;
     }
     i52 = HEAP32[i66 + 20 >> 2] | 0;
     if ((i52 | 0) == 0) {
      i96 = i95;
     } else {
      i54 = i52 + 8 | 0;
      HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
      i96 = HEAP32[i57 >> 2] | 0;
     }
     i57 = i5 | 0;
     HEAP32[i57 >> 2] = i52;
     HEAP32[i6 >> 2] = i96;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i32, i5, i6);
     i52 = HEAP32[i57 >> 2] | 0;
     do {
      if ((i52 | 0) != 0) {
       i57 = i52 + 8 | 0;
       i54 = i57 | 0;
       i53 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
       HEAP32[i54 >> 2] = i53;
       if ((i53 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
      }
     } while (0);
     i52 = i32 | 0;
     i60 = HEAP32[i52 >> 2] | 0;
     if ((i60 | 0) != 0) {
      i57 = i60 + 8 | 0;
      HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
     }
     i57 = HEAP32[i38 >> 2] | 0;
     HEAP32[i38 >> 2] = i60;
     do {
      if ((i57 | 0) != 0) {
       i60 = i57 + 8 | 0;
       i53 = i60 | 0;
       i54 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
       HEAP32[i53 >> 2] = i54;
       if ((i54 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
      }
     } while (0);
     HEAP32[i39 >> 2] = HEAP32[i32 + 4 >> 2];
     i57 = HEAP32[i32 + 8 >> 2] | 0;
     i60 = HEAP32[i43 >> 2] & -8 | i57 & 7;
     HEAP32[i43 >> 2] = i60;
     HEAP8[i42] = i60 & 255 & -9 | i57 & 8;
     i57 = HEAP32[i52 >> 2] | 0;
     do {
      if ((i57 | 0) != 0) {
       i60 = i57 + 8 | 0;
       i54 = i60 | 0;
       i53 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
       HEAP32[i54 >> 2] = i53;
       if ((i53 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
      }
     } while (0);
     i57 = HEAP32[i30 + 80 >> 2] | 0;
     if ((i57 | 0) == 0) {
      i52 = HEAP32[i30 + 88 >> 2] | 0;
      do {
       if ((i52 | 0) == 0) {
        i97 = 0;
       } else {
        if ((HEAP32[i52 + 16 >> 2] & 32 | 0) == 0) {
         i97 = HEAP32[i52 + 8 >> 2] | 0;
         break;
        } else {
         i97 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i52) | 0;
         break;
        }
       }
      } while (0);
      i98 = i97 + (HEAP32[i30 + 72 >> 2] << 1) | 0;
     } else {
      i98 = i57;
     }
     do {
      if ((HEAP16[i98 + (HEAP32[i30 + 4 >> 2] << 1) >> 1] | 0) == 10) {
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i33, i14, 1);
       i52 = i66 + 12 | 0;
       i60 = HEAP32[i52 >> 2] | 0;
       if ((i60 | 0) > -1) {
        i99 = i60;
       } else {
        i60 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i66 + 16 >> 2] | 0) | 0) + 1 | 0;
        HEAP32[i52 >> 2] = i60;
        i99 = i60;
       }
       i60 = HEAP32[i66 + 8 >> 2] | 0;
       if ((i60 | 0) == 0) {
        i100 = i99;
       } else {
        i53 = i60 + 8 | 0;
        HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
        i100 = HEAP32[i52 >> 2] | 0;
       }
       i52 = i10 | 0;
       HEAP32[i52 >> 2] = i60;
       HEAP32[i11 >> 2] = i100;
       __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i35, i10, i11);
       i60 = HEAP32[i52 >> 2] | 0;
       do {
        if ((i60 | 0) != 0) {
         i52 = i60 + 8 | 0;
         i53 = i52 | 0;
         i54 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
         HEAP32[i53 >> 2] = i54;
         if ((i54 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
        }
       } while (0);
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i34, i35, 1);
       i60 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i33, i34) | 0;
       i52 = HEAP32[i34 >> 2] | 0;
       do {
        if ((i52 | 0) != 0) {
         i54 = i52 + 8 | 0;
         i53 = i54 | 0;
         i58 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
         HEAP32[i53 >> 2] = i58;
         if ((i58 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
        }
       } while (0);
       i52 = HEAP32[i35 >> 2] | 0;
       do {
        if ((i52 | 0) != 0) {
         i54 = i52 + 8 | 0;
         i58 = i54 | 0;
         i53 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
         HEAP32[i58 >> 2] = i53;
         if ((i53 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
        }
       } while (0);
       do {
        if (i60) {
         __ZN7WebCore17CharacterIterator7advanceEi(i30, 1);
         __ZNK7WebCore17CharacterIterator5rangeEv(i37, i30);
         i52 = i37 | 0;
         i54 = HEAP32[i52 >> 2] | 0;
         i53 = i54 + 12 | 0;
         i58 = HEAP32[i53 >> 2] | 0;
         if ((i58 | 0) > -1) {
          i101 = i58;
         } else {
          i58 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i54 + 16 >> 2] | 0) | 0) + 1 | 0;
          HEAP32[i53 >> 2] = i58;
          i101 = i58;
         }
         i58 = HEAP32[i54 + 8 >> 2] | 0;
         if ((i58 | 0) == 0) {
          i102 = i101;
         } else {
          i54 = i58 + 8 | 0;
          HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
          i102 = HEAP32[i53 >> 2] | 0;
         }
         i53 = i12 | 0;
         HEAP32[i53 >> 2] = i58;
         HEAP32[i13 >> 2] = i102;
         __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i36, i12, i13);
         i58 = HEAP32[i53 >> 2] | 0;
         do {
          if ((i58 | 0) != 0) {
           i53 = i58 + 8 | 0;
           i54 = i53 | 0;
           i45 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
           HEAP32[i54 >> 2] = i45;
           if ((i45 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
          }
         } while (0);
         i58 = i36 | 0;
         i65 = HEAP32[i58 >> 2] | 0;
         if ((i65 | 0) != 0) {
          i53 = i65 + 8 | 0;
          HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
         }
         i53 = HEAP32[i38 >> 2] | 0;
         HEAP32[i38 >> 2] = i65;
         do {
          if ((i53 | 0) != 0) {
           i65 = i53 + 8 | 0;
           i45 = i65 | 0;
           i54 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
           HEAP32[i45 >> 2] = i54;
           if ((i54 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i65 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i65 - 8 | 0);
          }
         } while (0);
         HEAP32[i39 >> 2] = HEAP32[i36 + 4 >> 2];
         i53 = HEAP32[i36 + 8 >> 2] | 0;
         i65 = HEAP32[i43 >> 2] & -8 | i53 & 7;
         HEAP32[i43 >> 2] = i65;
         HEAP8[i42] = i65 & 255 & -9 | i53 & 8;
         i53 = HEAP32[i58 >> 2] | 0;
         do {
          if ((i53 | 0) != 0) {
           i65 = i53 + 8 | 0;
           i54 = i65 | 0;
           i45 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
           HEAP32[i54 >> 2] = i45;
           if ((i45 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i65 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i65 - 8 | 0);
          }
         } while (0);
         i53 = HEAP32[i52 >> 2] | 0;
         if ((i53 | 0) == 0) {
          break;
         }
         i58 = i53 | 0;
         i65 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
         if ((i65 | 0) == 0) {
          __ZN7WebCore5RangeD1Ev(i53);
          __ZN3WTF8fastFreeEPv(i53);
          break;
         } else {
          HEAP32[i58 >> 2] = i65;
          break;
         }
        }
       } while (0);
       i60 = HEAP32[i33 >> 2] | 0;
       if ((i60 | 0) == 0) {
        break;
       }
       i65 = i60 + 8 | 0;
       i60 = i65 | 0;
       i58 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
       HEAP32[i60 >> 2] = i58;
       if ((i58 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i65 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i65 - 8 | 0);
      }
     } while (0);
     do {
      if ((i66 | 0) != 0) {
       i57 = i66 | 0;
       i65 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
       if ((i65 | 0) == 0) {
        __ZN7WebCore5RangeD1Ev(i66);
        __ZN3WTF8fastFreeEPv(i66);
        break;
       } else {
        HEAP32[i57 >> 2] = i65;
        break;
       }
      }
     } while (0);
     __ZN7WebCore12TextIteratorD1Ev(i30 + 12 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i14, 0);
   __ZN7WebCore12TextIteratorD1Ev(i25);
   if ((HEAP32[i48 >> 2] | 0) != 0) {
    HEAP32[i48 >> 2] = 0;
   }
   i66 = HEAP32[i46 >> 2] | 0;
   if (!((i44 | 0) == (i66 | 0) | (i66 | 0) == 0)) {
    HEAP32[i46 >> 2] = 0;
    HEAP32[i47 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i66);
   }
   i66 = HEAP32[i74 >> 2] | 0;
   do {
    if ((i66 | 0) != 0) {
     i65 = i66 + 8 | 0;
     i57 = i65 | 0;
     i58 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
     HEAP32[i57 >> 2] = i58;
     if ((i58 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i65 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i65 - 8 | 0);
    }
   } while (0);
   if ((i41 | 0) == 0) {
    break;
   }
   i66 = i41 | 0;
   i47 = (HEAP32[i66 >> 2] | 0) - 1 | 0;
   if ((i47 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i41);
    __ZN3WTF8fastFreeEPv(i41);
    break;
   } else {
    HEAP32[i66 >> 2] = i47;
    break;
   }
  }
 } while (0);
 i74 = HEAP32[i38 >> 2] | 0;
 if ((i74 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i38 = i74 + 8 | 0;
 i74 = i38 | 0;
 i25 = (HEAP32[i74 >> 2] | 0) - 1 | 0;
 HEAP32[i74 >> 2] = i25;
 if ((i25 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL18visualWordPositionERKNS_15VisiblePositionENS_23CursorMovementDirectionEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 2240 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 40 | 0;
 i9 = i5 + 56 | 0;
 i10 = i5 + 80 | 0;
 i11 = i5 + 96 | 0;
 i12 = i5 + 112 | 0;
 i13 = i5 + 128 | 0;
 i14 = i5 + 2192 | 0;
 i15 = i5 + 2208 | 0;
 i16 = i5 + 2216 | 0;
 i17 = i5 + 2224 | 0;
 i18 = i2 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 if ((i19 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i20 = i1 + 8 | 0;
  i21 = i20;
  i22 = HEAP32[i21 >> 2] | 0;
  HEAP32[i21 >> 2] = i22 & -8;
  HEAP8[i20] = i22 & 255 & -16;
  HEAP32[i1 + 12 >> 2] = 1;
  STACKTOP = i5;
  return;
 }
 i22 = i10 | 0;
 HEAP32[i22 >> 2] = i19;
 i20 = i19 + 8 | 0;
 HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
 i20 = i2 + 4 | 0;
 HEAP32[i10 + 4 >> 2] = HEAP32[i20 >> 2];
 i19 = i2 + 8 | 0;
 i21 = HEAP32[i19 >> 2] | 0;
 i23 = i10 + 8 | 0;
 i24 = i23;
 i25 = HEAP32[i24 >> 2] & -8 | i21 & 7;
 HEAP32[i24 >> 2] = i25;
 HEAP8[i23] = i25 & 255 & -9 | i21 & 8;
 i21 = __ZN7WebCore25directionOfEnclosingBlockERKNS_8PositionE(i10) | 0;
 i10 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i22 = i10 + 8 | 0;
   i25 = i22 | 0;
   i23 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   HEAP32[i25 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
  }
 } while (0);
 i10 = i11 | 0;
 i22 = HEAP32[i18 >> 2] | 0;
 HEAP32[i10 >> 2] = i22;
 if ((i22 | 0) != 0) {
  i18 = i22 + 8 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
 }
 i18 = i11 + 4 | 0;
 HEAP32[i18 >> 2] = HEAP32[i20 >> 2];
 i20 = HEAP32[i19 >> 2] | 0;
 i19 = i11 + 8 | 0;
 i22 = i19;
 i23 = HEAP32[i22 >> 2] & -8 | i20 & 7;
 HEAP32[i22 >> 2] = i23;
 HEAP8[i19] = i23 & 255 & -9 | i20 & 8;
 i20 = i11 + 12 | 0;
 HEAP32[i20 >> 2] = HEAP32[i2 + 12 >> 2];
 _memset(i12 | 0, 0, 16) | 0;
 i23 = i13 + 12 | 0;
 i25 = i13 | 0;
 HEAP32[i25 >> 2] = i23;
 i24 = i13 + 4 | 0;
 HEAP32[i24 >> 2] = 1024;
 i26 = i13 + 8 | 0;
 HEAP32[i26 >> 2] = 0;
 i13 = (i3 | 0) == 1;
 i27 = i1 | 0;
 i28 = i1 + 4 | 0;
 i29 = i1 + 8 | 0;
 i30 = i29;
 i31 = i1 + 12 | 0;
 i1 = i14 | 0;
 i32 = i17 | 0;
 i33 = i17 + 4 | 0;
 i34 = i14 + 4 | 0;
 i35 = i14 + 8 | 0;
 i36 = i17 + 8 | 0;
 i37 = i36;
 i38 = i8 | 0;
 i39 = i9 + 4 | 0;
 i40 = i12 + 12 | 0;
 i41 = i12 + 4 | 0;
 i42 = (i3 | 0) == 0;
 i3 = i13 ^ 1;
 i43 = i4 ^ 1;
 i44 = i14 + 12 | 0;
 i45 = i6 | 0;
 i46 = i7 + 4 | 0;
 i47 = 0;
 i48 = 0;
 L13 : while (1) {
  if (i13) {
   __ZNK7WebCore15VisiblePosition5rightEb(i14, i11, 1);
  } else {
   __ZNK7WebCore15VisiblePosition4leftEb(i14, i11, 1);
  }
  do {
   if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i14, i11) | 0) {
    i49 = 15;
   } else {
    i50 = HEAP32[i1 >> 2] | 0;
    if ((i50 | 0) == 0) {
     i49 = 15;
     break;
    }
    HEAP32[i32 >> 2] = i50;
    i51 = i50 + 8 | 0;
    HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
    HEAP32[i33 >> 2] = HEAP32[i34 >> 2];
    i51 = HEAP32[i35 >> 2] | 0;
    i50 = HEAP32[i37 >> 2] & -8 | i51 & 7;
    HEAP32[i37 >> 2] = i50;
    HEAP8[i36] = i50 & 255 & -9 | i51 & 8;
    __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityERPNS_9InlineBoxERi(i17, 0, i15, i16);
    i51 = HEAP32[i32 >> 2] | 0;
    do {
     if ((i51 | 0) != 0) {
      i50 = i51 + 8 | 0;
      i52 = i50 | 0;
      i53 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
      HEAP32[i52 >> 2] = i53;
      if ((i53 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
     }
    } while (0);
    i51 = HEAP32[i15 >> 2] | 0;
    if ((i51 | 0) == 0) {
     i54 = i47;
     i55 = i48;
     i56 = 3;
     break;
    }
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i51 >> 2] | 0) + 44 >> 2] & 1](i51) | 0)) {
     i51 = HEAP32[i1 >> 2] | 0;
     if ((i51 | 0) != 0) {
      i50 = i51 + 8 | 0;
      HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
     }
     i50 = HEAP32[i10 >> 2] | 0;
     HEAP32[i10 >> 2] = i51;
     do {
      if ((i50 | 0) != 0) {
       i51 = i50 + 8 | 0;
       i53 = i51 | 0;
       i52 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
       HEAP32[i53 >> 2] = i52;
       if ((i52 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
      }
     } while (0);
     HEAP32[i18 >> 2] = HEAP32[i34 >> 2];
     i50 = HEAP32[i35 >> 2] | 0;
     i51 = HEAP32[i22 >> 2] & -8 | i50 & 7;
     HEAP32[i22 >> 2] = i51;
     HEAP8[i19] = i51 & 255 & -9 | i50 & 8;
     HEAP32[i20 >> 2] = HEAP32[i44 >> 2];
     i54 = i47;
     i55 = i48;
     i56 = 2;
     break;
    }
    i50 = HEAP32[i15 >> 2] | 0;
    i51 = i50;
    i52 = (i47 | 0) == (i50 | 0);
    i53 = HEAP32[i16 >> 2] | 0;
    do {
     if ((i53 | 0) == (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i50 >> 2] | 0) + 88 >> 2] & 1](i50) | 0)) {
      i57 = __ZN7WebCore31CachedLogicallyOrderedLeafBoxes26previousTextOrLineBreakBoxEPKNS_13RootInlineBoxEPKNS_13InlineTextBoxE(i12, __ZNK7WebCore9InlineBox4rootEv(i50) | 0, i51) | 0;
      L41 : do {
       if ((i57 | 0) == 0) {
        i58 = __ZN7WebCore31CachedLogicallyOrderedLeafBoxes26previousTextOrLineBreakBoxEPKNS_13RootInlineBoxEPKNS_13InlineTextBoxE(i12, HEAP32[(__ZNK7WebCore9InlineBox4rootEv(i50) | 0) + 48 >> 2] | 0, 0) | 0;
        if ((i58 | 0) == 0) {
         i59 = 0;
         i60 = i50;
         i61 = 0;
        } else {
         i62 = i58;
         i63 = 0;
         break;
        }
        while (1) {
         i58 = HEAP32[i60 + 16 >> 2] | 0;
         i64 = i58 + 20 | 0;
         i65 = HEAP32[i64 >> 2] | 0;
         do {
          if ((i65 & 128 | 0) == 0) {
           i66 = HEAP32[i58 + 4 >> 2] | 0;
           if ((i66 | 0) == 0) {
            i67 = i65;
            break;
           }
           if ((HEAP32[i66 + 12 >> 2] & 1048580 | 0) != 1048580) {
            i67 = i65;
            break;
           }
           if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i66 >> 2] | 0) + 232 >> 2] & 1](i66) | 0) != 0) {
            i62 = 0;
            i63 = i61;
            break L41;
           }
           i67 = HEAP32[i64 >> 2] | 0;
          } else {
           i67 = i65;
          }
         } while (0);
         if ((i67 & 128 | 0) != 0) {
          i62 = 0;
          i63 = i61;
          break L41;
         }
         i65 = HEAP32[i58 + 4 >> 2] | 0;
         if ((i65 | 0) == 0) {
          i62 = 0;
          i63 = i61;
          break L41;
         }
         __ZN7WebCoreL38previousRootInlineBoxCandidatePositionEPNS_4NodeERKNS_15VisiblePositionENS_12EditableTypeE(i8, i65, i2, 0);
         if ((HEAP32[i38 >> 2] | 0) == 0) {
          i62 = 0;
          i63 = i61;
          break L41;
         }
         __ZN7WebCore16RenderedPositionC1ERKNS_8PositionENS_9EAffinityE(i9, i8, 1);
         i65 = HEAP32[i39 >> 2] | 0;
         do {
          if ((i65 | 0) == 0) {
           i68 = i59;
           i69 = 3;
           i70 = i60;
           i71 = i61;
          } else {
           i64 = __ZN7WebCore9InlineBox4rootEv(i65) | 0;
           if ((i64 | 0) == 0) {
            i68 = i59;
            i69 = 3;
            i70 = i60;
            i71 = i61;
            break;
           }
           i66 = __ZN7WebCore31CachedLogicallyOrderedLeafBoxes26previousTextOrLineBreakBoxEPKNS_13RootInlineBoxEPKNS_13InlineTextBoxE(i12, i64, 0) | 0;
           if ((i66 | 0) != 0) {
            i68 = i66;
            i69 = 1;
            i70 = i60;
            i71 = 1;
            break;
           }
           if ((HEAP32[i40 >> 2] | 0) == 0) {
            i68 = i59;
            i69 = 3;
            i70 = i60;
            i71 = i61;
            break;
           }
           i68 = i59;
           i69 = 0;
           i70 = HEAP32[HEAP32[i41 >> 2] >> 2] | 0;
           i71 = i61;
          }
         } while (0);
         i65 = HEAP32[i38 >> 2] | 0;
         do {
          if ((i65 | 0) != 0) {
           i58 = i65 + 8 | 0;
           i66 = i58 | 0;
           i64 = (HEAP32[i66 >> 2] | 0) - 1 | 0;
           HEAP32[i66 >> 2] = i64;
           if ((i64 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
          }
         } while (0);
         if ((i69 | 0) == 1) {
          break;
         } else if ((i69 | 0) == 3) {
          i62 = 0;
          i63 = i71;
          break L41;
         } else {
          i59 = i68;
          i60 = i70;
          i61 = i71;
         }
        }
        i62 = i68;
        i63 = i71;
       } else {
        i62 = i57;
        i63 = 0;
       }
      } while (0);
      do {
       if ((HEAP32[i24 >> 2] | 0) != 0) {
        if ((HEAP32[i26 >> 2] | 0) != 0) {
         HEAP32[i26 >> 2] = 0;
        }
        i57 = HEAP32[i25 >> 2] | 0;
        if ((i23 | 0) == (i57 | 0) | (i57 | 0) == 0) {
         i72 = i57;
        } else {
         HEAP32[i25 >> 2] = 0;
         HEAP32[i24 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i57);
         i72 = HEAP32[i25 >> 2] | 0;
        }
        if ((i72 | 0) != 0) {
         break;
        }
        HEAP32[i25 >> 2] = i23;
        HEAP32[i24 >> 2] = 1024;
       }
      } while (0);
      do {
       if ((i62 | 0) == 0) {
        i73 = 0;
       } else {
        if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i62 >> 2] | 0) + 44 >> 2] & 1](i62) | 0)) {
         i73 = 0;
         break;
        }
        i57 = HEAP16[i62 + 48 >> 1] | 0;
        i65 = i57 & 65535;
        i58 = HEAP32[(HEAP32[i62 + 16 >> 2] | 0) + 44 >> 2] | 0;
        if ((HEAP32[i58 + 16 >> 2] & 32 | 0) == 0) {
         i74 = HEAP32[i58 + 8 >> 2] | 0;
        } else {
         i74 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i58) | 0;
        }
        i58 = HEAP32[i62 + 44 >> 2] | 0;
        i64 = HEAP32[i26 >> 2] | 0;
        i66 = i64 + i65 | 0;
        i75 = HEAP32[i24 >> 2] | 0;
        if (i66 >>> 0 > i75 >>> 0) {
         i76 = i75 + 1 + (i75 >>> 2) | 0;
         i77 = i76 >>> 0 > 16 >>> 0 ? i76 : 16;
         i76 = i77 >>> 0 > i66 >>> 0 ? i77 : i66;
         do {
          if (i75 >>> 0 < i76 >>> 0) {
           i77 = HEAP32[i25 >> 2] | 0;
           if (i76 >>> 0 > 1024 >>> 0) {
            if ((i76 | 0) < 0) {
             i49 = 67;
             break L13;
            }
            i78 = __ZN3WTF18fastMallocGoodSizeEj(i76 << 1) | 0;
            HEAP32[i24 >> 2] = i78 >>> 1;
            i79 = __ZN3WTF10fastMallocEj(i78) | 0;
            HEAP32[i25 >> 2] = i79;
            i80 = i79;
           } else {
            HEAP32[i25 >> 2] = i23;
            HEAP32[i24 >> 2] = 1024;
            i80 = i23;
           }
           i79 = i77;
           _memcpy(i80 | 0, i79 | 0, i64 << 1) | 0;
           if ((i23 | 0) == (i77 | 0) | (i77 | 0) == 0) {
            break;
           }
           if ((HEAP32[i25 >> 2] | 0) == (i77 | 0)) {
            HEAP32[i25 >> 2] = 0;
            HEAP32[i24 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i79);
          }
         } while (0);
         i81 = HEAP32[i26 >> 2] | 0;
        } else {
         i81 = i64;
        }
        if (i66 >>> 0 < i81 >>> 0) {
         i49 = 76;
         break L13;
        }
        i76 = HEAP32[i25 >> 2] | 0;
        if (i57 << 16 >> 16 != 0) {
         i75 = 0;
         while (1) {
          HEAP16[i76 + (i75 + i81 << 1) >> 1] = HEAP16[i74 + (i75 + i58 << 1) >> 1] | 0;
          i75 = i75 + 1 | 0;
          if (i75 >>> 0 >= i65 >>> 0) {
           break;
          }
         }
        }
        HEAP32[i26 >> 2] = i66;
        i73 = i65;
       }
      } while (0);
      i75 = HEAP32[(HEAP32[i50 + 16 >> 2] | 0) + 44 >> 2] | 0;
      if ((HEAP32[i75 + 16 >> 2] & 32 | 0) == 0) {
       i82 = HEAP32[i75 + 8 >> 2] | 0;
      } else {
       i82 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i75) | 0;
      }
      i75 = HEAP32[i50 + 44 >> 2] | 0;
      i58 = i50 + 48 | 0;
      i76 = HEAP16[i58 >> 1] | 0;
      i57 = i76 & 65535;
      i64 = HEAP32[i26 >> 2] | 0;
      i79 = i64 + i57 | 0;
      i77 = HEAP32[i24 >> 2] | 0;
      if (i79 >>> 0 > i77 >>> 0) {
       i78 = i77 + 1 + (i77 >>> 2) | 0;
       i83 = i78 >>> 0 > 16 >>> 0 ? i78 : 16;
       i78 = i83 >>> 0 > i79 >>> 0 ? i83 : i79;
       do {
        if (i77 >>> 0 < i78 >>> 0) {
         i83 = HEAP32[i25 >> 2] | 0;
         if (i78 >>> 0 > 1024 >>> 0) {
          if ((i78 | 0) < 0) {
           i49 = 87;
           break L13;
          }
          i84 = __ZN3WTF18fastMallocGoodSizeEj(i78 << 1) | 0;
          HEAP32[i24 >> 2] = i84 >>> 1;
          i85 = __ZN3WTF10fastMallocEj(i84) | 0;
          HEAP32[i25 >> 2] = i85;
          i86 = i85;
         } else {
          HEAP32[i25 >> 2] = i23;
          HEAP32[i24 >> 2] = 1024;
          i86 = i23;
         }
         i85 = i83;
         _memcpy(i86 | 0, i85 | 0, i64 << 1) | 0;
         if ((i23 | 0) == (i83 | 0) | (i83 | 0) == 0) {
          break;
         }
         if ((HEAP32[i25 >> 2] | 0) == (i83 | 0)) {
          HEAP32[i25 >> 2] = 0;
          HEAP32[i24 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i85);
        }
       } while (0);
       i87 = HEAP32[i26 >> 2] | 0;
      } else {
       i87 = i64;
      }
      if (i79 >>> 0 < i87 >>> 0) {
       i49 = 96;
       break L13;
      }
      i78 = HEAP32[i25 >> 2] | 0;
      if (i76 << 16 >> 16 == 0) {
       i88 = i78;
      } else {
       i77 = 0;
       while (1) {
        HEAP16[i78 + (i77 + i87 << 1) >> 1] = HEAP16[i82 + (i77 + i75 << 1) >> 1] | 0;
        i77 = i77 + 1 | 0;
        if (i77 >>> 0 >= i57 >>> 0) {
         break;
        }
       }
       i88 = HEAP32[i25 >> 2] | 0;
      }
      HEAP32[i26 >> 2] = i79;
      i89 = i47;
      i90 = __ZN7WebCore17wordBreakIteratorEPKti(i88, (HEAPU16[i58 >> 1] | 0) + i73 | 0) | 0;
      i91 = 0;
      i92 = i63;
      i93 = i73;
     } else {
      i57 = HEAP32[i16 >> 2] | 0;
      i77 = HEAP32[i15 >> 2] | 0;
      if ((i57 | 0) != (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i77 >> 2] | 0) + 92 >> 2] & 1](i77) | 0)) {
       if (i52) {
        i89 = i47;
        i90 = i48;
        i91 = 0;
        i92 = 0;
        i93 = 0;
        break;
       }
       i77 = HEAP32[(HEAP32[i50 + 16 >> 2] | 0) + 44 >> 2] | 0;
       if ((HEAP32[i77 + 16 >> 2] & 32 | 0) == 0) {
        i94 = HEAP32[i77 + 8 >> 2] | 0;
       } else {
        i94 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i77) | 0;
       }
       i77 = __ZN7WebCore17wordBreakIteratorEPKti(i94 + (HEAP32[i50 + 44 >> 2] << 1) | 0, HEAPU16[i50 + 48 >> 1] | 0) | 0;
       i89 = HEAP32[i15 >> 2] | 0;
       i90 = i77;
       i91 = 0;
       i92 = 0;
       i93 = 0;
       break;
      }
      i77 = __ZN7WebCore31CachedLogicallyOrderedLeafBoxes22nextTextOrLineBreakBoxEPKNS_13RootInlineBoxEPKNS_13InlineTextBoxE(i12, __ZNK7WebCore9InlineBox4rootEv(i50) | 0, i51) | 0;
      L139 : do {
       if ((i77 | 0) == 0) {
        i57 = __ZN7WebCore31CachedLogicallyOrderedLeafBoxes22nextTextOrLineBreakBoxEPKNS_13RootInlineBoxEPKNS_13InlineTextBoxE(i12, HEAP32[(__ZNK7WebCore9InlineBox4rootEv(i50) | 0) + 52 >> 2] | 0, 0) | 0;
        if ((i57 | 0) == 0) {
         i95 = 0;
         i96 = i50;
         i97 = 0;
        } else {
         i98 = i57;
         i99 = 0;
         break;
        }
        while (1) {
         i57 = HEAP32[i96 + 16 >> 2] | 0;
         i75 = i57 + 20 | 0;
         i78 = HEAP32[i75 >> 2] | 0;
         do {
          if ((i78 & 128 | 0) == 0) {
           i76 = HEAP32[i57 + 4 >> 2] | 0;
           if ((i76 | 0) == 0) {
            i100 = i78;
            break;
           }
           if ((HEAP32[i76 + 12 >> 2] & 1048580 | 0) != 1048580) {
            i100 = i78;
            break;
           }
           if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i76 >> 2] | 0) + 232 >> 2] & 1](i76) | 0) != 0) {
            i98 = 0;
            i99 = i97;
            break L139;
           }
           i100 = HEAP32[i75 >> 2] | 0;
          } else {
           i100 = i78;
          }
         } while (0);
         if ((i100 & 128 | 0) != 0) {
          i98 = 0;
          i99 = i97;
          break L139;
         }
         i78 = HEAP32[i57 + 4 >> 2] | 0;
         if ((i78 | 0) == 0) {
          i98 = 0;
          i99 = i97;
          break L139;
         }
         __ZN7WebCoreL34nextRootInlineBoxCandidatePositionEPNS_4NodeERKNS_15VisiblePositionENS_12EditableTypeE(i6, i78, i2, 0);
         if ((HEAP32[i45 >> 2] | 0) == 0) {
          i98 = 0;
          i99 = i97;
          break L139;
         }
         __ZN7WebCore16RenderedPositionC1ERKNS_8PositionENS_9EAffinityE(i7, i6, 1);
         i78 = HEAP32[i46 >> 2] | 0;
         do {
          if ((i78 | 0) == 0) {
           i101 = i95;
           i102 = 3;
           i103 = i96;
           i104 = i97;
          } else {
           i75 = __ZN7WebCore9InlineBox4rootEv(i78) | 0;
           if ((i75 | 0) == 0) {
            i101 = i95;
            i102 = 3;
            i103 = i96;
            i104 = i97;
            break;
           }
           i76 = __ZN7WebCore31CachedLogicallyOrderedLeafBoxes22nextTextOrLineBreakBoxEPKNS_13RootInlineBoxEPKNS_13InlineTextBoxE(i12, i75, 0) | 0;
           if ((i76 | 0) != 0) {
            i101 = i76;
            i102 = 1;
            i103 = i96;
            i104 = 1;
            break;
           }
           if ((HEAP32[i40 >> 2] | 0) == 0) {
            i101 = i95;
            i102 = 3;
            i103 = i96;
            i104 = i97;
            break;
           }
           i101 = i95;
           i102 = 0;
           i103 = HEAP32[HEAP32[i41 >> 2] >> 2] | 0;
           i104 = i97;
          }
         } while (0);
         i78 = HEAP32[i45 >> 2] | 0;
         do {
          if ((i78 | 0) != 0) {
           i57 = i78 + 8 | 0;
           i76 = i57 | 0;
           i75 = (HEAP32[i76 >> 2] | 0) - 1 | 0;
           HEAP32[i76 >> 2] = i75;
           if ((i75 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
          }
         } while (0);
         if ((i102 | 0) == 1) {
          break;
         } else if ((i102 | 0) == 3) {
          i98 = 0;
          i99 = i104;
          break L139;
         } else {
          i95 = i101;
          i96 = i103;
          i97 = i104;
         }
        }
        i98 = i101;
        i99 = i104;
       } else {
        i98 = i77;
        i99 = 0;
       }
      } while (0);
      do {
       if ((HEAP32[i24 >> 2] | 0) != 0) {
        if ((HEAP32[i26 >> 2] | 0) != 0) {
         HEAP32[i26 >> 2] = 0;
        }
        i77 = HEAP32[i25 >> 2] | 0;
        if ((i23 | 0) == (i77 | 0) | (i77 | 0) == 0) {
         i105 = i77;
        } else {
         HEAP32[i25 >> 2] = 0;
         HEAP32[i24 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i77);
         i105 = HEAP32[i25 >> 2] | 0;
        }
        if ((i105 | 0) != 0) {
         break;
        }
        HEAP32[i25 >> 2] = i23;
        HEAP32[i24 >> 2] = 1024;
       }
      } while (0);
      i77 = HEAP32[(HEAP32[i50 + 16 >> 2] | 0) + 44 >> 2] | 0;
      if ((HEAP32[i77 + 16 >> 2] & 32 | 0) == 0) {
       i106 = HEAP32[i77 + 8 >> 2] | 0;
      } else {
       i106 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i77) | 0;
      }
      i77 = HEAP32[i50 + 44 >> 2] | 0;
      i58 = i50 + 48 | 0;
      i79 = HEAP16[i58 >> 1] | 0;
      i65 = i79 & 65535;
      i66 = HEAP32[i26 >> 2] | 0;
      i78 = i66 + i65 | 0;
      i57 = HEAP32[i24 >> 2] | 0;
      if (i78 >>> 0 > i57 >>> 0) {
       i75 = i57 + 1 + (i57 >>> 2) | 0;
       i76 = i75 >>> 0 > 16 >>> 0 ? i75 : 16;
       i75 = i76 >>> 0 > i78 >>> 0 ? i76 : i78;
       do {
        if (i57 >>> 0 < i75 >>> 0) {
         i76 = HEAP32[i25 >> 2] | 0;
         if (i75 >>> 0 > 1024 >>> 0) {
          if ((i75 | 0) < 0) {
           i49 = 137;
           break L13;
          }
          i64 = __ZN3WTF18fastMallocGoodSizeEj(i75 << 1) | 0;
          HEAP32[i24 >> 2] = i64 >>> 1;
          i85 = __ZN3WTF10fastMallocEj(i64) | 0;
          HEAP32[i25 >> 2] = i85;
          i107 = i85;
         } else {
          HEAP32[i25 >> 2] = i23;
          HEAP32[i24 >> 2] = 1024;
          i107 = i23;
         }
         i85 = i76;
         _memcpy(i107 | 0, i85 | 0, i66 << 1) | 0;
         if ((i23 | 0) == (i76 | 0) | (i76 | 0) == 0) {
          break;
         }
         if ((HEAP32[i25 >> 2] | 0) == (i76 | 0)) {
          HEAP32[i25 >> 2] = 0;
          HEAP32[i24 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i85);
        }
       } while (0);
       i108 = HEAP32[i26 >> 2] | 0;
      } else {
       i108 = i66;
      }
      if (i78 >>> 0 < i108 >>> 0) {
       i49 = 146;
       break L13;
      }
      i75 = HEAP32[i25 >> 2] | 0;
      if (i79 << 16 >> 16 != 0) {
       i57 = 0;
       while (1) {
        HEAP16[i75 + (i57 + i108 << 1) >> 1] = HEAP16[i106 + (i57 + i77 << 1) >> 1] | 0;
        i57 = i57 + 1 | 0;
        if (i57 >>> 0 >= i65 >>> 0) {
         break;
        }
       }
      }
      HEAP32[i26 >> 2] = i78;
      i65 = HEAPU16[i58 >> 1] | 0;
      do {
       if ((i98 | 0) == 0) {
        i109 = i65;
       } else {
        if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i98 >> 2] | 0) + 44 >> 2] & 1](i98) | 0)) {
         i109 = i65;
         break;
        }
        i57 = HEAP32[(HEAP32[i98 + 16 >> 2] | 0) + 44 >> 2] | 0;
        if ((HEAP32[i57 + 16 >> 2] & 32 | 0) == 0) {
         i110 = HEAP32[i57 + 8 >> 2] | 0;
        } else {
         i110 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i57) | 0;
        }
        i57 = HEAP32[i98 + 44 >> 2] | 0;
        i77 = i98 + 48 | 0;
        i75 = HEAP16[i77 >> 1] | 0;
        i79 = i75 & 65535;
        i66 = HEAP32[i26 >> 2] | 0;
        i85 = i66 + i79 | 0;
        i76 = HEAP32[i24 >> 2] | 0;
        if (i85 >>> 0 > i76 >>> 0) {
         i64 = i76 + 1 + (i76 >>> 2) | 0;
         i83 = i64 >>> 0 > 16 >>> 0 ? i64 : 16;
         i64 = i83 >>> 0 > i85 >>> 0 ? i83 : i85;
         do {
          if (i76 >>> 0 < i64 >>> 0) {
           i83 = HEAP32[i25 >> 2] | 0;
           if (i64 >>> 0 > 1024 >>> 0) {
            if ((i64 | 0) < 0) {
             i49 = 158;
             break L13;
            }
            i84 = __ZN3WTF18fastMallocGoodSizeEj(i64 << 1) | 0;
            HEAP32[i24 >> 2] = i84 >>> 1;
            i111 = __ZN3WTF10fastMallocEj(i84) | 0;
            HEAP32[i25 >> 2] = i111;
            i112 = i111;
           } else {
            HEAP32[i25 >> 2] = i23;
            HEAP32[i24 >> 2] = 1024;
            i112 = i23;
           }
           i111 = i83;
           _memcpy(i112 | 0, i111 | 0, i66 << 1) | 0;
           if ((i23 | 0) == (i83 | 0) | (i83 | 0) == 0) {
            break;
           }
           if ((HEAP32[i25 >> 2] | 0) == (i83 | 0)) {
            HEAP32[i25 >> 2] = 0;
            HEAP32[i24 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i111);
          }
         } while (0);
         i113 = HEAP32[i26 >> 2] | 0;
        } else {
         i113 = i66;
        }
        if (i85 >>> 0 < i113 >>> 0) {
         i49 = 167;
         break L13;
        }
        i64 = HEAP32[i25 >> 2] | 0;
        if (i75 << 16 >> 16 != 0) {
         i76 = 0;
         while (1) {
          HEAP16[i64 + (i76 + i113 << 1) >> 1] = HEAP16[i110 + (i76 + i57 << 1) >> 1] | 0;
          i76 = i76 + 1 | 0;
          if (i76 >>> 0 >= i79 >>> 0) {
           break;
          }
         }
        }
        HEAP32[i26 >> 2] = i85;
        i109 = (HEAPU16[i77 >> 1] | 0) + i65 | 0;
       }
      } while (0);
      i89 = i47;
      i90 = __ZN7WebCore17wordBreakIteratorEPKti(HEAP32[i25 >> 2] | 0, i109) | 0;
      i91 = i99;
      i92 = 0;
      i93 = 0;
     }
    } while (0);
    if ((i90 | 0) == 0) {
     i54 = i89;
     i55 = 0;
     i56 = 3;
     break;
    }
    __ZN7WebCore14textBreakFirstEPNS_17TextBreakIteratorE(i90) | 0;
    i51 = HEAP32[i16 >> 2] | 0;
    i52 = HEAP32[i50 + 44 >> 2] | 0;
    i53 = i51 - i52 + i93 | 0;
    i65 = HEAP32[(HEAP32[i15 >> 2] | 0) + 32 >> 2] | 0;
    i58 = i65 >>> 2 & 1;
    i78 = i58 ^ 1;
    if (i42) {
     i79 = (i58 | 0) == 0;
     if (i79 | i3) {
      i114 = i79;
     } else {
      i49 = 181;
     }
    } else {
     if (i13) {
      i49 = 181;
     } else {
      i114 = 0;
     }
    }
    if ((i49 | 0) == 181) {
     i49 = 0;
     i114 = (i65 & 4 | 0) != 0;
    }
    do {
     if ((i78 | 0) != (i21 | 0) | i43) {
      if (!(i4 | i114 ^ 1)) {
       i49 = 184;
       break;
      }
      if ((i51 | 0) == ((HEAPU16[i50 + 48 >> 1] | 0) + i52 | 0)) {
       i115 = (i91 & 1) != 0;
      } else {
       i115 = 0;
      }
      if (!(__ZN7WebCore11isTextBreakEPNS_17TextBreakIteratorEi(i90, i53) | 0 | i115)) {
       break;
      }
      if (__ZN7WebCore15isWordTextBreakEPNS_17TextBreakIteratorE(i90) | 0) {
       i49 = 192;
      }
     } else {
      i49 = 184;
     }
    } while (0);
    do {
     if ((i49 | 0) == 184) {
      i49 = 0;
      if ((i51 | 0) == (i52 | 0)) {
       if ((i92 & 1) == 0) {
        i49 = 186;
       }
      } else {
       i49 = 186;
      }
      if ((i49 | 0) == 186) {
       i49 = 0;
       if (!(__ZN7WebCore11isTextBreakEPNS_17TextBreakIteratorEi(i90, i53) | 0)) {
        break;
       }
      }
      __ZN7WebCore18textBreakFollowingEPNS_17TextBreakIteratorEi(i90, i53) | 0;
      if (__ZN7WebCore15isWordTextBreakEPNS_17TextBreakIteratorE(i90) | 0) {
       i49 = 192;
      }
     }
    } while (0);
    if ((i49 | 0) == 192) {
     i49 = 0;
     i53 = HEAP32[i1 >> 2] | 0;
     HEAP32[i1 >> 2] = 0;
     HEAP32[i27 >> 2] = i53;
     HEAP32[i28 >> 2] = HEAP32[i34 >> 2];
     i53 = HEAP32[i35 >> 2] | 0;
     i52 = HEAP32[i30 >> 2] & -8 | i53 & 7;
     HEAP32[i30 >> 2] = i52;
     HEAP8[i29] = i52 & 255 & -9 | i53 & 8;
     HEAP32[i31 >> 2] = HEAP32[i44 >> 2];
     i54 = i89;
     i55 = i90;
     i56 = 1;
     break;
    }
    i53 = HEAP32[i1 >> 2] | 0;
    if ((i53 | 0) != 0) {
     i52 = i53 + 8 | 0;
     HEAP32[i52 >> 2] = (HEAP32[i52 >> 2] | 0) + 1;
    }
    i52 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = i53;
    do {
     if ((i52 | 0) != 0) {
      i53 = i52 + 8 | 0;
      i51 = i53 | 0;
      i50 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
      HEAP32[i51 >> 2] = i50;
      if ((i50 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
     }
    } while (0);
    HEAP32[i18 >> 2] = HEAP32[i34 >> 2];
    i52 = HEAP32[i35 >> 2] | 0;
    i53 = HEAP32[i22 >> 2] & -8 | i52 & 7;
    HEAP32[i22 >> 2] = i53;
    HEAP8[i19] = i53 & 255 & -9 | i52 & 8;
    HEAP32[i20 >> 2] = HEAP32[i44 >> 2];
    i54 = i89;
    i55 = i90;
    i56 = 0;
   }
  } while (0);
  if ((i49 | 0) == 15) {
   i49 = 0;
   HEAP32[i27 >> 2] = 0;
   HEAP32[i28 >> 2] = 0;
   i52 = HEAP32[i30 >> 2] | 0;
   HEAP32[i30 >> 2] = i52 & -8;
   HEAP8[i29] = i52 & 255 & -16;
   HEAP32[i31 >> 2] = 1;
   i54 = i47;
   i55 = i48;
   i56 = 1;
  }
  i52 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i52 | 0) != 0) {
    i53 = i52 + 8 | 0;
    i50 = i53 | 0;
    i51 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
    HEAP32[i50 >> 2] = i51;
    if ((i51 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
   }
  } while (0);
  if ((i56 | 0) == 0 | (i56 | 0) == 2) {
   i47 = i54;
   i48 = i55;
  } else if ((i56 | 0) == 3) {
   i49 = 205;
   break;
  } else {
   break;
  }
 }
 if ((i49 | 0) == 67) {
  _WTFCrash();
 } else if ((i49 | 0) == 76) {
  _WTFCrash();
 } else if ((i49 | 0) == 87) {
  _WTFCrash();
 } else if ((i49 | 0) == 96) {
  _WTFCrash();
 } else if ((i49 | 0) == 137) {
  _WTFCrash();
 } else if ((i49 | 0) == 146) {
  _WTFCrash();
 } else if ((i49 | 0) == 158) {
  _WTFCrash();
 } else if ((i49 | 0) == 167) {
  _WTFCrash();
 } else if ((i49 | 0) == 205) {
  HEAP32[i27 >> 2] = 0;
  HEAP32[i28 >> 2] = 0;
  i28 = HEAP32[i30 >> 2] | 0;
  HEAP32[i30 >> 2] = i28 & -8;
  HEAP8[i29] = i28 & 255 & -16;
  HEAP32[i31 >> 2] = 1;
 }
 if ((HEAP32[i26 >> 2] | 0) != 0) {
  HEAP32[i26 >> 2] = 0;
 }
 i26 = HEAP32[i25 >> 2] | 0;
 if (!((i23 | 0) == (i26 | 0) | (i26 | 0) == 0)) {
  HEAP32[i25 >> 2] = 0;
  HEAP32[i24 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i26);
 }
 if ((HEAP32[i40 >> 2] | 0) != 0) {
  HEAP32[i40 >> 2] = 0;
 }
 i40 = HEAP32[i41 >> 2] | 0;
 if ((i40 | 0) != 0) {
  HEAP32[i41 >> 2] = 0;
  HEAP32[i12 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i40);
 }
 i40 = HEAP32[i10 >> 2] | 0;
 if ((i40 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i10 = i40 + 8 | 0;
 i40 = i10 | 0;
 i12 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
 HEAP32[i40 >> 2] = i12;
 if ((i12 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCoreL16previousBoundaryERKNS_15VisiblePositionEPFjPKtjjNS_33BoundarySearchContextAvailabilityERbE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 2672 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 72 | 0;
 i14 = i4 + 80 | 0;
 i15 = i4 + 88 | 0;
 i16 = i4 + 104 | 0;
 i17 = i4 + 120 | 0;
 i18 = i4 + 136 | 0;
 i19 = i4 + 152 | 0;
 i20 = i4 + 160 | 0;
 i21 = i4 + 2224 | 0;
 i22 = i4 + 2232 | 0;
 i23 = i4 + 2240 | 0;
 i24 = i4 + 2248 | 0;
 i25 = i4 + 2384 | 0;
 i26 = i4 + 2392 | 0;
 i27 = i4 + 2400 | 0;
 i28 = i4 + 2488 | 0;
 i29 = i4 + 2496 | 0;
 i30 = i4 + 2504 | 0;
 i31 = i4 + 2520 | 0;
 i32 = i4 + 2528 | 0;
 i33 = i4 + 2536 | 0;
 i34 = i4 + 2552 | 0;
 i35 = i4 + 2648 | 0;
 i36 = i4 + 2664 | 0;
 i37 = i15 | 0;
 i38 = HEAP32[i2 >> 2] | 0;
 HEAP32[i37 >> 2] = i38;
 if ((i38 | 0) == 0) {
  i39 = i15 + 8 | 0;
  i40 = 0;
  i41 = i39;
  i42 = i39;
 } else {
  i39 = i38 + 8 | 0;
  HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
  i39 = i15 + 8 | 0;
  i38 = i39;
  i40 = HEAP32[i38 >> 2] & -8;
  i41 = i39;
  i42 = i38;
 }
 i38 = i15 + 4 | 0;
 HEAP32[i38 >> 2] = HEAP32[i2 + 4 >> 2];
 i39 = HEAP32[i2 + 8 >> 2] | 0;
 i43 = i40 | i39 & 7;
 HEAP32[i42 >> 2] = i43;
 HEAP8[i41] = i43 & 255 & -9 | i39 & 8;
 i39 = __ZNK7WebCore8Position21parentEditingBoundaryEv(i15) | 0;
 do {
  if ((i39 | 0) == 0) {
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   i43 = i1 + 8 | 0;
   i41 = i43;
   i40 = HEAP32[i41 >> 2] | 0;
   HEAP32[i41 >> 2] = i40 & -8;
   HEAP8[i43] = i40 & 255 & -16;
   HEAP32[i1 + 12 >> 2] = 1;
  } else {
   i40 = HEAP32[(HEAP32[i39 + 20 >> 2] | 0) + 8 >> 2] | 0;
   i43 = i39 + 8 | 0;
   HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
   i43 = i13 | 0;
   HEAP32[i43 >> 2] = i39;
   HEAP32[i14 >> 2] = 0;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i17, i13, i14);
   i41 = HEAP32[i43 >> 2] | 0;
   do {
    if ((i41 | 0) != 0) {
     i43 = i41 + 8 | 0;
     i44 = i43 | 0;
     i45 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
     HEAP32[i44 >> 2] = i45;
     if ((i45 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
    }
   } while (0);
   __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i16, i17);
   i41 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i41 | 0) != 0) {
     i43 = i41 + 8 | 0;
     i45 = i43 | 0;
     i44 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
     HEAP32[i45 >> 2] = i44;
     if ((i44 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
    }
   } while (0);
   __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i18, i15);
   __ZN7WebCore5Range6createERNS_8DocumentE(i19, i40);
   i41 = i19 | 0;
   i43 = HEAP32[i41 >> 2] | 0;
   HEAP32[i41 >> 2] = 0;
   i41 = i20 + 12 | 0;
   i44 = i20 | 0;
   HEAP32[i44 >> 2] = i41;
   i45 = i20 + 4 | 0;
   HEAP32[i45 >> 2] = 1024;
   i46 = i20 + 8 | 0;
   HEAP32[i46 >> 2] = 0;
   HEAP32[i21 >> 2] = 0;
   __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i12, i2, 0);
   i47 = __ZNK7WebCore15VisiblePosition14characterAfterEv(i12) | 0;
   i48 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i48 | 0) != 0) {
     i49 = i48 + 8 | 0;
     i50 = i49 | 0;
     i51 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
     HEAP32[i50 >> 2] = i51;
     if ((i51 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
    }
   } while (0);
   i48 = _u_getIntPropertyValue(i47, 4104) | 0;
   do {
    if ((i48 | 0) == 37 | (i48 | 0) == 24 | (i48 | 0) == 14) {
     __ZN7WebCore8Document11createRangeEv(i22, i40);
     i49 = i22 | 0;
     i51 = HEAP32[i49 >> 2] | 0;
     HEAP32[i49 >> 2] = 0;
     __ZN7WebCore5Range11setEndAfterEPNS_4NodeERi(i51, i39, i21);
     i49 = HEAP32[i18 >> 2] | 0;
     i50 = i23 | 0;
     HEAP32[i50 >> 2] = i49;
     if ((i49 | 0) != 0) {
      i52 = i49 + 8 | 0;
      HEAP32[i52 >> 2] = (HEAP32[i52 >> 2] | 0) + 1;
     }
     i52 = i18 + 8 | 0;
     do {
      if ((HEAP8[i52] & 8) == 0) {
       i49 = HEAP32[i52 >> 2] & 7;
       if (!((i49 | 0) == 2 | (i49 | 0) == 4)) {
        i53 = 23;
        break;
       }
       i54 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i18) | 0;
      } else {
       i53 = 23;
      }
     } while (0);
     if ((i53 | 0) == 23) {
      i54 = HEAP32[i18 + 4 >> 2] | 0;
     }
     __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i51, i23, i54, i21);
     i52 = HEAP32[i50 >> 2] | 0;
     do {
      if ((i52 | 0) != 0) {
       i49 = i52 + 8 | 0;
       i55 = i49 | 0;
       i56 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
       HEAP32[i55 >> 2] = i56;
       if ((i56 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore12TextIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE(i24, i51, 0);
     i52 = i24 + 52 | 0;
     L39 : do {
      if ((HEAP32[i52 >> 2] | 0) == 0) {
       i57 = 0;
      } else {
       i50 = i24 + 133 | 0;
       i49 = i24 + 68 | 0;
       i56 = i24 + 76 | 0;
       i55 = i24 + 60 | 0;
       i58 = i24 + 72 | 0;
       i59 = 0;
       L41 : while (1) {
        if ((HEAP8[i50] & 1) != 0) {
         i57 = i59;
         break L39;
        }
        i60 = HEAP32[i49 >> 2] | 0;
        if ((i60 | 0) == 0) {
         i61 = HEAP32[i56 >> 2] | 0;
         do {
          if ((i61 | 0) == 0) {
           i62 = 0;
          } else {
           if ((HEAP32[i61 + 16 >> 2] & 32 | 0) == 0) {
            i62 = HEAP32[i61 + 8 >> 2] | 0;
            break;
           } else {
            i62 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i61) | 0;
            break;
           }
          }
         } while (0);
         i63 = i62 + (HEAP32[i55 >> 2] << 1) | 0;
        } else {
         i63 = i60;
        }
        i61 = HEAP32[i58 >> 2] | 0;
        i64 = __ZN7WebCore29endOfFirstWordBoundaryContextEPKti(i63, i61) | 0;
        i65 = HEAP32[i46 >> 2] | 0;
        i66 = i65 + i64 | 0;
        i67 = HEAP32[i45 >> 2] | 0;
        if (i66 >>> 0 > i67 >>> 0) {
         i68 = i67 + 1 + (i67 >>> 2) | 0;
         i69 = i68 >>> 0 > 16 >>> 0 ? i68 : 16;
         i68 = i69 >>> 0 > i66 >>> 0 ? i69 : i66;
         do {
          if (i67 >>> 0 < i68 >>> 0) {
           i69 = HEAP32[i44 >> 2] | 0;
           if (i68 >>> 0 > 1024 >>> 0) {
            if ((i68 | 0) < 0) {
             i53 = 42;
             break L41;
            }
            i70 = __ZN3WTF18fastMallocGoodSizeEj(i68 << 1) | 0;
            HEAP32[i45 >> 2] = i70 >>> 1;
            i71 = __ZN3WTF10fastMallocEj(i70) | 0;
            HEAP32[i44 >> 2] = i71;
            i72 = i71;
           } else {
            HEAP32[i44 >> 2] = i41;
            HEAP32[i45 >> 2] = 1024;
            i72 = i41;
           }
           i71 = i69;
           _memcpy(i72 | 0, i71 | 0, i65 << 1) | 0;
           if ((i41 | 0) == (i69 | 0) | (i69 | 0) == 0) {
            break;
           }
           if ((HEAP32[i44 >> 2] | 0) == (i69 | 0)) {
            HEAP32[i44 >> 2] = 0;
            HEAP32[i45 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i71);
          }
         } while (0);
         i73 = HEAP32[i46 >> 2] | 0;
        } else {
         i73 = i65;
        }
        if (i66 >>> 0 < i73 >>> 0) {
         i53 = 51;
         break;
        }
        i68 = HEAP32[i44 >> 2] | 0;
        if ((i64 | 0) != 0) {
         i67 = 0;
         while (1) {
          HEAP16[i68 + (i67 + i73 << 1) >> 1] = HEAP16[i63 + (i67 << 1) >> 1] | 0;
          i67 = i67 + 1 | 0;
          if (i67 >>> 0 >= i64 >>> 0) {
           break;
          }
         }
        }
        HEAP32[i46 >> 2] = i66;
        i67 = i64 + i59 | 0;
        if ((i64 | 0) < (i61 | 0)) {
         i57 = i67;
         break L39;
        }
        __ZN7WebCore12TextIterator7advanceEv(i24);
        if ((HEAP32[i52 >> 2] | 0) == 0) {
         i57 = i67;
         break L39;
        } else {
         i59 = i67;
        }
       }
       if ((i53 | 0) == 42) {
        _WTFCrash();
       } else if ((i53 | 0) == 51) {
        _WTFCrash();
       }
      }
     } while (0);
     __ZN7WebCore12TextIteratorD1Ev(i24);
     if ((i51 | 0) == 0) {
      i74 = i57;
      break;
     }
     i52 = i51 | 0;
     i59 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
     if ((i59 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i51);
      __ZN3WTF8fastFreeEPv(i51);
      i74 = i57;
      break;
     } else {
      HEAP32[i52 >> 2] = i59;
      i74 = i57;
      break;
     }
    } else {
     i74 = 0;
    }
   } while (0);
   i40 = i16 | 0;
   i48 = HEAP32[i40 >> 2] | 0;
   i47 = i25 | 0;
   HEAP32[i47 >> 2] = i48;
   if ((i48 | 0) != 0) {
    i59 = i48 + 8 | 0;
    HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 1;
   }
   i59 = i16 + 8 | 0;
   do {
    if ((HEAP8[i59] & 8) == 0) {
     i48 = HEAP32[i59 >> 2] & 7;
     if (!((i48 | 0) == 2 | (i48 | 0) == 4)) {
      i53 = 64;
      break;
     }
     i75 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i16) | 0;
    } else {
     i53 = 64;
    }
   } while (0);
   if ((i53 | 0) == 64) {
    i75 = HEAP32[i16 + 4 >> 2] | 0;
   }
   __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i43, i25, i75, i21);
   i59 = HEAP32[i47 >> 2] | 0;
   do {
    if ((i59 | 0) != 0) {
     i48 = i59 + 8 | 0;
     i52 = i48 | 0;
     i58 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
     HEAP32[i52 >> 2] = i58;
     if ((i58 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
    }
   } while (0);
   i59 = i18 | 0;
   i47 = HEAP32[i59 >> 2] | 0;
   i48 = i26 | 0;
   HEAP32[i48 >> 2] = i47;
   if ((i47 | 0) != 0) {
    i58 = i47 + 8 | 0;
    HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
   }
   i58 = i18 + 8 | 0;
   do {
    if ((HEAP8[i58] & 8) == 0) {
     i47 = HEAP32[i58 >> 2] & 7;
     if (!((i47 | 0) == 2 | (i47 | 0) == 4)) {
      i53 = 74;
      break;
     }
     i76 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i18) | 0;
    } else {
     i53 = 74;
    }
   } while (0);
   if ((i53 | 0) == 74) {
    i76 = HEAP32[i18 + 4 >> 2] | 0;
   }
   __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i43, i26, i76, i21);
   i58 = HEAP32[i48 >> 2] | 0;
   do {
    if ((i58 | 0) != 0) {
     i47 = i58 + 8 | 0;
     i52 = i47 | 0;
     i55 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
     HEAP32[i52 >> 2] = i55;
     if ((i55 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
    }
   } while (0);
   if ((HEAP32[i21 >> 2] | 0) == 0) {
    __ZN7WebCore31SimplifiedBackwardsTextIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE(i27, i43, 0);
    HEAP8[i28] = 0;
    i58 = i27 + 48 | 0;
    L114 : do {
     if ((HEAP32[i58 >> 2] | 0) == 0) {
      i77 = 0;
     } else {
      i48 = i27 + 79 | 0;
      i47 = i27 | 0;
      i55 = i27 + 60 | 0;
      i52 = i27 + 64 | 0;
      i56 = i29 | 0;
      i49 = i7 | 0;
      i50 = 0;
      L116 : while (1) {
       if ((HEAP8[i48] & 1) != 0) {
        i77 = i50;
        break L114;
       }
       i67 = HEAP32[i47 >> 2] | 0;
       do {
        if ((i67 | 0) == 0) {
         i53 = 96;
        } else {
         i68 = (HEAP32[i67 + 12 >> 2] & 2048 | 0) == 0;
         i65 = i67 + 32 | 0;
         if (i68) {
          i78 = i65 | 0;
         } else {
          i78 = HEAP32[i65 >> 2] | 0;
         }
         if ((HEAP32[i78 >> 2] | 0) == 0) {
          i53 = 96;
          break;
         }
         if (i68) {
          i79 = i65 | 0;
         } else {
          i79 = HEAP32[i65 >> 2] | 0;
         }
         i65 = HEAP32[i79 >> 2] | 0;
         if ((HEAP32[i65 + 20 >> 2] & 768 | 0) == 256) {
          i80 = HEAP32[(HEAP32[i65 + 8 >> 2] | 0) + 36 >> 2] | 0;
         } else {
          i80 = HEAP32[i65 + 36 >> 2] | 0;
         }
         i65 = HEAP32[i55 >> 2] | 0;
         i68 = HEAP32[i52 >> 2] | 0;
         if ((HEAP32[(HEAP32[i80 + 24 >> 2] | 0) + 88 >> 2] & 12 | 0) == 0) {
          i81 = i65;
          i82 = i68;
          i53 = 98;
          break;
         }
         __ZN3WTF6StringC1EPKtj(i29, i65, i68);
         i68 = HEAP32[i56 >> 2] | 0;
         do {
          if ((i68 | 0) != 0) {
           __ZN3WTF10StringImpl4fillEt(i7, i68, 120);
           i65 = HEAP32[i56 >> 2] | 0;
           HEAP32[i56 >> 2] = HEAP32[i49 >> 2];
           if ((i65 | 0) == 0) {
            break;
           }
           i60 = i65 | 0;
           i71 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
           if ((i71 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i65);
            break;
           } else {
            HEAP32[i60 >> 2] = i71;
            break;
           }
          }
         } while (0);
         i68 = HEAP32[i56 >> 2] | 0;
         do {
          if ((i68 | 0) == 0) {
           i83 = 0;
           i84 = 0;
          } else {
           if ((HEAP32[i68 + 16 >> 2] & 32 | 0) == 0) {
            i85 = HEAP32[i68 + 8 >> 2] | 0;
            i86 = i68;
           } else {
            i61 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i68) | 0;
            i85 = i61;
            i86 = HEAP32[i56 >> 2] | 0;
           }
           if ((i86 | 0) == 0) {
            i83 = 0;
            i84 = i85;
            break;
           }
           i83 = HEAP32[i86 + 4 >> 2] | 0;
           i84 = i85;
          }
         } while (0);
         i68 = HEAP32[i46 >> 2] | 0;
         i61 = i68 + i83 | 0;
         i64 = HEAP32[i45 >> 2] | 0;
         if (i61 >>> 0 > i64 >>> 0) {
          i66 = i64 + 1 + (i64 >>> 2) | 0;
          i71 = i66 >>> 0 > 16 >>> 0 ? i66 : 16;
          i66 = i71 >>> 0 > i61 >>> 0 ? i71 : i61;
          do {
           if (i64 >>> 0 < i66 >>> 0) {
            i71 = HEAP32[i44 >> 2] | 0;
            if (i66 >>> 0 > 1024 >>> 0) {
             if ((i66 | 0) < 0) {
              i53 = 130;
              break L116;
             }
             i60 = __ZN3WTF18fastMallocGoodSizeEj(i66 << 1) | 0;
             HEAP32[i45 >> 2] = i60 >>> 1;
             i65 = __ZN3WTF10fastMallocEj(i60) | 0;
             HEAP32[i44 >> 2] = i65;
             i87 = i65;
            } else {
             HEAP32[i44 >> 2] = i41;
             HEAP32[i45 >> 2] = 1024;
             i87 = i41;
            }
            i65 = i71;
            _memcpy(i87 | 0, i65 | 0, i68 << 1) | 0;
            if ((i41 | 0) == (i71 | 0) | (i71 | 0) == 0) {
             break;
            }
            if ((HEAP32[i44 >> 2] | 0) == (i71 | 0)) {
             HEAP32[i44 >> 2] = 0;
             HEAP32[i45 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i65);
           }
          } while (0);
          i88 = HEAP32[i46 >> 2] | 0;
         } else {
          i88 = i68;
         }
         if (i61 >>> 0 < i88 >>> 0) {
          i53 = 139;
          break L116;
         }
         i66 = HEAP32[i44 >> 2] | 0;
         _memmove(i66 + (i83 << 1) | 0, i66 | 0, i88 << 1 | 0) | 0;
         if ((i83 | 0) != 0) {
          i64 = 0;
          while (1) {
           HEAP16[i66 + (i64 << 1) >> 1] = HEAP16[i84 + (i64 << 1) >> 1] | 0;
           i64 = i64 + 1 | 0;
           if (i64 >>> 0 >= i83 >>> 0) {
            break;
           }
          }
         }
         HEAP32[i46 >> 2] = i61;
         i64 = HEAP32[i56 >> 2] | 0;
         if ((i64 | 0) == 0) {
          break;
         }
         i66 = i64 | 0;
         i68 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
         if ((i68 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i64);
          break;
         } else {
          HEAP32[i66 >> 2] = i68;
          break;
         }
        }
       } while (0);
       if ((i53 | 0) == 96) {
        i53 = 0;
        i81 = HEAP32[i55 >> 2] | 0;
        i82 = HEAP32[i52 >> 2] | 0;
        i53 = 98;
       }
       if ((i53 | 0) == 98) {
        i53 = 0;
        i67 = HEAP32[i46 >> 2] | 0;
        i68 = i67 + i82 | 0;
        i66 = HEAP32[i45 >> 2] | 0;
        if (i68 >>> 0 > i66 >>> 0) {
         i64 = i66 + 1 + (i66 >>> 2) | 0;
         i65 = i64 >>> 0 > 16 >>> 0 ? i64 : 16;
         i64 = i65 >>> 0 > i68 >>> 0 ? i65 : i68;
         do {
          if (i66 >>> 0 < i64 >>> 0) {
           i65 = HEAP32[i44 >> 2] | 0;
           if (i64 >>> 0 > 1024 >>> 0) {
            if ((i64 | 0) < 0) {
             i53 = 102;
             break L116;
            }
            i71 = __ZN3WTF18fastMallocGoodSizeEj(i64 << 1) | 0;
            HEAP32[i45 >> 2] = i71 >>> 1;
            i60 = __ZN3WTF10fastMallocEj(i71) | 0;
            HEAP32[i44 >> 2] = i60;
            i89 = i60;
           } else {
            HEAP32[i44 >> 2] = i41;
            HEAP32[i45 >> 2] = 1024;
            i89 = i41;
           }
           i60 = i65;
           _memcpy(i89 | 0, i60 | 0, i67 << 1) | 0;
           if ((i41 | 0) == (i65 | 0) | (i65 | 0) == 0) {
            break;
           }
           if ((HEAP32[i44 >> 2] | 0) == (i65 | 0)) {
            HEAP32[i44 >> 2] = 0;
            HEAP32[i45 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i60);
          }
         } while (0);
         i90 = HEAP32[i46 >> 2] | 0;
        } else {
         i90 = i67;
        }
        if (i68 >>> 0 < i90 >>> 0) {
         i53 = 111;
         break;
        }
        i64 = HEAP32[i44 >> 2] | 0;
        _memmove(i64 + (i82 << 1) | 0, i64 | 0, i90 << 1 | 0) | 0;
        if ((i82 | 0) != 0) {
         i66 = 0;
         while (1) {
          HEAP16[i64 + (i66 << 1) >> 1] = HEAP16[i81 + (i66 << 1) >> 1] | 0;
          i66 = i66 + 1 | 0;
          if (i66 >>> 0 >= i82 >>> 0) {
           break;
          }
         }
        }
        HEAP32[i46 >> 2] = i68;
       }
       i66 = HEAP32[i46 >> 2] | 0;
       i64 = FUNCTION_TABLE_iiiiii[i3 & 31](HEAP32[i44 >> 2] | 0, i66, i66 - i74 | 0, 1, i28) | 0;
       if (i64 >>> 0 > 1 >>> 0) {
        i77 = i64;
        break L114;
       }
       __ZN7WebCore31SimplifiedBackwardsTextIterator7advanceEv(i27);
       if ((HEAP32[i58 >> 2] | 0) == 0) {
        i77 = i64;
        break L114;
       } else {
        i50 = i64;
       }
      }
      if ((i53 | 0) == 102) {
       _WTFCrash();
      } else if ((i53 | 0) == 111) {
       _WTFCrash();
      } else if ((i53 | 0) == 130) {
       _WTFCrash();
      } else if ((i53 | 0) == 139) {
       _WTFCrash();
      }
     }
    } while (0);
    if ((HEAP8[i28] & 1) == 0) {
     i91 = i77;
    } else {
     i50 = HEAP32[i46 >> 2] | 0;
     i91 = FUNCTION_TABLE_iiiiii[i3 & 31](HEAP32[i44 >> 2] | 0, i50, i50 - i74 | 0, 0, i28) | 0;
    }
    L209 : do {
     if ((i91 | 0) == 0) {
      do {
       if ((HEAP32[i58 >> 2] | 0) != 0) {
        if ((HEAP8[i27 + 79 | 0] & 1) != 0) {
         break;
        }
        i50 = i30 | 0;
        i52 = HEAP32[i37 >> 2] | 0;
        HEAP32[i50 >> 2] = i52;
        if ((i52 | 0) != 0) {
         i55 = i52 + 8 | 0;
         HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
        }
        HEAP32[i30 + 4 >> 2] = HEAP32[i38 >> 2];
        i55 = HEAP32[i42 >> 2] | 0;
        i52 = i30 + 8 | 0;
        i56 = i52;
        i49 = HEAP32[i56 >> 2] & -8 | i55 & 7;
        HEAP32[i56 >> 2] = i49;
        HEAP8[i52] = i49 & 255 & -9 | i55 & 8;
        __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i30, 1);
        i55 = HEAP32[i50 >> 2] | 0;
        if ((i55 | 0) == 0) {
         break L209;
        }
        i50 = i55 + 8 | 0;
        i55 = i50 | 0;
        i49 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
        HEAP32[i55 >> 2] = i49;
        if ((i49 | 0) >= 1) {
         break L209;
        }
        if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
         break L209;
        }
        __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
        break L209;
       }
      } while (0);
      __ZNK7WebCore31SimplifiedBackwardsTextIterator5rangeEv(i31, i27);
      i50 = i31 | 0;
      i49 = HEAP32[i50 >> 2] | 0;
      i55 = i49 + 12 | 0;
      i52 = HEAP32[i55 >> 2] | 0;
      if ((i52 | 0) > -1) {
       i92 = i52;
      } else {
       i52 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i49 + 16 >> 2] | 0) | 0) + 1 | 0;
       HEAP32[i55 >> 2] = i52;
       i92 = i52;
      }
      i52 = HEAP32[i49 + 8 >> 2] | 0;
      if ((i52 | 0) == 0) {
       i93 = i92;
      } else {
       i49 = i52 + 8 | 0;
       HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) + 1;
       i93 = HEAP32[i55 >> 2] | 0;
      }
      i55 = i5 | 0;
      HEAP32[i55 >> 2] = i52;
      HEAP32[i6 >> 2] = i93;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i30, i5, i6);
      i52 = HEAP32[i55 >> 2] | 0;
      do {
       if ((i52 | 0) != 0) {
        i55 = i52 + 8 | 0;
        i49 = i55 | 0;
        i56 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
        HEAP32[i49 >> 2] = i56;
        if ((i56 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
       }
      } while (0);
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i30, 1);
      i52 = HEAP32[i30 >> 2] | 0;
      do {
       if ((i52 | 0) != 0) {
        i55 = i52 + 8 | 0;
        i56 = i55 | 0;
        i49 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
        HEAP32[i56 >> 2] = i49;
        if ((i49 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
       }
      } while (0);
      i52 = HEAP32[i50 >> 2] | 0;
      if ((i52 | 0) == 0) {
       break;
      }
      i55 = i52 | 0;
      i49 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
      if ((i49 | 0) == 0) {
       __ZN7WebCore5RangeD1Ev(i52);
       __ZN3WTF8fastFreeEPv(i52);
       break;
      } else {
       HEAP32[i55 >> 2] = i49;
       break;
      }
     } else {
      __ZNK7WebCore31SimplifiedBackwardsTextIterator5rangeEv(i32, i27);
      i49 = HEAP32[i32 >> 2] | 0;
      i55 = HEAP32[i49 + 8 >> 2] | 0;
      do {
       if ((i49 | 0) != 0) {
        i52 = i49 | 0;
        i56 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
        if ((i56 | 0) == 0) {
         __ZN7WebCore5RangeD1Ev(i49);
         __ZN3WTF8fastFreeEPv(i49);
         break;
        } else {
         HEAP32[i52 >> 2] = i56;
         break;
        }
       }
      } while (0);
      i49 = i55 + 12 | 0;
      i50 = HEAP32[i49 >> 2] | 0;
      do {
       if ((i50 & 1 | 0) == 0) {
        i94 = i50;
       } else {
        if ((i91 | 0) > (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i55 >> 2] | 0) + 168 >> 2] & 1](i55) | 0)) {
         i94 = HEAP32[i49 >> 2] | 0;
         break;
        }
        i56 = i55 + 8 | 0;
        HEAP32[i56 >> 2] = (HEAP32[i56 >> 2] | 0) + 1;
        i56 = i8 | 0;
        HEAP32[i56 >> 2] = i55;
        HEAP32[i9 >> 2] = i91;
        __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i33, i8, i9);
        i52 = HEAP32[i56 >> 2] | 0;
        do {
         if ((i52 | 0) != 0) {
          i56 = i52 + 8 | 0;
          i47 = i56 | 0;
          i48 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
          HEAP32[i47 >> 2] = i48;
          if ((i48 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i56 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i56 - 8 | 0);
         }
        } while (0);
        __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i33, 1);
        i52 = HEAP32[i33 >> 2] | 0;
        if ((i52 | 0) == 0) {
         break L209;
        }
        i68 = i52 + 8 | 0;
        i52 = i68 | 0;
        i56 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
        HEAP32[i52 >> 2] = i56;
        if ((i56 | 0) >= 1) {
         break L209;
        }
        if ((HEAP32[i68 + 8 >> 2] | 0) != 0) {
         break L209;
        }
        __ZN7WebCore4Node14removedLastRefEv(i68 - 8 | 0);
        break L209;
       }
      } while (0);
      i49 = (i94 & 2048 | 0) == 0;
      i50 = i55 + 32 | 0;
      if (i49) {
       i95 = i50 | 0;
      } else {
       i95 = HEAP32[i50 >> 2] | 0;
      }
      do {
       if ((HEAP32[i95 >> 2] | 0) != 0) {
        if (i49) {
         i96 = i50 | 0;
        } else {
         i96 = HEAP32[i50 >> 2] | 0;
        }
        i68 = HEAP32[i96 >> 2] | 0;
        if ((HEAP32[i68 + 20 >> 2] & 4096 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_ii[HEAP32[(HEAP32[i68 >> 2] | 0) + 620 >> 2] & 1](i68) | 0;
       }
      } while (0);
      __ZN7WebCore26BackwardsCharacterIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE(i34, i43, 0);
      __ZN7WebCore26BackwardsCharacterIterator7advanceEi(i34, (HEAP32[i46 >> 2] | 0) - (i91 + i74) | 0);
      __ZNK7WebCore26BackwardsCharacterIterator5rangeEv(i36, i34);
      i50 = i36 | 0;
      i49 = HEAP32[i50 >> 2] | 0;
      i55 = i49 + 24 | 0;
      i68 = HEAP32[i55 >> 2] | 0;
      if ((i68 | 0) > -1) {
       i97 = i68;
      } else {
       i68 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i49 + 28 >> 2] | 0) | 0) + 1 | 0;
       HEAP32[i55 >> 2] = i68;
       i97 = i68;
      }
      i68 = HEAP32[i49 + 20 >> 2] | 0;
      if ((i68 | 0) == 0) {
       i98 = i97;
      } else {
       i49 = i68 + 8 | 0;
       HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) + 1;
       i98 = HEAP32[i55 >> 2] | 0;
      }
      i55 = i10 | 0;
      HEAP32[i55 >> 2] = i68;
      HEAP32[i11 >> 2] = i98;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i35, i10, i11);
      i68 = HEAP32[i55 >> 2] | 0;
      do {
       if ((i68 | 0) != 0) {
        i55 = i68 + 8 | 0;
        i49 = i55 | 0;
        i56 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
        HEAP32[i49 >> 2] = i56;
        if ((i56 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
       }
      } while (0);
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i35, 1);
      i68 = HEAP32[i35 >> 2] | 0;
      do {
       if ((i68 | 0) != 0) {
        i55 = i68 + 8 | 0;
        i56 = i55 | 0;
        i49 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
        HEAP32[i56 >> 2] = i49;
        if ((i49 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
       }
      } while (0);
      i68 = HEAP32[i50 >> 2] | 0;
      do {
       if ((i68 | 0) != 0) {
        i55 = i68 | 0;
        i49 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
        if ((i49 | 0) == 0) {
         __ZN7WebCore5RangeD1Ev(i68);
         __ZN3WTF8fastFreeEPv(i68);
         break;
        } else {
         HEAP32[i55 >> 2] = i49;
         break;
        }
       }
      } while (0);
      __ZN7WebCore8BitStackD1Ev(i34 + 24 | 0);
     }
    } while (0);
    __ZN7WebCore8BitStackD1Ev(i27 + 12 | 0);
   } else {
    HEAP32[i1 >> 2] = 0;
    HEAP32[i1 + 4 >> 2] = 0;
    i58 = i1 + 8 | 0;
    i68 = i58;
    i50 = HEAP32[i68 >> 2] | 0;
    HEAP32[i68 >> 2] = i50 & -8;
    HEAP8[i58] = i50 & 255 & -16;
    HEAP32[i1 + 12 >> 2] = 1;
   }
   if ((HEAP32[i46 >> 2] | 0) != 0) {
    HEAP32[i46 >> 2] = 0;
   }
   i50 = HEAP32[i44 >> 2] | 0;
   if (!((i41 | 0) == (i50 | 0) | (i50 | 0) == 0)) {
    HEAP32[i44 >> 2] = 0;
    HEAP32[i45 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i50);
   }
   do {
    if ((i43 | 0) != 0) {
     i50 = i43 | 0;
     i58 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
     if ((i58 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i43);
      __ZN3WTF8fastFreeEPv(i43);
      break;
     } else {
      HEAP32[i50 >> 2] = i58;
      break;
     }
    }
   } while (0);
   i43 = HEAP32[i59 >> 2] | 0;
   do {
    if ((i43 | 0) != 0) {
     i45 = i43 + 8 | 0;
     i44 = i45 | 0;
     i41 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
     HEAP32[i44 >> 2] = i41;
     if ((i41 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
    }
   } while (0);
   i43 = HEAP32[i40 >> 2] | 0;
   if ((i43 | 0) == 0) {
    break;
   }
   i59 = i43 + 8 | 0;
   i43 = i59 | 0;
   i45 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
   HEAP32[i43 >> 2] = i45;
   if ((i45 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i59 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i59 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i37 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i37 = i1 + 8 | 0;
 i1 = i37 | 0;
 i27 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i27;
 if ((i27 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 56 | 0;
 i10 = i4 + 64 | 0;
 i11 = i4 + 80 | 0;
 i12 = i4 + 88 | 0;
 i13 = i4 + 104 | 0;
 i14 = HEAP32[i2 >> 2] | 0;
 if ((i14 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i15 = i1 + 8 | 0;
  i16 = i15;
  i17 = HEAP32[i16 >> 2] | 0;
  HEAP32[i16 >> 2] = i17 & -8;
  HEAP8[i15] = i17 & 255 & -16;
  HEAP32[i1 + 12 >> 2] = 1;
  STACKTOP = i4;
  return;
 }
 i17 = i6 | 0;
 HEAP32[i17 >> 2] = i14;
 i15 = i14 + 8 | 0;
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 i15 = i6 + 4 | 0;
 HEAP32[i15 >> 2] = HEAP32[i2 + 4 >> 2];
 i14 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i6 + 8 | 0;
 i16 = i2;
 i18 = HEAP32[i16 >> 2] & -8 | i14 & 7;
 HEAP32[i16 >> 2] = i18;
 HEAP8[i2] = i18 & 255 & -9 | i14 & 8;
 i14 = HEAP32[i17 >> 2] | 0;
 L5 : do {
  if (__ZN7WebCore35isRenderedAsNonInlineTableImageOrHREPKNS_4NodeE(i14) | 0) {
   i18 = i5 | 0;
   HEAP32[i18 >> 2] = i14;
   if ((i14 | 0) != 0) {
    i19 = i14 + 8 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i7, i5, 2);
   i19 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i18 = i19 + 8 | 0;
     i20 = i18 | 0;
     i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     HEAP32[i20 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i7, 1);
   i19 = HEAP32[i7 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i18 = i19 + 8 | 0;
   i19 = i18 | 0;
   i21 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i21;
   if ((i21 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
  } else {
   i18 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(i14, 1) | 0;
   i21 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i6, 0) | 0;
   do {
    if ((HEAP8[i2] & 8) == 0) {
     i19 = HEAP32[i16 >> 2] & 7;
     if (!((i19 | 0) == 2 | (i19 | 0) == 4)) {
      i22 = 16;
      break;
     }
     i23 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i6) | 0;
    } else {
     i22 = 16;
    }
   } while (0);
   if ((i22 | 0) == 16) {
    i23 = HEAP32[i15 >> 2] | 0;
   }
   i19 = HEAP32[i16 >> 2] & 7;
   L25 : do {
    if ((i14 | 0) == 0) {
     i24 = i19;
     i25 = i23;
     i26 = 0;
     i22 = 86;
    } else {
     i20 = i14;
     i27 = i19;
     i28 = i23;
     i29 = i14;
     L26 : while (1) {
      do {
       if ((i3 | 0) == 1) {
        if (__ZN7WebCore8Position19nodeIsUserSelectAllEPKNS_4NodeE(i20) | 0) {
         i30 = i20;
         break;
        }
        i31 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i20, 0, 1) | 0;
        if (i31 ^ (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i14, 0, 1) | 0)) {
         i24 = i27;
         i25 = i28;
         i26 = i29;
         i22 = 86;
         break L25;
        } else {
         i30 = i20;
        }
       } else if ((i3 | 0) == 2) {
        i31 = i20;
        while (1) {
         i32 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i31, 0, 1) | 0;
         if (!(i32 ^ (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i14, 0, 1) | 0))) {
          break;
         }
         if ((HEAP32[i31 + 12 >> 2] & 2 | 0) != 0) {
          i32 = HEAP32[i31 + 36 >> 2] | 0;
          if ((i32 | 0) != 0) {
           i31 = i32;
           continue;
          }
         }
         if ((i31 | 0) == (i18 | 0)) {
          i24 = i27;
          i25 = i28;
          i26 = i29;
          i22 = 86;
          break L25;
         }
         i32 = HEAP32[i31 + 28 >> 2] | 0;
         if ((i32 | 0) != 0) {
          i31 = i32;
          continue;
         }
         i32 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i31, i18) | 0;
         if ((i32 | 0) == 0) {
          i24 = i27;
          i25 = i28;
          i26 = i29;
          i22 = 86;
          break L25;
         } else {
          i31 = i32;
         }
        }
        if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i31, i21) | 0) {
         i30 = i31;
        } else {
         i24 = i27;
         i25 = i28;
         i26 = i29;
         i22 = 86;
         break L25;
        }
       } else {
        i30 = i20;
       }
      } while (0);
      i32 = i30 + 12 | 0;
      i33 = HEAP32[i32 >> 2] | 0;
      i34 = i30 + 32 | 0;
      if ((i33 & 2048 | 0) == 0) {
       i35 = i34 | 0;
      } else {
       i35 = HEAP32[i34 >> 2] | 0;
      }
      i34 = HEAP32[i35 >> 2] | 0;
      L45 : do {
       if ((i34 | 0) == 0) {
        if ((i33 & 2 | 0) != 0) {
         i36 = HEAP32[i30 + 36 >> 2] | 0;
         if ((i36 | 0) != 0) {
          i20 = i36;
          i27 = i27;
          i28 = i28;
          i29 = i29;
          continue L26;
         }
        }
        if ((i30 | 0) == (i18 | 0)) {
         i24 = i27;
         i25 = i28;
         i26 = i29;
         i22 = 86;
         break L25;
        }
        i36 = HEAP32[i30 + 28 >> 2] | 0;
        if ((i36 | 0) != 0) {
         i20 = i36;
         i27 = i27;
         i28 = i28;
         i29 = i29;
         continue L26;
        }
        i37 = i29;
        i38 = i28;
        i39 = i27;
        i40 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i30, i18) | 0;
       } else {
        i36 = i34 + 20 | 0;
        i41 = HEAP32[i36 >> 2] | 0;
        if ((i41 & 768 | 0) == 256) {
         i42 = HEAP32[(HEAP32[i34 + 8 >> 2] | 0) + 36 >> 2] | 0;
        } else {
         i42 = HEAP32[i34 + 36 >> 2] | 0;
        }
        if ((HEAP32[i42 + 40 >> 2] & 6144 | 0) != 0) {
         if ((i33 & 2 | 0) != 0) {
          i43 = HEAP32[i30 + 36 >> 2] | 0;
          if ((i43 | 0) != 0) {
           i20 = i43;
           i27 = i27;
           i28 = i28;
           i29 = i29;
           continue L26;
          }
         }
         if ((i30 | 0) == (i18 | 0)) {
          i24 = i27;
          i25 = i28;
          i26 = i29;
          i22 = 86;
          break L25;
         }
         i43 = HEAP32[i30 + 28 >> 2] | 0;
         if ((i43 | 0) != 0) {
          i20 = i43;
          i27 = i27;
          i28 = i28;
          i29 = i29;
          continue L26;
         }
         i37 = i29;
         i38 = i28;
         i39 = i27;
         i40 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i30, i18) | 0;
         break;
        }
        if ((i41 & 4096 | 0) != 0) {
         if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i34 >> 2] | 0) + 620 >> 2] & 1](i34) | 0)) {
          i24 = i27;
          i25 = i28;
          i26 = i29;
          i22 = 86;
          break L25;
         }
        }
        if (__ZN7WebCore7isBlockEPKNS_4NodeE(i30) | 0) {
         i24 = i27;
         i25 = i28;
         i26 = i29;
         i22 = 86;
         break L25;
        }
        do {
         if ((HEAP32[i36 >> 2] & 768 | 0) == 256) {
          if (!(__ZNK7WebCore10RenderText15hasRenderedTextEv(i34) | 0)) {
           break;
          }
          i41 = HEAP32[i34 + 44 >> 2] | 0;
          i43 = HEAP32[i41 + 4 >> 2] | 0;
          i44 = HEAP32[i42 + 44 >> 2] & 7;
          L72 : do {
           if (!((i44 | 0) == 4 | (i44 | 0) == 0)) {
            do {
             if ((i41 | 0) == 0) {
              i45 = 0;
             } else {
              if ((HEAP32[i41 + 16 >> 2] & 32 | 0) == 0) {
               i45 = HEAP32[i41 + 8 >> 2] | 0;
               break;
              } else {
               i45 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i41) | 0;
               break;
              }
             }
            } while (0);
            i46 = (i30 | 0) == (i14 | 0) ? i28 : 0;
            while (1) {
             if ((i46 | 0) >= (i43 | 0)) {
              break L72;
             }
             if ((HEAP16[i45 + (i46 << 1) >> 1] | 0) == 10) {
              break L26;
             } else {
              i46 = i46 + 1 | 0;
             }
            }
           }
          } while (0);
          i43 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i34 >> 2] | 0) + 568 >> 2] & 1](i34) | 0;
          if ((HEAP32[i32 >> 2] & 2 | 0) != 0) {
           i41 = HEAP32[i30 + 36 >> 2] | 0;
           if ((i41 | 0) != 0) {
            i20 = i41;
            i27 = 0;
            i28 = i43;
            i29 = i30;
            continue L26;
           }
          }
          if ((i30 | 0) == (i18 | 0)) {
           i47 = i18;
           i48 = i43;
           i22 = 87;
           break L25;
          }
          i41 = HEAP32[i30 + 28 >> 2] | 0;
          if ((i41 | 0) != 0) {
           i20 = i41;
           i27 = 0;
           i28 = i43;
           i29 = i30;
           continue L26;
          }
          i37 = i30;
          i38 = i43;
          i39 = 0;
          i40 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i30, i18) | 0;
          break L45;
         }
        } while (0);
        do {
         if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 132 >> 2] & 1](i30) | 0) {
          if (__ZN7WebCore14isTableElementEPNS_4NodeE(i30) | 0) {
           break;
          }
          if ((HEAP32[i32 >> 2] & 2 | 0) != 0) {
           i36 = HEAP32[i30 + 36 >> 2] | 0;
           if ((i36 | 0) != 0) {
            i20 = i36;
            i27 = i27;
            i28 = i28;
            i29 = i29;
            continue L26;
           }
          }
          if ((i30 | 0) == (i18 | 0)) {
           i24 = i27;
           i25 = i28;
           i26 = i29;
           i22 = 86;
           break L25;
          }
          i36 = HEAP32[i30 + 28 >> 2] | 0;
          if ((i36 | 0) != 0) {
           i20 = i36;
           i27 = i27;
           i28 = i28;
           i29 = i29;
           continue L26;
          }
          i37 = i29;
          i38 = i28;
          i39 = i27;
          i40 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i30, i18) | 0;
          break L45;
         }
        } while (0);
        if ((i30 | 0) == (i18 | 0)) {
         i49 = i18;
         i50 = 2;
         i22 = 97;
         break L25;
        }
        i36 = HEAP32[i30 + 28 >> 2] | 0;
        if ((i36 | 0) != 0) {
         i20 = i36;
         i27 = 2;
         i28 = i28;
         i29 = i30;
         continue L26;
        }
        i37 = i30;
        i38 = i28;
        i39 = 2;
        i40 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i30, i18) | 0;
       }
      } while (0);
      if ((i40 | 0) == 0) {
       i24 = i39;
       i25 = i38;
       i26 = i37;
       i22 = 86;
       break L25;
      } else {
       i20 = i40;
       i27 = i39;
       i28 = i38;
       i29 = i37;
      }
     }
     i29 = i9 | 0;
     HEAP32[i29 >> 2] = i30;
     if ((i30 | 0) != 0) {
      i28 = i30 + 8 | 0;
      HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
     }
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i8, i9, i46);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i8, 1);
     i28 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i28 | 0) != 0) {
       i27 = i28 + 8 | 0;
       i20 = i27 | 0;
       i32 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
       HEAP32[i20 >> 2] = i32;
       if ((i32 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
      }
     } while (0);
     i28 = HEAP32[i29 >> 2] | 0;
     if ((i28 | 0) == 0) {
      break L5;
     }
     i27 = i28 + 8 | 0;
     i28 = i27 | 0;
     i32 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     HEAP32[i28 >> 2] = i32;
     if ((i32 | 0) >= 1) {
      break L5;
     }
     if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
      break L5;
     }
     __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
     break L5;
    }
   } while (0);
   if ((i22 | 0) == 86) {
    if ((i24 | 0) == 0) {
     i47 = i26;
     i48 = i25;
     i22 = 87;
    } else {
     i49 = i26;
     i50 = i24;
     i22 = 97;
    }
   }
   if ((i22 | 0) == 97) {
    i18 = i13 | 0;
    HEAP32[i18 >> 2] = i49;
    if ((i49 | 0) != 0) {
     i21 = i49 + 8 | 0;
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
    }
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i12, i13, i50);
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i12, 1);
    i21 = HEAP32[i12 >> 2] | 0;
    do {
     if ((i21 | 0) != 0) {
      i19 = i21 + 8 | 0;
      i27 = i19 | 0;
      i32 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      HEAP32[i27 >> 2] = i32;
      if ((i32 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
     }
    } while (0);
    i21 = HEAP32[i18 >> 2] | 0;
    if ((i21 | 0) == 0) {
     break;
    }
    i19 = i21 + 8 | 0;
    i21 = i19 | 0;
    i32 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
    HEAP32[i21 >> 2] = i32;
    if ((i32 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    break;
   } else if ((i22 | 0) == 87) {
    i19 = i11 | 0;
    HEAP32[i19 >> 2] = i47;
    if ((i47 | 0) != 0) {
     i32 = i47 + 8 | 0;
     HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
    }
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i10, i11, i48, 0);
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i10, 1);
    i32 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i32 | 0) != 0) {
      i21 = i32 + 8 | 0;
      i27 = i21 | 0;
      i28 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      HEAP32[i27 >> 2] = i28;
      if ((i28 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
     }
    } while (0);
    i32 = HEAP32[i19 >> 2] | 0;
    if ((i32 | 0) == 0) {
     break;
    }
    i18 = i32 + 8 | 0;
    i32 = i18 | 0;
    i21 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
    HEAP32[i32 >> 2] = i21;
    if ((i21 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i17 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i17 = i10 + 8 | 0;
 i10 = i17 | 0;
 i1 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 HEAP32[i10 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL38previousRootInlineBoxCandidatePositionEPNS_4NodeERKNS_15VisiblePositionENS_12EditableTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 56 | 0;
 i13 = i5 + 72 | 0;
 i14 = i5 + 88 | 0;
 i15 = i5 + 104 | 0;
 i16 = i11 | 0;
 i17 = HEAP32[i3 >> 2] | 0;
 HEAP32[i16 >> 2] = i17;
 if ((i17 | 0) == 0) {
  i18 = i11 + 8 | 0;
  i19 = 0;
  i20 = i18;
  i21 = i18;
 } else {
  i18 = i17 + 8 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
  i18 = i11 + 8 | 0;
  i17 = i18;
  i19 = HEAP32[i17 >> 2] & -8;
  i20 = i18;
  i21 = i17;
 }
 HEAP32[i11 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 i17 = HEAP32[i3 + 8 >> 2] | 0;
 i18 = i19 | i17 & 7;
 HEAP32[i21 >> 2] = i18;
 HEAP8[i20] = i18 & 255 & -9 | i17 & 8;
 i17 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i11, i4) | 0;
 i11 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i16 = i11 + 8 | 0;
   i18 = i16 | 0;
   i20 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
  }
 } while (0);
 if ((i4 | 0) == 0) {
  i22 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i2, 0, 1) | 0;
 } else if ((i4 | 0) == 1) {
  i22 = __ZNK7WebCore4Node25isEditableToAccessibilityENS0_13EditableLevelE(i2, 0) | 0;
 } else {
  i22 = 0;
 }
 i11 = __ZN7WebCore16previousLeafNodeEPKNS_4NodeE(i2) | 0;
 L14 : do {
  if ((i11 | 0) == 0) {
   i23 = 0;
  } else {
   i2 = i11;
   while (1) {
    if ((i4 | 0) == 0) {
     i24 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i2, 0, 1) | 0;
     i25 = 16;
    } else if ((i4 | 0) == 1) {
     i24 = __ZNK7WebCore4Node25isEditableToAccessibilityENS0_13EditableLevelE(i2, 0) | 0;
     i25 = 16;
    } else {
     if (!i22) {
      break;
     }
    }
    if ((i25 | 0) == 16) {
     i25 = 0;
     if (!(i22 ^ i24)) {
      break;
     }
    }
    i16 = __ZN7WebCore16previousLeafNodeEPKNS_4NodeE(i2) | 0;
    if ((i16 | 0) == 0) {
     i23 = 0;
     break L14;
    } else {
     i2 = i16;
    }
   }
   if ((i2 | 0) == 0) {
    i23 = 0;
    break;
   }
   i16 = (i4 | 0) == 0;
   i20 = i13 | 0;
   i18 = i12 | 0;
   i21 = i10 | 0;
   i19 = i2;
   while (1) {
    i26 = i19 + 32 | 0;
    if ((HEAP32[i19 + 12 >> 2] & 2048 | 0) == 0) {
     i27 = i26 | 0;
    } else {
     i27 = HEAP32[i26 >> 2] | 0;
    }
    L32 : do {
     if ((HEAP32[i27 >> 2] | 0) != 0) {
      do {
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 132 >> 2] & 1](i19) | 0) {
        __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i13, i19);
       } else {
        HEAP32[i21 >> 2] = i19;
        i26 = i19 + 8 | 0;
        HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
        __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i13, i10, 1);
        i26 = HEAP32[i21 >> 2] | 0;
        if ((i26 | 0) == 0) {
         break;
        }
        i28 = i26 + 8 | 0;
        i26 = i28 | 0;
        i29 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
        HEAP32[i26 >> 2] = i29;
        if ((i29 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
       }
      } while (0);
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i12, i13, 1);
      i28 = __ZN7WebCore10inSameLineERKNS_15VisiblePositionES2_(i12, i3) | 0;
      i29 = HEAP32[i18 >> 2] | 0;
      do {
       if ((i29 | 0) != 0) {
        i26 = i29 + 8 | 0;
        i30 = i26 | 0;
        i31 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
        HEAP32[i30 >> 2] = i31;
        if ((i31 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
       }
      } while (0);
      i29 = HEAP32[i20 >> 2] | 0;
      do {
       if ((i29 | 0) != 0) {
        i26 = i29 + 8 | 0;
        i31 = i26 | 0;
        i30 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
        HEAP32[i31 >> 2] = i30;
        if ((i30 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
        if (i28) {
         break L32;
        } else {
         i23 = i19;
         break L14;
        }
       }
      } while (0);
      if (!i28) {
       i23 = i19;
       break L14;
      }
     }
    } while (0);
    if ((i4 | 0) == 0) {
     i32 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i19, 0, 1) | 0;
    } else if ((i4 | 0) == 1) {
     i32 = __ZNK7WebCore4Node25isEditableToAccessibilityENS0_13EditableLevelE(i19, 0) | 0;
    } else {
     i32 = 0;
    }
    i29 = __ZN7WebCore16previousLeafNodeEPKNS_4NodeE(i19) | 0;
    if ((i29 | 0) == 0) {
     i23 = 0;
     break L14;
    }
    L57 : do {
     if (i16) {
      i26 = i29;
      while (1) {
       if (!(i32 ^ (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i26, 0, 1) | 0))) {
        i33 = i26;
        break L57;
       }
       i30 = __ZN7WebCore16previousLeafNodeEPKNS_4NodeE(i26) | 0;
       if ((i30 | 0) == 0) {
        i23 = 0;
        break L14;
       } else {
        i26 = i30;
       }
      }
     } else {
      i26 = i29;
      while (1) {
       if ((i4 | 0) == 1) {
        if (!(i32 ^ (__ZNK7WebCore4Node25isEditableToAccessibilityENS0_13EditableLevelE(i26, 0) | 0))) {
         i33 = i26;
         break L57;
        }
       } else {
        if (!i32) {
         i33 = i26;
         break L57;
        }
       }
       i28 = __ZN7WebCore16previousLeafNodeEPKNS_4NodeE(i26) | 0;
       if ((i28 | 0) == 0) {
        i23 = 0;
        break L14;
       } else {
        i26 = i28;
       }
      }
     }
    } while (0);
    if ((i33 | 0) == 0) {
     i23 = 0;
     break;
    } else {
     i19 = i33;
    }
   }
  }
 } while (0);
 i33 = i14 | 0;
 i32 = i6 | 0;
 i3 = i7 | 0;
 i12 = i1 | 0;
 i13 = i15 | 0;
 i10 = i1 + 4 | 0;
 i27 = i15 + 4 | 0;
 i24 = i15 + 8 | 0;
 i22 = i1 + 8 | 0;
 i1 = i22;
 i11 = i8 | 0;
 i19 = i9 | 0;
 i16 = i23;
 while (1) {
  if ((i16 | 0) == 0) {
   break;
  }
  i23 = i16 + 12 | 0;
  if ((HEAP32[i23 >> 2] & 4096 | 0) != 0) {
   if ((HEAP32[(HEAP32[i16 + 20 >> 2] | 0) + 4 >> 2] | 0) == (i16 | 0)) {
    break;
   }
  }
  do {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 132 >> 2] & 1](i16) | 0) {
    __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i14, i16);
   } else {
    HEAP32[i19 >> 2] = i16;
    i20 = i16 + 8 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i14, i9, 1);
    i20 = HEAP32[i19 >> 2] | 0;
    if ((i20 | 0) == 0) {
     break;
    }
    i18 = i20 + 8 | 0;
    i20 = i18 | 0;
    i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
    HEAP32[i20 >> 2] = i21;
    if ((i21 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
   }
  } while (0);
  i18 = (__ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i14, i4) | 0) == (i17 | 0);
  i21 = HEAP32[i33 >> 2] | 0;
  do {
   if ((i21 | 0) != 0) {
    i20 = i21 + 8 | 0;
    i2 = i20 | 0;
    i29 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
    HEAP32[i2 >> 2] = i29;
    if ((i29 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
   }
  } while (0);
  if (!i18) {
   break;
  }
  do {
   if ((HEAP32[i23 >> 2] & 4 | 0) == 0) {
    i25 = 74;
   } else {
    i21 = HEAP32[i16 + 44 >> 2] | 0;
    i20 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
    if ((i21 | 0) != (i20 | 0)) {
     if ((HEAP32[i21 + 12 >> 2] | 0) != (HEAP32[i20 + 12 >> 2] | 0)) {
      i25 = 74;
      break;
     }
     if ((HEAP32[i21 + 16 >> 2] | 0) != (HEAP32[i20 + 16 >> 2] | 0)) {
      i25 = 74;
      break;
     }
    }
    HEAP32[i11 >> 2] = i16;
    i20 = i16 + 8 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i15, i8, 1);
    i20 = HEAP32[i11 >> 2] | 0;
    if ((i20 | 0) == 0) {
     break;
    }
    i21 = i20 + 8 | 0;
    i20 = i21 | 0;
    i29 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
    HEAP32[i20 >> 2] = i29;
    if ((i29 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
   }
  } while (0);
  do {
   if ((i25 | 0) == 74) {
    i25 = 0;
    i23 = i16 + 8 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
    i23 = __ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(i16) | 0;
    HEAP32[i32 >> 2] = i16;
    HEAP32[i3 >> 2] = i23;
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i15, i6, i7);
    i23 = HEAP32[i32 >> 2] | 0;
    if ((i23 | 0) == 0) {
     break;
    }
    i18 = i23 + 8 | 0;
    i23 = i18 | 0;
    i21 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
    HEAP32[i23 >> 2] = i21;
    if ((i21 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
   }
  } while (0);
  L103 : do {
   if (__ZNK7WebCore8Position11isCandidateEv(i15) | 0) {
    i18 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = 0;
    HEAP32[i12 >> 2] = i18;
    HEAP32[i10 >> 2] = HEAP32[i27 >> 2];
    i18 = HEAP32[i24 >> 2] | 0;
    i21 = HEAP32[i1 >> 2] & -8 | i18 & 7;
    HEAP32[i1 >> 2] = i21;
    HEAP8[i22] = i21 & 255 & -9 | i18 & 8;
    i34 = 1;
    i35 = i16;
   } else {
    if ((i4 | 0) == 0) {
     i36 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i16, 0, 1) | 0;
    } else if ((i4 | 0) == 1) {
     i36 = __ZNK7WebCore4Node25isEditableToAccessibilityENS0_13EditableLevelE(i16, 0) | 0;
    } else {
     i36 = 0;
    }
    i18 = __ZN7WebCore16previousLeafNodeEPKNS_4NodeE(i16) | 0;
    if ((i18 | 0) == 0) {
     i34 = 0;
     i35 = 0;
     break;
    }
    if ((i4 | 0) == 0) {
     if (i36) {
      i21 = i18;
      while (1) {
       if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i21, 0, 1) | 0) {
        i34 = 0;
        i35 = i21;
        break L103;
       }
       i23 = __ZN7WebCore16previousLeafNodeEPKNS_4NodeE(i21) | 0;
       if ((i23 | 0) == 0) {
        i34 = 0;
        i35 = 0;
        break;
       } else {
        i21 = i23;
       }
      }
     } else {
      i21 = i18;
      while (1) {
       if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i21, 0, 1) | 0)) {
        i34 = 0;
        i35 = i21;
        break L103;
       }
       i23 = __ZN7WebCore16previousLeafNodeEPKNS_4NodeE(i21) | 0;
       if ((i23 | 0) == 0) {
        i34 = 0;
        i35 = 0;
        break;
       } else {
        i21 = i23;
       }
      }
     }
    } else if ((i4 | 0) == 1) {
     i21 = i18;
     while (1) {
      if (!(i36 ^ (__ZNK7WebCore4Node25isEditableToAccessibilityENS0_13EditableLevelE(i21, 0) | 0))) {
       i34 = 0;
       i35 = i21;
       break L103;
      }
      i23 = __ZN7WebCore16previousLeafNodeEPKNS_4NodeE(i21) | 0;
      if ((i23 | 0) == 0) {
       i34 = 0;
       i35 = 0;
       break;
      } else {
       i21 = i23;
      }
     }
    } else {
     if (i36) {
      i37 = i18;
     } else {
      i34 = 0;
      i35 = i18;
      break;
     }
     while (1) {
      i21 = __ZN7WebCore16previousLeafNodeEPKNS_4NodeE(i37) | 0;
      if ((i21 | 0) == 0) {
       i34 = 0;
       i35 = 0;
       break;
      } else {
       i37 = i21;
      }
     }
    }
   }
  } while (0);
  i18 = HEAP32[i13 >> 2] | 0;
  do {
   if ((i18 | 0) != 0) {
    i21 = i18 + 8 | 0;
    i23 = i21 | 0;
    i29 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
    HEAP32[i23 >> 2] = i29;
    if ((i29 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
   }
  } while (0);
  if (i34) {
   i25 = 101;
   break;
  } else {
   i16 = i35;
  }
 }
 if ((i25 | 0) == 101) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i12 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 i10 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i10 & -8;
 HEAP8[i22] = i10 & 255 & -16;
 STACKTOP = i5;
 return;
}
function __ZN7WebCoreL18endPositionForLineERKNS_15VisiblePositionENS_27LineEndpointComputationModeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 56 | 0;
 i10 = i4 + 64 | 0;
 i11 = i4 + 80 | 0;
 i12 = i4 + 96 | 0;
 i13 = i4 + 112 | 0;
 i14 = i4 + 120 | 0;
 i15 = i2 | 0;
 if ((HEAP32[i15 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i16 = i1 + 8 | 0;
  i17 = i16;
  i18 = HEAP32[i17 >> 2] | 0;
  HEAP32[i17 >> 2] = i18 & -8;
  HEAP8[i16] = i18 & 255 & -16;
  HEAP32[i1 + 12 >> 2] = 1;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore16RenderedPositionC1ERKNS_15VisiblePositionE(i7, i2);
 i18 = HEAP32[i7 + 4 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i7 = __ZN7WebCore9InlineBox4rootEv(i18) | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   L8 : do {
    if ((i3 | 0) == 0) {
     i16 = __ZNK7WebCore13RootInlineBox24getLogicalEndBoxWithNodeERPNS_9InlineBoxE(i7, i9) | 0;
     if ((i16 | 0) != 0) {
      i19 = i16;
      break;
     }
     HEAP32[i1 >> 2] = 0;
     HEAP32[i1 + 4 >> 2] = 0;
     i16 = i1 + 8 | 0;
     i17 = i16;
     i20 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = i20 & -8;
     HEAP8[i16] = i20 & 255 & -16;
     HEAP32[i1 + 12 >> 2] = 1;
     STACKTOP = i4;
     return;
    } else {
     i20 = __ZNK7WebCore13InlineFlowBox13lastLeafChildEv(i7 | 0) | 0;
     HEAP32[i9 >> 2] = i20;
     if ((i20 | 0) != 0) {
      i16 = i20;
      while (1) {
       i20 = HEAP32[i16 + 16 >> 2] | 0;
       i17 = i20 + 20 | 0;
       i21 = HEAP32[i17 >> 2] | 0;
       do {
        if ((i21 & 128 | 0) == 0) {
         i22 = HEAP32[i20 + 4 >> 2] | 0;
         if ((i22 | 0) == 0) {
          i23 = i21;
          i24 = 38;
          break;
         }
         if ((HEAP32[i22 + 12 >> 2] & 1048580 | 0) != 1048580) {
          i23 = i21;
          i24 = 38;
          break;
         }
         if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 232 >> 2] & 1](i22) | 0) != 0) {
          break;
         }
         i23 = HEAP32[i17 >> 2] | 0;
         i24 = 38;
        } else {
         i23 = i21;
         i24 = 38;
        }
       } while (0);
       do {
        if ((i24 | 0) == 38) {
         i24 = 0;
         if ((i23 & 128 | 0) != 0) {
          break;
         }
         i21 = HEAP32[i20 + 4 >> 2] | 0;
         if ((i21 | 0) != 0) {
          i19 = i21;
          break L8;
         }
        }
       } while (0);
       i16 = __ZNK7WebCore9InlineBox13prevLeafChildEv(HEAP32[i9 >> 2] | 0) | 0;
       HEAP32[i9 >> 2] = i16;
       if ((i16 | 0) == 0) {
        break;
       }
      }
     }
     HEAP32[i1 >> 2] = 0;
     HEAP32[i1 + 4 >> 2] = 0;
     i16 = i1 + 8 | 0;
     i20 = i16;
     i21 = HEAP32[i20 >> 2] | 0;
     HEAP32[i20 >> 2] = i21 & -8;
     HEAP8[i16] = i21 & 255 & -16;
     HEAP32[i1 + 12 >> 2] = 1;
     STACKTOP = i4;
     return;
    }
   } while (0);
   i7 = i10 | 0;
   HEAP32[i7 >> 2] = 0;
   i21 = i10 + 4 | 0;
   HEAP32[i21 >> 2] = 0;
   i16 = i10 + 8 | 0;
   i20 = i16;
   i17 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = i17 & -8;
   HEAP8[i16] = i17 & 255 & -16;
   i17 = i19 + 12 | 0;
   do {
    if ((HEAP32[i17 >> 2] & 4 | 0) == 0) {
     i24 = 59;
    } else {
     i22 = HEAP32[i19 + 44 >> 2] | 0;
     i25 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
     if ((i22 | 0) != (i25 | 0)) {
      if ((HEAP32[i22 + 12 >> 2] | 0) != (HEAP32[i25 + 12 >> 2] | 0)) {
       i24 = 59;
       break;
      }
      if ((HEAP32[i22 + 16 >> 2] | 0) != (HEAP32[i25 + 16 >> 2] | 0)) {
       i24 = 59;
       break;
      }
     }
     i25 = i5 | 0;
     HEAP32[i25 >> 2] = i19;
     if ((i19 | 0) != 0) {
      i22 = i19 + 8 | 0;
      HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
     }
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i11, i5, 1);
     i22 = HEAP32[i25 >> 2] | 0;
     do {
      if ((i22 | 0) != 0) {
       i25 = i22 + 8 | 0;
       i26 = i25 | 0;
       i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
       HEAP32[i26 >> 2] = i27;
       if ((i27 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
      }
     } while (0);
     i22 = i11 | 0;
     i25 = HEAP32[i22 >> 2] | 0;
     HEAP32[i22 >> 2] = 0;
     i27 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = i25;
     do {
      if ((i27 | 0) != 0) {
       i25 = i27 + 8 | 0;
       i26 = i25 | 0;
       i28 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
       HEAP32[i26 >> 2] = i28;
       if ((i28 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
      }
     } while (0);
     HEAP32[i21 >> 2] = HEAP32[i11 + 4 >> 2];
     i27 = HEAP32[i11 + 8 >> 2] | 0;
     i25 = HEAP32[i20 >> 2] & -8 | i27 & 7;
     HEAP32[i20 >> 2] = i25;
     HEAP8[i16] = i25 & 255 & -9 | i27 & 8;
     i27 = HEAP32[i22 >> 2] | 0;
     if ((i27 | 0) == 0) {
      break;
     }
     i25 = i27 + 8 | 0;
     i27 = i25 | 0;
     i28 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     HEAP32[i27 >> 2] = i28;
     if ((i28 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
    }
   } while (0);
   L50 : do {
    if ((i24 | 0) == 59) {
     i25 = HEAP32[i9 >> 2] | 0;
     do {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 44 >> 2] & 1](i25) | 0) {
       if ((HEAP32[i17 >> 2] & 1 | 0) == 0) {
        break;
       }
       i28 = HEAP32[i9 >> 2] | 0;
       i27 = HEAP32[i28 + 44 >> 2] | 0;
       if (__ZNK7WebCore13InlineTextBox11isLineBreakEv(i28) | 0) {
        i29 = i27;
       } else {
        i29 = (HEAPU16[i28 + 48 >> 1] | 0) + i27 | 0;
       }
       i27 = i13 | 0;
       HEAP32[i27 >> 2] = i19;
       if ((i19 | 0) != 0) {
        i28 = i19 + 8 | 0;
        HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
       }
       __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i12, i13, i29);
       i28 = i12 | 0;
       i26 = HEAP32[i28 >> 2] | 0;
       HEAP32[i28 >> 2] = 0;
       i30 = HEAP32[i7 >> 2] | 0;
       HEAP32[i7 >> 2] = i26;
       do {
        if ((i30 | 0) != 0) {
         i26 = i30 + 8 | 0;
         i31 = i26 | 0;
         i32 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
         HEAP32[i31 >> 2] = i32;
         if ((i32 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
        }
       } while (0);
       HEAP32[i21 >> 2] = HEAP32[i12 + 4 >> 2];
       i30 = HEAP32[i12 + 8 >> 2] | 0;
       i26 = HEAP32[i20 >> 2] & -8 | i30 & 7;
       HEAP32[i20 >> 2] = i26;
       HEAP8[i16] = i26 & 255 & -9 | i30 & 8;
       i30 = HEAP32[i28 >> 2] | 0;
       do {
        if ((i30 | 0) != 0) {
         i26 = i30 + 8 | 0;
         i32 = i26 | 0;
         i31 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
         HEAP32[i32 >> 2] = i31;
         if ((i31 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
        }
       } while (0);
       i30 = HEAP32[i27 >> 2] | 0;
       if ((i30 | 0) == 0) {
        break L50;
       }
       i28 = i30 + 8 | 0;
       i30 = i28 | 0;
       i26 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
       HEAP32[i30 >> 2] = i26;
       if ((i26 | 0) >= 1) {
        break L50;
       }
       if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
        break L50;
       }
       __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
       break L50;
      }
     } while (0);
     i25 = i6 | 0;
     HEAP32[i25 >> 2] = i19;
     if ((i19 | 0) != 0) {
      i22 = i19 + 8 | 0;
      HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
     }
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i14, i6, 2);
     i22 = HEAP32[i25 >> 2] | 0;
     do {
      if ((i22 | 0) != 0) {
       i25 = i22 + 8 | 0;
       i28 = i25 | 0;
       i26 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
       HEAP32[i28 >> 2] = i26;
       if ((i26 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
      }
     } while (0);
     i22 = i14 | 0;
     i25 = HEAP32[i22 >> 2] | 0;
     HEAP32[i22 >> 2] = 0;
     i26 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = i25;
     do {
      if ((i26 | 0) != 0) {
       i25 = i26 + 8 | 0;
       i28 = i25 | 0;
       i30 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
       HEAP32[i28 >> 2] = i30;
       if ((i30 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
      }
     } while (0);
     HEAP32[i21 >> 2] = HEAP32[i14 + 4 >> 2];
     i26 = HEAP32[i14 + 8 >> 2] | 0;
     i25 = HEAP32[i20 >> 2] & -8 | i26 & 7;
     HEAP32[i20 >> 2] = i25;
     HEAP8[i16] = i25 & 255 & -9 | i26 & 8;
     i26 = HEAP32[i22 >> 2] | 0;
     if ((i26 | 0) == 0) {
      break;
     }
     i25 = i26 + 8 | 0;
     i26 = i25 | 0;
     i30 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i30;
     if ((i30 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i10, 0);
   i16 = HEAP32[i7 >> 2] | 0;
   if ((i16 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i20 = i16 + 8 | 0;
   i16 = i20 | 0;
   i21 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   HEAP32[i16 >> 2] = i21;
   if ((i21 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i10 = i8 | 0;
 i14 = HEAP32[i15 >> 2] | 0;
 HEAP32[i10 >> 2] = i14;
 if ((i14 | 0) == 0) {
  i33 = 0;
 } else {
  i6 = i14 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  i33 = HEAP32[i10 >> 2] | 0;
 }
 i6 = i2 + 4 | 0;
 i14 = HEAP32[i6 >> 2] | 0;
 HEAP32[i8 + 4 >> 2] = i14;
 i19 = i2 + 8 | 0;
 i12 = i19;
 i29 = HEAP32[i12 >> 2] | 0;
 i13 = i8 + 8 | 0;
 i9 = i13;
 i11 = HEAP32[i9 >> 2] & -8 | i29 & 7;
 HEAP32[i9 >> 2] = i11;
 i5 = i29 & 8;
 HEAP8[i13] = i11 & 255 & -9 | i5;
 i11 = (HEAP32[i33 + 12 >> 2] & 2048 | 0) == 0;
 i13 = i33 + 32 | 0;
 if (i11) {
  i34 = i13 | 0;
 } else {
  i34 = HEAP32[i13 >> 2] | 0;
 }
 do {
  if ((HEAP32[i34 >> 2] | 0) == 0) {
   i24 = 23;
  } else {
   if (i11) {
    i35 = i13 | 0;
   } else {
    i35 = HEAP32[i13 >> 2] | 0;
   }
   i33 = HEAP32[i35 >> 2] | 0;
   if ((HEAP32[i33 + 20 >> 2] & 768 | 0) == 256) {
    i24 = 23;
    break;
   }
   if ((HEAP32[i33 + 24 >> 2] & 16 | 0) == 0) {
    i24 = 23;
    break;
   }
   do {
    if (i5 << 24 >> 24 == 0) {
     i33 = HEAP32[i9 >> 2] & 7;
     if (!((i33 | 0) == 2 | (i33 | 0) == 4)) {
      i36 = i14;
      break;
     }
     i36 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i8) | 0;
    } else {
     i36 = i14;
    }
   } while (0);
   if ((i36 | 0) != 0) {
    i24 = 23;
    break;
   }
   i7 = HEAP32[i15 >> 2] | 0;
   HEAP32[i1 >> 2] = i7;
   if ((i7 | 0) != 0) {
    i33 = i7 + 8 | 0;
    HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
   }
   HEAP32[i1 + 4 >> 2] = HEAP32[i6 >> 2];
   i33 = i1 + 8 | 0;
   i7 = i33;
   i29 = HEAP32[i7 >> 2] & -8 | HEAP32[i12 >> 2] & 7;
   HEAP32[i7 >> 2] = i29;
   HEAP8[i33] = i29 & 255 & -9 | HEAP8[i19] & 8;
   HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
  }
 } while (0);
 if ((i24 | 0) == 23) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i24 = i1 + 8 | 0;
  i2 = i24;
  i19 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i19 & -8;
  HEAP8[i24] = i19 & 255 & -16;
  HEAP32[i1 + 12 >> 2] = 1;
 }
 i1 = HEAP32[i10 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i10 = i1 + 8 | 0;
 i1 = i10 | 0;
 i19 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i19;
 if ((i19 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 56 | 0;
 i10 = i4 + 64 | 0;
 i11 = i4 + 80 | 0;
 i12 = i4 + 88 | 0;
 i13 = i4 + 104 | 0;
 i14 = i6 | 0;
 i15 = HEAP32[i2 >> 2] | 0;
 HEAP32[i14 >> 2] = i15;
 if ((i15 | 0) == 0) {
  i16 = i6 + 8 | 0;
  i17 = 0;
  i18 = 0;
  i19 = i16;
  i20 = i16;
 } else {
  i16 = i15 + 8 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
  i16 = i6 + 8 | 0;
  i15 = i16;
  i17 = HEAP32[i15 >> 2] & -8;
  i18 = HEAP32[i14 >> 2] | 0;
  i19 = i16;
  i20 = i15;
 }
 i15 = i6 + 4 | 0;
 HEAP32[i15 >> 2] = HEAP32[i2 + 4 >> 2];
 i16 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i17 | i16 & 7;
 HEAP32[i20 >> 2] = i2;
 HEAP8[i19] = i2 & 255 & -9 | i16 & 8;
 do {
  if ((i18 | 0) == 0) {
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   i16 = i1 + 8 | 0;
   i2 = i16;
   i17 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i17 & -8;
   HEAP8[i16] = i17 & 255 & -16;
   HEAP32[i1 + 12 >> 2] = 1;
  } else {
   if (__ZN7WebCore35isRenderedAsNonInlineTableImageOrHREPKNS_4NodeE(i18) | 0) {
    i17 = i5 | 0;
    HEAP32[i17 >> 2] = i18;
    i16 = i18 + 8 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i7, i5, 1);
    i16 = HEAP32[i17 >> 2] | 0;
    do {
     if ((i16 | 0) != 0) {
      i17 = i16 + 8 | 0;
      i2 = i17 | 0;
      i21 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
      HEAP32[i2 >> 2] = i21;
      if ((i21 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i7, 1);
    i16 = HEAP32[i7 >> 2] | 0;
    if ((i16 | 0) == 0) {
     break;
    }
    i17 = i16 + 8 | 0;
    i16 = i17 | 0;
    i21 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
    HEAP32[i16 >> 2] = i21;
    if ((i21 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
    break;
   }
   i17 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(i18, 1) | 0;
   i21 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i6, 0) | 0;
   do {
    if ((HEAP8[i19] & 8) == 0) {
     i16 = HEAP32[i20 >> 2] & 7;
     if (!((i16 | 0) == 2 | (i16 | 0) == 4)) {
      i22 = 17;
      break;
     }
     i23 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i6) | 0;
    } else {
     i22 = 17;
    }
   } while (0);
   if ((i22 | 0) == 17) {
    i23 = HEAP32[i15 >> 2] | 0;
   }
   i16 = HEAP32[i20 >> 2] & 7;
   i2 = i18;
   i24 = i23;
   i25 = i18;
   L25 : while (1) {
    i26 = i16;
    i27 = i2;
    i28 = i25;
    L27 : while (1) {
     i29 = i27;
     L29 : while (1) {
      do {
       if ((i3 | 0) == 2) {
        if ((i29 | 0) == 0) {
         i22 = 69;
         break L25;
        } else {
         i30 = i29;
        }
        while (1) {
         i31 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i30, 0, 1) | 0;
         if (!(i31 ^ (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i18, 0, 1) | 0))) {
          break;
         }
         i31 = __ZN7WebCore13NodeTraversal17previousPostOrderEPKNS_4NodeES3_(i30, i17) | 0;
         if ((i31 | 0) == 0) {
          i22 = 69;
          break L25;
         } else {
          i30 = i31;
         }
        }
        if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i30, i21) | 0) {
         i32 = i30;
        } else {
         i22 = 69;
         break L25;
        }
       } else if ((i3 | 0) == 1) {
        if (__ZN7WebCore8Position19nodeIsUserSelectAllEPKNS_4NodeE(i29) | 0) {
         i32 = i29;
         break;
        }
        i31 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i29, 0, 1) | 0;
        if (i31 ^ (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i18, 0, 1) | 0)) {
         i22 = 69;
         break L25;
        } else {
         i32 = i29;
        }
       } else {
        i32 = i29;
       }
      } while (0);
      i31 = i32 + 32 | 0;
      if ((HEAP32[i32 + 12 >> 2] & 2048 | 0) == 0) {
       i33 = i31 | 0;
      } else {
       i33 = HEAP32[i31 >> 2] | 0;
      }
      i34 = HEAP32[i33 >> 2] | 0;
      do {
       if ((i34 | 0) == 0) {
        i35 = __ZN7WebCore13NodeTraversal17previousPostOrderEPKNS_4NodeES3_(i32, i17) | 0;
       } else {
        i31 = i34 + 20 | 0;
        i36 = HEAP32[i31 >> 2] | 0;
        if ((i36 & 768 | 0) == 256) {
         i37 = HEAP32[(HEAP32[i34 + 8 >> 2] | 0) + 36 >> 2] | 0;
        } else {
         i37 = HEAP32[i34 + 36 >> 2] | 0;
        }
        if ((HEAP32[i37 + 40 >> 2] & 6144 | 0) != 0) {
         i35 = __ZN7WebCore13NodeTraversal17previousPostOrderEPKNS_4NodeES3_(i32, i17) | 0;
         break;
        }
        if ((i36 & 4096 | 0) != 0) {
         if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i34 >> 2] | 0) + 620 >> 2] & 1](i34) | 0)) {
          i22 = 69;
          break L25;
         }
        }
        if (__ZN7WebCore7isBlockEPKNS_4NodeE(i32) | 0) {
         i22 = 69;
         break L25;
        }
        if ((HEAP32[i31 >> 2] & 768 | 0) == 256) {
         if (__ZNK7WebCore10RenderText15hasRenderedTextEv(i34) | 0) {
          break L27;
         }
        }
        if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i32 >> 2] | 0) + 132 >> 2] & 1](i32) | 0)) {
         break L29;
        }
        if (__ZN7WebCore14isTableElementEPNS_4NodeE(i32) | 0) {
         break L29;
        }
        i35 = __ZN7WebCore13NodeTraversal17previousPostOrderEPKNS_4NodeES3_(i32, i17) | 0;
       }
      } while (0);
      if ((i35 | 0) == 0) {
       i22 = 69;
       break L25;
      } else {
       i29 = i35;
      }
     }
     i29 = HEAP32[i32 + 24 >> 2] | 0;
     if ((i29 | 0) != 0) {
      i26 = 1;
      i27 = i29;
      i28 = i32;
      continue;
     }
     i29 = __ZN7WebCore13NodeTraversal17previousPostOrderEPKNS_4NodeES3_(i32, i17) | 0;
     if ((i29 | 0) == 0) {
      i38 = i32;
      i39 = 1;
      i22 = 80;
      break L25;
     } else {
      i26 = 1;
      i27 = i29;
      i28 = i32;
     }
    }
    i27 = HEAP32[i37 + 44 >> 2] & 7;
    L67 : do {
     if (!((i27 | 0) == 4 | (i27 | 0) == 0)) {
      i29 = i34 + 44 | 0;
      i31 = HEAP32[i29 >> 2] | 0;
      if ((HEAP32[i31 + 16 >> 2] & 32 | 0) == 0) {
       i40 = HEAP32[i31 + 8 >> 2] | 0;
       i41 = i31;
      } else {
       i36 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i31) | 0;
       i40 = i36;
       i41 = HEAP32[i29 >> 2] | 0;
      }
      i29 = HEAP32[i41 + 4 >> 2] | 0;
      if ((i32 | 0) == (i18 | 0) & (i24 | 0) < (i29 | 0)) {
       i42 = (i24 | 0) > 0 ? i24 : 0;
      } else {
       i42 = i29;
      }
      while (1) {
       i29 = i42 - 1 | 0;
       if ((i42 | 0) <= 0) {
        break L67;
       }
       if ((HEAP16[i40 + (i29 << 1) >> 1] | 0) == 10) {
        i22 = 53;
        break L25;
       } else {
        i42 = i29;
       }
      }
     }
    } while (0);
    i27 = __ZN7WebCore13NodeTraversal17previousPostOrderEPKNS_4NodeES3_(i32, i17) | 0;
    if ((i27 | 0) == 0) {
     i43 = 0;
     i44 = i32;
     i22 = 70;
     break;
    } else {
     i16 = 0;
     i2 = i27;
     i24 = 0;
     i25 = i32;
    }
   }
   if ((i22 | 0) == 53) {
    i25 = i9 | 0;
    HEAP32[i25 >> 2] = i32;
    if ((i32 | 0) != 0) {
     i2 = i32 + 8 | 0;
     HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
    }
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i8, i9, i42);
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i8, 1);
    i2 = HEAP32[i8 >> 2] | 0;
    do {
     if ((i2 | 0) != 0) {
      i16 = i2 + 8 | 0;
      i17 = i16 | 0;
      i21 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
      HEAP32[i17 >> 2] = i21;
      if ((i21 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
     }
    } while (0);
    i2 = HEAP32[i25 >> 2] | 0;
    if ((i2 | 0) == 0) {
     break;
    }
    i16 = i2 + 8 | 0;
    i2 = i16 | 0;
    i21 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
    HEAP32[i2 >> 2] = i21;
    if ((i21 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    break;
   } else if ((i22 | 0) == 69) {
    if ((i26 | 0) == 0) {
     i43 = i24;
     i44 = i28;
     i22 = 70;
    } else {
     i38 = i28;
     i39 = i26;
     i22 = 80;
    }
   }
   if ((i22 | 0) == 70) {
    i16 = i11 | 0;
    HEAP32[i16 >> 2] = i44;
    if ((i44 | 0) != 0) {
     i21 = i44 + 8 | 0;
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
    }
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i10, i11, i43, 0);
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i10, 1);
    i21 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i21 | 0) != 0) {
      i2 = i21 + 8 | 0;
      i17 = i2 | 0;
      i27 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
      HEAP32[i17 >> 2] = i27;
      if ((i27 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
     }
    } while (0);
    i21 = HEAP32[i16 >> 2] | 0;
    if ((i21 | 0) == 0) {
     break;
    }
    i24 = i21 + 8 | 0;
    i21 = i24 | 0;
    i25 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
    HEAP32[i21 >> 2] = i25;
    if ((i25 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
    break;
   } else if ((i22 | 0) == 80) {
    i24 = i13 | 0;
    HEAP32[i24 >> 2] = i38;
    if ((i38 | 0) != 0) {
     i25 = i38 + 8 | 0;
     HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
    }
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i12, i13, i39);
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i12, 1);
    i25 = HEAP32[i12 >> 2] | 0;
    do {
     if ((i25 | 0) != 0) {
      i21 = i25 + 8 | 0;
      i2 = i21 | 0;
      i27 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
      HEAP32[i2 >> 2] = i27;
      if ((i27 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
     }
    } while (0);
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     break;
    }
    i16 = i25 + 8 | 0;
    i25 = i16 | 0;
    i21 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
    HEAP32[i25 >> 2] = i21;
    if ((i21 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i14 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i14 = i12 + 8 | 0;
 i12 = i14 | 0;
 i1 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 HEAP32[i12 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL34nextRootInlineBoxCandidatePositionEPNS_4NodeERKNS_15VisiblePositionENS_12EditableTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 48 | 0;
 i12 = i5 + 64 | 0;
 i13 = i5 + 80 | 0;
 i14 = i5 + 96 | 0;
 i15 = i5 + 112 | 0;
 i16 = i10 | 0;
 i17 = HEAP32[i3 >> 2] | 0;
 HEAP32[i16 >> 2] = i17;
 if ((i17 | 0) == 0) {
  i18 = i10 + 8 | 0;
  i19 = 0;
  i20 = i18;
  i21 = i18;
 } else {
  i18 = i17 + 8 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
  i18 = i10 + 8 | 0;
  i17 = i18;
  i19 = HEAP32[i17 >> 2] & -8;
  i20 = i18;
  i21 = i17;
 }
 HEAP32[i10 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 i17 = HEAP32[i3 + 8 >> 2] | 0;
 i18 = i19 | i17 & 7;
 HEAP32[i21 >> 2] = i18;
 HEAP8[i20] = i18 & 255 & -9 | i17 & 8;
 i17 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i10, i4) | 0;
 i10 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i16 = i10 + 8 | 0;
   i18 = i16 | 0;
   i20 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
  }
 } while (0);
 L10 : do {
  if ((i2 | 0) == 0) {
   i22 = 0;
  } else {
   if ((i4 | 0) == 0) {
    i23 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i2, 0, 1) | 0;
   } else if ((i4 | 0) == 1) {
    i23 = __ZNK7WebCore4Node25isEditableToAccessibilityENS0_13EditableLevelE(i2, 0) | 0;
   } else {
    i23 = 0;
   }
   i10 = __ZN7WebCore12nextLeafNodeEPKNS_4NodeE(i2) | 0;
   if ((i10 | 0) == 0) {
    i22 = 0;
    break;
   } else {
    i24 = i10;
   }
   while (1) {
    if ((i4 | 0) == 0) {
     i25 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i24, 0, 1) | 0;
     i26 = 17;
    } else if ((i4 | 0) == 1) {
     i25 = __ZNK7WebCore4Node25isEditableToAccessibilityENS0_13EditableLevelE(i24, 0) | 0;
     i26 = 17;
    } else {
     if (!i23) {
      break;
     }
    }
    if ((i26 | 0) == 17) {
     i26 = 0;
     if (!(i23 ^ i25)) {
      break;
     }
    }
    i10 = __ZN7WebCore12nextLeafNodeEPKNS_4NodeE(i24) | 0;
    if ((i10 | 0) == 0) {
     i22 = 0;
     break L10;
    } else {
     i24 = i10;
    }
   }
   if ((i24 | 0) == 0) {
    i22 = 0;
    break;
   }
   i10 = i12 | 0;
   i16 = i11 | 0;
   i20 = i9 | 0;
   i18 = i24;
   while (1) {
    i21 = i18 + 32 | 0;
    if ((HEAP32[i18 + 12 >> 2] & 2048 | 0) == 0) {
     i27 = i21 | 0;
    } else {
     i27 = HEAP32[i21 >> 2] | 0;
    }
    L33 : do {
     if ((HEAP32[i27 >> 2] | 0) != 0) {
      do {
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 132 >> 2] & 1](i18) | 0) {
        __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i12, i18);
       } else {
        HEAP32[i20 >> 2] = i18;
        i21 = i18 + 8 | 0;
        HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
        __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i12, i9, 1);
        i21 = HEAP32[i20 >> 2] | 0;
        if ((i21 | 0) == 0) {
         break;
        }
        i19 = i21 + 8 | 0;
        i21 = i19 | 0;
        i28 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
        HEAP32[i21 >> 2] = i28;
        if ((i28 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
       }
      } while (0);
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i11, i12, 1);
      i19 = __ZN7WebCore10inSameLineERKNS_15VisiblePositionES2_(i11, i3) | 0;
      i28 = HEAP32[i16 >> 2] | 0;
      do {
       if ((i28 | 0) != 0) {
        i21 = i28 + 8 | 0;
        i29 = i21 | 0;
        i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
        HEAP32[i29 >> 2] = i30;
        if ((i30 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
       }
      } while (0);
      i28 = HEAP32[i10 >> 2] | 0;
      do {
       if ((i28 | 0) != 0) {
        i21 = i28 + 8 | 0;
        i30 = i21 | 0;
        i29 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
        HEAP32[i30 >> 2] = i29;
        if ((i29 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
        if (i19) {
         break L33;
        } else {
         i22 = i18;
         break L10;
        }
       }
      } while (0);
      if (!i19) {
       i22 = i18;
       break L10;
      }
     }
    } while (0);
    i28 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i18, 0, 1) | 0;
    i21 = __ZN7WebCore12nextLeafNodeEPKNS_4NodeE(i18) | 0;
    if ((i21 | 0) == 0) {
     i22 = 0;
     break L10;
    } else {
     i31 = i21;
    }
    while (1) {
     if (!(i28 ^ (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i31, 0, 1) | 0))) {
      break;
     }
     i21 = __ZN7WebCore12nextLeafNodeEPKNS_4NodeE(i31) | 0;
     if ((i21 | 0) == 0) {
      i22 = 0;
      break L10;
     } else {
      i31 = i21;
     }
    }
    if ((i31 | 0) == 0) {
     i22 = 0;
     break;
    } else {
     i18 = i31;
    }
   }
  }
 } while (0);
 i31 = i13 | 0;
 i3 = i14 | 0;
 i11 = i14 + 4 | 0;
 i12 = i14 + 8 | 0;
 i9 = i12;
 i27 = i6 | 0;
 i24 = i7 | 0;
 i25 = i15 | 0;
 i23 = i15 + 4 | 0;
 i2 = i15 + 8 | 0;
 i18 = i1 | 0;
 i10 = i1 + 4 | 0;
 i16 = i1 + 8 | 0;
 i1 = i16;
 i20 = i8 | 0;
 i28 = i22;
 while (1) {
  if ((i28 | 0) == 0) {
   break;
  }
  if ((HEAP32[i28 + 12 >> 2] & 4096 | 0) != 0) {
   if ((HEAP32[(HEAP32[i28 + 20 >> 2] | 0) + 4 >> 2] | 0) == (i28 | 0)) {
    break;
   }
  }
  do {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 132 >> 2] & 1](i28) | 0) {
    __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i13, i28);
   } else {
    HEAP32[i20 >> 2] = i28;
    i22 = i28 + 8 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i13, i8, 1);
    i22 = HEAP32[i20 >> 2] | 0;
    if ((i22 | 0) == 0) {
     break;
    }
    i21 = i22 + 8 | 0;
    i22 = i21 | 0;
    i29 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
    HEAP32[i22 >> 2] = i29;
    if ((i29 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
   }
  } while (0);
  i21 = (__ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i13, i4) | 0) == (i17 | 0);
  i29 = HEAP32[i31 >> 2] | 0;
  do {
   if ((i29 | 0) != 0) {
    i22 = i29 + 8 | 0;
    i30 = i22 | 0;
    i32 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
    HEAP32[i30 >> 2] = i32;
    if ((i32 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
   }
  } while (0);
  if (!i21) {
   break;
  }
  HEAP32[i3 >> 2] = 0;
  HEAP32[i11 >> 2] = 0;
  i29 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i29 & -8;
  HEAP8[i12] = i29 & 255 & -16;
  i29 = i28 + 8 | 0;
  HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
  i29 = __ZN7WebCore14caretMinOffsetEPKNS_4NodeE(i28) | 0;
  HEAP32[i27 >> 2] = i28;
  HEAP32[i24 >> 2] = i29;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i15, i6, i7);
  i29 = HEAP32[i27 >> 2] | 0;
  do {
   if ((i29 | 0) != 0) {
    i22 = i29 + 8 | 0;
    i32 = i22 | 0;
    i30 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
    HEAP32[i32 >> 2] = i30;
    if ((i30 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
   }
  } while (0);
  i29 = HEAP32[i25 >> 2] | 0;
  HEAP32[i25 >> 2] = 0;
  i21 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i29;
  do {
   if ((i21 | 0) != 0) {
    i29 = i21 + 8 | 0;
    i22 = i29 | 0;
    i30 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
    HEAP32[i22 >> 2] = i30;
    if ((i30 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
   }
  } while (0);
  HEAP32[i11 >> 2] = HEAP32[i23 >> 2];
  i21 = HEAP32[i2 >> 2] | 0;
  i29 = HEAP32[i9 >> 2] & -8 | i21 & 7;
  HEAP32[i9 >> 2] = i29;
  HEAP8[i12] = i29 & 255 & -9 | i21 & 8;
  i21 = HEAP32[i25 >> 2] | 0;
  do {
   if ((i21 | 0) != 0) {
    i29 = i21 + 8 | 0;
    i30 = i29 | 0;
    i22 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
    HEAP32[i30 >> 2] = i22;
    if ((i22 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
   }
  } while (0);
  L92 : do {
   if (__ZNK7WebCore8Position11isCandidateEv(i14) | 0) {
    i21 = HEAP32[i3 >> 2] | 0;
    HEAP32[i3 >> 2] = 0;
    HEAP32[i18 >> 2] = i21;
    HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
    i21 = HEAP32[i9 >> 2] | 0;
    i29 = HEAP32[i1 >> 2] & -8 | i21 & 7;
    HEAP32[i1 >> 2] = i29;
    HEAP8[i16] = i29 & 255 & -9 | i21 & 8;
    i33 = 1;
    i34 = i28;
   } else {
    if ((i4 | 0) == 0) {
     i35 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i28, 0, 1) | 0;
    } else if ((i4 | 0) == 1) {
     i35 = __ZNK7WebCore4Node25isEditableToAccessibilityENS0_13EditableLevelE(i28, 0) | 0;
    } else {
     i35 = 0;
    }
    i21 = __ZN7WebCore12nextLeafNodeEPKNS_4NodeE(i28) | 0;
    if ((i21 | 0) == 0) {
     i33 = 0;
     i34 = 0;
     break;
    } else {
     i36 = i21;
    }
    while (1) {
     if ((i4 | 0) == 0) {
      i37 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i36, 0, 1) | 0;
      i26 = 81;
     } else if ((i4 | 0) == 1) {
      i37 = __ZNK7WebCore4Node25isEditableToAccessibilityENS0_13EditableLevelE(i36, 0) | 0;
      i26 = 81;
     } else {
      if (!i35) {
       i33 = 0;
       i34 = i36;
       break L92;
      }
     }
     if ((i26 | 0) == 81) {
      i26 = 0;
      if (!(i35 ^ i37)) {
       i33 = 0;
       i34 = i36;
       break L92;
      }
     }
     i21 = __ZN7WebCore12nextLeafNodeEPKNS_4NodeE(i36) | 0;
     if ((i21 | 0) == 0) {
      i33 = 0;
      i34 = 0;
      break;
     } else {
      i36 = i21;
     }
    }
   }
  } while (0);
  i21 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i21 | 0) != 0) {
    i29 = i21 + 8 | 0;
    i22 = i29 | 0;
    i30 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
    HEAP32[i22 >> 2] = i30;
    if ((i30 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
   }
  } while (0);
  if (i33) {
   i26 = 90;
   break;
  } else {
   i28 = i34;
  }
 }
 if ((i26 | 0) == 90) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i18 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 i10 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i10 & -8;
 HEAP8[i16] = i10 & 255 & -16;
 STACKTOP = i5;
 return;
}
function __ZN7WebCoreL11startOfLineERKNS_15VisiblePositionENS_27LineEndpointComputationModeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 56 | 0;
 i10 = i4 + 72 | 0;
 i11 = i4 + 80 | 0;
 i12 = i4 + 96 | 0;
 i13 = i4 + 112 | 0;
 i14 = i4 + 128 | 0;
 i15 = i2 | 0;
 L1 : do {
  if ((HEAP32[i15 >> 2] | 0) == 0) {
   _memset(i11 | 0, 0, 12) | 0;
   HEAP32[i11 + 12 >> 2] = 1;
  } else {
   __ZN7WebCore16RenderedPositionC1ERKNS_15VisiblePositionE(i6, i2);
   i16 = HEAP32[i6 + 4 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i17 = __ZN7WebCore9InlineBox4rootEv(i16) | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     L7 : do {
      if ((i3 | 0) == 0) {
       i18 = __ZNK7WebCore13RootInlineBox26getLogicalStartBoxWithNodeERPNS_9InlineBoxE(i17, i8) | 0;
       if ((i18 | 0) != 0) {
        i19 = i18;
        break;
       }
       HEAP32[i11 >> 2] = 0;
       HEAP32[i11 + 4 >> 2] = 0;
       i18 = i11 + 8 | 0;
       i20 = i18;
       i21 = HEAP32[i20 >> 2] | 0;
       HEAP32[i20 >> 2] = i21 & -8;
       HEAP8[i18] = i21 & 255 & -16;
       HEAP32[i11 + 12 >> 2] = 1;
       break L1;
      } else {
       i21 = __ZNK7WebCore13InlineFlowBox14firstLeafChildEv(i17 | 0) | 0;
       HEAP32[i8 >> 2] = i21;
       if ((i21 | 0) != 0) {
        i18 = i21;
        while (1) {
         i21 = HEAP32[i18 + 16 >> 2] | 0;
         i20 = i21 + 20 | 0;
         i22 = HEAP32[i20 >> 2] | 0;
         do {
          if ((i22 & 128 | 0) == 0) {
           i23 = HEAP32[i21 + 4 >> 2] | 0;
           if ((i23 | 0) == 0) {
            i24 = i22;
            i25 = 38;
            break;
           }
           if ((HEAP32[i23 + 12 >> 2] & 1048580 | 0) != 1048580) {
            i24 = i22;
            i25 = 38;
            break;
           }
           if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i23 >> 2] | 0) + 232 >> 2] & 1](i23) | 0) != 0) {
            break;
           }
           i24 = HEAP32[i20 >> 2] | 0;
           i25 = 38;
          } else {
           i24 = i22;
           i25 = 38;
          }
         } while (0);
         do {
          if ((i25 | 0) == 38) {
           i25 = 0;
           if ((i24 & 128 | 0) != 0) {
            break;
           }
           i22 = HEAP32[i21 + 4 >> 2] | 0;
           if ((i22 | 0) != 0) {
            i19 = i22;
            break L7;
           }
          }
         } while (0);
         i18 = __ZNK7WebCore9InlineBox13nextLeafChildEv(HEAP32[i8 >> 2] | 0) | 0;
         HEAP32[i8 >> 2] = i18;
         if ((i18 | 0) == 0) {
          break;
         }
        }
       }
       HEAP32[i11 >> 2] = 0;
       HEAP32[i11 + 4 >> 2] = 0;
       i18 = i11 + 8 | 0;
       i21 = i18;
       i22 = HEAP32[i21 >> 2] | 0;
       HEAP32[i21 >> 2] = i22 & -8;
       HEAP8[i18] = i22 & 255 & -16;
       HEAP32[i11 + 12 >> 2] = 1;
       break L1;
      }
     } while (0);
     if ((HEAP32[i19 + 12 >> 2] & 1 | 0) == 0) {
      i17 = i5 | 0;
      HEAP32[i17 >> 2] = i19;
      i22 = i19 + 8 | 0;
      HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i9, i5, 1);
      i22 = HEAP32[i17 >> 2] | 0;
      do {
       if ((i22 | 0) != 0) {
        i17 = i22 + 8 | 0;
        i18 = i17 | 0;
        i21 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
        HEAP32[i18 >> 2] = i21;
        if ((i21 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
       }
      } while (0);
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i11, i9, 1);
      i22 = HEAP32[i9 >> 2] | 0;
      if ((i22 | 0) == 0) {
       break L1;
      }
      i17 = i22 + 8 | 0;
      i22 = i17 | 0;
      i21 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
      HEAP32[i22 >> 2] = i21;
      if ((i21 | 0) >= 1) {
       break L1;
      }
      if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
       break L1;
      }
      __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
      break L1;
     } else {
      i17 = i10 | 0;
      HEAP32[i17 >> 2] = i19;
      i21 = i19 + 8 | 0;
      HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i9, i10, HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] | 0);
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i11, i9, 1);
      i21 = HEAP32[i9 >> 2] | 0;
      do {
       if ((i21 | 0) != 0) {
        i22 = i21 + 8 | 0;
        i18 = i22 | 0;
        i20 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
        HEAP32[i18 >> 2] = i20;
        if ((i20 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
       }
      } while (0);
      i21 = HEAP32[i17 >> 2] | 0;
      if ((i21 | 0) == 0) {
       break L1;
      }
      i22 = i21 + 8 | 0;
      i21 = i22 | 0;
      i20 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
      HEAP32[i21 >> 2] = i20;
      if ((i20 | 0) >= 1) {
       break L1;
      }
      if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
       break L1;
      }
      __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
      break L1;
     }
    }
   } while (0);
   i16 = i7 | 0;
   i22 = HEAP32[i15 >> 2] | 0;
   HEAP32[i16 >> 2] = i22;
   if ((i22 | 0) == 0) {
    i26 = 0;
   } else {
    i20 = i22 + 8 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
    i26 = HEAP32[i16 >> 2] | 0;
   }
   i20 = i2 + 4 | 0;
   i22 = HEAP32[i20 >> 2] | 0;
   HEAP32[i7 + 4 >> 2] = i22;
   i21 = i2 + 8 | 0;
   i18 = HEAP32[i21 >> 2] | 0;
   i23 = i7 + 8 | 0;
   i27 = i23;
   i28 = HEAP32[i27 >> 2] & -8 | i18 & 7;
   HEAP32[i27 >> 2] = i28;
   i29 = i18 & 8;
   HEAP8[i23] = i28 & 255 & -9 | i29;
   i28 = (HEAP32[i26 + 12 >> 2] & 2048 | 0) == 0;
   i23 = i26 + 32 | 0;
   if (i28) {
    i30 = i23 | 0;
   } else {
    i30 = HEAP32[i23 >> 2] | 0;
   }
   do {
    if ((HEAP32[i30 >> 2] | 0) == 0) {
     i25 = 23;
    } else {
     if (i28) {
      i31 = i23 | 0;
     } else {
      i31 = HEAP32[i23 >> 2] | 0;
     }
     i18 = HEAP32[i31 >> 2] | 0;
     if ((HEAP32[i18 + 20 >> 2] & 768 | 0) == 256) {
      i25 = 23;
      break;
     }
     if ((HEAP32[i18 + 24 >> 2] & 16 | 0) == 0) {
      i25 = 23;
      break;
     }
     do {
      if (i29 << 24 >> 24 == 0) {
       i18 = HEAP32[i27 >> 2] & 7;
       if (!((i18 | 0) == 2 | (i18 | 0) == 4)) {
        i32 = i22;
        break;
       }
       i32 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i7) | 0;
      } else {
       i32 = i22;
      }
     } while (0);
     if ((i32 | 0) != 0) {
      i25 = 23;
      break;
     }
     i17 = HEAP32[i15 >> 2] | 0;
     HEAP32[i11 >> 2] = i17;
     if ((i17 | 0) != 0) {
      i18 = i17 + 8 | 0;
      HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
     }
     HEAP32[i11 + 4 >> 2] = HEAP32[i20 >> 2];
     i18 = HEAP32[i21 >> 2] | 0;
     i17 = i11 + 8 | 0;
     i33 = i17;
     i34 = HEAP32[i33 >> 2] & -8 | i18 & 7;
     HEAP32[i33 >> 2] = i34;
     HEAP8[i17] = i34 & 255 & -9 | i18 & 8;
     HEAP32[i11 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
    }
   } while (0);
   if ((i25 | 0) == 23) {
    HEAP32[i11 >> 2] = 0;
    HEAP32[i11 + 4 >> 2] = 0;
    i21 = i11 + 8 | 0;
    i20 = i21;
    i22 = HEAP32[i20 >> 2] | 0;
    HEAP32[i20 >> 2] = i22 & -8;
    HEAP8[i21] = i22 & 255 & -16;
    HEAP32[i11 + 12 >> 2] = 1;
   }
   i22 = HEAP32[i16 >> 2] | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   i21 = i22 + 8 | 0;
   i22 = i21 | 0;
   i20 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   HEAP32[i22 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
  }
 } while (0);
 do {
  if ((i3 | 0) == 0) {
   i32 = i12 | 0;
   i7 = HEAP32[i15 >> 2] | 0;
   HEAP32[i32 >> 2] = i7;
   if ((i7 | 0) != 0) {
    i31 = i7 + 8 | 0;
    HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
   }
   HEAP32[i12 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
   i31 = HEAP32[i2 + 8 >> 2] | 0;
   i7 = i12 + 8 | 0;
   i30 = i7;
   i26 = HEAP32[i30 >> 2] & -8 | i31 & 7;
   HEAP32[i30 >> 2] = i26;
   HEAP8[i7] = i26 & 255 & -9 | i31 & 8;
   i31 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i12, 0) | 0;
   i26 = HEAP32[i32 >> 2] | 0;
   do {
    if ((i26 | 0) != 0) {
     i32 = i26 + 8 | 0;
     i7 = i32 | 0;
     i30 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     HEAP32[i7 >> 2] = i30;
     if ((i30 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
    }
   } while (0);
   if ((i31 | 0) == 0) {
    i25 = 77;
    break;
   }
   i26 = i13 | 0;
   i16 = i11 | 0;
   i32 = HEAP32[i16 >> 2] | 0;
   HEAP32[i26 >> 2] = i32;
   if ((i32 | 0) != 0) {
    i30 = i32 + 8 | 0;
    HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
   }
   HEAP32[i13 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
   i30 = HEAP32[i11 + 8 >> 2] | 0;
   i32 = i13 + 8 | 0;
   i7 = i32;
   i9 = HEAP32[i7 >> 2] & -8 | i30 & 7;
   HEAP32[i7 >> 2] = i9;
   HEAP8[i32] = i9 & 255 & -9 | i30 & 8;
   i30 = __ZNK7WebCore4Node8containsEPKS0_(i31, __ZNK7WebCore8Position13containerNodeEv(i13) | 0) | 0;
   i9 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i26 = i9 + 8 | 0;
     i32 = i26 | 0;
     i7 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     HEAP32[i32 >> 2] = i7;
     if ((i7 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
    }
   } while (0);
   if (i30) {
    i25 = 77;
    break;
   }
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i14, i31);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i14, 1);
   i9 = HEAP32[i14 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i35 = i16;
    break;
   }
   i26 = i9 + 8 | 0;
   i9 = i26 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    i35 = i16;
    break;
   }
   if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
    i35 = i16;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
   i35 = i16;
  } else {
   i25 = 77;
  }
 } while (0);
 if ((i25 | 0) == 77) {
  __ZNK7WebCore15VisiblePosition30honorEditingBoundaryAtOrBeforeERKS0_(i1, i2, i11);
  i35 = i11 | 0;
 }
 i11 = HEAP32[i35 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i35 = i11 + 8 | 0;
 i11 = i35 | 0;
 i2 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 HEAP32[i11 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL9endOfLineERKNS_15VisiblePositionENS_27LineEndpointComputationModeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 80 | 0;
 i11 = i4 + 96 | 0;
 i12 = i4 + 112 | 0;
 i13 = i4 + 128 | 0;
 __ZN7WebCoreL18endPositionForLineERKNS_15VisiblePositionENS_27LineEndpointComputationModeE(i7, i2, i3);
 L1 : do {
  if ((i3 | 0) == 0) {
   i14 = i2 | 0;
   L28 : do {
    if ((HEAP32[i14 >> 2] | 0) == 0) {
     i15 = 12;
    } else {
     __ZN7WebCoreL11startOfLineERKNS_15VisiblePositionENS_27LineEndpointComputationModeE(i5, i2, 0);
     __ZN7WebCoreL11startOfLineERKNS_15VisiblePositionENS_27LineEndpointComputationModeE(i6, i7, 0);
     i16 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i5, i6) | 0;
     i17 = HEAP32[i6 >> 2] | 0;
     do {
      if ((i17 | 0) != 0) {
       i18 = i17 + 8 | 0;
       i19 = i18 | 0;
       i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
       HEAP32[i19 >> 2] = i20;
       if ((i20 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
      }
     } while (0);
     i17 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i17 | 0) != 0) {
       i18 = i17 + 8 | 0;
       i20 = i18 | 0;
       i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
       HEAP32[i20 >> 2] = i19;
       if ((i19 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
       if (i16) {
        break L28;
       } else {
        i15 = 12;
        break L28;
       }
      }
     } while (0);
     if (!i16) {
      i15 = 12;
     }
    }
   } while (0);
   do {
    if ((i15 | 0) == 12) {
     __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i8, i7, 0);
     i17 = i8 | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = 0;
     i19 = i7 | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     HEAP32[i19 >> 2] = i18;
     do {
      if ((i20 | 0) != 0) {
       i18 = i20 + 8 | 0;
       i19 = i18 | 0;
       i21 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
       HEAP32[i19 >> 2] = i21;
       if ((i21 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
      }
     } while (0);
     HEAP32[i7 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
     i20 = HEAP32[i8 + 8 >> 2] | 0;
     i16 = i7 + 8 | 0;
     i18 = i16;
     i21 = HEAP32[i18 >> 2] & -8 | i20 & 7;
     HEAP32[i18 >> 2] = i21;
     HEAP8[i16] = i21 & 255 & -9 | i20 & 8;
     HEAP32[i7 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
     i20 = HEAP32[i17 >> 2] | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     i21 = i20 + 8 | 0;
     i20 = i21 | 0;
     i16 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     HEAP32[i20 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
    }
   } while (0);
   i21 = i9 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i21 >> 2] = i16;
   if ((i16 | 0) != 0) {
    i20 = i16 + 8 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   }
   HEAP32[i9 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
   i20 = HEAP32[i2 + 8 >> 2] | 0;
   i16 = i9 + 8 | 0;
   i18 = i16;
   i19 = HEAP32[i18 >> 2] & -8 | i20 & 7;
   HEAP32[i18 >> 2] = i19;
   HEAP8[i16] = i19 & 255 & -9 | i20 & 8;
   i20 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i9, 0) | 0;
   i19 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i21 = i19 + 8 | 0;
     i16 = i21 | 0;
     i18 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
    }
   } while (0);
   do {
    if ((i20 | 0) != 0) {
     i19 = i10 | 0;
     i14 = HEAP32[i7 >> 2] | 0;
     HEAP32[i19 >> 2] = i14;
     if ((i14 | 0) != 0) {
      i21 = i14 + 8 | 0;
      HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
     }
     HEAP32[i10 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
     i21 = HEAP32[i7 + 8 >> 2] | 0;
     i14 = i10 + 8 | 0;
     i18 = i14;
     i16 = HEAP32[i18 >> 2] & -8 | i21 & 7;
     HEAP32[i18 >> 2] = i16;
     HEAP8[i14] = i16 & 255 & -9 | i21 & 8;
     i21 = __ZNK7WebCore4Node8containsEPKS0_(i20, __ZNK7WebCore8Position13containerNodeEv(i10) | 0) | 0;
     i16 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i16 | 0) != 0) {
       i19 = i16 + 8 | 0;
       i14 = i19 | 0;
       i18 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
       HEAP32[i14 >> 2] = i18;
       if ((i18 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
      }
     } while (0);
     if (i21) {
      break;
     }
     __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i11, i20);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i11, 1);
     i16 = HEAP32[i11 >> 2] | 0;
     if ((i16 | 0) == 0) {
      break L1;
     }
     i17 = i16 + 8 | 0;
     i16 = i17 | 0;
     i19 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break L1;
     }
     if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
      break L1;
     }
     __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
     break L1;
    }
   } while (0);
   __ZNK7WebCore15VisiblePosition29honorEditingBoundaryAtOrAfterERKS0_(i1, i2, i7);
  } else {
   do {
    if (!(__ZN7WebCore10inSameLineERKNS_15VisiblePositionES2_(i2, i7) | 0)) {
     __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i12, i2, 0);
     i20 = i12 | 0;
     i17 = HEAP32[i20 >> 2] | 0;
     HEAP32[i20 >> 2] = 0;
     i19 = i7 | 0;
     i16 = HEAP32[i19 >> 2] | 0;
     HEAP32[i19 >> 2] = i17;
     do {
      if ((i16 | 0) != 0) {
       i17 = i16 + 8 | 0;
       i18 = i17 | 0;
       i14 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
       HEAP32[i18 >> 2] = i14;
       if ((i14 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
      }
     } while (0);
     i16 = i7 + 4 | 0;
     HEAP32[i16 >> 2] = HEAP32[i12 + 4 >> 2];
     i21 = HEAP32[i12 + 8 >> 2] | 0;
     i17 = i7 + 8 | 0;
     i14 = i17;
     i18 = HEAP32[i14 >> 2] & -8 | i21 & 7;
     HEAP32[i14 >> 2] = i18;
     HEAP8[i17] = i18 & 255 & -9 | i21 & 8;
     i21 = i7 + 12 | 0;
     HEAP32[i21 >> 2] = HEAP32[i12 + 12 >> 2];
     i18 = HEAP32[i20 >> 2] | 0;
     do {
      if ((i18 | 0) != 0) {
       i22 = i18 + 8 | 0;
       i23 = i22 | 0;
       i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
       HEAP32[i23 >> 2] = i24;
       if ((i24 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
      }
     } while (0);
     if ((HEAP32[i19 >> 2] | 0) == 0) {
      HEAP32[i1 >> 2] = 0;
      HEAP32[i1 + 4 >> 2] = 0;
      i18 = i1 + 8 | 0;
      i20 = i18;
      i22 = HEAP32[i20 >> 2] | 0;
      HEAP32[i20 >> 2] = i22 & -8;
      HEAP8[i18] = i22 & 255 & -16;
      HEAP32[i1 + 12 >> 2] = 1;
      break L1;
     }
     __ZN7WebCoreL18endPositionForLineERKNS_15VisiblePositionENS_27LineEndpointComputationModeE(i13, i7, 1);
     i22 = i13 | 0;
     i18 = HEAP32[i22 >> 2] | 0;
     HEAP32[i22 >> 2] = 0;
     i20 = HEAP32[i19 >> 2] | 0;
     HEAP32[i19 >> 2] = i18;
     do {
      if ((i20 | 0) != 0) {
       i18 = i20 + 8 | 0;
       i24 = i18 | 0;
       i23 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
       HEAP32[i24 >> 2] = i23;
       if ((i23 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
      }
     } while (0);
     HEAP32[i16 >> 2] = HEAP32[i13 + 4 >> 2];
     i20 = HEAP32[i13 + 8 >> 2] | 0;
     i19 = HEAP32[i14 >> 2] & -8 | i20 & 7;
     HEAP32[i14 >> 2] = i19;
     HEAP8[i17] = i19 & 255 & -9 | i20 & 8;
     HEAP32[i21 >> 2] = HEAP32[i13 + 12 >> 2];
     i20 = HEAP32[i22 >> 2] | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     i19 = i20 + 8 | 0;
     i20 = i19 | 0;
     i18 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     HEAP32[i20 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   __ZNK7WebCore15VisiblePosition29honorEditingBoundaryAtOrAfterERKS0_(i1, i2, i7);
  }
 } while (0);
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i2 + 8 | 0;
 i2 = i7 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore16nextLinePositionERKNS_15VisiblePositionEiNS_12EditableTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 56 | 0;
 i12 = i5 + 80 | 0;
 i13 = i5 + 96 | 0;
 i14 = i5 + 104 | 0;
 i15 = i5 + 120 | 0;
 i16 = i5 + 128 | 0;
 i17 = i7 | 0;
 i18 = HEAP32[i2 >> 2] | 0;
 HEAP32[i17 >> 2] = i18;
 if ((i18 | 0) == 0) {
  i19 = i7 + 8 | 0;
  i20 = 0;
  i21 = 0;
  i22 = i19;
  i23 = i19;
 } else {
  i19 = i18 + 8 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
  i19 = i7 + 8 | 0;
  i18 = i19;
  i20 = HEAP32[i18 >> 2] & -8;
  i21 = HEAP32[i17 >> 2] | 0;
  i22 = i19;
  i23 = i18;
 }
 i18 = i7 + 4 | 0;
 HEAP32[i18 >> 2] = HEAP32[i2 + 4 >> 2];
 i19 = HEAP32[i2 + 8 >> 2] | 0;
 i24 = i20 | i19 & 7;
 HEAP32[i23 >> 2] = i24;
 HEAP8[i22] = i24 & 255 & -9 | i19 & 8;
 L5 : do {
  if ((i21 | 0) == 0) {
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   i19 = i1 + 8 | 0;
   i24 = i19;
   i20 = HEAP32[i24 >> 2] | 0;
   HEAP32[i24 >> 2] = i20 & -8;
   HEAP8[i19] = i20 & 255 & -16;
   HEAP32[i1 + 12 >> 2] = 1;
  } else {
   __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i21 + 20 >> 2] | 0) + 8 >> 2] | 0);
   i20 = i21 + 12 | 0;
   i19 = i21 + 32 | 0;
   if ((HEAP32[i20 >> 2] & 2048 | 0) == 0) {
    i25 = i19 | 0;
   } else {
    i25 = HEAP32[i19 >> 2] | 0;
   }
   if ((HEAP32[i25 >> 2] | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
    HEAP32[i1 + 4 >> 2] = 0;
    i19 = i1 + 8 | 0;
    i24 = i19;
    i26 = HEAP32[i24 >> 2] | 0;
    HEAP32[i24 >> 2] = i26 & -8;
    HEAP8[i19] = i26 & 255 & -16;
    HEAP32[i1 + 12 >> 2] = 1;
    break;
   }
   __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityERPNS_9InlineBoxERi(i2 | 0, HEAP32[i2 + 12 >> 2] | 0, i8, i9);
   i26 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i26 | 0) == 0) {
     i27 = 15;
    } else {
     i19 = HEAP32[(__ZN7WebCore9InlineBox4rootEv(i26) | 0) + 52 >> 2] | 0;
     if ((i19 | 0) == 0) {
      i27 = 15;
      break;
     }
     if (+__ZNK7WebCore9InlineBox13logicalHeightEv(i19 | 0) == +0) {
      i27 = 15;
      break;
     }
     if ((__ZNK7WebCore13InlineFlowBox14firstLeafChildEv(i19) | 0) == 0) {
      i27 = 15;
     } else {
      i28 = i19;
     }
    }
   } while (0);
   do {
    if ((i27 | 0) == 15) {
     do {
      if ((HEAP8[i22] & 8) == 0) {
       i26 = HEAP32[i23 >> 2] & 7;
       if (!((i26 | 0) == 2 | (i26 | 0) == 4)) {
        i27 = 17;
        break;
       }
       i29 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i7) | 0;
      } else {
       i27 = 17;
      }
     } while (0);
     if ((i27 | 0) == 17) {
      i29 = HEAP32[i18 >> 2] | 0;
     }
     if ((HEAP32[i20 >> 2] & 2 | 0) == 0) {
      i27 = 21;
     } else {
      i26 = __ZNK7WebCore13ContainerNode9childNodeEj(i21, i29) | 0;
      if ((i26 | 0) == 0) {
       i27 = 21;
      } else {
       i30 = i26;
      }
     }
     if ((i27 | 0) == 21) {
      i30 = __ZNK7WebCore4Node14lastDescendantEv(i21) | 0;
     }
     __ZN7WebCoreL34nextRootInlineBoxCandidatePositionEPNS_4NodeERKNS_15VisiblePositionENS_12EditableTypeE(i10, i30, i2, i4);
     i26 = i10 | 0;
     if ((HEAP32[i26 >> 2] | 0) != 0) {
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i12, i10, 1);
      __ZN7WebCore16RenderedPositionC1ERKNS_15VisiblePositionE(i11, i12);
      i19 = HEAP32[i12 >> 2] | 0;
      do {
       if ((i19 | 0) != 0) {
        i24 = i19 + 8 | 0;
        i31 = i24 | 0;
        i32 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
        HEAP32[i31 >> 2] = i32;
        if ((i32 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
       }
      } while (0);
      i19 = HEAP32[i11 + 4 >> 2] | 0;
      if ((i19 | 0) == 0) {
       i27 = 29;
      } else {
       i24 = __ZN7WebCore9InlineBox4rootEv(i19) | 0;
       if ((i24 | 0) == 0) {
        i27 = 29;
       } else {
        i33 = 1;
        i34 = i24;
       }
      }
      if ((i27 | 0) == 29) {
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i10, 1);
       i33 = 0;
       i34 = 0;
      }
      i24 = HEAP32[i26 >> 2] | 0;
      do {
       if ((i24 | 0) == 0) {
        i27 = 34;
       } else {
        i19 = i24 + 8 | 0;
        i32 = i19 | 0;
        i31 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
        HEAP32[i32 >> 2] = i31;
        if ((i31 | 0) >= 1) {
         i27 = 34;
         break;
        }
        if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
         i27 = 34;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
        if (!i33) {
         break L5;
        }
       }
      } while (0);
      if ((i27 | 0) == 34) {
       if (!i33) {
        break L5;
       }
      }
      if ((i34 | 0) != 0) {
       i28 = i34;
       break;
      }
     }
     if ((i4 | 0) == 1) {
      if (__ZNK7WebCore4Node25isEditableToAccessibilityENS0_13EditableLevelE(i30, 0) | 0) {
       i27 = 53;
      } else {
       i27 = 54;
      }
     } else if ((i4 | 0) == 0) {
      if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i30, 0, 1) | 0) {
       i27 = 53;
      } else {
       i27 = 54;
      }
     } else {
      i27 = 54;
     }
     if ((i27 | 0) == 53) {
      i35 = __ZNK7WebCore4Node19rootEditableElementENS_12EditableTypeE(i30, i4) | 0;
     } else if ((i27 | 0) == 54) {
      i35 = HEAP32[(HEAP32[(HEAP32[i30 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0;
     }
     if ((i35 | 0) == 0) {
      HEAP32[i1 >> 2] = 0;
      HEAP32[i1 + 4 >> 2] = 0;
      i24 = i1 + 8 | 0;
      i26 = i24;
      i19 = HEAP32[i26 >> 2] | 0;
      HEAP32[i26 >> 2] = i19 & -8;
      HEAP8[i24] = i19 & 255 & -16;
      HEAP32[i1 + 12 >> 2] = 1;
      break L5;
     }
     __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i16, i35 | 0);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i16, 1);
     i19 = HEAP32[i16 >> 2] | 0;
     if ((i19 | 0) == 0) {
      break L5;
     }
     i24 = i19 + 8 | 0;
     i19 = i24 | 0;
     i26 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     HEAP32[i19 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      break L5;
     }
     if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
      break L5;
     }
     __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     break L5;
    }
   } while (0);
   __ZN7WebCoreL45absoluteLineDirectionPointToLocalPointInBlockEPNS_13RootInlineBoxEi(i13, i28, i3);
   i20 = HEAP32[(__ZN7WebCore13RootInlineBox24closestLeafChildForPointERKNS_8IntPointEb(i28, i13, __ZN7WebCore18isEditablePositionERKNS_8PositionENS_12EditableTypeENS_12EUpdateStyleE(i7, 0, 0) | 0) | 0) + 16 >> 2] | 0;
   do {
    if ((HEAP32[i20 + 20 >> 2] & 128 | 0) == 0) {
     i24 = HEAP32[i20 + 4 >> 2] | 0;
     if ((i24 | 0) == 0) {
      break;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 132 >> 2] & 1](i24) | 0) {
      break;
     }
     i26 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i24) | 0;
     i19 = i6 | 0;
     HEAP32[i19 >> 2] = i26;
     if ((i26 | 0) != 0) {
      i31 = i26 + 8 | 0;
      HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
     }
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i14, i6, __ZNK7WebCore4Node9nodeIndexEv(i24) | 0, 0);
     i24 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i24 | 0) != 0) {
       i19 = i24 + 8 | 0;
       i31 = i19 | 0;
       i26 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
       HEAP32[i31 >> 2] = i26;
       if ((i26 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i14, 1);
     i24 = HEAP32[i14 >> 2] | 0;
     if ((i24 | 0) == 0) {
      break L5;
     }
     i19 = i24 + 8 | 0;
     i24 = i19 | 0;
     i26 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     HEAP32[i24 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      break L5;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break L5;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
     break L5;
    }
   } while (0);
   i19 = HEAP32[(HEAP32[i20 >> 2] | 0) + 464 >> 2] | 0;
   HEAP32[i15 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i15 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
   FUNCTION_TABLE_viii[i19 & 1](i1, i20, i15);
  }
 } while (0);
 i15 = HEAP32[i17 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i17 = i15 + 8 | 0;
 i15 = i17 | 0;
 i1 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
 HEAP32[i15 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20previousLinePositionERKNS_15VisiblePositionEiNS_12EditableTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 56 | 0;
 i12 = i5 + 80 | 0;
 i13 = i5 + 96 | 0;
 i14 = i5 + 104 | 0;
 i15 = i5 + 120 | 0;
 i16 = i5 + 128 | 0;
 i17 = i7 | 0;
 i18 = HEAP32[i2 >> 2] | 0;
 HEAP32[i17 >> 2] = i18;
 if ((i18 | 0) == 0) {
  i19 = i7 + 8 | 0;
  i20 = 0;
  i21 = 0;
  i22 = i19;
  i23 = i19;
 } else {
  i19 = i18 + 8 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
  i19 = i7 + 8 | 0;
  i18 = i19;
  i20 = HEAP32[i18 >> 2] & -8;
  i21 = HEAP32[i17 >> 2] | 0;
  i22 = i19;
  i23 = i18;
 }
 HEAP32[i7 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i18 = HEAP32[i2 + 8 >> 2] | 0;
 i19 = i20 | i18 & 7;
 HEAP32[i23 >> 2] = i19;
 HEAP8[i22] = i19 & 255 & -9 | i18 & 8;
 L5 : do {
  if ((i21 | 0) == 0) {
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   i18 = i1 + 8 | 0;
   i19 = i18;
   i22 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = i22 & -8;
   HEAP8[i18] = i22 & 255 & -16;
   HEAP32[i1 + 12 >> 2] = 1;
  } else {
   i22 = i21 + 20 | 0;
   __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i22 >> 2] | 0) + 8 >> 2] | 0);
   i18 = i21 + 32 | 0;
   if ((HEAP32[i21 + 12 >> 2] & 2048 | 0) == 0) {
    i24 = i18 | 0;
   } else {
    i24 = HEAP32[i18 >> 2] | 0;
   }
   if ((HEAP32[i24 >> 2] | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
    HEAP32[i1 + 4 >> 2] = 0;
    i18 = i1 + 8 | 0;
    i19 = i18;
    i23 = HEAP32[i19 >> 2] | 0;
    HEAP32[i19 >> 2] = i23 & -8;
    HEAP8[i18] = i23 & 255 & -16;
    HEAP32[i1 + 12 >> 2] = 1;
    break;
   }
   __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityERPNS_9InlineBoxERi(i2 | 0, HEAP32[i2 + 12 >> 2] | 0, i8, i9);
   i23 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i23 | 0) == 0) {
     i25 = 15;
    } else {
     i18 = HEAP32[(__ZN7WebCore9InlineBox4rootEv(i23) | 0) + 48 >> 2] | 0;
     if ((i18 | 0) == 0) {
      i25 = 15;
      break;
     }
     if (+__ZNK7WebCore9InlineBox13logicalHeightEv(i18 | 0) == +0) {
      i25 = 15;
      break;
     }
     if ((__ZNK7WebCore13InlineFlowBox14firstLeafChildEv(i18) | 0) == 0) {
      i25 = 15;
     } else {
      i26 = i18;
     }
    }
   } while (0);
   do {
    if ((i25 | 0) == 15) {
     __ZN7WebCoreL38previousRootInlineBoxCandidatePositionEPNS_4NodeERKNS_15VisiblePositionENS_12EditableTypeE(i10, i21, i2, i4);
     i23 = i10 | 0;
     if ((HEAP32[i23 >> 2] | 0) != 0) {
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i12, i10, 1);
      __ZN7WebCore16RenderedPositionC1ERKNS_15VisiblePositionE(i11, i12);
      i18 = HEAP32[i12 >> 2] | 0;
      do {
       if ((i18 | 0) != 0) {
        i19 = i18 + 8 | 0;
        i20 = i19 | 0;
        i27 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
        HEAP32[i20 >> 2] = i27;
        if ((i27 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
       }
      } while (0);
      i18 = HEAP32[i11 + 4 >> 2] | 0;
      if ((i18 | 0) == 0) {
       i25 = 22;
      } else {
       i19 = __ZN7WebCore9InlineBox4rootEv(i18) | 0;
       if ((i19 | 0) == 0) {
        i25 = 22;
       } else {
        i28 = 1;
        i29 = i19;
       }
      }
      if ((i25 | 0) == 22) {
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i10, 1);
       i28 = 0;
       i29 = 0;
      }
      i19 = HEAP32[i23 >> 2] | 0;
      do {
       if ((i19 | 0) == 0) {
        i25 = 27;
       } else {
        i18 = i19 + 8 | 0;
        i27 = i18 | 0;
        i20 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
        HEAP32[i27 >> 2] = i20;
        if ((i20 | 0) >= 1) {
         i25 = 27;
         break;
        }
        if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
         i25 = 27;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
        if (!i28) {
         break L5;
        }
       }
      } while (0);
      if ((i25 | 0) == 27) {
       if (!i28) {
        break L5;
       }
      }
      if ((i29 | 0) != 0) {
       i26 = i29;
       break;
      }
     }
     if ((i4 | 0) == 1) {
      if (__ZNK7WebCore4Node25isEditableToAccessibilityENS0_13EditableLevelE(i21, 0) | 0) {
       i25 = 46;
      } else {
       i25 = 47;
      }
     } else if ((i4 | 0) == 0) {
      if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i21, 0, 1) | 0) {
       i25 = 46;
      } else {
       i25 = 47;
      }
     } else {
      i25 = 47;
     }
     if ((i25 | 0) == 46) {
      i30 = __ZNK7WebCore4Node19rootEditableElementENS_12EditableTypeE(i21, i4) | 0;
     } else if ((i25 | 0) == 47) {
      i30 = HEAP32[(HEAP32[(HEAP32[i22 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0;
     }
     if ((i30 | 0) == 0) {
      HEAP32[i1 >> 2] = 0;
      HEAP32[i1 + 4 >> 2] = 0;
      i19 = i1 + 8 | 0;
      i23 = i19;
      i18 = HEAP32[i23 >> 2] | 0;
      HEAP32[i23 >> 2] = i18 & -8;
      HEAP8[i19] = i18 & 255 & -16;
      HEAP32[i1 + 12 >> 2] = 1;
      break L5;
     }
     __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i16, i30 | 0);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i16, 1);
     i18 = HEAP32[i16 >> 2] | 0;
     if ((i18 | 0) == 0) {
      break L5;
     }
     i19 = i18 + 8 | 0;
     i18 = i19 | 0;
     i23 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     HEAP32[i18 >> 2] = i23;
     if ((i23 | 0) >= 1) {
      break L5;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break L5;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
     break L5;
    }
   } while (0);
   __ZN7WebCoreL45absoluteLineDirectionPointToLocalPointInBlockEPNS_13RootInlineBoxEi(i13, i26, i3);
   i22 = HEAP32[(__ZN7WebCore13RootInlineBox24closestLeafChildForPointERKNS_8IntPointEb(i26, i13, __ZN7WebCore18isEditablePositionERKNS_8PositionENS_12EditableTypeENS_12EUpdateStyleE(i7, 0, 0) | 0) | 0) + 16 >> 2] | 0;
   do {
    if ((HEAP32[i22 + 20 >> 2] & 128 | 0) == 0) {
     i19 = HEAP32[i22 + 4 >> 2] | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 132 >> 2] & 1](i19) | 0) {
      break;
     }
     i23 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i19) | 0;
     i18 = i6 | 0;
     HEAP32[i18 >> 2] = i23;
     if ((i23 | 0) != 0) {
      i20 = i23 + 8 | 0;
      HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
     }
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i14, i6, __ZNK7WebCore4Node9nodeIndexEv(i19) | 0, 0);
     i19 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i19 | 0) != 0) {
       i18 = i19 + 8 | 0;
       i20 = i18 | 0;
       i23 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
       HEAP32[i20 >> 2] = i23;
       if ((i23 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i14, 1);
     i19 = HEAP32[i14 >> 2] | 0;
     if ((i19 | 0) == 0) {
      break L5;
     }
     i18 = i19 + 8 | 0;
     i19 = i18 | 0;
     i23 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     HEAP32[i19 >> 2] = i23;
     if ((i23 | 0) >= 1) {
      break L5;
     }
     if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
      break L5;
     }
     __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
     break L5;
    }
   } while (0);
   i18 = HEAP32[(HEAP32[i22 >> 2] | 0) + 464 >> 2] | 0;
   HEAP32[i15 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i15 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
   FUNCTION_TABLE_viii[i18 & 1](i1, i22, i15);
  }
 } while (0);
 i15 = HEAP32[i17 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i17 = i15 + 8 | 0;
 i15 = i17 | 0;
 i1 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
 HEAP32[i15 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9endOfWordERKNS_15VisiblePositionENS_9EWordSideE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i7 | 0;
 i10 = i2 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 HEAP32[i9 >> 2] = i11;
 if ((i11 | 0) == 0) {
  i12 = i7 + 8 | 0;
  i13 = 0;
  i14 = i12;
  i15 = i12;
 } else {
  i12 = i11 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
  i12 = i7 + 8 | 0;
  i11 = i12;
  i13 = HEAP32[i11 >> 2] & -8;
  i14 = i12;
  i15 = i11;
 }
 i11 = i7 + 4 | 0;
 i12 = i2 + 4 | 0;
 HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
 i16 = i2 + 8 | 0;
 i17 = i16;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = i13 | i18 & 7;
 HEAP32[i15 >> 2] = i19;
 HEAP8[i14] = i19 & 255 & -9 | i18 & 8;
 i18 = i7 + 12 | 0;
 i19 = i2 + 12 | 0;
 HEAP32[i18 >> 2] = HEAP32[i19 >> 2];
 L5 : do {
  if ((i3 | 0) == 1) {
   L19 : do {
    if ((HEAP32[i10 >> 2] | 0) != 0) {
     __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i6, i2, 1);
     i13 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i2, i6) | 0;
     i20 = HEAP32[i6 >> 2] | 0;
     do {
      if ((i20 | 0) == 0) {
       i21 = 10;
      } else {
       i22 = i20 + 8 | 0;
       i23 = i22 | 0;
       i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
       HEAP32[i23 >> 2] = i24;
       if ((i24 | 0) >= 1) {
        i21 = 10;
        break;
       }
       if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
        i21 = 10;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
       if (!i13) {
        break L19;
       }
      }
     } while (0);
     if ((i21 | 0) == 10) {
      if (!i13) {
       break;
      }
     }
     i20 = HEAP32[i10 >> 2] | 0;
     HEAP32[i1 >> 2] = i20;
     if ((i20 | 0) != 0) {
      i22 = i20 + 8 | 0;
      HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
     }
     HEAP32[i1 + 4 >> 2] = HEAP32[i12 >> 2];
     i22 = i1 + 8 | 0;
     i20 = i22;
     i24 = HEAP32[i20 >> 2] & -8 | HEAP32[i17 >> 2] & 7;
     HEAP32[i20 >> 2] = i24;
     HEAP8[i22] = i24 & 255 & -9 | HEAP8[i16] & 8;
     HEAP32[i1 + 12 >> 2] = HEAP32[i19 >> 2];
     break L5;
    }
   } while (0);
   __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i8, i2, 0);
   i24 = i8 | 0;
   i22 = HEAP32[i24 >> 2] | 0;
   HEAP32[i24 >> 2] = 0;
   i20 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i22;
   do {
    if ((i20 | 0) != 0) {
     i22 = i20 + 8 | 0;
     i23 = i22 | 0;
     i25 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     HEAP32[i23 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
    }
   } while (0);
   HEAP32[i11 >> 2] = HEAP32[i8 + 4 >> 2];
   i20 = HEAP32[i8 + 8 >> 2] | 0;
   i22 = HEAP32[i15 >> 2] & -8 | i20 & 7;
   HEAP32[i15 >> 2] = i22;
   HEAP8[i14] = i22 & 255 & -9 | i20 & 8;
   HEAP32[i18 >> 2] = HEAP32[i8 + 12 >> 2];
   i20 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i22 = i20 + 8 | 0;
     i25 = i22 | 0;
     i23 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     HEAP32[i25 >> 2] = i23;
     if ((i23 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
    }
   } while (0);
   if ((HEAP32[i9 >> 2] | 0) != 0) {
    i21 = 35;
    break;
   }
   i20 = HEAP32[i10 >> 2] | 0;
   HEAP32[i1 >> 2] = i20;
   if ((i20 | 0) != 0) {
    i24 = i20 + 8 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
   }
   HEAP32[i1 + 4 >> 2] = HEAP32[i12 >> 2];
   i24 = i1 + 8 | 0;
   i20 = i24;
   i22 = HEAP32[i20 >> 2] & -8 | HEAP32[i17 >> 2] & 7;
   HEAP32[i20 >> 2] = i22;
   HEAP8[i24] = i22 & 255 & -9 | HEAP8[i16] & 8;
   HEAP32[i1 + 12 >> 2] = HEAP32[i19 >> 2];
  } else {
   if ((HEAP32[i10 >> 2] | 0) == 0) {
    i21 = 35;
    break;
   }
   __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i5, i2, 1);
   i22 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i2, i5) | 0;
   i24 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i24 | 0) == 0) {
     i21 = 31;
    } else {
     i20 = i24 + 8 | 0;
     i23 = i20 | 0;
     i25 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     HEAP32[i23 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      i21 = 31;
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      i21 = 31;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
     if (!i22) {
      i21 = 35;
      break L5;
     }
    }
   } while (0);
   if ((i21 | 0) == 31) {
    if (!i22) {
     i21 = 35;
     break;
    }
   }
   i24 = HEAP32[i10 >> 2] | 0;
   HEAP32[i1 >> 2] = i24;
   if ((i24 | 0) != 0) {
    i20 = i24 + 8 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   }
   HEAP32[i1 + 4 >> 2] = HEAP32[i12 >> 2];
   i20 = i1 + 8 | 0;
   i24 = i20;
   i25 = HEAP32[i24 >> 2] & -8 | HEAP32[i17 >> 2] & 7;
   HEAP32[i24 >> 2] = i25;
   HEAP8[i20] = i25 & 255 & -9 | HEAP8[i16] & 8;
   HEAP32[i1 + 12 >> 2] = HEAP32[i19 >> 2];
  }
 } while (0);
 if ((i21 | 0) == 35) {
  __ZN7WebCoreL12nextBoundaryERKNS_15VisiblePositionEPFjPKtjjNS_33BoundarySearchContextAvailabilityERbE(i1, i7, F_BASE_iiiiii + 10 | 0);
 }
 i7 = HEAP32[i9 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i7 + 8 | 0;
 i7 = i9 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17rightWordPositionERKNS_15VisiblePositionEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 __ZN7WebCoreL18visualWordPositionERKNS_15VisiblePositionENS_23CursorMovementDirectionEb(i1, i2, 1, i3);
 __ZNK7WebCore15VisiblePosition30honorEditingBoundaryAtOrBeforeERKS0_(i5, i2, i1);
 i3 = i5 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i10 = i1 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i9;
 do {
  if ((i11 | 0) != 0) {
   i9 = i11 + 8 | 0;
   i12 = i9 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i11 = i1 + 4 | 0;
 HEAP32[i11 >> 2] = HEAP32[i5 + 4 >> 2];
 i9 = HEAP32[i5 + 8 >> 2] | 0;
 i13 = i1 + 8 | 0;
 i12 = i13;
 i14 = HEAP32[i12 >> 2] & -8 | i9 & 7;
 HEAP32[i12 >> 2] = i14;
 HEAP8[i13] = i14 & 255 & -9 | i9 & 8;
 i9 = i1 + 12 | 0;
 HEAP32[i9 >> 2] = HEAP32[i5 + 12 >> 2];
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 8 | 0;
   i1 = i3 | 0;
   i14 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 if ((HEAP32[i10 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i6 | 0;
 i3 = i2 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 HEAP32[i5 >> 2] = i14;
 if ((i14 | 0) != 0) {
  i1 = i14 + 8 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 i1 = i2 + 4 | 0;
 HEAP32[i6 + 4 >> 2] = HEAP32[i1 >> 2];
 i14 = i2 + 8 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = i6 + 8 | 0;
 i17 = i16;
 i18 = HEAP32[i17 >> 2] & -8 | i15 & 7;
 HEAP32[i17 >> 2] = i18;
 HEAP8[i16] = i18 & 255 & -9 | i15 & 8;
 i15 = __ZN7WebCore18isEditablePositionERKNS_8PositionENS_12EditableTypeENS_12EUpdateStyleE(i6, 0, 0) | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i19 = 16;
  } else {
   i5 = i6 + 8 | 0;
   i18 = i5 | 0;
   i16 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    i19 = 16;
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    i19 = 16;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
   if (i15) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i19 | 0) == 16) {
   if (i15) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i15 = i7 | 0;
 i19 = HEAP32[i3 >> 2] | 0;
 HEAP32[i15 >> 2] = i19;
 if ((i19 | 0) != 0) {
  i3 = i19 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i7 + 4 >> 2] = HEAP32[i1 >> 2];
 i1 = HEAP32[i14 >> 2] | 0;
 i14 = i7 + 8 | 0;
 i3 = i14;
 i19 = HEAP32[i3 >> 2] & -8 | i1 & 7;
 HEAP32[i3 >> 2] = i19;
 HEAP8[i14] = i19 & 255 & -9 | i1 & 8;
 i1 = __ZN7WebCore25directionOfEnclosingBlockERKNS_8PositionE(i7) | 0;
 i7 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i15 = i7 + 8 | 0;
   i19 = i15 | 0;
   i14 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  }
 } while (0);
 if ((i1 | 0) == 1) {
  __ZN7WebCore20endOfEditableContentERKNS_15VisiblePositionE(i8, i2);
  i20 = 0;
  i21 = 1;
 } else {
  __ZN7WebCore22startOfEditableContentERKNS_15VisiblePositionE(i8, i2);
  i20 = 1;
  i21 = 0;
 }
 i2 = i8 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i1;
 do {
  if ((i7 | 0) != 0) {
   i1 = i7 + 8 | 0;
   i10 = i1 | 0;
   i15 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  }
 } while (0);
 HEAP32[i11 >> 2] = HEAP32[i8 + 4 >> 2];
 i11 = HEAP32[i8 + 8 >> 2] | 0;
 i7 = HEAP32[i12 >> 2] & -8 | i11 & 7;
 HEAP32[i12 >> 2] = i7;
 HEAP8[i13] = i7 & 255 & -9 | i11 & 8;
 HEAP32[i9 >> 2] = HEAP32[i8 + 12 >> 2];
 do {
  if (i20) {
   i8 = HEAP32[i2 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 + 8 | 0;
   i8 = i9 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 if (!i21) {
  STACKTOP = i4;
  return;
 }
 i21 = HEAP32[i2 >> 2] | 0;
 if ((i21 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i21 + 8 | 0;
 i21 = i2 | 0;
 i20 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
 HEAP32[i21 >> 2] = i20;
 if ((i20 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore16leftWordPositionERKNS_15VisiblePositionEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 __ZN7WebCoreL18visualWordPositionERKNS_15VisiblePositionENS_23CursorMovementDirectionEb(i1, i2, 0, i3);
 __ZNK7WebCore15VisiblePosition30honorEditingBoundaryAtOrBeforeERKS0_(i5, i2, i1);
 i3 = i5 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i10 = i1 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i9;
 do {
  if ((i11 | 0) != 0) {
   i9 = i11 + 8 | 0;
   i12 = i9 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i11 = i1 + 4 | 0;
 HEAP32[i11 >> 2] = HEAP32[i5 + 4 >> 2];
 i9 = HEAP32[i5 + 8 >> 2] | 0;
 i13 = i1 + 8 | 0;
 i12 = i13;
 i14 = HEAP32[i12 >> 2] & -8 | i9 & 7;
 HEAP32[i12 >> 2] = i14;
 HEAP8[i13] = i14 & 255 & -9 | i9 & 8;
 i9 = i1 + 12 | 0;
 HEAP32[i9 >> 2] = HEAP32[i5 + 12 >> 2];
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 8 | 0;
   i1 = i3 | 0;
   i14 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 if ((HEAP32[i10 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i6 | 0;
 i3 = i2 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 HEAP32[i5 >> 2] = i14;
 if ((i14 | 0) != 0) {
  i1 = i14 + 8 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 i1 = i2 + 4 | 0;
 HEAP32[i6 + 4 >> 2] = HEAP32[i1 >> 2];
 i14 = i2 + 8 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = i6 + 8 | 0;
 i17 = i16;
 i18 = HEAP32[i17 >> 2] & -8 | i15 & 7;
 HEAP32[i17 >> 2] = i18;
 HEAP8[i16] = i18 & 255 & -9 | i15 & 8;
 i15 = __ZN7WebCore18isEditablePositionERKNS_8PositionENS_12EditableTypeENS_12EUpdateStyleE(i6, 0, 0) | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i19 = 16;
  } else {
   i5 = i6 + 8 | 0;
   i18 = i5 | 0;
   i16 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    i19 = 16;
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    i19 = 16;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
   if (i15) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i19 | 0) == 16) {
   if (i15) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i15 = i7 | 0;
 i19 = HEAP32[i3 >> 2] | 0;
 HEAP32[i15 >> 2] = i19;
 if ((i19 | 0) != 0) {
  i3 = i19 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i7 + 4 >> 2] = HEAP32[i1 >> 2];
 i1 = HEAP32[i14 >> 2] | 0;
 i14 = i7 + 8 | 0;
 i3 = i14;
 i19 = HEAP32[i3 >> 2] & -8 | i1 & 7;
 HEAP32[i3 >> 2] = i19;
 HEAP8[i14] = i19 & 255 & -9 | i1 & 8;
 i1 = __ZN7WebCore25directionOfEnclosingBlockERKNS_8PositionE(i7) | 0;
 i7 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i15 = i7 + 8 | 0;
   i19 = i15 | 0;
   i14 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  }
 } while (0);
 if ((i1 | 0) == 1) {
  __ZN7WebCore22startOfEditableContentERKNS_15VisiblePositionE(i8, i2);
  i20 = 0;
  i21 = 1;
 } else {
  __ZN7WebCore20endOfEditableContentERKNS_15VisiblePositionE(i8, i2);
  i20 = 1;
  i21 = 0;
 }
 i2 = i8 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i1;
 do {
  if ((i7 | 0) != 0) {
   i1 = i7 + 8 | 0;
   i10 = i1 | 0;
   i15 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  }
 } while (0);
 HEAP32[i11 >> 2] = HEAP32[i8 + 4 >> 2];
 i11 = HEAP32[i8 + 8 >> 2] | 0;
 i7 = HEAP32[i12 >> 2] & -8 | i11 & 7;
 HEAP32[i12 >> 2] = i7;
 HEAP8[i13] = i7 & 255 & -9 | i11 & 8;
 HEAP32[i9 >> 2] = HEAP32[i8 + 12 >> 2];
 do {
  if (i20) {
   i8 = HEAP32[i2 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 + 8 | 0;
   i8 = i9 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 if (!i21) {
  STACKTOP = i4;
  return;
 }
 i21 = HEAP32[i2 >> 2] | 0;
 if ((i21 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i21 + 8 | 0;
 i21 = i2 | 0;
 i20 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
 HEAP32[i21 >> 2] = i20;
 if ((i20 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11startOfWordERKNS_15VisiblePositionENS_9EWordSideE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i6 | 0;
 i9 = i2 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i8 >> 2] = i10;
 if ((i10 | 0) == 0) {
  i11 = i6 + 8 | 0;
  i12 = 0;
  i13 = i11;
  i14 = i11;
 } else {
  i11 = i10 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
  i11 = i6 + 8 | 0;
  i10 = i11;
  i12 = HEAP32[i10 >> 2] & -8;
  i13 = i11;
  i14 = i10;
 }
 i10 = i6 + 4 | 0;
 i11 = i2 + 4 | 0;
 HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
 i15 = i2 + 8 | 0;
 i16 = i15;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = i12 | i17 & 7;
 HEAP32[i14 >> 2] = i18;
 HEAP8[i13] = i18 & 255 & -9 | i17 & 8;
 i17 = i6 + 12 | 0;
 i18 = i2 + 12 | 0;
 HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
 L5 : do {
  if ((i3 | 0) == 0) {
   L7 : do {
    if ((HEAP32[i9 >> 2] | 0) != 0) {
     __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i5, i2, 1);
     i12 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i2, i5) | 0;
     i19 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i19 | 0) == 0) {
       i20 = 10;
      } else {
       i21 = i19 + 8 | 0;
       i22 = i21 | 0;
       i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       HEAP32[i22 >> 2] = i23;
       if ((i23 | 0) >= 1) {
        i20 = 10;
        break;
       }
       if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
        i20 = 10;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
       if (!i12) {
        break L7;
       }
      }
     } while (0);
     if ((i20 | 0) == 10) {
      if (!i12) {
       break;
      }
     }
     i19 = HEAP32[i9 >> 2] | 0;
     HEAP32[i1 >> 2] = i19;
     if ((i19 | 0) != 0) {
      i21 = i19 + 8 | 0;
      HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
     }
     HEAP32[i1 + 4 >> 2] = HEAP32[i11 >> 2];
     i21 = i1 + 8 | 0;
     i19 = i21;
     i23 = HEAP32[i19 >> 2] & -8 | HEAP32[i16 >> 2] & 7;
     HEAP32[i19 >> 2] = i23;
     HEAP8[i21] = i23 & 255 & -9 | HEAP8[i15] & 8;
     HEAP32[i1 + 12 >> 2] = HEAP32[i18 >> 2];
     break L5;
    }
   } while (0);
   __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i7, i2, 0);
   i23 = i7 | 0;
   i21 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = 0;
   i19 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i21;
   do {
    if ((i19 | 0) != 0) {
     i21 = i19 + 8 | 0;
     i22 = i21 | 0;
     i24 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
     HEAP32[i22 >> 2] = i24;
     if ((i24 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
    }
   } while (0);
   HEAP32[i10 >> 2] = HEAP32[i7 + 4 >> 2];
   i19 = HEAP32[i7 + 8 >> 2] | 0;
   i21 = HEAP32[i14 >> 2] & -8 | i19 & 7;
   HEAP32[i14 >> 2] = i21;
   HEAP8[i13] = i21 & 255 & -9 | i19 & 8;
   HEAP32[i17 >> 2] = HEAP32[i7 + 12 >> 2];
   i19 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i21 = i19 + 8 | 0;
     i24 = i21 | 0;
     i22 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     HEAP32[i24 >> 2] = i22;
     if ((i22 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
    }
   } while (0);
   if ((HEAP32[i8 >> 2] | 0) != 0) {
    i20 = 26;
    break;
   }
   i19 = HEAP32[i9 >> 2] | 0;
   HEAP32[i1 >> 2] = i19;
   if ((i19 | 0) != 0) {
    i23 = i19 + 8 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
   }
   HEAP32[i1 + 4 >> 2] = HEAP32[i11 >> 2];
   i23 = i1 + 8 | 0;
   i19 = i23;
   i21 = HEAP32[i19 >> 2] & -8 | HEAP32[i16 >> 2] & 7;
   HEAP32[i19 >> 2] = i21;
   HEAP8[i23] = i21 & 255 & -9 | HEAP8[i15] & 8;
   HEAP32[i1 + 12 >> 2] = HEAP32[i18 >> 2];
  } else {
   i20 = 26;
  }
 } while (0);
 if ((i20 | 0) == 26) {
  __ZN7WebCoreL16previousBoundaryERKNS_15VisiblePositionEPFjPKtjjNS_33BoundarySearchContextAvailabilityERbE(i1, i6, F_BASE_iiiiii + 12 | 0);
 }
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i6 + 8 | 0;
 i6 = i8 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i4 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) == 0) {
  i8 = i4 + 8 | 0;
  i9 = 0;
  i10 = i8;
  i11 = i8;
 } else {
  i8 = i7 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i8 = i4 + 8 | 0;
  i7 = i8;
  i9 = HEAP32[i7 >> 2] & -8;
  i10 = i8;
  i11 = i7;
 }
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i1 + 4 >> 2];
 i8 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i9 | i8 & 7;
 HEAP32[i11 >> 2] = i1;
 HEAP8[i10] = i1 & 255 & -9 | i8 & 8;
 i8 = i5 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i8 >> 2] = i1;
 if ((i1 | 0) == 0) {
  i12 = 0;
 } else {
  i9 = i1 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i12 = HEAP32[i8 >> 2] | 0;
 }
 i9 = i5 + 4 | 0;
 HEAP32[i9 >> 2] = HEAP32[i2 + 4 >> 2];
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i5 + 8 | 0;
 i13 = i2;
 i14 = HEAP32[i13 >> 2] & -8 | i1 & 7;
 HEAP32[i13 >> 2] = i14;
 i15 = i14 & 255 & -9 | i1 & 8;
 HEAP8[i2] = i15;
 if ((HEAP32[i6 >> 2] | 0) == (i12 | 0)) {
  do {
   if ((HEAP8[i10] & 8) == 0) {
    i1 = HEAP32[i11 >> 2] & 7;
    if (!((i1 | 0) == 2 | (i1 | 0) == 4)) {
     i16 = 9;
     break;
    }
    i1 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i4) | 0;
    i17 = i1;
    i18 = HEAP8[i2] | 0;
   } else {
    i16 = 9;
   }
  } while (0);
  if ((i16 | 0) == 9) {
   i17 = HEAP32[i7 >> 2] | 0;
   i18 = i15;
  }
  do {
   if ((i18 & 8) == 0) {
    i15 = HEAP32[i13 >> 2] & 7;
    if (!((i15 | 0) == 2 | (i15 | 0) == 4)) {
     i16 = 13;
     break;
    }
    i19 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i5) | 0;
   } else {
    i16 = 13;
   }
  } while (0);
  if ((i16 | 0) == 13) {
   i19 = HEAP32[i9 >> 2] | 0;
  }
  if ((i17 | 0) == (i19 | 0)) {
   i20 = ((HEAP32[i13 >> 2] ^ HEAP32[i11 >> 2]) & 7 | 0) == 0;
  } else {
   i20 = 0;
  }
  i21 = i20;
  i22 = HEAP32[i8 >> 2] | 0;
 } else {
  i21 = 0;
  i22 = i12;
 }
 do {
  if ((i22 | 0) != 0) {
   i12 = i22 + 8 | 0;
   i8 = i12 | 0;
   i20 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i22 = HEAP32[i6 >> 2] | 0;
 if ((i22 | 0) == 0) {
  STACKTOP = i3;
  return i21 | 0;
 }
 i6 = i22 + 8 | 0;
 i22 = i6 | 0;
 i12 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
 HEAP32[i22 >> 2] = i12;
 if ((i12 | 0) >= 1) {
  STACKTOP = i3;
  return i21 | 0;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i21 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 STACKTOP = i3;
 return i21 | 0;
}
function __ZN7WebCore25previousParagraphPositionERKNS_15VisiblePositionEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 i8 = i1 + 4 | 0;
 HEAP32[i8 >> 2] = HEAP32[i2 + 4 >> 2];
 i7 = i2 + 8 | 0;
 i9 = i1 + 8 | 0;
 i10 = i9;
 i11 = HEAP32[i10 >> 2] & -8 | HEAP32[i7 >> 2] & 7;
 HEAP32[i10 >> 2] = i11;
 HEAP8[i9] = i11 & 255 & -9 | HEAP8[i7] & 8;
 i7 = i1 + 12 | 0;
 HEAP32[i7 >> 2] = HEAP32[i2 + 12 >> 2];
 i11 = i5 | 0;
 i12 = i5 + 4 | 0;
 i13 = i5 + 8 | 0;
 i14 = i5 + 12 | 0;
 while (1) {
  __ZN7WebCore20previousLinePositionERKNS_15VisiblePositionEiNS_12EditableTypeE(i5, i1, i3, 0);
  if ((HEAP32[i11 >> 2] | 0) == 0) {
   i15 = 27;
   break;
  }
  i16 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i5, i1) | 0;
  i17 = HEAP32[i11 >> 2] | 0;
  i18 = (i17 | 0) == 0;
  if (i16) {
   i15 = 17;
   break;
  }
  if (!i18) {
   i16 = i17 + 8 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
  }
  i16 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = i17;
  do {
   if ((i16 | 0) != 0) {
    i19 = i16 + 8 | 0;
    i20 = i19 | 0;
    i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
    HEAP32[i20 >> 2] = i21;
    if ((i21 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
   }
  } while (0);
  HEAP32[i8 >> 2] = HEAP32[i12 >> 2];
  i16 = HEAP32[i13 >> 2] | 0;
  i19 = HEAP32[i10 >> 2] & -8 | i16 & 7;
  HEAP32[i10 >> 2] = i19;
  HEAP8[i9] = i19 & 255 & -9 | i16 & 8;
  HEAP32[i7 >> 2] = HEAP32[i14 >> 2];
  i16 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i16 | 0) != 0) {
    i19 = i16 + 8 | 0;
    i21 = i19 | 0;
    i20 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
    HEAP32[i21 >> 2] = i20;
    if ((i20 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
   }
  } while (0);
  if (!(__ZN7WebCore15inSameParagraphERKNS_15VisiblePositionES2_NS_27EditingBoundaryCrossingRuleE(i2, i1, 1) | 0)) {
   i15 = 22;
   break;
  }
 }
 if ((i15 | 0) == 17) {
  if (i18) {
   STACKTOP = i4;
   return;
  }
  i18 = i17 + 8 | 0;
  i17 = i18 | 0;
  i1 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
  HEAP32[i17 >> 2] = i1;
  if ((i1 | 0) >= 1) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
  STACKTOP = i4;
  return;
 } else if ((i15 | 0) == 22) {
  STACKTOP = i4;
  return;
 } else if ((i15 | 0) == 27) {
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore21nextParagraphPositionERKNS_15VisiblePositionEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 i8 = i1 + 4 | 0;
 HEAP32[i8 >> 2] = HEAP32[i2 + 4 >> 2];
 i7 = i2 + 8 | 0;
 i9 = i1 + 8 | 0;
 i10 = i9;
 i11 = HEAP32[i10 >> 2] & -8 | HEAP32[i7 >> 2] & 7;
 HEAP32[i10 >> 2] = i11;
 HEAP8[i9] = i11 & 255 & -9 | HEAP8[i7] & 8;
 i7 = i1 + 12 | 0;
 HEAP32[i7 >> 2] = HEAP32[i2 + 12 >> 2];
 i11 = i5 | 0;
 i12 = i5 + 4 | 0;
 i13 = i5 + 8 | 0;
 i14 = i5 + 12 | 0;
 while (1) {
  __ZN7WebCore16nextLinePositionERKNS_15VisiblePositionEiNS_12EditableTypeE(i5, i1, i3, 0);
  if ((HEAP32[i11 >> 2] | 0) == 0) {
   i15 = 22;
   break;
  }
  i16 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i5, i1) | 0;
  i17 = HEAP32[i11 >> 2] | 0;
  i18 = (i17 | 0) == 0;
  if (i16) {
   i15 = 17;
   break;
  }
  if (!i18) {
   i16 = i17 + 8 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
  }
  i16 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = i17;
  do {
   if ((i16 | 0) != 0) {
    i19 = i16 + 8 | 0;
    i20 = i19 | 0;
    i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
    HEAP32[i20 >> 2] = i21;
    if ((i21 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
   }
  } while (0);
  HEAP32[i8 >> 2] = HEAP32[i12 >> 2];
  i16 = HEAP32[i13 >> 2] | 0;
  i19 = HEAP32[i10 >> 2] & -8 | i16 & 7;
  HEAP32[i10 >> 2] = i19;
  HEAP8[i9] = i19 & 255 & -9 | i16 & 8;
  HEAP32[i7 >> 2] = HEAP32[i14 >> 2];
  i16 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i16 | 0) != 0) {
    i19 = i16 + 8 | 0;
    i21 = i19 | 0;
    i20 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
    HEAP32[i21 >> 2] = i20;
    if ((i20 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
   }
  } while (0);
  if (!(__ZN7WebCore15inSameParagraphERKNS_15VisiblePositionES2_NS_27EditingBoundaryCrossingRuleE(i2, i1, 1) | 0)) {
   i15 = 23;
   break;
  }
 }
 if ((i15 | 0) == 17) {
  if (i18) {
   STACKTOP = i4;
   return;
  }
  i18 = i17 + 8 | 0;
  i17 = i18 | 0;
  i1 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
  HEAP32[i17 >> 2] = i1;
  if ((i1 | 0) >= 1) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
  STACKTOP = i4;
  return;
 } else if ((i15 | 0) == 22) {
  STACKTOP = i4;
  return;
 } else if ((i15 | 0) == 23) {
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore31CachedLogicallyOrderedLeafBoxes26previousTextOrLineBreakBoxEPKNS_13RootInlineBoxEPKNS_13InlineTextBoxE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i1 | 0;
 if ((HEAP32[i5 >> 2] | 0) != (i2 | 0)) {
  HEAP32[i5 >> 2] = i2;
  i5 = i1 + 4 | 0;
  i6 = i1 + 8 | 0;
  do {
   if ((HEAP32[i6 >> 2] | 0) != 0) {
    i7 = i1 + 12 | 0;
    if ((HEAP32[i7 >> 2] | 0) != 0) {
     HEAP32[i7 >> 2] = 0;
    }
    i7 = i5 | 0;
    i8 = HEAP32[i7 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break;
    }
    HEAP32[i7 >> 2] = 0;
    HEAP32[i6 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i8);
   }
  } while (0);
  __ZNK7WebCore13InlineFlowBox30collectLeafBoxesInLogicalOrderERN3WTF6VectorIPNS_9InlineBoxELj0ENS1_15CrashOnOverflowEEEPFvPvPS4_S9_ES8_(i2 | 0, i5, 0, 0);
 }
 i5 = i1 + 12 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 L14 : do {
  if ((i3 | 0) == 0) {
   i9 = i2;
  } else {
   i6 = i3 | 0;
   i8 = i1 + 4 | 0;
   i7 = 0;
   while (1) {
    if (i7 >>> 0 >= i2 >>> 0) {
     i4 = 0;
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[i8 >> 2] | 0) + (i7 << 2) >> 2] | 0)) {
     i9 = i7;
     break L14;
    } else {
     i7 = i7 + 1 | 0;
    }
   }
   return i4 | 0;
  }
 } while (0);
 i3 = i9 - 1 | 0;
 if ((i3 | 0) <= -1) {
  i4 = 0;
  return i4 | 0;
 }
 i9 = i1 + 4 | 0;
 i1 = i3;
 i3 = i2;
 while (1) {
  if (i3 >>> 0 <= i1 >>> 0) {
   i10 = 16;
   break;
  }
  i2 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i1 << 2) >> 2] | 0;
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 1](i2) | 0) {
   i4 = i2;
   i10 = 26;
   break;
  }
  i7 = HEAP32[i2 + 16 >> 2] | 0;
  if ((HEAP32[i7 + 20 >> 2] & 4096 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 620 >> 2] & 1](i7) | 0)) {
    i4 = i2;
    i10 = 28;
    break;
   }
  }
  i2 = i1 - 1 | 0;
  if ((i2 | 0) <= -1) {
   i4 = 0;
   i10 = 27;
   break;
  }
  i1 = i2;
  i3 = HEAP32[i5 >> 2] | 0;
 }
 if ((i10 | 0) == 16) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i10 | 0) == 26) {
  return i4 | 0;
 } else if ((i10 | 0) == 27) {
  return i4 | 0;
 } else if ((i10 | 0) == 28) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore12startOfBlockERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) == 0) {
  i9 = i5 + 8 | 0;
  i10 = 0;
  i11 = i9;
  i12 = i9;
 } else {
  i9 = i8 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i9 = i5 + 8 | 0;
  i8 = i9;
  i10 = HEAP32[i8 >> 2] & -8;
  i11 = i9;
  i12 = i8;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i10 | i8 & 7;
 HEAP32[i12 >> 2] = i2;
 HEAP8[i11] = i2 & 255 & -9 | i8 & 8;
 do {
  if ((__ZNK7WebCore8Position13containerNodeEv(i5) | 0) == 0) {
   i13 = 6;
  } else {
   i8 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(__ZNK7WebCore8Position13containerNodeEv(i5) | 0, i3) | 0;
   if ((i8 | 0) == 0) {
    i13 = 6;
    break;
   }
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i6, i8 | 0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i6, 1);
   i8 = HEAP32[i6 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i2 = i8 + 8 | 0;
   i8 = i2 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 if ((i13 | 0) == 6) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i13 = i1 + 8 | 0;
  i6 = i13;
  i3 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = i3 & -8;
  HEAP8[i13] = i3 & 255 & -16;
  HEAP32[i1 + 12 >> 2] = 1;
 }
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i1 + 8 | 0;
 i1 = i7 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore10endOfBlockERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) == 0) {
  i9 = i5 + 8 | 0;
  i10 = 0;
  i11 = i9;
  i12 = i9;
 } else {
  i9 = i8 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i9 = i5 + 8 | 0;
  i8 = i9;
  i10 = HEAP32[i8 >> 2] & -8;
  i11 = i9;
  i12 = i8;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i10 | i8 & 7;
 HEAP32[i12 >> 2] = i2;
 HEAP8[i11] = i2 & 255 & -9 | i8 & 8;
 do {
  if ((__ZNK7WebCore8Position13containerNodeEv(i5) | 0) == 0) {
   i13 = 6;
  } else {
   i8 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(__ZNK7WebCore8Position13containerNodeEv(i5) | 0, i3) | 0;
   if ((i8 | 0) == 0) {
    i13 = 6;
    break;
   }
   __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i6, i8 | 0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i6, 1);
   i8 = HEAP32[i6 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i2 = i8 + 8 | 0;
   i8 = i2 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 if ((i13 | 0) == 6) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i13 = i1 + 8 | 0;
  i6 = i13;
  i3 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = i3 & -8;
  HEAP8[i13] = i3 & 255 & -16;
  HEAP32[i1 + 12 >> 2] = 1;
 }
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i1 + 8 | 0;
 i1 = i7 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore31CachedLogicallyOrderedLeafBoxes22nextTextOrLineBreakBoxEPKNS_13RootInlineBoxEPKNS_13InlineTextBoxE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i1 | 0;
 if ((HEAP32[i5 >> 2] | 0) != (i2 | 0)) {
  HEAP32[i5 >> 2] = i2;
  i5 = i1 + 4 | 0;
  i6 = i1 + 8 | 0;
  do {
   if ((HEAP32[i6 >> 2] | 0) != 0) {
    i7 = i1 + 12 | 0;
    if ((HEAP32[i7 >> 2] | 0) != 0) {
     HEAP32[i7 >> 2] = 0;
    }
    i7 = i5 | 0;
    i8 = HEAP32[i7 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break;
    }
    HEAP32[i7 >> 2] = 0;
    HEAP32[i6 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i8);
   }
  } while (0);
  __ZNK7WebCore13InlineFlowBox30collectLeafBoxesInLogicalOrderERN3WTF6VectorIPNS_9InlineBoxELj0ENS1_15CrashOnOverflowEEEPFvPvPS4_S9_ES8_(i2 | 0, i5, 0, 0);
 }
 if ((i3 | 0) == 0) {
  i9 = 0;
  i10 = HEAP32[i1 + 12 >> 2] | 0;
 } else {
  i5 = i3 | 0;
  i3 = i1 + 4 | 0;
  i2 = HEAP32[i1 + 12 >> 2] | 0;
  i6 = 0;
  while (1) {
   if (i6 >>> 0 >= i2 >>> 0) {
    i11 = 0;
    break;
   }
   if ((i5 | 0) == (HEAP32[(HEAP32[i3 >> 2] | 0) + (i6 << 2) >> 2] | 0)) {
    i11 = i6;
    break;
   } else {
    i6 = i6 + 1 | 0;
   }
  }
  i9 = i11 + 1 | 0;
  i10 = i2;
 }
 i2 = i1 + 12 | 0;
 if (i9 >>> 0 >= i10 >>> 0) {
  i4 = 0;
  return i4 | 0;
 }
 i10 = i1 + 4 | 0;
 i1 = i9;
 while (1) {
  i9 = HEAP32[(HEAP32[i10 >> 2] | 0) + (i1 << 2) >> 2] | 0;
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] & 1](i9) | 0) {
   i4 = i9;
   i12 = 24;
   break;
  }
  i11 = HEAP32[i9 + 16 >> 2] | 0;
  if ((HEAP32[i11 + 20 >> 2] & 4096 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 620 >> 2] & 1](i11) | 0)) {
    i4 = i9;
    i12 = 25;
    break;
   }
  }
  i9 = i1 + 1 | 0;
  if (i9 >>> 0 < (HEAP32[i2 >> 2] | 0) >>> 0) {
   i1 = i9;
  } else {
   i4 = 0;
   i12 = 26;
   break;
  }
 }
 if ((i12 | 0) == 24) {
  return i4 | 0;
 } else if ((i12 | 0) == 25) {
  return i4 | 0;
 } else if ((i12 | 0) == 26) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore11inSameBlockERKNS_15VisiblePositionES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = i6;
 i9 = i6 + 8 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 i9 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i4 + 8 | 0;
 i6 = i1;
 i10 = HEAP32[i6 >> 2] & -8 | i9 & 7;
 HEAP32[i6 >> 2] = i10;
 HEAP8[i1] = i10 & 255 & -9 | i9 & 8;
 i9 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(__ZNK7WebCore8Position13containerNodeEv(i4) | 0, 1) | 0;
 i4 = i5 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 HEAP32[i4 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i1 = i10 + 8 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i5 + 8 | 0;
 i10 = i2;
 i6 = HEAP32[i10 >> 2] & -8 | i1 & 7;
 HEAP32[i10 >> 2] = i6;
 HEAP8[i2] = i6 & 255 & -9 | i1 & 8;
 i1 = (i9 | 0) == (__ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(__ZNK7WebCore8Position13containerNodeEv(i5) | 0, 1) | 0);
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
   i9 = i4 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i7 = i1;
  STACKTOP = i3;
  return i7 | 0;
 }
 i8 = i5 + 8 | 0;
 i5 = i8 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  i7 = i1;
  STACKTOP = i3;
  return i7 | 0;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  i7 = i1;
  STACKTOP = i3;
  return i7 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 i7 = i1;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore22startOfEditableContentERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i4 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) == 0) {
  i8 = i4 + 8 | 0;
  i9 = 0;
  i10 = i8;
  i11 = i8;
 } else {
  i8 = i7 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i8 = i4 + 8 | 0;
  i7 = i8;
  i9 = HEAP32[i7 >> 2] & -8;
  i10 = i8;
  i11 = i7;
 }
 HEAP32[i4 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i9 | i7 & 7;
 HEAP32[i11 >> 2] = i2;
 HEAP8[i10] = i2 & 255 & -9 | i7 & 8;
 i7 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i4, 0) | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 + 8 | 0;
   i2 = i6 | 0;
   i10 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 if ((i7 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i4 = i1 + 8 | 0;
  i6 = i4;
  i10 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = i10 & -8;
  HEAP8[i4] = i10 & 255 & -16;
  HEAP32[i1 + 12 >> 2] = 1;
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i5, i7);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i5, 1);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 + 8 | 0;
 i1 = i5 | 0;
 i7 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20endOfEditableContentERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i4 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) == 0) {
  i8 = i4 + 8 | 0;
  i9 = 0;
  i10 = i8;
  i11 = i8;
 } else {
  i8 = i7 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i8 = i4 + 8 | 0;
  i7 = i8;
  i9 = HEAP32[i7 >> 2] & -8;
  i10 = i8;
  i11 = i7;
 }
 HEAP32[i4 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i9 | i7 & 7;
 HEAP32[i11 >> 2] = i2;
 HEAP8[i10] = i2 & 255 & -9 | i7 & 8;
 i7 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i4, 0) | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 + 8 | 0;
   i2 = i6 | 0;
   i10 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 if ((i7 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i4 = i1 + 8 | 0;
  i6 = i4;
  i10 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = i10 & -8;
  HEAP8[i4] = i10 & 255 & -16;
  HEAP32[i1 + 12 >> 2] = 1;
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i5, i7);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i5, 1);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 + 8 | 0;
 i1 = i5 | 0;
 i7 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 12 | 0;
 if ((HEAP32[i6 >> 2] & 1 | 0) == 0) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = i2;
  i8 = i2 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i5, 4);
  i5 = HEAP32[i7 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i7 = i5 + 8 | 0;
  i5 = i7 | 0;
  i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i8;
  if ((i8 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i2;
 i8 = i2 + 8 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 1](i2) | 0) {
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 168 >> 2] & 1](i2) | 0;
  } else {
   if ((HEAP32[i6 >> 2] & 2 | 0) == 0) {
    i9 = 0;
    break;
   }
   i9 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i2) | 0;
  }
 } while (0);
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i4, i9, 0);
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i9 + 8 | 0;
 i9 = i7 | 0;
 i4 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20startOfNextParagraphERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i4, i2, 2);
 __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i5, i4, 1);
 do {
  if ((__ZN7WebCore25isFirstPositionAfterTableERKNS_15VisiblePositionE(i5) | 0) == 0) {
   i2 = i5 | 0;
   i6 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i1 >> 2] = i6;
   HEAP32[i1 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
   i6 = HEAP32[i5 + 8 >> 2] | 0;
   i2 = i1 + 8 | 0;
   i7 = i2;
   i8 = HEAP32[i7 >> 2] & -8 | i6 & 7;
   HEAP32[i7 >> 2] = i8;
   HEAP8[i2] = i8 & 255 & -9 | i6 & 8;
   HEAP32[i1 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
  } else {
   __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i1, i5, 1);
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i8 = i6 + 8 | 0;
   i6 = i8 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i5 + 8 | 0;
 i5 = i4 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15startOfDocumentERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i2 = (i5 | 0) == 0;
 do {
  if (i2) {
   i6 = i4;
   i7 = 8;
  } else {
   i8 = i5 + 8 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   i8 = HEAP32[(HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i6 = i4;
    i7 = 8;
    break;
   }
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i4, i8 | 0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i4, 1);
   i8 = HEAP32[i4 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 + 8 | 0;
   i8 = i9 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 do {
  if ((i7 | 0) == 8) {
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   i4 = i1 + 8 | 0;
   i6 = i4;
   i9 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i9 & -8;
   HEAP8[i4] = i9 & 255 & -16;
   HEAP32[i1 + 12 >> 2] = 1;
   if (!i2) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i2 = i5 + 8 | 0;
 i5 = i2 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13endOfDocumentERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i2 = (i5 | 0) == 0;
 do {
  if (i2) {
   i6 = i4;
   i7 = 8;
  } else {
   i8 = i5 + 8 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   i8 = HEAP32[(HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i6 = i4;
    i7 = 8;
    break;
   }
   __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i4, i8 | 0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i4, 1);
   i8 = HEAP32[i4 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 + 8 | 0;
   i8 = i9 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 do {
  if ((i7 | 0) == 8) {
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   i4 = i1 + 8 | 0;
   i6 = i4;
   i9 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i9 & -8;
   HEAP8[i4] = i9 & 255 & -16;
   HEAP32[i1 + 12 >> 2] = 1;
   if (!i2) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i2 = i5 + 8 | 0;
 i5 = i2 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 1 | 0) == 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i5, 3);
  i5 = HEAP32[i6 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i5 + 8 | 0;
  i5 = i6 | 0;
  i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i7;
  if ((i7 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i3;
  return;
 } else {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i4, 0, 0);
  i4 = HEAP32[i6 >> 2] | 0;
  if ((i4 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i4 + 8 | 0;
  i4 = i6 | 0;
  i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  HEAP32[i4 >> 2] = i1;
  if ((i1 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCoreL45absoluteLineDirectionPointToLocalPointInBlockEPNS_13RootInlineBoxEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = __ZNK7WebCore13RootInlineBox9blockFlowEv(i2) | 0;
 HEAPF32[i6 >> 2] = +0;
 HEAPF32[i6 + 4 >> 2] = +0;
 __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i5, i9 | 0, i6, 0);
 i6 = i9 + 20 | 0;
 i10 = HEAP32[i6 >> 2] | 0;
 if ((i10 & 65536 | 0) == 0) {
  i11 = i10;
 } else {
  __ZNK7WebCore9RenderBox21scrolledContentOffsetEv(i8, i9 | 0);
  __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i7, i8);
  d12 = +HEAPF32[i7 + 4 >> 2];
  i8 = i5 | 0;
  HEAPF32[i8 >> 2] = +HEAPF32[i8 >> 2] - +HEAPF32[i7 >> 2];
  i7 = i5 + 4 | 0;
  HEAPF32[i7 >> 2] = +HEAPF32[i7 >> 2] - d12;
  i11 = HEAP32[i6 >> 2] | 0;
 }
 if ((i11 & 8192 | 0) == 0) {
  i11 = __ZNK7WebCore13RootInlineBox25blockDirectionPointInLineEv(i2) | 0;
  i6 = ~~(+(i3 | 0) - +HEAPF32[i5 + 4 >> 2]);
  HEAP32[i1 >> 2] = i11;
  HEAP32[i1 + 4 >> 2] = i6;
  STACKTOP = i4;
  return;
 } else {
  i6 = ~~(+(i3 | 0) - +HEAPF32[i5 >> 2]);
  i5 = __ZNK7WebCore13RootInlineBox25blockDirectionPointInLineEv(i2) | 0;
  HEAP32[i1 >> 2] = i6;
  HEAP32[i1 + 4 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore15inSameParagraphERKNS_15VisiblePositionES2_NS_27EditingBoundaryCrossingRuleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i5, i1, i3);
 __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i6, i2, i3);
 i3 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i5, i6) | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 8 | 0;
   i1 = i6 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = i3;
  STACKTOP = i4;
  return i7 | 0;
 }
 i5 = i2 + 8 | 0;
 i2 = i5 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  i7 = i3;
  STACKTOP = i4;
  return i7 | 0;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  i7 = i3;
  STACKTOP = i4;
  return i7 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 i7 = i3;
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN7WebCore10inSameLineERKNS_15VisiblePositionES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 __ZN7WebCoreL11startOfLineERKNS_15VisiblePositionENS_27LineEndpointComputationModeE(i4, i1, 1);
 __ZN7WebCoreL11startOfLineERKNS_15VisiblePositionENS_27LineEndpointComputationModeE(i5, i2, 1);
 i2 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i4, i5) | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 + 8 | 0;
   i7 = i5 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i6 = i2;
  STACKTOP = i3;
  return i6 | 0;
 }
 i4 = i1 + 8 | 0;
 i1 = i4 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  i6 = i2;
  STACKTOP = i3;
  return i6 | 0;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  i6 = i2;
  STACKTOP = i3;
  return i6 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 i6 = i2;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN7WebCore14inSameDocumentERKNS_15VisiblePositionES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = i3 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 i1 = HEAP32[i2 >> 2] | 0;
 i2 = (i1 | 0) == 0;
 if (!i2) {
  i5 = i1 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 if ((i3 | 0) == (i1 | 0)) {
  i6 = 1;
 } else {
  i6 = (HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0) == (HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 }
 do {
  if (!i2) {
   i5 = i1 + 8 | 0;
   i7 = i5 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i1 = i3 + 8 | 0;
 i3 = i1 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  i4 = i6;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  i4 = i6;
  return i4 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 i4 = i6;
 return i4 | 0;
}
function __ZN7WebCore15startOfDocumentEPKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i4, i5 | 0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i4, 1);
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i6 = i5 + 8 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 i4 = i1 + 8 | 0;
 i2 = i4;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6 & -8;
 HEAP8[i4] = i6 & 255 & -16;
 HEAP32[i1 + 12 >> 2] = 1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13endOfDocumentEPKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i4, i5 | 0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i4, 1);
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i6 = i5 + 8 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 i4 = i1 + 8 | 0;
 i2 = i4;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6 & -8;
 HEAP8[i4] = i6 & 255 & -16;
 HEAP32[i1 + 12 >> 2] = 1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 do {
  if ((HEAP32[i1 >> 2] | 0) == 0) {
   i5 = 0;
  } else {
   __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i4, i1, i2);
   i6 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i1, i4) | 0;
   i7 = HEAP32[i4 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i5 = i6;
    break;
   }
   i8 = i7 + 8 | 0;
   i7 = i8 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    i5 = i6;
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    i5 = i6;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
   i5 = i6;
  }
 } while (0);
 STACKTOP = i3;
 return i5 | 0;
}
function __ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 do {
  if ((HEAP32[i1 >> 2] | 0) == 0) {
   i5 = 0;
  } else {
   __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i4, i1, i2);
   i6 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i1, i4) | 0;
   i7 = HEAP32[i4 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i5 = i6;
    break;
   }
   i8 = i7 + 8 | 0;
   i7 = i8 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    i5 = i6;
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    i5 = i6;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
   i5 = i6;
  }
 } while (0);
 STACKTOP = i3;
 return i5 | 0;
}
function __ZN7WebCoreL17startWordBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((__ZN7WebCore30startOfLastWordBoundaryContextEPKti(i1, i3) | 0) != 0) {
    break;
   }
   HEAP8[i5] = 1;
   i9 = 0;
   STACKTOP = i6;
   return i9 | 0;
  }
 } while (0);
 HEAP8[i5] = 0;
 i5 = i3 - 1 | 0;
 if ((HEAP16[i1 + (i5 << 1) >> 1] & -1024) << 16 >> 16 != -9216 | (i5 | 0) == 0) {
  i10 = i5;
 } else {
  i4 = i3 - 2 | 0;
  i10 = (HEAP16[i1 + (i4 << 1) >> 1] & -1024) << 16 >> 16 == -10240 ? i4 : i5;
 }
 __ZN7WebCore16findWordBoundaryEPKtiiPiS2_(i1, i2, i10, i7, i8);
 i9 = HEAP32[i7 >> 2] | 0;
 STACKTOP = i6;
 return i9 | 0;
}
function __ZN7WebCore14isStartOfBlockERKNS_15VisiblePositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 do {
  if ((HEAP32[i1 >> 2] | 0) == 0) {
   i4 = 0;
  } else {
   __ZN7WebCore12startOfBlockERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i3, i1, 0);
   i5 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i1, i3) | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i4 = i5;
    break;
   }
   i7 = i6 + 8 | 0;
   i6 = i7 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    i4 = i5;
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    i4 = i5;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
   i4 = i5;
  }
 } while (0);
 STACKTOP = i2;
 return i4 | 0;
}
function __ZN7WebCore13isStartOfLineERKNS_15VisiblePositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 do {
  if ((HEAP32[i1 >> 2] | 0) == 0) {
   i4 = 0;
  } else {
   __ZN7WebCoreL11startOfLineERKNS_15VisiblePositionENS_27LineEndpointComputationModeE(i3, i1, 1);
   i5 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i1, i3) | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i4 = i5;
    break;
   }
   i7 = i6 + 8 | 0;
   i6 = i7 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    i4 = i5;
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    i4 = i5;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
   i4 = i5;
  }
 } while (0);
 STACKTOP = i2;
 return i4 | 0;
}
function __ZN7WebCore12isEndOfBlockERKNS_15VisiblePositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 do {
  if ((HEAP32[i1 >> 2] | 0) == 0) {
   i4 = 0;
  } else {
   __ZN7WebCore10endOfBlockERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i3, i1, 0);
   i5 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i1, i3) | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i4 = i5;
    break;
   }
   i7 = i6 + 8 | 0;
   i6 = i7 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    i4 = i5;
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    i4 = i5;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
   i4 = i5;
  }
 } while (0);
 STACKTOP = i2;
 return i4 | 0;
}
function __ZN7WebCore11isEndOfLineERKNS_15VisiblePositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 do {
  if ((HEAP32[i1 >> 2] | 0) == 0) {
   i4 = 0;
  } else {
   __ZN7WebCoreL9endOfLineERKNS_15VisiblePositionENS_27LineEndpointComputationModeE(i3, i1, 1);
   i5 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i1, i3) | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i4 = i5;
    break;
   }
   i7 = i6 + 8 | 0;
   i6 = i7 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    i4 = i5;
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    i4 = i5;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
   i4 = i5;
  }
 } while (0);
 STACKTOP = i2;
 return i4 | 0;
}
function __ZN7WebCore13isStartOfWordERKNS_15VisiblePositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 do {
  if ((HEAP32[i1 >> 2] | 0) == 0) {
   i4 = 0;
  } else {
   __ZN7WebCore11startOfWordERKNS_15VisiblePositionENS_9EWordSideE(i3, i1, 0);
   i5 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i1, i3) | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i4 = i5;
    break;
   }
   i7 = i6 + 8 | 0;
   i6 = i7 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    i4 = i5;
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    i4 = i5;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
   i4 = i5;
  }
 } while (0);
 STACKTOP = i2;
 return i4 | 0;
}
function __ZN7WebCore31CachedLogicallyOrderedLeafBoxes12collectBoxesEPKNS_13RootInlineBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  i4 = i1 + 4 | 0;
  return i4 | 0;
 }
 HEAP32[i3 >> 2] = i2;
 i3 = i1 + 4 | 0;
 i5 = i1 + 8 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   i6 = i1 + 12 | 0;
   if ((HEAP32[i6 >> 2] | 0) != 0) {
    HEAP32[i6 >> 2] = 0;
   }
   i6 = i3 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   HEAP32[i6 >> 2] = 0;
   HEAP32[i5 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i7);
  }
 } while (0);
 __ZNK7WebCore13InlineFlowBox30collectLeafBoxesInLogicalOrderERN3WTF6VectorIPNS_9InlineBoxELj0ENS1_15CrashOnOverflowEEEPFvPvPS4_S9_ES8_(i2 | 0, i3, 0, 0);
 i4 = i3;
 return i4 | 0;
}
function __ZN7WebCore35isEndOfEditableOrNonEditableContentERKNS_15VisiblePositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 do {
  if ((HEAP32[i1 >> 2] | 0) == 0) {
   i4 = 0;
  } else {
   __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i3, i1, 0);
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i4 = 1;
    break;
   }
   i6 = i5 + 8 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    i4 = 0;
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    i4 = 0;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
   i4 = 0;
  }
 } while (0);
 STACKTOP = i2;
 return i4 | 0;
}
function __ZN7WebCore24previousSentencePositionERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 __ZN7WebCoreL16previousBoundaryERKNS_15VisiblePositionEPFjPKtjjNS_33BoundarySearchContextAvailabilityERbE(i4, i2, F_BASE_iiiiii + 6 | 0);
 __ZNK7WebCore15VisiblePosition30honorEditingBoundaryAtOrBeforeERKS0_(i1, i2, i4);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 + 8 | 0;
 i2 = i4 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20previousWordPositionERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 __ZN7WebCoreL16previousBoundaryERKNS_15VisiblePositionEPFjPKtjjNS_33BoundarySearchContextAvailabilityERbE(i4, i2, F_BASE_iiiiii + 4 | 0);
 __ZNK7WebCore15VisiblePosition30honorEditingBoundaryAtOrBeforeERKS0_(i1, i2, i4);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 + 8 | 0;
 i2 = i4 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20nextSentencePositionERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 __ZN7WebCoreL12nextBoundaryERKNS_15VisiblePositionEPFjPKtjjNS_33BoundarySearchContextAvailabilityERbE(i4, i2, F_BASE_iiiiii + 16 | 0);
 __ZNK7WebCore15VisiblePosition29honorEditingBoundaryAtOrAfterERKS0_(i1, i2, i4);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 + 8 | 0;
 i2 = i4 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16nextWordPositionERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 __ZN7WebCoreL12nextBoundaryERKNS_15VisiblePositionEPFjPKtjjNS_33BoundarySearchContextAvailabilityERbE(i4, i2, F_BASE_iiiiii + 2 | 0);
 __ZNK7WebCore15VisiblePosition29honorEditingBoundaryAtOrAfterERKS0_(i1, i2, i4);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 + 8 | 0;
 i2 = i4 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17isStartOfDocumentERKNS_15VisiblePositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 do {
  if ((HEAP32[i1 >> 2] | 0) == 0) {
   i4 = 0;
  } else {
   __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i3, i1, 0);
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i4 = 1;
    break;
   }
   i6 = i5 + 8 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    i4 = 0;
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    i4 = 0;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
   i4 = 0;
  }
 } while (0);
 STACKTOP = i2;
 return i4 | 0;
}
function __ZN7WebCore15isEndOfDocumentERKNS_15VisiblePositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 do {
  if ((HEAP32[i1 >> 2] | 0) == 0) {
   i4 = 0;
  } else {
   __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i3, i1, 0);
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i4 = 1;
    break;
   }
   i6 = i5 + 8 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    i4 = 0;
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    i4 = 0;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
   i4 = 0;
  }
 } while (0);
 STACKTOP = i2;
 return i4 | 0;
}
function __ZN7WebCoreL15endWordBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i2 - i3 | 0;
   if ((__ZN7WebCore29endOfFirstWordBoundaryContextEPKti(i1 + (i3 << 1) | 0, i8) | 0) != (i8 | 0)) {
    break;
   }
   HEAP8[i5] = 1;
   i9 = i2;
   STACKTOP = i6;
   return i9 | 0;
  }
 } while (0);
 HEAP8[i5] = 0;
 __ZN7WebCore19findEndWordBoundaryEPKtiiPi(i1, i2, i3, i7);
 i9 = HEAP32[i7 >> 2] | 0;
 STACKTOP = i6;
 return i9 | 0;
}
function __ZNK7WebCore31CachedLogicallyOrderedLeafBoxes16boxIndexInLeavesEPKNS_13InlineTextBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i2 | 0;
 i2 = i1 + 4 | 0;
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= i4 >>> 0) {
   i5 = 0;
   i6 = 5;
   break;
  }
  if ((i3 | 0) == (HEAP32[(HEAP32[i2 >> 2] | 0) + (i1 << 2) >> 2] | 0)) {
   i5 = i1;
   i6 = 6;
   break;
  } else {
   i1 = i1 + 1 | 0;
  }
 }
 if ((i6 | 0) == 5) {
  return i5 | 0;
 } else if ((i6 | 0) == 6) {
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCoreL24nextWordPositionBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i2 - i3 | 0;
   if ((__ZN7WebCore29endOfFirstWordBoundaryContextEPKti(i1 + (i3 << 1) | 0, i6) | 0) != (i6 | 0)) {
    break;
   }
   HEAP8[i5] = 1;
   i7 = i2;
   return i7 | 0;
  }
 } while (0);
 HEAP8[i5] = 0;
 i7 = __ZN7WebCore21findNextWordFromIndexEPKtiib(i1, i2, i3, 1) | 0;
 return i7 | 0;
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
function __ZN7WebCoreL28previousWordPositionBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 do {
  if ((i4 | 0) != 0) {
   if ((__ZN7WebCore30startOfLastWordBoundaryContextEPKti(i1, i3) | 0) != 0) {
    break;
   }
   HEAP8[i5] = 1;
   i6 = 0;
   return i6 | 0;
  }
 } while (0);
 HEAP8[i5] = 0;
 i6 = __ZN7WebCore21findNextWordFromIndexEPKtiib(i1, i2, i3, 0) | 0;
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
function __ZN7WebCore19rightBoundaryOfLineERKNS_15VisiblePositionENS_13TextDirectionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) == 1) {
  __ZN7WebCoreL9endOfLineERKNS_15VisiblePositionENS_27LineEndpointComputationModeE(i1, i2, 0);
  return;
 } else {
  __ZN7WebCoreL11startOfLineERKNS_15VisiblePositionENS_27LineEndpointComputationModeE(i1, i2, 0);
  return;
 }
}
function __ZN7WebCore18leftBoundaryOfLineERKNS_15VisiblePositionENS_13TextDirectionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) == 1) {
  __ZN7WebCoreL11startOfLineERKNS_15VisiblePositionENS_27LineEndpointComputationModeE(i1, i2, 0);
  return;
 } else {
  __ZN7WebCoreL9endOfLineERKNS_15VisiblePositionENS_27LineEndpointComputationModeE(i1, i2, 0);
  return;
 }
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
function __ZN7WebCoreL32previousSentencePositionBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore18textBreakPrecedingEPNS_17TextBreakIteratorEi(__ZN7WebCore21sentenceBreakIteratorEPKti(i1, i2) | 0, i2) | 0;
}
function __ZN7WebCoreL28nextSentencePositionBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore18textBreakFollowingEPNS_17TextBreakIteratorEi(__ZN7WebCore21sentenceBreakIteratorEPKti(i1, i2) | 0, 0) | 0;
}
function __ZN7WebCoreL21startSentenceBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore18textBreakPrecedingEPNS_17TextBreakIteratorEi(__ZN7WebCore21sentenceBreakIteratorEPKti(i1, i2) | 0, i2) | 0;
}
function __ZN7WebCoreL19endSentenceBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore13textBreakNextEPNS_17TextBreakIteratorE(__ZN7WebCore21sentenceBreakIteratorEPKti(i1, i2) | 0) | 0;
}
function __ZN7WebCore15startOfSentenceERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCoreL16previousBoundaryERKNS_15VisiblePositionEPFjPKtjjNS_33BoundarySearchContextAvailabilityERbE(i1, i2, F_BASE_iiiiii + 14 | 0);
 return;
}
function __ZN7WebCore13endOfSentenceERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCoreL12nextBoundaryERKNS_15VisiblePositionEPFjPKtjjNS_33BoundarySearchContextAvailabilityERbE(i1, i2, F_BASE_iiiiii + 8 | 0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 31](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function __ZN7WebCore18logicalStartOfLineERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCoreL11startOfLineERKNS_15VisiblePositionENS_27LineEndpointComputationModeE(i1, i2, 0);
 return;
}
function __ZN7WebCore16logicalEndOfLineERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCoreL9endOfLineERKNS_15VisiblePositionENS_27LineEndpointComputationModeE(i1, i2, 0);
 return;
}
function __ZN7WebCore11startOfLineERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCoreL11startOfLineERKNS_15VisiblePositionENS_27LineEndpointComputationModeE(i1, i2, 1);
 return;
}
function __ZN7WebCore9endOfLineERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCoreL9endOfLineERKNS_15VisiblePositionENS_27LineEndpointComputationModeE(i1, i2, 1);
 return;
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
function b2(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(2);
 return 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZN7WebCore31CachedLogicallyOrderedLeafBoxesC2Ev(i1) {
 i1 = i1 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore31CachedLogicallyOrderedLeafBoxesC1Ev(i1) {
 i1 = i1 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
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
function b4() {
 abort(4);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore31CachedLogicallyOrderedLeafBoxesC2Ev,b1];
  var FUNCTION_TABLE_iiiiii = [b2,b2,__ZN7WebCoreL24nextWordPositionBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb,b2,__ZN7WebCoreL28previousWordPositionBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb,b2,__ZN7WebCoreL32previousSentencePositionBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb,b2,__ZN7WebCoreL19endSentenceBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb,b2,__ZN7WebCoreL15endWordBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb,b2,__ZN7WebCoreL17startWordBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb,b2,__ZN7WebCoreL21startSentenceBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb,b2,__ZN7WebCoreL28nextSentencePositionBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vi: dynCall_vi, dynCall_iiiiii: dynCall_iiiiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vi": invoke_vi, "invoke_iiiiii": invoke_iiiiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames5brTagE": __ZN7WebCore9HTMLNames5brTagE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore20endOfEditableContentERKNS_15VisiblePositionE","__ZN7WebCore12isEndOfBlockERKNS_15VisiblePositionE","__ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE","__ZN7WebCore17isStartOfDocumentERKNS_15VisiblePositionE","__ZN7WebCore17rightWordPositionERKNS_15VisiblePositionEb","__ZN7WebCore35isEndOfEditableOrNonEditableContentERKNS_15VisiblePositionE","__ZN7WebCore18lastPositionInNodeEPNS_4NodeE","_strlen","__ZN7WebCore15isEndOfDocumentERKNS_15VisiblePositionE","__ZN7WebCore31CachedLogicallyOrderedLeafBoxes26previousTextOrLineBreakBoxEPKNS_13RootInlineBoxEPKNS_13InlineTextBoxE","__ZN7WebCore13endOfSentenceERKNS_15VisiblePositionE","__ZN7WebCoreL15endWordBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb","__ZN7WebCoreL16previousBoundaryERKNS_15VisiblePositionEPFjPKtjjNS_33BoundarySearchContextAvailabilityERbE","__ZN7WebCore21nextParagraphPositionERKNS_15VisiblePositionEi","__ZN7WebCore31CachedLogicallyOrderedLeafBoxes12collectBoxesEPKNS_13RootInlineBoxE","__ZN7WebCore19rightBoundaryOfLineERKNS_15VisiblePositionENS_13TextDirectionE","__ZN7WebCore15inSameParagraphERKNS_15VisiblePositionES2_NS_27EditingBoundaryCrossingRuleE","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZN7WebCoreL19endSentenceBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb","__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE","__ZN7WebCoreL28previousWordPositionBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb","__ZN7WebCore10inSameLineERKNS_15VisiblePositionES2_","__ZN7WebCore13endOfDocumentEPKNS_4NodeE","__ZN7WebCoreL12nextBoundaryERKNS_15VisiblePositionEPFjPKtjjNS_33BoundarySearchContextAvailabilityERbE","__ZN7WebCore9endOfWordERKNS_15VisiblePositionENS_9EWordSideE","__ZN7WebCore20nextSentencePositionERKNS_15VisiblePositionE","__ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE","__ZNK7WebCore31CachedLogicallyOrderedLeafBoxes16boxIndexInLeavesEPKNS_13InlineTextBoxE","__ZN7WebCore31CachedLogicallyOrderedLeafBoxesC2Ev","__ZN7WebCore18leftBoundaryOfLineERKNS_15VisiblePositionENS_13TextDirectionE","__ZN7WebCore18logicalStartOfLineERKNS_15VisiblePositionE","__ZN7WebCore16logicalEndOfLineERKNS_15VisiblePositionE","__ZN7WebCore31CachedLogicallyOrderedLeafBoxes22nextTextOrLineBreakBoxEPKNS_13RootInlineBoxEPKNS_13InlineTextBoxE","__ZN7WebCore11isEndOfLineERKNS_15VisiblePositionE","__ZN7WebCore22startOfEditableContentERKNS_15VisiblePositionE","__ZN7WebCoreL11startOfLineERKNS_15VisiblePositionENS_27LineEndpointComputationModeE","__ZN7WebCore16leftWordPositionERKNS_15VisiblePositionEb","__ZN7WebCore20previousWordPositionERKNS_15VisiblePositionE","__ZN7WebCoreL18endPositionForLineERKNS_15VisiblePositionENS_27LineEndpointComputationModeE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCoreL28nextSentencePositionBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb","__ZN7WebCore16nextWordPositionERKNS_15VisiblePositionE","__ZN7WebCoreL18visualWordPositionERKNS_15VisiblePositionENS_23CursorMovementDirectionEb","__ZN7WebCore25previousParagraphPositionERKNS_15VisiblePositionEi","__ZN7WebCore24previousSentencePositionERKNS_15VisiblePositionE","__ZN7WebCore11startOfLineERKNS_15VisiblePositionE","__ZN7WebCore12startOfBlockERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE","__ZN7WebCoreL45absoluteLineDirectionPointToLocalPointInBlockEPNS_13RootInlineBoxEi","__ZN7WebCoreL9endOfLineERKNS_15VisiblePositionENS_27LineEndpointComputationModeE","__ZN7WebCore13endOfDocumentERKNS_15VisiblePositionE","__ZN7WebCoreL34nextRootInlineBoxCandidatePositionEPNS_4NodeERKNS_15VisiblePositionENS_12EditableTypeE","__ZN7WebCoreL38previousRootInlineBoxCandidatePositionEPNS_4NodeERKNS_15VisiblePositionENS_12EditableTypeE","__ZN7WebCore13isStartOfWordERKNS_15VisiblePositionE","__ZN7WebCore16nextLinePositionERKNS_15VisiblePositionEiNS_12EditableTypeE","__ZN7WebCoreeqERKNS_15VisiblePositionES2_","_memmove","_memset","__ZN7WebCore11inSameBlockERKNS_15VisiblePositionES2_","__ZN7WebCore10endOfBlockERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE","_memcpy","__ZN7WebCore20startOfNextParagraphERKNS_15VisiblePositionE","__ZN7WebCore11startOfWordERKNS_15VisiblePositionENS_9EWordSideE","__ZN7WebCore9endOfLineERKNS_15VisiblePositionE","__ZN7WebCoreL21startSentenceBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb","__ZN7WebCore15startOfDocumentERKNS_15VisiblePositionE","__ZN7WebCoreL24nextWordPositionBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb","__ZN7WebCore15startOfSentenceERKNS_15VisiblePositionE","__ZN7WebCoreL17startWordBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb","__ZN7WebCoreL32previousSentencePositionBoundaryEPKtjjNS_33BoundarySearchContextAvailabilityERb","__ZN7WebCore15startOfDocumentEPKNS_4NodeE","__ZN7WebCore14inSameDocumentERKNS_15VisiblePositionES2_","__ZN7WebCore14isStartOfBlockERKNS_15VisiblePositionE","__ZN7WebCore13isStartOfLineERKNS_15VisiblePositionE","__ZN7WebCore20previousLinePositionERKNS_15VisiblePositionEiNS_12EditableTypeE","__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE"]

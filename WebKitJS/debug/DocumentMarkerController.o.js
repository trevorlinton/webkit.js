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
H_BASE = parentModule["_malloc"](24 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 24;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore24DocumentMarkerControllerC1Ev;
var __ZN7WebCore24DocumentMarkerControllerD1Ev;
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZZN7WebCore22RenderedDocumentMarker17invalidMarkerRectEvE4rect=(H_BASE+8)|0;
  var __ZGVZN7WebCore22RenderedDocumentMarker17invalidMarkerRectEvE4rect=(H_BASE+24)|0;
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
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore24DocumentMarkerController13removeMarkersEPNS_4NodeEjiNS_14DocumentMarker11MarkerTypesENS0_37RemovePartiallyOverlappingMarkerOrNotE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i8 = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 40 | 0;
 if ((i4 | 0) < 1) {
  STACKTOP = i7;
  return;
 }
 i11 = HEAP32[i5 >> 2] | 0;
 i5 = i1 + 20 | 0;
 if ((HEAP32[i5 >> 2] & i11 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i12 = i1 | 0;
 i13 = HEAP32[i1 + 8 >> 2] | 0;
 i14 = i1 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = i2;
 i17 = i16 + ~(i16 << 15) | 0;
 i16 = (i17 >>> 10 ^ i17) * 9 & -1;
 i17 = i16 >>> 6 ^ i16;
 i16 = i17 + ~(i17 << 11) | 0;
 i17 = i16 >>> 16 ^ i16;
 if ((i15 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i16 = i13 & i17;
 i18 = i15 + (i16 << 3) | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 L10 : do {
  if ((i19 | 0) == (i2 | 0)) {
   i20 = i18;
  } else {
   i21 = (i17 >>> 23) + ~i17 | 0;
   i22 = i21 << 12 ^ i21;
   i21 = i22 >>> 7 ^ i22;
   i22 = i21 << 2 ^ i21;
   i21 = i22 >>> 20 ^ i22 | 1;
   i22 = 0;
   i23 = i16;
   i24 = i19;
   while (1) {
    if ((i24 | 0) == 0) {
     break;
    }
    i25 = (i22 | 0) == 0 ? i21 : i22;
    i26 = i25 + i23 & i13;
    i27 = i15 + (i26 << 3) | 0;
    i28 = HEAP32[i27 >> 2] | 0;
    if ((i28 | 0) == (i2 | 0)) {
     i20 = i27;
     break L10;
    } else {
     i22 = i25;
     i23 = i26;
     i24 = i28;
    }
   }
   STACKTOP = i7;
   return;
  }
 } while (0);
 if ((i20 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i15 = HEAP32[i20 + 4 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i20 = i4 + i3 | 0;
 i4 = i15 + 8 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  i29 = 0;
  i30 = 66;
 } else {
  i13 = i15 | 0;
  i19 = (i6 | 0) == 0;
  i6 = i9 | 0;
  i16 = i9 + 4 | 0;
  i17 = i9 + 8 | 0;
  i18 = i9 + 12 | 0;
  i24 = i9 + 16 | 0;
  i23 = i10 | 0;
  i22 = i10 + 4 | 0;
  i21 = i10 + 8 | 0;
  i28 = i10 + 12 | 0;
  i26 = i10 + 16 | 0;
  i25 = 0;
  i27 = 0;
  L25 : while (1) {
   i31 = HEAP32[i13 >> 2] | 0;
   i32 = HEAP32[i31 + (i27 << 5) >> 2] | 0;
   i33 = HEAP32[i31 + (i27 << 5) + 4 >> 2] | 0;
   i34 = HEAP32[i31 + (i27 << 5) + 8 >> 2] | 0;
   i35 = HEAP32[i31 + (i27 << 5) + 12 >> 2] | 0;
   i31 = (i35 | 0) == 0;
   if (!i31) {
    i36 = i35 + 4 | 0;
    HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
   }
   L30 : do {
    if (i33 >>> 0 < i20 >>> 0) {
     do {
      if (i34 >>> 0 > i3 >>> 0) {
       if ((i11 & i32 | 0) == 0) {
        break;
       }
       i36 = HEAP32[i13 >> 2] | 0;
       i37 = i36 + (i27 << 5) | 0;
       i38 = HEAP32[i36 + (i27 << 5) + 12 >> 2] | 0;
       do {
        if ((i38 | 0) != 0) {
         i39 = i38 + 4 | 0;
         i40 = i39 | 0;
         i41 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
         if ((i41 | 0) != 0) {
          HEAP32[i40 >> 2] = i41;
          break;
         }
         i41 = i39 - 4 | 0;
         if ((i41 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i41 >> 2] | 0) + 4 >> 2] & 7](i41);
        }
       } while (0);
       i38 = i27 + 1 | 0;
       __ZN3WTF11VectorMoverILb0EN7WebCore22RenderedDocumentMarkerEE15moveOverlappingEPS2_S4_S4_(i36 + (i38 << 5) | 0, (HEAP32[i13 >> 2] | 0) + (HEAP32[i4 >> 2] << 5) | 0, i37);
       HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - 1;
       if (!i19) {
        i42 = 0;
        i43 = i27;
        i44 = 1;
        i30 = 56;
        break L30;
       }
       do {
        if (i33 >>> 0 < i3 >>> 0) {
         if (i31) {
          HEAP32[i6 >> 2] = i32;
          HEAP32[i16 >> 2] = i33;
          HEAP32[i17 >> 2] = i3;
          HEAP32[i18 >> 2] = i35;
         } else {
          i41 = i35 + 4 | 0;
          HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 1;
          HEAP32[i6 >> 2] = i32;
          HEAP32[i16 >> 2] = i33;
          HEAP32[i17 >> 2] = i3;
          HEAP32[i18 >> 2] = i35;
          i41 = i35 + 4 | 0;
          HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 1;
         }
         if ((HEAP8[H_BASE + 24 | 0] | 0) == 0) {
          _memset(H_BASE + 8 | 0, -1 | 0, 16) | 0;
          HEAP32[H_BASE + 24 >> 2] = 1;
          HEAP32[H_BASE + 28 >> 2] = 0;
         }
         HEAP32[i24 >> 2] = HEAP32[H_BASE + 8 >> 2];
         HEAP32[i24 + 4 >> 2] = HEAP32[H_BASE + 12 >> 2];
         HEAP32[i24 + 8 >> 2] = HEAP32[H_BASE + 16 >> 2];
         HEAP32[i24 + 12 >> 2] = HEAP32[H_BASE + 20 >> 2];
         __ZN3WTF6VectorIN7WebCore22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEE6insertIS2_EEvjOT_(i15, i27, i9);
         i41 = HEAP32[i18 >> 2] | 0;
         do {
          if ((i41 | 0) != 0) {
           i39 = i41 + 4 | 0;
           i40 = i39 | 0;
           i45 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
           if ((i45 | 0) != 0) {
            HEAP32[i40 >> 2] = i45;
            break;
           }
           i45 = i39 - 4 | 0;
           if ((i45 | 0) == 0) {
            break;
           }
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i45 >> 2] | 0) + 4 >> 2] & 7](i45);
          }
         } while (0);
         if (i31) {
          i46 = i38;
          break;
         }
         i41 = i35 + 4 | 0;
         i45 = i41 | 0;
         i39 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
         if ((i39 | 0) != 0) {
          HEAP32[i45 >> 2] = i39;
          i46 = i38;
          break;
         }
         i39 = i41 - 4 | 0;
         if ((i39 | 0) == 0) {
          i46 = i38;
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i39 >> 2] | 0) + 4 >> 2] & 7](i39);
         i46 = i38;
        } else {
         i46 = i27;
        }
       } while (0);
       if (i34 >>> 0 <= i20 >>> 0) {
        i42 = 0;
        i43 = i46;
        i44 = 1;
        i30 = 56;
        break L30;
       }
       if (i31) {
        HEAP32[i23 >> 2] = i32;
        HEAP32[i22 >> 2] = i20;
        HEAP32[i21 >> 2] = i34;
        HEAP32[i28 >> 2] = i35;
       } else {
        i38 = i35 + 4 | 0;
        HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
        HEAP32[i23 >> 2] = i32;
        HEAP32[i22 >> 2] = i20;
        HEAP32[i21 >> 2] = i34;
        HEAP32[i28 >> 2] = i35;
        i38 = i35 + 4 | 0;
        HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
       }
       if ((HEAP8[H_BASE + 24 | 0] | 0) == 0) {
        _memset(H_BASE + 8 | 0, -1 | 0, 16) | 0;
        HEAP32[H_BASE + 24 >> 2] = 1;
        HEAP32[H_BASE + 28 >> 2] = 0;
       }
       HEAP32[i26 >> 2] = HEAP32[H_BASE + 8 >> 2];
       HEAP32[i26 + 4 >> 2] = HEAP32[H_BASE + 12 >> 2];
       HEAP32[i26 + 8 >> 2] = HEAP32[H_BASE + 16 >> 2];
       HEAP32[i26 + 12 >> 2] = HEAP32[H_BASE + 20 >> 2];
       __ZN3WTF6VectorIN7WebCore22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEE6insertIS2_EEvjOT_(i15, i46, i10);
       i38 = HEAP32[i28 >> 2] | 0;
       do {
        if ((i38 | 0) != 0) {
         i37 = i38 + 4 | 0;
         i36 = i37 | 0;
         i39 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
         if ((i39 | 0) != 0) {
          HEAP32[i36 >> 2] = i39;
          break;
         }
         i39 = i37 - 4 | 0;
         if ((i39 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i39 >> 2] | 0) + 4 >> 2] & 7](i39);
        }
       } while (0);
       i38 = i46 + 1 | 0;
       if (i31) {
        i47 = i38;
        i48 = 1;
        break L30;
       }
       i39 = i35 + 4 | 0;
       i37 = i39 | 0;
       i36 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
       if ((i36 | 0) != 0) {
        HEAP32[i37 >> 2] = i36;
        i49 = 1;
        i50 = i38;
        i51 = 0;
        i52 = i36;
        i30 = 58;
        break L30;
       }
       i36 = i39 - 4 | 0;
       if ((i36 | 0) == 0) {
        i42 = 0;
        i43 = i38;
        i44 = 1;
        i30 = 56;
        break L30;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i36 >> 2] | 0) + 4 >> 2] & 7](i36);
       i42 = 0;
       i43 = i38;
       i44 = 1;
       i30 = 56;
       break L30;
      }
     } while (0);
     i42 = 0;
     i43 = i27 + 1 | 0;
     i44 = i25;
     i30 = 56;
    } else {
     i42 = 1;
     i43 = i27;
     i44 = i25;
     i30 = 56;
    }
   } while (0);
   do {
    if ((i30 | 0) == 56) {
     i30 = 0;
     if (i31) {
      i53 = i44;
      i54 = i43;
      i55 = i42;
      i30 = 62;
      break;
     }
     i49 = i44;
     i50 = i43;
     i51 = i42;
     i52 = HEAP32[i35 + 4 >> 2] | 0;
     i30 = 58;
    }
   } while (0);
   do {
    if ((i30 | 0) == 58) {
     i30 = 0;
     i31 = i35 + 4 | 0;
     i34 = i52 - 1 | 0;
     if ((i34 | 0) != 0) {
      HEAP32[i31 >> 2] = i34;
      if (i51) {
       i56 = i49;
       i30 = 64;
       break L25;
      } else {
       i47 = i50;
       i48 = i49;
       break;
      }
     }
     i34 = i31 - 4 | 0;
     if ((i34 | 0) == 0) {
      i53 = i49;
      i54 = i50;
      i55 = i51;
      i30 = 62;
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] & 7](i34);
     if (i51) {
      i56 = i49;
      i30 = 64;
      break L25;
     } else {
      i47 = i50;
      i48 = i49;
     }
    }
   } while (0);
   if ((i30 | 0) == 62) {
    i30 = 0;
    if (i55) {
     i56 = i53;
     i30 = 64;
     break;
    } else {
     i47 = i54;
     i48 = i53;
    }
   }
   i35 = HEAP32[i4 >> 2] | 0;
   if (i47 >>> 0 < i35 >>> 0) {
    i25 = i48;
    i27 = i47;
   } else {
    i57 = i48;
    i58 = i35;
    break;
   }
  }
  if ((i30 | 0) == 64) {
   i57 = i56;
   i58 = HEAP32[i4 >> 2] | 0;
  }
  if ((i58 | 0) == 0) {
   i29 = i57;
   i30 = 66;
  } else {
   i59 = i57;
   i30 = 72;
  }
 }
 do {
  if ((i30 | 0) == 66) {
   __ZN3WTF7HashMapINS_6RefPtrIN7WebCore4NodeEEENS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSD_ISA_EEE4findEPS3_(i8, i12, i2);
   i57 = HEAP32[i8 >> 2] | 0;
   i58 = i1 | 0;
   i4 = i1 + 4 | 0;
   do {
    if ((i57 | 0) == ((HEAP32[i14 >> 2] | 0) + (HEAP32[i4 >> 2] << 3) | 0)) {
     i60 = i1 + 12 | 0;
    } else {
     __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore4NodeEEENS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEEED2Ev(i57);
     HEAP32[i57 >> 2] = -1;
     i56 = i1 + 16 | 0;
     HEAP32[i56 >> 2] = (HEAP32[i56 >> 2] | 0) + 1;
     i56 = i1 + 12 | 0;
     i48 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
     HEAP32[i56 >> 2] = i48;
     i47 = HEAP32[i4 >> 2] | 0;
     if (!((i48 * 6 & -1 | 0) < (i47 | 0) & (i47 | 0) > 8)) {
      i60 = i56;
      break;
     }
     __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_NS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSI_ISB_EEEESJ_E6rehashEiPSC_(i58, (i47 | 0) / 2 & -1, 0) | 0;
     i60 = i56;
    }
   } while (0);
   if ((HEAP32[i60 >> 2] | 0) != 0) {
    i59 = i29;
    i30 = 72;
    break;
   }
   HEAP32[i5 >> 2] = 0;
   if (i29) {
    break;
   }
   STACKTOP = i7;
   return;
  }
 } while (0);
 do {
  if ((i30 | 0) == 72) {
   if (i59) {
    break;
   }
   STACKTOP = i7;
   return;
  }
 } while (0);
 i59 = (HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0;
 i30 = i2 + 32 | 0;
 if (i59) {
  i61 = i30 | 0;
 } else {
  i61 = HEAP32[i30 >> 2] | 0;
 }
 if ((HEAP32[i61 >> 2] | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 if (i59) {
  i62 = i30 | 0;
 } else {
  i62 = HEAP32[i30 >> 2] | 0;
 }
 __ZNK7WebCore12RenderObject7repaintEb(HEAP32[i62 >> 2] | 0, 0);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore24DocumentMarkerController9addMarkerEPNS_4NodeERKNS_14DocumentMarkerE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 80 | 0;
 i11 = i3 + 8 | 0;
 i12 = i3 + 4 | 0;
 if ((HEAP32[i11 >> 2] | 0) == (HEAP32[i12 >> 2] | 0)) {
  STACKTOP = i4;
  return;
 }
 i13 = i3 | 0;
 i14 = i1 + 20 | 0;
 HEAP32[i14 >> 2] = HEAP32[i14 >> 2] | HEAP32[i13 >> 2];
 HEAP32[i6 >> 2] = 0;
 HEAP32[i5 >> 2] = i2;
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_NS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSI_ISB_EEEESJ_E3addINS_17HashMapTranslatorISL_SG_EERPS3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_SC_SE_SG_SL_SJ_EEEEOT0_OT1_(i7, i1 | 0, i5, i6);
 i6 = (HEAP32[i7 >> 2] | 0) + 4 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) == 0) {
   i7 = __ZN3WTF10fastMallocEj(12) | 0;
   i5 = i7;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = 0;
   HEAP32[i7 + 8 >> 2] = 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i5;
   if ((i7 | 0) == 0) {
    i15 = i5;
   } else {
    i5 = i7 + 8 | 0;
    i1 = HEAP32[i5 >> 2] | 0;
    i14 = i7 | 0;
    if ((i1 | 0) != 0) {
     i16 = HEAP32[i14 >> 2] | 0;
     i17 = i16 + (i1 << 5) | 0;
     i1 = i16;
     while (1) {
      i16 = HEAP32[i1 + 12 >> 2] | 0;
      do {
       if ((i16 | 0) != 0) {
        i18 = i16 + 4 | 0;
        i19 = i18 | 0;
        i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
        if ((i20 | 0) != 0) {
         HEAP32[i19 >> 2] = i20;
         break;
        }
        i20 = i18 - 4 | 0;
        if ((i20 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 7](i20);
       }
      } while (0);
      i1 = i1 + 32 | 0;
      if ((i1 | 0) == (i17 | 0)) {
       break;
      }
     }
     HEAP32[i5 >> 2] = 0;
    }
    i17 = HEAP32[i14 >> 2] | 0;
    if ((i17 | 0) != 0) {
     HEAP32[i14 >> 2] = 0;
     HEAP32[i7 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i17);
    }
    __ZN3WTF8fastFreeEPv(i7);
    i15 = HEAP32[i6 >> 2] | 0;
   }
   i17 = i8 | 0;
   HEAP32[i17 >> 2] = HEAP32[i13 >> 2];
   i1 = i8 + 4 | 0;
   HEAP32[i1 >> 2] = HEAP32[i12 >> 2];
   i16 = i8 + 8 | 0;
   HEAP32[i16 >> 2] = HEAP32[i11 >> 2];
   i20 = i8 + 12 | 0;
   i18 = HEAP32[i3 + 12 >> 2] | 0;
   HEAP32[i20 >> 2] = i18;
   if ((i18 | 0) != 0) {
    i19 = i18 + 4 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   }
   if ((HEAP8[H_BASE + 24 | 0] | 0) == 0) {
    _memset(H_BASE + 8 | 0, -1 | 0, 16) | 0;
    HEAP32[H_BASE + 24 >> 2] = 1;
    HEAP32[H_BASE + 28 >> 2] = 0;
   }
   i19 = i8 + 16 | 0;
   HEAP32[i19 >> 2] = HEAP32[H_BASE + 8 >> 2];
   HEAP32[i19 + 4 >> 2] = HEAP32[H_BASE + 12 >> 2];
   HEAP32[i19 + 8 >> 2] = HEAP32[H_BASE + 16 >> 2];
   HEAP32[i19 + 12 >> 2] = HEAP32[H_BASE + 20 >> 2];
   i18 = i15 + 8 | 0;
   i21 = HEAP32[i18 >> 2] | 0;
   if ((i21 | 0) == (HEAP32[i15 + 4 >> 2] | 0)) {
    __ZN3WTF6VectorIN7WebCore22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i15, i8);
   } else {
    i22 = HEAP32[i15 >> 2] | 0;
    HEAP32[i22 + (i21 << 5) >> 2] = HEAP32[i17 >> 2];
    HEAP32[i22 + (i21 << 5) + 4 >> 2] = HEAP32[i1 >> 2];
    HEAP32[i22 + (i21 << 5) + 8 >> 2] = HEAP32[i16 >> 2];
    i16 = HEAP32[i20 >> 2] | 0;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i22 + (i21 << 5) + 12 >> 2] = i16;
    i16 = i22 + (i21 << 5) + 16 | 0;
    HEAP32[i16 >> 2] = HEAP32[i19 >> 2];
    HEAP32[i16 + 4 >> 2] = HEAP32[i19 + 4 >> 2];
    HEAP32[i16 + 8 >> 2] = HEAP32[i19 + 8 >> 2];
    HEAP32[i16 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   }
   i18 = HEAP32[i20 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   i20 = i18 + 4 | 0;
   i18 = i20 | 0;
   i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i18 >> 2] = i19;
    break;
   }
   i19 = i20 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 7](i19);
  } else {
   i19 = HEAP32[i13 >> 2] | 0;
   i20 = HEAP32[i12 >> 2] | 0;
   i18 = HEAP32[i11 >> 2] | 0;
   i16 = HEAP32[i3 + 12 >> 2] | 0;
   i21 = (i16 | 0) == 0;
   if (!i21) {
    i22 = i16 + 4 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
   }
   if ((HEAP8[H_BASE + 24 | 0] | 0) == 0) {
    _memset(H_BASE + 8 | 0, -1 | 0, 16) | 0;
    HEAP32[H_BASE + 24 >> 2] = 1;
    HEAP32[H_BASE + 28 >> 2] = 0;
   }
   i22 = i9;
   HEAP32[i22 >> 2] = HEAP32[H_BASE + 8 >> 2];
   HEAP32[i22 + 4 >> 2] = HEAP32[H_BASE + 12 >> 2];
   HEAP32[i22 + 8 >> 2] = HEAP32[H_BASE + 16 >> 2];
   HEAP32[i22 + 12 >> 2] = HEAP32[H_BASE + 20 >> 2];
   i1 = 0;
   i17 = HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0;
   i23 = i20;
   while (1) {
    if (i1 >>> 0 >= i17 >>> 0) {
     i24 = i17;
     i25 = i23;
     break;
    }
    i20 = HEAP32[i6 >> 2] | 0;
    if ((HEAP32[i20 + 8 >> 2] | 0) >>> 0 <= i1 >>> 0) {
     i26 = 36;
     break;
    }
    i27 = HEAP32[i20 >> 2] | 0;
    i20 = HEAP32[i27 + (i1 << 5) >> 2] | 0;
    i28 = HEAP32[i27 + (i1 << 5) + 4 >> 2] | 0;
    i29 = HEAP32[i27 + (i1 << 5) + 8 >> 2] | 0;
    i30 = HEAP32[i27 + (i1 << 5) + 12 >> 2] | 0;
    i27 = (i30 | 0) == 0;
    if (!i27) {
     i31 = i30 + 4 | 0;
     HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
    }
    do {
     if (i28 >>> 0 > i23 >>> 0) {
      i32 = 1;
      i33 = i17;
      i34 = i23;
     } else {
      if ((i20 | 0) != (i19 | 0) | i29 >>> 0 < i23 >>> 0) {
       i32 = 0;
       i33 = i17;
       i34 = i23;
       break;
      }
      i31 = HEAP32[i6 >> 2] | 0;
      i35 = i31 | 0;
      i36 = HEAP32[i35 >> 2] | 0;
      i37 = i36 + (i1 << 5) | 0;
      i38 = HEAP32[i36 + (i1 << 5) + 12 >> 2] | 0;
      do {
       if ((i38 | 0) != 0) {
        i39 = i38 + 4 | 0;
        i40 = i39 | 0;
        i41 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
        if ((i41 | 0) != 0) {
         HEAP32[i40 >> 2] = i41;
         break;
        }
        i41 = i39 - 4 | 0;
        if ((i41 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i41 >> 2] | 0) + 4 >> 2] & 7](i41);
       }
      } while (0);
      i38 = i31 + 8 | 0;
      __ZN3WTF11VectorMoverILb0EN7WebCore22RenderedDocumentMarkerEE15moveOverlappingEPS2_S4_S4_(i36 + (i1 + 1 << 5) | 0, (HEAP32[i35 >> 2] | 0) + (HEAP32[i38 >> 2] << 5) | 0, i37);
      HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) - 1;
      i32 = 1;
      i33 = i17 - 1 | 0;
      i34 = i28;
     }
    } while (0);
    do {
     if (!i27) {
      i28 = i30 + 4 | 0;
      i29 = i28 | 0;
      i20 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      if ((i20 | 0) != 0) {
       HEAP32[i29 >> 2] = i20;
       break;
      }
      i20 = i28 - 4 | 0;
      if ((i20 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 7](i20);
     }
    } while (0);
    if (i32) {
     i24 = i33;
     i25 = i34;
     break;
    } else {
     i1 = i1 + 1 | 0;
     i17 = i33;
     i23 = i34;
    }
   }
   if ((i26 | 0) == 36) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i23 = i1;
   i17 = i24;
   i7 = i18;
   while (1) {
    if (i23 >>> 0 >= i17 >>> 0) {
     i42 = i7;
     break;
    }
    i14 = HEAP32[i6 >> 2] | 0;
    if ((HEAP32[i14 + 8 >> 2] | 0) >>> 0 <= i23 >>> 0) {
     i26 = 55;
     break;
    }
    i5 = HEAP32[i14 >> 2] | 0;
    i14 = HEAP32[i5 + (i23 << 5) >> 2] | 0;
    i30 = HEAP32[i5 + (i23 << 5) + 4 >> 2] | 0;
    i27 = HEAP32[i5 + (i23 << 5) + 8 >> 2] | 0;
    i20 = HEAP32[i5 + (i23 << 5) + 12 >> 2] | 0;
    i5 = (i20 | 0) == 0;
    if (!i5) {
     i28 = i20 + 4 | 0;
     HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
    }
    do {
     if (i30 >>> 0 > i7 >>> 0) {
      i43 = i23;
      i44 = 1;
      i45 = i17;
      i46 = i7;
     } else {
      if ((i14 | 0) != (i19 | 0)) {
       i43 = i23 + 1 | 0;
       i44 = 0;
       i45 = i17;
       i46 = i7;
       break;
      }
      i28 = HEAP32[i6 >> 2] | 0;
      i29 = i28 | 0;
      i38 = HEAP32[i29 >> 2] | 0;
      i41 = i38 + (i23 << 5) | 0;
      i39 = HEAP32[i38 + (i23 << 5) + 12 >> 2] | 0;
      do {
       if ((i39 | 0) != 0) {
        i40 = i39 + 4 | 0;
        i47 = i40 | 0;
        i48 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
        if ((i48 | 0) != 0) {
         HEAP32[i47 >> 2] = i48;
         break;
        }
        i48 = i40 - 4 | 0;
        if ((i48 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i48 >> 2] | 0) + 4 >> 2] & 7](i48);
       }
      } while (0);
      i39 = i28 + 8 | 0;
      __ZN3WTF11VectorMoverILb0EN7WebCore22RenderedDocumentMarkerEE15moveOverlappingEPS2_S4_S4_(i38 + (i23 + 1 << 5) | 0, (HEAP32[i29 >> 2] | 0) + (HEAP32[i39 >> 2] << 5) | 0, i41);
      HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) - 1;
      i39 = i7 >>> 0 > i27 >>> 0;
      i43 = i23;
      i44 = i39 ^ 1;
      i45 = (i39 << 31 >> 31) + i17 | 0;
      i46 = i39 ? i7 : i27;
     }
    } while (0);
    do {
     if (!i5) {
      i27 = i20 + 4 | 0;
      i14 = i27 | 0;
      i30 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
      if ((i30 | 0) != 0) {
       HEAP32[i14 >> 2] = i30;
       break;
      }
      i30 = i27 - 4 | 0;
      if ((i30 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 7](i30);
     }
    } while (0);
    if (i44) {
     i42 = i46;
     break;
    } else {
     i23 = i43;
     i17 = i45;
     i7 = i46;
    }
   }
   if ((i26 | 0) == 55) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i10 >> 2] = i19;
   HEAP32[i10 + 4 >> 2] = i25;
   HEAP32[i10 + 8 >> 2] = i42;
   i17 = i10 + 12 | 0;
   HEAP32[i17 >> 2] = i16;
   if (!i21) {
    i23 = i16 + 4 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
   }
   i23 = i10 + 16 | 0;
   HEAP32[i23 >> 2] = HEAP32[i22 >> 2];
   HEAP32[i23 + 4 >> 2] = HEAP32[i22 + 4 >> 2];
   HEAP32[i23 + 8 >> 2] = HEAP32[i22 + 8 >> 2];
   HEAP32[i23 + 12 >> 2] = HEAP32[i22 + 12 >> 2];
   __ZN3WTF6VectorIN7WebCore22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEE6insertIS2_EEvjOT_(i7, i1, i10);
   i7 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i17 = i7 + 4 | 0;
     i23 = i17 | 0;
     i18 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) != 0) {
      HEAP32[i23 >> 2] = i18;
      break;
     }
     i18 = i17 - 4 | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 7](i18);
    }
   } while (0);
   if (i21) {
    break;
   }
   i7 = i16 + 4 | 0;
   i1 = i7 | 0;
   i22 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i22 | 0) != 0) {
    HEAP32[i1 >> 2] = i22;
    break;
   }
   i22 = i7 - 4 | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 7](i22);
  }
 } while (0);
 i10 = (HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0;
 i42 = i2 + 32 | 0;
 if (i10) {
  i49 = i42 | 0;
 } else {
  i49 = HEAP32[i42 >> 2] | 0;
 }
 if ((HEAP32[i49 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if (i10) {
  i50 = i42 | 0;
 } else {
  i50 = HEAP32[i42 >> 2] | 0;
 }
 __ZNK7WebCore12RenderObject7repaintEb(HEAP32[i50 >> 2] | 0, 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore24DocumentMarkerController14markersInRangeEPNS_5RangeENS_14DocumentMarker11MarkerTypesE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = i4 | 0;
 if ((HEAP32[i2 + 20 >> 2] & HEAP32[i9 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i4 = HEAP32[i3 + 8 >> 2] | 0;
 i10 = HEAP32[i3 + 20 >> 2] | 0;
 i11 = __ZNK7WebCore5Range12pastLastNodeEv(i3) | 0;
 i12 = __ZNK7WebCore5Range9firstNodeEv(i3) | 0;
 L5 : do {
  if ((i12 | 0) == (i11 | 0)) {
   i13 = 0;
   i14 = 0;
   i15 = 0;
  } else {
   i16 = i7 | 0;
   i17 = i6 | 0;
   i18 = i6 + 8 | 0;
   i19 = i6 + 4 | 0;
   i20 = i3 + 12 | 0;
   i21 = i3 + 16 | 0;
   i22 = i3 + 24 | 0;
   i23 = i3 + 28 | 0;
   i24 = i8;
   i25 = 0;
   i26 = 0;
   i27 = 0;
   i28 = i12;
   L7 : while (1) {
    HEAP32[i16 >> 2] = 1023;
    __ZN7WebCore24DocumentMarkerController10markersForEPNS_4NodeENS_14DocumentMarker11MarkerTypesE(i6, i2, i28, i7);
    i29 = HEAP32[i17 >> 2] | 0;
    i30 = HEAP32[i18 >> 2] | 0;
    i31 = i29 + (i30 << 2) | 0;
    if ((i30 | 0) == 0) {
     i32 = i27;
     i33 = i26;
     i34 = i25;
     i35 = i29;
    } else {
     i30 = (i28 | 0) == (i4 | 0);
     i36 = (i28 | 0) == (i10 | 0);
     i37 = i25;
     i38 = i26;
     i39 = i27;
     i40 = i29;
     while (1) {
      i29 = HEAP32[i40 >> 2] | 0;
      HEAP32[i8 >> 2] = i29;
      do {
       if ((HEAP32[i9 >> 2] & HEAP32[i29 >> 2] | 0) == 0) {
        i41 = i39;
        i42 = i38;
        i43 = i37;
       } else {
        if (i30) {
         i44 = HEAP32[i29 + 8 >> 2] | 0;
         i45 = HEAP32[i20 >> 2] | 0;
         if ((i45 | 0) > -1) {
          i46 = i45;
         } else {
          i45 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i21 >> 2] | 0) | 0) + 1 | 0;
          HEAP32[i20 >> 2] = i45;
          i46 = i45;
         }
         if (i44 >>> 0 <= i46 >>> 0) {
          i41 = i39;
          i42 = i38;
          i43 = i37;
          break;
         }
        }
        if (i36) {
         i44 = HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] | 0;
         i45 = HEAP32[i22 >> 2] | 0;
         if ((i45 | 0) > -1) {
          i47 = i45;
         } else {
          i45 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i23 >> 2] | 0) | 0) + 1 | 0;
          HEAP32[i22 >> 2] = i45;
          i47 = i45;
         }
         if (i44 >>> 0 >= i47 >>> 0) {
          i41 = i39;
          i42 = i38;
          i43 = i37;
          break;
         }
        }
        if ((i37 | 0) != (i38 | 0)) {
         HEAP32[i39 + (i37 << 2) >> 2] = HEAP32[i8 >> 2];
         i41 = i39;
         i42 = i38;
         i43 = i37 + 1 | 0;
         break;
        }
        i44 = i38 + 1 | 0;
        do {
         if (i39 >>> 0 > i8 >>> 0) {
          i48 = 20;
         } else {
          if ((i39 + (i38 << 2) | 0) >>> 0 <= i8 >>> 0) {
           i48 = 20;
           break;
          }
          i45 = i24 - i39 >> 2;
          i49 = i44 + (i38 >>> 2) | 0;
          i50 = i49 >>> 0 > 16 >>> 0 ? i49 : 16;
          i49 = i50 >>> 0 > i44 >>> 0 ? i50 : i44;
          do {
           if (i38 >>> 0 < i49 >>> 0) {
            if (i49 >>> 0 > 1073741823 >>> 0) {
             i48 = 27;
             break L7;
            }
            i50 = __ZN3WTF18fastMallocGoodSizeEj(i49 << 2) | 0;
            i51 = i50 >>> 2;
            i52 = __ZN3WTF10fastMallocEj(i50) | 0;
            i50 = i52;
            i53 = i39;
            _memcpy(i52 | 0, i53 | 0, i38 << 2) | 0;
            if ((i39 | 0) == 0) {
             i54 = i50;
             i55 = i51;
             break;
            }
            i52 = (i50 | 0) == (i39 | 0);
            __ZN3WTF8fastFreeEPv(i53);
            i54 = i52 ? 0 : i50;
            i55 = i52 ? 0 : i51;
           } else {
            i54 = i39;
            i55 = i38;
           }
          } while (0);
          i56 = i54 + (i45 << 2) | 0;
          i57 = i54;
          i58 = i55;
         }
        } while (0);
        do {
         if ((i48 | 0) == 20) {
          i48 = 0;
          i49 = i44 + (i38 >>> 2) | 0;
          i51 = i49 >>> 0 > 16 >>> 0 ? i49 : 16;
          i49 = i51 >>> 0 > i44 >>> 0 ? i51 : i44;
          if (i38 >>> 0 >= i49 >>> 0) {
           i56 = i8;
           i57 = i39;
           i58 = i38;
           break;
          }
          if (i49 >>> 0 > 1073741823 >>> 0) {
           i48 = 22;
           break L7;
          }
          i51 = __ZN3WTF18fastMallocGoodSizeEj(i49 << 2) | 0;
          i49 = i51 >>> 2;
          i52 = __ZN3WTF10fastMallocEj(i51) | 0;
          i51 = i52;
          i50 = i39;
          _memcpy(i52 | 0, i50 | 0, i38 << 2) | 0;
          if ((i39 | 0) == 0) {
           i56 = i8;
           i57 = i51;
           i58 = i49;
           break;
          }
          i52 = (i51 | 0) == (i39 | 0);
          __ZN3WTF8fastFreeEPv(i50);
          i56 = i8;
          i57 = i52 ? 0 : i51;
          i58 = i52 ? 0 : i49;
         }
        } while (0);
        HEAP32[i57 + (i38 << 2) >> 2] = HEAP32[i56 >> 2];
        i41 = i57;
        i42 = i58;
        i43 = i44;
       }
      } while (0);
      i29 = i40 + 4 | 0;
      if ((i29 | 0) == (i31 | 0)) {
       break;
      } else {
       i37 = i43;
       i38 = i42;
       i39 = i41;
       i40 = i29;
      }
     }
     if ((HEAP32[i18 >> 2] | 0) != 0) {
      HEAP32[i18 >> 2] = 0;
     }
     i32 = i41;
     i33 = i42;
     i34 = i43;
     i35 = HEAP32[i17 >> 2] | 0;
    }
    if ((i35 | 0) != 0) {
     HEAP32[i17 >> 2] = 0;
     HEAP32[i19 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i35);
    }
    if ((HEAP32[i28 + 12 >> 2] & 2 | 0) == 0) {
     i48 = 41;
    } else {
     i40 = HEAP32[i28 + 36 >> 2] | 0;
     if ((i40 | 0) == 0) {
      i48 = 41;
     } else {
      i59 = i40;
     }
    }
    do {
     if ((i48 | 0) == 41) {
      i48 = 0;
      i40 = HEAP32[i28 + 28 >> 2] | 0;
      if ((i40 | 0) != 0) {
       i59 = i40;
       break;
      }
      i59 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i28) | 0;
     }
    } while (0);
    if ((i59 | 0) == (i11 | 0)) {
     i13 = i34;
     i14 = i33;
     i15 = i32;
     break L5;
    } else {
     i25 = i34;
     i26 = i33;
     i27 = i32;
     i28 = i59;
    }
   }
   if ((i48 | 0) == 27) {
    _WTFCrash();
   } else if ((i48 | 0) == 22) {
    _WTFCrash();
   }
  }
 } while (0);
 HEAP32[i1 + 8 >> 2] = i13;
 HEAP32[i1 >> 2] = i15;
 HEAP32[i1 + 4 >> 2] = i14;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_NS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSI_ISB_EEEESJ_E3addINS_17HashMapTranslatorISL_SG_EERPS3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_SC_SE_SG_SL_SJ_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = 8;
  } else {
   i8 = i6 << 1;
   i7 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i8 | 0) ? i6 : i8;
  }
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_NS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSI_ISB_EEEESJ_E6rehashEiPSC_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i8 = i7;
 i6 = i8 + ~(i8 << 15) | 0;
 i8 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i8 >>> 6 ^ i8;
 i8 = i6 + ~(i6 << 11) | 0;
 i6 = i8 >>> 16 ^ i8;
 i8 = i6 & i5;
 i10 = i9 + (i8 << 3) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = i7;
  } else {
   i14 = (i6 >>> 23) + ~i6 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i8;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i7 | 0)) {
     i20 = 8;
     break;
    }
    i21 = (i19 | 0) == -1 ? i18 : i16;
    i22 = (i15 | 0) == 0 ? i14 : i15;
    i23 = i22 + i17 & i5;
    i24 = i9 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i20 = 10;
     break;
    } else {
     i15 = i22;
     i16 = i21;
     i17 = i23;
     i18 = i24;
     i19 = i25;
    }
   }
   if ((i20 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i12 = i24;
     i13 = i7;
     break;
    }
    i19 = i21;
    HEAP32[i19 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i12 = i21;
    i13 = HEAP32[i3 >> 2] | 0;
    break;
   } else if ((i20 | 0) == 8) {
    i19 = i9 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) != 0) {
  i9 = i13 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = i12 | 0;
 i20 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i13;
 do {
  if ((i20 | 0) != 0) {
   i13 = i20 + 8 | 0;
   i9 = i13 | 0;
   i3 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 i20 = i12 + 4 | 0;
 i13 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 if ((i13 | 0) != 0) {
  i20 = i13 + 8 | 0;
  i3 = HEAP32[i20 >> 2] | 0;
  i9 = i13 | 0;
  if ((i3 | 0) != 0) {
   i21 = HEAP32[i9 >> 2] | 0;
   i7 = i21 + (i3 << 5) | 0;
   i3 = i21;
   while (1) {
    i21 = HEAP32[i3 + 12 >> 2] | 0;
    do {
     if ((i21 | 0) != 0) {
      i24 = i21 + 4 | 0;
      i5 = i24 | 0;
      i11 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
      if ((i11 | 0) != 0) {
       HEAP32[i5 >> 2] = i11;
       break;
      }
      i11 = i24 - 4 | 0;
      if ((i11 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 7](i11);
     }
    } while (0);
    i3 = i3 + 32 | 0;
    if ((i3 | 0) == (i7 | 0)) {
     break;
    }
   }
   HEAP32[i20 >> 2] = 0;
  }
  i20 = HEAP32[i9 >> 2] | 0;
  if ((i20 | 0) != 0) {
   HEAP32[i9 >> 2] = 0;
   HEAP32[i13 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i20);
  }
  __ZN3WTF8fastFreeEPv(i13);
 }
 i13 = i2 + 12 | 0;
 i20 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i20;
 i13 = i2 + 4 | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i20 << 1 | 0) < (i9 | 0)) {
  i26 = i12;
  i27 = i9;
 } else {
  if ((i9 | 0) == 0) {
   i28 = 8;
  } else {
   i7 = i9 << 1;
   i28 = (i20 * 6 & -1 | 0) < (i7 | 0) ? i9 : i7;
  }
  i7 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_NS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSI_ISB_EEEESJ_E6rehashEiPSC_(i2, i28, i12) | 0;
  i26 = i7;
  i27 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i4 >> 2] | 0) + (i27 << 3) | 0;
 i27 = i1;
 HEAP32[i27 >> 2] = i26;
 HEAP32[i27 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore24DocumentMarkerController10hasMarkersEPNS_5RangeENS_14DocumentMarker11MarkerTypesE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i1 + 20 >> 2] & i7 | 0) == 0) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 i9 = HEAP32[i2 + 20 >> 2] | 0;
 i10 = __ZNK7WebCore5Range12pastLastNodeEv(i2) | 0;
 i11 = __ZNK7WebCore5Range9firstNodeEv(i2) | 0;
 if ((i11 | 0) == (i10 | 0)) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 i12 = i6 | 0;
 i13 = i5 | 0;
 i14 = i5 + 8 | 0;
 i15 = i5 + 4 | 0;
 i16 = i2 + 12 | 0;
 i17 = i2 + 16 | 0;
 i18 = i2 + 24 | 0;
 i19 = i2 + 28 | 0;
 i2 = i11;
 L7 : while (1) {
  HEAP32[i12 >> 2] = 1023;
  __ZN7WebCore24DocumentMarkerController10markersForEPNS_4NodeENS_14DocumentMarker11MarkerTypesE(i5, i1, i2, i6);
  i20 = HEAP32[i13 >> 2] | 0;
  i11 = HEAP32[i14 >> 2] | 0;
  i21 = i20 + (i11 << 2) | 0;
  i22 = (i11 | 0) == 0;
  do {
   if (!i22) {
    i11 = (i2 | 0) == (i9 | 0);
    L11 : do {
     if ((i2 | 0) == (i3 | 0)) {
      i23 = i20;
      while (1) {
       i24 = HEAP32[i23 >> 2] | 0;
       do {
        if ((i7 & HEAP32[i24 >> 2] | 0) != 0) {
         i25 = HEAP32[i24 + 8 >> 2] | 0;
         i26 = HEAP32[i16 >> 2] | 0;
         if ((i26 | 0) > -1) {
          i27 = i26;
         } else {
          i26 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i17 >> 2] | 0) | 0) + 1 | 0;
          HEAP32[i16 >> 2] = i26;
          i27 = i26;
         }
         if (i25 >>> 0 <= i27 >>> 0) {
          break;
         }
         if (!i11) {
          i28 = 34;
          break L7;
         }
         i25 = HEAP32[i24 + 4 >> 2] | 0;
         i26 = HEAP32[i18 >> 2] | 0;
         if ((i26 | 0) > -1) {
          i29 = i26;
         } else {
          i26 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i19 >> 2] | 0) | 0) + 1 | 0;
          HEAP32[i18 >> 2] = i26;
          i29 = i26;
         }
         if (i25 >>> 0 < i29 >>> 0) {
          i28 = 32;
          break L7;
         }
        }
       } while (0);
       i23 = i23 + 4 | 0;
       if ((i23 | 0) == (i21 | 0)) {
        break;
       }
      }
     } else {
      if (i11) {
       i30 = i20;
      } else {
       i23 = i20;
       while (1) {
        if ((i7 & HEAP32[HEAP32[i23 >> 2] >> 2] | 0) != 0) {
         i28 = 34;
         break L7;
        }
        i23 = i23 + 4 | 0;
        if ((i23 | 0) == (i21 | 0)) {
         break L11;
        }
       }
      }
      while (1) {
       i23 = HEAP32[i30 >> 2] | 0;
       if ((i7 & HEAP32[i23 >> 2] | 0) != 0) {
        i24 = HEAP32[i23 + 4 >> 2] | 0;
        i23 = HEAP32[i18 >> 2] | 0;
        if ((i23 | 0) > -1) {
         i31 = i23;
        } else {
         i23 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i19 >> 2] | 0) | 0) + 1 | 0;
         HEAP32[i18 >> 2] = i23;
         i31 = i23;
        }
        if (i24 >>> 0 < i31 >>> 0) {
         i28 = 32;
         break L7;
        }
       }
       i30 = i30 + 4 | 0;
       if ((i30 | 0) == (i21 | 0)) {
        break;
       }
      }
     }
    } while (0);
    if (i22) {
     break;
    }
    HEAP32[i14 >> 2] = 0;
   }
  } while (0);
  if ((i20 | 0) != 0) {
   HEAP32[i13 >> 2] = 0;
   HEAP32[i15 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i20);
  }
  if ((HEAP32[i2 + 12 >> 2] & 2 | 0) == 0) {
   i28 = 30;
  } else {
   i22 = HEAP32[i2 + 36 >> 2] | 0;
   if ((i22 | 0) == 0) {
    i28 = 30;
   } else {
    i32 = i22;
   }
  }
  do {
   if ((i28 | 0) == 30) {
    i28 = 0;
    i22 = HEAP32[i2 + 28 >> 2] | 0;
    if ((i22 | 0) != 0) {
     i32 = i22;
     break;
    }
    i32 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i2) | 0;
   }
  } while (0);
  if ((i32 | 0) == (i10 | 0)) {
   i8 = 0;
   i28 = 37;
   break;
  } else {
   i2 = i32;
  }
 }
 if ((i28 | 0) == 37) {
  STACKTOP = i4;
  return i8 | 0;
 } else if ((i28 | 0) == 32) {
  HEAP32[i14 >> 2] = 0;
  if ((i20 | 0) == 0) {
   i8 = 1;
   STACKTOP = i4;
   return i8 | 0;
  }
  HEAP32[i13 >> 2] = 0;
  HEAP32[i15 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i20);
  i8 = 1;
  STACKTOP = i4;
  return i8 | 0;
 } else if ((i28 | 0) == 34) {
  HEAP32[i14 >> 2] = 0;
  if ((i20 | 0) == 0) {
   i8 = 1;
   STACKTOP = i4;
   return i8 | 0;
  }
  HEAP32[i13 >> 2] = 0;
  HEAP32[i15 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i20);
  i8 = 1;
  STACKTOP = i4;
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore24DocumentMarkerController21removeMarkersFromListEN3WTF24HashTableIteratorAdapterINS1_9HashTableINS1_6RefPtrINS_4NodeEEENS1_12KeyValuePairIS6_NS1_6OwnPtrINS1_6VectorINS_22RenderedDocumentMarkerELj0ENS1_15CrashOnOverflowEEEEEEENS1_24KeyValuePairKeyExtractorISE_EENS1_7PtrHashIS6_EENS1_22KeyValuePairHashTraitsINS1_10HashTraitsIS6_EENSK_ISD_EEEESL_EESE_EENS_14DocumentMarker11MarkerTypesE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) == 1023) {
   i6 = 1;
   i7 = 23;
  } else {
   i8 = HEAP32[i3 + 4 >> 2] | 0;
   i9 = i8 + 8 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i11 = i8 | 0;
   i8 = 0;
   i12 = 0;
   i13 = i10;
   while (1) {
    if (i13 >>> 0 <= i8 >>> 0) {
     i7 = 5;
     break;
    }
    i10 = HEAP32[i11 >> 2] | 0;
    i14 = HEAP32[i10 + (i8 << 5) >> 2] | 0;
    i15 = HEAP32[i10 + (i8 << 5) + 12 >> 2] | 0;
    i10 = (i15 | 0) == 0;
    if (!i10) {
     i16 = i15 + 4 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
    }
    if ((i5 & i14 | 0) == 0) {
     i17 = i12;
     i18 = i8 + 1 | 0;
    } else {
     i14 = HEAP32[i11 >> 2] | 0;
     i16 = i14 + (i8 << 5) | 0;
     i19 = HEAP32[i14 + (i8 << 5) + 12 >> 2] | 0;
     do {
      if ((i19 | 0) != 0) {
       i20 = i19 + 4 | 0;
       i21 = i20 | 0;
       i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
       if ((i22 | 0) != 0) {
        HEAP32[i21 >> 2] = i22;
        break;
       }
       i22 = i20 - 4 | 0;
       if ((i22 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 7](i22);
      }
     } while (0);
     __ZN3WTF11VectorMoverILb0EN7WebCore22RenderedDocumentMarkerEE15moveOverlappingEPS2_S4_S4_(i14 + (i8 + 1 << 5) | 0, (HEAP32[i11 >> 2] | 0) + (HEAP32[i9 >> 2] << 5) | 0, i16);
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) - 1;
     i17 = 1;
     i18 = i8;
    }
    do {
     if (!i10) {
      i19 = i15 + 4 | 0;
      i22 = i19 | 0;
      i20 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
      if ((i20 | 0) != 0) {
       HEAP32[i22 >> 2] = i20;
       break;
      }
      i20 = i19 - 4 | 0;
      if ((i20 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 7](i20);
     }
    } while (0);
    i15 = HEAP32[i9 >> 2] | 0;
    if ((i18 | 0) == (i15 | 0)) {
     i7 = 22;
     break;
    } else {
     i8 = i18;
     i12 = i17;
     i13 = i15;
    }
   }
   if ((i7 | 0) == 5) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i7 | 0) == 22) {
    i13 = (i18 | 0) == 0;
    if (i17) {
     i6 = i13;
     i7 = 23;
     break;
    } else {
     i23 = i13;
     i7 = 28;
     break;
    }
   }
  }
 } while (0);
 do {
  if ((i7 | 0) == 23) {
   i17 = HEAP32[i3 >> 2] | 0;
   i18 = i17 + 32 | 0;
   if ((HEAP32[i17 + 12 >> 2] & 2048 | 0) == 0) {
    i24 = i18 | 0;
   } else {
    i24 = HEAP32[i18 >> 2] | 0;
   }
   i18 = HEAP32[i24 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i23 = i6;
    i7 = 28;
    break;
   }
   __ZNK7WebCore12RenderObject7repaintEb(i18, 0);
   if (i6) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i7 | 0) == 28) {
   if (i23) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i23 = HEAP32[i2 >> 2] | 0;
 i2 = i1 | 0;
 i7 = i1 + 4 | 0;
 do {
  if ((i23 | 0) != ((HEAP32[i1 >> 2] | 0) + (HEAP32[i7 >> 2] << 3) | 0)) {
   __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore4NodeEEENS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEEED2Ev(i23);
   HEAP32[i23 >> 2] = -1;
   i6 = i1 + 16 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   i6 = i1 + 12 | 0;
   i24 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i24;
   i6 = HEAP32[i7 >> 2] | 0;
   if (!((i24 * 6 & -1 | 0) < (i6 | 0) & (i6 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_NS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSI_ISB_EEEESJ_E6rehashEiPSC_(i2, (i6 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 if ((HEAP32[i1 + 12 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i1 + 20 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore24DocumentMarkerController13removeMarkersENS_14DocumentMarker11MarkerTypesE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i8 = HEAP32[i2 >> 2] | 0;
 i2 = i1 + 20 | 0;
 if ((HEAP32[i2 >> 2] & i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i4 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i4 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 __ZN3WTF16copyKeysToVectorINS_6RefPtrIN7WebCore4NodeEEENS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSD_ISA_EENS6_IS4_Lj0ES8_EEEEvRKNS_7HashMapIT_T0_T1_T2_T3_EERT4_(i1 | 0, i4);
 i4 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & ~i8;
   i12 = 18;
  } else {
   i13 = i1 | 0;
   i14 = i1 + 4 | 0;
   i15 = i7 | 0;
   i16 = HEAP32[i9 >> 2] | 0;
   i17 = i1 + 8 | 0;
   i18 = 0;
   while (1) {
    if (i4 >>> 0 <= i18 >>> 0) {
     i12 = 6;
     break;
    }
    i19 = HEAP32[i13 >> 2] | 0;
    if ((i19 | 0) == 0) {
     i20 = HEAP32[i14 >> 2] | 0;
     i21 = i20 << 3 | 0;
     i22 = i21;
     i23 = i21;
     i24 = 0;
     i25 = i20;
    } else {
     i20 = HEAP32[i17 >> 2] | 0;
     i21 = HEAP32[i16 + (i18 << 2) >> 2] | 0;
     i26 = i21;
     i27 = i26 + ~(i26 << 15) | 0;
     i26 = (i27 >>> 10 ^ i27) * 9 & -1;
     i27 = i26 >>> 6 ^ i26;
     i26 = i27 + ~(i27 << 11) | 0;
     i27 = i26 >>> 16 ^ i26;
     i26 = i27 & i20;
     i28 = i19 + (i26 << 3) | 0;
     i29 = HEAP32[i28 >> 2] | 0;
     L12 : do {
      if ((i29 | 0) == (i21 | 0)) {
       i30 = i28;
      } else {
       i31 = (i27 >>> 23) + ~i27 | 0;
       i32 = i31 << 12 ^ i31;
       i31 = i32 >>> 7 ^ i32;
       i32 = i31 << 2 ^ i31;
       i31 = i32 >>> 20 ^ i32 | 1;
       i32 = 0;
       i33 = i26;
       i34 = i29;
       while (1) {
        if ((i34 | 0) == 0) {
         i30 = 0;
         break L12;
        }
        i35 = (i32 | 0) == 0 ? i31 : i32;
        i36 = i35 + i33 & i20;
        i37 = i19 + (i36 << 3) | 0;
        i38 = HEAP32[i37 >> 2] | 0;
        if ((i38 | 0) == (i21 | 0)) {
         i30 = i37;
         break;
        } else {
         i32 = i35;
         i33 = i36;
         i34 = i38;
        }
       }
      }
     } while (0);
     i21 = HEAP32[i14 >> 2] | 0;
     i20 = i19 + (i21 << 3) | 0;
     i22 = (i30 | 0) == 0 ? i20 : i30;
     i23 = i20;
     i24 = i19;
     i25 = i21;
    }
    if ((i22 | 0) != (i24 + (i25 << 3) | 0)) {
     HEAP32[i5 >> 2] = i22;
     HEAP32[i5 + 4 >> 2] = i23;
     HEAP32[i15 >> 2] = i8;
     __ZN7WebCore24DocumentMarkerController21removeMarkersFromListEN3WTF24HashTableIteratorAdapterINS1_9HashTableINS1_6RefPtrINS_4NodeEEENS1_12KeyValuePairIS6_NS1_6OwnPtrINS1_6VectorINS_22RenderedDocumentMarkerELj0ENS1_15CrashOnOverflowEEEEEEENS1_24KeyValuePairKeyExtractorISE_EENS1_7PtrHashIS6_EENS1_22KeyValuePairHashTraitsINS1_10HashTraitsIS6_EENSK_ISD_EEEESL_EESE_EENS_14DocumentMarker11MarkerTypesE(i1, i6, i7);
    }
    i18 = i18 + 1 | 0;
    if (i18 >>> 0 >= i4 >>> 0) {
     break;
    }
   }
   if ((i12 | 0) == 6) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & ~i8;
   if ((i4 | 0) == 0) {
    i12 = 18;
    break;
   }
   i18 = HEAP32[i9 >> 2] | 0;
   i15 = i18 + (i4 << 2) | 0;
   i14 = i18;
   while (1) {
    i16 = HEAP32[i14 >> 2] | 0;
    do {
     if ((i16 | 0) != 0) {
      i17 = i16 + 8 | 0;
      i13 = i17 | 0;
      i21 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
      HEAP32[i13 >> 2] = i21;
      if ((i21 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
     }
    } while (0);
    i14 = i14 + 4 | 0;
    if ((i14 | 0) == (i15 | 0)) {
     break;
    }
   }
   HEAP32[i11 >> 2] = 0;
   i39 = i18;
  }
 } while (0);
 if ((i12 | 0) == 18) {
  i39 = HEAP32[i9 >> 2] | 0;
 }
 if ((i39 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i39);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore24DocumentMarkerController42clearDescriptionOnMarkersIntersectingRangeEPNS_5RangeENS_14DocumentMarker11MarkerTypesE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i4 = STACKTOP;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i1 + 20 >> 2] & i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 i6 = HEAP32[i2 + 20 >> 2] | 0;
 i7 = __ZNK7WebCore5Range12pastLastNodeEv(i2) | 0;
 i8 = __ZNK7WebCore5Range9firstNodeEv(i2) | 0;
 if ((i8 | 0) == (i7 | 0)) {
  STACKTOP = i4;
  return;
 }
 i9 = i2 + 12 | 0;
 i10 = i2 + 16 | 0;
 i11 = i2 + 24 | 0;
 i12 = i2 + 28 | 0;
 i2 = i1 + 8 | 0;
 i13 = i1 | 0;
 i1 = i8;
 while (1) {
  do {
   if ((i1 | 0) == (i3 | 0)) {
    i8 = HEAP32[i9 >> 2] | 0;
    if ((i8 | 0) > -1) {
     i14 = i8;
     break;
    }
    i8 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i10 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i9 >> 2] = i8;
    i14 = i8;
   } else {
    i14 = 0;
   }
  } while (0);
  do {
   if ((i1 | 0) == (i6 | 0)) {
    i8 = HEAP32[i11 >> 2] | 0;
    if ((i8 | 0) > -1) {
     i15 = i8;
     break;
    }
    i8 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i12 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i11 >> 2] = i8;
    i15 = i8;
   } else {
    i15 = -1;
   }
  } while (0);
  i8 = HEAP32[i2 >> 2] | 0;
  i16 = HEAP32[i13 >> 2] | 0;
  i17 = i1;
  i18 = i17 + ~(i17 << 15) | 0;
  i17 = (i18 >>> 10 ^ i18) * 9 & -1;
  i18 = i17 >>> 6 ^ i17;
  i17 = i18 + ~(i18 << 11) | 0;
  i18 = i17 >>> 16 ^ i17;
  L17 : do {
   if ((i16 | 0) != 0) {
    i17 = i8 & i18;
    i19 = i16 + (i17 << 3) | 0;
    i20 = HEAP32[i19 >> 2] | 0;
    if ((i20 | 0) == (i1 | 0)) {
     i21 = i19;
    } else {
     i19 = (i18 >>> 23) + ~i18 | 0;
     i22 = i19 << 12 ^ i19;
     i19 = i22 >>> 7 ^ i22;
     i22 = i19 << 2 ^ i19;
     i19 = i22 >>> 20 ^ i22 | 1;
     i22 = 0;
     i23 = i17;
     i17 = i20;
     while (1) {
      if ((i17 | 0) == 0) {
       break L17;
      }
      i20 = (i22 | 0) == 0 ? i19 : i22;
      i24 = i20 + i23 & i8;
      i25 = i16 + (i24 << 3) | 0;
      i26 = HEAP32[i25 >> 2] | 0;
      if ((i26 | 0) == (i1 | 0)) {
       i21 = i25;
       break;
      } else {
       i22 = i20;
       i23 = i24;
       i17 = i26;
      }
     }
    }
    if ((i21 | 0) == 0) {
     break;
    }
    i17 = HEAP32[i21 + 4 >> 2] | 0;
    if ((i17 | 0) == 0) {
     break;
    }
    i23 = i17 | 0;
    i22 = i17 + 8 | 0;
    if ((HEAP32[i22 >> 2] | 0) == 0) {
     break;
    } else {
     i27 = 0;
    }
    while (1) {
     i17 = HEAP32[i23 >> 2] | 0;
     if ((HEAP32[i17 + (i27 << 5) + 4 >> 2] | 0) >>> 0 >= i15 >>> 0) {
      break L17;
     }
     do {
      if ((HEAP32[i17 + (i27 << 5) + 8 >> 2] | 0) >>> 0 > i14 >>> 0) {
       if ((i5 & HEAP32[i17 + (i27 << 5) >> 2] | 0) == 0) {
        i28 = 21;
        break;
       }
       i19 = i17 + (i27 << 5) + 12 | 0;
       i26 = HEAP32[i19 >> 2] | 0;
       HEAP32[i19 >> 2] = 0;
       if ((i26 | 0) == 0) {
        i29 = i27;
        break;
       }
       i19 = i26 + 4 | 0;
       i26 = i19 | 0;
       i24 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
       if ((i24 | 0) != 0) {
        HEAP32[i26 >> 2] = i24;
        i29 = i27;
        break;
       }
       i24 = i19 - 4 | 0;
       if ((i24 | 0) == 0) {
        i29 = i27;
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 7](i24);
       i29 = i27;
      } else {
       i28 = 21;
      }
     } while (0);
     if ((i28 | 0) == 21) {
      i28 = 0;
      i29 = i27 + 1 | 0;
     }
     i27 = i29 + 1 | 0;
     if (i27 >>> 0 >= (HEAP32[i22 >> 2] | 0) >>> 0) {
      break;
     }
    }
   }
  } while (0);
  if ((HEAP32[i1 + 12 >> 2] & 2 | 0) == 0) {
   i28 = 31;
  } else {
   i16 = HEAP32[i1 + 36 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i28 = 31;
   } else {
    i30 = i16;
   }
  }
  do {
   if ((i28 | 0) == 31) {
    i28 = 0;
    i16 = HEAP32[i1 + 28 >> 2] | 0;
    if ((i16 | 0) != 0) {
     i30 = i16;
     break;
    }
    i30 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i1) | 0;
   }
  } while (0);
  if ((i30 | 0) == (i7 | 0)) {
   break;
  } else {
   i1 = i30;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZN7WebCore24DocumentMarkerController23renderedRectsForMarkersENS_14DocumentMarker10MarkerTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 if ((HEAP32[i2 + 20 >> 2] & i3 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i2 >> 2] | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 i9 = i7 + (i8 << 3) | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i8 | 0) == 0) {
   i10 = i7;
  } else {
   i2 = i7;
   while (1) {
    i11 = HEAP32[i2 >> 2] | 0;
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     i10 = i2;
     break L7;
    }
    i2 = i2 + 8 | 0;
    if ((i2 | 0) == (i9 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i10 | 0) == (i9 | 0)) {
  return;
 } else {
  i12 = i10;
  i13 = 0;
  i14 = 0;
 }
 L15 : while (1) {
  i10 = HEAP32[i12 + 4 >> 2] | 0;
  i7 = i10 + 8 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  L17 : do {
   if ((i8 | 0) == 0) {
    i15 = i13;
    i16 = i14;
   } else {
    i2 = i10 | 0;
    i11 = 0;
    i17 = i13;
    i18 = i14;
    i19 = i8;
    while (1) {
     if (i19 >>> 0 <= i11 >>> 0) {
      i20 = 10;
      break L15;
     }
     i21 = HEAP32[i2 >> 2] | 0;
     L22 : do {
      if ((HEAP32[i21 + (i11 << 5) >> 2] | 0) == (i3 | 0)) {
       if ((HEAP8[H_BASE + 24 | 0] | 0) == 0) {
        _memset(H_BASE + 8 | 0, -1 | 0, 16) | 0;
        HEAP32[H_BASE + 24 >> 2] = 1;
        HEAP32[H_BASE + 28 >> 2] = 0;
        i22 = -1;
        i23 = -1;
       } else {
        i24 = H_BASE + 8;
        i22 = HEAP32[i24 + 4 >> 2] | 0;
        i23 = HEAP32[i24 >> 2] | 0;
       }
       i24 = i21 + (i11 << 5) + 16 | 0;
       i25 = i24;
       do {
        if (!((i23 | 0) != (HEAP32[i25 >> 2] | 0) | (i22 | 0) != (HEAP32[i25 + 4 >> 2] | 0))) {
         i26 = H_BASE + 16 | 0;
         i27 = i21 + (i11 << 5) + 24 | 0;
         if ((HEAP32[i26 >> 2] | 0) != (HEAP32[i27 >> 2] | 0)) {
          break;
         }
         if ((HEAP32[i26 + 4 >> 2] | 0) == (HEAP32[i27 + 4 >> 2] | 0)) {
          i28 = i17;
          i29 = i18;
          break L22;
         }
        }
       } while (0);
       if ((i17 | 0) == (HEAP32[i5 >> 2] | 0)) {
        __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i17 + 1 | 0);
        i25 = HEAP32[i4 >> 2] | 0;
        i27 = HEAP32[i6 >> 2] | 0;
        __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i25 + (i27 << 4) | 0, i24);
        i26 = i27 + 1 | 0;
        HEAP32[i6 >> 2] = i26;
        i28 = i26;
        i29 = i25;
        break;
       } else {
        __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i18 + (i17 << 4) | 0, i24);
        i25 = i17 + 1 | 0;
        HEAP32[i6 >> 2] = i25;
        i28 = i25;
        i29 = i18;
        break;
       }
      } else {
       i28 = i17;
       i29 = i18;
      }
     } while (0);
     i21 = i11 + 1 | 0;
     if (i21 >>> 0 >= i8 >>> 0) {
      i15 = i28;
      i16 = i29;
      break L17;
     }
     i11 = i21;
     i17 = i28;
     i18 = i29;
     i19 = HEAP32[i7 >> 2] | 0;
    }
   }
  } while (0);
  i7 = i12 + 8 | 0;
  if ((i7 | 0) == (i9 | 0)) {
   i20 = 32;
   break;
  } else {
   i30 = i7;
  }
  while (1) {
   i7 = HEAP32[i30 >> 2] | 0;
   if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
    break;
   }
   i7 = i30 + 8 | 0;
   if ((i7 | 0) == (i9 | 0)) {
    i20 = 34;
    break L15;
   } else {
    i30 = i7;
   }
  }
  if ((i30 | 0) == (i9 | 0)) {
   i20 = 33;
   break;
  } else {
   i12 = i30;
   i13 = i15;
   i14 = i16;
  }
 }
 if ((i20 | 0) == 32) {
  return;
 } else if ((i20 | 0) == 34) {
  return;
 } else if ((i20 | 0) == 10) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i20 | 0) == 33) {
  return;
 }
}
function __ZN7WebCore24DocumentMarkerController11copyMarkersEPNS_4NodeEjiS2_i(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 if ((i4 | 0) < 1) {
  STACKTOP = i7;
  return;
 }
 if ((HEAP32[i1 + 20 >> 2] & 1023 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i9 = HEAP32[i1 + 8 >> 2] | 0;
 i10 = HEAP32[i1 >> 2] | 0;
 i11 = i2;
 i12 = i11 + ~(i11 << 15) | 0;
 i11 = (i12 >>> 10 ^ i12) * 9 & -1;
 i12 = i11 >>> 6 ^ i11;
 i11 = i12 + ~(i12 << 11) | 0;
 i12 = i11 >>> 16 ^ i11;
 if ((i10 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i11 = i9 & i12;
 i13 = i10 + (i11 << 3) | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 L10 : do {
  if ((i14 | 0) == (i2 | 0)) {
   i15 = i13;
  } else {
   i16 = (i12 >>> 23) + ~i12 | 0;
   i17 = i16 << 12 ^ i16;
   i16 = i17 >>> 7 ^ i17;
   i17 = i16 << 2 ^ i16;
   i16 = i17 >>> 20 ^ i17 | 1;
   i17 = 0;
   i18 = i11;
   i19 = i14;
   while (1) {
    if ((i19 | 0) == 0) {
     break;
    }
    i20 = (i17 | 0) == 0 ? i16 : i17;
    i21 = i20 + i18 & i9;
    i22 = i10 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    if ((i23 | 0) == (i2 | 0)) {
     i15 = i22;
     break L10;
    } else {
     i17 = i20;
     i18 = i21;
     i19 = i23;
    }
   }
   STACKTOP = i7;
   return;
  }
 } while (0);
 if ((i15 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i2 = HEAP32[i15 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i15 = i3 - 1 + i4 | 0;
 i4 = i2 + 8 | 0;
 i10 = i2 | 0;
 i2 = i8 | 0;
 i9 = i8 + 4 | 0;
 i14 = i8 + 8 | 0;
 i11 = i8 + 12 | 0;
 i12 = 0;
 i13 = 0;
 while (1) {
  i19 = HEAP32[i4 >> 2] | 0;
  if ((i12 | 0) == (i19 | 0)) {
   i24 = i13;
   break;
  }
  if (i19 >>> 0 <= i12 >>> 0) {
   i25 = 13;
   break;
  }
  i19 = HEAP32[i10 >> 2] | 0;
  HEAP32[i2 >> 2] = HEAP32[i19 + (i12 << 5) >> 2];
  i18 = HEAP32[i19 + (i12 << 5) + 4 >> 2] | 0;
  HEAP32[i9 >> 2] = i18;
  HEAP32[i14 >> 2] = HEAP32[i19 + (i12 << 5) + 8 >> 2];
  i17 = HEAP32[i19 + (i12 << 5) + 12 >> 2] | 0;
  HEAP32[i11 >> 2] = i17;
  if ((i17 | 0) == 0) {
   i26 = i18;
  } else {
   i18 = i17 + 4 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   i26 = HEAP32[i9 >> 2] | 0;
  }
  do {
   if (i26 >>> 0 > i15 >>> 0) {
    i27 = 1;
    i28 = i13;
   } else {
    i18 = HEAP32[i14 >> 2] | 0;
    if (i18 >>> 0 < i3 >>> 0) {
     i27 = 0;
     i28 = i13;
     break;
    }
    if (i26 >>> 0 < i3 >>> 0) {
     HEAP32[i9 >> 2] = i3;
    }
    if (i18 >>> 0 > i15 >>> 0) {
     HEAP32[i14 >> 2] = i15;
    }
    __ZN7WebCore14DocumentMarker12shiftOffsetsEi(i8, i6);
    __ZN7WebCore24DocumentMarkerController9addMarkerEPNS_4NodeERKNS_14DocumentMarkerE(i1, i5, i8);
    i27 = 0;
    i28 = 1;
   }
  } while (0);
  i18 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i18 | 0) != 0) {
    i17 = i18 + 4 | 0;
    i19 = i17 | 0;
    i16 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
    if ((i16 | 0) != 0) {
     HEAP32[i19 >> 2] = i16;
     break;
    }
    i16 = i17 - 4 | 0;
    if ((i16 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 7](i16);
   }
  } while (0);
  if (i27) {
   i24 = i28;
   break;
  } else {
   i12 = i12 + 1 | 0;
   i13 = i28;
  }
 }
 if ((i25 | 0) == 13) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 if (!i24) {
  STACKTOP = i7;
  return;
 }
 i24 = (HEAP32[i5 + 12 >> 2] & 2048 | 0) == 0;
 i25 = i5 + 32 | 0;
 if (i24) {
  i29 = i25 | 0;
 } else {
  i29 = HEAP32[i25 >> 2] | 0;
 }
 if ((HEAP32[i29 >> 2] | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 if (i24) {
  i30 = i25 | 0;
 } else {
  i30 = HEAP32[i25 >> 2] | 0;
 }
 __ZNK7WebCore12RenderObject7repaintEb(HEAP32[i30 >> 2] | 0, 0);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore24DocumentMarkerController14repaintMarkersENS_14DocumentMarker11MarkerTypesE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 i4 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i1 + 20 >> 2] & i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i1 >> 2] | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 i6 = i2 + (i5 << 3) | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 L7 : do {
  if ((i5 | 0) == 0) {
   i7 = i2;
  } else {
   i1 = i2;
   while (1) {
    i8 = HEAP32[i1 >> 2] | 0;
    if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
     i7 = i1;
     break L7;
    }
    i1 = i1 + 8 | 0;
    if ((i1 | 0) == (i6 | 0)) {
     break;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i7 | 0) == (i6 | 0)) {
  STACKTOP = i3;
  return;
 } else {
  i9 = i7;
 }
 L15 : while (1) {
  i7 = HEAP32[i9 >> 2] | 0;
  i2 = HEAP32[i9 + 4 >> 2] | 0;
  i5 = i2 + 8 | 0;
  i1 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    i8 = i2 | 0;
    i10 = 0;
    i11 = 0;
    i12 = i1;
    L19 : while (1) {
     if (i12 >>> 0 <= i10 >>> 0) {
      i13 = 10;
      break L15;
     }
     i14 = HEAP32[i8 >> 2] | 0;
     i15 = HEAP32[i14 + (i10 << 5) >> 2] | 0;
     i16 = HEAP32[i14 + (i10 << 5) + 12 >> 2] | 0;
     do {
      if ((i16 | 0) == 0) {
       i14 = (i4 & i15 | 0) != 0;
       i17 = i14 | i11;
       if (i14) {
        i18 = i17;
        break L19;
       } else {
        i19 = i17;
       }
      } else {
       i17 = i16 + 4 | 0;
       i14 = HEAP32[i17 >> 2] | 0;
       HEAP32[i17 >> 2] = i14 + 1;
       i17 = (i4 & i15 | 0) != 0;
       i20 = i17 | i11;
       i21 = i16 + 4 | 0;
       if ((i14 | 0) != 0) {
        HEAP32[i21 >> 2] = i14;
        if (i17) {
         i18 = i20;
         break L19;
        } else {
         i19 = i20;
         break;
        }
       }
       i14 = i21 - 4 | 0;
       if ((i14 | 0) == 0) {
        if (i17) {
         i18 = i20;
         break L19;
        } else {
         i19 = i20;
         break;
        }
       } else {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 7](i14);
        if (i17) {
         i18 = i20;
         break L19;
        } else {
         i19 = i20;
         break;
        }
       }
      }
     } while (0);
     i16 = i10 + 1 | 0;
     i15 = HEAP32[i5 >> 2] | 0;
     if ((i16 | 0) == (i15 | 0)) {
      i18 = i19;
      break;
     } else {
      i10 = i16;
      i11 = i19;
      i12 = i15;
     }
    }
    if (!i18) {
     break;
    }
    i12 = i7 + 32 | 0;
    if ((HEAP32[i7 + 12 >> 2] & 2048 | 0) == 0) {
     i22 = i12 | 0;
    } else {
     i22 = HEAP32[i12 >> 2] | 0;
    }
    i12 = HEAP32[i22 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    __ZNK7WebCore12RenderObject7repaintEb(i12, 0);
   }
  } while (0);
  i7 = i9 + 8 | 0;
  if ((i7 | 0) == (i6 | 0)) {
   i13 = 32;
   break;
  } else {
   i23 = i7;
  }
  while (1) {
   i7 = HEAP32[i23 >> 2] | 0;
   if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
    break;
   }
   i7 = i23 + 8 | 0;
   if ((i7 | 0) == (i6 | 0)) {
    i13 = 34;
    break L15;
   } else {
    i23 = i7;
   }
  }
  if ((i23 | 0) == (i6 | 0)) {
   i13 = 33;
   break;
  } else {
   i9 = i23;
  }
 }
 if ((i13 | 0) == 32) {
  STACKTOP = i3;
  return;
 } else if ((i13 | 0) == 33) {
  STACKTOP = i3;
  return;
 } else if ((i13 | 0) == 10) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i13 | 0) == 34) {
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore24DocumentMarkerController18addTextMatchMarkerEPKNS_5RangeEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 200 | 0;
 i5 = i4 | 0;
 i6 = i4 + 136 | 0;
 i7 = i4 + 144 | 0;
 i8 = i4 + 160 | 0;
 i9 = i4 + 176 | 0;
 i10 = i4 + 184 | 0;
 i11 = i10 | 0;
 i12 = i10;
 __ZN7WebCore12TextIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE(i5, i2, 0);
 i13 = i5 + 52 | 0;
 if ((HEAP32[i13 >> 2] | 0) == 0) {
  __ZN7WebCore12TextIteratorD1Ev(i5);
  STACKTOP = i4;
  return;
 }
 i14 = i5 + 133 | 0;
 i15 = i6 | 0;
 i16 = i7 + 12 | 0;
 i17 = i9 | 0;
 i18 = i8 + 8 | 0;
 i19 = i8 | 0;
 i20 = i10 + 8 | 0;
 i10 = i8 + 4 | 0;
 L4 : while (1) {
  if ((HEAP8[i14] & 1) != 0) {
   i21 = 27;
   break;
  }
  __ZNK7WebCore12TextIterator5rangeEv(i6, i5);
  i22 = HEAP32[i15 >> 2] | 0;
  HEAP32[i15 >> 2] = 0;
  i23 = i22 + 12 | 0;
  i24 = HEAP32[i23 >> 2] | 0;
  if ((i24 | 0) > -1) {
   i25 = i24;
  } else {
   i24 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i22 + 16 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i23 >> 2] = i24;
   i25 = i24;
  }
  i24 = i22 + 24 | 0;
  i23 = HEAP32[i24 >> 2] | 0;
  if ((i23 | 0) > -1) {
   i26 = i23;
  } else {
   i23 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i22 + 28 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i24 >> 2] = i23;
   i26 = i23;
  }
  i23 = i22 + 8 | 0;
  i24 = HEAP32[i23 >> 2] | 0;
  __ZN7WebCore14DocumentMarkerC1Ejjb(i7, i25, i26, i3);
  __ZN7WebCore24DocumentMarkerController9addMarkerEPNS_4NodeERKNS_14DocumentMarkerE(i1, i24, i7);
  i24 = HEAP32[i16 >> 2] | 0;
  do {
   if ((i24 | 0) != 0) {
    i27 = i24 + 4 | 0;
    i28 = i27 | 0;
    i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
    if ((i29 | 0) != 0) {
     HEAP32[i28 >> 2] = i29;
     break;
    }
    i29 = i27 - 4 | 0;
    if ((i29 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 7](i29);
   }
  } while (0);
  do {
   if (i26 >>> 0 > i25 >>> 0) {
    i24 = HEAP32[i23 >> 2] | 0;
    HEAP32[i17 >> 2] = 1023;
    __ZN7WebCore24DocumentMarkerController10markersForEPNS_4NodeENS_14DocumentMarker11MarkerTypesE(i8, i1, i24, i9);
    i24 = HEAP32[i18 >> 2] | 0;
    i29 = _llvm_uadd_with_overflow_i32(i24 | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i21 = 16;
     break L4;
    }
    i27 = HEAP32[i19 >> 2] | 0;
    i28 = HEAP32[i27 + (i29 << 2) >> 2] | 0;
    __ZNK7WebCore5Range11boundingBoxEv(i12, i2);
    i29 = HEAP32[i11 + 4 >> 2] | 0;
    i30 = HEAP32[i20 >> 2] | 0;
    i31 = HEAP32[i20 + 4 >> 2] | 0;
    HEAP32[i28 + 16 >> 2] = HEAP32[i11 >> 2];
    HEAP32[i28 + 20 >> 2] = i29;
    HEAP32[i28 + 24 >> 2] = i30;
    HEAP32[i28 + 28 >> 2] = i31;
    if ((i24 | 0) != 0) {
     HEAP32[i18 >> 2] = 0;
    }
    if ((i27 | 0) == 0) {
     break;
    }
    HEAP32[i19 >> 2] = 0;
    HEAP32[i10 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i27);
   }
  } while (0);
  do {
   if ((i22 | 0) != 0) {
    i23 = i22 | 0;
    i27 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
    if ((i27 | 0) == 0) {
     __ZN7WebCore5RangeD1Ev(i22);
     __ZN3WTF8fastFreeEPv(i22);
     break;
    } else {
     HEAP32[i23 >> 2] = i27;
     break;
    }
   }
  } while (0);
  __ZN7WebCore12TextIterator7advanceEv(i5);
  if ((HEAP32[i13 >> 2] | 0) == 0) {
   i21 = 28;
   break;
  }
 }
 if ((i21 | 0) == 16) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i21 | 0) == 27) {
  __ZN7WebCore12TextIteratorD1Ev(i5);
  STACKTOP = i4;
  return;
 } else if ((i21 | 0) == 28) {
  __ZN7WebCore12TextIteratorD1Ev(i5);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore24DocumentMarkerController21markerContainingPointERKNS_11LayoutPointENS_14DocumentMarker10MarkerTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 if ((HEAP32[i1 + 20 >> 2] & i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 i7 = i5 + (i6 << 3) | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 L7 : do {
  if ((i6 | 0) == 0) {
   i8 = i5;
  } else {
   i1 = i5;
   while (1) {
    i9 = HEAP32[i1 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i8 = i1;
     break L7;
    }
    i9 = i1 + 8 | 0;
    if ((i9 | 0) == (i7 | 0)) {
     i4 = 0;
     break;
    } else {
     i1 = i9;
    }
   }
   return i4 | 0;
  }
 } while (0);
 if ((i8 | 0) == (i7 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i2 | 0;
 i6 = i2 + 4 | 0;
 i2 = i8;
 L16 : while (1) {
  i8 = HEAP32[i2 + 4 >> 2] | 0;
  i1 = i8 + 8 | 0;
  i9 = HEAP32[i1 >> 2] | 0;
  L18 : do {
   if ((i9 | 0) != 0) {
    i10 = i8 | 0;
    i11 = 0;
    i12 = i9;
    while (1) {
     if (i12 >>> 0 <= i11 >>> 0) {
      i13 = 11;
      break L16;
     }
     i14 = HEAP32[i10 >> 2] | 0;
     i15 = i14 + (i11 << 5) | 0;
     i16 = i15 | 0;
     L23 : do {
      if ((HEAP32[i15 >> 2] | 0) == (i3 | 0)) {
       if ((HEAP8[H_BASE + 24 | 0] | 0) == 0) {
        _memset(H_BASE + 8 | 0, -1 | 0, 16) | 0;
        HEAP32[H_BASE + 24 >> 2] = 1;
        HEAP32[H_BASE + 28 >> 2] = 0;
        i17 = -1;
        i18 = -1;
       } else {
        i19 = H_BASE + 8;
        i17 = HEAP32[i19 + 4 >> 2] | 0;
        i18 = HEAP32[i19 >> 2] | 0;
       }
       i19 = i14 + (i11 << 5) + 16 | 0;
       i20 = HEAP32[i19 >> 2] | 0;
       do {
        if (!((i18 | 0) != (i20 | 0) | (i17 | 0) != (HEAP32[i19 + 4 >> 2] | 0))) {
         i21 = H_BASE + 16 | 0;
         i22 = i14 + (i11 << 5) + 24 | 0;
         if ((HEAP32[i21 >> 2] | 0) != (HEAP32[i22 >> 2] | 0)) {
          break;
         }
         if ((HEAP32[i21 + 4 >> 2] | 0) == (HEAP32[i22 + 4 >> 2] | 0)) {
          break L23;
         }
        }
       } while (0);
       i19 = HEAP32[i5 >> 2] | 0;
       i22 = HEAP32[i6 >> 2] | 0;
       if ((i19 | 0) < (i20 | 0)) {
        break;
       }
       if ((i19 | 0) >= ((HEAP32[i14 + (i11 << 5) + 24 >> 2] | 0) + i20 | 0)) {
        break;
       }
       i19 = HEAP32[i14 + (i11 << 5) + 20 >> 2] | 0;
       if ((i22 | 0) < (i19 | 0)) {
        break;
       }
       if ((i22 | 0) < ((HEAP32[i14 + (i11 << 5) + 28 >> 2] | 0) + i19 | 0)) {
        i4 = i16;
        i13 = 32;
        break L16;
       }
      }
     } while (0);
     i16 = i11 + 1 | 0;
     if (i16 >>> 0 >= i9 >>> 0) {
      break L18;
     }
     i11 = i16;
     i12 = HEAP32[i1 >> 2] | 0;
    }
   }
  } while (0);
  i1 = i2 + 8 | 0;
  if ((i1 | 0) == (i7 | 0)) {
   i4 = 0;
   i13 = 33;
   break;
  } else {
   i23 = i1;
  }
  while (1) {
   i1 = HEAP32[i23 >> 2] | 0;
   if (!((i1 | 0) == (-1 | 0) | (i1 | 0) == 0)) {
    break;
   }
   i1 = i23 + 8 | 0;
   if ((i1 | 0) == (i7 | 0)) {
    i4 = 0;
    i13 = 35;
    break L16;
   } else {
    i23 = i1;
   }
  }
  if ((i23 | 0) == (i7 | 0)) {
   i4 = 0;
   i13 = 34;
   break;
  } else {
   i2 = i23;
  }
 }
 if ((i13 | 0) == 11) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i13 | 0) == 34) {
  return i4 | 0;
 } else if ((i13 | 0) == 35) {
  return i4 | 0;
 } else if ((i13 | 0) == 32) {
  return i4 | 0;
 } else if ((i13 | 0) == 33) {
  return i4 | 0;
 }
 return 0;
}
function __ZN3WTF16copyKeysToVectorINS_6RefPtrIN7WebCore4NodeEEENS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSD_ISA_EENS6_IS4_Lj0ES8_EEEEvRKNS_7HashMapIT_T0_T1_T2_T3_EERT4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i6 >>> 0 < i4 >>> 0) {
   if ((HEAP32[i2 + 4 >> 2] | 0) >>> 0 < i4 >>> 0) {
    __ZN3WTF6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i4);
   }
   i7 = HEAP32[i2 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i5 >> 2] | 0;
   _memset(i7 + (i8 << 2) | 0, 0, i4 - i8 << 2 | 0) | 0;
  } else {
   i8 = HEAP32[i2 >> 2] | 0;
   i7 = i8 + (i6 << 2) | 0;
   if ((i6 | 0) == (i4 | 0)) {
    break;
   }
   i9 = i8 + (i4 << 2) | 0;
   while (1) {
    i8 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i8 | 0) != 0) {
      i10 = i8 + 8 | 0;
      i11 = i10 | 0;
      i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
      HEAP32[i11 >> 2] = i12;
      if ((i12 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
     }
    } while (0);
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i7 | 0)) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = i4;
 i6 = HEAP32[i1 >> 2] | 0;
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i6 + (i7 << 3) | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 L20 : do {
  if ((i7 | 0) == 0) {
   i13 = i6;
  } else {
   i3 = i6;
   while (1) {
    i9 = HEAP32[i3 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i13 = i3;
     break L20;
    }
    i3 = i3 + 8 | 0;
    if ((i3 | 0) == (i1 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i13 | 0) == (i1 | 0)) {
  return;
 }
 i6 = i2 | 0;
 i2 = i13;
 i13 = 0;
 i7 = i4;
 L29 : while (1) {
  if (i7 >>> 0 <= i13 >>> 0) {
   i14 = 20;
   break;
  }
  i4 = HEAP32[i6 >> 2] | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) != 0) {
   i9 = i3 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  }
  i9 = i4 + (i13 << 2) | 0;
  i4 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i3;
  do {
   if ((i4 | 0) != 0) {
    i3 = i4 + 8 | 0;
    i9 = i3 | 0;
    i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    HEAP32[i9 >> 2] = i8;
    if ((i8 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
   }
  } while (0);
  i4 = i2 + 8 | 0;
  if ((i4 | 0) == (i1 | 0)) {
   i14 = 34;
   break;
  } else {
   i15 = i4;
  }
  while (1) {
   i4 = HEAP32[i15 >> 2] | 0;
   if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
    break;
   }
   i4 = i15 + 8 | 0;
   if ((i4 | 0) == (i1 | 0)) {
    i14 = 35;
    break L29;
   } else {
    i15 = i4;
   }
  }
  if ((i15 | 0) == (i1 | 0)) {
   i14 = 36;
   break;
  }
  i2 = i15;
  i13 = i13 + 1 | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 }
 if ((i14 | 0) == 20) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i14 | 0) == 34) {
  return;
 } else if ((i14 | 0) == 35) {
  return;
 } else if ((i14 | 0) == 36) {
  return;
 }
}
function __ZN7WebCore24DocumentMarkerController12shiftMarkersEPNS_4NodeEji(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 1023 | 0) == 0) {
  return;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 i1 = i2;
 i7 = i1 + ~(i1 << 15) | 0;
 i1 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i1 >>> 6 ^ i1;
 i1 = i7 + ~(i7 << 11) | 0;
 i7 = i1 >>> 16 ^ i1;
 if ((i6 | 0) == 0) {
  return;
 }
 i1 = i5 & i7;
 i8 = i6 + (i1 << 3) | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L7 : do {
  if ((i9 | 0) == (i2 | 0)) {
   i10 = i8;
  } else {
   i11 = (i7 >>> 23) + ~i7 | 0;
   i12 = i11 << 12 ^ i11;
   i11 = i12 >>> 7 ^ i12;
   i12 = i11 << 2 ^ i11;
   i11 = i12 >>> 20 ^ i12 | 1;
   i12 = 0;
   i13 = i1;
   i14 = i9;
   while (1) {
    if ((i14 | 0) == 0) {
     break;
    }
    i15 = (i12 | 0) == 0 ? i11 : i12;
    i16 = i15 + i13 & i5;
    i17 = i6 + (i16 << 3) | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    if ((i18 | 0) == (i2 | 0)) {
     i10 = i17;
     break L7;
    } else {
     i12 = i15;
     i13 = i16;
     i14 = i18;
    }
   }
   return;
  }
 } while (0);
 if ((i10 | 0) == 0) {
  return;
 }
 i6 = HEAP32[i10 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i10 = i6 + 8 | 0;
 i5 = HEAP32[i10 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i9 = i6 | 0;
 i6 = 0;
 i1 = 0;
 i7 = i5;
 while (1) {
  if (i7 >>> 0 <= i6 >>> 0) {
   i19 = 12;
   break;
  }
  i5 = HEAP32[i9 >> 2] | 0;
  if ((HEAP32[i5 + (i6 << 5) + 4 >> 2] | 0) >>> 0 < i3 >>> 0) {
   i20 = i1;
   i21 = i7;
  } else {
   __ZN7WebCore14DocumentMarker12shiftOffsetsEi(i5 + (i6 << 5) | 0, i4);
   if ((HEAP8[H_BASE + 24 | 0] | 0) == 0) {
    _memset(H_BASE + 8 | 0, -1 | 0, 16) | 0;
    HEAP32[H_BASE + 24 >> 2] = 1;
    HEAP32[H_BASE + 28 >> 2] = 0;
   }
   i8 = i5 + (i6 << 5) + 16 | 0;
   HEAP32[i8 >> 2] = HEAP32[H_BASE + 8 >> 2];
   HEAP32[i8 + 4 >> 2] = HEAP32[H_BASE + 12 >> 2];
   HEAP32[i8 + 8 >> 2] = HEAP32[H_BASE + 16 >> 2];
   HEAP32[i8 + 12 >> 2] = HEAP32[H_BASE + 20 >> 2];
   i20 = 1;
   i21 = HEAP32[i10 >> 2] | 0;
  }
  i8 = i6 + 1 | 0;
  if ((i8 | 0) == (i21 | 0)) {
   break;
  } else {
   i6 = i8;
   i1 = i20;
   i7 = i21;
  }
 }
 if ((i19 | 0) == 12) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 if (!i20) {
  return;
 }
 i20 = (HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0;
 i19 = i2 + 32 | 0;
 if (i20) {
  i22 = i19 | 0;
 } else {
  i22 = HEAP32[i19 >> 2] | 0;
 }
 if ((HEAP32[i22 >> 2] | 0) == 0) {
  return;
 }
 if (i20) {
  i23 = i19 | 0;
 } else {
  i23 = HEAP32[i19 >> 2] | 0;
 }
 __ZNK7WebCore12RenderObject7repaintEb(HEAP32[i23 >> 2] | 0, 0);
 return;
}
function __ZN7WebCore24DocumentMarkerController10markersForEPNS_4NodeENS_14DocumentMarker11MarkerTypesE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = STACKTOP;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i1 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 i2 = i3;
 i11 = i2 + ~(i2 << 15) | 0;
 i2 = (i11 >>> 10 ^ i11) * 9 & -1;
 i11 = i2 >>> 6 ^ i2;
 i2 = i11 + ~(i11 << 11) | 0;
 i11 = i2 >>> 16 ^ i2;
 if ((i10 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i2 = i9 & i11;
 i12 = i10 + (i2 << 3) | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 L4 : do {
  if ((i13 | 0) == (i3 | 0)) {
   i14 = i12;
  } else {
   i15 = (i11 >>> 23) + ~i11 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = i2;
   i18 = i13;
   while (1) {
    if ((i18 | 0) == 0) {
     break;
    }
    i19 = (i16 | 0) == 0 ? i15 : i16;
    i20 = i19 + i17 & i9;
    i21 = i10 + (i20 << 3) | 0;
    i22 = HEAP32[i21 >> 2] | 0;
    if ((i22 | 0) == (i3 | 0)) {
     i14 = i21;
     break L4;
    } else {
     i16 = i19;
     i17 = i20;
     i18 = i22;
    }
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 if ((i14 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i3 = HEAP32[i14 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i14 = i3 + 8 | 0;
 if ((HEAP32[i14 >> 2] | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i10 = i3 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i4 = 0;
 i9 = 0;
 i13 = 0;
 while (1) {
  i2 = (HEAP32[i10 >> 2] | 0) + (i4 << 5) | 0;
  do {
   if ((i3 & HEAP32[i2 >> 2] | 0) == 0) {
    i23 = i9;
    i24 = i13;
   } else {
    if ((i9 | 0) == (HEAP32[i7 >> 2] | 0)) {
     __ZN3WTF6VectorIPN7WebCore14DocumentMarkerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i9 + 1 | 0);
     i11 = HEAP32[i6 >> 2] | 0;
     i12 = HEAP32[i8 >> 2] | 0;
     HEAP32[i11 + (i12 << 2) >> 2] = i2;
     i18 = i12 + 1 | 0;
     HEAP32[i8 >> 2] = i18;
     i23 = i18;
     i24 = i11;
     break;
    } else {
     HEAP32[i13 + (i9 << 2) >> 2] = i2;
     i11 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
     HEAP32[i8 >> 2] = i11;
     i23 = i11;
     i24 = i13;
     break;
    }
   }
  } while (0);
  i2 = i4 + 1 | 0;
  if (i2 >>> 0 < (HEAP32[i14 >> 2] | 0) >>> 0) {
   i4 = i2;
   i9 = i23;
   i13 = i24;
  } else {
   break;
  }
 }
 STACKTOP = i5;
 return;
}
function __ZN7WebCore24DocumentMarkerController16setMarkersActiveEPNS_4NodeEjjb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 i1 = i2;
 i8 = i1 + ~(i1 << 15) | 0;
 i1 = (i8 >>> 10 ^ i8) * 9 & -1;
 i8 = i1 >>> 6 ^ i1;
 i1 = i8 + ~(i8 << 11) | 0;
 i8 = i1 >>> 16 ^ i1;
 if ((i7 | 0) == 0) {
  return;
 }
 i1 = i6 & i8;
 i9 = i7 + (i1 << 3) | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 L4 : do {
  if ((i10 | 0) == (i2 | 0)) {
   i11 = i9;
  } else {
   i12 = (i8 >>> 23) + ~i8 | 0;
   i13 = i12 << 12 ^ i12;
   i12 = i13 >>> 7 ^ i13;
   i13 = i12 << 2 ^ i12;
   i12 = i13 >>> 20 ^ i13 | 1;
   i13 = 0;
   i14 = i1;
   i15 = i10;
   while (1) {
    if ((i15 | 0) == 0) {
     break;
    }
    i16 = (i13 | 0) == 0 ? i12 : i13;
    i17 = i16 + i14 & i6;
    i18 = i7 + (i17 << 3) | 0;
    i19 = HEAP32[i18 >> 2] | 0;
    if ((i19 | 0) == (i2 | 0)) {
     i11 = i18;
     break L4;
    } else {
     i13 = i16;
     i14 = i17;
     i15 = i19;
    }
   }
   return;
  }
 } while (0);
 if ((i11 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i11 + 4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  return;
 }
 i11 = i7 + 8 | 0;
 i6 = HEAP32[i11 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i10 = i7 | 0;
 i7 = 0;
 i1 = 0;
 i8 = i6;
 while (1) {
  if (i8 >>> 0 <= i7 >>> 0) {
   i20 = 11;
   break;
  }
  i6 = HEAP32[i10 >> 2] | 0;
  i9 = i6 + (i7 << 5) | 0;
  if ((HEAP32[i6 + (i7 << 5) + 4 >> 2] | 0) >>> 0 >= i4 >>> 0) {
   i21 = i1;
   break;
  }
  do {
   if ((HEAP32[i6 + (i7 << 5) + 8 >> 2] | 0) >>> 0 < i3 >>> 0) {
    i22 = i1;
    i23 = i8;
   } else {
    if ((HEAP32[i9 >> 2] | 0) != 4) {
     i22 = i1;
     i23 = i8;
     break;
    }
    __ZN7WebCore14DocumentMarker14setActiveMatchEb(i9, i5);
    i22 = 1;
    i23 = HEAP32[i11 >> 2] | 0;
   }
  } while (0);
  i9 = i7 + 1 | 0;
  if ((i9 | 0) == (i23 | 0)) {
   i21 = i22;
   break;
  } else {
   i7 = i9;
   i1 = i22;
   i8 = i23;
  }
 }
 if ((i20 | 0) == 11) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 if (!i21) {
  return;
 }
 i21 = (HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0;
 i20 = i2 + 32 | 0;
 if (i21) {
  i24 = i20 | 0;
 } else {
  i24 = HEAP32[i20 >> 2] | 0;
 }
 if ((HEAP32[i24 >> 2] | 0) == 0) {
  return;
 }
 if (i21) {
  i25 = i20 | 0;
 } else {
  i25 = HEAP32[i20 >> 2] | 0;
 }
 __ZNK7WebCore12RenderObject7repaintEb(HEAP32[i25 >> 2] | 0, 0);
 return;
}
function __ZN7WebCore24DocumentMarkerController9addMarkerEPNS_5RangeENS_14DocumentMarker10MarkerTypeERKN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i6 = i5 | 0;
 i7 = i5 + 136 | 0;
 i8 = i5 + 144 | 0;
 __ZN7WebCore12TextIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE(i6, i2, 0);
 i2 = i6 + 133 | 0;
 i9 = i6 + 52 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  __ZN7WebCore12TextIteratorD1Ev(i6);
  STACKTOP = i5;
  return;
 }
 i10 = i7 | 0;
 i11 = i8 + 12 | 0;
 while (1) {
  if ((HEAP8[i2] & 1) != 0) {
   i12 = 20;
   break;
  }
  __ZNK7WebCore12TextIterator5rangeEv(i7, i6);
  i13 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = 0;
  i14 = HEAP32[i13 + 8 >> 2] | 0;
  i15 = i13 + 12 | 0;
  i16 = HEAP32[i15 >> 2] | 0;
  if ((i16 | 0) > -1) {
   i17 = i16;
  } else {
   i16 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i13 + 16 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i15 >> 2] = i16;
   i17 = i16;
  }
  i16 = i13 + 24 | 0;
  i15 = HEAP32[i16 >> 2] | 0;
  if ((i15 | 0) > -1) {
   i18 = i15;
  } else {
   i15 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i13 + 28 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i16 >> 2] = i15;
   i18 = i15;
  }
  __ZN7WebCore14DocumentMarkerC1ENS0_10MarkerTypeEjjRKN3WTF6StringE(i8, i3, i17, i18, i4);
  __ZN7WebCore24DocumentMarkerController9addMarkerEPNS_4NodeERKNS_14DocumentMarkerE(i1, i14, i8);
  i14 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i14 | 0) != 0) {
    i15 = i14 + 4 | 0;
    i16 = i15 | 0;
    i19 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
    if ((i19 | 0) != 0) {
     HEAP32[i16 >> 2] = i19;
     break;
    }
    i19 = i15 - 4 | 0;
    if ((i19 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 7](i19);
   }
  } while (0);
  do {
   if ((i13 | 0) != 0) {
    i14 = i13 | 0;
    i19 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
    if ((i19 | 0) == 0) {
     __ZN7WebCore5RangeD1Ev(i13);
     __ZN3WTF8fastFreeEPv(i13);
     break;
    } else {
     HEAP32[i14 >> 2] = i19;
     break;
    }
   }
  } while (0);
  __ZN7WebCore12TextIterator7advanceEv(i6);
  if ((HEAP32[i9 >> 2] | 0) == 0) {
   i12 = 21;
   break;
  }
 }
 if ((i12 | 0) == 20) {
  __ZN7WebCore12TextIteratorD1Ev(i6);
  STACKTOP = i5;
  return;
 } else if ((i12 | 0) == 21) {
  __ZN7WebCore12TextIteratorD1Ev(i6);
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore24DocumentMarkerController13removeMarkersEPNS_5RangeENS_14DocumentMarker11MarkerTypesENS0_37RemovePartiallyOverlappingMarkerOrNotE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 136 | 0;
 i8 = i5 + 144 | 0;
 __ZN7WebCore12TextIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE(i6, i2, 0);
 i2 = i6 + 133 | 0;
 i9 = i6 + 52 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  __ZN7WebCore12TextIteratorD1Ev(i6);
  STACKTOP = i5;
  return;
 }
 i10 = HEAP32[i3 >> 2] | 0;
 i3 = i1 + 20 | 0;
 i11 = i7 | 0;
 i12 = i8 | 0;
 while (1) {
  if ((HEAP8[i2] & 1) != 0) {
   i13 = 16;
   break;
  }
  if ((HEAP32[i3 >> 2] & i10 | 0) == 0) {
   i13 = 17;
   break;
  }
  __ZNK7WebCore12TextIterator5rangeEv(i7, i6);
  i14 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = 0;
  i15 = i14 + 12 | 0;
  i16 = HEAP32[i15 >> 2] | 0;
  if ((i16 | 0) > -1) {
   i17 = i16;
  } else {
   i16 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i14 + 16 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i15 >> 2] = i16;
   i17 = i16;
  }
  i16 = i14 + 24 | 0;
  i15 = HEAP32[i16 >> 2] | 0;
  if ((i15 | 0) > -1) {
   i18 = i15;
  } else {
   i15 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i14 + 28 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i16 >> 2] = i15;
   i18 = i15;
  }
  i15 = HEAP32[i14 + 8 >> 2] | 0;
  HEAP32[i12 >> 2] = i10;
  __ZN7WebCore24DocumentMarkerController13removeMarkersEPNS_4NodeEjiNS_14DocumentMarker11MarkerTypesENS0_37RemovePartiallyOverlappingMarkerOrNotE(i1, i15, i17, i18 - i17 | 0, i8, i4);
  do {
   if ((i14 | 0) != 0) {
    i15 = i14 | 0;
    i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    if ((i16 | 0) == 0) {
     __ZN7WebCore5RangeD1Ev(i14);
     __ZN3WTF8fastFreeEPv(i14);
     break;
    } else {
     HEAP32[i15 >> 2] = i16;
     break;
    }
   }
  } while (0);
  __ZN7WebCore12TextIterator7advanceEv(i6);
  if ((HEAP32[i9 >> 2] | 0) == 0) {
   i13 = 18;
   break;
  }
 }
 if ((i13 | 0) == 17) {
  __ZN7WebCore12TextIteratorD1Ev(i6);
  STACKTOP = i5;
  return;
 } else if ((i13 | 0) == 18) {
  __ZN7WebCore12TextIteratorD1Ev(i6);
  STACKTOP = i5;
  return;
 } else if ((i13 | 0) == 16) {
  __ZN7WebCore12TextIteratorD1Ev(i6);
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore24DocumentMarkerController9addMarkerEPNS_5RangeENS_14DocumentMarker10MarkerTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i5 = i4 | 0;
 i6 = i4 + 136 | 0;
 i7 = i4 + 144 | 0;
 __ZN7WebCore12TextIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE(i5, i2, 0);
 i2 = i5 + 133 | 0;
 i8 = i5 + 52 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  __ZN7WebCore12TextIteratorD1Ev(i5);
  STACKTOP = i4;
  return;
 }
 i9 = i6 | 0;
 i10 = i7 + 12 | 0;
 while (1) {
  if ((HEAP8[i2] & 1) != 0) {
   i11 = 21;
   break;
  }
  __ZNK7WebCore12TextIterator5rangeEv(i6, i5);
  i12 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  i13 = HEAP32[i12 + 8 >> 2] | 0;
  i14 = i12 + 12 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  if ((i15 | 0) > -1) {
   i16 = i15;
  } else {
   i15 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i12 + 16 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i14 >> 2] = i15;
   i16 = i15;
  }
  i15 = i12 + 24 | 0;
  i14 = HEAP32[i15 >> 2] | 0;
  if ((i14 | 0) > -1) {
   i17 = i14;
  } else {
   i14 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i12 + 28 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i15 >> 2] = i14;
   i17 = i14;
  }
  __ZN7WebCore14DocumentMarkerC1ENS0_10MarkerTypeEjj(i7, i3, i16, i17);
  __ZN7WebCore24DocumentMarkerController9addMarkerEPNS_4NodeERKNS_14DocumentMarkerE(i1, i13, i7);
  i13 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    i14 = i13 + 4 | 0;
    i15 = i14 | 0;
    i18 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    if ((i18 | 0) != 0) {
     HEAP32[i15 >> 2] = i18;
     break;
    }
    i18 = i14 - 4 | 0;
    if ((i18 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 7](i18);
   }
  } while (0);
  do {
   if ((i12 | 0) != 0) {
    i13 = i12 | 0;
    i18 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
    if ((i18 | 0) == 0) {
     __ZN7WebCore5RangeD1Ev(i12);
     __ZN3WTF8fastFreeEPv(i12);
     break;
    } else {
     HEAP32[i13 >> 2] = i18;
     break;
    }
   }
  } while (0);
  __ZN7WebCore12TextIterator7advanceEv(i5);
  if ((HEAP32[i8 >> 2] | 0) == 0) {
   i11 = 20;
   break;
  }
 }
 if ((i11 | 0) == 20) {
  __ZN7WebCore12TextIteratorD1Ev(i5);
  STACKTOP = i4;
  return;
 } else if ((i11 | 0) == 21) {
  __ZN7WebCore12TextIteratorD1Ev(i5);
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF11VectorMoverILb0EN7WebCore22RenderedDocumentMarkerEE15moveOverlappingEPS2_S4_S4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if (i1 >>> 0 > i3 >>> 0) {
  if ((i1 | 0) == (i2 | 0)) {
   return;
  } else {
   i4 = i1;
   i5 = i3;
  }
  while (1) {
   HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i5 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
   HEAP32[i5 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
   i6 = i4 + 12 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i5 + 12 >> 2] = i7;
   i7 = i5 + 16 | 0;
   i8 = i4 + 16 | 0;
   HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i7 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
   HEAP32[i7 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   HEAP32[i7 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
   i8 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i6 = i8 + 4 | 0;
     i7 = i6 | 0;
     i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i7 >> 2] = i9;
      break;
     }
     i9 = i6 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
    }
   } while (0);
   i8 = i4 + 32 | 0;
   if ((i8 | 0) == (i2 | 0)) {
    break;
   } else {
    i4 = i8;
    i5 = i5 + 32 | 0;
   }
  }
  return;
 }
 if ((i2 | 0) == (i1 | 0)) {
  return;
 }
 i5 = i2;
 i4 = i3 + (i2 - i1 >> 5 << 5) | 0;
 while (1) {
  i2 = i5 - 32 | 0;
  i3 = i4 - 32 | 0;
  HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i4 - 32 + 4 >> 2] = HEAP32[i5 - 32 + 4 >> 2];
  HEAP32[i4 - 32 + 8 >> 2] = HEAP32[i5 - 32 + 8 >> 2];
  i8 = i5 - 32 + 12 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i4 - 32 + 12 >> 2] = i9;
  i9 = i4 - 32 + 16 | 0;
  i6 = i5 - 32 + 16 | 0;
  HEAP32[i9 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
  HEAP32[i9 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
  HEAP32[i9 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
  i6 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i8 = i6 + 4 | 0;
    i9 = i8 | 0;
    i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    if ((i7 | 0) != 0) {
     HEAP32[i9 >> 2] = i7;
     break;
    }
    i7 = i8 - 4 | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 7](i7);
   }
  } while (0);
  if ((i2 | 0) == (i1 | 0)) {
   break;
  } else {
   i5 = i2;
   i4 = i3;
  }
 }
 return;
}
function __ZN7WebCore24DocumentMarkerController39invalidateRenderedRectsForMarkersInRectERKNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i3 + (i4 << 3) | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  return;
 }
 L4 : do {
  if ((i4 | 0) == 0) {
   i6 = i3;
  } else {
   i1 = i3;
   while (1) {
    i7 = HEAP32[i1 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i6 = i1;
     break L4;
    }
    i1 = i1 + 8 | 0;
    if ((i1 | 0) == (i5 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i6 | 0) == (i5 | 0)) {
  return;
 } else {
  i8 = i6;
 }
 L12 : while (1) {
  i6 = HEAP32[i8 + 4 >> 2] | 0;
  i3 = i6 + 8 | 0;
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   i4 = i6 | 0;
   i6 = 0;
   while (1) {
    i1 = (HEAP32[i4 >> 2] | 0) + (i6 << 5) + 16 | 0;
    if (__ZNK7WebCore10LayoutRect10intersectsERKS0_(i1, i2) | 0) {
     if ((HEAP8[H_BASE + 24 | 0] | 0) == 0) {
      _memset(H_BASE + 8 | 0, -1 | 0, 16) | 0;
      HEAP32[H_BASE + 24 >> 2] = 1;
      HEAP32[H_BASE + 28 >> 2] = 0;
     }
     i7 = i1;
     HEAP32[i7 >> 2] = HEAP32[H_BASE + 8 >> 2];
     HEAP32[i7 + 4 >> 2] = HEAP32[H_BASE + 12 >> 2];
     HEAP32[i7 + 8 >> 2] = HEAP32[H_BASE + 16 >> 2];
     HEAP32[i7 + 12 >> 2] = HEAP32[H_BASE + 20 >> 2];
    }
    i6 = i6 + 1 | 0;
    if (i6 >>> 0 >= (HEAP32[i3 >> 2] | 0) >>> 0) {
     break;
    }
   }
  }
  i3 = i8 + 8 | 0;
  if ((i3 | 0) == (i5 | 0)) {
   i9 = 21;
   break;
  } else {
   i10 = i3;
  }
  while (1) {
   i3 = HEAP32[i10 >> 2] | 0;
   if (!((i3 | 0) == (-1 | 0) | (i3 | 0) == 0)) {
    break;
   }
   i3 = i10 + 8 | 0;
   if ((i3 | 0) == (i5 | 0)) {
    i9 = 23;
    break L12;
   } else {
    i10 = i3;
   }
  }
  if ((i10 | 0) == (i5 | 0)) {
   i9 = 22;
   break;
  } else {
   i8 = i10;
  }
 }
 if ((i9 | 0) == 21) {
  return;
 } else if ((i9 | 0) == 22) {
  return;
 } else if ((i9 | 0) == 23) {
  return;
 }
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_NS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSI_ISB_EEEESJ_E8reinsertEOSC_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = i5;
 i7 = i6 + ~(i6 << 15) | 0;
 i6 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i6 >>> 6 ^ i6;
 i6 = i7 + ~(i7 << 11) | 0;
 i7 = i6 >>> 16 ^ i6;
 i6 = i7 & i4;
 i8 = i3 + (i6 << 3) | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L1 : do {
  if ((i9 | 0) == 0) {
   i10 = 0;
   i11 = i8;
   i12 = 3;
  } else {
   i13 = (i7 >>> 23) + ~i7 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i6;
   i17 = i8;
   i18 = i9;
   while (1) {
    if ((i18 | 0) == (i5 | 0)) {
     i19 = i17;
     break L1;
    }
    i20 = (i18 | 0) == -1 ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i13 : i15;
    i22 = i21 + i16 & i4;
    i23 = i3 + (i22 << 3) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i10 = i20;
     i11 = i23;
     i12 = 3;
     break;
    } else {
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
  }
 } while (0);
 if ((i12 | 0) == 3) {
  i19 = (i10 | 0) != 0 ? i10 : i11;
 }
 __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore4NodeEEENS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEEED2Ev(i19);
 i11 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i19 >> 2] = i11;
 i11 = i2 + 4 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i19 + 4 >> 2] = i2;
 return i19 | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_NS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSI_ISB_EEEESJ_E6rehashEiPSC_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
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
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_NS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSI_ISB_EEEESJ_E8reinsertEOSC_(i1, i2) | 0;
   i12 = (i2 | 0) == (i3 | 0) ? i6 : i11;
  }
  i6 = i10 + 1 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i6;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i13 = 0;
 } else {
  i8 = i12;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i13 << 3) | 0;
  if ((HEAP32[i1 >> 2] | 0) != -1) {
   __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore4NodeEEENS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEEED2Ev(i1);
  }
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i13 = i1;
  } else {
   i8 = i12;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF6VectorIN7WebCore22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEE6insertIS2_EEvjOT_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 L1 : do {
  if ((i5 | 0) == (HEAP32[i1 + 4 >> 2] | 0)) {
   i6 = i5 + 1 | 0;
   i7 = i1 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   do {
    if (i8 >>> 0 <= i3 >>> 0) {
     if ((i8 + (i5 << 5) | 0) >>> 0 <= i3 >>> 0) {
      break;
     }
     i9 = i6 + (i5 >>> 2) | 0;
     i10 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
     __ZN3WTF6VectorIN7WebCore22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i10 >>> 0 > i6 >>> 0 ? i10 : i6);
     i11 = (HEAP32[i7 >> 2] | 0) + (i3 - i8 >> 5 << 5) | 0;
     i12 = i7;
     break L1;
    }
   } while (0);
   i8 = i6 + (i5 >>> 2) | 0;
   i10 = i8 >>> 0 > 16 >>> 0 ? i8 : 16;
   __ZN3WTF6VectorIN7WebCore22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i10 >>> 0 > i6 >>> 0 ? i10 : i6);
   i11 = i3;
   i12 = i7;
  } else {
   i11 = i3;
   i12 = i1 | 0;
  }
 } while (0);
 i1 = HEAP32[i12 >> 2] | 0;
 i12 = i1 + (i2 << 5) | 0;
 __ZN3WTF11VectorMoverILb0EN7WebCore22RenderedDocumentMarkerEE15moveOverlappingEPS2_S4_S4_(i12, i1 + (HEAP32[i4 >> 2] << 5) | 0, i1 + (i2 + 1 << 5) | 0);
 HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i1 + (i2 << 5) + 4 >> 2] = HEAP32[i11 + 4 >> 2];
 HEAP32[i1 + (i2 << 5) + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 i12 = i11 + 12 | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i1 + (i2 << 5) + 12 >> 2] = i3;
 i3 = i1 + (i2 << 5) + 16 | 0;
 i2 = i11 + 16 | 0;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore24DocumentMarkerController16setMarkersActiveEPNS_5RangeEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 1023 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 i5 = HEAP32[i2 + 20 >> 2] | 0;
 i6 = __ZNK7WebCore5Range12pastLastNodeEv(i2) | 0;
 i7 = __ZNK7WebCore5Range9firstNodeEv(i2) | 0;
 if ((i7 | 0) == (i6 | 0)) {
  return;
 }
 i8 = i2 + 12 | 0;
 i9 = i2 + 16 | 0;
 i10 = i2 + 24 | 0;
 i11 = i2 + 28 | 0;
 i2 = i7;
 while (1) {
  do {
   if ((i2 | 0) == (i4 | 0)) {
    i7 = HEAP32[i8 >> 2] | 0;
    if ((i7 | 0) > -1) {
     i12 = i7;
     break;
    }
    i7 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i9 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i8 >> 2] = i7;
    i12 = i7;
   } else {
    i12 = 0;
   }
  } while (0);
  do {
   if ((i2 | 0) == (i5 | 0)) {
    i7 = HEAP32[i10 >> 2] | 0;
    if ((i7 | 0) > -1) {
     i13 = i7;
     break;
    }
    i7 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i11 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i10 >> 2] = i7;
    i13 = i7;
   } else {
    i13 = 2147483647;
   }
  } while (0);
  __ZN7WebCore24DocumentMarkerController16setMarkersActiveEPNS_4NodeEjjb(i1, i2, i12, i13, i3);
  if ((HEAP32[i2 + 12 >> 2] & 2 | 0) == 0) {
   i14 = 13;
  } else {
   i7 = HEAP32[i2 + 36 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i14 = 13;
   } else {
    i15 = i7;
   }
  }
  do {
   if ((i14 | 0) == 13) {
    i14 = 0;
    i7 = HEAP32[i2 + 28 >> 2] | 0;
    if ((i7 | 0) != 0) {
     i15 = i7;
     break;
    }
    i15 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i2) | 0;
   }
  } while (0);
  if ((i15 | 0) == (i6 | 0)) {
   break;
  } else {
   i2 = i15;
  }
 }
 return;
}
function __ZN3WTF6VectorIN7WebCore22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 i1 = i5 + (i6 << 5) | 0;
 if (i2 >>> 0 > 134217727 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 5) | 0;
 HEAP32[i3 >> 2] = i7 >>> 5;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i7 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   HEAP32[i7 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
   i2 = i6 + 12 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 + 12 >> 2] = i8;
   i8 = i7 + 16 | 0;
   i9 = i6 + 16 | 0;
   HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
   HEAP32[i8 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
   HEAP32[i8 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
   i9 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i2 = i9 + 4 | 0;
     i8 = i2 | 0;
     i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i8 >> 2] = i10;
      break;
     }
     i10 = i2 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 7](i10);
    }
   } while (0);
   i9 = i6 + 32 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 32 | 0;
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
function __ZN3WTF7HashMapINS_6RefPtrIN7WebCore4NodeEEENS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSD_ISA_EEE4findEPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] << 3 | 0;
   i6 = i5;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = i3;
   i9 = i8 + ~(i8 << 15) | 0;
   i8 = (i9 >>> 10 ^ i9) * 9 & -1;
   i9 = i8 >>> 6 ^ i8;
   i8 = i9 + ~(i9 << 11) | 0;
   i9 = i8 >>> 16 ^ i8;
   i8 = i5 & i9;
   i10 = i4 + (i8 << 3) | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   L4 : do {
    if ((i11 | 0) == (i3 | 0)) {
     i12 = i10;
    } else {
     i13 = (i9 >>> 23) + ~i9 | 0;
     i14 = i13 << 12 ^ i13;
     i13 = i14 >>> 7 ^ i14;
     i14 = i13 << 2 ^ i13;
     i13 = i14 >>> 20 ^ i14 | 1;
     i14 = 0;
     i15 = i8;
     i16 = i11;
     while (1) {
      if ((i16 | 0) == 0) {
       break;
      }
      i17 = (i14 | 0) == 0 ? i13 : i14;
      i18 = i17 + i15 & i5;
      i19 = i4 + (i18 << 3) | 0;
      i20 = HEAP32[i19 >> 2] | 0;
      if ((i20 | 0) == (i3 | 0)) {
       i12 = i19;
       break L4;
      } else {
       i14 = i17;
       i15 = i18;
       i16 = i20;
      }
     }
     i16 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
     i6 = i16;
     i7 = i16;
     break L1;
    }
   } while (0);
   i5 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
   i6 = (i12 | 0) == 0 ? i5 : i12;
   i7 = i5;
  }
 } while (0);
 i12 = i1;
 HEAP32[i12 >> 2] = i6;
 HEAP32[i12 + 4 >> 2] = i7;
 return;
}
function __ZN3WTF6VectorIN7WebCore22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 << 5) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (i2 - i7 >> 5 << 5) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i12 + (i6 << 5) >> 2] = HEAP32[i11 >> 2];
 HEAP32[i12 + (i6 << 5) + 4 >> 2] = HEAP32[i11 + 4 >> 2];
 HEAP32[i12 + (i6 << 5) + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 i2 = i11 + 12 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i12 + (i6 << 5) + 12 >> 2] = i5;
 i5 = i12 + (i6 << 5) + 16 | 0;
 i6 = i11 + 16 | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore24DocumentMarkerController13removeMarkersEPNS_4NodeENS_14DocumentMarker11MarkerTypesE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i8 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i1 + 20 >> 2] & i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF7HashMapINS_6RefPtrIN7WebCore4NodeEEENS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSD_ISA_EEE4findEPS3_(i5, i1 | 0, i2);
 if ((HEAP32[i5 >> 2] | 0) == ((HEAP32[i1 >> 2] | 0) + (HEAP32[i1 + 4 >> 2] << 3) | 0)) {
  STACKTOP = i4;
  return;
 }
 i2 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i6 + 4 >> 2] = i2;
 HEAP32[i7 >> 2] = i8;
 __ZN7WebCore24DocumentMarkerController21removeMarkersFromListEN3WTF24HashTableIteratorAdapterINS1_9HashTableINS1_6RefPtrINS_4NodeEEENS1_12KeyValuePairIS6_NS1_6OwnPtrINS1_6VectorINS_22RenderedDocumentMarkerELj0ENS1_15CrashOnOverflowEEEEEEENS1_24KeyValuePairKeyExtractorISE_EENS1_7PtrHashIS6_EENS1_22KeyValuePairHashTraitsINS1_10HashTraitsIS6_EENSK_ISD_EEEESL_EESE_EENS_14DocumentMarker11MarkerTypesE(i1, i6, i7);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore24DocumentMarkerController15addMarkerToNodeEPNS_4NodeEjjNS_14DocumentMarker10MarkerTypeEN3WTF10PassRefPtrINS_21DocumentMarkerDetailsEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i8 = i7 | 0;
 i9 = i7 + 16 | 0;
 i10 = i9 | 0;
 i11 = i6 | 0;
 i6 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i10 >> 2] = i6;
 __ZN7WebCore14DocumentMarkerC1ENS0_10MarkerTypeEjjN3WTF10PassRefPtrINS_21DocumentMarkerDetailsEEE(i8, i5, i3, i4 + i3 | 0, i9);
 __ZN7WebCore24DocumentMarkerController9addMarkerEPNS_4NodeERKNS_14DocumentMarkerE(i1, i2, i8);
 i2 = HEAP32[i8 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = i2 + 4 | 0;
   i1 = i8 | 0;
   i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i1 >> 2] = i9;
    break;
   }
   i9 = i8 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
  }
 } while (0);
 i2 = HEAP32[i10 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i10 = i2 + 4 | 0;
 i2 = i10 | 0;
 i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i2 >> 2] = i9;
  STACKTOP = i7;
  return;
 }
 i9 = i10 - 4 | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
 STACKTOP = i7;
 return;
}
function __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore4NodeEEENS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2 + 8 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  i5 = i2 | 0;
  if ((i4 | 0) != 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i6 + (i4 << 5) | 0;
   i4 = i6;
   while (1) {
    i6 = HEAP32[i4 + 12 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i8 = i6 + 4 | 0;
      i9 = i8 | 0;
      i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      if ((i10 | 0) != 0) {
       HEAP32[i9 >> 2] = i10;
       break;
      }
      i10 = i8 - 4 | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 7](i10);
     }
    } while (0);
    i4 = i4 + 32 | 0;
    if ((i4 | 0) == (i7 | 0)) {
     break;
    }
   }
   HEAP32[i3 >> 2] = 0;
  }
  i3 = HEAP32[i5 >> 2] | 0;
  if ((i3 | 0) != 0) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i2 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 return;
}
function __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
 i1 = i2 + (i6 << 4) | 0;
 if (i5 >>> 0 > 268435455 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 4) | 0;
 HEAP32[i3 >> 2] = i7 >>> 4;
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
   HEAP32[i5 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
   i8 = i6 + 16 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
    i7 = i7 + 16 | 0;
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
function __ZN7WebCore24DocumentMarkerController15addMarkerToNodeEPNS_4NodeEjjNS_14DocumentMarker10MarkerTypeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 __ZN7WebCore14DocumentMarkerC1ENS0_10MarkerTypeEjj(i7, i5, i3, i4 + i3 | 0);
 __ZN7WebCore24DocumentMarkerController9addMarkerEPNS_4NodeERKNS_14DocumentMarkerE(i1, i2, i7);
 i2 = HEAP32[i7 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i7 = i2 + 4 | 0;
 i2 = i7 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i6;
  return;
 }
 i1 = i7 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 7](i1);
 STACKTOP = i6;
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorIPN7WebCore14DocumentMarkerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore24DocumentMarkerController6detachEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1 + 20 | 0;
  HEAP32[i3 >> 2] = 0;
  return;
 }
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i5 = 0;
  while (1) {
   i6 = i2 + (i5 << 3) | 0;
   if ((HEAP32[i6 >> 2] | 0) != -1) {
    __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore4NodeEEENS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEEED2Ev(i6);
   }
   i5 = i5 + 1 | 0;
   if ((i5 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 _memset(i1 | 0, 0, 16) | 0;
 i3 = i1 + 20 | 0;
 HEAP32[i3 >> 2] = 0;
 return;
}
function __ZN7WebCore24DocumentMarkerControllerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i1 = 0;
  while (1) {
   i4 = i2 + (i1 << 3) | 0;
   if ((HEAP32[i4 >> 2] | 0) != -1) {
    __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore4NodeEEENS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEEED2Ev(i4);
   }
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore24DocumentMarkerControllerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i1 = 0;
  while (1) {
   i4 = i2 + (i1 << 3) | 0;
   if ((HEAP32[i4 >> 2] | 0) != -1) {
    __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore4NodeEEENS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEEED2Ev(i4);
   }
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
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
function __ZN7WebCore24DocumentMarkerControllerC2Ev(i1) {
 i1 = i1 | 0;
 _memset(i1 | 0, 0, 24) | 0;
 return;
}
function __ZN7WebCore24DocumentMarkerControllerC1Ev(i1) {
 i1 = i1 | 0;
 _memset(i1 | 0, 0, 24) | 0;
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
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
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
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore24DocumentMarkerControllerC2Ev,b3,__ZN7WebCore24DocumentMarkerControllerD2Ev,b3,b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore24DocumentMarkerController15addMarkerToNodeEPNS_4NodeEjjNS_14DocumentMarker10MarkerTypeEN3WTF10PassRefPtrINS_21DocumentMarkerDetailsEEE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_NS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSI_ISB_EEEESJ_E3addINS_17HashMapTranslatorISL_SG_EERPS3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_SC_SE_SG_SL_SJ_EEEEOT0_OT1_","__ZN3WTF16copyKeysToVectorINS_6RefPtrIN7WebCore4NodeEEENS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSD_ISA_EENS6_IS4_Lj0ES8_EEEEvRKNS_7HashMapIT_T0_T1_T2_T3_EERT4_","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_NS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSI_ISB_EEEESJ_E6rehashEiPSC_","__ZN7WebCore24DocumentMarkerController16setMarkersActiveEPNS_4NodeEjjb","__ZN7WebCore24DocumentMarkerController21removeMarkersFromListEN3WTF24HashTableIteratorAdapterINS1_9HashTableINS1_6RefPtrINS_4NodeEEENS1_12KeyValuePairIS6_NS1_6OwnPtrINS1_6VectorINS_22RenderedDocumentMarkerELj0ENS1_15CrashOnOverflowEEEEEEENS1_24KeyValuePairKeyExtractorISE_EENS1_7PtrHashIS6_EENS1_22KeyValuePairHashTraitsINS1_10HashTraitsIS6_EENSK_ISD_EEEESL_EESE_EENS_14DocumentMarker11MarkerTypesE","__ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore24DocumentMarkerController14repaintMarkersENS_14DocumentMarker11MarkerTypesE","__ZN7WebCore24DocumentMarkerController23renderedRectsForMarkersENS_14DocumentMarker10MarkerTypeE","__ZN3WTF6VectorIN7WebCore22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_","__ZN7WebCore24DocumentMarkerController15addMarkerToNodeEPNS_4NodeEjjNS_14DocumentMarker10MarkerTypeE","__ZN7WebCore24DocumentMarkerController13removeMarkersEPNS_4NodeEjiNS_14DocumentMarker11MarkerTypesENS0_37RemovePartiallyOverlappingMarkerOrNotE","__ZN3WTF6VectorIPN7WebCore14DocumentMarkerELj0ENS_15CrashOnOverflowEE14expandCapacityEj","_memset","__ZN3WTF7HashMapINS_6RefPtrIN7WebCore4NodeEEENS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSD_ISA_EEE4findEPS3_","_memcpy","__ZN7WebCore24DocumentMarkerController21markerContainingPointERKNS_11LayoutPointENS_14DocumentMarker10MarkerTypeE","__ZN7WebCore24DocumentMarkerController11copyMarkersEPNS_4NodeEjiS2_i","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_NS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSI_ISB_EEEESJ_E8reinsertEOSC_","__ZN7WebCore24DocumentMarkerController10hasMarkersEPNS_5RangeENS_14DocumentMarker11MarkerTypesE","__ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore4NodeEEENS_6OwnPtrINS_6VectorINS2_22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEEEEEED2Ev","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore24DocumentMarkerController12shiftMarkersEPNS_4NodeEji","__ZN7WebCore24DocumentMarkerController42clearDescriptionOnMarkersIntersectingRangeEPNS_5RangeENS_14DocumentMarker11MarkerTypesE","__ZN7WebCore24DocumentMarkerController13removeMarkersENS_14DocumentMarker11MarkerTypesE","__ZN7WebCore24DocumentMarkerController13removeMarkersEPNS_4NodeENS_14DocumentMarker11MarkerTypesE","__ZN3WTF11VectorMoverILb0EN7WebCore22RenderedDocumentMarkerEE15moveOverlappingEPS2_S4_S4_","__ZN7WebCore24DocumentMarkerControllerD2Ev","__ZN7WebCore24DocumentMarkerController6detachEv","__ZN7WebCore24DocumentMarkerController14markersInRangeEPNS_5RangeENS_14DocumentMarker11MarkerTypesE","__ZN3WTF6VectorIN7WebCore22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore24DocumentMarkerController39invalidateRenderedRectsForMarkersInRectERKNS_10LayoutRectE","__ZN7WebCore24DocumentMarkerController10markersForEPNS_4NodeENS_14DocumentMarker11MarkerTypesE","__ZN7WebCore24DocumentMarkerControllerC2Ev","__ZN7WebCore24DocumentMarkerController9addMarkerEPNS_5RangeENS_14DocumentMarker10MarkerTypeE","__ZN3WTF6VectorIN7WebCore22RenderedDocumentMarkerELj0ENS_15CrashOnOverflowEE6insertIS2_EEvjOT_","__ZN7WebCore24DocumentMarkerController13removeMarkersEPNS_5RangeENS_14DocumentMarker11MarkerTypesENS0_37RemovePartiallyOverlappingMarkerOrNotE","__ZN7WebCore24DocumentMarkerController9addMarkerEPNS_5RangeENS_14DocumentMarker10MarkerTypeERKN3WTF6StringE","__ZN7WebCore24DocumentMarkerController16setMarkersActiveEPNS_5RangeEb","__ZN7WebCore24DocumentMarkerController18addTextMatchMarkerEPKNS_5RangeEb","__ZN7WebCore24DocumentMarkerController9addMarkerEPNS_4NodeERKNS_14DocumentMarkerE"]

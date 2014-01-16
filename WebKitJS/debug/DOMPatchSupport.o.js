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
H_BASE = parentModule["_malloc"](40 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 40;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore15DOMPatchSupportC1EPNS_9DOMEditorEPNS_8DocumentE;
var __ZN7WebCore15DOMPatchSupportD1Ev;
/* memory initializer */ allocate([60,47,98,111,100,121,62,0,60,47,104,101,97,100,62,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZN7WebCore9HTMLNames7headTagE=env.__ZN7WebCore9HTMLNames7headTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore15DOMPatchSupportE=(H_BASE+24)|0;
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
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _llvm_trap=env._llvm_trap;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore15DOMPatchSupport18innerPatchChildrenEPNS_13ContainerNodeERKN3WTF6VectorINS3_6OwnPtrINS0_6DigestEEELj0ENS3_15CrashOnOverflowEEESB_Ri(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 248 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 32 | 0;
 i10 = i6 + 40 | 0;
 i11 = i6 + 48 | 0;
 i12 = i6 + 72 | 0;
 i13 = i6 + 96 | 0;
 i14 = i6 + 112 | 0;
 i15 = i6 + 120 | 0;
 i16 = i6 + 128 | 0;
 i17 = i6 + 144 | 0;
 i18 = i6 + 168 | 0;
 i19 = i6 + 176 | 0;
 i20 = i6 + 192 | 0;
 i21 = i6 + 200 | 0;
 i22 = i6 + 216 | 0;
 i23 = i6 + 224 | 0;
 i24 = i6 + 240 | 0;
 __ZN7WebCore15DOMPatchSupport4diffERKN3WTF6VectorINS1_6OwnPtrINS0_6DigestEEELj0ENS1_15CrashOnOverflowEEES9_(i8, 0, i3, i4);
 i25 = i8 + 12 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 _memset(i11 | 0, 0, 20) | 0;
 _memset(i12 | 0, 0, 20) | 0;
 i26 = i3 + 8 | 0;
 i27 = HEAP32[i26 >> 2] | 0;
 L1 : do {
  if ((i27 | 0) == 0) {
   i28 = 0;
   i29 = 0;
   i30 = i4 + 8 | 0;
   i31 = 66;
  } else {
   i32 = HEAP32[i8 + 8 >> 2] | 0;
   i33 = HEAP32[i8 >> 2] | 0;
   i34 = i3 | 0;
   i35 = i1 + 12 | 0;
   i36 = i32 - 1 | 0;
   i37 = i4 + 8 | 0;
   i38 = i4 | 0;
   i39 = i11 | 0;
   i40 = i16 + 8 | 0;
   i41 = i16 | 0;
   i42 = i1 + 20 | 0;
   i43 = i12 | 0;
   i44 = i12 | 0;
   i45 = i12 + 8 | 0;
   i46 = 0;
   i47 = 0;
   i48 = 0;
   i49 = i27;
   L3 : while (1) {
    if (i32 >>> 0 <= i46 >>> 0) {
     i31 = 5;
     break;
    }
    i50 = i33 + (i46 << 3) | 0;
    L6 : do {
     if ((HEAP32[i50 >> 2] | 0) == 0) {
      i51 = i49;
      i31 = 15;
     } else {
      i52 = HEAP32[i43 >> 2] | 0;
      L8 : do {
       if ((i52 | 0) != 0) {
        i53 = HEAP32[i45 >> 2] | 0;
        i54 = HEAP32[i33 + (i46 << 3) + 4 >> 2] | 0;
        i55 = i54 + ~(i54 << 15) | 0;
        i56 = (i55 >>> 10 ^ i55) * 9 & -1;
        i55 = i56 >>> 6 ^ i56;
        i56 = i55 + ~(i55 << 11) | 0;
        i55 = i56 >>> 16 ^ i56;
        i56 = i55 & i53;
        i57 = i52 + (i56 << 2) | 0;
        i58 = HEAP32[i57 >> 2] | 0;
        if ((i58 | 0) == (i54 | 0)) {
         i59 = i57;
        } else {
         i57 = (i55 >>> 23) + ~i55 | 0;
         i55 = i57 << 12 ^ i57;
         i57 = i55 >>> 7 ^ i55;
         i55 = i57 << 2 ^ i57;
         i57 = i55 >>> 20 ^ i55 | 1;
         i55 = 0;
         i60 = i56;
         i56 = i58;
         while (1) {
          if ((i56 | 0) == -1) {
           break L8;
          }
          i58 = (i55 | 0) == 0 ? i57 : i55;
          i61 = i58 + i60 & i53;
          i62 = i52 + (i61 << 2) | 0;
          i63 = HEAP32[i62 >> 2] | 0;
          if ((i63 | 0) == (i54 | 0)) {
           i59 = i62;
           break;
          } else {
           i55 = i58;
           i60 = i61;
           i56 = i63;
          }
         }
        }
        if ((i59 | 0) == 0) {
         break;
        }
        HEAP32[i50 >> 2] = 0;
        HEAP32[i33 + (i46 << 3) + 4 >> 2] = 0;
        i51 = HEAP32[i26 >> 2] | 0;
        i31 = 15;
        break L6;
       }
      } while (0);
      i52 = i33 + (i46 << 3) + 4 | 0;
      __ZN3WTF9HashTableIjjNS_17IdentityExtractorENS_7IntHashIjEENS_29UnsignedWithZeroKeyHashTraitsIjEES5_E3addINS_22IdentityHashTranslatorIS3_EERKjSB_EENS_18HashTableAddResultINS_17HashTableIteratorIjjS1_S3_S5_S5_EEEEOT0_OT1_(i13, i44, i52, i52);
      i64 = i47;
      i65 = i48;
     }
    } while (0);
    L18 : do {
     if ((i31 | 0) == 15) {
      i31 = 0;
      if (i51 >>> 0 <= i46 >>> 0) {
       i31 = 16;
       break L3;
      }
      i50 = HEAP32[(HEAP32[i34 >> 2] | 0) + (i46 << 2) >> 2] | 0;
      i52 = HEAP32[i50 + 8 >> 2] | 0;
      i56 = (HEAP32[i52 + 12 >> 2] & 4 | 0) == 0;
      L21 : do {
       if (!i56) {
        i60 = HEAP32[i52 + 44 >> 2] | 0;
        i55 = HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0;
        do {
         if ((i60 | 0) != (i55 | 0)) {
          if ((HEAP32[i60 + 12 >> 2] | 0) == (HEAP32[i55 + 12 >> 2] | 0)) {
           if ((HEAP32[i60 + 16 >> 2] | 0) == (HEAP32[i55 + 16 >> 2] | 0)) {
            break;
           }
          }
          if (i56) {
           break L21;
          }
          i54 = HEAP32[i52 + 44 >> 2] | 0;
          i53 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
          if ((i54 | 0) != (i53 | 0)) {
           if ((HEAP32[i54 + 12 >> 2] | 0) != (HEAP32[i53 + 12 >> 2] | 0)) {
            break L21;
           }
           if ((HEAP32[i54 + 16 >> 2] | 0) != (HEAP32[i53 + 16 >> 2] | 0)) {
            break L21;
           }
          }
          HEAP32[i10 >> 2] = i50;
          i64 = i47;
          i65 = i50;
          break L18;
         }
        } while (0);
        HEAP32[i9 >> 2] = i50;
        i64 = i50;
        i65 = i48;
        break L18;
       }
      } while (0);
      i52 = HEAP32[i35 >> 2] | 0;
      L35 : do {
       if ((i52 | 0) == 0) {
        i31 = 36;
       } else {
        i56 = HEAP32[i42 >> 2] | 0;
        i55 = i50 | 0;
        i60 = HEAP32[i55 >> 2] | 0;
        i53 = HEAP32[i60 + 16 >> 2] | 0;
        if (i53 >>> 0 > 127 >>> 0) {
         i66 = i53 >>> 7;
        } else {
         i66 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i60) | 0;
        }
        i60 = (i66 >>> 23) + ~i66 | 0;
        i53 = i60 << 12 ^ i60;
        i60 = i53 >>> 7 ^ i53;
        i53 = i60 << 2 ^ i60;
        i60 = i53 >>> 20 ^ i53 | 1;
        i53 = i66;
        i54 = 0;
        while (1) {
         i57 = i53 & i56;
         i67 = i52 + (i57 << 3) | 0;
         i63 = HEAP32[i67 >> 2] | 0;
         i61 = i63;
         if ((i61 | 0) == 0) {
          i31 = 36;
          break L35;
         } else if ((i61 | 0) != (-1 | 0)) {
          if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i63, HEAP32[i55 >> 2] | 0) | 0) {
           break;
          }
         }
         i63 = (i54 | 0) == 0 ? i60 : i54;
         i53 = i63 + i57 | 0;
         i54 = i63;
        }
        if ((i67 | 0) == 0) {
         i31 = 36;
        }
       }
      } while (0);
      do {
       if ((i31 | 0) == 36) {
        i31 = 0;
        i52 = (i46 | 0) != 0;
        if (i52) {
         i50 = i46 - 1 | 0;
         if (i32 >>> 0 <= i50 >>> 0) {
          i31 = 38;
          break L3;
         }
         if ((HEAP32[i33 + (i50 << 3) >> 2] | 0) == 0) {
          break;
         }
        }
        i50 = (i46 | 0) == (i36 | 0);
        if (!i50) {
         i54 = i46 + 1 | 0;
         if (i32 >>> 0 <= i54 >>> 0) {
          i31 = 42;
          break L3;
         }
         if ((HEAP32[i33 + (i54 << 3) >> 2] | 0) == 0) {
          break;
         }
        }
        if (i52) {
         i52 = i46 - 1 | 0;
         if (i32 >>> 0 <= i52 >>> 0) {
          i31 = 46;
          break L3;
         }
         i68 = (HEAP32[i33 + (i52 << 3) + 4 >> 2] | 0) + 1 | 0;
        } else {
         i68 = 0;
        }
        if (i50) {
         i69 = i68 + 1 | 0;
        } else {
         i50 = i46 + 1 | 0;
         if (i32 >>> 0 <= i50 >>> 0) {
          i31 = 51;
          break L3;
         }
         i69 = HEAP32[i33 + (i50 << 3) + 4 >> 2] | 0;
        }
        do {
         if ((i69 - i68 | 0) == 1) {
          if (i68 >>> 0 >= (HEAP32[i37 >> 2] | 0) >>> 0) {
           break;
          }
          HEAP32[i14 >> 2] = HEAP32[(HEAP32[i38 >> 2] | 0) + (i68 << 2) >> 2];
          if ((HEAP32[i26 >> 2] | 0) >>> 0 <= i46 >>> 0) {
           i31 = 56;
           break L3;
          }
          HEAP32[i15 >> 2] = HEAP32[(HEAP32[i34 >> 2] | 0) + (i46 << 2) >> 2];
          __ZN3WTF9HashTableIPN7WebCore15DOMPatchSupport6DigestENS_12KeyValuePairIS4_S4_EENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_7HashMapIS4_S4_SA_NS_10HashTraitsIS4_EESD_E18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISF_SA_EES4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S6_S8_SA_SF_SD_EEEEOT0_OT1_(i16, i39, i14, i15);
          if ((HEAP8[i40] & 1) != 0) {
           i64 = i47;
           i65 = i48;
           break L18;
          }
          HEAP32[(HEAP32[i41 >> 2] | 0) + 4 >> 2] = HEAP32[i15 >> 2];
          i64 = i47;
          i65 = i48;
          break L18;
         }
        } while (0);
        if ((HEAP32[i26 >> 2] | 0) >>> 0 <= i46 >>> 0) {
         i31 = 60;
         break L3;
        }
        if (__ZN7WebCore15DOMPatchSupport23removeChildAndMoveToNewEPNS0_6DigestERi(i1, HEAP32[(HEAP32[i34 >> 2] | 0) + (i46 << 2) >> 2] | 0, i5) | 0) {
         i64 = i47;
         i65 = i48;
         break L18;
        } else {
         i70 = 0;
         break L1;
        }
       }
      } while (0);
      if ((HEAP32[i26 >> 2] | 0) >>> 0 <= i46 >>> 0) {
       i31 = 63;
       break L3;
      }
      if (__ZN7WebCore15DOMPatchSupport23removeChildAndMoveToNewEPNS0_6DigestERi(i1, HEAP32[(HEAP32[i34 >> 2] | 0) + (i46 << 2) >> 2] | 0, i5) | 0) {
       i64 = i47;
       i65 = i48;
      } else {
       i70 = 0;
       break L1;
      }
     }
    } while (0);
    i50 = i46 + 1 | 0;
    i52 = HEAP32[i26 >> 2] | 0;
    if (i50 >>> 0 < i52 >>> 0) {
     i46 = i50;
     i47 = i64;
     i48 = i65;
     i49 = i52;
    } else {
     i28 = i64;
     i29 = i65;
     i30 = i37;
     i31 = 66;
     break L1;
    }
   }
   if ((i31 | 0) == 16) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i31 | 0) == 5) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i31 | 0) == 51) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i31 | 0) == 56) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i31 | 0) == 38) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i31 | 0) == 42) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i31 | 0) == 46) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i31 | 0) == 60) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i31 | 0) == 63) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
  }
 } while (0);
 do {
  if ((i31 | 0) == 66) {
   _memset(i17 | 0, 0, 20) | 0;
   L89 : do {
    if ((HEAP32[i30 >> 2] | 0) == 0) {
     i71 = 0;
    } else {
     i65 = HEAP32[i8 + 20 >> 2] | 0;
     i64 = HEAP32[i25 >> 2] | 0;
     i26 = i17 | 0;
     i15 = i17 | 0;
     i14 = i17 + 8 | 0;
     i16 = 0;
     while (1) {
      if (i65 >>> 0 <= i16 >>> 0) {
       break;
      }
      i68 = i64 + (i16 << 3) | 0;
      L94 : do {
       if ((HEAP32[i68 >> 2] | 0) != 0) {
        i69 = i64 + (i16 << 3) + 4 | 0;
        i67 = HEAP32[i69 >> 2] | 0;
        HEAP32[i18 >> 2] = i67;
        i66 = HEAP32[i26 >> 2] | 0;
        L96 : do {
         if ((i66 | 0) != 0) {
          i51 = HEAP32[i14 >> 2] | 0;
          i13 = i67 + ~(i67 << 15) | 0;
          i59 = (i13 >>> 10 ^ i13) * 9 & -1;
          i13 = i59 >>> 6 ^ i59;
          i59 = i13 + ~(i13 << 11) | 0;
          i13 = i59 >>> 16 ^ i59;
          i59 = i51 & i13;
          i27 = i66 + (i59 << 2) | 0;
          i3 = HEAP32[i27 >> 2] | 0;
          if ((i3 | 0) == (i67 | 0)) {
           i72 = i27;
          } else {
           i27 = (i13 >>> 23) + ~i13 | 0;
           i13 = i27 << 12 ^ i27;
           i27 = i13 >>> 7 ^ i13;
           i13 = i27 << 2 ^ i27;
           i27 = i13 >>> 20 ^ i13 | 1;
           i13 = 0;
           i37 = i59;
           i59 = i3;
           while (1) {
            if ((i59 | 0) == -1) {
             break L96;
            }
            i3 = (i13 | 0) == 0 ? i27 : i13;
            i49 = i3 + i37 & i51;
            i48 = i66 + (i49 << 2) | 0;
            i47 = HEAP32[i48 >> 2] | 0;
            if ((i47 | 0) == (i67 | 0)) {
             i72 = i48;
             break;
            } else {
             i13 = i3;
             i37 = i49;
             i59 = i47;
            }
           }
          }
          if ((i72 | 0) == 0) {
           break;
          }
          HEAP32[i68 >> 2] = 0;
          HEAP32[i69 >> 2] = 0;
          break L94;
         }
        } while (0);
        __ZN3WTF9HashTableIjjNS_17IdentityExtractorENS_7IntHashIjEENS_29UnsignedWithZeroKeyHashTraitsIjEES5_E3addINS_22IdentityHashTranslatorIS3_EERKjSB_EENS_18HashTableAddResultINS_17HashTableIteratorIjjS1_S3_S5_S5_EEEEOT0_OT1_(i19, i15, i18, i18);
        __ZN7WebCore15DOMPatchSupport14markNodeAsUsedEPNS0_6DigestE(i1, HEAP32[i68 >> 2] | 0);
       }
      } while (0);
      i68 = i16 + 1 | 0;
      i69 = HEAP32[i30 >> 2] | 0;
      if (i68 >>> 0 < i69 >>> 0) {
       i16 = i68;
      } else {
       i71 = i69;
       break L89;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
     return 0;
    }
   } while (0);
   L109 : do {
    if (!((i28 | 0) == 0 & (i29 | 0) == 0 | (i71 | 0) == 0)) {
     i16 = i4 | 0;
     i15 = i11 | 0;
     i14 = i23 + 8 | 0;
     i26 = i23 | 0;
     i64 = i21 + 8 | 0;
     i65 = i21 | 0;
     i69 = 0;
     i68 = i71;
     i67 = i28;
     L111 : while (1) {
      do {
       if ((i67 | 0) != 0) {
        i66 = HEAP32[(HEAP32[i16 >> 2] | 0) + (i69 << 2) >> 2] | 0;
        i59 = HEAP32[i66 + 8 >> 2] | 0;
        if ((HEAP32[i59 + 12 >> 2] & 4 | 0) == 0) {
         break;
        }
        i37 = HEAP32[i59 + 44 >> 2] | 0;
        i59 = HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0;
        if ((i37 | 0) != (i59 | 0)) {
         if ((HEAP32[i37 + 12 >> 2] | 0) != (HEAP32[i59 + 12 >> 2] | 0)) {
          break;
         }
         if ((HEAP32[i37 + 16 >> 2] | 0) != (HEAP32[i59 + 16 >> 2] | 0)) {
          break;
         }
        }
        if (i68 >>> 0 <= i69 >>> 0) {
         i31 = 88;
         break L111;
        }
        HEAP32[i20 >> 2] = i66;
        __ZN3WTF9HashTableIPN7WebCore15DOMPatchSupport6DigestENS_12KeyValuePairIS4_S4_EENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_7HashMapIS4_S4_SA_NS_10HashTraitsIS4_EESD_E18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISF_SA_EES4_RS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S6_S8_SA_SF_SD_EEEEOT0_OT1_(i21, i15, i20, i9);
        if ((HEAP8[i64] & 1) != 0) {
         break;
        }
        HEAP32[(HEAP32[i65 >> 2] | 0) + 4 >> 2] = HEAP32[i9 >> 2];
       }
      } while (0);
      do {
       if ((HEAP32[i10 >> 2] | 0) != 0) {
        if ((HEAP32[i30 >> 2] | 0) >>> 0 <= i69 >>> 0) {
         i31 = 93;
         break L111;
        }
        i66 = HEAP32[(HEAP32[i16 >> 2] | 0) + (i69 << 2) >> 2] | 0;
        i59 = HEAP32[i66 + 8 >> 2] | 0;
        if ((HEAP32[i59 + 12 >> 2] & 4 | 0) == 0) {
         break;
        }
        i37 = HEAP32[i59 + 44 >> 2] | 0;
        i59 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
        if ((i37 | 0) != (i59 | 0)) {
         if ((HEAP32[i37 + 12 >> 2] | 0) != (HEAP32[i59 + 12 >> 2] | 0)) {
          break;
         }
         if ((HEAP32[i37 + 16 >> 2] | 0) != (HEAP32[i59 + 16 >> 2] | 0)) {
          break;
         }
        }
        HEAP32[i22 >> 2] = i66;
        __ZN3WTF9HashTableIPN7WebCore15DOMPatchSupport6DigestENS_12KeyValuePairIS4_S4_EENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_7HashMapIS4_S4_SA_NS_10HashTraitsIS4_EESD_E18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISF_SA_EES4_RS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S6_S8_SA_SF_SD_EEEEOT0_OT1_(i23, i15, i22, i10);
        if ((HEAP8[i14] & 1) != 0) {
         break;
        }
        HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] = HEAP32[i10 >> 2];
       }
      } while (0);
      i66 = i69 + 1 | 0;
      i59 = HEAP32[i30 >> 2] | 0;
      if (i66 >>> 0 >= i59 >>> 0) {
       break L109;
      }
      i69 = i66;
      i68 = i59;
      i67 = HEAP32[i9 >> 2] | 0;
     }
     if ((i31 | 0) == 88) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return 0;
     } else if ((i31 | 0) == 93) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return 0;
     }
    }
   } while (0);
   i67 = HEAP32[i11 >> 2] | 0;
   i68 = HEAP32[i11 + 4 >> 2] | 0;
   i69 = i67 + (i68 << 3) | 0;
   L138 : do {
    if ((HEAP32[i11 + 12 >> 2] | 0) == 0) {
     i31 = 107;
    } else {
     L140 : do {
      if ((i68 | 0) == 0) {
       i73 = i67;
      } else {
       i26 = i67;
       while (1) {
        i14 = HEAP32[i26 >> 2] | 0;
        if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
         i73 = i26;
         break L140;
        }
        i14 = i26 + 8 | 0;
        if ((i14 | 0) == (i69 | 0)) {
         i31 = 107;
         break L138;
        } else {
         i26 = i14;
        }
       }
      }
     } while (0);
     if ((i73 | 0) == (i69 | 0)) {
      i31 = 107;
      break;
     } else {
      i74 = i73;
     }
     while (1) {
      if (!(__ZN7WebCore15DOMPatchSupport14innerPatchNodeEPNS0_6DigestES2_Ri(i1, HEAP32[i74 + 4 >> 2] | 0, HEAP32[i74 >> 2] | 0, i5) | 0)) {
       i75 = 0;
       break L138;
      }
      i26 = i74 + 8 | 0;
      if ((i26 | 0) == (i69 | 0)) {
       i31 = 107;
       break L138;
      } else {
       i76 = i26;
      }
      while (1) {
       i26 = HEAP32[i76 >> 2] | 0;
       if (!((i26 | 0) == (-1 | 0) | (i26 | 0) == 0)) {
        break;
       }
       i26 = i76 + 8 | 0;
       if ((i26 | 0) == (i69 | 0)) {
        i31 = 107;
        break L138;
       } else {
        i76 = i26;
       }
      }
      if ((i76 | 0) == (i69 | 0)) {
       i31 = 107;
       break;
      } else {
       i74 = i76;
      }
     }
    }
   } while (0);
   L152 : do {
    if ((i31 | 0) == 107) {
     i69 = HEAP32[i8 + 20 >> 2] | 0;
     L154 : do {
      if ((i69 | 0) != 0) {
       i68 = HEAP32[i25 >> 2] | 0;
       i26 = i4 | 0;
       i14 = i1 + 4 | 0;
       i15 = i2 | 0;
       i16 = i7 | 0;
       i65 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i67 | 0) == 0) {
        i64 = 0;
        while (1) {
         if ((HEAP32[i68 + (i64 << 3) >> 2] | 0) == 0) {
          if ((HEAP32[i30 >> 2] | 0) >>> 0 <= i64 >>> 0) {
           break;
          }
          i59 = HEAP32[(HEAP32[i26 >> 2] | 0) + (i64 << 2) >> 2] | 0;
          i66 = __ZNK7WebCore13ContainerNode9childNodeEj(i2, i64) | 0;
          i37 = HEAP32[i14 >> 2] | 0;
          i13 = HEAP32[i59 + 8 >> 2] | 0;
          HEAP32[i16 >> 2] = i13;
          if ((i13 | 0) != 0) {
           i51 = i13 + 8 | 0;
           HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
          }
          i51 = __ZN7WebCore9DOMEditor12insertBeforeEPNS_4NodeEN3WTF10PassRefPtrIS1_EES2_Ri(i37, i15, i7, i66, i5) | 0;
          i66 = HEAP32[i16 >> 2] | 0;
          do {
           if ((i66 | 0) != 0) {
            i37 = i66 + 8 | 0;
            i13 = i37 | 0;
            i27 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
            HEAP32[i13 >> 2] = i27;
            if ((i27 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
           }
          } while (0);
          __ZN7WebCore15DOMPatchSupport14markNodeAsUsedEPNS0_6DigestE(i1, i59);
          if (!i51) {
           i75 = 0;
           break L152;
          }
         }
         i64 = i64 + 1 | 0;
         if (i64 >>> 0 >= i69 >>> 0) {
          break L154;
         }
        }
        __ZN3WTF15CrashOnOverflow10overflowedEv();
        return 0;
       } else {
        i77 = 0;
       }
       L172 : while (1) {
        do {
         if ((HEAP32[i68 + (i77 << 3) >> 2] | 0) == 0) {
          if ((HEAP32[i30 >> 2] | 0) >>> 0 <= i77 >>> 0) {
           break L172;
          }
          i64 = HEAP32[(HEAP32[i26 >> 2] | 0) + (i77 << 2) >> 2] | 0;
          i66 = i64;
          i37 = i66 + ~(i66 << 15) | 0;
          i66 = (i37 >>> 10 ^ i37) * 9 & -1;
          i37 = i66 >>> 6 ^ i66;
          i66 = i37 + ~(i37 << 11) | 0;
          i37 = i66 >>> 16 ^ i66;
          i66 = i65 & i37;
          i27 = i67 + (i66 << 3) | 0;
          i13 = HEAP32[i27 >> 2] | 0;
          L177 : do {
           if ((i13 | 0) == (i64 | 0)) {
            i78 = i27;
            i31 = 133;
           } else {
            i47 = (i37 >>> 23) + ~i37 | 0;
            i49 = i47 << 12 ^ i47;
            i47 = i49 >>> 7 ^ i49;
            i49 = i47 << 2 ^ i47;
            i47 = i49 >>> 20 ^ i49 | 1;
            i49 = 0;
            i3 = i66;
            i48 = i13;
            while (1) {
             if ((i48 | 0) == 0) {
              break L177;
             }
             i46 = (i49 | 0) == 0 ? i47 : i49;
             i34 = i46 + i3 & i65;
             i41 = i67 + (i34 << 3) | 0;
             i40 = HEAP32[i41 >> 2] | 0;
             if ((i40 | 0) == (i64 | 0)) {
              i78 = i41;
              i31 = 133;
              break;
             } else {
              i49 = i46;
              i3 = i34;
              i48 = i40;
             }
            }
           }
          } while (0);
          if ((i31 | 0) == 133) {
           i31 = 0;
           if ((i78 | 0) != 0) {
            break;
           }
          }
          i13 = __ZNK7WebCore13ContainerNode9childNodeEj(i2, i77) | 0;
          i66 = HEAP32[i14 >> 2] | 0;
          i37 = HEAP32[i64 + 8 >> 2] | 0;
          HEAP32[i16 >> 2] = i37;
          if ((i37 | 0) != 0) {
           i27 = i37 + 8 | 0;
           HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
          }
          i27 = __ZN7WebCore9DOMEditor12insertBeforeEPNS_4NodeEN3WTF10PassRefPtrIS1_EES2_Ri(i66, i15, i7, i13, i5) | 0;
          i13 = HEAP32[i16 >> 2] | 0;
          do {
           if ((i13 | 0) != 0) {
            i66 = i13 + 8 | 0;
            i37 = i66 | 0;
            i48 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
            HEAP32[i37 >> 2] = i48;
            if ((i48 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i66 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i66 - 8 | 0);
           }
          } while (0);
          __ZN7WebCore15DOMPatchSupport14markNodeAsUsedEPNS0_6DigestE(i1, i64);
          if (!i27) {
           i75 = 0;
           break L152;
          }
         }
        } while (0);
        i77 = i77 + 1 | 0;
        if (i77 >>> 0 >= i69 >>> 0) {
         break L154;
        }
       }
       __ZN3WTF15CrashOnOverflow10overflowedEv();
       return 0;
      }
     } while (0);
     i69 = HEAP32[i8 + 8 >> 2] | 0;
     if ((i69 | 0) == 0) {
      i75 = 1;
      break;
     }
     i16 = HEAP32[i8 >> 2] | 0;
     i15 = i1 + 4 | 0;
     i14 = i2 | 0;
     i65 = i24 | 0;
     i26 = 0;
     L197 : while (1) {
      i68 = HEAP32[i16 + (i26 << 3) >> 2] | 0;
      L199 : do {
       if ((i68 | 0) != 0) {
        i51 = HEAP32[i68 + 8 >> 2] | 0;
        i59 = (i51 | 0) == 0;
        if (!i59) {
         i13 = i51 + 8 | 0;
         HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
        }
        if (i69 >>> 0 <= i26 >>> 0) {
         break L197;
        }
        i13 = __ZNK7WebCore13ContainerNode9childNodeEj(i2, HEAP32[i16 + (i26 << 3) + 4 >> 2] | 0) | 0;
        L205 : do {
         if ((i51 | 0) != (i13 | 0)) {
          i66 = (HEAP32[i51 + 12 >> 2] & 4 | 0) == 0;
          do {
           if (!i66) {
            i48 = HEAP32[i51 + 44 >> 2] | 0;
            i37 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
            if ((i48 | 0) == (i37 | 0)) {
             break L205;
            }
            if ((HEAP32[i48 + 12 >> 2] | 0) == (HEAP32[i37 + 12 >> 2] | 0)) {
             if ((HEAP32[i48 + 16 >> 2] | 0) == (HEAP32[i37 + 16 >> 2] | 0)) {
              break L205;
             }
            }
            if (i66) {
             break;
            }
            i37 = HEAP32[i51 + 44 >> 2] | 0;
            i48 = HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0;
            if ((i37 | 0) == (i48 | 0)) {
             break L205;
            }
            if ((HEAP32[i37 + 12 >> 2] | 0) != (HEAP32[i48 + 12 >> 2] | 0)) {
             break;
            }
            if ((HEAP32[i37 + 16 >> 2] | 0) == (HEAP32[i48 + 16 >> 2] | 0)) {
             break L205;
            }
           }
          } while (0);
          i66 = HEAP32[i15 >> 2] | 0;
          HEAP32[i65 >> 2] = i51;
          i27 = __ZN7WebCore9DOMEditor12insertBeforeEPNS_4NodeEN3WTF10PassRefPtrIS1_EES2_Ri(i66, i14, i24, i13, i5) | 0;
          i66 = HEAP32[i65 >> 2] | 0;
          do {
           if ((i66 | 0) != 0) {
            i64 = i66 + 8 | 0;
            i48 = i64 | 0;
            i37 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
            HEAP32[i48 >> 2] = i37;
            if ((i37 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i64 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i64 - 8 | 0);
           }
          } while (0);
          if (i27) {
           break L199;
          } else {
           i75 = 0;
           break L152;
          }
         }
        } while (0);
        if (i59) {
         break;
        }
        i13 = i51 + 8 | 0;
        i66 = i13 | 0;
        i64 = (HEAP32[i66 >> 2] | 0) - 1 | 0;
        HEAP32[i66 >> 2] = i64;
        if ((i64 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
       }
      } while (0);
      i68 = i26 + 1 | 0;
      if (i68 >>> 0 < i69 >>> 0) {
       i26 = i68;
      } else {
       i75 = 1;
       break L152;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
     return 0;
    }
   } while (0);
   i67 = HEAP32[i17 >> 2] | 0;
   if ((i67 | 0) == 0) {
    i70 = i75;
    break;
   }
   __ZN3WTF8fastFreeEPv(i67);
   i70 = i75;
  }
 } while (0);
 i75 = HEAP32[i12 >> 2] | 0;
 if ((i75 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i75);
 }
 i75 = HEAP32[i11 >> 2] | 0;
 if ((i75 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i75);
 }
 i75 = i8 + 20 | 0;
 if ((HEAP32[i75 >> 2] | 0) != 0) {
  HEAP32[i75 >> 2] = 0;
 }
 i75 = i8 + 12 | 0;
 i11 = HEAP32[i75 >> 2] | 0;
 if ((i11 | 0) != 0) {
  HEAP32[i75 >> 2] = 0;
  HEAP32[i8 + 16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i11);
 }
 i11 = i8 + 8 | 0;
 if ((HEAP32[i11 >> 2] | 0) != 0) {
  HEAP32[i11 >> 2] = 0;
 }
 i11 = i8 | 0;
 i75 = HEAP32[i11 >> 2] | 0;
 if ((i75 | 0) == 0) {
  STACKTOP = i6;
  return i70 | 0;
 }
 HEAP32[i11 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i75);
 STACKTOP = i6;
 return i70 | 0;
}
function __ZN7WebCore15DOMPatchSupport4diffERKN3WTF6VectorINS1_6OwnPtrINS0_6DigestEEELj0ENS1_15CrashOnOverflowEEES9_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i5 = i2 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 48 | 0;
 i8 = i2 + 56 | 0;
 i9 = i2 + 72 | 0;
 i10 = i2 + 88 | 0;
 i11 = i2 + 96 | 0;
 i12 = i2 + 112 | 0;
 i13 = i4 + 8 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 i15 = (i14 | 0) == 0;
 do {
  if (i15) {
   i16 = 0;
   i17 = 0;
  } else {
   if (i14 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   } else {
    i18 = __ZN3WTF18fastMallocGoodSizeEj(i14 << 3) | 0;
    i16 = __ZN3WTF10fastMallocEj(i18) | 0;
    i17 = i18 >>> 3;
    break;
   }
  }
 } while (0);
 i18 = i3 + 8 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 if ((i19 | 0) == 0) {
  i20 = 0;
  i21 = 0;
 } else {
  if (i19 >>> 0 > 536870911 >>> 0) {
   _WTFCrash();
  }
  i22 = __ZN3WTF18fastMallocGoodSizeEj(i19 << 3) | 0;
  i23 = i22 >>> 3;
  i24 = __ZN3WTF10fastMallocEj(i22) | 0;
  i22 = 0;
  while (1) {
   HEAP32[i24 + (i22 << 3) >> 2] = 0;
   HEAP32[i24 + (i22 << 3) + 4 >> 2] = 0;
   i25 = i22 + 1 | 0;
   if (i25 >>> 0 < i19 >>> 0) {
    i22 = i25;
   } else {
    i20 = i23;
    i21 = i24;
    break;
   }
  }
 }
 if (!i15) {
  i15 = 0;
  while (1) {
   HEAP32[i16 + (i15 << 3) >> 2] = 0;
   HEAP32[i16 + (i15 << 3) + 4 >> 2] = 0;
   i15 = i15 + 1 | 0;
   if (i15 >>> 0 >= i14 >>> 0) {
    break;
   }
  }
 }
 i15 = HEAP32[i18 >> 2] | 0;
 L19 : do {
  if ((i15 | 0) != 0) {
   i24 = i3 | 0;
   i23 = i4 | 0;
   i22 = 0;
   i25 = i15;
   while (1) {
    if (i22 >>> 0 >= (HEAP32[i13 >> 2] | 0) >>> 0) {
     i26 = i25;
     i27 = 16;
     break;
    }
    i28 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[HEAP32[(HEAP32[i24 >> 2] | 0) + (i22 << 2) >> 2] >> 2] | 0, HEAP32[HEAP32[(HEAP32[i23 >> 2] | 0) + (i22 << 2) >> 2] >> 2] | 0) | 0;
    i29 = HEAP32[i18 >> 2] | 0;
    if (!i28) {
     i26 = i29;
     i27 = 16;
     break;
    }
    if (i29 >>> 0 <= i22 >>> 0) {
     i27 = 19;
     break;
    }
    if (i19 >>> 0 <= i22 >>> 0) {
     i27 = 21;
     break;
    }
    HEAP32[i21 + (i22 << 3) >> 2] = HEAP32[(HEAP32[i24 >> 2] | 0) + (i22 << 2) >> 2];
    HEAP32[i21 + (i22 << 3) + 4 >> 2] = i22;
    if ((HEAP32[i13 >> 2] | 0) >>> 0 <= i22 >>> 0) {
     i27 = 23;
     break;
    }
    if (i14 >>> 0 <= i22 >>> 0) {
     i27 = 25;
     break;
    }
    HEAP32[i16 + (i22 << 3) >> 2] = HEAP32[(HEAP32[i23 >> 2] | 0) + (i22 << 2) >> 2];
    HEAP32[i16 + (i22 << 3) + 4 >> 2] = i22;
    i29 = i22 + 1 | 0;
    i28 = HEAP32[i18 >> 2] | 0;
    if (i29 >>> 0 < i28 >>> 0) {
     i22 = i29;
     i25 = i28;
    } else {
     i26 = i28;
     i27 = 16;
     break;
    }
   }
   if ((i27 | 0) == 23) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 25) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 16) {
    if ((i26 | 0) == 0) {
     break;
    }
    i25 = i3 | 0;
    i22 = i4 | 0;
    i23 = 0;
    i24 = i26;
    while (1) {
     i28 = HEAP32[i13 >> 2] | 0;
     if (i23 >>> 0 >= i28 >>> 0) {
      break L19;
     }
     i29 = i24 - i23 - 1 | 0;
     if (i24 >>> 0 <= i29 >>> 0) {
      i27 = 29;
      break;
     }
     i30 = i28 - i23 - 1 | 0;
     if (i28 >>> 0 <= i30 >>> 0) {
      i27 = 31;
      break;
     }
     if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[HEAP32[(HEAP32[i25 >> 2] | 0) + (i29 << 2) >> 2] >> 2] | 0, HEAP32[HEAP32[(HEAP32[i22 >> 2] | 0) + (i30 << 2) >> 2] >> 2] | 0) | 0)) {
      break L19;
     }
     i30 = HEAP32[i18 >> 2] | 0;
     i29 = i30 - i23 - 1 | 0;
     i28 = (HEAP32[i13 >> 2] | 0) - i23 - 1 | 0;
     if (i30 >>> 0 <= i29 >>> 0) {
      i27 = 34;
      break;
     }
     if (i19 >>> 0 <= i29 >>> 0) {
      i27 = 36;
      break;
     }
     HEAP32[i21 + (i29 << 3) >> 2] = HEAP32[(HEAP32[i25 >> 2] | 0) + (i29 << 2) >> 2];
     HEAP32[i21 + (i29 << 3) + 4 >> 2] = i28;
     if ((HEAP32[i13 >> 2] | 0) >>> 0 <= i28 >>> 0) {
      i27 = 38;
      break;
     }
     if (i14 >>> 0 <= i28 >>> 0) {
      i27 = 40;
      break;
     }
     HEAP32[i16 + (i28 << 3) >> 2] = HEAP32[(HEAP32[i22 >> 2] | 0) + (i28 << 2) >> 2];
     HEAP32[i16 + (i28 << 3) + 4 >> 2] = i29;
     i23 = i23 + 1 | 0;
     i24 = HEAP32[i18 >> 2] | 0;
     if (i23 >>> 0 >= i24 >>> 0) {
      break L19;
     }
    }
    if ((i27 | 0) == 29) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i27 | 0) == 31) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i27 | 0) == 34) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i27 | 0) == 36) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i27 | 0) == 38) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i27 | 0) == 40) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   } else if ((i27 | 0) == 19) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 21) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 _memset(i5 | 0, 0, 20) | 0;
 _memset(i6 | 0, 0, 20) | 0;
 HEAP32[i7 >> 2] = 0;
 if ((HEAP32[i13 >> 2] | 0) != 0) {
  i26 = i4 | 0;
  i15 = i9 | 0;
  i24 = i9 + 4 | 0;
  i23 = i9 + 8 | 0;
  i22 = i5 | 0;
  i25 = i8;
  i29 = i7;
  i28 = 0;
  while (1) {
   i30 = HEAP32[(HEAP32[i26 >> 2] | 0) + (i28 << 2) >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   HEAP32[i24 >> 2] = 0;
   HEAP32[i23 >> 2] = 0;
   __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i8, i22, i30, i9);
   i30 = HEAP32[i25 >> 2] | 0;
   if ((HEAP32[i23 >> 2] | 0) != 0) {
    HEAP32[i23 >> 2] = 0;
   }
   i31 = HEAP32[i15 >> 2] | 0;
   if ((i31 | 0) != 0) {
    HEAP32[i15 >> 2] = 0;
    HEAP32[i24 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i31);
   }
   i31 = i30 + 4 | 0;
   i32 = i30 + 12 | 0;
   i33 = HEAP32[i32 >> 2] | 0;
   if ((i33 | 0) == (HEAP32[i30 + 8 >> 2] | 0)) {
    i30 = i33 + 1 | 0;
    i34 = i31 | 0;
    i35 = HEAP32[i34 >> 2] | 0;
    do {
     if (i35 >>> 0 > i7 >>> 0) {
      i27 = 54;
     } else {
      if ((i35 + (i33 << 2) | 0) >>> 0 <= i7 >>> 0) {
       i27 = 54;
       break;
      }
      __ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i31, i30);
      i36 = HEAP32[i34 >> 2] | 0;
      i37 = i36 + (i29 - i35 >> 2 << 2) | 0;
      i38 = i36;
     }
    } while (0);
    if ((i27 | 0) == 54) {
     i27 = 0;
     __ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i31, i30);
     i37 = i7;
     i38 = HEAP32[i34 >> 2] | 0;
    }
    HEAP32[i38 + (HEAP32[i32 >> 2] << 2) >> 2] = HEAP32[i37 >> 2];
   } else {
    HEAP32[(HEAP32[i31 >> 2] | 0) + (i33 << 2) >> 2] = HEAP32[i7 >> 2];
   }
   HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
   i28 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
   HEAP32[i7 >> 2] = i28;
   if (i28 >>> 0 >= (HEAP32[i13 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 HEAP32[i10 >> 2] = 0;
 if ((HEAP32[i18 >> 2] | 0) != 0) {
  i28 = i3 | 0;
  i7 = i12 | 0;
  i37 = i12 + 4 | 0;
  i38 = i12 + 8 | 0;
  i29 = i6 | 0;
  i24 = i11;
  i15 = i10;
  i23 = 0;
  while (1) {
   i25 = HEAP32[(HEAP32[i28 >> 2] | 0) + (i23 << 2) >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i37 >> 2] = 0;
   HEAP32[i38 >> 2] = 0;
   __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i11, i29, i25, i12);
   i25 = HEAP32[i24 >> 2] | 0;
   if ((HEAP32[i38 >> 2] | 0) != 0) {
    HEAP32[i38 >> 2] = 0;
   }
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
    HEAP32[i37 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i9);
   }
   i9 = i25 + 4 | 0;
   i22 = i25 + 12 | 0;
   i8 = HEAP32[i22 >> 2] | 0;
   if ((i8 | 0) == (HEAP32[i25 + 8 >> 2] | 0)) {
    i25 = i8 + 1 | 0;
    i26 = i9 | 0;
    i35 = HEAP32[i26 >> 2] | 0;
    do {
     if (i35 >>> 0 > i10 >>> 0) {
      i27 = 66;
     } else {
      if ((i35 + (i8 << 2) | 0) >>> 0 <= i10 >>> 0) {
       i27 = 66;
       break;
      }
      __ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i9, i25);
      i36 = HEAP32[i26 >> 2] | 0;
      i39 = i36 + (i15 - i35 >> 2 << 2) | 0;
      i40 = i36;
     }
    } while (0);
    if ((i27 | 0) == 66) {
     i27 = 0;
     __ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i9, i25);
     i39 = i10;
     i40 = HEAP32[i26 >> 2] | 0;
    }
    HEAP32[i40 + (HEAP32[i22 >> 2] << 2) >> 2] = HEAP32[i39 >> 2];
   } else {
    HEAP32[(HEAP32[i9 >> 2] | 0) + (i8 << 2) >> 2] = HEAP32[i10 >> 2];
   }
   HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
   i23 = (HEAP32[i10 >> 2] | 0) + 1 | 0;
   HEAP32[i10 >> 2] = i23;
   if (i23 >>> 0 >= (HEAP32[i18 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 i23 = i5 | 0;
 i10 = HEAP32[i23 >> 2] | 0;
 i39 = i5 + 4 | 0;
 i40 = HEAP32[i39 >> 2] | 0;
 i15 = i10 + (i40 << 4) | 0;
 L96 : do {
  if ((HEAP32[i5 + 12 >> 2] | 0) != 0) {
   L98 : do {
    if ((i40 | 0) == 0) {
     i41 = i10;
    } else {
     i37 = i10;
     while (1) {
      i7 = HEAP32[i37 >> 2] | 0;
      if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
       i41 = i37;
       break L98;
      }
      i37 = i37 + 16 | 0;
      if ((i37 | 0) == (i15 | 0)) {
       break L96;
      }
     }
    }
   } while (0);
   if ((i41 | 0) == (i15 | 0)) {
    break;
   }
   i22 = i6 | 0;
   i8 = i6 + 4 | 0;
   i9 = i4 | 0;
   i26 = i3 | 0;
   i25 = i6 + 8 | 0;
   i37 = i41;
   L104 : while (1) {
    i7 = i37 + 12 | 0;
    do {
     if ((HEAP32[i7 >> 2] | 0) == 1) {
      i38 = HEAP32[i22 >> 2] | 0;
      if ((i38 | 0) == 0) {
       i24 = HEAP32[i8 >> 2] | 0;
       i42 = i24 << 4 | 0;
       i43 = 0;
       i44 = i24;
      } else {
       i24 = HEAP32[i25 >> 2] | 0;
       i12 = i37 | 0;
       i29 = HEAP32[i12 >> 2] | 0;
       i11 = HEAP32[i29 + 16 >> 2] | 0;
       if (i11 >>> 0 > 127 >>> 0) {
        i45 = i11 >>> 7;
       } else {
        i45 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i29) | 0;
       }
       i29 = (i45 >>> 23) + ~i45 | 0;
       i11 = i29 << 12 ^ i29;
       i29 = i11 >>> 7 ^ i11;
       i11 = i29 << 2 ^ i29;
       i29 = i11 >>> 20 ^ i11 | 1;
       i11 = i45;
       i28 = 0;
       while (1) {
        i35 = i11 & i24;
        i32 = i38 + (i35 << 4) | 0;
        i33 = HEAP32[i32 >> 2] | 0;
        i31 = i33;
        if ((i31 | 0) == 0) {
         i46 = 0;
         break;
        } else if ((i31 | 0) != (-1 | 0)) {
         if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i33, HEAP32[i12 >> 2] | 0) | 0) {
          i46 = i32;
          break;
         }
        }
        i32 = (i28 | 0) == 0 ? i29 : i28;
        i11 = i32 + i35 | 0;
        i28 = i32;
       }
       i28 = HEAP32[i22 >> 2] | 0;
       i11 = HEAP32[i8 >> 2] | 0;
       i42 = (i46 | 0) == 0 ? i28 + (i11 << 4) | 0 : i46;
       i43 = i28;
       i44 = i11;
      }
      if ((i42 | 0) == (i43 + (i44 << 4) | 0)) {
       break;
      }
      i11 = i42 + 12 | 0;
      if ((HEAP32[i11 >> 2] | 0) != 1) {
       break;
      }
      if ((HEAP32[i7 >> 2] | 0) == 0) {
       i27 = 92;
       break L104;
      }
      i28 = i37 + 4 | 0;
      i29 = HEAP32[HEAP32[i28 >> 2] >> 2] | 0;
      if (i14 >>> 0 <= i29 >>> 0) {
       i27 = 94;
       break L104;
      }
      if ((HEAP32[i13 >> 2] | 0) >>> 0 <= i29 >>> 0) {
       i27 = 96;
       break L104;
      }
      i12 = i42 + 4 | 0;
      i38 = HEAP32[HEAP32[i12 >> 2] >> 2] | 0;
      HEAP32[i16 + (i29 << 3) >> 2] = HEAP32[(HEAP32[i9 >> 2] | 0) + (i29 << 2) >> 2];
      HEAP32[i16 + (i29 << 3) + 4 >> 2] = i38;
      if ((HEAP32[i11 >> 2] | 0) == 0) {
       i27 = 98;
       break L104;
      }
      i11 = HEAP32[HEAP32[i12 >> 2] >> 2] | 0;
      if (i19 >>> 0 <= i11 >>> 0) {
       i27 = 100;
       break L104;
      }
      if ((HEAP32[i18 >> 2] | 0) >>> 0 <= i11 >>> 0) {
       i27 = 102;
       break L104;
      }
      if ((HEAP32[i7 >> 2] | 0) == 0) {
       i27 = 104;
       break L104;
      }
      i12 = HEAP32[HEAP32[i28 >> 2] >> 2] | 0;
      HEAP32[i21 + (i11 << 3) >> 2] = HEAP32[(HEAP32[i26 >> 2] | 0) + (i11 << 2) >> 2];
      HEAP32[i21 + (i11 << 3) + 4 >> 2] = i12;
     }
    } while (0);
    i7 = i37 + 16 | 0;
    L132 : do {
     if ((i7 | 0) == (i15 | 0)) {
      i47 = i15;
     } else {
      i12 = i7;
      while (1) {
       i11 = HEAP32[i12 >> 2] | 0;
       if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
        i47 = i12;
        break L132;
       }
       i11 = i12 + 16 | 0;
       if ((i11 | 0) == (i15 | 0)) {
        i47 = i15;
        break;
       } else {
        i12 = i11;
       }
      }
     }
    } while (0);
    if ((i47 | 0) == ((HEAP32[i23 >> 2] | 0) + (HEAP32[i39 >> 2] << 4) | 0)) {
     break L96;
    } else {
     i37 = i47;
    }
   }
   if ((i27 | 0) == 92) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 94) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 96) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 98) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 100) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 102) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 104) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 i47 = HEAP32[i13 >> 2] | 0;
 L146 : do {
  if (i47 >>> 0 > 1 >>> 0) {
   i15 = i4 | 0;
   i42 = i3 | 0;
   i44 = 0;
   i43 = i47;
   L148 : while (1) {
    if (i14 >>> 0 <= i44 >>> 0) {
     i27 = 111;
     break;
    }
    i46 = i44 + 1 | 0;
    do {
     if ((HEAP32[i16 + (i44 << 3) >> 2] | 0) != 0) {
      if (i14 >>> 0 <= i46 >>> 0) {
       i27 = 114;
       break L148;
      }
      i45 = i16 + (i46 << 3) | 0;
      if ((HEAP32[i45 >> 2] | 0) != 0) {
       break;
      }
      i41 = (HEAP32[i16 + (i44 << 3) + 4 >> 2] | 0) + 1 | 0;
      if (i41 >>> 0 >= i19 >>> 0) {
       break;
      }
      i10 = i21 + (i41 << 3) | 0;
      if ((HEAP32[i10 >> 2] | 0) != 0) {
       break;
      }
      if (i43 >>> 0 <= i46 >>> 0) {
       i27 = 119;
       break L148;
      }
      if ((HEAP32[i18 >> 2] | 0) >>> 0 <= i41 >>> 0) {
       i27 = 121;
       break L148;
      }
      if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[HEAP32[(HEAP32[i15 >> 2] | 0) + (i46 << 2) >> 2] >> 2] | 0, HEAP32[HEAP32[(HEAP32[i42 >> 2] | 0) + (i41 << 2) >> 2] >> 2] | 0) | 0)) {
       break;
      }
      if ((HEAP32[i13 >> 2] | 0) >>> 0 <= i46 >>> 0) {
       i27 = 124;
       break L148;
      }
      HEAP32[i45 >> 2] = HEAP32[(HEAP32[i15 >> 2] | 0) + (i46 << 2) >> 2];
      HEAP32[i16 + (i46 << 3) + 4 >> 2] = i41;
      if ((HEAP32[i18 >> 2] | 0) >>> 0 <= i41 >>> 0) {
       i27 = 126;
       break L148;
      }
      HEAP32[i10 >> 2] = HEAP32[(HEAP32[i42 >> 2] | 0) + (i41 << 2) >> 2];
      HEAP32[i21 + (i41 << 3) + 4 >> 2] = i46;
     }
    } while (0);
    i41 = HEAP32[i13 >> 2] | 0;
    if ((i41 | 0) != 0 & i46 >>> 0 < (i41 - 1 | 0) >>> 0) {
     i44 = i46;
     i43 = i41;
    } else {
     i48 = i41;
     break L146;
    }
   }
   if ((i27 | 0) == 111) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 114) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 119) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 121) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 124) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 126) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  } else {
   i48 = i47;
  }
 } while (0);
 i47 = i48 - 1 | 0;
 L171 : do {
  if (!((i48 | 0) == 0 | (i47 | 0) == 0)) {
   i43 = i4 | 0;
   i44 = i3 | 0;
   i42 = i48;
   i15 = i47;
   i41 = i48;
   L173 : while (1) {
    if (i14 >>> 0 <= i15 >>> 0) {
     i27 = 132;
     break;
    }
    do {
     if ((HEAP32[i16 + (i15 << 3) >> 2] | 0) != 0) {
      i10 = i42 - 2 | 0;
      if (i14 >>> 0 <= i10 >>> 0) {
       i27 = 135;
       break L173;
      }
      i45 = i16 + (i10 << 3) | 0;
      if ((HEAP32[i45 >> 2] | 0) != 0) {
       break;
      }
      i40 = HEAP32[i16 + (i15 << 3) + 4 >> 2] | 0;
      if ((i40 | 0) == 0) {
       break;
      }
      i5 = i40 - 1 | 0;
      if (i19 >>> 0 <= i5 >>> 0) {
       i27 = 139;
       break L173;
      }
      i40 = i21 + (i5 << 3) | 0;
      if ((HEAP32[i40 >> 2] | 0) != 0) {
       break;
      }
      if (i41 >>> 0 <= i10 >>> 0) {
       i27 = 143;
       break L173;
      }
      if ((HEAP32[i18 >> 2] | 0) >>> 0 <= i5 >>> 0) {
       i27 = 145;
       break L173;
      }
      if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[HEAP32[(HEAP32[i43 >> 2] | 0) + (i10 << 2) >> 2] >> 2] | 0, HEAP32[HEAP32[(HEAP32[i44 >> 2] | 0) + (i5 << 2) >> 2] >> 2] | 0) | 0)) {
       break;
      }
      if ((HEAP32[i13 >> 2] | 0) >>> 0 <= i10 >>> 0) {
       i27 = 148;
       break L173;
      }
      HEAP32[i45 >> 2] = HEAP32[(HEAP32[i43 >> 2] | 0) + (i10 << 2) >> 2];
      HEAP32[i16 + (i10 << 3) + 4 >> 2] = i5;
      if ((HEAP32[i18 >> 2] | 0) >>> 0 <= i5 >>> 0) {
       i27 = 150;
       break L173;
      }
      HEAP32[i40 >> 2] = HEAP32[(HEAP32[i44 >> 2] | 0) + (i5 << 2) >> 2];
      HEAP32[i21 + (i5 << 3) + 4 >> 2] = i10;
     }
    } while (0);
    i46 = i15 - 1 | 0;
    i10 = HEAP32[i13 >> 2] | 0;
    if ((i10 | 0) == 0 | (i46 | 0) == 0) {
     break L171;
    } else {
     i42 = i15;
     i15 = i46;
     i41 = i10;
    }
   }
   if ((i27 | 0) == 132) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 135) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 139) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 143) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 145) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 148) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 150) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 i27 = i1 | 0;
 HEAP32[i27 >> 2] = 0;
 i13 = i1 + 4 | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i19;
 do {
  if ((i20 | 0) != 0) {
   i18 = __ZN3WTF18fastMallocGoodSizeEj(i20 << 3) | 0;
   HEAP32[i13 >> 2] = i18 >>> 3;
   i48 = __ZN3WTF10fastMallocEj(i18) | 0;
   HEAP32[i27 >> 2] = i48;
   if ((i48 | 0) == 0) {
    break;
   }
   _memcpy(i48 | 0, i21 | 0, i19 << 3) | 0;
  }
 } while (0);
 i19 = i1 + 12 | 0;
 HEAP32[i19 >> 2] = 0;
 i27 = i1 + 16 | 0;
 HEAP32[i27 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = i14;
 do {
  if ((i17 | 0) != 0) {
   i1 = __ZN3WTF18fastMallocGoodSizeEj(i17 << 3) | 0;
   HEAP32[i27 >> 2] = i1 >>> 3;
   i13 = __ZN3WTF10fastMallocEj(i1) | 0;
   HEAP32[i19 >> 2] = i13;
   if ((i13 | 0) == 0) {
    break;
   }
   _memcpy(i13 | 0, i16 | 0, i14 << 3) | 0;
  }
 } while (0);
 i14 = HEAP32[i6 >> 2] | 0;
 if ((i14 | 0) != 0) {
  i19 = HEAP32[i6 + 4 >> 2] | 0;
  if ((i19 | 0) > 0) {
   i6 = 0;
   while (1) {
    i27 = i14 + (i6 << 4) | 0;
    i17 = HEAP32[i27 >> 2] | 0;
    do {
     if ((i17 | 0) != -1) {
      i13 = i14 + (i6 << 4) + 12 | 0;
      if ((HEAP32[i13 >> 2] | 0) != 0) {
       HEAP32[i13 >> 2] = 0;
      }
      i13 = i14 + (i6 << 4) + 4 | 0;
      i1 = HEAP32[i13 >> 2] | 0;
      if ((i1 | 0) == 0) {
       i49 = i17;
      } else {
       HEAP32[i13 >> 2] = 0;
       HEAP32[i14 + (i6 << 4) + 8 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i1);
       i49 = HEAP32[i27 >> 2] | 0;
      }
      if ((i49 | 0) == 0) {
       break;
      }
      i1 = i49 | 0;
      i13 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
      if ((i13 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i49);
       break;
      } else {
       HEAP32[i1 >> 2] = i13;
       break;
      }
     }
    } while (0);
    i6 = i6 + 1 | 0;
    if ((i6 | 0) >= (i19 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i14);
 }
 i14 = HEAP32[i23 >> 2] | 0;
 if ((i14 | 0) != 0) {
  i23 = HEAP32[i39 >> 2] | 0;
  if ((i23 | 0) > 0) {
   i39 = 0;
   while (1) {
    i19 = i14 + (i39 << 4) | 0;
    i6 = HEAP32[i19 >> 2] | 0;
    do {
     if ((i6 | 0) != -1) {
      i49 = i14 + (i39 << 4) + 12 | 0;
      if ((HEAP32[i49 >> 2] | 0) != 0) {
       HEAP32[i49 >> 2] = 0;
      }
      i49 = i14 + (i39 << 4) + 4 | 0;
      i27 = HEAP32[i49 >> 2] | 0;
      if ((i27 | 0) == 0) {
       i50 = i6;
      } else {
       HEAP32[i49 >> 2] = 0;
       HEAP32[i14 + (i39 << 4) + 8 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i27);
       i50 = HEAP32[i19 >> 2] | 0;
      }
      if ((i50 | 0) == 0) {
       break;
      }
      i27 = i50 | 0;
      i49 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
      if ((i49 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i50);
       break;
      } else {
       HEAP32[i27 >> 2] = i49;
       break;
      }
     }
    } while (0);
    i39 = i39 + 1 | 0;
    if ((i39 | 0) >= (i23 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i14);
 }
 if ((i21 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i21);
 }
 if ((i16 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF8fastFreeEPv(i16);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15DOMPatchSupport9patchNodeERNS_4NodeERKN3WTF6StringERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 56 | 0;
 i12 = i5 + 64 | 0;
 i13 = i5 + 72 | 0;
 i14 = i5 + 80 | 0;
 i15 = i5 + 88 | 0;
 i16 = i5 + 96 | 0;
 do {
  if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) != (i2 | 0)) {
   i17 = i2 + 16 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   if ((i18 | 0) != 0) {
    if ((HEAP32[(HEAP32[i18 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i18 | 0)) {
     break;
    }
   }
   i18 = HEAP32[i2 + 24 >> 2] | 0;
   i19 = i1 + 8 | 0;
   __ZN7WebCore16DocumentFragment6createERNS_8DocumentE(i6, HEAP32[i19 >> 2] | 0);
   i20 = i6 | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   i20 = HEAP32[i19 >> 2] | 0;
   i19 = HEAP32[i17 >> 2] | 0;
   i22 = (i19 | 0) == 0;
   if (i22) {
    i23 = 1;
   } else {
    i23 = (HEAP32[i19 + 12 >> 2] & 4 | 0) == 0;
   }
   if ((HEAP8[i20 + 1576 | 0] & 1) == 0) {
    do {
     if (i23) {
      i24 = HEAP32[i20 + 692 >> 2] | 0;
     } else {
      if (i22) {
       i24 = 0;
       break;
      }
      if ((HEAP32[i19 + 12 >> 2] & 4 | 0) == 0) {
       i24 = 0;
       break;
      }
      i24 = i19;
     }
    } while (0);
    __ZN7WebCore16DocumentFragment8parseXMLERKN3WTF6StringEPNS_7ElementENS_19ParserContentPolicyE(i21, i3, i24, 2) | 0;
   } else {
    do {
     if (i23) {
      i25 = HEAP32[i20 + 692 >> 2] | 0;
     } else {
      if (i22) {
       i25 = 0;
       break;
      }
      if ((HEAP32[i19 + 12 >> 2] & 4 | 0) == 0) {
       i25 = 0;
       break;
      }
      i25 = i19;
     }
    } while (0);
    __ZN7WebCore16DocumentFragment9parseHTMLERKN3WTF6StringEPNS_7ElementENS_19ParserContentPolicyE(i21, i3, i25, 2);
   }
   i19 = HEAP32[i17 >> 2] | 0;
   i22 = i7 | 0;
   HEAP32[i22 >> 2] = 0;
   i20 = i7 + 4 | 0;
   HEAP32[i20 >> 2] = 0;
   i26 = i7 + 8 | 0;
   HEAP32[i26 >> 2] = 0;
   i27 = i19 + 36 | 0;
   i28 = HEAP32[i27 >> 2] | 0;
   L25 : do {
    if ((i28 | 0) != 0) {
     i29 = i8 | 0;
     i30 = i28;
     L27 : while (1) {
      __ZN7WebCore15DOMPatchSupport12createDigestEPNS_4NodeEPN3WTF7HashMapINS3_6StringEPNS0_6DigestENS3_10StringHashENS3_10HashTraitsIS5_EENS9_IS7_EEEE(i8, i1, i30, 0);
      i31 = HEAP32[i26 >> 2] | 0;
      if ((i31 | 0) == (HEAP32[i20 >> 2] | 0)) {
       i32 = i31 + 1 | 0;
       i33 = i32 + (i31 >>> 2) | 0;
       i34 = i33 >>> 0 > 16 >>> 0 ? i33 : 16;
       i33 = i34 >>> 0 > i32 >>> 0 ? i34 : i32;
       do {
        if (i31 >>> 0 < i33 >>> 0) {
         i32 = HEAP32[i22 >> 2] | 0;
         if (i33 >>> 0 > 1073741823 >>> 0) {
          break L27;
         }
         i34 = __ZN3WTF18fastMallocGoodSizeEj(i33 << 2) | 0;
         HEAP32[i20 >> 2] = i34 >>> 2;
         i35 = __ZN3WTF10fastMallocEj(i34) | 0;
         HEAP32[i22 >> 2] = i35;
         i34 = i32;
         _memcpy(i35 | 0, i34 | 0, i31 << 2) | 0;
         if ((i32 | 0) == 0) {
          break;
         }
         if ((HEAP32[i22 >> 2] | 0) == (i32 | 0)) {
          HEAP32[i22 >> 2] = 0;
          HEAP32[i20 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i34);
        }
       } while (0);
       i33 = (HEAP32[i22 >> 2] | 0) + (HEAP32[i26 >> 2] << 2) | 0;
       i34 = HEAP32[i29 >> 2] | 0;
       HEAP32[i29 >> 2] = 0;
       HEAP32[i33 >> 2] = i34;
       i36 = HEAP32[i26 >> 2] | 0;
      } else {
       i34 = (HEAP32[i22 >> 2] | 0) + (i31 << 2) | 0;
       i33 = HEAP32[i29 >> 2] | 0;
       HEAP32[i29 >> 2] = 0;
       HEAP32[i34 >> 2] = i33;
       i36 = HEAP32[i26 >> 2] | 0;
      }
      HEAP32[i26 >> 2] = i36 + 1;
      i30 = HEAP32[i30 + 28 >> 2] | 0;
      if ((i30 | 0) == 0) {
       break L25;
      }
     }
     _WTFCrash();
     return 0;
    }
   } while (0);
   __ZNK3WTF6String5lowerEv(i9, i3);
   i28 = i10 | 0;
   HEAP32[i28 >> 2] = 0;
   i17 = i10 + 4 | 0;
   HEAP32[i17 >> 2] = 0;
   i30 = i10 + 8 | 0;
   HEAP32[i30 >> 2] = 0;
   i29 = HEAP32[i27 >> 2] | 0;
   L43 : do {
    if ((i29 | 0) != (i2 | 0)) {
     i33 = i11 | 0;
     i34 = i29;
     L45 : while (1) {
      __ZN7WebCore15DOMPatchSupport12createDigestEPNS_4NodeEPN3WTF7HashMapINS3_6StringEPNS0_6DigestENS3_10StringHashENS3_10HashTraitsIS5_EENS9_IS7_EEEE(i11, i1, i34, 0);
      i32 = HEAP32[i30 >> 2] | 0;
      if ((i32 | 0) == (HEAP32[i17 >> 2] | 0)) {
       i35 = i32 + 1 | 0;
       i37 = i35 + (i32 >>> 2) | 0;
       i38 = i37 >>> 0 > 16 >>> 0 ? i37 : 16;
       i37 = i38 >>> 0 > i35 >>> 0 ? i38 : i35;
       do {
        if (i32 >>> 0 < i37 >>> 0) {
         i35 = HEAP32[i28 >> 2] | 0;
         if (i37 >>> 0 > 1073741823 >>> 0) {
          break L45;
         }
         i38 = __ZN3WTF18fastMallocGoodSizeEj(i37 << 2) | 0;
         HEAP32[i17 >> 2] = i38 >>> 2;
         i39 = __ZN3WTF10fastMallocEj(i38) | 0;
         HEAP32[i28 >> 2] = i39;
         i38 = i35;
         _memcpy(i39 | 0, i38 | 0, i32 << 2) | 0;
         if ((i35 | 0) == 0) {
          break;
         }
         if ((HEAP32[i28 >> 2] | 0) == (i35 | 0)) {
          HEAP32[i28 >> 2] = 0;
          HEAP32[i17 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i38);
        }
       } while (0);
       i37 = (HEAP32[i28 >> 2] | 0) + (HEAP32[i30 >> 2] << 2) | 0;
       i31 = HEAP32[i33 >> 2] | 0;
       HEAP32[i33 >> 2] = 0;
       HEAP32[i37 >> 2] = i31;
       i40 = HEAP32[i30 >> 2] | 0;
      } else {
       i31 = (HEAP32[i28 >> 2] | 0) + (i32 << 2) | 0;
       i37 = HEAP32[i33 >> 2] | 0;
       HEAP32[i33 >> 2] = 0;
       HEAP32[i31 >> 2] = i37;
       i40 = HEAP32[i30 >> 2] | 0;
      }
      HEAP32[i30 >> 2] = i40 + 1;
      i34 = HEAP32[i34 + 28 >> 2] | 0;
      if ((i34 | 0) == (i2 | 0)) {
       break L43;
      }
     }
     _WTFCrash();
     return 0;
    }
   } while (0);
   i29 = HEAP32[i21 + 36 >> 2] | 0;
   L61 : do {
    if ((i29 | 0) != 0) {
     i34 = i1 + 12 | 0;
     i33 = i14 | 0;
     i37 = i9 | 0;
     i31 = i13 | 0;
     i38 = i12 | 0;
     i35 = i29;
     L63 : while (1) {
      i39 = i35 + 12 | 0;
      i41 = HEAP32[i39 >> 2] | 0;
      do {
       if ((i41 & 4 | 0) == 0) {
        i42 = 63;
       } else {
        i43 = HEAP32[i35 + 44 >> 2] | 0;
        i44 = HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0;
        if ((i43 | 0) != (i44 | 0)) {
         if ((HEAP32[i43 + 12 >> 2] | 0) != (HEAP32[i44 + 12 >> 2] | 0)) {
          i42 = 63;
          break;
         }
         if ((HEAP32[i43 + 16 >> 2] | 0) != (HEAP32[i44 + 16 >> 2] | 0)) {
          i42 = 63;
          break;
         }
        }
        if ((i41 & 2 | 0) != 0) {
         if ((HEAP32[i35 + 36 >> 2] | 0) != 0) {
          i42 = 63;
          break;
         }
        }
        __ZN3WTF6StringC1EPKc(i12, H_BASE + 16 | 0);
        i44 = HEAP32[i37 >> 2] | 0;
        if ((i44 | 0) == 0) {
         i45 = 1;
        } else {
         i45 = (__ZN3WTF10StringImpl4findEPS0_(i44, HEAP32[i38 >> 2] | 0) | 0) == -1;
        }
        i44 = HEAP32[i38 >> 2] | 0;
        if ((i44 | 0) == 0) {
         if (i45) {
          break;
         } else {
          i42 = 63;
          break;
         }
        }
        i43 = i44 | 0;
        i46 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
        if ((i46 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i44);
         if (i45) {
          break;
         } else {
          i42 = 63;
          break;
         }
        } else {
         HEAP32[i43 >> 2] = i46;
         if (i45) {
          break;
         } else {
          i42 = 63;
          break;
         }
        }
       }
      } while (0);
      L83 : do {
       if ((i42 | 0) == 63) {
        i42 = 0;
        i41 = HEAP32[i39 >> 2] | 0;
        do {
         if ((i41 & 4 | 0) != 0) {
          i32 = HEAP32[i35 + 44 >> 2] | 0;
          i46 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
          if ((i32 | 0) != (i46 | 0)) {
           if ((HEAP32[i32 + 12 >> 2] | 0) != (HEAP32[i46 + 12 >> 2] | 0)) {
            break;
           }
           if ((HEAP32[i32 + 16 >> 2] | 0) != (HEAP32[i46 + 16 >> 2] | 0)) {
            break;
           }
          }
          if ((i41 & 2 | 0) != 0) {
           if ((HEAP32[i35 + 36 >> 2] | 0) != 0) {
            break;
           }
          }
          __ZN3WTF6StringC1EPKc(i13, H_BASE + 8 | 0);
          i46 = HEAP32[i37 >> 2] | 0;
          if ((i46 | 0) == 0) {
           i47 = 1;
          } else {
           i47 = (__ZN3WTF10StringImpl4findEPS0_(i46, HEAP32[i31 >> 2] | 0) | 0) == -1;
          }
          i46 = HEAP32[i31 >> 2] | 0;
          if ((i46 | 0) == 0) {
           if (i47) {
            break L83;
           } else {
            break;
           }
          }
          i32 = i46 | 0;
          i43 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
          if ((i43 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i46);
           if (i47) {
            break L83;
           } else {
            break;
           }
          } else {
           HEAP32[i32 >> 2] = i43;
           if (i47) {
            break L83;
           } else {
            break;
           }
          }
         }
        } while (0);
        __ZN7WebCore15DOMPatchSupport12createDigestEPNS_4NodeEPN3WTF7HashMapINS3_6StringEPNS0_6DigestENS3_10StringHashENS3_10HashTraitsIS5_EENS9_IS7_EEEE(i14, i1, i35, i34);
        i41 = HEAP32[i30 >> 2] | 0;
        if ((i41 | 0) == (HEAP32[i17 >> 2] | 0)) {
         i43 = i41 + 1 | 0;
         i32 = i43 + (i41 >>> 2) | 0;
         i46 = i32 >>> 0 > 16 >>> 0 ? i32 : 16;
         i32 = i46 >>> 0 > i43 >>> 0 ? i46 : i43;
         do {
          if (i41 >>> 0 < i32 >>> 0) {
           i43 = HEAP32[i28 >> 2] | 0;
           if (i32 >>> 0 > 1073741823 >>> 0) {
            break L63;
           }
           i46 = __ZN3WTF18fastMallocGoodSizeEj(i32 << 2) | 0;
           HEAP32[i17 >> 2] = i46 >>> 2;
           i44 = __ZN3WTF10fastMallocEj(i46) | 0;
           HEAP32[i28 >> 2] = i44;
           i46 = i43;
           _memcpy(i44 | 0, i46 | 0, i41 << 2) | 0;
           if ((i43 | 0) == 0) {
            break;
           }
           if ((HEAP32[i28 >> 2] | 0) == (i43 | 0)) {
            HEAP32[i28 >> 2] = 0;
            HEAP32[i17 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i46);
          }
         } while (0);
         i32 = (HEAP32[i28 >> 2] | 0) + (HEAP32[i30 >> 2] << 2) | 0;
         i46 = HEAP32[i33 >> 2] | 0;
         HEAP32[i33 >> 2] = 0;
         HEAP32[i32 >> 2] = i46;
         i48 = HEAP32[i30 >> 2] | 0;
        } else {
         i46 = (HEAP32[i28 >> 2] | 0) + (i41 << 2) | 0;
         i32 = HEAP32[i33 >> 2] | 0;
         HEAP32[i33 >> 2] = 0;
         HEAP32[i46 >> 2] = i32;
         i48 = HEAP32[i30 >> 2] | 0;
        }
        HEAP32[i30 >> 2] = i48 + 1;
       }
      } while (0);
      i35 = HEAP32[i35 + 28 >> 2] | 0;
      if ((i35 | 0) == 0) {
       break L61;
      }
     }
     _WTFCrash();
     return 0;
    }
   } while (0);
   i29 = HEAP32[i2 + 28 >> 2] | 0;
   L119 : do {
    if ((i29 | 0) != 0) {
     i35 = i15 | 0;
     i33 = i29;
     L121 : while (1) {
      __ZN7WebCore15DOMPatchSupport12createDigestEPNS_4NodeEPN3WTF7HashMapINS3_6StringEPNS0_6DigestENS3_10StringHashENS3_10HashTraitsIS5_EENS9_IS7_EEEE(i15, i1, i33, 0);
      i34 = HEAP32[i30 >> 2] | 0;
      if ((i34 | 0) == (HEAP32[i17 >> 2] | 0)) {
       i31 = i34 + 1 | 0;
       i37 = i31 + (i34 >>> 2) | 0;
       i38 = i37 >>> 0 > 16 >>> 0 ? i37 : 16;
       i37 = i38 >>> 0 > i31 >>> 0 ? i38 : i31;
       do {
        if (i34 >>> 0 < i37 >>> 0) {
         i31 = HEAP32[i28 >> 2] | 0;
         if (i37 >>> 0 > 1073741823 >>> 0) {
          break L121;
         }
         i38 = __ZN3WTF18fastMallocGoodSizeEj(i37 << 2) | 0;
         HEAP32[i17 >> 2] = i38 >>> 2;
         i39 = __ZN3WTF10fastMallocEj(i38) | 0;
         HEAP32[i28 >> 2] = i39;
         i38 = i31;
         _memcpy(i39 | 0, i38 | 0, i34 << 2) | 0;
         if ((i31 | 0) == 0) {
          break;
         }
         if ((HEAP32[i28 >> 2] | 0) == (i31 | 0)) {
          HEAP32[i28 >> 2] = 0;
          HEAP32[i17 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i38);
        }
       } while (0);
       i37 = (HEAP32[i28 >> 2] | 0) + (HEAP32[i30 >> 2] << 2) | 0;
       i38 = HEAP32[i35 >> 2] | 0;
       HEAP32[i35 >> 2] = 0;
       HEAP32[i37 >> 2] = i38;
       i49 = HEAP32[i30 >> 2] | 0;
      } else {
       i38 = (HEAP32[i28 >> 2] | 0) + (i34 << 2) | 0;
       i37 = HEAP32[i35 >> 2] | 0;
       HEAP32[i35 >> 2] = 0;
       HEAP32[i38 >> 2] = i37;
       i49 = HEAP32[i30 >> 2] | 0;
      }
      HEAP32[i30 >> 2] = i49 + 1;
      i33 = HEAP32[i33 + 28 >> 2] | 0;
      if ((i33 | 0) == 0) {
       break L119;
      }
     }
     _WTFCrash();
     return 0;
    }
   } while (0);
   if (__ZN7WebCore15DOMPatchSupport18innerPatchChildrenEPNS_13ContainerNodeERKN3WTF6VectorINS3_6OwnPtrINS0_6DigestEEELj0ENS3_15CrashOnOverflowEEESB_Ri(i1, i19, i7, i10, i4) | 0) {
    i50 = i21;
    i42 = 105;
   } else {
    HEAP32[i4 >> 2] = 0;
    i29 = HEAP32[i1 + 4 >> 2] | 0;
    i33 = i16 | 0;
    HEAP32[i33 >> 2] = i21;
    i35 = __ZN7WebCore9DOMEditor12replaceChildEPNS_4NodeEN3WTF10PassRefPtrIS1_EES2_Ri(i29, i19 | 0, i16, i2, i4) | 0;
    i29 = HEAP32[i33 >> 2] | 0;
    do {
     if ((i29 | 0) != 0) {
      i33 = i29 + 8 | 0;
      i37 = i33 | 0;
      i38 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
      HEAP32[i37 >> 2] = i38;
      if ((i38 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
     }
    } while (0);
    if (i35) {
     i50 = 0;
     i42 = 105;
    } else {
     i51 = 0;
     i52 = 0;
    }
   }
   do {
    if ((i42 | 0) == 105) {
     if ((i18 | 0) == 0) {
      i51 = HEAP32[i27 >> 2] | 0;
      i52 = i50;
      break;
     } else {
      i51 = HEAP32[i18 + 28 >> 2] | 0;
      i52 = i50;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i30 >> 2] | 0;
   if ((i18 | 0) != 0) {
    i27 = HEAP32[i28 >> 2] | 0;
    i35 = i27 + (i18 << 2) | 0;
    i18 = i27;
    while (1) {
     i27 = HEAP32[i18 >> 2] | 0;
     if ((i27 | 0) != 0) {
      __ZN7WebCore15DOMPatchSupport6DigestD2Ev(i27);
      __ZdlPv(i27);
     }
     i18 = i18 + 4 | 0;
     if ((i18 | 0) == (i35 | 0)) {
      break;
     }
    }
    HEAP32[i30 >> 2] = 0;
   }
   i35 = HEAP32[i28 >> 2] | 0;
   if ((i35 | 0) != 0) {
    HEAP32[i28 >> 2] = 0;
    HEAP32[i17 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i35);
   }
   i35 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i35 | 0) != 0) {
     i18 = i35 | 0;
     i27 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i35);
      break;
     } else {
      HEAP32[i18 >> 2] = i27;
      break;
     }
    }
   } while (0);
   i35 = HEAP32[i26 >> 2] | 0;
   if ((i35 | 0) != 0) {
    i17 = HEAP32[i22 >> 2] | 0;
    i28 = i17 + (i35 << 2) | 0;
    i35 = i17;
    while (1) {
     i17 = HEAP32[i35 >> 2] | 0;
     if ((i17 | 0) != 0) {
      __ZN7WebCore15DOMPatchSupport6DigestD2Ev(i17);
      __ZdlPv(i17);
     }
     i35 = i35 + 4 | 0;
     if ((i35 | 0) == (i28 | 0)) {
      break;
     }
    }
    HEAP32[i26 >> 2] = 0;
   }
   i28 = HEAP32[i22 >> 2] | 0;
   if ((i28 | 0) != 0) {
    HEAP32[i22 >> 2] = 0;
    HEAP32[i20 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i28);
   }
   if ((i52 | 0) == 0) {
    i53 = i51;
    STACKTOP = i5;
    return i53 | 0;
   }
   i28 = i52 + 8 | 0;
   i35 = i28 | 0;
   i17 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
   HEAP32[i35 >> 2] = i17;
   if ((i17 | 0) >= 1) {
    i53 = i51;
    STACKTOP = i5;
    return i53 | 0;
   }
   if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
    i53 = i51;
    STACKTOP = i5;
    return i53 | 0;
   }
   __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
   i53 = i51;
   STACKTOP = i5;
   return i53 | 0;
  }
 } while (0);
 __ZN7WebCore15DOMPatchSupport13patchDocumentERKN3WTF6StringE(i1, i3);
 i53 = 0;
 STACKTOP = i5;
 return i53 | 0;
}
function __ZN7WebCore15DOMPatchSupport12createDigestEPNS_4NodeEPN3WTF7HashMapINS3_6StringEPNS0_6DigestENS3_10StringHashENS3_10HashTraitsIS5_EENS9_IS7_EEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 384 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 160 | 0;
 i15 = i5 + 168 | 0;
 i16 = i5 + 176 | 0;
 i17 = i5 + 184 | 0;
 i18 = i5 + 192 | 0;
 i19 = i5 + 296 | 0;
 i20 = i5 + 304 | 0;
 i21 = i5 + 328 | 0;
 i22 = i5 + 336 | 0;
 i23 = i5 + 360 | 0;
 i24 = i5 + 368 | 0;
 i25 = __Znwj(24) | 0;
 i26 = i25;
 HEAP32[i25 >> 2] = 0;
 HEAP32[i25 + 4 >> 2] = 0;
 HEAP32[i25 + 8 >> 2] = i3;
 HEAP32[i25 + 12 >> 2] = 0;
 HEAP32[i25 + 16 >> 2] = 0;
 HEAP32[i25 + 20 >> 2] = 0;
 HEAP32[i12 >> 2] = i26;
 __ZN3WTF4SHA1C1Ev(i13);
 i27 = i3;
 HEAP32[i14 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i27 >> 2] | 0) + 76 >> 2] & 1](i3) | 0;
 __ZN3WTF4SHA18addBytesEPKhj(i13, i14, 4);
 i14 = i3;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 64 >> 2] & 1](i15, i3);
 __ZNK3WTF6String4utf8ENS_14ConversionModeE(i11, i15, 0);
 i28 = i11 | 0;
 i11 = HEAP32[i28 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i29 = 0;
  i30 = 0;
 } else {
  i29 = HEAP32[i11 + 4 >> 2] | 0;
  i30 = i11 + 8 | 0;
 }
 __ZN3WTF4SHA18addBytesEPKhj(i13, i30, i29);
 i29 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i29 | 0) != 0) {
   i28 = i29 | 0;
   i30 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
   if ((i30 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i29);
    break;
   } else {
    HEAP32[i28 >> 2] = i30;
    break;
   }
  }
 } while (0);
 i29 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i29 | 0) != 0) {
   i15 = i29 | 0;
   i30 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i30 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i29);
    break;
   } else {
    HEAP32[i15 >> 2] = i30;
    break;
   }
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 68 >> 2] & 1](i16, i3);
 __ZNK3WTF6String4utf8ENS_14ConversionModeE(i10, i16, 0);
 i14 = i10 | 0;
 i10 = HEAP32[i14 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i31 = 0;
  i32 = 0;
 } else {
  i31 = HEAP32[i10 + 4 >> 2] | 0;
  i32 = i10 + 8 | 0;
 }
 __ZN3WTF4SHA18addBytesEPKhj(i13, i32, i31);
 i31 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i31 | 0) != 0) {
   i14 = i31 | 0;
   i32 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i32 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i31);
    break;
   } else {
    HEAP32[i14 >> 2] = i32;
    break;
   }
  }
 } while (0);
 i31 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i31 | 0) != 0) {
   i16 = i31 | 0;
   i32 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i32 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i31);
    break;
   } else {
    HEAP32[i16 >> 2] = i32;
    break;
   }
  }
 } while (0);
 do {
  if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i27 >> 2] | 0) + 76 >> 2] & 1](i3) | 0) == 1) {
   do {
    if ((HEAP32[i3 + 12 >> 2] & 2 | 0) != 0) {
     i31 = HEAP32[i3 + 36 >> 2] | 0;
     if ((i31 | 0) == 0) {
      break;
     }
     i32 = i17 | 0;
     i16 = i9 | 0;
     i14 = i31;
     while (1) {
      __ZN7WebCore15DOMPatchSupport12createDigestEPNS_4NodeEPN3WTF7HashMapINS3_6StringEPNS0_6DigestENS3_10StringHashENS3_10HashTraitsIS5_EENS9_IS7_EEEE(i17, i2, i14, i4);
      i31 = HEAP32[i32 >> 2] | 0;
      HEAP32[i32 >> 2] = 0;
      __ZNK3WTF6String4utf8ENS_14ConversionModeE(i9, i31 | 0, 0);
      i10 = HEAP32[i16 >> 2] | 0;
      if ((i10 | 0) == 0) {
       i33 = 0;
       i34 = 0;
      } else {
       i33 = HEAP32[i10 + 4 >> 2] | 0;
       i34 = i10 + 8 | 0;
      }
      __ZN3WTF4SHA18addBytesEPKhj(i13, i34, i33);
      i10 = HEAP32[i16 >> 2] | 0;
      do {
       if ((i10 | 0) != 0) {
        i29 = i10 | 0;
        i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
        if ((i30 | 0) == 0) {
         __ZN3WTF8fastFreeEPv(i10);
         break;
        } else {
         HEAP32[i29 >> 2] = i30;
         break;
        }
       }
      } while (0);
      i14 = HEAP32[i14 + 28 >> 2] | 0;
      i10 = i25 + 12 | 0;
      i30 = i25 + 20 | 0;
      i29 = HEAP32[i30 >> 2] | 0;
      if ((i29 | 0) == (HEAP32[i25 + 16 >> 2] | 0)) {
       __ZN3WTF6VectorINS_6OwnPtrIN7WebCore15DOMPatchSupport6DigestEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i10, i29 + 1 | 0);
       HEAP32[(HEAP32[i10 >> 2] | 0) + (HEAP32[i30 >> 2] << 2) >> 2] = i31;
      } else {
       HEAP32[(HEAP32[i10 >> 2] | 0) + (i29 << 2) >> 2] = i31;
      }
      HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
      if ((i14 | 0) == 0) {
       break;
      }
     }
    }
   } while (0);
   i14 = i3 + 48 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   i32 = HEAP32[i16 + 4 >> 2] | 0;
   i30 = (i32 & 1 | 0) == 0;
   if (i30) {
    i35 = i32 >>> 1 & 134217727;
   } else {
    i35 = HEAP32[i16 + 32 >> 2] | 0;
   }
   if ((i35 | 0) == 0) {
    break;
   }
   if (i30) {
    i36 = i32 >>> 1 & 134217727;
   } else {
    i36 = HEAP32[i16 + 32 >> 2] | 0;
   }
   __ZN3WTF4SHA1C1Ev(i18);
   L62 : do {
    if ((i36 | 0) != 0) {
     i16 = i7 | 0;
     i32 = i19 | 0;
     i30 = i6 | 0;
     i29 = 0;
     while (1) {
      i10 = HEAP32[i14 >> 2] | 0;
      i15 = HEAP32[i10 + 4 >> 2] | 0;
      i28 = (i15 & 1 | 0) == 0;
      if (i28) {
       i37 = i15 >>> 1 & 134217727;
      } else {
       i37 = HEAP32[i10 + 32 >> 2] | 0;
      }
      if (i37 >>> 0 <= i29 >>> 0) {
       break;
      }
      if (i28) {
       i38 = i10 + 20 | 0;
      } else {
       i38 = HEAP32[i10 + 24 >> 2] | 0;
      }
      __ZNK7WebCore13QualifiedName8toStringEv(i19, i38 + (i29 << 3) | 0);
      __ZNK3WTF6String4utf8ENS_14ConversionModeE(i7, i19, 0);
      i10 = HEAP32[i16 >> 2] | 0;
      if ((i10 | 0) == 0) {
       i39 = 0;
       i40 = 0;
      } else {
       i39 = HEAP32[i10 + 4 >> 2] | 0;
       i40 = i10 + 8 | 0;
      }
      __ZN3WTF4SHA18addBytesEPKhj(i18, i40, i39);
      i10 = HEAP32[i16 >> 2] | 0;
      do {
       if ((i10 | 0) != 0) {
        i28 = i10 | 0;
        i15 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
        if ((i15 | 0) == 0) {
         __ZN3WTF8fastFreeEPv(i10);
         break;
        } else {
         HEAP32[i28 >> 2] = i15;
         break;
        }
       }
      } while (0);
      i10 = HEAP32[i32 >> 2] | 0;
      do {
       if ((i10 | 0) != 0) {
        i31 = i10 | 0;
        i15 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
        if ((i15 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i10);
         break;
        } else {
         HEAP32[i31 >> 2] = i15;
         break;
        }
       }
      } while (0);
      __ZNK3WTF6String4utf8ENS_14ConversionModeE(i6, i38 + (i29 << 3) + 4 | 0, 0);
      i10 = HEAP32[i30 >> 2] | 0;
      if ((i10 | 0) == 0) {
       i41 = 0;
       i42 = 0;
      } else {
       i41 = HEAP32[i10 + 4 >> 2] | 0;
       i42 = i10 + 8 | 0;
      }
      __ZN3WTF4SHA18addBytesEPKhj(i18, i42, i41);
      i10 = HEAP32[i30 >> 2] | 0;
      do {
       if ((i10 | 0) != 0) {
        i15 = i10 | 0;
        i31 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
        if ((i31 | 0) == 0) {
         __ZN3WTF8fastFreeEPv(i10);
         break;
        } else {
         HEAP32[i15 >> 2] = i31;
         break;
        }
       }
      } while (0);
      i29 = i29 + 1 | 0;
      if (i29 >>> 0 >= i36 >>> 0) {
       break L62;
      }
     }
     _WTFCrash();
    }
   } while (0);
   __ZN3WTF4SHA111computeHashERNSt3__15arrayIhLj20EEE(i18, i20);
   __ZN3WTF12base64EncodeEPKvjNS_18Base64EncodePolicyE(i21, i20 | 0, 10, 0);
   i14 = i21 | 0;
   i29 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   i30 = i25 + 4 | 0;
   i32 = HEAP32[i30 >> 2] | 0;
   HEAP32[i30 >> 2] = i29;
   do {
    if ((i32 | 0) != 0) {
     i29 = i32 | 0;
     i30 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i30 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i29 >> 2] = i30;
      break;
     }
    }
   } while (0);
   i32 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i30 = i32 | 0;
     i29 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
     if ((i29 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i30 >> 2] = i29;
      break;
     }
    }
   } while (0);
   __ZNK3WTF6String4utf8ENS_14ConversionModeE(i8, i25 + 4 | 0, 0);
   i32 = i8 | 0;
   i14 = HEAP32[i32 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i43 = 0;
    i44 = 0;
   } else {
    i43 = HEAP32[i14 + 4 >> 2] | 0;
    i44 = i14 + 8 | 0;
   }
   __ZN3WTF4SHA18addBytesEPKhj(i13, i44, i43);
   i14 = HEAP32[i32 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i32 = i14 | 0;
   i29 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
   if ((i29 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i14);
    break;
   } else {
    HEAP32[i32 >> 2] = i29;
    break;
   }
  }
 } while (0);
 __ZN3WTF4SHA111computeHashERNSt3__15arrayIhLj20EEE(i13, i22);
 __ZN3WTF12base64EncodeEPKvjNS_18Base64EncodePolicyE(i23, i22 | 0, 10, 0);
 i22 = i23 | 0;
 i23 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 i13 = i25;
 i25 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i23;
 do {
  if ((i25 | 0) != 0) {
   i23 = i25 | 0;
   i13 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i25);
    break;
   } else {
    HEAP32[i23 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i25 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i25 | 0) != 0) {
   i22 = i25 | 0;
   i13 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i25);
    break;
   } else {
    HEAP32[i22 >> 2] = i13;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  i45 = i26;
  i46 = i1 | 0;
  HEAP32[i46 >> 2] = i45;
  STACKTOP = i5;
  return;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore15DOMPatchSupport6DigestEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i24, i4 | 0, HEAP32[i12 >> 2] | 0, i12);
 i45 = HEAP32[i12 >> 2] | 0;
 i46 = i1 | 0;
 HEAP32[i46 >> 2] = i45;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15DOMPatchSupport14innerPatchNodeEPNS0_6DigestES2_Ri(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i3 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i2 >> 2] | 0, HEAP32[i3 >> 2] | 0) | 0) {
  i13 = 1;
  STACKTOP = i5;
  return i13 | 0;
 }
 i14 = HEAP32[i2 + 8 >> 2] | 0;
 i15 = HEAP32[i3 + 8 >> 2] | 0;
 i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 76 >> 2] & 1](i15) | 0;
 i17 = i14;
 L4 : do {
  if ((i16 | 0) == (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 76 >> 2] & 1](i14) | 0)) {
   i18 = i15;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 64 >> 2] & 1](i6, i15);
   i19 = i14;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 64 >> 2] & 1](i7, i14);
   i20 = i6 | 0;
   i21 = i7 | 0;
   i22 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i20 >> 2] | 0, HEAP32[i21 >> 2] | 0) | 0;
   i23 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i21 = i23 | 0;
     i24 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i21 >> 2] = i24;
      break;
     }
    }
   } while (0);
   i23 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i23 | 0) == 0) {
     if (!i22) {
      break L4;
     }
    } else {
     i24 = i23 | 0;
     i21 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      if (i22) {
       break;
      } else {
       break L4;
      }
     } else {
      HEAP32[i24 >> 2] = i21;
      if (i22) {
       break;
      } else {
       break L4;
      }
     }
    }
   } while (0);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 68 >> 2] & 1](i9, i14);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 68 >> 2] & 1](i10, i15);
   i22 = i9 | 0;
   i23 = i10 | 0;
   i20 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i22 >> 2] | 0, HEAP32[i23 >> 2] | 0) | 0;
   i21 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i23 = i21 | 0;
     i24 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i23 >> 2] = i24;
      break;
     }
    }
   } while (0);
   i21 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i19 = i21 | 0;
     i24 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i19 >> 2] = i24;
      break;
     }
    }
   } while (0);
   do {
    if (!i20) {
     i21 = HEAP32[i1 + 4 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 68 >> 2] & 1](i11, i15);
     i22 = __ZN7WebCore9DOMEditor12setNodeValueEPNS_4NodeERKN3WTF6StringERi(i21, i14, i11, i4) | 0;
     i21 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i21 | 0) != 0) {
       i24 = i21 | 0;
       i19 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
       if ((i19 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i21);
        break;
       } else {
        HEAP32[i24 >> 2] = i19;
        break;
       }
      }
     } while (0);
     if (i22) {
      break;
     } else {
      i13 = 0;
     }
     STACKTOP = i5;
     return i13 | 0;
    }
   } while (0);
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 76 >> 2] & 1](i14) | 0) != 1) {
    i13 = 1;
    STACKTOP = i5;
    return i13 | 0;
   }
   i18 = i14;
   L44 : do {
    if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i2 + 4 >> 2] | 0, HEAP32[i3 + 4 >> 2] | 0) | 0)) {
     i20 = i14 + 48 | 0;
     i21 = HEAP32[i20 >> 2] | 0;
     L46 : do {
      if ((i21 | 0) != 0) {
       i19 = HEAP32[i21 + 4 >> 2] | 0;
       if ((i19 & 1 | 0) == 0) {
        i25 = i19 >>> 1 & 134217727;
       } else {
        i25 = HEAP32[i21 + 32 >> 2] | 0;
       }
       if ((i25 | 0) == 0) {
        break;
       }
       i24 = i1 + 4 | 0;
       i23 = i21;
       i26 = i19;
       while (1) {
        i19 = (i26 & 1 | 0) == 0;
        if (i19) {
         i27 = i26 >>> 1 & 134217727;
        } else {
         i27 = HEAP32[i23 + 32 >> 2] | 0;
        }
        if ((i27 | 0) == 0) {
         break L46;
        }
        if (i19) {
         i28 = i26 >>> 1 & 134217727;
        } else {
         i28 = HEAP32[i23 + 32 >> 2] | 0;
        }
        if ((i28 | 0) == 0) {
         i29 = 48;
         break;
        }
        if (i19) {
         i30 = i23 + 20 | 0;
        } else {
         i30 = HEAP32[i23 + 24 >> 2] | 0;
        }
        if (!(__ZN7WebCore9DOMEditor15removeAttributeEPNS_7ElementERKN3WTF6StringERi(HEAP32[i24 >> 2] | 0, i18, (HEAP32[i30 >> 2] | 0) + 12 | 0, i4) | 0)) {
         i13 = 0;
         i29 = 81;
         break;
        }
        i19 = HEAP32[i20 >> 2] | 0;
        i23 = i19;
        i26 = HEAP32[i19 + 4 >> 2] | 0;
       }
       if ((i29 | 0) == 48) {
        _WTFCrash();
        return 0;
       } else if ((i29 | 0) == 81) {
        STACKTOP = i5;
        return i13 | 0;
       }
      }
     } while (0);
     i20 = i15 + 48 | 0;
     i21 = HEAP32[i20 >> 2] | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     i22 = HEAP32[i21 + 4 >> 2] | 0;
     i26 = (i22 & 1 | 0) == 0;
     if (i26) {
      i31 = i22 >>> 1 & 134217727;
     } else {
      i31 = HEAP32[i21 + 32 >> 2] | 0;
     }
     if ((i31 | 0) == 0) {
      break;
     }
     if (i26) {
      i32 = i22 >>> 1 & 134217727;
     } else {
      i32 = HEAP32[i21 + 32 >> 2] | 0;
     }
     i21 = i1 + 4 | 0;
     i22 = 0;
     while (1) {
      if (i22 >>> 0 >= i32 >>> 0) {
       break L44;
      }
      i26 = HEAP32[i20 >> 2] | 0;
      i23 = HEAP32[i26 + 4 >> 2] | 0;
      i24 = (i23 & 1 | 0) == 0;
      if (i24) {
       i33 = i23 >>> 1 & 134217727;
      } else {
       i33 = HEAP32[i26 + 32 >> 2] | 0;
      }
      if (i33 >>> 0 <= i22 >>> 0) {
       i29 = 68;
       break;
      }
      if (i24) {
       i34 = i26 + 20 | 0;
      } else {
       i34 = HEAP32[i26 + 24 >> 2] | 0;
      }
      if (__ZN7WebCore9DOMEditor12setAttributeEPNS_7ElementERKN3WTF6StringES6_Ri(HEAP32[i21 >> 2] | 0, i18, (HEAP32[i34 + (i22 << 3) >> 2] | 0) + 12 | 0, i34 + (i22 << 3) + 4 | 0, i4) | 0) {
       i22 = i22 + 1 | 0;
      } else {
       i13 = 0;
       i29 = 83;
       break;
      }
     }
     if ((i29 | 0) == 68) {
      _WTFCrash();
      return 0;
     } else if ((i29 | 0) == 83) {
      STACKTOP = i5;
      return i13 | 0;
     }
    }
   } while (0);
   i18 = __ZN7WebCore15DOMPatchSupport18innerPatchChildrenEPNS_13ContainerNodeERKN3WTF6VectorINS3_6OwnPtrINS0_6DigestEEELj0ENS3_15CrashOnOverflowEEESB_Ri(i1, i14, i2 + 12 | 0, i3 + 12 | 0, i4) | 0;
   __ZN3WTF7HashMapINS_6StringEPN7WebCore15DOMPatchSupport6DigestENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeERKS1_(i1 + 12 | 0, i12) | 0;
   i13 = i18;
   STACKTOP = i5;
   return i13 | 0;
  }
 } while (0);
 i12 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = HEAP32[i14 + 16 >> 2] | 0;
 i3 = i8 | 0;
 HEAP32[i3 >> 2] = i15;
 if ((i15 | 0) != 0) {
  i2 = i15 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = __ZN7WebCore9DOMEditor12replaceChildEPNS_4NodeEN3WTF10PassRefPtrIS1_EES2_Ri(i12, i1, i8, i14, i4) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i13 = i2;
  STACKTOP = i5;
  return i13 | 0;
 }
 i3 = i4 + 8 | 0;
 i4 = i3 | 0;
 i14 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i14;
 if ((i14 | 0) >= 1) {
  i13 = i2;
  STACKTOP = i5;
  return i13 | 0;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i13 = i2;
  STACKTOP = i5;
  return i13 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i13 = i2;
 STACKTOP = i5;
 return i13 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = i2 + 4 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i9 = 8;
   i10 = 0;
  } else {
   i11 = i8 << 1;
   i9 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i8 : i11;
   i10 = i8;
  }
  HEAP32[i7 >> 2] = i9;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = i9 - 1;
  i8 = __ZN3WTF10fastMallocEj(i9 << 4) | 0;
  if ((i9 | 0) > 0) {
   i11 = 0;
   while (1) {
    _memset(i8 + (i11 << 4) | 0, 0, 16) | 0;
    i11 = i11 + 1 | 0;
    if ((i11 | 0) >= (i9 | 0)) {
     break;
    }
   }
  }
  HEAP32[i5 >> 2] = i8;
  do {
   if ((i10 | 0) == 0) {
    HEAP32[i2 + 16 >> 2] = 0;
   } else {
    i8 = 0;
    while (1) {
     i9 = i8 << 4 | 0;
     i11 = HEAP32[i9 >> 2] | 0;
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E8reinsertEOS6_(i2, i9) | 0;
     }
     i8 = i8 + 1 | 0;
     if ((i8 | 0) == (i10 | 0)) {
      break;
     }
    }
    HEAP32[i2 + 16 >> 2] = 0;
    if ((i10 | 0) <= 0) {
     break;
    }
    _llvm_trap();
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(0);
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = i7;
 } else {
  i12 = i6;
  i13 = i2 + 8 | 0;
 }
 i6 = HEAP32[i13 >> 2] | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i10 = HEAP32[i3 + 16 >> 2] | 0;
 if (i10 >>> 0 > 127 >>> 0) {
  i14 = i10 >>> 7;
 } else {
  i14 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i14 >>> 23) + ~i14 | 0;
 i10 = i3 << 12 ^ i3;
 i3 = i10 >>> 7 ^ i10;
 i10 = i3 << 2 ^ i3;
 i3 = i10 >>> 20 ^ i10 | 1;
 i10 = 0;
 i8 = i14;
 i14 = 0;
 while (1) {
  i9 = i8 & i6;
  i15 = i12 + (i9 << 4) | 0;
  i11 = HEAP32[i15 >> 2] | 0;
  i16 = i11;
  if ((i16 | 0) == (-1 | 0)) {
   i17 = i15;
  } else if ((i16 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i11, HEAP32[i7 >> 2] | 0) | 0) {
    i18 = 21;
    break;
   } else {
    i17 = i10;
   }
  }
  i11 = (i14 | 0) == 0 ? i3 : i14;
  i10 = i17;
  i8 = i11 + i9 | 0;
  i14 = i11;
 }
 if ((i18 | 0) == 21) {
  i18 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 4) | 0;
  i14 = i1;
  HEAP32[i14 >> 2] = i15;
  HEAP32[i14 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i10 | 0) == 0) {
  i19 = i15;
 } else {
  _memset(i10 | 0, 0, 16) | 0;
  i15 = i2 + 16 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) - 1;
  i19 = i10;
 }
 i10 = HEAP32[i7 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i7 = i10 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i19 | 0;
 i15 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i10;
 do {
  if ((i15 | 0) != 0) {
   i10 = i15 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i15 = i19 + 12 | 0;
 i7 = i4 + 8 | 0;
 i10 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = i10;
 i10 = i19 + 4 | 0;
 i7 = i4 | 0;
 i15 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = i15;
 i15 = i19 + 8 | 0;
 i7 = i4 + 4 | 0;
 i4 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = i4;
 i4 = i2 + 12 | 0;
 i7 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i7;
 i4 = i2 + 16 | 0;
 i15 = i2 + 4 | 0;
 i10 = HEAP32[i15 >> 2] | 0;
 if (((HEAP32[i4 >> 2] | 0) + i7 << 1 | 0) < (i10 | 0)) {
  i20 = i19;
  i21 = i10;
 } else {
  i18 = (i10 | 0) == 0;
  if (i18) {
   i22 = 8;
  } else {
   i14 = i10 << 1;
   i22 = (i7 * 6 & -1 | 0) < (i14 | 0) ? i10 : i14;
  }
  i14 = HEAP32[i5 >> 2] | 0;
  HEAP32[i15 >> 2] = i22;
  HEAP32[i13 >> 2] = i22 - 1;
  i13 = __ZN3WTF10fastMallocEj(i22 << 4) | 0;
  if ((i22 | 0) > 0) {
   i7 = 0;
   while (1) {
    _memset(i13 + (i7 << 4) | 0, 0, 16) | 0;
    i7 = i7 + 1 | 0;
    if ((i7 | 0) >= (i22 | 0)) {
     break;
    }
   }
  }
  HEAP32[i5 >> 2] = i13;
  do {
   if (i18) {
    HEAP32[i4 >> 2] = 0;
    i23 = 0;
   } else {
    i13 = 0;
    i22 = 0;
    while (1) {
     i7 = i14 + (i13 << 4) | 0;
     i8 = HEAP32[i7 >> 2] | 0;
     if ((i8 | 0) == (-1 | 0) | (i8 | 0) == 0) {
      i24 = i22;
     } else {
      i8 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E8reinsertEOS6_(i2, i7) | 0;
      i24 = (i7 | 0) == (i19 | 0) ? i8 : i22;
     }
     i8 = i13 + 1 | 0;
     if ((i8 | 0) == (i10 | 0)) {
      break;
     } else {
      i13 = i8;
      i22 = i24;
     }
    }
    HEAP32[i4 >> 2] = 0;
    if ((i10 | 0) > 0) {
     i25 = 0;
    } else {
     i23 = i24;
     break;
    }
    while (1) {
     i22 = i14 + (i25 << 4) | 0;
     i13 = HEAP32[i22 >> 2] | 0;
     do {
      if ((i13 | 0) != -1) {
       i8 = i14 + (i25 << 4) + 12 | 0;
       if ((HEAP32[i8 >> 2] | 0) != 0) {
        HEAP32[i8 >> 2] = 0;
       }
       i8 = i14 + (i25 << 4) + 4 | 0;
       i7 = HEAP32[i8 >> 2] | 0;
       if ((i7 | 0) == 0) {
        i26 = i13;
       } else {
        HEAP32[i8 >> 2] = 0;
        HEAP32[i14 + (i25 << 4) + 8 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i7);
        i26 = HEAP32[i22 >> 2] | 0;
       }
       if ((i26 | 0) == 0) {
        break;
       }
       i7 = i26 | 0;
       i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
       if ((i8 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i26);
        break;
       } else {
        HEAP32[i7 >> 2] = i8;
        break;
       }
      }
     } while (0);
     i22 = i25 + 1 | 0;
     if ((i22 | 0) < (i10 | 0)) {
      i25 = i22;
     } else {
      i23 = i24;
      break;
     }
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i14);
  i20 = i23;
  i21 = HEAP32[i15 >> 2] | 0;
 }
 i15 = (HEAP32[i5 >> 2] | 0) + (i21 << 4) | 0;
 i21 = i1;
 HEAP32[i21 >> 2] = i20;
 HEAP32[i21 + 4 >> 2] = i15;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIjjNS_17IdentityExtractorENS_7IntHashIjEENS_29UnsignedWithZeroKeyHashTraitsIjEES5_E3addINS_22IdentityHashTranslatorIS3_EERKjSB_EENS_18HashTableAddResultINS_17HashTableIteratorIjjS1_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i7 = i2 + 4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i9 = 8;
    i10 = 0;
   } else {
    i11 = i8 << 1;
    i9 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i8 : i11;
    i10 = i8;
   }
   HEAP32[i7 >> 2] = i9;
   i7 = i2 + 8 | 0;
   HEAP32[i7 >> 2] = i9 - 1;
   i8 = i9 << 2;
   i11 = __ZN3WTF10fastMallocEj(i8) | 0;
   if ((i9 | 0) > 0) {
    _memset(i11 | 0, -1 | 0, i8 | 0) | 0;
   }
   HEAP32[i5 >> 2] = i11;
   if ((i10 | 0) == 0) {
    HEAP32[i2 + 16 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(0);
    i12 = HEAP32[i5 >> 2] | 0;
    i13 = i7;
    break;
   } else {
    _llvm_trap();
   }
  } else {
   i12 = i6;
   i13 = i2 + 8 | 0;
  }
 } while (0);
 i6 = HEAP32[i13 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i3 = i10 + ~(i10 << 15) | 0;
 i9 = (i3 >>> 10 ^ i3) * 9 & -1;
 i3 = i9 >>> 6 ^ i9;
 i9 = i3 + ~(i3 << 11) | 0;
 i3 = i9 >>> 16 ^ i9;
 i9 = i3 & i6;
 i7 = i12 + (i9 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == -1) {
   i14 = i7;
   i15 = 16;
  } else {
   i8 = (i3 >>> 23) + ~i3 | 0;
   i16 = i8 << 12 ^ i8;
   i8 = i16 >>> 7 ^ i16;
   i16 = i8 << 2 ^ i8;
   i8 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i7;
   i20 = i11;
   while (1) {
    if ((i20 | 0) == (i10 | 0)) {
     i15 = 13;
     break;
    }
    i21 = (i20 | 0) == -2 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i8 : i16;
    i23 = i22 + i18 & i6;
    i24 = i12 + (i23 << 2) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == -1) {
     i15 = 15;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i15 | 0) == 13) {
    i20 = i12 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i15 | 0) == 15) {
    if ((i21 | 0) == 0) {
     i14 = i24;
     i15 = 16;
     break;
    }
    HEAP32[i21 >> 2] = -1;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = i20;
    break;
   }
  }
 } while (0);
 if ((i15 | 0) == 16) {
  i26 = i14;
  i27 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i14 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i14;
 i4 = i2 + 4 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i27 >> 2] | 0) + i14 << 1 | 0) < (i2 | 0)) {
  i28 = i26;
  i29 = i2;
 } else {
  i21 = (i2 | 0) == 0;
  if (i21) {
   i30 = 8;
  } else {
   i24 = i2 << 1;
   i30 = (i14 * 6 & -1 | 0) < (i24 | 0) ? i2 : i24;
  }
  i24 = HEAP32[i5 >> 2] | 0;
  HEAP32[i4 >> 2] = i30;
  HEAP32[i13 >> 2] = i30 - 1;
  i14 = i30 << 2;
  i12 = __ZN3WTF10fastMallocEj(i14) | 0;
  if ((i30 | 0) > 0) {
   _memset(i12 | 0, -1 | 0, i14 | 0) | 0;
  }
  HEAP32[i5 >> 2] = i12;
  if (i21) {
   i31 = 0;
  } else {
   i21 = 0;
   i12 = 0;
   while (1) {
    i14 = i24 + (i21 << 2) | 0;
    i30 = HEAP32[i14 >> 2] | 0;
    if (i30 >>> 0 > 4294967293 >>> 0) {
     i32 = i12;
    } else {
     i6 = HEAP32[i5 >> 2] | 0;
     i10 = HEAP32[i13 >> 2] | 0;
     i11 = i30 + ~(i30 << 15) | 0;
     i7 = (i11 >>> 10 ^ i11) * 9 & -1;
     i11 = i7 >>> 6 ^ i7;
     i7 = i11 + ~(i11 << 11) | 0;
     i11 = i7 >>> 16 ^ i7;
     i7 = i10 & i11;
     i9 = i6 + (i7 << 2) | 0;
     i3 = HEAP32[i9 >> 2] | 0;
     L40 : do {
      if ((i3 | 0) == -1) {
       i33 = 0;
       i34 = i9;
       i15 = 27;
      } else {
       i20 = (i11 >>> 23) + ~i11 | 0;
       i18 = i20 << 12 ^ i20;
       i20 = i18 >>> 7 ^ i18;
       i18 = i20 << 2 ^ i20;
       i20 = i18 >>> 20 ^ i18 | 1;
       i18 = 0;
       i17 = 0;
       i16 = i7;
       i8 = i9;
       i25 = i3;
       while (1) {
        if ((i25 | 0) == (i30 | 0)) {
         i35 = i8;
         break L40;
        }
        i23 = (i25 | 0) == -2 ? i8 : i18;
        i22 = (i17 | 0) == 0 ? i20 : i17;
        i36 = i22 + i16 & i10;
        i37 = i6 + (i36 << 2) | 0;
        i38 = HEAP32[i37 >> 2] | 0;
        if ((i38 | 0) == -1) {
         i33 = i23;
         i34 = i37;
         i15 = 27;
         break;
        } else {
         i18 = i23;
         i17 = i22;
         i16 = i36;
         i8 = i37;
         i25 = i38;
        }
       }
      }
     } while (0);
     if ((i15 | 0) == 27) {
      i15 = 0;
      i35 = (i33 | 0) != 0 ? i33 : i34;
     }
     HEAP32[i35 >> 2] = i30;
     i32 = (i14 | 0) == (i26 | 0) ? i35 : i12;
    }
    i6 = i21 + 1 | 0;
    if ((i6 | 0) == (i2 | 0)) {
     i31 = i32;
     break;
    } else {
     i21 = i6;
     i12 = i32;
    }
   }
  }
  HEAP32[i27 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i24);
  i28 = i31;
  i29 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i29 << 2) | 0;
 i29 = i1;
 HEAP32[i29 >> 2] = i28;
 HEAP32[i29 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore15DOMPatchSupport13patchDocumentERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 248 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i3 + 96 | 0;
 i7 = i3 + 144 | 0;
 i8 = i3 + 224 | 0;
 i9 = i3 + 232 | 0;
 i10 = i3 + 240 | 0;
 i11 = i1 + 8 | 0;
 i12 = HEAP8[(HEAP32[i11 >> 2] | 0) + 1576 | 0] | 0;
 do {
  if ((i12 & 1) == 0) {
   if ((i12 & 2) != 0) {
    i13 = i5 | 0;
    HEAP32[i13 >> 2] = 0;
    __ZN7WebCore3URL10invalidateEv(i5);
    i14 = __Znwj(2288) | 0;
    __ZN7WebCore8DocumentC1EPNS_5FrameERKNS_3URLEjj(i14, 0, i5, 2, 0);
    i15 = HEAP32[i13 >> 2] | 0;
    if ((i15 | 0) == 0) {
     i16 = i14;
     break;
    }
    i13 = i15 | 0;
    i17 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
    if ((i17 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i15);
     i16 = i14;
     break;
    } else {
     HEAP32[i13 >> 2] = i17;
     i16 = i14;
     break;
    }
   }
   if ((i12 & 32) == 0) {
    i16 = 0;
    break;
   }
   i14 = i6 | 0;
   HEAP32[i14 >> 2] = 0;
   __ZN7WebCore3URL10invalidateEv(i6);
   i17 = __Znwj(2288) | 0;
   __ZN7WebCore8DocumentC1EPNS_5FrameERKNS_3URLEjj(i17, 0, i6, 0, 0);
   i13 = HEAP32[i14 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i16 = i17;
    break;
   }
   i14 = i13 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    i16 = i17;
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    i16 = i17;
    break;
   }
  } else {
   i17 = i4 | 0;
   HEAP32[i17 >> 2] = 0;
   __ZN7WebCore3URL10invalidateEv(i4);
   i15 = __ZN3WTF10fastMallocEj(2336) | 0;
   __ZN7WebCore12HTMLDocumentC1EPNS_5FrameERKNS_3URLEhj(i15, 0, i4, 1, 0);
   i14 = i15;
   i15 = HEAP32[i17 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i16 = i14;
    break;
   }
   i17 = i15 | 0;
   i13 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    i16 = i14;
    break;
   } else {
    HEAP32[i17 >> 2] = i13;
    i16 = i14;
    break;
   }
  }
 } while (0);
 if ((HEAP8[i16 + 1576 | 0] & 1) == 0) {
  i4 = __ZN3WTF10fastMallocEj(292) | 0;
  __ZN7WebCore17XMLDocumentParserC1ERNS_8DocumentEPNS_9FrameViewE(i4, i16, 0);
  i18 = i4;
 } else {
  i4 = __ZN3WTF10fastMallocEj(476) | 0;
  __ZN7WebCore18HTMLDocumentParserC1ERNS_12HTMLDocumentE(i4, i16);
  i18 = i4;
 }
 i4 = i18;
 i6 = HEAP32[(HEAP32[i18 >> 2] | 0) + 16 >> 2] | 0;
 __ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE(i7, i2);
 FUNCTION_TABLE_vii[i6 & 1](i4, i7);
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i7 + 36 | 0);
 i6 = i7 + 44 | 0;
 i12 = HEAP32[i6 >> 2] | 0;
 if ((i12 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i7 + 48 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i12);
 }
 i12 = HEAP32[i7 + 16 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i7 = i12 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i7 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i12 = i18;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 36 >> 2] & 15](i4);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 56 >> 2] & 15](i4);
 __ZN7WebCore15DOMPatchSupport12createDigestEPNS_4NodeEPN3WTF7HashMapINS3_6StringEPNS0_6DigestENS3_10StringHashENS3_10HashTraitsIS5_EENS9_IS7_EEEE(i8, i1, HEAP32[(HEAP32[i11 >> 2] | 0) + 692 >> 2] | 0, 0);
 i6 = i8 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore15DOMPatchSupport12createDigestEPNS_4NodeEPN3WTF7HashMapINS3_6StringEPNS0_6DigestENS3_10StringHashENS3_10HashTraitsIS5_EENS9_IS7_EEEE(i9, i1, HEAP32[i16 + 692 >> 2] | 0, i1 + 12 | 0);
 i6 = i9 | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = i10 | 0;
 HEAP32[i6 >> 2] = 0;
 if (!(__ZN7WebCore15DOMPatchSupport14innerPatchNodeEPNS0_6DigestES2_Ri(i1, i8, i9, i6) | 0)) {
  __ZN7WebCore8Document5writeERKN3WTF6StringEPS0_(HEAP32[i11 >> 2] | 0, i2, 0);
  __ZN7WebCore8Document5closeEv(HEAP32[i11 >> 2] | 0);
 }
 if ((i9 | 0) != 0) {
  __ZN7WebCore15DOMPatchSupport6DigestD2Ev(i9);
  __ZdlPv(i9);
 }
 if ((i8 | 0) != 0) {
  __ZN7WebCore15DOMPatchSupport6DigestD2Ev(i8);
  __ZdlPv(i8);
 }
 do {
  if ((i18 | 0) != 0) {
   i8 = i18 + 4 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 15](i4);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 if ((i16 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i16 + 8 | 0;
 i16 = i4 | 0;
 i12 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
 HEAP32[i16 >> 2] = i12;
 if ((i12 | 0) >= 1) {
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
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore15DOMPatchSupport6DigestEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore15DOMPatchSupport6DigestEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i8, 0) | 0;
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
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore15DOMPatchSupport6DigestEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i21, i18) | 0;
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
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore15DOMPatchSupport6DigestEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i1, i2, i3) {
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
    if ((i24 | 0) == 0) {
     i25 = 9;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 9) {
    i25 = 0;
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
function __ZN3WTF9HashTableIPN7WebCore15DOMPatchSupport6DigestENS_12KeyValuePairIS4_S4_EENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_7HashMapIS4_S4_SA_NS_10HashTraitsIS4_EESD_E18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISF_SA_EES4_RS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S6_S8_SA_SF_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPN7WebCore15DOMPatchSupport6DigestENS_12KeyValuePairIS4_S4_EENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_7HashMapIS4_S4_SA_NS_10HashTraitsIS4_EESD_E18KeyValuePairTraitsESD_E6expandEPS6_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i10 = i9 + ~(i9 << 15) | 0;
 i9 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i9 >>> 6 ^ i9;
 i9 = i10 + ~(i10 << 11) | 0;
 i10 = i9 >>> 16 ^ i9;
 i9 = i10 & i6;
 i11 = i7 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 9;
  } else {
   i15 = (i10 >>> 23) + ~i10 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i14 = 6;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i7 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 8;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 6) {
    i20 = i7 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i14 | 0) == 8) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 9;
     break;
    }
    i20 = i21;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 9) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 HEAP32[i26 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i27 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i27;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i28 >> 2] | 0) + i27 << 1 | 0) < (i8 | 0)) {
  i29 = i26;
  i30 = i8;
 } else {
  i8 = __ZN3WTF9HashTableIPN7WebCore15DOMPatchSupport6DigestENS_12KeyValuePairIS4_S4_EENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_7HashMapIS4_S4_SA_NS_10HashTraitsIS4_EESD_E18KeyValuePairTraitsESD_E6expandEPS6_(i2, i26) | 0;
  i29 = i8;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore15DOMPatchSupport6DigestENS_12KeyValuePairIS4_S4_EENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_7HashMapIS4_S4_SA_NS_10HashTraitsIS4_EESD_E18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISF_SA_EES4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S6_S8_SA_SF_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPN7WebCore15DOMPatchSupport6DigestENS_12KeyValuePairIS4_S4_EENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_7HashMapIS4_S4_SA_NS_10HashTraitsIS4_EESD_E18KeyValuePairTraitsESD_E6expandEPS6_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i10 = i9 + ~(i9 << 15) | 0;
 i9 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i9 >>> 6 ^ i9;
 i9 = i10 + ~(i10 << 11) | 0;
 i10 = i9 >>> 16 ^ i9;
 i9 = i10 & i6;
 i11 = i7 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 9;
  } else {
   i15 = (i10 >>> 23) + ~i10 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i14 = 6;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i7 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 8;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 6) {
    i20 = i7 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i14 | 0) == 8) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 9;
     break;
    }
    i20 = i21;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 9) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 HEAP32[i26 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i27 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i27;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i28 >> 2] | 0) + i27 << 1 | 0) < (i8 | 0)) {
  i29 = i26;
  i30 = i8;
 } else {
  i8 = __ZN3WTF9HashTableIPN7WebCore15DOMPatchSupport6DigestENS_12KeyValuePairIS4_S4_EENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_7HashMapIS4_S4_SA_NS_10HashTraitsIS4_EESD_E18KeyValuePairTraitsESD_E6expandEPS6_(i2, i26) | 0;
  i29 = i8;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore15DOMPatchSupport14markNodeAsUsedEPNS0_6DigestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 _memset(i4 | 0, 0, 20) | 0;
 i5 = i4 | 0;
 i6 = i4 + 4 | 0;
 i7 = i4 + 12 | 0;
 __ZN3WTF5DequeIPN7WebCore15DOMPatchSupport6DigestELj0EE14expandCapacityEv(i4);
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = HEAP32[i4 + 8 >> 2] | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 i11 = HEAP32[i5 >> 2] | 0;
 i12 = i4 + 8 | 0;
 HEAP32[i9 + (i8 << 2) >> 2] = i2;
 i2 = (i8 | 0) == (i10 - 1 | 0) ? 0 : i8 + 1 | 0;
 HEAP32[i6 >> 2] = i2;
 if ((i11 | 0) == (i2 | 0)) {
  i13 = i9;
 } else {
  i8 = i1 + 12 | 0;
  i1 = i11;
  i11 = i10;
  i10 = i2;
  i2 = i9;
  while (1) {
   i9 = HEAP32[i2 + (i1 << 2) >> 2] | 0;
   i14 = (i1 | 0) == (i11 - 1 | 0) ? 0 : i1 + 1 | 0;
   HEAP32[i5 >> 2] = i14;
   __ZN3WTF7HashMapINS_6StringEPN7WebCore15DOMPatchSupport6DigestENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeERKS1_(i8, i9 | 0) | 0;
   i15 = i9 + 20 | 0;
   if ((HEAP32[i15 >> 2] | 0) == 0) {
    i16 = i11;
    i17 = i14;
    i18 = i10;
    i19 = HEAP32[i12 >> 2] | 0;
   } else {
    i20 = i9 + 12 | 0;
    i9 = 0;
    i21 = i10;
    i22 = i11;
    i23 = i14;
    i14 = i2;
    while (1) {
     i24 = HEAP32[(HEAP32[i20 >> 2] | 0) + (i9 << 2) >> 2] | 0;
     do {
      if ((i23 | 0) == 0) {
       if ((i21 | 0) == 0) {
        if ((i22 | 0) == 0) {
         i25 = 12;
         break;
        } else {
         i26 = 0;
         i27 = i22;
         i28 = i14;
         break;
        }
       } else {
        if ((i21 | 0) == (i22 - 1 | 0)) {
         i25 = 12;
         break;
        } else {
         i26 = i21;
         i27 = i22;
         i28 = i14;
         break;
        }
       }
      } else {
       if ((i21 + 1 | 0) == (i23 | 0)) {
        i25 = 12;
       } else {
        i26 = i21;
        i27 = i22;
        i28 = i14;
       }
      }
     } while (0);
     if ((i25 | 0) == 12) {
      i25 = 0;
      __ZN3WTF5DequeIPN7WebCore15DOMPatchSupport6DigestELj0EE14expandCapacityEv(i4);
      i26 = HEAP32[i6 >> 2] | 0;
      i27 = HEAP32[i7 >> 2] | 0;
      i28 = HEAP32[i12 >> 2] | 0;
     }
     HEAP32[i28 + (i26 << 2) >> 2] = i24;
     i29 = (i26 | 0) == (i27 - 1 | 0) ? 0 : i26 + 1 | 0;
     HEAP32[i6 >> 2] = i29;
     i30 = i9 + 1 | 0;
     i31 = HEAP32[i5 >> 2] | 0;
     if (i30 >>> 0 < (HEAP32[i15 >> 2] | 0) >>> 0) {
      i9 = i30;
      i21 = i29;
      i22 = i27;
      i23 = i31;
      i14 = i28;
     } else {
      i16 = i27;
      i17 = i31;
      i18 = i29;
      i19 = i28;
      break;
     }
    }
   }
   if ((i17 | 0) == (i18 | 0)) {
    i13 = i19;
    break;
   } else {
    i1 = i17;
    i11 = i16;
    i10 = i18;
    i2 = i19;
   }
  }
 }
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i12 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 | 0;
 HEAP16[i3 >> 1] = 0;
 HEAP16[i1 + 2 >> 1] = 0;
 i4 = i1 + 4 | 0;
 i5 = i1 + 8 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
 }
 HEAP32[i5 >> 2] = i7;
 i2 = i1 + 12 | 0;
 HEAP8[i2] = 1;
 i8 = i1 + 16 | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) == 0) {
  i10 = i7;
 } else {
  i7 = i9 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  i10 = HEAP32[i5 >> 2] | 0;
 }
 i5 = (i10 | 0) == 0;
 do {
  if (i5) {
   HEAP8[i1 + 13 | 0] = 0;
   i11 = 0;
  } else {
   i7 = HEAP32[i8 >> 2] | 0;
   i9 = i1 + 13 | 0;
   if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
    HEAP8[i9] = 0;
    if ((i7 | 0) == 0) {
     i12 = 0;
    } else {
     i12 = HEAP32[i7 + 8 >> 2] | 0;
    }
    HEAP32[i4 >> 2] = i12;
    i11 = 0;
    break;
   } else {
    HEAP8[i9] = 1;
    if ((i7 | 0) == 0) {
     i13 = 0;
    } else {
     i13 = HEAP32[i7 + 8 >> 2] | 0;
    }
    HEAP32[i4 >> 2] = i13;
    i11 = 1;
    break;
   }
  }
 } while (0);
 i13 = i1 + 20 | 0;
 HEAP16[i13 >> 1] = 0;
 _memset(i1 + 24 | 0, 0, 33) | 0;
 i12 = HEAP32[i6 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i14 = 1;
 } else {
  i14 = (HEAP32[i12 + 4 >> 2] | 0) == 0 | 0;
 }
 HEAP8[i1 + 57 | 0] = i14;
 i14 = i1 + 58 | 0;
 HEAP8[i14] = 0;
 do {
  if (i5) {
   i12 = i1 + 60 | 0;
   HEAP32[i12 >> 2] = F_BASE_vi + 2;
   HEAP32[i12 + 4 >> 2] = 0;
   HEAP8[i14] = 0;
   i12 = i1 + 68 | 0;
   HEAP32[i12 >> 2] = F_BASE_vi + 2;
   HEAP32[i12 + 4 >> 2] = 0;
  } else {
   i12 = i11 << 24 >> 24 == 0;
   do {
    if (i12) {
     i6 = HEAP32[i4 >> 2] | 0;
     if ((i6 | 0) == 0) {
      i15 = 0;
      break;
     }
     i15 = HEAP16[i6 >> 1] | 0;
    } else {
     i15 = HEAPU8[HEAP32[i4 >> 2] | 0] | 0;
    }
   } while (0);
   HEAP16[i13 >> 1] = i15;
   if ((i10 | 0) <= 1) {
    break;
   }
   if ((HEAP16[i3 >> 1] | 0) != 0) {
    break;
   }
   i6 = i1 + 60 | 0;
   if (i12) {
    HEAP32[i6 >> 2] = F_BASE_vi + 12;
    HEAP32[i6 + 4 >> 2] = 0;
    HEAP8[i14] = 0;
    i8 = i1 + 68 | 0;
    if ((HEAP8[i2] & 1) == 0) {
     HEAP32[i8 >> 2] = F_BASE_vi + 12;
     HEAP32[i8 + 4 >> 2] = 0;
     return;
    } else {
     HEAP32[i8 >> 2] = F_BASE_vi + 14;
     HEAP32[i8 + 4 >> 2] = 0;
     return;
    }
   } else {
    HEAP32[i6 >> 2] = F_BASE_vi + 4;
    HEAP32[i6 + 4 >> 2] = 0;
    HEAP8[i14] = 2;
    i6 = i1 + 68 | 0;
    if ((HEAP8[i2] & 1) == 0) {
     HEAP32[i6 >> 2] = F_BASE_vi + 4;
     HEAP32[i6 + 4 >> 2] = 0;
     return;
    } else {
     HEAP32[i6 >> 2] = F_BASE_vi + 10;
     HEAP32[i6 + 4 >> 2] = 0;
     HEAP8[i14] = 3;
     return;
    }
   }
  }
 } while (0);
 __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i1);
 return;
}
function __ZN3WTF9HashTableIPN7WebCore15DOMPatchSupport6DigestENS_12KeyValuePairIS4_S4_EENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_7HashMapIS4_S4_SA_NS_10HashTraitsIS4_EESD_E18KeyValuePairTraitsESD_E6expandEPS6_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 8;
  i6 = 0;
 } else {
  i7 = i4 << 1;
  i5 = ((HEAP32[i1 + 12 >> 2] | 0) * 6 & -1 | 0) < (i7 | 0) ? i4 : i7;
  i6 = i4;
 }
 i4 = i1 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i5 - 1;
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
 if ((i6 | 0) == 0) {
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
  i5 = i7 + (i11 << 3) | 0;
  i13 = HEAP32[i5 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i3 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L10 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 7;
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
       break L10;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 7;
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
   if ((i23 | 0) == 7) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i5;
   i17 = i30;
   i13 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i17 + 4 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i13 = i11 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i13;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore15DOMPatchSupport23removeChildAndMoveToNewEPNS0_6DigestERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = (i7 | 0) == 0;
 if (!i8) {
  i9 = i7 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = i1 + 4 | 0;
 L4 : do {
  if (__ZN7WebCore9DOMEditor11removeChildEPNS_4NodeES2_Ri(HEAP32[i9 >> 2] | 0, HEAP32[i7 + 16 >> 2] | 0, i7, i3) | 0) {
   i10 = i1 + 12 | 0;
   __ZN3WTF7HashMapINS_6StringEPN7WebCore15DOMPatchSupport6DigestENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE4findERKS1_(i5, i10, i2 | 0);
   i11 = HEAP32[i5 >> 2] | 0;
   if ((i11 | 0) == ((HEAP32[i10 >> 2] | 0) + (HEAP32[i1 + 16 >> 2] << 3) | 0)) {
    i10 = i2 + 20 | 0;
    i12 = i2 + 12 | 0;
    i13 = 0;
    while (1) {
     if (i13 >>> 0 >= (HEAP32[i10 >> 2] | 0) >>> 0) {
      i14 = 1;
      break L4;
     }
     if (__ZN7WebCore15DOMPatchSupport23removeChildAndMoveToNewEPNS0_6DigestERi(i1, HEAP32[(HEAP32[i12 >> 2] | 0) + (i13 << 2) >> 2] | 0, i3) | 0) {
      i13 = i13 + 1 | 0;
     } else {
      i14 = 0;
      break L4;
     }
    }
   }
   i13 = HEAP32[i11 + 4 >> 2] | 0;
   i12 = i13 + 8 | 0;
   i10 = HEAP32[i12 >> 2] | 0;
   i15 = HEAP32[i9 >> 2] | 0;
   i16 = HEAP32[i10 + 16 >> 2] | 0;
   i17 = i6 | 0;
   HEAP32[i17 >> 2] = i7;
   if (!i8) {
    i18 = i7 + 8 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   }
   i18 = __ZN7WebCore9DOMEditor12replaceChildEPNS_4NodeEN3WTF10PassRefPtrIS1_EES2_Ri(i15, i16, i6, i10, i3) | 0;
   i10 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i17 = i10 + 8 | 0;
     i16 = i17 | 0;
     i15 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i15;
     if ((i15 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
    }
   } while (0);
   if (!i18) {
    i14 = 0;
    break;
   }
   HEAP32[i12 >> 2] = i7;
   __ZN7WebCore15DOMPatchSupport14markNodeAsUsedEPNS0_6DigestE(i1, i13);
   i14 = 1;
  } else {
   i14 = 0;
  }
 } while (0);
 if (i8) {
  STACKTOP = i4;
  return i14 | 0;
 }
 i8 = i7 + 8 | 0;
 i7 = i8 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i4;
  return i14 | 0;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return i14 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i4;
 return i14 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E8reinsertEOS6_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i5 + 16 >> 2] | 0;
 if (i6 >>> 0 > 127 >>> 0) {
  i7 = i6 >>> 7;
 } else {
  i7 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i5) | 0;
 }
 i5 = (i7 >>> 23) + ~i7 | 0;
 i6 = i5 << 12 ^ i5;
 i5 = i6 >>> 7 ^ i6;
 i6 = i5 << 2 ^ i5;
 i5 = i6 >>> 20 ^ i6 | 1;
 i6 = i7;
 i7 = 0;
 i8 = 0;
 while (1) {
  i9 = i6 & i4;
  i10 = i3 + (i9 << 4) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  if ((i12 | 0) == 0) {
   i13 = 6;
   break;
  } else if ((i12 | 0) == (-1 | 0)) {
   i14 = i10;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i11, HEAP32[i1 >> 2] | 0) | 0) {
    i15 = i10;
    break;
   } else {
    i14 = i8;
   }
  }
  i11 = (i7 | 0) == 0 ? i5 : i7;
  i6 = i11 + i9 | 0;
  i7 = i11;
  i8 = i14;
 }
 if ((i13 | 0) == 6) {
  i15 = (i8 | 0) != 0 ? i8 : i10;
 }
 i10 = i15 + 12 | 0;
 if ((HEAP32[i10 >> 2] | 0) != 0) {
  HEAP32[i10 >> 2] = 0;
 }
 i8 = i15 + 4 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 if ((i13 | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i15 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i13);
 }
 i13 = i15 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i7 = i14 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i7 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i13 >> 2] = i14;
 HEAP32[i8 >> 2] = 0;
 i14 = i15 + 8 | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 i13 = i2 + 12 | 0;
 HEAP32[i10 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i13 >> 2] = 0;
 i13 = i2 + 4 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i13 >> 2] = i10;
 i10 = i2 + 8 | 0;
 i2 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i10 >> 2] = i2;
 return i15 | 0;
}
function __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + (i4 << 4) | 0;
 if (i3 >>> 0 <= i4 >>> 0) {
  if ((i3 | 0) == (i4 | 0)) {
   return;
  }
  i8 = i6 + (i3 << 4) | 0;
  while (1) {
   i9 = HEAP32[i8 + 12 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i10 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i8 = i8 + 16 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  return;
 }
 if ((i4 | 0) == 0) {
  i12 = i6;
  i13 = i3;
 } else {
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 + 12 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i4 = i6 | 0;
     i8 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i4 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 16 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i12 + (i2 << 4) | 0;
 if ((i13 | 0) == (i2 | 0)) {
  return;
 }
 i2 = i12 + (i13 << 4) | 0;
 while (1) {
  i13 = HEAP32[i2 + 12 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    i12 = i13 | 0;
    i5 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     break;
    } else {
     HEAP32[i12 >> 2] = i5;
     break;
    }
   }
  } while (0);
  i2 = i2 + 16 | 0;
  if ((i2 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN3WTF7HashMapINS_6StringEPN7WebCore15DOMPatchSupport6DigestENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE4findERKS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = HEAP32[i2 + 4 >> 2] << 3 | 0;
   i7 = i6;
   i8 = i6;
  } else {
   i6 = HEAP32[i2 + 8 >> 2] | 0;
   i9 = i3 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = HEAP32[i10 + 16 >> 2] | 0;
   if (i11 >>> 0 > 127 >>> 0) {
    i12 = i11 >>> 7;
   } else {
    i12 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i10) | 0;
   }
   i10 = (i12 >>> 23) + ~i12 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = i12;
   i13 = 0;
   while (1) {
    i14 = i11 & i6;
    i15 = i5 + (i14 << 3) | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    i17 = i16;
    if ((i17 | 0) == 0) {
     i18 = 8;
     break;
    } else if ((i17 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i16, HEAP32[i9 >> 2] | 0) | 0) {
      i18 = 11;
      break;
     }
    }
    i16 = (i13 | 0) == 0 ? i10 : i13;
    i11 = i16 + i14 | 0;
    i13 = i16;
   }
   if ((i18 | 0) == 11) {
    i13 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i7 = (i15 | 0) == 0 ? i13 : i15;
    i8 = i13;
    break;
   } else if ((i18 | 0) == 8) {
    i13 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i7 = i13;
    i8 = i13;
    break;
   }
  }
 } while (0);
 i2 = i1;
 HEAP32[i2 >> 2] = i7;
 HEAP32[i2 + 4 >> 2] = i8;
 return;
}
function __ZN3WTF7HashMapINS_6StringEPN7WebCore15DOMPatchSupport6DigestENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN3WTF7HashMapINS_6StringEPN7WebCore15DOMPatchSupport6DigestENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE4findERKS1_(i4, i1, i2);
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i1 | 0;
 i5 = i1 + 4 | 0;
 if ((i2 | 0) == ((HEAP32[i1 >> 2] | 0) + (HEAP32[i5 >> 2] << 3) | 0)) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = i2 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = -1;
 i7 = i1 + 16 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = i1 + 12 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 i7 = HEAP32[i5 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i7 | 0) & (i7 | 0) > 8)) {
  i6 = 1;
  STACKTOP = i3;
  return i6 | 0;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore15DOMPatchSupport6DigestEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i4, (i7 | 0) / 2 & -1, 0) | 0;
 i6 = 1;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN7WebCore15DOMPatchSupport13patchDocumentEPNS_8DocumentERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 32 | 0;
 __ZN7WebCore16InspectorHistoryC1Ev(i4);
 __ZN7WebCore9DOMEditorC1EPNS_16InspectorHistoryE(i5, i4);
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = H_BASE + 32;
 HEAP32[i6 + 4 >> 2] = i5;
 HEAP32[i6 + 8 >> 2] = i1;
 _memset(i6 + 12 | 0, 0, 20) | 0;
 __ZN7WebCore15DOMPatchSupport13patchDocumentERKN3WTF6StringE(i6, i2);
 HEAP32[i7 >> 2] = H_BASE + 32;
 i7 = HEAP32[i6 + 12 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZN7WebCore9DOMEditorD1Ev(i5);
  __ZN7WebCore16InspectorHistoryD1Ev(i4);
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i6 + 16 >> 2] | 0;
 if ((i2 | 0) > 0) {
  i6 = 0;
  while (1) {
   i1 = HEAP32[i7 + (i6 << 3) >> 2] | 0;
   i8 = i1;
   do {
    if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
     i9 = i1 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i9 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i6 = i6 + 1 | 0;
   if ((i6 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i7);
 __ZN7WebCore9DOMEditorD1Ev(i5);
 __ZN7WebCore16InspectorHistoryD1Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15DOMPatchSupport6DigestD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 12 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) != 0) {
    __ZN7WebCore15DOMPatchSupport6DigestD2Ev(i5);
    __ZdlPv(i5);
   }
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
  HEAP32[i1 + 16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  return;
 }
}
function __ZN3WTF5DequeIPN7WebCore15DOMPatchSupport6DigestELj0EE14expandCapacityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + 1 + (i3 >>> 2) | 0;
 i7 = i6 >>> 0 > 16 >>> 0 ? i6 : 16;
 if (i7 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 2) | 0;
 HEAP32[i2 >> 2] = i6 >>> 2;
 i7 = __ZN3WTF10fastMallocEj(i6) | 0;
 i6 = i7;
 HEAP32[i4 >> 2] = i6;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 if (i9 >>> 0 > i10 >>> 0) {
  _memcpy(i7 | 0, i5 | 0, i10 << 2) | 0;
  i7 = HEAP32[i8 >> 2] | 0;
  i1 = i7 - i3 + (HEAP32[i2 >> 2] | 0) | 0;
  _memcpy((HEAP32[i4 >> 2] | 0) + (i1 << 2) | 0, i5 + (i7 << 2) | 0, i3 - i7 << 2) | 0;
  HEAP32[i8 >> 2] = i1;
 } else {
  _memcpy(i6 + (i9 << 2) | 0, i5 + (i9 << 2) | 0, i10 - i9 << 2) | 0;
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore15DOMPatchSupport25insertBeforeAndMarkAsUsedEPNS_13ContainerNodeEPNS0_6DigestEPNS_4NodeERi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = HEAP32[i1 + 4 >> 2] | 0;
 i9 = HEAP32[i3 + 8 >> 2] | 0;
 i10 = i7 | 0;
 HEAP32[i10 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i11 = i9 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 i11 = __ZN7WebCore9DOMEditor12insertBeforeEPNS_4NodeEN3WTF10PassRefPtrIS1_EES2_Ri(i8, i2 | 0, i7, i4, i5) | 0;
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i4 = i10 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15DOMPatchSupport14markNodeAsUsedEPNS0_6DigestE(i1, i3);
 STACKTOP = i6;
 return i11 | 0;
}
function __ZN3WTF6VectorINS_6OwnPtrIN7WebCore15DOMPatchSupport6DigestEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore15DOMPatchSupportD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i5 = 0;
  while (1) {
   i6 = HEAP32[i2 + (i5 << 3) >> 2] | 0;
   i7 = i6;
   do {
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i8 = i6 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i5 = i5 + 1 | 0;
   if ((i5 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function __ZN7WebCore15DOMPatchSupportD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i1 = 0;
  while (1) {
   i4 = HEAP32[i2 + (i1 << 3) >> 2] | 0;
   i5 = i4;
   do {
    if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
     i6 = i4 | 0;
     i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i6 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore15DOMPatchSupportD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i1 = 0;
  while (1) {
   i4 = HEAP32[i2 + (i1 << 3) >> 2] | 0;
   i5 = i4;
   do {
    if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
     i6 = i4 | 0;
     i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i6 >> 2] = i7;
      break;
     }
    }
   } while (0);
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
function __ZN7WebCore15DOMPatchSupportC2EPNS_9DOMEditorEPNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i3;
 _memset(i1 + 12 | 0, 0, 20) | 0;
 return;
}
function __ZN7WebCore15DOMPatchSupportC1EPNS_9DOMEditorEPNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i3;
 _memset(i1 + 12 | 0, 0, 20) | 0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vi___ZN7WebCore15SegmentedString28advanceAndUpdateLineNumber16Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString28advanceAndUpdateLineNumber16Ev(i1 | 0);
}
function vi___ZN7WebCore15SegmentedString27advanceAndUpdateLineNumber8Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString27advanceAndUpdateLineNumber8Ev(i1 | 0);
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
function vi___ZN7WebCore15SegmentedString12advanceEmptyEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString12advanceEmptyEv(i1 | 0);
}
function vi___ZN7WebCore15SegmentedString9advance16Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString9advance16Ev(i1 | 0);
}
function vi___ZN7WebCore15SegmentedString8advance8Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString8advance8Ev(i1 | 0);
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
 FUNCTION_TABLE_vii[i1 & 1](i2 | 0, i3 | 0);
}
function runPostSets() {
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 8;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
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
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,vi___ZN7WebCore15SegmentedString12advanceEmptyEv__wrapper,b0,vi___ZN7WebCore15SegmentedString8advance8Ev__wrapper,b0,__ZN7WebCore15DOMPatchSupportD2Ev,b0,__ZN7WebCore15DOMPatchSupportD0Ev,b0,vi___ZN7WebCore15SegmentedString27advanceAndUpdateLineNumber8Ev__wrapper,b0,vi___ZN7WebCore15SegmentedString9advance16Ev__wrapper,b0,vi___ZN7WebCore15SegmentedString28advanceAndUpdateLineNumber16Ev__wrapper,b0];
  var FUNCTION_TABLE_vii = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore15DOMPatchSupportC2EPNS_9DOMEditorEPNS_8DocumentE,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_llvm_trap": _llvm_trap, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZN7WebCore9HTMLNames7headTagE": __ZN7WebCore9HTMLNames7headTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore15DOMPatchSupport14innerPatchNodeEPNS0_6DigestES2_Ri","__ZN3WTF6VectorINS_6OwnPtrIN7WebCore15DOMPatchSupport6DigestEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore15DOMPatchSupport13patchDocumentERKN3WTF6StringE","__ZN7WebCore15DOMPatchSupport13patchDocumentEPNS_8DocumentERKN3WTF6StringE","__ZN3WTF9HashTableIjjNS_17IdentityExtractorENS_7IntHashIjEENS_29UnsignedWithZeroKeyHashTraitsIjEES5_E3addINS_22IdentityHashTranslatorIS3_EERKjSB_EENS_18HashTableAddResultINS_17HashTableIteratorIjjS1_S3_S5_S5_EEEEOT0_OT1_","__ZN3WTF7HashMapINS_6StringEPN7WebCore15DOMPatchSupport6DigestENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE4findERKS1_","__ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE","__ZN7WebCore15DOMPatchSupport9patchNodeERNS_4NodeERKN3WTF6StringERi","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore15DOMPatchSupport6DigestEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","_memset","_memcpy","__ZN7WebCore15DOMPatchSupport4diffERKN3WTF6VectorINS1_6OwnPtrINS0_6DigestEEELj0ENS1_15CrashOnOverflowEEES9_","__ZN3WTF9HashTableIPN7WebCore15DOMPatchSupport6DigestENS_12KeyValuePairIS4_S4_EENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_7HashMapIS4_S4_SA_NS_10HashTraitsIS4_EESD_E18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISF_SA_EES4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S6_S8_SA_SF_SD_EEEEOT0_OT1_","__ZN7WebCore15DOMPatchSupport14markNodeAsUsedEPNS0_6DigestE","__ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore15DOMPatchSupportC2EPNS_9DOMEditorEPNS_8DocumentE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore15DOMPatchSupport6DigestEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_","__ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF9HashTableIPN7WebCore15DOMPatchSupport6DigestENS_12KeyValuePairIS4_S4_EENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_7HashMapIS4_S4_SA_NS_10HashTraitsIS4_EESD_E18KeyValuePairTraitsESD_E6expandEPS6_","__ZN7WebCore15DOMPatchSupportD0Ev","__ZN7WebCore15DOMPatchSupport25insertBeforeAndMarkAsUsedEPNS_13ContainerNodeEPNS0_6DigestEPNS_4NodeERi","__ZN3WTF9HashTableIPN7WebCore15DOMPatchSupport6DigestENS_12KeyValuePairIS4_S4_EENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_7HashMapIS4_S4_SA_NS_10HashTraitsIS4_EESD_E18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISF_SA_EES4_RS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S6_S8_SA_SF_SD_EEEEOT0_OT1_","__ZN3WTF5DequeIPN7WebCore15DOMPatchSupport6DigestELj0EE14expandCapacityEv","__ZN7WebCore15DOMPatchSupport12createDigestEPNS_4NodeEPN3WTF7HashMapINS3_6StringEPNS0_6DigestENS3_10StringHashENS3_10HashTraitsIS5_EENS9_IS7_EEEE","__ZN7WebCore15DOMPatchSupport6DigestD2Ev","__ZN3WTF7HashMapINS_6StringEPN7WebCore15DOMPatchSupport6DigestENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeERKS1_","__ZN7WebCore15DOMPatchSupport18innerPatchChildrenEPNS_13ContainerNodeERKN3WTF6VectorINS3_6OwnPtrINS0_6DigestEEELj0ENS3_15CrashOnOverflowEEESB_Ri","__ZN7WebCore15DOMPatchSupportD2Ev","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E8reinsertEOS6_","__ZN7WebCore15DOMPatchSupport23removeChildAndMoveToNewEPNS0_6DigestERi","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_"]

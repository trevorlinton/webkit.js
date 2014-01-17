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
H_BASE = parentModule["_malloc"](504 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 504;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14StorageTrackerC1ERKN3WTF6StringE;
/* memory initializer */ allocate([68,69,76,69,84,69,32,70,82,79,77,32,79,114,105,103,105,110,115,0,0,0,0,0,83,69,76,69,67,84,32,111,114,105,103,105,110,44,32,112,97,116,104,32,70,82,79,77,32,79,114,105,103,105,110,115,0,0,0,0,0,0,0,0,73,78,83,69,82,84,32,73,78,84,79,32,79,114,105,103,105,110,115,32,86,65,76,85,69,83,32,40,63,44,32,63,41,0,0,0,0,0,0,0,46,108,111,99,97,108,115,116,111,114,97,103,101,0,0,0,42,46,108,111,99,97,108,115,116,111,114,97,103,101,0,0,83,69,76,69,67,84,32,111,114,105,103,105,110,32,70,82,79,77,32,79,114,105,103,105,110,115,0,0,0,0,0,0,67,82,69,65,84,69,32,84,65,66,76,69,32,79,114,105,103,105,110,115,32,40,111,114,105,103,105,110,32,84,69,88,84,32,85,78,73,81,85,69,32,79,78,32,67,79,78,70,76,73,67,84,32,82,69,80,76,65,67,69,44,32,112,97,116,104,32,84,69,88,84,41,59,0,0,0,0,0,0,0,79,114,105,103,105,110,115,0,83,69,76,69,67,84,32,112,97,116,104,32,70,82,79,77,32,79,114,105,103,105,110,115,32,87,72,69,82,69,32,111,114,105,103,105,110,61,63,0,68,69,76,69,84,69,32,70,82,79,77,32,79,114,105,103,105,110,115,32,119,104,101,114,101,32,111,114,105,103,105,110,61,63,0,0,0,0,0,0,83,116,111,114,97,103,101,84,114,97,99,107,101,114,46,100,98,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore13SQLResultDoneE=env.__ZN7WebCore13SQLResultDoneE|0;
  var __ZN7WebCore11SQLResultOkE=env.__ZN7WebCore11SQLResultOkE|0;
  var __ZN7WebCore12SQLResultRowE=env.__ZN7WebCore12SQLResultRowE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvvEEEFvPS3_EEE=(H_BASE+368)|0;
  var __ZTVN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore13StorageThreadEFvRKNS_8FunctionIFvvEEEEEEFvPS3_S6_EEE=(H_BASE+464)|0;
  var __ZTVN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvRKNS_6StringEEEEFvPS3_S4_EEE=(H_BASE+432)|0;
  var __ZTVN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvRKNS_6StringES6_EEEFvPS3_S4_S4_EEE=(H_BASE+400)|0;
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
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore14StorageTracker32syncFileSystemAndTrackerDatabaseEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 48 | 0;
 i7 = i2 + 56 | 0;
 i8 = i2 + 72 | 0;
 i9 = i2 + 96 | 0;
 i10 = i2 + 104 | 0;
 i11 = i2 + 112 | 0;
 i12 = i2 + 120 | 0;
 i13 = i2 + 128 | 0;
 i14 = i2 + 144 | 0;
 i15 = i2 + 152 | 0;
 i16 = i1 | 0;
 i17 = (i1 | 0) == 0;
 if (!i17) {
  __ZN3WTF5Mutex4lockEv(i16);
 }
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 128 | 0);
 __ZN7WebCore13listDirectoryERKN3WTF6StringES3_(i3, i1 + 132 | 0, i4);
 i18 = i3 + 8 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 i18 = i3 | 0;
 i20 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 0;
 i3 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i18 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i18;
    break;
   }
  }
 } while (0);
 if (!i17) {
  __ZN3WTF5Mutex6unlockEv(i16);
 }
 _memset(i5 | 0, 0, 20) | 0;
 i16 = i1 + 164 | 0;
 i17 = (i16 | 0) == 0;
 if (!i17) {
  __ZN3WTF5Mutex4lockEv(i16);
 }
 i3 = HEAP32[i1 + 188 >> 2] | 0;
 i18 = HEAP32[i1 + 192 >> 2] | 0;
 i4 = i3 + (i18 << 2) | 0;
 L16 : do {
  if ((HEAP32[i1 + 200 >> 2] | 0) != 0) {
   L18 : do {
    if ((i18 | 0) == 0) {
     i21 = i3;
    } else {
     i22 = i3;
     while (1) {
      i23 = HEAP32[i22 >> 2] | 0;
      if (!((i23 | 0) == (-1 | 0) | (i23 | 0) == 0)) {
       i21 = i22;
       break L18;
      }
      i22 = i22 + 4 | 0;
      if ((i22 | 0) == (i4 | 0)) {
       break L16;
      }
     }
    }
   } while (0);
   if ((i21 | 0) == (i4 | 0)) {
    break;
   }
   i22 = i5 | 0;
   i23 = i6 | 0;
   i24 = i21;
   while (1) {
    __ZNKR3WTF6String12isolatedCopyEv(i6, i24);
    __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i7, i22, i6, i6);
    i25 = HEAP32[i23 >> 2] | 0;
    do {
     if ((i25 | 0) != 0) {
      i26 = i25 | 0;
      i27 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
      if ((i27 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i25);
       break;
      } else {
       HEAP32[i26 >> 2] = i27;
       break;
      }
     }
    } while (0);
    i25 = i24 + 4 | 0;
    if ((i25 | 0) == (i4 | 0)) {
     break L16;
    } else {
     i28 = i25;
    }
    while (1) {
     i25 = HEAP32[i28 >> 2] | 0;
     if (!((i25 | 0) == (-1 | 0) | (i25 | 0) == 0)) {
      break;
     }
     i25 = i28 + 4 | 0;
     if ((i25 | 0) == (i4 | 0)) {
      break L16;
     } else {
      i28 = i25;
     }
    }
    if ((i28 | 0) == (i4 | 0)) {
     break;
    } else {
     i24 = i28;
    }
   }
  }
 } while (0);
 if (!i17) {
  __ZN3WTF5Mutex6unlockEv(i16);
 }
 _memset(i8 | 0, 0, 20) | 0;
 HEAP32[i10 >> 2] = H_BASE + 112;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 i10 = i20 + (i19 << 2) | 0;
 i16 = (i19 | 0) == 0;
 if (i16) {
  i29 = i5 | 0;
 } else {
  i19 = i9 | 0;
  i17 = i11 | 0;
  i28 = i5 | 0;
  i4 = i8 | 0;
  i6 = i12 | 0;
  i7 = i5 + 8 | 0;
  i21 = i20;
  while (1) {
   i3 = HEAP32[i21 >> 2] | 0;
   i18 = (i3 | 0) == 0;
   if (i18) {
    i30 = 0;
   } else {
    i30 = HEAP32[i3 + 4 >> 2] | 0;
   }
   i24 = HEAP32[i19 >> 2] | 0;
   i23 = (i24 | 0) == 0;
   if (i23) {
    i31 = 0;
   } else {
    i31 = HEAP32[i24 + 4 >> 2] | 0;
   }
   L51 : do {
    if (i30 >>> 0 > i31 >>> 0) {
     do {
      if (i18) {
       if (i23) {
        break;
       }
       if ((HEAP32[i24 + 4 >> 2] | 0) != 0) {
        break L51;
       }
      } else {
       if (!(__ZN3WTF10StringImpl8endsWithEPS0_b(i3, i24, 1) | 0)) {
        break L51;
       }
      }
     } while (0);
     __ZN7WebCore15pathGetFileNameERKN3WTF6StringE(i11, i21);
     i22 = HEAP32[i17 >> 2] | 0;
     if ((i22 | 0) == 0) {
      i32 = 0;
     } else {
      i32 = HEAP32[i22 + 4 >> 2] | 0;
     }
     i22 = HEAP32[i19 >> 2] | 0;
     if ((i22 | 0) == 0) {
      i33 = 0;
     } else {
      i33 = HEAP32[i22 + 4 >> 2] | 0;
     }
     __ZNK3WTF6String9substringEjj(i12, i11, 0, i32 - i33 | 0);
     i22 = HEAP32[i28 >> 2] | 0;
     L64 : do {
      if ((i22 | 0) == 0) {
       i34 = 52;
      } else {
       i25 = HEAP32[i7 >> 2] | 0;
       i27 = HEAP32[i6 >> 2] | 0;
       i26 = HEAP32[i27 + 16 >> 2] | 0;
       if (i26 >>> 0 > 127 >>> 0) {
        i35 = i26 >>> 7;
       } else {
        i35 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i27) | 0;
       }
       i27 = (i35 >>> 23) + ~i35 | 0;
       i26 = i27 << 12 ^ i27;
       i27 = i26 >>> 7 ^ i26;
       i26 = i27 << 2 ^ i27;
       i27 = i26 >>> 20 ^ i26 | 1;
       i26 = i35;
       i36 = 0;
       while (1) {
        i37 = i26 & i25;
        i38 = i22 + (i37 << 2) | 0;
        i39 = HEAP32[i38 >> 2] | 0;
        i40 = i39;
        if ((i40 | 0) == 0) {
         i34 = 52;
         break L64;
        } else if ((i40 | 0) != (-1 | 0)) {
         if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i39, HEAP32[i6 >> 2] | 0) | 0) {
          break;
         }
        }
        i39 = (i36 | 0) == 0 ? i27 : i36;
        i26 = i39 + i37 | 0;
        i36 = i39;
       }
       if ((i38 | 0) == 0) {
        i34 = 52;
       }
      }
     } while (0);
     if ((i34 | 0) == 52) {
      i34 = 0;
      __ZN7WebCore14StorageTracker20syncSetOriginDetailsERKN3WTF6StringES4_(i1, i12, i21);
     }
     __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i13, i4, i12, i12);
     i22 = HEAP32[i6 >> 2] | 0;
     do {
      if ((i22 | 0) != 0) {
       i36 = i22 | 0;
       i26 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
       if ((i26 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i22);
        break;
       } else {
        HEAP32[i36 >> 2] = i26;
        break;
       }
      }
     } while (0);
     i22 = HEAP32[i17 >> 2] | 0;
     if ((i22 | 0) == 0) {
      break;
     }
     i26 = i22 | 0;
     i36 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
     if ((i36 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i26 >> 2] = i36;
      break;
     }
    }
   } while (0);
   i24 = i21 + 4 | 0;
   if ((i24 | 0) == (i10 | 0)) {
    i29 = i28;
    break;
   } else {
    i21 = i24;
   }
  }
 }
 i21 = HEAP32[i29 >> 2] | 0;
 i28 = i5 + 4 | 0;
 i17 = HEAP32[i28 >> 2] | 0;
 i6 = i21 + (i17 << 2) | 0;
 L91 : do {
  if ((HEAP32[i5 + 12 >> 2] | 0) != 0) {
   L93 : do {
    if ((i17 | 0) == 0) {
     i41 = i21;
    } else {
     i12 = i21;
     while (1) {
      i4 = HEAP32[i12 >> 2] | 0;
      if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
       i41 = i12;
       break L93;
      }
      i12 = i12 + 4 | 0;
      if ((i12 | 0) == (i6 | 0)) {
       break L91;
      }
     }
    }
   } while (0);
   if ((i41 | 0) == (i6 | 0)) {
    break;
   }
   i12 = i8 | 0;
   i4 = i15 | 0;
   i13 = i14 | 0;
   i38 = i8 + 8 | 0;
   i35 = i41;
   while (1) {
    i7 = HEAP32[i12 >> 2] | 0;
    L101 : do {
     if ((i7 | 0) == 0) {
      i34 = 77;
     } else {
      i33 = HEAP32[i38 >> 2] | 0;
      i32 = i35 | 0;
      i11 = HEAP32[i32 >> 2] | 0;
      i19 = HEAP32[i11 + 16 >> 2] | 0;
      if (i19 >>> 0 > 127 >>> 0) {
       i42 = i19 >>> 7;
      } else {
       i42 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i11) | 0;
      }
      i11 = (i42 >>> 23) + ~i42 | 0;
      i19 = i11 << 12 ^ i11;
      i11 = i19 >>> 7 ^ i19;
      i19 = i11 << 2 ^ i11;
      i11 = i19 >>> 20 ^ i19 | 1;
      i19 = i42;
      i31 = 0;
      while (1) {
       i30 = i19 & i33;
       i43 = i7 + (i30 << 2) | 0;
       i24 = HEAP32[i43 >> 2] | 0;
       i3 = i24;
       if ((i3 | 0) == 0) {
        i34 = 77;
        break L101;
       } else if ((i3 | 0) != (-1 | 0)) {
        if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i24, HEAP32[i32 >> 2] | 0) | 0) {
         break;
        }
       }
       i24 = (i31 | 0) == 0 ? i11 : i31;
       i19 = i24 + i30 | 0;
       i31 = i24;
      }
      if ((i43 | 0) == 0) {
       i34 = 77;
      }
     }
    } while (0);
    do {
     if ((i34 | 0) == 77) {
      i34 = 0;
      __ZNKR3WTF6String12isolatedCopyEv(i15, i35);
      i7 = __ZN3WTF10fastMallocEj(24) | 0;
      HEAP32[i7 + 4 >> 2] = 1;
      HEAP32[i7 >> 2] = H_BASE + 440;
      i31 = i7 + 8 | 0;
      HEAP32[i31 >> 2] = F_BASE_vii + 4;
      HEAP32[i31 + 4 >> 2] = 0;
      HEAP32[i7 + 16 >> 2] = i1;
      i31 = HEAP32[i4 >> 2] | 0;
      HEAP32[i7 + 20 >> 2] = i31;
      if ((i31 | 0) != 0) {
       i19 = i31 | 0;
       HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
      }
      HEAP32[i13 >> 2] = i7;
      __ZN3WTF16callOnMainThreadERKNS_8FunctionIFvvEEE(i14);
      i7 = HEAP32[i13 >> 2] | 0;
      do {
       if ((i7 | 0) != 0) {
        i19 = i7 + 4 | 0;
        i31 = i19 | 0;
        if (((tempValue = HEAP32[i31 >> 2] | 0, HEAP32[i31 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
         break;
        }
        i31 = i19 - 4 | 0;
        if ((i31 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 31](i31);
       }
      } while (0);
      i7 = HEAP32[i4 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      i31 = i7 | 0;
      i19 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
      if ((i19 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i31 >> 2] = i19;
       break;
      }
     }
    } while (0);
    i19 = i35 + 4 | 0;
    if ((i19 | 0) == (i6 | 0)) {
     break L91;
    } else {
     i44 = i19;
    }
    while (1) {
     i19 = HEAP32[i44 >> 2] | 0;
     if (!((i19 | 0) == (-1 | 0) | (i19 | 0) == 0)) {
      break;
     }
     i19 = i44 + 4 | 0;
     if ((i19 | 0) == (i6 | 0)) {
      break L91;
     } else {
      i44 = i19;
     }
    }
    if ((i44 | 0) == (i6 | 0)) {
     break;
    } else {
     i35 = i44;
    }
   }
  }
 } while (0);
 i44 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i44 | 0) != 0) {
   i9 = i44 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i44);
    break;
   } else {
    HEAP32[i9 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i44 = HEAP32[i8 >> 2] | 0;
 if ((i44 | 0) != 0) {
  i6 = HEAP32[i8 + 4 >> 2] | 0;
  if ((i6 | 0) > 0) {
   i8 = 0;
   while (1) {
    i9 = HEAP32[i44 + (i8 << 2) >> 2] | 0;
    i14 = i9;
    do {
     if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
      i1 = i9 | 0;
      i15 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
      if ((i15 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i9);
       break;
      } else {
       HEAP32[i1 >> 2] = i15;
       break;
      }
     }
    } while (0);
    i8 = i8 + 1 | 0;
    if ((i8 | 0) >= (i6 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i44);
 }
 i44 = HEAP32[i29 >> 2] | 0;
 if ((i44 | 0) != 0) {
  i29 = HEAP32[i28 >> 2] | 0;
  if ((i29 | 0) > 0) {
   i28 = 0;
   while (1) {
    i6 = HEAP32[i44 + (i28 << 2) >> 2] | 0;
    i8 = i6;
    do {
     if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
      i9 = i6 | 0;
      i14 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
      if ((i14 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i9 >> 2] = i14;
       break;
      }
     }
    } while (0);
    i28 = i28 + 1 | 0;
    if ((i28 | 0) >= (i29 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i44);
 }
 if (!i16) {
  i16 = i20;
  while (1) {
   i44 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i44 | 0) != 0) {
     i29 = i44 | 0;
     i28 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i44);
      break;
     } else {
      HEAP32[i29 >> 2] = i28;
      break;
     }
    }
   } while (0);
   i16 = i16 + 4 | 0;
   if ((i16 | 0) == (i10 | 0)) {
    break;
   }
  }
 }
 if ((i20 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF8fastFreeEPv(i20);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14StorageTracker20syncDeleteAllOriginsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 i7 = i2 + 40 | 0;
 i8 = i2 + 48 | 0;
 i9 = i2 + 56 | 0;
 i10 = i2 + 64 | 0;
 i11 = i2 + 80 | 0;
 i12 = i1 | 0;
 i13 = (i1 | 0) == 0;
 if (!i13) {
  __ZN3WTF5Mutex4lockEv(i12);
 }
 __ZN7WebCore14StorageTracker19openTrackerDatabaseEb(i1, 0);
 i14 = i1 + 24 | 0;
 i15 = i14 | 0;
 if ((HEAP32[i15 >> 2] | 0) != 0) {
  __ZN3WTF6StringC1EPKc(i5, H_BASE + 32 | 0);
  __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i4, i14, i5);
  i16 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i16 | 0) != 0) {
    i5 = i16 | 0;
    i17 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
    if ((i17 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i16);
     break;
    } else {
     HEAP32[i5 >> 2] = i17;
     break;
    }
   }
  } while (0);
  i16 = __ZN7WebCore15SQLiteStatement7prepareEv(i4) | 0;
  L12 : do {
   if ((i16 | 0) == (HEAP32[__ZN7WebCore11SQLResultOkE >> 2] | 0)) {
    i17 = __ZN7WebCore15SQLiteStatement4stepEv(i4) | 0;
    L14 : do {
     if ((i17 | 0) == (HEAP32[__ZN7WebCore12SQLResultRowE >> 2] | 0)) {
      i5 = i6 | 0;
      i18 = i7 | 0;
      i19 = i1 + 136 | 0;
      i20 = i1 + 160 | 0;
      i21 = i8 | 0;
      if ((i19 | 0) == 0) {
       while (1) {
        __ZN7WebCore15SQLiteStatement13getColumnTextEi(i6, i4, 0);
        i22 = __ZN7WebCore14StorageTracker15canDeleteOriginERKN3WTF6StringE(i1, i6) | 0;
        i23 = HEAP32[i5 >> 2] | 0;
        do {
         if ((i23 | 0) != 0) {
          i24 = i23 | 0;
          i25 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
          if ((i25 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i23);
           break;
          } else {
           HEAP32[i24 >> 2] = i25;
           break;
          }
         }
        } while (0);
        do {
         if (i22) {
          __ZN7WebCore15SQLiteStatement13getColumnTextEi(i7, i4, 1);
          __ZN7WebCore16SQLiteFileSystem18deleteDatabaseFileERKN3WTF6StringE(i7) | 0;
          i23 = HEAP32[i18 >> 2] | 0;
          do {
           if ((i23 | 0) != 0) {
            i25 = i23 | 0;
            i24 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
            if ((i24 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i23);
             break;
            } else {
             HEAP32[i25 >> 2] = i24;
             break;
            }
           }
          } while (0);
          i23 = HEAP32[i20 >> 2] | 0;
          if ((i23 | 0) == 0) {
           break;
          }
          i24 = HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] | 0;
          __ZN7WebCore15SQLiteStatement13getColumnTextEi(i8, i4, 0);
          FUNCTION_TABLE_vii[i24 & 15](i23, i8);
          i23 = HEAP32[i21 >> 2] | 0;
          if ((i23 | 0) == 0) {
           break;
          }
          i24 = i23 | 0;
          i25 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
          if ((i25 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i23);
           break;
          } else {
           HEAP32[i24 >> 2] = i25;
           break;
          }
         }
        } while (0);
        if ((__ZN7WebCore15SQLiteStatement4stepEv(i4) | 0) != (i17 | 0)) {
         break L14;
        }
       }
      }
      while (1) {
       __ZN7WebCore15SQLiteStatement13getColumnTextEi(i6, i4, 0);
       i22 = __ZN7WebCore14StorageTracker15canDeleteOriginERKN3WTF6StringE(i1, i6) | 0;
       i25 = HEAP32[i5 >> 2] | 0;
       do {
        if ((i25 | 0) != 0) {
         i24 = i25 | 0;
         i23 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
         if ((i23 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i25);
          break;
         } else {
          HEAP32[i24 >> 2] = i23;
          break;
         }
        }
       } while (0);
       if (i22) {
        __ZN7WebCore15SQLiteStatement13getColumnTextEi(i7, i4, 1);
        __ZN7WebCore16SQLiteFileSystem18deleteDatabaseFileERKN3WTF6StringE(i7) | 0;
        i25 = HEAP32[i18 >> 2] | 0;
        do {
         if ((i25 | 0) != 0) {
          i23 = i25 | 0;
          i24 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
          if ((i24 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i25);
           break;
          } else {
           HEAP32[i23 >> 2] = i24;
           break;
          }
         }
        } while (0);
        __ZN3WTF5Mutex4lockEv(i19);
        i25 = HEAP32[i20 >> 2] | 0;
        do {
         if ((i25 | 0) != 0) {
          i22 = HEAP32[(HEAP32[i25 >> 2] | 0) + 8 >> 2] | 0;
          __ZN7WebCore15SQLiteStatement13getColumnTextEi(i8, i4, 0);
          FUNCTION_TABLE_vii[i22 & 15](i25, i8);
          i22 = HEAP32[i21 >> 2] | 0;
          if ((i22 | 0) == 0) {
           break;
          }
          i24 = i22 | 0;
          i23 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
          if ((i23 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i22);
           break;
          } else {
           HEAP32[i24 >> 2] = i23;
           break;
          }
         }
        } while (0);
        __ZN3WTF5Mutex6unlockEv(i19);
       }
       if ((__ZN7WebCore15SQLiteStatement4stepEv(i4) | 0) != (i17 | 0)) {
        break;
       }
      }
     }
    } while (0);
    if ((HEAP32[i15 >> 2] | 0) != 0) {
     __ZN7WebCore14SQLiteDatabase5closeEv(i14);
    }
    i17 = i1 + 132 | 0;
    __ZN3WTF6StringC1EPKc(i3, H_BASE + 344 | 0);
    __ZN7WebCore16SQLiteFileSystem28appendDatabaseFileNameToPathERKN3WTF6StringES4_(i9, i17, i3);
    i19 = HEAP32[i3 >> 2] | 0;
    do {
     if ((i19 | 0) != 0) {
      i21 = i19 | 0;
      i20 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
      if ((i20 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i19);
       break;
      } else {
       HEAP32[i21 >> 2] = i20;
       break;
      }
     }
    } while (0);
    i19 = __ZN7WebCore16SQLiteFileSystem18deleteDatabaseFileERKN3WTF6StringE(i9) | 0;
    i20 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i20 | 0) != 0) {
      i21 = i20 | 0;
      i18 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
      if ((i18 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i20);
       break;
      } else {
       HEAP32[i21 >> 2] = i18;
       break;
      }
     }
    } while (0);
    do {
     if (!i19) {
      __ZN7WebCore14StorageTracker19openTrackerDatabaseEb(i1, 0);
      if ((HEAP32[i15 >> 2] | 0) == 0) {
       break L12;
      }
      __ZN3WTF6StringC1EPKc(i11, H_BASE + 8 | 0);
      __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i10, i14, i11);
      i20 = HEAP32[i11 >> 2] | 0;
      do {
       if ((i20 | 0) != 0) {
        i18 = i20 | 0;
        i21 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
        if ((i21 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i20);
         break;
        } else {
         HEAP32[i18 >> 2] = i21;
         break;
        }
       }
      } while (0);
      if ((__ZN7WebCore15SQLiteStatement7prepareEv(i10) | 0) == (i16 | 0)) {
       i20 = __ZN7WebCore15SQLiteStatement14executeCommandEv(i10) | 0;
       __ZN7WebCore15SQLiteStatementD1Ev(i10);
       if (i20) {
        break;
       } else {
        break L12;
       }
      } else {
       __ZN7WebCore15SQLiteStatementD1Ev(i10);
       break L12;
      }
     }
    } while (0);
    __ZN7WebCore16SQLiteFileSystem28deleteEmptyDatabaseDirectoryERKN3WTF6StringE(i17) | 0;
   }
  } while (0);
  __ZN7WebCore15SQLiteStatementD1Ev(i4);
 }
 if (i13) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i12);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14StorageTracker27syncImportOriginIdentifiersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 i7 = i2 + 40 | 0;
 i8 = i2 + 56 | 0;
 i9 = i1 | 0;
 i10 = (i1 | 0) == 0;
 if (!i10) {
  __ZN3WTF5Mutex4lockEv(i9);
 }
 __ZN7WebCore14StorageTracker19openTrackerDatabaseEb(i1, 0);
 i11 = i1 + 24 | 0;
 do {
  if ((HEAP32[i11 >> 2] | 0) == 0) {
   i12 = 26;
  } else {
   __ZN3WTF6StringC1EPKc(i4, H_BASE + 144 | 0);
   __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i3, i11, i4);
   i13 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i14 = i13 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i14 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i13 = __ZN7WebCore15SQLiteStatement7prepareEv(i3) | 0;
   if ((i13 | 0) != (HEAP32[__ZN7WebCore11SQLResultOkE >> 2] | 0)) {
    __ZN7WebCore15SQLiteStatementD1Ev(i3);
    i16 = 1;
    break;
   }
   i13 = i1 + 164 | 0;
   i15 = (i13 | 0) == 0;
   if (!i15) {
    __ZN3WTF5Mutex4lockEv(i13);
   }
   i14 = __ZN7WebCore15SQLiteStatement4stepEv(i3) | 0;
   if ((i14 | 0) == (HEAP32[__ZN7WebCore12SQLResultRowE >> 2] | 0)) {
    i17 = i1 + 188 | 0;
    i18 = i5 | 0;
    i19 = i6 | 0;
    while (1) {
     __ZN7WebCore15SQLiteStatement13getColumnTextEi(i6, i3, 0);
     __ZNKO3WTF6String12isolatedCopyEv(i5, i6);
     __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i7, i17, i5, i5);
     i20 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i20 | 0) != 0) {
       i21 = i20 | 0;
       i22 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
       if ((i22 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i20);
        break;
       } else {
        HEAP32[i21 >> 2] = i22;
        break;
       }
      }
     } while (0);
     i20 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i20 | 0) != 0) {
       i22 = i20 | 0;
       i21 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
       if ((i21 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i20);
        break;
       } else {
        HEAP32[i22 >> 2] = i21;
        break;
       }
      }
     } while (0);
     i20 = __ZN7WebCore15SQLiteStatement4stepEv(i3) | 0;
     if ((i20 | 0) != (i14 | 0)) {
      i23 = i20;
      break;
     }
    }
   } else {
    i23 = i14;
   }
   if (!i15) {
    __ZN3WTF5Mutex6unlockEv(i13);
   }
   i19 = (i23 | 0) != (HEAP32[__ZN7WebCore13SQLResultDoneE >> 2] | 0);
   __ZN7WebCore15SQLiteStatementD1Ev(i3);
   if (i19) {
    i16 = i19 & 1;
   } else {
    i12 = 26;
   }
  }
 } while (0);
 if ((i12 | 0) == 26) {
  i16 = 0;
 }
 if (!i10) {
  __ZN3WTF5Mutex6unlockEv(i9);
 }
 if ((i16 | 0) == 1) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore14StorageTracker32syncFileSystemAndTrackerDatabaseEv(i1);
 i16 = i1 + 136 | 0;
 i9 = (i16 | 0) == 0;
 if (!i9) {
  __ZN3WTF5Mutex4lockEv(i16);
 }
 i10 = i1 + 160 | 0;
 do {
  if ((HEAP32[i10 >> 2] | 0) != 0) {
   i12 = i1 + 164 | 0;
   i3 = (i12 | 0) == 0;
   if (!i3) {
    __ZN3WTF5Mutex4lockEv(i12);
   }
   i23 = HEAP32[i1 + 188 >> 2] | 0;
   i5 = HEAP32[i1 + 192 >> 2] | 0;
   i7 = i23 + (i5 << 2) | 0;
   L55 : do {
    if ((HEAP32[i1 + 200 >> 2] | 0) != 0) {
     L57 : do {
      if ((i5 | 0) == 0) {
       i24 = i23;
      } else {
       i6 = i23;
       while (1) {
        i4 = HEAP32[i6 >> 2] | 0;
        if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
         i24 = i6;
         break L57;
        }
        i6 = i6 + 4 | 0;
        if ((i6 | 0) == (i7 | 0)) {
         break L55;
        }
       }
      }
     } while (0);
     if ((i24 | 0) == (i7 | 0)) {
      break;
     } else {
      i25 = i24;
     }
     while (1) {
      i6 = HEAP32[i10 >> 2] | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 15](i6, i25);
      i6 = i25 + 4 | 0;
      if ((i6 | 0) == (i7 | 0)) {
       break L55;
      } else {
       i26 = i6;
      }
      while (1) {
       i6 = HEAP32[i26 >> 2] | 0;
       if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
        break;
       }
       i6 = i26 + 4 | 0;
       if ((i6 | 0) == (i7 | 0)) {
        break L55;
       } else {
        i26 = i6;
       }
      }
      if ((i26 | 0) == (i7 | 0)) {
       break;
      } else {
       i25 = i26;
      }
     }
    }
   } while (0);
   if (i3) {
    break;
   }
   __ZN3WTF5Mutex6unlockEv(i12);
  }
 } while (0);
 if (!i9) {
  __ZN3WTF5Mutex6unlockEv(i16);
 }
 i16 = __ZN3WTF10fastMallocEj(20) | 0;
 HEAP32[i16 + 4 >> 2] = 1;
 HEAP32[i16 >> 2] = H_BASE + 376;
 i9 = i16 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_vi + 14;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i16 + 16 >> 2] = i1;
 i1 = i8 | 0;
 HEAP32[i1 >> 2] = i16;
 __ZN3WTF16callOnMainThreadERKNS_8FunctionIFvvEEE(i8);
 i8 = HEAP32[i1 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i8 + 4 | 0;
 i8 = i1 | 0;
 if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 i8 = i1 - 4 | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14StorageTracker16setOriginDetailsERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[i1 + 232 | 0] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 i10 = i1 + 164 | 0;
 i11 = (i10 | 0) == 0;
 if (!i11) {
  __ZN3WTF5Mutex4lockEv(i10);
 }
 i12 = i1 + 188 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 L7 : do {
  if ((i13 | 0) != 0) {
   i14 = HEAP32[i1 + 196 >> 2] | 0;
   i15 = i2 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   i17 = HEAP32[i16 + 16 >> 2] | 0;
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i16) | 0;
   }
   i16 = (i18 >>> 23) + ~i18 | 0;
   i17 = i16 << 12 ^ i16;
   i16 = i17 >>> 7 ^ i17;
   i17 = i16 << 2 ^ i16;
   i16 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   while (1) {
    i20 = i17 & i14;
    i21 = i13 + (i20 << 2) | 0;
    i22 = HEAP32[i21 >> 2] | 0;
    i23 = i22;
    if ((i23 | 0) == 0) {
     break L7;
    } else if ((i23 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i22, HEAP32[i15 >> 2] | 0) | 0) {
      break;
     }
    }
    i22 = (i19 | 0) == 0 ? i16 : i19;
    i17 = i22 + i20 | 0;
    i19 = i22;
   }
   if ((i21 | 0) == 0) {
    break;
   }
   if (i11) {
    STACKTOP = i4;
    return;
   }
   __ZN3WTF5Mutex6unlockEv(i10);
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i5, i12 | 0, i2, i2);
 if (!i11) {
  __ZN3WTF5Mutex6unlockEv(i10);
 }
 __ZNKR3WTF6String12isolatedCopyEv(i7, i2);
 __ZNKR3WTF6String12isolatedCopyEv(i8, i3);
 i3 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i3 + 4 >> 2] = 1;
 HEAP32[i3 >> 2] = H_BASE + 408;
 i2 = i3 + 8 | 0;
 HEAP32[i2 >> 2] = F_BASE_viii + 2;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP32[i3 + 16 >> 2] = i1;
 i2 = i7 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i3 + 20 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i10 = i7 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = i8 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 HEAP32[i3 + 24 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = i3;
 i3 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i10 = i3 | 0;
   i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i10 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i3 = __ZN3WTF12isMainThreadEv() | 0;
 i8 = HEAP32[i1 + 228 >> 2] | 0;
 do {
  if (i3) {
   __ZN7WebCore13StorageThread8dispatchERKN3WTF8FunctionIFvvEEE(i8, i6);
  } else {
   i1 = __ZN3WTF10fastMallocEj(24) | 0;
   HEAP32[i1 + 4 >> 2] = 1;
   HEAP32[i1 >> 2] = H_BASE + 472;
   i2 = i1 + 8 | 0;
   HEAP32[i2 >> 2] = F_BASE_vii + 8;
   HEAP32[i2 + 4 >> 2] = 0;
   HEAP32[i1 + 16 >> 2] = i8;
   i2 = HEAP32[i7 >> 2] | 0;
   HEAP32[i1 + 20 >> 2] = i2;
   if ((i2 | 0) != 0) {
    i10 = i2 + 4 | 0;
    tempValue = HEAP32[i10 >> 2] | 0, HEAP32[i10 >> 2] = tempValue + 1, tempValue;
   }
   i10 = i9 | 0;
   HEAP32[i10 >> 2] = i1;
   __ZN3WTF16callOnMainThreadERKNS_8FunctionIFvvEEE(i9);
   i1 = HEAP32[i10 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   i10 = i1 + 4 | 0;
   i1 = i10 | 0;
   if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
  }
 } while (0);
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i9 + 4 | 0;
 i9 = i7 | 0;
 if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 i9 = i7 - 4 | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14StorageTracker16syncDeleteOriginERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i1 | 0;
 i10 = (i1 | 0) == 0;
 if (!i10) {
  __ZN3WTF5Mutex4lockEv(i9);
 }
 do {
  if (__ZN7WebCore14StorageTracker15canDeleteOriginERKN3WTF6StringE(i1, i2) | 0) {
   __ZN7WebCore14StorageTracker19openTrackerDatabaseEb(i1, 0);
   i11 = i1 + 24 | 0;
   if ((HEAP32[i11 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore14StorageTracker21databasePathForOriginERKN3WTF6StringE(i5, i1, i2);
   i12 = i5 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
    i14 = i13;
   } else {
    __ZN3WTF6StringC1EPKc(i7, H_BASE + 304 | 0);
    __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i6, i11, i7);
    i13 = HEAP32[i7 >> 2] | 0;
    do {
     if ((i13 | 0) != 0) {
      i15 = i13 | 0;
      i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
      if ((i16 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i13);
       break;
      } else {
       HEAP32[i15 >> 2] = i16;
       break;
      }
     }
    } while (0);
    i13 = __ZN7WebCore15SQLiteStatement7prepareEv(i6) | 0;
    do {
     if ((i13 | 0) == (HEAP32[__ZN7WebCore11SQLResultOkE >> 2] | 0)) {
      __ZN7WebCore15SQLiteStatement8bindTextEiRKN3WTF6StringE(i6, 1, i2) | 0;
      if (!(__ZN7WebCore15SQLiteStatement14executeCommandEv(i6) | 0)) {
       break;
      }
      __ZN7WebCore16SQLiteFileSystem18deleteDatabaseFileERKN3WTF6StringE(i5) | 0;
      i16 = i1 + 164 | 0;
      i15 = (i16 | 0) == 0;
      if (!i15) {
       __ZN3WTF5Mutex4lockEv(i16);
      }
      __ZN3WTF7HashSetINS_6StringENS_10StringHashENS_10HashTraitsIS1_EEE6removeERKS1_(i1 + 188 | 0, i2) | 0;
      i17 = (HEAP32[i1 + 200 >> 2] | 0) == 0;
      if (!i15) {
       __ZN3WTF5Mutex6unlockEv(i16);
      }
      if (i17) {
       __ZN7WebCore14SQLiteDatabase5closeEv(i11);
       i17 = i1 + 132 | 0;
       __ZN3WTF6StringC1EPKc(i4, H_BASE + 344 | 0);
       __ZN7WebCore16SQLiteFileSystem28appendDatabaseFileNameToPathERKN3WTF6StringES4_(i8, i17, i4);
       i16 = HEAP32[i4 >> 2] | 0;
       do {
        if ((i16 | 0) != 0) {
         i15 = i16 | 0;
         i18 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
         if ((i18 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i16);
          break;
         } else {
          HEAP32[i15 >> 2] = i18;
          break;
         }
        }
       } while (0);
       __ZN7WebCore16SQLiteFileSystem18deleteDatabaseFileERKN3WTF6StringE(i8) | 0;
       i16 = HEAP32[i8 >> 2] | 0;
       do {
        if ((i16 | 0) != 0) {
         i18 = i16 | 0;
         i15 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
         if ((i15 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i16);
          break;
         } else {
          HEAP32[i18 >> 2] = i15;
          break;
         }
        }
       } while (0);
       __ZN7WebCore16SQLiteFileSystem28deleteEmptyDatabaseDirectoryERKN3WTF6StringE(i17) | 0;
      }
      i16 = i1 + 136 | 0;
      i15 = (i16 | 0) == 0;
      if (!i15) {
       __ZN3WTF5Mutex4lockEv(i16);
      }
      i18 = HEAP32[i1 + 160 >> 2] | 0;
      if ((i18 | 0) != 0) {
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] & 15](i18, i2);
      }
      if (i15) {
       break;
      }
      __ZN3WTF5Mutex6unlockEv(i16);
     }
    } while (0);
    __ZN7WebCore15SQLiteStatementD1Ev(i6);
    i11 = HEAP32[i12 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    } else {
     i14 = i11;
    }
   }
   i11 = i14 | 0;
   i13 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i11 >> 2] = i13;
    break;
   }
  }
 } while (0);
 if (i10) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i9);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14StorageTracker20syncSetOriginDetailsERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = i1 | 0;
 i9 = (i1 | 0) == 0;
 if (!i9) {
  __ZN3WTF5Mutex4lockEv(i8);
 }
 __ZN7WebCore14StorageTracker19openTrackerDatabaseEb(i1, 1);
 i10 = i1 + 24 | 0;
 if ((HEAP32[i10 >> 2] | 0) != 0) {
  __ZN3WTF6StringC1EPKc(i6, H_BASE + 72 | 0);
  __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i5, i10, i6);
  i10 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i10 | 0) != 0) {
    i6 = i10 | 0;
    i11 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i10);
     break;
    } else {
     HEAP32[i6 >> 2] = i11;
     break;
    }
   }
  } while (0);
  i10 = __ZN7WebCore15SQLiteStatement7prepareEv(i5) | 0;
  do {
   if ((i10 | 0) == (HEAP32[__ZN7WebCore11SQLResultOkE >> 2] | 0)) {
    __ZN7WebCore15SQLiteStatement8bindTextEiRKN3WTF6StringE(i5, 1, i2) | 0;
    __ZN7WebCore15SQLiteStatement8bindTextEiRKN3WTF6StringE(i5, 2, i3) | 0;
    __ZN7WebCore15SQLiteStatement4stepEv(i5) | 0;
    i11 = i1 + 164 | 0;
    i6 = (i11 | 0) == 0;
    if (!i6) {
     __ZN3WTF5Mutex4lockEv(i11);
    }
    i12 = i1 + 188 | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    L17 : do {
     if ((i13 | 0) == 0) {
      i14 = 20;
     } else {
      i15 = HEAP32[i1 + 196 >> 2] | 0;
      i16 = i2 | 0;
      i17 = HEAP32[i16 >> 2] | 0;
      i18 = HEAP32[i17 + 16 >> 2] | 0;
      if (i18 >>> 0 > 127 >>> 0) {
       i19 = i18 >>> 7;
      } else {
       i19 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i17) | 0;
      }
      i17 = (i19 >>> 23) + ~i19 | 0;
      i18 = i17 << 12 ^ i17;
      i17 = i18 >>> 7 ^ i18;
      i18 = i17 << 2 ^ i17;
      i17 = i18 >>> 20 ^ i18 | 1;
      i18 = i19;
      i20 = 0;
      while (1) {
       i21 = i18 & i15;
       i22 = i13 + (i21 << 2) | 0;
       i23 = HEAP32[i22 >> 2] | 0;
       i24 = i23;
       if ((i24 | 0) == 0) {
        i14 = 20;
        break L17;
       } else if ((i24 | 0) != (-1 | 0)) {
        if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i16 >> 2] | 0) | 0) {
         break;
        }
       }
       i23 = (i20 | 0) == 0 ? i17 : i20;
       i18 = i23 + i21 | 0;
       i20 = i23;
      }
      if ((i22 | 0) == 0) {
       i14 = 20;
      }
     }
    } while (0);
    if ((i14 | 0) == 20) {
     __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i7, i12 | 0, i2, i2);
    }
    if (!i6) {
     __ZN3WTF5Mutex6unlockEv(i11);
    }
    i13 = i1 + 136 | 0;
    i20 = (i13 | 0) == 0;
    if (!i20) {
     __ZN3WTF5Mutex4lockEv(i13);
    }
    i18 = HEAP32[i1 + 160 >> 2] | 0;
    if ((i18 | 0) != 0) {
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] & 15](i18, i2);
    }
    if (i20) {
     break;
    }
    __ZN3WTF5Mutex6unlockEv(i13);
   }
  } while (0);
  __ZN7WebCore15SQLiteStatementD1Ev(i5);
 }
 if (i9) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i8);
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i1, i2, i3) {
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
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
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
  i2 = i7 + (i10 << 2) | 0;
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
    i22 = i14 + (i21 << 2) | 0;
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
  i1 = HEAP32[i7 + (i28 << 2) >> 2] | 0;
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
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i8, 0) | 0;
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
  i13 = i10 + (i12 << 2) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
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
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  HEAP32[i9 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i4 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i4 = i9 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i4 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i4 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i4;
 i13 = i2 + 4 | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i9 | 0)) {
  i19 = i18;
  i20 = i9;
 } else {
  if ((i9 | 0) == 0) {
   i21 = 8;
  } else {
   i17 = i9 << 1;
   i21 = (i4 * 6 & -1 | 0) < (i17 | 0) ? i9 : i17;
  }
  i17 = __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i21, i18) | 0;
  i19 = i17;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 2) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i8, 0) | 0;
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
  i13 = i10 + (i12 << 2) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
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
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  HEAP32[i9 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = i4 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i18 | 0;
 i13 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i4;
 do {
  if ((i13 | 0) != 0) {
   i4 = i13 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i4 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i9 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i9;
 i13 = i2 + 4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i21 = 8;
  } else {
   i17 = i4 << 1;
   i21 = (i9 * 6 & -1 | 0) < (i17 | 0) ? i4 : i17;
  }
  i17 = __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i21, i18) | 0;
  i19 = i17;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 2) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore14StorageTracker24setDatabaseDirectoryPathERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 | 0;
 i7 = (i1 | 0) == 0;
 if (!i7) {
  __ZN3WTF5Mutex4lockEv(i6);
 }
 i8 = i1 + 24 | 0;
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  __ZN7WebCore14SQLiteDatabase5closeEv(i8);
 }
 __ZNKR3WTF6String12isolatedCopyEv(i5, i2);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i8 = i1 + 132 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i5;
 do {
  if ((i9 | 0) != 0) {
   i5 = i9 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i5 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i2 = i9 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i2 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i9 = i1 + 164 | 0;
 i8 = (i9 | 0) == 0;
 if (!i8) {
  __ZN3WTF5Mutex4lockEv(i9);
 }
 i2 = i1 + 188 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i10 = HEAP32[i1 + 192 >> 2] | 0;
  if ((i10 | 0) > 0) {
   i11 = 0;
   while (1) {
    i12 = HEAP32[i5 + (i11 << 2) >> 2] | 0;
    i13 = i12;
    do {
     if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
      i14 = i12 | 0;
      i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
      if ((i15 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i12);
       break;
      } else {
       HEAP32[i14 >> 2] = i15;
       break;
      }
     }
    } while (0);
    i11 = i11 + 1 | 0;
    if ((i11 | 0) >= (i10 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i5);
  _memset(i2 | 0, 0, 16) | 0;
 }
 if (!i8) {
  __ZN3WTF5Mutex6unlockEv(i9);
 }
 do {
  if ((HEAP8[i1 + 232 | 0] & 1) != 0) {
   i9 = HEAP32[i1 + 228 >> 2] | 0;
   i8 = __ZN3WTF10fastMallocEj(20) | 0;
   HEAP32[i8 + 4 >> 2] = 1;
   HEAP32[i8 >> 2] = H_BASE + 376;
   i2 = i8 + 8 | 0;
   HEAP32[i2 >> 2] = F_BASE_vi + 2;
   HEAP32[i2 + 4 >> 2] = 0;
   HEAP32[i8 + 16 >> 2] = i1;
   i2 = i4 | 0;
   HEAP32[i2 >> 2] = i8;
   __ZN7WebCore13StorageThread8dispatchERKN3WTF8FunctionIFvvEEE(i9, i4);
   i9 = HEAP32[i2 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i2 = i9 + 4 | 0;
   i9 = i2 | 0;
   if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i9 = i2 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
  }
 } while (0);
 if (i7) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i6);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14StorageTracker12deleteOriginEPNS_14SecurityOriginE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 if ((HEAP8[i1 + 232 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore9PageGroup26clearLocalStorageForOriginEPNS_14SecurityOriginE(i2);
 __ZNK7WebCore14SecurityOrigin18databaseIdentifierEv(i5, i2);
 i2 = i1 + 164 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i4, i1 + 208 | 0, i5, i5);
  __ZN3WTF7HashSetINS_6StringENS_10StringHashENS_10HashTraitsIS1_EEE6removeERKS1_(i1 + 188 | 0, i5) | 0;
 } else {
  __ZN3WTF5Mutex4lockEv(i2);
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i4, i1 + 208 | 0, i5, i5);
  __ZN3WTF7HashSetINS_6StringENS_10StringHashENS_10HashTraitsIS1_EEE6removeERKS1_(i1 + 188 | 0, i5) | 0;
  __ZN3WTF5Mutex6unlockEv(i2);
 }
 i2 = HEAP32[i1 + 228 >> 2] | 0;
 __ZNKR3WTF6String12isolatedCopyEv(i7, i5);
 i4 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i4 + 4 >> 2] = 1;
 HEAP32[i4 >> 2] = H_BASE + 440;
 i8 = i4 + 8 | 0;
 HEAP32[i8 >> 2] = F_BASE_vii + 6;
 HEAP32[i8 + 4 >> 2] = 0;
 HEAP32[i4 + 16 >> 2] = i1;
 i1 = i7 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i4 + 20 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = i4;
 __ZN7WebCore13StorageThread8dispatchERKN3WTF8FunctionIFvvEEE(i2, i6);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 + 4 | 0;
   i2 = i8 | 0;
   if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i2 = i8 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
  }
 } while (0);
 i6 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i1 = i6 | 0;
   i2 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i1 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i6 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore14StorageTracker7originsERN3WTF6VectorINS1_6RefPtrINS_14SecurityOriginEEELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP8[i1 + 232 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 + 164 | 0;
 i6 = (i5 | 0) == 0;
 if (!i6) {
  __ZN3WTF5Mutex4lockEv(i5);
 }
 i7 = HEAP32[i1 + 188 >> 2] | 0;
 i8 = HEAP32[i1 + 192 >> 2] | 0;
 i9 = i7 + (i8 << 2) | 0;
 L7 : do {
  if ((HEAP32[i1 + 200 >> 2] | 0) != 0) {
   L9 : do {
    if ((i8 | 0) == 0) {
     i10 = i7;
    } else {
     i11 = i7;
     while (1) {
      i12 = HEAP32[i11 >> 2] | 0;
      if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
       i10 = i11;
       break L9;
      }
      i11 = i11 + 4 | 0;
      if ((i11 | 0) == (i9 | 0)) {
       break L7;
      }
     }
    }
   } while (0);
   if ((i10 | 0) == (i9 | 0)) {
    break;
   }
   i11 = i2 + 8 | 0;
   i12 = i2 + 4 | 0;
   i13 = i2 | 0;
   i14 = i4 | 0;
   i15 = i10;
   while (1) {
    __ZN7WebCore14SecurityOrigin28createFromDatabaseIdentifierERKN3WTF6StringE(i4, i15);
    i16 = HEAP32[i11 >> 2] | 0;
    if ((i16 | 0) == (HEAP32[i12 >> 2] | 0)) {
     __ZN3WTF6VectorINS_6RefPtrIN7WebCore14SecurityOriginEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i16 + 1 | 0);
     i17 = (HEAP32[i13 >> 2] | 0) + (HEAP32[i11 >> 2] << 2) | 0;
     i18 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     HEAP32[i17 >> 2] = i18;
    } else {
     i18 = (HEAP32[i13 >> 2] | 0) + (i16 << 2) | 0;
     i16 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     HEAP32[i18 >> 2] = i16;
    }
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
    i16 = HEAP32[i14 >> 2] | 0;
    do {
     if ((i16 | 0) != 0) {
      i18 = i16 | 0;
      if (((tempValue = HEAP32[i18 >> 2] | 0, HEAP32[i18 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
       break;
      }
      __ZN7WebCore14SecurityOriginD2Ev(i16);
      __ZN3WTF8fastFreeEPv(i16);
     }
    } while (0);
    i16 = i15 + 4 | 0;
    if ((i16 | 0) == (i9 | 0)) {
     break L7;
    } else {
     i19 = i16;
    }
    while (1) {
     i16 = HEAP32[i19 >> 2] | 0;
     if (!((i16 | 0) == (-1 | 0) | (i16 | 0) == 0)) {
      break;
     }
     i16 = i19 + 4 | 0;
     if ((i16 | 0) == (i9 | 0)) {
      break L7;
     } else {
      i19 = i16;
     }
    }
    if ((i19 | 0) == (i9 | 0)) {
     break;
    } else {
     i15 = i19;
    }
   }
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
function __ZN3WTF7HashSetINS_6StringENS_10StringHashENS_10HashTraitsIS1_EEE6removeERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = i5 << 2 | 0;
  i7 = 0;
  i8 = i5;
 } else {
  i5 = HEAP32[i1 + 8 >> 2] | 0;
  i9 = i2 | 0;
  i2 = HEAP32[i9 >> 2] | 0;
  i10 = HEAP32[i2 + 16 >> 2] | 0;
  if (i10 >>> 0 > 127 >>> 0) {
   i11 = i10 >>> 7;
  } else {
   i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
  }
  i2 = (i11 >>> 23) + ~i11 | 0;
  i10 = i2 << 12 ^ i2;
  i2 = i10 >>> 7 ^ i10;
  i10 = i2 << 2 ^ i2;
  i2 = i10 >>> 20 ^ i10 | 1;
  i10 = i11;
  i11 = 0;
  while (1) {
   i12 = i10 & i5;
   i13 = i4 + (i12 << 2) | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   i15 = i14;
   if ((i15 | 0) == 0) {
    i16 = 0;
    break;
   } else if ((i15 | 0) != (-1 | 0)) {
    if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i9 >> 2] | 0) | 0) {
     i16 = i13;
     break;
    }
   }
   i13 = (i11 | 0) == 0 ? i2 : i11;
   i10 = i13 + i12 | 0;
   i11 = i13;
  }
  i11 = HEAP32[i3 >> 2] | 0;
  i3 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = (i16 | 0) == 0 ? i11 + (i3 << 2) | 0 : i16;
  i7 = i11;
  i8 = i3;
 }
 i3 = i1 | 0;
 i11 = i1 + 4 | 0;
 if ((i6 | 0) == (i7 + (i8 << 2) | 0)) {
  i17 = 0;
  return i17 | 0;
 }
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i16 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i16;
    break;
   }
  }
 } while (0);
 HEAP32[i8 >> 2] = -1;
 i8 = i1 + 16 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 i8 = i1 + 12 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 HEAP32[i8 >> 2] = i1;
 i8 = HEAP32[i11 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i8 | 0) & (i8 | 0) > 8)) {
  i17 = 1;
  return i17 | 0;
 }
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i3, (i8 | 0) / 2 & -1, 0) | 0;
 i17 = 1;
 return i17 | 0;
}
function __ZN7WebCore14StorageTracker19openTrackerDatabaseEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 + 24 | 0;
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 344 | 0);
 __ZN7WebCore16SQLiteFileSystem28appendDatabaseFileNameToPathERKN3WTF6StringES4_(i5, i1 + 132 | 0, i4);
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i9;
    break;
   }
  }
 } while (0);
 do {
  if (__ZN7WebCore16SQLiteFileSystem24ensureDatabaseFileExistsERKN3WTF6StringEb(i5, i2) | 0) {
   if (!(__ZN7WebCore14SQLiteDatabase4openERKN3WTF6StringEb(i8, i5, 0) | 0)) {
    break;
   }
   __ZN3WTF6StringC1EPKc(i6, H_BASE + 256 | 0);
   i1 = __ZN7WebCore14SQLiteDatabase11tableExistsERKN3WTF6StringE(i8, i6) | 0;
   i9 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i4 = i9 | 0;
     i10 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i4 >> 2] = i10;
      break;
     }
    }
   } while (0);
   if (i1) {
    break;
   }
   __ZN3WTF6StringC1EPKc(i7, H_BASE + 176 | 0);
   __ZN7WebCore14SQLiteDatabase14executeCommandERKN3WTF6StringE(i8, i7) | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = i9 | 0;
   i4 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i7 | 0;
 i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore14StorageTracker20willDeleteAllOriginsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 188 >> 2] | 0;
 i6 = HEAP32[i1 + 192 >> 2] | 0;
 i7 = i5 + (i6 << 2) | 0;
 if ((HEAP32[i1 + 200 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 L4 : do {
  if ((i6 | 0) == 0) {
   i8 = i5;
  } else {
   i9 = i5;
   while (1) {
    i10 = HEAP32[i9 >> 2] | 0;
    if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
     i8 = i9;
     break L4;
    }
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i7 | 0)) {
     break;
    }
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 if ((i8 | 0) == (i7 | 0)) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 + 208 | 0;
 i1 = i3 | 0;
 i6 = i8;
 L13 : while (1) {
  __ZNKR3WTF6String12isolatedCopyEv(i3, i6);
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i4, i5, i3, i3);
  i8 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i9 = i8 | 0;
    i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i9 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i8 = i6 + 4 | 0;
  if ((i8 | 0) == (i7 | 0)) {
   i11 = 19;
   break;
  } else {
   i12 = i8;
  }
  while (1) {
   i8 = HEAP32[i12 >> 2] | 0;
   if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
    break;
   }
   i8 = i12 + 4 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    i11 = 21;
    break L13;
   } else {
    i12 = i8;
   }
  }
  if ((i12 | 0) == (i7 | 0)) {
   i11 = 20;
   break;
  } else {
   i6 = i12;
  }
 }
 if ((i11 | 0) == 19) {
  STACKTOP = i2;
  return;
 } else if ((i11 | 0) == 20) {
  STACKTOP = i2;
  return;
 } else if ((i11 | 0) == 21) {
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore14StorageTracker16deleteAllOriginsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if ((HEAP8[i1 + 232 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i1 + 164 | 0;
 i5 = (i4 | 0) == 0;
 if (!i5) {
  __ZN3WTF5Mutex4lockEv(i4);
 }
 __ZN7WebCore14StorageTracker20willDeleteAllOriginsEv(i1);
 i6 = i1 + 188 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i8 = HEAP32[i1 + 192 >> 2] | 0;
  if ((i8 | 0) > 0) {
   i9 = 0;
   while (1) {
    i10 = HEAP32[i7 + (i9 << 2) >> 2] | 0;
    i11 = i10;
    do {
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      i12 = i10 | 0;
      i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
      if ((i13 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i10);
       break;
      } else {
       HEAP32[i12 >> 2] = i13;
       break;
      }
     }
    } while (0);
    i9 = i9 + 1 | 0;
    if ((i9 | 0) >= (i8 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i7);
  _memset(i6 | 0, 0, 16) | 0;
 }
 if (!i5) {
  __ZN3WTF5Mutex6unlockEv(i4);
 }
 __ZN7WebCore9PageGroup30clearLocalStorageForAllOriginsEv();
 i4 = HEAP32[i1 + 228 >> 2] | 0;
 i5 = __ZN3WTF10fastMallocEj(20) | 0;
 HEAP32[i5 + 4 >> 2] = 1;
 HEAP32[i5 >> 2] = H_BASE + 376;
 i6 = i5 + 8 | 0;
 HEAP32[i6 >> 2] = F_BASE_vi + 22;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i5 + 16 >> 2] = i1;
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = i5;
 __ZN7WebCore13StorageThread8dispatchERKN3WTF8FunctionIFvvEEE(i4, i3);
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i3 + 4 | 0;
 i3 = i1 | 0;
 if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14StorageTracker18diskUsageForOriginEPNS_14SecurityOriginE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP8[i1 + 232 | 0] & 1) == 0) {
  i6 = 0;
  i7 = 0;
  STACKTOP = i3;
  return (tempRet0 = i6, i7) | 0;
 }
 i8 = i1 | 0;
 __ZN3WTF5Mutex4lockEv(i8);
 __ZNK7WebCore14SecurityOrigin18databaseIdentifierEv(i5, i2);
 __ZN7WebCore14StorageTracker21databasePathForOriginERKN3WTF6StringE(i4, i1, i5);
 i1 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i5 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i1 = i4 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i9 = 0;
   i10 = 0;
  } else {
   if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
    i11 = i2;
    i12 = 0;
    i13 = 0;
   } else {
    i5 = __ZN7WebCore16SQLiteFileSystem19getDatabaseFileSizeERKN3WTF6StringE(i4) | 0;
    i14 = tempRet0;
    i15 = HEAP32[i1 >> 2] | 0;
    if ((i15 | 0) == 0) {
     i9 = i14;
     i10 = i5;
     break;
    } else {
     i11 = i15;
     i12 = i14;
     i13 = i5;
    }
   }
   i5 = i11 | 0;
   i14 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    i9 = i12;
    i10 = i13;
    break;
   } else {
    HEAP32[i5 >> 2] = i14;
    i9 = i12;
    i10 = i13;
    break;
   }
  }
 } while (0);
 __ZN3WTF5Mutex6unlockEv(i8);
 i6 = i9;
 i7 = i10;
 STACKTOP = i3;
 return (tempRet0 = i6, i7) | 0;
}
function __ZN7WebCore14StorageTracker7trackerEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i2 = i1 | 0;
 do {
  if ((HEAP32[H_BASE + 504 >> 2] | 0) == 0) {
   i3 = __ZN3WTF10fastMallocEj(248) | 0;
   __ZN3WTF6StringC1EPKc(i2, H_BASE + 496 | 0);
   __ZN3WTF5MutexC1Ev(i3);
   __ZN7WebCore14SQLiteDatabaseC1Ev(i3 + 24 | 0);
   __ZNKR3WTF6String12isolatedCopyEv(i3 + 132 | 0, i2);
   __ZN3WTF5MutexC1Ev(i3 + 136 | 0);
   HEAP32[i3 + 160 >> 2] = 0;
   __ZN3WTF5MutexC1Ev(i3 + 164 | 0);
   _memset(i3 + 188 | 0, 0, 40) | 0;
   i4 = __ZN3WTF10fastMallocEj(100) | 0;
   __ZN7WebCore13StorageThreadC1Ev(i4);
   HEAP32[i3 + 228 >> 2] = i4;
   HEAP8[i3 + 232 | 0] = 0;
   HEAP8[i3 + 233 | 0] = 0;
   HEAPF64[i3 + 240 >> 3] = +300;
   HEAP32[H_BASE + 504 >> 2] = i3;
   i3 = HEAP32[i2 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[H_BASE + 504 >> 2] | 0;
 if ((HEAP8[i2 + 233 | 0] & 1) == 0) {
  i6 = i2;
  STACKTOP = i1;
  return i6 | 0;
 }
 __ZN7WebCore14StorageTracker18internalInitializeEv(i2);
 i6 = HEAP32[H_BASE + 504 >> 2] | 0;
 STACKTOP = i1;
 return i6 | 0;
}
function __ZN7WebCore14StorageTracker21databasePathForOriginERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i2 + 24 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 264 | 0);
 __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i5, i7, i6);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i7 = __ZN7WebCore15SQLiteStatement7prepareEv(i5) | 0;
 do {
  if ((i7 | 0) == (HEAP32[__ZN7WebCore11SQLResultOkE >> 2] | 0)) {
   __ZN7WebCore15SQLiteStatement8bindTextEiRKN3WTF6StringE(i5, 1, i3) | 0;
   i2 = __ZN7WebCore15SQLiteStatement4stepEv(i5) | 0;
   if ((i2 | 0) == (HEAP32[__ZN7WebCore12SQLResultRowE >> 2] | 0)) {
    __ZN7WebCore15SQLiteStatement13getColumnTextEi(i1, i5, 0);
    break;
   } else {
    HEAP32[i1 >> 2] = 0;
    break;
   }
  } else {
   HEAP32[i1 >> 2] = 0;
  }
 } while (0);
 __ZN7WebCore15SQLiteStatementD1Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14StorageTracker18internalInitializeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP8[i1 + 233 | 0] = 0;
 __ZN7WebCore12UTF8EncodingEv() | 0;
 HEAP8[(HEAP32[H_BASE + 504 >> 2] | 0) + 232 | 0] = 1;
 __ZN7WebCore13StorageThread5startEv(HEAP32[(HEAP32[H_BASE + 504 >> 2] | 0) + 228 >> 2] | 0) | 0;
 i1 = HEAP32[H_BASE + 504 >> 2] | 0;
 if ((HEAP8[i1 + 232 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = HEAP32[i1 + 228 >> 2] | 0;
 i5 = __ZN3WTF10fastMallocEj(20) | 0;
 HEAP32[i5 + 4 >> 2] = 1;
 HEAP32[i5 >> 2] = H_BASE + 376;
 i6 = i5 + 8 | 0;
 HEAP32[i6 >> 2] = F_BASE_vi + 2;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i5 + 16 >> 2] = i1;
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = i5;
 __ZN7WebCore13StorageThread8dispatchERKN3WTF8FunctionIFvvEEE(i4, i3);
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i3 + 4 | 0;
 i3 = i1 | 0;
 if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14StorageTracker15canDeleteOriginERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = i1 + 164 | 0;
 i4 = (i3 | 0) == 0;
 if (!i4) {
  __ZN3WTF5Mutex4lockEv(i3);
 }
 i5 = HEAP32[i1 + 208 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
 } else {
  i7 = HEAP32[i1 + 216 >> 2] | 0;
  i1 = i2 | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  i8 = HEAP32[i2 + 16 >> 2] | 0;
  if (i8 >>> 0 > 127 >>> 0) {
   i9 = i8 >>> 7;
  } else {
   i9 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
  }
  i2 = (i9 >>> 23) + ~i9 | 0;
  i8 = i2 << 12 ^ i2;
  i2 = i8 >>> 7 ^ i8;
  i8 = i2 << 2 ^ i2;
  i2 = i8 >>> 20 ^ i8 | 1;
  i8 = i9;
  i9 = 0;
  while (1) {
   i10 = i8 & i7;
   i11 = i5 + (i10 << 2) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   i13 = i12;
   if ((i13 | 0) == 0) {
    i14 = 0;
    break;
   } else if ((i13 | 0) != (-1 | 0)) {
    if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i12, HEAP32[i1 >> 2] | 0) | 0) {
     i14 = i11;
     break;
    }
   }
   i11 = (i9 | 0) == 0 ? i2 : i9;
   i8 = i11 + i10 | 0;
   i9 = i11;
  }
  i6 = (i14 | 0) != 0;
 }
 if (i4) {
  return i6 | 0;
 }
 __ZN3WTF5Mutex6unlockEv(i3);
 return i6 | 0;
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
function __ZN7WebCore14StorageTracker17initializeTrackerERKN3WTF6StringEPNS_20StorageTrackerClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = HEAP32[H_BASE + 504 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  i5 = i4 + 160 | 0;
  HEAP32[i5 >> 2] = i2;
  i6 = HEAP32[H_BASE + 504 >> 2] | 0;
  i7 = i6 + 233 | 0;
  HEAP8[i7] = 1;
  return;
 }
 i3 = __ZN3WTF10fastMallocEj(248) | 0;
 i8 = i3;
 __ZN3WTF5MutexC1Ev(i3);
 __ZN7WebCore14SQLiteDatabaseC1Ev(i3 + 24 | 0);
 __ZNKR3WTF6String12isolatedCopyEv(i3 + 132 | 0, i1);
 __ZN3WTF5MutexC1Ev(i3 + 136 | 0);
 HEAP32[i3 + 160 >> 2] = 0;
 __ZN3WTF5MutexC1Ev(i3 + 164 | 0);
 _memset(i3 + 188 | 0, 0, 40) | 0;
 i1 = __ZN3WTF10fastMallocEj(100) | 0;
 __ZN7WebCore13StorageThreadC1Ev(i1);
 HEAP32[i3 + 228 >> 2] = i1;
 HEAP8[i3 + 232 | 0] = 0;
 HEAP8[i3 + 233 | 0] = 0;
 HEAPF64[i3 + 240 >> 3] = +300;
 HEAP32[H_BASE + 504 >> 2] = i8;
 i4 = i8;
 i5 = i4 + 160 | 0;
 HEAP32[i5 >> 2] = i2;
 i6 = HEAP32[H_BASE + 504 >> 2] | 0;
 i7 = i6 + 233 | 0;
 HEAP8[i7] = 1;
 return;
}
function __ZN7WebCore14StorageTracker23importOriginIdentifiersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if ((HEAP8[i1 + 232 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = HEAP32[i1 + 228 >> 2] | 0;
 i5 = __ZN3WTF10fastMallocEj(20) | 0;
 HEAP32[i5 + 4 >> 2] = 1;
 HEAP32[i5 >> 2] = H_BASE + 376;
 i6 = i5 + 8 | 0;
 HEAP32[i6 >> 2] = F_BASE_vi + 2;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i5 + 16 >> 2] = i1;
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = i5;
 __ZN7WebCore13StorageThread8dispatchERKN3WTF8FunctionIFvvEEE(i4, i3);
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i3 + 4 | 0;
 i3 = i1 | 0;
 if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 STACKTOP = i2;
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore14SecurityOriginEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvRKNS_6StringES6_EEEFvPS3_S4_S4_EED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 408;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
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
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
}
function __ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvRKNS_6StringES6_EEEFvPS3_S4_S4_EED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 408;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
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
 i2 = HEAP32[i1 + 20 >> 2] | 0;
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
function __ZN7WebCore14StorageTracker26deleteOriginWithIdentifierERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore14SecurityOrigin28createFromDatabaseIdentifierERKN3WTF6StringE(i4, i2);
 i2 = i4 | 0;
 __ZN7WebCore14StorageTracker12deleteOriginEPNS_14SecurityOriginE(i1, HEAP32[i2 >> 2] | 0);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 | 0;
 if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14StorageTracker19trackerDatabasePathEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 344 | 0);
 __ZN7WebCore16SQLiteFileSystem28appendDatabaseFileNameToPathERKN3WTF6StringES4_(i1, i2 + 132 | 0, i4);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore13StorageThreadEFvRKNS_8FunctionIFvvEEEEEEFvPS3_S6_EED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 472;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i4 = i3 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvRKNS_6StringES6_EEEFvPS3_S4_S4_EEclEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 20 | 0;
 i3 = i1 + 24 | 0;
 i4 = i1 + 8 | 0;
 i5 = (HEAP32[i1 + 16 >> 2] | 0) + (HEAP32[i4 + 4 >> 2] | 0) | 0;
 i1 = i5;
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 & 1 | 0) == 0) {
  i7 = i6;
  FUNCTION_TABLE_viii[i7 & 3](i1, i2, i3);
  return;
 } else {
  i7 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 - 1) >> 2] | 0;
  FUNCTION_TABLE_viii[i7 & 3](i1, i2, i3);
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 376 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_vi + 28;
}
function __ZN7WebCore14StorageTrackerC2ERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3WTF5MutexC1Ev(i1 | 0);
 __ZN7WebCore14SQLiteDatabaseC1Ev(i1 + 24 | 0);
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 132 | 0, i2);
 __ZN3WTF5MutexC1Ev(i1 + 136 | 0);
 HEAP32[i1 + 160 >> 2] = 0;
 __ZN3WTF5MutexC1Ev(i1 + 164 | 0);
 _memset(i1 + 188 | 0, 0, 40) | 0;
 i2 = __ZN3WTF10fastMallocEj(100) | 0;
 __ZN7WebCore13StorageThreadC1Ev(i2);
 HEAP32[i1 + 228 >> 2] = i2;
 HEAP8[i1 + 232 | 0] = 0;
 HEAP8[i1 + 233 | 0] = 0;
 HEAPF64[i1 + 240 >> 3] = +300;
 return;
}
function __ZN7WebCore14StorageTrackerC1ERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3WTF5MutexC1Ev(i1 | 0);
 __ZN7WebCore14SQLiteDatabaseC1Ev(i1 + 24 | 0);
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 132 | 0, i2);
 __ZN3WTF5MutexC1Ev(i1 + 136 | 0);
 HEAP32[i1 + 160 >> 2] = 0;
 __ZN3WTF5MutexC1Ev(i1 + 164 | 0);
 _memset(i1 + 188 | 0, 0, 40) | 0;
 i2 = __ZN3WTF10fastMallocEj(100) | 0;
 __ZN7WebCore13StorageThreadC1Ev(i2);
 HEAP32[i1 + 228 >> 2] = i2;
 HEAP8[i1 + 232 | 0] = 0;
 HEAP8[i1 + 233 | 0] = 0;
 HEAPF64[i1 + 240 >> 3] = +300;
 return;
}
function __ZN7WebCore14StorageTracker20cancelDeletingOriginERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP8[i1 + 232 | 0] & 1) == 0) {
  return;
 }
 i3 = i1 | 0;
 __ZN3WTF5Mutex4lockEv(i3);
 i4 = i1 + 164 | 0;
 i5 = (i4 | 0) == 0;
 if (!i5) {
  __ZN3WTF5Mutex4lockEv(i4);
 }
 if ((HEAP32[i1 + 220 >> 2] | 0) != 0) {
  __ZN3WTF7HashSetINS_6StringENS_10StringHashENS_10HashTraitsIS1_EEE6removeERKS1_(i1 + 208 | 0, i2) | 0;
 }
 if (!i5) {
  __ZN3WTF5Mutex6unlockEv(i4);
 }
 __ZN3WTF5Mutex6unlockEv(i3);
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
function __ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore13StorageThreadEFvRKNS_8FunctionIFvvEEEEEEFvPS3_S6_EEclEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 20 | 0;
 i3 = i1 + 8 | 0;
 i4 = (HEAP32[i1 + 16 >> 2] | 0) + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i1 = i4;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 15](i1, i2);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i4 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 15](i1, i2);
  return;
 }
}
function __ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore13StorageThreadEFvRKNS_8FunctionIFvvEEEEEEFvPS3_S6_EED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 472;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  return;
 }
 i2 = i1 - 4 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
 return;
}
function __ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvRKNS_6StringEEEEFvPS3_S4_EEclEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 20 | 0;
 i3 = i1 + 8 | 0;
 i4 = (HEAP32[i1 + 16 >> 2] | 0) + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i1 = i4;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 15](i1, i2);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i4 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 15](i1, i2);
  return;
 }
}
function __ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvRKNS_6StringEEEEFvPS3_S4_EED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 440;
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
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvvEEEFvPS3_EEclEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 8 | 0;
 i3 = (HEAP32[i1 + 16 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i1 = i3;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i5 = i4;
  FUNCTION_TABLE_vi[i5 & 31](i1);
  return;
 } else {
  i5 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i4 - 1) >> 2] | 0;
  FUNCTION_TABLE_vi[i5 & 31](i1);
  return;
 }
}
function __ZN7WebCore14StorageTracker16willDeleteOriginERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i3 | 0, i1 + 208 | 0, i2, i2);
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
function __ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvRKNS_6StringEEEEFvPS3_S4_EED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 440;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
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
function __ZN7WebCore14StorageTracker34finishedImportingOriginIdentifiersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 i3 = (i1 | 0) == 0;
 if (!i3) {
  __ZN3WTF5Mutex4lockEv(i2);
 }
 i4 = HEAP32[i1 + 160 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 31](i4);
 }
 if (i3) {
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i2);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZN7WebCore13StorageThread8dispatchERKN3WTF8FunctionIFvvEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore13StorageThread8dispatchERKN3WTF8FunctionIFvvEEE(i1 | 0, i2 | 0);
}
function __ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvvEEEFvPS3_EED0Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 376;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvvEEEFvPS3_EED1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 376;
 return;
}
function __ZNK7WebCore14StorageTracker21databaseDirectoryPathEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNKR3WTF6String12isolatedCopyEv(i1, i2 + 132 | 0);
 return;
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
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore14StorageTracker11setIsActiveEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 232 | 0] = i2 & 1;
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
function __ZN7WebCore14StorageTracker8isActiveEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 232 | 0] & 1) != 0 | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore14StorageTracker27syncImportOriginIdentifiersEv,b0,__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvvEEEFvPS3_EED0Ev,b0,__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvRKNS_6StringEEEEFvPS3_S4_EEclEv,b0,__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvvEEEFvPS3_EEclEv,b0,__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvRKNS_6StringEEEEFvPS3_S4_EED0Ev,b0,__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvRKNS_6StringES6_EEEFvPS3_S4_S4_EED1Ev,b0,__ZN7WebCore14StorageTracker34finishedImportingOriginIdentifiersEv,b0,__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvRKNS_6StringEEEEFvPS3_S4_EED1Ev,b0,__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvvEEEFvPS3_EED1Ev,b0,__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore13StorageThreadEFvRKNS_8FunctionIFvvEEEEEEFvPS3_S6_EED1Ev,b0,__ZN7WebCore14StorageTracker20syncDeleteAllOriginsEv,b0,__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvRKNS_6StringES6_EEEFvPS3_S4_S4_EED0Ev,b0,__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvRKNS_6StringES6_EEEFvPS3_S4_S4_EEclEv,b0,__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore13StorageThreadEFvRKNS_8FunctionIFvvEEEEEEFvPS3_S6_EEclEv
  ,b0,__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore13StorageThreadEFvRKNS_8FunctionIFvvEEEEEEFvPS3_S6_EED0Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore14StorageTrackerC2ERKN3WTF6StringE,b1,__ZN7WebCore14StorageTracker26deleteOriginWithIdentifierERKN3WTF6StringE,b1,__ZN7WebCore14StorageTracker16syncDeleteOriginERKN3WTF6StringE,b1,vii___ZN7WebCore13StorageThread8dispatchERKN3WTF8FunctionIFvvEEE__wrapper,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore14StorageTracker20syncSetOriginDetailsERKN3WTF6StringES4_,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore13SQLResultDoneE": __ZN7WebCore13SQLResultDoneE, "__ZN7WebCore11SQLResultOkE": __ZN7WebCore11SQLResultOkE, "__ZN7WebCore12SQLResultRowE": __ZN7WebCore12SQLResultRowE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore14StorageTracker15canDeleteOriginERKN3WTF6StringE","_strlen","__ZN7WebCore14StorageTracker12deleteOriginEPNS_14SecurityOriginE","__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvRKNS_6StringEEEEFvPS3_S4_EEclEv","__ZN7WebCore14StorageTracker23importOriginIdentifiersEv","__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvvEEEFvPS3_EED0Ev","__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore13StorageThreadEFvRKNS_8FunctionIFvvEEEEEEFvPS3_S6_EED1Ev","__ZN7WebCore14StorageTracker32syncFileSystemAndTrackerDatabaseEv","__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore13StorageThreadEFvRKNS_8FunctionIFvvEEEEEEFvPS3_S6_EED0Ev","__ZN7WebCore14StorageTracker7trackerEv","__ZN7WebCore14StorageTracker19openTrackerDatabaseEb","__ZN7WebCore14StorageTracker27syncImportOriginIdentifiersEv","__ZN7WebCore14StorageTracker8isActiveEv","__ZN7WebCore14StorageTracker21databasePathForOriginERKN3WTF6StringE","__ZN7WebCore14StorageTrackerC2ERKN3WTF6StringE","__ZN7WebCore14StorageTracker20syncSetOriginDetailsERKN3WTF6StringES4_","__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvvEEEFvPS3_EEclEv","__ZN7WebCore14StorageTracker16setOriginDetailsERKN3WTF6StringES4_","_memset","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","_memcpy","__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvRKNS_6StringES6_EEEFvPS3_S4_S4_EED0Ev","__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvRKNS_6StringES6_EEEFvPS3_S4_S4_EEclEv","__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore13StorageThreadEFvRKNS_8FunctionIFvvEEEEEEFvPS3_S6_EEclEv","__ZN7WebCore14StorageTracker20cancelDeletingOriginERKN3WTF6StringE","__ZN7WebCore14SecurityOriginD2Ev","__ZN7WebCore14StorageTracker18diskUsageForOriginEPNS_14SecurityOriginE","__ZN7WebCore14StorageTracker11setIsActiveEb","__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvRKNS_6StringES6_EEEFvPS3_S4_S4_EED1Ev","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_","__ZN7WebCore14StorageTracker19trackerDatabasePathEv","__ZN7WebCore14StorageTracker16deleteAllOriginsEv","__ZN7WebCore14StorageTracker34finishedImportingOriginIdentifiersEv","__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvRKNS_6StringEEEEFvPS3_S4_EED0Ev","__ZN3WTF6VectorINS_6RefPtrIN7WebCore14SecurityOriginEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvRKNS_6StringEEEEFvPS3_S4_EED1Ev","__ZN3WTF7HashSetINS_6StringENS_10StringHashENS_10HashTraitsIS1_EEE6removeERKS1_","__ZN7WebCore14StorageTracker16syncDeleteOriginERKN3WTF6StringE","__ZN7WebCore14StorageTracker24setDatabaseDirectoryPathERKN3WTF6StringE","__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore14StorageTrackerEFvvEEEFvPS3_EED1Ev","__ZN7WebCore14StorageTracker20syncDeleteAllOriginsEv","__ZN7WebCore14StorageTracker26deleteOriginWithIdentifierERKN3WTF6StringE","__ZN7WebCore14StorageTracker20willDeleteAllOriginsEv","__ZN7WebCore14StorageTracker18internalInitializeEv","__ZN7WebCore14StorageTracker17initializeTrackerERKN3WTF6StringEPNS_20StorageTrackerClientE","__ZN7WebCore14StorageTracker7originsERN3WTF6VectorINS1_6RefPtrINS_14SecurityOriginEEELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore14StorageTracker16willDeleteOriginERKN3WTF6StringE","__ZNK7WebCore14StorageTracker21databaseDirectoryPathEv"]

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
H_BASE = parentModule["_malloc"](408 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 408;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore24IDBFactoryBackendLevelDBC1ERKN3WTF6StringE;
var __ZN7WebCore24IDBFactoryBackendLevelDBD1Ev;
/* memory initializer */ allocate([73,110,116,101,114,110,97,108,32,101,114,114,111,114,32,99,114,101,97,116,105,110,103,32,100,97,116,97,98,97,115,101,32,98,97,99,107,101,110,100,32,102,111,114,32,105,110,100,101,120,101,100,100,98,46,111,112,101,110,46,0,0,0,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,32,111,112,101,110,105,110,103,32,98,97,99,107,105,110,103,32,115,116,111,114,101,32,102,111,114,32,105,110,100,101,120,101,100,68,66,46,111,112,101,110,46,0,0,0,0,0,0,0,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,32,99,114,101,97,116,105,110,103,32,100,97,116,97,98,97,115,101,32,98,97,99,107,101,110,100,32,102,111,114,32,105,110,100,101,120,101,100,68,66,46,100,101,108,101,116,101,68,97,116,97,98,97,115,101,46,0,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,32,111,112,101,110,105,110,103,32,98,97,99,107,105,110,103,32,115,116,111,114,101,32,102,111,114,32,105,110,100,101,120,101,100,68,66,46,100,101,108,101,116,101,68,97,116,97,98,97,115,101,46,0,0,0,0,0,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,32,111,112,101,110,105,110,103,32,98,97,99,107,105,110,103,32,115,116,111,114,101,32,102,111,114,32,105,110,100,101,120,101,100,68,66,46,119,101,98,107,105,116,71,101,116,68,97,116,97,98,97,115,101,78,97,109,101,115,46,0,0,0,0,0,0,64,49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
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
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  try {
    Module["dynCall_viiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
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
function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
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
  var __ZTVN7WebCore24IDBFactoryBackendLevelDBE=(H_BASE+368)|0;
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
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiiiiiii=env.invoke_viiiiiiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore24IDBFactoryBackendLevelDB16openBackingStoreERKNS_14SecurityOriginERKN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 48 | 0;
 i12 = i5 + 56 | 0;
 i13 = i5 + 64 | 0;
 i14 = i5 + 72 | 0;
 i15 = i5 + 80 | 0;
 i16 = i5 + 96 | 0;
 __ZNK7WebCore14SecurityOrigin18databaseIdentifierEv(i9, i3);
 i17 = i9 | 0;
 i9 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i18 = 0;
  } else {
   i19 = i9 | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   i21 = i20 + 2 | 0;
   HEAP32[i19 >> 2] = i20 + 4;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    i18 = i9;
    break;
   } else {
    HEAP32[i19 >> 2] = i21;
    i18 = i9;
    break;
   }
  }
 } while (0);
 i9 = i8 | 0;
 HEAP32[i9 >> 2] = i18;
 i21 = (i18 | 0) == 0;
 if (!i21) {
  i19 = i18 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i7, i8, H_BASE + 360 | 0);
 i8 = i7 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = i8 | 0;
   i19 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i9 >> 2] = i19;
    break;
   }
  }
 } while (0);
 if ((i7 | 0) == 0) {
  _WTFCrash();
 }
 i8 = i10 | 0;
 HEAP32[i8 >> 2] = i7;
 do {
  if (!i21) {
   i7 = i18 | 0;
   i19 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i7 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i17 = i18 | 0;
   i21 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i17 >> 2] = i21;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i4 >> 2] | 0;
 if ((i18 | 0) == 0) {
  i22 = 1;
 } else {
  i22 = (HEAP32[i18 + 4 >> 2] | 0) == 0;
 }
 i18 = i2 + 28 | 0;
 i21 = i18 | 0;
 i17 = HEAP32[i21 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i19 = HEAP32[i2 + 32 >> 2] | 0;
  i23 = i19 << 3 | 0;
  i24 = 0;
  i25 = i19;
 } else {
  i19 = HEAP32[i2 + 36 >> 2] | 0;
  i7 = HEAP32[i8 >> 2] | 0;
  i9 = HEAP32[i7 + 16 >> 2] | 0;
  if (i9 >>> 0 > 127 >>> 0) {
   i26 = i9 >>> 7;
  } else {
   i26 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i7) | 0;
  }
  i7 = (i26 >>> 23) + ~i26 | 0;
  i9 = i7 << 12 ^ i7;
  i7 = i9 >>> 7 ^ i9;
  i9 = i7 << 2 ^ i7;
  i7 = i9 >>> 20 ^ i9 | 1;
  i9 = i26;
  i26 = 0;
  while (1) {
   i20 = i9 & i19;
   i27 = i17 + (i20 << 3) | 0;
   i28 = HEAP32[i27 >> 2] | 0;
   i29 = i28;
   if ((i29 | 0) == 0) {
    i30 = 0;
    break;
   } else if ((i29 | 0) != (-1 | 0)) {
    if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i28, HEAP32[i8 >> 2] | 0) | 0) {
     i30 = i27;
     break;
    }
   }
   i27 = (i26 | 0) == 0 ? i7 : i26;
   i9 = i27 + i20 | 0;
   i26 = i27;
  }
  i26 = HEAP32[i21 >> 2] | 0;
  i9 = HEAP32[i2 + 32 >> 2] | 0;
  i23 = (i30 | 0) == 0 ? i26 + (i9 << 3) | 0 : i30;
  i24 = i26;
  i25 = i9;
 }
 i9 = i2 + 32 | 0;
 do {
  if ((i23 | 0) == (i24 + (i25 << 3) | 0)) {
   i31 = 36;
  } else {
   i26 = HEAP32[(HEAP32[i23 + 4 >> 2] | 0) + 4 >> 2] | 0;
   if ((i26 | 0) == 0) {
    i31 = 36;
    break;
   }
   HEAP32[i1 >> 2] = i26;
   i30 = i26 + 4 | 0;
   HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
  }
 } while (0);
 do {
  if ((i31 | 0) == 36) {
   i23 = i11 | 0;
   HEAP32[i23 >> 2] = 0;
   if (i22) {
    __ZN7WebCore22IDBBackingStoreLevelDB12openInMemoryERKN3WTF6StringE(i12, i10);
    i25 = i12 | 0;
    i24 = HEAP32[i25 >> 2] | 0;
    HEAP32[i25 >> 2] = 0;
    i32 = i24;
    i33 = i24;
   } else {
    __ZN7WebCore22IDBBackingStoreLevelDB4openERKNS_14SecurityOriginERKN3WTF6StringES7_(i13, i3, i4, i10);
    i24 = i13 | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    HEAP32[i24 >> 2] = 0;
    i32 = i25;
    i33 = i25;
   }
   HEAP32[i23 >> 2] = i33;
   if ((i32 | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
    break;
   }
   i25 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   i24 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   HEAP32[i2 + 36 >> 2] = 0;
   i30 = i2 + 40 | 0;
   i26 = HEAP32[i30 >> 2] | 0;
   HEAP32[i30 >> 2] = 0;
   HEAP32[i2 + 44 >> 2] = 0;
   i30 = i25 + (i24 << 3) | 0;
   L60 : do {
    if ((i26 | 0) != 0) {
     L62 : do {
      if ((i24 | 0) == 0) {
       i34 = i25;
      } else {
       i7 = i25;
       while (1) {
        i17 = HEAP32[i7 >> 2] | 0;
        if (!((i17 | 0) == (-1 | 0) | (i17 | 0) == 0)) {
         i34 = i7;
         break L62;
        }
        i7 = i7 + 8 | 0;
        if ((i7 | 0) == (i30 | 0)) {
         break L60;
        }
       }
      }
     } while (0);
     if ((i34 | 0) == (i30 | 0)) {
      break;
     }
     i7 = i18 | 0;
     i17 = i6 + 8 | 0;
     i19 = i6 | 0;
     i27 = i34;
     while (1) {
      i20 = i27 + 4 | 0;
      i28 = i20 | 0;
      do {
       if ((HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] | 0) != 0) {
        __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7WeakPtrIN7WebCore22IDBBackingStoreLevelDBEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i6, i7, i27 | 0, i20);
        if ((HEAP8[i17] & 1) != 0) {
         break;
        }
        i29 = HEAP32[i19 >> 2] | 0;
        i35 = HEAP32[i28 >> 2] | 0;
        if ((i35 | 0) != 0) {
         i36 = i35 | 0;
         tempValue = HEAP32[i36 >> 2] | 0, HEAP32[i36 >> 2] = tempValue + 1, tempValue;
        }
        i36 = i29 + 4 | 0;
        i29 = HEAP32[i36 >> 2] | 0;
        HEAP32[i36 >> 2] = i35;
        if ((i29 | 0) == 0) {
         break;
        }
        i35 = i29 | 0;
        if (((tempValue = HEAP32[i35 >> 2] | 0, HEAP32[i35 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
         break;
        }
        __ZN3WTF8fastFreeEPv(i29);
       }
      } while (0);
      i28 = i27 + 8 | 0;
      if ((i28 | 0) == (i30 | 0)) {
       break L60;
      } else {
       i37 = i28;
      }
      while (1) {
       i28 = HEAP32[i37 >> 2] | 0;
       if (!((i28 | 0) == (-1 | 0) | (i28 | 0) == 0)) {
        break;
       }
       i28 = i37 + 8 | 0;
       if ((i28 | 0) == (i30 | 0)) {
        break L60;
       } else {
        i37 = i28;
       }
      }
      if ((i37 | 0) == (i30 | 0)) {
       break;
      } else {
       i27 = i37;
      }
     }
    }
   } while (0);
   if ((i25 | 0) != 0) {
    if ((i24 | 0) > 0) {
     i30 = 0;
     while (1) {
      i26 = i25 + (i30 << 3) | 0;
      do {
       if ((HEAP32[i26 >> 2] | 0) != -1) {
        i27 = HEAP32[i25 + (i30 << 3) + 4 >> 2] | 0;
        do {
         if ((i27 | 0) != 0) {
          i19 = i27 | 0;
          if (((tempValue = HEAP32[i19 >> 2] | 0, HEAP32[i19 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
           break;
          }
          __ZN3WTF8fastFreeEPv(i27);
         }
        } while (0);
        i27 = HEAP32[i26 >> 2] | 0;
        if ((i27 | 0) == 0) {
         break;
        }
        i19 = i27 | 0;
        i17 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
        if ((i17 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i27);
         break;
        } else {
         HEAP32[i19 >> 2] = i17;
         break;
        }
       }
      } while (0);
      i30 = i30 + 1 | 0;
      if ((i30 | 0) >= (i24 | 0)) {
       break;
      }
     }
    }
    __ZN3WTF8fastFreeEPv(i25);
   }
   i24 = HEAP32[(HEAP32[i23 >> 2] | 0) + 20 >> 2] | 0;
   if ((i24 | 0) != 0) {
    i30 = i24 | 0;
    tempValue = HEAP32[i30 >> 2] | 0, HEAP32[i30 >> 2] = tempValue + 1, tempValue;
   }
   i30 = i14 | 0;
   HEAP32[i30 >> 2] = i24;
   __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7WeakPtrIN7WebCore22IDBBackingStoreLevelDBEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i15, i18 | 0, i10, i14);
   do {
    if ((HEAP8[i15 + 8 | 0] & 1) == 0) {
     i24 = HEAP32[i15 >> 2] | 0;
     i26 = HEAP32[i30 >> 2] | 0;
     HEAP32[i30 >> 2] = 0;
     i17 = i24 + 4 | 0;
     i24 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = i26;
     if ((i24 | 0) == 0) {
      break;
     }
     i26 = i24 | 0;
     if (((tempValue = HEAP32[i26 >> 2] | 0, HEAP32[i26 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
      break;
     }
     __ZN3WTF8fastFreeEPv(i24);
    }
   } while (0);
   i25 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i24 = i25 | 0;
     if (((tempValue = HEAP32[i24 >> 2] | 0, HEAP32[i24 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
      break;
     }
     __ZN3WTF8fastFreeEPv(i25);
    }
   } while (0);
   if (i22) {
    __ZN3WTF9HashTableINS_6RefPtrIN7WebCore22IDBBackingStoreLevelDBEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i16, i2 + 48 | 0, i11, i11);
   }
   HEAP32[i1 >> 2] = HEAP32[i23 >> 2];
   HEAP32[i23 >> 2] = 0;
  }
 } while (0);
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = i1 | 0;
 i11 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i8 >> 2] = i11;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore24IDBFactoryBackendLevelDB4openERKN3WTF6StringEyxNS1_10PassRefPtrINS_12IDBCallbacksEEENS5_INS_20IDBDatabaseCallbacksEEERKNS_14SecurityOriginESC_(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i11 = i10 | 0;
 i12 = i10 + 8 | 0;
 i13 = i10 + 16 | 0;
 i14 = i10 + 24 | 0;
 i15 = i10 + 32 | 0;
 i16 = i10 + 40 | 0;
 i17 = i10 + 48 | 0;
 i18 = i10 + 56 | 0;
 i19 = i10 + 72 | 0;
 i20 = i10 + 80 | 0;
 i21 = i10 + 88 | 0;
 i22 = i10 + 96 | 0;
 __ZN7WebCoreL23computeUniqueIdentifierERKN3WTF6StringERKNS_14SecurityOriginE(i11, i2, i9);
 i23 = i1 + 8 | 0;
 __ZN3WTF7HashMapINS_6StringENS_6RefPtrIN7WebCore18IDBDatabaseBackendEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE4findERKS1_(i12, i23, i11);
 i24 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i24 | 0) == ((HEAP32[i23 >> 2] | 0) + (HEAP32[i1 + 12 >> 2] << 3) | 0)) {
   FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 3](i13, i1, i9, i1 + 68 | 0);
   i12 = i13 | 0;
   i25 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i12 = (i25 | 0) == 0;
   do {
    if (i12) {
     i26 = HEAP32[i7 >> 2] | 0;
     i27 = HEAP32[(HEAP32[i26 >> 2] | 0) + 8 >> 2] | 0;
     __ZN3WTF6StringC1EPKc(i15, H_BASE + 72 | 0);
     i28 = __ZN3WTF10fastMallocEj(12) | 0;
     HEAP32[i28 >> 2] = 1;
     HEAP16[i28 + 4 >> 1] = 1201;
     i29 = i15 | 0;
     i30 = HEAP32[i29 >> 2] | 0;
     HEAP32[i28 + 8 >> 2] = i30;
     if ((i30 | 0) != 0) {
      i31 = i30 | 0;
      HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 2;
     }
     i31 = i14 | 0;
     HEAP32[i31 >> 2] = i28;
     FUNCTION_TABLE_vii[i27 & 7](i26, i14);
     i26 = HEAP32[i31 >> 2] | 0;
     do {
      if ((i26 | 0) != 0) {
       i31 = i26 | 0;
       i27 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
       if ((i27 | 0) != 0) {
        HEAP32[i31 >> 2] = i27;
        break;
       }
       i27 = HEAP32[i26 + 8 >> 2] | 0;
       do {
        if ((i27 | 0) != 0) {
         i31 = i27 | 0;
         i28 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
         if ((i28 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i27);
          break;
         } else {
          HEAP32[i31 >> 2] = i28;
          break;
         }
        }
       } while (0);
       __ZN3WTF8fastFreeEPv(i26);
      }
     } while (0);
     i26 = HEAP32[i29 >> 2] | 0;
     if ((i26 | 0) == 0) {
      i32 = 1;
      i33 = 0;
      break;
     }
     i27 = i26 | 0;
     i28 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      i32 = 1;
      i33 = 0;
      break;
     } else {
      HEAP32[i27 >> 2] = i28;
      i32 = 1;
      i33 = 0;
      break;
     }
    } else {
     i28 = __ZN3WTF10fastMallocEj(72) | 0;
     __ZN7WebCore26IDBServerConnectionLevelDBC1ERKN3WTF6StringEPNS_22IDBBackingStoreLevelDBE(i28, i2, i25);
     i27 = i28;
     __ZN7WebCore18IDBDatabaseBackend6createERKN3WTF6StringES4_PNS_26IDBFactoryBackendInterfaceERNS_19IDBServerConnectionE(i16, i2, i11, i1 | 0, i27);
     i26 = i16 | 0;
     i31 = HEAP32[i26 >> 2] | 0;
     HEAP32[i26 >> 2] = 0;
     do {
      if ((i31 | 0) == 0) {
       i26 = HEAP32[i7 >> 2] | 0;
       i30 = HEAP32[(HEAP32[i26 >> 2] | 0) + 8 >> 2] | 0;
       __ZN3WTF6StringC1EPKc(i20, H_BASE + 8 | 0);
       i34 = __ZN3WTF10fastMallocEj(12) | 0;
       HEAP32[i34 >> 2] = 1;
       HEAP16[i34 + 4 >> 1] = 1201;
       i35 = i20 | 0;
       i36 = HEAP32[i35 >> 2] | 0;
       HEAP32[i34 + 8 >> 2] = i36;
       if ((i36 | 0) != 0) {
        i37 = i36 | 0;
        HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 2;
       }
       i37 = i19 | 0;
       HEAP32[i37 >> 2] = i34;
       FUNCTION_TABLE_vii[i30 & 7](i26, i19);
       i26 = HEAP32[i37 >> 2] | 0;
       do {
        if ((i26 | 0) != 0) {
         i37 = i26 | 0;
         i30 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
         if ((i30 | 0) != 0) {
          HEAP32[i37 >> 2] = i30;
          break;
         }
         i30 = HEAP32[i26 + 8 >> 2] | 0;
         do {
          if ((i30 | 0) != 0) {
           i37 = i30 | 0;
           i34 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
           if ((i34 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i30);
            break;
           } else {
            HEAP32[i37 >> 2] = i34;
            break;
           }
          }
         } while (0);
         __ZN3WTF8fastFreeEPv(i26);
        }
       } while (0);
       i26 = HEAP32[i35 >> 2] | 0;
       if ((i26 | 0) == 0) {
        i38 = 1;
        break;
       }
       i30 = i26 | 0;
       i34 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
       if ((i34 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i26);
        i38 = 1;
        break;
       } else {
        HEAP32[i30 >> 2] = i34;
        i38 = 1;
        break;
       }
      } else {
       HEAP32[i17 >> 2] = i31;
       __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore18IDBDatabaseBackendEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_PS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i18, i23 | 0, i11, i17);
       if ((HEAP8[i18 + 8 | 0] & 1) != 0) {
        i38 = 0;
        break;
       }
       i34 = HEAP32[i18 >> 2] | 0;
       i30 = HEAP32[i17 >> 2] | 0;
       if ((i30 | 0) != 0) {
        i26 = i30 | 0;
        HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
       }
       i26 = i34 + 4 | 0;
       i34 = HEAP32[i26 >> 2] | 0;
       HEAP32[i26 >> 2] = i30;
       if ((i34 | 0) == 0) {
        i38 = 0;
        break;
       }
       i30 = i34 | 0;
       i26 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
       if ((i26 | 0) == 0) {
        __ZN7WebCore18IDBDatabaseBackendD1Ev(i34);
        __ZN3WTF8fastFreeEPv(i34);
        i38 = 0;
        break;
       } else {
        HEAP32[i30 >> 2] = i26;
        i38 = 0;
        break;
       }
      }
     } while (0);
     if ((i28 | 0) == 0) {
      i32 = i38;
      i33 = i31;
      break;
     }
     i29 = i28 + 4 | 0;
     i26 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     if ((i26 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 7](i27);
      i32 = i38;
      i33 = i31;
      break;
     } else {
      HEAP32[i29 >> 2] = i26;
      i32 = i38;
      i33 = i31;
      break;
     }
    }
   } while (0);
   do {
    if (!i12) {
     i26 = i25 + 4 | 0;
     i29 = i26 | 0;
     i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     if ((i30 | 0) != 0) {
      HEAP32[i29 >> 2] = i30;
      break;
     }
     i30 = i26 - 4 | 0;
     if ((i30 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 7](i30);
    }
   } while (0);
   if ((i32 | 0) == 0) {
    i39 = i33;
    i40 = 51;
   } else {
    i41 = i33;
   }
  } else {
   i25 = HEAP32[i24 + 4 >> 2] | 0;
   if ((i25 | 0) == 0) {
    i39 = 0;
    i40 = 51;
    break;
   }
   i12 = i25 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   i39 = i25;
   i40 = 51;
  }
 } while (0);
 do {
  if ((i40 | 0) == 51) {
   i24 = i21 | 0;
   i33 = i7 | 0;
   i32 = HEAP32[i33 >> 2] | 0;
   HEAP32[i33 >> 2] = 0;
   HEAP32[i24 >> 2] = i32;
   i32 = i22 | 0;
   i33 = i8 | 0;
   i38 = HEAP32[i33 >> 2] | 0;
   HEAP32[i33 >> 2] = 0;
   HEAP32[i32 >> 2] = i38;
   __ZN7WebCore18IDBDatabaseBackend14openConnectionEN3WTF10PassRefPtrINS_12IDBCallbacksEEENS2_INS_20IDBDatabaseCallbacksEEExy(i39, i21, i22, i5, i6, i3, i4);
   i38 = HEAP32[i32 >> 2] | 0;
   do {
    if ((i38 | 0) != 0) {
     i32 = i38 + 4 | 0;
     i33 = i32 | 0;
     i17 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
     if ((i17 | 0) != 0) {
      HEAP32[i33 >> 2] = i17;
      break;
     }
     i17 = i32 - 4 | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 7](i17);
    }
   } while (0);
   i38 = HEAP32[i24 >> 2] | 0;
   if ((i38 | 0) == 0) {
    i41 = i39;
    break;
   }
   i17 = i38 + 4 | 0;
   i38 = i17 | 0;
   i32 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
   if ((i32 | 0) != 0) {
    HEAP32[i38 >> 2] = i32;
    i41 = i39;
    break;
   }
   i32 = i17 - 4 | 0;
   if ((i32 | 0) == 0) {
    i41 = i39;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] & 7](i32);
   i41 = i39;
  }
 } while (0);
 do {
  if ((i41 | 0) != 0) {
   i39 = i41 | 0;
   i4 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore18IDBDatabaseBackendD1Ev(i41);
    __ZN3WTF8fastFreeEPv(i41);
    break;
   } else {
    HEAP32[i39 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i41 = HEAP32[i11 >> 2] | 0;
 if ((i41 | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 i11 = i41 | 0;
 i4 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i41);
  STACKTOP = i10;
  return;
 } else {
  HEAP32[i11 >> 2] = i4;
  STACKTOP = i10;
  return;
 }
}
function __ZN7WebCore24IDBFactoryBackendLevelDB14deleteDatabaseERKN3WTF6StringENS1_10PassRefPtrINS_12IDBCallbacksEEENS5_INS_14SecurityOriginEEEPNS_22ScriptExecutionContextES4_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i7 = i5 | 0;
 i8 = i5 + 8 | 0;
 i9 = i5 + 16 | 0;
 i10 = i5 + 24 | 0;
 i11 = i5 + 32 | 0;
 i12 = i5 + 40 | 0;
 i13 = i5 + 48 | 0;
 i14 = i5 + 56 | 0;
 i15 = i5 + 64 | 0;
 i16 = i5 + 72 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i4 | 0;
 __ZN7WebCoreL23computeUniqueIdentifierERKN3WTF6StringERKNS_14SecurityOriginE(i8, i2, HEAP32[i20 >> 2] | 0);
 i4 = i1 + 8 | 0;
 __ZN3WTF7HashMapINS_6StringENS_6RefPtrIN7WebCore18IDBDatabaseBackendEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE4findERKS1_(i9, i4, i8);
 i21 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i21 | 0) == ((HEAP32[i4 >> 2] | 0) + (HEAP32[i1 + 12 >> 2] << 3) | 0)) {
   FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 3](i11, i1, HEAP32[i20 >> 2] | 0, i6);
   i9 = i11 | 0;
   i22 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i9 = (i22 | 0) == 0;
   do {
    if (i9) {
     i23 = HEAP32[i3 >> 2] | 0;
     i24 = HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] | 0;
     __ZN3WTF6StringC1EPKc(i13, H_BASE + 208 | 0);
     i25 = __ZN3WTF10fastMallocEj(12) | 0;
     HEAP32[i25 >> 2] = 1;
     HEAP16[i25 + 4 >> 1] = 1201;
     i26 = i13 | 0;
     i27 = HEAP32[i26 >> 2] | 0;
     HEAP32[i25 + 8 >> 2] = i27;
     if ((i27 | 0) != 0) {
      i28 = i27 | 0;
      HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
     }
     i28 = i12 | 0;
     HEAP32[i28 >> 2] = i25;
     FUNCTION_TABLE_vii[i24 & 7](i23, i12);
     i23 = HEAP32[i28 >> 2] | 0;
     do {
      if ((i23 | 0) != 0) {
       i28 = i23 | 0;
       i24 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
       if ((i24 | 0) != 0) {
        HEAP32[i28 >> 2] = i24;
        break;
       }
       i24 = HEAP32[i23 + 8 >> 2] | 0;
       do {
        if ((i24 | 0) != 0) {
         i28 = i24 | 0;
         i25 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
         if ((i25 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i24);
          break;
         } else {
          HEAP32[i28 >> 2] = i25;
          break;
         }
        }
       } while (0);
       __ZN3WTF8fastFreeEPv(i23);
      }
     } while (0);
     i23 = HEAP32[i26 >> 2] | 0;
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
    } else {
     i25 = __ZN3WTF10fastMallocEj(72) | 0;
     __ZN7WebCore26IDBServerConnectionLevelDBC1ERKN3WTF6StringEPNS_22IDBBackingStoreLevelDBE(i25, i2, i22);
     i24 = i25;
     __ZN7WebCore18IDBDatabaseBackend6createERKN3WTF6StringES4_PNS_26IDBFactoryBackendInterfaceERNS_19IDBServerConnectionE(i14, i2, i8, i1 | 0, i24);
     i23 = i14 | 0;
     i28 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = 0;
     i23 = (i28 | 0) == 0;
     do {
      if (i23) {
       i27 = HEAP32[i3 >> 2] | 0;
       i29 = HEAP32[(HEAP32[i27 >> 2] | 0) + 8 >> 2] | 0;
       __ZN3WTF6StringC1EPKc(i19, H_BASE + 136 | 0);
       i30 = __ZN3WTF10fastMallocEj(12) | 0;
       HEAP32[i30 >> 2] = 1;
       HEAP16[i30 + 4 >> 1] = 1201;
       i31 = i19 | 0;
       i32 = HEAP32[i31 >> 2] | 0;
       HEAP32[i30 + 8 >> 2] = i32;
       if ((i32 | 0) != 0) {
        i33 = i32 | 0;
        HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 2;
       }
       i33 = i18 | 0;
       HEAP32[i33 >> 2] = i30;
       FUNCTION_TABLE_vii[i29 & 7](i27, i18);
       i27 = HEAP32[i33 >> 2] | 0;
       do {
        if ((i27 | 0) != 0) {
         i33 = i27 | 0;
         i29 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
         if ((i29 | 0) != 0) {
          HEAP32[i33 >> 2] = i29;
          break;
         }
         i29 = HEAP32[i27 + 8 >> 2] | 0;
         do {
          if ((i29 | 0) != 0) {
           i33 = i29 | 0;
           i30 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
           if ((i30 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i29);
            break;
           } else {
            HEAP32[i33 >> 2] = i30;
            break;
           }
          }
         } while (0);
         __ZN3WTF8fastFreeEPv(i27);
        }
       } while (0);
       i27 = HEAP32[i31 >> 2] | 0;
       if ((i27 | 0) == 0) {
        break;
       }
       i29 = i27 | 0;
       i30 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
       if ((i30 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i27);
        break;
       } else {
        HEAP32[i29 >> 2] = i30;
        break;
       }
      } else {
       HEAP32[i15 >> 2] = i28;
       __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore18IDBDatabaseBackendEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_PS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i16, i4 | 0, i8, i15);
       do {
        if ((HEAP8[i16 + 8 | 0] & 1) == 0) {
         i30 = HEAP32[i16 >> 2] | 0;
         i29 = HEAP32[i15 >> 2] | 0;
         if ((i29 | 0) != 0) {
          i27 = i29 | 0;
          HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
         }
         i27 = i30 + 4 | 0;
         i30 = HEAP32[i27 >> 2] | 0;
         HEAP32[i27 >> 2] = i29;
         if ((i30 | 0) == 0) {
          break;
         }
         i29 = i30 | 0;
         i27 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
         if ((i27 | 0) == 0) {
          __ZN7WebCore18IDBDatabaseBackendD1Ev(i30);
          __ZN3WTF8fastFreeEPv(i30);
          break;
         } else {
          HEAP32[i29 >> 2] = i27;
          break;
         }
        }
       } while (0);
       i31 = i17 | 0;
       i27 = i3 | 0;
       i29 = HEAP32[i27 >> 2] | 0;
       HEAP32[i27 >> 2] = 0;
       HEAP32[i31 >> 2] = i29;
       __ZN7WebCore18IDBDatabaseBackend14deleteDatabaseEN3WTF10PassRefPtrINS_12IDBCallbacksEEE(i28, i17);
       i29 = HEAP32[i31 >> 2] | 0;
       do {
        if ((i29 | 0) != 0) {
         i31 = i29 + 4 | 0;
         i27 = i31 | 0;
         i30 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
         if ((i30 | 0) != 0) {
          HEAP32[i27 >> 2] = i30;
          break;
         }
         i30 = i31 - 4 | 0;
         if ((i30 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 7](i30);
        }
       } while (0);
       __ZN3WTF7HashMapINS_6StringENS_6RefPtrIN7WebCore18IDBDatabaseBackendEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE4findERKS1_(i7, i4, i8);
       __ZN3WTF7HashMapINS_6StringENS_6RefPtrIN7WebCore18IDBDatabaseBackendEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS1_NS_12KeyValuePairIS1_S5_EENS_24KeyValuePairKeyExtractorISE_EES6_NSA_18KeyValuePairTraitsES8_EESE_EE(i4, i7) | 0;
      }
     } while (0);
     do {
      if (!i23) {
       i26 = i28 | 0;
       i29 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
       if ((i29 | 0) == 0) {
        __ZN7WebCore18IDBDatabaseBackendD1Ev(i28);
        __ZN3WTF8fastFreeEPv(i28);
        break;
       } else {
        HEAP32[i26 >> 2] = i29;
        break;
       }
      }
     } while (0);
     if ((i25 | 0) == 0) {
      break;
     }
     i28 = i25 + 4 | 0;
     i23 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 7](i24);
      break;
     } else {
      HEAP32[i28 >> 2] = i23;
      break;
     }
    }
   } while (0);
   if (i9) {
    break;
   }
   i23 = i22 + 4 | 0;
   i28 = i23 | 0;
   i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
   if ((i29 | 0) != 0) {
    HEAP32[i28 >> 2] = i29;
    break;
   }
   i29 = i23 - 4 | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 7](i29);
  } else {
   i29 = HEAP32[i21 + 4 >> 2] | 0;
   i23 = i10 | 0;
   i28 = i3 | 0;
   i26 = HEAP32[i28 >> 2] | 0;
   HEAP32[i28 >> 2] = 0;
   HEAP32[i23 >> 2] = i26;
   __ZN7WebCore18IDBDatabaseBackend14deleteDatabaseEN3WTF10PassRefPtrINS_12IDBCallbacksEEE(i29, i10);
   i29 = HEAP32[i23 >> 2] | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   i23 = i29 + 4 | 0;
   i29 = i23 | 0;
   i26 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i29 >> 2] = i26;
    break;
   }
   i26 = i23 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 7](i26);
  }
 } while (0);
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = i10 | 0;
 i3 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i8 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore18IDBDatabaseBackendEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_PS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
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
  HEAP32[i5 >> 2] = __ZN3WTF16fastZeroedMallocEj(i9 << 3) | 0;
  if ((i10 | 0) != 0) {
   i9 = 0;
   while (1) {
    i8 = i9 << 3 | 0;
    i11 = HEAP32[i8 >> 2] | 0;
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore18IDBDatabaseBackendEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_(i2, i8) | 0;
    }
    i9 = i9 + 1 | 0;
    if ((i9 | 0) == (i10 | 0)) {
     break;
    }
   }
  }
  HEAP32[i2 + 16 >> 2] = 0;
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore18IDBDatabaseBackendEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(0, i10);
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
 i9 = i14;
 i14 = 0;
 while (1) {
  i8 = i9 & i6;
  i15 = i12 + (i8 << 3) | 0;
  i11 = HEAP32[i15 >> 2] | 0;
  i16 = i11;
  if ((i16 | 0) == (-1 | 0)) {
   i17 = i15;
  } else if ((i16 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i11, HEAP32[i7 >> 2] | 0) | 0) {
    i18 = 16;
    break;
   } else {
    i17 = i10;
   }
  }
  i11 = (i14 | 0) == 0 ? i3 : i14;
  i10 = i17;
  i9 = i11 + i8 | 0;
  i14 = i11;
 }
 if ((i18 | 0) == 16) {
  i18 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i14 = i1;
  HEAP32[i14 >> 2] = i15;
  HEAP32[i14 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i10 | 0) == 0) {
  i19 = i15;
 } else {
  i15 = i10;
  HEAP32[i15 >> 2] = 0;
  HEAP32[i15 + 4 >> 2] = 0;
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
 i15 = HEAP32[i4 >> 2] | 0;
 if ((i15 | 0) != 0) {
  i4 = i15 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i19 + 4 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i15;
 do {
  if ((i7 | 0) != 0) {
   i15 = i7 | 0;
   i4 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore18IDBDatabaseBackendD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i15 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i7 = i2 + 12 | 0;
 i4 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
 HEAP32[i7 >> 2] = i4;
 i7 = i2 + 16 | 0;
 i15 = i2 + 4 | 0;
 i10 = HEAP32[i15 >> 2] | 0;
 if (((HEAP32[i7 >> 2] | 0) + i4 << 1 | 0) < (i10 | 0)) {
  i20 = i19;
  i21 = i10;
 } else {
  if ((i10 | 0) == 0) {
   i22 = 8;
   i23 = 0;
  } else {
   i18 = i10 << 1;
   i22 = (i4 * 6 & -1 | 0) < (i18 | 0) ? i10 : i18;
   i23 = i10;
  }
  i10 = HEAP32[i5 >> 2] | 0;
  HEAP32[i15 >> 2] = i22;
  HEAP32[i13 >> 2] = i22 - 1;
  HEAP32[i5 >> 2] = __ZN3WTF16fastZeroedMallocEj(i22 << 3) | 0;
  if ((i23 | 0) == 0) {
   i24 = 0;
  } else {
   i22 = 0;
   i13 = 0;
   while (1) {
    i18 = i10 + (i22 << 3) | 0;
    i4 = HEAP32[i18 >> 2] | 0;
    if ((i4 | 0) == (-1 | 0) | (i4 | 0) == 0) {
     i25 = i13;
    } else {
     i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore18IDBDatabaseBackendEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_(i2, i18) | 0;
     i25 = (i18 | 0) == (i19 | 0) ? i4 : i13;
    }
    i4 = i22 + 1 | 0;
    if ((i4 | 0) == (i23 | 0)) {
     i24 = i25;
     break;
    } else {
     i22 = i4;
     i13 = i25;
    }
   }
  }
  HEAP32[i7 >> 2] = 0;
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore18IDBDatabaseBackendEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i10, i23);
  i20 = i24;
  i21 = HEAP32[i15 >> 2] | 0;
 }
 i15 = (HEAP32[i5 >> 2] | 0) + (i21 << 3) | 0;
 i21 = i1;
 HEAP32[i21 >> 2] = i20;
 HEAP32[i21 + 4 >> 2] = i15;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i8 = (i2 | 0) == 0;
 if (i8) {
  i9 = 0;
 } else {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = (i3 | 0) == 0;
 if (i11) {
  i12 = 0;
 } else {
  i12 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i13 = _llvm_uadd_with_overflow_i32(i9 | 0, i12 | 0) | 0;
 i12 = i13;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i8) {
  i14 = 9;
 } else {
  if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
   i14 = 9;
  }
 }
 do {
  if ((i14 | 0) == 9) {
   if (!i11) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i12 | 0) == 0) {
     i2 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i2 | 0) == 0) {
      i14 = 26;
      break;
     }
     i8 = i2 | 0;
     HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
     i15 = i2;
     i16 = 0;
    } else {
     if (i12 >>> 0 > 4294967275 >>> 0) {
      i14 = 26;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i12 + 20 | 0);
     i2 = i6 | 0;
     i8 = HEAP32[i2 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     if ((i8 | 0) == 0) {
      i14 = 26;
      break;
     }
     i2 = i8 + 20 | 0;
     HEAP32[i8 >> 2] = 2;
     HEAP32[i8 + 4 >> 2] = i12;
     HEAP32[i8 + 8 >> 2] = i2;
     HEAP32[i8 + 12 >> 2] = 0;
     HEAP32[i8 + 16 >> 2] = 32;
     i15 = i8;
     i16 = i2;
    }
   } while (0);
   if ((i14 | 0) == 26) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i2 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     i17 = 0;
    } else {
     i8 = HEAP32[i2 + 4 >> 2] | 0;
     i13 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i18 = i2;
     } else {
      i9 = 0;
      while (1) {
       HEAP8[i16 + i9 | 0] = HEAP8[i13 + i9 | 0] | 0;
       i9 = i9 + 1 | 0;
       if (i9 >>> 0 >= i8 >>> 0) {
        break;
       }
      }
      i8 = HEAP32[i7 >> 2] | 0;
      if ((i8 | 0) == 0) {
       i17 = 0;
       break;
      } else {
       i18 = i8;
      }
     }
     i17 = HEAP32[i18 + 4 >> 2] | 0;
    }
   } while (0);
   i2 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i8 = HEAP32[i2 + 4 >> 2] | 0;
     i9 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     } else {
      i19 = 0;
     }
     while (1) {
      HEAP8[i16 + (i19 + i17) | 0] = HEAP8[i9 + i19 | 0] | 0;
      i19 = i19 + 1 | 0;
      if (i19 >>> 0 >= i8 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i12 | 0) == 0) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i14 = 48;
    break;
   }
   i19 = i15 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
   i20 = i15;
   i21 = 0;
  } else {
   if (i12 >>> 0 > 2147483637 >>> 0) {
    i14 = 48;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i12 << 1) + 20 | 0);
   i15 = i5 | 0;
   i19 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i19 | 0) == 0) {
    i14 = 48;
    break;
   }
   i15 = i19 + 20 | 0;
   HEAP32[i19 >> 2] = 2;
   HEAP32[i19 + 4 >> 2] = i12;
   HEAP32[i19 + 8 >> 2] = i15;
   HEAP32[i19 + 12 >> 2] = 0;
   HEAP32[i19 + 16 >> 2] = 0;
   i20 = i19;
   i21 = i15;
  }
 } while (0);
 if ((i14 | 0) == 48) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i22 = 0;
  } else {
   i12 = HEAP32[i14 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i14 + 16 >> 2] & 32 | 0) == 0) {
     i5 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     } else {
      i23 = 0;
     }
     while (1) {
      HEAP16[i21 + (i23 << 1) >> 1] = HEAP16[i5 + (i23 << 1) >> 1] | 0;
      i23 = i23 + 1 | 0;
      if (i23 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
    } else {
     i5 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     } else {
      i24 = 0;
     }
     while (1) {
      HEAP16[i21 + (i24 << 1) >> 1] = HEAPU8[i5 + i24 | 0] | 0;
      i24 = i24 + 1 | 0;
      if (i24 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i12 = HEAP32[i7 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i22 = 0;
    break;
   }
   i22 = HEAP32[i12 + 4 >> 2] | 0;
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = HEAP32[i7 + 4 >> 2] | 0;
   if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i25 = 0;
    }
    while (1) {
     HEAP16[i21 + (i25 + i22 << 1) >> 1] = HEAP16[i24 + (i25 << 1) >> 1] | 0;
     i25 = i25 + 1 | 0;
     if (i25 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   } else {
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i26 = 0;
    }
    while (1) {
     HEAP16[i21 + (i26 + i22 << 1) >> 1] = HEAPU8[i24 + i26 | 0] | 0;
     i26 = i26 + 1 | 0;
     if (i26 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore24IDBFactoryBackendLevelDB16getDatabaseNamesEN3WTF10PassRefPtrINS_12IDBCallbacksEEENS2_INS_14SecurityOriginEEEPNS_22ScriptExecutionContextERKNS1_6StringE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i4 | 0;
 i7 = i4 + 8 | 0;
 i8 = i4 + 16 | 0;
 i9 = i4 + 24 | 0;
 i10 = i4 + 40 | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 3](i6, i1, HEAP32[i3 >> 2] | 0, i5);
 i5 = i6 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = (i6 | 0) == 0;
 do {
  if (i5) {
   i3 = HEAP32[i2 >> 2] | 0;
   i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i8, H_BASE + 280 | 0);
   i11 = __ZN3WTF10fastMallocEj(12) | 0;
   HEAP32[i11 >> 2] = 1;
   HEAP16[i11 + 4 >> 1] = 1201;
   i12 = i8 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i11 + 8 >> 2] = i13;
   if ((i13 | 0) != 0) {
    i14 = i13 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   }
   i14 = i7 | 0;
   HEAP32[i14 >> 2] = i11;
   FUNCTION_TABLE_vii[i1 & 7](i3, i7);
   i3 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i14 = i3 | 0;
     i1 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i1 | 0) != 0) {
      HEAP32[i14 >> 2] = i1;
      break;
     }
     i1 = HEAP32[i3 + 8 >> 2] | 0;
     do {
      if ((i1 | 0) != 0) {
       i14 = i1 | 0;
       i11 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
       if ((i11 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i1);
        break;
       } else {
        HEAP32[i14 >> 2] = i11;
        break;
       }
      }
     } while (0);
     __ZN3WTF8fastFreeEPv(i3);
    }
   } while (0);
   i3 = HEAP32[i12 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i1 = i3 | 0;
   i11 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i1 >> 2] = i11;
    break;
   }
  } else {
   i11 = __ZN3WTF10fastMallocEj(16) | 0;
   i1 = i11;
   HEAP32[i11 >> 2] = 1;
   HEAP32[i11 + 4 >> 2] = 0;
   HEAP32[i11 + 8 >> 2] = 0;
   HEAP32[i11 + 12 >> 2] = 0;
   __ZN7WebCore22IDBBackingStoreLevelDB16getDatabaseNamesEv(i9, i6);
   i11 = i9 | 0;
   i3 = i9 + 8 | 0;
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    i14 = HEAP32[i11 >> 2] | 0;
    while (1) {
     __ZN7WebCore13DOMStringList6appendERKN3WTF6StringE(i1, i14);
     i14 = i14 + 4 | 0;
     if ((i14 | 0) == ((HEAP32[i11 >> 2] | 0) + (HEAP32[i3 >> 2] << 2) | 0)) {
      break;
     }
    }
   }
   i14 = HEAP32[i2 >> 2] | 0;
   i12 = HEAP32[(HEAP32[i14 >> 2] | 0) + 12 >> 2] | 0;
   i13 = i10 | 0;
   HEAP32[i13 >> 2] = i1;
   FUNCTION_TABLE_vii[i12 & 7](i14, i10);
   i14 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i13 = i14 | 0;
     i12 = i14 | 0;
     i15 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i15 | 0) != 0) {
      HEAP32[i12 >> 2] = i15;
      break;
     }
     i15 = i13 + 12 | 0;
     i12 = HEAP32[i15 >> 2] | 0;
     i16 = i13 + 4 | 0;
     i17 = i16;
     if ((i12 | 0) != 0) {
      i18 = HEAP32[i17 >> 2] | 0;
      i19 = i18 + (i12 << 2) | 0;
      i12 = i18;
      while (1) {
       i18 = HEAP32[i12 >> 2] | 0;
       do {
        if ((i18 | 0) != 0) {
         i20 = i18 | 0;
         i21 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
         if ((i21 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i18);
          break;
         } else {
          HEAP32[i20 >> 2] = i21;
          break;
         }
        }
       } while (0);
       i12 = i12 + 4 | 0;
       if ((i12 | 0) == (i19 | 0)) {
        break;
       }
      }
      HEAP32[i15 >> 2] = 0;
     }
     i19 = HEAP32[i17 >> 2] | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i16 >> 2] = 0;
      HEAP32[i13 + 8 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i19);
     }
     __ZN3WTF8fastFreeEPv(i14);
    }
   } while (0);
   i14 = HEAP32[i3 >> 2] | 0;
   if ((i14 | 0) != 0) {
    i1 = HEAP32[i11 >> 2] | 0;
    i19 = i1 + (i14 << 2) | 0;
    i14 = i1;
    while (1) {
     i1 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i1 | 0) != 0) {
       i12 = i1 | 0;
       i18 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
       if ((i18 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i1);
        break;
       } else {
        HEAP32[i12 >> 2] = i18;
        break;
       }
      }
     } while (0);
     i14 = i14 + 4 | 0;
     if ((i14 | 0) == (i19 | 0)) {
      break;
     }
    }
    HEAP32[i3 >> 2] = 0;
   }
   i19 = HEAP32[i11 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   HEAP32[i11 >> 2] = 0;
   HEAP32[i9 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i19);
  }
 } while (0);
 if (i5) {
  STACKTOP = i4;
  return;
 }
 i5 = i6 + 4 | 0;
 i6 = i5 | 0;
 i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i6 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
 i9 = i5 - 4 | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
 STACKTOP = i4;
 return;
}
function __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i9 = (i2 | 0) == 0;
 if (i9) {
  i10 = 0;
 } else {
  i10 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(i10 | 0, i7 | 0) | 0;
 i10 = i11;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (!i9) {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   do {
    if ((i10 | 0) == 0) {
     i11 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i11 | 0) == 0) {
      i12 = 37;
      break;
     }
     i13 = i11 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
     i14 = i11;
     i15 = 0;
    } else {
     if (i10 >>> 0 > 2147483637 >>> 0) {
      i12 = 37;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i10 << 1) + 20 | 0);
     i11 = i5 | 0;
     i13 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i13 | 0) == 0) {
      i12 = 37;
      break;
     }
     i11 = i13 + 20 | 0;
     HEAP32[i13 >> 2] = 2;
     HEAP32[i13 + 4 >> 2] = i10;
     HEAP32[i13 + 8 >> 2] = i11;
     HEAP32[i13 + 12 >> 2] = 0;
     HEAP32[i13 + 16 >> 2] = 0;
     i14 = i13;
     i15 = i11;
    }
   } while (0);
   if ((i12 | 0) == 37) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i16 = 0;
    } else {
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
       i17 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i18 = 0;
       }
       while (1) {
        HEAP16[i15 + (i18 << 1) >> 1] = HEAP16[i17 + (i18 << 1) >> 1] | 0;
        i18 = i18 + 1 | 0;
        if (i18 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      } else {
       i17 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i19 = 0;
       }
       while (1) {
        HEAP16[i15 + (i19 << 1) >> 1] = HEAPU8[i17 + i19 | 0] | 0;
        i19 = i19 + 1 | 0;
        if (i19 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i13 = HEAP32[i8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i16 = 0;
      break;
     }
     i16 = HEAP32[i13 + 4 >> 2] | 0;
    }
   } while (0);
   if ((i7 | 0) != 0) {
    i11 = 0;
    while (1) {
     HEAP16[i15 + (i11 + i16 << 1) >> 1] = HEAPU8[i3 + i11 | 0] | 0;
     i11 = i11 + 1 | 0;
     if (i11 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i1 >> 2] = i14;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i10 | 0) == 0) {
   i14 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i14 | 0) == 0) {
    i12 = 19;
    break;
   }
   i16 = i14 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i20 = i14;
   i21 = 0;
  } else {
   if (i10 >>> 0 > 4294967275 >>> 0) {
    i12 = 19;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i10 + 20 | 0);
   i14 = i6 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   if ((i16 | 0) == 0) {
    i12 = 19;
    break;
   }
   i14 = i16 + 20 | 0;
   HEAP32[i16 >> 2] = 2;
   HEAP32[i16 + 4 >> 2] = i10;
   HEAP32[i16 + 8 >> 2] = i14;
   HEAP32[i16 + 12 >> 2] = 0;
   HEAP32[i16 + 16 >> 2] = 32;
   i20 = i16;
   i21 = i14;
  }
 } while (0);
 if ((i12 | 0) == 19) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i12 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i22 = 0;
  } else {
   i10 = HEAP32[i12 + 4 >> 2] | 0;
   i6 = HEAP32[i12 + 8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i23 = i12;
   } else {
    i14 = 0;
    while (1) {
     HEAP8[i21 + i14 | 0] = HEAP8[i6 + i14 | 0] | 0;
     i14 = i14 + 1 | 0;
     if (i14 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
    i10 = HEAP32[i8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i22 = 0;
     break;
    } else {
     i23 = i10;
    }
   }
   i22 = HEAP32[i23 + 4 >> 2] | 0;
  }
 } while (0);
 _memcpy(i21 + i22 | 0, i3 | 0, i7) | 0;
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7WeakPtrIN7WebCore22IDBBackingStoreLevelDBEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i1, i2, i3) {
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
 i8 = __ZN3WTF10fastMallocEj(i2 << 3) | 0;
 if ((i2 | 0) > 0) {
  i9 = 0;
  while (1) {
   HEAP32[i8 + (i9 << 3) >> 2] = 0;
   HEAP32[i8 + (i9 << 3) + 4 >> 2] = 0;
   i9 = i9 + 1 | 0;
   if ((i9 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i6 >> 2] = i8;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i10 = 0;
  i11 = i7;
  __ZN3WTF8fastFreeEPv(i11);
  return i10 | 0;
 } else {
  i12 = 0;
  i13 = 0;
 }
 while (1) {
  i8 = i7 + (i12 << 3) | 0;
  i2 = i8 | 0;
  i9 = HEAP32[i2 >> 2] | 0;
  i14 = i9;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i13;
  } else {
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i9 + 16 >> 2] | 0;
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i9) | 0;
   }
   i9 = (i18 >>> 23) + ~i18 | 0;
   i17 = i9 << 12 ^ i9;
   i9 = i17 >>> 7 ^ i17;
   i17 = i9 << 2 ^ i9;
   i9 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 11;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i2 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i9 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 11) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 + 4 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i9 = i17 | 0;
     if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
      break;
     }
     __ZN3WTF8fastFreeEPv(i17);
    }
   } while (0);
   i17 = i27 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i9 = i20 | 0;
     i14 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i9 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i17 >> 2] = i20;
   i20 = i7 + (i12 << 3) + 4 | 0;
   i14 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i19 >> 2] = i14;
   i15 = (i8 | 0) == (i3 | 0) ? i27 : i13;
  }
  i14 = i12 + 1 | 0;
  if ((i14 | 0) == (i5 | 0)) {
   break;
  } else {
   i12 = i14;
   i13 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i28 = 0;
 } else {
  i10 = i15;
  i11 = i7;
  __ZN3WTF8fastFreeEPv(i11);
  return i10 | 0;
 }
 while (1) {
  i1 = i7 + (i28 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i13 = HEAP32[i7 + (i28 << 3) + 4 >> 2] | 0;
    do {
     if ((i13 | 0) != 0) {
      i12 = i13 | 0;
      if (((tempValue = HEAP32[i12 >> 2] | 0, HEAP32[i12 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
       break;
      }
      __ZN3WTF8fastFreeEPv(i13);
     }
    } while (0);
    i13 = HEAP32[i1 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break;
    }
    i12 = i13 | 0;
    i27 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     break;
    } else {
     HEAP32[i12 >> 2] = i27;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i28 = i1;
  } else {
   i10 = i15;
   break;
  }
 }
 i11 = i7;
 __ZN3WTF8fastFreeEPv(i11);
 return i10 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7WeakPtrIN7WebCore22IDBBackingStoreLevelDBEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7WeakPtrIN7WebCore22IDBBackingStoreLevelDBEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i8, 0) | 0;
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
  HEAP32[i9 >> 2] = 0;
  HEAP32[i9 + 4 >> 2] = 0;
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
 i13 = HEAP32[i4 >> 2] | 0;
 if ((i13 | 0) != 0) {
  i4 = i13 | 0;
  tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue + 1, tempValue;
 }
 i4 = i18 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i13;
 do {
  if ((i8 | 0) != 0) {
   i13 = i8 | 0;
   if (((tempValue = HEAP32[i13 >> 2] | 0, HEAP32[i13 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i8);
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i13 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i13;
 i8 = i2 + 4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i13 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i21 = 8;
  } else {
   i9 = i4 << 1;
   i21 = (i13 * 6 & -1 | 0) < (i9 | 0) ? i4 : i9;
  }
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7WeakPtrIN7WebCore22IDBBackingStoreLevelDBEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i21, i18) | 0;
  i19 = i9;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7WeakPtrIN7WebCore22IDBBackingStoreLevelDBEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7WeakPtrIN7WebCore22IDBBackingStoreLevelDBEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i8, 0) | 0;
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
  HEAP32[i9 >> 2] = 0;
  HEAP32[i9 + 4 >> 2] = 0;
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
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i18 + 4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i4;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i8);
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i4;
 i8 = i2 + 4 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i13 | 0)) {
  i19 = i18;
  i20 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i21 = 8;
  } else {
   i9 = i13 << 1;
   i21 = (i4 * 6 & -1 | 0) < (i9 | 0) ? i13 : i9;
  }
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7WeakPtrIN7WebCore22IDBBackingStoreLevelDBEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i21, i18) | 0;
  i19 = i9;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCoreL23computeUniqueIdentifierERKN3WTF6StringERKNS_14SecurityOriginE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 __ZNK7WebCore14SecurityOrigin18databaseIdentifierEv(i7, i3);
 i3 = i7 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i9 = 0;
  } else {
   i10 = i7 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = i11 + 2 | 0;
   HEAP32[i10 >> 2] = i11 + 4;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    i9 = i7;
    break;
   } else {
    HEAP32[i10 >> 2] = i12;
    i9 = i7;
    break;
   }
  }
 } while (0);
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = i9;
 i12 = (i9 | 0) == 0;
 if (!i12) {
  i10 = i9 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i5, i6, H_BASE + 360 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  }
 } while (0);
 if ((i5 | 0) == 0) {
  _WTFCrash();
 }
 do {
  if (!i12) {
   i6 = i9 | 0;
   i10 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i6 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i3 = i9 | 0;
   i12 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i3 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i2 >> 2] | 0;
 i2 = (i9 | 0) == 0;
 if (i2) {
  i12 = i5 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 } else {
  i12 = i9 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
  i12 = i5 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
  i12 = i9 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = i8 | 0;
 HEAP32[i12 >> 2] = i5;
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 i3 = i8 + 4 | 0;
 HEAP32[i3 >> 2] = i9;
 do {
  if (!i2) {
   i10 = i9 | 0;
   i6 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i6 + 2;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i6 = i5 | 0;
 i10 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
 } else {
  HEAP32[i6 >> 2] = i10;
 }
 __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i1, i8);
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 | 0;
   i1 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i3 >> 2] = i1;
    break;
   }
  }
 } while (0);
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
 do {
  if (!i2) {
   i8 = i9 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i8 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i9 = i5 | 0;
 i2 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i9 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore22IDBBackingStoreLevelDBEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore22IDBBackingStoreLevelDBEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i8, 0) | 0;
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
  } else {
   i13 = (i9 >>> 23) + ~i9 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i3;
   i17 = i7;
   i18 = i11;
   while (1) {
    if ((i18 | 0) == (i8 | 0)) {
     i19 = 8;
     break;
    }
    i20 = (i18 | 0) == -1 ? i17 : i15;
    i21 = (i14 | 0) == 0 ? i13 : i14;
    i22 = i21 + i16 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i19 = 10;
     break;
    } else {
     i14 = i21;
     i15 = i20;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
   if ((i19 | 0) == 8) {
    i18 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i16 = i1;
    HEAP32[i16 >> 2] = i17;
    HEAP32[i16 + 4 >> 2] = i18;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i19 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i18 = i2 + 16 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) - 1;
    i12 = i20;
    break;
   }
  }
 } while (0);
 i20 = HEAP32[i4 >> 2] | 0;
 if ((i20 | 0) != 0) {
  i4 = i20 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i12 | 0;
 i23 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i20;
 do {
  if ((i23 | 0) != 0) {
   i20 = i23 + 4 | 0;
   i4 = i20 | 0;
   i19 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i4 >> 2] = i19;
    break;
   }
   i19 = i20 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 7](i19);
  }
 } while (0);
 i23 = i2 + 12 | 0;
 i19 = (HEAP32[i23 >> 2] | 0) + 1 | 0;
 HEAP32[i23 >> 2] = i19;
 i23 = i2 + 4 | 0;
 i20 = HEAP32[i23 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i19 << 1 | 0) < (i20 | 0)) {
  i25 = i12;
  i26 = i20;
 } else {
  if ((i20 | 0) == 0) {
   i27 = 8;
  } else {
   i4 = i20 << 1;
   i27 = (i19 * 6 & -1 | 0) < (i4 | 0) ? i20 : i4;
  }
  i4 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore22IDBBackingStoreLevelDBEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i27, i12) | 0;
  i25 = i4;
  i26 = HEAP32[i23 >> 2] | 0;
 }
 i23 = (HEAP32[i5 >> 2] | 0) + (i26 << 2) | 0;
 i26 = i1;
 HEAP32[i26 >> 2] = i25;
 HEAP32[i26 + 4 >> 2] = i23;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF7HashMapINS_6StringENS_6RefPtrIN7WebCore18IDBDatabaseBackendEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS1_NS_12KeyValuePairIS1_S5_EENS_24KeyValuePairKeyExtractorISE_EES6_NSA_18KeyValuePairTraitsES8_EESE_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = i1 | 0;
 i5 = i1 | 0;
 i6 = i1 + 4 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i6 >> 2] << 3) | 0;
 if ((HEAP32[i2 >> 2] | 0) == (i7 | 0)) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i9 = HEAP32[i2 >> 2] | 0;
 if ((i9 | 0) == (i7 | 0)) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 i7 = HEAP32[i9 + 4 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 | 0;
   i10 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore18IDBDatabaseBackendD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i2 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i7 = i9 | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i10 = i9 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = -1;
 i7 = i1 + 16 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i9 = i1 + 12 | 0;
 i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i2;
 i9 = HEAP32[i6 >> 2] | 0;
 if (!((i2 * 6 & -1 | 0) < (i9 | 0) & (i9 | 0) > 8)) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 i2 = (i9 | 0) / 2 & -1;
 i10 = HEAP32[i5 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 HEAP32[i5 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i9 | 0) != 0) {
  i2 = 0;
  while (1) {
   i5 = i10 + (i2 << 3) | 0;
   i1 = HEAP32[i5 >> 2] | 0;
   if (!((i1 | 0) == (-1 | 0) | (i1 | 0) == 0)) {
    __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore18IDBDatabaseBackendEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_(i4, i5) | 0;
   }
   i2 = i2 + 1 | 0;
   if ((i2 | 0) == (i9 | 0)) {
    break;
   }
  }
 }
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore18IDBDatabaseBackendEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i10, i9);
 i8 = 1;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore24IDBFactoryBackendLevelDBD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 376;
 i2 = HEAP32[i1 + 68 >> 2] | 0;
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
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 52 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i3 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i3 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
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
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
     }
    } while (0);
    i3 = i3 + 1 | 0;
    if ((i3 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 32 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i3 = 0;
   while (1) {
    i5 = i2 + (i3 << 3) | 0;
    do {
     if ((HEAP32[i5 >> 2] | 0) != -1) {
      i6 = HEAP32[i2 + (i3 << 3) + 4 >> 2] | 0;
      do {
       if ((i6 | 0) != 0) {
        i9 = i6 | 0;
        if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
         break;
        }
        __ZN3WTF8fastFreeEPv(i6);
       }
      } while (0);
      i6 = HEAP32[i5 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i9 = i6 | 0;
      i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i9 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i3 = i3 + 1 | 0;
    if ((i3 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore18IDBDatabaseBackendEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i2, HEAP32[i1 + 12 >> 2] | 0);
 return;
}
function __ZN7WebCore24IDBFactoryBackendLevelDBD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 376;
 i2 = HEAP32[i1 + 68 >> 2] | 0;
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
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 52 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i3 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i3 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
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
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
     }
    } while (0);
    i3 = i3 + 1 | 0;
    if ((i3 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 32 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i3 = 0;
   while (1) {
    i5 = i2 + (i3 << 3) | 0;
    do {
     if ((HEAP32[i5 >> 2] | 0) != -1) {
      i6 = HEAP32[i2 + (i3 << 3) + 4 >> 2] | 0;
      do {
       if ((i6 | 0) != 0) {
        i9 = i6 | 0;
        if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
         break;
        }
        __ZN3WTF8fastFreeEPv(i6);
       }
      } while (0);
      i6 = HEAP32[i5 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i9 = i6 | 0;
      i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i9 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i3 = i3 + 1 | 0;
    if ((i3 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore18IDBDatabaseBackendEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i2, HEAP32[i1 + 12 >> 2] | 0);
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore18IDBDatabaseBackendEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_(i1, i2) {
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
  i10 = i3 + (i9 << 3) | 0;
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
 i10 = i15 + 4 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i13 = i8 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    __ZN7WebCore18IDBDatabaseBackendD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i8 = i15 | 0;
 i14 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 | 0;
   i7 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i13 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i8 >> 2] = i14;
 i14 = i2 + 4 | 0;
 i2 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 return i15 | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore22IDBBackingStoreLevelDBEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i5 = i2;
 i6 = i5 + ~(i5 << 15) | 0;
 i5 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i5 >>> 6 ^ i5;
 i5 = i6 + ~(i6 << 11) | 0;
 i6 = i5 >>> 16 ^ i5;
 i5 = i6 & i4;
 i7 = i3 + (i5 << 2) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L1 : do {
  if ((i8 | 0) == 0) {
   i9 = 0;
   i10 = i7;
   i11 = 3;
  } else {
   i12 = (i6 >>> 23) + ~i6 | 0;
   i13 = i12 << 12 ^ i12;
   i12 = i13 >>> 7 ^ i13;
   i13 = i12 << 2 ^ i12;
   i12 = i13 >>> 20 ^ i13 | 1;
   i13 = 0;
   i14 = 0;
   i15 = i5;
   i16 = i7;
   i17 = i8;
   while (1) {
    if ((i17 | 0) == (i2 | 0)) {
     i18 = i16;
     break L1;
    }
    i19 = (i17 | 0) == -1 ? i16 : i13;
    i20 = (i14 | 0) == 0 ? i12 : i14;
    i21 = i20 + i15 & i4;
    i22 = i3 + (i21 << 2) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    if ((i23 | 0) == 0) {
     i9 = i19;
     i10 = i22;
     i11 = 3;
     break;
    } else {
     i13 = i19;
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
    }
   }
  }
 } while (0);
 if ((i11 | 0) == 3) {
  i18 = (i9 | 0) != 0 ? i9 : i10;
 }
 i10 = i18 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i11 = i9 + 4 | 0;
   i3 = i11 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i11 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 7](i4);
  }
 } while (0);
 i9 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i10 >> 2] = i9;
 return i18 | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore22IDBBackingStoreLevelDBEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i1, i2, i3) {
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
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore22IDBBackingStoreLevelDBEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) | 0;
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
  i1 = HEAP32[i7 + (i13 << 2) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 + 4 | 0;
    i3 = i10 | 0;
    i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
    if ((i6 | 0) != 0) {
     HEAP32[i3 >> 2] = i6;
     break;
    }
    i6 = i10 - 4 | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 7](i6);
   }
  } while (0);
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
function __ZN3WTF7HashMapINS_6StringENS_6RefPtrIN7WebCore18IDBDatabaseBackendEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE4findERKS1_(i1, i2, i3) {
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
   if ((i18 | 0) == 8) {
    i13 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i7 = i13;
    i8 = i13;
    break;
   } else if ((i18 | 0) == 11) {
    i13 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i7 = (i15 | 0) == 0 ? i13 : i15;
    i8 = i13;
    break;
   }
  }
 } while (0);
 i15 = i1;
 HEAP32[i15 >> 2] = i7;
 HEAP32[i15 + 4 >> 2] = i8;
 return;
}
function __ZN7WebCore13DOMStringList6appendERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 4 | 0;
 i4 = i1 + 12 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == (HEAP32[i1 + 8 >> 2] | 0)) {
   i6 = i5 + 1 | 0;
   i7 = i3 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   do {
    if (i8 >>> 0 > i2 >>> 0) {
     i9 = 6;
    } else {
     if ((i8 + (i5 << 2) | 0) >>> 0 <= i2 >>> 0) {
      i9 = 6;
      break;
     }
     __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i6);
     i10 = HEAP32[i7 >> 2] | 0;
     i11 = i10 + (i2 - i8 >> 2 << 2) | 0;
     i12 = i10;
    }
   } while (0);
   if ((i9 | 0) == 6) {
    __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i6);
    i11 = i2;
    i12 = HEAP32[i7 >> 2] | 0;
   }
   i8 = HEAP32[i11 >> 2] | 0;
   HEAP32[i12 + (HEAP32[i4 >> 2] << 2) >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
  } else {
   i10 = HEAP32[i2 >> 2] | 0;
   HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 << 2) >> 2] = i10;
   if ((i10 | 0) == 0) {
    break;
   }
   i8 = i10 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
 } while (0);
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 return;
}
function __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = i6 | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore18IDBDatabaseBackendEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if ((i2 | 0) > 0) {
  i3 = 0;
 } else {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 while (1) {
  i5 = i1 + (i3 << 3) | 0;
  do {
   if ((HEAP32[i5 >> 2] | 0) != -1) {
    i6 = HEAP32[i1 + (i3 << 3) + 4 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i7 = i6 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) == 0) {
       __ZN7WebCore18IDBDatabaseBackendD1Ev(i6);
       __ZN3WTF8fastFreeEPv(i6);
       break;
      } else {
       HEAP32[i7 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i6 = HEAP32[i5 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    i8 = i6 | 0;
    i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i6);
     break;
    } else {
     HEAP32[i8 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i3 = i3 + 1 | 0;
  if ((i3 | 0) >= (i2 | 0)) {
   break;
  }
 }
 i4 = i1;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore24IDBFactoryBackendLevelDB24removeIDBDatabaseBackendERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 8 | 0;
 __ZN3WTF7HashMapINS_6StringENS_6RefPtrIN7WebCore18IDBDatabaseBackendEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE4findERKS1_(i4, i5, i2);
 __ZN3WTF7HashMapINS_6StringENS_6RefPtrIN7WebCore18IDBDatabaseBackendEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS1_NS_12KeyValuePairIS1_S5_EENS_24KeyValuePairKeyExtractorISE_EES6_NSA_18KeyValuePairTraitsES8_EESE_EE(i5, i4) | 0;
 STACKTOP = i3;
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
function __ZN7WebCore24IDBFactoryBackendLevelDBC2ERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 376;
 _memset(i1 + 8 | 0, 0, 60) | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 68 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZN7WebCore24IDBFactoryBackendLevelDBC1ERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 376;
 _memset(i1 + 8 | 0, 0, 60) | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 68 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 376 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_viiiiiiiiii + 2;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_viiii + 2;
}
function dynCall_viiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 FUNCTION_TABLE_viiiiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0);
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function b6(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 abort(6);
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore24IDBFactoryBackendLevelDBD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore24IDBFactoryBackendLevelDBD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
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
function b1(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(1);
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
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
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
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore24IDBFactoryBackendLevelDB16getDatabaseNamesEN3WTF10PassRefPtrINS_12IDBCallbacksEEENS2_INS_14SecurityOriginEEEPNS_22ScriptExecutionContextERKNS1_6StringE,b0];
  var FUNCTION_TABLE_viiiiii = [b1,b1,__ZN7WebCore24IDBFactoryBackendLevelDB14deleteDatabaseERKN3WTF6StringENS1_10PassRefPtrINS_12IDBCallbacksEEENS5_INS_14SecurityOriginEEEPNS_22ScriptExecutionContextES4_,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore24IDBFactoryBackendLevelDBD0Ev,b2,__ZN7WebCore24IDBFactoryBackendLevelDBD2Ev,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore24IDBFactoryBackendLevelDBC2ERKN3WTF6StringE,b3,__ZN7WebCore24IDBFactoryBackendLevelDB24removeIDBDatabaseBackendERKN3WTF6StringE,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_viiiiiiiiii = [b6,b6,__ZN7WebCore24IDBFactoryBackendLevelDB4openERKN3WTF6StringEyxNS1_10PassRefPtrINS_12IDBCallbacksEEENS5_INS_20IDBDatabaseCallbacksEEERKNS_14SecurityOriginESC_,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  var FUNCTION_TABLE_viiii = [b8,b8,__ZN7WebCore24IDBFactoryBackendLevelDB16openBackingStoreERKNS_14SecurityOriginERKN3WTF6StringE,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_viiiiiiiiii: dynCall_viiiiiiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_viiiiii": invoke_viiiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_viiiiiiiiii": invoke_viiiiiiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = asm["dynCall_viiiiiiiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7WeakPtrIN7WebCore22IDBBackingStoreLevelDBEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","_strlen","__ZN7WebCore24IDBFactoryBackendLevelDB24removeIDBDatabaseBackendERKN3WTF6StringE","__ZN7WebCore24IDBFactoryBackendLevelDB4openERKN3WTF6StringEyxNS1_10PassRefPtrINS_12IDBCallbacksEEENS5_INS_20IDBDatabaseCallbacksEEERKNS_14SecurityOriginESC_","__ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore22IDBBackingStoreLevelDBEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_","__ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7WeakPtrIN7WebCore22IDBBackingStoreLevelDBEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_","__ZN3WTF7HashMapINS_6StringENS_6RefPtrIN7WebCore18IDBDatabaseBackendEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE4findERKS1_","__ZN7WebCore24IDBFactoryBackendLevelDB14deleteDatabaseERKN3WTF6StringENS1_10PassRefPtrINS_12IDBCallbacksEEENS5_INS_14SecurityOriginEEEPNS_22ScriptExecutionContextES4_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore18IDBDatabaseBackendEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i","_memset","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore22IDBBackingStoreLevelDBEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_","__ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore18IDBDatabaseBackendEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_PS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore13DOMStringList6appendERKN3WTF6StringE","__ZN3WTF7HashMapINS_6StringENS_6RefPtrIN7WebCore18IDBDatabaseBackendEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS1_NS_12KeyValuePairIS1_S5_EENS_24KeyValuePairKeyExtractorISE_EES6_NSA_18KeyValuePairTraitsES8_EESE_EE","__ZN7WebCore24IDBFactoryBackendLevelDBC2ERKN3WTF6StringE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7WeakPtrIN7WebCore22IDBBackingStoreLevelDBEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore24IDBFactoryBackendLevelDBD0Ev","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore22IDBBackingStoreLevelDBEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZN7WebCore24IDBFactoryBackendLevelDB16getDatabaseNamesEN3WTF10PassRefPtrINS_12IDBCallbacksEEENS2_INS_14SecurityOriginEEEPNS_22ScriptExecutionContextERKNS1_6StringE","_memcpy","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore18IDBDatabaseBackendEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_","__ZN7WebCore24IDBFactoryBackendLevelDBD2Ev","__ZN7WebCoreL23computeUniqueIdentifierERKN3WTF6StringERKNS_14SecurityOriginE","__ZN7WebCore24IDBFactoryBackendLevelDB16openBackingStoreERKNS_14SecurityOriginERKN3WTF6StringE"]

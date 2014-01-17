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
/* memory initializer */ allocate([110,117,108,108,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _pthread_getspecific=env._pthread_getspecific;
  var ___setErrNo=env.___setErrNo;
  var _pthread_key_create=env._pthread_key_create;
  var _malloc=env._malloc;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _pthread_setspecific=env._pthread_setspecific;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore14SecurityOriginEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RPS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore14SecurityOriginEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i8, 0) | 0;
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
   __ZN7WebCore14SecurityOriginD2Ev(i8);
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
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore14SecurityOriginEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i21, i18) | 0;
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
function __ZN7WebCore22ThreadableBlobRegistry17unregisterBlobURLERKNS_3URLE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 __ZN7WebCore7BlobURL9getOriginERKNS_3URLE(i4, i1);
 i5 = i4 | 0;
 i4 = __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i5 >> 2] | 0, H_BASE + 8 | 0) | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i7;
    break;
   }
  }
 } while (0);
 do {
  if (i4) {
   __ZN3WTF36lockAtomicallyInitializedStaticMutexEv();
   do {
    if (!(HEAP8[H_BASE + 16 | 0] | 0)) {
     i6 = __Znwj(4) | 0;
     if ((_pthread_key_create(i6 | 0, F_BASE_vi + 8 | 0) | 0) == 0) {
      HEAP32[H_BASE + 24 >> 2] = i6;
      HEAP8[H_BASE + 16 | 0] = 1;
      break;
     } else {
      _WTFCrash();
     }
    }
   } while (0);
   __ZN3WTF38unlockAtomicallyInitializedStaticMutexEv();
   i6 = HEAP32[H_BASE + 24 >> 2] | 0;
   i7 = i6 | 0;
   i5 = _pthread_getspecific(HEAP32[i7 >> 2] | 0) | 0;
   if ((i5 | 0) == 0) {
    i8 = 12;
   } else {
    i9 = HEAP32[i5 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i8 = 12;
    } else {
     i10 = i9;
    }
   }
   if ((i8 | 0) == 12) {
    i9 = __ZN3WTF16fastZeroedMallocEj(20) | 0;
    i5 = i9;
    i11 = HEAP32[i7 >> 2] | 0;
    i7 = __Znwj(8) | 0;
    HEAP32[i7 >> 2] = i5;
    HEAP32[i7 + 4 >> 2] = i6;
    _pthread_setspecific(i11 | 0, i7 | 0) | 0;
    _memset(i9 | 0, 0, 20) | 0;
    i10 = i5;
   }
   i5 = i10 | 0;
   i9 = HEAP32[i5 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i7 = HEAP32[i10 + 4 >> 2] | 0;
    i11 = i7 << 3 | 0;
    i12 = i11;
    i13 = i11;
    i14 = 0;
    i15 = i7;
   } else {
    i7 = HEAP32[i10 + 8 >> 2] | 0;
    i11 = i1 | 0;
    i6 = HEAP32[i11 >> 2] | 0;
    i16 = HEAP32[i6 + 16 >> 2] | 0;
    if (i16 >>> 0 > 127 >>> 0) {
     i17 = i16 >>> 7;
    } else {
     i17 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i6) | 0;
    }
    i6 = (i17 >>> 23) + ~i17 | 0;
    i16 = i6 << 12 ^ i6;
    i6 = i16 >>> 7 ^ i16;
    i16 = i6 << 2 ^ i6;
    i6 = i16 >>> 20 ^ i16 | 1;
    i16 = i17;
    i18 = 0;
    while (1) {
     i19 = i16 & i7;
     i20 = i9 + (i19 << 3) | 0;
     i21 = HEAP32[i20 >> 2] | 0;
     i22 = i21;
     if ((i22 | 0) == 0) {
      i23 = 0;
      break;
     } else if ((i22 | 0) != (-1 | 0)) {
      if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i21, HEAP32[i11 >> 2] | 0) | 0) {
       i23 = i20;
       break;
      }
     }
     i20 = (i18 | 0) == 0 ? i6 : i18;
     i16 = i20 + i19 | 0;
     i18 = i20;
    }
    i18 = HEAP32[i5 >> 2] | 0;
    i16 = HEAP32[i10 + 4 >> 2] | 0;
    i6 = i18 + (i16 << 3) | 0;
    i12 = (i23 | 0) == 0 ? i6 : i23;
    i13 = i6;
    i14 = i18;
    i15 = i16;
   }
   if ((i12 | 0) == (i14 + (i15 << 3) | 0)) {
    break;
   }
   HEAP32[i3 >> 2] = i12;
   HEAP32[i3 + 4 >> 2] = i13;
   __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore14SecurityOriginEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E34removeWithoutEntryConsistencyCheckENS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EE(i10 | 0, i3);
  }
 } while (0);
 if (__ZN3WTF12isMainThreadEv() | 0) {
  i3 = __ZN7WebCore12blobRegistryEv() | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 1](i3, i1);
  STACKTOP = i2;
  return;
 } else {
  i3 = __ZN3WTF10fastMallocEj(100) | 0;
  __ZNK7WebCore3URL4copyEv(i3, i1);
  i1 = i3 + 48 | 0;
  HEAP32[i1 >> 2] = 0;
  __ZN7WebCore3URL10invalidateEv(i1);
  HEAP32[i3 + 96 >> 2] = 0;
  __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 4 | 0, i3);
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore22ThreadableBlobRegistry15registerBlobURLEPNS_14SecurityOriginERKNS_3URLES5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 HEAP32[i5 >> 2] = i1;
 L1 : do {
  if ((i1 | 0) != 0) {
   __ZN7WebCore7BlobURL9getOriginERKNS_3URLE(i6, i2);
   i8 = i6 | 0;
   i9 = __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i8 >> 2] | 0, H_BASE + 8 | 0) | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i10 | 0) == 0) {
     if (!i9) {
      break L1;
     }
    } else {
     i8 = i10 | 0;
     i11 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      if (i9) {
       break;
      } else {
       break L1;
      }
     } else {
      HEAP32[i8 >> 2] = i11;
      if (i9) {
       break;
      } else {
       break L1;
      }
     }
    }
   } while (0);
   __ZN3WTF36lockAtomicallyInitializedStaticMutexEv();
   do {
    if (!(HEAP8[H_BASE + 16 | 0] | 0)) {
     i9 = __Znwj(4) | 0;
     if ((_pthread_key_create(i9 | 0, F_BASE_vi + 8 | 0) | 0) == 0) {
      HEAP32[H_BASE + 24 >> 2] = i9;
      HEAP8[H_BASE + 16 | 0] = 1;
      break;
     } else {
      _WTFCrash();
     }
    }
   } while (0);
   __ZN3WTF38unlockAtomicallyInitializedStaticMutexEv();
   i9 = HEAP32[H_BASE + 24 >> 2] | 0;
   i10 = i9 | 0;
   i11 = _pthread_getspecific(HEAP32[i10 >> 2] | 0) | 0;
   if ((i11 | 0) == 0) {
    i12 = 13;
   } else {
    i8 = HEAP32[i11 >> 2] | 0;
    if ((i8 | 0) == 0) {
     i12 = 13;
    } else {
     i13 = i8;
    }
   }
   if ((i12 | 0) == 13) {
    i8 = __ZN3WTF16fastZeroedMallocEj(20) | 0;
    i11 = i8;
    i14 = HEAP32[i10 >> 2] | 0;
    i10 = __Znwj(8) | 0;
    HEAP32[i10 >> 2] = i11;
    HEAP32[i10 + 4 >> 2] = i9;
    _pthread_setspecific(i14 | 0, i10 | 0) | 0;
    _memset(i8 | 0, 0, 20) | 0;
    i13 = i11;
   }
   __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore14SecurityOriginEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RPS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i7, i13 | 0, i2 | 0, i5);
  }
 } while (0);
 if (__ZN3WTF12isMainThreadEv() | 0) {
  i5 = __ZN7WebCore12blobRegistryEv() | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5, i2, i3);
  STACKTOP = i4;
  return;
 } else {
  i5 = __ZN3WTF10fastMallocEj(100) | 0;
  __ZNK7WebCore3URL4copyEv(i5, i2);
  __ZNK7WebCore3URL4copyEv(i5 + 48 | 0, i3);
  HEAP32[i5 + 96 >> 2] = 0;
  __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 6 | 0, i5);
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore14SecurityOriginEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i1, i2, i3) {
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
   i6 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore14SecurityOriginEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_(i1, i2) | 0;
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
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i13 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 | 0;
      if (((tempValue = HEAP32[i10 >> 2] | 0, HEAP32[i10 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
       break;
      }
      __ZN7WebCore14SecurityOriginD2Ev(i11);
      __ZN3WTF8fastFreeEPv(i11);
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i10 = i11 | 0;
    i3 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i3 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i10 >> 2] = i3;
     break;
    }
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
function __ZN7WebCore22ThreadableBlobRegistry15getCachedOriginERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 __ZN3WTF36lockAtomicallyInitializedStaticMutexEv();
 do {
  if (!(HEAP8[H_BASE + 16 | 0] | 0)) {
   i3 = __Znwj(4) | 0;
   if ((_pthread_key_create(i3 | 0, F_BASE_vi + 8 | 0) | 0) == 0) {
    HEAP32[H_BASE + 24 >> 2] = i3;
    HEAP8[H_BASE + 16 | 0] = 1;
    break;
   } else {
    _WTFCrash();
   }
  }
 } while (0);
 __ZN3WTF38unlockAtomicallyInitializedStaticMutexEv();
 i3 = HEAP32[H_BASE + 24 >> 2] | 0;
 i4 = i3 | 0;
 i5 = _pthread_getspecific(HEAP32[i4 >> 2] | 0) | 0;
 if ((i5 | 0) == 0) {
  i6 = 7;
 } else {
  i7 = HEAP32[i5 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i6 = 7;
  } else {
   i8 = i7;
  }
 }
 if ((i6 | 0) == 7) {
  i6 = __ZN3WTF16fastZeroedMallocEj(20) | 0;
  i7 = i6;
  i5 = HEAP32[i4 >> 2] | 0;
  i4 = __Znwj(8) | 0;
  HEAP32[i4 >> 2] = i7;
  HEAP32[i4 + 4 >> 2] = i3;
  _pthread_setspecific(i5 | 0, i4 | 0) | 0;
  _memset(i6 | 0, 0, 20) | 0;
  i8 = i7;
 }
 i7 = HEAP32[i8 + 8 >> 2] | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i4 = HEAP32[i2 + 16 >> 2] | 0;
 if (i4 >>> 0 > 127 >>> 0) {
  i9 = i4 >>> 7;
 } else {
  i9 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
 }
 L16 : do {
  if ((i6 | 0) != 0) {
   i2 = (i9 >>> 23) + ~i9 | 0;
   i4 = i2 << 12 ^ i2;
   i2 = i4 >>> 7 ^ i4;
   i4 = i2 << 2 ^ i2;
   i2 = i4 >>> 20 ^ i4 | 1;
   i4 = i9;
   i5 = 0;
   while (1) {
    i10 = i4 & i7;
    i11 = i6 + (i10 << 3) | 0;
    i3 = HEAP32[i11 >> 2] | 0;
    i12 = i3;
    if ((i12 | 0) == 0) {
     break L16;
    } else if ((i12 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i3, HEAP32[i8 >> 2] | 0) | 0) {
      break;
     }
    }
    i3 = (i5 | 0) == 0 ? i2 : i5;
    i4 = i3 + i10 | 0;
    i5 = i3;
   }
   if ((i11 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i6 + (i10 << 3) + 4 >> 2] | 0;
   HEAP32[i1 >> 2] = i5;
   if ((i5 | 0) == 0) {
    return;
   }
   i4 = i5 | 0;
   tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue + 1, tempValue;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore22ThreadableBlobRegistry15registerBlobURLERKNS_3URLENSt3__110unique_ptrINS_8BlobDataENS4_14default_deleteIS6_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (!(__ZN3WTF12isMainThreadEv() | 0)) {
  i5 = __ZN3WTF10fastMallocEj(100) | 0;
  i6 = i2 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  __ZNK7WebCore3URL4copyEv(i5, i1);
  i6 = i5 + 48 | 0;
  HEAP32[i6 >> 2] = 0;
  __ZN7WebCore3URL10invalidateEv(i6);
  HEAP32[i5 + 96 >> 2] = i7;
  __ZN7WebCore8BlobData23detachFromCurrentThreadEv(i7);
  __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 2 | 0, i5);
  STACKTOP = i3;
  return;
 }
 i5 = __ZN7WebCore12blobRegistryEv() | 0;
 i7 = HEAP32[HEAP32[i5 >> 2] >> 2] | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = i2;
 FUNCTION_TABLE_viii[i7 & 1](i5, i1, i4);
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i4 + 16 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 i5 = i4 + 8 | 0;
 if ((i1 | 0) != 0) {
  i7 = HEAP32[i5 >> 2] | 0;
  i2 = i7 + (i1 * 88 & -1) | 0;
  i1 = i7;
  while (1) {
   __ZN7WebCore12BlobDataItemD2Ev(i1);
   i1 = i1 + 88 | 0;
   if ((i1 | 0) == (i2 | 0)) {
    break;
   }
  }
  HEAP32[i6 >> 2] = 0;
 }
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i4 + 12 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = HEAP32[i4 + 4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i2 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i4);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore14SecurityOriginEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_(i1, i2) {
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
   if (((tempValue = HEAP32[i13 >> 2] | 0, HEAP32[i13 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i8);
   __ZN3WTF8fastFreeEPv(i8);
  }
 } while (0);
 i8 = i15 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i14 = i13 | 0;
   i7 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i14 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i8 >> 2] = i13;
 i13 = i2 + 4 | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 return i15 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore14SecurityOriginEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E34removeWithoutEntryConsistencyCheckENS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == ((HEAP32[i1 >> 2] | 0) + (HEAP32[i4 >> 2] << 3) | 0)) {
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i5 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   if (((tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i2);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 HEAP32[i2 >> 2] = -1;
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = i1 + 12 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i5;
 i2 = HEAP32[i4 >> 2] | 0;
 if (!((i5 * 6 & -1 | 0) < (i2 | 0) & (i2 | 0) > 8)) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore14SecurityOriginEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i1, (i2 | 0) / 2 & -1, 0) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCoreL19registerBlobURLTaskEPv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1;
 i5 = __ZN7WebCore12blobRegistryEv() | 0;
 i6 = HEAP32[HEAP32[i5 >> 2] >> 2] | 0;
 i7 = i1 + 96 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i3 | 0;
 HEAP32[i7 >> 2] = i8;
 FUNCTION_TABLE_viii[i6 & 1](i5, i1, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 + 16 | 0;
   i5 = HEAP32[i7 >> 2] | 0;
   i6 = i3 + 8 | 0;
   if ((i5 | 0) != 0) {
    i8 = HEAP32[i6 >> 2] | 0;
    i9 = i8 + (i5 * 88 & -1) | 0;
    i5 = i8;
    while (1) {
     __ZN7WebCore12BlobDataItemD2Ev(i5);
     i5 = i5 + 88 | 0;
     if ((i5 | 0) == (i9 | 0)) {
      break;
     }
    }
    HEAP32[i7 >> 2] = 0;
   }
   i9 = HEAP32[i6 >> 2] | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i6 >> 2] = 0;
    HEAP32[i3 + 12 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i9);
   }
   i9 = HEAP32[i3 + 4 >> 2] | 0;
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
   i9 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i6 = i9 | 0;
     i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i6 >> 2] = i7;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i3);
   if ((i1 | 0) != 0) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 __ZN7WebCore19BlobRegistryContextD1Ev(i4);
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore19BlobRegistryContextD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 96 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  i2 = i3 + 16 | 0;
  i4 = HEAP32[i2 >> 2] | 0;
  i5 = i3 + 8 | 0;
  if ((i4 | 0) != 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i6 + (i4 * 88 & -1) | 0;
   i4 = i6;
   while (1) {
    __ZN7WebCore12BlobDataItemD2Ev(i4);
    i4 = i4 + 88 | 0;
    if ((i4 | 0) == (i7 | 0)) {
     break;
    }
   }
   HEAP32[i2 >> 2] = 0;
  }
  i2 = HEAP32[i5 >> 2] | 0;
  if ((i2 | 0) != 0) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i3 + 12 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i2);
  }
  i2 = HEAP32[i3 + 4 >> 2] | 0;
  do {
   if ((i2 | 0) != 0) {
    i5 = i2 | 0;
    i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i2);
     break;
    } else {
     HEAP32[i5 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i2 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i2 | 0) != 0) {
    i7 = i2 | 0;
    i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i2);
     break;
    } else {
     HEAP32[i7 >> 2] = i5;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  return;
 } else {
  HEAP32[i1 >> 2] = i5;
  return;
 }
}
function __ZN3WTF14ThreadSpecificINS_7HashMapINS_6StringENS_6RefPtrIN7WebCore14SecurityOriginEEENS_10StringHashENS_10HashTraitsIS2_EENS8_IS6_EEEEE7destroyEPv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 + 4 | 0;
 _pthread_setspecific(HEAP32[HEAP32[i2 >> 2] >> 2] | 0, i1 | 0) | 0;
 i3 = i1;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = i4;
 } else {
  i7 = HEAP32[i4 + 4 >> 2] | 0;
  if ((i7 | 0) > 0) {
   i4 = 0;
   while (1) {
    i8 = i5 + (i4 << 3) | 0;
    do {
     if ((HEAP32[i8 >> 2] | 0) != -1) {
      i9 = HEAP32[i5 + (i4 << 3) + 4 >> 2] | 0;
      do {
       if ((i9 | 0) != 0) {
        i10 = i9 | 0;
        if (((tempValue = HEAP32[i10 >> 2] | 0, HEAP32[i10 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
         break;
        }
        __ZN7WebCore14SecurityOriginD2Ev(i9);
        __ZN3WTF8fastFreeEPv(i9);
       }
      } while (0);
      i9 = HEAP32[i8 >> 2] | 0;
      if ((i9 | 0) == 0) {
       break;
      }
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
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i7 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i5);
  i6 = HEAP32[i3 >> 2] | 0;
 }
 __ZN3WTF8fastFreeEPv(i6);
 _pthread_setspecific(HEAP32[HEAP32[i2 >> 2] >> 2] | 0, 0) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZdlPv(i1);
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
function __ZN7WebCore12BlobDataItemD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = i2 | 0;
 if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return;
 }
 i3 = i1 + 12 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
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
function __ZN7WebCoreL23registerBlobURLFromTaskEPv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN7WebCore12blobRegistryEv() | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2, i1, i1 + 48 | 0);
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore19BlobRegistryContextD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCoreL21unregisterBlobURLTaskEPv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN7WebCore12blobRegistryEv() | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 1](i2, i1);
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore19BlobRegistryContextD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCoreL19registerBlobURLTaskEPv,b0,__ZN7WebCoreL21unregisterBlobURLTaskEPv,b0,__ZN7WebCoreL23registerBlobURLFromTaskEPv,b0,__ZN3WTF14ThreadSpecificINS_7HashMapINS_6StringENS_6RefPtrIN7WebCore14SecurityOriginEEENS_10StringHashENS_10HashTraitsIS2_EENS8_IS6_EEEEE7destroyEPv,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_pthread_getspecific": _pthread_getspecific, "___setErrNo": ___setErrNo, "_pthread_key_create": _pthread_key_create, "_malloc": _malloc, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_pthread_setspecific": _pthread_setspecific, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore22ThreadableBlobRegistry15registerBlobURLEPNS_14SecurityOriginERKNS_3URLES5_","__ZN7WebCoreL19registerBlobURLTaskEPv","__ZN7WebCoreL21unregisterBlobURLTaskEPv","__ZN7WebCore22ThreadableBlobRegistry15registerBlobURLERKNS_3URLENSt3__110unique_ptrINS_8BlobDataENS4_14default_deleteIS6_EEEE","__ZN3WTF14ThreadSpecificINS_7HashMapINS_6StringENS_6RefPtrIN7WebCore14SecurityOriginEEENS_10StringHashENS_10HashTraitsIS2_EENS8_IS6_EEEEE7destroyEPv","__ZN7WebCore22ThreadableBlobRegistry17unregisterBlobURLERKNS_3URLE","__ZN7WebCore12BlobDataItemD2Ev","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore14SecurityOriginEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RPS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCoreL23registerBlobURLFromTaskEPv","_memset","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore14SecurityOriginEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_","_memcpy","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore14SecurityOriginEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_","_strlen","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore14SecurityOriginEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E34removeWithoutEntryConsistencyCheckENS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EE","__ZN7WebCore14SecurityOriginD2Ev","__ZN7WebCore19BlobRegistryContextD1Ev","__ZN7WebCore22ThreadableBlobRegistry15getCachedOriginERKNS_3URLE"]

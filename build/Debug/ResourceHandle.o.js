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
H_BASE = parentModule["_malloc"](72 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 72;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14ResourceHandleC1EPNS_17NetworkingContextERKNS_15ResourceRequestEPNS_20ResourceHandleClientEbb;
/* memory initializer */ allocate([102,105,108,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_did(index,a1,a2) {
  try {
    return Module["dynCall_did"](index,a1,a2);
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
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
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
  var __ZTVN7WebCore14ResourceHandleE=env.__ZTVN7WebCore14ResourceHandleE|0;
  var __ZN3WTF10StringImpl19latin1CaseFoldTableE=env.__ZN3WTF10StringImpl19latin1CaseFoldTableE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore5TimerINS_14ResourceHandleEEE=(H_BASE+16)|0;
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
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
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
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[i2 + 56 >> 3];
 i6 = HEAP32[i2 + 64 >> 2] | 0;
 HEAP32[i1 + 64 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i2 + 68 | 0;
 i6 = i1 + 68 | 0;
 i5 = HEAP8[i6] & -2 | HEAP8[i7] & 1;
 HEAP8[i6] = i5;
 HEAP8[i6] = i5 & -3 | HEAP8[i7] & 2;
 HEAP32[i1 + 72 >> 2] = HEAP32[i2 + 72 >> 2];
 HEAP32[i1 + 76 >> 2] = HEAP32[i2 + 76 >> 2];
 HEAP32[i1 + 80 >> 2] = HEAP32[i2 + 80 >> 2];
 HEAP32[i1 + 84 >> 2] = HEAP32[i2 + 84 >> 2];
 HEAP32[i1 + 88 >> 2] = HEAP32[i2 + 88 >> 2];
 HEAP32[i1 + 92 >> 2] = HEAP32[i2 + 92 >> 2];
 HEAP32[i1 + 96 >> 2] = HEAP32[i2 + 96 >> 2];
 HEAP32[i1 + 100 >> 2] = HEAP32[i2 + 100 >> 2];
 HEAP32[i1 + 104 >> 2] = HEAP32[i2 + 104 >> 2];
 HEAP32[i1 + 108 >> 2] = HEAP32[i2 + 108 >> 2];
 i7 = HEAP32[i2 + 112 >> 2] | 0;
 HEAP32[i1 + 112 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i5 = i7 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 116 | 0;
 i7 = i5 | 0;
 _memset(i5 | 0, 0, 20) | 0;
 i5 = HEAP32[i2 + 116 >> 2] | 0;
 i6 = HEAP32[i2 + 120 >> 2] | 0;
 i8 = i5 + (i6 << 3) | 0;
 L10 : do {
  if ((HEAP32[i2 + 128 >> 2] | 0) != 0) {
   L12 : do {
    if ((i6 | 0) == 0) {
     i9 = i5;
    } else {
     i10 = i5;
     while (1) {
      i11 = HEAP32[i10 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i9 = i10;
       break L12;
      }
      i10 = i10 + 8 | 0;
      if ((i10 | 0) == (i8 | 0)) {
       break L10;
      }
     }
    }
   } while (0);
   if ((i9 | 0) == (i8 | 0)) {
    break;
   } else {
    i12 = i9;
   }
   while (1) {
    __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_22IdentityHashTranslatorIS7_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i4, i7, i12 | 0, i12);
    i10 = i12 + 8 | 0;
    if ((i10 | 0) == (i8 | 0)) {
     break L10;
    } else {
     i13 = i10;
    }
    while (1) {
     i10 = HEAP32[i13 >> 2] | 0;
     if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
      break;
     }
     i10 = i13 + 8 | 0;
     if ((i10 | 0) == (i8 | 0)) {
      break L10;
     } else {
      i13 = i10;
     }
    }
    if ((i13 | 0) == (i8 | 0)) {
     break;
    } else {
     i12 = i13;
    }
   }
  }
 } while (0);
 i13 = HEAP32[i2 + 140 >> 2] | 0;
 i12 = i2 + 144 | 0;
 i8 = HEAP32[i12 >> 2] | 0;
 i7 = i1 + 136 | 0;
 HEAP32[i7 >> 2] = 0;
 i4 = i1 + 140 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 144 >> 2] = i8;
 do {
  if ((i13 | 0) != 0) {
   if (i13 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i8 = __ZN3WTF18fastMallocGoodSizeEj(i13 << 2) | 0;
   HEAP32[i4 >> 2] = i8 >>> 2;
   i9 = __ZN3WTF10fastMallocEj(i8) | 0;
   i8 = i9;
   HEAP32[i7 >> 2] = i8;
   if ((i9 | 0) == 0) {
    break;
   }
   i9 = HEAP32[i2 + 136 >> 2] | 0;
   i5 = HEAP32[i12 >> 2] | 0;
   i6 = i9 + (i5 << 2) | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i14 = i9;
    i15 = i8;
   }
   while (1) {
    i8 = HEAP32[i14 >> 2] | 0;
    HEAP32[i15 >> 2] = i8;
    if ((i8 | 0) != 0) {
     i9 = i8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    }
    i9 = i14 + 4 | 0;
    if ((i9 | 0) == (i6 | 0)) {
     break;
    } else {
     i14 = i9;
     i15 = i15 + 4 | 0;
    }
   }
  }
 } while (0);
 i15 = HEAP32[i2 + 148 >> 2] | 0;
 HEAP32[i1 + 148 >> 2] = i15;
 if ((i15 | 0) == 0) {
  i16 = i2 + 152 | 0;
  i17 = HEAP8[i16] | 0;
  i18 = i17 & 1;
  i19 = i1 + 152 | 0;
  i20 = HEAP8[i19] | 0;
  i21 = i20 & -2;
  i22 = i21 | i18;
  HEAP8[i19] = i22;
  i23 = HEAP8[i16] | 0;
  i24 = i23 & 2;
  i25 = i22 & -3;
  i26 = i25 | i24;
  HEAP8[i19] = i26;
  i27 = HEAP8[i16] | 0;
  i28 = i27 & 4;
  i29 = i26 & -5;
  i30 = i29 | i28;
  HEAP8[i19] = i30;
  i31 = HEAP8[i16] | 0;
  i32 = i31 & 8;
  i33 = i30 & -9;
  i34 = i33 | i32;
  HEAP8[i19] = i34;
  i35 = HEAP8[i16] | 0;
  i36 = i35 & 16;
  i37 = i34 & -17;
  i38 = i37 | i36;
  HEAP8[i19] = i38;
  i39 = HEAP8[i16] | 0;
  i40 = i39 & 32;
  i41 = i38 & -33;
  i42 = i41 | i40;
  HEAP8[i19] = i42;
  i43 = HEAP8[i16] | 0;
  i44 = i43 & 64;
  i45 = i42 & -65;
  i46 = i45 | i44;
  HEAP8[i19] = i46;
  i47 = HEAP8[i16] | 0;
  i48 = i47 & -128;
  i49 = i46 & 127;
  i50 = i49 | i48;
  HEAP8[i19] = i50;
  i51 = i1 + 156 | 0;
  i52 = i2 + 156 | 0;
  i53 = HEAP32[i52 >> 2] | 0;
  HEAP32[i51 >> 2] = i53;
  STACKTOP = i3;
  return;
 }
 i14 = i15 | 0;
 HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 i16 = i2 + 152 | 0;
 i17 = HEAP8[i16] | 0;
 i18 = i17 & 1;
 i19 = i1 + 152 | 0;
 i20 = HEAP8[i19] | 0;
 i21 = i20 & -2;
 i22 = i21 | i18;
 HEAP8[i19] = i22;
 i23 = HEAP8[i16] | 0;
 i24 = i23 & 2;
 i25 = i22 & -3;
 i26 = i25 | i24;
 HEAP8[i19] = i26;
 i27 = HEAP8[i16] | 0;
 i28 = i27 & 4;
 i29 = i26 & -5;
 i30 = i29 | i28;
 HEAP8[i19] = i30;
 i31 = HEAP8[i16] | 0;
 i32 = i31 & 8;
 i33 = i30 & -9;
 i34 = i33 | i32;
 HEAP8[i19] = i34;
 i35 = HEAP8[i16] | 0;
 i36 = i35 & 16;
 i37 = i34 & -17;
 i38 = i37 | i36;
 HEAP8[i19] = i38;
 i39 = HEAP8[i16] | 0;
 i40 = i39 & 32;
 i41 = i38 & -33;
 i42 = i41 | i40;
 HEAP8[i19] = i42;
 i43 = HEAP8[i16] | 0;
 i44 = i43 & 64;
 i45 = i42 & -65;
 i46 = i45 | i44;
 HEAP8[i19] = i46;
 i47 = HEAP8[i16] | 0;
 i48 = i47 & -128;
 i49 = i46 & 127;
 i50 = i49 | i48;
 HEAP8[i19] = i50;
 i51 = i1 + 156 | 0;
 i52 = i2 + 156 | 0;
 i53 = HEAP32[i52 >> 2] | 0;
 HEAP32[i51 >> 2] = i53;
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PFvPN7WebCore17NetworkingContextERKNS3_15ResourceRequestENS3_17StoredCredentialsERNS3_13ResourceErrorERNS3_16ResourceResponseERNS_6VectorIcLj0ENS_15CrashOnOverflowEEEEEENS_24KeyValuePairKeyExtractorISK_EENS_16AtomicStringHashENS_7HashMapIS1_SJ_SN_NS_10HashTraitsIS1_EENSP_ISJ_EEE18KeyValuePairTraitsESQ_E3addINS_17HashMapTranslatorIST_SN_EERKS1_RSJ_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_SK_SM_SN_ST_SQ_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
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
  __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PFvPN7WebCore17NetworkingContextERKNS3_15ResourceRequestENS3_17StoredCredentialsERNS3_13ResourceErrorERNS3_16ResourceResponseERNS_6VectorIcLj0ENS_15CrashOnOverflowEEEEEENS_24KeyValuePairKeyExtractorISK_EENS_16AtomicStringHashENS_7HashMapIS1_SJ_SN_NS_10HashTraitsIS1_EENSP_ISJ_EEE18KeyValuePairTraitsESQ_E6rehashEiPSK_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 i7 = i9 >>> 7;
 i11 = (i9 >>> 30) + ~i7 | 0;
 i9 = i11 << 12 ^ i11;
 i11 = i9 >>> 7 ^ i9;
 i9 = i11 << 2 ^ i11;
 i11 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i12 = i7;
 i7 = 0;
 while (1) {
  i13 = i12 & i6;
  i14 = i10 + (i13 << 3) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15;
  if ((i16 | 0) == (-1 | 0)) {
   i17 = i14;
  } else if ((i16 | 0) == 0) {
   break;
  } else {
   if ((i15 | 0) == (i3 | 0)) {
    i18 = 8;
    break;
   } else {
    i17 = i9;
   }
  }
  i15 = (i7 | 0) == 0 ? i11 : i7;
  i9 = i17;
  i12 = i15 + i13 | 0;
  i7 = i15;
 }
 if ((i18 | 0) == 8) {
  i18 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i14;
  HEAP32[i10 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i19 = i14;
  i20 = i3;
 } else {
  i3 = i9;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  i3 = i2 + 16 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
  i19 = i9;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 if ((i20 | 0) != 0) {
  i8 = i20 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i19 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i20;
 do {
  if ((i9 | 0) != 0) {
   i20 = i9 | 0;
   i8 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i20 >> 2] = i8;
    break;
   }
  }
 } while (0);
 HEAP32[i19 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i9 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i9;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i8 | 0)) {
  i21 = i19;
  i22 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i23 = 8;
  } else {
   i20 = i8 << 1;
   i23 = (i9 * 6 & -1 | 0) < (i20 | 0) ? i8 : i20;
  }
  i20 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PFvPN7WebCore17NetworkingContextERKNS3_15ResourceRequestENS3_17StoredCredentialsERNS3_13ResourceErrorERNS3_16ResourceResponseERNS_6VectorIcLj0ENS_15CrashOnOverflowEEEEEENS_24KeyValuePairKeyExtractorISK_EENS_16AtomicStringHashENS_7HashMapIS1_SJ_SN_NS_10HashTraitsIS1_EENSP_ISJ_EEE18KeyValuePairTraitsESQ_E6rehashEiPSK_(i2, i23, i19) | 0;
  i21 = i20;
  i22 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i22 << 3) | 0;
 i22 = i1;
 HEAP32[i22 >> 2] = i21;
 HEAP32[i22 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore14ResourceHandle6createEPNS_17NetworkingContextERKNS_15ResourceRequestEPNS_20ResourceHandleClientEbb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 if (HEAP8[H_BASE + 56 | 0] | 0) {
  i10 = HEAP32[H_BASE + 72 >> 2] | 0;
 } else {
  i11 = __ZN3WTF10fastMallocEj(20) | 0;
  i12 = i11;
  _memset(i11 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 72 >> 2] = i12;
  HEAP8[H_BASE + 56 | 0] = 1;
  i10 = i12;
 }
 __ZNK7WebCore3URL8protocolEv(i9, __ZNK7WebCore19ResourceRequestBase3urlEv(i3 | 0) | 0);
 i12 = i9 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i11 = i8 | 0;
   HEAP32[i11 >> 2] = 0;
   i13 = i11;
  } else {
   if ((HEAP32[i9 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i8, i9);
    i13 = i8 | 0;
    break;
   } else {
    i11 = i8 | 0;
    HEAP32[i11 >> 2] = i9;
    i14 = i9 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
    i13 = i11;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i13 >> 2] | 0;
 i13 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i13 | 0) == 0) {
   i15 = HEAP32[i10 + 4 >> 2] << 3 | 0;
  } else {
   i8 = HEAP32[i10 + 8 >> 2] | 0;
   i11 = HEAP32[i9 + 16 >> 2] | 0;
   i14 = i11 >>> 7;
   i16 = (i11 >>> 30) + ~i14 | 0;
   i11 = i16 << 12 ^ i16;
   i16 = i11 >>> 7 ^ i11;
   i11 = i16 << 2 ^ i16;
   i16 = i11 >>> 20 ^ i11 | 1;
   i11 = i14;
   i14 = 0;
   while (1) {
    i17 = i11 & i8;
    i18 = i13 + (i17 << 3) | 0;
    i19 = HEAP32[i18 >> 2] | 0;
    i20 = i19;
    if ((i20 | 0) == 0) {
     break;
    } else if ((i20 | 0) != (-1 | 0)) {
     if ((i19 | 0) == (i9 | 0)) {
      i21 = 15;
      break;
     }
    }
    i19 = (i14 | 0) == 0 ? i16 : i14;
    i11 = i19 + i17 | 0;
    i14 = i19;
   }
   if ((i21 | 0) == 15) {
    if ((i18 | 0) != 0) {
     i15 = i18;
     break;
    }
   }
   i15 = i13 + (HEAP32[i10 + 4 >> 2] << 3) | 0;
  }
 } while (0);
 do {
  if ((i9 | 0) != 0) {
   i10 = i9 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i13;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 56 | 0] | 0) {
  i22 = HEAP32[H_BASE + 72 >> 2] | 0;
 } else {
  i9 = __ZN3WTF10fastMallocEj(20) | 0;
  i13 = i9;
  _memset(i9 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 72 >> 2] = i13;
  HEAP8[H_BASE + 56 | 0] = 1;
  i22 = i13;
 }
 if ((i15 | 0) != ((HEAP32[i22 >> 2] | 0) + (HEAP32[i22 + 4 >> 2] << 3) | 0)) {
  FUNCTION_TABLE_viii[HEAP32[i15 + 4 >> 2] & 1](i1, i3, i4);
  STACKTOP = i7;
  return;
 }
 i15 = __ZN3WTF10fastMallocEj(12) | 0;
 i22 = i15;
 __ZN7WebCore14ResourceHandleC2EPNS_17NetworkingContextERKNS_15ResourceRequestEPNS_20ResourceHandleClientEbb(i22, i2, i3, i4, i5, i6);
 if ((HEAP32[(HEAP32[i15 + 8 >> 2] | 0) + 464 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = i22;
  STACKTOP = i7;
  return;
 }
 i6 = i1 | 0;
 if (__ZN7WebCore14ResourceHandle5startEv(i22) | 0) {
  HEAP32[i6 >> 2] = i22;
  STACKTOP = i7;
  return;
 }
 HEAP32[i6 >> 2] = 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i6 = i15 + 4 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 7](i22);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore22ResourceHandleInternalC2EPNS_14ResourceHandleEPNS_17NetworkingContextERKNS_15ResourceRequestEPNS_20ResourceHandleClientEbb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i11 = i3 + 4 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 4 >> 2] = i5;
 i5 = i1 + 8 | 0;
 i11 = i4 | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i5, i11);
 i3 = HEAP32[i4 + 160 >> 2] | 0;
 HEAP32[i1 + 168 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i12 = i3 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = HEAP32[i4 + 164 >> 2] | 0;
 HEAP32[i1 + 172 >> 2] = i12;
 if ((i12 | 0) != 0) {
  i3 = i12 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = HEAP32[i4 + 168 >> 2] | 0;
 HEAP32[i1 + 176 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i12 = i3 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = HEAP32[i4 + 172 >> 2] | 0;
 HEAP32[i1 + 180 >> 2] = i12;
 if ((i12 | 0) != 0) {
  i3 = i12 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 184 | 0] = HEAP8[i4 + 176 | 0] & 1;
 HEAP8[i1 + 185 | 0] = HEAP8[i4 + 177 | 0] & 1;
 HEAP8[i1 + 186 | 0] = HEAP8[i4 + 178 | 0] & 1;
 HEAP32[i1 + 188 >> 2] = HEAP32[i4 + 180 >> 2];
 i4 = HEAP32[(__ZNK7WebCore19ResourceRequestBase10httpMethodEv(i11) | 0) >> 2] | 0;
 HEAP32[i1 + 192 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i11 = i4 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 i11 = i1 + 196 | 0;
 HEAP32[i11 >> 2] = 0;
 i4 = i1 + 200 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore10CredentialC1Ev(i1 + 204 | 0);
 HEAP32[i1 + 216 >> 2] = 0;
 HEAP8[i1 + 220 | 0] = i6 & 1;
 HEAP8[i1 + 221 | 0] = i7 & 1;
 __ZN7WebCore27AuthenticationChallengeBaseC2Ev(i1 + 224 | 0);
 HEAP8[i1 + 460 | 0] = 0;
 HEAP32[i1 + 464 >> 2] = 0;
 i7 = i1 + 472 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i7);
 HEAP32[i7 >> 2] = H_BASE + 24;
 HEAP32[i1 + 516 >> 2] = i2;
 i2 = i1 + 520 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 2;
 HEAP32[i2 + 4 >> 2] = 0;
 i2 = __ZNK7WebCore19ResourceRequestBase3urlEv(i5) | 0;
 __ZNK7WebCore3URL4userEv(i9, i2);
 i1 = i9 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i7 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i9;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i9 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i1 = i7 | 0;
   i11 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i1 >> 2] = i11;
    break;
   }
  }
 } while (0);
 __ZNK7WebCore3URL4passEv(i10, i2);
 i2 = i10 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i10;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 | 0;
   i4 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZN7WebCore19ResourceRequestBase17removeCredentialsEv(i5);
  STACKTOP = i8;
  return;
 }
 i2 = i7 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  __ZN7WebCore19ResourceRequestBase17removeCredentialsEv(i5);
  STACKTOP = i8;
  return;
 } else {
  HEAP32[i2 >> 2] = i4;
  __ZN7WebCore19ResourceRequestBase17removeCredentialsEv(i5);
  STACKTOP = i8;
  return;
 }
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PFNS_10PassRefPtrIN7WebCore14ResourceHandleEEERKNS4_15ResourceRequestEPNS4_20ResourceHandleClientEEEENS_24KeyValuePairKeyExtractorISE_EENS_16AtomicStringHashENS_7HashMapIS1_SD_SH_NS_10HashTraitsIS1_EENSJ_ISD_EEE18KeyValuePairTraitsESK_E3addINS_17HashMapTranslatorISN_SH_EERKS1_RSD_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_SE_SG_SH_SN_SK_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
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
  __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PFNS_10PassRefPtrIN7WebCore14ResourceHandleEEERKNS4_15ResourceRequestEPNS4_20ResourceHandleClientEEEENS_24KeyValuePairKeyExtractorISE_EENS_16AtomicStringHashENS_7HashMapIS1_SD_SH_NS_10HashTraitsIS1_EENSJ_ISD_EEE18KeyValuePairTraitsESK_E6rehashEiPSE_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 i7 = i9 >>> 7;
 i11 = (i9 >>> 30) + ~i7 | 0;
 i9 = i11 << 12 ^ i11;
 i11 = i9 >>> 7 ^ i9;
 i9 = i11 << 2 ^ i11;
 i11 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i12 = i7;
 i7 = 0;
 while (1) {
  i13 = i12 & i6;
  i14 = i10 + (i13 << 3) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15;
  if ((i16 | 0) == (-1 | 0)) {
   i17 = i14;
  } else if ((i16 | 0) == 0) {
   break;
  } else {
   if ((i15 | 0) == (i3 | 0)) {
    i18 = 8;
    break;
   } else {
    i17 = i9;
   }
  }
  i15 = (i7 | 0) == 0 ? i11 : i7;
  i9 = i17;
  i12 = i15 + i13 | 0;
  i7 = i15;
 }
 if ((i18 | 0) == 8) {
  i18 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i14;
  HEAP32[i10 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i19 = i14;
  i20 = i3;
 } else {
  i3 = i9;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  i3 = i2 + 16 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
  i19 = i9;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 if ((i20 | 0) != 0) {
  i8 = i20 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i19 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i20;
 do {
  if ((i9 | 0) != 0) {
   i20 = i9 | 0;
   i8 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i20 >> 2] = i8;
    break;
   }
  }
 } while (0);
 HEAP32[i19 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i9 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i9;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i8 | 0)) {
  i21 = i19;
  i22 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i23 = 8;
  } else {
   i20 = i8 << 1;
   i23 = (i9 * 6 & -1 | 0) < (i20 | 0) ? i8 : i20;
  }
  i20 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PFNS_10PassRefPtrIN7WebCore14ResourceHandleEEERKNS4_15ResourceRequestEPNS4_20ResourceHandleClientEEEENS_24KeyValuePairKeyExtractorISE_EENS_16AtomicStringHashENS_7HashMapIS1_SD_SH_NS_10HashTraitsIS1_EENSJ_ISD_EEE18KeyValuePairTraitsESK_E6rehashEiPSE_(i2, i23, i19) | 0;
  i21 = i20;
  i22 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i22 << 3) | 0;
 i22 = i1;
 HEAP32[i22 >> 2] = i21;
 HEAP32[i22 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_22IdentityHashTranslatorIS7_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i8 >> 2] | 0) | 0;
 i9 = (i3 >>> 23) + ~i3 | 0;
 i10 = i9 << 12 ^ i9;
 i9 = i10 >>> 7 ^ i10;
 i10 = i9 << 2 ^ i9;
 i9 = i10 >>> 20 ^ i10 | 1;
 i10 = 0;
 i11 = i3;
 i3 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   i15 = HEAP32[i8 >> 2] | 0;
   if ((i14 | 0) == (i15 | 0)) {
    i17 = 7;
    break;
   }
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i14, i15) | 0) {
    i17 = 7;
    break;
   } else {
    i16 = i10;
   }
  }
  i15 = (i3 | 0) == 0 ? i9 : i3;
  i10 = i16;
  i11 = i15 + i12 | 0;
  i3 = i15;
 }
 if ((i17 | 0) == 7) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i3 = i1;
  HEAP32[i3 >> 2] = i13;
  HEAP32[i3 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i10 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i10;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i10;
 }
 i10 = HEAP32[i4 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i13 = i10 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = i18 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i10;
 do {
  if ((i17 | 0) != 0) {
   i10 = i17 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i10 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i4 + 4 >> 2] | 0;
 if ((i17 | 0) != 0) {
  i4 = i17 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i17;
 do {
  if ((i13 | 0) != 0) {
   i17 = i13 | 0;
   i4 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i17 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i4 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i4;
 i13 = i2 + 4 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i17 | 0)) {
  i19 = i18;
  i20 = i17;
 } else {
  i17 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_(i2, i18) | 0;
  i19 = i17;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore14ResourceHandle25loadResourceSynchronouslyEPNS_17NetworkingContextERKNS_15ResourceRequestENS_17StoredCredentialsERNS_13ResourceErrorERNS_16ResourceResponseERN3WTF6VectorIcLj0ENSB_15CrashOnOverflowEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 if (HEAP8[H_BASE + 48 | 0] | 0) {
  i10 = HEAP32[H_BASE + 64 >> 2] | 0;
 } else {
  i11 = __ZN3WTF10fastMallocEj(20) | 0;
  i12 = i11;
  _memset(i11 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 64 >> 2] = i12;
  HEAP8[H_BASE + 48 | 0] = 1;
  i10 = i12;
 }
 __ZNK7WebCore3URL8protocolEv(i9, __ZNK7WebCore19ResourceRequestBase3urlEv(i2 | 0) | 0);
 i12 = i9 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i11 = i8 | 0;
   HEAP32[i11 >> 2] = 0;
   i13 = i11;
  } else {
   if ((HEAP32[i9 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i8, i9);
    i13 = i8 | 0;
    break;
   } else {
    i11 = i8 | 0;
    HEAP32[i11 >> 2] = i9;
    i14 = i9 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
    i13 = i11;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i13 >> 2] | 0;
 i13 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i13 | 0) == 0) {
   i15 = HEAP32[i10 + 4 >> 2] << 3 | 0;
  } else {
   i8 = HEAP32[i10 + 8 >> 2] | 0;
   i11 = HEAP32[i9 + 16 >> 2] | 0;
   i14 = i11 >>> 7;
   i16 = (i11 >>> 30) + ~i14 | 0;
   i11 = i16 << 12 ^ i16;
   i16 = i11 >>> 7 ^ i11;
   i11 = i16 << 2 ^ i16;
   i16 = i11 >>> 20 ^ i11 | 1;
   i11 = i14;
   i14 = 0;
   while (1) {
    i17 = i11 & i8;
    i18 = i13 + (i17 << 3) | 0;
    i19 = HEAP32[i18 >> 2] | 0;
    i20 = i19;
    if ((i20 | 0) == 0) {
     break;
    } else if ((i20 | 0) != (-1 | 0)) {
     if ((i19 | 0) == (i9 | 0)) {
      i21 = 15;
      break;
     }
    }
    i19 = (i14 | 0) == 0 ? i16 : i14;
    i11 = i19 + i17 | 0;
    i14 = i19;
   }
   if ((i21 | 0) == 15) {
    if ((i18 | 0) != 0) {
     i15 = i18;
     break;
    }
   }
   i15 = i13 + (HEAP32[i10 + 4 >> 2] << 3) | 0;
  }
 } while (0);
 do {
  if ((i9 | 0) != 0) {
   i10 = i9 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i13;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 48 | 0] | 0) {
  i22 = HEAP32[H_BASE + 64 >> 2] | 0;
 } else {
  i9 = __ZN3WTF10fastMallocEj(20) | 0;
  i13 = i9;
  _memset(i9 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 64 >> 2] = i13;
  HEAP8[H_BASE + 48 | 0] = 1;
  i22 = i13;
 }
 if ((i15 | 0) == ((HEAP32[i22 >> 2] | 0) + (HEAP32[i22 + 4 >> 2] << 3) | 0)) {
  __ZN7WebCore14ResourceHandle33platformLoadResourceSynchronouslyEPNS_17NetworkingContextERKNS_15ResourceRequestENS_17StoredCredentialsERNS_13ResourceErrorERNS_16ResourceResponseERN3WTF6VectorIcLj0ENSB_15CrashOnOverflowEEE(i1, i2, i3, i4, i5, i6);
  STACKTOP = i7;
  return;
 } else {
  FUNCTION_TABLE_viiiiii[HEAP32[i15 + 4 >> 2] & 3](i1, i2, i3, i4, i5, i6);
  STACKTOP = i7;
  return;
 }
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PFvPN7WebCore17NetworkingContextERKNS3_15ResourceRequestENS3_17StoredCredentialsERNS3_13ResourceErrorERNS3_16ResourceResponseERNS_6VectorIcLj0ENS_15CrashOnOverflowEEEEEENS_24KeyValuePairKeyExtractorISK_EENS_16AtomicStringHashENS_7HashMapIS1_SJ_SN_NS_10HashTraitsIS1_EENSP_ISJ_EEE18KeyValuePairTraitsESQ_E6rehashEiPSK_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
   i18 = i17 >>> 7;
   i19 = (i17 >>> 30) + ~i18 | 0;
   i17 = i19 << 12 ^ i19;
   i19 = i17 >>> 7 ^ i17;
   i17 = i19 << 2 ^ i19;
   i19 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i18 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == (-1 | 0)) {
     i25 = i22;
    } else if ((i24 | 0) == 0) {
     i26 = 6;
     break;
    } else {
     if ((i23 | 0) == (i13 | 0)) {
      i27 = i22;
      i28 = i13;
      break;
     } else {
      i25 = i20;
     }
    }
    i23 = (i18 | 0) == 0 ? i19 : i18;
    i17 = i23 + i21 | 0;
    i18 = i23;
    i20 = i25;
   }
   if ((i26 | 0) == 6) {
    i26 = 0;
    i18 = (i20 | 0) != 0 ? i20 : i22;
    i27 = i18;
    i28 = HEAP32[i18 >> 2] | 0;
   }
   i18 = i27 | 0;
   do {
    if ((i28 | 0) != 0) {
     i17 = i28 | 0;
     i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i28);
      break;
     } else {
      HEAP32[i17 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i18 >> 2] = i20;
   HEAP32[i27 + 4 >> 2] = HEAP32[i7 + (i10 << 3) + 4 >> 2];
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i29 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i29 << 3) >> 2] | 0;
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
  i1 = i29 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i29 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PFNS_10PassRefPtrIN7WebCore14ResourceHandleEEERKNS4_15ResourceRequestEPNS4_20ResourceHandleClientEEEENS_24KeyValuePairKeyExtractorISE_EENS_16AtomicStringHashENS_7HashMapIS1_SD_SH_NS_10HashTraitsIS1_EENSJ_ISD_EEE18KeyValuePairTraitsESK_E6rehashEiPSE_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
   i18 = i17 >>> 7;
   i19 = (i17 >>> 30) + ~i18 | 0;
   i17 = i19 << 12 ^ i19;
   i19 = i17 >>> 7 ^ i17;
   i17 = i19 << 2 ^ i19;
   i19 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i18 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == (-1 | 0)) {
     i25 = i22;
    } else if ((i24 | 0) == 0) {
     i26 = 6;
     break;
    } else {
     if ((i23 | 0) == (i13 | 0)) {
      i27 = i22;
      i28 = i13;
      break;
     } else {
      i25 = i20;
     }
    }
    i23 = (i18 | 0) == 0 ? i19 : i18;
    i17 = i23 + i21 | 0;
    i18 = i23;
    i20 = i25;
   }
   if ((i26 | 0) == 6) {
    i26 = 0;
    i18 = (i20 | 0) != 0 ? i20 : i22;
    i27 = i18;
    i28 = HEAP32[i18 >> 2] | 0;
   }
   i18 = i27 | 0;
   do {
    if ((i28 | 0) != 0) {
     i17 = i28 | 0;
     i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i28);
      break;
     } else {
      HEAP32[i17 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i18 >> 2] = i20;
   HEAP32[i27 + 4 >> 2] = HEAP32[i7 + (i10 << 3) + 4 >> 2];
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i29 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i29 << 3) >> 2] | 0;
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
  i1 = i29 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i29 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
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
 HEAP32[i1 + 8 >> 2] = i5 - 1;
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
 if ((i6 | 0) == 0) {
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
  i5 = i7 + (i10 << 3) | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  if ((i4 | 0) == (-1 | 0) | (i4 | 0) == 0) {
   i12 = i11;
  } else {
   i4 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E8reinsertEOS4_(i1, i5) | 0;
   i12 = (i5 | 0) == (i2 | 0) ? i4 : i11;
  }
  i4 = i10 + 1 | 0;
  if ((i4 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i4;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
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
      i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i2 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       break;
      } else {
       HEAP32[i10 >> 2] = i2;
       break;
      }
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i2 = i11 | 0;
    i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i2 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
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
function __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = i3 | 0;
  HEAP32[i6 >> 2] = -1640531527;
  i7 = i3 + 4 | 0;
  HEAP8[i7] = 0;
  i8 = i3 + 6 | 0;
  HEAP16[i8 >> 1] = 0;
  __ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j(i3, i4, i5);
  i5 = HEAP32[i6 >> 2] | 0;
  if ((HEAP8[i7] & 1) == 0) {
   i9 = i5;
  } else {
   i7 = (HEAPU16[i8 >> 1] | 0) + i5 | 0;
   i5 = i7 << 11 ^ i7;
   i9 = (i5 >>> 17) + i5 | 0;
  }
  i5 = i9 << 3 ^ i9;
  i9 = (i5 >>> 5) + i5 | 0;
  i5 = i9 << 2 ^ i9;
  i9 = (i5 >>> 15) + i5 | 0;
  i5 = (i9 << 10 ^ i9) & 16777215;
  i10 = (i5 | 0) == 0 ? 8388608 : i5;
  STACKTOP = i2;
  return i10 | 0;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i9 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = (i9 & 1 | 0) == 0;
 i7 = i9 >>> 1;
 if ((i7 | 0) == 0) {
  i11 = i5;
  i12 = -1640531527;
 } else {
  i9 = i7;
  i8 = i5;
  i6 = -1640531527;
  while (1) {
   i4 = i9 - 1 | 0;
   i3 = (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i8] | 0) << 1) >> 1] | 0) + i6 | 0;
   i13 = i3 << 16 ^ i3 ^ (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i8 + 1 | 0] | 0) << 1) >> 1] | 0) << 11;
   i14 = (i13 >>> 11) + i13 | 0;
   if ((i4 | 0) == 0) {
    break;
   } else {
    i9 = i4;
    i8 = i8 + 2 | 0;
    i6 = i14;
   }
  }
  i11 = i5 + (i7 << 1) | 0;
  i12 = i14;
 }
 if (i1) {
  i15 = i12;
 } else {
  i1 = (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i11] | 0) << 1) >> 1] | 0) + i12 | 0;
  i12 = i1 << 11 ^ i1;
  i15 = (i12 >>> 17) + i12 | 0;
 }
 i12 = i15 << 3 ^ i15;
 i15 = (i12 >>> 5) + i12 | 0;
 i12 = i15 << 2 ^ i15;
 i15 = (i12 >>> 15) + i12 | 0;
 i12 = (i15 << 10 ^ i15) & 16777215;
 i10 = (i12 | 0) == 0 ? 8388608 : i12;
 STACKTOP = i2;
 return i10 | 0;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E8reinsertEOS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i1 >> 2] | 0) | 0;
 i6 = (i5 >>> 23) + ~i5 | 0;
 i7 = i6 << 12 ^ i6;
 i6 = i7 >>> 7 ^ i7;
 i7 = i6 << 2 ^ i6;
 i6 = i7 >>> 20 ^ i7 | 1;
 i7 = i5;
 i5 = 0;
 i8 = 0;
 while (1) {
  i9 = i7 & i4;
  i10 = i3 + (i9 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  if ((i12 | 0) == (-1 | 0)) {
   i13 = i10;
  } else if ((i12 | 0) == 0) {
   i14 = 3;
   break;
  } else {
   i12 = HEAP32[i1 >> 2] | 0;
   if ((i11 | 0) == (i12 | 0)) {
    i15 = i10;
    break;
   }
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i11, i12) | 0) {
    i15 = i10;
    break;
   } else {
    i13 = i8;
   }
  }
  i12 = (i5 | 0) == 0 ? i6 : i5;
  i7 = i12 + i9 | 0;
  i5 = i12;
  i8 = i13;
 }
 if ((i14 | 0) == 3) {
  i15 = (i8 | 0) != 0 ? i8 : i10;
 }
 i10 = i15 + 4 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i14 = i8 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i14 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i8 = i15 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i14 = i13 | 0;
   i5 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i14 >> 2] = i5;
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
function __ZN7WebCore14ResourceHandleC2EPNS_17NetworkingContextERKNS_15ResourceRequestEPNS_20ResourceHandleClientEbb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = __ZTVN7WebCore14ResourceHandleE + 8;
 i7 = __ZN3WTF10fastMallocEj(528) | 0;
 i8 = i3 | 0;
 if (i6) {
  i9 = (__ZNK7WebCore3URL10protocolIsEPKc(__ZNK7WebCore19ResourceRequestBase3urlEv(i8) | 0, H_BASE + 8 | 0) | 0) ^ 1;
 } else {
  i9 = 0;
 }
 __ZN7WebCore22ResourceHandleInternalC2EPNS_14ResourceHandleEPNS_17NetworkingContextERKNS_15ResourceRequestEPNS_20ResourceHandleClientEbb(i7, i1, i2, i3, i4, i5, i9);
 i9 = i1 + 8 | 0;
 HEAP32[i9 >> 2] = i7;
 if ((HEAP8[(__ZNK7WebCore19ResourceRequestBase3urlEv(i8) | 0) + 4 | 0] & 1) == 0) {
  HEAP32[(HEAP32[i9 >> 2] | 0) + 464 >> 2] = 2;
  __ZN7WebCore9TimerBase5startEdd((HEAP32[i9 >> 2] | 0) + 472 | 0, +0, +0);
  return;
 }
 if (__ZN7WebCore11portAllowedERKNS_3URLE(__ZNK7WebCore19ResourceRequestBase3urlEv(i8) | 0) | 0) {
  return;
 }
 HEAP32[(HEAP32[i9 >> 2] | 0) + 464 >> 2] = 1;
 __ZN7WebCore9TimerBase5startEdd((HEAP32[i9 >> 2] | 0) + 472 | 0, +0, +0);
 return;
}
function __ZN7WebCore14ResourceHandleC1EPNS_17NetworkingContextERKNS_15ResourceRequestEPNS_20ResourceHandleClientEbb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = __ZTVN7WebCore14ResourceHandleE + 8;
 i7 = __ZN3WTF10fastMallocEj(528) | 0;
 i8 = i3 | 0;
 if (i6) {
  i9 = (__ZNK7WebCore3URL10protocolIsEPKc(__ZNK7WebCore19ResourceRequestBase3urlEv(i8) | 0, H_BASE + 8 | 0) | 0) ^ 1;
 } else {
  i9 = 0;
 }
 __ZN7WebCore22ResourceHandleInternalC2EPNS_14ResourceHandleEPNS_17NetworkingContextERKNS_15ResourceRequestEPNS_20ResourceHandleClientEbb(i7, i1, i2, i3, i4, i5, i9);
 i9 = i1 + 8 | 0;
 HEAP32[i9 >> 2] = i7;
 if ((HEAP8[(__ZNK7WebCore19ResourceRequestBase3urlEv(i8) | 0) + 4 | 0] & 1) == 0) {
  HEAP32[(HEAP32[i9 >> 2] | 0) + 464 >> 2] = 2;
  __ZN7WebCore9TimerBase5startEdd((HEAP32[i9 >> 2] | 0) + 472 | 0, +0, +0);
  return;
 }
 if (__ZN7WebCore11portAllowedERKNS_3URLE(__ZNK7WebCore19ResourceRequestBase3urlEv(i8) | 0) | 0) {
  return;
 }
 HEAP32[(HEAP32[i9 >> 2] | 0) + 464 >> 2] = 1;
 __ZN7WebCore9TimerBase5startEdd((HEAP32[i9 >> 2] | 0) + 472 | 0, +0, +0);
 return;
}
function __ZN7WebCore14ResourceHandle32registerBuiltinSynchronousLoaderERKN3WTF12AtomicStringEPFvPNS_17NetworkingContextERKNS_15ResourceRequestENS_17StoredCredentialsERNS_13ResourceErrorERNS_16ResourceResponseERNS1_6VectorIcLj0ENS1_15CrashOnOverflowEEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 if (HEAP8[H_BASE + 48 | 0] | 0) {
  i5 = HEAP32[H_BASE + 64 >> 2] | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(20) | 0;
  i6 = i2;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 64 >> 2] = i6;
  HEAP8[H_BASE + 48 | 0] = 1;
  i5 = i6;
 }
 __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PFvPN7WebCore17NetworkingContextERKNS3_15ResourceRequestENS3_17StoredCredentialsERNS3_13ResourceErrorERNS3_16ResourceResponseERNS_6VectorIcLj0ENS_15CrashOnOverflowEEEEEENS_24KeyValuePairKeyExtractorISK_EENS_16AtomicStringHashENS_7HashMapIS1_SJ_SN_NS_10HashTraitsIS1_EENSP_ISJ_EEE18KeyValuePairTraitsESQ_E3addINS_17HashMapTranslatorIST_SN_EERKS1_RSJ_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_SK_SM_SN_ST_SQ_EEEEOT0_OT1_(i3 + 8 | 0, i5 | 0, i1, i4);
 STACKTOP = i3;
 return;
}
function __ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = (i3 & 1 | 0) == 0;
 i5 = i3 >>> 1;
 if ((i5 | 0) == 0) {
  i6 = i2;
 } else {
  i3 = i1 | 0;
  i7 = i5 << 1;
  i8 = i5;
  i5 = i2;
  while (1) {
   i9 = i8 - 1 | 0;
   i10 = _u_foldCase(HEAPU16[i5 >> 1] | 0, 0) | 0;
   i11 = _u_foldCase(HEAPU16[i5 + 2 >> 1] | 0, 0) | 0;
   i12 = (HEAP32[i3 >> 2] | 0) + (i10 & 65535) | 0;
   i10 = i12 ^ i11 << 11 & 134215680 ^ i12 << 16;
   HEAP32[i3 >> 2] = (i10 >>> 11) + i10;
   if ((i9 | 0) == 0) {
    break;
   } else {
    i8 = i9;
    i5 = i5 + 4 | 0;
   }
  }
  i6 = i2 + (i7 << 1) | 0;
 }
 if (i4) {
  return;
 }
 i4 = _u_foldCase(HEAPU16[i6 >> 1] | 0, 0) | 0;
 i6 = i1 + 4 | 0;
 if ((HEAP8[i6] & 1) == 0) {
  HEAP16[i1 + 6 >> 1] = i4;
  HEAP8[i6] = 1;
  return;
 } else {
  HEAP8[i6] = 0;
  i6 = i1 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) + (HEAPU16[i1 + 6 >> 1] | 0) | 0;
  i1 = i7 ^ i4 << 11 & 134215680 ^ i7 << 16;
  HEAP32[i6 >> 2] = (i1 >>> 11) + i1;
  return;
 }
}
function __ZN7WebCore14ResourceHandle26registerBuiltinConstructorERKN3WTF12AtomicStringEPFNS1_10PassRefPtrIS0_EERKNS_15ResourceRequestEPNS_20ResourceHandleClientEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 if (HEAP8[H_BASE + 56 | 0] | 0) {
  i5 = HEAP32[H_BASE + 72 >> 2] | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(20) | 0;
  i6 = i2;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 72 >> 2] = i6;
  HEAP8[H_BASE + 56 | 0] = 1;
  i5 = i6;
 }
 __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PFNS_10PassRefPtrIN7WebCore14ResourceHandleEEERKNS4_15ResourceRequestEPNS4_20ResourceHandleClientEEEENS_24KeyValuePairKeyExtractorISE_EENS_16AtomicStringHashENS_7HashMapIS1_SD_SH_NS_10HashTraitsIS1_EENSJ_ISD_EEE18KeyValuePairTraitsESK_E3addINS_17HashMapTranslatorISN_SH_EERKS1_RSD_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_SE_SG_SH_SN_SK_EEEEOT0_OT1_(i3 + 8 | 0, i5 | 0, i1, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14ResourceHandle11fireFailureEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
  return;
 }
 i4 = i3 + 464 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 2) {
  HEAP32[i4 >> 2] = 0;
  i5 = HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 40 >> 2] & 3](i5, i1);
  return;
 } else if ((i3 | 0) == 1) {
  HEAP32[i4 >> 2] = 0;
  i4 = HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] & 3](i4, i1);
  return;
 } else {
  return;
 }
}
function __ZN7WebCore14ResourceHandle16setDefersLoadingEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 8 | 0;
 HEAP8[(HEAP32[i3 >> 2] | 0) + 220 | 0] = i2 & 1;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if (i2) {
   if (+HEAPF64[i4 + 480 >> 3] == +0) {
    break;
   }
   __ZN7WebCore9TimerBase4stopEv(i4 + 472 | 0);
  } else {
   if ((HEAP32[i4 + 464 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore9TimerBase5startEdd(i4 + 472 | 0, +0, +0);
  }
 } while (0);
 __ZN7WebCore14ResourceHandle24platformSetDefersLoadingEb(i1, i2);
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
function __ZN7WebCore5TimerINS_14ResourceHandleEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 3](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 3](i4, i1);
  return;
 }
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
function __ZN7WebCore14ResourceHandle15scheduleFailureENS0_11FailureTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 8 | 0;
 HEAP32[(HEAP32[i3 >> 2] | 0) + 464 >> 2] = i2;
 __ZN7WebCore9TimerBase5startEdd((HEAP32[i3 >> 2] | 0) + 472 | 0, +0, +0);
 return;
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
function __ZNK7WebCore14ResourceHandle26hasAuthenticationChallengeEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore27AuthenticationChallengeBase6isNullEv((HEAP32[i1 + 8 >> 2] | 0) + 224 | 0) | 0) ^ 1 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_did + 2;
}
function __ZN7WebCore14ResourceHandle19clearAuthenticationEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore27AuthenticationChallengeBase7nullifyEv((HEAP32[i1 + 8 >> 2] | 0) + 224 | 0);
 return;
}
function __ZN7WebCore14ResourceHandle9setClientEPNS_20ResourceHandleClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 4 >> 2] = i2;
 return;
}
function __ZN7WebCore14ResourceHandle21shouldContentSniffURLERKNS_3URLE(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore3URL10protocolIsEPKc(i1, H_BASE + 8 | 0) | 0) ^ 1 | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 1](i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore14ResourceHandle18shouldContentSniffEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[(HEAP32[i1 + 8 >> 2] | 0) + 221 | 0] & 1) != 0 | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore5TimerINS_14ResourceHandleEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function b6(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(6);
}
function __ZN7WebCore14ResourceHandle17didChangePriorityENS_20ResourceLoadPriorityE(i1, i2) {
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
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function __ZNK7WebCore14ResourceHandle6clientEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 4 >> 2] | 0;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function __ZNK7WebCore14ResourceHandle14lastHTTPMethodEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 8 >> 2] | 0) + 192 | 0;
}
function __ZN7WebCore14ResourceHandle12firstRequestEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 8 >> 2] | 0) + 8 | 0;
}
function __ZN7WebCore5TimerINS_14ResourceHandleEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function __ZNK7WebCore14ResourceHandle7contextEv(i1) {
 i1 = i1 | 0;
 return HEAP32[HEAP32[i1 + 8 >> 2] >> 2] | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function __ZN7WebCore14ResourceHandle20forceContentSniffingEv() {
 return;
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function b0(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(0);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_did = [b0,b0,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore5TimerINS_14ResourceHandleEED0Ev,b1,__ZN7WebCore5TimerINS_14ResourceHandleEED1Ev,b1,__ZN7WebCore5TimerINS_14ResourceHandleEE5firedEv,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore14ResourceHandle11fireFailureEPNS_5TimerIS0_EE,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_viiiiii = [b6,b6,__ZN7WebCore14ResourceHandleC2EPNS_17NetworkingContextERKNS_15ResourceRequestEPNS_20ResourceHandleClientEbb,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN7WebCore14ResourceHandleE": __ZTVN7WebCore14ResourceHandleE, "__ZN3WTF10StringImpl19latin1CaseFoldTableE": __ZN3WTF10StringImpl19latin1CaseFoldTableE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore14ResourceHandle12firstRequestEv","__ZN7WebCore14ResourceHandleC2EPNS_17NetworkingContextERKNS_15ResourceRequestEPNS_20ResourceHandleClientEbb","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PFNS_10PassRefPtrIN7WebCore14ResourceHandleEEERKNS4_15ResourceRequestEPNS4_20ResourceHandleClientEEEENS_24KeyValuePairKeyExtractorISE_EENS_16AtomicStringHashENS_7HashMapIS1_SD_SH_NS_10HashTraitsIS1_EENSJ_ISD_EEE18KeyValuePairTraitsESK_E3addINS_17HashMapTranslatorISN_SH_EERKS1_RSD_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_SE_SG_SH_SN_SK_EEEEOT0_OT1_","__ZN7WebCore14ResourceHandle6createEPNS_17NetworkingContextERKNS_15ResourceRequestEPNS_20ResourceHandleClientEbb","__ZN7WebCore19ResourceRequestBaseC2ERKS0_","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN7WebCore14ResourceHandle25loadResourceSynchronouslyEPNS_17NetworkingContextERKNS_15ResourceRequestENS_17StoredCredentialsERNS_13ResourceErrorERNS_16ResourceResponseERN3WTF6VectorIcLj0ENSB_15CrashOnOverflowEEE","__ZN7WebCore14ResourceHandle32registerBuiltinSynchronousLoaderERKN3WTF12AtomicStringEPFvPNS_17NetworkingContextERKNS_15ResourceRequestENS_17StoredCredentialsERNS_13ResourceErrorERNS_16ResourceResponseERNS1_6VectorIcLj0ENS1_15CrashOnOverflowEEEE","__ZN7WebCore14ResourceHandle16setDefersLoadingEb","__ZN7WebCore14ResourceHandle17didChangePriorityENS_20ResourceLoadPriorityE","_memset","__ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_22IdentityHashTranslatorIS7_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_","__ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j","_memcpy","__ZN7WebCore22ResourceHandleInternalC2EPNS_14ResourceHandleEPNS_17NetworkingContextERKNS_15ResourceRequestEPNS_20ResourceHandleClientEbb","__ZN7WebCore14ResourceHandle19clearAuthenticationEv","__ZN7WebCore14ResourceHandle9setClientEPNS_20ResourceHandleClientE","__ZN7WebCore14ResourceHandle26registerBuiltinConstructorERKN3WTF12AtomicStringEPFNS1_10PassRefPtrIS0_EERKNS_15ResourceRequestEPNS_20ResourceHandleClientEE","__ZN7WebCore5TimerINS_14ResourceHandleEE5firedEv","__ZN7WebCore5TimerINS_14ResourceHandleEED0Ev","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PFvPN7WebCore17NetworkingContextERKNS3_15ResourceRequestENS3_17StoredCredentialsERNS3_13ResourceErrorERNS3_16ResourceResponseERNS_6VectorIcLj0ENS_15CrashOnOverflowEEEEEENS_24KeyValuePairKeyExtractorISK_EENS_16AtomicStringHashENS_7HashMapIS1_SJ_SN_NS_10HashTraitsIS1_EENSP_ISJ_EEE18KeyValuePairTraitsESQ_E6rehashEiPSK_","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PFvPN7WebCore17NetworkingContextERKNS3_15ResourceRequestENS3_17StoredCredentialsERNS3_13ResourceErrorERNS3_16ResourceResponseERNS_6VectorIcLj0ENS_15CrashOnOverflowEEEEEENS_24KeyValuePairKeyExtractorISK_EENS_16AtomicStringHashENS_7HashMapIS1_SJ_SN_NS_10HashTraitsIS1_EENSP_ISJ_EEE18KeyValuePairTraitsESQ_E3addINS_17HashMapTranslatorIST_SN_EERKS1_RSJ_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_SK_SM_SN_ST_SQ_EEEEOT0_OT1_","__ZNK7WebCore14ResourceHandle18shouldContentSniffEv","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E8reinsertEOS4_","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PFNS_10PassRefPtrIN7WebCore14ResourceHandleEEERKNS4_15ResourceRequestEPNS4_20ResourceHandleClientEEEENS_24KeyValuePairKeyExtractorISE_EENS_16AtomicStringHashENS_7HashMapIS1_SD_SH_NS_10HashTraitsIS1_EENSJ_ISD_EEE18KeyValuePairTraitsESK_E6rehashEiPSE_","__ZN7WebCore14ResourceHandle20forceContentSniffingEv","__ZNK7WebCore14ResourceHandle14lastHTTPMethodEv","__ZN7WebCore14ResourceHandle15scheduleFailureENS0_11FailureTypeE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_","__ZN7WebCore5TimerINS_14ResourceHandleEED1Ev","__ZNK7WebCore14ResourceHandle7contextEv","__ZNK7WebCore14ResourceHandle6clientEv","__ZN7WebCore14ResourceHandle21shouldContentSniffURLERKNS_3URLE","__ZN7WebCore14ResourceHandle11fireFailureEPNS_5TimerIS0_EE","__ZNK7WebCore14ResourceHandle26hasAuthenticationChallengeEv"]

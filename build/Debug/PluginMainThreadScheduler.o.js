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
H_BASE = parentModule["_malloc"](16 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 16;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore25PluginMainThreadSchedulerC1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
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
function __ZN7WebCore25PluginMainThreadScheduler13dispatchCallsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i1 + 24 | 0;
 __ZN3WTF5Mutex4lockEv(i5);
 i6 = i4 | 0;
 i7 = i1 + 4 | 0;
 _memset(i4 | 0, 0, 20) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i1 + 8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i8 + (i10 * 24 & -1) | 0;
 i12 = i1 + 16 | 0;
 L1 : do {
  if ((HEAP32[i12 >> 2] | 0) != 0) {
   L3 : do {
    if ((i10 | 0) == 0) {
     i13 = i8;
    } else {
     i14 = i8;
     while (1) {
      i15 = HEAP32[i14 >> 2] | 0;
      if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
       i13 = i14;
       break L3;
      }
      i14 = i14 + 24 | 0;
      if ((i14 | 0) == (i11 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i13 | 0) == (i11 | 0)) {
    break;
   } else {
    i16 = i13;
   }
   while (1) {
    __ZN3WTF9HashTableIP4_NPPNS_12KeyValuePairIS2_NS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS2_EENS_7HashMapIS2_S8_SD_NS_10HashTraitsIS2_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_22IdentityHashTranslatorISD_EERKS2_RKS9_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S9_SB_SD_SJ_SG_EEEEOT0_OT1_(i3, i6, i16 | 0, i16);
    i14 = i16 + 24 | 0;
    if ((i14 | 0) == (i11 | 0)) {
     break L1;
    } else {
     i17 = i14;
    }
    while (1) {
     i14 = HEAP32[i17 >> 2] | 0;
     if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
      break;
     }
     i14 = i17 + 24 | 0;
     if ((i14 | 0) == (i11 | 0)) {
      break L1;
     } else {
      i17 = i14;
     }
    }
    if ((i17 | 0) == (i11 | 0)) {
     break;
    } else {
     i16 = i17;
    }
   }
  }
 } while (0);
 i17 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 i9 = i17 + (i7 * 24 & -1) | 0;
 L15 : do {
  if ((HEAP32[i12 >> 2] | 0) != 0) {
   L17 : do {
    if ((i7 | 0) == 0) {
     i18 = i17;
    } else {
     i16 = i17;
     while (1) {
      i11 = HEAP32[i16 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i18 = i16;
       break L17;
      }
      i16 = i16 + 24 | 0;
      if ((i16 | 0) == (i9 | 0)) {
       break L15;
      }
     }
    }
   } while (0);
   if ((i18 | 0) == (i9 | 0)) {
    break;
   } else {
    i19 = i18;
   }
   while (1) {
    HEAP32[i19 + 4 >> 2] = 0;
    HEAP32[i19 + 8 >> 2] = 0;
    i16 = i19 + 12 | 0;
    i11 = HEAP32[i16 >> 2] | 0;
    if ((i11 | 0) != 0) {
     HEAP32[i16 >> 2] = 0;
     HEAP32[i19 + 16 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i11);
    }
    i11 = i19 + 24 | 0;
    if ((i11 | 0) == (i9 | 0)) {
     break L15;
    } else {
     i20 = i11;
    }
    while (1) {
     i11 = HEAP32[i20 >> 2] | 0;
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      break;
     }
     i11 = i20 + 24 | 0;
     if ((i11 | 0) == (i9 | 0)) {
      break L15;
     } else {
      i20 = i11;
     }
    }
    if ((i20 | 0) == (i9 | 0)) {
     break;
    } else {
     i19 = i20;
    }
   }
  }
 } while (0);
 HEAP8[i1 | 0] = 0;
 __ZN3WTF5Mutex6unlockEv(i5);
 i5 = HEAP32[i4 >> 2] | 0;
 i20 = HEAP32[i4 + 4 >> 2] | 0;
 i19 = i5 + (i20 * 24 & -1) | 0;
 L32 : do {
  if ((HEAP32[i4 + 12 >> 2] | 0) != 0) {
   L34 : do {
    if ((i20 | 0) == 0) {
     i21 = i5;
    } else {
     i9 = i5;
     while (1) {
      i18 = HEAP32[i9 >> 2] | 0;
      if (!((i18 | 0) == (-1 | 0) | (i18 | 0) == 0)) {
       i21 = i9;
       break L34;
      }
      i9 = i9 + 24 | 0;
      if ((i9 | 0) == (i19 | 0)) {
       break L32;
      }
     }
    }
   } while (0);
   if ((i21 | 0) == (i19 | 0)) {
    break;
   } else {
    i22 = i21;
   }
   while (1) {
    __ZN7WebCore25PluginMainThreadScheduler22dispatchCallsForPluginEP4_NPPRKN3WTF5DequeINS0_4CallELj0EEE(i1, HEAP32[i22 >> 2] | 0, i22 + 4 | 0);
    i9 = i22 + 24 | 0;
    if ((i9 | 0) == (i19 | 0)) {
     break L32;
    } else {
     i23 = i9;
    }
    while (1) {
     i9 = HEAP32[i23 >> 2] | 0;
     if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
      break;
     }
     i9 = i23 + 24 | 0;
     if ((i9 | 0) == (i19 | 0)) {
      break L32;
     } else {
      i23 = i9;
     }
    }
    if ((i23 | 0) == (i19 | 0)) {
     break;
    } else {
     i22 = i23;
    }
   }
  }
 } while (0);
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((i20 | 0) > 0) {
  i23 = 0;
  while (1) {
   do {
    if ((HEAP32[i5 + (i23 * 24 & -1) >> 2] | 0) != -1) {
     i22 = i5 + (i23 * 24 & -1) + 12 | 0;
     i19 = HEAP32[i22 >> 2] | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     HEAP32[i22 >> 2] = 0;
     HEAP32[i5 + (i23 * 24 & -1) + 16 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i19);
    }
   } while (0);
   i23 = i23 + 1 | 0;
   if ((i23 | 0) >= (i20 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableIP4_NPPNS_12KeyValuePairIS2_NS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS2_EENS_7HashMapIS2_S8_SD_NS_10HashTraitsIS2_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKS2_S8_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S9_SB_SD_SJ_SG_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i10 = 8;
  } else {
   i11 = i9 << 1;
   i10 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i9 : i11;
  }
  __ZN3WTF9HashTableIP4_NPPNS_12KeyValuePairIS2_NS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS2_EENS_7HashMapIS2_S8_SD_NS_10HashTraitsIS2_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = i10;
 i9 = i11 + ~(i11 << 15) | 0;
 i11 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i11 >>> 6 ^ i11;
 i11 = i9 + ~(i9 << 11) | 0;
 i9 = i11 >>> 16 ^ i11;
 i11 = i9 & i8;
 i13 = i12 + (i11 * 24 & -1) | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i15 = i13;
   i16 = i10;
  } else {
   i17 = (i9 >>> 23) + ~i9 | 0;
   i18 = i17 << 12 ^ i17;
   i17 = i18 >>> 7 ^ i18;
   i18 = i17 << 2 ^ i17;
   i17 = i18 >>> 20 ^ i18 | 1;
   i18 = 0;
   i19 = 0;
   i20 = i11;
   i21 = i13;
   i22 = i14;
   while (1) {
    if ((i22 | 0) == (i10 | 0)) {
     i23 = 8;
     break;
    }
    i24 = (i22 | 0) == -1 ? i21 : i19;
    i25 = (i18 | 0) == 0 ? i17 : i18;
    i26 = i25 + i20 & i8;
    i27 = i12 + (i26 * 24 & -1) | 0;
    i28 = HEAP32[i27 >> 2] | 0;
    if ((i28 | 0) == 0) {
     i23 = 10;
     break;
    } else {
     i18 = i25;
     i19 = i24;
     i20 = i26;
     i21 = i27;
     i22 = i28;
    }
   }
   if ((i23 | 0) == 8) {
    i22 = i12 + ((HEAP32[i2 + 4 >> 2] | 0) * 24 & -1) | 0;
    i20 = i1;
    HEAP32[i20 >> 2] = i21;
    HEAP32[i20 + 4 >> 2] = i22;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i23 | 0) == 10) {
    if ((i24 | 0) == 0) {
     i15 = i27;
     i16 = i10;
     break;
    }
    __ZN3WTF9HashTableIP4_NPPNS_12KeyValuePairIS2_NS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS2_EENS_7HashMapIS2_S8_SD_NS_10HashTraitsIS2_EENSF_IS8_EEE18KeyValuePairTraitsESG_E16initializeBucketERS9_(i24);
    i22 = i2 + 16 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) - 1;
    i15 = i24;
    i16 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i15 >> 2] = i16;
 __ZN3WTF5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEC2ERKS4_(i6, i4);
 i4 = i15 + 4 | 0;
 i16 = i6 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i16 >> 2];
 HEAP32[i16 >> 2] = i3;
 i3 = i15 + 8 | 0;
 i16 = i6 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i16 >> 2];
 HEAP32[i16 >> 2] = i4;
 i4 = i15 + 12 | 0;
 i16 = i6 + 8 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i16 >> 2];
 HEAP32[i16 >> 2] = i3;
 i4 = i15 + 16 | 0;
 i24 = i6 + 12 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i24 >> 2];
 HEAP32[i24 >> 2] = i6;
 if ((i3 | 0) != 0) {
  HEAP32[i16 >> 2] = 0;
  HEAP32[i24 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i2 + 12 | 0;
 i24 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i24;
 i3 = i2 + 4 | 0;
 i16 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i24 << 1 | 0) < (i16 | 0)) {
  i29 = i15;
  i30 = i16;
 } else {
  if ((i16 | 0) == 0) {
   i31 = 8;
  } else {
   i6 = i16 << 1;
   i31 = (i24 * 6 & -1 | 0) < (i6 | 0) ? i16 : i6;
  }
  i6 = __ZN3WTF9HashTableIP4_NPPNS_12KeyValuePairIS2_NS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS2_EENS_7HashMapIS2_S8_SD_NS_10HashTraitsIS2_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i31, i15) | 0;
  i29 = i6;
  i30 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i7 >> 2] | 0) + (i30 * 24 & -1) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIP4_NPPNS_12KeyValuePairIS2_NS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS2_EENS_7HashMapIS2_S8_SD_NS_10HashTraitsIS2_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_22IdentityHashTranslatorISD_EERKS2_RKS9_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S9_SB_SD_SJ_SG_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i10 = 8;
  } else {
   i11 = i9 << 1;
   i10 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i9 : i11;
  }
  __ZN3WTF9HashTableIP4_NPPNS_12KeyValuePairIS2_NS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS2_EENS_7HashMapIS2_S8_SD_NS_10HashTraitsIS2_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i3 = i10;
 i11 = i3 + ~(i3 << 15) | 0;
 i3 = (i11 >>> 10 ^ i11) * 9 & -1;
 i11 = i3 >>> 6 ^ i3;
 i3 = i11 + ~(i11 << 11) | 0;
 i11 = i3 >>> 16 ^ i3;
 i3 = i11 & i8;
 i9 = i12 + (i3 * 24 & -1) | 0;
 i13 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i13 | 0) == 0) {
   i14 = i9;
  } else {
   i15 = (i11 >>> 23) + ~i11 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i3;
   i19 = i9;
   i20 = i13;
   while (1) {
    if ((i20 | 0) == (i10 | 0)) {
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i8;
    i25 = i12 + (i24 * 24 & -1) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i16 = i23;
     i17 = i22;
     i18 = i24;
     i19 = i25;
     i20 = i26;
    }
   }
   if ((i21 | 0) == 8) {
    i20 = i12 + ((HEAP32[i2 + 4 >> 2] | 0) * 24 & -1) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i21 | 0) == 10) {
    if ((i22 | 0) == 0) {
     i14 = i25;
     break;
    }
    __ZN3WTF9HashTableIP4_NPPNS_12KeyValuePairIS2_NS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS2_EENS_7HashMapIS2_S8_SD_NS_10HashTraitsIS2_EENSF_IS8_EEE18KeyValuePairTraitsESG_E16initializeBucketERS9_(i22);
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i14 = i22;
    break;
   }
  }
 } while (0);
 HEAP32[i14 >> 2] = HEAP32[i4 >> 2];
 __ZN3WTF5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEC2ERKS4_(i6, i4 + 4 | 0);
 i4 = i14 + 4 | 0;
 i22 = i6 | 0;
 i25 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i22 >> 2];
 HEAP32[i22 >> 2] = i25;
 i25 = i14 + 8 | 0;
 i22 = i6 + 4 | 0;
 i4 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = HEAP32[i22 >> 2];
 HEAP32[i22 >> 2] = i4;
 i4 = i14 + 12 | 0;
 i22 = i6 + 8 | 0;
 i25 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i22 >> 2];
 HEAP32[i22 >> 2] = i25;
 i4 = i14 + 16 | 0;
 i21 = i6 + 12 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i21 >> 2];
 HEAP32[i21 >> 2] = i6;
 if ((i25 | 0) != 0) {
  HEAP32[i22 >> 2] = 0;
  HEAP32[i21 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i25);
 }
 i25 = i2 + 12 | 0;
 i21 = (HEAP32[i25 >> 2] | 0) + 1 | 0;
 HEAP32[i25 >> 2] = i21;
 i25 = i2 + 4 | 0;
 i22 = HEAP32[i25 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i21 << 1 | 0) < (i22 | 0)) {
  i27 = i14;
  i28 = i22;
 } else {
  if ((i22 | 0) == 0) {
   i29 = 8;
  } else {
   i6 = i22 << 1;
   i29 = (i21 * 6 & -1 | 0) < (i6 | 0) ? i22 : i6;
  }
  i6 = __ZN3WTF9HashTableIP4_NPPNS_12KeyValuePairIS2_NS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS2_EENS_7HashMapIS2_S8_SD_NS_10HashTraitsIS2_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i29, i14) | 0;
  i27 = i6;
  i28 = HEAP32[i25 >> 2] | 0;
 }
 i25 = (HEAP32[i7 >> 2] | 0) + (i28 * 24 & -1) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i25;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore25PluginMainThreadScheduler22dispatchCallsForPluginEP4_NPPRKN3WTF5DequeINS0_4CallELj0EEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == (i4 | 0)) {
  return;
 }
 i6 = i1 + 24 | 0;
 i7 = i1 + 4 | 0;
 i8 = i3 + 8 | 0;
 i9 = i3 + 12 | 0;
 i3 = i1 + 12 | 0;
 i1 = i2;
 i10 = i1 + ~(i1 << 15) | 0;
 i1 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i1 >>> 6 ^ i1;
 i1 = i10 + ~(i10 << 11) | 0;
 i10 = i1 >>> 16 ^ i1;
 i1 = (i10 >>> 23) + ~i10 | 0;
 i11 = i1 << 12 ^ i1;
 i1 = i11 >>> 7 ^ i11;
 i11 = i1 << 2 ^ i1;
 i1 = i11 >>> 20 ^ i11 | 1;
 if ((i6 | 0) == 0) {
  i11 = i5;
  L5 : while (1) {
   i12 = HEAP32[i7 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i13 = 22;
    break;
   }
   i14 = HEAP32[i3 >> 2] | 0;
   i15 = i14 & i10;
   i16 = i12 + (i15 * 24 & -1) | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   if ((i17 | 0) == (i2 | 0)) {
    i18 = i16;
   } else {
    i16 = 0;
    i19 = i15;
    i15 = i17;
    while (1) {
     if ((i15 | 0) == 0) {
      i13 = 23;
      break L5;
     }
     i17 = (i16 | 0) == 0 ? i1 : i16;
     i20 = i17 + i19 & i14;
     i21 = i12 + (i20 * 24 & -1) | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     if ((i22 | 0) == (i2 | 0)) {
      i18 = i21;
      break;
     } else {
      i16 = i17;
      i19 = i20;
      i15 = i22;
     }
    }
   }
   if ((i18 | 0) == 0) {
    i13 = 24;
    break;
   }
   i15 = HEAP32[i8 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[i15 + (i11 << 3) >> 2] & 7](HEAP32[i15 + (i11 << 3) + 4 >> 2] | 0);
   i15 = (i11 | 0) == ((HEAP32[i9 >> 2] | 0) - 1 | 0) ? 0 : i11 + 1 | 0;
   if ((i15 | 0) == (i4 | 0)) {
    i13 = 25;
    break;
   } else {
    i11 = i15;
   }
  }
  if ((i13 | 0) == 22) {
   return;
  } else if ((i13 | 0) == 23) {
   return;
  } else if ((i13 | 0) == 24) {
   return;
  } else if ((i13 | 0) == 25) {
   return;
  }
 } else {
  i23 = i5;
 }
 L19 : while (1) {
  __ZN3WTF5Mutex4lockEv(i6);
  i5 = HEAP32[i7 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i13 = 10;
   break;
  }
  i11 = HEAP32[i3 >> 2] | 0;
  i18 = i11 & i10;
  i15 = i5 + (i18 * 24 & -1) | 0;
  i19 = HEAP32[i15 >> 2] | 0;
  if ((i19 | 0) == (i2 | 0)) {
   i24 = i15;
  } else {
   i15 = 0;
   i16 = i18;
   i18 = i19;
   while (1) {
    if ((i18 | 0) == 0) {
     i13 = 13;
     break L19;
    }
    i19 = (i15 | 0) == 0 ? i1 : i15;
    i12 = i19 + i16 & i11;
    i14 = i5 + (i12 * 24 & -1) | 0;
    i22 = HEAP32[i14 >> 2] | 0;
    if ((i22 | 0) == (i2 | 0)) {
     i24 = i14;
     break;
    } else {
     i15 = i19;
     i16 = i12;
     i18 = i22;
    }
   }
  }
  __ZN3WTF5Mutex6unlockEv(i6);
  if ((i24 | 0) == 0) {
   i13 = 19;
   break;
  }
  i18 = HEAP32[i8 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[i18 + (i23 << 3) >> 2] & 7](HEAP32[i18 + (i23 << 3) + 4 >> 2] | 0);
  i18 = (i23 | 0) == ((HEAP32[i9 >> 2] | 0) - 1 | 0) ? 0 : i23 + 1 | 0;
  if ((i18 | 0) == (i4 | 0)) {
   i13 = 20;
   break;
  } else {
   i23 = i18;
  }
 }
 if ((i13 | 0) == 13) {
  __ZN3WTF5Mutex6unlockEv(i6);
  return;
 } else if ((i13 | 0) == 10) {
  __ZN3WTF5Mutex6unlockEv(i6);
  return;
 } else if ((i13 | 0) == 19) {
  return;
 } else if ((i13 | 0) == 20) {
  return;
 }
}
function __ZN3WTF9HashTableIP4_NPPNS_12KeyValuePairIS2_NS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS2_EENS_7HashMapIS2_S8_SD_NS_10HashTraitsIS2_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 i4 = __ZN3WTF10fastMallocEj(i2 * 24 & -1) | 0;
 if ((i2 | 0) > 0) {
  i8 = 0;
  while (1) {
   __ZN3WTF9HashTableIP4_NPPNS_12KeyValuePairIS2_NS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS2_EENS_7HashMapIS2_S8_SD_NS_10HashTraitsIS2_EENSF_IS8_EEE18KeyValuePairTraitsESG_E16initializeBucketERS9_(i4 + (i8 * 24 & -1) | 0);
   i8 = i8 + 1 | 0;
   if ((i8 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i6 >> 2] = i4;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i9 = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i9 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i4 = i7 + (i11 * 24 & -1) | 0;
  i6 = HEAP32[i4 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i13 = i12;
  } else {
   i6 = __ZN3WTF9HashTableIP4_NPPNS_12KeyValuePairIS2_NS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS2_EENS_7HashMapIS2_S8_SD_NS_10HashTraitsIS2_EENSF_IS8_EEE18KeyValuePairTraitsESG_E8reinsertEOS9_(i1, i4) | 0;
   i13 = (i4 | 0) == (i3 | 0) ? i6 : i12;
  }
  i6 = i11 + 1 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   break;
  } else {
   i11 = i6;
   i12 = i13;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i14 = 0;
 } else {
  i9 = i13;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i9 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i14 * 24 & -1) >> 2] | 0) != -1) {
    i1 = i7 + (i14 * 24 & -1) + 12 | 0;
    i12 = HEAP32[i1 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    HEAP32[i1 >> 2] = 0;
    HEAP32[i7 + (i14 * 24 & -1) + 16 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i12);
   }
  } while (0);
  i12 = i14 + 1 | 0;
  if ((i12 | 0) < (i5 | 0)) {
   i14 = i12;
  } else {
   i9 = i13;
   break;
  }
 }
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i9 | 0;
}
function __ZN3WTF5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EE14expandCapacityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + 1 + (i3 >>> 2) | 0;
 i7 = i6 >>> 0 > 16 >>> 0 ? i6 : 16;
 if (i7 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i6 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 3) | 0;
 HEAP32[i2 >> 2] = i6 >>> 3;
 i7 = __ZN3WTF10fastMallocEj(i6) | 0;
 HEAP32[i4 >> 2] = i7;
 i6 = i1 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i5 + (i9 << 3) | 0;
 do {
  if (i8 >>> 0 > i9 >>> 0) {
   if ((i9 | 0) == 0) {
    i10 = i8;
   } else {
    i11 = i5;
    i12 = i7;
    while (1) {
     i13 = i11;
     i14 = i12;
     i15 = HEAP32[i13 + 4 >> 2] | 0;
     HEAP32[i14 >> 2] = HEAP32[i13 >> 2];
     HEAP32[i14 + 4 >> 2] = i15;
     i15 = i11 + 8 | 0;
     if ((i15 | 0) == (i1 | 0)) {
      break;
     } else {
      i11 = i15;
      i12 = i12 + 8 | 0;
     }
    }
    i10 = HEAP32[i6 >> 2] | 0;
   }
   i12 = i10 - i3 + (HEAP32[i2 >> 2] | 0) | 0;
   i11 = i5 + (i3 << 3) | 0;
   if ((i10 | 0) != (i3 | 0)) {
    i15 = i5 + (i10 << 3) | 0;
    i14 = (HEAP32[i4 >> 2] | 0) + (i12 << 3) | 0;
    while (1) {
     i13 = i15;
     i16 = i14;
     i17 = HEAP32[i13 + 4 >> 2] | 0;
     HEAP32[i16 >> 2] = HEAP32[i13 >> 2];
     HEAP32[i16 + 4 >> 2] = i17;
     i17 = i15 + 8 | 0;
     if ((i17 | 0) == (i11 | 0)) {
      break;
     } else {
      i15 = i17;
      i14 = i14 + 8 | 0;
     }
    }
   }
   HEAP32[i6 >> 2] = i12;
  } else {
   if ((i8 | 0) == (i9 | 0)) {
    break;
   }
   i14 = i5 + (i8 << 3) | 0;
   i15 = i7 + (i8 << 3) | 0;
   while (1) {
    i11 = i14;
    i17 = i15;
    i16 = HEAP32[i11 + 4 >> 2] | 0;
    HEAP32[i17 >> 2] = HEAP32[i11 >> 2];
    HEAP32[i17 + 4 >> 2] = i16;
    i16 = i14 + 8 | 0;
    if ((i16 | 0) == (i1 | 0)) {
     break;
    } else {
     i14 = i16;
     i15 = i15 + 8 | 0;
    }
   }
  }
 } while (0);
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
function __ZN3WTF9HashTableIP4_NPPNS_12KeyValuePairIS2_NS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS2_EENS_7HashMapIS2_S8_SD_NS_10HashTraitsIS2_EENSF_IS8_EEE18KeyValuePairTraitsESG_E8reinsertEOS9_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i6 = i1;
 i7 = i6 + ~(i6 << 15) | 0;
 i6 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i6 >>> 6 ^ i6;
 i6 = i7 + ~(i7 << 11) | 0;
 i7 = i6 >>> 16 ^ i6;
 i6 = i7 & i5;
 i8 = i4 + (i6 * 24 & -1) | 0;
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
    if ((i18 | 0) == (i1 | 0)) {
     i19 = i17;
     break L1;
    }
    i20 = (i18 | 0) == -1 ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i13 : i15;
    i22 = i21 + i16 & i5;
    i23 = i4 + (i22 * 24 & -1) | 0;
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
 i11 = i19 + 12 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i25 = i1;
  i26 = i19 | 0;
  HEAP32[i26 >> 2] = i25;
  i27 = i19 + 4 | 0;
  i28 = i2 + 4 | 0;
  __ZN3WTF5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEC2ERKS4_(i27, i28);
  return i19 | 0;
 }
 HEAP32[i11 >> 2] = 0;
 HEAP32[i19 + 16 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i10);
 i25 = HEAP32[i3 >> 2] | 0;
 i26 = i19 | 0;
 HEAP32[i26 >> 2] = i25;
 i27 = i19 + 4 | 0;
 i28 = i2 + 4 | 0;
 __ZN3WTF5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEC2ERKS4_(i27, i28);
 return i19 | 0;
}
function __ZN3WTF5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEC2ERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 i5 = i1 + 4 | 0;
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 i8 = i1 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 12 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 do {
  if ((i7 | 0) == 0) {
   i10 = i4;
   i11 = i6;
   i12 = 0;
  } else {
   if (i7 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   } else {
    i1 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 3) | 0;
    HEAP32[i9 >> 2] = i1 >>> 3;
    i13 = __ZN3WTF10fastMallocEj(i1) | 0;
    HEAP32[i8 >> 2] = i13;
    i10 = HEAP32[i3 >> 2] | 0;
    i11 = HEAP32[i5 >> 2] | 0;
    i12 = i13;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i5 + (i11 << 3) | 0;
 if (i10 >>> 0 <= i11 >>> 0) {
  if ((i10 | 0) == (i11 | 0)) {
   return;
  }
  i7 = i5 + (i10 << 3) | 0;
  i6 = i12 + (i10 << 3) | 0;
  while (1) {
   i4 = i7;
   i13 = i6;
   i1 = HEAP32[i4 + 4 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i13 + 4 >> 2] = i1;
   i1 = i7 + 8 | 0;
   if ((i1 | 0) == (i2 | 0)) {
    break;
   } else {
    i7 = i1;
    i6 = i6 + 8 | 0;
   }
  }
  return;
 }
 if ((i11 | 0) == 0) {
  i14 = i10;
 } else {
  i10 = i5;
  i11 = i12;
  while (1) {
   i12 = i10;
   i6 = i11;
   i7 = HEAP32[i12 + 4 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i6 + 4 >> 2] = i7;
   i7 = i10 + 8 | 0;
   if ((i7 | 0) == (i2 | 0)) {
    break;
   } else {
    i10 = i7;
    i11 = i11 + 8 | 0;
   }
  }
  i14 = HEAP32[i3 >> 2] | 0;
 }
 i3 = HEAP32[i9 >> 2] | 0;
 i9 = i5 + (i3 << 3) | 0;
 if ((i14 | 0) == (i3 | 0)) {
  return;
 }
 i3 = i5 + (i14 << 3) | 0;
 i5 = (HEAP32[i8 >> 2] | 0) + (i14 << 3) | 0;
 while (1) {
  i14 = i3;
  i8 = i5;
  i11 = HEAP32[i14 + 4 >> 2] | 0;
  HEAP32[i8 >> 2] = HEAP32[i14 >> 2];
  HEAP32[i8 + 4 >> 2] = i11;
  i11 = i3 + 8 | 0;
  if ((i11 | 0) == (i9 | 0)) {
   break;
  } else {
   i3 = i11;
   i5 = i5 + 8 | 0;
  }
 }
 return;
}
function __ZN7WebCore25PluginMainThreadScheduler12scheduleCallEP4_NPPPFvPvES3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 HEAP32[i6 >> 2] = i2;
 i2 = i1 + 24 | 0;
 i8 = (i2 | 0) == 0;
 if (!i8) {
  __ZN3WTF5Mutex4lockEv(i2);
 }
 i9 = i1 + 4 | 0;
 __ZN3WTF7HashMapIP4_NPPNS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEENS_7PtrHashIS2_EENS_10HashTraitsIS2_EENSA_IS7_EEE4findERKS2_(i7, i9, i6);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != ((HEAP32[i9 >> 2] | 0) + ((HEAP32[i1 + 8 >> 2] | 0) * 24 & -1) | 0)) {
   i7 = i6 + 4 | 0;
   i10 = HEAP32[i7 >> 2] | 0;
   i11 = i6 + 8 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i10 | 0) == 0) {
     i13 = HEAP32[i6 + 16 >> 2] | 0;
     if ((i12 | 0) == 0) {
      if ((i13 | 0) == 0) {
       i14 = 9;
       break;
      } else {
       i15 = 0;
       break;
      }
     } else {
      if ((i12 | 0) == (i13 - 1 | 0)) {
       i14 = 9;
       break;
      } else {
       i15 = i12;
       break;
      }
     }
    } else {
     if ((i12 + 1 | 0) == (i10 | 0)) {
      i14 = 9;
     } else {
      i15 = i12;
     }
    }
   } while (0);
   if ((i14 | 0) == 9) {
    __ZN3WTF5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EE14expandCapacityEv(i7);
    i15 = HEAP32[i11 >> 2] | 0;
   }
   i12 = (HEAP32[i6 + 12 >> 2] | 0) + (i15 << 3) | 0;
   HEAP32[i12 >> 2] = i3;
   HEAP32[i12 + 4 >> 2] = i4;
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = (i12 | 0) == ((HEAP32[i6 + 16 >> 2] | 0) - 1 | 0) ? 0 : i12 + 1 | 0;
   i12 = i1 | 0;
   if ((HEAP8[i12] & 1) != 0) {
    break;
   }
   __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 4 | 0, i12);
   HEAP8[i12] = 1;
  }
 } while (0);
 if (i8) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i2);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore25PluginMainThreadScheduler14registerPluginEP4_NPP(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 56 | 0;
 HEAP32[i5 >> 2] = i2;
 i2 = i1 + 24 | 0;
 i8 = (i2 | 0) == 0;
 if (!i8) {
  __ZN3WTF5Mutex4lockEv(i2);
 }
 _memset(i6 | 0, 0, 20) | 0;
 __ZN3WTF9HashTableIP4_NPPNS_12KeyValuePairIS2_NS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS2_EENS_7HashMapIS2_S8_SD_NS_10HashTraitsIS2_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKS2_S8_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S9_SB_SD_SJ_SG_EEEEOT0_OT1_(i7, i1 + 4 | 0, i5, i6);
 do {
  if ((HEAP8[i7 + 8 | 0] & 1) == 0) {
   i5 = HEAP32[i7 >> 2] | 0;
   __ZN3WTF5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEC2ERKS4_(i4, i6);
   i1 = i5 + 4 | 0;
   i9 = i4 | 0;
   i10 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i9 >> 2] = i10;
   i10 = i5 + 8 | 0;
   i9 = i4 + 4 | 0;
   i1 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i9 >> 2] = i1;
   i1 = i5 + 12 | 0;
   i9 = i4 + 8 | 0;
   i10 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i9 >> 2] = i10;
   i1 = i5 + 16 | 0;
   i5 = i4 + 12 | 0;
   i11 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i5 >> 2] = i11;
   if ((i10 | 0) == 0) {
    break;
   }
   HEAP32[i9 >> 2] = 0;
   HEAP32[i5 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i10);
  }
 } while (0);
 i4 = i6 + 8 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i6 + 12 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i7);
 }
 if (i8) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i2);
 STACKTOP = i3;
 return;
}
function __ZN3WTF7HashMapIP4_NPPNS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEENS_7PtrHashIS2_EENS_10HashTraitsIS2_EENSA_IS7_EEE4findERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = (HEAP32[i2 + 4 >> 2] | 0) * 24 & -1 | 0;
   i6 = i5;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = i8;
   i10 = i9 + ~(i9 << 15) | 0;
   i9 = (i10 >>> 10 ^ i10) * 9 & -1;
   i10 = i9 >>> 6 ^ i9;
   i9 = i10 + ~(i10 << 11) | 0;
   i10 = i9 >>> 16 ^ i9;
   i9 = i10 & i5;
   i11 = i4 + (i9 * 24 & -1) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   L4 : do {
    if ((i12 | 0) == (i8 | 0)) {
     i13 = i11;
    } else {
     i14 = (i10 >>> 23) + ~i10 | 0;
     i15 = i14 << 12 ^ i14;
     i14 = i15 >>> 7 ^ i15;
     i15 = i14 << 2 ^ i14;
     i14 = i15 >>> 20 ^ i15 | 1;
     i15 = 0;
     i16 = i9;
     i17 = i12;
     while (1) {
      if ((i17 | 0) == 0) {
       break;
      }
      i18 = (i15 | 0) == 0 ? i14 : i15;
      i19 = i18 + i16 & i5;
      i20 = i4 + (i19 * 24 & -1) | 0;
      i21 = HEAP32[i20 >> 2] | 0;
      if ((i21 | 0) == (i8 | 0)) {
       i13 = i20;
       break L4;
      } else {
       i15 = i18;
       i16 = i19;
       i17 = i21;
      }
     }
     i17 = i4 + ((HEAP32[i2 + 4 >> 2] | 0) * 24 & -1) | 0;
     i6 = i17;
     i7 = i17;
     break L1;
    }
   } while (0);
   i8 = i4 + ((HEAP32[i2 + 4 >> 2] | 0) * 24 & -1) | 0;
   i6 = (i13 | 0) == 0 ? i8 : i13;
   i7 = i8;
  }
 } while (0);
 i13 = i1;
 HEAP32[i13 >> 2] = i6;
 HEAP32[i13 + 4 >> 2] = i7;
 return;
}
function __ZN7WebCore25PluginMainThreadScheduler16unregisterPluginEP4_NPP(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i5 >> 2] = i2;
 i2 = i1 + 24 | 0;
 i6 = (i2 | 0) == 0;
 if (!i6) {
  __ZN3WTF5Mutex4lockEv(i2);
 }
 i7 = i1 + 4 | 0;
 __ZN3WTF7HashMapIP4_NPPNS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEENS_7PtrHashIS2_EENS_10HashTraitsIS2_EENSA_IS7_EEE4findERKS2_(i4, i7, i5);
 i5 = HEAP32[i4 >> 2] | 0;
 i4 = i7 | 0;
 i8 = i1 + 8 | 0;
 do {
  if ((i5 | 0) != ((HEAP32[i7 >> 2] | 0) + ((HEAP32[i8 >> 2] | 0) * 24 & -1) | 0)) {
   i9 = i5 + 12 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i9 >> 2] = 0;
    HEAP32[i5 + 16 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i10);
   }
   HEAP32[i5 >> 2] = -1;
   i10 = i1 + 20 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i10 = i1 + 16 | 0;
   i9 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i9;
   i10 = HEAP32[i8 >> 2] | 0;
   if (!((i9 * 6 & -1 | 0) < (i10 | 0) & (i10 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIP4_NPPNS_12KeyValuePairIS2_NS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS2_EENS_7HashMapIS2_S8_SD_NS_10HashTraitsIS2_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i4, (i10 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 if (i6) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i2);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIP4_NPPNS_12KeyValuePairIS2_NS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS2_EENS_7HashMapIS2_S8_SD_NS_10HashTraitsIS2_EENSF_IS8_EEE18KeyValuePairTraitsESG_E16initializeBucketERS9_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i3 = i2 | 0;
 i4 = i2 + 24 | 0;
 i5 = i2 + 48 | 0;
 _memset(i4 | 0, 0, 20) | 0;
 i6 = i3 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i3 + 4 | 0;
 __ZN3WTF5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEC2ERKS4_(i7, i4);
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 + 4 | 0;
 __ZN3WTF5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEC2ERKS4_(i6, i7);
 i7 = i3 + 12 | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i3 + 16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i9);
 }
 i9 = i4 + 8 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i9 >> 2] = 0;
  HEAP32[i4 + 12 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 HEAP32[i1 >> 2] = HEAP32[i8 >> 2];
 __ZN3WTF5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEC2ERKS4_(i1 + 4 | 0, i6);
 i6 = i5 + 12 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i5 + 16 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i2;
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
function __ZN7WebCore25PluginMainThreadScheduler9schedulerEv() {
 var i1 = 0, i2 = 0, i3 = 0;
 if (HEAP8[H_BASE + 8 | 0] | 0) {
  i1 = HEAP32[H_BASE + 16 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(48) | 0;
  i3 = i2;
  HEAP8[i2] = 0;
  _memset(i2 + 4 | 0, 0, 20) | 0;
  __ZN3WTF5MutexC1Ev(i2 + 24 | 0);
  HEAP32[H_BASE + 16 >> 2] = i3;
  HEAP8[H_BASE + 8 | 0] = 1;
  i1 = i3;
  return i1 | 0;
 }
 return 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore25PluginMainThreadSchedulerC2Ev(i1) {
 i1 = i1 | 0;
 HEAP8[i1 | 0] = 0;
 _memset(i1 + 4 | 0, 0, 20) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 24 | 0);
 return;
}
function __ZN7WebCore25PluginMainThreadSchedulerC1Ev(i1) {
 i1 = i1 | 0;
 HEAP8[i1 | 0] = 0;
 _memset(i1 + 4 | 0, 0, 20) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 24 | 0);
 return;
}
function __ZN7WebCore25PluginMainThreadScheduler18mainThreadCallbackEPv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore25PluginMainThreadScheduler13dispatchCallsEv(i1);
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
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore25PluginMainThreadSchedulerC2Ev,b3,__ZN7WebCore25PluginMainThreadScheduler18mainThreadCallbackEPv,b3,b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_memset","_strlen","__ZN3WTF9HashTableIP4_NPPNS_12KeyValuePairIS2_NS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS2_EENS_7HashMapIS2_S8_SD_NS_10HashTraitsIS2_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_","__ZN7WebCore25PluginMainThreadScheduler14registerPluginEP4_NPP","__ZN3WTF9HashTableIP4_NPPNS_12KeyValuePairIS2_NS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS2_EENS_7HashMapIS2_S8_SD_NS_10HashTraitsIS2_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_22IdentityHashTranslatorISD_EERKS2_RKS9_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S9_SB_SD_SJ_SG_EEEEOT0_OT1_","__ZN3WTF9HashTableIP4_NPPNS_12KeyValuePairIS2_NS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS2_EENS_7HashMapIS2_S8_SD_NS_10HashTraitsIS2_EENSF_IS8_EEE18KeyValuePairTraitsESG_E8reinsertEOS9_","__ZN7WebCore25PluginMainThreadScheduler18mainThreadCallbackEPv","__ZN3WTF9HashTableIP4_NPPNS_12KeyValuePairIS2_NS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS2_EENS_7HashMapIS2_S8_SD_NS_10HashTraitsIS2_EENSF_IS8_EEE18KeyValuePairTraitsESG_E16initializeBucketERS9_","__ZN3WTF9HashTableIP4_NPPNS_12KeyValuePairIS2_NS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS2_EENS_7HashMapIS2_S8_SD_NS_10HashTraitsIS2_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKS2_S8_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S9_SB_SD_SJ_SG_EEEEOT0_OT1_","__ZN7WebCore25PluginMainThreadScheduler12scheduleCallEP4_NPPPFvPvES3_","_memcpy","__ZN7WebCore25PluginMainThreadScheduler22dispatchCallsForPluginEP4_NPPRKN3WTF5DequeINS0_4CallELj0EEE","__ZN7WebCore25PluginMainThreadScheduler9schedulerEv","__ZN3WTF7HashMapIP4_NPPNS_5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEENS_7PtrHashIS2_EENS_10HashTraitsIS2_EENSA_IS7_EEE4findERKS2_","__ZN3WTF5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EEC2ERKS4_","__ZN7WebCore25PluginMainThreadScheduler13dispatchCallsEv","__ZN7WebCore25PluginMainThreadScheduler16unregisterPluginEP4_NPP","__ZN7WebCore25PluginMainThreadSchedulerC2Ev","__ZN3WTF5DequeIN7WebCore25PluginMainThreadScheduler4CallELj0EE14expandCapacityEv"]

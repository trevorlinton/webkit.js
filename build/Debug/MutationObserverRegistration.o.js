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
var __ZN7WebCore28MutationObserverRegistrationC1EN3WTF10PassRefPtrINS_16MutationObserverEEEPNS_4NodeEhRKNS1_7HashSetINS1_12AtomicStringENS1_16AtomicStringHashENS1_10HashTraitsIS8_EEEE;
var __ZN7WebCore28MutationObserverRegistrationD1Ev;
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
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_ii=env.invoke_ii;
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
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i8, 0) | 0;
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
   if ((i19 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i18 = i2 + 16 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) - 1;
    i12 = i20;
    break;
   } else if ((i19 | 0) == 8) {
    i18 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i16 = i1;
    HEAP32[i16 >> 2] = i17;
    HEAP32[i16 + 4 >> 2] = i18;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 i10 = i4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i12 | 0;
 i19 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i4;
 do {
  if ((i19 | 0) != 0) {
   i4 = i19 + 8 | 0;
   i10 = i4 | 0;
   i20 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i19 = i2 + 12 | 0;
 i4 = (HEAP32[i19 >> 2] | 0) + 1 | 0;
 HEAP32[i19 >> 2] = i4;
 i19 = i2 + 4 | 0;
 i20 = HEAP32[i19 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i20 | 0)) {
  i25 = i12;
  i26 = i20;
 } else {
  if ((i20 | 0) == 0) {
   i27 = 8;
  } else {
   i10 = i20 << 1;
   i27 = (i4 * 6 & -1 | 0) < (i10 | 0) ? i20 : i10;
  }
  i10 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i27, i12) | 0;
  i25 = i10;
  i26 = HEAP32[i19 >> 2] | 0;
 }
 i19 = (HEAP32[i5 >> 2] | 0) + (i26 << 2) | 0;
 i26 = i1;
 HEAP32[i26 >> 2] = i25;
 HEAP32[i26 + 4 >> 2] = i19;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore28MutationObserverRegistration27clearTransientRegistrationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = i3 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i5 + (i7 << 2) | 0;
 if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
  HEAP32[i2 >> 2] = 0;
  i9 = i6;
  i10 = i4;
  i11 = i3;
  i12 = 13;
 } else {
  L7 : do {
   if ((i7 | 0) == 0) {
    i13 = i5;
    i12 = 7;
   } else {
    i14 = i5;
    while (1) {
     i15 = HEAP32[i14 >> 2] | 0;
     if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
      i13 = i14;
      i12 = 7;
      break L7;
     }
     i15 = i14 + 4 | 0;
     if ((i15 | 0) == (i8 | 0)) {
      i16 = i3;
      i17 = i4;
      i18 = i6;
      break;
     } else {
      i14 = i15;
     }
    }
   }
  } while (0);
  do {
   if ((i12 | 0) == 7) {
    if ((i13 | 0) == (i8 | 0)) {
     i16 = i3;
     i17 = i4;
     i18 = i6;
     break;
    } else {
     i19 = i13;
    }
    while (1) {
     __ZN7WebCore4Node35unregisterTransientMutationObserverEPNS_28MutationObserverRegistrationE(HEAP32[i19 >> 2] | 0, i1);
     i5 = i19 + 4 | 0;
     L15 : do {
      if ((i5 | 0) == (i8 | 0)) {
       i20 = i8;
      } else {
       i7 = i5;
       while (1) {
        i14 = HEAP32[i7 >> 2] | 0;
        if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
         i20 = i7;
         break L15;
        }
        i14 = i7 + 4 | 0;
        if ((i14 | 0) == (i8 | 0)) {
         i20 = i8;
         break;
        } else {
         i7 = i14;
        }
       }
      }
     } while (0);
     i5 = HEAP32[i2 >> 2] | 0;
     i7 = i5 | 0;
     i14 = i5 + 4 | 0;
     if ((i20 | 0) == ((HEAP32[i7 >> 2] | 0) + (HEAP32[i14 >> 2] << 2) | 0)) {
      i16 = i5;
      i17 = i7;
      i18 = i14;
      break;
     } else {
      i19 = i20;
     }
    }
   }
  } while (0);
  HEAP32[i2 >> 2] = 0;
  if ((i16 | 0) != 0) {
   i9 = i18;
   i10 = i17;
   i11 = i16;
   i12 = 13;
  }
 }
 if ((i12 | 0) == 13) {
  i12 = HEAP32[i10 >> 2] | 0;
  if ((i12 | 0) != 0) {
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) > 0) {
    i9 = 0;
    while (1) {
     i16 = HEAP32[i12 + (i9 << 2) >> 2] | 0;
     i17 = i16;
     do {
      if (!((i17 | 0) == (-1 | 0) | (i17 | 0) == 0)) {
       i18 = i16 + 8 | 0;
       i2 = i18 | 0;
       i20 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
       HEAP32[i2 >> 2] = i20;
       if ((i20 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
      }
     } while (0);
     i9 = i9 + 1 | 0;
     if ((i9 | 0) >= (i10 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i12);
  }
  __ZN3WTF8fastFreeEPv(i11);
 }
 i11 = i1 + 8 | 0;
 i1 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i11 = i1 + 8 | 0;
 i1 = i11 | 0;
 i12 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i12;
 if ((i12 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i1, i2, i3) {
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
    i22 = i14 + (i21 << 2) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 6;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if ((i23 | 0) == (i13 | 0)) {
      i27 = i22;
      i28 = i13;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i18 | 0) == 0 ? i19 : i18;
    i17 = i23 + i21 | 0;
    i18 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 6) {
    i25 = 0;
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
  i1 = HEAP32[i7 + (i29 << 2) >> 2] | 0;
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
function __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i8 + 16 >> 2] | 0;
 i9 = i3 >>> 7;
 i7 = (i3 >>> 30) + ~i9 | 0;
 i3 = i7 << 12 ^ i7;
 i7 = i3 >>> 7 ^ i3;
 i3 = i7 << 2 ^ i7;
 i7 = i3 >>> 20 ^ i3 | 1;
 i3 = 0;
 i11 = i9;
 i9 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i10 + (i12 << 2) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if ((i14 | 0) == (i8 | 0)) {
    i17 = 8;
    break;
   } else {
    i16 = i3;
   }
  }
  i14 = (i9 | 0) == 0 ? i7 : i9;
  i3 = i16;
  i11 = i14 + i12 | 0;
  i9 = i14;
 }
 if ((i17 | 0) == 8) {
  i17 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i3 | 0) == 0) {
  i18 = i13;
 } else {
  HEAP32[i3 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i3;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i13 | 0) != 0) {
   i3 = i13 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i4 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i4;
 i13 = i2 + 4 | 0;
 i3 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i3 | 0)) {
  i19 = i18;
  i20 = i3;
 } else {
  if ((i3 | 0) == 0) {
   i21 = 8;
  } else {
   i17 = i3 << 1;
   i21 = (i4 * 6 & -1 | 0) < (i17 | 0) ? i3 : i17;
  }
  i17 = __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i21, i18) | 0;
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
function __ZN7WebCore28MutationObserverRegistration29observedSubtreeNodeWillDetachEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP8[i1 + 16 | 0] & 8) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node33registerTransientMutationObserverEPNS_28MutationObserverRegistrationE(i2, i1);
 __ZN7WebCore16MutationObserver27setHasTransientRegistrationEv(HEAP32[i1 >> 2] | 0);
 i6 = i1 + 12 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) == 0) {
   i7 = __ZN3WTF10fastMallocEj(20) | 0;
   _memset(i7 | 0, 0, 20) | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i7;
   if ((i8 | 0) != 0) {
    i7 = HEAP32[i8 >> 2] | 0;
    if ((i7 | 0) != 0) {
     i9 = HEAP32[i8 + 4 >> 2] | 0;
     if ((i9 | 0) > 0) {
      i10 = 0;
      while (1) {
       i11 = HEAP32[i7 + (i10 << 2) >> 2] | 0;
       i12 = i11;
       do {
        if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
         i13 = i11 + 8 | 0;
         i14 = i13 | 0;
         i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
         HEAP32[i14 >> 2] = i15;
         if ((i15 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
        }
       } while (0);
       i10 = i10 + 1 | 0;
       if ((i10 | 0) >= (i9 | 0)) {
        break;
       }
      }
     }
     __ZN3WTF8fastFreeEPv(i7);
    }
    __ZN3WTF8fastFreeEPv(i8);
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i9 | 0) != 0) {
    i10 = i9 + 8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   }
   i10 = i1 + 8 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i9;
   if ((i11 | 0) == 0) {
    break;
   }
   i9 = i11 + 8 | 0;
   i11 = i9 | 0;
   i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i6 >> 2] | 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i9 = i2 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i5, i1 | 0, i4, i4);
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
function __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_EaSERKS6_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 _memset(i5 | 0, 0, 20) | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 i8 = i6 + (i7 << 2) | 0;
 L1 : do {
  if ((HEAP32[i2 + 12 >> 2] | 0) != 0) {
   L3 : do {
    if ((i7 | 0) == 0) {
     i9 = i6;
    } else {
     i10 = i6;
     while (1) {
      i11 = HEAP32[i10 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i9 = i10;
       break L3;
      }
      i10 = i10 + 4 | 0;
      if ((i10 | 0) == (i8 | 0)) {
       break L1;
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
    __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i4, i5, i12, i12);
    i10 = i12 + 4 | 0;
    if ((i10 | 0) == (i8 | 0)) {
     break L1;
    } else {
     i13 = i10;
    }
    while (1) {
     i10 = HEAP32[i13 >> 2] | 0;
     if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
      break;
     }
     i10 = i13 + 4 | 0;
     if ((i10 | 0) == (i8 | 0)) {
      break L1;
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
 i13 = i1 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 i8 = i5 | 0;
 HEAP32[i13 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i12;
 i8 = i1 + 4 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 i4 = i5 + 4 | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i13;
 i4 = i1 + 8 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 i9 = i5 + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i9 >> 2] = i8;
 i8 = i1 + 12 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i4 = i5 + 12 | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i9;
 i9 = i1 + 16 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i8 = i5 + 16 | 0;
 HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i4;
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return i1 | 0;
 }
 if ((i13 | 0) > 0) {
  i4 = 0;
  while (1) {
   i8 = HEAP32[i12 + (i4 << 2) >> 2] | 0;
   i9 = i8;
   do {
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i5 = i8 | 0;
     i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i5 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i4 = i4 + 1 | 0;
   if ((i4 | 0) >= (i13 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i12);
 STACKTOP = i3;
 return i1 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
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
 i10 = i7 + (i3 << 2) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = 9;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 6;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i7 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 8;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 6) {
    i19 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 8) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 9;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   }
  }
 } while (0);
 if ((i13 | 0) == 9) {
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
  i13 = __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, i25) | 0;
  i27 = i13;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
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
 i10 = i7 + (i3 << 2) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = 9;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 6;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i7 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 8;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 8) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 9;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 6) {
    i19 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 9) {
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
  i13 = __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, i25) | 0;
  i27 = i13;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i1, i2) {
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
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 2) | 0;
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
  i5 = i7 + (i11 << 2) | 0;
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
   i19 = i16 + (i14 << 2) | 0;
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
      i34 = i16 + (i33 << 2) | 0;
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
   HEAP32[i30 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i6 | 0)) {
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
function __ZN7WebCore28MutationObserverRegistrationD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 __ZN7WebCore28MutationObserverRegistration27clearTransientRegistrationsEv(i1);
 i2 = i1 | 0;
 __ZN7WebCore16MutationObserver16observationEndedEPNS_28MutationObserverRegistrationE(HEAP32[i2 >> 2] | 0, i1);
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 24 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i6 = HEAP32[i3 + (i5 << 2) >> 2] | 0;
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
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i3 >> 2] | 0;
  if ((i4 | 0) != 0) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i5 | 0) > 0) {
    i6 = 0;
    while (1) {
     i7 = HEAP32[i4 + (i6 << 2) >> 2] | 0;
     i9 = i7;
     do {
      if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
       i8 = i7 + 8 | 0;
       i10 = i8 | 0;
       i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
       HEAP32[i10 >> 2] = i11;
       if ((i11 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
      }
     } while (0);
     i6 = i6 + 1 | 0;
     if ((i6 | 0) >= (i5 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i1 = i3 + 8 | 0;
   i4 = i1 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i2 = i3 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore16MutationObserverD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
  return;
 } else {
  HEAP32[i2 >> 2] = i1;
  return;
 }
}
function __ZN7WebCore28MutationObserverRegistrationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 __ZN7WebCore28MutationObserverRegistration27clearTransientRegistrationsEv(i1);
 i2 = i1 | 0;
 __ZN7WebCore16MutationObserver16observationEndedEPNS_28MutationObserverRegistrationE(HEAP32[i2 >> 2] | 0, i1);
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 24 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i6 = HEAP32[i3 + (i5 << 2) >> 2] | 0;
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
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i3 >> 2] | 0;
  if ((i4 | 0) != 0) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i5 | 0) > 0) {
    i6 = 0;
    while (1) {
     i7 = HEAP32[i4 + (i6 << 2) >> 2] | 0;
     i9 = i7;
     do {
      if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
       i8 = i7 + 8 | 0;
       i10 = i8 | 0;
       i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
       HEAP32[i10 >> 2] = i11;
       if ((i11 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
      }
     } while (0);
     i6 = i6 + 1 | 0;
     if ((i6 | 0) >= (i5 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i1 = i3 + 8 | 0;
   i4 = i1 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i2 = i3 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore16MutationObserverD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
  return;
 } else {
  HEAP32[i2 >> 2] = i1;
  return;
 }
}
function __ZNK7WebCore28MutationObserverRegistration25addRegistrationNodesToSetERN3WTF7HashSetIPNS_4NodeENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 + 16 | 0;
 i5 = i3 + 24 | 0;
 i6 = i1 + 4 | 0;
 i7 = i2 | 0;
 __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 | 0, i7, i6, i6);
 i6 = i1 + 12 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i1 >> 2] | 0;
 i8 = HEAP32[i1 + 4 >> 2] | 0;
 i9 = i2 + (i8 << 2) | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 L7 : do {
  if ((i8 | 0) == 0) {
   i10 = i2;
  } else {
   i1 = i2;
   while (1) {
    i11 = HEAP32[i1 >> 2] | 0;
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     i10 = i1;
     break L7;
    }
    i1 = i1 + 4 | 0;
    if ((i1 | 0) == (i9 | 0)) {
     break;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i10 | 0) == (i9 | 0)) {
  STACKTOP = i3;
  return;
 } else {
  i12 = i10;
 }
 while (1) {
  HEAP32[i4 >> 2] = HEAP32[i12 >> 2];
  __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i5, i7, i4, i4);
  i10 = i12 + 4 | 0;
  L17 : do {
   if ((i10 | 0) == (i9 | 0)) {
    i13 = i9;
   } else {
    i2 = i10;
    while (1) {
     i8 = HEAP32[i2 >> 2] | 0;
     if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
      i13 = i2;
      break L17;
     }
     i8 = i2 + 4 | 0;
     if ((i8 | 0) == (i9 | 0)) {
      i13 = i9;
      break;
     } else {
      i2 = i8;
     }
    }
   }
  } while (0);
  i10 = HEAP32[i6 >> 2] | 0;
  if ((i13 | 0) == ((HEAP32[i10 >> 2] | 0) + (HEAP32[i10 + 4 >> 2] << 2) | 0)) {
   break;
  } else {
   i12 = i13;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN7WebCore28MutationObserverRegistration6createEN3WTF10PassRefPtrINS_16MutationObserverEEEPNS_4NodeEhRKNS1_7HashSetINS1_12AtomicStringENS1_16AtomicStringHashENS1_10HashTraitsIS8_EEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = __Znwj(40) | 0;
 i9 = i8;
 i10 = i2 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i8;
 HEAP32[i10 >> 2] = i2;
 HEAP32[i8 + 4 >> 2] = i3;
 HEAP32[i8 + 8 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = 0;
 HEAP8[i8 + 16 | 0] = i4;
 i4 = i8 + 20 | 0;
 i8 = i4;
 _memset(i4 | 0, 0, 20) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 i2 = i4 + (i3 << 2) | 0;
 L1 : do {
  if ((HEAP32[i5 + 12 >> 2] | 0) != 0) {
   L3 : do {
    if ((i3 | 0) == 0) {
     i11 = i4;
    } else {
     i12 = i4;
     while (1) {
      i13 = HEAP32[i12 >> 2] | 0;
      if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
       i11 = i12;
       break L3;
      }
      i12 = i12 + 4 | 0;
      if ((i12 | 0) == (i2 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i11 | 0) == (i2 | 0)) {
    break;
   } else {
    i14 = i11;
   }
   while (1) {
    __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i7, i8, i14, i14);
    i12 = i14 + 4 | 0;
    if ((i12 | 0) == (i2 | 0)) {
     break L1;
    } else {
     i15 = i12;
    }
    while (1) {
     i12 = HEAP32[i15 >> 2] | 0;
     if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
      break;
     }
     i12 = i15 + 4 | 0;
     if ((i12 | 0) == (i2 | 0)) {
      break L1;
     } else {
      i15 = i12;
     }
    }
    if ((i15 | 0) == (i2 | 0)) {
     break;
    } else {
     i14 = i15;
    }
   }
  }
 } while (0);
 __ZN7WebCore16MutationObserver18observationStartedEPNS_28MutationObserverRegistrationE(HEAP32[i10 >> 2] | 0, i9);
 HEAP32[i1 >> 2] = i9;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore28MutationObserverRegistrationC2EN3WTF10PassRefPtrINS_16MutationObserverEEEPNS_4NodeEhRKNS1_7HashSetINS1_12AtomicStringENS1_16AtomicStringHashENS1_10HashTraitsIS8_EEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i1 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP8[i1 + 16 | 0] = i4;
 i4 = i1 + 20 | 0;
 i3 = i4 | 0;
 _memset(i4 | 0, 0, 20) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 i2 = HEAP32[i5 + 4 >> 2] | 0;
 i9 = i4 + (i2 << 2) | 0;
 L1 : do {
  if ((HEAP32[i5 + 12 >> 2] | 0) != 0) {
   L3 : do {
    if ((i2 | 0) == 0) {
     i10 = i4;
    } else {
     i11 = i4;
     while (1) {
      i12 = HEAP32[i11 >> 2] | 0;
      if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
       i10 = i11;
       break L3;
      }
      i11 = i11 + 4 | 0;
      if ((i11 | 0) == (i9 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i10 | 0) == (i9 | 0)) {
    break;
   } else {
    i13 = i10;
   }
   while (1) {
    __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i7, i3, i13, i13);
    i11 = i13 + 4 | 0;
    if ((i11 | 0) == (i9 | 0)) {
     break L1;
    } else {
     i14 = i11;
    }
    while (1) {
     i11 = HEAP32[i14 >> 2] | 0;
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      break;
     }
     i11 = i14 + 4 | 0;
     if ((i11 | 0) == (i9 | 0)) {
      break L1;
     } else {
      i14 = i11;
     }
    }
    if ((i14 | 0) == (i9 | 0)) {
     break;
    } else {
     i13 = i14;
    }
   }
  }
 } while (0);
 __ZN7WebCore16MutationObserver18observationStartedEPNS_28MutationObserverRegistrationE(HEAP32[i8 >> 2] | 0, i1);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore28MutationObserverRegistrationC1EN3WTF10PassRefPtrINS_16MutationObserverEEEPNS_4NodeEhRKNS1_7HashSetINS1_12AtomicStringENS1_16AtomicStringHashENS1_10HashTraitsIS8_EEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i1 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP8[i1 + 16 | 0] = i4;
 i4 = i1 + 20 | 0;
 i3 = i4 | 0;
 _memset(i4 | 0, 0, 20) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 i2 = HEAP32[i5 + 4 >> 2] | 0;
 i9 = i4 + (i2 << 2) | 0;
 L1 : do {
  if ((HEAP32[i5 + 12 >> 2] | 0) != 0) {
   L3 : do {
    if ((i2 | 0) == 0) {
     i10 = i4;
    } else {
     i11 = i4;
     while (1) {
      i12 = HEAP32[i11 >> 2] | 0;
      if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
       i10 = i11;
       break L3;
      }
      i11 = i11 + 4 | 0;
      if ((i11 | 0) == (i9 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i10 | 0) == (i9 | 0)) {
    break;
   } else {
    i13 = i10;
   }
   while (1) {
    __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i7, i3, i13, i13);
    i11 = i13 + 4 | 0;
    if ((i11 | 0) == (i9 | 0)) {
     break L1;
    } else {
     i14 = i11;
    }
    while (1) {
     i11 = HEAP32[i14 >> 2] | 0;
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      break;
     }
     i11 = i14 + 4 | 0;
     if ((i11 | 0) == (i9 | 0)) {
      break L1;
     } else {
      i14 = i11;
     }
    }
    if ((i14 | 0) == (i9 | 0)) {
     break;
    } else {
     i13 = i14;
    }
   }
  }
 } while (0);
 __ZN7WebCore16MutationObserver18observationStartedEPNS_28MutationObserverRegistrationE(HEAP32[i8 >> 2] | 0, i1);
 STACKTOP = i6;
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) {
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
   i11 = i9 + 8 | 0;
   i3 = i11 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i9 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i10 >> 2] = i9;
 return i18 | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i1, i2, i3) {
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
   i6 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) | 0;
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
    i10 = i1 + 8 | 0;
    i3 = i10 | 0;
    i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
    HEAP32[i3 >> 2] = i6;
    if ((i6 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
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
function __ZNK7WebCore28MutationObserverRegistration25shouldReceiveMutationFromEPNS_4NodeENS_16MutationObserver12MutationTypeEPKNS_13QualifiedNameE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = HEAP8[i1 + 16 | 0] | 0;
 if ((i5 & 255 & i3 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 do {
  if ((HEAP32[i1 + 4 >> 2] | 0) != (i2 | 0)) {
   if ((i5 & 8) == 0) {
    i6 = 0;
   } else {
    break;
   }
   return i6 | 0;
  }
 } while (0);
 if ((i3 | 0) != 2) {
  i6 = 1;
  return i6 | 0;
 }
 if ((i5 & 16) == 0) {
  i6 = 1;
  return i6 | 0;
 }
 i5 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i5 + 16 >> 2] | 0) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 i1 = HEAP32[i5 + 12 >> 2] | 0;
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 i2 = i5 >>> 7;
 i7 = (i5 >>> 30) + ~i2 | 0;
 i5 = i7 << 12 ^ i7;
 i7 = i5 >>> 7 ^ i5;
 i5 = i7 << 2 ^ i7;
 i7 = i5 >>> 20 ^ i5 | 1;
 i5 = i2;
 i2 = 0;
 while (1) {
  i8 = i5 & i3;
  i9 = i4 + (i8 << 2) | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  i11 = i10;
  if ((i11 | 0) == 0) {
   i12 = 0;
   break;
  } else if ((i11 | 0) != (-1 | 0)) {
   if ((i10 | 0) == (i1 | 0)) {
    i12 = i9;
    break;
   }
  }
  i9 = (i2 | 0) == 0 ? i7 : i2;
  i5 = i9 + i8 | 0;
  i2 = i9;
 }
 i6 = (i12 | 0) != 0;
 return i6 | 0;
}
function __ZN7WebCore28MutationObserverRegistration19unregisterAndDeleteEPS0_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore4Node26unregisterMutationObserverEPNS_28MutationObserverRegistrationE(0, i1);
  return;
 }
 i3 = i2 + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 __ZN7WebCore4Node26unregisterMutationObserverEPNS_28MutationObserverRegistrationE(i2, i1);
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
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
function __ZN7WebCore28MutationObserverRegistration16resetObservationEhRKN3WTF7HashSetINS1_12AtomicStringENS1_16AtomicStringHashENS1_10HashTraitsIS3_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore28MutationObserverRegistration27clearTransientRegistrationsEv(i1);
 HEAP8[i1 + 16 | 0] = i2;
 __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_EaSERKS6_(i1 + 20 | 0, i3 | 0) | 0;
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
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
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b3() {
 abort(3);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore28MutationObserverRegistrationC2EN3WTF10PassRefPtrINS_16MutationObserverEEEPNS_4NodeEhRKNS1_7HashSetINS1_12AtomicStringENS1_16AtomicStringHashENS1_10HashTraitsIS8_EEEE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore28MutationObserverRegistrationD2Ev,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore28MutationObserverRegistration6createEN3WTF10PassRefPtrINS_16MutationObserverEEEPNS_4NodeEhRKNS1_7HashSetINS1_12AtomicStringENS1_16AtomicStringHashENS1_10HashTraitsIS8_EEEE","__ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_","__ZN7WebCore28MutationObserverRegistration19unregisterAndDeleteEPS0_","__ZNK7WebCore28MutationObserverRegistration25shouldReceiveMutationFromEPNS_4NodeENS_16MutationObserver12MutationTypeEPKNS_13QualifiedNameE","__ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_","__ZN7WebCore28MutationObserverRegistrationD2Ev","__ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_EaSERKS6_","__ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore28MutationObserverRegistration27clearTransientRegistrationsEv","_memset","__ZN7WebCore28MutationObserverRegistration16resetObservationEhRKN3WTF7HashSetINS1_12AtomicStringENS1_16AtomicStringHashENS1_10HashTraitsIS3_EEEE","_memcpy","_strlen","__ZN7WebCore28MutationObserverRegistrationC2EN3WTF10PassRefPtrINS_16MutationObserverEEEPNS_4NodeEhRKNS1_7HashSetINS1_12AtomicStringENS1_16AtomicStringHashENS1_10HashTraitsIS8_EEEE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_","__ZN7WebCore28MutationObserverRegistration29observedSubtreeNodeWillDetachEPNS_4NodeE","__ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","__ZNK7WebCore28MutationObserverRegistration25addRegistrationNodesToSetERN3WTF7HashSetIPNS_4NodeENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EEEE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_"]

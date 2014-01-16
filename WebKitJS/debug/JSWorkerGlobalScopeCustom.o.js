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
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore19JSWorkerGlobalScope13importScriptsEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 1) {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i10 = i5 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i5 + 4 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i5 + 8 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i6 | 0;
 i14 = i3 + 16 | 0;
 i15 = 0;
 i16 = i9;
 L5 : while (1) {
  if (i15 >>> 0 >= (i16 - 1 | 0) >>> 0) {
   i17 = 39;
   break;
  }
  i9 = i3 + (i15 + 6 << 3) | 0;
  i18 = HEAP32[i9 >> 2] | 0;
  i19 = HEAP32[i9 + 4 >> 2] | 0;
  HEAP32[i13 >> 2] = i18;
  HEAP32[i13 + 4 >> 2] = i19;
  i9 = i18;
  do {
   if ((i18 & 0 | 0) == 0 & (i19 & -1 | 0) == (-5 | 0)) {
    if ((HEAP8[(HEAP32[i9 >> 2] | 0) + 52 | 0] | 0) != 5) {
     i17 = 8;
     break;
    }
    i20 = i9;
   } else {
    i17 = 8;
   }
  } while (0);
  if ((i17 | 0) == 8) {
   i17 = 0;
   i20 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i6, i3) | 0;
  }
  if ((HEAP32[i20 + 12 >> 2] | 0) == 0) {
   __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i20, i3);
  }
  i9 = i20 + 12 | 0;
  i19 = HEAP32[i12 >> 2] | 0;
  if ((i19 | 0) == (HEAP32[i11 >> 2] | 0)) {
   i18 = i19 + 1 | 0;
   i21 = HEAP32[i10 >> 2] | 0;
   do {
    if (i21 >>> 0 > i9 >>> 0) {
     i17 = 17;
    } else {
     if ((i21 + (i19 << 2) | 0) >>> 0 <= i9 >>> 0) {
      i17 = 17;
      break;
     }
     i22 = i9 - i21 >> 2;
     i23 = i18 + (i19 >>> 2) | 0;
     i24 = i23 >>> 0 > 16 >>> 0 ? i23 : 16;
     i23 = i24 >>> 0 > i18 >>> 0 ? i24 : i18;
     do {
      if (i19 >>> 0 < i23 >>> 0) {
       if (i23 >>> 0 > 1073741823 >>> 0) {
        i17 = 27;
        break L5;
       }
       i24 = __ZN3WTF18fastMallocGoodSizeEj(i23 << 2) | 0;
       HEAP32[i11 >> 2] = i24 >>> 2;
       i25 = __ZN3WTF10fastMallocEj(i24) | 0;
       HEAP32[i10 >> 2] = i25;
       i24 = i21;
       _memcpy(i25 | 0, i24 | 0, i19 << 2) | 0;
       if ((i21 | 0) == 0) {
        break;
       }
       if ((HEAP32[i10 >> 2] | 0) == (i21 | 0)) {
        HEAP32[i10 >> 2] = 0;
        HEAP32[i11 >> 2] = 0;
       }
       __ZN3WTF8fastFreeEPv(i24);
      }
     } while (0);
     i23 = HEAP32[i10 >> 2] | 0;
     i26 = i23 + (i22 << 2) | 0;
     i27 = i23;
    }
   } while (0);
   if ((i17 | 0) == 17) {
    i17 = 0;
    i23 = i18 + (i19 >>> 2) | 0;
    i24 = i23 >>> 0 > 16 >>> 0 ? i23 : 16;
    i23 = i24 >>> 0 > i18 >>> 0 ? i24 : i18;
    do {
     if (i19 >>> 0 < i23 >>> 0) {
      if (i23 >>> 0 > 1073741823 >>> 0) {
       i17 = 19;
       break L5;
      }
      i24 = __ZN3WTF18fastMallocGoodSizeEj(i23 << 2) | 0;
      HEAP32[i11 >> 2] = i24 >>> 2;
      i25 = __ZN3WTF10fastMallocEj(i24) | 0;
      HEAP32[i10 >> 2] = i25;
      i24 = i21;
      _memcpy(i25 | 0, i24 | 0, i19 << 2) | 0;
      if ((i21 | 0) == 0) {
       break;
      }
      if ((HEAP32[i10 >> 2] | 0) == (i21 | 0)) {
       HEAP32[i10 >> 2] = 0;
       HEAP32[i11 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i24);
     }
    } while (0);
    i26 = i9;
    i27 = HEAP32[i10 >> 2] | 0;
   }
   i21 = HEAP32[i26 >> 2] | 0;
   HEAP32[i27 + (HEAP32[i12 >> 2] << 2) >> 2] = i21;
   if ((i21 | 0) != 0) {
    i23 = i21 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
   }
   i28 = HEAP32[i12 >> 2] | 0;
  } else {
   i23 = HEAP32[i9 >> 2] | 0;
   HEAP32[(HEAP32[i10 >> 2] | 0) + (i19 << 2) >> 2] = i23;
   if ((i23 | 0) != 0) {
    i21 = i23 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
   }
   i28 = HEAP32[i12 >> 2] | 0;
  }
  i29 = i28 + 1 | 0;
  HEAP32[i12 >> 2] = i29;
  i21 = (HEAP32[(HEAP32[i14 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
  if (!((HEAP32[i21 >> 2] & 0 | 0) == 0 & (HEAP32[i21 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
   i17 = 38;
   break;
  }
  i15 = i15 + 1 | 0;
  i16 = HEAP32[i8 >> 2] | 0;
 }
 if ((i17 | 0) == 19) {
  _WTFCrash();
 } else if ((i17 | 0) == 27) {
  _WTFCrash();
 } else if ((i17 | 0) == 38) {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  i30 = i29;
 } else if ((i17 | 0) == 39) {
  HEAP32[i7 >> 2] = 0;
  i17 = HEAP32[i2 + 660 >> 2] | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i17 >> 2] | 0) + 108 >> 2] & 1](i17, i5, i7);
  __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, HEAP32[i7 >> 2] | 0);
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  i30 = HEAP32[i12 >> 2] | 0;
 }
 if ((i30 | 0) != 0) {
  i1 = HEAP32[i10 >> 2] | 0;
  i7 = i1 + (i30 << 2) | 0;
  i30 = i1;
  while (1) {
   i1 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i3 = i1 | 0;
     i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i3 >> 2] = i5;
      break;
     }
    }
   } while (0);
   i30 = i30 + 4 | 0;
   if ((i30 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i12 >> 2] = 0;
 }
 i12 = HEAP32[i10 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i10 >> 2] = 0;
 HEAP32[i11 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i12);
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS1_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S4_S6_S6_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E6expandEPS1_(i2, 0) | 0;
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
  i13 = __ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E6expandEPS1_(i2, i25) | 0;
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
function __ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E6expandEPS1_(i1, i2) {
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
function __ZN7WebCore15ScheduledActionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
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
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   if ((i7 | 0) != 0) {
    i8 = HEAP32[(i7 & -4096) + 12 >> 2] | 0;
    i9 = i7;
    i10 = i8 + 84 | 0;
    i11 = i9 + 12 | 0;
    if ((i9 | 0) == (HEAP32[i10 >> 2] | 0)) {
     HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
    }
    i10 = i7 + 8 | 0;
    i7 = HEAP32[i10 >> 2] | 0;
    i12 = HEAP32[i11 >> 2] | 0;
    HEAP32[i7 + 12 >> 2] = i12;
    HEAP32[i12 + 8 >> 2] = i7;
    HEAP32[i10 >> 2] = 0;
    HEAP32[i11 >> 2] = 0;
    i10 = i8 + 80 | 0;
    HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i10 >> 2] = i9;
    HEAP32[i5 >> 2] = 0;
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
  HEAP32[i1 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i4 = HEAP32[(i1 & -4096) + 12 >> 2] | 0;
 i6 = i1;
 i3 = i4 + 84 | 0;
 i5 = i6 + 12 | 0;
 if ((i6 | 0) == (HEAP32[i3 >> 2] | 0)) {
  HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 }
 i3 = i1 + 8 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i9;
 HEAP32[i9 + 8 >> 2] = i1;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i5 >> 2] = 0;
 i3 = i4 + 80 | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i3 >> 2] = i6;
 HEAP32[i2 >> 2] = 0;
 return;
}
function __ZN7WebCore19JSWorkerGlobalScope11setIntervalEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i3 + 16 | 0;
 i9 = i2 + 660 | 0;
 __ZN7WebCore15ScheduledAction6createEPN3JSC9ExecStateERNS_15DOMWrapperWorldEPNS_21ContentSecurityPolicyE(i5, i3, HEAP32[(HEAP32[(HEAP32[HEAP32[i8 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, HEAP32[(HEAP32[i9 >> 2] | 0) + 16 >> 2] | 0);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = (HEAP32[(HEAP32[i8 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 if (!((HEAP32[i2 >> 2] & 0 | 0) == 0 & (HEAP32[i2 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore15ScheduledActionD2Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return;
 }
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 4 >> 2] = -1;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (((HEAP32[i3 + 32 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
   i2 = i3 + 56 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   i10 = HEAP32[i2 + 4 >> 2] | 0;
   i2 = i6 | 0;
   HEAP32[i2 >> 2] = i8;
   HEAP32[i2 + 4 >> 2] = i10;
   i2 = i10;
   if ((i2 | 0) == -1) {
    i11 = i8;
    break;
   }
   if (i2 >>> 0 >= 4294967289 >>> 0) {
    i12 = 9;
    break;
   }
   d13 = +HEAPF64[i6 >> 3];
   i12 = 10;
  } else {
   HEAP32[i6 + 4 >> 2] = -4;
   HEAP32[i6 >> 2] = 0;
   i12 = 9;
  }
 } while (0);
 if ((i12 | 0) == 9) {
  d13 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i3);
  i12 = 10;
 }
 if ((i12 | 0) == 10) {
  i11 = __ZN3JSC7toInt32Ed(d13) | 0;
 }
 i12 = HEAP32[i9 >> 2] | 0;
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = i5;
 i5 = __ZN7WebCore17WorkerGlobalScope11setIntervalEN3WTF10PassOwnPtrINS_15ScheduledActionEEEi(i12, i7, i11) | 0;
 HEAP32[i1 + 4 >> 2] = -1;
 HEAP32[i1 >> 2] = i5;
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore15ScheduledActionD2Ev(i5);
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore19JSWorkerGlobalScope10setTimeoutEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i3 + 16 | 0;
 i9 = i2 + 660 | 0;
 __ZN7WebCore15ScheduledAction6createEPN3JSC9ExecStateERNS_15DOMWrapperWorldEPNS_21ContentSecurityPolicyE(i5, i3, HEAP32[(HEAP32[(HEAP32[HEAP32[i8 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, HEAP32[(HEAP32[i9 >> 2] | 0) + 16 >> 2] | 0);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = (HEAP32[(HEAP32[i8 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 if (!((HEAP32[i2 >> 2] & 0 | 0) == 0 & (HEAP32[i2 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore15ScheduledActionD2Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return;
 }
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 4 >> 2] = -1;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (((HEAP32[i3 + 32 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
   i2 = i3 + 56 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   i10 = HEAP32[i2 + 4 >> 2] | 0;
   i2 = i6 | 0;
   HEAP32[i2 >> 2] = i8;
   HEAP32[i2 + 4 >> 2] = i10;
   i2 = i10;
   if ((i2 | 0) == -1) {
    i11 = i8;
    break;
   }
   if (i2 >>> 0 >= 4294967289 >>> 0) {
    i12 = 9;
    break;
   }
   d13 = +HEAPF64[i6 >> 3];
   i12 = 10;
  } else {
   HEAP32[i6 + 4 >> 2] = -4;
   HEAP32[i6 >> 2] = 0;
   i12 = 9;
  }
 } while (0);
 if ((i12 | 0) == 9) {
  d13 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i3);
  i12 = 10;
 }
 if ((i12 | 0) == 10) {
  i11 = __ZN3JSC7toInt32Ed(d13) | 0;
 }
 i12 = HEAP32[i9 >> 2] | 0;
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = i5;
 i5 = __ZN7WebCore17WorkerGlobalScope10setTimeoutEN3WTF10PassOwnPtrINS_15ScheduledActionEEEi(i12, i7, i11) | 0;
 HEAP32[i1 + 4 >> 2] = -1;
 HEAP32[i1 >> 2] = i5;
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore15ScheduledActionD2Ev(i5);
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore19JSWorkerGlobalScope13visitChildrenEPN3JSC6JSCellERNS1_11SlotVisitorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 48 | 0;
 __ZN7WebCore17JSDOMGlobalObject13visitChildrenEPN3JSC6JSCellERNS1_11SlotVisitorE(i1, i2);
 i7 = i1 + 660 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i1 + 252 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = i1;
 } else {
  HEAP32[i5 >> 2] = i8;
  __ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS1_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S4_S6_S6_EEEEOT0_OT1_(i3 + 32 | 0, i2 + 20 | 0, i5, i5);
  i9 = HEAP32[i7 >> 2] | 0;
 }
 i5 = HEAP32[i9 + 256 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i10 = i9;
 } else {
  HEAP32[i4 >> 2] = i5;
  __ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS1_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S4_S6_S6_EEEEOT0_OT1_(i3 + 8 | 0, i2 + 20 | 0, i4, i4);
  i10 = HEAP32[i7 >> 2] | 0;
 }
 __ZN7WebCore21EventListenerIteratorC1EPNS_11EventTargetE(i6, i10 + 160 | 0);
 i10 = __ZN7WebCore21EventListenerIterator12nextListenerEv(i6) | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 } else {
  i11 = i10;
 }
 while (1) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] & 1](i11, i2);
  i11 = __ZN7WebCore21EventListenerIterator12nextListenerEv(i6) | 0;
  if ((i11 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN7WebCore19JSWorkerGlobalScope26getOwnPropertySlotDelegateEPN3JSC9ExecStateENS1_12PropertyNameERNS1_12PropertySlotE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
 i3 = __ZN3JSC14JSGlobalObject18getOwnPropertySlotEPNS_8JSObjectEPNS_9ExecStateENS_12PropertyNameERNS_12PropertySlotE(i1, i2, i6, i4) | 0;
 STACKTOP = i5;
 return i3 | 0;
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
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
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
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore19JSWorkerGlobalScope11setIntervalEPN3JSC9ExecStateE","__ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS1_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S4_S6_S6_EEEEOT0_OT1_","__ZN7WebCore19JSWorkerGlobalScope13visitChildrenEPN3JSC6JSCellERNS1_11SlotVisitorE","_memset","__ZN7WebCore19JSWorkerGlobalScope13importScriptsEPN3JSC9ExecStateE","_memcpy","__ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E6expandEPS1_","__ZN7WebCore15ScheduledActionD2Ev","__ZN7WebCore19JSWorkerGlobalScope26getOwnPropertySlotDelegateEPN3JSC9ExecStateENS1_12PropertyNameERNS1_12PropertySlotE","__ZN7WebCore19JSWorkerGlobalScope10setTimeoutEPN3JSC9ExecStateE"]

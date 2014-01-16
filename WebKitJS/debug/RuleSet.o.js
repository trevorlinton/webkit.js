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
var __ZN7WebCore8RuleDataC1EPNS_9StyleRuleEjjNS_12AddRuleFlagsE;
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
  var __ZN3WTF8starAtomE=env.__ZN3WTF8starAtomE|0;
  var __ZN7WebCore9HTMLNames8typeAttrE=env.__ZN7WebCore9HTMLNames8typeAttrE|0;
  var __ZN7WebCore9HTMLNames12readonlyAttrE=env.__ZN7WebCore9HTMLNames12readonlyAttrE|0;
  var __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE=env.__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE|0;
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
function __ZN7WebCore7RuleSet7addRuleEPNS_9StyleRuleEjNS_12AddRuleFlagsE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i1 + 128 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i10 + 1;
 __ZN7WebCore8RuleDataC2EPNS_9StyleRuleEjjNS_12AddRuleFlagsE(i8, i2, i3, i10, i4);
 i4 = i1 + 136 | 0;
 i10 = i6;
 i3 = i7;
 i2 = i8 | 0;
 i9 = i8 + 4 | 0;
 i11 = (HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] | 0) + ((HEAP32[i9 >> 2] & 8191) << 3) | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = 21;
  } else {
   i13 = i11;
   i14 = 0;
   while (1) {
    __ZN7WebCore14RuleFeatureSet27collectFeaturesFromSelectorEPKNS_11CSSSelectorE(i4, i13);
    i15 = i13 + 2 | 0;
    do {
     if ((HEAP8[i15] & 4) == 0) {
      i12 = 14;
     } else {
      i16 = HEAP32[(HEAP32[i13 + 4 >> 2] | 0) + 28 >> 2] | 0;
      if ((i16 | 0) == 0) {
       i12 = 14;
       break;
      }
      i17 = HEAP32[i16 >> 2] | 0;
      if ((i17 | 0) == 0) {
       i18 = i14;
       break;
      }
      i16 = i13;
      i19 = i14;
      i20 = i17;
      while (1) {
       do {
        if (i19) {
         i21 = 1;
        } else {
         i17 = HEAP32[i16 >> 2] | 0;
         if ((i17 & 32640 | 0) == 0) {
          __ZNK7WebCore11CSSSelector17extractPseudoTypeEv(i13);
          i22 = HEAP32[i16 >> 2] | 0;
         } else {
          i22 = i17;
         }
         i17 = i22 >>> 7 & 255;
         if (((i22 & 7) - 2 | 0) >>> 0 < 2 >>> 0) {
          i21 = 1;
          break;
         }
         i21 = (i17 - 2 | 0) >>> 0 < 7 >>> 0 | (i17 | 0) == 11 | (i17 | 0) == 12 | (i17 | 0) == 13 | (i17 | 0) == 14;
        }
       } while (0);
       __ZN7WebCore14RuleFeatureSet27collectFeaturesFromSelectorEPKNS_11CSSSelectorE(i4, i20);
       i17 = i20;
       while (1) {
        i23 = HEAP8[i17 + 2 | 0] | 0;
        i17 = i17 + 8 | 0;
        if ((i23 & 2) != 0) {
         break;
        }
       }
       i24 = (i23 & 1) != 0 ? 0 : i17;
       if ((i24 | 0) == 0) {
        i18 = i21;
        break;
       } else {
        i19 = i21;
        i20 = i24;
       }
      }
     }
    } while (0);
    do {
     if ((i12 | 0) == 14) {
      i12 = 0;
      if (i14) {
       i18 = 1;
       break;
      }
      i20 = i13;
      i19 = HEAP32[i20 >> 2] | 0;
      if ((i19 & 32640 | 0) == 0) {
       __ZNK7WebCore11CSSSelector17extractPseudoTypeEv(i13);
       i25 = HEAP32[i20 >> 2] | 0;
      } else {
       i25 = i19;
      }
      i19 = i25 >>> 7 & 255;
      if (((i25 & 7) - 2 | 0) >>> 0 < 2 >>> 0) {
       i18 = 1;
       break;
      }
      i18 = (i19 - 2 | 0) >>> 0 < 7 >>> 0 | (i19 | 0) == 11 | (i19 | 0) == 12 | (i19 | 0) == 13 | (i19 | 0) == 14;
     }
    } while (0);
    i19 = (HEAP8[i15] & 2) != 0 ? 0 : i13 + 8 | 0;
    if ((i19 | 0) == 0) {
     break;
    } else {
     i13 = i19;
     i14 = i18;
    }
   }
   if (!i18) {
    i12 = 21;
    break;
   }
   i14 = i1 + 196 | 0;
   i13 = HEAP32[i9 >> 2] & 8191;
   i19 = i8 + 8 | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i6 + 4 >> 2] = i13;
   HEAP8[i6 + 8 | 0] = i20 >>> 29 & 1;
   i20 = i1 + 204 | 0;
   i13 = HEAP32[i20 >> 2] | 0;
   if ((i13 | 0) != (HEAP32[i1 + 200 >> 2] | 0)) {
    i16 = (HEAP32[i14 >> 2] | 0) + (i13 * 12 & -1) | 0;
    HEAP32[i16 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i16 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
    HEAP32[i16 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
    i26 = i19;
    break;
   }
   i16 = i13 + 1 | 0;
   i24 = i14 | 0;
   i27 = HEAP32[i24 >> 2] | 0;
   do {
    if (i27 >>> 0 > i6 >>> 0) {
     i12 = 26;
    } else {
     if ((i27 + (i13 * 12 & -1) | 0) >>> 0 <= i6 >>> 0) {
      i12 = 26;
      break;
     }
     __ZN3WTF6VectorIN7WebCore11RuleFeatureELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i14, i16);
     i28 = HEAP32[i24 >> 2] | 0;
     i29 = i28 + (((i6 - i27 | 0) / 12 & -1) * 12 & -1) | 0;
     i30 = i28;
    }
   } while (0);
   if ((i12 | 0) == 26) {
    __ZN3WTF6VectorIN7WebCore11RuleFeatureELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i14, i16);
    i29 = i6;
    i30 = HEAP32[i24 >> 2] | 0;
   }
   i27 = i30 + ((HEAP32[i20 >> 2] | 0) * 12 & -1) | 0;
   i13 = i29;
   HEAP32[i27 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i27 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
   HEAP32[i27 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
   HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   i26 = i19;
  }
 } while (0);
 if ((i12 | 0) == 21) {
  i26 = i8 + 8 | 0;
 }
 i29 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i29 & 67108864 | 0) != 0) {
   i26 = i1 + 208 | 0;
   i30 = HEAP32[i9 >> 2] & 8191;
   HEAP32[i7 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i7 + 4 >> 2] = i30;
   HEAP8[i7 + 8 | 0] = i29 >>> 29 & 1;
   i30 = i1 + 216 | 0;
   i6 = HEAP32[i30 >> 2] | 0;
   if ((i6 | 0) != (HEAP32[i1 + 212 >> 2] | 0)) {
    i10 = (HEAP32[i26 >> 2] | 0) + (i6 * 12 & -1) | 0;
    HEAP32[i10 >> 2] = HEAP32[i3 >> 2];
    HEAP32[i10 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
    HEAP32[i10 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
    HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
    break;
   }
   i10 = i6 + 1 | 0;
   i18 = i26 | 0;
   i25 = HEAP32[i18 >> 2] | 0;
   do {
    if (i25 >>> 0 > i7 >>> 0) {
     i12 = 34;
    } else {
     if ((i25 + (i6 * 12 & -1) | 0) >>> 0 <= i7 >>> 0) {
      i12 = 34;
      break;
     }
     __ZN3WTF6VectorIN7WebCore11RuleFeatureELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i26, i10);
     i21 = HEAP32[i18 >> 2] | 0;
     i31 = i21 + (((i7 - i25 | 0) / 12 & -1) * 12 & -1) | 0;
     i32 = i21;
    }
   } while (0);
   if ((i12 | 0) == 34) {
    __ZN3WTF6VectorIN7WebCore11RuleFeatureELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i26, i10);
    i31 = i7;
    i32 = HEAP32[i18 >> 2] | 0;
   }
   i25 = i32 + ((HEAP32[i30 >> 2] | 0) * 12 & -1) | 0;
   i6 = i31;
   HEAP32[i25 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i25 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   HEAP32[i25 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
   HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
  }
 } while (0);
 if (__ZN7WebCore7RuleSet21findBestRuleSetAndAddEPKNS_11CSSSelectorERNS_8RuleDataE(i1, (HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] | 0) + ((HEAP32[i9 >> 2] & 8191) << 3) | 0, i8) | 0) {
  STACKTOP = i5;
  return;
 }
 i9 = i1 + 104 | 0;
 i2 = i1 + 112 | 0;
 i31 = HEAP32[i2 >> 2] | 0;
 if ((i31 | 0) != (HEAP32[i1 + 108 >> 2] | 0)) {
  i1 = (HEAP32[i9 >> 2] | 0) + (i31 * 28 & -1) | 0;
  i32 = i8;
  HEAP32[i1 >> 2] = HEAP32[i32 >> 2];
  HEAP32[i1 + 4 >> 2] = HEAP32[i32 + 4 >> 2];
  HEAP32[i1 + 8 >> 2] = HEAP32[i32 + 8 >> 2];
  HEAP32[i1 + 12 >> 2] = HEAP32[i32 + 12 >> 2];
  HEAP32[i1 + 16 >> 2] = HEAP32[i32 + 16 >> 2];
  HEAP32[i1 + 20 >> 2] = HEAP32[i32 + 20 >> 2];
  HEAP32[i1 + 24 >> 2] = HEAP32[i32 + 24 >> 2];
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
  STACKTOP = i5;
  return;
 }
 i32 = i31 + 1 | 0;
 i1 = i9 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 do {
  if (i7 >>> 0 > i8 >>> 0) {
   i12 = 42;
  } else {
   if ((i7 + (i31 * 28 & -1) | 0) >>> 0 <= i8 >>> 0) {
    i12 = 42;
    break;
   }
   __ZN3WTF6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i9, i32);
   i3 = HEAP32[i1 >> 2] | 0;
   i33 = i3 + (((i8 - i7 | 0) / 28 & -1) * 28 & -1) | 0;
   i34 = i3;
  }
 } while (0);
 if ((i12 | 0) == 42) {
  __ZN3WTF6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i9, i32);
  i33 = i8;
  i34 = HEAP32[i1 >> 2] | 0;
 }
 i1 = i34 + ((HEAP32[i2 >> 2] | 0) * 28 & -1) | 0;
 i34 = i33;
 HEAP32[i1 >> 2] = HEAP32[i34 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i34 + 4 >> 2];
 HEAP32[i1 + 8 >> 2] = HEAP32[i34 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i34 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i34 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i34 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i34 + 24 >> 2];
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore7RuleSet21findBestRuleSetAndAddEPKNS_11CSSSelectorERNS_8RuleDataE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = i2;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5 >>> 3 & 15;
 if ((i6 | 0) == 3) {
  i7 = i2 + 4 | 0;
  if ((HEAP8[i2 + 2 | 0] & 4) == 0) {
   i8 = i7 | 0;
  } else {
   i8 = (HEAP32[i7 >> 2] | 0) + 4 | 0;
  }
  __ZN7WebCore7RuleSet12addToRuleSetEPN3WTF16AtomicStringImplERNS1_7HashMapIS3_NS1_6OwnPtrINS1_6VectorINS_8RuleDataELj0ENS1_15CrashOnOverflowEEEEENS1_7PtrHashIS3_EENS1_10HashTraitsIS3_EENSD_ISA_EEEERKS7_(0, HEAP32[i8 >> 2] | 0, i1 + 20 | 0, i3);
  i9 = 1;
  return i9 | 0;
 } else if ((i6 | 0) == 2) {
  i6 = i2 + 4 | 0;
  if ((HEAP8[i2 + 2 | 0] & 4) == 0) {
   i10 = i6 | 0;
  } else {
   i10 = (HEAP32[i6 >> 2] | 0) + 4 | 0;
  }
  __ZN7WebCore7RuleSet12addToRuleSetEPN3WTF16AtomicStringImplERNS1_7HashMapIS3_NS1_6OwnPtrINS1_6VectorINS_8RuleDataELj0ENS1_15CrashOnOverflowEEEEENS1_7PtrHashIS3_EENS1_10HashTraitsIS3_EENSD_ISA_EEEERKS7_(0, HEAP32[i10 >> 2] | 0, i1 | 0, i3);
  i9 = 1;
  return i9 | 0;
 } else {
  i10 = i5 & 120;
  do {
   if ((i10 | 0) == 72) {
    if (((i5 >>> 7 & 255) - 73 | 0) >>> 0 >= 2 >>> 0) {
     i11 = i5;
     break;
    }
    i6 = i2 + 4 | 0;
    if ((HEAP8[i2 + 2 | 0] & 4) == 0) {
     i12 = i6 | 0;
    } else {
     i12 = (HEAP32[i6 >> 2] | 0) + 4 | 0;
    }
    __ZN7WebCore7RuleSet12addToRuleSetEPN3WTF16AtomicStringImplERNS1_7HashMapIS3_NS1_6OwnPtrINS1_6VectorINS_8RuleDataELj0ENS1_15CrashOnOverflowEEEEENS1_7PtrHashIS3_EENS1_10HashTraitsIS3_EENSD_ISA_EEEERKS7_(0, HEAP32[i12 >> 2] | 0, i1 + 60 | 0, i3);
    i9 = 1;
    return i9 | 0;
   } else if ((i10 | 0) == 64) {
    if ((i5 & 32640 | 0) == 0) {
     __ZNK7WebCore11CSSSelector17extractPseudoTypeEv(i2);
     i13 = HEAP32[i4 >> 2] | 0;
    } else {
     i13 = i5;
    }
    i6 = i13 >>> 7 & 255;
    if (!((i6 | 0) == 18 | (i6 | 0) == 16 | (i6 | 0) == 15 | (i6 | 0) == 22)) {
     i11 = i13;
     break;
    }
    if ((i13 & 32640 | 0) == 0) {
     __ZNK7WebCore11CSSSelector17extractPseudoTypeEv(i2);
     i14 = HEAP32[i4 >> 2] | 0;
    } else {
     i14 = i13;
    }
    i6 = i14 >>> 7 & 255;
    if ((i6 | 0) == 15 | (i6 | 0) == 16 | (i6 | 0) == 18) {
     i8 = i1 + 80 | 0;
     i7 = i1 + 88 | 0;
     i15 = HEAP32[i7 >> 2] | 0;
     if ((i15 | 0) != (HEAP32[i1 + 84 >> 2] | 0)) {
      i16 = (HEAP32[i8 >> 2] | 0) + (i15 * 28 & -1) | 0;
      i17 = i3;
      HEAP32[i16 >> 2] = HEAP32[i17 >> 2];
      HEAP32[i16 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
      HEAP32[i16 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
      HEAP32[i16 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
      HEAP32[i16 + 16 >> 2] = HEAP32[i17 + 16 >> 2];
      HEAP32[i16 + 20 >> 2] = HEAP32[i17 + 20 >> 2];
      HEAP32[i16 + 24 >> 2] = HEAP32[i17 + 24 >> 2];
      HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
      i9 = 1;
      return i9 | 0;
     }
     i17 = i15 + 1 | 0;
     i16 = i8 | 0;
     i18 = HEAP32[i16 >> 2] | 0;
     do {
      if (i18 >>> 0 > i3 >>> 0) {
       i19 = 26;
      } else {
       if ((i18 + (i15 * 28 & -1) | 0) >>> 0 <= i3 >>> 0) {
        i19 = 26;
        break;
       }
       __ZN3WTF6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, i17);
       i20 = HEAP32[i16 >> 2] | 0;
       i21 = i20 + (((i3 - i18 | 0) / 28 & -1) * 28 & -1) | 0;
       i22 = i20;
      }
     } while (0);
     if ((i19 | 0) == 26) {
      __ZN3WTF6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, i17);
      i21 = i3;
      i22 = HEAP32[i16 >> 2] | 0;
     }
     i18 = i22 + ((HEAP32[i7 >> 2] | 0) * 28 & -1) | 0;
     i15 = i21;
     HEAP32[i18 >> 2] = HEAP32[i15 >> 2];
     HEAP32[i18 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
     HEAP32[i18 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
     HEAP32[i18 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
     HEAP32[i18 + 16 >> 2] = HEAP32[i15 + 16 >> 2];
     HEAP32[i18 + 20 >> 2] = HEAP32[i15 + 20 >> 2];
     HEAP32[i18 + 24 >> 2] = HEAP32[i15 + 24 >> 2];
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
     i9 = 1;
     return i9 | 0;
    } else if ((i6 | 0) == 22) {
     i15 = i1 + 92 | 0;
     i18 = i1 + 100 | 0;
     i20 = HEAP32[i18 >> 2] | 0;
     if ((i20 | 0) != (HEAP32[i1 + 96 >> 2] | 0)) {
      i23 = (HEAP32[i15 >> 2] | 0) + (i20 * 28 & -1) | 0;
      i24 = i3;
      HEAP32[i23 >> 2] = HEAP32[i24 >> 2];
      HEAP32[i23 + 4 >> 2] = HEAP32[i24 + 4 >> 2];
      HEAP32[i23 + 8 >> 2] = HEAP32[i24 + 8 >> 2];
      HEAP32[i23 + 12 >> 2] = HEAP32[i24 + 12 >> 2];
      HEAP32[i23 + 16 >> 2] = HEAP32[i24 + 16 >> 2];
      HEAP32[i23 + 20 >> 2] = HEAP32[i24 + 20 >> 2];
      HEAP32[i23 + 24 >> 2] = HEAP32[i24 + 24 >> 2];
      HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
      i9 = 1;
      return i9 | 0;
     }
     i24 = i20 + 1 | 0;
     i23 = i15 | 0;
     i25 = HEAP32[i23 >> 2] | 0;
     do {
      if (i25 >>> 0 > i3 >>> 0) {
       i19 = 33;
      } else {
       if ((i25 + (i20 * 28 & -1) | 0) >>> 0 <= i3 >>> 0) {
        i19 = 33;
        break;
       }
       __ZN3WTF6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i15, i24);
       i26 = HEAP32[i23 >> 2] | 0;
       i27 = i26 + (((i3 - i25 | 0) / 28 & -1) * 28 & -1) | 0;
       i28 = i26;
      }
     } while (0);
     if ((i19 | 0) == 33) {
      __ZN3WTF6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i15, i24);
      i27 = i3;
      i28 = HEAP32[i23 >> 2] | 0;
     }
     i25 = i28 + ((HEAP32[i18 >> 2] | 0) * 28 & -1) | 0;
     i20 = i27;
     HEAP32[i25 >> 2] = HEAP32[i20 >> 2];
     HEAP32[i25 + 4 >> 2] = HEAP32[i20 + 4 >> 2];
     HEAP32[i25 + 8 >> 2] = HEAP32[i20 + 8 >> 2];
     HEAP32[i25 + 12 >> 2] = HEAP32[i20 + 12 >> 2];
     HEAP32[i25 + 16 >> 2] = HEAP32[i20 + 16 >> 2];
     HEAP32[i25 + 20 >> 2] = HEAP32[i20 + 20 >> 2];
     HEAP32[i25 + 24 >> 2] = HEAP32[i20 + 24 >> 2];
     HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
     i9 = 1;
     return i9 | 0;
    } else {
     i9 = 1;
     return i9 | 0;
    }
   } else {
    i11 = i5;
   }
  } while (0);
  if ((i11 & 120 | 0) != 8) {
   i9 = 0;
   return i9 | 0;
  }
  do {
   if ((i11 & 7 | 0) == 4) {
    i5 = (HEAP8[i2 + 2 | 0] & 2) != 0 ? 0 : i2 + 8 | 0;
    i27 = i5;
    i28 = HEAP32[i27 >> 2] | 0;
    if (((i28 >>> 3 & 15) - 2 | 0) >>> 0 >= 2 >>> 0) {
     if ((i28 & 120 | 0) != 64) {
      break;
     }
     if ((i28 & 32640 | 0) == 0) {
      __ZNK7WebCore11CSSSelector17extractPseudoTypeEv(i5);
      i29 = HEAP32[i27 >> 2] | 0;
     } else {
      i29 = i28;
     }
     i28 = i29 >>> 7 & 255;
     if (!((i28 | 0) == 18 | (i28 | 0) == 16 | (i28 | 0) == 15 | (i28 | 0) == 22)) {
      break;
     }
    }
    if (__ZN7WebCore7RuleSet21findBestRuleSetAndAddEPKNS_11CSSSelectorERNS_8RuleDataE(i1, i5, i3) | 0) {
     i9 = 1;
    } else {
     break;
    }
    return i9 | 0;
   }
  } while (0);
  i29 = HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 12 >> 2] | 0;
  if ((i29 | 0) == (HEAP32[__ZN3WTF8starAtomE >> 2] | 0)) {
   i9 = 0;
   return i9 | 0;
  }
  __ZN7WebCore7RuleSet12addToRuleSetEPN3WTF16AtomicStringImplERNS1_7HashMapIS3_NS1_6OwnPtrINS1_6VectorINS_8RuleDataELj0ENS1_15CrashOnOverflowEEEEENS1_7PtrHashIS3_EENS1_10HashTraitsIS3_EENSD_ISA_EEEERKS7_(0, i29, i1 + 40 | 0, i3);
  i9 = 1;
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCore8RuleDataC2EPNS_9StyleRuleEjjNS_12AddRuleFlagsE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = i2;
 i7 = i3 & 8191;
 i3 = i1 + 4 | 0;
 i8 = i4 << 13 & 2147475456 | i7 | HEAP32[i3 >> 2] & -2147483648;
 HEAP32[i3 >> 2] = i8;
 if ((i5 & 2 | 0) == 0) {
  i9 = 0;
  i10 = i8;
  i11 = i2;
 } else {
  i8 = ((__ZN7WebCore23SelectorCheckerFastPath6canUseEPKNS_11CSSSelectorE((HEAP32[i2 + 12 >> 2] | 0) + (i7 << 3) | 0) | 0) & 1) << 31;
  i9 = i8;
  i10 = HEAP32[i3 >> 2] | 0;
  i11 = HEAP32[i6 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i10 & 2147483647 | i9;
 i9 = (__ZNK7WebCore11CSSSelector11specificityEv((HEAP32[i11 + 12 >> 2] | 0) + ((i10 & 8191) << 3) | 0) | 0) & 16777215;
 i10 = i1 + 8 | 0;
 i11 = HEAP32[i10 >> 2] & -16777216 | i9;
 HEAP32[i10 >> 2] = i11;
 i9 = HEAP32[i3 >> 2] & 8191;
 i8 = (HEAP32[i6 >> 2] | 0) + 12 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i10 >> 2] = ((i7 + (i9 + 1 << 3) | 0) != 0 & (HEAP8[i7 + (i9 << 3) + 2 | 0] & 2) == 0 & 1) << 24 | i11 & -16777217;
 i11 = HEAP32[__ZN3WTF8starAtomE >> 2] | 0;
 i7 = HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0;
 i2 = (HEAP32[i8 >> 2] | 0) + (i9 << 3) | 0;
 while (1) {
  i12 = i2;
  i13 = HEAP32[i12 >> 2] | 0;
  i9 = i13 & 120;
  if ((i9 | 0) == 64) {
   i14 = 8;
   break;
  } else if ((i9 | 0) != 8) {
   i15 = i13;
   i14 = 11;
   break;
  }
  i9 = HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 16 >> 2] | 0;
  if ((i9 | 0) != (i11 | 0) & (i9 | 0) != (i7 | 0)) {
   i16 = 0;
   break;
  }
  if ((i13 & 7 | 0) != 4) {
   i16 = 33554432;
   break;
  }
  i2 = (HEAP8[i2 + 2 | 0] & 2) != 0 ? 0 : i2 + 8 | 0;
 }
 if ((i14 | 0) == 8) {
  if ((i13 & 32640 | 0) == 0) {
   __ZNK7WebCore11CSSSelector17extractPseudoTypeEv(i2);
   i17 = HEAP32[i12 >> 2] | 0;
  } else {
   i17 = i13;
  }
  i13 = i17 >>> 7 & 255;
  if ((i13 | 0) == 18 | (i13 | 0) == 16 | (i13 | 0) == 15 | (i13 | 0) == 22) {
   i16 = 33554432;
  } else {
   i15 = i17;
   i14 = 11;
  }
 }
 if ((i14 | 0) == 11) {
  i16 = (((i15 >>> 3 & 15) - 2 | 0) >>> 0 < 2 >>> 0) << 25;
 }
 i15 = HEAP32[i10 >> 2] & -33554433 | i16;
 HEAP32[i10 >> 2] = i15;
 i16 = HEAP32[i3 >> 2] & 8191;
 i14 = (HEAP32[i6 >> 2] | 0) + 12 | 0;
 i17 = (HEAP32[i14 >> 2] | 0) + (i16 << 3) | 0;
 L17 : do {
  if ((i17 | 0) == 0) {
   i18 = 0;
  } else {
   i13 = HEAP32[__ZN7WebCore9HTMLNames8typeAttrE >> 2] | 0;
   i12 = HEAP32[__ZN7WebCore9HTMLNames12readonlyAttrE >> 2] | 0;
   i2 = i17;
   while (1) {
    i7 = HEAP32[i2 >> 2] | 0;
    switch (i7 >>> 3 & 15 | 0) {
    case 4:
    case 5:
    case 6:
    case 7:
    case 10:
    case 11:
    case 12:
     {
      i11 = HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 16 >> 2] | 0;
      if (!((i13 | 0) == (i11 | 0) | (i12 | 0) == (i11 | 0))) {
       i18 = 67108864;
       break L17;
      }
      break;
     }
    default:
     {}
    }
    i11 = HEAP8[i2 + 2 | 0] | 0;
    do {
     if ((i11 & 4) != 0) {
      i9 = HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 28 >> 2] | 0;
      if ((i9 | 0) == 0) {
       break;
      }
      i8 = HEAP32[i9 >> 2] | 0;
      if ((i8 | 0) == 0) {
       break;
      } else {
       i19 = i8;
      }
      while (1) {
       L29 : do {
        if ((i19 | 0) == 0) {
         i20 = 0;
        } else {
         i8 = i19;
         while (1) {
          switch ((HEAP32[i8 >> 2] | 0) >>> 3 & 15 | 0) {
          case 4:
          case 5:
          case 6:
          case 7:
          case 10:
          case 11:
          case 12:
           {
            i18 = 67108864;
            break L17;
            break;
           }
          default:
           {}
          }
          i9 = (HEAP8[i8 + 2 | 0] & 2) != 0 ? 0 : i8 + 8 | 0;
          if ((i9 | 0) == 0) {
           i20 = i19;
           break L29;
          } else {
           i8 = i9;
          }
         }
        }
       } while (0);
       while (1) {
        i21 = HEAP8[i20 + 2 | 0] | 0;
        i20 = i20 + 8 | 0;
        if ((i21 & 2) != 0) {
         break;
        }
       }
       i19 = (i21 & 1) != 0 ? 0 : i20;
       if ((i19 | 0) == 0) {
        break;
       }
      }
     }
    } while (0);
    i2 = (i11 & 2) != 0 ? 0 : i2 + 8 | 0;
    if (!((i7 & 7 | 0) == 4 & (i2 | 0) != 0)) {
     break;
    }
   }
   if ((i2 | 0) == 0) {
    i18 = 0;
    break;
   } else {
    i22 = i2;
   }
   while (1) {
    switch ((HEAP32[i22 >> 2] | 0) >>> 3 & 15 | 0) {
    case 4:
    case 5:
    case 6:
    case 7:
    case 10:
    case 11:
    case 12:
     {
      i18 = 67108864;
      break L17;
      break;
     }
    default:
     {}
    }
    i12 = HEAP8[i22 + 2 | 0] | 0;
    do {
     if ((i12 & 4) != 0) {
      i13 = HEAP32[(HEAP32[i22 + 4 >> 2] | 0) + 28 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      }
      i8 = HEAP32[i13 >> 2] | 0;
      if ((i8 | 0) == 0) {
       break;
      } else {
       i23 = i8;
      }
      while (1) {
       L46 : do {
        if ((i23 | 0) == 0) {
         i24 = 0;
        } else {
         i8 = i23;
         while (1) {
          switch ((HEAP32[i8 >> 2] | 0) >>> 3 & 15 | 0) {
          case 4:
          case 5:
          case 6:
          case 7:
          case 10:
          case 11:
          case 12:
           {
            i18 = 67108864;
            break L17;
            break;
           }
          default:
           {}
          }
          i13 = (HEAP8[i8 + 2 | 0] & 2) != 0 ? 0 : i8 + 8 | 0;
          if ((i13 | 0) == 0) {
           i24 = i23;
           break L46;
          } else {
           i8 = i13;
          }
         }
        }
       } while (0);
       while (1) {
        i25 = HEAP8[i24 + 2 | 0] | 0;
        i24 = i24 + 8 | 0;
        if ((i25 & 2) != 0) {
         break;
        }
       }
       i23 = (i25 & 1) != 0 ? 0 : i24;
       if ((i23 | 0) == 0) {
        break;
       }
      }
     }
    } while (0);
    i7 = (i12 & 2) != 0 ? 0 : i22 + 8 | 0;
    if ((i7 | 0) == 0) {
     i18 = 0;
     break L17;
    } else {
     i22 = i7;
    }
   }
  }
 } while (0);
 HEAP32[i10 >> 2] = i15 & -67108865 | i18;
 i18 = (__ZN7WebCore15SelectorChecker22determineLinkMatchTypeEPKNS_11CSSSelectorE((HEAP32[i14 >> 2] | 0) + (i16 << 3) | 0) | 0) << 27 & 402653184;
 HEAP32[i10 >> 2] = i5 >>> 2 << 30 & 1073741824 | i5 << 29 & 536870912 | i18 | HEAP32[i10 >> 2] & 134217727;
 __ZN7WebCore14SelectorFilter23collectIdentifierHashesEPKNS_11CSSSelectorEPjj((HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] | 0) + ((HEAP32[i3 >> 2] & 8191) << 3) | 0, i1 + 12 | 0, 4);
 return;
}
function __ZN7WebCore8RuleDataC1EPNS_9StyleRuleEjjNS_12AddRuleFlagsE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = i2;
 i7 = i3 & 8191;
 i3 = i1 + 4 | 0;
 i8 = i4 << 13 & 2147475456 | i7 | HEAP32[i3 >> 2] & -2147483648;
 HEAP32[i3 >> 2] = i8;
 if ((i5 & 2 | 0) == 0) {
  i9 = 0;
  i10 = i8;
  i11 = i2;
 } else {
  i8 = ((__ZN7WebCore23SelectorCheckerFastPath6canUseEPKNS_11CSSSelectorE((HEAP32[i2 + 12 >> 2] | 0) + (i7 << 3) | 0) | 0) & 1) << 31;
  i9 = i8;
  i10 = HEAP32[i3 >> 2] | 0;
  i11 = HEAP32[i6 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i10 & 2147483647 | i9;
 i9 = (__ZNK7WebCore11CSSSelector11specificityEv((HEAP32[i11 + 12 >> 2] | 0) + ((i10 & 8191) << 3) | 0) | 0) & 16777215;
 i10 = i1 + 8 | 0;
 i11 = HEAP32[i10 >> 2] & -16777216 | i9;
 HEAP32[i10 >> 2] = i11;
 i9 = HEAP32[i3 >> 2] & 8191;
 i8 = (HEAP32[i6 >> 2] | 0) + 12 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i10 >> 2] = ((i7 + (i9 + 1 << 3) | 0) != 0 & (HEAP8[i7 + (i9 << 3) + 2 | 0] & 2) == 0 & 1) << 24 | i11 & -16777217;
 i11 = HEAP32[__ZN3WTF8starAtomE >> 2] | 0;
 i7 = HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0;
 i2 = (HEAP32[i8 >> 2] | 0) + (i9 << 3) | 0;
 while (1) {
  i12 = i2;
  i13 = HEAP32[i12 >> 2] | 0;
  i9 = i13 & 120;
  if ((i9 | 0) == 64) {
   i14 = 8;
   break;
  } else if ((i9 | 0) != 8) {
   i15 = i13;
   i14 = 11;
   break;
  }
  i9 = HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 16 >> 2] | 0;
  if ((i9 | 0) != (i11 | 0) & (i9 | 0) != (i7 | 0)) {
   i16 = 0;
   break;
  }
  if ((i13 & 7 | 0) != 4) {
   i16 = 33554432;
   break;
  }
  i2 = (HEAP8[i2 + 2 | 0] & 2) != 0 ? 0 : i2 + 8 | 0;
 }
 if ((i14 | 0) == 8) {
  if ((i13 & 32640 | 0) == 0) {
   __ZNK7WebCore11CSSSelector17extractPseudoTypeEv(i2);
   i17 = HEAP32[i12 >> 2] | 0;
  } else {
   i17 = i13;
  }
  i13 = i17 >>> 7 & 255;
  if ((i13 | 0) == 18 | (i13 | 0) == 16 | (i13 | 0) == 15 | (i13 | 0) == 22) {
   i16 = 33554432;
  } else {
   i15 = i17;
   i14 = 11;
  }
 }
 if ((i14 | 0) == 11) {
  i16 = (((i15 >>> 3 & 15) - 2 | 0) >>> 0 < 2 >>> 0) << 25;
 }
 i15 = HEAP32[i10 >> 2] & -33554433 | i16;
 HEAP32[i10 >> 2] = i15;
 i16 = HEAP32[i3 >> 2] & 8191;
 i14 = (HEAP32[i6 >> 2] | 0) + 12 | 0;
 i17 = (HEAP32[i14 >> 2] | 0) + (i16 << 3) | 0;
 L17 : do {
  if ((i17 | 0) == 0) {
   i18 = 0;
  } else {
   i13 = HEAP32[__ZN7WebCore9HTMLNames8typeAttrE >> 2] | 0;
   i12 = HEAP32[__ZN7WebCore9HTMLNames12readonlyAttrE >> 2] | 0;
   i2 = i17;
   while (1) {
    i7 = HEAP32[i2 >> 2] | 0;
    switch (i7 >>> 3 & 15 | 0) {
    case 4:
    case 5:
    case 6:
    case 7:
    case 10:
    case 11:
    case 12:
     {
      i11 = HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 16 >> 2] | 0;
      if (!((i13 | 0) == (i11 | 0) | (i12 | 0) == (i11 | 0))) {
       i18 = 67108864;
       break L17;
      }
      break;
     }
    default:
     {}
    }
    i11 = HEAP8[i2 + 2 | 0] | 0;
    do {
     if ((i11 & 4) != 0) {
      i9 = HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 28 >> 2] | 0;
      if ((i9 | 0) == 0) {
       break;
      }
      i8 = HEAP32[i9 >> 2] | 0;
      if ((i8 | 0) == 0) {
       break;
      } else {
       i19 = i8;
      }
      while (1) {
       L29 : do {
        if ((i19 | 0) == 0) {
         i20 = 0;
        } else {
         i8 = i19;
         while (1) {
          switch ((HEAP32[i8 >> 2] | 0) >>> 3 & 15 | 0) {
          case 4:
          case 5:
          case 6:
          case 7:
          case 10:
          case 11:
          case 12:
           {
            i18 = 67108864;
            break L17;
            break;
           }
          default:
           {}
          }
          i9 = (HEAP8[i8 + 2 | 0] & 2) != 0 ? 0 : i8 + 8 | 0;
          if ((i9 | 0) == 0) {
           i20 = i19;
           break L29;
          } else {
           i8 = i9;
          }
         }
        }
       } while (0);
       while (1) {
        i21 = HEAP8[i20 + 2 | 0] | 0;
        i20 = i20 + 8 | 0;
        if ((i21 & 2) != 0) {
         break;
        }
       }
       i19 = (i21 & 1) != 0 ? 0 : i20;
       if ((i19 | 0) == 0) {
        break;
       }
      }
     }
    } while (0);
    i2 = (i11 & 2) != 0 ? 0 : i2 + 8 | 0;
    if (!((i7 & 7 | 0) == 4 & (i2 | 0) != 0)) {
     break;
    }
   }
   if ((i2 | 0) == 0) {
    i18 = 0;
    break;
   } else {
    i22 = i2;
   }
   while (1) {
    switch ((HEAP32[i22 >> 2] | 0) >>> 3 & 15 | 0) {
    case 4:
    case 5:
    case 6:
    case 7:
    case 10:
    case 11:
    case 12:
     {
      i18 = 67108864;
      break L17;
      break;
     }
    default:
     {}
    }
    i12 = HEAP8[i22 + 2 | 0] | 0;
    do {
     if ((i12 & 4) != 0) {
      i13 = HEAP32[(HEAP32[i22 + 4 >> 2] | 0) + 28 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      }
      i8 = HEAP32[i13 >> 2] | 0;
      if ((i8 | 0) == 0) {
       break;
      } else {
       i23 = i8;
      }
      while (1) {
       L46 : do {
        if ((i23 | 0) == 0) {
         i24 = 0;
        } else {
         i8 = i23;
         while (1) {
          switch ((HEAP32[i8 >> 2] | 0) >>> 3 & 15 | 0) {
          case 4:
          case 5:
          case 6:
          case 7:
          case 10:
          case 11:
          case 12:
           {
            i18 = 67108864;
            break L17;
            break;
           }
          default:
           {}
          }
          i13 = (HEAP8[i8 + 2 | 0] & 2) != 0 ? 0 : i8 + 8 | 0;
          if ((i13 | 0) == 0) {
           i24 = i23;
           break L46;
          } else {
           i8 = i13;
          }
         }
        }
       } while (0);
       while (1) {
        i25 = HEAP8[i24 + 2 | 0] | 0;
        i24 = i24 + 8 | 0;
        if ((i25 & 2) != 0) {
         break;
        }
       }
       i23 = (i25 & 1) != 0 ? 0 : i24;
       if ((i23 | 0) == 0) {
        break;
       }
      }
     }
    } while (0);
    i7 = (i12 & 2) != 0 ? 0 : i22 + 8 | 0;
    if ((i7 | 0) == 0) {
     i18 = 0;
     break L17;
    } else {
     i22 = i7;
    }
   }
  }
 } while (0);
 HEAP32[i10 >> 2] = i15 & -67108865 | i18;
 i18 = (__ZN7WebCore15SelectorChecker22determineLinkMatchTypeEPKNS_11CSSSelectorE((HEAP32[i14 >> 2] | 0) + (i16 << 3) | 0) | 0) << 27 & 402653184;
 HEAP32[i10 >> 2] = i5 >>> 2 << 30 & 1073741824 | i5 << 29 & 536870912 | i18 | HEAP32[i10 >> 2] & 134217727;
 __ZN7WebCore14SelectorFilter23collectIdentifierHashesEPKNS_11CSSSelectorEPjj((HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] | 0) + ((HEAP32[i3 >> 2] & 8191) << 3) | 0, i1 + 12 | 0, 4);
 return;
}
function __ZN7WebCore7RuleSet11shrinkToFitEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i2 + (i3 << 3) | 0;
 L1 : do {
  if ((HEAP32[i1 + 12 >> 2] | 0) != 0) {
   L3 : do {
    if ((i3 | 0) == 0) {
     i5 = i2;
    } else {
     i6 = i2;
     while (1) {
      i7 = HEAP32[i6 >> 2] | 0;
      if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
       i5 = i6;
       break L3;
      }
      i6 = i6 + 8 | 0;
      if ((i6 | 0) == (i4 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i5 | 0) == (i4 | 0)) {
    break;
   } else {
    i8 = i5;
   }
   while (1) {
    i6 = HEAP32[i8 + 4 >> 2] | 0;
    __ZN3WTF6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj(i6, HEAP32[i6 + 8 >> 2] | 0);
    i6 = i8 + 8 | 0;
    if ((i6 | 0) == (i4 | 0)) {
     break L1;
    } else {
     i9 = i6;
    }
    while (1) {
     i6 = HEAP32[i9 >> 2] | 0;
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      break;
     }
     i6 = i9 + 8 | 0;
     if ((i6 | 0) == (i4 | 0)) {
      break L1;
     } else {
      i9 = i6;
     }
    }
    if ((i9 | 0) == (i4 | 0)) {
     break;
    } else {
     i8 = i9;
    }
   }
  }
 } while (0);
 i9 = HEAP32[i1 + 20 >> 2] | 0;
 i8 = HEAP32[i1 + 24 >> 2] | 0;
 i4 = i9 + (i8 << 3) | 0;
 L15 : do {
  if ((HEAP32[i1 + 32 >> 2] | 0) != 0) {
   L17 : do {
    if ((i8 | 0) == 0) {
     i10 = i9;
    } else {
     i5 = i9;
     while (1) {
      i2 = HEAP32[i5 >> 2] | 0;
      if (!((i2 | 0) == (-1 | 0) | (i2 | 0) == 0)) {
       i10 = i5;
       break L17;
      }
      i5 = i5 + 8 | 0;
      if ((i5 | 0) == (i4 | 0)) {
       break L15;
      }
     }
    }
   } while (0);
   if ((i10 | 0) == (i4 | 0)) {
    break;
   } else {
    i11 = i10;
   }
   while (1) {
    i5 = HEAP32[i11 + 4 >> 2] | 0;
    __ZN3WTF6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj(i5, HEAP32[i5 + 8 >> 2] | 0);
    i5 = i11 + 8 | 0;
    if ((i5 | 0) == (i4 | 0)) {
     break L15;
    } else {
     i12 = i5;
    }
    while (1) {
     i5 = HEAP32[i12 >> 2] | 0;
     if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
      break;
     }
     i5 = i12 + 8 | 0;
     if ((i5 | 0) == (i4 | 0)) {
      break L15;
     } else {
      i12 = i5;
     }
    }
    if ((i12 | 0) == (i4 | 0)) {
     break;
    } else {
     i11 = i12;
    }
   }
  }
 } while (0);
 i12 = HEAP32[i1 + 40 >> 2] | 0;
 i11 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = i12 + (i11 << 3) | 0;
 L29 : do {
  if ((HEAP32[i1 + 52 >> 2] | 0) != 0) {
   L31 : do {
    if ((i11 | 0) == 0) {
     i13 = i12;
    } else {
     i10 = i12;
     while (1) {
      i9 = HEAP32[i10 >> 2] | 0;
      if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
       i13 = i10;
       break L31;
      }
      i10 = i10 + 8 | 0;
      if ((i10 | 0) == (i4 | 0)) {
       break L29;
      }
     }
    }
   } while (0);
   if ((i13 | 0) == (i4 | 0)) {
    break;
   } else {
    i14 = i13;
   }
   while (1) {
    i10 = HEAP32[i14 + 4 >> 2] | 0;
    __ZN3WTF6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj(i10, HEAP32[i10 + 8 >> 2] | 0);
    i10 = i14 + 8 | 0;
    if ((i10 | 0) == (i4 | 0)) {
     break L29;
    } else {
     i15 = i10;
    }
    while (1) {
     i10 = HEAP32[i15 >> 2] | 0;
     if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
      break;
     }
     i10 = i15 + 8 | 0;
     if ((i10 | 0) == (i4 | 0)) {
      break L29;
     } else {
      i15 = i10;
     }
    }
    if ((i15 | 0) == (i4 | 0)) {
     break;
    } else {
     i14 = i15;
    }
   }
  }
 } while (0);
 i15 = HEAP32[i1 + 60 >> 2] | 0;
 i14 = HEAP32[i1 + 64 >> 2] | 0;
 i4 = i15 + (i14 << 3) | 0;
 L43 : do {
  if ((HEAP32[i1 + 72 >> 2] | 0) != 0) {
   L45 : do {
    if ((i14 | 0) == 0) {
     i16 = i15;
    } else {
     i13 = i15;
     while (1) {
      i12 = HEAP32[i13 >> 2] | 0;
      if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
       i16 = i13;
       break L45;
      }
      i13 = i13 + 8 | 0;
      if ((i13 | 0) == (i4 | 0)) {
       break L43;
      }
     }
    }
   } while (0);
   if ((i16 | 0) == (i4 | 0)) {
    break;
   } else {
    i17 = i16;
   }
   while (1) {
    i13 = HEAP32[i17 + 4 >> 2] | 0;
    __ZN3WTF6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj(i13, HEAP32[i13 + 8 >> 2] | 0);
    i13 = i17 + 8 | 0;
    if ((i13 | 0) == (i4 | 0)) {
     break L43;
    } else {
     i18 = i13;
    }
    while (1) {
     i13 = HEAP32[i18 >> 2] | 0;
     if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
      break;
     }
     i13 = i18 + 8 | 0;
     if ((i13 | 0) == (i4 | 0)) {
      break L43;
     } else {
      i18 = i13;
     }
    }
    if ((i18 | 0) == (i4 | 0)) {
     break;
    } else {
     i17 = i18;
    }
   }
  }
 } while (0);
 __ZN3WTF6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj(i1 + 80 | 0, HEAP32[i1 + 88 >> 2] | 0);
 __ZN3WTF6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj(i1 + 92 | 0, HEAP32[i1 + 100 >> 2] | 0);
 __ZN3WTF6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj(i1 + 104 | 0, HEAP32[i1 + 112 >> 2] | 0);
 __ZN3WTF6VectorIPN7WebCore13StyleRulePageELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj(i1 + 116 | 0, HEAP32[i1 + 124 >> 2] | 0);
 return;
}
function __ZN7WebCore7RuleSetD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 232 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 224 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 3) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i5 | 0) != 0) {
    __ZN7WebCore7RuleSetD2Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
   }
   i3 = i3 + 8 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 228 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore14RuleFeatureSetD2Ev(i1 + 136 | 0);
 i2 = i1 + 124 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 116 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 120 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 112 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = i1 + 104 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 108 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 100 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 92 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 96 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 88 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = i1 + 80 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 84 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 64 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i6 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i6 << 3) >> 2] | 0) != -1) {
      i3 = HEAP32[i2 + (i6 << 3) + 4 >> 2] | 0;
      if ((i3 | 0) == 0) {
       break;
      }
      i5 = i3 + 8 | 0;
      if ((HEAP32[i5 >> 2] | 0) != 0) {
       HEAP32[i5 >> 2] = 0;
      }
      i5 = i3 | 0;
      i7 = HEAP32[i5 >> 2] | 0;
      if ((i7 | 0) != 0) {
       HEAP32[i5 >> 2] = 0;
       HEAP32[i3 + 4 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i7);
      }
      __ZN3WTF8fastFreeEPv(i3);
     }
    } while (0);
    i6 = i6 + 1 | 0;
    if ((i6 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 44 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i6 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i6 << 3) >> 2] | 0) != -1) {
      i3 = HEAP32[i2 + (i6 << 3) + 4 >> 2] | 0;
      if ((i3 | 0) == 0) {
       break;
      }
      i7 = i3 + 8 | 0;
      if ((HEAP32[i7 >> 2] | 0) != 0) {
       HEAP32[i7 >> 2] = 0;
      }
      i7 = i3 | 0;
      i5 = HEAP32[i7 >> 2] | 0;
      if ((i5 | 0) != 0) {
       HEAP32[i7 >> 2] = 0;
       HEAP32[i3 + 4 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i5);
      }
      __ZN3WTF8fastFreeEPv(i3);
     }
    } while (0);
    i6 = i6 + 1 | 0;
    if ((i6 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 24 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i6 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i6 << 3) >> 2] | 0) != -1) {
      i3 = HEAP32[i2 + (i6 << 3) + 4 >> 2] | 0;
      if ((i3 | 0) == 0) {
       break;
      }
      i5 = i3 + 8 | 0;
      if ((HEAP32[i5 >> 2] | 0) != 0) {
       HEAP32[i5 >> 2] = 0;
      }
      i5 = i3 | 0;
      i7 = HEAP32[i5 >> 2] | 0;
      if ((i7 | 0) != 0) {
       HEAP32[i5 >> 2] = 0;
       HEAP32[i3 + 4 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i7);
      }
      __ZN3WTF8fastFreeEPv(i3);
     }
    } while (0);
    i6 = i6 + 1 | 0;
    if ((i6 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i2 + (i1 << 3) >> 2] | 0) != -1) {
     i6 = HEAP32[i2 + (i1 << 3) + 4 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     }
     i3 = i6 + 8 | 0;
     if ((HEAP32[i3 >> 2] | 0) != 0) {
      HEAP32[i3 >> 2] = 0;
     }
     i3 = i6 | 0;
     i7 = HEAP32[i3 >> 2] | 0;
     if ((i7 | 0) != 0) {
      HEAP32[i3 >> 2] = 0;
      HEAP32[i6 + 4 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i7);
     }
     __ZN3WTF8fastFreeEPv(i6);
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore7RuleSet13addChildRulesERKN3WTF6VectorINS1_6RefPtrINS_13StyleRuleBaseEEELj0ENS1_15CrashOnOverflowEEERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeEbNS_12AddRuleFlagsE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i2 + 8 | 0;
 if ((HEAP32[i11 >> 2] | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i12 = i2 | 0;
 i2 = (i4 | 0) == 0;
 i13 = (i5 | 0) == 0;
 i14 = i10 | 0;
 i15 = i4 + 240 | 0;
 i16 = i1 + 116 | 0;
 i17 = i1 + 124 | 0;
 i18 = i1 + 120 | 0;
 i19 = i16 | 0;
 i20 = i9;
 i21 = 0;
 while (1) {
  i22 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i21 << 2) >> 2] | 0;
  i23 = HEAP32[i22 + 4 >> 2] & 31;
  L6 : do {
   if ((i23 | 0) == 6) {
    i24 = i22;
    HEAP32[i9 >> 2] = i24;
    i25 = HEAP32[i17 >> 2] | 0;
    if ((i25 | 0) == (HEAP32[i18 >> 2] | 0)) {
     i26 = i25 + 1 | 0;
     i27 = HEAP32[i19 >> 2] | 0;
     do {
      if (i27 >>> 0 > i9 >>> 0) {
       i28 = 13;
      } else {
       if ((i27 + (i25 << 2) | 0) >>> 0 <= i9 >>> 0) {
        i28 = 13;
        break;
       }
       __ZN3WTF6VectorIPN7WebCore13StyleRulePageELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i16, i26);
       i29 = HEAP32[i19 >> 2] | 0;
       i30 = i29 + (i20 - i27 >> 2 << 2) | 0;
       i31 = i29;
      }
     } while (0);
     if ((i28 | 0) == 13) {
      i28 = 0;
      __ZN3WTF6VectorIPN7WebCore13StyleRulePageELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i16, i26);
      i30 = i9;
      i31 = HEAP32[i19 >> 2] | 0;
     }
     HEAP32[i31 + (HEAP32[i17 >> 2] << 2) >> 2] = HEAP32[i30 >> 2];
    } else {
     HEAP32[(HEAP32[i19 >> 2] | 0) + (i25 << 2) >> 2] = i24;
    }
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
   } else if ((i23 | 0) == 4) {
    i27 = HEAP32[i22 + 20 >> 2] | 0;
    if ((i27 | 0) != 0) {
     if (!(__ZNK7WebCore19MediaQueryEvaluator4evalEPKNS_13MediaQuerySetEPNS_13StyleResolverE(i3, i27, i4) | 0)) {
      break;
     }
    }
    __ZN7WebCore7RuleSet13addChildRulesERKN3WTF6VectorINS1_6RefPtrINS_13StyleRuleBaseEEELj0ENS1_15CrashOnOverflowEEERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeEbNS_12AddRuleFlagsE(i1, i22 + 8 | 0, i3, i4, i5, i6, i7);
   } else if ((i23 | 0) == 1) {
    i27 = i22;
    i29 = i22 + 12 | 0;
    i32 = 0;
    while (1) {
     __ZN7WebCore7RuleSet7addRuleEPNS_9StyleRuleEjNS_12AddRuleFlagsE(i1, i27, i32, i7);
     i33 = HEAP32[i29 >> 2] | 0;
     i34 = i33 + (i32 << 3) | 0;
     while (1) {
      i35 = HEAP8[i34 + 2 | 0] | 0;
      i34 = i34 + 8 | 0;
      if ((i35 & 2) != 0) {
       break;
      }
     }
     i36 = (i35 & 1) != 0 ? 0 : i34;
     if ((i36 | 0) == 0) {
      break L6;
     }
     i32 = i36 - i33 >> 3;
     if ((i32 | 0) == -1) {
      break;
     }
    }
   } else {
    if (!((i23 | 0) != 5 | i2)) {
     if (!i13) {
      break;
     }
     __ZN7WebCore15CSSFontSelector15addFontFaceRuleEPKNS_17StyleRuleFontFaceE(HEAP32[i15 >> 2] | 0, i22);
     __ZN7WebCore13StyleResolver32invalidateMatchedPropertiesCacheEv(i4);
     break;
    }
    if ((i23 | 0) != 7 | i2) {
     if (!(i13 & (((i23 | 0) != 16 | i2) ^ 1))) {
      break;
     }
     __ZN7WebCore7RuleSet13addRegionRuleEPNS_15StyleRuleRegionEb(i1, i22, i6);
     break;
    }
    if (!i13) {
     break;
    }
    HEAP32[i14 >> 2] = i22;
    if ((i22 | 0) != 0) {
     i32 = i22 | 0;
     HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
    }
    __ZN7WebCore13StyleResolver16addKeyframeStyleEN3WTF10PassRefPtrINS_18StyleRuleKeyframesEEE(i4, i10);
    i32 = HEAP32[i14 >> 2] | 0;
    if ((i32 | 0) == 0) {
     break;
    }
    i29 = i32 | 0;
    i27 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
    if ((i27 | 0) == 0) {
     __ZN7WebCore13StyleRuleBase7destroyEv(i32 | 0);
     break;
    } else {
     HEAP32[i29 >> 2] = i27;
     break;
    }
   }
  } while (0);
  i21 = i21 + 1 | 0;
  if (i21 >>> 0 >= (HEAP32[i11 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i8;
 return;
}
function __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6OwnPtrINS_6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISB_EENS_7PtrHashIS2_EENS_7HashMapIS2_SA_SF_NS_10HashTraitsIS2_EENSH_ISA_EEE18KeyValuePairTraitsESI_E3addINS_17HashMapTranslatorISL_SF_EERKS2_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS2_SB_SD_SF_SL_SI_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6OwnPtrINS_6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISB_EENS_7PtrHashIS2_EENS_7HashMapIS2_SA_SF_NS_10HashTraitsIS2_EENSH_ISA_EEE18KeyValuePairTraitsESI_E6rehashEiPSB_(i2, i7, 0) | 0;
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
   if ((i20 | 0) == 8) {
    i19 = i9 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i20 | 0) == 10) {
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
   }
  }
 } while (0);
 HEAP32[i12 >> 2] = i13;
 i13 = i12 + 4 | 0;
 i3 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 if ((i3 | 0) != 0) {
  i13 = i3 + 8 | 0;
  if ((HEAP32[i13 >> 2] | 0) != 0) {
   HEAP32[i13 >> 2] = 0;
  }
  i13 = i3 | 0;
  i21 = HEAP32[i13 >> 2] | 0;
  if ((i21 | 0) != 0) {
   HEAP32[i13 >> 2] = 0;
   HEAP32[i3 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i21);
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i2 + 12 | 0;
 i21 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i21;
 i3 = i2 + 4 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i21 << 1 | 0) < (i13 | 0)) {
  i26 = i12;
  i27 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i28 = 8;
  } else {
   i7 = i13 << 1;
   i28 = (i21 * 6 & -1 | 0) < (i7 | 0) ? i13 : i7;
  }
  i7 = __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6OwnPtrINS_6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISB_EENS_7PtrHashIS2_EENS_7HashMapIS2_SA_SF_NS_10HashTraitsIS2_EENSH_ISA_EEE18KeyValuePairTraitsESI_E6rehashEiPSB_(i2, i28, i12) | 0;
  i26 = i7;
  i27 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i4 >> 2] | 0) + (i27 << 3) | 0;
 i27 = i1;
 HEAP32[i27 >> 2] = i26;
 HEAP32[i27 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6OwnPtrINS_6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISB_EENS_7PtrHashIS2_EENS_7HashMapIS2_SA_SF_NS_10HashTraitsIS2_EENSH_ISA_EEE18KeyValuePairTraitsESI_E6rehashEiPSB_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
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
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
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
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 6;
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
   if ((i23 | 0) == 6) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i30 + 4 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i36 = i13;
   } else {
    i20 = i17 + 8 | 0;
    if ((HEAP32[i20 >> 2] | 0) != 0) {
     HEAP32[i20 >> 2] = 0;
    }
    i20 = i17 | 0;
    i19 = HEAP32[i20 >> 2] | 0;
    if ((i19 | 0) != 0) {
     HEAP32[i20 >> 2] = 0;
     HEAP32[i17 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i19);
    }
    __ZN3WTF8fastFreeEPv(i17);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
   i17 = i7 + (i10 << 3) + 4 | 0;
   i19 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i19;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i19 = i10 + 1 | 0;
  if ((i19 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i19;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i37 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i37 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 + 8 | 0;
    if ((HEAP32[i11 >> 2] | 0) != 0) {
     HEAP32[i11 >> 2] = 0;
    }
    i11 = i1 | 0;
    i10 = HEAP32[i11 >> 2] | 0;
    if ((i10 | 0) != 0) {
     HEAP32[i11 >> 2] = 0;
     HEAP32[i1 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i10);
    }
    __ZN3WTF8fastFreeEPv(i1);
   }
  } while (0);
  i2 = i37 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i37 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore7RuleSet12addToRuleSetEPN3WTF16AtomicStringImplERNS1_7HashMapIS3_NS1_6OwnPtrINS1_6VectorINS_8RuleDataELj0ENS1_15CrashOnOverflowEEEEENS1_7PtrHashIS3_EENS1_10HashTraitsIS3_EENSD_ISA_EEEERKS7_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i1 | 0;
 i6 = i1 + 8 | 0;
 i7 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = i2;
 if ((i2 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6OwnPtrINS_6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISB_EENS_7PtrHashIS2_EENS_7HashMapIS2_SA_SF_NS_10HashTraitsIS2_EENSH_ISA_EEE18KeyValuePairTraitsESI_E3addINS_17HashMapTranslatorISL_SF_EERKS2_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS2_SB_SD_SF_SL_SI_EEEEOT0_OT1_(i7, i3 | 0, i5, i6);
 i6 = (HEAP32[i7 >> 2] | 0) + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i5 = __ZN3WTF10fastMallocEj(12) | 0;
   i3 = i5;
   HEAP32[i5 >> 2] = 0;
   HEAP32[i5 + 4 >> 2] = 0;
   HEAP32[i5 + 8 >> 2] = 0;
   i5 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i3;
   if ((i5 | 0) == 0) {
    i8 = i3;
    break;
   }
   i3 = i5 + 8 | 0;
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    HEAP32[i3 >> 2] = 0;
   }
   i3 = i5 | 0;
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i3 >> 2] = 0;
    HEAP32[i5 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i2);
   }
   __ZN3WTF8fastFreeEPv(i5);
   i8 = HEAP32[i6 >> 2] | 0;
  } else {
   i8 = i7;
  }
 } while (0);
 i7 = i8 + 8 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) != (HEAP32[i8 + 4 >> 2] | 0)) {
  i5 = (HEAP32[i8 >> 2] | 0) + (i6 * 28 & -1) | 0;
  i2 = i4;
  HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  HEAP32[i5 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
  HEAP32[i5 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
  HEAP32[i5 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
  HEAP32[i5 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
  HEAP32[i5 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  STACKTOP = i1;
  return;
 }
 i2 = i6 + 1 | 0;
 i5 = i8 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if (i3 >>> 0 > i4 >>> 0) {
   i9 = 13;
  } else {
   if ((i3 + (i6 * 28 & -1) | 0) >>> 0 <= i4 >>> 0) {
    i9 = 13;
    break;
   }
   __ZN3WTF6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, i2);
   i10 = HEAP32[i5 >> 2] | 0;
   i11 = i10 + (((i4 - i3 | 0) / 28 & -1) * 28 & -1) | 0;
   i12 = i10;
  }
 } while (0);
 if ((i9 | 0) == 13) {
  __ZN3WTF6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, i2);
  i11 = i4;
  i12 = HEAP32[i5 >> 2] | 0;
 }
 i5 = i12 + ((HEAP32[i7 >> 2] | 0) * 28 & -1) | 0;
 i12 = i11;
 HEAP32[i5 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
 HEAP32[i5 + 16 >> 2] = HEAP32[i12 + 16 >> 2];
 HEAP32[i5 + 20 >> 2] = HEAP32[i12 + 20 >> 2];
 HEAP32[i5 + 24 >> 2] = HEAP32[i12 + 24 >> 2];
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 STACKTOP = i1;
 return;
}
function __ZN7WebCore7RuleSet13addRegionRuleEPNS_15StyleRuleRegionEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __ZN3WTF10fastMallocEj(236) | 0;
 i7 = i6;
 _memset(i6 | 0, 0, 132) | 0;
 HEAP8[i6 + 132 | 0] = 1;
 _memset(i6 + 136 | 0, 0, 86) | 0;
 HEAP32[i6 + 224 >> 2] = 0;
 HEAP32[i6 + 228 >> 2] = 0;
 HEAP32[i6 + 232 >> 2] = 0;
 i8 = i1 + 128 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i6 + 128 | 0;
 HEAP32[i10 >> 2] = i9;
 i6 = i3 & 1 | 6;
 i3 = i2 + 16 | 0;
 i11 = HEAP32[i3 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i12 = i9;
 } else {
  i9 = i2 + 8 | 0;
  i13 = 0;
  i14 = i11;
  while (1) {
   i11 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i13 << 2) >> 2] | 0;
   if ((HEAP32[i11 + 4 >> 2] & 31 | 0) == 1) {
    i15 = i11;
    i16 = i11 + 12 | 0;
    i11 = 0;
    while (1) {
     __ZN7WebCore7RuleSet7addRuleEPNS_9StyleRuleEjNS_12AddRuleFlagsE(i7, i15, i11, i6);
     i17 = HEAP32[i16 >> 2] | 0;
     i18 = i17 + (i11 << 3) | 0;
     while (1) {
      i19 = HEAP8[i18 + 2 | 0] | 0;
      i18 = i18 + 8 | 0;
      if ((i19 & 2) != 0) {
       break;
      }
     }
     i20 = (i19 & 1) != 0 ? 0 : i18;
     if ((i20 | 0) == 0) {
      break;
     }
     i11 = i20 - i17 >> 3;
     if ((i11 | 0) == -1) {
      break;
     }
    }
    i21 = HEAP32[i3 >> 2] | 0;
   } else {
    i21 = i14;
   }
   i11 = i13 + 1 | 0;
   if (i11 >>> 0 < i21 >>> 0) {
    i13 = i11;
    i14 = i21;
   } else {
    break;
   }
  }
  i12 = HEAP32[i10 >> 2] | 0;
 }
 HEAP32[i8 >> 2] = i12;
 i12 = i1 + 224 | 0;
 i8 = HEAP32[i2 + 20 >> 2] | 0;
 HEAP32[i5 >> 2] = i8;
 i2 = i5 + 4 | 0;
 HEAP32[i2 >> 2] = i7;
 i7 = i1 + 232 | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 if ((i10 | 0) == (HEAP32[i1 + 228 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore7RuleSet19RuleSetSelectorPairELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS3_EEvOT_(i12, i5);
 } else {
  i5 = HEAP32[i12 >> 2] | 0;
  HEAP32[i5 + (i10 << 3) >> 2] = i8;
  i8 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i5 + (i10 << 3) + 4 >> 2] = i8;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore7RuleSetD2Ev(i7);
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore7RuleSet17addRulesFromSheetEPNS_18StyleSheetContentsERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i6 = i2 + 24 | 0;
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  i7 = i2 + 16 | 0;
  i8 = 0;
  while (1) {
   i9 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i8 << 2) >> 2] | 0;
   i10 = i9 + 28 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i12 = HEAP32[i9 + 24 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i13 = i11;
     } else {
      if (!(__ZNK7WebCore19MediaQueryEvaluator4evalEPKNS_13MediaQuerySetEPNS_13StyleResolverE(i3, i12, i4) | 0)) {
       break;
      }
      i13 = HEAP32[i10 >> 2] | 0;
     }
     __ZN7WebCore7RuleSet17addRulesFromSheetEPNS_18StyleSheetContentsERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeE(i1, i13, i3, i4, i5);
    }
   } while (0);
   i8 = i8 + 1 | 0;
   if (i8 >>> 0 >= (HEAP32[i6 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 if ((i4 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = __ZNK7WebCore14SecurityOrigin10canRequestERKNS_3URLE(HEAP32[(HEAP32[i4 + 216 >> 2] | 0) + 100 >> 2] | 0, i2 + 64 | 0) | 0;
 }
 __ZN7WebCore7RuleSet13addChildRulesERKN3WTF6VectorINS1_6RefPtrINS_13StyleRuleBaseEEELj0ENS1_15CrashOnOverflowEEERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeEbNS_12AddRuleFlagsE(i1, i2 + 28 | 0, i3, i4, i5, i14, i14 & 1 | ((i5 | 0) == 0 ? 2 : 0));
 if ((HEAP8[i1 + 132 | 0] & 1) == 0) {
  return;
 }
 __ZN7WebCore7RuleSet11shrinkToFitEv(i1);
 return;
}
function __ZN3WTF6VectorIN7WebCore7RuleSet19RuleSetSelectorPairELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS3_EEvOT_(i1, i2) {
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
   if ((i7 + (i4 << 3) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore7RuleSet19RuleSetSelectorPairELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (i2 - i7 >> 3 << 3) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore7RuleSet19RuleSetSelectorPairELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i12 + (i6 << 3) >> 2] = HEAP32[i11 >> 2];
 i2 = i11 + 4 | 0;
 i11 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i12 + (i6 << 3) + 4 >> 2] = i11;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN3WTF6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (i4 >>> 0 <= i2 >>> 0) {
  return;
 }
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if (i6 >>> 0 > i2 >>> 0) {
  HEAP32[i5 >> 2] = i2;
  i7 = i2;
 } else {
  i7 = i6;
 }
 i6 = i1 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 >>> 0 > 153391689 >>> 0;
   if ((i4 | 0) == 0) {
    if (i5) {
     _WTFCrash();
    }
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 28 & -1) | 0;
    HEAP32[i3 >> 2] = (i8 >>> 0) / 28 & -1;
    i9 = __ZN3WTF10fastMallocEj(i8) | 0;
    i8 = i9;
    HEAP32[i6 >> 2] = i8;
    if ((i8 | 0) == (i1 | 0)) {
     break;
    }
    _memcpy(i9 | 0, i1 | 0, i7 * 28 & -1) | 0;
    break;
   } else {
    if (i5) {
     _WTFCrash();
    }
    i5 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 28 & -1) | 0;
    HEAP32[i3 >> 2] = (i5 >>> 0) / 28 & -1;
    HEAP32[i6 >> 2] = __ZN3WTF11fastReallocEPvj(HEAP32[i6 >> 2] | 0, i5) | 0;
    return;
   }
  }
 } while (0);
 if ((i1 | 0) == 0) {
  return;
 }
 if ((HEAP32[i6 >> 2] | 0) == (i1 | 0)) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore7RuleSet11addPageRuleEPNS_13StyleRulePageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 i5 = i1 + 116 | 0;
 i6 = i1 + 124 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != (HEAP32[i1 + 120 >> 2] | 0)) {
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i7 << 2) >> 2] = i2;
  i8 = HEAP32[i6 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i6 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
 i2 = i7 + 1 | 0;
 i1 = i5 | 0;
 i10 = HEAP32[i1 >> 2] | 0;
 do {
  if (i10 >>> 0 > i4 >>> 0) {
   i11 = 5;
  } else {
   if ((i10 + (i7 << 2) | 0) >>> 0 <= i4 >>> 0) {
    i11 = 5;
    break;
   }
   __ZN3WTF6VectorIPN7WebCore13StyleRulePageELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i2);
   i12 = HEAP32[i1 >> 2] | 0;
   i13 = i12 + (i4 - i10 >> 2 << 2) | 0;
   i14 = i12;
  }
 } while (0);
 if ((i11 | 0) == 5) {
  __ZN3WTF6VectorIPN7WebCore13StyleRulePageELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i2);
  i13 = i4;
  i14 = HEAP32[i1 >> 2] | 0;
 }
 HEAP32[i14 + (HEAP32[i6 >> 2] << 2) >> 2] = HEAP32[i13 >> 2];
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = i8 + 1 | 0;
 HEAP32[i6 >> 2] = i9;
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIPN7WebCore13StyleRulePageELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (i4 >>> 0 <= i2 >>> 0) {
  return;
 }
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if (i6 >>> 0 > i2 >>> 0) {
  HEAP32[i5 >> 2] = i2;
  i7 = i2;
 } else {
  i7 = i6;
 }
 i6 = i1 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 >>> 0 > 1073741823 >>> 0;
   if ((i4 | 0) == 0) {
    if (i5) {
     _WTFCrash();
    }
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i8 >>> 2;
    i9 = __ZN3WTF10fastMallocEj(i8) | 0;
    i8 = i9;
    HEAP32[i6 >> 2] = i8;
    if ((i8 | 0) == (i1 | 0)) {
     break;
    }
    _memcpy(i9 | 0, i1 | 0, i7 << 2) | 0;
    break;
   } else {
    if (i5) {
     _WTFCrash();
    }
    i5 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i5 >>> 2;
    HEAP32[i6 >> 2] = __ZN3WTF11fastReallocEPvj(HEAP32[i6 >> 2] | 0, i5) | 0;
    return;
   }
  }
 } while (0);
 if ((i1 | 0) == 0) {
  return;
 }
 if ((HEAP32[i6 >> 2] | 0) == (i1 | 0)) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF6VectorIN7WebCore11RuleFeatureELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
 i1 = i2 + (i6 * 12 & -1) | 0;
 if (i5 >>> 0 > 357913941 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 * 12 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 12 & -1;
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
   i8 = i6 + 12 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
    i7 = i7 + 12 | 0;
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
function __ZN3WTF6VectorIN7WebCore7RuleSet19RuleSetSelectorPairELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 << 3) | 0;
 if (i2 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
 HEAP32[i3 >> 2] = i7 >>> 3;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
   i2 = i6 + 4 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = i8;
   i8 = HEAP32[i2 >> 2] | 0;
   if ((i8 | 0) != 0) {
    __ZN7WebCore7RuleSetD2Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
   }
   i8 = i6 + 8 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
    i7 = i7 + 8 | 0;
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
function __ZN3WTF6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
 if (i5 >>> 0 > 153391689 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 * 28 & -1) | 0;
 HEAP32[i3 >> 2] = (i1 >>> 0) / 28 & -1;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 * 28 & -1) | 0;
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
function __ZN3WTF6VectorIPN7WebCore13StyleRulePageELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore14RuleFeatureSetD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 80 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 72 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 76 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 68 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 60 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 64 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore7RuleSet12addStyleRuleEPNS_9StyleRuleENS_12AddRuleFlagsE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = i2 + 12 | 0;
 i5 = 0;
 while (1) {
  __ZN7WebCore7RuleSet7addRuleEPNS_9StyleRuleEjNS_12AddRuleFlagsE(i1, i2, i5, i3);
  i6 = HEAP32[i4 >> 2] | 0;
  i7 = i6 + (i5 << 3) | 0;
  while (1) {
   i8 = HEAP8[i7 + 2 | 0] | 0;
   i7 = i7 + 8 | 0;
   if ((i8 & 2) != 0) {
    break;
   }
  }
  i9 = (i8 & 1) != 0 ? 0 : i7;
  if ((i9 | 0) == 0) {
   i10 = 7;
   break;
  }
  i11 = i9 - i6 >> 3;
  if ((i11 | 0) == -1) {
   i10 = 8;
   break;
  } else {
   i5 = i11;
  }
 }
 if ((i10 | 0) == 7) {
  return;
 } else if ((i10 | 0) == 8) {
  return;
 }
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
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore8RuleDataC2EPNS_9StyleRuleEjjNS_12AddRuleFlagsE,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN3WTF8starAtomE": __ZN3WTF8starAtomE, "__ZN7WebCore9HTMLNames8typeAttrE": __ZN7WebCore9HTMLNames8typeAttrE, "__ZN7WebCore9HTMLNames12readonlyAttrE": __ZN7WebCore9HTMLNames12readonlyAttrE, "__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE": __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore7RuleSet21findBestRuleSetAndAddEPKNS_11CSSSelectorERNS_8RuleDataE","__ZN3WTF6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore7RuleSetD2Ev","__ZN7WebCore7RuleSet12addToRuleSetEPN3WTF16AtomicStringImplERNS1_7HashMapIS3_NS1_6OwnPtrINS1_6VectorINS_8RuleDataELj0ENS1_15CrashOnOverflowEEEEENS1_7PtrHashIS3_EENS1_10HashTraitsIS3_EENSD_ISA_EEEERKS7_","__ZN3WTF6VectorIN7WebCore11RuleFeatureELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore7RuleSet13addChildRulesERKN3WTF6VectorINS1_6RefPtrINS_13StyleRuleBaseEEELj0ENS1_15CrashOnOverflowEEERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeEbNS_12AddRuleFlagsE","__ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6OwnPtrINS_6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISB_EENS_7PtrHashIS2_EENS_7HashMapIS2_SA_SF_NS_10HashTraitsIS2_EENSH_ISA_EEE18KeyValuePairTraitsESI_E6rehashEiPSB_","__ZN3WTF6VectorIN7WebCore7RuleSet19RuleSetSelectorPairELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS3_EEvOT_","_memset","__ZN7WebCore8RuleDataC2EPNS_9StyleRuleEjjNS_12AddRuleFlagsE","_memcpy","__ZN7WebCore14RuleFeatureSetD2Ev","__ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6OwnPtrINS_6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISB_EENS_7PtrHashIS2_EENS_7HashMapIS2_SA_SF_NS_10HashTraitsIS2_EENSH_ISA_EEE18KeyValuePairTraitsESI_E3addINS_17HashMapTranslatorISL_SF_EERKS2_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS2_SB_SD_SF_SL_SI_EEEEOT0_OT1_","__ZN3WTF6VectorIN7WebCore7RuleSet19RuleSetSelectorPairELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore7RuleSet17addRulesFromSheetEPNS_18StyleSheetContentsERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeE","__ZN7WebCore7RuleSet11shrinkToFitEv","__ZN7WebCore7RuleSet12addStyleRuleEPNS_9StyleRuleENS_12AddRuleFlagsE","__ZN7WebCore7RuleSet13addRegionRuleEPNS_15StyleRuleRegionEb","__ZN7WebCore7RuleSet7addRuleEPNS_9StyleRuleEjNS_12AddRuleFlagsE","__ZN3WTF6VectorIPN7WebCore13StyleRulePageELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj","__ZN3WTF6VectorIN7WebCore8RuleDataELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj","__ZN7WebCore7RuleSet11addPageRuleEPNS_13StyleRulePageE","__ZN3WTF6VectorIPN7WebCore13StyleRulePageELj0ENS_15CrashOnOverflowEE14expandCapacityEj"]

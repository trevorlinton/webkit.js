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
var __ZN7WebCore9StyleRuleC1EiN3WTF7PassRefINS_15StylePropertiesEEE;
var __ZN7WebCore9StyleRuleC1ERKS0_;
var __ZN7WebCore9StyleRuleD1Ev;
var __ZN7WebCore13StyleRulePageC1EN3WTF7PassRefINS_15StylePropertiesEEE;
var __ZN7WebCore13StyleRulePageC1ERKS0_;
var __ZN7WebCore13StyleRulePageD1Ev;
var __ZN7WebCore17StyleRuleFontFaceC1EN3WTF7PassRefINS_15StylePropertiesEEE;
var __ZN7WebCore17StyleRuleFontFaceC1ERKS0_;
var __ZN7WebCore17StyleRuleFontFaceD1Ev;
var __ZN7WebCore14StyleRuleGroupC1ENS_13StyleRuleBase4TypeERN3WTF6VectorINS3_6RefPtrIS1_EELj0ENS3_15CrashOnOverflowEEE;
var __ZN7WebCore14StyleRuleGroupC1ERKS0_;
var __ZN7WebCore14StyleRuleMediaC1EN3WTF10PassRefPtrINS_13MediaQuerySetEEERNS1_6VectorINS1_6RefPtrINS_13StyleRuleBaseEEELj0ENS1_15CrashOnOverflowEEE;
var __ZN7WebCore14StyleRuleMediaC1ERKS0_;
var __ZN7WebCore15StyleRuleRegionC1EPN3WTF6VectorINS1_6OwnPtrINS_17CSSParserSelectorEEELj0ENS1_15CrashOnOverflowEEERNS2_INS1_6RefPtrINS_13StyleRuleBaseEEELj0ES6_EE;
var __ZN7WebCore15StyleRuleRegionC1ERKS0_;
var __ZN7WebCore15StyleRuleFilterC1ERKN3WTF6StringENS1_7PassRefINS_15StylePropertiesEEE;
var __ZN7WebCore15StyleRuleFilterC1ERKS0_;
var __ZN7WebCore15StyleRuleFilterD1Ev;
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
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore9StyleRule55splitIntoMultipleRulesWithMaximumSelectorComponentCountEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 48 | 0;
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i1 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i11 = i5 + 12 | 0;
 i12 = i5 | 0;
 i13 = i5 + 4 | 0;
 i14 = i5 + 8 | 0;
 i5 = i2 + 4 | 0;
 i15 = i2 + 8 | 0;
 i16 = i6;
 i17 = 0;
 i18 = 0;
 i19 = 0;
 i20 = i10;
 L4 : while (1) {
  HEAP32[i12 >> 2] = i11;
  HEAP32[i13 >> 2] = 8;
  HEAP32[i14 >> 2] = 0;
  HEAP32[i6 >> 2] = i20;
  L6 : do {
   if ((i20 | 0) == 0) {
    i21 = 0;
   } else {
    i10 = i20;
    i22 = 0;
    i23 = 8;
    while (1) {
     if ((i22 | 0) == (i23 | 0)) {
      i24 = i23 + 1 | 0;
      i25 = HEAP32[i12 >> 2] | 0;
      do {
       if (i25 >>> 0 > i6 >>> 0) {
        i26 = 8;
       } else {
        if ((i25 + (i23 << 2) | 0) >>> 0 <= i6 >>> 0) {
         i26 = 8;
         break;
        }
        i27 = i16 - i25 >> 2;
        i28 = i24 + (i23 >>> 2) | 0;
        i29 = i28 >>> 0 > 16 >>> 0 ? i28 : 16;
        i28 = i29 >>> 0 > i24 >>> 0 ? i29 : i24;
        do {
         if (i23 >>> 0 < i28 >>> 0) {
          if (i28 >>> 0 > 8 >>> 0) {
           if (i28 >>> 0 > 1073741823 >>> 0) {
            i26 = 22;
            break L4;
           }
           i29 = __ZN3WTF18fastMallocGoodSizeEj(i28 << 2) | 0;
           HEAP32[i13 >> 2] = i29 >>> 2;
           i30 = __ZN3WTF10fastMallocEj(i29) | 0;
           HEAP32[i12 >> 2] = i30;
           i31 = i30;
          } else {
           HEAP32[i12 >> 2] = i11;
           HEAP32[i13 >> 2] = 8;
           i31 = i11;
          }
          i30 = i25;
          _memcpy(i31 | 0, i30 | 0, i23 << 2) | 0;
          if ((i11 | 0) == (i25 | 0) | (i25 | 0) == 0) {
           break;
          }
          if ((HEAP32[i12 >> 2] | 0) == (i25 | 0)) {
           HEAP32[i12 >> 2] = 0;
           HEAP32[i13 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i30);
         }
        } while (0);
        i28 = HEAP32[i12 >> 2] | 0;
        i32 = i28 + (i27 << 2) | 0;
        i33 = i28;
       }
      } while (0);
      if ((i26 | 0) == 8) {
       i26 = 0;
       i28 = i24 + (i23 >>> 2) | 0;
       i30 = i28 >>> 0 > 16 >>> 0 ? i28 : 16;
       i28 = i30 >>> 0 > i24 >>> 0 ? i30 : i24;
       do {
        if (i23 >>> 0 < i28 >>> 0) {
         if (i28 >>> 0 > 8 >>> 0) {
          if (i28 >>> 0 > 1073741823 >>> 0) {
           i26 = 11;
           break L4;
          }
          i30 = __ZN3WTF18fastMallocGoodSizeEj(i28 << 2) | 0;
          HEAP32[i13 >> 2] = i30 >>> 2;
          i29 = __ZN3WTF10fastMallocEj(i30) | 0;
          HEAP32[i12 >> 2] = i29;
          i34 = i29;
         } else {
          HEAP32[i12 >> 2] = i11;
          HEAP32[i13 >> 2] = 8;
          i34 = i11;
         }
         i29 = i25;
         _memcpy(i34 | 0, i29 | 0, i23 << 2) | 0;
         if ((i11 | 0) == (i25 | 0) | (i25 | 0) == 0) {
          break;
         }
         if ((HEAP32[i12 >> 2] | 0) == (i25 | 0)) {
          HEAP32[i12 >> 2] = 0;
          HEAP32[i13 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i29);
        }
       } while (0);
       i32 = i6;
       i33 = HEAP32[i12 >> 2] | 0;
      }
      HEAP32[i33 + (HEAP32[i14 >> 2] << 2) >> 2] = HEAP32[i32 >> 2];
      i35 = HEAP32[i14 >> 2] | 0;
     } else {
      HEAP32[(HEAP32[i12 >> 2] | 0) + (i22 << 2) >> 2] = i10;
      i35 = HEAP32[i14 >> 2] | 0;
     }
     i25 = i35 + 1 | 0;
     HEAP32[i14 >> 2] = i25;
     i28 = HEAP32[i6 >> 2] | 0;
     i24 = (HEAP8[i28 + 2 | 0] & 2) != 0 ? 0 : i28 + 8 | 0;
     HEAP32[i6 >> 2] = i24;
     if ((i24 | 0) == 0) {
      i21 = i25;
      break L6;
     }
     i10 = i24;
     i22 = i25;
     i23 = HEAP32[i13 >> 2] | 0;
    }
   }
  } while (0);
  if ((i21 + i17 | 0) >>> 0 > i3 >>> 0) {
   i23 = HEAP32[i5 >> 2] & -32;
   i22 = HEAP32[i15 >> 2] | 0;
   i10 = i22 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i10 = __ZN3WTF10fastMallocEj(i17 << 3) | 0;
   if ((i17 | 0) == 0) {
    i36 = -1;
   } else {
    i25 = 0;
    while (1) {
     __ZN7WebCore11CSSSelectorC2ERKS0_(i10 + (i25 << 3) | 0, HEAP32[i19 + (i25 << 2) >> 2] | 0);
     i25 = i25 + 1 | 0;
     if (i25 >>> 0 >= i17 >>> 0) {
      break;
     }
    }
    i36 = i17 - 1 | 0;
   }
   i25 = i10 + (i36 << 3) + 2 | 0;
   HEAP8[i25] = HEAP8[i25] | 1;
   i25 = __ZN3WTF10fastMallocEj(16) | 0;
   i24 = i25;
   HEAP32[i25 >> 2] = 1;
   HEAP32[i25 + 4 >> 2] = i23 | 1;
   HEAP32[i25 + 8 >> 2] = i22;
   HEAP32[i25 + 12 >> 2] = i10;
   i25 = HEAP32[i9 >> 2] | 0;
   if ((i25 | 0) == (HEAP32[i8 >> 2] | 0)) {
    __ZN3WTF6VectorINS_6RefPtrIN7WebCore9StyleRuleEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i25 + 1 | 0);
    i28 = HEAP32[i9 >> 2] | 0;
    HEAP32[(HEAP32[i7 >> 2] | 0) + (i28 << 2) >> 2] = i24;
    i37 = i28;
   } else {
    HEAP32[(HEAP32[i7 >> 2] | 0) + (i25 << 2) >> 2] = i24;
    i37 = i25;
   }
   HEAP32[i9 >> 2] = i37 + 1;
   do {
    if ((i18 | 0) == 0) {
     i38 = i19;
     i39 = 0;
     i40 = i17;
    } else {
     if ((i19 | 0) == 0) {
      i38 = 0;
      i39 = i18;
      i40 = 0;
      break;
     }
     __ZN3WTF8fastFreeEPv(i19);
     i38 = 0;
     i39 = 0;
     i40 = 0;
    }
   } while (0);
   i41 = i38;
   i42 = i39;
   i43 = i40;
   i44 = HEAP32[i14 >> 2] | 0;
  } else {
   i41 = i19;
   i42 = i18;
   i43 = i17;
   i44 = i21;
  }
  i10 = HEAP32[i12 >> 2] | 0;
  i22 = _llvm_uadd_with_overflow_i32(i43 | 0, i44 | 0) | 0;
  i23 = tempRet0;
  i45 = i22;
  do {
   if (i45 >>> 0 > i42 >>> 0) {
    i22 = i42 + 1 + (i42 >>> 2) | 0;
    i25 = i22 >>> 0 > 16 >>> 0 ? i22 : 16;
    i22 = i25 >>> 0 > i45 >>> 0 ? i25 : i45;
    if (i42 >>> 0 >= i22 >>> 0) {
     i46 = i41;
     i47 = i42;
     break;
    }
    if (i22 >>> 0 > 1073741823 >>> 0) {
     i26 = 47;
     break L4;
    }
    i25 = __ZN3WTF18fastMallocGoodSizeEj(i22 << 2) | 0;
    i22 = i25 >>> 2;
    i24 = __ZN3WTF10fastMallocEj(i25) | 0;
    i25 = i24;
    i28 = i41;
    _memcpy(i24 | 0, i28 | 0, i43 << 2) | 0;
    if ((i41 | 0) == 0) {
     i46 = i25;
     i47 = i22;
     break;
    }
    i24 = (i25 | 0) == (i41 | 0);
    __ZN3WTF8fastFreeEPv(i28);
    i46 = i24 ? 0 : i25;
    i47 = i24 ? 0 : i22;
   } else {
    i46 = i41;
    i47 = i42;
   }
  } while (0);
  if (i23) {
   i26 = 51;
   break;
  }
  if ((i44 | 0) != 0) {
   i22 = 0;
   while (1) {
    HEAP32[i46 + (i22 + i43 << 2) >> 2] = HEAP32[i10 + (i22 << 2) >> 2];
    i22 = i22 + 1 | 0;
    if (i22 >>> 0 >= i44 >>> 0) {
     break;
    }
   }
  }
  if ((HEAP32[i14 >> 2] | 0) != 0) {
   HEAP32[i14 >> 2] = 0;
  }
  i22 = HEAP32[i12 >> 2] | 0;
  if ((i11 | 0) == (i22 | 0) | (i22 | 0) == 0) {
   i48 = i20;
  } else {
   HEAP32[i12 >> 2] = 0;
   HEAP32[i13 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i22);
   i48 = i20;
  }
  while (1) {
   i49 = HEAP8[i48 + 2 | 0] | 0;
   i48 = i48 + 8 | 0;
   if ((i49 & 2) != 0) {
    break;
   }
  }
  i22 = (i49 & 1) != 0 ? 0 : i48;
  if ((i22 | 0) == 0) {
   i26 = 60;
   break;
  } else {
   i17 = i45;
   i18 = i47;
   i19 = i46;
   i20 = i22;
  }
 }
 if ((i26 | 0) == 22) {
  _WTFCrash();
 } else if ((i26 | 0) == 51) {
  _WTFCrash();
 } else if ((i26 | 0) == 47) {
  _WTFCrash();
 } else if ((i26 | 0) == 11) {
  _WTFCrash();
 } else if ((i26 | 0) == 60) {
  do {
   if ((i45 | 0) != 0) {
    i26 = HEAP32[i2 + 4 >> 2] | 0;
    i20 = HEAP32[i2 + 8 >> 2] | 0;
    i19 = i20 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
    i19 = __ZN3WTF10fastMallocEj(i45 << 3) | 0;
    i47 = 0;
    while (1) {
     __ZN7WebCore11CSSSelectorC2ERKS0_(i19 + (i47 << 3) | 0, HEAP32[i46 + (i47 << 2) >> 2] | 0);
     i47 = i47 + 1 | 0;
     if (i47 >>> 0 >= i45 >>> 0) {
      break;
     }
    }
    i47 = i19 + (i45 - 1 << 3) + 2 | 0;
    HEAP8[i47] = HEAP8[i47] | 1;
    i47 = __ZN3WTF10fastMallocEj(16) | 0;
    i18 = i47;
    HEAP32[i47 >> 2] = 1;
    HEAP32[i47 + 4 >> 2] = i26 & -32 | 1;
    HEAP32[i47 + 8 >> 2] = i20;
    HEAP32[i47 + 12 >> 2] = i19;
    i47 = HEAP32[i9 >> 2] | 0;
    if ((i47 | 0) == (HEAP32[i8 >> 2] | 0)) {
     __ZN3WTF6VectorINS_6RefPtrIN7WebCore9StyleRuleEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i47 + 1 | 0);
     i17 = HEAP32[i9 >> 2] | 0;
     HEAP32[(HEAP32[i7 >> 2] | 0) + (i17 << 2) >> 2] = i18;
     HEAP32[i9 >> 2] = i17 + 1;
     break;
    } else {
     HEAP32[(HEAP32[i7 >> 2] | 0) + (i47 << 2) >> 2] = i18;
     HEAP32[i9 >> 2] = i47 + 1;
     break;
    }
   }
  } while (0);
  if ((i46 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3WTF8fastFreeEPv(i46);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore13StyleRuleBase7destroyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 switch (HEAP32[i1 + 4 >> 2] & 31 | 0) {
 case 1:
  {
   __ZN7WebCore15CSSSelectorListD1Ev(i1 + 12 | 0);
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   do {
    if ((i4 | 0) == 0) {
     if ((HEAP32[i2 + 4 >> 2] & 4 | 0) == 0) {
      __ZN7WebCore24ImmutableStylePropertiesD1Ev(i2);
      __ZN3WTF8fastFreeEPv(i2);
      break;
     } else {
      __ZN7WebCore22MutableStylePropertiesD1Ev(i2);
      __ZN3WTF8fastFreeEPv(i2);
      break;
     }
    } else {
     HEAP32[i3 >> 2] = i4;
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 6:
  {
   __ZN7WebCore15CSSSelectorListD1Ev(i1 + 12 | 0);
   i4 = HEAP32[i1 + 8 >> 2] | 0;
   i3 = i4 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   do {
    if ((i2 | 0) == 0) {
     if ((HEAP32[i4 + 4 >> 2] & 4 | 0) == 0) {
      __ZN7WebCore24ImmutableStylePropertiesD1Ev(i4);
      __ZN3WTF8fastFreeEPv(i4);
      break;
     } else {
      __ZN7WebCore22MutableStylePropertiesD1Ev(i4);
      __ZN3WTF8fastFreeEPv(i4);
      break;
     }
    } else {
     HEAP32[i3 >> 2] = i2;
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 5:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   do {
    if ((i4 | 0) == 0) {
     if ((HEAP32[i2 + 4 >> 2] & 4 | 0) == 0) {
      __ZN7WebCore24ImmutableStylePropertiesD1Ev(i2);
      __ZN3WTF8fastFreeEPv(i2);
      break;
     } else {
      __ZN7WebCore22MutableStylePropertiesD1Ev(i2);
      __ZN3WTF8fastFreeEPv(i2);
      break;
     }
    } else {
     HEAP32[i3 >> 2] = i4;
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 4:
  {
   i4 = HEAP32[i1 + 20 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i3 = i4 | 0;
     i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     if ((i2 | 0) == 0) {
      __ZN7WebCore13MediaQuerySetD1Ev(i4);
      __ZN3WTF8fastFreeEPv(i4);
      break;
     } else {
      HEAP32[i3 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i4 = i1 + 8 | 0;
   i2 = i1 + 16 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   i5 = i4;
   if ((i3 | 0) != 0) {
    i6 = HEAP32[i5 >> 2] | 0;
    i7 = i6 + (i3 << 2) | 0;
    i3 = i6;
    while (1) {
     i6 = HEAP32[i3 >> 2] | 0;
     do {
      if ((i6 | 0) != 0) {
       i8 = i6 | 0;
       i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
       if ((i9 | 0) == 0) {
        __ZN7WebCore13StyleRuleBase7destroyEv(i6);
        break;
       } else {
        HEAP32[i8 >> 2] = i9;
        break;
       }
      }
     } while (0);
     i3 = i3 + 4 | 0;
     if ((i3 | 0) == (i7 | 0)) {
      break;
     }
    }
    HEAP32[i2 >> 2] = 0;
   }
   i2 = HEAP32[i5 >> 2] | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
    HEAP32[i1 + 12 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i2);
   }
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 16:
  {
   __ZN7WebCore15CSSSelectorListD1Ev(i1 + 20 | 0);
   i2 = i1 + 8 | 0;
   i4 = i1 + 16 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   i7 = i2;
   if ((i5 | 0) != 0) {
    i3 = HEAP32[i7 >> 2] | 0;
    i6 = i3 + (i5 << 2) | 0;
    i5 = i3;
    while (1) {
     i3 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i3 | 0) != 0) {
       i9 = i3 | 0;
       i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
       if ((i8 | 0) == 0) {
        __ZN7WebCore13StyleRuleBase7destroyEv(i3);
        break;
       } else {
        HEAP32[i9 >> 2] = i8;
        break;
       }
      }
     } while (0);
     i5 = i5 + 4 | 0;
     if ((i5 | 0) == (i6 | 0)) {
      break;
     }
    }
    HEAP32[i4 >> 2] = 0;
   }
   i4 = HEAP32[i7 >> 2] | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = 0;
    HEAP32[i1 + 12 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 3:
  {
   __ZN7WebCore15StyleRuleImportD1Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 7:
  {
   __ZN7WebCore18StyleRuleKeyframesD1Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 17:
  {
   __ZN7WebCore15StyleRuleFilterD2Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 default:
  {
   return;
  }
 }
}
function __ZNK7WebCore13StyleRuleBase4copyEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i2 + 4 | 0;
 switch (HEAP32[i8 >> 2] & 31 | 0) {
 case 1:
  {
   i9 = __ZN3WTF10fastMallocEj(16) | 0;
   HEAP32[i9 >> 2] = 1;
   i10 = HEAP32[i8 >> 2] & 31;
   i11 = i9 + 4 | 0;
   HEAP32[i11 >> 2] = HEAP32[i11 >> 2] & -32 | i10;
   HEAP32[i11 >> 2] = HEAP32[i8 >> 2] & -32 | i10;
   __ZNK7WebCore15StyleProperties11mutableCopyEv(i6, HEAP32[i2 + 8 >> 2] | 0);
   HEAP32[i9 + 8 >> 2] = HEAP32[i6 >> 2];
   __ZN7WebCore15CSSSelectorListC1ERKS0_(i9 + 12 | 0, i2 + 12 | 0);
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i3;
   return;
  }
 case 6:
  {
   i9 = __ZN3WTF10fastMallocEj(16) | 0;
   HEAP32[i9 >> 2] = 1;
   i6 = HEAP32[i8 >> 2] & 31;
   i10 = i9 + 4 | 0;
   HEAP32[i10 >> 2] = HEAP32[i10 >> 2] & -32 | i6;
   HEAP32[i10 >> 2] = HEAP32[i8 >> 2] & -32 | i6;
   __ZNK7WebCore15StyleProperties11mutableCopyEv(i5, HEAP32[i2 + 8 >> 2] | 0);
   HEAP32[i9 + 8 >> 2] = HEAP32[i5 >> 2];
   __ZN7WebCore15CSSSelectorListC1ERKS0_(i9 + 12 | 0, i2 + 12 | 0);
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i3;
   return;
  }
 case 5:
  {
   i9 = __ZN3WTF10fastMallocEj(12) | 0;
   HEAP32[i9 >> 2] = 1;
   i5 = HEAP32[i8 >> 2] & 31;
   i6 = i9 + 4 | 0;
   HEAP32[i6 >> 2] = HEAP32[i6 >> 2] & -32 | i5;
   HEAP32[i6 >> 2] = HEAP32[i8 >> 2] & -32 | i5;
   __ZNK7WebCore15StyleProperties11mutableCopyEv(i4, HEAP32[i2 + 8 >> 2] | 0);
   HEAP32[i9 + 8 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i3;
   return;
  }
 case 4:
  {
   i9 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN7WebCore14StyleRuleMediaC2ERKS0_(i9, i2);
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i3;
   return;
  }
 case 16:
  {
   i9 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN7WebCore14StyleRuleGroupC2ERKS0_(i9, i2);
   __ZN7WebCore15CSSSelectorListC1ERKS0_(i9 + 20 | 0, i2 + 20 | 0);
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i3;
   return;
  }
 case 7:
  {
   i9 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN7WebCore18StyleRuleKeyframesC1ERKS0_(i9, i2);
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i3;
   return;
  }
 case 17:
  {
   i9 = __ZN3WTF10fastMallocEj(16) | 0;
   HEAP32[i9 >> 2] = 1;
   i4 = HEAP32[i8 >> 2] & 31;
   i5 = i9 + 4 | 0;
   HEAP32[i5 >> 2] = HEAP32[i5 >> 2] & -32 | i4;
   HEAP32[i5 >> 2] = HEAP32[i8 >> 2] & -32 | i4;
   i4 = HEAP32[i2 + 8 >> 2] | 0;
   HEAP32[i9 + 8 >> 2] = i4;
   if ((i4 | 0) != 0) {
    i8 = i4 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   __ZNK7WebCore15StyleProperties11mutableCopyEv(i7, HEAP32[i2 + 12 >> 2] | 0);
   HEAP32[i9 + 12 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i3;
   return;
  }
 default:
  {
   _WTFCrash();
  }
 }
}
function __ZNK7WebCore13StyleRuleBase18createCSSOMWrapperEPNS_13CSSStyleSheetEPNS_7CSSRuleE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 switch (HEAP32[i2 + 4 >> 2] & 31 | 0) {
 case 1:
  {
   i5 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN7WebCore12CSSStyleRuleC1EPNS_9StyleRuleEPNS_13CSSStyleSheetE(i5, i2, i3);
   i6 = i5;
   break;
  }
 case 6:
  {
   i5 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN7WebCore11CSSPageRuleC1EPNS_13StyleRulePageEPNS_13CSSStyleSheetE(i5, i2, i3);
   i6 = i5;
   break;
  }
 case 5:
  {
   i5 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN7WebCore15CSSFontFaceRuleC1EPNS_17StyleRuleFontFaceEPNS_13CSSStyleSheetE(i5, i2, i3);
   i6 = i5;
   break;
  }
 case 4:
  {
   i5 = __ZN3WTF10fastMallocEj(40) | 0;
   __ZN7WebCore12CSSMediaRuleC1EPNS_14StyleRuleMediaEPNS_13CSSStyleSheetE(i5, i2, i3);
   i6 = i5;
   break;
  }
 case 16:
  {
   i5 = __ZN3WTF10fastMallocEj(36) | 0;
   __ZN7WebCore19WebKitCSSRegionRuleC1EPNS_15StyleRuleRegionEPNS_13CSSStyleSheetE(i5, i2, i3);
   i6 = i5;
   break;
  }
 case 3:
  {
   i5 = __ZN3WTF10fastMallocEj(28) | 0;
   __ZN7WebCore13CSSImportRuleC1EPNS_15StyleRuleImportEPNS_13CSSStyleSheetE(i5, i2, i3);
   i6 = i5;
   break;
  }
 case 7:
  {
   i5 = __ZN3WTF10fastMallocEj(36) | 0;
   __ZN7WebCore22WebKitCSSKeyframesRuleC1EPNS_18StyleRuleKeyframesEPNS_13CSSStyleSheetE(i5, i2, i3);
   i6 = i5;
   break;
  }
 case 17:
  {
   i5 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN7WebCore19WebKitCSSFilterRuleC1EPNS_15StyleRuleFilterEPNS_13CSSStyleSheetE(i5, i2, i3);
   i6 = i5;
   break;
  }
 case 0:
 case 2:
 case 8:
  {
   HEAP32[i1 >> 2] = 0;
   return;
  }
 default:
  {
   i6 = 0;
  }
 }
 if ((i4 | 0) != 0) {
  i5 = i6 + 8 | 0;
  HEAP8[i5] = HEAP8[i5] | 2;
  HEAP32[i6 + 12 >> 2] = i4;
 }
 HEAP32[i1 >> 2] = i6;
 return;
}
function __ZN7WebCore14StyleRuleGroupC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 i5 = i2 + 4 | 0;
 i6 = HEAP32[i5 >> 2] & 31;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & -32 | i6;
 HEAP32[i7 >> 2] = HEAP32[i5 >> 2] & -32 | i6;
 i6 = i1 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 i5 = i1 + 12 | 0;
 HEAP32[i5 >> 2] = 0;
 i7 = i1 + 16 | 0;
 HEAP32[i7 >> 2] = 0;
 i1 = i2 + 16 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if (i8 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i9 = __ZN3WTF18fastMallocGoodSizeEj(i8 << 2) | 0;
 HEAP32[i5 >> 2] = i9 >>> 2;
 HEAP32[i6 >> 2] = __ZN3WTF10fastMallocEj(i9) | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i2 + 8 | 0;
 i2 = i4 | 0;
 i8 = 0;
 i10 = i9;
 while (1) {
  if (i10 >>> 0 <= i8 >>> 0) {
   i11 = 7;
   break;
  }
  __ZNK7WebCore13StyleRuleBase4copyEv(i4, HEAP32[(HEAP32[i5 >> 2] | 0) + (i8 << 2) >> 2] | 0);
  HEAP32[(HEAP32[i6 >> 2] | 0) + (HEAP32[i7 >> 2] << 2) >> 2] = HEAP32[i2 >> 2];
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  i12 = i8 + 1 | 0;
  if (i12 >>> 0 >= i9 >>> 0) {
   i11 = 13;
   break;
  }
  i8 = i12;
  i10 = HEAP32[i1 >> 2] | 0;
 }
 if ((i11 | 0) == 13) {
  STACKTOP = i3;
  return;
 } else if ((i11 | 0) == 7) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore14StyleRuleGroupC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 i5 = i2 + 4 | 0;
 i6 = HEAP32[i5 >> 2] & 31;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & -32 | i6;
 HEAP32[i7 >> 2] = HEAP32[i5 >> 2] & -32 | i6;
 i6 = i1 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 i5 = i1 + 12 | 0;
 HEAP32[i5 >> 2] = 0;
 i7 = i1 + 16 | 0;
 HEAP32[i7 >> 2] = 0;
 i1 = i2 + 16 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if (i8 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i9 = __ZN3WTF18fastMallocGoodSizeEj(i8 << 2) | 0;
 HEAP32[i5 >> 2] = i9 >>> 2;
 HEAP32[i6 >> 2] = __ZN3WTF10fastMallocEj(i9) | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i2 + 8 | 0;
 i2 = i4 | 0;
 i8 = 0;
 i10 = i9;
 while (1) {
  if (i10 >>> 0 <= i8 >>> 0) {
   i11 = 7;
   break;
  }
  __ZNK7WebCore13StyleRuleBase4copyEv(i4, HEAP32[(HEAP32[i5 >> 2] | 0) + (i8 << 2) >> 2] | 0);
  HEAP32[(HEAP32[i6 >> 2] | 0) + (HEAP32[i7 >> 2] << 2) >> 2] = HEAP32[i2 >> 2];
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  i12 = i8 + 1 | 0;
  if (i12 >>> 0 >= i9 >>> 0) {
   i11 = 13;
   break;
  }
  i8 = i12;
  i10 = HEAP32[i1 >> 2] | 0;
 }
 if ((i11 | 0) == 13) {
  STACKTOP = i3;
  return;
 } else if ((i11 | 0) == 7) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore11CSSSelectorC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i2;
 i4 = i1;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5 & -8 | HEAP32[i3 >> 2] & 7;
 HEAP32[i4 >> 2] = i6;
 i7 = i6 & -121 | HEAP32[i3 >> 2] & 120;
 HEAP32[i4 >> 2] = i7;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i4 >> 2] = i7 & -32641 | i6 & 32640;
 i7 = i2 | 0;
 i4 = i1 | 0;
 HEAP8[i4 + 1 | 0] = i6 >>> 8 & 127 | HEAP8[i7 + 1 | 0] & -128;
 i6 = i7 + 2 | 0;
 i7 = i4 + 2 | 0;
 i4 = i5 >>> 16 & 255 & -2 | HEAP8[i6] & 1;
 HEAP8[i7] = i4;
 i5 = i4 & -3 | HEAP8[i6] & 2;
 HEAP8[i7] = i5;
 i4 = i5 & -5 | HEAP8[i6] & 4;
 HEAP8[i7] = i4;
 i5 = i4 & -9 | HEAP8[i6] & 8;
 HEAP8[i7] = i5;
 HEAP8[i7] = i5 & -17 | HEAP8[i6] & 16;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 if ((HEAP32[i3 >> 2] & 120 | 0) == 8) {
  i3 = HEAP32[i2 + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = i3;
  i1 = i3 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  return;
 }
 i1 = i2 + 4 | 0;
 if ((HEAP8[i6] & 4) != 0) {
  i6 = HEAP32[i1 >> 2] | 0;
  HEAP32[i5 >> 2] = i6;
  i2 = i6 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
  return;
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i5 >> 2] = i2;
 i5 = i2 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 return;
}
function __ZN7WebCore9StyleRule6createEiRKN3WTF6VectorIPKNS_11CSSSelectorELj0ENS1_15CrashOnOverflowEEENS1_7PassRefINS_15StylePropertiesEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i3 + 8 | 0;
 i7 = __ZN3WTF10fastMallocEj(HEAP32[i6 >> 2] << 3) | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  i8 = -1;
 } else {
  i9 = i3 | 0;
  i3 = 0;
  while (1) {
   __ZN7WebCore11CSSSelectorC2ERKS0_(i7 + (i3 << 3) | 0, HEAP32[(HEAP32[i9 >> 2] | 0) + (i3 << 2) >> 2] | 0);
   i3 = i3 + 1 | 0;
   i10 = HEAP32[i6 >> 2] | 0;
   if (i3 >>> 0 >= i10 >>> 0) {
    break;
   }
  }
  i8 = i10 - 1 | 0;
 }
 i10 = i7 + (i8 << 3) + 2 | 0;
 HEAP8[i10] = HEAP8[i10] | 1;
 i10 = HEAP32[i4 >> 2] | 0;
 i4 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i4 >> 2] = 1;
 HEAP32[i4 + 4 >> 2] = i2 << 5 | 1;
 HEAP32[i4 + 8 >> 2] = i10;
 HEAP32[i1 >> 2] = i4;
 HEAP32[i4 + 12 >> 2] = i7;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17StyleRuleFontFace17mutablePropertiesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 8 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i1 + 4 >> 2] & 4 | 0) != 0) {
  i5 = i1;
  i6 = i5;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZNK7WebCore15StyleProperties11mutableCopyEv(i3, i1);
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i7 = i3 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 do {
  if ((i8 | 0) == 0) {
   if ((HEAP32[i3 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   }
  } else {
   HEAP32[i7 >> 2] = i8;
  }
 } while (0);
 i8 = i1 | 0;
 HEAP32[i4 >> 2] = i8;
 i5 = i8;
 i6 = i5;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN7WebCore15StyleRuleFilter17mutablePropertiesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 12 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i1 + 4 >> 2] & 4 | 0) != 0) {
  i5 = i1;
  i6 = i5;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZNK7WebCore15StyleProperties11mutableCopyEv(i3, i1);
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i7 = i3 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 do {
  if ((i8 | 0) == 0) {
   if ((HEAP32[i3 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   }
  } else {
   HEAP32[i7 >> 2] = i8;
  }
 } while (0);
 i8 = i1 | 0;
 HEAP32[i4 >> 2] = i8;
 i5 = i8;
 i6 = i5;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN7WebCore13StyleRulePage17mutablePropertiesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 8 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i1 + 4 >> 2] & 4 | 0) != 0) {
  i5 = i1;
  i6 = i5;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZNK7WebCore15StyleProperties11mutableCopyEv(i3, i1);
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i7 = i3 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 do {
  if ((i8 | 0) == 0) {
   if ((HEAP32[i3 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   }
  } else {
   HEAP32[i7 >> 2] = i8;
  }
 } while (0);
 i8 = i1 | 0;
 HEAP32[i4 >> 2] = i8;
 i5 = i8;
 i6 = i5;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN7WebCore9StyleRule17mutablePropertiesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 8 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i1 + 4 >> 2] & 4 | 0) != 0) {
  i5 = i1;
  i6 = i5;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZNK7WebCore15StyleProperties11mutableCopyEv(i3, i1);
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i7 = i3 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 do {
  if ((i8 | 0) == 0) {
   if ((HEAP32[i3 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   }
  } else {
   HEAP32[i7 >> 2] = i8;
  }
 } while (0);
 i8 = i1 | 0;
 HEAP32[i4 >> 2] = i8;
 i5 = i8;
 i6 = i5;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN7WebCore15StyleRuleRegionC2EPN3WTF6VectorINS1_6OwnPtrINS_17CSSParserSelectorEEELj0ENS1_15CrashOnOverflowEEERNS2_INS1_6RefPtrINS_13StyleRuleBaseEEELj0ES6_EE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 16;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 12 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 16 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i3 + 8 | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = 0;
 i7 = i3 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = i6;
 i6 = i3 + 4 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = i3;
 i3 = i1 + 20 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore15CSSSelectorList19adoptSelectorVectorERN3WTF6VectorINS1_6OwnPtrINS_17CSSParserSelectorEEELj0ENS1_15CrashOnOverflowEEE(i3, i2);
 return;
}
function __ZN7WebCore15StyleRuleRegionC1EPN3WTF6VectorINS1_6OwnPtrINS_17CSSParserSelectorEEELj0ENS1_15CrashOnOverflowEEERNS2_INS1_6RefPtrINS_13StyleRuleBaseEEELj0ES6_EE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 16;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 12 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 16 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i3 + 8 | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = 0;
 i7 = i3 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = i6;
 i6 = i3 + 4 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = i3;
 i3 = i1 + 20 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore15CSSSelectorList19adoptSelectorVectorERN3WTF6VectorINS1_6OwnPtrINS_17CSSParserSelectorEEELj0ENS1_15CrashOnOverflowEEE(i3, i2);
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore13StyleRuleBaseEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore9StyleRuleEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore14StyleRuleGroup17wrapperInsertRuleEjN3WTF7PassRefINS_13StyleRuleBaseEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i1 + 8 | 0;
 i6 = i1 + 16 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore13StyleRuleBaseEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7 + 1 | 0);
  i8 = HEAP32[i6 >> 2] | 0;
 } else {
  i8 = i7;
 }
 i7 = HEAP32[i5 >> 2] | 0;
 i5 = i7 + (i2 << 2) | 0;
 _memmove(i7 + (i2 + 1 << 2) | 0, i5 | 0, i8 - i2 << 2 | 0) | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14StyleRuleMediaC2EN3WTF10PassRefPtrINS_13MediaQuerySetEEERNS1_6VectorINS1_6RefPtrINS_13StyleRuleBaseEEELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 4;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 12 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 16 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i3 + 8 | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = 0;
 i7 = i3 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = i6;
 i6 = i3 + 4 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = i3;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = i2;
 return;
}
function __ZN7WebCore14StyleRuleMediaC1EN3WTF10PassRefPtrINS_13MediaQuerySetEEERNS1_6VectorINS1_6RefPtrINS_13StyleRuleBaseEEELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 4;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 12 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 16 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i3 + 8 | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = 0;
 i7 = i3 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = i6;
 i6 = i3 + 4 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = i3;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = i2;
 return;
}
function __ZN7WebCore15StyleRuleFilterD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 do {
  if ((i4 | 0) == 0) {
   if ((HEAP32[i2 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   }
  } else {
   HEAP32[i3 >> 2] = i4;
  }
 } while (0);
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore15StyleRuleFilterD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 do {
  if ((i4 | 0) == 0) {
   if ((HEAP32[i2 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   }
  } else {
   HEAP32[i3 >> 2] = i4;
  }
 } while (0);
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore14StyleRuleGroup17wrapperRemoveRuleEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + (i2 << 2) | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore13StyleRuleBase7destroyEv(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i6 = i4 + (i2 + 1 << 2) | 0;
 i2 = i1 + 16 | 0;
 _memmove(i5 | 0, i6 | 0, (HEAP32[i3 >> 2] | 0) + (HEAP32[i2 >> 2] << 2) - i6 | 0) | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - 1;
 return;
}
function __ZN7WebCore14StyleRuleGroupC2ENS_13StyleRuleBase4TypeERN3WTF6VectorINS3_6RefPtrIS1_EELj0ENS3_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2 & 31;
 i2 = i1 + 8 | 0;
 HEAP32[i2 >> 2] = 0;
 i4 = i1 + 12 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = 0;
 i1 = i3 + 8 | 0;
 HEAP32[i5 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = 0;
 i1 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = i5;
 i5 = i3 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i5 >> 2] = i3;
 return;
}
function __ZN7WebCore14StyleRuleGroupC1ENS_13StyleRuleBase4TypeERN3WTF6VectorINS3_6RefPtrIS1_EELj0ENS3_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2 & 31;
 i2 = i1 + 8 | 0;
 HEAP32[i2 >> 2] = 0;
 i4 = i1 + 12 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = 0;
 i1 = i3 + 8 | 0;
 HEAP32[i5 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = 0;
 i1 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = i5;
 i5 = i3 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i5 >> 2] = i3;
 return;
}
function __ZN7WebCore15StyleRuleFilterC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 i5 = i2 + 4 | 0;
 i6 = HEAP32[i5 >> 2] & 31;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & -32 | i6;
 HEAP32[i7 >> 2] = HEAP32[i5 >> 2] & -32 | i6;
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i5 = i6 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 __ZNK7WebCore15StyleProperties11mutableCopyEv(i4, HEAP32[i2 + 12 >> 2] | 0);
 HEAP32[i1 + 12 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15StyleRuleFilterC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 i5 = i2 + 4 | 0;
 i6 = HEAP32[i5 >> 2] & 31;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & -32 | i6;
 HEAP32[i7 >> 2] = HEAP32[i5 >> 2] & -32 | i6;
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i5 = i6 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 __ZNK7WebCore15StyleProperties11mutableCopyEv(i4, HEAP32[i2 + 12 >> 2] | 0);
 HEAP32[i1 + 12 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14StyleRuleMediaC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 __ZN7WebCore14StyleRuleGroupC2ERKS0_(i1 | 0, i2 | 0);
 i3 = i1 + 20 | 0;
 HEAP32[i3 >> 2] = 0;
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 __ZN7WebCore13MediaQuerySetC1ERKS0_(i2, i1);
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore13MediaQuerySetD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore14StyleRuleMediaC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 __ZN7WebCore14StyleRuleGroupC2ERKS0_(i1 | 0, i2 | 0);
 i3 = i1 + 20 | 0;
 HEAP32[i3 >> 2] = 0;
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 __ZN7WebCore13MediaQuerySetC1ERKS0_(i2, i1);
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore13MediaQuerySetD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore13StyleRulePageC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 i5 = i2 + 4 | 0;
 i6 = HEAP32[i5 >> 2] & 31;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & -32 | i6;
 HEAP32[i7 >> 2] = HEAP32[i5 >> 2] & -32 | i6;
 __ZNK7WebCore15StyleProperties11mutableCopyEv(i4, HEAP32[i2 + 8 >> 2] | 0);
 HEAP32[i1 + 8 >> 2] = HEAP32[i4 >> 2];
 __ZN7WebCore15CSSSelectorListC1ERKS0_(i1 + 12 | 0, i2 + 12 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13StyleRulePageC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 i5 = i2 + 4 | 0;
 i6 = HEAP32[i5 >> 2] & 31;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & -32 | i6;
 HEAP32[i7 >> 2] = HEAP32[i5 >> 2] & -32 | i6;
 __ZNK7WebCore15StyleProperties11mutableCopyEv(i4, HEAP32[i2 + 8 >> 2] | 0);
 HEAP32[i1 + 8 >> 2] = HEAP32[i4 >> 2];
 __ZN7WebCore15CSSSelectorListC1ERKS0_(i1 + 12 | 0, i2 + 12 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9StyleRuleC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 i5 = i2 + 4 | 0;
 i6 = HEAP32[i5 >> 2] & 31;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & -32 | i6;
 HEAP32[i7 >> 2] = HEAP32[i5 >> 2] & -32 | i6;
 __ZNK7WebCore15StyleProperties11mutableCopyEv(i4, HEAP32[i2 + 8 >> 2] | 0);
 HEAP32[i1 + 8 >> 2] = HEAP32[i4 >> 2];
 __ZN7WebCore15CSSSelectorListC1ERKS0_(i1 + 12 | 0, i2 + 12 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9StyleRuleC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 i5 = i2 + 4 | 0;
 i6 = HEAP32[i5 >> 2] & 31;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & -32 | i6;
 HEAP32[i7 >> 2] = HEAP32[i5 >> 2] & -32 | i6;
 __ZNK7WebCore15StyleProperties11mutableCopyEv(i4, HEAP32[i2 + 8 >> 2] | 0);
 HEAP32[i1 + 8 >> 2] = HEAP32[i4 >> 2];
 __ZN7WebCore15CSSSelectorListC1ERKS0_(i1 + 12 | 0, i2 + 12 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15StyleRuleFilterC2ERKN3WTF6StringENS1_7PassRefINS_15StylePropertiesEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 17;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 12 >> 2] = HEAP32[i3 >> 2];
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15StyleRuleFilterC1ERKN3WTF6StringENS1_7PassRefINS_15StylePropertiesEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 17;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 12 >> 2] = HEAP32[i3 >> 2];
 STACKTOP = i4;
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
function __ZN7WebCore17StyleRuleFontFaceC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 i5 = i2 + 4 | 0;
 i6 = HEAP32[i5 >> 2] & 31;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & -32 | i6;
 HEAP32[i7 >> 2] = HEAP32[i5 >> 2] & -32 | i6;
 __ZNK7WebCore15StyleProperties11mutableCopyEv(i4, HEAP32[i2 + 8 >> 2] | 0);
 HEAP32[i1 + 8 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17StyleRuleFontFaceC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 i5 = i2 + 4 | 0;
 i6 = HEAP32[i5 >> 2] & 31;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & -32 | i6;
 HEAP32[i7 >> 2] = HEAP32[i5 >> 2] & -32 | i6;
 __ZNK7WebCore15StyleProperties11mutableCopyEv(i4, HEAP32[i2 + 8 >> 2] | 0);
 HEAP32[i1 + 8 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13StyleRulePageD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 __ZN7WebCore15CSSSelectorListD1Ev(i1 + 12 | 0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 if ((HEAP32[i2 + 4 >> 2] & 4 | 0) == 0) {
  __ZN7WebCore24ImmutableStylePropertiesD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  __ZN7WebCore22MutableStylePropertiesD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
}
function __ZN7WebCore13StyleRulePageD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 __ZN7WebCore15CSSSelectorListD1Ev(i1 + 12 | 0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 if ((HEAP32[i2 + 4 >> 2] & 4 | 0) == 0) {
  __ZN7WebCore24ImmutableStylePropertiesD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  __ZN7WebCore22MutableStylePropertiesD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
}
function __ZN7WebCore9StyleRuleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 __ZN7WebCore15CSSSelectorListD1Ev(i1 + 12 | 0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 if ((HEAP32[i2 + 4 >> 2] & 4 | 0) == 0) {
  __ZN7WebCore24ImmutableStylePropertiesD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  __ZN7WebCore22MutableStylePropertiesD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
}
function __ZN7WebCore9StyleRuleD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 __ZN7WebCore15CSSSelectorListD1Ev(i1 + 12 | 0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 if ((HEAP32[i2 + 4 >> 2] & 4 | 0) == 0) {
  __ZN7WebCore24ImmutableStylePropertiesD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  __ZN7WebCore22MutableStylePropertiesD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
}
function __ZN7WebCore17StyleRuleFontFaceD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 if ((HEAP32[i2 + 4 >> 2] & 4 | 0) == 0) {
  __ZN7WebCore24ImmutableStylePropertiesD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  __ZN7WebCore22MutableStylePropertiesD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
}
function __ZN7WebCore17StyleRuleFontFaceD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 if ((HEAP32[i2 + 4 >> 2] & 4 | 0) == 0) {
  __ZN7WebCore24ImmutableStylePropertiesD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  __ZN7WebCore22MutableStylePropertiesD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
}
function __ZN7WebCore9StyleRuleC2EiN3WTF7PassRefINS_15StylePropertiesEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2 << 5 | 1;
 HEAP32[i1 + 8 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i1 + 12 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9StyleRuleC1EiN3WTF7PassRefINS_15StylePropertiesEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2 << 5 | 1;
 HEAP32[i1 + 8 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i1 + 12 >> 2] = 0;
 STACKTOP = i4;
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
function __ZN7WebCore13StyleRulePageC2EN3WTF7PassRefINS_15StylePropertiesEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 6;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i1 + 12 >> 2] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13StyleRulePageC1EN3WTF7PassRefINS_15StylePropertiesEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 6;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i1 + 12 >> 2] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17StyleRuleFontFaceC2EN3WTF7PassRefINS_15StylePropertiesEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 5;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17StyleRuleFontFaceC1EN3WTF7PassRefINS_15StylePropertiesEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 5;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 >> 2];
 STACKTOP = i3;
 return;
}
function _memmove(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i2 | 0) < (i1 | 0) & (i1 | 0) < (i2 + i3 | 0)) {
  i4 = i1;
  i2 = i2 + i3 | 0;
  i1 = i1 + i3 | 0;
  while ((i3 | 0) > 0) {
   i1 = i1 - 1 | 0;
   i2 = i2 - 1 | 0;
   i3 = i3 - 1 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
  }
  i1 = i4;
 } else {
  _memcpy(i1, i2, i3) | 0;
 }
 return i1 | 0;
}
function __ZNK7WebCore13StyleRuleBase18createCSSOMWrapperEPNS_13CSSStyleSheetE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore13StyleRuleBase18createCSSOMWrapperEPNS_13CSSStyleSheetEPNS_7CSSRuleE(i1, i2, i3, 0);
 return;
}
function __ZNK7WebCore13StyleRuleBase18createCSSOMWrapperEPNS_7CSSRuleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore13StyleRuleBase18createCSSOMWrapperEPNS_13CSSStyleSheetEPNS_7CSSRuleE(i1, i2, 0, i3);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore15StyleRuleRegionC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14StyleRuleGroupC2ERKS0_(i1 | 0, i2 | 0);
 __ZN7WebCore15CSSSelectorListC1ERKS0_(i1 + 20 | 0, i2 + 20 | 0);
 return;
}
function __ZN7WebCore15StyleRuleRegionC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14StyleRuleGroupC2ERKS0_(i1 | 0, i2 | 0);
 __ZN7WebCore15CSSSelectorListC1ERKS0_(i1 + 20 | 0, i2 + 20 | 0);
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore9StyleRule18averageSizeInBytesEv() {
 return (__ZN7WebCore15StyleProperties18averageSizeInBytesEv() | 0) + 24 | 0;
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
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore9StyleRuleD2Ev,b0,__ZN7WebCore13StyleRulePageD2Ev,b0,__ZN7WebCore15StyleRuleFilterD2Ev,b0,__ZN7WebCore17StyleRuleFontFaceD2Ev,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore14StyleRuleGroupC2ERKS0_,b1,__ZN7WebCore9StyleRuleC2ERKS0_,b1,__ZN7WebCore13StyleRulePageC2ERKS0_,b1,__ZN7WebCore17StyleRuleFontFaceC2EN3WTF7PassRefINS_15StylePropertiesEEE,b1,__ZN7WebCore15StyleRuleFilterC2ERKS0_,b1,__ZN7WebCore14StyleRuleMediaC2ERKS0_,b1,__ZN7WebCore15StyleRuleRegionC2ERKS0_,b1,__ZN7WebCore13StyleRulePageC2EN3WTF7PassRefINS_15StylePropertiesEEE,b1,__ZN7WebCore17StyleRuleFontFaceC2ERKS0_,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore15StyleRuleRegionC2EPN3WTF6VectorINS1_6OwnPtrINS_17CSSParserSelectorEEELj0ENS1_15CrashOnOverflowEEERNS2_INS1_6RefPtrINS_13StyleRuleBaseEEELj0ES6_EE,b3,__ZN7WebCore15StyleRuleFilterC2ERKN3WTF6StringENS1_7PassRefINS_15StylePropertiesEEE,b3,__ZN7WebCore9StyleRuleC2EiN3WTF7PassRefINS_15StylePropertiesEEE,b3,__ZN7WebCore14StyleRuleMediaC2EN3WTF10PassRefPtrINS_13MediaQuerySetEEERNS1_6VectorINS1_6RefPtrINS_13StyleRuleBaseEEELj0ENS1_15CrashOnOverflowEEE,b3,__ZN7WebCore14StyleRuleGroupC2ENS_13StyleRuleBase4TypeERN3WTF6VectorINS3_6RefPtrIS1_EELj0ENS3_15CrashOnOverflowEEE,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore9StyleRule18averageSizeInBytesEv","__ZN7WebCore15StyleRuleRegionC2EPN3WTF6VectorINS1_6OwnPtrINS_17CSSParserSelectorEEELj0ENS1_15CrashOnOverflowEEERNS2_INS1_6RefPtrINS_13StyleRuleBaseEEELj0ES6_EE","__ZN7WebCore9StyleRuleD2Ev","__ZN7WebCore15StyleRuleRegionC2ERKS0_","__ZN7WebCore15StyleRuleFilterC2ERKS0_","__ZN7WebCore14StyleRuleGroup17wrapperInsertRuleEjN3WTF7PassRefINS_13StyleRuleBaseEEE","__ZNK7WebCore9StyleRule55splitIntoMultipleRulesWithMaximumSelectorComponentCountEj","__ZN7WebCore13StyleRulePageD2Ev","__ZN7WebCore17StyleRuleFontFaceC2ERKS0_","__ZNK7WebCore13StyleRuleBase18createCSSOMWrapperEPNS_13CSSStyleSheetEPNS_7CSSRuleE","_memset","__ZN3WTF6VectorINS_6RefPtrIN7WebCore9StyleRuleEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","_memcpy","__ZN7WebCore17StyleRuleFontFaceC2EN3WTF7PassRefINS_15StylePropertiesEEE","__ZNK7WebCore13StyleRuleBase18createCSSOMWrapperEPNS_13CSSStyleSheetE","__ZN7WebCore9StyleRule17mutablePropertiesEv","__ZN7WebCore15StyleRuleFilterC2ERKN3WTF6StringENS1_7PassRefINS_15StylePropertiesEEE","__ZN7WebCore9StyleRuleC2ERKS0_","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore14StyleRuleGroupC2ERKS0_","__ZN7WebCore15StyleRuleFilterD2Ev","__ZNK7WebCore13StyleRuleBase4copyEv","__ZN7WebCore11CSSSelectorC2ERKS0_","__ZN7WebCore14StyleRuleMediaC2ERKS0_","__ZN7WebCore13StyleRulePageC2ERKS0_","__ZN7WebCore9StyleRuleC2EiN3WTF7PassRefINS_15StylePropertiesEEE","__ZN7WebCore17StyleRuleFontFaceD2Ev","__ZN7WebCore14StyleRuleMediaC2EN3WTF10PassRefPtrINS_13MediaQuerySetEEERNS1_6VectorINS1_6RefPtrINS_13StyleRuleBaseEEELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore14StyleRuleGroupC2ENS_13StyleRuleBase4TypeERN3WTF6VectorINS3_6RefPtrIS1_EELj0ENS3_15CrashOnOverflowEEE","__ZNK7WebCore13StyleRuleBase18createCSSOMWrapperEPNS_7CSSRuleE","__ZN7WebCore13StyleRuleBase7destroyEv","__ZN7WebCore14StyleRuleGroup17wrapperRemoveRuleEj","__ZN3WTF6VectorINS_6RefPtrIN7WebCore13StyleRuleBaseEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","_memmove","__ZN7WebCore13StyleRulePage17mutablePropertiesEv","__ZN7WebCore15StyleRuleFilter17mutablePropertiesEv","__ZN7WebCore17StyleRuleFontFace17mutablePropertiesEv","__ZN7WebCore9StyleRule6createEiRKN3WTF6VectorIPKNS_11CSSSelectorELj0ENS1_15CrashOnOverflowEEENS1_7PassRefINS_15StylePropertiesEEE","__ZN7WebCore13StyleRulePageC2EN3WTF7PassRefINS_15StylePropertiesEEE"]

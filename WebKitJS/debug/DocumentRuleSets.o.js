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
var __ZN7WebCore16DocumentRuleSetsC1Ev;
var __ZN7WebCore16DocumentRuleSetsD1Ev;
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
  var __ZN7WebCore21CSSDefaultStyleSheets12defaultStyleE=env.__ZN7WebCore21CSSDefaultStyleSheets12defaultStyleE|0;
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
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
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
function __ZN7WebCore16DocumentRuleSets13initUserStyleERNS_28DocumentStyleSheetCollectionERKNS_19MediaQueryEvaluatorERNS_13StyleResolverE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = __ZN3WTF10fastMallocEj(236) | 0;
 i6 = i5;
 _memset(i5 | 0, 0, 132) | 0;
 HEAP8[i5 + 132 | 0] = 1;
 _memset(i5 + 136 | 0, 0, 86) | 0;
 HEAP32[i5 + 224 >> 2] = 0;
 HEAP32[i5 + 228 >> 2] = 0;
 HEAP32[i5 + 232 >> 2] = 0;
 i7 = __ZN7WebCore28DocumentStyleSheetCollection13pageUserSheetEv(i2) | 0;
 if ((i7 | 0) != 0) {
  __ZN7WebCore7RuleSet17addRulesFromSheetEPNS_18StyleSheetContentsERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeE(i6, HEAP32[i7 + 8 >> 2] | 0, i3, i4, 0);
 }
 i7 = __ZNK7WebCore28DocumentStyleSheetCollection23injectedUserStyleSheetsEv(i2) | 0;
 i8 = i7 + 8 | 0;
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  i9 = i7 | 0;
  i7 = 0;
  while (1) {
   __ZN7WebCore7RuleSet17addRulesFromSheetEPNS_18StyleSheetContentsERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeE(i6, HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + (i7 << 2) >> 2] | 0) + 8 >> 2] | 0, i3, i4, 0);
   i7 = i7 + 1 | 0;
   if (i7 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 i8 = i2 + 76 | 0;
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  i7 = i2 + 68 | 0;
  i2 = 0;
  while (1) {
   __ZN7WebCore7RuleSet17addRulesFromSheetEPNS_18StyleSheetContentsERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeE(i6, HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + (i2 << 2) >> 2] | 0) + 8 >> 2] | 0, i3, i4, 0);
   i2 = i2 + 1 | 0;
   if (i2 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 do {
  if ((HEAP32[i5 + 128 >> 2] | 0) == 0) {
   if ((HEAP32[i5 + 124 >> 2] | 0) != 0) {
    break;
   }
   if ((i5 | 0) == 0) {
    return;
   }
   __ZN7WebCore7RuleSetD2Ev(i6);
   __ZN3WTF8fastFreeEPv(i5);
   return;
  }
 } while (0);
 i5 = i1 + 4 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore7RuleSetD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore16DocumentRuleSets23appendAuthorStyleSheetsEjRKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEEPNS_19MediaQueryEvaluatorERNS_22InspectorCSSOMWrappersEbPNS_13StyleResolverE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i8 = i3 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L1 : do {
  if (i9 >>> 0 > i2 >>> 0) {
   i10 = i3 | 0;
   i11 = i1 | 0;
   i12 = i2;
   i13 = i9;
   while (1) {
    if (i13 >>> 0 <= i12 >>> 0) {
     break;
    }
    i14 = HEAP32[(HEAP32[i10 >> 2] | 0) + (i12 << 2) >> 2] | 0;
    i15 = HEAP32[i14 + 20 >> 2] | 0;
    if ((i15 | 0) == 0) {
     i16 = 8;
    } else {
     if (__ZNK7WebCore19MediaQueryEvaluator4evalEPKNS_13MediaQuerySetEPNS_13StyleResolverE(i4, i15, i7) | 0) {
      i16 = 8;
     }
    }
    if ((i16 | 0) == 8) {
     i16 = 0;
     __ZN7WebCore7RuleSet17addRulesFromSheetEPNS_18StyleSheetContentsERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeE(HEAP32[i11 >> 2] | 0, HEAP32[i14 + 8 >> 2] | 0, i4, i7, 0);
     __ZN7WebCore22InspectorCSSOMWrappers29collectFromStyleSheetIfNeededEPNS_13CSSStyleSheetE(i5, i14);
    }
    i14 = i12 + 1 | 0;
    if (i14 >>> 0 >= i9 >>> 0) {
     i17 = i11;
     break L1;
    }
    i12 = i14;
    i13 = HEAP32[i8 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else {
   i17 = i1 | 0;
  }
 } while (0);
 __ZN7WebCore7RuleSet11shrinkToFitEv(HEAP32[i17 >> 2] | 0);
 __ZN7WebCore16DocumentRuleSets15collectFeaturesEbPNS_18StyleScopeResolverE(i1, i6, HEAP32[i7 + 260 >> 2] | 0);
 return;
}
function __ZN7WebCore16DocumentRuleSets15collectFeaturesEbPNS_18StyleScopeResolverE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 8 | 0;
 __ZN7WebCore14RuleFeatureSet5clearEv(i6);
 i7 = HEAP32[__ZN7WebCore21CSSDefaultStyleSheets12defaultStyleE >> 2] | 0;
 if ((i7 | 0) != 0) {
  __ZN7WebCore14RuleFeatureSet3addERKS0_(i6, i7 + 136 | 0);
 }
 i7 = HEAP32[i1 >> 2] | 0;
 if ((i7 | 0) != 0) {
  __ZN7WebCore14RuleFeatureSet3addERKS0_(i6, i7 + 136 | 0);
 }
 if (i2) {
  __ZN7WebCore14RuleFeatureSet3addERKS0_(i6, (__ZN7WebCore21CSSDefaultStyleSheets15viewSourceStyleEv() | 0) + 136 | 0);
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore14RuleFeatureSet3addERKS0_(i6, i2 + 136 | 0);
 }
 __ZN7WebCoreL11makeRuleSetERKN3WTF6VectorINS_11RuleFeatureELj0ENS0_15CrashOnOverflowEEE(i4, i1 + 68 | 0);
 i2 = i1 + 96 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = i4;
 if ((i6 | 0) != 0) {
  __ZN7WebCore7RuleSetD2Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
 }
 __ZN7WebCoreL11makeRuleSetERKN3WTF6VectorINS_11RuleFeatureELj0ENS0_15CrashOnOverflowEEE(i5, i1 + 80 | 0);
 i6 = i1 + 100 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 i4 = i5 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i6 >> 2] = i5;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore7RuleSetD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCoreL11makeRuleSetERKN3WTF6VectorINS_11RuleFeatureELj0ENS0_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i2 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i5 = __ZN3WTF10fastMallocEj(236) | 0;
 i6 = i5;
 _memset(i5 | 0, 0, 132) | 0;
 HEAP8[i5 + 132 | 0] = 1;
 _memset(i5 + 136 | 0, 0, 86) | 0;
 HEAP32[i5 + 224 >> 2] = 0;
 HEAP32[i5 + 228 >> 2] = 0;
 HEAP32[i5 + 232 >> 2] = 0;
 i5 = i2 | 0;
 i2 = 0;
 while (1) {
  if ((HEAP32[i3 >> 2] | 0) >>> 0 <= i2 >>> 0) {
   i7 = 5;
   break;
  }
  i8 = HEAP32[i5 >> 2] | 0;
  __ZN7WebCore7RuleSet7addRuleEPNS_9StyleRuleEjNS_12AddRuleFlagsE(i6, HEAP32[i8 + (i2 * 12 & -1) >> 2] | 0, HEAP32[i8 + (i2 * 12 & -1) + 4 >> 2] | 0, HEAP8[i8 + (i2 * 12 & -1) + 8 | 0] & 1);
  i2 = i2 + 1 | 0;
  if (i2 >>> 0 >= i4 >>> 0) {
   break;
  }
 }
 if ((i7 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 __ZN7WebCore7RuleSet11shrinkToFitEv(i6);
 HEAP32[i1 >> 2] = i6;
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
function __ZN7WebCore16DocumentRuleSets31collectRulesFromUserStyleSheetsERKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEERNS_7RuleSetERKNS_19MediaQueryEvaluatorERNS_13StyleResolverE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 i1 = i2 + 8 | 0;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  return;
 }
 i6 = i2 | 0;
 i2 = 0;
 while (1) {
  __ZN7WebCore7RuleSet17addRulesFromSheetEPNS_18StyleSheetContentsERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeE(i3, HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + (i2 << 2) >> 2] | 0) + 8 >> 2] | 0, i4, i5, 0);
  i2 = i2 + 1 | 0;
  if (i2 >>> 0 >= (HEAP32[i1 >> 2] | 0) >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore16DocumentRuleSets16resetAuthorStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = __ZN3WTF10fastMallocEj(236) | 0;
 i3 = i2;
 _memset(i2 | 0, 0, 132) | 0;
 HEAP8[i2 + 132 | 0] = 1;
 _memset(i2 + 136 | 0, 0, 86) | 0;
 HEAP32[i2 + 224 >> 2] = 0;
 HEAP32[i2 + 228 >> 2] = 0;
 HEAP32[i2 + 232 >> 2] = 0;
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i1 | 0) == 0) {
  i4 = i3;
  i5 = i4 + 132 | 0;
  HEAP8[i5] = 0;
  return;
 }
 __ZN7WebCore7RuleSetD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = i4 + 132 | 0;
 HEAP8[i5] = 0;
 return;
}
function __ZN7WebCore16DocumentRuleSetsD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 100 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore7RuleSetD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore7RuleSetD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore14RuleFeatureSetD2Ev(i1 + 8 | 0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore7RuleSetD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore7RuleSetD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore16DocumentRuleSetsD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 100 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore7RuleSetD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore7RuleSetD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore14RuleFeatureSetD2Ev(i1 + 8 | 0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore7RuleSetD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore7RuleSetD2Ev(i2);
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore16DocumentRuleSetsC2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 96 >> 2] = 0;
 HEAP32[i1 + 100 >> 2] = 0;
 _memset(i1 | 0, 0, 94) | 0;
 return;
}
function __ZN7WebCore16DocumentRuleSetsC1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 96 >> 2] = 0;
 HEAP32[i1 + 100 >> 2] = 0;
 _memset(i1 | 0, 0, 94) | 0;
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
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore16DocumentRuleSetsC2Ev,b3,__ZN7WebCore16DocumentRuleSetsD2Ev,b3,b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore21CSSDefaultStyleSheets12defaultStyleE": __ZN7WebCore21CSSDefaultStyleSheets12defaultStyleE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore16DocumentRuleSets16resetAuthorStyleEv","__ZN7WebCore16DocumentRuleSetsC2Ev","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCoreL11makeRuleSetERKN3WTF6VectorINS_11RuleFeatureELj0ENS0_15CrashOnOverflowEEE","_memset","__ZN7WebCore16DocumentRuleSets31collectRulesFromUserStyleSheetsERKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEERNS_7RuleSetERKNS_19MediaQueryEvaluatorERNS_13StyleResolverE","__ZN7WebCore7RuleSetD2Ev","__ZN7WebCore16DocumentRuleSets13initUserStyleERNS_28DocumentStyleSheetCollectionERKNS_19MediaQueryEvaluatorERNS_13StyleResolverE","_memcpy","__ZN7WebCore16DocumentRuleSets23appendAuthorStyleSheetsEjRKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEEPNS_19MediaQueryEvaluatorERNS_22InspectorCSSOMWrappersEbPNS_13StyleResolverE","_strlen","__ZN7WebCore14RuleFeatureSetD2Ev","__ZN7WebCore16DocumentRuleSets15collectFeaturesEbPNS_18StyleScopeResolverE","__ZN7WebCore16DocumentRuleSetsD2Ev"]

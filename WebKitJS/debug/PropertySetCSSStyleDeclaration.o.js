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
H_BASE = parentModule["_malloc"](416 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 416;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore28StyleRuleCSSStyleDeclarationC1ERNS_22MutableStylePropertiesERNS_7CSSRuleE;
var __ZN7WebCore28StyleRuleCSSStyleDeclarationD1Ev;
/* memory initializer */ allocate([105,109,112,111,114,116,97,110,116,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var __ZN7WebCore9HTMLNames9styleAttrE=env.__ZN7WebCore9HTMLNames9styleAttrE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore25InlineCSSStyleDeclarationE=(H_BASE+264)|0;
  var __ZTVN7WebCore28StyleRuleCSSStyleDeclarationE=(H_BASE+144)|0;
  var __ZTVN7WebCore30PropertySetCSSStyleDeclarationE=(H_BASE+24)|0;
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
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore12_GLOBAL__N_127StyleAttributeMutationScopeC2EPNS_30PropertySetCSSStyleDeclarationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i1 = HEAP32[H_BASE + 416 >> 2] | 0;
 HEAP32[H_BASE + 416 >> 2] = i1 + 1;
 if ((i1 | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[H_BASE + 408 >> 2] = i2;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 84 >> 2] & 31](i2) | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[H_BASE + 408 >> 2] | 0;
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 84 >> 2] & 31](i2) | 0;
 if ((HEAP8[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 770 | 0] & 2) == 0) {
  HEAP32[i4 >> 2] = 0;
  i10 = 0;
 } else {
  __ZN7WebCore29MutationObserverInterestGroup14createIfNeededERNS_4NodeENS_16MutationObserver12MutationTypeEhPKNS_13QualifiedNameE(i4, i1 | 0, 2, 32, __ZN7WebCore9HTMLNames9styleAttrE);
  i10 = HEAP32[i4 >> 2] | 0;
 }
 i1 = HEAP32[i8 >> 2] | 0;
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i8 >> 2] = i10;
 if ((i1 | 0) == 0) {
  i11 = i10;
 } else {
  i10 = HEAP32[i1 >> 2] | 0;
  if ((i10 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i10);
  }
  __ZdlPv(i1);
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) != 0) {
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(i2);
   }
   __ZdlPv(i1);
  }
  i11 = HEAP32[i8 >> 2] | 0;
 }
 do {
  if ((i11 | 0) == 0) {
   HEAP32[i5 >> 2] = 0;
   i12 = 0;
  } else {
   i1 = __ZN7WebCore29MutationObserverInterestGroup19isOldValueRequestedEv(i11) | 0;
   HEAP32[i5 >> 2] = 0;
   if (!i1) {
    i12 = 0;
    break;
   }
   i1 = HEAP32[H_BASE + 408 >> 2] | 0;
   i2 = HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 84 >> 2] & 31](i1) | 0, __ZN7WebCore9HTMLNames9styleAttrE) | 0) >> 2] | 0;
   if ((i2 | 0) != 0) {
    i1 = i2 | 0;
    HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
   }
   HEAP32[i5 >> 2] = i2;
   i12 = i2;
  }
 } while (0);
 i11 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i8 = __ZN7WebCore29MutationObserverInterestGroup19isOldValueRequestedEv(i11) | 0;
   i2 = i6 | 0;
   i1 = HEAP32[(i8 ? i5 : __ZN3WTF8nullAtomE) >> 2] | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) != 0) {
    i8 = i1 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   i8 = HEAP32[H_BASE + 408 >> 2] | 0;
   __ZN7WebCore14MutationRecord16createAttributesERNS_7ElementERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i7, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 84 >> 2] & 31](i8) | 0, __ZN7WebCore9HTMLNames9styleAttrE, i6);
   i8 = i7 | 0;
   i1 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i1;
   do {
    if ((i10 | 0) != 0) {
     i1 = i10 + 4 | 0;
     i4 = i1 | 0;
     i13 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) != 0) {
      HEAP32[i4 >> 2] = i13;
      break;
     }
     i13 = i1 - 4 | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 31](i13);
    }
   } while (0);
   i10 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i13 = i10 + 4 | 0;
     i1 = i13 | 0;
     i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
     if ((i4 | 0) != 0) {
      HEAP32[i1 >> 2] = i4;
      break;
     }
     i4 = i13 - 4 | 0;
     if ((i4 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
    }
   } while (0);
   i10 = HEAP32[i2 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i8 = i10 | 0;
   i4 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i8 >> 2] = i4;
    break;
   }
  }
 } while (0);
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i12 | 0;
 i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i12);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i9 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableIPN7WebCore8CSSValueENS_12KeyValuePairIS3_NS_6RefPtrIS2_EEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS3_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
  __ZN3WTF9HashTableIPN7WebCore8CSSValueENS_12KeyValuePairIS3_NS_6RefPtrIS2_EEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = i7 & i6;
 i11 = i10 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i6;
    i25 = i10 + (i24 << 3) | 0;
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
   if ((i21 | 0) == 10) {
    if ((i22 | 0) == 0) {
     i13 = i25;
     i14 = i8;
     break;
    }
    i20 = i22;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i13 = i22;
    i14 = HEAP32[i3 >> 2] | 0;
    break;
   } else if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = i4 | 0;
 i4 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 i14 = i13 + 4 | 0;
 i10 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = i4;
 do {
  if ((i10 | 0) != 0) {
   i4 = i10 | 0;
   i14 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i10);
    break;
   } else {
    HEAP32[i4 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i10 = i2 + 12 | 0;
 i14 = (HEAP32[i10 >> 2] | 0) + 1 | 0;
 HEAP32[i10 >> 2] = i14;
 i10 = i2 + 4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i14 << 1 | 0) < (i4 | 0)) {
  i27 = i13;
  i28 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i29 = 8;
  } else {
   i21 = i4 << 1;
   i29 = (i14 * 6 & -1 | 0) < (i21 | 0) ? i4 : i21;
  }
  i21 = __ZN3WTF9HashTableIPN7WebCore8CSSValueENS_12KeyValuePairIS3_NS_6RefPtrIS2_EEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i29, i13) | 0;
  i27 = i21;
  i28 = HEAP32[i10 >> 2] | 0;
 }
 i10 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i10;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore8CSSValueENS_12KeyValuePairIS3_NS_6RefPtrIS2_EEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
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
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i20 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i20;
      break;
     }
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
   i17 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
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
  i36 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i36 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i36 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 | 0;
    i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i1);
     break;
    } else {
     HEAP32[i11 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i2 = i36 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i36 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_vii + 8;
}
function __ZN7WebCore30PropertySetCSSStyleDeclaration21cloneAndCacheForCSSOMEPNS_8CSSValueE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i2 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i2 = i1 + 12 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i9 = __ZN3WTF10fastMallocEj(20) | 0;
   i10 = i9;
   _memset(i9 | 0, 0, 20) | 0;
   i9 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i10;
   if ((i9 | 0) == 0) {
    i11 = i10;
    break;
   }
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) != 0) {
    i12 = HEAP32[i9 + 4 >> 2] | 0;
    if ((i12 | 0) > 0) {
     i13 = 0;
     while (1) {
      do {
       if ((HEAP32[i10 + (i13 << 3) >> 2] | 0) != -1) {
        i14 = HEAP32[i10 + (i13 << 3) + 4 >> 2] | 0;
        if ((i14 | 0) == 0) {
         break;
        }
        i15 = i14 | 0;
        i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
        if ((i16 | 0) == 0) {
         __ZN7WebCore8CSSValue7destroyEv(i14);
         break;
        } else {
         HEAP32[i15 >> 2] = i16;
         break;
        }
       }
      } while (0);
      i13 = i13 + 1 | 0;
      if ((i13 | 0) >= (i12 | 0)) {
       break;
      }
     }
    }
    __ZN3WTF8fastFreeEPv(i10);
   }
   __ZN3WTF8fastFreeEPv(i9);
   i11 = HEAP32[i2 >> 2] | 0;
  } else {
   i11 = i1;
  }
 } while (0);
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = 0;
 __ZN3WTF9HashTableIPN7WebCore8CSSValueENS_12KeyValuePairIS3_NS_6RefPtrIS2_EEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS3_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i11 | 0, i4, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i1 = i6 | 0;
   i11 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i6);
    break;
   } else {
    HEAP32[i1 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i6 = i5 + 4 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) == 0) {
   __ZNK7WebCore8CSSValue13cloneForCSSOMEv(i7, HEAP32[i4 >> 2] | 0);
   i5 = i7 | 0;
   i11 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   i1 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i11;
   do {
    if ((i1 | 0) != 0) {
     i11 = i1 | 0;
     i2 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i2 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i1);
      break;
     } else {
      HEAP32[i11 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i1 = HEAP32[i5 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   i9 = i1 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i1);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i6 >> 2] | 0;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore12_GLOBAL__N_127StyleAttributeMutationScopeD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[H_BASE + 416 >> 2] | 0) - 1 | 0;
 HEAP32[H_BASE + 416 >> 2] = i4;
 i5 = i1 + 4 | 0;
 do {
  if ((i4 | 0) == 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     if (!(HEAP8[H_BASE + 392 | 0] | 0)) {
      break;
     }
     i7 = HEAP32[i1 >> 2] | 0;
     i8 = i3 | 0;
     HEAP32[i8 >> 2] = i6;
     i9 = i6 + 4 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
     __ZN7WebCore29MutationObserverInterestGroup21enqueueMutationRecordEN3WTF10PassRefPtrINS_14MutationRecordEEE(i7, i3);
     i7 = HEAP32[i8 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     i8 = i7 + 4 | 0;
     i7 = i8 | 0;
     i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i7 >> 2] = i9;
      break;
     }
     i9 = i8 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
    }
   } while (0);
   HEAP8[H_BASE + 392 | 0] = 0;
   if (!(HEAP8[H_BASE + 384 | 0] | 0)) {
    HEAP32[H_BASE + 408 >> 2] = 0;
    break;
   }
   i6 = HEAP32[H_BASE + 408 >> 2] | 0;
   HEAP32[H_BASE + 408 >> 2] = 0;
   HEAP8[H_BASE + 384 | 0] = 0;
   i9 = i6;
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 84 >> 2] & 31](i6) | 0) == 0) {
    break;
   }
   i8 = HEAP32[(HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 84 >> 2] & 31](i6) | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 84 >> 2] & 31](i6) | 0;
   if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i8 | 0) == 0) {
    break;
   }
   i6 = __ZNK7WebCore8Document4pageEv(i8) | 0;
   do {
    if ((i6 | 0) == 0) {
     i9 = HEAP32[i8 + 2204 >> 2] | 0;
     if ((i9 | 0) == 0) {
      i10 = 0;
      break;
     }
     i10 = __ZNK7WebCore8Document4pageEv(i9) | 0;
    } else {
     i10 = i6;
    }
   } while (0);
   i6 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i10) | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation26didInvalidateStyleAttrImplEPNS_19InstrumentingAgentsEPNS_4NodeE(i6, i7);
  }
 } while (0);
 i10 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i5 = i10 + 4 | 0;
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i5 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
  }
 } while (0);
 i10 = HEAP32[i1 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = HEAP32[i10 >> 2] | 0;
 if ((i1 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZdlPv(i10);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore28StyleRuleCSSStyleDeclaration9didMutateENS_30PropertySetCSSStyleDeclaration12MutationTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 do {
  if ((i2 | 0) == 1) {
   i3 = i1 + 12 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i3 = HEAP32[i4 >> 2] | 0;
   if ((i3 | 0) != 0) {
    i5 = HEAP32[i4 + 4 >> 2] | 0;
    if ((i5 | 0) > 0) {
     i6 = 0;
     while (1) {
      do {
       if ((HEAP32[i3 + (i6 << 3) >> 2] | 0) != -1) {
        i7 = HEAP32[i3 + (i6 << 3) + 4 >> 2] | 0;
        if ((i7 | 0) == 0) {
         break;
        }
        i8 = i7 | 0;
        i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
        if ((i9 | 0) == 0) {
         __ZN7WebCore8CSSValue7destroyEv(i7);
         break;
        } else {
         HEAP32[i8 >> 2] = i9;
         break;
        }
       }
      } while (0);
      i6 = i6 + 1 | 0;
      if ((i6 | 0) >= (i5 | 0)) {
       break;
      }
     }
    }
    __ZN3WTF8fastFreeEPv(i3);
   }
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i10 = i2;
 }
 while (1) {
  i11 = i10 + 12 | 0;
  if ((HEAP8[i10 + 8 | 0] & 2) == 0) {
   break;
  }
  i1 = HEAP32[i11 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i12 = 25;
   break;
  } else {
   i10 = i1;
  }
 }
 if ((i12 | 0) == 25) {
  return;
 }
 if ((HEAP32[i11 >> 2] | 0) == 0) {
  return;
 } else {
  i13 = i2;
 }
 while (1) {
  i14 = i13 + 12 | 0;
  if ((HEAP8[i13 + 8 | 0] & 2) == 0) {
   i12 = 19;
   break;
  }
  i2 = HEAP32[i14 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i15 = 0;
   break;
  } else {
   i13 = i2;
  }
 }
 if ((i12 | 0) == 19) {
  i15 = HEAP32[i14 >> 2] | 0;
 }
 __ZN7WebCore13CSSStyleSheet36didMutateRuleFromCSSStyleDeclarationEv(i15);
 return;
}
function __ZN7WebCore30PropertySetCSSStyleDeclaration11setPropertyERKN3WTF6StringES4_S4_Ri(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 __ZN7WebCore12_GLOBAL__N_127StyleAttributeMutationScopeC2EPNS_30PropertySetCSSStyleDeclarationE(i7, i1);
 i9 = __ZN7WebCore13cssPropertyIDERKN3WTF6StringE(i2) | 0;
 if ((i9 | 0) == 0) {
  __ZN7WebCore12_GLOBAL__N_127StyleAttributeMutationScopeD2Ev(i7);
  STACKTOP = i6;
  return;
 }
 __ZN3WTF6StringC1EPKc(i8, H_BASE + 8 | 0);
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i8 | 0;
 if ((i2 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = (__ZN3WTF10StringImpl16findIgnoringCaseEPS0_j(i2, HEAP32[i4 >> 2] | 0, 0) | 0) != -1;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i8 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i8;
    break;
   }
  }
 } while (0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 92 >> 2] & 31](i1);
 HEAP32[i5 >> 2] = 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 31](i1 | 0) | 0;
 if ((i2 | 0) == 0) {
  i11 = 0;
 } else {
  i11 = HEAP32[i2 + 8 >> 2] | 0;
 }
 i2 = __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(i5, i9, i3, i10, i11) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 96 >> 2] & 15](i1, i2 & 1);
 if (!i2) {
  __ZN7WebCore12_GLOBAL__N_127StyleAttributeMutationScopeD2Ev(i7);
  STACKTOP = i6;
  return;
 }
 HEAP8[H_BASE + 392 | 0] = 1;
 __ZN7WebCore12_GLOBAL__N_127StyleAttributeMutationScopeD2Ev(i7);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore25InlineCSSStyleDeclaration9didMutateENS_30PropertySetCSSStyleDeclaration12MutationTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 + 12 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i5 | 0) != 0) {
  i2 = HEAP32[i5 >> 2] | 0;
  if ((i2 | 0) != 0) {
   i6 = HEAP32[i5 + 4 >> 2] | 0;
   if ((i6 | 0) > 0) {
    i7 = 0;
    while (1) {
     do {
      if ((HEAP32[i2 + (i7 << 3) >> 2] | 0) != -1) {
       i8 = HEAP32[i2 + (i7 << 3) + 4 >> 2] | 0;
       if ((i8 | 0) == 0) {
        break;
       }
       i9 = i8 | 0;
       i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
       if ((i10 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i8);
        break;
       } else {
        HEAP32[i9 >> 2] = i10;
        break;
       }
      }
     } while (0);
     i7 = i7 + 1 | 0;
     if ((i7 | 0) >= (i6 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = i1 + 16 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i2 | 0, 16384);
 i2 = (HEAP32[(HEAP32[i5 >> 2] | 0) + 48 >> 2] | 0) + 4 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 1073741824;
 __ZN7WebCore12_GLOBAL__N_127StyleAttributeMutationScopeC2EPNS_30PropertySetCSSStyleDeclarationE(i4, i1 | 0);
 HEAP8[H_BASE + 384 | 0] = 1;
 __ZN7WebCore12_GLOBAL__N_127StyleAttributeMutationScopeD2Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore28StyleRuleCSSStyleDeclarationD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 152;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 do {
  if ((i5 | 0) == 0) {
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
   HEAP32[i4 >> 2] = i5;
  }
 } while (0);
 HEAP32[i2 >> 2] = H_BASE + 32;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i5 = HEAP32[i2 >> 2] | 0;
  if ((i5 | 0) != 0) {
   i4 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i4 | 0) > 0) {
    i3 = 0;
    while (1) {
     do {
      if ((HEAP32[i5 + (i3 << 3) >> 2] | 0) != -1) {
       i6 = HEAP32[i5 + (i3 << 3) + 4 >> 2] | 0;
       if ((i6 | 0) == 0) {
        break;
       }
       i7 = i6 | 0;
       i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
       if ((i8 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i6);
        break;
       } else {
        HEAP32[i7 >> 2] = i8;
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
   __ZN3WTF8fastFreeEPv(i5);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function __ZN7WebCore28StyleRuleCSSStyleDeclarationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 152;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 do {
  if ((i5 | 0) == 0) {
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
   HEAP32[i4 >> 2] = i5;
  }
 } while (0);
 HEAP32[i2 >> 2] = H_BASE + 32;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i5 = HEAP32[i2 >> 2] | 0;
  if ((i5 | 0) != 0) {
   i4 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i4 | 0) > 0) {
    i3 = 0;
    while (1) {
     do {
      if ((HEAP32[i5 + (i3 << 3) >> 2] | 0) != -1) {
       i6 = HEAP32[i5 + (i3 << 3) + 4 >> 2] | 0;
       if ((i6 | 0) == 0) {
        break;
       }
       i7 = i6 | 0;
       i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
       if ((i8 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i6);
        break;
       } else {
        HEAP32[i7 >> 2] = i8;
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
   __ZN3WTF8fastFreeEPv(i5);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function __ZN7WebCore30PropertySetCSSStyleDeclaration19setPropertyInternalENS_13CSSPropertyIDERKN3WTF6StringEbRi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 __ZN7WebCore12_GLOBAL__N_127StyleAttributeMutationScopeC2EPNS_30PropertySetCSSStyleDeclarationE(i7, i1);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 92 >> 2] & 31](i1);
 HEAP32[i5 >> 2] = 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 31](i1 | 0) | 0;
 if ((i8 | 0) == 0) {
  i9 = 0;
 } else {
  i9 = HEAP32[i8 + 8 >> 2] | 0;
 }
 i8 = __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(i5, i2, i3, i4, i9) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 96 >> 2] & 15](i1, i8 & 1);
 if (!i8) {
  __ZN7WebCore12_GLOBAL__N_127StyleAttributeMutationScopeD2Ev(i7);
  STACKTOP = i6;
  return;
 }
 HEAP8[H_BASE + 392 | 0] = 1;
 __ZN7WebCore12_GLOBAL__N_127StyleAttributeMutationScopeD2Ev(i7);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore30PropertySetCSSStyleDeclaration14removePropertyERKN3WTF6StringERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 __ZN7WebCore12_GLOBAL__N_127StyleAttributeMutationScopeC2EPNS_30PropertySetCSSStyleDeclarationE(i6, i2);
 i8 = __ZN7WebCore13cssPropertyIDERKN3WTF6StringE(i3) | 0;
 if ((i8 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  __ZN7WebCore12_GLOBAL__N_127StyleAttributeMutationScopeD2Ev(i6);
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] & 31](i2);
 HEAP32[i4 >> 2] = 0;
 i4 = i7 | 0;
 HEAP32[i4 >> 2] = 0;
 i3 = __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(HEAP32[i2 + 8 >> 2] | 0, i8, i7) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 96 >> 2] & 15](i2, i3 & 1);
 if (i3) {
  HEAP8[H_BASE + 392 | 0] = 1;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 >> 2] = i3;
 __ZN7WebCore12_GLOBAL__N_127StyleAttributeMutationScopeD2Ev(i6);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore30PropertySetCSSStyleDeclarationD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i4 | 0) > 0) {
    i5 = 0;
    while (1) {
     do {
      if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
       i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
       if ((i6 | 0) == 0) {
        break;
       }
       i7 = i6 | 0;
       i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
       if ((i8 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i6);
        break;
       } else {
        HEAP32[i7 >> 2] = i8;
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
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  i9 = i1;
  __ZN3WTF8fastFreeEPv(i9);
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 i9 = i1;
 __ZN3WTF8fastFreeEPv(i9);
 return;
}
function __ZN7WebCore25InlineCSSStyleDeclarationD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i4 | 0) > 0) {
    i5 = 0;
    while (1) {
     do {
      if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
       i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
       if ((i6 | 0) == 0) {
        break;
       }
       i7 = i6 | 0;
       i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
       if ((i8 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i6);
        break;
       } else {
        HEAP32[i7 >> 2] = i8;
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
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  i9 = i1;
  __ZN3WTF8fastFreeEPv(i9);
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 i9 = i1;
 __ZN3WTF8fastFreeEPv(i9);
 return;
}
function __ZN7WebCore30PropertySetCSSStyleDeclarationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i4 | 0) > 0) {
    i5 = 0;
    while (1) {
     do {
      if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
       i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
       if ((i6 | 0) == 0) {
        break;
       }
       i7 = i6 | 0;
       i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
       if ((i8 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i6);
        break;
       } else {
        HEAP32[i7 >> 2] = i8;
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
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function __ZN7WebCore25InlineCSSStyleDeclarationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i4 | 0) > 0) {
    i5 = 0;
    while (1) {
     do {
      if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
       i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
       if ((i6 | 0) == 0) {
        break;
       }
       i7 = i6 | 0;
       i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
       if ((i8 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i6);
        break;
       } else {
        HEAP32[i7 >> 2] = i8;
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
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function __ZN7WebCore30PropertySetCSSStyleDeclaration19getPropertyCSSValueERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __ZN7WebCore13cssPropertyIDERKN3WTF6StringE(i3) | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i5, HEAP32[i2 + 8 >> 2] | 0, i6);
 i6 = i5 | 0;
 i5 = __ZN7WebCore30PropertySetCSSStyleDeclaration21cloneAndCacheForCSSOMEPNS_8CSSValueE(i2, HEAP32[i6 >> 2] | 0) | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i1 = i5 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i1 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i1);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i6 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore30PropertySetCSSStyleDeclaration10setCssTextERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore12_GLOBAL__N_127StyleAttributeMutationScopeC2EPNS_30PropertySetCSSStyleDeclarationE(i5, i1);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 92 >> 2] & 31](i1);
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 31](i1 | 0) | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i6 + 8 >> 2] | 0;
 }
 __ZN7WebCore22MutableStyleProperties16parseDeclarationERKN3WTF6StringEPNS_18StyleSheetContentsE(i3, i2, i7);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 96 >> 2] & 15](i1, 1);
 HEAP8[H_BASE + 392 | 0] = 1;
 __ZN7WebCore12_GLOBAL__N_127StyleAttributeMutationScopeD2Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore28StyleRuleCSSStyleDeclaration10willMutateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i3 = i2;
 }
 while (1) {
  i4 = i3 + 12 | 0;
  if ((HEAP8[i3 + 8 | 0] & 2) == 0) {
   break;
  }
  i1 = HEAP32[i4 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i5 = 12;
   break;
  } else {
   i3 = i1;
  }
 }
 if ((i5 | 0) == 12) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  return;
 } else {
  i6 = i2;
 }
 while (1) {
  i7 = i6 + 12 | 0;
  if ((HEAP8[i6 + 8 | 0] & 2) == 0) {
   i5 = 7;
   break;
  }
  i2 = HEAP32[i7 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i8 = 0;
   break;
  } else {
   i6 = i2;
  }
 }
 if ((i5 | 0) == 7) {
  i8 = HEAP32[i7 >> 2] | 0;
 }
 __ZN7WebCore13CSSStyleSheet15willMutateRulesEv(i8) | 0;
 return;
}
function __ZN7WebCore28StyleRuleCSSStyleDeclaration8reattachERNS_22MutableStylePropertiesE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 8 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = i1 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 do {
  if ((i5 | 0) == 0) {
   if ((HEAP32[i1 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   }
  } else {
   HEAP32[i4 >> 2] = i5;
  }
 } while (0);
 HEAP32[i3 >> 2] = i2;
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
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
function __ZNK7WebCore30PropertySetCSSStyleDeclaration4itemEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 if ((HEAP32[i6 + 16 >> 2] | 0) >>> 0 > i3 >>> 0) {
  HEAP32[i5 >> 2] = i6;
  HEAP32[i5 + 4 >> 2] = i3;
  __ZNK7WebCore15StyleProperties17PropertyReference7cssNameEv(i1, i5);
  STACKTOP = i4;
  return;
 } else {
  __ZN3WTF6StringC1EPKc(i1, H_BASE + 400 | 0);
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore28StyleRuleCSSStyleDeclaration16parentStyleSheetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 while (1) {
  i5 = i4 + 12 | 0;
  if ((HEAP8[i4 + 8 | 0] & 2) == 0) {
   break;
  }
  i2 = HEAP32[i5 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = 0;
   i6 = 7;
   break;
  } else {
   i4 = i2;
  }
 }
 if ((i6 | 0) == 7) {
  return i3 | 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore30PropertySetCSSStyleDeclaration19getPropertyPriorityERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = __ZN7WebCore13cssPropertyIDERKN3WTF6StringE(i3) | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else {
  i3 = __ZNK7WebCore15StyleProperties19propertyIsImportantENS_13CSSPropertyIDE(HEAP32[i2 + 8 >> 2] | 0, i4) | 0;
  __ZN3WTF6StringC1EPKc(i1, i3 ? H_BASE + 8 | 0 : H_BASE + 400 | 0);
  return;
 }
}
function __ZN7WebCore30PropertySetCSSStyleDeclaration5derefEv(i1) {
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
function __ZN7WebCore30PropertySetCSSStyleDeclaration20getPropertyShorthandERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = __ZN7WebCore13cssPropertyIDERKN3WTF6StringE(i3) | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else {
  __ZNK7WebCore15StyleProperties20getPropertyShorthandENS_13CSSPropertyIDE(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 }
}
function __ZN7WebCore30PropertySetCSSStyleDeclaration16getPropertyValueERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = __ZN7WebCore13cssPropertyIDERKN3WTF6StringE(i3) | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else {
  __ZNK7WebCore15StyleProperties16getPropertyValueENS_13CSSPropertyIDE(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 }
}
function __ZN7WebCore28StyleRuleCSSStyleDeclarationC2ERNS_22MutableStylePropertiesERNS_7CSSRuleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i2;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 >> 2] = H_BASE + 152;
 HEAP32[i1 + 16 >> 2] = 1;
 HEAP32[i1 + 20 >> 2] = i3;
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore28StyleRuleCSSStyleDeclarationC1ERNS_22MutableStylePropertiesERNS_7CSSRuleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i2;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 >> 2] = H_BASE + 152;
 HEAP32[i1 + 16 >> 2] = 1;
 HEAP32[i1 + 20 >> 2] = i3;
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore30PropertySetCSSStyleDeclaration18isPropertyImplicitERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = __ZN7WebCore13cssPropertyIDERKN3WTF6StringE(i2) | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = __ZNK7WebCore15StyleProperties18isPropertyImplicitENS_13CSSPropertyIDE(HEAP32[i1 + 8 >> 2] | 0, i3) | 0;
 return i4 | 0;
}
function __ZNK7WebCore25InlineCSSStyleDeclaration16parentStyleSheetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZN7WebCore8Document12elementSheetEv(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 return i3 | 0;
}
function __ZN7WebCore28StyleRuleCSSStyleDeclaration5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 16 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) != 0 | (i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 return;
}
function __ZNK7WebCore30PropertySetCSSStyleDeclaration17contextStyleSheetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 31](i1 | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore30PropertySetCSSStyleDeclaration27getPropertyCSSValueInternalENS_13CSSPropertyIDE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i1, HEAP32[i2 + 8 >> 2] | 0, i3);
 return;
}
function __ZN7WebCore30PropertySetCSSStyleDeclaration24getPropertyValueInternalENS_13CSSPropertyIDE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore15StyleProperties16getPropertyValueENS_13CSSPropertyIDE(i1, HEAP32[i2 + 8 >> 2] | 0, i3);
 return;
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
 FUNCTION_TABLE_viiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZNK7WebCore30PropertySetCSSStyleDeclaration14copyPropertiesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore15StyleProperties11mutableCopyEv(i1, HEAP32[i2 + 8 >> 2] | 0);
 return;
}
function __ZNK7WebCore30PropertySetCSSStyleDeclaration7cssTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore15StyleProperties6asTextEv(i1, HEAP32[i2 + 8 >> 2] | 0);
 return;
}
function __ZN7WebCore30PropertySetCSSStyleDeclaration3refEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore28StyleRuleCSSStyleDeclarationD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore28StyleRuleCSSStyleDeclarationD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore28StyleRuleCSSStyleDeclaration3refEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZNK7WebCore30PropertySetCSSStyleDeclaration6lengthEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 16 >> 2] | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore30PropertySetCSSStyleDeclaration9didMutateENS0_12MutationTypeE(i1, i2) {
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
function __ZN7WebCore25InlineCSSStyleDeclaration18clearParentElementEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 16 >> 2] = 0;
 return;
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
function __ZNK7WebCore28StyleRuleCSSStyleDeclaration10parentRuleEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 20 >> 2] | 0;
}
function __ZNK7WebCore25InlineCSSStyleDeclaration13parentElementEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 16 >> 2] | 0;
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
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZN7WebCore30PropertySetCSSStyleDeclaration18clearParentElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore30PropertySetCSSStyleDeclaration13parentElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore30PropertySetCSSStyleDeclaration10parentRuleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
}
function __ZN7WebCore30PropertySetCSSStyleDeclaration10willMutateEv(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore19CSSStyleDeclaration16parentStyleSheetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore30PropertySetCSSStyleDeclaration19setPropertyInternalENS_13CSSPropertyIDERKN3WTF6StringEbRi,b0,__ZN7WebCore30PropertySetCSSStyleDeclaration11setPropertyERKN3WTF6StringES4_S4_Ri,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore28StyleRuleCSSStyleDeclarationD2Ev,b1,__ZN7WebCore28StyleRuleCSSStyleDeclarationD0Ev,b1,__ZN7WebCore28StyleRuleCSSStyleDeclaration5derefEv,b1,__ZN7WebCore25InlineCSSStyleDeclarationD0Ev,b1,__ZN7WebCore30PropertySetCSSStyleDeclaration3refEv,b1,__ZN7WebCore28StyleRuleCSSStyleDeclaration10willMutateEv,b1,__ZN7WebCore30PropertySetCSSStyleDeclaration10willMutateEv,b1,__ZN7WebCore30PropertySetCSSStyleDeclaration5derefEv,b1,__ZN7WebCore25InlineCSSStyleDeclarationD1Ev,b1,__ZN7WebCore25InlineCSSStyleDeclaration18clearParentElementEv,b1,__ZN7WebCore28StyleRuleCSSStyleDeclaration3refEv,b1,__ZN7WebCore30PropertySetCSSStyleDeclarationD1Ev,b1,__ZN7WebCore30PropertySetCSSStyleDeclaration18clearParentElementEv,b1,__ZN7WebCore30PropertySetCSSStyleDeclarationD0Ev
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZNK7WebCore30PropertySetCSSStyleDeclaration7cssTextEv,b2,__ZNK7WebCore30PropertySetCSSStyleDeclaration14copyPropertiesEv,b2,__ZN7WebCore28StyleRuleCSSStyleDeclaration9didMutateENS_30PropertySetCSSStyleDeclaration12MutationTypeE,b2,__ZN7WebCore25InlineCSSStyleDeclaration9didMutateENS_30PropertySetCSSStyleDeclaration12MutationTypeE,b2,__ZN7WebCore30PropertySetCSSStyleDeclaration9didMutateENS0_12MutationTypeE,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore19CSSStyleDeclaration16parentStyleSheetEv,b3,__ZNK7WebCore30PropertySetCSSStyleDeclaration13parentElementEv,b3,__ZNK7WebCore28StyleRuleCSSStyleDeclaration10parentRuleEv,b3,__ZNK7WebCore30PropertySetCSSStyleDeclaration6lengthEv,b3,__ZNK7WebCore25InlineCSSStyleDeclaration13parentElementEv,b3,__ZNK7WebCore30PropertySetCSSStyleDeclaration10parentRuleEv,b3,__ZNK7WebCore25InlineCSSStyleDeclaration16parentStyleSheetEv,b3,__ZNK7WebCore28StyleRuleCSSStyleDeclaration16parentStyleSheetEv,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore30PropertySetCSSStyleDeclaration16getPropertyValueERKN3WTF6StringE,b4,__ZN7WebCore30PropertySetCSSStyleDeclaration19getPropertyPriorityERKN3WTF6StringE,b4,__ZN7WebCore30PropertySetCSSStyleDeclaration19getPropertyCSSValueERKN3WTF6StringE,b4,__ZNK7WebCore30PropertySetCSSStyleDeclaration4itemEj,b4,__ZN7WebCore30PropertySetCSSStyleDeclaration10setCssTextERKN3WTF6StringERi,b4,__ZN7WebCore30PropertySetCSSStyleDeclaration24getPropertyValueInternalENS_13CSSPropertyIDE,b4,__ZN7WebCore30PropertySetCSSStyleDeclaration20getPropertyShorthandERKN3WTF6StringE,b4,__ZN7WebCore30PropertySetCSSStyleDeclaration27getPropertyCSSValueInternalENS_13CSSPropertyIDE,b4,__ZN7WebCore28StyleRuleCSSStyleDeclarationC2ERNS_22MutableStylePropertiesERNS_7CSSRuleE,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6,__ZN7WebCore30PropertySetCSSStyleDeclaration18isPropertyImplicitERKN3WTF6StringE,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,__ZN7WebCore30PropertySetCSSStyleDeclaration14removePropertyERKN3WTF6StringERi,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE, "__ZN7WebCore9HTMLNames9styleAttrE": __ZN7WebCore9HTMLNames9styleAttrE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore19CSSStyleDeclaration16parentStyleSheetEv","_strlen","__ZNK7WebCore30PropertySetCSSStyleDeclaration13parentElementEv","_memset","__ZNK7WebCore30PropertySetCSSStyleDeclaration7cssTextEv","__ZNK7WebCore28StyleRuleCSSStyleDeclaration10parentRuleEv","__ZN7WebCore30PropertySetCSSStyleDeclaration9didMutateENS0_12MutationTypeE","__ZN7WebCore30PropertySetCSSStyleDeclaration16getPropertyValueERKN3WTF6StringE","__ZN7WebCore28StyleRuleCSSStyleDeclarationD2Ev","__ZN7WebCore12_GLOBAL__N_127StyleAttributeMutationScopeD2Ev","__ZNK7WebCore30PropertySetCSSStyleDeclaration6lengthEv","__ZN3WTF9HashTableIPN7WebCore8CSSValueENS_12KeyValuePairIS3_NS_6RefPtrIS2_EEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS3_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S7_S9_SB_SH_SE_EEEEOT0_OT1_","__ZN7WebCore30PropertySetCSSStyleDeclaration19setPropertyInternalENS_13CSSPropertyIDERKN3WTF6StringEbRi","__ZNK7WebCore25InlineCSSStyleDeclaration13parentElementEv","__ZN7WebCore28StyleRuleCSSStyleDeclarationD0Ev","_memcpy","__ZN7WebCore30PropertySetCSSStyleDeclaration21cloneAndCacheForCSSOMEPNS_8CSSValueE","__ZN7WebCore30PropertySetCSSStyleDeclaration18isPropertyImplicitERKN3WTF6StringE","__ZN7WebCore25InlineCSSStyleDeclarationD0Ev","__ZNK7WebCore30PropertySetCSSStyleDeclaration10parentRuleEv","__ZN7WebCore30PropertySetCSSStyleDeclaration3refEv","__ZN7WebCore28StyleRuleCSSStyleDeclaration10willMutateEv","__ZN7WebCore30PropertySetCSSStyleDeclaration10willMutateEv","__ZN7WebCore30PropertySetCSSStyleDeclaration19getPropertyPriorityERKN3WTF6StringE","__ZN7WebCore30PropertySetCSSStyleDeclaration5derefEv","__ZN7WebCore25InlineCSSStyleDeclarationD1Ev","__ZN7WebCore30PropertySetCSSStyleDeclaration19getPropertyCSSValueERKN3WTF6StringE","__ZNK7WebCore30PropertySetCSSStyleDeclaration4itemEj","__ZN7WebCore30PropertySetCSSStyleDeclaration10setCssTextERKN3WTF6StringERi","__ZN7WebCore25InlineCSSStyleDeclaration9didMutateENS_30PropertySetCSSStyleDeclaration12MutationTypeE","__ZN7WebCore30PropertySetCSSStyleDeclaration24getPropertyValueInternalENS_13CSSPropertyIDE","__ZN7WebCore25InlineCSSStyleDeclaration18clearParentElementEv","__ZN3WTF9HashTableIPN7WebCore8CSSValueENS_12KeyValuePairIS3_NS_6RefPtrIS2_EEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_","__ZN7WebCore12_GLOBAL__N_127StyleAttributeMutationScopeC2EPNS_30PropertySetCSSStyleDeclarationE","__ZNK7WebCore30PropertySetCSSStyleDeclaration14copyPropertiesEv","__ZN7WebCore30PropertySetCSSStyleDeclaration14removePropertyERKN3WTF6StringERi","__ZN7WebCore28StyleRuleCSSStyleDeclaration9didMutateENS_30PropertySetCSSStyleDeclaration12MutationTypeE","__ZNK7WebCore30PropertySetCSSStyleDeclaration17contextStyleSheetEv","__ZN7WebCore28StyleRuleCSSStyleDeclaration3refEv","__ZN7WebCore30PropertySetCSSStyleDeclaration11setPropertyERKN3WTF6StringES4_S4_Ri","__ZN7WebCore30PropertySetCSSStyleDeclaration20getPropertyShorthandERKN3WTF6StringE","__ZN7WebCore28StyleRuleCSSStyleDeclaration5derefEv","__ZN7WebCore30PropertySetCSSStyleDeclarationD1Ev","__ZNK7WebCore28StyleRuleCSSStyleDeclaration16parentStyleSheetEv","__ZN7WebCore28StyleRuleCSSStyleDeclarationC2ERNS_22MutableStylePropertiesERNS_7CSSRuleE","__ZNK7WebCore25InlineCSSStyleDeclaration16parentStyleSheetEv","__ZN7WebCore28StyleRuleCSSStyleDeclaration8reattachERNS_22MutableStylePropertiesE","__ZN7WebCore30PropertySetCSSStyleDeclaration18clearParentElementEv","__ZN7WebCore30PropertySetCSSStyleDeclaration27getPropertyCSSValueInternalENS_13CSSPropertyIDE","__ZN7WebCore30PropertySetCSSStyleDeclarationD0Ev"]

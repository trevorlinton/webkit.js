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
H_BASE = parentModule["_malloc"](8 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 8;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore20ResourceLoadNotifierC1ERNS_5FrameE;
/* memory initializer */ allocate([100,97,116,97,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore20ResourceLoadNotifier23dispatchWillSendRequestEPNS_14DocumentLoaderEmRNS_15ResourceRequestERKNS_16ResourceResponseE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i4 | 0;
 i10 = HEAP32[(__ZNK7WebCore19ResourceRequestBase3urlEv(i9) | 0) >> 2] | 0;
 i11 = (i10 | 0) == 0;
 if (!i11) {
  i12 = i10 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = i1 | 0;
 i1 = HEAP32[(HEAP32[i12 >> 2] | 0) + 128 >> 2] | 0;
 i13 = __ZNK7WebCore19ResourceRequestBase3urlEv(i9) | 0;
 i14 = i13 | 0;
 do {
  if (!(__ZN7WebCore10protocolIsERKN3WTF6StringEPKc(i14, H_BASE + 8 | 0) | 0)) {
   i15 = HEAP32[i13 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   if ((HEAP32[i15 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i7, i1 + 1468 | 0, i14, i14);
  }
 } while (0);
 i14 = HEAP32[(HEAP32[i12 >> 2] | 0) + 84 >> 2] | 0;
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i14 >> 2] | 0) + 48 >> 2] & 1](i14, i2, i3, i4, i5);
 do {
  if (!(__ZNK7WebCore19ResourceRequestBase6isNullEv(i9) | 0)) {
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(i10, HEAP32[(__ZNK7WebCore19ResourceRequestBase3urlEv(i9) | 0) >> 2] | 0) | 0) {
    break;
   }
   i14 = HEAP32[(HEAP32[i12 >> 2] | 0) + 128 >> 2] | 0;
   i1 = __ZNK7WebCore19ResourceRequestBase3urlEv(i9) | 0;
   i7 = i1 | 0;
   if (__ZN7WebCore10protocolIsERKN3WTF6StringEPKc(i7, H_BASE + 8 | 0) | 0) {
    break;
   }
   i13 = HEAP32[i1 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i8, i14 + 1468 | 0, i7, i7);
  }
 } while (0);
 i8 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i12 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i8 + 32 >> 2] | 0) | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation19willSendRequestImplEPNS_19InstrumentingAgentsEmPNS_14DocumentLoaderERNS_15ResourceRequestERKNS_16ResourceResponseE(i12, i3, i2, i4, i5);
  }
 } while (0);
 do {
  if ((i2 | 0) != 0) {
   if (__ZNK7WebCore19ResourceRequestBase6isNullEv(i9) | 0) {
    break;
   }
   i5 = __ZNK7WebCore19ResourceRequestBase3urlEv(i9) | 0;
   i3 = __ZNK7WebCore14DocumentLoader10requestURLEv(i2) | 0;
   if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i5 >> 2] | 0, HEAP32[i3 >> 2] | 0) | 0)) {
    break;
   }
   i3 = i4 + 152 | 0;
   HEAP8[i3] = HEAP8[i3] | 64;
  }
 } while (0);
 if (i11) {
  STACKTOP = i6;
  return;
 }
 i11 = i10 | 0;
 i4 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i11 >> 2] = i4;
  STACKTOP = i6;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i1, i2, i3) {
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
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   i13 = (i18 >>> 23) + ~i18 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 2) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 9;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 9) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i19 >> 2] = i17;
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
  }
  i17 = i10 + 1 | 0;
  if ((i17 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i17;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i28 << 2) >> 2] | 0;
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
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i28 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i8, 0) | 0;
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
  i13 = i10 + (i12 << 2) | 0;
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
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
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
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i4 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i4 = i9 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i4 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i4 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i4;
 i13 = i2 + 4 | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i9 | 0)) {
  i19 = i18;
  i20 = i9;
 } else {
  if ((i9 | 0) == 0) {
   i21 = 8;
  } else {
   i17 = i9 << 1;
   i21 = (i4 * 6 & -1 | 0) < (i17 | 0) ? i9 : i17;
  }
  i17 = __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i21, i18) | 0;
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
function __ZN7WebCore20ResourceLoadNotifier29sendRemainingDelegateMessagesEPNS_14DocumentLoaderEmRKNS_15ResourceRequestERKNS_16ResourceResponseEPKciiRKNS_13ResourceErrorE(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0;
 if (__ZNK7WebCore19ResourceRequestBase6isNullEv(i4 | 0) | 0) {
  i4 = i1 | 0;
  i10 = HEAP32[(HEAP32[i4 >> 2] | 0) + 84 >> 2] | 0;
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i10 >> 2] | 0) + 76 >> 2] & 1](i10, i2, i3, i9);
  i10 = HEAP32[i4 >> 2] | 0;
  if ((i10 | 0) == 0) {
   return;
  }
  i4 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i10 + 32 >> 2] | 0) | 0;
  if ((i4 | 0) == 0) {
   return;
  }
  __ZN7WebCore24InspectorInstrumentation18didFailLoadingImplEPNS_19InstrumentingAgentsEmPNS_14DocumentLoaderERKNS_13ResourceErrorE(i4, i3, i2, i9);
  return;
 }
 if ((HEAP8[i5 + 116 | 0] & 1) == 0) {
  __ZN7WebCore20ResourceLoadNotifier26dispatchDidReceiveResponseEPNS_14DocumentLoaderEmRKNS_16ResourceResponseEPNS_14ResourceLoaderE(i1, i2, i3, i5, 0);
 }
 i5 = i1 | 0;
 do {
  if ((i7 | 0) > 0) {
   i1 = HEAP32[(HEAP32[i5 >> 2] | 0) + 84 >> 2] | 0;
   FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 68 >> 2] & 1](i1, i2, i3, i7);
   i1 = HEAP32[i5 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   i4 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i1 + 32 >> 2] | 0) | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation18didReceiveDataImplEPNS_19InstrumentingAgentsEmPKcii(i4, i3, i6, i7, i8);
  }
 } while (0);
 i8 = HEAP32[(HEAP32[i5 >> 2] | 0) + 84 >> 2] | 0;
 if ((HEAP8[i9 + 16 | 0] & 1) == 0) {
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i8 >> 2] | 0) + 76 >> 2] & 1](i8, i2, i3, i9);
  i7 = HEAP32[i5 >> 2] | 0;
  if ((i7 | 0) == 0) {
   return;
  }
  i6 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i7 + 32 >> 2] | 0) | 0;
  if ((i6 | 0) == 0) {
   return;
  }
  __ZN7WebCore24InspectorInstrumentation18didFailLoadingImplEPNS_19InstrumentingAgentsEmPNS_14DocumentLoaderERKNS_13ResourceErrorE(i6, i3, i2, i9);
  return;
 } else {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i8 >> 2] | 0) + 72 >> 2] & 1](i8, i2, i3);
  i8 = HEAP32[i5 >> 2] | 0;
  if ((i8 | 0) == 0) {
   return;
  }
  i5 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i8 + 32 >> 2] | 0) | 0;
  if ((i5 | 0) == 0) {
   return;
  }
  __ZN7WebCore24InspectorInstrumentation20didFinishLoadingImplEPNS_19InstrumentingAgentsEmPNS_14DocumentLoaderEd(i5, i3, i2, +0);
  return;
 }
}
function __ZN7WebCore20ResourceLoadNotifier26dispatchDidReceiveResponseEPNS_14DocumentLoaderEmRKNS_16ResourceResponseEPNS_14ResourceLoaderE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i1 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i9 = 4;
  } else {
   i10 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i1 + 32 >> 2] | 0) | 0;
   if ((i10 | 0) == 0) {
    i9 = 4;
    break;
   }
   __ZN7WebCore24InspectorInstrumentation31willReceiveResourceResponseImplEPNS_19InstrumentingAgentsEmRKNS_16ResourceResponseEPNS_5FrameE(i7, i10, i3, i4, i1);
  }
 } while (0);
 if ((i9 | 0) == 4) {
  __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i7);
 }
 i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 84 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i9 >> 2] | 0) + 64 >> 2] & 1](i9, i2, i3, i4);
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i7);
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore24InspectorInstrumentation30didReceiveResourceResponseImplERKNS_30InspectorInstrumentationCookieEmPNS_14DocumentLoaderERKNS_16ResourceResponseEPNS_14ResourceLoaderE(i7, i3, i2, i4, i5);
 __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i7);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore20ResourceLoadNotifier13didFailToLoadEPNS_14ResourceLoaderERKNS_13ResourceErrorE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = i1 | 0;
 i1 = HEAP32[(HEAP32[i4 >> 2] | 0) + 32 >> 2] | 0;
 if ((i1 | 0) != 0) {
  __ZN7WebCore15ProgressTracker16completeProgressEm(HEAP32[i1 + 52 >> 2] | 0, HEAP32[i2 + 564 >> 2] | 0);
 }
 if ((HEAP8[i3 + 16 | 0] & 1) == 0) {
  i1 = HEAP32[(HEAP32[i4 >> 2] | 0) + 84 >> 2] | 0;
  i5 = i2 + 16 | 0;
  i6 = i2 + 564 | 0;
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 76 >> 2] & 1](i1, HEAP32[i5 >> 2] | 0, HEAP32[i6 >> 2] | 0, i3);
  i7 = i5;
  i8 = i6;
 } else {
  i7 = i2 + 16 | 0;
  i8 = i2 + 564 | 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i8 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i2 + 32 >> 2] | 0) | 0;
 if ((i8 | 0) == 0) {
  return;
 }
 __ZN7WebCore24InspectorInstrumentation18didFailLoadingImplEPNS_19InstrumentingAgentsEmPNS_14DocumentLoaderERKNS_13ResourceErrorE(i8, i7, i4, i3);
 return;
}
function __ZN7WebCore20ResourceLoadNotifier14didReceiveDataEPNS_14ResourceLoaderEPKcii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = i1 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 i7 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = i1;
  i9 = i2 + 564 | 0;
 } else {
  i1 = i2 + 564 | 0;
  __ZN7WebCore15ProgressTracker17incrementProgressEmPKci(HEAP32[i7 + 52 >> 2] | 0, HEAP32[i1 >> 2] | 0, i3, i4);
  i8 = HEAP32[i6 >> 2] | 0;
  i9 = i1;
 }
 i1 = HEAP32[i9 >> 2] | 0;
 i9 = HEAP32[i8 + 84 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i9 >> 2] | 0) + 68 >> 2] & 1](i9, HEAP32[i2 + 16 >> 2] | 0, i1, i4);
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i6 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i2 + 32 >> 2] | 0) | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 __ZN7WebCore24InspectorInstrumentation18didReceiveDataImplEPNS_19InstrumentingAgentsEmPKcii(i6, i1, i3, i4, i5);
 return;
}
function __ZN7WebCore20ResourceLoadNotifier13didFinishLoadEPNS_14ResourceLoaderEd(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = i1;
  i7 = i2 + 564 | 0;
 } else {
  i1 = i2 + 564 | 0;
  __ZN7WebCore15ProgressTracker16completeProgressEm(HEAP32[i5 + 52 >> 2] | 0, HEAP32[i1 >> 2] | 0);
  i6 = HEAP32[i4 >> 2] | 0;
  i7 = i1;
 }
 i1 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i6 + 84 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i7 >> 2] | 0) + 72 >> 2] & 1](i7, i1, i2);
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  return;
 }
 i4 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i7 + 32 >> 2] | 0) | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 __ZN7WebCore24InspectorInstrumentation20didFinishLoadingImplEPNS_19InstrumentingAgentsEmPNS_14DocumentLoaderEd(i4, i2, i1, d3);
 return;
}
function __ZN7WebCore20ResourceLoadNotifier18didReceiveResponseEPNS_14ResourceLoaderERKNS_16ResourceResponseE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i2 + 16 | 0;
 __ZN7WebCore14DocumentLoader11addResponseERKNS_16ResourceResponseE(HEAP32[i4 >> 2] | 0, i3);
 i5 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = i2 + 564 | 0;
 } else {
  i7 = i2 + 564 | 0;
  __ZN7WebCore15ProgressTracker17incrementProgressEmRKNS_16ResourceResponseE(HEAP32[i5 + 52 >> 2] | 0, HEAP32[i7 >> 2] | 0, i3);
  i6 = i7;
 }
 __ZN7WebCore20ResourceLoadNotifier26dispatchDidReceiveResponseEPNS_14DocumentLoaderEmRKNS_16ResourceResponseEPNS_14ResourceLoaderE(i1, HEAP32[i4 >> 2] | 0, HEAP32[i6 >> 2] | 0, i3, i2);
 return;
}
function __ZN7WebCore20ResourceLoadNotifier22dispatchDidFailLoadingEPNS_14DocumentLoaderEmRKNS_13ResourceErrorE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i1 | 0;
 i1 = HEAP32[(HEAP32[i5 >> 2] | 0) + 84 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 76 >> 2] & 1](i1, i2, i3, i4);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i5 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i1 + 32 >> 2] | 0) | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 __ZN7WebCore24InspectorInstrumentation18didFailLoadingImplEPNS_19InstrumentingAgentsEmPNS_14DocumentLoaderERKNS_13ResourceErrorE(i5, i3, i2, i4);
 return;
}
function __ZN7WebCore20ResourceLoadNotifier22dispatchDidReceiveDataEPNS_14DocumentLoaderEmPKcii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0;
 i7 = i1 | 0;
 i1 = HEAP32[(HEAP32[i7 >> 2] | 0) + 84 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 68 >> 2] & 1](i1, i2, i3, i5);
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i7 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i2 + 32 >> 2] | 0) | 0;
 if ((i7 | 0) == 0) {
  return;
 }
 __ZN7WebCore24InspectorInstrumentation18didReceiveDataImplEPNS_19InstrumentingAgentsEmPKcii(i7, i3, i4, i5, i6);
 return;
}
function __ZN7WebCore20ResourceLoadNotifier24dispatchDidFinishLoadingEPNS_14DocumentLoaderEmd(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 var i5 = 0;
 i5 = i1 | 0;
 i1 = HEAP32[(HEAP32[i5 >> 2] | 0) + 84 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 72 >> 2] & 1](i1, i2, i3);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i5 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i1 + 32 >> 2] | 0) | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 __ZN7WebCore24InspectorInstrumentation20didFinishLoadingImplEPNS_19InstrumentingAgentsEmPNS_14DocumentLoaderEd(i5, i3, i2, d4);
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
function __ZN7WebCore20ResourceLoadNotifier15willSendRequestEPNS_14ResourceLoaderERNS_15ResourceRequestERKNS_16ResourceResponseE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore11FrameLoader14applyUserAgentERNS_15ResourceRequestE((HEAP32[i1 >> 2] | 0) + 80 | 0, i3);
 __ZN7WebCore20ResourceLoadNotifier23dispatchWillSendRequestEPNS_14DocumentLoaderEmRNS_15ResourceRequestERKNS_16ResourceResponseE(i1, HEAP32[i2 + 16 >> 2] | 0, HEAP32[i2 + 564 >> 2] | 0, i3, i4);
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
function __ZN7WebCore20ResourceLoadNotifier33didReceiveAuthenticationChallengeEPNS_14ResourceLoaderERKNS_23AuthenticationChallengeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 84 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 56 >> 2] & 1](i4, HEAP32[i2 + 16 >> 2] | 0, HEAP32[i2 + 564 >> 2] | 0, i3);
 return;
}
function __ZN7WebCore20ResourceLoadNotifier32didCancelAuthenticationChallengeEPNS_14ResourceLoaderERKNS_23AuthenticationChallengeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 84 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] & 1](i4, HEAP32[i2 + 16 >> 2] | 0, HEAP32[i2 + 564 >> 2] | 0, i3);
 return;
}
function __ZN7WebCore20ResourceLoadNotifier33didReceiveAuthenticationChallengeEmPNS_14DocumentLoaderERKNS_23AuthenticationChallengeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = HEAP32[(HEAP32[i1 >> 2] | 0) + 84 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i5 >> 2] | 0) + 56 >> 2] & 1](i5, i3, i2, i4);
 return;
}
function __ZN7WebCore20ResourceLoadNotifier32didCancelAuthenticationChallengeEmPNS_14DocumentLoaderERKNS_23AuthenticationChallengeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = HEAP32[(HEAP32[i1 >> 2] | 0) + 84 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i5 >> 2] | 0) + 60 >> 2] & 1](i5, i3, i2, i4);
 return;
}
function __ZN7WebCore20ResourceLoadNotifier32assignIdentifierToInitialRequestEmPNS_14DocumentLoaderERKNS_15ResourceRequestE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = HEAP32[(HEAP32[i1 >> 2] | 0) + 84 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] & 1](i5, i2, i3, i4);
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
 FUNCTION_TABLE_viiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
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
function __ZN7WebCore20ResourceLoadNotifierC2ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore20ResourceLoadNotifierC1ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
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
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore20ResourceLoadNotifierC2ERNS_5FrameE,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore20ResourceLoadNotifier22dispatchDidReceiveDataEPNS_14DocumentLoaderEmPKcii","__ZN7WebCore20ResourceLoadNotifier29sendRemainingDelegateMessagesEPNS_14DocumentLoaderEmRKNS_15ResourceRequestERKNS_16ResourceResponseEPKciiRKNS_13ResourceErrorE","_strlen","__ZN7WebCore20ResourceLoadNotifier14didReceiveDataEPNS_14ResourceLoaderEPKcii","__ZN7WebCore20ResourceLoadNotifier15willSendRequestEPNS_14ResourceLoaderERNS_15ResourceRequestERKNS_16ResourceResponseE","__ZN7WebCore20ResourceLoadNotifier13didFailToLoadEPNS_14ResourceLoaderERKNS_13ResourceErrorE","__ZN7WebCore20ResourceLoadNotifier32didCancelAuthenticationChallengeEmPNS_14DocumentLoaderERKNS_23AuthenticationChallengeE","_memset","_memcpy","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","__ZN7WebCore20ResourceLoadNotifier23dispatchWillSendRequestEPNS_14DocumentLoaderEmRNS_15ResourceRequestERKNS_16ResourceResponseE","__ZN7WebCore20ResourceLoadNotifier18didReceiveResponseEPNS_14ResourceLoaderERKNS_16ResourceResponseE","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_","__ZN7WebCore20ResourceLoadNotifier33didReceiveAuthenticationChallengeEPNS_14ResourceLoaderERKNS_23AuthenticationChallengeE","__ZN7WebCore20ResourceLoadNotifier24dispatchDidFinishLoadingEPNS_14DocumentLoaderEmd","__ZN7WebCore20ResourceLoadNotifier32didCancelAuthenticationChallengeEPNS_14ResourceLoaderERKNS_23AuthenticationChallengeE","__ZN7WebCore20ResourceLoadNotifier13didFinishLoadEPNS_14ResourceLoaderEd","__ZN7WebCore20ResourceLoadNotifierC2ERNS_5FrameE","__ZN7WebCore20ResourceLoadNotifier26dispatchDidReceiveResponseEPNS_14DocumentLoaderEmRKNS_16ResourceResponseEPNS_14ResourceLoaderE","__ZN7WebCore20ResourceLoadNotifier22dispatchDidFailLoadingEPNS_14DocumentLoaderEmRKNS_13ResourceErrorE","__ZN7WebCore20ResourceLoadNotifier33didReceiveAuthenticationChallengeEmPNS_14DocumentLoaderERKNS_23AuthenticationChallengeE","__ZN7WebCore20ResourceLoadNotifier32assignIdentifierToInitialRequestEmPNS_14DocumentLoaderERKNS_15ResourceRequestE"]

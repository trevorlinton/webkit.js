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
H_BASE = parentModule["_malloc"](144 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 144;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore18StyleSheetContentsC1EPNS_15StyleRuleImportERKN3WTF6StringERKNS_16CSSParserContextE;
var __ZN7WebCore18StyleSheetContentsC1ERKS0_;
var __ZN7WebCore18StyleSheetContentsD1Ev;
/* memory initializer */ allocate([47,75,72,84,77,76,70,105,120,101,115,46,99,115,115,0,47,42,32,75,72,84,77,76,32,102,105,120,32,115,116,121,108,101,115,104,101,101,116,32,42,47,10,47,42,32,119,111,114,107,32,97,114,111,117,110,100,32,116,104,101,32,104,111,114,105,122,111,110,116,97,108,32,115,99,114,111,108,108,98,97,114,115,32,42,47,10,35,99,111,108,117,109,110,45,99,111,110,116,101,110,116,32,123,32,109,97,114,103,105,110,45,108,101,102,116,58,32,48,59,32,125,10,10,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var __ZN3WTF8starAtomE=env.__ZN3WTF8starAtomE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
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
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _llvm_trap=env._llvm_trap;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIN7WebCore3URLELj256EEES5_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS2_7URLHashEEENS_10HashTraitsIS5_EESB_E3addINS_21ListHashSetTranslatorIS8_EERKS3_PNS_24ListHashSetNodeAllocatorIS3_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS5_S5_S6_S9_SB_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = i2 + 4 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i11 = 8;
    i12 = 1;
   } else {
    i13 = i10 << 1;
    i11 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i13 | 0) ? i10 : i13;
    i12 = (i10 | 0) == 0;
   }
   HEAP32[i9 >> 2] = i11;
   i9 = i2 + 8 | 0;
   HEAP32[i9 >> 2] = i11 - 1;
   HEAP32[i7 >> 2] = __ZN3WTF16fastZeroedMallocEj(i11 << 2) | 0;
   if (i12) {
    HEAP32[i2 + 16 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(0);
    i14 = HEAP32[i7 >> 2] | 0;
    i15 = i9;
    break;
   } else {
    _llvm_trap();
   }
  } else {
   i14 = i8;
   i15 = i2 + 8 | 0;
  }
 } while (0);
 i8 = HEAP32[i15 >> 2] | 0;
 i12 = i3 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 i9 = HEAP32[i11 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i16 = i9 >>> 7;
 } else {
  i16 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i11) | 0;
 }
 i11 = (i16 >>> 23) + ~i16 | 0;
 i9 = i11 << 12 ^ i11;
 i11 = i9 >>> 7 ^ i9;
 i9 = i11 << 2 ^ i11;
 i11 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i10 = i16;
 i16 = 0;
 while (1) {
  i13 = i10 & i8;
  i17 = i14 + (i13 << 2) | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  i19 = i18;
  if ((i19 | 0) == 0) {
   break;
  } else if ((i19 | 0) == (-1 | 0)) {
   i20 = i17;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(HEAP32[i18 >> 2] | 0, HEAP32[i12 >> 2] | 0) | 0) {
    i21 = 14;
    break;
   } else {
    i20 = i9;
   }
  }
  i18 = (i16 | 0) == 0 ? i11 : i16;
  i9 = i20;
  i10 = i18 + i13 | 0;
  i16 = i18;
 }
 if ((i21 | 0) == 14) {
  i21 = (HEAP32[i7 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i16 = i1;
  HEAP32[i16 >> 2] = i17;
  HEAP32[i16 + 4 >> 2] = i21;
  HEAP8[i1 + 8 | 0] = 0;
  STACKTOP = i5;
  return;
 }
 if ((i9 | 0) == 0) {
  i22 = i17;
 } else {
  HEAP32[i9 >> 2] = 0;
  i17 = i2 + 16 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) - 1;
  i22 = i9;
 }
 i9 = HEAP32[i4 >> 2] | 0;
 i4 = i9 | 0;
 i17 = HEAP32[i4 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i23 = __ZN3WTF10fastMallocEj(56) | 0;
 } else {
  i21 = HEAP32[i17 + 52 >> 2] | 0;
  do {
   if ((i21 | 0) == 0) {
    i16 = i9 + 4 | 0;
    if ((HEAP8[i16] & 1) != 0) {
     i24 = 0;
     break;
    }
    i10 = i17 + 56 | 0;
    if ((i10 | 0) != (i9 + 14344 | 0)) {
     i24 = i10;
     break;
    }
    HEAP8[i16] = 1;
    i24 = 0;
   } else {
    i24 = i21;
   }
  } while (0);
  HEAP32[i4 >> 2] = i24;
  i23 = i17;
 }
 i17 = HEAP32[i12 >> 2] | 0;
 HEAP32[i23 >> 2] = i17;
 if ((i17 | 0) != 0) {
  i12 = i17 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = i3 + 4 | 0;
 i17 = i23 + 4 | 0;
 i24 = HEAP8[i17] & -2 | HEAP8[i12] & 1;
 HEAP8[i17] = i24;
 HEAP8[i17] = i24 & -3 | HEAP8[i12] & 2;
 HEAP32[i23 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i23 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i23 + 16 >> 2] = HEAP32[i3 + 16 >> 2];
 HEAP32[i23 + 20 >> 2] = HEAP32[i3 + 20 >> 2];
 HEAP32[i23 + 24 >> 2] = HEAP32[i3 + 24 >> 2];
 HEAP32[i23 + 28 >> 2] = HEAP32[i3 + 28 >> 2];
 HEAP32[i23 + 32 >> 2] = HEAP32[i3 + 32 >> 2];
 HEAP32[i23 + 36 >> 2] = HEAP32[i3 + 36 >> 2];
 HEAP32[i23 + 40 >> 2] = HEAP32[i3 + 40 >> 2];
 HEAP32[i23 + 44 >> 2] = HEAP32[i3 + 44 >> 2];
 HEAP32[i23 + 48 >> 2] = 0;
 HEAP32[i23 + 52 >> 2] = 0;
 HEAP32[i22 >> 2] = i23;
 i23 = i2 + 12 | 0;
 i3 = (HEAP32[i23 >> 2] | 0) + 1 | 0;
 HEAP32[i23 >> 2] = i3;
 i23 = i2 + 16 | 0;
 i12 = i2 + 4 | 0;
 i24 = HEAP32[i12 >> 2] | 0;
 if (((HEAP32[i23 >> 2] | 0) + i3 << 1 | 0) < (i24 | 0)) {
  i25 = i22;
  i26 = i24;
 } else {
  i17 = (i24 | 0) == 0;
  if (i17) {
   i27 = 8;
  } else {
   i4 = i24 << 1;
   i27 = (i3 * 6 & -1 | 0) < (i4 | 0) ? i24 : i4;
  }
  i4 = HEAP32[i7 >> 2] | 0;
  HEAP32[i12 >> 2] = i27;
  HEAP32[i15 >> 2] = i27 - 1;
  HEAP32[i7 >> 2] = __ZN3WTF16fastZeroedMallocEj(i27 << 2) | 0;
  if (i17) {
   i28 = 0;
  } else {
   i17 = i6 | 0;
   i27 = 0;
   i15 = 0;
   while (1) {
    i3 = i4 + (i27 << 2) | 0;
    i21 = HEAP32[i3 >> 2] | 0;
    if ((i21 | 0) == (-1 | 0) | (i21 | 0) == 0) {
     i29 = i15;
    } else {
     __ZN3WTF9HashTableIPNS_15ListHashSetNodeIN7WebCore3URLELj256EEES5_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS2_7URLHashEEENS_10HashTraitsIS5_EESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES5_EENSt3__14pairIPS5_bEERKT0_(i6, i2, i3);
     i21 = HEAP32[i17 >> 2] | 0;
     HEAP32[i21 >> 2] = HEAP32[i3 >> 2];
     i29 = (i3 | 0) == (i22 | 0) ? i21 : i15;
    }
    i21 = i27 + 1 | 0;
    if ((i21 | 0) == (i24 | 0)) {
     i28 = i29;
     break;
    } else {
     i27 = i21;
     i15 = i29;
    }
   }
  }
  HEAP32[i23 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
  i25 = i28;
  i26 = HEAP32[i12 >> 2] | 0;
 }
 i12 = (HEAP32[i7 >> 2] | 0) + (i26 << 2) | 0;
 i26 = i1;
 HEAP32[i26 >> 2] = i25;
 HEAP32[i26 + 4 >> 2] = i12;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore18StyleSheetContents23addSubresourceStyleURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 _memset(i6 | 0, 0, 20) | 0;
 i7 = i6 | 0;
 i8 = i6 + 4 | 0;
 i9 = i6 + 12 | 0;
 __ZN3WTF5DequeIPN7WebCore18StyleSheetContentsELj0EE14expandCapacityEv(i6);
 i10 = HEAP32[i8 >> 2] | 0;
 i11 = HEAP32[i6 + 8 >> 2] | 0;
 i12 = HEAP32[i9 >> 2] | 0;
 i13 = HEAP32[i7 >> 2] | 0;
 i14 = i6 + 8 | 0;
 HEAP32[i11 + (i10 << 2) >> 2] = i1;
 i15 = (i10 | 0) == (i12 - 1 | 0) ? 0 : i10 + 1 | 0;
 HEAP32[i8 >> 2] = i15;
 if ((i13 | 0) == (i15 | 0)) {
  i16 = i11;
 } else {
  i10 = i2 | 0;
  i17 = i2 + 28 | 0;
  i18 = i4 + 8 | 0;
  i19 = i4 | 0;
  i20 = i2 + 24 | 0;
  i21 = i2 + 20 | 0;
  i22 = i13;
  i13 = i11;
  i11 = i12;
  i12 = i15;
  while (1) {
   i15 = HEAP32[i13 + (i22 << 2) >> 2] | 0;
   HEAP32[i7 >> 2] = (i22 | 0) == (i11 - 1 | 0) ? 0 : i22 + 1 | 0;
   i23 = i15 + 24 | 0;
   if ((HEAP32[i23 >> 2] | 0) == 0) {
    i24 = i11;
    i25 = i12;
   } else {
    i26 = i15 + 16 | 0;
    i27 = 0;
    i28 = i11;
    i29 = i12;
    while (1) {
     i30 = (HEAP32[(HEAP32[i26 >> 2] | 0) + (i27 << 2) >> 2] | 0) + 28 | 0;
     i31 = HEAP32[i30 >> 2] | 0;
     do {
      if ((i31 | 0) == 0) {
       i32 = i28;
       i33 = i29;
      } else {
       i34 = HEAP32[i7 >> 2] | 0;
       do {
        if ((i34 | 0) == 0) {
         if ((i29 | 0) == 0) {
          if ((i28 | 0) == 0) {
           i35 = 12;
           break;
          } else {
           i36 = 0;
           i37 = i28;
           break;
          }
         } else {
          if ((i29 | 0) == (i28 - 1 | 0)) {
           i35 = 12;
           break;
          } else {
           i36 = i29;
           i37 = i28;
           break;
          }
         }
        } else {
         if ((i29 + 1 | 0) == (i34 | 0)) {
          i35 = 12;
         } else {
          i36 = i29;
          i37 = i28;
         }
        }
       } while (0);
       if ((i35 | 0) == 12) {
        i35 = 0;
        __ZN3WTF5DequeIPN7WebCore18StyleSheetContentsELj0EE14expandCapacityEv(i6);
        i36 = HEAP32[i8 >> 2] | 0;
        i37 = HEAP32[i9 >> 2] | 0;
       }
       HEAP32[(HEAP32[i14 >> 2] | 0) + (i36 << 2) >> 2] = i31;
       i34 = (i36 | 0) == (i37 - 1 | 0) ? 0 : i36 + 1 | 0;
       HEAP32[i8 >> 2] = i34;
       i38 = (HEAP32[i30 >> 2] | 0) + 64 | 0;
       if ((HEAP32[i38 >> 2] | 0) == 0) {
        i32 = i37;
        i33 = i34;
        break;
       }
       HEAP32[i5 >> 2] = HEAP32[i17 >> 2];
       __ZN3WTF9HashTableIPNS_15ListHashSetNodeIN7WebCore3URLELj256EEES5_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS2_7URLHashEEENS_10HashTraitsIS5_EESB_E3addINS_21ListHashSetTranslatorIS8_EERKS3_PNS_24ListHashSetNodeAllocatorIS3_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS5_S5_S6_S9_SB_SB_EEEEOT0_OT1_(i4, i10, i38, i5);
       if ((HEAP8[i18] & 1) == 0) {
        i32 = i37;
        i33 = i34;
        break;
       }
       i38 = HEAP32[HEAP32[i19 >> 2] >> 2] | 0;
       HEAP32[i38 + 48 >> 2] = HEAP32[i20 >> 2];
       HEAP32[i38 + 52 >> 2] = 0;
       i39 = HEAP32[i20 >> 2] | 0;
       if ((i39 | 0) == 0) {
        HEAP32[i21 >> 2] = i38;
       } else {
        HEAP32[i39 + 52 >> 2] = i38;
       }
       HEAP32[i20 >> 2] = i38;
       i32 = i37;
       i33 = i34;
      }
     } while (0);
     i30 = i27 + 1 | 0;
     if (i30 >>> 0 < (HEAP32[i23 >> 2] | 0) >>> 0) {
      i27 = i30;
      i28 = i32;
      i29 = i33;
     } else {
      i24 = i32;
      i25 = i33;
      break;
     }
    }
   }
   i29 = i15 + 36 | 0;
   if ((HEAP32[i29 >> 2] | 0) != 0) {
    i28 = i15 + 28 | 0;
    i27 = 0;
    while (1) {
     i23 = HEAP32[(HEAP32[i28 >> 2] | 0) + (i27 << 2) >> 2] | 0;
     i26 = HEAP32[i23 + 4 >> 2] & 31;
     if ((i26 | 0) == 1) {
      __ZNK7WebCore15StyleProperties23addSubresourceStyleURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEEPNS_18StyleSheetContentsE(HEAP32[i23 + 8 >> 2] | 0, i2, i1);
     } else if ((i26 | 0) == 5) {
      __ZNK7WebCore15StyleProperties23addSubresourceStyleURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEEPNS_18StyleSheetContentsE(HEAP32[i23 + 8 >> 2] | 0, i2, i1);
     }
     i27 = i27 + 1 | 0;
     if (i27 >>> 0 >= (HEAP32[i29 >> 2] | 0) >>> 0) {
      break;
     }
    }
   }
   i29 = HEAP32[i7 >> 2] | 0;
   i27 = HEAP32[i14 >> 2] | 0;
   if ((i29 | 0) == (i25 | 0)) {
    i16 = i27;
    break;
   } else {
    i22 = i29;
    i13 = i27;
    i11 = i24;
    i12 = i25;
   }
  }
 }
 if ((i16 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i14 >> 2] = 0;
 HEAP32[i9 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i16);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18StyleSheetContentsC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 0;
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i6 = i7 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = HEAP32[i2 + 24 >> 2] | 0;
 i7 = i1 + 16 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i1 + 20 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 24 | 0;
 HEAP32[i9 >> 2] = i6;
 do {
  if ((i6 | 0) != 0) {
   if (i6 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i10 = __ZN3WTF18fastMallocGoodSizeEj(i6 << 2) | 0;
   HEAP32[i8 >> 2] = i10 >>> 2;
   i11 = __ZN3WTF10fastMallocEj(i10) | 0;
   HEAP32[i7 >> 2] = i11;
   if ((i11 | 0) == 0) {
    break;
   }
   _memset(i11 | 0, 0, HEAP32[i9 >> 2] << 2 | 0) | 0;
  }
 } while (0);
 i9 = i2 + 36 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 i8 = i1 + 28 | 0;
 HEAP32[i8 >> 2] = 0;
 i6 = i1 + 32 | 0;
 HEAP32[i6 >> 2] = 0;
 i11 = i1 + 36 | 0;
 HEAP32[i11 >> 2] = i7;
 do {
  if ((i7 | 0) != 0) {
   if (i7 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i10 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 2) | 0;
   HEAP32[i6 >> 2] = i10 >>> 2;
   i12 = __ZN3WTF10fastMallocEj(i10) | 0;
   HEAP32[i8 >> 2] = i12;
   if ((i12 | 0) == 0) {
    break;
   }
   _memset(i12 | 0, 0, HEAP32[i11 >> 2] << 2 | 0) | 0;
  }
 } while (0);
 i6 = i1 + 40 | 0;
 i7 = i6 | 0;
 _memset(i6 | 0, 0, 20) | 0;
 i6 = HEAP32[i2 + 40 >> 2] | 0;
 i12 = HEAP32[i2 + 44 >> 2] | 0;
 i10 = i6 + (i12 << 3) | 0;
 L21 : do {
  if ((HEAP32[i2 + 52 >> 2] | 0) != 0) {
   L23 : do {
    if ((i12 | 0) == 0) {
     i13 = i6;
    } else {
     i14 = i6;
     while (1) {
      i15 = HEAP32[i14 >> 2] | 0;
      if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
       i13 = i14;
       break L23;
      }
      i14 = i14 + 8 | 0;
      if ((i14 | 0) == (i10 | 0)) {
       break L21;
      }
     }
    }
   } while (0);
   if ((i13 | 0) == (i10 | 0)) {
    break;
   } else {
    i16 = i13;
   }
   while (1) {
    __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_22IdentityHashTranslatorIS6_EERKS1_RKS3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i4, i7, i16 | 0, i16);
    i14 = i16 + 8 | 0;
    if ((i14 | 0) == (i10 | 0)) {
     break L21;
    } else {
     i17 = i14;
    }
    while (1) {
     i14 = HEAP32[i17 >> 2] | 0;
     if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
      break;
     }
     i14 = i17 + 8 | 0;
     if ((i14 | 0) == (i10 | 0)) {
      break L21;
     } else {
      i17 = i14;
     }
    }
    if ((i17 | 0) == (i10 | 0)) {
     break;
    } else {
     i16 = i17;
    }
   }
  }
 } while (0);
 i17 = i1 + 60 | 0;
 i16 = HEAP8[i17] | 1;
 HEAP8[i17] = i16;
 i10 = i2 + 60 | 0;
 i7 = i16 & -3 | HEAP8[i10] & 2;
 HEAP8[i17] = i7;
 i16 = i7 & -13 | HEAP8[i10] & 4;
 HEAP8[i17] = i16;
 HEAP8[i17] = i16 & -121 | HEAP8[i10] & 16;
 __ZN7WebCore16CSSParserContextC2ERKS0_(i1 + 64 | 0, i2 + 64 | 0);
 HEAP32[i1 + 132 >> 2] = 0;
 HEAP32[i1 + 136 >> 2] = 0;
 HEAP32[i1 + 140 >> 2] = 0;
 if ((HEAP32[i11 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i2 + 28 | 0;
 i2 = i5 | 0;
 i10 = 0;
 while (1) {
  if ((HEAP32[i9 >> 2] | 0) >>> 0 <= i10 >>> 0) {
   i18 = 27;
   break;
  }
  i16 = HEAP32[i8 >> 2] | 0;
  __ZNK7WebCore13StyleRuleBase4copyEv(i5, HEAP32[(HEAP32[i1 >> 2] | 0) + (i10 << 2) >> 2] | 0);
  i17 = i16 + (i10 << 2) | 0;
  i16 = HEAP32[i17 >> 2] | 0;
  HEAP32[i17 >> 2] = HEAP32[i2 >> 2];
  do {
   if ((i16 | 0) != 0) {
    i17 = i16 | 0;
    i7 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
    if ((i7 | 0) == 0) {
     __ZN7WebCore13StyleRuleBase7destroyEv(i16);
     break;
    } else {
     HEAP32[i17 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i16 = i10 + 1 | 0;
  if (i16 >>> 0 < (HEAP32[i11 >> 2] | 0) >>> 0) {
   i10 = i16;
  } else {
   i18 = 35;
   break;
  }
 }
 if ((i18 | 0) == 27) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i18 | 0) == 35) {
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore18StyleSheetContentsC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 0;
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i6 = i7 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = HEAP32[i2 + 24 >> 2] | 0;
 i7 = i1 + 16 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i1 + 20 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 24 | 0;
 HEAP32[i9 >> 2] = i6;
 do {
  if ((i6 | 0) != 0) {
   if (i6 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i10 = __ZN3WTF18fastMallocGoodSizeEj(i6 << 2) | 0;
   HEAP32[i8 >> 2] = i10 >>> 2;
   i11 = __ZN3WTF10fastMallocEj(i10) | 0;
   HEAP32[i7 >> 2] = i11;
   if ((i11 | 0) == 0) {
    break;
   }
   _memset(i11 | 0, 0, HEAP32[i9 >> 2] << 2 | 0) | 0;
  }
 } while (0);
 i9 = i2 + 36 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 i8 = i1 + 28 | 0;
 HEAP32[i8 >> 2] = 0;
 i6 = i1 + 32 | 0;
 HEAP32[i6 >> 2] = 0;
 i11 = i1 + 36 | 0;
 HEAP32[i11 >> 2] = i7;
 do {
  if ((i7 | 0) != 0) {
   if (i7 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i10 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 2) | 0;
   HEAP32[i6 >> 2] = i10 >>> 2;
   i12 = __ZN3WTF10fastMallocEj(i10) | 0;
   HEAP32[i8 >> 2] = i12;
   if ((i12 | 0) == 0) {
    break;
   }
   _memset(i12 | 0, 0, HEAP32[i11 >> 2] << 2 | 0) | 0;
  }
 } while (0);
 i6 = i1 + 40 | 0;
 i7 = i6 | 0;
 _memset(i6 | 0, 0, 20) | 0;
 i6 = HEAP32[i2 + 40 >> 2] | 0;
 i12 = HEAP32[i2 + 44 >> 2] | 0;
 i10 = i6 + (i12 << 3) | 0;
 L21 : do {
  if ((HEAP32[i2 + 52 >> 2] | 0) != 0) {
   L23 : do {
    if ((i12 | 0) == 0) {
     i13 = i6;
    } else {
     i14 = i6;
     while (1) {
      i15 = HEAP32[i14 >> 2] | 0;
      if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
       i13 = i14;
       break L23;
      }
      i14 = i14 + 8 | 0;
      if ((i14 | 0) == (i10 | 0)) {
       break L21;
      }
     }
    }
   } while (0);
   if ((i13 | 0) == (i10 | 0)) {
    break;
   } else {
    i16 = i13;
   }
   while (1) {
    __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_22IdentityHashTranslatorIS6_EERKS1_RKS3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i4, i7, i16 | 0, i16);
    i14 = i16 + 8 | 0;
    if ((i14 | 0) == (i10 | 0)) {
     break L21;
    } else {
     i17 = i14;
    }
    while (1) {
     i14 = HEAP32[i17 >> 2] | 0;
     if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
      break;
     }
     i14 = i17 + 8 | 0;
     if ((i14 | 0) == (i10 | 0)) {
      break L21;
     } else {
      i17 = i14;
     }
    }
    if ((i17 | 0) == (i10 | 0)) {
     break;
    } else {
     i16 = i17;
    }
   }
  }
 } while (0);
 i17 = i1 + 60 | 0;
 i16 = HEAP8[i17] | 1;
 HEAP8[i17] = i16;
 i10 = i2 + 60 | 0;
 i7 = i16 & -3 | HEAP8[i10] & 2;
 HEAP8[i17] = i7;
 i16 = i7 & -13 | HEAP8[i10] & 4;
 HEAP8[i17] = i16;
 HEAP8[i17] = i16 & -121 | HEAP8[i10] & 16;
 __ZN7WebCore16CSSParserContextC2ERKS0_(i1 + 64 | 0, i2 + 64 | 0);
 HEAP32[i1 + 132 >> 2] = 0;
 HEAP32[i1 + 136 >> 2] = 0;
 HEAP32[i1 + 140 >> 2] = 0;
 if ((HEAP32[i11 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i2 + 28 | 0;
 i2 = i5 | 0;
 i10 = 0;
 while (1) {
  if ((HEAP32[i9 >> 2] | 0) >>> 0 <= i10 >>> 0) {
   i18 = 27;
   break;
  }
  i16 = HEAP32[i8 >> 2] | 0;
  __ZNK7WebCore13StyleRuleBase4copyEv(i5, HEAP32[(HEAP32[i1 >> 2] | 0) + (i10 << 2) >> 2] | 0);
  i17 = i16 + (i10 << 2) | 0;
  i16 = HEAP32[i17 >> 2] | 0;
  HEAP32[i17 >> 2] = HEAP32[i2 >> 2];
  do {
   if ((i16 | 0) != 0) {
    i17 = i16 | 0;
    i7 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
    if ((i7 | 0) == 0) {
     __ZN7WebCore13StyleRuleBase7destroyEv(i16);
     break;
    } else {
     HEAP32[i17 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i16 = i10 + 1 | 0;
  if (i16 >>> 0 < (HEAP32[i11 >> 2] | 0) >>> 0) {
   i10 = i16;
  } else {
   i18 = 35;
   break;
  }
 }
 if ((i18 | 0) == 27) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i18 | 0) == 35) {
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore18StyleSheetContents16parserAppendRuleEN3WTF10PassRefPtrINS_13StyleRuleBaseEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 i6 = HEAP32[i2 + 4 >> 2] & 31;
 if ((i6 | 0) == 1) {
  i7 = 14;
 } else if ((i6 | 0) == 3) {
  i6 = i1 + 16 | 0;
  i8 = i2;
  i9 = i1 + 24 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  if ((i10 | 0) == (HEAP32[i1 + 20 >> 2] | 0)) {
   __ZN3WTF6VectorINS_6RefPtrIN7WebCore15StyleRuleImportEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i10 + 1 | 0);
   HEAP32[(HEAP32[i6 >> 2] | 0) + (HEAP32[i9 >> 2] << 2) >> 2] = i8;
   if ((i2 | 0) != 0) {
    i11 = i2 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   }
  } else {
   HEAP32[(HEAP32[i6 >> 2] | 0) + (i10 << 2) >> 2] = i8;
   if ((i2 | 0) != 0) {
    i8 = i2 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   }
  }
  i8 = (HEAP32[i9 >> 2] | 0) + 1 | 0;
  HEAP32[i9 >> 2] = i8;
  i10 = _llvm_uadd_with_overflow_i32(i8 | 0, -1 | 0) | 0;
  if (!tempRet0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i8 = i6 | 0;
  HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + (i10 << 2) >> 2] | 0) + 8 >> 2] = i1;
  i10 = _llvm_uadd_with_overflow_i32(HEAP32[i9 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  __ZN7WebCore15StyleRuleImport17requestStyleSheetEv(HEAP32[(HEAP32[i8 >> 2] | 0) + (i10 << 2) >> 2] | 0);
  STACKTOP = i3;
  return;
 }
 do {
  if ((i7 | 0) == 14) {
   if ((__ZNK7WebCore15CSSSelectorList14componentCountEv(i2 + 12 | 0) | 0) >>> 0 <= 8192 >>> 0) {
    break;
   }
   __ZNK7WebCore9StyleRule55splitIntoMultipleRulesWithMaximumSelectorComponentCountEj(i4, HEAP32[i5 >> 2] | 0, 8192);
   i10 = i1 + 28 | 0;
   i8 = i4 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i6 = i4 + 8 | 0;
   i11 = HEAP32[i6 >> 2] | 0;
   i12 = i1 + 36 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   i14 = i13 + i11 | 0;
   if (i14 >>> 0 > (HEAP32[i1 + 32 >> 2] | 0) >>> 0) {
    __ZN3WTF6VectorINS_6RefPtrIN7WebCore13StyleRuleBaseEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i10, i14);
    i15 = HEAP32[i12 >> 2] | 0;
   } else {
    i15 = i13;
   }
   if (i14 >>> 0 < i15 >>> 0) {
    _WTFCrash();
   }
   i13 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) != 0) {
    i10 = 0;
    while (1) {
     i16 = HEAP32[i9 + (i10 << 2) >> 2] | 0;
     HEAP32[i13 + (i10 + i15 << 2) >> 2] = i16;
     if ((i16 | 0) != 0) {
      i17 = i16 | 0;
      HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     }
     i10 = i10 + 1 | 0;
     if (i10 >>> 0 >= i11 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i12 >> 2] = i14;
   i11 = HEAP32[i6 >> 2] | 0;
   if ((i11 | 0) != 0) {
    i10 = HEAP32[i8 >> 2] | 0;
    i13 = i10 + (i11 << 2) | 0;
    i11 = i10;
    while (1) {
     i10 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i10 | 0) != 0) {
       i9 = i10 | 0;
       i17 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
       if ((i17 | 0) == 0) {
        __ZN7WebCore13StyleRuleBase7destroyEv(i10 | 0);
        break;
       } else {
        HEAP32[i9 >> 2] = i17;
        break;
       }
      }
     } while (0);
     i11 = i11 + 4 | 0;
     if ((i11 | 0) == (i13 | 0)) {
      break;
     }
    }
    HEAP32[i6 >> 2] = 0;
   }
   i13 = HEAP32[i8 >> 2] | 0;
   if ((i13 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   HEAP32[i8 >> 2] = 0;
   HEAP32[i4 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i13);
   STACKTOP = i3;
   return;
  }
 } while (0);
 i4 = i1 + 28 | 0;
 i15 = i1 + 36 | 0;
 i2 = HEAP32[i15 >> 2] | 0;
 if ((i2 | 0) == (HEAP32[i1 + 32 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore13StyleRuleBaseEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i2 + 1 | 0);
  i1 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 >> 2] = i7;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  STACKTOP = i3;
  return;
 } else {
  i7 = (HEAP32[i4 >> 2] | 0) + (i2 << 2) | 0;
  i2 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP32[i7 >> 2] = i2;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore18StyleSheetContentsD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 __ZN7WebCore18StyleSheetContents10clearRulesEv(i1);
 i2 = i1 + 140 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 132 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 136 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = HEAP32[i1 + 44 >> 2] | 0;
  if ((i2 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = i3 + (i4 << 3) | 0;
    do {
     if ((HEAP32[i5 >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i4 << 3) + 4 >> 2] | 0;
      do {
       if ((i6 | 0) != 0) {
        i7 = i6 | 0;
        i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
        if ((i8 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i6);
         break;
        } else {
         HEAP32[i7 >> 2] = i8;
         break;
        }
       }
      } while (0);
      i6 = HEAP32[i5 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i8 = i6 | 0;
      i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i8 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i2 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 36 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = i1 + 28 | 0;
 if ((i2 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i7 = i5 + (i2 << 2) | 0;
  i2 = i5;
  while (1) {
   i5 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 | 0;
     i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i6 | 0) == 0) {
      __ZN7WebCore13StyleRuleBase7destroyEv(i5);
      break;
     } else {
      HEAP32[i8 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i2 = i2 + 4 | 0;
   if ((i2 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 32 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 24 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i7 = i1 + 16 | 0;
 if ((i4 | 0) != 0) {
  i2 = HEAP32[i7 >> 2] | 0;
  i5 = i2 + (i4 << 2) | 0;
  i4 = i2;
  while (1) {
   i2 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i6 = i2 | 0;
     i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore13StyleRuleBase7destroyEv(i2 | 0);
      break;
     } else {
      HEAP32[i6 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i5 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i1 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 8 >> 2] | 0;
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
function __ZN7WebCore18StyleSheetContentsD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 __ZN7WebCore18StyleSheetContents10clearRulesEv(i1);
 i2 = i1 + 140 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 132 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 136 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = HEAP32[i1 + 44 >> 2] | 0;
  if ((i2 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = i3 + (i4 << 3) | 0;
    do {
     if ((HEAP32[i5 >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i4 << 3) + 4 >> 2] | 0;
      do {
       if ((i6 | 0) != 0) {
        i7 = i6 | 0;
        i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
        if ((i8 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i6);
         break;
        } else {
         HEAP32[i7 >> 2] = i8;
         break;
        }
       }
      } while (0);
      i6 = HEAP32[i5 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i8 = i6 | 0;
      i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i8 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i2 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 36 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = i1 + 28 | 0;
 if ((i2 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i7 = i5 + (i2 << 2) | 0;
  i2 = i5;
  while (1) {
   i5 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 | 0;
     i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i6 | 0) == 0) {
      __ZN7WebCore13StyleRuleBase7destroyEv(i5);
      break;
     } else {
      HEAP32[i8 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i2 = i2 + 4 | 0;
   if ((i2 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 32 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 24 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i7 = i1 + 16 | 0;
 if ((i4 | 0) != 0) {
  i2 = HEAP32[i7 >> 2] | 0;
  i5 = i2 + (i4 << 2) | 0;
  i4 = i2;
  while (1) {
   i2 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i6 = i2 | 0;
     i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore13StyleRuleBase7destroyEv(i2 | 0);
      break;
     } else {
      HEAP32[i6 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i5 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i1 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 8 >> 2] | 0;
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
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EERKS1_SH_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 i10 = i9 >>> 7;
 i11 = (i9 >>> 30) + ~i10 | 0;
 i9 = i11 << 12 ^ i11;
 i11 = i9 >>> 7 ^ i9;
 i9 = i11 << 2 ^ i11;
 i11 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i12 = i10;
 i10 = 0;
 while (1) {
  i13 = i12 & i6;
  i14 = i7 + (i13 << 3) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15;
  if ((i16 | 0) == 0) {
   break;
  } else if ((i16 | 0) == (-1 | 0)) {
   i17 = i14;
  } else {
   if ((i15 | 0) == (i3 | 0)) {
    i18 = 6;
    break;
   } else {
    i17 = i9;
   }
  }
  i15 = (i10 | 0) == 0 ? i11 : i10;
  i9 = i17;
  i12 = i15 + i13 | 0;
  i10 = i15;
 }
 if ((i18 | 0) == 6) {
  i18 = i7 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i7 = i1;
  HEAP32[i7 >> 2] = i14;
  HEAP32[i7 + 4 >> 2] = i18;
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
 i9 = HEAP32[i4 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i4 = i9 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i19 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 do {
  if ((i8 | 0) != 0) {
   i9 = i8 | 0;
   i4 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i9 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i4;
 i8 = i2 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i9 | 0)) {
  i21 = i19;
  i22 = i9;
 } else {
  i9 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_(i2, i19) | 0;
  i21 = i9;
  i22 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i22 << 3) | 0;
 i22 = i1;
 HEAP32[i22 >> 2] = i21;
 HEAP32[i22 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_22IdentityHashTranslatorIS6_EERKS1_RKS3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i8 + 16 >> 2] | 0;
 i9 = i3 >>> 7;
 i10 = (i3 >>> 30) + ~i9 | 0;
 i3 = i10 << 12 ^ i10;
 i10 = i3 >>> 7 ^ i3;
 i3 = i10 << 2 ^ i10;
 i10 = i3 >>> 20 ^ i3 | 1;
 i3 = 0;
 i11 = i9;
 i9 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if ((i14 | 0) == (i8 | 0)) {
    i17 = 6;
    break;
   } else {
    i16 = i3;
   }
  }
  i14 = (i9 | 0) == 0 ? i10 : i9;
  i3 = i16;
  i11 = i14 + i12 | 0;
  i9 = i14;
 }
 if ((i17 | 0) == 6) {
  i17 = i7 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i7 = i1;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i7 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i3 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i3;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i3;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i13 = i3 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = i18 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i3;
 do {
  if ((i17 | 0) != 0) {
   i3 = i17 | 0;
   i13 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i3 >> 2] = i13;
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
  i17 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_(i2, i18) | 0;
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
function __ZN7WebCore18StyleSheetContents21parseAuthorStyleSheetEPKNS_19CachedCSSStyleSheetEPKNS_14SecurityOriginE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 2312 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 2304 | 0;
 i9 = i1 + 116 | 0;
 if (((HEAP32[i9 >> 2] | 0) - 1 | 0) >>> 0 < 2 >>> 0) {
  i10 = (HEAP8[i1 + 127 | 0] & 1) != 0;
 } else {
  i10 = 0;
 }
 HEAP8[i5] = 0;
 __ZNK7WebCore19CachedCSSStyleSheet9sheetTextEbPb(i6, i2, i10, i5);
 __ZN7WebCore9CSSParserC1ERKNS_16CSSParserContextE(i7, i1 + 64 | 0);
 __ZN7WebCore9CSSParser10parseSheetEPNS_18StyleSheetContentsERKN3WTF6StringEiPNS3_6VectorINS3_6RefPtrINS_17CSSRuleSourceDataEEELj0ENS3_15CrashOnOverflowEEEb(i7, i1, i6, 0, 0, 1);
 do {
  if ((HEAP8[i5] & 1) == 0) {
   if ((HEAP8[i1 + 60 | 0] & 4) != 0) {
    i11 = 8;
    break;
   }
   if ((i3 | 0) != 0) {
    if (__ZNK7WebCore14SecurityOrigin10canRequestERKNS_3URLE(i3, i1 + 64 | 0) | 0) {
     i11 = 8;
     break;
    }
   }
   __ZN7WebCore18StyleSheetContents10clearRulesEv(i1);
  } else {
   i11 = 8;
  }
 } while (0);
 do {
  if ((i11 | 0) == 8) {
   if ((HEAP8[i1 + 126 | 0] & 1) == 0) {
    break;
   }
   if (((HEAP32[i9 >> 2] | 0) - 1 | 0) >>> 0 >= 2 >>> 0) {
    break;
   }
   if (!(HEAP8[H_BASE + 136 | 0] | 0)) {
    i3 = __Znwj(4) | 0;
    HEAP32[i8 >> 2] = H_BASE + 24;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i3, i8);
    HEAP32[H_BASE + 144 >> 2] = i3;
    HEAP8[H_BASE + 136 | 0] = 1;
   }
   i3 = HEAP32[i1 + 64 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if (!(__ZNK3WTF10StringImpl8endsWithEPKcjb(i3, H_BASE + 8 | 0, 15, 1) | 0)) {
    break;
   }
   i3 = i6 | 0;
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i10 = HEAP32[HEAP32[H_BASE + 144 >> 2] >> 2] | 0;
   if ((i10 | 0) == 0) {
    if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
     i12 = i5;
    } else {
     break;
    }
   } else {
    if (!(__ZNK3WTF10StringImpl10startsWithEPKS0_(i10, i5) | 0)) {
     break;
    }
    i12 = HEAP32[i3 >> 2] | 0;
   }
   if ((i12 | 0) == 0) {
    i13 = 0;
   } else {
    i13 = HEAP32[i12 + 4 >> 2] | 0;
   }
   i3 = HEAP32[HEAP32[H_BASE + 144 >> 2] >> 2] | 0;
   if ((i3 | 0) == 0) {
    i14 = -1;
   } else {
    i14 = (HEAP32[i3 + 4 >> 2] | 0) - 1 | 0;
   }
   if (i13 >>> 0 < i14 >>> 0) {
    break;
   }
   __ZN7WebCore18StyleSheetContents10clearRulesEv(i1);
  }
 } while (0);
 __ZN7WebCore9CSSParserD1Ev(i7);
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i7 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore18StyleSheetContents17wrapperInsertRuleEN3WTF10PassRefPtrINS_13StyleRuleBaseEEEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
   i4 = i3;
  } else {
   if ((i3 | 0) == 0) {
    i5 = 0;
    return i5 | 0;
   } else {
    i4 = i3 - 1 | 0;
    break;
   }
  }
 } while (0);
 i3 = i1 + 16 | 0;
 i6 = i1 + 24 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i4 >>> 0 < i7 >>> 0) {
   i8 = HEAP32[i2 >> 2] | 0;
   i9 = i8;
   i10 = HEAP32[i8 + 4 >> 2] | 0;
  } else {
   i8 = HEAP32[i2 >> 2] | 0;
   i11 = HEAP32[i8 + 4 >> 2] | 0;
   if ((i4 | 0) == (i7 | 0)) {
    if ((i11 & 31 | 0) == 3) {
     i9 = i8;
     i10 = i11;
     break;
    }
   }
   i8 = i2 | 0;
   if ((i11 & 31 | 0) == 3) {
    i5 = 0;
    return i5 | 0;
   }
   i11 = i4 - i7 | 0;
   i12 = i1 + 28 | 0;
   i13 = i1 + 36 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == (HEAP32[i1 + 32 >> 2] | 0)) {
    __ZN3WTF6VectorINS_6RefPtrIN7WebCore13StyleRuleBaseEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i12, i14 + 1 | 0);
    i15 = HEAP32[i13 >> 2] | 0;
   } else {
    i15 = i14;
   }
   i14 = HEAP32[i12 >> 2] | 0;
   i12 = i14 + (i11 << 2) | 0;
   _memmove(i14 + (i11 + 1 << 2) | 0, i12 | 0, i15 - i11 << 2 | 0) | 0;
   i11 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i12 >> 2] = i11;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   i5 = 1;
   return i5 | 0;
  }
 } while (0);
 if ((i10 & 31 | 0) != 3) {
  i5 = 0;
  return i5 | 0;
 }
 if ((i7 | 0) == (HEAP32[i1 + 20 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore15StyleRuleImportEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i7 + 1 | 0);
  i16 = HEAP32[i6 >> 2] | 0;
 } else {
  i16 = i7;
 }
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i10 = i3 + (i4 << 2) | 0;
 _memmove(i3 + (i4 + 1 << 2) | 0, i10 | 0, i16 - i4 << 2 | 0) | 0;
 HEAP32[i10 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i10 = i9 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 i10 = (HEAP32[i6 >> 2] | 0) + 1 | 0;
 HEAP32[i6 >> 2] = i10;
 if (i10 >>> 0 <= i4 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + (i4 << 2) >> 2] | 0) + 8 >> 2] = i1;
 if ((HEAP32[i6 >> 2] | 0) >>> 0 <= i4 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 __ZN7WebCore15StyleRuleImport17requestStyleSheetEv(HEAP32[(HEAP32[i7 >> 2] | 0) + (i4 << 2) >> 2] | 0);
 i5 = 1;
 return i5 | 0;
}
function __ZN7WebCore18StyleSheetContents10clearRulesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 + 16 | 0;
 i3 = i1 + 24 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  i4 = 0;
 } else {
  i5 = i2 | 0;
  i6 = 0;
  while (1) {
   HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2] | 0) + 8 >> 2] = 0;
   i7 = i6 + 1 | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   if (i7 >>> 0 < i8 >>> 0) {
    i6 = i7;
   } else {
    i4 = i8;
    break;
   }
  }
 }
 i6 = i1 + 20 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) != 0) {
   i5 = i2 | 0;
   if ((i4 | 0) != 0) {
    i8 = HEAP32[i5 >> 2] | 0;
    i7 = i8 + (i4 << 2) | 0;
    i9 = i8;
    while (1) {
     i8 = HEAP32[i9 >> 2] | 0;
     do {
      if ((i8 | 0) != 0) {
       i10 = i8 | 0;
       i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
       if ((i11 | 0) == 0) {
        __ZN7WebCore13StyleRuleBase7destroyEv(i8 | 0);
        break;
       } else {
        HEAP32[i10 >> 2] = i11;
        break;
       }
      }
     } while (0);
     i9 = i9 + 4 | 0;
     if ((i9 | 0) == (i7 | 0)) {
      break;
     }
    }
    HEAP32[i3 >> 2] = 0;
   }
   i7 = HEAP32[i5 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   HEAP32[i5 >> 2] = 0;
   HEAP32[i6 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i7);
  }
 } while (0);
 i6 = i1 + 32 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) != 0) {
   i3 = i1 + 36 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   i2 = i1 + 28 | 0;
   if ((i4 | 0) != 0) {
    i7 = HEAP32[i2 >> 2] | 0;
    i9 = i7 + (i4 << 2) | 0;
    i4 = i7;
    while (1) {
     i7 = HEAP32[i4 >> 2] | 0;
     do {
      if ((i7 | 0) != 0) {
       i8 = i7 | 0;
       i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
       if ((i11 | 0) == 0) {
        __ZN7WebCore13StyleRuleBase7destroyEv(i7);
        break;
       } else {
        HEAP32[i8 >> 2] = i11;
        break;
       }
      }
     } while (0);
     i4 = i4 + 4 | 0;
     if ((i4 | 0) == (i9 | 0)) {
      break;
     }
    }
    HEAP32[i3 >> 2] = 0;
   }
   i9 = HEAP32[i2 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   HEAP32[i2 >> 2] = 0;
   HEAP32[i6 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i9);
  }
 } while (0);
 i6 = i1 + 12 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i6 = i1 | 0;
 i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  return;
 } else {
  HEAP32[i6 >> 2] = i9;
  return;
 }
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_(i1, i2) {
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
   i4 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E8reinsertEOS3_(i1, i5) | 0;
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
function __ZN7WebCore18StyleSheetContents11checkLoadedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 24 | 0;
 i3 = i1 + 16 | 0;
 i4 = 0;
 while (1) {
  if (i4 >>> 0 >= (HEAP32[i2 >> 2] | 0) >>> 0) {
   break;
  }
  if (__ZNK7WebCore15StyleRuleImport9isLoadingEv(HEAP32[(HEAP32[i3 >> 2] | 0) + (i4 << 2) >> 2] | 0) | 0) {
   i5 = 19;
   break;
  } else {
   i4 = i4 + 1 | 0;
  }
 }
 if ((i5 | 0) == 19) {
  return;
 }
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i5 = 7;
  } else {
   i2 = HEAP32[i3 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i5 = 7;
    break;
   }
   __ZN7WebCore18StyleSheetContents11checkLoadedEv(i2);
   i2 = i1 + 60 | 0;
   HEAP8[i2] = HEAP8[i2] | 1;
  }
 } while (0);
 L10 : do {
  if ((i5 | 0) == 7) {
   do {
    if ((HEAP32[i1 + 140 >> 2] | 0) != 0) {
     i3 = HEAP32[(HEAP32[HEAP32[i1 + 132 >> 2] >> 2] | 0) + 24 >> 2] | 0;
     if ((i3 | 0) == 0) {
      break;
     }
     i2 = i3 + 8 | 0;
     HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
     i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 144 >> 2] & 1](i3) | 0;
     i6 = i1 + 60 | 0;
     i7 = HEAP8[i6] | 0;
     HEAP8[i6] = i7 & -2 | i2 & 1;
     if (i2) {
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 148 >> 2] & 3](i3, (i7 & 8) != 0);
     }
     i7 = i3 + 8 | 0;
     i3 = i7 | 0;
     i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     HEAP32[i3 >> 2] = i2;
     if ((i2 | 0) >= 1) {
      break L10;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break L10;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
     break L10;
    }
   } while (0);
   i7 = i1 + 60 | 0;
   HEAP8[i7] = HEAP8[i7] | 1;
  }
 } while (0);
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore18StyleSheetContentsD2Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  return;
 } else {
  HEAP32[i4 >> 2] = i5;
  return;
 }
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E8reinsertEOS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i5 + 16 >> 2] | 0;
 i7 = i6 >>> 7;
 i8 = (i6 >>> 30) + ~i7 | 0;
 i6 = i8 << 12 ^ i8;
 i8 = i6 >>> 7 ^ i6;
 i6 = i8 << 2 ^ i8;
 i8 = i6 >>> 20 ^ i6 | 1;
 i6 = i7;
 i7 = 0;
 i9 = 0;
 while (1) {
  i10 = i6 & i4;
  i11 = i3 + (i10 << 3) | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  i13 = i12;
  if ((i13 | 0) == 0) {
   i14 = 3;
   break;
  } else if ((i13 | 0) == (-1 | 0)) {
   i15 = i11;
  } else {
   if ((i12 | 0) == (i5 | 0)) {
    i16 = i11;
    break;
   } else {
    i15 = i9;
   }
  }
  i12 = (i7 | 0) == 0 ? i8 : i7;
  i6 = i12 + i10 | 0;
  i7 = i12;
  i9 = i15;
 }
 if ((i14 | 0) == 3) {
  i16 = (i9 | 0) != 0 ? i9 : i11;
 }
 i11 = i16 + 4 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i9 = i16 | 0;
 i15 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i14 = i15 | 0;
   i7 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i14 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i9 >> 2] = i15;
 i15 = i2 + 4 | 0;
 i2 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i11 >> 2] = i2;
 return i16 | 0;
}
function __ZN7WebCore18StyleSheetContents17wrapperDeleteRuleEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = i2;
  } else {
   if ((i2 | 0) != 0) {
    i5 = i2 - 1 | 0;
    break;
   }
   HEAP32[i3 >> 2] = 0;
   i6 = i4 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    return;
   } else {
    HEAP32[i6 >> 2] = i7;
    return;
   }
  }
 } while (0);
 i4 = i1 + 24 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if (i5 >>> 0 < i3 >>> 0) {
  i2 = i1 + 16 | 0;
  HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + (i5 << 2) >> 2] | 0) + 8 >> 2] = 0;
  i7 = HEAP32[i2 >> 2] | 0;
  i6 = i7 + (i5 << 2) | 0;
  i8 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i9 = i8 | 0;
    i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) == 0) {
     __ZN7WebCore13StyleRuleBase7destroyEv(i8 | 0);
     break;
    } else {
     HEAP32[i9 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i8 = i7 + (i5 + 1 << 2) | 0;
  _memmove(i6 | 0, i8 | 0, (HEAP32[i2 >> 2] | 0) + (HEAP32[i4 >> 2] << 2) - i8 | 0) | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - 1;
  return;
 } else {
  i4 = i5 - i3 | 0;
  i3 = i1 + 28 | 0;
  i5 = HEAP32[i3 >> 2] | 0;
  i8 = i5 + (i4 << 2) | 0;
  i2 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i2 | 0) != 0) {
    i6 = i2 | 0;
    i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
    if ((i7 | 0) == 0) {
     __ZN7WebCore13StyleRuleBase7destroyEv(i2);
     break;
    } else {
     HEAP32[i6 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i2 = i5 + (i4 + 1 << 2) | 0;
  i4 = i1 + 36 | 0;
  _memmove(i8 | 0, i2 | 0, (HEAP32[i3 >> 2] | 0) + (HEAP32[i4 >> 2] << 2) - i2 | 0) | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - 1;
  return;
 }
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore15StyleRuleImportEEELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  return;
 }
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 if (i5 >>> 0 > i2 >>> 0) {
  i1 = HEAP32[i6 >> 2] | 0;
  i7 = i1 + (i5 << 2) | 0;
  if ((i5 | 0) != (i2 | 0)) {
   i8 = i1 + (i2 << 2) | 0;
   while (1) {
    i1 = HEAP32[i8 >> 2] | 0;
    do {
     if ((i1 | 0) != 0) {
      i9 = i1 | 0;
      i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      if ((i10 | 0) == 0) {
       __ZN7WebCore13StyleRuleBase7destroyEv(i1 | 0);
       break;
      } else {
       HEAP32[i9 >> 2] = i10;
       break;
      }
     }
    } while (0);
    i8 = i8 + 4 | 0;
    if ((i8 | 0) == (i7 | 0)) {
     break;
    }
   }
  }
  HEAP32[i4 >> 2] = i2;
  i11 = i2;
 } else {
  i11 = i5;
 }
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 >>> 0 > 1073741823 >>> 0;
   if ((HEAP32[i3 >> 2] | 0) == 0) {
    if (i4) {
     _WTFCrash();
    }
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i7 >>> 2;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    i7 = i8;
    HEAP32[i6 >> 2] = i7;
    if ((i7 | 0) == (i5 | 0)) {
     break;
    }
    _memcpy(i8 | 0, i5 | 0, i11 << 2) | 0;
    break;
   } else {
    if (i4) {
     _WTFCrash();
    }
    i4 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i4 >>> 2;
    HEAP32[i6 >> 2] = __ZN3WTF11fastReallocEPvj(HEAP32[i6 >> 2] | 0, i4) | 0;
    return;
   }
  }
 } while (0);
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i6 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore13StyleRuleBaseEEELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  return;
 }
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 if (i5 >>> 0 > i2 >>> 0) {
  i1 = HEAP32[i6 >> 2] | 0;
  i7 = i1 + (i5 << 2) | 0;
  if ((i5 | 0) != (i2 | 0)) {
   i8 = i1 + (i2 << 2) | 0;
   while (1) {
    i1 = HEAP32[i8 >> 2] | 0;
    do {
     if ((i1 | 0) != 0) {
      i9 = i1 | 0;
      i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      if ((i10 | 0) == 0) {
       __ZN7WebCore13StyleRuleBase7destroyEv(i1);
       break;
      } else {
       HEAP32[i9 >> 2] = i10;
       break;
      }
     }
    } while (0);
    i8 = i8 + 4 | 0;
    if ((i8 | 0) == (i7 | 0)) {
     break;
    }
   }
  }
  HEAP32[i4 >> 2] = i2;
  i11 = i2;
 } else {
  i11 = i5;
 }
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 >>> 0 > 1073741823 >>> 0;
   if ((HEAP32[i3 >> 2] | 0) == 0) {
    if (i4) {
     _WTFCrash();
    }
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i7 >>> 2;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    i7 = i8;
    HEAP32[i6 >> 2] = i7;
    if ((i7 | 0) == (i5 | 0)) {
     break;
    }
    _memcpy(i8 | 0, i5 | 0, i11 << 2) | 0;
    break;
   } else {
    if (i4) {
     _WTFCrash();
    }
    i4 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i4 >>> 2;
    HEAP32[i6 >> 2] = __ZN3WTF11fastReallocEPvj(HEAP32[i6 >> 2] | 0, i4) | 0;
    return;
   }
  }
 } while (0);
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i6 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCoreL42childRulesHaveFailedOrCanceledSubresourcesERKN3WTF6VectorINS0_6RefPtrINS_13StyleRuleBaseEEELj0ENS0_15CrashOnOverflowEEE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 8 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 | 0;
 i1 = 0;
 while (1) {
  i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + (i1 << 2) >> 2] | 0;
  i6 = HEAP32[i5 + 4 >> 2] & 31;
  if ((i6 | 0) == 5) {
   if (__ZNK7WebCore15StyleProperties31hasFailedOrCanceledSubresourcesEv(HEAP32[i5 + 8 >> 2] | 0) | 0) {
    i3 = 1;
    i7 = 11;
    break;
   }
  } else if ((i6 | 0) == 4) {
   if (__ZN7WebCoreL42childRulesHaveFailedOrCanceledSubresourcesERKN3WTF6VectorINS0_6RefPtrINS_13StyleRuleBaseEEELj0ENS0_15CrashOnOverflowEEE(i5 + 8 | 0) | 0) {
    i3 = 1;
    i7 = 13;
    break;
   }
  } else if ((i6 | 0) == 16) {
   if (__ZN7WebCoreL42childRulesHaveFailedOrCanceledSubresourcesERKN3WTF6VectorINS0_6RefPtrINS_13StyleRuleBaseEEELj0ENS0_15CrashOnOverflowEEE(i5 + 8 | 0) | 0) {
    i3 = 1;
    i7 = 14;
    break;
   }
  } else if ((i6 | 0) == 1) {
   if (__ZNK7WebCore15StyleProperties31hasFailedOrCanceledSubresourcesEv(HEAP32[i5 + 8 >> 2] | 0) | 0) {
    i3 = 1;
    i7 = 15;
    break;
   }
  }
  i5 = i1 + 1 | 0;
  if (i5 >>> 0 < (HEAP32[i2 >> 2] | 0) >>> 0) {
   i1 = i5;
  } else {
   i3 = 0;
   i7 = 12;
   break;
  }
 }
 if ((i7 | 0) == 15) {
  return i3 | 0;
 } else if ((i7 | 0) == 12) {
  return i3 | 0;
 } else if ((i7 | 0) == 13) {
  return i3 | 0;
 } else if ((i7 | 0) == 14) {
  return i3 | 0;
 } else if ((i7 | 0) == 11) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore18StyleSheetContents18determineNamespaceERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = __ZN3WTF8nullAtomE;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[__ZN3WTF8starAtomE >> 2] | 0)) {
  i4 = __ZN3WTF8starAtomE;
  return i4 | 0;
 }
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 L7 : do {
  if ((i2 | 0) == 0) {
   i5 = i1 + 44 | 0;
   i6 = HEAP32[i5 >> 2] << 3 | 0;
   i7 = i5;
  } else {
   i5 = HEAP32[i1 + 48 >> 2] | 0;
   i8 = HEAP32[i3 + 16 >> 2] | 0;
   i9 = i8 >>> 7;
   i10 = (i8 >>> 30) + ~i9 | 0;
   i8 = i10 << 12 ^ i10;
   i10 = i8 >>> 7 ^ i8;
   i8 = i10 << 2 ^ i10;
   i10 = i8 >>> 20 ^ i8 | 1;
   i8 = i9;
   i9 = 0;
   while (1) {
    i11 = i8 & i5;
    i12 = i2 + (i11 << 3) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    i14 = i13;
    if ((i14 | 0) == 0) {
     break;
    } else if ((i14 | 0) != (-1 | 0)) {
     if ((i13 | 0) == (i3 | 0)) {
      i15 = 9;
      break;
     }
    }
    i13 = (i9 | 0) == 0 ? i10 : i9;
    i8 = i13 + i11 | 0;
    i9 = i13;
   }
   do {
    if ((i15 | 0) == 9) {
     if ((i12 | 0) == 0) {
      break;
     }
     i6 = i12;
     i7 = i1 + 44 | 0;
     break L7;
    }
   } while (0);
   i9 = i1 + 44 | 0;
   i6 = i2 + (HEAP32[i9 >> 2] << 3) | 0;
   i7 = i9;
  }
 } while (0);
 if ((i6 | 0) == (i2 + (HEAP32[i7 >> 2] << 3) | 0)) {
  i4 = __ZN3WTF8nullAtomE;
  return i4 | 0;
 }
 i4 = i6 + 4 | 0;
 return i4 | 0;
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIN7WebCore3URLELj256EEES5_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS2_7URLHashEEENS_10HashTraitsIS5_EESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES5_EENSt3__14pairIPS5_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[HEAP32[i3 >> 2] >> 2] | 0;
 i6 = HEAP32[i2 + 16 >> 2] | 0;
 if (i6 >>> 0 > 127 >>> 0) {
  i7 = i6 >>> 7;
 } else {
  i7 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
 }
 i2 = (i7 >>> 23) + ~i7 | 0;
 i6 = i2 << 12 ^ i2;
 i2 = i6 >>> 7 ^ i6;
 i6 = i2 << 2 ^ i2;
 i2 = i6 >>> 20 ^ i6 | 1;
 i6 = i7;
 i7 = 0;
 i8 = 0;
 while (1) {
  i9 = i6 & i5;
  i10 = i4 + (i9 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  if ((i12 | 0) == (-1 | 0)) {
   i13 = i10;
  } else if ((i12 | 0) == 0) {
   i14 = 6;
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(HEAP32[i11 >> 2] | 0, HEAP32[HEAP32[i3 >> 2] >> 2] | 0) | 0) {
    i14 = 8;
    break;
   } else {
    i13 = i8;
   }
  }
  i11 = (i7 | 0) == 0 ? i2 : i7;
  i6 = i11 + i9 | 0;
  i7 = i11;
  i8 = i13;
 }
 if ((i14 | 0) == 8) {
  HEAP32[i1 >> 2] = i10;
  HEAP8[i1 + 4 | 0] = 1;
  return;
 } else if ((i14 | 0) == 6) {
  HEAP32[i1 >> 2] = (i8 | 0) != 0 ? i8 : i10;
  HEAP8[i1 + 4 | 0] = 0;
  return;
 }
}
function __ZN7WebCore16CSSParserContextC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i2 + 4 | 0;
 i3 = i1 + 4 | 0;
 i5 = HEAP8[i3] & -2 | HEAP8[i4] & 1;
 HEAP8[i3] = i5;
 HEAP8[i3] = i5 & -3 | HEAP8[i4] & 2;
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
 i4 = HEAP32[i2 + 48 >> 2] | 0;
 HEAP32[i1 + 48 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
 HEAP8[i1 + 56 | 0] = HEAP8[i2 + 56 | 0] & 1;
 HEAP8[i1 + 57 | 0] = HEAP8[i2 + 57 | 0] & 1;
 HEAP8[i1 + 58 | 0] = HEAP8[i2 + 58 | 0] & 1;
 HEAP8[i1 + 59 | 0] = HEAP8[i2 + 59 | 0] & 1;
 HEAP8[i1 + 60 | 0] = HEAP8[i2 + 60 | 0] & 1;
 HEAP8[i1 + 61 | 0] = HEAP8[i2 + 61 | 0] & 1;
 HEAP8[i1 + 62 | 0] = HEAP8[i2 + 62 | 0] & 1;
 HEAP8[i1 + 63 | 0] = HEAP8[i2 + 63 | 0] & 1;
 HEAP8[i1 + 64 | 0] = HEAP8[i2 + 64 | 0] & 1;
 return;
}
function __ZN7WebCore18StyleSheetContents14registerClientEPNS_13CSSStyleSheetE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 i5 = i1 + 132 | 0;
 i6 = i1 + 140 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != (HEAP32[i1 + 136 >> 2] | 0)) {
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
   __ZN3WTF6VectorIPN7WebCore13CSSStyleSheetELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i2);
   i12 = HEAP32[i1 >> 2] | 0;
   i13 = i12 + (i4 - i10 >> 2 << 2) | 0;
   i14 = i12;
  }
 } while (0);
 if ((i11 | 0) == 5) {
  __ZN3WTF6VectorIPN7WebCore13CSSStyleSheetELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i2);
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
function __ZN7WebCore18StyleSheetContents18parserAddNamespaceERKN3WTF12AtomicStringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i3 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EERKS1_SH_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i5, i1 + 40 | 0, i2, i3);
 if ((HEAP8[i5 + 8 | 0] & 1) != 0) {
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i3 + 4 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i5;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF5DequeIPN7WebCore18StyleSheetContentsELj0EE14expandCapacityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + 1 + (i3 >>> 2) | 0;
 i7 = i6 >>> 0 > 16 >>> 0 ? i6 : 16;
 if (i7 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 2) | 0;
 HEAP32[i2 >> 2] = i6 >>> 2;
 i7 = __ZN3WTF10fastMallocEj(i6) | 0;
 i6 = i7;
 HEAP32[i4 >> 2] = i6;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 if (i9 >>> 0 > i10 >>> 0) {
  _memcpy(i7 | 0, i5 | 0, i10 << 2) | 0;
  i7 = HEAP32[i8 >> 2] | 0;
  i1 = i7 - i3 + (HEAP32[i2 >> 2] | 0) | 0;
  _memcpy((HEAP32[i4 >> 2] | 0) + (i1 << 2) | 0, i5 + (i7 << 2) | 0, i3 - i7 << 2) | 0;
  HEAP32[i8 >> 2] = i1;
 } else {
  _memcpy(i6 + (i9 << 2) | 0, i5 + (i9 << 2) | 0, i10 - i9 << 2) | 0;
 }
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
function __ZNK7WebCore18StyleSheetContents20estimatedSizeInBytesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 24 | 0;
 i3 = ((HEAP32[i1 + 12 >> 2] | 0) != 0) + (HEAP32[i2 >> 2] | 0) + (HEAP32[i1 + 36 >> 2] | 0) | 0;
 i4 = (Math_imul(i3, __ZN7WebCore9StyleRule18averageSizeInBytesEv() | 0) | 0) + 144 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i5 = i4;
  return i5 | 0;
 }
 i6 = i1 + 16 | 0;
 i1 = 0;
 i7 = i4;
 i4 = i3;
 while (1) {
  i3 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + (i1 << 2) >> 2] | 0) + 28 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i8 = i7;
   i9 = i4;
  } else {
   i10 = (__ZNK7WebCore18StyleSheetContents20estimatedSizeInBytesEv(i3) | 0) + i7 | 0;
   i8 = i10;
   i9 = HEAP32[i2 >> 2] | 0;
  }
  i10 = i1 + 1 | 0;
  if (i10 >>> 0 < i9 >>> 0) {
   i1 = i10;
   i7 = i8;
   i4 = i9;
  } else {
   i5 = i8;
   break;
  }
 }
 return i5 | 0;
}
function __ZN7WebCore18StyleSheetContentsC2EPNS_15StyleRuleImportERKN3WTF6StringERKNS_16CSSParserContextE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i3 = i5 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 60 | 0;
 _memset(i1 + 12 | 0, 0, 48) | 0;
 i5 = HEAP8[i3] | 0;
 HEAP8[i3] = i5 & -2;
 do {
  if ((i2 | 0) == 0) {
   i6 = 4;
  } else {
   i7 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i6 = 4;
    break;
   }
   i6 = HEAP8[i7 + 60 | 0] & 2 | 4;
  }
 } while (0);
 HEAP8[i3] = i6 | i5 & -128;
 __ZN7WebCore16CSSParserContextC2ERKS0_(i1 + 64 | 0, i4);
 HEAP32[i1 + 132 >> 2] = 0;
 HEAP32[i1 + 136 >> 2] = 0;
 HEAP32[i1 + 140 >> 2] = 0;
 return;
}
function __ZN7WebCore18StyleSheetContentsC1EPNS_15StyleRuleImportERKN3WTF6StringERKNS_16CSSParserContextE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i3 = i5 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 60 | 0;
 _memset(i1 + 12 | 0, 0, 48) | 0;
 i5 = HEAP8[i3] | 0;
 HEAP8[i3] = i5 & -2;
 do {
  if ((i2 | 0) == 0) {
   i6 = 4;
  } else {
   i7 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i6 = 4;
    break;
   }
   i6 = HEAP8[i7 + 60 | 0] & 2 | 4;
  }
 } while (0);
 HEAP8[i3] = i6 | i5 & -128;
 __ZN7WebCore16CSSParserContextC2ERKS0_(i1 + 64 | 0, i4);
 HEAP32[i1 + 132 >> 2] = 0;
 HEAP32[i1 + 136 >> 2] = 0;
 HEAP32[i1 + 140 >> 2] = 0;
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore15StyleRuleImportEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorIPN7WebCore13CSSStyleSheetELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZNK7WebCore18StyleSheetContents19singleOwnerDocumentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) == 0) {
   i3 = i1;
  } else {
   i4 = i1;
   i5 = i2;
   while (1) {
    i6 = HEAP32[i5 + 8 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i3 = i4;
     break L1;
    }
    i7 = HEAP32[i6 + 4 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i3 = i6;
     break;
    } else {
     i4 = i6;
     i5 = i7;
    }
   }
  }
 } while (0);
 if ((HEAP32[i3 + 140 >> 2] | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 i2 = HEAP32[(HEAP32[HEAP32[i3 + 132 >> 2] >> 2] | 0) + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 i8 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 return i8 | 0;
}
function __ZN7WebCore18StyleSheetContents24startLoadingDynamicSheetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) == 0) {
   i3 = i1;
  } else {
   i4 = i1;
   i5 = i2;
   while (1) {
    i6 = HEAP32[i5 + 8 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i3 = i4;
     break L1;
    }
    i7 = HEAP32[i6 + 4 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i3 = i6;
     break;
    } else {
     i4 = i6;
     i5 = i7;
    }
   }
  }
 } while (0);
 if ((HEAP32[i3 + 140 >> 2] | 0) == 0) {
  return;
 }
 i2 = HEAP32[(HEAP32[HEAP32[i3 + 132 >> 2] >> 2] | 0) + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 152 >> 2] & 3](i2);
 return;
}
function __ZNK7WebCore18StyleSheetContents15singleOwnerNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) == 0) {
   i3 = i1;
  } else {
   i4 = i1;
   i5 = i2;
   while (1) {
    i6 = HEAP32[i5 + 8 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i3 = i4;
     break L1;
    }
    i7 = HEAP32[i6 + 4 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i3 = i6;
     break;
    } else {
     i4 = i6;
     i5 = i7;
    }
   }
  }
 } while (0);
 if ((HEAP32[i3 + 140 >> 2] | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 i8 = HEAP32[(HEAP32[HEAP32[i3 + 132 >> 2] >> 2] | 0) + 24 >> 2] | 0;
 return i8 | 0;
}
function __ZNK7WebCore18StyleSheetContents6ruleAtEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
   i3 = i2;
  } else {
   if ((i2 | 0) == 0) {
    i4 = 0;
    return i4 | 0;
   } else {
    i3 = i2 - 1 | 0;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if (i3 >>> 0 < i2 >>> 0) {
  i4 = HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + (i3 << 2) >> 2] | 0;
  return i4 | 0;
 }
 i5 = i3 - i2 | 0;
 if ((HEAP32[i1 + 36 >> 2] | 0) >>> 0 <= i5 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i4 = HEAP32[(HEAP32[i1 + 28 >> 2] | 0) + (i5 << 2) >> 2] | 0;
 return i4 | 0;
}
function __ZN7WebCore18StyleSheetContents16unregisterClientEPNS_13CSSStyleSheetE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 132 | 0;
 i4 = i1 + 140 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i5 = 0;
 while (1) {
  i6 = HEAP32[i3 >> 2] | 0;
  if (i5 >>> 0 >= i1 >>> 0) {
   i7 = -1;
   break;
  }
  if ((HEAP32[i6 + (i5 << 2) >> 2] | 0) == (i2 | 0)) {
   i7 = i5;
   break;
  } else {
   i5 = i5 + 1 | 0;
  }
 }
 _memmove(i6 + (i7 << 2) | 0, i6 + (i7 + 1 << 2) | 0, i1 + (i7 ^ 1073741823) << 2 | 0) | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - 1;
 return;
}
function __ZN7WebCore18StyleSheetContents17parseStringAtLineERKN3WTF6StringEib(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 2288 | 0;
 i6 = i5 | 0;
 __ZN7WebCore9CSSParserC1ERKNS_16CSSParserContextE(i6, i1 + 64 | 0);
 __ZN7WebCore9CSSParser10parseSheetEPNS_18StyleSheetContentsERKN3WTF6StringEiPNS3_6VectorINS3_6RefPtrINS_17CSSRuleSourceDataEEELj0ENS3_15CrashOnOverflowEEEb(i6, i1, i2, i3, 0, i4);
 __ZN7WebCore9CSSParserD1Ev(i6);
 STACKTOP = i5;
 return 1;
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
function __ZNK7WebCore18StyleSheetContents9isLoadingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 24 | 0;
 i3 = i1 + 16 | 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= (HEAP32[i2 >> 2] | 0) >>> 0) {
   i4 = 0;
   i5 = 6;
   break;
  }
  if (__ZNK7WebCore15StyleRuleImport9isLoadingEv(HEAP32[(HEAP32[i3 >> 2] | 0) + (i1 << 2) >> 2] | 0) | 0) {
   i4 = 1;
   i5 = 5;
   break;
  } else {
   i1 = i1 + 1 | 0;
  }
 }
 if ((i5 | 0) == 6) {
  return i4 | 0;
 } else if ((i5 | 0) == 5) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore18StyleSheetContents32parserSetEncodingFromCharsetRuleERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 + 12 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  return;
 } else {
  HEAP32[i3 >> 2] = i2;
  return;
 }
}
function __ZNK7WebCore18StyleSheetContents14rootStyleSheetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) == 0) {
   i3 = i1;
  } else {
   i4 = i1;
   i5 = i2;
   while (1) {
    i6 = HEAP32[i5 + 8 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i3 = i4;
     break L1;
    }
    i7 = HEAP32[i6 + 4 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i3 = i6;
     break;
    } else {
     i4 = i6;
     i5 = i7;
    }
   }
  }
 } while (0);
 return i3 | 0;
}
function __ZN7WebCore18StyleSheetContents11parseStringERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 2288 | 0;
 i4 = i3 | 0;
 __ZN7WebCore9CSSParserC1ERKNS_16CSSParserContextE(i4, i1 + 64 | 0);
 __ZN7WebCore9CSSParser10parseSheetEPNS_18StyleSheetContentsERKN3WTF6StringEiPNS3_6VectorINS3_6RefPtrINS_17CSSRuleSourceDataEEELj0ENS3_15CrashOnOverflowEEEb(i4, i1, i2, 0, 0, 0);
 __ZN7WebCore9CSSParserD1Ev(i4);
 STACKTOP = i3;
 return 1;
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
function __ZNK7WebCore18StyleSheetContents11isCacheableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 do {
  if ((HEAP32[i1 + 24 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) != 0) {
    i2 = 0;
    break;
   }
   i3 = HEAP8[i1 + 60 | 0] | 0;
   if ((i3 & 41) != 1) {
    i2 = 0;
    break;
   }
   i2 = (i3 & 4) != 0;
  } else {
   i2 = 0;
  }
 } while (0);
 return i2 | 0;
}
function __ZN7WebCore18StyleSheetContents16clearCharsetRuleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 12 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore18StyleSheetContents11shrinkToFitEv(i1) {
 i1 = i1 | 0;
 __ZN3WTF6VectorINS_6RefPtrIN7WebCore15StyleRuleImportEEELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj(i1 + 16 | 0, HEAP32[i1 + 24 >> 2] | 0);
 __ZN3WTF6VectorINS_6RefPtrIN7WebCore13StyleRuleBaseEEELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj(i1 + 28 | 0, HEAP32[i1 + 36 >> 2] | 0);
 return;
}
function __ZN7WebCore18StyleSheetContents17notifyLoadedSheetEPKNS_19CachedCSSStyleSheetE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 60 | 0;
 HEAP8[i3] = ((((HEAP32[i2 + 588 >> 2] | 0) >>> 11 & 7) - 3 | 0) >>> 0 < 2 >>> 0) << 3 | HEAP8[i3];
 return;
}
function __ZNK7WebCore18StyleSheetContents31hasFailedOrCanceledSubresourcesEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCoreL42childRulesHaveFailedOrCanceledSubresourcesERKN3WTF6VectorINS0_6RefPtrINS_13StyleRuleBaseEEELj0ENS0_15CrashOnOverflowEEE(i1 + 28 | 0) | 0;
}
function __ZNK7WebCore18StyleSheetContents11completeURLERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore9CSSParser11completeURLERKNS_16CSSParserContextERKN3WTF6StringE(i1, i2 + 64 | 0, i3);
 return;
}
function __ZNK7WebCore18StyleSheetContents16parentStyleSheetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore18StyleSheetContents9ruleCountEv(i1) {
 i1 = i1 | 0;
 return ((HEAP32[i1 + 12 >> 2] | 0) != 0) + (HEAP32[i1 + 24 >> 2] | 0) + (HEAP32[i1 + 36 >> 2] | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore18StyleSheetContents22removedFromMemoryCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 60 | 0;
 HEAP8[i2] = HEAP8[i2] & -65;
 return;
}
function __ZN7WebCore18StyleSheetContents18addedToMemoryCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 60 | 0;
 HEAP8[i2] = HEAP8[i2] | 64;
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function b5(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(5);
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
function b3() {
 abort(3);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore18StyleSheetContentsD2Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore18StyleSheetContentsC2ERKS0_,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  var FUNCTION_TABLE_viiii = [b5,b5,__ZN7WebCore18StyleSheetContentsC2EPNS_15StyleRuleImportERKN3WTF6StringERKNS_16CSSParserContextE,b5];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_llvm_trap": _llvm_trap, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN3WTF8starAtomE": __ZN3WTF8starAtomE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E8reinsertEOS3_","__ZN7WebCore18StyleSheetContentsC2ERKS0_","__ZNK7WebCore18StyleSheetContents9isLoadingEv","__ZNK7WebCore18StyleSheetContents9ruleCountEv","__ZN7WebCore16CSSParserContextC2ERKS0_","__ZNK7WebCore18StyleSheetContents16parentStyleSheetEv","__ZNK7WebCore18StyleSheetContents15singleOwnerNodeEv","__ZN7WebCore18StyleSheetContents11checkLoadedEv","__ZN7WebCore18StyleSheetContents16unregisterClientEPNS_13CSSStyleSheetE","__ZN3WTF6VectorINS_6RefPtrIN7WebCore15StyleRuleImportEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EERKS1_SH_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_","__ZNK7WebCore18StyleSheetContents11completeURLERKN3WTF6StringE","__ZN7WebCore18StyleSheetContents11parseStringERKN3WTF6StringE","__ZNK7WebCore18StyleSheetContents11isCacheableEv","__ZN7WebCore18StyleSheetContents17notifyLoadedSheetEPKNS_19CachedCSSStyleSheetE","__ZN7WebCoreL42childRulesHaveFailedOrCanceledSubresourcesERKN3WTF6VectorINS0_6RefPtrINS_13StyleRuleBaseEEELj0ENS0_15CrashOnOverflowEEE","__ZN3WTF6VectorINS_6RefPtrIN7WebCore13StyleRuleBaseEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_22IdentityHashTranslatorIS6_EERKS1_RKS3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_","__ZN7WebCore18StyleSheetContents10clearRulesEv","__ZN3WTF6VectorINS_6RefPtrIN7WebCore15StyleRuleImportEEELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj","_memcpy","__ZN7WebCore18StyleSheetContentsC2EPNS_15StyleRuleImportERKN3WTF6StringERKNS_16CSSParserContextE","__ZNK7WebCore18StyleSheetContents31hasFailedOrCanceledSubresourcesEv","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIN7WebCore3URLELj256EEES5_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS2_7URLHashEEENS_10HashTraitsIS5_EESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES5_EENSt3__14pairIPS5_bEERKT0_","__ZN7WebCore18StyleSheetContents14registerClientEPNS_13CSSStyleSheetE","__ZN7WebCore18StyleSheetContents17wrapperInsertRuleEN3WTF10PassRefPtrINS_13StyleRuleBaseEEEj","__ZN3WTF15CrashOnOverflow10overflowedEv","_memset","__ZNK7WebCore18StyleSheetContents6ruleAtEj","__ZN3WTF6VectorINS_6RefPtrIN7WebCore13StyleRuleBaseEEELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj","__ZN7WebCore18StyleSheetContents16clearCharsetRuleEv","__ZN7WebCore18StyleSheetContents21parseAuthorStyleSheetEPKNS_19CachedCSSStyleSheetEPKNS_14SecurityOriginE","__ZN3WTF6VectorIPN7WebCore13CSSStyleSheetELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF5DequeIPN7WebCore18StyleSheetContentsELj0EE14expandCapacityEv","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIN7WebCore3URLELj256EEES5_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS2_7URLHashEEENS_10HashTraitsIS5_EESB_E3addINS_21ListHashSetTranslatorIS8_EERKS3_PNS_24ListHashSetNodeAllocatorIS3_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS5_S5_S6_S9_SB_SB_EEEEOT0_OT1_","__ZN7WebCore18StyleSheetContents16parserAppendRuleEN3WTF10PassRefPtrINS_13StyleRuleBaseEEE","__ZN7WebCore18StyleSheetContents23addSubresourceStyleURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE","__ZNK7WebCore18StyleSheetContents20estimatedSizeInBytesEv","_strlen","__ZN7WebCore18StyleSheetContents22removedFromMemoryCacheEv","__ZN7WebCore18StyleSheetContents17wrapperDeleteRuleEj","__ZN7WebCore18StyleSheetContents18addedToMemoryCacheEv","__ZN7WebCore18StyleSheetContents17parseStringAtLineERKN3WTF6StringEib","_memmove","__ZNK7WebCore18StyleSheetContents14rootStyleSheetEv","__ZN7WebCore18StyleSheetContents32parserSetEncodingFromCharsetRuleERKN3WTF6StringE","__ZN7WebCore18StyleSheetContents18parserAddNamespaceERKN3WTF12AtomicStringES4_","__ZN7WebCore18StyleSheetContentsD2Ev","__ZN7WebCore18StyleSheetContents11shrinkToFitEv","__ZN7WebCore18StyleSheetContents24startLoadingDynamicSheetEv","__ZN7WebCore18StyleSheetContents18determineNamespaceERKN3WTF12AtomicStringE","__ZNK7WebCore18StyleSheetContents19singleOwnerDocumentEv"]

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
var __ZN7WebCore13XHRReplayDataC1ERKN3WTF6StringERKNS_3URLEbNS1_10PassRefPtrINS_8FormDataEEEb;
var __ZN7WebCore20NetworkResourcesData12ResourceDataC1ERKN3WTF6StringES5_;
var __ZN7WebCore20NetworkResourcesDataC1Ev;
var __ZN7WebCore20NetworkResourcesDataD1Ev;
/* memory initializer */ allocate([73,83,79,45,56,56,53,57,45,49,0,0,0,0,0,0,85,84,70,45,56,0,0,0,116,101,120,116,47,104,116,109,108,0,0,0,0,0,0,0,97,112,112,108,105,99,97,116,105,111,110,47,120,109,108,0,116,101,120,116,47,112,108,97,105,110,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var __ZN3WTF10StringImpl19latin1CaseFoldTableE=env.__ZN3WTF10StringImpl19latin1CaseFoldTableE|0;
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
function __ZN7WebCore20NetworkResourcesData5clearERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 __ZN3WTF5DequeINS_6StringELj0EE10destroyAllEv(i1 | 0);
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 i6 = i1 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 12 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i7);
 }
 HEAP32[i1 + 60 >> 2] = 0;
 _memset(i4 | 0, 0, 20) | 0;
 i7 = i1 + 40 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = i1 + 44 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i6 + (i9 << 3) | 0;
 i11 = i1 + 52 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 L4 : do {
  if ((i12 | 0) == 0) {
   i13 = 8;
  } else {
   L6 : do {
    if ((i9 | 0) == 0) {
     i14 = i6;
    } else {
     i15 = i6;
     while (1) {
      i16 = HEAP32[i15 >> 2] | 0;
      if (!((i16 | 0) == (-1 | 0) | (i16 | 0) == 0)) {
       i14 = i15;
       break L6;
      }
      i16 = i15 + 8 | 0;
      if ((i16 | 0) == (i10 | 0)) {
       i13 = 8;
       break L4;
      } else {
       i15 = i16;
      }
     }
    }
   } while (0);
   if ((i14 | 0) == (i10 | 0)) {
    i13 = 8;
    break;
   }
   i15 = i2 | 0;
   i16 = i4 | 0;
   i17 = i5 + 8 | 0;
   i18 = i5 | 0;
   i19 = i14;
   L12 : while (1) {
    i20 = i19 + 4 | 0;
    i21 = HEAP32[i20 >> 2] | 0;
    i22 = HEAP32[i15 >> 2] | 0;
    L14 : do {
     if ((i22 | 0) == 0) {
      i13 = 18;
     } else {
      i23 = HEAP32[i21 + 4 >> 2] | 0;
      do {
       if ((i23 | 0) == 0) {
        if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(0, i22) | 0)) {
         i13 = 19;
         break L14;
        }
       } else {
        i24 = i23 | 0;
        HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
        i25 = __ZN3WTF5equalEPKNS_10StringImplES2_(i23, HEAP32[i15 >> 2] | 0) | 0;
        i26 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
        if ((i26 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i23);
         if (i25) {
          break;
         } else {
          i13 = 18;
          break L14;
         }
        } else {
         HEAP32[i24 >> 2] = i26;
         if (i25) {
          break;
         } else {
          i13 = 18;
          break L14;
         }
        }
       }
      } while (0);
      __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore20NetworkResourcesData12ResourceDataEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i5, i16, i19 | 0, i20);
      if ((HEAP8[i17] & 1) != 0) {
       break;
      }
      HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] = HEAP32[i20 >> 2];
     }
    } while (0);
    if ((i13 | 0) == 18) {
     i13 = 0;
     if ((i21 | 0) != 0) {
      i13 = 19;
     }
    }
    if ((i13 | 0) == 19) {
     i13 = 0;
     __ZN7WebCore20NetworkResourcesData12ResourceDataD2Ev(i21);
     __ZN3WTF8fastFreeEPv(i21);
    }
    i20 = i19 + 8 | 0;
    if ((i20 | 0) == (i10 | 0)) {
     break;
    } else {
     i27 = i20;
    }
    while (1) {
     i20 = HEAP32[i27 >> 2] | 0;
     if (!((i20 | 0) == (-1 | 0) | (i20 | 0) == 0)) {
      break;
     }
     i20 = i27 + 8 | 0;
     if ((i20 | 0) == (i10 | 0)) {
      break L12;
     } else {
      i27 = i20;
     }
    }
    if ((i27 | 0) == (i10 | 0)) {
     break;
    } else {
     i19 = i27;
    }
   }
   i19 = i4 | 0;
   i18 = i4 + 4 | 0;
   i17 = i4 + 8 | 0;
   i16 = i4 + 12 | 0;
   i15 = i4 + 16 | 0;
   i28 = HEAP32[i7 >> 2] | 0;
   i29 = HEAP32[i19 >> 2] | 0;
   i30 = HEAP32[i8 >> 2] | 0;
   i31 = HEAP32[i18 >> 2] | 0;
   i32 = HEAP32[i17 >> 2] | 0;
   i33 = HEAP32[i11 >> 2] | 0;
   i34 = HEAP32[i16 >> 2] | 0;
   i35 = HEAP32[i15 >> 2] | 0;
   i36 = i19;
   i37 = i18;
   i38 = i17;
   i39 = i16;
   i40 = i15;
  }
 } while (0);
 if ((i13 | 0) == 8) {
  i28 = i6;
  i29 = 0;
  i30 = i9;
  i31 = 0;
  i32 = 0;
  i33 = i12;
  i34 = 0;
  i35 = 0;
  i36 = i4 | 0;
  i37 = i4 + 4 | 0;
  i38 = i4 + 8 | 0;
  i39 = i4 + 12 | 0;
  i40 = i4 + 16 | 0;
 }
 HEAP32[i7 >> 2] = i29;
 HEAP32[i36 >> 2] = i28;
 HEAP32[i8 >> 2] = i31;
 HEAP32[i37 >> 2] = i30;
 i37 = i1 + 48 | 0;
 i31 = HEAP32[i37 >> 2] | 0;
 HEAP32[i37 >> 2] = i32;
 HEAP32[i38 >> 2] = i31;
 HEAP32[i11 >> 2] = i34;
 HEAP32[i39 >> 2] = i33;
 i33 = i1 + 56 | 0;
 i39 = HEAP32[i33 >> 2] | 0;
 HEAP32[i33 >> 2] = i35;
 HEAP32[i40 >> 2] = i39;
 i39 = i1 + 20 | 0;
 i40 = HEAP32[i39 >> 2] | 0;
 if ((i40 | 0) != 0) {
  i35 = HEAP32[i1 + 24 >> 2] | 0;
  if ((i35 | 0) > 0) {
   i1 = 0;
   while (1) {
    i33 = i40 + (i1 << 3) | 0;
    do {
     if ((HEAP32[i33 >> 2] | 0) != -1) {
      i34 = HEAP32[i40 + (i1 << 3) + 4 >> 2] | 0;
      do {
       if ((i34 | 0) != 0) {
        i11 = i34 | 0;
        i31 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
        if ((i31 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i34);
         break;
        } else {
         HEAP32[i11 >> 2] = i31;
         break;
        }
       }
      } while (0);
      i34 = HEAP32[i33 >> 2] | 0;
      if ((i34 | 0) == 0) {
       break;
      }
      i31 = i34 | 0;
      i11 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
      if ((i11 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i34);
       break;
      } else {
       HEAP32[i31 >> 2] = i11;
       break;
      }
     }
    } while (0);
    i1 = i1 + 1 | 0;
    if ((i1 | 0) >= (i35 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i40);
  _memset(i39 | 0, 0, 16) | 0;
 }
 if ((i28 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((i30 | 0) > 0) {
  i39 = 0;
  while (1) {
   i40 = HEAP32[i28 + (i39 << 3) >> 2] | 0;
   i35 = i40;
   do {
    if (!((i35 | 0) == (-1 | 0) | (i35 | 0) == 0)) {
     i1 = i40 | 0;
     i33 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
     if ((i33 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i40);
      break;
     } else {
      HEAP32[i1 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i39 = i39 + 1 | 0;
   if ((i39 | 0) >= (i30 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i28);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20NetworkResourcesData16responseReceivedERKN3WTF6StringES4_RKNS_16ResourceResponseE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = __ZN7WebCore20NetworkResourcesData24resourceDataForRequestIdERKN3WTF6StringE(i1, i2) | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i15 + 8 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 do {
  if ((i1 | 0) != 0) {
   i2 = i1 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i1 = i4 | 0;
 i4 = HEAP32[(__ZNK7WebCore20ResourceResponseBase3urlEv(i1) | 0) >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i15 + 12 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
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
 i2 = __ZNK7WebCore20ResourceResponseBase8mimeTypeEv(i1) | 0;
 i3 = __ZNK7WebCore20ResourceResponseBase16textEncodingNameEv(i1) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i16 = 20;
  } else {
   if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
    i16 = 20;
    break;
   }
   __ZN3WTF6StringC1EPKc(i6, H_BASE + 64 | 0);
   __ZN7WebCore12TextEncodingC1ERKN3WTF6StringE(i7, i3);
   i17 = __ZN3WTF10fastMallocEj(52) | 0;
   __ZN7WebCore19TextResourceDecoderC1ERKN3WTF6StringERKNS_12TextEncodingEb(i17, i6, i7, 0);
   i18 = HEAP32[i6 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i19 = i17;
    i16 = 40;
    break;
   }
   i20 = i18 | 0;
   i21 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    i19 = i17;
    i16 = 40;
    break;
   } else {
    HEAP32[i20 >> 2] = i21;
    i19 = i17;
    i16 = 40;
    break;
   }
  }
 } while (0);
 do {
  if ((i16 | 0) == 20) {
   __ZNK3WTF6String5lowerEv(i8, i2);
   i6 = __ZN7WebCore17DOMImplementation13isXMLMIMETypeERKN3WTF6StringE(i8) | 0;
   i7 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i3 = i7 | 0;
     i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i4 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i3 >> 2] = i4;
      break;
     }
    }
   } while (0);
   if (i6) {
    __ZN3WTF6StringC1EPKc(i9, H_BASE + 48 | 0);
    HEAP32[i10 >> 2] = 0;
    i7 = __ZN3WTF10fastMallocEj(52) | 0;
    i4 = i7;
    __ZN7WebCore19TextResourceDecoderC1ERKN3WTF6StringERKNS_12TextEncodingEb(i4, i9, i10, 0);
    i3 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i3 | 0) != 0) {
      i17 = i3 | 0;
      i21 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
      if ((i21 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i3);
       break;
      } else {
       HEAP32[i17 >> 2] = i21;
       break;
      }
     }
    } while (0);
    HEAP8[i7 + 43 | 0] = 1;
    i19 = i4;
    i16 = 40;
    break;
   }
   i3 = i2 | 0;
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 32 | 0) | 0) {
    __ZN3WTF6StringC1EPKc(i11, H_BASE + 32 | 0);
    __ZN7WebCore12TextEncodingC1EPKc(i12, H_BASE + 24 | 0);
    i6 = __ZN3WTF10fastMallocEj(52) | 0;
    __ZN7WebCore19TextResourceDecoderC1ERKN3WTF6StringERKNS_12TextEncodingEb(i6, i11, i12, 0);
    i21 = HEAP32[i11 >> 2] | 0;
    if ((i21 | 0) == 0) {
     i19 = i6;
     i16 = 40;
     break;
    }
    i17 = i21 | 0;
    i20 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
    if ((i20 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i21);
     i19 = i6;
     i16 = 40;
     break;
    } else {
     HEAP32[i17 >> 2] = i20;
     i19 = i6;
     i16 = 40;
     break;
    }
   }
   if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 64 | 0) | 0)) {
    i22 = 0;
    break;
   }
   __ZN3WTF6StringC1EPKc(i13, H_BASE + 64 | 0);
   __ZN7WebCore12TextEncodingC1EPKc(i14, H_BASE + 8 | 0);
   i3 = __ZN3WTF10fastMallocEj(52) | 0;
   __ZN7WebCore19TextResourceDecoderC1ERKN3WTF6StringERKNS_12TextEncodingEb(i3, i13, i14, 0);
   i6 = HEAP32[i13 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i19 = i3;
    i16 = 40;
    break;
   }
   i20 = i6 | 0;
   i17 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    i19 = i3;
    i16 = 40;
    break;
   } else {
    HEAP32[i20 >> 2] = i17;
    i19 = i3;
    i16 = 40;
    break;
   }
  }
 } while (0);
 do {
  if ((i16 | 0) == 40) {
   if ((i19 | 0) == 0) {
    i22 = 0;
    break;
   }
   i13 = i19 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i14 + 1;
   if ((i14 | 0) == 0) {
    __ZN7WebCore19TextResourceDecoderD1Ev(i19);
    __ZN3WTF8fastFreeEPv(i19);
    i22 = i19;
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    i22 = i19;
    break;
   }
  }
 } while (0);
 i19 = i15 + 48 | 0;
 i16 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = i22;
 do {
  if ((i16 | 0) != 0) {
   i22 = i16 | 0;
   i19 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) == 0) {
    __ZN7WebCore19TextResourceDecoderD1Ev(i16);
    __ZN3WTF8fastFreeEPv(i16);
    break;
   } else {
    HEAP32[i22 >> 2] = i19;
    break;
   }
  }
 } while (0);
 HEAP32[i15 + 40 >> 2] = __ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i1) | 0;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
  i12 = i5 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
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
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 11;
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
   if ((i25 | 0) == 11) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 + 4 | 0;
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
   i17 = i27 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i14 = i20 | 0;
     i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i14 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 >> 2] = i20;
   i20 = i7 + (i10 << 3) + 4 | 0;
   i13 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i19 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i27 : i11;
  }
  i13 = i10 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i13;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i28 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i28 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 | 0;
      i27 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i27 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       break;
      } else {
       HEAP32[i10 >> 2] = i27;
       break;
      }
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i27 = i11 | 0;
    i10 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i27 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
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
function __ZN7WebCore20NetworkResourcesData12ResourceDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore19TextResourceDecoderD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   __ZN7WebCore13HTTPHeaderMapD1Ev(i2 + 64 | 0);
   i4 = HEAP32[i2 + 60 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i3 = i4 | 0;
     i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     if ((i5 | 0) == 0) {
      __ZN7WebCore8FormDataD1Ev(i4);
      __ZN3WTF8fastFreeEPv(i4);
      break;
     } else {
      HEAP32[i3 >> 2] = i5;
      break;
     }
    }
   } while (0);
   i4 = HEAP32[i2 + 8 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i5 = i4 | 0;
     i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i5 >> 2] = i3;
      break;
     }
    }
   } while (0);
   i4 = HEAP32[i2 + 4 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i3 = i4 | 0;
     i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i3 >> 2] = i5;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EERKS1_RKS3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i8 = i10 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i10;
 do {
  if ((i13 | 0) != 0) {
   i10 = i13 | 0;
   i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i10 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i4 >> 2] | 0;
 if ((i13 | 0) != 0) {
  i4 = i13 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i13;
 do {
  if ((i8 | 0) != 0) {
   i13 = i8 | 0;
   i4 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i4;
 i8 = i2 + 4 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i13 | 0)) {
  i19 = i18;
  i20 = i13;
 } else {
  i13 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_(i2, i18) | 0;
  i19 = i13;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore20NetworkResourcesData12ResourceDataEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore20NetworkResourcesData12ResourceDataEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i8, 0) | 0;
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
  i13 = i10 + (i12 << 3) | 0;
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
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 HEAP32[i18 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i13 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i13;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i13 << 1 | 0) < (i8 | 0)) {
  i19 = i18;
  i20 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i21 = 8;
  } else {
   i9 = i8 << 1;
   i21 = (i13 * 6 & -1 | 0) < (i9 | 0) ? i8 : i9;
  }
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore20NetworkResourcesData12ResourceDataEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i21, i18) | 0;
  i19 = i9;
  i20 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore20NetworkResourcesData12ResourceDataEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore20NetworkResourcesData12ResourceDataEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i8, 0) | 0;
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
  i13 = i10 + (i12 << 3) | 0;
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
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 HEAP32[i18 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i13 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i13;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i13 << 1 | 0) < (i8 | 0)) {
  i19 = i18;
  i20 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i21 = 8;
  } else {
   i9 = i8 << 1;
   i21 = (i13 * 6 & -1 | 0) < (i9 | 0) ? i8 : i9;
  }
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore20NetworkResourcesData12ResourceDataEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i21, i18) | 0;
  i19 = i9;
  i20 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EERKS1_SH_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
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
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i4 >> 2] | 0;
 if ((i13 | 0) != 0) {
  i4 = i13 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i13;
 do {
  if ((i8 | 0) != 0) {
   i13 = i8 | 0;
   i4 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i4;
 i8 = i2 + 4 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i13 | 0)) {
  i19 = i18;
  i20 = i13;
 } else {
  i13 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_(i2, i18) | 0;
  i19 = i13;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore20NetworkResourcesData12ResourceDataEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i1, i2, i3) {
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
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == (-1 | 0)) {
     i25 = i22;
    } else if ((i24 | 0) == 0) {
     i26 = 9;
     break;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i25 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i25;
   }
   if ((i26 | 0) == 9) {
    i26 = 0;
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
   HEAP32[i27 + 4 >> 2] = HEAP32[i7 + (i10 << 3) + 4 >> 2];
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
  i1 = HEAP32[i7 + (i28 << 3) >> 2] | 0;
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
function __ZN7WebCore20NetworkResourcesData20removeCachedResourceEPNS_14CachedResourceE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = HEAP32[i2 + 40 >> 2] | 0;
 i8 = HEAP32[i2 + 44 >> 2] | 0;
 i9 = i7 + (i8 << 3) | 0;
 if ((HEAP32[i2 + 52 >> 2] | 0) == 0) {
  return;
 }
 L4 : do {
  if ((i8 | 0) == 0) {
   i10 = i7;
  } else {
   i2 = i7;
   while (1) {
    i11 = HEAP32[i2 >> 2] | 0;
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     i10 = i2;
     break L4;
    }
    i2 = i2 + 8 | 0;
    if ((i2 | 0) == (i9 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i10 | 0) == (i9 | 0)) {
  return;
 } else {
  i12 = i10;
  i13 = 0;
  i14 = 0;
 }
 L12 : while (1) {
  i10 = (HEAP32[i12 + 4 >> 2] | 0) + 56 | 0;
  do {
   if ((HEAP32[i10 >> 2] | 0) == (i3 | 0)) {
    HEAP32[i10 >> 2] = 0;
    i7 = i12 | 0;
    if ((i13 | 0) != (HEAP32[i5 >> 2] | 0)) {
     i8 = HEAP32[i12 >> 2] | 0;
     HEAP32[i14 + (i13 << 2) >> 2] = i8;
     if ((i8 | 0) != 0) {
      i2 = i8 | 0;
      HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
     }
     i2 = (HEAP32[i6 >> 2] | 0) + 1 | 0;
     HEAP32[i6 >> 2] = i2;
     i15 = i2;
     i16 = i14;
     break;
    }
    i2 = i13 + 1 | 0;
    do {
     if (i14 >>> 0 > i7 >>> 0) {
      i17 = 13;
     } else {
      if ((i14 + (i13 << 2) | 0) >>> 0 <= i7 >>> 0) {
       i17 = 13;
       break;
      }
      __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2);
      i8 = HEAP32[i4 >> 2] | 0;
      i18 = i8 + (i12 - i14 >> 2 << 2) | 0;
      i19 = i8;
     }
    } while (0);
    if ((i17 | 0) == 13) {
     i17 = 0;
     __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2);
     i18 = i7;
     i19 = HEAP32[i4 >> 2] | 0;
    }
    i8 = HEAP32[i6 >> 2] | 0;
    i11 = HEAP32[i18 >> 2] | 0;
    HEAP32[i19 + (i8 << 2) >> 2] = i11;
    if ((i11 | 0) != 0) {
     i20 = i11 | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
    }
    i20 = i8 + 1 | 0;
    HEAP32[i6 >> 2] = i20;
    i15 = i20;
    i16 = i19;
   } else {
    i15 = i13;
    i16 = i14;
   }
  } while (0);
  i10 = i12 + 8 | 0;
  if ((i10 | 0) == (i9 | 0)) {
   i17 = 26;
   break;
  } else {
   i21 = i10;
  }
  while (1) {
   i10 = HEAP32[i21 >> 2] | 0;
   if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
    break;
   }
   i10 = i21 + 8 | 0;
   if ((i10 | 0) == (i9 | 0)) {
    i17 = 28;
    break L12;
   } else {
    i21 = i10;
   }
  }
  if ((i21 | 0) == (i9 | 0)) {
   i17 = 27;
   break;
  } else {
   i12 = i21;
   i13 = i15;
   i14 = i16;
  }
 }
 if ((i17 | 0) == 26) {
  return;
 } else if ((i17 | 0) == 27) {
  return;
 } else if ((i17 | 0) == 28) {
  return;
 }
}
function __ZN7WebCore20NetworkResourcesData16setXHRReplayDataERKN3WTF6StringEPNS_13XHRReplayDataE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = __ZN7WebCore20NetworkResourcesData24resourceDataForRequestIdERKN3WTF6StringE(i1, i2) | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i1 + 20 >> 2] | 0;
  i6 = HEAP32[i1 + 24 >> 2] | 0;
  i7 = i5 + (i6 << 3) | 0;
  if ((HEAP32[i1 + 32 >> 2] | 0) == 0) {
   return;
  }
  L6 : do {
   if ((i6 | 0) == 0) {
    i8 = i5;
   } else {
    i9 = i5;
    while (1) {
     i10 = HEAP32[i9 >> 2] | 0;
     if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
      i8 = i9;
      break L6;
     }
     i9 = i9 + 8 | 0;
     if ((i9 | 0) == (i7 | 0)) {
      break;
     }
    }
    return;
   }
  } while (0);
  if ((i8 | 0) == (i7 | 0)) {
   return;
  }
  i5 = i2 | 0;
  i2 = i8;
  L15 : while (1) {
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i2 + 4 >> 2] | 0, HEAP32[i5 >> 2] | 0) | 0) {
    __ZN7WebCore20NetworkResourcesData16setXHRReplayDataERKN3WTF6StringEPNS_13XHRReplayDataE(i1, i2 | 0, i3);
   }
   i8 = i2 + 8 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    i11 = 40;
    break;
   } else {
    i12 = i8;
   }
   while (1) {
    i8 = HEAP32[i12 >> 2] | 0;
    if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
     break;
    }
    i8 = i12 + 8 | 0;
    if ((i8 | 0) == (i7 | 0)) {
     i11 = 38;
     break L15;
    } else {
     i12 = i8;
    }
   }
   if ((i12 | 0) == (i7 | 0)) {
    i11 = 37;
    break;
   } else {
    i2 = i12;
   }
  }
  if ((i11 | 0) == 37) {
   return;
  } else if ((i11 | 0) == 38) {
   return;
  } else if ((i11 | 0) == 40) {
   return;
  }
 }
 if ((i3 | 0) != 0) {
  i11 = i3 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 i11 = i4 + 20 | 0;
 i4 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i3;
 if ((i4 | 0) == 0) {
  return;
 }
 i3 = i4 | 0;
 i11 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) != 0) {
  HEAP32[i3 >> 2] = i11;
  return;
 }
 __ZN7WebCore13HTTPHeaderMapD1Ev(i4 + 64 | 0);
 i11 = HEAP32[i4 + 60 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i3 = i11 | 0;
   i12 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i11);
    __ZN3WTF8fastFreeEPv(i11);
    break;
   } else {
    HEAP32[i3 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i4 + 8 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i12 = i11 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i12 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i4 + 4 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i3 = i11 | 0;
   i12 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i3 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore20NetworkResourcesData24ensureNoDataForRequestIdERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = __ZN7WebCore20NetworkResourcesData24resourceDataForRequestIdERKN3WTF6StringE(i1, i2) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if ((HEAP32[i3 + 16 >> 2] | 0) == 0) {
  if ((HEAP32[i3 + 28 >> 2] | 0) != 0) {
   i4 = 4;
  }
 } else {
  i4 = 4;
 }
 if ((i4 | 0) == 4) {
  HEAP8[i3 + 32 | 0] = 1;
  i4 = __ZN7WebCore20NetworkResourcesData12ResourceData13removeContentEv(i3) | 0;
  i5 = i1 + 60 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - i4;
 }
 __ZN7WebCore20NetworkResourcesData12ResourceDataD2Ev(i3);
 __ZN3WTF8fastFreeEPv(i3);
 i3 = i1 + 40 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i1 + 44 >> 2] | 0;
  i7 = i6 << 3 | 0;
  i8 = 0;
  i9 = i6;
 } else {
  i6 = HEAP32[i1 + 48 >> 2] | 0;
  i10 = i2 | 0;
  i2 = HEAP32[i10 >> 2] | 0;
  i11 = HEAP32[i2 + 16 >> 2] | 0;
  if (i11 >>> 0 > 127 >>> 0) {
   i12 = i11 >>> 7;
  } else {
   i12 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
  }
  i2 = (i12 >>> 23) + ~i12 | 0;
  i11 = i2 << 12 ^ i2;
  i2 = i11 >>> 7 ^ i11;
  i11 = i2 << 2 ^ i2;
  i2 = i11 >>> 20 ^ i11 | 1;
  i11 = i12;
  i12 = 0;
  while (1) {
   i13 = i11 & i6;
   i14 = i5 + (i13 << 3) | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   i16 = i15;
   if ((i16 | 0) == 0) {
    i17 = 0;
    break;
   } else if ((i16 | 0) != (-1 | 0)) {
    if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i15, HEAP32[i10 >> 2] | 0) | 0) {
     i17 = i14;
     break;
    }
   }
   i14 = (i12 | 0) == 0 ? i2 : i12;
   i11 = i14 + i13 | 0;
   i12 = i14;
  }
  i12 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i1 + 44 >> 2] | 0;
  i7 = (i17 | 0) == 0 ? i12 + (i4 << 3) | 0 : i17;
  i8 = i12;
  i9 = i4;
 }
 i4 = i3 | 0;
 i3 = i1 + 44 | 0;
 if ((i7 | 0) == (i8 + (i9 << 3) | 0)) {
  return;
 }
 i9 = i7 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = i7 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i8 >> 2] = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i9 >> 2] = -1;
 i9 = i1 + 56 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 i9 = i1 + 52 | 0;
 i1 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i1;
 i9 = HEAP32[i3 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i9 | 0) & (i9 | 0) > 8)) {
  return;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore20NetworkResourcesData12ResourceDataEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i4, (i9 | 0) / 2 & -1, 0) | 0;
 return;
}
function __ZN7WebCore20NetworkResourcesData15ensureFreeSpaceEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = i1 + 64 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (i4 >>> 0 < i2 >>> 0) {
  i5 = 0;
  return i5 | 0;
 }
 i6 = i1 + 60 | 0;
 if ((i4 - (HEAP32[i6 >> 2] | 0) | 0) >>> 0 >= i2 >>> 0) {
  i5 = 1;
  return i5 | 0;
 }
 i4 = i1 | 0;
 i7 = i1 + 8 | 0;
 i8 = i1 + 12 | 0;
 i9 = i1 + 48 | 0;
 i10 = i1 + 40 | 0;
 while (1) {
  i1 = (HEAP32[i7 >> 2] | 0) + (HEAP32[i4 >> 2] << 2) | 0;
  i11 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  i1 = HEAP32[(HEAP32[i7 >> 2] | 0) + (HEAP32[i4 >> 2] << 2) >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    i12 = i1 | 0;
    i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i13 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i12 >> 2] = i13;
     break;
    }
   }
  } while (0);
  i1 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = (i1 | 0) == ((HEAP32[i8 >> 2] | 0) - 1 | 0) ? 0 : i1 + 1 | 0;
  do {
   if ((i11 | 0) != 0) {
    i1 = HEAP32[i9 >> 2] | 0;
    i13 = HEAP32[i10 >> 2] | 0;
    i12 = HEAP32[i11 + 16 >> 2] | 0;
    if (i12 >>> 0 > 127 >>> 0) {
     i14 = i12 >>> 7;
    } else {
     i14 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i11) | 0;
    }
    L21 : do {
     if ((i13 | 0) != 0) {
      i12 = (i14 >>> 23) + ~i14 | 0;
      i15 = i12 << 12 ^ i12;
      i12 = i15 >>> 7 ^ i15;
      i15 = i12 << 2 ^ i12;
      i12 = i15 >>> 20 ^ i15 | 1;
      i15 = i14;
      i16 = 0;
      while (1) {
       i17 = i15 & i1;
       i18 = i13 + (i17 << 3) | 0;
       i19 = HEAP32[i18 >> 2] | 0;
       i20 = i19;
       if ((i20 | 0) == 0) {
        break L21;
       } else if ((i20 | 0) != (-1 | 0)) {
        if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i19, i11) | 0) {
         break;
        }
       }
       i19 = (i16 | 0) == 0 ? i12 : i16;
       i15 = i19 + i17 | 0;
       i16 = i19;
      }
      if ((i18 | 0) == 0) {
       break;
      }
      i16 = HEAP32[i13 + (i17 << 3) + 4 >> 2] | 0;
      if ((i16 | 0) == 0) {
       break;
      }
      HEAP8[i16 + 32 | 0] = 1;
      i15 = __ZN7WebCore20NetworkResourcesData12ResourceData13removeContentEv(i16) | 0;
      HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) - i15;
     }
    } while (0);
    i13 = i11 | 0;
    i1 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
    if ((i1 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i13 >> 2] = i1;
     break;
    }
   }
  } while (0);
  if (((HEAP32[i3 >> 2] | 0) - (HEAP32[i6 >> 2] | 0) | 0) >>> 0 >= i2 >>> 0) {
   i5 = 1;
   break;
  }
 }
 return i5 | 0;
}
function __ZN7WebCore20NetworkResourcesData20maybeAddResourceDataERKN3WTF6StringEPKcj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = __ZN7WebCore20NetworkResourcesData24resourceDataForRequestIdERKN3WTF6StringE(i1, i2) | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i6 = HEAP32[i5 + 48 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i7 = i6 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i8 + 1;
 if ((i8 | 0) == 0) {
  __ZN7WebCore19TextResourceDecoderD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
 } else {
  HEAP32[i7 >> 2] = i8;
 }
 i8 = i5 + 28 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i9 = 0;
 } else {
  i9 = __ZNK7WebCore12SharedBuffer4sizeEv(i7) | 0;
 }
 i7 = i5 + 32 | 0;
 if ((i9 + i4 | 0) >>> 0 > (HEAP32[i1 + 68 >> 2] | 0) >>> 0) {
  HEAP8[i7] = 1;
  i9 = __ZN7WebCore20NetworkResourcesData12ResourceData13removeContentEv(i5) | 0;
  i5 = i1 + 60 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - i9;
 }
 if ((HEAP8[i7] & 1) != 0) {
  return;
 }
 if (!(__ZN7WebCore20NetworkResourcesData15ensureFreeSpaceEj(i1, i4) | 0)) {
  return;
 }
 if ((HEAP8[i7] & 1) != 0) {
  return;
 }
 i7 = i1 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 i5 = i1 + 4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i6 | 0) == 0) {
    if ((i10 | 0) == 0) {
     i11 = 18;
     break;
    } else {
     i12 = 0;
     break;
    }
   } else {
    if ((i6 | 0) == (i10 - 1 | 0)) {
     i11 = 18;
     break;
    } else {
     i12 = i6;
     break;
    }
   }
  } else {
   if ((i6 + 1 | 0) == (i9 | 0)) {
    i11 = 18;
   } else {
    i12 = i6;
   }
  }
 } while (0);
 if ((i11 | 0) == 18) {
  __ZN3WTF5DequeINS_6StringELj0EE14expandCapacityEv(i7);
  i12 = HEAP32[i5 >> 2] | 0;
 }
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + (i12 << 2) >> 2] = i7;
 if ((i7 | 0) != 0) {
  i12 = i7 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = (i12 | 0) == ((HEAP32[i1 + 12 >> 2] | 0) - 1 | 0) ? 0 : i12 + 1 | 0;
 i12 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i5 = __ZN3WTF10fastMallocEj(40) | 0;
   __ZN7WebCore12SharedBufferC1EPKcj(i5, i3, i4);
   i7 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i5;
   if ((i7 | 0) == 0) {
    break;
   }
   i5 = i7 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i5 >> 2] = i2;
    break;
   }
  } else {
   __ZN7WebCore12SharedBuffer6appendEPKcj(i12, i3, i4);
  }
 } while (0);
 i3 = i1 + 60 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + i4;
 return;
}
function __ZN7WebCore20NetworkResourcesData18reuseXHRReplayDataERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = __ZN7WebCore20NetworkResourcesData24resourceDataForRequestIdERKN3WTF6StringE(i1, i3) | 0;
 i7 = __ZN7WebCore20NetworkResourcesData24resourceDataForRequestIdERKN3WTF6StringE(i1, i2) | 0;
 if ((i6 | 0) == 0 | (i7 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EERKS1_SH_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i5, i1 + 20 | 0, i2, i3);
  if ((HEAP8[i5 + 8 | 0] & 1) != 0) {
   STACKTOP = i4;
   return;
  }
  i2 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i3 >> 2] | 0;
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
  }
  i3 = i2 + 4 | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i5;
  if ((i2 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i5 = i2 | 0;
  i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
  if ((i3 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i2);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i5 >> 2] = i3;
   STACKTOP = i4;
   return;
  }
 }
 i3 = HEAP32[i6 + 20 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i6 = i3 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i7 + 20 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i3;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i7 | 0;
 i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i3 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore13HTTPHeaderMapD1Ev(i7 + 64 | 0);
 i6 = HEAP32[i7 + 60 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i3 = i6 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 + 8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 + 4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i3 = i6 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20NetworkResourcesData18setResourceContentERKN3WTF6StringES4_b(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = __ZN7WebCore20NetworkResourcesData24resourceDataForRequestIdERKN3WTF6StringE(i1, i2) | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i6 = i3 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i7 = 0;
  } else {
   i8 = __ZNK3WTF10StringImpl11sizeInBytesEv(i3) | 0;
   if (i8 >>> 0 <= (HEAP32[i1 + 68 >> 2] | 0) >>> 0) {
    i7 = i8;
    break;
   }
   return;
  }
 } while (0);
 i3 = i5 + 32 | 0;
 if ((HEAP8[i3] & 1) != 0) {
  return;
 }
 if (!(__ZN7WebCore20NetworkResourcesData15ensureFreeSpaceEj(i1, i7) | 0)) {
  return;
 }
 if ((HEAP8[i3] & 1) != 0) {
  return;
 }
 i3 = i5 + 16 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  i8 = __ZN7WebCore20NetworkResourcesData12ResourceData13removeContentEv(i5) | 0;
  i9 = i1 + 60 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) - i8;
 }
 i8 = i1 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 i10 = i1 + 4 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i12 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i11 | 0) == 0) {
    if ((i12 | 0) == 0) {
     i13 = 14;
     break;
    } else {
     i14 = 0;
     break;
    }
   } else {
    if ((i11 | 0) == (i12 - 1 | 0)) {
     i13 = 14;
     break;
    } else {
     i14 = i11;
     break;
    }
   }
  } else {
   if ((i11 + 1 | 0) == (i9 | 0)) {
    i13 = 14;
   } else {
    i14 = i11;
   }
  }
 } while (0);
 if ((i13 | 0) == 14) {
  __ZN3WTF5DequeINS_6StringELj0EE14expandCapacityEv(i8);
  i14 = HEAP32[i10 >> 2] | 0;
 }
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + (i14 << 2) >> 2] = i8;
 if ((i8 | 0) != 0) {
  i14 = i8 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
 }
 i14 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = (i14 | 0) == ((HEAP32[i1 + 12 >> 2] | 0) - 1 | 0) ? 0 : i14 + 1 | 0;
 i14 = HEAP32[i6 >> 2] | 0;
 if ((i14 | 0) != 0) {
  i6 = i14 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i14;
 do {
  if ((i6 | 0) != 0) {
   i14 = i6 | 0;
   i3 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i14 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP8[i5 + 24 | 0] = i4 & 1;
 i4 = i1 + 60 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + i7;
 return;
}
function __ZN7WebCore20NetworkResourcesDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore20NetworkResourcesData5clearERKN3WTF6StringE(i1, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i1 + 44 >> 2] | 0;
  if ((i5 | 0) > 0) {
   i4 = 0;
   while (1) {
    i6 = HEAP32[i3 + (i4 << 3) >> 2] | 0;
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
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i5 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i1 + 24 >> 2] | 0;
  if ((i5 | 0) > 0) {
   i4 = 0;
   while (1) {
    i6 = i3 + (i4 << 3) | 0;
    do {
     if ((HEAP32[i6 >> 2] | 0) != -1) {
      i7 = HEAP32[i3 + (i4 << 3) + 4 >> 2] | 0;
      do {
       if ((i7 | 0) != 0) {
        i9 = i7 | 0;
        i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
        if ((i8 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i7);
         break;
        } else {
         HEAP32[i9 >> 2] = i8;
         break;
        }
       }
      } while (0);
      i7 = HEAP32[i6 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      i8 = i7 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i9 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i8 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i5 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN3WTF5DequeINS_6StringELj0EE10destroyAllEv(i1 | 0);
 i3 = i1 + 8 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore20NetworkResourcesDataD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore20NetworkResourcesData5clearERKN3WTF6StringE(i1, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i1 + 44 >> 2] | 0;
  if ((i5 | 0) > 0) {
   i4 = 0;
   while (1) {
    i6 = HEAP32[i3 + (i4 << 3) >> 2] | 0;
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
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i5 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i1 + 24 >> 2] | 0;
  if ((i5 | 0) > 0) {
   i4 = 0;
   while (1) {
    i6 = i3 + (i4 << 3) | 0;
    do {
     if ((HEAP32[i6 >> 2] | 0) != -1) {
      i7 = HEAP32[i3 + (i4 << 3) + 4 >> 2] | 0;
      do {
       if ((i7 | 0) != 0) {
        i9 = i7 | 0;
        i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
        if ((i8 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i7);
         break;
        } else {
         HEAP32[i9 >> 2] = i8;
         break;
        }
       }
      } while (0);
      i7 = HEAP32[i6 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      i8 = i7 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i9 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i8 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i5 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN3WTF5DequeINS_6StringELj0EE10destroyAllEv(i1 | 0);
 i3 = i1 + 8 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i2;
 return;
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
function __ZN7WebCore20NetworkResourcesData12ResourceData19decodeDataToContentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 28 | 0;
 i6 = __ZNK7WebCore12SharedBuffer4sizeEv(HEAP32[i5 >> 2] | 0) | 0;
 i7 = i1 + 16 | 0;
 i8 = i1 + 48 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 i9 = __ZNK7WebCore12SharedBuffer4dataEv(HEAP32[i5 >> 2] | 0) | 0;
 __ZN7WebCore19TextResourceDecoder6decodeEPKcj(i3, i1, i9, __ZNK7WebCore12SharedBuffer4sizeEv(HEAP32[i5 >> 2] | 0) | 0);
 i9 = i3 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i1 = i7 | 0;
 i10 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 do {
  if ((i10 | 0) != 0) {
   i3 = i10 | 0;
   i11 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i3 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i9 = i10 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i11;
    break;
   }
  }
 } while (0);
 __ZN7WebCore19TextResourceDecoder5flushEv(i4, HEAP32[i8 >> 2] | 0);
 __ZN3WTF6String6appendERKS0_(i7, i4);
 i7 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 | 0;
   i8 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i4 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i5 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i1 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i12 = 0;
  i13 = i12 - i6 | 0;
  STACKTOP = i2;
  return i13 | 0;
 }
 i12 = __ZNK3WTF10StringImpl11sizeInBytesEv(i7) | 0;
 i13 = i12 - i6 | 0;
 STACKTOP = i2;
 return i13 | 0;
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
function __ZN7WebCore20NetworkResourcesData13xhrReplayDataERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 L1 : do {
  if ((i6 | 0) != 0) {
   i7 = HEAP32[i1 + 28 >> 2] | 0;
   i8 = i2 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i10 = HEAP32[i9 + 16 >> 2] | 0;
   if (i10 >>> 0 > 127 >>> 0) {
    i11 = i10 >>> 7;
   } else {
    i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i9) | 0;
   }
   i9 = (i11 >>> 23) + ~i11 | 0;
   i10 = i9 << 12 ^ i9;
   i9 = i10 >>> 7 ^ i10;
   i10 = i9 << 2 ^ i9;
   i9 = i10 >>> 20 ^ i10 | 1;
   i10 = i11;
   i12 = 0;
   while (1) {
    i13 = i10 & i7;
    i14 = i6 + (i13 << 3) | 0;
    i15 = HEAP32[i14 >> 2] | 0;
    i16 = i15;
    if ((i16 | 0) == 0) {
     break L1;
    } else if ((i16 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i15, HEAP32[i8 >> 2] | 0) | 0) {
      break;
     }
    }
    i15 = (i12 | 0) == 0 ? i9 : i12;
    i10 = i15 + i13 | 0;
    i12 = i15;
   }
   if ((i14 | 0) == 0) {
    break;
   }
   __ZNK3WTF7HashMapINS_6StringES1_NS_10StringHashENS_10HashTraitsIS1_EES4_E3getERKS1_(i4, i5, i2);
   i12 = __ZN7WebCore20NetworkResourcesData13xhrReplayDataERKN3WTF6StringE(i1, i4) | 0;
   i10 = HEAP32[i4 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i17 = i12;
    STACKTOP = i3;
    return i17 | 0;
   }
   i9 = i10 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    i17 = i12;
    STACKTOP = i3;
    return i17 | 0;
   } else {
    HEAP32[i9 >> 2] = i8;
    i17 = i12;
    STACKTOP = i3;
    return i17 | 0;
   }
  }
 } while (0);
 i4 = __ZN7WebCore20NetworkResourcesData24resourceDataForRequestIdERKN3WTF6StringE(i1, i2) | 0;
 if ((i4 | 0) == 0) {
  i17 = 0;
  STACKTOP = i3;
  return i17 | 0;
 }
 i17 = HEAP32[i4 + 20 >> 2] | 0;
 STACKTOP = i3;
 return i17 | 0;
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
  if ((i12 | 0) == 0) {
   i13 = 3;
   break;
  } else if ((i12 | 0) == (-1 | 0)) {
   i14 = i10;
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
    i14 = i8;
   }
  }
  i12 = (i5 | 0) == 0 ? i6 : i5;
  i7 = i12 + i9 | 0;
  i5 = i12;
  i8 = i14;
 }
 if ((i13 | 0) == 3) {
  i15 = (i8 | 0) != 0 ? i8 : i10;
 }
 i10 = i15 + 4 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i13 = i8 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i8 = i15 | 0;
 i14 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 | 0;
   i5 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i13 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i8 >> 2] = i14;
 i14 = i2 + 4 | 0;
 i2 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 return i15 | 0;
}
function __ZN3WTF5DequeINS_6StringELj0EE10destroyAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + (i4 << 2) | 0;
 if (i3 >>> 0 <= i4 >>> 0) {
  if ((i3 | 0) == (i4 | 0)) {
   return;
  }
  i8 = i6 + (i3 << 2) | 0;
  while (1) {
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i10 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i8 = i8 + 4 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  return;
 }
 if ((i4 | 0) == 0) {
  i12 = i6;
  i13 = i3;
 } else {
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i4 = i6 | 0;
     i8 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i4 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i12 + (i2 << 2) | 0;
 if ((i13 | 0) == (i2 | 0)) {
  return;
 }
 i2 = i12 + (i13 << 2) | 0;
 while (1) {
  i13 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    i12 = i13 | 0;
    i5 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     break;
    } else {
     HEAP32[i12 >> 2] = i5;
     break;
    }
   }
  } while (0);
  i2 = i2 + 4 | 0;
  if ((i2 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore20NetworkResourcesData15resourceCreatedERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 __ZN7WebCore20NetworkResourcesData24ensureNoDataForRequestIdERKN3WTF6StringE(i1, i2);
 i7 = __ZN3WTF10fastMallocEj(60) | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = HEAP32[i3 >> 2] | 0;
 HEAP32[i7 + 4 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i3 = i9 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i7 + 28 >> 2] = 0;
 HEAP8[i7 + 32 | 0] = 0;
 _memset(i7 + 8 | 0, 0, 17) | 0;
 HEAP32[i7 + 36 >> 2] = 7;
 _memset(i7 + 44 | 0, 0, 16) | 0;
 HEAP32[i5 >> 2] = i7;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore20NetworkResourcesData12ResourceDataEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i6, i1 + 40 | 0, i2, i5);
 if ((HEAP8[i6 + 8 | 0] & 1) != 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] = HEAP32[i5 >> 2];
 STACKTOP = i4;
 return;
}
function __ZN7WebCore13XHRReplayDataC2ERKN3WTF6StringERKNS_3URLEbNS1_10PassRefPtrINS_8FormDataEEEb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = 1;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i2 = i7 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i7 = i2 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i3 + 4 | 0;
 i2 = i1 + 12 | 0;
 i8 = HEAP8[i2] & -2 | HEAP8[i7] & 1;
 HEAP8[i2] = i8;
 HEAP8[i2] = i8 & -3 | HEAP8[i7] & 2;
 HEAP32[i1 + 16 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i3 + 16 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i3 + 20 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i3 + 24 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i3 + 28 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i3 + 32 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i3 + 36 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i3 + 40 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i3 + 44 >> 2];
 HEAP8[i1 + 56 | 0] = i4 & 1;
 i4 = i5 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 60 >> 2] = i5;
 __ZN7WebCore13HTTPHeaderMapC1Ev(i1 + 64 | 0);
 HEAP8[i1 + 84 | 0] = i6 & 1;
 return;
}
function __ZN7WebCore13XHRReplayDataC1ERKN3WTF6StringERKNS_3URLEbNS1_10PassRefPtrINS_8FormDataEEEb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = 1;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i2 = i7 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i7 = i2 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i3 + 4 | 0;
 i2 = i1 + 12 | 0;
 i8 = HEAP8[i2] & -2 | HEAP8[i7] & 1;
 HEAP8[i2] = i8;
 HEAP8[i2] = i8 & -3 | HEAP8[i7] & 2;
 HEAP32[i1 + 16 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i3 + 16 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i3 + 20 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i3 + 24 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i3 + 28 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i3 + 32 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i3 + 36 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i3 + 40 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i3 + 44 >> 2];
 HEAP8[i1 + 56 | 0] = i4 & 1;
 i4 = i5 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 60 >> 2] = i5;
 __ZN7WebCore13HTTPHeaderMapC1Ev(i1 + 64 | 0);
 HEAP8[i1 + 84 | 0] = i6 & 1;
 return;
}
function __ZNK3WTF7HashMapINS_6StringES1_NS_10StringHashENS_10HashTraitsIS1_EES4_E3getERKS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i6 = HEAP32[i3 + 16 >> 2] | 0;
 if (i6 >>> 0 > 127 >>> 0) {
  i7 = i6 >>> 7;
 } else {
  i7 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 L5 : do {
  if ((i5 | 0) != 0) {
   i3 = (i7 >>> 23) + ~i7 | 0;
   i6 = i3 << 12 ^ i3;
   i3 = i6 >>> 7 ^ i6;
   i6 = i3 << 2 ^ i3;
   i3 = i6 >>> 20 ^ i6 | 1;
   i6 = i7;
   i8 = 0;
   while (1) {
    i9 = i6 & i4;
    i10 = i5 + (i9 << 3) | 0;
    i11 = HEAP32[i10 >> 2] | 0;
    i12 = i11;
    if ((i12 | 0) == 0) {
     break L5;
    } else if ((i12 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i11, HEAP32[i2 >> 2] | 0) | 0) {
      break;
     }
    }
    i11 = (i8 | 0) == 0 ? i3 : i8;
    i6 = i11 + i9 | 0;
    i8 = i11;
   }
   if ((i10 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i5 + (i9 << 3) + 4 >> 2] | 0;
   HEAP32[i1 >> 2] = i8;
   if ((i8 | 0) == 0) {
    return;
   }
   i6 = i8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore20NetworkResourcesData24resourceDataForRequestIdERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 48 >> 2] | 0;
 i6 = HEAP32[i1 + 40 >> 2] | 0;
 i1 = HEAP32[i2 + 16 >> 2] | 0;
 if (i1 >>> 0 > 127 >>> 0) {
  i7 = i1 >>> 7;
 } else {
  i7 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
 }
 if ((i6 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i2 = (i7 >>> 23) + ~i7 | 0;
 i1 = i2 << 12 ^ i2;
 i2 = i1 >>> 7 ^ i1;
 i1 = i2 << 2 ^ i2;
 i2 = i1 >>> 20 ^ i1 | 1;
 i1 = i7;
 i7 = 0;
 while (1) {
  i8 = i1 & i5;
  i9 = i6 + (i8 << 3) | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  i11 = i10;
  if ((i11 | 0) == 0) {
   i4 = 0;
   i12 = 16;
   break;
  } else if ((i11 | 0) != (-1 | 0)) {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i10, HEAP32[i3 >> 2] | 0) | 0) {
    break;
   }
  }
  i10 = (i7 | 0) == 0 ? i2 : i7;
  i1 = i10 + i8 | 0;
  i7 = i10;
 }
 if ((i12 | 0) == 16) {
  return i4 | 0;
 }
 if ((i9 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = HEAP32[i6 + (i8 << 3) + 4 >> 2] | 0;
 return i4 | 0;
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
function __ZN7WebCore20NetworkResourcesData12ResourceData13removeContentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = 0;
  } else {
   i5 = __ZNK7WebCore12SharedBuffer4sizeEv(i3) | 0;
   i6 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i6 | 0) == 0) {
    i4 = i5;
    break;
   }
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    i4 = i5;
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    i4 = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i9 = i4;
  return i9 | 0;
 }
 i4 = i1 + 16 | 0;
 i1 = __ZNK3WTF10StringImpl11sizeInBytesEv(i2) | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i2 | 0) == 0) {
  i9 = i1;
  return i9 | 0;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i9 = i1;
  return i9 | 0;
 } else {
  HEAP32[i4 >> 2] = i3;
  i9 = i1;
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCore20NetworkResourcesData23addResourceSharedBufferERKN3WTF6StringENS1_10PassRefPtrINS_12SharedBufferEEES4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = __ZN7WebCore20NetworkResourcesData24resourceDataForRequestIdERKN3WTF6StringE(i1, i2) | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i5 + 52 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i4 = i1 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i5 + 44 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i1;
 if ((i5 | 0) == 0) {
  return;
 }
 i1 = i5 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore13XHRReplayData9addHeaderERKN3WTF12AtomicStringERKNS1_6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EERKS1_RKS3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i5, i1 + 64 | 0, i2, i3);
 if ((HEAP8[i5 + 8 | 0] & 1) != 0) {
  STACKTOP = i4;
  return;
 }
 i2 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i3 = i5 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i2 + 4 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i2 | 0;
 i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF5DequeINS_6StringELj0EE14expandCapacityEv(i1) {
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
function __ZN7WebCore20NetworkResourcesData24maybeDecodeDataToContentERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = __ZN7WebCore20NetworkResourcesData24resourceDataForRequestIdERKN3WTF6StringE(i1, i2) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if ((HEAP32[i3 + 28 >> 2] | 0) == 0) {
  return;
 }
 i2 = __ZN7WebCore20NetworkResourcesData12ResourceData19decodeDataToContentEv(i3) | 0;
 i4 = i1 + 60 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + i2;
 i2 = HEAP32[i3 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i5 = i2 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 i6 = __ZNK3WTF10StringImpl11sizeInBytesEv(i2) | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
 } else {
  HEAP32[i5 >> 2] = i7;
 }
 if (i6 >>> 0 <= (HEAP32[i1 + 68 >> 2] | 0) >>> 0) {
  return;
 }
 HEAP8[i3 + 32 | 0] = 1;
 i1 = __ZN7WebCore20NetworkResourcesData12ResourceData13removeContentEv(i3) | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - i1;
 return;
}
function __ZN7WebCore13XHRReplayData6createERKN3WTF6StringERKNS_3URLEbNS1_10PassRefPtrINS_8FormDataEEEb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = __ZN3WTF10fastMallocEj(88) | 0;
 i10 = i8 | 0;
 i11 = i5 | 0;
 i5 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i10 >> 2] = i5;
 __ZN7WebCore13XHRReplayDataC2ERKN3WTF6StringERKNS_3URLEbNS1_10PassRefPtrINS_8FormDataEEEb(i9, i2, i3, i4, i8, i6);
 HEAP32[i1 >> 2] = i9;
 i9 = HEAP32[i10 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i10 = i9 | 0;
 i1 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore8FormDataD1Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i10 >> 2] = i1;
  STACKTOP = i7;
  return;
 }
}
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore20NetworkResourcesData26setResourcesDataSizeLimitsEjj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore20NetworkResourcesData5clearERKN3WTF6StringE(i1, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 64 >> 2] = i2;
 HEAP32[i1 + 68 >> 2] = i3;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20NetworkResourcesData12ResourceData10appendDataEPKcj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 + 28 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) != 0) {
  __ZN7WebCore12SharedBuffer6appendEPKcj(i1, i2, i3);
  return;
 }
 i1 = __ZN3WTF10fastMallocEj(40) | 0;
 __ZN7WebCore12SharedBufferC1EPKcj(i1, i2, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i1;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore12SharedBufferD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore20NetworkResourcesData12ResourceData10setContentERKN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i2 = i4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 + 16 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP8[i1 + 24 | 0] = i3 & 1;
 return;
}
function __ZN7WebCore20NetworkResourcesData12ResourceDataC2ERKN3WTF6StringES5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i2 = i4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP8[i1 + 32 | 0] = 0;
 _memset(i1 + 8 | 0, 0, 17) | 0;
 HEAP32[i1 + 36 >> 2] = 7;
 _memset(i1 + 44 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore20NetworkResourcesData12ResourceDataC1ERKN3WTF6StringES5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i2 = i4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP8[i1 + 32 | 0] = 0;
 _memset(i1 + 8 | 0, 0, 17) | 0;
 HEAP32[i1 + 36 >> 2] = 7;
 _memset(i1 + 44 | 0, 0, 16) | 0;
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
function __ZN7WebCore20NetworkResourcesData15setResourceTypeERKN3WTF6StringENS_18InspectorPageAgent12ResourceTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = __ZN7WebCore20NetworkResourcesData24resourceDataForRequestIdERKN3WTF6StringE(i1, i2) | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 HEAP32[i4 + 36 >> 2] = i3;
 return;
}
function __ZN7WebCore20NetworkResourcesData17addCachedResourceERKN3WTF6StringEPNS_14CachedResourceE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = __ZN7WebCore20NetworkResourcesData24resourceDataForRequestIdERKN3WTF6StringE(i1, i2) | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 HEAP32[i4 + 56 >> 2] = i3;
 return;
}
function __ZN7WebCore20NetworkResourcesData12resourceTypeERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = __ZN7WebCore20NetworkResourcesData24resourceDataForRequestIdERKN3WTF6StringE(i1, i2) | 0;
 if ((i3 | 0) == 0) {
  i4 = 7;
  return i4 | 0;
 }
 i4 = HEAP32[i3 + 36 >> 2] | 0;
 return i4 | 0;
}
function __ZNK7WebCore20NetworkResourcesData12ResourceData10dataLengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore12SharedBuffer4sizeEv(i2) | 0;
 return i3 | 0;
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
function __ZN7WebCore20NetworkResourcesData12ResourceData12evictContentEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 32 | 0] = 1;
 return __ZN7WebCore20NetworkResourcesData12ResourceData13removeContentEv(i1) | 0;
}
function __ZN7WebCore20NetworkResourcesData4dataERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore20NetworkResourcesData24resourceDataForRequestIdERKN3WTF6StringE(i1, i2) | 0;
}
function __ZN7WebCore20NetworkResourcesDataC2Ev(i1) {
 i1 = i1 | 0;
 _memset(i1 | 0, 0, 64) | 0;
 HEAP32[i1 + 64 >> 2] = 1e8;
 HEAP32[i1 + 68 >> 2] = 1e7;
 return;
}
function __ZN7WebCore20NetworkResourcesDataC1Ev(i1) {
 i1 = i1 | 0;
 _memset(i1 | 0, 0, 64) | 0;
 HEAP32[i1 + 64 >> 2] = 1e8;
 HEAP32[i1 + 68 >> 2] = 1e7;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
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
function b4(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(4);
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
function b2(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(2);
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore20NetworkResourcesDataD2Ev,b0,__ZN7WebCore20NetworkResourcesDataC2Ev,b0,b0,b0];
  var FUNCTION_TABLE_ii = [b1,b1];
  var FUNCTION_TABLE_viii = [b2,b2,__ZN7WebCore20NetworkResourcesData12ResourceDataC2ERKN3WTF6StringES5_,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_viiiiii = [b4,b4,__ZN7WebCore13XHRReplayDataC2ERKN3WTF6StringERKNS_3URLEbNS1_10PassRefPtrINS_8FormDataEEEb,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN3WTF10StringImpl19latin1CaseFoldTableE": __ZN3WTF10StringImpl19latin1CaseFoldTableE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore20NetworkResourcesData16setXHRReplayDataERKN3WTF6StringEPNS_13XHRReplayDataE","_strlen","__ZN7WebCore20NetworkResourcesData5clearERKN3WTF6StringE","__ZN7WebCore20NetworkResourcesData12ResourceDataC2ERKN3WTF6StringES5_","__ZN7WebCore20NetworkResourcesData12ResourceData19decodeDataToContentEv","__ZN7WebCore20NetworkResourcesDataD2Ev","__ZN7WebCore20NetworkResourcesData16responseReceivedERKN3WTF6StringES4_RKNS_16ResourceResponseE","__ZN7WebCore20NetworkResourcesData24resourceDataForRequestIdERKN3WTF6StringE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EERKS1_SH_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_","__ZN7WebCore20NetworkResourcesData26setResourcesDataSizeLimitsEjj","__ZN7WebCore20NetworkResourcesData12ResourceData10setContentERKN3WTF6StringEb","__ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE","__ZN7WebCore20NetworkResourcesData20removeCachedResourceEPNS_14CachedResourceE","__ZN7WebCore20NetworkResourcesData4dataERKN3WTF6StringE","__ZNK7WebCore20NetworkResourcesData12ResourceData10dataLengthEv","__ZN7WebCore20NetworkResourcesData24maybeDecodeDataToContentERKN3WTF6StringE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EERKS1_RKS3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_","__ZN7WebCore20NetworkResourcesData12ResourceData13removeContentEv","__ZN3WTF5DequeINS_6StringELj0EE14expandCapacityEv","__ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j","__ZNK3WTF7HashMapINS_6StringES1_NS_10StringHashENS_10HashTraitsIS1_EES4_E3getERKS1_","__ZN7WebCore20NetworkResourcesData20maybeAddResourceDataERKN3WTF6StringEPKcj","__ZN7WebCore20NetworkResourcesData17addCachedResourceERKN3WTF6StringEPNS_14CachedResourceE","__ZN7WebCore20NetworkResourcesData12ResourceData10appendDataEPKcj","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore20NetworkResourcesData12ResourceDataEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_","__ZN7WebCore13XHRReplayData9addHeaderERKN3WTF12AtomicStringERKNS1_6StringE","__ZN7WebCore13XHRReplayData6createERKN3WTF6StringERKNS_3URLEbNS1_10PassRefPtrINS_8FormDataEEEb","__ZN7WebCore20NetworkResourcesData23addResourceSharedBufferERKN3WTF6StringENS1_10PassRefPtrINS_12SharedBufferEEES4_","__ZN7WebCore20NetworkResourcesData18reuseXHRReplayDataERKN3WTF6StringES4_","__ZN7WebCore13XHRReplayDataC2ERKN3WTF6StringERKNS_3URLEbNS1_10PassRefPtrINS_8FormDataEEEb","__ZN7WebCore20NetworkResourcesData12ResourceData12evictContentEv","__ZN7WebCore20NetworkResourcesData12ResourceDataD2Ev","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore20NetworkResourcesDataC2Ev","_memset","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore20NetworkResourcesData12ResourceDataEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore20NetworkResourcesData12ResourceDataEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore20NetworkResourcesData15setResourceTypeERKN3WTF6StringENS_18InspectorPageAgent12ResourceTypeE","__ZN7WebCore20NetworkResourcesData18setResourceContentERKN3WTF6StringES4_b","__ZN7WebCore20NetworkResourcesData13xhrReplayDataERKN3WTF6StringE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E8reinsertEOS4_","_memcpy","__ZN7WebCore20NetworkResourcesData15resourceCreatedERKN3WTF6StringES4_","__ZN7WebCore20NetworkResourcesData24ensureNoDataForRequestIdERKN3WTF6StringE","__ZN3WTF5DequeINS_6StringELj0EE10destroyAllEv","__ZN7WebCore20NetworkResourcesData15ensureFreeSpaceEj","__ZN7WebCore20NetworkResourcesData12resourceTypeERKN3WTF6StringE"]

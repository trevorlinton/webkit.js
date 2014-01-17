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
H_BASE = parentModule["_malloc"](192 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 192;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore20CachedResourceLoaderC1EPNS_14DocumentLoaderE;
var __ZN7WebCore20CachedResourceLoaderD1Ev;
/* memory initializer */ allocate([71,69,84,0,0,0,0,0,100,97,116,97,0,0,0,0,46,32,68,111,109,97,105,110,115,44,32,112,114,111,116,111,99,111,108,115,32,97,110,100,32,112,111,114,116,115,32,109,117,115,116,32,109,97,116,99,104,46,10,0,0,0,0,0,32,102,114,111,109,32,102,114,97,109,101,32,119,105,116,104,32,85,82,76,32,0,0,0,85,110,115,97,102,101,32,97,116,116,101,109,112,116,32,116,111,32,108,111,97,100,32,85,82,76,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_did(index,a1,a2) {
  try {
    return Module["dynCall_did"](index,a1,a2);
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
  var __ZN3WTF10StringImpl19latin1CaseFoldTableE=env.__ZN3WTF10StringImpl19latin1CaseFoldTableE|0;
  var __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE=env.__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore5TimerINS_20CachedResourceLoaderEEE=(H_BASE+128)|0;
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
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiii=env.invoke_iiii;
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
function __ZN7WebCore20CachedResourceLoader15requestResourceENS_14CachedResource4TypeERNS_21CachedResourceRequestE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 288 | 0;
 i6 = i5 | 0;
 i7 = i5 + 184 | 0;
 i8 = i5 + 232 | 0;
 i9 = i5 + 280 | 0;
 i10 = i9;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i16 = i4 | 0;
 i17 = i4 | 0;
 i18 = __ZNK7WebCore19ResourceRequestBase3urlEv(i17) | 0;
 i19 = i7 | 0;
 i20 = HEAP32[i18 >> 2] | 0;
 HEAP32[i19 >> 2] = i20;
 if ((i20 | 0) == 0) {
  i21 = 0;
  i22 = i7 + 4 | 0;
 } else {
  i23 = i20 | 0;
  HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
  i23 = i7 + 4 | 0;
  i21 = HEAP8[i23] & -2;
  i22 = i23;
 }
 i23 = i18 + 4 | 0;
 i20 = i21 | HEAP8[i23] & 1;
 HEAP8[i22] = i20;
 HEAP8[i22] = i20 & -3 | HEAP8[i23] & 2;
 i23 = i7 + 8 | 0;
 HEAP32[i23 >> 2] = HEAP32[i18 + 8 >> 2];
 i20 = i7 + 12 | 0;
 HEAP32[i20 >> 2] = HEAP32[i18 + 12 >> 2];
 i21 = i7 + 16 | 0;
 HEAP32[i21 >> 2] = HEAP32[i18 + 16 >> 2];
 i24 = i7 + 20 | 0;
 HEAP32[i24 >> 2] = HEAP32[i18 + 20 >> 2];
 i25 = i7 + 24 | 0;
 HEAP32[i25 >> 2] = HEAP32[i18 + 24 >> 2];
 i26 = i7 + 28 | 0;
 HEAP32[i26 >> 2] = HEAP32[i18 + 28 >> 2];
 i27 = i7 + 32 | 0;
 HEAP32[i27 >> 2] = HEAP32[i18 + 32 >> 2];
 i28 = i7 + 36 | 0;
 HEAP32[i28 >> 2] = HEAP32[i18 + 36 >> 2];
 i29 = i7 + 40 | 0;
 HEAP32[i29 >> 2] = HEAP32[i18 + 40 >> 2];
 i30 = i7 + 44 | 0;
 HEAP32[i30 >> 2] = HEAP32[i18 + 44 >> 2];
 __ZN7WebCore11MemoryCache32removeFragmentIdentifierIfNeededERKNS_3URLE(i8, i7);
 i18 = i8 | 0;
 i31 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 i32 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = i31;
 do {
  if ((i32 | 0) != 0) {
   i31 = i32 | 0;
   i33 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
   if ((i33 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i32);
    break;
   } else {
    HEAP32[i31 >> 2] = i33;
    break;
   }
  }
 } while (0);
 i32 = HEAP8[i8 + 4 | 0] | 0;
 HEAP8[i22] = HEAP8[i22] & -4 | i32 & 1 | i32 & 2;
 HEAP32[i23 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i20 >> 2] = HEAP32[i8 + 12 >> 2];
 HEAP32[i21 >> 2] = HEAP32[i8 + 16 >> 2];
 HEAP32[i24 >> 2] = HEAP32[i8 + 20 >> 2];
 HEAP32[i25 >> 2] = HEAP32[i8 + 24 >> 2];
 HEAP32[i26 >> 2] = HEAP32[i8 + 28 >> 2];
 HEAP32[i27 >> 2] = HEAP32[i8 + 32 >> 2];
 HEAP32[i28 >> 2] = HEAP32[i8 + 36 >> 2];
 HEAP32[i29 >> 2] = HEAP32[i8 + 40 >> 2];
 HEAP32[i30 >> 2] = HEAP32[i8 + 44 >> 2];
 i8 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i18 = i8 | 0;
   i30 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i30 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i18 >> 2] = i30;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP8[i22] & 1) == 0) {
   __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 | 0, 0);
  } else {
   i8 = i4 + 188 | 0;
   i30 = i4 + 220 | 0;
   if (!(__ZN7WebCore20CachedResourceLoader10canRequestENS_14CachedResource4TypeERKNS_3URLERKNS_21ResourceLoaderOptionsEb(i2, i3, i7, i8, (HEAP8[i30] & 1) != 0) | 0)) {
    __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 | 0, 0);
    break;
   }
   i18 = i2 + 48 | 0;
   i29 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i28 = HEAP32[i29 + 12 >> 2] | 0;
     if ((i28 | 0) == 0) {
      break;
     }
     i27 = HEAP32[i28 + 84 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 196 >> 2] & 7](i27, i4);
    }
   } while (0);
   do {
    if ((HEAP8[__ZN7WebCore11memoryCacheEv() | 0] & 1) != 0) {
     i29 = i2 + 24 | 0;
     __ZN3WTF7HashMapINS_6StringEN7WebCore20CachedResourceHandleINS2_14CachedResourceEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE4findERKS1_(i10, i29, i7 | 0);
     i27 = i29 | 0;
     i28 = i2 + 28 | 0;
     i26 = HEAP32[i9 >> 2] | 0;
     if ((i26 | 0) == ((HEAP32[i27 >> 2] | 0) + (HEAP32[i28 >> 2] << 3) | 0)) {
      break;
     }
     HEAP32[(HEAP32[i26 + 4 >> 2] | 0) + 608 >> 2] = 0;
     i26 = HEAP32[i9 >> 2] | 0;
     i25 = i29 | 0;
     if ((i26 | 0) == ((HEAP32[i27 >> 2] | 0) + (HEAP32[i28 >> 2] << 3) | 0)) {
      break;
     }
     __ZN7WebCore24CachedResourceHandleBaseD2Ev(i26 + 4 | 0);
     i27 = i26 | 0;
     i26 = HEAP32[i27 >> 2] | 0;
     do {
      if ((i26 | 0) != 0) {
       i29 = i26 | 0;
       i24 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
       if ((i24 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i26);
        break;
       } else {
        HEAP32[i29 >> 2] = i24;
        break;
       }
      }
     } while (0);
     HEAP32[i27 >> 2] = -1;
     i26 = i2 + 40 | 0;
     HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
     i26 = i2 + 36 | 0;
     i24 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i24;
     i26 = HEAP32[i28 >> 2] | 0;
     if (!((i24 * 6 & -1 | 0) < (i26 | 0) & (i26 | 0) > 8)) {
      break;
     }
     __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore20CachedResourceHandleINS3_14CachedResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i25, (i26 | 0) / 2 & -1, 0) | 0;
    }
   } while (0);
   i26 = i11 | 0;
   __ZN7WebCore24CachedResourceHandleBaseC2Ev(i26);
   __ZN7WebCore24CachedResourceHandleBase11setResourceEPNS_14CachedResourceE(i26, __ZN7WebCore11MemoryCache18resourceForRequestERKNS_15ResourceRequestE(__ZN7WebCore11memoryCacheEv() | 0, i16) | 0);
   i24 = i11 | 0;
   i29 = i4 + 224 | 0;
   i21 = __ZNK7WebCore20CachedResourceLoader27determineRevalidationPolicyENS_14CachedResource4TypeERNS_15ResourceRequestEbPS1_NS_21CachedResourceRequest11DeferOptionE(i2, i3, i16, (HEAP8[i30] & 1) != 0, HEAP32[i24 >> 2] | 0, HEAP32[i29 >> 2] | 0) | 0;
   L39 : do {
    if ((i21 | 0) == 1) {
     __ZN7WebCore20CachedResourceLoader18revalidateResourceERKNS_21CachedResourceRequestEPNS_14CachedResourceE(i13, 0, 0, HEAP32[i24 >> 2] | 0);
     __ZN7WebCore24CachedResourceHandleBase11setResourceEPNS_14CachedResourceE(i26, HEAP32[i13 >> 2] | 0);
     __ZN7WebCore24CachedResourceHandleBaseD2Ev(i13 | 0);
     i34 = 43;
    } else if ((i21 | 0) == 0) {
     i20 = HEAP32[i24 >> 2] | 0;
     do {
      if ((i20 | 0) != 0) {
       i23 = HEAP32[i18 >> 2] | 0;
       if ((i23 | 0) == 0) {
        break;
       }
       if ((HEAP32[i23 + 12 >> 2] | 0) == 0) {
        break;
       }
       if ((HEAP32[i20 + 588 >> 2] & 14336 | 0) != 4096) {
        break;
       }
       __ZN7WebCore15ResourceRequestC2Ev(i6);
       i23 = HEAP32[i18 >> 2] | 0;
       if ((i23 | 0) == 0) {
        i35 = 0;
       } else {
        i35 = HEAP32[i23 + 12 >> 2] | 0;
       }
       __ZN7WebCore11FrameLoader29loadedResourceFromMemoryCacheEPNS_14CachedResourceERNS_15ResourceRequestE(i35 + 80 | 0, i20, i6);
       i23 = __ZNK7WebCore19ResourceRequestBase6isNullEv(i6 | 0) | 0;
       __ZN7WebCore15ResourceRequestD2Ev(i6);
       if (!i23) {
        break;
       }
       __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 | 0, 0);
       break L39;
      }
     } while (0);
     i20 = __ZN7WebCore11memoryCacheEv() | 0;
     __ZN7WebCore11MemoryCache16resourceAccessedEPNS_14CachedResourceE(i20, HEAP32[i24 >> 2] | 0);
     i34 = 43;
    } else if ((i21 | 0) == 2) {
     i20 = __ZN7WebCore11memoryCacheEv() | 0;
     __ZN7WebCore11MemoryCache5evictEPNS_14CachedResourceE(i20, HEAP32[i24 >> 2] | 0);
     i34 = 30;
    } else if ((i21 | 0) == 3) {
     i34 = 30;
    } else {
     i34 = 43;
    }
   } while (0);
   if ((i34 | 0) == 30) {
    i18 = i12 | 0;
    __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i18, __ZN7WebCoreL14createResourceENS_14CachedResource4TypeERNS_15ResourceRequestERKN3WTF6StringE(i3, i16, i4 + 184 | 0) | 0);
    i20 = __ZN7WebCore11memoryCacheEv() | 0;
    i25 = i12 | 0;
    if (!(__ZN7WebCore11MemoryCache3addEPNS_14CachedResourceE(i20, HEAP32[i25 >> 2] | 0) | 0)) {
     HEAP32[(HEAP32[i25 >> 2] | 0) + 608 >> 2] = i2;
    }
    __ZN7WebCore24CachedResourceHandleBase11setResourceEPNS_14CachedResourceE(i26, HEAP32[i25 >> 2] | 0);
    __ZN7WebCore24CachedResourceHandleBaseD2Ev(i18);
    i34 = 43;
   }
   L58 : do {
    if ((i34 | 0) == 43) {
     i18 = HEAP32[i24 >> 2] | 0;
     if ((i18 | 0) == 0) {
      __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 | 0, 0);
      break;
     }
     i25 = (i21 | 0) == 0;
     if (!((HEAP8[i30] & 1) != 0 & i25)) {
      __ZN7WebCore14CachedResource15setLoadPriorityENS_20ResourceLoadPriorityE(i18, HEAP32[i4 + 216 >> 2] | 0);
     }
     if (i25) {
      i25 = HEAP32[i24 >> 2] | 0;
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 52 >> 2] & 1](i25) | 0) {
       i34 = 49;
      }
     } else {
      i34 = 49;
     }
     do {
      if ((i34 | 0) == 49) {
       if ((HEAP32[i29 >> 2] | 0) != 0) {
        break;
       }
       i25 = HEAP32[i24 >> 2] | 0;
       FUNCTION_TABLE_viii[HEAP32[(HEAP32[i25 >> 2] | 0) + 8 >> 2] & 1](i25, i2, i8);
       i25 = HEAP32[(HEAP32[i24 >> 2] | 0) + 588 >> 2] | 0;
       if (((i25 >>> 11 & 7) - 3 | 0) >>> 0 >= 2 >>> 0) {
        break;
       }
       if ((i25 & 16 | 0) != 0) {
        i25 = __ZN7WebCore11memoryCacheEv() | 0;
        __ZN7WebCore11MemoryCache5evictEPNS_14CachedResourceE(i25, HEAP32[i24 >> 2] | 0);
       }
       __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 | 0, 0);
       break L58;
      }
     } while (0);
     if (!(__ZNK7WebCore3URL10protocolIsEPKc(__ZNK7WebCore19ResourceRequestBase3urlEv(i17) | 0, H_BASE + 16 | 0) | 0)) {
      i25 = __ZNK7WebCore19ResourceRequestBase3urlEv(i17) | 0;
      __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i14, i2 + 4 | 0, i25, i25);
     }
     __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore20CachedResourceHandleINS3_14CachedResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i15, i2 + 24 | 0, __ZNK7WebCore19ResourceRequestBase3urlEv((HEAP32[i24 >> 2] | 0) + 48 | 0) | 0, i11);
     if ((HEAP8[i15 + 8 | 0] & 1) == 0) {
      __ZN7WebCore24CachedResourceHandleBase11setResourceEPNS_14CachedResourceE((HEAP32[i15 >> 2] | 0) + 4 | 0, HEAP32[i24 >> 2] | 0);
     }
     __ZN7WebCore24CachedResourceHandleBaseC2ERKS0_(i1 | 0, i26);
    }
   } while (0);
   __ZN7WebCore24CachedResourceHandleBaseD2Ev(i26);
  }
 } while (0);
 i1 = HEAP32[i19 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i19 = i1 | 0;
 i15 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
 if ((i15 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i19 >> 2] = i15;
  STACKTOP = i5;
  return;
 }
}
function __ZNK7WebCore20CachedResourceLoader24printAccessDeniedMessageERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 64 | 0;
 i11 = i3 + 72 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i12 = i1 + 48 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i13 + 12 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i6 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i1 + 44 | 0;
 i1 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i15 = 6;
  } else {
   if ((HEAP32[i1 + 356 >> 2] | 0) == 0) {
    i15 = 6;
    break;
   }
   __ZNK7WebCore3URL30stringCenterEllipsizedToLengthEj(i10, i2, 1024);
   i16 = i10 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i18 = 0;
     i19 = 1;
    } else {
     i20 = i17 | 0;
     i21 = HEAP32[i20 >> 2] | 0;
     i22 = i21 + 2 | 0;
     HEAP32[i20 >> 2] = i21 + 4;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      i23 = HEAP32[i20 >> 2] | 0;
     } else {
      HEAP32[i20 >> 2] = i22;
      i23 = i22;
     }
     i22 = i23 + 2 | 0;
     HEAP32[i20 >> 2] = i23 + 4;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      i18 = i17;
      i19 = 0;
      break;
     } else {
      HEAP32[i20 >> 2] = i22;
      i18 = i17;
      i19 = 0;
      break;
     }
    }
   } while (0);
   __ZNK7WebCore3URL30stringCenterEllipsizedToLengthEj(i11, (HEAP32[i14 >> 2] | 0) + 356 | 0, 1024);
   i17 = (i18 | 0) == 0;
   if (!i17) {
    i22 = i18 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
   }
   i22 = i11 | 0;
   i20 = HEAP32[i22 >> 2] | 0;
   i21 = (i20 | 0) == 0;
   if (!i21) {
    i24 = i20 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
   }
   if (!i17) {
    i24 = i18 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
   }
   do {
    if (!i21) {
     i24 = i20 | 0;
     i25 = HEAP32[i24 >> 2] | 0;
     HEAP32[i24 >> 2] = i25 + 2;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i24 >> 2] = i25;
      break;
     }
    }
   } while (0);
   if (!i17) {
    i25 = i18 | 0;
    i24 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
    if ((i24 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i18);
     i26 = HEAP32[i25 >> 2] | 0;
    } else {
     HEAP32[i25 >> 2] = i24;
     i26 = i24;
    }
    HEAP32[i25 >> 2] = i26 + 2;
   }
   if (!i21) {
    i25 = i20 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
   }
   HEAP32[i9 >> 2] = H_BASE + 96;
   i25 = i9 + 4 | 0;
   HEAP32[i25 >> 2] = i18;
   if (!i17) {
    i24 = i18 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
   }
   HEAP32[i9 + 8 >> 2] = H_BASE + 72;
   i24 = i9 + 12 | 0;
   HEAP32[i24 >> 2] = i20;
   do {
    if (i21) {
     HEAP32[i9 + 16 >> 2] = H_BASE + 24;
    } else {
     i27 = i20 | 0;
     i28 = HEAP32[i27 >> 2] | 0;
     HEAP32[i27 >> 2] = i28 + 2;
     HEAP32[i9 + 16 >> 2] = H_BASE + 24;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i27 >> 2] = i28;
      break;
     }
    }
   } while (0);
   do {
    if (!i17) {
     i28 = i18 | 0;
     i27 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i28 >> 2] = i27;
      break;
     }
    }
   } while (0);
   __ZNK3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EcvS3_Ev(i8, i9);
   i27 = i8 | 0;
   i28 = HEAP32[i27 >> 2] | 0;
   HEAP32[i27 >> 2] = 0;
   i27 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i28;
   do {
    if ((i27 | 0) != 0) {
     i28 = i27 | 0;
     i29 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i29 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i28 >> 2] = i29;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i29 = i27 | 0;
     i28 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i29 >> 2] = i28;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i24 = i27 | 0;
     i28 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i24 >> 2] = i28;
      break;
     }
    }
   } while (0);
   do {
    if (!i21) {
     i27 = i20 | 0;
     i25 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i27 >> 2] = i25;
      break;
     }
    }
   } while (0);
   do {
    if (!i17) {
     i20 = i18 | 0;
     i21 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i20 >> 2] = i21;
      break;
     }
    }
   } while (0);
   i21 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i20 = i21 | 0;
     i25 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i20 >> 2] = i25;
      break;
     }
    }
   } while (0);
   do {
    if (!i17) {
     i21 = i18 | 0;
     i22 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i21 >> 2] = i22;
      break;
     }
    }
   } while (0);
   do {
    if (!i19) {
     i17 = i18 | 0;
     i22 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i17 >> 2] = i22;
      break;
     }
    }
   } while (0);
   i22 = HEAP32[i16 >> 2] | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   i17 = i22 | 0;
   i21 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i17 >> 2] = i21;
    break;
   }
  }
 } while (0);
 do {
  if ((i15 | 0) == 6) {
   __ZNK7WebCore3URL30stringCenterEllipsizedToLengthEj(i7, i2, 1024);
   i18 = i7 | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i19 | 0) == 0) {
     i30 = 0;
     i31 = 1;
    } else {
     i8 = i19 | 0;
     i9 = HEAP32[i8 >> 2] | 0;
     i26 = i9 + 2 | 0;
     HEAP32[i8 >> 2] = i9 + 4;
     if ((i26 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      i32 = HEAP32[i8 >> 2] | 0;
     } else {
      HEAP32[i8 >> 2] = i26;
      i32 = i26;
     }
     i26 = i32 + 2 | 0;
     HEAP32[i8 >> 2] = i32 + 4;
     if ((i26 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      i30 = i19;
      i31 = 0;
      break;
     } else {
      HEAP32[i8 >> 2] = i26;
      i30 = i19;
      i31 = 0;
      break;
     }
    }
   } while (0);
   HEAP32[i5 >> 2] = H_BASE + 96;
   i19 = i5 + 4 | 0;
   HEAP32[i19 >> 2] = i30;
   i16 = (i30 | 0) == 0;
   if (!i16) {
    i26 = i30 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEEcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, 46);
   i26 = i4 | 0;
   i8 = HEAP32[i26 >> 2] | 0;
   HEAP32[i26 >> 2] = 0;
   i26 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i26 | 0) != 0) {
     i19 = i26 | 0;
     i9 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i19 >> 2] = i9;
      break;
     }
    }
   } while (0);
   if ((i8 | 0) == 0) {
    _WTFCrash();
   }
   i26 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i8;
   do {
    if ((i26 | 0) != 0) {
     i9 = i26 | 0;
     i19 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i9 >> 2] = i19;
      break;
     }
    }
   } while (0);
   do {
    if (!i16) {
     i26 = i30 | 0;
     i8 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i30);
      break;
     } else {
      HEAP32[i26 >> 2] = i8;
      break;
     }
    }
   } while (0);
   do {
    if (!i31) {
     i16 = i30 | 0;
     i8 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i30);
      break;
     } else {
      HEAP32[i16 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i8 = HEAP32[i18 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i16 = i8 | 0;
   i26 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i16 >> 2] = i26;
    break;
   }
  }
 } while (0);
 i30 = HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + 12 >> 2] | 0) + 456 >> 2] | 0;
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i30 >> 2] | 0) + 316 >> 2] & 1](i30, 8, 3, i6, 0);
 i6 = HEAP32[i13 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i6 | 0;
 i30 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
 if ((i30 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i13 >> 2] = i30;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i2 + 4 | 0;
 i5 = i1 + 4 | 0;
 i7 = HEAP8[i5] & -2 | HEAP8[i6] & 1;
 HEAP8[i5] = i7;
 HEAP8[i5] = i7 & -3 | HEAP8[i6] & 2;
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
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[i2 + 56 >> 3];
 i6 = HEAP32[i2 + 64 >> 2] | 0;
 HEAP32[i1 + 64 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i2 + 68 | 0;
 i6 = i1 + 68 | 0;
 i5 = HEAP8[i6] & -2 | HEAP8[i7] & 1;
 HEAP8[i6] = i5;
 HEAP8[i6] = i5 & -3 | HEAP8[i7] & 2;
 HEAP32[i1 + 72 >> 2] = HEAP32[i2 + 72 >> 2];
 HEAP32[i1 + 76 >> 2] = HEAP32[i2 + 76 >> 2];
 HEAP32[i1 + 80 >> 2] = HEAP32[i2 + 80 >> 2];
 HEAP32[i1 + 84 >> 2] = HEAP32[i2 + 84 >> 2];
 HEAP32[i1 + 88 >> 2] = HEAP32[i2 + 88 >> 2];
 HEAP32[i1 + 92 >> 2] = HEAP32[i2 + 92 >> 2];
 HEAP32[i1 + 96 >> 2] = HEAP32[i2 + 96 >> 2];
 HEAP32[i1 + 100 >> 2] = HEAP32[i2 + 100 >> 2];
 HEAP32[i1 + 104 >> 2] = HEAP32[i2 + 104 >> 2];
 HEAP32[i1 + 108 >> 2] = HEAP32[i2 + 108 >> 2];
 i7 = HEAP32[i2 + 112 >> 2] | 0;
 HEAP32[i1 + 112 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i5 = i7 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 116 | 0;
 i7 = i5 | 0;
 _memset(i5 | 0, 0, 20) | 0;
 i5 = HEAP32[i2 + 116 >> 2] | 0;
 i6 = HEAP32[i2 + 120 >> 2] | 0;
 i8 = i5 + (i6 << 3) | 0;
 L10 : do {
  if ((HEAP32[i2 + 128 >> 2] | 0) != 0) {
   L12 : do {
    if ((i6 | 0) == 0) {
     i9 = i5;
    } else {
     i10 = i5;
     while (1) {
      i11 = HEAP32[i10 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i9 = i10;
       break L12;
      }
      i10 = i10 + 8 | 0;
      if ((i10 | 0) == (i8 | 0)) {
       break L10;
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
    __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_22IdentityHashTranslatorIS7_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i4, i7, i12 | 0, i12);
    i10 = i12 + 8 | 0;
    if ((i10 | 0) == (i8 | 0)) {
     break L10;
    } else {
     i13 = i10;
    }
    while (1) {
     i10 = HEAP32[i13 >> 2] | 0;
     if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
      break;
     }
     i10 = i13 + 8 | 0;
     if ((i10 | 0) == (i8 | 0)) {
      break L10;
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
 i13 = HEAP32[i2 + 140 >> 2] | 0;
 i12 = i2 + 144 | 0;
 i8 = HEAP32[i12 >> 2] | 0;
 i7 = i1 + 136 | 0;
 HEAP32[i7 >> 2] = 0;
 i4 = i1 + 140 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 144 >> 2] = i8;
 do {
  if ((i13 | 0) != 0) {
   if (i13 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i8 = __ZN3WTF18fastMallocGoodSizeEj(i13 << 2) | 0;
   HEAP32[i4 >> 2] = i8 >>> 2;
   i9 = __ZN3WTF10fastMallocEj(i8) | 0;
   i8 = i9;
   HEAP32[i7 >> 2] = i8;
   if ((i9 | 0) == 0) {
    break;
   }
   i9 = HEAP32[i2 + 136 >> 2] | 0;
   i5 = HEAP32[i12 >> 2] | 0;
   i6 = i9 + (i5 << 2) | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i14 = i9;
    i15 = i8;
   }
   while (1) {
    i8 = HEAP32[i14 >> 2] | 0;
    HEAP32[i15 >> 2] = i8;
    if ((i8 | 0) != 0) {
     i9 = i8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    }
    i9 = i14 + 4 | 0;
    if ((i9 | 0) == (i6 | 0)) {
     break;
    } else {
     i14 = i9;
     i15 = i15 + 4 | 0;
    }
   }
  }
 } while (0);
 i15 = HEAP32[i2 + 148 >> 2] | 0;
 HEAP32[i1 + 148 >> 2] = i15;
 if ((i15 | 0) == 0) {
  i16 = i2 + 152 | 0;
  i17 = HEAP8[i16] | 0;
  i18 = i17 & 1;
  i19 = i1 + 152 | 0;
  i20 = HEAP8[i19] | 0;
  i21 = i20 & -2;
  i22 = i21 | i18;
  HEAP8[i19] = i22;
  i23 = HEAP8[i16] | 0;
  i24 = i23 & 2;
  i25 = i22 & -3;
  i26 = i25 | i24;
  HEAP8[i19] = i26;
  i27 = HEAP8[i16] | 0;
  i28 = i27 & 4;
  i29 = i26 & -5;
  i30 = i29 | i28;
  HEAP8[i19] = i30;
  i31 = HEAP8[i16] | 0;
  i32 = i31 & 8;
  i33 = i30 & -9;
  i34 = i33 | i32;
  HEAP8[i19] = i34;
  i35 = HEAP8[i16] | 0;
  i36 = i35 & 16;
  i37 = i34 & -17;
  i38 = i37 | i36;
  HEAP8[i19] = i38;
  i39 = HEAP8[i16] | 0;
  i40 = i39 & 32;
  i41 = i38 & -33;
  i42 = i41 | i40;
  HEAP8[i19] = i42;
  i43 = HEAP8[i16] | 0;
  i44 = i43 & 64;
  i45 = i42 & -65;
  i46 = i45 | i44;
  HEAP8[i19] = i46;
  i47 = HEAP8[i16] | 0;
  i48 = i47 & -128;
  i49 = i46 & 127;
  i50 = i49 | i48;
  HEAP8[i19] = i50;
  i51 = i1 + 156 | 0;
  i52 = i2 + 156 | 0;
  i53 = HEAP32[i52 >> 2] | 0;
  HEAP32[i51 >> 2] = i53;
  STACKTOP = i3;
  return;
 }
 i14 = i15 | 0;
 HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 i16 = i2 + 152 | 0;
 i17 = HEAP8[i16] | 0;
 i18 = i17 & 1;
 i19 = i1 + 152 | 0;
 i20 = HEAP8[i19] | 0;
 i21 = i20 & -2;
 i22 = i21 | i18;
 HEAP8[i19] = i22;
 i23 = HEAP8[i16] | 0;
 i24 = i23 & 2;
 i25 = i22 & -3;
 i26 = i25 | i24;
 HEAP8[i19] = i26;
 i27 = HEAP8[i16] | 0;
 i28 = i27 & 4;
 i29 = i26 & -5;
 i30 = i29 | i28;
 HEAP8[i19] = i30;
 i31 = HEAP8[i16] | 0;
 i32 = i31 & 8;
 i33 = i30 & -9;
 i34 = i33 | i32;
 HEAP8[i19] = i34;
 i35 = HEAP8[i16] | 0;
 i36 = i35 & 16;
 i37 = i34 & -17;
 i38 = i37 | i36;
 HEAP8[i19] = i38;
 i39 = HEAP8[i16] | 0;
 i40 = i39 & 32;
 i41 = i38 & -33;
 i42 = i41 | i40;
 HEAP8[i19] = i42;
 i43 = HEAP8[i16] | 0;
 i44 = i43 & 64;
 i45 = i42 & -65;
 i46 = i45 | i44;
 HEAP8[i19] = i46;
 i47 = HEAP8[i16] | 0;
 i48 = i47 & -128;
 i49 = i46 & 127;
 i50 = i49 | i48;
 HEAP8[i19] = i50;
 i51 = i1 + 156 | 0;
 i52 = i2 + 156 | 0;
 i53 = HEAP32[i52 >> 2] | 0;
 HEAP32[i51 >> 2] = i53;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20CachedResourceLoader31garbageCollectDocumentResourcesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i3 + 12 | 0;
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = i4;
 i6 = i3 + 4 | 0;
 HEAP32[i6 >> 2] = 10;
 i7 = i3 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 i3 = i1 + 24 | 0;
 i8 = i3 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i1 + 28 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i9 + (i11 << 3) | 0;
 L1 : do {
  if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
   i13 = i4;
  } else {
   L3 : do {
    if ((i11 | 0) == 0) {
     i14 = i9;
    } else {
     i15 = i9;
     while (1) {
      i16 = HEAP32[i15 >> 2] | 0;
      if (!((i16 | 0) == (-1 | 0) | (i16 | 0) == 0)) {
       i14 = i15;
       break L3;
      }
      i16 = i15 + 8 | 0;
      if ((i16 | 0) == (i12 | 0)) {
       i13 = i4;
       break L1;
      } else {
       i15 = i16;
      }
     }
    }
   } while (0);
   if ((i14 | 0) == (i12 | 0)) {
    i13 = i4;
    break;
   } else {
    i17 = i14;
   }
   L8 : while (1) {
    i15 = i17 + 4 | 0;
    if ((HEAP32[(HEAP32[i15 >> 2] | 0) + 580 >> 2] | 0) == 1) {
     i16 = i17 | 0;
     i18 = HEAP32[i7 >> 2] | 0;
     if ((i18 | 0) == (HEAP32[i6 >> 2] | 0)) {
      i19 = i18 + 1 | 0;
      i20 = HEAP32[i5 >> 2] | 0;
      do {
       if (i20 >>> 0 > i16 >>> 0) {
        i21 = 13;
       } else {
        if ((i20 + (i18 << 2) | 0) >>> 0 <= i16 >>> 0) {
         i21 = 13;
         break;
        }
        i22 = i17 - i20 >> 2;
        i23 = i19 + (i18 >>> 2) | 0;
        i24 = i23 >>> 0 > 16 >>> 0 ? i23 : 16;
        i23 = i24 >>> 0 > i19 >>> 0 ? i24 : i19;
        do {
         if (i18 >>> 0 < i23 >>> 0) {
          if (i23 >>> 0 > 10 >>> 0) {
           if (i23 >>> 0 > 1073741823 >>> 0) {
            i21 = 26;
            break L8;
           }
           i24 = __ZN3WTF18fastMallocGoodSizeEj(i23 << 2) | 0;
           HEAP32[i6 >> 2] = i24 >>> 2;
           i25 = __ZN3WTF10fastMallocEj(i24) | 0;
           HEAP32[i5 >> 2] = i25;
           i26 = i25;
          } else {
           HEAP32[i5 >> 2] = i4;
           HEAP32[i6 >> 2] = 10;
           i26 = i4;
          }
          i25 = i20;
          _memcpy(i26 | 0, i25 | 0, i18 << 2) | 0;
          if ((i4 | 0) == (i20 | 0) | (i20 | 0) == 0) {
           break;
          }
          if ((HEAP32[i5 >> 2] | 0) == (i20 | 0)) {
           HEAP32[i5 >> 2] = 0;
           HEAP32[i6 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i25);
         }
        } while (0);
        i27 = (HEAP32[i5 >> 2] | 0) + (i22 << 2) | 0;
       }
      } while (0);
      do {
       if ((i21 | 0) == 13) {
        i21 = 0;
        i23 = i19 + (i18 >>> 2) | 0;
        i25 = i23 >>> 0 > 16 >>> 0 ? i23 : 16;
        i23 = i25 >>> 0 > i19 >>> 0 ? i25 : i19;
        if (i18 >>> 0 >= i23 >>> 0) {
         i27 = i16;
         break;
        }
        if (i23 >>> 0 > 10 >>> 0) {
         if (i23 >>> 0 > 1073741823 >>> 0) {
          i21 = 16;
          break L8;
         }
         i25 = __ZN3WTF18fastMallocGoodSizeEj(i23 << 2) | 0;
         HEAP32[i6 >> 2] = i25 >>> 2;
         i23 = __ZN3WTF10fastMallocEj(i25) | 0;
         HEAP32[i5 >> 2] = i23;
         i28 = i23;
        } else {
         HEAP32[i5 >> 2] = i4;
         HEAP32[i6 >> 2] = 10;
         i28 = i4;
        }
        i23 = i20;
        _memcpy(i28 | 0, i23 | 0, i18 << 2) | 0;
        if ((i4 | 0) == (i20 | 0) | (i20 | 0) == 0) {
         i27 = i16;
         break;
        }
        if ((HEAP32[i5 >> 2] | 0) == (i20 | 0)) {
         HEAP32[i5 >> 2] = 0;
         HEAP32[i6 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i23);
        i27 = i16;
       }
      } while (0);
      i16 = HEAP32[i27 >> 2] | 0;
      HEAP32[(HEAP32[i5 >> 2] | 0) + (HEAP32[i7 >> 2] << 2) >> 2] = i16;
      if ((i16 | 0) != 0) {
       i20 = i16 | 0;
       HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
      }
      i29 = HEAP32[i7 >> 2] | 0;
     } else {
      i20 = HEAP32[i17 >> 2] | 0;
      HEAP32[(HEAP32[i5 >> 2] | 0) + (i18 << 2) >> 2] = i20;
      if ((i20 | 0) != 0) {
       i16 = i20 | 0;
       HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
      }
      i29 = HEAP32[i7 >> 2] | 0;
     }
     HEAP32[i7 >> 2] = i29 + 1;
     HEAP32[(HEAP32[i15 >> 2] | 0) + 608 >> 2] = 0;
    }
    i16 = i17 + 8 | 0;
    L51 : do {
     if ((i16 | 0) == (i12 | 0)) {
      i30 = i12;
     } else {
      i20 = i16;
      while (1) {
       i19 = HEAP32[i20 >> 2] | 0;
       if (!((i19 | 0) == (-1 | 0) | (i19 | 0) == 0)) {
        i30 = i20;
        break L51;
       }
       i19 = i20 + 8 | 0;
       if ((i19 | 0) == (i12 | 0)) {
        i30 = i12;
        break;
       } else {
        i20 = i19;
       }
      }
     }
    } while (0);
    if ((i30 | 0) == ((HEAP32[i8 >> 2] | 0) + (HEAP32[i10 >> 2] << 3) | 0)) {
     i21 = 42;
     break;
    } else {
     i17 = i30;
    }
   }
   if ((i21 | 0) == 42) {
    i16 = HEAP32[i5 >> 2] | 0;
    if ((HEAP32[i7 >> 2] | 0) == 0) {
     i13 = i16;
     break;
    } else {
     i31 = i16;
    }
    while (1) {
     __ZN3WTF7HashMapINS_6StringEN7WebCore20CachedResourceHandleINS2_14CachedResourceEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeERKS1_(i3, i31) | 0;
     i16 = i31 + 4 | 0;
     i32 = HEAP32[i5 >> 2] | 0;
     i33 = HEAP32[i7 >> 2] | 0;
     if ((i16 | 0) == (i32 + (i33 << 2) | 0)) {
      break;
     } else {
      i31 = i16;
     }
    }
    if ((i33 | 0) == 0) {
     i13 = i32;
     break;
    } else {
     i34 = i32;
    }
    while (1) {
     i16 = HEAP32[i34 >> 2] | 0;
     do {
      if ((i16 | 0) != 0) {
       i15 = i16 | 0;
       i18 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
       if ((i18 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i16);
        break;
       } else {
        HEAP32[i15 >> 2] = i18;
        break;
       }
      }
     } while (0);
     if ((i34 | 0) == (i31 | 0)) {
      break;
     } else {
      i34 = i34 + 4 | 0;
     }
    }
    HEAP32[i7 >> 2] = 0;
    i13 = HEAP32[i5 >> 2] | 0;
    break;
   } else if ((i21 | 0) == 26) {
    _WTFCrash();
   } else if ((i21 | 0) == 16) {
    _WTFCrash();
   }
  }
 } while (0);
 if ((i4 | 0) == (i13 | 0) | (i13 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore20CachedResourceLoader10canRequestENS_14CachedResource4TypeERKNS_3URLERKNS_21ResourceLoaderOptionsEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i1 + 44 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   if (__ZNK7WebCore14SecurityOrigin10canDisplayERKNS_3URLE(HEAP32[i9 + 100 >> 2] | 0, i3) | 0) {
    break;
   }
   if (i5) {
    i10 = 0;
    STACKTOP = i6;
    return i10 | 0;
   }
   i11 = HEAP32[i1 + 48 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i12 = 0;
   } else {
    i12 = HEAP32[i11 + 12 >> 2] | 0;
   }
   __ZNK7WebCore3URL30stringCenterEllipsizedToLengthEj(i7, i3, 1024);
   __ZN7WebCore11FrameLoader21reportLocalLoadFailedEPNS_5FrameERKN3WTF6StringE(i12, i7);
   i11 = HEAP32[i7 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i10 = 0;
    STACKTOP = i6;
    return i10 | 0;
   }
   i13 = i11 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    i10 = 0;
    STACKTOP = i6;
    return i10 | 0;
   } else {
    HEAP32[i13 >> 2] = i14;
    i10 = 0;
    STACKTOP = i6;
    return i10 | 0;
   }
  }
 } while (0);
 i7 = i1 + 48 | 0;
 i12 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i15 = 0;
  } else {
   i5 = HEAP32[i12 + 12 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i15 = 0;
    break;
   }
   i15 = __ZN7WebCore16ScriptController42shouldBypassMainWorldContentSecurityPolicyEv(HEAP32[i5 + 460 >> 2] | 0) | 0;
  }
 } while (0);
 L23 : do {
  switch (i2 | 0) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 8:
   {
    if ((HEAP32[i4 + 24 >> 2] | 0) != 1) {
     i16 = 19;
     break L23;
    }
    if (__ZNK7WebCore14SecurityOrigin10canRequestERKNS_3URLE(HEAP32[(HEAP32[i8 >> 2] | 0) + 100 >> 2] | 0, i3) | 0) {
     i16 = 19;
     break L23;
    }
    __ZNK7WebCore20CachedResourceLoader24printAccessDeniedMessageERKNS_3URLE(i1, i3);
    i10 = 0;
    STACKTOP = i6;
    return i10 | 0;
   }
  case 6:
  case 7:
   {
    if (__ZNK7WebCore14SecurityOrigin10canRequestERKNS_3URLE(HEAP32[(HEAP32[i8 >> 2] | 0) + 100 >> 2] | 0, i3) | 0) {
     i16 = 19;
     break L23;
    }
    __ZNK7WebCore20CachedResourceLoader24printAccessDeniedMessageERKNS_3URLE(i1, i3);
    i10 = 0;
    STACKTOP = i6;
    return i10 | 0;
   }
  default:
   {}
  }
 } while (0);
 L31 : do {
  if ((i16 | 0) == 19) {
   L33 : do {
    switch (i2 | 0) {
    case 8:
    case 2:
     {
      if (i15) {
       i16 = 33;
       break L33;
      }
      if (__ZNK7WebCore21ContentSecurityPolicy20allowStyleFromSourceERKNS_3URLENS0_15ReportingStatusE(HEAP32[(HEAP32[i8 >> 2] | 0) + 104 >> 2] | 0, i3, 0) | 0) {
       i16 = 33;
       break L33;
      } else {
       i10 = 0;
      }
      STACKTOP = i6;
      return i10 | 0;
     }
    case 5:
     {
      i16 = 37;
      break;
     }
    case 7:
     {
      if (i15) {
       i16 = 34;
       break L33;
      }
      if (__ZNK7WebCore21ContentSecurityPolicy21allowScriptFromSourceERKNS_3URLENS0_15ReportingStatusE(HEAP32[(HEAP32[i8 >> 2] | 0) + 104 >> 2] | 0, i3, 0) | 0) {
       i16 = 34;
       break L33;
      } else {
       i10 = 0;
      }
      STACKTOP = i6;
      return i10 | 0;
     }
    case 3:
     {
      do {
       if (!i15) {
        if (__ZNK7WebCore21ContentSecurityPolicy21allowScriptFromSourceERKNS_3URLENS0_15ReportingStatusE(HEAP32[(HEAP32[i8 >> 2] | 0) + 104 >> 2] | 0, i3, 0) | 0) {
         break;
        } else {
         i10 = 0;
        }
        STACKTOP = i6;
        return i10 | 0;
       }
      } while (0);
      i1 = HEAP32[i7 >> 2] | 0;
      if ((i1 | 0) == 0) {
       i16 = 33;
       break L33;
      }
      i4 = HEAP32[i1 + 12 >> 2] | 0;
      if ((i4 | 0) == 0) {
       i16 = 33;
       break L33;
      }
      i1 = HEAP32[i4 + 84 >> 2] | 0;
      if (FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 480 >> 2] & 1](i1, (HEAP8[(HEAP32[i4 + 36 >> 2] | 0) + 195 | 0] & 2) != 0, i3) | 0) {
       i16 = 33;
       break L33;
      } else {
       i10 = 0;
      }
      STACKTOP = i6;
      return i10 | 0;
     }
    case 6:
    case 1:
     {
      if (i15) {
       i16 = 33;
       break L33;
      }
      if (__ZNK7WebCore21ContentSecurityPolicy20allowImageFromSourceERKNS_3URLENS0_15ReportingStatusE(HEAP32[(HEAP32[i8 >> 2] | 0) + 104 >> 2] | 0, i3, 0) | 0) {
       i16 = 33;
       break L33;
      } else {
       i10 = 0;
      }
      STACKTOP = i6;
      return i10 | 0;
     }
    case 4:
     {
      if (i15) {
       i16 = 37;
       break L33;
      }
      if (__ZNK7WebCore21ContentSecurityPolicy19allowFontFromSourceERKNS_3URLENS0_15ReportingStatusE(HEAP32[(HEAP32[i8 >> 2] | 0) + 104 >> 2] | 0, i3, 0) | 0) {
       i16 = 37;
       break L33;
      } else {
       i10 = 0;
      }
      STACKTOP = i6;
      return i10 | 0;
     }
    default:
     {
      break L31;
     }
    }
   } while (0);
   if ((i16 | 0) == 33) {
    switch (i2 | 0) {
    case 8:
    case 5:
    case 1:
    case 4:
     {
      i16 = 37;
      break;
     }
    case 3:
    case 7:
    case 6:
    case 2:
     {
      i16 = 34;
      break;
     }
    default:
     {
      break L31;
     }
    }
   }
   if ((i16 | 0) == 37) {
    i4 = HEAP32[i7 >> 2] | 0;
    if ((i4 | 0) == 0) {
     break;
    }
    i1 = HEAP32[i4 + 12 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i4 = __ZNK7WebCore9FrameTree3topEv(i1 + 40 | 0) | 0;
    if (__ZNK7WebCore19MixedContentChecker25canDisplayInsecureContentEPNS_14SecurityOriginERKNS_3URLE(i4 + 112 | 0, HEAP32[(HEAP32[i4 + 456 >> 2] | 0) + 100 >> 2] | 0, i3) | 0) {
     break;
    } else {
     i10 = 0;
    }
    STACKTOP = i6;
    return i10 | 0;
   } else if ((i16 | 0) == 34) {
    i4 = HEAP32[i7 >> 2] | 0;
    if ((i4 | 0) == 0) {
     break;
    }
    i1 = HEAP32[i4 + 12 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    if (__ZNK7WebCore19MixedContentChecker21canRunInsecureContentEPNS_14SecurityOriginERKNS_3URLE(i1 + 112 | 0, HEAP32[(HEAP32[i8 >> 2] | 0) + 100 >> 2] | 0, i3) | 0) {
     break;
    } else {
     i10 = 0;
    }
    STACKTOP = i6;
    return i10 | 0;
   }
  }
 } while (0);
 i10 = 1;
 STACKTOP = i6;
 return i10 | 0;
}
function __ZN7WebCore20CachedResourceLoader14requestPreloadENS_14CachedResource4TypeERNS_21CachedResourceRequestERKN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 48 | 0;
 do {
  if ((i2 - 2 | 0) >>> 0 < 2 >>> 0) {
   i12 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i12 | 0) == 0) {
     i13 = 4;
    } else {
     if ((HEAP32[i12 + 4 >> 2] | 0) == 0) {
      i13 = 4;
      break;
     }
     i14 = i8 | 0;
     HEAP32[i14 >> 2] = i12;
     i15 = i12 | 0;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
     i16 = 1;
     i17 = 0;
     i18 = i14;
    }
   } while (0);
   if ((i13 | 0) == 4) {
    __ZNK7WebCore8Document8encodingEv(i8, HEAP32[i1 + 44 >> 2] | 0);
    i16 = 0;
    i17 = 1;
    i18 = i8 | 0;
   }
   i12 = HEAP32[i18 >> 2] | 0;
   i14 = (i12 | 0) == 0;
   if (!i14) {
    i15 = i12 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   }
   do {
    if (i16) {
     i15 = HEAP32[i18 >> 2] | 0;
     if ((i15 | 0) == 0) {
      break;
     }
     i19 = i15 | 0;
     i20 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i19 >> 2] = i20;
      break;
     }
    }
   } while (0);
   do {
    if (i17) {
     i20 = HEAP32[i18 >> 2] | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     i19 = i20 | 0;
     i15 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i19 >> 2] = i15;
      break;
     }
    }
   } while (0);
   if (i14) {
    i21 = 0;
    i22 = 1;
    break;
   }
   i15 = i12 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   i21 = i12;
   i22 = 0;
  } else {
   i21 = 0;
   i22 = 1;
  }
 } while (0);
 i18 = i3 + 184 | 0;
 i17 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = i21;
 do {
  if ((i17 | 0) != 0) {
   i18 = i17 | 0;
   i16 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i18 >> 2] = i16;
    break;
   }
  }
 } while (0);
 HEAP8[i3 + 220 | 0] = 1;
 __ZN7WebCore20CachedResourceLoader15requestResourceENS_14CachedResource4TypeERNS_21CachedResourceRequestE(i9, i1, i2, i3);
 i3 = i9 | 0;
 i2 = i9 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 L34 : do {
  if ((i9 | 0) != 0) {
   i17 = i1 + 56 | 0;
   i16 = i17 | 0;
   i18 = HEAP32[i16 >> 2] | 0;
   L36 : do {
    if ((i18 | 0) != 0) {
     i8 = HEAP32[i18 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     i13 = HEAP32[i18 + 8 >> 2] | 0;
     i4 = i9;
     i15 = i4 + ~(i4 << 15) | 0;
     i4 = (i15 >>> 10 ^ i15) * 9 & -1;
     i15 = i4 >>> 6 ^ i4;
     i4 = i15 + ~(i15 << 11) | 0;
     i15 = i4 >>> 16 ^ i4;
     i4 = (i15 >>> 23) + ~i15 | 0;
     i19 = i4 << 12 ^ i4;
     i4 = i19 >>> 7 ^ i19;
     i19 = i4 << 2 ^ i4;
     i4 = i19 >>> 20 ^ i19 | 1;
     i19 = i15;
     i15 = 0;
     while (1) {
      i20 = i19 & i13;
      i23 = i8 + (i20 << 2) | 0;
      i24 = HEAP32[i23 >> 2] | 0;
      i25 = i24;
      if ((i25 | 0) == 0) {
       break L36;
      } else if ((i25 | 0) != (-1 | 0)) {
       if ((HEAP32[i24 >> 2] | 0) == (i9 | 0)) {
        break;
       }
      }
      i24 = (i15 | 0) == 0 ? i4 : i15;
      i19 = i24 + i20 | 0;
      i15 = i24;
     }
     if ((i23 | 0) != 0) {
      break L34;
     }
    }
   } while (0);
   i18 = i9 + 584 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   i18 = HEAP32[i16 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i12 = __ZN3WTF10fastMallocEj(32) | 0;
    _memset(i12 | 0, 0, 28) | 0;
    i14 = __Znwj(3080) | 0;
    i15 = i14 + 8 | 0;
    HEAP32[i14 >> 2] = i15;
    HEAP8[i14 + 4 | 0] = 0;
    _memset(i15 | 0, 0, 3072) | 0;
    HEAP32[i12 + 28 >> 2] = i14;
    HEAP32[i10 >> 2] = i12;
    __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore14CachedResourceELj256ENS_7PtrHashIS4_EEEEEaSERKNS_10PassOwnPtrIS7_EE(i17, i10) | 0;
    __ZN3WTF10PassOwnPtrINS_11ListHashSetIPN7WebCore14CachedResourceELj256ENS_7PtrHashIS4_EEEEED2Ev(i10);
    i26 = HEAP32[i16 >> 2] | 0;
   } else {
    i26 = i18;
   }
   HEAP32[i11 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i7 >> 2] = HEAP32[i26 + 28 >> 2];
   __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore14CachedResourceELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EES4_PNS_24ListHashSetNodeAllocatorIS4_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_(i6, i26 | 0, i11, i7);
   if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
    break;
   }
   i18 = HEAP32[HEAP32[i6 >> 2] >> 2] | 0;
   i12 = i26 + 24 | 0;
   HEAP32[i18 + 4 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i18 + 8 >> 2] = 0;
   i14 = HEAP32[i12 >> 2] | 0;
   if ((i14 | 0) == 0) {
    HEAP32[i26 + 20 >> 2] = i18;
   } else {
    HEAP32[i14 + 8 >> 2] = i18;
   }
   HEAP32[i12 >> 2] = i18;
  }
 } while (0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i3);
 if (i22) {
  STACKTOP = i5;
  return;
 }
 i22 = i21 | 0;
 i3 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i21);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i22 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 + 8 | 0;
 i9 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i10 = i2 | 0;
 i11 = _strlen(HEAP32[i10 >> 2] | 0) | 0;
 i12 = i2 + 4 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = (i13 | 0) == 0;
 if (i14) {
  i15 = 0;
 } else {
  i15 = HEAP32[i13 + 4 >> 2] | 0;
 }
 i16 = i2 + 12 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = (i17 | 0) == 0;
 if (i18) {
  i19 = 0;
 } else {
  i19 = HEAP32[i17 + 4 >> 2] | 0;
 }
 i20 = _llvm_uadd_with_overflow_i32(i11 + i9 + i15 + i19 | 0, i7 | 0) | 0;
 i19 = i20;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i14) {
  i21 = 9;
 } else {
  if ((HEAP32[i13 + 16 >> 2] & 32 | 0) != 0) {
   i21 = 9;
  }
 }
 do {
  if ((i21 | 0) == 9) {
   if (!i18) {
    if ((HEAP32[i17 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i19 | 0) == 0) {
     i13 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i13 | 0) == 0) {
      i21 = 28;
      break;
     }
     i14 = i13 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
     i22 = i13;
     i23 = 0;
    } else {
     if (i19 >>> 0 > 4294967275 >>> 0) {
      i21 = 28;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i19 + 20 | 0);
     i13 = i6 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i14 | 0) == 0) {
      i21 = 28;
      break;
     }
     i13 = i14 + 20 | 0;
     HEAP32[i14 >> 2] = 2;
     HEAP32[i14 + 4 >> 2] = i19;
     HEAP32[i14 + 8 >> 2] = i13;
     HEAP32[i14 + 12 >> 2] = 0;
     HEAP32[i14 + 16 >> 2] = 32;
     i22 = i14;
     i23 = i13;
    }
   } while (0);
   if ((i21 | 0) == 28) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   __ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPh(i2 | 0, i23);
   i13 = HEAP32[i8 >> 2] | 0;
   i14 = _strlen(i13 | 0) | 0;
   i20 = HEAP32[i10 >> 2] | 0;
   i15 = _strlen(i20 | 0) | 0;
   i9 = HEAP32[i12 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i24 = 0;
   } else {
    i24 = HEAP32[i9 + 4 >> 2] | 0;
   }
   i11 = i15 + i14 + i24 | 0;
   i14 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i14 | 0) == 0) {
     i25 = i13;
     i26 = i20;
     i27 = i9;
    } else {
     i15 = HEAP32[i14 + 4 >> 2] | 0;
     i28 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i15 | 0) == 0) {
      i25 = i13;
      i26 = i20;
      i27 = i9;
      break;
     } else {
      i29 = 0;
     }
     while (1) {
      HEAP8[i23 + (i11 + i29) | 0] = HEAP8[i28 + i29 | 0] | 0;
      i29 = i29 + 1 | 0;
      if (i29 >>> 0 >= i15 >>> 0) {
       break;
      }
     }
     i25 = HEAP32[i8 >> 2] | 0;
     i26 = HEAP32[i10 >> 2] | 0;
     i27 = HEAP32[i12 >> 2] | 0;
    }
   } while (0);
   i11 = _strlen(i25 | 0) | 0;
   i9 = _strlen(i26 | 0) | 0;
   if ((i27 | 0) == 0) {
    i30 = 0;
   } else {
    i30 = HEAP32[i27 + 4 >> 2] | 0;
   }
   i20 = HEAP32[i16 >> 2] | 0;
   if ((i20 | 0) == 0) {
    i31 = 0;
   } else {
    i31 = HEAP32[i20 + 4 >> 2] | 0;
   }
   _memcpy(i23 + (i9 + i11 + i30 + i31) | 0, i3 | 0, i7) | 0;
   HEAP32[i1 >> 2] = i22;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i19 | 0) == 0) {
   i22 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i22 | 0) == 0) {
    i21 = 42;
    break;
   }
   i31 = i22 | 0;
   HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 2;
   i32 = i22;
   i33 = 0;
  } else {
   if (i19 >>> 0 > 2147483637 >>> 0) {
    i21 = 42;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i19 << 1) + 20 | 0);
   i22 = i5 | 0;
   i31 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = 0;
   if ((i31 | 0) == 0) {
    i21 = 42;
    break;
   }
   i22 = i31 + 20 | 0;
   HEAP32[i31 >> 2] = 2;
   HEAP32[i31 + 4 >> 2] = i19;
   HEAP32[i31 + 8 >> 2] = i22;
   HEAP32[i31 + 12 >> 2] = 0;
   HEAP32[i31 + 16 >> 2] = 0;
   i32 = i31;
   i33 = i22;
  }
 } while (0);
 if ((i21 | 0) == 42) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN3WTF12StringAppendINS0_INS0_IPKcNS_6StringEEES2_EES3_E7writeToEPt(i2, i33);
 i2 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i8 = _strlen(HEAP32[i10 >> 2] | 0) | 0;
 i10 = HEAP32[i12 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i34 = 0;
 } else {
  i34 = HEAP32[i10 + 4 >> 2] | 0;
 }
 i10 = HEAP32[i16 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i35 = 0;
 } else {
  i35 = HEAP32[i10 + 4 >> 2] | 0;
 }
 i10 = i8 + i2 + i34 + i35 | 0;
 if ((i7 | 0) != 0) {
  i35 = 0;
  while (1) {
   HEAP16[i33 + (i10 + i35 << 1) >> 1] = HEAPU8[i3 + i35 | 0] | 0;
   i35 = i35 + 1 | 0;
   if (i35 >>> 0 >= i7 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i1 >> 2] = i32;
 STACKTOP = i4;
 return;
}
function __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEEcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i8 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
 i9 = i2 + 4 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i10 = (i2 | 0) == 0;
 if (i10) {
  i11 = 0;
 } else {
  i11 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i12 = _llvm_uadd_with_overflow_i32(i11 + i8 | 0, 1) | 0;
 i8 = i12;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (!i10) {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   do {
    if ((i8 | 0) == 0) {
     i12 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i12 | 0) == 0) {
      i13 = 40;
      break;
     }
     i11 = i12 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
     i14 = i12;
     i15 = 0;
    } else {
     if (i8 >>> 0 > 2147483637 >>> 0) {
      i13 = 40;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i8 << 1) + 20 | 0);
     i12 = i5 | 0;
     i11 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = 0;
     if ((i11 | 0) == 0) {
      i13 = 40;
      break;
     }
     i12 = i11 + 20 | 0;
     HEAP32[i11 >> 2] = 2;
     HEAP32[i11 + 4 >> 2] = i8;
     HEAP32[i11 + 8 >> 2] = i12;
     HEAP32[i11 + 12 >> 2] = 0;
     HEAP32[i11 + 16 >> 2] = 0;
     i14 = i11;
     i15 = i12;
    }
   } while (0);
   if ((i13 | 0) == 40) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i12 = HEAP32[i7 >> 2] | 0;
   i11 = _strlen(i12 | 0) | 0;
   if ((i11 | 0) != 0) {
    i16 = 0;
    while (1) {
     HEAP16[i15 + (i16 << 1) >> 1] = HEAPU8[i12 + i16 | 0] | 0;
     i16 = i16 + 1 | 0;
     if (i16 >>> 0 >= i11 >>> 0) {
      break;
     }
    }
   }
   i16 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i16 | 0) == 0) {
     i17 = 0;
     i18 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
    } else {
     i12 = HEAP32[i16 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i16 + 16 >> 2] & 32 | 0) == 0) {
       i19 = HEAP32[i16 + 8 >> 2] | 0;
       if ((i12 | 0) == 0) {
        break;
       } else {
        i20 = 0;
       }
       while (1) {
        HEAP16[i15 + (i20 + i11 << 1) >> 1] = HEAP16[i19 + (i20 << 1) >> 1] | 0;
        i20 = i20 + 1 | 0;
        if (i20 >>> 0 >= i12 >>> 0) {
         break;
        }
       }
      } else {
       i19 = HEAP32[i16 + 8 >> 2] | 0;
       if ((i12 | 0) == 0) {
        break;
       } else {
        i21 = 0;
       }
       while (1) {
        HEAP16[i15 + (i21 + i11 << 1) >> 1] = HEAPU8[i19 + i21 | 0] | 0;
        i21 = i21 + 1 | 0;
        if (i21 >>> 0 >= i12 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i12 = HEAP32[i9 >> 2] | 0;
     i19 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
     if ((i12 | 0) == 0) {
      i17 = 0;
      i18 = i19;
      break;
     }
     i17 = HEAP32[i12 + 4 >> 2] | 0;
     i18 = i19;
    }
   } while (0);
   HEAP16[i15 + (i17 + i18 << 1) >> 1] = i3 & 255;
   HEAP32[i1 >> 2] = i14;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i8 | 0) == 0) {
   i14 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i14 | 0) == 0) {
    i13 = 21;
    break;
   }
   i18 = i14 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
   i22 = i14;
   i23 = 0;
  } else {
   if (i8 >>> 0 > 4294967275 >>> 0) {
    i13 = 21;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i8 + 20 | 0);
   i14 = i6 | 0;
   i18 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   if ((i18 | 0) == 0) {
    i13 = 21;
    break;
   }
   i14 = i18 + 20 | 0;
   HEAP32[i18 >> 2] = 2;
   HEAP32[i18 + 4 >> 2] = i8;
   HEAP32[i18 + 8 >> 2] = i14;
   HEAP32[i18 + 12 >> 2] = 0;
   HEAP32[i18 + 16 >> 2] = 32;
   i22 = i18;
   i23 = i14;
  }
 } while (0);
 if ((i13 | 0) == 21) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i13 = HEAP32[i7 >> 2] | 0;
 i8 = _strlen(i13 | 0) | 0;
 _memcpy(i23 | 0, i13 | 0, i8) | 0;
 i13 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i13 | 0) == 0) {
   i24 = 0;
   i25 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
  } else {
   i6 = HEAP32[i13 + 4 >> 2] | 0;
   i14 = HEAP32[i13 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i26 = i13;
    i27 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
   } else {
    i18 = 0;
    while (1) {
     HEAP8[i23 + (i18 + i8) | 0] = HEAP8[i14 + i18 | 0] | 0;
     i18 = i18 + 1 | 0;
     if (i18 >>> 0 >= i6 >>> 0) {
      break;
     }
    }
    i6 = HEAP32[i9 >> 2] | 0;
    i18 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
    if ((i6 | 0) == 0) {
     i24 = 0;
     i25 = i18;
     break;
    } else {
     i26 = i6;
     i27 = i18;
    }
   }
   i24 = HEAP32[i26 + 4 >> 2] | 0;
   i25 = i27;
  }
 } while (0);
 HEAP8[i23 + (i24 + i25) | 0] = i3;
 HEAP32[i1 >> 2] = i22;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore20CachedResourceLoader27determineRevalidationPolicyENS_14CachedResource4TypeERNS_15ResourceRequestEbPS1_NS_21CachedResourceRequest11DeferOptionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 if ((i5 | 0) == 0) {
  i7 = 3;
  return i7 | 0;
 }
 do {
  if (i4) {
   if ((HEAP32[i5 + 584 >> 2] | 0) == 0) {
    break;
   } else {
    i7 = 0;
   }
   return i7 | 0;
  }
 } while (0);
 i4 = i5 + 588 | 0;
 if (((HEAP32[i4 >> 2] | 0) >>> 7 & 15 | 0) != (i2 | 0)) {
  i7 = 2;
  return i7 | 0;
 }
 if ((i6 | 0) == 1 | (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 84 >> 2] & 1](i5, i3) | 0) ^ 1) {
  i7 = 2;
  return i7 | 0;
 }
 if ((HEAP8[i1 + 136 | 0] & 4) != 0) {
  i7 = 0;
  return i7 | 0;
 }
 if ((HEAP32[i5 + 584 >> 2] | 0) != 0) {
  i7 = 0;
  return i7 | 0;
 }
 i6 = i1 + 48 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = HEAP32[i8 + 12 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = i9 + 80 | 0;
   if ((i2 | 0) != 0) {
    if ((__ZNK7WebCore11FrameLoader22subresourceCachePolicyEv(i10) | 0) == 4) {
     i7 = 0;
    } else {
     break;
    }
    return i7 | 0;
   }
   if ((__ZNK7WebCore11FrameLoader8loadTypeEv(i10) | 0) == 9) {
    break;
   }
   i10 = HEAP32[i6 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i11 = 0;
   } else {
    i11 = HEAP32[i10 + 12 >> 2] | 0;
   }
   __ZNK7WebCore11FrameLoader8loadTypeEv(i11 + 80 | 0) | 0;
  }
 } while (0);
 if (__ZNK7WebCore20ResourceResponseBase27cacheControlContainsNoStoreEv(i5 + 272 | 0) | 0) {
  i7 = 2;
  return i7 | 0;
 }
 i11 = i5 + 48 | 0;
 i8 = __ZNK7WebCore19ResourceRequestBase12allowCookiesEv(i11) | 0;
 if (i8 ^ (__ZNK7WebCore19ResourceRequestBase12allowCookiesEv(i3 | 0) | 0)) {
  i7 = 2;
  return i7 | 0;
 }
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 L38 : do {
  if ((i3 | 0) != 0) {
   if ((HEAP8[i3 + 1245 | 0] & 1) != 0) {
    break;
   }
   i8 = __ZNK7WebCore19ResourceRequestBase3urlEv(i11) | 0;
   i10 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i9 = HEAP32[i1 + 12 >> 2] | 0;
   i12 = i8 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   i13 = HEAP32[i8 + 16 >> 2] | 0;
   if (i13 >>> 0 > 127 >>> 0) {
    i14 = i13 >>> 7;
   } else {
    i14 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i8) | 0;
   }
   i8 = (i14 >>> 23) + ~i14 | 0;
   i13 = i8 << 12 ^ i8;
   i8 = i13 >>> 7 ^ i13;
   i13 = i8 << 2 ^ i8;
   i8 = i13 >>> 20 ^ i13 | 1;
   i13 = i14;
   i15 = 0;
   while (1) {
    i16 = i13 & i9;
    i17 = i10 + (i16 << 2) | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    i19 = i18;
    if ((i19 | 0) == 0) {
     break L38;
    } else if ((i19 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i18, HEAP32[i12 >> 2] | 0) | 0) {
      break;
     }
    }
    i18 = (i15 | 0) == 0 ? i8 : i15;
    i13 = i18 + i16 | 0;
    i15 = i18;
   }
   if ((i17 | 0) == 0) {
    break;
   } else {
    i7 = 0;
   }
   return i7 | 0;
  }
 } while (0);
 i17 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i14 = HEAP32[i17 + 12 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i1 = i14 + 80 | 0;
   if ((i2 | 0) == 0) {
    if ((__ZNK7WebCore11FrameLoader8loadTypeEv(i1) | 0) == 9) {
     i7 = 2;
     return i7 | 0;
    }
    i14 = HEAP32[i6 >> 2] | 0;
    if ((i14 | 0) == 0) {
     i20 = 0;
    } else {
     i20 = HEAP32[i14 + 12 >> 2] | 0;
    }
    i14 = (__ZNK7WebCore11FrameLoader8loadTypeEv(i20 + 80 | 0) | 0) == 4;
    i21 = i14 ? 3 : 1;
   } else {
    i21 = __ZNK7WebCore11FrameLoader22subresourceCachePolicyEv(i1) | 0;
   }
   if ((i21 | 0) == 3) {
    i7 = 2;
   } else {
    break;
   }
   return i7 | 0;
  }
 } while (0);
 i21 = HEAP32[i4 >> 2] | 0;
 if (((i21 >>> 11 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
  i7 = 2;
  return i7 | 0;
 }
 if ((i21 & 32 | 0) != 0) {
  i7 = 0;
  return i7 | 0;
 }
 i21 = HEAP32[(HEAP32[i5 >> 2] | 0) + 72 >> 2] | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i22 = 1;
  } else {
   i20 = HEAP32[i4 + 12 >> 2] | 0;
   if ((i20 | 0) == 0) {
    i22 = 1;
    break;
   }
   i17 = i20 + 80 | 0;
   if ((i2 | 0) != 0) {
    i22 = __ZNK7WebCore11FrameLoader22subresourceCachePolicyEv(i17) | 0;
    break;
   }
   if ((__ZNK7WebCore11FrameLoader8loadTypeEv(i17) | 0) == 9) {
    i22 = 3;
    break;
   }
   i17 = HEAP32[i6 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i23 = 0;
   } else {
    i23 = HEAP32[i17 + 12 >> 2] | 0;
   }
   i17 = (__ZNK7WebCore11FrameLoader8loadTypeEv(i23 + 80 | 0) | 0) == 4;
   i22 = i17 ? 3 : 1;
  }
 } while (0);
 if (!(FUNCTION_TABLE_iii[i21 & 1](i5, i22) | 0)) {
  i7 = 0;
  return i7 | 0;
 }
 i22 = __ZNK7WebCore14CachedResource20canUseCacheValidatorEv(i5) | 0;
 i7 = i22 ? 1 : 2;
 return i7 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore20CachedResourceHandleINS3_14CachedResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 i6 = i1 + 8 | 0;
 HEAP32[i6 >> 2] = i2 - 1;
 i10 = __ZN3WTF10fastMallocEj(i2 << 3) | 0;
 if ((i2 | 0) > 0) {
  i11 = i5 | 0;
  i12 = i5 + 4 | 0;
  i13 = 0;
  while (1) {
   __ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsINS_6StringEEENS1_IN7WebCore20CachedResourceHandleINS4_14CachedResourceEEEEEE10emptyValueEv(i5);
   i14 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i10 + (i13 << 3) >> 2] = i14;
   __ZN7WebCore24CachedResourceHandleBaseC2ERKS0_(i10 + (i13 << 3) + 4 | 0, i12);
   __ZN7WebCore24CachedResourceHandleBaseD2Ev(i12);
   i14 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i15 = i14 | 0;
     i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i15 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i13 = i13 + 1 | 0;
   if ((i13 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i8 >> 2] = i10;
 if ((i7 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i17 = 0;
  i18 = i9;
  __ZN3WTF8fastFreeEPv(i18);
  STACKTOP = i4;
  return i17 | 0;
 } else {
  i19 = 0;
  i20 = 0;
 }
 while (1) {
  i10 = i9 + (i19 << 3) | 0;
  i2 = i10 | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i11 = i13;
  if ((i11 | 0) == (-1 | 0) | (i11 | 0) == 0) {
   i21 = i20;
  } else {
   i11 = HEAP32[i8 >> 2] | 0;
   i12 = HEAP32[i6 >> 2] | 0;
   i5 = HEAP32[i13 + 16 >> 2] | 0;
   if (i5 >>> 0 > 127 >>> 0) {
    i22 = i5 >>> 7;
   } else {
    i22 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   i13 = (i22 >>> 23) + ~i22 | 0;
   i5 = i13 << 12 ^ i13;
   i13 = i5 >>> 7 ^ i5;
   i5 = i13 << 2 ^ i13;
   i13 = i5 >>> 20 ^ i5 | 1;
   i5 = i22;
   i14 = 0;
   i16 = 0;
   while (1) {
    i15 = i5 & i12;
    i23 = i11 + (i15 << 3) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    i25 = i24;
    if ((i25 | 0) == 0) {
     i26 = 16;
     break;
    } else if ((i25 | 0) == (-1 | 0)) {
     i27 = i23;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i24, HEAP32[i2 >> 2] | 0) | 0) {
      i28 = i23;
      break;
     } else {
      i27 = i16;
     }
    }
    i24 = (i14 | 0) == 0 ? i13 : i14;
    i5 = i24 + i15 | 0;
    i14 = i24;
    i16 = i27;
   }
   if ((i26 | 0) == 16) {
    i26 = 0;
    i28 = (i16 | 0) != 0 ? i16 : i23;
   }
   i14 = i28 + 4 | 0;
   __ZN7WebCore24CachedResourceHandleBaseD2Ev(i14);
   i5 = i28 | 0;
   i13 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i11 = i13 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i13 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i5 >> 2] = i13;
   __ZN7WebCore24CachedResourceHandleBaseC2ERKS0_(i14, i9 + (i19 << 3) + 4 | 0);
   i21 = (i10 | 0) == (i3 | 0) ? i28 : i20;
  }
  i13 = i19 + 1 | 0;
  if ((i13 | 0) == (i7 | 0)) {
   break;
  } else {
   i19 = i13;
   i20 = i21;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i7 | 0) > 0) {
  i29 = 0;
 } else {
  i17 = i21;
  i18 = i9;
  __ZN3WTF8fastFreeEPv(i18);
  STACKTOP = i4;
  return i17 | 0;
 }
 while (1) {
  i1 = i9 + (i29 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    __ZN7WebCore24CachedResourceHandleBaseD2Ev(i9 + (i29 << 3) + 4 | 0);
    i20 = HEAP32[i1 >> 2] | 0;
    if ((i20 | 0) == 0) {
     break;
    }
    i19 = i20 | 0;
    i28 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
    if ((i28 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i20);
     break;
    } else {
     HEAP32[i19 >> 2] = i28;
     break;
    }
   }
  } while (0);
  i1 = i29 + 1 | 0;
  if ((i1 | 0) < (i7 | 0)) {
   i29 = i1;
  } else {
   i17 = i21;
   break;
  }
 }
 i18 = i9;
 __ZN3WTF8fastFreeEPv(i18);
 STACKTOP = i4;
 return i17 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore20CachedResourceHandleINS3_14CachedResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore20CachedResourceHandleINS3_14CachedResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = HEAP32[i3 + 16 >> 2] | 0;
 if (i11 >>> 0 > 127 >>> 0) {
  i13 = i11 >>> 7;
 } else {
  i13 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i13 >>> 23) + ~i13 | 0;
 i11 = i3 << 12 ^ i3;
 i3 = i11 >>> 7 ^ i11;
 i11 = i3 << 2 ^ i3;
 i3 = i11 >>> 20 ^ i11 | 1;
 i11 = 0;
 i9 = i13;
 i13 = 0;
 while (1) {
  i14 = i9 & i8;
  i15 = i12 + (i14 << 3) | 0;
  i16 = HEAP32[i15 >> 2] | 0;
  i17 = i16;
  if ((i17 | 0) == (-1 | 0)) {
   i18 = i15;
  } else if ((i17 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i16, HEAP32[i10 >> 2] | 0) | 0) {
    i19 = 11;
    break;
   } else {
    i18 = i11;
   }
  }
  i16 = (i13 | 0) == 0 ? i3 : i13;
  i11 = i18;
  i9 = i16 + i14 | 0;
  i13 = i16;
 }
 if ((i19 | 0) == 11) {
  i19 = (HEAP32[i7 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i13 = i1;
  HEAP32[i13 >> 2] = i15;
  HEAP32[i13 + 4 >> 2] = i19;
  HEAP8[i1 + 8 | 0] = 0;
  STACKTOP = i5;
  return;
 }
 if ((i11 | 0) == 0) {
  i20 = i15;
 } else {
  __ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsINS_6StringEEENS1_IN7WebCore20CachedResourceHandleINS4_14CachedResourceEEEEEE10emptyValueEv(i6);
  i15 = i6 | 0;
  i19 = HEAP32[i15 >> 2] | 0;
  HEAP32[i15 >> 2] = 0;
  HEAP32[i11 >> 2] = i19;
  i19 = i6 + 4 | 0;
  __ZN7WebCore24CachedResourceHandleBaseC2ERKS0_(i11 + 4 | 0, i19);
  __ZN7WebCore24CachedResourceHandleBaseD2Ev(i19);
  i19 = HEAP32[i15 >> 2] | 0;
  do {
   if ((i19 | 0) != 0) {
    i15 = i19 | 0;
    i6 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i19);
     break;
    } else {
     HEAP32[i15 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i19 = i2 + 16 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
  i20 = i11;
 }
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) != 0) {
  i10 = i11 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = i20 | 0;
 i19 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i11;
 do {
  if ((i19 | 0) != 0) {
   i11 = i19 | 0;
   i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i11 >> 2] = i10;
    break;
   }
  }
 } while (0);
 __ZN7WebCore24CachedResourceHandleBase11setResourceEPNS_14CachedResourceE(i20 + 4 | 0, HEAP32[i4 >> 2] | 0);
 i4 = i2 + 12 | 0;
 i19 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i19;
 i4 = i2 + 4 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i19 << 1 | 0) < (i10 | 0)) {
  i21 = i20;
  i22 = i10;
 } else {
  if ((i10 | 0) == 0) {
   i23 = 8;
  } else {
   i11 = i10 << 1;
   i23 = (i19 * 6 & -1 | 0) < (i11 | 0) ? i10 : i11;
  }
  i11 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore20CachedResourceHandleINS3_14CachedResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i23, i20) | 0;
  i21 = i11;
  i22 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i7 >> 2] | 0) + (i22 << 3) | 0;
 i22 = i1;
 HEAP32[i22 >> 2] = i21;
 HEAP32[i22 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN3WTF5DequeIN7WebCore20CachedResourceLoader14PendingPreloadELj0EE14expandCapacityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + 1 + (i3 >>> 2) | 0;
 i7 = i6 >>> 0 > 16 >>> 0 ? i6 : 16;
 if (i7 >>> 0 > 16777215 >>> 0) {
  _WTFCrash();
 }
 i6 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 8) | 0;
 HEAP32[i2 >> 2] = i6 >>> 8;
 i7 = __ZN3WTF10fastMallocEj(i6) | 0;
 HEAP32[i4 >> 2] = i7;
 i6 = i1 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i5 + (i9 << 8) | 0;
 do {
  if (i8 >>> 0 > i9 >>> 0) {
   if ((i9 | 0) == 0) {
    i10 = i8;
   } else {
    i11 = i5;
    i12 = i7;
    while (1) {
     HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
     i13 = i11 + 8 | 0;
     __ZN7WebCore21CachedResourceRequestC1ERKS0_(i12 + 8 | 0, i13);
     i14 = i11 + 248 | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     HEAP32[i12 + 248 >> 2] = i15;
     if ((i15 | 0) != 0) {
      i16 = i15 | 0;
      HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
     }
     i16 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i16 | 0) != 0) {
       i14 = i16 | 0;
       i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
       if ((i15 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i16);
        break;
       } else {
        HEAP32[i14 >> 2] = i15;
        break;
       }
      }
     } while (0);
     __ZN7WebCore21CachedResourceRequestD1Ev(i13);
     i16 = i11 + 256 | 0;
     if ((i16 | 0) == (i1 | 0)) {
      break;
     } else {
      i11 = i16;
      i12 = i12 + 256 | 0;
     }
    }
    i10 = HEAP32[i6 >> 2] | 0;
   }
   i12 = i10 - i3 + (HEAP32[i2 >> 2] | 0) | 0;
   i11 = i5 + (i3 << 8) | 0;
   if ((i10 | 0) != (i3 | 0)) {
    i16 = i5 + (i10 << 8) | 0;
    i15 = (HEAP32[i4 >> 2] | 0) + (i12 << 8) | 0;
    while (1) {
     HEAP32[i15 >> 2] = HEAP32[i16 >> 2];
     i14 = i16 + 8 | 0;
     __ZN7WebCore21CachedResourceRequestC1ERKS0_(i15 + 8 | 0, i14);
     i17 = i16 + 248 | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     HEAP32[i15 + 248 >> 2] = i18;
     if ((i18 | 0) != 0) {
      i19 = i18 | 0;
      HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
     }
     i19 = HEAP32[i17 >> 2] | 0;
     do {
      if ((i19 | 0) != 0) {
       i17 = i19 | 0;
       i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
       if ((i18 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i19);
        break;
       } else {
        HEAP32[i17 >> 2] = i18;
        break;
       }
      }
     } while (0);
     __ZN7WebCore21CachedResourceRequestD1Ev(i14);
     i19 = i16 + 256 | 0;
     if ((i19 | 0) == (i11 | 0)) {
      break;
     } else {
      i16 = i19;
      i15 = i15 + 256 | 0;
     }
    }
   }
   HEAP32[i6 >> 2] = i12;
  } else {
   if ((i8 | 0) == (i9 | 0)) {
    break;
   }
   i15 = i5 + (i8 << 8) | 0;
   i16 = i7 + (i8 << 8) | 0;
   while (1) {
    HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
    i11 = i15 + 8 | 0;
    __ZN7WebCore21CachedResourceRequestC1ERKS0_(i16 + 8 | 0, i11);
    i19 = i15 + 248 | 0;
    i13 = HEAP32[i19 >> 2] | 0;
    HEAP32[i16 + 248 >> 2] = i13;
    if ((i13 | 0) != 0) {
     i18 = i13 | 0;
     HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
    }
    i18 = HEAP32[i19 >> 2] | 0;
    do {
     if ((i18 | 0) != 0) {
      i19 = i18 | 0;
      i13 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
      if ((i13 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i18);
       break;
      } else {
       HEAP32[i19 >> 2] = i13;
       break;
      }
     }
    } while (0);
    __ZN7WebCore21CachedResourceRequestD1Ev(i11);
    i18 = i15 + 256 | 0;
    if ((i18 | 0) == (i1 | 0)) {
     break;
    } else {
     i15 = i18;
     i16 = i16 + 256 | 0;
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
function __ZN7WebCore20CachedResourceLoaderD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 HEAP32[i1 + 48 >> 2] = 0;
 HEAP32[i1 + 44 >> 2] = 0;
 i2 = i1 + 56 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i3 + 20 >> 2] | 0;
  if ((i4 | 0) != 0) {
   i3 = i4;
   while (1) {
    i4 = HEAP32[i3 >> 2] | 0;
    i5 = i4 + 584 | 0;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - 1;
    do {
     if (!(__ZN7WebCore14CachedResource16deleteIfPossibleEv(i4) | 0)) {
      if ((HEAP32[i4 + 588 >> 2] & 3 | 0) != 0) {
       break;
      }
      __ZN7WebCore11MemoryCache5evictEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i4);
     }
    } while (0);
    i3 = HEAP32[i3 + 8 >> 2] | 0;
    if ((i3 | 0) == 0) {
     break;
    }
   }
  }
  __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore14CachedResourceELj256ENS_7PtrHashIS4_EEEEE5clearEv(i2);
 }
 i3 = i1 + 24 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 28 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i4 + (i6 << 3) | 0;
 L12 : do {
  if ((HEAP32[i1 + 36 >> 2] | 0) != 0) {
   L14 : do {
    if ((i6 | 0) == 0) {
     i8 = i4;
    } else {
     i9 = i4;
     while (1) {
      i10 = HEAP32[i9 >> 2] | 0;
      if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
       i8 = i9;
       break L14;
      }
      i9 = i9 + 8 | 0;
      if ((i9 | 0) == (i7 | 0)) {
       break L12;
      }
     }
    }
   } while (0);
   if ((i8 | 0) == (i7 | 0)) {
    break;
   } else {
    i11 = i8;
   }
   while (1) {
    HEAP32[(HEAP32[i11 + 4 >> 2] | 0) + 608 >> 2] = 0;
    i9 = i11 + 8 | 0;
    if ((i9 | 0) == (i7 | 0)) {
     break L12;
    } else {
     i12 = i9;
    }
    while (1) {
     i9 = HEAP32[i12 >> 2] | 0;
     if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
      break;
     }
     i9 = i12 + 8 | 0;
     if ((i9 | 0) == (i7 | 0)) {
      break L12;
     } else {
      i12 = i9;
     }
    }
    if ((i12 | 0) == (i7 | 0)) {
     break;
    } else {
     i11 = i12;
    }
   }
  }
 } while (0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 80 | 0);
 __ZN3WTF5DequeIN7WebCore20CachedResourceLoader14PendingPreloadELj0EE10destroyAllEv(i1 + 60 | 0);
 i12 = i1 + 68 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 if ((i11 | 0) != 0) {
  HEAP32[i12 >> 2] = 0;
  HEAP32[i1 + 72 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i11);
 }
 __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore14CachedResourceELj256ENS_7PtrHashIS4_EEEEED2Ev(i2);
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i5 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i5 = 0;
   while (1) {
    i11 = i2 + (i5 << 3) | 0;
    do {
     if ((HEAP32[i11 >> 2] | 0) != -1) {
      __ZN7WebCore24CachedResourceHandleBaseD2Ev(i2 + (i5 << 3) + 4 | 0);
      i12 = HEAP32[i11 >> 2] | 0;
      if ((i12 | 0) == 0) {
       break;
      }
      i7 = i12 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i12);
       break;
      } else {
       HEAP32[i7 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i1 = 0;
  while (1) {
   i5 = HEAP32[i2 + (i1 << 2) >> 2] | 0;
   i11 = i5;
   do {
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     i8 = i5 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i8 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore20CachedResourceLoaderD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 HEAP32[i1 + 48 >> 2] = 0;
 HEAP32[i1 + 44 >> 2] = 0;
 i2 = i1 + 56 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i3 + 20 >> 2] | 0;
  if ((i4 | 0) != 0) {
   i3 = i4;
   while (1) {
    i4 = HEAP32[i3 >> 2] | 0;
    i5 = i4 + 584 | 0;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - 1;
    do {
     if (!(__ZN7WebCore14CachedResource16deleteIfPossibleEv(i4) | 0)) {
      if ((HEAP32[i4 + 588 >> 2] & 3 | 0) != 0) {
       break;
      }
      __ZN7WebCore11MemoryCache5evictEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i4);
     }
    } while (0);
    i3 = HEAP32[i3 + 8 >> 2] | 0;
    if ((i3 | 0) == 0) {
     break;
    }
   }
  }
  __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore14CachedResourceELj256ENS_7PtrHashIS4_EEEEE5clearEv(i2);
 }
 i3 = i1 + 24 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 28 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i4 + (i6 << 3) | 0;
 L12 : do {
  if ((HEAP32[i1 + 36 >> 2] | 0) != 0) {
   L14 : do {
    if ((i6 | 0) == 0) {
     i8 = i4;
    } else {
     i9 = i4;
     while (1) {
      i10 = HEAP32[i9 >> 2] | 0;
      if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
       i8 = i9;
       break L14;
      }
      i9 = i9 + 8 | 0;
      if ((i9 | 0) == (i7 | 0)) {
       break L12;
      }
     }
    }
   } while (0);
   if ((i8 | 0) == (i7 | 0)) {
    break;
   } else {
    i11 = i8;
   }
   while (1) {
    HEAP32[(HEAP32[i11 + 4 >> 2] | 0) + 608 >> 2] = 0;
    i9 = i11 + 8 | 0;
    if ((i9 | 0) == (i7 | 0)) {
     break L12;
    } else {
     i12 = i9;
    }
    while (1) {
     i9 = HEAP32[i12 >> 2] | 0;
     if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
      break;
     }
     i9 = i12 + 8 | 0;
     if ((i9 | 0) == (i7 | 0)) {
      break L12;
     } else {
      i12 = i9;
     }
    }
    if ((i12 | 0) == (i7 | 0)) {
     break;
    } else {
     i11 = i12;
    }
   }
  }
 } while (0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 80 | 0);
 __ZN3WTF5DequeIN7WebCore20CachedResourceLoader14PendingPreloadELj0EE10destroyAllEv(i1 + 60 | 0);
 i12 = i1 + 68 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 if ((i11 | 0) != 0) {
  HEAP32[i12 >> 2] = 0;
  HEAP32[i1 + 72 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i11);
 }
 __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore14CachedResourceELj256ENS_7PtrHashIS4_EEEEED2Ev(i2);
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i5 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i5 = 0;
   while (1) {
    i11 = i2 + (i5 << 3) | 0;
    do {
     if ((HEAP32[i11 >> 2] | 0) != -1) {
      __ZN7WebCore24CachedResourceHandleBaseD2Ev(i2 + (i5 << 3) + 4 | 0);
      i12 = HEAP32[i11 >> 2] | 0;
      if ((i12 | 0) == 0) {
       break;
      }
      i7 = i12 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i12);
       break;
      } else {
       HEAP32[i7 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i1 = 0;
  while (1) {
   i5 = HEAP32[i2 + (i1 << 2) >> 2] | 0;
   i11 = i5;
   do {
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     i8 = i5 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i8 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_22IdentityHashTranslatorIS7_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
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
 i10 = HEAP32[i4 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i13 = i10 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = i18 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i10;
 do {
  if ((i17 | 0) != 0) {
   i10 = i17 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i10 >> 2] = i13;
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
  i17 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_(i2, i18) | 0;
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
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore14CachedResourceELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EES4_PNS_24ListHashSetNodeAllocatorIS4_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore14CachedResourceELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6expandEPS6_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i10 = i9 + ~(i9 << 15) | 0;
 i9 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i9 >>> 6 ^ i9;
 i9 = i10 + ~(i10 << 11) | 0;
 i10 = i9 >>> 16 ^ i9;
 i9 = (i10 >>> 23) + ~i10 | 0;
 i11 = i9 << 12 ^ i9;
 i9 = i11 >>> 7 ^ i11;
 i11 = i9 << 2 ^ i9;
 i9 = i11 >>> 20 ^ i11 | 1;
 i11 = 0;
 i12 = i10;
 i10 = 0;
 while (1) {
  i13 = i12 & i6;
  i14 = i7 + (i13 << 2) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15;
  if ((i16 | 0) == (-1 | 0)) {
   i17 = i14;
  } else if ((i16 | 0) == 0) {
   break;
  } else {
   if ((HEAP32[i15 >> 2] | 0) == (i8 | 0)) {
    i18 = 6;
    break;
   } else {
    i17 = i11;
   }
  }
  i15 = (i10 | 0) == 0 ? i9 : i10;
  i11 = i17;
  i12 = i15 + i13 | 0;
  i10 = i15;
 }
 if ((i18 | 0) == 6) {
  i18 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i7 = i1;
  HEAP32[i7 >> 2] = i14;
  HEAP32[i7 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i11 | 0) == 0) {
  i19 = i14;
 } else {
  HEAP32[i11 >> 2] = 0;
  i14 = i2 + 16 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) - 1;
  i19 = i11;
 }
 i11 = HEAP32[i4 >> 2] | 0;
 i4 = i11 | 0;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i20 = __ZN3WTF10fastMallocEj(12) | 0;
 } else {
  i18 = HEAP32[i14 + 8 >> 2] | 0;
  do {
   if ((i18 | 0) == 0) {
    i7 = i11 + 4 | 0;
    if ((HEAP8[i7] & 1) != 0) {
     i21 = 0;
     break;
    }
    i10 = i14 + 12 | 0;
    if ((i10 | 0) != (i11 + 3080 | 0)) {
     i21 = i10;
     break;
    }
    HEAP8[i7] = 1;
    i21 = 0;
   } else {
    i21 = i18;
   }
  } while (0);
  HEAP32[i4 >> 2] = i21;
  i20 = i14;
 }
 HEAP32[i20 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i20 + 4 >> 2] = 0;
 HEAP32[i20 + 8 >> 2] = 0;
 HEAP32[i19 >> 2] = i20;
 i20 = i2 + 12 | 0;
 i3 = (HEAP32[i20 >> 2] | 0) + 1 | 0;
 HEAP32[i20 >> 2] = i3;
 i20 = i2 + 4 | 0;
 i14 = HEAP32[i20 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i3 << 1 | 0) < (i14 | 0)) {
  i22 = i19;
  i23 = i14;
 } else {
  i14 = __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore14CachedResourceELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6expandEPS6_(i2, i19) | 0;
  i22 = i14;
  i23 = HEAP32[i20 >> 2] | 0;
 }
 i20 = (HEAP32[i5 >> 2] | 0) + (i23 << 2) | 0;
 i23 = i1;
 HEAP32[i23 >> 2] = i22;
 HEAP32[i23 + 4 >> 2] = i20;
 HEAP8[i1 + 8 | 0] = 1;
 return;
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
function __ZN7WebCore20CachedResourceLoader12requestImageERNS_21CachedResourceRequestE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 48 | 0;
 i7 = i2 + 48 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = HEAP32[i8 + 12 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   if ((HEAP32[i9 + 152 >> 2] | 0) == 0) {
    break;
   }
   i10 = __ZNK7WebCore19ResourceRequestBase3urlEv(i3 | 0) | 0;
   i11 = i5 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i11 >> 2] = i12;
   if ((i12 | 0) == 0) {
    i13 = 0;
    i14 = i5 + 4 | 0;
   } else {
    i15 = i12 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
    i15 = i5 + 4 | 0;
    i13 = HEAP8[i15] & -2;
    i14 = i15;
   }
   i15 = i10 + 4 | 0;
   i12 = HEAP8[i15] & 1;
   i16 = i13 | i12;
   HEAP8[i14] = i16;
   HEAP8[i14] = i16 & -3 | HEAP8[i15] & 2;
   HEAP32[i5 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
   HEAP32[i5 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
   HEAP32[i5 + 16 >> 2] = HEAP32[i10 + 16 >> 2];
   HEAP32[i5 + 20 >> 2] = HEAP32[i10 + 20 >> 2];
   HEAP32[i5 + 24 >> 2] = HEAP32[i10 + 24 >> 2];
   HEAP32[i5 + 28 >> 2] = HEAP32[i10 + 28 >> 2];
   HEAP32[i5 + 32 >> 2] = HEAP32[i10 + 32 >> 2];
   HEAP32[i5 + 36 >> 2] = HEAP32[i10 + 36 >> 2];
   HEAP32[i5 + 40 >> 2] = HEAP32[i10 + 40 >> 2];
   HEAP32[i5 + 44 >> 2] = HEAP32[i10 + 44 >> 2];
   do {
    if (i12 << 24 >> 24 != 0) {
     if (!(__ZN7WebCore20CachedResourceLoader10canRequestENS_14CachedResource4TypeERKNS_3URLERKNS_21ResourceLoaderOptionsEb(i2, 1, i5, i3 + 188 | 0, (HEAP8[i3 + 220 | 0] & 1) != 0) | 0)) {
      break;
     }
     __ZN7WebCore10PingLoader9loadImageEPNS_5FrameERKNS_3URLE(i9, i5);
    }
   } while (0);
   __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 | 0, 0);
   i9 = HEAP32[i11 >> 2] | 0;
   if ((i9 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i12 = i9 | 0;
   i10 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i12 >> 2] = i10;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i5 = __ZNK7WebCore19ResourceRequestBase3urlEv(i3 | 0) | 0;
 i14 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i17 = 0;
  } else {
   i7 = HEAP32[i14 + 12 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i17 = 0;
    break;
   }
   i13 = HEAP32[i7 + 84 >> 2] | 0;
   i17 = (FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i13 >> 2] | 0) + 488 >> 2] & 1](i13, (HEAP8[i2 + 136 | 0] & 2) != 0, i5) | 0) & 1 ^ 1;
  }
 } while (0);
 HEAP32[i3 + 224 >> 2] = i17;
 __ZN7WebCore20CachedResourceLoader15requestResourceENS_14CachedResource4TypeERNS_21CachedResourceRequestE(i6, i2, 1, i3);
 __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 | 0, HEAP32[i6 >> 2] | 0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i6 | 0);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore20CachedResourceLoader11isPreloadedERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 304 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i4, HEAP32[i1 + 44 >> 2] | 0, i2);
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) == 0) {
   i6 = 5;
  } else {
   i7 = i4 | 0;
   i8 = i2 + 20 | 0;
   while (1) {
    i9 = HEAP32[i8 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i6 = 5;
     break L1;
    }
    i10 = HEAP32[(__ZNK7WebCore19ResourceRequestBase3urlEv((HEAP32[i9 >> 2] | 0) + 48 | 0) | 0) >> 2] | 0;
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(i10, HEAP32[i7 >> 2] | 0) | 0) {
     i11 = 1;
     i12 = i7;
     break;
    } else {
     i8 = i9 + 8 | 0;
    }
   }
  }
 } while (0);
 L6 : do {
  if ((i6 | 0) == 5) {
   i2 = HEAP32[i1 + 64 >> 2] | 0;
   i8 = HEAP32[i1 + 60 >> 2] | 0;
   if ((i8 | 0) == (i2 | 0)) {
    i11 = 0;
    i12 = i4 | 0;
    break;
   }
   i7 = i1 + 68 | 0;
   i9 = i5 | 0;
   i10 = i5 + 8 | 0;
   i13 = i5 + 248 | 0;
   i14 = i10 | 0;
   i15 = i4 | 0;
   i16 = i1 + 72 | 0;
   i17 = i8;
   while (1) {
    i8 = HEAP32[i7 >> 2] | 0;
    HEAP32[i9 >> 2] = HEAP32[i8 + (i17 << 8) >> 2];
    __ZN7WebCore21CachedResourceRequestC1ERKS0_(i10, i8 + (i17 << 8) + 8 | 0);
    i18 = HEAP32[i8 + (i17 << 8) + 248 >> 2] | 0;
    HEAP32[i13 >> 2] = i18;
    if ((i18 | 0) != 0) {
     i8 = i18 | 0;
     HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
    }
    i8 = HEAP32[(__ZNK7WebCore19ResourceRequestBase3urlEv(i14) | 0) >> 2] | 0;
    i18 = __ZN3WTF5equalEPKNS_10StringImplES2_(i8, HEAP32[i15 >> 2] | 0) | 0;
    i8 = HEAP32[i13 >> 2] | 0;
    do {
     if ((i8 | 0) != 0) {
      i19 = i8 | 0;
      i20 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
      if ((i20 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i8);
       break;
      } else {
       HEAP32[i19 >> 2] = i20;
       break;
      }
     }
    } while (0);
    __ZN7WebCore21CachedResourceRequestD1Ev(i10);
    if (i18) {
     i11 = 1;
     i12 = i15;
     break L6;
    }
    i8 = (i17 | 0) == ((HEAP32[i16 >> 2] | 0) - 1 | 0) ? 0 : i17 + 1 | 0;
    if ((i8 | 0) == (i2 | 0)) {
     i11 = 0;
     i12 = i15;
     break;
    } else {
     i17 = i8;
    }
   }
  }
 } while (0);
 i1 = HEAP32[i12 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return i11 | 0;
 }
 i12 = i1 | 0;
 i4 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return i11 | 0;
 } else {
  HEAP32[i12 >> 2] = i4;
  STACKTOP = i3;
  return i11 | 0;
 }
 return 0;
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore14CachedResourceELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6expandEPS6_(i1, i2) {
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
   i14 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = HEAP32[i13 >> 2] | 0;
   i18 = i17;
   i19 = i18 + ~(i18 << 15) | 0;
   i18 = (i19 >>> 10 ^ i19) * 9 & -1;
   i19 = i18 >>> 6 ^ i18;
   i18 = i19 + ~(i19 << 11) | 0;
   i19 = i18 >>> 16 ^ i18;
   i18 = (i19 >>> 23) + ~i19 | 0;
   i20 = i18 << 12 ^ i18;
   i18 = i20 >>> 7 ^ i20;
   i20 = i18 << 2 ^ i18;
   i18 = i20 >>> 20 ^ i20 | 1;
   i20 = i19;
   i19 = 0;
   i21 = 0;
   while (1) {
    i22 = i20 & i16;
    i23 = i14 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    i25 = i24;
    if ((i25 | 0) == (-1 | 0)) {
     i26 = i23;
    } else if ((i25 | 0) == 0) {
     i27 = 7;
     break;
    } else {
     if ((HEAP32[i24 >> 2] | 0) == (i17 | 0)) {
      i28 = i23;
      break;
     } else {
      i26 = i21;
     }
    }
    i24 = (i19 | 0) == 0 ? i18 : i19;
    i20 = i24 + i22 | 0;
    i19 = i24;
    i21 = i26;
   }
   if ((i27 | 0) == 7) {
    i27 = 0;
    i28 = (i21 | 0) != 0 ? i21 : i23;
   }
   HEAP32[i28 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i28 : i12;
  }
  i19 = i11 + 1 | 0;
  if ((i19 | 0) == (i6 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i19;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore20CachedResourceLoader7preloadENS_14CachedResource4TypeERNS_21CachedResourceRequestERKN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 i6 = i5 | 0;
 i7 = i1 + 44 | 0;
 if ((__ZNK7WebCore8Document4bodyEv(HEAP32[i7 >> 2] | 0) | 0) == 0) {
  i8 = 0;
 } else {
  i8 = (HEAP32[(HEAP32[i7 >> 2] | 0) + 1584 >> 2] | 0) != 0;
 }
 if (i8 | (i2 - 2 | 0) >>> 0 < 2 >>> 0) {
  __ZN7WebCore20CachedResourceLoader14requestPreloadENS_14CachedResource4TypeERNS_21CachedResourceRequestERKN3WTF6StringE(i1, i2, i3, i4);
  STACKTOP = i5;
  return;
 }
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = i2;
 i2 = i6 + 8 | 0;
 __ZN7WebCore21CachedResourceRequestC1ERKS0_(i2, i3);
 i3 = i6 + 248 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i3 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i4 = i6 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 60 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 i7 = i1 + 64 | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i10 = HEAP32[i1 + 72 >> 2] | 0;
   if ((i9 | 0) == 0) {
    if ((i10 | 0) == 0) {
     i11 = 11;
     break;
    } else {
     i12 = 0;
     break;
    }
   } else {
    if ((i9 | 0) == (i10 - 1 | 0)) {
     i11 = 11;
     break;
    } else {
     i12 = i9;
     break;
    }
   }
  } else {
   if ((i9 + 1 | 0) == (i6 | 0)) {
    i11 = 11;
   } else {
    i12 = i9;
   }
  }
 } while (0);
 if ((i11 | 0) == 11) {
  __ZN3WTF5DequeIN7WebCore20CachedResourceLoader14PendingPreloadELj0EE14expandCapacityEv(i4);
  i12 = HEAP32[i7 >> 2] | 0;
 }
 i4 = HEAP32[i1 + 68 >> 2] | 0;
 HEAP32[i4 + (i12 << 8) >> 2] = HEAP32[i8 >> 2];
 __ZN7WebCore21CachedResourceRequestC1ERKS0_(i4 + (i12 << 8) + 8 | 0, i2);
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i4 + (i12 << 8) + 248 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i12 = i8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = (i12 | 0) == ((HEAP32[i1 + 72 >> 2] | 0) - 1 | 0) ? 0 : i12 + 1 | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i3 = i12 | 0;
   i1 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i3 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN7WebCore21CachedResourceRequestD1Ev(i2);
 STACKTOP = i5;
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
function __ZN7WebCore20CachedResourceLoader25reloadImagesIfNotDeferredEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 i4 = i2 + (i3 << 3) | 0;
 if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
  return;
 }
 L4 : do {
  if ((i3 | 0) == 0) {
   i5 = i2;
  } else {
   i6 = i2;
   while (1) {
    i7 = HEAP32[i6 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i5 = i6;
     break L4;
    }
    i6 = i6 + 8 | 0;
    if ((i6 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i4 | 0)) {
  return;
 }
 i2 = i1 + 48 | 0;
 i3 = i1 + 136 | 0;
 i6 = i5;
 L13 : while (1) {
  i5 = HEAP32[i6 + 4 >> 2] | 0;
  L15 : do {
   if ((HEAP32[i5 + 588 >> 2] & 1920 | 0) == 128) {
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 52 >> 2] & 1](i5) | 0)) {
     break;
    }
    i7 = __ZNK7WebCore19ResourceRequestBase3urlEv(i5 + 48 | 0) | 0;
    i8 = HEAP32[i2 >> 2] | 0;
    do {
     if ((i8 | 0) != 0) {
      i9 = HEAP32[i8 + 12 >> 2] | 0;
      if ((i9 | 0) == 0) {
       break;
      }
      i10 = HEAP32[i9 + 84 >> 2] | 0;
      if (!(FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i10 >> 2] | 0) + 488 >> 2] & 1](i10, (HEAP8[i3] & 2) != 0, i7) | 0)) {
       break L15;
      }
     }
    } while (0);
    i7 = HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0;
    if (!(HEAP8[H_BASE + 160 | 0] | 0)) {
     _memset(H_BASE + 168 | 0, 0, 20) | 0;
     HEAP32[H_BASE + 188 >> 2] = 1;
     HEAP32[H_BASE + 192 >> 2] = 0;
     HEAP8[H_BASE + 160 | 0] = 1;
    }
    FUNCTION_TABLE_viii[i7 & 1](i5, i1, H_BASE + 168);
   }
  } while (0);
  i5 = i6 + 8 | 0;
  if ((i5 | 0) == (i4 | 0)) {
   i11 = 22;
   break;
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
    i11 = 25;
    break L13;
   } else {
    i12 = i5;
   }
  }
  if ((i12 | 0) == (i4 | 0)) {
   i11 = 24;
   break;
  } else {
   i6 = i12;
  }
 }
 if ((i11 | 0) == 22) {
  return;
 } else if ((i11 | 0) == 24) {
  return;
 } else if ((i11 | 0) == 25) {
  return;
 }
}
function __ZN7WebCore20CachedResourceLoader24requestUserCSSStyleSheetERNS_21CachedResourceRequestE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i5 = i4 | 0;
 i6 = i4 + 48 | 0;
 i7 = i4 + 56 | 0;
 i8 = i3 | 0;
 i9 = i3 | 0;
 __ZN7WebCore11MemoryCache32removeFragmentIdentifierIfNeededERKNS_3URLE(i5, __ZNK7WebCore19ResourceRequestBase3urlEv(i9) | 0);
 i10 = __ZN7WebCore11MemoryCache18resourceForRequestERKNS_15ResourceRequestE(__ZN7WebCore11memoryCacheEv() | 0, i8) | 0;
 do {
  if ((i10 | 0) == 0) {
   i11 = 5;
  } else {
   if ((HEAP32[i10 + 588 >> 2] & 1920 | 0) == 256) {
    __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 | 0, i10);
    i12 = i5 | 0;
    break;
   } else {
    __ZN7WebCore11MemoryCache5evictEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i10);
    i11 = 5;
    break;
   }
  }
 } while (0);
 if ((i11 | 0) == 5) {
  i11 = __ZNK7WebCore19ResourceRequestBase3urlEv(i9) | 0;
  i10 = i5 | 0;
  if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i10 >> 2] | 0, HEAP32[i11 >> 2] | 0) | 0)) {
   __ZN7WebCore19ResourceRequestBase6setURLERKNS_3URLE(i9, i5);
  }
  i5 = __ZN3WTF10fastMallocEj(656) | 0;
  __ZN7WebCore19CachedCSSStyleSheetC1ERKNS_15ResourceRequestERKN3WTF6StringE(i5, i8, i3 + 184 | 0);
  i3 = i6 | 0;
  __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i3, i5);
  i5 = __ZN7WebCore11memoryCacheEv() | 0;
  i8 = i6 | 0;
  __ZN7WebCore11MemoryCache3addEPNS_14CachedResourceE(i5, HEAP32[i8 >> 2] | 0) | 0;
  i5 = HEAP32[i8 >> 2] | 0;
  HEAP32[i7 >> 2] = 1;
  _memset(i7 + 4 | 0, 0, 24) | 0;
  __ZN7WebCore14CachedResource4loadEPNS_20CachedResourceLoaderERKNS_21ResourceLoaderOptionsE(i5, i2, i7);
  __ZN7WebCore24CachedResourceHandleBaseC2ERKS0_(i1 | 0, i3);
  __ZN7WebCore24CachedResourceHandleBaseD2Ev(i3);
  i12 = i10;
 }
 i10 = HEAP32[i12 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i12 = i10 | 0;
 i3 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i12 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore20CachedResourceLoader23checkForPendingPreloadsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 i3 = i2 | 0;
 i4 = i1 + 60 | 0;
 i5 = i4 | 0;
 i6 = i1 + 64 | 0;
 if ((HEAP32[i5 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
  STACKTOP = i2;
  return;
 }
 i7 = i1 + 44 | 0;
 if ((__ZNK7WebCore8Document4bodyEv(HEAP32[i7 >> 2] | 0) | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = __ZNK7WebCore8Document4bodyEv(HEAP32[i7 >> 2] | 0) | 0;
 i7 = i8 + 32 | 0;
 if ((HEAP32[i8 + 12 >> 2] & 2048 | 0) == 0) {
  i9 = i7 | 0;
 } else {
  i9 = HEAP32[i7 >> 2] | 0;
 }
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i5 >> 2] | 0) != (HEAP32[i6 >> 2] | 0)) {
  i9 = i3 + 8 | 0;
  i7 = i9 | 0;
  i8 = i3 | 0;
  i10 = i3 + 248 | 0;
  i11 = i3 + 248 | 0;
  while (1) {
   __ZN3WTF5DequeIN7WebCore20CachedResourceLoader14PendingPreloadELj0EE9takeFirstEv(i3, i4);
   if ((__ZNK7WebCore20CachedResourceLoader14cachedResourceERKNS_3URLE(i1, __ZNK7WebCore19ResourceRequestBase3urlEv(i7) | 0) | 0) == 0) {
    __ZN7WebCore20CachedResourceLoader14requestPreloadENS_14CachedResource4TypeERNS_21CachedResourceRequestERKN3WTF6StringE(i1, HEAP32[i8 >> 2] | 0, i9, i10);
   }
   i12 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i13 = i12 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   __ZN7WebCore21CachedResourceRequestD1Ev(i9);
   if ((HEAP32[i5 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
    break;
   }
  }
 }
 __ZN3WTF5DequeIN7WebCore20CachedResourceLoader14PendingPreloadELj0EE10destroyAllEv(i4);
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 i6 = i1 + 68 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 + 72 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i2;
 return;
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
function __ZN3WTF5DequeIN7WebCore20CachedResourceLoader14PendingPreloadELj0EE10destroyAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + (i4 << 8) | 0;
 if (i3 >>> 0 <= i4 >>> 0) {
  if ((i3 | 0) == (i4 | 0)) {
   return;
  }
  i8 = i6 + (i3 << 8) | 0;
  while (1) {
   i9 = HEAP32[i8 + 248 >> 2] | 0;
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
   __ZN7WebCore21CachedResourceRequestD1Ev(i8 + 8 | 0);
   i8 = i8 + 256 | 0;
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
   i6 = HEAP32[i3 + 248 >> 2] | 0;
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
   __ZN7WebCore21CachedResourceRequestD1Ev(i3 + 8 | 0);
   i3 = i3 + 256 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i12 + (i2 << 8) | 0;
 if ((i13 | 0) == (i2 | 0)) {
  return;
 }
 i2 = i12 + (i13 << 8) | 0;
 while (1) {
  i13 = HEAP32[i2 + 248 >> 2] | 0;
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
  __ZN7WebCore21CachedResourceRequestD1Ev(i2 + 8 | 0);
  i2 = i2 + 256 | 0;
  if ((i2 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZNK7WebCore20CachedResourceLoader14cachedResourceERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 56 | 0;
 __ZN7WebCore11MemoryCache32removeFragmentIdentifierIfNeededERKNS_3URLE(i5, i2);
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 i7 = HEAP32[i1 + 24 >> 2] | 0;
 i1 = i5 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i8 = HEAP32[i5 + 16 >> 2] | 0;
 if (i8 >>> 0 > 127 >>> 0) {
  i9 = i8 >>> 7;
 } else {
  i9 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i5) | 0;
 }
 L5 : do {
  if ((i7 | 0) == 0) {
   i10 = 10;
  } else {
   i5 = (i9 >>> 23) + ~i9 | 0;
   i8 = i5 << 12 ^ i5;
   i5 = i8 >>> 7 ^ i8;
   i8 = i5 << 2 ^ i5;
   i5 = i8 >>> 20 ^ i8 | 1;
   i8 = i9;
   i11 = 0;
   while (1) {
    i12 = i8 & i2;
    i13 = i7 + (i12 << 3) | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    i15 = i14;
    if ((i15 | 0) == 0) {
     i10 = 10;
     break L5;
    } else if ((i15 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i1 >> 2] | 0) | 0) {
      break;
     }
    }
    i14 = (i11 | 0) == 0 ? i5 : i11;
    i8 = i14 + i12 | 0;
    i11 = i14;
   }
   if ((i13 | 0) == 0) {
    i10 = 10;
    break;
   }
   __ZN7WebCore24CachedResourceHandleBaseC2ERKS0_(i6 | 0, i7 + (i12 << 3) + 4 | 0);
  }
 } while (0);
 if ((i10 | 0) == 10) {
  i10 = i4 | 0;
  __ZN7WebCore24CachedResourceHandleBaseC2Ev(i10);
  __ZN7WebCore24CachedResourceHandleBaseC2ERKS0_(i6 | 0, i10);
  __ZN7WebCore24CachedResourceHandleBaseD2Ev(i10);
 }
 i10 = HEAP32[i6 >> 2] | 0;
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i6 | 0);
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return i10 | 0;
 }
 i1 = i6 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i3;
  return i10 | 0;
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return i10 | 0;
 }
 return 0;
}
function __ZN7WebCore15ResourceRequestC2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i4);
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP8[i4 + 4 | 0] | 0;
 i6 = i1 + 4 | 0;
 HEAP8[i6] = HEAP8[i6] & -4 | i7 & 1 | i7 & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i4 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i4 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i4 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i4 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i4 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i4 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i4 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i4 + 44 >> 2];
 HEAP32[i1 + 48 >> 2] = 0;
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
 i4 = i1 + 64 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i4);
 HEAP32[i3 >> 2] = H_BASE + 8;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 112 | 0, i3);
 __ZN7WebCore13HTTPHeaderMapC1Ev(i1 + 116 | 0);
 _memset(i1 + 136 | 0, 0, 16) | 0;
 HEAP8[i1 + 152 | 0] = 11;
 HEAP32[i1 + 156 >> 2] = 1;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i2;
  return;
 }
 i5 = i3 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i4;
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i2;
  return;
 }
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
  if ((i12 | 0) == (-1 | 0)) {
   i13 = i10;
  } else if ((i12 | 0) == 0) {
   i14 = 3;
   break;
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
    i13 = i8;
   }
  }
  i12 = (i5 | 0) == 0 ? i6 : i5;
  i7 = i12 + i9 | 0;
  i5 = i12;
  i8 = i13;
 }
 if ((i14 | 0) == 3) {
  i15 = (i8 | 0) != 0 ? i8 : i10;
 }
 i10 = i15 + 4 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i14 = i8 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i14 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i8 = i15 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i14 = i13 | 0;
   i5 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i14 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i8 >> 2] = i13;
 i13 = i2 + 4 | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 return i15 | 0;
}
function __ZN7WebCore21CachedResourceRequestC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i1 | 0, i2 | 0);
 i3 = HEAP32[i2 + 160 >> 2] | 0;
 HEAP32[i1 + 160 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = HEAP32[i2 + 164 >> 2] | 0;
 HEAP32[i1 + 164 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = HEAP32[i2 + 168 >> 2] | 0;
 HEAP32[i1 + 168 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = HEAP32[i2 + 172 >> 2] | 0;
 HEAP32[i1 + 172 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 176 | 0] = HEAP8[i2 + 176 | 0] & 1;
 HEAP8[i1 + 177 | 0] = HEAP8[i2 + 177 | 0] & 1;
 HEAP8[i1 + 178 | 0] = HEAP8[i2 + 178 | 0] & 1;
 HEAP32[i1 + 180 >> 2] = HEAP32[i2 + 180 >> 2];
 i3 = HEAP32[i2 + 184 >> 2] | 0;
 HEAP32[i1 + 184 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 188 | 0;
 i3 = i2 + 188 | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i4 + 16 >> 2] = HEAP32[i3 + 16 >> 2];
 HEAP32[i4 + 20 >> 2] = HEAP32[i3 + 20 >> 2];
 HEAP32[i4 + 24 >> 2] = HEAP32[i3 + 24 >> 2];
 HEAP32[i1 + 216 >> 2] = HEAP32[i2 + 216 >> 2];
 HEAP8[i1 + 220 | 0] = HEAP8[i2 + 220 | 0] & 1;
 HEAP32[i1 + 224 >> 2] = HEAP32[i2 + 224 >> 2];
 i3 = HEAP32[i2 + 228 >> 2] | 0;
 HEAP32[i1 + 228 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = HEAP32[i2 + 232 >> 2] | 0;
 HEAP32[i1 + 232 >> 2] = i4;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZN7WebCore19ResourceRequestBaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 144 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 136 | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i3 >> 2] | 0;
  i6 = i5 + (i4 << 2) | 0;
  i4 = i5;
  while (1) {
   i5 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 140 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore13HTTPHeaderMapD1Ev(i1 + 116 | 0);
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore20CachedResourceLoader8loadDoneEPNS_14CachedResourceEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 48 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = (i4 | 0) != 0;
 if (i5) {
  i6 = i4 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = HEAP32[i1 + 44 >> 2] | 0;
 i7 = (i6 | 0) != 0;
 if (i7) {
  i8 = i6 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 i8 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i2 = HEAP32[i8 + 12 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   __ZN7WebCore11FrameLoader8loadDoneEv(i2 + 80 | 0);
  }
 } while (0);
 if (i3) {
  __ZN7WebCore20CachedResourceLoader23checkForPendingPreloadsEv(i1);
  i3 = __ZN7WebCore18platformStrategiesEv() | 0;
  i8 = i3 + 12 | 0;
  i2 = HEAP32[i8 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 1](i3) | 0;
   HEAP32[i8 >> 2] = i9;
   i10 = i9;
  } else {
   i10 = i2;
  }
  i2 = FUNCTION_TABLE_ii[HEAP32[HEAP32[i10 >> 2] >> 2] & 1](i10) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 7](i2, 0);
 }
 if (+HEAPF64[i1 + 88 >> 3] == +0) {
  __ZN7WebCore9TimerBase5startEdd(i1 + 80 | 0, +0, +0);
 }
 do {
  if (i7) {
   i1 = i6 + 8 | 0;
   i2 = i1 | 0;
   i10 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  }
 } while (0);
 if (!i5) {
  return;
 }
 i5 = i4 + 4 | 0;
 i4 = i5 | 0;
 i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i4 >> 2] = i6;
  return;
 }
 i6 = i5 - 4 | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
 return;
}
function __ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = _strlen(i3 | 0) | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = _strlen(i6 | 0) | 0;
 if ((i7 | 0) != 0) {
  i8 = 0;
  while (1) {
   HEAP16[i2 + (i8 << 1) >> 1] = HEAPU8[i6 + i8 | 0] | 0;
   i8 = i8 + 1 | 0;
   if (i8 >>> 0 >= i7 >>> 0) {
    break;
   }
  }
 }
 i8 = i1 + 4 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i9 = 0;
   i10 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
  } else {
   i6 = HEAP32[i1 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
     i11 = HEAP32[i1 + 8 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     } else {
      i12 = 0;
     }
     while (1) {
      HEAP16[i2 + (i12 + i7 << 1) >> 1] = HEAP16[i11 + (i12 << 1) >> 1] | 0;
      i12 = i12 + 1 | 0;
      if (i12 >>> 0 >= i6 >>> 0) {
       break;
      }
     }
    } else {
     i11 = HEAP32[i1 + 8 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     } else {
      i13 = 0;
     }
     while (1) {
      HEAP16[i2 + (i13 + i7 << 1) >> 1] = HEAPU8[i11 + i13 | 0] | 0;
      i13 = i13 + 1 | 0;
      if (i13 >>> 0 >= i6 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i6 = HEAP32[i8 >> 2] | 0;
   i11 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
   if ((i6 | 0) == 0) {
    i9 = 0;
    i10 = i11;
    break;
   }
   i9 = HEAP32[i6 + 4 >> 2] | 0;
   i10 = i11;
  }
 } while (0);
 i5 = i9 + i10 | 0;
 if ((i4 | 0) == 0) {
  return;
 } else {
  i14 = 0;
 }
 while (1) {
  HEAP16[i2 + (i5 + i14 << 1) >> 1] = HEAPU8[i3 + i14 | 0] | 0;
  i14 = i14 + 1 | 0;
  if (i14 >>> 0 >= i4 >>> 0) {
   break;
  }
 }
 return;
}
function __ZN3WTF7HashMapINS_6StringEN7WebCore20CachedResourceHandleINS2_14CachedResourceEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE4findERKS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = HEAP32[i2 + 4 >> 2] << 3 | 0;
   i7 = i6;
   i8 = i6;
  } else {
   i6 = HEAP32[i2 + 8 >> 2] | 0;
   i9 = i3 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = HEAP32[i10 + 16 >> 2] | 0;
   if (i11 >>> 0 > 127 >>> 0) {
    i12 = i11 >>> 7;
   } else {
    i12 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i10) | 0;
   }
   i10 = (i12 >>> 23) + ~i12 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = i12;
   i13 = 0;
   while (1) {
    i14 = i11 & i6;
    i15 = i5 + (i14 << 3) | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    i17 = i16;
    if ((i17 | 0) == 0) {
     i18 = 8;
     break;
    } else if ((i17 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i16, HEAP32[i9 >> 2] | 0) | 0) {
      i18 = 11;
      break;
     }
    }
    i16 = (i13 | 0) == 0 ? i10 : i13;
    i11 = i16 + i14 | 0;
    i13 = i16;
   }
   if ((i18 | 0) == 8) {
    i13 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i7 = i13;
    i8 = i13;
    break;
   } else if ((i18 | 0) == 11) {
    i13 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i7 = (i15 | 0) == 0 ? i13 : i15;
    i8 = i13;
    break;
   }
  }
 } while (0);
 i15 = i1;
 HEAP32[i15 >> 2] = i7;
 HEAP32[i15 + 4 >> 2] = i8;
 return;
}
function __ZN7WebCore20CachedResourceLoader18revalidateResourceERKNS_21CachedResourceRequestEPNS_14CachedResourceE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i2 = i3 | 0;
 i5 = HEAP32[(__ZNK7WebCore19ResourceRequestBase3urlEv(i4 + 48 | 0) | 0) >> 2] | 0;
 i6 = (i5 | 0) == 0;
 if (!i6) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = (HEAP32[i4 + 588 >> 2] | 0) >>> 7 & 15;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 7](i2, i4);
 __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 | 0, __ZN7WebCoreL14createResourceENS_14CachedResource4TypeERNS_15ResourceRequestERKN3WTF6StringE(i7, i4 + 48 | 0, i2) | 0);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i2 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i7 = i1 | 0;
 __ZN7WebCore14CachedResource23setResourceToRevalidateEPS0_(HEAP32[i7 >> 2] | 0, i4);
 __ZN7WebCore11MemoryCache5evictEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i4);
 i4 = __ZN7WebCore11memoryCacheEv() | 0;
 __ZN7WebCore11MemoryCache3addEPNS_14CachedResourceE(i4, HEAP32[i7 >> 2] | 0) | 0;
 if (i6) {
  STACKTOP = i3;
  return;
 }
 i6 = i5 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF7HashMapINS_6StringEN7WebCore20CachedResourceHandleINS2_14CachedResourceEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN3WTF7HashMapINS_6StringEN7WebCore20CachedResourceHandleINS2_14CachedResourceEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE4findERKS1_(i4, i1, i2);
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i1 | 0;
 i5 = i1 + 4 | 0;
 if ((i2 | 0) == ((HEAP32[i1 >> 2] | 0) + (HEAP32[i5 >> 2] << 3) | 0)) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i2 + 4 | 0);
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = i2 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = -1;
 i7 = i1 + 16 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = i1 + 12 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 i7 = HEAP32[i5 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i7 | 0) & (i7 | 0) > 8)) {
  i6 = 1;
  STACKTOP = i3;
  return i6 | 0;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore20CachedResourceHandleINS3_14CachedResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i4, (i7 | 0) / 2 & -1, 0) | 0;
 i6 = 1;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN7WebCoreL14createResourceENS_14CachedResource4TypeERNS_15ResourceRequestERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 switch (i1 | 0) {
 case 1:
  {
   i4 = __ZN3WTF10fastMallocEj(680) | 0;
   __ZN7WebCore11CachedImageC1ERKNS_15ResourceRequestE(i4, i2);
   i5 = i4;
   return i5 | 0;
  }
 case 4:
  {
   i4 = __ZN3WTF10fastMallocEj(656) | 0;
   __ZN7WebCore10CachedFontC1ERKNS_15ResourceRequestE(i4, i2);
   i5 = i4;
   return i5 | 0;
  }
 case 6:
  {
   i4 = __ZN3WTF10fastMallocEj(648) | 0;
   __ZN7WebCore17CachedSVGDocumentC1ERKNS_15ResourceRequestE(i4, i2);
   i5 = i4;
   return i5 | 0;
  }
 case 5:
 case 0:
  {
   i4 = __ZN3WTF10fastMallocEj(656) | 0;
   __ZN7WebCore17CachedRawResourceC1ERNS_15ResourceRequestENS_14CachedResource4TypeE(i4, i2, i1);
   i5 = i4;
   return i5 | 0;
  }
 case 7:
  {
   i4 = __ZN3WTF10fastMallocEj(648) | 0;
   __ZN7WebCore19CachedXSLStyleSheetC1ERKNS_15ResourceRequestE(i4, i2);
   i5 = i4;
   return i5 | 0;
  }
 case 8:
  {
   i4 = __ZN3WTF10fastMallocEj(648) | 0;
   __ZN7WebCore12CachedShaderC1ERKNS_15ResourceRequestE(i4, i2);
   i5 = i4;
   return i5 | 0;
  }
 case 3:
  {
   i4 = __ZN3WTF10fastMallocEj(648) | 0;
   __ZN7WebCore12CachedScriptC1ERKNS_15ResourceRequestERKN3WTF6StringE(i4, i2, i3);
   i5 = i4;
   return i5 | 0;
  }
 case 2:
  {
   i4 = __ZN3WTF10fastMallocEj(656) | 0;
   __ZN7WebCore19CachedCSSStyleSheetC1ERKNS_15ResourceRequestERKN3WTF6StringE(i4, i2, i3);
   i5 = i4;
   return i5 | 0;
  }
 default:
  {
   i5 = 0;
   return i5 | 0;
  }
 }
 return 0;
}
function __ZNK3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EcvS3_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 i6 = i5 + 4 | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 i8 = i5 + 12 | 0;
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, HEAP32[i2 + 16 >> 2] | 0);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = i2 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i8 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore15ResourceRequestD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 172 >> 2] | 0;
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
 i2 = HEAP32[i1 + 168 >> 2] | 0;
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
 i2 = HEAP32[i1 + 164 >> 2] | 0;
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
 i2 = HEAP32[i1 + 160 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 }
}
function __ZNK7WebCore20CachedResourceLoader20checkInsecureContentENS_14CachedResource4TypeERKNS_3URLE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 L1 : do {
  switch (i2 | 0) {
  case 8:
  case 5:
  case 1:
  case 4:
   {
    i4 = HEAP32[i1 + 48 >> 2] | 0;
    if ((i4 | 0) == 0) {
     break L1;
    }
    i5 = HEAP32[i4 + 12 >> 2] | 0;
    if ((i5 | 0) == 0) {
     break L1;
    }
    i4 = __ZNK7WebCore9FrameTree3topEv(i5 + 40 | 0) | 0;
    if (__ZNK7WebCore19MixedContentChecker25canDisplayInsecureContentEPNS_14SecurityOriginERKNS_3URLE(i4 + 112 | 0, HEAP32[(HEAP32[i4 + 456 >> 2] | 0) + 100 >> 2] | 0, i3) | 0) {
     break L1;
    } else {
     i6 = 0;
    }
    return i6 | 0;
   }
  case 3:
  case 7:
  case 6:
  case 2:
   {
    i4 = HEAP32[i1 + 48 >> 2] | 0;
    if ((i4 | 0) == 0) {
     break L1;
    }
    i5 = HEAP32[i4 + 12 >> 2] | 0;
    if ((i5 | 0) == 0) {
     break L1;
    }
    if (__ZNK7WebCore19MixedContentChecker21canRunInsecureContentEPNS_14SecurityOriginERKNS_3URLE(i5 + 112 | 0, HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 100 >> 2] | 0, i3) | 0) {
     break L1;
    } else {
     i6 = 0;
    }
    return i6 | 0;
   }
  default:
   {}
  }
 } while (0);
 i6 = 1;
 return i6 | 0;
}
function __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore14CachedResourceELj256ENS_7PtrHashIS4_EEEEEaSERKNS_10PassOwnPtrIS7_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  return i1 | 0;
 }
 i2 = HEAP32[i4 + 20 >> 2] | 0;
 i3 = i4 + 28 | 0;
 if ((i2 | 0) != 0) {
  i5 = i2;
  while (1) {
   i2 = i5 + 8 | 0;
   i6 = HEAP32[i2 >> 2] | 0;
   i7 = HEAP32[i3 >> 2] | 0;
   i8 = i7 + 8 | 0;
   do {
    if (i8 >>> 0 > i5 >>> 0) {
     i9 = 6;
    } else {
     if ((i8 + 3072 | 0) >>> 0 <= i5 >>> 0) {
      i9 = 6;
      break;
     }
     i10 = i7 | 0;
     HEAP32[i2 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i10 >> 2] = i5;
    }
   } while (0);
   if ((i9 | 0) == 6) {
    i9 = 0;
    __ZN3WTF8fastFreeEPv(i5);
   }
   if ((i6 | 0) == 0) {
    break;
   } else {
    i5 = i6;
   }
  }
 }
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i5 | 0) != 0) {
  __ZdlPv(i5);
 }
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i5);
 }
 __ZN3WTF8fastFreeEPv(i4);
 return i1 | 0;
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
function __ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = _strlen(i3 | 0) | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = _strlen(i6 | 0) | 0;
 _memcpy(i2 | 0, i6 | 0, i7) | 0;
 i6 = i1 + 4 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i8 = 0;
   i9 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
  } else {
   i10 = HEAP32[i1 + 4 >> 2] | 0;
   i11 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i12 = i1;
    i13 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
   } else {
    i14 = 0;
    while (1) {
     HEAP8[i2 + (i14 + i7) | 0] = HEAP8[i11 + i14 | 0] | 0;
     i14 = i14 + 1 | 0;
     if (i14 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
    i10 = HEAP32[i6 >> 2] | 0;
    i14 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
    if ((i10 | 0) == 0) {
     i8 = 0;
     i9 = i14;
     break;
    } else {
     i12 = i10;
     i13 = i14;
    }
   }
   i8 = HEAP32[i12 + 4 >> 2] | 0;
   i9 = i13;
  }
 } while (0);
 _memcpy(i2 + (i8 + i9) | 0, i3 | 0, i4) | 0;
 return;
}
function __ZN3WTF12StringAppendINS0_INS0_IPKcNS_6StringEEES2_EES3_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 __ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPt(i1 | 0, i2);
 i3 = _strlen(HEAP32[i1 + 8 >> 2] | 0) | 0;
 i4 = _strlen(HEAP32[i1 >> 2] | 0) | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
 } else {
  i6 = HEAP32[i5 + 4 >> 2] | 0;
 }
 i5 = i4 + i3 + i6 | 0;
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 if ((HEAP32[i6 + 16 >> 2] & 32 | 0) == 0) {
  i3 = HEAP32[i6 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i7 = 0;
  }
  while (1) {
   HEAP16[i2 + (i7 + i5 << 1) >> 1] = HEAP16[i3 + (i7 << 1) >> 1] | 0;
   i7 = i7 + 1 | 0;
   if (i7 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 } else {
  i7 = HEAP32[i6 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i8 = 0;
  }
  while (1) {
   HEAP16[i2 + (i8 + i5 << 1) >> 1] = HEAPU8[i7 + i8 | 0] | 0;
   i8 = i8 + 1 | 0;
   if (i8 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 }
}
function __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore14CachedResourceELj256ENS_7PtrHashIS4_EEEEE5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 i3 = i1 + 28 | 0;
 if ((i2 | 0) != 0) {
  i4 = i2;
  while (1) {
   i2 = i4 + 8 | 0;
   i5 = HEAP32[i2 >> 2] | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   i7 = i6 + 8 | 0;
   do {
    if (i7 >>> 0 > i4 >>> 0) {
     i8 = 6;
    } else {
     if ((i7 + 3072 | 0) >>> 0 <= i4 >>> 0) {
      i8 = 6;
      break;
     }
     i9 = i6 | 0;
     HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
     HEAP32[i9 >> 2] = i4;
    }
   } while (0);
   if ((i8 | 0) == 6) {
    i8 = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   if ((i5 | 0) == 0) {
    break;
   } else {
    i4 = i5;
   }
  }
 }
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZdlPv(i4);
 }
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsINS_6StringEEENS1_IN7WebCore20CachedResourceHandleINS4_14CachedResourceEEEEEE10emptyValueEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 __ZN7WebCore24CachedResourceHandleBaseC2Ev(i4);
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i3 + 4 | 0;
 __ZN7WebCore24CachedResourceHandleBaseC2ERKS0_(i6, i4);
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 >> 2] = i3;
 __ZN7WebCore24CachedResourceHandleBaseC2ERKS0_(i1 + 4 | 0, i6);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i6);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore24CachedResourceHandleBaseD2Ev(i4);
  STACKTOP = i2;
  return;
 }
 i5 = i6 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  __ZN7WebCore24CachedResourceHandleBaseD2Ev(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  __ZN7WebCore24CachedResourceHandleBaseD2Ev(i4);
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF5DequeIN7WebCore20CachedResourceLoader14PendingPreloadELj0EE9takeFirstEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i2 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i6 + (i4 << 8) >> 2];
 __ZN7WebCore21CachedResourceRequestC1ERKS0_(i1 + 8 | 0, i6 + (i4 << 8) + 8 | 0);
 i7 = HEAP32[i6 + (i4 << 8) + 248 >> 2] | 0;
 HEAP32[i1 + 248 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i1 = i7 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i7 + (i1 << 8) + 248 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN7WebCore21CachedResourceRequestD1Ev(i7 + (i1 << 8) + 8 | 0);
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = (i1 | 0) == ((HEAP32[i2 + 12 >> 2] | 0) - 1 | 0) ? 0 : i1 + 1 | 0;
 return;
}
function __ZN7WebCore20CachedResourceLoader49shouldContinueAfterNotifyingLoadedFromMemoryCacheEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i4 = i3 | 0;
 if ((i2 | 0) == 0) {
  i5 = 1;
  STACKTOP = i3;
  return i5 | 0;
 }
 i6 = i1 + 48 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i5 = 1;
  STACKTOP = i3;
  return i5 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  i5 = 1;
  STACKTOP = i3;
  return i5 | 0;
 }
 if ((HEAP32[i2 + 588 >> 2] & 14336 | 0) != 4096) {
  i5 = 1;
  STACKTOP = i3;
  return i5 | 0;
 }
 __ZN7WebCore15ResourceRequestC2Ev(i4);
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i1 + 12 >> 2] | 0;
 }
 __ZN7WebCore11FrameLoader29loadedResourceFromMemoryCacheEPNS_14CachedResourceERNS_15ResourceRequestE(i7 + 80 | 0, i2, i4);
 i2 = (__ZNK7WebCore19ResourceRequestBase6isNullEv(i4 | 0) | 0) ^ 1;
 __ZN7WebCore15ResourceRequestD2Ev(i4);
 i5 = i2;
 STACKTOP = i3;
 return i5 | 0;
}
function __ZN3WTF10PassOwnPtrINS_11ListHashSetIPN7WebCore14CachedResourceELj256ENS_7PtrHashIS4_EEEEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 i3 = i2 + 28 | 0;
 if ((i1 | 0) != 0) {
  i4 = i1;
  while (1) {
   i1 = i4 + 8 | 0;
   i5 = HEAP32[i1 >> 2] | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   i7 = i6 + 8 | 0;
   do {
    if (i7 >>> 0 > i4 >>> 0) {
     i8 = 6;
    } else {
     if ((i7 + 3072 | 0) >>> 0 <= i4 >>> 0) {
      i8 = 6;
      break;
     }
     i9 = i6 | 0;
     HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
     HEAP32[i9 >> 2] = i4;
    }
   } while (0);
   if ((i8 | 0) == 6) {
    i8 = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   if ((i5 | 0) == 0) {
    break;
   } else {
    i4 = i5;
   }
  }
 }
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZdlPv(i4);
 }
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore14CachedResourceELj256ENS_7PtrHashIS4_EEEEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 i3 = i2 + 28 | 0;
 if ((i1 | 0) != 0) {
  i4 = i1;
  while (1) {
   i1 = i4 + 8 | 0;
   i5 = HEAP32[i1 >> 2] | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   i7 = i6 + 8 | 0;
   do {
    if (i7 >>> 0 > i4 >>> 0) {
     i8 = 6;
    } else {
     if ((i7 + 3072 | 0) >>> 0 <= i4 >>> 0) {
      i8 = 6;
      break;
     }
     i9 = i6 | 0;
     HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
     HEAP32[i9 >> 2] = i4;
    }
   } while (0);
   if ((i8 | 0) == 6) {
    i8 = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   if ((i5 | 0) == 0) {
    break;
   } else {
    i4 = i5;
   }
  }
 }
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZdlPv(i4);
 }
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore20CachedResourceLoader13clearPreloadsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 56 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i1 = i3;
  while (1) {
   i3 = HEAP32[i1 >> 2] | 0;
   i4 = i3 + 584 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - 1;
   do {
    if (!(__ZN7WebCore14CachedResource16deleteIfPossibleEv(i3) | 0)) {
     if ((HEAP32[i3 + 588 >> 2] & 3 | 0) != 0) {
      break;
     }
     __ZN7WebCore11MemoryCache5evictEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i3);
    }
   } while (0);
   i1 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
  }
 }
 __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore14CachedResourceELj256ENS_7PtrHashIS4_EEEEE5clearEv(i2);
 return;
}
function __ZNK7WebCore20CachedResourceLoader11cachePolicyENS_14CachedResource4TypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 48 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 }
 i1 = i5 + 80 | 0;
 if ((i2 | 0) != 0) {
  i4 = __ZNK7WebCore11FrameLoader22subresourceCachePolicyEv(i1) | 0;
  return i4 | 0;
 }
 if ((__ZNK7WebCore11FrameLoader8loadTypeEv(i1) | 0) == 9) {
  i4 = 3;
  return i4 | 0;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i6 = 0;
 } else {
  i6 = HEAP32[i4 + 12 >> 2] | 0;
 }
 i4 = (__ZNK7WebCore11FrameLoader8loadTypeEv(i6 + 80 | 0) | 0) == 4;
 return (i4 ? 3 : 1) | 0;
}
function __ZNK7WebCore20CachedResourceLoader14cachedResourceERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i4, HEAP32[i1 + 44 >> 2] | 0, i2);
 i2 = __ZNK7WebCore20CachedResourceLoader14cachedResourceERKNS_3URLE(i1, i4) | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return i2 | 0;
 }
 i4 = i1 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return i2 | 0;
 } else {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i3;
  return i2 | 0;
 }
 return 0;
}
function __ZN7WebCore20CachedResourceLoader12loadResourceENS_14CachedResource4TypeERNS_21CachedResourceRequestERKN3WTF6StringE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 | 0, __ZN7WebCoreL14createResourceENS_14CachedResource4TypeERNS_15ResourceRequestERKN3WTF6StringE(i3, i4 | 0, i5) | 0);
 i5 = __ZN7WebCore11memoryCacheEv() | 0;
 i4 = i1 | 0;
 if (__ZN7WebCore11MemoryCache3addEPNS_14CachedResourceE(i5, HEAP32[i4 >> 2] | 0) | 0) {
  return;
 }
 HEAP32[(HEAP32[i4 >> 2] | 0) + 608 >> 2] = i2;
 return;
}
function __ZN7WebCore20CachedResourceLoader22performPostLoadActionsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 __ZN7WebCore20CachedResourceLoader23checkForPendingPreloadsEv(i1);
 i1 = __ZN7WebCore18platformStrategiesEv() | 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 1](i1) | 0;
  HEAP32[i2 >> 2] = i4;
  i5 = i4;
 } else {
  i5 = i3;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[HEAP32[i5 >> 2] >> 2] & 1](i5) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 7](i3, 0);
 return;
}
function __ZNK7WebCore20CachedResourceLoader20shouldDeferImageLoadERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i3 + 12 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i4 + 84 >> 2] | 0;
   if (FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i5 >> 2] | 0) + 488 >> 2] & 1](i5, (HEAP8[i1 + 136 | 0] & 2) != 0, i2) | 0) {
    break;
   } else {
    i6 = 1;
   }
   return i6 | 0;
  }
 } while (0);
 i6 = (HEAP8[i1 + 136 | 0] & 1) == 0;
 return i6 | 0;
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
function __ZN7WebCore20CachedResourceLoader20requestXSLStyleSheetERNS_21CachedResourceRequestE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore20CachedResourceLoader15requestResourceENS_14CachedResource4TypeERNS_21CachedResourceRequestE(i5, i2, 7, i3);
 __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 | 0, HEAP32[i5 >> 2] | 0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i5 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20CachedResourceLoader20requestCSSStyleSheetERNS_21CachedResourceRequestE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore20CachedResourceLoader15requestResourceENS_14CachedResource4TypeERNS_21CachedResourceRequestE(i5, i2, 2, i3);
 __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 | 0, HEAP32[i5 >> 2] | 0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i5 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20CachedResourceLoader19requestMainResourceERNS_21CachedResourceRequestE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore20CachedResourceLoader15requestResourceENS_14CachedResource4TypeERNS_21CachedResourceRequestE(i5, i2, 0, i3);
 __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 | 0, HEAP32[i5 >> 2] | 0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i5 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20CachedResourceLoader18requestSVGDocumentERNS_21CachedResourceRequestE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore20CachedResourceLoader15requestResourceENS_14CachedResource4TypeERNS_21CachedResourceRequestE(i5, i2, 6, i3);
 __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 | 0, HEAP32[i5 >> 2] | 0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i5 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20CachedResourceLoader18requestRawResourceERNS_21CachedResourceRequestE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore20CachedResourceLoader15requestResourceENS_14CachedResource4TypeERNS_21CachedResourceRequestE(i5, i2, 5, i3);
 __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 | 0, HEAP32[i5 >> 2] | 0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i5 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20CachedResourceLoader13requestShaderERNS_21CachedResourceRequestE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore20CachedResourceLoader15requestResourceENS_14CachedResource4TypeERNS_21CachedResourceRequestE(i5, i2, 8, i3);
 __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 | 0, HEAP32[i5 >> 2] | 0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i5 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20CachedResourceLoader13requestScriptERNS_21CachedResourceRequestE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore20CachedResourceLoader15requestResourceENS_14CachedResource4TypeERNS_21CachedResourceRequestE(i5, i2, 3, i3);
 __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 | 0, HEAP32[i5 >> 2] | 0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i5 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20CachedResourceLoader11requestFontERNS_21CachedResourceRequestE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore20CachedResourceLoader15requestResourceENS_14CachedResource4TypeERNS_21CachedResourceRequestE(i5, i2, 4, i3);
 __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 | 0, HEAP32[i5 >> 2] | 0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i5 | 0);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore20CachedResourceLoader17clientDefersImageERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i3 + 12 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i5 + 84 >> 2] | 0;
 i4 = (FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i3 >> 2] | 0) + 488 >> 2] & 1](i3, (HEAP8[i1 + 136 | 0] & 2) != 0, i2) | 0) ^ 1;
 return i4 | 0;
}
function __ZN7WebCore20CachedResourceLoaderC2EPNS_14DocumentLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 1;
 _memset(i1 + 4 | 0, 0, 44) | 0;
 HEAP32[i1 + 48 >> 2] = i2;
 i2 = i1 + 80 | 0;
 _memset(i1 + 52 | 0, 0, 28) | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 136;
 HEAP32[i1 + 124 >> 2] = i1;
 i2 = i1 + 128 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 4;
 HEAP32[i2 + 4 >> 2] = 0;
 i2 = i1 + 136 | 0;
 HEAP8[i2] = HEAP8[i2] & -8 | 3;
 return;
}
function __ZN7WebCore20CachedResourceLoaderC1EPNS_14DocumentLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 1;
 _memset(i1 + 4 | 0, 0, 44) | 0;
 HEAP32[i1 + 48 >> 2] = i2;
 i2 = i1 + 80 | 0;
 _memset(i1 + 52 | 0, 0, 28) | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 136;
 HEAP32[i1 + 124 >> 2] = i1;
 i2 = i1 + 128 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 4;
 HEAP32[i2 + 4 >> 2] = 0;
 i2 = i1 + 136 | 0;
 HEAP8[i2] = HEAP8[i2] & -8 | 3;
 return;
}
function __ZN7WebCore5TimerINS_20CachedResourceLoaderEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 7](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 7](i4, i1);
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
function __ZN7WebCore20CachedResourceLoader20clearPendingPreloadsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 60 | 0;
 __ZN3WTF5DequeIN7WebCore20CachedResourceLoader14PendingPreloadELj0EE10destroyAllEv(i2);
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 64 >> 2] = 0;
 i2 = i1 + 68 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 72 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN7WebCore20CachedResourceLoader16setImagesEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 136 | 0;
 i4 = HEAP8[i3] | 0;
 if ((i2 & 1 | 0) == ((i4 & 255) >>> 1 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i4 & -3 | (i2 & 1) << 1;
 if (!i2) {
  return;
 }
 __ZN7WebCore20CachedResourceLoader25reloadImagesIfNotDeferredEv(i1);
 return;
}
function __ZNK7WebCore20CachedResourceLoader20removeCachedResourceEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3WTF7HashMapINS_6StringEN7WebCore20CachedResourceHandleINS2_14CachedResourceEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeERKS1_(i1 + 24 | 0, __ZNK7WebCore19ResourceRequestBase3urlEv(i2 + 48 | 0) | 0) | 0;
 return;
}
function __ZN7WebCore20CachedResourceLoader17setAutoLoadImagesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 136 | 0;
 i4 = HEAP8[i3] | 0;
 if ((i2 & 1 | 0) == (i4 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i4 & -2 | i2 & 1;
 if (!i2) {
  return;
 }
 __ZN7WebCore20CachedResourceLoader25reloadImagesIfNotDeferredEv(i1);
 return;
}
function __ZN7WebCore20CachedResourceLoader21incrementRequestCountEPKNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[i2 + 588 >> 2] | 0) >>> 7 & 15;
 if ((i3 | 0) == 5 | (i3 | 0) == 0) {
  return;
 }
 i3 = i1 + 52 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore20CachedResourceLoader21decrementRequestCountEPKNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[i2 + 588 >> 2] | 0) >>> 7 & 15;
 if ((i3 | 0) == 5 | (i3 | 0) == 0) {
  return;
 }
 i3 = i1 + 52 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
 return;
}
function __ZN7WebCore20CachedResourceLoader28defaultCachedResourceOptionsEv() {
 if (HEAP8[H_BASE + 160 | 0] | 0) {
  return H_BASE + 168 | 0;
 }
 _memset(H_BASE + 168 | 0, 0, 20) | 0;
 HEAP32[H_BASE + 188 >> 2] = 1;
 HEAP32[H_BASE + 192 >> 2] = 0;
 HEAP8[H_BASE + 160 | 0] = 1;
 return H_BASE + 168 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore20CachedResourceLoader41garbageCollectDocumentResourcesTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20CachedResourceLoader31garbageCollectDocumentResourcesEv(i1);
 return;
}
function __ZNK7WebCore20CachedResourceLoader5frameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 12 >> 2] | 0;
 return i3 | 0;
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
function runPostSets() {
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_did + 2;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore5TimerINS_20CachedResourceLoaderEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
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
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function __ZN7WebCore5TimerINS_20CachedResourceLoaderEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function b1(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(1);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
 return 0;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function b2(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(2);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
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
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_viiiii = [b1,b1];
  var FUNCTION_TABLE_did = [b2,b2,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore5TimerINS_20CachedResourceLoaderEE5firedEv,b3,__ZN7WebCore5TimerINS_20CachedResourceLoaderEED1Ev,b3,__ZN7WebCore5TimerINS_20CachedResourceLoaderEED0Ev,b3,__ZN7WebCore20CachedResourceLoaderD2Ev,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,__ZN7WebCore20CachedResourceLoaderC2EPNS_14DocumentLoaderE,b4,__ZN7WebCore20CachedResourceLoader41garbageCollectDocumentResourcesTimerFiredEPNS_5TimerIS0_EE,b4,b4,b4];
  var FUNCTION_TABLE_iiii = [b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6];
  var FUNCTION_TABLE_v = [b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_viiiii: dynCall_viiiii, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_viiiii": invoke_viiiii, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN3WTF10StringImpl19latin1CaseFoldTableE": __ZN3WTF10StringImpl19latin1CaseFoldTableE, "__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE": __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore20CachedResourceLoader13clearPreloadsEv","__ZN7WebCore20CachedResourceLoader7preloadENS_14CachedResource4TypeERNS_21CachedResourceRequestERKN3WTF6StringE","__ZN7WebCore20CachedResourceLoader12loadResourceENS_14CachedResource4TypeERNS_21CachedResourceRequestERKN3WTF6StringE","__ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore5TimerINS_20CachedResourceLoaderEE5firedEv","__ZN3WTF5DequeIN7WebCore20CachedResourceLoader14PendingPreloadELj0EE14expandCapacityEv","__ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPt","__ZNK7WebCore20CachedResourceLoader11cachePolicyENS_14CachedResource4TypeE","_memset","__ZN7WebCore20CachedResourceLoaderD2Ev","__ZN7WebCore19ResourceRequestBaseC2ERKS0_","__ZN7WebCore20CachedResourceLoader18requestRawResourceERNS_21CachedResourceRequestE","__ZNK7WebCore20CachedResourceLoader14cachedResourceERKNS_3URLE","__ZN7WebCore20CachedResourceLoader12requestImageERNS_21CachedResourceRequestE","__ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore14CachedResourceELj256ENS_7PtrHashIS4_EEEEED2Ev","__ZNK7WebCore20CachedResourceLoader17clientDefersImageERKNS_3URLE","__ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore14CachedResourceELj256ENS_7PtrHashIS4_EEEEE5clearEv","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore14CachedResourceELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6expandEPS6_","__ZN7WebCore20CachedResourceLoader18requestSVGDocumentERNS_21CachedResourceRequestE","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZNK7WebCore20CachedResourceLoader27determineRevalidationPolicyENS_14CachedResource4TypeERNS_15ResourceRequestEbPS1_NS_21CachedResourceRequest11DeferOptionE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_22IdentityHashTranslatorIS7_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_","__ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEEcEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore20CachedResourceLoader21decrementRequestCountEPKNS_14CachedResourceE","__ZNK7WebCore20CachedResourceLoader20shouldDeferImageLoadERKNS_3URLE","__ZN7WebCore20CachedResourceLoader41garbageCollectDocumentResourcesTimerFiredEPNS_5TimerIS0_EE","__ZN7WebCore20CachedResourceLoader49shouldContinueAfterNotifyingLoadedFromMemoryCacheEPNS_14CachedResourceE","__ZN3WTF5DequeIN7WebCore20CachedResourceLoader14PendingPreloadELj0EE10destroyAllEv","__ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE","__ZN7WebCore5TimerINS_20CachedResourceLoaderEED1Ev","__ZN3WTF10PassOwnPtrINS_11ListHashSetIPN7WebCore14CachedResourceELj256ENS_7PtrHashIS4_EEEEED2Ev","__ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsINS_6StringEEENS1_IN7WebCore20CachedResourceHandleINS4_14CachedResourceEEEEEE10emptyValueEv","__ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore14CachedResourceELj256ENS_7PtrHashIS4_EEEEEaSERKNS_10PassOwnPtrIS7_EE","__ZN3WTF7HashMapINS_6StringEN7WebCore20CachedResourceHandleINS2_14CachedResourceEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeERKS1_","__ZN3WTF7HashMapINS_6StringEN7WebCore20CachedResourceHandleINS2_14CachedResourceEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE4findERKS1_","__ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j","__ZN7WebCore15ResourceRequestD2Ev","__ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPh","__ZN7WebCore5TimerINS_20CachedResourceLoaderEED0Ev","__ZN7WebCore20CachedResourceLoader20clearPendingPreloadsEv","__ZN7WebCore20CachedResourceLoader24requestUserCSSStyleSheetERNS_21CachedResourceRequestE","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore14CachedResourceELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EES4_PNS_24ListHashSetNodeAllocatorIS4_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_","__ZN7WebCore20CachedResourceLoader14requestPreloadENS_14CachedResource4TypeERNS_21CachedResourceRequestERKN3WTF6StringE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore20CachedResourceHandleINS3_14CachedResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore20CachedResourceLoader31garbageCollectDocumentResourcesEv","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","__ZN7WebCore20CachedResourceLoaderC2EPNS_14DocumentLoaderE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_","__ZN7WebCore20CachedResourceLoader19requestMainResourceERNS_21CachedResourceRequestE","__ZN7WebCoreL14createResourceENS_14CachedResource4TypeERNS_15ResourceRequestERKN3WTF6StringE","__ZNK7WebCore20CachedResourceLoader20removeCachedResourceEPNS_14CachedResourceE","__ZN7WebCore19ResourceRequestBaseD2Ev","__ZN7WebCore20CachedResourceLoader17setAutoLoadImagesEb","__ZN7WebCore20CachedResourceLoader23checkForPendingPreloadsEv","__ZN3WTF5DequeIN7WebCore20CachedResourceLoader14PendingPreloadELj0EE9takeFirstEv","__ZN7WebCore20CachedResourceLoader20requestCSSStyleSheetERNS_21CachedResourceRequestE","__ZNK7WebCore20CachedResourceLoader11isPreloadedERKN3WTF6StringE","_strlen","__ZNK7WebCore20CachedResourceLoader24printAccessDeniedMessageERKNS_3URLE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore20CachedResourceHandleINS3_14CachedResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_","__ZN7WebCore20CachedResourceLoader22performPostLoadActionsEv","__ZN7WebCore20CachedResourceLoader11requestFontERNS_21CachedResourceRequestE","__ZNK7WebCore20CachedResourceLoader20checkInsecureContentENS_14CachedResource4TypeERKNS_3URLE","__ZN7WebCore20CachedResourceLoader20requestXSLStyleSheetERNS_21CachedResourceRequestE","__ZN7WebCore20CachedResourceLoader15requestResourceENS_14CachedResource4TypeERNS_21CachedResourceRequestE","__ZNK7WebCore20CachedResourceLoader14cachedResourceERKN3WTF6StringE","__ZN7WebCore20CachedResourceLoader28defaultCachedResourceOptionsEv","__ZN3WTF12StringAppendINS0_INS0_IPKcNS_6StringEEES2_EES3_E7writeToEPt","__ZN7WebCore21CachedResourceRequestC1ERKS0_","_memcpy","__ZN7WebCore20CachedResourceLoader16setImagesEnabledEb","__ZN7WebCore20CachedResourceLoader10canRequestENS_14CachedResource4TypeERKNS_3URLERKNS_21ResourceLoaderOptionsEb","__ZN7WebCore20CachedResourceLoader13requestScriptERNS_21CachedResourceRequestE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E8reinsertEOS4_","__ZN7WebCore20CachedResourceLoader13requestShaderERNS_21CachedResourceRequestE","__ZN7WebCore15ResourceRequestC2Ev","__ZNK7WebCore20CachedResourceLoader5frameEv","__ZNK3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EcvS3_Ev","__ZN7WebCore20CachedResourceLoader25reloadImagesIfNotDeferredEv","__ZN7WebCore20CachedResourceLoader21incrementRequestCountEPKNS_14CachedResourceE","__ZN7WebCore20CachedResourceLoader18revalidateResourceERKNS_21CachedResourceRequestEPNS_14CachedResourceE","__ZN7WebCore20CachedResourceLoader8loadDoneEPNS_14CachedResourceEb"]

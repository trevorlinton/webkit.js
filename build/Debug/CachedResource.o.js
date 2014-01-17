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
H_BASE = parentModule["_malloc"](624 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 624;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14CachedResourceC1ERKNS_15ResourceRequestENS0_4TypeE;
var __ZN7WebCore14CachedResourceD1Ev;
var __ZN7WebCore14CachedResource22CachedResourceCallbackC1EPS0_PNS_20CachedResourceClientE;
/* memory initializer */ allocate([120,45,119,101,98,107,105,116,45,0,0,0,0,0,0,0,120,45,99,111,110,116,101,110,116,45,0,0,0,0,0,0,99,111,110,116,101,110,116,45,0,0,0,0,0,0,0,0,104,116,116,112,115,0,0,0,73,102,45,78,111,110,101,45,77,97,116,99,104,0,0,0,73,102,45,77,111,100,105,102,105,101,100,45,83,105,110,99,101,0,0,0,0,0,0,0,109,97,120,45,97,103,101,61,48,0,0,0,0,0,0,0,82,101,102,101,114,101,114,0,65,99,99,101,112,116,0,0,120,45,120,115,115,45,112,114,111,116,101,99,116,105,111,110,0,0,0,0,0,0,0,0,120,45,102,114,97,109,101,45,111,112,116,105,111,110,115,0,119,119,119,45,97,117,116,104,101,110,116,105,99,97,116,101,0,0,0,0,0,0,0,0,67,97,99,104,101,45,67,111,110,116,114,111,108,0,0,0,117,112,103,114,97,100,101,0,116,114,97,110,115,102,101,114,45,101,110,99,111,100,105,110,103,0,0,0,0,0,0,0,116,114,97,105,108,101,114,0,112,114,111,120,121,45,99,111,110,110,101,99,116,105,111,110,0,0,0,0,0,0,0,0,108,97,115,116,45,109,111,100,105,102,105,101,100,112,114,111,120,121,45,97,117,116,104,101,110,116,105,99,97,116,101,0,107,101,101,112,45,97,108,105,118,101,0,0,0,0,0,0,101,120,112,105,114,101,115,0,101,116,97,103,0,0,0,0,99,111,110,110,101,99,116,105,111,110,0,0,0,0,0,0,97,108,108,111,119,0,0,0,69,84,97,103,0,0,0,0,76,97,115,116,45,77,111,100,105,102,105,101,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
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
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore14CachedResourceE=(H_BASE+456)|0;
  var __ZTVN7WebCore5TimerINS_14CachedResource22CachedResourceCallbackEEE=(H_BASE+392)|0;
  var __ZTVN7WebCore22DeferrableOneShotTimerINS_14CachedResourceEEE=(H_BASE+424)|0;
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
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viii=env.invoke_viii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore14CachedResource4loadEPNS_20CachedResourceLoaderERKNS_21ResourceLoaderOptionsE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 272 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 216 | 0;
 i11 = i4 + 264 | 0;
 if ((__ZNK7WebCore20CachedResourceLoader5frameEv(i2) | 0) == 0) {
  if ((HEAP32[i1 + 612 >> 2] | 0) != 0) {
   __ZN7WebCore11MemoryCache18revalidationFailedEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i1);
  }
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 31](i1, 3);
  STACKTOP = i4;
  return;
 }
 i12 = __ZNK7WebCore20CachedResourceLoader5frameEv(i2) | 0;
 i13 = i12 + 80 | 0;
 L8 : do {
  if ((HEAP32[i3 + 20 >> 2] | 0) == 1) {
   do {
    if ((HEAP32[i12 + 120 >> 2] | 0) != 0) {
     if ((__ZNK7WebCore11FrameLoader20activeDocumentLoaderEv(i13) | 0) == 0) {
      break;
     }
     if ((HEAP8[(__ZNK7WebCore11FrameLoader20activeDocumentLoaderEv(i13) | 0) + 974 | 0] & 1) == 0) {
      break L8;
     }
    }
   } while (0);
   if ((HEAP32[i1 + 612 >> 2] | 0) != 0) {
    __ZN7WebCore11MemoryCache18revalidationFailedEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i1);
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 31](i1, 3);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i13 = i1 + 240 | 0;
 i12 = i3;
 HEAP32[i13 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i13 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
 HEAP32[i13 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
 HEAP32[i13 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
 HEAP32[i13 + 16 >> 2] = HEAP32[i12 + 16 >> 2];
 HEAP32[i13 + 20 >> 2] = HEAP32[i12 + 20 >> 2];
 HEAP32[i13 + 24 >> 2] = HEAP32[i12 + 24 >> 2];
 i12 = i1 + 588 | 0;
 HEAP8[i12] = HEAP8[i12] | 32;
 i13 = i1 + 232 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = i16 + 2;
   i17 = (HEAP32[i14 + 4 >> 2] | 0) == 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    if (i17) {
     break;
    }
   } else {
    HEAP32[i15 >> 2] = i16;
    if (i17) {
     break;
    }
   }
   i17 = i5 | 0;
   i16 = HEAP32[i13 >> 2] | 0;
   HEAP32[i17 >> 2] = i16;
   if ((i16 | 0) != 0) {
    i15 = i16 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   }
   __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i1 + 48 | 0, H_BASE + 128 | 0, i5);
   i15 = HEAP32[i17 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i17 = i15 | 0;
   i16 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i17 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i5 = i1 + 612 | 0;
 i13 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i14 = i13 + 272 | 0;
   __ZNK7WebCore20ResourceResponseBase15httpHeaderFieldEPKc(i6, i14, H_BASE + 376 | 0);
   __ZNK7WebCore20ResourceResponseBase15httpHeaderFieldEPKc(i7, i14, H_BASE + 368 | 0);
   i14 = i6 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i18 = 25;
   } else {
    if ((HEAP32[i16 + 4 >> 2] | 0) == 0) {
     i18 = 25;
    } else {
     i18 = 27;
    }
   }
   do {
    if ((i18 | 0) == 25) {
     i16 = HEAP32[i7 >> 2] | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     if ((HEAP32[i16 + 4 >> 2] | 0) == 0) {
      i19 = i16;
      i18 = 38;
     } else {
      i18 = 27;
     }
    }
   } while (0);
   do {
    if ((i18 | 0) == 27) {
     do {
      if ((__ZNK7WebCore20CachedResourceLoader11cachePolicyENS_14CachedResource4TypeE(i2, (HEAP32[i12 >> 2] | 0) >>> 7 & 15) | 0) == 2) {
       __ZN3WTF6StringC1EPKc(i8, H_BASE + 104 | 0);
       __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i1 + 48 | 0, H_BASE + 200 | 0, i8);
       i16 = HEAP32[i8 >> 2] | 0;
       if ((i16 | 0) == 0) {
        break;
       }
       i17 = i16 | 0;
       i15 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
       if ((i15 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i16);
        break;
       } else {
        HEAP32[i17 >> 2] = i15;
        break;
       }
      }
     } while (0);
     i15 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i15 | 0) != 0) {
       if ((HEAP32[i15 + 4 >> 2] | 0) == 0) {
        break;
       }
       __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i1 + 48 | 0, H_BASE + 80 | 0, i6);
      }
     } while (0);
     i15 = i7 | 0;
     i17 = HEAP32[i15 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     if ((HEAP32[i17 + 4 >> 2] | 0) == 0) {
      i19 = i17;
      i18 = 38;
      break;
     }
     __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i1 + 48 | 0, H_BASE + 64 | 0, i7);
     i17 = HEAP32[i15 >> 2] | 0;
     if ((i17 | 0) != 0) {
      i19 = i17;
      i18 = 38;
     }
    }
   } while (0);
   do {
    if ((i18 | 0) == 38) {
     i17 = i19 | 0;
     i15 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i17 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i15 = HEAP32[i14 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i17 = i15 | 0;
   i16 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i17 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i19 = i1 + 48 | 0;
 __ZN7WebCore19ResourceRequestBase11setPriorityENS_20ResourceLoadPriorityE(i19, HEAP32[i1 + 268 >> 2] | 0);
 i18 = i12;
 if ((HEAP32[i18 >> 2] & 1920 | 0) != 0) {
  __ZN7WebCore14CachedResource27addAdditionalRequestHeadersEPNS_20CachedResourceLoaderE(i1, i2);
 }
 i12 = i9 | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i12, i19);
 i19 = HEAP32[i1 + 208 >> 2] | 0;
 HEAP32[i9 + 160 >> 2] = i19;
 if ((i19 | 0) != 0) {
  i7 = i19 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i1 + 212 >> 2] | 0;
 HEAP32[i9 + 164 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i19 = i7 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
 }
 i19 = HEAP32[i1 + 216 >> 2] | 0;
 HEAP32[i9 + 168 >> 2] = i19;
 if ((i19 | 0) != 0) {
  i7 = i19 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i1 + 220 >> 2] | 0;
 HEAP32[i9 + 172 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i19 = i7 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
 }
 HEAP8[i9 + 176 | 0] = HEAP8[i1 + 224 | 0] & 1;
 HEAP8[i9 + 177 | 0] = HEAP8[i1 + 225 | 0] & 1;
 HEAP8[i9 + 178 | 0] = HEAP8[i1 + 226 | 0] & 1;
 HEAP32[i9 + 180 >> 2] = HEAP32[i1 + 228 >> 2];
 i19 = i1 + 528 | 0;
 i7 = i19 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) != 0) {
   i6 = __ZNK7WebCore19ResourceRequestBase3urlEv(i12) | 0;
   i8 = i10 | 0;
   i13 = HEAP32[i6 >> 2] | 0;
   HEAP32[i8 >> 2] = i13;
   if ((i13 | 0) != 0) {
    i16 = i13 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   }
   i16 = i6 + 4 | 0;
   i13 = i10 + 4 | 0;
   i17 = HEAP8[i13] & -2 | HEAP8[i16] & 1;
   HEAP8[i13] = i17;
   HEAP8[i13] = i17 & -3 | HEAP8[i16] & 2;
   HEAP32[i10 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
   HEAP32[i10 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
   HEAP32[i10 + 16 >> 2] = HEAP32[i6 + 16 >> 2];
   HEAP32[i10 + 20 >> 2] = HEAP32[i6 + 20 >> 2];
   HEAP32[i10 + 24 >> 2] = HEAP32[i6 + 24 >> 2];
   HEAP32[i10 + 28 >> 2] = HEAP32[i6 + 28 >> 2];
   HEAP32[i10 + 32 >> 2] = HEAP32[i6 + 32 >> 2];
   HEAP32[i10 + 36 >> 2] = HEAP32[i6 + 36 >> 2];
   HEAP32[i10 + 40 >> 2] = HEAP32[i6 + 40 >> 2];
   HEAP32[i10 + 44 >> 2] = HEAP32[i6 + 44 >> 2];
   __ZN7WebCore3URL21setFragmentIdentifierERKN3WTF6StringE(i10, i19);
   __ZN7WebCore19ResourceRequestBase6setURLERKNS_3URLE(i12, i10);
   i6 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   do {
    if ((i6 | 0) != 0) {
     i16 = i6 | 0;
     i17 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i16 >> 2] = i17;
      break;
     }
    }
   } while (0);
   i6 = HEAP32[i8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i14 = i6 | 0;
   i17 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i14 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i7 = __ZN7WebCore18platformStrategiesEv() | 0;
 i10 = i7 + 12 | 0;
 i19 = HEAP32[i10 >> 2] | 0;
 if ((i19 | 0) == 0) {
  i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] & 15](i7) | 0;
  HEAP32[i10 >> 2] = i17;
  i20 = i17;
 } else {
  i20 = i19;
 }
 i19 = FUNCTION_TABLE_ii[HEAP32[HEAP32[i20 >> 2] >> 2] & 15](i20) | 0;
 i20 = HEAP32[HEAP32[i19 >> 2] >> 2] | 0;
 i17 = __ZNK7WebCore20CachedResourceLoader5frameEv(i2) | 0;
 i2 = __ZNK7WebCore19ResourceRequestBase8priorityEv(i12) | 0;
 FUNCTION_TABLE_viiiiiii[i20 & 1](i11, i19, i17, i1, i9, i2, i3);
 i3 = i11 | 0;
 i11 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i2 = i1 + 236 | 0;
 i17 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i11;
 do {
  if ((i17 | 0) != 0) {
   i11 = i17 + 4 | 0;
   i19 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 31](i17);
    break;
   } else {
    HEAP32[i11 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i3 = i17 + 4 | 0;
   i19 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 31](i17);
    break;
   } else {
    HEAP32[i3 >> 2] = i19;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   __ZN7WebCore11MemoryCache18revalidationFailedEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i1);
  }
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 31](i1, 3);
 } else {
  HEAP32[i18 >> 2] = HEAP32[i18 >> 2] & -14337 | 2048;
 }
 __ZN7WebCore15ResourceRequestD2Ev(i9);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14CachedResource34switchClientsToRevalidatedResourceEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i1 + 588 | 0;
 HEAP8[i6] = HEAP8[i6] | 64;
 i7 = i1 + 620 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i1 + 624 >> 2] | 0;
 i11 = i9 + (i10 << 2) | 0;
 L1 : do {
  if ((HEAP32[i1 + 632 >> 2] | 0) == 0) {
   i12 = i9;
  } else {
   L3 : do {
    if ((i10 | 0) == 0) {
     i13 = i9;
    } else {
     i14 = i9;
     while (1) {
      i15 = HEAP32[i14 >> 2] | 0;
      if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
       i13 = i14;
       break L3;
      }
      i15 = i14 + 4 | 0;
      if ((i15 | 0) == (i11 | 0)) {
       i12 = i9;
       break L1;
      } else {
       i14 = i15;
      }
     }
    }
   } while (0);
   if ((i13 | 0) == (i11 | 0)) {
    i12 = i9;
    break;
   }
   i14 = i1 + 612 | 0;
   i15 = i1 + 580 | 0;
   i16 = i13;
   L9 : while (1) {
    i17 = HEAP32[i16 >> 2] | 0;
    HEAP32[i17 >> 2] = HEAP32[i14 >> 2];
    i18 = HEAP32[i14 >> 2] | 0;
    HEAP32[i3 >> 2] = i17;
    i17 = i18 + 580 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    if ((HEAP32[i18 + 612 >> 2] | 0) != 0) {
     __ZN3WTF9HashTableIPN7WebCore24CachedResourceHandleBaseES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i4, i18 + 620 | 0, i3, i3);
    }
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) - 1;
    i18 = i16 + 4 | 0;
    if ((i18 | 0) == (i11 | 0)) {
     break;
    } else {
     i19 = i18;
    }
    while (1) {
     i18 = HEAP32[i19 >> 2] | 0;
     if (!((i18 | 0) == (-1 | 0) | (i18 | 0) == 0)) {
      break;
     }
     i18 = i19 + 4 | 0;
     if ((i18 | 0) == (i11 | 0)) {
      break L9;
     } else {
      i19 = i18;
     }
    }
    if ((i19 | 0) == (i11 | 0)) {
     break;
    } else {
     i16 = i19;
    }
   }
   i12 = HEAP32[i8 >> 2] | 0;
  }
 } while (0);
 if ((i12 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i12);
  _memset(i7 | 0, 0, 16) | 0;
 }
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i12 = HEAP32[i1 + 8 >> 2] | 0;
 i8 = i7 + (i12 << 3) | 0;
 L23 : do {
  if ((HEAP32[i1 + 16 >> 2] | 0) != 0) {
   L25 : do {
    if ((i12 | 0) == 0) {
     i20 = i7;
    } else {
     i19 = i7;
     while (1) {
      i11 = HEAP32[i19 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i20 = i19;
       break L25;
      }
      i19 = i19 + 8 | 0;
      if ((i19 | 0) == (i8 | 0)) {
       break L23;
      }
     }
    }
   } while (0);
   if ((i20 | 0) == (i8 | 0)) {
    break;
   }
   i19 = i5;
   i11 = 0;
   i3 = 0;
   i4 = 0;
   i13 = i20;
   L31 : while (1) {
    HEAP32[i5 >> 2] = HEAP32[i13 >> 2];
    i9 = HEAP32[i13 + 4 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i21 = i11;
     i22 = i3;
     i23 = i4;
    } else {
     i10 = i11;
     i16 = i3;
     i15 = i4;
     i14 = i9;
     while (1) {
      if ((i10 | 0) == (i16 | 0)) {
       i9 = i16 + 1 | 0;
       do {
        if (i15 >>> 0 > i5 >>> 0) {
         i24 = 28;
        } else {
         if ((i15 + (i16 << 2) | 0) >>> 0 <= i5 >>> 0) {
          i24 = 28;
          break;
         }
         i18 = i19 - i15 >> 2;
         i17 = i9 + (i16 >>> 2) | 0;
         i25 = i17 >>> 0 > 16 >>> 0 ? i17 : 16;
         i17 = i25 >>> 0 > i9 >>> 0 ? i25 : i9;
         do {
          if (i16 >>> 0 < i17 >>> 0) {
           if (i17 >>> 0 > 1073741823 >>> 0) {
            i24 = 35;
            break L31;
           }
           i25 = __ZN3WTF18fastMallocGoodSizeEj(i17 << 2) | 0;
           i26 = i25 >>> 2;
           i27 = __ZN3WTF10fastMallocEj(i25) | 0;
           i25 = i27;
           i28 = i15;
           _memcpy(i27 | 0, i28 | 0, i16 << 2) | 0;
           if ((i15 | 0) == 0) {
            i29 = i25;
            i30 = i26;
            break;
           }
           i27 = (i25 | 0) == (i15 | 0);
           __ZN3WTF8fastFreeEPv(i28);
           i29 = i27 ? 0 : i25;
           i30 = i27 ? 0 : i26;
          } else {
           i29 = i15;
           i30 = i16;
          }
         } while (0);
         i31 = i29 + (i18 << 2) | 0;
         i32 = i29;
         i33 = i30;
        }
       } while (0);
       do {
        if ((i24 | 0) == 28) {
         i24 = 0;
         i17 = i9 + (i16 >>> 2) | 0;
         i26 = i17 >>> 0 > 16 >>> 0 ? i17 : 16;
         i17 = i26 >>> 0 > i9 >>> 0 ? i26 : i9;
         if (i16 >>> 0 >= i17 >>> 0) {
          i31 = i5;
          i32 = i15;
          i33 = i16;
          break;
         }
         if (i17 >>> 0 > 1073741823 >>> 0) {
          i24 = 30;
          break L31;
         }
         i26 = __ZN3WTF18fastMallocGoodSizeEj(i17 << 2) | 0;
         i17 = i26 >>> 2;
         i27 = __ZN3WTF10fastMallocEj(i26) | 0;
         i26 = i27;
         i25 = i15;
         _memcpy(i27 | 0, i25 | 0, i16 << 2) | 0;
         if ((i15 | 0) == 0) {
          i31 = i5;
          i32 = i26;
          i33 = i17;
          break;
         }
         i27 = (i26 | 0) == (i15 | 0);
         __ZN3WTF8fastFreeEPv(i25);
         i31 = i5;
         i32 = i27 ? 0 : i26;
         i33 = i27 ? 0 : i17;
        }
       } while (0);
       HEAP32[i32 + (i16 << 2) >> 2] = HEAP32[i31 >> 2];
       i34 = i32;
       i35 = i33;
       i36 = i9;
      } else {
       HEAP32[i15 + (i10 << 2) >> 2] = HEAP32[i5 >> 2];
       i34 = i15;
       i35 = i16;
       i36 = i10 + 1 | 0;
      }
      i17 = i14 - 1 | 0;
      if ((i17 | 0) == 0) {
       i21 = i36;
       i22 = i35;
       i23 = i34;
       break;
      } else {
       i10 = i36;
       i16 = i35;
       i15 = i34;
       i14 = i17;
      }
     }
    }
    i14 = i13 + 8 | 0;
    if ((i14 | 0) == (i8 | 0)) {
     i24 = 22;
     break;
    } else {
     i37 = i14;
    }
    while (1) {
     i14 = HEAP32[i37 >> 2] | 0;
     if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
      break;
     }
     i14 = i37 + 8 | 0;
     if ((i14 | 0) == (i8 | 0)) {
      i24 = 22;
      break L31;
     } else {
      i37 = i14;
     }
    }
    if ((i37 | 0) == (i8 | 0)) {
     i24 = 22;
     break;
    } else {
     i11 = i21;
     i3 = i22;
     i4 = i23;
     i13 = i37;
    }
   }
   if ((i24 | 0) == 30) {
    _WTFCrash();
   } else if ((i24 | 0) == 35) {
    _WTFCrash();
   } else if ((i24 | 0) == 22) {
    i13 = (i21 | 0) == 0;
    do {
     if (!i13) {
      i4 = 0;
      while (1) {
       __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i1, HEAP32[i23 + (i4 << 2) >> 2] | 0);
       i4 = i4 + 1 | 0;
       if (i4 >>> 0 >= i21 >>> 0) {
        break;
       }
      }
      if (i13) {
       i38 = 0;
      } else {
       i4 = i1 + 612 | 0;
       i3 = 0;
       while (1) {
        __ZN7WebCore14CachedResource14addClientToSetEPNS_20CachedResourceClientE(HEAP32[i4 >> 2] | 0, HEAP32[i23 + (i3 << 2) >> 2] | 0) | 0;
        i11 = i3 + 1 | 0;
        if (i11 >>> 0 < i21 >>> 0) {
         i3 = i11;
        } else {
         i38 = i21;
         break;
        }
       }
      }
      if ((i38 | 0) == 0) {
       break;
      }
      i3 = i1 + 612 | 0;
      i4 = 0;
      while (1) {
       i11 = HEAP32[i3 >> 2] | 0;
       i19 = HEAP32[i11 + 4 >> 2] | 0;
       L75 : do {
        if ((i19 | 0) != 0) {
         i14 = HEAP32[i11 + 12 >> 2] | 0;
         i15 = HEAP32[i23 + (i4 << 2) >> 2] | 0;
         i16 = i15;
         i10 = i16 + ~(i16 << 15) | 0;
         i16 = (i10 >>> 10 ^ i10) * 9 & -1;
         i10 = i16 >>> 6 ^ i16;
         i16 = i10 + ~(i10 << 11) | 0;
         i10 = i16 >>> 16 ^ i16;
         i16 = i10 & i14;
         i17 = i19 + (i16 << 3) | 0;
         i27 = HEAP32[i17 >> 2] | 0;
         if ((i27 | 0) == (i15 | 0)) {
          i39 = i17;
         } else {
          i17 = (i10 >>> 23) + ~i10 | 0;
          i10 = i17 << 12 ^ i17;
          i17 = i10 >>> 7 ^ i10;
          i10 = i17 << 2 ^ i17;
          i17 = i10 >>> 20 ^ i10 | 1;
          i10 = 0;
          i26 = i16;
          i16 = i27;
          while (1) {
           if ((i16 | 0) == 0) {
            break L75;
           }
           i27 = (i10 | 0) == 0 ? i17 : i10;
           i25 = i27 + i26 & i14;
           i28 = i19 + (i25 << 3) | 0;
           i40 = HEAP32[i28 >> 2] | 0;
           if ((i40 | 0) == (i15 | 0)) {
            i39 = i28;
            break;
           } else {
            i10 = i27;
            i26 = i25;
            i16 = i40;
           }
          }
         }
         if ((i39 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 40 >> 2] & 31](i11, i15);
        }
       } while (0);
       i4 = i4 + 1 | 0;
       if (i4 >>> 0 >= i38 >>> 0) {
        break;
       }
      }
     }
    } while (0);
    HEAP8[i6] = HEAP8[i6] & -65;
    if ((i23 | 0) == 0) {
     STACKTOP = i2;
     return;
    }
    __ZN3WTF8fastFreeEPv(i23);
    STACKTOP = i2;
    return;
   }
  }
 } while (0);
 HEAP8[i6] = HEAP8[i6] & -65;
 STACKTOP = i2;
 return;
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
function __ZN7WebCore14CachedResource27addAdditionalRequestHeadersEPNS_20CachedResourceLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 72 | 0;
 i14 = (__ZNK7WebCore20CachedResourceLoader5frameEv(i2) | 0) + 80 | 0;
 i15 = i4 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i5 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i1 + 48 | 0;
 i1 = i17 | 0;
 __ZNK7WebCore19ResourceRequestBase15httpHeaderFieldEPKc(i6, i1, H_BASE + 120 | 0);
 i18 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i18 | 0) == 0) {
   __ZNK7WebCore11FrameLoader16outgoingReferrerEv(i7, i14);
   i6 = i7 | 0;
   i19 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   i20 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = i19;
   do {
    if ((i20 | 0) != 0) {
     i19 = i20 | 0;
     i21 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i19 >> 2] = i21;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i21 = i20 | 0;
     i19 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i21 >> 2] = i19;
      break;
     }
    }
   } while (0);
   __ZNK7WebCore11FrameLoader14outgoingOriginEv(i8, i14);
   i20 = i8 | 0;
   i6 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   i19 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = i6;
   do {
    if ((i19 | 0) != 0) {
     i6 = i19 | 0;
     i21 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i6 >> 2] = i21;
      break;
     }
    }
   } while (0);
   i19 = HEAP32[i20 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i21 = i19 | 0;
   i6 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i21 >> 2] = i6;
    break;
   }
  } else {
   i6 = i18 | 0;
   i21 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
   } else {
    HEAP32[i6 >> 2] = i21;
   }
   __ZNK7WebCore19ResourceRequestBase15httpHeaderFieldEPKc(i9, i1, H_BASE + 120 | 0);
   i21 = i9 | 0;
   i6 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   i19 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = i6;
   do {
    if ((i19 | 0) != 0) {
     i6 = i19 | 0;
     i22 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i6 >> 2] = i22;
      break;
     }
    }
   } while (0);
   i19 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i20 = i19 | 0;
     i22 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i20 >> 2] = i22;
      break;
     }
    }
   } while (0);
   __ZN7WebCore14SecurityOrigin16createFromStringERKN3WTF6StringE(i11, i4);
   i19 = i11 | 0;
   __ZNK7WebCore14SecurityOrigin8toStringEv(i10, HEAP32[i19 >> 2] | 0);
   i21 = i10 | 0;
   i22 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   i20 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = i22;
   do {
    if ((i20 | 0) != 0) {
     i22 = i20 | 0;
     i6 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i22 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i6 = i20 | 0;
     i22 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i6 >> 2] = i22;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i19 >> 2] | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   i21 = i20 | 0;
   if (((tempValue = HEAP32[i21 >> 2] | 0, HEAP32[i21 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i20);
   __ZN3WTF8fastFreeEPv(i20);
  }
 } while (0);
 i10 = HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 1944 >> 2] | 0;
 __ZN7WebCore14SecurityPolicy22generateReferrerHeaderENS_14ReferrerPolicyERKNS_3URLERKN3WTF6StringE(i12, i10, __ZNK7WebCore19ResourceRequestBase3urlEv(i1) | 0, i4);
 i10 = i12 | 0;
 i12 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i2 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = i12;
 do {
  if ((i2 | 0) != 0) {
   i12 = i2 | 0;
   i11 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i12 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i10 = i2 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i10 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i23 = 50;
  } else {
   if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
    i23 = 50;
    break;
   }
   __ZNK7WebCore19ResourceRequestBase15httpHeaderFieldEPKc(i13, i1, H_BASE + 120 | 0);
   i11 = HEAP32[i13 >> 2] | 0;
   if ((i11 | 0) == 0) {
    __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i1, H_BASE + 120 | 0, i4);
    break;
   }
   i10 = i11 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i10 >> 2] = i12;
    break;
   }
  }
 } while (0);
 if ((i23 | 0) == 50) {
  __ZN7WebCore19ResourceRequestBase17clearHTTPReferrerEv(i1);
 }
 __ZN7WebCore11FrameLoader21addHTTPOriginIfNeededERNS_15ResourceRequestERKN3WTF6StringE(i17, i5);
 __ZN7WebCore11FrameLoader34addExtraFieldsToSubresourceRequestERNS_15ResourceRequestE(i14, i17);
 i17 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i16 = i17 | 0;
   i14 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i16 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i15 >> 2] | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i15 = i17 | 0;
 i14 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
 if ((i14 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i17);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i15 >> 2] = i14;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashMapIPN7WebCore20CachedResourceClientENS_6OwnPtrINS1_14CachedResource22CachedResourceCallbackEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENSA_IS7_EEE4takeERKS3_(i5, i1 + 24 | 0, i4);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = i1 + 4 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = HEAP32[i1 + 8 >> 2] | 0;
   i9 = i8 << 3 | 0;
   i10 = 0;
   i11 = i8;
  } else {
   i8 = HEAP32[i1 + 12 >> 2] | 0;
   i12 = HEAP32[i4 >> 2] | 0;
   i13 = i12;
   i14 = i13 + ~(i13 << 15) | 0;
   i13 = (i14 >>> 10 ^ i14) * 9 & -1;
   i14 = i13 >>> 6 ^ i13;
   i13 = i14 + ~(i14 << 11) | 0;
   i14 = i13 >>> 16 ^ i13;
   i13 = i14 & i8;
   i15 = i7 + (i13 << 3) | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   L10 : do {
    if ((i16 | 0) == (i12 | 0)) {
     i17 = i15;
    } else {
     i18 = (i14 >>> 23) + ~i14 | 0;
     i19 = i18 << 12 ^ i18;
     i18 = i19 >>> 7 ^ i19;
     i19 = i18 << 2 ^ i18;
     i18 = i19 >>> 20 ^ i19 | 1;
     i19 = 0;
     i20 = i13;
     i21 = i16;
     while (1) {
      if ((i21 | 0) == 0) {
       i17 = 0;
       break L10;
      }
      i22 = (i19 | 0) == 0 ? i18 : i19;
      i23 = i22 + i20 & i8;
      i24 = i7 + (i23 << 3) | 0;
      i25 = HEAP32[i24 >> 2] | 0;
      if ((i25 | 0) == (i12 | 0)) {
       i17 = i24;
       break;
      } else {
       i19 = i22;
       i20 = i23;
       i21 = i25;
      }
     }
    }
   } while (0);
   i12 = HEAP32[i1 + 8 >> 2] | 0;
   i9 = (i17 | 0) == 0 ? i7 + (i12 << 3) | 0 : i17;
   i10 = i7;
   i11 = i12;
  }
  i12 = i1 + 8 | 0;
  do {
   if ((i9 | 0) != (i10 + (i11 << 3) | 0)) {
    i7 = i9 + 4 | 0;
    i17 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    if ((i17 | 0) != 0) {
     HEAP32[i7 >> 2] = i17;
     break;
    }
    HEAP32[i9 >> 2] = -1;
    i17 = i1 + 20 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    i17 = i1 + 16 | 0;
    i7 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
    HEAP32[i17 >> 2] = i7;
    i17 = HEAP32[i12 >> 2] | 0;
    if (!((i7 * 6 & -1 | 0) < (i17 | 0) & (i17 | 0) > 8)) {
     break;
    }
    __ZN3WTF9HashTableIPN7WebCore20CachedResourceClientENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i6 | 0, (i17 | 0) / 2 & -1, 0) | 0;
   }
  } while (0);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 44 >> 2] & 31](i1, HEAP32[i4 >> 2] | 0);
 } else {
  if (+HEAPF64[i5 + 16 >> 3] != +0) {
   __ZN7WebCore9TimerBase4stopEv(i5 + 8 | 0);
  }
  HEAP32[i2 >> 2] = 0;
  __ZN7WebCore9TimerBaseD2Ev(i5 + 8 | 0);
  __ZdlPv(i5);
 }
 L25 : do {
  if ((HEAP32[i1 + 16 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 36 >> 2] | 0) != 0) {
    break;
   }
   do {
    if ((HEAP32[i1 + 236 >> 2] | 0) == 0) {
     if ((HEAP32[i1 + 584 >> 2] | 0) != 0) {
      break;
     }
     if ((HEAP32[i1 + 580 >> 2] | 0) != 0) {
      break;
     }
     if ((HEAP32[i1 + 612 >> 2] | 0) != 0) {
      break;
     }
     if ((HEAP32[i1 + 616 >> 2] | 0) != 0) {
      break;
     }
     if ((HEAP8[i1 + 588 | 0] & 16) != 0) {
      break;
     }
     if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
      __ZN7WebCore24InspectorInstrumentation29willDestroyCachedResourceImplEPNS_14CachedResourceE(i1);
     }
     if ((i1 | 0) == 0) {
      break L25;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
     break L25;
    }
   } while (0);
   i5 = i1 + 588 | 0;
   i4 = HEAP8[i5] | 0;
   if ((i4 & 16) == 0) {
    i26 = i4;
   } else {
    __ZN7WebCore11MemoryCache27removeFromLiveResourcesSizeEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i1);
    __ZN7WebCore11MemoryCache34removeFromLiveDecodedResourcesListEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i1);
    i26 = HEAP8[i5] | 0;
   }
   if ((i26 & 64) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 31](i1);
   }
   do {
    if ((HEAP32[i1 + 572 >> 2] | 0) != 0) {
     if (+HEAPF64[(__ZN7WebCore11memoryCacheEv() | 0) + 16 >> 3] == +0) {
      break;
     }
     if (+HEAPF64[i1 + 464 >> 3] != +0) {
      HEAP8[i1 + 520 | 0] = 1;
      break;
     } else {
      __ZN7WebCore9TimerBase5startEdd(i1 + 456 | 0, +HEAPF64[i1 + 512 >> 3], +0);
      break;
     }
    }
   } while (0);
   if (!(__ZNK7WebCore20ResourceResponseBase27cacheControlContainsNoStoreEv(i1 + 272 | 0) | 0)) {
    __ZN7WebCore11MemoryCache5pruneEv(__ZN7WebCore11memoryCacheEv() | 0);
    break;
   }
   if (!(__ZNK7WebCore3URL10protocolIsEPKc(__ZNK7WebCore19ResourceRequestBase3urlEv(i1 + 48 | 0) | 0, H_BASE + 56 | 0) | 0)) {
    break;
   }
   __ZN7WebCore11MemoryCache5evictEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i1);
  }
 } while (0);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 8 | 0);
 __ZdlPv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14CachedResource31updateResponseAfterRevalidationERKNS_16ResourceResponseE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAPF64[i1 + 440 >> 3] = +__ZN3WTF11currentTimeEv();
 i5 = __ZNK7WebCore20ResourceResponseBase16httpHeaderFieldsEv(i2 | 0) | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 i6 = HEAP32[i5 + 4 >> 2] | 0;
 i7 = i2 + (i6 << 3) | 0;
 if ((HEAP32[i5 + 12 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 L4 : do {
  if ((i6 | 0) == 0) {
   i8 = i2;
  } else {
   i5 = i2;
   while (1) {
    i9 = HEAP32[i5 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i8 = i5;
     break L4;
    }
    i5 = i5 + 8 | 0;
    if ((i5 | 0) == (i7 | 0)) {
     break;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i8 | 0) == (i7 | 0)) {
  STACKTOP = i3;
  return;
 }
 i2 = i4 | 0;
 i6 = i1 + 272 | 0;
 i1 = i8;
 L13 : while (1) {
  i8 = i1 | 0;
  i5 = i1 | 0;
  i9 = 0;
  while (1) {
   if (i9 >>> 0 >= 13 >>> 0) {
    i10 = 9;
    break;
   }
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i5 >> 2] | 0, HEAP32[H_BASE + 576 + (i9 << 2) >> 2] | 0) | 0) {
    break;
   } else {
    i9 = i9 + 1 | 0;
   }
  }
  L18 : do {
   if ((i10 | 0) == 9) {
    i10 = 0;
    __ZN3WTF6StringC1EPKc(i4, H_BASE + 40 | 0);
    i9 = HEAP32[i5 >> 2] | 0;
    i11 = HEAP32[i2 >> 2] | 0;
    do {
     if ((i9 | 0) == 0) {
      if ((i11 | 0) == 0) {
       break L18;
      }
      i12 = i11;
      i13 = (HEAP32[i11 + 4 >> 2] | 0) == 0;
      i10 = 14;
     } else {
      i14 = (__ZN3WTF10StringImpl23reverseFindIgnoringCaseEPS0_j(i9, i11, 0) | 0) == 0;
      i15 = HEAP32[i2 >> 2] | 0;
      if ((i15 | 0) != 0) {
       i12 = i15;
       i13 = i14;
       i10 = 14;
       break;
      }
      if (i14) {
       break L18;
      }
     }
    } while (0);
    do {
     if ((i10 | 0) == 14) {
      i10 = 0;
      i11 = i12 | 0;
      i9 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
      if ((i9 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i12);
       if (i13) {
        break L18;
       } else {
        break;
       }
      } else {
       HEAP32[i11 >> 2] = i9;
       if (i13) {
        break L18;
       } else {
        break;
       }
      }
     }
    } while (0);
    __ZN3WTF6StringC1EPKc(i4, H_BASE + 24 | 0);
    i9 = HEAP32[i5 >> 2] | 0;
    i11 = HEAP32[i2 >> 2] | 0;
    do {
     if ((i9 | 0) == 0) {
      if ((i11 | 0) == 0) {
       break L18;
      }
      i16 = i11;
      i17 = (HEAP32[i11 + 4 >> 2] | 0) == 0;
      i10 = 28;
     } else {
      i14 = (__ZN3WTF10StringImpl23reverseFindIgnoringCaseEPS0_j(i9, i11, 0) | 0) == 0;
      i15 = HEAP32[i2 >> 2] | 0;
      if ((i15 | 0) != 0) {
       i16 = i15;
       i17 = i14;
       i10 = 28;
       break;
      }
      if (i14) {
       break L18;
      }
     }
    } while (0);
    do {
     if ((i10 | 0) == 28) {
      i10 = 0;
      i11 = i16 | 0;
      i9 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
      if ((i9 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i16);
       if (i17) {
        break L18;
       } else {
        break;
       }
      } else {
       HEAP32[i11 >> 2] = i9;
       if (i17) {
        break L18;
       } else {
        break;
       }
      }
     }
    } while (0);
    __ZN3WTF6StringC1EPKc(i4, H_BASE + 8 | 0);
    i9 = HEAP32[i5 >> 2] | 0;
    i11 = HEAP32[i2 >> 2] | 0;
    do {
     if ((i9 | 0) == 0) {
      if ((i11 | 0) == 0) {
       break L18;
      }
      i18 = i11;
      i19 = (HEAP32[i11 + 4 >> 2] | 0) == 0;
      i10 = 36;
     } else {
      i14 = (__ZN3WTF10StringImpl23reverseFindIgnoringCaseEPS0_j(i9, i11, 0) | 0) == 0;
      i15 = HEAP32[i2 >> 2] | 0;
      if ((i15 | 0) != 0) {
       i18 = i15;
       i19 = i14;
       i10 = 36;
       break;
      }
      if (i14) {
       break L18;
      }
     }
    } while (0);
    do {
     if ((i10 | 0) == 36) {
      i10 = 0;
      i11 = i18 | 0;
      i9 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
      if ((i9 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i18);
       if (i19) {
        break L18;
       } else {
        break;
       }
      } else {
       HEAP32[i11 >> 2] = i9;
       if (i19) {
        break L18;
       } else {
        break;
       }
      }
     }
    } while (0);
    __ZN7WebCore20ResourceResponseBase18setHTTPHeaderFieldERKN3WTF12AtomicStringERKNS1_6StringE(i6, i8, i1 + 4 | 0);
   }
  } while (0);
  i8 = i1 + 8 | 0;
  if ((i8 | 0) == (i7 | 0)) {
   i10 = 44;
   break;
  } else {
   i20 = i8;
  }
  while (1) {
   i8 = HEAP32[i20 >> 2] | 0;
   if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
    break;
   }
   i8 = i20 + 8 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    i10 = 43;
    break L13;
   } else {
    i20 = i8;
   }
  }
  if ((i20 | 0) == (i7 | 0)) {
   i10 = 41;
   break;
  } else {
   i1 = i20;
  }
 }
 if ((i10 | 0) == 41) {
  STACKTOP = i3;
  return;
 } else if ((i10 | 0) == 43) {
  STACKTOP = i3;
  return;
 } else if ((i10 | 0) == 44) {
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore20ResourceResponseBaseaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = i2 + 4 | 0;
 i4 = i1 + 4 | 0;
 i3 = HEAP8[i4] & -2 | HEAP8[i5] & 1;
 HEAP8[i4] = i3;
 HEAP8[i4] = i3 & -3 | HEAP8[i5] & 2;
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
 i5 = HEAP32[i2 + 48 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i3 = i5 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
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
 i4 = i2 + 56 | 0;
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 i5 = i1 + 56 | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i3;
 i3 = HEAP32[i2 + 64 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i5 = i3 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 64 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
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
 i4 = HEAP32[i2 + 68 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 68 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
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
 HEAP32[i1 + 72 >> 2] = HEAP32[i2 + 72 >> 2];
 i3 = HEAP32[i2 + 76 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i5 = i3 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 76 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
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
 __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_EaSERKSE_(i1 + 80 | 0, i2 + 80 | 0) | 0;
 i4 = i1 + 100 | 0;
 HEAP8[i4] = HEAP8[i4] & -2 | HEAP8[i2 + 100 | 0] & 1;
 HEAP32[i1 + 104 >> 2] = HEAP32[i2 + 104 >> 2];
 i4 = i1 + 108 | 0;
 HEAP8[i4] = HEAP8[i4] & -2 | HEAP8[i2 + 108 | 0] & 1;
 i4 = HEAP32[i2 + 112 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = i1 + 112 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = i2 + 116 | 0;
 i5 = i1 + 116 | 0;
 i4 = HEAP8[i5] & -2 | HEAP8[i3] & 1;
 HEAP8[i5] = i4;
 i6 = i4 & -3 | HEAP8[i3] & 2;
 HEAP8[i5] = i6;
 i4 = i6 & -5 | HEAP8[i3] & 4;
 HEAP8[i5] = i4;
 i6 = i4 & -9 | HEAP8[i3] & 8;
 HEAP8[i5] = i6;
 i4 = i6 & -17 | HEAP8[i3] & 16;
 HEAP8[i5] = i4;
 i6 = i4 & -33 | HEAP8[i3] & 32;
 HEAP8[i5] = i6;
 i4 = i6 & -65 | HEAP8[i3] & 64;
 HEAP8[i5] = i4;
 HEAP8[i5] = i4 & 127 | HEAP8[i3] & -128;
 i3 = i1 + 117 | 0;
 HEAP8[i3] = HEAP8[i3] & -2 | HEAP8[i2 + 117 | 0] & 1;
 HEAPF64[i1 + 120 >> 3] = +HEAPF64[i2 + 120 >> 3];
 HEAPF64[i1 + 128 >> 3] = +HEAPF64[i2 + 128 >> 3];
 HEAPF64[i1 + 136 >> 3] = +HEAPF64[i2 + 136 >> 3];
 HEAPF64[i1 + 144 >> 3] = +HEAPF64[i2 + 144 >> 3];
 HEAPF64[i1 + 152 >> 3] = +HEAPF64[i2 + 152 >> 3];
 return i1 | 0;
}
function __ZN7WebCore14CachedResourceC2ERKNS_15ResourceRequestENS0_4TypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 48 | 0;
 HEAP32[i1 >> 2] = H_BASE + 464;
 i7 = i1 + 48 | 0;
 _memset(i1 + 4 | 0, 0, 40) | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i7, i2 | 0);
 i8 = HEAP32[i2 + 160 >> 2] | 0;
 HEAP32[i1 + 208 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = HEAP32[i2 + 164 >> 2] | 0;
 HEAP32[i1 + 212 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = HEAP32[i2 + 168 >> 2] | 0;
 HEAP32[i1 + 216 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = HEAP32[i2 + 172 >> 2] | 0;
 HEAP32[i1 + 220 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 224 | 0] = HEAP8[i2 + 176 | 0] & 1;
 HEAP8[i1 + 225 | 0] = HEAP8[i2 + 177 | 0] & 1;
 HEAP8[i1 + 226 | 0] = HEAP8[i2 + 178 | 0] & 1;
 HEAP32[i1 + 228 >> 2] = HEAP32[i2 + 180 >> 2];
 HEAP32[i1 + 232 >> 2] = 0;
 HEAP32[i1 + 236 >> 2] = 0;
 HEAP32[i1 + 240 >> 2] = 1;
 HEAP32[i1 + 244 >> 2] = 1;
 HEAP32[i1 + 248 >> 2] = 0;
 HEAP32[i1 + 252 >> 2] = 1;
 HEAP32[i1 + 256 >> 2] = 2;
 HEAP32[i1 + 260 >> 2] = 1;
 HEAP32[i1 + 264 >> 2] = 0;
 switch (i3 | 0) {
 case 2:
  {
   i10 = 3;
   break;
  }
 case 3:
 case 4:
 case 5:
  {
   i10 = 2;
   break;
  }
 case 1:
  {
   i10 = 1;
   break;
  }
 case 7:
  {
   i10 = 3;
   break;
  }
 case 6:
  {
   i10 = 1;
   break;
  }
 case 8:
  {
   i10 = 2;
   break;
  }
 case 0:
  {
   i10 = 4;
   break;
  }
 default:
  {
   i10 = 1;
  }
 }
 HEAP32[i1 + 268 >> 2] = i10;
 __ZN7WebCore20ResourceResponseBaseC2Ev(i1 + 272 | 0);
 HEAP8[i1 + 432 | 0] = 0;
 HEAPF64[i1 + 440 >> 3] = +__ZN3WTF11currentTimeEv();
 HEAP32[i1 + 448 >> 2] = 0;
 HEAP32[i1 + 452 >> 2] = 0;
 i10 = i1 + 456 | 0;
 if ((i3 | 0) == 3) {
  d11 = +0;
 } else {
  d11 = +HEAPF64[(__ZN7WebCore11memoryCacheEv() | 0) + 16 >> 3];
 }
 __ZN7WebCore9TimerBaseC2Ev(i10);
 HEAP32[i10 >> 2] = H_BASE + 432;
 HEAP32[i1 + 500 >> 2] = i1;
 i10 = i1 + 504 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 4;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAPF64[i1 + 512 >> 3] = d11;
 HEAP8[i1 + 520 | 0] = 0;
 i10 = i1 + 528 | 0;
 _memset(i10 | 0, 0, 20) | 0;
 HEAP8[i1 + 548 | 0] = 1;
 HEAP8[i1 + 549 | 0] = 0;
 HEAP8[i1 + 550 | 0] = 0;
 i2 = i1 + 588 | 0;
 i8 = i2;
 _memset(i1 + 552 | 0, 0, 36) | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9 & -4;
 HEAP8[i2] = i9 & 255 & -128;
 HEAP32[i8 >> 2] = i3 << 7 & 1920 | HEAP32[i8 >> 2] & -16257 | 2048;
 _memset(i1 + 592 | 0, 0, 48) | 0;
 if (!(__ZNK7WebCore3URL21hasFragmentIdentifierEv(__ZNK7WebCore19ResourceRequestBase3urlEv(i7) | 0) | 0)) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore11MemoryCache32removeFragmentIdentifierIfNeededERKNS_3URLE(i5, __ZNK7WebCore19ResourceRequestBase3urlEv(i7) | 0);
 if (!(__ZNK7WebCore3URL21hasFragmentIdentifierEv(i5) | 0)) {
  __ZNK7WebCore3URL18fragmentIdentifierEv(i6, __ZNK7WebCore19ResourceRequestBase3urlEv(i7) | 0);
  i1 = i6 | 0;
  i6 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  i8 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = i6;
  do {
   if ((i8 | 0) != 0) {
    i6 = i8 | 0;
    i10 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i6 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i8 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i1 = i8 | 0;
    i10 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i1 >> 2] = i10;
     break;
    }
   }
  } while (0);
  __ZN7WebCore19ResourceRequestBase6setURLERKNS_3URLE(i7, i5);
 }
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i7 | 0;
 i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i8;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore14CachedResourceC1ERKNS_15ResourceRequestENS0_4TypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 48 | 0;
 HEAP32[i1 >> 2] = H_BASE + 464;
 i7 = i1 + 48 | 0;
 _memset(i1 + 4 | 0, 0, 40) | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i7, i2 | 0);
 i8 = HEAP32[i2 + 160 >> 2] | 0;
 HEAP32[i1 + 208 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = HEAP32[i2 + 164 >> 2] | 0;
 HEAP32[i1 + 212 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = HEAP32[i2 + 168 >> 2] | 0;
 HEAP32[i1 + 216 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = HEAP32[i2 + 172 >> 2] | 0;
 HEAP32[i1 + 220 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 224 | 0] = HEAP8[i2 + 176 | 0] & 1;
 HEAP8[i1 + 225 | 0] = HEAP8[i2 + 177 | 0] & 1;
 HEAP8[i1 + 226 | 0] = HEAP8[i2 + 178 | 0] & 1;
 HEAP32[i1 + 228 >> 2] = HEAP32[i2 + 180 >> 2];
 HEAP32[i1 + 232 >> 2] = 0;
 HEAP32[i1 + 236 >> 2] = 0;
 HEAP32[i1 + 240 >> 2] = 1;
 HEAP32[i1 + 244 >> 2] = 1;
 HEAP32[i1 + 248 >> 2] = 0;
 HEAP32[i1 + 252 >> 2] = 1;
 HEAP32[i1 + 256 >> 2] = 2;
 HEAP32[i1 + 260 >> 2] = 1;
 HEAP32[i1 + 264 >> 2] = 0;
 switch (i3 | 0) {
 case 2:
  {
   i10 = 3;
   break;
  }
 case 3:
 case 4:
 case 5:
  {
   i10 = 2;
   break;
  }
 case 1:
  {
   i10 = 1;
   break;
  }
 case 7:
  {
   i10 = 3;
   break;
  }
 case 6:
  {
   i10 = 1;
   break;
  }
 case 8:
  {
   i10 = 2;
   break;
  }
 case 0:
  {
   i10 = 4;
   break;
  }
 default:
  {
   i10 = 1;
  }
 }
 HEAP32[i1 + 268 >> 2] = i10;
 __ZN7WebCore20ResourceResponseBaseC2Ev(i1 + 272 | 0);
 HEAP8[i1 + 432 | 0] = 0;
 HEAPF64[i1 + 440 >> 3] = +__ZN3WTF11currentTimeEv();
 HEAP32[i1 + 448 >> 2] = 0;
 HEAP32[i1 + 452 >> 2] = 0;
 i10 = i1 + 456 | 0;
 if ((i3 | 0) == 3) {
  d11 = +0;
 } else {
  d11 = +HEAPF64[(__ZN7WebCore11memoryCacheEv() | 0) + 16 >> 3];
 }
 __ZN7WebCore9TimerBaseC2Ev(i10);
 HEAP32[i10 >> 2] = H_BASE + 432;
 HEAP32[i1 + 500 >> 2] = i1;
 i10 = i1 + 504 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 4;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAPF64[i1 + 512 >> 3] = d11;
 HEAP8[i1 + 520 | 0] = 0;
 i10 = i1 + 528 | 0;
 _memset(i10 | 0, 0, 20) | 0;
 HEAP8[i1 + 548 | 0] = 1;
 HEAP8[i1 + 549 | 0] = 0;
 HEAP8[i1 + 550 | 0] = 0;
 i2 = i1 + 588 | 0;
 i8 = i2;
 _memset(i1 + 552 | 0, 0, 36) | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9 & -4;
 HEAP8[i2] = i9 & 255 & -128;
 HEAP32[i8 >> 2] = i3 << 7 & 1920 | HEAP32[i8 >> 2] & -16257 | 2048;
 _memset(i1 + 592 | 0, 0, 48) | 0;
 if (!(__ZNK7WebCore3URL21hasFragmentIdentifierEv(__ZNK7WebCore19ResourceRequestBase3urlEv(i7) | 0) | 0)) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore11MemoryCache32removeFragmentIdentifierIfNeededERKNS_3URLE(i5, __ZNK7WebCore19ResourceRequestBase3urlEv(i7) | 0);
 if (!(__ZNK7WebCore3URL21hasFragmentIdentifierEv(i5) | 0)) {
  __ZNK7WebCore3URL18fragmentIdentifierEv(i6, __ZNK7WebCore19ResourceRequestBase3urlEv(i7) | 0);
  i1 = i6 | 0;
  i6 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  i8 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = i6;
  do {
   if ((i8 | 0) != 0) {
    i6 = i8 | 0;
    i10 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i6 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i8 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i1 = i8 | 0;
    i10 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i1 >> 2] = i10;
     break;
    }
   }
  } while (0);
  __ZN7WebCore19ResourceRequestBase6setURLERKNS_3URLE(i7, i5);
 }
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i7 | 0;
 i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i8;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF9HashTableIPN7WebCore20CachedResourceClientENS_12KeyValuePairIS3_NS_6OwnPtrINS1_14CachedResource22CachedResourceCallbackEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS3_EENS_7HashMapIS3_S8_SD_NS_10HashTraitsIS3_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKS3_NS_10PassOwnPtrIS7_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S9_SB_SD_SJ_SG_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore20CachedResourceClientENS_12KeyValuePairIS3_NS_6OwnPtrINS1_14CachedResource22CachedResourceCallbackEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS3_EENS_7HashMapIS3_S8_SD_NS_10HashTraitsIS3_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i8, 0) | 0;
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
 i14 = i13 + 4 | 0;
 i10 = HEAP32[i14 >> 2] | 0;
 i21 = i4 | 0;
 i4 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 HEAP32[i14 >> 2] = i4;
 if ((i10 | 0) != 0) {
  __ZN7WebCore9TimerBaseD2Ev(i10 + 8 | 0);
  __ZdlPv(i10);
 }
 i10 = i2 + 12 | 0;
 i4 = (HEAP32[i10 >> 2] | 0) + 1 | 0;
 HEAP32[i10 >> 2] = i4;
 i10 = i2 + 4 | 0;
 i14 = HEAP32[i10 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i21 = i14 << 1;
   i29 = (i4 * 6 & -1 | 0) < (i21 | 0) ? i14 : i21;
  }
  i21 = __ZN3WTF9HashTableIPN7WebCore20CachedResourceClientENS_12KeyValuePairIS3_NS_6OwnPtrINS1_14CachedResource22CachedResourceCallbackEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS3_EENS_7HashMapIS3_S8_SD_NS_10HashTraitsIS3_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i29, i13) | 0;
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
function __ZN3WTF9HashTableIPN7WebCore20CachedResourceClientENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_iEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
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
  __ZN3WTF9HashTableIPN7WebCore20CachedResourceClientENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i8, 0) | 0;
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
   i14 = 11;
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
     i14 = 8;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i10 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 10;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i14 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 11;
     break;
    }
    i20 = i21;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 11) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 HEAP32[i26 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i27 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i27;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i28 >> 2] | 0) + i27 << 1 | 0) < (i8 | 0)) {
  i29 = i26;
  i30 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i31 = 8;
  } else {
   i28 = i8 << 1;
   i31 = (i27 * 6 & -1 | 0) < (i28 | 0) ? i8 : i28;
  }
  i28 = __ZN3WTF9HashTableIPN7WebCore20CachedResourceClientENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i31, i26) | 0;
  i29 = i28;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore20CachedResourceClientENS_12KeyValuePairIS3_NS_6OwnPtrINS1_14CachedResource22CachedResourceCallbackEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS3_EENS_7HashMapIS3_S8_SD_NS_10HashTraitsIS3_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i1, i2, i3) {
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
    __ZN7WebCore9TimerBaseD2Ev(i17 + 8 | 0);
    __ZdlPv(i17);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
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
    __ZN7WebCore9TimerBaseD2Ev(i1 + 8 | 0);
    __ZdlPv(i1);
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
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_EaSERKSE_(i1, i2) {
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
 i8 = i6 + (i7 << 3) | 0;
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
      i10 = i10 + 8 | 0;
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
    __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_22IdentityHashTranslatorIS7_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i4, i5, i12 | 0, i12);
    i10 = i12 + 8 | 0;
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
     i10 = i13 + 8 | 0;
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
   i8 = i12 + (i4 << 3) | 0;
   do {
    if ((HEAP32[i8 >> 2] | 0) != -1) {
     i9 = HEAP32[i12 + (i4 << 3) + 4 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i5 = i9 | 0;
       i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
       if ((i6 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i9);
        break;
       } else {
        HEAP32[i5 >> 2] = i6;
        break;
       }
      }
     } while (0);
     i9 = HEAP32[i8 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     i6 = i9 | 0;
     i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i6 >> 2] = i5;
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
function __ZN3WTF9HashTableIPN7WebCore24CachedResourceHandleBaseES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore24CachedResourceHandleBaseES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
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
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
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
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore24CachedResourceHandleBaseES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore14CachedResourceD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 464;
 i2 = HEAP32[i1 + 608 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZNK7WebCore20CachedResourceLoader20removeCachedResourceEPNS_14CachedResourceE(i2, i1);
 }
 i2 = HEAP32[i1 + 620 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 544 >> 2] | 0;
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
 i2 = HEAP32[i1 + 540 >> 2] | 0;
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
 i2 = HEAP32[i1 + 532 >> 2] | 0;
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
 i2 = HEAP32[i1 + 528 >> 2] | 0;
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
 __ZN7WebCore9TimerBaseD2Ev(i1 + 456 | 0);
 i2 = HEAP32[i1 + 452 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZdlPv(i2);
 }
 i2 = HEAP32[i1 + 448 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 __ZN7WebCore20ResourceResponseBaseD2Ev(i1 + 272 | 0);
 i2 = HEAP32[i1 + 236 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 232 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15ResourceRequestD2Ev(i1 + 48 | 0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i5 = HEAP32[i1 + 28 >> 2] | 0;
  if ((i5 | 0) > 0) {
   i3 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i3 << 3) >> 2] | 0) != -1) {
      i4 = HEAP32[i2 + (i3 << 3) + 4 >> 2] | 0;
      if ((i4 | 0) == 0) {
       break;
      }
      __ZN7WebCore9TimerBaseD2Ev(i4 + 8 | 0);
      __ZdlPv(i4);
     }
    } while (0);
    i3 = i3 + 1 | 0;
    if ((i3 | 0) >= (i5 | 0)) {
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
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore14CachedResourceD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 464;
 i2 = HEAP32[i1 + 608 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZNK7WebCore20CachedResourceLoader20removeCachedResourceEPNS_14CachedResourceE(i2, i1);
 }
 i2 = HEAP32[i1 + 620 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 544 >> 2] | 0;
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
 i2 = HEAP32[i1 + 540 >> 2] | 0;
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
 i2 = HEAP32[i1 + 532 >> 2] | 0;
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
 i2 = HEAP32[i1 + 528 >> 2] | 0;
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
 __ZN7WebCore9TimerBaseD2Ev(i1 + 456 | 0);
 i2 = HEAP32[i1 + 452 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZdlPv(i2);
 }
 i2 = HEAP32[i1 + 448 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 __ZN7WebCore20ResourceResponseBaseD2Ev(i1 + 272 | 0);
 i2 = HEAP32[i1 + 236 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 232 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15ResourceRequestD2Ev(i1 + 48 | 0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i5 = HEAP32[i1 + 28 >> 2] | 0;
  if ((i5 | 0) > 0) {
   i3 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i3 << 3) >> 2] | 0) != -1) {
      i4 = HEAP32[i2 + (i3 << 3) + 4 >> 2] | 0;
      if ((i4 | 0) == 0) {
       break;
      }
      __ZN7WebCore9TimerBaseD2Ev(i4 + 8 | 0);
      __ZdlPv(i4);
     }
    } while (0);
    i3 = i3 + 1 | 0;
    if ((i3 | 0) >= (i5 | 0)) {
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
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore14CachedResource11checkNotifyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 if ((HEAP8[i1 + 588 | 0] & 32) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore26CachedResourceClientWalkerINS_20CachedResourceClientEEC2ERKN3WTF14HashCountedSetIPS1_NS3_7PtrHashIS5_EENS3_10HashTraitsIS5_EEEE(i3, i1 + 4 | 0);
 i4 = i3 + 12 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 4 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 L4 : do {
  if (i8 >>> 0 < i5 >>> 0) {
   i9 = HEAP32[i7 >> 2] | 0;
   i10 = HEAP32[i3 >> 2] | 0;
   i11 = i8;
   L6 : while (1) {
    i12 = HEAP32[i10 >> 2] | 0;
    i13 = i10 + 8 | 0;
    if ((i12 | 0) == 0) {
     i14 = i11;
     i15 = 5;
     break;
    } else {
     i16 = i11;
    }
    while (1) {
     i17 = i16 + 1 | 0;
     i18 = HEAP32[i9 + (i16 << 2) >> 2] | 0;
     i19 = HEAP32[i13 >> 2] | 0;
     i20 = i18;
     i21 = i20 + ~(i20 << 15) | 0;
     i20 = (i21 >>> 10 ^ i21) * 9 & -1;
     i21 = i20 >>> 6 ^ i20;
     i20 = i21 + ~(i21 << 11) | 0;
     i21 = i20 >>> 16 ^ i20;
     i20 = i19 & i21;
     i22 = i12 + (i20 << 3) | 0;
     i23 = HEAP32[i22 >> 2] | 0;
     L10 : do {
      if ((i23 | 0) == (i18 | 0)) {
       i24 = i22;
       i15 = 11;
      } else {
       i25 = (i21 >>> 23) + ~i21 | 0;
       i26 = i25 << 12 ^ i25;
       i25 = i26 >>> 7 ^ i26;
       i26 = i25 << 2 ^ i25;
       i25 = i26 >>> 20 ^ i26 | 1;
       i26 = 0;
       i27 = i20;
       i28 = i23;
       while (1) {
        if ((i28 | 0) == 0) {
         break L10;
        }
        i29 = (i26 | 0) == 0 ? i25 : i26;
        i30 = i29 + i27 & i19;
        i31 = i12 + (i30 << 3) | 0;
        i32 = HEAP32[i31 >> 2] | 0;
        if ((i32 | 0) == (i18 | 0)) {
         i24 = i31;
         i15 = 11;
         break;
        } else {
         i26 = i29;
         i27 = i30;
         i28 = i32;
        }
       }
      }
     } while (0);
     if ((i15 | 0) == 11) {
      i15 = 0;
      if ((i24 | 0) != 0) {
       break;
      }
     }
     if (i17 >>> 0 < i5 >>> 0) {
      i16 = i17;
     } else {
      i33 = i17;
      break L6;
     }
    }
    HEAP32[i6 >> 2] = i17;
    if ((i18 | 0) == 0) {
     break L4;
    }
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] & 31](i18, i1);
    if (i17 >>> 0 < i5 >>> 0) {
     i11 = i17;
    } else {
     break L4;
    }
   }
   if ((i15 | 0) == 5) {
    while (1) {
     i15 = 0;
     i11 = i14 + 1 | 0;
     if (i11 >>> 0 < i5 >>> 0) {
      i14 = i11;
      i15 = 5;
     } else {
      i33 = i11;
      break;
     }
    }
   }
   HEAP32[i6 >> 2] = i33;
  }
 } while (0);
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i7 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14CachedResource14addClientToSetEPNS_20CachedResourceClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 40 | 0;
 HEAP32[i5 >> 2] = i2;
 i9 = i1 + 588 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i10 & 255;
 do {
  if ((i10 & 3 | 0) == 0) {
   if ((i11 & 32) == 0) {
    i12 = i10 | 3;
    HEAP32[i9 >> 2] = i12;
    i13 = i12 & 255;
    i14 = i12;
    break;
   }
   i12 = i10 & -4;
   if ((i11 & 8) == 0) {
    i15 = i12 | 1;
    HEAP32[i9 >> 2] = i15;
    i13 = i15 & 255;
    i14 = i15;
    break;
   } else {
    i15 = i12 | 2;
    HEAP32[i9 >> 2] = i15;
    i13 = i15 & 255;
    i14 = i15;
    break;
   }
  } else {
   i13 = i11;
   i14 = i10;
  }
 } while (0);
 do {
  if ((HEAP32[i1 + 16 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 36 >> 2] | 0) != 0) {
    i16 = i14;
    break;
   }
   if ((i13 & 16) == 0) {
    i16 = i14;
    break;
   }
   __ZN7WebCore11MemoryCache22addToLiveResourcesSizeEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i1);
   i16 = HEAP32[i9 >> 2] | 0;
  } else {
   i16 = i14;
  }
 } while (0);
 i14 = i16 >>> 7 & 15;
 do {
  if ((i14 | 0) == 5 | (i14 | 0) == 0) {
   if ((HEAP8[i1 + 388 | 0] & 1) != 0) {
    break;
   }
   if ((HEAP32[i1 + 616 >> 2] | 0) != 0) {
    break;
   }
   i16 = __Znwj(64) | 0;
   i9 = i16;
   HEAP32[i16 >> 2] = i1;
   HEAP32[i16 + 4 >> 2] = i2;
   i13 = i16 + 8 | 0;
   i10 = i13;
   __ZN7WebCore9TimerBaseC2Ev(i10);
   HEAP32[i13 >> 2] = H_BASE + 400;
   HEAP32[i16 + 52 >> 2] = i9;
   i13 = i16 + 56 | 0;
   HEAP32[i13 >> 2] = F_BASE_vii + 8;
   HEAP32[i13 + 4 >> 2] = 0;
   __ZN7WebCore9TimerBase5startEdd(i10, +0, +0);
   i10 = i6 | 0;
   HEAP32[i10 >> 2] = i9;
   __ZN3WTF9HashTableIPN7WebCore20CachedResourceClientENS_12KeyValuePairIS3_NS_6OwnPtrINS1_14CachedResource22CachedResourceCallbackEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS3_EENS_7HashMapIS3_S8_SD_NS_10HashTraitsIS3_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKS3_NS_10PassOwnPtrIS7_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S9_SB_SD_SJ_SG_EEEEOT0_OT1_(i7, i1 + 24 | 0, i5, i6);
   i9 = HEAP32[i10 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i17 = 0;
    STACKTOP = i3;
    return i17 | 0;
   }
   __ZN7WebCore9TimerBaseD2Ev(i9 + 8 | 0);
   __ZdlPv(i9);
   i17 = 0;
   STACKTOP = i3;
   return i17 | 0;
  }
 } while (0);
 HEAP32[i4 >> 2] = 0;
 __ZN3WTF9HashTableIPN7WebCore20CachedResourceClientENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_iEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i8, i1 + 4 | 0, i5, i4);
 i4 = (HEAP32[i8 >> 2] | 0) + 4 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i17 = 1;
 STACKTOP = i3;
 return i17 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore20CachedResourceClientENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
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
  i2 = i7 + (i11 << 3) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
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
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
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
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
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
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i2;
   i17 = i30;
   i13 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i17 + 4 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i13 = i11 + 1 | 0;
  if ((i13 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i13;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZNK7WebCore14CachedResource31mustRevalidateDueToCacheHeadersENS_11CachePolicyE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, d5 = +0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0;
 if ((i2 | 0) == 2) {
  i3 = 1;
  return i3 | 0;
 }
 i4 = i1 + 272 | 0;
 if (__ZNK7WebCore20ResourceResponseBase27cacheControlContainsNoCacheEv(i4) | 0) {
  i3 = 1;
  return i3 | 0;
 }
 if (__ZNK7WebCore20ResourceResponseBase27cacheControlContainsNoStoreEv(i4) | 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 | 0) != 0) {
  if ((HEAP8[i1 + 388 | 0] & 1) != 0) {
   i3 = 0;
   return i3 | 0;
  }
  d5 = +__ZNK7WebCore20ResourceResponseBase4dateEv(i4);
  HEAPF64[tempDoublePtr >> 3] = d5;
  i2 = HEAP32[tempDoublePtr + 4 >> 2] & 2146435072;
  i6 = 2146435072;
  if (i2 >>> 0 < i6 >>> 0 | i2 >>> 0 == i6 >>> 0 & (HEAP32[tempDoublePtr >> 2] & 0) >>> 0 < 0 >>> 0) {
   d7 = +HEAPF64[i1 + 440 >> 3] - d5;
   d8 = d7 > +0 ? d7 : +0;
  } else {
   d8 = +0;
  }
  d7 = +__ZNK7WebCore20ResourceResponseBase3ageEv(i4);
  HEAPF64[tempDoublePtr >> 3] = d7;
  i6 = HEAP32[tempDoublePtr + 4 >> 2] & 2146435072;
  i2 = 2146435072;
  if (i6 >>> 0 < i2 >>> 0 | i6 >>> 0 == i2 >>> 0 & (HEAP32[tempDoublePtr >> 2] & 0) >>> 0 < 0 >>> 0) {
   d9 = d8 < d7 ? d7 : d8;
  } else {
   d9 = d8;
  }
  d8 = +__ZN3WTF11currentTimeEv();
  d7 = d9 + (d8 - +HEAPF64[i1 + 440 >> 3]);
  i3 = d7 > +__ZNK7WebCore14CachedResource17freshnessLifetimeEv(i1);
  return i3 | 0;
 }
 do {
  if (__ZNK7WebCore20ResourceResponseBase34cacheControlContainsMustRevalidateEv(i4) | 0) {
   if ((HEAP8[i1 + 388 | 0] & 1) != 0) {
    break;
   }
   d7 = +__ZNK7WebCore20ResourceResponseBase4dateEv(i4);
   HEAPF64[tempDoublePtr >> 3] = d7;
   i2 = HEAP32[tempDoublePtr + 4 >> 2] & 2146435072;
   i6 = 2146435072;
   if (i2 >>> 0 < i6 >>> 0 | i2 >>> 0 == i6 >>> 0 & (HEAP32[tempDoublePtr >> 2] & 0) >>> 0 < 0 >>> 0) {
    d8 = +HEAPF64[i1 + 440 >> 3] - d7;
    d10 = d8 > +0 ? d8 : +0;
   } else {
    d10 = +0;
   }
   d8 = +__ZNK7WebCore20ResourceResponseBase3ageEv(i4);
   HEAPF64[tempDoublePtr >> 3] = d8;
   i6 = HEAP32[tempDoublePtr + 4 >> 2] & 2146435072;
   i2 = 2146435072;
   if (i6 >>> 0 < i2 >>> 0 | i6 >>> 0 == i2 >>> 0 & (HEAP32[tempDoublePtr >> 2] & 0) >>> 0 < 0 >>> 0) {
    d11 = d10 < d8 ? d8 : d10;
   } else {
    d11 = d10;
   }
   d8 = +__ZN3WTF11currentTimeEv();
   d7 = d11 + (d8 - +HEAPF64[i1 + 440 >> 3]);
   if (d7 > +__ZNK7WebCore14CachedResource17freshnessLifetimeEv(i1)) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = 0;
 return i3 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore24CachedResourceHandleBaseES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
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
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
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
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
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
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
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
function __ZN7WebCore14CachedResource12didAddClientEPNS_20CachedResourceClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 HEAP32[i5 >> 2] = i2;
 if (+HEAPF64[i1 + 464 >> 3] != +0) {
  HEAP8[i1 + 520 | 0] = 0;
  __ZN7WebCore9TimerBase4stopEv(i1 + 456 | 0);
 }
 i7 = i1 + 24 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L4 : do {
  if ((i8 | 0) != 0) {
   i9 = HEAP32[i1 + 32 >> 2] | 0;
   i10 = i2;
   i11 = i10 + ~(i10 << 15) | 0;
   i10 = (i11 >>> 10 ^ i11) * 9 & -1;
   i11 = i10 >>> 6 ^ i10;
   i10 = i11 + ~(i11 << 11) | 0;
   i11 = i10 >>> 16 ^ i10;
   i10 = i11 & i9;
   i12 = i8 + (i10 << 3) | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   if ((i13 | 0) == (i2 | 0)) {
    i14 = i12;
   } else {
    i12 = (i11 >>> 23) + ~i11 | 0;
    i11 = i12 << 12 ^ i12;
    i12 = i11 >>> 7 ^ i11;
    i11 = i12 << 2 ^ i12;
    i12 = i11 >>> 20 ^ i11 | 1;
    i11 = 0;
    i15 = i10;
    i10 = i13;
    while (1) {
     if ((i10 | 0) == 0) {
      break L4;
     }
     i13 = (i11 | 0) == 0 ? i12 : i11;
     i16 = i13 + i15 & i9;
     i17 = i8 + (i16 << 3) | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     if ((i18 | 0) == (i2 | 0)) {
      i14 = i17;
      break;
     } else {
      i11 = i13;
      i15 = i16;
      i10 = i18;
     }
    }
   }
   if ((i14 | 0) == 0) {
    break;
   }
   HEAP32[i4 >> 2] = 0;
   __ZN3WTF9HashTableIPN7WebCore20CachedResourceClientENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_iEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i6, i1 + 4 | 0, i5, i4);
   i10 = (HEAP32[i6 >> 2] | 0) + 4 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   __ZN3WTF7HashMapIPN7WebCore20CachedResourceClientENS_6OwnPtrINS1_14CachedResource22CachedResourceCallbackEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENSA_IS7_EEE6removeERKS3_(i7, i5) | 0;
  }
 } while (0);
 if ((HEAP8[i1 + 588 | 0] & 32) != 0) {
  STACKTOP = i3;
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] & 15](i1) | 0) {
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i5 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 31](i7, i1);
 STACKTOP = i3;
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
function __ZNK7WebCore14CachedResource17freshnessLifetimeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, d11 = +0, d12 = +0, d13 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 272 | 0;
 if ((HEAP8[(__ZNK7WebCore20ResourceResponseBase3urlEv(i4) | 0) + 4 | 0] & 2) == 0) {
  do {
   if ((HEAP32[i1 + 588 >> 2] & 1920 | 0) == 0) {
    __ZNK7WebCore3URL8protocolEv(i3, __ZNK7WebCore20ResourceResponseBase3urlEv(i4) | 0);
    i5 = (__ZN7WebCore14SchemeRegistry45shouldCacheResponsesFromURLSchemeIndefinitelyERKN3WTF6StringE(i3) | 0) ^ 1;
    i6 = HEAP32[i3 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i7 = i5;
     break;
    }
    i8 = i6 | 0;
    i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i6);
     i7 = i5;
     break;
    } else {
     HEAP32[i8 >> 2] = i9;
     i7 = i5;
     break;
    }
   } else {
    i7 = 0;
   }
  } while (0);
  d10 = i7 ? +0 : 1.7976931348623157e+308;
  STACKTOP = i2;
  return +d10;
 }
 d11 = +__ZNK7WebCore20ResourceResponseBase18cacheControlMaxAgeEv(i4);
 HEAPF64[tempDoublePtr >> 3] = d11;
 i7 = HEAP32[tempDoublePtr + 4 >> 2] & 2146435072;
 i3 = 2146435072;
 if (i7 >>> 0 < i3 >>> 0 | i7 >>> 0 == i3 >>> 0 & (HEAP32[tempDoublePtr >> 2] & 0) >>> 0 < 0 >>> 0) {
  d10 = d11;
  STACKTOP = i2;
  return +d10;
 }
 d11 = +__ZNK7WebCore20ResourceResponseBase7expiresEv(i4);
 d12 = +__ZNK7WebCore20ResourceResponseBase4dateEv(i4);
 HEAPF64[tempDoublePtr >> 3] = d12;
 i3 = HEAP32[tempDoublePtr + 4 >> 2] & 2146435072;
 i7 = 2146435072;
 if (i3 >>> 0 < i7 >>> 0 | i3 >>> 0 == i7 >>> 0 & (HEAP32[tempDoublePtr >> 2] & 0) >>> 0 < 0 >>> 0) {
  d13 = d12;
 } else {
  d13 = +HEAPF64[i1 + 440 >> 3];
 }
 HEAPF64[tempDoublePtr >> 3] = d11;
 i1 = HEAP32[tempDoublePtr + 4 >> 2] & 2146435072;
 i7 = 2146435072;
 if (i1 >>> 0 < i7 >>> 0 | i1 >>> 0 == i7 >>> 0 & (HEAP32[tempDoublePtr >> 2] & 0) >>> 0 < 0 >>> 0) {
  d10 = d11 - d13;
  STACKTOP = i2;
  return +d10;
 }
 d11 = +__ZNK7WebCore20ResourceResponseBase12lastModifiedEv(i4);
 HEAPF64[tempDoublePtr >> 3] = d11;
 i4 = HEAP32[tempDoublePtr + 4 >> 2] & 2146435072;
 i7 = 2146435072;
 if (!(i4 >>> 0 < i7 >>> 0 | i4 >>> 0 == i7 >>> 0 & (HEAP32[tempDoublePtr >> 2] & 0) >>> 0 < 0 >>> 0)) {
  d10 = +0;
  STACKTOP = i2;
  return +d10;
 }
 d10 = (d13 - d11) * +.1;
 STACKTOP = i2;
 return +d10;
}
function __ZN7WebCore26CachedResourceClientWalkerINS_20CachedResourceClientEEC2ERKN3WTF14HashCountedSetIPS1_NS3_7PtrHashIS5_EENS3_10HashTraitsIS5_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 HEAP32[i1 >> 2] = i2;
 i3 = i2 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 12 | 0;
 HEAP32[i7 >> 2] = i4;
 do {
  if ((i4 | 0) != 0) {
   if (i4 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i4 << 2) | 0;
    HEAP32[i6 >> 2] = i8 >>> 2;
    HEAP32[i5 >> 2] = __ZN3WTF10fastMallocEj(i8) | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 16 >> 2] = 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = i1 + (i6 << 3) | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 L10 : do {
  if ((i6 | 0) == 0) {
   i9 = i1;
  } else {
   i3 = i1;
   while (1) {
    i4 = HEAP32[i3 >> 2] | 0;
    if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
     i9 = i3;
     break L10;
    }
    i3 = i3 + 8 | 0;
    if ((i3 | 0) == (i2 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i9 | 0) == (i2 | 0)) {
  return;
 } else {
  i10 = i9;
  i11 = 0;
 }
 L18 : while (1) {
  i9 = i11 + 1 | 0;
  if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i11 >>> 0) {
   i12 = 11;
   break;
  }
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i11 << 2) >> 2] = HEAP32[i10 >> 2];
  i1 = i10 + 8 | 0;
  if ((i1 | 0) == (i2 | 0)) {
   i12 = 19;
   break;
  } else {
   i13 = i1;
  }
  while (1) {
   i1 = HEAP32[i13 >> 2] | 0;
   if (!((i1 | 0) == (-1 | 0) | (i1 | 0) == 0)) {
    break;
   }
   i1 = i13 + 8 | 0;
   if ((i1 | 0) == (i2 | 0)) {
    i12 = 17;
    break L18;
   } else {
    i13 = i1;
   }
  }
  if ((i13 | 0) == (i2 | 0)) {
   i12 = 22;
   break;
  } else {
   i10 = i13;
   i11 = i9;
  }
 }
 if ((i12 | 0) == 17) {
  return;
 } else if ((i12 | 0) == 11) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i12 | 0) == 22) {
  return;
 } else if ((i12 | 0) == 19) {
  return;
 }
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
function runPostSets() {
 HEAP32[H_BASE + 400 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 576 >> 2] = H_BASE + 360;
 HEAP32[H_BASE + 580 >> 2] = H_BASE + 344;
 HEAP32[H_BASE + 584 >> 2] = H_BASE + 336;
 HEAP32[H_BASE + 588 >> 2] = H_BASE + 328;
 HEAP32[H_BASE + 592 >> 2] = H_BASE + 312;
 HEAP32[H_BASE + 596 >> 2] = H_BASE + 280;
 HEAP32[H_BASE + 600 >> 2] = H_BASE + 256;
 HEAP32[H_BASE + 604 >> 2] = H_BASE + 248;
 HEAP32[H_BASE + 608 >> 2] = H_BASE + 224;
 HEAP32[H_BASE + 612 >> 2] = H_BASE + 216;
 HEAP32[H_BASE + 616 >> 2] = H_BASE + 176;
 HEAP32[H_BASE + 620 >> 2] = H_BASE + 160;
 HEAP32[H_BASE + 624 >> 2] = H_BASE + 136;
}
function __ZN3WTF7HashSetIPN7WebCore24CachedResourceHandleBaseENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 2) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore24CachedResourceHandleBaseES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
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
function __ZN7WebCore14CachedResource25clearResourceToRevalidateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 588 | 0;
 if ((HEAP8[i2] & 64) != 0) {
  return;
 }
 i3 = i1 + 612 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) + 616 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == (i1 | 0)) {
   HEAP32[i4 >> 2] = 0;
   i5 = HEAP32[i3 >> 2] | 0;
   if ((HEAP32[i5 + 16 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i5 + 36 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i5 + 236 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i5 + 584 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i5 + 580 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i5 + 612 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i5 + 616 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP8[i5 + 588 | 0] & 16) != 0) {
    break;
   }
   if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
    __ZN7WebCore24InspectorInstrumentation29willDestroyCachedResourceImplEPNS_14CachedResourceE(i5);
   }
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i4 = i1 + 620 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i5);
  _memset(i4 | 0, 0, 16) | 0;
 }
 HEAP32[i3 >> 2] = 0;
 if ((HEAP32[i1 + 16 >> 2] | 0) != 0) {
  return;
 }
 if ((HEAP32[i1 + 36 >> 2] | 0) != 0) {
  return;
 }
 if ((HEAP32[i1 + 236 >> 2] | 0) != 0) {
  return;
 }
 if ((HEAP32[i1 + 584 >> 2] | 0) != 0) {
  return;
 }
 if ((HEAP32[i1 + 580 >> 2] | 0) != 0) {
  return;
 }
 if ((HEAP32[i1 + 616 >> 2] | 0) != 0) {
  return;
 }
 if ((HEAP8[i2] & 16) != 0) {
  return;
 }
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
  __ZN7WebCore24InspectorInstrumentation29willDestroyCachedResourceImplEPNS_14CachedResourceE(i1);
 }
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
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
function __ZN3WTF7HashMapIPN7WebCore20CachedResourceClientENS_6OwnPtrINS1_14CachedResource22CachedResourceCallbackEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENSA_IS7_EEE4findERKS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] << 3 | 0;
   i6 = i5;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = i8;
   i10 = i9 + ~(i9 << 15) | 0;
   i9 = (i10 >>> 10 ^ i10) * 9 & -1;
   i10 = i9 >>> 6 ^ i9;
   i9 = i10 + ~(i10 << 11) | 0;
   i10 = i9 >>> 16 ^ i9;
   i9 = i10 & i5;
   i11 = i4 + (i9 << 3) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   L4 : do {
    if ((i12 | 0) == (i8 | 0)) {
     i13 = i11;
    } else {
     i14 = (i10 >>> 23) + ~i10 | 0;
     i15 = i14 << 12 ^ i14;
     i14 = i15 >>> 7 ^ i15;
     i15 = i14 << 2 ^ i14;
     i14 = i15 >>> 20 ^ i15 | 1;
     i15 = 0;
     i16 = i9;
     i17 = i12;
     while (1) {
      if ((i17 | 0) == 0) {
       break;
      }
      i18 = (i15 | 0) == 0 ? i14 : i15;
      i19 = i18 + i16 & i5;
      i20 = i4 + (i19 << 3) | 0;
      i21 = HEAP32[i20 >> 2] | 0;
      if ((i21 | 0) == (i8 | 0)) {
       i13 = i20;
       break L4;
      } else {
       i15 = i18;
       i16 = i19;
       i17 = i21;
      }
     }
     i17 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
     i6 = i17;
     i7 = i17;
     break L1;
    }
   } while (0);
   i8 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
   i6 = (i13 | 0) == 0 ? i8 : i13;
   i7 = i8;
  }
 } while (0);
 i13 = i1;
 HEAP32[i13 >> 2] = i6;
 HEAP32[i13 + 4 >> 2] = i7;
 return;
}
function __ZN3WTF7HashMapIPN7WebCore20CachedResourceClientENS_6OwnPtrINS1_14CachedResource22CachedResourceCallbackEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENSA_IS7_EEE4takeERKS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN3WTF7HashMapIPN7WebCore20CachedResourceClientENS_6OwnPtrINS1_14CachedResource22CachedResourceCallbackEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENSA_IS7_EEE4findERKS3_(i5, i2, i3);
 i3 = i2 | 0;
 i6 = i2 + 4 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == ((HEAP32[i3 >> 2] | 0) + (HEAP32[i6 >> 2] << 3) | 0)) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i8 = i7 + 4 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = HEAP32[i5 >> 2] | 0;
 i5 = i2 | 0;
 do {
  if ((i8 | 0) != ((HEAP32[i3 >> 2] | 0) + (HEAP32[i6 >> 2] << 3) | 0)) {
   i9 = HEAP32[i8 + 4 >> 2] | 0;
   if ((i9 | 0) != 0) {
    __ZN7WebCore9TimerBaseD2Ev(i9 + 8 | 0);
    __ZdlPv(i9);
   }
   HEAP32[i8 >> 2] = -1;
   i9 = i2 + 16 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = i2 + 12 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i10;
   i9 = HEAP32[i6 >> 2] | 0;
   if (!((i10 * 6 & -1 | 0) < (i9 | 0) & (i9 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIPN7WebCore20CachedResourceClientENS_12KeyValuePairIS3_NS_6OwnPtrINS1_14CachedResource22CachedResourceCallbackEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS3_EENS_7HashMapIS3_S8_SD_NS_10HashTraitsIS3_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i5, (i9 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 HEAP32[i1 >> 2] = i7;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20ResourceResponseBaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore13HTTPHeaderMapD1Ev(i1 + 80 | 0);
 i2 = HEAP32[i1 + 76 >> 2] | 0;
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
 i2 = HEAP32[i1 + 68 >> 2] | 0;
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
 i2 = HEAP32[i1 + 64 >> 2] | 0;
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
 i2 = HEAP32[i1 + 48 >> 2] | 0;
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
function __ZN7WebCore14CachedResource13makePurgeableEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 452 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) == 0;
 if (!(i6 & i2)) {
  i7 = i6 | i2;
  STACKTOP = i3;
  return i7 | 0;
 }
 i2 = i1 + 448 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 if ((HEAP32[i6 + 4 >> 2] | 0) != 1) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 __ZNK7WebCore14ResourceBuffer21createPurgeableBufferEv(i6);
 if (!(__ZNK7WebCore14ResourceBuffer18hasPurgeableBufferEv(HEAP32[i2 >> 2] | 0) | 0)) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 __ZN7WebCore14ResourceBuffer22releasePurgeableBufferEv(i4, HEAP32[i2 >> 2] | 0);
 i6 = HEAP32[i5 >> 2] | 0;
 i8 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i5 >> 2] = i4;
 do {
  if ((i6 | 0) != 0) {
   __ZdlPv(i6);
   i4 = HEAP32[i8 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZdlPv(i4);
  }
 } while (0);
 i8 = HEAP32[i5 >> 2] | 0;
 HEAP32[i8 + 8 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 92 >> 2] & 15](i1) | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 }
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i1 >> 2] = i8;
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 }
 i8 = i2 - 4 | 0;
 if ((i8 | 0) == 0) {
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
 i7 = 1;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore14CachedResource16unregisterHandleEPNS_24CachedResourceHandleBaseE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 i2 = i1 + 580 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i5;
 i6 = i1 + 612 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  i7 = i5;
 } else {
  __ZN3WTF7HashSetIPN7WebCore24CachedResourceHandleBaseENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 620 | 0, i4) | 0;
  i7 = HEAP32[i2 >> 2] | 0;
 }
 if ((i7 | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 + 16 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 + 36 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 + 236 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 + 584 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 + 616 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i1 + 588 | 0] & 16) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
  __ZN7WebCore24InspectorInstrumentation29willDestroyCachedResourceImplEPNS_14CachedResourceE(i1);
 }
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i3;
 return;
}
function __ZN3WTF7HashMapIPN7WebCore20CachedResourceClientENS_6OwnPtrINS1_14CachedResource22CachedResourceCallbackEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENSA_IS7_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN3WTF7HashMapIPN7WebCore20CachedResourceClientENS_6OwnPtrINS1_14CachedResource22CachedResourceCallbackEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENSA_IS7_EEE4findERKS3_(i4, i1, i2);
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i2 | 0) == ((HEAP32[i1 >> 2] | 0) + (HEAP32[i4 >> 2] << 3) | 0)) {
  i5 = 0;
  STACKTOP = i3;
  return i5 | 0;
 }
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i6 | 0) != 0) {
  __ZN7WebCore9TimerBaseD2Ev(i6 + 8 | 0);
  __ZdlPv(i6);
 }
 HEAP32[i2 >> 2] = -1;
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = i1 + 12 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i6;
 i2 = HEAP32[i4 >> 2] | 0;
 if (!((i6 * 6 & -1 | 0) < (i2 | 0) & (i2 | 0) > 8)) {
  i5 = 1;
  STACKTOP = i3;
  return i5 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore20CachedResourceClientENS_12KeyValuePairIS3_NS_6OwnPtrINS1_14CachedResource22CachedResourceCallbackEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS3_EENS_7HashMapIS3_S8_SD_NS_10HashTraitsIS3_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i1 | 0, (i2 | 0) / 2 & -1, 0) | 0;
 i5 = 1;
 STACKTOP = i3;
 return i5 | 0;
}
function __ZN7WebCore14CachedResource14setDecodedSizeEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 572 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  return;
 }
 i5 = i2 - i4 | 0;
 i4 = i1 + 588 | 0;
 i6 = HEAP8[i4] | 0;
 if ((i6 & 16) == 0) {
  i7 = i6;
 } else {
  __ZN7WebCore11MemoryCache17removeFromLRUListEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i1);
  i7 = HEAP8[i4] | 0;
 }
 HEAP32[i3 >> 2] = i2;
 if ((i7 & 16) == 0) {
  return;
 }
 __ZN7WebCore11MemoryCache15insertInLRUListEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i1);
 i7 = (HEAP8[i4] & 4) == 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == 0) {
   if (i7) {
    break;
   }
   __ZN7WebCore11MemoryCache34removeFromLiveDecodedResourcesListEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i1);
  } else {
   if (!i7) {
    break;
   }
   if ((HEAP32[i1 + 16 >> 2] | 0) == 0) {
    if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
     break;
    }
   }
   __ZN7WebCore11MemoryCache32insertInLiveDecodedResourcesListEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i1);
  }
 } while (0);
 i7 = __ZN7WebCore11memoryCacheEv() | 0;
 if ((HEAP32[i1 + 16 >> 2] | 0) == 0) {
  i8 = (HEAP32[i1 + 36 >> 2] | 0) != 0;
 } else {
  i8 = 1;
 }
 __ZN7WebCore11MemoryCache10adjustSizeEbi(i7, i8, i5);
 return;
}
function __ZNK7WebCore14CachedResource10currentAgeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0, i4 = 0, i5 = 0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0;
 i2 = i1 + 272 | 0;
 d3 = +__ZNK7WebCore20ResourceResponseBase4dateEv(i2);
 HEAPF64[tempDoublePtr >> 3] = d3;
 i4 = HEAP32[tempDoublePtr + 4 >> 2] & 2146435072;
 i5 = 2146435072;
 if (i4 >>> 0 < i5 >>> 0 | i4 >>> 0 == i5 >>> 0 & (HEAP32[tempDoublePtr >> 2] & 0) >>> 0 < 0 >>> 0) {
  d6 = +HEAPF64[i1 + 440 >> 3] - d3;
  d7 = d6 > +0 ? d6 : +0;
 } else {
  d7 = +0;
 }
 d6 = +__ZNK7WebCore20ResourceResponseBase3ageEv(i2);
 HEAPF64[tempDoublePtr >> 3] = d6;
 i2 = HEAP32[tempDoublePtr + 4 >> 2] & 2146435072;
 i5 = 2146435072;
 if (!(i2 >>> 0 < i5 >>> 0 | i2 >>> 0 == i5 >>> 0 & (HEAP32[tempDoublePtr >> 2] & 0) >>> 0 < 0 >>> 0)) {
  d8 = d7;
  d9 = +__ZN3WTF11currentTimeEv();
  i10 = i1 + 440 | 0;
  d11 = +HEAPF64[i10 >> 3];
  i12 = i10 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i10 + 4 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  d16 = d9 - d11;
  d17 = d8 + d16;
  return +d17;
 }
 d8 = d7 < d6 ? d6 : d7;
 d9 = +__ZN3WTF11currentTimeEv();
 i10 = i1 + 440 | 0;
 d11 = +HEAPF64[i10 >> 3];
 i12 = i10 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i10 + 4 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 d16 = d9 - d11;
 d17 = d8 + d16;
 return +d17;
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
function __ZN7WebCore14SecurityOriginD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
function __ZN7WebCore14CachedResource16responseReceivedERKNS_16ResourceResponseE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 __ZN7WebCore20ResourceResponseBaseaSERKS0_(i1 + 272 | 0, i5) | 0;
 HEAP8[i1 + 432 | 0] = HEAP8[i2 + 160 | 0] & 1;
 HEAPF64[i1 + 440 >> 3] = +__ZN3WTF11currentTimeEv();
 i2 = i4 | 0;
 i6 = HEAP32[(__ZNK7WebCore20ResourceResponseBase16textEncodingNameEv(i5) | 0) >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i6 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i4 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore14CachedResource9isExpiredEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, d4 = +0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, d9 = +0;
 i2 = i1 + 272 | 0;
 if ((HEAP8[i1 + 388 | 0] & 1) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 d4 = +__ZNK7WebCore20ResourceResponseBase4dateEv(i2);
 HEAPF64[tempDoublePtr >> 3] = d4;
 i5 = HEAP32[tempDoublePtr + 4 >> 2] & 2146435072;
 i6 = 2146435072;
 if (i5 >>> 0 < i6 >>> 0 | i5 >>> 0 == i6 >>> 0 & (HEAP32[tempDoublePtr >> 2] & 0) >>> 0 < 0 >>> 0) {
  d7 = +HEAPF64[i1 + 440 >> 3] - d4;
  d8 = d7 > +0 ? d7 : +0;
 } else {
  d8 = +0;
 }
 d7 = +__ZNK7WebCore20ResourceResponseBase3ageEv(i2);
 HEAPF64[tempDoublePtr >> 3] = d7;
 i2 = HEAP32[tempDoublePtr + 4 >> 2] & 2146435072;
 i6 = 2146435072;
 if (i2 >>> 0 < i6 >>> 0 | i2 >>> 0 == i6 >>> 0 & (HEAP32[tempDoublePtr >> 2] & 0) >>> 0 < 0 >>> 0) {
  d9 = d8 < d7 ? d7 : d8;
 } else {
  d9 = d8;
 }
 d8 = +__ZN3WTF11currentTimeEv();
 d7 = d9 + (d8 - +HEAPF64[i1 + 440 >> 3]);
 i3 = d7 > +__ZNK7WebCore14CachedResource17freshnessLifetimeEv(i1);
 return i3 | 0;
}
function __ZN7WebCore14CachedResource15setLoadPriorityENS_20ResourceLoadPriorityE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 L1 : do {
  if ((i2 | 0) == -1) {
   switch ((HEAP32[i1 + 588 >> 2] | 0) >>> 7 & 15 | 0) {
   case 2:
    {
     i3 = 3;
     break L1;
     break;
    }
   case 0:
    {
     i3 = 4;
     break L1;
     break;
    }
   case 1:
    {
     i3 = 1;
     break L1;
     break;
    }
   case 7:
    {
     i3 = 3;
     break L1;
     break;
    }
   case 6:
    {
     i3 = 1;
     break L1;
     break;
    }
   case 8:
    {
     i3 = 2;
     break L1;
     break;
    }
   case 3:
   case 4:
   case 5:
    {
     i3 = 2;
     break L1;
     break;
    }
   default:
    {
     i3 = 1;
     break L1;
    }
   }
  } else {
   i3 = i2;
  }
 } while (0);
 i2 = i1 + 268 | 0;
 if ((i3 | 0) == (HEAP32[i2 >> 2] | 0)) {
  return;
 }
 HEAP32[i2 >> 2] = i3;
 i2 = HEAP32[i1 + 236 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore14ResourceLoader17didChangePriorityENS_20ResourceLoadPriorityE(i2, i3);
 return;
}
function __ZN7WebCore14CachedResource16deleteIfPossibleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 16 >> 2] | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 36 >> 2] | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 236 >> 2] | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 584 >> 2] | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 580 >> 2] | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 612 >> 2] | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 616 >> 2] | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP8[i1 + 588 | 0] & 16) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
  __ZN7WebCore24InspectorInstrumentation29willDestroyCachedResourceImplEPNS_14CachedResourceE(i1);
 }
 if ((i1 | 0) == 0) {
  i2 = 1;
  return i2 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 i2 = 1;
 return i2 | 0;
}
function __ZN7WebCore14CachedResource14setEncodedSizeEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 568 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  return;
 }
 i5 = i1 + 588 | 0;
 i6 = HEAP8[i5] | 0;
 if ((i6 & 16) == 0) {
  i7 = i6;
 } else {
  __ZN7WebCore11MemoryCache17removeFromLRUListEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i1);
  i7 = HEAP8[i5] | 0;
 }
 HEAP32[i3 >> 2] = i2;
 if ((i7 & 16) == 0) {
  return;
 }
 __ZN7WebCore11MemoryCache15insertInLRUListEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i1);
 i7 = __ZN7WebCore11memoryCacheEv() | 0;
 if ((HEAP32[i1 + 16 >> 2] | 0) == 0) {
  i8 = (HEAP32[i1 + 36 >> 2] | 0) != 0;
 } else {
  i8 = 1;
 }
 __ZN7WebCore11MemoryCache10adjustSizeEbi(i7, i8, i2 - i4 | 0);
 return;
}
function __ZN7WebCore14CachedResource24passesAccessControlCheckEPNS_14SecurityOriginE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = __ZN7WebCore24passesAccessControlCheckERKNS_16ResourceResponseENS_17StoredCredentialsEPNS_14SecurityOriginERN3WTF6StringE(i1 + 272 | 0, (__ZNK7WebCore19ResourceRequestBase12allowCookiesEv(i1 + 48 | 0) | 0) & 1 ^ 1, i2, i4) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return i6 | 0;
 }
 i5 = i4 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i3;
  return i6 | 0;
 } else {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i3;
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore14CachedResource5errorENS0_6StatusE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 588 | 0;
 i4 = i3;
 HEAP32[i4 >> 2] = HEAP32[i4 >> 2] & -14337 | i2 << 11 & 14336;
 i2 = i1 + 448 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 HEAP8[i3] = HEAP8[i3] & -33;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 88 >> 2] & 31](i1);
 return;
}
function __ZN7WebCore14CachedResource14registerHandleEPNS_24CachedResourceHandleBaseE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 i2 = i1 + 580 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 if ((HEAP32[i1 + 612 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF9HashTableIPN7WebCore24CachedResourceHandleBaseES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 620 | 0, i4, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14CachedResource20didAccessDecodedDataEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0;
 HEAPF64[i1 + 552 >> 3] = d2;
 i3 = HEAP8[i1 + 588 | 0] | 0;
 if ((i3 & 16) == 0) {
  return;
 }
 if ((i3 & 4) != 0) {
  __ZN7WebCore11MemoryCache34removeFromLiveDecodedResourcesListEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i1);
  __ZN7WebCore11MemoryCache32insertInLiveDecodedResourcesListEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i1);
 }
 __ZN7WebCore11MemoryCache5pruneEv(__ZN7WebCore11memoryCacheEv() | 0);
 return;
}
function __ZN7WebCore22DeferrableOneShotTimerINS_14CachedResourceEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 64 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  HEAP8[i2] = 0;
  __ZN7WebCore9TimerBase5startEdd(i1, +HEAPF64[i1 + 56 >> 3], +0);
  return;
 }
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i5 = i4;
 } else {
  i5 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 FUNCTION_TABLE_vii[i5 & 31](i3, i1);
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
function __ZNK7WebCore14CachedResource20canUseCacheValidatorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 588 | 0;
 if ((HEAP8[i2] & 32) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((((HEAP32[i2 >> 2] | 0) >>> 11 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = i1 + 272 | 0;
 if (__ZNK7WebCore20ResourceResponseBase27cacheControlContainsNoStoreEv(i2) | 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore20ResourceResponseBase23hasCacheValidatorFieldsEv(i2) | 0;
 return i3 | 0;
}
function __ZN7WebCore5TimerINS_14CachedResource22CachedResourceCallbackEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 31](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 31](i4, i1);
  return;
 }
}
function __ZN7WebCore14CachedResource22CachedResourceCallbackC2EPS0_PNS_20CachedResourceClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 i3 = i1 + 8 | 0;
 i2 = i3;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i3 >> 2] = H_BASE + 400;
 HEAP32[i1 + 52 >> 2] = i1;
 i3 = i1 + 56 | 0;
 HEAP32[i3 >> 2] = F_BASE_vii + 8;
 HEAP32[i3 + 4 >> 2] = 0;
 __ZN7WebCore9TimerBase5startEdd(i2, +0, +0);
 return;
}
function __ZN7WebCore14CachedResource22CachedResourceCallbackC1EPS0_PNS_20CachedResourceClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 i3 = i1 + 8 | 0;
 i2 = i3;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i3 >> 2] = H_BASE + 400;
 HEAP32[i1 + 52 >> 2] = i1;
 i3 = i1 + 56 | 0;
 HEAP32[i3 >> 2] = F_BASE_vii + 8;
 HEAP32[i3 + 4 >> 2] = 0;
 __ZN7WebCore9TimerBase5startEdd(i2, +0, +0);
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
function __ZN7WebCore14CachedResource11clearLoaderEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 236 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 4 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore14CachedResource26destroyDecodedDataIfNeededEv(i1) {
 i1 = i1 | 0;
 if ((HEAP32[i1 + 572 >> 2] | 0) == 0) {
  return;
 }
 if (+HEAPF64[(__ZN7WebCore11memoryCacheEv() | 0) + 16 >> 3] == +0) {
  return;
 }
 if (+HEAPF64[i1 + 464 >> 3] != +0) {
  HEAP8[i1 + 520 | 0] = 1;
  return;
 } else {
  __ZN7WebCore9TimerBase5startEdd(i1 + 456 | 0, +HEAPF64[i1 + 512 >> 3], +0);
  return;
 }
}
function __ZNK7WebCore14CachedResource21isSafeToMakePurgeableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 do {
  if ((HEAP32[i1 + 16 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 36 >> 2] | 0) != 0) {
    i2 = 0;
    break;
   }
   if ((HEAP32[i1 + 616 >> 2] | 0) != 0) {
    i2 = 0;
    break;
   }
   i2 = (HEAP32[i1 + 612 >> 2] | 0) == 0;
  } else {
   i2 = 0;
  }
 } while (0);
 return i2 | 0;
}
function __ZN7WebCore14CachedResource10cancelLoadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 588 | 0;
 if ((HEAP8[i2] & 32) == 0) {
  return;
 }
 i3 = i2;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4 & -14337 | 6144;
 HEAP8[i2] = i4 & 255 & -33;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 88 >> 2] & 31](i1);
 return;
}
function __ZN7WebCore14CachedResource18failBeforeStartingEv(i1) {
 i1 = i1 | 0;
 if ((HEAP32[i1 + 612 >> 2] | 0) != 0) {
  __ZN7WebCore11MemoryCache18revalidationFailedEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i1);
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 31](i1, 3);
 return;
}
function __ZN7WebCore14CachedResource9addClientEPNS_20CachedResourceClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (!(__ZN7WebCore14CachedResource14addClientToSetEPNS_20CachedResourceClientE(i1, i2) | 0)) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 40 >> 2] & 31](i1, i2);
 return;
}
function __ZNK7WebCore14CachedResource12overheadSizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(__ZNK7WebCore19ResourceRequestBase3urlEv(i1 + 48 | 0) | 0) >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 2304;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 4 >> 2] << 1) + 2304 | 0;
 return i3 | 0;
}
function dynCall_viiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function __ZN7WebCore14CachedResource22CachedResourceCallback10timerFiredEPNS_5TimerIS1_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 40 >> 2] & 31](i2, HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore14CachedResource13finishLoadingEPNS_14ResourceBufferE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 + 588 | 0;
 HEAP8[i2] = HEAP8[i2] & -33;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 88 >> 2] & 31](i1);
 return;
}
function __ZN7WebCore14CachedResource6finishEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 588 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if (((i1 >>> 11 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
  return;
 }
 HEAP32[i2 >> 2] = i1 & -14337 | 4096;
 return;
}
function __ZNK7WebCore14CachedResource11isPurgeableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 452 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 12 >> 2] | 0) != 0;
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore14CachedResource29decodedDataDeletionTimerFiredEPNS_22DeferrableOneShotTimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 68 >> 2] & 31](i1);
 return;
}
function __ZN7WebCore14CachedResource15willSendRequestERNS_15ResourceRequestERKNS_16ResourceResponseE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = i1 + 588 | 0;
 HEAP8[i3] = HEAP8[i3] | 8;
 return;
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
function __ZN7WebCore14CachedResource22CachedResourceCallback6cancelEv(i1) {
 i1 = i1 | 0;
 if (+HEAPF64[i1 + 16 >> 3] == +0) {
  return;
 }
 __ZN7WebCore9TimerBase4stopEv(i1 + 8 | 0);
 return;
}
function __ZN7WebCore14CachedResource23setResourceToRevalidateEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i2 + 616 >> 2] = i1;
 HEAP32[i1 + 612 >> 2] = i2;
 return;
}
function __ZN7WebCore5TimerINS_14CachedResource22CachedResourceCallbackEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function __ZN7WebCore22DeferrableOneShotTimerINS_14CachedResourceEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function __ZN7WebCore14CachedResource11didSendDataEyy(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function b5(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(5);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore5TimerINS_14CachedResource22CachedResourceCallbackEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function __ZN7WebCore14CachedResourceD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14CachedResourceD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore22DeferrableOneShotTimerINS_14CachedResourceEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore14CachedResource15didRemoveClientEPNS_20CachedResourceClientE(i1, i2) {
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
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function __ZN7WebCore14CachedResource13addDataBufferEPNS_14ResourceBufferE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore14CachedResource8canReuseERKNS_15ResourceRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 1;
}
function __ZNK7WebCore14CachedResource8encodingEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore14CachedResource7addDataEPKcj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZN7WebCore14CachedResource11setEncodingERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function __ZNK7WebCore14CachedResource32shouldIgnoreHTTPStatusCodeErrorsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function __ZNK7WebCore14CachedResource24mayTryReplaceEncodedDataEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZN7WebCore14CachedResource18destroyDecodedDataEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore14CachedResource14stillNeedsLoadEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore14CachedResource17allClientsRemovedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore14CachedResource13purgePriorityEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore14CachedResource9wasPurgedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14CachedResource7isImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b8(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(8);
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function b1(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(1);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
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
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore14CachedResource11didSendDataEyy,b0];
  var FUNCTION_TABLE_did = [b1,b1,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore14CachedResource17allClientsRemovedEv,b2,__ZN7WebCore22DeferrableOneShotTimerINS_14CachedResourceEE5firedEv,b2,__ZN7WebCore14CachedResourceD2Ev,b2,__ZN7WebCore5TimerINS_14CachedResource22CachedResourceCallbackEE5firedEv,b2,__ZN7WebCore14CachedResourceD0Ev,b2,__ZN7WebCore14CachedResource18destroyDecodedDataEv,b2,__ZN7WebCore22DeferrableOneShotTimerINS_14CachedResourceEED0Ev,b2,__ZN7WebCore14CachedResource11checkNotifyEv,b2,__ZN7WebCore22DeferrableOneShotTimerINS_14CachedResourceEED1Ev,b2,__ZN7WebCore14CachedResource34switchClientsToRevalidatedResourceEv,b2,__ZN7WebCore5TimerINS_14CachedResource22CachedResourceCallbackEED1Ev,b2,__ZN7WebCore5TimerINS_14CachedResource22CachedResourceCallbackEED0Ev,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore14CachedResource5errorENS0_6StatusE,b3,__ZN7WebCore14CachedResource29decodedDataDeletionTimerFiredEPNS_22DeferrableOneShotTimerIS0_EE,b3,__ZN7WebCore14CachedResource12didAddClientEPNS_20CachedResourceClientE,b3,__ZN7WebCore14CachedResource22CachedResourceCallback10timerFiredEPNS_5TimerIS1_EE,b3,__ZN7WebCore14CachedResource13finishLoadingEPNS_14ResourceBufferE,b3,__ZNK7WebCore14CachedResource8encodingEv,b3,__ZN7WebCore14CachedResource15didRemoveClientEPNS_20CachedResourceClientE,b3,__ZN7WebCore14CachedResource16responseReceivedERKNS_16ResourceResponseE,b3,__ZN7WebCore14CachedResource13addDataBufferEPNS_14ResourceBufferE,b3,__ZN7WebCore14CachedResource11setEncodingERKN3WTF6StringE,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZNK7WebCore14CachedResource7isImageEv,b4,__ZNK7WebCore14CachedResource32shouldIgnoreHTTPStatusCodeErrorsEv,b4,__ZNK7WebCore14CachedResource14stillNeedsLoadEv,b4,__ZNK7WebCore14CachedResource13purgePriorityEv,b4,__ZNK7WebCore14CachedResource24mayTryReplaceEncodedDataEv,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_viiiiiii = [b5,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7,__ZNK7WebCore14CachedResource8canReuseERKNS_15ResourceRequestE,b7,__ZNK7WebCore14CachedResource31mustRevalidateDueToCacheHeadersENS_11CachePolicyE,b7,b7,b7];
  var FUNCTION_TABLE_viii = [b8,b8,__ZN7WebCore14CachedResource4loadEPNS_20CachedResourceLoaderERKNS_21ResourceLoaderOptionsE,b8,__ZN7WebCore14CachedResource7addDataEPKcj,b8,__ZN7WebCore14CachedResource22CachedResourceCallbackC2EPS0_PNS_20CachedResourceClientE,b8,__ZN7WebCore14CachedResource15willSendRequestERNS_15ResourceRequestERKNS_16ResourceResponseE,b8,__ZN7WebCore14CachedResourceC2ERKNS_15ResourceRequestENS0_4TypeE,b8,b8,b8,b8,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viiiiiii: dynCall_viiiiiii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viii: dynCall_viii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viiiiiii": invoke_viiiiiii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viii": invoke_viii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN3WTF10StringImpl19latin1CaseFoldTableE": __ZN3WTF10StringImpl19latin1CaseFoldTableE, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore14CachedResource10currentAgeEv","__ZN3WTF7HashMapIPN7WebCore20CachedResourceClientENS_6OwnPtrINS1_14CachedResource22CachedResourceCallbackEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENSA_IS7_EEE4findERKS3_","__ZN7WebCore22DeferrableOneShotTimerINS_14CachedResourceEE5firedEv","__ZN7WebCore14CachedResource14addClientToSetEPNS_20CachedResourceClientE","__ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE","_memcpy","__ZN7WebCore22DeferrableOneShotTimerINS_14CachedResourceEED0Ev","__ZN7WebCore14CachedResource11checkNotifyEv","__ZN3WTF9HashTableIPN7WebCore20CachedResourceClientENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_","__ZNK7WebCore14CachedResource9isExpiredEv","__ZN3WTF7HashMapIPN7WebCore20CachedResourceClientENS_6OwnPtrINS1_14CachedResource22CachedResourceCallbackEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENSA_IS7_EEE4takeERKS3_","__ZN3WTF9HashTableIPN7WebCore20CachedResourceClientENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_iEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_","__ZN7WebCore14CachedResource25clearResourceToRevalidateEv","__ZN7WebCore19ResourceRequestBaseD2Ev","__ZNK7WebCore14CachedResource8encodingEv","__ZN7WebCore26CachedResourceClientWalkerINS_20CachedResourceClientEEC2ERKN3WTF14HashCountedSetIPS1_NS3_7PtrHashIS5_EENS3_10HashTraitsIS5_EEEE","__ZN7WebCore14CachedResource15setLoadPriorityENS_20ResourceLoadPriorityE","__ZN7WebCore14CachedResource15didRemoveClientEPNS_20CachedResourceClientE","__ZN7WebCore14CachedResource13finishLoadingEPNS_14ResourceBufferE","__ZNK7WebCore14CachedResource11isPurgeableEv","__ZNK7WebCore14CachedResource12overheadSizeEv","__ZN7WebCore14CachedResource11setEncodingERKN3WTF6StringE","__ZN3WTF7HashMapIPN7WebCore20CachedResourceClientENS_6OwnPtrINS1_14CachedResource22CachedResourceCallbackEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENSA_IS7_EEE6removeERKS3_","__ZN7WebCore14CachedResourceC2ERKNS_15ResourceRequestENS0_4TypeE","__ZN7WebCore14CachedResource13makePurgeableEb","__ZNK7WebCore14CachedResource9wasPurgedEv","__ZN7WebCore14CachedResource29decodedDataDeletionTimerFiredEPNS_22DeferrableOneShotTimerIS0_EE","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_EaSERKSE_","__ZN7WebCore20ResourceResponseBaseaSERKS0_","__ZN3WTF9HashTableIPN7WebCore20CachedResourceClientENS_12KeyValuePairIS3_NS_6OwnPtrINS1_14CachedResource22CachedResourceCallbackEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS3_EENS_7HashMapIS3_S8_SD_NS_10HashTraitsIS3_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKS3_NS_10PassOwnPtrIS7_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S9_SB_SD_SJ_SG_EEEEOT0_OT1_","__ZN7WebCore14CachedResource20didAccessDecodedDataEd","__ZN7WebCore14CachedResource14setEncodedSizeEj","__ZN7WebCore15ResourceRequestD2Ev","__ZN7WebCore14CachedResource22CachedResourceCallback10timerFiredEPNS_5TimerIS1_EE","__ZN7WebCore14CachedResourceD0Ev","__ZN7WebCore14CachedResource18destroyDecodedDataEv","__ZN7WebCore14CachedResource11didSendDataEyy","__ZN7WebCore22DeferrableOneShotTimerINS_14CachedResourceEED1Ev","__ZN7WebCore14CachedResource9addClientEPNS_20CachedResourceClientE","__ZNK7WebCore14CachedResource17freshnessLifetimeEv","__ZN3WTF9HashTableIPN7WebCore24CachedResourceHandleBaseES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZNK7WebCore14CachedResource14stillNeedsLoadEv","__ZN7WebCore14CachedResource16responseReceivedERKNS_16ResourceResponseE","__ZN7WebCore14CachedResource27addAdditionalRequestHeadersEPNS_20CachedResourceLoaderE","__ZNK7WebCore14CachedResource21isSafeToMakePurgeableEv","__ZN7WebCore14CachedResource5errorENS0_6StatusE","__ZNK7WebCore14CachedResource20canUseCacheValidatorEv","__ZN7WebCore19ResourceRequestBaseC2ERKS0_","__ZNK7WebCore14CachedResource8canReuseERKNS_15ResourceRequestE","__ZN7WebCore14CachedResource12didAddClientEPNS_20CachedResourceClientE","__ZN7WebCore14CachedResource11clearLoaderEv","_memset","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_22IdentityHashTranslatorIS7_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_","__ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j","__ZN7WebCore5TimerINS_14CachedResource22CachedResourceCallbackEE5firedEv","__ZN7WebCore14SecurityOriginD2Ev","__ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE","__ZNK7WebCore14CachedResource32shouldIgnoreHTTPStatusCodeErrorsEv","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E8reinsertEOS4_","__ZN7WebCore14CachedResource6finishEv","__ZN7WebCore14CachedResource16unregisterHandleEPNS_24CachedResourceHandleBaseE","__ZNK7WebCore14CachedResource13purgePriorityEv","__ZNK7WebCore14CachedResource24mayTryReplaceEncodedDataEv","__ZN7WebCore14CachedResource18failBeforeStartingEv","__ZN7WebCore20ResourceResponseBaseD2Ev","__ZN7WebCore5TimerINS_14CachedResource22CachedResourceCallbackEED0Ev","__ZN7WebCore14CachedResource24passesAccessControlCheckEPNS_14SecurityOriginE","__ZN7WebCore14CachedResource23setResourceToRevalidateEPS0_","__ZN7WebCore14CachedResource4loadEPNS_20CachedResourceLoaderERKNS_21ResourceLoaderOptionsE","__ZN7WebCore14CachedResource17allClientsRemovedEv","__ZN3WTF7HashSetIPN7WebCore24CachedResourceHandleBaseENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore14CachedResource14registerHandleEPNS_24CachedResourceHandleBaseE","__ZN7WebCore14CachedResource31updateResponseAfterRevalidationERKNS_16ResourceResponseE","__ZN7WebCore14CachedResource22CachedResourceCallback6cancelEv","__ZN7WebCore14CachedResource22CachedResourceCallbackC2EPS0_PNS_20CachedResourceClientE","__ZN7WebCore14CachedResource26destroyDecodedDataIfNeededEv","__ZN7WebCore14CachedResourceD2Ev","__ZN7WebCore14CachedResource7addDataEPKcj","__ZN7WebCore14CachedResource16deleteIfPossibleEv","__ZN7WebCore14CachedResource13addDataBufferEPNS_14ResourceBufferE","__ZN3WTF9HashTableIPN7WebCore24CachedResourceHandleBaseES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore14CachedResource7isImageEv","__ZN7WebCore14CachedResource34switchClientsToRevalidatedResourceEv","__ZN3WTF9HashTableIPN7WebCore20CachedResourceClientENS_12KeyValuePairIS3_NS_6OwnPtrINS1_14CachedResource22CachedResourceCallbackEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS3_EENS_7HashMapIS3_S8_SD_NS_10HashTraitsIS3_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_","__ZN7WebCore14CachedResource14setDecodedSizeEj","__ZNK7WebCore14CachedResource31mustRevalidateDueToCacheHeadersENS_11CachePolicyE","__ZN7WebCore5TimerINS_14CachedResource22CachedResourceCallbackEED1Ev","__ZN7WebCore14CachedResource10cancelLoadEv","__ZN7WebCore14CachedResource15willSendRequestERNS_15ResourceRequestERKNS_16ResourceResponseE"]

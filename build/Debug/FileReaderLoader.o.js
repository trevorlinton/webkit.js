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
H_BASE = parentModule["_malloc"](136 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 136;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore16FileReaderLoaderC1ENS0_8ReadTypeEPNS_22FileReaderLoaderClientE;
var __ZN7WebCore16FileReaderLoaderD1Ev;
/* memory initializer */ allocate([59,98,97,115,101,54,52,44,0,0,0,0,0,0,0,0,100,97,116,97,58,0,0,0,116,101,120,116,47,112,108,97,105,110,0,0,0,0,0,0,98,121,116,101,115,61,37,100,45,37,100,0,0,0,0,0,82,97,110,103,101,0,0,0,71,69,84,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viid(index,a1,a2,a3) {
  try {
    Module["dynCall_viid"](index,a1,a2,a3);
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
  var __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE=env.__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore16FileReaderLoaderE=(H_BASE+80)|0;
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
  var invoke_viid=env.invoke_viid;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore16FileReaderLoader16convertToDataURLEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 24 | 0;
 i5 = i2 + 40 | 0;
 HEAP32[i3 >> 2] = 0;
 i6 = i3 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i3 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP8[i3 + 12 | 0] = 1;
 HEAP32[i3 + 16 >> 2] = 0;
 HEAP32[i3 + 20 >> 2] = 0;
 __ZN3WTF13StringBuilder6appendEPKhj(i3, H_BASE + 24 | 0, 5);
 i8 = i1 + 100 | 0;
 do {
  if ((HEAP32[i8 >> 2] | 0) == 0) {
   __ZN3WTF13StringBuilder11shrinkToFitEv(i3);
   i9 = HEAP32[i6 >> 2] | 0;
   if ((i9 | 0) == 0) {
    __ZNK3WTF13StringBuilder11reifyStringEv(i3);
    i10 = HEAP32[i6 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i11 = 0;
    } else {
     i12 = i10;
     i13 = 4;
    }
   } else {
    i12 = i9;
    i13 = 4;
   }
   if ((i13 | 0) == 4) {
    i9 = i12 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i11 = i12;
   }
   i9 = i1 + 84 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i11;
   if ((i10 | 0) == 0) {
    break;
   }
   i9 = i10 | 0;
   i14 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i14;
    break;
   }
  } else {
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i3, i1 + 20 | 0);
   __ZN3WTF13StringBuilder6appendEPKhj(i3, H_BASE + 8 | 0, 8);
   i14 = i4 | 0;
   HEAP32[i14 >> 2] = 0;
   i9 = i4 + 4 | 0;
   HEAP32[i9 >> 2] = 0;
   i10 = i4 + 8 | 0;
   HEAP32[i10 >> 2] = 0;
   __ZN3WTF12base64EncodeEPKvjRNS_6VectorIcLj0ENS_15CrashOnOverflowEEENS_18Base64EncodePolicyE(HEAP32[(HEAP32[i1 + 76 >> 2] | 0) + 12 >> 2] | 0, HEAP32[i8 >> 2] | 0, i4, 0);
   HEAP8[i5] = 0;
   i15 = HEAP32[i10 >> 2] | 0;
   if ((i15 | 0) == (HEAP32[i9 >> 2] | 0)) {
    i16 = i15 + 1 | 0;
    i17 = HEAP32[i14 >> 2] | 0;
    do {
     if (i17 >>> 0 > i5 >>> 0) {
      i13 = 13;
     } else {
      if ((i17 + i15 | 0) >>> 0 <= i5 >>> 0) {
       i13 = 13;
       break;
      }
      i18 = i5 - i17 | 0;
      i19 = i16 + (i15 >>> 2) | 0;
      i20 = i19 >>> 0 > 16 >>> 0 ? i19 : 16;
      i19 = i20 >>> 0 > i16 >>> 0 ? i20 : i16;
      do {
       if (i15 >>> 0 < i19 >>> 0) {
        i20 = __ZN3WTF18fastMallocGoodSizeEj(i19) | 0;
        HEAP32[i9 >> 2] = i20;
        i21 = __ZN3WTF10fastMallocEj(i20) | 0;
        HEAP32[i14 >> 2] = i21;
        _memcpy(i21 | 0, i17 | 0, i15) | 0;
        if ((i17 | 0) == 0) {
         break;
        }
        if ((HEAP32[i14 >> 2] | 0) == (i17 | 0)) {
         HEAP32[i14 >> 2] = 0;
         HEAP32[i9 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i17);
       }
      } while (0);
      i19 = HEAP32[i14 >> 2] | 0;
      i22 = i19 + i18 | 0;
      i23 = i19;
     }
    } while (0);
    if ((i13 | 0) == 13) {
     i19 = i16 + (i15 >>> 2) | 0;
     i21 = i19 >>> 0 > 16 >>> 0 ? i19 : 16;
     i19 = i21 >>> 0 > i16 >>> 0 ? i21 : i16;
     do {
      if (i15 >>> 0 < i19 >>> 0) {
       i21 = __ZN3WTF18fastMallocGoodSizeEj(i19) | 0;
       HEAP32[i9 >> 2] = i21;
       i20 = __ZN3WTF10fastMallocEj(i21) | 0;
       HEAP32[i14 >> 2] = i20;
       _memcpy(i20 | 0, i17 | 0, i15) | 0;
       if ((i17 | 0) == 0) {
        break;
       }
       if ((HEAP32[i14 >> 2] | 0) == (i17 | 0)) {
        HEAP32[i14 >> 2] = 0;
        HEAP32[i9 >> 2] = 0;
       }
       __ZN3WTF8fastFreeEPv(i17);
      }
     } while (0);
     i22 = i5;
     i23 = HEAP32[i14 >> 2] | 0;
    }
    HEAP8[i23 + (HEAP32[i10 >> 2] | 0) | 0] = HEAP8[i22] | 0;
    i24 = HEAP32[i10 >> 2] | 0;
   } else {
    HEAP8[(HEAP32[i14 >> 2] | 0) + i15 | 0] = 0;
    i24 = HEAP32[i10 >> 2] | 0;
   }
   HEAP32[i10 >> 2] = i24 + 1;
   i17 = HEAP32[i14 >> 2] | 0;
   if ((i17 | 0) != 0) {
    __ZN3WTF13StringBuilder6appendEPKhj(i3, i17, _strlen(i17 | 0) | 0);
   }
   __ZN3WTF13StringBuilder11shrinkToFitEv(i3);
   i17 = HEAP32[i6 >> 2] | 0;
   if ((i17 | 0) == 0) {
    __ZNK3WTF13StringBuilder11reifyStringEv(i3);
    i19 = HEAP32[i6 >> 2] | 0;
    if ((i19 | 0) == 0) {
     i25 = 0;
    } else {
     i26 = i19;
     i13 = 30;
    }
   } else {
    i26 = i17;
    i13 = 30;
   }
   if ((i13 | 0) == 30) {
    i17 = i26 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
    i25 = i26;
   }
   i17 = i1 + 84 | 0;
   i19 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = i25;
   do {
    if ((i19 | 0) != 0) {
     i17 = i19 | 0;
     i16 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i17 >> 2] = i16;
      break;
     }
    }
   } while (0);
   if ((HEAP32[i10 >> 2] | 0) != 0) {
    HEAP32[i10 >> 2] = 0;
   }
   i19 = HEAP32[i14 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   HEAP32[i14 >> 2] = 0;
   HEAP32[i9 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i19);
  }
 } while (0);
 i25 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i25 | 0) != 0) {
   i7 = i25 | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i25);
    break;
   } else {
    HEAP32[i7 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i25 = HEAP32[i6 >> 2] | 0;
 if ((i25 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i25 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i25);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore16FileReaderLoader5startEPNS_22ScriptExecutionContextEPNS_4BlobE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 296 | 0;
 i5 = i4 | 0;
 i6 = i4 + 48 | 0;
 i7 = i4 + 232 | 0;
 i8 = i4 + 240 | 0;
 i9 = i4 + 248 | 0;
 i10 = i4 + 288 | 0;
 i11 = i1 + 24 | 0;
 i12 = i2 + 12 | 0;
 __ZN7WebCore7BlobURL15createPublicURLEPNS_14SecurityOriginE(i5, HEAP32[i12 >> 2] | 0);
 i13 = i5 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i15 = i11 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = i14;
 do {
  if ((i16 | 0) != 0) {
   i14 = i16 | 0;
   i17 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i14 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i16 = HEAP8[i5 + 4 | 0] | 0;
 i17 = i1 + 28 | 0;
 HEAP8[i17] = HEAP8[i17] & -4 | i16 & 1 | i16 & 2;
 HEAP32[i1 + 32 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i5 + 12 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i5 + 16 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i5 + 20 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i5 + 24 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i5 + 28 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i5 + 32 >> 2];
 HEAP32[i1 + 60 >> 2] = HEAP32[i5 + 36 >> 2];
 HEAP32[i1 + 64 >> 2] = HEAP32[i5 + 40 >> 2];
 HEAP32[i1 + 68 >> 2] = HEAP32[i5 + 44 >> 2];
 i5 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i13 = i5 | 0;
   i16 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i13 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore22ThreadableBlobRegistry15registerBlobURLEPNS_14SecurityOriginERKNS_3URLES5_(HEAP32[i12 >> 2] | 0, i11, i3 + 12 | 0);
   i15 = i6 | 0;
   __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i15, i11, 0);
   _memset(i6 + 160 | 0, 0, 19) | 0;
   HEAP32[i6 + 180 >> 2] = 15;
   __ZN3WTF6StringC1EPKc(i7, H_BASE + 72 | 0);
   __ZN7WebCore19ResourceRequestBase13setHTTPMethodERKN3WTF6StringE(i15, i7);
   i16 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i13 = i16 | 0;
     i17 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i13 >> 2] = i17;
      break;
     }
    }
   } while (0);
   do {
    if ((HEAP8[i1 + 108 | 0] & 1) != 0) {
     i16 = HEAP32[i1 + 116 >> 2] | 0;
     __ZN3WTF6String6formatEPKcz(i8, H_BASE + 48 | 0, (i17 = STACKTOP, STACKTOP = STACKTOP + 16 | 0, HEAP32[i17 >> 2] = HEAP32[i1 + 112 >> 2], HEAP32[i17 + 8 >> 2] = i16, i17) | 0);
     STACKTOP = i17;
     __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i15, H_BASE + 64 | 0, i8);
     i17 = HEAP32[i8 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     i16 = i17 | 0;
     i13 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i16 >> 2] = i13;
      break;
     }
    }
   } while (0);
   __ZN7WebCore23ThreadableLoaderOptionsC1Ev(i9);
   HEAP32[i9 >> 2] = 0;
   HEAP32[i9 + 4 >> 2] = 1;
   HEAP32[i9 + 28 >> 2] = 0;
   HEAP32[i9 + 12 >> 2] = 0;
   HEAP32[i9 + 32 >> 2] = 0;
   i15 = i1 | 0;
   do {
    if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
     __ZN7WebCore16ThreadableLoader25loadResourceSynchronouslyEPNS_22ScriptExecutionContextERKNS_15ResourceRequestERNS_22ThreadableLoaderClientERKNS_23ThreadableLoaderOptionsE(i2, i6, i15, i9);
    } else {
     __ZN7WebCore16ThreadableLoader6createEPNS_22ScriptExecutionContextEPNS_22ThreadableLoaderClientERKNS_15ResourceRequestERKNS_23ThreadableLoaderOptionsE(i10, i2, i15, i6, i9);
     i13 = i10 | 0;
     i16 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     i17 = i1 + 72 | 0;
     i14 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = i16;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] & 7](i14);
     i14 = HEAP32[i13 >> 2] | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] & 7](i14);
    }
   } while (0);
   __ZN7WebCore23ThreadableLoaderOptionsD1Ev(i9);
   __ZN7WebCore15ResourceRequestD2Ev(i6);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i6 = i1 + 120 | 0;
 HEAP32[i6 >> 2] = 2;
 __ZN7WebCore16FileReaderLoader7cleanupEv(i1);
 i9 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] & 7](i9, HEAP32[i6 >> 2] | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore16FileReaderLoader13convertToTextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 24 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 40 | 0;
 i7 = i1 + 100 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = 0;
 i8 = i3 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i3 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP8[i3 + 12 | 0] = 1;
 HEAP32[i3 + 16 >> 2] = 0;
 HEAP32[i3 + 20 >> 2] = 0;
 i10 = i1 + 92 | 0;
 do {
  if ((HEAP32[i10 >> 2] | 0) == 0) {
   __ZN3WTF6StringC1EPKc(i4, H_BASE + 32 | 0);
   i11 = i1 + 12 | 0;
   if ((HEAP32[i11 >> 2] | 0) == 0) {
    i12 = __ZN7WebCore12UTF8EncodingEv() | 0;
   } else {
    i12 = i11;
   }
   i11 = __ZN3WTF10fastMallocEj(52) | 0;
   __ZN7WebCore19TextResourceDecoderC1ERKN3WTF6StringERKNS_12TextEncodingEb(i11, i4, i12, 0);
   i13 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i11;
   do {
    if ((i13 | 0) != 0) {
     i11 = i13 | 0;
     i14 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) == 0) {
      __ZN7WebCore19TextResourceDecoderD1Ev(i13);
      __ZN3WTF8fastFreeEPv(i13);
      break;
     } else {
      HEAP32[i11 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i13 = HEAP32[i4 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i14 = i13 | 0;
   i11 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i14 >> 2] = i11;
    break;
   }
  }
 } while (0);
 __ZN7WebCore19TextResourceDecoder6decodeEPKcj(i5, HEAP32[i10 >> 2] | 0, HEAP32[(HEAP32[i1 + 76 >> 2] | 0) + 12 >> 2] | 0, HEAP32[i7 >> 2] | 0);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i3, i5);
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i12 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i12;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[i7 >> 2] | 0) == (HEAP32[i1 + 104 >> 2] | 0)) {
   __ZN7WebCore19TextResourceDecoder5flushEv(i6, HEAP32[i10 >> 2] | 0);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i3, i6);
   i4 = HEAP32[i6 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i12 = i4 | 0;
   i5 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i12 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i3);
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i3);
  i3 = HEAP32[i8 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i15 = 0;
  } else {
   i16 = i3;
   i17 = 24;
  }
 } else {
  i16 = i6;
  i17 = 24;
 }
 if ((i17 | 0) == 24) {
  i17 = i16 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
  i15 = i16;
 }
 i16 = i1 + 84 | 0;
 i1 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = i15;
 do {
  if ((i1 | 0) != 0) {
   i15 = i1 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i15 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i9 = i1 | 0;
   i16 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i9 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = i1 | 0;
 i16 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i16 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i8 >> 2] = i16;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore16FileReaderLoader18didReceiveResponseEmRKNS_16ResourceResponseE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 i5 = i3 | 0;
 if ((__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i5) | 0) != 200) {
  i3 = __ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i5) | 0;
  if ((i3 | 0) == 404) {
   i6 = 1;
  } else if ((i3 | 0) == 403) {
   i6 = 2;
  } else {
   i6 = 4;
  }
  i3 = i1 + 120 | 0;
  HEAP32[i3 >> 2] = i6;
  __ZN7WebCore16FileReaderLoader7cleanupEv(i1);
  i6 = HEAP32[i1 + 8 >> 2] | 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 7](i6, HEAP32[i3 >> 2] | 0);
  STACKTOP = i2;
  return;
 }
 i3 = __ZNK7WebCore20ResourceResponseBase21expectedContentLengthEv(i5) | 0;
 i5 = tempRet0;
 i6 = 0;
 i7 = i3;
 do {
  if (i5 >>> 0 > i6 >>> 0 | i5 >>> 0 == i6 >>> 0 & i3 >>> 0 > 2147483647 >>> 0) {
   HEAP8[i1 + 96 | 0] = 1;
   if ((HEAP8[i1 + 108 | 0] & 1) == 0) {
    i8 = 32768;
    i9 = i4;
    i10 = 12;
    break;
   } else {
    i11 = (HEAP32[i1 + 116 >> 2] | 0) + 1 - (HEAP32[i1 + 112 >> 2] | 0) | 0;
    i10 = 11;
    break;
   }
  } else {
   i11 = i7;
   i10 = 11;
  }
 } while (0);
 if ((i10 | 0) == 11) {
  if ((i11 | 0) < 0) {
   i12 = 0;
   i13 = i11;
  } else {
   i8 = i11;
   i9 = i4;
   i10 = 12;
  }
 }
 do {
  if ((i10 | 0) == 12) {
   __ZN3WTF13tryFastCallocEjj(i4, i8, 1);
   i9 = i4 | 0;
   i11 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   if ((i11 | 0) == 0) {
    i12 = 0;
    i13 = i8;
    break;
   }
   i9 = __ZN3WTF10fastMallocEj(24) | 0;
   HEAP32[i9 >> 2] = 2;
   _memset(i9 + 4 | 0, 0, 20) | 0;
   HEAP32[i9 + 12 >> 2] = i11;
   HEAP32[i9 + 16 >> 2] = i8;
   i12 = i9;
   i13 = i8;
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(0);
 i8 = i1 + 76 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i12;
 if ((i4 | 0) == 0) {
  i14 = i12;
 } else {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i4 | 0);
  i14 = HEAP32[i8 >> 2] | 0;
 }
 if ((i14 | 0) == 0) {
  i14 = i1 + 120 | 0;
  HEAP32[i14 >> 2] = 4;
  __ZN7WebCore16FileReaderLoader7cleanupEv(i1);
  i8 = HEAP32[i1 + 8 >> 2] | 0;
  if ((i8 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] & 7](i8, HEAP32[i14 >> 2] | 0);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i1 + 104 >> 2] = i13;
  i13 = HEAP32[i1 + 8 >> 2] | 0;
  if ((i13 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] & 7](i13);
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore16FileReaderLoader14didReceiveDataEPKci(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 120 | 0;
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i1 + 104 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i1 + 100 | 0;
 i10 = i8 - (HEAP32[i9 >> 2] | 0) | 0;
 i11 = (i3 | 0) < 0 | 0 ? -1 : 0;
 i12 = 0;
 do {
  if ((i11 | 0) > (i12 | 0) | (i11 | 0) == (i12 | 0) & i3 >>> 0 > i10 >>> 0) {
   if ((i8 | 0) == -1) {
    HEAP32[i6 >> 2] = 4;
    __ZN7WebCore16FileReaderLoader7cleanupEv(i1);
    i13 = HEAP32[i1 + 8 >> 2] | 0;
    if ((i13 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 20 >> 2] & 7](i13, HEAP32[i6 >> 2] | 0);
    STACKTOP = i4;
    return;
   }
   if ((HEAP8[i1 + 96 | 0] & 1) == 0) {
    i14 = i10;
    break;
   }
   i13 = i8 << 1;
   do {
    if ((i13 | 0) < 0) {
     i15 = 0;
    } else {
     __ZN3WTF13tryFastCallocEjj(i5, i13, 1);
     i16 = i5 | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = 0;
     if ((i17 | 0) == 0) {
      i15 = 0;
      break;
     }
     i16 = __ZN3WTF10fastMallocEj(24) | 0;
     HEAP32[i16 >> 2] = 2;
     _memset(i16 + 4 | 0, 0, 20) | 0;
     HEAP32[i16 + 12 >> 2] = i17;
     HEAP32[i16 + 16 >> 2] = i13;
     i15 = i16;
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(0);
   i16 = i1 + 76 | 0;
   _memcpy(HEAP32[i15 + 12 >> 2] | 0, HEAP32[(HEAP32[i16 >> 2] | 0) + 12 >> 2] | 0, HEAP32[i9 >> 2] | 0) | 0;
   i17 = (i15 | 0) == 0;
   if (!i17) {
    i18 = i15 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
   }
   i18 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = i15;
   if ((i18 | 0) != 0) {
    __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i18 | 0);
   }
   HEAP32[i7 >> 2] = i13;
   if (i17) {
    i14 = i3;
    break;
   }
   __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i15 | 0);
   i14 = i3;
  } else {
   i14 = i3;
  }
 } while (0);
 if ((i14 | 0) < 1) {
  STACKTOP = i4;
  return;
 }
 _memcpy((HEAP32[(HEAP32[i1 + 76 >> 2] | 0) + 12 >> 2] | 0) + (HEAP32[i9 >> 2] | 0) | 0, i2 | 0, i14) | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + i14;
 HEAP8[i1 + 80 | 0] = 0;
 i14 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 12 >> 2] & 7](i14);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore16FileReaderLoaderD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 88;
 i2 = i1 + 72 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[HEAP32[i3 >> 2] >> 2] & 7](i3);
  __ZN7WebCore16FileReaderLoader7cleanupEv(i1);
 }
 i3 = i1 + 24 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore22ThreadableBlobRegistry17unregisterBlobURLERKNS_3URLE(i3);
  }
 } while (0);
 i3 = HEAP32[i1 + 92 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore19TextResourceDecoderD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 88 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 + 8 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i6 - 8 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 7](i7);
  }
 } while (0);
 i3 = HEAP32[i1 + 84 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i7 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i3 | 0);
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 7](i3);
 }
 i3 = HEAP32[i4 >> 2] | 0;
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
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  return;
 } else {
  HEAP32[i1 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore16FileReaderLoaderD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 88;
 i2 = i1 + 72 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[HEAP32[i3 >> 2] >> 2] & 7](i3);
  __ZN7WebCore16FileReaderLoader7cleanupEv(i1);
 }
 i3 = i1 + 24 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore22ThreadableBlobRegistry17unregisterBlobURLERKNS_3URLE(i3);
  }
 } while (0);
 i3 = HEAP32[i1 + 92 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore19TextResourceDecoderD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 88 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 + 8 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i6 - 8 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 7](i7);
  }
 } while (0);
 i3 = HEAP32[i1 + 84 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i7 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i3 | 0);
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 7](i3);
 }
 i3 = HEAP32[i4 >> 2] | 0;
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
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  return;
 } else {
  HEAP32[i1 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore16FileReaderLoader12stringResultEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 + 76 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if ((HEAP32[i2 + 120 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP8[i2 + 80 | 0] & 1) != 0) {
    i6 = HEAP32[i2 + 84 >> 2] | 0;
    HEAP32[i1 >> 2] = i6;
    if ((i6 | 0) == 0) {
     STACKTOP = i3;
     return;
    }
    i7 = i6 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
    STACKTOP = i3;
    return;
   }
   i7 = HEAP32[i2 + 4 >> 2] | 0;
   do {
    if ((i7 | 0) == 3) {
     __ZN7WebCore16FileReaderLoader13convertToTextEv(i2);
    } else if ((i7 | 0) == 4) {
     if ((HEAP32[i2 + 100 >> 2] | 0) != (HEAP32[i2 + 104 >> 2] | 0)) {
      break;
     }
     __ZN7WebCore16FileReaderLoader16convertToDataURLEv(i2);
    } else if ((i7 | 0) == 1) {
     __ZN3WTF6StringC1EPKcj(i4, HEAP32[i5 + 12 >> 2] | 0, HEAP32[i2 + 100 >> 2] | 0);
     i6 = i4 | 0;
     i8 = HEAP32[i6 >> 2] | 0;
     HEAP32[i6 >> 2] = 0;
     i9 = i2 + 84 | 0;
     i10 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = i8;
     do {
      if ((i10 | 0) != 0) {
       i8 = i10 | 0;
       i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
       if ((i9 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i10);
        break;
       } else {
        HEAP32[i8 >> 2] = i9;
        break;
       }
      }
     } while (0);
     i10 = HEAP32[i6 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     i9 = i10 | 0;
     i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i9 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i2 + 84 >> 2] | 0;
   HEAP32[i1 >> 2] = i7;
   if ((i7 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i8 = i7 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   STACKTOP = i3;
   return;
  }
 } while (0);
 i4 = HEAP32[i2 + 84 >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16FileReaderLoader16didFinishLoadingEmd(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 do {
  if ((HEAP8[i1 + 96 | 0] & 1) != 0) {
   i5 = i1 + 104 | 0;
   i6 = i1 + 100 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   if ((HEAP32[i5 >> 2] | 0) >>> 0 <= i7 >>> 0) {
    break;
   }
   i8 = i1 + 76 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i10 = HEAP32[i9 + 16 >> 2] | 0;
   i11 = (i10 | 0) < 0 ? i10 : 0;
   i12 = ((i7 | 0) < 0 ? i10 : 0) + i7 | 0;
   i7 = (i12 | 0) < 0 ? 0 : i12;
   i12 = (i7 | 0) > (i10 | 0) ? i10 : i7;
   i7 = i11 >>> 0 > i12 >>> 0 ? 0 : i12 - i11 | 0;
   i12 = (HEAP32[i9 + 12 >> 2] | 0) + i11 | 0;
   do {
    if ((i7 | 0) < 0) {
     i13 = 5;
    } else {
     __ZN3WTF13tryFastCallocEjj(i4, i7, 1);
     i11 = i4 | 0;
     i9 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i9 | 0) == 0) {
      i13 = 5;
      break;
     }
     i11 = __ZN3WTF10fastMallocEj(24) | 0;
     i10 = i11;
     HEAP32[i10 >> 2] = 2;
     _memset(i11 + 4 | 0, 0, 20) | 0;
     HEAP32[i11 + 12 >> 2] = i9;
     HEAP32[i11 + 16 >> 2] = i7;
     _memcpy(i9 | 0, i12 | 0, i7) | 0;
     __ZN3WTF8fastFreeEPv(0);
     if ((i11 | 0) == 0) {
      i14 = 0;
      i15 = 1;
      break;
     }
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
     i14 = i11;
     i15 = 0;
    }
   } while (0);
   if ((i13 | 0) == 5) {
    __ZN3WTF8fastFreeEPv(0);
    i14 = 0;
    i15 = 1;
   }
   i7 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i14;
   if ((i7 | 0) != 0) {
    __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i7 | 0);
   }
   HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
   if (i15) {
    break;
   }
   __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i14 | 0);
  }
 } while (0);
 __ZN7WebCore16FileReaderLoader7cleanupEv(i1);
 i14 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] & 7](i14);
 STACKTOP = i2;
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
function __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i2 + 4 | 0;
 i6 = i1 + 4 | 0;
 i8 = HEAP8[i6] & -2 | HEAP8[i7] & 1;
 HEAP8[i6] = i8;
 HEAP8[i6] = i8 & -3 | HEAP8[i7] & 2;
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
 HEAP32[i1 + 48 >> 2] = i3;
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
 i3 = i1 + 64 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i3);
 HEAP32[i5 >> 2] = H_BASE + 72;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 112 | 0, i5);
 __ZN7WebCore13HTTPHeaderMapC1Ev(i1 + 116 | 0);
 _memset(i1 + 136 | 0, 0, 16) | 0;
 HEAP8[i1 + 152 | 0] = 11;
 HEAP32[i1 + 156 >> 2] = 1;
 STACKTOP = i4;
 return;
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
function __ZN3WTF13StringBuilder6appendERKNS_6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i1 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   i6 = i2 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   i6 = i1 + 4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i2;
   do {
    if ((i7 | 0) != 0) {
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
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i10 = 0;
   } else {
    i10 = HEAP32[i7 + 4 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = i10;
   HEAP8[i1 + 12 | 0] = (HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0) >>> 5 & 1;
   return;
  }
 } while (0);
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  __ZN3WTF13StringBuilder6appendEPKtj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 } else {
  __ZN3WTF13StringBuilder6appendEPKhj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 }
}
function __ZNK7WebCore16FileReaderLoader17arrayBufferResultEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 + 76 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if ((HEAP32[i2 + 120 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i2 + 100 >> 2] | 0) == (HEAP32[i2 + 104 >> 2] | 0)) {
    HEAP32[i1 >> 2] = i5;
    i6 = i5 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
    STACKTOP = i3;
    return;
   }
   i6 = HEAP32[i5 + 12 >> 2] | 0;
   i7 = HEAP32[i5 + 16 >> 2] | 0;
   do {
    if ((i7 | 0) < 0) {
     i8 = 8;
    } else {
     __ZN3WTF13tryFastCallocEjj(i4, i7, 1);
     i9 = i4 | 0;
     i10 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = 0;
     if ((i10 | 0) == 0) {
      i8 = 8;
      break;
     }
     i9 = __ZN3WTF10fastMallocEj(24) | 0;
     HEAP32[i9 >> 2] = 2;
     _memset(i9 + 4 | 0, 0, 20) | 0;
     HEAP32[i9 + 12 >> 2] = i10;
     HEAP32[i9 + 16 >> 2] = i7;
     _memcpy(i10 | 0, i6 | 0, i7) | 0;
     HEAP32[i1 >> 2] = i9;
    }
   } while (0);
   if ((i8 | 0) == 8) {
    HEAP32[i1 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(0);
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16FileReaderLoader7cleanupEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 72 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 16 >> 2] & 7](i5);
 }
 if ((HEAP32[i1 + 120 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 + 76 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i4 | 0);
 }
 __ZN3WTF6StringC1EPKc(i3, H_BASE + 136 | 0);
 i4 = i3 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 84 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
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
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i1 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) != 0 | (i1 | 0) == 0) {
  return;
 }
 i3 = i1 + 20 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i3);
 }
 __ZN3WTF8fastFreeEPv(HEAP32[i1 + 12 >> 2] | 0);
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i3 & 1 | 0) == 0) {
   i2 = i3;
   if ((i3 | 0) == 0) {
    break;
   }
   i4 = i2 + 8 | 0;
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
   }
   i4 = i2 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
    HEAP32[i2 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i5);
   }
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore16FileReaderLoaderC2ENS0_8ReadTypeEPNS_22FileReaderLoaderClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = H_BASE + 88;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i3;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 i3 = i1 + 24 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i3);
 HEAP32[i1 + 72 >> 2] = 0;
 HEAP32[i1 + 76 >> 2] = 0;
 HEAP8[i1 + 80 | 0] = 0;
 __ZN3WTF6StringC1EPKc(i1 + 84 | 0, H_BASE + 136 | 0);
 HEAP32[i1 + 88 >> 2] = 0;
 HEAP32[i1 + 92 >> 2] = 0;
 HEAP8[i1 + 96 | 0] = 0;
 HEAP32[i1 + 100 >> 2] = 0;
 HEAP32[i1 + 104 >> 2] = 0;
 HEAP8[i1 + 108 | 0] = 0;
 HEAP32[i1 + 112 >> 2] = 0;
 HEAP32[i1 + 116 >> 2] = 0;
 HEAP32[i1 + 120 >> 2] = 0;
 return;
}
function __ZN7WebCore16FileReaderLoaderC1ENS0_8ReadTypeEPNS_22FileReaderLoaderClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = H_BASE + 88;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i3;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 i3 = i1 + 24 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i3);
 HEAP32[i1 + 72 >> 2] = 0;
 HEAP32[i1 + 76 >> 2] = 0;
 HEAP8[i1 + 80 | 0] = 0;
 __ZN3WTF6StringC1EPKc(i1 + 84 | 0, H_BASE + 136 | 0);
 HEAP32[i1 + 88 >> 2] = 0;
 HEAP32[i1 + 92 >> 2] = 0;
 HEAP8[i1 + 96 | 0] = 0;
 HEAP32[i1 + 100 >> 2] = 0;
 HEAP32[i1 + 104 >> 2] = 0;
 HEAP8[i1 + 108 | 0] = 0;
 HEAP32[i1 + 112 >> 2] = 0;
 HEAP32[i1 + 116 >> 2] = 0;
 HEAP32[i1 + 120 >> 2] = 0;
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
function __ZN7WebCore16FileReaderLoader11setEncodingERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore12TextEncodingC1ERKN3WTF6StringE(i4, i2);
 i2 = i1 + 12 | 0;
 i1 = i4;
 HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
 HEAP16[i2 + 4 >> 1] = HEAP16[i1 + 4 >> 1] | 0;
 STACKTOP = i3;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 88 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_viid + 2;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vi + 4;
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
function __ZN7WebCore16FileReaderLoader7didFailERKNS_13ResourceErrorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i2 = i1 + 120 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 3) {
  return;
 }
 HEAP32[i2 >> 2] = 4;
 __ZN7WebCore16FileReaderLoader7cleanupEv(i1);
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 7](i3, HEAP32[i2 >> 2] | 0);
 return;
}
function __ZN7WebCore16FileReaderLoader6failedEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 120 | 0;
 HEAP32[i3 >> 2] = i2;
 __ZN7WebCore16FileReaderLoader7cleanupEv(i1);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 7](i2, HEAP32[i3 >> 2] | 0);
 return;
}
function __ZN7WebCore16FileReaderLoader6cancelEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 + 120 >> 2] = 3;
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[HEAP32[i2 >> 2] >> 2] & 7](i2);
 __ZN7WebCore16FileReaderLoader7cleanupEv(i1);
 return;
}
function __ZN7WebCore16FileReaderLoader9terminateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[HEAP32[i2 >> 2] >> 2] & 7](i2);
 __ZN7WebCore16FileReaderLoader7cleanupEv(i1);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore22ThreadableLoaderClient25didFailAccessControlCheckERKNS_13ResourceErrorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 7](i1, i2);
 return;
}
function __ZN7WebCore16FileReaderLoader25httpStatusCodeToErrorCodeEi(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((i1 | 0) == 404) {
  i2 = 1;
 } else if ((i1 | 0) == 403) {
  i2 = 2;
 } else {
  i2 = 4;
 }
 return i2 | 0;
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
function __ZN7WebCore22ThreadableLoaderClient11didSendDataEyy(i1, i2, i3, i4, i5) {
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
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore16FileReaderLoader11isCompletedEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 100 >> 2] | 0) == (HEAP32[i1 + 104 >> 2] | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function dynCall_viid(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 FUNCTION_TABLE_viid[i1 & 3](i2 | 0, i3 | 0, +d4);
}
function __ZN7WebCore16FileReaderLoaderD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16FileReaderLoaderD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
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
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZN7WebCore22ThreadableLoaderClient32isDocumentThreadableLoaderClientEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function __ZN7WebCore22ThreadableLoaderClient20didFailRedirectCheckEv(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b6(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(6);
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore22ThreadableLoaderClient11didSendDataEyy,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore22ThreadableLoaderClient20didFailRedirectCheckEv,b1,__ZN7WebCore16FileReaderLoaderD0Ev,b1,__ZN7WebCore16FileReaderLoaderD2Ev,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore22ThreadableLoaderClient25didFailAccessControlCheckERKNS_13ResourceErrorE,b2,__ZN7WebCore16FileReaderLoader7didFailERKNS_13ResourceErrorE,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZN7WebCore22ThreadableLoaderClient32isDocumentThreadableLoaderClientEv,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore16FileReaderLoader14didReceiveDataEPKci,b4,__ZN7WebCore16FileReaderLoaderC2ENS0_8ReadTypeEPNS_22FileReaderLoaderClientE,b4,__ZN7WebCore16FileReaderLoader18didReceiveResponseEmRKNS_16ResourceResponseE,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_viid = [b6,b6,__ZN7WebCore16FileReaderLoader16didFinishLoadingEmd,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viid: dynCall_viid, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viid": invoke_viid, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE": __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE }, buffer);
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
var dynCall_viid = Module["dynCall_viid"] = asm["dynCall_viid"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore16FileReaderLoader16convertToDataURLEv","__ZNK7WebCore16FileReaderLoader17arrayBufferResultEv","__ZN7WebCore16FileReaderLoader13convertToTextEv","__ZN7WebCore16FileReaderLoader6cancelEv","__ZNK7WebCore16FileReaderLoader11isCompletedEv","__ZN7WebCore16FileReaderLoaderD0Ev","_memset","__ZN7WebCore16FileReaderLoader5startEPNS_22ScriptExecutionContextEPNS_4BlobE","__ZN7WebCore15ResourceRequestD2Ev","__ZN7WebCore22ThreadableLoaderClient11didSendDataEyy","__ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE","__ZN7WebCore16FileReaderLoaderD2Ev","__ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZN7WebCore16FileReaderLoader9terminateEv","__ZN7WebCore16FileReaderLoader7cleanupEv","__ZN7WebCore19ResourceRequestBaseD2Ev","__ZN7WebCore16FileReaderLoader6failedEi","__ZN7WebCore16FileReaderLoader18didReceiveResponseEmRKNS_16ResourceResponseE","__ZN7WebCore16FileReaderLoader7didFailERKNS_13ResourceErrorE","__ZN7WebCore16FileReaderLoaderC2ENS0_8ReadTypeEPNS_22FileReaderLoaderClientE","__ZN7WebCore22ThreadableLoaderClient20didFailRedirectCheckEv","__ZN7WebCore16FileReaderLoader14didReceiveDataEPKci","_memcpy","__ZN7WebCore16FileReaderLoader11setEncodingERKN3WTF6StringE","__ZN7WebCore16FileReaderLoader16didFinishLoadingEmd","__ZN7WebCore22ThreadableLoaderClient32isDocumentThreadableLoaderClientEv","__ZN7WebCore22ThreadableLoaderClient25didFailAccessControlCheckERKNS_13ResourceErrorE","__ZN7WebCore16FileReaderLoader12stringResultEv","__ZN7WebCore16FileReaderLoader25httpStatusCodeToErrorCodeEi"]

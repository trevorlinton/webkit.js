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
H_BASE = parentModule["_malloc"](240 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 240;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore19CachedXSLStyleSheetC1ERKNS_15ResourceRequestE;
/* memory initializer */ allocate([116,101,120,116,47,120,109,108,44,32,97,112,112,108,105,99,97,116,105,111,110,47,120,109,108,44,32,97,112,112,108,105,99,97,116,105,111,110,47,120,104,116,109,108,43,120,109,108,44,32,116,101,120,116,47,120,115,108,44,32,97,112,112,108,105,99,97,116,105,111,110,47,114,115,115,43,120,109,108,44,32,97,112,112,108,105,99,97,116,105,111,110,47,97,116,111,109,43,120,109,108,0,0,0,116,101,120,116,47,120,115,108,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZTVN7WebCore19CachedXSLStyleSheetE=(H_BASE+128)|0;
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
function __ZN7WebCore19CachedXSLStyleSheet11checkNotifyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 if ((HEAP8[i1 + 588 | 0] & 32) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore26CachedResourceClientWalkerINS_22CachedStyleSheetClientEEC2ERKN3WTF14HashCountedSetIPNS_20CachedResourceClientENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(i3, i1 + 4 | 0);
 i4 = i3 + 12 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 4 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 L4 : do {
  if (i8 >>> 0 < i5 >>> 0) {
   i9 = i1 + 48 | 0;
   i10 = i1 + 272 | 0;
   i11 = i1 + 640 | 0;
   i12 = HEAP32[i7 >> 2] | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   i14 = i8;
   L6 : while (1) {
    i15 = HEAP32[i13 >> 2] | 0;
    i16 = i13 + 8 | 0;
    if ((i15 | 0) == 0) {
     i17 = i14;
     i18 = 5;
     break;
    } else {
     i19 = i14;
    }
    while (1) {
     i20 = i19 + 1 | 0;
     i21 = HEAP32[i12 + (i19 << 2) >> 2] | 0;
     i22 = HEAP32[i16 >> 2] | 0;
     i23 = i21;
     i24 = i23 + ~(i23 << 15) | 0;
     i23 = (i24 >>> 10 ^ i24) * 9 & -1;
     i24 = i23 >>> 6 ^ i23;
     i23 = i24 + ~(i24 << 11) | 0;
     i24 = i23 >>> 16 ^ i23;
     i23 = i22 & i24;
     i25 = i15 + (i23 << 3) | 0;
     i26 = HEAP32[i25 >> 2] | 0;
     L10 : do {
      if ((i26 | 0) == (i21 | 0)) {
       i27 = i25;
       i18 = 11;
      } else {
       i28 = (i24 >>> 23) + ~i24 | 0;
       i29 = i28 << 12 ^ i28;
       i28 = i29 >>> 7 ^ i29;
       i29 = i28 << 2 ^ i28;
       i28 = i29 >>> 20 ^ i29 | 1;
       i29 = 0;
       i30 = i23;
       i31 = i26;
       while (1) {
        if ((i31 | 0) == 0) {
         break L10;
        }
        i32 = (i29 | 0) == 0 ? i28 : i29;
        i33 = i32 + i30 & i22;
        i34 = i15 + (i33 << 3) | 0;
        i35 = HEAP32[i34 >> 2] | 0;
        if ((i35 | 0) == (i21 | 0)) {
         i27 = i34;
         i18 = 11;
         break;
        } else {
         i29 = i32;
         i30 = i33;
         i31 = i35;
        }
       }
      }
     } while (0);
     if ((i18 | 0) == 11) {
      i18 = 0;
      if ((i27 | 0) != 0) {
       break;
      }
     }
     if (i20 >>> 0 < i5 >>> 0) {
      i19 = i20;
     } else {
      i36 = i20;
      break L6;
     }
    }
    HEAP32[i6 >> 2] = i20;
    if ((i21 | 0) == 0) {
     break L4;
    }
    i15 = HEAP32[(HEAP32[i21 >> 2] | 0) + 24 >> 2] | 0;
    i16 = __ZNK7WebCore19ResourceRequestBase3urlEv(i9) | 0;
    i22 = __ZNK7WebCore20ResourceResponseBase3urlEv(i10) | 0;
    FUNCTION_TABLE_viiii[i15 & 1](i21, i16, i22, i11);
    if (i20 >>> 0 < i5 >>> 0) {
     i14 = i20;
    } else {
     break L4;
    }
   }
   if ((i18 | 0) == 5) {
    while (1) {
     i18 = 0;
     i14 = i17 + 1 | 0;
     if (i14 >>> 0 < i5 >>> 0) {
      i17 = i14;
      i18 = 5;
     } else {
      i36 = i14;
      break;
     }
    }
   }
   HEAP32[i6 >> 2] = i36;
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
function __ZN7WebCore19CachedXSLStyleSheet13finishLoadingEPNS_14ResourceBufferE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 | 0;
 if ((i2 | 0) != 0) {
  i7 = i2 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = i1 + 448 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i2;
 if ((i8 | 0) == 0) {
  i9 = i2;
 } else {
  i2 = i8 + 4 | 0;
  i8 = i2 | 0;
  i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  do {
   if ((i10 | 0) == 0) {
    i11 = i2 - 4 | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 15](i11);
   } else {
    HEAP32[i8 >> 2] = i10;
   }
  } while (0);
  i9 = HEAP32[i7 >> 2] | 0;
 }
 if ((i9 | 0) == 0) {
  i12 = 0;
 } else {
  i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 15](i9) | 0;
 }
 __ZN7WebCore14CachedResource14setEncodedSizeEj(i6, i12);
 i12 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i7 = i1 + 640 | 0;
   i6 = i1 + 644 | 0;
   i9 = HEAP32[i6 >> 2] | 0;
   i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] & 15](i12) | 0;
   __ZN7WebCore19TextResourceDecoder6decodeEPKcj(i4, i9, i10, HEAP32[i1 + 568 >> 2] | 0);
   i10 = i4 | 0;
   i9 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   i8 = i7 | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i9;
   do {
    if ((i2 | 0) != 0) {
     i9 = i2 | 0;
     i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i9 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i2 = HEAP32[i10 >> 2] | 0;
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
   __ZN7WebCore19TextResourceDecoder5flushEv(i5, HEAP32[i6 >> 2] | 0);
   __ZN3WTF6String6appendERKS0_(i7, i5);
   i2 = HEAP32[i5 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i10 = i2 | 0;
   i9 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i10 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i5 = i1 + 588 | 0;
 HEAP8[i5] = HEAP8[i5] & -33;
 __ZN7WebCore19CachedXSLStyleSheet11checkNotifyEv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore26CachedResourceClientWalkerINS_22CachedStyleSheetClientEEC2ERKN3WTF14HashCountedSetIPNS_20CachedResourceClientENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(i1, i2) {
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
   i12 = 20;
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
    i12 = 22;
    break L18;
   } else {
    i13 = i1;
   }
  }
  if ((i13 | 0) == (i2 | 0)) {
   i12 = 21;
   break;
  } else {
   i10 = i13;
   i11 = i9;
  }
 }
 if ((i12 | 0) == 11) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i12 | 0) == 20) {
  return;
 } else if ((i12 | 0) == 21) {
  return;
 } else if ((i12 | 0) == 22) {
  return;
 }
}
function __ZN7WebCore19CachedXSLStyleSheetC2ERKNS_15ResourceRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 __ZN7WebCore14CachedResourceC2ERKNS_15ResourceRequestENS0_4TypeE(i1 | 0, i2, 7);
 HEAP32[i1 >> 2] = H_BASE + 136;
 HEAP32[i1 + 640 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 112 | 0);
 HEAP32[i5 >> 2] = 0;
 i2 = __ZN3WTF10fastMallocEj(52) | 0;
 __ZN7WebCore19TextResourceDecoderC1ERKN3WTF6StringERKNS_12TextEncodingEb(i2, i4, i5, 0);
 HEAP32[i1 + 644 >> 2] = i2;
 i2 = HEAP32[i4 >> 2] | 0;
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
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 8 | 0);
 i2 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i5 = i6 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 232 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i6 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore19CachedXSLStyleSheetC1ERKNS_15ResourceRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 __ZN7WebCore14CachedResourceC2ERKNS_15ResourceRequestENS0_4TypeE(i1 | 0, i2, 7);
 HEAP32[i1 >> 2] = H_BASE + 136;
 HEAP32[i1 + 640 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 112 | 0);
 HEAP32[i5 >> 2] = 0;
 i2 = __ZN3WTF10fastMallocEj(52) | 0;
 __ZN7WebCore19TextResourceDecoderC1ERKN3WTF6StringERKNS_12TextEncodingEb(i2, i4, i5, 0);
 HEAP32[i1 + 644 >> 2] = i2;
 i2 = HEAP32[i4 >> 2] | 0;
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
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 8 | 0);
 i2 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i5 = i6 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 232 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i6 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 6;
}
function __ZN7WebCore19CachedXSLStyleSheetD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 136;
 i2 = HEAP32[i1 + 644 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore19TextResourceDecoderD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 640 >> 2] | 0;
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
 __ZN7WebCore14CachedResourceD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore19CachedXSLStyleSheetD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 136;
 i2 = HEAP32[i1 + 644 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore19TextResourceDecoderD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 640 >> 2] | 0;
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
 __ZN7WebCore14CachedResourceD2Ev(i1 | 0);
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
function __ZN7WebCore19CachedXSLStyleSheet12didAddClientEPNS_20CachedResourceClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP8[i1 + 588 | 0] & 32) != 0) {
  return;
 }
 i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] | 0;
 i4 = __ZNK7WebCore19ResourceRequestBase3urlEv(i1 + 48 | 0) | 0;
 i5 = __ZNK7WebCore20ResourceResponseBase3urlEv(i1 + 272 | 0) | 0;
 FUNCTION_TABLE_viiii[i3 & 1](i2, i4, i5, i1 + 640 | 0);
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
function __ZN7WebCore19CachedXSLStyleSheet11setEncodingERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 644 >> 2] | 0;
 __ZN7WebCore12TextEncodingC1ERKN3WTF6StringE(i4, i2);
 __ZN7WebCore19TextResourceDecoder11setEncodingERKNS_12TextEncodingENS0_14EncodingSourceE(i5, i4, 5);
 STACKTOP = i3;
 return;
}
function viii___ZN7WebCore14CachedResource4loadEPNS_20CachedResourceLoaderERKNS_21ResourceLoaderOptionsE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14CachedResource4loadEPNS_20CachedResourceLoaderERKNS_21ResourceLoaderOptionsE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore14CachedResource31mustRevalidateDueToCacheHeadersENS_11CachePolicyE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore14CachedResource31mustRevalidateDueToCacheHeadersENS_11CachePolicyE(i1 | 0, i2 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZN7WebCore14CachedResource16responseReceivedERKNS_16ResourceResponseE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14CachedResource16responseReceivedERKNS_16ResourceResponseE(i1 | 0, i2 | 0);
}
function __ZN7WebCore14CachedResource15willSendRequestERNS_15ResourceRequestERKNS_16ResourceResponseE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = i1 + 588 | 0;
 HEAP8[i3] = HEAP8[i3] | 8;
 return;
}
function vii___ZN7WebCore14CachedResource13addDataBufferEPNS_14ResourceBufferE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14CachedResource13addDataBufferEPNS_14ResourceBufferE(i1 | 0, i2 | 0);
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
function viii___ZN7WebCore14CachedResource7addDataEPKcj__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14CachedResource7addDataEPKcj(i1 | 0, i2 | 0, i3 | 0);
}
function vi___ZN7WebCore14CachedResource34switchClientsToRevalidatedResourceEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14CachedResource34switchClientsToRevalidatedResourceEv(i1 | 0);
}
function __ZNK7WebCore19CachedXSLStyleSheet8encodingEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3WTF6StringC1EPKc(i1, HEAP32[(HEAP32[i2 + 644 >> 2] | 0) + 8 >> 2] | 0);
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZN7WebCore14CachedResource5errorENS0_6StatusE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14CachedResource5errorENS0_6StatusE(i1 | 0, i2 | 0);
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
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function __ZNK7WebCore14CachedResource8canReuseERKNS_15ResourceRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 1;
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
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function __ZNK7WebCore14CachedResource32shouldIgnoreHTTPStatusCodeErrorsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19CachedXSLStyleSheet24mayTryReplaceEncodedDataEv(i1) {
 i1 = i1 | 0;
 return 1;
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
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
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
function __ZNK7WebCore14CachedResource7isImageEv(i1) {
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
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore14CachedResource11didSendDataEyy,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore14CachedResource17allClientsRemovedEv,b1,__ZN7WebCore14CachedResource18destroyDecodedDataEv,b1,vi___ZN7WebCore14CachedResource34switchClientsToRevalidatedResourceEv__wrapper,b1,__ZN7WebCore19CachedXSLStyleSheet11checkNotifyEv,b1,__ZN7WebCore19CachedXSLStyleSheetD1Ev,b1,__ZN7WebCore19CachedXSLStyleSheetD0Ev,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZN7WebCore14CachedResource5errorENS0_6StatusE__wrapper,b2,__ZN7WebCore19CachedXSLStyleSheet11setEncodingERKN3WTF6StringE,b2,__ZNK7WebCore19CachedXSLStyleSheet8encodingEv,b2,vii___ZN7WebCore14CachedResource13addDataBufferEPNS_14ResourceBufferE__wrapper,b2,__ZN7WebCore19CachedXSLStyleSheet13finishLoadingEPNS_14ResourceBufferE,b2,__ZN7WebCore19CachedXSLStyleSheetC2ERKNS_15ResourceRequestE,b2,__ZN7WebCore14CachedResource15didRemoveClientEPNS_20CachedResourceClientE,b2,vii___ZN7WebCore14CachedResource16responseReceivedERKNS_16ResourceResponseE__wrapper,b2,__ZN7WebCore19CachedXSLStyleSheet12didAddClientEPNS_20CachedResourceClientE,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore14CachedResource7isImageEv,b3,__ZNK7WebCore14CachedResource32shouldIgnoreHTTPStatusCodeErrorsEv,b3,__ZNK7WebCore19CachedXSLStyleSheet24mayTryReplaceEncodedDataEv,b3,__ZNK7WebCore14CachedResource13purgePriorityEv,b3,__ZNK7WebCore14CachedResource14stillNeedsLoadEv,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,viii___ZN7WebCore14CachedResource4loadEPNS_20CachedResourceLoaderERKNS_21ResourceLoaderOptionsE__wrapper,b4,__ZN7WebCore14CachedResource15willSendRequestERNS_15ResourceRequestERKNS_16ResourceResponseE,b4,viii___ZN7WebCore14CachedResource7addDataEPKcj__wrapper,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6,__ZNK7WebCore14CachedResource8canReuseERKNS_15ResourceRequestE,b6,iii___ZNK7WebCore14CachedResource31mustRevalidateDueToCacheHeadersENS_11CachePolicyE__wrapper,b6,b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore14CachedResource17allClientsRemovedEv","__ZN7WebCore19CachedXSLStyleSheet11setEncodingERKN3WTF6StringE","__ZNK7WebCore14CachedResource8canReuseERKNS_15ResourceRequestE","__ZNK7WebCore14CachedResource7isImageEv","__ZNK7WebCore19CachedXSLStyleSheet8encodingEv","__ZN7WebCore14CachedResource15willSendRequestERNS_15ResourceRequestERKNS_16ResourceResponseE","_memset","_memcpy","__ZN7WebCore14CachedResource18destroyDecodedDataEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore14CachedResource32shouldIgnoreHTTPStatusCodeErrorsEv","__ZN7WebCore14CachedResource11didSendDataEyy","__ZN7WebCore19CachedXSLStyleSheet13finishLoadingEPNS_14ResourceBufferE","__ZNK7WebCore19CachedXSLStyleSheet24mayTryReplaceEncodedDataEv","__ZN7WebCore19CachedXSLStyleSheetC2ERKNS_15ResourceRequestE","__ZN7WebCore14CachedResource15didRemoveClientEPNS_20CachedResourceClientE","__ZNK7WebCore14CachedResource13purgePriorityEv","__ZN7WebCore19CachedXSLStyleSheet11checkNotifyEv","__ZN7WebCore19CachedXSLStyleSheet12didAddClientEPNS_20CachedResourceClientE","__ZN7WebCore19CachedXSLStyleSheetD1Ev","__ZN7WebCore19CachedXSLStyleSheetD0Ev","__ZN7WebCore26CachedResourceClientWalkerINS_22CachedStyleSheetClientEEC2ERKN3WTF14HashCountedSetIPNS_20CachedResourceClientENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE","__ZNK7WebCore14CachedResource14stillNeedsLoadEv"]

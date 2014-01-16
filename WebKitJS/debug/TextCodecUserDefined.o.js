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
H_BASE = parentModule["_malloc"](48 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 48;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([120,45,117,115,101,114,45,100,101,102,105,110,101,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var __ZTVN7WebCore20TextCodecUserDefinedE=(H_BASE+24)|0;
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
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore20TextCodecUserDefined6encodeEPKtjNS_19UnencodableHandlingE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i2 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 __ZN3WTF7CString16newUninitializedEjRPc(i8, i4, i7);
 i9 = (i4 | 0) == 0;
 do {
  if (i9) {
   i10 = 4;
  } else {
   i11 = 0;
   i12 = 0;
   while (1) {
    i13 = HEAP16[i3 + (i11 << 1) >> 1] | 0;
    HEAP8[(HEAP32[i7 >> 2] | 0) + i11 | 0] = i13;
    i12 = i13 & 65535 | i12;
    i11 = i11 + 1 | 0;
    if (i11 >>> 0 >= i4 >>> 0) {
     break;
    }
   }
   if ((i12 & 65408 | 0) == 0) {
    i10 = 4;
    break;
   }
   i11 = i6 | 0;
   if (i9) {
    __ZN3WTF7CStringC1EPKcj(i1, 0, 0);
    break;
   }
   i13 = __ZN3WTF18fastMallocGoodSizeEj(i4) | 0;
   i14 = i4;
   i15 = i13;
   i16 = 0;
   i17 = 0;
   i18 = __ZN3WTF10fastMallocEj(i13) | 0;
   L9 : while (1) {
    i13 = i16;
    i19 = i17;
    while (1) {
     i20 = i13 + 1 | 0;
     i21 = HEAPU16[i3 + (i13 << 1) >> 1] | 0;
     do {
      if ((i21 & 64512 | 0) == 55296 & i20 >>> 0 < i4 >>> 0) {
       i22 = HEAPU16[i3 + (i20 << 1) >> 1] | 0;
       if ((i22 & 64512 | 0) != 56320) {
        i23 = i20;
        i24 = i21;
        break;
       }
       i23 = i13 + 2 | 0;
       i24 = (i21 << 10) - 56613888 + i22 | 0;
      } else {
       i23 = i20;
       i24 = i21;
      }
     } while (0);
     i21 = i24 & 255;
     if ((i21 << 24 >> 24 & 63487 | 0) != (i24 | 0)) {
      break;
     }
     i25 = i19 + 1 | 0;
     HEAP8[i18 + i19 | 0] = i21;
     if (i23 >>> 0 < i4 >>> 0) {
      i13 = i23;
      i19 = i25;
     } else {
      i10 = 14;
      break L9;
     }
    }
    i13 = __ZN7WebCore9TextCodec25getUnencodableReplacementEjNS_19UnencodableHandlingEPc(i24, i5, i11) | 0;
    i26 = i13 + i19 | 0;
    i21 = i26 + (i4 - i23) | 0;
    do {
     if (i15 >>> 0 < i21 >>> 0) {
      i20 = i15 + 1 + (i15 >>> 2) | 0;
      i22 = i20 >>> 0 > 16 >>> 0 ? i20 : 16;
      i20 = i22 >>> 0 > i21 >>> 0 ? i22 : i21;
      if (i15 >>> 0 >= i20 >>> 0) {
       i27 = i18;
       i28 = i15;
       break;
      }
      i22 = __ZN3WTF18fastMallocGoodSizeEj(i20) | 0;
      i20 = __ZN3WTF10fastMallocEj(i22) | 0;
      _memcpy(i20 | 0, i18 | 0, i14) | 0;
      if ((i18 | 0) == 0) {
       i27 = i20;
       i28 = i22;
       break;
      }
      i29 = (i20 | 0) == (i18 | 0);
      __ZN3WTF8fastFreeEPv(i18);
      i27 = i29 ? 0 : i20;
      i28 = i29 ? 0 : i22;
     } else {
      i27 = i18;
      i28 = i15;
     }
    } while (0);
    _memcpy(i27 + i19 | 0, i11 | 0, i13) | 0;
    if (i23 >>> 0 < i4 >>> 0) {
     i14 = i21;
     i15 = i28;
     i16 = i23;
     i17 = i26;
     i18 = i27;
    } else {
     i10 = 20;
     break;
    }
   }
   if ((i10 | 0) == 14) {
    __ZN3WTF7CStringC1EPKcj(i1, i18, i25);
    i30 = i18;
   } else if ((i10 | 0) == 20) {
    __ZN3WTF7CStringC1EPKcj(i1, i27, i26);
    if ((i27 | 0) == 0) {
     break;
    } else {
     i30 = i27;
    }
   }
   __ZN3WTF8fastFreeEPv(i30);
  }
 } while (0);
 if ((i10 | 0) == 4) {
  i10 = i8 | 0;
  i30 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = 0;
  HEAP32[i1 >> 2] = i30;
 }
 i30 = HEAP32[i8 >> 2] | 0;
 if ((i30 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = i30 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i30);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i8 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore20TextCodecUserDefined6decodeEPKcjbbRb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i7 | 0;
 i5 = i7 + 8 | 0;
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = 0;
 i8 = i5 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i5 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i5 + 12 | 0;
 HEAP8[i10] = 1;
 HEAP32[i5 + 16 >> 2] = 0;
 i11 = i5 + 20 | 0;
 HEAP32[i11 >> 2] = 0;
 __ZN3WTF13StringBuilder15reserveCapacityEj(i5, i4);
 if ((i4 | 0) != 0) {
  i12 = i5 + 20 | 0;
  i13 = 0;
  while (1) {
   i14 = HEAP8[i3 + i13 | 0] | 0;
   i15 = i14 << 24 >> 24 & -2049;
   HEAP16[i6 >> 1] = i15;
   i16 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i16 | 0) == 0) {
     i17 = 10;
    } else {
     i18 = HEAP32[i2 >> 2] | 0;
     if (i18 >>> 0 >= (HEAP32[i16 + 4 >> 2] | 0) >>> 0) {
      i17 = 10;
      break;
     }
     if ((HEAP32[i8 >> 2] | 0) != 0) {
      i17 = 10;
      break;
     }
     if ((HEAP8[i10] & 1) == 0) {
      HEAP32[i2 >> 2] = i18 + 1;
      HEAP16[(HEAP32[i12 >> 2] | 0) + (i18 << 1) >> 1] = i15;
      break;
     }
     if ((i15 & 65535) >>> 0 > 255 >>> 0) {
      i17 = 10;
      break;
     }
     HEAP32[i2 >> 2] = i18 + 1;
     HEAP8[(HEAP32[i11 >> 2] | 0) + i18 | 0] = i14;
    }
   } while (0);
   if ((i17 | 0) == 10) {
    i17 = 0;
    __ZN3WTF13StringBuilder6appendEPKtj(i5, i6, 1);
   }
   i13 = i13 + 1 | 0;
   if (i13 >>> 0 >= i4 >>> 0) {
    break;
   }
  }
 }
 __ZN3WTF13StringBuilder11shrinkToFitEv(i5);
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i5);
  i5 = HEAP32[i8 >> 2] | 0;
  HEAP32[i1 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i19 = i5;
   i17 = 15;
  }
 } else {
  HEAP32[i1 >> 2] = i4;
  i19 = i4;
  i17 = 15;
 }
 if ((i17 | 0) == 15) {
  i17 = i19 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
 }
 i17 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i9 = i17 | 0;
   i19 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i9 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i8 >> 2] | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i8 = i17 | 0;
 i19 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i19 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i17);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i8 >> 2] = i19;
  STACKTOP = i7;
  return;
 }
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
function dynCall_viiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function __ZN7WebCoreL34newStreamingTextDecoderUserDefinedERKNS_12TextEncodingEPKv(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = __ZN3WTF10fastMallocEj(4) | 0;
 HEAP32[i3 >> 2] = H_BASE + 32;
 HEAP32[i1 >> 2] = i3;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore20TextCodecUserDefined14registerCodecsEPFvPKcPFN3WTF10PassOwnPtrINS_9TextCodecEEERKNS_12TextEncodingEPKvESB_E(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_viii[i1 & 3](H_BASE + 8 | 0, F_BASE_viii + 2 | 0, 0);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_viiiiiii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_viiiii + 2;
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
function __ZN7WebCore20TextCodecUserDefined21registerEncodingNamesEPFvPKcS2_E(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 8 | 0, H_BASE + 8 | 0);
 return;
}
function b7(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(7);
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
function __ZN7WebCore20TextCodecUserDefinedD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TextCodecD2Ev(i1 | 0);
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
 FUNCTION_TABLE_vii[i1 & 1](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZN7WebCore20TextCodecUserDefinedD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TextCodecD2Ev(i1 | 0);
 return;
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore20TextCodecUserDefined6encodeEPKtjNS_19UnencodableHandlingE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore20TextCodecUserDefinedD0Ev,b1,__ZN7WebCore20TextCodecUserDefinedD1Ev,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCoreL34newStreamingTextDecoderUserDefinedERKNS_12TextEncodingEPKv,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  var FUNCTION_TABLE_viiiiiii = [b7,b7,__ZN7WebCore20TextCodecUserDefined6decodeEPKcjbbRb,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiiiiii: dynCall_viiiiiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiiiiii": invoke_viiiiiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore20TextCodecUserDefinedD0Ev","__ZN7WebCore20TextCodecUserDefined6encodeEPKtjNS_19UnencodableHandlingE","_memset","__ZN7WebCore20TextCodecUserDefined6decodeEPKcjbbRb","_memcpy","_strlen","__ZN7WebCore20TextCodecUserDefined21registerEncodingNamesEPFvPKcS2_E","__ZN7WebCoreL34newStreamingTextDecoderUserDefinedERKNS_12TextEncodingEPKv","__ZN7WebCore20TextCodecUserDefined14registerCodecsEPFvPKcPFN3WTF10PassOwnPtrINS_9TextCodecEEERKNS_12TextEncodingEPKvESB_E","__ZN7WebCore20TextCodecUserDefinedD1Ev"]

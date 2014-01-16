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
H_BASE = parentModule["_malloc"](376 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 376;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore19TextResourceDecoderC1ERKN3WTF6StringERKNS_12TextEncodingEb;
var __ZN7WebCore19TextResourceDecoderD1Ev;
/* memory initializer */ allocate([101,110,99,111,100,105,110,103,0,0,0,0,0,0,0,0,83,104,105,102,116,95,74,73,83,0,0,0,0,0,0,0,69,85,67,45,74,80,0,0,73,83,79,45,50,48,50,50,45,74,80,0,0,0,0,0,119,105,110,100,111,119,115,45,49,50,53,50,0,0,0,0,120,45,117,115,101,114,45,100,101,102,105,110,101,100,0,0,116,101,120,116,47,104,116,109,108,0,0,0,0,0,0,0,116,101,120,116,47,99,115,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9KanjiCode7sjisMapE=(H_BASE+128)|0;
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
  var invoke_viiiiiii=env.invoke_viiiiiii;
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
function __ZN7WebCore19TextResourceDecoder19checkForHeadCharsetEPKcjRb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i6 = i5 | 0;
 i7 = i5 + 80 | 0;
 i8 = i1 + 20 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if (!((i9 | 0) == 0 | (i9 | 0) == 7)) {
  HEAP8[i1 + 42 | 0] = 1;
  i10 = 1;
  STACKTOP = i5;
  return i10 | 0;
 }
 i9 = i1 + 28 | 0;
 i11 = i1 + 36 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = i12 + i3 | 0;
 i14 = i1 + 32 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 do {
  if (i15 >>> 0 < i13 >>> 0) {
   i16 = i15 + 1 + (i15 >>> 2) | 0;
   i17 = i16 >>> 0 > 16 >>> 0 ? i16 : 16;
   i16 = i17 >>> 0 > i13 >>> 0 ? i17 : i13;
   if (i15 >>> 0 >= i16 >>> 0) {
    break;
   }
   i17 = i9 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   i19 = __ZN3WTF18fastMallocGoodSizeEj(i16) | 0;
   HEAP32[i14 >> 2] = i19;
   i16 = __ZN3WTF10fastMallocEj(i19) | 0;
   HEAP32[i17 >> 2] = i16;
   _memcpy(i16 | 0, i18 | 0, i12) | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   if ((HEAP32[i17 >> 2] | 0) == (i18 | 0)) {
    HEAP32[i17 >> 2] = 0;
    HEAP32[i14 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i18);
  }
 } while (0);
 HEAP32[i11 >> 2] = i13;
 i13 = i9 | 0;
 _memcpy((HEAP32[i13 >> 2] | 0) + i12 | 0, i2 | 0, i3) | 0;
 HEAP8[i4] = 1;
 i4 = i1 + 48 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  i10 = __ZN7WebCore19TextResourceDecoder19checkForMetaCharsetEPKcj(i1, i2, i3) | 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 i12 = HEAP32[i13 >> 2] | 0;
 i13 = HEAP32[i11 >> 2] | 0;
 i11 = i12 + i13 | 0;
 if (i13 >>> 0 < 8 >>> 0) {
  i10 = 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 i13 = HEAP8[i12] | 0;
 i9 = i13 << 24 >> 24 == 60;
 L20 : do {
  if (i9) {
   i14 = HEAP8[i12 + 1 | 0] | 0;
   if ((i14 << 24 >> 24 | 0) == 63) {
    if ((HEAP8[i12 + 2 | 0] | 0) != 120) {
     i20 = 0;
     i21 = 68;
     break;
    }
    do {
     if ((HEAP8[i12 + 3 | 0] | 0) == 109) {
      if ((HEAP8[i12 + 4 | 0] | 0) == 108) {
       i22 = i12;
      } else {
       break;
      }
      while (1) {
       if ((i22 | 0) == (i11 | 0)) {
        i10 = 0;
        i21 = 110;
        break;
       }
       if ((HEAP8[i22] | 0) == 62) {
        break;
       } else {
        i22 = i22 + 1 | 0;
       }
      }
      if ((i21 | 0) == 110) {
       STACKTOP = i5;
       return i10 | 0;
      }
      i15 = i22 - i12 | 0;
      if (i15 >>> 0 < 8 >>> 0) {
       break L20;
      }
      i18 = i15 - 8 | 0;
      i17 = 0;
      L34 : while (1) {
       i16 = 0;
       while (1) {
        if (i16 >>> 0 >= 8 >>> 0) {
         break L34;
        }
        if ((HEAP8[i12 + (i16 + i17) | 0] | 0) == (HEAP8[H_BASE + 8 + i16 | 0] | 0)) {
         i16 = i16 + 1 | 0;
        } else {
         break;
        }
       }
       i16 = i17 + 1 | 0;
       if (i16 >>> 0 > i18 >>> 0) {
        break L20;
       } else {
        i17 = i16;
       }
      }
      if ((i17 | 0) == -1) {
       break L20;
      }
      i18 = i17 + 8 | 0;
      while (1) {
       if ((i18 | 0) >= (i15 | 0)) {
        break L20;
       }
       i23 = HEAP8[i12 + i18 | 0] | 0;
       if (i23 << 24 >> 24 < 33) {
        i18 = i18 + 1 | 0;
       } else {
        break;
       }
      }
      if (i23 << 24 >> 24 == 61) {
       i24 = i18;
      } else {
       break L20;
      }
      while (1) {
       i17 = i24 + 1 | 0;
       if ((i17 | 0) >= (i15 | 0)) {
        break L20;
       }
       i25 = HEAP8[i12 + i17 | 0] | 0;
       if (i25 << 24 >> 24 < 33) {
        i24 = i17;
       } else {
        break;
       }
      }
      if (!((i25 << 24 >> 24 | 0) == 34 | (i25 << 24 >> 24 | 0) == 39)) {
       break L20;
      }
      i18 = i24 + 2 | 0;
      i17 = i18;
      while (1) {
       if ((i17 | 0) >= (i15 | 0)) {
        break L20;
       }
       if ((HEAP8[i12 + i17 | 0] | 0) == i25 << 24 >> 24) {
        break;
       } else {
        i17 = i17 + 1 | 0;
       }
      }
      i15 = i17 - i18 | 0;
      if ((i18 | 0) == -1) {
       break L20;
      }
      i16 = i15 + 1 | 0;
      i19 = i6 + 12 | 0;
      i26 = i6 | 0;
      HEAP32[i26 >> 2] = i19;
      i27 = i6 + 4 | 0;
      HEAP32[i27 >> 2] = 64;
      i28 = i6 + 8 | 0;
      HEAP32[i28 >> 2] = i16;
      if (i16 >>> 0 > 64 >>> 0) {
       i29 = __ZN3WTF18fastMallocGoodSizeEj(i16) | 0;
       HEAP32[i27 >> 2] = i29;
       i16 = __ZN3WTF10fastMallocEj(i29) | 0;
       HEAP32[i26 >> 2] = i16;
       i30 = i16;
      } else {
       i30 = i19;
      }
      _memcpy(i30 | 0, i12 + i18 | 0, i15) | 0;
      if ((HEAP32[i28 >> 2] | 0) >>> 0 <= i15 >>> 0) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
       return 0;
      }
      HEAP8[(HEAP32[i26 >> 2] | 0) + i15 | 0] = 0;
      __ZN7WebCore12TextEncodingC1EPKc(i7, HEAP32[i26 >> 2] | 0);
      if ((HEAP32[i28 >> 2] | 0) != 0) {
       HEAP32[i28 >> 2] = 0;
      }
      i28 = HEAP32[i26 >> 2] | 0;
      if (!((i19 | 0) == (i28 | 0) | (i28 | 0) == 0)) {
       HEAP32[i26 >> 2] = 0;
       HEAP32[i27 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i28);
      }
      if ((HEAP32[i7 >> 2] | 0) == 0) {
       break L20;
      }
      i28 = i1 + 8 | 0;
      i27 = __ZNK7WebCore12TextEncoding26closestByteBasedEquivalentEv(i7) | 0;
      HEAP32[i28 >> 2] = HEAP32[i27 >> 2];
      HEAP16[i28 + 4 >> 1] = HEAP16[i27 + 4 >> 1] | 0;
      i27 = i1 + 16 | 0;
      i28 = HEAP32[i27 >> 2] | 0;
      HEAP32[i27 >> 2] = 0;
      if ((i28 | 0) != 0) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 3](i28);
      }
      HEAP32[i8 >> 2] = 2;
      break L20;
     }
    } while (0);
    if (i14 << 24 >> 24 != 0) {
     i21 = 58;
     break;
    }
   } else if ((i14 << 24 >> 24 | 0) != 0) {
    i21 = 58;
    break;
   }
   if ((HEAP8[i12 + 2 | 0] | 0) != 63) {
    i21 = 58;
    break;
   }
   if ((HEAP8[i12 + 3 | 0] | 0) != 0) {
    i21 = 58;
    break;
   }
   if ((HEAP8[i12 + 4 | 0] | 0) != 120) {
    i21 = 58;
    break;
   }
   if ((HEAP8[i12 + 5 | 0] | 0) != 0) {
    i21 = 58;
    break;
   }
   i28 = __ZN7WebCore25UTF16LittleEndianEncodingEv() | 0;
   if ((HEAP32[i28 >> 2] | 0) == 0) {
    i10 = 1;
    STACKTOP = i5;
    return i10 | 0;
   }
   i27 = i1 + 8 | 0;
   i26 = i28;
   HEAP32[i27 >> 2] = HEAP32[i26 >> 2];
   HEAP16[i27 + 4 >> 1] = HEAP16[i26 + 4 >> 1] | 0;
   i26 = i1 + 16 | 0;
   i27 = HEAP32[i26 >> 2] | 0;
   HEAP32[i26 >> 2] = 0;
   if ((i27 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] & 3](i27);
   }
   HEAP32[i8 >> 2] = 1;
   i10 = 1;
   STACKTOP = i5;
   return i10 | 0;
  } else {
   i21 = 58;
  }
 } while (0);
 do {
  if ((i21 | 0) == 58) {
   i7 = i13 << 24 >> 24 == 0;
   if (!i7) {
    i20 = 0;
    i21 = 68;
    break;
   }
   if ((HEAP8[i12 + 1 | 0] | 0) != 60) {
    i20 = 1;
    i21 = 68;
    break;
   }
   if ((HEAP8[i12 + 2 | 0] | 0) != 0) {
    i20 = i7;
    i21 = 68;
    break;
   }
   if ((HEAP8[i12 + 3 | 0] | 0) != 63) {
    i20 = i7;
    i21 = 68;
    break;
   }
   if ((HEAP8[i12 + 4 | 0] | 0) != 0) {
    i20 = i7;
    i21 = 68;
    break;
   }
   if ((HEAP8[i12 + 5 | 0] | 0) != 120) {
    i20 = i7;
    i21 = 68;
    break;
   }
   i7 = __ZN7WebCore22UTF16BigEndianEncodingEv() | 0;
   if ((HEAP32[i7 >> 2] | 0) == 0) {
    i10 = 1;
    STACKTOP = i5;
    return i10 | 0;
   }
   i30 = i1 + 8 | 0;
   i6 = i7;
   HEAP32[i30 >> 2] = HEAP32[i6 >> 2];
   HEAP16[i30 + 4 >> 1] = HEAP16[i6 + 4 >> 1] | 0;
   i6 = i1 + 16 | 0;
   i30 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   if ((i30 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 3](i30);
   }
   HEAP32[i8 >> 2] = 1;
   i10 = 1;
   STACKTOP = i5;
   return i10 | 0;
  }
 } while (0);
 do {
  if ((i21 | 0) == 68) {
   do {
    if (i9) {
     if ((HEAP8[i12 + 1 | 0] | 0) != 0) {
      break;
     }
     if ((HEAP8[i12 + 2 | 0] | 0) != 0) {
      break;
     }
     if ((HEAP8[i12 + 3 | 0] | 0) != 0) {
      break;
     }
     if ((HEAP8[i12 + 4 | 0] | 0) != 63) {
      break;
     }
     if ((HEAP8[i12 + 5 | 0] | 0) != 0) {
      break;
     }
     if ((HEAP8[i12 + 6 | 0] | 0) != 0) {
      break;
     }
     if ((HEAP8[i12 + 7 | 0] | 0) != 0) {
      break;
     }
     i13 = __ZN7WebCore25UTF32LittleEndianEncodingEv() | 0;
     if ((HEAP32[i13 >> 2] | 0) == 0) {
      i10 = 1;
      STACKTOP = i5;
      return i10 | 0;
     }
     i30 = i1 + 8 | 0;
     i6 = i13;
     HEAP32[i30 >> 2] = HEAP32[i6 >> 2];
     HEAP16[i30 + 4 >> 1] = HEAP16[i6 + 4 >> 1] | 0;
     i6 = i1 + 16 | 0;
     i30 = HEAP32[i6 >> 2] | 0;
     HEAP32[i6 >> 2] = 0;
     if ((i30 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 3](i30);
     }
     HEAP32[i8 >> 2] = 1;
     i10 = 1;
     STACKTOP = i5;
     return i10 | 0;
    }
   } while (0);
   if (!i20) {
    break;
   }
   if ((HEAP8[i12 + 1 | 0] | 0) != 0) {
    break;
   }
   if ((HEAP8[i12 + 2 | 0] | 0) != 0) {
    break;
   }
   if ((HEAP8[i12 + 3 | 0] | 0) != 60) {
    break;
   }
   if ((HEAP8[i12 + 4 | 0] | 0) != 0) {
    break;
   }
   if ((HEAP8[i12 + 5 | 0] | 0) != 0) {
    break;
   }
   if ((HEAP8[i12 + 6 | 0] | 0) != 0) {
    break;
   }
   if ((HEAP8[i12 + 7 | 0] | 0) != 63) {
    break;
   }
   i14 = __ZN7WebCore22UTF32BigEndianEncodingEv() | 0;
   if ((HEAP32[i14 >> 2] | 0) == 0) {
    i10 = 1;
    STACKTOP = i5;
    return i10 | 0;
   }
   i30 = i1 + 8 | 0;
   i6 = i14;
   HEAP32[i30 >> 2] = HEAP32[i6 >> 2];
   HEAP16[i30 + 4 >> 1] = HEAP16[i6 + 4 >> 1] | 0;
   i6 = i1 + 16 | 0;
   i30 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   if ((i30 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 3](i30);
   }
   HEAP32[i8 >> 2] = 1;
   i10 = 1;
   STACKTOP = i5;
   return i10 | 0;
  }
 } while (0);
 if ((HEAP32[i1 + 4 >> 2] | 0) == 2) {
  i10 = 1;
  STACKTOP = i5;
  return i10 | 0;
 }
 i8 = __ZN3WTF10fastMallocEj(2340) | 0;
 __ZN7WebCore21HTMLMetaCharsetParserC1Ev(i8);
 i12 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i8;
 if ((i12 | 0) != 0) {
  __ZN7WebCore21HTMLMetaCharsetParserD1Ev(i12);
  __ZN3WTF8fastFreeEPv(i12);
 }
 i10 = __ZN7WebCore19TextResourceDecoder19checkForMetaCharsetEPKcj(i1, i2, i3) | 0;
 STACKTOP = i5;
 return i10 | 0;
}
function __ZN7WebCore9KanjiCode5judgeEPKci(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 if ((i2 | 0) > 0) {
  i3 = 0;
  i4 = 0;
  i5 = 0;
  i6 = 0;
  i7 = 0;
  i8 = 0;
 } else {
  i9 = 0;
  i10 = 0;
  i11 = (i9 | 0) < (i10 | 0);
  i12 = i11 ? 2 : 0;
  return i12 | 0;
 }
 L3 : while (1) {
  i13 = i3;
  i14 = i4;
  i15 = i5;
  i16 = i8;
  L5 : while (1) {
   i17 = i13;
   i18 = i14;
   i19 = i15;
   i20 = HEAP8[i1 + i13 | 0] | 0;
   while (1) {
    if (i20 << 24 >> 24 != 27) {
     i21 = 16;
     break L5;
    }
    if ((i2 - i17 | 0) <= 2) {
     i21 = 17;
     break L5;
    }
    i22 = i17 + 1 | 0;
    i23 = HEAP8[i1 + i22 | 0] | 0;
    if ((i23 << 24 >> 24 | 0) == 36) {
     if ((HEAP8[i1 + (i17 + 2) | 0] | 0) == 66) {
      i24 = 1;
      i21 = 70;
      break L3;
     }
     if ((HEAP8[i1 + (i17 + 2) | 0] | 0) == 64) {
      i24 = 1;
      i21 = 72;
      break L3;
     } else {
      i21 = 12;
     }
    } else if ((i23 << 24 >> 24 | 0) == 40) {
     if ((HEAP8[i1 + (i17 + 2) | 0] | 0) == 66) {
      i24 = 1;
      i21 = 71;
      break L3;
     }
     if ((HEAP8[i1 + (i17 + 2) | 0] | 0) == 74) {
      i24 = 1;
      i21 = 73;
      break L3;
     }
     if ((HEAP8[i1 + (i17 + 2) | 0] | 0) == 73) {
      break;
     } else {
      i21 = 12;
     }
    } else if ((i23 << 24 >> 24 | 0) == 41) {
     i21 = 13;
    }
    if ((i21 | 0) == 12) {
     i21 = 0;
     if (i23 << 24 >> 24 == 41) {
      i21 = 13;
     }
    }
    if ((i21 | 0) == 13) {
     i21 = 0;
     if ((HEAP8[i1 + (i17 + 2) | 0] | 0) == 73) {
      break;
     }
    }
    if ((i22 | 0) < (i2 | 0)) {
     i17 = i22;
     i18 = 0;
     i19 = 0;
     i20 = i23;
    } else {
     i25 = i16;
     i26 = i6;
     i27 = i7;
     i21 = 64;
     break L3;
    }
   }
   i23 = i17 + 3 | 0;
   if ((i23 | 0) < (i2 | 0)) {
    i13 = i23;
    i14 = 0;
    i15 = 0;
    i16 = 1;
   } else {
    i24 = 1;
    i21 = 74;
    break L3;
   }
  }
  do {
   if ((i21 | 0) == 16) {
    i21 = 0;
    if ((i20 & 255) >>> 0 < 32 >>> 0) {
     i21 = 17;
     break;
    }
    i15 = i2 - i17 | 0;
    i14 = (i15 | 0) > 1;
    do {
     if (i14 & i20 << 24 >> 24 == -126) {
      if ((HEAPU8[i1 + (i17 + 1) | 0] | 0) >>> 0 <= 159 >>> 0) {
       i21 = 26;
       break;
      }
      i28 = i7;
      i29 = i6 + 1 | 0;
      i30 = i20;
     } else {
      i21 = 26;
     }
    } while (0);
    do {
     if ((i21 | 0) == 26) {
      i21 = 0;
      if (!i14) {
       i28 = i7;
       i29 = i6;
       i30 = i20;
       break;
      }
      if ((i20 << 24 >> 24 | 0) == (-125 | 0)) {
       i28 = i7;
       i29 = i6 + (((HEAP8[i1 + (i17 + 1) | 0] | 0) - 64 & 255) >>> 0 < 96 >>> 0) | 0;
       i30 = -125;
       break;
      } else if ((i20 << 24 >> 24 | 0) == (-92 | 0)) {
       i28 = i7 + ((HEAPU8[i1 + (i17 + 1) | 0] | 0) >>> 0 > 159 >>> 0) | 0;
       i29 = i6;
       i30 = -92;
       break;
      } else if ((i20 << 24 >> 24 | 0) == (-91 | 0)) {
       i28 = ((HEAPU8[i1 + (i17 + 1) | 0] | 0) >>> 0 > 159 >>> 0) + i7 | 0;
       i29 = i6;
       i30 = -91;
       break;
      } else {
       i28 = i7;
       i29 = i6;
       i30 = i20;
       break;
      }
     }
    } while (0);
    if ((i18 | 0) == 0) {
     if (i30 << 24 >> 24 == -114) {
      if ((i15 | 0) < 2) {
       i31 = i16;
       i32 = i28;
       i33 = i29;
       i34 = i19;
       i35 = 0;
       i36 = i17;
       break;
      }
      i14 = i17 + 1 | 0;
      if (((HEAP8[i1 + i14 | 0] | 0) + 95 & 255) >>> 0 >= 63 >>> 0) {
       i24 = 3;
       i21 = 81;
       break L3;
      }
      i31 = i16;
      i32 = (i19 | 0) == 1 ? i28 + 100 | 0 : i28;
      i33 = i29;
      i34 = i19 + 1 | 0;
      i35 = 0;
      i36 = i14;
      break;
     }
     if ((i30 + 127 & 255) >>> 0 < 31 >>> 0) {
      if ((i15 | 0) <= 0) {
       i31 = 3;
       i32 = i28;
       i33 = i29;
       i34 = i19;
       i35 = 0;
       i36 = i17;
       break;
      }
      i14 = HEAP8[i1 + (i17 + 1) | 0] | 0;
      if ((i14 - 64 & 255) >>> 0 < 63 >>> 0) {
       i24 = 3;
       i21 = 82;
       break L3;
      }
      if (i14 << 24 >> 24 < 0 & (i14 & 255) >>> 0 < 253 >>> 0) {
       i24 = 3;
       i21 = 83;
       break L3;
      } else {
       i31 = 3;
       i32 = i28;
       i33 = i29;
       i34 = i19;
       i35 = 0;
       i36 = i17;
       break;
      }
     }
     if ((i30 & 255) >>> 0 < 253 >>> 0 | i30 << 24 >> 24 == -1) {
      i31 = i16;
      i32 = i28;
      i33 = i29;
      i34 = i30 << 24 >> 24 > -1 ? i19 : 0;
      i35 = (i30 & 255) >>> 7 & 255;
      i36 = i17;
      break;
     }
     if ((i15 | 0) <= 0) {
      i31 = 2;
      i32 = i28;
      i33 = i29;
      i34 = i19;
      i35 = 0;
      i36 = i17;
      break;
     }
     i14 = HEAP8[i1 + (i17 + 1) | 0] | 0;
     if ((i14 & 255) >>> 0 < 161 >>> 0 | i14 << 24 >> 24 == -1) {
      i31 = 2;
      i32 = i28;
      i33 = i29;
      i34 = i19;
      i35 = 0;
      i36 = i17;
      break;
     } else {
      i24 = 2;
      i21 = 84;
      break L3;
     }
    }
    if ((i17 | 0) > 0) {
     i14 = i30 - 64 & 255;
     i13 = i1 + (i17 - 1) | 0;
     if ((i14 & 255) >>> 0 < 97 >>> 0) {
      if ((HEAP8[(HEAPU8[i13] | 0) + (H_BASE + 128) | 0] & 1) != 0) {
       i24 = 3;
       i21 = 75;
       break L3;
      }
     }
     i23 = HEAP8[i13] | 0;
     if ((i23 + 127 & 255) >>> 0 < 31 >>> 0) {
      if ((i14 & 255) >>> 0 < 62 >>> 0 | (i30 - 127 & 255) >>> 0 < 126 >>> 0) {
       i24 = 3;
       i21 = 76;
       break L3;
      }
     }
     i14 = i30 << 24 >> 24 == -1;
     if (!((i30 & 255) >>> 0 < 253 >>> 0 | i14)) {
      if (!((i23 & 255) >>> 0 < 161 >>> 0 | i23 << 24 >> 24 == -1)) {
       i24 = 2;
       i21 = 77;
       break L3;
      }
     }
     if (!((i23 & 255) >>> 0 < 253 >>> 0 | i23 << 24 >> 24 == -1)) {
      if (!((i30 & 255) >>> 0 < 161 >>> 0 | i14)) {
       i24 = 2;
       i21 = 78;
       break L3;
      }
     }
     if ((i30 + 96 & 255) >>> 0 > 63 >>> 0 & i23 << 24 >> 24 == -114 | i30 << 24 >> 24 > -1) {
      i24 = 3;
      i21 = 79;
      break L3;
     }
    } else {
     if (i30 << 24 >> 24 > -1) {
      i24 = 3;
      i21 = 80;
      break L3;
     }
    }
    i23 = i30 + 95 & 255;
    if ((i23 & 255) >>> 0 < 6 >>> 0) {
     i31 = i16;
     i32 = i28 + 1 | 0;
     i33 = i29;
     i34 = 0;
     i35 = 0;
     i36 = i17;
     break;
    }
    if ((i23 & 255) >>> 0 < 63 >>> 0) {
     i31 = i16;
     i32 = i28;
     i33 = i29;
     i34 = 0;
     i35 = 0;
     i36 = i17;
     break;
    }
    if (!((i30 & 255) >>> 0 < 161 >>> 0 | i30 << 24 >> 24 == -1)) {
     i31 = i16;
     i32 = i28 + 1 | 0;
     i33 = i29;
     i34 = 0;
     i35 = 0;
     i36 = i17;
     break;
    }
    if (i30 << 24 >> 24 == -114) {
     i31 = i16;
     i32 = i28 + 1 | 0;
     i33 = i29;
     i34 = 0;
     i35 = 0;
     i36 = i17;
     break;
    } else {
     i31 = i16;
     i32 = i28;
     i33 = ((i30 & 255) >>> 7 & 255 ^ 1) + i29 | 0;
     i34 = 0;
     i35 = 0;
     i36 = i17;
     break;
    }
   }
  } while (0);
  do {
   if ((i21 | 0) == 17) {
    i21 = 0;
    if ((i17 | 0) <= 1) {
     i31 = i16;
     i32 = i7;
     i33 = i6;
     i34 = 0;
     i35 = 0;
     i36 = i17;
     break;
    }
    i23 = HEAP8[i1 + (i17 - 2) | 0] | 0;
    if ((i23 << 24 >> 24 | 0) == (-127 | 0)) {
     i14 = ((HEAP8[i1 + (i17 - 1) | 0] | 0) - 65 & 255) >>> 0 < 9 >>> 0;
     i31 = i14 ? 3 : i16;
     i32 = i7;
     i33 = i14 ? i6 + 100 | 0 : i6;
     i34 = 0;
     i35 = 0;
     i36 = i17;
     break;
    } else if ((i23 << 24 >> 24 | 0) == (-95 | 0)) {
     i14 = ((HEAP8[i1 + (i17 - 1) | 0] | 0) + 94 & 255) >>> 0 < 9 >>> 0;
     i31 = i14 ? 2 : i16;
     i32 = i14 ? i7 + 100 | 0 : i7;
     i33 = i6;
     i34 = 0;
     i35 = 0;
     i36 = i17;
     break;
    } else if ((i23 << 24 >> 24 | 0) == (-126 | 0)) {
     i31 = i16;
     i32 = i7;
     i33 = (HEAPU8[i1 + (i17 - 1) | 0] | 0) >>> 0 > 159 >>> 0 ? i6 + 40 | 0 : i6;
     i34 = 0;
     i35 = 0;
     i36 = i17;
     break;
    } else if ((i23 << 24 >> 24 | 0) == (-92 | 0)) {
     i31 = i16;
     i32 = (HEAPU8[i1 + (i17 - 1) | 0] | 0) >>> 0 > 159 >>> 0 ? i7 + 40 | 0 : i7;
     i33 = i6;
     i34 = 0;
     i35 = 0;
     i36 = i17;
     break;
    } else {
     i31 = i16;
     i32 = i7;
     i33 = i6;
     i34 = 0;
     i35 = 0;
     i36 = i17;
     break;
    }
   }
  } while (0);
  i16 = i36 + 1 | 0;
  if ((i16 | 0) < (i2 | 0)) {
   i3 = i16;
   i4 = i35;
   i5 = i34;
   i6 = i33;
   i7 = i32;
   i8 = i31;
  } else {
   i25 = i31;
   i26 = i33;
   i27 = i32;
   i21 = 64;
   break;
  }
 }
 if ((i21 | 0) == 64) {
  if ((i25 | 0) != 0) {
   i24 = i25;
   return i24 | 0;
  }
  if ((i26 | 0) > (i27 | 0)) {
   i24 = 3;
   return i24 | 0;
  } else {
   i9 = i26;
   i10 = i27;
   i11 = (i9 | 0) < (i10 | 0);
   i12 = i11 ? 2 : 0;
   return i12 | 0;
  }
 } else if ((i21 | 0) == 70) {
  return i24 | 0;
 } else if ((i21 | 0) == 71) {
  return i24 | 0;
 } else if ((i21 | 0) == 72) {
  return i24 | 0;
 } else if ((i21 | 0) == 73) {
  return i24 | 0;
 } else if ((i21 | 0) == 74) {
  return i24 | 0;
 } else if ((i21 | 0) == 75) {
  return i24 | 0;
 } else if ((i21 | 0) == 76) {
  return i24 | 0;
 } else if ((i21 | 0) == 77) {
  return i24 | 0;
 } else if ((i21 | 0) == 78) {
  return i24 | 0;
 } else if ((i21 | 0) == 79) {
  return i24 | 0;
 } else if ((i21 | 0) == 80) {
  return i24 | 0;
 } else if ((i21 | 0) == 81) {
  return i24 | 0;
 } else if ((i21 | 0) == 82) {
  return i24 | 0;
 } else if ((i21 | 0) == 83) {
  return i24 | 0;
 } else if ((i21 | 0) == 84) {
  return i24 | 0;
 }
 return 0;
}
function __ZN7WebCore19TextResourceDecoder6decodeEPKcj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 if ((HEAP8[i2 + 40 | 0] & 1) == 0) {
  i10 = __ZN7WebCore19TextResourceDecoder11checkForBOMEPKcj(i2, i3, i4) | 0;
 } else {
  i10 = 0;
 }
 HEAP8[i6] = 0;
 i11 = i2 + 4 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 3) {
   if ((HEAP8[i2 + 41 | 0] & 1) != 0) {
    break;
   }
   if (__ZN7WebCore19TextResourceDecoder18checkForCSSCharsetEPKcjRb(i2, i3, i4, i6) | 0) {
    i13 = HEAP32[i11 >> 2] | 0;
    i14 = 9;
    break;
   }
   i15 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
   HEAP32[i1 >> 2] = i15;
   if ((i15 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i16 = i15 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   STACKTOP = i5;
   return;
  } else {
   i13 = i12;
   i14 = 9;
  }
 } while (0);
 do {
  if ((i14 | 0) == 9) {
   if ((i13 - 1 | 0) >>> 0 >= 2 >>> 0) {
    break;
   }
   if ((HEAP8[i2 + 42 | 0] & 1) != 0) {
    break;
   }
   if (__ZN7WebCore19TextResourceDecoder19checkForHeadCharsetEPKcjRb(i2, i3, i4, i6) | 0) {
    break;
   }
   i12 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
   HEAP32[i1 >> 2] = i12;
   if ((i12 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i16 = i12 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   STACKTOP = i5;
   return;
  }
 } while (0);
 do {
  if ((HEAP8[i2 + 45 | 0] & 1) != 0) {
   i13 = i2 + 20 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == 7) {
    if ((HEAP32[i2 + 24 >> 2] | 0) == 0) {
     break;
    }
   } else if ((i14 | 0) != 0) {
    break;
   }
   i14 = i2 + 8 | 0;
   if (__ZNK7WebCore12TextEncoding10isJapaneseEv(i14) | 0) {
    __ZN7WebCore19TextResourceDecoder22detectJapaneseEncodingEPKcj(i2, i3, i4);
    break;
   }
   i16 = i7 | 0;
   HEAP32[i16 >> 2] = 0;
   if (!(__ZN7WebCore18detectTextEncodingEPKcjS1_PNS_12TextEncodingE(i3, i4, HEAP32[i2 + 24 >> 2] | 0, i7) | 0)) {
    break;
   }
   if ((HEAP32[i16 >> 2] | 0) == 0) {
    break;
   }
   i16 = i14;
   i14 = i7;
   HEAP32[i16 >> 2] = HEAP32[i14 >> 2];
   HEAP16[i16 + 4 >> 1] = HEAP16[i14 + 4 >> 1] | 0;
   i14 = i2 + 16 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   if ((i16 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 3](i16);
   }
   HEAP32[i13 >> 2] = 1;
  }
 } while (0);
 i7 = i2 + 16 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) == 0) {
   __ZN7WebCore12newTextCodecERKNS_12TextEncodingE(i8, i2 + 8 | 0);
   i13 = HEAP32[i7 >> 2] | 0;
   i16 = i8 | 0;
   i14 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i7 >> 2] = i14;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 3](i13);
   i13 = HEAP32[i16 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 3](i13);
  }
 } while (0);
 i8 = i2 + 28 | 0;
 i13 = i2 + 36 | 0;
 i16 = HEAP32[i13 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i14 = HEAP32[i7 >> 2] | 0;
  FUNCTION_TABLE_viiiiiii[HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] & 1](i1, i14, i3 + i10 | 0, i4 - i10 | 0, 0, (HEAP32[i11 >> 2] | 0) == 2, i2 + 44 | 0);
  STACKTOP = i5;
  return;
 }
 if ((HEAP8[i6] & 1) == 0) {
  i6 = i16 + i4 | 0;
  i14 = i2 + 32 | 0;
  i12 = HEAP32[i14 >> 2] | 0;
  do {
   if (i12 >>> 0 < i6 >>> 0) {
    i15 = i12 + 1 + (i12 >>> 2) | 0;
    i17 = i15 >>> 0 > 16 >>> 0 ? i15 : 16;
    i15 = i17 >>> 0 > i6 >>> 0 ? i17 : i6;
    if (i12 >>> 0 >= i15 >>> 0) {
     break;
    }
    i17 = i8 | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    i19 = __ZN3WTF18fastMallocGoodSizeEj(i15) | 0;
    HEAP32[i14 >> 2] = i19;
    i15 = __ZN3WTF10fastMallocEj(i19) | 0;
    HEAP32[i17 >> 2] = i15;
    _memcpy(i15 | 0, i18 | 0, i16) | 0;
    if ((i18 | 0) == 0) {
     break;
    }
    if ((HEAP32[i17 >> 2] | 0) == (i18 | 0)) {
     HEAP32[i17 >> 2] = 0;
     HEAP32[i14 >> 2] = 0;
    }
    __ZN3WTF8fastFreeEPv(i18);
   }
  } while (0);
  HEAP32[i13 >> 2] = i6;
  i6 = i8 | 0;
  _memcpy((HEAP32[i6 >> 2] | 0) + i16 | 0, i3 | 0, i4) | 0;
  i20 = HEAP32[i13 >> 2] | 0;
  i21 = i6;
 } else {
  i20 = i16;
  i21 = i8 | 0;
 }
 i8 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i11 >> 2] | 0) == 2) {
  i22 = (HEAP8[i2 + 43 | 0] & 1) == 0;
 } else {
  i22 = 0;
 }
 FUNCTION_TABLE_viiiiiii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 1](i9, i8, (HEAP32[i21 >> 2] | 0) + i10 | 0, i20 - i10 | 0, 0, i22, i2 + 44 | 0);
 i22 = i2 + 32 | 0;
 do {
  if ((HEAP32[i22 >> 2] | 0) != 0) {
   if ((HEAP32[i13 >> 2] | 0) != 0) {
    HEAP32[i13 >> 2] = 0;
   }
   i2 = HEAP32[i21 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   HEAP32[i21 >> 2] = 0;
   HEAP32[i22 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i22 = i9 | 0;
 i9 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 HEAP32[i1 >> 2] = i9;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore19TextResourceDecoder11checkForBOMEPKcj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = HEAP32[i1 + 36 >> 2] | 0;
 i5 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   if ((i3 | 0) == 0) {
    i6 = 37;
    break;
   }
   i7 = i2 + 1 | 0;
   i8 = i3 - 1 | 0;
   i9 = HEAP8[i2] | 0;
   i6 = 5;
  } else {
   i10 = i4 - 1 | 0;
   i11 = HEAP8[i5] | 0;
   if ((i10 | 0) == 0) {
    i7 = i2;
    i8 = i3;
    i9 = i11;
    i6 = 5;
    break;
   }
   i12 = HEAP8[i5 + 1 | 0] | 0;
   if ((i10 | 0) == 1) {
    i13 = i11;
    i14 = i2;
    i15 = i3;
    i16 = i12;
    i6 = 8;
   } else {
    i17 = i5 + 2 | 0;
    i18 = i3;
    i19 = i2;
    i20 = i11;
    i21 = i12;
    i6 = 10;
   }
  }
 } while (0);
 do {
  if ((i6 | 0) == 5) {
   if ((i8 | 0) == 0) {
    i6 = 37;
    break;
   }
   i13 = i9;
   i14 = i7 + 1 | 0;
   i15 = i8 - 1 | 0;
   i16 = HEAP8[i7] | 0;
   i6 = 8;
  }
 } while (0);
 do {
  if ((i6 | 0) == 8) {
   if ((i15 | 0) == 0) {
    i22 = 0;
    i23 = 0;
    i24 = i13;
    i25 = i16;
    i6 = 12;
    break;
   }
   i17 = i14;
   i18 = i15 - 1 | 0;
   i19 = i14 + 1 | 0;
   i20 = i13;
   i21 = i16;
   i6 = 10;
  }
 } while (0);
 do {
  if ((i6 | 0) == 10) {
   i16 = HEAP8[i17] | 0;
   if ((i18 | 0) == 0) {
    i22 = 0;
    i23 = i16;
    i24 = i20;
    i25 = i21;
    i6 = 12;
    break;
   }
   i22 = HEAPU8[i19] | 0;
   i23 = i16;
   i24 = i20;
   i25 = i21;
   i6 = 12;
  }
 } while (0);
 do {
  if ((i6 | 0) == 12) {
   if (i24 << 24 >> 24 == -1 & i25 << 24 >> 24 == -2) {
    if (i23 << 24 >> 24 == 0 & (i22 | 0) == 0) {
     i21 = __ZN7WebCore25UTF32LittleEndianEncodingEv() | 0;
     if ((HEAP32[i21 >> 2] | 0) == 0) {
      i26 = 4;
      break;
     }
     i20 = i1 + 8 | 0;
     i19 = i21;
     HEAP32[i20 >> 2] = HEAP32[i19 >> 2];
     HEAP16[i20 + 4 >> 1] = HEAP16[i19 + 4 >> 1] | 0;
     i19 = i1 + 16 | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     HEAP32[i19 >> 2] = 0;
     if ((i20 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 3](i20);
     }
     HEAP32[i1 + 20 >> 2] = 1;
     i26 = 4;
     break;
    } else {
     i20 = __ZN7WebCore25UTF16LittleEndianEncodingEv() | 0;
     if ((HEAP32[i20 >> 2] | 0) == 0) {
      i26 = 2;
      break;
     }
     i19 = i1 + 8 | 0;
     i21 = i20;
     HEAP32[i19 >> 2] = HEAP32[i21 >> 2];
     HEAP16[i19 + 4 >> 1] = HEAP16[i21 + 4 >> 1] | 0;
     i21 = i1 + 16 | 0;
     i19 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = 0;
     if ((i19 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 3](i19);
     }
     HEAP32[i1 + 20 >> 2] = 1;
     i26 = 2;
     break;
    }
   }
   if (i24 << 24 >> 24 == -17 & i25 << 24 >> 24 == -69 & i23 << 24 >> 24 == -65) {
    i19 = __ZN7WebCore12UTF8EncodingEv() | 0;
    if ((HEAP32[i19 >> 2] | 0) == 0) {
     i26 = 3;
     break;
    }
    i21 = i1 + 8 | 0;
    i20 = i19;
    HEAP32[i21 >> 2] = HEAP32[i20 >> 2];
    HEAP16[i21 + 4 >> 1] = HEAP16[i20 + 4 >> 1] | 0;
    i20 = i1 + 16 | 0;
    i21 = HEAP32[i20 >> 2] | 0;
    HEAP32[i20 >> 2] = 0;
    if ((i21 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 3](i21);
    }
    HEAP32[i1 + 20 >> 2] = 1;
    i26 = 3;
    break;
   }
   if (i24 << 24 >> 24 == -2 & i25 << 24 >> 24 == -1) {
    i21 = __ZN7WebCore22UTF16BigEndianEncodingEv() | 0;
    if ((HEAP32[i21 >> 2] | 0) == 0) {
     i26 = 2;
     break;
    }
    i20 = i1 + 8 | 0;
    i19 = i21;
    HEAP32[i20 >> 2] = HEAP32[i19 >> 2];
    HEAP16[i20 + 4 >> 1] = HEAP16[i19 + 4 >> 1] | 0;
    i19 = i1 + 16 | 0;
    i20 = HEAP32[i19 >> 2] | 0;
    HEAP32[i19 >> 2] = 0;
    if ((i20 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 3](i20);
    }
    HEAP32[i1 + 20 >> 2] = 1;
    i26 = 2;
    break;
   }
   if (!((i24 | i25) << 24 >> 24 == 0 & i23 << 24 >> 24 == -2 & (i22 | 0) == 255)) {
    i6 = 37;
    break;
   }
   i20 = __ZN7WebCore22UTF32BigEndianEncodingEv() | 0;
   if ((HEAP32[i20 >> 2] | 0) == 0) {
    i26 = 4;
    break;
   }
   i19 = i1 + 8 | 0;
   i21 = i20;
   HEAP32[i19 >> 2] = HEAP32[i21 >> 2];
   HEAP16[i19 + 4 >> 1] = HEAP16[i21 + 4 >> 1] | 0;
   i21 = i1 + 16 | 0;
   i19 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   if ((i19 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 3](i19);
   }
   HEAP32[i1 + 20 >> 2] = 1;
   i26 = 4;
  }
 } while (0);
 do {
  if ((i6 | 0) == 37) {
   if ((i4 + i3 | 0) >>> 0 > 3 >>> 0) {
    i26 = 0;
    break;
   } else {
    i27 = 0;
   }
   return i27 | 0;
  }
 } while (0);
 HEAP8[i1 + 40 | 0] = 1;
 i27 = i26;
 return i27 | 0;
}
function __ZN7WebCore19TextResourceDecoder18checkForCSSCharsetEPKcjRb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i6 = i5 | 0;
 i7 = i5 + 80 | 0;
 i8 = i1 + 20 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if (!((i9 | 0) == 0 | (i9 | 0) == 7)) {
  HEAP8[i1 + 41 | 0] = 1;
  i10 = 1;
  STACKTOP = i5;
  return i10 | 0;
 }
 i9 = i1 + 28 | 0;
 i11 = i1 + 36 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = i12 + i3 | 0;
 i14 = i1 + 32 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 do {
  if (i15 >>> 0 < i13 >>> 0) {
   i16 = i15 + 1 + (i15 >>> 2) | 0;
   i17 = i16 >>> 0 > 16 >>> 0 ? i16 : 16;
   i16 = i17 >>> 0 > i13 >>> 0 ? i17 : i13;
   if (i15 >>> 0 >= i16 >>> 0) {
    break;
   }
   i17 = i9 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   i19 = __ZN3WTF18fastMallocGoodSizeEj(i16) | 0;
   HEAP32[i14 >> 2] = i19;
   i16 = __ZN3WTF10fastMallocEj(i19) | 0;
   HEAP32[i17 >> 2] = i16;
   _memcpy(i16 | 0, i18 | 0, i12) | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   if ((HEAP32[i17 >> 2] | 0) == (i18 | 0)) {
    HEAP32[i17 >> 2] = 0;
    HEAP32[i14 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i18);
  }
 } while (0);
 HEAP32[i11 >> 2] = i13;
 i13 = i9 | 0;
 _memcpy((HEAP32[i13 >> 2] | 0) + i12 | 0, i2 | 0, i3) | 0;
 HEAP8[i4] = 1;
 i4 = HEAP32[i11 >> 2] | 0;
 if (i4 >>> 0 < 14 >>> 0) {
  i10 = 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 i11 = HEAP32[i13 >> 2] | 0;
 i13 = i11 + i4 | 0;
 do {
  if ((HEAP8[i11] | 0) == 64) {
   if ((HEAP8[i11 + 1 | 0] | 0) != 99) {
    break;
   }
   if ((HEAP8[i11 + 2 | 0] | 0) != 104) {
    break;
   }
   if ((HEAP8[i11 + 3 | 0] | 0) != 97) {
    break;
   }
   if ((HEAP8[i11 + 4 | 0] | 0) != 114) {
    break;
   }
   if ((HEAP8[i11 + 5 | 0] | 0) != 115) {
    break;
   }
   if ((HEAP8[i11 + 6 | 0] | 0) != 101) {
    break;
   }
   if ((HEAP8[i11 + 7 | 0] | 0) != 116) {
    break;
   }
   if ((HEAP8[i11 + 8 | 0] | 0) != 32) {
    break;
   }
   if ((HEAP8[i11 + 9 | 0] | 0) != 34) {
    break;
   }
   i4 = i11 + 10 | 0;
   i3 = i4;
   while (1) {
    if (i3 >>> 0 >= i13 >>> 0) {
     break;
    }
    if ((HEAP8[i3] | 0) == 34) {
     break;
    } else {
     i3 = i3 + 1 | 0;
    }
   }
   if ((i3 | 0) == (i13 | 0)) {
    i10 = 0;
    STACKTOP = i5;
    return i10 | 0;
   }
   if ((HEAP8[i3 + 1 | 0] | 0) != 59) {
    break;
   }
   i2 = i3 - i4 | 0;
   i12 = i2 + 1 | 0;
   i9 = i6 + 12 | 0;
   i14 = i6 | 0;
   HEAP32[i14 >> 2] = i9;
   i15 = i6 + 4 | 0;
   HEAP32[i15 >> 2] = 64;
   i18 = i6 + 8 | 0;
   HEAP32[i18 >> 2] = i12;
   if (i12 >>> 0 > 64 >>> 0) {
    i17 = __ZN3WTF18fastMallocGoodSizeEj(i12) | 0;
    HEAP32[i15 >> 2] = i17;
    i12 = __ZN3WTF10fastMallocEj(i17) | 0;
    HEAP32[i14 >> 2] = i12;
    i20 = i12;
   } else {
    i20 = i9;
   }
   _memcpy(i20 | 0, i4 | 0, i2) | 0;
   if ((HEAP32[i18 >> 2] | 0) >>> 0 <= i2 >>> 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
   HEAP8[(HEAP32[i14 >> 2] | 0) + i2 | 0] = 0;
   __ZN7WebCore12TextEncodingC1EPKc(i7, HEAP32[i14 >> 2] | 0);
   if ((HEAP32[i18 >> 2] | 0) != 0) {
    HEAP32[i18 >> 2] = 0;
   }
   i18 = HEAP32[i14 >> 2] | 0;
   if (!((i9 | 0) == (i18 | 0) | (i18 | 0) == 0)) {
    HEAP32[i14 >> 2] = 0;
    HEAP32[i15 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i18);
   }
   if ((HEAP32[i7 >> 2] | 0) == 0) {
    break;
   }
   i18 = i1 + 8 | 0;
   i15 = __ZNK7WebCore12TextEncoding26closestByteBasedEquivalentEv(i7) | 0;
   HEAP32[i18 >> 2] = HEAP32[i15 >> 2];
   HEAP16[i18 + 4 >> 1] = HEAP16[i15 + 4 >> 1] | 0;
   i15 = i1 + 16 | 0;
   i18 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i18 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 3](i18);
   }
   HEAP32[i8 >> 2] = 4;
  }
 } while (0);
 HEAP8[i1 + 41 | 0] = 1;
 i10 = 1;
 STACKTOP = i5;
 return i10 | 0;
}
function __ZN7WebCore19TextResourceDecoder5flushEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 28 | 0;
 i7 = i2 + 36 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((HEAP8[i2 + 45 | 0] & 1) == 0) {
    break;
   }
   i9 = i2 + 20 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 7) {
    if ((HEAP32[i2 + 24 >> 2] | 0) == 0) {
     break;
    }
   } else if ((i10 | 0) != 0) {
    break;
   }
   if ((HEAP8[i2 + 42 | 0] & 1) == 0) {
    if (((HEAP32[i2 + 4 >> 2] | 0) - 1 | 0) >>> 0 >= 2 >>> 0) {
     i11 = 7;
    }
   } else {
    i11 = 7;
   }
   if ((i11 | 0) == 7) {
    if ((HEAP8[i2 + 41 | 0] & 1) != 0) {
     break;
    }
    if ((HEAP32[i2 + 4 >> 2] | 0) != 3) {
     break;
    }
   }
   i10 = i4 | 0;
   HEAP32[i10 >> 2] = 0;
   if (!(__ZN7WebCore18detectTextEncodingEPKcjS1_PNS_12TextEncodingE(HEAP32[i6 >> 2] | 0, i8, HEAP32[i2 + 24 >> 2] | 0, i4) | 0)) {
    break;
   }
   if ((HEAP32[i10 >> 2] | 0) == 0) {
    break;
   }
   i10 = i2 + 8 | 0;
   i12 = i4;
   HEAP32[i10 >> 2] = HEAP32[i12 >> 2];
   HEAP16[i10 + 4 >> 1] = HEAP16[i12 + 4 >> 1] | 0;
   i12 = i2 + 16 | 0;
   i10 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   if ((i10 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 3](i10);
   }
   HEAP32[i9 >> 2] = 1;
  }
 } while (0);
 i4 = i2 + 16 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   __ZN7WebCore12newTextCodecERKNS_12TextEncodingE(i5, i2 + 8 | 0);
   i8 = HEAP32[i4 >> 2] | 0;
   i11 = i5 | 0;
   i9 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i4 >> 2] = i9;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 3](i8);
   i8 = HEAP32[i11 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 3](i8);
  }
 } while (0);
 i5 = HEAP32[i4 >> 2] | 0;
 i8 = i6 | 0;
 if ((HEAP32[i2 + 4 >> 2] | 0) == 2) {
  i13 = (HEAP8[i2 + 43 | 0] & 1) == 0;
 } else {
  i13 = 0;
 }
 FUNCTION_TABLE_viiiiiii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 1](i1, i5, HEAP32[i8 >> 2] | 0, HEAP32[i7 >> 2] | 0, 1, i13, i2 + 44 | 0);
 i13 = i2 + 32 | 0;
 do {
  if ((HEAP32[i13 >> 2] | 0) != 0) {
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
   }
   i5 = HEAP32[i8 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   HEAP32[i8 >> 2] = 0;
   HEAP32[i13 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i13 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i13 | 0) == 0) {
  i14 = i2 + 40 | 0;
  HEAP8[i14] = 0;
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 3](i13);
 i14 = i2 + 40 | 0;
 HEAP8[i14] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore19TextResourceDecoder22detectJapaneseEncodingEPKcj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = __ZN7WebCore9KanjiCode5judgeEPKci(i2, i3) | 0;
 if ((i8 | 0) == 3) {
  __ZN7WebCore12TextEncodingC1EPKc(i7, H_BASE + 24 | 0);
  if ((HEAP32[i7 >> 2] | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i1 + 8 | 0;
  i2 = i7;
  HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
  HEAP16[i3 + 4 >> 1] = HEAP16[i2 + 4 >> 1] | 0;
  i2 = i1 + 16 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  if ((i3 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 3](i3);
  }
  HEAP32[i1 + 20 >> 2] = 1;
  STACKTOP = i4;
  return;
 } else if ((i8 | 0) == 1) {
  __ZN7WebCore12TextEncodingC1EPKc(i5, H_BASE + 48 | 0);
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i1 + 8 | 0;
  i2 = i5;
  HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
  HEAP16[i3 + 4 >> 1] = HEAP16[i2 + 4 >> 1] | 0;
  i2 = i1 + 16 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  if ((i3 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 3](i3);
  }
  HEAP32[i1 + 20 >> 2] = 1;
  STACKTOP = i4;
  return;
 } else if ((i8 | 0) == 2) {
  __ZN7WebCore12TextEncodingC1EPKc(i6, H_BASE + 40 | 0);
  if ((HEAP32[i6 >> 2] | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i8 = i1 + 8 | 0;
  i3 = i6;
  HEAP32[i8 >> 2] = HEAP32[i3 >> 2];
  HEAP16[i8 + 4 >> 1] = HEAP16[i3 + 4 >> 1] | 0;
  i3 = i1 + 16 | 0;
  i8 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  if ((i8 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 3](i8);
  }
  HEAP32[i1 + 20 >> 2] = 1;
  STACKTOP = i4;
  return;
 } else {
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore19TextResourceDecoder19checkForMetaCharsetEPKcj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 48 | 0;
 if (!(__ZN7WebCore21HTMLMetaCharsetParser19checkForMetaCharsetEPKcj(HEAP32[i6 >> 2] | 0, i2, i3) | 0)) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i3 = HEAP32[i6 >> 2] | 0;
 i2 = i3 + 2332 | 0;
 i8 = i5;
 i9 = HEAP32[i2 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = i3;
 } else {
  i3 = i1 + 8 | 0;
  if ((_strcasecmp(i9 | 0, H_BASE + 80 | 0) | 0) == 0) {
   __ZN7WebCore12TextEncodingC1EPKc(i5, H_BASE + 64 | 0);
   i5 = i3;
   HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
   HEAP16[i5 + 4 >> 1] = HEAP16[i8 + 4 >> 1] | 0;
  } else {
   i8 = i3;
   i3 = __ZNK7WebCore12TextEncoding26closestByteBasedEquivalentEv(i2) | 0;
   HEAP32[i8 >> 2] = HEAP32[i3 >> 2];
   HEAP16[i8 + 4 >> 1] = HEAP16[i3 + 4 >> 1] | 0;
  }
  i3 = i1 + 16 | 0;
  i8 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  if ((i8 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 3](i8);
  }
  HEAP32[i1 + 20 >> 2] = 3;
  i10 = HEAP32[i6 >> 2] | 0;
 }
 HEAP32[i6 >> 2] = 0;
 if ((i10 | 0) != 0) {
  __ZN7WebCore21HTMLMetaCharsetParserD1Ev(i10);
  __ZN3WTF8fastFreeEPv(i10);
 }
 HEAP8[i1 + 42 | 0] = 1;
 i7 = 1;
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN7WebCore19TextResourceDecoderC2ERKN3WTF6StringERKNS_12TextEncodingEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 HEAP32[i1 >> 2] = 1;
 i5 = i1 + 4 | 0;
 i6 = i2 | 0;
 do {
  if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 112 | 0) | 0) {
   i7 = 3;
   i8 = 3;
  } else {
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 96 | 0) | 0) {
    i7 = 1;
    i8 = 3;
    break;
   }
   i9 = __ZN7WebCore17DOMImplementation13isXMLMIMETypeERKN3WTF6StringE(i2) | 0;
   HEAP32[i5 >> 2] = i9 ? 2 : 0;
   i10 = i1 + 8 | 0;
   if (!i9) {
    i11 = i10;
    i8 = 6;
    break;
   }
   i12 = __ZN7WebCore12UTF8EncodingEv() | 0;
   i13 = i10;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  HEAP32[i5 >> 2] = i7;
  i11 = i1 + 8 | 0;
  i8 = 6;
 }
 do {
  if ((i8 | 0) == 6) {
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    i12 = i3;
    i13 = i11;
    break;
   }
   i12 = __ZN7WebCore14Latin1EncodingEv() | 0;
   i13 = i11;
  }
 } while (0);
 i11 = i12;
 i12 = i13;
 i13 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i12 + 4 >> 2] = i13;
 _memset(i1 + 16 | 0, 0, 29) | 0;
 HEAP8[i1 + 45 | 0] = i4 & 1;
 HEAP32[i1 + 48 >> 2] = 0;
 return;
}
function __ZN7WebCore19TextResourceDecoderC1ERKN3WTF6StringERKNS_12TextEncodingEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 HEAP32[i1 >> 2] = 1;
 i5 = i1 + 4 | 0;
 i6 = i2 | 0;
 do {
  if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 112 | 0) | 0) {
   i7 = 3;
   i8 = 3;
  } else {
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 96 | 0) | 0) {
    i7 = 1;
    i8 = 3;
    break;
   }
   i9 = __ZN7WebCore17DOMImplementation13isXMLMIMETypeERKN3WTF6StringE(i2) | 0;
   HEAP32[i5 >> 2] = i9 ? 2 : 0;
   i10 = i1 + 8 | 0;
   if (!i9) {
    i11 = i10;
    i8 = 6;
    break;
   }
   i12 = __ZN7WebCore12UTF8EncodingEv() | 0;
   i13 = i10;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  HEAP32[i5 >> 2] = i7;
  i11 = i1 + 8 | 0;
  i8 = 6;
 }
 do {
  if ((i8 | 0) == 6) {
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    i12 = i3;
    i13 = i11;
    break;
   }
   i12 = __ZN7WebCore14Latin1EncodingEv() | 0;
   i13 = i11;
  }
 } while (0);
 i11 = i12;
 i12 = i13;
 i13 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i12 + 4 >> 2] = i13;
 _memset(i1 + 16 | 0, 0, 29) | 0;
 HEAP8[i1 + 45 | 0] = i4 & 1;
 HEAP32[i1 + 48 >> 2] = 0;
 return;
}
function __ZN7WebCore19TextResourceDecoder11setEncodingERKNS_12TextEncodingENS0_14EncodingSourceE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 do {
  if ((i3 | 0) == 3) {
   i7 = i1 + 8 | 0;
   if ((_strcasecmp(i6 | 0, H_BASE + 80 | 0) | 0) != 0) {
    i8 = i7;
    i9 = 6;
    break;
   }
   __ZN7WebCore12TextEncodingC1EPKc(i5, H_BASE + 64 | 0);
   i10 = i7;
   i7 = i5;
   HEAP32[i10 >> 2] = HEAP32[i7 >> 2];
   HEAP16[i10 + 4 >> 1] = HEAP16[i7 + 4 >> 1] | 0;
  } else {
   i7 = i1 + 8 | 0;
   if ((i3 - 2 | 0) >>> 0 < 3 >>> 0) {
    i8 = i7;
    i9 = 6;
    break;
   }
   i10 = i7;
   i7 = i2;
   HEAP32[i10 >> 2] = HEAP32[i7 >> 2];
   HEAP16[i10 + 4 >> 1] = HEAP16[i7 + 4 >> 1] | 0;
  }
 } while (0);
 if ((i9 | 0) == 6) {
  i9 = i8;
  i8 = __ZNK7WebCore12TextEncoding26closestByteBasedEquivalentEv(i2) | 0;
  HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
  HEAP16[i9 + 4 >> 1] = HEAP16[i8 + 4 >> 1] | 0;
 }
 i8 = i1 + 16 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 if ((i9 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 3](i9);
 }
 HEAP32[i1 + 20 >> 2] = i3;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore19TextResourceDecoderD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore21HTMLMetaCharsetParserD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 36 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 32 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 3](i3);
 return;
}
function __ZN7WebCore19TextResourceDecoderD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore21HTMLMetaCharsetParserD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 36 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 32 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 3](i3);
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
function __ZN7WebCore19TextResourceDecoder20determineContentTypeERKN3WTF6StringE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 112 | 0) | 0) {
  i3 = 3;
  return i3 | 0;
 }
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 96 | 0) | 0) {
  i3 = 1;
  return i3 | 0;
 }
 i2 = __ZN7WebCore17DOMImplementation13isXMLMIMETypeERKN3WTF6StringE(i1) | 0;
 i3 = i2 ? 2 : 0;
 return i3 | 0;
}
function _strncasecmp(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 while (i4 >>> 0 < i3 >>> 0) {
  i5 = _tolower(HEAP8[i1 + i4 | 0] | 0) | 0;
  i6 = _tolower(HEAP8[i2 + i4 | 0] | 0) | 0;
  if ((i5 | 0) == (i6 | 0) & (i5 | 0) == 0) return 0;
  if ((i5 | 0) == 0) return -1;
  if ((i6 | 0) == 0) return 1;
  if ((i5 | 0) == (i6 | 0)) {
   i4 = i4 + 1 | 0;
   continue;
  } else {
   return (i5 >>> 0 > i6 >>> 0 ? 1 : -1) | 0;
  }
 }
 return 0;
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
function __ZNK7WebCore19TextResourceDecoder16shouldAutoDetectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 do {
  if ((HEAP8[i1 + 45 | 0] & 1) == 0) {
   i2 = 0;
  } else {
   i3 = HEAP32[i1 + 20 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i2 = 1;
    break;
   }
   if ((i3 | 0) != 7) {
    i2 = 0;
    break;
   }
   i2 = (HEAP32[i1 + 24 >> 2] | 0) != 0;
  }
 } while (0);
 return i2 | 0;
}
function __ZN7WebCore19TextResourceDecoder15defaultEncodingENS0_11ContentTypeERKNS_12TextEncodingE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i1 | 0) == 2) {
  i3 = __ZN7WebCore12UTF8EncodingEv() | 0;
  return i3 | 0;
 }
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  i3 = i2;
  return i3 | 0;
 }
 i3 = __ZN7WebCore14Latin1EncodingEv() | 0;
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function b2(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(2);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function _tolower(i1) {
 i1 = i1 | 0;
 if ((i1 | 0) < 65) return i1 | 0;
 if ((i1 | 0) > 90) return i1 | 0;
 return i1 - 65 + 97 | 0;
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
function b5(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(5);
}
function _strcasecmp(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return _strncasecmp(i1, i2, -1) | 0;
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore19TextResourceDecoderD2Ev,b0];
  var FUNCTION_TABLE_ii = [b1,b1];
  var FUNCTION_TABLE_viiiiiii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  var FUNCTION_TABLE_viiii = [b5,b5,__ZN7WebCore19TextResourceDecoderC2ERKN3WTF6StringERKNS_12TextEncodingEb,b5];
  return { _strlen: _strlen, _tolower: _tolower, _strncasecmp: _strncasecmp, _memset: _memset, _memcpy: _memcpy, _strcasecmp: _strcasecmp, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viiiiiii: dynCall_viiiiiii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viiiiiii": invoke_viiiiiii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _tolower = Module["_tolower"] = asm["_tolower"];
var _strncasecmp = Module["_strncasecmp"] = asm["_strncasecmp"];
var _memset = Module["_memset"] = asm["_memset"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _strcasecmp = Module["_strcasecmp"] = asm["_strcasecmp"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore19TextResourceDecoder11setEncodingERKNS_12TextEncodingENS0_14EncodingSourceE","__ZN7WebCore19TextResourceDecoder6decodeEPKcj","__ZN7WebCore19TextResourceDecoder15defaultEncodingENS0_11ContentTypeERKNS_12TextEncodingE","__ZNK7WebCore19TextResourceDecoder16shouldAutoDetectEv","__ZN3WTF15CrashOnOverflow10overflowedEv","_memcpy","__ZN7WebCore19TextResourceDecoder18checkForCSSCharsetEPKcjRb","_tolower","__ZN7WebCore19TextResourceDecoder20determineContentTypeERKN3WTF6StringE","__ZN7WebCore19TextResourceDecoderD2Ev","__ZN7WebCore19TextResourceDecoder5flushEv","__ZN7WebCore9KanjiCode5judgeEPKci","__ZN7WebCore19TextResourceDecoderC2ERKN3WTF6StringERKNS_12TextEncodingEb","_strlen","__ZN7WebCore19TextResourceDecoder22detectJapaneseEncodingEPKcj","__ZN7WebCore19TextResourceDecoder11checkForBOMEPKcj","_strncasecmp","__ZN7WebCore19TextResourceDecoder19checkForHeadCharsetEPKcjRb","__ZN7WebCore19TextResourceDecoder19checkForMetaCharsetEPKcj","_memset","_strcasecmp"]

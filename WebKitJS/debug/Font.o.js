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
H_BASE = parentModule["_malloc"](472 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 472;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore4FontC1Ev;
var __ZN7WebCore4FontC1ERKNS_15FontDescriptionEff;
var __ZN7WebCore4FontC1ERKNS_16FontPlatformDataEbNS_17FontSmoothingModeE;
var __ZN7WebCore4FontC1ERKS0_;
/* memory initializer */ allocate([77,101,105,114,121,111,0,0,77,83,32,77,105,110,99,104,111,0,0,0,0,0,0,0,77,83,32,71,111,116,104,105,99,0,0,0,0,0,0,0,77,83,32,80,77,105,110,99,104,111,0,0,0,0,0,0,77,83,32,80,71,111,116,104,105,99,0,0,0,0,0,0,45,255,51,255,32,0,48,255,14,102,29,103,0,0,0,0,45,255,51,255,32,0,48,255,180,48,183,48,195,48,175,48,45,255,51,255,32,0,14,102,29,103,0,0,0,0,0,0,45,255,51,255,32,0,180,48,183,48,195,48,175,48,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_fiiiii(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_fiiiii"](index,a1,a2,a3,a4,a5);
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
function invoke_viiff(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiff"](index,a1,a2,a3,a4);
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
  var __ZN3WTF10StringImpl19latin1CaseFoldTableE=env.__ZN3WTF10StringImpl19latin1CaseFoldTableE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZN7WebCore4Font28s_defaultTypesettingFeaturesE=(H_BASE+464)|0;
  var __ZN7WebCore4Font28s_roundingHackCharacterTableE=(H_BASE+152)|0;
  var __ZN7WebCore4Font10s_codePathE=(H_BASE+472)|0;
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
  var invoke_fiiiii=env.invoke_fiiiii;
  var invoke_v=env.invoke_v;
  var invoke_viiff=env.invoke_viiff;
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
function __ZNK7WebCore4Font6updateEN3WTF10PassRefPtrINS_12FontSelectorEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 48 | 0;
 i7 = i3 + 96 | 0;
 i8 = i3 + 104 | 0;
 i9 = i3 + 120 | 0;
 i10 = i3 + 128 | 0;
 i11 = i1 | 0;
 i12 = HEAP32[i2 >> 2] | 0;
 i2 = (i12 | 0) == 0;
 if (!i2) {
  i13 = i12 + 4 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 }
 i13 = i6;
 i14 = i10;
 i15 = i6 | 0;
 i16 = i6 + 4 | 0;
 i17 = i6 + 8 | 0;
 i18 = i6 + 24 | 0;
 i19 = i6 + 12 | 0;
 HEAP32[i19 >> 2] = i18;
 i20 = i6 + 16 | 0;
 HEAP32[i20 >> 2] = 3;
 i21 = i6 + 20 | 0;
 HEAP32[i21 >> 2] = 0;
 i22 = i1 + 16 | 0;
 i23 = HEAP32[i22 >> 2] | 0;
 HEAP32[i15 >> 2] = ~~(+HEAPF32[i1 + 12 >> 2] + +.5);
 HEAP32[i16 >> 2] = i23 >>> 7 & 255;
 HEAP32[i17 >> 2] = i23 >>> 19 & 1 | i23 << 3 & 8 | i23 >>> 2 << 4 & 48 | i23 >>> 4 << 2 & 4 | i23 >>> 18 << 1 & 2;
 i23 = i1 | 0;
 i24 = 0;
 i25 = 0;
 L4 : while (1) {
  i26 = HEAP32[i23 >> 2] | 0;
  if ((i26 | 0) == 0) {
   i27 = 0;
  } else {
   i27 = HEAP32[i26 - 4 >> 2] | 0;
  }
  if (i24 >>> 0 >= i27 >>> 0) {
   i28 = 37;
   break;
  }
  i29 = i26 + (i24 << 2) | 0;
  do {
   if ((i25 | 0) == (HEAP32[i20 >> 2] | 0)) {
    i26 = i25 + 1 | 0;
    i30 = HEAP32[i19 >> 2] | 0;
    do {
     if (i30 >>> 0 > i29 >>> 0) {
      i28 = 12;
     } else {
      if ((i30 + (i25 << 2) | 0) >>> 0 <= i29 >>> 0) {
       i28 = 12;
       break;
      }
      i31 = i29 - i30 >> 2;
      i32 = i26 + (i25 >>> 2) | 0;
      i33 = i32 >>> 0 > 16 >>> 0 ? i32 : 16;
      i32 = i33 >>> 0 > i26 >>> 0 ? i33 : i26;
      do {
       if (i25 >>> 0 < i32 >>> 0) {
        if (i32 >>> 0 > 3 >>> 0) {
         if (i32 >>> 0 > 1073741823 >>> 0) {
          i28 = 26;
          break L4;
         }
         i33 = __ZN3WTF18fastMallocGoodSizeEj(i32 << 2) | 0;
         HEAP32[i20 >> 2] = i33 >>> 2;
         i34 = __ZN3WTF10fastMallocEj(i33) | 0;
         HEAP32[i19 >> 2] = i34;
         i35 = i34;
        } else {
         HEAP32[i19 >> 2] = i18;
         HEAP32[i20 >> 2] = 3;
         i35 = i18;
        }
        i34 = i30;
        _memcpy(i35 | 0, i34 | 0, i25 << 2) | 0;
        if ((i18 | 0) == (i30 | 0) | (i30 | 0) == 0) {
         break;
        }
        if ((HEAP32[i19 >> 2] | 0) == (i30 | 0)) {
         HEAP32[i19 >> 2] = 0;
         HEAP32[i20 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i34);
       }
      } while (0);
      i32 = HEAP32[i19 >> 2] | 0;
      i36 = i32 + (i31 << 2) | 0;
      i37 = i32;
     }
    } while (0);
    if ((i28 | 0) == 12) {
     i28 = 0;
     i32 = i26 + (i25 >>> 2) | 0;
     i34 = i32 >>> 0 > 16 >>> 0 ? i32 : 16;
     i32 = i34 >>> 0 > i26 >>> 0 ? i34 : i26;
     do {
      if (i25 >>> 0 < i32 >>> 0) {
       if (i32 >>> 0 > 3 >>> 0) {
        if (i32 >>> 0 > 1073741823 >>> 0) {
         i28 = 15;
         break L4;
        }
        i34 = __ZN3WTF18fastMallocGoodSizeEj(i32 << 2) | 0;
        HEAP32[i20 >> 2] = i34 >>> 2;
        i33 = __ZN3WTF10fastMallocEj(i34) | 0;
        HEAP32[i19 >> 2] = i33;
        i38 = i33;
       } else {
        HEAP32[i19 >> 2] = i18;
        HEAP32[i20 >> 2] = 3;
        i38 = i18;
       }
       i33 = i30;
       _memcpy(i38 | 0, i33 | 0, i25 << 2) | 0;
       if ((i18 | 0) == (i30 | 0) | (i30 | 0) == 0) {
        break;
       }
       if ((HEAP32[i19 >> 2] | 0) == (i30 | 0)) {
        HEAP32[i19 >> 2] = 0;
        HEAP32[i20 >> 2] = 0;
       }
       __ZN3WTF8fastFreeEPv(i33);
      }
     } while (0);
     i36 = i29;
     i37 = HEAP32[i19 >> 2] | 0;
    }
    i30 = HEAP32[i36 >> 2] | 0;
    HEAP32[i37 + (HEAP32[i21 >> 2] << 2) >> 2] = i30;
    if ((i30 | 0) == 0) {
     break;
    }
    i32 = i30 | 0;
    HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 2;
   } else {
    i32 = HEAP32[i29 >> 2] | 0;
    HEAP32[(HEAP32[i19 >> 2] | 0) + (i25 << 2) >> 2] = i32;
    if ((i32 | 0) == 0) {
     break;
    }
    i30 = i32 | 0;
    HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 2;
   }
  } while (0);
  i29 = (HEAP32[i21 >> 2] | 0) + 1 | 0;
  HEAP32[i21 >> 2] = i29;
  i24 = i24 + 1 | 0;
  i25 = i29;
 }
 if ((i28 | 0) == 15) {
  _WTFCrash();
 } else if ((i28 | 0) == 26) {
  _WTFCrash();
 } else if ((i28 | 0) == 37) {
  do {
   if (i2) {
    HEAP32[i6 + 36 >> 2] = 0;
    HEAP32[i6 + 40 >> 2] = 0;
    i39 = 0;
   } else {
    i25 = i12;
    HEAP32[i6 + 36 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 36 >> 2] & 1](i12) | 0;
    HEAP32[i6 + 40 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 40 >> 2] & 1](i12) | 0;
    if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i12 >> 2] | 0) + 20 >> 2] & 1](i12, i11) | 0)) {
     i39 = 0;
     break;
    }
    i39 = (HEAP32[i1 + 20 >> 2] | 0) >>> 5 << 1 & 254 | (HEAP32[i22 >> 2] | 0) >>> 5 & 1;
   }
  } while (0);
  i11 = i6 + 44 | 0;
  HEAP32[i11 >> 2] = i39;
  i39 = i5 + 12 | 0;
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = i39;
  i25 = i5 + 4 | 0;
  HEAP32[i25 >> 2] = 7;
  i24 = i5 + 8 | 0;
  HEAP32[i24 >> 2] = 0;
  i5 = (HEAP32[i21 >> 2] | 0) + 4 | 0;
  do {
   if (i5 >>> 0 > 7 >>> 0) {
    if (i5 >>> 0 > 1073741823 >>> 0) {
     _WTFCrash();
    } else {
     i37 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
     HEAP32[i25 >> 2] = i37 >>> 2;
     i36 = __ZN3WTF10fastMallocEj(i37) | 0;
     HEAP32[i2 >> 2] = i36;
     i40 = i36;
     i41 = HEAP32[i24 >> 2] | 0;
     break;
    }
   } else {
    i40 = i39;
    i41 = 0;
   }
  } while (0);
  i5 = (HEAPU16[i6 >> 1] | 0) - 1640531527 | 0;
  i36 = (HEAPU16[i13 + 2 >> 1] | 0) << 11 ^ i5 ^ i5 << 16;
  i5 = i36 + (HEAPU16[i16 >> 1] | 0) + (i36 >>> 11) | 0;
  i36 = i5 ^ (HEAPU16[i13 + 6 >> 1] | 0) << 11 ^ i5 << 16;
  i5 = i36 + (HEAPU16[i17 >> 1] | 0) + (i36 >>> 11) | 0;
  i36 = i5 ^ (HEAPU16[i13 + 10 >> 1] | 0) << 11 ^ i5 << 16;
  i5 = (i36 >>> 11) + i36 | 0;
  i36 = i5 << 3 ^ i5;
  i5 = (i36 >>> 5) + i36 | 0;
  i36 = i5 << 2 ^ i5;
  i5 = (i36 >>> 15) + i36 | 0;
  i36 = (i5 << 10 ^ i5) & 16777215;
  HEAP32[i40 + (i41 << 2) >> 2] = (i36 | 0) == 0 ? 8388608 : i36;
  i36 = (HEAP32[i24 >> 2] | 0) + 1 | 0;
  HEAP32[i24 >> 2] = i36;
  i41 = i6 + 36 | 0;
  HEAP32[(HEAP32[i2 >> 2] | 0) + (i36 << 2) >> 2] = HEAP32[i41 >> 2];
  i36 = (HEAP32[i24 >> 2] | 0) + 1 | 0;
  HEAP32[i24 >> 2] = i36;
  i40 = i6 + 40 | 0;
  HEAP32[(HEAP32[i2 >> 2] | 0) + (i36 << 2) >> 2] = HEAP32[i40 >> 2];
  i36 = (HEAP32[i24 >> 2] | 0) + 1 | 0;
  HEAP32[i24 >> 2] = i36;
  HEAP32[(HEAP32[i2 >> 2] | 0) + (i36 << 2) >> 2] = HEAP32[i11 >> 2];
  i36 = (HEAP32[i24 >> 2] | 0) + 1 | 0;
  HEAP32[i24 >> 2] = i36;
  if ((HEAP32[i21 >> 2] | 0) == 0) {
   i42 = i36;
  } else {
   i6 = 0;
   i5 = i36;
   while (1) {
    i36 = HEAP32[(HEAP32[i19 >> 2] | 0) + (i6 << 2) >> 2] | 0;
    if ((i36 | 0) == 0) {
     i43 = 0;
     i44 = i5;
    } else {
     i37 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(i36) | 0;
     i43 = i37;
     i44 = HEAP32[i24 >> 2] | 0;
    }
    HEAP32[(HEAP32[i2 >> 2] | 0) + (i44 << 2) >> 2] = i43;
    i37 = (HEAP32[i24 >> 2] | 0) + 1 | 0;
    HEAP32[i24 >> 2] = i37;
    i36 = i6 + 1 | 0;
    if (i36 >>> 0 < (HEAP32[i21 >> 2] | 0) >>> 0) {
     i6 = i36;
     i5 = i37;
    } else {
     i42 = i37;
     break;
    }
   }
  }
  i5 = i42 & 1073741823;
  if ((i5 | 0) == 0) {
   i45 = -1640531527;
  } else {
   i6 = i5;
   i5 = HEAP32[i2 >> 2] | 0;
   i43 = -1640531527;
   while (1) {
    i44 = i6 - 1 | 0;
    i37 = (HEAPU16[i5 >> 1] | 0) + i43 | 0;
    i36 = (HEAPU16[i5 + 2 >> 1] | 0) << 11 ^ i37 ^ i37 << 16;
    i37 = (i36 >>> 11) + i36 | 0;
    if ((i44 | 0) == 0) {
     i45 = i37;
     break;
    } else {
     i6 = i44;
     i5 = i5 + 4 | 0;
     i43 = i37;
    }
   }
  }
  i43 = i45 << 3 ^ i45;
  i45 = (i43 >>> 5) + i43 | 0;
  i43 = i45 << 2 ^ i45;
  i45 = (i43 >>> 15) + i43 | 0;
  i43 = (i45 << 10 ^ i45) & 16777215;
  if ((i42 | 0) != 0) {
   HEAP32[i24 >> 2] = 0;
  }
  i24 = HEAP32[i2 >> 2] | 0;
  if (!((i39 | 0) == (i24 | 0) | (i24 | 0) == 0)) {
   HEAP32[i2 >> 2] = 0;
   HEAP32[i25 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i24);
  }
  HEAP32[i7 >> 2] = (i43 | 0) == 0 ? 8388608 : i43;
  if (HEAP8[H_BASE + 408 | 0] | 0) {
   i46 = HEAP32[H_BASE + 448 >> 2] | 0;
  } else {
   i43 = __ZN3WTF10fastMallocEj(20) | 0;
   i24 = i43;
   _memset(i43 | 0, 0, 20) | 0;
   HEAP32[H_BASE + 448 >> 2] = i24;
   HEAP8[H_BASE + 408 | 0] = 1;
   i46 = i24;
  }
  i24 = i9 | 0;
  HEAP32[i24 >> 2] = 0;
  __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6OwnPtrIN7WebCore20FontGlyphsCacheEntryEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_13AlreadyHashedENS_7HashMapIjS5_S9_NS_10HashTraitsIjEENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKjNS_10PassOwnPtrIS4_EEEENS_18HashTableAddResultINS_17HashTableIteratorIjS6_S8_S9_SF_SC_EEEEOT0_OT1_(i8, i46 | 0, i7, i9);
  i9 = HEAP32[i24 >> 2] | 0;
  if ((i9 | 0) != 0) {
   i24 = HEAP32[i9 + 48 >> 2] | 0;
   i7 = i24 | 0;
   i46 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i46 | 0) == 0) {
    __ZN7WebCore10FontGlyphsD2Ev(i24);
    __ZN3WTF8fastFreeEPv(i24);
   } else {
    HEAP32[i7 >> 2] = i46;
   }
   i46 = i9 + 20 | 0;
   i7 = HEAP32[i46 >> 2] | 0;
   i24 = i9 + 12 | 0;
   if ((i7 | 0) != 0) {
    i43 = HEAP32[i24 >> 2] | 0;
    i25 = i43 + (i7 << 2) | 0;
    i7 = i43;
    while (1) {
     i43 = HEAP32[i7 >> 2] | 0;
     do {
      if ((i43 | 0) != 0) {
       i2 = i43 | 0;
       i39 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
       if ((i39 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i43);
        break;
       } else {
        HEAP32[i2 >> 2] = i39;
        break;
       }
      }
     } while (0);
     i7 = i7 + 4 | 0;
     if ((i7 | 0) == (i25 | 0)) {
      break;
     }
    }
    HEAP32[i46 >> 2] = 0;
   }
   i46 = HEAP32[i24 >> 2] | 0;
   if (!((i9 + 24 | 0) == (i46 | 0) | (i46 | 0) == 0)) {
    HEAP32[i24 >> 2] = 0;
    HEAP32[i9 + 16 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i46);
   }
   __ZN3WTF8fastFreeEPv(i9);
  }
  i9 = HEAP32[i8 >> 2] | 0;
  L105 : do {
   if ((HEAP8[i8 + 8 | 0] & 1) == 0) {
    i46 = i9 + 4 | 0;
    i24 = HEAP32[i46 >> 2] | 0;
    if ((HEAP32[i24 >> 2] | 0) != (HEAP32[i15 >> 2] | 0)) {
     i28 = 89;
     break;
    }
    if ((HEAP32[i24 + 4 >> 2] | 0) != (HEAP32[i16 >> 2] | 0)) {
     i28 = 89;
     break;
    }
    if ((HEAP32[i24 + 8 >> 2] | 0) != (HEAP32[i17 >> 2] | 0)) {
     i28 = 89;
     break;
    }
    if ((HEAP32[i24 + 36 >> 2] | 0) != (HEAP32[i41 >> 2] | 0)) {
     i28 = 89;
     break;
    }
    if ((HEAP32[i24 + 40 >> 2] | 0) != (HEAP32[i40 >> 2] | 0)) {
     i28 = 89;
     break;
    }
    if ((HEAP32[i24 + 44 >> 2] | 0) != (HEAP32[i11 >> 2] | 0)) {
     i28 = 89;
     break;
    }
    i25 = i24 + 20 | 0;
    i7 = HEAP32[i25 >> 2] | 0;
    if ((i7 | 0) != (HEAP32[i21 >> 2] | 0)) {
     i28 = 89;
     break;
    }
    i43 = i24 + 12 | 0;
    do {
     if ((i7 | 0) == 0) {
      i47 = i24;
     } else {
      i39 = 0;
      while (1) {
       if (!(__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[(HEAP32[i43 >> 2] | 0) + (i39 << 2) >> 2] | 0, HEAP32[(HEAP32[i19 >> 2] | 0) + (i39 << 2) >> 2] | 0) | 0)) {
        i28 = 89;
        break L105;
       }
       i2 = i39 + 1 | 0;
       if (i2 >>> 0 >= (HEAP32[i25 >> 2] | 0) >>> 0) {
        i28 = 87;
        break;
       }
       if ((HEAP32[i21 >> 2] | 0) >>> 0 > i2 >>> 0) {
        i39 = i2;
       } else {
        i28 = 83;
        break;
       }
      }
      if ((i28 | 0) == 83) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      } else if ((i28 | 0) == 87) {
       i47 = HEAP32[i46 >> 2] | 0;
       break;
      }
     }
    } while (0);
    i46 = HEAP32[i47 + 48 >> 2] | 0;
    i25 = i46 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
    i48 = i12;
    i49 = i46;
   } else {
    i28 = 89;
   }
  } while (0);
  do {
   if ((i28 | 0) == 89) {
    i47 = __ZN3WTF10fastMallocEj(52) | 0;
    i17 = i47;
    i16 = __ZN3WTF10fastMallocEj(112) | 0;
    i15 = i4 | 0;
    HEAP32[i15 >> 2] = i12;
    __ZN7WebCore10FontGlyphsC1EN3WTF10PassRefPtrINS_12FontSelectorEEE(i16, i4);
    i8 = HEAP32[i15 >> 2] | 0;
    do {
     if ((i8 | 0) != 0) {
      i15 = i8 + 4 | 0;
      i46 = i15 | 0;
      i25 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
      if ((i25 | 0) != 0) {
       HEAP32[i46 >> 2] = i25;
       break;
      }
      i25 = i15 - 4 | 0;
      if ((i25 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 3](i25);
     }
    } while (0);
    HEAP32[i47 >> 2] = HEAP32[i13 >> 2];
    HEAP32[i47 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
    HEAP32[i47 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
    i8 = HEAP32[i20 >> 2] | 0;
    i25 = HEAP32[i21 >> 2] | 0;
    i15 = i47 + 24 | 0;
    i46 = i47 + 12 | 0;
    HEAP32[i46 >> 2] = i15;
    i43 = i47 + 16 | 0;
    HEAP32[i43 >> 2] = 3;
    HEAP32[i47 + 20 >> 2] = i25;
    do {
     if (i8 >>> 0 > 3 >>> 0) {
      if (i8 >>> 0 > 1073741823 >>> 0) {
       _WTFCrash();
      } else {
       i25 = __ZN3WTF18fastMallocGoodSizeEj(i8 << 2) | 0;
       HEAP32[i43 >> 2] = i25 >>> 2;
       i24 = __ZN3WTF10fastMallocEj(i25) | 0;
       HEAP32[i46 >> 2] = i24;
       i50 = i24;
       break;
      }
     } else {
      i50 = i15;
     }
    } while (0);
    do {
     if ((i50 | 0) != 0) {
      i15 = HEAP32[i19 >> 2] | 0;
      i46 = HEAP32[i21 >> 2] | 0;
      i43 = i15 + (i46 << 2) | 0;
      if ((i46 | 0) == 0) {
       break;
      } else {
       i51 = i15;
       i52 = i50;
      }
      while (1) {
       i15 = HEAP32[i51 >> 2] | 0;
       HEAP32[i52 >> 2] = i15;
       if ((i15 | 0) != 0) {
        i46 = i15 | 0;
        HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 2;
       }
       i46 = i51 + 4 | 0;
       if ((i46 | 0) == (i43 | 0)) {
        break;
       } else {
        i51 = i46;
        i52 = i52 + 4 | 0;
       }
      }
     }
    } while (0);
    HEAP32[i47 + 36 >> 2] = HEAP32[i41 >> 2];
    HEAP32[i47 + 40 >> 2] = HEAP32[i40 >> 2];
    HEAP32[i47 + 44 >> 2] = HEAP32[i11 >> 2];
    HEAP32[i47 + 48 >> 2] = i16;
    i43 = i9 + 4 | 0;
    i46 = HEAP32[i43 >> 2] | 0;
    HEAP32[i43 >> 2] = i17;
    if ((i46 | 0) == 0) {
     i53 = i17;
    } else {
     i15 = HEAP32[i46 + 48 >> 2] | 0;
     i8 = i15 | 0;
     i24 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i24 | 0) == 0) {
      __ZN7WebCore10FontGlyphsD2Ev(i15);
      __ZN3WTF8fastFreeEPv(i15);
     } else {
      HEAP32[i8 >> 2] = i24;
     }
     i24 = i46 + 20 | 0;
     i8 = HEAP32[i24 >> 2] | 0;
     i15 = i46 + 12 | 0;
     if ((i8 | 0) != 0) {
      i25 = HEAP32[i15 >> 2] | 0;
      i7 = i25 + (i8 << 2) | 0;
      i8 = i25;
      while (1) {
       i25 = HEAP32[i8 >> 2] | 0;
       do {
        if ((i25 | 0) != 0) {
         i39 = i25 | 0;
         i2 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
         if ((i2 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i25);
          break;
         } else {
          HEAP32[i39 >> 2] = i2;
          break;
         }
        }
       } while (0);
       i8 = i8 + 4 | 0;
       if ((i8 | 0) == (i7 | 0)) {
        break;
       }
      }
      HEAP32[i24 >> 2] = 0;
     }
     i7 = HEAP32[i15 >> 2] | 0;
     if (!((i46 + 24 | 0) == (i7 | 0) | (i7 | 0) == 0)) {
      HEAP32[i15 >> 2] = 0;
      HEAP32[i46 + 16 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i7);
     }
     __ZN3WTF8fastFreeEPv(i46);
     i53 = HEAP32[i43 >> 2] | 0;
    }
    i7 = HEAP32[i53 + 48 >> 2] | 0;
    i8 = i7 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
    i8 = (HEAP32[H_BASE + 440 >> 2] | 0) + 1 | 0;
    HEAP32[H_BASE + 440 >> 2] = i8;
    if (((i8 >>> 0) % 50 & -1 | 0) == 0) {
     __ZN7WebCore43pruneUnreferencedEntriesFromFontGlyphsCacheEv();
    }
    if (HEAP8[H_BASE + 408 | 0] | 0) {
     i54 = HEAP32[H_BASE + 448 >> 2] | 0;
    } else {
     i8 = __ZN3WTF10fastMallocEj(20) | 0;
     i17 = i8;
     _memset(i8 | 0, 0, 20) | 0;
     HEAP32[H_BASE + 448 >> 2] = i17;
     HEAP8[H_BASE + 408 | 0] = 1;
     i54 = i17;
    }
    if ((HEAP32[i54 + 12 >> 2] | 0) <= 400) {
     i48 = 0;
     i49 = i7;
     break;
    }
    i17 = HEAP32[i54 >> 2] | 0;
    i8 = HEAP32[i54 + 4 >> 2] | 0;
    i16 = i17 + (i8 << 3) | 0;
    L176 : do {
     if ((i8 | 0) == 0) {
      i55 = i17;
     } else {
      i47 = i17;
      while (1) {
       i25 = HEAP32[i47 >> 2] | 0;
       if (!((i25 | 0) == (-1 | 0) | (i25 | 0) == 0)) {
        i55 = i47;
        break L176;
       }
       i25 = i47 + 8 | 0;
       if ((i25 | 0) == (i16 | 0)) {
        i55 = i16;
        break;
       } else {
        i47 = i25;
       }
      }
     }
    } while (0);
    HEAP32[i10 >> 2] = i55;
    HEAP32[i10 + 4 >> 2] = i16;
    __ZN3WTF7HashMapIjNS_6OwnPtrIN7WebCore20FontGlyphsCacheEntryEEENS_13AlreadyHashedENS_10HashTraitsIjEENS6_IS4_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIjNS_12KeyValuePairIjS4_EENS_24KeyValuePairKeyExtractorISD_EES5_NS9_18KeyValuePairTraitsES7_EESD_EE(i54, i14) | 0;
    i48 = 0;
    i49 = i7;
   }
  } while (0);
  i14 = HEAP32[i21 >> 2] | 0;
  if ((i14 | 0) != 0) {
   i54 = HEAP32[i19 >> 2] | 0;
   i10 = i54 + (i14 << 2) | 0;
   i14 = i54;
   while (1) {
    i54 = HEAP32[i14 >> 2] | 0;
    do {
     if ((i54 | 0) != 0) {
      i55 = i54 | 0;
      i53 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
      if ((i53 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i54);
       break;
      } else {
       HEAP32[i55 >> 2] = i53;
       break;
      }
     }
    } while (0);
    i14 = i14 + 4 | 0;
    if ((i14 | 0) == (i10 | 0)) {
     break;
    }
   }
   HEAP32[i21 >> 2] = 0;
  }
  i21 = HEAP32[i19 >> 2] | 0;
  if (!((i18 | 0) == (i21 | 0) | (i21 | 0) == 0)) {
   HEAP32[i19 >> 2] = 0;
   HEAP32[i20 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i21);
  }
  i21 = i1 + 24 | 0;
  i20 = HEAP32[i21 >> 2] | 0;
  HEAP32[i21 >> 2] = i49;
  do {
   if ((i20 | 0) != 0) {
    i49 = i20 | 0;
    i21 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
    if ((i21 | 0) == 0) {
     __ZN7WebCore10FontGlyphsD2Ev(i20);
     __ZN3WTF8fastFreeEPv(i20);
     break;
    } else {
     HEAP32[i49 >> 2] = i21;
     break;
    }
   }
  } while (0);
  do {
   if ((i48 | 0) != 0) {
    i20 = i48 + 4 | 0;
    i21 = i20 | 0;
    i49 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
    if ((i49 | 0) != 0) {
     HEAP32[i21 >> 2] = i49;
     break;
    }
    i49 = i20 - 4 | 0;
    if ((i49 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i49 >> 2] | 0) + 4 >> 2] & 3](i49);
   }
  } while (0);
  i48 = i1 + 36 | 0;
  HEAP8[i48] = (__ZN7WebCoreL30useBackslashAsYenSignForFamilyERKN3WTF12AtomicStringE(HEAP32[i23 >> 2] | 0) | 0) & 1;
  i23 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2 & 3;
  i1 = HEAP32[H_BASE + 464 >> 2] | 0;
  if ((i23 | 0) == 1) {
   i56 = i1 & -4;
  } else if ((i23 | 0) == 2 | (i23 | 0) == 3) {
   i56 = i1 | 3;
  } else {
   i56 = i1;
  }
  i1 = HEAP32[i22 >> 2] | 0;
  i22 = i1 >>> 20 & 3;
  if ((i22 | 0) == 2) {
   i57 = i56 & -2;
  } else if ((i22 | 0) == 1) {
   i57 = i56 | 1;
  } else {
   i57 = i56;
  }
  i56 = i1 >>> 22 & 3;
  if ((i56 | 0) == 1) {
   i58 = i57 & -3;
   i59 = i48;
   i60 = i58 << 8;
   i61 = i60 & 768;
   i62 = HEAP32[i59 >> 2] | 0;
   i63 = i62 & -769;
   i64 = i63 | i61;
   HEAP32[i59 >> 2] = i64;
   STACKTOP = i3;
   return;
  } else if ((i56 | 0) == 2) {
   i58 = i57 | 2;
   i59 = i48;
   i60 = i58 << 8;
   i61 = i60 & 768;
   i62 = HEAP32[i59 >> 2] | 0;
   i63 = i62 & -769;
   i64 = i63 | i61;
   HEAP32[i59 >> 2] = i64;
   STACKTOP = i3;
   return;
  } else {
   i58 = i57;
   i59 = i48;
   i60 = i58 << 8;
   i61 = i60 & 768;
   i62 = HEAP32[i59 >> 2] | 0;
   i63 = i62 & -769;
   i64 = i63 | i61;
   HEAP32[i59 >> 2] = i64;
   STACKTOP = i3;
   return;
  }
 }
}
function __ZN7WebCoreL30useBackslashAsYenSignForFamilyERKN3WTF12AtomicStringE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 392 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 72 | 0;
 i13 = i2 + 80 | 0;
 i14 = i2 + 104 | 0;
 i15 = i2 + 120 | 0;
 i16 = i2 + 128 | 0;
 i17 = i2 + 144 | 0;
 i18 = i2 + 152 | 0;
 i19 = i2 + 168 | 0;
 i20 = i2 + 184 | 0;
 i21 = i2 + 192 | 0;
 i22 = i2 + 208 | 0;
 i23 = i2 + 216 | 0;
 i24 = i2 + 232 | 0;
 i25 = i2 + 248 | 0;
 i26 = i2 + 256 | 0;
 i27 = i2 + 272 | 0;
 i28 = i2 + 280 | 0;
 i29 = i2 + 296 | 0;
 i30 = i2 + 312 | 0;
 i31 = i2 + 320 | 0;
 i32 = i2 + 336 | 0;
 i33 = i2 + 344 | 0;
 i34 = i2 + 360 | 0;
 i35 = i2 + 368 | 0;
 i36 = i2 + 376 | 0;
 i37 = i1 | 0;
 i1 = HEAP32[i37 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i38 = 0;
  STACKTOP = i2;
  return i38 | 0;
 }
 if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
  i38 = 0;
  STACKTOP = i2;
  return i38 | 0;
 }
 do {
  if ((HEAP32[H_BASE + 432 >> 2] | 0) == 0) {
   i1 = __ZN3WTF10fastMallocEj(20) | 0;
   _memset(i1 | 0, 0, 20) | 0;
   HEAP32[H_BASE + 432 >> 2] = i1;
   __ZN3WTF12AtomicString3addEPKh(i12, H_BASE + 64 | 0);
   i39 = i13 | 0;
   HEAP32[i39 >> 2] = HEAP32[i12 >> 2];
   __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i2 + 88 | 0, i1, i13, i13);
   i1 = HEAP32[i39 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i39 = i1 | 0;
     i40 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
     if ((i40 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i39 >> 2] = i40;
      break;
     }
    }
   } while (0);
   _memcpy(i14 | 0, H_BASE + 96 | 0, 16) | 0;
   i1 = HEAP32[H_BASE + 432 >> 2] | 0;
   __ZN3WTF12AtomicString3addEPKtj(i11, i14 | 0, 8);
   i40 = i15 | 0;
   HEAP32[i40 >> 2] = HEAP32[i11 >> 2];
   __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i16, i1 | 0, i15, i15);
   i1 = HEAP32[i40 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i40 = i1 | 0;
     i39 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
     if ((i39 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i40 >> 2] = i39;
      break;
     }
    }
   } while (0);
   i1 = HEAP32[H_BASE + 432 >> 2] | 0;
   __ZN3WTF12AtomicString3addEPKh(i10, H_BASE + 48 | 0);
   i39 = i17 | 0;
   HEAP32[i39 >> 2] = HEAP32[i10 >> 2];
   __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i18, i1 | 0, i17, i17);
   i1 = HEAP32[i39 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i39 = i1 | 0;
     i40 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
     if ((i40 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i39 >> 2] = i40;
      break;
     }
    }
   } while (0);
   i1 = i19;
   HEAP16[i1 >> 1] = HEAP16[H_BASE + 80 >> 1] | 0;
   HEAP16[i1 + 2 >> 1] = HEAP16[H_BASE + 82 >> 1] | 0;
   HEAP16[i1 + 4 >> 1] = HEAP16[H_BASE + 84 >> 1] | 0;
   HEAP16[i1 + 6 >> 1] = HEAP16[H_BASE + 86 >> 1] | 0;
   HEAP16[i1 + 8 >> 1] = HEAP16[H_BASE + 88 >> 1] | 0;
   HEAP16[i1 + 10 >> 1] = HEAP16[H_BASE + 90 >> 1] | 0;
   i1 = HEAP32[H_BASE + 432 >> 2] | 0;
   __ZN3WTF12AtomicString3addEPKtj(i9, i19 | 0, 6);
   i40 = i20 | 0;
   HEAP32[i40 >> 2] = HEAP32[i9 >> 2];
   __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i21, i1 | 0, i20, i20);
   i1 = HEAP32[i40 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i40 = i1 | 0;
     i39 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
     if ((i39 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i40 >> 2] = i39;
      break;
     }
    }
   } while (0);
   i1 = HEAP32[H_BASE + 432 >> 2] | 0;
   __ZN3WTF12AtomicString3addEPKh(i8, H_BASE + 32 | 0);
   i39 = i22 | 0;
   HEAP32[i39 >> 2] = HEAP32[i8 >> 2];
   __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i23, i1 | 0, i22, i22);
   i1 = HEAP32[i39 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i39 = i1 | 0;
     i40 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
     if ((i40 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i39 >> 2] = i40;
      break;
     }
    }
   } while (0);
   i1 = i24;
   HEAP16[i1 >> 1] = HEAP16[H_BASE + 128 >> 1] | 0;
   HEAP16[i1 + 2 >> 1] = HEAP16[H_BASE + 130 >> 1] | 0;
   HEAP16[i1 + 4 >> 1] = HEAP16[H_BASE + 132 >> 1] | 0;
   HEAP16[i1 + 6 >> 1] = HEAP16[H_BASE + 134 >> 1] | 0;
   HEAP16[i1 + 8 >> 1] = HEAP16[H_BASE + 136 >> 1] | 0;
   HEAP16[i1 + 10 >> 1] = HEAP16[H_BASE + 138 >> 1] | 0;
   HEAP16[i1 + 12 >> 1] = HEAP16[H_BASE + 140 >> 1] | 0;
   i1 = HEAP32[H_BASE + 432 >> 2] | 0;
   __ZN3WTF12AtomicString3addEPKtj(i7, i24 | 0, 7);
   i40 = i25 | 0;
   HEAP32[i40 >> 2] = HEAP32[i7 >> 2];
   __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i26, i1 | 0, i25, i25);
   i1 = HEAP32[i40 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i40 = i1 | 0;
     i39 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
     if ((i39 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i40 >> 2] = i39;
      break;
     }
    }
   } while (0);
   i1 = HEAP32[H_BASE + 432 >> 2] | 0;
   __ZN3WTF12AtomicString3addEPKh(i6, H_BASE + 16 | 0);
   i39 = i27 | 0;
   HEAP32[i39 >> 2] = HEAP32[i6 >> 2];
   __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i28, i1 | 0, i27, i27);
   i1 = HEAP32[i39 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i39 = i1 | 0;
     i40 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
     if ((i40 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i39 >> 2] = i40;
      break;
     }
    }
   } while (0);
   i1 = i29;
   HEAP16[i1 >> 1] = HEAP16[H_BASE + 112 >> 1] | 0;
   HEAP16[i1 + 2 >> 1] = HEAP16[H_BASE + 114 >> 1] | 0;
   HEAP16[i1 + 4 >> 1] = HEAP16[H_BASE + 116 >> 1] | 0;
   HEAP16[i1 + 6 >> 1] = HEAP16[H_BASE + 118 >> 1] | 0;
   HEAP16[i1 + 8 >> 1] = HEAP16[H_BASE + 120 >> 1] | 0;
   i1 = HEAP32[H_BASE + 432 >> 2] | 0;
   __ZN3WTF12AtomicString3addEPKtj(i5, i29 | 0, 5);
   i40 = i30 | 0;
   HEAP32[i40 >> 2] = HEAP32[i5 >> 2];
   __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i31, i1 | 0, i30, i30);
   i1 = HEAP32[i40 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i40 = i1 | 0;
     i39 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
     if ((i39 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i40 >> 2] = i39;
      break;
     }
    }
   } while (0);
   i1 = HEAP32[H_BASE + 432 >> 2] | 0;
   __ZN3WTF12AtomicString3addEPKh(i4, H_BASE + 8 | 0);
   i39 = i32 | 0;
   HEAP32[i39 >> 2] = HEAP32[i4 >> 2];
   __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i33, i1 | 0, i32, i32);
   i1 = HEAP32[i39 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i39 = i1 | 0;
     i40 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
     if ((i40 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i39 >> 2] = i40;
      break;
     }
    }
   } while (0);
   HEAP32[i34 >> 2] = 816066785;
   HEAP32[i34 + 4 >> 2] = 816460010;
   i1 = HEAP32[H_BASE + 432 >> 2] | 0;
   __ZN3WTF12AtomicString3addEPKtj(i3, i34, 4);
   i40 = i35 | 0;
   HEAP32[i40 >> 2] = HEAP32[i3 >> 2];
   __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i36, i1 | 0, i35, i35);
   i1 = HEAP32[i40 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   i40 = i1 | 0;
   i39 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
   if ((i39 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i40 >> 2] = i39;
    break;
   }
  }
 } while (0);
 i35 = HEAP32[H_BASE + 432 >> 2] | 0;
 i36 = HEAP32[i35 >> 2] | 0;
 if ((i36 | 0) == 0) {
  i38 = 0;
  STACKTOP = i2;
  return i38 | 0;
 }
 i3 = HEAP32[i35 + 8 >> 2] | 0;
 i35 = HEAP32[i37 >> 2] | 0;
 i37 = HEAP32[i35 + 16 >> 2] | 0;
 i34 = i37 >>> 7;
 i32 = (i37 >>> 30) + ~i34 | 0;
 i37 = i32 << 12 ^ i32;
 i32 = i37 >>> 7 ^ i37;
 i37 = i32 << 2 ^ i32;
 i32 = i37 >>> 20 ^ i37 | 1;
 i37 = i34;
 i34 = 0;
 while (1) {
  i33 = i37 & i3;
  i4 = i36 + (i33 << 2) | 0;
  i30 = HEAP32[i4 >> 2] | 0;
  i31 = i30;
  if ((i31 | 0) == 0) {
   i41 = 0;
   break;
  } else if ((i31 | 0) != (-1 | 0)) {
   if ((i30 | 0) == (i35 | 0)) {
    i41 = i4;
    break;
   }
  }
  i4 = (i34 | 0) == 0 ? i32 : i34;
  i37 = i4 + i33 | 0;
  i34 = i4;
 }
 i38 = (i41 | 0) != 0;
 STACKTOP = i2;
 return i38 | 0;
}
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjfEENS_24KeyValuePairKeyExtractorIS2_EENS_7IntHashIjEENS_7HashMapIjfS6_NS_29UnsignedWithZeroKeyHashTraitsIjEENS_10HashTraitsIfEEE18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISD_S6_EEjRfEENS_18HashTableAddResultINS_17HashTableIteratorIjS2_S4_S6_SD_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = i2 + 4 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i9 = 8;
   i10 = 0;
  } else {
   i11 = i8 << 1;
   i9 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i8 : i11;
   i10 = i8;
  }
  HEAP32[i7 >> 2] = i9;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = i9 - 1;
  i8 = __ZN3WTF10fastMallocEj(i9 << 3) | 0;
  if ((i9 | 0) > 0) {
   i11 = 0;
   while (1) {
    HEAP32[i8 + (i11 << 3) >> 2] = -1;
    HEAPF32[i8 + (i11 << 3) + 4 >> 2] = Infinity;
    i11 = i11 + 1 | 0;
    if ((i11 | 0) >= (i9 | 0)) {
     break;
    }
   }
  }
  HEAP32[i5 >> 2] = i8;
  if ((i10 | 0) != 0) {
   i8 = 0;
   while (1) {
    i9 = i8 << 3 | 0;
    i11 = HEAP32[i9 >> 2] | 0;
    if (i11 >>> 0 <= 4294967293 >>> 0) {
     i12 = HEAP32[i5 >> 2] | 0;
     i13 = HEAP32[i7 >> 2] | 0;
     i14 = i11 + ~(i11 << 15) | 0;
     i15 = (i14 >>> 10 ^ i14) * 9 & -1;
     i14 = i15 >>> 6 ^ i15;
     i15 = i14 + ~(i14 << 11) | 0;
     i14 = i15 >>> 16 ^ i15;
     i15 = i13 & i14;
     i16 = i12 + (i15 << 3) | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     L15 : do {
      if ((i17 | 0) == -1) {
       i18 = 0;
       i19 = i16;
       i20 = 11;
      } else {
       i21 = (i14 >>> 23) + ~i14 | 0;
       i22 = i21 << 12 ^ i21;
       i21 = i22 >>> 7 ^ i22;
       i22 = i21 << 2 ^ i21;
       i21 = i22 >>> 20 ^ i22 | 1;
       i22 = 0;
       i23 = 0;
       i24 = i15;
       i25 = i16;
       i26 = i17;
       while (1) {
        if ((i26 | 0) == (i11 | 0)) {
         i27 = i25;
         break L15;
        }
        i28 = (i26 | 0) == -2 ? i25 : i22;
        i29 = (i23 | 0) == 0 ? i21 : i23;
        i30 = i29 + i24 & i13;
        i31 = i12 + (i30 << 3) | 0;
        i32 = HEAP32[i31 >> 2] | 0;
        if ((i32 | 0) == -1) {
         i18 = i28;
         i19 = i31;
         i20 = 11;
         break;
        } else {
         i22 = i28;
         i23 = i29;
         i24 = i30;
         i25 = i31;
         i26 = i32;
        }
       }
      }
     } while (0);
     if ((i20 | 0) == 11) {
      i20 = 0;
      i27 = (i18 | 0) != 0 ? i18 : i19;
     }
     i12 = i9;
     i13 = i27;
     i11 = HEAP32[i12 + 4 >> 2] | 0;
     HEAP32[i13 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i13 + 4 >> 2] = i11;
    }
    i8 = i8 + 1 | 0;
    if ((i8 | 0) == (i10 | 0)) {
     break;
    }
   }
  }
  HEAP32[i2 + 16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(0);
  i33 = HEAP32[i5 >> 2] | 0;
  i34 = i7;
 } else {
  i33 = i6;
  i34 = i2 + 8 | 0;
 }
 i6 = HEAP32[i34 >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i10 = i7 + ~(i7 << 15) | 0;
 i8 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i8 >>> 6 ^ i8;
 i8 = i10 + ~(i10 << 11) | 0;
 i10 = i8 >>> 16 ^ i8;
 i8 = i10 & i6;
 i27 = i33 + (i8 << 3) | 0;
 i19 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i19 | 0) == -1) {
   i35 = i27;
   i20 = 23;
  } else {
   i18 = (i10 >>> 23) + ~i10 | 0;
   i11 = i18 << 12 ^ i18;
   i18 = i11 >>> 7 ^ i11;
   i11 = i18 << 2 ^ i18;
   i18 = i11 >>> 20 ^ i11 | 1;
   i11 = 0;
   i13 = 0;
   i12 = i8;
   i17 = i27;
   i16 = i19;
   while (1) {
    if ((i16 | 0) == (i7 | 0)) {
     i20 = 20;
     break;
    }
    i36 = (i16 | 0) == -2 ? i17 : i13;
    i15 = (i11 | 0) == 0 ? i18 : i11;
    i14 = i15 + i12 & i6;
    i37 = i33 + (i14 << 3) | 0;
    i26 = HEAP32[i37 >> 2] | 0;
    if ((i26 | 0) == -1) {
     i20 = 22;
     break;
    } else {
     i11 = i15;
     i13 = i36;
     i12 = i14;
     i17 = i37;
     i16 = i26;
    }
   }
   if ((i20 | 0) == 22) {
    if ((i36 | 0) == 0) {
     i35 = i37;
     i20 = 23;
     break;
    }
    HEAP32[i36 >> 2] = -1;
    HEAPF32[i36 + 4 >> 2] = Infinity;
    i16 = i2 + 16 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) - 1;
    i38 = i36;
    i39 = HEAP32[i3 >> 2] | 0;
    i40 = i16;
    break;
   } else if ((i20 | 0) == 20) {
    i16 = i33 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i12 = i1;
    HEAP32[i12 >> 2] = i17;
    HEAP32[i12 + 4 >> 2] = i16;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i20 | 0) == 23) {
  i38 = i35;
  i39 = i7;
  i40 = i2 + 16 | 0;
 }
 HEAP32[i38 >> 2] = i39;
 HEAPF32[i38 + 4 >> 2] = +HEAPF32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i39 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i39;
 i4 = i2 + 4 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i40 >> 2] | 0) + i39 << 1 | 0) < (i2 | 0)) {
  i41 = i38;
  i42 = i2;
 } else {
  i7 = (i2 | 0) == 0;
  if (i7) {
   i43 = 8;
  } else {
   i35 = i2 << 1;
   i43 = (i39 * 6 & -1 | 0) < (i35 | 0) ? i2 : i35;
  }
  i35 = HEAP32[i5 >> 2] | 0;
  HEAP32[i4 >> 2] = i43;
  HEAP32[i34 >> 2] = i43 - 1;
  i39 = __ZN3WTF10fastMallocEj(i43 << 3) | 0;
  if ((i43 | 0) > 0) {
   i33 = 0;
   while (1) {
    HEAP32[i39 + (i33 << 3) >> 2] = -1;
    HEAPF32[i39 + (i33 << 3) + 4 >> 2] = Infinity;
    i33 = i33 + 1 | 0;
    if ((i33 | 0) >= (i43 | 0)) {
     break;
    }
   }
  }
  HEAP32[i5 >> 2] = i39;
  if (i7) {
   i44 = 0;
  } else {
   i7 = 0;
   i39 = 0;
   while (1) {
    i43 = i35 + (i7 << 3) | 0;
    i33 = HEAP32[i43 >> 2] | 0;
    if (i33 >>> 0 > 4294967293 >>> 0) {
     i45 = i39;
    } else {
     i3 = HEAP32[i5 >> 2] | 0;
     i36 = HEAP32[i34 >> 2] | 0;
     i37 = i33 + ~(i33 << 15) | 0;
     i6 = (i37 >>> 10 ^ i37) * 9 & -1;
     i37 = i6 >>> 6 ^ i6;
     i6 = i37 + ~(i37 << 11) | 0;
     i37 = i6 >>> 16 ^ i6;
     i6 = i36 & i37;
     i19 = i3 + (i6 << 3) | 0;
     i27 = HEAP32[i19 >> 2] | 0;
     L54 : do {
      if ((i27 | 0) == -1) {
       i46 = 0;
       i47 = i19;
       i20 = 34;
      } else {
       i8 = (i37 >>> 23) + ~i37 | 0;
       i10 = i8 << 12 ^ i8;
       i8 = i10 >>> 7 ^ i10;
       i10 = i8 << 2 ^ i8;
       i8 = i10 >>> 20 ^ i10 | 1;
       i10 = 0;
       i16 = 0;
       i12 = i6;
       i13 = i19;
       i11 = i27;
       while (1) {
        if ((i11 | 0) == (i33 | 0)) {
         i48 = i13;
         break L54;
        }
        i18 = (i11 | 0) == -2 ? i13 : i10;
        i9 = (i16 | 0) == 0 ? i8 : i16;
        i26 = i9 + i12 & i36;
        i14 = i3 + (i26 << 3) | 0;
        i15 = HEAP32[i14 >> 2] | 0;
        if ((i15 | 0) == -1) {
         i46 = i18;
         i47 = i14;
         i20 = 34;
         break;
        } else {
         i10 = i18;
         i16 = i9;
         i12 = i26;
         i13 = i14;
         i11 = i15;
        }
       }
      }
     } while (0);
     if ((i20 | 0) == 34) {
      i20 = 0;
      i48 = (i46 | 0) != 0 ? i46 : i47;
     }
     i3 = i43;
     i36 = i48;
     i33 = HEAP32[i3 + 4 >> 2] | 0;
     HEAP32[i36 >> 2] = HEAP32[i3 >> 2];
     HEAP32[i36 + 4 >> 2] = i33;
     i45 = (i43 | 0) == (i38 | 0) ? i48 : i39;
    }
    i33 = i7 + 1 | 0;
    if ((i33 | 0) == (i2 | 0)) {
     i44 = i45;
     break;
    } else {
     i7 = i33;
     i39 = i45;
    }
   }
  }
  HEAP32[i40 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i35);
  i41 = i44;
  i42 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i42 << 3) | 0;
 i42 = i1;
 HEAP32[i42 >> 2] = i41;
 HEAP32[i42 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore43pruneUnreferencedEntriesFromFontGlyphsCacheEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 216 | 0;
 i2 = i1 | 0;
 i3 = i2 + 12 | 0;
 i4 = i2 | 0;
 HEAP32[i4 >> 2] = i3;
 i5 = i2 + 4 | 0;
 HEAP32[i5 >> 2] = 50;
 i6 = i2 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 if (HEAP8[H_BASE + 408 | 0] | 0) {
  i7 = HEAP32[H_BASE + 448 >> 2] | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(20) | 0;
  i8 = i2;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 448 >> 2] = i8;
  HEAP8[H_BASE + 408 | 0] = 1;
  i7 = i8;
 }
 i8 = HEAP32[i7 >> 2] | 0;
 i2 = HEAP32[i7 + 4 >> 2] | 0;
 i9 = i8 + (i2 << 3) | 0;
 i10 = i8 + (i2 << 3) | 0;
 L5 : do {
  if ((HEAP32[i7 + 12 >> 2] | 0) == 0) {
   i11 = i10;
  } else {
   if ((i2 | 0) == 0) {
    i11 = i8;
    break;
   } else {
    i12 = i8;
   }
   while (1) {
    i13 = HEAP32[i12 >> 2] | 0;
    if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
     i11 = i12;
     break L5;
    }
    i13 = i12 + 8 | 0;
    if ((i13 | 0) == (i10 | 0)) {
     i11 = i10;
     break;
    } else {
     i12 = i13;
    }
   }
  }
 } while (0);
 L11 : do {
  if ((i11 | 0) != (i9 | 0)) {
   i12 = i11;
   L12 : while (1) {
    do {
     if ((HEAP32[HEAP32[(HEAP32[i12 + 4 >> 2] | 0) + 48 >> 2] >> 2] | 0) == 1) {
      i8 = i12 | 0;
      i2 = HEAP32[i6 >> 2] | 0;
      if ((i2 | 0) != (HEAP32[i5 >> 2] | 0)) {
       HEAP32[(HEAP32[i4 >> 2] | 0) + (i2 << 2) >> 2] = HEAP32[i8 >> 2];
       HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
       break;
      }
      i7 = i2 + 1 | 0;
      i13 = HEAP32[i4 >> 2] | 0;
      do {
       if (i13 >>> 0 > i8 >>> 0) {
        i14 = 15;
       } else {
        if ((i13 + (i2 << 2) | 0) >>> 0 <= i8 >>> 0) {
         i14 = 15;
         break;
        }
        i15 = i12 - i13 >> 2;
        i16 = i7 + (i2 >>> 2) | 0;
        i17 = i16 >>> 0 > 16 >>> 0 ? i16 : 16;
        i16 = i17 >>> 0 > i7 >>> 0 ? i17 : i7;
        do {
         if (i2 >>> 0 < i16 >>> 0) {
          if (i16 >>> 0 > 50 >>> 0) {
           if (i16 >>> 0 > 1073741823 >>> 0) {
            i14 = 29;
            break L12;
           }
           i17 = __ZN3WTF18fastMallocGoodSizeEj(i16 << 2) | 0;
           HEAP32[i5 >> 2] = i17 >>> 2;
           i18 = __ZN3WTF10fastMallocEj(i17) | 0;
           HEAP32[i4 >> 2] = i18;
           i19 = i18;
          } else {
           HEAP32[i4 >> 2] = i3;
           HEAP32[i5 >> 2] = 50;
           i19 = i3;
          }
          i18 = i13;
          _memcpy(i19 | 0, i18 | 0, i2 << 2) | 0;
          if ((i3 | 0) == (i13 | 0) | (i13 | 0) == 0) {
           break;
          }
          if ((HEAP32[i4 >> 2] | 0) == (i13 | 0)) {
           HEAP32[i4 >> 2] = 0;
           HEAP32[i5 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i18);
         }
        } while (0);
        i16 = HEAP32[i4 >> 2] | 0;
        i20 = i16 + (i15 << 2) | 0;
        i21 = i16;
       }
      } while (0);
      if ((i14 | 0) == 15) {
       i14 = 0;
       i16 = i7 + (i2 >>> 2) | 0;
       i18 = i16 >>> 0 > 16 >>> 0 ? i16 : 16;
       i16 = i18 >>> 0 > i7 >>> 0 ? i18 : i7;
       do {
        if (i2 >>> 0 < i16 >>> 0) {
         if (i16 >>> 0 > 50 >>> 0) {
          if (i16 >>> 0 > 1073741823 >>> 0) {
           i14 = 18;
           break L12;
          }
          i18 = __ZN3WTF18fastMallocGoodSizeEj(i16 << 2) | 0;
          HEAP32[i5 >> 2] = i18 >>> 2;
          i17 = __ZN3WTF10fastMallocEj(i18) | 0;
          HEAP32[i4 >> 2] = i17;
          i22 = i17;
         } else {
          HEAP32[i4 >> 2] = i3;
          HEAP32[i5 >> 2] = 50;
          i22 = i3;
         }
         i17 = i13;
         _memcpy(i22 | 0, i17 | 0, i2 << 2) | 0;
         if ((i3 | 0) == (i13 | 0) | (i13 | 0) == 0) {
          break;
         }
         if ((HEAP32[i4 >> 2] | 0) == (i13 | 0)) {
          HEAP32[i4 >> 2] = 0;
          HEAP32[i5 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i17);
        }
       } while (0);
       i20 = i8;
       i21 = HEAP32[i4 >> 2] | 0;
      }
      HEAP32[i21 + (HEAP32[i6 >> 2] << 2) >> 2] = HEAP32[i20 >> 2];
      HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
     }
    } while (0);
    i13 = i12 + 8 | 0;
    L50 : do {
     if ((i13 | 0) == (i10 | 0)) {
      i23 = i10;
     } else {
      i2 = i13;
      while (1) {
       i16 = HEAP32[i2 >> 2] | 0;
       if (!((i16 | 0) == (-1 | 0) | (i16 | 0) == 0)) {
        i23 = i2;
        break L50;
       }
       i16 = i2 + 8 | 0;
       if ((i16 | 0) == (i10 | 0)) {
        i23 = i10;
        break;
       } else {
        i2 = i16;
       }
      }
     }
    } while (0);
    if ((i23 | 0) == (i9 | 0)) {
     break L11;
    } else {
     i12 = i23;
    }
   }
   if ((i14 | 0) == 18) {
    _WTFCrash();
   } else if ((i14 | 0) == 29) {
    _WTFCrash();
   }
  }
 } while (0);
 i23 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i9 = 0;
   i10 = i23;
   while (1) {
    if (HEAP8[H_BASE + 408 | 0] | 0) {
     i24 = HEAP32[H_BASE + 448 >> 2] | 0;
     i25 = i10;
    } else {
     i20 = __ZN3WTF10fastMallocEj(20) | 0;
     i21 = i20;
     _memset(i20 | 0, 0, 20) | 0;
     HEAP32[H_BASE + 448 >> 2] = i21;
     HEAP8[H_BASE + 408 | 0] = 1;
     i24 = i21;
     i25 = HEAP32[i6 >> 2] | 0;
    }
    if (i25 >>> 0 <= i9 >>> 0) {
     i14 = 46;
     break;
    }
    __ZN3WTF7HashMapIjNS_6OwnPtrIN7WebCore20FontGlyphsCacheEntryEEENS_13AlreadyHashedENS_10HashTraitsIjEENS6_IS4_EEE6removeERKj(i24, (HEAP32[i4 >> 2] | 0) + (i9 << 2) | 0) | 0;
    i9 = i9 + 1 | 0;
    i10 = HEAP32[i6 >> 2] | 0;
    if (i9 >>> 0 >= i10 >>> 0) {
     break;
    }
   }
   if ((i14 | 0) == 46) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((i10 | 0) == 0) {
    break;
   }
   HEAP32[i6 >> 2] = 0;
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == (i6 | 0) | (i6 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i5 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i6);
 STACKTOP = i1;
 return;
}
function __ZN7WebCore4Font22characterRangeCodePathEPKtj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i4 = i2 - 1 | 0;
 i5 = 0;
 i6 = 1;
 L4 : while (1) {
  i7 = HEAP16[i1 + (i5 << 1) >> 1] | 0;
  i8 = i7 & 65535;
  do {
   if ((i7 & 65535) >>> 0 < 741 >>> 0) {
    i9 = i6;
    i10 = i5;
   } else {
    if ((i7 & 65535) >>> 0 < 746 >>> 0) {
     i3 = 2;
     i11 = 50;
     break L4;
    }
    if ((i7 & 65535) >>> 0 < 768 >>> 0) {
     i9 = i6;
     i10 = i5;
     break;
    }
    if ((i7 & 65535) >>> 0 < 880 >>> 0) {
     i3 = 2;
     i11 = 51;
     break L4;
    }
    if ((i7 & 65535) >>> 0 < 1425 >>> 0 | i7 << 16 >> 16 == 1470) {
     i9 = i6;
     i10 = i5;
     break;
    }
    if ((i7 & 65535) >>> 0 < 1488 >>> 0) {
     i3 = 2;
     i11 = 52;
     break L4;
    }
    if ((i7 & 65535) >>> 0 < 1536 >>> 0) {
     i9 = i6;
     i10 = i5;
     break;
    }
    if ((i7 & 65535) >>> 0 < 4256 >>> 0) {
     i3 = 2;
     i11 = 53;
     break L4;
    }
    if ((i7 & 65535) >>> 0 < 4352 >>> 0) {
     i9 = i6;
     i10 = i5;
     break;
    }
    if ((i7 & 65535) >>> 0 < 4608 >>> 0) {
     i3 = 2;
     i11 = 54;
     break L4;
    }
    if ((i7 & 65535) >>> 0 < 4957 >>> 0) {
     i9 = i6;
     i10 = i5;
     break;
    }
    if ((i7 & 65535) >>> 0 < 4960 >>> 0) {
     i3 = 2;
     i11 = 55;
     break L4;
    }
    if ((i7 & 65535) >>> 0 < 5888 >>> 0) {
     i9 = i6;
     i10 = i5;
     break;
    }
    if ((i7 & 65535) >>> 0 < 6320 >>> 0) {
     i3 = 2;
     i11 = 56;
     break L4;
    }
    if ((i7 & 65535) >>> 0 < 6400 >>> 0) {
     i9 = i6;
     i10 = i5;
     break;
    }
    if ((i7 & 65535) >>> 0 < 6480 >>> 0) {
     i3 = 2;
     i11 = 57;
     break L4;
    }
    if ((i7 & 65535) >>> 0 < 6528 >>> 0) {
     i9 = i6;
     i10 = i5;
     break;
    }
    if ((i7 & 65535) >>> 0 < 6624 >>> 0) {
     i3 = 2;
     i11 = 58;
     break L4;
    }
    if ((i7 & 65535) >>> 0 < 6656 >>> 0) {
     i9 = i6;
     i10 = i5;
     break;
    }
    if ((i7 & 65535) >>> 0 < 7424 >>> 0) {
     i3 = 2;
     i11 = 59;
     break L4;
    }
    if ((i7 & 65535) >>> 0 < 7616 >>> 0) {
     i9 = i6;
     i10 = i5;
     break;
    }
    if ((i7 & 65535) >>> 0 < 7680 >>> 0) {
     i3 = 2;
     i11 = 60;
     break L4;
    }
    if ((i7 & 65535) >>> 0 < 8193 >>> 0) {
     i9 = 3;
     i10 = i5;
     break;
    }
    if ((i7 & 65535) >>> 0 < 8400 >>> 0) {
     i9 = i6;
     i10 = i5;
     break;
    }
    if ((i7 & 65535) >>> 0 < 8448 >>> 0) {
     i3 = 2;
     i11 = 61;
     break L4;
    }
    if ((i7 & 65535) >>> 0 < 11503 >>> 0) {
     i9 = i6;
     i10 = i5;
     break;
    }
    if ((i7 & 65535) >>> 0 < 11506 >>> 0) {
     i3 = 2;
     i11 = 62;
     break L4;
    }
    if ((i7 & 65535) >>> 0 < 12330 >>> 0) {
     i9 = i6;
     i10 = i5;
     break;
    }
    if ((i7 & 65535) >>> 0 < 12336 >>> 0) {
     i3 = 2;
     i11 = 63;
     break L4;
    }
    if ((i7 & 65535) >>> 0 < 42620 >>> 0) {
     i9 = i6;
     i10 = i5;
     break;
    }
    if ((i7 & 65535) >>> 0 < 42622 >>> 0) {
     i3 = 2;
     i11 = 64;
     break L4;
    }
    if ((i7 & 65535) >>> 0 < 42736 >>> 0) {
     i9 = i6;
     i10 = i5;
     break;
    }
    if ((i7 & 65535) >>> 0 < 42738 >>> 0) {
     i3 = 2;
     i11 = 65;
     break L4;
    }
    if ((i7 & 65535) >>> 0 < 43008 >>> 0) {
     i9 = i6;
     i10 = i5;
     break;
    }
    if ((i7 & 65535) >>> 0 < 44032 >>> 0) {
     i3 = 2;
     i11 = 66;
     break L4;
    }
    if ((i7 & 65535) >>> 0 < 55216 >>> 0) {
     i9 = i6;
     i10 = i5;
     break;
    }
    if ((i7 & 65535) >>> 0 < 55296 >>> 0) {
     i3 = 2;
     i11 = 67;
     break L4;
    }
    if ((i7 & 65535) >>> 0 >= 56320 >>> 0) {
     if ((i7 & 65535) >>> 0 < 65024 >>> 0) {
      i9 = i6;
      i10 = i5;
      break;
     }
     if ((i7 & 65535) >>> 0 < 65040 >>> 0 | (i7 + 480 & 65535) >>> 0 < 16 >>> 0) {
      i3 = 2;
      i11 = 69;
      break L4;
     } else {
      i9 = i6;
      i10 = i5;
      break;
     }
    }
    if ((i5 | 0) == (i4 | 0)) {
     i9 = i6;
     i10 = i4;
     break;
    }
    i12 = i5 + 1 | 0;
    i13 = HEAPU16[i1 + (i12 << 1) >> 1] | 0;
    if ((i13 & 64512 | 0) != 56320) {
     i9 = i6;
     i10 = i12;
     break;
    }
    i14 = i13 + (i8 << 10) | 0;
    i13 = i14 - 56613888 | 0;
    if ((i13 | 0) < 127462) {
     i9 = i6;
     i10 = i12;
     break;
    }
    if ((i13 | 0) < 127488 | (i14 - 57531648 | 0) >>> 0 < 240 >>> 0) {
     i3 = 2;
     i11 = 68;
     break L4;
    } else {
     i9 = i6;
     i10 = i12;
    }
   }
  } while (0);
  i8 = i10 + 1 | 0;
  if (i8 >>> 0 < i2 >>> 0) {
   i5 = i8;
   i6 = i9;
  } else {
   i3 = i9;
   i11 = 70;
   break;
  }
 }
 if ((i11 | 0) == 50) {
  return i3 | 0;
 } else if ((i11 | 0) == 51) {
  return i3 | 0;
 } else if ((i11 | 0) == 52) {
  return i3 | 0;
 } else if ((i11 | 0) == 53) {
  return i3 | 0;
 } else if ((i11 | 0) == 54) {
  return i3 | 0;
 } else if ((i11 | 0) == 55) {
  return i3 | 0;
 } else if ((i11 | 0) == 56) {
  return i3 | 0;
 } else if ((i11 | 0) == 57) {
  return i3 | 0;
 } else if ((i11 | 0) == 58) {
  return i3 | 0;
 } else if ((i11 | 0) == 59) {
  return i3 | 0;
 } else if ((i11 | 0) == 60) {
  return i3 | 0;
 } else if ((i11 | 0) == 61) {
  return i3 | 0;
 } else if ((i11 | 0) == 62) {
  return i3 | 0;
 } else if ((i11 | 0) == 63) {
  return i3 | 0;
 } else if ((i11 | 0) == 64) {
  return i3 | 0;
 } else if ((i11 | 0) == 65) {
  return i3 | 0;
 } else if ((i11 | 0) == 66) {
  return i3 | 0;
 } else if ((i11 | 0) == 67) {
  return i3 | 0;
 } else if ((i11 | 0) == 68) {
  return i3 | 0;
 } else if ((i11 | 0) == 69) {
  return i3 | 0;
 } else if ((i11 | 0) == 70) {
  return i3 | 0;
 }
 return 0;
}
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6OwnPtrIN7WebCore20FontGlyphsCacheEntryEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_13AlreadyHashedENS_7HashMapIjS5_S9_NS_10HashTraitsIjEENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKjNS_10PassOwnPtrIS4_EEEENS_18HashTableAddResultINS_17HashTableIteratorIjS6_S8_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
  __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6OwnPtrIN7WebCore20FontGlyphsCacheEntryEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_13AlreadyHashedENS_7HashMapIjS5_S9_NS_10HashTraitsIjEENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8 & i6;
 i7 = i10 + (i9 << 3) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = i8;
  } else {
   i14 = (i8 >>> 23) + ~i8 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i9;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i20 = 8;
     break;
    }
    i21 = (i19 | 0) == -1 ? i18 : i16;
    i22 = (i15 | 0) == 0 ? i14 : i15;
    i23 = i22 + i17 & i6;
    i24 = i10 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i20 = 10;
     break;
    } else {
     i15 = i22;
     i16 = i21;
     i17 = i23;
     i18 = i24;
     i19 = i25;
    }
   }
   if ((i20 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i12 = i24;
     i13 = i8;
     break;
    }
    i19 = i21;
    HEAP32[i19 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i12 = i21;
    i13 = HEAP32[i3 >> 2] | 0;
    break;
   } else if ((i20 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 HEAP32[i12 >> 2] = i13;
 i13 = i12 + 4 | 0;
 i10 = HEAP32[i13 >> 2] | 0;
 i20 = i4 | 0;
 i4 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP32[i13 >> 2] = i4;
 if ((i10 | 0) != 0) {
  i4 = HEAP32[i10 + 48 >> 2] | 0;
  i13 = i4 | 0;
  i20 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
  if ((i20 | 0) == 0) {
   __ZN7WebCore10FontGlyphsD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i13 >> 2] = i20;
  }
  i20 = i10 + 20 | 0;
  i13 = HEAP32[i20 >> 2] | 0;
  i4 = i10 + 12 | 0;
  if ((i13 | 0) != 0) {
   i3 = HEAP32[i4 >> 2] | 0;
   i21 = i3 + (i13 << 2) | 0;
   i13 = i3;
   while (1) {
    i3 = HEAP32[i13 >> 2] | 0;
    do {
     if ((i3 | 0) != 0) {
      i8 = i3 | 0;
      i24 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i24 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i3);
       break;
      } else {
       HEAP32[i8 >> 2] = i24;
       break;
      }
     }
    } while (0);
    i13 = i13 + 4 | 0;
    if ((i13 | 0) == (i21 | 0)) {
     break;
    }
   }
   HEAP32[i20 >> 2] = 0;
  }
  i20 = HEAP32[i4 >> 2] | 0;
  if (!((i10 + 24 | 0) == (i20 | 0) | (i20 | 0) == 0)) {
   HEAP32[i4 >> 2] = 0;
   HEAP32[i10 + 16 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i20);
  }
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = i2 + 12 | 0;
 i20 = (HEAP32[i10 >> 2] | 0) + 1 | 0;
 HEAP32[i10 >> 2] = i20;
 i10 = i2 + 4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i20 << 1 | 0) < (i4 | 0)) {
  i26 = i12;
  i27 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i28 = 8;
  } else {
   i21 = i4 << 1;
   i28 = (i20 * 6 & -1 | 0) < (i21 | 0) ? i4 : i21;
  }
  i21 = __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6OwnPtrIN7WebCore20FontGlyphsCacheEntryEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_13AlreadyHashedENS_7HashMapIjS5_S9_NS_10HashTraitsIjEENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i2, i28, i12) | 0;
  i26 = i21;
  i27 = HEAP32[i10 >> 2] | 0;
 }
 i10 = (HEAP32[i5 >> 2] | 0) + (i27 << 3) | 0;
 i27 = i1;
 HEAP32[i27 >> 2] = i26;
 HEAP32[i27 + 4 >> 2] = i10;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6OwnPtrIN7WebCore20FontGlyphsCacheEntryEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_13AlreadyHashedENS_7HashMapIjS5_S9_NS_10HashTraitsIjEENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i1, i2, i3) {
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
  __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6OwnPtrIN7WebCore20FontGlyphsCacheEntryEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_13AlreadyHashedENS_7HashMapIjS5_S9_NS_10HashTraitsIjEENSB_IS5_EEE18KeyValuePairTraitsESC_E15deallocateTableEPS6_i(i7, i5);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 << 3) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  if ((i13 | 0) == (-1 | 0) | (i13 | 0) == 0) {
   i14 = i11;
  } else {
   i15 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = i16 & i13;
   i18 = i15 + (i17 << 3) | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   L7 : do {
    if ((i19 | 0) == 0) {
     i20 = 0;
     i21 = i18;
     i22 = 5;
    } else {
     i23 = (i13 >>> 23) + ~i13 | 0;
     i24 = i23 << 12 ^ i23;
     i23 = i24 >>> 7 ^ i24;
     i24 = i23 << 2 ^ i23;
     i23 = i24 >>> 20 ^ i24 | 1;
     i24 = 0;
     i25 = 0;
     i26 = i17;
     i27 = i18;
     i28 = i19;
     while (1) {
      if ((i28 | 0) == (i13 | 0)) {
       i29 = i27;
       break L7;
      }
      i30 = (i28 | 0) == -1 ? i27 : i24;
      i31 = (i25 | 0) == 0 ? i23 : i25;
      i32 = i31 + i26 & i16;
      i33 = i15 + (i32 << 3) | 0;
      i34 = HEAP32[i33 >> 2] | 0;
      if ((i34 | 0) == 0) {
       i20 = i30;
       i21 = i33;
       i22 = 5;
       break;
      } else {
       i24 = i30;
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
      }
     }
    }
   } while (0);
   if ((i22 | 0) == 5) {
    i22 = 0;
    i29 = (i20 | 0) != 0 ? i20 : i21;
   }
   i15 = i29 + 4 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i35 = i13;
   } else {
    i19 = HEAP32[i16 + 48 >> 2] | 0;
    i18 = i19 | 0;
    i17 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
    if ((i17 | 0) == 0) {
     __ZN7WebCore10FontGlyphsD2Ev(i19);
     __ZN3WTF8fastFreeEPv(i19);
    } else {
     HEAP32[i18 >> 2] = i17;
    }
    i17 = i16 + 20 | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    i19 = i16 + 12 | 0;
    if ((i18 | 0) != 0) {
     i28 = HEAP32[i19 >> 2] | 0;
     i27 = i28 + (i18 << 2) | 0;
     i18 = i28;
     while (1) {
      i28 = HEAP32[i18 >> 2] | 0;
      do {
       if ((i28 | 0) != 0) {
        i26 = i28 | 0;
        i25 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
        if ((i25 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i28);
         break;
        } else {
         HEAP32[i26 >> 2] = i25;
         break;
        }
       }
      } while (0);
      i18 = i18 + 4 | 0;
      if ((i18 | 0) == (i27 | 0)) {
       break;
      }
     }
     HEAP32[i17 >> 2] = 0;
    }
    i27 = HEAP32[i19 >> 2] | 0;
    if (!((i16 + 24 | 0) == (i27 | 0) | (i27 | 0) == 0)) {
     HEAP32[i19 >> 2] = 0;
     HEAP32[i16 + 16 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i27);
    }
    __ZN3WTF8fastFreeEPv(i16);
    i35 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i29 >> 2] = i35;
   i27 = i7 + (i10 << 3) + 4 | 0;
   i18 = HEAP32[i27 >> 2] | 0;
   HEAP32[i27 >> 2] = 0;
   HEAP32[i15 >> 2] = i18;
   i14 = (i2 | 0) == (i3 | 0) ? i29 : i11;
  }
  i18 = i10 + 1 | 0;
  if ((i18 | 0) == (i5 | 0)) {
   i8 = i14;
   break;
  } else {
   i10 = i18;
   i11 = i14;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6OwnPtrIN7WebCore20FontGlyphsCacheEntryEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_13AlreadyHashedENS_7HashMapIjS5_S9_NS_10HashTraitsIjEENSB_IS5_EEE18KeyValuePairTraitsESC_E15deallocateTableEPS6_i(i7, i5);
 return i8 | 0;
}
function __ZN3WTF9HashTableIN7WebCore10WidthCache14SmallStringKeyENS_12KeyValuePairIS3_fEENS_24KeyValuePairKeyExtractorIS5_EENS2_18SmallStringKeyHashENS_7HashMapIS3_fS8_NS2_24SmallStringKeyHashTraitsENS_10HashTraitsIfEEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISE_S8_EERKS3_RfEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S8_SE_SA_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i10 = 16;
  } else {
   i11 = i9 << 1;
   i10 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i9 : i11;
  }
  __ZN3WTF9HashTableIN7WebCore10WidthCache14SmallStringKeyENS_12KeyValuePairIS3_fEENS_24KeyValuePairKeyExtractorIS5_EENS2_18SmallStringKeyHashENS_7HashMapIS3_fS8_NS2_24SmallStringKeyHashTraitsENS_10HashTraitsIfEEE18KeyValuePairTraitsESA_E6rehashEiPS5_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = i10 & i8;
 i9 = i12 + (i11 * 40 & -1) | 0;
 i13 = HEAP16[i12 + (i11 * 40 & -1) + 4 >> 1] | 0;
 do {
  if (i13 << 16 >> 16 == 16) {
   i14 = i9;
   i15 = 12;
  } else {
   i16 = HEAP16[i3 + 4 >> 1] | 0;
   i17 = i3 + 6 | 0;
   i18 = (i10 >>> 23) + ~i10 | 0;
   i19 = i18 << 12 ^ i18;
   i18 = i19 >>> 7 ^ i19;
   i19 = i18 << 2 ^ i18;
   i18 = i19 >>> 20 ^ i19 | 1;
   i19 = 0;
   i20 = 0;
   i21 = i11;
   i22 = i9;
   i23 = i13;
   while (1) {
    if (i23 << 16 >> 16 == i16 << 16 >> 16) {
     if ((_memcmp(i12 + (i21 * 40 & -1) + 6 | 0, i17 | 0, (i16 & 65535) << 1 | 0) | 0) == 0) {
      i15 = 9;
      break;
     }
    }
    i24 = i23 << 16 >> 16 == 17 ? i22 : i20;
    i25 = (i19 | 0) == 0 ? i18 : i19;
    i26 = i25 + i21 & i8;
    i27 = i12 + (i26 * 40 & -1) | 0;
    i28 = HEAP16[i12 + (i26 * 40 & -1) + 4 >> 1] | 0;
    if (i28 << 16 >> 16 == 16) {
     i15 = 11;
     break;
    } else {
     i19 = i25;
     i20 = i24;
     i21 = i26;
     i22 = i27;
     i23 = i28;
    }
   }
   if ((i15 | 0) == 9) {
    i23 = i12 + ((HEAP32[i2 + 4 >> 2] | 0) * 40 & -1) | 0;
    i21 = i1;
    HEAP32[i21 >> 2] = i22;
    HEAP32[i21 + 4 >> 2] = i23;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i15 | 0) == 11) {
    if ((i24 | 0) == 0) {
     i14 = i27;
     i15 = 12;
     break;
    }
    i23 = i6;
    _llvm_lifetime_start(30, 0, i23 | 0);
    HEAP16[i24 + 4 >> 1] = 16;
    _memcpy(i24 + 6 | 0, i23 | 0, 30) | 0;
    HEAPF32[i24 + 36 >> 2] = Infinity;
    _llvm_lifetime_end(30, 0, i23 | 0);
    i23 = i2 + 16 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) - 1;
    i29 = i24;
    i30 = i23;
    break;
   }
  }
 } while (0);
 if ((i15 | 0) == 12) {
  i29 = i14;
  i30 = i2 + 16 | 0;
 }
 _memcpy(i29 | 0, i3 | 0, 36) | 0;
 HEAPF32[i29 + 36 >> 2] = +HEAPF32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i3;
 i4 = i2 + 4 | 0;
 i14 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i30 >> 2] | 0) + i3 << 1 | 0) < (i14 | 0)) {
  i31 = i29;
  i32 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i33 = 16;
  } else {
   i30 = i14 << 1;
   i33 = (i3 * 6 & -1 | 0) < (i30 | 0) ? i14 : i30;
  }
  i30 = __ZN3WTF9HashTableIN7WebCore10WidthCache14SmallStringKeyENS_12KeyValuePairIS3_fEENS_24KeyValuePairKeyExtractorIS5_EENS2_18SmallStringKeyHashENS_7HashMapIS3_fS8_NS2_24SmallStringKeyHashTraitsENS_10HashTraitsIfEEE18KeyValuePairTraitsESA_E6rehashEiPS5_(i2, i33, i29) | 0;
  i31 = i30;
  i32 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i7 >> 2] | 0) + (i32 * 40 & -1) | 0;
 i32 = i1;
 HEAP32[i32 >> 2] = i31;
 HEAP32[i32 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore4Font22isCJKIdeographOrSymbolEi(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((i1 | 0) == 729 | (i1 | 0) == 715 | (i1 | 0) == 714 | (i1 | 0) == 711) {
  i2 = 1;
  return i2 | 0;
 }
 if ((i1 - 8224 | 0) >>> 0 < 2 >>> 0 | (i1 | 0) == 8240 | (i1 | 0) == 8251 | (i1 | 0) == 8252 | (i1 | 0) == 8258 | (i1 | 0) == 8263 | (i1 | 0) == 8264 | (i1 | 0) == 8265 | (i1 | 0) == 8273 | (i1 | 0) == 8413 | (i1 | 0) == 8414 | (i1 | 0) == 8448 | (i1 | 0) == 8451 | (i1 | 0) == 8453 | (i1 | 0) == 8457 | (i1 | 0) == 8458 | (i1 | 0) == 8467 | (i1 | 0) == 8470 | (i1 | 0) == 8481 | (i1 | 0) == 8491 | (i1 | 0) == 8507 | (i1 | 0) == 8528 | (i1 | 0) == 8529 | (i1 | 0) == 8530 | (i1 - 8534 | 0) >>> 0 < 5 >>> 0 | (i1 - 8544 | 0) >>> 0 < 12 >>> 0 | (i1 - 8560 | 0) >>> 0 < 12 >>> 0) {
  i2 = 1;
  return i2 | 0;
 }
 switch (i1 | 0) {
 case 9151:
 case 9150:
 case 8978:
 case 8967:
 case 8585:
 case 8575:
  {
   i2 = 1;
   return i2 | 0;
  }
 default:
  {}
 }
 if ((i1 - 9152 | 0) >>> 0 < 13 >>> 0) {
  i2 = 1;
  return i2 | 0;
 }
 if ((i1 | 0) == 9251 | (i1 | 0) == 9166) {
  i2 = 1;
  return i2 | 0;
 }
 if ((i1 - 9312 | 0) >>> 0 < 51 >>> 0 | (i1 - 9372 | 0) >>> 0 < 100 >>> 0) {
  i2 = 1;
  return i2 | 0;
 }
 if ((i1 - 9632 | 0) >>> 0 < 3 >>> 0 | (i1 | 0) == 9642 | (i1 | 0) == 9643) {
  i2 = 1;
  return i2 | 0;
 }
 if ((i1 - 9649 | 0) >>> 0 < 3 >>> 0 | (i1 | 0) == 9654 | (i1 | 0) == 9655 | (i1 | 0) == 9660 | (i1 | 0) == 9661) {
  i2 = 1;
  return i2 | 0;
 }
 if ((i1 - 9664 | 0) >>> 0 < 2 >>> 0 | (i1 | 0) == 9670 | (i1 | 0) == 9671 | (i1 | 0) == 9673 | (i1 | 0) == 9675 | (i1 | 0) == 9676 | (i1 - 9678 | 0) >>> 0 < 6 >>> 0 | (i1 - 9698 | 0) >>> 0 < 5 >>> 0 | (i1 | 0) == 9711 | (i1 - 9728 | 0) >>> 0 < 4 >>> 0) {
  i2 = 1;
  return i2 | 0;
 }
 if ((i1 - 9733 | 0) >>> 0 < 2 >>> 0 | (i1 | 0) == 9742 | (i1 | 0) == 9750 | (i1 | 0) == 9751 | (i1 | 0) == 9792 | (i1 | 0) == 9794 | (i1 - 9824 | 0) >>> 0 < 16 >>> 0 | (i1 - 9842 | 0) >>> 0 < 12 >>> 0) {
  i2 = 1;
  return i2 | 0;
 }
 switch (i1 | 0) {
 case 10070:
 case 10048:
 case 10047:
 case 10010:
 case 10003:
 case 9918:
 case 9917:
 case 9888:
  {
   i2 = 1;
   return i2 | 0;
  }
 default:
  {}
 }
 if ((i1 - 10102 | 0) >>> 0 < 10 >>> 0 | (i1 | 0) == 11034 | (i1 - 12272 | 0) >>> 0 < 16 >>> 0 | (i1 - 12288 | 0) >>> 0 < 48 >>> 0 | (i1 - 12337 | 0) >>> 0 < 15 >>> 0 | (i1 - 12352 | 0) >>> 0 < 96 >>> 0 | (i1 - 12448 | 0) >>> 0 < 96 >>> 0 | (i1 - 12544 | 0) >>> 0 < 48 >>> 0 | (i1 - 12688 | 0) >>> 0 < 16 >>> 0 | (i1 - 12704 | 0) >>> 0 < 32 >>> 0 | (i1 - 12800 | 0) >>> 0 < 256 >>> 0 | (i1 - 13056 | 0) >>> 0 < 256 >>> 0 | (i1 - 63584 | 0) >>> 0 < 3 >>> 0 | (i1 - 65072 | 0) >>> 0 < 32 >>> 0) {
  i2 = 1;
  return i2 | 0;
 }
 if ((i1 - 65040 | 0) >>> 0 < 3 >>> 0 | (i1 | 0) == 65049) {
  i2 = 1;
  return i2 | 0;
 }
 if ((i1 | 0) == 65310 | (i1 | 0) == 65308 | (i1 | 0) == 65307 | (i1 | 0) == 65293) {
  i2 = 0;
  return i2 | 0;
 }
 if ((i1 - 65280 | 0) >>> 0 < 240 >>> 0 | (i1 | 0) == 127232 | (i1 - 127248 | 0) >>> 0 < 26 >>> 0 | (i1 - 127280 | 0) >>> 0 < 26 >>> 0 | (i1 - 127312 | 0) >>> 0 < 26 >>> 0 | (i1 - 127344 | 0) >>> 0 < 26 >>> 0 | (i1 - 127488 | 0) >>> 0 < 1222 >>> 0) {
  i2 = 1;
  return i2 | 0;
 }
 if ((i1 - 19968 | 0) >>> 0 < 20992 >>> 0 | (i1 - 13312 | 0) >>> 0 < 6592 >>> 0 | (i1 - 11904 | 0) >>> 0 < 128 >>> 0 | (i1 - 12032 | 0) >>> 0 < 224 >>> 0 | (i1 - 12736 | 0) >>> 0 < 48 >>> 0 | (i1 - 63744 | 0) >>> 0 < 512 >>> 0 | (i1 - 131072 | 0) >>> 0 < 42720 >>> 0 | (i1 - 173824 | 0) >>> 0 < 4160 >>> 0 | (i1 - 177984 | 0) >>> 0 < 224 >>> 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (i1 - 194560 | 0) >>> 0 < 544 >>> 0;
 return i2 | 0;
}
function __ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, d18 = +0, d19 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[H_BASE + 472 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   if ((HEAP32[i2 + 32 >> 2] | 0) != 0) {
    i8 = 1;
    i9 = 10;
    break;
   }
   i10 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i10 | 0) != 0) {
    if ((HEAP32[i10 + 12 >> 2] | 0) != 0) {
     i11 = i3;
     i12 = i4;
     i13 = 1;
     break;
    }
   }
   i10 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i10 | 0) > 1) {
    if ((HEAP32[i1 + 36 >> 2] & 768 | 0) != 0) {
     i11 = i3;
     i12 = i4;
     i13 = 1;
     break;
    }
   }
   if ((HEAP32[i2 + 24 >> 2] & 68 | 0) != 64) {
    i8 = 1;
    i9 = 10;
    break;
   }
   i14 = __ZN7WebCore4Font22characterRangeCodePathEPKtj(HEAP32[i2 >> 2] | 0, i10) | 0;
   i9 = 9;
  } else {
   i14 = i7;
   i9 = 9;
  }
 } while (0);
 if ((i9 | 0) == 9) {
  if ((i14 | 0) == 2) {
   i11 = i3;
   i12 = i4;
   i13 = 1;
  } else {
   i8 = i14;
   i9 = 10;
  }
 }
 do {
  if ((i9 | 0) == 10) {
   i14 = __ZN7WebCore4Font36canReturnFallbackFontsForComplexTextEv() | 0;
   i7 = i14 ? i3 : 0;
   if ((i8 | 0) == 3 | (i4 | 0) == 0) {
    i11 = i7;
    i12 = i4;
    i13 = 0;
    break;
   }
   i11 = i7;
   i12 = (HEAP8[i4 + 16 | 0] & 1) == 0 ? 0 : i4;
   i13 = 0;
  }
 } while (0);
 do {
  if (+HEAPF32[i1 + 32 >> 2] != +0) {
   i15 = 0;
   i16 = 0;
  } else {
   i4 = HEAP32[i1 + 24 >> 2] | 0;
   if (!((HEAP32[i1 + 36 >> 2] & 768 | 0) != 0 & +HEAPF32[i1 + 28 >> 2] == +0 & (i12 | 0) == 0)) {
    i15 = 0;
    i16 = 0;
    break;
   }
   if ((HEAP32[i2 + 24 >> 2] & 8 | 0) != 0) {
    i15 = 0;
    i16 = 0;
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) >>> 0 > 15 >>> 0) {
    i15 = 0;
    i16 = 0;
    break;
   }
   i8 = i4 + 56 | 0;
   i3 = HEAP32[i8 >> 2] | 0;
   if ((i3 | 0) > 0) {
    HEAP32[i8 >> 2] = i3 - 1;
    i15 = 0;
    i16 = 0;
    break;
   }
   i3 = __ZN7WebCore10WidthCache11addSlowCaseERKNS_7TextRunEf(i4 + 52 | 0, i2, +NaN) | 0;
   if ((i3 | 0) == 0) {
    i15 = 0;
    i16 = 0;
    break;
   }
   d17 = +HEAPF32[i3 >> 2];
   if (((HEAPF32[tempDoublePtr >> 2] = d17, HEAP32[tempDoublePtr >> 2] | 0) & 2147483647) >>> 0 > 2139095040 >>> 0) {
    i15 = i3;
    i16 = 1;
    break;
   } else {
    d18 = d17;
   }
   STACKTOP = i5;
   return +d18;
  }
 } while (0);
 _memset(i6 | 0, 0, 20) | 0;
 i3 = (i11 | 0) == 0 ? i6 : i11;
 if (i13) {
  d19 = +__ZNK7WebCore4Font24floatWidthForComplexTextERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i1, i2, i3, i12);
 } else {
  d19 = +__ZNK7WebCore4Font23floatWidthForSimpleTextERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i1, i2, i3, i12);
 }
 do {
  if (i16) {
   if ((HEAP32[i3 + 12 >> 2] | 0) != 0) {
    break;
   }
   HEAPF32[i15 >> 2] = d19;
  }
 } while (0);
 i15 = HEAP32[i6 >> 2] | 0;
 if ((i15 | 0) == 0) {
  d18 = d19;
  STACKTOP = i5;
  return +d18;
 }
 __ZN3WTF8fastFreeEPv(i15);
 d18 = d19;
 STACKTOP = i5;
 return +d18;
}
function __ZN7WebCore4Font15normalizeSpacesEPKtj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i6 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i6 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i6 + 12 | 0;
 HEAP8[i10] = 1;
 HEAP32[i6 + 16 >> 2] = 0;
 i11 = i6 + 20 | 0;
 HEAP32[i11 >> 2] = 0;
 __ZN3WTF13StringBuilder15reserveCapacityEj(i6, i3);
 if ((i3 | 0) != 0) {
  i12 = i6 + 20 | 0;
  i13 = 0;
  while (1) {
   i14 = HEAP16[i2 + (i13 << 1) >> 1] | 0;
   if ((i14 << 16 >> 16 | 0) == 32 | (i14 << 16 >> 16 | 0) == 9 | (i14 << 16 >> 16 | 0) == 10 | (i14 << 16 >> 16 | 0) == 160) {
    i15 = 32;
   } else {
    do {
     if ((i14 & 65535) >>> 0 < 32 >>> 0 | (i14 - 127 & 65535) >>> 0 < 33 >>> 0) {
      i16 = 1;
     } else {
      if ((i14 << 16 >> 16 | 0) == 8203 | (i14 << 16 >> 16 | 0) == 173) {
       i16 = 1;
       break;
      }
      if ((i14 - 8206 & 65535) >>> 0 < 2 >>> 0) {
       i16 = 1;
       break;
      }
      i16 = (i14 - 8234 & 65535) >>> 0 < 5 >>> 0 | i14 << 16 >> 16 == -257 | i14 << 16 >> 16 == -4;
     }
    } while (0);
    i15 = i16 | i14 << 16 >> 16 == 8204 | i14 << 16 >> 16 == 8205 ? 8203 : i14;
   }
   HEAP16[i5 >> 1] = i15;
   i17 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i18 = 16;
    } else {
     i19 = HEAP32[i7 >> 2] | 0;
     if (i19 >>> 0 >= (HEAP32[i17 + 4 >> 2] | 0) >>> 0) {
      i18 = 16;
      break;
     }
     if ((HEAP32[i8 >> 2] | 0) != 0) {
      i18 = 16;
      break;
     }
     if ((HEAP8[i10] & 1) == 0) {
      HEAP32[i7 >> 2] = i19 + 1;
      HEAP16[(HEAP32[i12 >> 2] | 0) + (i19 << 1) >> 1] = i15;
      break;
     }
     if ((i15 & 65535) >>> 0 > 255 >>> 0) {
      i18 = 16;
      break;
     }
     HEAP32[i7 >> 2] = i19 + 1;
     HEAP8[(HEAP32[i11 >> 2] | 0) + i19 | 0] = i15;
    }
   } while (0);
   if ((i18 | 0) == 16) {
    i18 = 0;
    __ZN3WTF13StringBuilder6appendEPKtj(i6, i5, 1);
   }
   i13 = i13 + 1 | 0;
   if (i13 >>> 0 >= i3 >>> 0) {
    break;
   }
  }
 }
 __ZN3WTF13StringBuilder11shrinkToFitEv(i6);
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i6);
  i6 = HEAP32[i8 >> 2] | 0;
  HEAP32[i1 >> 2] = i6;
  if ((i6 | 0) != 0) {
   i20 = i6;
   i18 = 21;
  }
 } else {
  HEAP32[i1 >> 2] = i3;
  i20 = i3;
  i18 = 21;
 }
 if ((i18 | 0) == 21) {
  i18 = i20 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
 }
 i18 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i9 = i18 | 0;
   i20 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i9 >> 2] = i20;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i8 >> 2] | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i18 | 0;
 i20 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i20 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i18);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i8 >> 2] = i20;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore4Font25expansionOpportunityCountEPKtjNS_13TextDirectionERb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 if (!(HEAP8[H_BASE + 416 | 0] | 0)) {
  i5 = (__ZN7WebCore4Font38canExpandAroundIdeographsInComplexTextEv() | 0) & 1;
  HEAP8[H_BASE + 456 | 0] = i5;
  HEAP8[H_BASE + 416 | 0] = 1;
 }
 i5 = (i2 | 0) == 0;
 if ((i3 | 0) != 1) {
  if (i5) {
   i6 = 0;
   return i6 | 0;
  } else {
   i7 = 0;
   i8 = i2;
  }
  while (1) {
   i3 = i8 - 1 | 0;
   i9 = HEAP16[i1 + (i3 << 1) >> 1] | 0;
   i10 = i9 & 65535;
   L10 : do {
    if ((i9 << 16 >> 16 | 0) == 32 | (i9 << 16 >> 16 | 0) == 9 | (i9 << 16 >> 16 | 0) == 10 | (i9 << 16 >> 16 | 0) == 160) {
     HEAP8[i4] = 1;
     i11 = i8;
     i12 = i7 + 1 | 0;
    } else {
     do {
      if ((i10 & 64512 | 0) == 56320 & i8 >>> 0 > 1 >>> 0) {
       i13 = HEAPU16[i1 + (i8 - 2 << 1) >> 1] | 0;
       if ((i13 & 64512 | 0) != 55296) {
        i14 = i10;
        i15 = i8;
        break;
       }
       i14 = i10 - 56613888 + (i13 << 10) | 0;
       i15 = i3;
      } else {
       i14 = i10;
       i15 = i8;
      }
     } while (0);
     do {
      if ((HEAP8[H_BASE + 456 | 0] & 1) != 0) {
       if (!(__ZN7WebCore4Font22isCJKIdeographOrSymbolEi(i14) | 0)) {
        break;
       }
       i13 = i7 + 1 + ((HEAP8[i4] & 1 ^ 1) & 255) | 0;
       HEAP8[i4] = 1;
       i11 = i15;
       i12 = i13;
       break L10;
      }
     } while (0);
     HEAP8[i4] = 0;
     i11 = i15;
     i12 = i7;
    }
   } while (0);
   i10 = i11 - 1 | 0;
   if ((i10 | 0) == 0) {
    i6 = i12;
    break;
   } else {
    i7 = i12;
    i8 = i10;
   }
  }
  return i6 | 0;
 }
 if (i5) {
  i6 = 0;
  return i6 | 0;
 } else {
  i16 = 0;
  i17 = 0;
 }
 while (1) {
  i5 = HEAP16[i1 + (i17 << 1) >> 1] | 0;
  i8 = i5 & 65535;
  L28 : do {
   if ((i5 << 16 >> 16 | 0) == 32 | (i5 << 16 >> 16 | 0) == 9 | (i5 << 16 >> 16 | 0) == 10 | (i5 << 16 >> 16 | 0) == 160) {
    HEAP8[i4] = 1;
    i18 = i17;
    i19 = i16 + 1 | 0;
   } else {
    do {
     if ((i8 & 64512 | 0) == 55296) {
      i12 = i17 + 1 | 0;
      if (i12 >>> 0 >= i2 >>> 0) {
       i20 = i8;
       i21 = i17;
       break;
      }
      i7 = HEAPU16[i1 + (i12 << 1) >> 1] | 0;
      if ((i7 & 64512 | 0) != 56320) {
       i20 = i8;
       i21 = i17;
       break;
      }
      i20 = (i8 << 10) - 56613888 + i7 | 0;
      i21 = i12;
     } else {
      i20 = i8;
      i21 = i17;
     }
    } while (0);
    do {
     if ((HEAP8[H_BASE + 456 | 0] & 1) != 0) {
      if (!(__ZN7WebCore4Font22isCJKIdeographOrSymbolEi(i20) | 0)) {
       break;
      }
      i12 = i16 + 1 + ((HEAP8[i4] & 1 ^ 1) & 255) | 0;
      HEAP8[i4] = 1;
      i18 = i21;
      i19 = i12;
      break L28;
     }
    } while (0);
    HEAP8[i4] = 0;
    i18 = i21;
    i19 = i16;
   }
  } while (0);
  i8 = i18 + 1 | 0;
  if (i8 >>> 0 < i2 >>> 0) {
   i16 = i19;
   i17 = i8;
  } else {
   i6 = i19;
   break;
  }
 }
 return i6 | 0;
}
function __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
   i18 = i17 >>> 7;
   i19 = (i17 >>> 30) + ~i18 | 0;
   i17 = i19 << 12 ^ i19;
   i19 = i17 >>> 7 ^ i17;
   i17 = i19 << 2 ^ i19;
   i19 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i18 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 2) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == (-1 | 0)) {
     i25 = i22;
    } else if ((i24 | 0) == 0) {
     i26 = 6;
     break;
    } else {
     if ((i23 | 0) == (i13 | 0)) {
      i27 = i22;
      i28 = i13;
      break;
     } else {
      i25 = i20;
     }
    }
    i23 = (i18 | 0) == 0 ? i19 : i18;
    i17 = i23 + i21 | 0;
    i18 = i23;
    i20 = i25;
   }
   if ((i26 | 0) == 6) {
    i26 = 0;
    i18 = (i20 | 0) != 0 ? i20 : i22;
    i27 = i18;
    i28 = HEAP32[i18 >> 2] | 0;
   }
   i18 = i27 | 0;
   do {
    if ((i28 | 0) != 0) {
     i17 = i28 | 0;
     i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i28);
      break;
     } else {
      HEAP32[i17 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i18 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
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
  i29 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i29 << 2) >> 2] | 0;
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
  i1 = i29 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i29 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i8 + 16 >> 2] | 0;
 i9 = i3 >>> 7;
 i7 = (i3 >>> 30) + ~i9 | 0;
 i3 = i7 << 12 ^ i7;
 i7 = i3 >>> 7 ^ i3;
 i3 = i7 << 2 ^ i7;
 i7 = i3 >>> 20 ^ i3 | 1;
 i3 = 0;
 i11 = i9;
 i9 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i10 + (i12 << 2) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if ((i14 | 0) == (i8 | 0)) {
    i17 = 8;
    break;
   } else {
    i16 = i3;
   }
  }
  i14 = (i9 | 0) == 0 ? i7 : i9;
  i3 = i16;
  i11 = i14 + i12 | 0;
  i9 = i14;
 }
 if ((i17 | 0) == 8) {
  i17 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i3 | 0) == 0) {
  i18 = i13;
 } else {
  HEAP32[i3 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i3;
 }
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i18 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 do {
  if ((i13 | 0) != 0) {
   i4 = i13 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i3 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i3;
 i13 = i2 + 4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i3 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i21 = 8;
  } else {
   i17 = i4 << 1;
   i21 = (i3 * 6 & -1 | 0) < (i17 | 0) ? i4 : i17;
  }
  i17 = __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i21, i18) | 0;
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
function __ZN7WebCore4Font15normalizeSpacesEPKhj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i6 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i6 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i6 + 12 | 0;
 HEAP8[i10] = 1;
 HEAP32[i6 + 16 >> 2] = 0;
 i11 = i6 + 20 | 0;
 HEAP32[i11 >> 2] = 0;
 __ZN3WTF13StringBuilder15reserveCapacityEj(i6, i3);
 if ((i3 | 0) != 0) {
  i12 = i6 + 20 | 0;
  i13 = 0;
  while (1) {
   i14 = HEAP8[i2 + i13 | 0] | 0;
   i15 = i14 & 255;
   if ((i15 << 16 >> 16 | 0) == 32 | (i15 << 16 >> 16 | 0) == 9 | (i15 << 16 >> 16 | 0) == 10 | (i15 << 16 >> 16 | 0) == 160) {
    i16 = 32;
   } else {
    i16 = (i14 & 255) >>> 0 < 32 >>> 0 | (i15 - 127 & 65535) >>> 0 < 33 >>> 0 | i14 << 24 >> 24 == -83 ? 8203 : i15;
   }
   HEAP16[i5 >> 1] = i16;
   i15 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i15 | 0) == 0) {
     i17 = 12;
    } else {
     i14 = HEAP32[i7 >> 2] | 0;
     if (i14 >>> 0 >= (HEAP32[i15 + 4 >> 2] | 0) >>> 0) {
      i17 = 12;
      break;
     }
     if ((HEAP32[i8 >> 2] | 0) != 0) {
      i17 = 12;
      break;
     }
     if ((HEAP8[i10] & 1) == 0) {
      HEAP32[i7 >> 2] = i14 + 1;
      HEAP16[(HEAP32[i12 >> 2] | 0) + (i14 << 1) >> 1] = i16;
      break;
     }
     if ((i16 & 65535) >>> 0 > 255 >>> 0) {
      i17 = 12;
      break;
     }
     HEAP32[i7 >> 2] = i14 + 1;
     HEAP8[(HEAP32[i11 >> 2] | 0) + i14 | 0] = i16;
    }
   } while (0);
   if ((i17 | 0) == 12) {
    i17 = 0;
    __ZN3WTF13StringBuilder6appendEPKtj(i6, i5, 1);
   }
   i13 = i13 + 1 | 0;
   if (i13 >>> 0 >= i3 >>> 0) {
    break;
   }
  }
 }
 __ZN3WTF13StringBuilder11shrinkToFitEv(i6);
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i6);
  i6 = HEAP32[i8 >> 2] | 0;
  HEAP32[i1 >> 2] = i6;
  if ((i6 | 0) != 0) {
   i18 = i6;
   i17 = 17;
  }
 } else {
  HEAP32[i1 >> 2] = i3;
  i18 = i3;
  i17 = 17;
 }
 if ((i17 | 0) == 17) {
  i17 = i18 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
 }
 i17 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i9 = i17 | 0;
   i18 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i9 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i8 >> 2] | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i17 | 0;
 i18 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i18 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i17);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i8 >> 2] = i18;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore15FontDescriptionaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i3 = i5 - 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 - 8 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i5 | 0) != 0) {
    break;
   }
   i5 = HEAP32[i4 - 4 >> 2] | 0;
   i6 = i4 + (i5 << 2) | 0;
   if ((i5 | 0) != 0) {
    i5 = i4;
    while (1) {
     i7 = HEAP32[i5 >> 2] | 0;
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
     i5 = i5 + 4 | 0;
     if ((i5 | 0) == (i6 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 __ZN3WTF6RefPtrIN7WebCore19FontFeatureSettingsEEaSERKS3_(i1 + 4 | 0, i2 + 4 | 0) | 0;
 HEAPF32[i1 + 8 >> 2] = +HEAPF32[i2 + 8 >> 2];
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[i2 + 12 >> 2];
 i4 = i2 + 16 | 0;
 i6 = i1 + 16 | 0;
 i5 = HEAP32[i6 >> 2] & -2 | HEAP32[i4 >> 2] & 1;
 HEAP32[i6 >> 2] = i5;
 i7 = i5 & -3 | HEAP32[i4 >> 2] & 2;
 HEAP32[i6 >> 2] = i7;
 i5 = i7 & -13 | HEAP32[i4 >> 2] & 12;
 HEAP32[i6 >> 2] = i5;
 i7 = i5 & -17 | HEAP32[i4 >> 2] & 16;
 HEAP32[i6 >> 2] = i7;
 i5 = i7 & -33 | HEAP32[i4 >> 2] & 32;
 HEAP32[i6 >> 2] = i5;
 i7 = i5 & -65 | HEAP32[i4 >> 2] & 64;
 HEAP32[i6 >> 2] = i7;
 i5 = i7 & -32641 | HEAP32[i4 >> 2] & 32640;
 HEAP32[i6 >> 2] = i5;
 i7 = i5 & -229377 | HEAP32[i4 >> 2] & 229376;
 HEAP32[i6 >> 2] = i7;
 i5 = i7 & -262145 | HEAP32[i4 >> 2] & 262144;
 HEAP32[i6 >> 2] = i5;
 i7 = i5 & -524289 | HEAP32[i4 >> 2] & 524288;
 HEAP32[i6 >> 2] = i7;
 i5 = i7 & -3145729 | HEAP32[i4 >> 2] & 3145728;
 HEAP32[i6 >> 2] = i5;
 i7 = i5 & -12582913 | HEAP32[i4 >> 2] & 12582912;
 HEAP32[i6 >> 2] = i7;
 i5 = i7 & -50331649 | HEAP32[i4 >> 2] & 50331648;
 HEAP32[i6 >> 2] = i5;
 i7 = i5 & -201326593 | HEAP32[i4 >> 2] & 201326592;
 HEAP32[i6 >> 2] = i7;
 HEAP32[i6 >> 2] = i7 & 268435455 | HEAP32[i4 >> 2] & -268435456;
 i4 = i2 + 20 | 0;
 i2 = i1 + 20 | 0;
 i7 = HEAP32[i2 >> 2] & -4 | HEAP32[i4 >> 2] & 3;
 HEAP32[i2 >> 2] = i7;
 i6 = i7 & -13 | HEAP32[i4 >> 2] & 12;
 HEAP32[i2 >> 2] = i6;
 i7 = i6 & -17 | HEAP32[i4 >> 2] & 16;
 HEAP32[i2 >> 2] = i7;
 HEAP32[i2 >> 2] = i7 & -4065 | HEAP32[i4 >> 2] & 4064;
 return i1 | 0;
}
function __ZN7WebCore10WidthCache11addSlowCaseERKNS_7TextRunEf(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 72 | 0;
 HEAPF32[i5 >> 2] = d3;
 i10 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i10 | 0) == 1) {
  if ((HEAP32[i2 + 24 >> 2] & 4 | 0) == 0) {
   i11 = HEAP16[HEAP32[i2 >> 2] >> 1] | 0;
  } else {
   i11 = HEAPU8[HEAP32[i2 >> 2] | 0] | 0;
  }
  HEAP32[i7 >> 2] = i11 & 65535;
  __ZN3WTF9HashTableIjNS_12KeyValuePairIjfEENS_24KeyValuePairKeyExtractorIS2_EENS_7IntHashIjEENS_7HashMapIjfS6_NS_29UnsignedWithZeroKeyHashTraitsIjEENS_10HashTraitsIfEEE18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISD_S6_EEjRfEENS_18HashTableAddResultINS_17HashTableIteratorIjS2_S4_S6_SD_S9_EEEEOT0_OT1_(i6, i1 + 8 | 0, i7, i5);
  i12 = (HEAP32[i6 >> 2] | 0) + 4 | 0;
  i13 = HEAP8[i6 + 8 | 0] | 0;
 } else {
  HEAP16[i8 + 4 >> 1] = 16;
  if ((HEAP32[i2 + 24 >> 2] & 4 | 0) == 0) {
   __ZN7WebCore10WidthCache14SmallStringKeyC2IKtEEPT_t(i8, HEAP32[i2 >> 2] | 0, i10 & 65535);
  } else {
   __ZN7WebCore10WidthCache14SmallStringKeyC2IKhEEPT_t(i8, HEAP32[i2 >> 2] | 0, i10 & 65535);
  }
  __ZN3WTF9HashTableIN7WebCore10WidthCache14SmallStringKeyENS_12KeyValuePairIS3_fEENS_24KeyValuePairKeyExtractorIS5_EENS2_18SmallStringKeyHashENS_7HashMapIS3_fS8_NS2_24SmallStringKeyHashTraitsENS_10HashTraitsIfEEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISE_S8_EERKS3_RfEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S8_SE_SA_EEEEOT0_OT1_(i9, i1 + 28 | 0, i8, i5);
  i12 = (HEAP32[i9 >> 2] | 0) + 36 | 0;
  i13 = HEAP8[i9 + 8 | 0] | 0;
 }
 i9 = i1 | 0;
 if ((i13 & 1) == 0) {
  HEAP32[i9 >> 2] = -3;
  i14 = i12;
  STACKTOP = i4;
  return i14 | 0;
 }
 i13 = HEAP32[i9 >> 2] | 0;
 if ((i13 | 0) < 20) {
  i5 = i13 + 1 | 0;
  HEAP32[i9 >> 2] = i5;
  i15 = i5;
 } else {
  i15 = i13;
 }
 HEAP32[i1 + 4 >> 2] = i15;
 i15 = i1 + 8 | 0;
 i13 = i1 + 28 | 0;
 if (((HEAP32[i1 + 40 >> 2] | 0) + (HEAP32[i1 + 20 >> 2] | 0) | 0) < 5e5) {
  i14 = i12;
  STACKTOP = i4;
  return i14 | 0;
 }
 i12 = HEAP32[i15 >> 2] | 0;
 if ((i12 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i12);
  _memset(i15 | 0, 0, 16) | 0;
 }
 i15 = HEAP32[i13 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i14 = 0;
  STACKTOP = i4;
  return i14 | 0;
 }
 __ZN3WTF8fastFreeEPv(i15);
 _memset(i13 | 0, 0, 16) | 0;
 i14 = 0;
 STACKTOP = i4;
 return i14 | 0;
}
function __ZN3WTF7HashMapIjNS_6OwnPtrIN7WebCore20FontGlyphsCacheEntryEEENS_13AlreadyHashedENS_10HashTraitsIjEENS6_IS4_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIjNS_12KeyValuePairIjS4_EENS_24KeyValuePairKeyExtractorISD_EES5_NS9_18KeyValuePairTraitsES7_EESD_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = i1 | 0;
 i5 = i1 + 4 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) + (HEAP32[i5 >> 2] << 3) | 0;
 if ((HEAP32[i2 >> 2] | 0) == (i6 | 0)) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 | 0) == (i6 | 0)) {
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = HEAP32[i8 + 4 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i2 = HEAP32[i6 + 48 >> 2] | 0;
  i9 = i2 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore10FontGlyphsD2Ev(i2);
   __ZN3WTF8fastFreeEPv(i2);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  i10 = i6 + 20 | 0;
  i9 = HEAP32[i10 >> 2] | 0;
  i2 = i6 + 12 | 0;
  if ((i9 | 0) != 0) {
   i11 = HEAP32[i2 >> 2] | 0;
   i12 = i11 + (i9 << 2) | 0;
   i9 = i11;
   while (1) {
    i11 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i13 = i11 | 0;
      i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
      if ((i14 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       break;
      } else {
       HEAP32[i13 >> 2] = i14;
       break;
      }
     }
    } while (0);
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i12 | 0)) {
     break;
    }
   }
   HEAP32[i10 >> 2] = 0;
  }
  i10 = HEAP32[i2 >> 2] | 0;
  if (!((i6 + 24 | 0) == (i10 | 0) | (i10 | 0) == 0)) {
   HEAP32[i2 >> 2] = 0;
   HEAP32[i6 + 16 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i10);
  }
  __ZN3WTF8fastFreeEPv(i6);
 }
 HEAP32[i8 >> 2] = -1;
 i8 = i1 + 16 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 i8 = i1 + 12 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 HEAP32[i8 >> 2] = i1;
 i8 = HEAP32[i5 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i8 | 0) & (i8 | 0) > 8)) {
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 }
 __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6OwnPtrIN7WebCore20FontGlyphsCacheEntryEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_13AlreadyHashedENS_7HashMapIjS5_S9_NS_10HashTraitsIjEENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i4, (i8 | 0) / 2 & -1, 0) | 0;
 i7 = 1;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZNK7WebCore4FonteqERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 i4 = (i3 | 0) == 0;
 do {
  if (!i4) {
   if ((HEAP8[i3 + 110 | 0] & 8) == 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i6 = HEAP32[i2 + 24 >> 2] | 0;
 i7 = (i6 | 0) == 0;
 do {
  if (!i7) {
   if ((HEAP8[i6 + 110 | 0] & 8) == 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i8 = HEAP32[i1 >> 2] | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 L9 : do {
  if ((i8 | 0) != (i9 | 0)) {
   if ((i8 | 0) == 0 | (i9 | 0) == 0) {
    i5 = 0;
    return i5 | 0;
   }
   i10 = HEAP32[i8 - 4 >> 2] | 0;
   if ((i10 | 0) == (HEAP32[i9 - 4 >> 2] | 0)) {
    i11 = 0;
   } else {
    i5 = 0;
    return i5 | 0;
   }
   while (1) {
    if (i11 >>> 0 >= i10 >>> 0) {
     break L9;
    }
    if ((HEAP32[i8 + (i11 << 2) >> 2] | 0) == (HEAP32[i9 + (i11 << 2) >> 2] | 0)) {
     i11 = i11 + 1 | 0;
    } else {
     i5 = 0;
     break;
    }
   }
   return i5 | 0;
  }
 } while (0);
 if (+HEAPF32[i1 + 8 >> 2] != +HEAPF32[i2 + 8 >> 2]) {
  i5 = 0;
  return i5 | 0;
 }
 if (+HEAPF32[i1 + 12 >> 2] != +HEAPF32[i2 + 12 >> 2]) {
  i5 = 0;
  return i5 | 0;
 }
 i11 = HEAP32[i1 + 16 >> 2] | 0;
 i9 = HEAP32[i2 + 16 >> 2] | 0;
 i8 = i9 ^ i11;
 if ((i8 & 268435440 | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 if ((i11 >>> 28 | 0) != (i9 >>> 28 | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 i9 = HEAP32[i2 + 20 >> 2] ^ HEAP32[i1 + 20 >> 2];
 if ((i9 & 31 | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 if ((i8 & 15 | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 if ((i9 & 4064 | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i1 + 4 >> 2] | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 if (+HEAPF32[i1 + 28 >> 2] != +HEAPF32[i2 + 28 >> 2]) {
  i5 = 0;
  return i5 | 0;
 }
 if (+HEAPF32[i1 + 32 >> 2] != +HEAPF32[i2 + 32 >> 2]) {
  i5 = 0;
  return i5 | 0;
 }
 if ((i3 | 0) == (i6 | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 if (i4 | i7) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i3 + 48 >> 2] | 0) != (HEAP32[i6 + 48 >> 2] | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i3 + 100 >> 2] | 0) != (HEAP32[i6 + 100 >> 2] | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = (HEAP16[i3 + 108 >> 1] | 0) == (HEAP16[i6 + 108 >> 1] | 0);
 return i5 | 0;
}
function __ZN3WTF9HashTableIN7WebCore10WidthCache14SmallStringKeyENS_12KeyValuePairIS3_fEENS_24KeyValuePairKeyExtractorIS5_EENS2_18SmallStringKeyHashENS_7HashMapIS3_fS8_NS2_24SmallStringKeyHashTraitsENS_10HashTraitsIfEEE18KeyValuePairTraitsESA_E6rehashEiPS5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i1 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 i6 = __ZN3WTF10fastMallocEj(i2 * 40 & -1) | 0;
 if ((i2 | 0) > 0) {
  i10 = i4 + 8 | 0;
  i11 = 0;
  while (1) {
   _llvm_lifetime_start(30, 0, i10 | 0);
   HEAP16[i6 + (i11 * 40 & -1) + 4 >> 1] = 16;
   _memcpy(i6 + (i11 * 40 & -1) + 6 | 0, i10 | 0, 30) | 0;
   HEAPF32[i6 + (i11 * 40 & -1) + 36 >> 2] = Infinity;
   _llvm_lifetime_end(30, 0, i10 | 0);
   i11 = i11 + 1 | 0;
   if ((i11 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i8 >> 2] = i6;
 if ((i7 | 0) == 0) {
  i12 = 0;
  i13 = i1 + 16 | 0;
  HEAP32[i13 >> 2] = 0;
  i14 = i9;
  __ZN3WTF8fastFreeEPv(i14);
  STACKTOP = i4;
  return i12 | 0;
 }
 i6 = i5 | 0;
 i8 = 0;
 i2 = 0;
 while (1) {
  i11 = i9 + (i8 * 40 & -1) | 0;
  if (((HEAP16[i9 + (i8 * 40 & -1) + 4 >> 1] | 0) - 16 & 65535) >>> 0 < 2 >>> 0) {
   i15 = i2;
  } else {
   __ZN3WTF9HashTableIN7WebCore10WidthCache14SmallStringKeyENS_12KeyValuePairIS3_fEENS_24KeyValuePairKeyExtractorIS5_EENS2_18SmallStringKeyHashENS_7HashMapIS3_fS8_NS2_24SmallStringKeyHashTraitsENS_10HashTraitsIfEEE18KeyValuePairTraitsESA_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EES3_EENSt3__14pairIPS5_bEERKT0_(i5, i1, i11 | 0);
   i10 = HEAP32[i6 >> 2] | 0;
   _memcpy(i10 | 0, i11 | 0, 40) | 0;
   i15 = (i11 | 0) == (i3 | 0) ? i10 : i2;
  }
  i10 = i8 + 1 | 0;
  if ((i10 | 0) == (i7 | 0)) {
   i12 = i15;
   break;
  } else {
   i8 = i10;
   i2 = i15;
  }
 }
 i13 = i1 + 16 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i9;
 __ZN3WTF8fastFreeEPv(i14);
 STACKTOP = i4;
 return i12 | 0;
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
function __ZN3WTF7HashMapIjNS_6OwnPtrIN7WebCore20FontGlyphsCacheEntryEEENS_13AlreadyHashedENS_10HashTraitsIjEENS6_IS4_EEE6removeERKj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i1 >> 2] | 0;
 L1 : do {
  if ((i6 | 0) == 0) {
   i7 = HEAP32[i1 + 4 >> 2] << 3 | 0;
   i8 = i7;
   i9 = i7;
  } else {
   i7 = HEAP32[i1 + 8 >> 2] | 0;
   i10 = HEAP32[i2 >> 2] | 0;
   i11 = i10 & i7;
   i12 = i6 + (i11 << 3) | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   L4 : do {
    if ((i13 | 0) == (i10 | 0)) {
     i14 = i12;
     i15 = 7;
    } else {
     i16 = (i10 >>> 23) + ~i10 | 0;
     i17 = i16 << 12 ^ i16;
     i16 = i17 >>> 7 ^ i17;
     i17 = i16 << 2 ^ i16;
     i16 = i17 >>> 20 ^ i17 | 1;
     i17 = 0;
     i18 = i11;
     i19 = i13;
     while (1) {
      if ((i19 | 0) == 0) {
       break L4;
      }
      i20 = (i17 | 0) == 0 ? i16 : i17;
      i21 = i20 + i18 & i7;
      i22 = i6 + (i21 << 3) | 0;
      i23 = HEAP32[i22 >> 2] | 0;
      if ((i23 | 0) == (i10 | 0)) {
       i14 = i22;
       i15 = 7;
       break;
      } else {
       i17 = i20;
       i18 = i21;
       i19 = i23;
      }
     }
    }
   } while (0);
   do {
    if ((i15 | 0) == 7) {
     if ((i14 | 0) == 0) {
      break;
     }
     i8 = i14;
     i9 = i6 + (HEAP32[i1 + 4 >> 2] << 3) | 0;
     break L1;
    }
   } while (0);
   i10 = i6 + (HEAP32[i1 + 4 >> 2] << 3) | 0;
   i8 = i10;
   i9 = i10;
  }
 } while (0);
 HEAP32[i4 >> 2] = i8;
 HEAP32[i4 + 4 >> 2] = i9;
 i9 = __ZN3WTF7HashMapIjNS_6OwnPtrIN7WebCore20FontGlyphsCacheEntryEEENS_13AlreadyHashedENS_10HashTraitsIjEENS6_IS4_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIjNS_12KeyValuePairIjS4_EENS_24KeyValuePairKeyExtractorISD_EES5_NS9_18KeyValuePairTraitsES7_EESD_EE(i1, i5) | 0;
 STACKTOP = i3;
 return i9 | 0;
}
function __ZN7WebCore15FontDescriptionC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 - 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAPF32[i1 + 8 >> 2] = +HEAPF32[i2 + 8 >> 2];
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[i2 + 12 >> 2];
 i3 = i2 + 16 | 0;
 i4 = i1 + 16 | 0;
 i5 = HEAP32[i4 >> 2] & -2 | HEAP32[i3 >> 2] & 1;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -3 | HEAP32[i3 >> 2] & 2;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -13 | HEAP32[i3 >> 2] & 12;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -17 | HEAP32[i3 >> 2] & 16;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -33 | HEAP32[i3 >> 2] & 32;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -65 | HEAP32[i3 >> 2] & 64;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -32641 | HEAP32[i3 >> 2] & 32640;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -229377 | HEAP32[i3 >> 2] & 229376;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -262145 | HEAP32[i3 >> 2] & 262144;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -524289 | HEAP32[i3 >> 2] & 524288;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -3145729 | HEAP32[i3 >> 2] & 3145728;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -12582913 | HEAP32[i3 >> 2] & 12582912;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -50331649 | HEAP32[i3 >> 2] & 50331648;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -201326593 | HEAP32[i3 >> 2] & 201326592;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 >> 2] = i6 & 268435455 | HEAP32[i3 >> 2] & -268435456;
 i3 = i2 + 20 | 0;
 i2 = i1 + 20 | 0;
 i1 = HEAP32[i2 >> 2] & -4 | HEAP32[i3 >> 2] & 3;
 HEAP32[i2 >> 2] = i1;
 i6 = i1 & -13 | HEAP32[i3 >> 2] & 12;
 HEAP32[i2 >> 2] = i6;
 i1 = i6 & -17 | HEAP32[i3 >> 2] & 16;
 HEAP32[i2 >> 2] = i1;
 HEAP32[i2 >> 2] = i1 & -4065 | HEAP32[i3 >> 2] & 4064;
 return;
}
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6OwnPtrIN7WebCore20FontGlyphsCacheEntryEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_13AlreadyHashedENS_7HashMapIjS5_S9_NS_10HashTraitsIjEENSB_IS5_EEE18KeyValuePairTraitsESC_E15deallocateTableEPS6_i(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 if ((i2 | 0) > 0) {
  i3 = 0;
 } else {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 while (1) {
  do {
   if ((HEAP32[i1 + (i3 << 3) >> 2] | 0) != -1) {
    i5 = HEAP32[i1 + (i3 << 3) + 4 >> 2] | 0;
    if ((i5 | 0) == 0) {
     break;
    }
    i6 = HEAP32[i5 + 48 >> 2] | 0;
    i7 = i6 | 0;
    i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    if ((i8 | 0) == 0) {
     __ZN7WebCore10FontGlyphsD2Ev(i6);
     __ZN3WTF8fastFreeEPv(i6);
    } else {
     HEAP32[i7 >> 2] = i8;
    }
    i8 = i5 + 20 | 0;
    i7 = HEAP32[i8 >> 2] | 0;
    i6 = i5 + 12 | 0;
    if ((i7 | 0) != 0) {
     i9 = HEAP32[i6 >> 2] | 0;
     i10 = i9 + (i7 << 2) | 0;
     i7 = i9;
     while (1) {
      i9 = HEAP32[i7 >> 2] | 0;
      do {
       if ((i9 | 0) != 0) {
        i11 = i9 | 0;
        i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
        if ((i12 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i9);
         break;
        } else {
         HEAP32[i11 >> 2] = i12;
         break;
        }
       }
      } while (0);
      i7 = i7 + 4 | 0;
      if ((i7 | 0) == (i10 | 0)) {
       break;
      }
     }
     HEAP32[i8 >> 2] = 0;
    }
    i10 = HEAP32[i6 >> 2] | 0;
    if (!((i5 + 24 | 0) == (i10 | 0) | (i10 | 0) == 0)) {
     HEAP32[i6 >> 2] = 0;
     HEAP32[i5 + 16 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i10);
    }
    __ZN3WTF8fastFreeEPv(i5);
   }
  } while (0);
  i3 = i3 + 1 | 0;
  if ((i3 | 0) >= (i2 | 0)) {
   break;
  }
 }
 i4 = i1;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN3WTF9HashTableIN7WebCore10WidthCache14SmallStringKeyENS_12KeyValuePairIS3_fEENS_24KeyValuePairKeyExtractorIS5_EENS2_18SmallStringKeyHashENS_7HashMapIS3_fS8_NS2_24SmallStringKeyHashTraitsENS_10HashTraitsIfEEE18KeyValuePairTraitsESA_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EES3_EENSt3__14pairIPS5_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i6 = i2 & i5;
 i7 = i4 + (i6 * 40 & -1) | 0;
 i8 = HEAP16[i4 + (i6 * 40 & -1) + 4 >> 1] | 0;
 L1 : do {
  if (i8 << 16 >> 16 == 16) {
   i9 = 0;
   i10 = i7;
  } else {
   i11 = HEAP16[i3 + 4 >> 1] | 0;
   i12 = i3 + 6 | 0;
   i13 = (i2 >>> 23) + ~i2 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i6;
   i17 = i7;
   i18 = i8;
   while (1) {
    if (i18 << 16 >> 16 == i11 << 16 >> 16) {
     if ((_memcmp(i4 + (i16 * 40 & -1) + 6 | 0, i12 | 0, (i11 & 65535) << 1 | 0) | 0) == 0) {
      break;
     }
    }
    i19 = i18 << 16 >> 16 == 17 ? i17 : i14;
    i20 = (i15 | 0) == 0 ? i13 : i15;
    i21 = i20 + i16 & i5;
    i22 = i4 + (i21 * 40 & -1) | 0;
    i23 = HEAP16[i4 + (i21 * 40 & -1) + 4 >> 1] | 0;
    if (i23 << 16 >> 16 == 16) {
     i9 = i19;
     i10 = i22;
     break L1;
    } else {
     i14 = i19;
     i15 = i20;
     i16 = i21;
     i17 = i22;
     i18 = i23;
    }
   }
   HEAP32[i1 >> 2] = i17;
   HEAP8[i1 + 4 | 0] = 1;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = (i9 | 0) != 0 ? i9 : i10;
 HEAP8[i1 + 4 | 0] = 0;
 return;
}
function __ZN7WebCore16clearWidthCachesEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if (HEAP8[H_BASE + 408 | 0] | 0) {
  i1 = HEAP32[H_BASE + 448 >> 2] | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(20) | 0;
  i3 = i2;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 448 >> 2] = i3;
  HEAP8[H_BASE + 408 | 0] = 1;
  i1 = i3;
 }
 i3 = HEAP32[i1 >> 2] | 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i3 + (i2 << 3) | 0;
 L5 : do {
  if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
   i5 = i4;
  } else {
   if ((i2 | 0) == 0) {
    i5 = i3;
    break;
   } else {
    i6 = i3;
   }
   while (1) {
    i7 = HEAP32[i6 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i5 = i6;
     break L5;
    }
    i7 = i6 + 8 | 0;
    if ((i7 | 0) == (i4 | 0)) {
     i5 = i4;
     break;
    } else {
     i6 = i7;
    }
   }
  }
 } while (0);
 i6 = i3 + (i2 << 3) | 0;
 if ((i5 | 0) == (i6 | 0)) {
  return;
 } else {
  i8 = i5;
 }
 while (1) {
  i5 = HEAP32[(HEAP32[i8 + 4 >> 2] | 0) + 48 >> 2] | 0;
  i2 = i5 + 60 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i3);
   _memset(i2 | 0, 0, 16) | 0;
  }
  i2 = i5 + 80 | 0;
  i5 = HEAP32[i2 >> 2] | 0;
  if ((i5 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i5);
   _memset(i2 | 0, 0, 16) | 0;
  }
  i2 = i8 + 8 | 0;
  L21 : do {
   if ((i2 | 0) == (i4 | 0)) {
    i9 = i4;
   } else {
    i5 = i2;
    while (1) {
     i3 = HEAP32[i5 >> 2] | 0;
     if (!((i3 | 0) == (-1 | 0) | (i3 | 0) == 0)) {
      i9 = i5;
      break L21;
     }
     i3 = i5 + 8 | 0;
     if ((i3 | 0) == (i4 | 0)) {
      i9 = i4;
      break;
     } else {
      i5 = i3;
     }
    }
   }
  } while (0);
  if ((i9 | 0) == (i6 | 0)) {
   break;
  } else {
   i8 = i9;
  }
 }
 return;
}
function __ZNK7WebCore4Font8drawTextEPNS_15GraphicsContextERKNS_7TextRunERKNS_10FloatPointEiiNS0_24CustomFontNotReadyActionE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, d9 = +0, i10 = 0, i11 = 0, i12 = 0;
 i8 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((HEAP8[i8 + 110 | 0] & 8) != 0 & (i7 | 0) == 0) {
    d9 = +0;
   } else {
    break;
   }
   return +d9;
  }
 } while (0);
 if ((i6 | 0) == -1) {
  i10 = HEAP32[i3 + 8 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[H_BASE + 472 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   if ((HEAP32[i3 + 32 >> 2] | 0) != 0) {
    i11 = 14;
    break;
   }
   i7 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i7 | 0) != 0) {
    if ((HEAP32[i7 + 12 >> 2] | 0) != 0) {
     i11 = 15;
     break;
    }
   }
   i7 = HEAP32[i3 + 8 >> 2] | 0;
   if ((i7 | 0) > 1) {
    if ((HEAP32[i1 + 36 >> 2] & 768 | 0) != 0) {
     i11 = 15;
     break;
    }
   }
   if ((HEAP32[i3 + 24 >> 2] & 68 | 0) != 64) {
    i11 = 14;
    break;
   }
   i12 = __ZN7WebCore4Font22characterRangeCodePathEPKtj(HEAP32[i3 >> 2] | 0, i7) | 0;
   i11 = 13;
  } else {
   i12 = i6;
   i11 = 13;
  }
 } while (0);
 if ((i11 | 0) == 13) {
  if ((i12 | 0) == 2) {
   i11 = 15;
  } else {
   i11 = 14;
  }
 }
 if ((i11 | 0) == 14) {
  d9 = +__ZNK7WebCore4Font14drawSimpleTextEPNS_15GraphicsContextERKNS_7TextRunERKNS_10FloatPointEii(i1, i2, i3, i4, i5, i10);
  return +d9;
 } else if ((i11 | 0) == 15) {
  d9 = +__ZNK7WebCore4Font15drawComplexTextEPNS_15GraphicsContextERKNS_7TextRunERKNS_10FloatPointEii(i1, i2, i3, i4, i5, i10);
  return +d9;
 }
 return +0;
}
function __ZNK7WebCore4Font17drawEmphasisMarksEPNS_15GraphicsContextERKNS_7TextRunERKN3WTF12AtomicStringERKNS_10FloatPointEii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i8 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((HEAP8[i8 + 110 | 0] & 8) == 0) {
    break;
   }
   return;
  }
 } while (0);
 if ((i7 | 0) < 0) {
  i9 = HEAP32[i3 + 8 >> 2] | 0;
 } else {
  i9 = i7;
 }
 i7 = HEAP32[H_BASE + 472 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   if ((HEAP32[i3 + 32 >> 2] | 0) != 0) {
    i10 = 14;
    break;
   }
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i8 | 0) != 0) {
    if ((HEAP32[i8 + 12 >> 2] | 0) != 0) {
     i10 = 15;
     break;
    }
   }
   i8 = HEAP32[i3 + 8 >> 2] | 0;
   if ((i8 | 0) > 1) {
    if ((HEAP32[i1 + 36 >> 2] & 768 | 0) != 0) {
     i10 = 15;
     break;
    }
   }
   if ((HEAP32[i3 + 24 >> 2] & 68 | 0) != 64) {
    i10 = 14;
    break;
   }
   i11 = __ZN7WebCore4Font22characterRangeCodePathEPKtj(HEAP32[i3 >> 2] | 0, i8) | 0;
   i10 = 13;
  } else {
   i11 = i7;
   i10 = 13;
  }
 } while (0);
 if ((i10 | 0) == 13) {
  if ((i11 | 0) == 2) {
   i10 = 15;
  } else {
   i10 = 14;
  }
 }
 if ((i10 | 0) == 14) {
  __ZNK7WebCore4Font30drawEmphasisMarksForSimpleTextEPNS_15GraphicsContextERKNS_7TextRunERKN3WTF12AtomicStringERKNS_10FloatPointEii(i1, i2, i3, i4, i5, i6, i9);
  return;
 } else if ((i10 | 0) == 15) {
  __ZNK7WebCore4Font31drawEmphasisMarksForComplexTextEPNS_15GraphicsContextERKNS_7TextRunERKN3WTF12AtomicStringERKNS_10FloatPointEii(i1, i2, i3, i4, i5, i6, i9);
  return;
 }
}
function __ZN7WebCore10FontGlyphsD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 __ZN7WebCore10FontGlyphs15releaseFontDataEv(i1);
 i2 = HEAP32[i1 + 80 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 48 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 12 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 4 | 0;
 if ((i5 | 0) != 0) {
  i4 = HEAP32[i3 >> 2] | 0;
  i6 = i4 + (i5 << 2) | 0;
  i5 = i4;
  while (1) {
   i4 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i7 = i4 + 4 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 3](i9);
    }
   } while (0);
   i5 = i5 + 4 | 0;
   if ((i5 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i1 + 16 | 0) == (i2 | 0) | (i2 | 0) == 0) {
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore4FontC2ERKNS_16FontPlatformDataEbNS_17FontSmoothingModeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = __ZN3WTF10fastMallocEj(12) | 0;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = i5 + 8;
 HEAP32[i5 >> 2] = 1;
 HEAP32[(HEAP32[i6 >> 2] | 0) - 4 >> 2] = 1;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = i5 + (HEAP32[i5 - 4 >> 2] << 2) | 0;
 }
 _memset(i5 | 0, 0, i7 - i5 | 0) | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAPF32[i1 + 8 >> 2] = +0;
 HEAPF32[i1 + 12 >> 2] = +0;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = 384;
 i7 = i1 + 20 | 0;
 HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & -4096;
 i6 = __ZN3WTF10fastMallocEj(112) | 0;
 __ZN7WebCore10FontGlyphsC1ERKNS_16FontPlatformDataE(i6, i2);
 HEAP32[i1 + 24 >> 2] = i6;
 HEAPF32[i1 + 28 >> 2] = +0;
 HEAPF32[i1 + 32 >> 2] = +0;
 i6 = i1 + 36 | 0;
 HEAP8[i6] = 0;
 i1 = HEAP32[i7 >> 2] | 0;
 i2 = i1 >>> 2 & 3;
 i8 = HEAP32[H_BASE + 464 >> 2] | 0;
 if ((i2 | 0) == 1) {
  i9 = i8 & -4;
 } else if ((i2 | 0) == 2 | (i2 | 0) == 3) {
  i9 = i8 | 3;
 } else {
  i9 = i8;
 }
 i8 = HEAP32[i5 >> 2] | 0;
 i2 = i8 >>> 20 & 3;
 if ((i2 | 0) == 2) {
  i10 = i9 & -2;
 } else if ((i2 | 0) == 1) {
  i10 = i9 | 1;
 } else {
  i10 = i9;
 }
 i9 = i8 >>> 22 & 3;
 if ((i9 | 0) == 1) {
  i11 = i10 & -3;
 } else if ((i9 | 0) == 2) {
  i11 = i10 | 2;
 } else {
  i11 = i10;
 }
 i10 = i6;
 HEAP32[i10 >> 2] = HEAP32[i10 >> 2] & -769 | i11 << 8 & 768;
 HEAP32[i5 >> 2] = i8 & -262145 | (i3 & 1) << 18;
 HEAP32[i7 >> 2] = i1 & -4 | i4 & 3;
 return;
}
function __ZN7WebCore4FontC1ERKNS_16FontPlatformDataEbNS_17FontSmoothingModeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = __ZN3WTF10fastMallocEj(12) | 0;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = i5 + 8;
 HEAP32[i5 >> 2] = 1;
 HEAP32[(HEAP32[i6 >> 2] | 0) - 4 >> 2] = 1;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = i5 + (HEAP32[i5 - 4 >> 2] << 2) | 0;
 }
 _memset(i5 | 0, 0, i7 - i5 | 0) | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAPF32[i1 + 8 >> 2] = +0;
 HEAPF32[i1 + 12 >> 2] = +0;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = 384;
 i7 = i1 + 20 | 0;
 HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & -4096;
 i6 = __ZN3WTF10fastMallocEj(112) | 0;
 __ZN7WebCore10FontGlyphsC1ERKNS_16FontPlatformDataE(i6, i2);
 HEAP32[i1 + 24 >> 2] = i6;
 HEAPF32[i1 + 28 >> 2] = +0;
 HEAPF32[i1 + 32 >> 2] = +0;
 i6 = i1 + 36 | 0;
 HEAP8[i6] = 0;
 i1 = HEAP32[i7 >> 2] | 0;
 i2 = i1 >>> 2 & 3;
 i8 = HEAP32[H_BASE + 464 >> 2] | 0;
 if ((i2 | 0) == 1) {
  i9 = i8 & -4;
 } else if ((i2 | 0) == 2 | (i2 | 0) == 3) {
  i9 = i8 | 3;
 } else {
  i9 = i8;
 }
 i8 = HEAP32[i5 >> 2] | 0;
 i2 = i8 >>> 20 & 3;
 if ((i2 | 0) == 2) {
  i10 = i9 & -2;
 } else if ((i2 | 0) == 1) {
  i10 = i9 | 1;
 } else {
  i10 = i9;
 }
 i9 = i8 >>> 22 & 3;
 if ((i9 | 0) == 1) {
  i11 = i10 & -3;
 } else if ((i9 | 0) == 2) {
  i11 = i10 | 2;
 } else {
  i11 = i10;
 }
 i10 = i6;
 HEAP32[i10 >> 2] = HEAP32[i10 >> 2] & -769 | i11 << 8 & 768;
 HEAP32[i5 >> 2] = i8 & -262145 | (i3 & 1) << 18;
 HEAP32[i7 >> 2] = i1 & -4 | i4 & 3;
 return;
}
function __ZNK7WebCore4Font20selectionRectForTextERKNS_7TextRunERKNS_10FloatPointEiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if ((i7 | 0) == -1) {
  i8 = HEAP32[i3 + 8 >> 2] | 0;
 } else {
  i8 = i7;
 }
 i7 = HEAP32[H_BASE + 472 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   if ((HEAP32[i3 + 32 >> 2] | 0) != 0) {
    i9 = 12;
    break;
   }
   i10 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i10 | 0) != 0) {
    if ((HEAP32[i10 + 12 >> 2] | 0) != 0) {
     i9 = 13;
     break;
    }
   }
   i10 = HEAP32[i3 + 8 >> 2] | 0;
   if ((i10 | 0) > 1) {
    if ((HEAP32[i2 + 36 >> 2] & 768 | 0) != 0) {
     i9 = 13;
     break;
    }
   }
   if ((HEAP32[i3 + 24 >> 2] & 68 | 0) != 64) {
    i9 = 12;
    break;
   }
   i11 = __ZN7WebCore4Font22characterRangeCodePathEPKtj(HEAP32[i3 >> 2] | 0, i10) | 0;
   i9 = 11;
  } else {
   i11 = i7;
   i9 = 11;
  }
 } while (0);
 if ((i9 | 0) == 11) {
  if ((i11 | 0) == 2) {
   i9 = 13;
  } else {
   i9 = 12;
  }
 }
 if ((i9 | 0) == 12) {
  __ZNK7WebCore4Font26selectionRectForSimpleTextERKNS_7TextRunERKNS_10FloatPointEiii(i1, i2, i3, i4, i5, i6, i8);
  return;
 } else if ((i9 | 0) == 13) {
  __ZNK7WebCore4Font27selectionRectForComplexTextERKNS_7TextRunERKNS_10FloatPointEiii(i1, i2, i3, i4, i5, i6, i8);
  return;
 }
}
function __ZN7WebCore10WidthCache14SmallStringKeyC2IKtEEPT_t(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 HEAP16[i1 + 4 >> 1] = i3;
 i4 = (i3 & 1) == 0;
 i5 = (i3 & 65535) >>> 1;
 if (i5 << 16 >> 16 == 0) {
  i6 = -1640531527;
  i7 = 0;
 } else {
  i3 = (i5 - 1 & 65535) << 1;
  i8 = -1640531527;
  i9 = i5;
  i5 = 0;
  while (1) {
   i10 = i9 - 1 & 65535;
   i11 = i2 + (i5 << 1) | 0;
   HEAP16[i1 + 6 + (i5 << 1) >> 1] = HEAP16[i11 >> 1] | 0;
   i12 = i5 | 1;
   i13 = i2 + (i12 << 1) | 0;
   HEAP16[i1 + 6 + (i12 << 1) >> 1] = HEAP16[i13 >> 1] | 0;
   i12 = (HEAPU16[i11 >> 1] | 0) + i8 | 0;
   i11 = (HEAPU16[i13 >> 1] | 0) << 11 ^ i12 ^ i12 << 16;
   i14 = (i11 >>> 11) + i11 | 0;
   if (i10 << 16 >> 16 == 0) {
    break;
   } else {
    i8 = i14;
    i9 = i10;
    i5 = i5 + 2 | 0;
   }
  }
  i6 = i14;
  i7 = i3 + 2 | 0;
 }
 if (i4) {
  i15 = i6;
 } else {
  i4 = i2 + (i7 << 1) | 0;
  HEAP16[i1 + 6 + (i7 << 1) >> 1] = HEAP16[i4 >> 1] | 0;
  i7 = (HEAPU16[i4 >> 1] | 0) + i6 | 0;
  i6 = i7 << 11 ^ i7;
  i15 = (i6 >>> 17) + i6 | 0;
 }
 i6 = i15 << 3 ^ i15;
 i15 = (i6 >>> 5) + i6 | 0;
 i6 = i15 << 2 ^ i15;
 i15 = (i6 >>> 15) + i6 | 0;
 i6 = i15 << 10;
 HEAP32[i1 >> 2] = (i6 | 0) == (i15 | 0) ? -2147483648 : i6 ^ i15;
 return;
}
function __ZNK7WebCore4Font5widthERKNS_7TextRunERiRN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, d8 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i2 + 32 >> 2] | 0;
 if ((i7 | 0) != 0) {
  d8 = +FUNCTION_TABLE_fiiiii[HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] & 1](i7, i1, i2, i3, i4);
  STACKTOP = i5;
  return +d8;
 }
 HEAP32[i3 >> 2] = HEAP32[i2 + 8 >> 2];
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 424 | 0);
 i3 = i6 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i7 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i7;
    break;
   }
  }
 } while (0);
 d8 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i1, i2, 0, 0);
 STACKTOP = i5;
 return +d8;
}
function __ZN7WebCore10WidthCache14SmallStringKeyC2IKhEEPT_t(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 HEAP16[i1 + 4 >> 1] = i3;
 i4 = (i3 & 1) == 0;
 i5 = (i3 & 65535) >>> 1;
 if (i5 << 16 >> 16 == 0) {
  i6 = -1640531527;
  i7 = 0;
 } else {
  i3 = (i5 - 1 & 65535) << 1;
  i8 = -1640531527;
  i9 = i5;
  i5 = 0;
  while (1) {
   i10 = i9 - 1 & 65535;
   i11 = i2 + i5 | 0;
   HEAP16[i1 + 6 + (i5 << 1) >> 1] = HEAPU8[i11] | 0;
   i12 = i5 | 1;
   i13 = i2 + i12 | 0;
   HEAP16[i1 + 6 + (i12 << 1) >> 1] = HEAPU8[i13] | 0;
   i12 = (HEAPU8[i11] | 0) + i8 | 0;
   i11 = (HEAPU8[i13] | 0) << 11 ^ i12 ^ i12 << 16;
   i14 = (i11 >>> 11) + i11 | 0;
   if (i10 << 16 >> 16 == 0) {
    break;
   } else {
    i8 = i14;
    i9 = i10;
    i5 = i5 + 2 | 0;
   }
  }
  i6 = i14;
  i7 = i3 + 2 | 0;
 }
 if (i4) {
  i15 = i6;
 } else {
  i4 = i2 + i7 | 0;
  HEAP16[i1 + 6 + (i7 << 1) >> 1] = HEAPU8[i4] | 0;
  i7 = (HEAPU8[i4] | 0) + i6 | 0;
  i6 = i7 << 11 ^ i7;
  i15 = (i6 >>> 17) + i6 | 0;
 }
 i6 = i15 << 3 ^ i15;
 i15 = (i6 >>> 5) + i6 | 0;
 i6 = i15 << 2 ^ i15;
 i15 = (i6 >>> 15) + i6 | 0;
 i6 = i15 << 10;
 HEAP32[i1 >> 2] = (i6 | 0) == (i15 | 0) ? -2147483648 : i6 ^ i15;
 return;
}
function __ZN7WebCore4Font25expansionOpportunityCountEPKhjNS_13TextDirectionERb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = (i2 | 0) == 0;
 if ((i3 | 0) == 1) {
  if (i5) {
   i6 = 0;
   return i6 | 0;
  } else {
   i7 = 0;
   i8 = 0;
  }
  while (1) {
   i3 = HEAPU8[i1 + i8 | 0] | 0;
   if ((i3 << 16 >> 16 | 0) == 32 | (i3 << 16 >> 16 | 0) == 9 | (i3 << 16 >> 16 | 0) == 10 | (i3 << 16 >> 16 | 0) == 160) {
    i9 = 1;
   } else {
    i9 = 0;
   }
   i3 = (i9 & 1) + i7 | 0;
   HEAP8[i4] = i9 & 1;
   i10 = i8 + 1 | 0;
   if (i10 >>> 0 < i2 >>> 0) {
    i7 = i3;
    i8 = i10;
   } else {
    i6 = i3;
    break;
   }
  }
  return i6 | 0;
 } else {
  if (i5) {
   i6 = 0;
   return i6 | 0;
  } else {
   i11 = 0;
   i12 = i2;
  }
  while (1) {
   i2 = i12 - 1 | 0;
   i5 = HEAPU8[i1 + i2 | 0] | 0;
   if ((i5 << 16 >> 16 | 0) == 32 | (i5 << 16 >> 16 | 0) == 9 | (i5 << 16 >> 16 | 0) == 10 | (i5 << 16 >> 16 | 0) == 160) {
    i13 = 1;
   } else {
    i13 = 0;
   }
   i5 = (i13 & 1) + i11 | 0;
   HEAP8[i4] = i13 & 1;
   if ((i2 | 0) == 0) {
    i6 = i5;
    break;
   } else {
    i11 = i5;
    i12 = i2;
   }
  }
  return i6 | 0;
 }
 return 0;
}
function __ZN3WTF6RefPtrIN7WebCore19FontFeatureSettingsEEaSERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = i1 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i4 | 0) == 0) {
  return i1 | 0;
 }
 i3 = i4 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = i2;
  return i1 | 0;
 }
 i2 = i4 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i5 = i4 + 4 | 0;
 if ((i3 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 + (i3 << 3) | 0;
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
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
   i3 = i3 + 8 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i4 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF8fastFreeEPv(i4);
 return i1 | 0;
}
function __ZNK7WebCore4Font17offsetForPositionERKNS_7TextRunEfb(i1, i2, d3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = HEAP32[H_BASE + 472 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   if ((HEAP32[i2 + 32 >> 2] | 0) != 0) {
    i6 = 10;
    break;
   }
   i7 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i7 | 0) != 0) {
    if ((HEAP32[i7 + 12 >> 2] | 0) != 0) {
     i6 = 11;
     break;
    }
   }
   i7 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i7 | 0) > 1) {
    if ((HEAP32[i1 + 36 >> 2] & 768 | 0) != 0) {
     i6 = 11;
     break;
    }
   }
   if ((HEAP32[i2 + 24 >> 2] & 68 | 0) != 64) {
    i6 = 10;
    break;
   }
   i8 = __ZN7WebCore4Font22characterRangeCodePathEPKtj(HEAP32[i2 >> 2] | 0, i7) | 0;
   i6 = 9;
  } else {
   i8 = i5;
   i6 = 9;
  }
 } while (0);
 if ((i6 | 0) == 9) {
  if ((i8 | 0) == 2) {
   i6 = 11;
  } else {
   i6 = 10;
  }
 }
 if ((i6 | 0) == 11) {
  i9 = __ZNK7WebCore4Font31offsetForPositionForComplexTextERKNS_7TextRunEfb(i1, i2, d3, i4) | 0;
  return i9 | 0;
 } else if ((i6 | 0) == 10) {
  i9 = __ZNK7WebCore4Font30offsetForPositionForSimpleTextERKNS_7TextRunEfb(i1, i2, d3, i4) | 0;
  return i9 | 0;
 }
 return 0;
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
function __ZN7WebCore4FontC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 __ZN7WebCore15FontDescriptionC2ERKS0_(i1 | 0, i2 | 0);
 i3 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAPF32[i1 + 28 >> 2] = +HEAPF32[i2 + 28 >> 2];
 HEAPF32[i1 + 32 >> 2] = +HEAPF32[i2 + 32 >> 2];
 i4 = i1 + 36 | 0;
 HEAP8[i4] = HEAP8[i2 + 36 | 0] & 1;
 i2 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2 & 3;
 i3 = HEAP32[H_BASE + 464 >> 2] | 0;
 if ((i2 | 0) == 1) {
  i5 = i3 & -4;
 } else if ((i2 | 0) == 2 | (i2 | 0) == 3) {
  i5 = i3 | 3;
 } else {
  i5 = i3;
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 i1 = i3 >>> 20 & 3;
 if ((i1 | 0) == 2) {
  i6 = i5 & -2;
 } else if ((i1 | 0) == 1) {
  i6 = i5 | 1;
 } else {
  i6 = i5;
 }
 i5 = i3 >>> 22 & 3;
 if ((i5 | 0) == 1) {
  i7 = i6 & -3;
 } else if ((i5 | 0) == 2) {
  i7 = i6 | 2;
 } else {
  i7 = i6;
 }
 i6 = i4;
 HEAP32[i6 >> 2] = HEAP32[i6 >> 2] & -769 | i7 << 8 & 768;
 return;
}
function __ZN7WebCore4FontC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 __ZN7WebCore15FontDescriptionC2ERKS0_(i1 | 0, i2 | 0);
 i3 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAPF32[i1 + 28 >> 2] = +HEAPF32[i2 + 28 >> 2];
 HEAPF32[i1 + 32 >> 2] = +HEAPF32[i2 + 32 >> 2];
 i4 = i1 + 36 | 0;
 HEAP8[i4] = HEAP8[i2 + 36 | 0] & 1;
 i2 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2 & 3;
 i3 = HEAP32[H_BASE + 464 >> 2] | 0;
 if ((i2 | 0) == 1) {
  i5 = i3 & -4;
 } else if ((i2 | 0) == 2 | (i2 | 0) == 3) {
  i5 = i3 | 3;
 } else {
  i5 = i3;
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 i1 = i3 >>> 20 & 3;
 if ((i1 | 0) == 2) {
  i6 = i5 & -2;
 } else if ((i1 | 0) == 1) {
  i6 = i5 | 1;
 } else {
  i6 = i5;
 }
 i5 = i3 >>> 22 & 3;
 if ((i5 | 0) == 1) {
  i7 = i6 & -3;
 } else if ((i5 | 0) == 2) {
  i7 = i6 | 2;
 } else {
  i7 = i6;
 }
 i6 = i4;
 HEAP32[i6 >> 2] = HEAP32[i6 >> 2] & -769 | i7 << 8 & 768;
 return;
}
function __ZN7WebCore4FontC2ERKNS_15FontDescriptionEff(i1, i2, d3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 __ZN7WebCore15FontDescriptionC2ERKS0_(i1 | 0, i2);
 HEAP32[i1 + 24 >> 2] = 0;
 HEAPF32[i1 + 28 >> 2] = d3;
 HEAPF32[i1 + 32 >> 2] = d4;
 i5 = i1 + 36 | 0;
 HEAP8[i5] = (__ZN7WebCoreL30useBackslashAsYenSignForFamilyERKN3WTF12AtomicStringE(HEAP32[i2 >> 2] | 0) | 0) & 1;
 i2 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2 & 3;
 i6 = HEAP32[H_BASE + 464 >> 2] | 0;
 if ((i2 | 0) == 1) {
  i7 = i6 & -4;
 } else if ((i2 | 0) == 2 | (i2 | 0) == 3) {
  i7 = i6 | 3;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i1 + 16 >> 2] | 0;
 i1 = i6 >>> 20 & 3;
 if ((i1 | 0) == 2) {
  i8 = i7 & -2;
 } else if ((i1 | 0) == 1) {
  i8 = i7 | 1;
 } else {
  i8 = i7;
 }
 i7 = i6 >>> 22 & 3;
 if ((i7 | 0) == 1) {
  i9 = i8 & -3;
 } else if ((i7 | 0) == 2) {
  i9 = i8 | 2;
 } else {
  i9 = i8;
 }
 i8 = i5;
 HEAP32[i8 >> 2] = HEAP32[i8 >> 2] & -769 | i9 << 8 & 768;
 return;
}
function __ZN7WebCore4FontC1ERKNS_15FontDescriptionEff(i1, i2, d3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 __ZN7WebCore15FontDescriptionC2ERKS0_(i1 | 0, i2);
 HEAP32[i1 + 24 >> 2] = 0;
 HEAPF32[i1 + 28 >> 2] = d3;
 HEAPF32[i1 + 32 >> 2] = d4;
 i5 = i1 + 36 | 0;
 HEAP8[i5] = (__ZN7WebCoreL30useBackslashAsYenSignForFamilyERKN3WTF12AtomicStringE(HEAP32[i2 >> 2] | 0) | 0) & 1;
 i2 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2 & 3;
 i6 = HEAP32[H_BASE + 464 >> 2] | 0;
 if ((i2 | 0) == 1) {
  i7 = i6 & -4;
 } else if ((i2 | 0) == 2 | (i2 | 0) == 3) {
  i7 = i6 | 3;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i1 + 16 >> 2] | 0;
 i1 = i6 >>> 20 & 3;
 if ((i1 | 0) == 2) {
  i8 = i7 & -2;
 } else if ((i1 | 0) == 1) {
  i8 = i7 | 1;
 } else {
  i8 = i7;
 }
 i7 = i6 >>> 22 & 3;
 if ((i7 | 0) == 1) {
  i9 = i8 & -3;
 } else if ((i7 | 0) == 2) {
  i9 = i8 | 2;
 } else {
  i9 = i8;
 }
 i8 = i5;
 HEAP32[i8 >> 2] = HEAP32[i8 >> 2] & -769 | i9 << 8 & 768;
 return;
}
function __ZN7WebCore4FontaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 __ZN7WebCore15FontDescriptionaSERKS0_(i1 | 0, i2 | 0) | 0;
 i3 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore10FontGlyphsD2Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAPF32[i1 + 28 >> 2] = +HEAPF32[i2 + 28 >> 2];
 HEAPF32[i1 + 32 >> 2] = +HEAPF32[i2 + 32 >> 2];
 i5 = i2 + 36 | 0;
 i2 = i1 + 36 | 0;
 HEAP8[i2] = HEAP8[i5] & 1;
 i4 = i2;
 HEAP32[i4 >> 2] = HEAP32[i4 >> 2] & -769 | HEAP32[i5 >> 2] & 768;
 return i1 | 0;
}
function __ZNK7WebCore4Font8codePathERKNS_7TextRunE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[H_BASE + 472 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  return i4 | 0;
 }
 if ((HEAP32[i2 + 32 >> 2] | 0) != 0) {
  i4 = 1;
  return i4 | 0;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    break;
   } else {
    i4 = 2;
   }
   return i4 | 0;
  }
 } while (0);
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i3 | 0) > 1) {
   if ((HEAP32[i1 + 36 >> 2] & 768 | 0) == 0) {
    break;
   } else {
    i4 = 2;
   }
   return i4 | 0;
  }
 } while (0);
 if ((HEAP32[i2 + 24 >> 2] & 68 | 0) != 64) {
  i4 = 1;
  return i4 | 0;
 }
 i4 = __ZN7WebCore4Font22characterRangeCodePathEPKtj(HEAP32[i2 >> 2] | 0, i3) | 0;
 return i4 | 0;
}
function __ZN7WebCore25invalidateFontGlyphsCacheEv() {
 var i1 = 0, i2 = 0, i3 = 0;
 if (HEAP8[H_BASE + 408 | 0] | 0) {
  i1 = HEAP32[H_BASE + 448 >> 2] | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(20) | 0;
  i3 = i2;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 448 >> 2] = i3;
  HEAP8[H_BASE + 408 | 0] = 1;
  i1 = i3;
 }
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6OwnPtrIN7WebCore20FontGlyphsCacheEntryEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_13AlreadyHashedENS_7HashMapIjS5_S9_NS_10HashTraitsIjEENSB_IS5_EEE18KeyValuePairTraitsESC_E15deallocateTableEPS6_i(i3, HEAP32[i1 + 4 >> 2] | 0);
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore4FontC2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __ZN3WTF10fastMallocEj(12) | 0;
 i3 = i1 | 0;
 HEAP32[i3 >> 2] = i2 + 8;
 HEAP32[i2 >> 2] = 1;
 HEAP32[(HEAP32[i3 >> 2] | 0) - 4 >> 2] = 1;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
 } else {
  i4 = i2 + (HEAP32[i2 - 4 >> 2] << 2) | 0;
 }
 _memset(i2 | 0, 0, i4 - i2 | 0) | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAPF32[i1 + 8 >> 2] = +0;
 HEAPF32[i1 + 12 >> 2] = +0;
 HEAP32[i1 + 16 >> 2] = 384;
 i2 = i1 + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -4096;
 i2 = i1 + 36 | 0;
 _memset(i1 + 24 | 0, 0, 13) | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -769;
 return;
}
function __ZN7WebCore4FontC1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __ZN3WTF10fastMallocEj(12) | 0;
 i3 = i1 | 0;
 HEAP32[i3 >> 2] = i2 + 8;
 HEAP32[i2 >> 2] = 1;
 HEAP32[(HEAP32[i3 >> 2] | 0) - 4 >> 2] = 1;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
 } else {
  i4 = i2 + (HEAP32[i2 - 4 >> 2] << 2) | 0;
 }
 _memset(i2 | 0, 0, i4 - i2 | 0) | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAPF32[i1 + 8 >> 2] = +0;
 HEAPF32[i1 + 12 >> 2] = +0;
 HEAP32[i1 + 16 >> 2] = 384;
 i2 = i1 + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -4096;
 i2 = i1 + 36 | 0;
 _memset(i1 + 24 | 0, 0, 13) | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -769;
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
function __ZN7WebCore4Font14isCJKIdeographEi(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((i1 - 19968 | 0) >>> 0 < 20992 >>> 0 | (i1 - 13312 | 0) >>> 0 < 6592 >>> 0 | (i1 - 11904 | 0) >>> 0 < 128 >>> 0 | (i1 - 12032 | 0) >>> 0 < 224 >>> 0 | (i1 - 12736 | 0) >>> 0 < 48 >>> 0 | (i1 - 63744 | 0) >>> 0 < 512 >>> 0 | (i1 - 131072 | 0) >>> 0 < 42720 >>> 0 | (i1 - 173824 | 0) >>> 0 < 4160 >>> 0 | (i1 - 177984 | 0) >>> 0 < 224 >>> 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (i1 - 194560 | 0) >>> 0 < 544 >>> 0;
 return i2 | 0;
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
function __ZN7WebCore4Font22canReceiveTextEmphasisEi(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 do {
  if ((1 << ((_u_charType(i1) | 0) << 24 >> 24) & 126977 | 0) == 0) {
   if ((i1 | 0) == 66463 | (i1 | 0) == 65793 | (i1 | 0) == 65792 | (i1 | 0) == 4961 | (i1 | 0) == 3852 | (i1 | 0) == 3851) {
    i2 = 0;
    break;
   }
   i2 = 1;
  } else {
   i2 = 0;
  }
 } while (0);
 return i2 | 0;
}
function _memcmp(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 while ((i4 | 0) < (i3 | 0)) {
  i5 = HEAPU8[i1 + i4 | 0] | 0;
  i6 = HEAPU8[i2 + i4 | 0] | 0;
  if ((i5 | 0) != (i6 | 0)) return ((i5 | 0) > (i6 | 0) ? 1 : -1) | 0;
  i4 = i4 + 1 | 0;
 }
 return 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore4Font5widthERNS_10TextLayoutEjjPN3WTF7HashSetIPKNS_14SimpleFontDataENS3_7PtrHashIS7_EENS3_10HashTraitsIS7_EEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return +(+0);
}
function dynCall_fiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return +FUNCTION_TABLE_fiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZNK7WebCore4Font12createLayoutEPNS_10RenderTextEfb(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 HEAP32[i1 >> 2] = 0;
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
function dynCall_viiff(i1, i2, i3, d4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 d5 = +d5;
 FUNCTION_TABLE_viiff[i1 & 3](i2 | 0, i3 | 0, +d4, +d5);
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
function b3(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(3);
 return +0;
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
function __ZN7WebCore4Font29setDefaultTypesettingFeaturesEj(i1) {
 i1 = i1 | 0;
 HEAP32[H_BASE + 464 >> 2] = i1;
 return;
}
function __ZN7WebCore4Font11setCodePathENS0_8CodePathE(i1) {
 i1 = i1 | 0;
 HEAP32[H_BASE + 472 >> 2] = i1;
 return;
}
function __ZN7WebCore4Font21setShouldUseSmoothingEb(i1) {
 i1 = i1 | 0;
 HEAP8[H_BASE + 144 | 0] = i1 & 1;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZN7WebCore4Font18shouldUseSmoothingEv() {
 return (HEAP8[H_BASE + 144 | 0] & 1) != 0 | 0;
}
function __ZN7WebCore4Font26defaultTypesettingFeaturesEv() {
 return HEAP32[H_BASE + 464 >> 2] | 0;
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
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
}
function __ZN3WTF14deleteOwnedPtrIN7WebCore10TextLayoutEEEvPT_(i1) {
 i1 = i1 | 0;
 return;
}
function b5(i1, i2, d3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 abort(5);
}
function __ZN7WebCore4Font12deleteLayoutEPNS_10TextLayoutE(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore4Font8codePathEv() {
 return HEAP32[H_BASE + 472 >> 2] | 0;
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
function b4() {
 abort(4);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore4FontC2Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore4FontC2ERKS0_,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_fiiiii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_viiff = [b5,b5,__ZN7WebCore4FontC2ERKNS_15FontDescriptionEff,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,__ZN7WebCore4FontC2ERKNS_16FontPlatformDataEbNS_17FontSmoothingModeE,b7];
  return { _memcmp: _memcmp, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_fiiiii: dynCall_fiiiii, dynCall_v: dynCall_v, dynCall_viiff: dynCall_viiff, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_fiiiii": invoke_fiiiii, "invoke_v": invoke_v, "invoke_viiff": invoke_viiff, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN3WTF10StringImpl19latin1CaseFoldTableE": __ZN3WTF10StringImpl19latin1CaseFoldTableE }, buffer);
var _memcmp = Module["_memcmp"] = asm["_memcmp"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_fiiiii = Module["dynCall_fiiiii"] = asm["dynCall_fiiiii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiff = Module["dynCall_viiff"] = asm["dynCall_viiff"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore4FonteqERKS0_","__ZN7WebCore4Font21setShouldUseSmoothingEb","__ZN7WebCore4Font15normalizeSpacesEPKhj","__ZN3WTF14deleteOwnedPtrIN7WebCore10TextLayoutEEEvPT_","__ZNK7WebCore4Font8drawTextEPNS_15GraphicsContextERKNS_7TextRunERKNS_10FloatPointEiiNS0_24CustomFontNotReadyActionE","__ZNK7WebCore4Font6updateEN3WTF10PassRefPtrINS_12FontSelectorEEE","_strlen","_memset","__ZN7WebCore4Font25expansionOpportunityCountEPKtjNS_13TextDirectionERb","__ZN7WebCore4Font22isCJKIdeographOrSymbolEi","__ZNK7WebCore4Font17drawEmphasisMarksEPNS_15GraphicsContextERKNS_7TextRunERKN3WTF12AtomicStringERKNS_10FloatPointEii","__ZN7WebCore4Font12deleteLayoutEPNS_10TextLayoutE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore10FontGlyphsD2Ev","__ZN7WebCore4Font5widthERNS_10TextLayoutEjjPN3WTF7HashSetIPKNS_14SimpleFontDataENS3_7PtrHashIS7_EENS3_10HashTraitsIS7_EEEE","__ZNK7WebCore4Font20selectionRectForTextERKNS_7TextRunERKNS_10FloatPointEiii","__ZN7WebCore4Font25expansionOpportunityCountEPKhjNS_13TextDirectionERb","__ZNK7WebCore4Font12createLayoutEPNS_10RenderTextEfb","__ZN7WebCore4Font29setDefaultTypesettingFeaturesEj","__ZN7WebCore4FontC2ERKNS_16FontPlatformDataEbNS_17FontSmoothingModeE","__ZN7WebCore4Font14isCJKIdeographEi","__ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE","__ZN7WebCore4Font26defaultTypesettingFeaturesEv","__ZN7WebCore4Font11setCodePathENS0_8CodePathE","__ZN7WebCore15FontDescriptionC2ERKS0_","__ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6OwnPtrIN7WebCore20FontGlyphsCacheEntryEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_13AlreadyHashedENS_7HashMapIjS5_S9_NS_10HashTraitsIjEENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_","__ZN7WebCore10WidthCache14SmallStringKeyC2IKtEEPT_t","__ZNK7WebCore4Font5widthERKNS_7TextRunERiRN3WTF6StringE","__ZN7WebCore16clearWidthCachesEv","__ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j","__ZN7WebCore43pruneUnreferencedEntriesFromFontGlyphsCacheEv","__ZN7WebCore4Font22canReceiveTextEmphasisEi","__ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6OwnPtrIN7WebCore20FontGlyphsCacheEntryEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_13AlreadyHashedENS_7HashMapIjS5_S9_NS_10HashTraitsIjEENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKjNS_10PassOwnPtrIS4_EEEENS_18HashTableAddResultINS_17HashTableIteratorIjS6_S8_S9_SF_SC_EEEEOT0_OT1_","__ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_","__ZN7WebCore4Font22characterRangeCodePathEPKtj","__ZN7WebCore10WidthCache11addSlowCaseERKNS_7TextRunEf","__ZN7WebCore4FontC2ERKNS_15FontDescriptionEff","__ZN7WebCore4Font18shouldUseSmoothingEv","__ZN3WTF7HashMapIjNS_6OwnPtrIN7WebCore20FontGlyphsCacheEntryEEENS_13AlreadyHashedENS_10HashTraitsIjEENS6_IS4_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIjNS_12KeyValuePairIjS4_EENS_24KeyValuePairKeyExtractorISD_EES5_NS9_18KeyValuePairTraitsES7_EESD_EE","__ZN7WebCore4Font15normalizeSpacesEPKtj","__ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6OwnPtrIN7WebCore20FontGlyphsCacheEntryEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_13AlreadyHashedENS_7HashMapIjS5_S9_NS_10HashTraitsIjEENSB_IS5_EEE18KeyValuePairTraitsESC_E15deallocateTableEPS6_i","_memcmp","__ZN7WebCore4FontC2Ev","__ZN3WTF7HashMapIjNS_6OwnPtrIN7WebCore20FontGlyphsCacheEntryEEENS_13AlreadyHashedENS_10HashTraitsIjEENS6_IS4_EEE6removeERKj","__ZNK7WebCore4Font17offsetForPositionERKNS_7TextRunEfb","__ZN3WTF9HashTableIN7WebCore10WidthCache14SmallStringKeyENS_12KeyValuePairIS3_fEENS_24KeyValuePairKeyExtractorIS5_EENS2_18SmallStringKeyHashENS_7HashMapIS3_fS8_NS2_24SmallStringKeyHashTraitsENS_10HashTraitsIfEEE18KeyValuePairTraitsESA_E6rehashEiPS5_","__ZN7WebCore4FontaSERKS0_","__ZNK7WebCore4Font8codePathERKNS_7TextRunE","__ZN7WebCoreL30useBackslashAsYenSignForFamilyERKN3WTF12AtomicStringE","__ZN7WebCore25invalidateFontGlyphsCacheEv","__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE","__ZN7WebCore15FontDescriptionaSERKS0_","__ZN3WTF9HashTableIjNS_12KeyValuePairIjfEENS_24KeyValuePairKeyExtractorIS2_EENS_7IntHashIjEENS_7HashMapIjfS6_NS_29UnsignedWithZeroKeyHashTraitsIjEENS_10HashTraitsIfEEE18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISD_S6_EEjRfEENS_18HashTableAddResultINS_17HashTableIteratorIjS2_S4_S6_SD_S9_EEEEOT0_OT1_","__ZN7WebCore4Font8codePathEv","__ZN3WTF9HashTableIN7WebCore10WidthCache14SmallStringKeyENS_12KeyValuePairIS3_fEENS_24KeyValuePairKeyExtractorIS5_EENS2_18SmallStringKeyHashENS_7HashMapIS3_fS8_NS2_24SmallStringKeyHashTraitsENS_10HashTraitsIfEEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISE_S8_EERKS3_RfEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S8_SE_SA_EEEEOT0_OT1_","__ZN7WebCore10WidthCache14SmallStringKeyC2IKhEEPT_t","__ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","_memcpy","__ZN3WTF6RefPtrIN7WebCore19FontFeatureSettingsEEaSERKS3_","__ZN3WTF9HashTableIN7WebCore10WidthCache14SmallStringKeyENS_12KeyValuePairIS3_fEENS_24KeyValuePairKeyExtractorIS5_EENS2_18SmallStringKeyHashENS_7HashMapIS3_fS8_NS2_24SmallStringKeyHashTraitsENS_10HashTraitsIfEEE18KeyValuePairTraitsESA_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EES3_EENSt3__14pairIPS5_bEERKT0_","__ZN7WebCore4FontC2ERKS0_"]

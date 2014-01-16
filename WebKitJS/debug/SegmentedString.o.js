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
H_BASE = parentModule["_malloc"](0 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 0;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore15SegmentedStringC1ERKS0_;
/* no memory initializer */
;
;
;
;
;
;
;
;
;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore15SegmentedString7prependERKNS_18SegmentedSubstringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = i2 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 i4 = i1 + 4 | 0;
 i5 = i1 + 16 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i6 + 4 >> 2] | 0;
 }
 i8 = i1 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i1 + 24 | 0;
 i11 = (HEAP32[i10 >> 2] | 0) + (i7 - i9) | 0;
 HEAP32[i10 >> 2] = i11;
 HEAP32[i10 >> 2] = i11 - (HEAP32[i3 >> 2] | 0);
 L7 : do {
  if ((i9 | 0) == 0) {
   HEAP32[i4 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i8 >> 2] = HEAP32[i3 >> 2];
   i11 = i1 + 12 | 0;
   HEAP8[i11] = HEAP8[i2 + 8 | 0] & 1;
   i10 = i1 + 13 | 0;
   HEAP8[i10] = HEAP8[i2 + 9 | 0] & 1;
   i7 = HEAP32[i2 + 12 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i12 = i6;
   } else {
    i13 = i7 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
    i12 = HEAP32[i5 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = i7;
   do {
    if ((i12 | 0) != 0) {
     i7 = i12 | 0;
     i13 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i7 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i13 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i13 | 0) > 1) {
     if ((HEAP16[i1 >> 1] | 0) != 0) {
      break;
     }
     i7 = i1 + 60 | 0;
     if ((HEAP8[i10] & 1) == 0) {
      HEAP32[i7 >> 2] = F_BASE_vi + 10;
      HEAP32[i7 + 4 >> 2] = 0;
      HEAP8[i1 + 58 | 0] = 0;
      i14 = i1 + 68 | 0;
      if ((HEAP8[i11] & 1) == 0) {
       HEAP32[i14 >> 2] = F_BASE_vi + 10;
       HEAP32[i14 + 4 >> 2] = 0;
       break L7;
      } else {
       HEAP32[i14 >> 2] = F_BASE_vi + 14;
       HEAP32[i14 + 4 >> 2] = 0;
       break L7;
      }
     } else {
      HEAP32[i7 >> 2] = F_BASE_vi + 4;
      HEAP32[i7 + 4 >> 2] = 0;
      i7 = i1 + 58 | 0;
      HEAP8[i7] = 2;
      i14 = i1 + 68 | 0;
      if ((HEAP8[i11] & 1) == 0) {
       HEAP32[i14 >> 2] = F_BASE_vi + 4;
       HEAP32[i14 + 4 >> 2] = 0;
       break L7;
      } else {
       HEAP32[i14 >> 2] = F_BASE_vi + 8;
       HEAP32[i14 + 4 >> 2] = 0;
       HEAP8[i7] = 3;
       break L7;
      }
     }
    } else {
     if ((i13 | 0) != 0) {
      break;
     }
     if ((HEAP32[i1 + 36 >> 2] | 0) != (HEAP32[i1 + 40 >> 2] | 0)) {
      break;
     }
     i7 = i1 + 60 | 0;
     HEAP32[i7 >> 2] = F_BASE_vi + 2;
     HEAP32[i7 + 4 >> 2] = 0;
     HEAP8[i1 + 58 | 0] = 0;
     i7 = i1 + 68 | 0;
     HEAP32[i7 >> 2] = F_BASE_vi + 2;
     HEAP32[i7 + 4 >> 2] = 0;
    }
   } while (0);
   HEAP8[i1 + 58 | 0] = 0;
   i13 = i1 + 60 | 0;
   HEAP32[i13 >> 2] = F_BASE_vi + 6;
   HEAP32[i13 + 4 >> 2] = 0;
   i13 = i1 + 68 | 0;
   HEAP32[i13 >> 2] = F_BASE_vi + 12;
   HEAP32[i13 + 4 >> 2] = 0;
  } else {
   i13 = i1 + 36 | 0;
   i11 = i13 | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   i7 = i1 + 40 | 0;
   i14 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i10 | 0) == 0) {
     i15 = HEAP32[i1 + 48 >> 2] | 0;
     if ((i14 | 0) == 0) {
      if ((i15 | 0) == 0) {
       i16 = 29;
       break;
      } else {
       i17 = i15;
       break;
      }
     } else {
      if ((i14 | 0) == (i15 - 1 | 0)) {
       i16 = 29;
       break;
      } else {
       i17 = i15;
       break;
      }
     }
    } else {
     if ((i14 + 1 | 0) == (i10 | 0)) {
      i16 = 29;
     } else {
      i17 = i10;
     }
    }
   } while (0);
   do {
    if ((i16 | 0) == 29) {
     __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE14expandCapacityEv(i13);
     i10 = HEAP32[i11 >> 2] | 0;
     if ((i10 | 0) != 0) {
      i17 = i10;
      break;
     }
     i17 = HEAP32[i1 + 48 >> 2] | 0;
    }
   } while (0);
   i13 = i17 - 1 | 0;
   HEAP32[i11 >> 2] = i13;
   i10 = HEAP32[i1 + 44 >> 2] | 0;
   HEAP32[i10 + (i13 << 4) >> 2] = HEAP32[i4 >> 2];
   HEAP32[i10 + (i13 << 4) + 4 >> 2] = HEAP32[i8 >> 2];
   i14 = i1 + 12 | 0;
   HEAP8[i10 + (i13 << 4) + 8 | 0] = HEAP8[i14] & 1;
   i15 = i1 + 13 | 0;
   HEAP8[i10 + (i13 << 4) + 9 | 0] = HEAP8[i15] & 1;
   i18 = HEAP32[i5 >> 2] | 0;
   HEAP32[i10 + (i13 << 4) + 12 >> 2] = i18;
   if ((i18 | 0) != 0) {
    i13 = i18 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   }
   HEAP32[i4 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i8 >> 2] = HEAP32[i3 >> 2];
   HEAP8[i14] = HEAP8[i2 + 8 | 0] & 1;
   HEAP8[i15] = HEAP8[i2 + 9 | 0] & 1;
   i13 = HEAP32[i2 + 12 >> 2] | 0;
   if ((i13 | 0) != 0) {
    i18 = i13 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
   }
   i18 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i13;
   do {
    if ((i18 | 0) != 0) {
     i13 = i18 | 0;
     i10 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i13 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i18 | 0) > 1) {
     if ((HEAP16[i1 >> 1] | 0) != 0) {
      break;
     }
     i11 = i1 + 60 | 0;
     if ((HEAP8[i15] & 1) == 0) {
      HEAP32[i11 >> 2] = F_BASE_vi + 10;
      HEAP32[i11 + 4 >> 2] = 0;
      HEAP8[i1 + 58 | 0] = 0;
      i10 = i1 + 68 | 0;
      if ((HEAP8[i14] & 1) == 0) {
       HEAP32[i10 >> 2] = F_BASE_vi + 10;
       HEAP32[i10 + 4 >> 2] = 0;
       break L7;
      } else {
       HEAP32[i10 >> 2] = F_BASE_vi + 14;
       HEAP32[i10 + 4 >> 2] = 0;
       break L7;
      }
     } else {
      HEAP32[i11 >> 2] = F_BASE_vi + 4;
      HEAP32[i11 + 4 >> 2] = 0;
      i11 = i1 + 58 | 0;
      HEAP8[i11] = 2;
      i10 = i1 + 68 | 0;
      if ((HEAP8[i14] & 1) == 0) {
       HEAP32[i10 >> 2] = F_BASE_vi + 4;
       HEAP32[i10 + 4 >> 2] = 0;
       break L7;
      } else {
       HEAP32[i10 >> 2] = F_BASE_vi + 8;
       HEAP32[i10 + 4 >> 2] = 0;
       HEAP8[i11] = 3;
       break L7;
      }
     }
    } else {
     if ((i18 | 0) != 0) {
      break;
     }
     if ((HEAP32[i1 + 36 >> 2] | 0) != (HEAP32[i7 >> 2] | 0)) {
      break;
     }
     i11 = i1 + 60 | 0;
     HEAP32[i11 >> 2] = F_BASE_vi + 2;
     HEAP32[i11 + 4 >> 2] = 0;
     HEAP8[i1 + 58 | 0] = 0;
     i11 = i1 + 68 | 0;
     HEAP32[i11 >> 2] = F_BASE_vi + 2;
     HEAP32[i11 + 4 >> 2] = 0;
    }
   } while (0);
   HEAP8[i1 + 58 | 0] = 0;
   i7 = i1 + 60 | 0;
   HEAP32[i7 >> 2] = F_BASE_vi + 6;
   HEAP32[i7 + 4 >> 2] = 0;
   i7 = i1 + 68 | 0;
   HEAP32[i7 >> 2] = F_BASE_vi + 12;
   HEAP32[i7 + 4 >> 2] = 0;
  }
 } while (0);
 HEAP8[i1 + 57 | 0] = 0;
 return;
}
function __ZNK7WebCore15SegmentedString8toStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i8 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i8 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i8 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i8 + 12 | 0;
 HEAP8[i12] = 1;
 HEAP32[i8 + 16 >> 2] = 0;
 i13 = i8 + 20 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = HEAP16[i2 >> 1] | 0;
 L1 : do {
  if (i14 << 16 >> 16 != 0) {
   HEAP16[i7 >> 1] = i14;
   __ZN3WTF13StringBuilder6appendEPKtj(i8, i7, 1);
   i15 = HEAP16[i2 + 2 >> 1] | 0;
   if (i15 << 16 >> 16 == 0) {
    break;
   }
   HEAP16[i6 >> 1] = i15;
   i16 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i17 = HEAP32[i9 >> 2] | 0;
     if (i17 >>> 0 >= (HEAP32[i16 + 4 >> 2] | 0) >>> 0) {
      break;
     }
     if ((HEAP32[i10 >> 2] | 0) != 0) {
      break;
     }
     if ((HEAP8[i12] & 1) == 0) {
      HEAP32[i9 >> 2] = i17 + 1;
      HEAP16[(HEAP32[i8 + 20 >> 2] | 0) + (i17 << 1) >> 1] = i15;
      break L1;
     }
     if ((i15 & 65535) >>> 0 > 255 >>> 0) {
      break;
     }
     HEAP32[i9 >> 2] = i17 + 1;
     HEAP8[(HEAP32[i13 >> 2] | 0) + i17 | 0] = i15;
     break L1;
    }
   } while (0);
   __ZN3WTF13StringBuilder6appendEPKtj(i8, i6, 1);
  }
 } while (0);
 i6 = i2 + 16 | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i18 = 0;
 } else {
  i18 = HEAP32[i13 + 4 >> 2] | 0;
 }
 i13 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i18 | 0) == (i13 | 0)) {
   if ((i18 | 0) == 0) {
    break;
   }
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i8, i6);
  } else {
   __ZNK3WTF6String9substringEjj(i5, i6, i18 - i13 | 0, i13);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i8, i5);
   i9 = HEAP32[i5 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i12 = i9 | 0;
   i7 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i2 + 36 >> 2] | 0;
 i13 = HEAP32[i2 + 40 >> 2] | 0;
 if ((i5 | 0) != (i13 | 0)) {
  i18 = i2 + 44 | 0;
  i6 = i2 + 48 | 0;
  i2 = i4 | 0;
  i7 = i5;
  while (1) {
   i5 = HEAP32[i18 >> 2] | 0;
   i12 = i5 + (i7 << 4) + 12 | 0;
   i9 = HEAP32[i12 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i19 = 0;
   } else {
    i19 = HEAP32[i9 + 4 >> 2] | 0;
   }
   i9 = HEAP32[i5 + (i7 << 4) + 4 >> 2] | 0;
   do {
    if ((i19 | 0) == (i9 | 0)) {
     if ((i19 | 0) == 0) {
      break;
     }
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i8, i12);
    } else {
     __ZNK3WTF6String9substringEjj(i4, i12, i19 - i9 | 0, i9);
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i8, i4);
     i5 = HEAP32[i2 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     i14 = i5 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i14 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i7 = (i7 | 0) == ((HEAP32[i6 >> 2] | 0) - 1 | 0) ? 0 : i7 + 1 | 0;
   if ((i7 | 0) == (i13 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF13StringBuilder11shrinkToFitEv(i8);
 i13 = HEAP32[i10 >> 2] | 0;
 if ((i13 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i8);
  i8 = HEAP32[i10 >> 2] | 0;
  HEAP32[i1 >> 2] = i8;
  if ((i8 | 0) != 0) {
   i20 = i8;
   i21 = 35;
  }
 } else {
  HEAP32[i1 >> 2] = i13;
  i20 = i13;
  i21 = 35;
 }
 if ((i21 | 0) == 35) {
  i21 = i20 | 0;
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
 }
 i21 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i11 = i21 | 0;
   i20 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i11 >> 2] = i20;
    break;
   }
  }
 } while (0);
 i21 = HEAP32[i10 >> 2] | 0;
 if ((i21 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = i21 | 0;
 i20 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i20 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i21);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i10 >> 2] = i20;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore15SegmentedString34advanceAndUpdateLineNumberSlowCaseEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = i1 | 0;
 do {
  if ((HEAP16[i2 >> 1] | 0) == 0) {
   i3 = i1 + 4 | 0;
   i4 = i1 + 8 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    if ((HEAP32[i1 + 36 >> 2] | 0) != (HEAP32[i1 + 40 >> 2] | 0)) {
     i6 = 0;
     break;
    }
    HEAP32[i4 >> 2] = 0;
    HEAP32[i3 >> 2] = 0;
    HEAP8[i1 + 13 | 0] = 0;
    HEAP8[i1 + 57 | 0] = 1;
    HEAP8[i1 + 58 | 0] = 0;
    i7 = i1 + 60 | 0;
    HEAP32[i7 >> 2] = F_BASE_vi + 2;
    HEAP32[i7 + 4 >> 2] = 0;
    i7 = i1 + 68 | 0;
    HEAP32[i7 >> 2] = F_BASE_vi + 2;
    HEAP32[i7 + 4 >> 2] = 0;
    i6 = 0;
    break;
   }
   i7 = (HEAP8[i1 + 13 | 0] & 1) == 0;
   do {
    if (i7) {
     i8 = HEAP32[i3 >> 2] | 0;
     i9 = i8;
     if ((i8 | 0) == 0) {
      i10 = 0;
      i11 = i9;
      break;
     }
     i12 = HEAP16[i8 >> 1] | 0;
     i13 = i8;
     i14 = i9;
     i15 = 21;
    } else {
     i9 = HEAP32[i3 >> 2] | 0;
     i12 = HEAPU8[i9] | 0;
     i13 = i9;
     i14 = i9;
     i15 = 21;
    }
   } while (0);
   do {
    if ((i15 | 0) == 21) {
     if (i12 << 16 >> 16 != 10) {
      i10 = i13;
      i11 = i14;
      break;
     }
     if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
      i10 = i13;
      i11 = i14;
      break;
     }
     i9 = i1 + 32 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
     i9 = HEAP32[i1 + 16 >> 2] | 0;
     if ((i9 | 0) == 0) {
      i16 = 0;
     } else {
      i16 = HEAP32[i9 + 4 >> 2] | 0;
     }
     HEAP32[i1 + 28 >> 2] = (HEAP32[i1 + 24 >> 2] | 0) + 1 + i16 - i5;
     i10 = i13;
     i11 = i14;
    }
   } while (0);
   i9 = i5 - 1 | 0;
   HEAP32[i4 >> 2] = i9;
   if ((i9 | 0) == 0) {
    __ZN7WebCore15SegmentedString16advanceSubstringEv(i1);
    i17 = HEAP32[i4 >> 2] | 0;
    i15 = 33;
    break;
   }
   if (i7) {
    HEAP32[i3 >> 2] = i10 + 2;
    i17 = i9;
    i15 = 33;
    break;
   } else {
    HEAP32[i3 >> 2] = i11 + 1;
    i17 = i9;
    i15 = 33;
    break;
   }
  } else {
   i9 = i1 + 2 | 0;
   i8 = HEAP16[i9 >> 1] | 0;
   HEAP16[i2 >> 1] = i8;
   HEAP16[i9 >> 1] = 0;
   if (i8 << 16 >> 16 != 0) {
    HEAP16[i1 + 20 >> 1] = i8;
    return;
   }
   i8 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i8 | 0) <= 1) {
    do {
     if ((i8 | 0) == 0) {
      if ((HEAP32[i1 + 36 >> 2] | 0) != (HEAP32[i1 + 40 >> 2] | 0)) {
       break;
      }
      i9 = i1 + 60 | 0;
      HEAP32[i9 >> 2] = F_BASE_vi + 2;
      HEAP32[i9 + 4 >> 2] = 0;
      HEAP8[i1 + 58 | 0] = 0;
      i9 = i1 + 68 | 0;
      HEAP32[i9 >> 2] = F_BASE_vi + 2;
      HEAP32[i9 + 4 >> 2] = 0;
     }
    } while (0);
    HEAP8[i1 + 58 | 0] = 0;
    i3 = i1 + 60 | 0;
    HEAP32[i3 >> 2] = F_BASE_vi + 6;
    HEAP32[i3 + 4 >> 2] = 0;
    i3 = i1 + 68 | 0;
    HEAP32[i3 >> 2] = F_BASE_vi + 12;
    HEAP32[i3 + 4 >> 2] = 0;
    i17 = i8;
    i15 = 33;
    break;
   }
   i3 = i1 + 60 | 0;
   if ((HEAP8[i1 + 13 | 0] & 1) == 0) {
    HEAP32[i3 >> 2] = F_BASE_vi + 10;
    HEAP32[i3 + 4 >> 2] = 0;
    HEAP8[i1 + 58 | 0] = 0;
    i7 = i1 + 68 | 0;
    if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
     HEAP32[i7 >> 2] = F_BASE_vi + 10;
     HEAP32[i7 + 4 >> 2] = 0;
     i17 = i8;
     i15 = 33;
     break;
    } else {
     HEAP32[i7 >> 2] = F_BASE_vi + 14;
     HEAP32[i7 + 4 >> 2] = 0;
     i17 = i8;
     i15 = 33;
     break;
    }
   } else {
    HEAP32[i3 >> 2] = F_BASE_vi + 4;
    HEAP32[i3 + 4 >> 2] = 0;
    i3 = i1 + 58 | 0;
    HEAP8[i3] = 2;
    i7 = i1 + 68 | 0;
    if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
     HEAP32[i7 >> 2] = F_BASE_vi + 4;
     HEAP32[i7 + 4 >> 2] = 0;
     i17 = i8;
     i15 = 33;
     break;
    } else {
     HEAP32[i7 >> 2] = F_BASE_vi + 8;
     HEAP32[i7 + 4 >> 2] = 0;
     HEAP8[i3] = 3;
     i15 = 34;
     break;
    }
   }
  }
 } while (0);
 if ((i15 | 0) == 33) {
  if ((i17 | 0) == 0) {
   i6 = 0;
  } else {
   i15 = 34;
  }
 }
 do {
  if ((i15 | 0) == 34) {
   i17 = i1 + 4 | 0;
   if ((HEAP8[i1 + 13 | 0] & 1) != 0) {
    i6 = HEAPU8[HEAP32[i17 >> 2] | 0] | 0;
    break;
   }
   i2 = HEAP32[i17 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i6 = 0;
    break;
   }
   i6 = HEAP16[i2 >> 1] | 0;
  }
 } while (0);
 HEAP16[i1 + 20 >> 1] = i6;
 return;
}
function __ZN7WebCore15SegmentedString6appendERKNS_18SegmentedSubstringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = i2 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 i4 = i1 + 8 | 0;
 L4 : do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   i5 = i1 + 16 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i7 = 0;
   } else {
    i7 = HEAP32[i6 + 4 >> 2] | 0;
   }
   i8 = i1 + 24 | 0;
   HEAP32[i8 >> 2] = i7 + (HEAP32[i8 >> 2] | 0);
   HEAP32[i1 + 4 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
   i8 = i1 + 12 | 0;
   HEAP8[i8] = HEAP8[i2 + 8 | 0] & 1;
   i9 = i1 + 13 | 0;
   HEAP8[i9] = HEAP8[i2 + 9 | 0] & 1;
   i10 = HEAP32[i2 + 12 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i11 = i6;
   } else {
    i6 = i10 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
    i11 = HEAP32[i5 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = i10;
   do {
    if ((i11 | 0) != 0) {
     i10 = i11 | 0;
     i5 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i10 >> 2] = i5;
      break;
     }
    }
   } while (0);
   i5 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i5 | 0) > 1) {
     if ((HEAP16[i1 >> 1] | 0) != 0) {
      break;
     }
     i10 = i1 + 60 | 0;
     if ((HEAP8[i9] & 1) == 0) {
      HEAP32[i10 >> 2] = F_BASE_vi + 10;
      HEAP32[i10 + 4 >> 2] = 0;
      HEAP8[i1 + 58 | 0] = 0;
      i6 = i1 + 68 | 0;
      if ((HEAP8[i8] & 1) == 0) {
       HEAP32[i6 >> 2] = F_BASE_vi + 10;
       HEAP32[i6 + 4 >> 2] = 0;
       break L4;
      } else {
       HEAP32[i6 >> 2] = F_BASE_vi + 14;
       HEAP32[i6 + 4 >> 2] = 0;
       break L4;
      }
     } else {
      HEAP32[i10 >> 2] = F_BASE_vi + 4;
      HEAP32[i10 + 4 >> 2] = 0;
      i10 = i1 + 58 | 0;
      HEAP8[i10] = 2;
      i6 = i1 + 68 | 0;
      if ((HEAP8[i8] & 1) == 0) {
       HEAP32[i6 >> 2] = F_BASE_vi + 4;
       HEAP32[i6 + 4 >> 2] = 0;
       break L4;
      } else {
       HEAP32[i6 >> 2] = F_BASE_vi + 8;
       HEAP32[i6 + 4 >> 2] = 0;
       HEAP8[i10] = 3;
       break L4;
      }
     }
    } else {
     if ((i5 | 0) != 0) {
      break;
     }
     if ((HEAP32[i1 + 36 >> 2] | 0) != (HEAP32[i1 + 40 >> 2] | 0)) {
      break;
     }
     i10 = i1 + 60 | 0;
     HEAP32[i10 >> 2] = F_BASE_vi + 2;
     HEAP32[i10 + 4 >> 2] = 0;
     HEAP8[i1 + 58 | 0] = 0;
     i10 = i1 + 68 | 0;
     HEAP32[i10 >> 2] = F_BASE_vi + 2;
     HEAP32[i10 + 4 >> 2] = 0;
    }
   } while (0);
   HEAP8[i1 + 58 | 0] = 0;
   i5 = i1 + 60 | 0;
   HEAP32[i5 >> 2] = F_BASE_vi + 6;
   HEAP32[i5 + 4 >> 2] = 0;
   i5 = i1 + 68 | 0;
   HEAP32[i5 >> 2] = F_BASE_vi + 12;
   HEAP32[i5 + 4 >> 2] = 0;
  } else {
   i5 = i1 + 36 | 0;
   i8 = HEAP32[i5 >> 2] | 0;
   i9 = i1 + 40 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i8 | 0) == 0) {
     i6 = HEAP32[i1 + 48 >> 2] | 0;
     if ((i10 | 0) == 0) {
      if ((i6 | 0) == 0) {
       i12 = 29;
       break;
      } else {
       i13 = 0;
       break;
      }
     } else {
      if ((i10 | 0) == (i6 - 1 | 0)) {
       i12 = 29;
       break;
      } else {
       i13 = i10;
       break;
      }
     }
    } else {
     if ((i10 + 1 | 0) == (i8 | 0)) {
      i12 = 29;
     } else {
      i13 = i10;
     }
    }
   } while (0);
   if ((i12 | 0) == 29) {
    __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE14expandCapacityEv(i5);
    i13 = HEAP32[i9 >> 2] | 0;
   }
   i10 = HEAP32[i1 + 44 >> 2] | 0;
   HEAP32[i10 + (i13 << 4) >> 2] = HEAP32[i2 >> 2];
   HEAP32[i10 + (i13 << 4) + 4 >> 2] = HEAP32[i3 >> 2];
   HEAP8[i10 + (i13 << 4) + 8 | 0] = HEAP8[i2 + 8 | 0] & 1;
   HEAP8[i10 + (i13 << 4) + 9 | 0] = HEAP8[i2 + 9 | 0] & 1;
   i8 = HEAP32[i2 + 12 >> 2] | 0;
   HEAP32[i10 + (i13 << 4) + 12 >> 2] = i8;
   if ((i8 | 0) != 0) {
    i10 = i8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   }
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = (i10 | 0) == ((HEAP32[i1 + 48 >> 2] | 0) - 1 | 0) ? 0 : i10 + 1 | 0;
  }
 } while (0);
 HEAP8[i1 + 57 | 0] = 0;
 return;
}
function __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE14expandCapacityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + 1 + (i3 >>> 2) | 0;
 i7 = i6 >>> 0 > 16 >>> 0 ? i6 : 16;
 if (i7 >>> 0 > 268435455 >>> 0) {
  _WTFCrash();
 }
 i6 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 4) | 0;
 HEAP32[i2 >> 2] = i6 >>> 4;
 i7 = __ZN3WTF10fastMallocEj(i6) | 0;
 HEAP32[i4 >> 2] = i7;
 i6 = i1 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i5 + (i9 << 4) | 0;
 do {
  if (i8 >>> 0 > i9 >>> 0) {
   if ((i9 | 0) == 0) {
    i10 = i8;
   } else {
    i11 = i5;
    i12 = i7;
    while (1) {
     HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i12 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
     HEAP8[i12 + 8 | 0] = HEAP8[i11 + 8 | 0] & 1;
     HEAP8[i12 + 9 | 0] = HEAP8[i11 + 9 | 0] & 1;
     i13 = i11 + 12 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     HEAP32[i12 + 12 >> 2] = i14;
     i14 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i14 | 0) != 0) {
       i13 = i14 | 0;
       i15 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
       if ((i15 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i14);
        break;
       } else {
        HEAP32[i13 >> 2] = i15;
        break;
       }
      }
     } while (0);
     i14 = i11 + 16 | 0;
     if ((i14 | 0) == (i1 | 0)) {
      break;
     } else {
      i11 = i14;
      i12 = i12 + 16 | 0;
     }
    }
    i10 = HEAP32[i6 >> 2] | 0;
   }
   i12 = i10 - i3 + (HEAP32[i2 >> 2] | 0) | 0;
   i11 = i5 + (i3 << 4) | 0;
   if ((i10 | 0) != (i3 | 0)) {
    i14 = i5 + (i10 << 4) | 0;
    i15 = (HEAP32[i4 >> 2] | 0) + (i12 << 4) | 0;
    while (1) {
     HEAP32[i15 >> 2] = HEAP32[i14 >> 2];
     HEAP32[i15 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
     HEAP8[i15 + 8 | 0] = HEAP8[i14 + 8 | 0] & 1;
     HEAP8[i15 + 9 | 0] = HEAP8[i14 + 9 | 0] & 1;
     i13 = i14 + 12 | 0;
     i16 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     HEAP32[i15 + 12 >> 2] = i16;
     i16 = HEAP32[i13 >> 2] | 0;
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
     i16 = i14 + 16 | 0;
     if ((i16 | 0) == (i11 | 0)) {
      break;
     } else {
      i14 = i16;
      i15 = i15 + 16 | 0;
     }
    }
   }
   HEAP32[i6 >> 2] = i12;
  } else {
   if ((i8 | 0) == (i9 | 0)) {
    break;
   }
   i15 = i5 + (i8 << 4) | 0;
   i14 = i7 + (i8 << 4) | 0;
   while (1) {
    HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
    HEAP32[i14 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
    HEAP8[i14 + 8 | 0] = HEAP8[i15 + 8 | 0] & 1;
    HEAP8[i14 + 9 | 0] = HEAP8[i15 + 9 | 0] & 1;
    i11 = i15 + 12 | 0;
    i16 = HEAP32[i11 >> 2] | 0;
    HEAP32[i11 >> 2] = 0;
    HEAP32[i14 + 12 >> 2] = i16;
    i16 = HEAP32[i11 >> 2] | 0;
    do {
     if ((i16 | 0) != 0) {
      i11 = i16 | 0;
      i17 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
      if ((i17 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i16);
       break;
      } else {
       HEAP32[i11 >> 2] = i17;
       break;
      }
     }
    } while (0);
    i16 = i15 + 16 | 0;
    if ((i16 | 0) == (i1 | 0)) {
     break;
    } else {
     i15 = i16;
     i14 = i14 + 16 | 0;
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
function __ZN7WebCore15SegmentedString16advanceSubstringEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = i1 + 36 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 40 | 0;
 i5 = i1 + 4 | 0;
 if ((i3 | 0) == (HEAP32[i4 >> 2] | 0)) {
  HEAP32[i1 + 8 >> 2] = 0;
  HEAP32[i5 >> 2] = 0;
  HEAP8[i1 + 13 | 0] = 0;
  HEAP8[i1 + 57 | 0] = 1;
  HEAP8[i1 + 58 | 0] = 0;
  i6 = i1 + 60 | 0;
  HEAP32[i6 >> 2] = F_BASE_vi + 2;
  HEAP32[i6 + 4 >> 2] = 0;
  i6 = i1 + 68 | 0;
  HEAP32[i6 >> 2] = F_BASE_vi + 2;
  HEAP32[i6 + 4 >> 2] = 0;
  return;
 }
 i6 = i1 + 16 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = HEAP32[i7 + 4 >> 2] | 0;
 }
 i7 = i1 + 8 | 0;
 i9 = i1 + 24 | 0;
 HEAP32[i9 >> 2] = i8 - (HEAP32[i7 >> 2] | 0) + (HEAP32[i9 >> 2] | 0);
 i8 = i1 + 44 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 i11 = HEAP32[i10 + (i3 << 4) >> 2] | 0;
 i12 = HEAP32[i10 + (i3 << 4) + 4 >> 2] | 0;
 i13 = HEAP8[i10 + (i3 << 4) + 8 | 0] & 1;
 i14 = HEAP8[i10 + (i3 << 4) + 9 | 0] & 1;
 i15 = i10 + (i3 << 4) + 12 | 0;
 i3 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 i15 = HEAP32[(HEAP32[i8 >> 2] | 0) + (HEAP32[i2 >> 2] << 4) + 12 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i8 = i15 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i8 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = (i15 | 0) == ((HEAP32[i1 + 48 >> 2] | 0) - 1 | 0) ? 0 : i15 + 1 | 0;
 HEAP32[i5 >> 2] = i11;
 HEAP32[i7 >> 2] = i12;
 i12 = i1 + 12 | 0;
 HEAP8[i12] = i13;
 i13 = i1 + 13 | 0;
 HEAP8[i13] = i14;
 i14 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i3;
 if ((i14 | 0) == 0) {
  i16 = i3;
 } else {
  i3 = i14 | 0;
  i11 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
  if ((i11 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i14);
  } else {
   HEAP32[i3 >> 2] = i11;
  }
  i16 = HEAP32[i6 >> 2] | 0;
 }
 if ((i16 | 0) == 0) {
  i17 = 0;
 } else {
  i17 = HEAP32[i16 + 4 >> 2] | 0;
 }
 i16 = HEAP32[i7 >> 2] | 0;
 HEAP32[i9 >> 2] = i16 - i17 + (HEAP32[i9 >> 2] | 0);
 do {
  if ((i16 | 0) > 1) {
   if ((HEAP16[i1 >> 1] | 0) != 0) {
    break;
   }
   i9 = i1 + 60 | 0;
   if ((HEAP8[i13] & 1) == 0) {
    HEAP32[i9 >> 2] = F_BASE_vi + 10;
    HEAP32[i9 + 4 >> 2] = 0;
    HEAP8[i1 + 58 | 0] = 0;
    i17 = i1 + 68 | 0;
    if ((HEAP8[i12] & 1) == 0) {
     HEAP32[i17 >> 2] = F_BASE_vi + 10;
     HEAP32[i17 + 4 >> 2] = 0;
     return;
    } else {
     HEAP32[i17 >> 2] = F_BASE_vi + 14;
     HEAP32[i17 + 4 >> 2] = 0;
     return;
    }
   } else {
    HEAP32[i9 >> 2] = F_BASE_vi + 4;
    HEAP32[i9 + 4 >> 2] = 0;
    i9 = i1 + 58 | 0;
    HEAP8[i9] = 2;
    i17 = i1 + 68 | 0;
    if ((HEAP8[i12] & 1) == 0) {
     HEAP32[i17 >> 2] = F_BASE_vi + 4;
     HEAP32[i17 + 4 >> 2] = 0;
     return;
    } else {
     HEAP32[i17 >> 2] = F_BASE_vi + 8;
     HEAP32[i17 + 4 >> 2] = 0;
     HEAP8[i9] = 3;
     return;
    }
   }
  } else {
   if ((i16 | 0) != 0) {
    break;
   }
   if ((HEAP32[i2 >> 2] | 0) != (HEAP32[i4 >> 2] | 0)) {
    break;
   }
   i9 = i1 + 60 | 0;
   HEAP32[i9 >> 2] = F_BASE_vi + 2;
   HEAP32[i9 + 4 >> 2] = 0;
   HEAP8[i1 + 58 | 0] = 0;
   i9 = i1 + 68 | 0;
   HEAP32[i9 >> 2] = F_BASE_vi + 2;
   HEAP32[i9 + 4 >> 2] = 0;
  }
 } while (0);
 HEAP8[i1 + 58 | 0] = 0;
 i4 = i1 + 60 | 0;
 HEAP32[i4 >> 2] = F_BASE_vi + 6;
 HEAP32[i4 + 4 >> 2] = 0;
 i4 = i1 + 68 | 0;
 HEAP32[i4 >> 2] = F_BASE_vi + 12;
 HEAP32[i4 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore15SegmentedString15advanceSlowCaseEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 do {
  if ((HEAP16[i2 >> 1] | 0) == 0) {
   i3 = i1 + 8 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) == 0) {
    if ((HEAP32[i1 + 36 >> 2] | 0) != (HEAP32[i1 + 40 >> 2] | 0)) {
     i5 = 0;
     break;
    }
    HEAP32[i3 >> 2] = 0;
    HEAP32[i1 + 4 >> 2] = 0;
    HEAP8[i1 + 13 | 0] = 0;
    HEAP8[i1 + 57 | 0] = 1;
    HEAP8[i1 + 58 | 0] = 0;
    i6 = i1 + 60 | 0;
    HEAP32[i6 >> 2] = F_BASE_vi + 2;
    HEAP32[i6 + 4 >> 2] = 0;
    i6 = i1 + 68 | 0;
    HEAP32[i6 >> 2] = F_BASE_vi + 2;
    HEAP32[i6 + 4 >> 2] = 0;
    i5 = 0;
    break;
   } else {
    i6 = i4 - 1 | 0;
    HEAP32[i3 >> 2] = i6;
    if ((i6 | 0) != 0) {
     i7 = 21;
     break;
    }
    __ZN7WebCore15SegmentedString16advanceSubstringEv(i1);
    i8 = HEAP32[i3 >> 2] | 0;
    i7 = 22;
    break;
   }
  } else {
   i3 = i1 + 2 | 0;
   i6 = HEAP16[i3 >> 1] | 0;
   HEAP16[i2 >> 1] = i6;
   HEAP16[i3 >> 1] = 0;
   if (i6 << 16 >> 16 != 0) {
    HEAP16[i1 + 20 >> 1] = i6;
    return;
   }
   i6 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i6 | 0) <= 1) {
    do {
     if ((i6 | 0) == 0) {
      if ((HEAP32[i1 + 36 >> 2] | 0) != (HEAP32[i1 + 40 >> 2] | 0)) {
       break;
      }
      i3 = i1 + 60 | 0;
      HEAP32[i3 >> 2] = F_BASE_vi + 2;
      HEAP32[i3 + 4 >> 2] = 0;
      HEAP8[i1 + 58 | 0] = 0;
      i3 = i1 + 68 | 0;
      HEAP32[i3 >> 2] = F_BASE_vi + 2;
      HEAP32[i3 + 4 >> 2] = 0;
     }
    } while (0);
    HEAP8[i1 + 58 | 0] = 0;
    i3 = i1 + 60 | 0;
    HEAP32[i3 >> 2] = F_BASE_vi + 6;
    HEAP32[i3 + 4 >> 2] = 0;
    i3 = i1 + 68 | 0;
    HEAP32[i3 >> 2] = F_BASE_vi + 12;
    HEAP32[i3 + 4 >> 2] = 0;
    i8 = i6;
    i7 = 22;
    break;
   }
   i3 = i1 + 60 | 0;
   if ((HEAP8[i1 + 13 | 0] & 1) == 0) {
    HEAP32[i3 >> 2] = F_BASE_vi + 10;
    HEAP32[i3 + 4 >> 2] = 0;
    HEAP8[i1 + 58 | 0] = 0;
    i4 = i1 + 68 | 0;
    if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
     HEAP32[i4 >> 2] = F_BASE_vi + 10;
     HEAP32[i4 + 4 >> 2] = 0;
     i8 = i6;
     i7 = 22;
     break;
    } else {
     HEAP32[i4 >> 2] = F_BASE_vi + 14;
     HEAP32[i4 + 4 >> 2] = 0;
     i8 = i6;
     i7 = 22;
     break;
    }
   } else {
    HEAP32[i3 >> 2] = F_BASE_vi + 4;
    HEAP32[i3 + 4 >> 2] = 0;
    i3 = i1 + 58 | 0;
    HEAP8[i3] = 2;
    i4 = i1 + 68 | 0;
    if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
     HEAP32[i4 >> 2] = F_BASE_vi + 4;
     HEAP32[i4 + 4 >> 2] = 0;
     i8 = i6;
     i7 = 22;
     break;
    } else {
     HEAP32[i4 >> 2] = F_BASE_vi + 8;
     HEAP32[i4 + 4 >> 2] = 0;
     HEAP8[i3] = 3;
     i7 = 21;
     break;
    }
   }
  }
 } while (0);
 if ((i7 | 0) == 21) {
  i7 = 23;
 } else if ((i7 | 0) == 22) {
  if ((i8 | 0) == 0) {
   i5 = 0;
  } else {
   i7 = 23;
  }
 }
 do {
  if ((i7 | 0) == 23) {
   i8 = i1 + 4 | 0;
   if ((HEAP8[i1 + 13 | 0] & 1) != 0) {
    i5 = HEAPU8[HEAP32[i8 >> 2] | 0] | 0;
    break;
   }
   i2 = HEAP32[i8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i5 = 0;
    break;
   }
   i5 = HEAP16[i2 >> 1] | 0;
  }
 } while (0);
 HEAP16[i1 + 20 >> 1] = i5;
 return;
}
function __ZN7WebCore15SegmentedStringaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 HEAP16[i5 >> 1] = HEAP16[i2 >> 1] | 0;
 i6 = i1 + 2 | 0;
 HEAP16[i6 >> 1] = HEAP16[i2 + 2 >> 1] | 0;
 i7 = i1 + 4 | 0;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = HEAP32[i2 + 4 >> 2];
 i9 = i1 + 8 | 0;
 HEAP32[i9 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP8[i1 + 12 | 0] = HEAP8[i2 + 12 | 0] & 1;
 i10 = i1 + 13 | 0;
 HEAP8[i10] = HEAP8[i2 + 13 | 0] & 1;
 i11 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i11 | 0) != 0) {
  i12 = i11 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = i1 + 16 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = i11;
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
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EEC2ERKS3_(i4, i2 + 36 | 0);
 i13 = i1 + 36 | 0;
 i12 = i4 | 0;
 i11 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i12 >> 2] = i11;
 i11 = i1 + 40 | 0;
 i12 = i4 + 4 | 0;
 i13 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i12 >> 2] = i13;
 i13 = i1 + 44 | 0;
 i12 = i4 + 8 | 0;
 i11 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i12 >> 2] = i11;
 i11 = i1 + 48 | 0;
 i13 = i4 + 12 | 0;
 i14 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i13 >> 2] = i14;
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i4);
 i4 = HEAP32[i12 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i12 >> 2] = 0;
  HEAP32[i13 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP16[i6 >> 1] | 0;
 do {
  if (i4 << 16 >> 16 == 0) {
   i6 = HEAP16[i5 >> 1] | 0;
   if (i6 << 16 >> 16 != 0) {
    HEAP16[i1 + 20 >> 1] = i6;
    break;
   }
   do {
    if ((HEAP32[i9 >> 2] | 0) == 0) {
     i15 = 0;
    } else {
     if ((HEAP8[i10] & 1) != 0) {
      i15 = HEAPU8[HEAP32[i8 >> 2] | 0] | 0;
      break;
     }
     i6 = HEAP32[i7 >> 2] | 0;
     if ((i6 | 0) == 0) {
      i15 = 0;
      break;
     }
     i15 = HEAP16[i6 >> 1] | 0;
    }
   } while (0);
   HEAP16[i1 + 20 >> 1] = i15;
  } else {
   HEAP16[i1 + 20 >> 1] = i4;
  }
 } while (0);
 HEAP8[i1 + 56 | 0] = HEAP8[i2 + 56 | 0] & 1;
 HEAP8[i1 + 57 | 0] = HEAP8[i2 + 57 | 0] & 1;
 HEAP8[i1 + 58 | 0] = HEAP8[i2 + 58 | 0] | 0;
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 i4 = i2 + 60 | 0;
 i15 = HEAP32[i4 + 4 >> 2] | 0;
 i7 = i1 + 60 | 0;
 HEAP32[i7 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i7 + 4 >> 2] = i15;
 i15 = i2 + 68 | 0;
 i2 = HEAP32[i15 + 4 >> 2] | 0;
 i7 = i1 + 68 | 0;
 HEAP32[i7 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i7 + 4 >> 2] = i2;
 STACKTOP = i3;
 return i1 | 0;
}
function __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EEC2ERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 i5 = i1 + 4 | 0;
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 i8 = i1 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 12 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 do {
  if ((i7 | 0) == 0) {
   i10 = i4;
   i11 = i6;
   i12 = 0;
  } else {
   if (i7 >>> 0 > 268435455 >>> 0) {
    _WTFCrash();
   } else {
    i1 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 4) | 0;
    HEAP32[i9 >> 2] = i1 >>> 4;
    i13 = __ZN3WTF10fastMallocEj(i1) | 0;
    HEAP32[i8 >> 2] = i13;
    i10 = HEAP32[i3 >> 2] | 0;
    i11 = HEAP32[i5 >> 2] | 0;
    i12 = i13;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i5 + (i11 << 4) | 0;
 if (i10 >>> 0 <= i11 >>> 0) {
  if ((i10 | 0) == (i11 | 0)) {
   return;
  }
  i7 = i5 + (i10 << 4) | 0;
  i6 = i12 + (i10 << 4) | 0;
  while (1) {
   HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
   HEAP8[i6 + 8 | 0] = HEAP8[i7 + 8 | 0] & 1;
   HEAP8[i6 + 9 | 0] = HEAP8[i7 + 9 | 0] & 1;
   i4 = HEAP32[i7 + 12 >> 2] | 0;
   HEAP32[i6 + 12 >> 2] = i4;
   if ((i4 | 0) != 0) {
    i13 = i4 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   }
   i13 = i7 + 16 | 0;
   if ((i13 | 0) == (i2 | 0)) {
    break;
   } else {
    i7 = i13;
    i6 = i6 + 16 | 0;
   }
  }
  return;
 }
 if ((i11 | 0) == 0) {
  i14 = i10;
 } else {
  i10 = i5;
  i11 = i12;
  while (1) {
   HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i11 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
   HEAP8[i11 + 8 | 0] = HEAP8[i10 + 8 | 0] & 1;
   HEAP8[i11 + 9 | 0] = HEAP8[i10 + 9 | 0] & 1;
   i12 = HEAP32[i10 + 12 >> 2] | 0;
   HEAP32[i11 + 12 >> 2] = i12;
   if ((i12 | 0) != 0) {
    i6 = i12 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   }
   i6 = i10 + 16 | 0;
   if ((i6 | 0) == (i2 | 0)) {
    break;
   } else {
    i10 = i6;
    i11 = i11 + 16 | 0;
   }
  }
  i14 = HEAP32[i3 >> 2] | 0;
 }
 i3 = HEAP32[i9 >> 2] | 0;
 i9 = i5 + (i3 << 4) | 0;
 if ((i14 | 0) == (i3 | 0)) {
  return;
 }
 i3 = i5 + (i14 << 4) | 0;
 i5 = (HEAP32[i8 >> 2] | 0) + (i14 << 4) | 0;
 while (1) {
  HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i5 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
  HEAP8[i5 + 8 | 0] = HEAP8[i3 + 8 | 0] & 1;
  HEAP8[i5 + 9 | 0] = HEAP8[i3 + 9 | 0] & 1;
  i14 = HEAP32[i3 + 12 >> 2] | 0;
  HEAP32[i5 + 12 >> 2] = i14;
  if ((i14 | 0) != 0) {
   i8 = i14 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
  i8 = i3 + 16 | 0;
  if ((i8 | 0) == (i9 | 0)) {
   break;
  } else {
   i3 = i8;
   i5 = i5 + 16 | 0;
  }
 }
 return;
}
function __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + (i4 << 4) | 0;
 if (i3 >>> 0 <= i4 >>> 0) {
  if ((i3 | 0) == (i4 | 0)) {
   return;
  }
  i8 = i6 + (i3 << 4) | 0;
  while (1) {
   i9 = HEAP32[i8 + 12 >> 2] | 0;
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
   i8 = i8 + 16 | 0;
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
   i6 = HEAP32[i3 + 12 >> 2] | 0;
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
   i3 = i3 + 16 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i12 + (i2 << 4) | 0;
 if ((i13 | 0) == (i2 | 0)) {
  return;
 }
 i2 = i12 + (i13 << 4) | 0;
 while (1) {
  i13 = HEAP32[i2 + 12 >> 2] | 0;
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
  i2 = i2 + 16 | 0;
  if ((i2 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore15SegmentedStringC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 | 0;
 HEAP16[i3 >> 1] = HEAP16[i2 >> 1] | 0;
 i4 = i1 + 2 | 0;
 HEAP16[i4 >> 1] = HEAP16[i2 + 2 >> 1] | 0;
 i5 = i1 + 4 | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i2 + 4 >> 2];
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP8[i1 + 12 | 0] = HEAP8[i2 + 12 | 0] & 1;
 i8 = i1 + 13 | 0;
 HEAP8[i8] = HEAP8[i2 + 13 | 0] & 1;
 i9 = HEAP32[i2 + 16 >> 2] | 0;
 HEAP32[i1 + 16 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i10 = i9 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EEC2ERKS3_(i1 + 36 | 0, i2 + 36 | 0);
 HEAP8[i1 + 56 | 0] = HEAP8[i2 + 56 | 0] & 1;
 HEAP8[i1 + 57 | 0] = HEAP8[i2 + 57 | 0] & 1;
 HEAP8[i1 + 58 | 0] = HEAP8[i2 + 58 | 0] | 0;
 i10 = i1 + 60 | 0;
 i9 = i2 + 60 | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i10 + 4 >> 2] = i11;
 i11 = i1 + 68 | 0;
 i10 = i2 + 68 | 0;
 i2 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i11 + 4 >> 2] = i2;
 i2 = HEAP16[i4 >> 1] | 0;
 if (i2 << 16 >> 16 != 0) {
  HEAP16[i1 + 20 >> 1] = i2;
  return;
 }
 i2 = HEAP16[i3 >> 1] | 0;
 if (i2 << 16 >> 16 != 0) {
  HEAP16[i1 + 20 >> 1] = i2;
  return;
 }
 do {
  if ((HEAP32[i7 >> 2] | 0) == 0) {
   i12 = 0;
  } else {
   if ((HEAP8[i8] & 1) != 0) {
    i12 = HEAPU8[HEAP32[i6 >> 2] | 0] | 0;
    break;
   }
   i2 = HEAP32[i5 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i12 = 0;
    break;
   }
   i12 = HEAP16[i2 >> 1] | 0;
  }
 } while (0);
 HEAP16[i1 + 20 >> 1] = i12;
 return;
}
function __ZN7WebCore15SegmentedStringC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 | 0;
 HEAP16[i3 >> 1] = HEAP16[i2 >> 1] | 0;
 i4 = i1 + 2 | 0;
 HEAP16[i4 >> 1] = HEAP16[i2 + 2 >> 1] | 0;
 i5 = i1 + 4 | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i2 + 4 >> 2];
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP8[i1 + 12 | 0] = HEAP8[i2 + 12 | 0] & 1;
 i8 = i1 + 13 | 0;
 HEAP8[i8] = HEAP8[i2 + 13 | 0] & 1;
 i9 = HEAP32[i2 + 16 >> 2] | 0;
 HEAP32[i1 + 16 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i10 = i9 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EEC2ERKS3_(i1 + 36 | 0, i2 + 36 | 0);
 HEAP8[i1 + 56 | 0] = HEAP8[i2 + 56 | 0] & 1;
 HEAP8[i1 + 57 | 0] = HEAP8[i2 + 57 | 0] & 1;
 HEAP8[i1 + 58 | 0] = HEAP8[i2 + 58 | 0] | 0;
 i10 = i1 + 60 | 0;
 i9 = i2 + 60 | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i10 + 4 >> 2] = i11;
 i11 = i1 + 68 | 0;
 i10 = i2 + 68 | 0;
 i2 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i11 + 4 >> 2] = i2;
 i2 = HEAP16[i4 >> 1] | 0;
 if (i2 << 16 >> 16 != 0) {
  HEAP16[i1 + 20 >> 1] = i2;
  return;
 }
 i2 = HEAP16[i3 >> 1] | 0;
 if (i2 << 16 >> 16 != 0) {
  HEAP16[i1 + 20 >> 1] = i2;
  return;
 }
 do {
  if ((HEAP32[i7 >> 2] | 0) == 0) {
   i12 = 0;
  } else {
   if ((HEAP8[i8] & 1) != 0) {
    i12 = HEAPU8[HEAP32[i6 >> 2] | 0] | 0;
    break;
   }
   i2 = HEAP32[i5 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i12 = 0;
    break;
   }
   i12 = HEAP16[i2 >> 1] | 0;
  }
 } while (0);
 HEAP16[i1 + 20 >> 1] = i12;
 return;
}
function __ZN7WebCore15SegmentedString7prependERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = HEAP32[i2 + 36 >> 2] | 0;
 i4 = HEAP32[i2 + 40 >> 2] | 0;
 if ((i3 | 0) != (i4 | 0)) {
  i5 = i2 + 48 | 0;
  i6 = i2 + 44 | 0;
  i7 = i4;
  while (1) {
   if ((i7 | 0) == 0) {
    __ZN7WebCore15SegmentedString7prependERKNS_18SegmentedSubstringE(i1, (HEAP32[i6 >> 2] | 0) + ((HEAP32[i5 >> 2] | 0) - 1 << 4) | 0);
    i8 = HEAP32[i5 >> 2] | 0;
   } else {
    __ZN7WebCore15SegmentedString7prependERKNS_18SegmentedSubstringE(i1, (HEAP32[i6 >> 2] | 0) + (i7 - 1 << 4) | 0);
    i8 = i7;
   }
   i7 = i8 - 1 | 0;
   if ((i7 | 0) == (i3 | 0)) {
    break;
   }
  }
 }
 __ZN7WebCore15SegmentedString7prependERKNS_18SegmentedSubstringE(i1, i2 + 4 | 0);
 i2 = HEAP16[i1 >> 1] | 0;
 if (i2 << 16 >> 16 != 0) {
  i9 = i2;
  i10 = i1 + 20 | 0;
  HEAP16[i10 >> 1] = i9;
  return;
 }
 i2 = i1 + 4 | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  i9 = 0;
  i10 = i1 + 20 | 0;
  HEAP16[i10 >> 1] = i9;
  return;
 }
 if ((HEAP8[i1 + 13 | 0] & 1) != 0) {
  i9 = HEAPU8[HEAP32[i2 >> 2] | 0] | 0;
  i10 = i1 + 20 | 0;
  HEAP16[i10 >> 1] = i9;
  return;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i9 = 0;
  i10 = i1 + 20 | 0;
  HEAP16[i10 >> 1] = i9;
  return;
 }
 i9 = HEAP16[i3 >> 1] | 0;
 i10 = i1 + 20 | 0;
 HEAP16[i10 >> 1] = i9;
 return;
}
function __ZN7WebCore15SegmentedString28advanceAndUpdateLineNumber16Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 + 20 | 0;
 if ((HEAP16[i2 >> 1] | 0) == 10) {
  i3 = i1 + 32 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  if ((HEAP16[i1 >> 1] | 0) == 0) {
   i4 = 0;
  } else {
   i4 = (HEAP16[i1 + 2 >> 1] | 0) == 0 ? 1 : 2;
  }
  i3 = HEAP32[i1 + 16 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i5 = 0;
  } else {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
  }
  i3 = HEAP32[i1 + 8 >> 2] | 0;
  HEAP32[i1 + 28 >> 2] = 1 - i4 + (HEAP32[i1 + 24 >> 2] | 0) + i5 - i3;
  i6 = i3;
 } else {
  i6 = HEAP32[i1 + 8 >> 2] | 0;
 }
 i3 = i6 - 1 | 0;
 HEAP32[i1 + 8 >> 2] = i3;
 if ((i3 | 0) != 1) {
  i7 = i1 + 4 | 0;
  i8 = i7;
  i9 = HEAP32[i8 >> 2] | 0;
  i10 = i9 + 2 | 0;
  i11 = i7 | 0;
  i12 = i10;
  HEAP32[i11 >> 2] = i12;
  i13 = HEAP16[i10 >> 1] | 0;
  HEAP16[i2 >> 1] = i13;
  return;
 }
 HEAP8[i1 + 58 | 0] = 0;
 i3 = i1 + 60 | 0;
 HEAP32[i3 >> 2] = F_BASE_vi + 6;
 HEAP32[i3 + 4 >> 2] = 0;
 i3 = i1 + 68 | 0;
 HEAP32[i3 >> 2] = F_BASE_vi + 12;
 HEAP32[i3 + 4 >> 2] = 0;
 i7 = i1 + 4 | 0;
 i8 = i7;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i9 + 2 | 0;
 i11 = i7 | 0;
 i12 = i10;
 HEAP32[i11 >> 2] = i12;
 i13 = HEAP16[i10 >> 1] | 0;
 HEAP16[i2 >> 1] = i13;
 return;
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
function __ZN7WebCore15SegmentedString27advanceAndUpdateLineNumber8Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 + 20 | 0;
 if ((HEAP16[i2 >> 1] | 0) == 10) {
  i3 = i1 + 32 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  if ((HEAP16[i1 >> 1] | 0) == 0) {
   i4 = 0;
  } else {
   i4 = (HEAP16[i1 + 2 >> 1] | 0) == 0 ? 1 : 2;
  }
  i3 = HEAP32[i1 + 16 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i5 = 0;
  } else {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
  }
  i3 = HEAP32[i1 + 8 >> 2] | 0;
  HEAP32[i1 + 28 >> 2] = 1 - i4 + (HEAP32[i1 + 24 >> 2] | 0) + i5 - i3;
  i6 = i3;
 } else {
  i6 = HEAP32[i1 + 8 >> 2] | 0;
 }
 i3 = i6 - 1 | 0;
 HEAP32[i1 + 8 >> 2] = i3;
 if ((i3 | 0) != 1) {
  i7 = i1 + 4 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i7 >> 2] = i9;
  i10 = HEAP8[i9] | 0;
  i11 = i10 & 255;
  HEAP16[i2 >> 1] = i11;
  return;
 }
 HEAP8[i1 + 58 | 0] = 0;
 i3 = i1 + 60 | 0;
 HEAP32[i3 >> 2] = F_BASE_vi + 6;
 HEAP32[i3 + 4 >> 2] = 0;
 i3 = i1 + 68 | 0;
 HEAP32[i3 >> 2] = F_BASE_vi + 12;
 HEAP32[i3 + 4 >> 2] = 0;
 i7 = i1 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i8 + 1 | 0;
 HEAP32[i7 >> 2] = i9;
 i10 = HEAP8[i9] | 0;
 i11 = i10 & 255;
 HEAP16[i2 >> 1] = i11;
 return;
}
function __ZN7WebCore15SegmentedString7advanceEjPt(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = i1 + 20 | 0;
 i5 = i1 + 58 | 0;
 i6 = i1 + 60 | 0;
 i7 = i1;
 i8 = i1 + 8 | 0;
 i9 = i1 + 4 | 0;
 i10 = i1 + 68 | 0;
 i1 = 0;
 while (1) {
  HEAP16[i3 + (i1 << 1) >> 1] = HEAP16[i4 >> 1] | 0;
  do {
   if ((HEAP8[i5] & 2) == 0) {
    i11 = i7 + (HEAP32[i6 + 4 >> 2] | 0) | 0;
    i12 = HEAP32[i6 >> 2] | 0;
    if ((i12 & 1 | 0) == 0) {
     i13 = i12;
    } else {
     i13 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i12 - 1) >> 2] | 0;
    }
    FUNCTION_TABLE_vi[i13 & 15](i11);
   } else {
    i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
    HEAP32[i8 >> 2] = i11;
    i12 = (HEAP32[i9 >> 2] | 0) + 1 | 0;
    HEAP32[i9 >> 2] = i12;
    HEAP16[i4 >> 1] = HEAPU8[i12] | 0;
    if ((i11 | 0) != 1) {
     break;
    }
    HEAP8[i5] = 0;
    HEAP32[i6 >> 2] = F_BASE_vi + 6;
    HEAP32[i6 + 4 >> 2] = 0;
    HEAP32[i10 >> 2] = F_BASE_vi + 12;
    HEAP32[i10 + 4 >> 2] = 0;
   }
  } while (0);
  i1 = i1 + 1 | 0;
  if (i1 >>> 0 >= i2 >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore15SegmentedString6appendERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 __ZN7WebCore15SegmentedString6appendERKNS_18SegmentedSubstringE(i1, i2 + 4 | 0);
 i3 = HEAP32[i2 + 36 >> 2] | 0;
 i4 = HEAP32[i2 + 40 >> 2] | 0;
 if ((i3 | 0) != (i4 | 0)) {
  i5 = i2 + 44 | 0;
  i6 = i2 + 48 | 0;
  i2 = i3;
  while (1) {
   __ZN7WebCore15SegmentedString6appendERKNS_18SegmentedSubstringE(i1, (HEAP32[i5 >> 2] | 0) + (i2 << 4) | 0);
   i2 = (i2 | 0) == ((HEAP32[i6 >> 2] | 0) - 1 | 0) ? 0 : i2 + 1 | 0;
   if ((i2 | 0) == (i4 | 0)) {
    break;
   }
  }
 }
 i4 = HEAP16[i1 >> 1] | 0;
 do {
  if (i4 << 16 >> 16 == 0) {
   i2 = i1 + 4 | 0;
   if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
    i7 = 0;
    break;
   }
   if ((HEAP8[i1 + 13 | 0] & 1) != 0) {
    i7 = HEAPU8[HEAP32[i2 >> 2] | 0] | 0;
    break;
   }
   i6 = HEAP32[i2 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i7 = 0;
    break;
   }
   i7 = HEAP16[i6 >> 1] | 0;
  } else {
   i7 = i4;
  }
 } while (0);
 HEAP16[i1 + 20 >> 1] = i7;
 return;
}
function __ZN7WebCore15SegmentedString18setCurrentPositionEN3WTF13OrdinalNumberES2_i(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 i6 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 >> 2];
 if ((HEAP16[i1 >> 1] | 0) == 0) {
  i7 = 0;
 } else {
  i7 = (HEAP16[i1 + 2 >> 1] | 0) == 0 ? 1 : 2;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = HEAP32[i2 + 4 >> 2] | 0;
 }
 HEAP32[i1 + 28 >> 2] = i4 - i7 + (HEAP32[i1 + 24 >> 2] | 0) + i8 - (HEAP32[i1 + 8 >> 2] | 0) - (HEAP32[i3 >> 2] | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15SegmentedString5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP16[i1 + 20 >> 1] = 0;
 HEAP8[i1 + 13 | 0] = 0;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 i2 = i1 + 36 | 0;
 _memset(i1 | 0, 0, 12) | 0;
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i2);
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 i2 = i1 + 44 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 48 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 HEAP8[i1 + 56 | 0] = 0;
 HEAP8[i1 + 57 | 0] = 1;
 HEAP8[i1 + 58 | 0] = 0;
 i3 = i1 + 60 | 0;
 HEAP32[i3 >> 2] = F_BASE_vi + 2;
 HEAP32[i3 + 4 >> 2] = 0;
 i3 = i1 + 68 | 0;
 HEAP32[i3 >> 2] = F_BASE_vi + 2;
 HEAP32[i3 + 4 >> 2] = 0;
 return;
}
function __ZNK7WebCore15SegmentedString6lengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((HEAP16[i1 >> 1] | 0) == 0) {
  i3 = i2;
 } else {
  i3 = ((HEAP16[i1 + 2 >> 1] | 0) == 0 ? 1 : 2) + i2 | 0;
 }
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i4 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) == (i4 | 0)) {
  i5 = i3;
  return i5 | 0;
 }
 i6 = HEAP32[i1 + 44 >> 2] | 0;
 i7 = (HEAP32[i1 + 48 >> 2] | 0) - 1 | 0;
 i1 = i2;
 i2 = i3;
 while (1) {
  i3 = (HEAP32[i6 + (i1 << 4) + 4 >> 2] | 0) + i2 | 0;
  i8 = (i1 | 0) == (i7 | 0) ? 0 : i1 + 1 | 0;
  if ((i8 | 0) == (i4 | 0)) {
   i5 = i3;
   break;
  } else {
   i1 = i8;
   i2 = i3;
  }
 }
 return i5 | 0;
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
function __ZN7WebCore15SegmentedString9advance16Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 8 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) == 1) {
  HEAP8[i1 + 58 | 0] = 0;
  i3 = i1 + 60 | 0;
  HEAP32[i3 >> 2] = F_BASE_vi + 6;
  HEAP32[i3 + 4 >> 2] = 0;
  i3 = i1 + 68 | 0;
  HEAP32[i3 >> 2] = F_BASE_vi + 12;
  HEAP32[i3 + 4 >> 2] = 0;
 }
 i3 = i1 + 4 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) + 2 | 0;
 HEAP32[i3 >> 2] = i2;
 HEAP16[i1 + 20 >> 1] = HEAP16[i2 >> 1] | 0;
 return;
}
function __ZN7WebCore15SegmentedString8advance8Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 8 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) == 1) {
  HEAP8[i1 + 58 | 0] = 0;
  i3 = i1 + 60 | 0;
  HEAP32[i3 >> 2] = F_BASE_vi + 6;
  HEAP32[i3 + 4 >> 2] = 0;
  i3 = i1 + 68 | 0;
  HEAP32[i3 >> 2] = F_BASE_vi + 12;
  HEAP32[i3 + 4 >> 2] = 0;
 }
 i3 = i1 + 4 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i2;
 HEAP16[i1 + 20 >> 1] = HEAPU8[i2] | 0;
 return;
}
function __ZN7WebCore15SegmentedString21setExcludeLineNumbersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP8[i1 + 12 | 0] = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) == (i3 | 0)) {
  return;
 }
 i4 = i1 + 44 | 0;
 i5 = i1 + 48 | 0;
 i1 = i2;
 while (1) {
  HEAP8[(HEAP32[i4 >> 2] | 0) + (i1 << 4) + 8 | 0] = 0;
  i1 = (i1 | 0) == ((HEAP32[i5 >> 2] | 0) - 1 | 0) ? 0 : i1 + 1 | 0;
  if ((i1 | 0) == (i3 | 0)) {
   break;
  }
 }
 return;
}
function __ZNK7WebCore15SegmentedString13currentColumnEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP16[i2 >> 1] | 0) == 0) {
  i3 = 0;
 } else {
  i3 = (HEAP16[i2 + 2 >> 1] | 0) == 0 ? 1 : 2;
 }
 i4 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
 } else {
  i5 = HEAP32[i4 + 4 >> 2] | 0;
 }
 HEAP32[i1 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) - i3 + i5 - (HEAP32[i2 + 8 >> 2] | 0) - (HEAP32[i2 + 28 >> 2] | 0);
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
function __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP8[i1 + 58 | 0] = 0;
 i2 = i1 + 60 | 0;
 HEAP32[i2 >> 2] = F_BASE_vi + 6;
 HEAP32[i2 + 4 >> 2] = 0;
 i2 = i1 + 68 | 0;
 HEAP32[i2 >> 2] = F_BASE_vi + 12;
 HEAP32[i2 + 4 >> 2] = 0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZNK7WebCore15SegmentedString11currentLineEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 32 >> 2];
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function __ZN7WebCore15SegmentedString12advanceEmptyEv(i1) {
 i1 = i1 | 0;
 HEAP16[i1 + 20 >> 1] = 0;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZN7WebCore15SegmentedString5closeEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 56 | 0] = 1;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore15SegmentedString12advanceEmptyEv,b0,__ZN7WebCore15SegmentedString8advance8Ev,b0,__ZN7WebCore15SegmentedString15advanceSlowCaseEv,b0,__ZN7WebCore15SegmentedString27advanceAndUpdateLineNumber8Ev,b0,__ZN7WebCore15SegmentedString9advance16Ev,b0,__ZN7WebCore15SegmentedString34advanceAndUpdateLineNumberSlowCaseEv,b0,__ZN7WebCore15SegmentedString28advanceAndUpdateLineNumber16Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore15SegmentedStringC2ERKS0_,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore15SegmentedString12advanceEmptyEv","__ZN7WebCore15SegmentedString5closeEv","__ZN7WebCore15SegmentedStringaSERKS0_","__ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EEC2ERKS3_","__ZN7WebCore15SegmentedString27advanceAndUpdateLineNumber8Ev","_strlen","__ZN7WebCore15SegmentedString15advanceSlowCaseEv","__ZN7WebCore15SegmentedString16advanceSubstringEv","__ZN7WebCore15SegmentedString34advanceAndUpdateLineNumberSlowCaseEv","__ZNK7WebCore15SegmentedString6lengthEv","__ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE14expandCapacityEv","__ZN7WebCore15SegmentedString7prependERKS0_","__ZN7WebCore15SegmentedString6appendERKNS_18SegmentedSubstringE","_memset","__ZNK7WebCore15SegmentedString11currentLineEv","__ZN7WebCore15SegmentedString9advance16Ev","_memcpy","__ZN7WebCore15SegmentedString7advanceEjPt","__ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv","__ZN7WebCore15SegmentedString21setExcludeLineNumbersEv","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZNK7WebCore15SegmentedString8toStringEv","__ZN7WebCore15SegmentedString18setCurrentPositionEN3WTF13OrdinalNumberES2_i","__ZN7WebCore15SegmentedStringC2ERKS0_","__ZN7WebCore15SegmentedString28advanceAndUpdateLineNumber16Ev","__ZN7WebCore15SegmentedString6appendERKS0_","__ZN7WebCore15SegmentedString8advance8Ev","__ZN7WebCore15SegmentedString5clearEv","__ZN7WebCore15SegmentedString7prependERKNS_18SegmentedSubstringE","__ZNK7WebCore15SegmentedString13currentColumnEv","__ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv"]

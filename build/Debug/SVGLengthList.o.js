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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore13SVGLengthList5parseERKN3WTF6StringENS_13SVGLengthModeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i1 | 0;
 i10 = i1 + 4 | 0;
 do {
  if ((HEAP32[i10 >> 2] | 0) != 0) {
   i11 = i1 + 8 | 0;
   if ((HEAP32[i11 >> 2] | 0) != 0) {
    HEAP32[i11 >> 2] = 0;
   }
   i11 = i1 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   HEAP32[i11 >> 2] = 0;
   HEAP32[i10 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i12);
  }
 } while (0);
 HEAP32[i5 >> 2] = 0;
 i12 = i2 | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i13 = 0;
   i14 = 0;
  } else {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
    i15 = HEAP32[i2 + 8 >> 2] | 0;
    i16 = i2;
   } else {
    i11 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i2) | 0;
    i15 = i11;
    i16 = HEAP32[i12 >> 2] | 0;
   }
   if ((i16 | 0) == 0) {
    i13 = 0;
    i14 = i15;
    break;
   }
   i13 = HEAP32[i16 + 4 >> 2] | 0;
   i14 = i15;
  }
 } while (0);
 i15 = i14 + (i13 << 1) | 0;
 i13 = i7 | 0;
 i16 = i8 | 0;
 i12 = i1 + 8 | 0;
 i2 = i1 | 0;
 i1 = i14;
 while (1) {
  if (i1 >>> 0 < i15 >>> 0) {
   i17 = i1;
  } else {
   i18 = 43;
   break;
  }
  L18 : while (1) {
   switch (HEAP16[i17 >> 1] | 0) {
   case 44:
   case 32:
   case 9:
   case 10:
   case 13:
    {
     i19 = i17;
     i20 = 1;
     break L18;
     break;
    }
   default:
    {}
   }
   i14 = i17 + 2 | 0;
   if (i14 >>> 0 < i15 >>> 0) {
    i17 = i14;
   } else {
    i19 = i14;
    i20 = 0;
    break;
   }
  }
  if ((i19 | 0) == (i1 | 0)) {
   i18 = 44;
   break;
  }
  HEAP32[i13 >> 2] = 0;
  __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i6, i3, i7);
  i14 = HEAP32[i13 >> 2] | 0;
  do {
   if ((i14 | 0) != 0) {
    i11 = i14 | 0;
    i21 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i21 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i14);
     break;
    } else {
     HEAP32[i11 >> 2] = i21;
     break;
    }
   }
  } while (0);
  __ZN3WTF6StringC1EPKtj(i8, i1, i19 - i1 >> 1);
  i14 = HEAP32[i16 >> 2] | 0;
  if ((i14 | 0) == 0) {
   i18 = 45;
   break;
  }
  L30 : do {
   if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
    i22 = 1;
    i23 = i19;
   } else {
    __ZN7WebCore9SVGLength16setValueAsStringERKN3WTF6StringERi(i6, i8, i5);
    if ((HEAP32[i5 >> 2] | 0) != 0) {
     i22 = 1;
     i23 = i19;
     break;
    }
    i21 = HEAP32[i12 >> 2] | 0;
    if ((i21 | 0) == (HEAP32[i10 >> 2] | 0)) {
     __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i9, i6);
    } else {
     __ZN7WebCore9SVGLengthC1ERKS0_((HEAP32[i2 >> 2] | 0) + (i21 << 3) | 0, i6);
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
    }
    L37 : do {
     if (i20) {
      i21 = HEAP16[i19 >> 1] | 0;
      switch (i21 << 16 >> 16) {
      case 32:
      case 9:
      case 10:
      case 13:
      case 44:
       {
        i24 = i19;
        i25 = i21;
        break;
       }
      default:
       {
        i22 = 0;
        i23 = i19;
        break L30;
       }
      }
      while (1) {
       if (!((i25 << 16 >> 16 | 0) == 32 | (i25 << 16 >> 16 | 0) == 9 | (i25 << 16 >> 16 | 0) == 10 | (i25 << 16 >> 16 | 0) == 13)) {
        i26 = i24;
        break L37;
       }
       i21 = i24 + 2 | 0;
       if (i21 >>> 0 >= i15 >>> 0) {
        i26 = i21;
        break L37;
       }
       i24 = i21;
       i25 = HEAP16[i21 >> 1] | 0;
      }
     } else {
      i26 = i19;
     }
    } while (0);
    if (i26 >>> 0 >= i15 >>> 0) {
     i22 = 0;
     i23 = i26;
     break;
    }
    if ((HEAP16[i26 >> 1] | 0) != 44) {
     i22 = 0;
     i23 = i26;
     break;
    }
    i21 = i26 + 2 | 0;
    if (i21 >>> 0 < i15 >>> 0) {
     i27 = i21;
    } else {
     i22 = 0;
     i23 = i21;
     break;
    }
    while (1) {
     i21 = HEAP16[i27 >> 1] | 0;
     if (!((i21 << 16 >> 16 | 0) == 32 | (i21 << 16 >> 16 | 0) == 9 | (i21 << 16 >> 16 | 0) == 10 | (i21 << 16 >> 16 | 0) == 13)) {
      i22 = 0;
      i23 = i27;
      break L30;
     }
     i21 = i27 + 2 | 0;
     if (i21 >>> 0 < i15 >>> 0) {
      i27 = i21;
     } else {
      i22 = 0;
      i23 = i21;
      break;
     }
    }
   }
  } while (0);
  i14 = HEAP32[i16 >> 2] | 0;
  do {
   if ((i14 | 0) != 0) {
    i21 = i14 | 0;
    i11 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i14);
     break;
    } else {
     HEAP32[i21 >> 2] = i11;
     break;
    }
   }
  } while (0);
  if ((i22 | 0) == 1) {
   i18 = 46;
   break;
  } else {
   i1 = i23;
  }
 }
 if ((i18 | 0) == 43) {
  STACKTOP = i4;
  return;
 } else if ((i18 | 0) == 44) {
  STACKTOP = i4;
  return;
 } else if ((i18 | 0) == 45) {
  STACKTOP = i4;
  return;
 } else if ((i18 | 0) == 46) {
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore13SVGLengthList13valueAsStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 32 | 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i5 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i5 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i5 + 12 | 0;
 HEAP8[i10] = 1;
 HEAP32[i5 + 16 >> 2] = 0;
 i11 = i5 + 20 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i2 + 8 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 L1 : do {
  if ((i13 | 0) != 0) {
   i14 = i2 | 0;
   i15 = i6 | 0;
   i16 = i5 + 20 | 0;
   i17 = 0;
   while (1) {
    L5 : do {
     if ((i17 | 0) != 0) {
      HEAP8[i4] = 32;
      i18 = HEAP32[i9 >> 2] | 0;
      do {
       if ((i18 | 0) != 0) {
        i19 = HEAP32[i7 >> 2] | 0;
        if (i19 >>> 0 >= (HEAP32[i18 + 4 >> 2] | 0) >>> 0) {
         break;
        }
        if ((HEAP32[i8 >> 2] | 0) != 0) {
         break;
        }
        i20 = (HEAP8[i10] & 1) == 0;
        HEAP32[i7 >> 2] = i19 + 1;
        if (i20) {
         HEAP16[(HEAP32[i16 >> 2] | 0) + (i19 << 1) >> 1] = 32;
         break L5;
        } else {
         HEAP8[(HEAP32[i11 >> 2] | 0) + i19 | 0] = 32;
         break L5;
        }
       }
      } while (0);
      __ZN3WTF13StringBuilder6appendEPKhj(i5, i4, 1);
     }
    } while (0);
    if ((HEAP32[i12 >> 2] | 0) >>> 0 <= i17 >>> 0) {
     break;
    }
    __ZNK7WebCore9SVGLength13valueAsStringEv(i6, (HEAP32[i14 >> 2] | 0) + (i17 << 3) | 0);
    __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i6);
    i18 = HEAP32[i15 >> 2] | 0;
    do {
     if ((i18 | 0) != 0) {
      i19 = i18 | 0;
      i20 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
      if ((i20 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i18);
       break;
      } else {
       HEAP32[i19 >> 2] = i20;
       break;
      }
     }
    } while (0);
    i17 = i17 + 1 | 0;
    if (i17 >>> 0 >= i13 >>> 0) {
     break L1;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i5);
 i13 = HEAP32[i8 >> 2] | 0;
 if ((i13 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i5);
  i5 = HEAP32[i8 >> 2] | 0;
  HEAP32[i1 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i21 = i5;
   i22 = 21;
  }
 } else {
  HEAP32[i1 >> 2] = i13;
  i21 = i13;
  i22 = 21;
 }
 if ((i22 | 0) == 21) {
  i22 = i21 | 0;
  HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
 }
 i22 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i9 = i22 | 0;
   i21 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i9 >> 2] = i21;
    break;
   }
  }
 } while (0);
 i22 = HEAP32[i8 >> 2] | 0;
 if ((i22 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i22 | 0;
 i21 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i21 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i22);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i8 >> 2] = i21;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 <= i2 >>> 0) {
   if ((i7 + (i4 << 3) | 0) >>> 0 <= i2 >>> 0) {
    break;
   }
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   i9 = i8 + 1 + (i8 >>> 2) | 0;
   i8 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
   i8 = HEAP32[i6 >> 2] | 0;
   i10 = i8 + (i2 - i7 >> 3 << 3) | 0;
   i11 = i8;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = i11 + (i12 << 3) | 0;
   __ZN7WebCore9SVGLengthC1ERKS0_(i13, i10);
   i14 = HEAP32[i3 >> 2] | 0;
   i15 = i14 + 1 | 0;
   HEAP32[i3 >> 2] = i15;
   return;
  }
 } while (0);
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i7 + 1 + (i7 >>> 2) | 0;
 i7 = i4 >>> 0 > 16 >>> 0 ? i4 : 16;
 __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i5 >>> 0 ? i7 : i5);
 i10 = i2;
 i11 = HEAP32[i6 >> 2] | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i13 = i11 + (i12 << 3) | 0;
 __ZN7WebCore9SVGLengthC1ERKS0_(i13, i10);
 i14 = HEAP32[i3 >> 2] | 0;
 i15 = i14 + 1 | 0;
 HEAP32[i3 >> 2] = i15;
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
function __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 << 3) | 0;
 if (i2 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
 HEAP32[i3 >> 2] = i7 >>> 3;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   __ZN7WebCore9SVGLengthC1ERKS0_(i7, i6);
   i2 = i6 + 8 | 0;
   if ((i2 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i2;
    i7 = i7 + 8 | 0;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
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
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
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
function b1() {
 abort(1);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iii = [b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZN7WebCore13SVGLengthList5parseERKN3WTF6StringENS_13SVGLengthModeE","_memset","__ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","_memcpy","__ZNK7WebCore13SVGLengthList13valueAsStringEv","__ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_"]

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
  var _llvm_pow_f64=env._llvm_pow_f64;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore25parseKerningUnicodeStringERKN3WTF6StringERNS0_6VectorINSt3__14pairIjjEELj0ENS0_15CrashOnOverflowEEERNS0_7HashSetIS1_NS0_10StringHashENS0_10HashTraitsIS1_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i1 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return 1;
 }
 if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
  i9 = HEAP32[i1 + 8 >> 2] | 0;
  i10 = i1;
 } else {
  i11 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i1) | 0;
  i9 = i11;
  i10 = HEAP32[i8 >> 2] | 0;
 }
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return 1;
 }
 i8 = HEAP32[i10 + 4 >> 2] | 0;
 i10 = i9 + (i8 << 1) | 0;
 if ((i8 | 0) <= 0) {
  STACKTOP = i4;
  return 1;
 }
 i8 = i5 | 0;
 i11 = i5 + 4 | 0;
 i1 = i3 | 0;
 i3 = i6 | 0;
 i12 = i2 + 8 | 0;
 i13 = i2 + 4 | 0;
 i14 = i2 | 0;
 i15 = i5;
 i16 = i9;
 while (1) {
  i9 = i16;
  while (1) {
   if (i9 >>> 0 >= i10 >>> 0) {
    break;
   }
   if ((HEAP16[i9 >> 1] | 0) == 44) {
    break;
   } else {
    i9 = i9 + 2 | 0;
   }
  }
  if ((i9 | 0) == (i16 | 0)) {
   i17 = 56;
   break;
  }
  HEAP32[i8 >> 2] = 0;
  HEAP32[i11 >> 2] = 0;
  i18 = i9 - i16 | 0;
  i19 = i18 >> 1;
  L21 : do {
   if (i19 >>> 0 < 2 >>> 0) {
    i17 = 47;
   } else {
    if ((HEAP16[i16 >> 1] | 0) != 85) {
     i17 = 47;
     break;
    }
    if ((HEAP16[i16 + 2 >> 1] | 0) != 43) {
     i17 = 47;
     break;
    }
    i20 = i16 + 4 | 0;
    i21 = i16 + (i19 << 1) | 0;
    L25 : do {
     if ((i18 | 0) > 4) {
      i22 = 0;
      i23 = 0;
      i24 = i20;
      while (1) {
       i25 = HEAP16[i24 >> 1] | 0;
       if ((i25 - 48 & 65535) >>> 0 >= 10 >>> 0) {
        if (((i25 & 65535 | 32) - 97 | 0) >>> 0 >= 6 >>> 0) {
         i26 = i22;
         i27 = i23;
         i28 = i24;
         break L25;
        }
       }
       i29 = i23 + 1 | 0;
       if (i29 >>> 0 > 6 >>> 0) {
        i17 = 47;
        break L21;
       }
       i30 = i25 & 65535;
       if ((i25 & 65535) >>> 0 < 65 >>> 0) {
        i31 = i30 - 48 | 0;
       } else {
        i31 = i30 + 9 & 15;
       }
       i30 = i31 | i22 << 4;
       i25 = i24 + 2 | 0;
       if (i25 >>> 0 < i21 >>> 0) {
        i22 = i30;
        i23 = i29;
        i24 = i25;
       } else {
        i26 = i30;
        i27 = i29;
        i28 = i25;
        break;
       }
      }
     } else {
      i26 = 0;
      i27 = 0;
      i28 = i20;
     }
    } while (0);
    do {
     if ((i27 + 2 | 0) >>> 0 < i19 >>> 0) {
      if ((HEAP16[i28 >> 1] | 0) != 45) {
       i17 = 24;
       break;
      }
      if ((i27 | 0) == 0) {
       i17 = 47;
       break L21;
      }
      i20 = i28 + 2 | 0;
      if (i20 >>> 0 < i21 >>> 0) {
       i32 = 0;
       i33 = 0;
       i34 = i20;
      } else {
       i17 = 47;
       break L21;
      }
      while (1) {
       i20 = HEAP16[i34 >> 1] | 0;
       if ((i20 - 48 & 65535) >>> 0 >= 10 >>> 0) {
        if (((i20 & 65535 | 32) - 97 | 0) >>> 0 >= 6 >>> 0) {
         i35 = i32;
         i36 = i33;
         break;
        }
       }
       i24 = i33 + 1 | 0;
       if (i24 >>> 0 > 6 >>> 0) {
        i17 = 47;
        break L21;
       }
       i23 = i20 & 65535;
       if ((i20 & 65535) >>> 0 < 65 >>> 0) {
        i37 = i23 - 48 | 0;
       } else {
        i37 = i23 + 9 & 15;
       }
       i23 = i37 | i32 << 4;
       i20 = i34 + 2 | 0;
       if (i20 >>> 0 < i21 >>> 0) {
        i32 = i23;
        i33 = i24;
        i34 = i20;
       } else {
        i35 = i23;
        i36 = i24;
        break;
       }
      }
      if ((i36 | 0) == 0) {
       i17 = 47;
       break L21;
      } else {
       i38 = i35;
       i39 = i26;
      }
     } else {
      i17 = 24;
     }
    } while (0);
    if ((i17 | 0) == 24) {
     i17 = 0;
     L54 : do {
      if (i28 >>> 0 < i21 >>> 0) {
       i24 = i26;
       i23 = i27;
       i20 = i28;
       i22 = i26;
       while (1) {
        if ((HEAP16[i20 >> 1] | 0) != 63) {
         i40 = i24;
         i41 = i23;
         i42 = i22;
         break L54;
        }
        i25 = i23 + 1 | 0;
        if (i25 >>> 0 > 6 >>> 0) {
         i17 = 47;
         break L21;
        }
        i29 = i24 << 4;
        i30 = i22 << 4 | 15;
        i43 = i20 + 2 | 0;
        if (i43 >>> 0 < i21 >>> 0) {
         i24 = i29;
         i23 = i25;
         i20 = i43;
         i22 = i30;
        } else {
         i40 = i29;
         i41 = i25;
         i42 = i30;
         break;
        }
       }
      } else {
       i40 = i26;
       i41 = i27;
       i42 = i26;
      }
     } while (0);
     if ((i41 | 0) == 0) {
      i17 = 47;
      break;
     } else {
      i38 = i42;
      i39 = i40;
     }
    }
    HEAP32[i8 >> 2] = i39;
    HEAP32[i11 >> 2] = i38;
    i21 = HEAP32[i12 >> 2] | 0;
    if ((i21 | 0) != (HEAP32[i13 >> 2] | 0)) {
     i22 = HEAP32[i14 >> 2] | 0;
     HEAP32[i22 + (i21 << 3) >> 2] = i39;
     HEAP32[i22 + (i21 << 3) + 4 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     break;
    }
    i22 = i21 + 1 | 0;
    i20 = HEAP32[i14 >> 2] | 0;
    do {
     if (i20 >>> 0 > i5 >>> 0) {
      i17 = 44;
     } else {
      if ((i20 + (i21 << 3) | 0) >>> 0 <= i5 >>> 0) {
       i17 = 44;
       break;
      }
      __ZN3WTF6VectorINSt3__14pairIjjEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i22);
      i23 = HEAP32[i14 >> 2] | 0;
      i44 = i23 + (i15 - i20 >> 3 << 3) | 0;
      i45 = i23;
     }
    } while (0);
    if ((i17 | 0) == 44) {
     i17 = 0;
     __ZN3WTF6VectorINSt3__14pairIjjEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i22);
     i44 = i5;
     i45 = HEAP32[i14 >> 2] | 0;
    }
    i20 = HEAP32[i12 >> 2] | 0;
    HEAP32[i45 + (i20 << 3) >> 2] = HEAP32[i44 >> 2];
    HEAP32[i45 + (i20 << 3) + 4 >> 2] = HEAP32[i44 + 4 >> 2];
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   }
  } while (0);
  do {
   if ((i17 | 0) == 47) {
    i17 = 0;
    __ZN3WTF6StringC1EPKtj(i6, i16, i19);
    __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i7, i1, i6, i6);
    i18 = HEAP32[i3 >> 2] | 0;
    if ((i18 | 0) == 0) {
     break;
    }
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
  i19 = i9 + 2 | 0;
  if (i19 >>> 0 < i10 >>> 0) {
   i16 = i19;
  } else {
   i17 = 57;
   break;
  }
 }
 if ((i17 | 0) == 56) {
  STACKTOP = i4;
  return 1;
 } else if ((i17 | 0) == 57) {
  STACKTOP = i4;
  return 1;
 }
 return 0;
}
function __ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, d7 = +0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, d20 = +0, i21 = 0, d22 = +0, d23 = +0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, d29 = +0, i30 = 0, i31 = 0, d32 = +0, d33 = +0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i5 = HEAP32[i1 >> 2] | 0;
 do {
  if (i5 >>> 0 < i2 >>> 0) {
   if ((HEAP16[i5 >> 1] | 0) == 43) {
    i6 = i5 + 2 | 0;
    HEAP32[i1 >> 2] = i6;
    d7 = +1;
    i8 = i6;
    break;
   }
   if ((HEAP16[i5 >> 1] | 0) != 45) {
    d7 = +1;
    i8 = i5;
    break;
   }
   i6 = i5 + 2 | 0;
   HEAP32[i1 >> 2] = i6;
   d7 = +-1;
   i8 = i6;
  } else {
   d7 = +1;
   i8 = i5;
  }
 } while (0);
 if ((i8 | 0) == (i2 | 0)) {
  i9 = 0;
  return i9 | 0;
 }
 i6 = HEAP16[i8 >> 1] | 0;
 if (!((i6 - 48 & 65535) >>> 0 < 10 >>> 0 | i6 << 16 >> 16 == 46)) {
  i9 = 0;
  return i9 | 0;
 }
 do {
  if (i8 >>> 0 < i2 >>> 0) {
   i10 = i8;
   i11 = i6;
   while (1) {
    if ((i11 - 48 & 65535) >>> 0 >= 10 >>> 0) {
     i12 = i10;
     break;
    }
    i13 = i10 + 2 | 0;
    HEAP32[i1 >> 2] = i13;
    if (i13 >>> 0 >= i2 >>> 0) {
     i12 = i13;
     break;
    }
    i10 = i13;
    i11 = HEAP16[i13 >> 1] | 0;
   }
   if ((i12 | 0) == (i8 | 0)) {
    d14 = +0;
    i15 = i12;
    break;
   }
   i11 = i12 - 2 | 0;
   if (i11 >>> 0 < i8 >>> 0) {
    d16 = +0;
   } else {
    d17 = +0;
    d18 = +1;
    i10 = i11;
    while (1) {
     d19 = d17 + d18 * +((HEAPU16[i10 >> 1] | 0) - 48 | 0);
     i11 = i10 - 2 | 0;
     if (i11 >>> 0 < i8 >>> 0) {
      d16 = d19;
      break;
     } else {
      d17 = d19;
      d18 = d18 * +10;
      i10 = i11;
     }
    }
   }
   if (d16 >= -3.4028234663852886e+38 & d16 <= 3.4028234663852886e+38) {
    d14 = d16;
    i15 = i12;
    break;
   } else {
    i9 = 0;
   }
   return i9 | 0;
  } else {
   d14 = +0;
   i15 = i8;
  }
 } while (0);
 L27 : do {
  if (i15 >>> 0 < i2 >>> 0) {
   if ((HEAP16[i15 >> 1] | 0) != 46) {
    d20 = +0;
    i21 = i15;
    break;
   }
   i8 = i15 + 2 | 0;
   HEAP32[i1 >> 2] = i8;
   if (i8 >>> 0 >= i2 >>> 0) {
    i9 = 0;
    return i9 | 0;
   }
   i12 = HEAP16[i8 >> 1] | 0;
   if ((i12 - 48 & 65535) >>> 0 > 9 >>> 0) {
    i9 = 0;
    return i9 | 0;
   } else {
    d22 = +.10000000149011612;
    d23 = +0;
    i24 = i8;
    i25 = i12;
   }
   while (1) {
    if ((i25 - 48 & 65535) >>> 0 >= 10 >>> 0) {
     d20 = d23;
     i21 = i24;
     break L27;
    }
    i12 = i24 + 2 | 0;
    HEAP32[i1 >> 2] = i12;
    d16 = d23 + d22 * +((HEAPU16[i24 >> 1] | 0) - 48 | 0);
    if (i12 >>> 0 >= i2 >>> 0) {
     d20 = d16;
     i21 = i12;
     break L27;
    }
    d22 = d22 * +.10000000149011612;
    d23 = d16;
    i24 = i12;
    i25 = HEAP16[i12 >> 1] | 0;
   }
  } else {
   d20 = +0;
   i21 = i15;
  }
 } while (0);
 i15 = i21 + 2 | 0;
 do {
  if ((i21 | 0) != (i5 | 0) & i15 >>> 0 < i2 >>> 0) {
   i25 = HEAP16[i21 >> 1] | 0;
   if (!((i25 << 16 >> 16 | 0) == 101 | (i25 << 16 >> 16 | 0) == 69)) {
    i26 = 36;
    break;
   }
   i25 = HEAP16[i15 >> 1] | 0;
   if ((i25 << 16 >> 16 | 0) == 120 | (i25 << 16 >> 16 | 0) == 109) {
    i26 = 36;
    break;
   }
   HEAP32[i1 >> 2] = i15;
   i25 = HEAP16[i15 >> 1] | 0;
   if ((i25 << 16 >> 16 | 0) == 43) {
    i24 = i21 + 4 | 0;
    HEAP32[i1 >> 2] = i24;
    i27 = 1;
    i28 = i24;
   } else if ((i25 << 16 >> 16 | 0) == 45) {
    i25 = i21 + 4 | 0;
    HEAP32[i1 >> 2] = i25;
    i27 = -1;
    i28 = i25;
   } else {
    i27 = 1;
    i28 = i15;
   }
   if (i28 >>> 0 >= i2 >>> 0) {
    i9 = 0;
    return i9 | 0;
   }
   i25 = HEAP16[i28 >> 1] | 0;
   if ((i25 - 48 & 65535) >>> 0 > 9 >>> 0) {
    i9 = 0;
    return i9 | 0;
   } else {
    d29 = +0;
    i30 = i28;
    i31 = i25;
   }
   while (1) {
    if ((i31 - 48 & 65535) >>> 0 >= 10 >>> 0) {
     d32 = d29;
     break;
    }
    d23 = d29 * +10 + +((i31 & 65535) - 48 | 0);
    i25 = i30 + 2 | 0;
    HEAP32[i1 >> 2] = i25;
    if (i25 >>> 0 >= i2 >>> 0) {
     d32 = d23;
     break;
    }
    d29 = d23;
    i30 = i25;
    i31 = HEAP16[i25 >> 1] | 0;
   }
   if (d32 < -3.4028234663852886e+38) {
    i9 = 0;
    return i9 | 0;
   }
   if (d32 > +128 | d32 > 3.4028234663852886e+38) {
    i9 = 0;
    return i9 | 0;
   }
   d23 = d7 * (d14 + d20);
   HEAPF32[i3 >> 2] = d23;
   if (d32 == +0) {
    d33 = d23;
    break;
   }
   d22 = d23 * +Math_pow(+(+10), +(+(Math_imul(~~d32, i27) | 0)));
   HEAPF32[i3 >> 2] = d22;
   d33 = d22;
  } else {
   i26 = 36;
  }
 } while (0);
 if ((i26 | 0) == 36) {
  d32 = d7 * (d14 + d20);
  HEAPF32[i3 >> 2] = d32;
  d33 = d32;
 }
 if (!(d33 >= -3.4028234663852886e+38 & d33 <= 3.4028234663852886e+38)) {
  i9 = 0;
  return i9 | 0;
 }
 i3 = HEAP32[i1 >> 2] | 0;
 i27 = (i5 | 0) == (i3 | 0);
 if (i27 | i4 ^ 1) {
  i9 = i27 ^ 1;
  return i9 | 0;
 }
 L74 : do {
  if (i3 >>> 0 < i2 >>> 0) {
   i27 = HEAP16[i3 >> 1] | 0;
   switch (i27 << 16 >> 16) {
   case 32:
   case 9:
   case 10:
   case 13:
   case 44:
    {
     i34 = i3;
     i35 = i27;
     break;
    }
   default:
    {
     i9 = 1;
     return i9 | 0;
    }
   }
   while (1) {
    if (!((i35 << 16 >> 16 | 0) == 32 | (i35 << 16 >> 16 | 0) == 9 | (i35 << 16 >> 16 | 0) == 10 | (i35 << 16 >> 16 | 0) == 13)) {
     i36 = i34;
     break L74;
    }
    i27 = i34 + 2 | 0;
    HEAP32[i1 >> 2] = i27;
    if (i27 >>> 0 >= i2 >>> 0) {
     i36 = i27;
     break L74;
    }
    i34 = i27;
    i35 = HEAP16[i27 >> 1] | 0;
   }
  } else {
   i36 = i3;
  }
 } while (0);
 if (i36 >>> 0 >= i2 >>> 0) {
  i9 = 1;
  return i9 | 0;
 }
 if ((HEAP16[i36 >> 1] | 0) != 44) {
  i9 = 1;
  return i9 | 0;
 }
 i3 = i36 + 2 | 0;
 HEAP32[i1 >> 2] = i3;
 if (i3 >>> 0 < i2 >>> 0) {
  i37 = i3;
 } else {
  i9 = 1;
  return i9 | 0;
 }
 while (1) {
  i3 = HEAP16[i37 >> 1] | 0;
  if (!((i3 << 16 >> 16 | 0) == 32 | (i3 << 16 >> 16 | 0) == 9 | (i3 << 16 >> 16 | 0) == 10 | (i3 << 16 >> 16 | 0) == 13)) {
   i9 = 1;
   i26 = 65;
   break;
  }
  i3 = i37 + 2 | 0;
  HEAP32[i1 >> 2] = i3;
  if (i3 >>> 0 < i2 >>> 0) {
   i37 = i3;
  } else {
   i9 = 1;
   i26 = 66;
   break;
  }
 }
 if ((i26 | 0) == 65) {
  return i9 | 0;
 } else if ((i26 | 0) == 66) {
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCore11parseNumberERPKhS1_Rfb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, d8 = +0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, d14 = +0, d15 = +0, d16 = +0, i17 = 0, d18 = +0, i19 = 0, d20 = +0, i21 = 0, i22 = 0, d23 = +0, d24 = +0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, d30 = +0, d31 = +0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i5 = HEAP32[i1 >> 2] | 0;
 do {
  if (i5 >>> 0 < i2 >>> 0) {
   i6 = HEAP8[i5] | 0;
   if ((i6 << 24 >> 24 | 0) == 43) {
    i7 = i5 + 1 | 0;
    HEAP32[i1 >> 2] = i7;
    d8 = +1;
    i9 = i7;
    break;
   } else if ((i6 << 24 >> 24 | 0) == 45) {
    i6 = i5 + 1 | 0;
    HEAP32[i1 >> 2] = i6;
    d8 = +-1;
    i9 = i6;
    break;
   } else {
    d8 = +1;
    i9 = i5;
    break;
   }
  } else {
   d8 = +1;
   i9 = i5;
  }
 } while (0);
 if ((i9 | 0) == (i2 | 0)) {
  i10 = 0;
  return i10 | 0;
 }
 i6 = HEAP8[i9] | 0;
 i7 = (i6 - 48 & 255) >>> 0 < 10 >>> 0;
 if (!(i7 | i6 << 24 >> 24 == 46)) {
  i10 = 0;
  return i10 | 0;
 }
 do {
  if (i9 >>> 0 >= i2 >>> 0 | i7 ^ 1) {
   d11 = +0;
   i12 = i9;
  } else {
   i6 = i9;
   while (1) {
    i13 = i6 + 1 | 0;
    HEAP32[i1 >> 2] = i13;
    if (i13 >>> 0 >= i2 >>> 0) {
     break;
    }
    if (((HEAP8[i13] | 0) - 48 & 255) >>> 0 < 10 >>> 0) {
     i6 = i13;
    } else {
     break;
    }
   }
   if ((i13 | 0) == (i9 | 0)) {
    d11 = +0;
    i12 = i9;
    break;
   }
   if (i6 >>> 0 < i9 >>> 0) {
    d14 = +0;
   } else {
    d15 = +0;
    d16 = +1;
    i17 = i6;
    while (1) {
     d18 = d15 + d16 * +((HEAPU8[i17] | 0) - 48 | 0);
     i19 = i17 - 1 | 0;
     if (i19 >>> 0 < i9 >>> 0) {
      d14 = d18;
      break;
     } else {
      d15 = d18;
      d16 = d16 * +10;
      i17 = i19;
     }
    }
   }
   if (d14 >= -3.4028234663852886e+38 & d14 <= 3.4028234663852886e+38) {
    d11 = d14;
    i12 = i13;
    break;
   } else {
    i10 = 0;
   }
   return i10 | 0;
  }
 } while (0);
 L25 : do {
  if (i12 >>> 0 < i2 >>> 0) {
   if ((HEAP8[i12] | 0) != 46) {
    d20 = +0;
    i21 = i12;
    break;
   }
   i13 = i12 + 1 | 0;
   HEAP32[i1 >> 2] = i13;
   if (i13 >>> 0 >= i2 >>> 0) {
    i10 = 0;
    return i10 | 0;
   }
   if (((HEAP8[i13] | 0) - 48 & 255) >>> 0 > 9 >>> 0) {
    i10 = 0;
    return i10 | 0;
   } else {
    i22 = i13;
    d23 = +0;
    d24 = +.10000000149011612;
   }
   while (1) {
    i13 = i22 + 1 | 0;
    HEAP32[i1 >> 2] = i13;
    d14 = d23 + d24 * +((HEAPU8[i22] | 0) - 48 | 0);
    if (i13 >>> 0 >= i2 >>> 0) {
     d20 = d14;
     i21 = i13;
     break L25;
    }
    if (((HEAP8[i13] | 0) - 48 & 255) >>> 0 < 10 >>> 0) {
     i22 = i13;
     d23 = d14;
     d24 = d24 * +.10000000149011612;
    } else {
     d20 = d14;
     i21 = i13;
     break;
    }
   }
  } else {
   d20 = +0;
   i21 = i12;
  }
 } while (0);
 i12 = i21 + 1 | 0;
 do {
  if ((i21 | 0) != (i5 | 0) & i12 >>> 0 < i2 >>> 0) {
   i22 = HEAP8[i21] | 0;
   if (!((i22 << 24 >> 24 | 0) == 101 | (i22 << 24 >> 24 | 0) == 69)) {
    i25 = 32;
    break;
   }
   i22 = HEAP8[i12] | 0;
   if ((i22 << 24 >> 24 | 0) == 120 | (i22 << 24 >> 24 | 0) == 109) {
    i25 = 32;
    break;
   }
   HEAP32[i1 >> 2] = i12;
   i22 = HEAP8[i12] | 0;
   if ((i22 << 24 >> 24 | 0) == 43) {
    i13 = i21 + 2 | 0;
    HEAP32[i1 >> 2] = i13;
    i26 = 1;
    i27 = i13;
   } else if ((i22 << 24 >> 24 | 0) == 45) {
    i22 = i21 + 2 | 0;
    HEAP32[i1 >> 2] = i22;
    i26 = -1;
    i27 = i22;
   } else {
    i26 = 1;
    i27 = i12;
   }
   if (i27 >>> 0 >= i2 >>> 0) {
    i10 = 0;
    return i10 | 0;
   }
   i22 = HEAP8[i27] | 0;
   if ((i22 - 48 & 255) >>> 0 > 9 >>> 0) {
    i10 = 0;
    return i10 | 0;
   } else {
    i28 = i22;
    i29 = i27;
    d30 = +0;
   }
   while (1) {
    d30 = d30 * +10 + +((i28 & 255) - 48 | 0);
    i29 = i29 + 1 | 0;
    HEAP32[i1 >> 2] = i29;
    if (i29 >>> 0 >= i2 >>> 0) {
     break;
    }
    i28 = HEAP8[i29] | 0;
    if ((i28 - 48 & 255) >>> 0 >= 10 >>> 0) {
     break;
    }
   }
   if (d30 < -3.4028234663852886e+38) {
    i10 = 0;
    return i10 | 0;
   }
   if (d30 > +128 | d30 > 3.4028234663852886e+38) {
    i10 = 0;
    return i10 | 0;
   }
   d24 = d8 * (d11 + d20);
   HEAPF32[i3 >> 2] = d24;
   if (d30 == +0) {
    d31 = d24;
    break;
   }
   d23 = d24 * +Math_pow(+(+10), +(+(Math_imul(~~d30, i26) | 0)));
   HEAPF32[i3 >> 2] = d23;
   d31 = d23;
  } else {
   i25 = 32;
  }
 } while (0);
 if ((i25 | 0) == 32) {
  d30 = d8 * (d11 + d20);
  HEAPF32[i3 >> 2] = d30;
  d31 = d30;
 }
 if (!(d31 >= -3.4028234663852886e+38 & d31 <= 3.4028234663852886e+38)) {
  i10 = 0;
  return i10 | 0;
 }
 i3 = HEAP32[i1 >> 2] | 0;
 i26 = (i5 | 0) == (i3 | 0);
 if (i26 | i4 ^ 1) {
  i10 = i26 ^ 1;
  return i10 | 0;
 }
 L70 : do {
  if (i3 >>> 0 < i2 >>> 0) {
   i26 = HEAP8[i3] | 0;
   switch (i26 << 24 >> 24) {
   case 32:
   case 9:
   case 10:
   case 13:
   case 44:
    {
     i32 = i3;
     i33 = i26;
     break;
    }
   default:
    {
     i10 = 1;
     return i10 | 0;
    }
   }
   while (1) {
    if (!((i33 << 24 >> 24 | 0) == 32 | (i33 << 24 >> 24 | 0) == 9 | (i33 << 24 >> 24 | 0) == 10 | (i33 << 24 >> 24 | 0) == 13)) {
     i34 = i32;
     break L70;
    }
    i26 = i32 + 1 | 0;
    HEAP32[i1 >> 2] = i26;
    if (i26 >>> 0 >= i2 >>> 0) {
     i34 = i26;
     break L70;
    }
    i32 = i26;
    i33 = HEAP8[i26] | 0;
   }
  } else {
   i34 = i3;
  }
 } while (0);
 if (i34 >>> 0 >= i2 >>> 0) {
  i10 = 1;
  return i10 | 0;
 }
 if ((HEAP8[i34] | 0) != 44) {
  i10 = 1;
  return i10 | 0;
 }
 i3 = i34 + 1 | 0;
 HEAP32[i1 >> 2] = i3;
 if (i3 >>> 0 < i2 >>> 0) {
  i35 = i3;
 } else {
  i10 = 1;
  return i10 | 0;
 }
 while (1) {
  i3 = HEAP8[i35] | 0;
  if (!((i3 << 24 >> 24 | 0) == 32 | (i3 << 24 >> 24 | 0) == 9 | (i3 << 24 >> 24 | 0) == 10 | (i3 << 24 >> 24 | 0) == 13)) {
   i10 = 1;
   i25 = 50;
   break;
  }
  i3 = i35 + 1 | 0;
  HEAP32[i1 >> 2] = i3;
  if (i3 >>> 0 < i2 >>> 0) {
   i35 = i3;
  } else {
   i10 = 1;
   i25 = 51;
   break;
  }
 }
 if ((i25 | 0) == 50) {
  return i10 | 0;
 } else if ((i25 | 0) == 51) {
  return i10 | 0;
 }
 return 0;
}
function __ZN7WebCore21pointsListFromSVGDataERNS_12SVGPointListERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, d31 = +0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i7;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i10 = 1;
  STACKTOP = i3;
  return i10 | 0;
 }
 if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
  i10 = 1;
  STACKTOP = i3;
  return i10 | 0;
 }
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  i11 = HEAP32[i2 + 8 >> 2] | 0;
  i12 = i2;
 } else {
  i13 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i2) | 0;
  i11 = i13;
  i12 = HEAP32[i9 >> 2] | 0;
 }
 HEAP32[i4 >> 2] = i11;
 do {
  if ((i12 | 0) == 0) {
   i14 = 1;
   i15 = i11;
   i16 = i11;
  } else {
   i9 = HEAP32[i12 + 4 >> 2] | 0;
   i13 = i11 + (i9 << 1) | 0;
   L13 : do {
    if ((i9 | 0) > 0) {
     i2 = i11;
     while (1) {
      i17 = HEAP16[i2 >> 1] | 0;
      if (!((i17 << 16 >> 16 | 0) == 32 | (i17 << 16 >> 16 | 0) == 9 | (i17 << 16 >> 16 | 0) == 10 | (i17 << 16 >> 16 | 0) == 13)) {
       i18 = i2;
       break L13;
      }
      i17 = i2 + 2 | 0;
      HEAP32[i4 >> 2] = i17;
      if (i17 >>> 0 < i13 >>> 0) {
       i2 = i17;
      } else {
       i18 = i17;
       break;
      }
     }
    } else {
     i18 = i11;
    }
   } while (0);
   if (i18 >>> 0 >= i13 >>> 0) {
    i14 = 1;
    i15 = i18;
    i16 = i13;
    break;
   }
   i9 = i1 | 0;
   i2 = i7;
   i17 = i8 + 4 | 0;
   i19 = i1 + 8 | 0;
   i20 = i1 + 4 | 0;
   i21 = i1 | 0;
   i22 = i7;
   while (1) {
    HEAPF32[i5 >> 2] = +0;
    if (!(__ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i4, i13, i5, 1) | 0)) {
     i10 = 0;
     i23 = 35;
     break;
    }
    HEAPF32[i6 >> 2] = +0;
    if (!(__ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i4, i13, i6, 0) | 0)) {
     i10 = 0;
     i23 = 38;
     break;
    }
    i24 = HEAP32[i4 >> 2] | 0;
    L23 : do {
     if (i24 >>> 0 < i13 >>> 0) {
      i25 = i24;
      while (1) {
       i26 = HEAP16[i25 >> 1] | 0;
       if (!((i26 << 16 >> 16 | 0) == 32 | (i26 << 16 >> 16 | 0) == 9 | (i26 << 16 >> 16 | 0) == 10 | (i26 << 16 >> 16 | 0) == 13)) {
        i27 = i25;
        break L23;
       }
       i26 = i25 + 2 | 0;
       HEAP32[i4 >> 2] = i26;
       if (i26 >>> 0 < i13 >>> 0) {
        i25 = i26;
       } else {
        i27 = i26;
        break;
       }
      }
     } else {
      i27 = i24;
     }
    } while (0);
    do {
     if (i27 >>> 0 < i13 >>> 0) {
      if ((HEAP16[i27 >> 1] | 0) != 44) {
       i28 = 0;
       i29 = i27;
       break;
      }
      i24 = i27 + 2 | 0;
      HEAP32[i4 >> 2] = i24;
      i28 = 1;
      i29 = i24;
     } else {
      i28 = 0;
      i29 = i27;
     }
    } while (0);
    L32 : do {
     if (i29 >>> 0 < i13 >>> 0) {
      i24 = i29;
      while (1) {
       i25 = HEAP16[i24 >> 1] | 0;
       if (!((i25 << 16 >> 16 | 0) == 32 | (i25 << 16 >> 16 | 0) == 9 | (i25 << 16 >> 16 | 0) == 10 | (i25 << 16 >> 16 | 0) == 13)) {
        i30 = i24;
        break L32;
       }
       i25 = i24 + 2 | 0;
       HEAP32[i4 >> 2] = i25;
       if (i25 >>> 0 < i13 >>> 0) {
        i24 = i25;
       } else {
        i30 = i25;
        break;
       }
      }
     } else {
      i30 = i29;
     }
    } while (0);
    d31 = +HEAPF32[i6 >> 2];
    HEAPF32[i2 >> 2] = +HEAPF32[i5 >> 2];
    HEAPF32[i17 >> 2] = d31;
    i24 = HEAP32[i19 >> 2] | 0;
    if ((i24 | 0) == (HEAP32[i20 >> 2] | 0)) {
     i25 = i24 + 1 | 0;
     i26 = HEAP32[i21 >> 2] | 0;
     do {
      if (i26 >>> 0 > i8 >>> 0) {
       i23 = 27;
      } else {
       if ((i26 + (i24 << 3) | 0) >>> 0 <= i8 >>> 0) {
        i23 = 27;
        break;
       }
       __ZN3WTF6VectorIN7WebCore10FloatPointELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i9, i25);
       i32 = HEAP32[i21 >> 2] | 0;
       i33 = i32 + (i22 - i26 >> 3 << 3) | 0;
       i34 = i32;
      }
     } while (0);
     if ((i23 | 0) == 27) {
      i23 = 0;
      __ZN3WTF6VectorIN7WebCore10FloatPointELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i9, i25);
      i33 = i8;
      i34 = HEAP32[i21 >> 2] | 0;
     }
     i26 = i33;
     i32 = i34 + (HEAP32[i19 >> 2] << 3) | 0;
     i35 = HEAP32[i26 + 4 >> 2] | 0;
     HEAP32[i32 >> 2] = HEAP32[i26 >> 2];
     HEAP32[i32 + 4 >> 2] = i35;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
     i36 = HEAP32[i4 >> 2] | 0;
    } else {
     i35 = (HEAP32[i21 >> 2] | 0) + (i24 << 3) | 0;
     i32 = HEAP32[i7 + 4 >> 2] | 0;
     HEAP32[i35 >> 2] = HEAP32[i7 >> 2];
     HEAP32[i35 + 4 >> 2] = i32;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
     i36 = i30;
    }
    if (i36 >>> 0 >= i13 >>> 0) {
     i23 = 31;
     break;
    }
   }
   if ((i23 | 0) == 38) {
    STACKTOP = i3;
    return i10 | 0;
   } else if ((i23 | 0) == 31) {
    i14 = i28 << 24 >> 24 == 0;
    i15 = i36;
    i16 = i13;
    break;
   } else if ((i23 | 0) == 35) {
    STACKTOP = i3;
    return i10 | 0;
   }
  }
 } while (0);
 i10 = (i15 | 0) == (i16 | 0) & i14;
 STACKTOP = i3;
 return i10 | 0;
}
function __ZN7WebCore20parseDelimitedStringERKN3WTF6StringEc(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i1 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  i10 = HEAP32[i2 + 8 >> 2] | 0;
  i11 = i2;
 } else {
  i12 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i2) | 0;
  i10 = i12;
  i11 = HEAP32[i9 >> 2] | 0;
 }
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = HEAP32[i11 + 4 >> 2] | 0;
 i11 = i10 + (i9 << 1) | 0;
 L11 : do {
  if ((i9 | 0) > 0) {
   i12 = i10;
   while (1) {
    i2 = HEAP16[i12 >> 1] | 0;
    if (!((i2 << 16 >> 16 | 0) == 32 | (i2 << 16 >> 16 | 0) == 9 | (i2 << 16 >> 16 | 0) == 10 | (i2 << 16 >> 16 | 0) == 13)) {
     i13 = i12;
     break L11;
    }
    i2 = i12 + 2 | 0;
    if (i2 >>> 0 < i11 >>> 0) {
     i12 = i2;
    } else {
     i13 = i2;
     break;
    }
   }
  } else {
   i13 = i10;
  }
 } while (0);
 if (i13 >>> 0 >= i11 >>> 0) {
  STACKTOP = i4;
  return;
 }
 i10 = i3 << 24 >> 24;
 i3 = i5;
 i9 = i5 | 0;
 i12 = i13;
 i13 = 0;
 i2 = 0;
 while (1) {
  i14 = i12;
  while (1) {
   if (i14 >>> 0 >= i11 >>> 0) {
    i15 = 0;
    break;
   }
   if ((HEAPU16[i14 >> 1] | 0 | 0) == (i10 | 0)) {
    i15 = 1;
    break;
   } else {
    i14 = i14 + 2 | 0;
   }
  }
  if ((i14 | 0) == (i12 | 0)) {
   i16 = 45;
   break;
  }
  i17 = i14 - 2 | 0;
  L26 : do {
   if (i12 >>> 0 < i17 >>> 0) {
    i18 = i17;
    while (1) {
     i19 = HEAP16[i18 >> 1] | 0;
     if (!((i19 << 16 >> 16 | 0) == 32 | (i19 << 16 >> 16 | 0) == 9 | (i19 << 16 >> 16 | 0) == 10 | (i19 << 16 >> 16 | 0) == 13)) {
      i20 = i18;
      break L26;
     }
     i19 = i18 - 2 | 0;
     if (i12 >>> 0 < i19 >>> 0) {
      i18 = i19;
     } else {
      i20 = i19;
      break;
     }
    }
   } else {
    i20 = i17;
   }
  } while (0);
  __ZN3WTF6StringC1EPKtj(i5, i12, (i20 - i12 >> 1) + 1 | 0);
  if ((i13 | 0) == (HEAP32[i7 >> 2] | 0)) {
   i17 = i13 + 1 | 0;
   do {
    if (i2 >>> 0 > i5 >>> 0) {
     i16 = 22;
    } else {
     if ((i2 + (i13 << 2) | 0) >>> 0 <= i5 >>> 0) {
      i16 = 22;
      break;
     }
     __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i17);
     i18 = HEAP32[i6 >> 2] | 0;
     i21 = i18 + (i3 - i2 >> 2 << 2) | 0;
     i22 = i18;
    }
   } while (0);
   if ((i16 | 0) == 22) {
    i16 = 0;
    __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i17);
    i21 = i5;
    i22 = HEAP32[i6 >> 2] | 0;
   }
   i18 = HEAP32[i8 >> 2] | 0;
   i19 = i21 | 0;
   i23 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   HEAP32[i22 + (i18 << 2) >> 2] = i23;
   i24 = i22;
   i25 = i18;
  } else {
   i18 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   HEAP32[i2 + (i13 << 2) >> 2] = i18;
   i24 = i2;
   i25 = i13;
  }
  i18 = i25 + 1 | 0;
  HEAP32[i8 >> 2] = i18;
  i23 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i23 | 0) != 0) {
    i19 = i23 | 0;
    i26 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
    if ((i26 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i23);
     break;
    } else {
     HEAP32[i19 >> 2] = i26;
     break;
    }
   }
  } while (0);
  L47 : do {
   if (i15) {
    i23 = HEAP16[i14 >> 1] | 0;
    if ((i23 << 16 >> 16 | 0) == 32 | (i23 << 16 >> 16 | 0) == 9 | (i23 << 16 >> 16 | 0) == 10 | (i23 << 16 >> 16 | 0) == 13) {
     i27 = i14;
     i28 = i23;
    } else {
     if ((i23 & 65535 | 0) == (i10 | 0)) {
      i27 = i14;
      i28 = i23;
     } else {
      i29 = i14;
      break;
     }
    }
    while (1) {
     if (!((i28 << 16 >> 16 | 0) == 32 | (i28 << 16 >> 16 | 0) == 9 | (i28 << 16 >> 16 | 0) == 10 | (i28 << 16 >> 16 | 0) == 13)) {
      i30 = i27;
      i16 = 36;
      break L47;
     }
     i23 = i27 + 2 | 0;
     if (i23 >>> 0 >= i11 >>> 0) {
      i30 = i23;
      i16 = 36;
      break L47;
     }
     i27 = i23;
     i28 = HEAP16[i23 >> 1] | 0;
    }
   } else {
    i30 = i14;
    i16 = 36;
   }
  } while (0);
  L55 : do {
   if ((i16 | 0) == 36) {
    i16 = 0;
    if (i30 >>> 0 >= i11 >>> 0) {
     i29 = i30;
     break;
    }
    if ((HEAPU16[i30 >> 1] | 0 | 0) != (i10 | 0)) {
     i29 = i30;
     break;
    }
    i14 = i30 + 2 | 0;
    if (i14 >>> 0 < i11 >>> 0) {
     i31 = i14;
    } else {
     i29 = i14;
     break;
    }
    while (1) {
     i14 = HEAP16[i31 >> 1] | 0;
     if (!((i14 << 16 >> 16 | 0) == 32 | (i14 << 16 >> 16 | 0) == 9 | (i14 << 16 >> 16 | 0) == 10 | (i14 << 16 >> 16 | 0) == 13)) {
      i29 = i31;
      break L55;
     }
     i14 = i31 + 2 | 0;
     if (i14 >>> 0 < i11 >>> 0) {
      i31 = i14;
     } else {
      i29 = i14;
      break;
     }
    }
   }
  } while (0);
  if (i29 >>> 0 < i11 >>> 0) {
   i12 = i29;
   i13 = i18;
   i2 = i24;
  } else {
   i16 = 44;
   break;
  }
 }
 if ((i16 | 0) == 44) {
  STACKTOP = i4;
  return;
 } else if ((i16 | 0) == 45) {
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore14parseGlyphNameERKN3WTF6StringERNS0_7HashSetIS1_NS0_10StringHashENS0_10HashTraitsIS1_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) > 0) {
   i8 = 0;
   while (1) {
    i9 = HEAP32[i6 + (i8 << 2) >> 2] | 0;
    i10 = i9;
    do {
     if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
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
    i8 = i8 + 1 | 0;
    if ((i8 | 0) >= (i7 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i6);
  _memset(i2 | 0, 0, 16) | 0;
 }
 i6 = i1 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return 1;
 }
 if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
  i13 = HEAP32[i1 + 8 >> 2] | 0;
  i14 = i1;
 } else {
  i7 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i1) | 0;
  i13 = i7;
  i14 = HEAP32[i6 >> 2] | 0;
 }
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return 1;
 }
 i6 = HEAP32[i14 + 4 >> 2] | 0;
 i14 = i13 + (i6 << 1) | 0;
 L24 : do {
  if ((i6 | 0) > 0) {
   i7 = i13;
   while (1) {
    i1 = HEAP16[i7 >> 1] | 0;
    if (!((i1 << 16 >> 16 | 0) == 32 | (i1 << 16 >> 16 | 0) == 9 | (i1 << 16 >> 16 | 0) == 10 | (i1 << 16 >> 16 | 0) == 13)) {
     i15 = i7;
     break L24;
    }
    i1 = i7 + 2 | 0;
    if (i1 >>> 0 < i14 >>> 0) {
     i7 = i1;
    } else {
     i15 = i1;
     break;
    }
   }
  } else {
   i15 = i13;
  }
 } while (0);
 if (i15 >>> 0 >= i14 >>> 0) {
  STACKTOP = i3;
  return 1;
 }
 i13 = i2 | 0;
 i2 = i4 | 0;
 i6 = i15;
 while (1) {
  i15 = i6;
  while (1) {
   if (i15 >>> 0 >= i14 >>> 0) {
    i16 = 0;
    break;
   }
   if ((HEAP16[i15 >> 1] | 0) == 44) {
    i16 = 1;
    break;
   } else {
    i15 = i15 + 2 | 0;
   }
  }
  if ((i15 | 0) == (i6 | 0)) {
   i17 = 44;
   break;
  }
  i7 = i15 - 2 | 0;
  L39 : do {
   if (i6 >>> 0 < i7 >>> 0) {
    i1 = i7;
    while (1) {
     i8 = HEAP16[i1 >> 1] | 0;
     if (!((i8 << 16 >> 16 | 0) == 32 | (i8 << 16 >> 16 | 0) == 9 | (i8 << 16 >> 16 | 0) == 10 | (i8 << 16 >> 16 | 0) == 13)) {
      i18 = i1;
      break L39;
     }
     i8 = i1 - 2 | 0;
     if (i6 >>> 0 < i8 >>> 0) {
      i1 = i8;
     } else {
      i18 = i8;
      break;
     }
    }
   } else {
    i18 = i7;
   }
  } while (0);
  __ZN3WTF6StringC1EPKtj(i4, i6, (i18 - i6 >> 1) + 1 | 0);
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i5, i13, i4, i4);
  i7 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i1 = i7 | 0;
    i8 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
    if ((i8 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i1 >> 2] = i8;
     break;
    }
   }
  } while (0);
  L50 : do {
   if (i16) {
    i7 = HEAP16[i15 >> 1] | 0;
    switch (i7 << 16 >> 16) {
    case 32:
    case 9:
    case 10:
    case 13:
    case 44:
     {
      i19 = i15;
      i20 = i7;
      break;
     }
    default:
     {
      i21 = i15;
      break L50;
     }
    }
    while (1) {
     if (!((i20 << 16 >> 16 | 0) == 32 | (i20 << 16 >> 16 | 0) == 9 | (i20 << 16 >> 16 | 0) == 10 | (i20 << 16 >> 16 | 0) == 13)) {
      i22 = i19;
      i17 = 36;
      break L50;
     }
     i7 = i19 + 2 | 0;
     if (i7 >>> 0 >= i14 >>> 0) {
      i22 = i7;
      i17 = 36;
      break L50;
     }
     i19 = i7;
     i20 = HEAP16[i7 >> 1] | 0;
    }
   } else {
    i22 = i15;
    i17 = 36;
   }
  } while (0);
  L56 : do {
   if ((i17 | 0) == 36) {
    i17 = 0;
    if (i22 >>> 0 >= i14 >>> 0) {
     i21 = i22;
     break;
    }
    if ((HEAP16[i22 >> 1] | 0) != 44) {
     i21 = i22;
     break;
    }
    i15 = i22 + 2 | 0;
    if (i15 >>> 0 < i14 >>> 0) {
     i23 = i15;
    } else {
     i21 = i15;
     break;
    }
    while (1) {
     i15 = HEAP16[i23 >> 1] | 0;
     if (!((i15 << 16 >> 16 | 0) == 32 | (i15 << 16 >> 16 | 0) == 9 | (i15 << 16 >> 16 | 0) == 10 | (i15 << 16 >> 16 | 0) == 13)) {
      i21 = i23;
      break L56;
     }
     i15 = i23 + 2 | 0;
     if (i15 >>> 0 < i14 >>> 0) {
      i23 = i15;
     } else {
      i21 = i15;
      break;
     }
    }
   }
  } while (0);
  if (i21 >>> 0 < i14 >>> 0) {
   i6 = i21;
  } else {
   i17 = 42;
   break;
  }
 }
 if ((i17 | 0) == 42) {
  STACKTOP = i3;
  return 1;
 } else if ((i17 | 0) == 44) {
  STACKTOP = i3;
  return 1;
 }
 return 0;
}
function __ZN7WebCore14parseSVGNumberItEEbPT_jRd(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, d6 = +0, i7 = 0, i8 = 0, d9 = +0, i10 = 0, i11 = 0, d12 = +0, d13 = +0, d14 = +0, i15 = 0, d16 = +0, i17 = 0, d18 = +0, i19 = 0, i20 = 0, d21 = +0, d22 = +0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, d29 = +0, d30 = +0, i31 = 0;
 i4 = i1 + (i2 << 1) | 0;
 do {
  if ((i2 | 0) > 0) {
   i5 = HEAP16[i1 >> 1] | 0;
   if ((i5 << 16 >> 16 | 0) == 43) {
    d6 = +1;
    i7 = i1 + 2 | 0;
    break;
   } else if ((i5 << 16 >> 16 | 0) == 45) {
    d6 = +-1;
    i7 = i1 + 2 | 0;
    break;
   } else {
    d6 = +1;
    i7 = i1;
    break;
   }
  } else {
   d6 = +1;
   i7 = i1;
  }
 } while (0);
 if ((i7 | 0) == (i4 | 0)) {
  i8 = 0;
  return i8 | 0;
 }
 i2 = HEAP16[i7 >> 1] | 0;
 i5 = (i2 - 48 & 65535) >>> 0 < 10 >>> 0;
 if (!(i5 | i2 << 16 >> 16 == 46)) {
  i8 = 0;
  return i8 | 0;
 }
 do {
  if (i7 >>> 0 >= i4 >>> 0 | i5 ^ 1) {
   d9 = +0;
   i10 = i7;
  } else {
   i2 = i7;
   while (1) {
    i11 = i2 + 2 | 0;
    if (i11 >>> 0 >= i4 >>> 0) {
     break;
    }
    if (((HEAP16[i11 >> 1] | 0) - 48 & 65535) >>> 0 < 10 >>> 0) {
     i2 = i11;
    } else {
     break;
    }
   }
   if ((i11 | 0) == (i7 | 0)) {
    d9 = +0;
    i10 = i7;
    break;
   }
   if (i2 >>> 0 < i7 >>> 0) {
    d12 = +0;
   } else {
    d13 = +0;
    d14 = +1;
    i15 = i2;
    while (1) {
     d16 = d13 + d14 * +((HEAPU16[i15 >> 1] | 0) - 48 | 0);
     i17 = i15 - 2 | 0;
     if (i17 >>> 0 < i7 >>> 0) {
      d12 = d16;
      break;
     } else {
      d13 = d16;
      d14 = d14 * +10;
      i15 = i17;
     }
    }
   }
   if (d12 >= -1.7976931348623157e+308 & d12 <= 1.7976931348623157e+308) {
    d9 = d12;
    i10 = i11;
    break;
   } else {
    i8 = 0;
   }
   return i8 | 0;
  }
 } while (0);
 L25 : do {
  if (i10 >>> 0 < i4 >>> 0) {
   if ((HEAP16[i10 >> 1] | 0) != 46) {
    d18 = +0;
    i19 = i10;
    break;
   }
   i11 = i10 + 2 | 0;
   if (i11 >>> 0 >= i4 >>> 0) {
    i8 = 0;
    return i8 | 0;
   }
   i7 = HEAP16[i11 >> 1] | 0;
   if ((i7 - 48 & 65535) >>> 0 > 9 >>> 0) {
    i8 = 0;
    return i8 | 0;
   } else {
    i20 = i11;
    d21 = +0;
    d22 = +.1;
    i23 = i7;
   }
   while (1) {
    i7 = i20 + 2 | 0;
    d12 = d21 + d22 * +((i23 & 65535) - 48 | 0);
    if (i7 >>> 0 >= i4 >>> 0) {
     d18 = d12;
     i19 = i7;
     break L25;
    }
    i11 = HEAP16[i7 >> 1] | 0;
    if ((i11 - 48 & 65535) >>> 0 < 10 >>> 0) {
     i20 = i7;
     d21 = d12;
     d22 = d22 * +.1;
     i23 = i11;
    } else {
     d18 = d12;
     i19 = i7;
     break;
    }
   }
  } else {
   d18 = +0;
   i19 = i10;
  }
 } while (0);
 i10 = i19 + 2 | 0;
 do {
  if ((i19 | 0) != (i1 | 0) & i10 >>> 0 < i4 >>> 0) {
   i23 = HEAP16[i19 >> 1] | 0;
   if (!((i23 << 16 >> 16 | 0) == 101 | (i23 << 16 >> 16 | 0) == 69)) {
    i24 = 31;
    break;
   }
   i23 = HEAP16[i10 >> 1] | 0;
   if ((i23 << 16 >> 16 | 0) == 120 | (i23 << 16 >> 16 | 0) == 109) {
    i24 = 31;
    break;
   } else if ((i23 << 16 >> 16 | 0) == 43) {
    i25 = 1;
    i26 = i19 + 4 | 0;
   } else if ((i23 << 16 >> 16 | 0) == 45) {
    i25 = -1;
    i26 = i19 + 4 | 0;
   } else {
    i25 = 1;
    i26 = i10;
   }
   if (i26 >>> 0 >= i4 >>> 0) {
    i8 = 0;
    return i8 | 0;
   }
   i23 = HEAP16[i26 >> 1] | 0;
   if ((i23 - 48 & 65535) >>> 0 > 9 >>> 0) {
    i8 = 0;
    return i8 | 0;
   } else {
    i27 = i23;
    i28 = i26;
    d29 = +0;
   }
   while (1) {
    d29 = d29 * +10 + +((i27 & 65535) - 48 | 0);
    i28 = i28 + 2 | 0;
    if (i28 >>> 0 >= i4 >>> 0) {
     break;
    }
    i27 = HEAP16[i28 >> 1] | 0;
    if ((i27 - 48 & 65535) >>> 0 >= 10 >>> 0) {
     break;
    }
   }
   if (d29 < -1.7976931348623157e+308) {
    i8 = 0;
    return i8 | 0;
   }
   if (d29 > +1024 | d29 > 1.7976931348623157e+308) {
    i8 = 0;
    return i8 | 0;
   }
   d22 = d6 * (d9 + d18);
   HEAPF64[i3 >> 3] = d22;
   if (d29 == +0) {
    d30 = d22;
    i31 = i28;
    break;
   }
   d21 = d22 * +Math_pow(+(+10), +(+(Math_imul(~~d29, i25) | 0)));
   HEAPF64[i3 >> 3] = d21;
   d30 = d21;
   i31 = i28;
  } else {
   i24 = 31;
  }
 } while (0);
 if ((i24 | 0) == 31) {
  d29 = d6 * (d9 + d18);
  HEAPF64[i3 >> 3] = d29;
  d30 = d29;
  i31 = i19;
 }
 if (!(d30 >= -1.7976931348623157e+308 & d30 <= 1.7976931348623157e+308)) {
  i8 = 0;
  return i8 | 0;
 }
 i8 = (i31 | 0) != (i1 | 0);
 return i8 | 0;
}
function __ZN7WebCore14parseSVGNumberIhEEbPT_jRd(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, d6 = +0, i7 = 0, i8 = 0, d9 = +0, i10 = 0, i11 = 0, d12 = +0, d13 = +0, d14 = +0, i15 = 0, d16 = +0, i17 = 0, d18 = +0, i19 = 0, i20 = 0, d21 = +0, d22 = +0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, d29 = +0, d30 = +0, i31 = 0;
 i4 = i1 + i2 | 0;
 do {
  if ((i2 | 0) > 0) {
   i5 = HEAP8[i1] | 0;
   if ((i5 << 24 >> 24 | 0) == 43) {
    d6 = +1;
    i7 = i1 + 1 | 0;
    break;
   } else if ((i5 << 24 >> 24 | 0) == 45) {
    d6 = +-1;
    i7 = i1 + 1 | 0;
    break;
   } else {
    d6 = +1;
    i7 = i1;
    break;
   }
  } else {
   d6 = +1;
   i7 = i1;
  }
 } while (0);
 if ((i7 | 0) == (i4 | 0)) {
  i8 = 0;
  return i8 | 0;
 }
 i2 = HEAP8[i7] | 0;
 i5 = (i2 - 48 & 255) >>> 0 < 10 >>> 0;
 if (!(i5 | i2 << 24 >> 24 == 46)) {
  i8 = 0;
  return i8 | 0;
 }
 do {
  if (i7 >>> 0 >= i4 >>> 0 | i5 ^ 1) {
   d9 = +0;
   i10 = i7;
  } else {
   i2 = i7;
   while (1) {
    i11 = i2 + 1 | 0;
    if (i11 >>> 0 >= i4 >>> 0) {
     break;
    }
    if (((HEAP8[i11] | 0) - 48 & 255) >>> 0 < 10 >>> 0) {
     i2 = i11;
    } else {
     break;
    }
   }
   if ((i11 | 0) == (i7 | 0)) {
    d9 = +0;
    i10 = i7;
    break;
   }
   if (i2 >>> 0 < i7 >>> 0) {
    d12 = +0;
   } else {
    d13 = +0;
    d14 = +1;
    i15 = i2;
    while (1) {
     d16 = d13 + d14 * +((HEAPU8[i15] | 0) - 48 | 0);
     i17 = i15 - 1 | 0;
     if (i17 >>> 0 < i7 >>> 0) {
      d12 = d16;
      break;
     } else {
      d13 = d16;
      d14 = d14 * +10;
      i15 = i17;
     }
    }
   }
   if (d12 >= -1.7976931348623157e+308 & d12 <= 1.7976931348623157e+308) {
    d9 = d12;
    i10 = i11;
    break;
   } else {
    i8 = 0;
   }
   return i8 | 0;
  }
 } while (0);
 L25 : do {
  if (i10 >>> 0 < i4 >>> 0) {
   if ((HEAP8[i10] | 0) != 46) {
    d18 = +0;
    i19 = i10;
    break;
   }
   i11 = i10 + 1 | 0;
   if (i11 >>> 0 >= i4 >>> 0) {
    i8 = 0;
    return i8 | 0;
   }
   i7 = HEAP8[i11] | 0;
   if ((i7 - 48 & 255) >>> 0 > 9 >>> 0) {
    i8 = 0;
    return i8 | 0;
   } else {
    i20 = i11;
    d21 = +0;
    d22 = +.1;
    i23 = i7;
   }
   while (1) {
    i7 = i20 + 1 | 0;
    d12 = d21 + d22 * +((i23 & 255) - 48 | 0);
    if (i7 >>> 0 >= i4 >>> 0) {
     d18 = d12;
     i19 = i7;
     break L25;
    }
    i11 = HEAP8[i7] | 0;
    if ((i11 - 48 & 255) >>> 0 < 10 >>> 0) {
     i20 = i7;
     d21 = d12;
     d22 = d22 * +.1;
     i23 = i11;
    } else {
     d18 = d12;
     i19 = i7;
     break;
    }
   }
  } else {
   d18 = +0;
   i19 = i10;
  }
 } while (0);
 i10 = i19 + 1 | 0;
 do {
  if ((i19 | 0) != (i1 | 0) & i10 >>> 0 < i4 >>> 0) {
   i23 = HEAP8[i19] | 0;
   if (!((i23 << 24 >> 24 | 0) == 101 | (i23 << 24 >> 24 | 0) == 69)) {
    i24 = 31;
    break;
   }
   i23 = HEAP8[i10] | 0;
   if ((i23 << 24 >> 24 | 0) == 43) {
    i25 = 1;
    i26 = i19 + 2 | 0;
   } else if ((i23 << 24 >> 24 | 0) == 45) {
    i25 = -1;
    i26 = i19 + 2 | 0;
   } else if ((i23 << 24 >> 24 | 0) == 120 | (i23 << 24 >> 24 | 0) == 109) {
    i24 = 31;
    break;
   } else {
    i25 = 1;
    i26 = i10;
   }
   if (i26 >>> 0 >= i4 >>> 0) {
    i8 = 0;
    return i8 | 0;
   }
   i23 = HEAP8[i26] | 0;
   if ((i23 - 48 & 255) >>> 0 > 9 >>> 0) {
    i8 = 0;
    return i8 | 0;
   } else {
    i27 = i23;
    i28 = i26;
    d29 = +0;
   }
   while (1) {
    d29 = d29 * +10 + +((i27 & 255) - 48 | 0);
    i28 = i28 + 1 | 0;
    if (i28 >>> 0 >= i4 >>> 0) {
     break;
    }
    i27 = HEAP8[i28] | 0;
    if ((i27 - 48 & 255) >>> 0 >= 10 >>> 0) {
     break;
    }
   }
   if (d29 < -1.7976931348623157e+308) {
    i8 = 0;
    return i8 | 0;
   }
   if (d29 > +1024 | d29 > 1.7976931348623157e+308) {
    i8 = 0;
    return i8 | 0;
   }
   d22 = d6 * (d9 + d18);
   HEAPF64[i3 >> 3] = d22;
   if (d29 == +0) {
    d30 = d22;
    i31 = i28;
    break;
   }
   d21 = d22 * +Math_pow(+(+10), +(+(Math_imul(~~d29, i25) | 0)));
   HEAPF64[i3 >> 3] = d21;
   d30 = d21;
   i31 = i28;
  } else {
   i24 = 31;
  }
 } while (0);
 if ((i24 | 0) == 31) {
  d29 = d6 * (d9 + d18);
  HEAPF64[i3 >> 3] = d29;
  d30 = d29;
  i31 = i19;
 }
 if (!(d30 >= -1.7976931348623157e+308 & d30 <= 1.7976931348623157e+308)) {
  i8 = 0;
  return i8 | 0;
 }
 i8 = (i31 | 0) != (i1 | 0);
 return i8 | 0;
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
    if ((i24 | 0) == 0) {
     i25 = 9;
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
   if ((i25 | 0) == 9) {
    i25 = 0;
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
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
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
 i9 = i4 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i18 | 0;
 i13 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i4;
 do {
  if ((i13 | 0) != 0) {
   i4 = i13 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i4 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i9 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i9;
 i13 = i2 + 4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i21 = 8;
  } else {
   i17 = i4 << 1;
   i21 = (i9 * 6 & -1 | 0) < (i17 | 0) ? i4 : i17;
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
function __ZN7WebCore9parseRectERKN3WTF6StringERNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, d18 = +0, d19 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i1 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 L1 : do {
  if ((i1 | 0) == 0) {
   HEAP32[i4 >> 2] = 0;
   i10 = 0;
  } else {
   if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
    i11 = HEAP32[i1 + 8 >> 2] | 0;
    i12 = i1;
   } else {
    i13 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i1) | 0;
    i11 = i13;
    i12 = HEAP32[i9 >> 2] | 0;
   }
   HEAP32[i4 >> 2] = i11;
   if ((i12 | 0) == 0) {
    i10 = i11;
    break;
   }
   i13 = HEAP32[i12 + 4 >> 2] | 0;
   i14 = i11 + (i13 << 1) | 0;
   if ((i13 | 0) > 0) {
    i15 = i11;
   } else {
    i10 = i14;
    break;
   }
   while (1) {
    i13 = HEAP16[i15 >> 1] | 0;
    if (!((i13 << 16 >> 16 | 0) == 32 | (i13 << 16 >> 16 | 0) == 9 | (i13 << 16 >> 16 | 0) == 10 | (i13 << 16 >> 16 | 0) == 13)) {
     i10 = i14;
     break L1;
    }
    i13 = i15 + 2 | 0;
    HEAP32[i4 >> 2] = i13;
    if (i13 >>> 0 < i14 >>> 0) {
     i15 = i13;
    } else {
     i10 = i14;
     break;
    }
   }
  }
 } while (0);
 HEAPF32[i5 >> 2] = +0;
 HEAPF32[i6 >> 2] = +0;
 HEAPF32[i7 >> 2] = +0;
 HEAPF32[i8 >> 2] = +0;
 do {
  if (__ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i4, i10, i5, 1) | 0) {
   if (!(__ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i4, i10, i6, 1) | 0)) {
    i16 = 0;
    d17 = +0;
    break;
   }
   if (!(__ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i4, i10, i7, 1) | 0)) {
    i16 = 0;
    d17 = +0;
    break;
   }
   i15 = __ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i4, i10, i8, 0) | 0;
   i16 = i15;
   d17 = +HEAPF32[i8 >> 2];
  } else {
   i16 = 0;
   d17 = +0;
  }
 } while (0);
 d18 = +HEAPF32[i6 >> 2];
 d19 = +HEAPF32[i7 >> 2];
 HEAPF32[i2 >> 2] = +HEAPF32[i5 >> 2];
 HEAPF32[i2 + 4 >> 2] = d18;
 HEAPF32[i2 + 8 >> 2] = d19;
 HEAPF32[i2 + 12 >> 2] = d17;
 STACKTOP = i3;
 return i16 | 0;
}
function __ZN7WebCore12parseArcFlagERPKtS1_Rb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = HEAP32[i1 >> 2] | 0;
 L1 : do {
  if (i4 >>> 0 < i2 >>> 0) {
   HEAP32[i1 >> 2] = i4 + 2;
   i5 = HEAP16[i4 >> 1] | 0;
   if ((i5 << 16 >> 16 | 0) == 48) {
    i6 = 0;
   } else if ((i5 << 16 >> 16 | 0) == 49) {
    i6 = 1;
   } else {
    i7 = 0;
    break;
   }
   HEAP8[i3] = i6;
   i5 = HEAP32[i1 >> 2] | 0;
   L6 : do {
    if (i5 >>> 0 < i2 >>> 0) {
     i8 = HEAP16[i5 >> 1] | 0;
     switch (i8 << 16 >> 16) {
     case 32:
     case 9:
     case 10:
     case 13:
     case 44:
      {
       i9 = i5;
       i10 = i8;
       break;
      }
     default:
      {
       i7 = 1;
       break L1;
      }
     }
     while (1) {
      if (!((i10 << 16 >> 16 | 0) == 32 | (i10 << 16 >> 16 | 0) == 9 | (i10 << 16 >> 16 | 0) == 10 | (i10 << 16 >> 16 | 0) == 13)) {
       i11 = i9;
       break L6;
      }
      i8 = i9 + 2 | 0;
      HEAP32[i1 >> 2] = i8;
      if (i8 >>> 0 >= i2 >>> 0) {
       i11 = i8;
       break L6;
      }
      i9 = i8;
      i10 = HEAP16[i8 >> 1] | 0;
     }
    } else {
     i11 = i5;
    }
   } while (0);
   if (i11 >>> 0 >= i2 >>> 0) {
    i7 = 1;
    break;
   }
   if ((HEAP16[i11 >> 1] | 0) != 44) {
    i7 = 1;
    break;
   }
   i5 = i11 + 2 | 0;
   HEAP32[i1 >> 2] = i5;
   if (i5 >>> 0 < i2 >>> 0) {
    i12 = i5;
   } else {
    i7 = 1;
    break;
   }
   while (1) {
    i5 = HEAP16[i12 >> 1] | 0;
    if (!((i5 << 16 >> 16 | 0) == 32 | (i5 << 16 >> 16 | 0) == 9 | (i5 << 16 >> 16 | 0) == 10 | (i5 << 16 >> 16 | 0) == 13)) {
     i7 = 1;
     break L1;
    }
    i5 = i12 + 2 | 0;
    HEAP32[i1 >> 2] = i5;
    if (i5 >>> 0 < i2 >>> 0) {
     i12 = i5;
    } else {
     i7 = 1;
     break;
    }
   }
  } else {
   i7 = 0;
  }
 } while (0);
 return i7 | 0;
}
function __ZN7WebCore12parseArcFlagERPKhS1_Rb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = HEAP32[i1 >> 2] | 0;
 L1 : do {
  if (i4 >>> 0 < i2 >>> 0) {
   HEAP32[i1 >> 2] = i4 + 1;
   i5 = HEAP8[i4] | 0;
   if ((i5 << 24 >> 24 | 0) == 48) {
    i6 = 0;
   } else if ((i5 << 24 >> 24 | 0) == 49) {
    i6 = 1;
   } else {
    i7 = 0;
    break;
   }
   HEAP8[i3] = i6;
   i5 = HEAP32[i1 >> 2] | 0;
   L6 : do {
    if (i5 >>> 0 < i2 >>> 0) {
     i8 = HEAP8[i5] | 0;
     switch (i8 << 24 >> 24) {
     case 32:
     case 9:
     case 10:
     case 13:
     case 44:
      {
       i9 = i5;
       i10 = i8;
       break;
      }
     default:
      {
       i7 = 1;
       break L1;
      }
     }
     while (1) {
      if (!((i10 << 24 >> 24 | 0) == 32 | (i10 << 24 >> 24 | 0) == 9 | (i10 << 24 >> 24 | 0) == 10 | (i10 << 24 >> 24 | 0) == 13)) {
       i11 = i9;
       break L6;
      }
      i8 = i9 + 1 | 0;
      HEAP32[i1 >> 2] = i8;
      if (i8 >>> 0 >= i2 >>> 0) {
       i11 = i8;
       break L6;
      }
      i9 = i8;
      i10 = HEAP8[i8] | 0;
     }
    } else {
     i11 = i5;
    }
   } while (0);
   if (i11 >>> 0 >= i2 >>> 0) {
    i7 = 1;
    break;
   }
   if ((HEAP8[i11] | 0) != 44) {
    i7 = 1;
    break;
   }
   i5 = i11 + 1 | 0;
   HEAP32[i1 >> 2] = i5;
   if (i5 >>> 0 < i2 >>> 0) {
    i12 = i5;
   } else {
    i7 = 1;
    break;
   }
   while (1) {
    i5 = HEAP8[i12] | 0;
    if (!((i5 << 24 >> 24 | 0) == 32 | (i5 << 24 >> 24 | 0) == 9 | (i5 << 24 >> 24 | 0) == 10 | (i5 << 24 >> 24 | 0) == 13)) {
     i7 = 1;
     break L1;
    }
    i5 = i12 + 1 | 0;
    HEAP32[i1 >> 2] = i5;
    if (i5 >>> 0 < i2 >>> 0) {
     i12 = i5;
    } else {
     i7 = 1;
     break;
    }
   }
  } else {
   i7 = 0;
  }
 } while (0);
 return i7 | 0;
}
function __ZN7WebCore16parseFloatPoint3ItEEbRPKT_S3_RNS_10FloatPointES6_S6_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 if (!(__ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i1, i2, i7, 1) | 0)) {
  i13 = 0;
  STACKTOP = i6;
  return i13 | 0;
 }
 if (!(__ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i1, i2, i8, 1) | 0)) {
  i13 = 0;
  STACKTOP = i6;
  return i13 | 0;
 }
 if (!(__ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i1, i2, i9, 1) | 0)) {
  i13 = 0;
  STACKTOP = i6;
  return i13 | 0;
 }
 if (!(__ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i1, i2, i10, 1) | 0)) {
  i13 = 0;
  STACKTOP = i6;
  return i13 | 0;
 }
 if (!(__ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i1, i2, i11, 1) | 0)) {
  i13 = 0;
  STACKTOP = i6;
  return i13 | 0;
 }
 if (!(__ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i1, i2, i12, 1) | 0)) {
  i13 = 0;
  STACKTOP = i6;
  return i13 | 0;
 }
 i2 = i3;
 d14 = +(+HEAPF32[i7 >> 2]);
 d15 = +(+HEAPF32[i8 >> 2]);
 HEAPF32[i2 >> 2] = d14;
 HEAPF32[i2 + 4 >> 2] = d15;
 i2 = i4;
 d15 = +(+HEAPF32[i9 >> 2]);
 d14 = +(+HEAPF32[i10 >> 2]);
 HEAPF32[i2 >> 2] = d15;
 HEAPF32[i2 + 4 >> 2] = d14;
 i2 = i5;
 d14 = +(+HEAPF32[i11 >> 2]);
 d15 = +(+HEAPF32[i12 >> 2]);
 HEAPF32[i2 >> 2] = d14;
 HEAPF32[i2 + 4 >> 2] = d15;
 i13 = 1;
 STACKTOP = i6;
 return i13 | 0;
}
function __ZN7WebCore16parseFloatPoint3IhEEbRPKT_S3_RNS_10FloatPointES6_S6_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 if (!(__ZN7WebCore11parseNumberERPKhS1_Rfb(i1, i2, i7, 1) | 0)) {
  i13 = 0;
  STACKTOP = i6;
  return i13 | 0;
 }
 if (!(__ZN7WebCore11parseNumberERPKhS1_Rfb(i1, i2, i8, 1) | 0)) {
  i13 = 0;
  STACKTOP = i6;
  return i13 | 0;
 }
 if (!(__ZN7WebCore11parseNumberERPKhS1_Rfb(i1, i2, i9, 1) | 0)) {
  i13 = 0;
  STACKTOP = i6;
  return i13 | 0;
 }
 if (!(__ZN7WebCore11parseNumberERPKhS1_Rfb(i1, i2, i10, 1) | 0)) {
  i13 = 0;
  STACKTOP = i6;
  return i13 | 0;
 }
 if (!(__ZN7WebCore11parseNumberERPKhS1_Rfb(i1, i2, i11, 1) | 0)) {
  i13 = 0;
  STACKTOP = i6;
  return i13 | 0;
 }
 if (!(__ZN7WebCore11parseNumberERPKhS1_Rfb(i1, i2, i12, 1) | 0)) {
  i13 = 0;
  STACKTOP = i6;
  return i13 | 0;
 }
 i2 = i3;
 d14 = +(+HEAPF32[i7 >> 2]);
 d15 = +(+HEAPF32[i8 >> 2]);
 HEAPF32[i2 >> 2] = d14;
 HEAPF32[i2 + 4 >> 2] = d15;
 i2 = i4;
 d15 = +(+HEAPF32[i9 >> 2]);
 d14 = +(+HEAPF32[i10 >> 2]);
 HEAPF32[i2 >> 2] = d15;
 HEAPF32[i2 + 4 >> 2] = d14;
 i2 = i5;
 d14 = +(+HEAPF32[i11 >> 2]);
 d15 = +(+HEAPF32[i12 >> 2]);
 HEAPF32[i2 >> 2] = d14;
 HEAPF32[i2 + 4 >> 2] = d15;
 i13 = 1;
 STACKTOP = i6;
 return i13 | 0;
}
function __ZN7WebCore25parseNumberOptionalNumberERKN3WTF6StringERfS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
  i8 = HEAP32[i1 + 8 >> 2] | 0;
  i9 = i1;
 } else {
  i10 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i1) | 0;
  i8 = i10;
  i9 = HEAP32[i6 >> 2] | 0;
 }
 HEAP32[i5 >> 2] = i8;
 if ((i9 | 0) == 0) {
  i11 = 0;
 } else {
  i11 = HEAP32[i9 + 4 >> 2] | 0;
 }
 i9 = i8 + (i11 << 1) | 0;
 if (!(__ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i5, i9, i2, 1) | 0)) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 do {
  if ((HEAP32[i5 >> 2] | 0) == (i9 | 0)) {
   HEAPF32[i3 >> 2] = +HEAPF32[i2 >> 2];
   i12 = i9;
  } else {
   if (__ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i5, i9, i3, 0) | 0) {
    i12 = HEAP32[i5 >> 2] | 0;
    break;
   } else {
    i7 = 0;
    STACKTOP = i4;
    return i7 | 0;
   }
  }
 } while (0);
 i7 = (i12 | 0) == (i9 | 0);
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN7WebCore16parseFloatPoint2ItEEbRPKT_S3_RNS_10FloatPointES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 if (!(__ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i1, i2, i6, 1) | 0)) {
  i10 = 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 if (!(__ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i1, i2, i7, 1) | 0)) {
  i10 = 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 if (!(__ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i1, i2, i8, 1) | 0)) {
  i10 = 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 if (!(__ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i1, i2, i9, 1) | 0)) {
  i10 = 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 i2 = i3;
 d11 = +(+HEAPF32[i6 >> 2]);
 d12 = +(+HEAPF32[i7 >> 2]);
 HEAPF32[i2 >> 2] = d11;
 HEAPF32[i2 + 4 >> 2] = d12;
 i2 = i4;
 d12 = +(+HEAPF32[i8 >> 2]);
 d11 = +(+HEAPF32[i9 >> 2]);
 HEAPF32[i2 >> 2] = d12;
 HEAPF32[i2 + 4 >> 2] = d11;
 i10 = 1;
 STACKTOP = i5;
 return i10 | 0;
}
function __ZN3WTF6VectorIN7WebCore10FloatPointELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
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
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 + (i6 << 3) | 0;
 if (i5 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 3) | 0;
 HEAP32[i3 >> 2] = i7 >>> 3;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   i5 = i6;
   i8 = i7;
   i9 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i8 + 4 >> 2] = i9;
   i9 = i6 + 8 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 8 | 0;
   }
  }
 }
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore16parseFloatPoint2IhEEbRPKT_S3_RNS_10FloatPointES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 if (!(__ZN7WebCore11parseNumberERPKhS1_Rfb(i1, i2, i6, 1) | 0)) {
  i10 = 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 if (!(__ZN7WebCore11parseNumberERPKhS1_Rfb(i1, i2, i7, 1) | 0)) {
  i10 = 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 if (!(__ZN7WebCore11parseNumberERPKhS1_Rfb(i1, i2, i8, 1) | 0)) {
  i10 = 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 if (!(__ZN7WebCore11parseNumberERPKhS1_Rfb(i1, i2, i9, 1) | 0)) {
  i10 = 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 i2 = i3;
 d11 = +(+HEAPF32[i6 >> 2]);
 d12 = +(+HEAPF32[i7 >> 2]);
 HEAPF32[i2 >> 2] = d11;
 HEAPF32[i2 + 4 >> 2] = d12;
 i2 = i4;
 d12 = +(+HEAPF32[i8 >> 2]);
 d11 = +(+HEAPF32[i9 >> 2]);
 HEAPF32[i2 >> 2] = d12;
 HEAPF32[i2 + 4 >> 2] = d11;
 i10 = 1;
 STACKTOP = i5;
 return i10 | 0;
}
function __ZN7WebCore21parseNumberFromStringERKN3WTF6StringERfb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   HEAP32[i5 >> 2] = 0;
   i7 = 0;
   i8 = 0;
  } else {
   if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
    i9 = HEAP32[i1 + 8 >> 2] | 0;
    i10 = i1;
   } else {
    i11 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i1) | 0;
    i9 = i11;
    i10 = HEAP32[i6 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = i9;
   if ((i10 | 0) == 0) {
    i7 = 0;
    i8 = i9;
    break;
   }
   i7 = HEAP32[i10 + 4 >> 2] | 0;
   i8 = i9;
  }
 } while (0);
 i9 = i8 + (i7 << 1) | 0;
 if (!(__ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i5, i9, i2, i3) | 0)) {
  i12 = 0;
  STACKTOP = i4;
  return i12 | 0;
 }
 i12 = (HEAP32[i5 >> 2] | 0) == (i9 | 0);
 STACKTOP = i4;
 return i12 | 0;
}
function __ZN3WTF6VectorINSt3__14pairIjjEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
 if (i5 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 3) | 0;
 HEAP32[i3 >> 2] = i1 >>> 3;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 3) | 0;
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
function __ZN7WebCore15parseFloatPointItEEbRPKT_S3_RNS_10FloatPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if (!(__ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i1, i2, i5, 1) | 0)) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 if (!(__ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i1, i2, i6, 1) | 0)) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i2 = i3;
 d8 = +(+HEAPF32[i5 >> 2]);
 d9 = +(+HEAPF32[i6 >> 2]);
 HEAPF32[i2 >> 2] = d8;
 HEAPF32[i2 + 4 >> 2] = d9;
 i7 = 1;
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN7WebCore15parseFloatPointIhEEbRPKT_S3_RNS_10FloatPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if (!(__ZN7WebCore11parseNumberERPKhS1_Rfb(i1, i2, i5, 1) | 0)) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 if (!(__ZN7WebCore11parseNumberERPKhS1_Rfb(i1, i2, i6, 1) | 0)) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i2 = i3;
 d8 = +(+HEAPF32[i5 >> 2]);
 d9 = +(+HEAPF32[i6 >> 2]);
 HEAPF32[i2 >> 2] = d8;
 HEAPF32[i2 + 4 >> 2] = d9;
 i7 = 1;
 STACKTOP = i4;
 return i7 | 0;
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
function __ZN7WebCore11parseNumberERPKtS1_Rfb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b(i1, i2, i3, i4) | 0;
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
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_malloc": _malloc, "_llvm_pow_f64": _llvm_pow_f64, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore25parseNumberOptionalNumberERKN3WTF6StringERfS4_","_strlen","__ZN7WebCore14parseSVGNumberItEEbPT_jRd","__ZN7WebCore16parseFloatPoint3ItEEbRPKT_S3_RNS_10FloatPointES6_S6_","__ZN7WebCore20parseDelimitedStringERKN3WTF6StringEc","__ZN3WTF6VectorIN7WebCore10FloatPointELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore12parseArcFlagERPKtS1_Rb","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_","__ZN7WebCore15parseFloatPointItEEbRPKT_S3_RNS_10FloatPointE","__ZN7WebCore11parseNumberERPKtS1_Rfb","__ZN3WTF6VectorINSt3__14pairIjjEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore21parseNumberFromStringERKN3WTF6StringERfb","__ZN7WebCore16parseFloatPoint2ItEEbRPKT_S3_RNS_10FloatPointES6_","__ZN7WebCore16parseFloatPoint2IhEEbRPKT_S3_RNS_10FloatPointES6_","_memcpy","__ZN7WebCoreL18genericParseNumberItfEEbRPKT_S3_RT0_b","__ZN7WebCore16parseFloatPoint3IhEEbRPKT_S3_RNS_10FloatPointES6_S6_","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","_memset","__ZN7WebCore25parseKerningUnicodeStringERKN3WTF6StringERNS0_6VectorINSt3__14pairIjjEELj0ENS0_15CrashOnOverflowEEERNS0_7HashSetIS1_NS0_10StringHashENS0_10HashTraitsIS1_EEEE","__ZN7WebCore14parseGlyphNameERKN3WTF6StringERNS0_7HashSetIS1_NS0_10StringHashENS0_10HashTraitsIS1_EEEE","__ZN7WebCore14parseSVGNumberIhEEbPT_jRd","__ZN7WebCore9parseRectERKN3WTF6StringERNS_9FloatRectE","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore21pointsListFromSVGDataERNS_12SVGPointListERKN3WTF6StringE","__ZN7WebCore11parseNumberERPKhS1_Rfb","__ZN7WebCore12parseArcFlagERPKhS1_Rb","__ZN7WebCore15parseFloatPointIhEEbRPKT_S3_RNS_10FloatPointE"]

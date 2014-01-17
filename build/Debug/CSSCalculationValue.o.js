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
H_BASE = parentModule["_malloc"](312 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 312;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore21CSSCalcExpressionNodeD1Ev;
/* memory initializer */ allocate([99,97,108,99,0,0,0,0,45,119,101,98,107,105,116,45,99,97,108,99,40,0,0,0,99,97,108,99,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,3,0,0,0,3,0,0,0,5,0,0,0,5,0,0,0,1,0,0,0,4,0,0,0,5,0,0,0,4,0,0,0,3,0,0,0,4,0,0,0,2,0,0,0,3,0,0,0,4,0,0,0,3,0,0,0,5,0,0,0,3,0,0,0,3,0,0,0,5,0,0,0,5,0,0,0,4,0,0,0,4,0,0,0,5,0,0,0,4,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_di(index,a1) {
  try {
    return Module["dynCall_di"](index,a1);
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
function invoke_viiiid(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiid"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_diiidi(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_diiidi"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_fif(index,a1,a2) {
  try {
    return Module["dynCall_fif"](index,a1,a2);
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
  var __ZTVN7WebCore29CalcExpressionBinaryOperationE=env.__ZTVN7WebCore29CalcExpressionBinaryOperationE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore22CSSCalcBinaryOperationE=(H_BASE+40)|0;
  var __ZTVN7WebCore20CalcExpressionNumberE=(H_BASE+152)|0;
  var __ZTVN7WebCore20CalcExpressionLengthE=(H_BASE+184)|0;
  var __ZTVN7WebCore21CSSCalcPrimitiveValueE=(H_BASE+96)|0;
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
  var invoke_di=env.invoke_di;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_viiiid=env.invoke_viiiid;
  var invoke_diiidi=env.invoke_diiidi;
  var invoke_fif=env.invoke_fif;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var _trunc=env._trunc;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore22CSSCalcBinaryOperation16createSimplifiedEN3WTF10PassRefPtrINS_21CSSCalcExpressionNodeEEES4_NS_12CalcOperatorE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, i14 = 0, d15 = +0, d16 = +0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, i21 = 0, i22 = 0, d23 = +0, i24 = 0, i25 = 0, i26 = 0, d27 = +0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 i6 = i2 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 8 >> 2] | 0;
 i10 = (i4 | 0) == 47;
 do {
  if (i10) {
   i11 = 0;
  } else {
   if ((HEAP8[i2 + 12 | 0] & 1) == 0) {
    i11 = 0;
    break;
   }
   i11 = (HEAP8[i3 + 12 | 0] & 1) != 0;
  }
 } while (0);
 if ((i9 | i7 | 0) == 0) {
  i12 = i11 ? 104 : 1;
  d13 = +FUNCTION_TABLE_di[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 7](i2);
  i14 = HEAP32[i8 >> 2] | 0;
  d15 = +FUNCTION_TABLE_di[HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] & 7](i14);
  do {
   if ((i4 | 0) == 43) {
    d16 = d13 + d15;
   } else if ((i4 | 0) == 45) {
    d16 = d13 - d15;
   } else if ((i4 | 0) == 42) {
    d16 = d13 * d15;
   } else if ((i4 | 0) == 47) {
    if (d15 == +0) {
     d16 = +NaN;
     break;
    }
    d16 = d13 / d15;
   } else {
    d16 = +0;
   }
  } while (0);
  HEAPF64[tempDoublePtr >> 3] = d16;
  i14 = HEAP32[tempDoublePtr + 4 >> 2] & 2146435072;
  i17 = 2146435071;
  if (i14 >>> 0 > i17 >>> 0 | i14 >>> 0 == i17 >>> 0 & (HEAP32[tempDoublePtr >> 2] & 0) >>> 0 > -1 >>> 0) {
   i18 = 0;
  } else {
   i17 = __ZN3WTF10fastMallocEj(20) | 0;
   i14 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1EdNS0_9UnitTypesE(i14, d16, i12);
   switch ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i14) | 0) & 65535 | 0) {
   case 2:
    {
     i19 = 2;
     break;
    }
   case 3:
   case 4:
   case 5:
   case 6:
   case 7:
   case 8:
   case 9:
   case 10:
   case 108:
   case 109:
    {
     i19 = 1;
     break;
    }
   case 1:
   case 104:
    {
     i19 = 0;
     break;
    }
   default:
    {
     i19 = 5;
    }
   }
   HEAP32[i17 + 4 >> 2] = 1;
   HEAP32[i17 + 8 >> 2] = i19;
   HEAP8[i17 + 12 | 0] = i11 & 1;
   HEAP32[i17 >> 2] = H_BASE + 104;
   HEAP32[i17 + 16 >> 2] = i14;
   i18 = i17;
  }
  HEAP32[i1 >> 2] = i18;
  return;
 }
 L24 : do {
  if ((i4 | 0) == 45 | (i4 | 0) == 43) {
   if ((i7 | 0) != (i9 | 0)) {
    break;
   }
   i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] & 15](i2) | 0;
   switch (i18 | 0) {
   case 33:
   case 1:
   case 104:
   case 2:
   case 3:
   case 4:
   case 109:
   case 108:
   case 5:
   case 6:
   case 7:
   case 8:
   case 9:
   case 10:
   case 11:
   case 12:
   case 13:
   case 14:
   case 15:
   case 16:
   case 17:
   case 18:
   case 26:
   case 27:
   case 28:
   case 29:
   case 30:
   case 31:
   case 32:
    {
     break;
    }
   default:
    {
     break L24;
    }
   }
   i17 = HEAP32[i8 >> 2] | 0;
   i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 36 >> 2] & 15](i17) | 0;
   if ((i18 | 0) == (i14 | 0)) {
    i17 = HEAP32[i5 >> 2] | 0;
    d16 = +FUNCTION_TABLE_di[HEAP32[(HEAP32[i17 >> 2] | 0) + 16 >> 2] & 7](i17);
    i17 = HEAP32[i8 >> 2] | 0;
    d15 = +FUNCTION_TABLE_di[HEAP32[(HEAP32[i17 >> 2] | 0) + 16 >> 2] & 7](i17);
    do {
     if ((i4 | 0) == 43) {
      d20 = d16 + d15;
     } else if ((i4 | 0) == 45) {
      d20 = d16 - d15;
     } else if ((i4 | 0) == 42) {
      d20 = d16 * d15;
     } else if ((i4 | 0) == 47) {
      if (d15 == +0) {
       d20 = +NaN;
       break;
      }
      d20 = d16 / d15;
     } else {
      d20 = +0;
     }
    } while (0);
    HEAPF64[tempDoublePtr >> 3] = d20;
    i17 = HEAP32[tempDoublePtr + 4 >> 2] & 2146435072;
    i19 = 2146435071;
    if (i17 >>> 0 > i19 >>> 0 | i17 >>> 0 == i19 >>> 0 & (HEAP32[tempDoublePtr >> 2] & 0) >>> 0 > -1 >>> 0) {
     i21 = 0;
    } else {
     i19 = __ZN3WTF10fastMallocEj(20) | 0;
     i17 = __ZN3WTF10fastMallocEj(16) | 0;
     __ZN7WebCore17CSSPrimitiveValueC1EdNS0_9UnitTypesE(i17, d20, i18);
     switch ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i17) | 0) & 65535 | 0) {
     case 2:
      {
       i22 = 2;
       break;
      }
     case 3:
     case 4:
     case 5:
     case 6:
     case 7:
     case 8:
     case 9:
     case 10:
     case 108:
     case 109:
      {
       i22 = 1;
       break;
      }
     case 1:
     case 104:
      {
       i22 = 0;
       break;
      }
     default:
      {
       i22 = 5;
      }
     }
     HEAP32[i19 + 4 >> 2] = 1;
     HEAP32[i19 + 8 >> 2] = i22;
     HEAP8[i19 + 12 | 0] = i11 & 1;
     HEAP32[i19 >> 2] = H_BASE + 104;
     HEAP32[i19 + 16 >> 2] = i17;
     i21 = i19;
    }
    HEAP32[i1 >> 2] = i21;
    return;
   }
   i19 = __ZN7WebCore17CSSPrimitiveValue12unitCategoryENS0_9UnitTypesE(i18) | 0;
   if ((i19 | 0) == 7) {
    break;
   }
   if ((i19 | 0) != (__ZN7WebCore17CSSPrimitiveValue12unitCategoryENS0_9UnitTypesE(i14) | 0)) {
    break;
   }
   i17 = __ZN7WebCore17CSSPrimitiveValue28canonicalUnitTypeForCategoryENS0_12UnitCategoryE(i19) | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   i19 = HEAP32[i5 >> 2] | 0;
   d15 = +FUNCTION_TABLE_di[HEAP32[(HEAP32[i19 >> 2] | 0) + 16 >> 2] & 7](i19);
   d16 = d15 * +__ZN7WebCore17CSSPrimitiveValue37conversionToCanonicalUnitsScaleFactorEt(i18 & 65535);
   i19 = HEAP32[i8 >> 2] | 0;
   d15 = +FUNCTION_TABLE_di[HEAP32[(HEAP32[i19 >> 2] | 0) + 16 >> 2] & 7](i19);
   d13 = d15 * +__ZN7WebCore17CSSPrimitiveValue37conversionToCanonicalUnitsScaleFactorEt(i14 & 65535);
   do {
    if ((i4 | 0) == 43) {
     d23 = d16 + d13;
    } else if ((i4 | 0) == 45) {
     d23 = d16 - d13;
    } else if ((i4 | 0) == 42) {
     d23 = d16 * d13;
    } else if ((i4 | 0) == 47) {
     if (d13 == +0) {
      d23 = +NaN;
      break;
     }
     d23 = d16 / d13;
    } else {
     d23 = +0;
    }
   } while (0);
   HEAPF64[tempDoublePtr >> 3] = d23;
   i14 = HEAP32[tempDoublePtr + 4 >> 2] & 2146435072;
   i18 = 2146435071;
   if (i14 >>> 0 > i18 >>> 0 | i14 >>> 0 == i18 >>> 0 & (HEAP32[tempDoublePtr >> 2] & 0) >>> 0 > -1 >>> 0) {
    i24 = 0;
   } else {
    i18 = __ZN3WTF10fastMallocEj(20) | 0;
    i14 = __ZN3WTF10fastMallocEj(16) | 0;
    __ZN7WebCore17CSSPrimitiveValueC1EdNS0_9UnitTypesE(i14, d23, i17);
    switch ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i14) | 0) & 65535 | 0) {
    case 2:
     {
      i25 = 2;
      break;
     }
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 108:
    case 109:
     {
      i25 = 1;
      break;
     }
    case 1:
    case 104:
     {
      i25 = 0;
      break;
     }
    default:
     {
      i25 = 5;
     }
    }
    HEAP32[i18 + 4 >> 2] = 1;
    HEAP32[i18 + 8 >> 2] = i25;
    HEAP8[i18 + 12 | 0] = i11 & 1;
    HEAP32[i18 >> 2] = H_BASE + 104;
    HEAP32[i18 + 16 >> 2] = i14;
    i24 = i18;
   }
   HEAP32[i1 >> 2] = i24;
   return;
  } else {
   if ((i7 | 0) == 0) {
    i26 = i2;
   } else {
    i26 = (i9 | 0) == 0 ? i3 : 0;
   }
   if ((i26 | 0) != 0) {
    i18 = (i2 | 0) == (i26 | 0);
    if (i18 & i10) {
     HEAP32[i1 >> 2] = 0;
     return;
    }
    i14 = i18 ? i3 : i2;
    d13 = +FUNCTION_TABLE_di[HEAP32[(HEAP32[i26 >> 2] | 0) + 16 >> 2] & 7](i26);
    HEAPF64[tempDoublePtr >> 3] = d13;
    i18 = HEAP32[tempDoublePtr + 4 >> 2] & 2146435072;
    i19 = 2146435071;
    if (i18 >>> 0 > i19 >>> 0 | i18 >>> 0 == i19 >>> 0 & (HEAP32[tempDoublePtr >> 2] & 0) >>> 0 > -1 >>> 0) {
     HEAP32[i1 >> 2] = 0;
     return;
    }
    i19 = d13 != +0;
    if (!((i4 | 0) != 47 | i19)) {
     HEAP32[i1 >> 2] = 0;
     return;
    }
    i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] & 15](i14) | 0;
    switch (i18 | 0) {
    case 33:
    case 1:
    case 104:
    case 2:
    case 3:
    case 4:
    case 109:
    case 108:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
     {
      break;
     }
    default:
     {
      break L24;
     }
    }
    d16 = +FUNCTION_TABLE_di[HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] & 7](i14);
    do {
     if ((i4 | 0) == 43) {
      d27 = d13 + d16;
     } else if ((i4 | 0) == 45) {
      d27 = d16 - d13;
     } else if ((i4 | 0) == 42) {
      d27 = d13 * d16;
     } else if ((i4 | 0) == 47) {
      if (!i19) {
       d27 = +NaN;
       break;
      }
      d27 = d16 / d13;
     } else {
      d27 = +0;
     }
    } while (0);
    HEAPF64[tempDoublePtr >> 3] = d27;
    i19 = HEAP32[tempDoublePtr + 4 >> 2] & 2146435072;
    i17 = 2146435071;
    if (i19 >>> 0 > i17 >>> 0 | i19 >>> 0 == i17 >>> 0 & (HEAP32[tempDoublePtr >> 2] & 0) >>> 0 > -1 >>> 0) {
     i28 = 0;
    } else {
     i17 = __ZN3WTF10fastMallocEj(20) | 0;
     i19 = __ZN3WTF10fastMallocEj(16) | 0;
     __ZN7WebCore17CSSPrimitiveValueC1EdNS0_9UnitTypesE(i19, d27, i18);
     switch ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i19) | 0) & 65535 | 0) {
     case 2:
      {
       i29 = 2;
       break;
      }
     case 3:
     case 4:
     case 5:
     case 6:
     case 7:
     case 8:
     case 9:
     case 10:
     case 108:
     case 109:
      {
       i29 = 1;
       break;
      }
     case 1:
     case 104:
      {
       i29 = 0;
       break;
      }
     default:
      {
       i29 = 5;
      }
     }
     HEAP32[i17 + 4 >> 2] = 1;
     HEAP32[i17 + 8 >> 2] = i29;
     HEAP8[i17 + 12 | 0] = i11 & 1;
     HEAP32[i17 >> 2] = H_BASE + 104;
     HEAP32[i17 + 16 >> 2] = i19;
     i28 = i17;
    }
    HEAP32[i1 >> 2] = i28;
    return;
   }
   HEAP32[i5 >> 2] = 0;
   i17 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i19 = HEAP32[i6 >> 2] | 0;
   i14 = HEAP32[i17 + 8 >> 2] | 0;
   do {
    if (!((i19 | 0) == 5 | (i14 | 0) == 5)) {
     if ((i4 | 0) == 43 | (i4 | 0) == 45) {
      i30 = HEAP32[H_BASE + 216 + (i19 * 20 & -1) + (i14 << 2) >> 2] | 0;
     } else if ((i4 | 0) == 42) {
      i12 = (i19 | 0) == 0;
      if (!(i12 | (i14 | 0) == 0)) {
       break;
      }
      i30 = i12 ? i14 : i19;
     } else if ((i4 | 0) == 47) {
      if ((i14 | 0) != 0) {
       break;
      }
      i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] & 15](i17) | 0;
      i30 = i12 ? 5 : i19;
     } else {
      break;
     }
     if ((i30 | 0) == 5) {
      break;
     }
     i12 = __ZN3WTF10fastMallocEj(28) | 0;
     do {
      if (i10) {
       i31 = 0;
      } else {
       if ((HEAP8[i2 + 12 | 0] & 1) == 0) {
        i31 = 0;
        break;
       }
       i31 = HEAP8[i17 + 12 | 0] & 1;
      }
     } while (0);
     HEAP32[i12 + 4 >> 2] = 1;
     HEAP32[i12 + 8 >> 2] = i30;
     HEAP8[i12 + 12 | 0] = i31;
     HEAP32[i12 >> 2] = H_BASE + 48;
     HEAP32[i12 + 16 >> 2] = i2;
     HEAP32[i12 + 20 >> 2] = i17;
     HEAP32[i12 + 24 >> 2] = i4;
     HEAP32[i1 >> 2] = i12;
     return;
    }
   } while (0);
   HEAP32[i1 >> 2] = 0;
   do {
    if ((i17 | 0) != 0) {
     i19 = i17 + 4 | 0;
     i14 = i19 | 0;
     i18 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) != 0) {
      HEAP32[i14 >> 2] = i18;
      break;
     }
     i18 = i19 - 4 | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 31](i18);
    }
   } while (0);
   if ((i2 | 0) == 0) {
    return;
   }
   i17 = i2 + 4 | 0;
   i18 = i17 | 0;
   i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i18 >> 2] = i19;
    return;
   }
   i19 = i17 - 4 | 0;
   if ((i19 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 31](i19);
   return;
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i31 = HEAP32[i5 + 8 >> 2] | 0;
 do {
  if (!((i8 | 0) == 5 | (i31 | 0) == 5)) {
   if ((i4 | 0) == 43 | (i4 | 0) == 45) {
    i32 = HEAP32[H_BASE + 216 + (i8 * 20 & -1) + (i31 << 2) >> 2] | 0;
   } else if ((i4 | 0) == 42) {
    i30 = (i8 | 0) == 0;
    if (!(i30 | (i31 | 0) == 0)) {
     break;
    }
    i32 = i30 ? i31 : i8;
   } else if ((i4 | 0) == 47) {
    if ((i31 | 0) != 0) {
     break;
    }
    i30 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 15](i5) | 0;
    i32 = i30 ? 5 : i8;
   } else {
    break;
   }
   if ((i32 | 0) == 5) {
    break;
   }
   i30 = __ZN3WTF10fastMallocEj(28) | 0;
   do {
    if (i10) {
     i33 = 0;
    } else {
     if ((HEAP8[i2 + 12 | 0] & 1) == 0) {
      i33 = 0;
      break;
     }
     i33 = HEAP8[i5 + 12 | 0] & 1;
    }
   } while (0);
   HEAP32[i30 + 4 >> 2] = 1;
   HEAP32[i30 + 8 >> 2] = i32;
   HEAP8[i30 + 12 | 0] = i33;
   HEAP32[i30 >> 2] = H_BASE + 48;
   HEAP32[i30 + 16 >> 2] = i2;
   HEAP32[i30 + 20 >> 2] = i5;
   HEAP32[i30 + 24 >> 2] = i4;
   HEAP32[i1 >> 2] = i30;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i1 = i5 + 4 | 0;
   i4 = i1 | 0;
   i33 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i33 | 0) != 0) {
    HEAP32[i4 >> 2] = i33;
    break;
   }
   i33 = i1 - 4 | 0;
   if ((i33 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 4 >> 2] & 31](i33);
  }
 } while (0);
 if ((i2 | 0) == 0) {
  return;
 }
 i5 = i2 + 4 | 0;
 i2 = i5 | 0;
 i33 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i33 | 0) != 0) {
  HEAP32[i2 >> 2] = i33;
  return;
 }
 i33 = i5 - 4 | 0;
 if ((i33 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 4 >> 2] & 31](i33);
 return;
}
function __ZN7WebCore12CSSCalcValue20createExpressionNodeEPKNS_18CalcExpressionNodeEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 switch (HEAP32[i2 + 4 >> 2] | 0) {
 case 2:
  {
   __ZN7WebCore12CSSCalcValue20createExpressionNodeERKNS_6LengthEPKNS_11RenderStyleE(i1, i2 + 8 | 0, i3);
   STACKTOP = i4;
   return;
  }
 case 3:
  {
   __ZN7WebCore12CSSCalcValue20createExpressionNodeEPKNS_18CalcExpressionNodeEPKNS_11RenderStyleE(i5, HEAP32[i2 + 8 >> 2] | 0, i3);
   __ZN7WebCore12CSSCalcValue20createExpressionNodeEPKNS_18CalcExpressionNodeEPKNS_11RenderStyleE(i6, HEAP32[i2 + 12 >> 2] | 0, i3);
   __ZN7WebCore12CSSCalcValue20createExpressionNodeEN3WTF10PassRefPtrINS_21CSSCalcExpressionNodeEEES4_NS_12CalcOperatorE(i1, i5, i6, HEAP32[i2 + 16 >> 2] | 0);
   i13 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i6 = i13 + 4 | 0;
     i14 = i6 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i15 | 0) != 0) {
      HEAP32[i14 >> 2] = i15;
      break;
     }
     i15 = i6 - 4 | 0;
     if ((i15 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 31](i15);
    }
   } while (0);
   i13 = HEAP32[i5 >> 2] | 0;
   if ((i13 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i5 = i13 + 4 | 0;
   i13 = i5 | 0;
   i15 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i13 >> 2] = i15;
    STACKTOP = i4;
    return;
   }
   i15 = i5 - 4 | 0;
   if ((i15 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 31](i15);
   STACKTOP = i4;
   return;
  }
 case 4:
  {
   d16 = +HEAPF32[i2 + 24 >> 2];
   d17 = d16;
   if (d16 != +0) {
    i18 = d16 == +1 | 0;
   } else {
    i18 = 1;
   }
   __ZN7WebCore12CSSCalcValue20createExpressionNodeERKNS_6LengthEPKNS_11RenderStyleE(i8, i2 + 8 | 0, i3);
   i15 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1EdNS0_9UnitTypesE(i15, +1 - d17, 1);
   i5 = __ZN3WTF10fastMallocEj(20) | 0;
   switch ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i15) | 0) & 65535 | 0) {
   case 1:
   case 104:
    {
     i19 = 0;
     break;
    }
   case 2:
    {
     i19 = 2;
     break;
    }
   case 3:
   case 4:
   case 5:
   case 6:
   case 7:
   case 8:
   case 9:
   case 10:
   case 108:
   case 109:
    {
     i19 = 1;
     break;
    }
   default:
    {
     i19 = 5;
    }
   }
   HEAP32[i5 + 4 >> 2] = 1;
   HEAP32[i5 + 8 >> 2] = i19;
   HEAP8[i5 + 12 | 0] = i18;
   HEAP32[i5 >> 2] = H_BASE + 104;
   HEAP32[i5 + 16 >> 2] = i15;
   i15 = i9 | 0;
   HEAP32[i15 >> 2] = i5;
   __ZN7WebCore12CSSCalcValue20createExpressionNodeEN3WTF10PassRefPtrINS_21CSSCalcExpressionNodeEEES4_NS_12CalcOperatorE(i7, i8, i9, 42);
   __ZN7WebCore12CSSCalcValue20createExpressionNodeERKNS_6LengthEPKNS_11RenderStyleE(i11, i2 + 16 | 0, i3);
   i3 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1EdNS0_9UnitTypesE(i3, d17, 1);
   i9 = __ZN3WTF10fastMallocEj(20) | 0;
   switch ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i3) | 0) & 65535 | 0) {
   case 2:
    {
     i20 = 2;
     break;
    }
   case 3:
   case 4:
   case 5:
   case 6:
   case 7:
   case 8:
   case 9:
   case 10:
   case 108:
   case 109:
    {
     i20 = 1;
     break;
    }
   case 1:
   case 104:
    {
     i20 = 0;
     break;
    }
   default:
    {
     i20 = 5;
    }
   }
   HEAP32[i9 + 4 >> 2] = 1;
   HEAP32[i9 + 8 >> 2] = i20;
   HEAP8[i9 + 12 | 0] = i18;
   HEAP32[i9 >> 2] = H_BASE + 104;
   HEAP32[i9 + 16 >> 2] = i3;
   i3 = i12 | 0;
   HEAP32[i3 >> 2] = i9;
   __ZN7WebCore12CSSCalcValue20createExpressionNodeEN3WTF10PassRefPtrINS_21CSSCalcExpressionNodeEEES4_NS_12CalcOperatorE(i10, i11, i12, 42);
   __ZN7WebCore12CSSCalcValue20createExpressionNodeEN3WTF10PassRefPtrINS_21CSSCalcExpressionNodeEEES4_NS_12CalcOperatorE(i1, i7, i10, 43);
   i12 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i10 = i12 + 4 | 0;
     i9 = i10 | 0;
     i18 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) != 0) {
      HEAP32[i9 >> 2] = i18;
      break;
     }
     i18 = i10 - 4 | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 31](i18);
    }
   } while (0);
   i12 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i3 = i12 + 4 | 0;
     i18 = i3 | 0;
     i10 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i18 >> 2] = i10;
      break;
     }
     i10 = i3 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
    }
   } while (0);
   i12 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i11 = i12 + 4 | 0;
     i10 = i11 | 0;
     i3 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i3 | 0) != 0) {
      HEAP32[i10 >> 2] = i3;
      break;
     }
     i3 = i11 - 4 | 0;
     if ((i3 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
    }
   } while (0);
   i12 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i7 = i12 + 4 | 0;
     i3 = i7 | 0;
     i11 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) != 0) {
      HEAP32[i3 >> 2] = i11;
      break;
     }
     i11 = i7 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 31](i11);
    }
   } while (0);
   i12 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i15 = i12 + 4 | 0;
     i11 = i15 | 0;
     i7 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) != 0) {
      HEAP32[i11 >> 2] = i7;
      break;
     }
     i7 = i15 - 4 | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
    }
   } while (0);
   i12 = HEAP32[i8 >> 2] | 0;
   if ((i12 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i8 = i12 + 4 | 0;
   i12 = i8 | 0;
   i7 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i12 >> 2] = i7;
    STACKTOP = i4;
    return;
   }
   i7 = i8 - 4 | 0;
   if ((i7 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
   STACKTOP = i4;
   return;
  }
 case 1:
  {
   d17 = +HEAPF32[i2 + 8 >> 2];
   i2 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1EdNS0_9UnitTypesE(i2, d17, 1);
   i7 = d17 == +_trunc(+d17);
   i8 = __ZN3WTF10fastMallocEj(20) | 0;
   switch ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0) & 65535 | 0) {
   case 2:
    {
     i21 = 2;
     break;
    }
   case 1:
   case 104:
    {
     i21 = 0;
     break;
    }
   case 3:
   case 4:
   case 5:
   case 6:
   case 7:
   case 8:
   case 9:
   case 10:
   case 108:
   case 109:
    {
     i21 = 1;
     break;
    }
   default:
    {
     i21 = 5;
    }
   }
   HEAP32[i8 + 4 >> 2] = 1;
   HEAP32[i8 + 8 >> 2] = i21;
   HEAP8[i8 + 12 | 0] = i7 & 1;
   HEAP32[i8 >> 2] = H_BASE + 104;
   HEAP32[i8 + 16 >> 2] = i2;
   HEAP32[i1 >> 2] = i8;
   STACKTOP = i4;
   return;
  }
 case 0:
  {
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i4;
   return;
  }
 default:
  {
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i4;
   return;
  }
 }
}
function __ZN7WebCore27CSSCalcExpressionNodeParser28parseAdditiveValueExpressionEPNS_18CSSParserValueListEiPjPNS0_5ValueE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i3 + 1 | 0;
 if ((i11 | 0) > 100) {
  i12 = 0;
  STACKTOP = i6;
  return i12 | 0;
 }
 i3 = i2 + 16 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 <= (HEAP32[i4 >> 2] | 0) >>> 0) {
  i12 = 0;
  STACKTOP = i6;
  return i12 | 0;
 }
 if (!(__ZN7WebCore27CSSCalcExpressionNodeParser34parseValueMultiplicativeExpressionEPNS_18CSSParserValueListEiPjPNS0_5ValueE(i1, i2, i11, i4, i5) | 0)) {
  i12 = 0;
  STACKTOP = i6;
  return i12 | 0;
 }
 i13 = i2 + 8 | 0;
 i14 = i7 | 0;
 i15 = i9 | 0;
 i16 = i5 | 0;
 i5 = i10 | 0;
 i17 = i8 | 0;
 while (1) {
  i18 = HEAP32[i4 >> 2] | 0;
  i19 = HEAP32[i3 >> 2] | 0;
  if (!(i18 >>> 0 < (i19 - 1 | 0) >>> 0 & i19 >>> 0 > i18 >>> 0)) {
   i12 = 1;
   i20 = 48;
   break;
  }
  i19 = HEAP32[i13 >> 2] | 0;
  if ((HEAP32[i19 + (i18 << 5) + 24 >> 2] | 0) != 1048576) {
   i12 = 1;
   i20 = 41;
   break;
  }
  i21 = HEAP32[i19 + (i18 << 5) + 8 >> 2] & 255;
  if (!((i21 << 24 >> 24 | 0) == 43 | (i21 << 24 >> 24 | 0) == 45)) {
   i12 = 1;
   i20 = 47;
   break;
  }
  HEAP32[i4 >> 2] = i18 + 1;
  HEAP32[i14 >> 2] = 0;
  if (!(__ZN7WebCore27CSSCalcExpressionNodeParser34parseValueMultiplicativeExpressionEPNS_18CSSParserValueListEiPjPNS0_5ValueE(i1, i2, i11, i4, i7) | 0)) {
   i20 = 34;
   break;
  }
  i18 = HEAP32[i16 >> 2] | 0;
  HEAP32[i15 >> 2] = i18;
  if ((i18 | 0) != 0) {
   i19 = i18 + 4 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
  }
  i19 = HEAP32[i14 >> 2] | 0;
  HEAP32[i5 >> 2] = i19;
  i18 = (i19 | 0) == 0;
  if (!i18) {
   i22 = i19 + 4 | 0;
   HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
  }
  __ZN7WebCore22CSSCalcBinaryOperation16createSimplifiedEN3WTF10PassRefPtrINS_21CSSCalcExpressionNodeEEES4_NS_12CalcOperatorE(i8, i9, i10, i21 << 24 >> 24);
  i21 = HEAP32[i17 >> 2] | 0;
  HEAP32[i17 >> 2] = 0;
  i22 = HEAP32[i16 >> 2] | 0;
  HEAP32[i16 >> 2] = i21;
  do {
   if ((i22 | 0) != 0) {
    i21 = i22 + 4 | 0;
    i23 = i21 | 0;
    i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
    if ((i24 | 0) != 0) {
     HEAP32[i23 >> 2] = i24;
     break;
    }
    i24 = i21 - 4 | 0;
    if ((i24 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 31](i24);
   }
  } while (0);
  i22 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i22 | 0) != 0) {
    i24 = i22 + 4 | 0;
    i21 = i24 | 0;
    i23 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
    if ((i23 | 0) != 0) {
     HEAP32[i21 >> 2] = i23;
     break;
    }
    i23 = i24 - 4 | 0;
    if ((i23 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 31](i23);
   }
  } while (0);
  i22 = HEAP32[i15 >> 2] | 0;
  do {
   if ((i22 | 0) != 0) {
    i23 = i22 + 4 | 0;
    i24 = i23 | 0;
    i21 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
    if ((i21 | 0) != 0) {
     HEAP32[i24 >> 2] = i21;
     break;
    }
    i21 = i23 - 4 | 0;
    if ((i21 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 31](i21);
   }
  } while (0);
  i22 = (HEAP32[i16 >> 2] | 0) == 0;
  do {
   if (!i18) {
    i21 = i19 + 4 | 0;
    i23 = i21 | 0;
    i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
    if ((i24 | 0) != 0) {
     HEAP32[i23 >> 2] = i24;
     break;
    }
    i24 = i21 - 4 | 0;
    if ((i24 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 31](i24);
   }
  } while (0);
  if (i22) {
   i12 = 0;
   i20 = 42;
   break;
  }
 }
 if ((i20 | 0) == 41) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i20 | 0) == 42) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i20 | 0) == 47) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i20 | 0) == 48) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i20 | 0) == 34) {
  i20 = HEAP32[i14 >> 2] | 0;
  if ((i20 | 0) == 0) {
   i12 = 0;
   STACKTOP = i6;
   return i12 | 0;
  }
  i14 = i20 + 4 | 0;
  i20 = i14 | 0;
  i16 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
  if ((i16 | 0) != 0) {
   HEAP32[i20 >> 2] = i16;
   i12 = 0;
   STACKTOP = i6;
   return i12 | 0;
  }
  i16 = i14 - 4 | 0;
  if ((i16 | 0) == 0) {
   i12 = 0;
   STACKTOP = i6;
   return i12 | 0;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 31](i16);
  i12 = 0;
  STACKTOP = i6;
  return i12 | 0;
 }
 return 0;
}
function __ZN7WebCore27CSSCalcExpressionNodeParser34parseValueMultiplicativeExpressionEPNS_18CSSParserValueListEiPjPNS0_5ValueE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i3 + 1 | 0;
 if ((i11 | 0) > 100) {
  i12 = 0;
  STACKTOP = i6;
  return i12 | 0;
 }
 i3 = i2 + 16 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 <= (HEAP32[i4 >> 2] | 0) >>> 0) {
  i12 = 0;
  STACKTOP = i6;
  return i12 | 0;
 }
 if (!(__ZN7WebCore27CSSCalcExpressionNodeParser14parseValueTermEPNS_18CSSParserValueListEiPjPNS0_5ValueE(i1, i2, i11, i4, i5) | 0)) {
  i12 = 0;
  STACKTOP = i6;
  return i12 | 0;
 }
 i13 = i2 + 8 | 0;
 i14 = i7 | 0;
 i15 = i9 | 0;
 i16 = i5 | 0;
 i5 = i10 | 0;
 i17 = i8 | 0;
 while (1) {
  i18 = HEAP32[i4 >> 2] | 0;
  i19 = HEAP32[i3 >> 2] | 0;
  if (!(i18 >>> 0 < (i19 - 1 | 0) >>> 0 & i19 >>> 0 > i18 >>> 0)) {
   i12 = 1;
   i20 = 50;
   break;
  }
  i19 = HEAP32[i13 >> 2] | 0;
  if ((HEAP32[i19 + (i18 << 5) + 24 >> 2] | 0) != 1048576) {
   i12 = 1;
   i20 = 49;
   break;
  }
  i21 = HEAP32[i19 + (i18 << 5) + 8 >> 2] & 255;
  if (!((i21 << 24 >> 24 | 0) == 42 | (i21 << 24 >> 24 | 0) == 47)) {
   i12 = 1;
   i20 = 48;
   break;
  }
  HEAP32[i4 >> 2] = i18 + 1;
  HEAP32[i14 >> 2] = 0;
  if (!(__ZN7WebCore27CSSCalcExpressionNodeParser14parseValueTermEPNS_18CSSParserValueListEiPjPNS0_5ValueE(i1, i2, i11, i4, i7) | 0)) {
   i20 = 34;
   break;
  }
  i18 = HEAP32[i16 >> 2] | 0;
  HEAP32[i15 >> 2] = i18;
  if ((i18 | 0) != 0) {
   i19 = i18 + 4 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
  }
  i19 = HEAP32[i14 >> 2] | 0;
  HEAP32[i5 >> 2] = i19;
  i18 = (i19 | 0) == 0;
  if (!i18) {
   i22 = i19 + 4 | 0;
   HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
  }
  __ZN7WebCore22CSSCalcBinaryOperation16createSimplifiedEN3WTF10PassRefPtrINS_21CSSCalcExpressionNodeEEES4_NS_12CalcOperatorE(i8, i9, i10, i21 << 24 >> 24);
  i21 = HEAP32[i17 >> 2] | 0;
  HEAP32[i17 >> 2] = 0;
  i22 = HEAP32[i16 >> 2] | 0;
  HEAP32[i16 >> 2] = i21;
  do {
   if ((i22 | 0) != 0) {
    i21 = i22 + 4 | 0;
    i23 = i21 | 0;
    i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
    if ((i24 | 0) != 0) {
     HEAP32[i23 >> 2] = i24;
     break;
    }
    i24 = i21 - 4 | 0;
    if ((i24 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 31](i24);
   }
  } while (0);
  i22 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i22 | 0) != 0) {
    i24 = i22 + 4 | 0;
    i21 = i24 | 0;
    i23 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
    if ((i23 | 0) != 0) {
     HEAP32[i21 >> 2] = i23;
     break;
    }
    i23 = i24 - 4 | 0;
    if ((i23 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 31](i23);
   }
  } while (0);
  i22 = HEAP32[i15 >> 2] | 0;
  do {
   if ((i22 | 0) != 0) {
    i23 = i22 + 4 | 0;
    i24 = i23 | 0;
    i21 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
    if ((i21 | 0) != 0) {
     HEAP32[i24 >> 2] = i21;
     break;
    }
    i21 = i23 - 4 | 0;
    if ((i21 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 31](i21);
   }
  } while (0);
  i22 = (HEAP32[i16 >> 2] | 0) == 0;
  do {
   if (!i18) {
    i21 = i19 + 4 | 0;
    i23 = i21 | 0;
    i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
    if ((i24 | 0) != 0) {
     HEAP32[i23 >> 2] = i24;
     break;
    }
    i24 = i21 - 4 | 0;
    if ((i24 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 31](i24);
   }
  } while (0);
  if (i22) {
   i12 = 0;
   i20 = 42;
   break;
  }
 }
 if ((i20 | 0) == 42) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i20 | 0) == 48) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i20 | 0) == 49) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i20 | 0) == 50) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i20 | 0) == 34) {
  i20 = HEAP32[i14 >> 2] | 0;
  if ((i20 | 0) == 0) {
   i12 = 0;
   STACKTOP = i6;
   return i12 | 0;
  }
  i14 = i20 + 4 | 0;
  i20 = i14 | 0;
  i16 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
  if ((i16 | 0) != 0) {
   HEAP32[i20 >> 2] = i16;
   i12 = 0;
   STACKTOP = i6;
   return i12 | 0;
  }
  i16 = i14 - 4 | 0;
  if ((i16 | 0) == 0) {
   i12 = 0;
   STACKTOP = i6;
   return i12 | 0;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 31](i16);
  i12 = 0;
  STACKTOP = i6;
  return i12 | 0;
 }
 return 0;
}
function __ZN7WebCore22CSSCalcBinaryOperation12buildCssTextERKN3WTF6StringES4_NS_12CalcOperatorE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i11 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i11 + 4 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i11 + 8 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i11 + 12 | 0;
 HEAP8[i15] = 1;
 HEAP32[i11 + 16 >> 2] = 0;
 i16 = i11 + 20 | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP8[i10] = 40;
 __ZN3WTF13StringBuilder6appendEPKhj(i11, i10, 1);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i11, i2);
 HEAP8[i9] = 32;
 i2 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i17 = 7;
  } else {
   i10 = HEAP32[i12 >> 2] | 0;
   if (i10 >>> 0 >= (HEAP32[i2 + 4 >> 2] | 0) >>> 0) {
    i17 = 7;
    break;
   }
   if ((HEAP32[i13 >> 2] | 0) != 0) {
    i17 = 7;
    break;
   }
   i18 = (HEAP8[i15] & 1) == 0;
   HEAP32[i12 >> 2] = i10 + 1;
   if (i18) {
    HEAP16[(HEAP32[i11 + 20 >> 2] | 0) + (i10 << 1) >> 1] = 32;
    break;
   } else {
    HEAP8[(HEAP32[i16 >> 2] | 0) + i10 | 0] = 32;
    break;
   }
  }
 } while (0);
 if ((i17 | 0) == 7) {
  __ZN3WTF13StringBuilder6appendEPKhj(i11, i9, 1);
 }
 i9 = i4 & 255;
 HEAP8[i8] = i9;
 i2 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i17 = 14;
  } else {
   i10 = HEAP32[i12 >> 2] | 0;
   if (i10 >>> 0 >= (HEAP32[i2 + 4 >> 2] | 0) >>> 0) {
    i17 = 14;
    break;
   }
   if ((HEAP32[i13 >> 2] | 0) != 0) {
    i17 = 14;
    break;
   }
   if ((HEAP8[i15] & 1) == 0) {
    HEAP32[i12 >> 2] = i10 + 1;
    HEAP16[(HEAP32[i11 + 20 >> 2] | 0) + (i10 << 1) >> 1] = i4 & 255;
    break;
   } else {
    HEAP32[i12 >> 2] = i10 + 1;
    HEAP8[(HEAP32[i16 >> 2] | 0) + i10 | 0] = i9;
    break;
   }
  }
 } while (0);
 if ((i17 | 0) == 14) {
  __ZN3WTF13StringBuilder6appendEPKhj(i11, i8, 1);
 }
 HEAP8[i7] = 32;
 i8 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i17 = 21;
  } else {
   i9 = HEAP32[i12 >> 2] | 0;
   if (i9 >>> 0 >= (HEAP32[i8 + 4 >> 2] | 0) >>> 0) {
    i17 = 21;
    break;
   }
   if ((HEAP32[i13 >> 2] | 0) != 0) {
    i17 = 21;
    break;
   }
   i4 = (HEAP8[i15] & 1) == 0;
   HEAP32[i12 >> 2] = i9 + 1;
   if (i4) {
    HEAP16[(HEAP32[i11 + 20 >> 2] | 0) + (i9 << 1) >> 1] = 32;
    break;
   } else {
    HEAP8[(HEAP32[i16 >> 2] | 0) + i9 | 0] = 32;
    break;
   }
  }
 } while (0);
 if ((i17 | 0) == 21) {
  __ZN3WTF13StringBuilder6appendEPKhj(i11, i7, 1);
 }
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i11, i3);
 HEAP8[i6] = 41;
 i3 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i17 = 28;
  } else {
   i7 = HEAP32[i12 >> 2] | 0;
   if (i7 >>> 0 >= (HEAP32[i3 + 4 >> 2] | 0) >>> 0) {
    i17 = 28;
    break;
   }
   if ((HEAP32[i13 >> 2] | 0) != 0) {
    i17 = 28;
    break;
   }
   i8 = (HEAP8[i15] & 1) == 0;
   HEAP32[i12 >> 2] = i7 + 1;
   if (i8) {
    HEAP16[(HEAP32[i11 + 20 >> 2] | 0) + (i7 << 1) >> 1] = 41;
    break;
   } else {
    HEAP8[(HEAP32[i16 >> 2] | 0) + i7 | 0] = 41;
    break;
   }
  }
 } while (0);
 if ((i17 | 0) == 28) {
  __ZN3WTF13StringBuilder6appendEPKhj(i11, i6, 1);
 }
 __ZN3WTF13StringBuilder11shrinkToFitEv(i11);
 i6 = HEAP32[i13 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i11);
  i11 = HEAP32[i13 >> 2] | 0;
  HEAP32[i1 >> 2] = i11;
  if ((i11 | 0) != 0) {
   i19 = i11;
   i17 = 32;
  }
 } else {
  HEAP32[i1 >> 2] = i6;
  i19 = i6;
  i17 = 32;
 }
 if ((i17 | 0) == 32) {
  i17 = i19 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
 }
 i17 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i14 = i17 | 0;
   i19 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i14 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i13 >> 2] | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i13 = i17 | 0;
 i19 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
 if ((i19 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i17);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i13 >> 2] = i19;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore12CSSCalcValue6createENS_15CSSParserStringEPNS_18CSSParserValueListENS_30CalculationPermittedValueRangeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = (HEAP8[i2 + 8 | 0] & 1) == 0;
 if (i11) {
  i12 = HEAP32[i2 >> 2] | 0;
  i13 = HEAP32[i2 + 4 >> 2] | 0;
  __ZN3WTF6StringC1EPKtj(i9, i12, i13);
  i14 = i12;
  i15 = i13;
  i16 = i12;
 } else {
  i12 = HEAP32[i2 >> 2] | 0;
  i13 = HEAP32[i2 + 4 >> 2] | 0;
  __ZN3WTF6StringC1EPKhj(i9, i12, i13);
  i14 = i12;
  i15 = i13;
  i16 = i12;
 }
 i12 = i9 | 0;
 do {
  if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i12 >> 2] | 0, H_BASE + 32 | 0) | 0) {
   i17 = 1;
  } else {
   if (i11) {
    __ZN3WTF6StringC1EPKtj(i10, i14, i15);
   } else {
    __ZN3WTF6StringC1EPKhj(i10, i16, i15);
   }
   i9 = i10 | 0;
   i13 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i9 >> 2] | 0, H_BASE + 16 | 0) | 0;
   i2 = HEAP32[i9 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i17 = i13;
    break;
   }
   i9 = i2 | 0;
   i18 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    i17 = i13;
    break;
   } else {
    HEAP32[i9 >> 2] = i18;
    i17 = i13;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i12 = i10 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i12 >> 2] = i15;
    break;
   }
  }
 } while (0);
 do {
  if (i17) {
   HEAP32[i6 >> 2] = 0;
   i10 = i7 | 0;
   HEAP32[i10 >> 2] = 0;
   do {
    if (__ZN7WebCore27CSSCalcExpressionNodeParser28parseAdditiveValueExpressionEPNS_18CSSParserValueListEiPjPNS0_5ValueE(i8, i3, 0, i6, i7) | 0) {
     if ((HEAP32[i6 >> 2] | 0) != (HEAP32[i3 + 16 >> 2] | 0)) {
      i19 = 21;
      break;
     }
     i15 = HEAP32[i10 >> 2] | 0;
     if ((i15 | 0) == 0) {
      i19 = 29;
      break;
     }
     i12 = i15 + 4 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     i20 = i15;
     i21 = i15;
    } else {
     i19 = 21;
    }
   } while (0);
   if ((i19 | 0) == 21) {
    i15 = HEAP32[i10 >> 2] | 0;
    if ((i15 | 0) == 0) {
     i19 = 29;
    } else {
     i20 = i15;
     i21 = 0;
    }
   }
   if ((i19 | 0) == 29) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i5;
    return;
   }
   i15 = i20 + 4 | 0;
   i12 = i15 | 0;
   i16 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   do {
    if ((i16 | 0) == 0) {
     i14 = i15 - 4 | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 31](i14);
    } else {
     HEAP32[i12 >> 2] = i16;
    }
   } while (0);
   if ((i21 | 0) == 0) {
    break;
   }
   i16 = __ZN3WTF10fastMallocEj(16) | 0;
   i12 = i21 + 4 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   HEAP32[i16 >> 2] = 1;
   i12 = i16 + 4 | 0;
   HEAP32[i12 >> 2] = HEAP32[i12 >> 2] & -524288 | 180224;
   HEAP32[i16 + 8 >> 2] = i21;
   HEAP8[i16 + 12 | 0] = (i4 | 0) == 1 | 0;
   HEAP32[i1 >> 2] = i16;
   i16 = i21 + 4 | 0;
   i12 = i16 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i12 >> 2] = i15;
    STACKTOP = i5;
    return;
   }
   i15 = i16 - 4 | 0;
   if ((i15 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 31](i15);
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore12CSSCalcValue13customCSSTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 40 | 0;
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 24 >> 2] & 7](i7, i8);
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = 0;
 i2 = i6 + 4 | 0;
 HEAP32[i2 >> 2] = 0;
 i9 = i6 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i6 + 12 | 0;
 HEAP8[i10] = 1;
 HEAP32[i6 + 16 >> 2] = 0;
 i11 = i6 + 20 | 0;
 HEAP32[i11 >> 2] = 0;
 __ZN3WTF13StringBuilder6appendEPKhj(i6, H_BASE + 8 | 0, 4);
 i12 = i7 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i13 | 0) == 0) {
   i14 = 7;
  } else {
   if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
    i14 = 7;
    break;
   }
   i15 = i13 + 8 | 0;
   if ((HEAP32[i13 + 16 >> 2] & 32 | 0) == 0) {
    i16 = HEAP16[HEAP32[i15 >> 2] >> 1] | 0;
   } else {
    i16 = HEAPU8[HEAP32[i15 >> 2] | 0] | 0;
   }
   if (i16 << 16 >> 16 != 40) {
    i14 = 7;
    break;
   }
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i7);
  }
 } while (0);
 L9 : do {
  if ((i14 | 0) == 7) {
   HEAP8[i5] = 40;
   i16 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i16 | 0) == 0) {
     i14 = 13;
    } else {
     i13 = HEAP32[i8 >> 2] | 0;
     if (i13 >>> 0 >= (HEAP32[i16 + 4 >> 2] | 0) >>> 0) {
      i14 = 13;
      break;
     }
     if ((HEAP32[i2 >> 2] | 0) != 0) {
      i14 = 13;
      break;
     }
     i15 = (HEAP8[i10] & 1) == 0;
     HEAP32[i8 >> 2] = i13 + 1;
     if (i15) {
      HEAP16[(HEAP32[i6 + 20 >> 2] | 0) + (i13 << 1) >> 1] = 40;
      break;
     } else {
      HEAP8[(HEAP32[i11 >> 2] | 0) + i13 | 0] = 40;
      break;
     }
    }
   } while (0);
   if ((i14 | 0) == 13) {
    __ZN3WTF13StringBuilder6appendEPKhj(i6, i5, 1);
   }
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i7);
   HEAP8[i4] = 41;
   i16 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i13 = HEAP32[i8 >> 2] | 0;
     if (i13 >>> 0 >= (HEAP32[i16 + 4 >> 2] | 0) >>> 0) {
      break;
     }
     if ((HEAP32[i2 >> 2] | 0) != 0) {
      break;
     }
     i15 = (HEAP8[i10] & 1) == 0;
     HEAP32[i8 >> 2] = i13 + 1;
     if (i15) {
      HEAP16[(HEAP32[i6 + 20 >> 2] | 0) + (i13 << 1) >> 1] = 41;
      break L9;
     } else {
      HEAP8[(HEAP32[i11 >> 2] | 0) + i13 | 0] = 41;
      break L9;
     }
    }
   } while (0);
   __ZN3WTF13StringBuilder6appendEPKhj(i6, i4, 1);
  }
 } while (0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i6);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i6);
  i6 = HEAP32[i2 >> 2] | 0;
  HEAP32[i1 >> 2] = i6;
  if ((i6 | 0) != 0) {
   i17 = i6;
   i14 = 25;
  }
 } else {
  HEAP32[i1 >> 2] = i4;
  i17 = i4;
  i14 = 25;
 }
 if ((i14 | 0) == 25) {
  i14 = i17 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
 }
 i14 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i9 = i14 | 0;
   i17 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i9 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i2 = i14 | 0;
   i17 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i2 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i12 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i12 = i14 | 0;
 i17 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i17 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i14);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i12 >> 2] = i17;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore12CSSCalcValue20createExpressionNodeERKNS_6LengthEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, d10 = +0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 switch (HEAPU8[i2 + 5 | 0] | 0 | 0) {
 case 10:
  {
   __ZNK7WebCore6Length16calculationValueEv(i5, i2);
   i6 = i5 | 0;
   __ZN7WebCore12CSSCalcValue20createExpressionNodeEPKNS_18CalcExpressionNodeEPKNS_11RenderStyleE(i1, HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] | 0, i3);
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    STACKTOP = i4;
    return;
   }
   i7 = HEAP32[i5 + 4 >> 2] | 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
   }
   __ZN3WTF8fastFreeEPv(i5);
   STACKTOP = i4;
   return;
  }
 case 0:
 case 4:
 case 5:
 case 6:
 case 7:
 case 8:
 case 9:
 case 1:
 case 15:
  {
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i4;
   return;
  }
 case 2:
 case 11:
 case 12:
 case 13:
 case 14:
 case 3:
  {
   i5 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i5, i2, i3);
   if ((HEAP8[i2 + 6 | 0] & 1) == 0) {
    i3 = HEAP32[i2 >> 2] | 0;
    d8 = +(i3 | 0);
    d9 = +(i3 | 0);
   } else {
    d10 = +HEAPF32[i2 >> 2];
    d8 = d10;
    d9 = d10;
   }
   i2 = d9 == +_trunc(+d8);
   i3 = __ZN3WTF10fastMallocEj(20) | 0;
   switch ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i5) | 0) & 65535 | 0) {
   case 2:
    {
     i11 = 2;
     break;
    }
   case 3:
   case 4:
   case 5:
   case 6:
   case 7:
   case 8:
   case 9:
   case 10:
   case 108:
   case 109:
    {
     i11 = 1;
     break;
    }
   case 1:
   case 104:
    {
     i11 = 0;
     break;
    }
   default:
    {
     i11 = 5;
    }
   }
   HEAP32[i3 + 4 >> 2] = 1;
   HEAP32[i3 + 8 >> 2] = i11;
   HEAP8[i3 + 12 | 0] = i2 & 1;
   HEAP32[i3 >> 2] = H_BASE + 104;
   HEAP32[i3 + 16 >> 2] = i5;
   HEAP32[i1 >> 2] = i3;
   STACKTOP = i4;
   return;
  }
 default:
  {
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i4;
   return;
  }
 }
}
function __ZNK7WebCore21CSSCalcPrimitiveValue11toCalcValueEPKNS_11RenderStyleES3_d(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i7;
 i9 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3WTF10fastMallocEj(12) | 0;
  d11 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(HEAP32[i2 + 16 >> 2] | 0);
  do {
   if (d11 < 3.4028234663852886e+38) {
    if (d11 <= -3.4028234663852886e+38) {
     d12 = -3.4028234663852886e+38;
     break;
    }
    d12 = d11;
   } else {
    d12 = 3.4028234663852886e+38;
   }
  } while (0);
  HEAP32[i10 >> 2] = H_BASE + 160;
  HEAPF32[i10 + 8 >> 2] = d12;
  HEAP32[i10 + 4 >> 2] = 1;
  HEAP32[i1 >> 2] = i10;
  STACKTOP = i6;
  return;
 } else if ((i9 | 0) == 2 | (i9 | 0) == 4) {
  i10 = HEAP32[i2 + 16 >> 2] | 0;
  i13 = __ZN3WTF10fastMallocEj(16) | 0;
  if ((i10 | 0) == 0) {
   HEAP32[i7 >> 2] = 0;
   HEAP8[i8 + 4 | 0] = 0;
   HEAP8[i8 + 5 | 0] = 15;
   HEAP8[i8 + 6 | 0] = 0;
  } else {
   __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi26EEENS_6LengthEPKNS_11RenderStyleES5_db(i8, i10, i3, i4, d5, 0);
  }
  i10 = i13 + 4 | 0;
  HEAP32[i10 >> 2] = 0;
  HEAP32[i13 >> 2] = H_BASE + 192;
  i14 = i13 + 8 | 0;
  i15 = i14;
  i16 = HEAP32[i7 >> 2] | 0;
  i17 = HEAP32[i7 + 4 >> 2] | 0;
  HEAP32[i15 >> 2] = i16;
  HEAP32[i15 + 4 >> 2] = i17;
  if ((i16 & 0 | 0) == 0 & (i17 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i14);
  }
  HEAP32[i10 >> 2] = 2;
  HEAP32[i1 >> 2] = i13;
  if ((HEAP8[i8 + 5 | 0] | 0) != 10) {
   STACKTOP = i6;
   return;
  }
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i8);
  STACKTOP = i6;
  return;
 } else if ((i9 | 0) == 1) {
  i9 = __ZN3WTF10fastMallocEj(12) | 0;
  d12 = +__ZNK7WebCore17CSSPrimitiveValue13computeLengthIfEET_PKNS_11RenderStyleES5_fb(HEAP32[i2 + 16 >> 2] | 0, i3, i4, d5, 0);
  HEAP32[i9 >> 2] = H_BASE + 160;
  HEAPF32[i9 + 8 >> 2] = d12;
  HEAP32[i9 + 4 >> 2] = 1;
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore27CSSCalcExpressionNodeParser10parseValueEPNS_18CSSParserValueListEPjPNS0_5ValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 if (((HEAP32[i7 + (i6 << 5) + 24 >> 2] | 0) - 1048576 | 0) >>> 0 < 2 >>> 0) {
  i8 = 0;
  STACKTOP = i1;
  return i8 | 0;
 }
 __ZN7WebCore14CSSParserValue14createCSSValueEv(i5, i7 + (i6 << 5) | 0);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
  STACKTOP = i1;
  return i8 | 0;
 }
 if ((HEAP32[i5 + 4 >> 2] & 516096 | 0) == 0) {
  i2 = i5;
  i9 = i5 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i9 = HEAP8[i7 + (i6 << 5) + 4 | 0] & 1;
  i6 = __ZN3WTF10fastMallocEj(20) | 0;
  switch ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0) & 65535 | 0) {
  case 2:
   {
    i10 = 2;
    break;
   }
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 108:
  case 109:
   {
    i10 = 1;
    break;
   }
  case 1:
  case 104:
   {
    i10 = 0;
    break;
   }
  default:
   {
    i10 = 5;
   }
  }
  HEAP32[i6 + 4 >> 2] = 1;
  HEAP32[i6 + 8 >> 2] = i10;
  HEAP8[i6 + 12 | 0] = i9;
  HEAP32[i6 >> 2] = H_BASE + 104;
  HEAP32[i6 + 16 >> 2] = i2;
  i2 = i4 | 0;
  i4 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i6;
  do {
   if ((i4 | 0) != 0) {
    i6 = i4 + 4 | 0;
    i2 = i6 | 0;
    i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
    if ((i9 | 0) != 0) {
     HEAP32[i2 >> 2] = i9;
     break;
    }
    i9 = i6 - 4 | 0;
    if ((i9 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
   }
  } while (0);
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  i11 = 1;
 } else {
  i11 = 0;
 }
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i5);
  i8 = i11;
  STACKTOP = i1;
  return i8 | 0;
 } else {
  HEAP32[i3 >> 2] = i4;
  i8 = i11;
  STACKTOP = i1;
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore12CSSCalcValue20createExpressionNodeEN3WTF10PassRefPtrINS_21CSSCalcExpressionNodeEEES4_NS_12CalcOperatorE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i3 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i6 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if (!((i5 | 0) == 5 | (i6 | 0) == 5)) {
   if ((i4 | 0) == 43 | (i4 | 0) == 45) {
    i7 = HEAP32[H_BASE + 216 + (i5 * 20 & -1) + (i6 << 2) >> 2] | 0;
   } else if ((i4 | 0) == 42) {
    i8 = (i5 | 0) == 0;
    if (!(i8 | (i6 | 0) == 0)) {
     break;
    }
    i7 = i8 ? i6 : i5;
   } else if ((i4 | 0) == 47) {
    if ((i6 | 0) != 0) {
     break;
    }
    i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 15](i3) | 0;
    i7 = i8 ? 5 : i5;
   } else {
    break;
   }
   if ((i7 | 0) == 5) {
    break;
   }
   i8 = __ZN3WTF10fastMallocEj(28) | 0;
   do {
    if ((i4 | 0) == 47) {
     i9 = 0;
    } else {
     if ((HEAP8[i2 + 12 | 0] & 1) == 0) {
      i9 = 0;
      break;
     }
     i9 = HEAP8[i3 + 12 | 0] & 1;
    }
   } while (0);
   HEAP32[i8 + 4 >> 2] = 1;
   HEAP32[i8 + 8 >> 2] = i7;
   HEAP8[i8 + 12 | 0] = i9;
   HEAP32[i8 >> 2] = H_BASE + 48;
   HEAP32[i8 + 16 >> 2] = i2;
   HEAP32[i8 + 20 >> 2] = i3;
   HEAP32[i8 + 24 >> 2] = i4;
   HEAP32[i1 >> 2] = i8;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i1 = i3 + 4 | 0;
   i4 = i1 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i4 >> 2] = i9;
    break;
   }
   i9 = i1 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
  }
 } while (0);
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = i2 + 4 | 0;
 i2 = i3 | 0;
 i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i2 >> 2] = i9;
  return;
 }
 i9 = i3 - 4 | 0;
 if ((i9 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
 return;
}
function __ZN7WebCore27CSSCalcExpressionNodeParser14parseValueTermEPNS_18CSSParserValueListEiPjPNS0_5ValueE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i3 + 1 | 0;
 if ((i8 | 0) > 100) {
  i9 = 0;
  STACKTOP = i6;
  return i9 | 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 i10 = i2 + 16 | 0;
 if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i3 >>> 0) {
  i9 = 0;
  STACKTOP = i6;
  return i9 | 0;
 }
 i11 = i2 + 8 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((HEAP32[i12 + (i3 << 5) + 24 >> 2] | 0) == 1048576) {
   if ((HEAP32[i12 + (i3 << 5) + 8 >> 2] & 255) << 24 >> 24 != 40) {
    break;
   }
   HEAP32[i7 >> 2] = i3 + 1;
   if (!(__ZN7WebCore27CSSCalcExpressionNodeParser28parseAdditiveValueExpressionEPNS_18CSSParserValueListEiPjPNS0_5ValueE(i1, i2, i8, i7, i5) | 0)) {
    i9 = 0;
    STACKTOP = i6;
    return i9 | 0;
   }
   i13 = HEAP32[i7 >> 2] | 0;
   if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i13 >>> 0) {
    i9 = 0;
    STACKTOP = i6;
    return i9 | 0;
   }
   i14 = HEAP32[i11 >> 2] | 0;
   if ((HEAP32[i14 + (i13 << 5) + 24 >> 2] | 0) != 1048576) {
    i9 = 0;
    STACKTOP = i6;
    return i9 | 0;
   }
   if ((HEAP32[i14 + (i13 << 5) + 8 >> 2] & 255) << 24 >> 24 != 41) {
    i9 = 0;
    STACKTOP = i6;
    return i9 | 0;
   }
   HEAP32[i4 >> 2] = i13 + 1;
   i9 = 1;
   STACKTOP = i6;
   return i9 | 0;
  }
 } while (0);
 i9 = __ZN7WebCore27CSSCalcExpressionNodeParser10parseValueEPNS_18CSSParserValueListEPjPNS0_5ValueE(0, i2, i4, i5) | 0;
 STACKTOP = i6;
 return i9 | 0;
}
function __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi26EEENS_6LengthEPKNS_11RenderStyleES5_db(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 var d7 = +0;
 i6 = (HEAP32[i2 + 4 >> 2] | 0) >>> 2 & 127;
 do {
  if ((i6 | 0) == 3 | (i6 | 0) == 4 | (i6 | 0) == 108 | (i6 | 0) == 109) {
   if (!((i3 | 0) == 0 | (i4 | 0) == 0)) {
    break;
   }
   HEAP32[i1 >> 2] = 0;
   HEAP8[i1 + 4 | 0] = 0;
   HEAP8[i1 + 5 | 0] = 15;
   HEAP8[i1 + 6 | 0] = 0;
   return;
  }
 } while (0);
 i6 = __ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0;
 if ((i6 - 3 & 65535) >>> 0 < 8 >>> 0 | i6 << 16 >> 16 == 108 | i6 << 16 >> 16 == 109) {
  d7 = +__ZNK7WebCore17CSSPrimitiveValue13computeLengthIdEET_PKNS_11RenderStyleES5_fb(i2, i3, i4, d5, 0);
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 3;
  HEAP8[i1 + 6 | 0] = 1;
  HEAPF32[i1 >> 2] = d7;
  return;
 }
 if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0) << 16 >> 16 == 2) {
  d7 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i2);
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 2;
  HEAP8[i1 + 6 | 0] = 1;
  HEAPF32[i1 >> 2] = d7;
  return;
 }
 if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0) << 16 >> 16 == 1) {
  d7 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i2) * +100;
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 2;
  HEAP8[i1 + 6 | 0] = 1;
  HEAPF32[i1 >> 2] = d7;
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 15;
  HEAP8[i1 + 6 | 0] = 0;
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
function runPostSets() {
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_viiiid + 4;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_di + 4;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_diiidi + 2;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_viiiid + 2;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_di + 2;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_diiidi + 4;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_fif + 2;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_fif + 4;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_iii + 2;
}
function __ZNK7WebCore22CSSCalcBinaryOperation6equalsERKNS_21CSSCalcExpressionNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 15](i1) | 0;
 if ((i3 | 0) != (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] & 15](i2) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 i5 = (i3 | 0) == 0;
 i6 = HEAP32[i2 + 16 >> 2] | 0;
 i7 = (i6 | 0) == 0;
 do {
  if (i5 | i7) {
   if (i5 & i7) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  } else {
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 28 >> 2] & 15](i3, i6) | 0) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 i6 = HEAP32[i1 + 20 >> 2] | 0;
 i3 = (i6 | 0) == 0;
 i7 = HEAP32[i2 + 20 >> 2] | 0;
 i5 = (i7 | 0) == 0;
 do {
  if (i3 | i5) {
   if (i3 & i5) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  } else {
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i6 >> 2] | 0) + 28 >> 2] & 15](i6, i7) | 0) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 i4 = (HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i2 + 24 >> 2] | 0);
 return i4 | 0;
}
function __ZNK7WebCore22CSSCalcBinaryOperation11toCalcValueEPKNS_11RenderStyleES3_d(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = HEAP32[i2 + 16 >> 2] | 0;
 FUNCTION_TABLE_viiiid[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 7](i7, i9, i3, i4, d5);
 i9 = i7 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 if ((i7 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 i9 = HEAP32[i2 + 20 >> 2] | 0;
 FUNCTION_TABLE_viiiid[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 7](i8, i9, i3, i4, d5);
 i4 = i8 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i8 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  STACKTOP = i6;
  return;
 } else {
  i4 = __ZN3WTF10fastMallocEj(20) | 0;
  i3 = HEAP32[i2 + 24 >> 2] | 0;
  HEAP32[i4 >> 2] = __ZTVN7WebCore29CalcExpressionBinaryOperationE + 8;
  HEAP32[i4 + 8 >> 2] = i7;
  HEAP32[i4 + 12 >> 2] = i8;
  HEAP32[i4 + 16 >> 2] = i3;
  HEAP32[i4 + 4 >> 2] = 3;
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i6;
  return;
 }
}
function __ZNK7WebCore22CSSCalcBinaryOperation13customCSSTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 + 16 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 7](i4, i6);
 i6 = HEAP32[i2 + 20 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 7](i5, i6);
 __ZN7WebCore22CSSCalcBinaryOperation12buildCssTextERKN3WTF6StringES4_NS_12CalcOperatorE(i1, i4, i5, HEAP32[i2 + 24 >> 2] | 0);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore22CSSCalcBinaryOperationD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
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
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1;
  __ZN3WTF8fastFreeEPv(i6);
  return;
 }
 i5 = i2 + 4 | 0;
 i2 = i5 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  i6 = i1;
  __ZN3WTF8fastFreeEPv(i6);
  return;
 }
 i3 = i5 - 4 | 0;
 if ((i3 | 0) == 0) {
  i6 = i1;
  __ZN3WTF8fastFreeEPv(i6);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 i6 = i1;
 __ZN3WTF8fastFreeEPv(i6);
 return;
}
function __ZNK7WebCore20CalcExpressionLengtheqERKNS_18CalcExpressionNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0;
 if ((HEAP32[i1 + 4 >> 2] | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i2;
 i5 = i1 + 8 | 0;
 i6 = i2 + 8 | 0;
 i7 = HEAP8[i1 + 13 | 0] | 0;
 if (i7 << 24 >> 24 != (HEAP8[i4 + 13 | 0] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if (((HEAP8[i2 + 12 | 0] ^ HEAP8[i1 + 12 | 0]) & 1) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 if (i7 << 24 >> 24 == 15) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP8[i1 + 14 | 0] & 1) == 0) {
  d8 = +(HEAP32[i5 >> 2] | 0);
 } else {
  d8 = +HEAPF32[i5 >> 2];
 }
 if ((HEAP8[i4 + 14 | 0] & 1) == 0) {
  d9 = +(HEAP32[i6 >> 2] | 0);
 } else {
  d9 = +HEAPF32[i6 >> 2];
 }
 if (d8 == d9) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore6Length17isCalculatedEqualERKS0_(i5, i6) | 0;
 return i3 | 0;
}
function __ZNK7WebCore22CSSCalcBinaryOperation13primitiveTypeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = (HEAP8[i1 + 12 | 0] & 1) == 0 ? 1 : 104;
  return i3 | 0;
 } else if ((i2 | 0) == 1 | (i2 | 0) == 2) {
  i2 = HEAP32[i1 + 16 >> 2] | 0;
  i4 = i1 + 20 | 0;
  i1 = HEAP32[i4 >> 2] | 0;
  if ((HEAP32[i2 + 8 >> 2] | 0) == 0) {
   i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] & 15](i1) | 0;
   return i3 | 0;
  }
  i5 = (HEAP32[i1 + 8 >> 2] | 0) == 0;
  i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] & 15](i2) | 0;
  if (i5) {
   i3 = i1;
   return i3 | 0;
  }
  i5 = HEAP32[i4 >> 2] | 0;
  i4 = (i1 | 0) == (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 36 >> 2] & 15](i5) | 0);
  i3 = i4 ? i1 : 0;
  return i3 | 0;
 } else {
  i3 = 0;
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore22CSSCalcBinaryOperation15computeLengthPxEPKNS_11RenderStyleES3_db(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, d7 = +0, d8 = +0, d9 = +0;
 i6 = HEAP32[i1 + 16 >> 2] | 0;
 d7 = +FUNCTION_TABLE_diiidi[HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 7](i6, i2, i3, d4, i5);
 i6 = HEAP32[i1 + 20 >> 2] | 0;
 d8 = +FUNCTION_TABLE_diiidi[HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 7](i6, i2, i3, d4, i5);
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i5 | 0) == 43) {
  d9 = d7 + d8;
  return +d9;
 } else if ((i5 | 0) == 42) {
  d9 = d7 * d8;
  return +d9;
 } else if ((i5 | 0) == 45) {
  d9 = d7 - d8;
  return +d9;
 } else if ((i5 | 0) == 47) {
  if (d8 == +0) {
   d9 = +NaN;
   return +d9;
  }
  d9 = d7 / d8;
  return +d9;
 } else {
  d9 = +0;
  return +d9;
 }
 return +0;
}
function __ZN7WebCore22CSSCalcBinaryOperationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
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
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  return;
 }
 i5 = i1 - 4 | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 return;
}
function __ZN7WebCore12CSSCalcValue20createExpressionNodeEN3WTF10PassRefPtrINS_17CSSPrimitiveValueEEEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = __ZN3WTF10fastMallocEj(20) | 0;
 switch ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0) & 65535 | 0) {
 case 2:
  {
   i5 = 2;
   break;
  }
 case 3:
 case 4:
 case 5:
 case 6:
 case 7:
 case 8:
 case 9:
 case 10:
 case 108:
 case 109:
  {
   i5 = 1;
   break;
  }
 case 1:
 case 104:
  {
   i5 = 0;
   break;
  }
 default:
  {
   i5 = 5;
  }
 }
 HEAP32[i4 + 4 >> 2] = 1;
 HEAP32[i4 + 8 >> 2] = i5;
 HEAP8[i4 + 12 | 0] = i3 & 1;
 HEAP32[i4 >> 2] = H_BASE + 104;
 HEAP32[i4 + 16 >> 2] = i2;
 HEAP32[i1 >> 2] = i4;
 return;
}
function __ZNK7WebCore22CSSCalcBinaryOperation11doubleValueEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0, d4 = +0, d5 = +0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 d3 = +FUNCTION_TABLE_di[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 7](i2);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 d4 = +FUNCTION_TABLE_di[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 7](i2);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) == 45) {
   d5 = d3 - d4;
  } else if ((i2 | 0) == 43) {
   d5 = d3 + d4;
  } else if ((i2 | 0) == 47) {
   if (d4 == +0) {
    d5 = +NaN;
    break;
   }
   d5 = d3 / d4;
  } else if ((i2 | 0) == 42) {
   d5 = d3 * d4;
  } else {
   d5 = +0;
  }
 } while (0);
 return +d5;
}
function __ZNK7WebCore21CSSCalcPrimitiveValue11doubleValueEv(i1) {
 i1 = i1 | 0;
 var d2 = +0;
 switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] & 15](i1) | 0) {
 case 33:
 case 1:
 case 104:
 case 2:
 case 3:
 case 4:
 case 109:
 case 108:
 case 5:
 case 6:
 case 7:
 case 8:
 case 9:
 case 10:
 case 11:
 case 12:
 case 13:
 case 14:
 case 15:
 case 16:
 case 17:
 case 18:
 case 26:
 case 27:
 case 28:
 case 29:
 case 30:
 case 31:
 case 32:
  {
   break;
  }
 default:
  {
   d2 = +0;
   return +d2;
  }
 }
 d2 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(HEAP32[i1 + 16 >> 2] | 0);
 return +d2;
}
function __ZNK7WebCore21CSSCalcPrimitiveValue6equalsERKNS_21CSSCalcExpressionNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 15](i1) | 0;
 if ((i3 | 0) != (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] & 15](i2) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 i1 = (i3 | 0) == 0;
 i5 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = (i5 | 0) == 0;
 if (i1 | i2) {
  i4 = i1 & i2;
  return i4 | 0;
 }
 i4 = __ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i3, i5) | 0;
 return i4 | 0;
}
function __ZNK7WebCore21CSSCalcPrimitiveValue15computeLengthPxEPKNS_11RenderStyleES3_db(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, d7 = +0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i6 | 0) == 1) {
  d7 = +__ZNK7WebCore17CSSPrimitiveValue13computeLengthIdEET_PKNS_11RenderStyleES5_fb(HEAP32[i1 + 16 >> 2] | 0, i2, i3, d4, i5);
  return +d7;
 } else if ((i6 | 0) == 2 | (i6 | 0) == 0) {
  d7 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(HEAP32[i1 + 16 >> 2] | 0);
  return +d7;
 } else {
  d7 = +0;
  return +d7;
 }
 return +0;
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
function __ZN7WebCore12CSSCalcValue6createEN3WTF10PassRefPtrINS_21CSSCalcExpressionNodeEEENS_30CalculationPermittedValueRangeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = __ZN3WTF10fastMallocEj(16) | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i4 >> 2] = 1;
 i5 = i4 + 4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] & -524288 | 180224;
 HEAP32[i4 + 8 >> 2] = i2;
 HEAP8[i4 + 12 | 0] = (i3 | 0) == 1 | 0;
 HEAP32[i1 >> 2] = i4;
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
function __ZN7WebCore21CSSCalcPrimitiveValueD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 104;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore12CSSCalcValue15computeLengthPxEPKNS_11RenderStyleES3_db(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, d7 = +0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 d7 = +FUNCTION_TABLE_diiidi[HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 7](i6, i2, i3, d4, i5);
 return +((HEAP8[i1 + 12 | 0] & 1) != 0 & d7 < +0 ? +0 : d7);
}
function __ZNK7WebCore12CSSCalcValue6equalsERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = (i3 | 0) == 0;
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = (i4 | 0) == 0;
 if (i1 | i2) {
  i5 = i1 & i2;
  return i5 | 0;
 }
 i5 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 28 >> 2] & 15](i3, i4) | 0;
 return i5 | 0;
}
function __ZN7WebCore21CSSCalcPrimitiveValueD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 104;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore20CalcExpressionLengthD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 192;
 if ((HEAP8[i1 + 13 | 0] | 0) != 10) {
  i2 = i1;
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 8 | 0);
 i2 = i1;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore20CalcExpressionNumbereqERKNS_18CalcExpressionNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i1 + 4 >> 2] | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = +HEAPF32[i1 + 8 >> 2] == +HEAPF32[i2 + 8 >> 2];
 return i3 | 0;
}
function __ZNK7WebCore12CSSCalcValue11doubleValueEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 d3 = +FUNCTION_TABLE_di[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 7](i2);
 return +((HEAP8[i1 + 12 | 0] & 1) != 0 & d3 < +0 ? +0 : d3);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore20CalcExpressionLengthD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 192;
 if ((HEAP8[i1 + 13 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 8 | 0);
 return;
}
function dynCall_diiidi(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 return +FUNCTION_TABLE_diiidi[i1 & 7](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0);
}
function dynCall_viiiid(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 FUNCTION_TABLE_viiiid[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, +d6);
}
function __ZNK7WebCore20CalcExpressionLength8evaluateEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +(+__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 8 | 0, d2, 0));
}
function __ZNK7WebCore21CSSCalcPrimitiveValue13primitiveTypeEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(HEAP32[i1 + 16 >> 2] | 0) | 0) & 65535 | 0;
}
function __ZNK7WebCore21CSSCalcPrimitiveValue13customCSSTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore8CSSValue7cssTextEv(i1, HEAP32[i2 + 16 >> 2] | 0);
 return;
}
function __ZNK7WebCore21CSSCalcPrimitiveValue6isZeroEv(i1) {
 i1 = i1 | 0;
 return +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(HEAP32[i1 + 16 >> 2] | 0) == +0 | 0;
}
function __ZNK7WebCore22CSSCalcBinaryOperation6isZeroEv(i1) {
 i1 = i1 | 0;
 return +FUNCTION_TABLE_di[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 7](i1) == +0 | 0;
}
function __ZNK7WebCore12CSSCalcValue21clampToPermittedRangeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +((HEAP8[i1 + 12 | 0] & 1) != 0 & d2 < +0 ? +0 : d2);
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
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
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
function __ZNK7WebCore20CalcExpressionNumber8evaluateEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +(+HEAPF32[i1 + 8 >> 2]);
}
function dynCall_fif(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_fif[i1 & 7](i2 | 0, +d3);
}
function b5(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 abort(5);
 return +0;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function b4(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 abort(4);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function __ZN7WebCore21CSSCalcExpressionNodeD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore20CalcExpressionNumberD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 7](i2 | 0);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore22CSSCalcBinaryOperation4typeEv(i1) {
 i1 = i1 | 0;
 return 2;
}
function __ZNK7WebCore21CSSCalcPrimitiveValue4typeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore21CSSCalcExpressionNodeD2Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore21CSSCalcExpressionNodeD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore20CalcExpressionNumberD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function b6(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(6);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
 return +0;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0,__ZNK7WebCore22CSSCalcBinaryOperation4typeEv,b0,__ZNK7WebCore22CSSCalcBinaryOperation13primitiveTypeEv,b0,__ZNK7WebCore22CSSCalcBinaryOperation6isZeroEv,b0,__ZNK7WebCore21CSSCalcPrimitiveValue4typeEv,b0,__ZNK7WebCore21CSSCalcPrimitiveValue13primitiveTypeEv,b0,__ZNK7WebCore21CSSCalcPrimitiveValue6isZeroEv,b0,b0,b0];
  var FUNCTION_TABLE_di = [b1,b1,__ZNK7WebCore21CSSCalcPrimitiveValue11doubleValueEv,b1,__ZNK7WebCore22CSSCalcBinaryOperation11doubleValueEv,b1,b1,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore20CalcExpressionNumberD0Ev,b2,__ZN7WebCore20CalcExpressionNumberD1Ev,b2,__ZN7WebCore21CSSCalcPrimitiveValueD1Ev,b2,__ZN7WebCore21CSSCalcPrimitiveValueD0Ev,b2,__ZN7WebCore22CSSCalcBinaryOperationD1Ev,b2,__ZN7WebCore22CSSCalcBinaryOperationD0Ev,b2,__ZN7WebCore20CalcExpressionLengthD0Ev,b2,__ZN7WebCore21CSSCalcExpressionNodeD2Ev,b2,__ZN7WebCore20CalcExpressionLengthD1Ev,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZNK7WebCore21CSSCalcPrimitiveValue13customCSSTextEv,b3,__ZNK7WebCore22CSSCalcBinaryOperation13customCSSTextEv,b3,b3,b3];
  var FUNCTION_TABLE_viiiid = [b4,b4,__ZNK7WebCore21CSSCalcPrimitiveValue11toCalcValueEPKNS_11RenderStyleES3_d,b4,__ZNK7WebCore22CSSCalcBinaryOperation11toCalcValueEPKNS_11RenderStyleES3_d,b4,b4,b4];
  var FUNCTION_TABLE_diiidi = [b5,b5,__ZNK7WebCore22CSSCalcBinaryOperation15computeLengthPxEPKNS_11RenderStyleES3_db,b5,__ZNK7WebCore21CSSCalcPrimitiveValue15computeLengthPxEPKNS_11RenderStyleES3_db,b5,b5,b5];
  var FUNCTION_TABLE_fif = [b6,b6,__ZNK7WebCore20CalcExpressionNumber8evaluateEf,b6,__ZNK7WebCore20CalcExpressionLength8evaluateEf,b6,b6,b6];
  var FUNCTION_TABLE_v = [b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8,__ZNK7WebCore20CalcExpressionLengtheqERKNS_18CalcExpressionNodeE,b8,__ZNK7WebCore20CalcExpressionNumbereqERKNS_18CalcExpressionNodeE,b8,__ZNK7WebCore22CSSCalcBinaryOperation6equalsERKNS_21CSSCalcExpressionNodeE,b8,__ZNK7WebCore21CSSCalcPrimitiveValue6equalsERKNS_21CSSCalcExpressionNodeE,b8,b8,b8,b8,b8,b8,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_di: dynCall_di, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_viiiid: dynCall_viiiid, dynCall_diiidi: dynCall_diiidi, dynCall_fif: dynCall_fif, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_di": invoke_di, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_viiiid": invoke_viiiid, "invoke_diiidi": invoke_diiidi, "invoke_fif": invoke_fif, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "_trunc": _trunc, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN7WebCore29CalcExpressionBinaryOperationE": __ZTVN7WebCore29CalcExpressionBinaryOperationE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_viiiid = Module["dynCall_viiiid"] = asm["dynCall_viiiid"];
var dynCall_diiidi = Module["dynCall_diiidi"] = asm["dynCall_diiidi"];
var dynCall_fif = Module["dynCall_fif"] = asm["dynCall_fif"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore12CSSCalcValue15computeLengthPxEPKNS_11RenderStyleES3_db","__ZN7WebCore21CSSCalcExpressionNodeD0Ev","__ZN7WebCore27CSSCalcExpressionNodeParser34parseValueMultiplicativeExpressionEPNS_18CSSParserValueListEiPjPNS0_5ValueE","__ZN7WebCore20CalcExpressionNumberD1Ev","__ZNK7WebCore12CSSCalcValue21clampToPermittedRangeEd","__ZNK7WebCore21CSSCalcPrimitiveValue11toCalcValueEPKNS_11RenderStyleES3_d","__ZNK7WebCore12CSSCalcValue6equalsERKS0_","__ZNK7WebCore22CSSCalcBinaryOperation11toCalcValueEPKNS_11RenderStyleES3_d","__ZNK7WebCore21CSSCalcPrimitiveValue13customCSSTextEv","__ZN7WebCore21CSSCalcPrimitiveValueD1Ev","__ZNK7WebCore20CalcExpressionNumbereqERKNS_18CalcExpressionNodeE","__ZN7WebCore22CSSCalcBinaryOperation16createSimplifiedEN3WTF10PassRefPtrINS_21CSSCalcExpressionNodeEEES4_NS_12CalcOperatorE","__ZN7WebCore21CSSCalcPrimitiveValueD0Ev","__ZN7WebCore22CSSCalcBinaryOperationD0Ev","__ZN7WebCore22CSSCalcBinaryOperationD1Ev","__ZN7WebCore20CalcExpressionLengthD0Ev","__ZNK7WebCore20CalcExpressionNumber8evaluateEf","__ZN7WebCore27CSSCalcExpressionNodeParser28parseAdditiveValueExpressionEPNS_18CSSParserValueListEiPjPNS0_5ValueE","__ZN7WebCore12CSSCalcValue20createExpressionNodeEN3WTF10PassRefPtrINS_21CSSCalcExpressionNodeEEES4_NS_12CalcOperatorE","__ZNK7WebCore12CSSCalcValue11doubleValueEv","__ZN7WebCore12CSSCalcValue20createExpressionNodeERKNS_6LengthEPKNS_11RenderStyleE","__ZNK7WebCore22CSSCalcBinaryOperation4typeEv","_memset","__ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi26EEENS_6LengthEPKNS_11RenderStyleES5_db","__ZNK7WebCore21CSSCalcPrimitiveValue11doubleValueEv","_memcpy","__ZNK7WebCore22CSSCalcBinaryOperation13primitiveTypeEv","__ZNK7WebCore20CalcExpressionLengtheqERKNS_18CalcExpressionNodeE","__ZN7WebCore21CSSCalcExpressionNodeD2Ev","__ZNK7WebCore22CSSCalcBinaryOperation6isZeroEv","__ZN7WebCore22CSSCalcBinaryOperation12buildCssTextERKN3WTF6StringES4_NS_12CalcOperatorE","__ZN7WebCore20CalcExpressionNumberD0Ev","__ZNK7WebCore20CalcExpressionLength8evaluateEf","__ZN7WebCore27CSSCalcExpressionNodeParser14parseValueTermEPNS_18CSSParserValueListEiPjPNS0_5ValueE","__ZN7WebCore12CSSCalcValue6createENS_15CSSParserStringEPNS_18CSSParserValueListENS_30CalculationPermittedValueRangeE","__ZN7WebCore12CSSCalcValue6createEN3WTF10PassRefPtrINS_21CSSCalcExpressionNodeEEENS_30CalculationPermittedValueRangeE","__ZN7WebCore27CSSCalcExpressionNodeParser10parseValueEPNS_18CSSParserValueListEPjPNS0_5ValueE","__ZN7WebCore12CSSCalcValue20createExpressionNodeEPKNS_18CalcExpressionNodeEPKNS_11RenderStyleE","__ZNK7WebCore21CSSCalcPrimitiveValue4typeEv","__ZN7WebCore20CalcExpressionLengthD1Ev","__ZNK7WebCore22CSSCalcBinaryOperation15computeLengthPxEPKNS_11RenderStyleES3_db","__ZNK7WebCore12CSSCalcValue13customCSSTextEv","__ZNK7WebCore22CSSCalcBinaryOperation6equalsERKNS_21CSSCalcExpressionNodeE","__ZN7WebCore12CSSCalcValue20createExpressionNodeEN3WTF10PassRefPtrINS_17CSSPrimitiveValueEEEb","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZNK7WebCore22CSSCalcBinaryOperation13customCSSTextEv","__ZNK7WebCore21CSSCalcPrimitiveValue6equalsERKNS_21CSSCalcExpressionNodeE","__ZNK7WebCore21CSSCalcPrimitiveValue13primitiveTypeEv","__ZNK7WebCore21CSSCalcPrimitiveValue6isZeroEv","__ZNK7WebCore22CSSCalcBinaryOperation11doubleValueEv","__ZNK7WebCore21CSSCalcPrimitiveValue15computeLengthPxEPKNS_11RenderStyleES3_db"]

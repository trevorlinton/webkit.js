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
var __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_;
var __ZN7WebCore13QualifiedNameD1Ev;
var __ZN7WebCore13QualifiedName17QualifiedNameImplD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
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
  var __ZN3WTF8starAtomE=env.__ZN3WTF8starAtomE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZN7WebCore7anyNameE=(H_BASE+48)|0;
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
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 if (i9) {
  i10 = 1;
 } else {
  i10 = (HEAP32[i8 + 4 >> 2] | 0) + 1 | 0;
 }
 i11 = i3 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 i12 = (i3 | 0) == 0;
 if (i12) {
  i13 = 0;
 } else {
  i13 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i14 = _llvm_uadd_with_overflow_i32(i10 | 0, i13 | 0) | 0;
 i13 = i14;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i9) {
  i15 = 9;
 } else {
  if ((HEAP32[i8 + 16 >> 2] & 32 | 0) != 0) {
   i15 = 9;
  }
 }
 do {
  if ((i15 | 0) == 9) {
   if (!i12) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i13 | 0) == 0) {
     i8 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i8 | 0) == 0) {
      i15 = 28;
      break;
     }
     i9 = i8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
     i16 = i8;
     i17 = 0;
    } else {
     if (i13 >>> 0 > 4294967275 >>> 0) {
      i15 = 28;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i13 + 20 | 0);
     i8 = i6 | 0;
     i9 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = 0;
     if ((i9 | 0) == 0) {
      i15 = 28;
      break;
     }
     i8 = i9 + 20 | 0;
     HEAP32[i9 >> 2] = 2;
     HEAP32[i9 + 4 >> 2] = i13;
     HEAP32[i9 + 8 >> 2] = i8;
     HEAP32[i9 + 12 >> 2] = 0;
     HEAP32[i9 + 16 >> 2] = 32;
     i16 = i9;
     i17 = i8;
    }
   } while (0);
   if ((i15 | 0) == 28) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i8 = HEAP8[i2 + 4 | 0] | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i9 | 0) == 0) {
     i18 = 0;
    } else {
     i14 = HEAP32[i9 + 4 >> 2] | 0;
     i10 = HEAP32[i9 + 8 >> 2] | 0;
     if ((i14 | 0) == 0) {
      i18 = 0;
      break;
     } else {
      i19 = 0;
     }
     while (1) {
      HEAP8[i17 + i19 | 0] = HEAP8[i10 + i19 | 0] | 0;
      i19 = i19 + 1 | 0;
      if (i19 >>> 0 >= i14 >>> 0) {
       break;
      }
     }
     i14 = HEAP32[i7 >> 2] | 0;
     if ((i14 | 0) == 0) {
      i18 = 0;
      break;
     }
     i18 = HEAP32[i14 + 4 >> 2] | 0;
    }
   } while (0);
   HEAP8[i17 + i18 | 0] = i8;
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i20 = 1;
   } else {
    i20 = (HEAP32[i9 + 4 >> 2] | 0) + 1 | 0;
   }
   i9 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i14 = HEAP32[i9 + 4 >> 2] | 0;
     i10 = HEAP32[i9 + 8 >> 2] | 0;
     if ((i14 | 0) == 0) {
      break;
     } else {
      i21 = 0;
     }
     while (1) {
      HEAP8[i17 + (i21 + i20) | 0] = HEAP8[i10 + i21 | 0] | 0;
      i21 = i21 + 1 | 0;
      if (i21 >>> 0 >= i14 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i16;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i13 | 0) == 0) {
   i16 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i16 | 0) == 0) {
    i15 = 52;
    break;
   }
   i21 = i16 | 0;
   HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
   i22 = i16;
   i23 = 0;
  } else {
   if (i13 >>> 0 > 2147483637 >>> 0) {
    i15 = 52;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i13 << 1) + 20 | 0);
   i16 = i5 | 0;
   i21 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   if ((i21 | 0) == 0) {
    i15 = 52;
    break;
   }
   i16 = i21 + 20 | 0;
   HEAP32[i21 >> 2] = 2;
   HEAP32[i21 + 4 >> 2] = i13;
   HEAP32[i21 + 8 >> 2] = i16;
   HEAP32[i21 + 12 >> 2] = 0;
   HEAP32[i21 + 16 >> 2] = 0;
   i22 = i21;
   i23 = i16;
  }
 } while (0);
 if ((i15 | 0) == 52) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i15 = HEAP8[i2 + 4 | 0] | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i24 = 0;
  } else {
   i13 = HEAP32[i2 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
     i5 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     } else {
      i25 = 0;
     }
     while (1) {
      HEAP16[i23 + (i25 << 1) >> 1] = HEAP16[i5 + (i25 << 1) >> 1] | 0;
      i25 = i25 + 1 | 0;
      if (i25 >>> 0 >= i13 >>> 0) {
       break;
      }
     }
    } else {
     i5 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     } else {
      i26 = 0;
     }
     while (1) {
      HEAP16[i23 + (i26 << 1) >> 1] = HEAPU8[i5 + i26 | 0] | 0;
      i26 = i26 + 1 | 0;
      if (i26 >>> 0 >= i13 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i13 = HEAP32[i7 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i24 = 0;
    break;
   }
   i24 = HEAP32[i13 + 4 >> 2] | 0;
  }
 } while (0);
 HEAP16[i23 + (i24 << 1) >> 1] = i15 & 255;
 i15 = HEAP32[i7 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i27 = 1;
 } else {
  i27 = (HEAP32[i15 + 4 >> 2] | 0) + 1 | 0;
 }
 i15 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i11 = HEAP32[i15 + 4 >> 2] | 0;
   if ((HEAP32[i15 + 16 >> 2] & 32 | 0) == 0) {
    i7 = HEAP32[i15 + 8 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    } else {
     i28 = 0;
    }
    while (1) {
     HEAP16[i23 + (i28 + i27 << 1) >> 1] = HEAP16[i7 + (i28 << 1) >> 1] | 0;
     i28 = i28 + 1 | 0;
     if (i28 >>> 0 >= i11 >>> 0) {
      break;
     }
    }
   } else {
    i7 = HEAP32[i15 + 8 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    } else {
     i29 = 0;
    }
    while (1) {
     HEAP16[i23 + (i29 + i27 << 1) >> 1] = HEAPU8[i7 + i29 | 0] | 0;
     i29 = i29 + 1 | 0;
     if (i29 >>> 0 >= i11 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i22;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore13QualifiedName8toStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i6 | 0) == (HEAP32[__ZN3WTF8nullAtomE >> 2] | 0)) {
  i7 = HEAP32[i2 + 12 >> 2] | 0;
  HEAP32[i1 >> 2] = i7;
  if ((i7 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i2 = i7 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
  STACKTOP = i3;
  return;
 }
 do {
  if ((i6 | 0) == 0) {
   i8 = 0;
  } else {
   i2 = i6 | 0;
   i7 = HEAP32[i2 >> 2] | 0;
   i9 = i7 + 2 | 0;
   HEAP32[i2 >> 2] = i7 + 4;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    i8 = i6;
    break;
   } else {
    HEAP32[i2 >> 2] = i9;
    i8 = i6;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] | 0;
 i5 = (i6 | 0) == 0;
 if (!i5) {
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = (i8 | 0) == 0;
 if (!i9) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 if (!i5) {
  i2 = i6 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = i8;
 if (!i9) {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 HEAP8[i4 + 4 | 0] = 58;
 i7 = i4 + 8 | 0;
 HEAP32[i7 >> 2] = i6;
 do {
  if (!i5) {
   i10 = i6 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i11 + 2;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i10 >> 2] = i11;
    break;
   }
  }
 } while (0);
 do {
  if (!i9) {
   i11 = i8 | 0;
   i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i11 >> 2] = i10;
    break;
   }
  }
 } while (0);
 __ZNK3WTF12StringAppendINS0_INS_6StringEcEES1_EcvS1_Ev(i1, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i2 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i5) {
   i4 = i6 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if (i9) {
  STACKTOP = i3;
  return;
 }
 i9 = i8 | 0;
 i6 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i9 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplES4_NS_17IdentityExtractorENS1_17QualifiedNameHashENS1_23QualifiedNameHashTraitsES7_E6rehashEiPS4_(i1, i2, i3) {
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
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = i13 + 4 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i19 = HEAP32[i13 + 8 >> 2] | 0;
    i20 = (i19 & 65535) - 1640531527 | 0;
    i21 = i19 >>> 16 << 11 ^ i20 ^ i20 << 16;
    i20 = HEAP32[i13 + 12 >> 2] | 0;
    i19 = i21 + (i20 & 65535) + (i21 >>> 11) | 0;
    i21 = i19 ^ i20 >>> 16 << 11 ^ i19 << 16;
    i19 = HEAP32[i13 + 16 >> 2] | 0;
    i13 = i21 + (i19 & 65535) + (i21 >>> 11) | 0;
    i21 = i13 ^ i19 >>> 16 << 11 ^ i13 << 16;
    i13 = (i21 >>> 11) + i21 | 0;
    i21 = i13 << 3 ^ i13;
    i13 = (i21 >>> 5) + i21 | 0;
    i21 = i13 << 2 ^ i13;
    i13 = (i21 >>> 15) + i21 | 0;
    i21 = (i13 << 10 ^ i13) & 16777215;
    i13 = (i21 | 0) == 0 ? 8388608 : i21;
    HEAP32[i17 >> 2] = i13;
    i22 = i13;
   } else {
    i22 = i18;
   }
   i18 = (i22 >>> 23) + ~i22 | 0;
   i13 = i18 << 12 ^ i18;
   i18 = i13 >>> 7 ^ i13;
   i13 = i18 << 2 ^ i18;
   i18 = i13 >>> 20 ^ i13 | 1;
   i13 = i22;
   i17 = 0;
   i21 = 0;
   while (1) {
    i19 = i13 & i16;
    i23 = i14 + (i19 << 2) | 0;
    i20 = HEAP32[i23 >> 2] | 0;
    i24 = i20;
    if ((i24 | 0) == 0) {
     i25 = 7;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i23;
    } else {
     if ((i20 | 0) == (HEAP32[i2 >> 2] | 0)) {
      i27 = i23;
      i28 = i20;
      break;
     } else {
      i26 = i21;
     }
    }
    i20 = (i17 | 0) == 0 ? i18 : i17;
    i13 = i20 + i19 | 0;
    i17 = i20;
    i21 = i26;
   }
   if ((i25 | 0) == 7) {
    i25 = 0;
    i27 = (i21 | 0) != 0 ? i21 : i23;
    i28 = HEAP32[i2 >> 2] | 0;
   }
   HEAP32[i27 >> 2] = i28;
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i12;
  }
  i17 = i11 + 1 | 0;
  if ((i17 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i17;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore25QNameComponentsTranslator9translateERPNS_13QualifiedName17QualifiedNameImplERKNS_23QualifiedNameComponentsEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   HEAP32[i6 >> 2] = 0;
   i8 = 0;
  } else {
   if ((HEAP32[i7 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i6, i7);
    i8 = HEAP32[i6 >> 2] | 0;
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    i9 = i7 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i8 = i7;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   HEAP32[i5 >> 2] = 0;
   i10 = 0;
  } else {
   if ((HEAP32[i7 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i7);
    i10 = HEAP32[i5 >> 2] | 0;
    break;
   } else {
    HEAP32[i5 >> 2] = i7;
    i6 = i7 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
    i10 = i7;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   HEAP32[i4 >> 2] = 0;
   i11 = 0;
  } else {
   if ((HEAP32[i7 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i7);
    i11 = HEAP32[i4 >> 2] | 0;
    break;
   } else {
    HEAP32[i4 >> 2] = i7;
    i2 = i7 | 0;
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
    i11 = i7;
    break;
   }
  }
 } while (0);
 i7 = __ZN3WTF10fastMallocEj(24) | 0;
 i4 = i7;
 HEAP32[i7 >> 2] = 1;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP32[i7 + 8 >> 2] = i8;
 i2 = (i8 | 0) == 0;
 if (!i2) {
  i5 = i8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 HEAP32[i7 + 12 >> 2] = i10;
 i5 = (i10 | 0) == 0;
 if (!i5) {
  i6 = i10 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 HEAP32[i7 + 16 >> 2] = i11;
 do {
  if ((i11 | 0) == 0) {
   HEAP32[i7 + 20 >> 2] = 0;
   HEAP32[i1 >> 2] = i4;
  } else {
   i6 = i11 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   HEAP32[i7 + 20 >> 2] = 0;
   HEAP32[i1 >> 2] = i4;
   i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i6 >> 2] = i9;
    break;
   }
  }
 } while (0);
 do {
  if (!i5) {
   i11 = i10 | 0;
   i4 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i11 >> 2] = i4;
    break;
   }
  }
 } while (0);
 if (i2) {
  STACKTOP = i3;
  return;
 }
 i2 = i8 | 0;
 i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i10;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplES4_NS_17IdentityExtractorENS1_17QualifiedNameHashENS1_23QualifiedNameHashTraitsES7_E20fullLookupForWritingINS_24HashSetTranslatorAdapterINS1_25QNameComponentsTranslatorEEENS1_23QualifiedNameComponentsEEENSt3__14pairINSF_IPS4_bEEjEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i3;
 i8 = (HEAPU16[i3 >> 1] | 0) - 1640531527 | 0;
 i9 = (HEAPU16[i2 + 2 >> 1] | 0) << 11 ^ i8 ^ i8 << 16;
 i8 = i3 + 4 | 0;
 i10 = i9 + (HEAPU16[i8 >> 1] | 0) + (i9 >>> 11) | 0;
 i9 = i10 ^ (HEAPU16[i2 + 6 >> 1] | 0) << 11 ^ i10 << 16;
 i10 = i3 + 8 | 0;
 i11 = i9 + (HEAPU16[i10 >> 1] | 0) + (i9 >>> 11) | 0;
 i9 = i11 ^ (HEAPU16[i2 + 10 >> 1] | 0) << 11 ^ i11 << 16;
 i11 = (i9 >>> 11) + i9 | 0;
 i9 = i11 << 3 ^ i11;
 i11 = (i9 >>> 5) + i9 | 0;
 i9 = i11 << 2 ^ i11;
 i11 = (i9 >>> 15) + i9 | 0;
 i9 = (i11 << 10 ^ i11) & 16777215;
 i11 = (i9 | 0) == 0 ? 8388608 : i9;
 i9 = i3 | 0;
 i3 = (i11 >>> 23) + ~i11 | 0;
 i2 = i3 << 12 ^ i3;
 i3 = i2 >>> 7 ^ i2;
 i2 = i3 << 2 ^ i3;
 i3 = i2 >>> 20 ^ i2 | 1;
 i2 = 0;
 i12 = 0;
 i13 = i11;
 L1 : while (1) {
  i14 = i13 & i7;
  i15 = i6 + (i14 << 2) | 0;
  i16 = HEAP32[i15 >> 2] | 0;
  i17 = i16;
  do {
   if ((i17 | 0) == 0) {
    i18 = 3;
    break L1;
   } else if ((i17 | 0) == (-1 | 0)) {
    i19 = i15;
   } else {
    if ((HEAP32[i9 >> 2] | 0) != (HEAP32[i16 + 8 >> 2] | 0)) {
     i19 = i12;
     break;
    }
    if ((HEAP32[i8 >> 2] | 0) != (HEAP32[i16 + 12 >> 2] | 0)) {
     i19 = i12;
     break;
    }
    if ((HEAP32[i10 >> 2] | 0) == (HEAP32[i16 + 16 >> 2] | 0)) {
     i18 = 7;
     break L1;
    } else {
     i19 = i12;
    }
   }
  } while (0);
  i16 = (i2 | 0) == 0 ? i3 : i2;
  i2 = i16;
  i12 = i19;
  i13 = i16 + i14 | 0;
 }
 if ((i18 | 0) == 3) {
  i13 = i5 | 0;
  _llvm_lifetime_start(3, 0, i13 | 0);
  HEAP32[i1 >> 2] = (i12 | 0) != 0 ? i12 : i15;
  HEAP8[i1 + 4 | 0] = 0;
  i12 = i1 + 5 | 0;
  HEAP8[i12] = HEAP8[i13] | 0;
  HEAP8[i12 + 1 | 0] = HEAP8[i13 + 1 | 0] | 0;
  HEAP8[i12 + 2 | 0] = HEAP8[i13 + 2 | 0] | 0;
  HEAP32[i1 + 8 >> 2] = i11;
  _llvm_lifetime_end(3, 0, i13 | 0);
  STACKTOP = i4;
  return;
 } else if ((i18 | 0) == 7) {
  i18 = i5 | 0;
  _llvm_lifetime_start(3, 0, i18 | 0);
  HEAP32[i1 >> 2] = i15;
  HEAP8[i1 + 4 | 0] = 1;
  i15 = i1 + 5 | 0;
  HEAP8[i15] = HEAP8[i18] | 0;
  HEAP8[i15 + 1 | 0] = HEAP8[i18 + 1 | 0] | 0;
  HEAP8[i15 + 2 | 0] = HEAP8[i18 + 2 | 0] | 0;
  HEAP32[i1 + 8 >> 2] = i11;
  _llvm_lifetime_end(3, 0, i18 | 0);
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplES4_NS_17IdentityExtractorENS1_17QualifiedNameHashENS1_23QualifiedNameHashTraitsES7_E18addPassingHashCodeINS_24HashSetTranslatorAdapterINS1_25QNameComponentsTranslatorEEERKNS1_23QualifiedNameComponentsESF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S6_S7_S7_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i2 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 2048;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplES4_NS_17IdentityExtractorENS1_17QualifiedNameHashENS1_23QualifiedNameHashTraitsES7_E6rehashEiPS4_(i2, i8, 0) | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplES4_NS_17IdentityExtractorENS1_17QualifiedNameHashENS1_23QualifiedNameHashTraitsES7_E20fullLookupForWritingINS_24HashSetTranslatorAdapterINS1_25QNameComponentsTranslatorEEENS1_23QualifiedNameComponentsEEENSt3__14pairINSF_IPS4_bEEjEERKT0_(i5, i2, i3);
 i8 = HEAP32[i5 >> 2] | 0;
 if ((HEAP8[i5 + 4 | 0] & 1) != 0) {
  i5 = (HEAP32[i6 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i9 = i1;
  HEAP32[i9 >> 2] = i8;
  HEAP32[i9 + 4 >> 2] = i5;
  HEAP8[i1 + 8 | 0] = 0;
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i8 >> 2] | 0) == -1) {
  HEAP32[i8 >> 2] = 0;
  i5 = i2 + 16 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - 1;
  i10 = i5;
 } else {
  i10 = i2 + 16 | 0;
 }
 __ZN7WebCore25QNameComponentsTranslator9translateERPNS_13QualifiedName17QualifiedNameImplERKNS_23QualifiedNameComponentsEj(i8, i3, 0);
 i3 = i2 + 12 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i5;
 i3 = i2 + 4 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i10 >> 2] | 0) + i5 << 1 | 0) < (i9 | 0)) {
  i11 = i8;
  i12 = i9;
 } else {
  if ((i9 | 0) == 0) {
   i13 = 2048;
  } else {
   i10 = i9 << 1;
   i13 = (i5 * 6 & -1 | 0) < (i10 | 0) ? i9 : i10;
  }
  i10 = __ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplES4_NS_17IdentityExtractorENS1_17QualifiedNameHashENS1_23QualifiedNameHashTraitsES7_E6rehashEiPS4_(i2, i13, i8) | 0;
  i11 = i10;
  i12 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i6 >> 2] | 0) + (i12 << 2) | 0;
 i12 = i1;
 HEAP32[i12 >> 2] = i11;
 HEAP32[i12 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore13QualifiedName17QualifiedNameImplD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 if (HEAP8[H_BASE + 16 | 0] | 0) {
  i5 = HEAP32[H_BASE + 32 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(20) | 0;
  i7 = i6;
  _memset(i6 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 32 >> 2] = i7;
  HEAP8[H_BASE + 16 | 0] = 1;
  i5 = i7;
 }
 HEAP32[i4 >> 2] = i1;
 i7 = i5 | 0;
 __ZNK3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplES4_NS_17IdentityExtractorENS1_17QualifiedNameHashENS1_23QualifiedNameHashTraitsES7_E4findERKS4_(i3, i7, i4);
 i4 = HEAP32[i3 >> 2] | 0;
 i3 = i5 + 4 | 0;
 do {
  if ((i4 | 0) != ((HEAP32[i5 >> 2] | 0) + (HEAP32[i3 >> 2] << 2) | 0)) {
   HEAP32[i4 >> 2] = -1;
   i6 = i5 + 16 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   i6 = i5 + 12 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i8;
   i6 = HEAP32[i3 >> 2] | 0;
   if (!((i8 * 6 & -1 | 0) < (i6 | 0) & (i6 | 0) > 2048)) {
    break;
   }
   __ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplES4_NS_17IdentityExtractorENS1_17QualifiedNameHashENS1_23QualifiedNameHashTraitsES7_E6rehashEiPS4_(i7, (i6 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 i7 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i3 = i7 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i3 = i7 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i7 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore13QualifiedName17QualifiedNameImplD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 if (HEAP8[H_BASE + 16 | 0] | 0) {
  i5 = HEAP32[H_BASE + 32 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(20) | 0;
  i7 = i6;
  _memset(i6 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 32 >> 2] = i7;
  HEAP8[H_BASE + 16 | 0] = 1;
  i5 = i7;
 }
 HEAP32[i4 >> 2] = i1;
 i7 = i5 | 0;
 __ZNK3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplES4_NS_17IdentityExtractorENS1_17QualifiedNameHashENS1_23QualifiedNameHashTraitsES7_E4findERKS4_(i3, i7, i4);
 i4 = HEAP32[i3 >> 2] | 0;
 i3 = i5 + 4 | 0;
 do {
  if ((i4 | 0) != ((HEAP32[i5 >> 2] | 0) + (HEAP32[i3 >> 2] << 2) | 0)) {
   HEAP32[i4 >> 2] = -1;
   i6 = i5 + 16 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   i6 = i5 + 12 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i8;
   i6 = HEAP32[i3 >> 2] | 0;
   if (!((i8 * 6 & -1 | 0) < (i6 | 0) & (i6 | 0) > 2048)) {
    break;
   }
   __ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplES4_NS_17IdentityExtractorENS1_17QualifiedNameHashENS1_23QualifiedNameHashTraitsES7_E6rehashEiPS4_(i7, (i6 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 i7 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i3 = i7 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i3 = i7 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i7 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
}
function __ZNK3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplES4_NS_17IdentityExtractorENS1_17QualifiedNameHashENS1_23QualifiedNameHashTraitsES7_E4findERKS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] << 2 | 0;
  HEAP32[i1 >> 2] = i6;
  HEAP32[i1 + 4 >> 2] = i6;
  return;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i8 = i7 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = HEAP32[i7 + 8 >> 2] | 0;
  i11 = (i10 & 65535) - 1640531527 | 0;
  i12 = i10 >>> 16 << 11 ^ i11 ^ i11 << 16;
  i11 = HEAP32[i7 + 12 >> 2] | 0;
  i10 = i12 + (i11 & 65535) + (i12 >>> 11) | 0;
  i12 = i10 ^ i11 >>> 16 << 11 ^ i10 << 16;
  i10 = HEAP32[i7 + 16 >> 2] | 0;
  i7 = i12 + (i10 & 65535) + (i12 >>> 11) | 0;
  i12 = i7 ^ i10 >>> 16 << 11 ^ i7 << 16;
  i7 = (i12 >>> 11) + i12 | 0;
  i12 = i7 << 3 ^ i7;
  i7 = (i12 >>> 5) + i12 | 0;
  i12 = i7 << 2 ^ i7;
  i7 = (i12 >>> 15) + i12 | 0;
  i12 = (i7 << 10 ^ i7) & 16777215;
  i7 = (i12 | 0) == 0 ? 8388608 : i12;
  HEAP32[i8 >> 2] = i7;
  i13 = i7;
 } else {
  i13 = i9;
 }
 i9 = (i13 >>> 23) + ~i13 | 0;
 i7 = i9 << 12 ^ i9;
 i9 = i7 >>> 7 ^ i7;
 i7 = i9 << 2 ^ i9;
 i9 = i7 >>> 20 ^ i7 | 1;
 i7 = i13;
 i13 = 0;
 while (1) {
  i8 = i7 & i6;
  i14 = i5 + (i8 << 2) | 0;
  i12 = HEAP32[i14 >> 2] | 0;
  i10 = i12;
  if ((i10 | 0) == 0) {
   i15 = 7;
   break;
  } else if ((i10 | 0) != (-1 | 0)) {
   if ((i12 | 0) == (HEAP32[i3 >> 2] | 0)) {
    i15 = 10;
    break;
   }
  }
  i12 = (i13 | 0) == 0 ? i9 : i13;
  i7 = i12 + i8 | 0;
  i13 = i12;
 }
 do {
  if ((i15 | 0) == 7) {
   i16 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
   i17 = i1 | 0;
  } else if ((i15 | 0) == 10) {
   i13 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
   i7 = i1 | 0;
   if ((i14 | 0) == 0) {
    i16 = i13;
    i17 = i7;
    break;
   }
   HEAP32[i7 >> 2] = i14;
   HEAP32[i1 + 4 >> 2] = i13;
   return;
  }
 } while (0);
 HEAP32[i17 >> 2] = i16;
 HEAP32[i1 + 4 >> 2] = i16;
 return;
}
function __ZN7WebCore19createQualifiedNameEPvPN3WTF10StringImplERKNS1_12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 do {
  if ((i2 | 0) == 0) {
   HEAP32[i7 >> 2] = 0;
   i8 = 0;
  } else {
   if ((HEAP32[i2 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i7, i2);
    i8 = HEAP32[i7 >> 2] | 0;
    break;
   } else {
    HEAP32[i7 >> 2] = i2;
    i9 = i2 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i8 = i2;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 HEAP32[i5 + 4 >> 2] = i8;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i10 = i2;
 } else {
  i10 = HEAP32[((HEAP32[i3 + 4 >> 2] | 0) == 0 ? __ZN3WTF8nullAtomE | 0 : i7) >> 2] | 0;
 }
 HEAP32[i5 + 8 >> 2] = i10;
 if (HEAP8[H_BASE + 16 | 0] | 0) {
  i11 = HEAP32[H_BASE + 32 >> 2] | 0;
 } else {
  i10 = __ZN3WTF10fastMallocEj(20) | 0;
  i7 = i10;
  _memset(i10 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 32 >> 2] = i7;
  HEAP8[H_BASE + 16 | 0] = 1;
  i11 = i7;
 }
 __ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplES4_NS_17IdentityExtractorENS1_17QualifiedNameHashENS1_23QualifiedNameHashTraitsES7_E18addPassingHashCodeINS_24HashSetTranslatorAdapterINS1_25QNameComponentsTranslatorEEERKNS1_23QualifiedNameComponentsESF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S6_S7_S7_EEEEOT0_OT1_(i6, i11 | 0, i5, i5);
 i5 = HEAP32[HEAP32[i6 >> 2] >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i8 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i6 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore19createQualifiedNameEPvPN3WTF10StringImplE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 do {
  if ((i2 | 0) == 0) {
   HEAP32[i6 >> 2] = 0;
   i7 = 0;
  } else {
   if ((HEAP32[i2 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i6, i2);
    i7 = HEAP32[i6 >> 2] | 0;
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    i8 = i2 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
    i7 = i2;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i4 + 4 >> 2] = i7;
 HEAP32[i4 + 8 >> 2] = i2;
 if (HEAP8[H_BASE + 16 | 0] | 0) {
  i9 = HEAP32[H_BASE + 32 >> 2] | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(20) | 0;
  i6 = i2;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 32 >> 2] = i6;
  HEAP8[H_BASE + 16 | 0] = 1;
  i9 = i6;
 }
 __ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplES4_NS_17IdentityExtractorENS1_17QualifiedNameHashENS1_23QualifiedNameHashTraitsES7_E18addPassingHashCodeINS_24HashSetTranslatorAdapterINS1_25QNameComponentsTranslatorEEERKNS1_23QualifiedNameComponentsESF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S6_S7_S7_EEEEOT0_OT1_(i5, i9 | 0, i4, i4);
 i4 = HEAP32[HEAP32[i5 >> 2] >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i7 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore13QualifiedName14localNameUpperEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i1 + 20 | 0;
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  i7 = HEAP32[i5 >> 2] | 0;
  i8 = i7 + 20 | 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 __ZN3WTF10StringImpl5upperEv(i4, HEAP32[i1 + 12 >> 2] | 0);
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   HEAP32[i3 >> 2] = 0;
   i9 = 0;
  } else {
   if ((HEAP32[i1 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i1);
    i10 = i1 | 0;
    i11 = HEAP32[i3 >> 2] | 0;
   } else {
    i4 = i3 | 0;
    HEAP32[i4 >> 2] = i1;
    i12 = i1 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
    i10 = i12;
    i11 = HEAP32[i4 >> 2] | 0;
   }
   i4 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    i9 = i11;
    break;
   } else {
    HEAP32[i10 >> 2] = i4;
    i9 = i11;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 if ((i11 | 0) == 0) {
  i7 = HEAP32[i5 >> 2] | 0;
  i8 = i7 + 20 | 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 i9 = i11 | 0;
 i6 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i11);
  i7 = HEAP32[i5 >> 2] | 0;
  i8 = i7 + 20 | 0;
  STACKTOP = i2;
  return i8 | 0;
 } else {
  HEAP32[i9 >> 2] = i6;
  i7 = HEAP32[i5 >> 2] | 0;
  i8 = i7 + 20 | 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore13QualifiedName4initEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i2 = i1 | 0;
 i3 = i1 + 16 | 0;
 if (HEAP8[H_BASE + 8 | 0] | 0) {
  STACKTOP = i1;
  return;
 }
 __ZN3WTF12AtomicString4initEv();
 i4 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 i5 = HEAP32[__ZN3WTF8starAtomE >> 2] | 0;
 HEAP32[i2 + 4 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i6 = i4;
 } else {
  i6 = (HEAP32[i5 + 4 >> 2] | 0) == 0 ? HEAP32[__ZN3WTF8nullAtomE >> 2] | 0 : HEAP32[__ZN3WTF8starAtomE >> 2] | 0;
 }
 HEAP32[i2 + 8 >> 2] = i6;
 if (HEAP8[H_BASE + 16 | 0] | 0) {
  i7 = HEAP32[H_BASE + 32 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(20) | 0;
  i5 = i6;
  _memset(i6 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 32 >> 2] = i5;
  HEAP8[H_BASE + 16 | 0] = 1;
  i7 = i5;
 }
 __ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplES4_NS_17IdentityExtractorENS1_17QualifiedNameHashENS1_23QualifiedNameHashTraitsES7_E18addPassingHashCodeINS_24HashSetTranslatorAdapterINS1_25QNameComponentsTranslatorEEERKNS1_23QualifiedNameComponentsESF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S6_S7_S7_EEEEOT0_OT1_(i3, i7 | 0, i2, i2);
 i2 = HEAP32[HEAP32[i3 >> 2] >> 2] | 0;
 HEAP32[H_BASE + 48 >> 2] = i2;
 if ((HEAP8[i3 + 8 | 0] & 1) == 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP8[H_BASE + 8 | 0] = 1;
 STACKTOP = i1;
 return;
}
function __ZNK3WTF12StringAppendINS0_INS_6StringEcEES1_EcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP8[i5 + 4 | 0] = HEAP8[i2 + 4 | 0] | 0;
 i9 = i6 | 0;
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore13QualifiedNameC2ERKN3WTF12AtomicStringES4_S4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i3 >> 2];
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i8 = __ZN3WTF8nullAtomE | 0;
 } else {
  i8 = (HEAP32[i4 + 4 >> 2] | 0) == 0 ? __ZN3WTF8nullAtomE | 0 : i3;
 }
 HEAP32[i6 + 8 >> 2] = HEAP32[i8 >> 2];
 if (HEAP8[H_BASE + 16 | 0] | 0) {
  i9 = HEAP32[H_BASE + 32 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(20) | 0;
  i3 = i8;
  _memset(i8 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 32 >> 2] = i3;
  HEAP8[H_BASE + 16 | 0] = 1;
  i9 = i3;
 }
 __ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplES4_NS_17IdentityExtractorENS1_17QualifiedNameHashENS1_23QualifiedNameHashTraitsES7_E18addPassingHashCodeINS_24HashSetTranslatorAdapterINS1_25QNameComponentsTranslatorEEERKNS1_23QualifiedNameComponentsESF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S6_S7_S7_EEEEOT0_OT1_(i7, i9 | 0, i6, i6);
 i6 = HEAP32[HEAP32[i7 >> 2] >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((HEAP8[i7 + 8 | 0] & 1) != 0) {
  STACKTOP = i5;
  return;
 }
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i3 >> 2];
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i8 = __ZN3WTF8nullAtomE | 0;
 } else {
  i8 = (HEAP32[i4 + 4 >> 2] | 0) == 0 ? __ZN3WTF8nullAtomE | 0 : i3;
 }
 HEAP32[i6 + 8 >> 2] = HEAP32[i8 >> 2];
 if (HEAP8[H_BASE + 16 | 0] | 0) {
  i9 = HEAP32[H_BASE + 32 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(20) | 0;
  i3 = i8;
  _memset(i8 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 32 >> 2] = i3;
  HEAP8[H_BASE + 16 | 0] = 1;
  i9 = i3;
 }
 __ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplES4_NS_17IdentityExtractorENS1_17QualifiedNameHashENS1_23QualifiedNameHashTraitsES7_E18addPassingHashCodeINS_24HashSetTranslatorAdapterINS1_25QNameComponentsTranslatorEEERKNS1_23QualifiedNameComponentsESF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S6_S7_S7_EEEEOT0_OT1_(i7, i9 | 0, i6, i6);
 i6 = HEAP32[HEAP32[i7 >> 2] >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((HEAP8[i7 + 8 | 0] & 1) != 0) {
  STACKTOP = i5;
  return;
 }
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9nullQNameEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i2 = i1 | 0;
 i3 = i1 + 16 | 0;
 if (HEAP8[H_BASE + 24 | 0] | 0) {
  i4 = HEAP32[H_BASE + 40 >> 2] | 0;
  STACKTOP = i1;
  return i4 | 0;
 }
 i5 = __ZN3WTF10fastMallocEj(4) | 0;
 i6 = i5;
 i7 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
 HEAP32[i2 >> 2] = i7;
 HEAP32[i2 + 4 >> 2] = i7;
 HEAP32[i2 + 8 >> 2] = i7;
 if (HEAP8[H_BASE + 16 | 0] | 0) {
  i8 = HEAP32[H_BASE + 32 >> 2] | 0;
 } else {
  i7 = __ZN3WTF10fastMallocEj(20) | 0;
  i9 = i7;
  _memset(i7 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 32 >> 2] = i9;
  HEAP8[H_BASE + 16 | 0] = 1;
  i8 = i9;
 }
 __ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplES4_NS_17IdentityExtractorENS1_17QualifiedNameHashENS1_23QualifiedNameHashTraitsES7_E18addPassingHashCodeINS_24HashSetTranslatorAdapterINS1_25QNameComponentsTranslatorEEERKNS1_23QualifiedNameComponentsESF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S6_S7_S7_EEEEOT0_OT1_(i3, i8 | 0, i2, i2);
 i2 = HEAP32[HEAP32[i3 >> 2] >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 if ((HEAP8[i3 + 8 | 0] & 1) == 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[H_BASE + 40 >> 2] = i6;
 HEAP8[H_BASE + 24 | 0] = 1;
 i4 = i6;
 STACKTOP = i1;
 return i4 | 0;
}
function __ZNK7WebCore13QualifiedName17QualifiedNameImpl11computeHashEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i3 = (i2 & 65535) - 1640531527 | 0;
 i4 = i2 >>> 16 << 11 ^ i3 ^ i3 << 16;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 i2 = i4 + (i3 & 65535) + (i4 >>> 11) | 0;
 i4 = i2 ^ i3 >>> 16 << 11 ^ i2 << 16;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 i1 = i4 + (i2 & 65535) + (i4 >>> 11) | 0;
 i4 = i1 ^ i2 >>> 16 << 11 ^ i1 << 16;
 i1 = (i4 >>> 11) + i4 | 0;
 i4 = i1 << 3 ^ i1;
 i1 = (i4 >>> 5) + i4 | 0;
 i4 = i1 << 2 ^ i1;
 i1 = (i4 >>> 15) + i4 | 0;
 i4 = (i1 << 10 ^ i1) & 16777215;
 return ((i4 | 0) == 0 ? 8388608 : i4) | 0;
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
function __ZN7WebCore13QualifiedName5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore13QualifiedName17QualifiedNameImplD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore13QualifiedNameD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore13QualifiedName17QualifiedNameImplD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore13QualifiedNameD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore13QualifiedName17QualifiedNameImplD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
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
function b4(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(4);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
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
function b2() {
 abort(2);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore13QualifiedNameD2Ev,b0,__ZN7WebCore13QualifiedName17QualifiedNameImplD2Ev,b0,b0,b0];
  var FUNCTION_TABLE_ii = [b1,b1];
  var FUNCTION_TABLE_v = [b2,b2];
  var FUNCTION_TABLE_iii = [b3,b3];
  var FUNCTION_TABLE_viiii = [b4,b4,__ZN7WebCore13QualifiedNameC2ERKN3WTF12AtomicStringES4_S4_,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN3WTF8starAtomE": __ZN3WTF8starAtomE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK3WTF12StringAppendINS0_INS_6StringEcEES1_EcvS1_Ev","_strlen","__ZNK7WebCore13QualifiedName17QualifiedNameImpl11computeHashEv","__ZNK7WebCore13QualifiedName8toStringEv","__ZN7WebCore19createQualifiedNameEPvPN3WTF10StringImplE","__ZN7WebCore25QNameComponentsTranslator9translateERPNS_13QualifiedName17QualifiedNameImplERKNS_23QualifiedNameComponentsEj","__ZN7WebCore9nullQNameEv","__ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore13QualifiedNameD2Ev","__ZN7WebCore13QualifiedName4initEv","_memset","__ZN7WebCore19createQualifiedNameEPvPN3WTF10StringImplERKNS1_12AtomicStringE","__ZNK7WebCore13QualifiedName14localNameUpperEv","_memcpy","__ZNK3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplES4_NS_17IdentityExtractorENS1_17QualifiedNameHashENS1_23QualifiedNameHashTraitsES7_E4findERKS4_","__ZN7WebCore13QualifiedName5derefEv","__ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplES4_NS_17IdentityExtractorENS1_17QualifiedNameHashENS1_23QualifiedNameHashTraitsES7_E6rehashEiPS4_","__ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplES4_NS_17IdentityExtractorENS1_17QualifiedNameHashENS1_23QualifiedNameHashTraitsES7_E20fullLookupForWritingINS_24HashSetTranslatorAdapterINS1_25QNameComponentsTranslatorEEENS1_23QualifiedNameComponentsEEENSt3__14pairINSF_IPS4_bEEjEERKT0_","__ZN7WebCore13QualifiedName17QualifiedNameImplD2Ev","__ZN7WebCore13QualifiedNameC2ERKN3WTF12AtomicStringES4_S4_","__ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplES4_NS_17IdentityExtractorENS1_17QualifiedNameHashENS1_23QualifiedNameHashTraitsES7_E18addPassingHashCodeINS_24HashSetTranslatorAdapterINS1_25QNameComponentsTranslatorEEERKNS1_23QualifiedNameComponentsESF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S6_S7_S7_EEEEOT0_OT1_"]

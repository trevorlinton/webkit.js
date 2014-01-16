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
H_BASE = parentModule["_malloc"](56 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 56;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([58,47,47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCoreL19originStringFromURLERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 48 | 0;
 i7 = i3 + 64 | 0;
 i8 = i3 + 72 | 0;
 i9 = i3 + 80 | 0;
 i10 = i3 + 88 | 0;
 i11 = i3 + 104 | 0;
 i12 = i3 + 112 | 0;
 if ((__ZNK7WebCore3URL4portEv(i2) | 0) << 16 >> 16 == 0) {
  __ZNK7WebCore3URL8protocolEv(i11, i2);
  i13 = i11 | 0;
  i11 = HEAP32[i13 >> 2] | 0;
  if ((i11 | 0) == 0) {
   __ZNK7WebCore3URL4hostEv(i12, i2);
   i14 = 0;
   i15 = 1;
  } else {
   i16 = i11 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   i18 = i17 + 2 | 0;
   HEAP32[i16 >> 2] = i17 + 4;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    __ZNK7WebCore3URL4hostEv(i12, i2);
   } else {
    HEAP32[i16 >> 2] = i18;
    __ZNK7WebCore3URL4hostEv(i12, i2);
   }
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i14 = i11;
   i15 = 0;
  }
  i11 = i12 | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  i16 = (i12 | 0) == 0;
  if (!i16) {
   i18 = i12 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
  }
  if (!i15) {
   i18 = i14 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
  }
  do {
   if (!i16) {
    i18 = i12 | 0;
    i17 = HEAP32[i18 >> 2] | 0;
    HEAP32[i18 >> 2] = i17 + 2;
    if ((i17 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i12);
     break;
    } else {
     HEAP32[i18 >> 2] = i17;
     break;
    }
   }
  } while (0);
  if (!i15) {
   i17 = i14 | 0;
   i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    i19 = HEAP32[i17 >> 2] | 0;
   } else {
    HEAP32[i17 >> 2] = i18;
    i19 = i18;
   }
   HEAP32[i17 >> 2] = i19 + 2;
  }
  if (!i16) {
   i19 = i12 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
  }
  i19 = i10 | 0;
  HEAP32[i19 >> 2] = i14;
  if (!i15) {
   i17 = i14 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
  }
  HEAP32[i10 + 4 >> 2] = H_BASE + 8;
  i17 = i10 + 8 | 0;
  HEAP32[i17 >> 2] = i12;
  do {
   if (i16) {
    HEAP8[i10 + 12 | 0] = 47;
   } else {
    i18 = i12 | 0;
    i20 = HEAP32[i18 >> 2] | 0;
    HEAP32[i18 >> 2] = i20 + 2;
    HEAP8[i10 + 12 | 0] = 47;
    if ((i20 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i12);
     break;
    } else {
     HEAP32[i18 >> 2] = i20;
     break;
    }
   }
  } while (0);
  do {
   if (!i15) {
    i20 = i14 | 0;
    i18 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
    if ((i18 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i14);
     break;
    } else {
     HEAP32[i20 >> 2] = i18;
     break;
    }
   }
  } while (0);
  __ZNK3WTF12StringAppendINS0_INS0_INS_6StringEPKcEES1_EEcEcvS1_Ev(i1, i10);
  i10 = HEAP32[i17 >> 2] | 0;
  do {
   if ((i10 | 0) != 0) {
    i17 = i10 | 0;
    i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
    if ((i18 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i10);
     break;
    } else {
     HEAP32[i17 >> 2] = i18;
     break;
    }
   }
  } while (0);
  i10 = HEAP32[i19 >> 2] | 0;
  do {
   if ((i10 | 0) != 0) {
    i19 = i10 | 0;
    i18 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
    if ((i18 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i10);
     break;
    } else {
     HEAP32[i19 >> 2] = i18;
     break;
    }
   }
  } while (0);
  do {
   if (!i16) {
    i10 = i12 | 0;
    i18 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i18 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i12);
     break;
    } else {
     HEAP32[i10 >> 2] = i18;
     break;
    }
   }
  } while (0);
  do {
   if (!i15) {
    i12 = i14 | 0;
    i16 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i16 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i14);
     break;
    } else {
     HEAP32[i12 >> 2] = i16;
     break;
    }
   }
  } while (0);
  i16 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i16 | 0) != 0) {
    i11 = i16 | 0;
    i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i12 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i16);
     break;
    } else {
     HEAP32[i11 >> 2] = i12;
     break;
    }
   }
  } while (0);
  do {
   if (!i15) {
    i16 = i14 | 0;
    i12 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
    if ((i12 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i14);
     break;
    } else {
     HEAP32[i16 >> 2] = i12;
     break;
    }
   }
  } while (0);
  i14 = HEAP32[i13 >> 2] | 0;
  if ((i14 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i13 = i14 | 0;
  i15 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
  if ((i15 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i14);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i13 >> 2] = i15;
   STACKTOP = i3;
   return;
  }
 }
 __ZNK7WebCore3URL8protocolEv(i7, i2);
 i15 = i7 | 0;
 i7 = HEAP32[i15 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZNK7WebCore3URL4hostEv(i8, i2);
  i21 = 0;
  i22 = 1;
 } else {
  i13 = i7 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i12 = i14 + 2 | 0;
  HEAP32[i13 >> 2] = i14 + 4;
  if ((i12 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i7);
   __ZNK7WebCore3URL4hostEv(i8, i2);
  } else {
   HEAP32[i13 >> 2] = i12;
   __ZNK7WebCore3URL4hostEv(i8, i2);
  }
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
  i21 = i7;
  i22 = 0;
 }
 i7 = i8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i13 = (i8 | 0) == 0;
 if (!i13) {
  i12 = i8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 if (!i22) {
  i12 = i21 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 do {
  if (!i13) {
   i12 = i8 | 0;
   i14 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i14 + 2;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i12 >> 2] = i14;
    break;
   }
  }
 } while (0);
 if (!i22) {
  i14 = i21 | 0;
  i12 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
  if ((i12 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i21);
   i23 = HEAP32[i14 >> 2] | 0;
  } else {
   HEAP32[i14 >> 2] = i12;
   i23 = i12;
  }
  HEAP32[i14 >> 2] = i23 + 2;
 }
 if (!i13) {
  i23 = i8 | 0;
  HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
 }
 i23 = i6 | 0;
 HEAP32[i23 >> 2] = i21;
 if (!i22) {
  i14 = i21 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
 }
 HEAP32[i6 + 4 >> 2] = H_BASE + 8;
 i14 = i6 + 8 | 0;
 HEAP32[i14 >> 2] = i8;
 do {
  if (i13) {
   HEAP8[i6 + 12 | 0] = 58;
  } else {
   i12 = i8 | 0;
   i16 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i16 + 2;
   HEAP8[i6 + 12 | 0] = 58;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i12 >> 2] = i16;
    break;
   }
  }
 } while (0);
 do {
  if (!i22) {
   i16 = i21 | 0;
   i12 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i16 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN3WTF6String6numberEi(i9, (__ZNK7WebCore3URL4portEv(i2) | 0) & 65535);
 __ZN3WTFplINS_12StringAppendINS1_INS_6StringEPKcEES2_EEcS2_EENS1_INS1_IT_T0_EET1_EERKS9_SA_(i5, i6, i9);
 __ZN3WTFplINS_12StringAppendINS1_INS1_INS_6StringEPKcEES2_EEcEES2_cEENS1_INS1_IT_T0_EET1_EERKSA_SB_(i4, i5, 47);
 __ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS_6StringEPKcEES1_EEcEES1_EEcEcvS1_Ev(i1, i4);
 i1 = HEAP32[i4 + 16 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i4 + 8 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i2 = i1 | 0;
   i6 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i2 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i5 + 16 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i6 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i5 + 8 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i9 = i1 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i9 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i14 = i1 | 0;
   i6 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i14 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i23 = i1 | 0;
   i6 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i23 >> 2] = i6;
    break;
   }
  }
 } while (0);
 do {
  if (!i13) {
   i1 = i8 | 0;
   i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i1 >> 2] = i6;
    break;
   }
  }
 } while (0);
 do {
  if (!i22) {
   i8 = i21 | 0;
   i13 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i8 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i7 = i13 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 do {
  if (!i22) {
   i13 = i21 | 0;
   i8 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i13 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i21 = HEAP32[i15 >> 2] | 0;
 if ((i21 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i15 = i21 | 0;
 i22 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
 if ((i22 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i21);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i15 >> 2] = i22;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCoreL32findDefaultProtectionSpaceForURLERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 if (HEAP8[H_BASE + 16 | 0] | 0) {
  i7 = HEAP32[H_BASE + 40 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(20) | 0;
  i9 = i8;
  _memset(i8 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 40 >> 2] = i9;
  HEAP8[H_BASE + 16 | 0] = 1;
  i7 = i9;
 }
 if (HEAP8[H_BASE + 32 | 0] | 0) {
  i10 = HEAP32[H_BASE + 56 >> 2] | 0;
 } else {
  i9 = __ZN3WTF10fastMallocEj(20) | 0;
  i8 = i9;
  _memset(i9 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 56 >> 2] = i8;
  HEAP8[H_BASE + 32 | 0] = 1;
  i10 = i8;
 }
 __ZN7WebCoreL19originStringFromURLERKNS_3URLE(i4, i2);
 i8 = HEAP32[i10 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i11 = 0;
  i12 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = HEAP32[i10 + 8 >> 2] | 0;
  i10 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i10 + 16 >> 2] | 0;
  if (i4 >>> 0 > 127 >>> 0) {
   i13 = i4 >>> 7;
  } else {
   i13 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i10) | 0;
  }
  i4 = (i13 >>> 23) + ~i13 | 0;
  i14 = i4 << 12 ^ i4;
  i4 = i14 >>> 7 ^ i14;
  i14 = i4 << 2 ^ i4;
  i4 = i14 >>> 20 ^ i14 | 1;
  i14 = i13;
  i13 = 0;
  while (1) {
   i15 = i14 & i9;
   i16 = i8 + (i15 << 2) | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   i18 = i17;
   if ((i18 | 0) == 0) {
    i19 = 0;
    break;
   } else if ((i18 | 0) != (-1 | 0)) {
    if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i17, i10) | 0) {
     i19 = i16;
     break;
    }
   }
   i16 = (i13 | 0) == 0 ? i4 : i13;
   i14 = i16 + i15 | 0;
   i13 = i16;
  }
  i11 = (i19 | 0) != 0;
  i12 = i10;
 }
 do {
  if ((i12 | 0) != 0) {
   i10 = i12 | 0;
   i19 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i10 >> 2] = i19;
    break;
   }
  }
 } while (0);
 if (!i11) {
  i11 = i1;
  i12 = (HEAP32[i7 >> 2] | 0) + ((HEAP32[i7 + 4 >> 2] | 0) * 28 & -1) | 0;
  HEAP32[i11 >> 2] = i12;
  HEAP32[i11 + 4 >> 2] = i12;
  STACKTOP = i3;
  return;
 }
 __ZN7WebCoreL28protectionSpaceMapKeyFromURLERKNS_3URLE(i5, i2);
 i12 = HEAP32[i2 + 28 >> 2] | 0;
 i2 = i7 | 0;
 i11 = i7 + 4 | 0;
 i19 = i5 | 0;
 i10 = i12 + 1 | 0;
 i13 = i6 | 0;
 i14 = i7 + 8 | 0;
 while (1) {
  i7 = HEAP32[i2 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i4 = HEAP32[i11 >> 2] | 0;
   i8 = i4 * 28 & -1 | 0;
   i20 = i8;
   i21 = i8;
   i22 = 0;
   i23 = i4;
  } else {
   i4 = HEAP32[i14 >> 2] | 0;
   i8 = HEAP32[i19 >> 2] | 0;
   i9 = HEAP32[i8 + 16 >> 2] | 0;
   if (i9 >>> 0 > 127 >>> 0) {
    i24 = i9 >>> 7;
   } else {
    i24 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i8) | 0;
   }
   i8 = (i24 >>> 23) + ~i24 | 0;
   i9 = i8 << 12 ^ i8;
   i8 = i9 >>> 7 ^ i9;
   i9 = i8 << 2 ^ i8;
   i8 = i9 >>> 20 ^ i9 | 1;
   i9 = i24;
   i16 = 0;
   while (1) {
    i15 = i9 & i4;
    i17 = i7 + (i15 * 28 & -1) | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    i25 = i18;
    if ((i25 | 0) == 0) {
     i26 = 0;
     break;
    } else if ((i25 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i18, HEAP32[i19 >> 2] | 0) | 0) {
      i26 = i17;
      break;
     }
    }
    i17 = (i16 | 0) == 0 ? i8 : i16;
    i9 = i17 + i15 | 0;
    i16 = i17;
   }
   i16 = HEAP32[i2 >> 2] | 0;
   i9 = HEAP32[i11 >> 2] | 0;
   i8 = i16 + (i9 * 28 & -1) | 0;
   i20 = (i26 | 0) == 0 ? i8 : i26;
   i21 = i8;
   i22 = i16;
   i23 = i9;
  }
  if ((i20 | 0) != (i22 + (i23 * 28 & -1) | 0)) {
   i27 = 35;
   break;
  }
  i28 = HEAP32[i19 >> 2] | 0;
  i9 = (i28 | 0) == 0;
  if (i9) {
   i29 = 0;
  } else {
   i29 = HEAP32[i28 + 4 >> 2] | 0;
  }
  if ((i29 | 0) == (i10 | 0)) {
   i27 = 39;
   break;
  }
  if (i9) {
   i30 = -1;
  } else {
   i30 = __ZN3WTF10StringImpl11reverseFindEtj(i28, 47, (HEAP32[i28 + 4 >> 2] | 0) - 2 | 0) | 0;
  }
  __ZNK3WTF6String9substringEjj(i6, i5, 0, ((i30 | 0) == (i12 | 0)) + i30 | 0);
  i9 = HEAP32[i13 >> 2] | 0;
  HEAP32[i13 >> 2] = 0;
  i16 = HEAP32[i19 >> 2] | 0;
  HEAP32[i19 >> 2] = i9;
  do {
   if ((i16 | 0) != 0) {
    i9 = i16 | 0;
    i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i8 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i16);
     break;
    } else {
     HEAP32[i9 >> 2] = i8;
     break;
    }
   }
  } while (0);
  i16 = HEAP32[i13 >> 2] | 0;
  if ((i16 | 0) == 0) {
   continue;
  }
  i8 = i16 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
  if ((i9 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i16);
   continue;
  } else {
   HEAP32[i8 >> 2] = i9;
   continue;
  }
 }
 if ((i27 | 0) == 35) {
  i13 = i1;
  HEAP32[i13 >> 2] = i20;
  HEAP32[i13 + 4 >> 2] = i21;
  i31 = HEAP32[i19 >> 2] | 0;
 } else if ((i27 | 0) == 39) {
  i27 = i1;
  i1 = i20;
  HEAP32[i27 >> 2] = i1;
  HEAP32[i27 + 4 >> 2] = i1;
  i31 = i28;
 }
 if ((i31 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i28 = i31 | 0;
 i1 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i31);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i28 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17CredentialStorage3setERKNS_10CredentialERKNS_15ProtectionSpaceERKNS_3URLE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 48 | 0;
 if (HEAP8[H_BASE + 24 | 0] | 0) {
  i10 = HEAP32[H_BASE + 48 >> 2] | 0;
 } else {
  i11 = __ZN3WTF10fastMallocEj(20) | 0;
  i12 = i11;
  _memset(i11 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 48 >> 2] = i12;
  HEAP8[H_BASE + 24 | 0] = 1;
  i10 = i12;
 }
 __ZN3WTF9HashTableIN7WebCore15ProtectionSpaceENS_12KeyValuePairIS2_NS1_10CredentialEEENS_24KeyValuePairKeyExtractorIS5_EENS1_19ProtectionSpaceHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i5, i10 | 0, i2, i1);
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  i10 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i1 >> 2] | 0;
  if ((i5 | 0) != 0) {
   i12 = i5 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
  }
  i12 = i10 + 24 | 0;
  i11 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = i5;
  do {
   if ((i11 | 0) != 0) {
    i5 = i11 | 0;
    i12 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
    if ((i12 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i5 >> 2] = i12;
     break;
    }
   }
  } while (0);
  i11 = HEAP32[i1 + 4 >> 2] | 0;
  if ((i11 | 0) != 0) {
   i12 = i11 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
  }
  i12 = i10 + 28 | 0;
  i5 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = i11;
  do {
   if ((i5 | 0) != 0) {
    i11 = i5 | 0;
    i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i12 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i11 >> 2] = i12;
     break;
    }
   }
  } while (0);
  HEAP32[i10 + 32 >> 2] = HEAP32[i1 + 8 >> 2];
 }
 if (__ZNK7WebCore15ProtectionSpace7isProxyEv(i2) | 0) {
  STACKTOP = i4;
  return;
 }
 if (HEAP8[H_BASE + 32 | 0] | 0) {
  i13 = HEAP32[H_BASE + 56 >> 2] | 0;
 } else {
  i1 = __ZN3WTF10fastMallocEj(20) | 0;
  i10 = i1;
  _memset(i1 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 56 >> 2] = i10;
  HEAP8[H_BASE + 32 | 0] = 1;
  i13 = i10;
 }
 __ZN7WebCoreL19originStringFromURLERKNS_3URLE(i6, i3);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i7, i13 | 0, i6, i6);
 i13 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i6 = i13 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if (((__ZNK7WebCore15ProtectionSpace20authenticationSchemeEv(i2) | 0) - 1 | 0) >>> 0 >= 2 >>> 0) {
  STACKTOP = i4;
  return;
 }
 if (HEAP8[H_BASE + 16 | 0] | 0) {
  i14 = HEAP32[H_BASE + 40 >> 2] | 0;
 } else {
  i13 = __ZN3WTF10fastMallocEj(20) | 0;
  i7 = i13;
  _memset(i13 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 40 >> 2] = i7;
  HEAP8[H_BASE + 16 | 0] = 1;
  i14 = i7;
 }
 __ZN7WebCoreL28protectionSpaceMapKeyFromURLERKNS_3URLE(i8, i3);
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15ProtectionSpaceEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i9, i14 | 0, i8, i2);
 if ((HEAP8[i9 + 8 | 0] & 1) == 0) {
  i14 = HEAP32[i9 >> 2] | 0;
  i9 = HEAP32[i2 >> 2] | 0;
  if ((i9 | 0) != 0) {
   i3 = i9 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
  }
  i3 = i14 + 4 | 0;
  i7 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i9;
  do {
   if ((i7 | 0) != 0) {
    i9 = i7 | 0;
    i3 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i3 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i9 >> 2] = i3;
     break;
    }
   }
  } while (0);
  HEAP32[i14 + 8 >> 2] = HEAP32[i2 + 4 >> 2];
  HEAP32[i14 + 12 >> 2] = HEAP32[i2 + 8 >> 2];
  i7 = HEAP32[i2 + 12 >> 2] | 0;
  if ((i7 | 0) != 0) {
   i3 = i7 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
  }
  i3 = i14 + 16 | 0;
  i9 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i7;
  do {
   if ((i9 | 0) != 0) {
    i7 = i9 | 0;
    i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i3 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i7 >> 2] = i3;
     break;
    }
   }
  } while (0);
  HEAP32[i14 + 20 >> 2] = HEAP32[i2 + 16 >> 2];
  HEAP8[i14 + 24 | 0] = HEAP8[i2 + 20 | 0] & 1;
 }
 i2 = HEAP32[i8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i2 | 0;
 i14 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i14 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i8 >> 2] = i14;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15ProtectionSpaceEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15ProtectionSpaceEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i2, i8, 0) | 0;
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
  i13 = i10 + (i12 * 28 & -1) | 0;
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
  i17 = (HEAP32[i5 >> 2] | 0) + ((HEAP32[i2 + 4 >> 2] | 0) * 28 & -1) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  _memset(i9 | 0, 0, 28) | 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i4 >> 2] | 0;
 if ((i13 | 0) != 0) {
  i8 = i13 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i13;
 do {
  if ((i9 | 0) != 0) {
   i13 = i9 | 0;
   i8 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i13 >> 2] = i8;
    break;
   }
  }
 } while (0);
 HEAP32[i18 + 8 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i18 + 12 >> 2] = HEAP32[i4 + 8 >> 2];
 i9 = HEAP32[i4 + 12 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 + 16 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 HEAP32[i18 + 20 >> 2] = HEAP32[i4 + 16 >> 2];
 HEAP8[i18 + 24 | 0] = HEAP8[i4 + 20 | 0] & 1;
 i4 = i2 + 12 | 0;
 i13 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i13;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i13 << 1 | 0) < (i8 | 0)) {
  i19 = i18;
  i20 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i21 = 8;
  } else {
   i9 = i8 << 1;
   i21 = (i13 * 6 & -1 | 0) < (i9 | 0) ? i8 : i9;
  }
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15ProtectionSpaceEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i2, i21, i18) | 0;
  i19 = i9;
  i20 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i20 * 28 & -1) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS_6StringEPKcEES2_EEcEES2_EEcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 + 4 | 0;
 i8 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
 i9 = i2 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = (i10 | 0) == 0;
 if (i11) {
  i12 = 0;
 } else {
  i12 = HEAP32[i10 + 4 >> 2] | 0;
 }
 i13 = i2 + 8 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 i15 = (i14 | 0) == 0;
 if (i15) {
  i16 = 0;
 } else {
  i16 = HEAP32[i14 + 4 >> 2] | 0;
 }
 i17 = i2 + 16 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = (i18 | 0) == 0;
 if (i19) {
  i20 = 0;
 } else {
  i20 = HEAP32[i18 + 4 >> 2] | 0;
 }
 i21 = _llvm_uadd_with_overflow_i32(i8 + 1 + i12 + i16 + i20 | 0, 1) | 0;
 i20 = i21;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i11) {
  i22 = 11;
 } else {
  if ((HEAP32[i10 + 16 >> 2] & 32 | 0) != 0) {
   i22 = 11;
  }
 }
 do {
  if ((i22 | 0) == 11) {
   if (!i15) {
    if ((HEAP32[i14 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   if (!i19) {
    if ((HEAP32[i18 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i20 | 0) == 0) {
     i10 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i10 | 0) == 0) {
      i22 = 28;
      break;
     }
     i11 = i10 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
     i23 = i10;
     i24 = 0;
    } else {
     if (i20 >>> 0 > 4294967275 >>> 0) {
      i22 = 28;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i20 + 20 | 0);
     i10 = i6 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     HEAP32[i10 >> 2] = 0;
     if ((i11 | 0) == 0) {
      i22 = 28;
      break;
     }
     i10 = i11 + 20 | 0;
     HEAP32[i11 >> 2] = 2;
     HEAP32[i11 + 4 >> 2] = i20;
     HEAP32[i11 + 8 >> 2] = i10;
     HEAP32[i11 + 12 >> 2] = 0;
     HEAP32[i11 + 16 >> 2] = 32;
     i23 = i11;
     i24 = i10;
    }
   } while (0);
   if ((i22 | 0) == 28) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   __ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEPKcEES1_EEcEES1_E7writeToEPh(i2, i24);
   i10 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
   i11 = HEAP32[i9 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i25 = 0;
   } else {
    i25 = HEAP32[i11 + 4 >> 2] | 0;
   }
   i11 = HEAP32[i13 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i26 = 0;
   } else {
    i26 = HEAP32[i11 + 4 >> 2] | 0;
   }
   i11 = HEAP32[i17 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i27 = 0;
   } else {
    i27 = HEAP32[i11 + 4 >> 2] | 0;
   }
   HEAP8[i24 + (i10 + 1 + i25 + i26 + i27) | 0] = i3;
   HEAP32[i1 >> 2] = i23;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i20 | 0) == 0) {
   i23 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i23 | 0) == 0) {
    i22 = 42;
    break;
   }
   i27 = i23 | 0;
   HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 2;
   i28 = i23;
   i29 = 0;
  } else {
   if (i20 >>> 0 > 2147483637 >>> 0) {
    i22 = 42;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i20 << 1) + 20 | 0);
   i23 = i5 | 0;
   i27 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = 0;
   if ((i27 | 0) == 0) {
    i22 = 42;
    break;
   }
   i23 = i27 + 20 | 0;
   HEAP32[i27 >> 2] = 2;
   HEAP32[i27 + 4 >> 2] = i20;
   HEAP32[i27 + 8 >> 2] = i23;
   HEAP32[i27 + 12 >> 2] = 0;
   HEAP32[i27 + 16 >> 2] = 0;
   i28 = i27;
   i29 = i23;
  }
 } while (0);
 if ((i22 | 0) == 42) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEPKcEES1_EEcEES1_E7writeToEPt(i2, i29);
 i2 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i30 = 0;
 } else {
  i30 = HEAP32[i7 + 4 >> 2] | 0;
 }
 i7 = HEAP32[i13 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i31 = 0;
 } else {
  i31 = HEAP32[i7 + 4 >> 2] | 0;
 }
 i7 = HEAP32[i17 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i32 = 0;
 } else {
  i32 = HEAP32[i7 + 4 >> 2] | 0;
 }
 HEAP16[i29 + (i2 + 1 + i30 + i31 + i32 << 1) >> 1] = i3 & 255;
 HEAP32[i1 >> 2] = i28;
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIN7WebCore15ProtectionSpaceENS_12KeyValuePairIS2_NS1_10CredentialEEENS_24KeyValuePairKeyExtractorIS5_EENS1_19ProtectionSpaceHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i10 = 8;
  } else {
   i11 = i9 << 1;
   i10 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i9 : i11;
  }
  __ZN3WTF9HashTableIN7WebCore15ProtectionSpaceENS_12KeyValuePairIS2_NS1_10CredentialEEENS_24KeyValuePairKeyExtractorIS5_EENS1_19ProtectionSpaceHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = __ZN7WebCore19ProtectionSpaceHash4hashERKNS_15ProtectionSpaceE(i3) | 0;
 i11 = i6 + 12 | 0;
 i9 = i6 | 0;
 i13 = (i10 >>> 23) + ~i10 | 0;
 i14 = i13 << 12 ^ i13;
 i13 = i14 >>> 7 ^ i14;
 i14 = i13 << 2 ^ i13;
 i13 = i14 >>> 20 ^ i14 | 1;
 i14 = 0;
 i15 = i10;
 i10 = 0;
 while (1) {
  i16 = i15 & i8;
  i17 = i12 + (i16 * 36 & -1) | 0;
  i18 = i17 | 0;
  __ZN7WebCore15ProtectionSpaceC1Ev(i6);
  i19 = __ZN7WebCoreeqERKNS_15ProtectionSpaceES2_(i18, i6) | 0;
  i20 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i20 | 0) != 0) {
    i21 = i20 | 0;
    i22 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
    if ((i22 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i20);
     break;
    } else {
     HEAP32[i21 >> 2] = i22;
     break;
    }
   }
  } while (0);
  i20 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i20 | 0) != 0) {
    i22 = i20 | 0;
    i21 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
    if ((i21 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i20);
     break;
    } else {
     HEAP32[i22 >> 2] = i21;
     break;
    }
   }
  } while (0);
  if (i19) {
   break;
  }
  if ((HEAP8[i12 + (i16 * 36 & -1) + 20 | 0] & 1) == 0) {
   if (__ZN7WebCoreeqERKNS_15ProtectionSpaceES2_(i18, i3) | 0) {
    i23 = 17;
    break;
   } else {
    i24 = i14;
   }
  } else {
   i24 = i17;
  }
  i20 = (i10 | 0) == 0 ? i13 : i10;
  i14 = i24;
  i15 = i20 + i16 | 0;
  i10 = i20;
 }
 if ((i23 | 0) == 17) {
  i23 = (HEAP32[i7 >> 2] | 0) + ((HEAP32[i2 + 4 >> 2] | 0) * 36 & -1) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i17;
  HEAP32[i10 + 4 >> 2] = i23;
  HEAP8[i1 + 8 | 0] = 0;
  STACKTOP = i5;
  return;
 }
 if ((i14 | 0) == 0) {
  i25 = i17;
  i26 = i2 + 16 | 0;
 } else {
  __ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsIN7WebCore15ProtectionSpaceEEENS1_INS2_10CredentialEEEE10emptyValueEv(i14);
  i17 = i2 + 16 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) - 1;
  i25 = i14;
  i26 = i17;
 }
 __ZN3WTF17HashMapTranslatorINS_7HashMapIN7WebCore15ProtectionSpaceENS2_10CredentialENS2_19ProtectionSpaceHashENS_10HashTraitsIS3_EENS6_IS4_EEE18KeyValuePairTraitsES5_E9translateINS_12KeyValuePairIS3_S4_EERKS3_RKS4_EEvRT_OT0_OT1_(i25, i3, i4);
 i4 = i2 + 12 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i3;
 i4 = i2 + 4 | 0;
 i17 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i3 << 1 | 0) < (i17 | 0)) {
  i27 = i25;
  i28 = i17;
 } else {
  if ((i17 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i17 << 1;
   i29 = (i3 * 6 & -1 | 0) < (i26 | 0) ? i17 : i26;
  }
  i26 = __ZN3WTF9HashTableIN7WebCore15ProtectionSpaceENS_12KeyValuePairIS2_NS1_10CredentialEEENS_24KeyValuePairKeyExtractorIS5_EENS1_19ProtectionSpaceHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i7 >> 2] | 0) + (i28 * 36 & -1) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIN7WebCore15ProtectionSpaceENS_12KeyValuePairIS2_NS1_10CredentialEEENS_24KeyValuePairKeyExtractorIS5_EENS1_19ProtectionSpaceHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i7 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 i7 = __ZN3WTF10fastMallocEj(i2 * 36 & -1) | 0;
 if ((i2 | 0) > 0) {
  i11 = 0;
  while (1) {
   __ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsIN7WebCore15ProtectionSpaceEEENS1_INS2_10CredentialEEEE10emptyValueEv(i7 + (i11 * 36 & -1) | 0);
   i11 = i11 + 1 | 0;
   if ((i11 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i9 >> 2] = i7;
 if ((i8 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i12 = 0;
  i13 = i10;
  __ZN3WTF8fastFreeEPv(i13);
  STACKTOP = i4;
  return i12 | 0;
 }
 i7 = i6 + 12 | 0;
 i9 = i6 | 0;
 i2 = i5 | 0;
 i11 = 0;
 i14 = 0;
 while (1) {
  i15 = i10 + (i11 * 36 & -1) | 0;
  i16 = i15 | 0;
  __ZN7WebCore15ProtectionSpaceC1Ev(i6);
  i17 = __ZN7WebCoreeqERKNS_15ProtectionSpaceES2_(i16, i6) | 0;
  i18 = HEAP32[i7 >> 2] | 0;
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
  i18 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i18 | 0) != 0) {
    i20 = i18 | 0;
    i19 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
    if ((i19 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i18);
     break;
    } else {
     HEAP32[i20 >> 2] = i19;
     break;
    }
   }
  } while (0);
  do {
   if (i17) {
    i21 = i14;
   } else {
    i18 = i10 + (i11 * 36 & -1) + 20 | 0;
    if ((HEAP8[i18] & 1) != 0) {
     i21 = i14;
     break;
    }
    __ZN3WTF9HashTableIN7WebCore15ProtectionSpaceENS_12KeyValuePairIS2_NS1_10CredentialEEENS_24KeyValuePairKeyExtractorIS5_EENS1_19ProtectionSpaceHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EES2_EENSt3__14pairIPS5_bEERKT0_(i5, i1, i16);
    i19 = HEAP32[i2 >> 2] | 0;
    __ZN3WTF12KeyValuePairIN7WebCore15ProtectionSpaceENS1_10CredentialEED2Ev(i19);
    i20 = i15 | 0;
    i22 = HEAP32[i20 >> 2] | 0;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i19 >> 2] = i22;
    HEAP32[i19 + 4 >> 2] = HEAP32[i10 + (i11 * 36 & -1) + 4 >> 2];
    HEAP32[i19 + 8 >> 2] = HEAP32[i10 + (i11 * 36 & -1) + 8 >> 2];
    i22 = i10 + (i11 * 36 & -1) + 12 | 0;
    i20 = HEAP32[i22 >> 2] | 0;
    HEAP32[i22 >> 2] = 0;
    HEAP32[i19 + 12 >> 2] = i20;
    HEAP32[i19 + 16 >> 2] = HEAP32[i10 + (i11 * 36 & -1) + 16 >> 2];
    HEAP8[i19 + 20 | 0] = HEAP8[i18] & 1;
    i18 = i10 + (i11 * 36 & -1) + 24 | 0;
    i20 = HEAP32[i18 >> 2] | 0;
    HEAP32[i18 >> 2] = 0;
    HEAP32[i19 + 24 >> 2] = i20;
    i20 = i10 + (i11 * 36 & -1) + 28 | 0;
    i18 = HEAP32[i20 >> 2] | 0;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i19 + 28 >> 2] = i18;
    HEAP32[i19 + 32 >> 2] = HEAP32[i10 + (i11 * 36 & -1) + 32 >> 2];
    i21 = (i15 | 0) == (i3 | 0) ? i19 : i14;
   }
  } while (0);
  i15 = i11 + 1 | 0;
  if ((i15 | 0) == (i8 | 0)) {
   break;
  } else {
   i11 = i15;
   i14 = i21;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i8 | 0) > 0) {
  i23 = 0;
 } else {
  i12 = i21;
  i13 = i10;
  __ZN3WTF8fastFreeEPv(i13);
  STACKTOP = i4;
  return i12 | 0;
 }
 while (1) {
  if ((HEAP8[i10 + (i23 * 36 & -1) + 20 | 0] & 1) == 0) {
   __ZN3WTF12KeyValuePairIN7WebCore15ProtectionSpaceENS1_10CredentialEED2Ev(i10 + (i23 * 36 & -1) | 0);
  }
  i1 = i23 + 1 | 0;
  if ((i1 | 0) < (i8 | 0)) {
   i23 = i1;
  } else {
   i12 = i21;
   break;
  }
 }
 i13 = i10;
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i4;
 return i12 | 0;
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS_6StringEPKcEES2_EEcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 + 4 | 0;
 i8 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
 i9 = i2 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = (i10 | 0) == 0;
 if (i11) {
  i12 = 0;
 } else {
  i12 = HEAP32[i10 + 4 >> 2] | 0;
 }
 i13 = i2 + 8 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 i15 = (i14 | 0) == 0;
 if (i15) {
  i16 = 0;
 } else {
  i16 = HEAP32[i14 + 4 >> 2] | 0;
 }
 i17 = _llvm_uadd_with_overflow_i32(i12 + i8 + i16 | 0, 1) | 0;
 i16 = i17;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i11) {
  i18 = 9;
 } else {
  if ((HEAP32[i10 + 16 >> 2] & 32 | 0) != 0) {
   i18 = 9;
  }
 }
 do {
  if ((i18 | 0) == 9) {
   if (!i15) {
    if ((HEAP32[i14 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i16 | 0) == 0) {
     i10 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i10 | 0) == 0) {
      i18 = 22;
      break;
     }
     i11 = i10 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
     i19 = i10;
     i20 = 0;
    } else {
     if (i16 >>> 0 > 4294967275 >>> 0) {
      i18 = 22;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i16 + 20 | 0);
     i10 = i6 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     HEAP32[i10 >> 2] = 0;
     if ((i11 | 0) == 0) {
      i18 = 22;
      break;
     }
     i10 = i11 + 20 | 0;
     HEAP32[i11 >> 2] = 2;
     HEAP32[i11 + 4 >> 2] = i16;
     HEAP32[i11 + 8 >> 2] = i10;
     HEAP32[i11 + 12 >> 2] = 0;
     HEAP32[i11 + 16 >> 2] = 32;
     i19 = i11;
     i20 = i10;
    }
   } while (0);
   if ((i18 | 0) == 22) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   __ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPh(i2, i20);
   i10 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
   i11 = HEAP32[i9 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i21 = 0;
   } else {
    i21 = HEAP32[i11 + 4 >> 2] | 0;
   }
   i11 = HEAP32[i13 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i22 = 0;
   } else {
    i22 = HEAP32[i11 + 4 >> 2] | 0;
   }
   HEAP8[i20 + (i21 + i10 + i22) | 0] = i3;
   HEAP32[i1 >> 2] = i19;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i16 | 0) == 0) {
   i19 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i19 | 0) == 0) {
    i18 = 34;
    break;
   }
   i22 = i19 | 0;
   HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
   i23 = i19;
   i24 = 0;
  } else {
   if (i16 >>> 0 > 2147483637 >>> 0) {
    i18 = 34;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i16 << 1) + 20 | 0);
   i19 = i5 | 0;
   i22 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   if ((i22 | 0) == 0) {
    i18 = 34;
    break;
   }
   i19 = i22 + 20 | 0;
   HEAP32[i22 >> 2] = 2;
   HEAP32[i22 + 4 >> 2] = i16;
   HEAP32[i22 + 8 >> 2] = i19;
   HEAP32[i22 + 12 >> 2] = 0;
   HEAP32[i22 + 16 >> 2] = 0;
   i23 = i22;
   i24 = i19;
  }
 } while (0);
 if ((i18 | 0) == 34) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPt(i2, i24);
 i2 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i25 = 0;
 } else {
  i25 = HEAP32[i7 + 4 >> 2] | 0;
 }
 i7 = HEAP32[i13 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i26 = 0;
 } else {
  i26 = HEAP32[i7 + 4 >> 2] | 0;
 }
 HEAP16[i24 + (i25 + i2 + i26 << 1) >> 1] = i3 & 255;
 HEAP32[i1 >> 2] = i23;
 STACKTOP = i4;
 return;
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
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
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
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15ProtectionSpaceEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 * 28 & -1) | 0;
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
  i2 = i7 + (i10 * 28 & -1) | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15ProtectionSpaceEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E8reinsertEOS5_(i1, i2) | 0;
   i12 = (i2 | 0) == (i3 | 0) ? i6 : i11;
  }
  i6 = i10 + 1 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i6;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i13 = 0;
 } else {
  i8 = i12;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i13 * 28 & -1) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i13 * 28 & -1) + 16 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 | 0;
      i3 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i3 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       break;
      } else {
       HEAP32[i10 >> 2] = i3;
       break;
      }
     }
    } while (0);
    i11 = HEAP32[i7 + (i13 * 28 & -1) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i3 = i11 | 0;
      i10 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
      if ((i10 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       break;
      } else {
       HEAP32[i3 >> 2] = i10;
       break;
      }
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i10 = i11 | 0;
    i3 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i3 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i10 >> 2] = i3;
     break;
    }
   }
  } while (0);
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i13 = i1;
  } else {
   i8 = i12;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15ProtectionSpaceEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E8reinsertEOS5_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i5 + 16 >> 2] | 0;
 if (i6 >>> 0 > 127 >>> 0) {
  i7 = i6 >>> 7;
 } else {
  i7 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i5) | 0;
 }
 i5 = (i7 >>> 23) + ~i7 | 0;
 i6 = i5 << 12 ^ i5;
 i5 = i6 >>> 7 ^ i6;
 i6 = i5 << 2 ^ i5;
 i5 = i6 >>> 20 ^ i6 | 1;
 i6 = i7;
 i7 = 0;
 i8 = 0;
 while (1) {
  i9 = i6 & i4;
  i10 = i3 + (i9 * 28 & -1) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  if ((i12 | 0) == 0) {
   i13 = 6;
   break;
  } else if ((i12 | 0) == (-1 | 0)) {
   i14 = i10;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i11, HEAP32[i1 >> 2] | 0) | 0) {
    i15 = i10;
    break;
   } else {
    i14 = i8;
   }
  }
  i11 = (i7 | 0) == 0 ? i5 : i7;
  i6 = i11 + i9 | 0;
  i7 = i11;
  i8 = i14;
 }
 if ((i13 | 0) == 6) {
  i15 = (i8 | 0) != 0 ? i8 : i10;
 }
 i10 = i15 + 16 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i13 = i8 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i8 = i15 + 4 | 0;
 i14 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 | 0;
   i7 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i13 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i14 = i15 | 0;
 i7 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i13 = i7 | 0;
   i6 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i13 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i14 >> 2] = i7;
 i7 = i2 + 4 | 0;
 i14 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i8 >> 2] = i14;
 HEAP32[i15 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i15 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i14 = i2 + 16 | 0;
 i8 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i10 >> 2] = i8;
 HEAP32[i15 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP8[i15 + 24 | 0] = HEAP8[i2 + 24 | 0] & 1;
 return i15 | 0;
}
function __ZN3WTF17HashMapTranslatorINS_7HashMapIN7WebCore15ProtectionSpaceENS2_10CredentialENS2_19ProtectionSpaceHashENS_10HashTraitsIS3_EENS6_IS4_EEE18KeyValuePairTraitsES5_E9translateINS_12KeyValuePairIS3_S4_EERKS3_RKS4_EEvRT_OT0_OT1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 i6 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i5 = i6 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 12 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i6 >> 2] = i5;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP8[i1 + 20 | 0] = HEAP8[i2 + 20 | 0] & 1;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = i2 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 28 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i2 | 0) == 0) {
  i7 = i3 + 8 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  i9 = i1 + 32 | 0;
  HEAP32[i9 >> 2] = i8;
  return;
 }
 i5 = i2 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i7 = i3 + 8 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  i9 = i1 + 32 | 0;
  HEAP32[i9 >> 2] = i8;
  return;
 } else {
  HEAP32[i5 >> 2] = i4;
  i7 = i3 + 8 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  i9 = i1 + 32 | 0;
  HEAP32[i9 >> 2] = i8;
  return;
 }
}
function __ZN7WebCore17CredentialStorage3setERKNS_10CredentialERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN7WebCoreL32findDefaultProtectionSpaceForURLERKNS_3URLE(i4, i2);
 if (HEAP8[H_BASE + 16 | 0] | 0) {
  i6 = HEAP32[H_BASE + 40 >> 2] | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(20) | 0;
  i7 = i2;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 40 >> 2] = i7;
  HEAP8[H_BASE + 16 | 0] = 1;
  i6 = i7;
 }
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) == ((HEAP32[i6 >> 2] | 0) + ((HEAP32[i6 + 4 >> 2] | 0) * 28 & -1) | 0)) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 if (HEAP8[H_BASE + 24 | 0] | 0) {
  i9 = HEAP32[H_BASE + 48 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(20) | 0;
  i4 = i6;
  _memset(i6 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 48 >> 2] = i4;
  HEAP8[H_BASE + 24 | 0] = 1;
  i9 = i4;
 }
 __ZN3WTF9HashTableIN7WebCore15ProtectionSpaceENS_12KeyValuePairIS2_NS1_10CredentialEEENS_24KeyValuePairKeyExtractorIS5_EENS1_19ProtectionSpaceHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i5, i9 | 0, i7 + 4 | 0, i1);
 if ((HEAP8[i5 + 8 | 0] & 1) != 0) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 i7 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i9 = i5 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = i7 + 24 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i5;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i9 = i4 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = i7 + 28 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i9;
    break;
   }
  }
 } while (0);
 HEAP32[i7 + 32 >> 2] = HEAP32[i1 + 8 >> 2];
 i8 = 1;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _strlen(i4 | 0) | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = 0;
   i9 = 0;
  } else {
   i10 = HEAP32[i7 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
     i11 = HEAP32[i7 + 8 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     } else {
      i12 = 0;
     }
     while (1) {
      HEAP16[i2 + (i12 << 1) >> 1] = HEAP16[i11 + (i12 << 1) >> 1] | 0;
      i12 = i12 + 1 | 0;
      if (i12 >>> 0 >= i10 >>> 0) {
       break;
      }
     }
    } else {
     i11 = HEAP32[i7 + 8 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     } else {
      i13 = 0;
     }
     while (1) {
      HEAP16[i2 + (i13 << 1) >> 1] = HEAPU8[i11 + i13 | 0] | 0;
      i13 = i13 + 1 | 0;
      if (i13 >>> 0 >= i10 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i10 = HEAP32[i6 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i8 = 0;
    i9 = 0;
    break;
   }
   i8 = HEAP32[i10 + 4 >> 2] | 0;
   i9 = i10;
  }
 } while (0);
 if ((i5 | 0) == 0) {
  i14 = i9;
 } else {
  i9 = 0;
  while (1) {
   HEAP16[i2 + (i9 + i8 << 1) >> 1] = HEAPU8[i4 + i9 | 0] | 0;
   i9 = i9 + 1 | 0;
   if (i9 >>> 0 >= i5 >>> 0) {
    break;
   }
  }
  i14 = HEAP32[i6 >> 2] | 0;
 }
 i6 = _strlen(HEAP32[i3 >> 2] | 0) | 0;
 if ((i14 | 0) == 0) {
  i15 = 0;
 } else {
  i15 = HEAP32[i14 + 4 >> 2] | 0;
 }
 i14 = i15 + i6 | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 if ((HEAP32[i6 + 16 >> 2] & 32 | 0) == 0) {
  i15 = HEAP32[i6 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i16 = 0;
  }
  while (1) {
   HEAP16[i2 + (i16 + i14 << 1) >> 1] = HEAP16[i15 + (i16 << 1) >> 1] | 0;
   i16 = i16 + 1 | 0;
   if (i16 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 } else {
  i16 = HEAP32[i6 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i17 = 0;
  }
  while (1) {
   HEAP16[i2 + (i17 + i14 << 1) >> 1] = HEAPU8[i16 + i17 | 0] | 0;
   i17 = i17 + 1 | 0;
   if (i17 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 }
}
function __ZN3WTF9HashTableIN7WebCore15ProtectionSpaceENS_12KeyValuePairIS2_NS1_10CredentialEEENS_24KeyValuePairKeyExtractorIS5_EENS1_19ProtectionSpaceHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EES2_EENSt3__14pairIPS5_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = __ZN7WebCore19ProtectionSpaceHash4hashERKNS_15ProtectionSpaceE(i3) | 0;
 i8 = i5 + 12 | 0;
 i9 = i5 | 0;
 i10 = (i2 >>> 23) + ~i2 | 0;
 i11 = i10 << 12 ^ i10;
 i10 = i11 >>> 7 ^ i11;
 i11 = i10 << 2 ^ i10;
 i10 = i11 >>> 20 ^ i11 | 1;
 i11 = i2;
 i2 = 0;
 i12 = 0;
 while (1) {
  i13 = i11 & i7;
  i14 = i6 + (i13 * 36 & -1) | 0;
  i15 = i14 | 0;
  __ZN7WebCore15ProtectionSpaceC1Ev(i5);
  i16 = __ZN7WebCoreeqERKNS_15ProtectionSpaceES2_(i15, i5) | 0;
  i17 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i17 | 0) != 0) {
    i18 = i17 | 0;
    i19 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
    if ((i19 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i17);
     break;
    } else {
     HEAP32[i18 >> 2] = i19;
     break;
    }
   }
  } while (0);
  i17 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i17 | 0) != 0) {
    i19 = i17 | 0;
    i18 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
    if ((i18 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i17);
     break;
    } else {
     HEAP32[i19 >> 2] = i18;
     break;
    }
   }
  } while (0);
  if (i16) {
   i20 = 11;
   break;
  }
  if ((HEAP8[i6 + (i13 * 36 & -1) + 20 | 0] & 1) == 0) {
   if (__ZN7WebCoreeqERKNS_15ProtectionSpaceES2_(i15, i3) | 0) {
    i20 = 14;
    break;
   } else {
    i21 = i12;
   }
  } else {
   i21 = i14;
  }
  i17 = (i2 | 0) == 0 ? i10 : i2;
  i11 = i17 + i13 | 0;
  i2 = i17;
  i12 = i21;
 }
 if ((i20 | 0) == 11) {
  HEAP32[i1 >> 2] = (i12 | 0) != 0 ? i12 : i14;
  HEAP8[i1 + 4 | 0] = 0;
  STACKTOP = i4;
  return;
 } else if ((i20 | 0) == 14) {
  HEAP32[i1 >> 2] = i14;
  HEAP8[i1 + 4 | 0] = 1;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF9HashTableIN7WebCore15ProtectionSpaceENS_12KeyValuePairIS2_NS1_10CredentialEEENS_24KeyValuePairKeyExtractorIS5_EENS1_19ProtectionSpaceHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS8_EES2_EEPS5_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 i1 = __ZN7WebCore19ProtectionSpaceHash4hashERKNS_15ProtectionSpaceE(i2) | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i8 = i4 + 12 | 0;
 i9 = i4 | 0;
 i10 = (i1 >>> 23) + ~i1 | 0;
 i11 = i10 << 12 ^ i10;
 i10 = i11 >>> 7 ^ i11;
 i11 = i10 << 2 ^ i10;
 i10 = i11 >>> 20 ^ i11 | 1;
 i11 = i1;
 i1 = 0;
 while (1) {
  i12 = i11 & i5;
  i13 = i6 + (i12 * 36 & -1) | 0;
  i14 = i13 | 0;
  __ZN7WebCore15ProtectionSpaceC1Ev(i4);
  i15 = __ZN7WebCoreeqERKNS_15ProtectionSpaceES2_(i14, i4) | 0;
  i16 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i16 | 0) != 0) {
    i17 = i16 | 0;
    i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
    if ((i18 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i16);
     break;
    } else {
     HEAP32[i17 >> 2] = i18;
     break;
    }
   }
  } while (0);
  i16 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i16 | 0) != 0) {
    i18 = i16 | 0;
    i17 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
    if ((i17 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i16);
     break;
    } else {
     HEAP32[i18 >> 2] = i17;
     break;
    }
   }
  } while (0);
  if (i15) {
   i7 = 0;
   i19 = 17;
   break;
  }
  if ((HEAP8[i6 + (i12 * 36 & -1) + 20 | 0] & 1) == 0) {
   if (__ZN7WebCoreeqERKNS_15ProtectionSpaceES2_(i14, i2) | 0) {
    i7 = i13;
    i19 = 18;
    break;
   }
  }
  i16 = (i1 | 0) == 0 ? i10 : i1;
  i11 = i16 + i12 | 0;
  i1 = i16;
 }
 if ((i19 | 0) == 17) {
  STACKTOP = i3;
  return i7 | 0;
 } else if ((i19 | 0) == 18) {
  STACKTOP = i3;
  return i7 | 0;
 }
 return 0;
}
function __ZNK3WTF7HashMapIN7WebCore15ProtectionSpaceENS1_10CredentialENS1_19ProtectionSpaceHashENS_10HashTraitsIS2_EENS5_IS3_EEE3getERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = __ZN3WTF9HashTableIN7WebCore15ProtectionSpaceENS_12KeyValuePairIS2_NS1_10CredentialEEENS_24KeyValuePairKeyExtractorIS5_EENS1_19ProtectionSpaceHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS8_EES2_EEPS5_RKT0_(i2 | 0, i3) | 0;
 if ((i6 | 0) != 0) {
  i3 = HEAP32[i6 + 24 >> 2] | 0;
  HEAP32[i1 >> 2] = i3;
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
  }
  i2 = HEAP32[i6 + 28 >> 2] | 0;
  HEAP32[i1 + 4 >> 2] = i2;
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
  }
  HEAP32[i1 + 8 >> 2] = HEAP32[i6 + 32 >> 2];
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore10CredentialC1Ev(i5);
 i6 = i5 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i5 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i3;
 do {
  if ((i3 | 0) == 0) {
   HEAP32[i1 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
  } else {
   i7 = i3 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   i7 = HEAP32[i2 >> 2] | 0;
   HEAP32[i1 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
   if ((i7 | 0) == 0) {
    break;
   }
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
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i5 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS_6StringEPKcEES1_EEcEES1_EEcEcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i8 = i5 + 8 | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP8[i5 + 12 | 0] = HEAP8[i2 + 12 | 0] | 0;
 i9 = i5 + 16 | 0;
 i7 = HEAP32[i2 + 16 >> 2] | 0;
 HEAP32[i9 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i10 = i7 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS_6StringEPKcEES2_EEcEES2_EEcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, HEAP8[i2 + 20 | 0] | 0);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i9 = i2 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = i2 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i8 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i5;
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
function __ZN7WebCore19ProtectionSpaceHash4hashERKNS_15ProtectionSpaceE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 do {
  if ((HEAP32[(__ZNK7WebCore15ProtectionSpace4hostEv(i1) | 0) >> 2] | 0) == 0) {
   i5 = 0;
  } else {
   i6 = HEAP32[(__ZNK7WebCore15ProtectionSpace4hostEv(i1) | 0) >> 2] | 0;
   i7 = HEAP32[i6 + 16 >> 2] | 0;
   if (i7 >>> 0 > 127 >>> 0) {
    i5 = i7 >>> 7;
    break;
   } else {
    i5 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i6) | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i4 >> 2] = i5;
 HEAP32[i3 + 4 >> 2] = __ZNK7WebCore15ProtectionSpace4portEv(i1) | 0;
 HEAP32[i3 + 8 >> 2] = __ZNK7WebCore15ProtectionSpace10serverTypeEv(i1) | 0;
 HEAP32[i3 + 12 >> 2] = __ZNK7WebCore15ProtectionSpace20authenticationSchemeEv(i1) | 0;
 i4 = i3 + 16 | 0;
 i6 = i5 & 65535;
 do {
  if ((HEAP32[(__ZNK7WebCore15ProtectionSpace5realmEv(i1) | 0) >> 2] | 0) == 0) {
   i8 = 0;
  } else {
   i5 = HEAP32[(__ZNK7WebCore15ProtectionSpace5realmEv(i1) | 0) >> 2] | 0;
   i7 = HEAP32[i5 + 16 >> 2] | 0;
   if (i7 >>> 0 > 127 >>> 0) {
    i8 = i7 >>> 7;
    break;
   } else {
    i8 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i5) | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i4 >> 2] = i8;
 i8 = __ZNK7WebCore15ProtectionSpace7isProxyEv(i1) | 0;
 i1 = i8 ? 4 : 5;
 i8 = i3;
 i3 = -1640531527;
 i4 = i6;
 while (1) {
  i6 = i1 - 1 | 0;
  i5 = (i4 & 65535) + i3 | 0;
  i7 = (HEAPU16[i8 + 2 >> 1] | 0) << 11 ^ i5 ^ i5 << 16;
  i9 = (i7 >>> 11) + i7 | 0;
  i7 = i8 + 4 | 0;
  if ((i6 | 0) == 0) {
   break;
  }
  i1 = i6;
  i8 = i7;
  i3 = i9;
  i4 = HEAP16[i7 >> 1] | 0;
 }
 i4 = i9 << 3 ^ i9;
 i9 = (i4 >>> 5) + i4 | 0;
 i4 = i9 << 2 ^ i9;
 i9 = (i4 >>> 15) + i4 | 0;
 i4 = (i9 << 10 ^ i9) & 16777215;
 STACKTOP = i2;
 return ((i4 | 0) == 0 ? 8388608 : i4) | 0;
}
function __ZN7WebCore17CredentialStorage6removeERKNS_15ProtectionSpaceE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if (HEAP8[H_BASE + 24 | 0] | 0) {
  i2 = HEAP32[H_BASE + 48 >> 2] | 0;
 } else {
  i3 = __ZN3WTF10fastMallocEj(20) | 0;
  i4 = i3;
  _memset(i3 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 48 >> 2] = i4;
  HEAP8[H_BASE + 24 | 0] = 1;
  i2 = i4;
 }
 i4 = i2 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  i3 = HEAP32[i2 + 4 >> 2] | 0;
  i5 = i3 * 36 & -1 | 0;
  i6 = 0;
  i7 = i3;
  i8 = i2 | 0;
 } else {
  i3 = i2 | 0;
  i9 = __ZN3WTF9HashTableIN7WebCore15ProtectionSpaceENS_12KeyValuePairIS2_NS1_10CredentialEEENS_24KeyValuePairKeyExtractorIS5_EENS1_19ProtectionSpaceHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS8_EES2_EEPS5_RKT0_(i3, i1) | 0;
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i2 + 4 >> 2] | 0;
  i5 = (i9 | 0) == 0 ? i1 + (i4 * 36 & -1) | 0 : i9;
  i6 = i1;
  i7 = i4;
  i8 = i3;
 }
 if ((i5 | 0) == (i6 + (i7 * 36 & -1) | 0)) {
  return;
 }
 __ZN3WTF12KeyValuePairIN7WebCore15ProtectionSpaceENS1_10CredentialEED2Ev(i5);
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 12 >> 2] = 0;
 HEAP8[i5 + 20 | 0] = 1;
 i5 = i2 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i2 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  return;
 }
 __ZN3WTF9HashTableIN7WebCore15ProtectionSpaceENS_12KeyValuePairIS2_NS1_10CredentialEEENS_24KeyValuePairKeyExtractorIS5_EENS1_19ProtectionSpaceHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i8, (i5 | 0) / 2 & -1, 0) | 0;
 return;
}
function __ZN3WTFplINS_12StringAppendINS1_INS1_INS_6StringEPKcEES2_EEcEES2_cEENS1_INS1_IT_T0_EET1_EERKSA_SB_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 if (!i5) {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = (i7 | 0) == 0;
 if (!i8) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = HEAP8[i2 + 12 | 0] | 0;
 i10 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = (i10 | 0) == 0;
 if (!i2) {
  i11 = i10 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i4;
 if (!i5) {
  i11 = i4 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 4 >> 2] = i6;
 HEAP32[i1 + 8 >> 2] = i7;
 if (!i8) {
  i6 = i7 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 12 | 0] = i9;
 HEAP32[i1 + 16 >> 2] = i10;
 do {
  if (i2) {
   HEAP8[i1 + 20 | 0] = i3;
  } else {
   i9 = i10 | 0;
   i6 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i6 + 2;
   HEAP8[i1 + 20 | 0] = i3;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i6;
    break;
   }
  }
 } while (0);
 do {
  if (!i8) {
   i10 = i7 | 0;
   i3 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (i5) {
  return;
 }
 i5 = i4 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  return;
 } else {
  HEAP32[i5 >> 2] = i7;
  return;
 }
}
function __ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEPKcEES1_EEcEES1_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP8[i1 + 12 | 0] | 0;
 __ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPt(i1 | 0, i2);
 i4 = i1 + 4 | 0;
 i5 = _strlen(HEAP32[i4 >> 2] | 0) | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = HEAP32[i7 + 4 >> 2] | 0;
 }
 i7 = i1 + 8 | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = HEAP32[i9 + 4 >> 2] | 0;
 }
 HEAP16[i2 + (i8 + i5 + i10 << 1) >> 1] = i3 & 255;
 i3 = _strlen(HEAP32[i4 >> 2] | 0) | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i11 = 0;
 } else {
  i11 = HEAP32[i4 + 4 >> 2] | 0;
 }
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i12 = 0;
 } else {
  i12 = HEAP32[i4 + 4 >> 2] | 0;
 }
 i4 = i3 + 1 + i11 + i12 | 0;
 i12 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i12 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i12 + 4 >> 2] | 0;
 if ((HEAP32[i12 + 16 >> 2] & 32 | 0) == 0) {
  i11 = HEAP32[i12 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i13 = 0;
  }
  while (1) {
   HEAP16[i2 + (i13 + i4 << 1) >> 1] = HEAP16[i11 + (i13 << 1) >> 1] | 0;
   i13 = i13 + 1 | 0;
   if (i13 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 } else {
  i13 = HEAP32[i12 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i14 = 0;
  }
  while (1) {
   HEAP16[i2 + (i14 + i4 << 1) >> 1] = HEAPU8[i13 + i14 | 0] | 0;
   i14 = i14 + 1 | 0;
   if (i14 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 }
}
function __ZN3WTFplINS_12StringAppendINS1_INS_6StringEPKcEES2_EEcS2_EENS1_INS1_IT_T0_EET1_EERKS9_SA_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 if (!i5) {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = (i7 | 0) == 0;
 if (!i8) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = HEAP8[i2 + 12 | 0] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  i10 = i2 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i4;
 if (!i5) {
  i10 = i4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 4 >> 2] = i6;
 HEAP32[i1 + 8 >> 2] = i7;
 if (!i8) {
  i6 = i7 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 12 | 0] = i9;
 HEAP32[i1 + 16 >> 2] = i2;
 do {
  if (!i3) {
   i1 = i2 | 0;
   i9 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i9 + 2;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i1 >> 2] = i9;
    break;
   }
  }
 } while (0);
 do {
  if (!i8) {
   i2 = i7 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (i5) {
  return;
 }
 i5 = i4 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  return;
 } else {
  HEAP32[i5 >> 2] = i7;
  return;
 }
}
function __ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsIN7WebCore15ProtectionSpaceEEENS1_INS2_10CredentialEEEE10emptyValueEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 24 | 0;
 __ZN7WebCore15ProtectionSpaceC1Ev(i3);
 __ZN7WebCore10CredentialC1Ev(i4);
 i5 = i3 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 >> 2] = i6;
 HEAP32[i1 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 HEAP32[i1 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
 i6 = i3 + 12 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i7;
 HEAP32[i1 + 16 >> 2] = HEAP32[i3 + 16 >> 2];
 HEAP8[i1 + 20 | 0] = HEAP8[i3 + 20 | 0] & 1;
 i3 = i4 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = i7;
 i7 = i4 + 4 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = i3;
 HEAP32[i1 + 32 >> 2] = HEAP32[i4 + 8 >> 2];
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i6 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZNK3WTF12StringAppendINS0_INS0_INS_6StringEPKcEES1_EEcEcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i8 = i5 + 8 | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS_6StringEPKcEES2_EEcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, HEAP8[i2 + 12 | 0] | 0);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = i2 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i8 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i5;
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
function __ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _strlen(i4 | 0) | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = 0;
  } else {
   i9 = HEAP32[i7 + 4 >> 2] | 0;
   i10 = HEAP32[i7 + 8 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i8 = 0;
    break;
   } else {
    i11 = 0;
   }
   while (1) {
    HEAP8[i2 + i11 | 0] = HEAP8[i10 + i11 | 0] | 0;
    i11 = i11 + 1 | 0;
    if (i11 >>> 0 >= i9 >>> 0) {
     break;
    }
   }
   i9 = HEAP32[i6 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i8 = 0;
    break;
   }
   i8 = HEAP32[i9 + 4 >> 2] | 0;
  }
 } while (0);
 _memcpy(i2 + i8 | 0, i4 | 0, i5) | 0;
 i5 = _strlen(HEAP32[i3 >> 2] | 0) | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i12 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i3 = i12 + i5 | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 i12 = HEAP32[i5 + 8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i13 = 0;
 }
 while (1) {
  HEAP8[i2 + (i3 + i13) | 0] = HEAP8[i12 + i13 | 0] | 0;
  i13 = i13 + 1 | 0;
  if (i13 >>> 0 >= i1 >>> 0) {
   break;
  }
 }
 return;
}
function __ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEPKcEES1_EEcEES1_E7writeToEPh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = HEAP8[i1 + 12 | 0] | 0;
 __ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPh(i1 | 0, i2);
 i4 = i1 + 4 | 0;
 i5 = _strlen(HEAP32[i4 >> 2] | 0) | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = HEAP32[i7 + 4 >> 2] | 0;
 }
 i7 = i1 + 8 | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = HEAP32[i9 + 4 >> 2] | 0;
 }
 HEAP8[i2 + (i8 + i5 + i10) | 0] = i3;
 i3 = _strlen(HEAP32[i4 >> 2] | 0) | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i11 = 0;
 } else {
  i11 = HEAP32[i4 + 4 >> 2] | 0;
 }
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i12 = 0;
 } else {
  i12 = HEAP32[i4 + 4 >> 2] | 0;
 }
 i4 = i3 + 1 + i11 + i12 | 0;
 i12 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i12 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i12 + 4 >> 2] | 0;
 i11 = HEAP32[i12 + 8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i13 = 0;
 }
 while (1) {
  HEAP8[i2 + (i4 + i13) | 0] = HEAP8[i11 + i13 | 0] | 0;
  i13 = i13 + 1 | 0;
  if (i13 >>> 0 >= i1 >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCoreL28protectionSpaceMapKeyFromURLERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZNK3WTF6String9substringEjj(i1, i2 | 0, 0, HEAP32[i2 + 36 >> 2] | 0);
 i5 = HEAP32[i2 + 28 >> 2] | 0;
 i2 = i1 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i5 + 1 | 0;
 if ((HEAP32[i6 + 4 >> 2] | 0) >>> 0 <= i7 >>> 0) {
  STACKTOP = i3;
  return;
 }
 i8 = __ZN3WTF10StringImpl11reverseFindEtj(i6, 47, -1) | 0;
 __ZNK3WTF6String9substringEjj(i4, i1, 0, (i8 | 0) == (i5 | 0) ? i7 : i8);
 i8 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i7 | 0;
 i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i8 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF12KeyValuePairIN7WebCore15ProtectionSpaceENS1_10CredentialEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
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
 i2 = HEAP32[i1 + 24 >> 2] | 0;
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
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore17CredentialStorage3getERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCoreL32findDefaultProtectionSpaceForURLERKNS_3URLE(i4, i2);
 if (HEAP8[H_BASE + 16 | 0] | 0) {
  i5 = HEAP32[H_BASE + 40 >> 2] | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(20) | 0;
  i6 = i2;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 40 >> 2] = i6;
  HEAP8[H_BASE + 16 | 0] = 1;
  i5 = i6;
 }
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == ((HEAP32[i5 >> 2] | 0) + ((HEAP32[i5 + 4 >> 2] | 0) * 28 & -1) | 0)) {
  __ZN7WebCore10CredentialC1Ev(i1);
  STACKTOP = i3;
  return;
 }
 if (HEAP8[H_BASE + 24 | 0] | 0) {
  i7 = HEAP32[H_BASE + 48 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(20) | 0;
  i4 = i5;
  _memset(i5 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 48 >> 2] = i4;
  HEAP8[H_BASE + 24 | 0] = 1;
  i7 = i4;
 }
 __ZNK3WTF7HashMapIN7WebCore15ProtectionSpaceENS1_10CredentialENS1_19ProtectionSpaceHashENS_10HashTraitsIS2_EENS5_IS3_EEE3getERKS2_(i1, i7, i6 + 4 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17CredentialStorage14setPrivateModeEb(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if (i1) {
  return;
 }
 if (HEAP8[H_BASE + 24 | 0] | 0) {
  i2 = HEAP32[H_BASE + 48 >> 2] | 0;
 } else {
  i1 = __ZN3WTF10fastMallocEj(20) | 0;
  i3 = i1;
  _memset(i1 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 48 >> 2] = i3;
  HEAP8[H_BASE + 24 | 0] = 1;
  i2 = i3;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i1 | 0) > 0) {
  i4 = 0;
  while (1) {
   if ((HEAP8[i3 + (i4 * 36 & -1) + 20 | 0] & 1) == 0) {
    __ZN3WTF12KeyValuePairIN7WebCore15ProtectionSpaceENS1_10CredentialEED2Ev(i3 + (i4 * 36 & -1) | 0);
   }
   i4 = i4 + 1 | 0;
   if ((i4 | 0) >= (i1 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i3);
 _memset(i2 | 0, 0, 16) | 0;
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
function __ZN7WebCore17CredentialStorage3getERKNS_15ProtectionSpaceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if (HEAP8[H_BASE + 24 | 0] | 0) {
  i3 = HEAP32[H_BASE + 48 >> 2] | 0;
 } else {
  i4 = __ZN3WTF10fastMallocEj(20) | 0;
  i5 = i4;
  _memset(i4 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 48 >> 2] = i5;
  HEAP8[H_BASE + 24 | 0] = 1;
  i3 = i5;
 }
 __ZNK3WTF7HashMapIN7WebCore15ProtectionSpaceENS1_10CredentialENS1_19ProtectionSpaceHashENS_10HashTraitsIS2_EENS5_IS3_EEE3getERKS2_(i1, i3, i2);
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
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS_6StringEPKcEES1_EEcEES1_EEcEcvS1_Ev","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15ProtectionSpaceEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_","__ZN7WebCoreL32findDefaultProtectionSpaceForURLERKNS_3URLE","__ZNK3WTF7HashMapIN7WebCore15ProtectionSpaceENS1_10CredentialENS1_19ProtectionSpaceHashENS_10HashTraitsIS2_EENS5_IS3_EEE3getERKS2_","__ZN3WTF17HashMapTranslatorINS_7HashMapIN7WebCore15ProtectionSpaceENS2_10CredentialENS2_19ProtectionSpaceHashENS_10HashTraitsIS3_EENS6_IS4_EEE18KeyValuePairTraitsES5_E9translateINS_12KeyValuePairIS3_S4_EERKS3_RKS4_EEvRT_OT0_OT1_","__ZN7WebCoreL19originStringFromURLERKNS_3URLE","__ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEPKcEES1_EEcEES1_E7writeToEPh","__ZN7WebCoreL28protectionSpaceMapKeyFromURLERKNS_3URLE","__ZN7WebCore17CredentialStorage3getERKNS_15ProtectionSpaceE","__ZN7WebCore17CredentialStorage14setPrivateModeEb","_memset","_memcpy","__ZN7WebCore17CredentialStorage6removeERKNS_15ProtectionSpaceE","__ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEPKcEES1_EEcEES1_E7writeToEPt","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","__ZN3WTF9HashTableIN7WebCore15ProtectionSpaceENS_12KeyValuePairIS2_NS1_10CredentialEEENS_24KeyValuePairKeyExtractorIS5_EENS1_19ProtectionSpaceHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS8_EES2_EEPS5_RKT0_","__ZNK3WTF12StringAppendINS0_INS0_INS_6StringEPKcEES1_EEcEcvS1_Ev","__ZN7WebCore17CredentialStorage3setERKNS_10CredentialERKNS_15ProtectionSpaceERKNS_3URLE","__ZN3WTFplINS_12StringAppendINS1_INS1_INS_6StringEPKcEES2_EEcEES2_cEENS1_INS1_IT_T0_EET1_EERKSA_SB_","__ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS_6StringEPKcEES2_EEcEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15ProtectionSpaceEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E8reinsertEOS5_","__ZN3WTFplINS_12StringAppendINS1_INS_6StringEPKcEES2_EEcS2_EENS1_INS1_IT_T0_EET1_EERKS9_SA_","__ZN7WebCore17CredentialStorage3setERKNS_10CredentialERKNS_3URLE","__ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS_6StringEPKcEES2_EEcEES2_EEcEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN3WTF9HashTableIN7WebCore15ProtectionSpaceENS_12KeyValuePairIS2_NS1_10CredentialEEENS_24KeyValuePairKeyExtractorIS5_EENS1_19ProtectionSpaceHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_","__ZN7WebCore19ProtectionSpaceHash4hashERKNS_15ProtectionSpaceE","__ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsIN7WebCore15ProtectionSpaceEEENS1_INS2_10CredentialEEEE10emptyValueEv","__ZN3WTF9HashTableIN7WebCore15ProtectionSpaceENS_12KeyValuePairIS2_NS1_10CredentialEEENS_24KeyValuePairKeyExtractorIS5_EENS1_19ProtectionSpaceHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_","__ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPt","__ZN3WTF9HashTableIN7WebCore15ProtectionSpaceENS_12KeyValuePairIS2_NS1_10CredentialEEENS_24KeyValuePairKeyExtractorIS5_EENS1_19ProtectionSpaceHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EES2_EENSt3__14pairIPS5_bEERKT0_","__ZN7WebCore17CredentialStorage3getERKNS_3URLE","__ZN3WTF12KeyValuePairIN7WebCore15ProtectionSpaceENS1_10CredentialEED2Ev","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15ProtectionSpaceEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_","__ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPh"]

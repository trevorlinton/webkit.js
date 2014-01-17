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
H_BASE = parentModule["_malloc"](24 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 24;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore15SVGAnimatedTypeC1ENS_20AnimatedPropertyTypeE;
var __ZN7WebCore15SVGAnimatedTypeD1Ev;
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
  var __ZTVN7WebCore15SVGAnimatedTypeE=(H_BASE+8)|0;
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
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore15SVGAnimatedType13valueAsStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i4 = i3 | 0;
 i5 = i3 + 32 | 0;
 i6 = i3 + 56 | 0;
 i7 = i3 + 80 | 0;
 i8 = i3 + 96 | 0;
 i9 = i3 + 104 | 0;
 i10 = i3 + 112 | 0;
 i11 = i3 + 120 | 0;
 switch (HEAP32[i2 + 4 >> 2] | 0) {
 case 6:
  {
   __ZNK7WebCore9SVGLength13valueAsStringEv(i1, HEAP32[i2 + 8 >> 2] | 0);
   STACKTOP = i3;
   return;
  }
 case 14:
  {
   i12 = i2 + 8 | 0;
   __ZN3WTF6String6numberEdjNS_29TrailingZerosTruncatingPolicyE(i8, +HEAPF32[HEAP32[i12 >> 2] >> 2], 6, 1);
   i13 = i8 | 0;
   i8 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i8 | 0) == 0) {
     i14 = 0;
    } else {
     i15 = i8 | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     i17 = i16 + 2 | 0;
     HEAP32[i15 >> 2] = i16 + 4;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      i14 = i8;
      break;
     } else {
      HEAP32[i15 >> 2] = i17;
      i14 = i8;
      break;
     }
    }
   } while (0);
   __ZN3WTF6String6numberEdjNS_29TrailingZerosTruncatingPolicyE(i9, +HEAPF32[(HEAP32[i12 >> 2] | 0) + 4 >> 2], 6, 1);
   i8 = (i14 | 0) == 0;
   if (!i8) {
    i17 = i14 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
   }
   i17 = i9 | 0;
   i9 = HEAP32[i17 >> 2] | 0;
   i15 = (i9 | 0) == 0;
   if (!i15) {
    i16 = i9 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   }
   if (!i8) {
    i16 = i14 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   }
   do {
    if (!i15) {
     i16 = i9 | 0;
     i18 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = i18 + 2;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i16 >> 2] = i18;
      break;
     }
    }
   } while (0);
   if (!i8) {
    i18 = i14 | 0;
    i16 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
    if ((i16 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i14);
     i19 = HEAP32[i18 >> 2] | 0;
    } else {
     HEAP32[i18 >> 2] = i16;
     i19 = i16;
    }
    HEAP32[i18 >> 2] = i19 + 2;
   }
   if (!i15) {
    i19 = i9 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
   }
   i19 = i7 | 0;
   HEAP32[i19 >> 2] = i14;
   if (!i8) {
    i18 = i14 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
   }
   HEAP8[i7 + 4 | 0] = 32;
   i18 = i7 + 8 | 0;
   HEAP32[i18 >> 2] = i9;
   do {
    if (i15) {
     HEAP8[i7 + 12 | 0] = 32;
    } else {
     i16 = i9 | 0;
     i20 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = i20 + 2;
     HEAP8[i7 + 12 | 0] = 32;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i16 >> 2] = i20;
      break;
     }
    }
   } while (0);
   do {
    if (!i8) {
     i20 = i14 | 0;
     i16 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i20 >> 2] = i16;
      break;
     }
    }
   } while (0);
   __ZN3WTF6String6numberEdjNS_29TrailingZerosTruncatingPolicyE(i10, +HEAPF32[(HEAP32[i12 >> 2] | 0) + 8 >> 2], 6, 1);
   __ZN3WTFplINS_12StringAppendINS1_INS_6StringEcEES2_EEcS2_EENS1_INS1_IT_T0_EET1_EERKS7_S8_(i6, i7, i10);
   __ZN3WTFplINS_12StringAppendINS1_INS1_INS_6StringEcEES2_EEcEES2_cEENS1_INS1_IT_T0_EET1_EERKS8_S9_(i5, i6, 32);
   __ZN3WTF6String6numberEdjNS_29TrailingZerosTruncatingPolicyE(i11, +HEAPF32[(HEAP32[i12 >> 2] | 0) + 12 >> 2], 6, 1);
   __ZN3WTFplINS_12StringAppendINS1_INS1_INS1_INS_6StringEcEES2_EEcEES2_EEcS2_EENS1_INS1_IT_T0_EET1_EERKS9_SA_(i4, i5, i11);
   __ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_INS_6StringEcEES1_EEcEES1_EEcEES1_EcvS1_Ev(i1, i4);
   i12 = HEAP32[i4 + 24 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i7 = i12 | 0;
     i16 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i7 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i4 + 16 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i16 = i12 | 0;
     i7 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i16 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i4 + 8 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i7 = i12 | 0;
     i16 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i7 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i4 = i12 | 0;
     i16 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i4 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i11 = i12 | 0;
     i16 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i11 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i5 + 16 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i16 = i12 | 0;
     i11 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i16 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i5 + 8 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i11 = i12 | 0;
     i16 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i11 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i5 = i12 | 0;
     i16 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i5 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i6 + 16 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i16 = i12 | 0;
     i5 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i16 >> 2] = i5;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i6 + 8 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i5 = i12 | 0;
     i16 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i5 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i6 = i12 | 0;
     i16 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i6 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i10 = i12 | 0;
     i16 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i10 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i18 = i12 | 0;
     i16 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i18 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i19 = i12 | 0;
     i16 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i19 >> 2] = i16;
      break;
     }
    }
   } while (0);
   do {
    if (!i15) {
     i12 = i9 | 0;
     i16 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i12 >> 2] = i16;
      break;
     }
    }
   } while (0);
   do {
    if (!i8) {
     i9 = i14 | 0;
     i15 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i9 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i15 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i17 = i15 | 0;
     i9 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i17 >> 2] = i9;
      break;
     }
    }
   } while (0);
   do {
    if (!i8) {
     i15 = i14 | 0;
     i9 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i15 >> 2] = i9;
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
   i8 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i13 >> 2] = i8;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 2:
  {
   __ZNK7WebCore5Color10serializedEv(i1, HEAP32[i2 + 8 >> 2] | 0);
   STACKTOP = i3;
   return;
  }
 case 7:
  {
   __ZNK7WebCore13SVGLengthList13valueAsStringEv(i1, HEAP32[i2 + 8 >> 2] | 0);
   STACKTOP = i3;
   return;
  }
 case 8:
  {
   __ZN3WTF6String6numberEdjNS_29TrailingZerosTruncatingPolicyE(i1, +HEAPF32[HEAP32[i2 + 8 >> 2] >> 2], 6, 1);
   STACKTOP = i3;
   return;
  }
 case 15:
  {
   i8 = HEAP32[HEAP32[i2 + 8 >> 2] >> 2] | 0;
   HEAP32[i1 >> 2] = i8;
   if ((i8 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i2 = i8 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
   STACKTOP = i3;
   return;
  }
 default:
  {
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i3;
   return;
  }
 }
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS1_INS_6StringEcEES2_EEcEES2_EEcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 if (i9) {
  i10 = 3;
 } else {
  i10 = (HEAP32[i8 + 4 >> 2] | 0) + 3 | 0;
 }
 i11 = i2 + 8 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = (i12 | 0) == 0;
 if (i13) {
  i14 = 0;
 } else {
  i14 = HEAP32[i12 + 4 >> 2] | 0;
 }
 i15 = i2 + 16 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 i17 = (i16 | 0) == 0;
 if (i17) {
  i18 = 0;
 } else {
  i18 = HEAP32[i16 + 4 >> 2] | 0;
 }
 i19 = i3 | 0;
 i3 = HEAP32[i19 >> 2] | 0;
 i20 = (i3 | 0) == 0;
 if (i20) {
  i21 = 0;
 } else {
  i21 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i22 = _llvm_uadd_with_overflow_i32(i14 + i10 + i18 | 0, i21 | 0) | 0;
 i21 = i22;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i9) {
  i23 = 13;
 } else {
  if ((HEAP32[i8 + 16 >> 2] & 32 | 0) != 0) {
   i23 = 13;
  }
 }
 do {
  if ((i23 | 0) == 13) {
   if (!i13) {
    if ((HEAP32[i12 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   if (!i17) {
    if ((HEAP32[i16 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   if (!i20) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i21 | 0) == 0) {
     i8 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i8 | 0) == 0) {
      i23 = 41;
      break;
     }
     i9 = i8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
     i24 = i8;
     i25 = 0;
    } else {
     if (i21 >>> 0 > 4294967275 >>> 0) {
      i23 = 41;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i21 + 20 | 0);
     i8 = i6 | 0;
     i9 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = 0;
     if ((i9 | 0) == 0) {
      i23 = 41;
      break;
     }
     i8 = i9 + 20 | 0;
     HEAP32[i9 >> 2] = 2;
     HEAP32[i9 + 4 >> 2] = i21;
     HEAP32[i9 + 8 >> 2] = i8;
     HEAP32[i9 + 12 >> 2] = 0;
     HEAP32[i9 + 16 >> 2] = 32;
     i24 = i9;
     i25 = i8;
    }
   } while (0);
   if ((i23 | 0) == 41) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i8 = HEAP8[i2 + 20 | 0] | 0;
   __ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEcEES1_EEcEES1_E7writeToEPh(i2 | 0, i25);
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i26 = 2;
   } else {
    i26 = (HEAP32[i9 + 4 >> 2] | 0) + 2 | 0;
   }
   i9 = HEAP32[i11 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i27 = 0;
   } else {
    i27 = HEAP32[i9 + 4 >> 2] | 0;
   }
   i9 = HEAP32[i15 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i28 = 0;
   } else {
    i28 = HEAP32[i9 + 4 >> 2] | 0;
   }
   HEAP8[i25 + (i27 + i26 + i28) | 0] = i8;
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i29 = 3;
   } else {
    i29 = (HEAP32[i8 + 4 >> 2] | 0) + 3 | 0;
   }
   i8 = HEAP32[i11 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i30 = 0;
   } else {
    i30 = HEAP32[i8 + 4 >> 2] | 0;
   }
   i8 = HEAP32[i15 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i31 = 0;
   } else {
    i31 = HEAP32[i8 + 4 >> 2] | 0;
   }
   i8 = i30 + i29 + i31 | 0;
   i9 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i22 = HEAP32[i9 + 4 >> 2] | 0;
     i18 = HEAP32[i9 + 8 >> 2] | 0;
     if ((i22 | 0) == 0) {
      break;
     } else {
      i32 = 0;
     }
     while (1) {
      HEAP8[i25 + (i8 + i32) | 0] = HEAP8[i18 + i32 | 0] | 0;
      i32 = i32 + 1 | 0;
      if (i32 >>> 0 >= i22 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i24;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i21 | 0) == 0) {
   i24 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i24 | 0) == 0) {
    i23 = 67;
    break;
   }
   i32 = i24 | 0;
   HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 2;
   i33 = i24;
   i34 = 0;
  } else {
   if (i21 >>> 0 > 2147483637 >>> 0) {
    i23 = 67;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i21 << 1) + 20 | 0);
   i24 = i5 | 0;
   i32 = HEAP32[i24 >> 2] | 0;
   HEAP32[i24 >> 2] = 0;
   if ((i32 | 0) == 0) {
    i23 = 67;
    break;
   }
   i24 = i32 + 20 | 0;
   HEAP32[i32 >> 2] = 2;
   HEAP32[i32 + 4 >> 2] = i21;
   HEAP32[i32 + 8 >> 2] = i24;
   HEAP32[i32 + 12 >> 2] = 0;
   HEAP32[i32 + 16 >> 2] = 0;
   i33 = i32;
   i34 = i24;
  }
 } while (0);
 if ((i23 | 0) == 67) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i23 = HEAP8[i2 + 20 | 0] | 0;
 __ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEcEES1_EEcEES1_E7writeToEPt(i2 | 0, i34);
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i35 = 2;
 } else {
  i35 = (HEAP32[i2 + 4 >> 2] | 0) + 2 | 0;
 }
 i2 = HEAP32[i11 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i36 = 0;
 } else {
  i36 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i2 = HEAP32[i15 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i37 = 0;
 } else {
  i37 = HEAP32[i2 + 4 >> 2] | 0;
 }
 HEAP16[i34 + (i36 + i35 + i37 << 1) >> 1] = i23 & 255;
 i23 = HEAP32[i7 >> 2] | 0;
 if ((i23 | 0) == 0) {
  i38 = 3;
 } else {
  i38 = (HEAP32[i23 + 4 >> 2] | 0) + 3 | 0;
 }
 i23 = HEAP32[i11 >> 2] | 0;
 if ((i23 | 0) == 0) {
  i39 = 0;
 } else {
  i39 = HEAP32[i23 + 4 >> 2] | 0;
 }
 i23 = HEAP32[i15 >> 2] | 0;
 if ((i23 | 0) == 0) {
  i40 = 0;
 } else {
  i40 = HEAP32[i23 + 4 >> 2] | 0;
 }
 i23 = i39 + i38 + i40 | 0;
 i40 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i40 | 0) != 0) {
   i19 = HEAP32[i40 + 4 >> 2] | 0;
   if ((HEAP32[i40 + 16 >> 2] & 32 | 0) == 0) {
    i38 = HEAP32[i40 + 8 >> 2] | 0;
    if ((i19 | 0) == 0) {
     break;
    } else {
     i41 = 0;
    }
    while (1) {
     HEAP16[i34 + (i41 + i23 << 1) >> 1] = HEAP16[i38 + (i41 << 1) >> 1] | 0;
     i41 = i41 + 1 | 0;
     if (i41 >>> 0 >= i19 >>> 0) {
      break;
     }
    }
   } else {
    i38 = HEAP32[i40 + 8 >> 2] | 0;
    if ((i19 | 0) == 0) {
     break;
    } else {
     i42 = 0;
    }
    while (1) {
     HEAP16[i34 + (i42 + i23 << 1) >> 1] = HEAPU8[i38 + i42 | 0] | 0;
     i42 = i42 + 1 | 0;
     if (i42 >>> 0 >= i19 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i33;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15SVGAnimatedTypeD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 switch (HEAP32[i1 + 4 >> 2] | 0) {
 case 0:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZdlPv(i2);
   return;
  }
 case 1:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZdlPv(i2);
   return;
  }
 case 2:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 case 3:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZdlPv(i2);
   return;
  }
 case 4:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZdlPv(i2);
   return;
  }
 case 5:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZdlPv(i2);
   return;
  }
 case 6:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 case 7:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   i3 = i2 + 8 | 0;
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    HEAP32[i3 >> 2] = 0;
   }
   i3 = i2 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = 0;
    HEAP32[i2 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 case 8:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZdlPv(i2);
   return;
  }
 case 9:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   i4 = i2 + 8 | 0;
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
   }
   i4 = i2 | 0;
   i3 = HEAP32[i4 >> 2] | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
    HEAP32[i2 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i3);
   }
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 case 10:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZdlPv(i2);
   return;
  }
 case 11:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   i3 = i2 + 8 | 0;
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    HEAP32[i3 >> 2] = 0;
   }
   i3 = i2 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = 0;
    HEAP32[i2 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 case 12:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   i4 = i2 + 8 | 0;
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
   }
   i4 = i2 | 0;
   i3 = HEAP32[i4 >> 2] | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
    HEAP32[i2 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i3);
   }
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 case 13:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 case 14:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZdlPv(i2);
   return;
  }
 case 15:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   i3 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i4 = i3 | 0;
     i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i4 >> 2] = i5;
      break;
     }
    }
   } while (0);
   __ZdlPv(i2);
   return;
  }
 case 16:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   i1 = i2 + 8 | 0;
   if ((HEAP32[i1 >> 2] | 0) != 0) {
    HEAP32[i1 >> 2] = 0;
   }
   i1 = i2 | 0;
   i3 = HEAP32[i1 >> 2] | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i1 >> 2] = 0;
    HEAP32[i2 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i3);
   }
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 default:
  {
   return;
  }
 }
}
function __ZN7WebCore15SVGAnimatedTypeD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 switch (HEAP32[i1 + 4 >> 2] | 0) {
 case 0:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZdlPv(i2);
   return;
  }
 case 1:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZdlPv(i2);
   return;
  }
 case 2:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 case 3:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZdlPv(i2);
   return;
  }
 case 4:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZdlPv(i2);
   return;
  }
 case 5:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZdlPv(i2);
   return;
  }
 case 6:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 case 7:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   i3 = i2 + 8 | 0;
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    HEAP32[i3 >> 2] = 0;
   }
   i3 = i2 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = 0;
    HEAP32[i2 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 case 8:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZdlPv(i2);
   return;
  }
 case 9:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   i4 = i2 + 8 | 0;
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
   }
   i4 = i2 | 0;
   i3 = HEAP32[i4 >> 2] | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
    HEAP32[i2 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i3);
   }
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 case 10:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZdlPv(i2);
   return;
  }
 case 11:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   i3 = i2 + 8 | 0;
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    HEAP32[i3 >> 2] = 0;
   }
   i3 = i2 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = 0;
    HEAP32[i2 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 case 12:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   i4 = i2 + 8 | 0;
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
   }
   i4 = i2 | 0;
   i3 = HEAP32[i4 >> 2] | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
    HEAP32[i2 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i3);
   }
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 case 13:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 case 14:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZdlPv(i2);
   return;
  }
 case 15:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   i3 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i4 = i3 | 0;
     i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i4 >> 2] = i5;
      break;
     }
    }
   } while (0);
   __ZdlPv(i2);
   return;
  }
 case 16:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   i1 = i2 + 8 | 0;
   if ((HEAP32[i1 >> 2] | 0) != 0) {
    HEAP32[i1 >> 2] = 0;
   }
   i1 = i2 | 0;
   i3 = HEAP32[i1 >> 2] | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i1 >> 2] = 0;
    HEAP32[i2 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i3);
   }
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 default:
  {
   return;
  }
 }
}
function __ZN7WebCore15SVGAnimatedType16setValueAsStringERKNS_13QualifiedNameERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 switch (HEAP32[i1 + 4 >> 2] | 0) {
 case 2:
  {
   i7 = HEAP32[i1 + 8 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i8 | 0) == 0) {
     i9 = 4;
    } else {
     if ((HEAP32[i8 + 4 >> 2] | 0) == 0) {
      i9 = 4;
      break;
     }
     __ZN7WebCore8SVGColor23colorFromRGBColorStringERKN3WTF6StringE(i5, i3);
    }
   } while (0);
   if ((i9 | 0) == 4) {
    HEAP32[i5 >> 2] = 0;
    HEAP8[i5 + 4 | 0] = 0;
   }
   i9 = i7;
   i7 = i5;
   HEAP32[i9 >> 2] = HEAP32[i7 >> 2];
   HEAP8[i9 + 4 | 0] = HEAP8[i7 + 4 | 0] | 0;
   i10 = 1;
   STACKTOP = i4;
   return i10 | 0;
  }
 case 6:
  {
   HEAP32[i6 >> 2] = 0;
   __ZN7WebCore9SVGLength16setValueAsStringERKN3WTF6StringENS_13SVGLengthModeERi(HEAP32[i1 + 8 >> 2] | 0, i3, __ZN7WebCore9SVGLength36lengthModeForAnimatedLengthAttributeERKNS_13QualifiedNameE(i2) | 0, i6);
   i10 = (HEAP32[i6 >> 2] | 0) == 0;
   STACKTOP = i4;
   return i10 | 0;
  }
 case 7:
  {
   __ZN7WebCore13SVGLengthList5parseERKN3WTF6StringENS_13SVGLengthModeE(HEAP32[i1 + 8 >> 2] | 0, i3, __ZN7WebCore9SVGLength36lengthModeForAnimatedLengthAttributeERKNS_13QualifiedNameE(i2) | 0);
   i10 = 1;
   STACKTOP = i4;
   return i10 | 0;
  }
 case 8:
  {
   __ZN7WebCore21parseNumberFromStringERKN3WTF6StringERfb(i3, HEAP32[i1 + 8 >> 2] | 0, 1) | 0;
   i10 = 1;
   STACKTOP = i4;
   return i10 | 0;
  }
 case 14:
  {
   __ZN7WebCore9parseRectERKN3WTF6StringERNS_9FloatRectE(i3, HEAP32[i1 + 8 >> 2] | 0) | 0;
   i10 = 1;
   STACKTOP = i4;
   return i10 | 0;
  }
 case 15:
  {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   i1 = HEAP32[i3 >> 2] | 0;
   if ((i1 | 0) != 0) {
    i3 = i1 | 0;
    HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
   }
   i3 = i2 | 0;
   i2 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i1;
   if ((i2 | 0) == 0) {
    i10 = 1;
    STACKTOP = i4;
    return i10 | 0;
   }
   i1 = i2 | 0;
   i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    i10 = 1;
    STACKTOP = i4;
    return i10 | 0;
   } else {
    HEAP32[i1 >> 2] = i3;
    i10 = 1;
    STACKTOP = i4;
    return i10 | 0;
   }
   break;
  }
 default:
  {
   i10 = 1;
   STACKTOP = i4;
   return i10 | 0;
  }
 }
 return 0;
}
function __ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_INS_6StringEcEES1_EEcEES1_EEcEES1_EcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 32 | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP8[i5 + 4 | 0] = HEAP8[i2 + 4 | 0] | 0;
 i9 = i5 + 8 | 0;
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP8[i5 + 12 | 0] = HEAP8[i2 + 12 | 0] | 0;
 i10 = i5 + 16 | 0;
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 HEAP32[i10 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i11 = i8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 HEAP8[i5 + 20 | 0] = HEAP8[i2 + 20 | 0] | 0;
 i11 = i6 | 0;
 i8 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i11 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS1_INS_6StringEcEES2_EEcEES2_EEcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i5 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 | 0;
   i5 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i10 >> 2] = i5;
    break;
   }
  }
 } while (0);
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
function __ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEcEES1_EEcEES1_E7writeToEPh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = HEAP8[i1 + 12 | 0] | 0;
 i4 = HEAP8[i1 + 4 | 0] | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i7 = 0;
  } else {
   i8 = HEAP32[i6 + 4 >> 2] | 0;
   i9 = HEAP32[i6 + 8 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i7 = 0;
    break;
   } else {
    i10 = 0;
   }
   while (1) {
    HEAP8[i2 + i10 | 0] = HEAP8[i9 + i10 | 0] | 0;
    i10 = i10 + 1 | 0;
    if (i10 >>> 0 >= i8 >>> 0) {
     break;
    }
   }
   i8 = HEAP32[i5 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i7 = 0;
    break;
   }
   i7 = HEAP32[i8 + 4 >> 2] | 0;
  }
 } while (0);
 HEAP8[i2 + i7 | 0] = i4;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i11 = 1;
 } else {
  i11 = (HEAP32[i4 + 4 >> 2] | 0) + 1 | 0;
 }
 i7 = i1 + 8 | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i12 = i4;
  } else {
   i6 = HEAP32[i10 + 4 >> 2] | 0;
   i8 = HEAP32[i10 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i12 = i4;
    break;
   } else {
    i13 = 0;
   }
   while (1) {
    HEAP8[i2 + (i13 + i11) | 0] = HEAP8[i8 + i13 | 0] | 0;
    i13 = i13 + 1 | 0;
    if (i13 >>> 0 >= i6 >>> 0) {
     break;
    }
   }
   i12 = HEAP32[i5 >> 2] | 0;
  }
 } while (0);
 if ((i12 | 0) == 0) {
  i14 = 1;
 } else {
  i14 = (HEAP32[i12 + 4 >> 2] | 0) + 1 | 0;
 }
 i12 = HEAP32[i7 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i15 = 0;
 } else {
  i15 = HEAP32[i12 + 4 >> 2] | 0;
 }
 HEAP8[i2 + (i15 + i14) | 0] = i3;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i16 = 2;
 } else {
  i16 = (HEAP32[i3 + 4 >> 2] | 0) + 2 | 0;
 }
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i17 = 0;
 } else {
  i17 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i3 = i17 + i16 | 0;
 i16 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i16 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i16 + 4 >> 2] | 0;
 i17 = HEAP32[i16 + 8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i18 = 0;
 }
 while (1) {
  HEAP8[i2 + (i3 + i18) | 0] = HEAP8[i17 + i18 | 0] | 0;
  i18 = i18 + 1 | 0;
  if (i18 >>> 0 >= i1 >>> 0) {
   break;
  }
 }
 return;
}
function __ZN3WTFplINS_12StringAppendINS1_INS1_INS1_INS_6StringEcEES2_EEcEES2_EEcS2_EENS1_INS1_IT_T0_EET1_EERKS9_SA_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 if (!i5) {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = HEAP8[i2 + 4 | 0] | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = (i7 | 0) == 0;
 if (!i8) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = HEAP8[i2 + 12 | 0] | 0;
 i10 = HEAP32[i2 + 16 >> 2] | 0;
 i11 = (i10 | 0) == 0;
 if (!i11) {
  i12 = i10 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = HEAP8[i2 + 20 | 0] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  i13 = i2 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i4;
 if (!i5) {
  i13 = i4 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 4 | 0] = i6;
 HEAP32[i1 + 8 >> 2] = i7;
 if (!i8) {
  i6 = i7 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 12 | 0] = i9;
 HEAP32[i1 + 16 >> 2] = i10;
 if (!i11) {
  i9 = i10 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 20 | 0] = i12;
 HEAP32[i1 + 24 >> 2] = i2;
 do {
  if (!i3) {
   i1 = i2 | 0;
   i12 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i12 + 2;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i1 >> 2] = i12;
    break;
   }
  }
 } while (0);
 do {
  if (!i11) {
   i2 = i10 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 do {
  if (!i8) {
   i10 = i7 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i11;
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
function __ZN3WTF12StringAppendINS0_INS_6StringEcEES1_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = HEAP8[i1 + 4 | 0] | 0;
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = 0;
  } else {
   i7 = HEAP32[i5 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i5 + 16 >> 2] & 32 | 0) == 0) {
     i8 = HEAP32[i5 + 8 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     } else {
      i9 = 0;
     }
     while (1) {
      HEAP16[i2 + (i9 << 1) >> 1] = HEAP16[i8 + (i9 << 1) >> 1] | 0;
      i9 = i9 + 1 | 0;
      if (i9 >>> 0 >= i7 >>> 0) {
       break;
      }
     }
    } else {
     i8 = HEAP32[i5 + 8 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     } else {
      i10 = 0;
     }
     while (1) {
      HEAP16[i2 + (i10 << 1) >> 1] = HEAPU8[i8 + i10 | 0] | 0;
      i10 = i10 + 1 | 0;
      if (i10 >>> 0 >= i7 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i7 = HEAP32[i4 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i6 = 0;
    break;
   }
   i6 = HEAP32[i7 + 4 >> 2] | 0;
  }
 } while (0);
 HEAP16[i2 + (i6 << 1) >> 1] = i3 & 255;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i11 = 1;
 } else {
  i11 = (HEAP32[i3 + 4 >> 2] | 0) + 1 | 0;
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
  i4 = HEAP32[i3 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i12 = 0;
  }
  while (1) {
   HEAP16[i2 + (i12 + i11 << 1) >> 1] = HEAP16[i4 + (i12 << 1) >> 1] | 0;
   i12 = i12 + 1 | 0;
   if (i12 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 } else {
  i12 = HEAP32[i3 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i13 = 0;
  }
  while (1) {
   HEAP16[i2 + (i13 + i11 << 1) >> 1] = HEAPU8[i12 + i13 | 0] | 0;
   i13 = i13 + 1 | 0;
   if (i13 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 }
}
function __ZN3WTFplINS_12StringAppendINS1_INS1_INS_6StringEcEES2_EEcEES2_cEENS1_INS1_IT_T0_EET1_EERKS8_S9_(i1, i2, i3) {
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
 i6 = HEAP8[i2 + 4 | 0] | 0;
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
 HEAP8[i1 + 4 | 0] = i6;
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
function __ZN3WTFplINS_12StringAppendINS1_INS_6StringEcEES2_EEcS2_EENS1_INS1_IT_T0_EET1_EERKS7_S8_(i1, i2, i3) {
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
 i6 = HEAP8[i2 + 4 | 0] | 0;
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
 HEAP8[i1 + 4 | 0] = i6;
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
function __ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEcEES1_EEcEES1_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = HEAP8[i1 + 12 | 0] | 0;
 __ZN3WTF12StringAppendINS0_INS_6StringEcEES1_E7writeToEPt(i1 | 0, i2);
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 1;
 } else {
  i6 = (HEAP32[i5 + 4 >> 2] | 0) + 1 | 0;
 }
 i5 = i1 + 8 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = HEAP32[i7 + 4 >> 2] | 0;
 }
 HEAP16[i2 + (i8 + i6 << 1) >> 1] = i3 & 255;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i9 = 2;
 } else {
  i9 = (HEAP32[i3 + 4 >> 2] | 0) + 2 | 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i3 = i10 + i9 | 0;
 i9 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i9 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i9 + 4 >> 2] | 0;
 if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
  i10 = HEAP32[i9 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i11 = 0;
  }
  while (1) {
   HEAP16[i2 + (i11 + i3 << 1) >> 1] = HEAP16[i10 + (i11 << 1) >> 1] | 0;
   i11 = i11 + 1 | 0;
   if (i11 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 } else {
  i11 = HEAP32[i9 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i12 = 0;
  }
  while (1) {
   HEAP16[i2 + (i12 + i3 << 1) >> 1] = HEAPU8[i11 + i12 | 0] | 0;
   i12 = i12 + 1 | 0;
   if (i12 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
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
function __ZN7WebCore15SVGAnimatedType25createPreserveAspectRatioENSt3__110unique_ptrINS_22SVGPreserveAspectRatioENS1_14default_deleteIS3_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i3 + 4 >> 2] = 13;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = i3;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = i2;
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
function __ZN7WebCore15SVGAnimatedType25createAngleAndEnumerationENSt3__110unique_ptrINS1_4pairINS_8SVGAngleEjEENS1_14default_deleteIS5_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = i3;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = i2;
 return;
}
function __ZN7WebCore15SVGAnimatedType28createIntegerOptionalIntegerENSt3__110unique_ptrINS1_4pairIiiEENS1_14default_deleteIS4_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i3 + 4 >> 2] = 5;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = i3;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = i2;
 return;
}
function __ZN7WebCore15SVGAnimatedType19createTransformListENSt3__110unique_ptrINS_16SVGTransformListENS1_14default_deleteIS3_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i3 + 4 >> 2] = 16;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = i3;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = i2;
 return;
}
function __ZN7WebCore15SVGAnimatedType26createNumberOptionalNumberENSt3__110unique_ptrINS1_4pairIffEENS1_14default_deleteIS4_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i3 + 4 >> 2] = 10;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = i3;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = i2;
 return;
}
function __ZN7WebCore15SVGAnimatedType16createNumberListENSt3__110unique_ptrINS_13SVGNumberListENS1_14default_deleteIS3_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i3 + 4 >> 2] = 9;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = i3;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = i2;
 return;
}
function __ZN7WebCore15SVGAnimatedType16createLengthListENSt3__110unique_ptrINS_13SVGLengthListENS1_14default_deleteIS3_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i3 + 4 >> 2] = 7;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = i3;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = i2;
 return;
}
function __ZN7WebCore15SVGAnimatedType15createPointListENSt3__110unique_ptrINS_12SVGPointListENS1_14default_deleteIS3_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i3 + 4 >> 2] = 12;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = i3;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = i2;
 return;
}
function __ZN7WebCore15SVGAnimatedType10createPathENSt3__110unique_ptrINS_17SVGPathByteStreamENS1_14default_deleteIS3_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i3 + 4 >> 2] = 11;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = i3;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = i2;
 return;
}
function __ZN7WebCore15SVGAnimatedType12createStringENSt3__110unique_ptrIN3WTF6StringENS1_14default_deleteIS4_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i3 + 4 >> 2] = 15;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = i3;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = i2;
 return;
}
function __ZN7WebCore15SVGAnimatedType12createLengthENSt3__110unique_ptrINS_9SVGLengthENS1_14default_deleteIS3_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i3 + 4 >> 2] = 6;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = i3;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = i2;
 return;
}
function __ZN7WebCore15SVGAnimatedType10createRectENSt3__110unique_ptrINS_9FloatRectENS1_14default_deleteIS3_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i3 + 4 >> 2] = 14;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = i3;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = i2;
 return;
}
function __ZN7WebCore15SVGAnimatedType11createColorENSt3__110unique_ptrINS_5ColorENS1_14default_deleteIS3_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i3 + 4 >> 2] = 2;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = i3;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = i2;
 return;
}
function __ZN7WebCore15SVGAnimatedType17createEnumerationENSt3__110unique_ptrIjNS1_14default_deleteIjEEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i3 + 4 >> 2] = 3;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = i3;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = i2;
 return;
}
function __ZN7WebCore15SVGAnimatedType13createIntegerENSt3__110unique_ptrIiNS1_14default_deleteIiEEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i3 + 4 >> 2] = 4;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = i3;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = i2;
 return;
}
function __ZN7WebCore15SVGAnimatedType13createBooleanENSt3__110unique_ptrIbNS1_14default_deleteIbEEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i3 + 4 >> 2] = 1;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = i3;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = i2;
 return;
}
function __ZN7WebCore15SVGAnimatedType12createNumberENSt3__110unique_ptrIfNS1_14default_deleteIfEEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i3 + 4 >> 2] = 8;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = i3;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = i2;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore15SVGAnimatedTypeC2ENS_20AnimatedPropertyTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = 0;
 return;
}
function __ZN7WebCore15SVGAnimatedTypeC1ENS_20AnimatedPropertyTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = 0;
 return;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore15SVGAnimatedType15supportsAnimValENS_20AnimatedPropertyTypeE(i1) {
 i1 = i1 | 0;
 return (i1 | 0) != 2 & (i1 | 0) != 17 | 0;
}
function __ZN7WebCore15SVGAnimatedTypeD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SVGAnimatedTypeD2Ev(i1);
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 4;
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
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore15SVGAnimatedTypeD2Ev,b0,__ZN7WebCore15SVGAnimatedTypeD0Ev,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore15SVGAnimatedTypeC2ENS_20AnimatedPropertyTypeE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore15SVGAnimatedType11createColorENSt3__110unique_ptrINS_5ColorENS1_14default_deleteIS3_EEEE","__ZN7WebCore15SVGAnimatedType13valueAsStringEv","__ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEcEES1_EEcEES1_E7writeToEPh","__ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEcEES1_EEcEES1_E7writeToEPt","_strlen","__ZN7WebCore15SVGAnimatedType28createIntegerOptionalIntegerENSt3__110unique_ptrINS1_4pairIiiEENS1_14default_deleteIS4_EEEE","__ZN7WebCore15SVGAnimatedType12createNumberENSt3__110unique_ptrIfNS1_14default_deleteIfEEEE","__ZN7WebCore15SVGAnimatedType17createEnumerationENSt3__110unique_ptrIjNS1_14default_deleteIjEEEE","__ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS1_INS_6StringEcEES2_EEcEES2_EEcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore15SVGAnimatedType16createLengthListENSt3__110unique_ptrINS_13SVGLengthListENS1_14default_deleteIS3_EEEE","__ZN7WebCore15SVGAnimatedType10createRectENSt3__110unique_ptrINS_9FloatRectENS1_14default_deleteIS3_EEEE","__ZN7WebCore15SVGAnimatedType25createPreserveAspectRatioENSt3__110unique_ptrINS_22SVGPreserveAspectRatioENS1_14default_deleteIS3_EEEE","__ZN7WebCore15SVGAnimatedType15createPointListENSt3__110unique_ptrINS_12SVGPointListENS1_14default_deleteIS3_EEEE","_memset","__ZN7WebCore15SVGAnimatedType12createStringENSt3__110unique_ptrIN3WTF6StringENS1_14default_deleteIS4_EEEE","_memcpy","__ZN7WebCore15SVGAnimatedTypeC2ENS_20AnimatedPropertyTypeE","__ZN7WebCore15SVGAnimatedType16createNumberListENSt3__110unique_ptrINS_13SVGNumberListENS1_14default_deleteIS3_EEEE","__ZN7WebCore15SVGAnimatedType12createLengthENSt3__110unique_ptrINS_9SVGLengthENS1_14default_deleteIS3_EEEE","__ZN7WebCore15SVGAnimatedType13createBooleanENSt3__110unique_ptrIbNS1_14default_deleteIbEEEE","__ZN7WebCore15SVGAnimatedTypeD2Ev","__ZN7WebCore15SVGAnimatedType16setValueAsStringERKNS_13QualifiedNameERKN3WTF6StringE","__ZN3WTFplINS_12StringAppendINS1_INS_6StringEcEES2_EEcS2_EENS1_INS1_IT_T0_EET1_EERKS7_S8_","__ZN7WebCore15SVGAnimatedType25createAngleAndEnumerationENSt3__110unique_ptrINS1_4pairINS_8SVGAngleEjEENS1_14default_deleteIS5_EEEE","__ZN7WebCore15SVGAnimatedType15supportsAnimValENS_20AnimatedPropertyTypeE","__ZN7WebCore15SVGAnimatedType13createIntegerENSt3__110unique_ptrIiNS1_14default_deleteIiEEEE","__ZN3WTFplINS_12StringAppendINS1_INS1_INS1_INS_6StringEcEES2_EEcEES2_EEcS2_EENS1_INS1_IT_T0_EET1_EERKS9_SA_","__ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_INS_6StringEcEES1_EEcEES1_EEcEES1_EcvS1_Ev","__ZN3WTF12StringAppendINS0_INS_6StringEcEES1_E7writeToEPt","__ZN7WebCore15SVGAnimatedType26createNumberOptionalNumberENSt3__110unique_ptrINS1_4pairIffEENS1_14default_deleteIS4_EEEE","__ZN7WebCore15SVGAnimatedType19createTransformListENSt3__110unique_ptrINS_16SVGTransformListENS1_14default_deleteIS3_EEEE","__ZN7WebCore15SVGAnimatedType10createPathENSt3__110unique_ptrINS_17SVGPathByteStreamENS1_14default_deleteIS3_EEEE","__ZN3WTFplINS_12StringAppendINS1_INS1_INS_6StringEcEES2_EEcEES2_cEENS1_INS1_IT_T0_EET1_EERKS8_S9_","__ZN7WebCore15SVGAnimatedTypeD0Ev"]

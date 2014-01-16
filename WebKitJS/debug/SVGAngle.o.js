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
H_BASE = parentModule["_malloc"](72 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 72;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore8SVGAngleC1Ev;
/* memory initializer */ allocate([103,114,97,100,0,0,0,0,114,97,100,0,0,0,0,0,100,101,103,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore8SVGAngle13valueAsStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 switch (HEAP32[i2 >> 2] | 0) {
 case 2:
  {
   if (!(HEAP8[H_BASE + 40 | 0] | 0)) {
    i13 = __Znwj(4) | 0;
    HEAP32[i4 >> 2] = H_BASE + 24;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i13, i4);
    HEAP32[H_BASE + 64 >> 2] = i13;
    HEAP8[H_BASE + 40 | 0] = 1;
   }
   __ZN3WTF6String6numberEdjNS_29TrailingZerosTruncatingPolicyE(i6, +HEAPF32[i2 + 4 >> 2], 6, 1);
   i13 = HEAP32[HEAP32[H_BASE + 64 >> 2] >> 2] | 0;
   i4 = (i13 | 0) == 0;
   if (!i4) {
    i14 = i13 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   }
   i14 = i6 | 0;
   i6 = HEAP32[i14 >> 2] | 0;
   i15 = (i6 | 0) == 0;
   if (!i15) {
    i16 = i6 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   }
   if (!i4) {
    i16 = i13 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   }
   i16 = i5 | 0;
   HEAP32[i16 >> 2] = i6;
   if (!i15) {
    i17 = i6 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
   }
   i17 = i5 + 4 | 0;
   HEAP32[i17 >> 2] = i13;
   do {
    if (!i4) {
     i18 = i13 | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     HEAP32[i18 >> 2] = i19 + 2;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i18 >> 2] = i19;
      break;
     }
    }
   } while (0);
   do {
    if (!i15) {
     i19 = i6 | 0;
     i18 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i19 >> 2] = i18;
      break;
     }
    }
   } while (0);
   __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i1, i5);
   i5 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i17 = i5 | 0;
     i6 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i17 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i5 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i16 = i5 | 0;
     i6 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i16 >> 2] = i6;
      break;
     }
    }
   } while (0);
   do {
    if (!i4) {
     i5 = i13 | 0;
     i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i5 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i13 = HEAP32[i14 >> 2] | 0;
   if ((i13 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i14 = i13 | 0;
   i4 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i14 >> 2] = i4;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 3:
  {
   if (!(HEAP8[H_BASE + 32 | 0] | 0)) {
    i4 = __Znwj(4) | 0;
    HEAP32[i7 >> 2] = H_BASE + 16;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i4, i7);
    HEAP32[H_BASE + 56 >> 2] = i4;
    HEAP8[H_BASE + 32 | 0] = 1;
   }
   __ZN3WTF6String6numberEdjNS_29TrailingZerosTruncatingPolicyE(i9, +HEAPF32[i2 + 4 >> 2], 6, 1);
   i4 = HEAP32[HEAP32[H_BASE + 56 >> 2] >> 2] | 0;
   i7 = (i4 | 0) == 0;
   if (!i7) {
    i14 = i4 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   }
   i14 = i9 | 0;
   i9 = HEAP32[i14 >> 2] | 0;
   i13 = (i9 | 0) == 0;
   if (!i13) {
    i6 = i9 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   }
   if (!i7) {
    i6 = i4 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   }
   i6 = i8 | 0;
   HEAP32[i6 >> 2] = i9;
   if (!i13) {
    i5 = i9 | 0;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
   }
   i5 = i8 + 4 | 0;
   HEAP32[i5 >> 2] = i4;
   do {
    if (!i7) {
     i16 = i4 | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = i17 + 2;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i16 >> 2] = i17;
      break;
     }
    }
   } while (0);
   do {
    if (!i13) {
     i17 = i9 | 0;
     i16 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i17 >> 2] = i16;
      break;
     }
    }
   } while (0);
   __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i1, i8);
   i8 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i5 = i8 | 0;
     i9 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i5 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i8 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i6 = i8 | 0;
     i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i6 >> 2] = i9;
      break;
     }
    }
   } while (0);
   do {
    if (!i7) {
     i8 = i4 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i4 = HEAP32[i14 >> 2] | 0;
   if ((i4 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i14 = i4 | 0;
   i7 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i14 >> 2] = i7;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 4:
  {
   if (!(HEAP8[H_BASE + 48 | 0] | 0)) {
    i7 = __Znwj(4) | 0;
    HEAP32[i10 >> 2] = H_BASE + 8;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i10);
    HEAP32[H_BASE + 72 >> 2] = i7;
    HEAP8[H_BASE + 48 | 0] = 1;
   }
   __ZN3WTF6String6numberEdjNS_29TrailingZerosTruncatingPolicyE(i12, +HEAPF32[i2 + 4 >> 2], 6, 1);
   i7 = HEAP32[HEAP32[H_BASE + 72 >> 2] >> 2] | 0;
   i10 = (i7 | 0) == 0;
   if (!i10) {
    i14 = i7 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   }
   i14 = i12 | 0;
   i12 = HEAP32[i14 >> 2] | 0;
   i4 = (i12 | 0) == 0;
   if (!i4) {
    i9 = i12 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   if (!i10) {
    i9 = i7 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   i9 = i11 | 0;
   HEAP32[i9 >> 2] = i12;
   if (!i4) {
    i8 = i12 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   i8 = i11 + 4 | 0;
   HEAP32[i8 >> 2] = i7;
   do {
    if (!i10) {
     i6 = i7 | 0;
     i5 = HEAP32[i6 >> 2] | 0;
     HEAP32[i6 >> 2] = i5 + 2;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i6 >> 2] = i5;
      break;
     }
    }
   } while (0);
   do {
    if (!i4) {
     i5 = i12 | 0;
     i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i5 >> 2] = i6;
      break;
     }
    }
   } while (0);
   __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i1, i11);
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i8 = i11 | 0;
     i12 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i8 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i11 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i9 = i11 | 0;
     i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i9 >> 2] = i12;
      break;
     }
    }
   } while (0);
   do {
    if (!i10) {
     i11 = i7 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i14 >> 2] | 0;
   if ((i7 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i14 = i7 | 0;
   i10 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i14 >> 2] = i10;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 1:
 case 0:
  {
   __ZN3WTF6String6numberEdjNS_29TrailingZerosTruncatingPolicyE(i1, +HEAPF32[i2 + 4 >> 2], 6, 1);
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
function __ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i8 = (i2 | 0) == 0;
 if (i8) {
  i9 = 0;
 } else {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = (i3 | 0) == 0;
 if (i11) {
  i12 = 0;
 } else {
  i12 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i13 = _llvm_uadd_with_overflow_i32(i9 | 0, i12 | 0) | 0;
 i12 = i13;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i8) {
  i14 = 9;
 } else {
  if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
   i14 = 9;
  }
 }
 do {
  if ((i14 | 0) == 9) {
   if (!i11) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i12 | 0) == 0) {
     i2 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i2 | 0) == 0) {
      i14 = 26;
      break;
     }
     i8 = i2 | 0;
     HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
     i15 = i2;
     i16 = 0;
    } else {
     if (i12 >>> 0 > 4294967275 >>> 0) {
      i14 = 26;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i12 + 20 | 0);
     i2 = i6 | 0;
     i8 = HEAP32[i2 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     if ((i8 | 0) == 0) {
      i14 = 26;
      break;
     }
     i2 = i8 + 20 | 0;
     HEAP32[i8 >> 2] = 2;
     HEAP32[i8 + 4 >> 2] = i12;
     HEAP32[i8 + 8 >> 2] = i2;
     HEAP32[i8 + 12 >> 2] = 0;
     HEAP32[i8 + 16 >> 2] = 32;
     i15 = i8;
     i16 = i2;
    }
   } while (0);
   if ((i14 | 0) == 26) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i2 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     i17 = 0;
    } else {
     i8 = HEAP32[i2 + 4 >> 2] | 0;
     i13 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i18 = i2;
     } else {
      i9 = 0;
      while (1) {
       HEAP8[i16 + i9 | 0] = HEAP8[i13 + i9 | 0] | 0;
       i9 = i9 + 1 | 0;
       if (i9 >>> 0 >= i8 >>> 0) {
        break;
       }
      }
      i8 = HEAP32[i7 >> 2] | 0;
      if ((i8 | 0) == 0) {
       i17 = 0;
       break;
      } else {
       i18 = i8;
      }
     }
     i17 = HEAP32[i18 + 4 >> 2] | 0;
    }
   } while (0);
   i2 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i8 = HEAP32[i2 + 4 >> 2] | 0;
     i9 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     } else {
      i19 = 0;
     }
     while (1) {
      HEAP8[i16 + (i19 + i17) | 0] = HEAP8[i9 + i19 | 0] | 0;
      i19 = i19 + 1 | 0;
      if (i19 >>> 0 >= i8 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i12 | 0) == 0) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i14 = 48;
    break;
   }
   i19 = i15 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
   i20 = i15;
   i21 = 0;
  } else {
   if (i12 >>> 0 > 2147483637 >>> 0) {
    i14 = 48;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i12 << 1) + 20 | 0);
   i15 = i5 | 0;
   i19 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i19 | 0) == 0) {
    i14 = 48;
    break;
   }
   i15 = i19 + 20 | 0;
   HEAP32[i19 >> 2] = 2;
   HEAP32[i19 + 4 >> 2] = i12;
   HEAP32[i19 + 8 >> 2] = i15;
   HEAP32[i19 + 12 >> 2] = 0;
   HEAP32[i19 + 16 >> 2] = 0;
   i20 = i19;
   i21 = i15;
  }
 } while (0);
 if ((i14 | 0) == 48) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i22 = 0;
  } else {
   i12 = HEAP32[i14 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i14 + 16 >> 2] & 32 | 0) == 0) {
     i5 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     } else {
      i23 = 0;
     }
     while (1) {
      HEAP16[i21 + (i23 << 1) >> 1] = HEAP16[i5 + (i23 << 1) >> 1] | 0;
      i23 = i23 + 1 | 0;
      if (i23 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
    } else {
     i5 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     } else {
      i24 = 0;
     }
     while (1) {
      HEAP16[i21 + (i24 << 1) >> 1] = HEAPU8[i5 + i24 | 0] | 0;
      i24 = i24 + 1 | 0;
      if (i24 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i12 = HEAP32[i7 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i22 = 0;
    break;
   }
   i22 = HEAP32[i12 + 4 >> 2] | 0;
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = HEAP32[i7 + 4 >> 2] | 0;
   if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i25 = 0;
    }
    while (1) {
     HEAP16[i21 + (i25 + i22 << 1) >> 1] = HEAP16[i24 + (i25 << 1) >> 1] | 0;
     i25 = i25 + 1 | 0;
     if (i25 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   } else {
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i26 = 0;
    }
    while (1) {
     HEAP16[i21 + (i26 + i22 << 1) >> 1] = HEAPU8[i24 + i26 | 0] | 0;
     i26 = i26 + 1 | 0;
     if (i26 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore8SVGAngle16setValueAsStringERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
    break;
   }
   HEAPF32[i5 >> 2] = +0;
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
    i8 = HEAP32[i2 + 8 >> 2] | 0;
    i9 = i2;
   } else {
    i10 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i2) | 0;
    i8 = i10;
    i9 = HEAP32[i7 >> 2] | 0;
   }
   HEAP32[i6 >> 2] = i8;
   if ((i9 | 0) == 0) {
    i11 = 0;
   } else {
    i11 = HEAP32[i9 + 4 >> 2] | 0;
   }
   i10 = i8 + (i11 << 1) | 0;
   if (!(__ZN7WebCore11parseNumberERPKtS1_Rfb(i6, i10, i5, 0) | 0)) {
    HEAP32[i3 >> 2] = 12;
    STACKTOP = i4;
    return;
   }
   i12 = HEAP32[i6 >> 2] | 0;
   L15 : do {
    if ((i12 | 0) == (i10 | 0)) {
     i13 = 1;
    } else {
     i14 = HEAP16[i12 >> 1] | 0;
     i15 = i12 + 2 | 0;
     HEAP32[i6 >> 2] = i15;
     do {
      if ((i15 | 0) != (i10 | 0)) {
       i16 = HEAP16[i15 >> 1] | 0;
       i17 = i12 + 4 | 0;
       HEAP32[i6 >> 2] = i17;
       if ((i17 | 0) == (i10 | 0)) {
        break;
       }
       i18 = HEAP16[i17 >> 1] | 0;
       if (i14 << 16 >> 16 == 100 & i16 << 16 >> 16 == 101 & i18 << 16 >> 16 == 103) {
        i13 = 2;
        break L15;
       }
       if (i14 << 16 >> 16 == 114 & i16 << 16 >> 16 == 97 & i18 << 16 >> 16 == 100) {
        i13 = 3;
        break L15;
       }
       i17 = i12 + 6 | 0;
       HEAP32[i6 >> 2] = i17;
       if ((i17 | 0) == (i10 | 0)) {
        break;
       }
       i19 = i14 << 16 >> 16 == 103 & i16 << 16 >> 16 == 114 & i18 << 16 >> 16 == 97 & (HEAP16[i17 >> 1] | 0) == 100;
       if (i19) {
        i13 = i19 ? 4 : 0;
        break L15;
       }
      }
     } while (0);
     HEAP32[i3 >> 2] = 12;
     STACKTOP = i4;
     return;
    }
   } while (0);
   HEAP32[i1 >> 2] = i13;
   HEAPF32[i1 + 4 >> 2] = +HEAPF32[i5 >> 2];
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore8SVGAngle23convertToSpecifiedUnitsEtRi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i2 & 65535;
 do {
  if (i2 << 16 >> 16 != 0) {
   i5 = i1 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) == 0 | (i2 & 65535) >>> 0 > 4 >>> 0) {
    break;
   }
   if ((i4 | 0) == (i6 | 0)) {
    return;
   }
   do {
    if ((i6 | 0) == 3) {
     if ((i4 | 0) == 4) {
      i7 = i1 + 4 | 0;
      HEAPF32[i7 >> 2] = +HEAPF32[i7 >> 2] * +200 / 3.1415927410125732;
      break;
     } else if ((i4 | 0) == 1 | (i4 | 0) == 2) {
      i7 = i1 + 4 | 0;
      HEAPF32[i7 >> 2] = +HEAPF32[i7 >> 2] * +180 / 3.1415927410125732;
      break;
     } else {
      break;
     }
    } else if ((i6 | 0) == 4) {
     if ((i4 | 0) == 3) {
      i7 = i1 + 4 | 0;
      HEAPF32[i7 >> 2] = +HEAPF32[i7 >> 2] * 3.1415927410125732 / +200;
      break;
     } else if ((i4 | 0) == 1 | (i4 | 0) == 2) {
      i7 = i1 + 4 | 0;
      HEAPF32[i7 >> 2] = +HEAPF32[i7 >> 2] * +360 / +400;
      break;
     } else {
      break;
     }
    } else if ((i6 | 0) == 1 | (i6 | 0) == 2) {
     if ((i4 | 0) == 3) {
      i7 = i1 + 4 | 0;
      HEAPF32[i7 >> 2] = +HEAPF32[i7 >> 2] * 3.1415927410125732 / +180;
      break;
     } else if ((i4 | 0) == 4) {
      i7 = i1 + 4 | 0;
      HEAPF32[i7 >> 2] = +HEAPF32[i7 >> 2] * +400 / +360;
      break;
     } else {
      break;
     }
    }
   } while (0);
   HEAP32[i5 >> 2] = i4;
   return;
  }
 } while (0);
 HEAP32[i3 >> 2] = 9;
 return;
}
function __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i1, i2) {
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
 i9 = i6 | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
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
function __ZNK7WebCore8SVGAngle5valueEv(i1) {
 i1 = i1 | 0;
 var d2 = +0;
 switch (HEAP32[i1 >> 2] | 0) {
 case 4:
  {
   d2 = +HEAPF32[i1 + 4 >> 2] * +360 / +400;
   return +d2;
  }
 case 3:
  {
   d2 = +HEAPF32[i1 + 4 >> 2] * +180 / 3.1415927410125732;
   return +d2;
  }
 case 1:
 case 0:
 case 2:
  {
   d2 = +HEAPF32[i1 + 4 >> 2];
   return +d2;
  }
 default:
  {
   d2 = +0;
   return +d2;
  }
 }
 return +0;
}
function __ZN7WebCore8SVGAngle22newValueSpecifiedUnitsEtfRi(i1, i2, d3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i2 & 65535;
 if (i2 << 16 >> 16 == 0 | (i2 & 65535) >>> 0 > 4 >>> 0) {
  HEAP32[i4 >> 2] = 9;
  return;
 }
 i4 = i1 | 0;
 if ((i5 | 0) != (HEAP32[i4 >> 2] | 0)) {
  HEAP32[i4 >> 2] = i5;
 }
 HEAPF32[i1 + 4 >> 2] = d3;
 return;
}
function __ZN7WebCore8SVGAngle8setValueEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 switch (HEAP32[i1 >> 2] | 0) {
 case 4:
  {
   HEAPF32[i1 + 4 >> 2] = d2 * +400 / +360;
   return;
  }
 case 3:
  {
   HEAPF32[i1 + 4 >> 2] = d2 * 3.1415927410125732 / +180;
   return;
  }
 case 1:
 case 0:
 case 2:
  {
   HEAPF32[i1 + 4 >> 2] = d2;
   return;
  }
 default:
  {
   return;
  }
 }
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
function __ZN7WebCore8SVGAngleC2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAPF32[i1 + 4 >> 2] = +0;
 return;
}
function __ZN7WebCore8SVGAngleC1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAPF32[i1 + 4 >> 2] = +0;
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
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
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
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore8SVGAngleC2Ev,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev","__ZN7WebCore8SVGAngle22newValueSpecifiedUnitsEtfRi","__ZNK7WebCore8SVGAngle5valueEv","__ZNK7WebCore8SVGAngle13valueAsStringEv","_memset","__ZN7WebCore8SVGAngleC2Ev","_memcpy","__ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore8SVGAngle8setValueEf","__ZN7WebCore8SVGAngle23convertToSpecifiedUnitsEtRi","__ZN7WebCore8SVGAngle16setValueAsStringERKN3WTF6StringERi"]

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
H_BASE = parentModule["_malloc"](16 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 16;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore24InspectorStyleTextEditorC1EPN3WTF6VectorINS_22InspectorStylePropertyELj0ENS1_15CrashOnOverflowEEES6_RKNS1_6StringERKNSt3__14pairIS7_S7_EE;
/* memory initializer */ allocate([59,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
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
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore24InspectorStyleTextEditor14insertPropertyEjRKN3WTF6StringEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i1 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = HEAP32[i13 + 8 >> 2] | 0;
 i15 = i14 >>> 0 > i2 >>> 0;
 do {
  if (i15) {
   i16 = HEAP32[i13 >> 2] | 0;
   if ((HEAP8[i16 + (i2 * 28 & -1) + 20 | 0] & 1) == 0) {
    i17 = 0;
    i18 = 0;
    break;
   }
   i17 = HEAP32[i16 + (i2 * 28 & -1) + 12 >> 2] | 0;
   i18 = 1;
  } else {
   i17 = 0;
   i18 = 0;
  }
 } while (0);
 L5 : do {
  if ((i2 | 0) != 0 & (i14 | 0) != 0) {
   i16 = i13 | 0;
   i19 = 0;
   while (1) {
    if (i14 >>> 0 <= i19 >>> 0) {
     break;
    }
    i20 = HEAP32[i16 >> 2] | 0;
    if ((HEAP8[i20 + (i19 * 28 & -1) + 20 | 0] & 1) != 0) {
     if ((HEAP8[i20 + (i19 * 28 & -1) + 21 | 0] & 1) == 0) {
      i21 = 0;
      break L5;
     }
    }
    i20 = i19 + 1 | 0;
    if (i20 >>> 0 < i2 >>> 0 & i20 >>> 0 < i14 >>> 0) {
     i19 = i20;
    } else {
     i21 = 1;
     break L5;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else {
   i21 = 1;
  }
 } while (0);
 L15 : do {
  if (i15) {
   i19 = i13 | 0;
   i16 = i2;
   while (1) {
    if (i14 >>> 0 <= i16 >>> 0) {
     break;
    }
    i20 = HEAP32[i19 >> 2] | 0;
    if ((HEAP8[i20 + (i16 * 28 & -1) + 20 | 0] & 1) != 0) {
     if ((HEAP8[i20 + (i16 * 28 & -1) + 21 | 0] & 1) == 0) {
      i22 = 0;
      break L15;
     }
    }
    i20 = i16 + 1 | 0;
    if (i20 >>> 0 < i14 >>> 0) {
     i16 = i20;
    } else {
     i22 = 1;
     break L15;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else {
   i22 = 1;
  }
 } while (0);
 i14 = i6 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 HEAP32[i14 >> 2] = i13;
 if ((i13 | 0) != 0) {
  i3 = i13 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 L28 : do {
  if (i18 | i21) {
   i23 = i17;
   i24 = 0;
  } else {
   if ((i4 | 0) == 0) {
    i23 = 0;
    i24 = 0;
    break;
   }
   i3 = HEAP32[i14 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i23 = i4;
    i24 = 0;
    break;
   }
   if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
    i23 = i4;
    i24 = 0;
    break;
   }
   i3 = HEAP32[i1 + 8 >> 2] | 0;
   do {
    if ((i3 | 0) == 0) {
     i25 = 0;
    } else {
     if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
      i25 = HEAP32[i3 + 8 >> 2] | 0;
      break;
     } else {
      i25 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i3) | 0;
      break;
     }
    }
   } while (0);
   i3 = i4 - 1 | 0;
   if ((i3 | 0) == 0) {
    i23 = i4;
    i24 = 0;
    break;
   } else {
    i26 = i3;
   }
   L39 : while (1) {
    i27 = HEAP16[i25 + (i26 << 1) >> 1] | 0;
    if ((i27 & 65535) >>> 0 >= 33 >>> 0) {
     i28 = 32;
     break;
    }
    switch (i27 << 16 >> 16) {
    case 32:
    case 10:
    case 9:
    case 13:
    case 12:
     {
      break;
     }
    default:
     {
      break L39;
     }
    }
    i3 = i26 - 1 | 0;
    if ((i3 | 0) == 0) {
     i23 = i4;
     i24 = 0;
     break L28;
    } else {
     i26 = i3;
    }
   }
   if ((i28 | 0) == 32) {
    if (i27 << 16 >> 16 == 59) {
     i23 = i4;
     i24 = 0;
     break;
    }
   }
   __ZN3WTF6StringC1EPKc(i7, H_BASE + 8 | 0);
   __ZN3WTF6String6insertERKS0_j(i6, i7, 0);
   i3 = HEAP32[i7 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i23 = i4;
    i24 = 1;
    break;
   }
   i13 = i3 | 0;
   i15 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    i23 = i4;
    i24 = 1;
    break;
   } else {
    HEAP32[i13 >> 2] = i15;
    i23 = i4;
    i24 = 1;
    break;
   }
  }
 } while (0);
 i4 = i1 + 12 | 0;
 i7 = i1 + 16 | 0;
 i27 = i7 | 0;
 i26 = HEAP32[i27 >> 2] | 0;
 i25 = (i26 | 0) == 0;
 L51 : do {
  if (i22) {
   if (i25) {
    i29 = 0;
   } else {
    i29 = HEAP32[i26 + 4 >> 2] | 0;
   }
   L56 : do {
    if ((i24 | 0) == 0) {
     do {
      if ((i23 | 0) >= (i29 | 0)) {
       __ZNK3WTF6String9substringEjj(i8, i1 + 8 | 0, i23 - i29 | 0, i29);
       i17 = i8 | 0;
       i18 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i17 >> 2] | 0, HEAP32[i27 >> 2] | 0) | 0;
       i15 = HEAP32[i17 >> 2] | 0;
       if ((i15 | 0) == 0) {
        if (i18) {
         break L56;
        } else {
         break;
        }
       }
       i17 = i15 | 0;
       i13 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
       if ((i13 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i15);
        if (i18) {
         break L56;
        } else {
         break;
        }
       } else {
        HEAP32[i17 >> 2] = i13;
        if (i18) {
         break L56;
        } else {
         break;
        }
       }
      }
     } while (0);
     __ZN3WTF6String6insertERKS0_j(i6, i7, 0);
     do {
      if ((i23 | 0) != 0) {
       i18 = i23 - 1 | 0;
       i13 = HEAP32[i1 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       }
       if ((HEAP32[i13 + 4 >> 2] | 0) >>> 0 <= i18 >>> 0) {
        break;
       }
       i17 = i13 + 8 | 0;
       if ((HEAP32[i13 + 16 >> 2] & 32 | 0) == 0) {
        i30 = HEAP16[(HEAP32[i17 >> 2] | 0) + (i18 << 1) >> 1] | 0;
       } else {
        i30 = HEAPU8[(HEAP32[i17 >> 2] | 0) + i18 | 0] | 0;
       }
       if ((i30 & 65535) >>> 0 >= 14 >>> 0) {
        break;
       }
       if ((i30 << 16 >> 16 | 0) == 13 | (i30 << 16 >> 16 | 0) == 10) {
        break L56;
       }
      }
     } while (0);
     __ZN3WTF6String6insertERKS0_j(i6, i4, 0);
    }
   } while (0);
   i18 = HEAP32[i1 + 8 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     if ((HEAP32[i18 + 4 >> 2] | 0) >>> 0 <= i23 >>> 0) {
      break;
     }
     i17 = i18 + 8 | 0;
     if ((HEAP32[i18 + 16 >> 2] & 32 | 0) == 0) {
      i31 = HEAP16[(HEAP32[i17 >> 2] | 0) + (i23 << 1) >> 1] | 0;
     } else {
      i31 = HEAPU8[(HEAP32[i17 >> 2] | 0) + i23 | 0] | 0;
     }
     if ((i31 & 65535) >>> 0 >= 14 >>> 0) {
      break;
     }
     if ((i31 << 16 >> 16 | 0) == 13 | (i31 << 16 >> 16 | 0) == 10) {
      break L51;
     }
    }
   } while (0);
   __ZN3WTF6String6appendERKS0_(i6, i4);
  } else {
   if (!i25) {
    i18 = i26 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
   }
   i18 = HEAP32[i4 >> 2] | 0;
   i17 = (i18 | 0) == 0;
   if (!i17) {
    i13 = i18 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   }
   if (!i25) {
    i13 = i26 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   }
   i13 = i10 | 0;
   HEAP32[i13 >> 2] = i18;
   if (!i17) {
    i15 = i18 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   }
   i15 = i10 + 4 | 0;
   HEAP32[i15 >> 2] = i26;
   do {
    if (!i25) {
     i3 = i26 | 0;
     i16 = HEAP32[i3 >> 2] | 0;
     HEAP32[i3 >> 2] = i16 + 2;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i3 >> 2] = i16;
      break;
     }
    }
   } while (0);
   do {
    if (!i17) {
     i16 = i18 | 0;
     i3 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i16 >> 2] = i3;
      break;
     }
    }
   } while (0);
   __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i9, i10);
   i18 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i17 = i18 | 0;
     i3 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i17 >> 2] = i3;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i15 = i18 | 0;
     i3 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i15 >> 2] = i3;
      break;
     }
    }
   } while (0);
   do {
    if (!i25) {
     i18 = i26 | 0;
     i13 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i18 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i13 = i9 | 0;
   i18 = HEAP32[i13 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i32 = 0;
   } else {
    i32 = HEAP32[i18 + 4 >> 2] | 0;
   }
   __ZN3WTF6String6appendERKS0_(i6, i9);
   L133 : do {
    if (i21) {
     do {
      if ((i23 | 0) >= (i32 | 0)) {
       __ZNK3WTF6String9substringEjj(i11, i1 + 8 | 0, i23 - i32 | 0, i32);
       i18 = i11 | 0;
       i3 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i18 >> 2] | 0, HEAP32[i13 >> 2] | 0) | 0;
       i15 = HEAP32[i18 >> 2] | 0;
       if ((i15 | 0) == 0) {
        if (i3) {
         break L133;
        } else {
         break;
        }
       }
       i18 = i15 | 0;
       i17 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
       if ((i17 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i15);
        if (i3) {
         break L133;
        } else {
         break;
        }
       } else {
        HEAP32[i18 >> 2] = i17;
        if (i3) {
         break L133;
        } else {
         break;
        }
       }
      }
     } while (0);
     __ZN3WTF6String6insertERKS0_j(i6, i9, i24);
    }
   } while (0);
   i3 = HEAP32[i13 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i17 = i3 | 0;
   i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i17 >> 2] = i18;
    break;
   }
  }
 } while (0);
 __ZN3WTF6String6insertERKS0_j(i1 + 8 | 0, i6, i23);
 i23 = HEAP32[i14 >> 2] | 0;
 if ((i23 | 0) == 0) {
  i33 = 0;
 } else {
  i33 = HEAP32[i23 + 4 >> 2] | 0;
 }
 i6 = HEAP32[i12 >> 2] | 0;
 i12 = HEAP32[i6 + 8 >> 2] | 0;
 L153 : do {
  if ((i12 | 0) == 0) {
   i34 = -1;
  } else {
   i24 = i6 | 0;
   i9 = 0;
   i11 = 0;
   while (1) {
    if ((HEAP8[(HEAP32[i24 >> 2] | 0) + (i11 * 28 & -1) + 21 | 0] & 1) == 0) {
     i35 = i9;
    } else {
     if (i11 >>> 0 >= i2 >>> 0) {
      i34 = i9;
      break L153;
     }
     i35 = i9 + 1 | 0;
    }
    i32 = i11 + 1 | 0;
    if (i32 >>> 0 < i12 >>> 0) {
     i9 = i35;
     i11 = i32;
    } else {
     i34 = -1;
     break;
    }
   }
  }
 } while (0);
 i35 = i1 + 4 | 0;
 i1 = HEAP32[i35 >> 2] | 0;
 i12 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i12 >>> 0 > i34 >>> 0) {
   i2 = i1;
   i6 = i34;
   while (1) {
    i11 = HEAP32[i2 >> 2] | 0;
    i9 = i11 + (i6 * 28 & -1) + 12 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + i33;
    i9 = i11 + (i6 * 28 & -1) + 16 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + i33;
    i9 = i6 + 1 | 0;
    if (i9 >>> 0 >= i12 >>> 0) {
     i28 = 118;
     break;
    }
    i11 = HEAP32[i35 >> 2] | 0;
    if ((HEAP32[i11 + 8 >> 2] | 0) >>> 0 > i9 >>> 0) {
     i2 = i11;
     i6 = i9;
    } else {
     i28 = 115;
     break;
    }
   }
   if ((i28 | 0) == 115) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i28 | 0) == 118) {
    i36 = HEAP32[i14 >> 2] | 0;
    break;
   }
  } else {
   i36 = i23;
  }
 } while (0);
 if ((i36 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i23 = i36 | 0;
 i14 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
 if ((i14 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i36);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i23 >> 2] = i14;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore24InspectorStyleTextEditor23internalReplacePropertyERKNS_22InspectorStylePropertyERKN3WTF6StringEPNS_11SourceRangeEPj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i13;
 i15 = HEAP32[i2 + 12 >> 2] | 0;
 i16 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = i1 + 8 | 0;
 i17 = i2 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i18 | 0) == 0) {
   i19 = 0;
  } else {
   if ((HEAP32[i18 + 16 >> 2] & 32 | 0) == 0) {
    i19 = HEAP32[i18 + 8 >> 2] | 0;
    break;
   } else {
    i19 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i18) | 0;
    break;
   }
  }
 } while (0);
 i18 = i3 | 0;
 i3 = HEAP32[i18 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i20 = i8 | 0;
  HEAP32[i20 >> 2] = 0;
  i21 = 0;
  i22 = i20;
 } else {
  i20 = HEAP32[i3 + 4 >> 2] | 0;
  i23 = i8 | 0;
  HEAP32[i23 >> 2] = i3;
  i24 = i3 | 0;
  HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
  i21 = i20;
  i22 = i23;
 }
 i23 = HEAP32[i1 + 16 >> 2] | 0;
 i20 = (i23 | 0) == 0;
 if (!i20) {
  i24 = i23 | 0;
  HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
 }
 i24 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = (i24 | 0) == 0;
 if (!i1) {
  i3 = i24 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 if (!i20) {
  i3 = i23 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i10 | 0;
 HEAP32[i3 >> 2] = i24;
 if (!i1) {
  i25 = i24 | 0;
  HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
 }
 i25 = i10 + 4 | 0;
 HEAP32[i25 >> 2] = i23;
 do {
  if (!i20) {
   i26 = i23 | 0;
   i27 = HEAP32[i26 >> 2] | 0;
   HEAP32[i26 >> 2] = i27 + 2;
   if ((i27 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i26 >> 2] = i27;
    break;
   }
  }
 } while (0);
 do {
  if (!i1) {
   i27 = i24 | 0;
   i26 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i27 >> 2] = i26;
    break;
   }
  }
 } while (0);
 __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i9, i10);
 i10 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i25 = i10 | 0;
   i24 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i24 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i25 >> 2] = i24;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i3 = i10 | 0;
   i24 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i24 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i3 >> 2] = i24;
    break;
   }
  }
 } while (0);
 do {
  if (!i20) {
   i10 = i23 | 0;
   i24 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i24 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i10 >> 2] = i24;
    break;
   }
  }
 } while (0);
 i23 = i9 | 0;
 i20 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i20 | 0) == 0) {
   if ((i21 | 0) == 0) {
    i28 = i15;
    i29 = i16;
   } else {
    i30 = 0;
    i31 = 46;
   }
  } else {
   i24 = HEAP32[i20 + 4 >> 2] | 0;
   i10 = (i21 | 0) != 0;
   if (i10 | (i24 | 0) == 0) {
    if (i10) {
     i30 = i24;
     i31 = 46;
     break;
    } else {
     i28 = i15;
     i29 = i16;
     break;
    }
   }
   do {
    if ((i15 | 0) < (i24 | 0)) {
     i32 = 0;
    } else {
     __ZNK3WTF6String9substringEjj(i11, i2, i15 - i24 | 0, i24);
     i10 = i11 | 0;
     i3 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i10 >> 2] | 0, HEAP32[i23 >> 2] | 0) | 0;
     i25 = HEAP32[i10 >> 2] | 0;
     if ((i25 | 0) == 0) {
      i32 = i3;
      break;
     }
     i10 = i25 | 0;
     i1 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i1 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      i32 = i3;
      break;
     } else {
      HEAP32[i10 >> 2] = i1;
      i32 = i3;
      break;
     }
    }
   } while (0);
   i28 = i15 - (i32 ? i24 : 0) | 0;
   i29 = i16;
  }
 } while (0);
 L66 : do {
  if ((i31 | 0) == 46) {
   i32 = HEAP32[i18 >> 2] | 0;
   if ((HEAP32[i32 + 16 >> 2] & 32 | 0) == 0) {
    i33 = HEAP32[i32 + 8 >> 2] | 0;
   } else {
    i33 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i32) | 0;
   }
   i32 = HEAP16[i33 + (i21 - 1 << 1) >> 1] | 0;
   do {
    if ((i32 & 65535) >>> 0 < 14 >>> 0) {
     if (!((i32 << 16 >> 16 | 0) == 13 | (i32 << 16 >> 16 | 0) == 10)) {
      i34 = i16;
      break;
     }
     i11 = HEAP32[i17 >> 2] | 0;
     if ((i11 | 0) == 0) {
      i35 = 0;
     } else {
      i35 = HEAP32[i11 + 4 >> 2] | 0;
     }
     if ((i16 | 0) < (i35 | 0)) {
      i36 = 0;
      i37 = 0;
      i38 = i16;
     } else {
      i34 = i16;
      break;
     }
     while (1) {
      i11 = i19 + (i38 << 1) | 0;
      i20 = HEAP16[i11 >> 1] | 0;
      if ((i20 & 65535) >>> 0 < 128 >>> 0) {
       if ((i20 & 65535) >>> 0 >= 33 >>> 0) {
        i39 = i16;
        i40 = i37;
        i41 = i36;
        i42 = i38;
        break;
       }
       if (i20 << 16 >> 16 == 32 | (i20 - 9 & 65535) >>> 0 < 5 >>> 0) {
        i43 = i20;
       } else {
        i39 = i16;
        i40 = i37;
        i41 = i36;
        i42 = i38;
        break;
       }
      } else {
       if ((_u_charDirection(i20 & 65535) | 0) != 9) {
        i39 = i16;
        i40 = i37;
        i41 = i36;
        i42 = i38;
        break;
       }
       i43 = HEAP16[i11 >> 1] | 0;
      }
      if ((i43 & 65535) >>> 0 < 14 >>> 0) {
       i44 = i43 << 16 >> 16 == 10 | i43 << 16 >> 16 == 13;
      } else {
       i44 = 0;
      }
      if (!(i44 | i36 ^ 1)) {
       i39 = i38;
       i40 = 0;
       i41 = i36;
       i42 = i38;
       break;
      }
      i11 = i36 | i44;
      i20 = i38 + 1 | 0;
      if ((i20 | 0) < (i35 | 0)) {
       i36 = i11;
       i37 = i44;
       i38 = i20;
      } else {
       i39 = i16;
       i40 = i44;
       i41 = i11;
       i42 = i20;
       break;
      }
     }
     if (!i41) {
      i34 = i39;
      break;
     }
     i34 = i40 ? i42 : i39;
    } else {
     i34 = i16;
    }
   } while (0);
   do {
    if ((i30 | 0) <= (i15 | 0)) {
     __ZNK3WTF6String9substringEjj(i12, i2, i15 - i30 | 0, i30);
     i32 = i12 | 0;
     i24 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i32 >> 2] | 0, HEAP32[i23 >> 2] | 0) | 0;
     i20 = HEAP32[i32 >> 2] | 0;
     if ((i20 | 0) == 0) {
      if (i24) {
       i28 = i15;
       i29 = i34;
       break L66;
      } else {
       break;
      }
     }
     i32 = i20 | 0;
     i11 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      if (i24) {
       i28 = i15;
       i29 = i34;
       break L66;
      } else {
       break;
      }
     } else {
      HEAP32[i32 >> 2] = i11;
      if (i24) {
       i28 = i15;
       i29 = i34;
       break L66;
      } else {
       break;
      }
     }
    }
   } while (0);
   __ZN3WTF6String6insertERKS0_j(i8, i9, 0);
   i28 = i15;
   i29 = i34;
  }
 } while (0);
 i34 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i34 | 0) != 0) {
   __ZN3WTF10StringImpl7replaceEjjPS0_(i7, i34, i28, i29 - i28 | 0, HEAP32[i22 >> 2] | 0);
   i15 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i7 >> 2];
   if ((i15 | 0) == 0) {
    break;
   }
   i9 = i15 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 __ZN7WebCore11SourceRangeC1Ejj(i14, i28, i29);
 i29 = i4;
 i4 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i29 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i29 + 4 >> 2] = i4;
 i4 = HEAP32[i22 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i45 = 0;
 } else {
  i45 = HEAP32[i4 + 4 >> 2] | 0;
 }
 HEAP32[i5 >> 2] = i45;
 i45 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i45 | 0) != 0) {
   i23 = i45 | 0;
   i5 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i45);
    break;
   } else {
    HEAP32[i23 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i45 = HEAP32[i22 >> 2] | 0;
 if ((i45 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i22 = i45 | 0;
 i5 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i45);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i22 >> 2] = i5;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore24InspectorStyleTextEditor15disablePropertyEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 40 | 0;
 i7 = i3 + 48 | 0;
 i8 = i3 + 56 | 0;
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((HEAP32[i10 + 8 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i11 = HEAP32[i10 >> 2] | 0;
 i10 = i11 + (i2 * 28 & -1) | 0;
 i12 = i5 | 0;
 __ZN7WebCore21CSSPropertySourceDataC1ERKS0_(i12, i10 | 0);
 i13 = i5 + 20 | 0;
 HEAP8[i13] = HEAP8[i11 + (i2 * 28 & -1) + 20 | 0] & 1;
 i14 = i5 + 21 | 0;
 HEAP8[i14] = HEAP8[i11 + (i2 * 28 & -1) + 21 | 0] & 1;
 i15 = i5 + 24 | 0;
 i16 = HEAP32[i11 + (i2 * 28 & -1) + 24 >> 2] | 0;
 HEAP32[i15 >> 2] = i16;
 if ((i16 | 0) != 0) {
  i17 = i16 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
 }
 i17 = i5 + 12 | 0;
 i16 = HEAP32[i17 >> 2] | 0;
 i18 = i5 + 16 | 0;
 __ZNK3WTF6String9substringEjj(i4, i1 + 8 | 0, i16, (HEAP32[i18 >> 2] | 0) - i16 | 0);
 i16 = i4 | 0;
 i4 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 i19 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = i4;
 do {
  if ((i19 | 0) != 0) {
   i4 = i19 | 0;
   i20 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i4 >> 2] = i20;
    break;
   }
  }
 } while (0);
 i19 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i16 = i19 | 0;
   i20 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i16 >> 2] = i20;
    break;
   }
  }
 } while (0);
 HEAP8[i14] = 1;
 __ZN7WebCore11SourceRangeC1Ev(i6);
 __ZN3WTF6StringC1EPKc(i8, H_BASE + 16 | 0);
 __ZN7WebCore24InspectorStyleTextEditor23internalReplacePropertyERKNS_22InspectorStylePropertyERKN3WTF6StringEPNS_11SourceRangeEPj(i1, i10, i8, i6, i7);
 i7 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = i7 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i8 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i11 + (i2 * 28 & -1) + 12 >> 2] | 0) >>> 0 > i7 >>> 0) {
  HEAP32[i17 >> 2] = i7;
  i21 = i7;
 } else {
  i21 = HEAP32[i17 >> 2] | 0;
 }
 HEAP32[i18 >> 2] = i21;
 i21 = HEAP32[i9 >> 2] | 0;
 i9 = HEAP32[i21 + 8 >> 2] | 0;
 L29 : do {
  if ((i9 | 0) == 0) {
   i22 = 26;
  } else {
   i18 = i21 | 0;
   i17 = 0;
   i7 = 0;
   while (1) {
    if ((HEAP8[(HEAP32[i18 >> 2] | 0) + (i7 * 28 & -1) + 21 | 0] & 1) == 0) {
     i23 = i17;
    } else {
     if (i7 >>> 0 >= i2 >>> 0) {
      break;
     }
     i23 = i17 + 1 | 0;
    }
    i11 = i7 + 1 | 0;
    if (i11 >>> 0 < i9 >>> 0) {
     i17 = i23;
     i7 = i11;
    } else {
     i22 = 26;
     break L29;
    }
   }
   i7 = i1 + 4 | 0;
   i18 = HEAP32[i7 >> 2] | 0;
   if ((i17 | 0) == -1) {
    i24 = i18;
    i22 = 28;
    break;
   }
   __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE6insertIRS2_EEvjOT_(i18, i17, i5);
   i18 = __ZNK7WebCore11SourceRange6lengthEv(i6) | 0;
   i11 = i17 + 1 | 0;
   i10 = HEAP32[i7 >> 2] | 0;
   i8 = HEAP32[i10 + 8 >> 2] | 0;
   if (i8 >>> 0 > i11 >>> 0) {
    i25 = i10;
    i26 = i11;
   } else {
    break;
   }
   while (1) {
    i11 = HEAP32[i25 >> 2] | 0;
    i10 = i11 + (i26 * 28 & -1) + 12 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) - i18;
    i10 = i11 + (i26 * 28 & -1) + 16 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) - i18;
    i26 = i26 + 1 | 0;
    if (i26 >>> 0 >= i8 >>> 0) {
     break L29;
    }
    i25 = HEAP32[i7 >> 2] | 0;
    if ((HEAP32[i25 + 8 >> 2] | 0) >>> 0 <= i26 >>> 0) {
     break;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 if ((i22 | 0) == 26) {
  i24 = HEAP32[i1 + 4 >> 2] | 0;
  i22 = 28;
 }
 do {
  if ((i22 | 0) == 28) {
   i1 = i24 + 8 | 0;
   i26 = HEAP32[i1 >> 2] | 0;
   if ((i26 | 0) == (HEAP32[i24 + 4 >> 2] | 0)) {
    __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i24, i5);
    break;
   }
   i25 = HEAP32[i24 >> 2] | 0;
   __ZN7WebCore21CSSPropertySourceDataC1ERKS0_(i25 + (i26 * 28 & -1) | 0, i12);
   HEAP8[i25 + (i26 * 28 & -1) + 20 | 0] = HEAP8[i13] & 1;
   HEAP8[i25 + (i26 * 28 & -1) + 21 | 0] = HEAP8[i14] & 1;
   i6 = HEAP32[i15 >> 2] | 0;
   HEAP32[i25 + (i26 * 28 & -1) + 24 >> 2] = i6;
   if ((i6 | 0) != 0) {
    i26 = i6 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
   }
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  }
 } while (0);
 i14 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i15 = i14 | 0;
   i13 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i15 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i5 + 4 >> 2] | 0;
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
 i14 = HEAP32[i5 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i14 | 0;
 i15 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i15 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i14);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i15;
  STACKTOP = i3;
  return;
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
function __ZN7WebCore24InspectorStyleTextEditor15replacePropertyEjRKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[i8 + 8 >> 2] | 0;
 if (i9 >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i10 = HEAP32[i8 >> 2] | 0;
 if ((HEAP8[i10 + (i2 * 28 & -1) + 21 | 0] & 1) == 0) {
  __ZN7WebCore11SourceRangeC1Ev(i5);
  __ZN7WebCore24InspectorStyleTextEditor23internalReplacePropertyERKNS_22InspectorStylePropertyERKN3WTF6StringEPNS_11SourceRangeEPj(i1, i10 + (i2 * 28 & -1) | 0, i3, i5, i6);
  i8 = HEAP32[i6 >> 2] | 0;
  i6 = i8 - (__ZNK7WebCore11SourceRange6lengthEv(i5) | 0) | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i7 = HEAP32[i5 + 8 >> 2] | 0;
  L6 : do {
   if ((i7 | 0) == 0) {
    i11 = -1;
   } else {
    i8 = i5 | 0;
    i12 = 0;
    i13 = 0;
    while (1) {
     if ((HEAP8[(HEAP32[i8 >> 2] | 0) + (i13 * 28 & -1) + 21 | 0] & 1) == 0) {
      i14 = i12;
     } else {
      if (i13 >>> 0 >= i2 >>> 0) {
       i11 = i12;
       break L6;
      }
      i14 = i12 + 1 | 0;
     }
     i15 = i13 + 1 | 0;
     if (i15 >>> 0 < i7 >>> 0) {
      i12 = i14;
      i13 = i15;
     } else {
      i11 = -1;
      break;
     }
    }
   }
  } while (0);
  i14 = i1 + 4 | 0;
  i7 = HEAP32[i14 >> 2] | 0;
  i5 = HEAP32[i7 + 8 >> 2] | 0;
  if (i5 >>> 0 > i11 >>> 0) {
   i16 = i7;
   i17 = i11;
  } else {
   STACKTOP = i4;
   return;
  }
  while (1) {
   i11 = HEAP32[i16 >> 2] | 0;
   i7 = i11 + (i17 * 28 & -1) + 12 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i6;
   i7 = i11 + (i17 * 28 & -1) + 16 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i6;
   i7 = i17 + 1 | 0;
   if (i7 >>> 0 >= i5 >>> 0) {
    i18 = 33;
    break;
   }
   i11 = HEAP32[i14 >> 2] | 0;
   if ((HEAP32[i11 + 8 >> 2] | 0) >>> 0 > i7 >>> 0) {
    i16 = i11;
    i17 = i7;
   } else {
    i18 = 11;
    break;
   }
  }
  if ((i18 | 0) == 11) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i18 | 0) == 33) {
   STACKTOP = i4;
   return;
  }
 }
 i18 = HEAP32[i3 >> 2] | 0;
 i3 = (i18 | 0) == 0;
 if (i3) {
  i19 = 0;
 } else {
  i19 = HEAP32[i18 + 4 >> 2] | 0;
 }
 L27 : do {
  if ((i9 | 0) == 0) {
   i20 = -1;
  } else {
   i17 = 0;
   i16 = 0;
   while (1) {
    if ((HEAP8[i10 + (i16 * 28 & -1) + 21 | 0] & 1) == 0) {
     i21 = i17;
    } else {
     if ((i16 | 0) == (i2 | 0)) {
      i20 = i17;
      break L27;
     }
     i21 = i17 + 1 | 0;
    }
    i14 = i16 + 1 | 0;
    if (i14 >>> 0 < i9 >>> 0) {
     i17 = i21;
     i16 = i14;
    } else {
     i20 = -1;
     break;
    }
   }
  }
 } while (0);
 i21 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i19 | 0) == 0) {
  __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE6removeEj(i21, i20);
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i21 + 8 >> 2] | 0) >>> 0 <= i20 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i19 = HEAP32[i21 >> 2] | 0;
 if (!i3) {
  i3 = i18 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i19 + (i20 * 28 & -1) + 24 | 0;
 i20 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i18;
 if ((i20 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i18 = i20 | 0;
 i3 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i20);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i18 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore24InspectorStyleTextEditor14enablePropertyEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 32 | 0;
 i6 = i3 + 40 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 i8 = HEAP32[i7 + 8 >> 2] | 0;
 L1 : do {
  if ((i8 | 0) == 0) {
   i9 = -1;
  } else {
   i10 = i7 | 0;
   i11 = 0;
   i12 = 0;
   while (1) {
    if ((HEAP8[(HEAP32[i10 >> 2] | 0) + (i12 * 28 & -1) + 21 | 0] & 1) == 0) {
     i13 = i11;
    } else {
     if ((i12 | 0) == (i2 | 0)) {
      i9 = i11;
      break L1;
     }
     i13 = i11 + 1 | 0;
    }
    i14 = i12 + 1 | 0;
    if (i14 >>> 0 < i8 >>> 0) {
     i11 = i13;
     i12 = i14;
    } else {
     i9 = -1;
     break;
    }
   }
  }
 } while (0);
 i13 = i1 + 4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 if ((HEAP32[i8 + 8 >> 2] | 0) >>> 0 <= i9 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i2 = HEAP32[i8 >> 2] | 0;
 __ZN7WebCore21CSSPropertySourceDataC1ERKS0_(i4 | 0, i2 + (i9 * 28 & -1) | 0);
 HEAP8[i4 + 20 | 0] = HEAP8[i2 + (i9 * 28 & -1) + 20 | 0] & 1;
 HEAP8[i4 + 21 | 0] = HEAP8[i2 + (i9 * 28 & -1) + 21 | 0] & 1;
 i8 = i4 + 24 | 0;
 i7 = HEAP32[i2 + (i9 * 28 & -1) + 24 >> 2] | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i2 = i7 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE6removeEj(HEAP32[i13 >> 2] | 0, i9);
 __ZN7WebCore11SourceRangeC1Ev(i5);
 __ZN7WebCore24InspectorStyleTextEditor23internalReplacePropertyERKNS_22InspectorStylePropertyERKN3WTF6StringEPNS_11SourceRangeEPj(i1, i4, i4 + 24 | 0, i5, i6);
 i1 = HEAP32[i6 >> 2] | 0;
 i6 = i1 - (__ZNK7WebCore11SourceRange6lengthEv(i5) | 0) | 0;
 i5 = HEAP32[i13 >> 2] | 0;
 i1 = HEAP32[i5 + 8 >> 2] | 0;
 L16 : do {
  if (i1 >>> 0 > i9 >>> 0) {
   i2 = i5;
   i7 = i9;
   while (1) {
    i12 = HEAP32[i2 >> 2] | 0;
    i11 = i12 + (i7 * 28 & -1) + 12 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + i6;
    i11 = i12 + (i7 * 28 & -1) + 16 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + i6;
    i7 = i7 + 1 | 0;
    if (i7 >>> 0 >= i1 >>> 0) {
     break L16;
    }
    i2 = HEAP32[i13 >> 2] | 0;
    if ((HEAP32[i2 + 8 >> 2] | 0) >>> 0 <= i7 >>> 0) {
     break;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i13 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i8 = i13 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i8 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i4 + 4 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i1 = i13 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i1 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i4 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i13 | 0;
 i8 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i13);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE6insertIRS2_EEvjOT_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 L1 : do {
  if ((i5 | 0) == (HEAP32[i1 + 4 >> 2] | 0)) {
   i6 = i5 + 1 | 0;
   i7 = i1 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   do {
    if (i8 >>> 0 <= i3 >>> 0) {
     if ((i8 + (i5 * 28 & -1) | 0) >>> 0 <= i3 >>> 0) {
      break;
     }
     i9 = i6 + (i5 >>> 2) | 0;
     i10 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
     __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i10 >>> 0 > i6 >>> 0 ? i10 : i6);
     i11 = (HEAP32[i7 >> 2] | 0) + (((i3 - i8 | 0) / 28 & -1) * 28 & -1) | 0;
     i12 = i7;
     break L1;
    }
   } while (0);
   i8 = i6 + (i5 >>> 2) | 0;
   i10 = i8 >>> 0 > 16 >>> 0 ? i8 : 16;
   __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i10 >>> 0 > i6 >>> 0 ? i10 : i6);
   i11 = i3;
   i12 = i7;
  } else {
   i11 = i3;
   i12 = i1 | 0;
  }
 } while (0);
 i1 = HEAP32[i12 >> 2] | 0;
 i12 = i1 + (i2 * 28 & -1) | 0;
 __ZN3WTF20VectorTypeOperationsIN7WebCore22InspectorStylePropertyEE15moveOverlappingEPS2_S4_S4_(i12, i1 + ((HEAP32[i4 >> 2] | 0) * 28 & -1) | 0, i1 + ((i2 + 1 | 0) * 28 & -1) | 0);
 __ZN7WebCore21CSSPropertySourceDataC1ERKS0_(i12 | 0, i11 | 0);
 HEAP8[i1 + (i2 * 28 & -1) + 20 | 0] = HEAP8[i11 + 20 | 0] & 1;
 HEAP8[i1 + (i2 * 28 & -1) + 21 | 0] = HEAP8[i11 + 21 | 0] & 1;
 i12 = HEAP32[i11 + 24 >> 2] | 0;
 HEAP32[i1 + (i2 * 28 & -1) + 24 >> 2] = i12;
 if ((i12 | 0) == 0) {
  i13 = HEAP32[i4 >> 2] | 0;
  i14 = i13 + 1 | 0;
  HEAP32[i4 >> 2] = i14;
  return;
 }
 i2 = i12 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 i13 = HEAP32[i4 >> 2] | 0;
 i14 = i13 + 1 | 0;
 HEAP32[i4 >> 2] = i14;
 return;
}
function __ZN3WTF20VectorTypeOperationsIN7WebCore22InspectorStylePropertyEE15moveOverlappingEPS2_S4_S4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if (i1 >>> 0 > i3 >>> 0) {
  __ZN3WTF11VectorMoverILb0EN7WebCore22InspectorStylePropertyEE4moveEPS2_S4_S4_(i1, i2, i3);
  return;
 }
 if ((i2 | 0) == (i1 | 0)) {
  return;
 }
 i4 = i2;
 i5 = i3 + (((i2 - i1 | 0) / 28 & -1) * 28 & -1) | 0;
 while (1) {
  i2 = i4 - 28 | 0;
  i3 = i5 - 28 | 0;
  __ZN7WebCore21CSSPropertySourceDataC1ERKS0_(i3 | 0, i2 | 0);
  HEAP8[i5 - 28 + 20 | 0] = HEAP8[i4 - 28 + 20 | 0] & 1;
  HEAP8[i5 - 28 + 21 | 0] = HEAP8[i4 - 28 + 21 | 0] & 1;
  i6 = i4 - 28 + 24 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i5 - 28 + 24 >> 2] = i7;
  if ((i7 | 0) != 0) {
   i8 = i7 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
  i8 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i6 = i8 | 0;
    i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i6 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i8 = HEAP32[i4 - 28 + 4 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i7 = i8 | 0;
    i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i7 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i8 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i6 = i8 | 0;
    i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i6 >> 2] = i7;
     break;
    }
   }
  } while (0);
  if ((i2 | 0) == (i1 | 0)) {
   break;
  } else {
   i4 = i2;
   i5 = i3;
  }
 }
 return;
}
function __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 * 28 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (((i2 - i7 | 0) / 28 & -1) * 28 & -1) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 __ZN7WebCore21CSSPropertySourceDataC1ERKS0_(i12 + (i6 * 28 & -1) | 0, i11 | 0);
 HEAP8[i12 + (i6 * 28 & -1) + 20 | 0] = HEAP8[i11 + 20 | 0] & 1;
 HEAP8[i12 + (i6 * 28 & -1) + 21 | 0] = HEAP8[i11 + 21 | 0] & 1;
 i2 = HEAP32[i11 + 24 >> 2] | 0;
 HEAP32[i12 + (i6 * 28 & -1) + 24 >> 2] = i2;
 if ((i2 | 0) == 0) {
  i13 = HEAP32[i3 >> 2] | 0;
  i14 = i13 + 1 | 0;
  HEAP32[i3 >> 2] = i14;
  return;
 }
 i6 = i2 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 i13 = HEAP32[i3 >> 2] | 0;
 i14 = i13 + 1 | 0;
 HEAP32[i3 >> 2] = i14;
 return;
}
function __ZN7WebCore24InspectorStyleTextEditor22disabledIndexByOrdinalEjb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[i4 + 8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i5 = -1;
  return i5 | 0;
 }
 i6 = i4 | 0;
 if (i3) {
  i3 = 0;
  i4 = 0;
  while (1) {
   if (i1 >>> 0 <= i4 >>> 0) {
    i7 = 15;
    break;
   }
   if ((HEAP8[(HEAP32[i6 >> 2] | 0) + (i4 * 28 & -1) + 21 | 0] & 1) == 0) {
    i8 = i3;
   } else {
    if (i4 >>> 0 >= i2 >>> 0) {
     i5 = i3;
     i7 = 18;
     break;
    }
    i8 = i3 + 1 | 0;
   }
   i9 = i4 + 1 | 0;
   if (i9 >>> 0 < i1 >>> 0) {
    i3 = i8;
    i4 = i9;
   } else {
    i5 = -1;
    i7 = 19;
    break;
   }
  }
  if ((i7 | 0) == 15) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return 0;
  } else if ((i7 | 0) == 18) {
   return i5 | 0;
  } else if ((i7 | 0) == 19) {
   return i5 | 0;
  }
 } else {
  i4 = 0;
  i8 = 0;
  while (1) {
   if (i1 >>> 0 <= i8 >>> 0) {
    i7 = 16;
    break;
   }
   if ((HEAP8[(HEAP32[i6 >> 2] | 0) + (i8 * 28 & -1) + 21 | 0] & 1) == 0) {
    i10 = i4;
   } else {
    if ((i8 | 0) == (i2 | 0)) {
     i5 = i4;
     i7 = 20;
     break;
    }
    i10 = i4 + 1 | 0;
   }
   i3 = i8 + 1 | 0;
   if (i3 >>> 0 < i1 >>> 0) {
    i4 = i10;
    i8 = i3;
   } else {
    i5 = -1;
    i7 = 21;
    break;
   }
  }
  if ((i7 | 0) == 16) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return 0;
  } else if ((i7 | 0) == 20) {
   return i5 | 0;
  } else if ((i7 | 0) == 21) {
   return i5 | 0;
  }
 }
 return 0;
}
function __ZN3WTF11VectorMoverILb0EN7WebCore22InspectorStylePropertyEE4moveEPS2_S4_S4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 if ((i1 | 0) == (i2 | 0)) {
  return;
 } else {
  i4 = i1;
  i5 = i3;
 }
 while (1) {
  __ZN7WebCore21CSSPropertySourceDataC1ERKS0_(i5 | 0, i4 | 0);
  HEAP8[i5 + 20 | 0] = HEAP8[i4 + 20 | 0] & 1;
  HEAP8[i5 + 21 | 0] = HEAP8[i4 + 21 | 0] & 1;
  i3 = i4 + 24 | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  HEAP32[i5 + 24 >> 2] = i1;
  if ((i1 | 0) != 0) {
   i6 = i1 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
  }
  i6 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i3 = i6 | 0;
    i1 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
    if ((i1 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i6);
     break;
    } else {
     HEAP32[i3 >> 2] = i1;
     break;
    }
   }
  } while (0);
  i6 = HEAP32[i4 + 4 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i1 = i6 | 0;
    i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
    if ((i3 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i6);
     break;
    } else {
     HEAP32[i1 >> 2] = i3;
     break;
    }
   }
  } while (0);
  i6 = HEAP32[i4 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i3 = i6 | 0;
    i1 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
    if ((i1 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i6);
     break;
    } else {
     HEAP32[i3 >> 2] = i1;
     break;
    }
   }
  } while (0);
  i6 = i4 + 28 | 0;
  if ((i6 | 0) == (i2 | 0)) {
   break;
  } else {
   i4 = i6;
   i5 = i5 + 28 | 0;
  }
 }
 return;
}
function __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE6removeEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + (i2 * 28 & -1) | 0;
 i6 = HEAP32[i4 + (i2 * 28 & -1) + 24 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i4 + (i2 * 28 & -1) + 4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i8 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i6 = i1 + 8 | 0;
 __ZN3WTF20VectorTypeOperationsIN7WebCore22InspectorStylePropertyEE15moveOverlappingEPS2_S4_S4_(i4 + ((i2 + 1 | 0) * 28 & -1) | 0, (HEAP32[i3 >> 2] | 0) + ((HEAP32[i6 >> 2] | 0) * 28 & -1) | 0, i5);
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) - 1;
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
function __ZN7WebCore24InspectorStyleTextEditor23shiftDisabledPropertiesEjl(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = i1 + 4 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 if (i5 >>> 0 > i2 >>> 0) {
  i6 = i2;
  i7 = i1;
  i8 = i5;
 } else {
  return;
 }
 while (1) {
  if (i8 >>> 0 <= i6 >>> 0) {
   i9 = 3;
   break;
  }
  i1 = HEAP32[i7 >> 2] | 0;
  i2 = i1 + (i6 * 28 & -1) + 12 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + i3;
  i2 = i1 + (i6 * 28 & -1) + 16 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + i3;
  i2 = i6 + 1 | 0;
  if (i2 >>> 0 >= i5 >>> 0) {
   i9 = 8;
   break;
  }
  i1 = HEAP32[i4 >> 2] | 0;
  i6 = i2;
  i7 = i1;
  i8 = HEAP32[i1 + 8 >> 2] | 0;
 }
 if ((i9 | 0) == 3) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i9 | 0) == 8) {
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if (i2 >>> 0 > 153391689 >>> 0) {
  _WTFCrash();
 }
 i6 = i5 + ((HEAP32[i1 + 8 >> 2] | 0) * 28 & -1) | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 28 & -1) | 0;
 HEAP32[i3 >> 2] = (i1 >>> 0) / 28 & -1;
 i2 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF11VectorMoverILb0EN7WebCore22InspectorStylePropertyEE4moveEPS2_S4_S4_(i5, i6, i2);
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
function __ZN7WebCore24InspectorStyleTextEditorC2EPN3WTF6VectorINS_22InspectorStylePropertyELj0ENS1_15CrashOnOverflowEEES6_RKNS1_6StringERKNSt3__14pairIS7_S7_EE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i1 + 16 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZN7WebCore24InspectorStyleTextEditorC1EPN3WTF6VectorINS_22InspectorStylePropertyELj0ENS1_15CrashOnOverflowEEES6_RKNS1_6StringERKNSt3__14pairIS7_S7_EE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i1 + 16 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZN7WebCore24InspectorStyleTextEditor14removePropertyEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 16 | 0);
 __ZN7WebCore24InspectorStyleTextEditor15replacePropertyEjRKN3WTF6StringE(i1, i2, i4);
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
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
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
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
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
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b3() {
 abort(3);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore24InspectorStyleTextEditorC2EPN3WTF6VectorINS_22InspectorStylePropertyELj0ENS1_15CrashOnOverflowEEES6_RKNS1_6StringERKNSt3__14pairIS7_S7_EE,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF20VectorTypeOperationsIN7WebCore22InspectorStylePropertyEE15moveOverlappingEPS2_S4_S4_","_memset","_strlen","__ZN7WebCore24InspectorStyleTextEditor23shiftDisabledPropertiesEjl","__ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev","__ZN7WebCore24InspectorStyleTextEditor15replacePropertyEjRKN3WTF6StringE","__ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE6removeEj","__ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE6insertIRS2_EEvjOT_","__ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_","__ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore24InspectorStyleTextEditorC2EPN3WTF6VectorINS_22InspectorStylePropertyELj0ENS1_15CrashOnOverflowEEES6_RKNS1_6StringERKNSt3__14pairIS7_S7_EE","__ZN7WebCore24InspectorStyleTextEditor14removePropertyEj","_memcpy","__ZN7WebCore24InspectorStyleTextEditor14insertPropertyEjRKN3WTF6StringEj","__ZN7WebCore24InspectorStyleTextEditor22disabledIndexByOrdinalEjb","__ZN3WTF11VectorMoverILb0EN7WebCore22InspectorStylePropertyEE4moveEPS2_S4_S4_","__ZN7WebCore24InspectorStyleTextEditor23internalReplacePropertyERKNS_22InspectorStylePropertyERKN3WTF6StringEPNS_11SourceRangeEPj","__ZN7WebCore24InspectorStyleTextEditor15disablePropertyEj","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore24InspectorStyleTextEditor14enablePropertyEj","__ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE15reserveCapacityEj"]

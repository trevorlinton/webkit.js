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
H_BASE = parentModule["_malloc"](200 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 200;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore22SVGPreserveAspectRatioC1Ev;
/* memory initializer */ allocate([120,77,97,120,89,77,105,100,0,0,0,0,0,0,0,0,120,77,105,100,89,77,105,100,0,0,0,0,0,0,0,0,120,77,105,110,89,77,105,100,0,0,0,0,0,0,0,0,120,77,97,120,89,77,105,110,0,0,0,0,0,0,0,0,120,77,105,100,89,77,105,110,0,0,0,0,0,0,0,0,120,77,105,110,89,77,105,110,0,0,0,0,0,0,0,0,115,108,105,99,101,0,0,0,109,101,101,116,0,0,0,0,32,115,108,105,99,101,0,0,32,109,101,101,116,0,0,0,117,110,107,110,111,119,110,0,120,77,97,120,89,77,97,120,0,0,0,0,0,0,0,0,120,77,105,100,89,77,97,120,0,0,0,0,0,0,0,0,120,77,105,110,89,77,97,120,0,0,0,0,0,0,0,0,110,111,110,101,0,0,0,0,100,101,102,101,114,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function __ZN7WebCore22SVGPreserveAspectRatio5parseERPKtS2_b(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if (i5 >>> 0 < i3 >>> 0) {
   i6 = i5;
   while (1) {
    i7 = HEAP16[i6 >> 1] | 0;
    if (!((i7 << 16 >> 16 | 0) == 32 | (i7 << 16 >> 16 | 0) == 9 | (i7 << 16 >> 16 | 0) == 10 | (i7 << 16 >> 16 | 0) == 13)) {
     i8 = i6;
     break L1;
    }
    i7 = i6 + 2 | 0;
    HEAP32[i2 >> 2] = i7;
    if (i7 >>> 0 < i3 >>> 0) {
     i6 = i7;
    } else {
     i8 = i7;
     break;
    }
   }
  } else {
   i8 = i5;
  }
 } while (0);
 L6 : do {
  if (i8 >>> 0 < i3 >>> 0) {
   i5 = HEAP16[i8 >> 1] | 0;
   if (i5 << 16 >> 16 == 100) {
    if ((i3 - i8 | 0) < 10) {
     break;
    } else {
     i9 = 0;
    }
    while (1) {
     if ((i9 | 0) >= 5) {
      break;
     }
     if ((HEAPU16[i8 + (i9 << 1) >> 1] | 0) == (HEAP8[H_BASE + 200 + i9 | 0] | 0)) {
      i9 = i9 + 1 | 0;
     } else {
      break L6;
     }
    }
    i6 = i8 + 10 | 0;
    HEAP32[i2 >> 2] = i6;
    if ((i6 | 0) == (i3 | 0)) {
     i10 = 1;
     return i10 | 0;
    }
    L17 : do {
     if (i6 >>> 0 < i3 >>> 0) {
      i7 = i6;
      while (1) {
       i11 = HEAP16[i7 >> 1] | 0;
       if (!((i11 << 16 >> 16 | 0) == 32 | (i11 << 16 >> 16 | 0) == 9 | (i11 << 16 >> 16 | 0) == 10 | (i11 << 16 >> 16 | 0) == 13)) {
        i12 = i7;
        break L17;
       }
       i11 = i7 + 2 | 0;
       HEAP32[i2 >> 2] = i11;
       if (i11 >>> 0 < i3 >>> 0) {
        i7 = i11;
       } else {
        i12 = i11;
        break;
       }
      }
     } else {
      i12 = i6;
     }
    } while (0);
    if (i12 >>> 0 >= i3 >>> 0) {
     break;
    }
    i13 = i12;
    i14 = HEAP16[i12 >> 1] | 0;
   } else {
    i13 = i8;
    i14 = i5;
   }
   L24 : do {
    if ((i14 << 16 >> 16 | 0) == 110) {
     if ((i3 - i13 | 0) < 8) {
      break L6;
     } else {
      i15 = 0;
     }
     while (1) {
      if ((i15 | 0) >= 4) {
       break;
      }
      if ((HEAPU16[i13 + (i15 << 1) >> 1] | 0) == (HEAP8[H_BASE + 192 + i15 | 0] | 0)) {
       i15 = i15 + 1 | 0;
      } else {
       break L6;
      }
     }
     HEAP32[i2 >> 2] = i13 + 8;
     HEAP32[i1 >> 2] = 1;
     i6 = HEAP32[i2 >> 2] | 0;
     if (i6 >>> 0 < i3 >>> 0) {
      i16 = i6;
     } else {
      i17 = i6;
      break;
     }
     while (1) {
      i6 = HEAP16[i16 >> 1] | 0;
      if (!((i6 << 16 >> 16 | 0) == 32 | (i6 << 16 >> 16 | 0) == 9 | (i6 << 16 >> 16 | 0) == 10 | (i6 << 16 >> 16 | 0) == 13)) {
       i17 = i16;
       break L24;
      }
      i6 = i16 + 2 | 0;
      HEAP32[i2 >> 2] = i6;
      if (i6 >>> 0 < i3 >>> 0) {
       i16 = i6;
      } else {
       i17 = i6;
       break;
      }
     }
    } else if ((i14 << 16 >> 16 | 0) == 120) {
     if ((i3 - i13 | 0) < 16) {
      break L6;
     }
     if ((HEAP16[i13 + 2 >> 1] | 0) != 77) {
      break L6;
     }
     if ((HEAP16[i13 + 8 >> 1] | 0) != 89) {
      break L6;
     }
     if ((HEAP16[i13 + 10 >> 1] | 0) != 77) {
      break L6;
     }
     i6 = HEAP16[i13 + 4 >> 1] | 0;
     do {
      if ((i6 << 16 >> 16 | 0) == 105) {
       i7 = HEAP16[i13 + 6 >> 1] | 0;
       if ((i7 << 16 >> 16 | 0) == 110) {
        i11 = HEAP16[i13 + 12 >> 1] | 0;
        if ((i11 << 16 >> 16 | 0) == 97) {
         if ((HEAP16[i13 + 14 >> 1] | 0) != 120) {
          break L6;
         }
         HEAP32[i1 >> 2] = 8;
         break;
        } else if ((i11 << 16 >> 16 | 0) != 105) {
         break L6;
        }
        i11 = HEAP16[i13 + 14 >> 1] | 0;
        if ((i11 << 16 >> 16 | 0) == 110) {
         HEAP32[i1 >> 2] = 2;
         break;
        } else if ((i11 << 16 >> 16 | 0) == 100) {
         HEAP32[i1 >> 2] = 5;
         break;
        } else {
         break L6;
        }
       } else if ((i7 << 16 >> 16 | 0) == 100) {
        i7 = HEAP16[i13 + 12 >> 1] | 0;
        if ((i7 << 16 >> 16 | 0) == 97) {
         if ((HEAP16[i13 + 14 >> 1] | 0) != 120) {
          break L6;
         }
         HEAP32[i1 >> 2] = 9;
         break;
        } else if ((i7 << 16 >> 16 | 0) != 105) {
         break L6;
        }
        i7 = HEAP16[i13 + 14 >> 1] | 0;
        if ((i7 << 16 >> 16 | 0) == 110) {
         HEAP32[i1 >> 2] = 3;
         break;
        } else if ((i7 << 16 >> 16 | 0) == 100) {
         HEAP32[i1 >> 2] = 6;
         break;
        } else {
         break L6;
        }
       } else {
        break L6;
       }
      } else if ((i6 << 16 >> 16 | 0) == 97) {
       if ((HEAP16[i13 + 6 >> 1] | 0) != 120) {
        break L6;
       }
       i7 = HEAP16[i13 + 12 >> 1] | 0;
       if ((i7 << 16 >> 16 | 0) == 97) {
        if ((HEAP16[i13 + 14 >> 1] | 0) != 120) {
         break L6;
        }
        HEAP32[i1 >> 2] = 10;
        break;
       } else if ((i7 << 16 >> 16 | 0) != 105) {
        break L6;
       }
       i7 = HEAP16[i13 + 14 >> 1] | 0;
       if ((i7 << 16 >> 16 | 0) == 110) {
        HEAP32[i1 >> 2] = 4;
        break;
       } else if ((i7 << 16 >> 16 | 0) == 100) {
        HEAP32[i1 >> 2] = 7;
        break;
       } else {
        break L6;
       }
      } else {
       break L6;
      }
     } while (0);
     i6 = (HEAP32[i2 >> 2] | 0) + 16 | 0;
     HEAP32[i2 >> 2] = i6;
     if (i6 >>> 0 < i3 >>> 0) {
      i18 = i6;
     } else {
      i17 = i6;
      break;
     }
     while (1) {
      i6 = HEAP16[i18 >> 1] | 0;
      if (!((i6 << 16 >> 16 | 0) == 32 | (i6 << 16 >> 16 | 0) == 9 | (i6 << 16 >> 16 | 0) == 10 | (i6 << 16 >> 16 | 0) == 13)) {
       i17 = i18;
       break L24;
      }
      i6 = i18 + 2 | 0;
      HEAP32[i2 >> 2] = i6;
      if (i6 >>> 0 < i3 >>> 0) {
       i18 = i6;
      } else {
       i17 = i6;
       break;
      }
     }
    } else {
     break L6;
    }
   } while (0);
   L71 : do {
    if (i17 >>> 0 < i3 >>> 0) {
     i5 = HEAP16[i17 >> 1] | 0;
     if ((i5 << 16 >> 16 | 0) == 109) {
      if ((i3 - i17 | 0) < 8) {
       break L6;
      } else {
       i19 = 0;
      }
      while (1) {
       if ((i19 | 0) >= 4) {
        break;
       }
       if ((HEAPU16[i17 + (i19 << 1) >> 1] | 0) == (HEAP8[H_BASE + 112 + i19 | 0] | 0)) {
        i19 = i19 + 1 | 0;
       } else {
        break L6;
       }
      }
      i6 = i17 + 8 | 0;
      HEAP32[i2 >> 2] = i6;
      if (i6 >>> 0 < i3 >>> 0) {
       i20 = i6;
      } else {
       i21 = i6;
       break;
      }
      while (1) {
       i6 = HEAP16[i20 >> 1] | 0;
       if (!((i6 << 16 >> 16 | 0) == 32 | (i6 << 16 >> 16 | 0) == 9 | (i6 << 16 >> 16 | 0) == 10 | (i6 << 16 >> 16 | 0) == 13)) {
        i21 = i20;
        break L71;
       }
       i6 = i20 + 2 | 0;
       HEAP32[i2 >> 2] = i6;
       if (i6 >>> 0 < i3 >>> 0) {
        i20 = i6;
       } else {
        i21 = i6;
        break L71;
       }
      }
     } else if ((i5 << 16 >> 16 | 0) != 115) {
      i21 = i17;
      break;
     }
     if ((i3 - i17 | 0) < 10) {
      break L6;
     } else {
      i22 = 0;
     }
     while (1) {
      if ((i22 | 0) >= 5) {
       break;
      }
      if ((HEAPU16[i17 + (i22 << 1) >> 1] | 0) == (HEAP8[H_BASE + 104 + i22 | 0] | 0)) {
       i22 = i22 + 1 | 0;
      } else {
       break L6;
      }
     }
     i5 = i17 + 10 | 0;
     HEAP32[i2 >> 2] = i5;
     L87 : do {
      if (i5 >>> 0 < i3 >>> 0) {
       i6 = i5;
       while (1) {
        i7 = HEAP16[i6 >> 1] | 0;
        if (!((i7 << 16 >> 16 | 0) == 32 | (i7 << 16 >> 16 | 0) == 9 | (i7 << 16 >> 16 | 0) == 10 | (i7 << 16 >> 16 | 0) == 13)) {
         i23 = i6;
         break L87;
        }
        i7 = i6 + 2 | 0;
        HEAP32[i2 >> 2] = i7;
        if (i7 >>> 0 < i3 >>> 0) {
         i6 = i7;
        } else {
         i23 = i7;
         break;
        }
       }
      } else {
       i23 = i5;
      }
     } while (0);
     if ((HEAP32[i1 >> 2] | 0) == 1) {
      i21 = i23;
      break;
     }
     HEAP32[i1 + 4 >> 2] = 2;
     i21 = HEAP32[i2 >> 2] | 0;
    } else {
     i21 = i17;
    }
   } while (0);
   if ((i21 | 0) == (i3 | 0) | i4 ^ 1) {
    i10 = 1;
   } else {
    break;
   }
   return i10 | 0;
  }
 } while (0);
 HEAP32[i1 >> 2] = 6;
 HEAP32[i1 + 4 >> 2] = 1;
 i10 = 0;
 return i10 | 0;
}
function __ZNK7WebCore22SVGPreserveAspectRatio13valueAsStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 72 | 0;
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 switch (HEAP32[i2 >> 2] | 0) {
 case 1:
  {
   __ZN3WTF6StringC1EPKc(i8, H_BASE + 192 | 0);
   i19 = i8 | 0;
   i8 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   i20 = i8;
   break;
  }
 case 2:
  {
   __ZN3WTF6StringC1EPKc(i9, H_BASE + 88 | 0);
   i8 = i9 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i20 = i9;
   break;
  }
 case 3:
  {
   __ZN3WTF6StringC1EPKc(i10, H_BASE + 72 | 0);
   i9 = i10 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i20 = i10;
   break;
  }
 case 4:
  {
   __ZN3WTF6StringC1EPKc(i11, H_BASE + 56 | 0);
   i10 = i11 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   i20 = i11;
   break;
  }
 case 5:
  {
   __ZN3WTF6StringC1EPKc(i12, H_BASE + 40 | 0);
   i11 = i12 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   i20 = i12;
   break;
  }
 case 6:
  {
   __ZN3WTF6StringC1EPKc(i13, H_BASE + 24 | 0);
   i12 = i13 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i20 = i13;
   break;
  }
 case 7:
  {
   __ZN3WTF6StringC1EPKc(i14, H_BASE + 8 | 0);
   i13 = i14 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   i20 = i14;
   break;
  }
 case 8:
  {
   __ZN3WTF6StringC1EPKc(i15, H_BASE + 176 | 0);
   i14 = i15 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   i20 = i15;
   break;
  }
 case 9:
  {
   __ZN3WTF6StringC1EPKc(i16, H_BASE + 160 | 0);
   i15 = i16 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   i20 = i16;
   break;
  }
 case 10:
  {
   __ZN3WTF6StringC1EPKc(i17, H_BASE + 144 | 0);
   i16 = i17 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   i20 = i17;
   break;
  }
 case 0:
  {
   __ZN3WTF6StringC1EPKc(i18, H_BASE + 136 | 0);
   i17 = i18 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   i20 = i18;
   break;
  }
 default:
  {
   i20 = 0;
  }
 }
 i18 = HEAP32[i2 + 4 >> 2] | 0;
 do {
  if ((i18 | 0) == 1) {
   do {
    if ((i20 | 0) == 0) {
     i21 = 0;
    } else {
     i2 = i20 | 0;
     i17 = HEAP32[i2 >> 2] | 0;
     i16 = i17 + 2 | 0;
     HEAP32[i2 >> 2] = i17 + 4;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      i21 = i20;
      break;
     } else {
      HEAP32[i2 >> 2] = i16;
      i21 = i20;
      break;
     }
    }
   } while (0);
   i16 = i7 | 0;
   HEAP32[i16 >> 2] = i21;
   i2 = (i21 | 0) == 0;
   if (!i2) {
    i17 = i21 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i6, i7, H_BASE + 128 | 0);
   i17 = i6 | 0;
   i15 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   i17 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i16 = i17 | 0;
     i14 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i16 >> 2] = i14;
      break;
     }
    }
   } while (0);
   if ((i15 | 0) == 0) {
    _WTFCrash();
   }
   HEAP32[i1 >> 2] = i15;
   if (i2) {
    break;
   }
   i17 = i21 | 0;
   i14 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i17 >> 2] = i14;
    break;
   }
  } else if ((i18 | 0) == 2) {
   do {
    if ((i20 | 0) == 0) {
     i22 = 0;
    } else {
     i14 = i20 | 0;
     i17 = HEAP32[i14 >> 2] | 0;
     i16 = i17 + 2 | 0;
     HEAP32[i14 >> 2] = i17 + 4;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      i22 = i20;
      break;
     } else {
      HEAP32[i14 >> 2] = i16;
      i22 = i20;
      break;
     }
    }
   } while (0);
   i2 = i5 | 0;
   HEAP32[i2 >> 2] = i22;
   i15 = (i22 | 0) == 0;
   if (!i15) {
    i16 = i22 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, H_BASE + 120 | 0);
   i16 = i4 | 0;
   i14 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   i16 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i2 = i16 | 0;
     i17 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i2 >> 2] = i17;
      break;
     }
    }
   } while (0);
   if ((i14 | 0) == 0) {
    _WTFCrash();
   }
   HEAP32[i1 >> 2] = i14;
   if (i15) {
    break;
   }
   i16 = i22 | 0;
   i17 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i16 >> 2] = i17;
    break;
   }
  } else {
   HEAP32[i1 >> 2] = i20;
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i20 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i20 | 0;
 i22 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i22 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i20);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = i22;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i9 = (i2 | 0) == 0;
 if (i9) {
  i10 = 0;
 } else {
  i10 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(i10 | 0, i7 | 0) | 0;
 i10 = i11;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (!i9) {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   do {
    if ((i10 | 0) == 0) {
     i11 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i11 | 0) == 0) {
      i12 = 37;
      break;
     }
     i13 = i11 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
     i14 = i11;
     i15 = 0;
    } else {
     if (i10 >>> 0 > 2147483637 >>> 0) {
      i12 = 37;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i10 << 1) + 20 | 0);
     i11 = i5 | 0;
     i13 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i13 | 0) == 0) {
      i12 = 37;
      break;
     }
     i11 = i13 + 20 | 0;
     HEAP32[i13 >> 2] = 2;
     HEAP32[i13 + 4 >> 2] = i10;
     HEAP32[i13 + 8 >> 2] = i11;
     HEAP32[i13 + 12 >> 2] = 0;
     HEAP32[i13 + 16 >> 2] = 0;
     i14 = i13;
     i15 = i11;
    }
   } while (0);
   if ((i12 | 0) == 37) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i16 = 0;
    } else {
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
       i17 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i18 = 0;
       }
       while (1) {
        HEAP16[i15 + (i18 << 1) >> 1] = HEAP16[i17 + (i18 << 1) >> 1] | 0;
        i18 = i18 + 1 | 0;
        if (i18 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      } else {
       i17 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i19 = 0;
       }
       while (1) {
        HEAP16[i15 + (i19 << 1) >> 1] = HEAPU8[i17 + i19 | 0] | 0;
        i19 = i19 + 1 | 0;
        if (i19 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i13 = HEAP32[i8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i16 = 0;
      break;
     }
     i16 = HEAP32[i13 + 4 >> 2] | 0;
    }
   } while (0);
   if ((i7 | 0) != 0) {
    i11 = 0;
    while (1) {
     HEAP16[i15 + (i11 + i16 << 1) >> 1] = HEAPU8[i3 + i11 | 0] | 0;
     i11 = i11 + 1 | 0;
     if (i11 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i1 >> 2] = i14;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i10 | 0) == 0) {
   i14 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i14 | 0) == 0) {
    i12 = 19;
    break;
   }
   i16 = i14 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i20 = i14;
   i21 = 0;
  } else {
   if (i10 >>> 0 > 4294967275 >>> 0) {
    i12 = 19;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i10 + 20 | 0);
   i14 = i6 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   if ((i16 | 0) == 0) {
    i12 = 19;
    break;
   }
   i14 = i16 + 20 | 0;
   HEAP32[i16 >> 2] = 2;
   HEAP32[i16 + 4 >> 2] = i10;
   HEAP32[i16 + 8 >> 2] = i14;
   HEAP32[i16 + 12 >> 2] = 0;
   HEAP32[i16 + 16 >> 2] = 32;
   i20 = i16;
   i21 = i14;
  }
 } while (0);
 if ((i12 | 0) == 19) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i12 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i22 = 0;
  } else {
   i10 = HEAP32[i12 + 4 >> 2] | 0;
   i6 = HEAP32[i12 + 8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i23 = i12;
   } else {
    i14 = 0;
    while (1) {
     HEAP8[i21 + i14 | 0] = HEAP8[i6 + i14 | 0] | 0;
     i14 = i14 + 1 | 0;
     if (i14 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
    i10 = HEAP32[i8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i22 = 0;
     break;
    } else {
     i23 = i10;
    }
   }
   i22 = HEAP32[i23 + 4 >> 2] | 0;
  }
 } while (0);
 _memcpy(i21 + i22 | 0, i3 | 0, i7) | 0;
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22SVGPreserveAspectRatio13transformRectERNS_9FloatRectES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, d6 = +0, d7 = +0, d8 = +0, i9 = 0, d10 = +0, i11 = 0, d12 = +0, d13 = +0, d14 = +0, d15 = +0;
 i4 = i1 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 1) {
  return;
 }
 i5 = i3 + 8 | 0;
 d6 = +HEAPF32[i5 >> 2];
 d7 = +HEAPF32[i5 + 4 >> 2];
 i5 = i2 + 8 | 0;
 d8 = +HEAPF32[i5 >> 2];
 i9 = i2 + 12 | 0;
 d10 = +HEAPF32[i9 >> 2];
 i11 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i11 | 0) == 1) {
  d12 = +HEAPF32[i3 + 12 >> 2] / d6;
  d13 = d8 * d12;
  L6 : do {
   if (d10 > d13) {
    HEAPF32[i9 >> 2] = d13;
    switch (HEAP32[i4 >> 2] | 0) {
    case 5:
    case 6:
    case 7:
     {
      i1 = i2 + 4 | 0;
      HEAPF32[i1 >> 2] = d10 * +.5 + +HEAPF32[i1 >> 2] - d13 * +.5;
      break L6;
      break;
     }
    case 8:
    case 9:
    case 10:
     {
      i1 = i2 + 4 | 0;
      HEAPF32[i1 >> 2] = d10 + +HEAPF32[i1 >> 2] - d13;
      break L6;
      break;
     }
    default:
     {
      break L6;
     }
    }
   }
  } while (0);
  d13 = d10 / d12;
  if (d8 <= d13) {
   return;
  }
  HEAPF32[i5 >> 2] = d13;
  switch (HEAP32[i4 >> 2] | 0) {
  case 3:
  case 6:
  case 9:
   {
    i1 = i2 | 0;
    HEAPF32[i1 >> 2] = d8 * +.5 + +HEAPF32[i1 >> 2] - d13 * +.5;
    return;
   }
  case 4:
  case 7:
  case 10:
   {
    i1 = i2 | 0;
    HEAPF32[i1 >> 2] = d8 + +HEAPF32[i1 >> 2] - d13;
    return;
   }
  default:
   {
    return;
   }
  }
 } else if ((i11 | 0) == 2) {
  i11 = i3 + 12 | 0;
  d13 = +HEAPF32[i11 >> 2];
  d12 = d13 / d6;
  L22 : do {
   if (d10 < d8 * d12) {
    d14 = d10 * (d6 / d8);
    HEAPF32[i11 >> 2] = d14;
    switch (HEAP32[i4 >> 2] | 0) {
    case 5:
    case 6:
    case 7:
     {
      i1 = i3 + 4 | 0;
      HEAPF32[i1 >> 2] = d7 * +.5 + +HEAPF32[i1 >> 2] - d14 * +.5;
      d15 = d14;
      break L22;
      break;
     }
    case 8:
    case 9:
    case 10:
     {
      i1 = i3 + 4 | 0;
      HEAPF32[i1 >> 2] = d7 + +HEAPF32[i1 >> 2] - d14;
      d15 = d14;
      break L22;
      break;
     }
    default:
     {
      d15 = d14;
      break L22;
     }
    }
   } else {
    d15 = d13;
   }
  } while (0);
  if (d8 >= d10 / d12) {
   return;
  }
  d12 = d15 / +HEAPF32[i9 >> 2] * +HEAPF32[i5 >> 2];
  HEAPF32[i3 + 8 >> 2] = d12;
  switch (HEAP32[i4 >> 2] | 0) {
  case 3:
  case 6:
  case 9:
   {
    i4 = i3 | 0;
    HEAPF32[i4 >> 2] = d6 * +.5 + +HEAPF32[i4 >> 2] - d12 * +.5;
    return;
   }
  case 4:
  case 7:
  case 10:
   {
    i4 = i3 | 0;
    HEAPF32[i4 >> 2] = d6 + +HEAPF32[i4 >> 2] - d12;
    return;
   }
  default:
   {
    return;
   }
  }
 } else {
  return;
 }
}
function __ZNK7WebCore22SVGPreserveAspectRatio6getCTMEffffff(i1, i2, d3, d4, d5, d6, d7, d8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 d7 = +d7;
 d8 = +d8;
 var i9 = 0, i10 = 0, d11 = +0, d12 = +0, i13 = 0, d14 = +0;
 __ZN7WebCore15AffineTransformC1Ev(i1);
 i9 = i2 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  return;
 }
 d11 = d3;
 d3 = d4;
 d4 = d5;
 d5 = d6;
 d6 = d7;
 d7 = d8;
 d8 = d4 / d5;
 d12 = d6 / d7;
 if ((i10 | 0) == 1) {
  __ZN7WebCore15AffineTransform15scaleNonUniformEdd(i1, d6 / d4, d7 / d5) | 0;
  __ZN7WebCore15AffineTransform9translateEdd(i1, +-0 - d11, +-0 - d3) | 0;
  return;
 }
 if (d8 < d12) {
  if ((HEAP32[i2 + 4 >> 2] | 0) != 1) {
   i13 = 6;
  }
 } else {
  i13 = 6;
 }
 do {
  if ((i13 | 0) == 6) {
   if (d8 >= d12) {
    if ((HEAP32[i2 + 4 >> 2] | 0) == 2) {
     break;
    }
   }
   d14 = d6 / d4;
   __ZN7WebCore15AffineTransform15scaleNonUniformEdd(i1, d14, d14) | 0;
   switch (HEAP32[i9 >> 2] | 0) {
   case 2:
   case 3:
   case 4:
    {
     __ZN7WebCore15AffineTransform9translateEdd(i1, +-0 - d11, +-0 - d3) | 0;
     return;
    }
   case 5:
   case 6:
   case 7:
    {
     __ZN7WebCore15AffineTransform9translateEdd(i1, +-0 - d11, +-0 - d3 - (d5 - d4 * d7 / d6) * +.5) | 0;
     return;
    }
   default:
    {
     __ZN7WebCore15AffineTransform9translateEdd(i1, +-0 - d11, +-0 - d3 - (d5 - d4 * d7 / d6)) | 0;
     return;
    }
   }
  }
 } while (0);
 d12 = d7 / d5;
 __ZN7WebCore15AffineTransform15scaleNonUniformEdd(i1, d12, d12) | 0;
 switch (HEAP32[i9 >> 2] | 0) {
 case 2:
 case 5:
 case 8:
  {
   __ZN7WebCore15AffineTransform9translateEdd(i1, +-0 - d11, +-0 - d3) | 0;
   return;
  }
 case 3:
 case 6:
 case 9:
  {
   __ZN7WebCore15AffineTransform9translateEdd(i1, +-0 - d11 - (d4 - d5 * d6 / d7) * +.5, +-0 - d3) | 0;
   return;
  }
 default:
  {
   __ZN7WebCore15AffineTransform9translateEdd(i1, +-0 - d11 - (d4 - d5 * d6 / d7), +-0 - d3) | 0;
   return;
  }
 }
}
function __ZN7WebCore22SVGPreserveAspectRatio5parseERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   HEAP32[i4 >> 2] = 0;
   i6 = 0;
   i7 = 0;
  } else {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
    i8 = HEAP32[i2 + 8 >> 2] | 0;
    i9 = i2;
   } else {
    i10 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i2) | 0;
    i8 = i10;
    i9 = HEAP32[i5 >> 2] | 0;
   }
   HEAP32[i4 >> 2] = i8;
   if ((i9 | 0) == 0) {
    i6 = 0;
    i7 = i8;
    break;
   }
   i6 = HEAP32[i9 + 4 >> 2] | 0;
   i7 = i8;
  }
 } while (0);
 __ZN7WebCore22SVGPreserveAspectRatio5parseERPKtS2_b(i1, i4, i7 + (i6 << 1) | 0, 1) | 0;
 STACKTOP = i3;
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
function __ZN7WebCore22SVGPreserveAspectRatio14setMeetOrSliceEtRi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if (i2 << 16 >> 16 == 0 | (i2 & 65535) >>> 0 > 2 >>> 0) {
  HEAP32[i3 >> 2] = 9;
  return;
 } else {
  HEAP32[i1 + 4 >> 2] = i2 & 65535;
  return;
 }
}
function __ZN7WebCore22SVGPreserveAspectRatio8setAlignEtRi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if (i2 << 16 >> 16 == 0 | (i2 & 65535) >>> 0 > 10 >>> 0) {
  HEAP32[i3 >> 2] = 9;
  return;
 } else {
  HEAP32[i1 >> 2] = i2 & 65535;
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
function __ZN7WebCore22SVGPreserveAspectRatioC2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 6;
 HEAP32[i1 + 4 >> 2] = 1;
 return;
}
function __ZN7WebCore22SVGPreserveAspectRatioC1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 6;
 HEAP32[i1 + 4 >> 2] = 1;
 return;
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
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore22SVGPreserveAspectRatioC2Ev,b3];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore22SVGPreserveAspectRatio14setMeetOrSliceEtRi","_strlen","__ZN7WebCore22SVGPreserveAspectRatio8setAlignEtRi","__ZNK7WebCore22SVGPreserveAspectRatio6getCTMEffffff","__ZNK7WebCore22SVGPreserveAspectRatio13valueAsStringEv","_memset","_memcpy","__ZN7WebCore22SVGPreserveAspectRatio5parseERKN3WTF6StringE","__ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore22SVGPreserveAspectRatio5parseERPKtS2_b","__ZN7WebCore22SVGPreserveAspectRatioC2Ev","__ZN7WebCore22SVGPreserveAspectRatio13transformRectERNS_9FloatRectES2_"]

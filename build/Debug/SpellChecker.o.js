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
var __ZN7WebCore17SpellCheckRequestC1EN3WTF10PassRefPtrINS_5RangeEEES4_RKNS1_6StringEjNS_23TextCheckingProcessTypeE;
var __ZN7WebCore17SpellCheckRequestD1Ev;
var __ZN7WebCore12SpellCheckerC1ERNS_5FrameE;
var __ZN7WebCore12SpellCheckerD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_did(index,a1,a2) {
  try {
    return Module["dynCall_did"](index,a1,a2);
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
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
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
  var __ZTVN7WebCore5TimerINS_12SpellCheckerEEE=(H_BASE+8)|0;
  var __ZTVN7WebCore17SpellCheckRequestE=(H_BASE+40)|0;
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
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore12SpellChecker14enqueueRequestEN3WTF10PassRefPtrINS_17SpellCheckRequestEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = i1 + 76 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 80 | 0;
 do {
  if ((i5 | 0) == (HEAP32[i6 >> 2] | 0)) {
   i7 = i5;
   i8 = i5;
  } else {
   i9 = i2 | 0;
   i10 = i1 + 84 | 0;
   i11 = i1 + 88 | 0;
   i12 = i5;
   while (1) {
    i13 = HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0;
    i14 = (i13 | 0) == 0;
    if (!i14) {
     i15 = i13 + 8 | 0;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
    }
    i15 = HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + (i12 << 2) >> 2] | 0) + 20 >> 2] | 0;
    do {
     if ((i15 | 0) == 0) {
      i16 = (i13 | 0) != 0;
     } else {
      i17 = HEAP32[i15 + 8 >> 2] | 0;
      i18 = (i13 | 0) != (i15 | 0);
      i19 = i15 + 8 | 0;
      HEAP32[i19 >> 2] = i17;
      if ((i17 | 0) >= 1) {
       i16 = i18;
       break;
      }
      if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
       i16 = i18;
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
      i16 = i18;
     }
    } while (0);
    do {
     if (!i14) {
      i15 = i13 + 8 | 0;
      i18 = i15 | 0;
      i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
      HEAP32[i18 >> 2] = i19;
      if ((i19 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
     }
    } while (0);
    if (!i16) {
     break;
    }
    i20 = (i12 | 0) == ((HEAP32[i11 >> 2] | 0) - 1 | 0) ? 0 : i12 + 1 | 0;
    if ((i20 | 0) == (HEAP32[i6 >> 2] | 0)) {
     i21 = 21;
     break;
    } else {
     i12 = i20;
    }
   }
   if ((i21 | 0) == 21) {
    i7 = i20;
    i8 = HEAP32[i4 >> 2] | 0;
    break;
   }
   i11 = HEAP32[i10 >> 2] | 0;
   i13 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i14 = i11 + (i12 << 2) | 0;
   i11 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i13;
   if ((i11 | 0) == 0) {
    return;
   }
   i13 = i11 + 4 | 0;
   i11 = i13 | 0;
   i14 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i11 >> 2] = i14;
    return;
   }
   i14 = i13 - 4 | 0;
   if ((i14 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 15](i14);
   return;
  }
 } while (0);
 do {
  if ((i8 | 0) == 0) {
   i4 = HEAP32[i1 + 88 >> 2] | 0;
   if ((i7 | 0) == 0) {
    if ((i4 | 0) == 0) {
     i21 = 27;
     break;
    } else {
     i22 = 0;
     break;
    }
   } else {
    if ((i7 | 0) == (i4 - 1 | 0)) {
     i21 = 27;
     break;
    } else {
     i22 = i7;
     break;
    }
   }
  } else {
   if ((i7 + 1 | 0) == (i8 | 0)) {
    i21 = 27;
   } else {
    i22 = i7;
   }
  }
 } while (0);
 if ((i21 | 0) == 27) {
  __ZN3WTF5DequeINS_6RefPtrIN7WebCore17SpellCheckRequestEEELj0EE14expandCapacityEv(i3);
  i22 = HEAP32[i6 >> 2] | 0;
 }
 i3 = (HEAP32[i1 + 84 >> 2] | 0) + (i22 << 2) | 0;
 i22 = i2 | 0;
 i2 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = (i2 | 0) == ((HEAP32[i1 + 88 >> 2] | 0) - 1 | 0) ? 0 : i2 + 1 | 0;
 return;
}
function __ZN7WebCore12SpellChecker14didCheckCancelEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i4 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i4 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore12SpellChecker8didCheckEiRKN3WTF6VectorINS_18TextCheckingResultELj0ENS1_15CrashOnOverflowEEE(i1, i2, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i2 = HEAP32[i5 >> 2] | 0;
  i1 = i2 + (i4 * 28 & -1) | 0;
  i4 = i2;
  while (1) {
   i2 = HEAP32[i4 + 24 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i8 = i2 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i2 = i4 + 20 | 0;
   i9 = HEAP32[i2 >> 2] | 0;
   i8 = i4 + 12 | 0;
   if ((i9 | 0) != 0) {
    i10 = HEAP32[i8 >> 2] | 0;
    i11 = i10 + (i9 * 24 & -1) | 0;
    i9 = i10;
    while (1) {
     i10 = HEAP32[i9 + 20 >> 2] | 0;
     do {
      if ((i10 | 0) != 0) {
       i12 = i10 | 0;
       i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
       if ((i13 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i10);
        break;
       } else {
        HEAP32[i12 >> 2] = i13;
        break;
       }
      }
     } while (0);
     i10 = i9 + 16 | 0;
     i13 = HEAP32[i10 >> 2] | 0;
     i12 = i9 + 8 | 0;
     if ((i13 | 0) != 0) {
      i14 = HEAP32[i12 >> 2] | 0;
      i15 = i14 + (i13 << 2) | 0;
      i13 = i14;
      while (1) {
       i14 = HEAP32[i13 >> 2] | 0;
       do {
        if ((i14 | 0) != 0) {
         i16 = i14 | 0;
         i17 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
         if ((i17 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i14);
          break;
         } else {
          HEAP32[i16 >> 2] = i17;
          break;
         }
        }
       } while (0);
       i13 = i13 + 4 | 0;
       if ((i13 | 0) == (i15 | 0)) {
        break;
       }
      }
      HEAP32[i10 >> 2] = 0;
     }
     i15 = HEAP32[i12 >> 2] | 0;
     if ((i15 | 0) != 0) {
      HEAP32[i12 >> 2] = 0;
      HEAP32[i9 + 12 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i15);
     }
     i9 = i9 + 24 | 0;
     if ((i9 | 0) == (i11 | 0)) {
      break;
     }
    }
    HEAP32[i2 >> 2] = 0;
   }
   i11 = HEAP32[i8 >> 2] | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i4 + 16 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i11);
   }
   i4 = i4 + 28 | 0;
   if ((i4 | 0) == (i1 | 0)) {
    break;
   }
  }
  HEAP32[i7 >> 2] = 0;
 }
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12SpellChecker18requestCheckingForEN3WTF10PassRefPtrINS_17SpellCheckRequestEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   if (__ZNK7WebCore12SpellChecker22canCheckAsynchronouslyEPNS_5RangeE(i1, 0) | 0) {
    break;
   }
   STACKTOP = i3;
   return;
  } else {
   i2 = i7 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
   i8 = __ZNK7WebCore12SpellChecker22canCheckAsynchronouslyEPNS_5RangeE(i1, i7) | 0;
   i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    if (i8) {
     break;
    }
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i2 >> 2] = i9;
    if (i8) {
     break;
    }
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 i7 = i1 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i8 + 1 | 0;
 i2 = (i9 | 0) == -1 ? i8 + 2 | 0 : i9;
 HEAP32[i7 >> 2] = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i7 + 8 >> 2] = i1;
 HEAP32[i7 + 24 >> 2] = i2;
 do {
  if (+HEAPF64[i1 + 24 >> 3] == +0) {
   if ((HEAP32[i1 + 72 >> 2] | 0) != 0) {
    break;
   }
   i2 = i5 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i2 >> 2] = i7;
   __ZN7WebCore12SpellChecker13invokeRequestEN3WTF10PassRefPtrINS_17SpellCheckRequestEEE(i1, i5);
   i7 = HEAP32[i2 >> 2] | 0;
   if ((i7 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i2 = i7 + 4 | 0;
   i7 = i2 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i7 >> 2] = i9;
    STACKTOP = i3;
    return;
   }
   i9 = i2 - 4 | 0;
   if ((i9 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
   STACKTOP = i3;
   return;
  }
 } while (0);
 i5 = i4 | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i5 >> 2] = i9;
 __ZN7WebCore12SpellChecker14enqueueRequestEN3WTF10PassRefPtrINS_17SpellCheckRequestEEE(i1, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i4 + 4 | 0;
 i4 = i5 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12SpellChecker8didCheckEiRKN3WTF6VectorINS_18TextCheckingResultELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 72 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 3](i7) | 0) >> 2] | 0) != (i2 | 0)) {
  i7 = i1 + 76 | 0;
  __ZN3WTF5DequeINS_6RefPtrIN7WebCore17SpellCheckRequestEEELj0EE10destroyAllEv(i7);
  HEAP32[i7 >> 2] = 0;
  HEAP32[i1 + 80 >> 2] = 0;
  i7 = i1 + 84 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  if ((i8 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  HEAP32[i7 >> 2] = 0;
  HEAP32[i1 + 88 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i4;
  return;
 }
 i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + 464 >> 2] | 0;
 i7 = i5 | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 HEAP32[i7 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i10 = i9 + 4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 __ZN7WebCore6Editor17markAndReplaceForEN3WTF10PassRefPtrINS_17SpellCheckRequestEEERKNS1_6VectorINS_18TextCheckingResultELj0ENS1_15CrashOnOverflowEEE(i8, i5, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 + 4 | 0;
   i5 = i7 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i5 >> 2] = i8;
    break;
   }
   i8 = i7 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
  }
 } while (0);
 i3 = i1 + 8 | 0;
 if ((HEAP32[i3 >> 2] | 0) < (i2 | 0)) {
  HEAP32[i3 >> 2] = i2;
 }
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 4 | 0;
   i3 = i6 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i3 >> 2] = i8;
    break;
   }
   i8 = i6 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
  }
 } while (0);
 if ((HEAP32[i1 + 76 >> 2] | 0) == (HEAP32[i1 + 80 >> 2] | 0)) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 16 | 0, +0, +0);
 STACKTOP = i4;
 return;
}
function __ZN3WTF5DequeINS_6RefPtrIN7WebCore17SpellCheckRequestEEELj0EE10destroyAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + (i4 << 2) | 0;
 if (i3 >>> 0 <= i4 >>> 0) {
  if ((i3 | 0) == (i4 | 0)) {
   return;
  }
  i8 = i6 + (i3 << 2) | 0;
  while (1) {
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 + 4 | 0;
     i11 = i10 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) != 0) {
      HEAP32[i11 >> 2] = i12;
      break;
     }
     i12 = i10 - 4 | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 15](i12);
    }
   } while (0);
   i8 = i8 + 4 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  return;
 }
 if ((i4 | 0) == 0) {
  i13 = i6;
  i14 = i3;
 } else {
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i4 = i6 + 4 | 0;
     i8 = i4 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i4 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  i13 = HEAP32[i5 >> 2] | 0;
  i14 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i13 + (i2 << 2) | 0;
 if ((i14 | 0) == (i2 | 0)) {
  return;
 }
 i2 = i13 + (i14 << 2) | 0;
 while (1) {
  i14 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i14 | 0) != 0) {
    i13 = i14 + 4 | 0;
    i5 = i13 | 0;
    i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
    if ((i7 | 0) != 0) {
     HEAP32[i5 >> 2] = i7;
     break;
    }
    i7 = i13 - 4 | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
   }
  } while (0);
  i2 = i2 + 4 | 0;
  if ((i2 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore12SpellChecker15didCheckSucceedEiRKN3WTF6VectorINS_18TextCheckingResultELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 72 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 3](i7) | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i8 + 4 >> 2] | 0;
 i10 = (i9 | 0) == 0;
 if (!i10) {
  i11 = i9 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 i11 = HEAP32[i8 + 8 >> 2] | 0;
 do {
  if ((i7 | 0) == (i2 | 0)) {
   i8 = i11 >>> 1 & 1;
   i12 = (i11 & 4 | 0) == 0 ? i8 : i8 | 2;
   if ((i12 | 0) == 0) {
    break;
   }
   i8 = HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0) + 1124 >> 2] | 0;
   i13 = HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] | 0;
   if ((i13 | 0) == 0) {
    HEAP32[i5 >> 2] = i12;
    __ZN7WebCore24DocumentMarkerController13removeMarkersEPNS_5RangeENS_14DocumentMarker11MarkerTypesENS0_37RemovePartiallyOverlappingMarkerOrNotE(i8, 0, i5, 0);
    break;
   }
   i14 = i13 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   HEAP32[i5 >> 2] = i12;
   __ZN7WebCore24DocumentMarkerController13removeMarkersEPNS_5RangeENS_14DocumentMarker11MarkerTypesENS0_37RemovePartiallyOverlappingMarkerOrNotE(i8, i13, i5, 0);
   i8 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i13);
    __ZN3WTF8fastFreeEPv(i13);
    break;
   } else {
    HEAP32[i14 >> 2] = i8;
    break;
   }
  }
 } while (0);
 __ZN7WebCore12SpellChecker8didCheckEiRKN3WTF6VectorINS_18TextCheckingResultELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3);
 if (i10) {
  STACKTOP = i4;
  return;
 }
 i10 = i9 | 0;
 i3 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i9);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i10 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore12SpellChecker32timerFiredToProcessQueuedRequestEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 76 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == (HEAP32[i1 + 80 >> 2] | 0)) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 + 84 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) + (i5 << 2) | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = HEAP32[(HEAP32[i6 >> 2] | 0) + (HEAP32[i4 >> 2] << 2) >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 + 4 | 0;
   i8 = i6 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i8 >> 2] = i9;
    break;
   }
   i9 = i6 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
  }
 } while (0);
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = (i7 | 0) == ((HEAP32[i1 + 88 >> 2] | 0) - 1 | 0) ? 0 : i7 + 1 | 0;
 i7 = i3 | 0;
 HEAP32[i7 >> 2] = i5;
 i4 = (i5 | 0) == 0;
 if (!i4) {
  i9 = i5 + 4 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 __ZN7WebCore12SpellChecker13invokeRequestEN3WTF10PassRefPtrINS_17SpellCheckRequestEEE(i1, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 + 4 | 0;
   i1 = i7 | 0;
   i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i1 >> 2] = i9;
    break;
   }
   i9 = i7 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
  }
 } while (0);
 if (i4) {
  STACKTOP = i2;
  return;
 }
 i4 = i5 + 4 | 0;
 i5 = i4 | 0;
 i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i5 >> 2] = i3;
  STACKTOP = i2;
  return;
 }
 i3 = i4 - 4 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17SpellCheckRequest6createEjNS_23TextCheckingProcessTypeEN3WTF10PassRefPtrINS_5RangeEEES5_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i4 | 0;
 __ZNK7WebCore5Range4textEv(i7, HEAP32[i8 >> 2] | 0);
 i4 = i7 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i9 = 3;
  } else {
   if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
    i9 = 3;
    break;
   }
   i10 = __ZN3WTF10fastMallocEj(40) | 0;
   i11 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i12 = i5 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i10 + 4 >> 2] = 1;
   HEAP32[i10 >> 2] = H_BASE + 48;
   HEAP32[i10 + 8 >> 2] = 0;
   HEAP32[i10 + 12 >> 2] = i11;
   HEAP32[i10 + 16 >> 2] = i13;
   i13 = __ZNK7WebCore4Node19rootEditableElementEv(HEAP32[i11 + 8 >> 2] | 0) | 0;
   HEAP32[i10 + 20 >> 2] = i13;
   if ((i13 | 0) != 0) {
    i11 = i13 + 8 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   }
   HEAP32[i10 + 24 >> 2] = -1;
   i11 = HEAP32[i4 >> 2] | 0;
   HEAP32[i10 + 28 >> 2] = i11;
   if ((i11 | 0) != 0) {
    i13 = i11 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   }
   HEAP32[i10 + 32 >> 2] = i2;
   HEAP32[i10 + 36 >> 2] = i3;
   HEAP32[i1 >> 2] = i10;
   i14 = HEAP32[i4 >> 2] | 0;
  }
 } while (0);
 if ((i9 | 0) == 3) {
  HEAP32[i1 >> 2] = 0;
  i14 = i7;
 }
 if ((i14 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i7 = i14 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i14);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i7 >> 2] = i1;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore12SpellChecker13invokeRequestEN3WTF10PassRefPtrINS_17SpellCheckRequestEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i6 + 72 >> 2] | 0;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 168 >> 2] & 3](i7) | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i1 + 72 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i2;
 do {
  if ((i1 | 0) != 0) {
   i2 = i1 + 4 | 0;
   i6 = i2 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i6 >> 2] = i8;
    break;
   }
   i8 = i2 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
  }
 } while (0);
 i1 = HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0) + 72 >> 2] | 0;
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 168 >> 2] & 3](i1) | 0;
 i1 = HEAP32[(HEAP32[i5 >> 2] | 0) + 36 >> 2] | 0;
 i8 = i4 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i8 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i7 = i2 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 FUNCTION_TABLE_vii[i1 & 7](i5, i4);
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i4 + 4 | 0;
 i4 = i8 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 i5 = i8 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12SpellCheckerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 72 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i3 + 8 >> 2] = 0;
 }
 i3 = i1 + 76 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 80 | 0;
 i6 = i1 + 84 | 0;
 if ((i4 | 0) != (HEAP32[i5 >> 2] | 0)) {
  i7 = i1 + 88 | 0;
  i8 = i4;
  while (1) {
   HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + (i8 << 2) >> 2] | 0) + 8 >> 2] = 0;
   i8 = (i8 | 0) == ((HEAP32[i7 >> 2] | 0) - 1 | 0) ? 0 : i8 + 1 | 0;
   if ((i8 | 0) == (HEAP32[i5 >> 2] | 0)) {
    break;
   }
  }
 }
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore17SpellCheckRequestEEELj0EE10destroyAllEv(i3);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 88 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i9 = i1 + 16 | 0;
  i10 = i9;
  __ZN7WebCore9TimerBaseD2Ev(i10);
  return;
 }
 i2 = i3 + 4 | 0;
 i3 = i2 | 0;
 i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i3 >> 2] = i6;
  i9 = i1 + 16 | 0;
  i10 = i9;
  __ZN7WebCore9TimerBaseD2Ev(i10);
  return;
 }
 i6 = i2 - 4 | 0;
 if ((i6 | 0) == 0) {
  i9 = i1 + 16 | 0;
  i10 = i9;
  __ZN7WebCore9TimerBaseD2Ev(i10);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
 i9 = i1 + 16 | 0;
 i10 = i9;
 __ZN7WebCore9TimerBaseD2Ev(i10);
 return;
}
function __ZN7WebCore12SpellCheckerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 72 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i3 + 8 >> 2] = 0;
 }
 i3 = i1 + 76 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 80 | 0;
 i6 = i1 + 84 | 0;
 if ((i4 | 0) != (HEAP32[i5 >> 2] | 0)) {
  i7 = i1 + 88 | 0;
  i8 = i4;
  while (1) {
   HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + (i8 << 2) >> 2] | 0) + 8 >> 2] = 0;
   i8 = (i8 | 0) == ((HEAP32[i7 >> 2] | 0) - 1 | 0) ? 0 : i8 + 1 | 0;
   if ((i8 | 0) == (HEAP32[i5 >> 2] | 0)) {
    break;
   }
  }
 }
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore17SpellCheckRequestEEELj0EE10destroyAllEv(i3);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 88 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i9 = i1 + 16 | 0;
  i10 = i9;
  __ZN7WebCore9TimerBaseD2Ev(i10);
  return;
 }
 i2 = i3 + 4 | 0;
 i3 = i2 | 0;
 i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i3 >> 2] = i6;
  i9 = i1 + 16 | 0;
  i10 = i9;
  __ZN7WebCore9TimerBaseD2Ev(i10);
  return;
 }
 i6 = i2 - 4 | 0;
 if ((i6 | 0) == 0) {
  i9 = i1 + 16 | 0;
  i10 = i9;
  __ZN7WebCore9TimerBaseD2Ev(i10);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
 i9 = i1 + 16 | 0;
 i10 = i9;
 __ZN7WebCore9TimerBaseD2Ev(i10);
 return;
}
function __ZN7WebCore17SpellCheckRequestD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
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
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 8 | 0;
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i5;
  return;
 }
}
function __ZN7WebCore17SpellCheckRequestD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
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
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 8 | 0;
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i5;
  return;
 }
}
function __ZN7WebCore17SpellCheckRequestC2EN3WTF10PassRefPtrINS_5RangeEEES4_RKNS1_6StringEjNS_23TextCheckingProcessTypeE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 48;
 HEAP32[i1 + 8 >> 2] = 0;
 i7 = i1 + 12 | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i7 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i3;
 i3 = __ZNK7WebCore4Node19rootEditableElementEv(HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0) | 0;
 HEAP32[i1 + 20 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i7 = i3 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 24 >> 2] = -1;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 28 >> 2] = i7;
 if ((i7 | 0) == 0) {
  i9 = i1 + 32 | 0;
  HEAP32[i9 >> 2] = i5;
  i10 = i1 + 36 | 0;
  HEAP32[i10 >> 2] = i6;
  return;
 }
 i4 = i7 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 i9 = i1 + 32 | 0;
 HEAP32[i9 >> 2] = i5;
 i10 = i1 + 36 | 0;
 HEAP32[i10 >> 2] = i6;
 return;
}
function __ZN7WebCore17SpellCheckRequestC1EN3WTF10PassRefPtrINS_5RangeEEES4_RKNS1_6StringEjNS_23TextCheckingProcessTypeE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 48;
 HEAP32[i1 + 8 >> 2] = 0;
 i7 = i1 + 12 | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i7 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i3;
 i3 = __ZNK7WebCore4Node19rootEditableElementEv(HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0) | 0;
 HEAP32[i1 + 20 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i7 = i3 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 24 >> 2] = -1;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 28 >> 2] = i7;
 if ((i7 | 0) == 0) {
  i9 = i1 + 32 | 0;
  HEAP32[i9 >> 2] = i5;
  i10 = i1 + 36 | 0;
  HEAP32[i10 >> 2] = i6;
  return;
 }
 i4 = i7 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 i9 = i1 + 32 | 0;
 HEAP32[i9 >> 2] = i5;
 i10 = i1 + 36 | 0;
 HEAP32[i10 >> 2] = i6;
 return;
}
function __ZNK7WebCore12SpellChecker22canCheckAsynchronouslyEPNS_5RangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 | 0;
 i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 72 >> 2] | 0;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 168 >> 2] & 3](i5) | 0) == 0 | (i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((__ZNK7WebCore5Range9firstNodeEv(i2) | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = __ZNK7WebCore5Range9firstNodeEv(i2) | 0;
 i1 = i5 + 32 | 0;
 if ((HEAP32[i5 + 12 >> 2] & 2048 | 0) == 0) {
  i6 = i1 | 0;
 } else {
  i6 = HEAP32[i1 >> 2] | 0;
 }
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   if ((HEAP32[i6 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 504 >> 2] & 3](i6) | 0) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 i4 = (HEAP8[(HEAP32[(HEAP32[i3 >> 2] | 0) + 36 >> 2] | 0) + 182 | 0] & 8) != 0;
 return i4 | 0;
}
function __ZN3WTF5DequeINS_6RefPtrIN7WebCore17SpellCheckRequestEEELj0EE14expandCapacityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + 1 + (i3 >>> 2) | 0;
 i7 = i6 >>> 0 > 16 >>> 0 ? i6 : 16;
 if (i7 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 2) | 0;
 HEAP32[i2 >> 2] = i6 >>> 2;
 i7 = __ZN3WTF10fastMallocEj(i6) | 0;
 i6 = i7;
 HEAP32[i4 >> 2] = i6;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 if (i9 >>> 0 > i10 >>> 0) {
  _memcpy(i7 | 0, i5 | 0, i10 << 2) | 0;
  i7 = HEAP32[i8 >> 2] | 0;
  i1 = i7 - i3 + (HEAP32[i2 >> 2] | 0) | 0;
  _memcpy((HEAP32[i4 >> 2] | 0) + (i1 << 2) | 0, i5 + (i7 << 2) | 0, i3 - i7 << 2) | 0;
  HEAP32[i8 >> 2] = i1;
 } else {
  _memcpy(i6 + (i9 << 2) | 0, i5 + (i9 << 2) | 0, i10 - i9 << 2) | 0;
 }
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
function __ZNK7WebCore12SpellChecker11isCheckableEPNS_5RangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((__ZNK7WebCore5Range9firstNodeEv(i2) | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = __ZNK7WebCore5Range9firstNodeEv(i2) | 0;
 i4 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if ((HEAP32[i5 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 504 >> 2] & 3](i5) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = 1;
 return i3 | 0;
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
function __ZN7WebCore5TimerINS_12SpellCheckerEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 7](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 7](i4, i1);
  return;
 }
}
function __ZN7WebCore17SpellCheckRequest10didSucceedERKN3WTF6VectorINS_18TextCheckingResultELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 __ZN7WebCore12SpellChecker15didCheckSucceedEiRKN3WTF6VectorINS_18TextCheckingResultELj0ENS1_15CrashOnOverflowEEE(i4, HEAP32[i1 + 24 >> 2] | 0, i2);
 HEAP32[i3 >> 2] = 0;
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
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 8;
}
function __ZN7WebCore12SpellCheckerC2ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 i2 = i1 + 16 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 16;
 HEAP32[i1 + 60 >> 2] = i1;
 i2 = i1 + 64 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 2;
 HEAP32[i2 + 4 >> 2] = 0;
 _memset(i1 + 72 | 0, 0, 24) | 0;
 return;
}
function __ZN7WebCore12SpellCheckerC1ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 i2 = i1 + 16 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 16;
 HEAP32[i1 + 60 >> 2] = i1;
 i2 = i1 + 64 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 2;
 HEAP32[i2 + 4 >> 2] = 0;
 _memset(i1 + 72 | 0, 0, 24) | 0;
 return;
}
function __ZNK7WebCore12SpellChecker6clientEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 72 >> 2] | 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 168 >> 2] & 3](i1) | 0;
 return i3 | 0;
}
function __ZN7WebCore17SpellCheckRequest9didCancelEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore12SpellChecker14didCheckCancelEi(i3, HEAP32[i1 + 24 >> 2] | 0);
 HEAP32[i2 >> 2] = 0;
 return;
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore17SpellCheckRequest21setCheckerAndSequenceEPNS_12SpellCheckerEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 + 8 >> 2] = i2;
 HEAP32[i1 + 24 >> 2] = i3;
 return;
}
function __ZNK7WebCore12SpellChecker21isAsynchronousEnabledEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[(HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] | 0) + 182 | 0] & 8) != 0 | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore5TimerINS_12SpellCheckerEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function __ZN7WebCore17SpellCheckRequestD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17SpellCheckRequestD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function b5(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(5);
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
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function __ZN7WebCore17SpellCheckRequest18requesterDestroyedEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 8 >> 2] = 0;
 return;
}
function __ZN7WebCore5TimerINS_12SpellCheckerEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZNK7WebCore17SpellCheckRequest4dataEv(i1) {
 i1 = i1 | 0;
 return i1 + 24 | 0;
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function b0(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(0);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
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
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_did = [b0,b0,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore5TimerINS_12SpellCheckerEED1Ev,b1,__ZN7WebCore5TimerINS_12SpellCheckerEE5firedEv,b1,__ZN7WebCore5TimerINS_12SpellCheckerEED0Ev,b1,__ZN7WebCore17SpellCheckRequest9didCancelEv,b1,__ZN7WebCore17SpellCheckRequestD2Ev,b1,__ZN7WebCore12SpellCheckerD2Ev,b1,__ZN7WebCore17SpellCheckRequestD0Ev,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore12SpellChecker32timerFiredToProcessQueuedRequestEPNS_5TimerIS0_EE,b2,__ZN7WebCore17SpellCheckRequest10didSucceedERKN3WTF6VectorINS_18TextCheckingResultELj0ENS1_15CrashOnOverflowEEE,b2,__ZN7WebCore12SpellCheckerC2ERNS_5FrameE,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore17SpellCheckRequest4dataEv,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_viiiiii = [b5,b5,__ZN7WebCore17SpellCheckRequestC2EN3WTF10PassRefPtrINS_5RangeEEES4_RKNS1_6StringEjNS_23TextCheckingProcessTypeE,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore5TimerINS_12SpellCheckerEED0Ev","__ZNK7WebCore12SpellChecker22canCheckAsynchronouslyEPNS_5RangeE","__ZNK7WebCore12SpellChecker21isAsynchronousEnabledEv","__ZN7WebCore17SpellCheckRequestD2Ev","__ZN7WebCore17SpellCheckRequestC2EN3WTF10PassRefPtrINS_5RangeEEES4_RKNS1_6StringEjNS_23TextCheckingProcessTypeE","__ZNK7WebCore12SpellChecker6clientEv","__ZN7WebCore12SpellChecker15didCheckSucceedEiRKN3WTF6VectorINS_18TextCheckingResultELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN7WebCore12SpellChecker32timerFiredToProcessQueuedRequestEPNS_5TimerIS0_EE","__ZN7WebCore12SpellChecker13invokeRequestEN3WTF10PassRefPtrINS_17SpellCheckRequestEEE","__ZN7WebCore17SpellCheckRequest9didCancelEv","_memcpy","__ZN7WebCore17SpellCheckRequest10didSucceedERKN3WTF6VectorINS_18TextCheckingResultELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore12SpellCheckerC2ERNS_5FrameE","__ZN7WebCore12SpellChecker18requestCheckingForEN3WTF10PassRefPtrINS_17SpellCheckRequestEEE","_memset","__ZN7WebCore12SpellChecker14didCheckCancelEi","__ZN7WebCore17SpellCheckRequest6createEjNS_23TextCheckingProcessTypeEN3WTF10PassRefPtrINS_5RangeEEES5_","__ZN7WebCore12SpellChecker14enqueueRequestEN3WTF10PassRefPtrINS_17SpellCheckRequestEEE","__ZNK7WebCore17SpellCheckRequest4dataEv","__ZNK7WebCore12SpellChecker11isCheckableEPNS_5RangeE","__ZN7WebCore17SpellCheckRequest21setCheckerAndSequenceEPNS_12SpellCheckerEi","__ZN3WTF5DequeINS_6RefPtrIN7WebCore17SpellCheckRequestEEELj0EE10destroyAllEv","__ZN7WebCore5TimerINS_12SpellCheckerEED1Ev","__ZN3WTF5DequeINS_6RefPtrIN7WebCore17SpellCheckRequestEEELj0EE14expandCapacityEv","__ZN7WebCore5TimerINS_12SpellCheckerEE5firedEv","__ZN7WebCore17SpellCheckRequest18requesterDestroyedEv","__ZN7WebCore12SpellChecker8didCheckEiRKN3WTF6VectorINS_18TextCheckingResultELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore12SpellCheckerD2Ev","__ZN7WebCore17SpellCheckRequestD0Ev"]

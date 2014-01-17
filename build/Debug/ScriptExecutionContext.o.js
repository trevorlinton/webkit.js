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
H_BASE = parentModule["_malloc"](224 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 224;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore22ScriptExecutionContextD1Ev;
var __ZN7WebCore22ScriptExecutionContext4TaskD1Ev;
/* memory initializer */ allocate([83,99,114,105,112,116,32,101,114,114,111,114,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  try {
    Module["dynCall_viiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
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
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
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
  var __ZTVN7WebCore22ScriptExecutionContext4TaskE=(H_BASE+168)|0;
  var __ZTVN7WebCore22ScriptExecutionContextE=(H_BASE+56)|0;
  var __ZTVN7WebCore22ScriptExecutionContext21AddConsoleMessageTaskE=(H_BASE+200)|0;
  var __ZTVN7WebCore23ProcessMessagesSoonTaskE=(H_BASE+24)|0;
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
  var invoke_viiiiiiiiii=env.invoke_viiiiiiiiii;
  var invoke_di=env.invoke_di;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore22ScriptExecutionContextD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP8[i1 + 101 | 0] = 1;
 i4 = i1 + 60 | 0;
 i5 = i1 + 72 | 0;
 i6 = i4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i1 + 64 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i7 + (i9 << 2) | 0;
 L1 : do {
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   L3 : do {
    if ((i9 | 0) == 0) {
     i11 = i7;
    } else {
     i12 = i7;
     while (1) {
      i13 = HEAP32[i12 >> 2] | 0;
      if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
       i11 = i12;
       break L3;
      }
      i12 = i12 + 4 | 0;
      if ((i12 | 0) == (i10 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i11 | 0) == (i10 | 0)) {
    break;
   } else {
    i14 = i11;
   }
   while (1) {
    HEAP32[i3 >> 2] = HEAP32[i14 >> 2];
    __ZN3WTF7HashSetIPN7WebCore26ContextDestructionObserverENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i4, i3) | 0;
    i12 = HEAP32[i3 >> 2] | 0;
    FUNCTION_TABLE_vi[HEAP32[HEAP32[i12 >> 2] >> 2] & 31](i12);
    i12 = HEAP32[i6 >> 2] | 0;
    i13 = HEAP32[i8 >> 2] | 0;
    i15 = i12 + (i13 << 2) | 0;
    if ((HEAP32[i5 >> 2] | 0) == 0) {
     break L1;
    }
    L11 : do {
     if ((i13 | 0) == 0) {
      i16 = i12;
     } else {
      i17 = i12;
      while (1) {
       i18 = HEAP32[i17 >> 2] | 0;
       if (!((i18 | 0) == (-1 | 0) | (i18 | 0) == 0)) {
        i16 = i17;
        break L11;
       }
       i17 = i17 + 4 | 0;
       if ((i17 | 0) == (i15 | 0)) {
        break L1;
       }
      }
     }
    } while (0);
    if ((i16 | 0) == (i15 | 0)) {
     break;
    } else {
     i14 = i16;
    }
   }
  }
 } while (0);
 i16 = i1 + 40 | 0;
 i14 = HEAP32[i16 >> 2] | 0;
 i5 = HEAP32[i1 + 44 >> 2] | 0;
 i8 = i14 + (i5 << 2) | 0;
 L17 : do {
  if ((HEAP32[i1 + 52 >> 2] | 0) != 0) {
   L19 : do {
    if ((i5 | 0) == 0) {
     i19 = i14;
    } else {
     i3 = i14;
     while (1) {
      i4 = HEAP32[i3 >> 2] | 0;
      if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
       i19 = i3;
       break L19;
      }
      i3 = i3 + 4 | 0;
      if ((i3 | 0) == (i8 | 0)) {
       break L17;
      }
     }
    }
   } while (0);
   if ((i19 | 0) == (i8 | 0)) {
    break;
   } else {
    i20 = i19;
   }
   while (1) {
    __ZN7WebCore11MessagePort16contextDestroyedEv(HEAP32[i20 >> 2] | 0);
    i3 = i20 + 4 | 0;
    if ((i3 | 0) == (i8 | 0)) {
     break L17;
    } else {
     i21 = i3;
    }
    while (1) {
     i3 = HEAP32[i21 >> 2] | 0;
     if (!((i3 | 0) == (-1 | 0) | (i3 | 0) == 0)) {
      break;
     }
     i3 = i21 + 4 | 0;
     if ((i3 | 0) == (i8 | 0)) {
      break L17;
     } else {
      i21 = i3;
     }
    }
    if ((i21 | 0) == (i8 | 0)) {
     break;
    } else {
     i20 = i21;
    }
   }
  }
 } while (0);
 i21 = i1 + 148 | 0;
 i20 = HEAP32[i21 >> 2] | 0;
 if ((i20 | 0) != 0) {
  __ZN7WebCore16PublicURLManager16contextDestroyedEv(i20);
 }
 i20 = HEAP32[i1 + 152 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i8 = i20 + 12 | 0;
   i19 = i8 | 0;
   if (((tempValue = HEAP32[i19 >> 2] | 0, HEAP32[i19 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i19 = i8 - 12 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 8 >> 2] & 31](i19);
  }
 } while (0);
 i20 = HEAP32[i21 >> 2] | 0;
 if ((i20 | 0) != 0) {
  i21 = HEAP32[i20 >> 2] | 0;
  if ((i21 | 0) != 0) {
   i19 = HEAP32[i20 + 4 >> 2] | 0;
   if ((i19 | 0) > 0) {
    i8 = 0;
    while (1) {
     do {
      if ((HEAP32[i21 + (i8 * 24 & -1) >> 2] | 0) != -1) {
       i14 = HEAP32[i21 + (i8 * 24 & -1) + 4 >> 2] | 0;
       if ((i14 | 0) == 0) {
        break;
       }
       i5 = HEAP32[i21 + (i8 * 24 & -1) + 8 >> 2] | 0;
       if ((i5 | 0) > 0) {
        i3 = 0;
        while (1) {
         i15 = HEAP32[i14 + (i3 << 2) >> 2] | 0;
         i4 = i15;
         do {
          if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
           i11 = i15 | 0;
           i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
           if ((i10 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i15);
            break;
           } else {
            HEAP32[i11 >> 2] = i10;
            break;
           }
          }
         } while (0);
         i3 = i3 + 1 | 0;
         if ((i3 | 0) >= (i5 | 0)) {
          break;
         }
        }
       }
       __ZN3WTF8fastFreeEPv(i14);
      }
     } while (0);
     i8 = i8 + 1 | 0;
     if ((i8 | 0) >= (i19 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i21);
  }
  __ZN3WTF8fastFreeEPv(i20);
 }
 __ZN3WTF14deleteOwnedPtrINS_6VectorINS_6OwnPtrIN7WebCore22ScriptExecutionContext16PendingExceptionEEELj0ENS_15CrashOnOverflowEEEEEvPT_(HEAP32[i1 + 132 >> 2] | 0);
 i20 = HEAP32[i1 + 108 >> 2] | 0;
 if ((i20 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i20);
 }
 i20 = HEAP32[i1 + 80 >> 2] | 0;
 if ((i20 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i20);
 }
 i20 = HEAP32[i6 >> 2] | 0;
 if ((i20 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i20);
 }
 i20 = HEAP32[i16 >> 2] | 0;
 if ((i20 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i20);
 }
 i20 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i20 | 0) == 0) {
  i22 = i1 | 0;
  __ZN7WebCore15SecurityContextD2Ev(i22);
  STACKTOP = i2;
  return;
 }
 i16 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i16 | 0) > 0) {
  i6 = 0;
  while (1) {
   do {
    if ((HEAP32[i20 + (i6 << 3) >> 2] | 0) != -1) {
     i21 = HEAP32[i20 + (i6 << 3) + 4 >> 2] | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 31](i21);
    }
   } while (0);
   i6 = i6 + 1 | 0;
   if ((i6 | 0) >= (i16 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i20);
 i22 = i1 | 0;
 __ZN7WebCore15SecurityContextD2Ev(i22);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22ScriptExecutionContextD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP8[i1 + 101 | 0] = 1;
 i4 = i1 + 60 | 0;
 i5 = i1 + 72 | 0;
 i6 = i4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i1 + 64 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i7 + (i9 << 2) | 0;
 L1 : do {
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   L3 : do {
    if ((i9 | 0) == 0) {
     i11 = i7;
    } else {
     i12 = i7;
     while (1) {
      i13 = HEAP32[i12 >> 2] | 0;
      if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
       i11 = i12;
       break L3;
      }
      i12 = i12 + 4 | 0;
      if ((i12 | 0) == (i10 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i11 | 0) == (i10 | 0)) {
    break;
   } else {
    i14 = i11;
   }
   while (1) {
    HEAP32[i3 >> 2] = HEAP32[i14 >> 2];
    __ZN3WTF7HashSetIPN7WebCore26ContextDestructionObserverENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i4, i3) | 0;
    i12 = HEAP32[i3 >> 2] | 0;
    FUNCTION_TABLE_vi[HEAP32[HEAP32[i12 >> 2] >> 2] & 31](i12);
    i12 = HEAP32[i6 >> 2] | 0;
    i13 = HEAP32[i8 >> 2] | 0;
    i15 = i12 + (i13 << 2) | 0;
    if ((HEAP32[i5 >> 2] | 0) == 0) {
     break L1;
    }
    L11 : do {
     if ((i13 | 0) == 0) {
      i16 = i12;
     } else {
      i17 = i12;
      while (1) {
       i18 = HEAP32[i17 >> 2] | 0;
       if (!((i18 | 0) == (-1 | 0) | (i18 | 0) == 0)) {
        i16 = i17;
        break L11;
       }
       i17 = i17 + 4 | 0;
       if ((i17 | 0) == (i15 | 0)) {
        break L1;
       }
      }
     }
    } while (0);
    if ((i16 | 0) == (i15 | 0)) {
     break;
    } else {
     i14 = i16;
    }
   }
  }
 } while (0);
 i16 = i1 + 40 | 0;
 i14 = HEAP32[i16 >> 2] | 0;
 i5 = HEAP32[i1 + 44 >> 2] | 0;
 i8 = i14 + (i5 << 2) | 0;
 L17 : do {
  if ((HEAP32[i1 + 52 >> 2] | 0) != 0) {
   L19 : do {
    if ((i5 | 0) == 0) {
     i19 = i14;
    } else {
     i3 = i14;
     while (1) {
      i4 = HEAP32[i3 >> 2] | 0;
      if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
       i19 = i3;
       break L19;
      }
      i3 = i3 + 4 | 0;
      if ((i3 | 0) == (i8 | 0)) {
       break L17;
      }
     }
    }
   } while (0);
   if ((i19 | 0) == (i8 | 0)) {
    break;
   } else {
    i20 = i19;
   }
   while (1) {
    __ZN7WebCore11MessagePort16contextDestroyedEv(HEAP32[i20 >> 2] | 0);
    i3 = i20 + 4 | 0;
    if ((i3 | 0) == (i8 | 0)) {
     break L17;
    } else {
     i21 = i3;
    }
    while (1) {
     i3 = HEAP32[i21 >> 2] | 0;
     if (!((i3 | 0) == (-1 | 0) | (i3 | 0) == 0)) {
      break;
     }
     i3 = i21 + 4 | 0;
     if ((i3 | 0) == (i8 | 0)) {
      break L17;
     } else {
      i21 = i3;
     }
    }
    if ((i21 | 0) == (i8 | 0)) {
     break;
    } else {
     i20 = i21;
    }
   }
  }
 } while (0);
 i21 = i1 + 148 | 0;
 i20 = HEAP32[i21 >> 2] | 0;
 if ((i20 | 0) != 0) {
  __ZN7WebCore16PublicURLManager16contextDestroyedEv(i20);
 }
 i20 = HEAP32[i1 + 152 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i8 = i20 + 12 | 0;
   i19 = i8 | 0;
   if (((tempValue = HEAP32[i19 >> 2] | 0, HEAP32[i19 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i19 = i8 - 12 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 8 >> 2] & 31](i19);
  }
 } while (0);
 i20 = HEAP32[i21 >> 2] | 0;
 if ((i20 | 0) != 0) {
  i21 = HEAP32[i20 >> 2] | 0;
  if ((i21 | 0) != 0) {
   i19 = HEAP32[i20 + 4 >> 2] | 0;
   if ((i19 | 0) > 0) {
    i8 = 0;
    while (1) {
     do {
      if ((HEAP32[i21 + (i8 * 24 & -1) >> 2] | 0) != -1) {
       i14 = HEAP32[i21 + (i8 * 24 & -1) + 4 >> 2] | 0;
       if ((i14 | 0) == 0) {
        break;
       }
       i5 = HEAP32[i21 + (i8 * 24 & -1) + 8 >> 2] | 0;
       if ((i5 | 0) > 0) {
        i3 = 0;
        while (1) {
         i15 = HEAP32[i14 + (i3 << 2) >> 2] | 0;
         i4 = i15;
         do {
          if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
           i11 = i15 | 0;
           i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
           if ((i10 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i15);
            break;
           } else {
            HEAP32[i11 >> 2] = i10;
            break;
           }
          }
         } while (0);
         i3 = i3 + 1 | 0;
         if ((i3 | 0) >= (i5 | 0)) {
          break;
         }
        }
       }
       __ZN3WTF8fastFreeEPv(i14);
      }
     } while (0);
     i8 = i8 + 1 | 0;
     if ((i8 | 0) >= (i19 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i21);
  }
  __ZN3WTF8fastFreeEPv(i20);
 }
 __ZN3WTF14deleteOwnedPtrINS_6VectorINS_6OwnPtrIN7WebCore22ScriptExecutionContext16PendingExceptionEEELj0ENS_15CrashOnOverflowEEEEEvPT_(HEAP32[i1 + 132 >> 2] | 0);
 i20 = HEAP32[i1 + 108 >> 2] | 0;
 if ((i20 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i20);
 }
 i20 = HEAP32[i1 + 80 >> 2] | 0;
 if ((i20 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i20);
 }
 i20 = HEAP32[i6 >> 2] | 0;
 if ((i20 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i20);
 }
 i20 = HEAP32[i16 >> 2] | 0;
 if ((i20 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i20);
 }
 i20 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i20 | 0) == 0) {
  i22 = i1 | 0;
  __ZN7WebCore15SecurityContextD2Ev(i22);
  STACKTOP = i2;
  return;
 }
 i16 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i16 | 0) > 0) {
  i6 = 0;
  while (1) {
   do {
    if ((HEAP32[i20 + (i6 << 3) >> 2] | 0) != -1) {
     i21 = HEAP32[i20 + (i6 << 3) + 4 >> 2] | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 31](i21);
    }
   } while (0);
   i6 = i6 + 1 | 0;
   if ((i6 | 0) >= (i16 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i20);
 i22 = i1 | 0;
 __ZN7WebCore15SecurityContextD2Ev(i22);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22ScriptExecutionContext25dispatchMessagePortEventsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i2 = i1;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 88 >> 2] & 31](i1);
 i3 = i1 + 52 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 if (i5) {
  i6 = HEAP32[i2 >> 2] | 0;
  i7 = i6 + 92 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  FUNCTION_TABLE_vi[i8 & 31](i1);
  return;
 }
 i9 = i4 >>> 0 < 16 >>> 0 ? 16 : i4;
 do {
  if ((i9 | 0) == 0) {
   i10 = i1 + 40 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = HEAP32[i1 + 44 >> 2] | 0;
   i13 = 0;
   i14 = i10;
   i15 = i11;
   i16 = i12;
   i17 = i11 + (i12 << 2) | 0;
   i18 = 7;
  } else {
   if (i9 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i12 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i9 << 2) | 0) | 0;
    i11 = i1 + 40 | 0;
    i10 = HEAP32[i11 >> 2] | 0;
    i19 = HEAP32[i1 + 44 >> 2] | 0;
    if ((HEAP32[i3 >> 2] | 0) == 0) {
     i20 = i12;
     i21 = i11;
     break;
    } else {
     i13 = i12;
     i14 = i11;
     i15 = i10;
     i16 = i19;
     i17 = i10 + (i19 << 2) | 0;
     i18 = 7;
     break;
    }
   }
  }
 } while (0);
 L10 : do {
  if ((i18 | 0) == 7) {
   L12 : do {
    if ((i16 | 0) == 0) {
     i22 = i15;
    } else {
     i3 = i15;
     while (1) {
      i9 = HEAP32[i3 >> 2] | 0;
      if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
       i22 = i3;
       break L12;
      }
      i9 = i3 + 4 | 0;
      if ((i9 | 0) == (i17 | 0)) {
       i20 = i13;
       i21 = i14;
       break L10;
      } else {
       i3 = i9;
      }
     }
    }
   } while (0);
   if ((i22 | 0) == (i17 | 0)) {
    i20 = i13;
    i21 = i14;
    break;
   } else {
    i23 = i22;
    i24 = 0;
   }
   while (1) {
    if (i4 >>> 0 <= i24 >>> 0) {
     break;
    }
    HEAP32[i13 + (i24 << 2) >> 2] = HEAP32[i23 >> 2];
    i3 = i23 + 4 | 0;
    if ((i3 | 0) == (i17 | 0)) {
     i20 = i13;
     i21 = i14;
     break L10;
    } else {
     i25 = i3;
    }
    while (1) {
     i3 = HEAP32[i25 >> 2] | 0;
     if (!((i3 | 0) == (-1 | 0) | (i3 | 0) == 0)) {
      break;
     }
     i3 = i25 + 4 | 0;
     if ((i3 | 0) == (i17 | 0)) {
      i20 = i13;
      i21 = i14;
      break L10;
     } else {
      i25 = i3;
     }
    }
    if ((i25 | 0) == (i17 | 0)) {
     i20 = i13;
     i21 = i14;
     break L10;
    } else {
     i23 = i25;
     i24 = i24 + 1 | 0;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 if (!i5) {
  i5 = i1 + 48 | 0;
  i24 = 0;
  while (1) {
   i25 = HEAP32[i20 + (i24 << 2) >> 2] | 0;
   i23 = HEAP32[i21 >> 2] | 0;
   L30 : do {
    if ((i23 | 0) != 0) {
     i14 = HEAP32[i5 >> 2] | 0;
     i13 = i25;
     i17 = i13 + ~(i13 << 15) | 0;
     i13 = (i17 >>> 10 ^ i17) * 9 & -1;
     i17 = i13 >>> 6 ^ i13;
     i13 = i17 + ~(i17 << 11) | 0;
     i17 = i13 >>> 16 ^ i13;
     i13 = i14 & i17;
     i22 = i23 + (i13 << 2) | 0;
     i15 = HEAP32[i22 >> 2] | 0;
     if ((i15 | 0) == (i25 | 0)) {
      i26 = i22;
     } else {
      i22 = (i17 >>> 23) + ~i17 | 0;
      i17 = i22 << 12 ^ i22;
      i22 = i17 >>> 7 ^ i17;
      i17 = i22 << 2 ^ i22;
      i22 = i17 >>> 20 ^ i17 | 1;
      i17 = 0;
      i16 = i13;
      i13 = i15;
      while (1) {
       if ((i13 | 0) == 0) {
        break L30;
       }
       i15 = (i17 | 0) == 0 ? i22 : i17;
       i18 = i15 + i16 & i14;
       i3 = i23 + (i18 << 2) | 0;
       i9 = HEAP32[i3 >> 2] | 0;
       if ((i9 | 0) == (i25 | 0)) {
        i26 = i3;
        break;
       } else {
        i17 = i15;
        i16 = i18;
        i13 = i9;
       }
      }
     }
     if ((i26 | 0) == 0) {
      break;
     }
     if ((HEAP8[i25 + 44 | 0] & 1) == 0) {
      break;
     }
     __ZN7WebCore11MessagePort16dispatchMessagesEv(i25);
    }
   } while (0);
   i24 = i24 + 1 | 0;
   if (i24 >>> 0 >= i4 >>> 0) {
    break;
   }
  }
 }
 if ((i20 | 0) == 0) {
  i6 = HEAP32[i2 >> 2] | 0;
  i7 = i6 + 92 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  FUNCTION_TABLE_vi[i8 & 31](i1);
  return;
 }
 __ZN3WTF8fastFreeEPv(i20);
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = i6 + 92 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 FUNCTION_TABLE_vi[i8 & 31](i1);
 return;
}
function __ZN7WebCore22ScriptExecutionContext15reportExceptionERKN3WTF6StringEiiS4_NS1_10PassRefPtrINS_15ScriptCallStackEEEPNS_12CachedScriptE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 if ((HEAP8[i1 + 128 | 0] & 1) != 0) {
  i11 = i1 + 132 | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  if ((i12 | 0) == 0) {
   i13 = __ZN3WTF10fastMallocEj(12) | 0;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i13 + 4 >> 2] = 0;
   HEAP32[i13 + 8 >> 2] = 0;
   i14 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i13;
   __ZN3WTF14deleteOwnedPtrINS_6VectorINS_6OwnPtrIN7WebCore22ScriptExecutionContext16PendingExceptionEEELj0ENS_15CrashOnOverflowEEEEEvPT_(i14);
   __ZN3WTF14deleteOwnedPtrINS_6VectorINS_6OwnPtrIN7WebCore22ScriptExecutionContext16PendingExceptionEEELj0ENS_15CrashOnOverflowEEEEEvPT_(0);
   i15 = HEAP32[i11 >> 2] | 0;
  } else {
   i15 = i12;
  }
  i12 = __Znwj(20) | 0;
  i11 = i12;
  i14 = i6 | 0;
  i13 = HEAP32[i14 >> 2] | 0;
  HEAP32[i14 >> 2] = 0;
  i14 = HEAP32[i2 >> 2] | 0;
  HEAP32[i12 >> 2] = i14;
  if ((i14 | 0) != 0) {
   i16 = i14 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
  }
  HEAP32[i12 + 4 >> 2] = i3;
  HEAP32[i12 + 8 >> 2] = i4;
  i16 = HEAP32[i5 >> 2] | 0;
  HEAP32[i12 + 12 >> 2] = i16;
  if ((i16 | 0) != 0) {
   i14 = i16 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
  }
  HEAP32[i12 + 16 >> 2] = i13;
  i13 = i15 + 8 | 0;
  i12 = HEAP32[i13 >> 2] | 0;
  if ((i12 | 0) == (HEAP32[i15 + 4 >> 2] | 0)) {
   __ZN3WTF6VectorINS_6OwnPtrIN7WebCore22ScriptExecutionContext16PendingExceptionEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i15, i12 + 1 | 0);
   HEAP32[(HEAP32[i15 >> 2] | 0) + (HEAP32[i13 >> 2] << 2) >> 2] = i11;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   STACKTOP = i8;
   return;
  } else {
   HEAP32[(HEAP32[i15 >> 2] | 0) + (i12 << 2) >> 2] = i11;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   STACKTOP = i8;
   return;
  }
 }
 do {
  if (!(__ZN7WebCore22ScriptExecutionContext18dispatchErrorEventERKN3WTF6StringEiiS4_PNS_12CachedScriptE(i1, i2, i3, i4, i5, i7) | 0)) {
   i13 = HEAP32[(HEAP32[i1 >> 2] | 0) + 84 >> 2] | 0;
   i11 = i9 | 0;
   i12 = i6 | 0;
   i15 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i11 >> 2] = i15;
   FUNCTION_TABLE_viiiiii[i13 & 1](i1, i2, i5, i3, i4, i9);
   i13 = HEAP32[i11 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i11 = i13 | 0;
   i15 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) == 0) {
    __ZN7WebCore15ScriptCallStackD1Ev(i13);
    __ZN3WTF8fastFreeEPv(i13);
    break;
   } else {
    HEAP32[i11 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i9 = i1 + 132 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) == 0) {
  i17 = i4;
 } else {
  i3 = i1;
  i5 = i10 | 0;
  i2 = 0;
  i6 = i4;
  while (1) {
   i4 = HEAP32[(HEAP32[i6 >> 2] | 0) + (i2 << 2) >> 2] | 0;
   i7 = HEAP32[(HEAP32[i3 >> 2] | 0) + 84 >> 2] | 0;
   i15 = HEAP32[i4 + 4 >> 2] | 0;
   i11 = HEAP32[i4 + 8 >> 2] | 0;
   i13 = HEAP32[i4 + 16 >> 2] | 0;
   HEAP32[i5 >> 2] = i13;
   if ((i13 | 0) != 0) {
    i12 = i13 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   }
   FUNCTION_TABLE_viiiiii[i7 & 1](i1, i4 | 0, i4 + 12 | 0, i15, i11, i10);
   i11 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i15 = i11 | 0;
     i4 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i4 | 0) == 0) {
      __ZN7WebCore15ScriptCallStackD1Ev(i11);
      __ZN3WTF8fastFreeEPv(i11);
      break;
     } else {
      HEAP32[i15 >> 2] = i4;
      break;
     }
    }
   } while (0);
   i11 = i2 + 1 | 0;
   i4 = HEAP32[i9 >> 2] | 0;
   if (i11 >>> 0 < (HEAP32[i4 + 8 >> 2] | 0) >>> 0) {
    i2 = i11;
    i6 = i4;
   } else {
    i17 = i4;
    break;
   }
  }
 }
 HEAP32[i9 >> 2] = 0;
 __ZN3WTF14deleteOwnedPtrINS_6VectorINS_6OwnPtrIN7WebCore22ScriptExecutionContext16PendingExceptionEEELj0ENS_15CrashOnOverflowEEEEEvPT_(i17);
 STACKTOP = i8;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore26ContextDestructionObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
  __ZN3WTF9HashTableIPN7WebCore26ContextDestructionObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore26ContextDestructionObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore15ActiveDOMObjectES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
  __ZN3WTF9HashTableIPN7WebCore15ActiveDOMObjectES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore15ActiveDOMObjectES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore11MessagePortES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
  __ZN3WTF9HashTableIPN7WebCore11MessagePortES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore11MessagePortES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore22ScriptExecutionContext18dispatchErrorEventERKN3WTF6StringEiiS4_PNS_12CachedScriptE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 15](i1) | 0;
 if ((i13 | 0) == 0) {
  i14 = 0;
  STACKTOP = i7;
  return i14 | 0;
 }
 i15 = i8 | 0;
 i16 = HEAP32[i2 >> 2] | 0;
 HEAP32[i15 >> 2] = i16;
 if ((i16 | 0) != 0) {
  i2 = i16 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 HEAP32[i9 >> 2] = i3;
 HEAP32[i10 >> 2] = i4;
 i4 = i11 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i5 = i3 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 __ZN7WebCore22ScriptExecutionContext19sanitizeScriptErrorERN3WTF6StringERiS4_S3_PNS_12CachedScriptE(i1, i8, i9, i10, i11, i6) | 0;
 i6 = i1 + 128 | 0;
 HEAP8[i6] = 1;
 i1 = HEAP32[i9 >> 2] | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 i10 = __ZN3WTF10fastMallocEj(72) | 0;
 __ZN7WebCore10ErrorEventC1ERKN3WTF6StringES4_jj(i10, i8, i11, i1, i9);
 i9 = HEAP32[(HEAP32[i13 >> 2] | 0) + 32 >> 2] | 0;
 i1 = i12 | 0;
 i11 = i10;
 HEAP32[i1 >> 2] = i11;
 i8 = (i10 | 0) == 0;
 if (!i8) {
  i5 = i10 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 FUNCTION_TABLE_iii[i9 & 1](i13, i12) | 0;
 i12 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i1 = i12 + 8 | 0;
   i13 = i1 | 0;
   i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i13 >> 2] = i9;
    break;
   }
   i9 = i1 - 8 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
  }
 } while (0);
 HEAP8[i6] = 0;
 i6 = (HEAP8[i10 + 20 | 0] & 1) != 0;
 do {
  if (!i8) {
   i12 = i10 + 8 | 0;
   i9 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i11);
    break;
   } else {
    HEAP32[i12 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i4 = i11 | 0;
   i10 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i4 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i15 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i14 = i6;
  STACKTOP = i7;
  return i14 | 0;
 }
 i15 = i11 | 0;
 i10 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i11);
  i14 = i6;
  STACKTOP = i7;
  return i14 | 0;
 } else {
  HEAP32[i15 >> 2] = i10;
  i14 = i6;
  STACKTOP = i7;
  return i14 | 0;
 }
 return 0;
}
function __ZN7WebCore22ScriptExecutionContext20stopActiveDOMObjectsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = i1 + 144 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  return;
 }
 HEAP8[i2] = 1;
 i2 = i1 + 100 | 0;
 HEAP8[i2] = 1;
 i3 = HEAP32[i1 + 80 >> 2] | 0;
 i4 = HEAP32[i1 + 84 >> 2] | 0;
 i5 = i3 + (i4 << 2) | 0;
 L4 : do {
  if ((HEAP32[i1 + 92 >> 2] | 0) != 0) {
   L6 : do {
    if ((i4 | 0) == 0) {
     i6 = i3;
    } else {
     i7 = i3;
     while (1) {
      i8 = HEAP32[i7 >> 2] | 0;
      if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
       i6 = i7;
       break L6;
      }
      i7 = i7 + 4 | 0;
      if ((i7 | 0) == (i5 | 0)) {
       break L4;
      }
     }
    }
   } while (0);
   if ((i6 | 0) == (i5 | 0)) {
    break;
   } else {
    i9 = i6;
   }
   while (1) {
    i7 = HEAP32[i9 >> 2] | 0;
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 28 >> 2] & 31](i7);
    i7 = i9 + 4 | 0;
    if ((i7 | 0) == (i5 | 0)) {
     break L4;
    } else {
     i10 = i7;
    }
    while (1) {
     i7 = HEAP32[i10 >> 2] | 0;
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      break;
     }
     i7 = i10 + 4 | 0;
     if ((i7 | 0) == (i5 | 0)) {
      break L4;
     } else {
      i10 = i7;
     }
    }
    if ((i10 | 0) == (i5 | 0)) {
     break;
    } else {
     i9 = i10;
    }
   }
  }
 } while (0);
 HEAP8[i2] = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 i10 = HEAP32[i1 + 44 >> 2] | 0;
 i9 = i2 + (i10 << 2) | 0;
 if ((HEAP32[i1 + 52 >> 2] | 0) == 0) {
  return;
 }
 L21 : do {
  if ((i10 | 0) == 0) {
   i11 = i2;
  } else {
   i1 = i2;
   while (1) {
    i5 = HEAP32[i1 >> 2] | 0;
    if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
     i11 = i1;
     break L21;
    }
    i1 = i1 + 4 | 0;
    if ((i1 | 0) == (i9 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i11 | 0) == (i9 | 0)) {
  return;
 }
 i2 = i11;
 i10 = HEAP32[i11 >> 2] | 0;
 L30 : while (1) {
  __ZN7WebCore11MessagePort5closeEv(i10);
  i11 = i2 + 4 | 0;
  if ((i11 | 0) == (i9 | 0)) {
   i12 = 26;
   break;
  } else {
   i13 = i11;
  }
  while (1) {
   i14 = HEAP32[i13 >> 2] | 0;
   i11 = i14;
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    break;
   }
   i11 = i13 + 4 | 0;
   if ((i11 | 0) == (i9 | 0)) {
    i12 = 28;
    break L30;
   } else {
    i13 = i11;
   }
  }
  if ((i13 | 0) == (i9 | 0)) {
   i12 = 27;
   break;
  } else {
   i2 = i13;
   i10 = i14;
  }
 }
 if ((i12 | 0) == 26) {
  return;
 } else if ((i12 | 0) == 27) {
  return;
 } else if ((i12 | 0) == 28) {
  return;
 }
}
function __ZN3WTF9HashTableIPN7WebCore26ContextDestructionObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
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
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore15ActiveDOMObjectES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
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
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore11MessagePortES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
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
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore22ScriptExecutionContext19sanitizeScriptErrorERN3WTF6StringERiS4_S3_PNS_12CachedScriptE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i8 = i7 | 0;
 i9 = i7 + 48 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 1](i8, i1, i5);
 i10 = i1 + 12 | 0;
 do {
  if (__ZNK7WebCore14SecurityOrigin10canRequestERKNS_3URLE(HEAP32[i10 >> 2] | 0, i8) | 0) {
   i11 = 0;
  } else {
   if ((i6 | 0) != 0) {
    if (__ZN7WebCore14CachedResource24passesAccessControlCheckEPNS_14SecurityOriginE(i6 | 0, HEAP32[i10 >> 2] | 0) | 0) {
     i11 = 0;
     break;
    }
   }
   __ZN3WTF6StringC1EPKc(i9, H_BASE + 8 | 0);
   i1 = i9 | 0;
   i12 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = 0;
   i13 = i2 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i12;
   do {
    if ((i14 | 0) != 0) {
     i12 = i14 | 0;
     i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i12 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i14 = HEAP32[i1 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i13 = i14 | 0;
     i12 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i13 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i14 = i5 | 0;
   i1 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   do {
    if ((i1 | 0) != 0) {
     i14 = i1 | 0;
     i12 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i14 >> 2] = i12;
      break;
     }
    }
   } while (0);
   HEAP32[i3 >> 2] = 0;
   HEAP32[i4 >> 2] = 0;
   i11 = 1;
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i7;
  return i11 | 0;
 }
 i8 = i4 | 0;
 i3 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i7;
  return i11 | 0;
 } else {
  HEAP32[i8 >> 2] = i3;
  STACKTOP = i7;
  return i11 | 0;
 }
 return 0;
}
function __ZN3WTF7HashSetIPN7WebCore26ContextDestructionObserverENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 2) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore26ContextDestructionObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN3WTF7HashSetIPN7WebCore15ActiveDOMObjectENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 2) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore15ActiveDOMObjectES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN3WTF7HashSetIPN7WebCore11MessagePortENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 2) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore11MessagePortES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN3WTF14deleteOwnedPtrINS_6VectorINS_6OwnPtrIN7WebCore22ScriptExecutionContext16PendingExceptionEEELj0ENS_15CrashOnOverflowEEEEEvPT_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) != 0) {
    i7 = HEAP32[i5 + 16 >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i8 = i7 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i9 | 0) == 0) {
       __ZN7WebCore15ScriptCallStackD1Ev(i7);
       __ZN3WTF8fastFreeEPv(i7);
       break;
      } else {
       HEAP32[i8 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i7 = HEAP32[i5 + 12 >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i9 = i7 | 0;
      i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i9 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i7 = HEAP32[i5 >> 2] | 0;
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
    __ZdlPv(i5);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore22ScriptExecutionContext16publicURLManagerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 + 148 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i3 = i1;
  return i3 | 0;
 }
 i1 = __ZN3WTF10fastMallocEj(20) | 0;
 i4 = i1;
 _memset(i1 | 0, 0, 20) | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i1 | 0) == 0) {
  i3 = i4;
  return i3 | 0;
 }
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  if ((i5 | 0) > 0) {
   i6 = 0;
   while (1) {
    do {
     if ((HEAP32[i4 + (i6 * 24 & -1) >> 2] | 0) != -1) {
      i7 = HEAP32[i4 + (i6 * 24 & -1) + 4 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      i8 = HEAP32[i4 + (i6 * 24 & -1) + 8 >> 2] | 0;
      if ((i8 | 0) > 0) {
       i9 = 0;
       while (1) {
        i10 = HEAP32[i7 + (i9 << 2) >> 2] | 0;
        i11 = i10;
        do {
         if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
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
        i9 = i9 + 1 | 0;
        if ((i9 | 0) >= (i8 | 0)) {
         break;
        }
       }
      }
      __ZN3WTF8fastFreeEPv(i7);
     }
    } while (0);
    i6 = i6 + 1 | 0;
    if ((i6 | 0) >= (i5 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF8fastFreeEPv(i1);
 i3 = HEAP32[i2 >> 2] | 0;
 return i3 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_di + 4;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_di + 2;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 2;
}
function __ZN7WebCore22ScriptExecutionContext26canSuspendActiveDOMObjectsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 + 100 | 0;
 HEAP8[i2] = 1;
 i3 = HEAP32[i1 + 80 >> 2] | 0;
 i4 = HEAP32[i1 + 84 >> 2] | 0;
 i5 = i3 + (i4 << 2) | 0;
 L1 : do {
  if ((HEAP32[i1 + 92 >> 2] | 0) == 0) {
   i6 = 1;
  } else {
   L3 : do {
    if ((i4 | 0) == 0) {
     i7 = i3;
    } else {
     i8 = i3;
     while (1) {
      i9 = HEAP32[i8 >> 2] | 0;
      if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
       i7 = i8;
       break L3;
      }
      i9 = i8 + 4 | 0;
      if ((i9 | 0) == (i5 | 0)) {
       i6 = 1;
       break L1;
      } else {
       i8 = i9;
      }
     }
    }
   } while (0);
   if ((i7 | 0) == (i5 | 0)) {
    i6 = 1;
    break;
   } else {
    i10 = i7;
   }
   while (1) {
    i8 = HEAP32[i10 >> 2] | 0;
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 16 >> 2] & 15](i8) | 0)) {
     i6 = 0;
     break L1;
    }
    i8 = i10 + 4 | 0;
    if ((i8 | 0) == (i5 | 0)) {
     i6 = 1;
     break L1;
    } else {
     i11 = i8;
    }
    while (1) {
     i8 = HEAP32[i11 >> 2] | 0;
     if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
      break;
     }
     i8 = i11 + 4 | 0;
     if ((i8 | 0) == (i5 | 0)) {
      i6 = 1;
      break L1;
     } else {
      i11 = i8;
     }
    }
    if ((i11 | 0) == (i5 | 0)) {
     i6 = 1;
     break;
    } else {
     i10 = i11;
    }
   }
  }
 } while (0);
 HEAP8[i2] = 0;
 return i6 | 0;
}
function __ZN7WebCore22ScriptExecutionContext22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((HEAP32[i1 + 140 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 HEAP8[i1 + 136 | 0] = 0;
 i2 = i1 + 100 | 0;
 HEAP8[i2] = 1;
 i3 = HEAP32[i1 + 80 >> 2] | 0;
 i4 = HEAP32[i1 + 84 >> 2] | 0;
 i5 = i3 + (i4 << 2) | 0;
 L4 : do {
  if ((HEAP32[i1 + 92 >> 2] | 0) != 0) {
   L6 : do {
    if ((i4 | 0) == 0) {
     i6 = i3;
    } else {
     i7 = i3;
     while (1) {
      i8 = HEAP32[i7 >> 2] | 0;
      if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
       i6 = i7;
       break L6;
      }
      i7 = i7 + 4 | 0;
      if ((i7 | 0) == (i5 | 0)) {
       break L4;
      }
     }
    }
   } while (0);
   if ((i6 | 0) == (i5 | 0)) {
    break;
   } else {
    i9 = i6;
   }
   while (1) {
    i7 = HEAP32[i9 >> 2] | 0;
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 24 >> 2] & 31](i7);
    i7 = i9 + 4 | 0;
    if ((i7 | 0) == (i5 | 0)) {
     break L4;
    } else {
     i10 = i7;
    }
    while (1) {
     i7 = HEAP32[i10 >> 2] | 0;
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      break;
     }
     i7 = i10 + 4 | 0;
     if ((i7 | 0) == (i5 | 0)) {
      break L4;
     } else {
      i10 = i7;
     }
    }
    if ((i10 | 0) == (i5 | 0)) {
     break;
    } else {
     i9 = i10;
    }
   }
  }
 } while (0);
 HEAP8[i2] = 0;
 return;
}
function __ZN7WebCore22ScriptExecutionContext23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 100 | 0;
 HEAP8[i3] = 1;
 i4 = HEAP32[i1 + 80 >> 2] | 0;
 i5 = HEAP32[i1 + 84 >> 2] | 0;
 i6 = i4 + (i5 << 2) | 0;
 L1 : do {
  if ((HEAP32[i1 + 92 >> 2] | 0) != 0) {
   L3 : do {
    if ((i5 | 0) == 0) {
     i7 = i4;
    } else {
     i8 = i4;
     while (1) {
      i9 = HEAP32[i8 >> 2] | 0;
      if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
       i7 = i8;
       break L3;
      }
      i8 = i8 + 4 | 0;
      if ((i8 | 0) == (i6 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i7 | 0) == (i6 | 0)) {
    break;
   } else {
    i10 = i7;
   }
   while (1) {
    i8 = HEAP32[i10 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] & 15](i8, i2);
    i8 = i10 + 4 | 0;
    if ((i8 | 0) == (i6 | 0)) {
     break L1;
    } else {
     i11 = i8;
    }
    while (1) {
     i8 = HEAP32[i11 >> 2] | 0;
     if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
      break;
     }
     i8 = i11 + 4 | 0;
     if ((i8 | 0) == (i6 | 0)) {
      break L1;
     } else {
      i11 = i8;
     }
    }
    if ((i11 | 0) == (i6 | 0)) {
     break;
    } else {
     i10 = i11;
    }
   }
  }
 } while (0);
 HEAP8[i3] = 0;
 HEAP8[i1 + 136 | 0] = 1;
 HEAP32[i1 + 140 >> 2] = i2;
 return;
}
function __ZN7WebCore22ScriptExecutionContext26adjustMinimumTimerIntervalEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if (+FUNCTION_TABLE_di[HEAP32[(HEAP32[i1 >> 2] | 0) + 64 >> 2] & 7](i1) == d2) {
  return;
 }
 i3 = i1 + 108 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 112 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i4 + (i6 << 3) | 0;
 if ((HEAP32[i1 + 120 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i6 | 0) == 0) {
   i8 = i4;
  } else {
   i1 = i4;
   while (1) {
    i9 = HEAP32[i1 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i8 = i1;
     break L7;
    }
    i1 = i1 + 8 | 0;
    if ((i1 | 0) == (i7 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i8 | 0) == (i7 | 0)) {
  return;
 } else {
  i10 = i8;
 }
 while (1) {
  __ZN7WebCore8DOMTimer26adjustMinimumTimerIntervalEd(HEAP32[i10 + 4 >> 2] | 0, d2);
  i8 = i10 + 8 | 0;
  L17 : do {
   if ((i8 | 0) == (i7 | 0)) {
    i11 = i7;
   } else {
    i4 = i8;
    while (1) {
     i6 = HEAP32[i4 >> 2] | 0;
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i11 = i4;
      break L17;
     }
     i6 = i4 + 8 | 0;
     if ((i6 | 0) == (i7 | 0)) {
      i11 = i7;
      break;
     } else {
      i4 = i6;
     }
    }
   }
  } while (0);
  if ((i11 | 0) == ((HEAP32[i3 >> 2] | 0) + (HEAP32[i5 >> 2] << 3) | 0)) {
   break;
  } else {
   i10 = i11;
  }
 }
 return;
}
function __ZN7WebCore22ScriptExecutionContext31didChangeTimerAlignmentIntervalEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 108 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 112 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + (i5 << 3) | 0;
 if ((HEAP32[i1 + 120 >> 2] | 0) == 0) {
  return;
 }
 L4 : do {
  if ((i5 | 0) == 0) {
   i7 = i3;
  } else {
   i1 = i3;
   while (1) {
    i8 = HEAP32[i1 >> 2] | 0;
    if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
     i7 = i1;
     break L4;
    }
    i1 = i1 + 8 | 0;
    if ((i1 | 0) == (i6 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i7 | 0) == (i6 | 0)) {
  return;
 } else {
  i9 = i7;
 }
 while (1) {
  __ZN7WebCore9TimerBase26didChangeAlignmentIntervalEv(HEAP32[i9 + 4 >> 2] | 0);
  i7 = i9 + 8 | 0;
  L14 : do {
   if ((i7 | 0) == (i6 | 0)) {
    i10 = i6;
   } else {
    i3 = i7;
    while (1) {
     i5 = HEAP32[i3 >> 2] | 0;
     if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
      i10 = i3;
      break L14;
     }
     i5 = i3 + 8 | 0;
     if ((i5 | 0) == (i6 | 0)) {
      i10 = i6;
      break;
     } else {
      i3 = i5;
     }
    }
   }
  } while (0);
  if ((i10 | 0) == ((HEAP32[i2 >> 2] | 0) + (HEAP32[i4 >> 2] << 3) | 0)) {
   break;
  } else {
   i9 = i10;
  }
 }
 return;
}
function __ZN7WebCore22ScriptExecutionContext17closeMessagePortsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = i2 + (i3 << 2) | 0;
 if ((HEAP32[i1 + 52 >> 2] | 0) == 0) {
  return;
 }
 L4 : do {
  if ((i3 | 0) == 0) {
   i5 = i2;
  } else {
   i1 = i2;
   while (1) {
    i6 = HEAP32[i1 >> 2] | 0;
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i5 = i1;
     break L4;
    }
    i1 = i1 + 4 | 0;
    if ((i1 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i4 | 0)) {
  return;
 } else {
  i7 = i5;
 }
 L12 : while (1) {
  __ZN7WebCore11MessagePort5closeEv(HEAP32[i7 >> 2] | 0);
  i5 = i7 + 4 | 0;
  if ((i5 | 0) == (i4 | 0)) {
   i8 = 14;
   break;
  } else {
   i9 = i5;
  }
  while (1) {
   i5 = HEAP32[i9 >> 2] | 0;
   if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
    break;
   }
   i5 = i9 + 4 | 0;
   if ((i5 | 0) == (i4 | 0)) {
    i8 = 16;
    break L12;
   } else {
    i9 = i5;
   }
  }
  if ((i9 | 0) == (i4 | 0)) {
   i8 = 15;
   break;
  } else {
   i7 = i9;
  }
 }
 if ((i8 | 0) == 14) {
  return;
 } else if ((i8 | 0) == 16) {
  return;
 } else if ((i8 | 0) == 15) {
  return;
 }
}
function __ZN7WebCore22ScriptExecutionContext17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjPN3JSC9ExecStateEm(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[(HEAP32[i1 >> 2] | 0) + 76 >> 2] | 0;
 i13 = i11 | 0;
 HEAP32[i13 >> 2] = 0;
 FUNCTION_TABLE_viiiiiiiiii[i12 & 1](i1, i2, i3, i4, i5, i6, i7, i11, i8, i9);
 i9 = HEAP32[i13 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 i13 = i9 | 0;
 i8 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) == 0) {
  __ZN7WebCore15ScriptCallStackD1Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
  STACKTOP = i10;
  return;
 } else {
  HEAP32[i13 >> 2] = i8;
  STACKTOP = i10;
  return;
 }
}
function __ZN3WTF6VectorINS_6OwnPtrIN7WebCore22ScriptExecutionContext16PendingExceptionEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore22ScriptExecutionContext18setDatabaseContextEPNS_15DatabaseContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i2 | 0) != 0) {
  i3 = i2 + 12 | 0;
  tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue + 1, tempValue;
 }
 i3 = i1 + 152 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 12 | 0;
 i1 = i2 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  return;
 }
 i1 = i2 - 12 | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 31](i1);
 return;
}
function __ZN7WebCore22ScriptExecutionContext24didCreateActiveDOMObjectEPNS_15ActiveDOMObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 if ((HEAP8[i1 + 100 | 0] & 1) == 0) {
  __ZN3WTF9HashTableIPN7WebCore15ActiveDOMObjectES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 80 | 0, i4, i4);
  STACKTOP = i3;
  return;
 } else {
  _WTFCrash();
 }
}
function __ZN7WebCore22ScriptExecutionContext30processMessagePortMessagesSoonEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
 i5 = __ZN3WTF10fastMallocEj(4) | 0;
 HEAP32[i5 >> 2] = H_BASE + 32;
 i6 = i3 | 0;
 HEAP32[i6 >> 2] = i5;
 FUNCTION_TABLE_vii[i4 & 15](i1, i3);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22ScriptExecutionContext28didCreateDestructionObserverEPNS_26ContextDestructionObserverE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore26ContextDestructionObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 60 | 0, i4, i4);
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
function __ZN7WebCore22ScriptExecutionContext18createdMessagePortEPNS_11MessagePortE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore11MessagePortES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 40 | 0, i4, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22ScriptExecutionContext21AddConsoleMessageTaskD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 208;
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
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore22ScriptExecutionContext26willDestroyActiveDOMObjectEPNS_15ActiveDOMObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 if ((HEAP8[i1 + 100 | 0] & 1) == 0) {
  __ZN3WTF7HashSetIPN7WebCore15ActiveDOMObjectENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 80 | 0, i4) | 0;
  STACKTOP = i3;
  return;
 } else {
  _WTFCrash();
 }
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
function __ZN7WebCore22ScriptExecutionContext2vmEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 15](i1) | 0) {
  i3 = __ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0;
  return i3 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 15](i1) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[HEAP32[i1 + 260 >> 2] >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore22ScriptExecutionContextC2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SecurityContextC2Ev(i1 | 0);
 _memset(i1 + 20 | 0, 0, 20) | 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP32[i1 + 132 >> 2] = 0;
 HEAP8[i1 + 136 | 0] = 0;
 _memset(i1 + 40 | 0, 0, 62) | 0;
 _memset(i1 + 104 | 0, 0, 25) | 0;
 HEAP32[i1 + 140 >> 2] = -1;
 HEAP8[i1 + 144 | 0] = 0;
 HEAP32[i1 + 148 >> 2] = 0;
 HEAP32[i1 + 152 >> 2] = 0;
 return;
}
function __ZN7WebCore22ScriptExecutionContext30willDestroyDestructionObserverEPNS_26ContextDestructionObserverE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore26ContextDestructionObserverENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 60 | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22ScriptExecutionContext30suspendActiveDOMObjectIfNeededEPNS_15ActiveDOMObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP8[i1 + 136 | 0] & 1) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 15](i2, HEAP32[i1 + 140 >> 2] | 0);
 }
 if ((HEAP8[i1 + 144 | 0] & 1) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] & 31](i2);
 return;
}
function __ZN7WebCore22ScriptExecutionContext21AddConsoleMessageTaskD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 208;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore22ScriptExecutionContext20destroyedMessagePortEPNS_11MessagePortE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore11MessagePortENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 40 | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function dynCall_viiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 FUNCTION_TABLE_viiiiiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0);
}
function __ZN7WebCore22ScriptExecutionContext21AddConsoleMessageTask11performTaskEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 40 >> 2] & 1](i2, HEAP32[i1 + 4 >> 2] | 0, HEAP32[i1 + 8 >> 2] | 0, i1 + 12 | 0, 0);
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
 FUNCTION_TABLE_viiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function __ZN7WebCore22ScriptExecutionContext20circularSequentialIDEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 104 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i3 = (i1 | 0) < 0 ? 1 : i1 + 1 | 0;
 HEAP32[i2 >> 2] = i3;
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore23ProcessMessagesSoonTask11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22ScriptExecutionContext25dispatchMessagePortEventsEv(i2);
 return;
}
function b1(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 abort(1);
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZNK7WebCore22ScriptExecutionContext22timerAlignmentIntervalEv(i1) {
 i1 = i1 | 0;
 return +(+__ZN7WebCore8Settings32defaultDOMTimerAlignmentIntervalEv());
}
function __ZNK7WebCore22ScriptExecutionContext20minimumTimerIntervalEv(i1) {
 i1 = i1 | 0;
 return +(+__ZN7WebCore8Settings26defaultMinDOMTimerIntervalEv());
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 1](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore22ScriptExecutionContextD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContextD2Ev(i1);
 __ZdlPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function b8(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(8);
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
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZN7WebCore22ScriptExecutionContext4TaskD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore23ProcessMessagesSoonTaskD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 7](i2 | 0);
}
function __ZNK7WebCore22ScriptExecutionContext19isWorkerGlobalScopeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore22ScriptExecutionContext15isContextThreadEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore22ScriptExecutionContext10isDocumentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore22ScriptExecutionContext4TaskD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore23ProcessMessagesSoonTaskD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function b9(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(9);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
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
 return +0;
}
function b5(i1) {
 i1 = i1 | 0;
 abort(5);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_viiiiiiiiii = [b1,b1];
  var FUNCTION_TABLE_di = [b2,b2,__ZNK7WebCore22ScriptExecutionContext22timerAlignmentIntervalEv,b2,__ZNK7WebCore22ScriptExecutionContext20minimumTimerIntervalEv,b2,b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore22ScriptExecutionContext21AddConsoleMessageTaskD0Ev,b3,__ZN7WebCore22ScriptExecutionContext4TaskD0Ev,b3,__ZN7WebCore22ScriptExecutionContext4TaskD2Ev,b3,__ZN7WebCore22ScriptExecutionContext21AddConsoleMessageTaskD1Ev,b3,__ZN7WebCore22ScriptExecutionContextD2Ev,b3,__ZN7WebCore22ScriptExecutionContextD0Ev,b3,__ZN7WebCore22ScriptExecutionContext20stopActiveDOMObjectsEv,b3,__ZN7WebCore23ProcessMessagesSoonTaskD1Ev,b3,__ZN7WebCore23ProcessMessagesSoonTaskD0Ev,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,__ZN7WebCore23ProcessMessagesSoonTask11performTaskEPNS_22ScriptExecutionContextE,b4,__ZN7WebCore22ScriptExecutionContext23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE,b4,__ZN7WebCore22ScriptExecutionContext22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE,b4,__ZN7WebCore22ScriptExecutionContext21AddConsoleMessageTask11performTaskEPS0_,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_ii = [b5,b5,__ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv,b5,__ZNK7WebCore22ScriptExecutionContext15isContextThreadEv,b5,__ZNK7WebCore22ScriptExecutionContext10isDocumentEv,b5,__ZNK7WebCore22ScriptExecutionContext19isWorkerGlobalScopeEv,b5,b5,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6];
  var FUNCTION_TABLE_v = [b7,b7,v____cxa_pure_virtual__wrapper,b7];
  var FUNCTION_TABLE_viiiiii = [b8,b8];
  var FUNCTION_TABLE_iii = [b9,b9];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_viiiiiiiiii: dynCall_viiiiiiiiii, dynCall_di: dynCall_di, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_viiiiiiiiii": invoke_viiiiiiiiii, "invoke_di": invoke_di, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = asm["dynCall_viiiiiiiiii"];
var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore22ScriptExecutionContext2vmEv","__ZN3WTF9HashTableIPN7WebCore11MessagePortES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN3WTF9HashTableIPN7WebCore26ContextDestructionObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore22ScriptExecutionContext18createdMessagePortEPNS_11MessagePortE","__ZN7WebCore22ScriptExecutionContext18setDatabaseContextEPNS_15DatabaseContextE","__ZN7WebCore22ScriptExecutionContext20stopActiveDOMObjectsEv","__ZN7WebCore22ScriptExecutionContextD2Ev","__ZN7WebCore22ScriptExecutionContext28didCreateDestructionObserverEPNS_26ContextDestructionObserverE","__ZNK7WebCore22ScriptExecutionContext22timerAlignmentIntervalEv","__ZN7WebCore22ScriptExecutionContext25dispatchMessagePortEventsEv","__ZN7WebCore22ScriptExecutionContext18dispatchErrorEventERKN3WTF6StringEiiS4_PNS_12CachedScriptE","__ZN3WTF9HashTableIPN7WebCore15ActiveDOMObjectES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore22ScriptExecutionContext20circularSequentialIDEv","__ZN3WTF9HashTableIPN7WebCore26ContextDestructionObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore22ScriptExecutionContextD0Ev","__ZN7WebCore22ScriptExecutionContext26adjustMinimumTimerIntervalEd","__ZN7WebCore22ScriptExecutionContext23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE","_memset","__ZN3WTF14deleteOwnedPtrINS_6VectorINS_6OwnPtrIN7WebCore22ScriptExecutionContext16PendingExceptionEEELj0ENS_15CrashOnOverflowEEEEEvPT_","_memcpy","__ZN7WebCore22ScriptExecutionContext30willDestroyDestructionObserverEPNS_26ContextDestructionObserverE","__ZN7WebCore22ScriptExecutionContext15reportExceptionERKN3WTF6StringEiiS4_NS1_10PassRefPtrINS_15ScriptCallStackEEEPNS_12CachedScriptE","__ZN3WTF7HashSetIPN7WebCore11MessagePortENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore22ScriptExecutionContext30processMessagePortMessagesSoonEv","__ZN7WebCore23ProcessMessagesSoonTaskD0Ev","__ZN7WebCore22ScriptExecutionContext16publicURLManagerEv","__ZN3WTF7HashSetIPN7WebCore15ActiveDOMObjectENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZNK7WebCore22ScriptExecutionContext10isDocumentEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore22ScriptExecutionContext4TaskD0Ev","__ZN3WTF9HashTableIPN7WebCore15ActiveDOMObjectES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv","__ZN7WebCore22ScriptExecutionContext17closeMessagePortsEv","__ZNK7WebCore22ScriptExecutionContext15isContextThreadEv","__ZN7WebCore22ScriptExecutionContext26canSuspendActiveDOMObjectsEv","__ZN7WebCore23ProcessMessagesSoonTaskD1Ev","__ZN7WebCore22ScriptExecutionContext30suspendActiveDOMObjectIfNeededEPNS_15ActiveDOMObjectE","__ZNK7WebCore22ScriptExecutionContext20minimumTimerIntervalEv","__ZN7WebCore22ScriptExecutionContext20destroyedMessagePortEPNS_11MessagePortE","__ZN7WebCore22ScriptExecutionContext21AddConsoleMessageTask11performTaskEPS0_","__ZN7WebCore22ScriptExecutionContextC2Ev","__ZN7WebCore22ScriptExecutionContext21AddConsoleMessageTaskD0Ev","__ZN7WebCore23ProcessMessagesSoonTask11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore22ScriptExecutionContext31didChangeTimerAlignmentIntervalEv","__ZN7WebCore22ScriptExecutionContext26willDestroyActiveDOMObjectEPNS_15ActiveDOMObjectE","__ZN7WebCore22ScriptExecutionContext4TaskD2Ev","__ZN7WebCore22ScriptExecutionContext22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE","__ZN7WebCore22ScriptExecutionContext21AddConsoleMessageTaskD1Ev","__ZN3WTF9HashTableIPN7WebCore11MessagePortES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore22ScriptExecutionContext24didCreateActiveDOMObjectEPNS_15ActiveDOMObjectE","__ZN7WebCore22ScriptExecutionContext19sanitizeScriptErrorERN3WTF6StringERiS4_S3_PNS_12CachedScriptE","__ZN7WebCore22ScriptExecutionContext17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjPN3JSC9ExecStateEm","__ZN3WTF6VectorINS_6OwnPtrIN7WebCore22ScriptExecutionContext16PendingExceptionEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore22ScriptExecutionContext19isWorkerGlobalScopeEv","__ZN3WTF7HashSetIPN7WebCore26ContextDestructionObserverENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_"]

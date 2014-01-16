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
H_BASE = parentModule["_malloc"](576 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 576;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore6ChromeC1ERNS_4PageERNS_12ChromeClientE;
var __ZN7WebCore6ChromeD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
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
function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  try {
    Module["dynCall_viiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8);
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
  var __ZN7WebCore9HTMLNames8inputTagE=env.__ZN7WebCore9HTMLNames8inputTagE|0;
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore6ChromeE=(H_BASE+8)|0;
  var __ZTVN7WebCore12ChromeClientE=(H_BASE+88)|0;
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
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_viii=env.invoke_viii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var invoke_viiiiiiii=env.invoke_viiiiiiii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore6Chrome10setToolTipERKNS_13HitTestResultE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 72 | 0;
 i9 = i3 + 80 | 0;
 i10 = i3 + 88 | 0;
 __ZNK7WebCore13HitTestResult15spellingToolTipERNS_13TextDirectionE(i5, i2, i4);
 i11 = i5 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = 3;
 } else {
  if ((HEAP32[i12 + 4 >> 2] | 0) == 0) {
   i13 = 3;
  } else {
   i14 = i12;
   i13 = 40;
  }
 }
 do {
  if ((i13 | 0) == 3) {
   if ((HEAP8[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 48 >> 2] | 0) + 190 | 0] & 32) == 0) {
    i15 = i12;
   } else {
    i16 = __ZNK7WebCore13HitTestResult21innerNonSharedElementEv(i2) | 0;
    do {
     if ((i16 | 0) != 0) {
      if ((HEAP32[i16 + 12 >> 2] & 16 | 0) == 0) {
       break;
      }
      if ((HEAP32[(HEAP32[i16 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break;
      }
      if (!(__ZNK7WebCore16HTMLInputElement14isSubmitButtonEv(i16) | 0)) {
       break;
      }
      i17 = HEAP32[i16 + 60 >> 2] | 0;
      if ((i17 | 0) == 0) {
       break;
      }
      __ZNK7WebCore15HTMLFormElement6actionEv(i6, i17);
      i18 = i6 | 0;
      i19 = HEAP32[i18 >> 2] | 0;
      HEAP32[i18 >> 2] = 0;
      i20 = HEAP32[i11 >> 2] | 0;
      HEAP32[i11 >> 2] = i19;
      do {
       if ((i20 | 0) != 0) {
        i19 = i20 | 0;
        i21 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
        if ((i21 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i20);
         break;
        } else {
         HEAP32[i19 >> 2] = i21;
         break;
        }
       }
      } while (0);
      i20 = HEAP32[i18 >> 2] | 0;
      do {
       if ((i20 | 0) != 0) {
        i21 = i20 | 0;
        i19 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
        if ((i19 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i20);
         break;
        } else {
         HEAP32[i21 >> 2] = i19;
         break;
        }
       }
      } while (0);
      i20 = (HEAP32[i17 + 12 >> 2] & 2048 | 0) == 0;
      i18 = i17 + 32 | 0;
      if (i20) {
       i22 = i18 | 0;
      } else {
       i22 = HEAP32[i18 >> 2] | 0;
      }
      if ((HEAP32[i22 >> 2] | 0) == 0) {
       HEAP32[i4 >> 2] = 1;
       break;
      }
      if (i20) {
       i23 = i18 | 0;
      } else {
       i23 = HEAP32[i18 >> 2] | 0;
      }
      HEAP32[i4 >> 2] = (HEAP32[(HEAP32[(HEAP32[i23 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] | 0) >>> 30 & 1;
     }
    } while (0);
    i16 = HEAP32[i11 >> 2] | 0;
    if ((i16 | 0) != 0) {
     if ((HEAP32[i16 + 4 >> 2] | 0) != 0) {
      i14 = i16;
      i13 = 40;
      break;
     }
    }
    __ZNK7WebCore13HitTestResult15absoluteLinkURLEv(i7, i2);
    i16 = i7 | 0;
    i18 = HEAP32[i16 >> 2] | 0;
    if ((i18 | 0) != 0) {
     i20 = i18 | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
    }
    i20 = HEAP32[i11 >> 2] | 0;
    HEAP32[i11 >> 2] = i18;
    do {
     if ((i20 | 0) != 0) {
      i18 = i20 | 0;
      i19 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
      if ((i19 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i20);
       break;
      } else {
       HEAP32[i18 >> 2] = i19;
       break;
      }
     }
    } while (0);
    i20 = HEAP32[i16 >> 2] | 0;
    do {
     if ((i20 | 0) != 0) {
      i19 = i20 | 0;
      i18 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
      if ((i18 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i20);
       break;
      } else {
       HEAP32[i19 >> 2] = i18;
       break;
      }
     }
    } while (0);
    HEAP32[i4 >> 2] = 1;
    i15 = HEAP32[i11 >> 2] | 0;
   }
   if ((i15 | 0) == 0) {
    i13 = 41;
   } else {
    i14 = i15;
    i13 = 40;
   }
  }
 } while (0);
 if ((i13 | 0) == 40) {
  if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
   i13 = 41;
  }
 }
 do {
  if ((i13 | 0) == 41) {
   __ZNK7WebCore13HitTestResult5titleERNS_13TextDirectionE(i8, i2, i4);
   i14 = i8 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   i7 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i15;
   do {
    if ((i7 | 0) != 0) {
     i15 = i7 | 0;
     i23 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i15 >> 2] = i23;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i14 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i23 = i7 | 0;
   i15 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i23 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i11 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i13 = 51;
 } else {
  if ((HEAP32[i8 + 4 >> 2] | 0) == 0) {
   i13 = 51;
  }
 }
 do {
  if ((i13 | 0) == 51) {
   if ((HEAP8[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 48 >> 2] | 0) + 190 | 0] & 16) == 0) {
    break;
   }
   __ZNK7WebCore13HitTestResult20innerTextIfTruncatedERNS_13TextDirectionE(i9, i2, i4);
   i8 = i9 | 0;
   i15 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i23 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i15;
   do {
    if ((i23 | 0) != 0) {
     i15 = i23 | 0;
     i7 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i15 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i23 = HEAP32[i8 >> 2] | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   i14 = i23 | 0;
   i7 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i14 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i11 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i13 = 62;
 } else {
  if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
   i13 = 62;
  }
 }
 do {
  if ((i13 | 0) == 62) {
   i9 = __ZNK7WebCore13HitTestResult21innerNonSharedElementEv(i2) | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   if ((HEAP32[i9 + 12 >> 2] & 16 | 0) == 0) {
    break;
   }
   if ((HEAP32[(HEAP32[i9 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   __ZNK7WebCore16HTMLInputElement14defaultToolTipEv(i10, i9);
   i9 = i10 | 0;
   i7 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i14 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i7;
   do {
    if ((i14 | 0) != 0) {
     i7 = i14 | 0;
     i23 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i7 >> 2] = i23;
      break;
     }
    }
   } while (0);
   i14 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i8 = i14 | 0;
     i23 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i8 >> 2] = i23;
      break;
     }
    }
   } while (0);
   HEAP32[i4 >> 2] = 1;
  }
 } while (0);
 i10 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i10 >> 2] | 0) + 220 >> 2] & 31](i10, i5, HEAP32[i4 >> 2] | 0);
 i4 = HEAP32[i11 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i4 | 0;
 i5 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i11 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_viiiiiiii + 2;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_viiiiiii + 2;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_vi + 12;
}
function __ZN7WebCore6Chrome19runJavaScriptPromptEPNS_5FrameERKN3WTF6StringES6_RS4_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 88 | 0;
 i10 = i6 + 96 | 0;
 i11 = i6 + 104 | 0;
 i12 = i6 + 112 | 0;
 i13 = i1 + 4 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 HEAP32[i7 >> 2] = 2;
 i15 = HEAP32[i14 + 60 >> 2] | 0;
 L1 : do {
  if ((i15 | 0) != 0) {
   i16 = i15;
   while (1) {
    i17 = HEAP32[i16 + 152 >> 2] | 0;
    if ((i17 | 0) != 0) {
     break;
    }
    i16 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i16 + 40 | 0, 0) | 0;
    if ((i16 | 0) == 0) {
     break L1;
    }
   }
   i16 = HEAP32[(HEAP32[i14 + 20 >> 2] | 0) + 8 >> 2] | 0;
   if (FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i16 >> 2] | 0) + 404 >> 2] & 3](i16, i7, i3, i17) | 0) {
    break;
   } else {
    i18 = 0;
   }
   STACKTOP = i6;
   return i18 | 0;
  }
 } while (0);
 __ZN7WebCore21PageGroupLoadDeferrerC1ERNS_4PageEb(i8, HEAP32[i13 >> 2] | 0, 1);
 __ZNK7WebCore6Chrome27notifyPopupOpeningObserversEv(i1);
 __ZNK7WebCore5Frame31displayStringModifiedByEncodingERKN3WTF6StringE(i9, i2, i3);
 do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
   __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i10);
  } else {
   i3 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i13 >> 2] | 0) | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i10);
    break;
   } else {
    __ZN7WebCore24InspectorInstrumentation27willRunJavaScriptDialogImplEPNS_19InstrumentingAgentsERKN3WTF6StringE(i10, i3, i9);
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i13 >> 2] | 0) + 120 >> 2] | 0;
 __ZNK7WebCore5Frame31displayStringModifiedByEncodingERKN3WTF6StringE(i11, i2, i4);
 i4 = FUNCTION_TABLE_iiiiii[i1 & 1](i13, i2, i9, i11, i5) | 0;
 i13 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i11 = i13 | 0;
   i1 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i11 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
   if ((HEAP32[i10 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation26didRunJavaScriptDialogImplERKNS_30InspectorInstrumentationCookieE(i10);
  }
 } while (0);
 do {
  if (i4) {
   __ZNK7WebCore5Frame31displayStringModifiedByEncodingERKN3WTF6StringE(i12, i2, i5);
   i13 = i12 | 0;
   i1 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   i11 = i5 | 0;
   i3 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i1;
   do {
    if ((i3 | 0) != 0) {
     i1 = i3 | 0;
     i11 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i1 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i3 = HEAP32[i13 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i11 = i3 | 0;
   i1 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i11 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i10);
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i9 = i10 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN7WebCore21PageGroupLoadDeferrerD1Ev(i8);
 i18 = i4;
 STACKTOP = i6;
 return i18 | 0;
}
function __ZN7WebCore6Chrome20runJavaScriptConfirmEPNS_5FrameERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 88 | 0;
 i8 = i4 + 96 | 0;
 i9 = i1 + 4 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i5 >> 2] = 1;
 i11 = HEAP32[i10 + 60 >> 2] | 0;
 L1 : do {
  if ((i11 | 0) != 0) {
   i12 = i11;
   while (1) {
    i13 = HEAP32[i12 + 152 >> 2] | 0;
    if ((i13 | 0) != 0) {
     break;
    }
    i12 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i12 + 40 | 0, 0) | 0;
    if ((i12 | 0) == 0) {
     break L1;
    }
   }
   i12 = HEAP32[(HEAP32[i10 + 20 >> 2] | 0) + 8 >> 2] | 0;
   if (FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i12 >> 2] | 0) + 404 >> 2] & 3](i12, i5, i3, i13) | 0) {
    break;
   } else {
    i14 = 0;
   }
   STACKTOP = i4;
   return i14 | 0;
  }
 } while (0);
 __ZN7WebCore21PageGroupLoadDeferrerC1ERNS_4PageEb(i6, HEAP32[i9 >> 2] | 0, 1);
 __ZNK7WebCore6Chrome27notifyPopupOpeningObserversEv(i1);
 __ZNK7WebCore5Frame31displayStringModifiedByEncodingERKN3WTF6StringE(i7, i2, i3);
 do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
   __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i8);
  } else {
   i3 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i9 >> 2] | 0) | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i8);
    break;
   } else {
    __ZN7WebCore24InspectorInstrumentation27willRunJavaScriptDialogImplEPNS_19InstrumentingAgentsERKN3WTF6StringE(i8, i3, i7);
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i9 >> 2] | 0) + 116 >> 2] & 7](i9, i2, i7) | 0;
 do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
   if ((HEAP32[i8 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation26didRunJavaScriptDialogImplERKNS_30InspectorInstrumentationCookieE(i8);
  }
 } while (0);
 __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i8);
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i7 = i8 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i7 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN7WebCore21PageGroupLoadDeferrerD1Ev(i6);
 i14 = i1;
 STACKTOP = i4;
 return i14 | 0;
}
function __ZN7WebCore6Chrome18runJavaScriptAlertEPNS_5FrameERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 88 | 0;
 i8 = i4 + 96 | 0;
 i9 = i1 + 4 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i11 = HEAP32[i10 + 60 >> 2] | 0;
 L1 : do {
  if ((i11 | 0) != 0) {
   i12 = i11;
   while (1) {
    i13 = HEAP32[i12 + 152 >> 2] | 0;
    if ((i13 | 0) != 0) {
     break;
    }
    i12 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i12 + 40 | 0, 0) | 0;
    if ((i12 | 0) == 0) {
     break L1;
    }
   }
   i12 = HEAP32[(HEAP32[i10 + 20 >> 2] | 0) + 8 >> 2] | 0;
   if (FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i12 >> 2] | 0) + 404 >> 2] & 3](i12, i5, i3, i13) | 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN7WebCore21PageGroupLoadDeferrerC1ERNS_4PageEb(i6, HEAP32[i9 >> 2] | 0, 1);
 __ZNK7WebCore6Chrome27notifyPopupOpeningObserversEv(i1);
 __ZNK7WebCore5Frame31displayStringModifiedByEncodingERKN3WTF6StringE(i7, i2, i3);
 do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
   __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i8);
  } else {
   i3 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i9 >> 2] | 0) | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i8);
    break;
   } else {
    __ZN7WebCore24InspectorInstrumentation27willRunJavaScriptDialogImplEPNS_19InstrumentingAgentsERKN3WTF6StringE(i8, i3, i7);
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i9 >> 2] | 0) + 112 >> 2] & 31](i9, i2, i7);
 do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
   if ((HEAP32[i8 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation26didRunJavaScriptDialogImplERKNS_30InspectorInstrumentationCookieE(i8);
  }
 } while (0);
 __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i8);
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i7 = i8 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i7 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN7WebCore21PageGroupLoadDeferrerD1Ev(i6);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore6Chrome23mouseDidMoveOverElementERKNS_13HitTestResultEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i2 + 72 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   if ((HEAP8[(HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1084 | 0] & 1) == 0) {
    break;
   }
   __ZNK7WebCore13HitTestResult15absoluteLinkURLEv(i6, i2);
   __ZNK7WebCore3URL4hostEv(i5, i6);
   __ZN7WebCore11prefetchDNSERKN3WTF6StringE(i5);
   i8 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i9 = i8 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i9 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i8 = HEAP32[i6 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i10 = i8 | 0;
   i9 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i10 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 216 >> 2] & 31](i6, i2, i3);
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i1 + 4 >> 2] | 0) | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore24InspectorInstrumentation27mouseDidMoveOverElementImplEPNS_19InstrumentingAgentsERKNS_13HitTestResultEj(i6, i2, i3);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore6Chrome14canRunModalNowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 48 >> 2] & 31](i5) | 0)) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 if (__ZN7WebCore14ResourceHandle12loadsBlockedEv() | 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 >> 2] = 3;
 i7 = HEAP32[i5 + 60 >> 2] | 0;
 L7 : do {
  if ((i7 | 0) == 0) {
   i8 = 1;
  } else {
   i9 = i7;
   while (1) {
    i10 = HEAP32[i9 + 152 >> 2] | 0;
    if ((i10 | 0) != 0) {
     break;
    }
    i11 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i9 + 40 | 0, 0) | 0;
    if ((i11 | 0) == 0) {
     i8 = 1;
     break L7;
    } else {
     i9 = i11;
    }
   }
   i9 = HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 8 >> 2] | 0;
   i8 = FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i9 >> 2] | 0) + 404 >> 2] & 3](i9, i3, i4, i10) | 0;
  }
 } while (0);
 i10 = HEAP32[i1 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i6 = i8;
  STACKTOP = i2;
  return i6 | 0;
 }
 i1 = i10 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  i6 = i8;
  STACKTOP = i2;
  return i6 | 0;
 } else {
  HEAP32[i1 >> 2] = i4;
  i6 = i8;
  STACKTOP = i2;
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore6Chrome27runBeforeUnloadConfirmPanelERKN3WTF6StringEPNS_5FrameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i5 = i4 | 0;
 i6 = i4 + 80 | 0;
 i7 = i1 + 4 | 0;
 __ZN7WebCore21PageGroupLoadDeferrerC1ERNS_4PageEb(i5, HEAP32[i7 >> 2] | 0, 1);
 do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
   __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i6);
  } else {
   i8 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i7 >> 2] | 0) | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i6);
    break;
   } else {
    __ZN7WebCore24InspectorInstrumentation27willRunJavaScriptDialogImplEPNS_19InstrumentingAgentsERKN3WTF6StringE(i6, i8, i2);
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i7 >> 2] | 0) + 104 >> 2] & 7](i7, i2, i3) | 0;
 do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
   if ((HEAP32[i6 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation26didRunJavaScriptDialogImplERKNS_30InspectorInstrumentationCookieE(i6);
  }
 } while (0);
 __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i6);
 __ZN7WebCore21PageGroupLoadDeferrerD1Ev(i5);
 STACKTOP = i4;
 return i1 | 0;
}
function __ZN7WebCore6Chrome28registerPopupOpeningObserverEPNS_20PopupOpeningObserverE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 i5 = i1 + 16 | 0;
 i6 = i1 + 24 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != (HEAP32[i1 + 20 >> 2] | 0)) {
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i7 << 2) >> 2] = i2;
  i8 = HEAP32[i6 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i6 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
 i2 = i7 + 1 | 0;
 i1 = i5 | 0;
 i10 = HEAP32[i1 >> 2] | 0;
 do {
  if (i10 >>> 0 > i4 >>> 0) {
   i11 = 5;
  } else {
   if ((i10 + (i7 << 2) | 0) >>> 0 <= i4 >>> 0) {
    i11 = 5;
    break;
   }
   __ZN3WTF6VectorIPN7WebCore20PopupOpeningObserverELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i2);
   i12 = HEAP32[i1 >> 2] | 0;
   i13 = i12 + (i4 - i10 >> 2 << 2) | 0;
   i14 = i12;
  }
 } while (0);
 if ((i11 | 0) == 5) {
  __ZN3WTF6VectorIPN7WebCore20PopupOpeningObserverELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i2);
  i13 = i4;
  i14 = HEAP32[i1 >> 2] | 0;
 }
 HEAP32[i14 + (HEAP32[i6 >> 2] << 2) >> 2] = HEAP32[i13 >> 2];
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = i8 + 1 | 0;
 HEAP32[i6 >> 2] = i9;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore6Chrome12createWindowEPNS_5FrameERKNS_16FrameLoadRequestERKNS_14WindowFeaturesERKNS_16NavigationActionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = HEAP32[i1 + 8 >> 2] | 0;
 i9 = FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i8 >> 2] | 0) + 40 >> 2] & 1](i8, i2, i3, i4, i5) | 0;
 if ((i9 | 0) == 0) {
  i10 = 0;
  STACKTOP = i6;
  return i10 | 0;
 }
 i5 = __ZN7WebCore4Page14sessionStorageEb(HEAP32[i1 + 4 >> 2] | 0, 0) | 0;
 if ((i5 | 0) == 0) {
  i10 = i9;
  STACKTOP = i6;
  return i10 | 0;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 31](i7, i5, i9);
 __ZN7WebCore4Page17setSessionStorageEN3WTF10PassRefPtrINS_16StorageNamespaceEEE(i9, i7);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i10 = i9;
  STACKTOP = i6;
  return i10 | 0;
 }
 i7 = i5 + 4 | 0;
 i5 = i7 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  i10 = i9;
  STACKTOP = i6;
  return i10 | 0;
 }
 i1 = i7 - 4 | 0;
 if ((i1 | 0) == 0) {
  i10 = i9;
  STACKTOP = i6;
  return i10 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 i10 = i9;
 STACKTOP = i6;
 return i10 | 0;
}
function __ZNK7WebCore6Chrome27notifyPopupOpeningObserversEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 i3 = i1 + 24 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i5 = 0;
  } else {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i6 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0) | 0;
   i7 = i6;
   if ((i6 | 0) == 0) {
    i5 = i7;
    break;
   }
   _memcpy(i6 | 0, HEAP32[i1 + 16 >> 2] | 0, HEAP32[i3 >> 2] << 2) | 0;
   i5 = i7;
  }
 } while (0);
 if ((i4 | 0) != 0) {
  i3 = 0;
  while (1) {
   i1 = HEAP32[i5 + (i3 << 2) >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[HEAP32[i1 >> 2] >> 2] & 31](i1);
   i3 = i3 + 1 | 0;
   if (i3 >>> 0 >= i4 >>> 0) {
    break;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN3WTF6VectorIPN7WebCore20PopupOpeningObserverELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore6Chrome12runOpenPanelEPNS_5FrameEN3WTF10PassRefPtrINS_11FileChooserEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZNK7WebCore6Chrome27notifyPopupOpeningObserversEv(i1);
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i6 >> 2] | 0) + 272 >> 2] | 0;
 i7 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i7 >> 2] = i3;
 FUNCTION_TABLE_viii[i1 & 31](i6, i2, i5);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i5 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore11FileChooserD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i7 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore6Chrome16setStatusbarTextEPNS_5FrameERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i6 >> 2] | 0) + 124 >> 2] | 0;
 __ZNK7WebCore5Frame31displayStringModifiedByEncodingERKN3WTF6StringE(i5, i2, i3);
 FUNCTION_TABLE_vii[i1 & 63](i6, i5);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i6 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore6Chrome6scrollERKNS_7IntSizeERKNS_7IntRectES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i5 >> 2] | 0) + 156 >> 2] & 7](i5, i2, i3, i4);
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
  return;
 }
 i4 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i1 + 4 >> 2] | 0) | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 __ZN7WebCore24InspectorInstrumentation13didScrollImplEPNS_19InstrumentingAgentsE(i4);
 return;
}
function __ZN7WebCore6Chrome30unregisterPopupOpeningObserverEPNS_20PopupOpeningObserverE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 16 | 0;
 i4 = i1 + 24 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i5 = 0;
 while (1) {
  i6 = HEAP32[i3 >> 2] | 0;
  if (i5 >>> 0 >= i1 >>> 0) {
   i7 = -1;
   break;
  }
  if ((HEAP32[i6 + (i5 << 2) >> 2] | 0) == (i2 | 0)) {
   i7 = i5;
   break;
  } else {
   i5 = i5 + 1 | 0;
  }
 }
 _memmove(i6 + (i7 << 2) | 0, i6 + (i7 + 1 << 2) | 0, i1 + (i7 ^ 1073741823) << 2 | 0) | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - 1;
 return;
}
function __ZN7WebCore6Chrome21windowScreenDidChangeEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 12 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  return;
 }
 HEAP32[i3 >> 2] = i2;
 i3 = HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 60 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3;
 while (1) {
  i3 = HEAP32[i1 + 456 >> 2] | 0;
  if ((i3 | 0) != 0) {
   __ZN7WebCore8Document21windowScreenDidChangeEj(i3, i2);
  }
  i1 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i1 + 40 | 0, 0) | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
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
function __ZN7WebCore6ChromeD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[HEAP32[i2 >> 2] >> 2] & 31](i2);
 i2 = i1 + 24 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 i4 = i1;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZNK7WebCore6Chrome8runModalEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i3 = i2 | 0;
 __ZN7WebCore21PageGroupLoadDeferrerC1ERNS_4PageEb(i3, HEAP32[i1 + 4 >> 2] | 0, 0);
 __ZN7WebCore9TimerBase27fireTimersInNestedEventLoopEv();
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 52 >> 2] & 31](i4);
 __ZN7WebCore21PageGroupLoadDeferrerD1Ev(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore6ChromeD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[HEAP32[i2 >> 2] >> 2] & 31](i2);
 i2 = i1 + 24 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN7WebCore6ChromeD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[HEAP32[i2 >> 2] >> 2] & 31](i2);
 i2 = i1 + 24 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN7WebCore6Chrome25shouldInterruptJavaScriptEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i3 = i2 | 0;
 __ZN7WebCore21PageGroupLoadDeferrerC1ERNS_4PageEb(i3, HEAP32[i1 + 4 >> 2] | 0, 1);
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 128 >> 2] & 31](i4) | 0;
 __ZN7WebCore21PageGroupLoadDeferrerD1Ev(i3);
 STACKTOP = i2;
 return i1 | 0;
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
function __ZN7WebCore12ChromeClient19addMessageToConsoleENS_13MessageSourceENS_11MessageTypeENS_12MessageLevelERKN3WTF6StringEjjS7_(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 92 >> 2] & 3](i1, i2, i4, i5, i6, i7, i8);
 return;
}
function _memmove(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i2 | 0) < (i1 | 0) & (i1 | 0) < (i2 + i3 | 0)) {
  i4 = i1;
  i2 = i2 + i3 | 0;
  i1 = i1 + i3 | 0;
  while ((i3 | 0) > 0) {
   i1 = i1 - 1 | 0;
   i2 = i2 - 1 | 0;
   i3 = i3 - 1 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
  }
  i1 = i4;
 } else {
  _memcpy(i1, i2, i3) | 0;
 }
 return i1 | 0;
}
function __ZN7WebCore6Chrome18createColorChooserEPNS_18ColorChooserClientERKNS_5ColorE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 __ZNK7WebCore6Chrome27notifyPopupOpeningObserversEv(i2);
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i5 >> 2] | 0) + 268 >> 2] & 7](i1, i5, i3, i4);
 return;
}
function __ZNK7WebCore6Chrome21createSearchPopupMenuEPNS_15PopupMenuClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 __ZNK7WebCore6Chrome27notifyPopupOpeningObserversEv(i2);
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 388 >> 2] & 31](i1, i4, i3);
 return;
}
function __ZNK7WebCore6Chrome15createPopupMenuEPNS_15PopupMenuClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 __ZNK7WebCore6Chrome27notifyPopupOpeningObserversEv(i2);
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 384 >> 2] & 31](i1, i4, i3);
 return;
}
function __ZN7WebCore6Chrome16loadIconForFilesERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEEPNS_14FileIconLoaderE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 276 >> 2] & 31](i4, i2, i3);
 return;
}
function dynCall_viiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 FUNCTION_TABLE_viiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0);
}
function __ZN7WebCore6Chrome31invalidateContentsForSlowScrollERKNS_7IntRectEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 152 >> 2] & 31](i4, i2, i3);
 return;
}
function __ZNK7WebCore6Chrome19contentsSizeChangedEPNS_5FrameERKNS_7IntSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 196 >> 2] & 31](i4, i2, i3);
 return;
}
function __ZN7WebCore6Chrome29invalidateContentsAndRootViewERKNS_7IntRectEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 148 >> 2] & 31](i4, i2, i3);
 return;
}
function dynCall_viiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function __ZNK7WebCore6Chrome35dispatchViewportPropertiesDidChangeERKNS_17ViewportArgumentsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 192 >> 2] & 63](i3, i2);
 return;
}
function __ZN7WebCore6Chrome18invalidateRootViewERKNS_7IntRectEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 144 >> 2] & 31](i4, i2, i3);
 return;
}
function __ZNK7WebCore6Chrome16screenToRootViewERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 164 >> 2] & 31](i1, i4, i3);
 return;
}
function __ZNK7WebCore6Chrome16rootViewToScreenERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 168 >> 2] & 31](i1, i4, i3);
 return;
}
function __ZN7WebCore12ChromeClient20paintCustomHighlightEPNS_4NodeERKN3WTF12AtomicStringERKNS_9FloatRectES9_bb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return;
}
function __ZN7WebCore6ChromeC2ERNS_4PageERNS_12ChromeClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i3;
 _memset(i1 + 12 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore6ChromeC1ERNS_4PageERNS_12ChromeClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i3;
 _memset(i1 + 12 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore6Chrome24delegatedScrollRequestedERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 160 >> 2] & 63](i3, i2);
 return;
}
function __ZN7WebCore12ChromeClient19customHighlightRectEPNS_4NodeERKN3WTF12AtomicStringERKNS_9FloatRectE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZNK7WebCore12ChromeClient39shouldRunModalDialogDuringPageDismissalERKNS0_10DialogTypeERKN3WTF6StringENS_11FrameLoader17PageDismissalTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return 1;
}
function __ZNK7WebCore6Chrome21focusedElementChangedEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] & 63](i3, i2);
 return;
}
function __ZNK7WebCore6Chrome18scrollRectIntoViewERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 204 >> 2] & 63](i3, i2);
 return;
}
function __ZNK7WebCore6Chrome12canTakeFocusENS_14FocusDirectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 return FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 7](i3, i2) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore6Chrome30setCursorHiddenUntilMouseMovesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 184 >> 2] & 63](i3, i2);
 return;
}
function __ZNK7WebCore6Chrome19focusedFrameChangedEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 36 >> 2] & 63](i3, i2);
 return;
}
function __ZNK7WebCore6Chrome9takeFocusENS_14FocusDirectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 28 >> 2] & 63](i3, i2);
 return;
}
function __ZNK7WebCore6Chrome13setWindowRectERKNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3, i2);
 return;
}
function __ZN7WebCore6Chrome46selectItemAlignmentFollowsMenuWritingDirectionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 376 >> 2] & 31](i2) | 0;
}
function __ZNK7WebCore6Chrome13layoutUpdatedEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 200 >> 2] & 63](i3, i2);
 return;
}
function __ZNK7WebCore6Chrome20setScrollbarsVisibleEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 72 >> 2] & 63](i3, i2);
 return;
}
function __ZN7WebCore6Chrome9setCursorERKNS_6CursorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 180 >> 2] & 63](i3, i2);
 return;
}
function __ZNK7WebCore6Chrome19setStatusbarVisibleEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 64 >> 2] & 63](i3, i2);
 return;
}
function __ZNK7WebCore6Chrome18setToolbarsVisibleEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 56 >> 2] & 63](i3, i2);
 return;
}
function __ZNK7WebCore6Chrome17windowResizerRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 136 >> 2] & 63](i1, i3);
 return;
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function __ZNK7WebCore6Chrome17setMenubarVisibleEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 80 >> 2] & 63](i3, i2);
 return;
}
function __ZN7WebCore6Chrome5printEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 224 >> 2] & 63](i3, i2);
 return;
}
function __ZN7WebCore6Chrome35selectItemWritingDirectionIsNaturalEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 372 >> 2] & 31](i2) | 0;
}
function __ZN7WebCore6Chrome34requiresFullscreenForVideoPlaybackEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 340 >> 2] & 31](i2) | 0;
}
function __ZNK7WebCore6Chrome12setResizableEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 88 >> 2] & 63](i3, i2);
 return;
}
function __ZNK7WebCore6Chrome10windowRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 63](i1, i3);
 return;
}
function __ZN7WebCore6Chrome30canRunBeforeUnloadConfirmPanelEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 100 >> 2] & 31](i2) | 0;
}
function __ZNK7WebCore6Chrome8pageRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 63](i1, i3);
 return;
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
function __ZNK7WebCore12ChromeClient30unavailablePluginButtonClickedEPNS_7ElementENS_20RenderEmbeddedObject26PluginUnavailabilityReasonE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZNK7WebCore6Chrome23scrollbarsModeDidChangeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 176 >> 2] & 31](i2);
 return;
}
function __ZN7WebCore6Chrome24disableSuddenTerminationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 368 >> 2] & 31](i2);
 return;
}
function __ZN7WebCore6Chrome23enableSuddenTerminationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 364 >> 2] & 31](i2);
 return;
}
function __ZNK7WebCore6Chrome18platformPageClientEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 172 >> 2] & 31](i2) | 0;
}
function __ZNK7WebCore6Chrome17scrollbarsVisibleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 31](i2) | 0;
}
function __ZNK7WebCore6Chrome16statusbarVisibleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 68 >> 2] & 31](i2) | 0;
}
function __ZNK7WebCore6Chrome15toolbarsVisibleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 60 >> 2] & 31](i2) | 0;
}
function __ZNK7WebCore6Chrome14hasOpenedPopupEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 380 >> 2] & 31](i2) | 0;
}
function __ZN7WebCore6Chrome17scheduleAnimationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 188 >> 2] & 31](i2);
 return;
}
function __ZN7WebCore12ChromeClient29postAccessibilityNotificationEPNS_19AccessibilityObjectENS_13AXObjectCache14AXNotificationE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZNK7WebCore6Chrome14menubarVisibleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 84 >> 2] & 31](i2) | 0;
}
function __ZN7WebCore6Chrome15closeWindowSoonEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 108 >> 2] & 31](i2);
 return;
}
function __ZNK7WebCore6Chrome11canRunModalEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 48 >> 2] & 31](i2) | 0;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZNK7WebCore6Chrome7unfocusEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 31](i2);
 return;
}
function __ZNK7WebCore6Chrome5focusEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 31](i2);
 return;
}
function __ZNK7WebCore12ChromeClient38shouldUnavailablePluginMessageBeButtonENS_20RenderEmbeddedObject26PluginUnavailabilityReasonE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZNK7WebCore6Chrome4showEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 31](i2);
 return;
}
function __ZN7WebCore12ChromeClient24didAssociateFormControlsERKN3WTF6VectorINS1_6RefPtrINS_7ElementEEELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function b8(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 abort(8);
}
function __ZNK7WebCore12ChromeClient24plugInStartLabelSubtitleERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore12ChromeClient39shouldReplaceWithGeneratedFileForUploadERKN3WTF6StringERS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 0;
}
function __ZN7WebCore12ChromeClient23generateReplacementFileERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore12ChromeClient26createScrollingCoordinatorEPNS_4PageE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore12ChromeClient21plugInStartLabelTitleERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore12ChromeClient20logDiagnosticMessageERKN3WTF6StringES4_S4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZNK7WebCore12ChromeClient17minimumWindowSizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAPF32[i1 >> 2] = +100;
 HEAPF32[i1 + 4 >> 2] = +100;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function b7(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(7);
}
function __ZN7WebCore12ChromeClient28supportsFullScreenForElementEPKNS_7ElementEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 0;
}
function __ZNK7WebCore12ChromeClient31visibleRectForTiledBackingStoreEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _memset(i1 | 0, 0, 16) | 0;
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
function __ZNK7WebCore12ChromeClient35dispatchViewportPropertiesDidChangeERKNS_17ViewportArgumentsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore12ChromeClient13underlayColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP8[i1 + 4 | 0] = 0;
 return;
}
function __ZNK7WebCore12ChromeClient33shouldUseTiledBackingForFrameViewEPKNS_9FrameViewE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore12ChromeClient34notifyScrollerThumbIsVisibleInRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore12ChromeClient21plugInExtraStyleSheetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
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
function __ZN7WebCore12ChromeClient22setRootFullScreenLayerEPNS_13GraphicsLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore12ChromeClient17plugInExtraScriptEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function b5(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(5);
 return 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZN7WebCore12ChromeClient25supportsFullscreenForNodeEPKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore12ChromeClient25enterFullScreenForElementEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 63](i2 | 0, i3 | 0);
}
function __ZN7WebCore12ChromeClient24exitFullScreenForElementEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore12ChromeClient17didAddHeaderLayerEPNS_13GraphicsLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore12ChromeClient17didAddFooterLayerEPNS_13GraphicsLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore12ChromeClient34recommendedScrollbarStyleDidChangeEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore12ChromeClient18scrollRectIntoViewERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore12ChromeClient22enterFullscreenForNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore12ChromeClient21exitFullscreenForNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function b1(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(1);
}
function __ZN7WebCore12ChromeClient15elementDidFocusEPKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore12ChromeClient13layoutUpdatedEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore12ChromeClient14elementDidBlurEPKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function b10(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(10);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZN7WebCore12ChromeClient34requiresFullscreenForVideoPlaybackEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12ChromeClient26allowedCompositingTriggersEv(i1) {
 i1 = i1 | 0;
 return -1 | 0;
}
function __ZNK7WebCore12ChromeClient28allowsAcceleratedCompositingEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore12ChromeClient29supportsImmediateInvalidationEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b12(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(12);
}
function __ZNK7WebCore12ChromeClient25shouldPaintEntireContentsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore6Chrome9displayIDEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 12 >> 2] | 0;
}
function __ZN7WebCore12ChromeClient25shouldNotifyOnFormChangesEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore12ChromeClient22layerTreeStateIsFrozenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12ChromeClient22isSVGImageChromeClientEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12ChromeClient24incrementActivePageCountEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore12ChromeClient24disableSuddenTerminationEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore12ChromeClient24decrementActivePageCountEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore12ChromeClient20graphicsLayerFactoryEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12ChromeClient23enableSuddenTerminationEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore12ChromeClient23annotatedRegionsChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore12ChromeClient19isEmptyChromeClientEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
 return 0;
}
function __ZN7WebCore12ChromeClient20populateVisitedLinksEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore12ChromeClientD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function b2(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(2);
}
function b11(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(11);
 return 0;
}
function __ZN7WebCore12ChromeClientD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b9() {
 abort(9);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0,__ZN7WebCore12ChromeClient34requiresFullscreenForVideoPlaybackEv,b0,__ZNK7WebCore12ChromeClient26allowedCompositingTriggersEv,b0,__ZNK7WebCore12ChromeClient22isSVGImageChromeClientEv,b0,__ZNK7WebCore6Chrome18platformPageClientEv,b0,__ZNK7WebCore12ChromeClient25shouldPaintEntireContentsEv,b0,__ZNK7WebCore12ChromeClient19isEmptyChromeClientEv,b0,__ZNK7WebCore12ChromeClient28allowsAcceleratedCompositingEv,b0,__ZN7WebCore12ChromeClient29supportsImmediateInvalidationEv,b0,__ZNK7WebCore12ChromeClient20graphicsLayerFactoryEv,b0,__ZN7WebCore12ChromeClient25shouldNotifyOnFormChangesEv,b0,__ZNK7WebCore6Chrome9displayIDEv,b0,__ZNK7WebCore12ChromeClient22layerTreeStateIsFrozenEv,b0,b0,b0,b0
  ,b0,b0,b0];
  var FUNCTION_TABLE_viiiii = [b1,b1,__ZN7WebCore12ChromeClient19customHighlightRectEPNS_4NodeERKN3WTF12AtomicStringERKNS_9FloatRectE,b1];
  var FUNCTION_TABLE_viii = [b2,b2,__ZNK7WebCore6Chrome16rootViewToScreenERKNS_7IntRectE,b2,__ZN7WebCore12ChromeClient23generateReplacementFileERKN3WTF6StringE,b2,__ZN7WebCore6Chrome18invalidateRootViewERKNS_7IntRectEb,b2,__ZNK7WebCore12ChromeClient26createScrollingCoordinatorEPNS_4PageE,b2,__ZN7WebCore6Chrome29invalidateContentsAndRootViewERKNS_7IntRectEb,b2,__ZNK7WebCore12ChromeClient30unavailablePluginButtonClickedEPNS_7ElementENS_20RenderEmbeddedObject26PluginUnavailabilityReasonE,b2,__ZNK7WebCore6Chrome16screenToRootViewERKNS_8IntPointE,b2,__ZNK7WebCore12ChromeClient21plugInStartLabelTitleERKN3WTF6StringE,b2,__ZN7WebCore6Chrome31invalidateContentsForSlowScrollERKNS_7IntRectEb,b2,__ZN7WebCore12ChromeClient29postAccessibilityNotificationEPNS_19AccessibilityObjectENS_13AXObjectCache14AXNotificationE,b2,__ZN7WebCore6ChromeC2ERNS_4PageERNS_12ChromeClientE,b2,__ZNK7WebCore12ChromeClient24plugInStartLabelSubtitleERKN3WTF6StringE,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore12ChromeClient23enableSuddenTerminationEv,b3,__ZN7WebCore12ChromeClient23annotatedRegionsChangedEv,b3,__ZN7WebCore6Chrome17scheduleAnimationEv,b3,__ZN7WebCore12ChromeClient24decrementActivePageCountEv,b3,__ZN7WebCore12ChromeClient24incrementActivePageCountEv,b3,__ZN7WebCore12ChromeClientD0Ev,b3,__ZN7WebCore6ChromeD2Ev,b3,__ZN7WebCore12ChromeClient24disableSuddenTerminationEv,b3,__ZN7WebCore6ChromeD0Ev,b3,__ZNK7WebCore6Chrome23scrollbarsModeDidChangeEv,b3,__ZN7WebCore12ChromeClientD1Ev,b3,__ZN7WebCore12ChromeClient20populateVisitedLinksEv,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,__ZN7WebCore12ChromeClient17didAddFooterLayerEPNS_13GraphicsLayerE,b4,__ZNK7WebCore12ChromeClient35dispatchViewportPropertiesDidChangeERKNS_17ViewportArgumentsE,b4,__ZN7WebCore6Chrome30setCursorHiddenUntilMouseMovesEb,b4,__ZN7WebCore6Chrome21windowScreenDidChangeEj,b4,__ZN7WebCore12ChromeClient15elementDidFocusEPKNS_4NodeE,b4,__ZNK7WebCore12ChromeClient13underlayColorEv,b4,__ZNK7WebCore12ChromeClient17plugInExtraScriptEv,b4,__ZN7WebCore12ChromeClient22setRootFullScreenLayerEPNS_13GraphicsLayerE,b4,__ZN7WebCore12ChromeClient17didAddHeaderLayerEPNS_13GraphicsLayerE,b4,__ZN7WebCore12ChromeClient34notifyScrollerThumbIsVisibleInRectERKNS_7IntRectE,b4,__ZNK7WebCore12ChromeClient31visibleRectForTiledBackingStoreEv,b4,__ZN7WebCore6Chrome24delegatedScrollRequestedERKNS_8IntPointE,b4,__ZN7WebCore12ChromeClient24exitFullScreenForElementEPNS_7ElementE,b4,__ZN7WebCore12ChromeClient22enterFullscreenForNodeEPNS_4NodeE
  ,b4,__ZN7WebCore12ChromeClient25enterFullScreenForElementEPNS_7ElementE,b4,__ZN7WebCore12ChromeClient34recommendedScrollbarStyleDidChangeEi,b4,__ZNK7WebCore12ChromeClient13layoutUpdatedEPNS_5FrameE,b4,__ZN7WebCore12ChromeClient14elementDidBlurEPKNS_4NodeE,b4,__ZN7WebCore12ChromeClient24didAssociateFormControlsERKN3WTF6VectorINS1_6RefPtrINS_7ElementEEELj0ENS1_15CrashOnOverflowEEE,b4,__ZNK7WebCore12ChromeClient17minimumWindowSizeEv,b4,__ZNK7WebCore12ChromeClient21plugInExtraStyleSheetEv,b4,__ZN7WebCore6Chrome9setCursorERKNS_6CursorE,b4,__ZN7WebCore12ChromeClient21exitFullscreenForNodeEPNS_4NodeE,b4,__ZNK7WebCore12ChromeClient18scrollRectIntoViewERKNS_7IntRectE,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_iiiiii = [b5,b5];
  var FUNCTION_TABLE_iiii = [b6,b6,__ZN7WebCore12ChromeClient39shouldReplaceWithGeneratedFileForUploadERKN3WTF6StringERS2_,b6,__ZN7WebCore12ChromeClient28supportsFullScreenForElementEPKNS_7ElementEb,b6,b6,b6];
  var FUNCTION_TABLE_viiiiiii = [b7,b7,__ZN7WebCore12ChromeClient20paintCustomHighlightEPNS_4NodeERKN3WTF12AtomicStringERKNS_9FloatRectES9_bb,b7];
  var FUNCTION_TABLE_viiiiiiii = [b8,b8,__ZN7WebCore12ChromeClient19addMessageToConsoleENS_13MessageSourceENS_11MessageTypeENS_12MessageLevelERKN3WTF6StringEjjS7_,b8];
  var FUNCTION_TABLE_v = [b9,b9,v____cxa_pure_virtual__wrapper,b9];
  var FUNCTION_TABLE_iiiii = [b10,b10,__ZNK7WebCore12ChromeClient39shouldRunModalDialogDuringPageDismissalERKNS0_10DialogTypeERKN3WTF6StringENS_11FrameLoader17PageDismissalTypeE,b10];
  var FUNCTION_TABLE_iii = [b11,b11,__ZNK7WebCore12ChromeClient38shouldUnavailablePluginMessageBeButtonENS_20RenderEmbeddedObject26PluginUnavailabilityReasonE,b11,__ZN7WebCore12ChromeClient25supportsFullscreenForNodeEPKNS_4NodeE,b11,__ZNK7WebCore12ChromeClient33shouldUseTiledBackingForFrameViewEPKNS_9FrameViewE,b11];
  var FUNCTION_TABLE_viiii = [b12,b12,__ZN7WebCore6Chrome6scrollERKNS_7IntSizeERKNS_7IntRectES6_,b12,__ZN7WebCore12ChromeClient20logDiagnosticMessageERKN3WTF6StringES4_S4_,b12,b12,b12];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_viiiii: dynCall_viiiii, dynCall_viii: dynCall_viii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiii: dynCall_iiiiii, dynCall_iiii: dynCall_iiii, dynCall_viiiiiii: dynCall_viiiiiii, dynCall_viiiiiiii: dynCall_viiiiiiii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_viiiii": invoke_viiiii, "invoke_viii": invoke_viii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiii": invoke_iiiiii, "invoke_iiii": invoke_iiii, "invoke_viiiiiii": invoke_viiiiiii, "invoke_viiiiiiii": invoke_viiiiiiii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames8inputTagE": __ZN7WebCore9HTMLNames8inputTagE, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = asm["dynCall_viiiiiiii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore6Chrome16loadIconForFilesERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEEPNS_14FileIconLoaderE","__ZN7WebCore6Chrome27runBeforeUnloadConfirmPanelERKN3WTF6StringEPNS_5FrameE","__ZN7WebCore6Chrome35selectItemWritingDirectionIsNaturalEv","__ZN7WebCore6Chrome6scrollERKNS_7IntSizeERKNS_7IntRectES6_","__ZNK7WebCore12ChromeClient35dispatchViewportPropertiesDidChangeERKNS_17ViewportArgumentsE","__ZNK7WebCore6Chrome13layoutUpdatedEPNS_5FrameE","__ZNK7WebCore6Chrome12createWindowEPNS_5FrameERKNS_16FrameLoadRequestERKNS_14WindowFeaturesERKNS_16NavigationActionE","_strlen","__ZN7WebCore6ChromeC2ERNS_4PageERNS_12ChromeClientE","__ZNK7WebCore12ChromeClient24plugInStartLabelSubtitleERKN3WTF6StringE","__ZNK7WebCore12ChromeClient20graphicsLayerFactoryEv","__ZNK7WebCore12ChromeClient26allowedCompositingTriggersEv","__ZN7WebCore12ChromeClient23enableSuddenTerminationEv","__ZNK7WebCore6Chrome12setResizableEb","__ZNK7WebCore12ChromeClient13underlayColorEv","__ZN7WebCore6Chrome29invalidateContentsAndRootViewERKNS_7IntRectEb","__ZN7WebCore12ChromeClient22setRootFullScreenLayerEPNS_13GraphicsLayerE","__ZN7WebCore12ChromeClient25enterFullScreenForElementEPNS_7ElementE","__ZNK7WebCore6Chrome11canRunModalEv","__ZNK7WebCore6Chrome16screenToRootViewERKNS_8IntPointE","_memcpy","__ZN7WebCore6Chrome12runOpenPanelEPNS_5FrameEN3WTF10PassRefPtrINS_11FileChooserEEE","__ZN7WebCore6Chrome34requiresFullscreenForVideoPlaybackEv","__ZNK7WebCore12ChromeClient39shouldRunModalDialogDuringPageDismissalERKNS0_10DialogTypeERKN3WTF6StringENS_11FrameLoader17PageDismissalTypeE","__ZNK7WebCore6Chrome17setMenubarVisibleEb","__ZN7WebCore12ChromeClient20logDiagnosticMessageERKN3WTF6StringES4_S4_","__ZN7WebCore6Chrome46selectItemAlignmentFollowsMenuWritingDirectionEv","__ZNK7WebCore6Chrome10windowRectEv","__ZN7WebCore12ChromeClient24exitFullScreenForElementEPNS_7ElementE","__ZN7WebCore12ChromeClient14elementDidBlurEPKNS_4NodeE","__ZN7WebCore12ChromeClientD1Ev","__ZNK7WebCore12ChromeClient17minimumWindowSizeEv","__ZNK7WebCore12ChromeClient21plugInExtraStyleSheetEv","__ZN7WebCore6Chrome30canRunBeforeUnloadConfirmPanelEv","__ZN7WebCore6Chrome18invalidateRootViewERKNS_7IntRectEb","__ZN7WebCore12ChromeClient15elementDidFocusEPKNS_4NodeE","__ZNK7WebCore6Chrome16statusbarVisibleEv","__ZNK7WebCore12ChromeClient26createScrollingCoordinatorEPNS_4PageE","__ZNK7WebCore6Chrome19focusedFrameChangedEPNS_5FrameE","__ZNK7WebCore12ChromeClient17plugInExtraScriptEv","__ZN7WebCore6Chrome25shouldInterruptJavaScriptEv","__ZN7WebCore6Chrome16setStatusbarTextEPNS_5FrameERKN3WTF6StringE","__ZNK7WebCore12ChromeClient22isSVGImageChromeClientEv","__ZN7WebCore12ChromeClient17didAddHeaderLayerEPNS_13GraphicsLayerE","__ZNK7WebCore12ChromeClient30unavailablePluginButtonClickedEPNS_7ElementENS_20RenderEmbeddedObject26PluginUnavailabilityReasonE","__ZN7WebCore12ChromeClient34notifyScrollerThumbIsVisibleInRectERKNS_7IntRectE","__ZNK7WebCore12ChromeClient25shouldPaintEntireContentsEv","__ZNK7WebCore6Chrome14hasOpenedPopupEv","__ZNK7WebCore6Chrome14menubarVisibleEv","__ZN7WebCore12ChromeClient24incrementActivePageCountEv","__ZN7WebCore12ChromeClientD0Ev","__ZN7WebCore6ChromeD2Ev","__ZN7WebCore12ChromeClient24didAssociateFormControlsERKN3WTF6VectorINS1_6RefPtrINS_7ElementEEELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore6Chrome21createSearchPopupMenuEPNS_15PopupMenuClientE","__ZNK7WebCore12ChromeClient33shouldUseTiledBackingForFrameViewEPKNS_9FrameViewE","__ZNK7WebCore6Chrome27notifyPopupOpeningObserversEv","__ZNK7WebCore12ChromeClient13layoutUpdatedEPNS_5FrameE","__ZN7WebCore12ChromeClient20paintCustomHighlightEPNS_4NodeERKN3WTF12AtomicStringERKNS_9FloatRectES9_bb","__ZN7WebCore12ChromeClient29supportsImmediateInvalidationEv","__ZN7WebCore6Chrome15closeWindowSoonEv","__ZN3WTF6VectorIPN7WebCore20PopupOpeningObserverELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore6Chrome12canTakeFocusENS_14FocusDirectionE","__ZNK7WebCore6Chrome13setWindowRectERKNS_9FloatRectE","__ZN7WebCore12ChromeClient20populateVisitedLinksEv","__ZN7WebCore6Chrome23enableSuddenTerminationEv","__ZNK7WebCore6Chrome21focusedElementChangedEPNS_7ElementE","__ZNK7WebCore6Chrome16rootViewToScreenERKNS_7IntRectE","__ZN7WebCore12ChromeClient17didAddFooterLayerEPNS_13GraphicsLayerE","__ZNK7WebCore12ChromeClient38shouldUnavailablePluginMessageBeButtonENS_20RenderEmbeddedObject26PluginUnavailabilityReasonE","__ZN7WebCore12ChromeClient34requiresFullscreenForVideoPlaybackEv","__ZNK7WebCore6Chrome15toolbarsVisibleEv","__ZN7WebCore12ChromeClient39shouldReplaceWithGeneratedFileForUploadERKN3WTF6StringERS2_","__ZN7WebCore12ChromeClient19customHighlightRectEPNS_4NodeERKN3WTF12AtomicStringERKNS_9FloatRectE","__ZNK7WebCore6Chrome8runModalEv","__ZN7WebCore12ChromeClient23annotatedRegionsChangedEv","_memset","__ZNK7WebCore6Chrome18platformPageClientEv","__ZNK7WebCore6Chrome17scrollbarsVisibleEv","__ZNK7WebCore6Chrome15createPopupMenuEPNS_15PopupMenuClientE","__ZN7WebCore6Chrome20runJavaScriptConfirmEPNS_5FrameERKN3WTF6StringE","__ZN7WebCore6Chrome17scheduleAnimationEv","__ZNK7WebCore12ChromeClient31visibleRectForTiledBackingStoreEv","__ZN7WebCore12ChromeClient29postAccessibilityNotificationEPNS_19AccessibilityObjectENS_13AXObjectCache14AXNotificationE","__ZN7WebCore6Chrome24delegatedScrollRequestedERKNS_8IntPointE","__ZNK7WebCore12ChromeClient19isEmptyChromeClientEv","__ZN7WebCore6Chrome28registerPopupOpeningObserverEPNS_20PopupOpeningObserverE","__ZN7WebCore12ChromeClient22enterFullscreenForNodeEPNS_4NodeE","__ZN7WebCore12ChromeClient23generateReplacementFileERKN3WTF6StringE","__ZNK7WebCore12ChromeClient28allowsAcceleratedCompositingEv","__ZN7WebCore12ChromeClient34recommendedScrollbarStyleDidChangeEi","__ZNK7WebCore6Chrome9takeFocusENS_14FocusDirectionE","__ZNK7WebCore6Chrome35dispatchViewportPropertiesDidChangeERKNS_17ViewportArgumentsE","__ZN7WebCore6Chrome5printEPNS_5FrameE","__ZN7WebCore6Chrome10setToolTipERKNS_13HitTestResultE","__ZNK7WebCore6Chrome14canRunModalNowEv","__ZN7WebCore12ChromeClient25shouldNotifyOnFormChangesEv","__ZNK7WebCore6Chrome19contentsSizeChangedEPNS_5FrameERKNS_7IntSizeE","__ZN7WebCore12ChromeClient25supportsFullscreenForNodeEPKNS_4NodeE","__ZN7WebCore6Chrome21windowScreenDidChangeEj","__ZN7WebCore6Chrome23mouseDidMoveOverElementERKNS_13HitTestResultEj","__ZNK7WebCore6Chrome19setStatusbarVisibleEb","__ZN7WebCore6Chrome18createColorChooserEPNS_18ColorChooserClientERKNS_5ColorE","__ZN7WebCore6Chrome30setCursorHiddenUntilMouseMovesEb","__ZNK7WebCore6Chrome20setScrollbarsVisibleEb","__ZN7WebCore6Chrome18runJavaScriptAlertEPNS_5FrameERKN3WTF6StringE","__ZNK7WebCore6Chrome7unfocusEv","__ZNK7WebCore6Chrome8pageRectEv","__ZN7WebCore6Chrome19runJavaScriptPromptEPNS_5FrameERKN3WTF6StringES6_RS4_","__ZN7WebCore12ChromeClient21exitFullscreenForNodeEPNS_4NodeE","__ZNK7WebCore12ChromeClient21plugInStartLabelTitleERKN3WTF6StringE","__ZN7WebCore12ChromeClient24decrementActivePageCountEv","__ZNK7WebCore6Chrome18setToolbarsVisibleEb","__ZN7WebCore6Chrome31invalidateContentsForSlowScrollERKNS_7IntRectEb","__ZNK7WebCore6Chrome23scrollbarsModeDidChangeEv","__ZN7WebCore12ChromeClient19addMessageToConsoleENS_13MessageSourceENS_11MessageTypeENS_12MessageLevelERKN3WTF6StringEjjS7_","__ZN7WebCore12ChromeClient24disableSuddenTerminationEv","__ZNK7WebCore12ChromeClient18scrollRectIntoViewERKNS_7IntRectE","__ZN7WebCore6Chrome30unregisterPopupOpeningObserverEPNS_20PopupOpeningObserverE","__ZN7WebCore6ChromeD0Ev","__ZNK7WebCore6Chrome5focusEv","__ZNK7WebCore6Chrome4showEv","_memmove","__ZNK7WebCore6Chrome18scrollRectIntoViewERKNS_7IntRectE","__ZNK7WebCore12ChromeClient22layerTreeStateIsFrozenEv","__ZN7WebCore6Chrome9setCursorERKNS_6CursorE","__ZNK7WebCore6Chrome9displayIDEv","__ZNK7WebCore6Chrome17windowResizerRectEv","__ZN7WebCore6Chrome24disableSuddenTerminationEv","__ZN7WebCore12ChromeClient28supportsFullScreenForElementEPKNS_7ElementEb"]

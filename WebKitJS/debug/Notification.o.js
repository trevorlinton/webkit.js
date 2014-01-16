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
var __ZN7WebCore12NotificationC1Ev;
var __ZN7WebCore12NotificationC1ERKN3WTF6StringES4_S4_PNS_22ScriptExecutionContextERiNS1_10PassRefPtrINS_18NotificationCenterEEE;
var __ZN7WebCore12NotificationC1ERNS_22ScriptExecutionContextERKN3WTF6StringE;
var __ZN7WebCore12NotificationD1Ev;
/* memory initializer */ allocate([100,101,102,97,117,108,116,0,100,101,110,105,101,100,0,0,103,114,97,110,116,101,100,0,105,99,111,110,0,0,0,0,100,105,114,0,0,0,0,0,108,97,110,103,0,0,0,0,116,97,103,0,0,0,0,0,98,111,100,121,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
;
;
;
;
;
var Math_min = Math.min;
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
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
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
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
  var __ZTVN7WebCore25EventTargetWithInlineDataE=(H_BASE+104)|0;
  var __ZTVN7WebCore5TimerINS_12NotificationEEE=(H_BASE+72)|0;
  var __ZTVN7WebCore12NotificationE=(H_BASE+184)|0;
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
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore12Notification6createERNS_22ScriptExecutionContextERKN3WTF6StringERKNS_10DictionaryE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = __ZN3WTF10fastMallocEj(132) | 0;
 i9 = i8;
 __ZN7WebCore12NotificationC2ERNS_22ScriptExecutionContextERKN3WTF6StringE(i9, i2, i3);
 i3 = i6 | 0;
 HEAP32[i3 >> 2] = 0;
 i10 = i4 | 0;
 i11 = i4 | 0;
 do {
  if ((HEAP32[i11 >> 2] | 0) != 0) {
   i12 = i4 + 4 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     if ((HEAP32[i13 + 4 >> 2] | 0) == -6) {
      break;
     }
     if (!(__ZNK7WebCore12JSDictionary3getIN3WTF6StringEEEbPKcRT_(i10, H_BASE + 64 | 0, i6) | 0)) {
      break;
     }
     i14 = HEAP32[i3 >> 2] | 0;
     if ((i14 | 0) != 0) {
      i15 = i14 | 0;
      HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
     }
     i15 = i8 + 104 | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = i14;
     if ((i16 | 0) == 0) {
      break;
     }
     i14 = i16 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i14 >> 2] = i15;
      break;
     }
    }
   } while (0);
   if ((HEAP32[i11 >> 2] | 0) == 0) {
    break;
   }
   i13 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     if ((HEAP32[i13 + 4 >> 2] | 0) == -6) {
      break;
     }
     if (!(__ZNK7WebCore12JSDictionary3getIN3WTF6StringEEEbPKcRT_(i10, H_BASE + 56 | 0, i6) | 0)) {
      break;
     }
     i15 = HEAP32[i3 >> 2] | 0;
     if ((i15 | 0) != 0) {
      i14 = i15 | 0;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
     }
     i14 = i8 + 116 | 0;
     i16 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i15;
     if ((i16 | 0) == 0) {
      break;
     }
     i15 = i16 | 0;
     i14 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i15 >> 2] = i14;
      break;
     }
    }
   } while (0);
   if ((HEAP32[i11 >> 2] | 0) == 0) {
    break;
   }
   i13 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     if ((HEAP32[i13 + 4 >> 2] | 0) == -6) {
      break;
     }
     if (!(__ZNK7WebCore12JSDictionary3getIN3WTF6StringEEEbPKcRT_(i10, H_BASE + 48 | 0, i6) | 0)) {
      break;
     }
     i14 = HEAP32[i3 >> 2] | 0;
     if ((i14 | 0) != 0) {
      i15 = i14 | 0;
      HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
     }
     i15 = i8 + 112 | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = i14;
     if ((i16 | 0) == 0) {
      break;
     }
     i14 = i16 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i14 >> 2] = i15;
      break;
     }
    }
   } while (0);
   if ((HEAP32[i11 >> 2] | 0) == 0) {
    break;
   }
   i13 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     if ((HEAP32[i13 + 4 >> 2] | 0) == -6) {
      break;
     }
     if (!(__ZNK7WebCore12JSDictionary3getIN3WTF6StringEEEbPKcRT_(i10, H_BASE + 40 | 0, i6) | 0)) {
      break;
     }
     i15 = HEAP32[i3 >> 2] | 0;
     if ((i15 | 0) != 0) {
      i14 = i15 | 0;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
     }
     i14 = i8 + 108 | 0;
     i16 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i15;
     if ((i16 | 0) == 0) {
      break;
     }
     i15 = i16 | 0;
     i14 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i15 >> 2] = i14;
      break;
     }
    }
   } while (0);
   if ((HEAP32[i11 >> 2] | 0) == 0) {
    break;
   }
   i13 = HEAP32[i12 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   if ((HEAP32[i13 + 4 >> 2] | 0) == -6) {
    break;
   }
   if (!(__ZNK7WebCore12JSDictionary3getIN3WTF6StringEEEbPKcRT_(i10, H_BASE + 32 | 0, i6) | 0)) {
    break;
   }
   i13 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i13 | 0) == 0) {
     i17 = 47;
    } else {
     if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
      i17 = 47;
      break;
     }
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] & 3](i7, i2, i6);
     i18 = i7 | 0;
    }
   } while (0);
   if ((i17 | 0) == 47) {
    i13 = i7 | 0;
    HEAP32[i13 >> 2] = 0;
    __ZN7WebCore3URL10invalidateEv(i7);
    i18 = i13;
   }
   i13 = HEAP32[i18 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
    i19 = i13;
   } else {
    i12 = i7 + 4 | 0;
    if ((HEAP8[i12] & 1) == 0) {
     i20 = i13;
    } else {
     i14 = i13 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
     i14 = i8 + 52 | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i13;
     do {
      if ((i15 | 0) != 0) {
       i13 = i15 | 0;
       i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
       if ((i14 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i15);
        break;
       } else {
        HEAP32[i13 >> 2] = i14;
        break;
       }
      }
     } while (0);
     i15 = i8 + 56 | 0;
     i14 = HEAP8[i15] & -2 | HEAP8[i12] & 1;
     HEAP8[i15] = i14;
     HEAP8[i15] = i14 & -3 | HEAP8[i12] & 2;
     HEAP32[i8 + 60 >> 2] = HEAP32[i7 + 8 >> 2];
     HEAP32[i8 + 64 >> 2] = HEAP32[i7 + 12 >> 2];
     HEAP32[i8 + 68 >> 2] = HEAP32[i7 + 16 >> 2];
     HEAP32[i8 + 72 >> 2] = HEAP32[i7 + 20 >> 2];
     HEAP32[i8 + 76 >> 2] = HEAP32[i7 + 24 >> 2];
     HEAP32[i8 + 80 >> 2] = HEAP32[i7 + 28 >> 2];
     HEAP32[i8 + 84 >> 2] = HEAP32[i7 + 32 >> 2];
     HEAP32[i8 + 88 >> 2] = HEAP32[i7 + 36 >> 2];
     HEAP32[i8 + 92 >> 2] = HEAP32[i7 + 40 >> 2];
     HEAP32[i8 + 96 >> 2] = HEAP32[i7 + 44 >> 2];
     i20 = HEAP32[i18 >> 2] | 0;
    }
    if ((i20 | 0) == 0) {
     break;
    } else {
     i19 = i20;
    }
   }
   i14 = i19 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15ActiveDOMObject15suspendIfNeededEv(i8);
 HEAP32[i1 >> 2] = i9;
 i9 = HEAP32[i3 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i3 = i9 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i9);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore12NotificationC2ERKN3WTF6StringES4_S4_PNS_22ScriptExecutionContextERiNS1_10PassRefPtrINS_18NotificationCenterEEE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i9 = i8 | 0;
 HEAP32[i1 + 12 >> 2] = 1;
 __ZN7WebCore15ActiveDOMObjectC2EPNS_22ScriptExecutionContextE(i1 | 0, i5);
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = H_BASE + 112;
 __ZN7WebCore15EventTargetDataC1Ev(i1 + 20 | 0);
 HEAP32[i1 >> 2] = H_BASE + 192;
 HEAP32[i5 >> 2] = H_BASE + 248;
 i5 = i1 + 52 | 0;
 i10 = i5 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i5);
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 100 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 104 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i7 | 0;
 _memset(i1 + 108 | 0, 0, 16) | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 124 >> 2] = i7;
 HEAP32[i1 + 128 >> 2] = 0;
 if ((__ZN7WebCore18NotificationCenter15checkPermissionEv(i7) | 0) != 0) {
  HEAP32[i6 >> 2] = 18;
  STACKTOP = i8;
  return;
 }
 i7 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i11 = 9;
  } else {
   if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
    i11 = 9;
    break;
   }
   i3 = HEAP32[i1 + 4 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 28 >> 2] & 3](i9, i3, i4);
   i12 = 1;
   i13 = 0;
   i14 = i9 | 0;
  }
 } while (0);
 if ((i11 | 0) == 9) {
  i11 = i9 | 0;
  HEAP32[i11 >> 2] = 0;
  __ZN7WebCore3URL10invalidateEv(i9);
  i12 = 0;
  i13 = 1;
  i14 = i11;
 }
 i11 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 i4 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i11;
 do {
  if ((i4 | 0) != 0) {
   i11 = i4 | 0;
   i7 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i11 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i4 = HEAP8[i9 + 4 | 0] | 0;
 i7 = i1 + 56 | 0;
 HEAP8[i7] = HEAP8[i7] & -4 | i4 & 1 | i4 & 2;
 HEAP32[i1 + 60 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i1 + 64 >> 2] = HEAP32[i9 + 12 >> 2];
 HEAP32[i1 + 68 >> 2] = HEAP32[i9 + 16 >> 2];
 HEAP32[i1 + 72 >> 2] = HEAP32[i9 + 20 >> 2];
 HEAP32[i1 + 76 >> 2] = HEAP32[i9 + 24 >> 2];
 HEAP32[i1 + 80 >> 2] = HEAP32[i9 + 28 >> 2];
 HEAP32[i1 + 84 >> 2] = HEAP32[i9 + 32 >> 2];
 HEAP32[i1 + 88 >> 2] = HEAP32[i9 + 36 >> 2];
 HEAP32[i1 + 92 >> 2] = HEAP32[i9 + 40 >> 2];
 HEAP32[i1 + 96 >> 2] = HEAP32[i9 + 44 >> 2];
 do {
  if (i12) {
   i9 = HEAP32[i14 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i1 = i9 | 0;
   i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i1 >> 2] = i4;
    break;
   }
  }
 } while (0);
 do {
  if (i13) {
   i12 = HEAP32[i14 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i4 = i12 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i10 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 if ((HEAP8[i7] & 1) != 0) {
  STACKTOP = i8;
  return;
 }
 HEAP32[i6 >> 2] = 12;
 STACKTOP = i8;
 return;
}
function __ZN7WebCore12NotificationC1ERKN3WTF6StringES4_S4_PNS_22ScriptExecutionContextERiNS1_10PassRefPtrINS_18NotificationCenterEEE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i9 = i8 | 0;
 HEAP32[i1 + 12 >> 2] = 1;
 __ZN7WebCore15ActiveDOMObjectC2EPNS_22ScriptExecutionContextE(i1 | 0, i5);
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = H_BASE + 112;
 __ZN7WebCore15EventTargetDataC1Ev(i1 + 20 | 0);
 HEAP32[i1 >> 2] = H_BASE + 192;
 HEAP32[i5 >> 2] = H_BASE + 248;
 i5 = i1 + 52 | 0;
 i10 = i5 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i5);
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 100 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 104 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i7 | 0;
 _memset(i1 + 108 | 0, 0, 16) | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 124 >> 2] = i7;
 HEAP32[i1 + 128 >> 2] = 0;
 if ((__ZN7WebCore18NotificationCenter15checkPermissionEv(i7) | 0) != 0) {
  HEAP32[i6 >> 2] = 18;
  STACKTOP = i8;
  return;
 }
 i7 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i11 = 9;
  } else {
   if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
    i11 = 9;
    break;
   }
   i3 = HEAP32[i1 + 4 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 28 >> 2] & 3](i9, i3, i4);
   i12 = 1;
   i13 = 0;
   i14 = i9 | 0;
  }
 } while (0);
 if ((i11 | 0) == 9) {
  i11 = i9 | 0;
  HEAP32[i11 >> 2] = 0;
  __ZN7WebCore3URL10invalidateEv(i9);
  i12 = 0;
  i13 = 1;
  i14 = i11;
 }
 i11 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 i4 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i11;
 do {
  if ((i4 | 0) != 0) {
   i11 = i4 | 0;
   i7 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i11 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i4 = HEAP8[i9 + 4 | 0] | 0;
 i7 = i1 + 56 | 0;
 HEAP8[i7] = HEAP8[i7] & -4 | i4 & 1 | i4 & 2;
 HEAP32[i1 + 60 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i1 + 64 >> 2] = HEAP32[i9 + 12 >> 2];
 HEAP32[i1 + 68 >> 2] = HEAP32[i9 + 16 >> 2];
 HEAP32[i1 + 72 >> 2] = HEAP32[i9 + 20 >> 2];
 HEAP32[i1 + 76 >> 2] = HEAP32[i9 + 24 >> 2];
 HEAP32[i1 + 80 >> 2] = HEAP32[i9 + 28 >> 2];
 HEAP32[i1 + 84 >> 2] = HEAP32[i9 + 32 >> 2];
 HEAP32[i1 + 88 >> 2] = HEAP32[i9 + 36 >> 2];
 HEAP32[i1 + 92 >> 2] = HEAP32[i9 + 40 >> 2];
 HEAP32[i1 + 96 >> 2] = HEAP32[i9 + 44 >> 2];
 do {
  if (i12) {
   i9 = HEAP32[i14 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i1 = i9 | 0;
   i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i1 >> 2] = i4;
    break;
   }
  }
 } while (0);
 do {
  if (i13) {
   i12 = HEAP32[i14 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i4 = i12 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i10 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 if ((HEAP8[i7] & 1) != 0) {
  STACKTOP = i8;
  return;
 }
 HEAP32[i6 >> 2] = 12;
 STACKTOP = i8;
 return;
}
function __ZN7WebCore12NotificationD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 192;
 HEAP32[i1 + 16 >> 2] = H_BASE + 248;
 i2 = HEAP32[i1 + 128 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 }
 i2 = HEAP32[i1 + 124 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 12 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 12 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 63](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 116 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 108 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 104 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 100 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = H_BASE + 112;
 __ZN7WebCore15EventTargetDataD1Ev(i1 + 20 | 0);
 __ZN7WebCore11EventTargetD2Ev(i2 | 0);
 __ZN7WebCore15ActiveDOMObjectD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore12NotificationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 192;
 HEAP32[i1 + 16 >> 2] = H_BASE + 248;
 i2 = HEAP32[i1 + 128 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 }
 i2 = HEAP32[i1 + 124 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 12 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 12 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 63](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 116 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 108 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 104 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 100 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = H_BASE + 112;
 __ZN7WebCore15EventTargetDataD1Ev(i1 + 20 | 0);
 __ZN7WebCore11EventTargetD2Ev(i2 | 0);
 __ZN7WebCore15ActiveDOMObjectD2Ev(i1 | 0);
 return;
}
function __ZNK7WebCore12JSDictionary3getIN3WTF6StringEEEbPKcRT_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 HEAP32[i5 + 4 >> 2] = -6;
 HEAP32[i5 >> 2] = 0;
 i8 = __ZNK7WebCore12JSDictionary14tryGetPropertyEPKcRN3JSC7JSValueE(i1, i2, i5) | 0;
 if ((i8 | 0) == 2) {
  i9 = 2;
 } else if ((i8 | 0) == 0) {
  i10 = 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 do {
  if ((i9 | 0) == 2) {
   i2 = i6 | 0;
   HEAP32[i2 >> 2] = 0;
   i11 = i1 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   i13 = i5 | 0;
   i14 = HEAP32[i13 + 4 >> 2] | 0;
   i15 = i7 | 0;
   HEAP32[i15 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i15 + 4 >> 2] = i14;
   __ZN7WebCore12JSDictionary12convertValueEPN3JSC9ExecStateENS1_7JSValueERN3WTF6StringE(i12, i7, i6);
   i12 = (HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   do {
    if ((HEAP32[i12 >> 2] & 0 | 0) == 0 & (HEAP32[i12 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
     i11 = HEAP32[i2 >> 2] | 0;
     if ((i11 | 0) != 0) {
      i14 = i11 | 0;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
     }
     i14 = i3 | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i11;
     if ((i15 | 0) == 0) {
      i16 = 2;
      break;
     }
     i11 = i15 | 0;
     i14 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      i16 = 2;
      break;
     } else {
      HEAP32[i11 >> 2] = i14;
      i16 = 2;
      break;
     }
    } else {
     i16 = 1;
    }
   } while (0);
   i12 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i14 = i12 | 0;
     i11 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i14 >> 2] = i11;
      break;
     }
    }
   } while (0);
   if ((i16 | 0) == 2) {
    break;
   } else {
    i10 = 0;
   }
   STACKTOP = i4;
   return i10 | 0;
  }
 } while (0);
 i10 = (i8 | 0) == 2;
 STACKTOP = i4;
 return i10 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vi + 24;
}
function __ZN7WebCore12Notification4showEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 120 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 + 124 | 0;
 if ((HEAP32[(HEAP32[i5 >> 2] | 0) + 16 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = i7 - 156 + 68 | 0;
 }
 if ((__ZNK7WebCore8Document4pageEv(i8) | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = 0;
 } else {
  i9 = i8 - 156 + 68 | 0;
 }
 i8 = HEAP32[(__ZN7WebCore22NotificationController4fromEPNS_4PageE(__ZNK7WebCore8Document4pageEv(i9) | 0) | 0) + 4 >> 2] | 0;
 if ((FUNCTION_TABLE_iii[HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] & 3](i8, HEAP32[i6 >> 2] | 0) | 0) == 0) {
  i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 16 >> 2] | 0;
  if (!(FUNCTION_TABLE_iii[HEAP32[HEAP32[i6 >> 2] >> 2] & 3](i6, i1) | 0)) {
   STACKTOP = i2;
   return;
  }
  HEAP32[i4 >> 2] = 1;
  i4 = i1 + 12 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  i4 = i1 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  STACKTOP = i2;
  return;
 }
 i4 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 148 | 0;
 i6 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i6, i4, 0, 0);
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i6;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 + 16 | 0, i3) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 + 8 | 0;
 i3 = i4 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i4 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12NotificationC2ERNS_22ScriptExecutionContextERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 + 12 >> 2] = 1;
 __ZN7WebCore15ActiveDOMObjectC2EPNS_22ScriptExecutionContextE(i1 | 0, i2);
 i4 = i1 + 16 | 0;
 HEAP32[i4 >> 2] = H_BASE + 112;
 __ZN7WebCore15EventTargetDataC1Ev(i1 + 20 | 0);
 HEAP32[i1 >> 2] = H_BASE + 192;
 HEAP32[i4 >> 2] = H_BASE + 248;
 i4 = i1 + 52 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i4);
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 100 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 124 | 0;
 _memset(i1 + 104 | 0, 0, 24) | 0;
 i4 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore9TimerBaseC2Ev(i4);
 HEAP32[i4 >> 2] = H_BASE + 80;
 HEAP32[i4 + 44 >> 2] = i1;
 i5 = i4 + 48 | 0;
 HEAP32[i5 >> 2] = F_BASE_vii + 2;
 HEAP32[i5 + 4 >> 2] = 0;
 i5 = i1 + 128 | 0;
 HEAP32[i5 >> 2] = i4;
 i4 = __ZN7WebCore22DOMWindowNotifications19webkitNotificationsEPNS_9DOMWindowE(HEAP32[i2 - 156 + 404 >> 2] | 0) | 0;
 if ((i4 | 0) != 0) {
  i2 = i4 + 12 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 if ((i2 | 0) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6;
  __ZN7WebCore9TimerBase5startEdd(i7, +0, +0);
  return;
 }
 i4 = i2 + 12 | 0;
 i2 = i4 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6;
  __ZN7WebCore9TimerBase5startEdd(i7, +0, +0);
  return;
 }
 i3 = i4 - 12 | 0;
 if ((i3 | 0) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6;
  __ZN7WebCore9TimerBase5startEdd(i7, +0, +0);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 63](i3);
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6;
 __ZN7WebCore9TimerBase5startEdd(i7, +0, +0);
 return;
}
function __ZN7WebCore12NotificationC1ERNS_22ScriptExecutionContextERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 + 12 >> 2] = 1;
 __ZN7WebCore15ActiveDOMObjectC2EPNS_22ScriptExecutionContextE(i1 | 0, i2);
 i4 = i1 + 16 | 0;
 HEAP32[i4 >> 2] = H_BASE + 112;
 __ZN7WebCore15EventTargetDataC1Ev(i1 + 20 | 0);
 HEAP32[i1 >> 2] = H_BASE + 192;
 HEAP32[i4 >> 2] = H_BASE + 248;
 i4 = i1 + 52 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i4);
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 100 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 124 | 0;
 _memset(i1 + 104 | 0, 0, 24) | 0;
 i4 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore9TimerBaseC2Ev(i4);
 HEAP32[i4 >> 2] = H_BASE + 80;
 HEAP32[i4 + 44 >> 2] = i1;
 i5 = i4 + 48 | 0;
 HEAP32[i5 >> 2] = F_BASE_vii + 2;
 HEAP32[i5 + 4 >> 2] = 0;
 i5 = i1 + 128 | 0;
 HEAP32[i5 >> 2] = i4;
 i4 = __ZN7WebCore22DOMWindowNotifications19webkitNotificationsEPNS_9DOMWindowE(HEAP32[i2 - 156 + 404 >> 2] | 0) | 0;
 if ((i4 | 0) != 0) {
  i2 = i4 + 12 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 if ((i2 | 0) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6;
  __ZN7WebCore9TimerBase5startEdd(i7, +0, +0);
  return;
 }
 i4 = i2 + 12 | 0;
 i2 = i4 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6;
  __ZN7WebCore9TimerBase5startEdd(i7, +0, +0);
  return;
 }
 i3 = i4 - 12 | 0;
 if ((i3 | 0) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6;
  __ZN7WebCore9TimerBase5startEdd(i7, +0, +0);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 63](i3);
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6;
 __ZN7WebCore9TimerBase5startEdd(i7, +0, +0);
 return;
}
function __ZN7WebCore22NotificationController4fromEPNS_4PageE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = __ZN7WebCore22NotificationController14supplementNameEv() | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i1 = i2;
 i6 = i1 + ~(i1 << 15) | 0;
 i1 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i1 >>> 6 ^ i1;
 i1 = i6 + ~(i6 << 11) | 0;
 i6 = i1 >>> 16 ^ i1;
 if ((i5 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = i4 & i6;
 i7 = i5 + (i1 << 3) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L7 : do {
  if ((i8 | 0) == (i2 | 0)) {
   i9 = i7;
  } else {
   i10 = (i6 >>> 23) + ~i6 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = 0;
   i12 = i1;
   i13 = i8;
   while (1) {
    if ((i13 | 0) == 0) {
     i3 = 0;
     break;
    }
    i14 = (i11 | 0) == 0 ? i10 : i11;
    i15 = i14 + i12 & i4;
    i16 = i5 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i2 | 0)) {
     i9 = i16;
     break L7;
    } else {
     i11 = i14;
     i12 = i15;
     i13 = i17;
    }
   }
   return i3 | 0;
  }
 } while (0);
 if ((i9 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i9 + 4 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore12Notification18dispatchCloseEventEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 60 | 0;
 i5 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i5, i4, 0, 0);
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i5;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 + 16 | 0, i3) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 8 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 8 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 i3 = i1 + 120 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 2) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = 2;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
 i3 = i1 + 12 | 0;
 i1 = i3 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i2;
  return;
 }
 i6 = i3 - 12 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 63](i6);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12Notification6createERKN3WTF6StringES4_S4_PNS_22ScriptExecutionContextERiNS1_10PassRefPtrINS_18NotificationCenterEEE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8 | 0;
 i10 = __ZN3WTF10fastMallocEj(132) | 0;
 i11 = i10;
 i12 = i9 | 0;
 i13 = i7 | 0;
 i7 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i12 >> 2] = i7;
 __ZN7WebCore12NotificationC2ERKN3WTF6StringES4_S4_PNS_22ScriptExecutionContextERiNS1_10PassRefPtrINS_18NotificationCenterEEE(i11, i2, i3, i4, i5, i6, i9);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 + 12 | 0;
   i6 = i12 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i6 >> 2] = i5;
    break;
   }
   i5 = i12 - 12 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 63](i5);
  }
 } while (0);
 __ZN7WebCore15ActiveDOMObject15suspendIfNeededEv(i10);
 HEAP32[i1 >> 2] = i11;
 STACKTOP = i8;
 return;
}
function __ZN7WebCore12Notification17requestPermissionEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_30NotificationPermissionCallbackEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
 } else {
  i5 = i1 - 156 + 68 | 0;
 }
 i6 = HEAP32[(__ZN7WebCore22NotificationController4fromEPNS_4PageE(__ZNK7WebCore8Document4pageEv(i5) | 0) | 0) + 4 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] | 0;
 i7 = i4 | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i7 >> 2] = i2;
 FUNCTION_TABLE_viii[i5 & 3](i6, i1, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i4 + 4 | 0;
 i4 = i7 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i7 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12Notification10permissionEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 if ((i2 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = i2 - 156 + 68 | 0;
 }
 i8 = HEAP32[(__ZN7WebCore22NotificationController4fromEPNS_4PageE(__ZNK7WebCore8Document4pageEv(i7) | 0) | 0) + 4 >> 2] | 0;
 i7 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] & 3](i8, i2) | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i4 >> 2] = H_BASE + 24;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1, i4);
  STACKTOP = i3;
  return;
 } else if ((i7 | 0) == 2) {
  HEAP32[i5 >> 2] = H_BASE + 16;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1, i5);
  STACKTOP = i3;
  return;
 } else if ((i7 | 0) == 1) {
  HEAP32[i6 >> 2] = H_BASE + 8;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1, i6);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore12Notification18dispatchClickEventEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 __ZN7WebCore27WindowFocusAllowedIndicatorC1Ev(i3);
 i5 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 56 | 0;
 i6 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i6, i5, 0, 0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i6;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 + 16 | 0, i4) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 8 | 0;
   i1 = i5 | 0;
   i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i1 >> 2] = i6;
    break;
   }
   i6 = i5 - 8 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 __ZN7WebCore27WindowFocusAllowedIndicatorD1Ev(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12Notification18dispatchErrorEventEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 148 | 0;
 i5 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i5, i4, 0, 0);
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i5;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 + 16 | 0, i3) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 + 8 | 0;
 i3 = i4 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i4 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12Notification17dispatchShowEventEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 792 | 0;
 i5 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i5, i4, 0, 0);
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i5;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 + 16 | 0, i3) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 + 8 | 0;
 i3 = i4 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i4 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12Notification16permissionStringENS_18NotificationClient10PermissionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 if ((i2 | 0) == 2) {
  HEAP32[i5 >> 2] = H_BASE + 16;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1, i5);
  STACKTOP = i3;
  return;
 } else if ((i2 | 0) == 1) {
  HEAP32[i6 >> 2] = H_BASE + 8;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1, i6);
  STACKTOP = i3;
  return;
 } else if ((i2 | 0) == 0) {
  HEAP32[i4 >> 2] = H_BASE + 24;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1, i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
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
function __ZN7WebCore12NotificationC2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 + 12 >> 2] = 1;
 __ZN7WebCore15ActiveDOMObjectC2EPNS_22ScriptExecutionContextE(i1 | 0, 0);
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = H_BASE + 112;
 __ZN7WebCore15EventTargetDataC1Ev(i1 + 20 | 0);
 HEAP32[i1 >> 2] = H_BASE + 192;
 HEAP32[i2 >> 2] = H_BASE + 248;
 i2 = i1 + 52 | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i2);
 HEAP32[i1 + 124 >> 2] = 0;
 HEAP32[i1 + 128 >> 2] = 0;
 _memset(i1 + 100 | 0, 0, 20) | 0;
 return;
}
function __ZN7WebCore12NotificationC1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 + 12 >> 2] = 1;
 __ZN7WebCore15ActiveDOMObjectC2EPNS_22ScriptExecutionContextE(i1 | 0, 0);
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = H_BASE + 112;
 __ZN7WebCore15EventTargetDataC1Ev(i1 + 20 | 0);
 HEAP32[i1 >> 2] = H_BASE + 192;
 HEAP32[i2 >> 2] = H_BASE + 248;
 i2 = i1 + 52 | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i2);
 HEAP32[i1 + 124 >> 2] = 0;
 HEAP32[i1 + 128 >> 2] = 0;
 _memset(i1 + 100 | 0, 0, 20) | 0;
 return;
}
function __ZN7WebCore12Notification8finalizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 120 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 2) {
  return;
 }
 HEAP32[i2 >> 2] = 2;
 i2 = i1 + 8 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - 1;
 i2 = i1 + 12 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 12 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 63](i3);
 return;
}
function __ZN7WebCore5TimerINS_12NotificationEE5firedEv(i1) {
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
function __ZN7WebCore12Notification16derefEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 12 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 12 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 63](i3);
 return;
}
function __ZThn16_N7WebCore12Notification16derefEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 132 + 116 | 0;
 i1 = i2 + 12 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i2);
 return;
}
function iiiii___ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore12Notification16contextDestroyedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore26ContextDestructionObserver16contextDestroyedEv(i1 | 0);
 i2 = HEAP32[(HEAP32[i1 + 124 >> 2] | 0) + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 7](i2, i1);
 return;
}
function iiiii___ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore12Notification5closeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 120 >> 2] | 0) != 1) {
  return;
 }
 i2 = HEAP32[(HEAP32[i1 + 124 >> 2] | 0) + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 7](i2, i1);
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
function iii___ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i2 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore25EventTargetWithInlineDataD0Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 112;
 __ZN7WebCore15EventTargetDataD1Ev(i1 + 4 | 0);
 __ZN7WebCore11EventTargetD2Ev(i1 | 0);
 __ZdlPv(i1);
 return;
}
function vii___ZN7WebCore15ActiveDOMObject7suspendENS0_19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore15ActiveDOMObject7suspendENS0_19ReasonForSuspensionE(i1 | 0, i2 | 0);
}
function __ZN7WebCore25EventTargetWithInlineDataD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 112;
 __ZN7WebCore15EventTargetDataD1Ev(i1 + 4 | 0);
 __ZN7WebCore11EventTargetD2Ev(i1 | 0);
 return;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZThn16_N7WebCore12NotificationD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 132 + 116 | 0;
 __ZN7WebCore12NotificationD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZThn16_N7WebCore12Notification14refEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 132 + 128 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function ii___ZNK7WebCore15ActiveDOMObject18hasPendingActivityEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore15ActiveDOMObject18hasPendingActivityEv(i1 | 0) | 0;
}
function __ZN7WebCore12Notification14refEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 12 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget23removeAllEventListenersEv(i1 | 0);
}
function __ZN7WebCore12Notification14taskTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12Notification4showEv(i1);
 return;
}
function ii___ZNK7WebCore15ActiveDOMObject10canSuspendEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore15ActiveDOMObject10canSuspendEv(i1 | 0) | 0;
}
function b8(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(8);
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore5TimerINS_12NotificationEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget11toDOMWindowEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore12NotificationD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12NotificationD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function ii___ZN7WebCore11EventTarget6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget6toNodeEv(i1 | 0) | 0;
}
function __ZThn16_NK7WebCore12Notification22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 132 + 120 >> 2] | 0;
}
function vi___ZN7WebCore15ActiveDOMObject6resumeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15ActiveDOMObject6resumeEv(i1 | 0);
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
function __ZThn16_N7WebCore12NotificationD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12NotificationD2Ev(i1 - 132 + 116 | 0);
 return;
}
function vi___ZN7WebCore15ActiveDOMObject4stopEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15ActiveDOMObject4stopEv(i1 | 0);
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
function __ZNK7WebCore12Notification22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 4 >> 2] | 0;
}
function __ZN7WebCore5TimerINS_12NotificationEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function __ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv(i1) {
 i1 = i1 | 0;
 return i1 + 4 | 0;
}
function b0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(0);
 return 0;
}
function __ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv(i1) {
 i1 = i1 | 0;
 return i1 + 4 | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function __ZThn16_NK7WebCore12Notification20eventTargetInterfaceEv(i1) {
 i1 = i1 | 0;
 return 15;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZNK7WebCore12Notification20eventTargetInterfaceEv(i1) {
 i1 = i1 | 0;
 return 15;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function b1(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(1);
 return +0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiii = [b0,b0,iiiii___ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b0,iiiii___ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_did = [b1,b1,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore12NotificationC2Ev,b2,__ZN7WebCore12Notification14refEventTargetEv,b2,__ZN7WebCore12Notification16derefEventTargetEv,b2,vi___ZN7WebCore15ActiveDOMObject4stopEv__wrapper,b2,__ZN7WebCore25EventTargetWithInlineDataD0Ev,b2,__ZThn16_N7WebCore12NotificationD0Ev,b2,vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper,b2,__ZThn16_N7WebCore12Notification14refEventTargetEv,b2,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b2,vi___ZN7WebCore15ActiveDOMObject6resumeEv__wrapper,b2,__ZN7WebCore12Notification16contextDestroyedEv,b2,__ZThn16_N7WebCore12Notification16derefEventTargetEv,b2,__ZThn16_N7WebCore12NotificationD1Ev,b2,__ZN7WebCore12NotificationD2Ev
  ,b2,__ZN7WebCore25EventTargetWithInlineDataD1Ev,b2,__ZN7WebCore12NotificationD0Ev,b2,__ZN7WebCore5TimerINS_12NotificationEE5firedEv,b2,__ZN7WebCore5TimerINS_12NotificationEED0Ev,b2,__ZN7WebCore5TimerINS_12NotificationEED1Ev,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore12Notification14taskTimerFiredEPNS_5TimerIS0_EE,b3,vii___ZN7WebCore15ActiveDOMObject7suspendENS0_19ReasonForSuspensionE__wrapper,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,ii___ZNK7WebCore15ActiveDOMObject10canSuspendEv__wrapper,b4,__ZNK7WebCore12Notification22scriptExecutionContextEv,b4,__ZNK7WebCore12Notification20eventTargetInterfaceEv,b4,ii___ZN7WebCore11EventTarget6toNodeEv__wrapper,b4,ii___ZNK7WebCore15ActiveDOMObject18hasPendingActivityEv__wrapper,b4,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b4,__ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv,b4,__ZThn16_NK7WebCore12Notification22scriptExecutionContextEv,b4,__ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv,b4,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b4,__ZThn16_NK7WebCore12Notification20eventTargetInterfaceEv,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZN7WebCore12NotificationC2ERNS_22ScriptExecutionContextERKN3WTF6StringE,b5];
  var FUNCTION_TABLE_v = [b6,b6,v____cxa_pure_virtual__wrapper,b6];
  var FUNCTION_TABLE_iii = [b7,b7,iii___ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b7];
  var FUNCTION_TABLE_viiiiiii = [b8,b8,__ZN7WebCore12NotificationC2ERKN3WTF6StringES4_S4_PNS_22ScriptExecutionContextERiNS1_10PassRefPtrINS_18NotificationCenterEEE,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiiiiii: dynCall_viiiiiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiiiiii": invoke_viiiiiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore12Notification6createERKN3WTF6StringES4_S4_PNS_22ScriptExecutionContextERiNS1_10PassRefPtrINS_18NotificationCenterEEE","_strlen","__ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv","__ZN7WebCore12NotificationC2Ev","__ZN7WebCore12Notification18dispatchCloseEventEv","__ZNK7WebCore12JSDictionary3getIN3WTF6StringEEEbPKcRT_","__ZN7WebCore12Notification14refEventTargetEv","__ZN7WebCore12Notification17requestPermissionEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_30NotificationPermissionCallbackEEE","__ZN7WebCore12Notification16derefEventTargetEv","__ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv","__ZN7WebCore25EventTargetWithInlineDataD0Ev","__ZThn16_N7WebCore12NotificationD0Ev","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN7WebCore12Notification18dispatchErrorEventEv","_memset","__ZN7WebCore22NotificationController4fromEPNS_4PageE","__ZNK7WebCore12Notification20eventTargetInterfaceEv","__ZN7WebCore12Notification18dispatchClickEventEv","__ZNK7WebCore12Notification22scriptExecutionContextEv","_memcpy","__ZThn16_N7WebCore12Notification14refEventTargetEv","__ZN7WebCore12NotificationC2ERNS_22ScriptExecutionContextERKN3WTF6StringE","__ZN7WebCore12Notification16permissionStringENS_18NotificationClient10PermissionE","__ZN7WebCore12Notification5closeEv","__ZN7WebCore12Notification17dispatchShowEventEv","__ZThn16_NK7WebCore12Notification22scriptExecutionContextEv","__ZN7WebCore12Notification16contextDestroyedEv","__ZN7WebCore12Notification4showEv","__ZThn16_N7WebCore12Notification16derefEventTargetEv","__ZThn16_N7WebCore12NotificationD1Ev","__ZN7WebCore12NotificationD2Ev","__ZN7WebCore12Notification8finalizeEv","__ZN7WebCore12NotificationC2ERKN3WTF6StringES4_S4_PNS_22ScriptExecutionContextERiNS1_10PassRefPtrINS_18NotificationCenterEEE","__ZN7WebCore12NotificationD0Ev","__ZN7WebCore5TimerINS_12NotificationEE5firedEv","__ZN7WebCore12Notification10permissionEPNS_22ScriptExecutionContextE","__ZN7WebCore12Notification14taskTimerFiredEPNS_5TimerIS0_EE","__ZN7WebCore25EventTargetWithInlineDataD1Ev","__ZN7WebCore12Notification6createERNS_22ScriptExecutionContextERKN3WTF6StringERKNS_10DictionaryE","__ZN7WebCore5TimerINS_12NotificationEED0Ev","__ZN7WebCore5TimerINS_12NotificationEED1Ev","__ZThn16_NK7WebCore12Notification20eventTargetInterfaceEv"]

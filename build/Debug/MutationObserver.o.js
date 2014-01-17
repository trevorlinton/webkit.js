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
H_BASE = parentModule["_malloc"](216 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 216;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore16MutationObserverC1EN3WTF10PassRefPtrINS_16MutationCallbackEEE;
var __ZN7WebCore16MutationObserverD1Ev;
/* memory initializer */ allocate([97,116,116,114,105,98,117,116,101,70,105,108,116,101,114,0,99,104,97,114,97,99,116,101,114,68,97,116,97,79,108,100,86,97,108,117,101,0,0,0,97,116,116,114,105,98,117,116,101,79,108,100,86,97,108,117,101,0,0,0,0,0,0,0,115,117,98,116,114,101,101,0,99,104,97,114,97,99,116,101,114,68,97,116,97,0,0,0,97,116,116,114,105,98,117,116,101,115,0,0,0,0,0,0,99,104,105,108,100,76,105,115,116,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function ___ZNSt3__16__sortIRZN7WebCore16MutationObserver19deliverAllMutationsEvE3$_0PN3WTF6RefPtrIS2_EEEEvT0_S9_T__(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0;
 i3 = i1;
 i1 = i2;
 L1 : while (1) {
  i2 = i1;
  i4 = i1 - 4 | 0;
  i5 = i4 | 0;
  i6 = i3;
  L3 : while (1) {
   i7 = i6;
   i8 = i2 - i7 | 0;
   i9 = i8 >> 2;
   switch (i9 | 0) {
   case 4:
    {
     i10 = 14;
     break L1;
     break;
    }
   case 5:
    {
     i10 = 15;
     break L1;
     break;
    }
   case 2:
    {
     i10 = 4;
     break L1;
     break;
    }
   case 3:
    {
     i10 = 6;
     break L1;
     break;
    }
   case 0:
   case 1:
    {
     i10 = 93;
     break L1;
     break;
    }
   default:
    {}
   }
   if ((i8 | 0) < 28) {
    i10 = 21;
    break L1;
   }
   i11 = (i9 | 0) / 2 & -1;
   i12 = i6 + (i11 << 2) | 0;
   do {
    if ((i8 | 0) > 3996) {
     i13 = (i9 | 0) / 4 & -1;
     i14 = i6 + (i13 << 2) | 0;
     i15 = i6 + (i13 + i11 << 2) | 0;
     i13 = ___ZNSt3__17__sort4IRZN7WebCore16MutationObserver19deliverAllMutationsEvE3$_0PN3WTF6RefPtrIS2_EEEEjT0_S9_S9_S9_T__(i6, i14, i12, i15) | 0;
     i16 = HEAP32[i5 >> 2] | 0;
     i17 = i15 | 0;
     i15 = HEAP32[i17 >> 2] | 0;
     if ((HEAP32[i16 + 40 >> 2] | 0) >>> 0 >= (HEAP32[i15 + 40 >> 2] | 0) >>> 0) {
      i18 = i13;
      i19 = i12 | 0;
      break;
     }
     HEAP32[i17 >> 2] = i16;
     HEAP32[i5 >> 2] = i15;
     i15 = HEAP32[i17 >> 2] | 0;
     i16 = i12 | 0;
     i20 = HEAP32[i16 >> 2] | 0;
     if ((HEAP32[i15 + 40 >> 2] | 0) >>> 0 >= (HEAP32[i20 + 40 >> 2] | 0) >>> 0) {
      i18 = i13 + 1 | 0;
      i19 = i16;
      break;
     }
     HEAP32[i16 >> 2] = i15;
     HEAP32[i17 >> 2] = i20;
     i20 = HEAP32[i16 >> 2] | 0;
     i17 = i14 | 0;
     i14 = HEAP32[i17 >> 2] | 0;
     if ((HEAP32[i20 + 40 >> 2] | 0) >>> 0 >= (HEAP32[i14 + 40 >> 2] | 0) >>> 0) {
      i18 = i13 + 2 | 0;
      i19 = i16;
      break;
     }
     HEAP32[i17 >> 2] = i20;
     HEAP32[i16 >> 2] = i14;
     i14 = HEAP32[i17 >> 2] | 0;
     i20 = i6 | 0;
     i15 = HEAP32[i20 >> 2] | 0;
     if ((HEAP32[i14 + 40 >> 2] | 0) >>> 0 >= (HEAP32[i15 + 40 >> 2] | 0) >>> 0) {
      i18 = i13 + 3 | 0;
      i19 = i16;
      break;
     }
     HEAP32[i20 >> 2] = i14;
     HEAP32[i17 >> 2] = i15;
     i18 = i13 + 4 | 0;
     i19 = i16;
    } else {
     i16 = i12 | 0;
     i13 = HEAP32[i16 >> 2] | 0;
     i15 = i6 | 0;
     i17 = HEAP32[i15 >> 2] | 0;
     i14 = HEAP32[i13 + 40 >> 2] | 0;
     i20 = i17 + 40 | 0;
     i21 = HEAP32[i5 >> 2] | 0;
     i22 = (HEAP32[i21 + 40 >> 2] | 0) >>> 0 < i14 >>> 0;
     if (i14 >>> 0 >= (HEAP32[i20 >> 2] | 0) >>> 0) {
      if (!i22) {
       i18 = 0;
       i19 = i16;
       break;
      }
      HEAP32[i16 >> 2] = i21;
      HEAP32[i5 >> 2] = i13;
      i14 = HEAP32[i16 >> 2] | 0;
      i23 = HEAP32[i15 >> 2] | 0;
      if ((HEAP32[i14 + 40 >> 2] | 0) >>> 0 >= (HEAP32[i23 + 40 >> 2] | 0) >>> 0) {
       i18 = 1;
       i19 = i16;
       break;
      }
      HEAP32[i15 >> 2] = i14;
      HEAP32[i16 >> 2] = i23;
      i18 = 2;
      i19 = i16;
      break;
     }
     if (i22) {
      HEAP32[i15 >> 2] = i21;
      HEAP32[i5 >> 2] = i17;
      i18 = 1;
      i19 = i16;
      break;
     }
     HEAP32[i15 >> 2] = i13;
     HEAP32[i16 >> 2] = i17;
     i13 = HEAP32[i5 >> 2] | 0;
     if ((HEAP32[i13 + 40 >> 2] | 0) >>> 0 >= (HEAP32[i20 >> 2] | 0) >>> 0) {
      i18 = 1;
      i19 = i16;
      break;
     }
     HEAP32[i16 >> 2] = i13;
     HEAP32[i5 >> 2] = i17;
     i18 = 2;
     i19 = i16;
    }
   } while (0);
   i11 = i6 | 0;
   i9 = HEAP32[i11 >> 2] | 0;
   i8 = HEAP32[i9 + 40 >> 2] | 0;
   i16 = HEAP32[(HEAP32[i19 >> 2] | 0) + 40 >> 2] | 0;
   do {
    if (i8 >>> 0 < i16 >>> 0) {
     i24 = i4;
     i25 = i18;
    } else {
     i17 = i4;
     while (1) {
      i26 = i17 - 4 | 0;
      if ((i6 | 0) == (i26 | 0)) {
       break;
      }
      i27 = i26 | 0;
      i28 = HEAP32[i27 >> 2] | 0;
      if ((HEAP32[i28 + 40 >> 2] | 0) >>> 0 < i16 >>> 0) {
       i10 = 75;
       break;
      } else {
       i17 = i26;
      }
     }
     if ((i10 | 0) == 75) {
      i10 = 0;
      HEAP32[i11 >> 2] = i28;
      HEAP32[i27 >> 2] = i9;
      i24 = i26;
      i25 = i18 + 1 | 0;
      break;
     }
     i17 = i6 + 4 | 0;
     i13 = HEAP32[i5 >> 2] | 0;
     if (i8 >>> 0 < (HEAP32[i13 + 40 >> 2] | 0) >>> 0) {
      i29 = i17;
     } else {
      i20 = i17;
      while (1) {
       if ((i20 | 0) == (i4 | 0)) {
        i10 = 110;
        break L1;
       }
       i30 = i20 | 0;
       i31 = HEAP32[i30 >> 2] | 0;
       i20 = i20 + 4 | 0;
       if (i8 >>> 0 < (HEAP32[i31 + 40 >> 2] | 0) >>> 0) {
        break;
       }
      }
      HEAP32[i30 >> 2] = i13;
      HEAP32[i5 >> 2] = i31;
      i29 = i20;
     }
     if ((i29 | 0) == (i4 | 0)) {
      i10 = 111;
      break L1;
     } else {
      i32 = i4;
      i33 = i29;
     }
     while (1) {
      i17 = HEAP32[(HEAP32[i11 >> 2] | 0) + 40 >> 2] | 0;
      i15 = i33;
      while (1) {
       i34 = i15 | 0;
       i35 = HEAP32[i34 >> 2] | 0;
       i36 = i15 + 4 | 0;
       if (i17 >>> 0 < (HEAP32[i35 + 40 >> 2] | 0) >>> 0) {
        i37 = i32;
        break;
       } else {
        i15 = i36;
       }
      }
      while (1) {
       i37 = i37 - 4 | 0;
       i38 = i37 | 0;
       i39 = HEAP32[i38 >> 2] | 0;
       if (i17 >>> 0 >= (HEAP32[i39 + 40 >> 2] | 0) >>> 0) {
        break;
       }
      }
      if (i15 >>> 0 >= i37 >>> 0) {
       i6 = i15;
       continue L3;
      }
      HEAP32[i34 >> 2] = i39;
      HEAP32[i38 >> 2] = i35;
      i32 = i37;
      i33 = i36;
     }
    }
   } while (0);
   i11 = i6 + 4 | 0;
   L52 : do {
    if (i11 >>> 0 < i24 >>> 0) {
     i8 = i24;
     i9 = i11;
     i16 = i25;
     i20 = i12;
     while (1) {
      i13 = HEAP32[(HEAP32[i20 >> 2] | 0) + 40 >> 2] | 0;
      i17 = i9;
      while (1) {
       i40 = i17 | 0;
       i41 = HEAP32[i40 >> 2] | 0;
       i42 = i17 + 4 | 0;
       if ((HEAP32[i41 + 40 >> 2] | 0) >>> 0 < i13 >>> 0) {
        i17 = i42;
       } else {
        i43 = i8;
        break;
       }
      }
      while (1) {
       i43 = i43 - 4 | 0;
       i44 = i43 | 0;
       i45 = HEAP32[i44 >> 2] | 0;
       if ((HEAP32[i45 + 40 >> 2] | 0) >>> 0 < i13 >>> 0) {
        break;
       }
      }
      if (i17 >>> 0 > i43 >>> 0) {
       i46 = i17;
       i47 = i16;
       i48 = i20;
       break L52;
      }
      HEAP32[i40 >> 2] = i45;
      HEAP32[i44 >> 2] = i41;
      i8 = i43;
      i9 = i42;
      i16 = i16 + 1 | 0;
      i20 = (i20 | 0) == (i17 | 0) ? i43 : i20;
     }
    } else {
     i46 = i11;
     i47 = i25;
     i48 = i12;
    }
   } while (0);
   do {
    if ((i46 | 0) == (i48 | 0)) {
     i49 = i47;
    } else {
     i12 = i48 | 0;
     i11 = HEAP32[i12 >> 2] | 0;
     i20 = i46 | 0;
     i16 = HEAP32[i20 >> 2] | 0;
     if ((HEAP32[i11 + 40 >> 2] | 0) >>> 0 >= (HEAP32[i16 + 40 >> 2] | 0) >>> 0) {
      i49 = i47;
      break;
     }
     HEAP32[i20 >> 2] = i11;
     HEAP32[i12 >> 2] = i16;
     i49 = i47 + 1 | 0;
    }
   } while (0);
   if ((i49 | 0) == 0) {
    i50 = ___ZNSt3__127__insertion_sort_incompleteIRZN7WebCore16MutationObserver19deliverAllMutationsEvE3$_0PN3WTF6RefPtrIS2_EEEEbT0_S9_T__(i6, i46) | 0;
    i16 = i46 + 4 | 0;
    if (___ZNSt3__127__insertion_sort_incompleteIRZN7WebCore16MutationObserver19deliverAllMutationsEvE3$_0PN3WTF6RefPtrIS2_EEEEbT0_S9_T__(i16, i1) | 0) {
     i10 = 87;
     break;
    }
    if (i50) {
     i6 = i16;
     continue;
    }
   }
   i16 = i46;
   if ((i16 - i7 | 0) >= (i2 - i16 | 0)) {
    i10 = 91;
    break;
   }
   ___ZNSt3__16__sortIRZN7WebCore16MutationObserver19deliverAllMutationsEvE3$_0PN3WTF6RefPtrIS2_EEEEvT0_S9_T__(i6, i46);
   i6 = i46 + 4 | 0;
  }
  if ((i10 | 0) == 87) {
   i10 = 0;
   if (i50) {
    i10 = 112;
    break;
   } else {
    i3 = i6;
    i1 = i46;
    continue;
   }
  } else if ((i10 | 0) == 91) {
   i10 = 0;
   ___ZNSt3__16__sortIRZN7WebCore16MutationObserver19deliverAllMutationsEvE3$_0PN3WTF6RefPtrIS2_EEEEvT0_S9_T__(i46 + 4 | 0, i1);
   i3 = i6;
   i1 = i46;
   continue;
  }
 }
 if ((i10 | 0) == 14) {
  ___ZNSt3__17__sort4IRZN7WebCore16MutationObserver19deliverAllMutationsEvE3$_0PN3WTF6RefPtrIS2_EEEEjT0_S9_S9_S9_T__(i6, i6 + 4 | 0, i6 + 8 | 0, i4) | 0;
  return;
 } else if ((i10 | 0) == 15) {
  i4 = i6 + 4 | 0;
  i46 = i6 + 8 | 0;
  i3 = i6 + 12 | 0;
  ___ZNSt3__17__sort4IRZN7WebCore16MutationObserver19deliverAllMutationsEvE3$_0PN3WTF6RefPtrIS2_EEEEjT0_S9_S9_S9_T__(i6, i4, i46, i3) | 0;
  i50 = i1 - 4 | 0;
  i49 = HEAP32[i50 >> 2] | 0;
  i47 = i3 | 0;
  i3 = HEAP32[i47 >> 2] | 0;
  if ((HEAP32[i49 + 40 >> 2] | 0) >>> 0 >= (HEAP32[i3 + 40 >> 2] | 0) >>> 0) {
   return;
  }
  HEAP32[i47 >> 2] = i49;
  HEAP32[i50 >> 2] = i3;
  i3 = HEAP32[i47 >> 2] | 0;
  i50 = i46 | 0;
  i46 = HEAP32[i50 >> 2] | 0;
  i49 = i3 + 40 | 0;
  if ((HEAP32[i49 >> 2] | 0) >>> 0 >= (HEAP32[i46 + 40 >> 2] | 0) >>> 0) {
   return;
  }
  HEAP32[i50 >> 2] = i3;
  HEAP32[i47 >> 2] = i46;
  i46 = i4 | 0;
  i4 = HEAP32[i46 >> 2] | 0;
  if ((HEAP32[i49 >> 2] | 0) >>> 0 >= (HEAP32[i4 + 40 >> 2] | 0) >>> 0) {
   return;
  }
  HEAP32[i46 >> 2] = i3;
  HEAP32[i50 >> 2] = i4;
  i4 = i6 | 0;
  i50 = HEAP32[i4 >> 2] | 0;
  if ((HEAP32[i49 >> 2] | 0) >>> 0 >= (HEAP32[i50 + 40 >> 2] | 0) >>> 0) {
   return;
  }
  HEAP32[i4 >> 2] = i3;
  HEAP32[i46 >> 2] = i50;
  return;
 } else if ((i10 | 0) == 4) {
  i50 = HEAP32[i5 >> 2] | 0;
  i46 = i6 | 0;
  i3 = HEAP32[i46 >> 2] | 0;
  if ((HEAP32[i50 + 40 >> 2] | 0) >>> 0 >= (HEAP32[i3 + 40 >> 2] | 0) >>> 0) {
   return;
  }
  HEAP32[i46 >> 2] = i50;
  HEAP32[i5 >> 2] = i3;
  return;
 } else if ((i10 | 0) == 21) {
  i3 = i6 + 8 | 0;
  i5 = i6 + 4 | 0;
  i50 = HEAP32[i5 >> 2] | 0;
  i46 = i6 | 0;
  i4 = HEAP32[i46 >> 2] | 0;
  i49 = HEAP32[i50 + 40 >> 2] | 0;
  i47 = i4 + 40 | 0;
  i48 = i3 | 0;
  i25 = HEAP32[i48 >> 2] | 0;
  i43 = i25 + 40 | 0;
  i42 = (HEAP32[i43 >> 2] | 0) >>> 0 < i49 >>> 0;
  do {
   if (i49 >>> 0 < (HEAP32[i47 >> 2] | 0) >>> 0) {
    if (i42) {
     HEAP32[i46 >> 2] = i25;
     HEAP32[i48 >> 2] = i4;
     i51 = i4;
     break;
    }
    HEAP32[i46 >> 2] = i50;
    HEAP32[i5 >> 2] = i4;
    if ((HEAP32[i43 >> 2] | 0) >>> 0 >= (HEAP32[i47 >> 2] | 0) >>> 0) {
     i51 = i25;
     break;
    }
    HEAP32[i5 >> 2] = i25;
    HEAP32[i48 >> 2] = i4;
    i51 = i4;
   } else {
    if (!i42) {
     i51 = i25;
     break;
    }
    HEAP32[i5 >> 2] = i25;
    HEAP32[i48 >> 2] = i50;
    if ((HEAP32[i43 >> 2] | 0) >>> 0 >= (HEAP32[i47 >> 2] | 0) >>> 0) {
     i51 = i50;
     break;
    }
    HEAP32[i46 >> 2] = i25;
    HEAP32[i5 >> 2] = i4;
    i51 = i50;
   }
  } while (0);
  i50 = i6 + 12 | 0;
  if ((i50 | 0) == (i1 | 0)) {
   return;
  } else {
   i52 = i3;
   i53 = i50;
   i54 = i51;
  }
  while (1) {
   i51 = i53 | 0;
   i50 = HEAP32[i51 >> 2] | 0;
   i3 = i50 + 40 | 0;
   do {
    if ((HEAP32[i3 >> 2] | 0) >>> 0 < (HEAP32[i54 + 40 >> 2] | 0) >>> 0) {
     HEAP32[i51 >> 2] = 0;
     i4 = i52;
     i5 = i53;
     i25 = i54;
     i46 = 0;
     while (1) {
      i55 = i4 | 0;
      HEAP32[i55 >> 2] = 0;
      HEAP32[i5 >> 2] = i25;
      do {
       if ((i46 | 0) != 0) {
        i47 = i46 | 0;
        i43 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
        if ((i43 | 0) == 0) {
         __ZN7WebCore16MutationObserverD2Ev(i46);
         __ZN3WTF8fastFreeEPv(i46);
         break;
        } else {
         HEAP32[i47 >> 2] = i43;
         break;
        }
       }
      } while (0);
      if ((i4 | 0) == (i6 | 0)) {
       break;
      }
      i43 = i4 - 4 | 0;
      i47 = HEAP32[i43 >> 2] | 0;
      if ((HEAP32[i3 >> 2] | 0) >>> 0 >= (HEAP32[i47 + 40 >> 2] | 0) >>> 0) {
       break;
      }
      i5 = i4;
      i4 = i43;
      i25 = i47;
      i46 = HEAP32[i55 >> 2] | 0;
     }
     i46 = HEAP32[i55 >> 2] | 0;
     HEAP32[i55 >> 2] = i50;
     if ((i46 | 0) == 0) {
      break;
     }
     i25 = i46 | 0;
     i4 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     if ((i4 | 0) == 0) {
      __ZN7WebCore16MutationObserverD2Ev(i46);
      __ZN3WTF8fastFreeEPv(i46);
      break;
     } else {
      HEAP32[i25 >> 2] = i4;
      break;
     }
    }
   } while (0);
   i50 = i53 + 4 | 0;
   if ((i50 | 0) == (i1 | 0)) {
    break;
   }
   i52 = i53;
   i53 = i50;
   i54 = HEAP32[i51 >> 2] | 0;
  }
  return;
 } else if ((i10 | 0) == 6) {
  i54 = i6 + 4 | 0;
  i53 = HEAP32[i54 >> 2] | 0;
  i52 = i6 | 0;
  i6 = HEAP32[i52 >> 2] | 0;
  i55 = HEAP32[i53 + 40 >> 2] | 0;
  i50 = i6 + 40 | 0;
  i3 = i1 - 4 | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  i4 = (HEAP32[i1 + 40 >> 2] | 0) >>> 0 < i55 >>> 0;
  if (i55 >>> 0 >= (HEAP32[i50 >> 2] | 0) >>> 0) {
   if (!i4) {
    return;
   }
   HEAP32[i54 >> 2] = i1;
   HEAP32[i3 >> 2] = i53;
   i55 = HEAP32[i54 >> 2] | 0;
   i25 = HEAP32[i52 >> 2] | 0;
   if ((HEAP32[i55 + 40 >> 2] | 0) >>> 0 >= (HEAP32[i25 + 40 >> 2] | 0) >>> 0) {
    return;
   }
   HEAP32[i52 >> 2] = i55;
   HEAP32[i54 >> 2] = i25;
   return;
  }
  if (i4) {
   HEAP32[i52 >> 2] = i1;
   HEAP32[i3 >> 2] = i6;
   return;
  }
  HEAP32[i52 >> 2] = i53;
  HEAP32[i54 >> 2] = i6;
  i53 = HEAP32[i3 >> 2] | 0;
  if ((HEAP32[i53 + 40 >> 2] | 0) >>> 0 >= (HEAP32[i50 >> 2] | 0) >>> 0) {
   return;
  }
  HEAP32[i54 >> 2] = i53;
  HEAP32[i3 >> 2] = i6;
  return;
 } else if ((i10 | 0) == 93) {
  return;
 } else if ((i10 | 0) == 110) {
  return;
 } else if ((i10 | 0) == 111) {
  return;
 } else if ((i10 | 0) == 112) {
  return;
 }
}
function __ZN7WebCore16MutationObserver19deliverAllMutationsEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i2 = i1 | 0;
 i3 = i1 + 16 | 0;
 i4 = i1 + 32 | 0;
 i5 = i1 + 48 | 0;
 if (HEAP8[H_BASE + 176 | 0] | 0) {
  STACKTOP = i1;
  return;
 }
 HEAP8[H_BASE + 176 | 0] = 1;
 if (HEAP8[H_BASE + 184 | 0] | 0) {
  i6 = HEAP32[H_BASE + 200 >> 2] | 0;
 } else {
  i7 = __ZN3WTF10fastMallocEj(20) | 0;
  i8 = i7;
  _memset(i7 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 200 >> 2] = i8;
  HEAP8[H_BASE + 184 | 0] = 1;
  i6 = i8;
 }
 do {
  if ((HEAP32[i6 + 12 >> 2] | 0) != 0) {
   i8 = i2 | 0;
   HEAP32[i8 >> 2] = 0;
   i7 = i2 + 4 | 0;
   HEAP32[i7 >> 2] = 0;
   i9 = i2 + 8 | 0;
   HEAP32[i9 >> 2] = 0;
   __ZN3WTF12copyToVectorINS_7HashSetINS_6RefPtrIN7WebCore16MutationObserverEEENS_7PtrHashIS5_EENS_10HashTraitsIS5_EEEENS_6VectorIS5_Lj0ENS_15CrashOnOverflowEEEEEvRKT_RT0_(i6, i2);
   i10 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i10 | 0) == 0) {
     i11 = 20;
    } else {
     i12 = HEAP32[i8 >> 2] | 0;
     i13 = 0;
     while (1) {
      i14 = HEAP32[(HEAP32[i12 + (i13 << 2) >> 2] | 0) + 4 >> 2] | 0;
      if ((HEAP8[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 12 >> 2] & 1](i14) | 0) + 136 | 0] & 1) == 0) {
       if (HEAP8[H_BASE + 184 | 0] | 0) {
        i15 = HEAP32[H_BASE + 200 >> 2] | 0;
       } else {
        i14 = __ZN3WTF10fastMallocEj(20) | 0;
        i16 = i14;
        _memset(i14 | 0, 0, 20) | 0;
        HEAP32[H_BASE + 200 >> 2] = i16;
        HEAP8[H_BASE + 184 | 0] = 1;
        i15 = i16;
       }
       if (i10 >>> 0 <= i13 >>> 0) {
        i11 = 13;
        break;
       }
       i16 = i12 + (i13 << 2) | 0;
       __ZN3WTF7HashSetINS_6RefPtrIN7WebCore16MutationObserverEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i15, i16) | 0;
       if (HEAP8[H_BASE + 192 | 0] | 0) {
        i17 = HEAP32[H_BASE + 208 >> 2] | 0;
       } else {
        i14 = __ZN3WTF10fastMallocEj(20) | 0;
        i18 = i14;
        _memset(i14 | 0, 0, 20) | 0;
        HEAP32[H_BASE + 208 >> 2] = i18;
        HEAP8[H_BASE + 192 | 0] = 1;
        i17 = i18;
       }
       __ZN3WTF9HashTableINS_6RefPtrIN7WebCore16MutationObserverEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i3, i17 | 0, i16, i16);
      }
      i13 = i13 + 1 | 0;
      if (i13 >>> 0 >= i10 >>> 0) {
       break;
      }
     }
     if ((i11 | 0) == 13) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     if ((i10 | 0) == 0) {
      i11 = 20;
      break;
     }
     i13 = HEAP32[i8 >> 2] | 0;
     i12 = i13 + (i10 << 2) | 0;
     i16 = i13;
     while (1) {
      i18 = HEAP32[i16 >> 2] | 0;
      do {
       if ((i18 | 0) != 0) {
        i14 = i18 | 0;
        i19 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
        if ((i19 | 0) == 0) {
         __ZN7WebCore16MutationObserverD2Ev(i18);
         __ZN3WTF8fastFreeEPv(i18);
         break;
        } else {
         HEAP32[i14 >> 2] = i19;
         break;
        }
       }
      } while (0);
      i16 = i16 + 4 | 0;
      if ((i16 | 0) == (i12 | 0)) {
       break;
      }
     }
     HEAP32[i9 >> 2] = 0;
     i20 = i13;
    }
   } while (0);
   if ((i11 | 0) == 20) {
    i20 = HEAP32[i8 >> 2] | 0;
   }
   if ((i20 | 0) == 0) {
    break;
   }
   HEAP32[i8 >> 2] = 0;
   HEAP32[i7 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i20);
  }
 } while (0);
 i20 = i4 | 0;
 i17 = i4 + 4 | 0;
 i3 = i4 + 8 | 0;
 L44 : while (1) {
  if (HEAP8[H_BASE + 192 | 0] | 0) {
   i21 = HEAP32[H_BASE + 208 >> 2] | 0;
  } else {
   i15 = __ZN3WTF10fastMallocEj(20) | 0;
   i2 = i15;
   _memset(i15 | 0, 0, 20) | 0;
   HEAP32[H_BASE + 208 >> 2] = i2;
   HEAP8[H_BASE + 192 | 0] = 1;
   i21 = i2;
  }
  if ((HEAP32[i21 + 12 >> 2] | 0) == 0) {
   i11 = 68;
   break;
  }
  HEAP32[i20 >> 2] = 0;
  HEAP32[i17 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
  __ZN3WTF12copyToVectorINS_7HashSetINS_6RefPtrIN7WebCore16MutationObserverEEENS_7PtrHashIS5_EENS_10HashTraitsIS5_EEEENS_6VectorIS5_Lj0ENS_15CrashOnOverflowEEEEEvRKT_RT0_(i21, i4);
  if (HEAP8[H_BASE + 192 | 0] | 0) {
   i22 = HEAP32[H_BASE + 208 >> 2] | 0;
  } else {
   i2 = __ZN3WTF10fastMallocEj(20) | 0;
   i15 = i2;
   _memset(i2 | 0, 0, 20) | 0;
   HEAP32[H_BASE + 208 >> 2] = i15;
   HEAP8[H_BASE + 192 | 0] = 1;
   i22 = i15;
  }
  i15 = HEAP32[i22 >> 2] | 0;
  if ((i15 | 0) != 0) {
   i2 = HEAP32[i22 + 4 >> 2] | 0;
   if ((i2 | 0) > 0) {
    i6 = 0;
    while (1) {
     i9 = HEAP32[i15 + (i6 << 2) >> 2] | 0;
     i10 = i9;
     do {
      if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
       i12 = i9 | 0;
       i16 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
       if ((i16 | 0) == 0) {
        __ZN7WebCore16MutationObserverD2Ev(i9);
        __ZN3WTF8fastFreeEPv(i9);
        break;
       } else {
        HEAP32[i12 >> 2] = i16;
        break;
       }
      }
     } while (0);
     i6 = i6 + 1 | 0;
     if ((i6 | 0) >= (i2 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i15);
   _memset(i22 | 0, 0, 16) | 0;
  }
  i2 = HEAP32[i20 >> 2] | 0;
  i6 = HEAP32[i3 >> 2] | 0;
  ___ZNSt3__16__sortIRZN7WebCore16MutationObserver19deliverAllMutationsEvE3$_0PN3WTF6RefPtrIS2_EEEEvT0_S9_T__(i2, i2 + (i6 << 2) | 0);
  do {
   if ((i6 | 0) != 0) {
    i7 = 0;
    while (1) {
     i8 = i2 + (i7 << 2) | 0;
     i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] | 0;
     if ((HEAP8[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 1](i9) | 0) + 136 | 0] & 1) == 0) {
      if (i6 >>> 0 <= i7 >>> 0) {
       i11 = 49;
       break L44;
      }
      __ZN7WebCore16MutationObserver7deliverEv(HEAP32[i8 >> 2] | 0);
     } else {
      if (HEAP8[H_BASE + 184 | 0] | 0) {
       i23 = HEAP32[H_BASE + 200 >> 2] | 0;
      } else {
       i8 = __ZN3WTF10fastMallocEj(20) | 0;
       i9 = i8;
       _memset(i8 | 0, 0, 20) | 0;
       HEAP32[H_BASE + 200 >> 2] = i9;
       HEAP8[H_BASE + 184 | 0] = 1;
       i23 = i9;
      }
      if (i6 >>> 0 <= i7 >>> 0) {
       i11 = 55;
       break L44;
      }
      i9 = i2 + (i7 << 2) | 0;
      __ZN3WTF9HashTableINS_6RefPtrIN7WebCore16MutationObserverEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i5, i23 | 0, i9, i9);
     }
     i7 = i7 + 1 | 0;
     if (i7 >>> 0 >= i6 >>> 0) {
      break;
     }
    }
    if ((i6 | 0) == 0) {
     break;
    }
    i7 = i2 + (i6 << 2) | 0;
    i9 = i2;
    while (1) {
     i8 = HEAP32[i9 >> 2] | 0;
     do {
      if ((i8 | 0) != 0) {
       i10 = i8 | 0;
       i13 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
       if ((i13 | 0) == 0) {
        __ZN7WebCore16MutationObserverD2Ev(i8);
        __ZN3WTF8fastFreeEPv(i8);
        break;
       } else {
        HEAP32[i10 >> 2] = i13;
        break;
       }
      }
     } while (0);
     i9 = i9 + 4 | 0;
     if ((i9 | 0) == (i7 | 0)) {
      break;
     }
    }
    HEAP32[i3 >> 2] = 0;
   }
  } while (0);
  if ((i2 | 0) == 0) {
   continue;
  }
  HEAP32[i20 >> 2] = 0;
  HEAP32[i17 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 if ((i11 | 0) == 49) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i11 | 0) == 55) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i11 | 0) == 68) {
  HEAP8[H_BASE + 176 | 0] = 0;
  STACKTOP = i1;
  return;
 }
}
function __ZN7WebCore16MutationObserver7deliverEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i3 + 12 | 0;
 i6 = i3 | 0;
 HEAP32[i6 >> 2] = i5;
 i7 = i3 + 4 | 0;
 HEAP32[i7 >> 2] = 1;
 i8 = i3 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 i3 = i1 + 20 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 i10 = i1 + 24 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i9 + (i11 << 2) | 0;
 L1 : do {
  if ((HEAP32[i1 + 32 >> 2] | 0) != 0) {
   L3 : do {
    if ((i11 | 0) == 0) {
     i13 = i9;
    } else {
     i14 = i9;
     while (1) {
      i15 = HEAP32[i14 >> 2] | 0;
      if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
       i13 = i14;
       break L3;
      }
      i14 = i14 + 4 | 0;
      if ((i14 | 0) == (i12 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i13 | 0) == (i12 | 0)) {
    break;
   } else {
    i16 = i13;
    i17 = 0;
   }
   L8 : while (1) {
    i14 = HEAP32[i16 >> 2] | 0;
    i15 = HEAP32[i14 + 12 >> 2] | 0;
    do {
     if ((i15 | 0) == 0) {
      i18 = i17;
     } else {
      if ((HEAP32[i15 + 12 >> 2] | 0) == 0) {
       i18 = i17;
       break;
      }
      if ((i17 | 0) != (HEAP32[i7 >> 2] | 0)) {
       HEAP32[(HEAP32[i6 >> 2] | 0) + (i17 << 2) >> 2] = i14;
       i19 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
       HEAP32[i8 >> 2] = i19;
       i18 = i19;
       break;
      }
      i19 = i17 + 1 | 0;
      i20 = HEAP32[i6 >> 2] | 0;
      do {
       if (i20 >>> 0 > i16 >>> 0) {
        i21 = 13;
       } else {
        if ((i20 + (i17 << 2) | 0) >>> 0 <= i16 >>> 0) {
         i21 = 13;
         break;
        }
        i22 = i16 - i20 >> 2;
        i23 = i19 + (i17 >>> 2) | 0;
        i24 = i23 >>> 0 > 16 >>> 0 ? i23 : 16;
        i23 = i24 >>> 0 > i19 >>> 0 ? i24 : i19;
        do {
         if (i17 >>> 0 < i23 >>> 0) {
          if (i23 >>> 0 > 1 >>> 0) {
           if (i23 >>> 0 > 1073741823 >>> 0) {
            i21 = 27;
            break L8;
           }
           i24 = __ZN3WTF18fastMallocGoodSizeEj(i23 << 2) | 0;
           HEAP32[i7 >> 2] = i24 >>> 2;
           i25 = __ZN3WTF10fastMallocEj(i24) | 0;
           HEAP32[i6 >> 2] = i25;
           i26 = i25;
          } else {
           HEAP32[i6 >> 2] = i5;
           HEAP32[i7 >> 2] = 1;
           i26 = i5;
          }
          i25 = i20;
          _memcpy(i26 | 0, i25 | 0, i17 << 2) | 0;
          if ((i5 | 0) == (i20 | 0) | (i20 | 0) == 0) {
           break;
          }
          if ((HEAP32[i6 >> 2] | 0) == (i20 | 0)) {
           HEAP32[i6 >> 2] = 0;
           HEAP32[i7 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i25);
         }
        } while (0);
        i23 = HEAP32[i6 >> 2] | 0;
        i27 = i23 + (i22 << 2) | 0;
        i28 = i23;
       }
      } while (0);
      if ((i21 | 0) == 13) {
       i21 = 0;
       i23 = i19 + (i17 >>> 2) | 0;
       i25 = i23 >>> 0 > 16 >>> 0 ? i23 : 16;
       i23 = i25 >>> 0 > i19 >>> 0 ? i25 : i19;
       do {
        if (i17 >>> 0 < i23 >>> 0) {
         if (i23 >>> 0 > 1 >>> 0) {
          if (i23 >>> 0 > 1073741823 >>> 0) {
           i21 = 16;
           break L8;
          }
          i25 = __ZN3WTF18fastMallocGoodSizeEj(i23 << 2) | 0;
          HEAP32[i7 >> 2] = i25 >>> 2;
          i24 = __ZN3WTF10fastMallocEj(i25) | 0;
          HEAP32[i6 >> 2] = i24;
          i29 = i24;
         } else {
          HEAP32[i6 >> 2] = i5;
          HEAP32[i7 >> 2] = 1;
          i29 = i5;
         }
         i24 = i20;
         _memcpy(i29 | 0, i24 | 0, i17 << 2) | 0;
         if ((i5 | 0) == (i20 | 0) | (i20 | 0) == 0) {
          break;
         }
         if ((HEAP32[i6 >> 2] | 0) == (i20 | 0)) {
          HEAP32[i6 >> 2] = 0;
          HEAP32[i7 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i24);
        }
       } while (0);
       i27 = i16;
       i28 = HEAP32[i6 >> 2] | 0;
      }
      HEAP32[i28 + (HEAP32[i8 >> 2] << 2) >> 2] = HEAP32[i27 >> 2];
      i20 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
      HEAP32[i8 >> 2] = i20;
      i18 = i20;
     }
    } while (0);
    i14 = i16 + 4 | 0;
    L47 : do {
     if ((i14 | 0) == (i12 | 0)) {
      i30 = i12;
     } else {
      i15 = i14;
      while (1) {
       i20 = HEAP32[i15 >> 2] | 0;
       if (!((i20 | 0) == (-1 | 0) | (i20 | 0) == 0)) {
        i30 = i15;
        break L47;
       }
       i20 = i15 + 4 | 0;
       if ((i20 | 0) == (i12 | 0)) {
        i30 = i12;
        break;
       } else {
        i15 = i20;
       }
      }
     }
    } while (0);
    if ((i30 | 0) == ((HEAP32[i3 >> 2] | 0) + (HEAP32[i10 >> 2] << 2) | 0)) {
     i21 = 6;
     break;
    } else {
     i16 = i30;
     i17 = i18;
    }
   }
   if ((i21 | 0) == 27) {
    _WTFCrash();
   } else if ((i21 | 0) == 6) {
    if ((i18 | 0) == 0) {
     break;
    } else {
     i31 = 0;
    }
    while (1) {
     __ZN7WebCore28MutationObserverRegistration27clearTransientRegistrationsEv(HEAP32[(HEAP32[i6 >> 2] | 0) + (i31 << 2) >> 2] | 0);
     i31 = i31 + 1 | 0;
     if (i31 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
      break;
     }
    }
   } else if ((i21 | 0) == 16) {
    _WTFCrash();
   }
  }
 } while (0);
 i21 = i1 + 16 | 0;
 i31 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i31 | 0) != 0) {
   i18 = i4 | 0;
   i17 = i4 + 4 | 0;
   i30 = i4 + 8 | 0;
   HEAP32[i30 >> 2] = i31;
   HEAP32[i21 >> 2] = 0;
   i16 = i1 + 8 | 0;
   HEAP32[i18 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i16 >> 2] = 0;
   i16 = i1 + 12 | 0;
   HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i16 >> 2] = 0;
   i16 = HEAP32[i1 + 4 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] & 1](i16, i4, i1);
   i16 = HEAP32[i30 >> 2] | 0;
   if ((i16 | 0) != 0) {
    i10 = HEAP32[i18 >> 2] | 0;
    i3 = i10 + (i16 << 2) | 0;
    i16 = i10;
    while (1) {
     i10 = HEAP32[i16 >> 2] | 0;
     do {
      if ((i10 | 0) != 0) {
       i12 = i10 + 4 | 0;
       i27 = i12 | 0;
       i28 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
       if ((i28 | 0) != 0) {
        HEAP32[i27 >> 2] = i28;
        break;
       }
       i28 = i12 - 4 | 0;
       if ((i28 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 3](i28);
      }
     } while (0);
     i16 = i16 + 4 | 0;
     if ((i16 | 0) == (i3 | 0)) {
      break;
     }
    }
    HEAP32[i30 >> 2] = 0;
   }
   i3 = HEAP32[i18 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   HEAP32[i18 >> 2] = 0;
   HEAP32[i17 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
 }
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == (i8 | 0) | (i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i8);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__127__insertion_sort_incompleteIRZN7WebCore16MutationObserver19deliverAllMutationsEvE3$_0PN3WTF6RefPtrIS2_EEEEbT0_S9_T__(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 switch (i2 - i1 >> 2 | 0) {
 case 0:
 case 1:
  {
   i3 = 1;
   return i3 | 0;
  }
 case 2:
  {
   i4 = i2 - 4 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   i6 = i1 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   if ((HEAP32[i5 + 40 >> 2] | 0) >>> 0 >= (HEAP32[i7 + 40 >> 2] | 0) >>> 0) {
    i3 = 1;
    return i3 | 0;
   }
   HEAP32[i6 >> 2] = i5;
   HEAP32[i4 >> 2] = i7;
   i3 = 1;
   return i3 | 0;
  }
 case 3:
  {
   i7 = i1 + 4 | 0;
   i4 = HEAP32[i7 >> 2] | 0;
   i5 = i1 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   i8 = HEAP32[i4 + 40 >> 2] | 0;
   i9 = i6 + 40 | 0;
   i10 = i2 - 4 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = (HEAP32[i11 + 40 >> 2] | 0) >>> 0 < i8 >>> 0;
   if (i8 >>> 0 >= (HEAP32[i9 >> 2] | 0) >>> 0) {
    if (!i12) {
     i3 = 1;
     return i3 | 0;
    }
    HEAP32[i7 >> 2] = i11;
    HEAP32[i10 >> 2] = i4;
    i8 = HEAP32[i7 >> 2] | 0;
    i13 = HEAP32[i5 >> 2] | 0;
    if ((HEAP32[i8 + 40 >> 2] | 0) >>> 0 >= (HEAP32[i13 + 40 >> 2] | 0) >>> 0) {
     i3 = 1;
     return i3 | 0;
    }
    HEAP32[i5 >> 2] = i8;
    HEAP32[i7 >> 2] = i13;
    i3 = 1;
    return i3 | 0;
   }
   if (i12) {
    HEAP32[i5 >> 2] = i11;
    HEAP32[i10 >> 2] = i6;
    i3 = 1;
    return i3 | 0;
   }
   HEAP32[i5 >> 2] = i4;
   HEAP32[i7 >> 2] = i6;
   i4 = HEAP32[i10 >> 2] | 0;
   if ((HEAP32[i4 + 40 >> 2] | 0) >>> 0 >= (HEAP32[i9 >> 2] | 0) >>> 0) {
    i3 = 1;
    return i3 | 0;
   }
   HEAP32[i7 >> 2] = i4;
   HEAP32[i10 >> 2] = i6;
   i3 = 1;
   return i3 | 0;
  }
 case 4:
  {
   ___ZNSt3__17__sort4IRZN7WebCore16MutationObserver19deliverAllMutationsEvE3$_0PN3WTF6RefPtrIS2_EEEEjT0_S9_S9_S9_T__(i1, i1 + 4 | 0, i1 + 8 | 0, i2 - 4 | 0) | 0;
   i3 = 1;
   return i3 | 0;
  }
 case 5:
  {
   i6 = i1 + 4 | 0;
   i10 = i1 + 8 | 0;
   i4 = i1 + 12 | 0;
   ___ZNSt3__17__sort4IRZN7WebCore16MutationObserver19deliverAllMutationsEvE3$_0PN3WTF6RefPtrIS2_EEEEjT0_S9_S9_S9_T__(i1, i6, i10, i4) | 0;
   i7 = i2 - 4 | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   i5 = i4 | 0;
   i4 = HEAP32[i5 >> 2] | 0;
   if ((HEAP32[i9 + 40 >> 2] | 0) >>> 0 >= (HEAP32[i4 + 40 >> 2] | 0) >>> 0) {
    i3 = 1;
    return i3 | 0;
   }
   HEAP32[i5 >> 2] = i9;
   HEAP32[i7 >> 2] = i4;
   i4 = HEAP32[i5 >> 2] | 0;
   i7 = i10 | 0;
   i10 = HEAP32[i7 >> 2] | 0;
   i9 = i4 + 40 | 0;
   if ((HEAP32[i9 >> 2] | 0) >>> 0 >= (HEAP32[i10 + 40 >> 2] | 0) >>> 0) {
    i3 = 1;
    return i3 | 0;
   }
   HEAP32[i7 >> 2] = i4;
   HEAP32[i5 >> 2] = i10;
   i10 = i6 | 0;
   i6 = HEAP32[i10 >> 2] | 0;
   if ((HEAP32[i9 >> 2] | 0) >>> 0 >= (HEAP32[i6 + 40 >> 2] | 0) >>> 0) {
    i3 = 1;
    return i3 | 0;
   }
   HEAP32[i10 >> 2] = i4;
   HEAP32[i7 >> 2] = i6;
   i6 = i1 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   if ((HEAP32[i9 >> 2] | 0) >>> 0 >= (HEAP32[i7 + 40 >> 2] | 0) >>> 0) {
    i3 = 1;
    return i3 | 0;
   }
   HEAP32[i6 >> 2] = i4;
   HEAP32[i10 >> 2] = i7;
   i3 = 1;
   return i3 | 0;
  }
 default:
  {
   i7 = i1 + 8 | 0;
   i10 = i1 + 4 | 0;
   i4 = HEAP32[i10 >> 2] | 0;
   i6 = i1 | 0;
   i9 = HEAP32[i6 >> 2] | 0;
   i5 = HEAP32[i4 + 40 >> 2] | 0;
   i11 = i9 + 40 | 0;
   i12 = i7 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   i8 = i13 + 40 | 0;
   i14 = (HEAP32[i8 >> 2] | 0) >>> 0 < i5 >>> 0;
   do {
    if (i5 >>> 0 < (HEAP32[i11 >> 2] | 0) >>> 0) {
     if (i14) {
      HEAP32[i6 >> 2] = i13;
      HEAP32[i12 >> 2] = i9;
      i15 = i9;
      break;
     }
     HEAP32[i6 >> 2] = i4;
     HEAP32[i10 >> 2] = i9;
     if ((HEAP32[i8 >> 2] | 0) >>> 0 >= (HEAP32[i11 >> 2] | 0) >>> 0) {
      i15 = i13;
      break;
     }
     HEAP32[i10 >> 2] = i13;
     HEAP32[i12 >> 2] = i9;
     i15 = i9;
    } else {
     if (!i14) {
      i15 = i13;
      break;
     }
     HEAP32[i10 >> 2] = i13;
     HEAP32[i12 >> 2] = i4;
     if ((HEAP32[i8 >> 2] | 0) >>> 0 >= (HEAP32[i11 >> 2] | 0) >>> 0) {
      i15 = i4;
      break;
     }
     HEAP32[i6 >> 2] = i13;
     HEAP32[i10 >> 2] = i9;
     i15 = i4;
    }
   } while (0);
   i4 = i1 + 12 | 0;
   if ((i4 | 0) == (i2 | 0)) {
    i3 = 1;
    return i3 | 0;
   } else {
    i16 = i7;
    i17 = 0;
    i18 = i4;
    i19 = i15;
   }
   while (1) {
    i15 = i18 | 0;
    i4 = HEAP32[i15 >> 2] | 0;
    i7 = i4 + 40 | 0;
    if ((HEAP32[i7 >> 2] | 0) >>> 0 < (HEAP32[i19 + 40 >> 2] | 0) >>> 0) {
     HEAP32[i15 >> 2] = 0;
     i9 = i16;
     i10 = i18;
     i13 = i19;
     i6 = 0;
     while (1) {
      i20 = i9 | 0;
      HEAP32[i20 >> 2] = 0;
      HEAP32[i10 >> 2] = i13;
      do {
       if ((i6 | 0) != 0) {
        i11 = i6 | 0;
        i8 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
        if ((i8 | 0) == 0) {
         __ZN7WebCore16MutationObserverD2Ev(i6);
         __ZN3WTF8fastFreeEPv(i6);
         break;
        } else {
         HEAP32[i11 >> 2] = i8;
         break;
        }
       }
      } while (0);
      if ((i9 | 0) == (i1 | 0)) {
       break;
      }
      i8 = i9 - 4 | 0;
      i11 = HEAP32[i8 >> 2] | 0;
      if ((HEAP32[i7 >> 2] | 0) >>> 0 >= (HEAP32[i11 + 40 >> 2] | 0) >>> 0) {
       break;
      }
      i10 = i9;
      i9 = i8;
      i13 = i11;
      i6 = HEAP32[i20 >> 2] | 0;
     }
     i6 = HEAP32[i20 >> 2] | 0;
     HEAP32[i20 >> 2] = i4;
     do {
      if ((i6 | 0) != 0) {
       i13 = i6 | 0;
       i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
       if ((i9 | 0) == 0) {
        __ZN7WebCore16MutationObserverD2Ev(i6);
        __ZN3WTF8fastFreeEPv(i6);
        break;
       } else {
        HEAP32[i13 >> 2] = i9;
        break;
       }
      }
     } while (0);
     i6 = i17 + 1 | 0;
     if ((i6 | 0) == 8) {
      break;
     } else {
      i21 = i6;
     }
    } else {
     i21 = i17;
    }
    i6 = i18 + 4 | 0;
    if ((i6 | 0) == (i2 | 0)) {
     i3 = 1;
     i22 = 46;
     break;
    }
    i16 = i18;
    i17 = i21;
    i18 = i6;
    i19 = HEAP32[i15 >> 2] | 0;
   }
   if ((i22 | 0) == 46) {
    return i3 | 0;
   }
   i3 = (i18 + 4 | 0) == (i2 | 0);
   return i3 | 0;
  }
 }
 return 0;
}
function __ZN7WebCore16MutationObserver10disconnectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i1 + 12 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   i6 = i1 + 16 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   i8 = i1 + 8 | 0;
   if ((i7 | 0) != 0) {
    i9 = HEAP32[i8 >> 2] | 0;
    i10 = i9 + (i7 << 2) | 0;
    i7 = i9;
    while (1) {
     i9 = HEAP32[i7 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i11 = i9 + 4 | 0;
       i12 = i11 | 0;
       i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
       if ((i13 | 0) != 0) {
        HEAP32[i12 >> 2] = i13;
        break;
       }
       i13 = i11 - 4 | 0;
       if ((i13 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 3](i13);
      }
     } while (0);
     i7 = i7 + 4 | 0;
     if ((i7 | 0) == (i10 | 0)) {
      break;
     }
    }
    HEAP32[i6 >> 2] = 0;
   }
   i10 = HEAP32[i8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   HEAP32[i8 >> 2] = 0;
   HEAP32[i5 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i10);
  }
 } while (0);
 i5 = i4 | 0;
 _memset(i4 | 0, 0, 20) | 0;
 i10 = HEAP32[i1 + 20 >> 2] | 0;
 i7 = HEAP32[i1 + 24 >> 2] | 0;
 i9 = i10 + (i7 << 2) | 0;
 L18 : do {
  if ((HEAP32[i1 + 32 >> 2] | 0) != 0) {
   L20 : do {
    if ((i7 | 0) == 0) {
     i14 = i10;
    } else {
     i13 = i10;
     while (1) {
      i11 = HEAP32[i13 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i14 = i13;
       break L20;
      }
      i13 = i13 + 4 | 0;
      if ((i13 | 0) == (i9 | 0)) {
       break L18;
      }
     }
    }
   } while (0);
   if ((i14 | 0) == (i9 | 0)) {
    break;
   } else {
    i15 = i14;
   }
   while (1) {
    __ZN3WTF9HashTableIPN7WebCore28MutationObserverRegistrationES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3, i5, i15, i15);
    i8 = i15 + 4 | 0;
    if ((i8 | 0) == (i9 | 0)) {
     break L18;
    } else {
     i16 = i8;
    }
    while (1) {
     i8 = HEAP32[i16 >> 2] | 0;
     if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
      break;
     }
     i8 = i16 + 4 | 0;
     if ((i8 | 0) == (i9 | 0)) {
      break L18;
     } else {
      i16 = i8;
     }
    }
    if ((i16 | 0) == (i9 | 0)) {
     break;
    } else {
     i15 = i16;
    }
   }
  }
 } while (0);
 i16 = HEAP32[i4 >> 2] | 0;
 i15 = HEAP32[i4 + 4 >> 2] | 0;
 i9 = i16 + (i15 << 2) | 0;
 L32 : do {
  if ((HEAP32[i4 + 12 >> 2] | 0) != 0) {
   L34 : do {
    if ((i15 | 0) == 0) {
     i17 = i16;
    } else {
     i5 = i16;
     while (1) {
      i3 = HEAP32[i5 >> 2] | 0;
      if (!((i3 | 0) == (-1 | 0) | (i3 | 0) == 0)) {
       i17 = i5;
       break L34;
      }
      i5 = i5 + 4 | 0;
      if ((i5 | 0) == (i9 | 0)) {
       break L32;
      }
     }
    }
   } while (0);
   if ((i17 | 0) == (i9 | 0)) {
    break;
   } else {
    i18 = i17;
   }
   while (1) {
    __ZN7WebCore28MutationObserverRegistration19unregisterAndDeleteEPS0_(HEAP32[i18 >> 2] | 0);
    i5 = i18 + 4 | 0;
    if ((i5 | 0) == (i9 | 0)) {
     break L32;
    } else {
     i19 = i5;
    }
    while (1) {
     i5 = HEAP32[i19 >> 2] | 0;
     if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
      break;
     }
     i5 = i19 + 4 | 0;
     if ((i5 | 0) == (i9 | 0)) {
      break L32;
     } else {
      i19 = i5;
     }
    }
    if ((i19 | 0) == (i9 | 0)) {
     break;
    } else {
     i18 = i19;
    }
   }
  }
 } while (0);
 if ((i16 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF8fastFreeEPv(i16);
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore16MutationObserverEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
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
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore16MutationObserverEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i8, 0) | 0;
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
  } else {
   i13 = (i9 >>> 23) + ~i9 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i3;
   i17 = i7;
   i18 = i11;
   while (1) {
    if ((i18 | 0) == (i8 | 0)) {
     i19 = 8;
     break;
    }
    i20 = (i18 | 0) == -1 ? i17 : i15;
    i21 = (i14 | 0) == 0 ? i13 : i14;
    i22 = i21 + i16 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i19 = 10;
     break;
    } else {
     i14 = i21;
     i15 = i20;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
   if ((i19 | 0) == 8) {
    i18 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i16 = i1;
    HEAP32[i16 >> 2] = i17;
    HEAP32[i16 + 4 >> 2] = i18;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i19 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i18 = i2 + 16 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) - 1;
    i12 = i20;
    break;
   }
  }
 } while (0);
 i20 = HEAP32[i4 >> 2] | 0;
 if ((i20 | 0) != 0) {
  i4 = i20 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i12 | 0;
 i23 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i20;
 do {
  if ((i23 | 0) != 0) {
   i20 = i23 | 0;
   i4 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore16MutationObserverD2Ev(i23);
    __ZN3WTF8fastFreeEPv(i23);
    break;
   } else {
    HEAP32[i20 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i23 = i2 + 12 | 0;
 i4 = (HEAP32[i23 >> 2] | 0) + 1 | 0;
 HEAP32[i23 >> 2] = i4;
 i23 = i2 + 4 | 0;
 i20 = HEAP32[i23 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i20 | 0)) {
  i25 = i12;
  i26 = i20;
 } else {
  if ((i20 | 0) == 0) {
   i27 = 8;
  } else {
   i19 = i20 << 1;
   i27 = (i4 * 6 & -1 | 0) < (i19 | 0) ? i20 : i19;
  }
  i19 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore16MutationObserverEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i27, i12) | 0;
  i25 = i19;
  i26 = HEAP32[i23 >> 2] | 0;
 }
 i23 = (HEAP32[i5 >> 2] | 0) + (i26 << 2) | 0;
 i26 = i1;
 HEAP32[i26 >> 2] = i25;
 HEAP32[i26 + 4 >> 2] = i23;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore16MutationObserver7observeEPNS_4NodeERKNS_10DictionaryERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i4 >> 2] = 8;
  STACKTOP = i5;
  return;
 }
 i10 = i3 | 0;
 i11 = i3 | 0;
 i12 = i3 + 4 | 0;
 i3 = i6 + 4 | 0;
 i13 = i6;
 i14 = i6 | 0;
 i15 = i8 | 0;
 i16 = 0;
 i17 = 0;
 while (1) {
  i18 = HEAP32[H_BASE + 128 + (i17 << 3) >> 2] | 0;
  do {
   if ((HEAP32[i11 >> 2] | 0) == 0) {
    i19 = i16;
   } else {
    i20 = HEAP32[i12 >> 2] | 0;
    if ((i20 | 0) == 0) {
     i19 = i16;
     break;
    }
    if ((HEAP32[i20 + 4 >> 2] | 0) == -6) {
     i19 = i16;
     break;
    }
    HEAP32[i3 >> 2] = -6;
    HEAP32[i13 >> 2] = 0;
    i20 = __ZNK7WebCore12JSDictionary14tryGetPropertyEPKcRN3JSC7JSValueE(i10, i18, i6) | 0;
    do {
     if ((i20 | 0) == 2) {
      i21 = HEAP32[i11 >> 2] | 0;
      i22 = HEAP32[i14 + 4 >> 2] | 0;
      HEAP32[i15 >> 2] = HEAP32[i14 >> 2];
      HEAP32[i15 + 4 >> 2] = i22;
      __ZN7WebCore12JSDictionary12convertValueEPN3JSC9ExecStateENS1_7JSValueERb(i21, i8, i7);
      i21 = (HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i21 >> 2] & 0 | 0) == 0 & (HEAP32[i21 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i23 = 0;
       i24 = 1;
       break;
      }
      i23 = 2;
      i24 = (HEAP8[i7] & 1) == 0;
     } else {
      i23 = i20;
      i24 = 1;
     }
    } while (0);
    if ((i23 | 0) != 2 | i24) {
     i19 = i16;
     break;
    }
    i19 = HEAP8[H_BASE + 128 + (i17 << 3) + 4 | 0] | i16;
   }
  } while (0);
  i18 = i17 + 1 | 0;
  if (i18 >>> 0 < 6 >>> 0) {
   i16 = i19;
   i17 = i18;
  } else {
   break;
  }
 }
 _memset(i9 | 0, 0, 20) | 0;
 do {
  if ((HEAP32[i11 >> 2] | 0) == 0) {
   i25 = 0;
  } else {
   i17 = HEAP32[i12 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i25 = 0;
    break;
   }
   if ((HEAP32[i17 + 4 >> 2] | 0) == -6) {
    i25 = 0;
    break;
   }
   i25 = (__ZNK7WebCore12JSDictionary23tryGetPropertyAndResultIN3WTF7HashSetINS2_12AtomicStringENS2_16AtomicStringHashENS2_10HashTraitsIS4_EEEES8_EENS0_17GetPropertyResultEPKcPT_PFvSD_RKT0_E(i10, H_BASE + 8 | 0, i9, F_BASE_vii + 2 | 0) | 0) == 2;
  }
 } while (0);
 i10 = i25 ? i19 | 16 : i19;
 i19 = i10 & 255;
 if ((i19 & 7 | 0) == 0 | (i19 & 34 | 0) == 32 | (i19 & 18 | 0) == 16 | (i19 & 68 | 0) == 64) {
  HEAP32[i4 >> 2] = 12;
 } else {
  __ZN7WebCore4Node24registerMutationObserverEPNS_16MutationObserverEhRKN3WTF7HashSetINS3_12AtomicStringENS3_16AtomicStringHashENS3_10HashTraitsIS5_EEEE(i2, i1, i10, i9);
 }
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = HEAP32[i9 + 4 >> 2] | 0;
 if ((i1 | 0) > 0) {
  i9 = 0;
  while (1) {
   i2 = HEAP32[i10 + (i9 << 2) >> 2] | 0;
   i4 = i2;
   do {
    if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
     i19 = i2 | 0;
     i25 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i19 >> 2] = i25;
      break;
     }
    }
   } while (0);
   i9 = i9 + 1 | 0;
   if ((i9 | 0) >= (i1 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i10);
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore16MutationObserverEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
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
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore16MutationObserverEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i8, 0) | 0;
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
  } else {
   i13 = (i9 >>> 23) + ~i9 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i3;
   i17 = i7;
   i18 = i11;
   while (1) {
    if ((i18 | 0) == (i8 | 0)) {
     i19 = 8;
     break;
    }
    i20 = (i18 | 0) == -1 ? i17 : i15;
    i21 = (i14 | 0) == 0 ? i13 : i14;
    i22 = i21 + i16 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i19 = 10;
     break;
    } else {
     i14 = i21;
     i15 = i20;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
   if ((i19 | 0) == 8) {
    i18 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i16 = i1;
    HEAP32[i16 >> 2] = i17;
    HEAP32[i16 + 4 >> 2] = i18;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i19 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i18 = i2 + 16 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) - 1;
    i12 = i20;
    break;
   }
  }
 } while (0);
 i20 = i4 | 0;
 i4 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i12 | 0;
 i23 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = i4;
 do {
  if ((i23 | 0) != 0) {
   i4 = i23 | 0;
   i20 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) == 0) {
    __ZN7WebCore16MutationObserverD2Ev(i23);
    __ZN3WTF8fastFreeEPv(i23);
    break;
   } else {
    HEAP32[i4 >> 2] = i20;
    break;
   }
  }
 } while (0);
 i23 = i2 + 12 | 0;
 i20 = (HEAP32[i23 >> 2] | 0) + 1 | 0;
 HEAP32[i23 >> 2] = i20;
 i23 = i2 + 4 | 0;
 i4 = HEAP32[i23 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i20 << 1 | 0) < (i4 | 0)) {
  i25 = i12;
  i26 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i27 = 8;
  } else {
   i19 = i4 << 1;
   i27 = (i20 * 6 & -1 | 0) < (i19 | 0) ? i4 : i19;
  }
  i19 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore16MutationObserverEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i27, i12) | 0;
  i25 = i19;
  i26 = HEAP32[i23 >> 2] | 0;
 }
 i23 = (HEAP32[i5 >> 2] | 0) + (i26 << 2) | 0;
 i26 = i1;
 HEAP32[i26 >> 2] = i25;
 HEAP32[i26 + 4 >> 2] = i23;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore28MutationObserverRegistrationES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore28MutationObserverRegistrationES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
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
  i26 = __ZN3WTF9HashTableIPN7WebCore28MutationObserverRegistrationES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
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
function __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
   i18 = i17 >>> 7;
   i19 = (i17 >>> 30) + ~i18 | 0;
   i17 = i19 << 12 ^ i19;
   i19 = i17 >>> 7 ^ i17;
   i17 = i19 << 2 ^ i19;
   i19 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i18 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 2) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 6;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if ((i23 | 0) == (i13 | 0)) {
      i27 = i22;
      i28 = i13;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i18 | 0) == 0 ? i19 : i18;
    i17 = i23 + i21 | 0;
    i18 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 6) {
    i25 = 0;
    i18 = (i20 | 0) != 0 ? i20 : i22;
    i27 = i18;
    i28 = HEAP32[i18 >> 2] | 0;
   }
   i18 = i27 | 0;
   do {
    if ((i28 | 0) != 0) {
     i17 = i28 | 0;
     i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i28);
      break;
     } else {
      HEAP32[i17 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i18 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i29 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i29 << 2) >> 2] | 0;
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
  i1 = i29 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i29 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i8 + 16 >> 2] | 0;
 i9 = i3 >>> 7;
 i7 = (i3 >>> 30) + ~i9 | 0;
 i3 = i7 << 12 ^ i7;
 i7 = i3 >>> 7 ^ i3;
 i3 = i7 << 2 ^ i7;
 i7 = i3 >>> 20 ^ i3 | 1;
 i3 = 0;
 i11 = i9;
 i9 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i10 + (i12 << 2) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if ((i14 | 0) == (i8 | 0)) {
    i17 = 8;
    break;
   } else {
    i16 = i3;
   }
  }
  i14 = (i9 | 0) == 0 ? i7 : i9;
  i3 = i16;
  i11 = i14 + i12 | 0;
  i9 = i14;
 }
 if ((i17 | 0) == 8) {
  i17 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i3 | 0) == 0) {
  i18 = i13;
 } else {
  HEAP32[i3 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i3;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i13 | 0) != 0) {
   i3 = i13 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i4 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i4;
 i13 = i2 + 4 | 0;
 i3 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i3 | 0)) {
  i19 = i18;
  i20 = i3;
 } else {
  if ((i3 | 0) == 0) {
   i21 = 8;
  } else {
   i17 = i3 << 1;
   i21 = (i4 * 6 & -1 | 0) < (i17 | 0) ? i3 : i17;
  }
  i17 = __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i21, i18) | 0;
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
function __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_EaSERKS6_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 _memset(i5 | 0, 0, 20) | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 i8 = i6 + (i7 << 2) | 0;
 L1 : do {
  if ((HEAP32[i2 + 12 >> 2] | 0) != 0) {
   L3 : do {
    if ((i7 | 0) == 0) {
     i9 = i6;
    } else {
     i10 = i6;
     while (1) {
      i11 = HEAP32[i10 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i9 = i10;
       break L3;
      }
      i10 = i10 + 4 | 0;
      if ((i10 | 0) == (i8 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i9 | 0) == (i8 | 0)) {
    break;
   } else {
    i12 = i9;
   }
   while (1) {
    __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i4, i5, i12, i12);
    i10 = i12 + 4 | 0;
    if ((i10 | 0) == (i8 | 0)) {
     break L1;
    } else {
     i13 = i10;
    }
    while (1) {
     i10 = HEAP32[i13 >> 2] | 0;
     if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
      break;
     }
     i10 = i13 + 4 | 0;
     if ((i10 | 0) == (i8 | 0)) {
      break L1;
     } else {
      i13 = i10;
     }
    }
    if ((i13 | 0) == (i8 | 0)) {
     break;
    } else {
     i12 = i13;
    }
   }
  }
 } while (0);
 i13 = i1 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 i8 = i5 | 0;
 HEAP32[i13 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i12;
 i8 = i1 + 4 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 i4 = i5 + 4 | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i13;
 i4 = i1 + 8 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 i9 = i5 + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i9 >> 2] = i8;
 i8 = i1 + 12 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i4 = i5 + 12 | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i9;
 i9 = i1 + 16 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i8 = i5 + 16 | 0;
 HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i4;
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return i1 | 0;
 }
 if ((i13 | 0) > 0) {
  i4 = 0;
  while (1) {
   i8 = HEAP32[i12 + (i4 << 2) >> 2] | 0;
   i9 = i8;
   do {
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i5 = i8 | 0;
     i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i5 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i4 = i4 + 1 | 0;
   if ((i4 | 0) >= (i13 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i12);
 STACKTOP = i3;
 return i1 | 0;
}
function __ZNK7WebCore12JSDictionary23tryGetPropertyAndResultIN3WTF7HashSetINS2_12AtomicStringENS2_16AtomicStringHashENS2_10HashTraitsIS4_EEEES8_EENS0_17GetPropertyResultEPKcPT_PFvSD_RKT0_E(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 32 | 0;
 HEAP32[i6 + 4 >> 2] = -6;
 HEAP32[i6 >> 2] = 0;
 i9 = __ZNK7WebCore12JSDictionary14tryGetPropertyEPKcRN3JSC7JSValueE(i1, i2, i6) | 0;
 if ((i9 | 0) != 2) {
  i10 = i9;
  STACKTOP = i5;
  return i10 | 0;
 }
 _memset(i7 | 0, 0, 20) | 0;
 i9 = i1 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 i2 = i6 | 0;
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 i11 = i8 | 0;
 HEAP32[i11 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i11 + 4 >> 2] = i6;
 __ZN7WebCore12JSDictionary12convertValueEPN3JSC9ExecStateENS1_7JSValueERN3WTF7HashSetINS5_12AtomicStringENS5_16AtomicStringHashENS5_10HashTraitsIS7_EEEE(i1, i8, i7);
 i8 = (HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 if ((HEAP32[i8 >> 2] & 0 | 0) == 0 & (HEAP32[i8 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
  FUNCTION_TABLE_vii[i4 & 7](i3, i7);
  i3 = HEAP32[i7 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i10 = 2;
   STACKTOP = i5;
   return i10 | 0;
  }
  i4 = HEAP32[i7 + 4 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i8 = 0;
   while (1) {
    i9 = HEAP32[i3 + (i8 << 2) >> 2] | 0;
    i1 = i9;
    do {
     if (!((i1 | 0) == (-1 | 0) | (i1 | 0) == 0)) {
      i6 = i9 | 0;
      i11 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
      if ((i11 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i9);
       break;
      } else {
       HEAP32[i6 >> 2] = i11;
       break;
      }
     }
    } while (0);
    i8 = i8 + 1 | 0;
    if ((i8 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
  i10 = 2;
  STACKTOP = i5;
  return i10 | 0;
 } else {
  i3 = HEAP32[i7 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i10 = 0;
   STACKTOP = i5;
   return i10 | 0;
  }
  i4 = HEAP32[i7 + 4 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i7 = 0;
   while (1) {
    i8 = HEAP32[i3 + (i7 << 2) >> 2] | 0;
    i9 = i8;
    do {
     if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
      i1 = i8 | 0;
      i11 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
      if ((i11 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i8);
       break;
      } else {
       HEAP32[i1 >> 2] = i11;
       break;
      }
     }
    } while (0);
    i7 = i7 + 1 | 0;
    if ((i7 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
  i10 = 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 return 0;
}
function __ZN3WTF9HashTableIPN7WebCore28MutationObserverRegistrationES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
function __ZN3WTF7HashSetINS_6RefPtrIN7WebCore16MutationObserverEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i1, i2) {
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
 i8 = i1 | 0;
 i3 = i1 + 4 | 0;
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 | 0;
   i12 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore16MutationObserverD2Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i6 >> 2] = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = -1;
 i7 = i1 + 16 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = i1 + 12 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 i7 = HEAP32[i3 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i7 | 0) & (i7 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore16MutationObserverEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i8, (i7 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN3WTF12copyToVectorINS_7HashSetINS_6RefPtrIN7WebCore16MutationObserverEEENS_7PtrHashIS5_EENS_10HashTraitsIS5_EEEENS_6VectorIS5_Lj0ENS_15CrashOnOverflowEEEEEvRKT_RT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 12 | 0;
 __ZN3WTF6VectorINS_6RefPtrIN7WebCore16MutationObserverEEELj0ENS_15CrashOnOverflowEE6resizeEj(i2, HEAP32[i3 >> 2] | 0);
 i4 = HEAP32[i1 >> 2] | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i4 + (i5 << 2) | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 L4 : do {
  if ((i5 | 0) == 0) {
   i6 = i4;
  } else {
   i3 = i4;
   while (1) {
    i7 = HEAP32[i3 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i6 = i3;
     break L4;
    }
    i3 = i3 + 4 | 0;
    if ((i3 | 0) == (i1 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i6 | 0) == (i1 | 0)) {
  return;
 }
 i4 = i2 + 8 | 0;
 i5 = i2 | 0;
 i2 = i6;
 i6 = 0;
 L13 : while (1) {
  if ((HEAP32[i4 >> 2] | 0) >>> 0 <= i6 >>> 0) {
   i8 = 8;
   break;
  }
  i3 = HEAP32[i5 >> 2] | 0;
  i7 = HEAP32[i2 >> 2] | 0;
  if ((i7 | 0) != 0) {
   i9 = i7 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  }
  i9 = i3 + (i6 << 2) | 0;
  i3 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i7;
  do {
   if ((i3 | 0) != 0) {
    i7 = i3 | 0;
    i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    if ((i9 | 0) == 0) {
     __ZN7WebCore16MutationObserverD2Ev(i3);
     __ZN3WTF8fastFreeEPv(i3);
     break;
    } else {
     HEAP32[i7 >> 2] = i9;
     break;
    }
   }
  } while (0);
  i3 = i2 + 4 | 0;
  if ((i3 | 0) == (i1 | 0)) {
   i8 = 20;
   break;
  } else {
   i10 = i3;
  }
  while (1) {
   i3 = HEAP32[i10 >> 2] | 0;
   if (!((i3 | 0) == (-1 | 0) | (i3 | 0) == 0)) {
    break;
   }
   i3 = i10 + 4 | 0;
   if ((i3 | 0) == (i1 | 0)) {
    i8 = 21;
    break L13;
   } else {
    i10 = i3;
   }
  }
  if ((i10 | 0) == (i1 | 0)) {
   i8 = 22;
   break;
  } else {
   i2 = i10;
   i6 = i6 + 1 | 0;
  }
 }
 if ((i8 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i8 | 0) == 20) {
  return;
 } else if ((i8 | 0) == 21) {
  return;
 } else if ((i8 | 0) == 22) {
  return;
 }
}
function ___ZNSt3__17__sort4IRZN7WebCore16MutationObserver19deliverAllMutationsEvE3$_0PN3WTF6RefPtrIS2_EEEEjT0_S9_S9_S9_T__(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 i6 = i1 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 i7 = HEAP32[i2 + 40 >> 2] | 0;
 i8 = i1 + 40 | 0;
 i9 = i3 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 i10 = (HEAP32[i3 + 40 >> 2] | 0) >>> 0 < i7 >>> 0;
 do {
  if (i7 >>> 0 < (HEAP32[i8 >> 2] | 0) >>> 0) {
   if (i10) {
    HEAP32[i6 >> 2] = i3;
    HEAP32[i9 >> 2] = i1;
    i11 = 1;
    i12 = i1;
    break;
   }
   HEAP32[i6 >> 2] = i2;
   HEAP32[i5 >> 2] = i1;
   i13 = HEAP32[i9 >> 2] | 0;
   if ((HEAP32[i13 + 40 >> 2] | 0) >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
    i11 = 1;
    i12 = i13;
    break;
   }
   HEAP32[i5 >> 2] = i13;
   HEAP32[i9 >> 2] = i1;
   i11 = 2;
   i12 = i1;
  } else {
   if (!i10) {
    i11 = 0;
    i12 = i3;
    break;
   }
   HEAP32[i5 >> 2] = i3;
   HEAP32[i9 >> 2] = i2;
   i13 = HEAP32[i5 >> 2] | 0;
   i14 = HEAP32[i6 >> 2] | 0;
   if ((HEAP32[i13 + 40 >> 2] | 0) >>> 0 >= (HEAP32[i14 + 40 >> 2] | 0) >>> 0) {
    i11 = 1;
    i12 = i2;
    break;
   }
   HEAP32[i6 >> 2] = i13;
   HEAP32[i5 >> 2] = i14;
   i11 = 2;
   i12 = HEAP32[i9 >> 2] | 0;
  }
 } while (0);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i4 + 40 >> 2] | 0) >>> 0 >= (HEAP32[i12 + 40 >> 2] | 0) >>> 0) {
  i15 = i11;
  return i15 | 0;
 }
 HEAP32[i9 >> 2] = i4;
 HEAP32[i2 >> 2] = i12;
 i12 = HEAP32[i9 >> 2] | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i12 + 40 >> 2] | 0) >>> 0 >= (HEAP32[i2 + 40 >> 2] | 0) >>> 0) {
  i15 = i11 + 1 | 0;
  return i15 | 0;
 }
 HEAP32[i5 >> 2] = i12;
 HEAP32[i9 >> 2] = i2;
 i2 = HEAP32[i5 >> 2] | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i2 + 40 >> 2] | 0) >>> 0 >= (HEAP32[i9 + 40 >> 2] | 0) >>> 0) {
  i15 = i11 + 2 | 0;
  return i15 | 0;
 }
 HEAP32[i6 >> 2] = i2;
 HEAP32[i5 >> 2] = i9;
 i15 = i11 + 3 | 0;
 return i15 | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore16MutationObserverEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i5 = i2;
 i6 = i5 + ~(i5 << 15) | 0;
 i5 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i5 >>> 6 ^ i5;
 i5 = i6 + ~(i6 << 11) | 0;
 i6 = i5 >>> 16 ^ i5;
 i5 = i6 & i4;
 i7 = i3 + (i5 << 2) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L1 : do {
  if ((i8 | 0) == 0) {
   i9 = 0;
   i10 = i7;
   i11 = 3;
  } else {
   i12 = (i6 >>> 23) + ~i6 | 0;
   i13 = i12 << 12 ^ i12;
   i12 = i13 >>> 7 ^ i13;
   i13 = i12 << 2 ^ i12;
   i12 = i13 >>> 20 ^ i13 | 1;
   i13 = 0;
   i14 = 0;
   i15 = i5;
   i16 = i7;
   i17 = i8;
   while (1) {
    if ((i17 | 0) == (i2 | 0)) {
     i18 = i16;
     break L1;
    }
    i19 = (i17 | 0) == -1 ? i16 : i13;
    i20 = (i14 | 0) == 0 ? i12 : i14;
    i21 = i20 + i15 & i4;
    i22 = i3 + (i21 << 2) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    if ((i23 | 0) == 0) {
     i9 = i19;
     i10 = i22;
     i11 = 3;
     break;
    } else {
     i13 = i19;
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
    }
   }
  }
 } while (0);
 if ((i11 | 0) == 3) {
  i18 = (i9 | 0) != 0 ? i9 : i10;
 }
 i10 = i18 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i24 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i10 >> 2] = i24;
  return i18 | 0;
 }
 i11 = i9 | 0;
 i3 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore16MutationObserverD2Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
  i24 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i10 >> 2] = i24;
  return i18 | 0;
 } else {
  HEAP32[i11 >> 2] = i3;
  i24 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i10 >> 2] = i24;
  return i18 | 0;
 }
 return 0;
}
function __ZN3WTF7HashSetIPN7WebCore28MutationObserverRegistrationENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
 __ZN3WTF9HashTableIPN7WebCore28MutationObserverRegistrationES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore16MutationObserver21enqueueMutationRecordEN3WTF10PassRefPtrINS_14MutationRecordEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i1 + 8 | 0;
 i6 = i1 + 16 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore14MutationRecordEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7 + 1 | 0);
  i8 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i6 >> 2] << 2) | 0;
  i9 = i2 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i8 >> 2] = i10;
 } else {
  i10 = (HEAP32[i5 >> 2] | 0) + (i7 << 2) | 0;
  i7 = i2 | 0;
  i2 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i10 >> 2] = i2;
 }
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 if (HEAP8[H_BASE + 192 | 0] | 0) {
  i11 = HEAP32[H_BASE + 208 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(20) | 0;
  i2 = i6;
  _memset(i6 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 208 >> 2] = i2;
  HEAP8[H_BASE + 192 | 0] = 1;
  i11 = i2;
 }
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i6 = i1 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore16MutationObserverEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i3 + 8 | 0, i11 | 0, i4, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i4 | 0;
 i11 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) == 0) {
  __ZN7WebCore16MutationObserverD2Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i11;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore16MutationObserverEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i1, i2, i3) {
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
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore16MutationObserverEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) | 0;
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
  i1 = HEAP32[i7 + (i13 << 2) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 | 0;
    i3 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
    if ((i3 | 0) == 0) {
     __ZN7WebCore16MutationObserverD2Ev(i1);
     __ZN3WTF8fastFreeEPv(i1);
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
function __ZNK7WebCore16MutationObserver16getObservedNodesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 _memset(i1 | 0, 0, 20) | 0;
 i3 = i2 + 20 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 24 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i4 + (i6 << 2) | 0;
 if ((HEAP32[i2 + 32 >> 2] | 0) == 0) {
  return;
 }
 L4 : do {
  if ((i6 | 0) == 0) {
   i8 = i4;
  } else {
   i2 = i4;
   while (1) {
    i9 = HEAP32[i2 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i8 = i2;
     break L4;
    }
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i7 | 0)) {
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
  __ZNK7WebCore28MutationObserverRegistration25addRegistrationNodesToSetERN3WTF7HashSetIPNS_4NodeENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EEEE(HEAP32[i10 >> 2] | 0, i1);
  i8 = i10 + 4 | 0;
  L14 : do {
   if ((i8 | 0) == (i7 | 0)) {
    i11 = i7;
   } else {
    i4 = i8;
    while (1) {
     i6 = HEAP32[i4 >> 2] | 0;
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i11 = i4;
      break L14;
     }
     i6 = i4 + 4 | 0;
     if ((i6 | 0) == (i7 | 0)) {
      i11 = i7;
      break;
     } else {
      i4 = i6;
     }
    }
   }
  } while (0);
  if ((i11 | 0) == ((HEAP32[i3 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) | 0)) {
   break;
  } else {
   i10 = i11;
  }
 }
 return;
}
function __ZN7WebCore16MutationObserverD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 + 4 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 3](i9);
    }
   } while (0);
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
  HEAP32[i1 + 12 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = i4;
  return;
 }
 i4 = i1 - 4 | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 3](i4);
 return;
}
function __ZN7WebCore16MutationObserverD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 + 4 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 3](i9);
    }
   } while (0);
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
  HEAP32[i1 + 12 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = i4;
  return;
 }
 i4 = i1 - 4 | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 3](i4);
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore16MutationObserverEEELj0ENS_15CrashOnOverflowEE6resizeEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (i4 >>> 0 < i2 >>> 0) {
  if ((HEAP32[i1 + 4 >> 2] | 0) >>> 0 < i2 >>> 0) {
   __ZN3WTF6VectorINS_6RefPtrIN7WebCore16MutationObserverEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2);
  }
  i5 = HEAP32[i1 >> 2] | 0;
  if ((i5 | 0) == 0) {
   HEAP32[i3 >> 2] = i2;
   return;
  }
  i6 = HEAP32[i3 >> 2] | 0;
  _memset(i5 + (i6 << 2) | 0, 0, i2 - i6 << 2 | 0) | 0;
  HEAP32[i3 >> 2] = i2;
  return;
 }
 i6 = HEAP32[i1 >> 2] | 0;
 i1 = i6 + (i4 << 2) | 0;
 if ((i4 | 0) == (i2 | 0)) {
  HEAP32[i3 >> 2] = i2;
  return;
 }
 i4 = i6 + (i2 << 2) | 0;
 while (1) {
  i6 = HEAP32[i4 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i5 = i6 | 0;
    i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
    if ((i7 | 0) == 0) {
     __ZN7WebCore16MutationObserverD2Ev(i6);
     __ZN3WTF8fastFreeEPv(i6);
     break;
    } else {
     HEAP32[i5 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i4 = i4 + 4 | 0;
  if ((i4 | 0) == (i1 | 0)) {
   break;
  }
 }
 HEAP32[i3 >> 2] = i2;
 return;
}
function __ZN7WebCore16MutationObserver27setHasTransientRegistrationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 192 | 0] | 0) {
  i4 = HEAP32[H_BASE + 208 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(20) | 0;
  i6 = i5;
  _memset(i5 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 208 >> 2] = i6;
  HEAP8[H_BASE + 192 | 0] = 1;
  i4 = i6;
 }
 i6 = i3 | 0;
 HEAP32[i6 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i5 = i1 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore16MutationObserverEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i2 + 8 | 0, i4 | 0, i3, i3);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i3 | 0;
 i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore16MutationObserverD2Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i6 >> 2] = i4;
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore16MutationObserverEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore14MutationRecordEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore16MutationObserver18observationStartedEPNS_28MutationObserverRegistrationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore28MutationObserverRegistrationES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 20 | 0, i4, i4);
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
function __ZN7WebCore16MutationObserver6createEN3WTF10PassRefPtrINS_16MutationCallbackEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = __ZN3WTF10fastMallocEj(44) | 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i3 >> 2] = 1;
 HEAP32[i3 + 4 >> 2] = i2;
 _memset(i3 + 8 | 0, 0, 32) | 0;
 i2 = HEAP32[H_BASE + 216 >> 2] | 0;
 HEAP32[H_BASE + 216 >> 2] = i2 + 1;
 HEAP32[i3 + 40 >> 2] = i2;
 HEAP32[i1 >> 2] = i3;
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
function __ZN7WebCore16MutationObserver16observationEndedEPNS_28MutationObserverRegistrationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore28MutationObserverRegistrationENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 20 | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16MutationObserverC2EN3WTF10PassRefPtrINS_16MutationCallbackEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 >> 2] = 1;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = i2;
 _memset(i1 + 8 | 0, 0, 32) | 0;
 i2 = HEAP32[H_BASE + 216 >> 2] | 0;
 HEAP32[H_BASE + 216 >> 2] = i2 + 1;
 HEAP32[i1 + 40 >> 2] = i2;
 return;
}
function __ZN7WebCore16MutationObserverC1EN3WTF10PassRefPtrINS_16MutationCallbackEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 >> 2] = 1;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = i2;
 _memset(i1 + 8 | 0, 0, 32) | 0;
 i2 = HEAP32[H_BASE + 216 >> 2] | 0;
 HEAP32[H_BASE + 216 >> 2] = i2 + 1;
 HEAP32[i1 + 40 >> 2] = i2;
 return;
}
function __ZN7WebCore16MutationObserver11takeRecordsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 + 16 | 0;
 HEAP32[i1 + 8 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i3 >> 2] = 0;
 i3 = i2 + 8 | 0;
 HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i3 >> 2] = 0;
 i3 = i2 + 12 | 0;
 HEAP32[i1 + 4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i3 >> 2] = 0;
 return;
}
function __ZN7WebCore12JSDictionary14IdentitySetterIN3WTF7HashSetINS2_12AtomicStringENS2_16AtomicStringHashENS2_10HashTraitsIS4_EEEEE14identitySetterEPS8_RKS8_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_EaSERKS6_(i1 | 0, i2 | 0) | 0;
 return;
}
function __ZN7WebCore16MutationObserver15validateOptionsEh(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 & 255;
 if ((i2 & 7 | 0) == 0 | (i2 & 34 | 0) == 32 | (i2 & 18 | 0) == 16) {
  i3 = 0;
  return i3 | 0;
 }
 if ((i2 & 4 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = (i2 & 64 | 0) == 0;
 return i3 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 128 >> 2] = H_BASE + 112;
 HEAP32[H_BASE + 136 >> 2] = H_BASE + 96;
 HEAP32[H_BASE + 144 >> 2] = H_BASE + 80;
 HEAP32[H_BASE + 152 >> 2] = H_BASE + 72;
 HEAP32[H_BASE + 160 >> 2] = H_BASE + 48;
 HEAP32[H_BASE + 168 >> 2] = H_BASE + 24;
}
function __ZN7WebCore16MutationObserver10canDeliverEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 return (HEAP8[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 1](i2) | 0) + 136 | 0] & 1) == 0 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
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
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore16MutationObserverD2Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore12JSDictionary14IdentitySetterIN3WTF7HashSetINS2_12AtomicStringENS2_16AtomicStringHashENS2_10HashTraitsIS4_EEEEE14identitySetterEPS8_RKS8_,b1,__ZN7WebCore16MutationObserverC2EN3WTF10PassRefPtrINS_16MutationCallbackEEE,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF9HashTableIPN7WebCore28MutationObserverRegistrationES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","_strlen","__ZN7WebCore16MutationObserver21enqueueMutationRecordEN3WTF10PassRefPtrINS_14MutationRecordEEE","__ZN7WebCore16MutationObserver10disconnectEv","__ZN3WTF7HashSetINS_6RefPtrIN7WebCore16MutationObserverEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_","__ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","__ZN7WebCore16MutationObserver10canDeliverEv","__ZN3WTF12copyToVectorINS_7HashSetINS_6RefPtrIN7WebCore16MutationObserverEEENS_7PtrHashIS5_EENS_10HashTraitsIS5_EEEENS_6VectorIS5_Lj0ENS_15CrashOnOverflowEEEEEvRKT_RT0_","___ZNSt3__17__sort4IRZN7WebCore16MutationObserver19deliverAllMutationsEvE3$_0PN3WTF6RefPtrIS2_EEEEjT0_S9_S9_S9_T__","__ZN7WebCore16MutationObserver18observationStartedEPNS_28MutationObserverRegistrationE","__ZN7WebCore16MutationObserver27setHasTransientRegistrationEv","_memset","__ZN3WTF7HashSetIPN7WebCore28MutationObserverRegistrationENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore16MutationObserverEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_","__ZN7WebCore16MutationObserver7deliverEv","__ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_","__ZN7WebCore16MutationObserver19deliverAllMutationsEv","__ZN3WTF6VectorINS_6RefPtrIN7WebCore14MutationRecordEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore16MutationObserver16observationEndedEPNS_28MutationObserverRegistrationE","__ZNK7WebCore12JSDictionary23tryGetPropertyAndResultIN3WTF7HashSetINS2_12AtomicStringENS2_16AtomicStringHashENS2_10HashTraitsIS4_EEEES8_EENS0_17GetPropertyResultEPKcPT_PFvSD_RKT0_E","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF6VectorINS_6RefPtrIN7WebCore16MutationObserverEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore16MutationObserver6createEN3WTF10PassRefPtrINS_16MutationCallbackEEE","__ZN7WebCore16MutationObserver11takeRecordsEv","___ZNSt3__16__sortIRZN7WebCore16MutationObserver19deliverAllMutationsEvE3$_0PN3WTF6RefPtrIS2_EEEEvT0_S9_T__","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore16MutationObserverEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_","___ZNSt3__127__insertion_sort_incompleteIRZN7WebCore16MutationObserver19deliverAllMutationsEvE3$_0PN3WTF6RefPtrIS2_EEEEbT0_S9_T__","__ZN7WebCore12JSDictionary14IdentitySetterIN3WTF7HashSetINS2_12AtomicStringENS2_16AtomicStringHashENS2_10HashTraitsIS4_EEEEE14identitySetterEPS8_RKS8_","__ZN7WebCore16MutationObserver7observeEPNS_4NodeERKNS_10DictionaryERi","__ZN3WTF6VectorINS_6RefPtrIN7WebCore16MutationObserverEEELj0ENS_15CrashOnOverflowEE6resizeEj","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore16MutationObserverEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore16MutationObserverEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZN7WebCore16MutationObserver15validateOptionsEh","__ZN7WebCore16MutationObserverC2EN3WTF10PassRefPtrINS_16MutationCallbackEEE","__ZN3WTF9HashTableIPN7WebCore28MutationObserverRegistrationES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","_memcpy","__ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_EaSERKS6_","__ZN7WebCore16MutationObserverD2Ev","__ZNK7WebCore16MutationObserver16getObservedNodesEv"]

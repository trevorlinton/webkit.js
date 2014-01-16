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
var __ZN7WebCore29MergeIdenticalElementsCommandC1EN3WTF10PassRefPtrINS_7ElementEEES4_;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var __ZTVN7WebCore29MergeIdenticalElementsCommandE=(H_BASE+8)|0;
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
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore29MergeIdenticalElementsCommand9doUnapplyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 144 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = i1 + 140 | 0;
 i8 = HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i8 | 0, 0, 1) | 0)) {
    break;
   }
   HEAP32[i3 >> 2] = 0;
   i9 = i1 + 136 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = i4 | 0;
   HEAP32[i11 >> 2] = i10;
   if ((i10 | 0) != 0) {
    i12 = i10 + 8 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   }
   __ZN7WebCore13ContainerNode12insertBeforeEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri(i8, i4, HEAP32[i6 >> 2] | 0, i3) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i11 = i12 + 8 | 0;
     i10 = i11 | 0;
     i13 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     HEAP32[i10 >> 2] = i13;
     if ((i13 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
    }
   } while (0);
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    break;
   }
   i12 = HEAP32[(HEAP32[i6 >> 2] | 0) + 36 >> 2] | 0;
   i11 = (i12 | 0) == 0;
   if ((i7 | 0) != (i12 | 0) & (i11 ^ 1)) {
    i14 = 0;
    i15 = 0;
    i16 = 0;
    i17 = i12;
    i18 = i11;
   } else {
    break;
   }
   L13 : while (1) {
    do {
     if ((i14 | 0) == (i15 | 0)) {
      i11 = i15 + 1 | 0;
      i12 = i11 + (i15 >>> 2) | 0;
      i13 = i12 >>> 0 > 16 >>> 0 ? i12 : 16;
      i12 = i13 >>> 0 > i11 >>> 0 ? i13 : i11;
      do {
       if (i15 >>> 0 < i12 >>> 0) {
        if (i12 >>> 0 > 1073741823 >>> 0) {
         i19 = 19;
         break L13;
        }
        i13 = __ZN3WTF18fastMallocGoodSizeEj(i12 << 2) | 0;
        i10 = i13 >>> 2;
        i20 = __ZN3WTF10fastMallocEj(i13) | 0;
        i13 = i20;
        i21 = i16;
        _memcpy(i20 | 0, i21 | 0, i15 << 2) | 0;
        if ((i16 | 0) == 0) {
         i22 = i13;
         i23 = i10;
         break;
        }
        i20 = (i13 | 0) == (i16 | 0);
        __ZN3WTF8fastFreeEPv(i21);
        i22 = i20 ? 0 : i13;
        i23 = i20 ? 0 : i10;
       } else {
        i22 = i16;
        i23 = i15;
       }
      } while (0);
      HEAP32[i22 + (i15 << 2) >> 2] = i17;
      if (i18) {
       i24 = i22;
       i25 = i23;
       i26 = i11;
       break;
      }
      i12 = i17 + 8 | 0;
      HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
      i24 = i22;
      i25 = i23;
      i26 = i11;
     } else {
      HEAP32[i16 + (i14 << 2) >> 2] = i17;
      if (!i18) {
       i12 = i17 + 8 | 0;
       HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
      }
      i24 = i16;
      i25 = i15;
      i26 = i14 + 1 | 0;
     }
    } while (0);
    i12 = HEAP32[i17 + 28 >> 2] | 0;
    i10 = (i12 | 0) == 0;
    if ((i7 | 0) != (i12 | 0) & (i10 ^ 1)) {
     i14 = i26;
     i15 = i25;
     i16 = i24;
     i17 = i12;
     i18 = i10;
    } else {
     break;
    }
   }
   if ((i19 | 0) == 19) {
    _WTFCrash();
   }
   i10 = i24;
   i12 = (i26 | 0) == 0;
   do {
    if (!i12) {
     i20 = i5 | 0;
     i13 = 0;
     while (1) {
      i21 = HEAP32[i9 >> 2] | 0;
      i27 = i24 + (i13 << 2) | 0;
      HEAP32[i20 >> 2] = HEAP32[i27 >> 2];
      HEAP32[i27 >> 2] = 0;
      __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i21, i5, i3) | 0;
      i21 = HEAP32[i20 >> 2] | 0;
      do {
       if ((i21 | 0) != 0) {
        i27 = i21 + 8 | 0;
        i28 = i27 | 0;
        i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
        HEAP32[i28 >> 2] = i29;
        if ((i29 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
       }
      } while (0);
      i13 = i13 + 1 | 0;
      if (i13 >>> 0 >= i26 >>> 0) {
       break;
      }
     }
     if (i12) {
      break;
     }
     i13 = i24 + (i26 << 2) | 0;
     i20 = i24;
     while (1) {
      i21 = HEAP32[i20 >> 2] | 0;
      do {
       if ((i21 | 0) != 0) {
        i11 = i21 + 8 | 0;
        i27 = i11 | 0;
        i29 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
        HEAP32[i27 >> 2] = i29;
        if ((i29 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
       }
      } while (0);
      i20 = i20 + 4 | 0;
      if ((i20 | 0) == (i13 | 0)) {
       break;
      }
     }
    }
   } while (0);
   if ((i24 | 0) == 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i10);
  }
 } while (0);
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i24 = i7 + 8 | 0;
 i7 = i24 | 0;
 i26 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i26;
 if ((i26 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore29MergeIdenticalElementsCommand7doApplyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 136 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i1 + 140 | 0;
 if ((HEAP32[i8 >> 2] | 0) != (HEAP32[i7 + 28 >> 2] | 0)) {
  STACKTOP = i2;
  return;
 }
 if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i7 | 0, 0, 1) | 0)) {
  STACKTOP = i2;
  return;
 }
 if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(HEAP32[i8 >> 2] | 0, 0, 1) | 0)) {
  STACKTOP = i2;
  return;
 }
 i7 = HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i9 = i7 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = i1 + 144 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i7;
 do {
  if ((i1 | 0) != 0) {
   i7 = i1 + 8 | 0;
   i10 = i7 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[(HEAP32[i6 >> 2] | 0) + 36 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i12 = 0;
   i13 = 0;
   i14 = 0;
   i15 = 1;
  } else {
   i7 = 0;
   i11 = 0;
   i10 = 0;
   i16 = i1;
   L19 : while (1) {
    if ((i7 | 0) == (i11 | 0)) {
     i17 = i11 + 1 | 0;
     i18 = i17 + (i11 >>> 2) | 0;
     i19 = i18 >>> 0 > 16 >>> 0 ? i18 : 16;
     i18 = i19 >>> 0 > i17 >>> 0 ? i19 : i17;
     do {
      if (i11 >>> 0 < i18 >>> 0) {
       if (i18 >>> 0 > 1073741823 >>> 0) {
        i20 = 17;
        break L19;
       }
       i19 = __ZN3WTF18fastMallocGoodSizeEj(i18 << 2) | 0;
       i21 = i19 >>> 2;
       i22 = __ZN3WTF10fastMallocEj(i19) | 0;
       i19 = i22;
       i23 = i10;
       _memcpy(i22 | 0, i23 | 0, i11 << 2) | 0;
       if ((i10 | 0) == 0) {
        i24 = i19;
        i25 = i21;
        break;
       }
       i22 = (i19 | 0) == (i10 | 0);
       __ZN3WTF8fastFreeEPv(i23);
       i24 = i22 ? 0 : i19;
       i25 = i22 ? 0 : i21;
      } else {
       i24 = i10;
       i25 = i11;
      }
     } while (0);
     HEAP32[i24 + (i11 << 2) >> 2] = i16;
     i18 = i16 + 8 | 0;
     HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
     i26 = i24;
     i27 = i25;
     i28 = i17;
    } else {
     HEAP32[i10 + (i7 << 2) >> 2] = i16;
     i18 = i16 + 8 | 0;
     HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
     i26 = i10;
     i27 = i11;
     i28 = i7 + 1 | 0;
    }
    i18 = HEAP32[i16 + 28 >> 2] | 0;
    if ((i18 | 0) == 0) {
     break;
    } else {
     i7 = i28;
     i11 = i27;
     i10 = i26;
     i16 = i18;
    }
   }
   if ((i20 | 0) == 17) {
    _WTFCrash();
   }
   i16 = i26;
   i10 = (i28 | 0) == 0;
   if (i10) {
    i12 = i26;
    i13 = 0;
    i14 = i16;
    i15 = 1;
    break;
   }
   i11 = i3 | 0;
   i7 = i4 | 0;
   i18 = 0;
   while (1) {
    i21 = HEAP32[i8 >> 2] | 0;
    i22 = i26 + (i18 << 2) | 0;
    HEAP32[i11 >> 2] = HEAP32[i22 >> 2];
    HEAP32[i22 >> 2] = 0;
    i22 = HEAP32[i9 >> 2] | 0;
    HEAP32[i7 >> 2] = 0;
    __ZN7WebCore13ContainerNode12insertBeforeEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri(i21, i3, i22, i7) | 0;
    i22 = HEAP32[i11 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i21 = i22 + 8 | 0;
      i19 = i21 | 0;
      i23 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
      HEAP32[i19 >> 2] = i23;
      if ((i23 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
     }
    } while (0);
    i22 = i18 + 1 | 0;
    if (i22 >>> 0 < i28 >>> 0) {
     i18 = i22;
    } else {
     i12 = i26;
     i13 = i28;
     i14 = i16;
     i15 = i10;
     break;
    }
   }
  }
 } while (0);
 i28 = HEAP32[i6 >> 2] | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore4Node6removeERi(i28, i6);
 if (!i15) {
  i15 = i12 + (i13 << 2) | 0;
  i13 = i12;
  while (1) {
   i6 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i28 = i6 + 8 | 0;
     i5 = i28 | 0;
     i26 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     HEAP32[i5 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
    }
   } while (0);
   i13 = i13 + 4 | 0;
   if ((i13 | 0) == (i15 | 0)) {
    break;
   }
  }
 }
 if ((i12 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF8fastFreeEPv(i14);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore29MergeIdenticalElementsCommandD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 144 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 140 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 136 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1 | 0;
  __ZN7WebCore11EditCommandD2Ev(i6);
  return;
 }
 i3 = i2 + 8 | 0;
 i2 = i3 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  i6 = i1 | 0;
  __ZN7WebCore11EditCommandD2Ev(i6);
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i6 = i1 | 0;
  __ZN7WebCore11EditCommandD2Ev(i6);
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i6 = i1 | 0;
 __ZN7WebCore11EditCommandD2Ev(i6);
 return;
}
function __ZN7WebCore29MergeIdenticalElementsCommandD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 144 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 140 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 136 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore11EditCommandD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
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
function __ZN7WebCore29MergeIdenticalElementsCommandC2EN3WTF10PassRefPtrINS_7ElementEEES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i2 | 0;
 __ZN7WebCore11EditCommandC2ERNS_8DocumentE(i1 | 0, HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 136 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 140 >> 2] = i3;
 HEAP32[i1 + 144 >> 2] = 0;
 return;
}
function __ZN7WebCore29MergeIdenticalElementsCommandC1EN3WTF10PassRefPtrINS_7ElementEEES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i2 | 0;
 __ZN7WebCore11EditCommandC2ERNS_8DocumentE(i1 | 0, HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 136 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 140 >> 2] = i3;
 HEAP32[i1 + 144 >> 2] = 0;
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
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 10;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function ii___ZNK7WebCore11EditCommand13editingActionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EditCommand13editingActionEv(i1 | 0) | 0;
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
function vi___ZN7WebCore17SimpleEditCommand9doReapplyEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17SimpleEditCommand9doReapplyEv(i1 | 0);
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
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function __ZNK7WebCore17SimpleEditCommand19isSimpleEditCommandEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZNK7WebCore11EditCommand24isEditCommandCompositionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11EditCommand22isCompositeEditCommandEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b2(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(2);
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore29MergeIdenticalElementsCommandD1Ev,b0,__ZN7WebCore29MergeIdenticalElementsCommand9doUnapplyEv,b0,__ZN7WebCore29MergeIdenticalElementsCommand7doApplyEv,b0,__ZN7WebCore29MergeIdenticalElementsCommandD0Ev,b0,vi___ZN7WebCore17SimpleEditCommand9doReapplyEv__wrapper,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_ii = [b1,b1,ii___ZNK7WebCore11EditCommand13editingActionEv__wrapper,b1,__ZNK7WebCore17SimpleEditCommand19isSimpleEditCommandEv,b1,__ZNK7WebCore11EditCommand24isEditCommandCompositionEv,b1,__ZNK7WebCore11EditCommand22isCompositeEditCommandEv,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_viii = [b2,b2,__ZN7WebCore29MergeIdenticalElementsCommandC2EN3WTF10PassRefPtrINS_7ElementEEES4_,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore29MergeIdenticalElementsCommandD1Ev","__ZN7WebCore29MergeIdenticalElementsCommand9doUnapplyEv","__ZN7WebCore29MergeIdenticalElementsCommand7doApplyEv","__ZNK7WebCore17SimpleEditCommand19isSimpleEditCommandEv","__ZN7WebCore29MergeIdenticalElementsCommandC2EN3WTF10PassRefPtrINS_7ElementEEES4_","_memset","__ZNK7WebCore11EditCommand24isEditCommandCompositionEv","_memcpy","__ZN7WebCore29MergeIdenticalElementsCommandD0Ev","__ZNK7WebCore11EditCommand22isCompositeEditCommandEv"]

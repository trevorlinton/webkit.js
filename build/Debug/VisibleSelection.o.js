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
H_BASE = parentModule["_malloc"](0 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 0;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore16VisibleSelectionC1Ev;
var __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb;
var __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb;
var __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb;
var __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b;
var __ZN7WebCore16VisibleSelectionC1EPKNS_5RangeENS_9EAffinityEb;
/* no memory initializer */
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
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore16VisibleSelection52setStartAndEndFromBaseAndExtentRespectingGranularityENS_15TextGranularityE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 624 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i3 + 64 | 0;
 i9 = i3 + 80 | 0;
 i10 = i3 + 96 | 0;
 i11 = i3 + 112 | 0;
 i12 = i3 + 128 | 0;
 i13 = i3 + 144 | 0;
 i14 = i3 + 160 | 0;
 i15 = i3 + 176 | 0;
 i16 = i3 + 192 | 0;
 i17 = i3 + 208 | 0;
 i18 = i3 + 224 | 0;
 i19 = i3 + 240 | 0;
 i20 = i3 + 256 | 0;
 i21 = i3 + 272 | 0;
 i22 = i3 + 288 | 0;
 i23 = i3 + 304 | 0;
 i24 = i3 + 320 | 0;
 i25 = i3 + 336 | 0;
 i26 = i3 + 352 | 0;
 i27 = i3 + 368 | 0;
 i28 = i3 + 384 | 0;
 i29 = i3 + 400 | 0;
 i30 = i3 + 416 | 0;
 i31 = i3 + 432 | 0;
 i32 = i3 + 448 | 0;
 i33 = i3 + 464 | 0;
 i34 = i3 + 480 | 0;
 i35 = i3 + 496 | 0;
 i36 = i3 + 512 | 0;
 i37 = i3 + 528 | 0;
 i38 = i3 + 544 | 0;
 i39 = i3 + 560 | 0;
 i40 = i3 + 576 | 0;
 i41 = i3 + 592 | 0;
 i42 = i3 + 608 | 0;
 i43 = i1 + 24 | 0;
 if ((HEAP8[i1 + 56 | 0] & 1) == 0) {
  i44 = HEAP32[i1 + 12 >> 2] | 0;
  if ((i44 | 0) != 0) {
   i45 = i44 + 8 | 0;
   HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
  }
  i45 = i43 | 0;
  i46 = HEAP32[i45 >> 2] | 0;
  HEAP32[i45 >> 2] = i44;
  do {
   if ((i46 | 0) != 0) {
    i44 = i46 + 8 | 0;
    i45 = i44 | 0;
    i47 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
    HEAP32[i45 >> 2] = i47;
    if ((i47 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
   }
  } while (0);
  HEAP32[i1 + 28 >> 2] = HEAP32[i1 + 16 >> 2];
  i46 = HEAP32[i1 + 20 >> 2] | 0;
  i44 = i1 + 32 | 0;
  i47 = i44;
  i45 = HEAP32[i47 >> 2] & -8 | i46 & 7;
  HEAP32[i47 >> 2] = i45;
  HEAP8[i44] = i45 & 255 & -9 | i46 & 8;
  i46 = HEAP32[i1 >> 2] | 0;
  if ((i46 | 0) != 0) {
   i45 = i46 + 8 | 0;
   HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
  }
  i45 = i1 + 36 | 0;
  i44 = HEAP32[i45 >> 2] | 0;
  HEAP32[i45 >> 2] = i46;
  do {
   if ((i44 | 0) != 0) {
    i46 = i44 + 8 | 0;
    i45 = i46 | 0;
    i47 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
    HEAP32[i45 >> 2] = i47;
    if ((i47 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
   }
  } while (0);
  HEAP32[i1 + 40 >> 2] = HEAP32[i1 + 4 >> 2];
  i44 = HEAP32[i1 + 8 >> 2] | 0;
  i46 = i1 + 44 | 0;
  i47 = i46;
  i45 = HEAP32[i47 >> 2] & -8 | i44 & 7;
  HEAP32[i47 >> 2] = i45;
  HEAP8[i46] = i45 & 255 & -9 | i44 & 8;
 } else {
  i44 = HEAP32[i1 >> 2] | 0;
  if ((i44 | 0) != 0) {
   i45 = i44 + 8 | 0;
   HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
  }
  i45 = i43 | 0;
  i46 = HEAP32[i45 >> 2] | 0;
  HEAP32[i45 >> 2] = i44;
  do {
   if ((i46 | 0) != 0) {
    i44 = i46 + 8 | 0;
    i45 = i44 | 0;
    i47 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
    HEAP32[i45 >> 2] = i47;
    if ((i47 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
   }
  } while (0);
  HEAP32[i1 + 28 >> 2] = HEAP32[i1 + 4 >> 2];
  i46 = HEAP32[i1 + 8 >> 2] | 0;
  i44 = i1 + 32 | 0;
  i47 = i44;
  i45 = HEAP32[i47 >> 2] & -8 | i46 & 7;
  HEAP32[i47 >> 2] = i45;
  HEAP8[i44] = i45 & 255 & -9 | i46 & 8;
  i46 = HEAP32[i1 + 12 >> 2] | 0;
  if ((i46 | 0) != 0) {
   i45 = i46 + 8 | 0;
   HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
  }
  i45 = i1 + 36 | 0;
  i44 = HEAP32[i45 >> 2] | 0;
  HEAP32[i45 >> 2] = i46;
  do {
   if ((i44 | 0) != 0) {
    i46 = i44 + 8 | 0;
    i45 = i46 | 0;
    i47 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
    HEAP32[i45 >> 2] = i47;
    if ((i47 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
   }
  } while (0);
  HEAP32[i1 + 40 >> 2] = HEAP32[i1 + 16 >> 2];
  i44 = HEAP32[i1 + 20 >> 2] | 0;
  i46 = i1 + 44 | 0;
  i47 = i46;
  i45 = HEAP32[i47 >> 2] & -8 | i44 & 7;
  HEAP32[i47 >> 2] = i45;
  HEAP8[i46] = i45 & 255 & -9 | i44 & 8;
 }
 L37 : do {
  switch (i2 | 0) {
  case 1:
   {
    i44 = i1 + 48 | 0;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i43, HEAP32[i44 >> 2] | 0);
    i45 = i1 + 36 | 0;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i45, HEAP32[i44 >> 2] | 0);
    do {
     if (__ZN7WebCore35isEndOfEditableOrNonEditableContentERKNS_15VisiblePositionE(i4) | 0) {
      i48 = 34;
     } else {
      if (!(__ZN7WebCore11isEndOfLineERKNS_15VisiblePositionE(i4) | 0)) {
       i49 = 0;
       break;
      }
      if (__ZN7WebCore13isStartOfLineERKNS_15VisiblePositionE(i4) | 0) {
       i49 = 0;
       break;
      }
      if (__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i4, 1) | 0) {
       i49 = 0;
      } else {
       i48 = 34;
      }
     }
    } while (0);
    if ((i48 | 0) == 34) {
     i49 = 1;
    }
    __ZN7WebCore11startOfWordERKNS_15VisiblePositionENS_9EWordSideE(i6, i4, i49);
    i44 = i6 | 0;
    i46 = HEAP32[i44 >> 2] | 0;
    if ((i46 | 0) != 0) {
     i47 = i46 + 8 | 0;
     HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
    }
    i47 = HEAP32[i6 + 4 >> 2] | 0;
    i50 = HEAP32[i6 + 8 >> 2] | 0;
    i51 = i50 & 8;
    i52 = i43 | 0;
    i53 = HEAP32[i52 >> 2] | 0;
    HEAP32[i52 >> 2] = i46;
    do {
     if ((i53 | 0) != 0) {
      i46 = i53 + 8 | 0;
      i54 = i46 | 0;
      i55 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
      HEAP32[i54 >> 2] = i55;
      if ((i55 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 28 >> 2] = i47;
    i53 = i1 + 32 | 0;
    i46 = i53;
    i55 = HEAP32[i46 >> 2] & -8 | i50 & 7;
    HEAP32[i46 >> 2] = i55;
    HEAP8[i53] = i55 & 255 & -9 | i51;
    i55 = HEAP32[i44 >> 2] | 0;
    do {
     if ((i55 | 0) != 0) {
      i53 = i55 + 8 | 0;
      i46 = i53 | 0;
      i54 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
      HEAP32[i46 >> 2] = i54;
      if ((i54 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
     }
    } while (0);
    do {
     if (__ZN7WebCore35isEndOfEditableOrNonEditableContentERKNS_15VisiblePositionE(i5) | 0) {
      i48 = 49;
     } else {
      if (!(__ZN7WebCore11isEndOfLineERKNS_15VisiblePositionE(i5) | 0)) {
       i56 = 0;
       break;
      }
      if (__ZN7WebCore13isStartOfLineERKNS_15VisiblePositionE(i5) | 0) {
       i56 = 0;
       break;
      }
      if (__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i5, 1) | 0) {
       i56 = 0;
      } else {
       i48 = 49;
      }
     }
    } while (0);
    if ((i48 | 0) == 49) {
     i56 = 1;
    }
    __ZN7WebCore9endOfWordERKNS_15VisiblePositionENS_9EWordSideE(i7, i5, i56);
    i55 = i8 | 0;
    i44 = i7 | 0;
    i51 = HEAP32[i44 >> 2] | 0;
    HEAP32[i55 >> 2] = i51;
    if ((i51 | 0) != 0) {
     i50 = i51 + 8 | 0;
     HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
    }
    i50 = i8 + 4 | 0;
    i51 = i7 + 4 | 0;
    i47 = HEAP32[i51 >> 2] | 0;
    HEAP32[i50 >> 2] = i47;
    i53 = i7 + 8 | 0;
    i54 = HEAP32[i53 >> 2] | 0;
    i46 = i8 + 8 | 0;
    i57 = i46;
    i58 = HEAP32[i57 >> 2] & -8 | i54 & 7;
    HEAP32[i57 >> 2] = i58;
    HEAP8[i46] = i58 & 255 & -9 | i54 & 8;
    i54 = i8 + 12 | 0;
    i58 = i7 + 12 | 0;
    HEAP32[i54 >> 2] = HEAP32[i58 >> 2];
    do {
     if (__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i5, 1) | 0) {
      if (__ZN7WebCore16isEmptyTableCellEPKNS_4NodeE(HEAP32[i52 >> 2] | 0) | 0) {
       i59 = i47;
       i48 = 87;
       break;
      }
      __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i9, i7, 0);
      i60 = i9 | 0;
      i61 = HEAP32[i60 >> 2] | 0;
      HEAP32[i60 >> 2] = 0;
      i62 = HEAP32[i55 >> 2] | 0;
      HEAP32[i55 >> 2] = i61;
      do {
       if ((i62 | 0) != 0) {
        i61 = i62 + 8 | 0;
        i63 = i61 | 0;
        i64 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
        HEAP32[i63 >> 2] = i64;
        if ((i64 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i61 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i61 - 8 | 0);
       }
      } while (0);
      HEAP32[i50 >> 2] = HEAP32[i9 + 4 >> 2];
      i62 = HEAP32[i9 + 8 >> 2] | 0;
      i61 = HEAP32[i57 >> 2] & -8 | i62 & 7;
      HEAP32[i57 >> 2] = i61;
      HEAP8[i46] = i61 & 255 & -9 | i62 & 8;
      HEAP32[i54 >> 2] = HEAP32[i9 + 12 >> 2];
      i62 = HEAP32[i60 >> 2] | 0;
      do {
       if ((i62 | 0) != 0) {
        i61 = i62 + 8 | 0;
        i64 = i61 | 0;
        i63 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
        HEAP32[i64 >> 2] = i63;
        if ((i63 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i61 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i61 - 8 | 0);
       }
      } while (0);
      i62 = __ZN7WebCore25isFirstPositionAfterTableERKNS_15VisiblePositionE(i8) | 0;
      do {
       if ((i62 | 0) != 0) {
        if (!(__ZN7WebCore7isBlockEPKNS_4NodeE(i62) | 0)) {
         i60 = HEAP32[i44 >> 2] | 0;
         if ((i60 | 0) != 0) {
          i61 = i60 + 8 | 0;
          HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 1;
         }
         i61 = HEAP32[i55 >> 2] | 0;
         HEAP32[i55 >> 2] = i60;
         do {
          if ((i61 | 0) != 0) {
           i60 = i61 + 8 | 0;
           i63 = i60 | 0;
           i64 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
           HEAP32[i63 >> 2] = i64;
           if ((i64 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
          }
         } while (0);
         HEAP32[i50 >> 2] = HEAP32[i51 >> 2];
         i61 = HEAP32[i53 >> 2] | 0;
         i60 = HEAP32[i57 >> 2] & -8 | i61 & 7;
         HEAP32[i57 >> 2] = i60;
         HEAP8[i46] = i60 & 255 & -9 | i61 & 8;
         HEAP32[i54 >> 2] = HEAP32[i58 >> 2];
         break;
        }
        __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i10, i8, 1);
        i61 = i10 | 0;
        i60 = HEAP32[i61 >> 2] | 0;
        HEAP32[i61 >> 2] = 0;
        i64 = HEAP32[i55 >> 2] | 0;
        HEAP32[i55 >> 2] = i60;
        do {
         if ((i64 | 0) != 0) {
          i60 = i64 + 8 | 0;
          i63 = i60 | 0;
          i65 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
          HEAP32[i63 >> 2] = i65;
          if ((i65 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
         }
        } while (0);
        HEAP32[i50 >> 2] = HEAP32[i10 + 4 >> 2];
        i64 = HEAP32[i10 + 8 >> 2] | 0;
        i60 = HEAP32[i57 >> 2] & -8 | i64 & 7;
        HEAP32[i57 >> 2] = i60;
        HEAP8[i46] = i60 & 255 & -9 | i64 & 8;
        HEAP32[i54 >> 2] = HEAP32[i10 + 12 >> 2];
        i64 = HEAP32[i61 >> 2] | 0;
        if ((i64 | 0) == 0) {
         break;
        }
        i60 = i64 + 8 | 0;
        i64 = i60 | 0;
        i65 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
        HEAP32[i64 >> 2] = i65;
        if ((i65 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
       }
      } while (0);
      i62 = HEAP32[i55 >> 2] | 0;
      if ((i62 | 0) != 0) {
       i66 = i62;
       i48 = 88;
       break;
      }
      i62 = HEAP32[i44 >> 2] | 0;
      do {
       if ((i62 | 0) == 0) {
        HEAP32[i55 >> 2] = i62;
       } else {
        i60 = i62 + 8 | 0;
        HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
        i60 = HEAP32[i55 >> 2] | 0;
        HEAP32[i55 >> 2] = i62;
        if ((i60 | 0) == 0) {
         break;
        }
        i65 = i60 + 8 | 0;
        i60 = i65 | 0;
        i64 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
        HEAP32[i60 >> 2] = i64;
        if ((i64 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i65 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i65 - 8 | 0);
       }
      } while (0);
      i62 = HEAP32[i51 >> 2] | 0;
      HEAP32[i50 >> 2] = i62;
      i65 = HEAP32[i53 >> 2] | 0;
      i64 = HEAP32[i57 >> 2] & -8 | i65 & 7;
      HEAP32[i57 >> 2] = i64;
      HEAP8[i46] = i64 & 255 & -9 | i65 & 8;
      HEAP32[i54 >> 2] = HEAP32[i58 >> 2];
      i59 = i62;
      i48 = 87;
     } else {
      i59 = i47;
      i48 = 87;
     }
    } while (0);
    if ((i48 | 0) == 87) {
     i47 = HEAP32[i55 >> 2] | 0;
     if ((i47 | 0) == 0) {
      i67 = 0;
      i68 = i59;
     } else {
      i66 = i47;
      i48 = 88;
     }
    }
    if ((i48 | 0) == 88) {
     i47 = i66 + 8 | 0;
     HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
     i67 = i66;
     i68 = HEAP32[i50 >> 2] | 0;
    }
    i47 = HEAP32[i57 >> 2] | 0;
    i58 = i47 & 8;
    i54 = i45 | 0;
    i46 = HEAP32[i54 >> 2] | 0;
    HEAP32[i54 >> 2] = i67;
    do {
     if ((i46 | 0) != 0) {
      i54 = i46 + 8 | 0;
      i53 = i54 | 0;
      i51 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
      HEAP32[i53 >> 2] = i51;
      if ((i51 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 40 >> 2] = i68;
    i46 = i1 + 44 | 0;
    i45 = i46;
    i57 = HEAP32[i45 >> 2] & -8 | i47 & 7;
    HEAP32[i45 >> 2] = i57;
    HEAP8[i46] = i57 & 255 & -9 | i58;
    i57 = HEAP32[i55 >> 2] | 0;
    do {
     if ((i57 | 0) != 0) {
      i46 = i57 + 8 | 0;
      i45 = i46 | 0;
      i50 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
      HEAP32[i45 >> 2] = i50;
      if ((i50 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
     }
    } while (0);
    i57 = HEAP32[i44 >> 2] | 0;
    do {
     if ((i57 | 0) != 0) {
      i55 = i57 + 8 | 0;
      i58 = i55 | 0;
      i47 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
      HEAP32[i58 >> 2] = i47;
      if ((i47 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
     }
    } while (0);
    i57 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i57 | 0) != 0) {
      i44 = i57 + 8 | 0;
      i55 = i44 | 0;
      i47 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
      HEAP32[i55 >> 2] = i47;
      if ((i47 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
     }
    } while (0);
    i57 = HEAP32[i4 >> 2] | 0;
    if ((i57 | 0) == 0) {
     i69 = i52;
     break L37;
    }
    i44 = i57 + 8 | 0;
    i57 = i44 | 0;
    i47 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
    HEAP32[i57 >> 2] = i47;
    if ((i47 | 0) >= 1) {
     i69 = i52;
     break L37;
    }
    if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
     i69 = i52;
     break L37;
    }
    __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
    i69 = i52;
    break;
   }
  case 2:
   {
    i44 = i1 + 48 | 0;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i12, i43, HEAP32[i44 >> 2] | 0);
    __ZN7WebCore15startOfSentenceERKNS_15VisiblePositionE(i11, i12);
    i47 = i11 | 0;
    i57 = HEAP32[i47 >> 2] | 0;
    if ((i57 | 0) != 0) {
     i55 = i57 + 8 | 0;
     HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
    }
    i55 = HEAP32[i11 + 4 >> 2] | 0;
    i58 = HEAP32[i11 + 8 >> 2] | 0;
    i46 = i58 & 8;
    i50 = i43 | 0;
    i45 = HEAP32[i50 >> 2] | 0;
    HEAP32[i50 >> 2] = i57;
    do {
     if ((i45 | 0) != 0) {
      i57 = i45 + 8 | 0;
      i54 = i57 | 0;
      i51 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
      HEAP32[i54 >> 2] = i51;
      if ((i51 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 28 >> 2] = i55;
    i45 = i1 + 32 | 0;
    i52 = i45;
    i57 = HEAP32[i52 >> 2] & -8 | i58 & 7;
    HEAP32[i52 >> 2] = i57;
    HEAP8[i45] = i57 & 255 & -9 | i46;
    i57 = HEAP32[i47 >> 2] | 0;
    do {
     if ((i57 | 0) != 0) {
      i45 = i57 + 8 | 0;
      i52 = i45 | 0;
      i51 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
      HEAP32[i52 >> 2] = i51;
      if ((i51 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
     }
    } while (0);
    i57 = HEAP32[i12 >> 2] | 0;
    do {
     if ((i57 | 0) != 0) {
      i47 = i57 + 8 | 0;
      i46 = i47 | 0;
      i58 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
      HEAP32[i46 >> 2] = i58;
      if ((i58 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
     }
    } while (0);
    i57 = i1 + 36 | 0;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i14, i57, HEAP32[i44 >> 2] | 0);
    __ZN7WebCore13endOfSentenceERKNS_15VisiblePositionE(i13, i14);
    i47 = i13 | 0;
    i58 = HEAP32[i47 >> 2] | 0;
    if ((i58 | 0) != 0) {
     i46 = i58 + 8 | 0;
     HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
    }
    i46 = HEAP32[i13 + 4 >> 2] | 0;
    i55 = HEAP32[i13 + 8 >> 2] | 0;
    i45 = i55 & 8;
    i51 = i57 | 0;
    i57 = HEAP32[i51 >> 2] | 0;
    HEAP32[i51 >> 2] = i58;
    do {
     if ((i57 | 0) != 0) {
      i58 = i57 + 8 | 0;
      i51 = i58 | 0;
      i52 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
      HEAP32[i51 >> 2] = i52;
      if ((i52 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 40 >> 2] = i46;
    i57 = i1 + 44 | 0;
    i44 = i57;
    i58 = HEAP32[i44 >> 2] & -8 | i55 & 7;
    HEAP32[i44 >> 2] = i58;
    HEAP8[i57] = i58 & 255 & -9 | i45;
    i58 = HEAP32[i47 >> 2] | 0;
    do {
     if ((i58 | 0) != 0) {
      i57 = i58 + 8 | 0;
      i44 = i57 | 0;
      i52 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
      HEAP32[i44 >> 2] = i52;
      if ((i52 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
     }
    } while (0);
    i58 = HEAP32[i14 >> 2] | 0;
    if ((i58 | 0) == 0) {
     i69 = i50;
     break L37;
    }
    i47 = i58 + 8 | 0;
    i58 = i47 | 0;
    i45 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
    HEAP32[i58 >> 2] = i45;
    if ((i45 | 0) >= 1) {
     i69 = i50;
     break L37;
    }
    if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
     i69 = i50;
     break L37;
    }
    __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
    i69 = i50;
    break;
   }
  case 3:
   {
    i47 = i1 + 48 | 0;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i16, i43, HEAP32[i47 >> 2] | 0);
    __ZN7WebCore11startOfLineERKNS_15VisiblePositionE(i15, i16);
    i45 = i15 | 0;
    i58 = HEAP32[i45 >> 2] | 0;
    if ((i58 | 0) != 0) {
     i55 = i58 + 8 | 0;
     HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
    }
    i55 = HEAP32[i15 + 4 >> 2] | 0;
    i46 = HEAP32[i15 + 8 >> 2] | 0;
    i57 = i46 & 8;
    i52 = i43 | 0;
    i44 = HEAP32[i52 >> 2] | 0;
    HEAP32[i52 >> 2] = i58;
    do {
     if ((i44 | 0) != 0) {
      i58 = i44 + 8 | 0;
      i51 = i58 | 0;
      i54 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
      HEAP32[i51 >> 2] = i54;
      if ((i54 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 28 >> 2] = i55;
    i44 = i1 + 32 | 0;
    i50 = i44;
    i58 = HEAP32[i50 >> 2] & -8 | i46 & 7;
    HEAP32[i50 >> 2] = i58;
    HEAP8[i44] = i58 & 255 & -9 | i57;
    i58 = HEAP32[i45 >> 2] | 0;
    do {
     if ((i58 | 0) != 0) {
      i44 = i58 + 8 | 0;
      i50 = i44 | 0;
      i54 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
      HEAP32[i50 >> 2] = i54;
      if ((i54 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
     }
    } while (0);
    i58 = HEAP32[i16 >> 2] | 0;
    do {
     if ((i58 | 0) != 0) {
      i45 = i58 + 8 | 0;
      i57 = i45 | 0;
      i46 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
      HEAP32[i57 >> 2] = i46;
      if ((i46 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
     }
    } while (0);
    i58 = i1 + 36 | 0;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i18, i58, HEAP32[i47 >> 2] | 0);
    __ZN7WebCore9endOfLineERKNS_15VisiblePositionE(i17, i18);
    i45 = HEAP32[i18 >> 2] | 0;
    do {
     if ((i45 | 0) != 0) {
      i46 = i45 + 8 | 0;
      i57 = i46 | 0;
      i55 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
      HEAP32[i57 >> 2] = i55;
      if ((i55 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
     }
    } while (0);
    do {
     if (__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i17, 1) | 0) {
      __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i19, i17, 0);
      i45 = i19 | 0;
      i47 = HEAP32[i45 >> 2] | 0;
      if ((i47 | 0) == 0) {
       break;
      }
      i46 = i47 + 8 | 0;
      HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
      i46 = i17 | 0;
      i55 = HEAP32[i46 >> 2] | 0;
      HEAP32[i46 >> 2] = i47;
      do {
       if ((i55 | 0) != 0) {
        i47 = i55 + 8 | 0;
        i46 = i47 | 0;
        i57 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
        HEAP32[i46 >> 2] = i57;
        if ((i57 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
       }
      } while (0);
      HEAP32[i17 + 4 >> 2] = HEAP32[i19 + 4 >> 2];
      i55 = HEAP32[i19 + 8 >> 2] | 0;
      i47 = i17 + 8 | 0;
      i57 = i47;
      i46 = HEAP32[i57 >> 2] & -8 | i55 & 7;
      HEAP32[i57 >> 2] = i46;
      HEAP8[i47] = i46 & 255 & -9 | i55 & 8;
      HEAP32[i17 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
      i55 = HEAP32[i45 >> 2] | 0;
      if ((i55 | 0) == 0) {
       break;
      }
      i46 = i55 + 8 | 0;
      i55 = i46 | 0;
      i47 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
      HEAP32[i55 >> 2] = i47;
      if ((i47 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
     }
    } while (0);
    i46 = i17 | 0;
    i47 = HEAP32[i46 >> 2] | 0;
    if ((i47 | 0) != 0) {
     i55 = i47 + 8 | 0;
     HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
    }
    i55 = HEAP32[i17 + 4 >> 2] | 0;
    i57 = HEAP32[i17 + 8 >> 2] | 0;
    i44 = i57 & 8;
    i54 = i58 | 0;
    i50 = HEAP32[i54 >> 2] | 0;
    HEAP32[i54 >> 2] = i47;
    do {
     if ((i50 | 0) != 0) {
      i47 = i50 + 8 | 0;
      i54 = i47 | 0;
      i51 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
      HEAP32[i54 >> 2] = i51;
      if ((i51 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 40 >> 2] = i55;
    i50 = i1 + 44 | 0;
    i58 = i50;
    i47 = HEAP32[i58 >> 2] & -8 | i57 & 7;
    HEAP32[i58 >> 2] = i47;
    HEAP8[i50] = i47 & 255 & -9 | i44;
    i47 = HEAP32[i46 >> 2] | 0;
    if ((i47 | 0) == 0) {
     i69 = i52;
     break L37;
    }
    i50 = i47 + 8 | 0;
    i47 = i50 | 0;
    i58 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
    HEAP32[i47 >> 2] = i58;
    if ((i58 | 0) >= 1) {
     i69 = i52;
     break L37;
    }
    if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
     i69 = i52;
     break L37;
    }
    __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
    i69 = i52;
    break;
   }
  case 6:
   {
    i50 = i1 + 48 | 0;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i21, i43, HEAP32[i50 >> 2] | 0);
    __ZN7WebCore11startOfLineERKNS_15VisiblePositionE(i20, i21);
    i58 = i20 | 0;
    i47 = HEAP32[i58 >> 2] | 0;
    if ((i47 | 0) != 0) {
     i51 = i47 + 8 | 0;
     HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
    }
    i51 = HEAP32[i20 + 4 >> 2] | 0;
    i54 = HEAP32[i20 + 8 >> 2] | 0;
    i53 = i54 & 8;
    i62 = i43 | 0;
    i65 = HEAP32[i62 >> 2] | 0;
    HEAP32[i62 >> 2] = i47;
    do {
     if ((i65 | 0) != 0) {
      i47 = i65 + 8 | 0;
      i64 = i47 | 0;
      i60 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
      HEAP32[i64 >> 2] = i60;
      if ((i60 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 28 >> 2] = i51;
    i65 = i1 + 32 | 0;
    i52 = i65;
    i46 = HEAP32[i52 >> 2] & -8 | i54 & 7;
    HEAP32[i52 >> 2] = i46;
    HEAP8[i65] = i46 & 255 & -9 | i53;
    i46 = HEAP32[i58 >> 2] | 0;
    do {
     if ((i46 | 0) != 0) {
      i65 = i46 + 8 | 0;
      i52 = i65 | 0;
      i44 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
      HEAP32[i52 >> 2] = i44;
      if ((i44 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i65 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i65 - 8 | 0);
     }
    } while (0);
    i46 = HEAP32[i21 >> 2] | 0;
    do {
     if ((i46 | 0) != 0) {
      i58 = i46 + 8 | 0;
      i53 = i58 | 0;
      i54 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
      HEAP32[i53 >> 2] = i54;
      if ((i54 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
     }
    } while (0);
    i46 = i1 + 36 | 0;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i23, i46, HEAP32[i50 >> 2] | 0);
    __ZN7WebCore9endOfLineERKNS_15VisiblePositionE(i22, i23);
    i58 = i22 | 0;
    i54 = HEAP32[i58 >> 2] | 0;
    if ((i54 | 0) != 0) {
     i53 = i54 + 8 | 0;
     HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
    }
    i53 = HEAP32[i22 + 4 >> 2] | 0;
    i51 = HEAP32[i22 + 8 >> 2] | 0;
    i65 = i51 & 8;
    i44 = i46 | 0;
    i46 = HEAP32[i44 >> 2] | 0;
    HEAP32[i44 >> 2] = i54;
    do {
     if ((i46 | 0) != 0) {
      i54 = i46 + 8 | 0;
      i44 = i54 | 0;
      i52 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
      HEAP32[i44 >> 2] = i52;
      if ((i52 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 40 >> 2] = i53;
    i46 = i1 + 44 | 0;
    i50 = i46;
    i54 = HEAP32[i50 >> 2] & -8 | i51 & 7;
    HEAP32[i50 >> 2] = i54;
    HEAP8[i46] = i54 & 255 & -9 | i65;
    i54 = HEAP32[i58 >> 2] | 0;
    do {
     if ((i54 | 0) != 0) {
      i46 = i54 + 8 | 0;
      i50 = i46 | 0;
      i52 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
      HEAP32[i50 >> 2] = i52;
      if ((i52 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
     }
    } while (0);
    i54 = HEAP32[i23 >> 2] | 0;
    if ((i54 | 0) == 0) {
     i69 = i62;
     break L37;
    }
    i58 = i54 + 8 | 0;
    i54 = i58 | 0;
    i65 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
    HEAP32[i54 >> 2] = i65;
    if ((i65 | 0) >= 1) {
     i69 = i62;
     break L37;
    }
    if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
     i69 = i62;
     break L37;
    }
    __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
    i69 = i62;
    break;
   }
  case 4:
   {
    i58 = i1 + 48 | 0;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i24, i43, HEAP32[i58 >> 2] | 0);
    do {
     if (__ZN7WebCore13isStartOfLineERKNS_15VisiblePositionE(i24) | 0) {
      if (!(__ZN7WebCore35isEndOfEditableOrNonEditableContentERKNS_15VisiblePositionE(i24) | 0)) {
       break;
      }
      __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i25, i24, 0);
      i65 = i25 | 0;
      i54 = HEAP32[i65 >> 2] | 0;
      HEAP32[i65 >> 2] = 0;
      i51 = i24 | 0;
      i53 = HEAP32[i51 >> 2] | 0;
      HEAP32[i51 >> 2] = i54;
      do {
       if ((i53 | 0) != 0) {
        i54 = i53 + 8 | 0;
        i51 = i54 | 0;
        i46 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
        HEAP32[i51 >> 2] = i46;
        if ((i46 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
       }
      } while (0);
      HEAP32[i24 + 4 >> 2] = HEAP32[i25 + 4 >> 2];
      i53 = HEAP32[i25 + 8 >> 2] | 0;
      i45 = i24 + 8 | 0;
      i54 = i45;
      i46 = HEAP32[i54 >> 2] & -8 | i53 & 7;
      HEAP32[i54 >> 2] = i46;
      HEAP8[i45] = i46 & 255 & -9 | i53 & 8;
      HEAP32[i24 + 12 >> 2] = HEAP32[i25 + 12 >> 2];
      i53 = HEAP32[i65 >> 2] | 0;
      if ((i53 | 0) == 0) {
       break;
      }
      i46 = i53 + 8 | 0;
      i53 = i46 | 0;
      i45 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
      HEAP32[i53 >> 2] = i45;
      if ((i45 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i26, i24, 1);
    i62 = i26 | 0;
    i46 = HEAP32[i62 >> 2] | 0;
    if ((i46 | 0) != 0) {
     i45 = i46 + 8 | 0;
     HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
    }
    i45 = HEAP32[i26 + 4 >> 2] | 0;
    i53 = HEAP32[i26 + 8 >> 2] | 0;
    i54 = i53 & 8;
    i51 = i43 | 0;
    i52 = HEAP32[i51 >> 2] | 0;
    HEAP32[i51 >> 2] = i46;
    do {
     if ((i52 | 0) != 0) {
      i46 = i52 + 8 | 0;
      i50 = i46 | 0;
      i44 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
      HEAP32[i50 >> 2] = i44;
      if ((i44 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 28 >> 2] = i45;
    i52 = i1 + 32 | 0;
    i46 = i52;
    i44 = HEAP32[i46 >> 2] & -8 | i53 & 7;
    HEAP32[i46 >> 2] = i44;
    HEAP8[i52] = i44 & 255 & -9 | i54;
    i44 = HEAP32[i62 >> 2] | 0;
    do {
     if ((i44 | 0) != 0) {
      i52 = i44 + 8 | 0;
      i46 = i52 | 0;
      i50 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
      HEAP32[i46 >> 2] = i50;
      if ((i50 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
     }
    } while (0);
    i44 = i1 + 36 | 0;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i28, i44, HEAP32[i58 >> 2] | 0);
    __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i27, i28, 1);
    i62 = HEAP32[i28 >> 2] | 0;
    do {
     if ((i62 | 0) != 0) {
      i54 = i62 + 8 | 0;
      i53 = i54 | 0;
      i45 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
      HEAP32[i53 >> 2] = i45;
      if ((i45 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
     }
    } while (0);
    __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i29, i27, 0);
    i62 = __ZN7WebCore25isFirstPositionAfterTableERKNS_15VisiblePositionE(i29) | 0;
    do {
     if ((i62 | 0) == 0) {
      i70 = i29 | 0;
     } else {
      if (!(__ZN7WebCore7isBlockEPKNS_4NodeE(i62) | 0)) {
       i58 = HEAP32[i27 >> 2] | 0;
       if ((i58 | 0) != 0) {
        i54 = i58 + 8 | 0;
        HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
       }
       i54 = i29 | 0;
       i45 = HEAP32[i54 >> 2] | 0;
       HEAP32[i54 >> 2] = i58;
       do {
        if ((i45 | 0) != 0) {
         i58 = i45 + 8 | 0;
         i53 = i58 | 0;
         i52 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
         HEAP32[i53 >> 2] = i52;
         if ((i52 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
        }
       } while (0);
       HEAP32[i29 + 4 >> 2] = HEAP32[i27 + 4 >> 2];
       i45 = HEAP32[i27 + 8 >> 2] | 0;
       i65 = i29 + 8 | 0;
       i58 = i65;
       i52 = HEAP32[i58 >> 2] & -8 | i45 & 7;
       HEAP32[i58 >> 2] = i52;
       HEAP8[i65] = i52 & 255 & -9 | i45 & 8;
       HEAP32[i29 + 12 >> 2] = HEAP32[i27 + 12 >> 2];
       i70 = i54;
       break;
      }
      __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i30, i29, 1);
      i45 = i30 | 0;
      i52 = HEAP32[i45 >> 2] | 0;
      HEAP32[i45 >> 2] = 0;
      i65 = i29 | 0;
      i58 = HEAP32[i65 >> 2] | 0;
      HEAP32[i65 >> 2] = i52;
      do {
       if ((i58 | 0) != 0) {
        i52 = i58 + 8 | 0;
        i53 = i52 | 0;
        i50 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
        HEAP32[i53 >> 2] = i50;
        if ((i50 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
       }
      } while (0);
      HEAP32[i29 + 4 >> 2] = HEAP32[i30 + 4 >> 2];
      i58 = HEAP32[i30 + 8 >> 2] | 0;
      i54 = i29 + 8 | 0;
      i52 = i54;
      i50 = HEAP32[i52 >> 2] & -8 | i58 & 7;
      HEAP32[i52 >> 2] = i50;
      HEAP8[i54] = i50 & 255 & -9 | i58 & 8;
      HEAP32[i29 + 12 >> 2] = HEAP32[i30 + 12 >> 2];
      i58 = HEAP32[i45 >> 2] | 0;
      if ((i58 | 0) == 0) {
       i70 = i65;
       break;
      }
      i50 = i58 + 8 | 0;
      i58 = i50 | 0;
      i54 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
      HEAP32[i58 >> 2] = i54;
      if ((i54 | 0) >= 1) {
       i70 = i65;
       break;
      }
      if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
       i70 = i65;
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
      i70 = i65;
     }
    } while (0);
    i62 = HEAP32[i70 >> 2] | 0;
    if ((i62 | 0) == 0) {
     i50 = HEAP32[i27 >> 2] | 0;
     do {
      if ((i50 | 0) == 0) {
       HEAP32[i70 >> 2] = i50;
      } else {
       i54 = i50 + 8 | 0;
       HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
       i54 = HEAP32[i70 >> 2] | 0;
       HEAP32[i70 >> 2] = i50;
       if ((i54 | 0) == 0) {
        break;
       }
       i58 = i54 + 8 | 0;
       i54 = i58 | 0;
       i52 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
       HEAP32[i54 >> 2] = i52;
       if ((i52 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
      }
     } while (0);
     i50 = HEAP32[i27 + 4 >> 2] | 0;
     i58 = i29 + 4 | 0;
     HEAP32[i58 >> 2] = i50;
     i52 = HEAP32[i27 + 8 >> 2] | 0;
     i54 = i29 + 8 | 0;
     i53 = i54;
     i46 = HEAP32[i53 >> 2] & -8 | i52 & 7;
     HEAP32[i53 >> 2] = i46;
     HEAP8[i54] = i46 & 255 & -9 | i52 & 8;
     HEAP32[i29 + 12 >> 2] = HEAP32[i27 + 12 >> 2];
     i52 = HEAP32[i70 >> 2] | 0;
     if ((i52 | 0) == 0) {
      i71 = 0;
      i72 = i50;
      i73 = i53;
     } else {
      i74 = i52;
      i75 = i58;
      i76 = i53;
      i48 = 254;
     }
    } else {
     i74 = i62;
     i75 = i29 + 4 | 0;
     i76 = i29 + 8 | 0;
     i48 = 254;
    }
    if ((i48 | 0) == 254) {
     i53 = i74 + 8 | 0;
     HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
     i71 = i74;
     i72 = HEAP32[i75 >> 2] | 0;
     i73 = i76;
    }
    i53 = HEAP32[i73 >> 2] | 0;
    i58 = i53 & 8;
    i52 = i44 | 0;
    i50 = HEAP32[i52 >> 2] | 0;
    HEAP32[i52 >> 2] = i71;
    do {
     if ((i50 | 0) != 0) {
      i52 = i50 + 8 | 0;
      i46 = i52 | 0;
      i54 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
      HEAP32[i46 >> 2] = i54;
      if ((i54 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 40 >> 2] = i72;
    i50 = i1 + 44 | 0;
    i44 = i50;
    i62 = HEAP32[i44 >> 2] & -8 | i53 & 7;
    HEAP32[i44 >> 2] = i62;
    HEAP8[i50] = i62 & 255 & -9 | i58;
    i62 = HEAP32[i70 >> 2] | 0;
    do {
     if ((i62 | 0) != 0) {
      i50 = i62 + 8 | 0;
      i44 = i50 | 0;
      i52 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
      HEAP32[i44 >> 2] = i52;
      if ((i52 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
     }
    } while (0);
    i62 = HEAP32[i27 >> 2] | 0;
    do {
     if ((i62 | 0) != 0) {
      i58 = i62 + 8 | 0;
      i53 = i58 | 0;
      i50 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
      HEAP32[i53 >> 2] = i50;
      if ((i50 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
     }
    } while (0);
    i62 = HEAP32[i24 >> 2] | 0;
    if ((i62 | 0) == 0) {
     i69 = i51;
     break L37;
    }
    i58 = i62 + 8 | 0;
    i62 = i58 | 0;
    i50 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
    HEAP32[i62 >> 2] = i50;
    if ((i50 | 0) >= 1) {
     i69 = i51;
     break L37;
    }
    if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
     i69 = i51;
     break L37;
    }
    __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
    i69 = i51;
    break;
   }
  case 8:
   {
    i58 = i1 + 48 | 0;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i32, i43, HEAP32[i58 >> 2] | 0);
    __ZN7WebCore15startOfDocumentERKNS_15VisiblePositionE(i31, i32);
    i50 = i31 | 0;
    i62 = HEAP32[i50 >> 2] | 0;
    if ((i62 | 0) != 0) {
     i53 = i62 + 8 | 0;
     HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
    }
    i53 = HEAP32[i31 + 4 >> 2] | 0;
    i52 = HEAP32[i31 + 8 >> 2] | 0;
    i44 = i52 & 8;
    i54 = i43 | 0;
    i46 = HEAP32[i54 >> 2] | 0;
    HEAP32[i54 >> 2] = i62;
    do {
     if ((i46 | 0) != 0) {
      i62 = i46 + 8 | 0;
      i57 = i62 | 0;
      i55 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
      HEAP32[i57 >> 2] = i55;
      if ((i55 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i62 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i62 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 28 >> 2] = i53;
    i46 = i1 + 32 | 0;
    i51 = i46;
    i62 = HEAP32[i51 >> 2] & -8 | i52 & 7;
    HEAP32[i51 >> 2] = i62;
    HEAP8[i46] = i62 & 255 & -9 | i44;
    i62 = HEAP32[i50 >> 2] | 0;
    do {
     if ((i62 | 0) != 0) {
      i46 = i62 + 8 | 0;
      i51 = i46 | 0;
      i55 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
      HEAP32[i51 >> 2] = i55;
      if ((i55 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
     }
    } while (0);
    i62 = HEAP32[i32 >> 2] | 0;
    do {
     if ((i62 | 0) != 0) {
      i50 = i62 + 8 | 0;
      i44 = i50 | 0;
      i52 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
      HEAP32[i44 >> 2] = i52;
      if ((i52 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
     }
    } while (0);
    i62 = i1 + 36 | 0;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i34, i62, HEAP32[i58 >> 2] | 0);
    __ZN7WebCore13endOfDocumentERKNS_15VisiblePositionE(i33, i34);
    i50 = i33 | 0;
    i52 = HEAP32[i50 >> 2] | 0;
    if ((i52 | 0) != 0) {
     i44 = i52 + 8 | 0;
     HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 1;
    }
    i44 = HEAP32[i33 + 4 >> 2] | 0;
    i53 = HEAP32[i33 + 8 >> 2] | 0;
    i46 = i53 & 8;
    i55 = i62 | 0;
    i62 = HEAP32[i55 >> 2] | 0;
    HEAP32[i55 >> 2] = i52;
    do {
     if ((i62 | 0) != 0) {
      i52 = i62 + 8 | 0;
      i55 = i52 | 0;
      i51 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
      HEAP32[i55 >> 2] = i51;
      if ((i51 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 40 >> 2] = i44;
    i62 = i1 + 44 | 0;
    i58 = i62;
    i52 = HEAP32[i58 >> 2] & -8 | i53 & 7;
    HEAP32[i58 >> 2] = i52;
    HEAP8[i62] = i52 & 255 & -9 | i46;
    i52 = HEAP32[i50 >> 2] | 0;
    do {
     if ((i52 | 0) != 0) {
      i62 = i52 + 8 | 0;
      i58 = i62 | 0;
      i51 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
      HEAP32[i58 >> 2] = i51;
      if ((i51 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i62 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i62 - 8 | 0);
     }
    } while (0);
    i52 = HEAP32[i34 >> 2] | 0;
    if ((i52 | 0) == 0) {
     i69 = i54;
     break L37;
    }
    i50 = i52 + 8 | 0;
    i52 = i50 | 0;
    i46 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
    HEAP32[i52 >> 2] = i46;
    if ((i46 | 0) >= 1) {
     i69 = i54;
     break L37;
    }
    if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
     i69 = i54;
     break L37;
    }
    __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
    i69 = i54;
    break;
   }
  case 7:
   {
    i50 = i1 + 48 | 0;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i36, i43, HEAP32[i50 >> 2] | 0);
    __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i35, i36, 1);
    i46 = i35 | 0;
    i52 = HEAP32[i46 >> 2] | 0;
    if ((i52 | 0) != 0) {
     i53 = i52 + 8 | 0;
     HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
    }
    i53 = HEAP32[i35 + 4 >> 2] | 0;
    i44 = HEAP32[i35 + 8 >> 2] | 0;
    i62 = i44 & 8;
    i51 = i43 | 0;
    i58 = HEAP32[i51 >> 2] | 0;
    HEAP32[i51 >> 2] = i52;
    do {
     if ((i58 | 0) != 0) {
      i52 = i58 + 8 | 0;
      i55 = i52 | 0;
      i57 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
      HEAP32[i55 >> 2] = i57;
      if ((i57 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 28 >> 2] = i53;
    i58 = i1 + 32 | 0;
    i54 = i58;
    i52 = HEAP32[i54 >> 2] & -8 | i44 & 7;
    HEAP32[i54 >> 2] = i52;
    HEAP8[i58] = i52 & 255 & -9 | i62;
    i52 = HEAP32[i46 >> 2] | 0;
    do {
     if ((i52 | 0) != 0) {
      i58 = i52 + 8 | 0;
      i54 = i58 | 0;
      i57 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
      HEAP32[i54 >> 2] = i57;
      if ((i57 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
     }
    } while (0);
    i52 = HEAP32[i36 >> 2] | 0;
    do {
     if ((i52 | 0) != 0) {
      i46 = i52 + 8 | 0;
      i62 = i46 | 0;
      i44 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
      HEAP32[i62 >> 2] = i44;
      if ((i44 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
     }
    } while (0);
    i52 = i1 + 36 | 0;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i38, i52, HEAP32[i50 >> 2] | 0);
    __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i37, i38, 1);
    i46 = i37 | 0;
    i44 = HEAP32[i46 >> 2] | 0;
    if ((i44 | 0) != 0) {
     i62 = i44 + 8 | 0;
     HEAP32[i62 >> 2] = (HEAP32[i62 >> 2] | 0) + 1;
    }
    i62 = HEAP32[i37 + 4 >> 2] | 0;
    i53 = HEAP32[i37 + 8 >> 2] | 0;
    i58 = i53 & 8;
    i57 = i52 | 0;
    i52 = HEAP32[i57 >> 2] | 0;
    HEAP32[i57 >> 2] = i44;
    do {
     if ((i52 | 0) != 0) {
      i44 = i52 + 8 | 0;
      i57 = i44 | 0;
      i54 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
      HEAP32[i57 >> 2] = i54;
      if ((i54 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 40 >> 2] = i62;
    i52 = i1 + 44 | 0;
    i50 = i52;
    i44 = HEAP32[i50 >> 2] & -8 | i53 & 7;
    HEAP32[i50 >> 2] = i44;
    HEAP8[i52] = i44 & 255 & -9 | i58;
    i44 = HEAP32[i46 >> 2] | 0;
    do {
     if ((i44 | 0) != 0) {
      i52 = i44 + 8 | 0;
      i50 = i52 | 0;
      i54 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
      HEAP32[i50 >> 2] = i54;
      if ((i54 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
     }
    } while (0);
    i44 = HEAP32[i38 >> 2] | 0;
    if ((i44 | 0) == 0) {
     i69 = i51;
     break L37;
    }
    i46 = i44 + 8 | 0;
    i44 = i46 | 0;
    i58 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
    HEAP32[i44 >> 2] = i58;
    if ((i58 | 0) >= 1) {
     i69 = i51;
     break L37;
    }
    if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
     i69 = i51;
     break L37;
    }
    __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
    i69 = i51;
    break;
   }
  case 5:
   {
    i46 = i1 + 48 | 0;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i40, i43, HEAP32[i46 >> 2] | 0);
    __ZN7WebCore15startOfSentenceERKNS_15VisiblePositionE(i39, i40);
    i58 = i39 | 0;
    i44 = HEAP32[i58 >> 2] | 0;
    if ((i44 | 0) != 0) {
     i53 = i44 + 8 | 0;
     HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
    }
    i53 = HEAP32[i39 + 4 >> 2] | 0;
    i62 = HEAP32[i39 + 8 >> 2] | 0;
    i52 = i62 & 8;
    i54 = i43 | 0;
    i50 = HEAP32[i54 >> 2] | 0;
    HEAP32[i54 >> 2] = i44;
    do {
     if ((i50 | 0) != 0) {
      i44 = i50 + 8 | 0;
      i57 = i44 | 0;
      i55 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
      HEAP32[i57 >> 2] = i55;
      if ((i55 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 28 >> 2] = i53;
    i50 = i1 + 32 | 0;
    i51 = i50;
    i44 = HEAP32[i51 >> 2] & -8 | i62 & 7;
    HEAP32[i51 >> 2] = i44;
    HEAP8[i50] = i44 & 255 & -9 | i52;
    i44 = HEAP32[i58 >> 2] | 0;
    do {
     if ((i44 | 0) != 0) {
      i50 = i44 + 8 | 0;
      i51 = i50 | 0;
      i55 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
      HEAP32[i51 >> 2] = i55;
      if ((i55 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
     }
    } while (0);
    i44 = HEAP32[i40 >> 2] | 0;
    do {
     if ((i44 | 0) != 0) {
      i58 = i44 + 8 | 0;
      i52 = i58 | 0;
      i62 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
      HEAP32[i52 >> 2] = i62;
      if ((i62 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
     }
    } while (0);
    i44 = i1 + 36 | 0;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i42, i44, HEAP32[i46 >> 2] | 0);
    __ZN7WebCore13endOfSentenceERKNS_15VisiblePositionE(i41, i42);
    i58 = i41 | 0;
    i62 = HEAP32[i58 >> 2] | 0;
    if ((i62 | 0) != 0) {
     i52 = i62 + 8 | 0;
     HEAP32[i52 >> 2] = (HEAP32[i52 >> 2] | 0) + 1;
    }
    i52 = HEAP32[i41 + 4 >> 2] | 0;
    i53 = HEAP32[i41 + 8 >> 2] | 0;
    i50 = i53 & 8;
    i55 = i44 | 0;
    i44 = HEAP32[i55 >> 2] | 0;
    HEAP32[i55 >> 2] = i62;
    do {
     if ((i44 | 0) != 0) {
      i62 = i44 + 8 | 0;
      i55 = i62 | 0;
      i51 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
      HEAP32[i55 >> 2] = i51;
      if ((i51 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i62 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i62 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 40 >> 2] = i52;
    i44 = i1 + 44 | 0;
    i46 = i44;
    i62 = HEAP32[i46 >> 2] & -8 | i53 & 7;
    HEAP32[i46 >> 2] = i62;
    HEAP8[i44] = i62 & 255 & -9 | i50;
    i62 = HEAP32[i58 >> 2] | 0;
    do {
     if ((i62 | 0) != 0) {
      i44 = i62 + 8 | 0;
      i46 = i44 | 0;
      i51 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
      HEAP32[i46 >> 2] = i51;
      if ((i51 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
     }
    } while (0);
    i62 = HEAP32[i42 >> 2] | 0;
    if ((i62 | 0) == 0) {
     i69 = i54;
     break L37;
    }
    i58 = i62 + 8 | 0;
    i62 = i58 | 0;
    i50 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
    HEAP32[i62 >> 2] = i50;
    if ((i50 | 0) >= 1) {
     i69 = i54;
     break L37;
    }
    if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
     i69 = i54;
     break L37;
    }
    __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
    i69 = i54;
    break;
   }
  default:
   {
    i69 = i43 | 0;
   }
  }
 } while (0);
 i43 = i1 + 36 | 0;
 if ((HEAP32[i69 >> 2] | 0) == 0) {
  i42 = HEAP32[i43 >> 2] | 0;
  do {
   if ((i42 | 0) == 0) {
    HEAP32[i69 >> 2] = i42;
   } else {
    i41 = i42 + 8 | 0;
    HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 1;
    i41 = HEAP32[i69 >> 2] | 0;
    HEAP32[i69 >> 2] = i42;
    if ((i41 | 0) == 0) {
     break;
    }
    i40 = i41 + 8 | 0;
    i41 = i40 | 0;
    i39 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
    HEAP32[i41 >> 2] = i39;
    if ((i39 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
   }
  } while (0);
  HEAP32[i1 + 28 >> 2] = HEAP32[i1 + 40 >> 2];
  i42 = HEAP32[i1 + 44 >> 2] | 0;
  i40 = i1 + 32 | 0;
  i39 = i40;
  i41 = HEAP32[i39 >> 2] & -8 | i42 & 7;
  HEAP32[i39 >> 2] = i41;
  HEAP8[i40] = i41 & 255 & -9 | i42 & 8;
 }
 if ((HEAP32[i43 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 i42 = HEAP32[i69 >> 2] | 0;
 do {
  if ((i42 | 0) == 0) {
   HEAP32[i43 >> 2] = i42;
  } else {
   i69 = i42 + 8 | 0;
   HEAP32[i69 >> 2] = (HEAP32[i69 >> 2] | 0) + 1;
   i69 = HEAP32[i43 >> 2] | 0;
   HEAP32[i43 >> 2] = i42;
   if ((i69 | 0) == 0) {
    break;
   }
   i41 = i69 + 8 | 0;
   i69 = i41 | 0;
   i40 = (HEAP32[i69 >> 2] | 0) - 1 | 0;
   HEAP32[i69 >> 2] = i40;
   if ((i40 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 40 >> 2] = HEAP32[i1 + 28 >> 2];
 i42 = HEAP32[i1 + 32 >> 2] | 0;
 i43 = i1 + 44 | 0;
 i1 = i43;
 i41 = HEAP32[i1 >> 2] & -8 | i42 & 7;
 HEAP32[i1 >> 2] = i41;
 HEAP8[i43] = i41 & 255 & -9 | i42 & 8;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16VisibleSelection47adjustSelectionToAvoidCrossingEditingBoundariesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 240 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 64 | 0;
 i11 = i2 + 80 | 0;
 i12 = i2 + 96 | 0;
 i13 = i2 + 112 | 0;
 i14 = i2 + 128 | 0;
 i15 = i2 + 144 | 0;
 i16 = i2 + 160 | 0;
 i17 = i2 + 176 | 0;
 i18 = i2 + 192 | 0;
 i19 = i2 + 208 | 0;
 i20 = i2 + 224 | 0;
 i21 = i1 | 0;
 i22 = i1 | 0;
 if ((HEAP32[i22 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i23 = i1 + 24 | 0;
 i24 = i23 | 0;
 if ((HEAP32[i24 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i25 = i1 + 36 | 0;
 i26 = i25 | 0;
 if ((HEAP32[i26 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i27 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i21, 0) | 0;
 i28 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i23, 0) | 0;
 i29 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i25, 0) | 0;
 i30 = __ZN7WebCore22lowestEditableAncestorEPNS_4NodeE(__ZNK7WebCore8Position13containerNodeEv(i21) | 0) | 0;
 i21 = (i27 | 0) == (i28 | 0);
 i31 = (i27 | 0) == (i29 | 0);
 if (i21 & i31) {
  STACKTOP = i2;
  return;
 }
 do {
  if ((i27 | 0) == 0) {
   i32 = (i29 | 0) != 0;
   do {
    if (!((__ZN7WebCore22lowestEditableAncestorEPNS_4NodeE(__ZNK7WebCore8Position13containerNodeEv(i25) | 0) | 0) == (i30 | 0) & (i32 ^ 1))) {
     __ZN7WebCore33previousVisuallyDistinctCandidateERKNS_8PositionE(i11, i25);
     do {
      if (i32) {
       i33 = __ZNK7WebCore4Node10shadowHostEv(i29) | 0;
       i34 = i11 | 0;
       i35 = HEAP32[i34 >> 2] | 0;
       if ((i35 | 0) != 0 | (i33 | 0) == 0) {
        i36 = i35;
        i37 = i34;
        break;
       }
       i35 = i8 | 0;
       HEAP32[i35 >> 2] = i33;
       i38 = i33 + 8 | 0;
       HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
       __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i12, i8, 2);
       i38 = HEAP32[i35 >> 2] | 0;
       do {
        if ((i38 | 0) != 0) {
         i35 = i38 + 8 | 0;
         i33 = i35 | 0;
         i39 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
         HEAP32[i33 >> 2] = i39;
         if ((i39 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
        }
       } while (0);
       i38 = i12 | 0;
       i35 = HEAP32[i38 >> 2] | 0;
       HEAP32[i38 >> 2] = 0;
       i39 = HEAP32[i34 >> 2] | 0;
       HEAP32[i34 >> 2] = i35;
       do {
        if ((i39 | 0) != 0) {
         i35 = i39 + 8 | 0;
         i33 = i35 | 0;
         i40 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
         HEAP32[i33 >> 2] = i40;
         if ((i40 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
        }
       } while (0);
       HEAP32[i11 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
       i39 = HEAP32[i12 + 8 >> 2] | 0;
       i35 = i11 + 8 | 0;
       i40 = i35;
       i33 = HEAP32[i40 >> 2] & -8 | i39 & 7;
       HEAP32[i40 >> 2] = i33;
       HEAP8[i35] = i33 & 255 & -9 | i39 & 8;
       i39 = HEAP32[i38 >> 2] | 0;
       if ((i39 | 0) == 0) {
        i41 = i34;
        i42 = 60;
        break;
       }
       i33 = i39 + 8 | 0;
       i39 = i33 | 0;
       i35 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
       HEAP32[i39 >> 2] = i35;
       if ((i35 | 0) >= 1) {
        i41 = i34;
        i42 = 60;
        break;
       }
       if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
        i41 = i34;
        i42 = 60;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
       i41 = i34;
       i42 = 60;
      } else {
       i33 = i11 | 0;
       i36 = HEAP32[i33 >> 2] | 0;
       i37 = i33;
      }
     } while (0);
     L81 : while (1) {
      if ((i42 | 0) == 60) {
       i42 = 0;
       i36 = HEAP32[i41 >> 2] | 0;
       i37 = i41;
      }
      i33 = i7 | 0;
      i35 = i13 | 0;
      i39 = i13 + 4 | 0;
      i40 = i11 + 4 | 0;
      i43 = i13 + 8 | 0;
      i44 = i11 + 8 | 0;
      i45 = i44;
      i46 = i36;
      while (1) {
       if ((i46 | 0) == 0) {
        break L81;
       }
       if ((__ZN7WebCore22lowestEditableAncestorEPNS_4NodeE(__ZNK7WebCore8Position13containerNodeEv(i11) | 0) | 0) == (i30 | 0)) {
        if (!(__ZN7WebCore18isEditablePositionERKNS_8PositionENS_12EditableTypeENS_12EUpdateStyleE(i11, 0, 0) | 0)) {
         break L81;
        }
       }
       i47 = __ZN7WebCore23editableRootForPositionERKNS_8PositionENS_12EditableTypeE(i11, 0) | 0;
       if ((i47 | 0) == 0) {
        i48 = 0;
       } else {
        i48 = __ZNK7WebCore4Node10shadowHostEv(i47 | 0) | 0;
       }
       i49 = i48 | 0;
       do {
        if (__ZN7WebCore12isAtomicNodeEPKNS_4NodeE(__ZNK7WebCore8Position13containerNodeEv(i11) | 0) | 0) {
         i47 = __ZNK7WebCore8Position13containerNodeEv(i11) | 0;
         i50 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i47) | 0;
         HEAP32[i33 >> 2] = i50;
         if ((i50 | 0) != 0) {
          i51 = i50 + 8 | 0;
          HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
         }
         __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i13, i7, __ZNK7WebCore4Node9nodeIndexEv(i47) | 0, 0);
         i47 = HEAP32[i33 >> 2] | 0;
         if ((i47 | 0) == 0) {
          i52 = 1;
          i53 = 0;
          break;
         }
         i51 = i47 + 8 | 0;
         i47 = i51 | 0;
         i50 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
         HEAP32[i47 >> 2] = i50;
         if ((i50 | 0) >= 1) {
          i52 = 1;
          i53 = 0;
          break;
         }
         if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
          i52 = 1;
          i53 = 0;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
         i52 = 1;
         i53 = 0;
        } else {
         __ZN7WebCore33previousVisuallyDistinctCandidateERKNS_8PositionE(i13, i11);
         i52 = 0;
         i53 = 1;
        }
       } while (0);
       i51 = HEAP32[i35 >> 2] | 0;
       HEAP32[i35 >> 2] = 0;
       i50 = HEAP32[i37 >> 2] | 0;
       HEAP32[i37 >> 2] = i51;
       do {
        if ((i50 | 0) != 0) {
         i51 = i50 + 8 | 0;
         i47 = i51 | 0;
         i54 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
         HEAP32[i47 >> 2] = i54;
         if ((i54 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
        }
       } while (0);
       HEAP32[i40 >> 2] = HEAP32[i39 >> 2];
       i50 = HEAP32[i43 >> 2] | 0;
       i51 = HEAP32[i45 >> 2] & -8 | i50 & 7;
       HEAP32[i45 >> 2] = i51;
       HEAP8[i44] = i51 & 255 & -9 | i50 & 8;
       do {
        if (i53) {
         i50 = HEAP32[i35 >> 2] | 0;
         if ((i50 | 0) == 0) {
          break;
         }
         i51 = i50 + 8 | 0;
         i50 = i51 | 0;
         i54 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
         HEAP32[i50 >> 2] = i54;
         if ((i54 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
        }
       } while (0);
       do {
        if (i52) {
         i51 = HEAP32[i35 >> 2] | 0;
         if ((i51 | 0) == 0) {
          break;
         }
         i54 = i51 + 8 | 0;
         i51 = i54 | 0;
         i50 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
         HEAP32[i51 >> 2] = i50;
         if ((i50 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
        }
       } while (0);
       i46 = HEAP32[i37 >> 2] | 0;
       if (!((i46 | 0) != 0 | (i48 | 0) == 0)) {
        break;
       }
      }
      i46 = i6 | 0;
      HEAP32[i46 >> 2] = i49;
      i35 = i48 + 8 | 0;
      HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i14, i6, 2);
      i35 = HEAP32[i46 >> 2] | 0;
      do {
       if ((i35 | 0) != 0) {
        i46 = i35 + 8 | 0;
        i43 = i46 | 0;
        i39 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
        HEAP32[i43 >> 2] = i39;
        if ((i39 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
       }
      } while (0);
      i35 = i14 | 0;
      i46 = HEAP32[i35 >> 2] | 0;
      HEAP32[i35 >> 2] = 0;
      i39 = HEAP32[i37 >> 2] | 0;
      HEAP32[i37 >> 2] = i46;
      do {
       if ((i39 | 0) != 0) {
        i46 = i39 + 8 | 0;
        i43 = i46 | 0;
        i33 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
        HEAP32[i43 >> 2] = i33;
        if ((i33 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
       }
      } while (0);
      HEAP32[i40 >> 2] = HEAP32[i14 + 4 >> 2];
      i39 = HEAP32[i14 + 8 >> 2] | 0;
      i46 = HEAP32[i45 >> 2] & -8 | i39 & 7;
      HEAP32[i45 >> 2] = i46;
      HEAP8[i44] = i46 & 255 & -9 | i39 & 8;
      i39 = HEAP32[i35 >> 2] | 0;
      if ((i39 | 0) == 0) {
       i41 = i37;
       i42 = 60;
       continue;
      }
      i46 = i39 + 8 | 0;
      i39 = i46 | 0;
      i33 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
      HEAP32[i39 >> 2] = i33;
      if ((i33 | 0) >= 1) {
       i41 = i37;
       i42 = 60;
       continue;
      }
      if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
       i41 = i37;
       i42 = 60;
       continue;
      }
      __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
      i41 = i37;
      i42 = 60;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i15, i11, 1);
     i46 = i15 | 0;
     i33 = HEAP32[i46 >> 2] | 0;
     if ((i33 | 0) != 0) {
      i39 = i33 + 8 | 0;
      HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
      i39 = HEAP32[i15 + 4 >> 2] | 0;
      i43 = HEAP32[i15 + 8 >> 2] | 0;
      i34 = i43 & 8;
      i38 = HEAP32[i26 >> 2] | 0;
      HEAP32[i26 >> 2] = i33;
      do {
       if ((i38 | 0) != 0) {
        i33 = i38 + 8 | 0;
        i54 = i33 | 0;
        i50 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
        HEAP32[i54 >> 2] = i50;
        if ((i50 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
       }
      } while (0);
      HEAP32[i1 + 40 >> 2] = i39;
      i38 = i1 + 44 | 0;
      i33 = i38;
      i50 = HEAP32[i33 >> 2] & -8 | i43 & 7;
      HEAP32[i33 >> 2] = i50;
      HEAP8[i38] = i50 & 255 & -9 | i34;
      i50 = HEAP32[i46 >> 2] | 0;
      do {
       if ((i50 | 0) != 0) {
        i38 = i50 + 8 | 0;
        i33 = i38 | 0;
        i54 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
        HEAP32[i33 >> 2] = i54;
        if ((i54 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
       }
      } while (0);
      i50 = HEAP32[i37 >> 2] | 0;
      if ((i50 | 0) == 0) {
       break;
      }
      i34 = i50 + 8 | 0;
      i50 = i34 | 0;
      i43 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
      HEAP32[i50 >> 2] = i43;
      if ((i43 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
      break;
     }
     i34 = HEAP32[i22 >> 2] | 0;
     HEAP32[i22 >> 2] = 0;
     do {
      if ((i34 | 0) != 0) {
       i43 = i34 + 8 | 0;
       i50 = i43 | 0;
       i39 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
       HEAP32[i50 >> 2] = i39;
       if ((i39 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
      }
     } while (0);
     HEAP32[i1 + 4 >> 2] = 0;
     i34 = i1 + 8 | 0;
     i43 = i34;
     i39 = HEAP32[i43 >> 2] | 0;
     HEAP32[i43 >> 2] = i39 & -8;
     HEAP8[i34] = i39 & 255 & -16;
     i39 = i1 + 12 | 0;
     i34 = HEAP32[i39 >> 2] | 0;
     HEAP32[i39 >> 2] = 0;
     do {
      if ((i34 | 0) != 0) {
       i39 = i34 + 8 | 0;
       i43 = i39 | 0;
       i50 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
       HEAP32[i43 >> 2] = i50;
       if ((i50 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
      }
     } while (0);
     HEAP32[i1 + 16 >> 2] = 0;
     i34 = i1 + 20 | 0;
     i39 = i34;
     i50 = HEAP32[i39 >> 2] | 0;
     HEAP32[i39 >> 2] = i50 & -8;
     HEAP8[i34] = i50 & 255 & -16;
     __ZN7WebCore16VisibleSelection8validateENS_15TextGranularityE(i1, 0);
     i50 = HEAP32[i46 >> 2] | 0;
     do {
      if ((i50 | 0) != 0) {
       i34 = i50 + 8 | 0;
       i39 = i34 | 0;
       i43 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
       HEAP32[i39 >> 2] = i43;
       if ((i43 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
      }
     } while (0);
     i50 = HEAP32[i37 >> 2] | 0;
     if ((i50 | 0) == 0) {
      STACKTOP = i2;
      return;
     }
     i46 = i50 + 8 | 0;
     i50 = i46 | 0;
     i34 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
     HEAP32[i50 >> 2] = i34;
     if ((i34 | 0) >= 1) {
      STACKTOP = i2;
      return;
     }
     if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
      STACKTOP = i2;
      return;
     }
     __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
     STACKTOP = i2;
     return;
    }
   } while (0);
   i32 = (i28 | 0) != 0;
   if ((__ZN7WebCore22lowestEditableAncestorEPNS_4NodeE(__ZNK7WebCore8Position13containerNodeEv(i23) | 0) | 0) == (i30 | 0) & (i32 ^ 1)) {
    break;
   }
   __ZN7WebCore29nextVisuallyDistinctCandidateERKNS_8PositionE(i16, i23);
   do {
    if (i32) {
     i46 = __ZNK7WebCore4Node10shadowHostEv(i28) | 0;
     i34 = i16 | 0;
     i50 = HEAP32[i34 >> 2] | 0;
     if ((i50 | 0) != 0 | (i46 | 0) == 0) {
      i55 = i50;
      i56 = i34;
      break;
     }
     i50 = i5 | 0;
     HEAP32[i50 >> 2] = i46;
     i43 = i46 + 8 | 0;
     HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i17, i5, 1);
     i43 = HEAP32[i50 >> 2] | 0;
     do {
      if ((i43 | 0) != 0) {
       i50 = i43 + 8 | 0;
       i46 = i50 | 0;
       i39 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
       HEAP32[i46 >> 2] = i39;
       if ((i39 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
      }
     } while (0);
     i43 = i17 | 0;
     i50 = HEAP32[i43 >> 2] | 0;
     HEAP32[i43 >> 2] = 0;
     i39 = HEAP32[i34 >> 2] | 0;
     HEAP32[i34 >> 2] = i50;
     do {
      if ((i39 | 0) != 0) {
       i50 = i39 + 8 | 0;
       i46 = i50 | 0;
       i38 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
       HEAP32[i46 >> 2] = i38;
       if ((i38 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
      }
     } while (0);
     HEAP32[i16 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
     i39 = HEAP32[i17 + 8 >> 2] | 0;
     i50 = i16 + 8 | 0;
     i38 = i50;
     i46 = HEAP32[i38 >> 2] & -8 | i39 & 7;
     HEAP32[i38 >> 2] = i46;
     HEAP8[i50] = i46 & 255 & -9 | i39 & 8;
     i39 = HEAP32[i43 >> 2] | 0;
     if ((i39 | 0) == 0) {
      i57 = i34;
      i42 = 147;
      break;
     }
     i46 = i39 + 8 | 0;
     i39 = i46 | 0;
     i50 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
     HEAP32[i39 >> 2] = i50;
     if ((i50 | 0) >= 1) {
      i57 = i34;
      i42 = 147;
      break;
     }
     if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
      i57 = i34;
      i42 = 147;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
     i57 = i34;
     i42 = 147;
    } else {
     i46 = i16 | 0;
     i55 = HEAP32[i46 >> 2] | 0;
     i56 = i46;
    }
   } while (0);
   L196 : while (1) {
    if ((i42 | 0) == 147) {
     i42 = 0;
     i55 = HEAP32[i57 >> 2] | 0;
     i56 = i57;
    }
    i32 = i4 | 0;
    i46 = i18 | 0;
    i50 = i18 + 4 | 0;
    i39 = i16 + 4 | 0;
    i38 = i18 + 8 | 0;
    i54 = i16 + 8 | 0;
    i33 = i54;
    i51 = i55;
    while (1) {
     if ((i51 | 0) == 0) {
      break L196;
     }
     if ((__ZN7WebCore22lowestEditableAncestorEPNS_4NodeE(__ZNK7WebCore8Position13containerNodeEv(i16) | 0) | 0) == (i30 | 0)) {
      if (!(__ZN7WebCore18isEditablePositionERKNS_8PositionENS_12EditableTypeENS_12EUpdateStyleE(i16, 0, 0) | 0)) {
       break L196;
      }
     }
     i47 = __ZN7WebCore23editableRootForPositionERKNS_8PositionENS_12EditableTypeE(i16, 0) | 0;
     if ((i47 | 0) == 0) {
      i58 = 0;
     } else {
      i58 = __ZNK7WebCore4Node10shadowHostEv(i47 | 0) | 0;
     }
     i59 = i58 | 0;
     do {
      if (__ZN7WebCore12isAtomicNodeEPKNS_4NodeE(__ZNK7WebCore8Position13containerNodeEv(i16) | 0) | 0) {
       i47 = __ZNK7WebCore8Position13containerNodeEv(i16) | 0;
       i60 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i47) | 0;
       HEAP32[i32 >> 2] = i60;
       if ((i60 | 0) != 0) {
        i61 = i60 + 8 | 0;
        HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 1;
       }
       __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i18, i4, (__ZNK7WebCore4Node9nodeIndexEv(i47) | 0) + 1 | 0, 0);
       i47 = HEAP32[i32 >> 2] | 0;
       if ((i47 | 0) == 0) {
        i62 = 0;
        i63 = 1;
        break;
       }
       i61 = i47 + 8 | 0;
       i47 = i61 | 0;
       i60 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
       HEAP32[i47 >> 2] = i60;
       if ((i60 | 0) >= 1) {
        i62 = 0;
        i63 = 1;
        break;
       }
       if ((HEAP32[i61 + 8 >> 2] | 0) != 0) {
        i62 = 0;
        i63 = 1;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i61 - 8 | 0);
       i62 = 0;
       i63 = 1;
      } else {
       __ZN7WebCore29nextVisuallyDistinctCandidateERKNS_8PositionE(i18, i16);
       i62 = 1;
       i63 = 0;
      }
     } while (0);
     i35 = HEAP32[i46 >> 2] | 0;
     HEAP32[i46 >> 2] = 0;
     i44 = HEAP32[i56 >> 2] | 0;
     HEAP32[i56 >> 2] = i35;
     do {
      if ((i44 | 0) != 0) {
       i35 = i44 + 8 | 0;
       i45 = i35 | 0;
       i40 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
       HEAP32[i45 >> 2] = i40;
       if ((i40 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
      }
     } while (0);
     HEAP32[i39 >> 2] = HEAP32[i50 >> 2];
     i44 = HEAP32[i38 >> 2] | 0;
     i35 = HEAP32[i33 >> 2] & -8 | i44 & 7;
     HEAP32[i33 >> 2] = i35;
     HEAP8[i54] = i35 & 255 & -9 | i44 & 8;
     do {
      if (i62) {
       i44 = HEAP32[i46 >> 2] | 0;
       if ((i44 | 0) == 0) {
        break;
       }
       i35 = i44 + 8 | 0;
       i44 = i35 | 0;
       i40 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
       HEAP32[i44 >> 2] = i40;
       if ((i40 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
      }
     } while (0);
     do {
      if (i63) {
       i35 = HEAP32[i46 >> 2] | 0;
       if ((i35 | 0) == 0) {
        break;
       }
       i40 = i35 + 8 | 0;
       i35 = i40 | 0;
       i44 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
       HEAP32[i35 >> 2] = i44;
       if ((i44 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
      }
     } while (0);
     i51 = HEAP32[i56 >> 2] | 0;
     if (!((i51 | 0) != 0 | (i58 | 0) == 0)) {
      break;
     }
    }
    i51 = i3 | 0;
    HEAP32[i51 >> 2] = i59;
    i46 = i58 + 8 | 0;
    HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i19, i3, 1);
    i46 = HEAP32[i51 >> 2] | 0;
    do {
     if ((i46 | 0) != 0) {
      i51 = i46 + 8 | 0;
      i38 = i51 | 0;
      i50 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
      HEAP32[i38 >> 2] = i50;
      if ((i50 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
     }
    } while (0);
    i46 = i19 | 0;
    i51 = HEAP32[i46 >> 2] | 0;
    HEAP32[i46 >> 2] = 0;
    i50 = HEAP32[i56 >> 2] | 0;
    HEAP32[i56 >> 2] = i51;
    do {
     if ((i50 | 0) != 0) {
      i51 = i50 + 8 | 0;
      i38 = i51 | 0;
      i32 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
      HEAP32[i38 >> 2] = i32;
      if ((i32 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
     }
    } while (0);
    HEAP32[i39 >> 2] = HEAP32[i19 + 4 >> 2];
    i50 = HEAP32[i19 + 8 >> 2] | 0;
    i51 = HEAP32[i33 >> 2] & -8 | i50 & 7;
    HEAP32[i33 >> 2] = i51;
    HEAP8[i54] = i51 & 255 & -9 | i50 & 8;
    i50 = HEAP32[i46 >> 2] | 0;
    if ((i50 | 0) == 0) {
     i57 = i56;
     i42 = 147;
     continue;
    }
    i51 = i50 + 8 | 0;
    i50 = i51 | 0;
    i32 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
    HEAP32[i50 >> 2] = i32;
    if ((i32 | 0) >= 1) {
     i57 = i56;
     i42 = 147;
     continue;
    }
    if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
     i57 = i56;
     i42 = 147;
     continue;
    }
    __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
    i57 = i56;
    i42 = 147;
   }
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i20, i16, 1);
   i51 = i20 | 0;
   i32 = HEAP32[i51 >> 2] | 0;
   if ((i32 | 0) != 0) {
    i50 = i32 + 8 | 0;
    HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
    i50 = HEAP32[i20 + 4 >> 2] | 0;
    i38 = HEAP32[i20 + 8 >> 2] | 0;
    i34 = i38 & 8;
    i43 = HEAP32[i24 >> 2] | 0;
    HEAP32[i24 >> 2] = i32;
    do {
     if ((i43 | 0) != 0) {
      i32 = i43 + 8 | 0;
      i40 = i32 | 0;
      i44 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
      HEAP32[i40 >> 2] = i44;
      if ((i44 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 28 >> 2] = i50;
    i43 = i1 + 32 | 0;
    i32 = i43;
    i44 = HEAP32[i32 >> 2] & -8 | i38 & 7;
    HEAP32[i32 >> 2] = i44;
    HEAP8[i43] = i44 & 255 & -9 | i34;
    i44 = HEAP32[i51 >> 2] | 0;
    do {
     if ((i44 | 0) != 0) {
      i43 = i44 + 8 | 0;
      i32 = i43 | 0;
      i40 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
      HEAP32[i32 >> 2] = i40;
      if ((i40 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
     }
    } while (0);
    i44 = HEAP32[i56 >> 2] | 0;
    if ((i44 | 0) == 0) {
     break;
    }
    i34 = i44 + 8 | 0;
    i44 = i34 | 0;
    i38 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
    HEAP32[i44 >> 2] = i38;
    if ((i38 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
    break;
   }
   i34 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = 0;
   do {
    if ((i34 | 0) != 0) {
     i38 = i34 + 8 | 0;
     i44 = i38 | 0;
     i50 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
     HEAP32[i44 >> 2] = i50;
     if ((i50 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
    }
   } while (0);
   HEAP32[i1 + 4 >> 2] = 0;
   i34 = i1 + 8 | 0;
   i38 = i34;
   i50 = HEAP32[i38 >> 2] | 0;
   HEAP32[i38 >> 2] = i50 & -8;
   HEAP8[i34] = i50 & 255 & -16;
   i50 = i1 + 12 | 0;
   i34 = HEAP32[i50 >> 2] | 0;
   HEAP32[i50 >> 2] = 0;
   do {
    if ((i34 | 0) != 0) {
     i50 = i34 + 8 | 0;
     i38 = i50 | 0;
     i44 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
     HEAP32[i38 >> 2] = i44;
     if ((i44 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
    }
   } while (0);
   HEAP32[i1 + 16 >> 2] = 0;
   i34 = i1 + 20 | 0;
   i50 = i34;
   i44 = HEAP32[i50 >> 2] | 0;
   HEAP32[i50 >> 2] = i44 & -8;
   HEAP8[i34] = i44 & 255 & -16;
   __ZN7WebCore16VisibleSelection8validateENS_15TextGranularityE(i1, 0);
   i44 = HEAP32[i51 >> 2] | 0;
   do {
    if ((i44 | 0) != 0) {
     i34 = i44 + 8 | 0;
     i50 = i34 | 0;
     i38 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
     HEAP32[i50 >> 2] = i38;
     if ((i38 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
    }
   } while (0);
   i44 = HEAP32[i56 >> 2] | 0;
   if ((i44 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   i51 = i44 + 8 | 0;
   i44 = i51 | 0;
   i34 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
   HEAP32[i44 >> 2] = i34;
   if ((i34 | 0) >= 1) {
    STACKTOP = i2;
    return;
   }
   if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
    STACKTOP = i2;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
   STACKTOP = i2;
   return;
  } else {
   do {
    if (!i21) {
     __ZN7WebCore40firstEditablePositionAfterPositionInRootERKNS_8PositionEPNS_4NodeE(i9, i23, i27);
     i51 = i9 | 0;
     i34 = HEAP32[i51 >> 2] | 0;
     if ((i34 | 0) != 0) {
      i44 = i34 + 8 | 0;
      HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 1;
     }
     i44 = HEAP32[i9 + 4 >> 2] | 0;
     i38 = HEAP32[i9 + 8 >> 2] | 0;
     i50 = i38 & 8;
     i43 = HEAP32[i24 >> 2] | 0;
     HEAP32[i24 >> 2] = i34;
     do {
      if ((i43 | 0) != 0) {
       i34 = i43 + 8 | 0;
       i40 = i34 | 0;
       i32 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
       HEAP32[i40 >> 2] = i32;
       if ((i32 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
      }
     } while (0);
     i43 = i1 + 28 | 0;
     HEAP32[i43 >> 2] = i44;
     i46 = i1 + 32 | 0;
     i54 = i46;
     i33 = HEAP32[i54 >> 2] & -8 | i38 & 7;
     HEAP32[i54 >> 2] = i33;
     HEAP8[i46] = i33 & 255 & -9 | i50;
     if ((HEAP32[i24 >> 2] | 0) == 0) {
      i33 = HEAP32[i26 >> 2] | 0;
      do {
       if ((i33 | 0) == 0) {
        HEAP32[i24 >> 2] = i33;
       } else {
        i39 = i33 + 8 | 0;
        HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
        i39 = HEAP32[i24 >> 2] | 0;
        HEAP32[i24 >> 2] = i33;
        if ((i39 | 0) == 0) {
         break;
        }
        i34 = i39 + 8 | 0;
        i39 = i34 | 0;
        i32 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
        HEAP32[i39 >> 2] = i32;
        if ((i32 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
       }
      } while (0);
      HEAP32[i43 >> 2] = HEAP32[i1 + 40 >> 2];
      i33 = HEAP32[i1 + 44 >> 2] | 0;
      i50 = HEAP32[i54 >> 2] & -8 | i33 & 7;
      HEAP32[i54 >> 2] = i50;
      HEAP8[i46] = i50 & 255 & -9 | i33 & 8;
     }
     i33 = HEAP32[i51 >> 2] | 0;
     if ((i33 | 0) == 0) {
      break;
     }
     i50 = i33 + 8 | 0;
     i33 = i50 | 0;
     i38 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
     HEAP32[i33 >> 2] = i38;
     if ((i38 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
    }
   } while (0);
   if (i31) {
    break;
   }
   __ZN7WebCore40lastEditablePositionBeforePositionInRootERKNS_8PositionEPNS_4NodeE(i10, i25, i27);
   i50 = i10 | 0;
   i38 = HEAP32[i50 >> 2] | 0;
   if ((i38 | 0) != 0) {
    i33 = i38 + 8 | 0;
    HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
   }
   i33 = HEAP32[i10 + 4 >> 2] | 0;
   i44 = HEAP32[i10 + 8 >> 2] | 0;
   i34 = i44 & 8;
   i32 = HEAP32[i26 >> 2] | 0;
   HEAP32[i26 >> 2] = i38;
   do {
    if ((i32 | 0) != 0) {
     i38 = i32 + 8 | 0;
     i39 = i38 | 0;
     i40 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
     HEAP32[i39 >> 2] = i40;
     if ((i40 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
    }
   } while (0);
   i32 = i1 + 40 | 0;
   HEAP32[i32 >> 2] = i33;
   i38 = i1 + 44 | 0;
   i40 = i38;
   i39 = HEAP32[i40 >> 2] & -8 | i44 & 7;
   HEAP32[i40 >> 2] = i39;
   HEAP8[i38] = i39 & 255 & -9 | i34;
   if ((HEAP32[i26 >> 2] | 0) == 0) {
    i39 = HEAP32[i24 >> 2] | 0;
    do {
     if ((i39 | 0) == 0) {
      HEAP32[i26 >> 2] = i39;
     } else {
      i35 = i39 + 8 | 0;
      HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
      i35 = HEAP32[i26 >> 2] | 0;
      HEAP32[i26 >> 2] = i39;
      if ((i35 | 0) == 0) {
       break;
      }
      i45 = i35 + 8 | 0;
      i35 = i45 | 0;
      i61 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
      HEAP32[i35 >> 2] = i61;
      if ((i61 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
     }
    } while (0);
    HEAP32[i32 >> 2] = HEAP32[i1 + 28 >> 2];
    i39 = HEAP32[i1 + 32 >> 2] | 0;
    i34 = HEAP32[i40 >> 2] & -8 | i39 & 7;
    HEAP32[i40 >> 2] = i34;
    HEAP8[i38] = i34 & 255 & -9 | i39 & 8;
   }
   i39 = HEAP32[i50 >> 2] | 0;
   if ((i39 | 0) == 0) {
    break;
   }
   i34 = i39 + 8 | 0;
   i39 = i34 | 0;
   i44 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
   HEAP32[i39 >> 2] = i44;
   if ((i44 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
  }
 } while (0);
 i26 = i1 + 12 | 0;
 if ((i30 | 0) == (__ZN7WebCore22lowestEditableAncestorEPNS_4NodeE(__ZNK7WebCore8Position13containerNodeEv(i26) | 0) | 0)) {
  STACKTOP = i2;
  return;
 }
 i30 = (HEAP8[i1 + 56 | 0] & 1) != 0 ? i25 : i23;
 i23 = HEAP32[i30 >> 2] | 0;
 if ((i23 | 0) != 0) {
  i25 = i23 + 8 | 0;
  HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
 }
 i25 = i26 | 0;
 i26 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = i23;
 do {
  if ((i26 | 0) != 0) {
   i23 = i26 + 8 | 0;
   i25 = i23 | 0;
   i24 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   HEAP32[i25 >> 2] = i24;
   if ((i24 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 16 >> 2] = HEAP32[i30 + 4 >> 2];
 i26 = i30 + 8 | 0;
 i30 = i1 + 20 | 0;
 i1 = i30;
 i23 = HEAP32[i1 >> 2] & -8 | HEAP32[i26 >> 2] & 7;
 HEAP32[i1 >> 2] = i23;
 HEAP8[i30] = i23 & 255 & -9 | HEAP8[i26] & 8;
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i3 + 64 | 0;
 i9 = i3 + 80 | 0;
 i10 = i3 + 96 | 0;
 i11 = i3 + 112 | 0;
 i12 = i2 + 52 | 0;
 if ((HEAP32[i12 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 i13 = i2 + 24 | 0;
 __ZN7WebCore8Document12updateLayoutEv(HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0);
 i14 = HEAP32[i12 >> 2] | 0;
 if ((i14 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 i12 = i4 | 0;
 i15 = i4 + 4 | 0;
 i16 = i4 + 8 | 0;
 i17 = i16;
 i18 = i5 | 0;
 _memset(i4 | 0, 0, 12) | 0;
 i19 = i5 + 4 | 0;
 i20 = i5 + 8 | 0;
 i21 = i20;
 _memset(i5 | 0, 0, 12) | 0;
 do {
  if ((i14 | 0) == 1) {
   __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i7, i13, 1);
   __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i6, i7);
   i22 = i6 | 0;
   i23 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = 0;
   i24 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i23;
   do {
    if ((i24 | 0) != 0) {
     i23 = i24 + 8 | 0;
     i25 = i23 | 0;
     i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     HEAP32[i25 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
    }
   } while (0);
   HEAP32[i15 >> 2] = HEAP32[i6 + 4 >> 2];
   i24 = HEAP32[i6 + 8 >> 2] | 0;
   i23 = HEAP32[i17 >> 2] & -8 | i24 & 7;
   HEAP32[i17 >> 2] = i23;
   HEAP8[i16] = i23 & 255 & -9 | i24 & 8;
   i24 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i23 = i24 + 8 | 0;
     i26 = i23 | 0;
     i25 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
    }
   } while (0);
   i24 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i22 = i24 + 8 | 0;
     i23 = i22 | 0;
     i25 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     HEAP32[i23 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
    }
   } while (0);
   i24 = HEAP32[i12 >> 2] | 0;
   if ((i24 | 0) != 0) {
    i22 = i24 + 8 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
   }
   i22 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i24;
   do {
    if ((i22 | 0) != 0) {
     i24 = i22 + 8 | 0;
     i25 = i24 | 0;
     i23 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     HEAP32[i25 >> 2] = i23;
     if ((i23 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
    }
   } while (0);
   HEAP32[i19 >> 2] = HEAP32[i15 >> 2];
   i22 = HEAP32[i17 >> 2] | 0;
   i24 = HEAP32[i21 >> 2] & -8 | i22 & 7;
   HEAP32[i21 >> 2] = i24;
   HEAP8[i20] = i24 & 255 & -9 | i22 & 8;
  } else {
   __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i8, i13, 1);
   i22 = i8 | 0;
   i24 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = 0;
   i23 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i24;
   do {
    if ((i23 | 0) != 0) {
     i24 = i23 + 8 | 0;
     i25 = i24 | 0;
     i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     HEAP32[i25 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
    }
   } while (0);
   HEAP32[i15 >> 2] = HEAP32[i8 + 4 >> 2];
   i23 = HEAP32[i8 + 8 >> 2] | 0;
   i24 = HEAP32[i17 >> 2] & -8 | i23 & 7;
   HEAP32[i17 >> 2] = i24;
   HEAP8[i16] = i24 & 255 & -9 | i23 & 8;
   i23 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i24 = i23 + 8 | 0;
     i26 = i24 | 0;
     i25 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
    }
   } while (0);
   __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i9, i2 + 36 | 0, 1);
   i23 = i9 | 0;
   i22 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = 0;
   i24 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i22;
   do {
    if ((i24 | 0) != 0) {
     i22 = i24 + 8 | 0;
     i25 = i22 | 0;
     i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     HEAP32[i25 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
    }
   } while (0);
   HEAP32[i19 >> 2] = HEAP32[i9 + 4 >> 2];
   i24 = HEAP32[i9 + 8 >> 2] | 0;
   i22 = HEAP32[i21 >> 2] & -8 | i24 & 7;
   HEAP32[i21 >> 2] = i22;
   HEAP8[i20] = i22 & 255 & -9 | i24 & 8;
   i24 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i22 = i24 + 8 | 0;
     i26 = i22 | 0;
     i25 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
    }
   } while (0);
   do {
    if ((__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i4, i5) | 0) > 0) {
     i24 = HEAP32[i12 >> 2] | 0;
     i23 = (i24 | 0) == 0;
     if (!i23) {
      i22 = i24 + 8 | 0;
      HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
     }
     i22 = HEAP32[i15 >> 2] | 0;
     i25 = HEAP32[i17 >> 2] | 0;
     i26 = i25 & 8;
     i27 = HEAP32[i18 >> 2] | 0;
     if ((i27 | 0) != 0) {
      i28 = i27 + 8 | 0;
      HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
     }
     i28 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = i27;
     do {
      if ((i28 | 0) != 0) {
       i27 = i28 + 8 | 0;
       i29 = i27 | 0;
       i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
       HEAP32[i29 >> 2] = i30;
       if ((i30 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
      }
     } while (0);
     HEAP32[i15 >> 2] = HEAP32[i19 >> 2];
     i28 = HEAP32[i21 >> 2] | 0;
     i27 = HEAP32[i17 >> 2] & -8 | i28 & 7;
     HEAP32[i17 >> 2] = i27;
     HEAP8[i16] = i27 & 255 & -9 | i28 & 8;
     if (!i23) {
      i28 = i24 + 8 | 0;
      HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
     }
     i28 = HEAP32[i18 >> 2] | 0;
     HEAP32[i18 >> 2] = i24;
     do {
      if ((i28 | 0) != 0) {
       i27 = i28 + 8 | 0;
       i30 = i27 | 0;
       i29 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
       HEAP32[i30 >> 2] = i29;
       if ((i29 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
      }
     } while (0);
     HEAP32[i19 >> 2] = i22;
     i28 = HEAP32[i21 >> 2] & -8 | i25 & 7;
     HEAP32[i21 >> 2] = i28;
     HEAP8[i20] = i28 & 255 & -9 | i26;
     if (i23) {
      break;
     }
     i28 = i24 + 8 | 0;
     i27 = i28 | 0;
     i29 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     HEAP32[i27 >> 2] = i29;
     if ((i29 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
    }
   } while (0);
   __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i10, i4);
   i28 = i10 | 0;
   i29 = HEAP32[i28 >> 2] | 0;
   HEAP32[i28 >> 2] = 0;
   i27 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i29;
   do {
    if ((i27 | 0) != 0) {
     i29 = i27 + 8 | 0;
     i30 = i29 | 0;
     i31 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     HEAP32[i30 >> 2] = i31;
     if ((i31 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
    }
   } while (0);
   HEAP32[i15 >> 2] = HEAP32[i10 + 4 >> 2];
   i27 = HEAP32[i10 + 8 >> 2] | 0;
   i29 = HEAP32[i17 >> 2] & -8 | i27 & 7;
   HEAP32[i17 >> 2] = i29;
   HEAP8[i16] = i29 & 255 & -9 | i27 & 8;
   i27 = HEAP32[i28 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i29 = i27 + 8 | 0;
     i31 = i29 | 0;
     i30 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     HEAP32[i31 >> 2] = i30;
     if ((i30 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
    }
   } while (0);
   __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i11, i5);
   i27 = i11 | 0;
   i28 = HEAP32[i27 >> 2] | 0;
   HEAP32[i27 >> 2] = 0;
   i29 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i28;
   do {
    if ((i29 | 0) != 0) {
     i28 = i29 + 8 | 0;
     i30 = i28 | 0;
     i31 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     HEAP32[i30 >> 2] = i31;
     if ((i31 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
    }
   } while (0);
   HEAP32[i19 >> 2] = HEAP32[i11 + 4 >> 2];
   i29 = HEAP32[i11 + 8 >> 2] | 0;
   i28 = HEAP32[i21 >> 2] & -8 | i29 & 7;
   HEAP32[i21 >> 2] = i28;
   HEAP8[i20] = i28 & 255 & -9 | i29 & 8;
   i29 = HEAP32[i27 >> 2] | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   i28 = i29 + 8 | 0;
   i29 = i28 | 0;
   i31 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
   HEAP32[i29 >> 2] = i31;
   if ((i31 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
  }
 } while (0);
 do {
  if ((__ZNK7WebCore8Position13containerNodeEv(i4) | 0) == 0) {
   i32 = 78;
  } else {
   if ((__ZNK7WebCore8Position13containerNodeEv(i5) | 0) == 0) {
    i32 = 78;
    break;
   }
   __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i1, HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, i4, i5);
  }
 } while (0);
 if ((i32 | 0) == 78) {
  HEAP32[i1 >> 2] = 0;
 }
 i1 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i18 = i1 + 8 | 0;
   i32 = i18 | 0;
   i5 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
   HEAP32[i32 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i12 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i12 = i1 + 8 | 0;
 i1 = i12 | 0;
 i18 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i18;
 if ((i18 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16VisibleSelection46adjustSelectionToAvoidCrossingShadowBoundariesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 64 | 0;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i11 = i1 + 24 | 0;
 i12 = i11 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i14 = i1 + 36 | 0;
 i15 = i14 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i13 + 20 >> 2] | 0) == (HEAP32[i16 + 20 >> 2] | 0)) {
  STACKTOP = i2;
  return;
 }
 i16 = i1 + 12 | 0;
 if ((HEAP8[i1 + 56 | 0] & 1) == 0) {
  i13 = __ZNK7WebCore8Position13containerNodeEv(i14) | 0;
  i17 = HEAP32[i13 + 20 >> 2] | 0;
  i18 = __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE(i17, __ZNK7WebCore8Position13containerNodeEv(i11) | 0) | 0;
  do {
   if ((i18 | 0) == 0) {
    i19 = HEAP32[(HEAP32[i17 + 4 >> 2] | 0) + 36 >> 2] | 0;
    if ((i19 | 0) == 0) {
     _memset(i10 | 0, 0, 12) | 0;
     break;
    }
    i20 = i8 | 0;
    HEAP32[i20 >> 2] = i19;
    i21 = i19 + 8 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i10, i8, 1);
    i21 = HEAP32[i20 >> 2] | 0;
    if ((i21 | 0) == 0) {
     break;
    }
    i20 = i21 + 8 | 0;
    i21 = i20 | 0;
    i19 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
    HEAP32[i21 >> 2] = i19;
    if ((i19 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
   } else {
    if (__ZNK7WebCore4Node8containsEPKS0_(i18, i13) | 0) {
     i20 = i7 | 0;
     HEAP32[i20 >> 2] = i18;
     i19 = i18 + 8 | 0;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i10, i7, 1);
     i19 = HEAP32[i20 >> 2] | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     i20 = i19 + 8 | 0;
     i19 = i20 | 0;
     i21 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     HEAP32[i19 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
     break;
    } else {
     i20 = i6 | 0;
     HEAP32[i20 >> 2] = i18;
     i21 = i18 + 8 | 0;
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i10, i6, 2);
     i21 = HEAP32[i20 >> 2] | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     i20 = i21 + 8 | 0;
     i21 = i20 | 0;
     i19 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
     break;
    }
   }
  } while (0);
  i6 = i10 | 0;
  i18 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  i7 = i16 | 0;
  i13 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i18;
  do {
   if ((i13 | 0) != 0) {
    i18 = i13 + 8 | 0;
    i8 = i18 | 0;
    i17 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
    HEAP32[i8 >> 2] = i17;
    if ((i17 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
   }
  } while (0);
  i13 = i1 + 16 | 0;
  HEAP32[i13 >> 2] = HEAP32[i10 + 4 >> 2];
  i18 = HEAP32[i10 + 8 >> 2] | 0;
  i10 = i1 + 20 | 0;
  i17 = i10;
  i8 = HEAP32[i17 >> 2] & -8 | i18 & 7;
  HEAP32[i17 >> 2] = i8;
  HEAP8[i10] = i8 & 255 & -9 | i18 & 8;
  i18 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i18 | 0) != 0) {
    i6 = i18 + 8 | 0;
    i8 = i6 | 0;
    i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
    HEAP32[i8 >> 2] = i10;
    if ((i10 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
   }
  } while (0);
  i18 = HEAP32[i7 >> 2] | 0;
  if ((i18 | 0) != 0) {
   i7 = i18 + 8 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  }
  i7 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = i18;
  do {
   if ((i7 | 0) != 0) {
    i18 = i7 + 8 | 0;
    i12 = i18 | 0;
    i6 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
    HEAP32[i12 >> 2] = i6;
    if ((i6 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
   }
  } while (0);
  HEAP32[i1 + 28 >> 2] = HEAP32[i13 >> 2];
  i13 = HEAP32[i17 >> 2] | 0;
  i17 = i1 + 32 | 0;
  i7 = i17;
  i18 = HEAP32[i7 >> 2] & -8 | i13 & 7;
  HEAP32[i7 >> 2] = i18;
  HEAP8[i17] = i18 & 255 & -9 | i13 & 8;
  STACKTOP = i2;
  return;
 } else {
  i13 = __ZNK7WebCore8Position13containerNodeEv(i11) | 0;
  i11 = HEAP32[i13 + 20 >> 2] | 0;
  i18 = __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE(i11, __ZNK7WebCore8Position13containerNodeEv(i14) | 0) | 0;
  do {
   if ((i18 | 0) == 0) {
    i14 = HEAP32[(HEAP32[i11 + 4 >> 2] | 0) + 40 >> 2] | 0;
    if ((i14 | 0) == 0) {
     _memset(i9 | 0, 0, 12) | 0;
     break;
    }
    i17 = i5 | 0;
    HEAP32[i17 >> 2] = i14;
    i7 = i14 + 8 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i9, i5, 2);
    i7 = HEAP32[i17 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    i17 = i7 + 8 | 0;
    i7 = i17 | 0;
    i14 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    HEAP32[i7 >> 2] = i14;
    if ((i14 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
   } else {
    if (__ZNK7WebCore4Node8containsEPKS0_(i18, i13) | 0) {
     i17 = i4 | 0;
     HEAP32[i17 >> 2] = i18;
     i14 = i18 + 8 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i9, i4, 2);
     i14 = HEAP32[i17 >> 2] | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     i17 = i14 + 8 | 0;
     i14 = i17 | 0;
     i7 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i7;
     if ((i7 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
     break;
    } else {
     i17 = i3 | 0;
     HEAP32[i17 >> 2] = i18;
     i7 = i18 + 8 | 0;
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i9, i3, 1);
     i7 = HEAP32[i17 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     i17 = i7 + 8 | 0;
     i7 = i17 | 0;
     i14 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     HEAP32[i7 >> 2] = i14;
     if ((i14 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
     break;
    }
   }
  } while (0);
  i3 = i9 | 0;
  i18 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  i4 = i16 | 0;
  i16 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = i18;
  do {
   if ((i16 | 0) != 0) {
    i18 = i16 + 8 | 0;
    i13 = i18 | 0;
    i5 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
    HEAP32[i13 >> 2] = i5;
    if ((i5 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
   }
  } while (0);
  i16 = i1 + 16 | 0;
  HEAP32[i16 >> 2] = HEAP32[i9 + 4 >> 2];
  i18 = HEAP32[i9 + 8 >> 2] | 0;
  i9 = i1 + 20 | 0;
  i5 = i9;
  i13 = HEAP32[i5 >> 2] & -8 | i18 & 7;
  HEAP32[i5 >> 2] = i13;
  HEAP8[i9] = i13 & 255 & -9 | i18 & 8;
  i18 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i18 | 0) != 0) {
    i3 = i18 + 8 | 0;
    i13 = i3 | 0;
    i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
    HEAP32[i13 >> 2] = i9;
    if ((i9 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
   }
  } while (0);
  i18 = HEAP32[i4 >> 2] | 0;
  if ((i18 | 0) != 0) {
   i4 = i18 + 8 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  }
  i4 = HEAP32[i15 >> 2] | 0;
  HEAP32[i15 >> 2] = i18;
  do {
   if ((i4 | 0) != 0) {
    i18 = i4 + 8 | 0;
    i15 = i18 | 0;
    i3 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    HEAP32[i15 >> 2] = i3;
    if ((i3 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
   }
  } while (0);
  HEAP32[i1 + 40 >> 2] = HEAP32[i16 >> 2];
  i16 = HEAP32[i5 >> 2] | 0;
  i5 = i1 + 44 | 0;
  i1 = i5;
  i4 = HEAP32[i1 >> 2] & -8 | i16 & 7;
  HEAP32[i1 >> 2] = i4;
  HEAP8[i5] = i4 & 255 & -9 | i16 & 8;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore16VisibleSelection24appendTrailingWhitespaceEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 232 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 48 | 0;
 i9 = i2 + 56 | 0;
 i10 = i2 + 208 | 0;
 i11 = i2 + 224 | 0;
 i12 = i1 + 36 | 0;
 i13 = i12 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i15 = 0;
  } else {
   i16 = i14 + 20 | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == 0) {
    i15 = 0;
    break;
   }
   i17 = __ZN7WebCore35deprecatedEnclosingBlockFlowElementEPNS_4NodeE(i14) | 0;
   if ((i17 | 0) == 0) {
    i15 = 0;
    break;
   }
   __ZN7WebCore5Range6createERNS_8DocumentE(i5, HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0);
   i16 = i5 | 0;
   i18 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i6 >> 2] = 0;
   __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i7, i12);
   __ZN7WebCore5Range18selectNodeContentsEPNS_4NodeERi(i18, i17 | 0, i6);
   i17 = __ZNK7WebCore8Position13containerNodeEv(i7) | 0;
   i16 = i8 | 0;
   HEAP32[i16 >> 2] = i17;
   if ((i17 | 0) != 0) {
    i19 = i17 + 8 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   }
   __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i18, i8, HEAP32[i7 + 4 >> 2] | 0, i6);
   i19 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i16 = i19 + 8 | 0;
     i17 = i16 | 0;
     i20 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i20;
     if ((i20 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   i19 = (HEAP32[i6 >> 2] | 0) == 0;
   i16 = i19 ? i18 : 0;
   i20 = i19 ? 0 : i18;
   i19 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i17 = i19 + 8 | 0;
     i21 = i17 | 0;
     i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i22;
     if ((i22 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
    }
   } while (0);
   if ((i20 | 0) == 0) {
    i15 = i16;
    break;
   }
   i19 = i20 | 0;
   i18 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i20);
    __ZN3WTF8fastFreeEPv(i20);
    i15 = i16;
    break;
   } else {
    HEAP32[i19 >> 2] = i18;
    i15 = i16;
    break;
   }
  }
 } while (0);
 if ((i15 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore17CharacterIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE(i9, i15, 1);
 i7 = i9 + 84 | 0;
 i6 = i9 + 4 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 L26 : do {
  if ((HEAP32[i7 >> 2] | 0) != (i8 | 0)) {
   i12 = i9 + 80 | 0;
   i5 = i9 + 88 | 0;
   i14 = i9 + 72 | 0;
   i18 = i11 | 0;
   i19 = i3 | 0;
   i17 = i4 | 0;
   i22 = i10 | 0;
   i21 = i10 + 4 | 0;
   i23 = i1 + 40 | 0;
   i24 = i10 + 8 | 0;
   i25 = i1 + 44 | 0;
   i26 = i25;
   i27 = i8;
   while (1) {
    i28 = HEAP32[i12 >> 2] | 0;
    if ((i28 | 0) == 0) {
     i29 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i29 | 0) == 0) {
       i30 = 0;
       i31 = i27;
      } else {
       if ((HEAP32[i29 + 16 >> 2] & 32 | 0) == 0) {
        i30 = HEAP32[i29 + 8 >> 2] | 0;
        i31 = i27;
        break;
       } else {
        i32 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i29) | 0;
        i30 = i32;
        i31 = HEAP32[i6 >> 2] | 0;
        break;
       }
      }
     } while (0);
     i33 = i30 + (HEAP32[i14 >> 2] << 1) | 0;
     i34 = i31;
    } else {
     i33 = i28;
     i34 = i27;
    }
    i29 = HEAP16[i33 + (i34 << 1) >> 1] | 0;
    do {
     if ((i29 & 65535) >>> 0 < 128 >>> 0) {
      if ((i29 & 65535) >>> 0 >= 33 >>> 0) {
       i35 = 0;
       break;
      }
      if (i29 << 16 >> 16 == 32) {
       i35 = 1;
       break;
      }
      i35 = (i29 - 9 & 65535) >>> 0 < 5 >>> 0;
     } else {
      i35 = (_u_charDirection(i29 & 65535) | 0) == 9;
     }
    } while (0);
    if (i29 << 16 >> 16 == 10 | (i35 | i29 << 16 >> 16 == 160) ^ 1) {
     break L26;
    }
    __ZNK7WebCore17CharacterIterator5rangeEv(i11, i9);
    i28 = HEAP32[i18 >> 2] | 0;
    i32 = i28 + 24 | 0;
    i36 = HEAP32[i32 >> 2] | 0;
    if ((i36 | 0) > -1) {
     i37 = i36;
    } else {
     i36 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i28 + 28 >> 2] | 0) | 0) + 1 | 0;
     HEAP32[i32 >> 2] = i36;
     i37 = i36;
    }
    i36 = HEAP32[i28 + 20 >> 2] | 0;
    if ((i36 | 0) == 0) {
     i38 = i37;
    } else {
     i28 = i36 + 8 | 0;
     HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
     i38 = HEAP32[i32 >> 2] | 0;
    }
    HEAP32[i19 >> 2] = i36;
    HEAP32[i17 >> 2] = i38;
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i10, i3, i4);
    i36 = HEAP32[i19 >> 2] | 0;
    do {
     if ((i36 | 0) != 0) {
      i32 = i36 + 8 | 0;
      i28 = i32 | 0;
      i39 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
      HEAP32[i28 >> 2] = i39;
      if ((i39 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
     }
    } while (0);
    i36 = HEAP32[i22 >> 2] | 0;
    if ((i36 | 0) != 0) {
     i29 = i36 + 8 | 0;
     HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
    }
    i29 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = i36;
    do {
     if ((i29 | 0) != 0) {
      i36 = i29 + 8 | 0;
      i32 = i36 | 0;
      i39 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
      HEAP32[i32 >> 2] = i39;
      if ((i39 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
     }
    } while (0);
    HEAP32[i23 >> 2] = HEAP32[i21 >> 2];
    i29 = HEAP32[i24 >> 2] | 0;
    i36 = HEAP32[i26 >> 2] & -8 | i29 & 7;
    HEAP32[i26 >> 2] = i36;
    HEAP8[i25] = i36 & 255 & -9 | i29 & 8;
    i29 = HEAP32[i22 >> 2] | 0;
    do {
     if ((i29 | 0) != 0) {
      i36 = i29 + 8 | 0;
      i39 = i36 | 0;
      i32 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
      HEAP32[i39 >> 2] = i32;
      if ((i32 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
     }
    } while (0);
    i29 = HEAP32[i18 >> 2] | 0;
    do {
     if ((i29 | 0) != 0) {
      i36 = i29 | 0;
      i32 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
      if ((i32 | 0) == 0) {
       __ZN7WebCore5RangeD1Ev(i29);
       __ZN3WTF8fastFreeEPv(i29);
       break;
      } else {
       HEAP32[i36 >> 2] = i32;
       break;
      }
     }
    } while (0);
    __ZN7WebCore17CharacterIterator7advanceEi(i9, 1);
    i27 = HEAP32[i6 >> 2] | 0;
    if ((HEAP32[i7 >> 2] | 0) == (i27 | 0)) {
     break;
    }
   }
  }
 } while (0);
 __ZN7WebCore12TextIteratorD1Ev(i9 + 12 | 0);
 i9 = i15 | 0;
 i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i15);
  __ZN3WTF8fastFreeEPv(i15);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i9 >> 2] = i7;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore16VisibleSelection33setBaseAndExtentToDeepEquivalentsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i1 | 0;
 i6 = i1 + 12 | 0;
 i7 = i1 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i6 | 0;
 if ((i8 | 0) == (HEAP32[i9 >> 2] | 0)) {
  i10 = i1 + 8 | 0;
  do {
   if ((HEAP8[i10] & 8) == 0) {
    i11 = HEAP32[i10 >> 2] & 7;
    if (!((i11 | 0) == 2 | (i11 | 0) == 4)) {
     i12 = 4;
     break;
    }
    i13 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i5) | 0;
   } else {
    i12 = 4;
   }
  } while (0);
  if ((i12 | 0) == 4) {
   i13 = HEAP32[i1 + 4 >> 2] | 0;
  }
  i11 = i1 + 20 | 0;
  do {
   if ((HEAP8[i11] & 8) == 0) {
    i14 = HEAP32[i11 >> 2] & 7;
    if (!((i14 | 0) == 2 | (i14 | 0) == 4)) {
     i12 = 8;
     break;
    }
    i15 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i6) | 0;
   } else {
    i12 = 8;
   }
  } while (0);
  if ((i12 | 0) == 8) {
   i15 = HEAP32[i1 + 16 >> 2] | 0;
  }
  if ((i13 | 0) == (i15 | 0)) {
   i16 = ((HEAP32[i11 >> 2] ^ HEAP32[i10 >> 2]) & 7 | 0) == 0;
  } else {
   i16 = 0;
  }
  i17 = i16;
  i18 = HEAP32[i7 >> 2] | 0;
 } else {
  i17 = 0;
  i18 = i8;
 }
 do {
  if ((i18 | 0) != 0) {
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i3, i5, HEAP32[i1 + 48 >> 2] | 0);
   i8 = i3 | 0;
   i16 = HEAP32[i8 >> 2] | 0;
   if ((i16 | 0) != 0) {
    i10 = i16 + 8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   }
   i10 = HEAP32[i3 + 4 >> 2] | 0;
   i11 = HEAP32[i3 + 8 >> 2] | 0;
   i15 = i11 & 8;
   i13 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i16;
   do {
    if ((i13 | 0) != 0) {
     i16 = i13 + 8 | 0;
     i12 = i16 | 0;
     i14 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     HEAP32[i12 >> 2] = i14;
     if ((i14 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   i13 = i1 + 4 | 0;
   HEAP32[i13 >> 2] = i10;
   i16 = i1 + 8 | 0;
   i14 = i16;
   i12 = HEAP32[i14 >> 2] & -8 | i11 & 7;
   HEAP32[i14 >> 2] = i12;
   HEAP8[i16] = i12 & 255 & -9 | i15;
   i12 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i16 = i12 + 8 | 0;
     i19 = i16 | 0;
     i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     HEAP32[i19 >> 2] = i20;
     if ((i20 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   if (!i17) {
    break;
   }
   i12 = HEAP32[i7 >> 2] | 0;
   if ((i12 | 0) != 0) {
    i8 = i12 + 8 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   }
   i8 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i12;
   do {
    if ((i8 | 0) != 0) {
     i12 = i8 + 8 | 0;
     i15 = i12 | 0;
     i11 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i11;
     if ((i11 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
    }
   } while (0);
   HEAP32[i1 + 16 >> 2] = HEAP32[i13 >> 2];
   i8 = HEAP32[i14 >> 2] | 0;
   i12 = i1 + 20 | 0;
   i11 = i12;
   i15 = HEAP32[i11 >> 2] & -8 | i8 & 7;
   HEAP32[i11 >> 2] = i15;
   HEAP8[i12] = i15 & 255 & -9 | i8 & 8;
  }
 } while (0);
 do {
  if (!((HEAP32[i9 >> 2] | 0) == 0 | i17)) {
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i6, HEAP32[i1 + 48 >> 2] | 0);
   i3 = i4 | 0;
   i18 = HEAP32[i3 >> 2] | 0;
   if ((i18 | 0) != 0) {
    i8 = i18 + 8 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   }
   i8 = HEAP32[i4 + 4 >> 2] | 0;
   i15 = HEAP32[i4 + 8 >> 2] | 0;
   i12 = i15 & 8;
   i11 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i18;
   do {
    if ((i11 | 0) != 0) {
     i18 = i11 + 8 | 0;
     i10 = i18 | 0;
     i16 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     HEAP32[i10 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
    }
   } while (0);
   HEAP32[i1 + 16 >> 2] = i8;
   i11 = i1 + 20 | 0;
   i14 = i11;
   i13 = HEAP32[i14 >> 2] & -8 | i15 & 7;
   HEAP32[i14 >> 2] = i13;
   HEAP8[i11] = i13 & 255 & -9 | i12;
   i13 = HEAP32[i3 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i11 = i13 + 8 | 0;
   i13 = i11 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 i17 = HEAP32[i9 >> 2] | 0;
 i11 = (i17 | 0) == 0;
 if ((i4 | 0) == 0) {
  if (i11) {
   i14 = i1 + 56 | 0;
   HEAP8[i14] = HEAP8[i14] | 1;
   STACKTOP = i2;
   return;
  }
  i14 = i17 + 8 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
  i14 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i17;
  do {
   if ((i14 | 0) != 0) {
    i17 = i14 + 8 | 0;
    i7 = i17 | 0;
    i13 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    HEAP32[i7 >> 2] = i13;
    if ((i13 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
   }
  } while (0);
  HEAP32[i1 + 4 >> 2] = HEAP32[i1 + 16 >> 2];
  i14 = HEAP32[i1 + 20 >> 2] | 0;
  i17 = i1 + 8 | 0;
  i13 = i17;
  i7 = HEAP32[i13 >> 2] & -8 | i14 & 7;
  HEAP32[i13 >> 2] = i7;
  HEAP8[i17] = i7 & 255 & -9 | i14 & 8;
  i14 = i1 + 56 | 0;
  HEAP8[i14] = HEAP8[i14] | 1;
  STACKTOP = i2;
  return;
 } else {
  if (!i11) {
   i11 = (__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i5, i6) | 0) < 1 | 0;
   i6 = i1 + 56 | 0;
   HEAP8[i6] = HEAP8[i6] & -2 | i11;
   STACKTOP = i2;
   return;
  }
  i11 = i4 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
  i11 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i4;
  do {
   if ((i11 | 0) != 0) {
    i4 = i11 + 8 | 0;
    i9 = i4 | 0;
    i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    HEAP32[i9 >> 2] = i6;
    if ((i6 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
   }
  } while (0);
  HEAP32[i1 + 16 >> 2] = HEAP32[i1 + 4 >> 2];
  i11 = HEAP32[i1 + 8 >> 2] | 0;
  i4 = i1 + 20 | 0;
  i6 = i4;
  i9 = HEAP32[i6 >> 2] & -8 | i11 & 7;
  HEAP32[i6 >> 2] = i9;
  HEAP8[i4] = i9 & 255 & -9 | i11 & 8;
  i11 = i1 + 56 | 0;
  HEAP8[i11] = HEAP8[i11] | 1;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore16VisibleSelection20setWithoutValidationERKNS_8PositionES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = i5 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i5;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 + 8 | 0;
   i6 = i5 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i7 = i2 + 4 | 0;
 HEAP32[i1 + 4 >> 2] = HEAP32[i7 >> 2];
 i5 = i2 + 8 | 0;
 i8 = i5;
 i6 = i1 + 8 | 0;
 i9 = i6;
 i10 = HEAP32[i9 >> 2] & -8 | HEAP32[i8 >> 2] & 7;
 HEAP32[i9 >> 2] = i10;
 HEAP8[i6] = i10 & 255 & -9 | HEAP8[i5] & 8;
 i10 = i3 | 0;
 i6 = HEAP32[i10 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = i1 + 12 | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i6;
 do {
  if ((i11 | 0) != 0) {
   i6 = i11 + 8 | 0;
   i9 = i6 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i11 = i3 + 4 | 0;
 HEAP32[i1 + 16 >> 2] = HEAP32[i11 >> 2];
 i6 = i3 + 8 | 0;
 i12 = i6;
 i9 = i1 + 20 | 0;
 i13 = i9;
 i14 = HEAP32[i13 >> 2] & -8 | HEAP32[i12 >> 2] & 7;
 HEAP32[i13 >> 2] = i14;
 HEAP8[i9] = i14 & 255 & -9 | HEAP8[i6] & 8;
 i14 = (__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i2, i3) | 0) < 1;
 i9 = i1 + 56 | 0;
 HEAP8[i9] = HEAP8[i9] & -2 | i14 & 1;
 i9 = i1 + 24 | 0;
 if (i14) {
  i14 = HEAP32[i4 >> 2] | 0;
  if ((i14 | 0) != 0) {
   i13 = i14 + 8 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
  }
  i13 = i9 | 0;
  i15 = HEAP32[i13 >> 2] | 0;
  HEAP32[i13 >> 2] = i14;
  do {
   if ((i15 | 0) != 0) {
    i14 = i15 + 8 | 0;
    i13 = i14 | 0;
    i16 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
    HEAP32[i13 >> 2] = i16;
    if ((i16 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
   }
  } while (0);
  HEAP32[i1 + 28 >> 2] = HEAP32[i7 >> 2];
  i15 = i1 + 32 | 0;
  i14 = i15;
  i16 = HEAP32[i14 >> 2] & -8 | HEAP32[i8 >> 2] & 7;
  HEAP32[i14 >> 2] = i16;
  HEAP8[i15] = i16 & 255 & -9 | HEAP8[i5] & 8;
  i16 = HEAP32[i10 >> 2] | 0;
  if ((i16 | 0) != 0) {
   i15 = i16 + 8 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  }
  i15 = i1 + 36 | 0;
  i14 = HEAP32[i15 >> 2] | 0;
  HEAP32[i15 >> 2] = i16;
  do {
   if ((i14 | 0) != 0) {
    i16 = i14 + 8 | 0;
    i15 = i16 | 0;
    i13 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    HEAP32[i15 >> 2] = i13;
    if ((i13 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
   }
  } while (0);
  HEAP32[i1 + 40 >> 2] = HEAP32[i11 >> 2];
  i14 = i1 + 44 | 0;
  i16 = i14;
  i13 = HEAP32[i16 >> 2] & -8 | HEAP32[i12 >> 2] & 7;
  HEAP32[i16 >> 2] = i13;
  HEAP8[i14] = i13 & 255 & -9 | HEAP8[i6] & 8;
 } else {
  i13 = HEAP32[i10 >> 2] | 0;
  if ((i13 | 0) != 0) {
   i14 = i13 + 8 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
  }
  i14 = i9 | 0;
  i9 = HEAP32[i14 >> 2] | 0;
  HEAP32[i14 >> 2] = i13;
  do {
   if ((i9 | 0) != 0) {
    i13 = i9 + 8 | 0;
    i14 = i13 | 0;
    i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
    HEAP32[i14 >> 2] = i16;
    if ((i16 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
   }
  } while (0);
  HEAP32[i1 + 28 >> 2] = HEAP32[i11 >> 2];
  i9 = i1 + 32 | 0;
  i13 = i9;
  i16 = HEAP32[i13 >> 2] & -8 | HEAP32[i12 >> 2] & 7;
  HEAP32[i13 >> 2] = i16;
  HEAP8[i9] = i16 & 255 & -9 | HEAP8[i6] & 8;
  i16 = HEAP32[i4 >> 2] | 0;
  if ((i16 | 0) != 0) {
   i9 = i16 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  }
  i9 = i1 + 36 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i16;
  do {
   if ((i13 | 0) != 0) {
    i16 = i13 + 8 | 0;
    i9 = i16 | 0;
    i14 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    HEAP32[i9 >> 2] = i14;
    if ((i14 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
   }
  } while (0);
  HEAP32[i1 + 40 >> 2] = HEAP32[i7 >> 2];
  i13 = i1 + 44 | 0;
  i16 = i13;
  i14 = HEAP32[i16 >> 2] & -8 | HEAP32[i8 >> 2] & 7;
  HEAP32[i16 >> 2] = i14;
  HEAP8[i13] = i14 & 255 & -9 | HEAP8[i5] & 8;
 }
 if ((HEAP32[i4 >> 2] | 0) != (HEAP32[i10 >> 2] | 0)) {
  i17 = 2;
  i18 = i1 + 52 | 0;
  HEAP32[i18 >> 2] = i17;
  return;
 }
 do {
  if ((HEAP8[i5] & 8) == 0) {
   i10 = HEAP32[i8 >> 2] & 7;
   if (!((i10 | 0) == 2 | (i10 | 0) == 4)) {
    i19 = 43;
    break;
   }
   i20 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i2) | 0;
  } else {
   i19 = 43;
  }
 } while (0);
 if ((i19 | 0) == 43) {
  i20 = HEAP32[i7 >> 2] | 0;
 }
 do {
  if ((HEAP8[i6] & 8) == 0) {
   i7 = HEAP32[i12 >> 2] & 7;
   if (!((i7 | 0) == 2 | (i7 | 0) == 4)) {
    i19 = 47;
    break;
   }
   i21 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i3) | 0;
  } else {
   i19 = 47;
  }
 } while (0);
 if ((i19 | 0) == 47) {
  i21 = HEAP32[i11 >> 2] | 0;
 }
 if ((i20 | 0) != (i21 | 0)) {
  i17 = 2;
  i18 = i1 + 52 | 0;
  HEAP32[i18 >> 2] = i17;
  return;
 }
 i17 = ((HEAP32[i12 >> 2] ^ HEAP32[i8 >> 2]) & 7 | 0) == 0 ? 1 : 2;
 i18 = i1 + 52 | 0;
 HEAP32[i18 >> 2] = i17;
 return;
}
function __ZN7WebCore16VisibleSelection19updateSelectionTypeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i1 + 24 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 L1 : do {
  if ((i6 | 0) == 0) {
   HEAP32[i1 + 52 >> 2] = 0;
  } else {
   i7 = i1 + 36 | 0;
   do {
    if ((i6 | 0) == (HEAP32[i7 >> 2] | 0)) {
     i8 = i1 + 32 | 0;
     do {
      if ((HEAP8[i8] & 8) == 0) {
       i9 = HEAP32[i8 >> 2] & 7;
       if (!((i9 | 0) == 2 | (i9 | 0) == 4)) {
        i10 = 6;
        break;
       }
       i11 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i5) | 0;
      } else {
       i10 = 6;
      }
     } while (0);
     if ((i10 | 0) == 6) {
      i11 = HEAP32[i1 + 28 >> 2] | 0;
     }
     i9 = i1 + 44 | 0;
     do {
      if ((HEAP8[i9] & 8) == 0) {
       i12 = HEAP32[i9 >> 2] & 7;
       if (!((i12 | 0) == 2 | (i12 | 0) == 4)) {
        i10 = 10;
        break;
       }
       i13 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i7) | 0;
      } else {
       i10 = 10;
      }
     } while (0);
     if ((i10 | 0) == 10) {
      i13 = HEAP32[i1 + 40 >> 2] | 0;
     }
     if ((i11 | 0) != (i13 | 0)) {
      i10 = 15;
      break;
     }
     if (((HEAP32[i9 >> 2] ^ HEAP32[i8 >> 2]) & 7 | 0) != 0) {
      i10 = 15;
      break;
     }
     i14 = i1 + 52 | 0;
    } else {
     i10 = 15;
    }
   } while (0);
   L20 : do {
    if ((i10 | 0) == 15) {
     __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i3, i5, 1);
     __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i4, i7, 1);
     i12 = i3 | 0;
     i15 = i4 | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     if ((HEAP32[i12 >> 2] | 0) == (i16 | 0)) {
      i17 = i3 + 8 | 0;
      do {
       if ((HEAP8[i17] & 8) == 0) {
        i18 = HEAP32[i17 >> 2] & 7;
        if (!((i18 | 0) == 2 | (i18 | 0) == 4)) {
         i10 = 18;
         break;
        }
        i19 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i3) | 0;
       } else {
        i10 = 18;
       }
      } while (0);
      if ((i10 | 0) == 18) {
       i19 = HEAP32[i3 + 4 >> 2] | 0;
      }
      i8 = i4 + 8 | 0;
      do {
       if ((HEAP8[i8] & 8) == 0) {
        i9 = HEAP32[i8 >> 2] & 7;
        if (!((i9 | 0) == 2 | (i9 | 0) == 4)) {
         i10 = 22;
         break;
        }
        i20 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i4) | 0;
       } else {
        i10 = 22;
       }
      } while (0);
      if ((i10 | 0) == 22) {
       i20 = HEAP32[i4 + 4 >> 2] | 0;
      }
      if ((i19 | 0) == (i20 | 0)) {
       i21 = ((HEAP32[i8 >> 2] ^ HEAP32[i17 >> 2]) & 7 | 0) == 0;
      } else {
       i21 = 0;
      }
      i22 = i21;
      i23 = HEAP32[i15 >> 2] | 0;
     } else {
      i22 = 0;
      i23 = i16;
     }
     do {
      if ((i23 | 0) != 0) {
       i9 = i23 + 8 | 0;
       i18 = i9 | 0;
       i24 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
       HEAP32[i18 >> 2] = i24;
       if ((i24 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
      }
     } while (0);
     i16 = HEAP32[i12 >> 2] | 0;
     do {
      if ((i16 | 0) == 0) {
       i10 = 35;
      } else {
       i15 = i16 + 8 | 0;
       i17 = i15 | 0;
       i8 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
       HEAP32[i17 >> 2] = i8;
       if ((i8 | 0) >= 1) {
        i10 = 35;
        break;
       }
       if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
        i10 = 35;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
       i15 = i1 + 52 | 0;
       if (i22) {
        i14 = i15;
        break L20;
       } else {
        i25 = i15;
       }
      }
     } while (0);
     if ((i10 | 0) == 35) {
      i16 = i1 + 52 | 0;
      if (i22) {
       i14 = i16;
       break;
      } else {
       i25 = i16;
      }
     }
     HEAP32[i25 >> 2] = 2;
     break L1;
    }
   } while (0);
   HEAP32[i14 >> 2] = 1;
  }
 } while (0);
 if ((HEAP32[i1 + 52 >> 2] | 0) == 1) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i1 + 48 >> 2] = 1;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore16VisibleSelection8validateENS_15TextGranularityE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 __ZN7WebCore16VisibleSelection33setBaseAndExtentToDeepEquivalentsEv(i1);
 __ZN7WebCore16VisibleSelection52setStartAndEndFromBaseAndExtentRespectingGranularityENS_15TextGranularityE(i1, i2);
 __ZN7WebCore16VisibleSelection46adjustSelectionToAvoidCrossingShadowBoundariesEv(i1);
 __ZN7WebCore16VisibleSelection47adjustSelectionToAvoidCrossingEditingBoundariesEv(i1);
 __ZN7WebCore16VisibleSelection19updateSelectionTypeEv(i1);
 if ((HEAP32[i1 + 52 >> 2] | 0) != 2) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 + 24 | 0;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i4, i2, 1);
 i6 = i4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i7;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 + 8 | 0;
   i8 = i7 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 28 >> 2] = HEAP32[i4 + 4 >> 2];
 i2 = HEAP32[i4 + 8 >> 2] | 0;
 i4 = i1 + 32 | 0;
 i7 = i4;
 i9 = HEAP32[i7 >> 2] & -8 | i2 & 7;
 HEAP32[i7 >> 2] = i9;
 HEAP8[i4] = i9 & 255 & -9 | i2 & 8;
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 8 | 0;
   i9 = i6 | 0;
   i4 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i2 = i1 + 36 | 0;
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i5, i2, 1);
 i6 = i5 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i4;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 8 | 0;
   i9 = i4 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 40 >> 2] = HEAP32[i5 + 4 >> 2];
 i2 = HEAP32[i5 + 8 >> 2] | 0;
 i5 = i1 + 44 | 0;
 i4 = i5;
 i7 = HEAP32[i4 >> 2] & -8 | i2 & 7;
 HEAP32[i4 >> 2] = i7;
 HEAP8[i5] = i7 & 255 & -9 | i2 & 8;
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 8 | 0;
   i7 = i6 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore16VisibleSelection47adjustSelectionToAvoidCrossingEditingBoundariesEv(i1);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore16VisibleSelection5isAllENS_27EditingBoundaryCrossingRuleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 if ((__ZNK7WebCore16VisibleSelection29nonBoundaryShadowTreeRootNodeEv(i1) | 0) != 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i9 = i1 + 52 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 2) {
  i10 = 1;
 } else {
  i10 = HEAP32[i1 + 48 >> 2] | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i1 + 24 | 0, i10);
 __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i4, i5, i2);
 i10 = i4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 if ((i4 | 0) == 0) {
  if ((HEAP32[i9 >> 2] | 0) == 2) {
   i11 = 0;
  } else {
   i11 = HEAP32[i1 + 48 >> 2] | 0;
  }
  __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i7, i1 + 36 | 0, i11);
  __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i6, i7, i2);
  i2 = HEAP32[i6 >> 2] | 0;
  i6 = (i2 | 0) == 0;
  do {
   if (!i6) {
    i11 = i2 + 8 | 0;
    i1 = i11 | 0;
    i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
    HEAP32[i1 >> 2] = i9;
    if ((i9 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
   }
  } while (0);
  i2 = HEAP32[i7 >> 2] | 0;
  do {
   if ((i2 | 0) != 0) {
    i7 = i2 + 8 | 0;
    i11 = i7 | 0;
    i9 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    HEAP32[i11 >> 2] = i9;
    if ((i9 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
   }
  } while (0);
  i2 = HEAP32[i10 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i12 = i6;
  } else {
   i13 = i2;
   i14 = i6;
   i15 = 16;
  }
 } else {
  i13 = i4;
  i14 = 0;
  i15 = 16;
 }
 do {
  if ((i15 | 0) == 16) {
   i4 = i13 + 8 | 0;
   i6 = i4 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    i12 = i14;
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    i12 = i14;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
   i12 = i14;
  }
 } while (0);
 i14 = HEAP32[i5 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i8 = i12;
  STACKTOP = i3;
  return i8 | 0;
 }
 i5 = i14 + 8 | 0;
 i14 = i5 | 0;
 i13 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 HEAP32[i14 >> 2] = i13;
 if ((i13 | 0) >= 1) {
  i8 = i12;
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  i8 = i12;
  STACKTOP = i3;
  return i8 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 i8 = i12;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore16VisibleSelectionC2EPKNS_5RangeENS_9EAffinityEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i2 + 12 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) > -1) {
  i12 = i11;
 } else {
  i11 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i10 >> 2] = i11;
  i12 = i11;
 }
 i11 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i13 = i12;
 } else {
  i12 = i11 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
  i13 = HEAP32[i10 >> 2] | 0;
 }
 i10 = i8 | 0;
 HEAP32[i10 >> 2] = i11;
 HEAP32[i9 >> 2] = i13;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i1 | 0, i8, i9);
 i9 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i10 = i9 + 8 | 0;
   i8 = i10 | 0;
   i13 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i9 = i2 + 24 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) > -1) {
  i14 = i10;
 } else {
  i10 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i9 >> 2] = i10;
  i14 = i10;
 }
 i10 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i15 = i14;
 } else {
  i14 = i10 + 8 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
  i15 = HEAP32[i9 >> 2] | 0;
 }
 i9 = i6 | 0;
 HEAP32[i9 >> 2] = i10;
 HEAP32[i7 >> 2] = i15;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i1 + 12 | 0, i6, i7);
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 + 8 | 0;
   i6 = i9 | 0;
   i15 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 i7 = i1 + 32 | 0;
 i9 = i7;
 i15 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i15 & -8;
 HEAP8[i7] = i15 & 255 & -16;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 i15 = i1 + 44 | 0;
 i7 = i15;
 i9 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i9 & -8;
 HEAP8[i15] = i9 & 255 & -16;
 HEAP32[i1 + 48 >> 2] = i3;
 i3 = i1 + 56 | 0;
 HEAP8[i3] = HEAP8[i3] & -3 | (i4 & 1) << 1;
 __ZN7WebCore16VisibleSelection8validateENS_15TextGranularityE(i1, 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore16VisibleSelectionC1EPKNS_5RangeENS_9EAffinityEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i2 + 12 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) > -1) {
  i12 = i11;
 } else {
  i11 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i10 >> 2] = i11;
  i12 = i11;
 }
 i11 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i13 = i12;
 } else {
  i12 = i11 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
  i13 = HEAP32[i10 >> 2] | 0;
 }
 i10 = i8 | 0;
 HEAP32[i10 >> 2] = i11;
 HEAP32[i9 >> 2] = i13;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i1 | 0, i8, i9);
 i9 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i10 = i9 + 8 | 0;
   i8 = i10 | 0;
   i13 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i9 = i2 + 24 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) > -1) {
  i14 = i10;
 } else {
  i10 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i9 >> 2] = i10;
  i14 = i10;
 }
 i10 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i15 = i14;
 } else {
  i14 = i10 + 8 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
  i15 = HEAP32[i9 >> 2] | 0;
 }
 i9 = i6 | 0;
 HEAP32[i9 >> 2] = i10;
 HEAP32[i7 >> 2] = i15;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i1 + 12 | 0, i6, i7);
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 + 8 | 0;
   i6 = i9 | 0;
   i15 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 i7 = i1 + 32 | 0;
 i9 = i7;
 i15 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i15 & -8;
 HEAP8[i7] = i15 & 255 & -16;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 i15 = i1 + 44 | 0;
 i7 = i15;
 i9 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i9 & -8;
 HEAP8[i15] = i9 & 255 & -16;
 HEAP32[i1 + 48 >> 2] = i3;
 i3 = i1 + 56 | 0;
 HEAP8[i3] = HEAP8[i3] & -3 | (i4 & 1) << 1;
 __ZN7WebCore16VisibleSelection8validateENS_15TextGranularityE(i1, 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 12 | 0;
 if ((HEAP32[i6 >> 2] & 1 | 0) == 0) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = i2;
  i8 = i2 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i5, 4);
  i5 = HEAP32[i7 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i7 = i5 + 8 | 0;
  i5 = i7 | 0;
  i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i8;
  if ((i8 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i2;
 i8 = i2 + 8 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 1](i2) | 0) {
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 168 >> 2] & 1](i2) | 0;
  } else {
   if ((HEAP32[i6 >> 2] & 2 | 0) == 0) {
    i9 = 0;
    break;
   }
   i9 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i2) | 0;
  }
 } while (0);
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i4, i9, 0);
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i9 + 8 | 0;
 i9 = i7 | 0;
 i4 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16VisibleSelectionC2ERKNS_8PositionENS_9EAffinityEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = i2 + 4 | 0;
 HEAP32[i1 + 4 >> 2] = HEAP32[i7 >> 2];
 i6 = i2 + 8 | 0;
 i2 = i6;
 i8 = i1 + 8 | 0;
 i9 = i8;
 i10 = HEAP32[i9 >> 2] & -8 | HEAP32[i2 >> 2] & 7;
 HEAP32[i9 >> 2] = i10;
 HEAP8[i8] = i10 & 255 & -9 | HEAP8[i6] & 8;
 i10 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i5 = i10 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 16 >> 2] = HEAP32[i7 >> 2];
 i7 = i1 + 20 | 0;
 i5 = i7;
 i10 = HEAP32[i5 >> 2] & -8 | HEAP32[i2 >> 2] & 7;
 HEAP32[i5 >> 2] = i10;
 HEAP8[i7] = i10 & 255 & -9 | HEAP8[i6] & 8;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 i6 = i1 + 32 | 0;
 i10 = i6;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i7 & -8;
 HEAP8[i6] = i7 & 255 & -16;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 i7 = i1 + 44 | 0;
 i6 = i7;
 i10 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i10 & -8;
 HEAP8[i7] = i10 & 255 & -16;
 HEAP32[i1 + 48 >> 2] = i3;
 i3 = i1 + 56 | 0;
 HEAP8[i3] = HEAP8[i3] & -3 | (i4 & 1) << 1;
 __ZN7WebCore16VisibleSelection8validateENS_15TextGranularityE(i1, 0);
 return;
}
function __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = i2 + 4 | 0;
 HEAP32[i1 + 4 >> 2] = HEAP32[i7 >> 2];
 i6 = i2 + 8 | 0;
 i2 = i6;
 i8 = i1 + 8 | 0;
 i9 = i8;
 i10 = HEAP32[i9 >> 2] & -8 | HEAP32[i2 >> 2] & 7;
 HEAP32[i9 >> 2] = i10;
 HEAP8[i8] = i10 & 255 & -9 | HEAP8[i6] & 8;
 i10 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i5 = i10 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 16 >> 2] = HEAP32[i7 >> 2];
 i7 = i1 + 20 | 0;
 i5 = i7;
 i10 = HEAP32[i5 >> 2] & -8 | HEAP32[i2 >> 2] & 7;
 HEAP32[i5 >> 2] = i10;
 HEAP8[i7] = i10 & 255 & -9 | HEAP8[i6] & 8;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 i6 = i1 + 32 | 0;
 i10 = i6;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i7 & -8;
 HEAP8[i6] = i7 & 255 & -16;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 i7 = i1 + 44 | 0;
 i6 = i7;
 i10 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i10 & -8;
 HEAP8[i7] = i10 & 255 & -16;
 HEAP32[i1 + 48 >> 2] = i3;
 i3 = i1 + 56 | 0;
 HEAP8[i3] = HEAP8[i3] & -3 | (i4 & 1) << 1;
 __ZN7WebCore16VisibleSelection8validateENS_15TextGranularityE(i1, 0);
 return;
}
function __ZN7WebCore16VisibleSelectionC2ERKNS_15VisiblePositionEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i2 + 4 | 0;
 HEAP32[i1 + 4 >> 2] = HEAP32[i6 >> 2];
 i5 = i2 + 8 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 i8 = i1 + 8 | 0;
 i9 = i8;
 i10 = HEAP32[i9 >> 2] & -8 | i7 & 7;
 HEAP32[i9 >> 2] = i10;
 HEAP8[i8] = i10 & 255 & -9 | i7 & 8;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i4 = i7 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 16 >> 2] = HEAP32[i6 >> 2];
 i6 = HEAP32[i5 >> 2] | 0;
 i5 = i1 + 20 | 0;
 i4 = i5;
 i7 = HEAP32[i4 >> 2] & -8 | i6 & 7;
 HEAP32[i4 >> 2] = i7;
 HEAP8[i5] = i7 & 255 & -9 | i6 & 8;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 i6 = i1 + 32 | 0;
 i7 = i6;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i5 & -8;
 HEAP8[i6] = i5 & 255 & -16;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 i5 = i1 + 44 | 0;
 i6 = i5;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i7 & -8;
 HEAP8[i5] = i7 & 255 & -16;
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 12 >> 2];
 i2 = i1 + 56 | 0;
 HEAP8[i2] = HEAP8[i2] & -3 | (i3 & 1) << 1;
 __ZN7WebCore16VisibleSelection8validateENS_15TextGranularityE(i1, 0);
 return;
}
function __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i2 + 4 | 0;
 HEAP32[i1 + 4 >> 2] = HEAP32[i6 >> 2];
 i5 = i2 + 8 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 i8 = i1 + 8 | 0;
 i9 = i8;
 i10 = HEAP32[i9 >> 2] & -8 | i7 & 7;
 HEAP32[i9 >> 2] = i10;
 HEAP8[i8] = i10 & 255 & -9 | i7 & 8;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i4 = i7 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 16 >> 2] = HEAP32[i6 >> 2];
 i6 = HEAP32[i5 >> 2] | 0;
 i5 = i1 + 20 | 0;
 i4 = i5;
 i7 = HEAP32[i4 >> 2] & -8 | i6 & 7;
 HEAP32[i4 >> 2] = i7;
 HEAP8[i5] = i7 & 255 & -9 | i6 & 8;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 i6 = i1 + 32 | 0;
 i7 = i6;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i5 & -8;
 HEAP8[i6] = i5 & 255 & -16;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 i5 = i1 + 44 | 0;
 i6 = i5;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i7 & -8;
 HEAP8[i5] = i7 & 255 & -16;
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 12 >> 2];
 i2 = i1 + 56 | 0;
 HEAP8[i2] = HEAP8[i2] & -3 | (i3 & 1) << 1;
 __ZN7WebCore16VisibleSelection8validateENS_15TextGranularityE(i1, 0);
 return;
}
function __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 1 | 0) == 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i5, 3);
  i5 = HEAP32[i6 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i5 + 8 | 0;
  i5 = i6 | 0;
  i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i7;
  if ((i7 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i3;
  return;
 } else {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i4, 0, 0);
  i4 = HEAP32[i6 >> 2] | 0;
  if ((i4 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i4 + 8 | 0;
  i4 = i6 | 0;
  i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  HEAP32[i4 >> 2] = i1;
  if ((i1 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore16VisibleSelectionC2ERKNS_8PositionES3_NS_9EAffinityEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i7 = i2 + 8 | 0;
 i2 = i1 + 8 | 0;
 i6 = i2;
 i8 = HEAP32[i6 >> 2] & -8 | HEAP32[i7 >> 2] & 7;
 HEAP32[i6 >> 2] = i8;
 HEAP8[i2] = i8 & 255 & -9 | HEAP8[i7] & 8;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 16 >> 2] = HEAP32[i3 + 4 >> 2];
 i8 = i3 + 8 | 0;
 i3 = i1 + 20 | 0;
 i7 = i3;
 i2 = HEAP32[i7 >> 2] & -8 | HEAP32[i8 >> 2] & 7;
 HEAP32[i7 >> 2] = i2;
 HEAP8[i3] = i2 & 255 & -9 | HEAP8[i8] & 8;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 i8 = i1 + 32 | 0;
 i2 = i8;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3 & -8;
 HEAP8[i8] = i3 & 255 & -16;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 i3 = i1 + 44 | 0;
 i8 = i3;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i2 & -8;
 HEAP8[i3] = i2 & 255 & -16;
 HEAP32[i1 + 48 >> 2] = i4;
 i4 = i1 + 56 | 0;
 HEAP8[i4] = HEAP8[i4] & -3 | (i5 & 1) << 1;
 __ZN7WebCore16VisibleSelection8validateENS_15TextGranularityE(i1, 0);
 return;
}
function __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i7 = i2 + 8 | 0;
 i2 = i1 + 8 | 0;
 i6 = i2;
 i8 = HEAP32[i6 >> 2] & -8 | HEAP32[i7 >> 2] & 7;
 HEAP32[i6 >> 2] = i8;
 HEAP8[i2] = i8 & 255 & -9 | HEAP8[i7] & 8;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 16 >> 2] = HEAP32[i3 + 4 >> 2];
 i8 = i3 + 8 | 0;
 i3 = i1 + 20 | 0;
 i7 = i3;
 i2 = HEAP32[i7 >> 2] & -8 | HEAP32[i8 >> 2] & 7;
 HEAP32[i7 >> 2] = i2;
 HEAP8[i3] = i2 & 255 & -9 | HEAP8[i8] & 8;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 i8 = i1 + 32 | 0;
 i2 = i8;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3 & -8;
 HEAP8[i8] = i3 & 255 & -16;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 i3 = i1 + 44 | 0;
 i8 = i3;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i2 & -8;
 HEAP8[i3] = i2 & 255 & -16;
 HEAP32[i1 + 48 >> 2] = i4;
 i4 = i1 + 56 | 0;
 HEAP8[i4] = HEAP8[i4] & -3 | (i5 & 1) << 1;
 __ZN7WebCore16VisibleSelection8validateENS_15TextGranularityE(i1, 0);
 return;
}
function __ZN7WebCore16VisibleSelectionC2ERKNS_15VisiblePositionES3_b(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i7 = i5;
 i8 = HEAP32[i7 >> 2] & -8 | i6 & 7;
 HEAP32[i7 >> 2] = i8;
 HEAP8[i5] = i8 & 255 & -9 | i6 & 8;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i8 = i6 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 16 >> 2] = HEAP32[i3 + 4 >> 2];
 i8 = HEAP32[i3 + 8 >> 2] | 0;
 i3 = i1 + 20 | 0;
 i6 = i3;
 i5 = HEAP32[i6 >> 2] & -8 | i8 & 7;
 HEAP32[i6 >> 2] = i5;
 HEAP8[i3] = i5 & 255 & -9 | i8 & 8;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 i8 = i1 + 32 | 0;
 i5 = i8;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3 & -8;
 HEAP8[i8] = i3 & 255 & -16;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 i3 = i1 + 44 | 0;
 i8 = i3;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i5 & -8;
 HEAP8[i3] = i5 & 255 & -16;
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 12 >> 2];
 i2 = i1 + 56 | 0;
 HEAP8[i2] = HEAP8[i2] & -3 | (i4 & 1) << 1;
 __ZN7WebCore16VisibleSelection8validateENS_15TextGranularityE(i1, 0);
 return;
}
function __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i7 = i5;
 i8 = HEAP32[i7 >> 2] & -8 | i6 & 7;
 HEAP32[i7 >> 2] = i8;
 HEAP8[i5] = i8 & 255 & -9 | i6 & 8;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i8 = i6 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 16 >> 2] = HEAP32[i3 + 4 >> 2];
 i8 = HEAP32[i3 + 8 >> 2] | 0;
 i3 = i1 + 20 | 0;
 i6 = i3;
 i5 = HEAP32[i6 >> 2] & -8 | i8 & 7;
 HEAP32[i6 >> 2] = i5;
 HEAP8[i3] = i5 & 255 & -9 | i8 & 8;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 i8 = i1 + 32 | 0;
 i5 = i8;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3 & -8;
 HEAP8[i8] = i3 & 255 & -16;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 i3 = i1 + 44 | 0;
 i8 = i3;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i5 & -8;
 HEAP8[i3] = i5 & 255 & -16;
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 12 >> 2];
 i2 = i1 + 56 | 0;
 HEAP8[i2] = HEAP8[i2] & -3 | (i4 & 1) << 1;
 __ZN7WebCore16VisibleSelection8validateENS_15TextGranularityE(i1, 0);
 return;
}
function __ZNK7WebCore16VisibleSelection10firstRangeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 if ((HEAP32[i2 + 52 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i4, i2 + 24 | 0);
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i5, i2 + 36 | 0);
 i2 = i4 | 0;
 __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i1, HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, i4, i5);
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 8 | 0;
   i1 = i5 | 0;
   i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i4 + 8 | 0;
 i4 = i2 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore16VisibleSelection29nonBoundaryShadowTreeRootNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 24 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = __ZN7WebCore4Node29nonBoundaryShadowTreeRootNodeEv(i4) | 0;
  } else {
   i2 = i4 + 8 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
   i2 = __ZN7WebCore4Node29nonBoundaryShadowTreeRootNodeEv(i4) | 0;
   i6 = i4 + 8 | 0;
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    i5 = i2;
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    i5 = i2;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
   i5 = i2;
  }
 } while (0);
 i4 = i1 + 8 | 0;
 i1 = i4 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  i3 = i5;
  return i3 | 0;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  i3 = i5;
  return i3 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 i3 = i5;
 return i3 | 0;
}
function __ZNK7WebCore16VisibleSelection17isContentEditableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i6 = i3 + 8 | 0;
  i7 = 0;
  i8 = i6;
  i9 = i6;
 } else {
  i6 = i5 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  i6 = i3 + 8 | 0;
  i5 = i6;
  i7 = HEAP32[i5 >> 2] & -8;
  i8 = i6;
  i9 = i5;
 }
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 28 >> 2];
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 i1 = i7 | i5 & 7;
 HEAP32[i9 >> 2] = i1;
 HEAP8[i8] = i1 & 255 & -9 | i5 & 8;
 i5 = __ZN7WebCore18isEditablePositionERKNS_8PositionENS_12EditableTypeENS_12EUpdateStyleE(i3, 0, 0) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return i5 | 0;
 }
 i4 = i3 + 8 | 0;
 i3 = i4 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i2;
  return i5 | 0;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i2;
 return i5 | 0;
}
function __ZNK7WebCore16VisibleSelection16hasEditableStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i6 = i3 + 8 | 0;
  i7 = 0;
  i8 = i6;
  i9 = i6;
 } else {
  i6 = i5 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  i6 = i3 + 8 | 0;
  i5 = i6;
  i7 = HEAP32[i5 >> 2] & -8;
  i8 = i6;
  i9 = i5;
 }
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 28 >> 2];
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 i1 = i7 | i5 & 7;
 HEAP32[i9 >> 2] = i1;
 HEAP8[i8] = i1 & 255 & -9 | i5 & 8;
 i5 = __ZN7WebCore18isEditablePositionERKNS_8PositionENS_12EditableTypeENS_12EUpdateStyleE(i3, 0, 1) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return i5 | 0;
 }
 i4 = i3 + 8 | 0;
 i3 = i4 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i2;
  return i5 | 0;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i2;
 return i5 | 0;
}
function __ZNK7WebCore16VisibleSelection23isContentRichlyEditableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i6 = i3 + 8 | 0;
  i7 = 0;
  i8 = i6;
  i9 = i6;
 } else {
  i6 = i5 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  i6 = i3 + 8 | 0;
  i5 = i6;
  i7 = HEAP32[i5 >> 2] & -8;
  i8 = i6;
  i9 = i5;
 }
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 28 >> 2];
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 i1 = i7 | i5 & 7;
 HEAP32[i9 >> 2] = i1;
 HEAP8[i8] = i1 & 255 & -9 | i5 & 8;
 i5 = __ZN7WebCore24isRichlyEditablePositionERKNS_8PositionENS_12EditableTypeE(i3, 0) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return i5 | 0;
 }
 i4 = i3 + 8 | 0;
 i3 = i4 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i2;
  return i5 | 0;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i2;
 return i5 | 0;
}
function __ZNK7WebCore16VisibleSelection19rootEditableElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i6 = i3 + 8 | 0;
  i7 = 0;
  i8 = i6;
  i9 = i6;
 } else {
  i6 = i5 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  i6 = i3 + 8 | 0;
  i5 = i6;
  i7 = HEAP32[i5 >> 2] & -8;
  i8 = i6;
  i9 = i5;
 }
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 28 >> 2];
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 i1 = i7 | i5 & 7;
 HEAP32[i9 >> 2] = i1;
 HEAP8[i8] = i1 & 255 & -9 | i5 & 8;
 i5 = __ZN7WebCore23editableRootForPositionERKNS_8PositionENS_12EditableTypeE(i3, 0) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return i5 | 0;
 }
 i4 = i3 + 8 | 0;
 i3 = i4 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i2;
  return i5 | 0;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore16VisibleSelection27selectionFromContentsOfNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i4, i2);
 __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i5, i2);
 __ZN7WebCore16VisibleSelectionC2ERKNS_8PositionES3_NS_9EAffinityEb(i1, i4, i5, 1, 0);
 i1 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 + 8 | 0;
   i2 = i5 | 0;
   i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i1 + 8 | 0;
 i1 = i4 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16VisibleSelection9setExtentERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i5 & 8;
 i6 = i1 + 12 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i3;
 do {
  if ((i7 | 0) != 0) {
   i3 = i7 + 8 | 0;
   i6 = i3 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 16 >> 2] = i4;
 i4 = i1 + 20 | 0;
 i7 = i4;
 i3 = HEAP32[i7 >> 2] & -8 | i5 & 7;
 HEAP32[i7 >> 2] = i3;
 HEAP8[i4] = i3 & 255 & -9 | i2;
 __ZN7WebCore16VisibleSelection8validateENS_15TextGranularityE(i1, 0);
 return;
}
function __ZN7WebCore16VisibleSelection7setBaseERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i5 & 8;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i3;
 do {
  if ((i7 | 0) != 0) {
   i3 = i7 + 8 | 0;
   i6 = i3 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 4 >> 2] = i4;
 i4 = i1 + 8 | 0;
 i7 = i4;
 i3 = HEAP32[i7 >> 2] & -8 | i5 & 7;
 HEAP32[i7 >> 2] = i3;
 HEAP8[i4] = i3 & 255 & -9 | i2;
 __ZN7WebCore16VisibleSelection8validateENS_15TextGranularityE(i1, 0);
 return;
}
function __ZN7WebCore16VisibleSelection9setExtentERKNS_8PositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 12 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 8 | 0;
   i4 = i3 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 4 >> 2];
 i5 = i2 + 8 | 0;
 i2 = i1 + 20 | 0;
 i3 = i2;
 i6 = HEAP32[i3 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i3 >> 2] = i6;
 HEAP8[i2] = i6 & 255 & -9 | HEAP8[i5] & 8;
 __ZN7WebCore16VisibleSelection8validateENS_15TextGranularityE(i1, 0);
 return;
}
function __ZN7WebCore16VisibleSelection7setBaseERKNS_8PositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 8 | 0;
   i4 = i3 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i5 = i2 + 8 | 0;
 i2 = i1 + 8 | 0;
 i3 = i2;
 i6 = HEAP32[i3 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i3 >> 2] = i6;
 HEAP8[i2] = i6 & 255 & -9 | HEAP8[i5] & 8;
 __ZN7WebCore16VisibleSelection8validateENS_15TextGranularityE(i1, 0);
 return;
}
function __ZN7WebCore16VisibleSelectionC2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 i2 = i1 + 8 | 0;
 i3 = i2;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4 & -8;
 HEAP8[i2] = i4 & 255 & -16;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 i4 = i1 + 20 | 0;
 i2 = i4;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3 & -8;
 HEAP8[i4] = i3 & 255 & -16;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 i3 = i1 + 32 | 0;
 i4 = i3;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2 & -8;
 HEAP8[i3] = i2 & 255 & -16;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 i2 = i1 + 44 | 0;
 i3 = i2;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4 & -8;
 HEAP8[i2] = i4 & 255 & -16;
 HEAP32[i1 + 48 >> 2] = 1;
 HEAP32[i1 + 52 >> 2] = 0;
 i4 = i1 + 56 | 0;
 HEAP8[i4] = HEAP8[i4] & -4 | 1;
 return;
}
function __ZN7WebCore16VisibleSelectionC1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 i2 = i1 + 8 | 0;
 i3 = i2;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4 & -8;
 HEAP8[i2] = i4 & 255 & -16;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 i4 = i1 + 20 | 0;
 i2 = i4;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3 & -8;
 HEAP8[i4] = i3 & 255 & -16;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 i3 = i1 + 32 | 0;
 i4 = i3;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2 & -8;
 HEAP8[i3] = i2 & 255 & -16;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 i2 = i1 + 44 | 0;
 i3 = i2;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4 & -8;
 HEAP8[i2] = i4 & 255 & -16;
 HEAP32[i1 + 48 >> 2] = 1;
 HEAP32[i1 + 52 >> 2] = 0;
 i4 = i1 + 56 | 0;
 HEAP8[i4] = HEAP8[i4] & -4 | 1;
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
function __ZN7WebCore16VisibleSelection22expandUsingGranularityENS_15TextGranularityE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i1 + 52 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 __ZN7WebCore16VisibleSelection8validateENS_15TextGranularityE(i1, i2);
 i3 = 1;
 return i3 | 0;
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
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
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
function b6(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(6);
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
function b4() {
 abort(4);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore16VisibleSelectionC2ERKNS_8PositionES3_NS_9EAffinityEb,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore16VisibleSelectionC2Ev,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore16VisibleSelectionC2ERKNS_15VisiblePositionEb,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6,__ZN7WebCore16VisibleSelectionC2EPKNS_5RangeENS_9EAffinityEb,b6,__ZN7WebCore16VisibleSelectionC2ERKNS_15VisiblePositionES3_b,b6,__ZN7WebCore16VisibleSelectionC2ERKNS_8PositionENS_9EAffinityEb,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore16VisibleSelection46adjustSelectionToAvoidCrossingShadowBoundariesEv","_strlen","__ZNK7WebCore16VisibleSelection19rootEditableElementEv","__ZNK7WebCore16VisibleSelection17isContentEditableEv","__ZN7WebCore16VisibleSelectionC2ERKNS_15VisiblePositionES3_b","__ZN7WebCore16VisibleSelection47adjustSelectionToAvoidCrossingEditingBoundariesEv","__ZN7WebCore18lastPositionInNodeEPNS_4NodeE","__ZN7WebCore16VisibleSelection9setExtentERKNS_8PositionE","__ZNK7WebCore16VisibleSelection10firstRangeEv","__ZN7WebCore16VisibleSelection8validateENS_15TextGranularityE","__ZN7WebCore16VisibleSelectionC2EPKNS_5RangeENS_9EAffinityEb","__ZNK7WebCore16VisibleSelection29nonBoundaryShadowTreeRootNodeEv","__ZN7WebCore16VisibleSelectionC2ERKNS_15VisiblePositionEb","__ZN7WebCore16VisibleSelection20setWithoutValidationERKNS_8PositionES3_","__ZN7WebCore16VisibleSelectionC2ERKNS_8PositionENS_9EAffinityEb","_memset","__ZN7WebCore16VisibleSelection33setBaseAndExtentToDeepEquivalentsEv","_memcpy","__ZN7WebCore16VisibleSelection22expandUsingGranularityENS_15TextGranularityE","__ZN7WebCore16VisibleSelection27selectionFromContentsOfNodeEPNS_4NodeE","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZNK7WebCore16VisibleSelection16hasEditableStyleEv","__ZN7WebCore16VisibleSelectionC2Ev","__ZN7WebCore16VisibleSelection52setStartAndEndFromBaseAndExtentRespectingGranularityENS_15TextGranularityE","__ZN7WebCore16VisibleSelectionC2ERKNS_8PositionES3_NS_9EAffinityEb","__ZNK7WebCore16VisibleSelection5isAllENS_27EditingBoundaryCrossingRuleE","__ZNK7WebCore16VisibleSelection23isContentRichlyEditableEv","__ZN7WebCore16VisibleSelection19updateSelectionTypeEv","__ZNK7WebCore16VisibleSelection17toNormalizedRangeEv","__ZN7WebCore16VisibleSelection7setBaseERKNS_15VisiblePositionE","__ZN7WebCore16VisibleSelection24appendTrailingWhitespaceEv","__ZN7WebCore16VisibleSelection9setExtentERKNS_15VisiblePositionE","__ZN7WebCore16VisibleSelection7setBaseERKNS_8PositionE"]

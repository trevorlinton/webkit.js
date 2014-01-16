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
H_BASE = parentModule["_malloc"](280 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 280;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore12DOMSelectionC1EPKNS_9TreeScopeE;
/* memory initializer */ allocate([99,104,97,114,97,99,116,101,114,0,0,0,0,0,0,0,114,105,103,104,116,0,0,0,108,101,102,116,0,0,0,0,98,97,99,107,119,97,114,100,0,0,0,0,0,0,0,0,102,111,114,119,97,114,100,0,109,111,118,101,0,0,0,0,101,120,116,101,110,100,0,0,82,97,110,103,101,0,0,0,100,111,99,117,109,101,110,116,98,111,117,110,100,97,114,121,0,0,0,0,0,0,0,0,112,97,114,97,103,114,97,112,104,98,111,117,110,100,97,114,121,0,0,0,0,0,0,0,115,101,110,116,101,110,99,101,98,111,117,110,100,97,114,121,0,0,0,0,0,0,0,0,108,105,110,101,98,111,117,110,100,97,114,121,0,0,0,0,112,97,114,97,103,114,97,112,104,0,0,0,0,0,0,0,108,105,110,101,0,0,0,0,115,101,110,116,101,110,99,101,0,0,0,0,0,0,0,0,119,111,114,100,0,0,0,0,67,97,114,101,116,0,0,0,78,111,110,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var __ZTVN7WebCore12DOMSelectionE=(H_BASE+240)|0;
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
function __ZN7WebCore12DOMSelection8addRangeEPNS_5RangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 496 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 128 | 0;
 i14 = i3 + 152 | 0;
 i15 = i3 + 160 | 0;
 i16 = i3 + 224 | 0;
 i17 = i3 + 240 | 0;
 i18 = i3 + 256 | 0;
 i19 = i3 + 320 | 0;
 i20 = i3 + 328 | 0;
 i21 = i3 + 336 | 0;
 i22 = i3 + 400 | 0;
 i23 = i3 + 464 | 0;
 i24 = i3 + 480 | 0;
 i25 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i25 | 0) == 0 | (i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i25 + 468 >> 2] | 0;
 if ((HEAP32[i1 + 84 >> 2] | 0) == 0) {
  __ZN7WebCore16VisibleSelectionC1EPKNS_5RangeENS_9EAffinityEb(i12, i2, 1, 0);
  __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i12, 6, 0, 0);
  __ZN7WebCore16VisibleSelectionD2Ev(i12);
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i13, i1 + 32 | 0);
 i12 = i13 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = i3 + 136 | 0;
 HEAP32[i12 >> 2] = 0;
 do {
  if ((__ZNK7WebCore5Range21compareBoundaryPointsENS0_10CompareHowEPKS0_Ri(i2, 0, i13, i12) | 0) << 16 >> 16 == -1) {
   i25 = i3 + 144 | 0;
   HEAP32[i25 >> 2] = 0;
   if ((__ZNK7WebCore5Range21compareBoundaryPointsENS0_10CompareHowEPKS0_Ri(i2, 1, i13, i25) | 0) << 16 >> 16 <= -1) {
    break;
   }
   i25 = i14 | 0;
   HEAP32[i25 >> 2] = 0;
   if ((__ZNK7WebCore5Range21compareBoundaryPointsENS0_10CompareHowEPKS0_Ri(i2, 2, i13, i25) | 0) << 16 >> 16 != -1) {
    __ZN7WebCore16VisibleSelectionC1EPKNS_5RangeENS_9EAffinityEb(i18, i2, 1, 0);
    __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i18, 6, 0, 0);
    __ZN7WebCore16VisibleSelectionD2Ev(i18);
    break;
   }
   i25 = i2 + 12 | 0;
   i26 = HEAP32[i25 >> 2] | 0;
   if ((i26 | 0) > -1) {
    i27 = i26;
   } else {
    i26 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i25 >> 2] = i26;
    i27 = i26;
   }
   i26 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i26 | 0) == 0) {
    i28 = i27;
   } else {
    i29 = i26 + 8 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
    i28 = HEAP32[i25 >> 2] | 0;
   }
   i25 = i6 | 0;
   HEAP32[i25 >> 2] = i26;
   HEAP32[i7 >> 2] = i28;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i16, i6, i7);
   i26 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i26 | 0) != 0) {
     i25 = i26 + 8 | 0;
     i29 = i25 | 0;
     i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     HEAP32[i29 >> 2] = i30;
     if ((i30 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
    }
   } while (0);
   i26 = i13 + 24 | 0;
   i25 = HEAP32[i26 >> 2] | 0;
   if ((i25 | 0) > -1) {
    i31 = i25;
   } else {
    i25 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i13 + 28 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i26 >> 2] = i25;
    i31 = i25;
   }
   i25 = HEAP32[i13 + 20 >> 2] | 0;
   if ((i25 | 0) == 0) {
    i32 = i31;
   } else {
    i30 = i25 + 8 | 0;
    HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
    i32 = HEAP32[i26 >> 2] | 0;
   }
   i26 = i4 | 0;
   HEAP32[i26 >> 2] = i25;
   HEAP32[i5 >> 2] = i32;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i17, i4, i5);
   i25 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i26 = i25 + 8 | 0;
     i30 = i26 | 0;
     i29 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     HEAP32[i30 >> 2] = i29;
     if ((i29 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i15, i16, i17, 1, 0);
   __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i15, 6, 0, 0);
   __ZN7WebCore16VisibleSelectionD2Ev(i15);
   i25 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i26 = i25 + 8 | 0;
     i29 = i26 | 0;
     i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     HEAP32[i29 >> 2] = i30;
     if ((i30 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
    }
   } while (0);
   i25 = HEAP32[i16 >> 2] | 0;
   if ((i25 | 0) == 0) {
    break;
   }
   i26 = i25 + 8 | 0;
   i25 = i26 | 0;
   i30 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   HEAP32[i25 >> 2] = i30;
   if ((i30 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
  } else {
   HEAP32[i19 >> 2] = 0;
   i26 = (__ZNK7WebCore5Range21compareBoundaryPointsENS0_10CompareHowEPKS0_Ri(i2, 3, i13, i19) | 0) << 16 >> 16 > 0;
   if (i26 | (HEAP32[i19 >> 2] | 0) != 0) {
    break;
   }
   i26 = i20 | 0;
   HEAP32[i26 >> 2] = 0;
   if ((__ZNK7WebCore5Range21compareBoundaryPointsENS0_10CompareHowEPKS0_Ri(i2, 2, i13, i26) | 0) << 16 >> 16 == -1) {
    __ZN7WebCore16VisibleSelectionC1EPKNS_5RangeENS_9EAffinityEb(i21, i13, 1, 0);
    __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i21, 6, 0, 0);
    __ZN7WebCore16VisibleSelectionD2Ev(i21);
    break;
   }
   i26 = i13 + 12 | 0;
   i30 = HEAP32[i26 >> 2] | 0;
   if ((i30 | 0) > -1) {
    i33 = i30;
   } else {
    i30 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i13 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i26 >> 2] = i30;
    i33 = i30;
   }
   i30 = HEAP32[i13 + 8 >> 2] | 0;
   if ((i30 | 0) == 0) {
    i34 = i33;
   } else {
    i25 = i30 + 8 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
    i34 = HEAP32[i26 >> 2] | 0;
   }
   i26 = i8 | 0;
   HEAP32[i26 >> 2] = i30;
   HEAP32[i9 >> 2] = i34;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i23, i8, i9);
   i30 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i26 = i30 + 8 | 0;
     i25 = i26 | 0;
     i29 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     HEAP32[i25 >> 2] = i29;
     if ((i29 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
    }
   } while (0);
   i30 = i2 + 24 | 0;
   i26 = HEAP32[i30 >> 2] | 0;
   if ((i26 | 0) > -1) {
    i35 = i26;
   } else {
    i26 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 28 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i30 >> 2] = i26;
    i35 = i26;
   }
   i26 = HEAP32[i2 + 20 >> 2] | 0;
   if ((i26 | 0) == 0) {
    i36 = i35;
   } else {
    i29 = i26 + 8 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
    i36 = HEAP32[i30 >> 2] | 0;
   }
   i30 = i10 | 0;
   HEAP32[i30 >> 2] = i26;
   HEAP32[i11 >> 2] = i36;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i24, i10, i11);
   i26 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i26 | 0) != 0) {
     i30 = i26 + 8 | 0;
     i29 = i30 | 0;
     i25 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     HEAP32[i29 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i22, i23, i24, 1, 0);
   __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i22, 6, 0, 0);
   __ZN7WebCore16VisibleSelectionD2Ev(i22);
   i26 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i26 | 0) != 0) {
     i30 = i26 + 8 | 0;
     i25 = i30 | 0;
     i29 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     HEAP32[i25 >> 2] = i29;
     if ((i29 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
    }
   } while (0);
   i26 = HEAP32[i23 >> 2] | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   i30 = i26 + 8 | 0;
   i26 = i30 | 0;
   i29 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   HEAP32[i26 >> 2] = i29;
   if ((i29 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
  }
 } while (0);
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i23 = i13 | 0;
 i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
 if ((i24 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i13);
  __ZN3WTF8fastFreeEPv(i13);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i23 >> 2] = i24;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore12DOMSelection16setBaseAndExtentEPNS_4NodeEiS2_iRi(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 48 | 0;
 i14 = i7 + 64 | 0;
 i15 = i7 + 80 | 0;
 i16 = i1 + 4 | 0;
 i1 = HEAP32[i16 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 if ((i5 | i3 | 0) < 0) {
  HEAP32[i6 >> 2] = 1;
  STACKTOP = i7;
  return;
 }
 i6 = (i2 | 0) == 0;
 do {
  if (!i6) {
   if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) == (HEAP32[i1 + 456 >> 2] | 0)) {
    break;
   }
   STACKTOP = i7;
   return;
  }
 } while (0);
 i17 = (i4 | 0) == 0;
 do {
  if (!i17) {
   if ((HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 8 >> 2] | 0) == (HEAP32[i1 + 456 >> 2] | 0)) {
    break;
   }
   STACKTOP = i7;
   return;
  }
 } while (0);
 if (!i6) {
  i6 = i2 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i10 | 0;
 HEAP32[i6 >> 2] = i2;
 HEAP32[i11 >> 2] = i3;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i13, i10, i11);
 i11 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i6 = i11 + 8 | 0;
   i10 = i6 | 0;
   i3 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i12, i13, 1);
 i11 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i13 = i11 + 8 | 0;
   i6 = i13 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 if (!i17) {
  i17 = i4 + 8 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
 }
 i17 = i8 | 0;
 HEAP32[i17 >> 2] = i4;
 HEAP32[i9 >> 2] = i5;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i15, i8, i9);
 i9 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i17 = i9 + 8 | 0;
   i8 = i17 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i14, i15, 1);
 i9 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i15 = i9 + 8 | 0;
   i17 = i15 | 0;
   i5 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   HEAP32[i17 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore14FrameSelection6moveToERKNS_15VisiblePositionES3_NS_14EUserTriggeredE(HEAP32[(HEAP32[i16 >> 2] | 0) + 468 >> 2] | 0, i12, i14, 0);
 i16 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i14 = i16 + 8 | 0;
   i9 = i14 | 0;
   i15 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
  }
 } while (0);
 i16 = HEAP32[i12 >> 2] | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i12 = i16 + 8 | 0;
 i16 = i12 | 0;
 i14 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
 HEAP32[i16 >> 2] = i14;
 if ((i14 | 0) >= 1) {
  STACKTOP = i7;
  return;
 }
 if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
 STACKTOP = i7;
 return;
}
function __ZNK7WebCore12DOMSelection12containsNodeEPNS_4NodeEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 i1 = HEAP32[i7 + 468 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 if ((HEAP32[i7 + 456 >> 2] | 0) != (HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0)) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 if ((HEAP32[i1 + 84 >> 2] | 0) == 0) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 i7 = i2 + 8 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i5, i1 + 32 | 0);
 i1 = i5 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i1 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i9 = 0;
  } else {
   i7 = i1 | 0;
   if ((HEAP32[i1 + 12 >> 2] & 256 | 0) == 0) {
    i9 = 0;
    break;
   }
   i10 = __ZNK7WebCore4Node9nodeIndexEv(i2) | 0;
   HEAP32[i6 >> 2] = 0;
   i11 = i5 + 8 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   i13 = i5 + 12 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) > -1) {
    i15 = i14;
   } else {
    i14 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i5 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i13 >> 2] = i14;
    i15 = i14;
   }
   i14 = (__ZN7WebCore5Range21compareBoundaryPointsEPNS_4NodeEiS2_iRi(i7, i10, i12, i15, i6) | 0) << 16 >> 16 < 0;
   if (i14 | (HEAP32[i6 >> 2] | 0) != 0) {
    i16 = i5 + 20 | 0;
    i17 = i5 + 24 | 0;
   } else {
    i14 = i5 + 20 | 0;
    i12 = HEAP32[i14 >> 2] | 0;
    i18 = i5 + 24 | 0;
    i19 = HEAP32[i18 >> 2] | 0;
    if ((i19 | 0) > -1) {
     i20 = i19;
    } else {
     i19 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i5 + 28 >> 2] | 0) | 0) + 1 | 0;
     HEAP32[i18 >> 2] = i19;
     i20 = i19;
    }
    i19 = (__ZN7WebCore5Range21compareBoundaryPointsEPNS_4NodeEiS2_iRi(i7, i10 + 1 | 0, i12, i20, i6) | 0) << 16 >> 16 < 1;
    if (i19 & (HEAP32[i6 >> 2] | 0) == 0) {
     i9 = 1;
     break;
    } else {
     i16 = i14;
     i17 = i18;
    }
   }
   i18 = HEAP32[i16 >> 2] | 0;
   i14 = HEAP32[i17 >> 2] | 0;
   if ((i14 | 0) > -1) {
    i21 = i14;
   } else {
    i14 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i5 + 28 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i17 >> 2] = i14;
    i21 = i14;
   }
   i14 = (__ZN7WebCore5Range21compareBoundaryPointsEPNS_4NodeEiS2_iRi(i7, i10, i18, i21, i6) | 0) << 16 >> 16 < 1;
   if (!(i14 | (HEAP32[i6 >> 2] | 0) != 0)) {
    i9 = 0;
    break;
   }
   i14 = HEAP32[i11 >> 2] | 0;
   i11 = HEAP32[i13 >> 2] | 0;
   if ((i11 | 0) > -1) {
    i22 = i11;
   } else {
    i11 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i5 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i13 >> 2] = i11;
    i22 = i11;
   }
   i11 = (__ZN7WebCore5Range21compareBoundaryPointsEPNS_4NodeEiS2_iRi(i7, i10 + 1 | 0, i14, i22, i6) | 0) << 16 >> 16 < 0;
   i14 = (HEAP32[i6 >> 2] | 0) == 0;
   if (i11 & i14 | i3) {
    i9 = i11 & i14 ^ 1;
    break;
   }
   i9 = (HEAP32[i2 + 12 >> 2] & 1 | 0) != 0;
  }
 } while (0);
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i5 = i2 + 8 | 0;
 i2 = i5 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  i8 = i9;
  STACKTOP = i4;
  return i8 | 0;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  i8 = i9;
  STACKTOP = i4;
  return i8 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 i8 = i9;
 STACKTOP = i4;
 return i8 | 0;
}
function __ZN7WebCore12DOMSelection10getRangeAtEiRi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i2 + 4 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 do {
  if ((i3 | 0) >= 0) {
   i9 = HEAP32[i2 + 468 >> 2] | 0;
   if (((HEAP32[i9 + 84 >> 2] | 0) != 0 | 0) <= (i3 | 0)) {
    break;
   }
   i10 = HEAP32[i9 + 32 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i9 = HEAP32[i10 + 8 >> 2] | 0;
     i11 = i10 + 8 | 0;
     i12 = i11 - 8 | 0;
     HEAP32[i11 >> 2] = i9;
     do {
      if ((i9 | 0) < 1) {
       if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i12);
      }
     } while (0);
     if ((HEAP32[i10 + 12 >> 2] & 8388608 | 0) == 0) {
      break;
     }
     i12 = __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE((HEAP32[i2 + 456 >> 2] | 0) + 44 | 0, i10) | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     i11 = HEAP32[i12 + 16 >> 2] | 0;
     i9 = __ZNK7WebCore4Node9nodeIndexEv(i12) | 0;
     i13 = HEAP32[(HEAP32[i12 + 20 >> 2] | 0) + 8 >> 2] | 0;
     i12 = i11 | 0;
     i14 = i6 | 0;
     HEAP32[i14 >> 2] = i12;
     if ((i11 | 0) == 0) {
      i15 = i7 | 0;
      HEAP32[i15 >> 2] = i12;
      i16 = i15;
     } else {
      i15 = i11 + 8 | 0;
      HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
      i11 = i7 | 0;
      HEAP32[i11 >> 2] = i12;
      HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
      i16 = i11;
     }
     __ZN7WebCore5Range6createERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i(i1, i13, i6, i9, i7, i9);
     i9 = HEAP32[i16 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i13 = i9 + 8 | 0;
       i11 = i13 | 0;
       i15 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
       HEAP32[i11 >> 2] = i15;
       if ((i15 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
      }
     } while (0);
     i9 = HEAP32[i14 >> 2] | 0;
     if ((i9 | 0) == 0) {
      STACKTOP = i5;
      return;
     }
     i13 = i9 + 8 | 0;
     i9 = i13 | 0;
     i15 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i15;
     if ((i15 | 0) >= 1) {
      STACKTOP = i5;
      return;
     }
     if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
      STACKTOP = i5;
      return;
     }
     __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
     STACKTOP = i5;
     return;
    }
   } while (0);
   __ZNK7WebCore16VisibleSelection10firstRangeEv(i1, (HEAP32[(HEAP32[i8 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0);
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP32[i4 >> 2] = 1;
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore12DOMSelection12anchorOffsetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i7 = HEAP32[i5 + 468 >> 2] | 0;
 i5 = i3 | 0;
 if ((HEAP8[i7 + 88 | 0] & 1) == 0) {
  i8 = HEAP32[i7 + 68 >> 2] | 0;
  HEAP32[i5 >> 2] = i8;
  if ((i8 | 0) == 0) {
   i9 = i3 + 8 | 0;
   i10 = 0;
   i11 = i9;
   i12 = i9;
  } else {
   i9 = i8 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = i3 + 8 | 0;
   i8 = i9;
   i10 = HEAP32[i8 >> 2] & -8;
   i11 = i9;
   i12 = i8;
  }
  HEAP32[i3 + 4 >> 2] = HEAP32[i7 + 72 >> 2];
  i8 = HEAP32[i7 + 76 >> 2] | 0;
  i9 = i10 | i8 & 7;
  HEAP32[i12 >> 2] = i9;
  HEAP8[i11] = i9 & 255 & -9 | i8 & 8;
 } else {
  i8 = HEAP32[i7 + 56 >> 2] | 0;
  HEAP32[i5 >> 2] = i8;
  if ((i8 | 0) == 0) {
   i9 = i3 + 8 | 0;
   i13 = 0;
   i14 = i9;
   i15 = i9;
  } else {
   i9 = i8 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = i3 + 8 | 0;
   i8 = i9;
   i13 = HEAP32[i8 >> 2] & -8;
   i14 = i9;
   i15 = i8;
  }
  HEAP32[i3 + 4 >> 2] = HEAP32[i7 + 60 >> 2];
  i8 = HEAP32[i7 + 64 >> 2] | 0;
  i7 = i13 | i8 & 7;
  HEAP32[i15 >> 2] = i7;
  HEAP8[i14] = i7 & 255 & -9 | i8 & 8;
 }
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i4, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i8 = i5 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i3 = i4 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i5 = __ZNK7WebCore8Position13containerNodeEv(i4) | 0;
 i7 = __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE(HEAP32[i1 + 16 >> 2] | 0, i5) | 0;
 do {
  if ((i7 | 0) == 0) {
   i16 = 0;
  } else {
   if ((i5 | 0) == (i7 | 0)) {
    i16 = __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i4) | 0;
    break;
   } else {
    i16 = __ZNK7WebCore4Node9nodeIndexEv(i7) | 0;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i3 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i6 = i16;
  STACKTOP = i2;
  return i6 | 0;
 }
 i3 = i7 + 8 | 0;
 i7 = i3 | 0;
 i4 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  i6 = i16;
  STACKTOP = i2;
  return i6 | 0;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i6 = i16;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i6 = i16;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore12DOMSelection11focusOffsetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i7 = HEAP32[i5 + 468 >> 2] | 0;
 i5 = i3 | 0;
 if ((HEAP8[i7 + 88 | 0] & 1) == 0) {
  i8 = HEAP32[i7 + 56 >> 2] | 0;
  HEAP32[i5 >> 2] = i8;
  if ((i8 | 0) == 0) {
   i9 = i3 + 8 | 0;
   i10 = 0;
   i11 = i9;
   i12 = i9;
  } else {
   i9 = i8 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = i3 + 8 | 0;
   i8 = i9;
   i10 = HEAP32[i8 >> 2] & -8;
   i11 = i9;
   i12 = i8;
  }
  HEAP32[i3 + 4 >> 2] = HEAP32[i7 + 60 >> 2];
  i8 = HEAP32[i7 + 64 >> 2] | 0;
  i9 = i10 | i8 & 7;
  HEAP32[i12 >> 2] = i9;
  HEAP8[i11] = i9 & 255 & -9 | i8 & 8;
 } else {
  i8 = HEAP32[i7 + 68 >> 2] | 0;
  HEAP32[i5 >> 2] = i8;
  if ((i8 | 0) == 0) {
   i9 = i3 + 8 | 0;
   i13 = 0;
   i14 = i9;
   i15 = i9;
  } else {
   i9 = i8 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = i3 + 8 | 0;
   i8 = i9;
   i13 = HEAP32[i8 >> 2] & -8;
   i14 = i9;
   i15 = i8;
  }
  HEAP32[i3 + 4 >> 2] = HEAP32[i7 + 72 >> 2];
  i8 = HEAP32[i7 + 76 >> 2] | 0;
  i7 = i13 | i8 & 7;
  HEAP32[i15 >> 2] = i7;
  HEAP8[i14] = i7 & 255 & -9 | i8 & 8;
 }
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i4, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i8 = i5 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i3 = i4 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i5 = __ZNK7WebCore8Position13containerNodeEv(i4) | 0;
 i7 = __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE(HEAP32[i1 + 16 >> 2] | 0, i5) | 0;
 do {
  if ((i7 | 0) == 0) {
   i16 = 0;
  } else {
   if ((i5 | 0) == (i7 | 0)) {
    i16 = __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i4) | 0;
    break;
   } else {
    i16 = __ZNK7WebCore4Node9nodeIndexEv(i7) | 0;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i3 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i6 = i16;
  STACKTOP = i2;
  return i6 | 0;
 }
 i3 = i7 + 8 | 0;
 i7 = i3 | 0;
 i4 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  i6 = i16;
  STACKTOP = i2;
  return i6 | 0;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i6 = i16;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i6 = i16;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN7WebCore12DOMSelection6extendEPNS_4NodeEiRi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 32 | 0;
 i10 = i1 + 4 | 0;
 if ((HEAP32[i10 >> 2] | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if ((i2 | 0) == 0) {
  HEAP32[i4 >> 2] = 17;
  STACKTOP = i5;
  return;
 }
 do {
  if ((i3 | 0) >= 0) {
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 1](i2) | 0) {
     i11 = __ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(i2) | 0;
    } else {
     if ((HEAP32[i2 + 12 >> 2] & 2 | 0) == 0) {
      i11 = 0;
      break;
     }
     i11 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i2) | 0;
    }
   } while (0);
   if ((i11 | 0) < (i3 | 0)) {
    break;
   }
   i1 = HEAP32[i10 >> 2] | 0;
   if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) != (HEAP32[i1 + 456 >> 2] | 0)) {
    STACKTOP = i5;
    return;
   }
   i12 = HEAP32[i1 + 468 >> 2] | 0;
   i1 = i2 + 8 | 0;
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
   i1 = i6 | 0;
   HEAP32[i1 >> 2] = i2;
   HEAP32[i7 >> 2] = i3;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i9, i6, i7);
   i13 = HEAP32[i1 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i1 = i13 + 8 | 0;
     i14 = i1 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i15;
     if ((i15 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i9, 1);
   __ZN7WebCore14FrameSelection9setExtentERKNS_15VisiblePositionENS_14EUserTriggeredE(i12, i8, 0);
   i13 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i1 = i13 + 8 | 0;
     i15 = i1 | 0;
     i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i14;
     if ((i14 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
    }
   } while (0);
   i13 = HEAP32[i9 >> 2] | 0;
   if ((i13 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i12 = i13 + 8 | 0;
   i13 = i12 | 0;
   i1 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    STACKTOP = i5;
    return;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    STACKTOP = i5;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP32[i4 >> 2] = 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore12DOMSelection18deleteFromDocumentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i1 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i9 = HEAP32[i8 + 468 >> 2] | 0;
 if ((HEAP32[i9 + 84 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i10 = HEAP32[i9 + 32 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i11 = 9;
  } else {
   i12 = HEAP32[i10 + 8 >> 2] | 0;
   i13 = i10 + 8 | 0;
   i14 = i13 - 8 | 0;
   HEAP32[i13 >> 2] = i12;
   do {
    if ((i12 | 0) < 1) {
     if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14);
    }
   } while (0);
   if ((HEAP32[i10 + 12 >> 2] & 8388608 | 0) == 0) {
    i11 = 9;
    break;
   }
   if ((__ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE((HEAP32[i8 + 456 >> 2] | 0) + 44 | 0, i10) | 0) == 0) {
    i11 = 9;
   } else {
    i11 = 10;
   }
  }
 } while (0);
 if ((i11 | 0) == 9) {
  if ((HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 468 >> 2] | 0) + 84 >> 2] | 0) != 2) {
   i11 = 10;
  }
 }
 if ((i11 | 0) == 10) {
  __ZN7WebCore14FrameSelection6modifyENS0_11EAlterationENS_18SelectionDirectionENS_15TextGranularityENS_14EUserTriggeredE(i9, 1, 1, 0, 0) | 0;
 }
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i3, i9 + 32 | 0);
 i9 = i3 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZN7WebCore5Range14deleteContentsERi(i3, i9);
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = 0;
 i5 = __ZNK7WebCore5Range14startContainerERi(i3, i9) | 0;
 i9 = i3 + 12 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) > -1) {
   i15 = i4;
   i16 = i4;
   i17 = HEAP32[i3 + 8 >> 2] | 0;
  } else {
   i11 = i3 + 16 | 0;
   i7 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i11 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i9 >> 2] = i7;
   i10 = HEAP32[i3 + 8 >> 2] | 0;
   if ((i7 | 0) > -1) {
    i15 = i7;
    i16 = i7;
    i17 = i10;
    break;
   }
   i8 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i11 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i9 >> 2] = i8;
   i15 = i8;
   i16 = i7;
   i17 = i10;
  }
 } while (0);
 i9 = i6 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZN7WebCore12DOMSelection16setBaseAndExtentEPNS_4NodeEiS2_iRi(i1, i5, i16, i17, i15, i9);
 i9 = i3 | 0;
 i15 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i15 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i9 >> 2] = i15;
  STACKTOP = i2;
  return;
 }
}
function __ZNK7WebCore12DOMSelection10anchorNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i7 = HEAP32[i5 + 468 >> 2] | 0;
 i5 = i3 | 0;
 if ((HEAP8[i7 + 88 | 0] & 1) == 0) {
  i8 = HEAP32[i7 + 68 >> 2] | 0;
  HEAP32[i5 >> 2] = i8;
  if ((i8 | 0) == 0) {
   i9 = i3 + 8 | 0;
   i10 = 0;
   i11 = i9;
   i12 = i9;
  } else {
   i9 = i8 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = i3 + 8 | 0;
   i8 = i9;
   i10 = HEAP32[i8 >> 2] & -8;
   i11 = i9;
   i12 = i8;
  }
  HEAP32[i3 + 4 >> 2] = HEAP32[i7 + 72 >> 2];
  i8 = HEAP32[i7 + 76 >> 2] | 0;
  i9 = i10 | i8 & 7;
  HEAP32[i12 >> 2] = i9;
  HEAP8[i11] = i9 & 255 & -9 | i8 & 8;
 } else {
  i8 = HEAP32[i7 + 56 >> 2] | 0;
  HEAP32[i5 >> 2] = i8;
  if ((i8 | 0) == 0) {
   i9 = i3 + 8 | 0;
   i13 = 0;
   i14 = i9;
   i15 = i9;
  } else {
   i9 = i8 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = i3 + 8 | 0;
   i8 = i9;
   i13 = HEAP32[i8 >> 2] & -8;
   i14 = i9;
   i15 = i8;
  }
  HEAP32[i3 + 4 >> 2] = HEAP32[i7 + 60 >> 2];
  i8 = HEAP32[i7 + 64 >> 2] | 0;
  i7 = i13 | i8 & 7;
  HEAP32[i15 >> 2] = i7;
  HEAP8[i14] = i7 & 255 & -9 | i8 & 8;
 }
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i4, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i8 = i5 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i3 = i4 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i5 = __ZNK7WebCore8Position13containerNodeEv(i4) | 0;
 i4 = __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE(HEAP32[i1 + 16 >> 2] | 0, i5) | 0;
 do {
  if ((i4 | 0) == 0) {
   i16 = 0;
  } else {
   if ((i5 | 0) == (i4 | 0)) {
    i16 = i5;
    break;
   }
   i16 = HEAP32[i4 + 16 >> 2] | 0;
  }
 } while (0);
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i6 = i16;
  STACKTOP = i2;
  return i6 | 0;
 }
 i3 = i4 + 8 | 0;
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  i6 = i16;
  STACKTOP = i2;
  return i6 | 0;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i6 = i16;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i6 = i16;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore12DOMSelection9focusNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i7 = HEAP32[i5 + 468 >> 2] | 0;
 i5 = i3 | 0;
 if ((HEAP8[i7 + 88 | 0] & 1) == 0) {
  i8 = HEAP32[i7 + 56 >> 2] | 0;
  HEAP32[i5 >> 2] = i8;
  if ((i8 | 0) == 0) {
   i9 = i3 + 8 | 0;
   i10 = 0;
   i11 = i9;
   i12 = i9;
  } else {
   i9 = i8 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = i3 + 8 | 0;
   i8 = i9;
   i10 = HEAP32[i8 >> 2] & -8;
   i11 = i9;
   i12 = i8;
  }
  HEAP32[i3 + 4 >> 2] = HEAP32[i7 + 60 >> 2];
  i8 = HEAP32[i7 + 64 >> 2] | 0;
  i9 = i10 | i8 & 7;
  HEAP32[i12 >> 2] = i9;
  HEAP8[i11] = i9 & 255 & -9 | i8 & 8;
 } else {
  i8 = HEAP32[i7 + 68 >> 2] | 0;
  HEAP32[i5 >> 2] = i8;
  if ((i8 | 0) == 0) {
   i9 = i3 + 8 | 0;
   i13 = 0;
   i14 = i9;
   i15 = i9;
  } else {
   i9 = i8 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = i3 + 8 | 0;
   i8 = i9;
   i13 = HEAP32[i8 >> 2] & -8;
   i14 = i9;
   i15 = i8;
  }
  HEAP32[i3 + 4 >> 2] = HEAP32[i7 + 72 >> 2];
  i8 = HEAP32[i7 + 76 >> 2] | 0;
  i7 = i13 | i8 & 7;
  HEAP32[i15 >> 2] = i7;
  HEAP8[i14] = i7 & 255 & -9 | i8 & 8;
 }
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i4, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i8 = i5 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i3 = i4 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i5 = __ZNK7WebCore8Position13containerNodeEv(i4) | 0;
 i4 = __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE(HEAP32[i1 + 16 >> 2] | 0, i5) | 0;
 do {
  if ((i4 | 0) == 0) {
   i16 = 0;
  } else {
   if ((i5 | 0) == (i4 | 0)) {
    i16 = i5;
    break;
   }
   i16 = HEAP32[i4 + 16 >> 2] | 0;
  }
 } while (0);
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i6 = i16;
  STACKTOP = i2;
  return i6 | 0;
 }
 i3 = i4 + 8 | 0;
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  i6 = i16;
  STACKTOP = i2;
  return i6 | 0;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i6 = i16;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i6 = i16;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN7WebCore12DOMSelection6modifyERKN3WTF6StringES4_S4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = i1 + 4 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 do {
  if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 72 | 0) | 0) {
   i6 = 1;
  } else {
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 64 | 0) | 0) {
    i6 = 0;
    break;
   }
   return;
  }
 } while (0);
 i1 = i3 | 0;
 do {
  if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 56 | 0) | 0) {
   i7 = 0;
  } else {
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 40 | 0) | 0) {
    i7 = 1;
    break;
   }
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 32 | 0) | 0) {
    i7 = 3;
    break;
   }
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 24 | 0) | 0) {
    i7 = 2;
    break;
   }
   return;
  }
 } while (0);
 i1 = i4 | 0;
 do {
  if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 8 | 0) | 0) {
   i8 = 0;
  } else {
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 216 | 0) | 0) {
    i8 = 1;
    break;
   }
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 200 | 0) | 0) {
    i8 = 2;
    break;
   }
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 192 | 0) | 0) {
    i8 = 3;
    break;
   }
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 176 | 0) | 0) {
    i8 = 4;
    break;
   }
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 160 | 0) | 0) {
    i8 = 6;
    break;
   }
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 136 | 0) | 0) {
    i8 = 5;
    break;
   }
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 112 | 0) | 0) {
    i8 = 7;
    break;
   }
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 88 | 0) | 0) {
    i8 = 8;
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore14FrameSelection6modifyENS0_11EAlterationENS_18SelectionDirectionENS_15TextGranularityENS_14EUserTriggeredE(HEAP32[(HEAP32[i5 >> 2] | 0) + 468 >> 2] | 0, i6, i7, i8, 0) | 0;
 return;
}
function __ZN7WebCore12DOMSelection11setPositionEPNS_4NodeEiRi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 32 | 0;
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if ((i3 | 0) < 0) {
  HEAP32[i4 >> 2] = 1;
  STACKTOP = i5;
  return;
 }
 do {
  if ((i2 | 0) == 0) {
   i11 = HEAP32[i10 + 468 >> 2] | 0;
  } else {
   if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) == (HEAP32[i10 + 456 >> 2] | 0)) {
    i4 = HEAP32[i10 + 468 >> 2] | 0;
    i1 = i2 + 8 | 0;
    HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
    i11 = i4;
    break;
   } else {
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = i2;
 HEAP32[i7 >> 2] = i3;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i9, i6, i7);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 + 8 | 0;
   i6 = i10 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i9, 1);
 __ZN7WebCore14FrameSelection6moveToERKNS_15VisiblePositionENS_14EUserTriggeredENS0_19CursorAlignOnScrollE(i11, i8, 0, 0);
 i11 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i8 = i11 + 8 | 0;
   i7 = i8 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i11 = HEAP32[i9 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i9 = i11 + 8 | 0;
 i11 = i9 | 0;
 i8 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 HEAP32[i11 >> 2] = i8;
 if ((i8 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore12DOMSelection8collapseEPNS_4NodeEiRi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 32 | 0;
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if ((i3 | 0) < 0) {
  HEAP32[i4 >> 2] = 1;
  STACKTOP = i5;
  return;
 }
 do {
  if ((i2 | 0) == 0) {
   i11 = HEAP32[i10 + 468 >> 2] | 0;
  } else {
   if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) == (HEAP32[i10 + 456 >> 2] | 0)) {
    i4 = HEAP32[i10 + 468 >> 2] | 0;
    i1 = i2 + 8 | 0;
    HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
    i11 = i4;
    break;
   } else {
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = i2;
 HEAP32[i7 >> 2] = i3;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i9, i6, i7);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 + 8 | 0;
   i6 = i10 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i9, 1);
 __ZN7WebCore14FrameSelection6moveToERKNS_15VisiblePositionENS_14EUserTriggeredENS0_19CursorAlignOnScrollE(i11, i8, 0, 0);
 i11 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i8 = i11 + 8 | 0;
   i7 = i8 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i11 = HEAP32[i9 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i9 = i11 + 8 | 0;
 i11 = i9 | 0;
 i8 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 HEAP32[i11 >> 2] = i8;
 if ((i8 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore12DOMSelection12extentOffsetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i7 = HEAP32[i5 + 468 >> 2] | 0;
 i5 = i3 | 0;
 i8 = HEAP32[i7 + 44 >> 2] | 0;
 HEAP32[i5 >> 2] = i8;
 if ((i8 | 0) == 0) {
  i9 = i3 + 8 | 0;
  i10 = 0;
  i11 = i9;
  i12 = i9;
 } else {
  i9 = i8 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i9 = i3 + 8 | 0;
  i8 = i9;
  i10 = HEAP32[i8 >> 2] & -8;
  i11 = i9;
  i12 = i8;
 }
 HEAP32[i3 + 4 >> 2] = HEAP32[i7 + 48 >> 2];
 i8 = HEAP32[i7 + 52 >> 2] | 0;
 i7 = i8 & 7 | i10;
 HEAP32[i12 >> 2] = i7;
 HEAP8[i11] = i7 & 255 & -9 | i8 & 8;
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i4, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i8 = i5 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i3 = i4 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i5 = __ZNK7WebCore8Position13containerNodeEv(i4) | 0;
 i7 = __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE(HEAP32[i1 + 16 >> 2] | 0, i5) | 0;
 do {
  if ((i7 | 0) == 0) {
   i13 = 0;
  } else {
   if ((i5 | 0) == (i7 | 0)) {
    i13 = __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i4) | 0;
    break;
   } else {
    i13 = __ZNK7WebCore4Node9nodeIndexEv(i7) | 0;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i3 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i6 = i13;
  STACKTOP = i2;
  return i6 | 0;
 }
 i3 = i7 + 8 | 0;
 i7 = i3 | 0;
 i4 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  i6 = i13;
  STACKTOP = i2;
  return i6 | 0;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i6 = i13;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i6 = i13;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore12DOMSelection10baseOffsetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i7 = HEAP32[i5 + 468 >> 2] | 0;
 i5 = i3 | 0;
 i8 = HEAP32[i7 + 32 >> 2] | 0;
 HEAP32[i5 >> 2] = i8;
 if ((i8 | 0) == 0) {
  i9 = i3 + 8 | 0;
  i10 = 0;
  i11 = i9;
  i12 = i9;
 } else {
  i9 = i8 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i9 = i3 + 8 | 0;
  i8 = i9;
  i10 = HEAP32[i8 >> 2] & -8;
  i11 = i9;
  i12 = i8;
 }
 HEAP32[i3 + 4 >> 2] = HEAP32[i7 + 36 >> 2];
 i8 = HEAP32[i7 + 40 >> 2] | 0;
 i7 = i8 & 7 | i10;
 HEAP32[i12 >> 2] = i7;
 HEAP8[i11] = i7 & 255 & -9 | i8 & 8;
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i4, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i8 = i5 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i3 = i4 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i5 = __ZNK7WebCore8Position13containerNodeEv(i4) | 0;
 i7 = __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE(HEAP32[i1 + 16 >> 2] | 0, i5) | 0;
 do {
  if ((i7 | 0) == 0) {
   i13 = 0;
  } else {
   if ((i5 | 0) == (i7 | 0)) {
    i13 = __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i4) | 0;
    break;
   } else {
    i13 = __ZNK7WebCore4Node9nodeIndexEv(i7) | 0;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i3 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i6 = i13;
  STACKTOP = i2;
  return i6 | 0;
 }
 i3 = i7 + 8 | 0;
 i7 = i3 | 0;
 i4 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  i6 = i13;
  STACKTOP = i2;
  return i6 | 0;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i6 = i13;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i6 = i13;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore12DOMSelection10extentNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i7 = HEAP32[i5 + 468 >> 2] | 0;
 i5 = i3 | 0;
 i8 = HEAP32[i7 + 44 >> 2] | 0;
 HEAP32[i5 >> 2] = i8;
 if ((i8 | 0) == 0) {
  i9 = i3 + 8 | 0;
  i10 = 0;
  i11 = i9;
  i12 = i9;
 } else {
  i9 = i8 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i9 = i3 + 8 | 0;
  i8 = i9;
  i10 = HEAP32[i8 >> 2] & -8;
  i11 = i9;
  i12 = i8;
 }
 HEAP32[i3 + 4 >> 2] = HEAP32[i7 + 48 >> 2];
 i8 = HEAP32[i7 + 52 >> 2] | 0;
 i7 = i8 & 7 | i10;
 HEAP32[i12 >> 2] = i7;
 HEAP8[i11] = i7 & 255 & -9 | i8 & 8;
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i4, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i8 = i5 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i3 = i4 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i5 = __ZNK7WebCore8Position13containerNodeEv(i4) | 0;
 i4 = __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE(HEAP32[i1 + 16 >> 2] | 0, i5) | 0;
 do {
  if ((i4 | 0) == 0) {
   i13 = 0;
  } else {
   if ((i5 | 0) == (i4 | 0)) {
    i13 = i5;
    break;
   }
   i13 = HEAP32[i4 + 16 >> 2] | 0;
  }
 } while (0);
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i6 = i13;
  STACKTOP = i2;
  return i6 | 0;
 }
 i3 = i4 + 8 | 0;
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  i6 = i13;
  STACKTOP = i2;
  return i6 | 0;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i6 = i13;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i6 = i13;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore12DOMSelection8baseNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i7 = HEAP32[i5 + 468 >> 2] | 0;
 i5 = i3 | 0;
 i8 = HEAP32[i7 + 32 >> 2] | 0;
 HEAP32[i5 >> 2] = i8;
 if ((i8 | 0) == 0) {
  i9 = i3 + 8 | 0;
  i10 = 0;
  i11 = i9;
  i12 = i9;
 } else {
  i9 = i8 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i9 = i3 + 8 | 0;
  i8 = i9;
  i10 = HEAP32[i8 >> 2] & -8;
  i11 = i9;
  i12 = i8;
 }
 HEAP32[i3 + 4 >> 2] = HEAP32[i7 + 36 >> 2];
 i8 = HEAP32[i7 + 40 >> 2] | 0;
 i7 = i8 & 7 | i10;
 HEAP32[i12 >> 2] = i7;
 HEAP8[i11] = i7 & 255 & -9 | i8 & 8;
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i4, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i8 = i5 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i3 = i4 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i5 = __ZNK7WebCore8Position13containerNodeEv(i4) | 0;
 i4 = __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE(HEAP32[i1 + 16 >> 2] | 0, i5) | 0;
 do {
  if ((i4 | 0) == 0) {
   i13 = 0;
  } else {
   if ((i5 | 0) == (i4 | 0)) {
    i13 = i5;
    break;
   }
   i13 = HEAP32[i4 + 16 >> 2] | 0;
  }
 } while (0);
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i6 = i13;
  STACKTOP = i2;
  return i6 | 0;
 }
 i3 = i4 + 8 | 0;
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  i6 = i13;
  STACKTOP = i2;
  return i6 | 0;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i6 = i13;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i6 = i13;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN7WebCore12DOMSelection15collapseToStartERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i6 + 468 >> 2] | 0;
 if ((HEAP32[i1 + 84 >> 2] | 0) == 0) {
  HEAP32[i2 >> 2] = 11;
  STACKTOP = i3;
  return;
 }
 i2 = i5 | 0;
 i6 = HEAP32[i1 + 56 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i7 = i5 + 8 | 0;
  i8 = 0;
  i9 = i7;
  i10 = i7;
 } else {
  i7 = i6 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  i7 = i5 + 8 | 0;
  i6 = i7;
  i8 = HEAP32[i6 >> 2] & -8;
  i9 = i7;
  i10 = i6;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i1 + 60 >> 2];
 i6 = HEAP32[i1 + 64 >> 2] | 0;
 i7 = i8 | i6 & 7;
 HEAP32[i10 >> 2] = i7;
 HEAP8[i9] = i7 & 255 & -9 | i6 & 8;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i5, 1);
 __ZN7WebCore14FrameSelection6moveToERKNS_15VisiblePositionENS_14EUserTriggeredENS0_19CursorAlignOnScrollE(i1, i4, 0, 0);
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 + 8 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 + 8 | 0;
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) >= 1) {
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
function __ZN7WebCore12DOMSelection13collapseToEndERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i6 + 468 >> 2] | 0;
 if ((HEAP32[i1 + 84 >> 2] | 0) == 0) {
  HEAP32[i2 >> 2] = 11;
  STACKTOP = i3;
  return;
 }
 i2 = i5 | 0;
 i6 = HEAP32[i1 + 68 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i7 = i5 + 8 | 0;
  i8 = 0;
  i9 = i7;
  i10 = i7;
 } else {
  i7 = i6 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  i7 = i5 + 8 | 0;
  i6 = i7;
  i8 = HEAP32[i6 >> 2] & -8;
  i9 = i7;
  i10 = i6;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i1 + 72 >> 2];
 i6 = HEAP32[i1 + 76 >> 2] | 0;
 i7 = i8 | i6 & 7;
 HEAP32[i10 >> 2] = i7;
 HEAP8[i9] = i7 & 255 & -9 | i6 & 8;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i5, 1);
 __ZN7WebCore14FrameSelection6moveToERKNS_15VisiblePositionENS_14EUserTriggeredENS0_19CursorAlignOnScrollE(i1, i4, 0, 0);
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 + 8 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 + 8 | 0;
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) >= 1) {
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
function __ZN7WebCore16VisibleSelectionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
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
 i2 = HEAP32[i1 + 24 >> 2] | 0;
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
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 return;
}
function __ZNK7WebCore12DOMSelection11isCollapsedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i4 = HEAP32[(HEAP32[i1 + 468 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = HEAP32[i4 + 8 >> 2] | 0;
   i6 = i4 + 8 | 0;
   i7 = i6 - 8 | 0;
   HEAP32[i6 >> 2] = i5;
   do {
    if ((i5 | 0) < 1) {
     if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7);
    }
   } while (0);
   if ((HEAP32[i4 + 12 >> 2] & 8388608 | 0) == 0) {
    break;
   }
   if ((__ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE((HEAP32[i1 + 456 >> 2] | 0) + 44 | 0, i4) | 0) == 0) {
    break;
   } else {
    i3 = 1;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = (HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 468 >> 2] | 0) + 84 >> 2] | 0) != 2;
 return i3 | 0;
}
function __ZN7WebCore12DOMSelection8toStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i4, (HEAP32[i5 + 468 >> 2] | 0) + 32 | 0);
 i5 = i4 | 0;
 __ZN7WebCore9plainTextEPKNS_5RangeENS_20TextIteratorBehaviorEb(i1, HEAP32[i5 >> 2] | 0, 0, 0);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore12DOMSelection20shadowAdjustedOffsetERKNS_8PositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = __ZNK7WebCore8Position13containerNodeEv(i2) | 0;
 i5 = __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE(HEAP32[i1 + 16 >> 2] | 0, i4) | 0;
 if ((i5 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((i4 | 0) == (i5 | 0)) {
  i3 = __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i2) | 0;
  return i3 | 0;
 } else {
  i3 = __ZNK7WebCore4Node9nodeIndexEv(i5) | 0;
  return i3 | 0;
 }
 return 0;
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
function __ZNK7WebCore12DOMSelection18shadowAdjustedNodeERKNS_8PositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = __ZNK7WebCore8Position13containerNodeEv(i2) | 0;
 i2 = __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE(HEAP32[i1 + 16 >> 2] | 0, i4) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((i4 | 0) == (i2 | 0)) {
  i3 = i4;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore12DOMSelection4typeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i2 = HEAP32[(HEAP32[i3 + 468 >> 2] | 0) + 84 >> 2] | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF6StringC1EPKc(i1, H_BASE + 232 | 0);
  return;
 } else if ((i2 | 0) == 1) {
  __ZN3WTF6StringC1EPKc(i1, H_BASE + 224 | 0);
  return;
 } else {
  __ZN3WTF6StringC1EPKc(i1, H_BASE + 80 | 0);
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
function __ZN7WebCore12DOMSelection17selectAllChildrenEPNS_4NodeERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i2 + 12 >> 2] & 2 | 0) == 0) {
  i4 = 0;
 } else {
  i4 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i2) | 0;
 }
 __ZN7WebCore12DOMSelection16setBaseAndExtentEPNS_4NodeEiS2_iRi(i1, i2, 0, i2, i4, i3);
 return;
}
function __ZN7WebCore12DOMSelectionC2EPKNS_9TreeScopeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 12 >> 2] = 1;
 __ZN7WebCore17DOMWindowPropertyC2EPNS_5FrameE(i1 | 0, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0);
 HEAP32[i1 >> 2] = H_BASE + 248;
 HEAP32[i1 + 16 >> 2] = i2;
 return;
}
function __ZN7WebCore12DOMSelectionC1EPKNS_9TreeScopeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 12 >> 2] = 1;
 __ZN7WebCore17DOMWindowPropertyC2EPNS_5FrameE(i1 | 0, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0);
 HEAP32[i1 >> 2] = H_BASE + 248;
 HEAP32[i1 + 16 >> 2] = i2;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 248 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vi + 4;
}
function __ZNK7WebCore12DOMSelection18isValidForPositionEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = (HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) == (HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 456 >> 2] | 0);
 return i3 | 0;
}
function __ZNK7WebCore12DOMSelection10rangeCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[(HEAP32[i2 + 468 >> 2] | 0) + 84 >> 2] | 0) != 0 | 0;
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore12DOMSelection15removeAllRangesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore14FrameSelection5clearEv(HEAP32[i2 + 468 >> 2] | 0);
 return;
}
function vii___ZN7WebCore17DOMWindowProperty27reconnectFrameFromPageCacheEPNS_5FrameE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17DOMWindowProperty27reconnectFrameFromPageCacheEPNS_5FrameE(i1 | 0, i2 | 0);
}
function __ZN7WebCore12DOMSelection5emptyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore14FrameSelection5clearEv(HEAP32[i2 + 468 >> 2] | 0);
 return;
}
function vi___ZN7WebCore17DOMWindowProperty36willDestroyGlobalObjectInCachedFrameEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17DOMWindowProperty36willDestroyGlobalObjectInCachedFrameEv(i1 | 0);
}
function vi___ZN7WebCore17DOMWindowProperty31willDetachGlobalObjectFromFrameEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17DOMWindowProperty31willDetachGlobalObjectFromFrameEv(i1 | 0);
}
function vi___ZN7WebCore17DOMWindowProperty30willDestroyGlobalObjectInFrameEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17DOMWindowProperty30willDestroyGlobalObjectInFrameEv(i1 | 0);
}
function vi___ZN7WebCore17DOMWindowProperty27disconnectFrameForPageCacheEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17DOMWindowProperty27disconnectFrameForPageCacheEv(i1 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZNK7WebCore12DOMSelection16visibleSelectionEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0;
}
function __ZN7WebCore12DOMSelectionD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17DOMWindowPropertyD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
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
function __ZN7WebCore12DOMSelectionD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17DOMWindowPropertyD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore12DOMSelection14clearTreeScopeEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 16 >> 2] = 0;
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
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
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
function b3() {
 abort(3);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,vi___ZN7WebCore17DOMWindowProperty30willDestroyGlobalObjectInFrameEv__wrapper,b0,__ZN7WebCore12DOMSelectionD0Ev,b0,vi___ZN7WebCore17DOMWindowProperty27disconnectFrameForPageCacheEv__wrapper,b0,vi___ZN7WebCore17DOMWindowProperty36willDestroyGlobalObjectInCachedFrameEv__wrapper,b0,__ZN7WebCore12DOMSelectionD1Ev,b0,vi___ZN7WebCore17DOMWindowProperty31willDetachGlobalObjectFromFrameEv__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,vii___ZN7WebCore17DOMWindowProperty27reconnectFrameFromPageCacheEPNS_5FrameE__wrapper,b1,__ZN7WebCore12DOMSelectionC2EPKNS_9TreeScopeE,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore12DOMSelection20shadowAdjustedOffsetERKNS_8PositionE","__ZNK7WebCore12DOMSelection16visibleSelectionEv","__ZN7WebCore12DOMSelection6extendEPNS_4NodeEiRi","__ZN7WebCore12DOMSelection6modifyERKN3WTF6StringES4_S4_","__ZNK7WebCore12DOMSelection12anchorOffsetEv","__ZNK7WebCore12DOMSelection9focusNodeEv","__ZN7WebCore12DOMSelection11setPositionEPNS_4NodeEiRi","__ZN7WebCore12DOMSelection8collapseEPNS_4NodeEiRi","__ZN7WebCore12DOMSelection10getRangeAtEiRi","__ZN7WebCore12DOMSelection15removeAllRangesEv","__ZNK7WebCore12DOMSelection10baseOffsetEv","__ZNK7WebCore12DOMSelection11isCollapsedEv","__ZN7WebCore12DOMSelectionC2EPKNS_9TreeScopeE","__ZNK7WebCore12DOMSelection10extentNodeEv","_memset","_memcpy","__ZNK7WebCore12DOMSelection8baseNodeEv","__ZN7WebCore16VisibleSelectionD2Ev","__ZNK7WebCore12DOMSelection10rangeCountEv","__ZN7WebCore12DOMSelection5emptyEv","__ZNK7WebCore12DOMSelection18isValidForPositionEPNS_4NodeE","__ZN7WebCore12DOMSelection17selectAllChildrenEPNS_4NodeERi","__ZN7WebCore12DOMSelection18deleteFromDocumentEv","__ZN7WebCore12DOMSelection14clearTreeScopeEv","__ZNK7WebCore12DOMSelection12containsNodeEPNS_4NodeEb","__ZNK7WebCore12DOMSelection12extentOffsetEv","__ZNK7WebCore12DOMSelection10anchorNodeEv","__ZN7WebCore12DOMSelection16setBaseAndExtentEPNS_4NodeEiS2_iRi","__ZN7WebCore12DOMSelection8toStringEv","__ZN7WebCore12DOMSelection8addRangeEPNS_5RangeE","_strlen","__ZN7WebCore12DOMSelection15collapseToStartERi","__ZNK7WebCore12DOMSelection11focusOffsetEv","__ZNK7WebCore12DOMSelection18shadowAdjustedNodeERKNS_8PositionE","__ZN7WebCore12DOMSelectionD0Ev","__ZNK7WebCore12DOMSelection4typeEv","__ZN7WebCore12DOMSelectionD1Ev","__ZN7WebCore12DOMSelection13collapseToEndERi"]

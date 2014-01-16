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
H_BASE = parentModule["_malloc"](88 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 88;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore22InsertLineBreakCommandC1ERNS_8DocumentE;
/* memory initializer */ allocate([10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var __ZN7WebCore9HTMLNames8tableTagE=env.__ZN7WebCore9HTMLNames8tableTagE|0;
  var __ZN7WebCore9HTMLNames5hrTagE=env.__ZN7WebCore9HTMLNames5hrTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore22InsertLineBreakCommandE=(H_BASE+16)|0;
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
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore22InsertLineBreakCommand7doApplyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 832 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 120 | 0;
 i12 = i2 + 136 | 0;
 i13 = i2 + 152 | 0;
 i14 = i2 + 168 | 0;
 i15 = i2 + 184 | 0;
 i16 = i2 + 192 | 0;
 i17 = i2 + 200 | 0;
 i18 = i2 + 208 | 0;
 i19 = i2 + 216 | 0;
 i20 = i2 + 224 | 0;
 i21 = i2 + 232 | 0;
 i22 = i2 + 248 | 0;
 i23 = i2 + 264 | 0;
 i24 = i2 + 328 | 0;
 i25 = i2 + 336 | 0;
 i26 = i2 + 352 | 0;
 i27 = i2 + 368 | 0;
 i28 = i2 + 376 | 0;
 i29 = i2 + 384 | 0;
 i30 = i2 + 392 | 0;
 i31 = i2 + 456 | 0;
 i32 = i2 + 472 | 0;
 i33 = i2 + 480 | 0;
 i34 = i2 + 544 | 0;
 i35 = i2 + 560 | 0;
 i36 = i2 + 568 | 0;
 i37 = i2 + 576 | 0;
 i38 = i2 + 584 | 0;
 i39 = i2 + 600 | 0;
 i40 = i2 + 616 | 0;
 i41 = i2 + 624 | 0;
 i42 = i2 + 632 | 0;
 i43 = i2 + 640 | 0;
 i44 = i2 + 656 | 0;
 i45 = i2 + 720 | 0;
 i46 = i2 + 736 | 0;
 i47 = i2 + 752 | 0;
 i48 = i2 + 816 | 0;
 i49 = i1 | 0;
 __ZN7WebCore20CompositeEditCommand15deleteSelectionEbbbbb(i49, 0, 1, 0, 1, 1);
 i50 = i1 | 0;
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i10, i1 + 72 | 0);
 i51 = i10 + 52 | 0;
 if ((HEAP32[i51 >> 2] | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i10);
  STACKTOP = i2;
  return;
 }
 i52 = HEAP32[i10 + 24 >> 2] | 0;
 i53 = (i52 | 0) == 0;
 do {
  if (i53) {
   i54 = 5;
  } else {
   i55 = i52 + 8 | 0;
   i56 = (HEAP32[i55 >> 2] | 0) + 1 | 0;
   HEAP32[i55 >> 2] = i56;
   if ((HEAP32[i52 + 12 >> 2] & 256 | 0) != 0) {
    i54 = 5;
    break;
   }
   i55 = i52 + 8 | 0;
   i57 = 0;
   i58 = i56;
   i59 = i55;
   i60 = i55 | 0;
   i54 = 11;
  }
 } while (0);
 do {
  if ((i54 | 0) == 5) {
   i55 = HEAP32[i10 + 36 >> 2] | 0;
   do {
    if ((i55 | 0) == 0) {
     i61 = 1;
    } else {
     i56 = HEAP32[i55 + 8 >> 2] | 0;
     i62 = (HEAP32[i55 + 12 >> 2] & 256 | 0) != 0;
     i63 = i55 + 8 | 0;
     HEAP32[i63 >> 2] = i56;
     if ((i56 | 0) >= 1) {
      i61 = i62;
      break;
     }
     if ((HEAP32[i63 + 8 >> 2] | 0) != 0) {
      i61 = i62;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i63 - 8 | 0);
     i61 = i62;
    }
   } while (0);
   if (i53) {
    i64 = i61;
    i54 = 14;
    break;
   }
   i55 = i52 + 8 | 0;
   i62 = i55 | 0;
   i57 = i61;
   i58 = HEAP32[i62 >> 2] | 0;
   i59 = i55;
   i60 = i62;
   i54 = 11;
  }
 } while (0);
 do {
  if ((i54 | 0) == 11) {
   i61 = i58 - 1 | 0;
   HEAP32[i60 >> 2] = i61;
   if ((i61 | 0) >= 1) {
    i64 = i57;
    i54 = 14;
    break;
   }
   if ((HEAP32[i59 + 8 >> 2] | 0) != 0) {
    i64 = i57;
    i54 = 14;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i59 - 8 | 0);
   if (i57) {
    break;
   }
   __ZN7WebCore16VisibleSelectionD2Ev(i10);
   STACKTOP = i2;
   return;
  }
 } while (0);
 do {
  if ((i54 | 0) == 14) {
   if (i64) {
    break;
   }
   __ZN7WebCore16VisibleSelectionD2Ev(i10);
   STACKTOP = i2;
   return;
  }
 } while (0);
 if ((HEAP32[i51 >> 2] | 0) == 2) {
  i65 = 1;
 } else {
  i65 = HEAP32[i10 + 48 >> 2] | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i11, i10 + 24 | 0, i65);
 i65 = i11 | 0;
 i51 = HEAP32[i65 >> 2] | 0;
 if ((i51 | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i10);
  STACKTOP = i2;
  return;
 }
 i64 = i12 | 0;
 HEAP32[i64 >> 2] = i51;
 i57 = i51 + 8 | 0;
 HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
 i57 = i12 + 4 | 0;
 HEAP32[i57 >> 2] = HEAP32[i11 + 4 >> 2];
 i51 = HEAP32[i11 + 8 >> 2] | 0;
 i59 = i12 + 8 | 0;
 i60 = i59;
 i58 = HEAP32[i60 >> 2] & -8 | i51 & 7;
 HEAP32[i60 >> 2] = i58;
 HEAP8[i59] = i58 & 255 & -9 | i51 & 8;
 __ZN7WebCore20CompositeEditCommand38positionAvoidingSpecialElementBoundaryERKNS_8PositionE(i13, i49, i12);
 i51 = i13 | 0;
 i58 = HEAP32[i51 >> 2] | 0;
 HEAP32[i51 >> 2] = 0;
 i61 = HEAP32[i64 >> 2] | 0;
 HEAP32[i64 >> 2] = i58;
 do {
  if ((i61 | 0) != 0) {
   i58 = i61 + 8 | 0;
   i52 = i58 | 0;
   i53 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
   HEAP32[i52 >> 2] = i53;
   if ((i53 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
  }
 } while (0);
 HEAP32[i57 >> 2] = HEAP32[i13 + 4 >> 2];
 i61 = HEAP32[i13 + 8 >> 2] | 0;
 i13 = HEAP32[i60 >> 2] & -8 | i61 & 7;
 HEAP32[i60 >> 2] = i13;
 HEAP8[i59] = i13 & 255 & -9 | i61 & 8;
 i61 = HEAP32[i51 >> 2] | 0;
 do {
  if ((i61 | 0) != 0) {
   i51 = i61 + 8 | 0;
   i13 = i51 | 0;
   i58 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i58;
   if ((i58 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore20CompositeEditCommand22positionOutsideTabSpanERKNS_8PositionE(i14, i49, i12);
 i61 = i14 | 0;
 i51 = HEAP32[i61 >> 2] | 0;
 HEAP32[i61 >> 2] = 0;
 i58 = HEAP32[i64 >> 2] | 0;
 HEAP32[i64 >> 2] = i51;
 do {
  if ((i58 | 0) != 0) {
   i51 = i58 + 8 | 0;
   i13 = i51 | 0;
   i53 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i53;
   if ((i53 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
  }
 } while (0);
 HEAP32[i57 >> 2] = HEAP32[i14 + 4 >> 2];
 i58 = HEAP32[i14 + 8 >> 2] | 0;
 i14 = HEAP32[i60 >> 2] & -8 | i58 & 7;
 HEAP32[i60 >> 2] = i14;
 HEAP8[i59] = i14 & 255 & -9 | i58 & 8;
 i58 = HEAP32[i61 >> 2] | 0;
 do {
  if ((i58 | 0) != 0) {
   i61 = i58 + 8 | 0;
   i14 = i61 | 0;
   i51 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i51;
   if ((i51 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i61 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i61 - 8 | 0);
  }
 } while (0);
 i58 = __ZN7WebCore22InsertLineBreakCommand21shouldUseBreakElementERKNS_8PositionE(0, i12) | 0;
 i61 = i1 + 8 | 0;
 i51 = HEAP32[i61 >> 2] | 0;
 do {
  if (i58) {
   __ZN7WebCore18createBreakElementERNS_8DocumentE(i15, i51);
   i14 = i15 | 0;
   i53 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   i66 = i53 | 0;
  } else {
   __ZN3WTF6StringC1EPKc(i17, H_BASE + 8 | 0);
   __ZN7WebCore8Document14createTextNodeERKN3WTF6StringE(i16, i51, i17);
   i53 = i16 | 0;
   i14 = HEAP32[i53 >> 2] | 0;
   HEAP32[i53 >> 2] = 0;
   i53 = i14 | 0;
   i14 = HEAP32[i17 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i66 = i53;
    break;
   }
   i13 = i14 | 0;
   i52 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i52 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    i66 = i53;
    break;
   } else {
    HEAP32[i13 >> 2] = i52;
    i66 = i53;
    break;
   }
  }
 } while (0);
 do {
  if (__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i11, 1) | 0) {
   if (__ZN7WebCore32lineBreakExistsAtVisiblePositionERKNS_15VisiblePositionE(i11) | 0) {
    i54 = 79;
    break;
   }
   i17 = HEAP32[i64 >> 2] | 0;
   i16 = HEAP32[i17 + 12 >> 2] | 0;
   do {
    if ((i16 & 4 | 0) == 0) {
     i54 = 46;
    } else {
     i51 = HEAP32[i17 + 44 >> 2] | 0;
     i15 = HEAP32[__ZN7WebCore9HTMLNames5hrTagE >> 2] | 0;
     if ((i51 | 0) == (i15 | 0)) {
      i67 = 0;
      break;
     }
     if ((HEAP32[i51 + 12 >> 2] | 0) != (HEAP32[i15 + 12 >> 2] | 0)) {
      i54 = 46;
      break;
     }
     if ((HEAP32[i51 + 16 >> 2] | 0) == (HEAP32[i15 + 16 >> 2] | 0)) {
      i67 = 0;
     } else {
      i54 = 46;
     }
    }
   } while (0);
   do {
    if ((i54 | 0) == 46) {
     if ((i16 & 16 | 0) == 0) {
      i67 = 1;
      break;
     }
     i67 = (HEAP32[(HEAP32[i17 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0);
    }
   } while (0);
   i17 = i18 | 0;
   HEAP32[i17 >> 2] = i66;
   i16 = (i66 | 0) == 0;
   if (!i16) {
    i15 = i66 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   }
   __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i49, i18, i12);
   i15 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i17 = i15 + 8 | 0;
     i51 = i17 | 0;
     i58 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
     HEAP32[i51 >> 2] = i58;
     if ((i58 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
    }
   } while (0);
   do {
    if (i67) {
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i66 >> 2] | 0) + 84 >> 2] & 3](i19, i66, 0);
     i15 = i20 | 0;
     HEAP32[i15 >> 2] = i66;
     if (!i16) {
      i17 = i66 + 8 | 0;
      HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i49, i19, i20, 1);
     i17 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i17 | 0) != 0) {
       i15 = i17 + 8 | 0;
       i58 = i15 | 0;
       i51 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
       HEAP32[i58 >> 2] = i51;
       if ((i51 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
      }
     } while (0);
     i17 = HEAP32[i19 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     i15 = i17 + 8 | 0;
     i17 = i15 | 0;
     i51 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i51;
     if ((i51 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    }
   } while (0);
   i15 = i9 | 0;
   HEAP32[i15 >> 2] = i66;
   if (!i16) {
    i51 = i66 + 8 | 0;
    HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i22, i9, 1);
   i51 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i51 | 0) != 0) {
     i15 = i51 + 8 | 0;
     i17 = i15 | 0;
     i58 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i58;
     if ((i58 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i21, i22, 1);
   i51 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i51 | 0) != 0) {
     i16 = i51 + 8 | 0;
     i15 = i16 | 0;
     i58 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i58;
     if ((i58 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i23, i21, (HEAP8[i1 + 128 | 0] & 2) != 0);
   __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i50, i23);
   __ZN7WebCore16VisibleSelectionD2Ev(i23);
   i51 = HEAP32[i21 >> 2] | 0;
   if ((i51 | 0) == 0) {
    break;
   }
   i16 = i51 + 8 | 0;
   i51 = i16 | 0;
   i58 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
   HEAP32[i51 >> 2] = i58;
   if ((i58 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
  } else {
   i54 = 79;
  }
 } while (0);
 L107 : do {
  if ((i54 | 0) == 79) {
   do {
    if ((HEAP8[i59] & 8) == 0) {
     i21 = HEAP32[i60 >> 2] & 7;
     if (!((i21 | 0) == 2 | (i21 | 0) == 4)) {
      i54 = 81;
      break;
     }
     i68 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i12) | 0;
    } else {
     i54 = 81;
    }
   } while (0);
   if ((i54 | 0) == 81) {
    i68 = HEAP32[i57 >> 2] | 0;
   }
   if ((i68 | 0) <= (__ZN7WebCore14caretMinOffsetEPKNS_4NodeE(HEAP32[i64 >> 2] | 0) | 0)) {
    i21 = i24 | 0;
    HEAP32[i21 >> 2] = i66;
    i23 = (i66 | 0) == 0;
    if (!i23) {
     i22 = i66 + 8 | 0;
     HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
    }
    __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i49, i24, i12);
    i22 = HEAP32[i21 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i21 = i22 + 8 | 0;
      i9 = i21 | 0;
      i19 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      HEAP32[i9 >> 2] = i19;
      if ((i19 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
     }
    } while (0);
    i22 = i6 | 0;
    HEAP32[i22 >> 2] = i66;
    if (!i23) {
     i21 = i66 + 8 | 0;
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
    }
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i26, i6, 1);
    i21 = HEAP32[i22 >> 2] | 0;
    do {
     if ((i21 | 0) != 0) {
      i22 = i21 + 8 | 0;
      i19 = i22 | 0;
      i9 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
      HEAP32[i19 >> 2] = i9;
      if ((i9 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i25, i26, 1);
    i21 = __ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i25, 1) | 0;
    i22 = HEAP32[i25 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i9 = i22 + 8 | 0;
      i19 = i9 | 0;
      i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
      HEAP32[i19 >> 2] = i20;
      if ((i20 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
     }
    } while (0);
    i22 = HEAP32[i26 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i9 = i22 + 8 | 0;
      i20 = i9 | 0;
      i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
      HEAP32[i20 >> 2] = i19;
      if ((i19 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
     }
    } while (0);
    do {
     if (!i21) {
      FUNCTION_TABLE_viii[HEAP32[(HEAP32[i66 >> 2] | 0) + 84 >> 2] & 3](i28, i66, 0);
      i22 = i28 | 0;
      i9 = HEAP32[i22 >> 2] | 0;
      i19 = i27 | 0;
      HEAP32[i19 >> 2] = i9;
      if ((i9 | 0) != 0) {
       i20 = i9 + 8 | 0;
       HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
      }
      i20 = i29 | 0;
      HEAP32[i20 >> 2] = i66;
      if (!i23) {
       i9 = i66 + 8 | 0;
       HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
      }
      __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i49, i27, i29, 1);
      i9 = HEAP32[i20 >> 2] | 0;
      do {
       if ((i9 | 0) != 0) {
        i20 = i9 + 8 | 0;
        i67 = i20 | 0;
        i18 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
        HEAP32[i67 >> 2] = i18;
        if ((i18 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
       }
      } while (0);
      i9 = HEAP32[i19 >> 2] | 0;
      do {
       if ((i9 | 0) != 0) {
        i20 = i9 + 8 | 0;
        i18 = i20 | 0;
        i67 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
        HEAP32[i18 >> 2] = i67;
        if ((i67 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
       }
      } while (0);
      i9 = HEAP32[i22 >> 2] | 0;
      if ((i9 | 0) == 0) {
       break;
      }
      i19 = i9 + 8 | 0;
      i9 = i19 | 0;
      i20 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      HEAP32[i9 >> 2] = i20;
      if ((i20 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
     }
    } while (0);
    i23 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i66) | 0;
    i21 = i5 | 0;
    HEAP32[i21 >> 2] = i23;
    if ((i23 | 0) != 0) {
     i19 = i23 + 8 | 0;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
    }
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i31, i5, (__ZNK7WebCore4Node9nodeIndexEv(i66) | 0) + 1 | 0, 0);
    i19 = HEAP32[i21 >> 2] | 0;
    do {
     if ((i19 | 0) != 0) {
      i21 = i19 + 8 | 0;
      i23 = i21 | 0;
      i20 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
      HEAP32[i23 >> 2] = i20;
      if ((i20 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb(i30, i31, 1, (HEAP8[i1 + 128 | 0] & 2) != 0);
    __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i50, i30);
    __ZN7WebCore16VisibleSelectionD2Ev(i30);
    i19 = HEAP32[i31 >> 2] | 0;
    if ((i19 | 0) == 0) {
     break;
    }
    i21 = i19 + 8 | 0;
    i19 = i21 | 0;
    i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
    HEAP32[i19 >> 2] = i20;
    if ((i20 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
    break;
   }
   do {
    if ((HEAP8[i59] & 8) == 0) {
     i21 = HEAP32[i60 >> 2] & 7;
     if (!((i21 | 0) == 2 | (i21 | 0) == 4)) {
      i54 = 133;
      break;
     }
     i69 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i12) | 0;
    } else {
     i54 = 133;
    }
   } while (0);
   if ((i54 | 0) == 133) {
    i69 = HEAP32[i57 >> 2] | 0;
   }
   do {
    if ((i69 | 0) < (__ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(HEAP32[i64 >> 2] | 0) | 0)) {
     i21 = HEAP32[i64 >> 2] | 0;
     i20 = i21 + 12 | 0;
     if ((HEAP32[i20 >> 2] & 1 | 0) == 0) {
      break;
     }
     i19 = i21;
     i23 = i35 | 0;
     HEAP32[i23 >> 2] = i19;
     i9 = (i21 | 0) == 0;
     if (!i9) {
      i67 = i21 + 8 | 0;
      HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 1;
     }
     do {
      if ((HEAP8[i59] & 8) == 0) {
       i67 = HEAP32[i60 >> 2] & 7;
       if (!((i67 | 0) == 2 | (i67 | 0) == 4)) {
        i54 = 157;
        break;
       }
       i70 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i12) | 0;
      } else {
       i54 = 157;
      }
     } while (0);
     if ((i54 | 0) == 157) {
      i70 = HEAP32[i57 >> 2] | 0;
     }
     __ZN7WebCore20CompositeEditCommand13splitTextNodeEN3WTF10PassRefPtrINS_4TextEEEj(i49, i35, i70);
     i22 = HEAP32[i23 >> 2] | 0;
     do {
      if ((i22 | 0) != 0) {
       i67 = i22 + 8 | 0;
       i18 = i67 | 0;
       i11 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
       HEAP32[i18 >> 2] = i11;
       if ((i11 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i67 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i67 - 8 | 0);
      }
     } while (0);
     i22 = i36 | 0;
     HEAP32[i22 >> 2] = i66;
     if ((i66 | 0) != 0) {
      i23 = i66 + 8 | 0;
      HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
     }
     i23 = i37 | 0;
     HEAP32[i23 >> 2] = i21;
     if (!i9) {
      i67 = i21 + 8 | 0;
      HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i49, i36, i37, 1);
     i67 = HEAP32[i23 >> 2] | 0;
     do {
      if ((i67 | 0) != 0) {
       i23 = i67 + 8 | 0;
       i11 = i23 | 0;
       i18 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
       HEAP32[i11 >> 2] = i18;
       if ((i18 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
      }
     } while (0);
     i67 = HEAP32[i22 >> 2] | 0;
     do {
      if ((i67 | 0) != 0) {
       i23 = i67 + 8 | 0;
       i18 = i23 | 0;
       i11 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
       HEAP32[i18 >> 2] = i11;
       if ((i11 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i38, i21);
     __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i61 >> 2] | 0);
     do {
      if (!(__ZNK7WebCore8Position19isRenderedCharacterEv(i38) | 0)) {
       i67 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i21) | 0;
       i22 = i3 | 0;
       HEAP32[i22 >> 2] = i67;
       if ((i67 | 0) != 0) {
        i23 = i67 + 8 | 0;
        HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
       }
       __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i39, i3, __ZNK7WebCore4Node9nodeIndexEv(i21) | 0, 0);
       i23 = HEAP32[i22 >> 2] | 0;
       do {
        if ((i23 | 0) != 0) {
         i22 = i23 + 8 | 0;
         i67 = i22 | 0;
         i11 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
         HEAP32[i67 >> 2] = i11;
         if ((i11 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
        }
       } while (0);
       __ZN7WebCore20CompositeEditCommand33deleteInsignificantTextDownstreamERKNS_8PositionE(i49, i38);
       do {
        if ((HEAP32[i20 >> 2] & 256 | 0) == 0) {
         i23 = HEAP32[i61 >> 2] | 0;
         __ZN7WebCore8Document14createTextNodeERKN3WTF6StringE(i41, i23, __ZN7WebCore22nonBreakingSpaceStringEv() | 0);
         i23 = i41 | 0;
         i22 = HEAP32[i23 >> 2] | 0;
         HEAP32[i23 >> 2] = 0;
         i23 = i22 | 0;
         i11 = i42 | 0;
         HEAP32[i11 >> 2] = i23;
         i67 = (i22 | 0) == 0;
         if (!i67) {
          i18 = i22 + 8 | 0;
          HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
         }
         __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i49, i42, i39);
         i18 = HEAP32[i11 >> 2] | 0;
         do {
          if ((i18 | 0) != 0) {
           i11 = i18 + 8 | 0;
           i16 = i11 | 0;
           i58 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
           HEAP32[i16 >> 2] = i58;
           if ((i58 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
          }
         } while (0);
         __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i43, i23);
         i18 = i43 | 0;
         i11 = HEAP32[i18 >> 2] | 0;
         HEAP32[i18 >> 2] = 0;
         i58 = i38 | 0;
         i16 = HEAP32[i58 >> 2] | 0;
         HEAP32[i58 >> 2] = i11;
         do {
          if ((i16 | 0) != 0) {
           i11 = i16 + 8 | 0;
           i58 = i11 | 0;
           i51 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
           HEAP32[i58 >> 2] = i51;
           if ((i51 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
          }
         } while (0);
         HEAP32[i38 + 4 >> 2] = HEAP32[i43 + 4 >> 2];
         i16 = HEAP32[i43 + 8 >> 2] | 0;
         i23 = i38 + 8 | 0;
         i11 = i23;
         i51 = HEAP32[i11 >> 2] & -8 | i16 & 7;
         HEAP32[i11 >> 2] = i51;
         HEAP8[i23] = i51 & 255 & -9 | i16 & 8;
         i16 = HEAP32[i18 >> 2] | 0;
         do {
          if ((i16 | 0) != 0) {
           i51 = i16 + 8 | 0;
           i23 = i51 | 0;
           i11 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
           HEAP32[i23 >> 2] = i11;
           if ((i11 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
          }
         } while (0);
         if (i67) {
          break;
         }
         i16 = i22 + 8 | 0;
         i18 = i16 | 0;
         i51 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
         HEAP32[i18 >> 2] = i51;
         if ((i51 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
        } else {
         i16 = i40 | 0;
         HEAP32[i16 >> 2] = i19;
         if (!i9) {
          i51 = i21 + 8 | 0;
          HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
         }
         __ZN7WebCore20CompositeEditCommand18insertTextIntoNodeEN3WTF10PassRefPtrINS_4TextEEEjRKNS1_6StringE(i49, i40, 0, __ZN7WebCore22nonBreakingSpaceStringEv() | 0);
         i51 = HEAP32[i16 >> 2] | 0;
         if ((i51 | 0) == 0) {
          break;
         }
         i16 = i51 + 8 | 0;
         i51 = i16 | 0;
         i18 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
         HEAP32[i51 >> 2] = i18;
         if ((i18 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
        }
       } while (0);
       i16 = HEAP32[i39 >> 2] | 0;
       if ((i16 | 0) == 0) {
        break;
       }
       i18 = i16 + 8 | 0;
       i16 = i18 | 0;
       i51 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
       HEAP32[i16 >> 2] = i51;
       if ((i51 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb(i44, i38, 1, (HEAP8[i1 + 128 | 0] & 2) != 0);
     __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i50, i44);
     __ZN7WebCore16VisibleSelectionD2Ev(i44);
     i21 = HEAP32[i38 >> 2] | 0;
     if ((i21 | 0) == 0) {
      break L107;
     }
     i9 = i21 + 8 | 0;
     i21 = i9 | 0;
     i19 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break L107;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break L107;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
     break L107;
    }
   } while (0);
   i9 = i32 | 0;
   HEAP32[i9 >> 2] = i66;
   if ((i66 | 0) != 0) {
    i19 = i66 + 8 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   }
   __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i49, i32, i12);
   i19 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i9 = i19 + 8 | 0;
     i21 = i9 | 0;
     i20 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i20;
     if ((i20 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   i19 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i66) | 0;
   i9 = i4 | 0;
   HEAP32[i9 >> 2] = i19;
   if ((i19 | 0) != 0) {
    i20 = i19 + 8 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i34, i4, (__ZNK7WebCore4Node9nodeIndexEv(i66) | 0) + 1 | 0, 0);
   i20 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i9 = i20 + 8 | 0;
     i19 = i9 | 0;
     i21 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     HEAP32[i19 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb(i33, i34, 1, (HEAP8[i1 + 128 | 0] & 2) != 0);
   __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i50, i33);
   __ZN7WebCore16VisibleSelectionD2Ev(i33);
   i20 = HEAP32[i34 >> 2] | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   i9 = i20 + 8 | 0;
   i20 = i9 | 0;
   i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   HEAP32[i20 >> 2] = i21;
   if ((i21 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i34 = HEAP32[(HEAP32[(__ZN7WebCore11EditCommand5frameEv(i50) | 0) + 468 >> 2] | 0) + 116 >> 2] | 0;
 do {
  if ((i34 | 0) == 0) {
   __ZN7WebCore20CompositeEditCommand19rebalanceWhitespaceEv(i49);
  } else {
   i33 = i34 | 0;
   HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
   if (__ZNK7WebCore12EditingStyle7isEmptyEv(i34) | 0) {
    __ZN7WebCore20CompositeEditCommand19rebalanceWhitespaceEv(i49);
   } else {
    do {
     if ((i66 | 0) == 0) {
      HEAP32[i45 >> 2] = 0;
      HEAP32[i45 + 4 >> 2] = 0;
      i4 = i45 + 8 | 0;
      i12 = i4;
      i32 = HEAP32[i12 >> 2] | 0;
      HEAP32[i12 >> 2] = i32 & -8;
      HEAP8[i4] = i32 & 255 & -16;
      HEAP32[i46 >> 2] = 0;
      HEAP32[i46 + 4 >> 2] = 0;
      i32 = i46 + 8 | 0;
      i4 = i32;
      i12 = HEAP32[i4 >> 2] | 0;
      HEAP32[i4 >> 2] = i12 & -8;
      HEAP8[i32] = i12 & 255 & -16;
     } else {
      i12 = i66;
      do {
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 132 >> 2] & 31](i66) | 0) {
        __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i45, i66);
       } else {
        i32 = i7 | 0;
        HEAP32[i32 >> 2] = i66;
        i4 = i66 + 8 | 0;
        HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
        __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i45, i7, 1);
        i4 = HEAP32[i32 >> 2] | 0;
        if ((i4 | 0) == 0) {
         break;
        }
        i32 = i4 + 8 | 0;
        i4 = i32 | 0;
        i38 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
        HEAP32[i4 >> 2] = i38;
        if ((i38 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
       }
      } while (0);
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 132 >> 2] & 31](i66) | 0) {
       __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i46, i66);
       break;
      }
      i32 = i8 | 0;
      HEAP32[i32 >> 2] = i66;
      i38 = i66 + 8 | 0;
      HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i46, i8, 2);
      i38 = HEAP32[i32 >> 2] | 0;
      if ((i38 | 0) == 0) {
       break;
      }
      i32 = i38 + 8 | 0;
      i38 = i32 | 0;
      i4 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
      HEAP32[i38 >> 2] = i4;
      if ((i4 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore20CompositeEditCommand10applyStyleEPKNS_12EditingStyleERKNS_8PositionES6_NS_10EditActionE(i49, i34, i45, i46, 14);
    i32 = HEAP32[i46 >> 2] | 0;
    do {
     if ((i32 | 0) != 0) {
      i4 = i32 + 8 | 0;
      i38 = i4 | 0;
      i44 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
      HEAP32[i38 >> 2] = i44;
      if ((i44 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
     }
    } while (0);
    i32 = HEAP32[i45 >> 2] | 0;
    do {
     if ((i32 | 0) != 0) {
      i4 = i32 + 8 | 0;
      i44 = i4 | 0;
      i38 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
      HEAP32[i44 >> 2] = i38;
      if ((i38 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
     }
    } while (0);
    if ((HEAP32[i1 + 124 >> 2] | 0) == 2) {
     i71 = 0;
    } else {
     i71 = HEAP32[i1 + 120 >> 2] | 0;
    }
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i48, i1 + 108 | 0, i71);
    __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i47, i48, 0);
    __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i50, i47);
    __ZN7WebCore16VisibleSelectionD2Ev(i47);
    i32 = HEAP32[i48 >> 2] | 0;
    do {
     if ((i32 | 0) != 0) {
      i4 = i32 + 8 | 0;
      i38 = i4 | 0;
      i44 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
      HEAP32[i38 >> 2] = i44;
      if ((i44 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore20CompositeEditCommand19rebalanceWhitespaceEv(i49);
   }
   i32 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
   if ((i32 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i34);
    __ZN3WTF8fastFreeEPv(i34);
    break;
   } else {
    HEAP32[i33 >> 2] = i32;
    break;
   }
  }
 } while (0);
 do {
  if ((i66 | 0) != 0) {
   i34 = i66 + 8 | 0;
   i49 = i34 | 0;
   i48 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
   HEAP32[i49 >> 2] = i48;
   if ((i48 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
  }
 } while (0);
 i66 = HEAP32[i64 >> 2] | 0;
 do {
  if ((i66 | 0) != 0) {
   i64 = i66 + 8 | 0;
   i34 = i64 | 0;
   i48 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
   HEAP32[i34 >> 2] = i48;
   if ((i48 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i64 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i64 - 8 | 0);
  }
 } while (0);
 i66 = HEAP32[i65 >> 2] | 0;
 if ((i66 | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i10);
  STACKTOP = i2;
  return;
 }
 i65 = i66 + 8 | 0;
 i66 = i65 | 0;
 i64 = (HEAP32[i66 >> 2] | 0) - 1 | 0;
 HEAP32[i66 >> 2] = i64;
 if ((i64 | 0) >= 1) {
  __ZN7WebCore16VisibleSelectionD2Ev(i10);
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i65 + 8 >> 2] | 0) != 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i10);
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i65 - 8 | 0);
 __ZN7WebCore16VisibleSelectionD2Ev(i10);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22InsertLineBreakCommand24insertNodeBeforePositionEPNS_4NodeERKNS_8PositionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i3 | 0;
 i3 = __ZN7WebCore35deprecatedEnclosingBlockFlowElementEPNS_4NodeE(HEAP32[i9 >> 2] | 0) | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i1 | 0;
 if ((i3 | 0) == (i10 | 0)) {
  i1 = i5 | 0;
  HEAP32[i1 >> 2] = i2;
  if ((i2 | 0) != 0) {
   i12 = i2 + 8 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
  }
  i12 = i6 | 0;
  HEAP32[i12 >> 2] = i3;
  if ((i3 | 0) != 0) {
   i13 = i3 + 8 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
  }
  __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i11, i5, i6);
  i6 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i12 = i6 + 8 | 0;
    i5 = i12 | 0;
    i13 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
    HEAP32[i5 >> 2] = i13;
    if ((i13 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
   }
  } while (0);
  i6 = HEAP32[i1 >> 2] | 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i1 = i6 + 8 | 0;
  i6 = i1 | 0;
  i12 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  HEAP32[i6 >> 2] = i12;
  if ((i12 | 0) >= 1) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  STACKTOP = i4;
  return;
 } else {
  i1 = i7 | 0;
  HEAP32[i1 >> 2] = i2;
  if ((i2 | 0) == 0) {
   i14 = i10;
  } else {
   i10 = i2 + 8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i14 = HEAP32[i9 >> 2] | 0;
  }
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = i14;
  if ((i14 | 0) != 0) {
   i10 = i14 + 8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  }
  __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i11, i7, i8, 1);
  i8 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i9 = i8 + 8 | 0;
    i7 = i9 | 0;
    i11 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    HEAP32[i7 >> 2] = i11;
    if ((i11 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
   }
  } while (0);
  i8 = HEAP32[i1 >> 2] | 0;
  if ((i8 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i1 = i8 + 8 | 0;
  i8 = i1 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  HEAP32[i8 >> 2] = i9;
  if ((i9 | 0) >= 1) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore22InsertLineBreakCommand23insertNodeAfterPositionEPNS_4NodeERKNS_8PositionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i3 | 0;
 i3 = __ZN7WebCore35deprecatedEnclosingBlockFlowElementEPNS_4NodeE(HEAP32[i9 >> 2] | 0) | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i1 | 0;
 if ((i3 | 0) == (i10 | 0)) {
  i1 = i5 | 0;
  HEAP32[i1 >> 2] = i2;
  if ((i2 | 0) != 0) {
   i12 = i2 + 8 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
  }
  i12 = i6 | 0;
  HEAP32[i12 >> 2] = i3;
  if ((i3 | 0) != 0) {
   i13 = i3 + 8 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
  }
  __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i11, i5, i6);
  i6 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i12 = i6 + 8 | 0;
    i5 = i12 | 0;
    i13 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
    HEAP32[i5 >> 2] = i13;
    if ((i13 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
   }
  } while (0);
  i6 = HEAP32[i1 >> 2] | 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i1 = i6 + 8 | 0;
  i6 = i1 | 0;
  i12 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  HEAP32[i6 >> 2] = i12;
  if ((i12 | 0) >= 1) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  STACKTOP = i4;
  return;
 } else {
  i1 = i7 | 0;
  HEAP32[i1 >> 2] = i2;
  if ((i2 | 0) == 0) {
   i14 = i10;
  } else {
   i10 = i2 + 8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i14 = HEAP32[i9 >> 2] | 0;
  }
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = i14;
  if ((i14 | 0) != 0) {
   i10 = i14 + 8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  }
  __ZN7WebCore20CompositeEditCommand15insertNodeAfterEN3WTF10PassRefPtrINS_4NodeEEES4_(i11, i7, i8);
  i8 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i9 = i8 + 8 | 0;
    i7 = i9 | 0;
    i11 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    HEAP32[i7 >> 2] = i11;
    if ((i11 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
   }
  } while (0);
  i8 = HEAP32[i1 >> 2] | 0;
  if ((i8 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i1 = i8 + 8 | 0;
  i8 = i1 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  HEAP32[i8 >> 2] = i9;
  if ((i9 | 0) >= 1) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore16VisibleSelectionC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i4 = i2 + 8 | 0;
 i3 = i1 + 8 | 0;
 i5 = i3;
 i6 = HEAP32[i5 >> 2] & -8 | HEAP32[i4 >> 2] & 7;
 HEAP32[i5 >> 2] = i6;
 HEAP8[i3] = i6 & 255 & -9 | HEAP8[i4] & 8;
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i6 = i4 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i6 = i2 + 20 | 0;
 i4 = i1 + 20 | 0;
 i3 = i4;
 i5 = HEAP32[i3 >> 2] & -8 | HEAP32[i6 >> 2] & 7;
 HEAP32[i3 >> 2] = i5;
 HEAP8[i4] = i5 & 255 & -9 | HEAP8[i6] & 8;
 i6 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i5 = i6 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 i5 = i2 + 32 | 0;
 i6 = i1 + 32 | 0;
 i4 = i6;
 i3 = HEAP32[i4 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i4 >> 2] = i3;
 HEAP8[i6] = i3 & 255 & -9 | HEAP8[i5] & 8;
 i5 = HEAP32[i2 + 36 >> 2] | 0;
 HEAP32[i1 + 36 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i3 = i5 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 i3 = i2 + 44 | 0;
 i5 = i1 + 44 | 0;
 i6 = i5;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i3 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | HEAP8[i3] & 8;
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
 i3 = i2 + 56 | 0;
 i2 = i1 + 56 | 0;
 i1 = HEAP8[i2] & -2 | HEAP8[i3] & 1;
 HEAP8[i2] = i1;
 HEAP8[i2] = i1 & -3 | HEAP8[i3] & 2;
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
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 31](i2) | 0) {
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 168 >> 2] & 31](i2) | 0;
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
function __ZN7WebCore22InsertLineBreakCommand21shouldUseBreakElementERKNS_8PositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i1 | 0;
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i3, i2);
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = (HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0;
 i4 = i2 + 32 | 0;
 if (i3) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i6 = 0;
 } else {
  if (i3) {
   i7 = i4 | 0;
  } else {
   i7 = HEAP32[i4 >> 2] | 0;
  }
  i4 = HEAP32[i7 >> 2] | 0;
  if ((HEAP32[i4 + 20 >> 2] & 768 | 0) == 256) {
   i8 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i8 = HEAP32[i4 + 36 >> 2] | 0;
  }
  i4 = HEAP32[i8 + 44 >> 2] & 7;
  i6 = (i4 | 0) == 0 | (i4 | 0) == 4;
 }
 if ((i2 | 0) == 0) {
  STACKTOP = i1;
  return i6 | 0;
 }
 i4 = i2 + 8 | 0;
 i2 = i4 | 0;
 i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i8;
 if ((i8 | 0) >= 1) {
  STACKTOP = i1;
  return i6 | 0;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i1;
  return i6 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i1;
 return i6 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_viii + 2;
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
function viii___ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i1 | 0, i2 | 0, i3 | 0);
}
function viiii___ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function vii___ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb(i1 | 0, i2 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function ii___ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv(i1 | 0) | 0;
}
function __ZN7WebCore22InsertLineBreakCommandC2ERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 24;
 return;
}
function __ZN7WebCore22InsertLineBreakCommandC1ERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 24;
 return;
}
function ii___ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv(i1 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function ii___ZNK7WebCore20CompositeEditCommand15isTypingCommandEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand15isTypingCommandEv(i1 | 0) | 0;
}
function __ZN7WebCore22InsertLineBreakCommandD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore20CompositeEditCommandD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
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
function __ZN7WebCore22InsertLineBreakCommandD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore20CompositeEditCommandD2Ev(i1 | 0);
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore22InsertLineBreakCommand20preservesTypingStyleEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore20CompositeEditCommand18isDictationCommandEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b6(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(6);
}
function __ZNK7WebCore11EditCommand24isEditCommandCompositionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function __ZNK7WebCore11EditCommand19isSimpleEditCommandEv(i1) {
 i1 = i1 | 0;
 return 0;
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore22InsertLineBreakCommandD1Ev,b0,__ZN7WebCore22InsertLineBreakCommandD0Ev,b0,__ZN7WebCore22InsertLineBreakCommand7doApplyEv,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore22InsertLineBreakCommandC2ERNS_8DocumentE,b1,vii___ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb__wrapper,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2,ii___ZNK7WebCore11EditCommand13editingActionEv__wrapper,b2,ii___ZNK7WebCore20CompositeEditCommand15isTypingCommandEv__wrapper,b2,ii___ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv__wrapper,b2,ii___ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv__wrapper,b2,__ZNK7WebCore22InsertLineBreakCommand20preservesTypingStyleEv,b2,__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv,b2,__ZNK7WebCore11EditCommand24isEditCommandCompositionEv,b2,__ZNK7WebCore11EditCommand19isSimpleEditCommandEv,b2,__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv,b2,__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,viii___ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE__wrapper,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6,viiii___ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj__wrapper,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames8tableTagE": __ZN7WebCore9HTMLNames8tableTagE, "__ZN7WebCore9HTMLNames5hrTagE": __ZN7WebCore9HTMLNames5hrTagE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore22InsertLineBreakCommandC2ERNS_8DocumentE","__ZN7WebCore22InsertLineBreakCommandD1Ev","_strlen","__ZNK7WebCore22InsertLineBreakCommand20preservesTypingStyleEv","__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv","__ZN7WebCore22InsertLineBreakCommandD0Ev","__ZN7WebCore22InsertLineBreakCommand21shouldUseBreakElementERKNS_8PositionE","__ZN7WebCore16VisibleSelectionD2Ev","__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv","__ZN7WebCore22InsertLineBreakCommand7doApplyEv","_memset","__ZN7WebCore16VisibleSelectionC2ERKS0_","__ZNK7WebCore11EditCommand24isEditCommandCompositionEv","__ZNK7WebCore11EditCommand19isSimpleEditCommandEv","__ZN7WebCore22InsertLineBreakCommand23insertNodeAfterPositionEPNS_4NodeERKNS_8PositionE","__ZN7WebCore22InsertLineBreakCommand24insertNodeBeforePositionEPNS_4NodeERKNS_8PositionE","_memcpy","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZN7WebCore18lastPositionInNodeEPNS_4NodeE","__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv"]

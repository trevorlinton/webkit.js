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
H_BASE = parentModule["_malloc"](80 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 80;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore22BreakBlockquoteCommandC1ERNS_8DocumentE;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames9startAttrE=env.__ZN7WebCore9HTMLNames9startAttrE|0;
  var __ZN7WebCore9HTMLNames5liTagE=env.__ZN7WebCore9HTMLNames5liTagE|0;
  var __ZN7WebCore9HTMLNames5olTagE=env.__ZN7WebCore9HTMLNames5olTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore22BreakBlockquoteCommandE=(H_BASE+8)|0;
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
function __ZN7WebCore22BreakBlockquoteCommand7doApplyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 608 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 48 | 0;
 i9 = i2 + 64 | 0;
 i10 = i2 + 80 | 0;
 i11 = i2 + 88 | 0;
 i12 = i2 + 96 | 0;
 i13 = i2 + 104 | 0;
 i14 = i2 + 168 | 0;
 i15 = i2 + 184 | 0;
 i16 = i2 + 192 | 0;
 i17 = i2 + 200 | 0;
 i18 = i2 + 264 | 0;
 i19 = i2 + 280 | 0;
 i20 = i2 + 296 | 0;
 i21 = i2 + 312 | 0;
 i22 = i2 + 328 | 0;
 i23 = i2 + 336 | 0;
 i24 = i2 + 400 | 0;
 i25 = i2 + 416 | 0;
 i26 = i2 + 432 | 0;
 i27 = i2 + 440 | 0;
 i28 = i2 + 448 | 0;
 i29 = i2 + 456 | 0;
 i30 = i2 + 464 | 0;
 i31 = i2 + 472 | 0;
 i32 = i2 + 480 | 0;
 i33 = i2 + 488 | 0;
 i34 = i2 + 496 | 0;
 i35 = i2 + 504 | 0;
 i36 = i2 + 512 | 0;
 i37 = i2 + 520 | 0;
 i38 = i2 + 528 | 0;
 i39 = i2 + 592 | 0;
 i40 = i1 | 0;
 i41 = i1 + 124 | 0;
 i42 = HEAP32[i41 >> 2] | 0;
 if ((i42 | 0) == 2) {
  __ZN7WebCore20CompositeEditCommand15deleteSelectionEbbbbb(i1 | 0, 0, 0, 0, 1, 1);
  i43 = HEAP32[i41 >> 2] | 0;
 } else if ((i42 | 0) == 0) {
  STACKTOP = i2;
  return;
 } else {
  i43 = i42;
 }
 if ((i43 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((i43 | 0) == 2) {
  i44 = 1;
 } else {
  i44 = HEAP32[i1 + 120 >> 2] | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i7, i1 + 96 | 0, i44);
 i44 = i9 | 0;
 i43 = HEAP32[i1 + 96 >> 2] | 0;
 HEAP32[i44 >> 2] = i43;
 if ((i43 | 0) != 0) {
  i42 = i43 + 8 | 0;
  HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
 }
 HEAP32[i9 + 4 >> 2] = HEAP32[i1 + 100 >> 2];
 i42 = HEAP32[i1 + 104 >> 2] | 0;
 i43 = i9 + 8 | 0;
 i41 = i43;
 i45 = HEAP32[i41 >> 2] & -8 | i42 & 7;
 HEAP32[i41 >> 2] = i45;
 HEAP8[i43] = i45 & 255 & -9 | i42 & 8;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i8, i9, 1);
 i9 = HEAP32[i44 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i44 = i9 + 8 | 0;
   i42 = i44 | 0;
   i45 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
   HEAP32[i42 >> 2] = i45;
   if ((i45 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
  }
 } while (0);
 i9 = __ZN7WebCore26highestEnclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleEPS3_(i8, F_BASE_ii + 12 | 0, 1, 0) | 0;
 do {
  if ((i9 | 0) != 0) {
   if ((HEAP32[i9 + 16 >> 2] | 0) == 0) {
    break;
   }
   if ((HEAP32[i9 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   __ZN7WebCore18createBreakElementERNS_8DocumentE(i10, HEAP32[i1 + 8 >> 2] | 0);
   i44 = i10 | 0;
   i45 = HEAP32[i44 >> 2] | 0;
   HEAP32[i44 >> 2] = 0;
   i44 = __ZN7WebCore27isLastVisiblePositionInNodeERKNS_15VisiblePositionEPKNS_4NodeE(i7, i9) | 0;
   i42 = i1 | 0;
   i43 = i45 | 0;
   do {
    if (i44 | (__ZN7WebCore28isFirstVisiblePositionInNodeERKNS_15VisiblePositionEPKNS_4NodeE(i7, i9) | 0) ^ 1) {
     i41 = i15 | 0;
     HEAP32[i41 >> 2] = i43;
     i46 = (i45 | 0) == 0;
     if (!i46) {
      i47 = i45 + 8 | 0;
      HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
     }
     i47 = i16 | 0;
     HEAP32[i47 >> 2] = i9;
     i48 = i9 + 8 | 0;
     HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 1;
     __ZN7WebCore20CompositeEditCommand15insertNodeAfterEN3WTF10PassRefPtrINS_4NodeEEES4_(i42, i15, i16);
     i48 = HEAP32[i47 >> 2] | 0;
     do {
      if ((i48 | 0) != 0) {
       i47 = i48 + 8 | 0;
       i49 = i47 | 0;
       i50 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
       HEAP32[i49 >> 2] = i50;
       if ((i50 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
      }
     } while (0);
     i48 = HEAP32[i41 >> 2] | 0;
     do {
      if ((i48 | 0) != 0) {
       i47 = i48 + 8 | 0;
       i50 = i47 | 0;
       i49 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
       HEAP32[i50 >> 2] = i49;
       if ((i49 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
      }
     } while (0);
     if (i44) {
      i48 = i4 | 0;
      HEAP32[i48 >> 2] = i43;
      if (!i46) {
       i41 = i45 + 8 | 0;
       HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 1;
      }
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i18, i4, 1);
      i41 = HEAP32[i48 >> 2] | 0;
      do {
       if ((i41 | 0) != 0) {
        i48 = i41 + 8 | 0;
        i47 = i48 | 0;
        i49 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
        HEAP32[i47 >> 2] = i49;
        if ((i49 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
       }
      } while (0);
      __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb(i17, i18, 1, (HEAP8[i1 + 128 | 0] & 2) != 0);
      __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i40, i17);
      __ZN7WebCore16VisibleSelectionD2Ev(i17);
      i41 = HEAP32[i18 >> 2] | 0;
      do {
       if ((i41 | 0) != 0) {
        i48 = i41 + 8 | 0;
        i49 = i48 | 0;
        i47 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
        HEAP32[i49 >> 2] = i47;
        if ((i47 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
       }
      } while (0);
      __ZN7WebCore20CompositeEditCommand19rebalanceWhitespaceEv(i42);
      break;
     }
     do {
      if (__ZN7WebCore32lineBreakExistsAtVisiblePositionERKNS_15VisiblePositionE(i7) | 0) {
       __ZNK7WebCore8Position4nextENS_16PositionMoveTypeE(i19, i8, 0);
       i41 = i19 | 0;
       i48 = HEAP32[i41 >> 2] | 0;
       HEAP32[i41 >> 2] = 0;
       i47 = i8 | 0;
       i49 = HEAP32[i47 >> 2] | 0;
       HEAP32[i47 >> 2] = i48;
       do {
        if ((i49 | 0) != 0) {
         i48 = i49 + 8 | 0;
         i50 = i48 | 0;
         i51 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
         HEAP32[i50 >> 2] = i51;
         if ((i51 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
        }
       } while (0);
       i49 = i8 + 4 | 0;
       HEAP32[i49 >> 2] = HEAP32[i19 + 4 >> 2];
       i48 = HEAP32[i19 + 8 >> 2] | 0;
       i51 = i8 + 8 | 0;
       i50 = i51;
       i52 = HEAP32[i50 >> 2] & -8 | i48 & 7;
       HEAP32[i50 >> 2] = i52;
       HEAP8[i51] = i52 & 255 & -9 | i48 & 8;
       i48 = HEAP32[i41 >> 2] | 0;
       if ((i48 | 0) == 0) {
        i53 = i47;
        i54 = i49;
        i55 = i51;
        i56 = i50;
        break;
       }
       i52 = i48 + 8 | 0;
       i48 = i52 | 0;
       i57 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
       HEAP32[i48 >> 2] = i57;
       if ((i57 | 0) >= 1) {
        i53 = i47;
        i54 = i49;
        i55 = i51;
        i56 = i50;
        break;
       }
       if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
        i53 = i47;
        i54 = i49;
        i55 = i51;
        i56 = i50;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
       i53 = i47;
       i54 = i49;
       i55 = i51;
       i56 = i50;
      } else {
       i50 = i8 + 8 | 0;
       i53 = i8 | 0;
       i54 = i8 + 4 | 0;
       i55 = i50;
       i56 = i50;
      }
     } while (0);
     i50 = i20 | 0;
     i51 = i21 | 0;
     i49 = i21 + 4 | 0;
     i52 = i21 + 8 | 0;
     while (1) {
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i20, i8, 1);
      i57 = __ZN7WebCore28isFirstVisiblePositionInNodeERKNS_15VisiblePositionEPKNS_4NodeE(i20, __ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i8, F_BASE_ii + 12 | 0, 1) | 0) | 0;
      i48 = HEAP32[i50 >> 2] | 0;
      do {
       if ((i48 | 0) != 0) {
        i58 = i48 + 8 | 0;
        i59 = i58 | 0;
        i60 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
        HEAP32[i59 >> 2] = i60;
        if ((i60 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
       }
      } while (0);
      if (!i57) {
       break;
      }
      __ZNK7WebCore8Position8previousENS_16PositionMoveTypeE(i21, i8, 0);
      i48 = HEAP32[i51 >> 2] | 0;
      HEAP32[i51 >> 2] = 0;
      i47 = HEAP32[i53 >> 2] | 0;
      HEAP32[i53 >> 2] = i48;
      do {
       if ((i47 | 0) != 0) {
        i48 = i47 + 8 | 0;
        i41 = i48 | 0;
        i58 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
        HEAP32[i41 >> 2] = i58;
        if ((i58 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
       }
      } while (0);
      HEAP32[i54 >> 2] = HEAP32[i49 >> 2];
      i47 = HEAP32[i52 >> 2] | 0;
      i57 = HEAP32[i56 >> 2] & -8 | i47 & 7;
      HEAP32[i56 >> 2] = i57;
      HEAP8[i55] = i57 & 255 & -9 | i47 & 8;
      i47 = HEAP32[i51 >> 2] | 0;
      if ((i47 | 0) == 0) {
       continue;
      }
      i57 = i47 + 8 | 0;
      i47 = i57 | 0;
      i48 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
      HEAP32[i47 >> 2] = i48;
      if ((i48 | 0) >= 1) {
       continue;
      }
      if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
       continue;
      }
      __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
     }
     i51 = HEAP32[i53 >> 2] | 0;
     i52 = i51 + 12 | 0;
     do {
      if ((HEAP32[i52 >> 2] & 1 | 0) == 0) {
       do {
        if ((HEAP8[i55] & 8) == 0) {
         i49 = HEAP32[i56 >> 2] & 7;
         if (!((i49 | 0) == 2 | (i49 | 0) == 4)) {
          i61 = 111;
          break;
         }
         i62 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i8) | 0;
        } else {
         i61 = 111;
        }
       } while (0);
       if ((i61 | 0) == 111) {
        i62 = HEAP32[i54 >> 2] | 0;
       }
       if ((i62 | 0) <= 0) {
        i63 = i51;
        break;
       }
       do {
        if ((HEAP8[i55] & 8) == 0) {
         i49 = HEAP32[i56 >> 2] & 7;
         if (!((i49 | 0) == 2 | (i49 | 0) == 4)) {
          i61 = 116;
          break;
         }
         i64 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i8) | 0;
        } else {
         i61 = 116;
        }
       } while (0);
       if ((i61 | 0) == 116) {
        i64 = HEAP32[i54 >> 2] | 0;
       }
       i49 = HEAP32[i52 >> 2] | 0;
       if ((i49 & 2 | 0) == 0) {
        i65 = i49;
       } else {
        i49 = __ZNK7WebCore13ContainerNode9childNodeEj(i51, i64) | 0;
        if ((i49 | 0) != 0) {
         i63 = i49;
         break;
        }
        i65 = HEAP32[i52 >> 2] | 0;
       }
       if ((i65 & 2 | 0) != 0) {
        i49 = HEAP32[i51 + 36 >> 2] | 0;
        if ((i49 | 0) != 0) {
         i63 = i49;
         break;
        }
       }
       i49 = HEAP32[i51 + 28 >> 2] | 0;
       if ((i49 | 0) != 0) {
        i63 = i49;
        break;
       }
       i63 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i51) | 0;
      } else {
       i49 = i51;
       do {
        if ((HEAP8[i55] & 8) == 0) {
         i50 = HEAP32[i56 >> 2] & 7;
         if (!((i50 | 0) == 2 | (i50 | 0) == 4)) {
          i61 = 86;
          break;
         }
         i66 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i8) | 0;
        } else {
         i61 = 86;
        }
       } while (0);
       if ((i61 | 0) == 86) {
        i66 = HEAP32[i54 >> 2] | 0;
       }
       i50 = HEAP32[i51 + 36 >> 2] | 0;
       i57 = i50;
       if ((i50 | 0) == 0) {
        i67 = 0;
       } else {
        i67 = HEAP32[i50 + 4 >> 2] | 0;
       }
       if (i66 >>> 0 >= i67 >>> 0) {
        if (!((HEAP32[i52 >> 2] & 2 | 0) == 0 | (i50 | 0) == 0)) {
         i63 = i57;
         break;
        }
        i57 = HEAP32[i51 + 28 >> 2] | 0;
        if ((i57 | 0) != 0) {
         i63 = i57;
         break;
        }
        i63 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i51) | 0;
        break;
       }
       do {
        if ((HEAP8[i55] & 8) == 0) {
         i57 = HEAP32[i56 >> 2] & 7;
         if (!((i57 | 0) == 2 | (i57 | 0) == 4)) {
          i61 = 96;
          break;
         }
         i68 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i8) | 0;
        } else {
         i61 = 96;
        }
       } while (0);
       if ((i61 | 0) == 96) {
        i68 = HEAP32[i54 >> 2] | 0;
       }
       if ((i68 | 0) <= 0) {
        i63 = i51;
        break;
       }
       i57 = i22 | 0;
       HEAP32[i57 >> 2] = i49;
       if ((i51 | 0) != 0) {
        i50 = i51 + 8 | 0;
        HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
       }
       do {
        if ((HEAP8[i55] & 8) == 0) {
         i50 = HEAP32[i56 >> 2] & 7;
         if (!((i50 | 0) == 2 | (i50 | 0) == 4)) {
          i61 = 103;
          break;
         }
         i69 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i8) | 0;
        } else {
         i61 = 103;
        }
       } while (0);
       if ((i61 | 0) == 103) {
        i69 = HEAP32[i54 >> 2] | 0;
       }
       __ZN7WebCore20CompositeEditCommand13splitTextNodeEN3WTF10PassRefPtrINS_4TextEEEj(i42, i22, i69);
       i49 = HEAP32[i57 >> 2] | 0;
       if ((i49 | 0) == 0) {
        i63 = i51;
        break;
       }
       i50 = i49 + 8 | 0;
       i49 = i50 | 0;
       i48 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
       HEAP32[i49 >> 2] = i48;
       if ((i48 | 0) >= 1) {
        i63 = i51;
        break;
       }
       if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
        i63 = i51;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
       i63 = i51;
      }
     } while (0);
     if (!(__ZNK7WebCore4Node14isDescendantOfEPKS0_(i63, i9) | 0)) {
      do {
       if ((i63 | 0) == 0) {
        HEAP32[i25 >> 2] = 0;
        HEAP32[i25 + 4 >> 2] = 0;
        i51 = i25 + 8 | 0;
        i52 = i51;
        i50 = HEAP32[i52 >> 2] | 0;
        HEAP32[i52 >> 2] = i50 & -8;
        HEAP8[i51] = i50 & 255 & -16;
       } else {
        if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i63 >> 2] | 0) + 132 >> 2] & 31](i63) | 0) {
         __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i25, i63);
         break;
        }
        i50 = i3 | 0;
        HEAP32[i50 >> 2] = i63;
        i51 = i63 + 8 | 0;
        HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
        __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i25, i3, 1);
        i51 = HEAP32[i50 >> 2] | 0;
        if ((i51 | 0) == 0) {
         break;
        }
        i50 = i51 + 8 | 0;
        i51 = i50 | 0;
        i52 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
        HEAP32[i51 >> 2] = i52;
        if ((i52 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
       }
      } while (0);
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i24, i25, 1);
      __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i23, i24, (HEAP8[i1 + 128 | 0] & 2) != 0);
      __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i40, i23);
      __ZN7WebCore16VisibleSelectionD2Ev(i23);
      i50 = HEAP32[i24 >> 2] | 0;
      do {
       if ((i50 | 0) != 0) {
        i52 = i50 + 8 | 0;
        i51 = i52 | 0;
        i48 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
        HEAP32[i51 >> 2] = i48;
        if ((i48 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
       }
      } while (0);
      i50 = HEAP32[i25 >> 2] | 0;
      if ((i50 | 0) == 0) {
       break;
      }
      i52 = i50 + 8 | 0;
      i50 = i52 | 0;
      i48 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
      HEAP32[i50 >> 2] = i48;
      if ((i48 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
      break;
     }
     i52 = HEAP32[i63 + 16 >> 2] | 0;
     L189 : do {
      if ((i52 | 0) == 0) {
       i70 = 0;
       i71 = 0;
      } else {
       if ((HEAP32[i52 + 12 >> 2] & 4 | 0) == 0) {
        i70 = 0;
        i71 = 0;
        break;
       }
       if ((i52 | 0) == 0 | (i52 | 0) == (i9 | 0)) {
        i70 = 0;
        i71 = 0;
        break;
       } else {
        i72 = 0;
        i73 = 0;
        i74 = 0;
        i75 = i52;
       }
       L192 : while (1) {
        i48 = i75;
        if ((i72 | 0) == (i73 | 0)) {
         i50 = i73 + 1 | 0;
         i51 = i50 + (i73 >>> 2) | 0;
         i49 = i51 >>> 0 > 16 >>> 0 ? i51 : 16;
         i51 = i49 >>> 0 > i50 >>> 0 ? i49 : i50;
         do {
          if (i73 >>> 0 < i51 >>> 0) {
           if (i51 >>> 0 > 1073741823 >>> 0) {
            break L192;
           }
           i49 = __ZN3WTF18fastMallocGoodSizeEj(i51 << 2) | 0;
           i47 = i49 >>> 2;
           i58 = __ZN3WTF10fastMallocEj(i49) | 0;
           i49 = i58;
           i41 = i74;
           _memcpy(i58 | 0, i41 | 0, i73 << 2) | 0;
           if ((i74 | 0) == 0) {
            i76 = i49;
            i77 = i47;
            break;
           }
           i58 = (i49 | 0) == (i74 | 0);
           __ZN3WTF8fastFreeEPv(i41);
           i76 = i58 ? 0 : i49;
           i77 = i58 ? 0 : i47;
          } else {
           i76 = i74;
           i77 = i73;
          }
         } while (0);
         HEAP32[i76 + (i73 << 2) >> 2] = i48;
         i51 = i75 + 8 | 0;
         HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
         i78 = i76;
         i79 = i77;
         i80 = i50;
        } else {
         HEAP32[i74 + (i72 << 2) >> 2] = i48;
         i51 = i75 + 8 | 0;
         HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
         i78 = i74;
         i79 = i73;
         i80 = i72 + 1 | 0;
        }
        i51 = HEAP32[i75 + 16 >> 2] | 0;
        if ((i51 | 0) == 0) {
         i70 = i80;
         i71 = i78;
         break L189;
        }
        if ((HEAP32[i51 + 12 >> 2] & 4 | 0) == 0) {
         i70 = i80;
         i71 = i78;
         break L189;
        }
        if ((i51 | 0) == 0 | (i51 | 0) == (i9 | 0)) {
         i70 = i80;
         i71 = i78;
         break L189;
        } else {
         i72 = i80;
         i73 = i79;
         i74 = i78;
         i75 = i51;
        }
       }
       _WTFCrash();
      }
     } while (0);
     __ZN7WebCore7Element27cloneElementWithoutChildrenEv(i26, i9);
     i52 = i26 | 0;
     i57 = HEAP32[i52 >> 2] | 0;
     HEAP32[i52 >> 2] = 0;
     i52 = i27 | 0;
     HEAP32[i52 >> 2] = i57;
     i51 = (i57 | 0) == 0;
     if (!i51) {
      i47 = i57 + 8 | 0;
      HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
     }
     i47 = i28 | 0;
     HEAP32[i47 >> 2] = i43;
     if (!i46) {
      i58 = i45 + 8 | 0;
      HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand15insertNodeAfterEN3WTF10PassRefPtrINS_4NodeEEES4_(i42, i27, i28);
     i58 = HEAP32[i47 >> 2] | 0;
     do {
      if ((i58 | 0) != 0) {
       i47 = i58 + 8 | 0;
       i49 = i47 | 0;
       i41 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
       HEAP32[i49 >> 2] = i41;
       if ((i41 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
      }
     } while (0);
     i58 = HEAP32[i52 >> 2] | 0;
     do {
      if ((i58 | 0) != 0) {
       i47 = i58 + 8 | 0;
       i41 = i47 | 0;
       i49 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
       HEAP32[i41 >> 2] = i49;
       if ((i49 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
      }
     } while (0);
     if (i51) {
      i81 = 0;
     } else {
      i58 = i57 + 8 | 0;
      HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
      i81 = i57;
     }
     i58 = (i70 | 0) == 0;
     L226 : do {
      if (i58) {
       i82 = i81;
      } else {
       i52 = i29 | 0;
       i47 = i32 | 0;
       i49 = i33 | 0;
       i41 = i30 | 0;
       i60 = i31 | 0;
       i59 = i81;
       i83 = i70;
       L228 : while (1) {
        i84 = i83 - 1 | 0;
        if (i70 >>> 0 <= i84 >>> 0) {
         i61 = 173;
         break;
        }
        __ZN7WebCore7Element27cloneElementWithoutChildrenEv(i29, HEAP32[i71 + (i84 << 2) >> 2] | 0);
        i85 = HEAP32[i52 >> 2] | 0;
        HEAP32[i52 >> 2] = 0;
        i86 = i85 | 0;
        L231 : do {
         if ((HEAP32[i85 + 12 >> 2] & 4 | 0) != 0) {
          i87 = HEAP32[i85 + 44 >> 2] | 0;
          i88 = HEAP32[__ZN7WebCore9HTMLNames5olTagE >> 2] | 0;
          if ((i87 | 0) != (i88 | 0)) {
           if ((HEAP32[i87 + 12 >> 2] | 0) != (HEAP32[i88 + 12 >> 2] | 0)) {
            break;
           }
           if ((HEAP32[i87 + 16 >> 2] | 0) != (HEAP32[i88 + 16 >> 2] | 0)) {
            break;
           }
          }
          if (i83 >>> 0 > 1 >>> 0) {
           i88 = i83 - 2 | 0;
           if (i70 >>> 0 <= i88 >>> 0) {
            i61 = 180;
            break L228;
           }
           i89 = HEAP32[i71 + (i88 << 2) >> 2] | 0;
          } else {
           i89 = i63;
          }
          if ((i89 | 0) == 0) {
           break;
          }
          i88 = HEAP32[__ZN7WebCore9HTMLNames5liTagE >> 2] | 0;
          i87 = i88 + 12 | 0;
          i90 = i88 + 16 | 0;
          i91 = i89;
          L242 : while (1) {
           i92 = i91 + 12 | 0;
           i93 = HEAP32[i92 >> 2] | 0;
           do {
            if ((i93 & 4 | 0) != 0) {
             i94 = HEAP32[i91 + 44 >> 2] | 0;
             if ((i94 | 0) == (i88 | 0)) {
              break L242;
             }
             if ((HEAP32[i94 + 12 >> 2] | 0) != (HEAP32[i87 >> 2] | 0)) {
              break;
             }
             if ((HEAP32[i94 + 16 >> 2] | 0) == (HEAP32[i90 >> 2] | 0)) {
              break L242;
             }
            }
           } while (0);
           i94 = HEAP32[i91 + 28 >> 2] | 0;
           if ((i94 | 0) == 0) {
            break L231;
           } else {
            i91 = i94;
           }
          }
          i90 = (i93 & 2048 | 0) == 0;
          i87 = i91 + 32 | 0;
          if (i90) {
           i95 = i87 | 0;
          } else {
           i95 = HEAP32[i87 >> 2] | 0;
          }
          if ((HEAP32[i95 >> 2] | 0) == 0) {
           break;
          }
          if (i90) {
           i96 = i87 | 0;
          } else {
           i96 = HEAP32[i87 >> 2] | 0;
          }
          i90 = HEAP32[i96 >> 2] | 0;
          if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i90 >> 2] | 0) + 104 >> 2] & 31](i90) | 0)) {
           break;
          }
          HEAP32[i41 >> 2] = i85;
          if ((i85 | 0) != 0) {
           i90 = i85 + 8 | 0;
           HEAP32[i90 >> 2] = (HEAP32[i90 >> 2] | 0) + 1;
          }
          if ((HEAP32[i92 >> 2] & 2048 | 0) == 0) {
           i97 = i87 | 0;
          } else {
           i97 = HEAP32[i87 >> 2] | 0;
          }
          i87 = HEAP32[i97 >> 2] | 0;
          if ((HEAP8[i87 + 128 | 0] & 2) == 0) {
           __ZNK7WebCore14RenderListItem14updateValueNowEv(i87);
          }
          __ZN3WTF12AtomicString6numberEi(i31, HEAP32[i87 + 124 >> 2] | 0);
          __ZN7WebCore20CompositeEditCommand16setNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameERKNS1_12AtomicStringE(i42, i30, __ZN7WebCore9HTMLNames9startAttrE, i31);
          i87 = HEAP32[i60 >> 2] | 0;
          do {
           if ((i87 | 0) != 0) {
            i90 = i87 | 0;
            i88 = (HEAP32[i90 >> 2] | 0) - 2 | 0;
            if ((i88 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i87);
             break;
            } else {
             HEAP32[i90 >> 2] = i88;
             break;
            }
           }
          } while (0);
          i87 = HEAP32[i41 >> 2] | 0;
          if ((i87 | 0) == 0) {
           break;
          }
          i91 = i87 + 8 | 0;
          i87 = i91 | 0;
          i88 = (HEAP32[i87 >> 2] | 0) - 1 | 0;
          HEAP32[i87 >> 2] = i88;
          if ((i88 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i91 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i91 - 8 | 0);
         }
        } while (0);
        HEAP32[i47 >> 2] = i86;
        i48 = (i85 | 0) == 0;
        if (!i48) {
         i50 = i85 + 8 | 0;
         HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
        }
        HEAP32[i49 >> 2] = i59;
        i50 = (i59 | 0) == 0;
        if (!i50) {
         i91 = i59 + 8 | 0;
         HEAP32[i91 >> 2] = (HEAP32[i91 >> 2] | 0) + 1;
        }
        __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i42, i32, i33);
        i91 = HEAP32[i49 >> 2] | 0;
        do {
         if ((i91 | 0) != 0) {
          i88 = i91 + 8 | 0;
          i87 = i88 | 0;
          i90 = (HEAP32[i87 >> 2] | 0) - 1 | 0;
          HEAP32[i87 >> 2] = i90;
          if ((i90 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i88 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i88 - 8 | 0);
         }
        } while (0);
        i91 = HEAP32[i47 >> 2] | 0;
        do {
         if ((i91 | 0) != 0) {
          i86 = i91 + 8 | 0;
          i88 = i86 | 0;
          i90 = (HEAP32[i88 >> 2] | 0) - 1 | 0;
          HEAP32[i88 >> 2] = i90;
          if ((i90 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i86 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i86 - 8 | 0);
         }
        } while (0);
        if (!i48) {
         i91 = i85 + 8 | 0;
         HEAP32[i91 >> 2] = (HEAP32[i91 >> 2] | 0) + 1;
        }
        do {
         if (!i50) {
          i91 = i59 + 8 | 0;
          i86 = i91 | 0;
          i90 = (HEAP32[i86 >> 2] | 0) - 1 | 0;
          HEAP32[i86 >> 2] = i90;
          if ((i90 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i91 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i91 - 8 | 0);
         }
        } while (0);
        do {
         if (i48) {
          i98 = 0;
         } else {
          i50 = i85 + 8 | 0;
          i91 = i50 | 0;
          i90 = (HEAP32[i91 >> 2] | 0) - 1 | 0;
          HEAP32[i91 >> 2] = i90;
          if ((i90 | 0) >= 1) {
           i98 = i85;
           break;
          }
          if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
           i98 = i85;
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
          i98 = i85;
         }
        } while (0);
        if ((i84 | 0) == 0) {
         i82 = i98;
         break L226;
        } else {
         i59 = i98;
         i83 = i84;
        }
       }
       if ((i61 | 0) == 173) {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       } else if ((i61 | 0) == 180) {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
      }
     } while (0);
     i83 = i34 | 0;
     HEAP32[i83 >> 2] = i82;
     i59 = (i82 | 0) == 0;
     if (!i59) {
      i47 = i82 + 8 | 0;
      HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand32moveRemainingSiblingsToNewParentEPNS_4NodeES2_N3WTF10PassRefPtrINS_7ElementEEE(i42, i63, 0, i34);
     i47 = HEAP32[i83 >> 2] | 0;
     do {
      if ((i47 | 0) != 0) {
       i83 = i47 + 8 | 0;
       i49 = i83 | 0;
       i41 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
       HEAP32[i49 >> 2] = i41;
       if ((i41 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i83 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i83 - 8 | 0);
      }
     } while (0);
     do {
      if (!i58) {
       i47 = i71 | 0;
       i83 = HEAP32[i47 >> 2] | 0;
       i41 = (i83 | 0) == 0;
       if (!i41) {
        i49 = i83 + 8 | 0;
        HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) + 1;
       }
       i49 = HEAP32[i82 + 16 >> 2] | 0;
       do {
        if ((i49 | 0) == 0) {
         i99 = 0;
        } else {
         if ((HEAP32[i49 + 12 >> 2] & 4 | 0) == 0) {
          i99 = 0;
          break;
         }
         i60 = i49 + 8 | 0;
         HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
         i99 = i49;
        }
       } while (0);
       if (i41 | (i83 | 0) == (i9 | 0)) {
        i100 = i83;
        i101 = i99;
        i102 = i41;
       } else {
        i49 = i35 | 0;
        i60 = i83;
        i52 = i99;
        while (1) {
         i85 = HEAP32[i60 + 28 >> 2] | 0;
         HEAP32[i49 >> 2] = i52;
         i48 = (i52 | 0) == 0;
         if (!i48) {
          i50 = i52 + 8 | 0;
          HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
         }
         __ZN7WebCore20CompositeEditCommand32moveRemainingSiblingsToNewParentEPNS_4NodeES2_N3WTF10PassRefPtrINS_7ElementEEE(i42, i85, 0, i35);
         i85 = HEAP32[i49 >> 2] | 0;
         do {
          if ((i85 | 0) != 0) {
           i50 = i85 + 8 | 0;
           i90 = i50 | 0;
           i91 = (HEAP32[i90 >> 2] | 0) - 1 | 0;
           HEAP32[i90 >> 2] = i91;
           if ((i91 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
          }
         } while (0);
         i85 = HEAP32[i60 + 16 >> 2] | 0;
         do {
          if ((i85 | 0) == 0) {
           i103 = 0;
          } else {
           if ((HEAP32[i85 + 12 >> 2] & 4 | 0) == 0) {
            i103 = 0;
            break;
           }
           i84 = i85 + 8 | 0;
           HEAP32[i84 >> 2] = (HEAP32[i84 >> 2] | 0) + 1;
           i103 = i85;
          }
         } while (0);
         i85 = i60 + 8 | 0;
         i84 = i85 - 8 | 0;
         i50 = i85 | 0;
         i91 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
         HEAP32[i50 >> 2] = i91;
         do {
          if ((i91 | 0) < 1) {
           if ((HEAP32[i85 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i84);
          }
         } while (0);
         i84 = HEAP32[i52 + 16 >> 2] | 0;
         do {
          if ((i84 | 0) == 0) {
           i104 = 0;
          } else {
           if ((HEAP32[i84 + 12 >> 2] & 4 | 0) == 0) {
            i104 = 0;
            break;
           }
           i85 = i84 + 8 | 0;
           HEAP32[i85 >> 2] = (HEAP32[i85 >> 2] | 0) + 1;
           i104 = i84;
          }
         } while (0);
         do {
          if (!i48) {
           i84 = i52 + 8 | 0;
           i85 = i84 | 0;
           i91 = (HEAP32[i85 >> 2] | 0) - 1 | 0;
           HEAP32[i85 >> 2] = i91;
           if ((i91 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i84 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i84 - 8 | 0);
          }
         } while (0);
         i48 = (i103 | 0) == 0;
         if (i48 | (i103 | 0) == (i9 | 0)) {
          i100 = i103;
          i101 = i104;
          i102 = i48;
          break;
         } else {
          i60 = i103;
          i52 = i104;
         }
        }
       }
       i52 = HEAP32[i47 >> 2] | 0;
       i60 = i52 | 0;
       do {
        if ((HEAP32[i52 + 12 >> 2] & 2 | 0) == 0) {
         i49 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
         i83 = i36 | 0;
         HEAP32[i83 >> 2] = i60;
         if ((i52 | 0) == 0) {
          i105 = i49;
          i106 = i83;
          i61 = 274;
         } else {
          i107 = i49;
          i108 = i83;
          i61 = 273;
         }
        } else {
         if ((HEAP32[i60 + 36 >> 2] | 0) != 0) {
          break;
         }
         i83 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
         i49 = i36 | 0;
         HEAP32[i49 >> 2] = i60;
         i107 = i83;
         i108 = i49;
         i61 = 273;
        }
       } while (0);
       if ((i61 | 0) == 273) {
        i60 = i52 + 8 | 0;
        HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
        i105 = i107;
        i106 = i108;
        i61 = 274;
       }
       do {
        if ((i61 | 0) == 274) {
         FUNCTION_TABLE_viii[i105 & 3](i42, i36, 1);
         i60 = HEAP32[i106 >> 2] | 0;
         if ((i60 | 0) == 0) {
          break;
         }
         i47 = i60 + 8 | 0;
         i60 = i47 | 0;
         i49 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
         HEAP32[i60 >> 2] = i49;
         if ((i49 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
        }
       } while (0);
       do {
        if ((i101 | 0) != 0) {
         i52 = i101 + 8 | 0;
         i47 = i52 | 0;
         i49 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
         HEAP32[i47 >> 2] = i49;
         if ((i49 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
        }
       } while (0);
       if (i102) {
        break;
       }
       i52 = i100 + 8 | 0;
       i49 = i52 | 0;
       i47 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
       HEAP32[i49 >> 2] = i47;
       if ((i47 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore20CompositeEditCommand27addBlockPlaceholderIfNeededEPNS_7ElementE(i37, i42, i57);
     i52 = HEAP32[i37 >> 2] | 0;
     do {
      if ((i52 | 0) != 0) {
       i47 = i52 + 8 | 0;
       i49 = i47 | 0;
       i60 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
       HEAP32[i49 >> 2] = i60;
       if ((i60 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
      }
     } while (0);
     i52 = i6 | 0;
     HEAP32[i52 >> 2] = i43;
     if (!i46) {
      i47 = i45 + 8 | 0;
      HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
     }
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i39, i6, 1);
     i47 = HEAP32[i52 >> 2] | 0;
     do {
      if ((i47 | 0) != 0) {
       i52 = i47 + 8 | 0;
       i60 = i52 | 0;
       i49 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
       HEAP32[i60 >> 2] = i49;
       if ((i49 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb(i38, i39, 1, (HEAP8[i1 + 128 | 0] & 2) != 0);
     __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i40, i38);
     __ZN7WebCore16VisibleSelectionD2Ev(i38);
     i47 = HEAP32[i39 >> 2] | 0;
     do {
      if ((i47 | 0) != 0) {
       i46 = i47 + 8 | 0;
       i52 = i46 | 0;
       i49 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
       HEAP32[i52 >> 2] = i49;
       if ((i49 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore20CompositeEditCommand19rebalanceWhitespaceEv(i42);
     do {
      if (!i59) {
       i47 = i82 + 8 | 0;
       i46 = i47 | 0;
       i49 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
       HEAP32[i46 >> 2] = i49;
       if ((i49 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
      }
     } while (0);
     do {
      if (!i51) {
       i59 = i57 + 8 | 0;
       i47 = i59 | 0;
       i49 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
       HEAP32[i47 >> 2] = i49;
       if ((i49 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i59 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i59 - 8 | 0);
      }
     } while (0);
     if (!i58) {
      i57 = i71 + (i70 << 2) | 0;
      i51 = i71;
      while (1) {
       i59 = HEAP32[i51 >> 2] | 0;
       do {
        if ((i59 | 0) != 0) {
         i49 = i59 + 8 | 0;
         i47 = i49 | 0;
         i46 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
         HEAP32[i47 >> 2] = i46;
         if ((i46 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
        }
       } while (0);
       i51 = i51 + 4 | 0;
       if ((i51 | 0) == (i57 | 0)) {
        break;
       }
      }
     }
     if ((i71 | 0) == 0) {
      break;
     }
     __ZN3WTF8fastFreeEPv(i71);
    } else {
     i57 = i11 | 0;
     HEAP32[i57 >> 2] = i43;
     i51 = (i45 | 0) == 0;
     if (!i51) {
      i58 = i45 + 8 | 0;
      HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
     }
     i58 = i12 | 0;
     HEAP32[i58 >> 2] = i9;
     i59 = i9 + 8 | 0;
     HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 1;
     __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i42, i11, i12, 1);
     i59 = HEAP32[i58 >> 2] | 0;
     do {
      if ((i59 | 0) != 0) {
       i58 = i59 + 8 | 0;
       i49 = i58 | 0;
       i46 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
       HEAP32[i49 >> 2] = i46;
       if ((i46 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
      }
     } while (0);
     i59 = HEAP32[i57 >> 2] | 0;
     do {
      if ((i59 | 0) != 0) {
       i58 = i59 + 8 | 0;
       i46 = i58 | 0;
       i49 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
       HEAP32[i46 >> 2] = i49;
       if ((i49 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
      }
     } while (0);
     i59 = i5 | 0;
     HEAP32[i59 >> 2] = i43;
     if (!i51) {
      i57 = i45 + 8 | 0;
      HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
     }
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i14, i5, 1);
     i57 = HEAP32[i59 >> 2] | 0;
     do {
      if ((i57 | 0) != 0) {
       i59 = i57 + 8 | 0;
       i58 = i59 | 0;
       i49 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
       HEAP32[i58 >> 2] = i49;
       if ((i49 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i59 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i59 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb(i13, i14, 1, (HEAP8[i1 + 128 | 0] & 2) != 0);
     __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i40, i13);
     __ZN7WebCore16VisibleSelectionD2Ev(i13);
     i57 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i57 | 0) != 0) {
       i51 = i57 + 8 | 0;
       i59 = i51 | 0;
       i49 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
       HEAP32[i59 >> 2] = i49;
       if ((i49 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore20CompositeEditCommand19rebalanceWhitespaceEv(i42);
    }
   } while (0);
   if ((i45 | 0) == 0) {
    break;
   }
   i42 = i45 + 8 | 0;
   i43 = i42 | 0;
   i44 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
   HEAP32[i43 >> 2] = i44;
   if ((i44 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
  }
 } while (0);
 i14 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i8 = i14 + 8 | 0;
   i13 = i8 | 0;
   i40 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i40;
   if ((i40 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i14 = HEAP32[i7 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i14 + 8 | 0;
 i14 = i7 | 0;
 i8 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 HEAP32[i14 >> 2] = i8;
 if ((i8 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i2;
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
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_viii + 2;
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
function __ZN7WebCore22BreakBlockquoteCommandC2ERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 16;
 return;
}
function __ZN7WebCore22BreakBlockquoteCommandC1ERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 16;
 return;
}
function ii___ZNK7WebCore20CompositeEditCommand20preservesTypingStyleEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand20preservesTypingStyleEv(i1 | 0) | 0;
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
function __ZN7WebCore22BreakBlockquoteCommandD0Ev(i1) {
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
function ii___ZN7WebCore16isMailBlockquoteEPKNS_4NodeE__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore16isMailBlockquoteEPKNS_4NodeE(i1 | 0) | 0;
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
function __ZN7WebCore22BreakBlockquoteCommandD1Ev(i1) {
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore22BreakBlockquoteCommandD1Ev,b0,__ZN7WebCore22BreakBlockquoteCommand7doApplyEv,b0,__ZN7WebCore22BreakBlockquoteCommandD0Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore22BreakBlockquoteCommandC2ERNS_8DocumentE,b1,vii___ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb__wrapper,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2,ii___ZNK7WebCore11EditCommand13editingActionEv__wrapper,b2,__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv,b2,ii___ZNK7WebCore20CompositeEditCommand15isTypingCommandEv__wrapper,b2,ii___ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv__wrapper,b2,ii___ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv__wrapper,b2,ii___ZN7WebCore16isMailBlockquoteEPKNS_4NodeE__wrapper,b2,ii___ZNK7WebCore20CompositeEditCommand20preservesTypingStyleEv__wrapper,b2,__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv,b2,__ZNK7WebCore11EditCommand24isEditCommandCompositionEv,b2,__ZNK7WebCore11EditCommand19isSimpleEditCommandEv,b2,__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,viii___ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE__wrapper,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6,viiii___ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj__wrapper,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames9startAttrE": __ZN7WebCore9HTMLNames9startAttrE, "__ZN7WebCore9HTMLNames5liTagE": __ZN7WebCore9HTMLNames5liTagE, "__ZN7WebCore9HTMLNames5olTagE": __ZN7WebCore9HTMLNames5olTagE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv","__ZN7WebCore16VisibleSelectionD2Ev","_strlen","__ZN7WebCore22BreakBlockquoteCommandD1Ev","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv","__ZN7WebCore22BreakBlockquoteCommandC2ERNS_8DocumentE","_memset","_memcpy","__ZNK7WebCore11EditCommand24isEditCommandCompositionEv","__ZNK7WebCore11EditCommand19isSimpleEditCommandEv","__ZN7WebCore22BreakBlockquoteCommandD0Ev","__ZN7WebCore22BreakBlockquoteCommand7doApplyEv","__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv"]

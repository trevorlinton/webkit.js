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
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames9styleAttrE=env.__ZN7WebCore9HTMLNames9styleAttrE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore24ApplyBlockElementCommandE=(H_BASE+8)|0;
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
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
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
function __ZN7WebCore24ApplyBlockElementCommand43rangeForParagraphSplittingTextNodesIfNeededERKNS_15VisiblePositionERNS_8PositionES5_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 288 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 48 | 0;
 i11 = i5 + 64 | 0;
 i12 = i5 + 80 | 0;
 i13 = i5 + 96 | 0;
 i14 = i5 + 104 | 0;
 i15 = i5 + 120 | 0;
 i16 = i5 + 136 | 0;
 i17 = i5 + 144 | 0;
 i18 = i5 + 160 | 0;
 i19 = i5 + 168 | 0;
 i20 = i5 + 184 | 0;
 i21 = i5 + 200 | 0;
 i22 = i5 + 208 | 0;
 i23 = i5 + 216 | 0;
 i24 = i5 + 232 | 0;
 i25 = i5 + 248 | 0;
 i26 = i5 + 264 | 0;
 i27 = i5 + 272 | 0;
 __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i8, i2, 1);
 i28 = i8 | 0;
 i29 = HEAP32[i28 >> 2] | 0;
 if ((i29 | 0) != 0) {
  i30 = i29 + 8 | 0;
  HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
 }
 i30 = HEAP32[i8 + 4 >> 2] | 0;
 i31 = HEAP32[i8 + 8 >> 2] | 0;
 i8 = i31 & 8;
 i32 = i3 | 0;
 i33 = HEAP32[i32 >> 2] | 0;
 HEAP32[i32 >> 2] = i29;
 do {
  if ((i33 | 0) != 0) {
   i29 = i33 + 8 | 0;
   i34 = i29 | 0;
   i35 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
   HEAP32[i34 >> 2] = i35;
   if ((i35 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
  }
 } while (0);
 i33 = i3 + 4 | 0;
 HEAP32[i33 >> 2] = i30;
 i30 = i3 + 8 | 0;
 i29 = i30;
 i35 = HEAP32[i29 >> 2] & -8 | i31 & 7;
 HEAP32[i29 >> 2] = i35;
 HEAP8[i30] = i35 & 255 & -9 | i8;
 i8 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i28 = i8 + 8 | 0;
   i35 = i28 | 0;
   i31 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
   HEAP32[i35 >> 2] = i31;
   if ((i31 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
  }
 } while (0);
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i28 = i8 + 8 | 0;
  HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
 }
 i28 = HEAP32[i2 + 4 >> 2] | 0;
 i31 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i31 & 8;
 i35 = i4 | 0;
 i34 = HEAP32[i35 >> 2] | 0;
 HEAP32[i35 >> 2] = i8;
 do {
  if ((i34 | 0) != 0) {
   i8 = i34 + 8 | 0;
   i36 = i8 | 0;
   i37 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
   HEAP32[i36 >> 2] = i37;
   if ((i37 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i34 = i4 + 4 | 0;
 HEAP32[i34 >> 2] = i28;
 i28 = i4 + 8 | 0;
 i8 = i28;
 i37 = HEAP32[i8 >> 2] & -8 | i31 & 7;
 HEAP32[i8 >> 2] = i37;
 HEAP8[i28] = i37 & 255 & -9 | i2;
 i2 = __ZN7WebCore24ApplyBlockElementCommand30renderStyleOfEnclosingTextNodeERKNS_8PositionE(i1, i3) | 0;
 do {
  if ((i2 | 0) == 0) {
   i38 = 0;
  } else {
   if ((__ZN7WebCore24ApplyBlockElementCommand30renderStyleOfEnclosingTextNodeERKNS_8PositionE(i1, i4) | 0) == 0) {
    i39 = 0;
   } else {
    i37 = __ZNK7WebCore8Position13containerNodeEv(i3) | 0;
    i39 = (i37 | 0) == (__ZNK7WebCore8Position13containerNodeEv(i4) | 0);
   }
   i37 = i1 + 160 | 0;
   if ((__ZN7WebCore24ApplyBlockElementCommand30renderStyleOfEnclosingTextNodeERKNS_8PositionE(i1, i37) | 0) == 0) {
    i40 = 0;
   } else {
    i31 = __ZNK7WebCore8Position13containerNodeEv(i3) | 0;
    i40 = (i31 | 0) == (__ZNK7WebCore8Position13containerNodeEv(i37) | 0);
   }
   i31 = i2 + 44 | 0;
   i36 = HEAP32[i31 >> 2] & 7;
   L30 : do {
    if (!((i36 | 0) == 4 | (i36 | 0) == 0)) {
     if (!(__ZN7WebCoreL19isNewLineAtPositionERKNS_8PositionE(i3) | 0)) {
      break;
     }
     __ZNK7WebCore8Position8previousENS_16PositionMoveTypeE(i9, i3, 0);
     if (__ZN7WebCoreL19isNewLineAtPositionERKNS_8PositionE(i9) | 0) {
      i41 = 0;
     } else {
      i41 = (HEAP32[i33 >> 2] | 0) > 0;
     }
     i42 = HEAP32[i9 >> 2] | 0;
     do {
      if ((i42 | 0) == 0) {
       i43 = 30;
      } else {
       i44 = i42 + 8 | 0;
       i45 = i44 | 0;
       i46 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
       HEAP32[i45 >> 2] = i46;
       if ((i46 | 0) >= 1) {
        i43 = 30;
        break;
       }
       if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
        i43 = 30;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
       if (!i41) {
        break L30;
       }
      }
     } while (0);
     if ((i43 | 0) == 30) {
      if (!i41) {
       break;
      }
     }
     __ZNK7WebCore8Position8previousENS_16PositionMoveTypeE(i12, i4, 0);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i11, i12, 1);
     __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i10, i11, 1);
     i42 = i10 | 0;
     i44 = HEAP32[i42 >> 2] | 0;
     if ((i44 | 0) != 0) {
      i46 = i44 + 8 | 0;
      HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
     }
     i46 = HEAP32[i10 + 4 >> 2] | 0;
     i45 = HEAP32[i10 + 8 >> 2] | 0;
     i47 = i45 & 8;
     i48 = HEAP32[i32 >> 2] | 0;
     HEAP32[i32 >> 2] = i44;
     do {
      if ((i48 | 0) != 0) {
       i44 = i48 + 8 | 0;
       i49 = i44 | 0;
       i50 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
       HEAP32[i49 >> 2] = i50;
       if ((i50 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
      }
     } while (0);
     HEAP32[i33 >> 2] = i46;
     i48 = HEAP32[i29 >> 2] & -8 | i45 & 7;
     HEAP32[i29 >> 2] = i48;
     HEAP8[i30] = i48 & 255 & -9 | i47;
     i48 = HEAP32[i42 >> 2] | 0;
     do {
      if ((i48 | 0) != 0) {
       i44 = i48 + 8 | 0;
       i50 = i44 | 0;
       i49 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
       HEAP32[i50 >> 2] = i49;
       if ((i49 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
      }
     } while (0);
     i48 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i48 | 0) != 0) {
       i42 = i48 + 8 | 0;
       i47 = i42 | 0;
       i45 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
       HEAP32[i47 >> 2] = i45;
       if ((i45 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
      }
     } while (0);
     i48 = HEAP32[i12 >> 2] | 0;
     if ((i48 | 0) == 0) {
      break;
     }
     i42 = i48 + 8 | 0;
     i48 = i42 | 0;
     i45 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
     HEAP32[i48 >> 2] = i45;
     if ((i45 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
    }
   } while (0);
   if (((HEAP32[i31 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0) {
    i38 = i39;
    break;
   }
   i36 = HEAP32[i33 >> 2] | 0;
   if ((i36 | 0) <= 0) {
    i38 = i39;
    break;
   }
   i42 = __ZNK7WebCore8Position13containerTextEv(i3) | 0;
   i45 = i13 | 0;
   HEAP32[i45 >> 2] = i42;
   i48 = (i42 | 0) == 0;
   if (!i48) {
    i47 = i42 + 8 | 0;
    HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
   }
   __ZN7WebCore20CompositeEditCommand13splitTextNodeEN3WTF10PassRefPtrINS_4TextEEEj(i1 | 0, i13, i36);
   i47 = HEAP32[i45 >> 2] | 0;
   do {
    if ((i47 | 0) != 0) {
     i45 = i47 + 8 | 0;
     i46 = i45 | 0;
     i44 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
     HEAP32[i46 >> 2] = i44;
     if ((i44 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i14, i42 | 0);
   i47 = i14 | 0;
   i31 = HEAP32[i47 >> 2] | 0;
   HEAP32[i47 >> 2] = 0;
   i45 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i31;
   do {
    if ((i45 | 0) != 0) {
     i31 = i45 + 8 | 0;
     i44 = i31 | 0;
     i46 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
     HEAP32[i44 >> 2] = i46;
     if ((i46 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
    }
   } while (0);
   HEAP32[i33 >> 2] = HEAP32[i14 + 4 >> 2];
   i45 = HEAP32[i14 + 8 >> 2] | 0;
   i31 = HEAP32[i29 >> 2] & -8 | i45 & 7;
   HEAP32[i29 >> 2] = i31;
   HEAP8[i30] = i31 & 255 & -9 | i45 & 8;
   i45 = HEAP32[i47 >> 2] | 0;
   do {
    if ((i45 | 0) != 0) {
     i31 = i45 + 8 | 0;
     i46 = i31 | 0;
     i44 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
     HEAP32[i46 >> 2] = i44;
     if ((i44 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
    }
   } while (0);
   do {
    if (i39) {
     i45 = i16 | 0;
     HEAP32[i45 >> 2] = i42;
     if (!i48) {
      i47 = i42 + 8 | 0;
      HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
     }
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i15, i16, (HEAP32[i34 >> 2] | 0) - i36 | 0);
     i47 = i15 | 0;
     i31 = HEAP32[i47 >> 2] | 0;
     HEAP32[i47 >> 2] = 0;
     i44 = HEAP32[i35 >> 2] | 0;
     HEAP32[i35 >> 2] = i31;
     do {
      if ((i44 | 0) != 0) {
       i31 = i44 + 8 | 0;
       i46 = i31 | 0;
       i49 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
       HEAP32[i46 >> 2] = i49;
       if ((i49 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
      }
     } while (0);
     HEAP32[i34 >> 2] = HEAP32[i15 + 4 >> 2];
     i44 = HEAP32[i15 + 8 >> 2] | 0;
     i31 = HEAP32[i8 >> 2] & -8 | i44 & 7;
     HEAP32[i8 >> 2] = i31;
     HEAP8[i28] = i31 & 255 & -9 | i44 & 8;
     i44 = HEAP32[i47 >> 2] | 0;
     do {
      if ((i44 | 0) != 0) {
       i31 = i44 + 8 | 0;
       i49 = i31 | 0;
       i46 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
       HEAP32[i49 >> 2] = i46;
       if ((i46 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
      }
     } while (0);
     i44 = HEAP32[i45 >> 2] | 0;
     if ((i44 | 0) == 0) {
      break;
     }
     i47 = i44 + 8 | 0;
     i44 = i47 | 0;
     i31 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
     HEAP32[i44 >> 2] = i31;
     if ((i31 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
    }
   } while (0);
   if (!i40) {
    i38 = i39;
    break;
   }
   i47 = i18 | 0;
   HEAP32[i47 >> 2] = i42;
   if (!i48) {
    i31 = i42 + 8 | 0;
    HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
   }
   i31 = i1 + 164 | 0;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i17, i18, (HEAP32[i31 >> 2] | 0) - i36 | 0);
   i44 = i17 | 0;
   i46 = HEAP32[i44 >> 2] | 0;
   HEAP32[i44 >> 2] = 0;
   i49 = i37 | 0;
   i50 = HEAP32[i49 >> 2] | 0;
   HEAP32[i49 >> 2] = i46;
   do {
    if ((i50 | 0) != 0) {
     i46 = i50 + 8 | 0;
     i49 = i46 | 0;
     i51 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
     HEAP32[i49 >> 2] = i51;
     if ((i51 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
    }
   } while (0);
   HEAP32[i31 >> 2] = HEAP32[i17 + 4 >> 2];
   i50 = HEAP32[i17 + 8 >> 2] | 0;
   i37 = i1 + 168 | 0;
   i36 = i37;
   i42 = HEAP32[i36 >> 2] & -8 | i50 & 7;
   HEAP32[i36 >> 2] = i42;
   HEAP8[i37] = i42 & 255 & -9 | i50 & 8;
   i50 = HEAP32[i44 >> 2] | 0;
   do {
    if ((i50 | 0) != 0) {
     i42 = i50 + 8 | 0;
     i37 = i42 | 0;
     i36 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
     HEAP32[i37 >> 2] = i36;
     if ((i36 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
    }
   } while (0);
   i50 = HEAP32[i47 >> 2] | 0;
   if ((i50 | 0) == 0) {
    i38 = i39;
    break;
   }
   i44 = i50 + 8 | 0;
   i50 = i44 | 0;
   i31 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
   HEAP32[i50 >> 2] = i31;
   if ((i31 | 0) >= 1) {
    i38 = i39;
    break;
   }
   if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
    i38 = i39;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
   i38 = i39;
  }
 } while (0);
 i39 = __ZN7WebCore24ApplyBlockElementCommand30renderStyleOfEnclosingTextNodeERKNS_8PositionE(i1, i4) | 0;
 if ((i39 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i17 = i1 + 160 | 0;
 if ((__ZN7WebCore24ApplyBlockElementCommand30renderStyleOfEnclosingTextNodeERKNS_8PositionE(i1, i17) | 0) == 0) {
  i52 = 0;
 } else {
  i52 = (HEAP32[i35 >> 2] | 0) == (HEAP32[i17 >> 2] | 0);
 }
 i18 = i39 + 44 | 0;
 i39 = HEAP32[i18 >> 2] & 7;
 do {
  if (!((i39 | 0) == 4 | (i39 | 0) == 0)) {
   if ((HEAP32[i32 >> 2] | 0) != (HEAP32[i35 >> 2] | 0)) {
    break;
   }
   do {
    if ((HEAP8[i30] & 8) == 0) {
     i40 = HEAP32[i29 >> 2] & 7;
     if (!((i40 | 0) == 2 | (i40 | 0) == 4)) {
      i43 = 102;
      break;
     }
     i53 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i3) | 0;
    } else {
     i43 = 102;
    }
   } while (0);
   if ((i43 | 0) == 102) {
    i53 = HEAP32[i33 >> 2] | 0;
   }
   do {
    if ((HEAP8[i28] & 8) == 0) {
     i47 = HEAP32[i8 >> 2] & 7;
     if (!((i47 | 0) == 2 | (i47 | 0) == 4)) {
      i43 = 106;
      break;
     }
     i54 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i4) | 0;
    } else {
     i43 = 106;
    }
   } while (0);
   if ((i43 | 0) == 106) {
    i54 = HEAP32[i34 >> 2] | 0;
   }
   if ((i53 | 0) != (i54 | 0)) {
    break;
   }
   if (((HEAP32[i8 >> 2] ^ HEAP32[i29 >> 2]) & 7 | 0) != 0) {
    break;
   }
   i47 = HEAP32[i34 >> 2] | 0;
   i40 = __ZNK7WebCore8Position13containerNodeEv(i4) | 0;
   if ((i47 | 0) >= (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i40 >> 2] | 0) + 168 >> 2] & 31](i40) | 0)) {
    break;
   }
   i40 = HEAP32[i34 >> 2] | 0;
   __ZNK7WebCore8Position8previousENS_16PositionMoveTypeE(i19, i4, 0);
   do {
    if (__ZN7WebCoreL19isNewLineAtPositionERKNS_8PositionE(i19) | 0) {
     i47 = HEAP32[i19 >> 2] | 0;
     if ((i47 | 0) == 0) {
      break;
     }
     i15 = i47 + 8 | 0;
     i47 = i15 | 0;
     i16 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
     HEAP32[i47 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    } else {
     i15 = __ZN7WebCoreL19isNewLineAtPositionERKNS_8PositionE(i4) | 0;
     i16 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i16 | 0) != 0) {
       i47 = i16 + 8 | 0;
       i14 = i47 | 0;
       i13 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
       HEAP32[i14 >> 2] = i13;
       if ((i13 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
      }
     } while (0);
     if (!i15) {
      break;
     }
     i16 = __ZNK7WebCore8Position13containerTextEv(i4) | 0;
     i45 = i21 | 0;
     HEAP32[i45 >> 2] = i16;
     if ((i16 | 0) != 0) {
      i47 = i16 + 8 | 0;
      HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
     }
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i20, i21, i40 + 1 | 0);
     i47 = i20 | 0;
     i16 = HEAP32[i47 >> 2] | 0;
     HEAP32[i47 >> 2] = 0;
     i13 = HEAP32[i35 >> 2] | 0;
     HEAP32[i35 >> 2] = i16;
     do {
      if ((i13 | 0) != 0) {
       i16 = i13 + 8 | 0;
       i14 = i16 | 0;
       i12 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
       HEAP32[i14 >> 2] = i12;
       if ((i12 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
      }
     } while (0);
     HEAP32[i34 >> 2] = HEAP32[i20 + 4 >> 2];
     i13 = HEAP32[i20 + 8 >> 2] | 0;
     i15 = HEAP32[i8 >> 2] & -8 | i13 & 7;
     HEAP32[i8 >> 2] = i15;
     HEAP8[i28] = i15 & 255 & -9 | i13 & 8;
     i13 = HEAP32[i47 >> 2] | 0;
     do {
      if ((i13 | 0) != 0) {
       i15 = i13 + 8 | 0;
       i16 = i15 | 0;
       i12 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
       HEAP32[i16 >> 2] = i12;
       if ((i12 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
      }
     } while (0);
     i13 = HEAP32[i45 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     i47 = i13 + 8 | 0;
     i13 = i47 | 0;
     i15 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     HEAP32[i13 >> 2] = i15;
     if ((i15 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
    }
   } while (0);
   if (!i52) {
    break;
   }
   i40 = i1 + 164 | 0;
   if ((HEAP32[i34 >> 2] | 0) < (HEAP32[i40 >> 2] | 0)) {
    break;
   }
   i47 = HEAP32[i35 >> 2] | 0;
   if ((i47 | 0) != 0) {
    i15 = i47 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   }
   i15 = i17 | 0;
   i13 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = i47;
   do {
    if ((i13 | 0) != 0) {
     i47 = i13 + 8 | 0;
     i15 = i47 | 0;
     i12 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i12;
     if ((i12 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
    }
   } while (0);
   HEAP32[i40 >> 2] = HEAP32[i34 >> 2];
   i13 = i1 + 168 | 0;
   i47 = i13;
   i12 = HEAP32[i47 >> 2] & -8 | HEAP32[i8 >> 2] & 7;
   HEAP32[i47 >> 2] = i12;
   HEAP8[i13] = i12 & 255 & -9 | HEAP8[i28] & 8;
  }
 } while (0);
 if (((HEAP32[i18 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0) {
  STACKTOP = i5;
  return;
 }
 i18 = HEAP32[i34 >> 2] | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i20 = __ZNK7WebCore8Position13containerNodeEv(i4) | 0;
 if ((i18 | 0) >= (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 168 >> 2] & 31](i20) | 0)) {
  STACKTOP = i5;
  return;
 }
 i20 = __ZNK7WebCore8Position13containerTextEv(i4) | 0;
 i4 = (i20 | 0) == 0;
 if (i4) {
  i18 = i22 | 0;
  HEAP32[i18 >> 2] = 0;
  i55 = i18;
 } else {
  i18 = i20 + 8 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
  i21 = i22 | 0;
  HEAP32[i21 >> 2] = i20;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
  i55 = i21;
 }
 __ZN7WebCore20CompositeEditCommand13splitTextNodeEN3WTF10PassRefPtrINS_4TextEEEj(i1 | 0, i22, HEAP32[i34 >> 2] | 0);
 i22 = HEAP32[i55 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i55 = i22 + 8 | 0;
   i21 = i55 | 0;
   i18 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   HEAP32[i21 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
  }
 } while (0);
 do {
  if (i38) {
   i22 = HEAP32[i20 + 24 >> 2] | 0;
   do {
    if ((i22 | 0) == 0) {
     HEAP32[i23 >> 2] = 0;
     HEAP32[i23 + 4 >> 2] = 0;
     i55 = i23 + 8 | 0;
     i18 = i55;
     i21 = HEAP32[i18 >> 2] | 0;
     HEAP32[i18 >> 2] = i21 & -8;
     HEAP8[i55] = i21 & 255 & -16;
    } else {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 132 >> 2] & 31](i22) | 0) {
      __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i23, i22);
      break;
     }
     i21 = i6 | 0;
     HEAP32[i21 >> 2] = i22;
     i55 = i22 + 8 | 0;
     HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i23, i6, 1);
     i55 = HEAP32[i21 >> 2] | 0;
     if ((i55 | 0) == 0) {
      break;
     }
     i21 = i55 + 8 | 0;
     i55 = i21 | 0;
     i18 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
     HEAP32[i55 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
    }
   } while (0);
   i22 = i23 | 0;
   i40 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = 0;
   i21 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i40;
   do {
    if ((i21 | 0) != 0) {
     i40 = i21 + 8 | 0;
     i18 = i40 | 0;
     i55 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     HEAP32[i18 >> 2] = i55;
     if ((i55 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
    }
   } while (0);
   HEAP32[i33 >> 2] = HEAP32[i23 + 4 >> 2];
   i21 = HEAP32[i23 + 8 >> 2] | 0;
   i40 = HEAP32[i29 >> 2] & -8 | i21 & 7;
   HEAP32[i29 >> 2] = i40;
   HEAP8[i30] = i40 & 255 & -9 | i21 & 8;
   i21 = HEAP32[i22 >> 2] | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   i40 = i21 + 8 | 0;
   i21 = i40 | 0;
   i55 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   HEAP32[i21 >> 2] = i55;
   if ((i55 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
  }
 } while (0);
 do {
  if (i52) {
   i30 = i1 + 164 | 0;
   i29 = HEAP32[i30 >> 2] | 0;
   i23 = HEAP32[i34 >> 2] | 0;
   if ((i29 | 0) != (i23 | 0)) {
    i33 = i26 | 0;
    HEAP32[i33 >> 2] = i20;
    if (i4) {
     i56 = i29;
     i57 = i23;
    } else {
     i23 = i20 + 8 | 0;
     HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
     i56 = HEAP32[i30 >> 2] | 0;
     i57 = HEAP32[i34 >> 2] | 0;
    }
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i25, i26, i56 - i57 | 0);
    i23 = i25 | 0;
    i29 = HEAP32[i23 >> 2] | 0;
    HEAP32[i23 >> 2] = 0;
    i32 = i17 | 0;
    i6 = HEAP32[i32 >> 2] | 0;
    HEAP32[i32 >> 2] = i29;
    do {
     if ((i6 | 0) != 0) {
      i29 = i6 + 8 | 0;
      i32 = i29 | 0;
      i38 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
      HEAP32[i32 >> 2] = i38;
      if ((i38 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
     }
    } while (0);
    HEAP32[i30 >> 2] = HEAP32[i25 + 4 >> 2];
    i6 = HEAP32[i25 + 8 >> 2] | 0;
    i22 = i1 + 168 | 0;
    i29 = i22;
    i38 = HEAP32[i29 >> 2] & -8 | i6 & 7;
    HEAP32[i29 >> 2] = i38;
    HEAP8[i22] = i38 & 255 & -9 | i6 & 8;
    i6 = HEAP32[i23 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i38 = i6 + 8 | 0;
      i22 = i38 | 0;
      i29 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
      HEAP32[i22 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
     }
    } while (0);
    i6 = HEAP32[i33 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    i23 = i6 + 8 | 0;
    i6 = i23 | 0;
    i38 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
    HEAP32[i6 >> 2] = i38;
    if ((i38 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
    break;
   }
   i23 = HEAP32[i20 + 24 >> 2] | 0;
   do {
    if ((i23 | 0) == 0) {
     HEAP32[i24 >> 2] = 0;
     HEAP32[i24 + 4 >> 2] = 0;
     i38 = i24 + 8 | 0;
     i6 = i38;
     i29 = HEAP32[i6 >> 2] | 0;
     HEAP32[i6 >> 2] = i29 & -8;
     HEAP8[i38] = i29 & 255 & -16;
    } else {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i23 >> 2] | 0) + 132 >> 2] & 31](i23) | 0) {
      __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i24, i23);
      break;
     }
     i29 = i7 | 0;
     HEAP32[i29 >> 2] = i23;
     i38 = i23 + 8 | 0;
     HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i24, i7, 2);
     i38 = HEAP32[i29 >> 2] | 0;
     if ((i38 | 0) == 0) {
      break;
     }
     i29 = i38 + 8 | 0;
     i38 = i29 | 0;
     i6 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
     HEAP32[i38 >> 2] = i6;
     if ((i6 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
    }
   } while (0);
   i23 = i24 | 0;
   i33 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = 0;
   i29 = i17 | 0;
   i6 = HEAP32[i29 >> 2] | 0;
   HEAP32[i29 >> 2] = i33;
   do {
    if ((i6 | 0) != 0) {
     i33 = i6 + 8 | 0;
     i29 = i33 | 0;
     i38 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     HEAP32[i29 >> 2] = i38;
     if ((i38 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i24 + 4 >> 2];
   i6 = HEAP32[i24 + 8 >> 2] | 0;
   i33 = i1 + 168 | 0;
   i38 = i33;
   i29 = HEAP32[i38 >> 2] & -8 | i6 & 7;
   HEAP32[i38 >> 2] = i29;
   HEAP8[i33] = i29 & 255 & -9 | i6 & 8;
   i6 = HEAP32[i23 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i29 = i6 + 8 | 0;
   i6 = i29 | 0;
   i33 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i33;
   if ((i33 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i27, HEAP32[i20 + 24 >> 2] | 0);
 i1 = i27 | 0;
 i24 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i17 = HEAP32[i35 >> 2] | 0;
 HEAP32[i35 >> 2] = i24;
 do {
  if ((i17 | 0) != 0) {
   i24 = i17 + 8 | 0;
   i35 = i24 | 0;
   i7 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
   HEAP32[i35 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
  }
 } while (0);
 HEAP32[i34 >> 2] = HEAP32[i27 + 4 >> 2];
 i34 = HEAP32[i27 + 8 >> 2] | 0;
 i27 = HEAP32[i8 >> 2] & -8 | i34 & 7;
 HEAP32[i8 >> 2] = i27;
 HEAP8[i28] = i27 & 255 & -9 | i34 & 8;
 i34 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i34 | 0) != 0) {
   i1 = i34 + 8 | 0;
   i27 = i1 | 0;
   i28 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
   HEAP32[i27 >> 2] = i28;
   if ((i28 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  }
 } while (0);
 if (i4) {
  STACKTOP = i5;
  return;
 }
 i4 = i20 + 8 | 0;
 i20 = i4 | 0;
 i34 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
 HEAP32[i20 >> 2] = i34;
 if ((i34 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore24ApplyBlockElementCommand15formatSelectionERKNS_15VisiblePositionES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 344 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 48 | 0;
 i10 = i4 + 56 | 0;
 i11 = i4 + 64 | 0;
 i12 = i4 + 72 | 0;
 i13 = i4 + 80 | 0;
 i14 = i4 + 144 | 0;
 i15 = i4 + 160 | 0;
 i16 = i4 + 168 | 0;
 i17 = i4 + 184 | 0;
 i18 = i4 + 200 | 0;
 i19 = i4 + 216 | 0;
 i20 = i4 + 232 | 0;
 i21 = i4 + 248 | 0;
 i22 = i4 + 264 | 0;
 i23 = i4 + 280 | 0;
 i24 = i4 + 296 | 0;
 i25 = i4 + 312 | 0;
 i26 = i4 + 328 | 0;
 i27 = i8 | 0;
 i28 = HEAP32[i2 >> 2] | 0;
 HEAP32[i27 >> 2] = i28;
 if ((i28 | 0) == 0) {
  i29 = i8 + 8 | 0;
  i30 = 0;
  i31 = i29;
  i32 = i29;
 } else {
  i29 = i28 + 8 | 0;
  HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
  i29 = i8 + 8 | 0;
  i28 = i29;
  i30 = HEAP32[i28 >> 2] & -8;
  i31 = i29;
  i32 = i28;
 }
 HEAP32[i8 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i28 = HEAP32[i2 + 8 >> 2] | 0;
 i29 = i30 | i28 & 7;
 HEAP32[i32 >> 2] = i29;
 HEAP8[i31] = i29 & 255 & -9 | i28 & 8;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i7, i8, 1);
 i8 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i27 = i8 + 8 | 0;
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
 do {
  if (__ZN7WebCore23isAtUnsplittableElementERKNS_8PositionE(i7) | 0) {
   i8 = i1 + 8 | 0;
   __ZN7WebCore17createHTMLElementERNS_8DocumentERKNS_13QualifiedNameE(i6, HEAP32[i8 >> 2] | 0, i1 + 152 | 0);
   i27 = i6 | 0;
   i29 = HEAP32[i27 >> 2] | 0;
   HEAP32[i27 >> 2] = 0;
   i27 = i29 | 0;
   i28 = i1 + 156 | 0;
   i31 = HEAP32[i28 >> 2] | 0;
   do {
    if ((i31 | 0) != 0) {
     if ((HEAP32[i31 + 4 >> 2] | 0) == 0) {
      break;
     }
     __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i27, __ZN7WebCore9HTMLNames9styleAttrE, i28);
    }
   } while (0);
   i28 = i1 | 0;
   i27 = i9 | 0;
   HEAP32[i27 >> 2] = i29;
   i31 = (i29 | 0) == 0;
   if (!i31) {
    i32 = i29 + 8 | 0;
    HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
   }
   __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i28, i9, i7);
   i32 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i27 = i32 + 8 | 0;
     i30 = i27 | 0;
     i33 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     HEAP32[i30 >> 2] = i33;
     if ((i33 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
    }
   } while (0);
   i32 = i1 | 0;
   __ZN7WebCore18createBreakElementERNS_8DocumentE(i10, HEAP32[i8 >> 2] | 0);
   i27 = i10 | 0;
   i33 = HEAP32[i27 >> 2] | 0;
   HEAP32[i27 >> 2] = 0;
   i27 = i11 | 0;
   i30 = i33 | 0;
   HEAP32[i27 >> 2] = i30;
   i34 = (i33 | 0) == 0;
   if (!i34) {
    i35 = i33 + 8 | 0;
    HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
   }
   i35 = i12 | 0;
   HEAP32[i35 >> 2] = i29;
   if (!i31) {
    i36 = i29 + 8 | 0;
    HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
   }
   __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i28, i11, i12);
   i36 = HEAP32[i35 >> 2] | 0;
   do {
    if ((i36 | 0) != 0) {
     i35 = i36 + 8 | 0;
     i37 = i35 | 0;
     i38 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
     HEAP32[i37 >> 2] = i38;
     if ((i38 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
    }
   } while (0);
   i36 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i36 | 0) != 0) {
     i28 = i36 + 8 | 0;
     i8 = i28 | 0;
     i35 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     HEAP32[i8 >> 2] = i35;
     if ((i35 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
    }
   } while (0);
   i36 = i5 | 0;
   HEAP32[i36 >> 2] = i30;
   if (!i34) {
    i27 = i33 + 8 | 0;
    HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i14, i5, 1);
   i27 = HEAP32[i36 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i36 = i27 + 8 | 0;
     i28 = i36 | 0;
     i35 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     HEAP32[i28 >> 2] = i35;
     if ((i35 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb(i13, i14, 1, (HEAP8[i1 + 128 | 0] & 2) != 0);
   __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i32, i13);
   __ZN7WebCore16VisibleSelectionD2Ev(i13);
   i27 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i30 = i27 + 8 | 0;
     i36 = i30 | 0;
     i35 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
     HEAP32[i36 >> 2] = i35;
     if ((i35 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
    }
   } while (0);
   do {
    if (!i34) {
     i27 = i33 + 8 | 0;
     i32 = i27 | 0;
     i30 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     HEAP32[i32 >> 2] = i30;
     if ((i30 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
    }
   } while (0);
   if (i31) {
    break;
   }
   i33 = i29 + 8 | 0;
   i34 = i33 | 0;
   i27 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
   HEAP32[i34 >> 2] = i27;
   if ((i27 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
  } else {
   i33 = i15 | 0;
   HEAP32[i33 >> 2] = 0;
   __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i16, i2, 1);
   __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i19, i3, 1);
   __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i18, i19, 0);
   __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i17, i18, 1);
   i27 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i34 = i27 + 8 | 0;
     i30 = i34 | 0;
     i32 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     HEAP32[i30 >> 2] = i32;
     if ((i32 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
    }
   } while (0);
   i27 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i29 = i27 + 8 | 0;
     i31 = i29 | 0;
     i34 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     HEAP32[i31 >> 2] = i34;
     if ((i34 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
    }
   } while (0);
   i27 = i1 + 160 | 0;
   __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i20, i3, 1);
   i29 = i20 | 0;
   i34 = HEAP32[i29 >> 2] | 0;
   if ((i34 | 0) != 0) {
    i31 = i34 + 8 | 0;
    HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
   }
   i31 = HEAP32[i20 + 4 >> 2] | 0;
   i32 = HEAP32[i20 + 8 >> 2] | 0;
   i30 = i32 & 8;
   i35 = i27 | 0;
   i36 = HEAP32[i35 >> 2] | 0;
   HEAP32[i35 >> 2] = i34;
   do {
    if ((i36 | 0) != 0) {
     i34 = i36 + 8 | 0;
     i28 = i34 | 0;
     i8 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     HEAP32[i28 >> 2] = i8;
     if ((i8 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
    }
   } while (0);
   i36 = i1 + 164 | 0;
   HEAP32[i36 >> 2] = i31;
   i34 = i1 + 168 | 0;
   i8 = i34;
   i28 = HEAP32[i8 >> 2] & -8 | i32 & 7;
   HEAP32[i8 >> 2] = i28;
   HEAP8[i34] = i28 & 255 & -9 | i30;
   i28 = HEAP32[i29 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i38 = i28 + 8 | 0;
     i37 = i38 | 0;
     i39 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
     HEAP32[i37 >> 2] = i39;
     if ((i39 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
    }
   } while (0);
   i28 = i21 | 0;
   HEAP32[i28 >> 2] = 0;
   HEAP32[i21 + 4 >> 2] = 0;
   i29 = i21 + 8 | 0;
   i30 = i29;
   i32 = HEAP32[i30 >> 2] | 0;
   HEAP32[i30 >> 2] = i32 & -8;
   HEAP8[i29] = i32 & 255 & -16;
   i32 = i22 | 0;
   i29 = i16 | 0;
   i30 = i22 + 4 | 0;
   i31 = i16 + 4 | 0;
   i38 = i16 + 8 | 0;
   i39 = i38;
   i37 = i22 + 8 | 0;
   i40 = i37;
   i41 = i23 | 0;
   i42 = i23 + 4 | 0;
   i43 = i23 + 8 | 0;
   i44 = i23 + 12 | 0;
   i45 = i16 + 12 | 0;
   i46 = i1;
   i47 = i17 | 0;
   i48 = i25 | 0;
   i49 = i25 + 4 | 0;
   i50 = i25 + 8 | 0;
   i51 = i25 + 12 | 0;
   i52 = i24 | 0;
   i53 = i26 | 0;
   i54 = i26 + 4 | 0;
   i55 = i26 + 8 | 0;
   i56 = i55;
   i57 = 0;
   while (1) {
    if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i16, i17) | 0 | i57) {
     break;
    }
    i58 = HEAP32[i29 >> 2] | 0;
    HEAP32[i32 >> 2] = i58;
    if ((i58 | 0) == 0) {
     i59 = 0;
    } else {
     i60 = i58 + 8 | 0;
     HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
     i59 = HEAP32[i32 >> 2] | 0;
    }
    i60 = HEAP32[i31 >> 2] | 0;
    HEAP32[i30 >> 2] = i60;
    i58 = HEAP32[i39 >> 2] | 0;
    i61 = HEAP32[i40 >> 2] & -8 | i58 & 7;
    HEAP32[i40 >> 2] = i61;
    i62 = i58 & 8;
    HEAP8[i37] = i61 & 255 & -9 | i62;
    if ((i59 | 0) == (HEAP32[i35 >> 2] | 0)) {
     do {
      if (i62 << 24 >> 24 == 0) {
       i61 = HEAP32[i40 >> 2] & 7;
       if (!((i61 | 0) == 2 | (i61 | 0) == 4)) {
        i63 = i60;
        break;
       }
       i63 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i22) | 0;
      } else {
       i63 = i60;
      }
     } while (0);
     do {
      if ((HEAP8[i34] & 8) == 0) {
       i60 = HEAP32[i8 >> 2] & 7;
       if (!((i60 | 0) == 2 | (i60 | 0) == 4)) {
        i64 = 76;
        break;
       }
       i65 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i27) | 0;
      } else {
       i64 = 76;
      }
     } while (0);
     if ((i64 | 0) == 76) {
      i64 = 0;
      i65 = HEAP32[i36 >> 2] | 0;
     }
     if ((i63 | 0) == (i65 | 0)) {
      i66 = ((HEAP32[i8 >> 2] ^ HEAP32[i40 >> 2]) & 7 | 0) == 0;
     } else {
      i66 = 0;
     }
     i67 = i66;
     i68 = HEAP32[i32 >> 2] | 0;
    } else {
     i67 = 0;
     i68 = i59;
    }
    do {
     if ((i68 | 0) != 0) {
      i60 = i68 + 8 | 0;
      i62 = i60 | 0;
      i61 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
      HEAP32[i62 >> 2] = i61;
      if ((i61 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore24ApplyBlockElementCommand43rangeForParagraphSplittingTextNodesIfNeededERKNS_15VisiblePositionERNS_8PositionES5_(i1, i16, i7, i21);
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i23, i21, 1);
    i60 = HEAP32[i41 >> 2] | 0;
    HEAP32[i41 >> 2] = 0;
    i61 = HEAP32[i29 >> 2] | 0;
    HEAP32[i29 >> 2] = i60;
    do {
     if ((i61 | 0) != 0) {
      i60 = i61 + 8 | 0;
      i62 = i60 | 0;
      i58 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
      HEAP32[i62 >> 2] = i58;
      if ((i58 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
     }
    } while (0);
    HEAP32[i31 >> 2] = HEAP32[i42 >> 2];
    i61 = HEAP32[i43 >> 2] | 0;
    i60 = HEAP32[i39 >> 2] & -8 | i61 & 7;
    HEAP32[i39 >> 2] = i60;
    HEAP8[i38] = i60 & 255 & -9 | i61 & 8;
    HEAP32[i45 >> 2] = HEAP32[i44 >> 2];
    i61 = HEAP32[i41 >> 2] | 0;
    do {
     if ((i61 | 0) != 0) {
      i60 = i61 + 8 | 0;
      i58 = i60 | 0;
      i62 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
      HEAP32[i58 >> 2] = i62;
      if ((i62 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
     }
    } while (0);
    __ZNK7WebCore8Position4nextENS_16PositionMoveTypeE(i24, i21, 0);
    i61 = __ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i7, F_BASE_ii + 12 | 0, 1) | 0;
    __ZN7WebCore24ApplyBlockElementCommand43endOfNextParagrahSplittingTextNodesIfNeededERNS_15VisiblePositionERNS_8PositionES4_(i25, i1, i16, i7, i21);
    FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i46 >> 2] | 0) + 68 >> 2] & 1](i1, i7, i21, i27, i15);
    L122 : do {
     if ((i61 | 0) != 0) {
      i60 = HEAP32[i48 >> 2] | 0;
      HEAP32[i53 >> 2] = i60;
      if ((i60 | 0) != 0) {
       i62 = i60 + 8 | 0;
       HEAP32[i62 >> 2] = (HEAP32[i62 >> 2] | 0) + 1;
      }
      HEAP32[i54 >> 2] = HEAP32[i49 >> 2];
      i62 = HEAP32[i50 >> 2] | 0;
      i60 = HEAP32[i56 >> 2] & -8 | i62 & 7;
      HEAP32[i56 >> 2] = i60;
      HEAP8[i55] = i60 & 255 & -9 | i62 & 8;
      i62 = (i61 | 0) != (__ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i26, F_BASE_ii + 12 | 0, 1) | 0);
      i60 = HEAP32[i53 >> 2] | 0;
      do {
       if ((i60 | 0) == 0) {
        i64 = 100;
       } else {
        i58 = i60 + 8 | 0;
        i69 = i58 | 0;
        i70 = (HEAP32[i69 >> 2] | 0) - 1 | 0;
        HEAP32[i69 >> 2] = i70;
        if ((i70 | 0) >= 1) {
         i64 = 100;
         break;
        }
        if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
         i64 = 100;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
        if (!i62) {
         break L122;
        }
       }
      } while (0);
      if ((i64 | 0) == 100) {
       i64 = 0;
       if (!i62) {
        break;
       }
      }
      i60 = HEAP32[i33 >> 2] | 0;
      HEAP32[i33 >> 2] = 0;
      if ((i60 | 0) == 0) {
       break;
      }
      i58 = i60 + 8 | 0;
      i60 = i58 | 0;
      i70 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
      HEAP32[i60 >> 2] = i70;
      if ((i70 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
     }
    } while (0);
    i61 = HEAP32[i47 >> 2] | 0;
    L138 : do {
     if ((i61 | 0) == 0) {
      i64 = 110;
     } else {
      i58 = i61 + 8 | 0;
      i70 = HEAP32[i58 >> 2] | 0;
      HEAP32[i58 >> 2] = i70 + 1;
      i58 = (HEAP32[i61 + 12 >> 2] & 256 | 0) == 0;
      i60 = i61 + 8 | 0;
      i69 = i60 - 8 | 0;
      HEAP32[i60 >> 2] = i70;
      do {
       if ((i70 | 0) < 1) {
        if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i69);
        if (i58) {
         i71 = 3;
         break L138;
        } else {
         i64 = 110;
         break L138;
        }
       }
      } while (0);
      if (i58) {
       i71 = 3;
      } else {
       i64 = 110;
      }
     }
    } while (0);
    L144 : do {
     if ((i64 | 0) == 110) {
      i64 = 0;
      i61 = HEAP32[i48 >> 2] | 0;
      do {
       if ((i61 | 0) == 0) {
        i72 = 0;
       } else {
        i69 = i61 + 8 | 0;
        i60 = HEAP32[i69 >> 2] | 0;
        HEAP32[i69 >> 2] = i60 + 1;
        i69 = (HEAP32[i61 + 12 >> 2] & 256 | 0) == 0;
        i70 = i61 + 8 | 0;
        i62 = i70 - 8 | 0;
        HEAP32[i70 >> 2] = i60;
        do {
         if ((i60 | 0) < 1) {
          if ((HEAP32[i70 + 8 >> 2] | 0) != 0) {
           i64 = 114;
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i62);
          if (i69) {
           i71 = 1;
           break L144;
          }
         } else {
          i64 = 114;
         }
        } while (0);
        if ((i64 | 0) == 114) {
         i64 = 0;
         if (i69) {
          i71 = 1;
          break L144;
         }
        }
        i62 = HEAP32[i48 >> 2] | 0;
        if ((i62 | 0) == 0) {
         i72 = 0;
         break;
        }
        i70 = i62 + 8 | 0;
        HEAP32[i70 >> 2] = (HEAP32[i70 >> 2] | 0) + 1;
        i72 = i62;
       }
      } while (0);
      i61 = HEAP32[i29 >> 2] | 0;
      HEAP32[i29 >> 2] = i72;
      do {
       if ((i61 | 0) != 0) {
        i58 = i61 + 8 | 0;
        i62 = i58 | 0;
        i70 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
        HEAP32[i62 >> 2] = i70;
        if ((i70 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
       }
      } while (0);
      HEAP32[i31 >> 2] = HEAP32[i49 >> 2];
      i61 = HEAP32[i50 >> 2] | 0;
      i58 = HEAP32[i39 >> 2] & -8 | i61 & 7;
      HEAP32[i39 >> 2] = i58;
      HEAP8[i38] = i58 & 255 & -9 | i61 & 8;
      HEAP32[i45 >> 2] = HEAP32[i51 >> 2];
      i71 = 0;
     }
    } while (0);
    i61 = HEAP32[i48 >> 2] | 0;
    do {
     if ((i61 | 0) != 0) {
      i58 = i61 + 8 | 0;
      i70 = i58 | 0;
      i62 = (HEAP32[i70 >> 2] | 0) - 1 | 0;
      HEAP32[i70 >> 2] = i62;
      if ((i62 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
     }
    } while (0);
    i61 = HEAP32[i52 >> 2] | 0;
    do {
     if ((i61 | 0) != 0) {
      i58 = i61 + 8 | 0;
      i62 = i58 | 0;
      i70 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
      HEAP32[i62 >> 2] = i70;
      if ((i70 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
     }
    } while (0);
    if ((i71 | 0) == 0) {
     i57 = i67;
    } else {
     break;
    }
   }
   i57 = HEAP32[i28 >> 2] | 0;
   do {
    if ((i57 | 0) != 0) {
     i52 = i57 + 8 | 0;
     i48 = i52 | 0;
     i51 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
     HEAP32[i48 >> 2] = i51;
     if ((i51 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
    }
   } while (0);
   i57 = HEAP32[i47 >> 2] | 0;
   do {
    if ((i57 | 0) != 0) {
     i28 = i57 + 8 | 0;
     i52 = i28 | 0;
     i51 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
     HEAP32[i52 >> 2] = i51;
     if ((i51 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
    }
   } while (0);
   i57 = HEAP32[i29 >> 2] | 0;
   do {
    if ((i57 | 0) != 0) {
     i47 = i57 + 8 | 0;
     i28 = i47 | 0;
     i51 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     HEAP32[i28 >> 2] = i51;
     if ((i51 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
    }
   } while (0);
   i57 = HEAP32[i33 >> 2] | 0;
   if ((i57 | 0) == 0) {
    break;
   }
   i29 = i57 + 8 | 0;
   i57 = i29 | 0;
   i47 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
   HEAP32[i57 >> 2] = i47;
   if ((i47 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
  }
 } while (0);
 i67 = HEAP32[i7 >> 2] | 0;
 if ((i67 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i67 + 8 | 0;
 i67 = i7 | 0;
 i71 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
 HEAP32[i67 >> 2] = i71;
 if ((i71 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore24ApplyBlockElementCommand43endOfNextParagrahSplittingTextNodesIfNeededERNS_15VisiblePositionERNS_8PositionES4_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 32 | 0;
 i10 = i6 + 48 | 0;
 i11 = i6 + 64 | 0;
 i12 = i6 + 72 | 0;
 i13 = i6 + 88 | 0;
 i14 = i6 + 96 | 0;
 i15 = i6 + 112 | 0;
 i16 = i6 + 120 | 0;
 i17 = i6 + 136 | 0;
 i18 = i6 + 144 | 0;
 i19 = i6 + 160 | 0;
 i20 = i6 + 168 | 0;
 i21 = i6 + 184 | 0;
 __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i8, i3, 0);
 __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i7, i8, 1);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 + 8 | 0;
   i22 = i8 | 0;
   i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   HEAP32[i22 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i3 = i9 | 0;
 i8 = i7 | 0;
 i23 = HEAP32[i8 >> 2] | 0;
 HEAP32[i3 >> 2] = i23;
 if ((i23 | 0) != 0) {
  i22 = i23 + 8 | 0;
  HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
 }
 i22 = i9 + 4 | 0;
 i23 = i7 + 4 | 0;
 HEAP32[i22 >> 2] = HEAP32[i23 >> 2];
 i24 = i7 + 8 | 0;
 i25 = HEAP32[i24 >> 2] | 0;
 i26 = i9 + 8 | 0;
 i27 = i26;
 i28 = HEAP32[i27 >> 2] & -8 | i25 & 7;
 HEAP32[i27 >> 2] = i28;
 HEAP8[i26] = i28 & 255 & -9 | i25 & 8;
 i25 = __ZN7WebCore24ApplyBlockElementCommand30renderStyleOfEnclosingTextNodeERKNS_8PositionE(i2, i9) | 0;
 do {
  if ((i25 | 0) == 0) {
   i28 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i1 >> 2] = i28;
   HEAP32[i1 + 4 >> 2] = HEAP32[i23 >> 2];
   i28 = HEAP32[i24 >> 2] | 0;
   i26 = i1 + 8 | 0;
   i27 = i26;
   i29 = HEAP32[i27 >> 2] & -8 | i28 & 7;
   HEAP32[i27 >> 2] = i29;
   HEAP8[i26] = i29 & 255 & -9 | i28 & 8;
   HEAP32[i1 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
  } else {
   i28 = __ZNK7WebCore8Position13containerTextEv(i9) | 0;
   i29 = (i28 | 0) == 0;
   if (!i29) {
    i26 = i28 + 8 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
   }
   i26 = HEAP32[i25 + 44 >> 2] & 7;
   L15 : do {
    if ((i26 | 0) == 4 | (i26 | 0) == 0) {
     i30 = 18;
    } else {
     if ((HEAP32[i22 >> 2] | 0) == 0) {
      i30 = 18;
      break;
     }
     i27 = i28 | 0;
     __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i10, i27);
     i31 = __ZN7WebCoreL19isNewLineAtPositionERKNS_8PositionE(i10) | 0;
     i32 = HEAP32[i10 >> 2] | 0;
     do {
      if ((i32 | 0) == 0) {
       i30 = 17;
      } else {
       i33 = i32 + 8 | 0;
       i34 = i33 | 0;
       i35 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
       HEAP32[i34 >> 2] = i35;
       if ((i35 | 0) >= 1) {
        i30 = 17;
        break;
       }
       if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
        i30 = 17;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
       if (!i31) {
        i30 = 18;
        break L15;
       }
      }
     } while (0);
     if ((i30 | 0) == 17) {
      if (!i31) {
       i30 = 18;
       break;
      }
     }
     i32 = i11 | 0;
     HEAP32[i32 >> 2] = i28;
     if (!i29) {
      i33 = i28 + 8 | 0;
      HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand13splitTextNodeEN3WTF10PassRefPtrINS_4TextEEEj(i2 | 0, i11, 1);
     i33 = HEAP32[i32 >> 2] | 0;
     do {
      if ((i33 | 0) != 0) {
       i32 = i33 + 8 | 0;
       i35 = i32 | 0;
       i34 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
       HEAP32[i35 >> 2] = i34;
       if ((i34 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
      }
     } while (0);
     do {
      if ((i27 | 0) == (__ZNK7WebCore8Position13containerNodeEv(i4) | 0)) {
       i33 = HEAP32[i28 + 24 >> 2] | 0;
       if ((i33 | 0) == 0) {
        break;
       }
       if ((HEAP32[i33 + 12 >> 2] & 1 | 0) == 0) {
        break;
       }
       i31 = i13 | 0;
       HEAP32[i31 >> 2] = i33;
       i32 = i33 + 8 | 0;
       HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
       i32 = i4 + 4 | 0;
       __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i12, i13, HEAP32[i32 >> 2] | 0);
       i33 = i12 | 0;
       i34 = HEAP32[i33 >> 2] | 0;
       HEAP32[i33 >> 2] = 0;
       i35 = i4 | 0;
       i36 = HEAP32[i35 >> 2] | 0;
       HEAP32[i35 >> 2] = i34;
       do {
        if ((i36 | 0) != 0) {
         i34 = i36 + 8 | 0;
         i35 = i34 | 0;
         i37 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
         HEAP32[i35 >> 2] = i37;
         if ((i37 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
        }
       } while (0);
       HEAP32[i32 >> 2] = HEAP32[i12 + 4 >> 2];
       i36 = HEAP32[i12 + 8 >> 2] | 0;
       i34 = i4 + 8 | 0;
       i37 = i34;
       i35 = HEAP32[i37 >> 2] & -8 | i36 & 7;
       HEAP32[i37 >> 2] = i35;
       HEAP8[i34] = i35 & 255 & -9 | i36 & 8;
       i36 = HEAP32[i33 >> 2] | 0;
       do {
        if ((i36 | 0) != 0) {
         i35 = i36 + 8 | 0;
         i34 = i35 | 0;
         i37 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
         HEAP32[i34 >> 2] = i37;
         if ((i37 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
        }
       } while (0);
       i36 = HEAP32[i31 >> 2] | 0;
       if ((i36 | 0) == 0) {
        break;
       }
       i33 = i36 + 8 | 0;
       i36 = i33 | 0;
       i32 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
       HEAP32[i36 >> 2] = i32;
       if ((i32 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
      }
     } while (0);
     do {
      if ((i27 | 0) == (__ZNK7WebCore8Position13containerNodeEv(i5) | 0)) {
       i33 = HEAP32[i28 + 24 >> 2] | 0;
       if ((i33 | 0) == 0) {
        break;
       }
       if ((HEAP32[i33 + 12 >> 2] & 1 | 0) == 0) {
        break;
       }
       i32 = i15 | 0;
       HEAP32[i32 >> 2] = i33;
       i36 = i33 + 8 | 0;
       HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
       i36 = i5 + 4 | 0;
       __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i14, i15, HEAP32[i36 >> 2] | 0);
       i33 = i14 | 0;
       i35 = HEAP32[i33 >> 2] | 0;
       HEAP32[i33 >> 2] = 0;
       i37 = i5 | 0;
       i34 = HEAP32[i37 >> 2] | 0;
       HEAP32[i37 >> 2] = i35;
       do {
        if ((i34 | 0) != 0) {
         i35 = i34 + 8 | 0;
         i37 = i35 | 0;
         i38 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
         HEAP32[i37 >> 2] = i38;
         if ((i38 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
        }
       } while (0);
       HEAP32[i36 >> 2] = HEAP32[i14 + 4 >> 2];
       i34 = HEAP32[i14 + 8 >> 2] | 0;
       i31 = i5 + 8 | 0;
       i35 = i31;
       i38 = HEAP32[i35 >> 2] & -8 | i34 & 7;
       HEAP32[i35 >> 2] = i38;
       HEAP8[i31] = i38 & 255 & -9 | i34 & 8;
       i34 = HEAP32[i33 >> 2] | 0;
       do {
        if ((i34 | 0) != 0) {
         i38 = i34 + 8 | 0;
         i31 = i38 | 0;
         i35 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
         HEAP32[i31 >> 2] = i35;
         if ((i35 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
        }
       } while (0);
       i34 = HEAP32[i32 >> 2] | 0;
       if ((i34 | 0) == 0) {
        break;
       }
       i33 = i34 + 8 | 0;
       i34 = i33 | 0;
       i36 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
       HEAP32[i34 >> 2] = i36;
       if ((i36 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
      }
     } while (0);
     i33 = i2 + 160 | 0;
     do {
      if ((i27 | 0) == (__ZNK7WebCore8Position13containerNodeEv(i33) | 0)) {
       i36 = i2 + 164 | 0;
       i34 = HEAP32[i36 >> 2] | 0;
       if ((i34 | 0) >= (HEAP32[i22 >> 2] | 0)) {
        i38 = i19 | 0;
        HEAP32[i38 >> 2] = i28;
        if (i29) {
         i39 = i34;
        } else {
         i35 = i28 + 8 | 0;
         HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
         i39 = HEAP32[i36 >> 2] | 0;
        }
        __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i18, i19, i39 - 1 | 0);
        i35 = i18 | 0;
        i31 = HEAP32[i35 >> 2] | 0;
        HEAP32[i35 >> 2] = 0;
        i37 = i33 | 0;
        i40 = HEAP32[i37 >> 2] | 0;
        HEAP32[i37 >> 2] = i31;
        do {
         if ((i40 | 0) != 0) {
          i31 = i40 + 8 | 0;
          i37 = i31 | 0;
          i41 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
          HEAP32[i37 >> 2] = i41;
          if ((i41 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
         }
        } while (0);
        HEAP32[i36 >> 2] = HEAP32[i18 + 4 >> 2];
        i40 = HEAP32[i18 + 8 >> 2] | 0;
        i32 = i2 + 168 | 0;
        i31 = i32;
        i41 = HEAP32[i31 >> 2] & -8 | i40 & 7;
        HEAP32[i31 >> 2] = i41;
        HEAP8[i32] = i41 & 255 & -9 | i40 & 8;
        i40 = HEAP32[i35 >> 2] | 0;
        do {
         if ((i40 | 0) != 0) {
          i41 = i40 + 8 | 0;
          i32 = i41 | 0;
          i31 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
          HEAP32[i32 >> 2] = i31;
          if ((i31 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
         }
        } while (0);
        i40 = HEAP32[i38 >> 2] | 0;
        if ((i40 | 0) == 0) {
         break;
        }
        i35 = i40 + 8 | 0;
        i40 = i35 | 0;
        i41 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
        HEAP32[i40 >> 2] = i41;
        if ((i41 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
        break;
       }
       i35 = HEAP32[i28 + 24 >> 2] | 0;
       if ((HEAP32[i35 + 12 >> 2] & 1 | 0) == 0) {
        break;
       }
       i41 = HEAP32[i35 + 36 >> 2] | 0;
       if ((i41 | 0) == 0) {
        i42 = 0;
       } else {
        i42 = HEAP32[i41 + 4 >> 2] | 0;
       }
       if (i34 >>> 0 > i42 >>> 0) {
        break;
       }
       i41 = i17 | 0;
       HEAP32[i41 >> 2] = i35;
       if ((i35 | 0) == 0) {
        i43 = i34;
       } else {
        i40 = i35 + 8 | 0;
        HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 1;
        i43 = HEAP32[i36 >> 2] | 0;
       }
       __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i16, i17, i43);
       i40 = i16 | 0;
       i35 = HEAP32[i40 >> 2] | 0;
       HEAP32[i40 >> 2] = 0;
       i31 = i33 | 0;
       i32 = HEAP32[i31 >> 2] | 0;
       HEAP32[i31 >> 2] = i35;
       do {
        if ((i32 | 0) != 0) {
         i35 = i32 + 8 | 0;
         i31 = i35 | 0;
         i37 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
         HEAP32[i31 >> 2] = i37;
         if ((i37 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
        }
       } while (0);
       HEAP32[i36 >> 2] = HEAP32[i16 + 4 >> 2];
       i32 = HEAP32[i16 + 8 >> 2] | 0;
       i34 = i2 + 168 | 0;
       i38 = i34;
       i35 = HEAP32[i38 >> 2] & -8 | i32 & 7;
       HEAP32[i38 >> 2] = i35;
       HEAP8[i34] = i35 & 255 & -9 | i32 & 8;
       i32 = HEAP32[i40 >> 2] | 0;
       do {
        if ((i32 | 0) != 0) {
         i35 = i32 + 8 | 0;
         i34 = i35 | 0;
         i38 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
         HEAP32[i34 >> 2] = i38;
         if ((i38 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
        }
       } while (0);
       i32 = HEAP32[i41 >> 2] | 0;
       if ((i32 | 0) == 0) {
        break;
       }
       i40 = i32 + 8 | 0;
       i32 = i40 | 0;
       i36 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
       HEAP32[i32 >> 2] = i36;
       if ((i36 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
      }
     } while (0);
     i33 = i21 | 0;
     HEAP32[i33 >> 2] = i28;
     if (!i29) {
      i27 = i28 + 8 | 0;
      HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
     }
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i20, i21, (HEAP32[i22 >> 2] | 0) - 1 | 0);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i20, 1);
     i27 = HEAP32[i20 >> 2] | 0;
     do {
      if ((i27 | 0) != 0) {
       i40 = i27 + 8 | 0;
       i36 = i40 | 0;
       i32 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
       HEAP32[i36 >> 2] = i32;
       if ((i32 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
      }
     } while (0);
     i27 = HEAP32[i33 >> 2] | 0;
     if ((i27 | 0) == 0) {
      break;
     }
     i40 = i27 + 8 | 0;
     i27 = i40 | 0;
     i32 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     HEAP32[i27 >> 2] = i32;
     if ((i32 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
    }
   } while (0);
   if ((i30 | 0) == 18) {
    i26 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = 0;
    HEAP32[i1 >> 2] = i26;
    HEAP32[i1 + 4 >> 2] = HEAP32[i23 >> 2];
    i26 = HEAP32[i24 >> 2] | 0;
    i40 = i1 + 8 | 0;
    i32 = i40;
    i27 = HEAP32[i32 >> 2] & -8 | i26 & 7;
    HEAP32[i32 >> 2] = i27;
    HEAP8[i40] = i27 & 255 & -9 | i26 & 8;
    HEAP32[i1 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
   }
   if (i29) {
    break;
   }
   i26 = i28 + 8 | 0;
   i27 = i26 | 0;
   i40 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
   HEAP32[i27 >> 2] = i40;
   if ((i40 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i3 = i7 + 8 | 0;
   i1 = i3 | 0;
   i24 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i24;
   if ((i24 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i8 = i7 + 8 | 0;
 i7 = i8 | 0;
 i3 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore24ApplyBlockElementCommand7doApplyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 320 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 96 | 0;
 i7 = i2 + 112 | 0;
 i8 = i2 + 176 | 0;
 i9 = i2 + 192 | 0;
 i10 = i2 + 208 | 0;
 i11 = i2 + 216 | 0;
 i12 = i2 + 224 | 0;
 i13 = i2 + 240 | 0;
 i14 = i2 + 256 | 0;
 i15 = i1 | 0;
 i16 = i1 + 72 | 0;
 if ((__ZNK7WebCore16VisibleSelection19rootEditableElementEv(i16) | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i17 = i1 + 124 | 0;
 if ((HEAP32[i17 >> 2] | 0) == 2) {
  i18 = 0;
 } else {
  i18 = HEAP32[i1 + 120 >> 2] | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i3, i1 + 108 | 0, i18);
 if ((HEAP32[i17 >> 2] | 0) == 2) {
  i19 = 1;
 } else {
  i19 = HEAP32[i1 + 120 >> 2] | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i1 + 96 | 0, i19);
 i19 = i4 | 0;
 i17 = HEAP32[i19 >> 2] | 0;
 L10 : do {
  if ((i17 | 0) != 0) {
   do {
    if ((HEAP32[i17 + 12 >> 2] & 256 | 0) == 0) {
     i20 = i17;
    } else {
     i18 = HEAP32[i3 >> 2] | 0;
     if ((i18 | 0) == 0) {
      i20 = i17;
      break;
     }
     if ((HEAP32[i18 + 12 >> 2] & 256 | 0) == 0) {
      i20 = i17;
      break;
     }
     do {
      if (!(__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i3, i4) | 0)) {
       if (!(__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i3, 1) | 0)) {
        break;
       }
       __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i6, i3, 1);
       __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b(i5, i4, i6, (HEAP8[i1 + 128 | 0] & 2) != 0);
       __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i15, i5);
       __ZN7WebCore16VisibleSelectionD2Ev(i5);
       i18 = HEAP32[i6 >> 2] | 0;
       if ((i18 | 0) == 0) {
        break;
       }
       i21 = i18 + 8 | 0;
       i18 = i21 | 0;
       i22 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
       HEAP32[i18 >> 2] = i22;
       if ((i22 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore30selectionForParagraphIterationERKNS_16VisibleSelectionE(i7, i16);
     i21 = i7 + 52 | 0;
     if ((HEAP32[i21 >> 2] | 0) == 2) {
      i23 = 1;
     } else {
      i23 = HEAP32[i7 + 48 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i7 + 24 | 0, i23);
     if ((HEAP32[i21 >> 2] | 0) == 2) {
      i24 = 0;
     } else {
      i24 = HEAP32[i7 + 48 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i9, i7 + 36 | 0, i24);
     i21 = i10 | 0;
     HEAP32[i21 >> 2] = 0;
     i22 = __ZN7WebCore23indexForVisiblePositionERKNS_15VisiblePositionERN3WTF6RefPtrINS_13ContainerNodeEEE(i8, i10) | 0;
     i18 = i11 | 0;
     HEAP32[i18 >> 2] = 0;
     i25 = __ZN7WebCore23indexForVisiblePositionERKNS_15VisiblePositionERN3WTF6RefPtrINS_13ContainerNodeEEE(i9, i11) | 0;
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 64 >> 2] & 7](i1, i8, i9);
     __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i1 + 8 >> 2] | 0);
     i26 = HEAP32[i21 >> 2] | 0;
     do {
      if (!((i22 | 0) < 0 | (i26 | 0) != (HEAP32[i18 >> 2] | 0) | (i22 | 0) > (i25 | 0))) {
       __ZN7WebCore23visiblePositionForIndexEiPNS_13ContainerNodeE(i12, i22, i26);
       __ZN7WebCore23visiblePositionForIndexEiPNS_13ContainerNodeE(i13, i25, HEAP32[i18 >> 2] | 0);
       i27 = i12 | 0;
       i28 = i13 | 0;
       do {
        if ((HEAP32[i27 >> 2] | 0) != 0) {
         if ((HEAP32[i28 >> 2] | 0) == 0) {
          break;
         }
         __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b(i14, i12, i13, (HEAP8[i1 + 128 | 0] & 2) != 0);
         __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i15, i14);
         __ZN7WebCore16VisibleSelectionD2Ev(i14);
        }
       } while (0);
       i29 = HEAP32[i28 >> 2] | 0;
       do {
        if ((i29 | 0) != 0) {
         i30 = i29 + 8 | 0;
         i31 = i30 | 0;
         i32 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
         HEAP32[i31 >> 2] = i32;
         if ((i32 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
        }
       } while (0);
       i29 = HEAP32[i27 >> 2] | 0;
       if ((i29 | 0) == 0) {
        break;
       }
       i28 = i29 + 8 | 0;
       i29 = i28 | 0;
       i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
       HEAP32[i29 >> 2] = i30;
       if ((i30 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
      }
     } while (0);
     i25 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i25 | 0) != 0) {
       i26 = i25 + 8 | 0;
       i22 = i26 | 0;
       i28 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       HEAP32[i22 >> 2] = i28;
       if ((i28 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
      }
     } while (0);
     i25 = HEAP32[i21 >> 2] | 0;
     do {
      if ((i25 | 0) != 0) {
       i18 = i25 + 8 | 0;
       i26 = i18 | 0;
       i28 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
       HEAP32[i26 >> 2] = i28;
       if ((i28 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
      }
     } while (0);
     i25 = HEAP32[i9 >> 2] | 0;
     do {
      if ((i25 | 0) != 0) {
       i21 = i25 + 8 | 0;
       i18 = i21 | 0;
       i28 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
       HEAP32[i18 >> 2] = i28;
       if ((i28 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
      }
     } while (0);
     i25 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i25 | 0) != 0) {
       i21 = i25 + 8 | 0;
       i28 = i21 | 0;
       i18 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
       HEAP32[i28 >> 2] = i18;
       if ((i18 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore16VisibleSelectionD2Ev(i7);
     i25 = HEAP32[i19 >> 2] | 0;
     if ((i25 | 0) == 0) {
      break L10;
     } else {
      i20 = i25;
     }
    }
   } while (0);
   i25 = i20 + 8 | 0;
   i21 = i25 | 0;
   i18 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   HEAP32[i21 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
  }
 } while (0);
 i20 = HEAP32[i3 >> 2] | 0;
 if ((i20 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i20 + 8 | 0;
 i20 = i3 | 0;
 i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
 HEAP32[i20 >> 2] = i19;
 if ((i19 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i4 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) == 0) {
  i8 = i4 + 8 | 0;
  i9 = 0;
  i10 = i8;
  i11 = i8;
 } else {
  i8 = i7 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i8 = i4 + 8 | 0;
  i7 = i8;
  i9 = HEAP32[i7 >> 2] & -8;
  i10 = i8;
  i11 = i7;
 }
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i1 + 4 >> 2];
 i8 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i9 | i8 & 7;
 HEAP32[i11 >> 2] = i1;
 HEAP8[i10] = i1 & 255 & -9 | i8 & 8;
 i8 = i5 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i8 >> 2] = i1;
 if ((i1 | 0) == 0) {
  i12 = 0;
 } else {
  i9 = i1 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i12 = HEAP32[i8 >> 2] | 0;
 }
 i9 = i5 + 4 | 0;
 HEAP32[i9 >> 2] = HEAP32[i2 + 4 >> 2];
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i5 + 8 | 0;
 i13 = i2;
 i14 = HEAP32[i13 >> 2] & -8 | i1 & 7;
 HEAP32[i13 >> 2] = i14;
 i15 = i14 & 255 & -9 | i1 & 8;
 HEAP8[i2] = i15;
 if ((HEAP32[i6 >> 2] | 0) == (i12 | 0)) {
  do {
   if ((HEAP8[i10] & 8) == 0) {
    i1 = HEAP32[i11 >> 2] & 7;
    if (!((i1 | 0) == 2 | (i1 | 0) == 4)) {
     i16 = 9;
     break;
    }
    i1 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i4) | 0;
    i17 = i1;
    i18 = HEAP8[i2] | 0;
   } else {
    i16 = 9;
   }
  } while (0);
  if ((i16 | 0) == 9) {
   i17 = HEAP32[i7 >> 2] | 0;
   i18 = i15;
  }
  do {
   if ((i18 & 8) == 0) {
    i15 = HEAP32[i13 >> 2] & 7;
    if (!((i15 | 0) == 2 | (i15 | 0) == 4)) {
     i16 = 13;
     break;
    }
    i19 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i5) | 0;
   } else {
    i16 = 13;
   }
  } while (0);
  if ((i16 | 0) == 13) {
   i19 = HEAP32[i9 >> 2] | 0;
  }
  if ((i17 | 0) == (i19 | 0)) {
   i20 = ((HEAP32[i13 >> 2] ^ HEAP32[i11 >> 2]) & 7 | 0) == 0;
  } else {
   i20 = 0;
  }
  i21 = i20;
  i22 = HEAP32[i8 >> 2] | 0;
 } else {
  i21 = 0;
  i22 = i12;
 }
 do {
  if ((i22 | 0) != 0) {
   i12 = i22 + 8 | 0;
   i8 = i12 | 0;
   i20 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i22 = HEAP32[i6 >> 2] | 0;
 if ((i22 | 0) == 0) {
  STACKTOP = i3;
  return i21 | 0;
 }
 i6 = i22 + 8 | 0;
 i22 = i6 | 0;
 i12 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
 HEAP32[i22 >> 2] = i12;
 if ((i12 | 0) >= 1) {
  STACKTOP = i3;
  return i21 | 0;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i21 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 STACKTOP = i3;
 return i21 | 0;
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
function __ZN7WebCoreL19isNewLineAtPositionERKNS_8PositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = __ZNK7WebCore8Position13containerNodeEv(i1) | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((HEAP32[i5 + 12 >> 2] & 1 | 0) == 0 | (i6 | 0) < 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((i6 | 0) >= (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 168 >> 2] & 31](i5) | 0)) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore13CharacterData13substringDataEjjRi(i4, i5, i6, 1, i3);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  do {
   if ((i6 | 0) == 0) {
    i8 = 0;
   } else {
    if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
     i8 = 0;
     break;
    }
    i3 = i6 + 8 | 0;
    if ((HEAP32[i6 + 16 >> 2] & 32 | 0) == 0) {
     i8 = HEAP16[HEAP32[i3 >> 2] >> 1] | 0;
     break;
    } else {
     i8 = HEAPU8[HEAP32[i3 >> 2] | 0] | 0;
     break;
    }
   }
  } while (0);
  i9 = i8 << 16 >> 16 == 10;
 } else {
  i9 = 0;
 }
 if ((i6 | 0) == 0) {
  i7 = i9;
  STACKTOP = i2;
  return i7 | 0;
 }
 i8 = i6 | 0;
 i3 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  i7 = i9;
  STACKTOP = i2;
  return i7 | 0;
 } else {
  HEAP32[i8 >> 2] = i3;
  i7 = i9;
  STACKTOP = i2;
  return i7 | 0;
 }
 return 0;
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
function __ZN7WebCore24ApplyBlockElementCommand30renderStyleOfEnclosingTextNodeERKNS_8PositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((HEAP32[i2 + 8 >> 2] & 7 | 0) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((__ZNK7WebCore8Position13containerNodeEv(i2) | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(__ZNK7WebCore8Position13containerNodeEv(i2) | 0) + 12 >> 2] & 1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[i1 + 8 >> 2] | 0);
 i1 = __ZNK7WebCore8Position13containerNodeEv(i2) | 0;
 i2 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i4 = i2 | 0;
 } else {
  i4 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 20 >> 2] & 768 | 0) == 256) {
  i3 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
  return i3 | 0;
 } else {
  i3 = HEAP32[i2 + 36 >> 2] | 0;
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore24ApplyBlockElementCommandD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 160 >> 2] | 0;
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
 i2 = HEAP32[i1 + 156 >> 2] | 0;
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
 __ZN7WebCore13QualifiedNameD1Ev(i1 + 152 | 0);
 __ZN7WebCore20CompositeEditCommandD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore24ApplyBlockElementCommandD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 160 >> 2] | 0;
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
 i2 = HEAP32[i1 + 156 >> 2] | 0;
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
 __ZN7WebCore13QualifiedNameD1Ev(i1 + 152 | 0);
 __ZN7WebCore20CompositeEditCommandD2Ev(i1 | 0);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_v + 2;
}
function __ZN7WebCore24ApplyBlockElementCommandC2ERNS_8DocumentERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 152 >> 2] = i2;
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 156 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 160 >> 2] = 0;
 HEAP32[i1 + 164 >> 2] = 0;
 i4 = i1 + 168 | 0;
 i1 = i4;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i3 & -8;
 HEAP8[i4] = i3 & 255 & -16;
 return;
}
function __ZN7WebCore24ApplyBlockElementCommand18createBlockElementEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore17createHTMLElementERNS_8DocumentERKNS_13QualifiedNameE(i4, HEAP32[i2 + 8 >> 2] | 0, i2 + 152 | 0);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i4 | 0;
 i4 = i2 + 156 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i5, __ZN7WebCore9HTMLNames9styleAttrE, i4);
  }
 } while (0);
 HEAP32[i1 >> 2] = i5;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore24ApplyBlockElementCommandC2ERNS_8DocumentERKNS_13QualifiedNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 152 >> 2] = i2;
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 HEAP32[i1 + 156 >> 2] = 0;
 HEAP32[i1 + 160 >> 2] = 0;
 HEAP32[i1 + 164 >> 2] = 0;
 i3 = i1 + 168 | 0;
 i1 = i3;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i2 & -8;
 HEAP8[i3] = i2 & 255 & -16;
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
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
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
function ii___ZNK7WebCore11EditCommand13editingActionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EditCommand13editingActionEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function ii___ZN7WebCore11isTableCellEPKNS_4NodeE__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11isTableCellEPKNS_4NodeE(i1 | 0) | 0;
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
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
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
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
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore24ApplyBlockElementCommand7doApplyEv,b1,__ZN7WebCore24ApplyBlockElementCommandD0Ev,b1,__ZN7WebCore24ApplyBlockElementCommandD1Ev,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb__wrapper,b2];
  var FUNCTION_TABLE_ii = [b3,b3,ii___ZNK7WebCore11EditCommand13editingActionEv__wrapper,b3,__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv,b3,ii___ZNK7WebCore20CompositeEditCommand15isTypingCommandEv__wrapper,b3,ii___ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv__wrapper,b3,ii___ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv__wrapper,b3,ii___ZN7WebCore11isTableCellEPKNS_4NodeE__wrapper,b3,ii___ZNK7WebCore20CompositeEditCommand20preservesTypingStyleEv__wrapper,b3,__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv,b3,__ZNK7WebCore11EditCommand24isEditCommandCompositionEv,b3,__ZNK7WebCore11EditCommand19isSimpleEditCommandEv,b3,__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore24ApplyBlockElementCommand15formatSelectionERKNS_15VisiblePositionES3_,b4,viii___ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE__wrapper,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5,v____cxa_pure_virtual__wrapper,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,viiii___ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj__wrapper,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames9styleAttrE": __ZN7WebCore9HTMLNames9styleAttrE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore24ApplyBlockElementCommand15formatSelectionERKNS_15VisiblePositionES3_","__ZN7WebCore24ApplyBlockElementCommand7doApplyEv","__ZN7WebCore18lastPositionInNodeEPNS_4NodeE","_strlen","_memset","__ZN7WebCore24ApplyBlockElementCommandC2ERNS_8DocumentERKNS_13QualifiedNameE","__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv","_memcpy","__ZN7WebCore24ApplyBlockElementCommandD0Ev","__ZN7WebCore24ApplyBlockElementCommand18createBlockElementEv","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv","__ZN7WebCore16VisibleSelectionD2Ev","__ZN7WebCore24ApplyBlockElementCommand30renderStyleOfEnclosingTextNodeERKNS_8PositionE","__ZN7WebCore24ApplyBlockElementCommand43endOfNextParagrahSplittingTextNodesIfNeededERNS_15VisiblePositionERNS_8PositionES4_","__ZN7WebCore24ApplyBlockElementCommandD1Ev","__ZN7WebCore24ApplyBlockElementCommand43rangeForParagraphSplittingTextNodesIfNeededERKNS_15VisiblePositionERNS_8PositionES5_","__ZN7WebCoreeqERKNS_15VisiblePositionES2_","__ZN7WebCoreL19isNewLineAtPositionERKNS_8PositionE","__ZN7WebCore24ApplyBlockElementCommandC2ERNS_8DocumentERKNS_13QualifiedNameERKN3WTF12AtomicStringE","__ZNK7WebCore11EditCommand24isEditCommandCompositionEv","__ZNK7WebCore11EditCommand19isSimpleEditCommandEv","__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv"]

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
H_BASE = parentModule["_malloc"](96 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 96;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore17InsertTextCommandC1ERNS_8DocumentERKN3WTF6StringEbNS0_13RebalanceTypeE;
var __ZN7WebCore17InsertTextCommandC1ERNS_8DocumentERKN3WTF6StringENS3_10PassRefPtrINS_27TextInsertionMarkerSupplierEEE;
/* memory initializer */ allocate([9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore17InsertTextCommandE=(H_BASE+16)|0;
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
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore17InsertTextCommand7doApplyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 416 | 0;
 i3 = i2 | 0;
 i4 = i2 + 64 | 0;
 i5 = i2 + 72 | 0;
 i6 = i2 + 88 | 0;
 i7 = i2 + 104 | 0;
 i8 = i2 + 120 | 0;
 i9 = i2 + 136 | 0;
 i10 = i2 + 152 | 0;
 i11 = i2 + 168 | 0;
 i12 = i2 + 184 | 0;
 i13 = i2 + 200 | 0;
 i14 = i2 + 216 | 0;
 i15 = i2 + 232 | 0;
 i16 = i2 + 248 | 0;
 i17 = i2 + 264 | 0;
 i18 = i2 + 280 | 0;
 i19 = i2 + 296 | 0;
 i20 = i2 + 304 | 0;
 i21 = i2 + 320 | 0;
 i22 = i2 + 328 | 0;
 i23 = i2 + 336 | 0;
 i24 = i2 + 400 | 0;
 i25 = i1 | 0;
 i26 = i1 + 124 | 0;
 if ((HEAP32[i26 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i27 = i1 + 96 | 0;
 i28 = HEAP32[i27 >> 2] | 0;
 i29 = (i28 | 0) == 0;
 do {
  if (i29) {
   i30 = 5;
  } else {
   i31 = i28 + 8 | 0;
   i32 = (HEAP32[i31 >> 2] | 0) + 1 | 0;
   HEAP32[i31 >> 2] = i32;
   if ((HEAP32[i28 + 12 >> 2] & 256 | 0) != 0) {
    i30 = 5;
    break;
   }
   i31 = i28 + 8 | 0;
   i33 = 0;
   i34 = i32;
   i35 = i31;
   i36 = i31 | 0;
   i30 = 11;
  }
 } while (0);
 do {
  if ((i30 | 0) == 5) {
   i31 = HEAP32[i1 + 108 >> 2] | 0;
   do {
    if ((i31 | 0) == 0) {
     i37 = 1;
    } else {
     i32 = HEAP32[i31 + 8 >> 2] | 0;
     i38 = (HEAP32[i31 + 12 >> 2] & 256 | 0) != 0;
     i39 = i31 + 8 | 0;
     HEAP32[i39 >> 2] = i32;
     if ((i32 | 0) >= 1) {
      i37 = i38;
      break;
     }
     if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
      i37 = i38;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
     i37 = i38;
    }
   } while (0);
   if (i29) {
    i40 = i37;
    i30 = 14;
    break;
   }
   i31 = i28 + 8 | 0;
   i38 = i31 | 0;
   i33 = i37;
   i34 = HEAP32[i38 >> 2] | 0;
   i35 = i31;
   i36 = i38;
   i30 = 11;
  }
 } while (0);
 do {
  if ((i30 | 0) == 11) {
   i37 = i34 - 1 | 0;
   HEAP32[i36 >> 2] = i37;
   if ((i37 | 0) >= 1) {
    i40 = i33;
    i30 = 14;
    break;
   }
   if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
    i40 = i33;
    i30 = 14;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
   if (i33) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 do {
  if ((i30 | 0) == 14) {
   if (i40) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 do {
  if ((HEAP32[i26 >> 2] | 0) == 2) {
   if (__ZN7WebCore17InsertTextCommand21performTrivialReplaceERKN3WTF6StringEb(i1, i1 + 152 | 0, (HEAP8[i1 + 156 | 0] & 1) != 0) | 0) {
    STACKTOP = i2;
    return;
   }
   __ZN7WebCore20CompositeEditCommand15deleteSelectionEbbbbb(i1 | 0, 0, 1, 1, 0, 0);
   if ((HEAP32[i26 >> 2] | 0) != 0) {
    break;
   }
   STACKTOP = i2;
   return;
  } else {
   if ((HEAP8[(HEAP32[(__ZN7WebCore11EditCommand5frameEv(i25) | 0) + 464 >> 2] | 0) + 116 | 0] & 1) == 0) {
    break;
   }
   if (!(__ZN7WebCore17InsertTextCommand16performOverwriteERKN3WTF6StringEb(i1, i1 + 152 | 0, (HEAP8[i1 + 156 | 0] & 1) != 0) | 0)) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 i26 = i5 | 0;
 i40 = HEAP32[i27 >> 2] | 0;
 HEAP32[i26 >> 2] = i40;
 if ((i40 | 0) != 0) {
  i27 = i40 + 8 | 0;
  HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
 }
 i27 = i5 + 4 | 0;
 HEAP32[i27 >> 2] = HEAP32[i1 + 100 >> 2];
 i40 = HEAP32[i1 + 104 >> 2] | 0;
 i30 = i5 + 8 | 0;
 i33 = i30;
 i35 = HEAP32[i33 >> 2] & -8 | i40 & 7;
 HEAP32[i33 >> 2] = i35;
 HEAP8[i30] = i35 & 255 & -9 | i40 & 8;
 i40 = i6 | 0;
 HEAP32[i40 >> 2] = 0;
 i35 = i6 + 4 | 0;
 HEAP32[i35 >> 2] = 0;
 i36 = i6 + 8 | 0;
 i34 = i36;
 i37 = HEAP32[i34 >> 2] | 0;
 HEAP32[i34 >> 2] = i37 & -8;
 HEAP8[i36] = i37 & 255 & -16;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i7, i5, 1);
 do {
  if (__ZN7WebCore25lineBreakExistsAtPositionERKNS_8PositionE(i7) | 0) {
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i5, 1);
   do {
    if (__ZN7WebCore12isEndOfBlockERKNS_15VisiblePositionE(i8) | 0) {
     if (!(__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i8, 1) | 0)) {
      break;
     }
     i37 = HEAP32[i7 >> 2] | 0;
     if ((i37 | 0) != 0) {
      i28 = i37 + 8 | 0;
      HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
     }
     i28 = HEAP32[i40 >> 2] | 0;
     HEAP32[i40 >> 2] = i37;
     do {
      if ((i28 | 0) != 0) {
       i37 = i28 + 8 | 0;
       i29 = i37 | 0;
       i38 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
       HEAP32[i29 >> 2] = i38;
       if ((i38 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
      }
     } while (0);
     HEAP32[i35 >> 2] = HEAP32[i7 + 4 >> 2];
     i28 = HEAP32[i7 + 8 >> 2] | 0;
     i37 = HEAP32[i34 >> 2] & -8 | i28 & 7;
     HEAP32[i34 >> 2] = i37;
     HEAP8[i36] = i37 & 255 & -9 | i28 & 8;
    }
   } while (0);
   i28 = HEAP32[i8 >> 2] | 0;
   if ((i28 | 0) == 0) {
    break;
   }
   i37 = i28 + 8 | 0;
   i28 = i37 | 0;
   i38 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
   HEAP32[i28 >> 2] = i38;
   if ((i38 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
  }
 } while (0);
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i9, i5, 1);
 i8 = i9 | 0;
 i36 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i34 = HEAP32[i26 >> 2] | 0;
 HEAP32[i26 >> 2] = i36;
 do {
  if ((i34 | 0) != 0) {
   i36 = i34 + 8 | 0;
   i35 = i36 | 0;
   i37 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
   HEAP32[i35 >> 2] = i37;
   if ((i37 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
  }
 } while (0);
 HEAP32[i27 >> 2] = HEAP32[i9 + 4 >> 2];
 i34 = HEAP32[i9 + 8 >> 2] | 0;
 i9 = HEAP32[i33 >> 2] & -8 | i34 & 7;
 HEAP32[i33 >> 2] = i9;
 HEAP8[i30] = i9 & 255 & -9 | i34 & 8;
 i34 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i34 | 0) != 0) {
   i8 = i34 + 8 | 0;
   i9 = i8 | 0;
   i36 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i36;
   if ((i36 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i34 = __ZNK7WebCore8Position13containerNodeEv(i5) | 0;
 i8 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i34) | 0;
 i36 = i4 | 0;
 HEAP32[i36 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i10, i4, __ZNK7WebCore4Node9nodeIndexEv(i34) | 0, 0);
 i34 = HEAP32[i36 >> 2] | 0;
 do {
  if ((i34 | 0) != 0) {
   i36 = i34 + 8 | 0;
   i4 = i36 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
  }
 } while (0);
 i34 = i1 | 0;
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i11, i5, 1);
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i12, i5, 1);
 __ZN7WebCore20CompositeEditCommand23deleteInsignificantTextERKNS_8PositionES3_(i34, i11, i12);
 i36 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i12 = i36 + 8 | 0;
   i9 = i12 | 0;
   i4 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i36 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i11 = i36 + 8 | 0;
   i12 = i11 | 0;
   i4 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i36 = HEAP32[i26 >> 2] | 0;
 if ((HEAP32[i36 + 12 >> 2] & 256 | 0) == 0) {
  i11 = HEAP32[i10 >> 2] | 0;
  if ((i11 | 0) == 0) {
   i41 = i36;
  } else {
   i36 = i11 + 8 | 0;
   HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
   i41 = HEAP32[i26 >> 2] | 0;
  }
  HEAP32[i26 >> 2] = i11;
  do {
   if ((i41 | 0) != 0) {
    i11 = i41 + 8 | 0;
    i36 = i11 | 0;
    i4 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
    HEAP32[i36 >> 2] = i4;
    if ((i4 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
   }
  } while (0);
  HEAP32[i27 >> 2] = HEAP32[i10 + 4 >> 2];
  i41 = HEAP32[i10 + 8 >> 2] | 0;
  i11 = HEAP32[i33 >> 2] & -8 | i41 & 7;
  HEAP32[i33 >> 2] = i11;
  HEAP8[i30] = i11 & 255 & -9 | i41 & 8;
 }
 do {
  if (!(__ZNK7WebCore8Position11isCandidateEv(i5) | 0)) {
   __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i13, i5, 1);
   i41 = i13 | 0;
   i11 = HEAP32[i41 >> 2] | 0;
   HEAP32[i41 >> 2] = 0;
   i4 = HEAP32[i26 >> 2] | 0;
   HEAP32[i26 >> 2] = i11;
   do {
    if ((i4 | 0) != 0) {
     i11 = i4 + 8 | 0;
     i36 = i11 | 0;
     i12 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
     HEAP32[i36 >> 2] = i12;
     if ((i12 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
    }
   } while (0);
   HEAP32[i27 >> 2] = HEAP32[i13 + 4 >> 2];
   i4 = HEAP32[i13 + 8 >> 2] | 0;
   i11 = HEAP32[i33 >> 2] & -8 | i4 & 7;
   HEAP32[i33 >> 2] = i11;
   HEAP8[i30] = i11 & 255 & -9 | i4 & 8;
   i4 = HEAP32[i41 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i11 = i4 + 8 | 0;
   i4 = i11 | 0;
   i12 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore20CompositeEditCommand38positionAvoidingSpecialElementBoundaryERKNS_8PositionE(i14, i34, i5);
 i13 = i14 | 0;
 i11 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i12 = HEAP32[i26 >> 2] | 0;
 HEAP32[i26 >> 2] = i11;
 do {
  if ((i12 | 0) != 0) {
   i11 = i12 + 8 | 0;
   i4 = i11 | 0;
   i36 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i36;
   if ((i36 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 HEAP32[i27 >> 2] = HEAP32[i14 + 4 >> 2];
 i12 = HEAP32[i14 + 8 >> 2] | 0;
 i14 = HEAP32[i33 >> 2] & -8 | i12 & 7;
 HEAP32[i33 >> 2] = i14;
 HEAP8[i30] = i14 & 255 & -9 | i12 & 8;
 i12 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i13 = i12 + 8 | 0;
   i14 = i13 | 0;
   i11 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 i12 = i15 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i15 + 4 | 0;
 HEAP32[i13 >> 2] = 0;
 i11 = i15 + 8 | 0;
 i14 = i11;
 i36 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = i36 & -8;
 HEAP8[i11] = i36 & 255 & -16;
 i36 = i1 + 152 | 0;
 i4 = i36 | 0;
 do {
  if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i4 >> 2] | 0, H_BASE + 8 | 0) | 0) {
   __ZN7WebCore17InsertTextCommand9insertTabERKNS_8PositionE(i16, i1, i5);
   i9 = i16 | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i37 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i8;
   do {
    if ((i37 | 0) != 0) {
     i8 = i37 + 8 | 0;
     i35 = i8 | 0;
     i38 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
     HEAP32[i35 >> 2] = i38;
     if ((i38 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
    }
   } while (0);
   HEAP32[i13 >> 2] = HEAP32[i16 + 4 >> 2];
   i37 = HEAP32[i16 + 8 >> 2] | 0;
   i41 = HEAP32[i14 >> 2] & -8 | i37 & 7;
   HEAP32[i14 >> 2] = i41;
   HEAP8[i11] = i41 & 255 & -9 | i37 & 8;
   i37 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i37 | 0) != 0) {
     i41 = i37 + 8 | 0;
     i8 = i41 | 0;
     i38 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     HEAP32[i8 >> 2] = i38;
     if ((i38 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
    }
   } while (0);
   __ZNK7WebCore8Position8previousENS_16PositionMoveTypeE(i17, i15, 0);
   i37 = i17 | 0;
   i9 = HEAP32[i37 >> 2] | 0;
   HEAP32[i37 >> 2] = 0;
   i41 = HEAP32[i26 >> 2] | 0;
   HEAP32[i26 >> 2] = i9;
   do {
    if ((i41 | 0) != 0) {
     i9 = i41 + 8 | 0;
     i38 = i9 | 0;
     i8 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
     HEAP32[i38 >> 2] = i8;
     if ((i8 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   HEAP32[i27 >> 2] = HEAP32[i17 + 4 >> 2];
   i41 = HEAP32[i17 + 8 >> 2] | 0;
   i9 = HEAP32[i33 >> 2] & -8 | i41 & 7;
   HEAP32[i33 >> 2] = i9;
   HEAP8[i30] = i9 & 255 & -9 | i41 & 8;
   i41 = HEAP32[i37 >> 2] | 0;
   do {
    if ((i41 | 0) != 0) {
     i9 = i41 + 8 | 0;
     i8 = i9 | 0;
     i38 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     HEAP32[i8 >> 2] = i38;
     if ((i38 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   if ((HEAP32[i40 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore20CompositeEditCommand19removePlaceholderAtERKNS_8PositionE(i34, i6);
  } else {
   __ZN7WebCore17InsertTextCommand22positionInsideTextNodeERKNS_8PositionE(i18, i1, i5);
   i41 = i18 | 0;
   i37 = HEAP32[i41 >> 2] | 0;
   HEAP32[i41 >> 2] = 0;
   i9 = HEAP32[i26 >> 2] | 0;
   HEAP32[i26 >> 2] = i37;
   do {
    if ((i9 | 0) != 0) {
     i37 = i9 + 8 | 0;
     i38 = i37 | 0;
     i8 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
     HEAP32[i38 >> 2] = i8;
     if ((i8 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
    }
   } while (0);
   HEAP32[i27 >> 2] = HEAP32[i18 + 4 >> 2];
   i9 = HEAP32[i18 + 8 >> 2] | 0;
   i37 = HEAP32[i33 >> 2] & -8 | i9 & 7;
   HEAP32[i33 >> 2] = i37;
   HEAP8[i30] = i37 & 255 & -9 | i9 & 8;
   i9 = HEAP32[i41 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i37 = i9 + 8 | 0;
     i8 = i37 | 0;
     i38 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     HEAP32[i8 >> 2] = i38;
     if ((i38 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
    }
   } while (0);
   if ((HEAP32[i40 >> 2] | 0) != 0) {
    __ZN7WebCore20CompositeEditCommand19removePlaceholderAtERKNS_8PositionE(i34, i6);
   }
   i9 = __ZNK7WebCore8Position13containerTextEv(i5) | 0;
   i41 = (i9 | 0) == 0;
   if (i41) {
    i37 = HEAP32[i27 >> 2] | 0;
    i38 = i19 | 0;
    HEAP32[i38 >> 2] = 0;
    i42 = i37;
    i43 = i38;
   } else {
    i38 = i9 + 8 | 0;
    HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
    i37 = HEAP32[i27 >> 2] | 0;
    i8 = i19 | 0;
    HEAP32[i8 >> 2] = i9;
    HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
    i42 = i37;
    i43 = i8;
   }
   __ZN7WebCore20CompositeEditCommand18insertTextIntoNodeEN3WTF10PassRefPtrINS_4TextEEEjRKNS1_6StringE(i34, i19, i42, i36);
   i8 = HEAP32[i43 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i37 = i8 + 8 | 0;
     i38 = i37 | 0;
     i35 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
     HEAP32[i38 >> 2] = i35;
     if ((i35 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
    }
   } while (0);
   i8 = i21 | 0;
   HEAP32[i8 >> 2] = i9;
   if (!i41) {
    i37 = i9 + 8 | 0;
    HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
   }
   i37 = HEAP32[i4 >> 2] | 0;
   if ((i37 | 0) == 0) {
    i44 = 0;
   } else {
    i44 = HEAP32[i37 + 4 >> 2] | 0;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i20, i21, i44 + i42 | 0);
   i37 = i20 | 0;
   i35 = HEAP32[i37 >> 2] | 0;
   HEAP32[i37 >> 2] = 0;
   i38 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i35;
   do {
    if ((i38 | 0) != 0) {
     i35 = i38 + 8 | 0;
     i28 = i35 | 0;
     i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     HEAP32[i28 >> 2] = i29;
     if ((i29 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
    }
   } while (0);
   HEAP32[i13 >> 2] = HEAP32[i20 + 4 >> 2];
   i38 = HEAP32[i20 + 8 >> 2] | 0;
   i35 = HEAP32[i14 >> 2] & -8 | i38 & 7;
   HEAP32[i14 >> 2] = i35;
   HEAP8[i11] = i35 & 255 & -9 | i38 & 8;
   i38 = HEAP32[i37 >> 2] | 0;
   do {
    if ((i38 | 0) != 0) {
     i35 = i38 + 8 | 0;
     i29 = i35 | 0;
     i28 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     HEAP32[i29 >> 2] = i28;
     if ((i28 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
    }
   } while (0);
   i38 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i38 | 0) != 0) {
     i37 = i38 + 8 | 0;
     i35 = i37 | 0;
     i28 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
     HEAP32[i35 >> 2] = i28;
     if ((i28 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
    }
   } while (0);
   i38 = HEAP32[i1 + 164 >> 2] | 0;
   if ((i38 | 0) != 0) {
    FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i38 >> 2] | 0) + 8 >> 2] & 7](i38, i9, i42, i36);
   }
   do {
    if ((HEAP32[i1 + 160 >> 2] | 0) == 0) {
     __ZN7WebCore20CompositeEditCommand21rebalanceWhitespaceAtERKNS_8PositionE(i34, i15);
     if (__ZNK7WebCore20CompositeEditCommand35shouldRebalanceLeadingWhitespaceForERKN3WTF6StringE(i34, i36) | 0) {
      break;
     }
     __ZN7WebCore20CompositeEditCommand21rebalanceWhitespaceAtERKNS_8PositionE(i34, i5);
    } else {
     if (!(__ZNK7WebCore20CompositeEditCommand12canRebalanceERKNS_8PositionE(i34, i5) | 0)) {
      break;
     }
     if (!(__ZNK7WebCore20CompositeEditCommand12canRebalanceERKNS_8PositionE(i34, i15) | 0)) {
      break;
     }
     i38 = i22 | 0;
     HEAP32[i38 >> 2] = i9;
     if (!i41) {
      i8 = i9 + 8 | 0;
      HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand34rebalanceWhitespaceOnTextSubstringEN3WTF10PassRefPtrINS_4TextEEEii(i34, i22, HEAP32[i27 >> 2] | 0, HEAP32[i13 >> 2] | 0);
     i8 = HEAP32[i38 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     i38 = i8 + 8 | 0;
     i8 = i38 | 0;
     i37 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     HEAP32[i8 >> 2] = i37;
     if ((i37 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
    }
   } while (0);
   if (i41) {
    break;
   }
   i38 = i9 + 8 | 0;
   i37 = i38 | 0;
   i8 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
   HEAP32[i37 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore16VisibleSelectionC1Ev(i3);
 __ZN7WebCore16VisibleSelection20setWithoutValidationERKNS_8PositionES3_(i3, i5, i15);
 i5 = i1 + 128 | 0;
 i13 = i3 + 56 | 0;
 HEAP8[i13] = HEAP8[i13] & -3 | HEAP8[i5] & 2;
 __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i25, i3);
 __ZN7WebCore16VisibleSelectionD2Ev(i3);
 i3 = HEAP32[(HEAP32[(__ZN7WebCore11EditCommand5frameEv(i25) | 0) + 468 >> 2] | 0) + 116 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i13 = i3 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   __ZN7WebCore12EditingStyle16prepareToApplyAtERKNS_8PositionENS0_30ShouldPreserveWritingDirectionE(i3, i15, 0);
   if (!(__ZNK7WebCore12EditingStyle7isEmptyEv(i3) | 0)) {
    __ZN7WebCore20CompositeEditCommand10applyStyleEPKNS_12EditingStyleENS_10EditActionE(i34, i3, 14);
   }
   i27 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i27 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i13 >> 2] = i27;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP8[i1 + 156 | 0] & 1) == 0) {
   i3 = i24 | 0;
   i34 = HEAP32[i1 + 108 >> 2] | 0;
   HEAP32[i3 >> 2] = i34;
   if ((i34 | 0) != 0) {
    i15 = i34 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   }
   HEAP32[i24 + 4 >> 2] = HEAP32[i1 + 112 >> 2];
   i15 = HEAP32[i1 + 116 >> 2] | 0;
   i34 = i24 + 8 | 0;
   i27 = i34;
   i13 = HEAP32[i27 >> 2] & -8 | i15 & 7;
   HEAP32[i27 >> 2] = i13;
   HEAP8[i34] = i13 & 255 & -9 | i15 & 8;
   __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb(i23, i24, HEAP32[i1 + 120 >> 2] | 0, (HEAP8[i5] & 2) != 0);
   __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i25, i23);
   __ZN7WebCore16VisibleSelectionD2Ev(i23);
   i15 = HEAP32[i3 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i3 = i15 + 8 | 0;
   i15 = i3 | 0;
   i13 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i23 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i12 = i23 + 8 | 0;
   i25 = i12 | 0;
   i5 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   HEAP32[i25 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i23 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i10 = i23 + 8 | 0;
   i12 = i10 | 0;
   i5 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i23 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i7 = i23 + 8 | 0;
   i10 = i7 | 0;
   i5 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i23 = HEAP32[i40 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i40 = i23 + 8 | 0;
   i7 = i40 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
  }
 } while (0);
 i23 = HEAP32[i26 >> 2] | 0;
 if ((i23 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i26 = i23 + 8 | 0;
 i23 = i26 | 0;
 i40 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
 HEAP32[i23 >> 2] = i40;
 if ((i40 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17InsertTextCommand9insertTabERKNS_8PositionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 48 | 0;
 i10 = i4 + 56 | 0;
 i11 = i4 + 64 | 0;
 i12 = i4 + 72 | 0;
 i13 = i4 + 80 | 0;
 i14 = i4 + 88 | 0;
 i15 = i4 + 96 | 0;
 i16 = i4 + 104 | 0;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i6, i3, 1);
 i3 = i5 | 0;
 i17 = i6 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 HEAP32[i3 >> 2] = i18;
 if ((i18 | 0) == 0) {
  i19 = i5 + 8 | 0;
  i20 = 0;
  i21 = 0;
  i22 = i19;
  i23 = i19;
 } else {
  i19 = i18 + 8 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
  i19 = i5 + 8 | 0;
  i18 = i19;
  i20 = HEAP32[i18 >> 2] & -8;
  i21 = HEAP32[i17 >> 2] | 0;
  i22 = i19;
  i23 = i18;
 }
 i18 = i5 + 4 | 0;
 HEAP32[i18 >> 2] = HEAP32[i6 + 4 >> 2];
 i19 = HEAP32[i6 + 8 >> 2] | 0;
 i6 = i20 | i19 & 7;
 HEAP32[i23 >> 2] = i6;
 HEAP8[i22] = i6 & 255 & -9 | i19 & 8;
 do {
  if ((i21 | 0) != 0) {
   i19 = i21 + 8 | 0;
   i6 = i19 | 0;
   i22 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
  }
 } while (0);
 i21 = __ZNK7WebCore8Position13containerNodeEv(i5) | 0;
 i19 = i21 + 12 | 0;
 i22 = (HEAP32[i19 >> 2] & 1 | 0) != 0 ? HEAP32[i18 >> 2] | 0 : 0;
 do {
  if (__ZN7WebCore17isTabSpanTextNodeEPKNS_4NodeE(i21) | 0) {
   i18 = i21;
   if ((i21 | 0) == 0) {
    i6 = i7 | 0;
    HEAP32[i6 >> 2] = i18;
    i24 = i6;
   } else {
    i6 = i21 + 8 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
    i23 = i7 | 0;
    HEAP32[i23 >> 2] = i18;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
    i24 = i23;
   }
   __ZN3WTF6StringC1EPKc(i8, H_BASE + 8 | 0);
   __ZN7WebCore20CompositeEditCommand18insertTextIntoNodeEN3WTF10PassRefPtrINS_4TextEEEjRKNS1_6StringE(i2 | 0, i7, i22, i8);
   i23 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i6 = i23 | 0;
     i20 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i6 >> 2] = i20;
      break;
     }
    }
   } while (0);
   i23 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i20 = i23 + 8 | 0;
     i6 = i20 | 0;
     i17 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     HEAP32[i6 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
    }
   } while (0);
   i23 = i9 | 0;
   HEAP32[i23 >> 2] = i18;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i1, i9, i22 + 1 | 0);
   i20 = HEAP32[i23 >> 2] | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   i23 = i20 + 8 | 0;
   i20 = i23 | 0;
   i17 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   HEAP32[i20 >> 2] = i17;
   if ((i17 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
  } else {
   __ZN7WebCore20createTabSpanElementERNS_8DocumentE(i10, HEAP32[i2 + 8 >> 2] | 0);
   i23 = i10 | 0;
   i17 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = 0;
   do {
    if ((HEAP32[i19 >> 2] & 1 | 0) == 0) {
     i23 = i11 | 0;
     HEAP32[i23 >> 2] = i17;
     if ((i17 | 0) != 0) {
      i20 = i17 + 8 | 0;
      HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i2 | 0, i11, i5);
     i20 = HEAP32[i23 >> 2] | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     i23 = i20 + 8 | 0;
     i20 = i23 | 0;
     i6 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     HEAP32[i20 >> 2] = i6;
     if ((i6 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
    } else {
     i23 = i21;
     i6 = i21 + 8 | 0;
     HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
     i6 = HEAP32[i21 + 36 >> 2] | 0;
     if ((i6 | 0) == 0) {
      i25 = 0;
     } else {
      i25 = HEAP32[i6 + 4 >> 2] | 0;
     }
     if (i22 >>> 0 >= i25 >>> 0) {
      i6 = i12 | 0;
      HEAP32[i6 >> 2] = i17;
      if ((i17 | 0) != 0) {
       i20 = i17 + 8 | 0;
       HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
      }
      i20 = i13 | 0;
      HEAP32[i20 >> 2] = i21;
      __ZN7WebCore20CompositeEditCommand15insertNodeAfterEN3WTF10PassRefPtrINS_4NodeEEES4_(i2 | 0, i12, i13);
      i26 = HEAP32[i20 >> 2] | 0;
      do {
       if ((i26 | 0) != 0) {
        i20 = i26 + 8 | 0;
        i27 = i20 | 0;
        i28 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
        HEAP32[i27 >> 2] = i28;
        if ((i28 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
       }
      } while (0);
      i26 = HEAP32[i6 >> 2] | 0;
      if ((i26 | 0) == 0) {
       break;
      }
      i20 = i26 + 8 | 0;
      i26 = i20 | 0;
      i28 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
      HEAP32[i26 >> 2] = i28;
      if ((i28 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
      break;
     }
     i20 = i2 | 0;
     do {
      if ((i22 | 0) != 0) {
       i28 = i14 | 0;
       HEAP32[i28 >> 2] = i23;
       i26 = i21 + 8 | 0;
       HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
       __ZN7WebCore20CompositeEditCommand13splitTextNodeEN3WTF10PassRefPtrINS_4TextEEEj(i20, i14, i22);
       i26 = HEAP32[i28 >> 2] | 0;
       if ((i26 | 0) == 0) {
        break;
       }
       i28 = i26 + 8 | 0;
       i26 = i28 | 0;
       i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
       HEAP32[i26 >> 2] = i27;
       if ((i27 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
      }
     } while (0);
     i23 = i15 | 0;
     HEAP32[i23 >> 2] = i17;
     if ((i17 | 0) != 0) {
      i6 = i17 + 8 | 0;
      HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
     }
     i6 = i16 | 0;
     HEAP32[i6 >> 2] = i21;
     __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i20, i15, i16, 1);
     i28 = HEAP32[i6 >> 2] | 0;
     do {
      if ((i28 | 0) != 0) {
       i6 = i28 + 8 | 0;
       i27 = i6 | 0;
       i26 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
       HEAP32[i27 >> 2] = i26;
       if ((i26 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
      }
     } while (0);
     i28 = HEAP32[i23 >> 2] | 0;
     if ((i28 | 0) == 0) {
      break;
     }
     i20 = i28 + 8 | 0;
     i28 = i20 | 0;
     i6 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     HEAP32[i28 >> 2] = i6;
     if ((i6 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i1, i17 | 0);
   if ((i17 | 0) == 0) {
    break;
   }
   i18 = i17 + 8 | 0;
   i20 = i18 | 0;
   i6 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   HEAP32[i20 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i1 + 8 | 0;
 i1 = i3 | 0;
 i16 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i16;
 if ((i16 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17InsertTextCommand21performTrivialReplaceERKN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i5 = i4 | 0;
 i6 = i4 + 64 | 0;
 i7 = i4 + 80 | 0;
 i8 = i4 + 96 | 0;
 i9 = i4 + 160 | 0;
 i10 = i1 | 0;
 i11 = i1 + 124 | 0;
 if ((HEAP32[i11 >> 2] | 0) != 2) {
  i12 = 0;
  STACKTOP = i4;
  return i12 | 0;
 }
 i13 = HEAP32[i2 >> 2] | 0;
 L4 : do {
  if ((i13 | 0) != 0) {
   i14 = (HEAP32[i13 + 16 >> 2] & 32 | 0) == 0;
   L6 : do {
    if (i14) {
     i15 = HEAP32[i13 + 8 >> 2] | 0;
     i16 = HEAP32[i13 + 4 >> 2] | 0;
     i17 = i15;
     i18 = 0;
     while (1) {
      if (i18 >>> 0 >= i16 >>> 0) {
       i19 = i16;
       i20 = i15;
       i21 = i17;
       break L6;
      }
      if ((HEAP16[i15 + (i18 << 1) >> 1] | 0) == 9) {
       i22 = i18;
       i23 = i16;
       i24 = i15;
       i25 = i17;
       i26 = 10;
       break;
      } else {
       i18 = i18 + 1 | 0;
      }
     }
    } else {
     i18 = HEAP32[i13 + 8 >> 2] | 0;
     i17 = HEAP32[i13 + 4 >> 2] | 0;
     i15 = i18;
     i16 = 0;
     while (1) {
      if (i16 >>> 0 >= i17 >>> 0) {
       i19 = i17;
       i20 = i15;
       i21 = i18;
       break L6;
      }
      if ((HEAP8[i18 + i16 | 0] | 0) == 9) {
       i22 = i16;
       i23 = i17;
       i24 = i15;
       i25 = i18;
       i26 = 10;
       break;
      } else {
       i16 = i16 + 1 | 0;
      }
     }
    }
   } while (0);
   do {
    if ((i26 | 0) == 10) {
     if ((i22 | 0) == -1) {
      i19 = i23;
      i20 = i24;
      i21 = i25;
      break;
     } else {
      i12 = 0;
     }
     STACKTOP = i4;
     return i12 | 0;
    }
   } while (0);
   L19 : do {
    if (i14) {
     i16 = 0;
     while (1) {
      if (i16 >>> 0 >= i19 >>> 0) {
       i27 = i20;
       break L19;
      }
      if ((HEAP16[i20 + (i16 << 1) >> 1] | 0) == 32) {
       i28 = i16;
       i29 = i20;
       i26 = 17;
       break;
      } else {
       i16 = i16 + 1 | 0;
      }
     }
    } else {
     i16 = i21;
     i18 = 0;
     while (1) {
      if (i18 >>> 0 >= i19 >>> 0) {
       i27 = i16;
       break L19;
      }
      if ((HEAP8[i21 + i18 | 0] | 0) == 32) {
       i28 = i18;
       i29 = i16;
       i26 = 17;
       break;
      } else {
       i18 = i18 + 1 | 0;
      }
     }
    }
   } while (0);
   do {
    if ((i26 | 0) == 17) {
     if ((i28 | 0) == -1) {
      i27 = i29;
      break;
     } else {
      i12 = 0;
     }
     STACKTOP = i4;
     return i12 | 0;
    }
   } while (0);
   if (i14) {
    i18 = 0;
    while (1) {
     if (i18 >>> 0 >= i19 >>> 0) {
      break L4;
     }
     if ((HEAP16[i27 + (i18 << 1) >> 1] | 0) == 10) {
      i30 = i18;
      break;
     } else {
      i18 = i18 + 1 | 0;
     }
    }
   } else {
    i18 = 0;
    while (1) {
     if (i18 >>> 0 >= i19 >>> 0) {
      break L4;
     }
     if ((HEAP8[i21 + i18 | 0] | 0) == 10) {
      i30 = i18;
      break;
     } else {
      i18 = i18 + 1 | 0;
     }
    }
   }
   if ((i30 | 0) == -1) {
    break;
   } else {
    i12 = 0;
   }
   STACKTOP = i4;
   return i12 | 0;
  }
 } while (0);
 i30 = i6 | 0;
 i21 = HEAP32[i1 + 96 >> 2] | 0;
 HEAP32[i30 >> 2] = i21;
 if ((i21 | 0) == 0) {
  i19 = i6 + 8 | 0;
  i31 = 0;
  i32 = i19;
  i33 = i19;
 } else {
  i19 = i21 + 8 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
  i19 = i6 + 8 | 0;
  i21 = i19;
  i31 = HEAP32[i21 >> 2] & -8;
  i32 = i19;
  i33 = i21;
 }
 HEAP32[i6 + 4 >> 2] = HEAP32[i1 + 100 >> 2];
 i21 = HEAP32[i1 + 104 >> 2] | 0;
 i19 = i31 | i21 & 7;
 HEAP32[i33 >> 2] = i19;
 HEAP8[i32] = i19 & 255 & -9 | i21 & 8;
 __ZN7WebCore20CompositeEditCommand25replaceSelectedTextInNodeERKN3WTF6StringE(i7, i1 | 0, i2);
 i2 = i7 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   i34 = 0;
  } else {
   __ZN7WebCore16VisibleSelectionC1Ev(i5);
   __ZN7WebCore16VisibleSelection20setWithoutValidationERKNS_8PositionES3_(i5, i6, i7);
   i21 = i1 + 128 | 0;
   i19 = i5 + 56 | 0;
   HEAP8[i19] = HEAP8[i19] & -3 | HEAP8[i21] & 2;
   __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i10, i5);
   __ZN7WebCore16VisibleSelectionD2Ev(i5);
   do {
    if (!i3) {
     if ((HEAP32[i11 >> 2] | 0) == 2) {
      i35 = 0;
     } else {
      i35 = HEAP32[i1 + 120 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i9, i1 + 108 | 0, i35);
     __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i8, i9, (HEAP8[i21] & 2) != 0);
     __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i10, i8);
     __ZN7WebCore16VisibleSelectionD2Ev(i8);
     i19 = HEAP32[i9 >> 2] | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     i32 = i19 + 8 | 0;
     i19 = i32 | 0;
     i33 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     HEAP32[i19 >> 2] = i33;
     if ((i33 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
    }
   } while (0);
   i21 = HEAP32[i2 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i34 = 1;
    break;
   }
   i32 = i21 + 8 | 0;
   i21 = i32 | 0;
   i33 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   HEAP32[i21 >> 2] = i33;
   if ((i33 | 0) >= 1) {
    i34 = 1;
    break;
   }
   if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
    i34 = 1;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
   i34 = 1;
  }
 } while (0);
 i2 = HEAP32[i30 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i12 = i34;
  STACKTOP = i4;
  return i12 | 0;
 }
 i30 = i2 + 8 | 0;
 i2 = i30 | 0;
 i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i9;
 if ((i9 | 0) >= 1) {
  i12 = i34;
  STACKTOP = i4;
  return i12 | 0;
 }
 if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
  i12 = i34;
  STACKTOP = i4;
  return i12 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
 i12 = i34;
 STACKTOP = i4;
 return i12 | 0;
}
function __ZN7WebCore17InsertTextCommand16performOverwriteERKN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i5 = i4 | 0;
 i6 = i4 + 64 | 0;
 i7 = i4 + 80 | 0;
 i8 = i4 + 88 | 0;
 i9 = i4 + 104 | 0;
 i10 = i4 + 112 | 0;
 i11 = i4 + 176 | 0;
 i12 = i1 | 0;
 i13 = i6 | 0;
 i14 = HEAP32[i1 + 96 >> 2] | 0;
 HEAP32[i13 >> 2] = i14;
 if ((i14 | 0) == 0) {
  i15 = i6 + 8 | 0;
  i16 = 0;
  i17 = i15;
  i18 = i15;
 } else {
  i15 = i14 + 8 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  i15 = i6 + 8 | 0;
  i14 = i15;
  i16 = HEAP32[i14 >> 2] & -8;
  i17 = i15;
  i18 = i14;
 }
 i14 = i6 + 4 | 0;
 HEAP32[i14 >> 2] = HEAP32[i1 + 100 >> 2];
 i15 = HEAP32[i1 + 104 >> 2] | 0;
 i19 = i16 | i15 & 7;
 HEAP32[i18 >> 2] = i19;
 HEAP8[i17] = i19 & 255 & -9 | i15 & 8;
 i15 = __ZNK7WebCore8Position13containerTextEv(i6) | 0;
 do {
  if ((i15 | 0) == 0) {
   i20 = 0;
  } else {
   i19 = i15 + 8 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = i17 + 1;
   i18 = i2 | 0;
   i16 = HEAP32[i18 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i21 = 0;
   } else {
    i21 = HEAP32[i16 + 4 >> 2] | 0;
   }
   i16 = HEAP32[i15 + 36 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i22 = 0;
   } else {
    i22 = HEAP32[i16 + 4 >> 2] | 0;
   }
   i16 = i22 - (HEAP32[i14 >> 2] | 0) | 0;
   i23 = i16 >>> 0 < i21 >>> 0 ? i16 : i21;
   if ((i23 | 0) == 0) {
    i16 = i15 + 8 | 0;
    HEAP32[i16 >> 2] = i17;
    if ((i17 | 0) >= 1) {
     i20 = 0;
     break;
    }
    if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
     i20 = 0;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    i20 = 0;
    break;
   }
   i16 = i7 | 0;
   HEAP32[i16 >> 2] = i15;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   __ZN7WebCore20CompositeEditCommand17replaceTextInNodeEN3WTF10PassRefPtrINS_4TextEEEjjRKNS1_6StringE(i1 | 0, i7, HEAP32[i14 >> 2] | 0, i23, i2);
   i23 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i16 = i23 + 8 | 0;
     i19 = i16 | 0;
     i17 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     HEAP32[i19 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   i23 = i9 | 0;
   HEAP32[i23 >> 2] = i15;
   i16 = HEAP32[i18 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i24 = 0;
   } else {
    i24 = HEAP32[i16 + 4 >> 2] | 0;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i8, i9, i24 + (HEAP32[i14 >> 2] | 0) | 0);
   i16 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i23 = i16 + 8 | 0;
     i17 = i23 | 0;
     i19 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore16VisibleSelectionC1Ev(i5);
   __ZN7WebCore16VisibleSelection20setWithoutValidationERKNS_8PositionES3_(i5, i6, i8);
   i16 = i1 + 128 | 0;
   i18 = i5 + 56 | 0;
   HEAP8[i18] = HEAP8[i18] & -3 | HEAP8[i16] & 2;
   __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i12, i5);
   __ZN7WebCore16VisibleSelectionD2Ev(i5);
   do {
    if (!i3) {
     if ((HEAP32[i1 + 124 >> 2] | 0) == 2) {
      i25 = 0;
     } else {
      i25 = HEAP32[i1 + 120 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i11, i1 + 108 | 0, i25);
     __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i10, i11, (HEAP8[i16] & 2) != 0);
     __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i12, i10);
     __ZN7WebCore16VisibleSelectionD2Ev(i10);
     i18 = HEAP32[i11 >> 2] | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     i23 = i18 + 8 | 0;
     i18 = i23 | 0;
     i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     HEAP32[i18 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
    }
   } while (0);
   i16 = HEAP32[i8 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i20 = 1;
    break;
   }
   i23 = i16 + 8 | 0;
   i16 = i23 | 0;
   i19 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   HEAP32[i16 >> 2] = i19;
   if ((i19 | 0) >= 1) {
    i20 = 1;
    break;
   }
   if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
    i20 = 1;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
   i20 = 1;
  }
 } while (0);
 i8 = HEAP32[i13 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return i20 | 0;
 }
 i13 = i8 + 8 | 0;
 i8 = i13 | 0;
 i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 HEAP32[i8 >> 2] = i11;
 if ((i11 | 0) >= 1) {
  STACKTOP = i4;
  return i20 | 0;
 }
 if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return i20 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
 STACKTOP = i4;
 return i20 | 0;
}
function __ZN7WebCore17InsertTextCommand22positionInsideTextNodeERKNS_8PositionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 56 | 0;
 i12 = i5 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 HEAP32[i12 >> 2] = i13;
 if ((i13 | 0) == 0) {
  i14 = i5 + 8 | 0;
  i15 = 0;
  i16 = 0;
  i17 = i14;
  i18 = i14;
 } else {
  i14 = i13 + 8 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
  i14 = i5 + 8 | 0;
  i13 = i14;
  i15 = HEAP32[i13 >> 2] & -8;
  i16 = HEAP32[i12 >> 2] | 0;
  i17 = i14;
  i18 = i13;
 }
 i13 = i5 + 4 | 0;
 HEAP32[i13 >> 2] = HEAP32[i3 + 4 >> 2];
 i14 = HEAP32[i3 + 8 >> 2] | 0;
 i3 = i15 | i14 & 7;
 HEAP32[i18 >> 2] = i3;
 HEAP8[i17] = i3 & 255 & -9 | i14 & 8;
 do {
  if (__ZN7WebCore17isTabSpanTextNodeEPKNS_4NodeE(i16) | 0) {
   i14 = HEAP32[i2 + 8 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i7, H_BASE + 96 | 0);
   __ZN7WebCore8Document21createEditingTextNodeERKN3WTF6StringE(i6, i14, i7);
   i14 = i6 | 0;
   i3 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   i14 = i3 | 0;
   i17 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i15 = i17 | 0;
     i19 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i15 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i17 = i8 | 0;
   HEAP32[i17 >> 2] = i14;
   i19 = (i3 | 0) == 0;
   if (!i19) {
    i15 = i3 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   }
   __ZN7WebCore20CompositeEditCommand27insertNodeAtTabSpanPositionEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i2 | 0, i8, i5);
   i15 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i17 = i15 + 8 | 0;
     i20 = i17 | 0;
     i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     HEAP32[i20 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i1, i14);
   if (i19) {
    break;
   }
   i15 = i3 + 8 | 0;
   i17 = i15 | 0;
   i21 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   HEAP32[i17 >> 2] = i21;
   if ((i21 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  } else {
   if ((HEAP32[(__ZNK7WebCore8Position13containerNodeEv(i5) | 0) + 12 >> 2] & 1 | 0) != 0) {
    i15 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    HEAP32[i1 >> 2] = i15;
    HEAP32[i1 + 4 >> 2] = HEAP32[i13 >> 2];
    i15 = HEAP32[i18 >> 2] | 0;
    i21 = i1 + 8 | 0;
    i17 = i21;
    i20 = HEAP32[i17 >> 2] & -8 | i15 & 7;
    HEAP32[i17 >> 2] = i20;
    HEAP8[i21] = i20 & 255 & -9 | i15 & 8;
    break;
   }
   i15 = HEAP32[i2 + 8 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i10, H_BASE + 96 | 0);
   __ZN7WebCore8Document21createEditingTextNodeERKN3WTF6StringE(i9, i15, i10);
   i15 = i9 | 0;
   i20 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   i15 = i20 | 0;
   i21 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i17 = i21 | 0;
     i22 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i17 >> 2] = i22;
      break;
     }
    }
   } while (0);
   i21 = i11 | 0;
   HEAP32[i21 >> 2] = i15;
   i3 = (i20 | 0) == 0;
   if (!i3) {
    i19 = i20 + 8 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   }
   __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i2 | 0, i11, i5);
   i19 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i21 = i19 + 8 | 0;
     i14 = i21 | 0;
     i22 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i22;
     if ((i22 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i1, i15);
   if (i3) {
    break;
   }
   i19 = i20 + 8 | 0;
   i21 = i19 | 0;
   i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   HEAP32[i21 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i12 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i12 = i1 + 8 | 0;
 i1 = i12 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
 STACKTOP = i4;
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
function __ZN7WebCore17InsertTextCommandD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 24;
 i2 = HEAP32[i1 + 164 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 152 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1 | 0;
  __ZN7WebCore20CompositeEditCommandD2Ev(i6);
  return;
 }
 i5 = i2 | 0;
 i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i6 = i1 | 0;
  __ZN7WebCore20CompositeEditCommandD2Ev(i6);
  return;
 } else {
  HEAP32[i5 >> 2] = i3;
  i6 = i1 | 0;
  __ZN7WebCore20CompositeEditCommandD2Ev(i6);
  return;
 }
}
function __ZN7WebCore17InsertTextCommandD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 24;
 i2 = HEAP32[i1 + 164 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 152 >> 2] | 0;
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
 __ZN7WebCore20CompositeEditCommandD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_viii + 2;
}
function __ZN7WebCore17InsertTextCommandC2ERNS_8DocumentERKN3WTF6StringENS3_10PassRefPtrINS_27TextInsertionMarkerSupplierEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 24;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 152 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 156 | 0] = 0;
 HEAP32[i1 + 160 >> 2] = 0;
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 164 >> 2] = i4;
 return;
}
function __ZN7WebCore17InsertTextCommandC1ERNS_8DocumentERKN3WTF6StringENS3_10PassRefPtrINS_27TextInsertionMarkerSupplierEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 24;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 152 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 156 | 0] = 0;
 HEAP32[i1 + 160 >> 2] = 0;
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 164 >> 2] = i4;
 return;
}
function __ZN7WebCore17InsertTextCommand35setEndingSelectionWithoutValidationERKNS_8PositionES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 __ZN7WebCore16VisibleSelectionC1Ev(i5);
 __ZN7WebCore16VisibleSelection20setWithoutValidationERKNS_8PositionES3_(i5, i2, i3);
 i3 = i5 + 56 | 0;
 HEAP8[i3] = HEAP8[i3] & -3 | HEAP8[i1 + 128 | 0] & 2;
 __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i1 | 0, i5);
 __ZN7WebCore16VisibleSelectionD2Ev(i5);
 STACKTOP = i4;
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
function __ZN7WebCore17InsertTextCommandC2ERNS_8DocumentERKN3WTF6StringEbNS0_13RebalanceTypeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 24;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 152 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 156 | 0] = i4 & 1;
 HEAP32[i1 + 160 >> 2] = i5;
 HEAP32[i1 + 164 >> 2] = 0;
 return;
}
function __ZN7WebCore17InsertTextCommandC1ERNS_8DocumentERKN3WTF6StringEbNS0_13RebalanceTypeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 24;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 152 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 156 | 0] = i4 & 1;
 HEAP32[i1 + 160 >> 2] = i5;
 HEAP32[i1 + 164 >> 2] = 0;
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
 FUNCTION_TABLE_viiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
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
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
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
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore17InsertTextCommandC2ERNS_8DocumentERKN3WTF6StringEbNS0_13RebalanceTypeE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore17InsertTextCommand7doApplyEv,b1,__ZN7WebCore17InsertTextCommandD0Ev,b1,__ZN7WebCore17InsertTextCommandD1Ev,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb__wrapper,b2];
  var FUNCTION_TABLE_ii = [b3,b3,ii___ZNK7WebCore11EditCommand13editingActionEv__wrapper,b3,__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv,b3,ii___ZNK7WebCore20CompositeEditCommand15isTypingCommandEv__wrapper,b3,ii___ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv__wrapper,b3,ii___ZNK7WebCore20CompositeEditCommand20preservesTypingStyleEv__wrapper,b3,__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv,b3,__ZNK7WebCore11EditCommand24isEditCommandCompositionEv,b3,__ZNK7WebCore11EditCommand19isSimpleEditCommandEv,b3,ii___ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv__wrapper,b3,__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,viii___ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE__wrapper,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,viiii___ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj__wrapper,b7,__ZN7WebCore17InsertTextCommandC2ERNS_8DocumentERKN3WTF6StringENS3_10PassRefPtrINS_27TextInsertionMarkerSupplierEEE,b7,b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv","__ZN7WebCore16VisibleSelectionD2Ev","_strlen","__ZN7WebCore17InsertTextCommand21performTrivialReplaceERKN3WTF6StringEb","__ZN7WebCore17InsertTextCommand22positionInsideTextNodeERKNS_8PositionE","__ZN7WebCore17InsertTextCommandC2ERNS_8DocumentERKN3WTF6StringENS3_10PassRefPtrINS_27TextInsertionMarkerSupplierEEE","__ZN7WebCore18lastPositionInNodeEPNS_4NodeE","__ZN7WebCore17InsertTextCommandD0Ev","__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv","__ZN7WebCore17InsertTextCommandD1Ev","_memset","_memcpy","__ZN7WebCore17InsertTextCommandC2ERNS_8DocumentERKN3WTF6StringEbNS0_13RebalanceTypeE","__ZNK7WebCore11EditCommand19isSimpleEditCommandEv","__ZNK7WebCore11EditCommand24isEditCommandCompositionEv","__ZN7WebCore17InsertTextCommand7doApplyEv","__ZN7WebCore17InsertTextCommand9insertTabERKNS_8PositionE","__ZN7WebCore17InsertTextCommand16performOverwriteERKN3WTF6StringEb","__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZN7WebCore17InsertTextCommand35setEndingSelectionWithoutValidationERKNS_8PositionES3_"]

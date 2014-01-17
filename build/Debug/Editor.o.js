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
H_BASE = parentModule["_malloc"](144 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 144;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore6EditorC1ERNS_5FrameE;
var __ZN7WebCore6EditorD1Ev;
/* memory initializer */ allocate([98,111,100,121,0,0,0,0,105,110,104,101,114,105,116,0,114,116,108,0,0,0,0,0,108,116,114,0,0,0,0,0,84,111,103,103,108,101,85,110,100,101,114,108,105,110,101,0,84,111,103,103,108,101,66,111,108,100,0,0,0,0,0,0,9,0,0,0,0,0,0,0,97,102,116,101,114,45,119,104,105,116,101,45,115,112,97,99,101,0,0,0,0,0,0,0,115,112,97,99,101,0,0,0,98,114,101,97,107,45,119,111,114,100,0,0,0,0,0,0,32,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5);
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
  var __ZN7WebCore9HTMLNames6imgTagE=env.__ZN7WebCore9HTMLNames6imgTagE|0;
  var __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE=env.__ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE|0;
  var __ZN7WebCore9HTMLNames5ulTagE=env.__ZN7WebCore9HTMLNames5ulTagE|0;
  var __ZN7WebCore9HTMLNames7dirAttrE=env.__ZN7WebCore9HTMLNames7dirAttrE|0;
  var __ZN7WebCore9HTMLNames5olTagE=env.__ZN7WebCore9HTMLNames5olTagE|0;
  var __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE=env.__ZN7WebCore15ScrollAlignment19alignCenterIfNeededE|0;
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
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore6Editor24advanceToNextMisspellingEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 1104 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 80 | 0;
 i8 = i3 + 88 | 0;
 i9 = i3 + 104 | 0;
 i10 = i3 + 120 | 0;
 i11 = i3 + 136 | 0;
 i12 = i3 + 152 | 0;
 i13 = i3 + 168 | 0;
 i14 = i3 + 184 | 0;
 i15 = i3 + 192 | 0;
 i16 = i3 + 200 | 0;
 i17 = i3 + 208 | 0;
 i18 = i3 + 216 | 0;
 i19 = i3 + 232 | 0;
 i20 = i3 + 248 | 0;
 i21 = i3 + 264 | 0;
 i22 = i3 + 272 | 0;
 i23 = i3 + 280 | 0;
 i24 = i3 + 304 | 0;
 i25 = i3 + 312 | 0;
 i26 = i3 + 320 | 0;
 i27 = i3 + 328 | 0;
 i28 = i3 + 336 | 0;
 i29 = i3 + 344 | 0;
 i30 = i3 + 352 | 0;
 i31 = i3 + 360 | 0;
 i32 = i3 + 368 | 0;
 i33 = i3 + 376 | 0;
 i34 = i3 + 384 | 0;
 i35 = i3 + 392 | 0;
 i36 = i3 + 400 | 0;
 i37 = i3 + 408 | 0;
 i38 = i3 + 416 | 0;
 i39 = i3 + 424 | 0;
 i40 = i3 + 432 | 0;
 i41 = i3 + 584 | 0;
 i42 = i3 + 592 | 0;
 i43 = i3 + 600 | 0;
 i44 = i3 + 608 | 0;
 i45 = i3 + 616 | 0;
 i46 = i3 + 624 | 0;
 i47 = i3 + 632 | 0;
 i48 = i3 + 640 | 0;
 i49 = i3 + 648 | 0;
 i50 = i3 + 656 | 0;
 i51 = i3 + 664 | 0;
 i52 = i3 + 672 | 0;
 i53 = i3 + 680 | 0;
 i54 = i3 + 688 | 0;
 i55 = i3 + 696 | 0;
 i56 = i3 + 704 | 0;
 i57 = i3 + 712 | 0;
 i58 = i3 + 720 | 0;
 i59 = i3 + 728 | 0;
 i60 = i3 + 736 | 0;
 i61 = i3 + 744 | 0;
 i62 = i3 + 752 | 0;
 i63 = i3 + 904 | 0;
 i64 = i3 + 912 | 0;
 i65 = i3 + 920 | 0;
 i66 = i3 + 928 | 0;
 i67 = i3 + 936 | 0;
 i68 = i3 + 944 | 0;
 i69 = i3 + 952 | 0;
 i70 = i3 + 960 | 0;
 i71 = i3 + 968 | 0;
 i72 = i3 + 1032 | 0;
 i73 = i3 + 1040 | 0;
 i74 = i1 | 0;
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i6, (HEAP32[(HEAP32[i74 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0);
 __ZN7WebCore15rangeOfContentsERNS_4NodeE(i7, HEAP32[(HEAP32[i74 >> 2] | 0) + 456 >> 2] | 0);
 i1 = i7 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i1 = HEAP32[i6 + 24 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i75 = 0;
  } else {
   i76 = HEAP32[i1 + 8 >> 2] | 0;
   i77 = i1 + 8 | 0;
   i78 = i77 - 8 | 0;
   HEAP32[i77 >> 2] = i76;
   do {
    if ((i76 | 0) < 1) {
     if ((HEAP32[i77 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i78);
    }
   } while (0);
   if (!i2) {
    if ((HEAP32[i6 + 52 >> 2] | 0) == 2) {
     i79 = 0;
    } else {
     i79 = HEAP32[i6 + 48 >> 2] | 0;
    }
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i10, i6 + 36 | 0, i79);
    __ZN7WebCore8setStartEPNS_5RangeERKNS_15VisiblePositionE(i7, i10) | 0;
    i78 = HEAP32[i10 >> 2] | 0;
    if ((i78 | 0) == 0) {
     i75 = 1;
     break;
    }
    i77 = i78 + 8 | 0;
    i78 = i77 | 0;
    i76 = (HEAP32[i78 >> 2] | 0) - 1 | 0;
    HEAP32[i78 >> 2] = i76;
    if ((i76 | 0) >= 1) {
     i75 = 1;
     break;
    }
    if ((HEAP32[i77 + 8 >> 2] | 0) != 0) {
     i75 = 1;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i77 - 8 | 0);
    i75 = 1;
    break;
   }
   if ((HEAP32[i6 + 52 >> 2] | 0) == 2) {
    i80 = 1;
   } else {
    i80 = HEAP32[i6 + 48 >> 2] | 0;
   }
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i6 + 24 | 0, i80);
   __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i9, i8, 0);
   i77 = i9 | 0;
   __ZN7WebCore8setStartEPNS_5RangeERKNS_15VisiblePositionE(i7, (HEAP32[i77 >> 2] | 0) != 0 ? i9 : i8) | 0;
   i76 = HEAP32[i77 >> 2] | 0;
   do {
    if ((i76 | 0) != 0) {
     i77 = i76 + 8 | 0;
     i78 = i77 | 0;
     i81 = (HEAP32[i78 >> 2] | 0) - 1 | 0;
     HEAP32[i78 >> 2] = i81;
     if ((i81 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i77 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i77 - 8 | 0);
    }
   } while (0);
   i76 = HEAP32[i8 >> 2] | 0;
   if ((i76 | 0) == 0) {
    i75 = 1;
    break;
   }
   i77 = i76 + 8 | 0;
   i76 = i77 | 0;
   i81 = (HEAP32[i76 >> 2] | 0) - 1 | 0;
   HEAP32[i76 >> 2] = i81;
   if ((i81 | 0) >= 1) {
    i75 = 1;
    break;
   }
   if ((HEAP32[i77 + 8 >> 2] | 0) != 0) {
    i75 = 1;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i77 - 8 | 0);
   i75 = 1;
  }
 } while (0);
 i8 = i7 + 12 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) > -1) {
  i82 = i9;
 } else {
  i9 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i7 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i8 >> 2] = i9;
  i82 = i9;
 }
 i9 = HEAP32[i7 + 8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i83 = i82;
 } else {
  i82 = i9 + 8 | 0;
  HEAP32[i82 >> 2] = (HEAP32[i82 >> 2] | 0) + 1;
  i83 = HEAP32[i8 >> 2] | 0;
 }
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = i9;
 HEAP32[i5 >> 2] = i83;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i11, i4, i5);
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i4 = i8 | 0;
   i83 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i83;
   if ((i83 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 do {
  if (__ZN7WebCore18isEditablePositionERKNS_8PositionENS_12EditableTypeENS_12EUpdateStyleE(i11, 0, 0) | 0) {
   i84 = i75;
   i85 = 56;
  } else {
   __ZN7WebCore40firstEditablePositionAfterPositionInRootERKNS_8PositionEPNS_4NodeE(i12, i11, HEAP32[(HEAP32[(HEAP32[i74 >> 2] | 0) + 456 >> 2] | 0) + 692 >> 2] | 0);
   i5 = i12 | 0;
   i8 = HEAP32[i5 >> 2] | 0;
   if ((i8 | 0) != 0) {
    i83 = i8 + 8 | 0;
    HEAP32[i83 >> 2] = (HEAP32[i83 >> 2] | 0) + 1;
   }
   i83 = HEAP32[i12 + 4 >> 2] | 0;
   i4 = HEAP32[i12 + 8 >> 2] | 0;
   i9 = i4 & 8;
   i82 = i11 | 0;
   i80 = HEAP32[i82 >> 2] | 0;
   HEAP32[i82 >> 2] = i8;
   do {
    if ((i80 | 0) != 0) {
     i8 = i80 + 8 | 0;
     i10 = i8 | 0;
     i79 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     HEAP32[i10 >> 2] = i79;
     if ((i79 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
    }
   } while (0);
   HEAP32[i11 + 4 >> 2] = i83;
   i80 = i11 + 8 | 0;
   i8 = i80;
   i79 = HEAP32[i8 >> 2] & -8 | i4 & 7;
   HEAP32[i8 >> 2] = i79;
   HEAP8[i80] = i79 & 255 & -9 | i9;
   i79 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i79 | 0) != 0) {
     i80 = i79 + 8 | 0;
     i8 = i80 | 0;
     i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     HEAP32[i8 >> 2] = i10;
     if ((i10 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i80 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i80 - 8 | 0);
    }
   } while (0);
   if ((HEAP32[i82 >> 2] | 0) == 0) {
    break;
   }
   __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i13, i11);
   i79 = i13 | 0;
   i5 = HEAP32[i79 >> 2] | 0;
   i9 = i14 | 0;
   HEAP32[i9 >> 2] = i5;
   if ((i5 | 0) != 0) {
    i4 = i5 + 8 | 0;
    HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
   }
   i4 = i13 + 8 | 0;
   do {
    if ((HEAP8[i4] & 8) == 0) {
     i5 = HEAP32[i4 >> 2] & 7;
     if (!((i5 | 0) == 2 | (i5 | 0) == 4)) {
      i85 = 46;
      break;
     }
     i86 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i13) | 0;
    } else {
     i85 = 46;
    }
   } while (0);
   if ((i85 | 0) == 46) {
    i86 = HEAP32[i13 + 4 >> 2] | 0;
   }
   i4 = i15 | 0;
   HEAP32[i4 >> 2] = 0;
   __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i7, i14, i86, i4);
   i4 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i82 = i4 + 8 | 0;
     i5 = i82 | 0;
     i83 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     HEAP32[i5 >> 2] = i83;
     if ((i83 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i82 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i82 - 8 | 0);
    }
   } while (0);
   i4 = HEAP32[i79 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i84 = 0;
    i85 = 56;
    break;
   }
   i9 = i4 + 8 | 0;
   i4 = i9 | 0;
   i82 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i82;
   if ((i82 | 0) >= 1) {
    i84 = 0;
    i85 = 56;
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    i84 = 0;
    i85 = 56;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
   i84 = 0;
   i85 = 56;
  }
 } while (0);
 do {
  if ((i85 | 0) == 56) {
   i86 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i11, 0) | 0;
   i14 = i16 | 0;
   HEAP32[i14 >> 2] = i86;
   i15 = (i86 | 0) == 0;
   if (!i15) {
    i13 = i86 + 8 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   }
   i13 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i86) | 0;
   i12 = i17 | 0;
   HEAP32[i12 >> 2] = 0;
   __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i7, i16, i13, i12);
   i12 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i14 = i12 + 8 | 0;
     i13 = i14 | 0;
     i75 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     HEAP32[i13 >> 2] = i75;
     if ((i75 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   do {
    if (i84) {
     __ZN7WebCore20startVisiblePositionEPKNS_5RangeENS_9EAffinityE(i19, i7, 1);
     __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i18, i19, 0);
     i12 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i12 | 0) != 0) {
       i79 = i12 + 8 | 0;
       i14 = i79 | 0;
       i75 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
       HEAP32[i14 >> 2] = i75;
       if ((i75 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i79 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i79 - 8 | 0);
      }
     } while (0);
     i12 = i18 | 0;
     if ((HEAP32[i12 >> 2] | 0) == 0) {
      break;
     }
     __ZN7WebCore9endOfWordERKNS_15VisiblePositionENS_9EWordSideE(i20, i18, 0);
     __ZN7WebCore8setStartEPNS_5RangeERKNS_15VisiblePositionE(i7, i20) | 0;
     i79 = HEAP32[i20 >> 2] | 0;
     do {
      if ((i79 | 0) != 0) {
       i75 = i79 + 8 | 0;
       i14 = i75 | 0;
       i13 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
       HEAP32[i14 >> 2] = i13;
       if ((i13 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i75 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i75 - 8 | 0);
      }
     } while (0);
     i79 = HEAP32[i12 >> 2] | 0;
     if ((i79 | 0) == 0) {
      break;
     }
     i75 = i79 + 8 | 0;
     i79 = i75 | 0;
     i13 = (HEAP32[i79 >> 2] | 0) - 1 | 0;
     HEAP32[i79 >> 2] = i13;
     if ((i13 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i75 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i75 - 8 | 0);
    }
   } while (0);
   i75 = i21 | 0;
   HEAP32[i75 >> 2] = 0;
   if (__ZNK7WebCore5Range9collapsedERi(i7, i75) | 0) {
    break;
   }
   i75 = HEAP32[i74 >> 2] | 0;
   i13 = HEAP32[i75 + 32 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   if ((HEAP32[i13 + 72 >> 2] | 0) == 0) {
    break;
   }
   i13 = HEAP32[i7 + 20 >> 2] | 0;
   i79 = i7 + 24 | 0;
   i14 = HEAP32[i79 >> 2] | 0;
   if ((i14 | 0) > -1) {
    i87 = i14;
    i88 = i75;
   } else {
    i75 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i7 + 28 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i79 >> 2] = i75;
    i87 = i75;
    i88 = HEAP32[i74 >> 2] | 0;
   }
   HEAP32[i22 >> 2] = 0;
   i75 = i23 + 8 | 0;
   _memset(i75 | 0, 0, 16) | 0;
   HEAP32[i24 >> 2] = 0;
   i79 = i25 | 0;
   HEAP32[i79 >> 2] = 0;
   i14 = i26 | 0;
   HEAP32[i14 >> 2] = 0;
   HEAP8[i27] = 1;
   HEAP32[i28 >> 2] = 0;
   i9 = i29 | 0;
   HEAP32[i9 >> 2] = 0;
   do {
    if (__ZN7WebCore25unifiedTextCheckerEnabledEPKNS_5FrameE(i88) | 0) {
     i82 = i31 | 0;
     HEAP32[i82 >> 2] = 0;
     __ZNK7WebCore5Range10cloneRangeERi(i30, i7, i82);
     i82 = i30 | 0;
     i4 = HEAP32[i82 >> 2] | 0;
     HEAP32[i82 >> 2] = 0;
     i82 = HEAP32[(HEAP32[i74 >> 2] | 0) + 32 >> 2] | 0;
     if ((i82 | 0) == 0) {
      i89 = 0;
     } else {
      i89 = HEAP32[i82 + 72 >> 2] | 0;
     }
     i82 = i34 | 0;
     HEAP32[i82 >> 2] = i7;
     if ((i7 | 0) != 0) {
      i83 = i7 | 0;
      HEAP32[i83 >> 2] = (HEAP32[i83 >> 2] | 0) + 1;
     }
     __ZN7WebCore18TextCheckingHelperC1EPNS_12EditorClientEN3WTF10PassRefPtrINS_5RangeEEE(i33, i89, i34);
     i83 = HEAP32[(HEAP32[i74 >> 2] | 0) + 32 >> 2] | 0;
     do {
      if ((i83 | 0) == 0) {
       i90 = 0;
      } else {
       i5 = HEAP32[i83 + 72 >> 2] | 0;
       if ((i5 | 0) == 0) {
        i90 = 0;
        break;
       }
       i90 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] & 1](i5) | 0;
      }
     } while (0);
     __ZN7WebCore18TextCheckingHelper32findFirstMisspellingOrBadGrammarEbRbRiRNS_13GrammarDetailE(i32, i33, i90, i27, i28, i23);
     i83 = i32 | 0;
     i12 = HEAP32[i83 >> 2] | 0;
     HEAP32[i83 >> 2] = 0;
     __ZN7WebCore18TextCheckingHelperD1Ev(i33);
     i83 = HEAP32[i82 >> 2] | 0;
     do {
      if ((i83 | 0) != 0) {
       i5 = i83 | 0;
       i80 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
       if ((i80 | 0) == 0) {
        __ZN7WebCore5RangeD1Ev(i83);
        __ZN3WTF8fastFreeEPv(i83);
        break;
       } else {
        HEAP32[i5 >> 2] = i80;
        break;
       }
      }
     } while (0);
     i83 = (i12 | 0) == 0;
     if ((HEAP8[i27] & 1) == 0) {
      if (!i83) {
       i82 = i12 | 0;
       HEAP32[i82 >> 2] = (HEAP32[i82 >> 2] | 0) + 2;
      }
      i82 = HEAP32[i79 >> 2] | 0;
      HEAP32[i79 >> 2] = i12;
      do {
       if ((i82 | 0) != 0) {
        i80 = i82 | 0;
        i5 = (HEAP32[i80 >> 2] | 0) - 2 | 0;
        if ((i5 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i82);
         break;
        } else {
         HEAP32[i80 >> 2] = i5;
         break;
        }
       }
      } while (0);
      HEAP32[i24 >> 2] = HEAP32[i28 >> 2];
      i91 = i12;
      i92 = i4;
      break;
     } else {
      if (!i83) {
       i82 = i12 | 0;
       HEAP32[i82 >> 2] = (HEAP32[i82 >> 2] | 0) + 2;
      }
      i82 = HEAP32[i14 >> 2] | 0;
      HEAP32[i14 >> 2] = i12;
      do {
       if ((i82 | 0) != 0) {
        i5 = i82 | 0;
        i80 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
        if ((i80 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i82);
         break;
        } else {
         HEAP32[i5 >> 2] = i80;
         break;
        }
       }
      } while (0);
      HEAP32[i22 >> 2] = HEAP32[i28 >> 2];
      i91 = i12;
      i92 = i4;
      break;
     }
    } else {
     i82 = HEAP32[(HEAP32[i74 >> 2] | 0) + 32 >> 2] | 0;
     if ((i82 | 0) == 0) {
      i93 = 0;
     } else {
      i93 = HEAP32[i82 + 72 >> 2] | 0;
     }
     i82 = i37 | 0;
     HEAP32[i82 >> 2] = i7;
     if ((i7 | 0) != 0) {
      i83 = i7 | 0;
      HEAP32[i83 >> 2] = (HEAP32[i83 >> 2] | 0) + 1;
     }
     __ZN7WebCore18TextCheckingHelperC1EPNS_12EditorClientEN3WTF10PassRefPtrINS_5RangeEEE(i36, i93, i37);
     __ZN7WebCore18TextCheckingHelper20findFirstMisspellingERibRN3WTF6RefPtrINS_5RangeEEE(i35, i36, i22, 0, i29);
     i83 = i35 | 0;
     i80 = HEAP32[i83 >> 2] | 0;
     HEAP32[i83 >> 2] = 0;
     i5 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i80;
     do {
      if ((i5 | 0) != 0) {
       i80 = i5 | 0;
       i10 = (HEAP32[i80 >> 2] | 0) - 2 | 0;
       if ((i10 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i5);
        break;
       } else {
        HEAP32[i80 >> 2] = i10;
        break;
       }
      }
     } while (0);
     i5 = HEAP32[i83 >> 2] | 0;
     do {
      if ((i5 | 0) != 0) {
       i4 = i5 | 0;
       i12 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
       if ((i12 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i5);
        break;
       } else {
        HEAP32[i4 >> 2] = i12;
        break;
       }
      }
     } while (0);
     __ZN7WebCore18TextCheckingHelperD1Ev(i36);
     i5 = HEAP32[i82 >> 2] | 0;
     do {
      if ((i5 | 0) != 0) {
       i83 = i5 | 0;
       i12 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
       if ((i12 | 0) == 0) {
        __ZN7WebCore5RangeD1Ev(i5);
        __ZN3WTF8fastFreeEPv(i5);
        break;
       } else {
        HEAP32[i83 >> 2] = i12;
        break;
       }
      }
     } while (0);
     i5 = i39 | 0;
     HEAP32[i5 >> 2] = 0;
     __ZNK7WebCore5Range10cloneRangeERi(i38, i7, i5);
     i5 = i38 | 0;
     i82 = HEAP32[i5 >> 2] | 0;
     HEAP32[i5 >> 2] = 0;
     i5 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i5 | 0) != 0) {
       if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
        break;
       }
       __ZN7WebCore17CharacterIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE(i40, i82, 0);
       __ZN7WebCore17CharacterIterator7advanceEi(i40, HEAP32[i22 >> 2] | 0);
       __ZNK7WebCore17CharacterIterator5rangeEv(i42, i40);
       i12 = i42 | 0;
       i83 = HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0;
       i4 = i41 | 0;
       HEAP32[i4 >> 2] = i83;
       if ((i83 | 0) != 0) {
        i10 = i83 + 8 | 0;
        HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
       }
       __ZNK7WebCore17CharacterIterator5rangeEv(i43, i40);
       i10 = i43 | 0;
       i83 = HEAP32[i10 >> 2] | 0;
       i80 = i83 + 12 | 0;
       i8 = HEAP32[i80 >> 2] | 0;
       if ((i8 | 0) > -1) {
        i94 = i8;
       } else {
        i8 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i83 + 16 >> 2] | 0) | 0) + 1 | 0;
        HEAP32[i80 >> 2] = i8;
        i94 = i8;
       }
       i8 = i44 | 0;
       HEAP32[i8 >> 2] = 0;
       __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i82, i41, i94, i8);
       i8 = HEAP32[i10 >> 2] | 0;
       do {
        if ((i8 | 0) != 0) {
         i10 = i8 | 0;
         i80 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
         if ((i80 | 0) == 0) {
          __ZN7WebCore5RangeD1Ev(i8);
          __ZN3WTF8fastFreeEPv(i8);
          break;
         } else {
          HEAP32[i10 >> 2] = i80;
          break;
         }
        }
       } while (0);
       i8 = HEAP32[i4 >> 2] | 0;
       do {
        if ((i8 | 0) != 0) {
         i80 = i8 + 8 | 0;
         i10 = i80 | 0;
         i83 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
         HEAP32[i10 >> 2] = i83;
         if ((i83 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i80 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i80 - 8 | 0);
        }
       } while (0);
       i8 = HEAP32[i12 >> 2] | 0;
       do {
        if ((i8 | 0) != 0) {
         i4 = i8 | 0;
         i80 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
         if ((i80 | 0) == 0) {
          __ZN7WebCore5RangeD1Ev(i8);
          __ZN3WTF8fastFreeEPv(i8);
          break;
         } else {
          HEAP32[i4 >> 2] = i80;
          break;
         }
        }
       } while (0);
       __ZN7WebCore12TextIteratorD1Ev(i40 + 12 | 0);
      }
     } while (0);
     i5 = HEAP32[(HEAP32[i74 >> 2] | 0) + 32 >> 2] | 0;
     if ((i5 | 0) == 0) {
      i91 = 0;
      i92 = i82;
      break;
     }
     i8 = HEAP32[i5 + 72 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i91 = 0;
      i92 = i82;
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] & 1](i8) | 0)) {
      i91 = 0;
      i92 = i82;
      break;
     }
     i8 = HEAP32[(HEAP32[i74 >> 2] | 0) + 32 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i95 = 0;
     } else {
      i95 = HEAP32[i8 + 72 >> 2] | 0;
     }
     i8 = i47 | 0;
     HEAP32[i8 >> 2] = i82;
     if ((i82 | 0) != 0) {
      i5 = i82 | 0;
      HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
     }
     __ZN7WebCore18TextCheckingHelperC1EPNS_12EditorClientEN3WTF10PassRefPtrINS_5RangeEEE(i46, i95, i47);
     __ZNK7WebCore18TextCheckingHelper19findFirstBadGrammarERNS_13GrammarDetailERib(i45, i46, i23, i24, 0);
     i5 = i45 | 0;
     i12 = HEAP32[i5 >> 2] | 0;
     HEAP32[i5 >> 2] = 0;
     i80 = HEAP32[i79 >> 2] | 0;
     HEAP32[i79 >> 2] = i12;
     do {
      if ((i80 | 0) != 0) {
       i12 = i80 | 0;
       i4 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
       if ((i4 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i80);
        break;
       } else {
        HEAP32[i12 >> 2] = i4;
        break;
       }
      }
     } while (0);
     i80 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i80 | 0) != 0) {
       i4 = i80 | 0;
       i12 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
       if ((i12 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i80);
        break;
       } else {
        HEAP32[i4 >> 2] = i12;
        break;
       }
      }
     } while (0);
     __ZN7WebCore18TextCheckingHelperD1Ev(i46);
     i80 = HEAP32[i8 >> 2] | 0;
     if ((i80 | 0) == 0) {
      i91 = 0;
      i92 = i82;
      break;
     }
     i5 = i80 | 0;
     i12 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i80);
      __ZN3WTF8fastFreeEPv(i80);
      i91 = 0;
      i92 = i82;
      break;
     } else {
      HEAP32[i5 >> 2] = i12;
      i91 = 0;
      i92 = i82;
      break;
     }
    }
   } while (0);
   do {
    if (i84) {
     if ((HEAP32[i14 >> 2] | 0) != 0) {
      i96 = i91;
      i97 = i92;
      i85 = 282;
      break;
     }
     i12 = HEAP32[i79 >> 2] | 0;
     if ((i12 | 0) != 0) {
      i98 = i12;
      i99 = i92;
      i100 = i91;
      i85 = 283;
      break;
     }
     i12 = i48 | 0;
     HEAP32[i12 >> 2] = i86;
     if (!i15) {
      i5 = i86 + 8 | 0;
      HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
     }
     i5 = i49 | 0;
     HEAP32[i5 >> 2] = 0;
     __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i7, i48, 0, i5);
     i5 = HEAP32[i12 >> 2] | 0;
     do {
      if ((i5 | 0) != 0) {
       i12 = i5 + 8 | 0;
       i80 = i12 | 0;
       i4 = (HEAP32[i80 >> 2] | 0) - 1 | 0;
       HEAP32[i80 >> 2] = i4;
       if ((i4 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
      }
     } while (0);
     i5 = i50 | 0;
     HEAP32[i5 >> 2] = i13;
     if ((i13 | 0) != 0) {
      i82 = i13 + 8 | 0;
      HEAP32[i82 >> 2] = (HEAP32[i82 >> 2] | 0) + 1;
     }
     i82 = i51 | 0;
     HEAP32[i82 >> 2] = 0;
     __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i7, i50, i87, i82);
     i82 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i82 | 0) != 0) {
       i5 = i82 + 8 | 0;
       i8 = i5 | 0;
       i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
       HEAP32[i8 >> 2] = i12;
       if ((i12 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
      }
     } while (0);
     if (__ZN7WebCore25unifiedTextCheckerEnabledEPKNS_5FrameE(HEAP32[i74 >> 2] | 0) | 0) {
      i82 = i53 | 0;
      HEAP32[i82 >> 2] = 0;
      __ZNK7WebCore5Range10cloneRangeERi(i52, i7, i82);
      i82 = i52 | 0;
      i5 = HEAP32[i82 >> 2] | 0;
      HEAP32[i82 >> 2] = 0;
      do {
       if ((i92 | 0) != 0) {
        i12 = i92 | 0;
        i8 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
        if ((i8 | 0) == 0) {
         __ZN7WebCore5RangeD1Ev(i92);
         __ZN3WTF8fastFreeEPv(i92);
        } else {
         HEAP32[i12 >> 2] = i8;
        }
        i8 = HEAP32[i82 >> 2] | 0;
        if ((i8 | 0) == 0) {
         break;
        }
        i12 = i8 | 0;
        i4 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
        if ((i4 | 0) == 0) {
         __ZN7WebCore5RangeD1Ev(i8);
         __ZN3WTF8fastFreeEPv(i8);
         break;
        } else {
         HEAP32[i12 >> 2] = i4;
         break;
        }
       }
      } while (0);
      i82 = HEAP32[(HEAP32[i74 >> 2] | 0) + 32 >> 2] | 0;
      if ((i82 | 0) == 0) {
       i101 = 0;
      } else {
       i101 = HEAP32[i82 + 72 >> 2] | 0;
      }
      i82 = i56 | 0;
      HEAP32[i82 >> 2] = i7;
      if ((i7 | 0) != 0) {
       i4 = i7 | 0;
       HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
      }
      __ZN7WebCore18TextCheckingHelperC1EPNS_12EditorClientEN3WTF10PassRefPtrINS_5RangeEEE(i55, i101, i56);
      i4 = HEAP32[(HEAP32[i74 >> 2] | 0) + 32 >> 2] | 0;
      do {
       if ((i4 | 0) == 0) {
        i102 = 0;
       } else {
        i12 = HEAP32[i4 + 72 >> 2] | 0;
        if ((i12 | 0) == 0) {
         i102 = 0;
         break;
        }
        i102 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 32 >> 2] & 1](i12) | 0;
       }
      } while (0);
      __ZN7WebCore18TextCheckingHelper32findFirstMisspellingOrBadGrammarEbRbRiRNS_13GrammarDetailE(i54, i55, i102, i27, i28, i23);
      i4 = i54 | 0;
      i12 = HEAP32[i4 >> 2] | 0;
      HEAP32[i4 >> 2] = 0;
      do {
       if ((i91 | 0) != 0) {
        i8 = i91 | 0;
        i80 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
        if ((i80 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i91);
        } else {
         HEAP32[i8 >> 2] = i80;
        }
        i80 = HEAP32[i4 >> 2] | 0;
        if ((i80 | 0) == 0) {
         break;
        }
        i8 = i80 | 0;
        i83 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
        if ((i83 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i80);
         break;
        } else {
         HEAP32[i8 >> 2] = i83;
         break;
        }
       }
      } while (0);
      __ZN7WebCore18TextCheckingHelperD1Ev(i55);
      i4 = HEAP32[i82 >> 2] | 0;
      do {
       if ((i4 | 0) != 0) {
        i83 = i4 | 0;
        i8 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
        if ((i8 | 0) == 0) {
         __ZN7WebCore5RangeD1Ev(i4);
         __ZN3WTF8fastFreeEPv(i4);
         break;
        } else {
         HEAP32[i83 >> 2] = i8;
         break;
        }
       }
      } while (0);
      i4 = (i12 | 0) == 0;
      if ((HEAP8[i27] & 1) == 0) {
       if (!i4) {
        i82 = i12 | 0;
        HEAP32[i82 >> 2] = (HEAP32[i82 >> 2] | 0) + 2;
       }
       i82 = HEAP32[i79 >> 2] | 0;
       HEAP32[i79 >> 2] = i12;
       do {
        if ((i82 | 0) != 0) {
         i8 = i82 | 0;
         i83 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
         if ((i83 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i82);
          break;
         } else {
          HEAP32[i8 >> 2] = i83;
          break;
         }
        }
       } while (0);
       HEAP32[i24 >> 2] = HEAP32[i28 >> 2];
       i96 = i12;
       i97 = i5;
       i85 = 282;
       break;
      } else {
       if (!i4) {
        i82 = i12 | 0;
        HEAP32[i82 >> 2] = (HEAP32[i82 >> 2] | 0) + 2;
       }
       i82 = HEAP32[i14 >> 2] | 0;
       HEAP32[i14 >> 2] = i12;
       do {
        if ((i82 | 0) != 0) {
         i83 = i82 | 0;
         i8 = (HEAP32[i83 >> 2] | 0) - 2 | 0;
         if ((i8 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i82);
          break;
         } else {
          HEAP32[i83 >> 2] = i8;
          break;
         }
        }
       } while (0);
       HEAP32[i22 >> 2] = HEAP32[i28 >> 2];
       i96 = i12;
       i97 = i5;
       i85 = 282;
       break;
      }
     }
     i82 = HEAP32[(HEAP32[i74 >> 2] | 0) + 32 >> 2] | 0;
     if ((i82 | 0) == 0) {
      i103 = 0;
     } else {
      i103 = HEAP32[i82 + 72 >> 2] | 0;
     }
     i82 = i59 | 0;
     HEAP32[i82 >> 2] = i7;
     if ((i7 | 0) != 0) {
      i4 = i7 | 0;
      HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
     }
     __ZN7WebCore18TextCheckingHelperC1EPNS_12EditorClientEN3WTF10PassRefPtrINS_5RangeEEE(i58, i103, i59);
     __ZN7WebCore18TextCheckingHelper20findFirstMisspellingERibRN3WTF6RefPtrINS_5RangeEEE(i57, i58, i22, 0, i29);
     i4 = i57 | 0;
     i8 = HEAP32[i4 >> 2] | 0;
     HEAP32[i4 >> 2] = 0;
     i83 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i8;
     do {
      if ((i83 | 0) != 0) {
       i8 = i83 | 0;
       i80 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
       if ((i80 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i83);
        break;
       } else {
        HEAP32[i8 >> 2] = i80;
        break;
       }
      }
     } while (0);
     i83 = HEAP32[i4 >> 2] | 0;
     do {
      if ((i83 | 0) != 0) {
       i5 = i83 | 0;
       i12 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
       if ((i12 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i83);
        break;
       } else {
        HEAP32[i5 >> 2] = i12;
        break;
       }
      }
     } while (0);
     __ZN7WebCore18TextCheckingHelperD1Ev(i58);
     i83 = HEAP32[i82 >> 2] | 0;
     do {
      if ((i83 | 0) != 0) {
       i4 = i83 | 0;
       i12 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
       if ((i12 | 0) == 0) {
        __ZN7WebCore5RangeD1Ev(i83);
        __ZN3WTF8fastFreeEPv(i83);
        break;
       } else {
        HEAP32[i4 >> 2] = i12;
        break;
       }
      }
     } while (0);
     i83 = i61 | 0;
     HEAP32[i83 >> 2] = 0;
     __ZNK7WebCore5Range10cloneRangeERi(i60, i7, i83);
     i83 = i60 | 0;
     i82 = HEAP32[i83 >> 2] | 0;
     HEAP32[i83 >> 2] = 0;
     do {
      if ((i92 | 0) != 0) {
       i12 = i92 | 0;
       i4 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
       if ((i4 | 0) == 0) {
        __ZN7WebCore5RangeD1Ev(i92);
        __ZN3WTF8fastFreeEPv(i92);
       } else {
        HEAP32[i12 >> 2] = i4;
       }
       i4 = HEAP32[i83 >> 2] | 0;
       if ((i4 | 0) == 0) {
        break;
       }
       i12 = i4 | 0;
       i5 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
       if ((i5 | 0) == 0) {
        __ZN7WebCore5RangeD1Ev(i4);
        __ZN3WTF8fastFreeEPv(i4);
        break;
       } else {
        HEAP32[i12 >> 2] = i5;
        break;
       }
      }
     } while (0);
     i83 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i83 | 0) != 0) {
       if ((HEAP32[i83 + 4 >> 2] | 0) == 0) {
        break;
       }
       __ZN7WebCore17CharacterIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE(i62, i82, 0);
       __ZN7WebCore17CharacterIterator7advanceEi(i62, HEAP32[i22 >> 2] | 0);
       __ZNK7WebCore17CharacterIterator5rangeEv(i64, i62);
       i5 = i64 | 0;
       i12 = HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0;
       i4 = i63 | 0;
       HEAP32[i4 >> 2] = i12;
       if ((i12 | 0) != 0) {
        i80 = i12 + 8 | 0;
        HEAP32[i80 >> 2] = (HEAP32[i80 >> 2] | 0) + 1;
       }
       __ZNK7WebCore17CharacterIterator5rangeEv(i65, i62);
       i80 = i65 | 0;
       i12 = HEAP32[i80 >> 2] | 0;
       i8 = i12 + 12 | 0;
       i10 = HEAP32[i8 >> 2] | 0;
       if ((i10 | 0) > -1) {
        i104 = i10;
       } else {
        i10 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i12 + 16 >> 2] | 0) | 0) + 1 | 0;
        HEAP32[i8 >> 2] = i10;
        i104 = i10;
       }
       i10 = i66 | 0;
       HEAP32[i10 >> 2] = 0;
       __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i82, i63, i104, i10);
       i10 = HEAP32[i80 >> 2] | 0;
       do {
        if ((i10 | 0) != 0) {
         i80 = i10 | 0;
         i8 = (HEAP32[i80 >> 2] | 0) - 1 | 0;
         if ((i8 | 0) == 0) {
          __ZN7WebCore5RangeD1Ev(i10);
          __ZN3WTF8fastFreeEPv(i10);
          break;
         } else {
          HEAP32[i80 >> 2] = i8;
          break;
         }
        }
       } while (0);
       i10 = HEAP32[i4 >> 2] | 0;
       do {
        if ((i10 | 0) != 0) {
         i8 = i10 + 8 | 0;
         i80 = i8 | 0;
         i12 = (HEAP32[i80 >> 2] | 0) - 1 | 0;
         HEAP32[i80 >> 2] = i12;
         if ((i12 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
        }
       } while (0);
       i10 = HEAP32[i5 >> 2] | 0;
       do {
        if ((i10 | 0) != 0) {
         i4 = i10 | 0;
         i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
         if ((i8 | 0) == 0) {
          __ZN7WebCore5RangeD1Ev(i10);
          __ZN3WTF8fastFreeEPv(i10);
          break;
         } else {
          HEAP32[i4 >> 2] = i8;
          break;
         }
        }
       } while (0);
       __ZN7WebCore12TextIteratorD1Ev(i62 + 12 | 0);
      }
     } while (0);
     i83 = HEAP32[(HEAP32[i74 >> 2] | 0) + 32 >> 2] | 0;
     if ((i83 | 0) == 0) {
      i96 = i91;
      i97 = i82;
      i85 = 282;
      break;
     }
     i10 = HEAP32[i83 + 72 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i96 = i91;
      i97 = i82;
      i85 = 282;
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 32 >> 2] & 1](i10) | 0)) {
      i96 = i91;
      i97 = i82;
      i85 = 282;
      break;
     }
     i10 = HEAP32[(HEAP32[i74 >> 2] | 0) + 32 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i105 = 0;
     } else {
      i105 = HEAP32[i10 + 72 >> 2] | 0;
     }
     i10 = i69 | 0;
     HEAP32[i10 >> 2] = i82;
     if ((i82 | 0) != 0) {
      i83 = i82 | 0;
      HEAP32[i83 >> 2] = (HEAP32[i83 >> 2] | 0) + 1;
     }
     __ZN7WebCore18TextCheckingHelperC1EPNS_12EditorClientEN3WTF10PassRefPtrINS_5RangeEEE(i68, i105, i69);
     __ZNK7WebCore18TextCheckingHelper19findFirstBadGrammarERNS_13GrammarDetailERib(i67, i68, i23, i24, 0);
     i83 = i67 | 0;
     i5 = HEAP32[i83 >> 2] | 0;
     HEAP32[i83 >> 2] = 0;
     i8 = HEAP32[i79 >> 2] | 0;
     HEAP32[i79 >> 2] = i5;
     do {
      if ((i8 | 0) != 0) {
       i5 = i8 | 0;
       i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
       if ((i4 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i8);
        break;
       } else {
        HEAP32[i5 >> 2] = i4;
        break;
       }
      }
     } while (0);
     i8 = HEAP32[i83 >> 2] | 0;
     do {
      if ((i8 | 0) != 0) {
       i4 = i8 | 0;
       i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
       if ((i5 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i8);
        break;
       } else {
        HEAP32[i4 >> 2] = i5;
        break;
       }
      }
     } while (0);
     __ZN7WebCore18TextCheckingHelperD1Ev(i68);
     i8 = HEAP32[i10 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i96 = i91;
      i97 = i82;
      i85 = 282;
      break;
     }
     i83 = i8 | 0;
     i5 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
     if ((i5 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i8);
      __ZN3WTF8fastFreeEPv(i8);
      i96 = i91;
      i97 = i82;
      i85 = 282;
      break;
     } else {
      HEAP32[i83 >> 2] = i5;
      i96 = i91;
      i97 = i82;
      i85 = 282;
      break;
     }
    } else {
     i96 = i91;
     i97 = i92;
     i85 = 282;
    }
   } while (0);
   if ((i85 | 0) == 282) {
    i13 = HEAP32[i79 >> 2] | 0;
    if ((i13 | 0) == 0) {
     i106 = i96;
     i107 = i97;
     i85 = 288;
    } else {
     i98 = i13;
     i99 = i97;
     i100 = i96;
     i85 = 283;
    }
   }
   do {
    if ((i85 | 0) == 283) {
     if ((HEAP32[i98 + 4 >> 2] | 0) == 0) {
      i106 = i100;
      i107 = i99;
      i85 = 288;
      break;
     }
     __ZN7WebCore12TextIterator8subrangeEPNS_5RangeEii(i70, i99, (HEAP32[i23 >> 2] | 0) + (HEAP32[i24 >> 2] | 0) | 0, HEAP32[i23 + 4 >> 2] | 0);
     i13 = i70 | 0;
     i86 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     i13 = HEAP32[(HEAP32[i74 >> 2] | 0) + 468 >> 2] | 0;
     __ZN7WebCore16VisibleSelectionC1EPKNS_5RangeENS_9EAffinityEb(i71, i86, 1, 0);
     __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i13, i71, 6, 0, 0);
     __ZN7WebCore16VisibleSelectionD2Ev(i71);
     __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(HEAP32[(HEAP32[i74 >> 2] | 0) + 468 >> 2] | 0, __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE, 1);
     i13 = HEAP32[(HEAP32[(HEAP32[i74 >> 2] | 0) + 32 >> 2] | 0) + 72 >> 2] | 0;
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i13 >> 2] | 0) + 172 >> 2] & 1](i13, i25, i23);
     __ZN7WebCore24DocumentMarkerController9addMarkerEPNS_5RangeENS_14DocumentMarker10MarkerTypeERKN3WTF6StringE(HEAP32[(HEAP32[(HEAP32[i74 >> 2] | 0) + 456 >> 2] | 0) + 1124 >> 2] | 0, i86, 2, i23 + 20 | 0);
     if ((i86 | 0) == 0) {
      i108 = i100;
      i109 = i99;
      break;
     }
     i13 = i86 | 0;
     i15 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i15 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i86);
      __ZN3WTF8fastFreeEPv(i86);
      i108 = i100;
      i109 = i99;
      break;
     } else {
      HEAP32[i13 >> 2] = i15;
      i108 = i100;
      i109 = i99;
      break;
     }
    }
   } while (0);
   do {
    if ((i85 | 0) == 288) {
     i15 = HEAP32[i14 >> 2] | 0;
     if ((i15 | 0) == 0) {
      i108 = i106;
      i109 = i107;
      break;
     }
     i13 = HEAP32[i15 + 4 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i108 = i106;
      i109 = i107;
      break;
     }
     __ZN7WebCore12TextIterator8subrangeEPNS_5RangeEii(i72, i7, HEAP32[i22 >> 2] | 0, i13);
     i13 = i72 | 0;
     i15 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     i13 = HEAP32[(HEAP32[i74 >> 2] | 0) + 468 >> 2] | 0;
     __ZN7WebCore16VisibleSelectionC1EPKNS_5RangeENS_9EAffinityEb(i73, i15, 1, 0);
     __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i13, i73, 6, 0, 0);
     __ZN7WebCore16VisibleSelectionD2Ev(i73);
     __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(HEAP32[(HEAP32[i74 >> 2] | 0) + 468 >> 2] | 0, __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE, 1);
     i13 = HEAP32[(HEAP32[(HEAP32[i74 >> 2] | 0) + 32 >> 2] | 0) + 72 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 176 >> 2] & 3](i13, i26);
     __ZN7WebCore24DocumentMarkerController9addMarkerEPNS_5RangeENS_14DocumentMarker10MarkerTypeE(HEAP32[(HEAP32[(HEAP32[i74 >> 2] | 0) + 456 >> 2] | 0) + 1124 >> 2] | 0, i15, 1);
     if ((i15 | 0) == 0) {
      i108 = i106;
      i109 = i107;
      break;
     }
     i13 = i15 | 0;
     i86 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i86 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i15);
      __ZN3WTF8fastFreeEPv(i15);
      i108 = i106;
      i109 = i107;
      break;
     } else {
      HEAP32[i13 >> 2] = i86;
      i108 = i106;
      i109 = i107;
      break;
     }
    }
   } while (0);
   i86 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i86 | 0) != 0) {
     i13 = i86 | 0;
     i15 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i15 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i86);
      __ZN3WTF8fastFreeEPv(i86);
      break;
     } else {
      HEAP32[i13 >> 2] = i15;
      break;
     }
    }
   } while (0);
   do {
    if ((i108 | 0) != 0) {
     i86 = i108 | 0;
     i9 = (HEAP32[i86 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i108);
      break;
     } else {
      HEAP32[i86 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i86 = i9 | 0;
     i15 = (HEAP32[i86 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i86 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i79 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i14 = i9 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i14 >> 2] = i15;
      break;
     }
    }
   } while (0);
   do {
    if ((i109 | 0) != 0) {
     i9 = i109 | 0;
     i79 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i79 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i109);
      __ZN3WTF8fastFreeEPv(i109);
      break;
     } else {
      HEAP32[i9 >> 2] = i79;
      break;
     }
    }
   } while (0);
   i79 = HEAP32[i23 + 20 >> 2] | 0;
   do {
    if ((i79 | 0) != 0) {
     i9 = i79 | 0;
     i15 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i79);
      break;
     } else {
      HEAP32[i9 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i79 = i23 + 16 | 0;
   i15 = HEAP32[i79 >> 2] | 0;
   if ((i15 | 0) != 0) {
    i9 = HEAP32[i75 >> 2] | 0;
    i14 = i9 + (i15 << 2) | 0;
    i15 = i9;
    while (1) {
     i9 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i86 = i9 | 0;
       i13 = (HEAP32[i86 >> 2] | 0) - 2 | 0;
       if ((i13 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i9);
        break;
       } else {
        HEAP32[i86 >> 2] = i13;
        break;
       }
      }
     } while (0);
     i15 = i15 + 4 | 0;
     if ((i15 | 0) == (i14 | 0)) {
      break;
     }
    }
    HEAP32[i79 >> 2] = 0;
   }
   i14 = HEAP32[i75 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   HEAP32[i75 >> 2] = 0;
   HEAP32[i23 + 12 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i14);
  }
 } while (0);
 i23 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i11 = i23 + 8 | 0;
   i109 = i11 | 0;
   i108 = (HEAP32[i109 >> 2] | 0) - 1 | 0;
   HEAP32[i109 >> 2] = i108;
   if ((i108 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 if ((i7 | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i6);
  STACKTOP = i3;
  return;
 }
 i23 = i7 | 0;
 i11 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
  __ZN7WebCore16VisibleSelectionD2Ev(i6);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i23 >> 2] = i11;
  __ZN7WebCore16VisibleSelectionD2Ev(i6);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore6Editor17markAndReplaceForEN3WTF10PassRefPtrINS_17SpellCheckRequestEEERKNS1_6VectorINS_18TextCheckingResultELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 392 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 88 | 0;
 i14 = i4 + 96 | 0;
 i15 = i4 + 104 | 0;
 i16 = i4 + 112 | 0;
 i17 = i4 + 120 | 0;
 i18 = i4 + 152 | 0;
 i19 = i4 + 160 | 0;
 i20 = i4 + 168 | 0;
 i21 = i4 + 184 | 0;
 i22 = i4 + 192 | 0;
 i23 = i4 + 200 | 0;
 i24 = i4 + 208 | 0;
 i25 = i4 + 216 | 0;
 i26 = i4 + 224 | 0;
 i27 = i4 + 288 | 0;
 i28 = i4 + 296 | 0;
 i29 = i4 + 304 | 0;
 i30 = i4 + 336 | 0;
 i31 = i4 + 344 | 0;
 i32 = i4 + 360 | 0;
 i33 = i4 + 376 | 0;
 i34 = i2 | 0;
 i2 = HEAP32[i34 >> 2] | 0;
 i35 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 1](i2) | 0) + 8 >> 2] | 0;
 i2 = HEAP32[i34 >> 2] | 0;
 i36 = i18 | 0;
 i37 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i36 >> 2] = i37;
 if ((i37 | 0) == 0) {
  i38 = i2;
 } else {
  i2 = i37 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
  i38 = HEAP32[i34 >> 2] | 0;
 }
 i34 = i19 | 0;
 i2 = HEAP32[i38 + 16 >> 2] | 0;
 HEAP32[i34 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i38 = i2 | 0;
  HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
 }
 __ZN7WebCore21TextCheckingParagraphC1EN3WTF10PassRefPtrINS_5RangeEEES4_(i17, i18, i19);
 i19 = HEAP32[i34 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i34 = i19 | 0;
   i18 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i19);
    __ZN3WTF8fastFreeEPv(i19);
    break;
   } else {
    HEAP32[i34 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i19 = HEAP32[i36 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i36 = i19 | 0;
   i18 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i19);
    __ZN3WTF8fastFreeEPv(i19);
    break;
   } else {
    HEAP32[i36 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i19 = i35 >>> 1;
 i18 = (i35 & 4 | 0) != 0;
 i36 = i35 & 32;
 i34 = (i35 & 256 | 0) != 0;
 i38 = (i35 & 1024 | 0) != 0;
 if (i38) {
  i39 = 1;
 } else {
  i39 = (i35 & 512 | 0) != 0;
 }
 if (i34) {
  i40 = 17;
 } else {
  if ((i19 & 1 | 0) != 0 | i39) {
   i40 = 17;
  } else {
   i41 = 0;
   i42 = 0;
   i43 = 0;
   i44 = 0;
  }
 }
 do {
  if ((i40 | 0) == 17) {
   i35 = HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0;
   if ((HEAP32[i35 + 84 >> 2] | 0) != 1) {
    i41 = 0;
    i42 = 0;
    i43 = 0;
    i44 = 0;
    break;
   }
   i2 = i20 | 0;
   i37 = HEAP32[i35 + 68 >> 2] | 0;
   HEAP32[i2 >> 2] = i37;
   if ((i37 | 0) != 0) {
    i45 = i37 + 8 | 0;
    HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
   }
   HEAP32[i20 + 4 >> 2] = HEAP32[i35 + 72 >> 2];
   i45 = HEAP32[i35 + 76 >> 2] | 0;
   i35 = i20 + 8 | 0;
   i37 = i35;
   i46 = HEAP32[i37 >> 2] & -8 | i45 & 7;
   HEAP32[i37 >> 2] = i46;
   HEAP8[i35] = i46 & 255 & -9 | i45 & 8;
   i45 = i21 | 0;
   HEAP32[i45 >> 2] = 0;
   i46 = __ZNK7WebCore21TextCheckingParagraph8offsetToERKNS_8PositionERi(i17, i20, i45) | 0;
   L30 : do {
    if ((i46 | 0) > 0) {
     i45 = HEAP32[(__ZNK7WebCore21TextCheckingParagraph4textEv(i17) | 0) >> 2] | 0;
     if ((i45 | 0) == 0) {
      i47 = 0;
     } else {
      i47 = HEAP32[i45 + 4 >> 2] | 0;
     }
     do {
      if ((i46 | 0) > (i47 | 0)) {
       i40 = 30;
      } else {
       i45 = i46 - 1 | 0;
       i35 = HEAP32[(__ZNK7WebCore21TextCheckingParagraph4textEv(i17) | 0) >> 2] | 0;
       if ((i35 | 0) == 0) {
        i48 = 0;
        break;
       }
       if ((HEAP32[i35 + 4 >> 2] | 0) >>> 0 <= i45 >>> 0) {
        i48 = 0;
        break;
       }
       i37 = i35 + 8 | 0;
       if ((HEAP32[i35 + 16 >> 2] & 32 | 0) == 0) {
        i49 = HEAP16[(HEAP32[i37 >> 2] | 0) + (i45 << 1) >> 1] | 0;
       } else {
        i49 = HEAPU8[(HEAP32[i37 >> 2] | 0) + i45 | 0] | 0;
       }
       if (i49 << 16 >> 16 == 10) {
        i40 = 30;
       } else {
        i48 = 0;
       }
      }
     } while (0);
     if ((i40 | 0) == 30) {
      i48 = 1;
     }
     i45 = HEAP32[(__ZNK7WebCore21TextCheckingParagraph4textEv(i17) | 0) >> 2] | 0;
     if ((i45 | 0) == 0) {
      i50 = 0;
     } else {
      i50 = HEAP32[i45 + 4 >> 2] | 0;
     }
     if ((i46 | 0) > (i50 | 0)) {
      i51 = 0;
      i52 = i48;
      break;
     }
     i45 = i46 - 1 | 0;
     i37 = HEAP32[(__ZNK7WebCore21TextCheckingParagraph4textEv(i17) | 0) >> 2] | 0;
     do {
      if ((i37 | 0) != 0) {
       if ((HEAP32[i37 + 4 >> 2] | 0) >>> 0 <= i45 >>> 0) {
        break;
       }
       i35 = i37 + 8 | 0;
       if ((HEAP32[i37 + 16 >> 2] & 32 | 0) == 0) {
        i53 = HEAP16[(HEAP32[i35 >> 2] | 0) + (i45 << 1) >> 1] | 0;
       } else {
        i53 = HEAPU8[(HEAP32[i35 >> 2] | 0) + i45 | 0] | 0;
       }
       if ((i53 << 16 >> 16 | 0) == 39 | (i53 << 16 >> 16 | 0) == 8217 | (i53 << 16 >> 16 | 0) == 1524) {
        i51 = 1;
        i52 = i48;
        break L30;
       }
      }
     } while (0);
     i51 = 0;
     i52 = i48;
    } else {
     i51 = 0;
     i52 = 0;
    }
   } while (0);
   i45 = HEAP32[i2 >> 2] | 0;
   if ((i45 | 0) == 0) {
    i41 = i46;
    i42 = i51;
    i43 = 1;
    i44 = i52;
    break;
   }
   i37 = i45 + 8 | 0;
   i45 = i37 | 0;
   i35 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
   HEAP32[i45 >> 2] = i35;
   if ((i35 | 0) >= 1) {
    i41 = i46;
    i42 = i51;
    i43 = 1;
    i44 = i52;
    break;
   }
   if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
    i41 = i46;
    i42 = i51;
    i43 = 1;
    i44 = i52;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
   i41 = i46;
   i42 = i51;
   i43 = 1;
   i44 = i52;
  }
 } while (0);
 i52 = i3 + 8 | 0;
 if ((HEAP32[i52 >> 2] | 0) == 0) {
  __ZN7WebCore21TextCheckingParagraphD1Ev(i17);
  STACKTOP = i4;
  return;
 }
 i51 = i3 | 0;
 i3 = ((i19 & 1 | 0) == 0 | i38) ^ 1;
 i19 = i22 | 0;
 i48 = i23 | 0;
 i53 = i24 | 0;
 i50 = (i34 | i39 | (i36 | 0) != 0) ^ 1;
 i36 = i25 | 0;
 i39 = i1 | 0;
 i34 = i27 | 0;
 i49 = i6 | 0;
 i47 = i9 | 0;
 i20 = i5 | 0;
 i21 = i10 | 0;
 i37 = i11 | 0;
 i35 = i14 | 0;
 i45 = i13 | 0;
 i54 = i28 | 0;
 i55 = 0;
 i56 = 0;
 i57 = i43;
 i43 = 0;
 i58 = i41;
 L66 : while (1) {
  i41 = (__ZNK7WebCore21TextCheckingParagraph11checkingEndEv(i17) | 0) + i56 | 0;
  if ((HEAP32[i52 >> 2] | 0) >>> 0 <= i55 >>> 0) {
   i40 = 48;
   break;
  }
  i59 = HEAP32[i51 >> 2] | 0;
  i60 = HEAP32[i59 + (i55 * 28 & -1) >> 2] | 0;
  i61 = (HEAP32[i59 + (i55 * 28 & -1) + 4 >> 2] | 0) + i56 | 0;
  i62 = HEAP32[i59 + (i55 * 28 & -1) + 8 >> 2] | 0;
  i63 = i61 + i62 | 0;
  i64 = i59 + (i55 * 28 & -1) + 24 | 0;
  if (i42) {
   i65 = (i63 | 0) == (i58 - 1 | 0);
  } else {
   i65 = 0;
  }
  do {
   if ((i60 | 0) == 2 & i3) {
    if ((i61 | 0) < (__ZNK7WebCore21TextCheckingParagraph13checkingStartEv(i17) | 0) | (i63 | 0) > (i41 | 0) | i65) {
     i40 = 60;
     break;
    }
    __ZNK7WebCore21TextCheckingParagraph8subrangeEii(i22, i17, i61, i62);
    i59 = HEAP32[i19 >> 2] | 0;
    HEAP32[i19 >> 2] = 0;
    if ((i59 | 0) == 0) {
     __ZN7WebCore24DocumentMarkerController9addMarkerEPNS_5RangeENS_14DocumentMarker10MarkerTypeERKN3WTF6StringE(HEAP32[(HEAP32[(HEAP32[(abort(8) | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1124 >> 2] | 0, 0, 1, i64);
     i66 = i58;
     i67 = i43;
     i68 = i57;
     i69 = i56;
     i70 = i55;
     break;
    }
    i71 = i59 | 0;
    i72 = HEAP32[i71 >> 2] | 0;
    HEAP32[i71 >> 2] = i72 + 1;
    if ((i72 | 0) == 0) {
     __ZN7WebCore5RangeD1Ev(i59);
     __ZN3WTF8fastFreeEPv(i59);
    } else {
     HEAP32[i71 >> 2] = i72;
    }
    __ZN7WebCore24DocumentMarkerController9addMarkerEPNS_5RangeENS_14DocumentMarker10MarkerTypeERKN3WTF6StringE(HEAP32[(HEAP32[(HEAP32[(HEAP32[i59 + 8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1124 >> 2] | 0, i59, 1, i64);
    i72 = (HEAP32[i71 >> 2] | 0) - 1 | 0;
    if ((i72 | 0) == 0) {
     __ZN7WebCore5RangeD1Ev(i59);
     __ZN3WTF8fastFreeEPv(i59);
     i66 = i58;
     i67 = i43;
     i68 = i57;
     i69 = i56;
     i70 = i55;
     break;
    } else {
     HEAP32[i71 >> 2] = i72;
     i66 = i58;
     i67 = i43;
     i68 = i57;
     i69 = i56;
     i70 = i55;
     break;
    }
   } else {
    i40 = 60;
   }
  } while (0);
  L85 : do {
   if ((i40 | 0) == 60) {
    i40 = 0;
    do {
     if (i18 & (i60 | 0) == 4) {
      if ((__ZNK7WebCore21TextCheckingParagraph11checkingEndEv(i17) | 0) <= (i61 | 0)) {
       break;
      }
      if ((i63 | 0) <= (__ZNK7WebCore21TextCheckingParagraph13checkingStartEv(i17) | 0)) {
       break;
      }
      if ((HEAP32[i52 >> 2] | 0) >>> 0 <= i55 >>> 0) {
       i40 = 64;
       break L66;
      }
      i46 = HEAP32[i51 >> 2] | 0;
      i2 = i46 + (i55 * 28 & -1) + 20 | 0;
      if ((HEAP32[i2 >> 2] | 0) == 0) {
       i66 = i58;
       i67 = i43;
       i68 = i57;
       i69 = i56;
       i70 = i55;
       break L85;
      }
      i72 = i46 + (i55 * 28 & -1) + 12 | 0;
      i46 = 0;
      while (1) {
       i71 = HEAP32[i72 >> 2] | 0;
       i59 = i71 + (i46 * 24 & -1) | 0;
       i73 = (HEAP32[i59 >> 2] | 0) + i61 | 0;
       i74 = i71 + (i46 * 24 & -1) + 4 | 0;
       i75 = HEAP32[i74 >> 2] | 0;
       do {
        if ((__ZNK7WebCore21TextCheckingParagraph11checkingEndEv(i17) | 0) > (i73 | 0)) {
         if ((i75 + i73 | 0) <= (__ZNK7WebCore21TextCheckingParagraph13checkingStartEv(i17) | 0)) {
          break;
         }
         __ZNK7WebCore21TextCheckingParagraph8subrangeEii(i23, i17, (HEAP32[i59 >> 2] | 0) + i61 | 0, HEAP32[i74 >> 2] | 0);
         i76 = HEAP32[i48 >> 2] | 0;
         HEAP32[i48 >> 2] = 0;
         __ZN7WebCore24DocumentMarkerController9addMarkerEPNS_5RangeENS_14DocumentMarker10MarkerTypeERKN3WTF6StringE(HEAP32[(HEAP32[(HEAP32[(HEAP32[i76 + 8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1124 >> 2] | 0, i76, 2, i71 + (i46 * 24 & -1) + 20 | 0);
         if ((i76 | 0) == 0) {
          break;
         }
         i77 = i76 | 0;
         i78 = (HEAP32[i77 >> 2] | 0) - 1 | 0;
         if ((i78 | 0) == 0) {
          __ZN7WebCore5RangeD1Ev(i76);
          __ZN3WTF8fastFreeEPv(i76);
          break;
         } else {
          HEAP32[i77 >> 2] = i78;
          break;
         }
        }
       } while (0);
       i71 = i46 + 1 | 0;
       if (i71 >>> 0 < (HEAP32[i2 >> 2] | 0) >>> 0) {
        i46 = i71;
       } else {
        i66 = i58;
        i67 = i43;
        i68 = i57;
        i69 = i56;
        i70 = i55;
        break L85;
       }
      }
     }
    } while (0);
    if ((i63 | 0) > (i41 | 0)) {
     i66 = i58;
     i67 = i43;
     i68 = i57;
     i69 = i56;
     i70 = i55;
     break;
    }
    if ((i63 | 0) < (__ZNK7WebCore21TextCheckingParagraph13checkingStartEv(i17) | 0)) {
     i66 = i58;
     i67 = i43;
     i68 = i57;
     i69 = i56;
     i70 = i55;
     break;
    }
    switch (i60 | 0) {
    case 1024:
    case 512:
    case 256:
    case 32:
    case 64:
    case 128:
     {
      break;
     }
    default:
     {
      i66 = i58;
      i67 = i43;
      i68 = i57;
      i69 = i56;
      i70 = i55;
      break L85;
     }
    }
    if (i38) {
     if ((i63 | 0) < (i41 | 0)) {
      i66 = i58;
      i67 = i43;
      i68 = i57;
      i69 = i56;
      i70 = i55;
      break;
     }
     if ((i60 & 768 | 0) == 0) {
      i66 = i58;
      i67 = i43;
      i68 = i57;
      i69 = i56;
      i70 = i55;
      break;
     }
    }
    i46 = i64 | 0;
    i2 = HEAP32[i46 >> 2] | 0;
    if ((i2 | 0) == 0) {
     i79 = 1;
    } else {
     i79 = (HEAP32[i2 + 4 >> 2] | 0) == 0;
    }
    i2 = i79 | i65;
    __ZNK7WebCore21TextCheckingParagraph8subrangeEii(i24, i17, i61, i62);
    i72 = HEAP32[i53 >> 2] | 0;
    HEAP32[i53 >> 2] = 0;
    i71 = (i60 | 0) == 32;
    if (i71) {
     if ((i58 | 0) != (i63 + 1 | 0) | (i2 | i50)) {
      i80 = i58;
      i81 = i43;
      i82 = i57;
      i83 = i56;
      i84 = 4;
      i85 = i55;
     } else {
      i40 = 85;
     }
    } else {
     if (i2 | i50) {
      i80 = i58;
      i81 = i43;
      i82 = i57;
      i83 = i56;
      i84 = 4;
      i85 = i55;
     } else {
      i40 = 85;
     }
    }
    do {
     if ((i40 | 0) == 85) {
      i40 = 0;
      __ZN7WebCore9plainTextEPKNS_5RangeENS_20TextIteratorBehaviorEb(i25, i72, 0, 0);
      if ((HEAP32[i52 >> 2] | 0) >>> 0 <= i55 >>> 0) {
       i40 = 86;
       break L66;
      }
      do {
       if (i38) {
        if ((i63 | 0) != (i41 | 0)) {
         i86 = i58;
         i87 = i43;
         i88 = i57;
         i89 = i56;
         i90 = 4;
         i91 = i55;
         break;
        }
        if ((i72 | 0) == 0) {
         i86 = i58;
         i87 = i43;
         i88 = i57;
         i89 = i56;
         i90 = 2;
         i91 = i55;
         break;
        }
        i2 = i72 | 0;
        i74 = HEAP32[i2 >> 2] | 0;
        HEAP32[i2 >> 2] = i74 + 1;
        if ((i74 | 0) == 0) {
         __ZN7WebCore5RangeD1Ev(i72);
         __ZN3WTF8fastFreeEPv(i72);
         i86 = i58;
         i87 = i43;
         i88 = i57;
         i89 = i56;
         i90 = 2;
         i91 = i55;
         break;
        } else {
         HEAP32[i2 >> 2] = i74;
         i86 = i58;
         i87 = i43;
         i88 = i57;
         i89 = i56;
         i90 = 2;
         i91 = i55;
         break;
        }
       } else {
        __ZN7WebCore16VisibleSelectionC1EPKNS_5RangeENS_9EAffinityEb(i26, i72, 1, 0);
        if (__ZN7WebCoreeqERKNS_16VisibleSelectionES2_(i26, (HEAP32[(HEAP32[i39 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0) {
         i40 = 95;
        } else {
         if (__ZNK7WebCore14FrameSelection21shouldChangeSelectionERKNS_16VisibleSelectionE(HEAP32[(HEAP32[i39 >> 2] | 0) + 468 >> 2] | 0, i26) | 0) {
          i40 = 95;
         } else {
          i92 = i58;
          i93 = i43;
          i94 = i57;
          i95 = i56;
          i96 = 4;
          i97 = i55;
         }
        }
        do {
         if ((i40 | 0) == 95) {
          i40 = 0;
          i74 = HEAP32[(HEAP32[i39 >> 2] | 0) + 468 >> 2] | 0;
          if (i71) {
           __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i74, i26, 6, 0, 0);
           if (!(__ZNK7WebCore16VisibleSelection23isContentRichlyEditableEv((HEAP32[(HEAP32[i39 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0)) {
            i92 = i58;
            i93 = 1;
            i94 = 0;
            i95 = i56;
            i96 = 0;
            i97 = i55;
            break;
           }
           i2 = HEAP32[(HEAP32[i39 >> 2] | 0) + 456 >> 2] | 0;
           i59 = __ZN3WTF10fastMallocEj(156) | 0;
           __ZN7WebCore17CreateLinkCommandC1ERNS_8DocumentERKN3WTF6StringE(i59, i2, i64);
           HEAP32[i34 >> 2] = i59;
           __ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i27);
           i59 = HEAP32[i34 >> 2] | 0;
           if ((i59 | 0) == 0) {
            i92 = i58;
            i93 = 1;
            i94 = 0;
            i95 = i56;
            i96 = 0;
            i97 = i55;
            break;
           }
           i2 = i59 + 4 | 0;
           i59 = i2 | 0;
           i73 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
           if ((i73 | 0) != 0) {
            HEAP32[i59 >> 2] = i73;
            i92 = i58;
            i93 = 1;
            i94 = 0;
            i95 = i56;
            i96 = 0;
            i97 = i55;
            break;
           }
           i73 = i2 - 4 | 0;
           if ((i73 | 0) == 0) {
            i92 = i58;
            i93 = 1;
            i94 = 0;
            i95 = i56;
            i96 = 0;
            i97 = i55;
            break;
           }
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i73 >> 2] | 0) + 4 >> 2] & 3](i73);
           i92 = i58;
           i93 = 1;
           i94 = 0;
           i95 = i56;
           i96 = 0;
           i97 = i55;
           break;
          }
          if ((__ZNK7WebCore16VisibleSelection19rootEditableElementEv(i74 + 32 | 0) | 0) == 0) {
           i92 = i58;
           i93 = i43;
           i94 = i57;
           i95 = i56;
           i96 = 0;
           i97 = i55;
           break;
          }
          i74 = HEAP32[(HEAP32[i39 >> 2] | 0) + 32 >> 2] | 0;
          if ((i74 | 0) == 0) {
           i92 = i58;
           i93 = i43;
           i94 = i57;
           i95 = i56;
           i96 = 0;
           i97 = i55;
           break;
          }
          i73 = HEAP32[i74 + 72 >> 2] | 0;
          if ((i73 | 0) == 0) {
           i92 = i58;
           i93 = i43;
           i94 = i57;
           i95 = i56;
           i96 = 0;
           i97 = i55;
           break;
          }
          if (!(FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i73 >> 2] | 0) + 56 >> 2] & 1](i73, i64, i72, 0) | 0)) {
           i92 = i58;
           i93 = i43;
           i94 = i57;
           i95 = i56;
           i96 = 0;
           i97 = i55;
           break;
          }
          if ((i72 | 0) != 0) {
           i73 = i72 | 0;
           HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 1;
          }
          __ZNK7WebCore21TextCheckingParagraph14paragraphRangeEv(i6, i17);
          i73 = __ZN7WebCore15highestAncestorEPNS_4NodeE(HEAP32[(HEAP32[i49 >> 2] | 0) + 8 >> 2] | 0) | 0;
          i74 = i73;
          i2 = HEAP32[i49 >> 2] | 0;
          do {
           if ((i2 | 0) != 0) {
            i59 = i2 | 0;
            i75 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
            if ((i75 | 0) == 0) {
             __ZN7WebCore5RangeD1Ev(i2);
             __ZN3WTF8fastFreeEPv(i2);
             break;
            } else {
             HEAP32[i59 >> 2] = i75;
             break;
            }
           }
          } while (0);
          __ZNK7WebCore21TextCheckingParagraph14paragraphRangeEv(i9, i17);
          __ZN7WebCore12TextIterator29getLocationAndLengthFromRangeEPNS_4NodeEPKNS_5RangeERjS6_(i73, HEAP32[i47 >> 2] | 0, i7, i8) | 0;
          i2 = HEAP32[i47 >> 2] | 0;
          do {
           if ((i2 | 0) != 0) {
            i75 = i2 | 0;
            i59 = (HEAP32[i75 >> 2] | 0) - 1 | 0;
            if ((i59 | 0) == 0) {
             __ZN7WebCore5RangeD1Ev(i2);
             __ZN3WTF8fastFreeEPv(i2);
             break;
            } else {
             HEAP32[i75 >> 2] = i59;
             break;
            }
           }
          } while (0);
          i2 = __ZN3WTF10fastMallocEj(224) | 0;
          HEAP32[i20 >> 2] = i72;
          __ZN7WebCore25SpellingCorrectionCommandC1EN3WTF10PassRefPtrINS_5RangeEEERKNS1_6StringE(i2, i5, i64);
          i73 = HEAP32[i20 >> 2] | 0;
          do {
           if ((i73 | 0) != 0) {
            i59 = i73 | 0;
            i75 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
            if ((i75 | 0) == 0) {
             __ZN7WebCore5RangeD1Ev(i73);
             __ZN3WTF8fastFreeEPv(i73);
             break;
            } else {
             HEAP32[i59 >> 2] = i75;
             break;
            }
           }
          } while (0);
          HEAP32[i21 >> 2] = i2;
          __ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i10);
          i73 = HEAP32[i21 >> 2] | 0;
          do {
           if ((i73 | 0) != 0) {
            i75 = i73 + 4 | 0;
            i59 = i75 | 0;
            i78 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
            if ((i78 | 0) != 0) {
             HEAP32[i59 >> 2] = i78;
             break;
            }
            i78 = i75 - 4 | 0;
            if ((i78 | 0) == 0) {
             break;
            }
            FUNCTION_TABLE_vi[HEAP32[(HEAP32[i78 >> 2] | 0) + 4 >> 2] & 3](i78);
           }
          } while (0);
          i73 = HEAP32[i46 >> 2] | 0;
          if ((i73 | 0) == 0) {
           i98 = 0;
          } else {
           i98 = HEAP32[i73 + 4 >> 2] | 0;
          }
          __ZN7WebCore12TextIterator26rangeFromLocationAndLengthEPNS_13ContainerNodeEiib(i11, i74, HEAP32[i7 >> 2] | 0, (HEAP32[i8 >> 2] | 0) - i62 + i98 | 0, 0);
          i73 = HEAP32[i37 >> 2] | 0;
          HEAP32[i37 >> 2] = 0;
          i2 = HEAP32[i46 >> 2] | 0;
          if ((i2 | 0) == 0) {
           i99 = 0;
          } else {
           i99 = HEAP32[i2 + 4 >> 2] | 0;
          }
          __ZN7WebCore12TextIterator8subrangeEPNS_5RangeEii(i13, i73, i61, i99);
          HEAP32[i35 >> 2] = i73;
          i2 = (i73 | 0) == 0;
          if (!i2) {
           i78 = i73 | 0;
           HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
          }
          __ZN7WebCore21TextCheckingParagraphC1EN3WTF10PassRefPtrINS_5RangeEEES4_(i12, i13, i14);
          __ZN7WebCore21TextCheckingParagraphaSERKS0_(i17, i12) | 0;
          __ZN7WebCore21TextCheckingParagraphD1Ev(i12);
          i78 = HEAP32[i35 >> 2] | 0;
          do {
           if ((i78 | 0) != 0) {
            i75 = i78 | 0;
            i59 = (HEAP32[i75 >> 2] | 0) - 1 | 0;
            if ((i59 | 0) == 0) {
             __ZN7WebCore5RangeD1Ev(i78);
             __ZN3WTF8fastFreeEPv(i78);
             break;
            } else {
             HEAP32[i75 >> 2] = i59;
             break;
            }
           }
          } while (0);
          i78 = HEAP32[i45 >> 2] | 0;
          do {
           if ((i78 | 0) != 0) {
            i74 = i78 | 0;
            i59 = (HEAP32[i74 >> 2] | 0) - 1 | 0;
            if ((i59 | 0) == 0) {
             __ZN7WebCore5RangeD1Ev(i78);
             __ZN3WTF8fastFreeEPv(i78);
             break;
            } else {
             HEAP32[i74 >> 2] = i59;
             break;
            }
           }
          } while (0);
          do {
           if (!i2) {
            i78 = i73 | 0;
            i59 = (HEAP32[i78 >> 2] | 0) - 1 | 0;
            if ((i59 | 0) == 0) {
             __ZN7WebCore5RangeD1Ev(i73);
             __ZN3WTF8fastFreeEPv(i73);
             break;
            } else {
             HEAP32[i78 >> 2] = i59;
             break;
            }
           }
          } while (0);
          if ((__ZNK7WebCore8Document21existingAXObjectCacheEv(HEAP32[(HEAP32[i39 >> 2] | 0) + 456 >> 2] | 0) | 0) != 0) {
           __ZNK7WebCore16VisibleSelection19rootEditableElementEv((HEAP32[(HEAP32[i39 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0;
          }
          i73 = HEAP32[i52 >> 2] | 0;
          i2 = i55;
          while (1) {
           i59 = i2 + 1 | 0;
           if (i59 >>> 0 >= i73 >>> 0) {
            break;
           }
           if (((HEAP32[(HEAP32[i51 >> 2] | 0) + (i59 * 28 & -1) + 4 >> 2] | 0) + i56 | 0) > (i61 | 0)) {
            break;
           } else {
            i2 = i59;
           }
          }
          i73 = HEAP32[i46 >> 2] | 0;
          i59 = (i73 | 0) == 0;
          if (i59) {
           i100 = 0;
          } else {
           i100 = HEAP32[i73 + 4 >> 2] | 0;
          }
          i78 = i100 - i62 + i56 | 0;
          if ((i61 | 0) < (i58 | 0)) {
           if (i59) {
            i101 = 0;
           } else {
            i101 = HEAP32[i73 + 4 >> 2] | 0;
           }
           i102 = i58 - i62 + i101 | 0;
          } else {
           i102 = i58;
          }
          if ((i60 | 0) != 512) {
           i92 = i102;
           i93 = 1;
           i94 = i57;
           i95 = i78;
           i96 = 0;
           i97 = i2;
           break;
          }
          if (i59) {
           i103 = 0;
          } else {
           i103 = HEAP32[i73 + 4 >> 2] | 0;
          }
          __ZNK7WebCore21TextCheckingParagraph8subrangeEii(i28, i17, i61, i103);
          i73 = HEAP32[i54 >> 2] | 0;
          if ((i73 | 0) == 0) {
           i92 = i102;
           i93 = 1;
           i94 = i57;
           i95 = i78;
           i96 = 0;
           i97 = i2;
           break;
          }
          i59 = i73 | 0;
          i74 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
          if ((i74 | 0) == 0) {
           __ZN7WebCore5RangeD1Ev(i73);
           __ZN3WTF8fastFreeEPv(i73);
           i92 = i102;
           i93 = 1;
           i94 = i57;
           i95 = i78;
           i96 = 0;
           i97 = i2;
           break;
          } else {
           HEAP32[i59 >> 2] = i74;
           i92 = i102;
           i93 = 1;
           i94 = i57;
           i95 = i78;
           i96 = 0;
           i97 = i2;
           break;
          }
         }
        } while (0);
        __ZN7WebCore16VisibleSelectionD2Ev(i26);
        i86 = i92;
        i87 = i93;
        i88 = i94;
        i89 = i95;
        i90 = i96;
        i91 = i97;
       }
      } while (0);
      i78 = HEAP32[i36 >> 2] | 0;
      if ((i78 | 0) == 0) {
       i80 = i86;
       i81 = i87;
       i82 = i88;
       i83 = i89;
       i84 = i90;
       i85 = i91;
       break;
      }
      i74 = i78 | 0;
      i59 = (HEAP32[i74 >> 2] | 0) - 2 | 0;
      if ((i59 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i78);
       i80 = i86;
       i81 = i87;
       i82 = i88;
       i83 = i89;
       i84 = i90;
       i85 = i91;
       break;
      } else {
       HEAP32[i74 >> 2] = i59;
       i80 = i86;
       i81 = i87;
       i82 = i88;
       i83 = i89;
       i84 = i90;
       i85 = i91;
       break;
      }
     }
    } while (0);
    do {
     if ((i72 | 0) != 0) {
      i46 = i72 | 0;
      i71 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
      if ((i71 | 0) == 0) {
       __ZN7WebCore5RangeD1Ev(i72);
       __ZN3WTF8fastFreeEPv(i72);
       break;
      } else {
       HEAP32[i46 >> 2] = i71;
       break;
      }
     }
    } while (0);
    if ((i84 | 0) == 2) {
     i104 = i80;
     i105 = i81;
     i106 = i82;
     i40 = 173;
     break L66;
    } else {
     i66 = i80;
     i67 = i81;
     i68 = i82;
     i69 = i83;
     i70 = i85;
    }
   }
  } while (0);
  i61 = i70 + 1 | 0;
  if (i61 >>> 0 < (HEAP32[i52 >> 2] | 0) >>> 0) {
   i55 = i61;
   i56 = i69;
   i57 = i68;
   i43 = i67;
   i58 = i66;
  } else {
   i104 = i66;
   i105 = i67;
   i106 = i68;
   i40 = 173;
   break;
  }
 }
 if ((i40 | 0) == 48) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i40 | 0) == 64) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i40 | 0) == 86) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i40 | 0) == 173) {
  if (!i105) {
   __ZN7WebCore21TextCheckingParagraphD1Ev(i17);
   STACKTOP = i4;
   return;
  }
  i105 = HEAP32[i17 >> 2] | 0;
  HEAP32[i29 >> 2] = i105;
  if ((i105 | 0) != 0) {
   i68 = i105 | 0;
   HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
  }
  i68 = HEAP32[i17 + 4 >> 2] | 0;
  HEAP32[i29 + 4 >> 2] = i68;
  if ((i68 | 0) != 0) {
   i105 = i68 | 0;
   HEAP32[i105 >> 2] = (HEAP32[i105 >> 2] | 0) + 1;
  }
  i105 = HEAP32[i17 + 8 >> 2] | 0;
  HEAP32[i29 + 8 >> 2] = i105;
  if ((i105 | 0) != 0) {
   i68 = i105 | 0;
   HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
  }
  i68 = HEAP32[i17 + 12 >> 2] | 0;
  HEAP32[i29 + 12 >> 2] = i68;
  if ((i68 | 0) != 0) {
   i105 = i68 | 0;
   HEAP32[i105 >> 2] = (HEAP32[i105 >> 2] | 0) + 2;
  }
  HEAP32[i29 + 16 >> 2] = HEAP32[i17 + 16 >> 2];
  HEAP32[i29 + 20 >> 2] = HEAP32[i17 + 20 >> 2];
  HEAP32[i29 + 24 >> 2] = HEAP32[i17 + 24 >> 2];
  __ZN7WebCore21TextCheckingParagraph20expandRangeToNextEndEv(i29);
  do {
   if (i106 & (i104 | 0) > -1) {
    if ((i104 | 0) > (__ZNK7WebCore21TextCheckingParagraph11rangeLengthEv(i29) | 0)) {
     i40 = 202;
     break;
    }
    __ZNK7WebCore21TextCheckingParagraph8subrangeEii(i30, i29, 0, i104);
    i105 = i30 | 0;
    i68 = HEAP32[i105 >> 2] | 0;
    HEAP32[i105 >> 2] = 0;
    i105 = i1 | 0;
    i67 = HEAP32[(HEAP32[i105 >> 2] | 0) + 468 >> 2] | 0;
    i66 = i68 + 24 | 0;
    i58 = HEAP32[i66 >> 2] | 0;
    if ((i58 | 0) > -1) {
     i107 = i58;
    } else {
     i58 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i68 + 28 >> 2] | 0) | 0) + 1 | 0;
     HEAP32[i66 >> 2] = i58;
     i107 = i58;
    }
    i58 = HEAP32[i68 + 20 >> 2] | 0;
    if ((i58 | 0) == 0) {
     i108 = i107;
    } else {
     i43 = i58 + 8 | 0;
     HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
     i108 = HEAP32[i66 >> 2] | 0;
    }
    i66 = i15 | 0;
    HEAP32[i66 >> 2] = i58;
    HEAP32[i16 >> 2] = i108;
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i31, i15, i16);
    i58 = HEAP32[i66 >> 2] | 0;
    do {
     if ((i58 | 0) != 0) {
      i66 = i58 + 8 | 0;
      i43 = i66 | 0;
      i57 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
      HEAP32[i43 >> 2] = i57;
      if ((i57 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i66 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i66 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore14FrameSelection6moveToERKNS_8PositionENS_9EAffinityENS_14EUserTriggeredE(i67, i31, 1, 0);
    i58 = HEAP32[i31 >> 2] | 0;
    do {
     if ((i58 | 0) != 0) {
      i66 = i58 + 8 | 0;
      i57 = i66 | 0;
      i43 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
      HEAP32[i57 >> 2] = i43;
      if ((i43 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i66 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i66 - 8 | 0);
     }
    } while (0);
    if (i44) {
     __ZN7WebCore14FrameSelection6modifyENS0_11EAlterationENS_18SelectionDirectionENS_15TextGranularityENS_14EUserTriggeredE(HEAP32[(HEAP32[i105 >> 2] | 0) + 468 >> 2] | 0, 0, 0, 0, 0) | 0;
    }
    if ((i68 | 0) == 0) {
     break;
    }
    i58 = i68 | 0;
    i67 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
    if ((i67 | 0) == 0) {
     __ZN7WebCore5RangeD1Ev(i68);
     __ZN3WTF8fastFreeEPv(i68);
     break;
    } else {
     HEAP32[i58 >> 2] = i67;
     break;
    }
   } else {
    i40 = 202;
   }
  } while (0);
  if ((i40 | 0) == 202) {
   i40 = i1 | 0;
   i1 = HEAP32[(HEAP32[i40 >> 2] | 0) + 468 >> 2] | 0;
   i44 = i33 | 0;
   i31 = HEAP32[i1 + 68 >> 2] | 0;
   HEAP32[i44 >> 2] = i31;
   if ((i31 | 0) != 0) {
    i16 = i31 + 8 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
   }
   HEAP32[i33 + 4 >> 2] = HEAP32[i1 + 72 >> 2];
   i16 = HEAP32[i1 + 76 >> 2] | 0;
   i31 = i33 + 8 | 0;
   i15 = i31;
   i108 = HEAP32[i15 >> 2] & -8 | i16 & 7;
   HEAP32[i15 >> 2] = i108;
   HEAP8[i31] = i108 & 255 & -9 | i16 & 8;
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i32, i33, 1);
   __ZN7WebCore14FrameSelection6moveToERKNS_15VisiblePositionENS_14EUserTriggeredENS0_19CursorAlignOnScrollE(i1, i32, 0, 0);
   i1 = HEAP32[i32 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i32 = i1 + 8 | 0;
     i33 = i32 | 0;
     i16 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
     HEAP32[i33 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
    }
   } while (0);
   i1 = HEAP32[i44 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i44 = i1 + 8 | 0;
     i32 = i44 | 0;
     i16 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     HEAP32[i32 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore14FrameSelection6modifyENS0_11EAlterationENS_18SelectionDirectionENS_15TextGranularityENS_14EUserTriggeredE(HEAP32[(HEAP32[i40 >> 2] | 0) + 468 >> 2] | 0, 0, 0, 0, 0) | 0;
  }
  __ZN7WebCore21TextCheckingParagraphD1Ev(i29);
  __ZN7WebCore21TextCheckingParagraphD1Ev(i17);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore6Editor13rangeOfStringERKN3WTF6StringEPNS_5RangeEj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 432 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = i6 + 64 | 0;
 i16 = i6 + 72 | 0;
 i17 = i6 + 80 | 0;
 i18 = i6 + 88 | 0;
 i19 = i6 + 96 | 0;
 i20 = i6 + 104 | 0;
 i21 = i6 + 120 | 0;
 i22 = i6 + 128 | 0;
 i23 = i6 + 144 | 0;
 i24 = i6 + 152 | 0;
 i25 = i6 + 160 | 0;
 i26 = i6 + 168 | 0;
 i27 = i6 + 176 | 0;
 i28 = i6 + 184 | 0;
 i29 = i6 + 192 | 0;
 i30 = i6 + 200 | 0;
 i31 = i6 + 264 | 0;
 i32 = i6 + 272 | 0;
 i33 = i6 + 288 | 0;
 i34 = i6 + 296 | 0;
 i35 = i6 + 312 | 0;
 i36 = i6 + 320 | 0;
 i37 = i6 + 328 | 0;
 i38 = i6 + 336 | 0;
 i39 = i6 + 344 | 0;
 i40 = i6 + 352 | 0;
 i41 = i6 + 360 | 0;
 i42 = i6 + 368 | 0;
 i43 = i6 + 376 | 0;
 i44 = i6 + 384 | 0;
 i45 = i6 + 392 | 0;
 i46 = i6 + 400 | 0;
 i47 = i6 + 408 | 0;
 i48 = i6 + 416 | 0;
 i49 = i6 + 424 | 0;
 i50 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i50 | 0) != 0) {
   if ((HEAP32[i50 + 4 >> 2] | 0) == 0) {
    break;
   }
   i51 = i2 | 0;
   __ZN7WebCore15rangeOfContentsERNS_4NodeE(i19, HEAP32[(HEAP32[i51 >> 2] | 0) + 456 >> 2] | 0);
   i52 = i19 | 0;
   i53 = HEAP32[i52 >> 2] | 0;
   HEAP32[i52 >> 2] = 0;
   i52 = i5 >>> 3 & 1;
   do {
    if ((i4 | 0) == 0) {
     i54 = 0;
     i55 = 1;
     i56 = 0;
    } else {
     i57 = (i5 & 32 | 0) != 0;
     i58 = (i52 | 0) == 0;
     do {
      if (i58) {
       if (i57) {
        i59 = i4 + 12 | 0;
        i60 = HEAP32[i59 >> 2] | 0;
        if ((i60 | 0) > -1) {
         i61 = i60;
        } else {
         i60 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i4 + 16 >> 2] | 0) | 0) + 1 | 0;
         HEAP32[i59 >> 2] = i60;
         i61 = i60;
        }
        i60 = HEAP32[i4 + 8 >> 2] | 0;
        if ((i60 | 0) == 0) {
         i62 = i61;
        } else {
         i63 = i60 + 8 | 0;
         HEAP32[i63 >> 2] = (HEAP32[i63 >> 2] | 0) + 1;
         i62 = HEAP32[i59 >> 2] | 0;
        }
        i59 = i17 | 0;
        HEAP32[i59 >> 2] = i60;
        HEAP32[i18 >> 2] = i62;
        __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i20, i17, i18);
        i60 = HEAP32[i59 >> 2] | 0;
        do {
         if ((i60 | 0) != 0) {
          i59 = i60 + 8 | 0;
          i63 = i59 | 0;
          i64 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
          HEAP32[i63 >> 2] = i64;
          if ((i64 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i59 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i59 - 8 | 0);
         }
        } while (0);
        i60 = i21 | 0;
        HEAP32[i60 >> 2] = 0;
        __ZN7WebCore5Range8setStartERKNS_8PositionERi(i53, i20, i60);
        i60 = HEAP32[i20 >> 2] | 0;
        if ((i60 | 0) == 0) {
         break;
        }
        i59 = i60 + 8 | 0;
        i60 = i59 | 0;
        i64 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
        HEAP32[i60 >> 2] = i64;
        if ((i64 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i59 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i59 - 8 | 0);
        break;
       } else {
        i59 = i4 + 24 | 0;
        i64 = HEAP32[i59 >> 2] | 0;
        if ((i64 | 0) > -1) {
         i65 = i64;
        } else {
         i64 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i4 + 28 >> 2] | 0) | 0) + 1 | 0;
         HEAP32[i59 >> 2] = i64;
         i65 = i64;
        }
        i64 = HEAP32[i4 + 20 >> 2] | 0;
        if ((i64 | 0) == 0) {
         i66 = i65;
        } else {
         i60 = i64 + 8 | 0;
         HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
         i66 = HEAP32[i59 >> 2] | 0;
        }
        i59 = i15 | 0;
        HEAP32[i59 >> 2] = i64;
        HEAP32[i16 >> 2] = i66;
        __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i20, i15, i16);
        i64 = HEAP32[i59 >> 2] | 0;
        do {
         if ((i64 | 0) != 0) {
          i59 = i64 + 8 | 0;
          i60 = i59 | 0;
          i63 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
          HEAP32[i60 >> 2] = i63;
          if ((i63 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i59 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i59 - 8 | 0);
         }
        } while (0);
        i64 = i21 | 0;
        HEAP32[i64 >> 2] = 0;
        __ZN7WebCore5Range8setStartERKNS_8PositionERi(i53, i20, i64);
        i64 = HEAP32[i20 >> 2] | 0;
        if ((i64 | 0) == 0) {
         break;
        }
        i59 = i64 + 8 | 0;
        i64 = i59 | 0;
        i63 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
        HEAP32[i64 >> 2] = i63;
        if ((i63 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i59 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i59 - 8 | 0);
        break;
       }
      } else {
       if (i57) {
        i59 = i4 + 24 | 0;
        i63 = HEAP32[i59 >> 2] | 0;
        if ((i63 | 0) > -1) {
         i67 = i63;
        } else {
         i63 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i4 + 28 >> 2] | 0) | 0) + 1 | 0;
         HEAP32[i59 >> 2] = i63;
         i67 = i63;
        }
        i63 = HEAP32[i4 + 20 >> 2] | 0;
        if ((i63 | 0) == 0) {
         i68 = i67;
        } else {
         i64 = i63 + 8 | 0;
         HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 1;
         i68 = HEAP32[i59 >> 2] | 0;
        }
        i59 = i13 | 0;
        HEAP32[i59 >> 2] = i63;
        HEAP32[i14 >> 2] = i68;
        __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i22, i13, i14);
        i63 = HEAP32[i59 >> 2] | 0;
        do {
         if ((i63 | 0) != 0) {
          i59 = i63 + 8 | 0;
          i64 = i59 | 0;
          i60 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
          HEAP32[i64 >> 2] = i60;
          if ((i60 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i59 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i59 - 8 | 0);
         }
        } while (0);
        i63 = i23 | 0;
        HEAP32[i63 >> 2] = 0;
        __ZN7WebCore5Range6setEndERKNS_8PositionERi(i53, i22, i63);
        i63 = HEAP32[i22 >> 2] | 0;
        if ((i63 | 0) == 0) {
         break;
        }
        i59 = i63 + 8 | 0;
        i63 = i59 | 0;
        i60 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
        HEAP32[i63 >> 2] = i60;
        if ((i60 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i59 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i59 - 8 | 0);
        break;
       } else {
        i59 = i4 + 12 | 0;
        i60 = HEAP32[i59 >> 2] | 0;
        if ((i60 | 0) > -1) {
         i69 = i60;
        } else {
         i60 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i4 + 16 >> 2] | 0) | 0) + 1 | 0;
         HEAP32[i59 >> 2] = i60;
         i69 = i60;
        }
        i60 = HEAP32[i4 + 8 >> 2] | 0;
        if ((i60 | 0) == 0) {
         i70 = i69;
        } else {
         i63 = i60 + 8 | 0;
         HEAP32[i63 >> 2] = (HEAP32[i63 >> 2] | 0) + 1;
         i70 = HEAP32[i59 >> 2] | 0;
        }
        i59 = i11 | 0;
        HEAP32[i59 >> 2] = i60;
        HEAP32[i12 >> 2] = i70;
        __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i22, i11, i12);
        i60 = HEAP32[i59 >> 2] | 0;
        do {
         if ((i60 | 0) != 0) {
          i59 = i60 + 8 | 0;
          i63 = i59 | 0;
          i64 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
          HEAP32[i63 >> 2] = i64;
          if ((i64 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i59 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i59 - 8 | 0);
         }
        } while (0);
        i60 = i23 | 0;
        HEAP32[i60 >> 2] = 0;
        __ZN7WebCore5Range6setEndERKNS_8PositionERi(i53, i22, i60);
        i60 = HEAP32[i22 >> 2] | 0;
        if ((i60 | 0) == 0) {
         break;
        }
        i59 = i60 + 8 | 0;
        i60 = i59 | 0;
        i64 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
        HEAP32[i60 >> 2] = i64;
        if ((i64 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i59 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i59 - 8 | 0);
        break;
       }
      }
     } while (0);
     i59 = HEAP32[i4 + 8 >> 2] | 0;
     if ((i59 | 0) == 0) {
      i54 = 0;
      i55 = 1;
      i56 = i57;
      break;
     }
     i64 = __ZN7WebCore4Node29nonBoundaryShadowTreeRootNodeEv(i59) | 0;
     if ((i64 | 0) == 0) {
      i54 = 0;
      i55 = 1;
      i56 = i57;
      break;
     }
     i59 = i64 + 8 | 0;
     HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 1;
     if (!i58) {
      i60 = i26 | 0;
      HEAP32[i60 >> 2] = i64;
      HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 1;
      i63 = i27 | 0;
      HEAP32[i63 >> 2] = 0;
      __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i53, i26, 0, i63);
      i63 = HEAP32[i60 >> 2] | 0;
      if ((i63 | 0) == 0) {
       i54 = i64;
       i55 = 0;
       i56 = i57;
       break;
      }
      i60 = i63 + 8 | 0;
      i63 = i60 | 0;
      i71 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
      HEAP32[i63 >> 2] = i71;
      if ((i71 | 0) >= 1) {
       i54 = i64;
       i55 = 0;
       i56 = i57;
       break;
      }
      if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
       i54 = i64;
       i55 = 0;
       i56 = i57;
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
      i54 = i64;
      i55 = 0;
      i56 = i57;
      break;
     }
     i60 = i24 | 0;
     HEAP32[i60 >> 2] = i64;
     HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 1;
     if ((HEAP32[i64 + 12 >> 2] & 2 | 0) == 0) {
      i72 = 0;
     } else {
      i72 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i64) | 0;
     }
     i59 = i25 | 0;
     HEAP32[i59 >> 2] = 0;
     __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i53, i24, i72, i59);
     i59 = HEAP32[i60 >> 2] | 0;
     if ((i59 | 0) == 0) {
      i54 = i64;
      i55 = 0;
      i56 = i57;
      break;
     }
     i60 = i59 + 8 | 0;
     i59 = i60 | 0;
     i71 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
     HEAP32[i59 >> 2] = i71;
     if ((i71 | 0) >= 1) {
      i54 = i64;
      i55 = 0;
      i56 = i57;
      break;
     }
     if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
      i54 = i64;
      i55 = 0;
      i56 = i57;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
     i54 = i64;
     i55 = 0;
     i56 = i57;
    }
   } while (0);
   __ZN7WebCore13findPlainTextEPKNS_5RangeERKN3WTF6StringEj(i28, i53, i3, i5);
   i64 = i28 | 0;
   i60 = HEAP32[i64 >> 2] | 0;
   HEAP32[i64 >> 2] = 0;
   do {
    if (i56) {
     __ZN7WebCore16VisibleSelectionC1EPKNS_5RangeENS_9EAffinityEb(i30, i60, 1, 0);
     __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i29, i30);
     i64 = i29 | 0;
     i71 = __ZN7WebCore14areRangesEqualEPKNS_5RangeES2_(HEAP32[i64 >> 2] | 0, i4) | 0;
     i59 = HEAP32[i64 >> 2] | 0;
     do {
      if ((i59 | 0) != 0) {
       i64 = i59 | 0;
       i63 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
       if ((i63 | 0) == 0) {
        __ZN7WebCore5RangeD1Ev(i59);
        __ZN3WTF8fastFreeEPv(i59);
        break;
       } else {
        HEAP32[i64 >> 2] = i63;
        break;
       }
      }
     } while (0);
     __ZN7WebCore16VisibleSelectionD2Ev(i30);
     if (!i71) {
      i73 = i60;
      i74 = i53;
      break;
     }
     __ZN7WebCore15rangeOfContentsERNS_4NodeE(i31, HEAP32[(HEAP32[i51 >> 2] | 0) + 456 >> 2] | 0);
     i59 = i31 | 0;
     i57 = HEAP32[i59 >> 2] | 0;
     HEAP32[i59 >> 2] = 0;
     do {
      if ((i53 | 0) != 0) {
       i58 = i53 | 0;
       i63 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
       if ((i63 | 0) == 0) {
        __ZN7WebCore5RangeD1Ev(i53);
        __ZN3WTF8fastFreeEPv(i53);
       } else {
        HEAP32[i58 >> 2] = i63;
       }
       i63 = HEAP32[i59 >> 2] | 0;
       if ((i63 | 0) == 0) {
        break;
       }
       i58 = i63 | 0;
       i64 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
       if ((i64 | 0) == 0) {
        __ZN7WebCore5RangeD1Ev(i63);
        __ZN3WTF8fastFreeEPv(i63);
        break;
       } else {
        HEAP32[i58 >> 2] = i64;
        break;
       }
      }
     } while (0);
     i59 = (i52 | 0) == 0;
     do {
      if (i59) {
       i71 = i4 + 24 | 0;
       i64 = HEAP32[i71 >> 2] | 0;
       if ((i64 | 0) > -1) {
        i75 = i64;
       } else {
        i64 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i4 + 28 >> 2] | 0) | 0) + 1 | 0;
        HEAP32[i71 >> 2] = i64;
        i75 = i64;
       }
       i64 = HEAP32[i4 + 20 >> 2] | 0;
       if ((i64 | 0) == 0) {
        i76 = i75;
       } else {
        i58 = i64 + 8 | 0;
        HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
        i76 = HEAP32[i71 >> 2] | 0;
       }
       i71 = i9 | 0;
       HEAP32[i71 >> 2] = i64;
       HEAP32[i10 >> 2] = i76;
       __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i32, i9, i10);
       i64 = HEAP32[i71 >> 2] | 0;
       do {
        if ((i64 | 0) != 0) {
         i71 = i64 + 8 | 0;
         i58 = i71 | 0;
         i63 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
         HEAP32[i58 >> 2] = i63;
         if ((i63 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i71 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i71 - 8 | 0);
        }
       } while (0);
       i64 = i33 | 0;
       HEAP32[i64 >> 2] = 0;
       __ZN7WebCore5Range8setStartERKNS_8PositionERi(i57, i32, i64);
       i64 = HEAP32[i32 >> 2] | 0;
       if ((i64 | 0) == 0) {
        break;
       }
       i71 = i64 + 8 | 0;
       i64 = i71 | 0;
       i63 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
       HEAP32[i64 >> 2] = i63;
       if ((i63 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i71 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i71 - 8 | 0);
      } else {
       i71 = i4 + 12 | 0;
       i63 = HEAP32[i71 >> 2] | 0;
       if ((i63 | 0) > -1) {
        i77 = i63;
       } else {
        i63 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i4 + 16 >> 2] | 0) | 0) + 1 | 0;
        HEAP32[i71 >> 2] = i63;
        i77 = i63;
       }
       i63 = HEAP32[i4 + 8 >> 2] | 0;
       if ((i63 | 0) == 0) {
        i78 = i77;
       } else {
        i64 = i63 + 8 | 0;
        HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 1;
        i78 = HEAP32[i71 >> 2] | 0;
       }
       i71 = i7 | 0;
       HEAP32[i71 >> 2] = i63;
       HEAP32[i8 >> 2] = i78;
       __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i34, i7, i8);
       i63 = HEAP32[i71 >> 2] | 0;
       do {
        if ((i63 | 0) != 0) {
         i71 = i63 + 8 | 0;
         i64 = i71 | 0;
         i58 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
         HEAP32[i64 >> 2] = i58;
         if ((i58 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i71 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i71 - 8 | 0);
        }
       } while (0);
       i63 = i35 | 0;
       HEAP32[i63 >> 2] = 0;
       __ZN7WebCore5Range6setEndERKNS_8PositionERi(i57, i34, i63);
       i63 = HEAP32[i34 >> 2] | 0;
       if ((i63 | 0) == 0) {
        break;
       }
       i71 = i63 + 8 | 0;
       i63 = i71 | 0;
       i58 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
       HEAP32[i63 >> 2] = i58;
       if ((i58 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i71 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i71 - 8 | 0);
      }
     } while (0);
     do {
      if (!i55) {
       if (!i59) {
        i71 = i38 | 0;
        HEAP32[i71 >> 2] = i54;
        i58 = i54 + 8 | 0;
        HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
        i58 = i39 | 0;
        HEAP32[i58 >> 2] = 0;
        __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i57, i38, 0, i58);
        i58 = HEAP32[i71 >> 2] | 0;
        if ((i58 | 0) == 0) {
         break;
        }
        i71 = i58 + 8 | 0;
        i58 = i71 | 0;
        i63 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
        HEAP32[i58 >> 2] = i63;
        if ((i63 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i71 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i71 - 8 | 0);
        break;
       }
       i71 = i36 | 0;
       HEAP32[i71 >> 2] = i54;
       i63 = i54 + 8 | 0;
       HEAP32[i63 >> 2] = (HEAP32[i63 >> 2] | 0) + 1;
       if ((HEAP32[i54 + 12 >> 2] & 2 | 0) == 0) {
        i79 = 0;
       } else {
        i79 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i54) | 0;
       }
       i63 = i37 | 0;
       HEAP32[i63 >> 2] = 0;
       __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i57, i36, i79, i63);
       i63 = HEAP32[i71 >> 2] | 0;
       if ((i63 | 0) == 0) {
        break;
       }
       i71 = i63 + 8 | 0;
       i63 = i71 | 0;
       i58 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
       HEAP32[i63 >> 2] = i58;
       if ((i58 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i71 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i71 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore13findPlainTextEPKNS_5RangeERKN3WTF6StringEj(i40, i57, i3, i5);
     i59 = i40 | 0;
     i71 = HEAP32[i59 >> 2] | 0;
     HEAP32[i59 >> 2] = 0;
     if ((i60 | 0) == 0) {
      i73 = i71;
      i74 = i57;
      break;
     }
     i58 = i60 | 0;
     i63 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
     if ((i63 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i60);
      __ZN3WTF8fastFreeEPv(i60);
     } else {
      HEAP32[i58 >> 2] = i63;
     }
     i63 = HEAP32[i59 >> 2] | 0;
     if ((i63 | 0) == 0) {
      i73 = i71;
      i74 = i57;
      break;
     }
     i59 = i63 | 0;
     i58 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
     if ((i58 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i63);
      __ZN3WTF8fastFreeEPv(i63);
      i73 = i71;
      i74 = i57;
      break;
     } else {
      HEAP32[i59 >> 2] = i58;
      i73 = i71;
      i74 = i57;
      break;
     }
    } else {
     i73 = i60;
     i74 = i53;
    }
   } while (0);
   i53 = i41 | 0;
   HEAP32[i53 >> 2] = 0;
   do {
    if (i55 | (__ZNK7WebCore5Range9collapsedERi(i73, i53) | 0) ^ 1) {
     i80 = i73;
     i81 = i74;
    } else {
     __ZN7WebCore15rangeOfContentsERNS_4NodeE(i42, HEAP32[(HEAP32[i51 >> 2] | 0) + 456 >> 2] | 0);
     i60 = i42 | 0;
     i71 = HEAP32[i60 >> 2] | 0;
     HEAP32[i60 >> 2] = 0;
     do {
      if ((i74 | 0) != 0) {
       i58 = i74 | 0;
       i59 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
       if ((i59 | 0) == 0) {
        __ZN7WebCore5RangeD1Ev(i74);
        __ZN3WTF8fastFreeEPv(i74);
       } else {
        HEAP32[i58 >> 2] = i59;
       }
       i59 = HEAP32[i60 >> 2] | 0;
       if ((i59 | 0) == 0) {
        break;
       }
       i58 = i59 | 0;
       i63 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
       if ((i63 | 0) == 0) {
        __ZN7WebCore5RangeD1Ev(i59);
        __ZN3WTF8fastFreeEPv(i59);
        break;
       } else {
        HEAP32[i58 >> 2] = i63;
        break;
       }
      }
     } while (0);
     i60 = __ZNK7WebCore4Node10shadowHostEv(i54) | 0;
     if ((i52 | 0) == 0) {
      i57 = i43 | 0;
      HEAP32[i57 >> 2] = 0;
      __ZN7WebCore5Range13setStartAfterEPNS_4NodeERi(i71, i60, i57);
     } else {
      i57 = i44 | 0;
      HEAP32[i57 >> 2] = 0;
      __ZN7WebCore5Range12setEndBeforeEPNS_4NodeERi(i71, i60, i57);
     }
     __ZN7WebCore13findPlainTextEPKNS_5RangeERKN3WTF6StringEj(i45, i71, i3, i5);
     i57 = i45 | 0;
     i60 = HEAP32[i57 >> 2] | 0;
     HEAP32[i57 >> 2] = 0;
     if ((i73 | 0) == 0) {
      i80 = i60;
      i81 = i71;
      break;
     }
     i63 = i73 | 0;
     i58 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
     if ((i58 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i73);
      __ZN3WTF8fastFreeEPv(i73);
     } else {
      HEAP32[i63 >> 2] = i58;
     }
     i58 = HEAP32[i57 >> 2] | 0;
     if ((i58 | 0) == 0) {
      i80 = i60;
      i81 = i71;
      break;
     }
     i57 = i58 | 0;
     i63 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
     if ((i63 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i58);
      __ZN3WTF8fastFreeEPv(i58);
      i80 = i60;
      i81 = i71;
      break;
     } else {
      HEAP32[i57 >> 2] = i63;
      i80 = i60;
      i81 = i71;
      break;
     }
    }
   } while (0);
   i52 = i46 | 0;
   HEAP32[i52 >> 2] = 0;
   do {
    if (__ZNK7WebCore5Range9collapsedERi(i80, i52) | 0) {
     if ((i5 & 16 | 0) == 0) {
      i82 = i80;
      i83 = i81;
      break;
     }
     __ZN7WebCore15rangeOfContentsERNS_4NodeE(i47, HEAP32[(HEAP32[i51 >> 2] | 0) + 456 >> 2] | 0);
     i53 = i47 | 0;
     i60 = HEAP32[i53 >> 2] | 0;
     HEAP32[i53 >> 2] = 0;
     do {
      if ((i81 | 0) != 0) {
       i63 = i81 | 0;
       i57 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
       if ((i57 | 0) == 0) {
        __ZN7WebCore5RangeD1Ev(i81);
        __ZN3WTF8fastFreeEPv(i81);
       } else {
        HEAP32[i63 >> 2] = i57;
       }
       i57 = HEAP32[i53 >> 2] | 0;
       if ((i57 | 0) == 0) {
        break;
       }
       i63 = i57 | 0;
       i58 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
       if ((i58 | 0) == 0) {
        __ZN7WebCore5RangeD1Ev(i57);
        __ZN3WTF8fastFreeEPv(i57);
        break;
       } else {
        HEAP32[i63 >> 2] = i58;
        break;
       }
      }
     } while (0);
     __ZN7WebCore13findPlainTextEPKNS_5RangeERKN3WTF6StringEj(i48, i60, i3, i5);
     i53 = i48 | 0;
     i71 = HEAP32[i53 >> 2] | 0;
     HEAP32[i53 >> 2] = 0;
     if ((i80 | 0) == 0) {
      i82 = i71;
      i83 = i60;
      break;
     }
     i58 = i80 | 0;
     i63 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
     if ((i63 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i80);
      __ZN3WTF8fastFreeEPv(i80);
     } else {
      HEAP32[i58 >> 2] = i63;
     }
     i63 = HEAP32[i53 >> 2] | 0;
     if ((i63 | 0) == 0) {
      i82 = i71;
      i83 = i60;
      break;
     }
     i53 = i63 | 0;
     i58 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
     if ((i58 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i63);
      __ZN3WTF8fastFreeEPv(i63);
      i82 = i71;
      i83 = i60;
      break;
     } else {
      HEAP32[i53 >> 2] = i58;
      i82 = i71;
      i83 = i60;
      break;
     }
    } else {
     i82 = i80;
     i83 = i81;
    }
   } while (0);
   i51 = i49 | 0;
   HEAP32[i51 >> 2] = 0;
   i52 = i1 | 0;
   do {
    if (__ZNK7WebCore5Range9collapsedERi(i82, i51) | 0) {
     HEAP32[i52 >> 2] = 0;
     if ((i82 | 0) == 0) {
      break;
     }
     i71 = i82 | 0;
     i58 = (HEAP32[i71 >> 2] | 0) - 1 | 0;
     if ((i58 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i82);
      __ZN3WTF8fastFreeEPv(i82);
      break;
     } else {
      HEAP32[i71 >> 2] = i58;
      break;
     }
    } else {
     HEAP32[i52 >> 2] = i82;
    }
   } while (0);
   do {
    if (!i55) {
     i52 = i54 + 8 | 0;
     i51 = i52 | 0;
     i58 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
     HEAP32[i51 >> 2] = i58;
     if ((i58 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
    }
   } while (0);
   if ((i83 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   i52 = i83 | 0;
   i58 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
   if ((i58 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i83);
    __ZN3WTF8fastFreeEPv(i83);
    STACKTOP = i6;
    return;
   } else {
    HEAP32[i52 >> 2] = i58;
    STACKTOP = i6;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore6Editor38updateMarkersForWordsAffectedByEditingEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 336 | 0;
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
 i21 = i3 + 264 | 0;
 i22 = i3 + 280 | 0;
 i23 = i3 + 296 | 0;
 i24 = i3 + 312 | 0;
 i25 = i3 + 320 | 0;
 i26 = i3 + 328 | 0;
 i27 = i1 | 0;
 i28 = HEAP32[i27 >> 2] | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i28 + 456 >> 2] | 0) + 1124 >> 2] | 0) + 12 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i29 = HEAP32[i28 + 32 >> 2] | 0;
 if ((i29 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i28 = HEAP32[i29 + 72 >> 2] | 0;
 if ((i28 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 168 >> 2] & 1](i28) | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i28 = HEAP32[(HEAP32[(HEAP32[i27 >> 2] | 0) + 32 >> 2] | 0) + 72 >> 2] | 0;
 i29 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 168 >> 2] & 1](i28) | 0;
 if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i29 >> 2] | 0) + 8 >> 2] & 1](i29, 2) | 0) {
  STACKTOP = i3;
  return;
 }
 i29 = HEAP32[(HEAP32[i27 >> 2] | 0) + 468 >> 2] | 0;
 i28 = i5 | 0;
 i30 = HEAP32[i29 + 56 >> 2] | 0;
 HEAP32[i28 >> 2] = i30;
 if ((i30 | 0) == 0) {
  i31 = i5 + 8 | 0;
  i32 = 0;
  i33 = i31;
  i34 = i31;
 } else {
  i31 = i30 + 8 | 0;
  HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
  i31 = i5 + 8 | 0;
  i30 = i31;
  i32 = HEAP32[i30 >> 2] & -8;
  i33 = i31;
  i34 = i30;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i29 + 60 >> 2];
 i30 = HEAP32[i29 + 64 >> 2] | 0;
 i29 = i32 | i30 & 7;
 HEAP32[i34 >> 2] = i29;
 HEAP8[i33] = i29 & 255 & -9 | i30 & 8;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i5, 1);
 i5 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i28 = i5 + 8 | 0;
   i30 = i28 | 0;
   i29 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   HEAP32[i30 >> 2] = i29;
   if ((i29 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[(HEAP32[i27 >> 2] | 0) + 468 >> 2] | 0;
 i28 = i7 | 0;
 i29 = HEAP32[i5 + 68 >> 2] | 0;
 HEAP32[i28 >> 2] = i29;
 if ((i29 | 0) != 0) {
  i30 = i29 + 8 | 0;
  HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
 }
 HEAP32[i7 + 4 >> 2] = HEAP32[i5 + 72 >> 2];
 i30 = HEAP32[i5 + 76 >> 2] | 0;
 i5 = i7 + 8 | 0;
 i29 = i5;
 i33 = HEAP32[i29 >> 2] & -8 | i30 & 7;
 HEAP32[i29 >> 2] = i33;
 HEAP8[i5] = i33 & 255 & -9 | i30 & 8;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i6, i7, 1);
 i7 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i28 = i7 + 8 | 0;
   i30 = i28 | 0;
   i33 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   HEAP32[i30 >> 2] = i33;
   if ((i33 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
  }
 } while (0);
 i7 = i4 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) != 0) {
   __ZN7WebCore11startOfWordERKNS_15VisiblePositionENS_9EWordSideE(i8, i4, 1);
   __ZN7WebCore9endOfWordERKNS_15VisiblePositionENS_9EWordSideE(i9, i4, 1);
   __ZN7WebCore11startOfWordERKNS_15VisiblePositionENS_9EWordSideE(i10, i6, 0);
   __ZN7WebCore9endOfWordERKNS_15VisiblePositionENS_9EWordSideE(i11, i6, 0);
   i28 = i8 | 0;
   do {
    if ((HEAP32[i28 >> 2] | 0) == 0) {
     __ZN7WebCore11startOfWordERKNS_15VisiblePositionENS_9EWordSideE(i12, i4, 0);
     i33 = i12 | 0;
     i30 = HEAP32[i33 >> 2] | 0;
     HEAP32[i33 >> 2] = 0;
     i5 = HEAP32[i28 >> 2] | 0;
     HEAP32[i28 >> 2] = i30;
     do {
      if ((i5 | 0) != 0) {
       i30 = i5 + 8 | 0;
       i29 = i30 | 0;
       i34 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
       HEAP32[i29 >> 2] = i34;
       if ((i34 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
      }
     } while (0);
     HEAP32[i8 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
     i5 = HEAP32[i12 + 8 >> 2] | 0;
     i30 = i8 + 8 | 0;
     i34 = i30;
     i29 = HEAP32[i34 >> 2] & -8 | i5 & 7;
     HEAP32[i34 >> 2] = i29;
     HEAP8[i30] = i29 & 255 & -9 | i5 & 8;
     HEAP32[i8 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
     i5 = HEAP32[i33 >> 2] | 0;
     do {
      if ((i5 | 0) != 0) {
       i29 = i5 + 8 | 0;
       i30 = i29 | 0;
       i34 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
       HEAP32[i30 >> 2] = i34;
       if ((i34 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore9endOfWordERKNS_15VisiblePositionENS_9EWordSideE(i13, i4, 0);
     i5 = i13 | 0;
     i33 = HEAP32[i5 >> 2] | 0;
     HEAP32[i5 >> 2] = 0;
     i29 = i9 | 0;
     i34 = HEAP32[i29 >> 2] | 0;
     HEAP32[i29 >> 2] = i33;
     do {
      if ((i34 | 0) != 0) {
       i33 = i34 + 8 | 0;
       i29 = i33 | 0;
       i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
       HEAP32[i29 >> 2] = i30;
       if ((i30 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
      }
     } while (0);
     HEAP32[i9 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
     i34 = HEAP32[i13 + 8 >> 2] | 0;
     i33 = i9 + 8 | 0;
     i30 = i33;
     i29 = HEAP32[i30 >> 2] & -8 | i34 & 7;
     HEAP32[i30 >> 2] = i29;
     HEAP8[i33] = i29 & 255 & -9 | i34 & 8;
     HEAP32[i9 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
     i34 = HEAP32[i5 >> 2] | 0;
     if ((i34 | 0) == 0) {
      break;
     }
     i29 = i34 + 8 | 0;
     i34 = i29 | 0;
     i33 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
     HEAP32[i34 >> 2] = i33;
     if ((i33 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
    }
   } while (0);
   i29 = i11 | 0;
   do {
    if ((HEAP32[i29 >> 2] | 0) == 0) {
     __ZN7WebCore11startOfWordERKNS_15VisiblePositionENS_9EWordSideE(i14, i6, 1);
     i33 = i14 | 0;
     i34 = HEAP32[i33 >> 2] | 0;
     HEAP32[i33 >> 2] = 0;
     i30 = i10 | 0;
     i32 = HEAP32[i30 >> 2] | 0;
     HEAP32[i30 >> 2] = i34;
     do {
      if ((i32 | 0) != 0) {
       i34 = i32 + 8 | 0;
       i30 = i34 | 0;
       i31 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
       HEAP32[i30 >> 2] = i31;
       if ((i31 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
      }
     } while (0);
     HEAP32[i10 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
     i32 = HEAP32[i14 + 8 >> 2] | 0;
     i5 = i10 + 8 | 0;
     i34 = i5;
     i31 = HEAP32[i34 >> 2] & -8 | i32 & 7;
     HEAP32[i34 >> 2] = i31;
     HEAP8[i5] = i31 & 255 & -9 | i32 & 8;
     HEAP32[i10 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
     i32 = HEAP32[i33 >> 2] | 0;
     do {
      if ((i32 | 0) != 0) {
       i31 = i32 + 8 | 0;
       i5 = i31 | 0;
       i34 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
       HEAP32[i5 >> 2] = i34;
       if ((i34 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore9endOfWordERKNS_15VisiblePositionENS_9EWordSideE(i15, i6, 1);
     i32 = i15 | 0;
     i33 = HEAP32[i32 >> 2] | 0;
     HEAP32[i32 >> 2] = 0;
     i31 = HEAP32[i29 >> 2] | 0;
     HEAP32[i29 >> 2] = i33;
     do {
      if ((i31 | 0) != 0) {
       i33 = i31 + 8 | 0;
       i34 = i33 | 0;
       i5 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
       HEAP32[i34 >> 2] = i5;
       if ((i5 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
      }
     } while (0);
     HEAP32[i11 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
     i31 = HEAP32[i15 + 8 >> 2] | 0;
     i33 = i11 + 8 | 0;
     i5 = i33;
     i34 = HEAP32[i5 >> 2] & -8 | i31 & 7;
     HEAP32[i5 >> 2] = i34;
     HEAP8[i33] = i34 & 255 & -9 | i31 & 8;
     HEAP32[i11 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
     i31 = HEAP32[i32 >> 2] | 0;
     if ((i31 | 0) == 0) {
      break;
     }
     i34 = i31 + 8 | 0;
     i31 = i34 | 0;
     i33 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     HEAP32[i31 >> 2] = i33;
     if ((i33 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
    }
   } while (0);
   do {
    if (i2) {
     if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i9, i4) | 0) {
      __ZN7WebCore16nextWordPositionERKNS_15VisiblePositionE(i16, i8);
      i34 = i16 | 0;
      i33 = HEAP32[i34 >> 2] | 0;
      HEAP32[i34 >> 2] = 0;
      i31 = HEAP32[i28 >> 2] | 0;
      HEAP32[i28 >> 2] = i33;
      do {
       if ((i31 | 0) != 0) {
        i33 = i31 + 8 | 0;
        i5 = i33 | 0;
        i30 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
        HEAP32[i5 >> 2] = i30;
        if ((i30 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
       }
      } while (0);
      HEAP32[i8 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
      i31 = HEAP32[i16 + 8 >> 2] | 0;
      i32 = i8 + 8 | 0;
      i33 = i32;
      i30 = HEAP32[i33 >> 2] & -8 | i31 & 7;
      HEAP32[i33 >> 2] = i30;
      HEAP8[i32] = i30 & 255 & -9 | i31 & 8;
      HEAP32[i8 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
      i31 = HEAP32[i34 >> 2] | 0;
      do {
       if ((i31 | 0) != 0) {
        i30 = i31 + 8 | 0;
        i32 = i30 | 0;
        i33 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
        HEAP32[i32 >> 2] = i33;
        if ((i33 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
       }
      } while (0);
      __ZN7WebCore9endOfWordERKNS_15VisiblePositionENS_9EWordSideE(i17, i8, 0);
      i31 = i17 | 0;
      i34 = HEAP32[i31 >> 2] | 0;
      HEAP32[i31 >> 2] = 0;
      i30 = i9 | 0;
      i33 = HEAP32[i30 >> 2] | 0;
      HEAP32[i30 >> 2] = i34;
      do {
       if ((i33 | 0) != 0) {
        i34 = i33 + 8 | 0;
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
      HEAP32[i9 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
      i33 = HEAP32[i17 + 8 >> 2] | 0;
      i34 = i9 + 8 | 0;
      i32 = i34;
      i30 = HEAP32[i32 >> 2] & -8 | i33 & 7;
      HEAP32[i32 >> 2] = i30;
      HEAP8[i34] = i30 & 255 & -9 | i33 & 8;
      HEAP32[i9 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
      i33 = HEAP32[i31 >> 2] | 0;
      do {
       if ((i33 | 0) != 0) {
        i30 = i33 + 8 | 0;
        i34 = i30 | 0;
        i32 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
        HEAP32[i34 >> 2] = i32;
        if ((i32 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
       }
      } while (0);
      if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i8, i6) | 0) {
       i35 = 116;
       break;
      }
     }
     if (!(__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i10, i6) | 0)) {
      i35 = 91;
      break;
     }
     __ZN7WebCore20previousWordPositionERKNS_15VisiblePositionE(i18, i10);
     i33 = i18 | 0;
     i31 = HEAP32[i33 >> 2] | 0;
     HEAP32[i33 >> 2] = 0;
     i30 = i10 | 0;
     i32 = HEAP32[i30 >> 2] | 0;
     HEAP32[i30 >> 2] = i31;
     do {
      if ((i32 | 0) != 0) {
       i31 = i32 + 8 | 0;
       i30 = i31 | 0;
       i34 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
       HEAP32[i30 >> 2] = i34;
       if ((i34 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
      }
     } while (0);
     HEAP32[i10 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
     i32 = HEAP32[i18 + 8 >> 2] | 0;
     i31 = i10 + 8 | 0;
     i34 = i31;
     i30 = HEAP32[i34 >> 2] & -8 | i32 & 7;
     HEAP32[i34 >> 2] = i30;
     HEAP8[i31] = i30 & 255 & -9 | i32 & 8;
     HEAP32[i10 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
     i32 = HEAP32[i33 >> 2] | 0;
     do {
      if ((i32 | 0) != 0) {
       i30 = i32 + 8 | 0;
       i31 = i30 | 0;
       i34 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
       HEAP32[i31 >> 2] = i34;
       if ((i34 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore9endOfWordERKNS_15VisiblePositionENS_9EWordSideE(i19, i10, 0);
     i32 = i19 | 0;
     i33 = HEAP32[i32 >> 2] | 0;
     HEAP32[i32 >> 2] = 0;
     i30 = HEAP32[i29 >> 2] | 0;
     HEAP32[i29 >> 2] = i33;
     do {
      if ((i30 | 0) != 0) {
       i33 = i30 + 8 | 0;
       i34 = i33 | 0;
       i31 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
       HEAP32[i34 >> 2] = i31;
       if ((i31 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
      }
     } while (0);
     HEAP32[i11 + 4 >> 2] = HEAP32[i19 + 4 >> 2];
     i30 = HEAP32[i19 + 8 >> 2] | 0;
     i33 = i11 + 8 | 0;
     i31 = i33;
     i34 = HEAP32[i31 >> 2] & -8 | i30 & 7;
     HEAP32[i31 >> 2] = i34;
     HEAP8[i33] = i34 & 255 & -9 | i30 & 8;
     HEAP32[i11 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
     i30 = HEAP32[i32 >> 2] | 0;
     do {
      if ((i30 | 0) != 0) {
       i34 = i30 + 8 | 0;
       i33 = i34 | 0;
       i31 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
       HEAP32[i33 >> 2] = i31;
       if ((i31 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
      }
     } while (0);
     if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i11, i4) | 0) {
      i35 = 116;
     } else {
      i35 = 91;
     }
    } else {
     i35 = 91;
    }
   } while (0);
   do {
    if ((i35 | 0) == 91) {
     i30 = HEAP32[i28 >> 2] | 0;
     if ((i30 | 0) == 0) {
      i35 = 116;
      break;
     }
     if ((HEAP32[i9 >> 2] | 0) == 0) {
      i35 = 116;
      break;
     }
     if ((HEAP32[i10 >> 2] | 0) == 0) {
      i35 = 116;
      break;
     }
     if ((HEAP32[i29 >> 2] | 0) == 0) {
      break;
     }
     i32 = HEAP32[(HEAP32[i27 >> 2] | 0) + 456 >> 2] | 0;
     i34 = i21 | 0;
     HEAP32[i34 >> 2] = i30;
     i31 = i30 + 8 | 0;
     HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
     i31 = HEAP32[i29 >> 2] | 0;
     HEAP32[i21 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
     i30 = HEAP32[i8 + 8 >> 2] | 0;
     i33 = i21 + 8 | 0;
     i5 = i33;
     i36 = HEAP32[i5 >> 2] & -8 | i30 & 7;
     HEAP32[i5 >> 2] = i36;
     HEAP8[i33] = i36 & 255 & -9 | i30 & 8;
     i30 = i22 | 0;
     HEAP32[i30 >> 2] = i31;
     if ((i31 | 0) != 0) {
      i36 = i31 + 8 | 0;
      HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
     }
     HEAP32[i22 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
     i36 = HEAP32[i11 + 8 >> 2] | 0;
     i31 = i22 + 8 | 0;
     i33 = i31;
     i5 = HEAP32[i33 >> 2] & -8 | i36 & 7;
     HEAP32[i33 >> 2] = i5;
     HEAP8[i31] = i5 & 255 & -9 | i36 & 8;
     __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i20, i32, i21, i22);
     i32 = i20 | 0;
     i36 = HEAP32[i32 >> 2] | 0;
     HEAP32[i32 >> 2] = 0;
     i32 = HEAP32[i30 >> 2] | 0;
     do {
      if ((i32 | 0) != 0) {
       i30 = i32 + 8 | 0;
       i5 = i30 | 0;
       i31 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
       HEAP32[i5 >> 2] = i31;
       if ((i31 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
      }
     } while (0);
     i32 = HEAP32[i34 >> 2] | 0;
     do {
      if ((i32 | 0) != 0) {
       i30 = i32 + 8 | 0;
       i31 = i30 | 0;
       i5 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
       HEAP32[i31 >> 2] = i5;
       if ((i5 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
      }
     } while (0);
     i32 = HEAP32[(HEAP32[(HEAP32[i27 >> 2] | 0) + 456 >> 2] | 0) + 1124 >> 2] | 0;
     HEAP32[i24 >> 2] = 512;
     __ZN7WebCore24DocumentMarkerController14markersInRangeEPNS_5RangeENS_14DocumentMarker11MarkerTypesE(i23, i32, i36, i24);
     i32 = i23 + 8 | 0;
     if ((HEAP32[i32 >> 2] | 0) != 0) {
      i34 = i1 + 44 | 0;
      i30 = i23 | 0;
      i5 = 0;
      while (1) {
       __ZN7WebCore25AlternativeTextController36removeDictationAlternativesForMarkerEPKNS_14DocumentMarkerE(HEAP32[i34 >> 2] | 0, HEAP32[(HEAP32[i30 >> 2] | 0) + (i5 << 2) >> 2] | 0);
       i5 = i5 + 1 | 0;
       if (i5 >>> 0 >= (HEAP32[i32 >> 2] | 0) >>> 0) {
        break;
       }
      }
     }
     i5 = HEAP32[(HEAP32[(HEAP32[i27 >> 2] | 0) + 456 >> 2] | 0) + 1124 >> 2] | 0;
     HEAP32[i25 >> 2] = 659;
     __ZN7WebCore24DocumentMarkerController13removeMarkersEPNS_5RangeENS_14DocumentMarker11MarkerTypesENS0_37RemovePartiallyOverlappingMarkerOrNotE(i5, i36, i25, 1);
     i5 = HEAP32[(HEAP32[(HEAP32[i27 >> 2] | 0) + 456 >> 2] | 0) + 1124 >> 2] | 0;
     HEAP32[i26 >> 2] = 8;
     __ZN7WebCore24DocumentMarkerController42clearDescriptionOnMarkersIntersectingRangeEPNS_5RangeENS_14DocumentMarker11MarkerTypesE(i5, i36, i26);
     if ((HEAP32[i32 >> 2] | 0) != 0) {
      HEAP32[i32 >> 2] = 0;
     }
     i5 = i23 | 0;
     i30 = HEAP32[i5 >> 2] | 0;
     if ((i30 | 0) != 0) {
      HEAP32[i5 >> 2] = 0;
      HEAP32[i23 + 4 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i30);
     }
     if ((i36 | 0) == 0) {
      i35 = 116;
      break;
     }
     i30 = i36 | 0;
     i5 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     if ((i5 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i36);
      __ZN3WTF8fastFreeEPv(i36);
      i35 = 116;
      break;
     } else {
      HEAP32[i30 >> 2] = i5;
      i35 = 116;
      break;
     }
    }
   } while (0);
   do {
    if ((i35 | 0) == 116) {
     i5 = HEAP32[i29 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     i30 = i5 + 8 | 0;
     i5 = i30 | 0;
     i34 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     HEAP32[i5 >> 2] = i34;
     if ((i34 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
    }
   } while (0);
   i29 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i30 = i29 + 8 | 0;
     i34 = i30 | 0;
     i5 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
     HEAP32[i34 >> 2] = i5;
     if ((i5 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
    }
   } while (0);
   i29 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i30 = i29 + 8 | 0;
     i5 = i30 | 0;
     i34 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     HEAP32[i5 >> 2] = i34;
     if ((i34 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
    }
   } while (0);
   i29 = HEAP32[i28 >> 2] | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   i30 = i29 + 8 | 0;
   i29 = i30 | 0;
   i34 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
   HEAP32[i29 >> 2] = i34;
   if ((i34 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
  }
 } while (0);
 i9 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i6 = i9 + 8 | 0;
   i10 = i6 | 0;
   i35 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i35;
   if ((i35 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i9 + 8 | 0;
 i9 = i7 | 0;
 i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i6;
 if ((i6 | 0) >= 1) {
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
function __ZN7WebCore6Editor14setCompositionERKN3WTF6StringERKNS1_6VectorINS_20CompositionUnderlineELj0ENS1_15CrashOnOverflowEEEjj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = i6 + 64 | 0;
 i16 = i6 + 72 | 0;
 i17 = i6 + 88 | 0;
 i18 = i6 + 104 | 0;
 i19 = i6 + 120 | 0;
 i20 = i6 + 128 | 0;
 i21 = i6 + 136 | 0;
 i22 = i1 | 0;
 __ZN7WebCore26UserTypingGestureIndicatorC1ERNS_5FrameE(i11, HEAP32[i22 >> 2] | 0);
 i23 = i1 + 32 | 0;
 if ((HEAP8[i23] & 1) == 0) {
  HEAP8[i23] = 1;
 }
 __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[(HEAP32[i22 >> 2] | 0) + 456 >> 2] | 0);
 __ZN7WebCore6Editor17selectCompositionEv(i1);
 i24 = HEAP32[i22 >> 2] | 0;
 i25 = i24 + 468 | 0;
 if ((HEAP32[(HEAP32[i25 >> 2] | 0) + 84 >> 2] | 0) == 0) {
  if ((HEAP8[i23] & 1) == 0) {
   __ZN7WebCore26UserTypingGestureIndicatorD1Ev(i11);
   STACKTOP = i6;
   return;
  }
  HEAP8[i23] = 0;
  __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(HEAP32[i25 >> 2] | 0, __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE, 0);
  __ZN7WebCore26UserTypingGestureIndicatorD1Ev(i11);
  STACKTOP = i6;
  return;
 }
 i25 = HEAP32[i24 + 456 >> 2] | 0;
 i24 = HEAP32[i25 + 680 >> 2] | 0;
 L11 : do {
  if ((i24 | 0) == 0) {
   i26 = i2 | 0;
  } else {
   i27 = i2 | 0;
   i28 = HEAP32[i27 >> 2] | 0;
   if ((i28 | 0) == 0) {
    i29 = 1;
   } else {
    i29 = (HEAP32[i28 + 4 >> 2] | 0) == 0;
   }
   do {
    if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
     if (i29) {
      i26 = i27;
      break L11;
     }
     i28 = i24 | 0;
     i30 = HEAP32[(HEAP32[i24 >> 2] | 0) + 32 >> 2] | 0;
     i31 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 72 | 0;
     i32 = HEAP32[i25 + 336 >> 2] | 0;
     if ((i32 | 0) != 0) {
      i33 = i32 + 36 | 0;
      HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
     }
     __ZNK7WebCore6Editor12selectedTextENS_20TextIteratorBehaviorE(i13, i1, 0);
     i33 = __ZN3WTF10fastMallocEj(64) | 0;
     i34 = i10 | 0;
     HEAP32[i34 >> 2] = i32;
     __ZN7WebCore16CompositionEventC1ERKN3WTF12AtomicStringENS1_10PassRefPtrINS_9DOMWindowEEERKNS1_6StringE(i33, i31, i10, i13);
     i31 = HEAP32[i34 >> 2] | 0;
     do {
      if ((i31 | 0) != 0) {
       i34 = i31 + 36 | 0;
       i32 = i34 | 0;
       i35 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
       if ((i35 | 0) != 0) {
        HEAP32[i32 >> 2] = i35;
        break;
       }
       i35 = i34 - 36 | 0;
       if ((i35 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i35 >> 2] | 0) + 44 >> 2] & 3](i35);
      }
     } while (0);
     i31 = i12 | 0;
     HEAP32[i31 >> 2] = i33;
     FUNCTION_TABLE_iii[i30 & 1](i28, i12) | 0;
     i35 = HEAP32[i31 >> 2] | 0;
     do {
      if ((i35 | 0) != 0) {
       i31 = i35 + 8 | 0;
       i34 = i31 | 0;
       i32 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
       if ((i32 | 0) != 0) {
        HEAP32[i34 >> 2] = i32;
        break;
       }
       i32 = i31 - 8 | 0;
       if ((i32 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] & 3](i32);
      }
     } while (0);
     i35 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i35 | 0) != 0) {
       i28 = i35 | 0;
       i30 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
       if ((i30 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i35);
        break;
       } else {
        HEAP32[i28 >> 2] = i30;
        break;
       }
      }
     } while (0);
     i35 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 76 | 0;
     i30 = HEAP32[(HEAP32[(HEAP32[i22 >> 2] | 0) + 456 >> 2] | 0) + 336 >> 2] | 0;
     if ((i30 | 0) != 0) {
      i28 = i30 + 36 | 0;
      HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
     }
     i28 = __ZN3WTF10fastMallocEj(64) | 0;
     i33 = i9 | 0;
     HEAP32[i33 >> 2] = i30;
     __ZN7WebCore16CompositionEventC1ERKN3WTF12AtomicStringENS1_10PassRefPtrINS_9DOMWindowEEERKNS1_6StringE(i28, i35, i9, i2);
     i35 = HEAP32[i33 >> 2] | 0;
     if ((i35 | 0) == 0) {
      i36 = i28;
      break;
     }
     i33 = i35 + 36 | 0;
     i35 = i33 | 0;
     i30 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
     if ((i30 | 0) != 0) {
      HEAP32[i35 >> 2] = i30;
      i36 = i28;
      break;
     }
     i30 = i33 - 36 | 0;
     if ((i30 | 0) == 0) {
      i36 = i28;
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 44 >> 2] & 3](i30);
     i36 = i28;
    } else {
     i28 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
     if (i29) {
      i30 = HEAP32[i25 + 336 >> 2] | 0;
      if ((i30 | 0) != 0) {
       i33 = i30 + 36 | 0;
       HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
      }
      i33 = __ZN3WTF10fastMallocEj(64) | 0;
      i35 = i7 | 0;
      HEAP32[i35 >> 2] = i30;
      __ZN7WebCore16CompositionEventC1ERKN3WTF12AtomicStringENS1_10PassRefPtrINS_9DOMWindowEEERKNS1_6StringE(i33, i28 + 68 | 0, i7, i2);
      i30 = HEAP32[i35 >> 2] | 0;
      if ((i30 | 0) == 0) {
       i36 = i33;
       break;
      }
      i35 = i30 + 36 | 0;
      i30 = i35 | 0;
      i32 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
      if ((i32 | 0) != 0) {
       HEAP32[i30 >> 2] = i32;
       i36 = i33;
       break;
      }
      i32 = i35 - 36 | 0;
      if ((i32 | 0) == 0) {
       i36 = i33;
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i32 >> 2] | 0) + 44 >> 2] & 3](i32);
      i36 = i33;
      break;
     } else {
      i33 = HEAP32[i25 + 336 >> 2] | 0;
      if ((i33 | 0) != 0) {
       i32 = i33 + 36 | 0;
       HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
      }
      i32 = __ZN3WTF10fastMallocEj(64) | 0;
      i35 = i8 | 0;
      HEAP32[i35 >> 2] = i33;
      __ZN7WebCore16CompositionEventC1ERKN3WTF12AtomicStringENS1_10PassRefPtrINS_9DOMWindowEEERKNS1_6StringE(i32, i28 + 76 | 0, i8, i2);
      i28 = HEAP32[i35 >> 2] | 0;
      if ((i28 | 0) == 0) {
       i36 = i32;
       break;
      }
      i35 = i28 + 36 | 0;
      i28 = i35 | 0;
      i33 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
      if ((i33 | 0) != 0) {
       HEAP32[i28 >> 2] = i33;
       i36 = i32;
       break;
      }
      i33 = i35 - 36 | 0;
      if ((i33 | 0) == 0) {
       i36 = i32;
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 44 >> 2] & 3](i33);
      i36 = i32;
      break;
     }
    }
   } while (0);
   if ((i36 | 0) == 0) {
    i26 = i27;
    break;
   }
   i32 = i14 | 0;
   i33 = i36;
   HEAP32[i32 >> 2] = i33;
   i35 = i36 + 8 | 0;
   HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
   i28 = i15 | 0;
   HEAP32[i28 >> 2] = 0;
   __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEERi(i24 | 0, i14, i28) | 0;
   i28 = HEAP32[i32 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i32 = i28 + 8 | 0;
     i30 = i32 | 0;
     i31 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     if ((i31 | 0) != 0) {
      HEAP32[i30 >> 2] = i31;
      break;
     }
     i31 = i32 - 8 | 0;
     if ((i31 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 3](i31);
    }
   } while (0);
   i28 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
   if ((i28 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i36 >> 2] | 0) + 4 >> 2] & 3](i33);
    i26 = i27;
    break;
   } else {
    HEAP32[i35 >> 2] = i28;
    i26 = i27;
    break;
   }
  }
 } while (0);
 i36 = HEAP32[i26 >> 2] | 0;
 if ((i36 | 0) == 0) {
  i37 = 61;
 } else {
  if ((HEAP32[i36 + 4 >> 2] | 0) == 0) {
   i37 = 61;
  }
 }
 if ((i37 | 0) == 61) {
  __ZN7WebCore13TypingCommand15deleteSelectionERNS_8DocumentEj(HEAP32[(HEAP32[i22 >> 2] | 0) + 456 >> 2] | 0, 8);
 }
 i36 = i1 + 8 | 0;
 i14 = HEAP32[i36 >> 2] | 0;
 HEAP32[i36 >> 2] = 0;
 do {
  if ((i14 | 0) != 0) {
   i24 = i14 + 8 | 0;
   i15 = i24 | 0;
   i8 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
  }
 } while (0);
 i14 = i1 + 20 | 0;
 i24 = i1 + 24 | 0;
 do {
  if ((HEAP32[i24 >> 2] | 0) != 0) {
   i8 = i1 + 28 | 0;
   if ((HEAP32[i8 >> 2] | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
   }
   i8 = i14 | 0;
   i15 = HEAP32[i8 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   HEAP32[i8 >> 2] = 0;
   HEAP32[i24 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i15);
  }
 } while (0);
 i24 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   if ((HEAP32[i24 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore13TypingCommand10insertTextERNS_8DocumentERKN3WTF6StringEjNS0_19TextCompositionTypeE(HEAP32[(HEAP32[i22 >> 2] | 0) + 456 >> 2] | 0, i2, 9, 1);
   i15 = HEAP32[(HEAP32[i22 >> 2] | 0) + 468 >> 2] | 0;
   i8 = i17 | 0;
   i25 = HEAP32[i15 + 32 >> 2] | 0;
   HEAP32[i8 >> 2] = i25;
   if ((i25 | 0) != 0) {
    i7 = i25 + 8 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   }
   HEAP32[i17 + 4 >> 2] = HEAP32[i15 + 36 >> 2];
   i7 = HEAP32[i15 + 40 >> 2] | 0;
   i15 = i17 + 8 | 0;
   i25 = i15;
   i29 = HEAP32[i25 >> 2] & -8 | i7 & 7;
   HEAP32[i25 >> 2] = i29;
   HEAP8[i15] = i29 & 255 & -9 | i7 & 8;
   __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i16, i17, 1);
   i7 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 + 8 | 0;
     i29 = i8 | 0;
     i15 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     HEAP32[i29 >> 2] = i15;
     if ((i15 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
    }
   } while (0);
   i7 = HEAP32[(HEAP32[i22 >> 2] | 0) + 468 >> 2] | 0;
   i27 = i18 | 0;
   i35 = HEAP32[i7 + 44 >> 2] | 0;
   HEAP32[i27 >> 2] = i35;
   if ((i35 | 0) != 0) {
    i33 = i35 + 8 | 0;
    HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
   }
   i33 = i18 + 4 | 0;
   HEAP32[i33 >> 2] = HEAP32[i7 + 48 >> 2];
   i35 = HEAP32[i7 + 52 >> 2] | 0;
   i7 = i18 + 8 | 0;
   i8 = i7;
   i15 = HEAP32[i8 >> 2] & -8 | i35 & 7;
   HEAP32[i8 >> 2] = i15;
   i29 = i15 & 255 & -9 | i35 & 8;
   HEAP8[i7] = i29;
   i35 = i16 | 0;
   i15 = HEAP32[i35 >> 2] | 0;
   i25 = i16 + 8 | 0;
   do {
    if ((HEAP8[i25] & 8) == 0) {
     i9 = HEAP32[i25 >> 2] & 7;
     if (!((i9 | 0) == 2 | (i9 | 0) == 4)) {
      i37 = 83;
      break;
     }
     i9 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i16) | 0;
     i38 = i9;
     i39 = HEAP8[i7] | 0;
    } else {
     i37 = 83;
    }
   } while (0);
   if ((i37 | 0) == 83) {
    i38 = HEAP32[i16 + 4 >> 2] | 0;
    i39 = i29;
   }
   i7 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i39 & 8) == 0) {
     i25 = HEAP32[i8 >> 2] & 7;
     if (!((i25 | 0) == 2 | (i25 | 0) == 4)) {
      i37 = 87;
      break;
     }
     i40 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i18) | 0;
    } else {
     i37 = 87;
    }
   } while (0);
   if ((i37 | 0) == 87) {
    i40 = HEAP32[i33 >> 2] | 0;
   }
   do {
    if ((i15 | 0) != 0 & (i15 | 0) == (i7 | 0)) {
     i8 = i15 + 12 | 0;
     if ((HEAP32[i8 >> 2] & 1 | 0) == 0) {
      break;
     }
     i29 = HEAP32[i26 >> 2] | 0;
     if ((i29 | 0) == 0) {
      i41 = 0;
     } else {
      i41 = HEAP32[i29 + 4 >> 2] | 0;
     }
     if ((i41 + i38 | 0) != (i40 | 0)) {
      break;
     }
     i29 = i15 + 8 | 0;
     HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
     i29 = HEAP32[i36 >> 2] | 0;
     HEAP32[i36 >> 2] = i15;
     do {
      if ((i29 | 0) != 0) {
       i25 = i29 + 8 | 0;
       i9 = i25 | 0;
       i13 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
       HEAP32[i9 >> 2] = i13;
       if ((i13 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
      }
     } while (0);
     HEAP32[i1 + 12 >> 2] = i38;
     HEAP32[i1 + 16 >> 2] = i40;
     __ZN3WTF6VectorIN7WebCore20CompositionUnderlineELj0ENS_15CrashOnOverflowEEaSERKS4_(i14, i3) | 0;
     i29 = i1 + 28 | 0;
     i25 = HEAP32[i29 >> 2] | 0;
     L139 : do {
      if ((i25 | 0) != 0) {
       i13 = i14 | 0;
       i9 = 0;
       i12 = i25;
       while (1) {
        if (i12 >>> 0 <= i9 >>> 0) {
         i37 = 101;
         break;
        }
        i10 = (HEAP32[i13 >> 2] | 0) + (i9 * 20 & -1) | 0;
        HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + i38;
        if ((HEAP32[i29 >> 2] | 0) >>> 0 <= i9 >>> 0) {
         i37 = 103;
         break;
        }
        i10 = (HEAP32[i13 >> 2] | 0) + (i9 * 20 & -1) + 4 | 0;
        HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + i38;
        i10 = i9 + 1 | 0;
        if (i10 >>> 0 >= i25 >>> 0) {
         break L139;
        }
        i9 = i10;
        i12 = HEAP32[i29 >> 2] | 0;
       }
       if ((i37 | 0) == 101) {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       } else if ((i37 | 0) == 103) {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
      }
     } while (0);
     i29 = (HEAP32[i8 >> 2] & 2048 | 0) == 0;
     i25 = i15 + 32 | 0;
     if (i29) {
      i42 = i25 | 0;
     } else {
      i42 = HEAP32[i25 >> 2] | 0;
     }
     if ((HEAP32[i42 >> 2] | 0) != 0) {
      if (i29) {
       i43 = i25 | 0;
      } else {
       i43 = HEAP32[i25 >> 2] | 0;
      }
      __ZNK7WebCore12RenderObject7repaintEb(HEAP32[i43 >> 2] | 0, 0);
     }
     i25 = i38 + i4 | 0;
     i29 = i40 >>> 0 < i25 >>> 0 ? i40 : i25;
     i25 = i38 + i5 | 0;
     i12 = i29 >>> 0 < i25 >>> 0 ? i25 : i29;
     i25 = HEAP32[(HEAP32[i15 + 20 >> 2] | 0) + 8 >> 2] | 0;
     i9 = i20 | 0;
     HEAP32[i9 >> 2] = i15;
     i13 = i15 + 8 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
     i10 = i21 | 0;
     HEAP32[i10 >> 2] = i15;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
     __ZN7WebCore5Range6createERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i(i19, i25, i20, i29, i21, i40 >>> 0 < i12 >>> 0 ? i40 : i12);
     i12 = i19 | 0;
     i29 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = 0;
     i12 = HEAP32[i10 >> 2] | 0;
     do {
      if ((i12 | 0) != 0) {
       i10 = i12 + 8 | 0;
       i25 = i10 | 0;
       i13 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
       HEAP32[i25 >> 2] = i13;
       if ((i13 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
      }
     } while (0);
     i12 = HEAP32[i9 >> 2] | 0;
     do {
      if ((i12 | 0) != 0) {
       i8 = i12 + 8 | 0;
       i10 = i8 | 0;
       i13 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
       HEAP32[i10 >> 2] = i13;
       if ((i13 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore14FrameSelection16setSelectedRangeEPNS_5RangeENS_9EAffinityEb(HEAP32[(HEAP32[i22 >> 2] | 0) + 468 >> 2] | 0, i29, 1, 0) | 0;
     if ((i29 | 0) == 0) {
      break;
     }
     i12 = i29 | 0;
     i9 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i29);
      __ZN3WTF8fastFreeEPv(i29);
      break;
     } else {
      HEAP32[i12 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i15 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i7 = i15 + 8 | 0;
     i33 = i7 | 0;
     i9 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
     HEAP32[i33 >> 2] = i9;
     if ((i9 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
    }
   } while (0);
   i15 = HEAP32[i35 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i27 = i15 + 8 | 0;
   i15 = i27 | 0;
   i7 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
  }
 } while (0);
 if ((HEAP8[i23] & 1) == 0) {
  __ZN7WebCore26UserTypingGestureIndicatorD1Ev(i11);
  STACKTOP = i6;
  return;
 }
 HEAP8[i23] = 0;
 __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(HEAP32[(HEAP32[i22 >> 2] | 0) + 468 >> 2] | 0, __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE, 0);
 __ZN7WebCore26UserTypingGestureIndicatorD1Ev(i11);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore6Editor25respondToChangedSelectionERKNS_16VisibleSelectionEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 592 | 0;
 i5 = i4 | 0;
 i6 = i4 + 64 | 0;
 i7 = i4 + 128 | 0;
 i8 = i4 + 144 | 0;
 i9 = i4 + 208 | 0;
 i10 = i4 + 224 | 0;
 i11 = i4 + 240 | 0;
 i12 = i4 + 304 | 0;
 i13 = i4 + 320 | 0;
 i14 = i4 + 336 | 0;
 i15 = i4 + 352 | 0;
 i16 = i4 + 416 | 0;
 i17 = i4 + 432 | 0;
 i18 = i4 + 448 | 0;
 i19 = i4 + 512 | 0;
 i20 = i4 + 528 | 0;
 i21 = i4 + 544 | 0;
 i22 = i4 + 552 | 0;
 i23 = i4 + 560 | 0;
 i24 = i4 + 568 | 0;
 i25 = i4 + 576 | 0;
 i26 = i4 + 584 | 0;
 i27 = i1 | 0;
 i28 = HEAP32[i27 >> 2] | 0;
 i29 = HEAP32[i28 + 32 >> 2] | 0;
 do {
  if ((i29 | 0) == 0) {
   i30 = HEAP32[(HEAP32[i28 + 456 >> 2] | 0) + 1124 >> 2] | 0;
   HEAP32[i25 >> 2] = 1;
   __ZN7WebCore24DocumentMarkerController13removeMarkersENS_14DocumentMarker11MarkerTypesE(i30, i25);
   i31 = 89;
  } else {
   i30 = HEAP32[i29 + 72 >> 2] | 0;
   if ((i30 | 0) == 0) {
    i32 = HEAP32[(HEAP32[i28 + 456 >> 2] | 0) + 1124 >> 2] | 0;
    HEAP32[i25 >> 2] = 1;
    __ZN7WebCore24DocumentMarkerController13removeMarkersENS_14DocumentMarker11MarkerTypesE(i32, i25);
    i31 = 89;
    break;
   }
   i32 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 24 >> 2] & 1](i30) | 0;
   i30 = HEAP32[i27 >> 2] | 0;
   if (!i32) {
    i32 = HEAP32[(HEAP32[i30 + 456 >> 2] | 0) + 1124 >> 2] | 0;
    HEAP32[i25 >> 2] = 1;
    __ZN7WebCore24DocumentMarkerController13removeMarkersENS_14DocumentMarker11MarkerTypesE(i32, i25);
    i31 = 89;
    break;
   }
   i32 = HEAP32[i30 + 32 >> 2] | 0;
   do {
    if ((i32 | 0) == 0) {
     i33 = 0;
    } else {
     i30 = HEAP32[i32 + 72 >> 2] | 0;
     if ((i30 | 0) == 0) {
      i33 = 0;
      break;
     }
     i33 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 32 >> 2] & 1](i30) | 0;
    }
   } while (0);
   __ZN7WebCore16VisibleSelectionC1Ev(i5);
   __ZN7WebCore16VisibleSelectionC1Ev(i6);
   i32 = HEAP32[i27 >> 2] | 0;
   i30 = (HEAP8[(HEAP32[i32 + 36 >> 2] | 0) + 183 | 0] & 4) != 0;
   do {
    if (__ZNK7WebCore16VisibleSelection17isContentEditableEv((HEAP32[i32 + 468 >> 2] | 0) + 32 | 0) | 0 | i30) {
     i34 = HEAP32[(HEAP32[i27 >> 2] | 0) + 468 >> 2] | 0;
     if ((HEAP32[i34 + 84 >> 2] | 0) == 2) {
      i35 = 1;
     } else {
      i35 = HEAP32[i34 + 80 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i7, i34 + 56 | 0, i35);
     __ZN7WebCore11startOfWordERKNS_15VisiblePositionENS_9EWordSideE(i9, i7, 1);
     __ZN7WebCore9endOfWordERKNS_15VisiblePositionENS_9EWordSideE(i10, i7, 0);
     __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b(i8, i9, i10, 0);
     __ZN7WebCore16VisibleSelectionaSEOS0_(i5, i8) | 0;
     __ZN7WebCore16VisibleSelectionD2Ev(i8);
     i34 = HEAP32[i10 >> 2] | 0;
     do {
      if ((i34 | 0) != 0) {
       i36 = i34 + 8 | 0;
       i37 = i36 | 0;
       i38 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
       HEAP32[i37 >> 2] = i38;
       if ((i38 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
      }
     } while (0);
     i34 = HEAP32[i9 >> 2] | 0;
     do {
      if ((i34 | 0) != 0) {
       i36 = i34 + 8 | 0;
       i38 = i36 | 0;
       i37 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
       HEAP32[i38 >> 2] = i37;
       if ((i37 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
      }
     } while (0);
     do {
      if (i33) {
       __ZN7WebCore15startOfSentenceERKNS_15VisiblePositionE(i12, i7);
       __ZN7WebCore13endOfSentenceERKNS_15VisiblePositionE(i13, i7);
       __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b(i11, i12, i13, 0);
       __ZN7WebCore16VisibleSelectionaSEOS0_(i6, i11) | 0;
       __ZN7WebCore16VisibleSelectionD2Ev(i11);
       i34 = HEAP32[i13 >> 2] | 0;
       do {
        if ((i34 | 0) != 0) {
         i36 = i34 + 8 | 0;
         i37 = i36 | 0;
         i38 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
         HEAP32[i37 >> 2] = i38;
         if ((i38 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
        }
       } while (0);
       i34 = HEAP32[i12 >> 2] | 0;
       if ((i34 | 0) == 0) {
        break;
       }
       i36 = i34 + 8 | 0;
       i34 = i36 | 0;
       i38 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
       HEAP32[i34 >> 2] = i38;
       if ((i38 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
      }
     } while (0);
     i36 = HEAP32[i7 >> 2] | 0;
     if ((i36 | 0) == 0) {
      break;
     }
     i38 = i36 + 8 | 0;
     i36 = i38 | 0;
     i34 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
     HEAP32[i36 >> 2] = i34;
     if ((i34 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
    }
   } while (0);
   L43 : do {
    if ((i3 & 10 | 0) == 2) {
     if (!(__ZNK7WebCore16VisibleSelection17isContentEditableEv(i2) | 0)) {
      break;
     }
     i30 = i2 + 24 | 0;
     i32 = HEAP32[i30 >> 2] | 0;
     if ((i32 | 0) == 0) {
      break;
     }
     i38 = i32 + 8 | 0;
     HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
     i38 = HEAP32[i30 >> 2] | 0;
     do {
      if ((i38 | 0) == 0) {
       i39 = (HEAP32[i38 + 12 >> 2] & 256 | 0) != 0;
      } else {
       i30 = i38 + 8 | 0;
       HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
       i30 = (HEAP32[i38 + 12 >> 2] & 256 | 0) != 0;
       i34 = i38 + 8 | 0;
       i36 = i34 | 0;
       i37 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
       HEAP32[i36 >> 2] = i37;
       if ((i37 | 0) >= 1) {
        i39 = i30;
        break;
       }
       if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
        i39 = i30;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
       i39 = i30;
      }
     } while (0);
     i38 = i32 + 8 | 0;
     i30 = i38 - 8 | 0;
     i34 = i38 | 0;
     i37 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
     HEAP32[i34 >> 2] = i37;
     do {
      if ((i37 | 0) < 1) {
       if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
        i31 = 42;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i30);
       if (!i39) {
        break L43;
       }
      } else {
       i31 = 42;
      }
     } while (0);
     if ((i31 | 0) == 42) {
      if (!i39) {
       break;
      }
     }
     if ((HEAP32[i2 + 52 >> 2] | 0) == 2) {
      i40 = 1;
     } else {
      i40 = HEAP32[i2 + 48 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i14, i2 + 24 | 0, i40);
     __ZN7WebCore11startOfWordERKNS_15VisiblePositionENS_9EWordSideE(i16, i14, 1);
     __ZN7WebCore9endOfWordERKNS_15VisiblePositionENS_9EWordSideE(i17, i14, 0);
     __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b(i15, i16, i17, 0);
     i30 = HEAP32[i17 >> 2] | 0;
     do {
      if ((i30 | 0) != 0) {
       i38 = i30 + 8 | 0;
       i37 = i38 | 0;
       i32 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
       HEAP32[i37 >> 2] = i32;
       if ((i32 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
      }
     } while (0);
     i30 = HEAP32[i16 >> 2] | 0;
     do {
      if ((i30 | 0) != 0) {
       i38 = i30 + 8 | 0;
       i32 = i38 | 0;
       i37 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
       HEAP32[i32 >> 2] = i37;
       if ((i37 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
      }
     } while (0);
     do {
      if (!(__ZN7WebCoreeqERKNS_16VisibleSelectionES2_(i15, i5) | 0)) {
       if (!i33) {
        __ZN7WebCore6Editor29markMisspellingsAndBadGrammarERKNS_16VisibleSelectionEbS3_(i1, i15, 0, i15);
        break;
       }
       __ZN7WebCore15startOfSentenceERKNS_15VisiblePositionE(i19, i14);
       __ZN7WebCore13endOfSentenceERKNS_15VisiblePositionE(i20, i14);
       __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b(i18, i19, i20, 0);
       i30 = HEAP32[i20 >> 2] | 0;
       do {
        if ((i30 | 0) != 0) {
         i38 = i30 + 8 | 0;
         i37 = i38 | 0;
         i32 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
         HEAP32[i37 >> 2] = i32;
         if ((i32 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
        }
       } while (0);
       i30 = HEAP32[i19 >> 2] | 0;
       do {
        if ((i30 | 0) != 0) {
         i38 = i30 + 8 | 0;
         i32 = i38 | 0;
         i37 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
         HEAP32[i32 >> 2] = i37;
         if ((i37 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
        }
       } while (0);
       __ZN7WebCore6Editor29markMisspellingsAndBadGrammarERKNS_16VisibleSelectionEbS3_(i1, i15, (__ZN7WebCoreeqERKNS_16VisibleSelectionES2_(i18, i6) | 0) ^ 1, i18);
       __ZN7WebCore16VisibleSelectionD2Ev(i18);
      }
     } while (0);
     __ZN7WebCore16VisibleSelectionD2Ev(i15);
     i30 = HEAP32[i14 >> 2] | 0;
     if ((i30 | 0) == 0) {
      break;
     }
     i38 = i30 + 8 | 0;
     i30 = i38 | 0;
     i37 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     HEAP32[i30 >> 2] = i37;
     if ((i37 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
    }
   } while (0);
   i38 = HEAP32[(HEAP32[i27 >> 2] | 0) + 32 >> 2] | 0;
   do {
    if ((i38 | 0) == 0) {
     i31 = 73;
    } else {
     i37 = HEAP32[i38 + 72 >> 2] | 0;
     if ((i37 | 0) == 0) {
      i31 = 73;
      break;
     }
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i37 >> 2] | 0) + 168 >> 2] & 1](i37) | 0) == 0) {
      i31 = 73;
      break;
     }
     i37 = HEAP32[(HEAP32[(HEAP32[i27 >> 2] | 0) + 32 >> 2] | 0) + 72 >> 2] | 0;
     i30 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i37 >> 2] | 0) + 168 >> 2] & 1](i37) | 0;
     if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i30 >> 2] | 0) + 8 >> 2] & 1](i30, 2) | 0) {
      i31 = 73;
     }
    }
   } while (0);
   do {
    if ((i31 | 0) == 73) {
     __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i21, i5);
     i38 = i21 | 0;
     i30 = HEAP32[i38 >> 2] | 0;
     HEAP32[i38 >> 2] = 0;
     if ((i30 | 0) == 0) {
      break;
     }
     i38 = HEAP32[(HEAP32[(HEAP32[i27 >> 2] | 0) + 456 >> 2] | 0) + 1124 >> 2] | 0;
     HEAP32[i22 >> 2] = 1;
     __ZN7WebCore24DocumentMarkerController13removeMarkersEPNS_5RangeENS_14DocumentMarker11MarkerTypesENS0_37RemovePartiallyOverlappingMarkerOrNotE(i38, i30, i22, 0);
     i38 = i30 | 0;
     i37 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
     if ((i37 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i30);
      __ZN3WTF8fastFreeEPv(i30);
      break;
     } else {
      HEAP32[i38 >> 2] = i37;
      break;
     }
    }
   } while (0);
   i37 = HEAP32[(HEAP32[i27 >> 2] | 0) + 32 >> 2] | 0;
   do {
    if ((i37 | 0) == 0) {
     i31 = 81;
    } else {
     i38 = HEAP32[i37 + 72 >> 2] | 0;
     if ((i38 | 0) == 0) {
      i31 = 81;
      break;
     }
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i38 >> 2] | 0) + 168 >> 2] & 1](i38) | 0) == 0) {
      i31 = 81;
      break;
     }
     i38 = HEAP32[(HEAP32[(HEAP32[i27 >> 2] | 0) + 32 >> 2] | 0) + 72 >> 2] | 0;
     i30 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i38 >> 2] | 0) + 168 >> 2] & 1](i38) | 0;
     if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i30 >> 2] | 0) + 8 >> 2] & 1](i30, 4) | 0) {
      i31 = 81;
     }
    }
   } while (0);
   do {
    if ((i31 | 0) == 81) {
     __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i23, i6);
     i37 = i23 | 0;
     i30 = HEAP32[i37 >> 2] | 0;
     HEAP32[i37 >> 2] = 0;
     if ((i30 | 0) == 0) {
      break;
     }
     i37 = HEAP32[(HEAP32[(HEAP32[i27 >> 2] | 0) + 456 >> 2] | 0) + 1124 >> 2] | 0;
     HEAP32[i24 >> 2] = 2;
     __ZN7WebCore24DocumentMarkerController13removeMarkersEPNS_5RangeENS_14DocumentMarker11MarkerTypesENS0_37RemovePartiallyOverlappingMarkerOrNotE(i37, i30, i24, 0);
     i37 = i30 | 0;
     i38 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
     if ((i38 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i30);
      __ZN3WTF8fastFreeEPv(i30);
      break;
     } else {
      HEAP32[i37 >> 2] = i38;
      break;
     }
    }
   } while (0);
   __ZN7WebCore16VisibleSelectionD2Ev(i6);
   __ZN7WebCore16VisibleSelectionD2Ev(i5);
   if (!i33) {
    i31 = 89;
   }
  }
 } while (0);
 if ((i31 | 0) == 89) {
  i31 = HEAP32[(HEAP32[(HEAP32[i27 >> 2] | 0) + 456 >> 2] | 0) + 1124 >> 2] | 0;
  HEAP32[i26 >> 2] = 2;
  __ZN7WebCore24DocumentMarkerController13removeMarkersENS_14DocumentMarker11MarkerTypesE(i31, i26);
 }
 i26 = HEAP32[i27 >> 2] | 0;
 i27 = HEAP32[i26 + 32 >> 2] | 0;
 if ((i27 | 0) == 0) {
  i41 = i1 + 33 | 0;
  HEAP8[i41] = 1;
  STACKTOP = i4;
  return;
 }
 i31 = HEAP32[i27 + 72 >> 2] | 0;
 if ((i31 | 0) == 0) {
  i41 = i1 + 33 | 0;
  HEAP8[i41] = 1;
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i31 >> 2] | 0) + 80 >> 2] & 3](i31, i26);
 i41 = i1 + 33 | 0;
 HEAP8[i41] = 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore6Editor33markMisspellingsAfterTypingToWordERKNS_15VisiblePositionERKNS_16VisibleSelectionEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 544 | 0;
 i3 = i4 | 0;
 i5 = i4 + 8 | 0;
 i6 = i4 + 72 | 0;
 i7 = i4 + 88 | 0;
 i8 = i4 + 104 | 0;
 i9 = i4 + 168 | 0;
 i10 = i4 + 184 | 0;
 i11 = i4 + 200 | 0;
 i12 = i4 + 208 | 0;
 i13 = i4 + 216 | 0;
 i14 = i4 + 224 | 0;
 i15 = i4 + 232 | 0;
 i16 = i4 + 240 | 0;
 i17 = i4 + 304 | 0;
 i18 = i4 + 320 | 0;
 i19 = i4 + 336 | 0;
 i20 = i4 + 344 | 0;
 i21 = i4 + 352 | 0;
 i22 = i4 + 416 | 0;
 i23 = i4 + 432 | 0;
 i24 = i4 + 448 | 0;
 i25 = i4 + 512 | 0;
 i26 = i4 + 528 | 0;
 i27 = i1 | 0;
 i28 = __ZN7WebCore25unifiedTextCheckerEnabledEPKNS_5FrameE(HEAP32[i27 >> 2] | 0) | 0;
 i29 = HEAP32[(HEAP32[i27 >> 2] | 0) + 32 >> 2] | 0;
 i30 = (i29 | 0) == 0;
 if (i28) {
  if (i30) {
   STACKTOP = i4;
   return;
  }
  i28 = HEAP32[i29 + 72 >> 2] | 0;
  if ((i28 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i31 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 24 >> 2] & 1](i28) | 0;
  i28 = i31 ? 2 : 0;
  if (!i31) {
   STACKTOP = i4;
   return;
  }
  i31 = HEAP32[(HEAP32[i27 >> 2] | 0) + 32 >> 2] | 0;
  do {
   if ((i31 | 0) == 0) {
    i32 = 0;
   } else {
    i33 = HEAP32[i31 + 72 >> 2] | 0;
    if ((i33 | 0) == 0) {
     i32 = 0;
     break;
    }
    i32 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i33 >> 2] | 0) + 32 >> 2] & 1](i33) | 0;
   }
  } while (0);
  i31 = i32 ? i28 | 4 : i28;
  __ZN7WebCore11startOfWordERKNS_15VisiblePositionENS_9EWordSideE(i6, i2, 1);
  __ZN7WebCore9endOfWordERKNS_15VisiblePositionENS_9EWordSideE(i7, i2, 0);
  __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b(i5, i6, i7, 0);
  i28 = HEAP32[i7 >> 2] | 0;
  do {
   if ((i28 | 0) != 0) {
    i7 = i28 + 8 | 0;
    i32 = i7 | 0;
    i33 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
    HEAP32[i32 >> 2] = i33;
    if ((i33 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
   }
  } while (0);
  i28 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i28 | 0) != 0) {
    i6 = i28 + 8 | 0;
    i7 = i6 | 0;
    i33 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    HEAP32[i7 >> 2] = i33;
    if ((i33 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
   }
  } while (0);
  do {
   if ((i31 & 4 | 0) == 0) {
    __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i13, i5);
    i28 = i13 | 0;
    i6 = HEAP32[i28 >> 2] | 0;
    __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i14, i5);
    i33 = i14 | 0;
    __ZN7WebCore6Editor40markAllMisspellingsAndBadGrammarInRangesEjPNS_5RangeES2_(i1, i31, i6, HEAP32[i33 >> 2] | 0);
    i6 = HEAP32[i33 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i33 = i6 | 0;
      i7 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
      if ((i7 | 0) == 0) {
       __ZN7WebCore5RangeD1Ev(i6);
       __ZN3WTF8fastFreeEPv(i6);
       break;
      } else {
       HEAP32[i33 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i6 = HEAP32[i28 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    i7 = i6 | 0;
    i33 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    if ((i33 | 0) == 0) {
     __ZN7WebCore5RangeD1Ev(i6);
     __ZN3WTF8fastFreeEPv(i6);
     break;
    } else {
     HEAP32[i7 >> 2] = i33;
     break;
    }
   } else {
    __ZN7WebCore15startOfSentenceERKNS_15VisiblePositionE(i9, i2);
    __ZN7WebCore13endOfSentenceERKNS_15VisiblePositionE(i10, i2);
    __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b(i8, i9, i10, 0);
    i33 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i33 | 0) != 0) {
      i7 = i33 + 8 | 0;
      i6 = i7 | 0;
      i32 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      HEAP32[i6 >> 2] = i32;
      if ((i32 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
     }
    } while (0);
    i33 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i33 | 0) != 0) {
      i28 = i33 + 8 | 0;
      i7 = i28 | 0;
      i32 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      HEAP32[i7 >> 2] = i32;
      if ((i32 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
     }
    } while (0);
    __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i11, i5);
    i33 = i11 | 0;
    i28 = HEAP32[i33 >> 2] | 0;
    __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i12, i8);
    i32 = i12 | 0;
    __ZN7WebCore6Editor40markAllMisspellingsAndBadGrammarInRangesEjPNS_5RangeES2_(i1, i31, i28, HEAP32[i32 >> 2] | 0);
    i28 = HEAP32[i32 >> 2] | 0;
    do {
     if ((i28 | 0) != 0) {
      i32 = i28 | 0;
      i7 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
      if ((i7 | 0) == 0) {
       __ZN7WebCore5RangeD1Ev(i28);
       __ZN3WTF8fastFreeEPv(i28);
       break;
      } else {
       HEAP32[i32 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i28 = HEAP32[i33 >> 2] | 0;
    do {
     if ((i28 | 0) != 0) {
      i7 = i28 | 0;
      i32 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      if ((i32 | 0) == 0) {
       __ZN7WebCore5RangeD1Ev(i28);
       __ZN3WTF8fastFreeEPv(i28);
       break;
      } else {
       HEAP32[i7 >> 2] = i32;
       break;
      }
     }
    } while (0);
    __ZN7WebCore16VisibleSelectionD2Ev(i8);
   }
  } while (0);
  __ZN7WebCore16VisibleSelectionD2Ev(i5);
  STACKTOP = i4;
  return;
 }
 if (i30) {
  STACKTOP = i4;
  return;
 }
 i30 = HEAP32[i29 + 72 >> 2] | 0;
 if ((i30 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 24 >> 2] & 1](i30) | 0)) {
  STACKTOP = i4;
  return;
 }
 i30 = i15 | 0;
 HEAP32[i30 >> 2] = 0;
 __ZN7WebCore11startOfWordERKNS_15VisiblePositionENS_9EWordSideE(i17, i2, 1);
 __ZN7WebCore9endOfWordERKNS_15VisiblePositionENS_9EWordSideE(i18, i2, 0);
 __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b(i16, i17, i18, 0);
 __ZN7WebCore6Editor28markMisspellingsOrBadGrammarERKNS_16VisibleSelectionEbRN3WTF6RefPtrINS_5RangeEEE(i1, i16, 1, i15);
 __ZN7WebCore16VisibleSelectionD2Ev(i16);
 i16 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i18 = i16 + 8 | 0;
   i15 = i18 | 0;
   i29 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i29;
   if ((i29 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
  }
 } while (0);
 i16 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i17 = i16 + 8 | 0;
   i18 = i17 | 0;
   i29 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i29;
   if ((i29 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
  }
 } while (0);
 i16 = HEAP32[i30 >> 2] | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore9plainTextEPKNS_5RangeENS_20TextIteratorBehaviorEb(i19, i16, 0, 0);
 i16 = HEAP32[(HEAP32[(HEAP32[i27 >> 2] | 0) + 32 >> 2] | 0) + 72 >> 2] | 0;
 i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 168 >> 2] & 1](i16) | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i17 >> 2] | 0) + 24 >> 2] & 1](i20, i17, i19);
 i17 = i20 | 0;
 i16 = HEAP32[i17 >> 2] | 0;
 L86 : do {
  if ((i16 | 0) == 0) {
   i34 = 75;
  } else {
   if ((HEAP32[i16 + 4 >> 2] | 0) == 0) {
    i34 = 75;
    break;
   }
   __ZN7WebCore16VisibleSelectionC1EPKNS_5RangeENS_9EAffinityEb(i21, HEAP32[i30 >> 2] | 0, 1, 0);
   do {
    if (__ZN7WebCoreeqERKNS_16VisibleSelectionES2_(i21, (HEAP32[(HEAP32[i27 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0) {
     i34 = 60;
    } else {
     if (!(__ZNK7WebCore14FrameSelection21shouldChangeSelectionERKNS_16VisibleSelectionE(HEAP32[(HEAP32[i27 >> 2] | 0) + 468 >> 2] | 0, i21) | 0)) {
      break;
     }
     __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(HEAP32[(HEAP32[i27 >> 2] | 0) + 468 >> 2] | 0, i21, 6, 0, 0);
     i34 = 60;
    }
   } while (0);
   do {
    if ((i34 | 0) == 60) {
     i29 = HEAP32[(HEAP32[HEAP32[(HEAP32[i27 >> 2] | 0) + 464 >> 2] >> 2] | 0) + 32 >> 2] | 0;
     if ((i29 | 0) == 0) {
      break;
     }
     i18 = HEAP32[i29 + 72 >> 2] | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     if (!(FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i18 >> 2] | 0) + 56 >> 2] & 1](i18, i20, HEAP32[i30 >> 2] | 0, 0) | 0)) {
      break;
     }
     __ZN7WebCore6Editor24replaceSelectionWithTextERKN3WTF6StringEbb(HEAP32[(HEAP32[i27 >> 2] | 0) + 464 >> 2] | 0, i20, 0, 0);
     i18 = HEAP32[(HEAP32[i27 >> 2] | 0) + 468 >> 2] | 0;
     i29 = i23 | 0;
     i15 = HEAP32[i18 + 68 >> 2] | 0;
     HEAP32[i29 >> 2] = i15;
     if ((i15 | 0) != 0) {
      i5 = i15 + 8 | 0;
      HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
     }
     HEAP32[i23 + 4 >> 2] = HEAP32[i18 + 72 >> 2];
     i5 = HEAP32[i18 + 76 >> 2] | 0;
     i15 = i23 + 8 | 0;
     i8 = i15;
     i31 = HEAP32[i8 >> 2] & -8 | i5 & 7;
     HEAP32[i8 >> 2] = i31;
     HEAP8[i15] = i31 & 255 & -9 | i5 & 8;
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i22, i23, 1);
     __ZN7WebCore14FrameSelection6moveToERKNS_15VisiblePositionENS_14EUserTriggeredENS0_19CursorAlignOnScrollE(i18, i22, 0, 0);
     i18 = HEAP32[i22 >> 2] | 0;
     do {
      if ((i18 | 0) != 0) {
       i5 = i18 + 8 | 0;
       i31 = i5 | 0;
       i15 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
       HEAP32[i31 >> 2] = i15;
       if ((i15 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
      }
     } while (0);
     i18 = HEAP32[i29 >> 2] | 0;
     do {
      if ((i18 | 0) != 0) {
       i5 = i18 + 8 | 0;
       i15 = i5 | 0;
       i31 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
       HEAP32[i15 >> 2] = i31;
       if ((i31 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore14FrameSelection6modifyENS0_11EAlterationENS_18SelectionDirectionENS_15TextGranularityENS_14EUserTriggeredE(HEAP32[(HEAP32[i27 >> 2] | 0) + 468 >> 2] | 0, 0, 0, 0, 0) | 0;
     __ZN7WebCore16VisibleSelectionD2Ev(i21);
     i34 = 75;
     break L86;
    }
   } while (0);
   __ZN7WebCore16VisibleSelectionD2Ev(i21);
  }
 } while (0);
 do {
  if ((i34 | 0) == 75) {
   i21 = HEAP32[(HEAP32[i27 >> 2] | 0) + 32 >> 2] | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   i22 = HEAP32[i21 + 72 >> 2] | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 32 >> 2] & 1](i22) | 0)) {
    break;
   }
   __ZN7WebCore15startOfSentenceERKNS_15VisiblePositionE(i25, i2);
   __ZN7WebCore13endOfSentenceERKNS_15VisiblePositionE(i26, i2);
   __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b(i24, i25, i26, 0);
   i22 = i3 | 0;
   HEAP32[i22 >> 2] = 0;
   __ZN7WebCore6Editor28markMisspellingsOrBadGrammarERKNS_16VisibleSelectionEbRN3WTF6RefPtrINS_5RangeEEE(i1, i24, 0, i3);
   i21 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i22 = i21 | 0;
     i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i21);
      __ZN3WTF8fastFreeEPv(i21);
      break;
     } else {
      HEAP32[i22 >> 2] = i23;
      break;
     }
    }
   } while (0);
   __ZN7WebCore16VisibleSelectionD2Ev(i24);
   i21 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i23 = i21 + 8 | 0;
     i22 = i23 | 0;
     i20 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
     HEAP32[i22 >> 2] = i20;
     if ((i20 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
    }
   } while (0);
   i21 = HEAP32[i25 >> 2] | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   i23 = i21 + 8 | 0;
   i21 = i23 | 0;
   i20 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   HEAP32[i21 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
  }
 } while (0);
 i25 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i25 | 0) != 0) {
   i17 = i25 | 0;
   i26 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i25);
    break;
   } else {
    HEAP32[i17 >> 2] = i26;
    break;
   }
  }
 } while (0);
 i25 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i25 | 0) != 0) {
   i19 = i25 | 0;
   i26 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i25);
    break;
   } else {
    HEAP32[i19 >> 2] = i26;
    break;
   }
  }
 } while (0);
 i25 = HEAP32[i30 >> 2] | 0;
 if ((i25 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i30 = i25 | 0;
 i26 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
 if ((i26 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i25);
  __ZN3WTF8fastFreeEPv(i25);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i30 >> 2] = i26;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore6Editor40markAllMisspellingsAndBadGrammarInRangesEjPNS_5RangeES2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i6 = i5 | 0;
 i7 = i5 + 32 | 0;
 i8 = i5 + 40 | 0;
 i9 = i5 + 48 | 0;
 i10 = i5 + 56 | 0;
 i11 = i5 + 64 | 0;
 i12 = i5 + 72 | 0;
 i13 = i5 + 80 | 0;
 i14 = i5 + 96 | 0;
 i15 = i2 & 4;
 i16 = (i15 | 0) != 0;
 i17 = i2 & 1024;
 i18 = i1 | 0;
 i19 = HEAP32[(HEAP32[i18 >> 2] | 0) + 32 >> 2] | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i19 + 72 >> 2] | 0) == 0 | (i3 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if (i16 & (i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i19 = HEAP32[i3 + 8 >> 2] | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i19, 0, 1) | 0)) {
  STACKTOP = i5;
  return;
 }
 do {
  if ((HEAP32[i19 + 12 >> 2] & 4 | 0) == 0) {
   i20 = HEAP32[i19 + 16 >> 2] | 0;
   if ((i20 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   if ((HEAP32[i20 + 12 >> 2] & 4 | 0) == 0) {
    STACKTOP = i5;
    return;
   } else {
    i21 = i20;
    break;
   }
  } else {
   i21 = i19;
  }
 } while (0);
 if ((i21 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 504 >> 2] & 1](i21) | 0)) {
  STACKTOP = i5;
  return;
 }
 i21 = i16 ? i4 : i3;
 i3 = i7 | 0;
 HEAP32[i3 >> 2] = i21;
 i4 = (i21 | 0) == 0;
 if (!i4) {
  i16 = i21 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 }
 __ZN7WebCore21TextCheckingParagraphC1EN3WTF10PassRefPtrINS_5RangeEEE(i6, i7);
 i7 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i3 = i7 | 0;
   i16 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i3 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i7 = __ZNK7WebCore21TextCheckingParagraph13checkingStartEv(i6) | 0;
 do {
  if ((i7 | 0) < (__ZNK7WebCore21TextCheckingParagraph11checkingEndEv(i6) | 0)) {
   if (__ZNK7WebCore21TextCheckingParagraph7isEmptyEv(i6) | 0) {
    break;
   }
   __ZNK7WebCore21TextCheckingParagraph14paragraphRangeEv(i8, i6);
   i16 = i8 | 0;
   i3 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   i16 = (HEAP8[(HEAP32[(HEAP32[i18 >> 2] | 0) + 36 >> 2] | 0) + 182 | 0] & 8) != 0 & (i17 | 0) == 0;
   i19 = i2 & 2;
   i20 = (i17 | 0) != 0;
   if (i20) {
    i22 = 1;
   } else {
    i22 = (i2 & 512 | 0) != 0;
   }
   i23 = (i15 | 0) == 0 ? i19 : i19 | 4;
   i19 = i23 | 512;
   i24 = i22 ? i19 : i23;
   i25 = i20 ? i24 | 1024 : i24;
   do {
    if (i16) {
     if ((i3 | 0) == 0) {
      i26 = 0;
      i27 = 1;
      i28 = 28;
      break;
     }
     i24 = i3 | 0;
     HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
     i29 = 0;
     i30 = 1;
     i31 = i3;
     i28 = 29;
    } else {
     if (i4) {
      i26 = 1;
      i27 = 0;
      i28 = 28;
      break;
     }
     i24 = i21 | 0;
     HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
     i29 = 1;
     i30 = 0;
     i31 = i21;
     i28 = 29;
    }
   } while (0);
   if ((i28 | 0) == 28) {
    i24 = i10 | 0;
    HEAP32[i24 >> 2] = 0;
    i32 = 0;
    i33 = i27;
    i34 = i26;
    i35 = i24;
    i36 = 1;
   } else if ((i28 | 0) == 29) {
    i24 = i10 | 0;
    HEAP32[i24 >> 2] = i31;
    i37 = i31 | 0;
    HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
    i32 = i31;
    i33 = i30;
    i34 = i29;
    i35 = i24;
    i36 = (i31 | 0) == 0;
   }
   i24 = i11 | 0;
   HEAP32[i24 >> 2] = i3;
   i37 = (i3 | 0) == 0;
   if (!i37) {
    i38 = i3 | 0;
    HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
   }
   __ZN7WebCore17SpellCheckRequest6createEjNS_23TextCheckingProcessTypeEN3WTF10PassRefPtrINS_5RangeEEES5_(i9, i25, 1, i10, i11);
   i38 = i9 | 0;
   i39 = HEAP32[i38 >> 2] | 0;
   HEAP32[i38 >> 2] = 0;
   i38 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i38 | 0) != 0) {
     i24 = i38 | 0;
     i40 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     if ((i40 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i38);
      __ZN3WTF8fastFreeEPv(i38);
      break;
     } else {
      HEAP32[i24 >> 2] = i40;
      break;
     }
    }
   } while (0);
   i38 = HEAP32[i35 >> 2] | 0;
   do {
    if ((i38 | 0) != 0) {
     i25 = i38 | 0;
     i40 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     if ((i40 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i38);
      __ZN3WTF8fastFreeEPv(i38);
      break;
     } else {
      HEAP32[i25 >> 2] = i40;
      break;
     }
    }
   } while (0);
   do {
    if (!(i36 | i34 ^ 1)) {
     i38 = i32 | 0;
     i40 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
     if ((i40 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i32);
      __ZN3WTF8fastFreeEPv(i32);
      break;
     } else {
      HEAP32[i38 >> 2] = i40;
      break;
     }
    }
   } while (0);
   do {
    if (!(i36 | i33 ^ 1)) {
     i40 = i32 | 0;
     i38 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
     if ((i38 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i32);
      __ZN3WTF8fastFreeEPv(i32);
      break;
     } else {
      HEAP32[i40 >> 2] = i38;
      break;
     }
    }
   } while (0);
   do {
    if (i16) {
     i38 = HEAP32[i1 + 40 >> 2] | 0;
     i40 = i12 | 0;
     HEAP32[i40 >> 2] = i39;
     if ((i39 | 0) != 0) {
      i25 = i39 + 4 | 0;
      HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
     }
     __ZN7WebCore12SpellChecker18requestCheckingForEN3WTF10PassRefPtrINS_17SpellCheckRequestEEE(i38, i12);
     i38 = HEAP32[i40 >> 2] | 0;
     if ((i38 | 0) == 0) {
      break;
     }
     i40 = i38 + 4 | 0;
     i38 = i40 | 0;
     i25 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
     if ((i25 | 0) != 0) {
      HEAP32[i38 >> 2] = i25;
      break;
     }
     i25 = i40 - 4 | 0;
     if ((i25 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 3](i25);
    } else {
     i25 = i13 | 0;
     HEAP32[i25 >> 2] = 0;
     i40 = i13 + 4 | 0;
     HEAP32[i40 >> 2] = 0;
     i38 = i13 + 8 | 0;
     HEAP32[i38 >> 2] = 0;
     i24 = HEAP32[(HEAP32[i18 >> 2] | 0) + 32 >> 2] | 0;
     do {
      if ((i24 | 0) == 0) {
       i41 = 0;
      } else {
       i42 = HEAP32[i24 + 72 >> 2] | 0;
       if ((i42 | 0) == 0) {
        i41 = 0;
        break;
       }
       i41 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i42 >> 2] | 0) + 168 >> 2] & 1](i42) | 0;
      }
     } while (0);
     i24 = HEAP32[(__ZNK7WebCore21TextCheckingParagraph4textEv(i6) | 0) >> 2] | 0;
     do {
      if ((i24 | 0) == 0) {
       i43 = 0;
      } else {
       if ((HEAP32[i24 + 16 >> 2] & 32 | 0) == 0) {
        i43 = HEAP32[i24 + 8 >> 2] | 0;
        break;
       } else {
        i43 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i24) | 0;
        break;
       }
      }
     } while (0);
     i24 = HEAP32[(__ZNK7WebCore21TextCheckingParagraph4textEv(i6) | 0) >> 2] | 0;
     if ((i24 | 0) == 0) {
      i44 = 0;
     } else {
      i44 = HEAP32[i24 + 4 >> 2] | 0;
     }
     if (i20) {
      i45 = i19;
     } else {
      i45 = (i2 & 512 | 0) != 0 ? i19 : i23;
     }
     __ZN7WebCore20checkTextOfParagraphEPNS_17TextCheckerClientEPKtijRN3WTF6VectorINS_18TextCheckingResultELj0ENS4_15CrashOnOverflowEEE(i41, i43, i44, i20 ? i45 | 1024 : i45, i13);
     i24 = i14 | 0;
     HEAP32[i24 >> 2] = i39;
     if ((i39 | 0) != 0) {
      i42 = i39 + 4 | 0;
      HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
     }
     __ZN7WebCore6Editor17markAndReplaceForEN3WTF10PassRefPtrINS_17SpellCheckRequestEEERKNS1_6VectorINS_18TextCheckingResultELj0ENS1_15CrashOnOverflowEEE(i1, i14, i13);
     i42 = HEAP32[i24 >> 2] | 0;
     do {
      if ((i42 | 0) != 0) {
       i24 = i42 + 4 | 0;
       i46 = i24 | 0;
       i47 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
       if ((i47 | 0) != 0) {
        HEAP32[i46 >> 2] = i47;
        break;
       }
       i47 = i24 - 4 | 0;
       if ((i47 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i47 >> 2] | 0) + 4 >> 2] & 3](i47);
      }
     } while (0);
     i42 = HEAP32[i38 >> 2] | 0;
     if ((i42 | 0) != 0) {
      i47 = HEAP32[i25 >> 2] | 0;
      i24 = i47 + (i42 * 28 & -1) | 0;
      i42 = i47;
      while (1) {
       i47 = HEAP32[i42 + 24 >> 2] | 0;
       do {
        if ((i47 | 0) != 0) {
         i46 = i47 | 0;
         i48 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
         if ((i48 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i47);
          break;
         } else {
          HEAP32[i46 >> 2] = i48;
          break;
         }
        }
       } while (0);
       i47 = i42 + 20 | 0;
       i48 = HEAP32[i47 >> 2] | 0;
       i46 = i42 + 12 | 0;
       if ((i48 | 0) != 0) {
        i49 = HEAP32[i46 >> 2] | 0;
        i50 = i49 + (i48 * 24 & -1) | 0;
        i48 = i49;
        while (1) {
         i49 = HEAP32[i48 + 20 >> 2] | 0;
         do {
          if ((i49 | 0) != 0) {
           i51 = i49 | 0;
           i52 = (HEAP32[i51 >> 2] | 0) - 2 | 0;
           if ((i52 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i49);
            break;
           } else {
            HEAP32[i51 >> 2] = i52;
            break;
           }
          }
         } while (0);
         i49 = i48 + 16 | 0;
         i52 = HEAP32[i49 >> 2] | 0;
         i51 = i48 + 8 | 0;
         if ((i52 | 0) != 0) {
          i53 = HEAP32[i51 >> 2] | 0;
          i54 = i53 + (i52 << 2) | 0;
          i52 = i53;
          while (1) {
           i53 = HEAP32[i52 >> 2] | 0;
           do {
            if ((i53 | 0) != 0) {
             i55 = i53 | 0;
             i56 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
             if ((i56 | 0) == 0) {
              __ZN3WTF10StringImpl7destroyEPS0_(i53);
              break;
             } else {
              HEAP32[i55 >> 2] = i56;
              break;
             }
            }
           } while (0);
           i52 = i52 + 4 | 0;
           if ((i52 | 0) == (i54 | 0)) {
            break;
           }
          }
          HEAP32[i49 >> 2] = 0;
         }
         i54 = HEAP32[i51 >> 2] | 0;
         if ((i54 | 0) != 0) {
          HEAP32[i51 >> 2] = 0;
          HEAP32[i48 + 12 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i54);
         }
         i48 = i48 + 24 | 0;
         if ((i48 | 0) == (i50 | 0)) {
          break;
         }
        }
        HEAP32[i47 >> 2] = 0;
       }
       i50 = HEAP32[i46 >> 2] | 0;
       if ((i50 | 0) != 0) {
        HEAP32[i46 >> 2] = 0;
        HEAP32[i42 + 16 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i50);
       }
       i42 = i42 + 28 | 0;
       if ((i42 | 0) == (i24 | 0)) {
        break;
       }
      }
      HEAP32[i38 >> 2] = 0;
     }
     i24 = HEAP32[i25 >> 2] | 0;
     if ((i24 | 0) == 0) {
      break;
     }
     HEAP32[i25 >> 2] = 0;
     HEAP32[i40 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i24);
    }
   } while (0);
   do {
    if ((i39 | 0) != 0) {
     i20 = i39 + 4 | 0;
     i23 = i20 | 0;
     i19 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i23 >> 2] = i19;
      break;
     }
     i19 = i20 - 4 | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 3](i19);
    }
   } while (0);
   if (i37) {
    break;
   }
   i39 = i3 | 0;
   i19 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i39 >> 2] = i19;
    break;
   }
  }
 } while (0);
 __ZN7WebCore21TextCheckingParagraphD1Ev(i6);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore6Editor19countMatchesForTextERKN3WTF6StringEPNS_5RangeEjjbPNS1_6VectorINS1_6RefPtrIS5_EELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 i14 = i8 + 40 | 0;
 i15 = i8 + 48 | 0;
 i16 = i8 + 56 | 0;
 i17 = i8 + 64 | 0;
 i18 = i8 + 72 | 0;
 i19 = i8 + 80 | 0;
 i20 = i8 + 88 | 0;
 i21 = i8 + 96 | 0;
 i22 = i8 + 104 | 0;
 i23 = i8 + 112 | 0;
 i24 = i8 + 120 | 0;
 i25 = i8 + 136 | 0;
 i26 = i25 | 0;
 i27 = i25;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 116 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i30 = HEAP32[i2 >> 2] | 0;
 if ((i30 | 0) == 0) {
  i31 = 0;
  STACKTOP = i8;
  return i31 | 0;
 }
 if ((HEAP32[i30 + 4 >> 2] | 0) == 0) {
  i31 = 0;
  STACKTOP = i8;
  return i31 | 0;
 }
 do {
  if ((i3 | 0) == 0) {
   i32 = i1 | 0;
   i33 = 12;
  } else {
   i30 = i3 + 4 | 0;
   i34 = HEAP32[i30 >> 2] | 0;
   i35 = i1 | 0;
   i36 = HEAP32[i35 >> 2] | 0;
   if ((i34 | 0) == (HEAP32[i36 + 456 >> 2] | 0)) {
    i37 = i3 | 0;
    HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
    i38 = i3;
    break;
   }
   i37 = HEAP32[i36 + 448 >> 2] | 0;
   if ((i37 | 0) == 0) {
    i31 = 0;
    STACKTOP = i8;
    return i31 | 0;
   } else {
    i39 = i37;
    i40 = i34;
   }
   while (1) {
    i34 = HEAP32[(HEAP32[i39 + 20 >> 2] | 0) + 8 >> 2] | 0;
    if ((i34 | 0) == (i40 | 0)) {
     break;
    }
    i37 = __ZNK7WebCore8Document12ownerElementEv(i34) | 0;
    if ((i37 | 0) == 0) {
     i31 = 0;
     i33 = 71;
     break;
    }
    i39 = i37;
    i40 = HEAP32[i30 >> 2] | 0;
   }
   if ((i33 | 0) == 71) {
    STACKTOP = i8;
    return i31 | 0;
   }
   i30 = i9 | 0;
   HEAP32[i30 >> 2] = 0;
   if (__ZN7WebCore5Range14intersectsNodeEPNS_4NodeERi(i3, i39 | 0, i30) | 0) {
    i32 = i35;
    i33 = 12;
    break;
   } else {
    i31 = 0;
   }
   STACKTOP = i8;
   return i31 | 0;
  }
 } while (0);
 if ((i33 | 0) == 12) {
  __ZN7WebCore15rangeOfContentsERNS_4NodeE(i10, HEAP32[(HEAP32[i32 >> 2] | 0) + 456 >> 2] | 0);
  i32 = i10 | 0;
  i10 = HEAP32[i32 >> 2] | 0;
  HEAP32[i32 >> 2] = 0;
  i38 = i10;
 }
 i10 = HEAP32[i38 + 20 >> 2] | 0;
 i32 = i38 + 24 | 0;
 i39 = HEAP32[i32 >> 2] | 0;
 if ((i39 | 0) > -1) {
  i41 = i39;
 } else {
  i39 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i38 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i32 >> 2] = i39;
  i41 = i39;
 }
 i39 = i4 & -9;
 i4 = i11 | 0;
 i32 = i12 | 0;
 i3 = i13 | 0;
 i13 = i14 | 0;
 i14 = i15 | 0;
 i9 = (i10 | 0) == 0;
 i40 = i16 | 0;
 i16 = i10 + 8 | 0;
 i30 = (i7 | 0) == 0;
 i37 = i1 | 0;
 i1 = (i5 | 0) == 0;
 i34 = i18 | 0;
 i18 = i17 | 0;
 i36 = i19 | 0;
 i19 = i20 | 0;
 i20 = i21 | 0;
 i21 = i22 | 0;
 i42 = i23 | 0;
 i23 = i7 + 8 | 0;
 i43 = i7 + 4 | 0;
 i44 = i7 | 0;
 i45 = i11;
 i46 = 0;
 while (1) {
  __ZN7WebCore13findPlainTextEPKNS_5RangeERKN3WTF6StringEj(i12, i38, i2, i39);
  i47 = HEAP32[i32 >> 2] | 0;
  HEAP32[i32 >> 2] = 0;
  HEAP32[i4 >> 2] = i47;
  HEAP32[i3 >> 2] = 0;
  do {
   if (__ZNK7WebCore5Range9collapsedERi(i47, i3) | 0) {
    i48 = HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0;
    if ((HEAP32[i48 + 12 >> 2] & 8388608 | 0) == 0) {
     i49 = 2;
     i50 = i46;
     break;
    }
    i51 = __ZNK7WebCore4Node10shadowHostEv(i48) | 0;
    HEAP32[i13 >> 2] = 0;
    __ZN7WebCore5Range13setStartAfterEPNS_4NodeERi(i38, i51, i13);
    HEAP32[i14 >> 2] = i10;
    if (!i9) {
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
    }
    HEAP32[i40 >> 2] = 0;
    __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i38, i15, i41, i40);
    i51 = HEAP32[i14 >> 2] | 0;
    if ((i51 | 0) == 0) {
     i49 = 3;
     i50 = i46;
     break;
    }
    i48 = i51 + 8 | 0;
    i51 = i48 | 0;
    i52 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
    HEAP32[i51 >> 2] = i52;
    if ((i52 | 0) >= 1) {
     i49 = 3;
     i50 = i46;
     break;
    }
    if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
     i49 = 3;
     i50 = i46;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
    i49 = 3;
    i50 = i46;
   } else {
    i48 = i46 + 1 | 0;
    do {
     if (!i30) {
      i52 = HEAP32[i23 >> 2] | 0;
      if ((i52 | 0) != (HEAP32[i43 >> 2] | 0)) {
       i51 = HEAP32[i4 >> 2] | 0;
       HEAP32[(HEAP32[i44 >> 2] | 0) + (i52 << 2) >> 2] = i51;
       if ((i51 | 0) != 0) {
        i53 = i51 | 0;
        HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
       }
       HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
       break;
      }
      i53 = i52 + 1 | 0;
      i51 = HEAP32[i44 >> 2] | 0;
      do {
       if (i51 >>> 0 > i11 >>> 0) {
        i33 = 31;
       } else {
        if ((i51 + (i52 << 2) | 0) >>> 0 <= i11 >>> 0) {
         i33 = 31;
         break;
        }
        __ZN3WTF6VectorINS_6RefPtrIN7WebCore5RangeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i7, i53);
        i54 = HEAP32[i44 >> 2] | 0;
        i55 = i54 + (i45 - i51 >> 2 << 2) | 0;
        i56 = i54;
       }
      } while (0);
      if ((i33 | 0) == 31) {
       i33 = 0;
       __ZN3WTF6VectorINS_6RefPtrIN7WebCore5RangeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i7, i53);
       i55 = i11;
       i56 = HEAP32[i44 >> 2] | 0;
      }
      i51 = HEAP32[i55 >> 2] | 0;
      HEAP32[i56 + (HEAP32[i23 >> 2] << 2) >> 2] = i51;
      if ((i51 | 0) != 0) {
       i52 = i51 | 0;
       HEAP32[i52 >> 2] = (HEAP32[i52 >> 2] | 0) + 1;
      }
      HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
     }
    } while (0);
    if (i6) {
     __ZN7WebCore24DocumentMarkerController9addMarkerEPNS_5RangeENS_14DocumentMarker10MarkerTypeE(HEAP32[(HEAP32[(HEAP32[i37 >> 2] | 0) + 456 >> 2] | 0) + 1124 >> 2] | 0, HEAP32[i4 >> 2] | 0, 4);
    }
    if (!(i1 | i48 >>> 0 < i5 >>> 0)) {
     i49 = 2;
     i50 = i48;
     break;
    }
    i52 = HEAP32[i4 >> 2] | 0;
    HEAP32[i34 >> 2] = 0;
    i51 = __ZNK7WebCore5Range12endContainerERi(i52, i34) | 0;
    HEAP32[i18 >> 2] = i51;
    if ((i51 | 0) != 0) {
     i52 = i51 + 8 | 0;
     HEAP32[i52 >> 2] = (HEAP32[i52 >> 2] | 0) + 1;
    }
    i52 = HEAP32[i4 >> 2] | 0;
    HEAP32[i36 >> 2] = 0;
    i51 = __ZNK7WebCore5Range9endOffsetERi(i52, i36) | 0;
    HEAP32[i19 >> 2] = 0;
    __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i38, i17, i51, i19);
    i51 = HEAP32[i18 >> 2] | 0;
    do {
     if ((i51 | 0) != 0) {
      i52 = i51 + 8 | 0;
      i54 = i52 | 0;
      i57 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
      HEAP32[i54 >> 2] = i57;
      if ((i57 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
     }
    } while (0);
    i51 = __ZNK7WebCore5Range10shadowRootEv(i38) | 0;
    HEAP32[i20 >> 2] = 0;
    if ((i51 | 0) == 0 | (__ZNK7WebCore5Range9collapsedERi(i38, i20) | 0) ^ 1) {
     i49 = 0;
     i50 = i48;
     break;
    }
    HEAP32[i21 >> 2] = i51;
    i52 = i51 + 8 | 0;
    HEAP32[i52 >> 2] = (HEAP32[i52 >> 2] | 0) + 1;
    if ((HEAP32[i51 + 12 >> 2] & 2 | 0) == 0) {
     i58 = 0;
    } else {
     i58 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i51 | 0) | 0;
    }
    HEAP32[i42 >> 2] = 0;
    __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i38, i22, i58, i42);
    i51 = HEAP32[i21 >> 2] | 0;
    if ((i51 | 0) == 0) {
     i49 = 0;
     i50 = i48;
     break;
    }
    i52 = i51 + 8 | 0;
    i51 = i52 | 0;
    i57 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
    HEAP32[i51 >> 2] = i57;
    if ((i57 | 0) >= 1) {
     i49 = 0;
     i50 = i48;
     break;
    }
    if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
     i49 = 0;
     i50 = i48;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
    i49 = 0;
    i50 = i48;
   }
  } while (0);
  i47 = HEAP32[i4 >> 2] | 0;
  do {
   if ((i47 | 0) != 0) {
    i35 = i47 | 0;
    i52 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
    if ((i52 | 0) == 0) {
     __ZN7WebCore5RangeD1Ev(i47);
     __ZN3WTF8fastFreeEPv(i47);
     break;
    } else {
     HEAP32[i35 >> 2] = i52;
     break;
    }
   }
  } while (0);
  if ((i49 | 0) == 2) {
   break;
  } else {
   i46 = i50;
  }
 }
 do {
  if (!(i30 & (i6 ^ 1))) {
   i46 = HEAP32[i37 >> 2] | 0;
   if ((HEAP32[i46 + 452 >> 2] | 0) == 0) {
    break;
   }
   if ((__ZNK7WebCore5Frame15contentRendererEv(i46) | 0) == 0) {
    break;
   }
   __ZN7WebCore8Document12updateLayoutEv(HEAP32[(HEAP32[i37 >> 2] | 0) + 456 >> 2] | 0);
   __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i27, HEAP32[(HEAP32[i37 >> 2] | 0) + 452 >> 2] | 0, 0);
   i46 = HEAP32[i26 + 4 >> 2] | 0;
   HEAP32[i24 >> 2] = HEAP32[i26 >> 2];
   HEAP32[i24 + 4 >> 2] = i46;
   i46 = i25 + 8 | 0;
   i49 = HEAP32[i46 >> 2] | 0;
   i4 = HEAP32[i46 + 4 >> 2] | 0;
   HEAP32[i24 + 8 >> 2] = i49;
   HEAP32[i24 + 12 >> 2] = i4;
   if ((i49 | 0) < 1 | (i4 | 0) < 1) {
    break;
   }
   __ZN7WebCore15GraphicsContextC1EPNS_20PlatformContextCairoE(i28, 0);
   __ZN7WebCore15GraphicsContext19setPaintingDisabledEb(i28, 1);
   i4 = __ZNK7WebCore9FrameView13paintBehaviorEv(HEAP32[(HEAP32[i37 >> 2] | 0) + 452 >> 2] | 0) | 0;
   __ZN7WebCore9FrameView16setPaintBehaviorEj(HEAP32[(HEAP32[i37 >> 2] | 0) + 452 >> 2] | 0, i4 | 4);
   i49 = HEAP32[(HEAP32[i37 >> 2] | 0) + 452 >> 2] | 0;
   __ZN7WebCore16enclosingIntRectERKNS_10LayoutRectE(i29, i24);
   __ZN7WebCore9FrameView13paintContentsEPNS_15GraphicsContextERKNS_7IntRectE(i49, i28, i29);
   __ZN7WebCore9FrameView16setPaintBehaviorEj(HEAP32[(HEAP32[i37 >> 2] | 0) + 452 >> 2] | 0, i4);
   __ZN7WebCore15GraphicsContextD1Ev(i28);
  }
 } while (0);
 if ((i38 | 0) == 0) {
  i31 = i50;
  STACKTOP = i8;
  return i31 | 0;
 }
 i28 = i38 | 0;
 i37 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
 if ((i37 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i38);
  __ZN3WTF8fastFreeEPv(i38);
  i31 = i50;
  STACKTOP = i8;
  return i31 | 0;
 } else {
  HEAP32[i28 >> 2] = i37;
  i31 = i50;
  STACKTOP = i8;
  return i31 | 0;
 }
 return 0;
}
function __ZN7WebCore6Editor9transposeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 240 | 0;
 i3 = i2 | 0;
 i4 = i2 + 64 | 0;
 i5 = i2 + 80 | 0;
 i6 = i2 + 96 | 0;
 i7 = i2 + 112 | 0;
 i8 = i2 + 128 | 0;
 i9 = i2 + 136 | 0;
 i10 = i2 + 200 | 0;
 i11 = i2 + 208 | 0;
 i12 = i2 + 216 | 0;
 i13 = i2 + 224 | 0;
 i14 = i2 + 232 | 0;
 i15 = i1 | 0;
 if ((__ZNK7WebCore16VisibleSelection19rootEditableElementEv((HEAP32[(HEAP32[i15 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i3, (HEAP32[(HEAP32[i15 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0);
 do {
  if ((HEAP32[i3 + 52 >> 2] | 0) == 1) {
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i3 + 24 | 0, HEAP32[i3 + 48 >> 2] | 0);
   if (__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i4, 1) | 0) {
    i16 = HEAP32[i4 >> 2] | 0;
    HEAP32[i5 >> 2] = i16;
    if ((i16 | 0) != 0) {
     i17 = i16 + 8 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    }
    HEAP32[i5 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
    i17 = HEAP32[i4 + 8 >> 2] | 0;
    i16 = i5 + 8 | 0;
    i18 = i16;
    i19 = HEAP32[i18 >> 2] & -8 | i17 & 7;
    HEAP32[i18 >> 2] = i19;
    HEAP8[i16] = i19 & 255 & -9 | i17 & 8;
    HEAP32[i5 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
   } else {
    __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i5, i4, 0);
   }
   __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i6, i5, 0);
   do {
    if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i5, i6) | 0) {
     i20 = i6 | 0;
    } else {
     __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i7, i6, 0);
     i17 = i7 | 0;
     i19 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = 0;
     i16 = i6 | 0;
     i18 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = i19;
     do {
      if ((i18 | 0) != 0) {
       i19 = i18 + 8 | 0;
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
     HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
     i18 = HEAP32[i7 + 8 >> 2] | 0;
     i19 = i6 + 8 | 0;
     i22 = i19;
     i21 = HEAP32[i22 >> 2] & -8 | i18 & 7;
     HEAP32[i22 >> 2] = i21;
     HEAP8[i19] = i21 & 255 & -9 | i18 & 8;
     HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
     i18 = HEAP32[i17 >> 2] | 0;
     do {
      if ((i18 | 0) != 0) {
       i21 = i18 + 8 | 0;
       i19 = i21 | 0;
       i22 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
       HEAP32[i19 >> 2] = i22;
       if ((i22 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
      }
     } while (0);
     if (!(__ZN7WebCore15inSameParagraphERKNS_15VisiblePositionES2_NS_27EditingBoundaryCrossingRuleE(i5, i6, 1) | 0)) {
      i20 = i16;
      break;
     }
     __ZN7WebCore9makeRangeERKNS_15VisiblePositionES2_(i8, i6, i5);
     i18 = i8 | 0;
     i17 = HEAP32[i18 >> 2] | 0;
     HEAP32[i18 >> 2] = 0;
     if ((i17 | 0) == 0) {
      i20 = i16;
      break;
     }
     __ZN7WebCore16VisibleSelectionC1EPKNS_5RangeENS_9EAffinityEb(i9, i17, 1, 0);
     __ZN7WebCore9plainTextEPKNS_5RangeENS_20TextIteratorBehaviorEb(i10, i17, 0, 0);
     i18 = i10 | 0;
     i21 = HEAP32[i18 >> 2] | 0;
     if ((i21 | 0) == 0) {
      __ZN7WebCore16VisibleSelectionD2Ev(i9);
     } else {
      do {
       if ((HEAP32[i21 + 4 >> 2] | 0) == 2) {
        __ZNK3WTF6String9substringEjj(i13, i10, 1, 1);
        __ZNK3WTF6String9substringEjj(i14, i10, 0, 1);
        i22 = i13 | 0;
        i19 = HEAP32[i22 >> 2] | 0;
        i23 = (i19 | 0) == 0;
        if (!i23) {
         i24 = i19 | 0;
         HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
        }
        i24 = i14 | 0;
        i25 = HEAP32[i24 >> 2] | 0;
        i26 = (i25 | 0) == 0;
        if (!i26) {
         i27 = i25 | 0;
         HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 2;
        }
        i27 = i12 | 0;
        HEAP32[i27 >> 2] = i19;
        if (!i23) {
         i28 = i19 | 0;
         HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
        }
        i28 = i12 + 4 | 0;
        HEAP32[i28 >> 2] = i25;
        do {
         if (!i26) {
          i29 = i25 | 0;
          i30 = HEAP32[i29 >> 2] | 0;
          HEAP32[i29 >> 2] = i30 + 2;
          if ((i30 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i25);
           break;
          } else {
           HEAP32[i29 >> 2] = i30;
           break;
          }
         }
        } while (0);
        do {
         if (!i23) {
          i25 = i19 | 0;
          i26 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
          if ((i26 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i19);
           break;
          } else {
           HEAP32[i25 >> 2] = i26;
           break;
          }
         }
        } while (0);
        __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i11, i12);
        i19 = HEAP32[i28 >> 2] | 0;
        do {
         if ((i19 | 0) != 0) {
          i23 = i19 | 0;
          i26 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
          if ((i26 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i19);
           break;
          } else {
           HEAP32[i23 >> 2] = i26;
           break;
          }
         }
        } while (0);
        i19 = HEAP32[i27 >> 2] | 0;
        do {
         if ((i19 | 0) != 0) {
          i28 = i19 | 0;
          i26 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
          if ((i26 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i19);
           break;
          } else {
           HEAP32[i28 >> 2] = i26;
           break;
          }
         }
        } while (0);
        i19 = HEAP32[i24 >> 2] | 0;
        do {
         if ((i19 | 0) != 0) {
          i27 = i19 | 0;
          i26 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
          if ((i26 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i19);
           break;
          } else {
           HEAP32[i27 >> 2] = i26;
           break;
          }
         }
        } while (0);
        i19 = HEAP32[i22 >> 2] | 0;
        do {
         if ((i19 | 0) != 0) {
          i24 = i19 | 0;
          i26 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
          if ((i26 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i19);
           break;
          } else {
           HEAP32[i24 >> 2] = i26;
           break;
          }
         }
        } while (0);
        do {
         if (__ZN7WebCoreeqERKNS_16VisibleSelectionES2_(i9, (HEAP32[(HEAP32[i15 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0) {
          i31 = 56;
         } else {
          if (!(__ZNK7WebCore14FrameSelection21shouldChangeSelectionERKNS_16VisibleSelectionE(HEAP32[(HEAP32[i15 >> 2] | 0) + 468 >> 2] | 0, i9) | 0)) {
           break;
          }
          __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(HEAP32[(HEAP32[i15 >> 2] | 0) + 468 >> 2] | 0, i9, 6, 0, 0);
          i31 = 56;
         }
        } while (0);
        do {
         if ((i31 | 0) == 56) {
          i19 = HEAP32[(HEAP32[i15 >> 2] | 0) + 32 >> 2] | 0;
          if ((i19 | 0) == 0) {
           break;
          }
          i22 = HEAP32[i19 + 72 >> 2] | 0;
          if ((i22 | 0) == 0) {
           break;
          }
          if (!(FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i22 >> 2] | 0) + 56 >> 2] & 1](i22, i11, i17, 0) | 0)) {
           break;
          }
          __ZN7WebCore6Editor24replaceSelectionWithTextERKN3WTF6StringEbb(i1, i11, 0, 0);
         }
        } while (0);
        i22 = HEAP32[i11 >> 2] | 0;
        if ((i22 | 0) == 0) {
         break;
        }
        i19 = i22 | 0;
        i26 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
        if ((i26 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i22);
         break;
        } else {
         HEAP32[i19 >> 2] = i26;
         break;
        }
       }
      } while (0);
      i21 = HEAP32[i18 >> 2] | 0;
      do {
       if ((i21 | 0) != 0) {
        i26 = i21 | 0;
        i19 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
        if ((i19 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i21);
         break;
        } else {
         HEAP32[i26 >> 2] = i19;
         break;
        }
       }
      } while (0);
      __ZN7WebCore16VisibleSelectionD2Ev(i9);
     }
     i21 = i17 | 0;
     i18 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i17);
      __ZN3WTF8fastFreeEPv(i17);
      i20 = i16;
      break;
     } else {
      HEAP32[i21 >> 2] = i18;
      i20 = i16;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i21 = i18 + 8 | 0;
     i19 = i21 | 0;
     i26 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     HEAP32[i19 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
    }
   } while (0);
   i18 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i21 = i18 + 8 | 0;
     i26 = i21 | 0;
     i19 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
    }
   } while (0);
   i18 = HEAP32[i4 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   i21 = i18 + 8 | 0;
   i18 = i21 | 0;
   i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i19;
   if ((i19 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore16VisibleSelectionD2Ev(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore6Editor3cutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 40 | 0;
 i8 = i2 + 48 | 0;
 i9 = i1 | 0;
 do {
  if (!(__ZNK7WebCore14FrameSelection17isInPasswordFieldEv(HEAP32[(HEAP32[i9 >> 2] | 0) + 468 >> 2] | 0) | 0)) {
   if (__ZN7WebCore6Editor16dispatchCPPEventERKN3WTF12AtomicStringENS_21ClipboardAccessPolicyE(i1, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 92 | 0, 2) | 0) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 456 >> 2] | 0;
 do {
  if ((HEAP8[i10 + 1576 | 0] & 4) == 0) {
   i11 = 8;
  } else {
   i12 = __ZNK7WebCore8Document4bodyEv(i10) | 0;
   if ((i12 | 0) == 0) {
    i11 = 8;
    break;
   }
   i13 = HEAP32[i12 + 36 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i11 = 8;
    break;
   }
   if ((HEAP32[i13 + 12 >> 2] & 16 | 0) == 0) {
    i11 = 8;
    break;
   }
   if ((HEAP32[(HEAP32[i13 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i11 = 10;
   } else {
    i11 = 8;
   }
  }
 } while (0);
 do {
  if ((i11 | 0) == 8) {
   i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 468 >> 2] | 0;
   if ((HEAP32[i10 + 84 >> 2] | 0) != 2) {
    break;
   }
   if (!(__ZNK7WebCore14FrameSelection17isInPasswordFieldEv(i10) | 0)) {
    i11 = 10;
   }
  }
 } while (0);
 do {
  if ((i11 | 0) == 10) {
   i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 468 >> 2] | 0;
   if ((HEAP32[i10 + 84 >> 2] | 0) != 2) {
    break;
   }
   if ((__ZNK7WebCore16VisibleSelection19rootEditableElementEv(i10 + 32 | 0) | 0) == 0) {
    break;
   }
   __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i5, (HEAP32[(HEAP32[i9 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0);
   i10 = i5 | 0;
   i13 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   i10 = (i13 | 0) == 0;
   if (!i10) {
    i12 = i13 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   }
   i12 = HEAP32[(HEAP32[i9 >> 2] | 0) + 32 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i14 = HEAP32[i12 + 72 >> 2] | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 88 >> 2] & 3](i14, i13);
    }
   } while (0);
   do {
    if (i10) {
     i15 = i4;
     i11 = 27;
    } else {
     i12 = i13 | 0;
     i14 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i13);
      __ZN3WTF8fastFreeEPv(i13);
      i16 = i4;
     } else {
      HEAP32[i12 >> 2] = i14;
      i16 = i4;
     }
     i14 = i4 | 0;
     HEAP32[i14 >> 2] = 0;
     if (__ZNK7WebCore5Range9collapsedERi(i13, i14) | 0) {
      i15 = i16;
      i11 = 27;
      break;
     }
     if (!(__ZNK7WebCore6Editor14canDeleteRangeEPNS_5RangeE(0, i13) | 0)) {
      i15 = i16;
      i11 = 27;
      break;
     }
     i14 = HEAP32[(HEAP32[i9 >> 2] | 0) + 32 >> 2] | 0;
     if ((i14 | 0) == 0) {
      i15 = i16;
      i11 = 27;
      break;
     }
     i12 = HEAP32[i14 + 72 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i15 = i16;
      i11 = 27;
      break;
     }
     if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i12 >> 2] | 0) + 12 >> 2] & 1](i12, i13) | 0)) {
      break;
     }
     __ZN7WebCore6Editor38updateMarkersForWordsAffectedByEditingEb(i1, 1);
     i12 = HEAP32[(HEAP32[i9 >> 2] | 0) + 468 >> 2] | 0;
     i14 = i6 | 0;
     i17 = HEAP32[i12 + 56 >> 2] | 0;
     HEAP32[i14 >> 2] = i17;
     if ((i17 | 0) != 0) {
      i18 = i17 + 8 | 0;
      HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
     }
     HEAP32[i6 + 4 >> 2] = HEAP32[i12 + 60 >> 2];
     i18 = HEAP32[i12 + 64 >> 2] | 0;
     i12 = i6 + 8 | 0;
     i17 = i12;
     i19 = HEAP32[i17 >> 2] & -8 | i18 & 7;
     HEAP32[i17 >> 2] = i19;
     HEAP8[i12] = i19 & 255 & -9 | i18 & 8;
     i18 = (__ZN7WebCore24enclosingTextFormControlERKNS_8PositionE(i6) | 0) == 0;
     i19 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i19 | 0) != 0) {
       i14 = i19 + 8 | 0;
       i12 = i14 | 0;
       i17 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
       HEAP32[i12 >> 2] = i17;
       if ((i17 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
      }
     } while (0);
     do {
      if (!i18) {
       __ZN7WebCore10Pasteboard21createForCopyAndPasteEv(i7);
       i19 = i7 | 0;
       i14 = HEAP32[i19 >> 2] | 0;
       if ((HEAP8[(HEAP32[(HEAP32[i9 >> 2] | 0) + 36 >> 2] | 0) + 189 | 0] & 64) == 0) {
        __ZNK7WebCore6Editor12selectedTextENS_20TextIteratorBehaviorE(i8, i1, 0);
       } else {
        __ZNK7WebCore6Editor12selectedTextENS_20TextIteratorBehaviorE(i8, i1, 128);
       }
       i17 = HEAP32[(HEAP32[i9 >> 2] | 0) + 32 >> 2] | 0;
       do {
        if ((i17 | 0) == 0) {
         i20 = 1;
        } else {
         i12 = HEAP32[i17 + 72 >> 2] | 0;
         if ((i12 | 0) == 0) {
          i20 = 1;
          break;
         }
         if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 16 >> 2] & 1](i12) | 0)) {
          i20 = 1;
          break;
         }
         i20 = (HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 468 >> 2] | 0) + 108 >> 2] | 0) != 1 | 0;
        }
       } while (0);
       __ZN7WebCore10Pasteboard14writePlainTextERKN3WTF6StringENS0_18SmartReplaceOptionE(i14, i8, i20);
       i17 = HEAP32[i8 >> 2] | 0;
       do {
        if ((i17 | 0) != 0) {
         i12 = i17 | 0;
         i21 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
         if ((i21 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i17);
          break;
         } else {
          HEAP32[i12 >> 2] = i21;
          break;
         }
        }
       } while (0);
       i17 = HEAP32[i19 >> 2] | 0;
       if ((i17 | 0) == 0) {
        break;
       }
       __ZN3WTF8fastFreeEPv(i17 | 0);
      }
     } while (0);
     i18 = HEAP32[i9 >> 2] | 0;
     i17 = HEAP32[i18 + 32 >> 2] | 0;
     do {
      if ((i17 | 0) == 0) {
       i22 = 0;
       i23 = i18;
      } else {
       i14 = HEAP32[i17 + 72 >> 2] | 0;
       if ((i14 | 0) == 0) {
        i24 = i17;
        i25 = i18;
       } else {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 92 >> 2] & 3](i14);
        i14 = HEAP32[i9 >> 2] | 0;
        i21 = HEAP32[i14 + 32 >> 2] | 0;
        if ((i21 | 0) == 0) {
         i22 = 0;
         i23 = i14;
         break;
        } else {
         i24 = i21;
         i25 = i14;
        }
       }
       i14 = HEAP32[i24 + 72 >> 2] | 0;
       if ((i14 | 0) == 0) {
        i22 = 0;
        i23 = i25;
        break;
       }
       i21 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] & 1](i14) | 0;
       i14 = HEAP32[i9 >> 2] | 0;
       if (!i21) {
        i22 = 0;
        i23 = i14;
        break;
       }
       i22 = (HEAP32[(HEAP32[i14 + 468 >> 2] | 0) + 108 >> 2] | 0) == 1;
       i23 = i14;
      }
     } while (0);
     if ((HEAP32[(HEAP32[i23 + 468 >> 2] | 0) + 84 >> 2] | 0) == 0) {
      break;
     }
     i18 = HEAP32[i23 + 456 >> 2] | 0;
     i17 = __ZN3WTF10fastMallocEj(344) | 0;
     __ZN7WebCore22DeleteSelectionCommandC1ERNS_8DocumentEbbbbb(i17, i18, i22, 1, 0, 0, 1);
     i18 = i3 | 0;
     HEAP32[i18 >> 2] = i17;
     __ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i3);
     i17 = HEAP32[i18 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     i18 = i17 + 4 | 0;
     i17 = i18 | 0;
     i14 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) != 0) {
      HEAP32[i17 >> 2] = i14;
      break;
     }
     i14 = i18 - 4 | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 3](i14);
    }
   } while (0);
   if (i10) {
    STACKTOP = i2;
    return;
   }
   i14 = i13 | 0;
   i18 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i13);
    __ZN3WTF8fastFreeEPv(i13);
    STACKTOP = i2;
    return;
   } else {
    HEAP32[i14 >> 2] = i18;
    STACKTOP = i2;
    return;
   }
  }
 } while (0);
 __ZN7WebCore10systemBeepEv();
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore6Editor28misspelledWordAtCaretOrRangeEPNS_4NodeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 200 | 0;
 i5 = i4 | 0;
 i6 = i4 + 64 | 0;
 i7 = i4 + 128 | 0;
 i8 = i4 + 144 | 0;
 i9 = i4 + 160 | 0;
 i10 = i4 + 168 | 0;
 i11 = i4 + 176 | 0;
 i12 = i4 + 184 | 0;
 i13 = i4 + 192 | 0;
 i14 = i2 | 0;
 i2 = HEAP32[(HEAP32[i14 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i15 = HEAP32[i2 + 72 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   if ((i3 | 0) == 0 | (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 24 >> 2] & 1](i15) | 0) ^ 1) {
    break;
   }
   if ((HEAP32[i3 + 12 >> 2] & 4 | 0) == 0) {
    i15 = HEAP32[i3 + 16 >> 2] | 0;
    if ((i15 | 0) == 0) {
     break;
    }
    if ((HEAP32[i15 + 12 >> 2] & 4 | 0) == 0) {
     break;
    }
    i16 = i15;
   } else {
    i16 = i3;
   }
   if ((i16 | 0) == 0) {
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 504 >> 2] & 1](i16) | 0)) {
    break;
   }
   __ZN7WebCore16VisibleSelectionC2ERKS0_(i5, (HEAP32[(HEAP32[i14 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0);
   do {
    if (__ZNK7WebCore16VisibleSelection17isContentEditableEv(i5) | 0) {
     i15 = i5 + 52 | 0;
     if ((HEAP32[i15 >> 2] | 0) == 0) {
      i17 = 14;
      break;
     }
     i18 = i8 | 0;
     i19 = HEAP32[i5 >> 2] | 0;
     HEAP32[i18 >> 2] = i19;
     if ((i19 | 0) != 0) {
      i20 = i19 + 8 | 0;
      HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
     }
     HEAP32[i8 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
     i20 = HEAP32[i5 + 8 >> 2] | 0;
     i19 = i8 + 8 | 0;
     i21 = i19;
     i22 = HEAP32[i21 >> 2] & -8 | i20 & 7;
     HEAP32[i21 >> 2] = i22;
     HEAP8[i19] = i22 & 255 & -9 | i20 & 8;
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i7, i8, 1);
     __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i6, i7, 0);
     i20 = HEAP32[i7 >> 2] | 0;
     do {
      if ((i20 | 0) != 0) {
       i22 = i20 + 8 | 0;
       i19 = i22 | 0;
       i21 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
       HEAP32[i19 >> 2] = i21;
       if ((i21 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
      }
     } while (0);
     i20 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i20 | 0) != 0) {
       i22 = i20 + 8 | 0;
       i21 = i22 | 0;
       i19 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
       HEAP32[i21 >> 2] = i19;
       if ((i19 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore16VisibleSelection22expandUsingGranularityENS_15TextGranularityE(i6, 1) | 0;
     __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i9, i6);
     i20 = i9 | 0;
     i18 = HEAP32[i20 >> 2] | 0;
     HEAP32[i20 >> 2] = 0;
     L29 : do {
      if ((HEAP32[i15 >> 2] | 0) == 2) {
       __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i10, i5);
       i20 = i10 | 0;
       i22 = __ZN7WebCore14areRangesEqualEPKNS_5RangeES2_(i18, HEAP32[i20 >> 2] | 0) | 0;
       i19 = HEAP32[i20 >> 2] | 0;
       do {
        if ((i19 | 0) == 0) {
         if (i22) {
          i17 = 32;
          break L29;
         }
        } else {
         i20 = i19 | 0;
         i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
         if ((i21 | 0) == 0) {
          __ZN7WebCore5RangeD1Ev(i19);
          __ZN3WTF8fastFreeEPv(i19);
          if (i22) {
           i17 = 32;
           break L29;
          } else {
           break;
          }
         } else {
          HEAP32[i20 >> 2] = i21;
          if (i22) {
           i17 = 32;
           break L29;
          } else {
           break;
          }
         }
        }
       } while (0);
       HEAP32[i1 >> 2] = 0;
      } else {
       i17 = 32;
      }
     } while (0);
     do {
      if ((i17 | 0) == 32) {
       __ZNK7WebCore5Range4textEv(i11, i18);
       i15 = i11 | 0;
       i22 = HEAP32[i15 >> 2] | 0;
       do {
        if ((i22 | 0) == 0) {
         i17 = 36;
        } else {
         i19 = HEAP32[i22 + 4 >> 2] | 0;
         if ((i19 | 0) == 0) {
          i17 = 36;
          break;
         }
         i21 = (HEAP32[i14 >> 2] | 0) + 32 | 0;
         i20 = HEAP32[i21 >> 2] | 0;
         if ((i20 | 0) == 0) {
          i17 = 36;
          break;
         }
         if ((HEAP32[i20 + 72 >> 2] | 0) == 0) {
          i17 = 36;
          break;
         }
         HEAP32[i12 >> 2] = -1;
         HEAP32[i13 >> 2] = 0;
         i20 = HEAP32[(HEAP32[i21 >> 2] | 0) + 72 >> 2] | 0;
         i21 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 168 >> 2] & 1](i20) | 0;
         i20 = HEAP32[(HEAP32[i21 >> 2] | 0) + 20 >> 2] | 0;
         i23 = HEAP32[i15 >> 2] | 0;
         do {
          if ((i23 | 0) == 0) {
           i24 = 0;
          } else {
           if ((HEAP32[i23 + 16 >> 2] & 32 | 0) == 0) {
            i24 = HEAP32[i23 + 8 >> 2] | 0;
            break;
           } else {
            i24 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i23) | 0;
            break;
           }
          }
         } while (0);
         FUNCTION_TABLE_viiiii[i20 & 1](i21, i24, i19, i12, i13);
         i23 = i1 | 0;
         if ((HEAP32[i13 >> 2] | 0) != (i19 | 0)) {
          HEAP32[i23 >> 2] = 0;
          break;
         }
         i25 = HEAP32[i15 >> 2] | 0;
         HEAP32[i23 >> 2] = i25;
         if ((i25 | 0) == 0) {
          break;
         }
         i23 = i25 | 0;
         HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
        }
       } while (0);
       if ((i17 | 0) == 36) {
        HEAP32[i1 >> 2] = 0;
       }
       i22 = HEAP32[i15 >> 2] | 0;
       if ((i22 | 0) == 0) {
        break;
       }
       i23 = i22 | 0;
       i25 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
       if ((i25 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i22);
        break;
       } else {
        HEAP32[i23 >> 2] = i25;
        break;
       }
      }
     } while (0);
     do {
      if ((i18 | 0) != 0) {
       i25 = i18 | 0;
       i23 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
       if ((i23 | 0) == 0) {
        __ZN7WebCore5RangeD1Ev(i18);
        __ZN3WTF8fastFreeEPv(i18);
        break;
       } else {
        HEAP32[i25 >> 2] = i23;
        break;
       }
      }
     } while (0);
     __ZN7WebCore16VisibleSelectionD2Ev(i6);
    } else {
     i17 = 14;
    }
   } while (0);
   if ((i17 | 0) == 14) {
    HEAP32[i1 >> 2] = 0;
   }
   __ZN7WebCore16VisibleSelectionD2Ev(i5);
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore6Editor17firstRectForRangeEPNS_5RangeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i4 = i2 | 0;
 i5 = i2 + 8 | 0;
 i6 = i2 + 16 | 0;
 i7 = i2 + 24 | 0;
 i8 = i2 + 32 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 64 | 0;
 i11 = i2 + 72 | 0;
 i12 = i2 + 88 | 0;
 i13 = i2 + 112 | 0;
 i14 = i2 + 128 | 0;
 i15 = i2 + 144 | 0;
 i16 = i2 + 160 | 0;
 i17 = i2 + 168 | 0;
 i18 = i17 | 0;
 i19 = i17;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i21 = i3 + 12 | 0;
 i22 = HEAP32[i21 >> 2] | 0;
 if ((i22 | 0) > -1) {
  i23 = i22;
 } else {
  i22 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i3 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i21 >> 2] = i22;
  i23 = i22;
 }
 i22 = HEAP32[i3 + 8 >> 2] | 0;
 if ((i22 | 0) == 0) {
  i24 = i23;
 } else {
  i23 = i22 + 8 | 0;
  HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
  i24 = HEAP32[i21 >> 2] | 0;
 }
 i21 = i6 | 0;
 HEAP32[i21 >> 2] = i22;
 HEAP32[i7 >> 2] = i24;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i9, i6, i7);
 i7 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i21 = i7 + 8 | 0;
   i6 = i21 | 0;
   i24 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i24;
   if ((i24 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i9, 1);
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 + 8 | 0;
   i21 = i9 | 0;
   i24 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   HEAP32[i21 >> 2] = i24;
   if ((i24 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i7 = i10 | 0;
 HEAP32[i7 >> 2] = 0;
 do {
  if (__ZNK7WebCore5Range9collapsedERi(i3, i7) | 0) {
   __ZN7WebCore16RenderedPositionC1ERKNS_15VisiblePositionE(i12, i8);
   __ZNK7WebCore16RenderedPosition12absoluteRectEPNS_10LayoutUnitE(i11, i12, 0);
   i10 = i11 + 8 | 0;
   do {
    if ((HEAP32[i10 >> 2] | 0) == 1) {
     HEAP32[i10 >> 2] = 0;
    } else {
     i9 = i11 + 12 | 0;
     if ((HEAP32[i9 >> 2] | 0) != 1) {
      break;
     }
     HEAP32[i9 >> 2] = 0;
    }
   } while (0);
   i10 = i1;
   i9 = i11;
   HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i10 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
   HEAP32[i10 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
   HEAP32[i10 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
  } else {
   i9 = i3 + 24 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) > -1) {
    i25 = i10;
   } else {
    i10 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i3 + 28 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i9 >> 2] = i10;
    i25 = i10;
   }
   i10 = HEAP32[i3 + 20 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i26 = i25;
   } else {
    i24 = i10 + 8 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
    i26 = HEAP32[i9 >> 2] | 0;
   }
   i9 = i4 | 0;
   HEAP32[i9 >> 2] = i10;
   HEAP32[i5 >> 2] = i26;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i14, i4, i5);
   i10 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i9 = i10 + 8 | 0;
     i24 = i9 | 0;
     i21 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     HEAP32[i24 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i13, i14, 0);
   i10 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i9 = i10 + 8 | 0;
     i21 = i9 | 0;
     i24 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i24;
     if ((i24 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   L35 : do {
    if (__ZN7WebCore10inSameLineERKNS_15VisiblePositionES2_(i8, i13) | 0) {
     __ZN7WebCore12RenderObject31absoluteBoundingBoxRectForRangeEPKNS_5RangeE(i15, i3);
     __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i1, i15);
    } else {
     i10 = i16 | 0;
     HEAP32[i10 >> 2] = 0;
     __ZN7WebCore16RenderedPositionC1ERKNS_15VisiblePositionE(i20, i8);
     __ZNK7WebCore16RenderedPosition12absoluteRectEPNS_10LayoutUnitE(i19, i20, i16);
     i9 = HEAP32[i18 >> 2] | 0;
     i24 = HEAP32[i18 + 4 >> 2] | 0;
     i21 = i9;
     i6 = 1;
     i22 = i17 + 8 | 0;
     do {
      if ((i21 | 0) == 0 & (i24 >>> 0 < i6 >>> 0 | i24 >>> 0 == i6 >>> 0 & i9 >>> 0 < 0 >>> 0)) {
       i23 = HEAP32[i22 >> 2] | 0;
       i27 = HEAP32[i22 + 4 >> 2] | 0;
       i28 = i23;
       i29 = 1;
       if (!((i28 | 0) == 0 & (i27 >>> 0 < i29 >>> 0 | i27 >>> 0 == i29 >>> 0 & i23 >>> 0 < 0 >>> 0))) {
        i30 = i28;
        break;
       }
       _memset(i1 | 0, 0, 16) | 0;
       break L35;
      } else {
       i30 = HEAP32[i22 >> 2] | 0;
      }
     } while (0);
     i22 = HEAP32[i19 + 4 >> 2] | 0;
     if ((i30 | 0) == 1) {
      i9 = (HEAP32[i10 >> 2] | 0) + 1 | 0;
      i6 = HEAP32[i19 + 12 >> 2] | 0;
      HEAP32[i1 >> 2] = i21;
      HEAP32[i1 + 4 >> 2] = i22;
      HEAP32[i1 + 8 >> 2] = i9;
      HEAP32[i1 + 12 >> 2] = i6;
      break;
     } else {
      i6 = (HEAP32[i10 >> 2] | 0) + (HEAP32[i19 + 12 >> 2] | 0) | 0;
      HEAP32[i1 >> 2] = i21;
      HEAP32[i1 + 4 >> 2] = i22;
      HEAP32[i1 + 8 >> 2] = i30;
      HEAP32[i1 + 12 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i6 = HEAP32[i13 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i22 = i6 + 8 | 0;
   i6 = i22 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
  }
 } while (0);
 i13 = HEAP32[i8 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = i13 + 8 | 0;
 i13 = i8 | 0;
 i1 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
 HEAP32[i13 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCoreeqERKNS_16VisibleSelectionES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i4 | 0;
 i9 = HEAP32[i1 + 24 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) == 0) {
  i10 = i4 + 8 | 0;
  i11 = 0;
  i12 = i10;
  i13 = i10;
 } else {
  i10 = i9 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  i10 = i4 + 8 | 0;
  i9 = i10;
  i11 = HEAP32[i9 >> 2] & -8;
  i12 = i10;
  i13 = i9;
 }
 i9 = i4 + 4 | 0;
 HEAP32[i9 >> 2] = HEAP32[i1 + 28 >> 2];
 i10 = HEAP32[i1 + 32 >> 2] | 0;
 i14 = i11 | i10 & 7;
 HEAP32[i13 >> 2] = i14;
 HEAP8[i12] = i14 & 255 & -9 | i10 & 8;
 i10 = i5 | 0;
 i14 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i10 >> 2] = i14;
 if ((i14 | 0) == 0) {
  i15 = 0;
 } else {
  i11 = i14 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
  i15 = HEAP32[i10 >> 2] | 0;
 }
 i11 = i5 + 4 | 0;
 HEAP32[i11 >> 2] = HEAP32[i2 + 28 >> 2];
 i14 = HEAP32[i2 + 32 >> 2] | 0;
 i16 = i5 + 8 | 0;
 i17 = i16;
 i18 = HEAP32[i17 >> 2] & -8 | i14 & 7;
 HEAP32[i17 >> 2] = i18;
 i19 = i18 & 255 & -9 | i14 & 8;
 HEAP8[i16] = i19;
 if ((HEAP32[i8 >> 2] | 0) == (i15 | 0)) {
  do {
   if ((HEAP8[i12] & 8) == 0) {
    i14 = HEAP32[i13 >> 2] & 7;
    if (!((i14 | 0) == 2 | (i14 | 0) == 4)) {
     i20 = 9;
     break;
    }
    i14 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i4) | 0;
    i21 = i14;
    i22 = HEAP8[i16] | 0;
   } else {
    i20 = 9;
   }
  } while (0);
  if ((i20 | 0) == 9) {
   i21 = HEAP32[i9 >> 2] | 0;
   i22 = i19;
  }
  do {
   if ((i22 & 8) == 0) {
    i19 = HEAP32[i17 >> 2] & 7;
    if (!((i19 | 0) == 2 | (i19 | 0) == 4)) {
     i20 = 13;
     break;
    }
    i23 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i5) | 0;
   } else {
    i20 = 13;
   }
  } while (0);
  if ((i20 | 0) == 13) {
   i23 = HEAP32[i11 >> 2] | 0;
  }
  do {
   if ((i21 | 0) == (i23 | 0)) {
    if (((HEAP32[i17 >> 2] ^ HEAP32[i13 >> 2]) & 7 | 0) != 0) {
     i24 = 0;
     break;
    }
    i11 = i6 | 0;
    i5 = HEAP32[i1 + 36 >> 2] | 0;
    HEAP32[i11 >> 2] = i5;
    if ((i5 | 0) != 0) {
     i22 = i5 + 8 | 0;
     HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
    }
    i22 = i6 + 4 | 0;
    HEAP32[i22 >> 2] = HEAP32[i1 + 40 >> 2];
    i5 = HEAP32[i1 + 44 >> 2] | 0;
    i19 = i6 + 8 | 0;
    i9 = i19;
    i16 = HEAP32[i9 >> 2] & -8 | i5 & 7;
    HEAP32[i9 >> 2] = i16;
    HEAP8[i19] = i16 & 255 & -9 | i5 & 8;
    i5 = i7 | 0;
    i16 = HEAP32[i2 + 36 >> 2] | 0;
    HEAP32[i5 >> 2] = i16;
    if ((i16 | 0) == 0) {
     i25 = 0;
    } else {
     i4 = i16 + 8 | 0;
     HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
     i25 = HEAP32[i5 >> 2] | 0;
    }
    i4 = i7 + 4 | 0;
    HEAP32[i4 >> 2] = HEAP32[i2 + 40 >> 2];
    i16 = HEAP32[i2 + 44 >> 2] | 0;
    i12 = i7 + 8 | 0;
    i14 = i12;
    i18 = HEAP32[i14 >> 2] & -8 | i16 & 7;
    HEAP32[i14 >> 2] = i18;
    i26 = i18 & 255 & -9 | i16 & 8;
    HEAP8[i12] = i26;
    do {
     if ((HEAP32[i11 >> 2] | 0) == (i25 | 0)) {
      do {
       if ((HEAP8[i19] & 8) == 0) {
        i16 = HEAP32[i9 >> 2] & 7;
        if (!((i16 | 0) == 2 | (i16 | 0) == 4)) {
         i20 = 24;
         break;
        }
        i16 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i6) | 0;
        i27 = i16;
        i28 = HEAP8[i12] | 0;
       } else {
        i20 = 24;
       }
      } while (0);
      if ((i20 | 0) == 24) {
       i27 = HEAP32[i22 >> 2] | 0;
       i28 = i26;
      }
      do {
       if ((i28 & 8) == 0) {
        i16 = HEAP32[i14 >> 2] & 7;
        if (!((i16 | 0) == 2 | (i16 | 0) == 4)) {
         i20 = 28;
         break;
        }
        i29 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i7) | 0;
       } else {
        i20 = 28;
       }
      } while (0);
      if ((i20 | 0) == 28) {
       i29 = HEAP32[i4 >> 2] | 0;
      }
      if ((i27 | 0) != (i29 | 0)) {
       i30 = 0;
       break;
      }
      if (((HEAP32[i14 >> 2] ^ HEAP32[i9 >> 2]) & 7 | 0) != 0) {
       i30 = 0;
       break;
      }
      if ((HEAP32[i1 + 48 >> 2] | 0) != (HEAP32[i2 + 48 >> 2] | 0)) {
       i30 = 0;
       break;
      }
      i16 = HEAP8[i1 + 56 | 0] | 0;
      i18 = HEAP8[i2 + 56 | 0] | 0;
      if ((i16 & 1) != 0 ^ (i18 & 1) != 0) {
       i30 = 0;
       break;
      }
      i30 = (i16 & 2) != 0 ^ (i18 & 2) != 0 ^ 1;
     } else {
      i30 = 0;
     }
    } while (0);
    i9 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
      i14 = i9 + 8 | 0;
      i4 = i14 | 0;
      i26 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
      HEAP32[i4 >> 2] = i26;
      if ((i26 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
     }
    } while (0);
    i9 = HEAP32[i11 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i24 = i30;
     break;
    }
    i5 = i9 + 8 | 0;
    i9 = i5 | 0;
    i14 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    HEAP32[i9 >> 2] = i14;
    if ((i14 | 0) >= 1) {
     i24 = i30;
     break;
    }
    if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
     i24 = i30;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
    i24 = i30;
   } else {
    i24 = 0;
   }
  } while (0);
  i31 = i24;
  i32 = HEAP32[i10 >> 2] | 0;
 } else {
  i31 = 0;
  i32 = i15;
 }
 do {
  if ((i32 | 0) != 0) {
   i15 = i32 + 8 | 0;
   i10 = i15 | 0;
   i24 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i24;
   if ((i24 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  }
 } while (0);
 i32 = HEAP32[i8 >> 2] | 0;
 if ((i32 | 0) == 0) {
  STACKTOP = i3;
  return i31 | 0;
 }
 i8 = i32 + 8 | 0;
 i32 = i8 | 0;
 i15 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
 HEAP32[i32 >> 2] = i15;
 if ((i15 | 0) >= 1) {
  STACKTOP = i3;
  return i31 | 0;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i31 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i3;
 return i31 | 0;
}
function __ZN7WebCore6Editor19selectionForCommandEPNS_5EventE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i5 = i4 | 0;
 i6 = i4 + 64 | 0;
 i7 = i4 + 80 | 0;
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i5, (HEAP32[(HEAP32[i2 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0);
 if ((i3 | 0) == 0) {
  i2 = i5 | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 >> 2] = i8;
  HEAP32[i1 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
  i8 = HEAP32[i5 + 8 >> 2] | 0;
  i2 = i1 + 8 | 0;
  i9 = i2;
  i10 = HEAP32[i9 >> 2] & -8 | i8 & 7;
  HEAP32[i9 >> 2] = i10;
  HEAP8[i2] = i10 & 255 & -9 | i8 & 8;
  i8 = i5 + 12 | 0;
  i10 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i1 + 12 >> 2] = i10;
  HEAP32[i1 + 16 >> 2] = HEAP32[i5 + 16 >> 2];
  i10 = HEAP32[i5 + 20 >> 2] | 0;
  i8 = i1 + 20 | 0;
  i2 = i8;
  i9 = HEAP32[i2 >> 2] & -8 | i10 & 7;
  HEAP32[i2 >> 2] = i9;
  HEAP8[i8] = i9 & 255 & -9 | i10 & 8;
  i10 = i5 + 24 | 0;
  i9 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = 0;
  HEAP32[i1 + 24 >> 2] = i9;
  HEAP32[i1 + 28 >> 2] = HEAP32[i5 + 28 >> 2];
  i9 = HEAP32[i5 + 32 >> 2] | 0;
  i10 = i1 + 32 | 0;
  i8 = i10;
  i2 = HEAP32[i8 >> 2] & -8 | i9 & 7;
  HEAP32[i8 >> 2] = i2;
  HEAP8[i10] = i2 & 255 & -9 | i9 & 8;
  i9 = i5 + 36 | 0;
  i2 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i1 + 36 >> 2] = i2;
  HEAP32[i1 + 40 >> 2] = HEAP32[i5 + 40 >> 2];
  i2 = HEAP32[i5 + 44 >> 2] | 0;
  i9 = i1 + 44 | 0;
  i10 = i9;
  i8 = HEAP32[i10 >> 2] & -8 | i2 & 7;
  HEAP32[i10 >> 2] = i8;
  HEAP8[i9] = i8 & 255 & -9 | i2 & 8;
  HEAP32[i1 + 48 >> 2] = HEAP32[i5 + 48 >> 2];
  HEAP32[i1 + 52 >> 2] = HEAP32[i5 + 52 >> 2];
  i2 = HEAP8[i5 + 56 | 0] | 0;
  i8 = i1 + 56 | 0;
  HEAP8[i8] = HEAP8[i8] & -4 | i2 & 1 | i2 & 2;
  __ZN7WebCore16VisibleSelectionD2Ev(i5);
  STACKTOP = i4;
  return;
 }
 i2 = i6 | 0;
 i8 = i5 + 24 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i2 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i10 = i9 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 i10 = i5 + 28 | 0;
 HEAP32[i6 + 4 >> 2] = HEAP32[i10 >> 2];
 i9 = i5 + 32 | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 i12 = i6 + 8 | 0;
 i13 = i12;
 i14 = HEAP32[i13 >> 2] & -8 | i11 & 7;
 HEAP32[i13 >> 2] = i14;
 HEAP8[i12] = i14 & 255 & -9 | i11 & 8;
 i11 = __ZN7WebCore24enclosingTextFormControlERKNS_8PositionE(i6) | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 + 8 | 0;
   i14 = i2 | 0;
   i12 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i6 = i3 + 32 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 1](i3) | 0;
 L13 : do {
  if ((HEAP32[i2 + 12 >> 2] & 4 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] & 1](i2) | 0)) {
    break;
   }
   i3 = HEAP32[i6 >> 2] | 0;
   i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 1](i3) | 0;
   i3 = i12;
   if ((i12 | 0) == 0) {
    break;
   }
   i12 = HEAP32[i8 >> 2] | 0;
   i14 = (i12 | 0) == 0;
   L17 : do {
    if (!i14) {
     i13 = i12 + 8 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
     i13 = i14 | (i3 | 0) != (i11 | 0);
     i15 = i12 + 8 | 0;
     i16 = i15 - 8 | 0;
     i17 = i15 | 0;
     i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i18;
     do {
      if ((i18 | 0) < 1) {
       if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i16);
       if (i13) {
        break L17;
       } else {
        break L13;
       }
      }
     } while (0);
     if (!i13) {
      break L13;
     }
    }
   } while (0);
   __ZNK7WebCore26HTMLTextFormControlElement9selectionEv(i7, i3);
   i12 = i7 | 0;
   i14 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   if ((i14 | 0) == 0) {
    break;
   }
   __ZN7WebCore16VisibleSelectionC1EPKNS_5RangeENS_9EAffinityEb(i1, i14, 1, (HEAP8[i5 + 56 | 0] & 2) != 0);
   i12 = i14 | 0;
   i16 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i14);
    __ZN3WTF8fastFreeEPv(i14);
    __ZN7WebCore16VisibleSelectionD2Ev(i5);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i12 >> 2] = i16;
    __ZN7WebCore16VisibleSelectionD2Ev(i5);
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i7 = i5 | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 >> 2] = i11;
 HEAP32[i1 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i11 = HEAP32[i5 + 8 >> 2] | 0;
 i7 = i1 + 8 | 0;
 i6 = i7;
 i2 = HEAP32[i6 >> 2] & -8 | i11 & 7;
 HEAP32[i6 >> 2] = i2;
 HEAP8[i7] = i2 & 255 & -9 | i11 & 8;
 i11 = i5 + 12 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i2;
 HEAP32[i1 + 16 >> 2] = HEAP32[i5 + 16 >> 2];
 i2 = HEAP32[i5 + 20 >> 2] | 0;
 i11 = i1 + 20 | 0;
 i7 = i11;
 i6 = HEAP32[i7 >> 2] & -8 | i2 & 7;
 HEAP32[i7 >> 2] = i6;
 HEAP8[i11] = i6 & 255 & -9 | i2 & 8;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = i2;
 HEAP32[i1 + 28 >> 2] = HEAP32[i10 >> 2];
 i10 = HEAP32[i9 >> 2] | 0;
 i9 = i1 + 32 | 0;
 i2 = i9;
 i8 = HEAP32[i2 >> 2] & -8 | i10 & 7;
 HEAP32[i2 >> 2] = i8;
 HEAP8[i9] = i8 & 255 & -9 | i10 & 8;
 i10 = i5 + 36 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = i8;
 HEAP32[i1 + 40 >> 2] = HEAP32[i5 + 40 >> 2];
 i8 = HEAP32[i5 + 44 >> 2] | 0;
 i10 = i1 + 44 | 0;
 i9 = i10;
 i2 = HEAP32[i9 >> 2] & -8 | i8 & 7;
 HEAP32[i9 >> 2] = i2;
 HEAP8[i10] = i2 & 255 & -9 | i8 & 8;
 HEAP32[i1 + 48 >> 2] = HEAP32[i5 + 48 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i5 + 52 >> 2];
 i8 = HEAP8[i5 + 56 | 0] | 0;
 i2 = i1 + 56 | 0;
 HEAP8[i2] = HEAP8[i2] & -4 | i8 & 1 | i8 & 2;
 __ZN7WebCore16VisibleSelectionD2Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore6Editor35guessesForMisspelledOrUngrammaticalERbS1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 72 | 0;
 i9 = i5 + 88 | 0;
 i10 = i5 + 104 | 0;
 i11 = i5 + 112 | 0;
 i12 = i5 + 120 | 0;
 i13 = i5 + 128 | 0;
 i14 = i5 + 136 | 0;
 i15 = i2 | 0;
 i16 = __ZN7WebCore25unifiedTextCheckerEnabledEPKNS_5FrameE(HEAP32[i15 >> 2] | 0) | 0;
 i17 = HEAP32[i15 >> 2] | 0;
 if (!i16) {
  if ((HEAP32[(HEAP32[i17 + 36 >> 2] | 0) + 108 >> 2] | 0) == 2) {
   __ZNK7WebCore6Editor28misspelledWordAtCaretOrRangeEPNS_4NodeE(i14, i2, HEAP32[(HEAP32[i17 + 456 >> 2] | 0) + 680 >> 2] | 0);
  } else {
   __ZNK7WebCore6Editor25misspelledSelectionStringEv(i14, i2);
  }
  i2 = i14 | 0;
  i16 = HEAP32[i2 >> 2] | 0;
  if ((i16 | 0) == 0) {
   i18 = 0;
  } else {
   i18 = (HEAP32[i16 + 4 >> 2] | 0) != 0 | 0;
  }
  HEAP8[i3] = i18;
  HEAP8[i4] = 0;
  do {
   if ((HEAP8[i3] & 1) == 0) {
    HEAP32[i1 >> 2] = 0;
    HEAP32[i1 + 4 >> 2] = 0;
    HEAP32[i1 + 8 >> 2] = 0;
   } else {
    HEAP32[i1 >> 2] = 0;
    HEAP32[i1 + 4 >> 2] = 0;
    HEAP32[i1 + 8 >> 2] = 0;
    i18 = HEAP32[(HEAP32[i15 >> 2] | 0) + 32 >> 2] | 0;
    if ((i18 | 0) == 0) {
     break;
    }
    i16 = HEAP32[i18 + 72 >> 2] | 0;
    if ((i16 | 0) == 0) {
     break;
    }
    i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 168 >> 2] & 1](i16) | 0;
    i16 = HEAP32[(HEAP32[i18 >> 2] | 0) + 32 >> 2] | 0;
    i19 = i6 | 0;
    HEAP32[i19 >> 2] = 0;
    FUNCTION_TABLE_viiii[i16 & 1](i18, i14, i6, i1);
    i18 = HEAP32[i19 >> 2] | 0;
    if ((i18 | 0) == 0) {
     break;
    }
    i19 = i18 | 0;
    i16 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
    if ((i16 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i18);
     break;
    } else {
     HEAP32[i19 >> 2] = i16;
     break;
    }
   }
  } while (0);
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i2 = i6 | 0;
  i14 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
  if ((i14 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i6);
   STACKTOP = i5;
   return;
  } else {
   HEAP32[i2 >> 2] = i14;
   STACKTOP = i5;
   return;
  }
 }
 i14 = HEAP32[i17 + 468 >> 2] | 0;
 do {
  if ((HEAP32[i14 + 84 >> 2] | 0) == 1) {
   if ((HEAP32[(HEAP32[i17 + 36 >> 2] | 0) + 108 >> 2] | 0) != 2) {
    i20 = 16;
    break;
   }
   i2 = i9 | 0;
   i6 = HEAP32[i14 + 32 >> 2] | 0;
   HEAP32[i2 >> 2] = i6;
   if ((i6 | 0) == 0) {
    i16 = i9 + 8 | 0;
    i21 = 0;
    i22 = i16;
    i23 = i16;
   } else {
    i16 = i6 + 8 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
    i16 = i9 + 8 | 0;
    i6 = i16;
    i21 = HEAP32[i6 >> 2] & -8;
    i22 = i16;
    i23 = i6;
   }
   HEAP32[i9 + 4 >> 2] = HEAP32[i14 + 36 >> 2];
   i6 = HEAP32[i14 + 40 >> 2] | 0;
   i16 = i21 | i6 & 7;
   HEAP32[i23 >> 2] = i16;
   HEAP8[i22] = i16 & 255 & -9 | i6 & 8;
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i9, 1);
   __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i7, i8, 0);
   i6 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i16 = i6 + 8 | 0;
     i19 = i16 | 0;
     i18 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     HEAP32[i19 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   i6 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i16 = i6 + 8 | 0;
     i18 = i16 | 0;
     i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     HEAP32[i18 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore16VisibleSelection22expandUsingGranularityENS_15TextGranularityE(i7, 1) | 0;
   __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i10, i7);
   i6 = i10 | 0;
   i2 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   __ZN7WebCore16VisibleSelectionD2Ev(i7);
   i24 = i2;
  } else {
   i20 = 16;
  }
 } while (0);
 if ((i20 | 0) == 16) {
  __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i11, i14 + 32 | 0);
  i14 = i11 | 0;
  i11 = HEAP32[i14 >> 2] | 0;
  HEAP32[i14 >> 2] = 0;
  i24 = i11;
 }
 if ((i24 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i11 = HEAP32[(HEAP32[i15 >> 2] | 0) + 32 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i25 = 0;
 } else {
  i25 = HEAP32[i11 + 72 >> 2] | 0;
 }
 i11 = i13 | 0;
 HEAP32[i11 >> 2] = i24;
 i14 = i24 | 0;
 HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 __ZN7WebCore18TextCheckingHelperC1EPNS_12EditorClientEN3WTF10PassRefPtrINS_5RangeEEE(i12, i25, i13);
 i13 = HEAP32[(HEAP32[i15 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((i13 | 0) == 0) {
   i26 = 0;
  } else {
   i15 = HEAP32[i13 + 72 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i26 = 0;
    break;
   }
   i26 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 32 >> 2] & 1](i15) | 0;
  }
 } while (0);
 __ZNK7WebCore18TextCheckingHelper40guessesForMisspelledOrUngrammaticalRangeEbRbS1_(i1, i12, i26, i3, i4);
 __ZN7WebCore18TextCheckingHelperD1Ev(i12);
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i11 = i12 | 0;
   i4 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i12);
    __ZN3WTF8fastFreeEPv(i12);
    break;
   } else {
    HEAP32[i11 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i12 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 if ((i12 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i24);
  __ZN3WTF8fastFreeEPv(i24);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i14 >> 2] = i12;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore6Editor28replaceSelectionWithFragmentEN3WTF10PassRefPtrINS_16DocumentFragmentEEEbbb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 40 | 0;
 i12 = i6 + 56 | 0;
 i13 = i6 + 64 | 0;
 i14 = i6 + 72 | 0;
 i15 = i1 | 0;
 i16 = HEAP32[(HEAP32[i15 >> 2] | 0) + 468 >> 2] | 0;
 if ((HEAP32[i16 + 84 >> 2] | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 if (!(__ZNK7WebCore16VisibleSelection17isContentEditableEv(i16 + 32 | 0) | 0)) {
  STACKTOP = i6;
  return;
 }
 i16 = i2 | 0;
 i2 = HEAP32[i16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i17 = i3 ? 41 : 40;
 i3 = i4 ? i17 | 2 : i17;
 i17 = HEAP32[(HEAP32[i15 >> 2] | 0) + 456 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 i16 = __ZN3WTF10fastMallocEj(200) | 0;
 i4 = i7 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN7WebCore23ReplaceSelectionCommandC1ERNS_8DocumentEN3WTF10PassRefPtrINS_16DocumentFragmentEEEjNS_10EditActionE(i16, i17, i7, i5 ? i3 | 4 : i3, 29);
 i3 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 8 | 0;
   i5 = i4 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i3 = i8 | 0;
 HEAP32[i3 >> 2] = i16;
 __ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i8);
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 + 4 | 0;
   i16 = i3 | 0;
   i4 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i16 >> 2] = i4;
    break;
   }
   i4 = i3 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 3](i4);
  }
 } while (0);
 if ((HEAP8[i1 + 32 | 0] & 1) == 0) {
  __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(HEAP32[(HEAP32[i15 >> 2] | 0) + 468 >> 2] | 0, __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE, 1);
 }
 if (__ZNK7WebCore14FrameSelection17isInPasswordFieldEv(HEAP32[(HEAP32[i15 >> 2] | 0) + 468 >> 2] | 0) | 0) {
  STACKTOP = i6;
  return;
 }
 i8 = HEAP32[(HEAP32[i15 >> 2] | 0) + 32 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i4 = HEAP32[i8 + 72 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 1](i4) | 0)) {
  STACKTOP = i6;
  return;
 }
 i4 = __ZNK7WebCore16VisibleSelection19rootEditableElementEv((HEAP32[(HEAP32[i15 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0;
 i8 = i4 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i4 = HEAP32[(HEAP32[i15 >> 2] | 0) + 456 >> 2] | 0;
 __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i10, i8);
 __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i11, i8);
 __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i9, i4, i10, i11);
 i4 = i9 | 0;
 i9 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i11 = i4 + 8 | 0;
   i8 = i11 | 0;
   i15 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 + 8 | 0;
   i11 = i10 | 0;
   i15 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i1 + 40 >> 2] | 0;
 i1 = i13 | 0;
 HEAP32[i1 >> 2] = i9;
 i10 = (i9 | 0) == 0;
 if (i10) {
  i15 = i14 | 0;
  HEAP32[i15 >> 2] = 0;
  i18 = i15;
 } else {
  i15 = i9 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  i11 = i14 | 0;
  HEAP32[i11 >> 2] = i9;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  i18 = i11;
 }
 __ZN7WebCore17SpellCheckRequest6createEjNS_23TextCheckingProcessTypeEN3WTF10PassRefPtrINS_5RangeEEES5_(i12, 6, 0, i13, i14);
 __ZN7WebCore12SpellChecker18requestCheckingForEN3WTF10PassRefPtrINS_17SpellCheckRequestEEE(i4, i12);
 i4 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i12 = i4 + 4 | 0;
   i14 = i12 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i14 >> 2] = i13;
    break;
   }
   i13 = i12 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 3](i13);
  }
 } while (0);
 i4 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i18 = i4 | 0;
   i13 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i18 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i1 = i4 | 0;
   i13 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i1 >> 2] = i13;
    break;
   }
  }
 } while (0);
 if (i10) {
  STACKTOP = i6;
  return;
 }
 i10 = i9 | 0;
 i4 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i10 >> 2] = i4;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore6Editor33insertTextWithoutSendingTextEventERKN3WTF6StringEbPNS_9TextEventE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i6 = i5 | 0;
 i7 = i5 + 64 | 0;
 i8 = i5 + 72 | 0;
 i9 = i2 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
  STACKTOP = i5;
  return i11 | 0;
 }
 if ((HEAP32[i10 + 4 >> 2] | 0) == 0) {
  i11 = 0;
  STACKTOP = i5;
  return i11 | 0;
 }
 i10 = i4;
 __ZN7WebCore6Editor19selectionForCommandEPNS_5EventE(i6, i1, i10);
 do {
  if (__ZNK7WebCore16VisibleSelection17isContentEditableEv(i6) | 0) {
   __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i7, i6);
   i12 = i7 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i12 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i14 = HEAP32[i12 + 72 >> 2] | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     if (!(FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i14 >> 2] | 0) + 56 >> 2] & 1](i14, i2, i13, 0) | 0)) {
      break;
     }
     i14 = HEAP32[i9 >> 2] | 0;
     do {
      if ((i14 | 0) == 0) {
       i15 = 0;
       i16 = 15;
      } else {
       if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
        i15 = 0;
        i16 = 15;
        break;
       }
       i17 = i14 + 8 | 0;
       if ((HEAP32[i14 + 16 >> 2] & 32 | 0) == 0) {
        i18 = HEAP16[HEAP32[i17 >> 2] >> 1] | 0;
       } else {
        i18 = HEAPU8[HEAP32[i17 >> 2] | 0] | 0;
       }
       if ((i18 & 65535) >>> 0 >= 128 >>> 0) {
        i19 = (_u_charDirection(i18 & 65535) | 0) == 9;
        break;
       }
       if ((i18 & 65535) >>> 0 >= 33 >>> 0) {
        i19 = 0;
        break;
       }
       if (i18 << 16 >> 16 == 32) {
        i19 = 1;
       } else {
        i15 = i18;
        i16 = 15;
       }
      }
     } while (0);
     if ((i16 | 0) == 15) {
      i19 = (i15 - 9 & 65535) >>> 0 < 5 >>> 0;
     }
     __ZN7WebCore6Editor38updateMarkersForWordsAffectedByEditingEb(i1, i19);
     if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i9 >> 2] | 0, H_BASE + 128 | 0) | 0)) {
      __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i9 >> 2] | 0, H_BASE + 72 | 0) | 0;
     }
     i14 = HEAP32[i9 >> 2] | 0;
     do {
      if ((i14 | 0) != 0) {
       if ((HEAP32[i14 + 4 >> 2] | 0) != 1) {
        break;
       }
       i17 = i14 + 8 | 0;
       if ((HEAP32[i14 + 16 >> 2] & 32 | 0) == 0) {
        i20 = HEAP16[HEAP32[i17 >> 2] >> 1] | 0;
       } else {
        i20 = HEAPU8[HEAP32[i17 >> 2] | 0] | 0;
       }
       _u_ispunct(i20 & 65535) | 0;
      }
     } while (0);
     __ZN7WebCore6Editor19selectionForCommandEPNS_5EventE(i8, i1, i10);
     __ZN7WebCore16VisibleSelectionaSEOS0_(i6, i8) | 0;
     __ZN7WebCore16VisibleSelectionD2Ev(i8);
     if (!(__ZNK7WebCore16VisibleSelection17isContentEditableEv(i6) | 0)) {
      break;
     }
     i14 = HEAP32[i6 + 24 >> 2] | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     i17 = HEAP32[i14 + 8 >> 2] | 0;
     i21 = i14 + 8 | 0;
     i22 = i21 - 8 | 0;
     HEAP32[i21 >> 2] = i17;
     do {
      if ((i17 | 0) < 1) {
       if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i22);
      }
     } while (0);
     i22 = HEAP32[(HEAP32[i14 + 20 >> 2] | 0) + 8 >> 2] | 0;
     i21 = i22 + 8 | 0;
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
     do {
      if ((i4 | 0) == 0) {
       i23 = 0;
       i16 = 34;
      } else {
       i21 = HEAP32[i4 + 60 >> 2] | 0;
       if ((i21 | 0) == 6) {
        __ZN7WebCore16DictationCommand10insertTextEPNS_8DocumentERKN3WTF6StringERKNS3_6VectorINS_20DictationAlternativeELj0ENS3_15CrashOnOverflowEEERKNS_16VisibleSelectionE(i22, i2, i4 + 76 | 0, i6);
        break;
       } else {
        i23 = (i21 | 0) == 2 ? 2 : 0;
        i16 = 34;
        break;
       }
      }
     } while (0);
     if ((i16 | 0) == 34) {
      __ZN7WebCore13TypingCommand10insertTextERNS_8DocumentERKN3WTF6StringERKNS_16VisibleSelectionEjNS0_19TextCompositionTypeE(i22, i2, i6, i3 & 1, i23);
     }
     i14 = HEAP32[i22 + 332 >> 2] | 0;
     do {
      if ((i14 | 0) != 0) {
       i21 = HEAP32[i14 + 32 >> 2] | 0;
       if ((i21 | 0) == 0) {
        break;
       }
       __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(HEAP32[(__ZNK7WebCore15FocusController18focusedOrMainFrameEv(HEAP32[i21 + 32 >> 2] | 0) | 0) + 468 >> 2] | 0, __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE, 1);
      }
     } while (0);
     i14 = i22 + 8 | 0;
     i21 = i14 | 0;
     i17 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   if ((i13 | 0) == 0) {
    i24 = 1;
    break;
   }
   i12 = i13 | 0;
   i14 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i13);
    __ZN3WTF8fastFreeEPv(i13);
    i24 = 1;
    break;
   } else {
    HEAP32[i12 >> 2] = i14;
    i24 = 1;
    break;
   }
  } else {
   i24 = 0;
  }
 } while (0);
 __ZN7WebCore16VisibleSelectionD2Ev(i6);
 i11 = i24;
 STACKTOP = i5;
 return i11 | 0;
}
function __ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i8 = (i2 | 0) == 0;
 if (i8) {
  i9 = 0;
 } else {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = (i3 | 0) == 0;
 if (i11) {
  i12 = 0;
 } else {
  i12 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i13 = _llvm_uadd_with_overflow_i32(i9 | 0, i12 | 0) | 0;
 i12 = i13;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i8) {
  i14 = 9;
 } else {
  if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
   i14 = 9;
  }
 }
 do {
  if ((i14 | 0) == 9) {
   if (!i11) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i12 | 0) == 0) {
     i2 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i2 | 0) == 0) {
      i14 = 26;
      break;
     }
     i8 = i2 | 0;
     HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
     i15 = i2;
     i16 = 0;
    } else {
     if (i12 >>> 0 > 4294967275 >>> 0) {
      i14 = 26;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i12 + 20 | 0);
     i2 = i6 | 0;
     i8 = HEAP32[i2 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     if ((i8 | 0) == 0) {
      i14 = 26;
      break;
     }
     i2 = i8 + 20 | 0;
     HEAP32[i8 >> 2] = 2;
     HEAP32[i8 + 4 >> 2] = i12;
     HEAP32[i8 + 8 >> 2] = i2;
     HEAP32[i8 + 12 >> 2] = 0;
     HEAP32[i8 + 16 >> 2] = 32;
     i15 = i8;
     i16 = i2;
    }
   } while (0);
   if ((i14 | 0) == 26) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i2 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     i17 = 0;
    } else {
     i8 = HEAP32[i2 + 4 >> 2] | 0;
     i13 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i18 = i2;
     } else {
      i9 = 0;
      while (1) {
       HEAP8[i16 + i9 | 0] = HEAP8[i13 + i9 | 0] | 0;
       i9 = i9 + 1 | 0;
       if (i9 >>> 0 >= i8 >>> 0) {
        break;
       }
      }
      i8 = HEAP32[i7 >> 2] | 0;
      if ((i8 | 0) == 0) {
       i17 = 0;
       break;
      } else {
       i18 = i8;
      }
     }
     i17 = HEAP32[i18 + 4 >> 2] | 0;
    }
   } while (0);
   i2 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i8 = HEAP32[i2 + 4 >> 2] | 0;
     i9 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     } else {
      i19 = 0;
     }
     while (1) {
      HEAP8[i16 + (i19 + i17) | 0] = HEAP8[i9 + i19 | 0] | 0;
      i19 = i19 + 1 | 0;
      if (i19 >>> 0 >= i8 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i12 | 0) == 0) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i14 = 48;
    break;
   }
   i19 = i15 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
   i20 = i15;
   i21 = 0;
  } else {
   if (i12 >>> 0 > 2147483637 >>> 0) {
    i14 = 48;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i12 << 1) + 20 | 0);
   i15 = i5 | 0;
   i19 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i19 | 0) == 0) {
    i14 = 48;
    break;
   }
   i15 = i19 + 20 | 0;
   HEAP32[i19 >> 2] = 2;
   HEAP32[i19 + 4 >> 2] = i12;
   HEAP32[i19 + 8 >> 2] = i15;
   HEAP32[i19 + 12 >> 2] = 0;
   HEAP32[i19 + 16 >> 2] = 0;
   i20 = i19;
   i21 = i15;
  }
 } while (0);
 if ((i14 | 0) == 48) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i22 = 0;
  } else {
   i12 = HEAP32[i14 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i14 + 16 >> 2] & 32 | 0) == 0) {
     i5 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     } else {
      i23 = 0;
     }
     while (1) {
      HEAP16[i21 + (i23 << 1) >> 1] = HEAP16[i5 + (i23 << 1) >> 1] | 0;
      i23 = i23 + 1 | 0;
      if (i23 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
    } else {
     i5 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     } else {
      i24 = 0;
     }
     while (1) {
      HEAP16[i21 + (i24 << 1) >> 1] = HEAPU8[i5 + i24 | 0] | 0;
      i24 = i24 + 1 | 0;
      if (i24 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i12 = HEAP32[i7 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i22 = 0;
    break;
   }
   i22 = HEAP32[i12 + 4 >> 2] | 0;
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = HEAP32[i7 + 4 >> 2] | 0;
   if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i25 = 0;
    }
    while (1) {
     HEAP16[i21 + (i25 + i22 << 1) >> 1] = HEAP16[i24 + (i25 << 1) >> 1] | 0;
     i25 = i25 + 1 | 0;
     if (i25 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   } else {
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i26 = 0;
    }
    while (1) {
     HEAP16[i21 + (i26 + i22 << 1) >> 1] = HEAPU8[i24 + i26 | 0] | 0;
     i26 = i26 + 1 | 0;
     if (i26 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore6Editor19deleteWithDirectionENS_18SelectionDirectionENS_15TextGranularityEbb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i1 | 0;
 if ((__ZNK7WebCore16VisibleSelection19rootEditableElementEv((HEAP32[(HEAP32[i10 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0) == 0) {
  i11 = 0;
  STACKTOP = i6;
  return i11 | 0;
 }
 i12 = HEAP32[i10 >> 2] | 0;
 i13 = HEAP32[i12 + 468 >> 2] | 0;
 do {
  if ((HEAP32[i13 + 84 >> 2] | 0) == 2) {
   if (i5) {
    i14 = HEAP32[i12 + 456 >> 2] | 0;
    i15 = HEAP32[i12 + 32 >> 2] | 0;
    do {
     if ((i15 | 0) == 0) {
      i16 = 0;
     } else {
      i17 = HEAP32[i15 + 72 >> 2] | 0;
      if ((i17 | 0) == 0) {
       i16 = 0;
       break;
      }
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 16 >> 2] & 1](i17) | 0)) {
       i16 = 0;
       break;
      }
      i16 = (HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 468 >> 2] | 0) + 108 >> 2] | 0) == 1 ? 16 : 0;
     }
    } while (0);
    __ZN7WebCore13TypingCommand16deleteKeyPressedERNS_8DocumentEjNS_15TextGranularityE(i14, i16, i3);
    if ((HEAP8[i1 + 32 | 0] & 1) != 0) {
     break;
    }
    __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(HEAP32[(HEAP32[i10 >> 2] | 0) + 468 >> 2] | 0, __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE, 1);
    break;
   }
   do {
    if (i4) {
     __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i9, i13 + 32 | 0);
     i15 = i9 | 0;
     i17 = HEAP32[i15 >> 2] | 0;
     i18 = i1 + 33 | 0;
     i19 = i1 + 36 | 0;
     if ((HEAP8[i18] & 1) != 0) {
      __ZN7WebCore8KillRing16startNewSequenceEv(HEAP32[i19 >> 2] | 0);
     }
     __ZN7WebCore9plainTextEPKNS_5RangeENS_20TextIteratorBehaviorEb(i7, i17, 0, 0);
     __ZN7WebCore8KillRing6appendERKN3WTF6StringE(HEAP32[i19 >> 2] | 0, i7);
     HEAP8[i18] = 0;
     i18 = HEAP32[i7 >> 2] | 0;
     do {
      if ((i18 | 0) != 0) {
       i19 = i18 | 0;
       i17 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
       if ((i17 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i18);
        break;
       } else {
        HEAP32[i19 >> 2] = i17;
        break;
       }
      }
     } while (0);
     i18 = HEAP32[i15 >> 2] | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     i17 = i18 | 0;
     i19 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i18);
      __ZN3WTF8fastFreeEPv(i18);
      break;
     } else {
      HEAP32[i17 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i14 = HEAP32[i10 >> 2] | 0;
   i19 = HEAP32[i14 + 32 >> 2] | 0;
   do {
    if ((i19 | 0) == 0) {
     i20 = 0;
     i21 = i14;
    } else {
     i17 = HEAP32[i19 + 72 >> 2] | 0;
     if ((i17 | 0) == 0) {
      i20 = 0;
      i21 = i14;
      break;
     }
     i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 16 >> 2] & 1](i17) | 0;
     i17 = HEAP32[i10 >> 2] | 0;
     if (!i18) {
      i20 = 0;
      i21 = i17;
      break;
     }
     i20 = (HEAP32[(HEAP32[i17 + 468 >> 2] | 0) + 108 >> 2] | 0) == 1;
     i21 = i17;
    }
   } while (0);
   if ((HEAP32[(HEAP32[i21 + 468 >> 2] | 0) + 84 >> 2] | 0) == 0) {
    break;
   }
   i14 = HEAP32[i21 + 456 >> 2] | 0;
   i19 = __ZN3WTF10fastMallocEj(344) | 0;
   __ZN7WebCore22DeleteSelectionCommandC1ERNS_8DocumentEbbbbb(i19, i14, i20, 1, 0, 0, 1);
   i14 = i8 | 0;
   HEAP32[i14 >> 2] = i19;
   __ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i8);
   i19 = HEAP32[i14 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i14 = i19 + 4 | 0;
   i19 = i14 | 0;
   i17 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i19 >> 2] = i17;
    break;
   }
   i17 = i14 - 4 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 3](i17);
  } else {
   i17 = HEAP32[i12 + 32 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i22 = 0;
    } else {
     i14 = HEAP32[i17 + 72 >> 2] | 0;
     if ((i14 | 0) == 0) {
      i22 = 0;
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] & 1](i14) | 0)) {
      i22 = 0;
      break;
     }
     i22 = (HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 468 >> 2] | 0) + 108 >> 2] | 0) == 1 ? 16 : 0;
    }
   } while (0);
   i17 = i4 ? i22 | 2 : i22;
   if ((i2 | 0) == 0 | (i2 | 0) == 2) {
    __ZN7WebCore13TypingCommand23forwardDeleteKeyPressedERNS_8DocumentEjNS_15TextGranularityE(HEAP32[(HEAP32[i10 >> 2] | 0) + 456 >> 2] | 0, i17, i3);
   } else if ((i2 | 0) == 1 | (i2 | 0) == 3) {
    __ZN7WebCore13TypingCommand16deleteKeyPressedERNS_8DocumentEjNS_15TextGranularityE(HEAP32[(HEAP32[i10 >> 2] | 0) + 456 >> 2] | 0, i17, i3);
   }
   if ((HEAP8[i1 + 32 | 0] & 1) != 0) {
    break;
   }
   __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(HEAP32[(HEAP32[i10 >> 2] | 0) + 468 >> 2] | 0, __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE, 1);
  }
 } while (0);
 if (!i4) {
  i11 = 1;
  STACKTOP = i6;
  return i11 | 0;
 }
 HEAP8[i1 + 33 | 0] = 0;
 i11 = 1;
 STACKTOP = i6;
 return i11 | 0;
}
function __ZNK7WebCore6Editor16hasBidiSelectionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 48 | 0;
 i7 = i2 + 64 | 0;
 i8 = i1 | 0;
 i1 = HEAP32[(HEAP32[i8 >> 2] | 0) + 468 >> 2] | 0;
 i9 = HEAP32[i1 + 84 >> 2] | 0;
 do {
  if ((i9 | 0) == 2) {
   i10 = i4 | 0;
   i11 = HEAP32[i1 + 56 >> 2] | 0;
   HEAP32[i10 >> 2] = i11;
   if ((i11 | 0) == 0) {
    i12 = i4 + 8 | 0;
    i13 = 0;
    i14 = i12;
    i15 = i12;
   } else {
    i12 = i11 + 8 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
    i12 = i4 + 8 | 0;
    i11 = i12;
    i13 = HEAP32[i11 >> 2] & -8;
    i14 = i12;
    i15 = i11;
   }
   HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 60 >> 2];
   i11 = HEAP32[i1 + 64 >> 2] | 0;
   i12 = i13 | i11 & 7;
   HEAP32[i15 >> 2] = i12;
   HEAP8[i14] = i12 & 255 & -9 | i11 & 8;
   __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i3, i4, 1);
   i11 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i12 = i11 + 8 | 0;
     i16 = i12 | 0;
     i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
    }
   } while (0);
   i12 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i17 = i12 + 8 | 0;
     i16 = i17 | 0;
     i18 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
    }
   } while (0);
   i12 = HEAP32[(HEAP32[i8 >> 2] | 0) + 468 >> 2] | 0;
   i10 = i6 | 0;
   i17 = HEAP32[i12 + 68 >> 2] | 0;
   HEAP32[i10 >> 2] = i17;
   if ((i17 | 0) != 0) {
    i18 = i17 + 8 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   }
   HEAP32[i6 + 4 >> 2] = HEAP32[i12 + 72 >> 2];
   i18 = HEAP32[i12 + 76 >> 2] | 0;
   i12 = i6 + 8 | 0;
   i17 = i12;
   i16 = HEAP32[i17 >> 2] & -8 | i18 & 7;
   HEAP32[i17 >> 2] = i16;
   HEAP8[i12] = i16 & 255 & -9 | i18 & 8;
   __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i5, i6, 1);
   i18 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i16 = i18 + 8 | 0;
     i12 = i16 | 0;
     i17 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     HEAP32[i12 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   i16 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i17 = i16 + 8 | 0;
     i12 = i17 | 0;
     i19 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     HEAP32[i12 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
    }
   } while (0);
   i16 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(i11, 1) | 0;
   if ((i16 | 0) == (__ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(i18, 1) | 0)) {
    i20 = i11;
    break;
   } else {
    i21 = 0;
   }
   STACKTOP = i2;
   return i21 | 0;
  } else if ((i9 | 0) == 0) {
   i21 = 0;
   STACKTOP = i2;
   return i21 | 0;
  } else {
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i7, i1 + 56 | 0, HEAP32[i1 + 80 >> 2] | 0);
   i16 = i7 | 0;
   i10 = HEAP32[i16 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i20 = 0;
    break;
   }
   i17 = HEAP32[i10 + 8 >> 2] | 0;
   i19 = i10 + 8 | 0;
   i12 = i19 - 8 | 0;
   HEAP32[i19 >> 2] = i17;
   do {
    if ((i17 | 0) < 1) {
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12);
    }
   } while (0);
   i12 = HEAP32[i16 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i20 = i10;
    break;
   }
   i19 = i12 + 8 | 0;
   i12 = i19 | 0;
   i17 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i17;
   if ((i17 | 0) >= 1) {
    i20 = i10;
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    i20 = i10;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
   i20 = i10;
  }
 } while (0);
 i7 = i20 + 32 | 0;
 if ((HEAP32[i20 + 12 >> 2] & 2048 | 0) == 0) {
  i22 = i7 | 0;
 } else {
  i22 = HEAP32[i7 >> 2] | 0;
 }
 i7 = HEAP32[i22 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i21 = 0;
  STACKTOP = i2;
  return i21 | 0;
 } else {
  i23 = i7;
 }
 while (1) {
  if ((HEAP32[i23 + 20 >> 2] & 768 | 0) != 256) {
   if ((HEAP32[i23 + 24 >> 2] & 32 | 0) != 0) {
    break;
   }
  }
  i7 = HEAP32[i23 + 8 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i21 = 0;
   i24 = 42;
   break;
  } else {
   i23 = i7 | 0;
  }
 }
 if ((i24 | 0) == 42) {
  STACKTOP = i2;
  return i21 | 0;
 }
 if ((HEAP32[(HEAP32[i23 + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) == 0) {
  i21 = 1;
  STACKTOP = i2;
  return i21 | 0;
 }
 i21 = __ZNK7WebCore15RenderBlockFlow24containsNonZeroBidiLevelEv(i23) | 0;
 STACKTOP = i2;
 return i21 | 0;
}
function __ZN7WebCore6Editor24computeAndSetTypingStyleEPNS_15StylePropertiesENS_10EditActionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 48 | 0;
 do {
  if ((i2 | 0) != 0) {
   i10 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i10 & 4 | 0) == 0) {
    i11 = i10 >>> 3;
   } else {
    i11 = HEAP32[i2 + 16 >> 2] | 0;
   }
   if ((i11 | 0) == 0) {
    break;
   }
   i10 = i1 | 0;
   i12 = HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 468 >> 2] | 0) + 116 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i13 = __ZN3WTF10fastMallocEj(16) | 0;
    __ZN7WebCore12EditingStyleC1EPKNS_15StylePropertiesE(i13, i2);
    i14 = i13;
   } else {
    __ZNK7WebCore12EditingStyle4copyEv(i5, i12);
    i12 = i5 | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    __ZN7WebCore12EditingStyle17overrideWithStyleEPKNS_15StylePropertiesE(i13, i2);
    i14 = i13;
   }
   i13 = HEAP32[(HEAP32[i10 >> 2] | 0) + 468 >> 2] | 0;
   if ((HEAP32[i13 + 84 >> 2] | 0) == 2) {
    i15 = 1;
   } else {
    i15 = HEAP32[i13 + 80 >> 2] | 0;
   }
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i7, i13 + 56 | 0, i15);
   i13 = i6 | 0;
   i12 = i7 | 0;
   i16 = HEAP32[i12 >> 2] | 0;
   HEAP32[i13 >> 2] = i16;
   if ((i16 | 0) != 0) {
    i17 = i16 + 8 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
   }
   HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
   i17 = HEAP32[i7 + 8 >> 2] | 0;
   i16 = i6 + 8 | 0;
   i18 = i16;
   i19 = HEAP32[i18 >> 2] & -8 | i17 & 7;
   HEAP32[i18 >> 2] = i19;
   HEAP8[i16] = i19 & 255 & -9 | i17 & 8;
   __ZN7WebCore12EditingStyle16prepareToApplyAtERKNS_8PositionENS0_30ShouldPreserveWritingDirectionE(i14, i6, 0);
   i17 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 8 | 0;
     i19 = i13 | 0;
     i16 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     HEAP32[i19 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
    }
   } while (0);
   i17 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 8 | 0;
     i16 = i13 | 0;
     i19 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore12EditingStyle31extractAndRemoveBlockPropertiesEv(i8, i14);
   i17 = i8 | 0;
   i12 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   do {
    if (!(__ZNK7WebCore12EditingStyle7isEmptyEv(i12) | 0)) {
     i17 = HEAP32[(HEAP32[i10 >> 2] | 0) + 456 >> 2] | 0;
     i13 = __ZN3WTF10fastMallocEj(204) | 0;
     __ZN7WebCore17ApplyStyleCommandC1ERNS_8DocumentEPKNS_12EditingStyleENS_10EditActionENS0_14EPropertyLevelE(i13, i17, i12, i3, 0);
     i17 = i9 | 0;
     HEAP32[i17 >> 2] = i13;
     __ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i9);
     i13 = HEAP32[i17 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     i17 = i13 + 4 | 0;
     i13 = i17 | 0;
     i19 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i13 >> 2] = i19;
      break;
     }
     i19 = i17 - 4 | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 3](i19);
    }
   } while (0);
   i19 = HEAP32[(HEAP32[i10 >> 2] | 0) + 468 >> 2] | 0;
   i17 = (i14 | 0) == 0;
   if (!i17) {
    i13 = i14 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   }
   i13 = i19 + 116 | 0;
   i19 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i14;
   do {
    if ((i19 | 0) != 0) {
     i13 = i19 | 0;
     i16 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) == 0) {
      __ZN7WebCore12EditingStyleD1Ev(i19);
      __ZN3WTF8fastFreeEPv(i19);
      break;
     } else {
      HEAP32[i13 >> 2] = i16;
      break;
     }
    }
   } while (0);
   do {
    if ((i12 | 0) != 0) {
     i19 = i12 | 0;
     i10 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) == 0) {
      __ZN7WebCore12EditingStyleD1Ev(i12);
      __ZN3WTF8fastFreeEPv(i12);
      break;
     } else {
      HEAP32[i19 >> 2] = i10;
      break;
     }
    }
   } while (0);
   if (i17) {
    STACKTOP = i4;
    return;
   }
   i12 = i14 | 0;
   i10 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i14);
    __ZN3WTF8fastFreeEPv(i14);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i12 >> 2] = i10;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i14 = (HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0) + 116 | 0;
 i1 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i14 = i1 | 0;
 i9 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) == 0) {
  __ZN7WebCore12EditingStyleD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i14 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore6Editor23getCompositionSelectionERjS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i1 + 8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = 0;
  STACKTOP = i4;
  return i9 | 0;
 }
 i10 = i1 | 0;
 i11 = HEAP32[(HEAP32[i10 >> 2] | 0) + 468 >> 2] | 0;
 i12 = i5 | 0;
 i13 = HEAP32[i11 + 56 >> 2] | 0;
 HEAP32[i12 >> 2] = i13;
 if ((i13 | 0) == 0) {
  i14 = i5 + 8 | 0;
  i15 = 0;
  i16 = 0;
  i17 = i8;
  i18 = i14;
  i19 = i14;
 } else {
  i14 = i13 + 8 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
  i14 = i5 + 8 | 0;
  i13 = i14;
  i15 = HEAP32[i13 >> 2] & -8;
  i16 = HEAP32[i12 >> 2] | 0;
  i17 = HEAP32[i7 >> 2] | 0;
  i18 = i14;
  i19 = i13;
 }
 i13 = i5 + 4 | 0;
 HEAP32[i13 >> 2] = HEAP32[i11 + 60 >> 2];
 i14 = HEAP32[i11 + 64 >> 2] | 0;
 i11 = i15 | i14 & 7;
 HEAP32[i19 >> 2] = i11;
 HEAP8[i18] = i11 & 255 & -9 | i14 & 8;
 if ((i17 | 0) == (i16 | 0)) {
  i14 = HEAP32[(HEAP32[i10 >> 2] | 0) + 468 >> 2] | 0;
  i10 = i6 | 0;
  i11 = HEAP32[i14 + 68 >> 2] | 0;
  HEAP32[i10 >> 2] = i11;
  if ((i11 | 0) == 0) {
   i20 = 0;
   i21 = i17;
  } else {
   i17 = i11 + 8 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
   i20 = HEAP32[i10 >> 2] | 0;
   i21 = HEAP32[i7 >> 2] | 0;
  }
  i7 = i6 + 4 | 0;
  HEAP32[i7 >> 2] = HEAP32[i14 + 72 >> 2];
  i17 = HEAP32[i14 + 76 >> 2] | 0;
  i14 = i6 + 8 | 0;
  i11 = i14;
  i15 = HEAP32[i11 >> 2] & -8 | i17 & 7;
  HEAP32[i11 >> 2] = i15;
  HEAP8[i14] = i15 & 255 & -9 | i17 & 8;
  if ((i21 | 0) == (i20 | 0)) {
   do {
    if ((HEAP8[i18] & 8) == 0) {
     i21 = HEAP32[i19 >> 2] & 7;
     if (!((i21 | 0) == 2 | (i21 | 0) == 4)) {
      i22 = 11;
      break;
     }
     i23 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i5) | 0;
    } else {
     i22 = 11;
    }
   } while (0);
   if ((i22 | 0) == 11) {
    i23 = HEAP32[i13 >> 2] | 0;
   }
   i21 = i1 + 12 | 0;
   do {
    if (i23 >>> 0 < (HEAP32[i21 >> 2] | 0) >>> 0) {
     i24 = 0;
    } else {
     do {
      if ((HEAP8[i14] & 8) == 0) {
       i17 = HEAP32[i11 >> 2] & 7;
       if (!((i17 | 0) == 2 | (i17 | 0) == 4)) {
        i22 = 16;
        break;
       }
       i25 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i6) | 0;
      } else {
       i22 = 16;
      }
     } while (0);
     if ((i22 | 0) == 16) {
      i25 = HEAP32[i7 >> 2] | 0;
     }
     i17 = i1 + 16 | 0;
     if (i25 >>> 0 > (HEAP32[i17 >> 2] | 0) >>> 0) {
      i24 = 0;
      break;
     }
     i15 = HEAP8[i18] | 0;
     do {
      if ((i15 & 8) == 0) {
       i8 = HEAP32[i19 >> 2] | 0;
       i26 = i8 & 7;
       if ((i26 | 0) == 2 | (i26 | 0) == 4) {
        i26 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i5) | 0;
        i27 = i26;
        i28 = HEAP8[i18] | 0;
        break;
       } else {
        i29 = i8 & 255;
        i22 = 22;
        break;
       }
      } else {
       i29 = i15;
       i22 = 22;
      }
     } while (0);
     if ((i22 | 0) == 22) {
      i27 = HEAP32[i13 >> 2] | 0;
      i28 = i29;
     }
     HEAP32[i2 >> 2] = i27 - (HEAP32[i21 >> 2] | 0);
     do {
      if ((i28 & 8) == 0) {
       i15 = HEAP32[i19 >> 2] & 7;
       if (!((i15 | 0) == 2 | (i15 | 0) == 4)) {
        i22 = 26;
        break;
       }
       i30 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i5) | 0;
      } else {
       i22 = 26;
      }
     } while (0);
     if ((i22 | 0) == 26) {
      i30 = HEAP32[i13 >> 2] | 0;
     }
     HEAP32[i3 >> 2] = i30 - (HEAP32[i17 >> 2] | 0);
     i24 = 1;
    }
   } while (0);
   i31 = i24;
   i32 = HEAP32[i10 >> 2] | 0;
  } else {
   i31 = 0;
   i32 = i20;
  }
  do {
   if ((i32 | 0) != 0) {
    i20 = i32 + 8 | 0;
    i10 = i20 | 0;
    i24 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
    HEAP32[i10 >> 2] = i24;
    if ((i24 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
   }
  } while (0);
  i33 = i31;
  i34 = HEAP32[i12 >> 2] | 0;
 } else {
  i33 = 0;
  i34 = i16;
 }
 if ((i34 | 0) == 0) {
  i9 = i33;
  STACKTOP = i4;
  return i9 | 0;
 }
 i16 = i34 + 8 | 0;
 i34 = i16 | 0;
 i12 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
 HEAP32[i34 >> 2] = i12;
 if ((i12 | 0) >= 1) {
  i9 = i33;
  STACKTOP = i4;
  return i9 | 0;
 }
 if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
  i9 = i33;
  STACKTOP = i4;
  return i9 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
 i9 = i33;
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore6Editor4copyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 i7 = i1 | 0;
 do {
  if (!(__ZNK7WebCore14FrameSelection17isInPasswordFieldEv(HEAP32[(HEAP32[i7 >> 2] | 0) + 468 >> 2] | 0) | 0)) {
   if (__ZN7WebCore6Editor16dispatchCPPEventERKN3WTF12AtomicStringENS_21ClipboardAccessPolicyE(i1, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 88 | 0, 2) | 0) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 456 >> 2] | 0;
 do {
  if ((HEAP8[i8 + 1576 | 0] & 4) == 0) {
   i9 = 8;
  } else {
   i10 = __ZNK7WebCore8Document4bodyEv(i8) | 0;
   if ((i10 | 0) == 0) {
    i9 = 8;
    break;
   }
   i11 = HEAP32[i10 + 36 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i9 = 8;
    break;
   }
   if ((HEAP32[i11 + 12 >> 2] & 16 | 0) == 0) {
    i9 = 8;
    break;
   }
   if ((HEAP32[(HEAP32[i11 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i9 = 8;
   }
  }
 } while (0);
 do {
  if ((i9 | 0) == 8) {
   i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 468 >> 2] | 0;
   if ((HEAP32[i8 + 84 >> 2] | 0) == 2) {
    if (!(__ZNK7WebCore14FrameSelection17isInPasswordFieldEv(i8) | 0)) {
     break;
    }
   }
   __ZN7WebCore10systemBeepEv();
   STACKTOP = i2;
   return;
  }
 } while (0);
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i3, (HEAP32[(HEAP32[i7 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0);
 i9 = HEAP32[(HEAP32[i7 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i8 = HEAP32[i9 + 72 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 88 >> 2] & 3](i8, HEAP32[i3 >> 2] | 0);
  }
 } while (0);
 i9 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i3 = i9 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    HEAP32[i3 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[(HEAP32[i7 >> 2] | 0) + 468 >> 2] | 0;
 i8 = i4 | 0;
 i3 = HEAP32[i9 + 56 >> 2] | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i11 = i3 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 HEAP32[i4 + 4 >> 2] = HEAP32[i9 + 60 >> 2];
 i11 = HEAP32[i9 + 64 >> 2] | 0;
 i9 = i4 + 8 | 0;
 i3 = i9;
 i10 = HEAP32[i3 >> 2] & -8 | i11 & 7;
 HEAP32[i3 >> 2] = i10;
 HEAP8[i9] = i10 & 255 & -9 | i11 & 8;
 i11 = (__ZN7WebCore24enclosingTextFormControlERKNS_8PositionE(i4) | 0) == 0;
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 8 | 0;
   i10 = i8 | 0;
   i9 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 do {
  if (i11) {
   i4 = HEAP32[(HEAP32[i7 >> 2] | 0) + 456 >> 2] | 0;
   if ((HEAP8[i4 + 1576 | 0] & 4) == 0) {
    break;
   }
   __ZNK7WebCore8Document4bodyEv(i4) | 0;
  } else {
   __ZN7WebCore10Pasteboard21createForCopyAndPasteEv(i5);
   i4 = i5 | 0;
   i8 = HEAP32[i4 >> 2] | 0;
   if ((HEAP8[(HEAP32[(HEAP32[i7 >> 2] | 0) + 36 >> 2] | 0) + 189 | 0] & 64) == 0) {
    __ZNK7WebCore6Editor12selectedTextENS_20TextIteratorBehaviorE(i6, i1, 0);
   } else {
    __ZNK7WebCore6Editor12selectedTextENS_20TextIteratorBehaviorE(i6, i1, 128);
   }
   i9 = HEAP32[(HEAP32[i7 >> 2] | 0) + 32 >> 2] | 0;
   do {
    if ((i9 | 0) == 0) {
     i12 = 1;
    } else {
     i10 = HEAP32[i9 + 72 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i12 = 1;
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 16 >> 2] & 1](i10) | 0)) {
      i12 = 1;
      break;
     }
     i12 = (HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 468 >> 2] | 0) + 108 >> 2] | 0) != 1 | 0;
    }
   } while (0);
   __ZN7WebCore10Pasteboard14writePlainTextERKN3WTF6StringENS0_18SmartReplaceOptionE(i8, i6, i12);
   i9 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 | 0;
     i3 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i10 >> 2] = i3;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i4 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i9 | 0);
  }
 } while (0);
 i6 = HEAP32[(HEAP32[i7 >> 2] | 0) + 32 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = HEAP32[i6 + 72 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 92 >> 2] & 3](i7);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore6Editor14appliedEditingEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 64 | 0;
 i6 = i3 + 72 | 0;
 i7 = i3 + 80 | 0;
 i8 = i1 | 0;
 __ZN7WebCore8Document12updateLayoutEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 456 >> 2] | 0);
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[i2 + 148 >> 2] | 0;
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i4, i2 + 72 | 0);
 i2 = HEAP32[i9 >> 2] | 0;
 i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] & 1](i2) | 0;
 __ZN7WebCore6Editor27changeSelectionAfterCommandERKNS_16VisibleSelectionEj(i1, i4, i11 ? 32 : 0);
 i11 = HEAP32[i10 + 144 >> 2] | 0;
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i12 = i11 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = HEAP32[i10 + 148 >> 2] | 0;
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = i12;
 if ((i12 | 0) != 0) {
  i11 = i12 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 __ZN7WebCoreL36dispatchEditableContentChangedEventsEN3WTF10PassRefPtrINS_7ElementEEES3_(i5, i6);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 8 | 0;
   i5 = i10 | 0;
   i11 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 + 8 | 0;
   i10 = i2 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 40 >> 2] & 1](i6) | 0)) {
   i2 = (HEAP32[(HEAP32[i8 >> 2] | 0) + 468 >> 2] | 0) + 116 | 0;
   i11 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i2 = i11 | 0;
   i10 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i11);
    __ZN3WTF8fastFreeEPv(i11);
    break;
   } else {
    HEAP32[i2 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i6 = i1 + 4 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) != (HEAP32[i6 >> 2] | 0)) {
   HEAP32[i9 >> 2] = 0;
   i2 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i10;
   do {
    if ((i2 | 0) != 0) {
     i11 = i2 + 4 | 0;
     i5 = i11 | 0;
     i12 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) != 0) {
      HEAP32[i5 >> 2] = i12;
      break;
     }
     i12 = i11 - 4 | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 3](i12);
    }
   } while (0);
   i2 = HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i12 = HEAP32[i2 + 72 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i2 = HEAP32[(HEAP32[i12 >> 2] | 0) + 100 >> 2] | 0;
   i11 = __ZN7WebCore20CompositeEditCommand17ensureCompositionEv(HEAP32[i6 >> 2] | 0) | 0;
   i5 = i7 | 0;
   HEAP32[i5 >> 2] = i11;
   if ((i11 | 0) != 0) {
    i13 = i11 + 4 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   }
   FUNCTION_TABLE_vii[i2 & 3](i12, i7);
   i12 = HEAP32[i5 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i5 = i12 + 4 | 0;
   i12 = i5 | 0;
   i2 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i12 >> 2] = i2;
    break;
   }
   i2 = i5 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 3](i2);
  }
 } while (0);
 __ZN7WebCore6Editor38updateMarkersForWordsAffectedByEditingEb(i1, 1);
 i1 = HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i4);
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i8 | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i4);
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 76 >> 2] & 3](i8);
 __ZN7WebCore16VisibleSelectionD2Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore6Editor14setCompositionERKN3WTF6StringENS0_18SetCompositionModeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i1 | 0;
 __ZN7WebCore26UserTypingGestureIndicatorC1ERNS_5FrameE(i6, HEAP32[i9 >> 2] | 0);
 i10 = i1 + 32 | 0;
 if ((HEAP8[i10] & 1) == 0) {
  HEAP8[i10] = 1;
 }
 i11 = (i3 | 0) == 1;
 if (!i11) {
  __ZN7WebCore6Editor17selectCompositionEv(i1);
 }
 i3 = HEAP32[i9 >> 2] | 0;
 i12 = i3 + 468 | 0;
 if ((HEAP32[(HEAP32[i12 >> 2] | 0) + 84 >> 2] | 0) == 0) {
  if ((HEAP8[i10] & 1) == 0) {
   __ZN7WebCore26UserTypingGestureIndicatorD1Ev(i6);
   STACKTOP = i4;
   return;
  }
  HEAP8[i10] = 0;
  __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(HEAP32[i12 >> 2] | 0, __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE, 0);
  __ZN7WebCore26UserTypingGestureIndicatorD1Ev(i6);
  STACKTOP = i4;
  return;
 }
 i12 = HEAP32[i3 + 456 >> 2] | 0;
 i3 = HEAP32[i12 + 680 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i13 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 68 | 0;
   i14 = HEAP32[i12 + 336 >> 2] | 0;
   if ((i14 | 0) != 0) {
    i15 = i14 + 36 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   }
   i15 = __ZN3WTF10fastMallocEj(64) | 0;
   i16 = i5 | 0;
   HEAP32[i16 >> 2] = i14;
   __ZN7WebCore16CompositionEventC1ERKN3WTF12AtomicStringENS1_10PassRefPtrINS_9DOMWindowEEERKNS1_6StringE(i15, i13, i5, i2);
   i13 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i16 = i13 + 36 | 0;
     i14 = i16 | 0;
     i17 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i17 | 0) != 0) {
      HEAP32[i14 >> 2] = i17;
      break;
     }
     i17 = i16 - 36 | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 44 >> 2] & 3](i17);
    }
   } while (0);
   i13 = i7 | 0;
   HEAP32[i13 >> 2] = i15;
   i17 = i8 | 0;
   HEAP32[i17 >> 2] = 0;
   __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEERi(i3 | 0, i7, i17) | 0;
   i17 = HEAP32[i13 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   i13 = i17 + 8 | 0;
   i17 = i13 | 0;
   i16 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i17 >> 2] = i16;
    break;
   }
   i16 = i13 - 8 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 3](i16);
  }
 } while (0);
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i18 = 0;
 } else {
  i18 = (HEAP32[i7 + 4 >> 2] | 0) != 0;
 }
 if (!(i18 | i11)) {
  __ZN7WebCore13TypingCommand15deleteSelectionERNS_8DocumentEj(HEAP32[(HEAP32[i9 >> 2] | 0) + 456 >> 2] | 0, 0);
 }
 i18 = i1 + 8 | 0;
 i7 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 do {
  if ((i7 | 0) != 0) {
   i18 = i7 + 8 | 0;
   i3 = i18 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
  }
 } while (0);
 i7 = i1 + 24 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) != 0) {
   i18 = i1 + 28 | 0;
   if ((HEAP32[i18 >> 2] | 0) != 0) {
    HEAP32[i18 >> 2] = 0;
   }
   i18 = i1 + 20 | 0;
   i8 = HEAP32[i18 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   HEAP32[i18 >> 2] = 0;
   HEAP32[i7 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i8);
  }
 } while (0);
 __ZN7WebCore12EventHandler20handleTextInputEventERKN3WTF6StringEPNS_5EventENS_18TextEventInputTypeE(HEAP32[(HEAP32[i9 >> 2] | 0) + 472 >> 2] | 0, i2, 0, 2) | 0;
 if (i11) {
  __ZN7WebCore13TypingCommand11closeTypingEPNS_5FrameE(HEAP32[i9 >> 2] | 0);
 }
 if ((HEAP8[i10] & 1) == 0) {
  __ZN7WebCore26UserTypingGestureIndicatorD1Ev(i6);
  STACKTOP = i4;
  return;
 }
 HEAP8[i10] = 0;
 __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(HEAP32[(HEAP32[i9 >> 2] | 0) + 468 >> 2] | 0, __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE, 0);
 __ZN7WebCore26UserTypingGestureIndicatorD1Ev(i6);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore6Editor14canDeleteRangeEPNS_5RangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i3 = i1 | 0;
 i4 = i1 + 8 | 0;
 i5 = i1 + 24 | 0;
 i6 = i1 + 40 | 0;
 i7 = i1 + 56 | 0;
 i8 = i2 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i9 | 0) == 0 | (i10 | 0) == 0) {
  i11 = 0;
  STACKTOP = i1;
  return i11 | 0;
 }
 if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i9, 0, 1) | 0)) {
  i11 = 0;
  STACKTOP = i1;
  return i11 | 0;
 }
 if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i10, 0, 1) | 0)) {
  i11 = 0;
  STACKTOP = i1;
  return i11 | 0;
 }
 i10 = i1 + 16 | 0;
 HEAP32[i10 >> 2] = 0;
 do {
  if (__ZNK7WebCore5Range9collapsedERi(i2, i10) | 0) {
   i12 = i2 + 12 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   if ((i13 | 0) > -1) {
    i14 = i13;
   } else {
    i13 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i12 >> 2] = i13;
    i14 = i13;
   }
   i13 = HEAP32[i8 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i15 = i14;
   } else {
    i16 = i13 + 8 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
    i15 = HEAP32[i12 >> 2] | 0;
   }
   i12 = i3 | 0;
   HEAP32[i12 >> 2] = i13;
   HEAP32[i4 >> 2] = i15;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i6, i3, i4);
   i13 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i12 = i13 + 8 | 0;
     i16 = i12 | 0;
     i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i6, 1);
   i13 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i12 = i13 + 8 | 0;
     i17 = i12 | 0;
     i16 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
    }
   } while (0);
   __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i7, i5, 0);
   i13 = i7 | 0;
   i12 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i12 | 0) == 0) {
     i18 = 1;
    } else {
     i16 = i12 + 8 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     i16 = __ZNK7WebCore4Node19rootEditableElementEv(i12) | 0;
     i17 = (i16 | 0) != (__ZNK7WebCore4Node19rootEditableElementEv(i9) | 0);
     i16 = i12 + 8 | 0;
     i19 = i16 - 8 | 0;
     i20 = i16 | 0;
     i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     HEAP32[i20 >> 2] = i21;
     do {
      if ((i21 | 0) < 1) {
       if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i19);
      }
     } while (0);
     i19 = HEAP32[i13 >> 2] | 0;
     if ((i19 | 0) == 0) {
      i18 = i17;
      break;
     }
     i16 = i19 + 8 | 0;
     i19 = i16 | 0;
     i21 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     HEAP32[i19 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      i18 = i17;
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      i18 = i17;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
     i18 = i17;
    }
   } while (0);
   i13 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i12 = i13 + 8 | 0;
     i16 = i12 | 0;
     i21 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
    }
   } while (0);
   if (i18) {
    i11 = 0;
   } else {
    break;
   }
   STACKTOP = i1;
   return i11 | 0;
  }
 } while (0);
 i11 = 1;
 STACKTOP = i1;
 return i11 | 0;
}
function __ZNK7WebCore6Editor26selectionStartHasMarkerForENS_14DocumentMarker10MarkerTypeEii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i1 | 0;
 i1 = HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 468 >> 2] | 0) + 56 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i10 = 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 i11 = i1 + 8 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 i11 = i6 | 0;
 i12 = i1;
 L5 : while (1) {
  i13 = i12 + 12 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = (i14 & 2048 | 0) == 0;
  i16 = i12 + 32 | 0;
  if (i15) {
   i17 = i16 | 0;
  } else {
   i17 = HEAP32[i16 >> 2] | 0;
  }
  if ((HEAP32[i17 >> 2] | 0) == 0) {
   i18 = 0;
   break;
  }
  if (i15) {
   i19 = i16 | 0;
  } else {
   i19 = HEAP32[i16 >> 2] | 0;
  }
  i16 = HEAP32[(HEAP32[i19 >> 2] | 0) + 20 >> 2] | 0;
  if ((i16 & 768 | 0) == 256 | (i16 & 4096 | 0) != 0) {
   i18 = i12;
   break;
  }
  do {
   if ((i14 & 4 | 0) == 0) {
    i20 = i14;
   } else {
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 456 >> 2] & 1](i12) | 0)) {
     i20 = HEAP32[i13 >> 2] | 0;
     break;
    }
    __ZNK7WebCore26HTMLTextFormControlElement23visiblePositionForIndexEi(i6, i12, 1);
    i16 = HEAP32[i11 >> 2] | 0;
    if ((i16 | 0) == 0) {
     i18 = 0;
     break L5;
    }
    i15 = HEAP32[i16 + 8 >> 2] | 0;
    i21 = i16 + 8 | 0;
    i22 = i21 - 8 | 0;
    HEAP32[i21 >> 2] = i15;
    do {
     if ((i15 | 0) < 1) {
      if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i22);
     }
    } while (0);
    i22 = HEAP32[i11 >> 2] | 0;
    if ((i22 | 0) == 0) {
     i12 = i16;
     continue L5;
    }
    i21 = i22 + 8 | 0;
    i22 = i21 | 0;
    i15 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
    HEAP32[i22 >> 2] = i15;
    if ((i15 | 0) >= 1) {
     i12 = i16;
     continue L5;
    }
    if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
     i12 = i16;
     continue L5;
    }
    __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
    i12 = i16;
    continue L5;
   }
  } while (0);
  if ((i20 & 2 | 0) != 0) {
   i13 = HEAP32[i12 + 36 >> 2] | 0;
   if ((i13 | 0) != 0) {
    i12 = i13;
    continue;
   }
  }
  i13 = HEAP32[i12 + 28 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i18 = 0;
   break;
  } else {
   i12 = i13;
  }
 }
 i12 = i1 + 8 | 0;
 i1 = i12 - 8 | 0;
 i20 = i12 | 0;
 i11 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
 HEAP32[i20 >> 2] = i11;
 do {
  if ((i11 | 0) < 1) {
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1);
  }
 } while (0);
 if ((i18 | 0) == 0) {
  i10 = 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 i1 = i4 + i3 | 0;
 i4 = HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 456 >> 2] | 0) + 1124 >> 2] | 0;
 HEAP32[i8 >> 2] = 1023;
 __ZN7WebCore24DocumentMarkerController10markersForEPNS_4NodeENS_14DocumentMarker11MarkerTypesE(i7, i4, i18, i8);
 i8 = i7 + 8 | 0;
 i18 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i18 | 0) == 0) {
   i23 = 0;
  } else {
   i4 = HEAP32[i7 >> 2] | 0;
   i9 = 0;
   L44 : while (1) {
    i12 = HEAP32[i4 + (i9 << 2) >> 2] | 0;
    do {
     if ((HEAP32[i12 + 4 >> 2] | 0) >>> 0 <= i3 >>> 0) {
      if (i1 >>> 0 > (HEAP32[i12 + 8 >> 2] | 0) >>> 0) {
       break;
      }
      if ((HEAP32[i12 >> 2] | 0) == (i2 | 0)) {
       i24 = 1;
       break L44;
      }
     }
    } while (0);
    i12 = i9 + 1 | 0;
    if (i12 >>> 0 < i18 >>> 0) {
     i9 = i12;
    } else {
     i24 = 0;
     break;
    }
   }
   if ((i18 | 0) == 0) {
    i23 = i24;
    break;
   }
   HEAP32[i8 >> 2] = 0;
   i23 = i24;
  }
 } while (0);
 i24 = i7 | 0;
 i8 = HEAP32[i24 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i10 = i23;
  STACKTOP = i5;
  return i10 | 0;
 }
 HEAP32[i24 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i8);
 i10 = i23;
 STACKTOP = i5;
 return i10 | 0;
}
function __ZN7WebCore6Editor26changeBackToReplacedStringERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 40 | 0;
 i7 = i3 + 48 | 0;
 i8 = i3 + 56 | 0;
 i9 = i2 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i10 + 4 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = i1 | 0;
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i4, (HEAP32[(HEAP32[i10 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0);
 i11 = i4 | 0;
 i4 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i11 = HEAP32[(HEAP32[i10 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i10 = HEAP32[i11 + 72 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   if (!(FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i10 >> 2] | 0) + 56 >> 2] & 1](i10, i2, i4, 1) | 0)) {
    break;
   }
   if ((i4 | 0) == 0) {
    i10 = i6 | 0;
    HEAP32[i10 >> 2] = 0;
    i12 = i10;
   } else {
    i10 = i4 | 0;
    i13 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = i13 + 1;
    if ((i13 | 0) == 0) {
     __ZN7WebCore5RangeD1Ev(i4);
     __ZN3WTF8fastFreeEPv(i4);
     i14 = i6 | 0;
     HEAP32[i14 >> 2] = i4;
     i15 = i14;
    } else {
     HEAP32[i10 >> 2] = i13;
     i13 = i6 | 0;
     HEAP32[i13 >> 2] = i4;
     i15 = i13;
    }
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
    i12 = i15;
   }
   __ZN7WebCore21TextCheckingParagraphC1EN3WTF10PassRefPtrINS_5RangeEEE(i5, i6);
   i10 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i13 = i10 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i10);
      __ZN3WTF8fastFreeEPv(i10);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   __ZN7WebCore6Editor24replaceSelectionWithTextERKN3WTF6StringEbb(i1, i2, 0, 0);
   i10 = __ZNK7WebCore21TextCheckingParagraph13checkingStartEv(i5) | 0;
   i14 = HEAP32[i9 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i16 = 0;
   } else {
    i16 = HEAP32[i14 + 4 >> 2] | 0;
   }
   __ZNK7WebCore21TextCheckingParagraph8subrangeEii(i7, i5, i10, i16);
   i10 = i7 | 0;
   i14 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   i10 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i14 + 8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1124 >> 2] | 0;
   i13 = i8 | 0;
   HEAP32[i13 >> 2] = 0;
   __ZN7WebCore24DocumentMarkerController9addMarkerEPNS_5RangeENS_14DocumentMarker10MarkerTypeERKN3WTF6StringE(i10, i14, 8, i8);
   i10 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i13 = i10 | 0;
     i17 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i13 >> 2] = i17;
      break;
     }
    }
   } while (0);
   do {
    if ((i14 | 0) != 0) {
     i10 = i14 | 0;
     i17 = HEAP32[i10 >> 2] | 0;
     HEAP32[i10 >> 2] = i17 + 1;
     if ((i17 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i14);
      __ZN3WTF8fastFreeEPv(i14);
      i18 = HEAP32[i10 >> 2] | 0;
     } else {
      HEAP32[i10 >> 2] = i17;
      i18 = i17;
     }
     i17 = i18 - 1 | 0;
     if ((i17 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i14);
      __ZN3WTF8fastFreeEPv(i14);
      break;
     } else {
      HEAP32[i10 >> 2] = i17;
      break;
     }
    }
   } while (0);
   __ZN7WebCore21TextCheckingParagraphD1Ev(i5);
  }
 } while (0);
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i4 | 0;
 i18 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i18 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i18;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore6Editor27selectionUnorderedListStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i1 | 0;
 i1 = HEAP32[(HEAP32[i6 >> 2] | 0) + 468 >> 2] | 0;
 i7 = HEAP32[i1 + 84 >> 2] | 0;
 do {
  if ((i7 | 0) == 1) {
   i8 = i3 | 0;
   i9 = HEAP32[i1 + 56 >> 2] | 0;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    i10 = i3 + 8 | 0;
    i11 = 0;
    i12 = i10;
    i13 = i10;
   } else {
    i10 = i9 + 8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
    i10 = i3 + 8 | 0;
    i9 = i10;
    i11 = HEAP32[i9 >> 2] & -8;
    i12 = i10;
    i13 = i9;
   }
   HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 60 >> 2];
   i9 = HEAP32[i1 + 64 >> 2] | 0;
   i10 = i11 | i9 & 7;
   HEAP32[i13 >> 2] = i10;
   HEAP8[i12] = i10 & 255 & -9 | i9 & 8;
   i9 = (__ZN7WebCore20enclosingNodeWithTagERKNS_8PositionERKNS_13QualifiedNameE(i3, __ZN7WebCore9HTMLNames5ulTagE) | 0) == 0;
   i10 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i8 = i10 + 8 | 0;
     i14 = i8 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i15;
     if ((i15 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
    }
   } while (0);
   if (i9) {
    break;
   } else {
    i16 = 1;
   }
   STACKTOP = i2;
   return i16 | 0;
  } else if ((i7 | 0) == 2) {
   i10 = i4 | 0;
   i8 = HEAP32[i1 + 56 >> 2] | 0;
   HEAP32[i10 >> 2] = i8;
   if ((i8 | 0) == 0) {
    i15 = i4 + 8 | 0;
    i17 = 0;
    i18 = i15;
    i19 = i15;
   } else {
    i15 = i8 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
    i15 = i4 + 8 | 0;
    i8 = i15;
    i17 = HEAP32[i8 >> 2] & -8;
    i18 = i15;
    i19 = i8;
   }
   HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 60 >> 2];
   i8 = HEAP32[i1 + 64 >> 2] | 0;
   i15 = i17 | i8 & 7;
   HEAP32[i19 >> 2] = i15;
   HEAP8[i18] = i15 & 255 & -9 | i8 & 8;
   i8 = __ZN7WebCore20enclosingNodeWithTagERKNS_8PositionERKNS_13QualifiedNameE(i4, __ZN7WebCore9HTMLNames5ulTagE) | 0;
   i15 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i10 = i15 + 8 | 0;
     i14 = i10 | 0;
     i20 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i20;
     if ((i20 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
    }
   } while (0);
   i15 = HEAP32[(HEAP32[i6 >> 2] | 0) + 468 >> 2] | 0;
   i9 = i5 | 0;
   i10 = HEAP32[i15 + 68 >> 2] | 0;
   HEAP32[i9 >> 2] = i10;
   if ((i10 | 0) != 0) {
    i20 = i10 + 8 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   }
   HEAP32[i5 + 4 >> 2] = HEAP32[i15 + 72 >> 2];
   i20 = HEAP32[i15 + 76 >> 2] | 0;
   i15 = i5 + 8 | 0;
   i10 = i15;
   i14 = HEAP32[i10 >> 2] & -8 | i20 & 7;
   HEAP32[i10 >> 2] = i14;
   HEAP8[i15] = i14 & 255 & -9 | i20 & 8;
   i20 = __ZN7WebCore20enclosingNodeWithTagERKNS_8PositionERKNS_13QualifiedNameE(i5, __ZN7WebCore9HTMLNames5ulTagE) | 0;
   i14 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i9 = i14 + 8 | 0;
     i15 = i9 | 0;
     i10 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i10;
     if ((i10 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   if ((i20 | 0) != 0 & (i8 | 0) != 0 & (i8 | 0) == (i20 | 0)) {
    i16 = 1;
   } else {
    break;
   }
   STACKTOP = i2;
   return i16 | 0;
  }
 } while (0);
 i16 = 0;
 STACKTOP = i2;
 return i16 | 0;
}
function __ZNK7WebCore6Editor25selectionOrderedListStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i1 | 0;
 i1 = HEAP32[(HEAP32[i6 >> 2] | 0) + 468 >> 2] | 0;
 i7 = HEAP32[i1 + 84 >> 2] | 0;
 do {
  if ((i7 | 0) == 1) {
   i8 = i3 | 0;
   i9 = HEAP32[i1 + 56 >> 2] | 0;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    i10 = i3 + 8 | 0;
    i11 = 0;
    i12 = i10;
    i13 = i10;
   } else {
    i10 = i9 + 8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
    i10 = i3 + 8 | 0;
    i9 = i10;
    i11 = HEAP32[i9 >> 2] & -8;
    i12 = i10;
    i13 = i9;
   }
   HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 60 >> 2];
   i9 = HEAP32[i1 + 64 >> 2] | 0;
   i10 = i11 | i9 & 7;
   HEAP32[i13 >> 2] = i10;
   HEAP8[i12] = i10 & 255 & -9 | i9 & 8;
   i9 = (__ZN7WebCore20enclosingNodeWithTagERKNS_8PositionERKNS_13QualifiedNameE(i3, __ZN7WebCore9HTMLNames5olTagE) | 0) == 0;
   i10 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i8 = i10 + 8 | 0;
     i14 = i8 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i15;
     if ((i15 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
    }
   } while (0);
   if (i9) {
    break;
   } else {
    i16 = 1;
   }
   STACKTOP = i2;
   return i16 | 0;
  } else if ((i7 | 0) == 2) {
   i10 = i4 | 0;
   i8 = HEAP32[i1 + 56 >> 2] | 0;
   HEAP32[i10 >> 2] = i8;
   if ((i8 | 0) == 0) {
    i15 = i4 + 8 | 0;
    i17 = 0;
    i18 = i15;
    i19 = i15;
   } else {
    i15 = i8 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
    i15 = i4 + 8 | 0;
    i8 = i15;
    i17 = HEAP32[i8 >> 2] & -8;
    i18 = i15;
    i19 = i8;
   }
   HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 60 >> 2];
   i8 = HEAP32[i1 + 64 >> 2] | 0;
   i15 = i17 | i8 & 7;
   HEAP32[i19 >> 2] = i15;
   HEAP8[i18] = i15 & 255 & -9 | i8 & 8;
   i8 = __ZN7WebCore20enclosingNodeWithTagERKNS_8PositionERKNS_13QualifiedNameE(i4, __ZN7WebCore9HTMLNames5olTagE) | 0;
   i15 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i10 = i15 + 8 | 0;
     i14 = i10 | 0;
     i20 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i20;
     if ((i20 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
    }
   } while (0);
   i15 = HEAP32[(HEAP32[i6 >> 2] | 0) + 468 >> 2] | 0;
   i9 = i5 | 0;
   i10 = HEAP32[i15 + 68 >> 2] | 0;
   HEAP32[i9 >> 2] = i10;
   if ((i10 | 0) != 0) {
    i20 = i10 + 8 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   }
   HEAP32[i5 + 4 >> 2] = HEAP32[i15 + 72 >> 2];
   i20 = HEAP32[i15 + 76 >> 2] | 0;
   i15 = i5 + 8 | 0;
   i10 = i15;
   i14 = HEAP32[i10 >> 2] & -8 | i20 & 7;
   HEAP32[i10 >> 2] = i14;
   HEAP8[i15] = i14 & 255 & -9 | i20 & 8;
   i20 = __ZN7WebCore20enclosingNodeWithTagERKNS_8PositionERKNS_13QualifiedNameE(i5, __ZN7WebCore9HTMLNames5olTagE) | 0;
   i14 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i9 = i14 + 8 | 0;
     i15 = i9 | 0;
     i10 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i10;
     if ((i10 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   if ((i20 | 0) != 0 & (i8 | 0) != 0 & (i8 | 0) == (i20 | 0)) {
    i16 = 1;
   } else {
    break;
   }
   STACKTOP = i2;
   return i16 | 0;
  }
 } while (0);
 i16 = 0;
 STACKTOP = i2;
 return i16 | 0;
}
function __ZN7WebCore6Editor17selectCompositionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 104 | 0;
 i10 = i2 + 120 | 0;
 __ZNK7WebCore6Editor16compositionRangeEv(i7, i1);
 i11 = i7 | 0;
 i7 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore16VisibleSelectionC1Ev(i8);
 i11 = i7 + 12 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) > -1) {
  i13 = i12;
 } else {
  i12 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i7 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i11 >> 2] = i12;
  i13 = i12;
 }
 i12 = HEAP32[i7 + 8 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i14 = i13;
 } else {
  i13 = i12 + 8 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
  i14 = HEAP32[i11 >> 2] | 0;
 }
 i11 = i5 | 0;
 HEAP32[i11 >> 2] = i12;
 HEAP32[i6 >> 2] = i14;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i9, i5, i6);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 + 8 | 0;
   i5 = i11 | 0;
   i14 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i6 = i7 + 24 | 0;
 i11 = HEAP32[i6 >> 2] | 0;
 if ((i11 | 0) > -1) {
  i15 = i11;
 } else {
  i11 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i7 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i6 >> 2] = i11;
  i15 = i11;
 }
 i11 = HEAP32[i7 + 20 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i16 = i15;
 } else {
  i15 = i11 + 8 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  i16 = HEAP32[i6 >> 2] | 0;
 }
 i6 = i3 | 0;
 HEAP32[i6 >> 2] = i11;
 HEAP32[i4 >> 2] = i16;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i10, i3, i4);
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 + 8 | 0;
   i3 = i6 | 0;
   i16 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore16VisibleSelection20setWithoutValidationERKNS_8PositionES3_(i8, i9, i10);
 i4 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 + 8 | 0;
   i6 = i10 | 0;
   i16 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 + 8 | 0;
   i10 = i9 | 0;
   i16 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0, i8, 0, 0, 0);
 __ZN7WebCore16VisibleSelectionD2Ev(i8);
 i8 = i7 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i8 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore6Editor16unappliedEditingEN3WTF10PassRefPtrINS_22EditCommandCompositionEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 64 | 0;
 i6 = i3 + 72 | 0;
 i7 = i3 + 80 | 0;
 i8 = i1 | 0;
 __ZN7WebCore8Document12updateLayoutEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 456 >> 2] | 0);
 i9 = i2 | 0;
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i4, (HEAP32[i9 >> 2] | 0) + 12 | 0);
 __ZN7WebCore6Editor27changeSelectionAfterCommandERKNS_16VisibleSelectionEj(i1, i4, 6);
 i2 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[i2 + 144 >> 2] | 0;
 i11 = i5 | 0;
 HEAP32[i11 >> 2] = i10;
 if ((i10 | 0) == 0) {
  i12 = i2;
 } else {
  i2 = i10 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
  i12 = HEAP32[i9 >> 2] | 0;
 }
 i2 = HEAP32[i12 + 148 >> 2] | 0;
 i12 = i6 | 0;
 HEAP32[i12 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i10 = i2 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 __ZN7WebCoreL36dispatchEditableContentChangedEventsEN3WTF10PassRefPtrINS_7ElementEEES3_(i5, i6);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 8 | 0;
   i5 = i12 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 + 8 | 0;
   i12 = i11 | 0;
   i10 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i6 = i1 + 4 | 0;
 i11 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 do {
  if ((i11 | 0) != 0) {
   i6 = i11 + 4 | 0;
   i10 = i6 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i10 >> 2] = i12;
    break;
   }
   i12 = i6 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 3](i12);
  }
 } while (0);
 i11 = HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i12 = HEAP32[i11 + 72 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i6 = HEAP32[(HEAP32[i12 >> 2] | 0) + 104 >> 2] | 0;
   i10 = i7 | 0;
   i5 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   HEAP32[i10 >> 2] = i5;
   FUNCTION_TABLE_vii[i6 & 3](i12, i7);
   i12 = HEAP32[i10 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i10 = i12 + 4 | 0;
   i12 = i10 | 0;
   i6 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i12 >> 2] = i6;
    break;
   }
   i6 = i10 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 3](i6);
  }
 } while (0);
 __ZN7WebCore6Editor38updateMarkersForWordsAffectedByEditingEb(i1, 1);
 i1 = HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i4);
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i8 | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i4);
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 76 >> 2] & 3](i8);
 __ZN7WebCore16VisibleSelectionD2Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore6Editor16reappliedEditingEN3WTF10PassRefPtrINS_22EditCommandCompositionEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 64 | 0;
 i6 = i3 + 72 | 0;
 i7 = i3 + 80 | 0;
 i8 = i1 | 0;
 __ZN7WebCore8Document12updateLayoutEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 456 >> 2] | 0);
 i9 = i2 | 0;
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i4, (HEAP32[i9 >> 2] | 0) + 72 | 0);
 __ZN7WebCore6Editor27changeSelectionAfterCommandERKNS_16VisibleSelectionEj(i1, i4, 6);
 i2 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[i2 + 144 >> 2] | 0;
 i11 = i5 | 0;
 HEAP32[i11 >> 2] = i10;
 if ((i10 | 0) == 0) {
  i12 = i2;
 } else {
  i2 = i10 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
  i12 = HEAP32[i9 >> 2] | 0;
 }
 i2 = HEAP32[i12 + 148 >> 2] | 0;
 i12 = i6 | 0;
 HEAP32[i12 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i10 = i2 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 __ZN7WebCoreL36dispatchEditableContentChangedEventsEN3WTF10PassRefPtrINS_7ElementEEES3_(i5, i6);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 8 | 0;
   i5 = i12 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 + 8 | 0;
   i12 = i11 | 0;
   i10 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i6 = i1 + 4 | 0;
 i11 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 do {
  if ((i11 | 0) != 0) {
   i6 = i11 + 4 | 0;
   i10 = i6 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i10 >> 2] = i12;
    break;
   }
   i12 = i6 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 3](i12);
  }
 } while (0);
 i11 = HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i12 = HEAP32[i11 + 72 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i6 = HEAP32[(HEAP32[i12 >> 2] | 0) + 100 >> 2] | 0;
   i10 = i7 | 0;
   i5 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   HEAP32[i10 >> 2] = i5;
   FUNCTION_TABLE_vii[i6 & 3](i12, i7);
   i12 = HEAP32[i10 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i10 = i12 + 4 | 0;
   i12 = i10 | 0;
   i6 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i12 >> 2] = i6;
    break;
   }
   i6 = i10 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 3](i6);
  }
 } while (0);
 __ZN7WebCore6Editor38updateMarkersForWordsAffectedByEditingEb(i1, 1);
 i1 = HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i4);
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i8 | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i4);
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 76 >> 2] & 3](i8);
 __ZN7WebCore16VisibleSelectionD2Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore6Editor16dispatchCPPEventERKN3WTF12AtomicStringENS_21ClipboardAccessPolicyE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = __ZNK7WebCore6Editor19findEventTargetFromERKNS_16VisibleSelectionE(i1, (HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0;
 if ((i10 | 0) == 0) {
  i11 = 1;
  STACKTOP = i4;
  return i11 | 0;
 }
 __ZN7WebCore9Clipboard21createForCopyAndPasteENS_21ClipboardAccessPolicyE(i6, i3);
 i1 = i6 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i1 = (i6 | 0) == 0;
 if (!i1) {
  i12 = i6 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = __ZN3WTF10fastMallocEj(56) | 0;
 i13 = i5 | 0;
 HEAP32[i13 >> 2] = i6;
 __ZN7WebCore14ClipboardEventC1ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9ClipboardEEE(i12, i2, 1, 1, i5);
 i5 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i13 = i5 | 0;
   i2 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore9ClipboardD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i13 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i5 = i12;
 i2 = i7 | 0;
 HEAP32[i2 >> 2] = i5;
 i13 = (i12 | 0) == 0;
 if (!i13) {
  i14 = i12 + 8 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 }
 i14 = i8 | 0;
 HEAP32[i14 >> 2] = 0;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEERi(i10 | 0, i7, i14) | 0;
 i14 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i2 = i14 + 8 | 0;
   i7 = i2 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i7 >> 2] = i10;
    break;
   }
   i10 = i2 - 8 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 3](i10);
  }
 } while (0);
 i14 = (HEAP8[i12 + 20 | 0] & 1) != 0;
 do {
  if (i14 & (i3 | 0) == 2) {
   __ZN7WebCore10Pasteboard21createForCopyAndPasteEv(i9);
   i10 = i9 | 0;
   i2 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   __ZN7WebCore10Pasteboard5clearEv(i2);
   __ZN7WebCore10Pasteboard15writePasteboardERKS0_(i2, HEAP32[i6 + 8 >> 2] | 0);
   if ((i2 | 0) == 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2 | 0);
  }
 } while (0);
 __ZN7WebCore9Clipboard15setAccessPolicyENS_21ClipboardAccessPolicyE(i6, 0);
 i9 = i14 ^ 1;
 do {
  if (!i13) {
   i14 = i12 + 8 | 0;
   i3 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 3](i5);
    break;
   } else {
    HEAP32[i14 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (i1) {
  i11 = i9;
  STACKTOP = i4;
  return i11 | 0;
 }
 i1 = i6 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore9ClipboardD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
  i11 = i9;
  STACKTOP = i4;
  return i11 | 0;
 } else {
  HEAP32[i1 >> 2] = i5;
  i11 = i9;
  STACKTOP = i4;
  return i11 | 0;
 }
 return 0;
}
function __ZN7WebCore6Editor24insertParagraphSeparatorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 | 0;
 if ((__ZNK7WebCore16VisibleSelection19rootEditableElementEv((HEAP32[(HEAP32[i6 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if (!(__ZNK7WebCore16VisibleSelection23isContentRichlyEditableEv((HEAP32[(HEAP32[i6 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0)) {
  i7 = __ZN7WebCore6Editor15insertLineBreakEv(i1) | 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 __ZN3WTF6StringC1EPKc(i3, H_BASE + 136 | 0);
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i4, (HEAP32[(HEAP32[i6 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0);
 i8 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = 0;
   i11 = i4;
  } else {
   i12 = HEAP32[i9 + 72 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i10 = 0;
    i11 = i4;
    break;
   }
   i13 = FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i12 >> 2] | 0) + 56 >> 2] & 1](i12, i3, i4, 0) | 0;
   i10 = i13;
   i11 = HEAP32[i8 >> 2] | 0;
  }
 } while (0);
 do {
  if ((i11 | 0) != 0) {
   i8 = i11 | 0;
   i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i11);
    __ZN3WTF8fastFreeEPv(i11);
    break;
   } else {
    HEAP32[i8 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i3 = i11 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 if (!i10) {
  i7 = 1;
  STACKTOP = i2;
  return i7 | 0;
 }
 i10 = HEAP32[(HEAP32[i6 >> 2] | 0) + 468 >> 2] | 0;
 if ((HEAP32[i10 + 84 >> 2] | 0) == 2) {
  i14 = 1;
 } else {
  i14 = HEAP32[i10 + 80 >> 2] | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i10 + 56 | 0, i14);
 i14 = __ZN7WebCore35isEndOfEditableOrNonEditableContentERKNS_15VisiblePositionE(i5) | 0;
 __ZN7WebCore13TypingCommand24insertParagraphSeparatorERNS_8DocumentEj(HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] | 0, 0);
 if ((HEAP8[i1 + 32 | 0] & 1) == 0) {
  __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(HEAP32[(HEAP32[i6 >> 2] | 0) + 468 >> 2] | 0, i14 ? __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE : __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE, 1);
 }
 i14 = HEAP32[i5 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i7 = 1;
  STACKTOP = i2;
  return i7 | 0;
 }
 i5 = i14 + 8 | 0;
 i14 = i5 | 0;
 i6 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 HEAP32[i14 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  i7 = 1;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  i7 = 1;
  STACKTOP = i2;
  return i7 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 i7 = 1;
 STACKTOP = i2;
 return i7 | 0;
}
function __ZN7WebCore6Editor13performDeleteEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[(HEAP32[i6 >> 2] | 0) + 468 >> 2] | 0;
 do {
  if ((HEAP32[i7 + 84 >> 2] | 0) == 2) {
   if ((__ZNK7WebCore16VisibleSelection19rootEditableElementEv(i7 + 32 | 0) | 0) == 0) {
    break;
   }
   __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i5, (HEAP32[(HEAP32[i6 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0);
   i8 = i5 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i10 = i1 + 33 | 0;
   i11 = i1 + 36 | 0;
   if ((HEAP8[i10] & 1) != 0) {
    __ZN7WebCore8KillRing16startNewSequenceEv(HEAP32[i11 >> 2] | 0);
   }
   __ZN7WebCore9plainTextEPKNS_5RangeENS_20TextIteratorBehaviorEb(i3, i9, 0, 0);
   __ZN7WebCore8KillRing6appendERKN3WTF6StringE(HEAP32[i11 >> 2] | 0, i3);
   HEAP8[i10] = 0;
   i11 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i9 = i11 | 0;
     i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i9 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i12 = i11 | 0;
     i9 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i11);
      __ZN3WTF8fastFreeEPv(i11);
      break;
     } else {
      HEAP32[i12 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i11 = HEAP32[i6 >> 2] | 0;
   i8 = HEAP32[i11 + 32 >> 2] | 0;
   do {
    if ((i8 | 0) == 0) {
     i13 = 0;
     i14 = i11;
    } else {
     i9 = HEAP32[i8 + 72 >> 2] | 0;
     if ((i9 | 0) == 0) {
      i13 = 0;
      i14 = i11;
      break;
     }
     i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 16 >> 2] & 1](i9) | 0;
     i9 = HEAP32[i6 >> 2] | 0;
     if (!i12) {
      i13 = 0;
      i14 = i9;
      break;
     }
     i13 = (HEAP32[(HEAP32[i9 + 468 >> 2] | 0) + 108 >> 2] | 0) == 1;
     i14 = i9;
    }
   } while (0);
   do {
    if ((HEAP32[(HEAP32[i14 + 468 >> 2] | 0) + 84 >> 2] | 0) != 0) {
     i11 = HEAP32[i14 + 456 >> 2] | 0;
     i8 = __ZN3WTF10fastMallocEj(344) | 0;
     __ZN7WebCore22DeleteSelectionCommandC1ERNS_8DocumentEbbbbb(i8, i11, i13, 1, 0, 0, 1);
     i11 = i4 | 0;
     HEAP32[i11 >> 2] = i8;
     __ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i4);
     i8 = HEAP32[i11 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     i11 = i8 + 4 | 0;
     i8 = i11 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i11 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 3](i9);
    }
   } while (0);
   HEAP8[i10] = 0;
   STACKTOP = i2;
   return;
  }
 } while (0);
 __ZN7WebCore10systemBeepEv();
 STACKTOP = i2;
 return;
}
function __ZN7WebCore6Editor29markMisspellingsAndBadGrammarERKNS_16VisibleSelectionEbS3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i1 | 0;
 if (!(__ZN7WebCore25unifiedTextCheckerEnabledEPKNS_5FrameE(HEAP32[i10 >> 2] | 0) | 0)) {
  i11 = i9 | 0;
  HEAP32[i11 >> 2] = 0;
  __ZN7WebCore6Editor28markMisspellingsOrBadGrammarERKNS_16VisibleSelectionEbRN3WTF6RefPtrINS_5RangeEEE(i1, i2, 1, i9);
  do {
   if (i3) {
    i9 = i6 | 0;
    HEAP32[i9 >> 2] = 0;
    __ZN7WebCore6Editor28markMisspellingsOrBadGrammarERKNS_16VisibleSelectionEbRN3WTF6RefPtrINS_5RangeEEE(i1, i4, 0, i6);
    i12 = HEAP32[i9 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    i9 = i12 | 0;
    i13 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    if ((i13 | 0) == 0) {
     __ZN7WebCore5RangeD1Ev(i12);
     __ZN3WTF8fastFreeEPv(i12);
     break;
    } else {
     HEAP32[i9 >> 2] = i13;
     break;
    }
   }
  } while (0);
  i6 = HEAP32[i11 >> 2] | 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i11 = i6 | 0;
  i13 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
  if ((i13 | 0) == 0) {
   __ZN7WebCore5RangeD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
   STACKTOP = i5;
   return;
  } else {
   HEAP32[i11 >> 2] = i13;
   STACKTOP = i5;
   return;
  }
 }
 i13 = HEAP32[(HEAP32[i10 >> 2] | 0) + 32 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i11 = HEAP32[i13 + 72 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 24 >> 2] & 1](i11) | 0)) {
  STACKTOP = i5;
  return;
 }
 do {
  if (i3) {
   i11 = HEAP32[(HEAP32[i10 >> 2] | 0) + 32 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i14 = 2;
    break;
   }
   i13 = HEAP32[i11 + 72 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i14 = 2;
    break;
   }
   i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 32 >> 2] & 1](i13) | 0;
   i14 = i11 ? 6 : 2;
  } else {
   i14 = 2;
  }
 } while (0);
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i7, i2);
 i2 = i7 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i8, i4);
 i4 = i8 | 0;
 __ZN7WebCore6Editor40markAllMisspellingsAndBadGrammarInRangesEjPNS_5RangeES2_(i1, i14, i7, HEAP32[i4 >> 2] | 0);
 i7 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 | 0;
   i14 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i4 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i2 = i7 | 0;
 i14 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i14 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i2 >> 2] = i14;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore6Editor15handleTextEventEPNS_9TextEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i2 + 60 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 4) {
  i9 = HEAP32[i2 + 68 >> 2] | 0;
  if ((i9 | 0) != 0) {
   i10 = i4 | 0;
   HEAP32[i10 >> 2] = i9;
   i11 = i9 + 8 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   __ZN7WebCore6Editor28replaceSelectionWithFragmentEN3WTF10PassRefPtrINS_16DocumentFragmentEEEbbb(i1, i4, 0, (HEAP8[i2 + 72 | 0] & 1) != 0, (HEAP8[i2 + 73 | 0] & 1) != 0);
   i4 = HEAP32[i10 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i12 = 1;
    STACKTOP = i3;
    return i12 | 0;
   }
   i10 = i4 + 8 | 0;
   i4 = i10 | 0;
   i11 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    i12 = 1;
    STACKTOP = i3;
    return i12 | 0;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    i12 = 1;
    STACKTOP = i3;
    return i12 | 0;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
   i12 = 1;
   STACKTOP = i3;
   return i12 | 0;
  }
  i10 = i5 | 0;
  i11 = HEAP32[i2 + 64 >> 2] | 0;
  HEAP32[i10 >> 2] = i11;
  if ((i11 | 0) != 0) {
   i4 = i11 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
  }
  __ZN7WebCore6Editor24replaceSelectionWithTextERKN3WTF6StringEbb(i1, i5, 0, (HEAP8[i2 + 72 | 0] & 1) != 0);
  i5 = HEAP32[i10 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i12 = 1;
   STACKTOP = i3;
   return i12 | 0;
  }
  i10 = i5 | 0;
  i4 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
  if ((i4 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i5);
   i12 = 1;
   STACKTOP = i3;
   return i12 | 0;
  } else {
   HEAP32[i10 >> 2] = i4;
   i12 = 1;
   STACKTOP = i3;
   return i12 | 0;
  }
 } else if ((i8 | 0) == 5) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 } else {
  i8 = i6 | 0;
  i4 = HEAP32[i2 + 64 >> 2] | 0;
  HEAP32[i8 >> 2] = i4;
  if ((i4 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i4 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i13 = HEAP32[i8 >> 2] | 0;
  }
  do {
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i13, H_BASE + 136 | 0) | 0) {
    if ((HEAP32[i7 >> 2] | 0) == 1) {
     i14 = __ZN7WebCore6Editor15insertLineBreakEv(i1) | 0;
     break;
    } else {
     i14 = __ZN7WebCore6Editor24insertParagraphSeparatorEv(i1) | 0;
     break;
    }
   } else {
    i14 = __ZN7WebCore6Editor33insertTextWithoutSendingTextEventERKN3WTF6StringEbPNS_9TextEventE(i1, i6, 0, i2) | 0;
   }
  } while (0);
  i2 = HEAP32[i8 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i12 = i14;
   STACKTOP = i3;
   return i12 | 0;
  }
  i8 = i2 | 0;
  i6 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
  if ((i6 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i2);
   i12 = i14;
   STACKTOP = i3;
   return i12 | 0;
  } else {
   HEAP32[i8 >> 2] = i6;
   i12 = i14;
   STACKTOP = i3;
   return i12 | 0;
  }
 }
 return 0;
}
function __ZN7WebCore16VisibleSelectionaSEOS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i2 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
   i3 = i4 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i5 = i2 + 8 | 0;
 i4 = i1 + 8 | 0;
 i6 = i4;
 i3 = HEAP32[i6 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i6 >> 2] = i3;
 HEAP8[i4] = i3 & 255 & -9 | HEAP8[i5] & 8;
 i5 = i2 + 12 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i1 + 12 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 + 8 | 0;
   i5 = i3 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i4 = i2 + 20 | 0;
 i3 = i1 + 20 | 0;
 i6 = i3;
 i5 = HEAP32[i6 >> 2] & -8 | HEAP32[i4 >> 2] & 7;
 HEAP32[i6 >> 2] = i5;
 HEAP8[i3] = i5 & 255 & -9 | HEAP8[i4] & 8;
 i4 = i2 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = i1 + 24 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 i3 = i2 + 32 | 0;
 i5 = i1 + 32 | 0;
 i6 = i5;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i3 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | HEAP8[i3] & 8;
 i3 = i2 + 36 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 36 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
   i3 = i4 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 i5 = i2 + 44 | 0;
 i4 = i1 + 44 | 0;
 i6 = i4;
 i3 = HEAP32[i6 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i6 >> 2] = i3;
 HEAP8[i4] = i3 & 255 & -9 | HEAP8[i5] & 8;
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
 i5 = i2 + 56 | 0;
 i2 = i1 + 56 | 0;
 i3 = HEAP8[i2] & -2 | HEAP8[i5] & 1;
 HEAP8[i2] = i3;
 HEAP8[i2] = i3 & -3 | HEAP8[i5] & 2;
 return i1 | 0;
}
function __ZN7WebCore6Editor28markMisspellingsOrBadGrammarERKNS_16VisibleSelectionEbRN3WTF6RefPtrINS_5RangeEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i1 | 0;
 i1 = HEAP32[(HEAP32[i9 >> 2] | 0) + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i10 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 24 >> 2] & 1](i10) | 0)) {
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i6, i2);
 i2 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i2 = HEAP32[i6 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i2, 0, 1) | 0)) {
    break;
   }
   if ((HEAP32[i2 + 12 >> 2] & 4 | 0) == 0) {
    i10 = HEAP32[i2 + 16 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    if ((HEAP32[i10 + 12 >> 2] & 4 | 0) == 0) {
     break;
    }
    i11 = i10;
   } else {
    i11 = i2;
   }
   if ((i11 | 0) == 0) {
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 504 >> 2] & 1](i11) | 0)) {
    break;
   }
   i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 32 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i1 = HEAP32[i10 + 72 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = i6;
   i12 = i6 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   __ZN7WebCore18TextCheckingHelperC1EPNS_12EditorClientEN3WTF10PassRefPtrINS_5RangeEEE(i7, i1, i8);
   i1 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i10 = i1 | 0;
     i12 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i1);
      __ZN3WTF8fastFreeEPv(i1);
      break;
     } else {
      HEAP32[i10 >> 2] = i12;
      break;
     }
    }
   } while (0);
   do {
    if (i3) {
     __ZN7WebCore18TextCheckingHelper19markAllMisspellingsERN3WTF6RefPtrINS_5RangeEEE(i7, i4);
    } else {
     i1 = HEAP32[(HEAP32[i9 >> 2] | 0) + 32 >> 2] | 0;
     if ((i1 | 0) == 0) {
      break;
     }
     i12 = HEAP32[i1 + 72 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 32 >> 2] & 1](i12) | 0)) {
      break;
     }
     __ZN7WebCore18TextCheckingHelper17markAllBadGrammarEv(i7);
    }
   } while (0);
   __ZN7WebCore18TextCheckingHelperD1Ev(i7);
  }
 } while (0);
 i7 = i6 | 0;
 i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i7 >> 2] = i9;
  STACKTOP = i5;
  return;
 }
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
function __ZN3WTF6VectorIN7WebCore20CompositionUnderlineELj0ENS_15CrashOnOverflowEEaSERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i4 >>> 0 > i6 >>> 0) {
   HEAP32[i3 >> 2] = i6;
  } else {
   i7 = i1 + 4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if (i6 >>> 0 <= i8 >>> 0) {
    break;
   }
   do {
    if ((i8 | 0) == 0) {
     i9 = 0;
    } else {
     if ((i4 | 0) != 0) {
      HEAP32[i3 >> 2] = 0;
     }
     i10 = i1 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     if ((i11 | 0) == 0) {
      i9 = i8;
      break;
     }
     HEAP32[i10 >> 2] = 0;
     HEAP32[i7 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i11);
     i9 = HEAP32[i7 >> 2] | 0;
    }
   } while (0);
   i8 = HEAP32[i5 >> 2] | 0;
   if (i9 >>> 0 >= i8 >>> 0) {
    break;
   }
   i11 = i1 | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = i10 + (i12 * 20 & -1) | 0;
   if (i8 >>> 0 > 214748364 >>> 0) {
    _WTFCrash();
    return 0;
   }
   i14 = __ZN3WTF18fastMallocGoodSizeEj(i8 * 20 & -1) | 0;
   HEAP32[i7 >> 2] = (i14 >>> 0) / 20 & -1;
   i8 = __ZN3WTF10fastMallocEj(i14) | 0;
   HEAP32[i11 >> 2] = i8;
   if ((i12 | 0) != 0) {
    i12 = i10;
    i14 = i8;
    while (1) {
     i8 = i14;
     i15 = i12;
     HEAP32[i8 >> 2] = HEAP32[i15 >> 2];
     HEAP32[i8 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
     HEAP32[i8 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
     HEAP32[i8 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
     HEAP32[i8 + 16 >> 2] = HEAP32[i15 + 16 >> 2];
     i15 = i12 + 20 | 0;
     if ((i15 | 0) == (i13 | 0)) {
      break;
     } else {
      i12 = i15;
      i14 = i14 + 20 | 0;
     }
    }
   }
   if ((i10 | 0) == 0) {
    break;
   }
   if ((HEAP32[i11 >> 2] | 0) == (i10 | 0)) {
    HEAP32[i11 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i10);
  }
 } while (0);
 i9 = i2 | 0;
 i2 = i1 | 0;
 _memmove(HEAP32[i2 >> 2] | 0, HEAP32[i9 >> 2] | 0, (HEAP32[i3 >> 2] | 0) * 20 & -1 | 0) | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i14 = i4 + (i6 * 20 & -1) | 0;
 if ((i9 | 0) == (i6 | 0)) {
  i16 = i9;
 } else {
  i6 = i4 + (i9 * 20 & -1) | 0;
  i4 = (HEAP32[i2 >> 2] | 0) + (i9 * 20 & -1) | 0;
  while (1) {
   i9 = i4;
   i2 = i6;
   HEAP32[i9 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i9 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
   HEAP32[i9 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
   HEAP32[i9 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
   HEAP32[i9 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
   i2 = i6 + 20 | 0;
   if ((i2 | 0) == (i14 | 0)) {
    break;
   } else {
    i6 = i2;
    i4 = i4 + 20 | 0;
   }
  }
  i16 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i16;
 return i1 | 0;
}
function __ZN7WebCore6Editor15insertLineBreakEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 | 0;
 if ((__ZNK7WebCore16VisibleSelection19rootEditableElementEv((HEAP32[(HEAP32[i6 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 __ZN3WTF6StringC1EPKc(i3, H_BASE + 136 | 0);
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i4, (HEAP32[(HEAP32[i6 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0);
 i8 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = 0;
   i11 = i4;
  } else {
   i12 = HEAP32[i9 + 72 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i10 = 0;
    i11 = i4;
    break;
   }
   i13 = FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i12 >> 2] | 0) + 56 >> 2] & 1](i12, i3, i4, 0) | 0;
   i10 = i13;
   i11 = HEAP32[i8 >> 2] | 0;
  }
 } while (0);
 do {
  if ((i11 | 0) != 0) {
   i8 = i11 | 0;
   i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i11);
    __ZN3WTF8fastFreeEPv(i11);
    break;
   } else {
    HEAP32[i8 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i3 = i11 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 if (!i10) {
  i7 = 1;
  STACKTOP = i2;
  return i7 | 0;
 }
 i10 = HEAP32[(HEAP32[i6 >> 2] | 0) + 468 >> 2] | 0;
 if ((HEAP32[i10 + 84 >> 2] | 0) == 2) {
  i14 = 1;
 } else {
  i14 = HEAP32[i10 + 80 >> 2] | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i10 + 56 | 0, i14);
 i14 = __ZN7WebCore35isEndOfEditableOrNonEditableContentERKNS_15VisiblePositionE(i5) | 0;
 __ZN7WebCore13TypingCommand15insertLineBreakERNS_8DocumentEj(HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] | 0, 0);
 if ((HEAP8[i1 + 32 | 0] & 1) == 0) {
  __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(HEAP32[(HEAP32[i6 >> 2] | 0) + 468 >> 2] | 0, i14 ? __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE : __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE, 1);
 }
 i14 = HEAP32[i5 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i7 = 1;
  STACKTOP = i2;
  return i7 | 0;
 }
 i5 = i14 + 8 | 0;
 i14 = i5 | 0;
 i6 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 HEAP32[i14 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  i7 = 1;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  i7 = 1;
  STACKTOP = i2;
  return i7 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 i7 = 1;
 STACKTOP = i2;
 return i7 | 0;
}
function __ZN7WebCoreL36dispatchEditableContentChangedEventsEN3WTF10PassRefPtrINS_7ElementEEES3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i1 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = (i1 | 0) == 0;
 do {
  if (!i7) {
   i8 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 432 | 0;
   i9 = __ZN3WTF10fastMallocEj(56) | 0;
   __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i9, i8, 0, 0);
   i8 = i4 | 0;
   HEAP32[i8 >> 2] = i9;
   i9 = i3 + 8 | 0;
   HEAP32[i9 >> 2] = 0;
   __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEERi(i1 | 0, i4, i9) | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i8 = i9 + 8 | 0;
   i9 = i8 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i9 >> 2] = i10;
    break;
   }
   i10 = i8 - 8 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 3](i10);
  }
 } while (0);
 do {
  if ((i2 | 0) != 0) {
   do {
    if ((i2 | 0) != (i1 | 0)) {
     i4 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 432 | 0;
     i10 = __ZN3WTF10fastMallocEj(56) | 0;
     __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i10, i4, 0, 0);
     i4 = i5 | 0;
     HEAP32[i4 >> 2] = i10;
     i10 = i6 | 0;
     HEAP32[i10 >> 2] = 0;
     __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEERi(i2 | 0, i5, i10) | 0;
     i10 = HEAP32[i4 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     i4 = i10 + 8 | 0;
     i10 = i4 | 0;
     i8 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i10 >> 2] = i8;
      break;
     }
     i8 = i4 - 8 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 3](i8);
    }
   } while (0);
   i8 = i2 + 8 | 0;
   i4 = i8 | 0;
   i10 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 if (i7) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 8 | 0;
 i1 = i7 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) >= 1) {
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
function __ZN7WebCore6Editor15pasteAsFragmentEN3WTF10PassRefPtrINS_16DocumentFragmentEEEbb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i1 | 0;
 i11 = __ZNK7WebCore6Editor19findEventTargetFromERKNS_16VisibleSelectionE(i1, (HEAP32[(HEAP32[i10 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 456 >> 2] | 0) + 336 >> 2] | 0;
 i10 = i8 | 0;
 HEAP32[i10 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i12 = i1 + 36 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = i9 | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i12 >> 2] = i2;
 __ZN7WebCore9TextEvent22createForFragmentPasteEN3WTF10PassRefPtrINS_9DOMWindowEEENS2_INS_16DocumentFragmentEEEbb(i7, i8, i9, i3, i4);
 i4 = i6 | 0;
 i3 = i7 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i4 >> 2] = i7;
 i7 = i5 + 32 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEERi(i11 | 0, i6, i7) | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 + 8 | 0;
   i6 = i4 | 0;
   i11 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i6 >> 2] = i11;
    break;
   }
   i11 = i4 - 8 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 3](i11);
  }
 } while (0);
 i7 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i3 = i7 + 8 | 0;
   i11 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 3](i7);
    break;
   } else {
    HEAP32[i3 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i12 = i7 + 8 | 0;
   i11 = i12 | 0;
   i3 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i10 = i7 + 36 | 0;
 i7 = i10 | 0;
 i12 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i12 | 0) != 0) {
  HEAP32[i7 >> 2] = i12;
  STACKTOP = i5;
  return;
 }
 i12 = i10 - 36 | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] & 3](i12);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore6Editor27changeSelectionAfterCommandERKNS_16VisibleSelectionEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = HEAP32[i2 + 24 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 do {
  if (i5) {
   i6 = 4;
  } else {
   i7 = i4 + 8 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
   HEAP32[i7 >> 2] = i8;
   if ((HEAP32[i4 + 12 >> 2] & 256 | 0) != 0) {
    i6 = 4;
    break;
   }
   i7 = i4 + 8 | 0;
   i9 = 1;
   i10 = i8;
   i11 = i7;
   i12 = i7 | 0;
   i6 = 10;
  }
 } while (0);
 do {
  if ((i6 | 0) == 4) {
   i7 = HEAP32[i2 + 36 >> 2] | 0;
   do {
    if ((i7 | 0) == 0) {
     i13 = 0;
    } else {
     i8 = HEAP32[i7 + 8 >> 2] | 0;
     i14 = (HEAP32[i7 + 12 >> 2] & 256 | 0) == 0;
     i15 = i7 + 8 | 0;
     HEAP32[i15 >> 2] = i8;
     if ((i8 | 0) >= 1) {
      i13 = i14;
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      i13 = i14;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
     i13 = i14;
    }
   } while (0);
   if (i5) {
    i16 = i13;
    i6 = 13;
    break;
   }
   i7 = i4 + 8 | 0;
   i14 = i7 | 0;
   i9 = i13;
   i10 = HEAP32[i14 >> 2] | 0;
   i11 = i7;
   i12 = i14;
   i6 = 10;
  }
 } while (0);
 do {
  if ((i6 | 0) == 10) {
   i13 = i10 - 1 | 0;
   HEAP32[i12 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    i16 = i9;
    i6 = 13;
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    i16 = i9;
    i6 = 13;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
   if (!i9) {
    break;
   }
   return;
  }
 } while (0);
 do {
  if ((i6 | 0) == 13) {
   if (!i16) {
    break;
   }
   return;
  }
 } while (0);
 i16 = i1 | 0;
 i1 = __ZN7WebCoreeqERKNS_16VisibleSelectionES2_(i2, (HEAP32[(HEAP32[i16 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0;
 i6 = HEAP32[(HEAP32[i16 >> 2] | 0) + 468 >> 2] | 0;
 if (!i1) {
  if (!(__ZNK7WebCore14FrameSelection21shouldChangeSelectionERKNS_16VisibleSelectionE(i6, i2) | 0)) {
   return;
  }
  __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(HEAP32[(HEAP32[i16 >> 2] | 0) + 468 >> 2] | 0, i2, i3, 0, 0);
  return;
 }
 __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i6, i2, i3, 0, 0);
 i3 = HEAP32[i16 >> 2] | 0;
 i16 = HEAP32[i3 + 32 >> 2] | 0;
 if ((i16 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i16 + 72 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 80 >> 2] & 3](i2, i3);
 return;
}
function __ZN7WebCore6Editor23setBaseWritingDirectionE16WritingDirection(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 | 0;
 i9 = HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 456 >> 2] | 0) + 680 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 456 >> 2] & 1](i9) | 0)) {
    break;
   }
   if ((i2 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i10 = i9 | 0;
   __ZN3WTF12AtomicString3addEPKh(i4, ((i2 | 0) == 1 ? H_BASE + 32 : H_BASE + 24) | 0);
   i11 = i5 | 0;
   HEAP32[i11 >> 2] = HEAP32[i4 >> 2];
   __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i9, __ZN7WebCore9HTMLNames7dirAttrE, i5);
   i12 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i11 = i12 | 0;
     i13 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i11 >> 2] = i13;
      break;
     }
    }
   } while (0);
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 216 >> 2] & 3](i10);
   __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 456 >> 2] | 0);
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i6, 0);
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 1) {
  i14 = H_BASE + 32 | 0;
 } else {
  i14 = (i2 | 0) == 2 ? H_BASE + 24 | 0 : H_BASE + 16 | 0;
 }
 __ZN3WTF6StringC1EPKc(i7, i14);
 __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(i8, 2, i7, 0, 0) | 0;
 i14 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i7 = i14 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i7 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN7WebCore6Editor30applyParagraphStyleToSelectionEPNS_15StylePropertiesENS_10EditActionE(i1, i8 | 0, 19);
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i8 | 0;
 i14 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i1 >> 2] = i14;
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i8 + 4 >> 2] & 4 | 0) == 0) {
  __ZN7WebCore24ImmutableStylePropertiesD1Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i3;
  return;
 } else {
  __ZN7WebCore22MutableStylePropertiesD1Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore6Editor30pasteAsPlainTextWithPasteboardERNS_10PasteboardE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore10Pasteboard4readERNS_19PasteboardPlainTextE(i2, i4);
 i4 = i5 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i4 >> 2] = i8;
 do {
  if ((i8 | 0) != 0) {
   i9 = i8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = i9 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i7 = i1 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i11 = HEAP32[i8 + 32 >> 2] | 0;
 L8 : do {
  if ((i11 | 0) != 0) {
   i10 = HEAP32[i11 + 72 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i9 = HEAP32[(HEAP32[i10 >> 2] | 0) + 56 >> 2] | 0;
   __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i6, (HEAP32[i8 + 468 >> 2] | 0) + 32 | 0);
   i12 = i6 | 0;
   i13 = FUNCTION_TABLE_iiiii[i9 & 1](i10, i5, HEAP32[i12 >> 2] | 0, 1) | 0;
   i10 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i10 | 0) == 0) {
     if (!i13) {
      break L8;
     }
    } else {
     i12 = i10 | 0;
     i9 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i10);
      __ZN3WTF8fastFreeEPv(i10);
      if (i13) {
       break;
      } else {
       break L8;
      }
     } else {
      HEAP32[i12 >> 2] = i9;
      if (i13) {
       break;
      } else {
       break L8;
      }
     }
    }
   } while (0);
   i13 = HEAP32[(HEAP32[i7 >> 2] | 0) + 32 >> 2] | 0;
   do {
    if ((i13 | 0) == 0) {
     i14 = 0;
    } else {
     i10 = HEAP32[i13 + 72 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i14 = 0;
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 16 >> 2] & 1](i10) | 0)) {
      i14 = 0;
      break;
     }
     i14 = __ZN7WebCore10Pasteboard15canSmartReplaceEv(i2) | 0;
    }
   } while (0);
   __ZN7WebCore6Editor16pasteAsPlainTextERKN3WTF6StringEb(i1, i5, i14);
  }
 } while (0);
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i14 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i14);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore6Editor14simplifyMarkupEPNS_4NodeES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 do {
  if ((i3 | 0) == 0) {
   i6 = 0;
   i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
  } else {
   if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) != (HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0)) {
    STACKTOP = i4;
    return;
   }
   do {
    if ((i2 | 0) != (i3 | 0)) {
     i8 = i2;
     while (1) {
      if ((HEAP32[i8 + 12 >> 2] & 2 | 0) == 0) {
       i9 = 9;
      } else {
       i10 = HEAP32[i8 + 36 >> 2] | 0;
       if ((i10 | 0) == 0) {
        i9 = 9;
       } else {
        i11 = i10;
       }
      }
      do {
       if ((i9 | 0) == 9) {
        i9 = 0;
        i10 = HEAP32[i8 + 28 >> 2] | 0;
        if ((i10 | 0) != 0) {
         i11 = i10;
         break;
        }
        i11 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i8) | 0;
       }
      } while (0);
      i12 = (i11 | 0) != 0;
      if (i12 & (i11 | 0) != (i3 | 0)) {
       i8 = i11;
      } else {
       break;
      }
     }
     if (i12) {
      break;
     }
     STACKTOP = i4;
     return;
    }
   } while (0);
   i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
   if ((HEAP32[i3 + 12 >> 2] & 2 | 0) != 0) {
    i10 = HEAP32[i3 + 36 >> 2] | 0;
    if ((i10 | 0) != 0) {
     i6 = i10;
     i7 = i8;
     break;
    }
   }
   i10 = HEAP32[i3 + 28 >> 2] | 0;
   if ((i10 | 0) != 0) {
    i6 = i10;
    i7 = i8;
    break;
   }
   i6 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i3) | 0;
   i7 = i8;
  }
 } while (0);
 i3 = __ZN3WTF10fastMallocEj(160) | 0;
 __ZN7WebCore21SimplifyMarkupCommandC1ERNS_8DocumentEPNS_4NodeES4_(i3, i7, i2, i6);
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = i3;
 __ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i5);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i5 + 4 | 0;
 i5 = i6 | 0;
 i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i5 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
 i3 = i6 - 4 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 3](i3);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore6Editor7copyURLERKNS_3URLERKN3WTF6StringERNS_10PasteboardE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i1 | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i5 | 0);
 i7 = i5 + 48 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i8;
 do {
  if ((i9 | 0) != 0) {
   i8 = i9 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i8 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i9 = HEAP8[i2 + 4 | 0] | 0;
 i10 = i5 + 4 | 0;
 HEAP8[i10] = HEAP8[i10] & -4 | i9 & 1 | i9 & 2;
 HEAP32[i5 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i5 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i5 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i5 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i5 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i5 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i5 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i5 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i5 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i2;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i9 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i9;
    break;
   }
  }
 } while (0);
 __ZN7WebCore10Pasteboard5writeERKNS_13PasteboardURLE(i4, i5);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i7 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i6 = i5 | 0;
 i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i1;
  return;
 } else {
  HEAP32[i6 >> 2] = i4;
  STACKTOP = i1;
  return;
 }
}
function __ZNK7WebCore6Editor37baseWritingDirectionForSelectionStartEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0;
 if ((HEAP32[i4 + 84 >> 2] | 0) == 2) {
  i5 = 1;
 } else {
  i5 = HEAP32[i4 + 80 >> 2] | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i3, i4 + 56 | 0, i5);
 i5 = i3 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i6 = 1;
  STACKTOP = i2;
  return i6 | 0;
 }
 i4 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 8 | 0;
   i1 = i5 | 0;
   i7 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i4 = i3 + 32 | 0;
 if ((HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0) {
  i8 = i4 | 0;
 } else {
  i8 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i9 = 1;
  } else {
   i8 = HEAP32[i4 + 20 >> 2] | 0;
   if ((i8 & 768 | 0) == 256) {
    i10 = 14;
   } else {
    if ((HEAP32[i4 + 24 >> 2] & 32 | 0) == 0) {
     i10 = 14;
    } else {
     i11 = i4;
     i12 = i8;
    }
   }
   if ((i10 | 0) == 14) {
    i8 = __ZNK7WebCore12RenderObject15containingBlockEv(i4) | 0;
    if ((i8 | 0) == 0) {
     i9 = 1;
     break;
    }
    i11 = i8 | 0;
    i12 = HEAP32[i8 + 20 >> 2] | 0;
   }
   if ((i12 & 768 | 0) == 256) {
    i13 = HEAP32[(HEAP32[i11 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i13 = HEAP32[i11 + 36 >> 2] | 0;
   }
   i9 = 2 - ((HEAP32[i13 + 40 >> 2] | 0) >>> 30 & 1) | 0;
  }
 } while (0);
 i13 = i3 + 8 | 0;
 i3 = i13 | 0;
 i11 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i11;
 if ((i11 | 0) >= 1) {
  i6 = i9;
  STACKTOP = i2;
  return i6 | 0;
 }
 if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
  i6 = i9;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
 i6 = i9;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN7WebCore6Editor9copyImageERKNS_13HitTestResultE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i3 = i1 | 0;
 i4 = i1 + 48 | 0;
 if ((__ZNK7WebCore13HitTestResult21innerNonSharedElementEv(i2) | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 __ZNK7WebCore13HitTestResult15absoluteLinkURLEv(i3, i2);
 i5 = i3 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 4;
 } else {
  if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
   i7 = 4;
  }
 }
 do {
  if ((i7 | 0) == 4) {
   __ZNK7WebCore13HitTestResult16absoluteImageURLEv(i4, i2);
   i6 = i4 | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   i9 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i8;
   do {
    if ((i9 | 0) != 0) {
     i8 = i9 | 0;
     i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i8 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i9 = HEAP8[i4 + 4 | 0] | 0;
   i10 = i3 + 4 | 0;
   HEAP8[i10] = HEAP8[i10] & -4 | i9 & 1 | i9 & 2;
   HEAP32[i3 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
   HEAP32[i3 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
   HEAP32[i3 + 16 >> 2] = HEAP32[i4 + 16 >> 2];
   HEAP32[i3 + 20 >> 2] = HEAP32[i4 + 20 >> 2];
   HEAP32[i3 + 24 >> 2] = HEAP32[i4 + 24 >> 2];
   HEAP32[i3 + 28 >> 2] = HEAP32[i4 + 28 >> 2];
   HEAP32[i3 + 32 >> 2] = HEAP32[i4 + 32 >> 2];
   HEAP32[i3 + 36 >> 2] = HEAP32[i4 + 36 >> 2];
   HEAP32[i3 + 40 >> 2] = HEAP32[i4 + 40 >> 2];
   HEAP32[i3 + 44 >> 2] = HEAP32[i4 + 44 >> 2];
   i9 = HEAP32[i6 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = i9 | 0;
   i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i5 = i4 | 0;
 i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i1;
  return;
 } else {
  HEAP32[i5 >> 2] = i3;
  STACKTOP = i1;
  return;
 }
}
function __ZN7WebCore6Editor16pasteAsPlainTextERKN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i1 | 0;
 i9 = __ZNK7WebCore6Editor19findEventTargetFromERKNS_16VisibleSelectionE(i1, (HEAP32[(HEAP32[i8 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 456 >> 2] | 0) + 336 >> 2] | 0;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i10 = i1 + 36 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 __ZN7WebCore9TextEvent23createForPlainTextPasteEN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringEb(i6, i7, i2, i3);
 i3 = i5 | 0;
 i2 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i3 >> 2] = i6;
 i6 = i4 + 24 | 0;
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEERi(i9 | 0, i5, i6) | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i3 = i6 + 8 | 0;
   i5 = i3 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i5 >> 2] = i9;
    break;
   }
   i9 = i3 - 8 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 3](i9);
  }
 } while (0);
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 + 8 | 0;
   i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 3](i6);
    break;
   } else {
    HEAP32[i2 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i6 + 36 | 0;
 i6 = i8 | 0;
 i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i6 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
 i9 = i8 - 36 | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] & 3](i9);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore6Editor20shouldInsertFragmentEN3WTF10PassRefPtrINS_16DocumentFragmentEEENS2_INS_5RangeEEENS_18EditorInsertActionE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i1 | 0;
 i1 = HEAP32[(HEAP32[i7 >> 2] | 0) + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i8 = 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 i9 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i8 = 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i10 = i9;
   i11 = 0;
  } else {
   i12 = HEAP32[i2 + 36 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i10 = i9;
    i11 = i2;
    break;
   }
   if ((HEAP32[i2 + 40 >> 2] | 0) != (i12 | 0)) {
    i10 = i9;
    i11 = i2;
    break;
   }
   i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 116 >> 2] & 1](i12) | 0;
   i14 = HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 32 >> 2] | 0) + 72 >> 2] | 0;
   if (!i13) {
    i10 = i14;
    i11 = HEAP32[i1 >> 2] | 0;
    break;
   }
   i13 = HEAP32[(HEAP32[i14 >> 2] | 0) + 56 >> 2] | 0;
   i15 = i6 | 0;
   i16 = HEAP32[i12 + 36 >> 2] | 0;
   HEAP32[i15 >> 2] = i16;
   if ((i16 | 0) != 0) {
    i12 = i16 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
   }
   i12 = FUNCTION_TABLE_iiiii[i13 & 1](i14, i6, HEAP32[i3 >> 2] | 0, i4) | 0;
   i14 = HEAP32[i15 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i8 = i12;
    STACKTOP = i5;
    return i8 | 0;
   }
   i15 = i14 | 0;
   i13 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    i8 = i12;
    STACKTOP = i5;
    return i8 | 0;
   } else {
    HEAP32[i15 >> 2] = i13;
    i8 = i12;
    STACKTOP = i5;
    return i8 | 0;
   }
  }
 } while (0);
 i8 = FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i10 >> 2] | 0) + 52 >> 2] & 1](i10, i11 | 0, HEAP32[i3 >> 2] | 0, i4) | 0;
 STACKTOP = i5;
 return i8 | 0;
}
function __ZN7WebCore21TextCheckingParagraphaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 12 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 return i1 | 0;
}
function __ZNK7WebCore6Editor25misspelledSelectionStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 __ZNK7WebCore6Editor12selectedTextENS_20TextIteratorBehaviorE(i4, i2, 0);
 i7 = i4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = 5;
  } else {
   i10 = HEAP32[i8 + 4 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i9 = 5;
    break;
   }
   i11 = i2 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) + 32 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i9 = 5;
    break;
   }
   if ((HEAP32[i13 + 72 >> 2] | 0) == 0) {
    i9 = 5;
    break;
   }
   HEAP32[i5 >> 2] = -1;
   HEAP32[i6 >> 2] = 0;
   i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 72 >> 2] | 0;
   i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 168 >> 2] & 1](i13) | 0;
   i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 20 >> 2] | 0;
   if ((HEAP32[i8 + 16 >> 2] & 32 | 0) == 0) {
    i14 = HEAP32[i8 + 8 >> 2] | 0;
   } else {
    i14 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i8) | 0;
   }
   FUNCTION_TABLE_viiiii[i13 & 1](i12, i14, i10, i5, i6);
   if ((HEAP32[i6 >> 2] | 0) != (i10 | 0)) {
    HEAP32[i1 >> 2] = 0;
    i15 = HEAP32[i7 >> 2] | 0;
    break;
   }
   i10 = HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 32 >> 2] | 0) + 72 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 176 >> 2] & 3](i10, i4);
   i10 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i1 >> 2] = i10;
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i9 | 0) == 5) {
  HEAP32[i1 >> 2] = 0;
  i15 = i8;
 }
 if ((i15 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i15 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i15);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i8 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore6Editor10findStringERKN3WTF6StringEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i5 = i4 | 0;
 i6 = i4 + 64 | 0;
 i7 = i4 + 72 | 0;
 i8 = i4 + 80 | 0;
 i9 = i1 | 0;
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i5, (HEAP32[(HEAP32[i9 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0);
 __ZNK7WebCore16VisibleSelection10firstRangeEv(i7, i5);
 i10 = i7 | 0;
 __ZN7WebCore6Editor13rangeOfStringERKN3WTF6StringEPNS_5RangeEj(i6, i1, i2, HEAP32[i10 >> 2] | 0, i3);
 i3 = i6 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i10 = i3 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i10 >> 2] = i2;
    break;
   }
  }
 } while (0);
 if ((i6 | 0) == 0) {
  i11 = 0;
  __ZN7WebCore16VisibleSelectionD2Ev(i5);
  STACKTOP = i4;
  return i11 | 0;
 }
 i3 = HEAP32[(HEAP32[i9 >> 2] | 0) + 468 >> 2] | 0;
 __ZN7WebCore16VisibleSelectionC1EPKNS_5RangeENS_9EAffinityEb(i8, i6, 1, 0);
 __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i3, i8, 6, 0, 0);
 __ZN7WebCore16VisibleSelectionD2Ev(i8);
 __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(HEAP32[(HEAP32[i9 >> 2] | 0) + 468 >> 2] | 0, __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE, 1);
 i9 = i6 | 0;
 i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
  i11 = 1;
  __ZN7WebCore16VisibleSelectionD2Ev(i5);
  STACKTOP = i4;
  return i11 | 0;
 } else {
  HEAP32[i9 >> 2] = i8;
  i11 = 1;
  __ZN7WebCore16VisibleSelectionD2Ev(i5);
  STACKTOP = i4;
  return i11 | 0;
 }
 return 0;
}
function __ZNK7WebCore6Editor26applyEditingStyleToElementEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i1 | 0;
 i4 = i1 + 16 | 0;
 i5 = i1 + 24 | 0;
 i6 = i1 + 32 | 0;
 i7 = i1 + 40 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 if ((HEAP32[i2 + 12 >> 2] & 8 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i8 = __ZN7WebCore13StyledElement5styleEv(i2) | 0;
 i2 = i8;
 i9 = HEAP32[(HEAP32[i2 >> 2] | 0) + 72 >> 2] | 0;
 __ZN3WTF6StringC1EPKc(i3, H_BASE + 112 | 0);
 i10 = i1 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 FUNCTION_TABLE_viiiii[i9 & 1](i8, 168, i3, 0, i10);
 i10 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i3 = i10 | 0;
   i9 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i3 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[(HEAP32[i2 >> 2] | 0) + 72 >> 2] | 0;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 104 | 0);
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = 0;
 FUNCTION_TABLE_viiiii[i10 & 1](i8, 315, i4, 0, i9);
 i9 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i4 = i9 | 0;
   i10 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i4 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[(HEAP32[i2 >> 2] | 0) + 72 >> 2] | 0;
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 80 | 0);
 i2 = i7 | 0;
 HEAP32[i2 >> 2] = 0;
 FUNCTION_TABLE_viiiii[i9 & 1](i8, 271, i6, 0, i2);
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i6 = i2 | 0;
 i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i1;
  return;
 } else {
  HEAP32[i6 >> 2] = i8;
  STACKTOP = i1;
  return;
 }
}
function __ZNK7WebCore6Editor16compositionRangeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i7 + 36 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = 0;
 } else {
  i9 = HEAP32[i8 + 4 >> 2] | 0;
 }
 i8 = HEAP32[i2 + 12 >> 2] | 0;
 i10 = i9 >>> 0 < i8 >>> 0 ? i9 : i8;
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = i10 >>> 0 < i8 >>> 0 ? i8 : i10;
 i8 = i9 >>> 0 < i2 >>> 0 ? i9 : i2;
 if (i10 >>> 0 >= i8 >>> 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = i7;
 i11 = i7 + 8 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 i11 = HEAP32[i6 >> 2] | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i7 = i11 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 __ZN7WebCore5Range6createERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i(i1, i2, i4, i10, i5, i8);
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 + 8 | 0;
   i5 = i6 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i8 = HEAP32[i9 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i8 + 8 | 0;
 i8 = i9 | 0;
 i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 HEAP32[i8 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 STACKTOP = i3;
 return;
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
function __ZNK7WebCore6Editor12selectedTextENS_20TextIteratorBehaviorE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i7, (HEAP32[(HEAP32[i2 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0);
 i2 = i7 | 0;
 __ZN7WebCore9plainTextEPKNS_5RangeENS_20TextIteratorBehaviorEb(i6, HEAP32[i2 >> 2] | 0, i3, 0);
 i3 = i6 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   HEAP32[i1 >> 2] = i6;
  } else {
   __ZN3WTF10StringImpl7replaceEtPKhj(i5, i6, 0, H_BASE + 144 | 0, 0);
   i7 = HEAP32[i5 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i7;
   if ((i8 | 0) == 0) {
    i9 = i7;
   } else {
    i7 = i8 | 0;
    i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
    } else {
     HEAP32[i7 >> 2] = i10;
    }
    i9 = HEAP32[i3 >> 2] | 0;
   }
   HEAP32[i1 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = i9 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i10 = HEAP32[i3 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i7 = i10 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i3 | 0;
 i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i2 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore6Editor13rangeForPointERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 72 | 0;
 i8 = i4 + 88 | 0;
 i9 = __ZN7WebCore5Frame15documentAtPointERKNS_8IntPointE(HEAP32[i2 >> 2] | 0, i3) | 0;
 if ((i9 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i2 = HEAP32[i9 + 332 >> 2] | 0;
 i9 = HEAP32[i2 + 452 >> 2] | 0;
 if ((i9 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i5, i9 | 0, i3);
 __ZN7WebCore5Frame23visiblePositionForPointERKNS_8IntPointE(i7, i2, i5);
 __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i6, i7, 0);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 8 | 0;
   i2 = i7 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i8, i6);
 i5 = i8 | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 >> 2] = i8;
 do {
  if ((i8 | 0) != 0) {
   i1 = i8 | 0;
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
   i1 = HEAP32[i5 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   i7 = i1 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i7 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN7WebCore16VisibleSelectionD2Ev(i6);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore6Editor14ignoreSpellingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i7 + 32 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i8 + 72 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i3, (HEAP32[i7 + 468 >> 2] | 0) + 32 | 0);
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = (i3 | 0) == 0;
 if (!i7) {
  i8 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] | 0) + 1124 >> 2] | 0;
  HEAP32[i4 >> 2] = 1;
  __ZN7WebCore24DocumentMarkerController13removeMarkersEPNS_5RangeENS_14DocumentMarker11MarkerTypesENS0_37RemovePartiallyOverlappingMarkerOrNotE(i8, i3, i4, 0);
 }
 __ZNK7WebCore6Editor12selectedTextENS_20TextIteratorBehaviorE(i5, i1, 0);
 i1 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] | 0) + 72 >> 2] | 0;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 168 >> 2] & 1](i1) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 3](i6, i5);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if (i7) {
  STACKTOP = i2;
  return;
 }
 i7 = i3 | 0;
 i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i7 >> 2] = i6;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore6Editor13learnSpellingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i7 + 32 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i8 + 72 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i3, (HEAP32[i7 + 468 >> 2] | 0) + 32 | 0);
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = (i3 | 0) == 0;
 if (!i7) {
  i8 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] | 0) + 1124 >> 2] | 0;
  HEAP32[i4 >> 2] = 1;
  __ZN7WebCore24DocumentMarkerController13removeMarkersEPNS_5RangeENS_14DocumentMarker11MarkerTypesENS0_37RemovePartiallyOverlappingMarkerOrNotE(i8, i3, i4, 0);
 }
 __ZNK7WebCore6Editor12selectedTextENS_20TextIteratorBehaviorE(i5, i1, 0);
 i1 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] | 0) + 72 >> 2] | 0;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 168 >> 2] & 1](i1) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] & 3](i6, i5);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if (i7) {
  STACKTOP = i2;
  return;
 }
 i7 = i3 | 0;
 i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i7 >> 2] = i6;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore6Editor10applyStyleEPNS_15StylePropertiesENS_10EditActionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 i7 = HEAP32[(HEAP32[i6 + 468 >> 2] | 0) + 84 >> 2] | 0;
 if ((i7 | 0) == 1) {
  __ZN7WebCore6Editor24computeAndSetTypingStyleEPNS_15StylePropertiesENS_10EditActionE(i1, i2, i3);
  STACKTOP = i4;
  return;
 } else if ((i7 | 0) == 2) {
  if ((i2 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i7 = HEAP32[i6 + 456 >> 2] | 0;
  i6 = __ZN3WTF10fastMallocEj(16) | 0;
  i1 = i6;
  __ZN7WebCore12EditingStyleC1EPKNS_15StylePropertiesE(i1, i2);
  i2 = __ZN3WTF10fastMallocEj(204) | 0;
  __ZN7WebCore17ApplyStyleCommandC1ERNS_8DocumentEPKNS_12EditingStyleENS_10EditActionENS0_14EPropertyLevelE(i2, i7, i1, i3, 0);
  i3 = i5 | 0;
  HEAP32[i3 >> 2] = i2;
  __ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i5);
  i5 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i3 = i5 + 4 | 0;
    i2 = i3 | 0;
    i7 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
    if ((i7 | 0) != 0) {
     HEAP32[i2 >> 2] = i7;
     break;
    }
    i7 = i3 - 4 | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 3](i7);
   }
  } while (0);
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i5 = i6;
  i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore12EditingStyleD1Ev(i1);
   __ZN3WTF8fastFreeEPv(i6);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i5 >> 2] = i7;
   STACKTOP = i4;
   return;
  }
 } else {
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore6Editor30applyParagraphStyleToSelectionEPNS_15StylePropertiesENS_10EditActionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i6 & 4 | 0) == 0) {
  i7 = i6 >>> 3;
 } else {
  i7 = HEAP32[i2 + 16 >> 2] | 0;
 }
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i1 | 0;
 if (!(__ZNK7WebCore16VisibleSelection23isContentRichlyEditableEv((HEAP32[(HEAP32[i7 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0)) {
  STACKTOP = i4;
  return;
 }
 i6 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i6 + 32 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = HEAP32[i7 + 72 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = HEAP32[(HEAP32[i8 >> 2] | 0) + 64 >> 2] | 0;
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i5, (HEAP32[i6 + 468 >> 2] | 0) + 32 | 0);
 i6 = i5 | 0;
 i5 = FUNCTION_TABLE_iiii[i7 & 1](i8, i2, HEAP32[i6 >> 2] | 0) | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   if (i5) {
    break;
   }
   STACKTOP = i4;
   return;
  } else {
   i6 = i8 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    if (i5) {
     break;
    }
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i6 >> 2] = i7;
    if (i5) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 __ZN7WebCore6Editor19applyParagraphStyleEPNS_15StylePropertiesENS_10EditActionE(i1, i2, i3);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore6Editor21applyStyleToSelectionEPNS_15StylePropertiesENS_10EditActionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i6 & 4 | 0) == 0) {
  i7 = i6 >>> 3;
 } else {
  i7 = HEAP32[i2 + 16 >> 2] | 0;
 }
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i1 | 0;
 if (!(__ZNK7WebCore16VisibleSelection23isContentRichlyEditableEv((HEAP32[(HEAP32[i7 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0)) {
  STACKTOP = i4;
  return;
 }
 i6 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i6 + 32 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = HEAP32[i7 + 72 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = HEAP32[(HEAP32[i8 >> 2] | 0) + 64 >> 2] | 0;
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i5, (HEAP32[i6 + 468 >> 2] | 0) + 32 | 0);
 i6 = i5 | 0;
 i5 = FUNCTION_TABLE_iiii[i7 & 1](i8, i2, HEAP32[i6 >> 2] | 0) | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   if (i5) {
    break;
   }
   STACKTOP = i4;
   return;
  } else {
   i6 = i8 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    if (i5) {
     break;
    }
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i6 >> 2] = i7;
    if (i5) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 __ZN7WebCore6Editor10applyStyleEPNS_15StylePropertiesENS_10EditActionE(i1, i2, i3);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore6Editor30applyEditingStyleToBodyElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
 __ZN3WTF12AtomicString3addEPKh(i3, H_BASE + 8 | 0);
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore13ContainerNode20getElementsByTagNameERKN3WTF12AtomicStringE(i4, i6, i5);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i1 = i5 | 0;
   i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i1 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 1](i4) | 0;
 if ((i5 | 0) != 0) {
  i6 = i4;
  i1 = 0;
  while (1) {
   __ZNK7WebCore6Editor26applyEditingStyleToElementEPNS_7ElementE(0, FUNCTION_TABLE_iii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 1](i4, i1) | 0);
   i1 = i1 + 1 | 0;
   if (i1 >>> 0 >= i5 >>> 0) {
    break;
   }
  }
 }
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 + 8 | 0;
 i4 = i5 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i5 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 3](i1);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore6Editor21shouldChangeSelectionERKNS_16VisibleSelectionES3_NS_9EAffinityEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 0;
  STACKTOP = i6;
  return i10 | 0;
 }
 i1 = HEAP32[i9 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i10 = 0;
  STACKTOP = i6;
  return i10 | 0;
 }
 i9 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i7, i2);
 i2 = i7 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i8, i3);
 i3 = i8 | 0;
 i8 = FUNCTION_TABLE_iiiiii[i9 & 1](i1, i7, HEAP32[i3 >> 2] | 0, i4, i5) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i10 = i8;
  STACKTOP = i6;
  return i10 | 0;
 }
 i2 = i5 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  i10 = i8;
  STACKTOP = i6;
  return i10 | 0;
 } else {
  HEAP32[i2 >> 2] = i4;
  i10 = i8;
  STACKTOP = i6;
  return i10 | 0;
 }
 return 0;
}
function __ZN7WebCore6Editor24isSelectionUngrammaticalEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 | 0;
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i3, (HEAP32[(HEAP32[i6 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0);
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 if ((i3 | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i1 = HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = HEAP32[i1 + 72 >> 2] | 0;
 }
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = i3;
 i6 = i3 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 __ZN7WebCore18TextCheckingHelperC1EPNS_12EditorClientEN3WTF10PassRefPtrINS_5RangeEEE(i4, i8, i5);
 i5 = __ZNK7WebCore18TextCheckingHelper15isUngrammaticalEv(i4) | 0;
 __ZN7WebCore18TextCheckingHelperD1Ev(i4);
 i4 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i1 = i4 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i1 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
  i7 = i5;
  STACKTOP = i2;
  return i7 | 0;
 } else {
  HEAP32[i6 >> 2] = i4;
  i7 = i5;
  STACKTOP = i2;
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore6Editor19applyParagraphStyleEPNS_15StylePropertiesENS_10EditActionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if (((HEAP32[(HEAP32[i6 + 468 >> 2] | 0) + 84 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0 | (i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = HEAP32[i6 + 456 >> 2] | 0;
 i6 = __ZN3WTF10fastMallocEj(16) | 0;
 i7 = i6;
 __ZN7WebCore12EditingStyleC1EPKNS_15StylePropertiesE(i7, i2);
 i2 = __ZN3WTF10fastMallocEj(204) | 0;
 __ZN7WebCore17ApplyStyleCommandC1ERNS_8DocumentEPKNS_12EditingStyleENS_10EditActionENS0_14EPropertyLevelE(i2, i1, i7, i3, 1);
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = i2;
 __ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i5);
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i2 = i3 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i3 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 3](i1);
  }
 } while (0);
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i6;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore12EditingStyleD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i6);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
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
function __ZN7WebCore6Editor26increaseSelectionListLevelEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 do {
  if (__ZNK7WebCore16VisibleSelection23isContentRichlyEditableEv((HEAP32[(HEAP32[i5 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   if ((HEAP32[(HEAP32[i6 + 468 >> 2] | 0) + 84 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore33IncreaseSelectionListLevelCommand26increaseSelectionListLevelEPNS_8DocumentE(i4, HEAP32[i6 + 456 >> 2] | 0);
   i6 = i4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   if ((HEAP8[i2 + 32 | 0] & 1) == 0) {
    __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(HEAP32[(HEAP32[i5 >> 2] | 0) + 468 >> 2] | 0, __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE, 1);
   }
   HEAP32[i1 >> 2] = i7;
   if ((i7 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i6 = HEAP32[i7 + 8 >> 2] | 0;
   i8 = i7 + 8 | 0;
   HEAP32[i8 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i3;
 return;
}
function __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = i6 | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore6Editor15toggleUnderlineEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 40 | 0);
 __ZN7WebCore6Editor7commandERKN3WTF6StringE(i3, i1, i4);
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = 0;
 __ZNK7WebCore6Editor7Command7executeERKN3WTF6StringEPNS_5EventE(i3, i5, 0) | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i1 = i5 | 0;
   i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i1 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i6 = i3 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i6 >> 2] = i1;
    break;
   }
   i1 = i3 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 3](i1);
  }
 } while (0);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i5 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore6Editor10toggleBoldEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 56 | 0);
 __ZN7WebCore6Editor7commandERKN3WTF6StringE(i3, i1, i4);
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = 0;
 __ZNK7WebCore6Editor7Command7executeERKN3WTF6StringEPNS_5EventE(i3, i5, 0) | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i1 = i5 | 0;
   i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i1 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i6 = i3 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i6 >> 2] = i1;
    break;
   }
   i1 = i3 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 3](i1);
  }
 } while (0);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i5 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore6EditorD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 __ZN7WebCore16VisibleSelectionD2Ev(i1 + 48 | 0);
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore12SpellCheckerD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2 | 0);
 }
 i2 = i1 + 28 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 24 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 + 4 | 0;
 i3 = i1 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = i2;
  return;
 }
 i2 = i1 - 4 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 3](i2);
 return;
}
function __ZN7WebCore6EditorD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 __ZN7WebCore16VisibleSelectionD2Ev(i1 + 48 | 0);
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore12SpellCheckerD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2 | 0);
 }
 i2 = i1 + 28 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 24 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 + 4 | 0;
 i3 = i1 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = i2;
  return;
 }
 i2 = i1 - 4 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 3](i2);
 return;
}
function __ZNK7WebCore6Editor19findEventTargetFromERKNS_16VisibleSelectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i7 = i4 + 8 | 0;
  i8 = 0;
  i9 = i7;
  i10 = i7;
 } else {
  i7 = i6 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  i7 = i4 + 8 | 0;
  i6 = i7;
  i8 = HEAP32[i6 >> 2] & -8;
  i9 = i7;
  i10 = i6;
 }
 HEAP32[i4 + 4 >> 2] = HEAP32[i2 + 28 >> 2];
 i6 = HEAP32[i2 + 32 >> 2] | 0;
 i2 = i8 | i6 & 7;
 HEAP32[i10 >> 2] = i2;
 HEAP8[i9] = i2 & 255 & -9 | i6 & 8;
 i6 = __ZNK7WebCore8Position7elementEv(i4) | 0;
 i4 = i6 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 8 | 0;
   i9 = i5 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 if ((i6 | 0) != 0) {
  i11 = i4;
  STACKTOP = i3;
  return i11 | 0;
 }
 i11 = __ZNK7WebCore8Document4bodyEv(HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0) | 0;
 STACKTOP = i3;
 return i11 | 0;
}
function __ZN7WebCore6Editor28findStringAndScrollToVisibleERKN3WTF6StringEPNS_5RangeEj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 24 | 0;
 i10 = i9 | 0;
 __ZN7WebCore6Editor13rangeOfStringERKN3WTF6StringEPNS_5RangeEj(i7, i2, i3, i4, i5);
 i5 = i7 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i7 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 i5 = __ZNK7WebCore5Range9firstNodeEv(i7) | 0;
 i4 = i5 + 32 | 0;
 if ((HEAP32[i5 + 12 >> 2] & 2048 | 0) == 0) {
  i11 = i4 | 0;
 } else {
  i11 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i11 >> 2] | 0;
 __ZNK7WebCore5Range11boundingBoxEv(i9, i7);
 i11 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i8 + 4 >> 2] = i11;
 i11 = i9 + 8 | 0;
 i9 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i8 + 8 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i8 + 12 >> 2] = i9;
 __ZN7WebCore12RenderObject19scrollRectToVisibleERKNS_10LayoutRectERKNS_15ScrollAlignmentES6_(i4, i8, __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE, __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE) | 0;
 HEAP32[i1 >> 2] = i7;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore6Editor30selectionStartCSSPropertyValueENS_13CSSPropertyIDE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i2 | 0;
 __ZN7WebCore12EditingStyle21styleAtSelectionStartERKNS_16VisibleSelectionEb(i5, (HEAP32[(HEAP32[i6 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0, (i3 | 0) == 23);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = (i5 | 0) == 0;
 do {
  if (i2) {
   i7 = 3;
  } else {
   i8 = HEAP32[i5 + 4 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i7 = 3;
    break;
   }
   if ((i3 | 0) == 6) {
    __ZN3WTF6String6numberEi(i1, __ZNK7WebCore12EditingStyle14legacyFontSizeEPNS_8DocumentE(i5, HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] | 0) | 0);
    break;
   } else {
    __ZNK7WebCore15StyleProperties16getPropertyValueENS_13CSSPropertyIDE(i1, i8 | 0, i3);
    break;
   }
  }
 } while (0);
 if ((i7 | 0) == 3) {
  HEAP32[i1 >> 2] = 0;
 }
 if (i2) {
  STACKTOP = i4;
  return;
 }
 i2 = i5 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore12EditingStyleD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore6Editor24replaceSelectionWithTextERKN3WTF6StringEbb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i6, (HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0);
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore22createFragmentFromTextERNS_5RangeERKN3WTF6StringE(i7, i6, i2);
 __ZN7WebCore6Editor28replaceSelectionWithFragmentEN3WTF10PassRefPtrINS_16DocumentFragmentEEEbbb(i1, i7, i3, i4, 1);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 8 | 0;
   i3 = i7 | 0;
   i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i4 = i6 | 0;
 i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i4 >> 2] = i7;
  STACKTOP = i5;
  return;
 }
}
function __ZNK7WebCore6Editor22selectionStartHasStyleENS_13CSSPropertyIDERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __ZN3WTF10fastMallocEj(16) | 0;
 i7 = i6;
 __ZN7WebCore12EditingStyleC1ENS_13CSSPropertyIDERKN3WTF6StringE(i7, i2, i3);
 __ZN7WebCore12EditingStyle21styleAtSelectionStartERKNS_16VisibleSelectionEb(i5, (HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0, (i2 | 0) == 23);
 i2 = i5 | 0;
 i5 = (__ZNK7WebCore12EditingStyle15triStateOfStyleEPS0_(i7, HEAP32[i2 >> 2] | 0) | 0) != 0;
 i1 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i2 = i1 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return i5 | 0;
 }
 i1 = i6;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore12EditingStyleD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i6);
  STACKTOP = i4;
  return i5 | 0;
 } else {
  HEAP32[i1 >> 2] = i3;
  STACKTOP = i4;
  return i5 | 0;
 }
 return 0;
}
function __ZNK7WebCore6Editor6canCutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0;
 do {
  if ((HEAP8[i1 + 1576 | 0] & 4) == 0) {
   i3 = 6;
  } else {
   i4 = __ZNK7WebCore8Document4bodyEv(i1) | 0;
   if ((i4 | 0) == 0) {
    i3 = 6;
    break;
   }
   i5 = HEAP32[i4 + 36 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i3 = 6;
    break;
   }
   if ((HEAP32[i5 + 12 >> 2] & 16 | 0) == 0) {
    i3 = 6;
    break;
   }
   if ((HEAP32[(HEAP32[i5 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i3 = 6;
   }
  }
 } while (0);
 do {
  if ((i3 | 0) == 6) {
   i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 468 >> 2] | 0;
   if ((HEAP32[i1 + 84 >> 2] | 0) != 2) {
    i6 = 0;
    return i6 | 0;
   }
   if (__ZNK7WebCore14FrameSelection17isInPasswordFieldEv(i1) | 0) {
    i6 = 0;
   } else {
    break;
   }
   return i6 | 0;
  }
 } while (0);
 i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 468 >> 2] | 0;
 if ((HEAP32[i3 + 84 >> 2] | 0) != 2) {
  i6 = 0;
  return i6 | 0;
 }
 i6 = (__ZNK7WebCore16VisibleSelection19rootEditableElementEv(i3 + 32 | 0) | 0) != 0;
 return i6 | 0;
}
function __ZN7WebCore6Editor5pasteERNS_10PasteboardE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if (!(__ZN7WebCore6Editor16dispatchCPPEventERKN3WTF12AtomicStringENS_21ClipboardAccessPolicyE(i1, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 296 | 0, 4) | 0)) {
  return;
 }
 i3 = i1 | 0;
 if ((__ZNK7WebCore16VisibleSelection19rootEditableElementEv((HEAP32[(HEAP32[i3 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0) == 0) {
  return;
 }
 __ZN7WebCore6Editor38updateMarkersForWordsAffectedByEditingEb(i1, 0);
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i4 + 456 >> 2] | 0) + 340 >> 2] | 0;
 i6 = (i5 | 0) == 0;
 if (i6) {
  i7 = 0;
  i8 = i4;
 } else {
  i4 = i5 + 136 | 0;
  i9 = HEAP8[i4] | 0;
  HEAP8[i4] = i9 | 4;
  i7 = i9 & 4;
  i8 = HEAP32[i3 >> 2] | 0;
 }
 if (__ZNK7WebCore16VisibleSelection23isContentRichlyEditableEv((HEAP32[i8 + 468 >> 2] | 0) + 32 | 0) | 0) {
  __ZN7WebCore6Editor19pasteWithPasteboardEPNS_10PasteboardEb(i1, i2, 1);
 } else {
  __ZN7WebCore6Editor30pasteAsPlainTextWithPasteboardERNS_10PasteboardE(i1, i2);
 }
 if (i6) {
  return;
 }
 i6 = i5 + 136 | 0;
 HEAP8[i6] = HEAP8[i6] & -5 | i7;
 return;
}
function __ZN7WebCore6Editor30clearMisspellingsAndBadGrammarERKNS_16VisibleSelectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i4, i2);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 | 0;
 i1 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0) + 1124 >> 2] | 0;
 HEAP32[i5 >> 2] = 1;
 __ZN7WebCore24DocumentMarkerController13removeMarkersEPNS_5RangeENS_14DocumentMarker11MarkerTypesENS0_37RemovePartiallyOverlappingMarkerOrNotE(i1, i4, i5, 0);
 i5 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0) + 1124 >> 2] | 0;
 HEAP32[i6 >> 2] = 2;
 __ZN7WebCore24DocumentMarkerController13removeMarkersEPNS_5RangeENS_14DocumentMarker11MarkerTypesENS0_37RemovePartiallyOverlappingMarkerOrNotE(i5, i4, i6, 0);
 i6 = i4 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore6Editor18confirmCompositionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i4 | 0;
 i7 = HEAP32[i5 + 36 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i5 = i7 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = HEAP32[i1 + 12 >> 2] | 0;
 __ZNK3WTF6String9substringEjj(i3, i4, i5, (HEAP32[i1 + 16 >> 2] | 0) - i5 | 0);
 __ZN7WebCore6Editor14setCompositionERKN3WTF6StringENS0_18SetCompositionModeE(i1, i3, 0);
 i1 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i6 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore6Editor19insertUnorderedListEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 if (!(__ZNK7WebCore16VisibleSelection23isContentRichlyEditableEv((HEAP32[(HEAP32[i5 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0)) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore17InsertListCommand10insertListERNS_8DocumentENS0_4TypeE(i4, HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0, 1);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((HEAP8[i2 + 32 | 0] & 1) == 0) {
  __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(HEAP32[(HEAP32[i5 >> 2] | 0) + 468 >> 2] | 0, __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE, 1);
 }
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i4 + 8 >> 2] | 0;
 i5 = i4 + 8 | 0;
 HEAP32[i5 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore6Editor17insertOrderedListEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 if (!(__ZNK7WebCore16VisibleSelection23isContentRichlyEditableEv((HEAP32[(HEAP32[i5 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0)) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore17InsertListCommand10insertListERNS_8DocumentENS0_4TypeE(i4, HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0, 0);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((HEAP8[i2 + 32 | 0] & 1) == 0) {
  __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(HEAP32[(HEAP32[i5 >> 2] | 0) + 468 >> 2] | 0, __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE, 1);
 }
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i4 + 8 >> 2] | 0;
 i5 = i4 + 8 | 0;
 HEAP32[i5 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore6Editor35isSpellCheckingEnabledInFocusedNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0) + 56 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = i2 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 do {
  if ((HEAP32[i2 + 12 >> 2] & 4 | 0) == 0) {
   i1 = HEAP32[i2 + 16 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i4 = 0;
    break;
   }
   if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
    i4 = 0;
    break;
   }
   i5 = i1;
   i6 = 7;
  } else {
   i5 = i2;
   i6 = 7;
  }
 } while (0);
 do {
  if ((i6 | 0) == 7) {
   if ((i5 | 0) == 0) {
    i4 = 0;
    break;
   }
   i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 504 >> 2] & 1](i5) | 0;
  }
 } while (0);
 i5 = i2 + 8 | 0;
 i2 = i5 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  i3 = i4;
  return i3 | 0;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  i3 = i4;
  return i3 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 i3 = i4;
 return i3 | 0;
}
function __ZN7WebCore6Editor35increaseSelectionListLevelUnorderedEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 do {
  if (__ZNK7WebCore16VisibleSelection23isContentRichlyEditableEv((HEAP32[(HEAP32[i5 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   if ((HEAP32[(HEAP32[i6 + 468 >> 2] | 0) + 84 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore33IncreaseSelectionListLevelCommand35increaseSelectionListLevelUnorderedEPNS_8DocumentE(i4, HEAP32[i6 + 456 >> 2] | 0);
   i6 = i4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   if ((HEAP8[i2 + 32 | 0] & 1) == 0) {
    __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(HEAP32[(HEAP32[i5 >> 2] | 0) + 468 >> 2] | 0, __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE, 1);
   }
   HEAP32[i1 >> 2] = i7;
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore6Editor33increaseSelectionListLevelOrderedEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 do {
  if (__ZNK7WebCore16VisibleSelection23isContentRichlyEditableEv((HEAP32[(HEAP32[i5 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   if ((HEAP32[(HEAP32[i6 + 468 >> 2] | 0) + 84 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore33IncreaseSelectionListLevelCommand33increaseSelectionListLevelOrderedEPNS_8DocumentE(i4, HEAP32[i6 + 456 >> 2] | 0);
   i6 = i4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   if ((HEAP8[i2 + 32 | 0] & 1) == 0) {
    __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(HEAP32[(HEAP32[i5 >> 2] | 0) + 468 >> 2] | 0, __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE, 1);
   }
   HEAP32[i1 >> 2] = i7;
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore6Editor24guessesForMisspelledWordERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 i6 = HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = HEAP32[i6 + 72 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 168 >> 2] & 1](i2) | 0;
 i2 = HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] | 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = 0;
 FUNCTION_TABLE_viiii[i2 & 1](i6, i3, i5, i1);
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i1 | 0;
 i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i7 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore6Editor30deleteSelectionWithSmartDeleteEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if ((HEAP32[(HEAP32[i5 + 468 >> 2] | 0) + 84 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 + 456 >> 2] | 0;
 i5 = __ZN3WTF10fastMallocEj(344) | 0;
 __ZN7WebCore22DeleteSelectionCommandC1ERNS_8DocumentEbbbbb(i5, i1, i2, 1, 0, 0, 1);
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = i5;
 __ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i4);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i4 + 4 | 0;
 i4 = i2 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 i5 = i2 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore6Editor16pasteAsPlainTextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (!(__ZN7WebCore6Editor16dispatchCPPEventERKN3WTF12AtomicStringENS_21ClipboardAccessPolicyE(i1, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 296 | 0, 4) | 0)) {
  STACKTOP = i2;
  return;
 }
 if ((__ZNK7WebCore16VisibleSelection19rootEditableElementEv((HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore6Editor38updateMarkersForWordsAffectedByEditingEb(i1, 0);
 __ZN7WebCore10Pasteboard21createForCopyAndPasteEv(i3);
 i4 = i3 | 0;
 __ZN7WebCore6Editor30pasteAsPlainTextWithPasteboardERNS_10PasteboardE(i1, HEAP32[i4 >> 2] | 0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF8fastFreeEPv(i1 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore6Editor13addToKillRingEPNS_5RangeEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 33 | 0;
 i7 = i1 + 36 | 0;
 if ((HEAP8[i6] & 1) != 0) {
  __ZN7WebCore8KillRing16startNewSequenceEv(HEAP32[i7 >> 2] | 0);
 }
 __ZN7WebCore9plainTextEPKNS_5RangeENS_20TextIteratorBehaviorEb(i5, i2, 0, 0);
 i2 = HEAP32[i7 >> 2] | 0;
 if (i3) {
  __ZN7WebCore8KillRing7prependERKN3WTF6StringE(i2, i5);
 } else {
  __ZN7WebCore8KillRing6appendERKN3WTF6StringE(i2, i5);
 }
 HEAP8[i6] = 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i6 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore6Editor29markMisspellingsAndBadGrammarERKNS_16VisibleSelectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = 0;
  } else {
   i6 = HEAP32[i4 + 72 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i5 = 0;
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 1](i6) | 0)) {
    i5 = 0;
    break;
   }
   i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i5 = 0;
    break;
   }
   i7 = HEAP32[i6 + 72 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i5 = 0;
    break;
   }
   i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 32 >> 2] & 1](i7) | 0;
  }
 } while (0);
 __ZN7WebCore6Editor29markMisspellingsAndBadGrammarERKNS_16VisibleSelectionEbS3_(i1, i2, i5, i2);
 return;
}
function __ZNK7WebCore6Editor7canCopyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0;
 do {
  if ((HEAP8[i1 + 1576 | 0] & 4) != 0) {
   i3 = __ZNK7WebCore8Document4bodyEv(i1) | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i3 + 36 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   if ((HEAP32[i4 + 12 >> 2] & 16 | 0) == 0) {
    break;
   }
   if ((HEAP32[(HEAP32[i4 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i5 = 1;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 468 >> 2] | 0;
 if ((HEAP32[i1 + 84 >> 2] | 0) != 2) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = (__ZNK7WebCore14FrameSelection17isInPasswordFieldEv(i1) | 0) ^ 1;
 return i5 | 0;
}
function __ZN7WebCore6Editor5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i3 = i1 + 24 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   i2 = i1 + 28 | 0;
   if ((HEAP32[i2 >> 2] | 0) != 0) {
    HEAP32[i2 >> 2] = 0;
   }
   i2 = i1 + 20 | 0;
   i5 = HEAP32[i2 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   HEAP32[i2 >> 2] = 0;
   HEAP32[i3 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 HEAP8[i1 + 34 | 0] = 0;
 HEAP32[i1 + 112 >> 2] = 0;
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore5RangeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore6Editor7outdentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
 i1 = __ZN3WTF10fastMallocEj(180) | 0;
 __ZN7WebCore20IndentOutdentCommandC1ERNS_8DocumentENS0_11EIndentTypeEi(i1, i4, 1, 0);
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i1;
 __ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 + 4 | 0;
 i3 = i4 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i4 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 3](i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore6Editor6indentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
 i1 = __ZN3WTF10fastMallocEj(180) | 0;
 __ZN7WebCore20IndentOutdentCommandC1ERNS_8DocumentENS0_11EIndentTypeEi(i1, i4, 0, 0);
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i1;
 __ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 + 4 | 0;
 i3 = i4 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i4 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 3](i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore6Editor24removeFormattingAndStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
 i1 = __ZN3WTF10fastMallocEj(152) | 0;
 __ZN7WebCore19RemoveFormatCommandC1ERNS_8DocumentE(i1, i4);
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i1;
 __ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 + 4 | 0;
 i3 = i4 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i4 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 3](i1);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore6Editor17shouldDeleteRangeEPNS_5RangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 do {
  if ((i2 | 0) == 0) {
   i4 = 0;
  } else {
   i5 = i3 | 0;
   HEAP32[i5 >> 2] = 0;
   if (__ZNK7WebCore5Range9collapsedERi(i2, i5) | 0) {
    i4 = 0;
    break;
   }
   if (!(__ZNK7WebCore6Editor14canDeleteRangeEPNS_5RangeE(0, i2) | 0)) {
    i4 = 0;
    break;
   }
   i5 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i4 = 0;
    break;
   }
   i6 = HEAP32[i5 + 72 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i4 = 0;
    break;
   }
   i4 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 1](i6, i2) | 0;
  }
 } while (0);
 STACKTOP = i3;
 return i4 | 0;
}
function __ZN7WebCore6Editor27readPlainTextFromPasteboardERNS_10PasteboardE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore10Pasteboard4readERNS_19PasteboardPlainTextE(i3, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i4;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore6Editor22showSpellingGuessPanelEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i3 + 72 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 184 >> 2] & 1](i4) | 0) {
  i4 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0) + 72 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 180 >> 2] & 3](i4, 0);
  return;
 } else {
  __ZN7WebCore6Editor24advanceToNextMisspellingEb(i1, 1);
  i1 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0) + 72 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 180 >> 2] & 3](i1, 1);
  return;
 }
}
function __ZN7WebCore6Editor26decreaseSelectionListLevelEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 if (!(__ZNK7WebCore16VisibleSelection23isContentRichlyEditableEv((HEAP32[(HEAP32[i2 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0)) {
  return;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[(HEAP32[i3 + 468 >> 2] | 0) + 84 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore33DecreaseSelectionListLevelCommand26decreaseSelectionListLevelEPNS_8DocumentE(HEAP32[i3 + 456 >> 2] | 0);
 if ((HEAP8[i1 + 32 | 0] & 1) != 0) {
  return;
 }
 __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(HEAP32[(HEAP32[i2 >> 2] | 0) + 468 >> 2] | 0, __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE, 1);
 return;
}
function __ZN7WebCore6Editor37cancelCompositionIfSelectionIsInvalidEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 8 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   i6 = 0;
  } else {
   if ((HEAP8[i1 + 32 | 0] & 1) != 0) {
    i6 = 0;
    break;
   }
   if (__ZNK7WebCore6Editor23getCompositionSelectionERjS1_(i1, i3, i4) | 0) {
    i6 = 0;
    break;
   }
   if ((HEAP32[i5 >> 2] | 0) == 0) {
    i6 = 1;
    break;
   }
   __ZN7WebCore6Editor14setCompositionERKN3WTF6StringENS0_18SetCompositionModeE(i1, __ZN3WTF11emptyStringEv() | 0, 1);
   i6 = 1;
  }
 } while (0);
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore6Editor17selectionHasStyleENS_13CSSPropertyIDERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = __ZN3WTF10fastMallocEj(16) | 0;
 i5 = i4;
 __ZN7WebCore12EditingStyleC1ENS_13CSSPropertyIDERKN3WTF6StringE(i5, i2, i3);
 i3 = __ZNK7WebCore12EditingStyle15triStateOfStyleERKNS_16VisibleSelectionE(i5, (HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0;
 if ((i4 | 0) == 0) {
  return i3 | 0;
 }
 i1 = i4;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore12EditingStyleD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i4);
  return i3 | 0;
 } else {
  HEAP32[i1 >> 2] = i2;
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore6Editor14markBadGrammarERKNS_16VisibleSelectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore6Editor28markMisspellingsOrBadGrammarERKNS_16VisibleSelectionEbRN3WTF6RefPtrINS_5RangeEEE(i1, i2, 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i4 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore6Editor25isSpellCheckingEnabledForEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 do {
  if ((HEAP32[i2 + 12 >> 2] & 4 | 0) == 0) {
   i1 = HEAP32[i2 + 16 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i3 = 0;
    return i3 | 0;
   }
   if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
    i3 = 0;
    return i3 | 0;
   } else {
    i4 = i1;
    break;
   }
  } else {
   i4 = i2;
  }
 } while (0);
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 504 >> 2] & 1](i4) | 0;
 return i3 | 0;
}
function __ZN7WebCore6EditorC2ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 _memset(i1 + 20 | 0, 0, 15) | 0;
 HEAP32[i1 + 36 >> 2] = __ZN3WTF10fastMallocEj(1) | 0;
 i3 = __ZN3WTF10fastMallocEj(96) | 0;
 __ZN7WebCore12SpellCheckerC1ERNS_5FrameE(i3, i2);
 HEAP32[i1 + 40 >> 2] = i3;
 i3 = __ZN3WTF10fastMallocEj(4) | 0;
 HEAP32[i3 >> 2] = i2;
 HEAP32[i1 + 44 >> 2] = i3;
 __ZN7WebCore16VisibleSelectionC1Ev(i1 + 48 | 0);
 HEAP8[i1 + 108 | 0] = 0;
 HEAP32[i1 + 112 >> 2] = 0;
 HEAP8[i1 + 116 | 0] = 0;
 return;
}
function __ZN7WebCore6EditorC1ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 _memset(i1 + 20 | 0, 0, 15) | 0;
 HEAP32[i1 + 36 >> 2] = __ZN3WTF10fastMallocEj(1) | 0;
 i3 = __ZN3WTF10fastMallocEj(96) | 0;
 __ZN7WebCore12SpellCheckerC1ERNS_5FrameE(i3, i2);
 HEAP32[i1 + 40 >> 2] = i3;
 i3 = __ZN3WTF10fastMallocEj(4) | 0;
 HEAP32[i3 >> 2] = i2;
 HEAP32[i1 + 44 >> 2] = i3;
 __ZN7WebCore16VisibleSelectionC1Ev(i1 + 48 | 0);
 HEAP8[i1 + 108 | 0] = 0;
 HEAP32[i1 + 112 >> 2] = 0;
 HEAP8[i1 + 116 | 0] = 0;
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
function __ZN7WebCore6Editor34setMarkedTextMatchesAreHighlightedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 108 | 0;
 if ((i2 & 1 | 0) == (HEAP8[i5] & 1 | 0)) {
  STACKTOP = i3;
  return;
 }
 HEAP8[i5] = i2 & 1;
 i2 = HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0) + 1124 >> 2] | 0;
 HEAP32[i4 >> 2] = 4;
 __ZN7WebCore24DocumentMarkerController14repaintMarkersENS_14DocumentMarker11MarkerTypesE(i2, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore6Editor20canSmartCopyOrDeleteEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 1](i4) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 468 >> 2] | 0) + 108 >> 2] | 0) == 1;
 return i3 | 0;
}
function __ZN7WebCore6Editor29canSmartReplaceWithPasteboardERNS_10PasteboardE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = HEAP32[i3 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 1](i1) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = __ZN7WebCore10Pasteboard15canSmartReplaceEv(i2) | 0;
 return i4 | 0;
}
function __ZN7WebCore6Editor7copyURLERKNS_3URLERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i1 | 0;
 __ZN7WebCore10Pasteboard21createForCopyAndPasteEv(i4);
 i5 = i4 | 0;
 __ZN7WebCore6Editor7copyURLERKNS_3URLERKN3WTF6StringERNS_10PasteboardE(0, i2, i3, HEAP32[i5 >> 2] | 0);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 __ZN3WTF8fastFreeEPv(i3 | 0);
 STACKTOP = i1;
 return;
}
function __ZNK7WebCore6Editor16shouldInsertTextERKN3WTF6StringEPNS_5RangeENS_18EditorInsertActionE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i1 = HEAP32[i5 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i6 = FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 56 >> 2] & 1](i1, i2, i3, i4) | 0;
 return i6 | 0;
}
function __ZN7WebCore6Editor30pasteAsPlainTextBypassingDHTMLEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 __ZN7WebCore10Pasteboard21createForCopyAndPasteEv(i3);
 i4 = i3 | 0;
 __ZN7WebCore6Editor30pasteAsPlainTextWithPasteboardERNS_10PasteboardE(i1, HEAP32[i4 >> 2] | 0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF8fastFreeEPv(i1 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore6Editor27doTextFieldCommandFromEventEPNS_7ElementEPNS_13KeyboardEventE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i1 = HEAP32[i4 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 156 >> 2] & 1](i1, i2, i3) | 0;
 return i5 | 0;
}
function __ZN7WebCore6Editor20clearLastEditCommandEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 3](i3);
 return;
}
function __ZN7WebCore6Editor34notifyComponentsOnChangedSelectionERKNS_16VisibleSelectionEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i2 = HEAP32[i3 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = HEAP32[i2 + 72 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 80 >> 2] & 3](i4, i3);
  }
 } while (0);
 HEAP8[i1 + 33 | 0] = 1;
 return;
}
function __ZN7WebCore6Editor35setIgnoreCompositionSelectionChangeEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 32 | 0;
 if ((HEAP8[i3] & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i2 & 1;
 if (i2) {
  return;
 }
 __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0, __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE, 0);
 return;
}
function __ZN7WebCore6Editor29canIncreaseSelectionListLevelEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 if (!(__ZNK7WebCore16VisibleSelection23isContentRichlyEditableEv((HEAP32[(HEAP32[i2 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZN7WebCore33IncreaseSelectionListLevelCommand29canIncreaseSelectionListLevelEPNS_8DocumentE(HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0) | 0;
 return i3 | 0;
}
function __ZN7WebCore6Editor29canDecreaseSelectionListLevelEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 if (!(__ZNK7WebCore16VisibleSelection23isContentRichlyEditableEv((HEAP32[(HEAP32[i2 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZN7WebCore33DecreaseSelectionListLevelCommand29canDecreaseSelectionListLevelEPNS_8DocumentE(HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0) | 0;
 return i3 | 0;
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
function __ZN7WebCore6Editor18insertDictatedTextERKN3WTF6StringERKNS1_6VectorINS_20DictationAlternativeELj0ENS1_15CrashOnOverflowEEEPNS_5EventE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore25AlternativeTextController18insertDictatedTextERKN3WTF6StringERKNS1_6VectorINS_20DictationAlternativeELj0ENS1_15CrashOnOverflowEEEPNS_5EventE(HEAP32[i1 + 44 >> 2] | 0, i2, i3, i4) | 0;
}
function __ZN7WebCore6Editor5pasteEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 __ZN7WebCore10Pasteboard21createForCopyAndPasteEv(i3);
 i4 = i3 | 0;
 __ZN7WebCore6Editor5pasteERNS_10PasteboardE(i1, HEAP32[i4 >> 2] | 0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF8fastFreeEPv(i1 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore6Editor24respondToChangedContentsERKNS_16VisibleSelectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore6Editor38updateMarkersForWordsAffectedByEditingEb(i1, 1);
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 76 >> 2] & 3](i1);
 return;
}
function __ZN7WebCore6Editor12tryDHTMLCopyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (__ZNK7WebCore14FrameSelection17isInPasswordFieldEv(HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0) | 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (__ZN7WebCore6Editor16dispatchCPPEventERKN3WTF12AtomicStringENS_21ClipboardAccessPolicyE(i1, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 88 | 0, 2) | 0) ^ 1;
 return i2 | 0;
}
function __ZN7WebCore6Editor12canDHTMLCopyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (__ZNK7WebCore14FrameSelection17isInPasswordFieldEv(HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0) | 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (__ZN7WebCore6Editor16dispatchCPPEventERKN3WTF12AtomicStringENS_21ClipboardAccessPolicyE(i1, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 8 | 0, 0) | 0) ^ 1;
 return i2 | 0;
}
function __ZN7WebCore6Editor11tryDHTMLCutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (__ZNK7WebCore14FrameSelection17isInPasswordFieldEv(HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0) | 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (__ZN7WebCore6Editor16dispatchCPPEventERKN3WTF12AtomicStringENS_21ClipboardAccessPolicyE(i1, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 92 | 0, 2) | 0) ^ 1;
 return i2 | 0;
}
function __ZN7WebCore6Editor11canDHTMLCutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (__ZNK7WebCore14FrameSelection17isInPasswordFieldEv(HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0) | 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (__ZN7WebCore6Editor16dispatchCPPEventERKN3WTF12AtomicStringENS_21ClipboardAccessPolicyE(i1, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 12 | 0, 0) | 0) ^ 1;
 return i2 | 0;
}
function __ZN7WebCore6Editor18shouldBeginEditingEPNS_5RangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = HEAP32[i3 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 44 >> 2] & 1](i1, i2) | 0;
 return i4 | 0;
}
function __ZN7WebCore6Editor16shouldEndEditingEPNS_5RangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = HEAP32[i3 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 1](i1, i2) | 0;
 return i4 | 0;
}
function __ZN7WebCore6Editor30willWriteSelectionToPasteboardEN3WTF10PassRefPtrINS_5RangeEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 88 >> 2] & 3](i1, HEAP32[i2 >> 2] | 0);
 return;
}
function __ZNK7WebCore6Editor32isContinuousSpellCheckingEnabledEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 1](i1) | 0;
 return i3 | 0;
}
function __ZN7WebCore6Editor33isSelectTrailingWhitespaceEnabledEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 1](i1) | 0;
 return i3 | 0;
}
function __ZN7WebCore6Editor36revealSelectionAfterEditingOperationERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP8[i1 + 32 | 0] & 1) != 0) {
  return;
 }
 __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0, i2, i3);
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
function __ZN7WebCore6Editor24smartInsertDeleteEnabledEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 1](i1) | 0;
 return i3 | 0;
}
function __ZN7WebCore6Editor24isGrammarCheckingEnabledEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 1](i1) | 0;
 return i3 | 0;
}
function __ZN7WebCore6Editor23spellCheckerDocumentTagEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 40 >> 2] & 1](i1) | 0;
 return i3 | 0;
}
function __ZN7WebCore6Editor22spellingPanelIsShowingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 184 >> 2] & 1](i1) | 0;
 return i3 | 0;
}
function __ZNK7WebCore6Editor11textCheckerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 168 >> 2] & 1](i1) | 0;
 return i3 | 0;
}
function __ZNK7WebCore6Editor24selectedTextForClipboardEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP8[(HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] | 0) + 189 | 0] & 64) == 0) {
  __ZNK7WebCore6Editor12selectedTextENS_20TextIteratorBehaviorE(i1, i2, 0);
  return;
 } else {
  __ZNK7WebCore6Editor12selectedTextENS_20TextIteratorBehaviorE(i1, i2, 128);
  return;
 }
}
function __ZN7WebCore6Editor24handleInputMethodKeydownEPNS_13KeyboardEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 140 >> 2] & 3](i1, i2);
 return;
}
function __ZN7WebCore6Editor7canUndoEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 120 >> 2] & 1](i1) | 0;
 return i3 | 0;
}
function __ZN7WebCore6Editor7canRedoEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 124 >> 2] & 1](i1) | 0;
 return i3 | 0;
}
function __ZN7WebCore6Editor28textWillBeDeletedInTextFieldEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 160 >> 2] & 3](i1, i2);
 return;
}
function __ZN7WebCore6Editor19handleKeyboardEventEPNS_13KeyboardEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 136 >> 2] & 3](i1, i2);
 return;
}
function __ZN7WebCore6Editor24textFieldDidBeginEditingEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 144 >> 2] & 3](i1, i2);
 return;
}
function __ZN7WebCore6Editor24textDidChangeInTextFieldEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 152 >> 2] & 3](i1, i2);
 return;
}
function __ZN7WebCore6Editor23textDidChangeInTextAreaEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 3](i1, i2);
 return;
}
function __ZN7WebCore6Editor22textFieldDidEndEditingEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 148 >> 2] & 3](i1, i2);
 return;
}
function __ZN7WebCore6Editor27resolveTextCheckingTypeMaskEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i1 = i2 & 2;
 i3 = (i2 & 1024 | 0) != 0;
 if (i3) {
  i4 = 1;
 } else {
  i4 = (i2 & 512 | 0) != 0;
 }
 i5 = (i2 & 4 | 0) == 0 ? i1 : i1 | 4;
 i1 = i4 ? i5 | 512 : i5;
 return (i3 ? i1 | 1024 : i1) | 0;
}
function __ZN7WebCore6Editor29toggleContinuousSpellCheckingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 3](i1);
 return;
}
function __ZN7WebCore6Editor29didWriteSelectionToPasteboardEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 92 >> 2] & 3](i1);
 return;
}
function __ZN7WebCore6Editor23clearUndoRedoOperationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 108 >> 2] & 3](i1);
 return;
}
function __ZN7WebCore6Editor21toggleGrammarCheckingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] & 3](i1);
 return;
}
function __ZN7WebCore6Editor16shouldApplyStyleEPNS_15StylePropertiesEPNS_5RangeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0) + 72 >> 2] | 0;
 return FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 64 >> 2] & 1](i4, i2, i3) | 0;
}
function __ZN7WebCore6Editor15didBeginEditingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 72 >> 2] & 3](i1);
 return;
}
function __ZN7WebCore6Editor13didEndEditingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 84 >> 2] & 3](i1);
 return;
}
function __ZNK7WebCore6Editor9canDeleteEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0;
 if ((HEAP32[i2 + 84 >> 2] | 0) != 2) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (__ZNK7WebCore16VisibleSelection19rootEditableElementEv(i2 + 32 | 0) | 0) != 0;
 return i3 | 0;
}
function __ZN7WebCore6Editor4undoEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 128 >> 2] & 3](i1);
 return;
}
function __ZN7WebCore6Editor4redoEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 72 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 132 >> 2] & 3](i1);
 return;
}
function __ZN7WebCore6Editor26toggleOverwriteModeEnabledEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 116 | 0;
 i3 = HEAP8[i2] & 1;
 HEAP8[i2] = i3 ^ 1;
 __ZN7WebCore14FrameSelection24setShouldShowBlockCursorEb(HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0, i3 << 24 >> 24 == 0);
 return;
}
function __ZN7WebCore6Editor10insertTextERKN3WTF6StringEPNS_5EventE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZN7WebCore12EventHandler20handleTextInputEventERKN3WTF6StringEPNS_5EventENS_18TextEventInputTypeE(HEAP32[(HEAP32[i1 >> 2] | 0) + 472 >> 2] | 0, i2, i3, 0) | 0;
}
function __ZN7WebCore6Editor23plainTextFromPasteboardERKNS_19PasteboardPlainTextE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZN7WebCore6Editor33insertTextForConfirmedCompositionERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore12EventHandler20handleTextInputEventERKN3WTF6StringEPNS_5EventENS_18TextEventInputTypeE(HEAP32[(HEAP32[i1 >> 2] | 0) + 472 >> 2] | 0, i2, 0, 2) | 0;
}
function __ZN7WebCore6Editor16markMisspellingsERKNS_16VisibleSelectionERN3WTF6RefPtrINS_5RangeEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore6Editor28markMisspellingsOrBadGrammarERKNS_16VisibleSelectionEbRN3WTF6RefPtrINS_5RangeEEE(i1, i2, 1, i3);
 return;
}
function __ZN7WebCore6Editor30dictationAlternativesForMarkerEPKNS_14DocumentMarkerE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore25AlternativeTextController30dictationAlternativesForMarkerEPKNS_14DocumentMarkerE(i1, HEAP32[i2 + 44 >> 2] | 0, i3);
 return;
}
function __ZN7WebCore6Editor13tryDHTMLPasteEv(i1) {
 i1 = i1 | 0;
 return (__ZN7WebCore6Editor16dispatchCPPEventERKN3WTF12AtomicStringENS_21ClipboardAccessPolicyE(i1, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 296 | 0, 4) | 0) ^ 1 | 0;
}
function __ZN7WebCore6Editor13canDHTMLPasteEv(i1) {
 i1 = i1 | 0;
 return (__ZN7WebCore6Editor16dispatchCPPEventERKN3WTF12AtomicStringENS_21ClipboardAccessPolicyE(i1, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 20 | 0, 0) | 0) ^ 1 | 0;
}
function __ZN7WebCore6Editor17cancelCompositionEv(i1) {
 i1 = i1 | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore6Editor14setCompositionERKN3WTF6StringENS0_18SetCompositionModeE(i1, __ZN3WTF11emptyStringEv() | 0, 1);
 return;
}
function __ZN7WebCore6Editor35applyDictationAlternativelternativeERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25AlternativeTextController25applyDictationAlternativeERKN3WTF6StringE(HEAP32[i1 + 44 >> 2] | 0, i2);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore6Editor6clientEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 72 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore6Editor28findEventTargetFromSelectionEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore6Editor19findEventTargetFromERKNS_16VisibleSelectionE(i1, (HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0;
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
function __ZN7WebCore6Editor13selectedRangeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i1, (HEAP32[(HEAP32[i2 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0);
 return;
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
function __ZN7WebCore6Editor18confirmCompositionERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore6Editor14setCompositionERKN3WTF6StringENS0_18SetCompositionModeE(i1, i2, 0);
 return;
}
function __ZNK7WebCore6Editor8canPasteEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore16VisibleSelection19rootEditableElementEv((HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0) != 0 | 0;
}
function __ZNK7WebCore6Editor7canEditEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore16VisibleSelection19rootEditableElementEv((HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0) != 0 | 0;
}
function __ZNK7WebCore6Editor13canEditRichlyEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore16VisibleSelection23isContentRichlyEditableEv((HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZN7WebCore6Editor24unappliedSpellCorrectionERKNS_16VisibleSelectionERKN3WTF6StringES7_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZNK7WebCore6Editor8behaviorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] | 0) + 108 >> 2];
 return;
}
function __ZNK7WebCore6Editor12selectedTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore6Editor12selectedTextENS_20TextIteratorBehaviorE(i1, i2, 0);
 return;
}
function __ZNK7WebCore6Editor25unifiedTextCheckerEnabledEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore25unifiedTextCheckerEnabledEPKNS_5FrameE(HEAP32[i1 >> 2] | 0) | 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore6Editor31deletedAutocorrectionAtPositionERKNS_8PositionERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
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
function b9(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(9);
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
function __ZN7WebCore6Editor29handleAlternativeTextUIResultERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
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
function __ZNK7WebCore6Editor8documentEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
}
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function b10(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(10);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
}
function __ZN7WebCore6Editor31dismissCorrectionPanelAsIgnoredEv(i1) {
 i1 = i1 | 0;
 return;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
 return 0;
}
function __ZN7WebCore6Editor27startAlternativeTextUITimerEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore6Editor24deviceScaleFactorChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
function b6() {
 abort(6);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore6EditorD2Ev,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore6EditorC2ERNS_5FrameE,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_iiii = [b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_iiiii = [b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8];
  var FUNCTION_TABLE_iiiiii = [b9,b9];
  var FUNCTION_TABLE_viiii = [b10,b10];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames6imgTagE": __ZN7WebCore9HTMLNames6imgTagE, "__ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE": __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE, "__ZN7WebCore9HTMLNames5ulTagE": __ZN7WebCore9HTMLNames5ulTagE, "__ZN7WebCore9HTMLNames7dirAttrE": __ZN7WebCore9HTMLNames7dirAttrE, "__ZN7WebCore9HTMLNames5olTagE": __ZN7WebCore9HTMLNames5olTagE, "__ZN7WebCore15ScrollAlignment19alignCenterIfNeededE": __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore6Editor5pasteERNS_10PasteboardE","_strlen","__ZN7WebCore6Editor22showSpellingGuessPanelEv","__ZN7WebCore18lastPositionInNodeEPNS_4NodeE","__ZNK7WebCore6Editor7canEditEv","__ZNK7WebCore6Editor8behaviorEv","__ZN7WebCore6Editor7canUndoEv","__ZN7WebCore6EditorD2Ev","__ZN7WebCore6Editor30clearMisspellingsAndBadGrammarERKNS_16VisibleSelectionE","__ZN7WebCore6Editor18shouldBeginEditingEPNS_5RangeE","__ZN7WebCoreL36dispatchEditableContentChangedEventsEN3WTF10PassRefPtrINS_7ElementEEES3_","__ZN7WebCore6Editor29didWriteSelectionToPasteboardEv","__ZN7WebCore6Editor6indentEv","__ZNK7WebCore6Editor16shouldInsertTextERKN3WTF6StringEPNS_5RangeENS_18EditorInsertActionE","__ZN7WebCore6Editor24deviceScaleFactorChangedEv","__ZN7WebCore6Editor7copyURLERKNS_3URLERKN3WTF6StringERNS_10PasteboardE","__ZN7WebCore6Editor27changeSelectionAfterCommandERKNS_16VisibleSelectionEj","__ZN7WebCore6Editor26toggleOverwriteModeEnabledEv","_memcpy","__ZN7WebCore6Editor24smartInsertDeleteEnabledEv","__ZN7WebCore16VisibleSelectionaSEOS0_","__ZN7WebCore6Editor13didEndEditingEv","__ZNK7WebCore6Editor32isContinuousSpellCheckingEnabledEv","__ZN7WebCore6Editor14setCompositionERKN3WTF6StringENS0_18SetCompositionModeE","__ZNK7WebCore6Editor8documentEv","__ZNK7WebCore6Editor6clientEv","__ZN7WebCore6Editor10findStringERKN3WTF6StringEj","__ZN7WebCore6Editor24isSelectionUngrammaticalEv","__ZN7WebCore6Editor13tryDHTMLPasteEv","__ZNK7WebCore6Editor21shouldChangeSelectionERKNS_16VisibleSelectionES3_NS_9EAffinityEb","__ZN7WebCore6Editor7canRedoEv","__ZN7WebCore6Editor35guessesForMisspelledOrUngrammaticalERbS1_","__ZNK7WebCore6Editor17selectionHasStyleENS_13CSSPropertyIDERKN3WTF6StringE","__ZN7WebCore6Editor15toggleUnderlineEv","__ZN7WebCore16VisibleSelectionC2ERKS0_","__ZNK7WebCore6Editor25selectionOrderedListStateEv","__ZN7WebCoreeqERKNS_15VisiblePositionES2_","__ZN7WebCore6Editor16shouldApplyStyleEPNS_15StylePropertiesEPNS_5RangeE","__ZN7WebCore21TextCheckingParagraphaSERKS0_","__ZN7WebCore6Editor22textFieldDidEndEditingEPNS_7ElementE","__ZNK7WebCore6Editor11textCheckerEv","__ZN7WebCore6Editor3cutEv","__ZN7WebCore6Editor9copyImageERKNS_13HitTestResultE","__ZN7WebCore6Editor30dictationAlternativesForMarkerEPKNS_14DocumentMarkerE","__ZN7WebCore6Editor13rangeForPointERKNS_8IntPointE","__ZNK7WebCore6Editor16hasBidiSelectionEv","__ZNK7WebCore6Editor14canDeleteRangeEPNS_5RangeE","__ZN7WebCore6Editor17selectCompositionEv","__ZNK7WebCore6Editor9canDeleteEv","__ZN7WebCore6Editor16shouldEndEditingEPNS_5RangeE","__ZN7WebCore6Editor28findStringAndScrollToVisibleERKN3WTF6StringEPNS_5RangeEj","__ZN7WebCore6Editor19selectionForCommandEPNS_5EventE","__ZN7WebCore6Editor4redoEv","__ZN7WebCore6Editor17cancelCompositionEv","__ZN7WebCore6Editor29markMisspellingsAndBadGrammarERKNS_16VisibleSelectionE","__ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev","__ZN7WebCore6Editor24textDidChangeInTextFieldEPNS_7ElementE","__ZN7WebCore6Editor14ignoreSpellingEv","__ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore6Editor30deleteSelectionWithSmartDeleteEb","__ZN7WebCore6Editor24isGrammarCheckingEnabledEv","__ZN7WebCore6Editor13canDHTMLPasteEv","__ZN7WebCore6Editor27resolveTextCheckingTypeMaskEj","__ZN7WebCore6Editor33insertTextForConfirmedCompositionERKN3WTF6StringE","__ZNK7WebCore6Editor25isSpellCheckingEnabledForEPNS_4NodeE","__ZNK7WebCore6Editor27selectionUnorderedListStateEv","__ZN7WebCore6Editor23spellCheckerDocumentTagEv","__ZN7WebCore6Editor23textDidChangeInTextAreaEPNS_7ElementE","__ZN7WebCore6Editor20shouldInsertFragmentEN3WTF10PassRefPtrINS_16DocumentFragmentEEENS2_INS_5RangeEEENS_18EditorInsertActionE","__ZN7WebCore6Editor24computeAndSetTypingStyleEPNS_15StylePropertiesENS_10EditActionE","__ZN7WebCore6Editor24handleInputMethodKeydownEPNS_13KeyboardEventE","__ZN7WebCore6Editor35applyDictationAlternativelternativeERKN3WTF6StringE","_memset","__ZN7WebCore6Editor12canDHTMLCopyEv","__ZN7WebCore6Editor27startAlternativeTextUITimerEv","__ZN7WebCore6Editor10insertTextERKN3WTF6StringEPNS_5EventE","__ZN7WebCore6Editor13performDeleteEv","__ZN7WebCore6Editor29canIncreaseSelectionListLevelEv","__ZN7WebCore6Editor40markAllMisspellingsAndBadGrammarInRangesEjPNS_5RangeES2_","__ZN7WebCore6Editor24textFieldDidBeginEditingEPNS_7ElementE","__ZN7WebCore6Editor11tryDHTMLCutEv","__ZN7WebCore6Editor28textWillBeDeletedInTextFieldEPNS_7ElementE","__ZN7WebCore6Editor11canDHTMLCutEv","__ZN7WebCore6Editor5pasteEv","__ZN7WebCore6Editor24replaceSelectionWithTextERKN3WTF6StringEbb","__ZNK7WebCore6Editor16compositionRangeEv","__ZN7WebCore6Editor34setMarkedTextMatchesAreHighlightedEb","__ZN7WebCore6Editor16dispatchCPPEventERKN3WTF12AtomicStringENS_21ClipboardAccessPolicyE","__ZN7WebCore6Editor16pasteAsPlainTextERKN3WTF6StringEb","__ZN7WebCore6Editor14setCompositionERKN3WTF6StringERKNS1_6VectorINS_20CompositionUnderlineELj0ENS1_15CrashOnOverflowEEEjj","__ZN7WebCore6Editor36revealSelectionAfterEditingOperationERKNS_15ScrollAlignmentENS_18RevealExtentOptionE","__ZN7WebCore6Editor24respondToChangedContentsERKNS_16VisibleSelectionE","__ZN7WebCore6Editor18confirmCompositionEv","__ZN7WebCore6Editor15handleTextEventEPNS_9TextEventE","__ZNK7WebCore6Editor25unifiedTextCheckerEnabledEv","__ZN7WebCore6Editor19deleteWithDirectionENS_18SelectionDirectionENS_15TextGranularityEbb","__ZNK7WebCore6Editor30applyEditingStyleToBodyElementEv","__ZN7WebCore6Editor22spellingPanelIsShowingEv","__ZN7WebCore6Editor24insertParagraphSeparatorEv","__ZN7WebCore6Editor14markBadGrammarERKNS_16VisibleSelectionE","__ZNK7WebCore6Editor12selectedTextEv","__ZN7WebCore6Editor24unappliedSpellCorrectionERKNS_16VisibleSelectionERKN3WTF6StringES7_","__ZN7WebCore6Editor33markMisspellingsAfterTypingToWordERKNS_15VisiblePositionERKNS_16VisibleSelectionEb","__ZNK7WebCore6Editor26selectionStartHasMarkerForENS_14DocumentMarker10MarkerTypeEii","__ZN7WebCore6Editor15didBeginEditingEv","__ZN7WebCore6Editor29handleAlternativeTextUIResultERKN3WTF6StringE","__ZN7WebCore6Editor27readPlainTextFromPasteboardERNS_10PasteboardE","__ZNK7WebCore6Editor35isSpellCheckingEnabledInFocusedNodeEv","__ZN7WebCore6Editor15insertLineBreakEv","__ZN7WebCore6Editor16unappliedEditingEN3WTF10PassRefPtrINS_22EditCommandCompositionEEE","__ZNK7WebCore6Editor22selectionStartHasStyleENS_13CSSPropertyIDERKN3WTF6StringE","__ZN7WebCore6Editor29toggleContinuousSpellCheckingEv","__ZN7WebCore6Editor19countMatchesForTextERKN3WTF6StringEPNS_5RangeEjjbPNS1_6VectorINS1_6RefPtrIS5_EELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore6Editor17shouldDeleteRangeEPNS_5RangeE","__ZN3WTF6VectorINS_6RefPtrIN7WebCore5RangeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore6Editor29canSmartReplaceWithPasteboardERNS_10PasteboardE","__ZN7WebCore6Editor7copyURLERKNS_3URLERKN3WTF6StringE","__ZN7WebCore6Editor37cancelCompositionIfSelectionIsInvalidEv","__ZN7WebCore6Editor10applyStyleEPNS_15StylePropertiesENS_10EditActionE","__ZNK7WebCore6Editor28findEventTargetFromSelectionEv","__ZN7WebCore6Editor17markAndReplaceForEN3WTF10PassRefPtrINS_17SpellCheckRequestEEERKNS1_6VectorINS_18TextCheckingResultELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore6Editor21applyStyleToSelectionEPNS_15StylePropertiesENS_10EditActionE","__ZN7WebCore6Editor4copyEv","__ZN7WebCore6Editor23setBaseWritingDirectionE16WritingDirection","__ZN7WebCore6Editor28markMisspellingsOrBadGrammarERKNS_16VisibleSelectionEbRN3WTF6RefPtrINS_5RangeEEE","__ZN7WebCore6Editor28replaceSelectionWithFragmentEN3WTF10PassRefPtrINS_16DocumentFragmentEEEbbb","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZN7WebCore6Editor38updateMarkersForWordsAffectedByEditingEb","__ZN7WebCore6Editor13selectedRangeEv","__ZNK7WebCore6Editor13canEditRichlyEv","__ZNK7WebCore6Editor23getCompositionSelectionERjS1_","__ZN7WebCore6Editor10toggleBoldEv","__ZNK7WebCore6Editor25misspelledSelectionStringEv","__ZN7WebCore6Editor12tryDHTMLCopyEv","__ZN7WebCore6Editor35setIgnoreCompositionSelectionChangeEb","__ZN7WebCore6Editor17insertOrderedListEv","__ZN7WebCore6Editor30willWriteSelectionToPasteboardEN3WTF10PassRefPtrINS_5RangeEEE","__ZNK7WebCore6Editor8canPasteEv","__ZNK7WebCore6Editor19findEventTargetFromERKNS_16VisibleSelectionE","__ZN7WebCore6Editor20clearLastEditCommandEv","__ZN7WebCore6Editor16pasteAsPlainTextEv","__ZN7WebCore6Editor14appliedEditingEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE","__ZN7WebCore6Editor24removeFormattingAndStyleEv","__ZN7WebCore6Editor9transposeEv","__ZN3WTF6VectorIN7WebCore20CompositionUnderlineELj0ENS_15CrashOnOverflowEEaSERKS4_","__ZNK7WebCore6Editor6canCutEv","__ZN7WebCore6Editor34notifyComponentsOnChangedSelectionERKNS_16VisibleSelectionEj","__ZN7WebCore6Editor4undoEv","__ZNK7WebCore6Editor26applyEditingStyleToElementEPNS_7ElementE","__ZN7WebCore6Editor24advanceToNextMisspellingEb","__ZN7WebCore6Editor7outdentEv","__ZN7WebCore6EditorC2ERNS_5FrameE","__ZN7WebCore6Editor23clearUndoRedoOperationsEv","__ZN7WebCore6Editor19applyParagraphStyleEPNS_15StylePropertiesENS_10EditActionE","__ZN7WebCore6Editor16reappliedEditingEN3WTF10PassRefPtrINS_22EditCommandCompositionEEE","__ZN7WebCore6Editor13rangeOfStringERKN3WTF6StringEPNS_5RangeEj","__ZN7WebCore6Editor19handleKeyboardEventEPNS_13KeyboardEventE","__ZNK7WebCore6Editor24selectedTextForClipboardEv","__ZN7WebCore6Editor26changeBackToReplacedStringERKN3WTF6StringE","__ZN7WebCore6Editor18confirmCompositionERKN3WTF6StringE","__ZN7WebCore6Editor21toggleGrammarCheckingEv","__ZN7WebCore6Editor15pasteAsFragmentEN3WTF10PassRefPtrINS_16DocumentFragmentEEEbb","__ZN7WebCore6Editor27doTextFieldCommandFromEventEPNS_7ElementEPNS_13KeyboardEventE","__ZN7WebCore6Editor5clearEv","__ZN7WebCoreeqERKNS_16VisibleSelectionES2_","__ZN7WebCore6Editor13learnSpellingEv","__ZN7WebCore6Editor18insertDictatedTextERKN3WTF6StringERKNS1_6VectorINS_20DictationAlternativeELj0ENS1_15CrashOnOverflowEEEPNS_5EventE","__ZN7WebCore6Editor29markMisspellingsAndBadGrammarERKNS_16VisibleSelectionEbS3_","__ZN7WebCore6Editor30pasteAsPlainTextWithPasteboardERNS_10PasteboardE","__ZN7WebCore6Editor26decreaseSelectionListLevelEv","__ZN7WebCore6Editor19insertUnorderedListEv","__ZNK7WebCore6Editor28misspelledWordAtCaretOrRangeEPNS_4NodeE","__ZN7WebCore6Editor30selectionStartCSSPropertyValueENS_13CSSPropertyIDE","__ZN7WebCore6Editor14simplifyMarkupEPNS_4NodeES2_","__ZN7WebCore6Editor31dismissCorrectionPanelAsIgnoredEv","__ZN7WebCore6Editor13addToKillRingEPNS_5RangeEb","__ZN7WebCore6Editor30pasteAsPlainTextBypassingDHTMLEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore6Editor23plainTextFromPasteboardERKNS_19PasteboardPlainTextE","__ZN7WebCore6Editor16markMisspellingsERKNS_16VisibleSelectionERN3WTF6RefPtrINS_5RangeEEE","__ZNK7WebCore6Editor12selectedTextENS_20TextIteratorBehaviorE","__ZN7WebCore6Editor33isSelectTrailingWhitespaceEnabledEv","__ZNK7WebCore6Editor7canCopyEv","__ZN7WebCore6Editor33increaseSelectionListLevelOrderedEv","__ZN7WebCore6Editor26increaseSelectionListLevelEv","__ZN7WebCore16VisibleSelectionD2Ev","_memmove","__ZN7WebCore6Editor35increaseSelectionListLevelUnorderedEv","__ZNK7WebCore6Editor17firstRectForRangeEPNS_5RangeE","__ZN7WebCore6Editor31deletedAutocorrectionAtPositionERKNS_8PositionERKN3WTF6StringE","__ZN7WebCore6Editor29canDecreaseSelectionListLevelEv","__ZNK7WebCore6Editor24guessesForMisspelledWordERKN3WTF6StringE","__ZN7WebCore6Editor25respondToChangedSelectionERKNS_16VisibleSelectionEj","__ZNK7WebCore6Editor37baseWritingDirectionForSelectionStartEv","__ZN7WebCore6Editor20canSmartCopyOrDeleteEv","__ZN7WebCore6Editor30applyParagraphStyleToSelectionEPNS_15StylePropertiesENS_10EditActionE","__ZN7WebCore6Editor33insertTextWithoutSendingTextEventERKN3WTF6StringEbPNS_9TextEventE"]

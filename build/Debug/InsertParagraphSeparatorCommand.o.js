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
var __ZN7WebCore31InsertParagraphSeparatorCommandC1ERNS_8DocumentEbb;
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
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames5h2TagE=env.__ZN7WebCore9HTMLNames5h2TagE|0;
  var __ZN7WebCore9HTMLNames5h5TagE=env.__ZN7WebCore9HTMLNames5h5TagE|0;
  var __ZN7WebCore9HTMLNames5h1TagE=env.__ZN7WebCore9HTMLNames5h1TagE|0;
  var __ZN7WebCore9HTMLNames7formTagE=env.__ZN7WebCore9HTMLNames7formTagE|0;
  var __ZN7WebCore9HTMLNames5h3TagE=env.__ZN7WebCore9HTMLNames5h3TagE|0;
  var __ZN7WebCore9HTMLNames6divTagE=env.__ZN7WebCore9HTMLNames6divTagE|0;
  var __ZN7WebCore9HTMLNames5hrTagE=env.__ZN7WebCore9HTMLNames5hrTagE|0;
  var __ZN7WebCore9HTMLNames6idAttrE=env.__ZN7WebCore9HTMLNames6idAttrE|0;
  var __ZN7WebCore9HTMLNames5h4TagE=env.__ZN7WebCore9HTMLNames5h4TagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore31InsertParagraphSeparatorCommandE=(H_BASE+8)|0;
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
function __ZN7WebCore31InsertParagraphSeparatorCommand7doApplyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, i123 = 0, i124 = 0, i125 = 0, i126 = 0, i127 = 0, i128 = 0, i129 = 0, i130 = 0, i131 = 0, i132 = 0, i133 = 0, i134 = 0, i135 = 0, i136 = 0, i137 = 0, i138 = 0, i139 = 0, i140 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 1136 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 40 | 0;
 i8 = i2 + 56 | 0;
 i9 = i2 + 72 | 0;
 i10 = i2 + 88 | 0;
 i11 = i2 + 96 | 0;
 i12 = i2 + 112 | 0;
 i13 = i2 + 128 | 0;
 i14 = i2 + 144 | 0;
 i15 = i2 + 160 | 0;
 i16 = i2 + 168 | 0;
 i17 = i2 + 176 | 0;
 i18 = i2 + 184 | 0;
 i19 = i2 + 192 | 0;
 i20 = i2 + 200 | 0;
 i21 = i2 + 208 | 0;
 i22 = i2 + 216 | 0;
 i23 = i2 + 224 | 0;
 i24 = i2 + 232 | 0;
 i25 = i2 + 240 | 0;
 i26 = i2 + 248 | 0;
 i27 = i2 + 256 | 0;
 i28 = i2 + 272 | 0;
 i29 = i2 + 288 | 0;
 i30 = i2 + 296 | 0;
 i31 = i2 + 304 | 0;
 i32 = i2 + 312 | 0;
 i33 = i2 + 320 | 0;
 i34 = i2 + 384 | 0;
 i35 = i2 + 400 | 0;
 i36 = i2 + 416 | 0;
 i37 = i2 + 432 | 0;
 i38 = i2 + 448 | 0;
 i39 = i2 + 456 | 0;
 i40 = i2 + 464 | 0;
 i41 = i2 + 480 | 0;
 i42 = i2 + 496 | 0;
 i43 = i2 + 512 | 0;
 i44 = i2 + 520 | 0;
 i45 = i2 + 528 | 0;
 i46 = i2 + 536 | 0;
 i47 = i2 + 600 | 0;
 i48 = i2 + 608 | 0;
 i49 = i2 + 616 | 0;
 i50 = i2 + 632 | 0;
 i51 = i2 + 696 | 0;
 i52 = i2 + 712 | 0;
 i53 = i2 + 728 | 0;
 i54 = i2 + 744 | 0;
 i55 = i2 + 760 | 0;
 i56 = i2 + 776 | 0;
 i57 = i2 + 792 | 0;
 i58 = i2 + 808 | 0;
 i59 = i2 + 816 | 0;
 i60 = i2 + 832 | 0;
 i61 = i2 + 840 | 0;
 i62 = i2 + 856 | 0;
 i63 = i2 + 864 | 0;
 i64 = i2 + 880 | 0;
 i65 = i2 + 888 | 0;
 i66 = i2 + 896 | 0;
 i67 = i2 + 904 | 0;
 i68 = i2 + 912 | 0;
 i69 = i2 + 920 | 0;
 i70 = i2 + 928 | 0;
 i71 = i2 + 936 | 0;
 i72 = i2 + 952 | 0;
 i73 = i2 + 968 | 0;
 i74 = i2 + 984 | 0;
 i75 = i2 + 992 | 0;
 i76 = i2 + 1008 | 0;
 i77 = i2 + 1024 | 0;
 i78 = i2 + 1040 | 0;
 i79 = i2 + 1048 | 0;
 i80 = i2 + 1056 | 0;
 i81 = i2 + 1120 | 0;
 i82 = i1 | 0;
 i83 = i1 + 124 | 0;
 if ((HEAP32[i83 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i84 = i1 + 96 | 0;
 i85 = HEAP32[i84 >> 2] | 0;
 i86 = (i85 | 0) == 0;
 do {
  if (i86) {
   i87 = 5;
  } else {
   i88 = i85 + 8 | 0;
   i89 = (HEAP32[i88 >> 2] | 0) + 1 | 0;
   HEAP32[i88 >> 2] = i89;
   if ((HEAP32[i85 + 12 >> 2] & 256 | 0) != 0) {
    i87 = 5;
    break;
   }
   i88 = i85 + 8 | 0;
   i90 = 0;
   i91 = i89;
   i92 = i88;
   i93 = i88 | 0;
   i87 = 11;
  }
 } while (0);
 do {
  if ((i87 | 0) == 5) {
   i88 = HEAP32[i1 + 108 >> 2] | 0;
   do {
    if ((i88 | 0) == 0) {
     i94 = 1;
    } else {
     i89 = HEAP32[i88 + 8 >> 2] | 0;
     i95 = (HEAP32[i88 + 12 >> 2] & 256 | 0) != 0;
     i96 = i88 + 8 | 0;
     HEAP32[i96 >> 2] = i89;
     if ((i89 | 0) >= 1) {
      i94 = i95;
      break;
     }
     if ((HEAP32[i96 + 8 >> 2] | 0) != 0) {
      i94 = i95;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i96 - 8 | 0);
     i94 = i95;
    }
   } while (0);
   if (i86) {
    i97 = i94;
    i87 = 14;
    break;
   }
   i88 = i85 + 8 | 0;
   i95 = i88 | 0;
   i90 = i94;
   i91 = HEAP32[i95 >> 2] | 0;
   i92 = i88;
   i93 = i95;
   i87 = 11;
  }
 } while (0);
 do {
  if ((i87 | 0) == 11) {
   i94 = i91 - 1 | 0;
   HEAP32[i93 >> 2] = i94;
   if ((i94 | 0) >= 1) {
    i97 = i90;
    i87 = 14;
    break;
   }
   if ((HEAP32[i92 + 8 >> 2] | 0) != 0) {
    i97 = i90;
    i87 = 14;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i92 - 8 | 0);
   if (i90) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 do {
  if ((i87 | 0) == 14) {
   if (i97) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 i97 = i6 | 0;
 i90 = HEAP32[i84 >> 2] | 0;
 HEAP32[i97 >> 2] = i90;
 if ((i90 | 0) != 0) {
  i92 = i90 + 8 | 0;
  HEAP32[i92 >> 2] = (HEAP32[i92 >> 2] | 0) + 1;
 }
 i92 = i6 + 4 | 0;
 i90 = i1 + 100 | 0;
 HEAP32[i92 >> 2] = HEAP32[i90 >> 2];
 i93 = i1 + 104 | 0;
 i91 = HEAP32[i93 >> 2] | 0;
 i94 = i6 + 8 | 0;
 i85 = i94;
 i86 = HEAP32[i85 >> 2] & -8 | i91 & 7;
 HEAP32[i85 >> 2] = i86;
 HEAP8[i94] = i86 & 255 & -9 | i91 & 8;
 i91 = i1 + 120 | 0;
 if ((HEAP32[i83 >> 2] | 0) == 2) {
  __ZN7WebCore31InsertParagraphSeparatorCommand29calculateStyleBeforeInsertionERKNS_8PositionE(i1, i6);
  __ZN7WebCore20CompositeEditCommand15deleteSelectionEbbbbb(i1 | 0, 0, 1, 0, 1, 1);
  i83 = HEAP32[i84 >> 2] | 0;
  if ((i83 | 0) != 0) {
   i84 = i83 + 8 | 0;
   HEAP32[i84 >> 2] = (HEAP32[i84 >> 2] | 0) + 1;
  }
  i84 = HEAP32[i90 >> 2] | 0;
  i90 = HEAP32[i93 >> 2] | 0;
  i93 = i90 & 8;
  i86 = HEAP32[i97 >> 2] | 0;
  HEAP32[i97 >> 2] = i83;
  do {
   if ((i86 | 0) != 0) {
    i83 = i86 + 8 | 0;
    i95 = i83 | 0;
    i88 = (HEAP32[i95 >> 2] | 0) - 1 | 0;
    HEAP32[i95 >> 2] = i88;
    if ((i88 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i83 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i83 - 8 | 0);
   }
  } while (0);
  HEAP32[i92 >> 2] = i84;
  i84 = HEAP32[i85 >> 2] & -8 | i90 & 7;
  HEAP32[i85 >> 2] = i84;
  HEAP8[i94] = i84 & 255 & -9 | i93;
 }
 i93 = HEAP32[i91 >> 2] | 0;
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i7, i6);
 i91 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(__ZNK7WebCore8Position13containerNodeEv(i7) | 0, 1) | 0;
 i84 = (i91 | 0) == 0;
 if (!i84) {
  i90 = i91 + 8 | 0;
  HEAP32[i90 >> 2] = (HEAP32[i90 >> 2] | 0) + 1;
 }
 i90 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i90 | 0) != 0) {
   i7 = i90 + 8 | 0;
   i86 = i7 | 0;
   i83 = (HEAP32[i86 >> 2] | 0) - 1 | 0;
   HEAP32[i86 >> 2] = i83;
   if ((i83 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i9, i6, 1);
 i90 = i8 | 0;
 i7 = i9 | 0;
 i83 = HEAP32[i7 >> 2] | 0;
 HEAP32[i90 >> 2] = i83;
 if ((i83 | 0) == 0) {
  i98 = 0;
 } else {
  i86 = i83 + 8 | 0;
  HEAP32[i86 >> 2] = (HEAP32[i86 >> 2] | 0) + 1;
  i98 = HEAP32[i7 >> 2] | 0;
 }
 HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 i7 = HEAP32[i9 + 8 >> 2] | 0;
 i9 = i8 + 8 | 0;
 i86 = i9;
 i83 = HEAP32[i86 >> 2] & -8 | i7 & 7;
 HEAP32[i86 >> 2] = i83;
 HEAP8[i9] = i83 & 255 & -9 | i7 & 8;
 do {
  if ((i98 | 0) != 0) {
   i7 = i98 + 8 | 0;
   i83 = i7 | 0;
   i9 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
   HEAP32[i83 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 L54 : do {
  if (i84) {
   i87 = 57;
  } else {
   i98 = i91 | 0;
   if ((__ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i98) | 0) == 0) {
    i87 = 57;
    break;
   }
   if (__ZN7WebCore11isTableCellEPKNS_4NodeE(i98) | 0) {
    i87 = 57;
    break;
   }
   if ((HEAP32[i91 + 12 >> 2] & 16 | 0) != 0) {
    if ((HEAP32[(HEAP32[i98 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7formTagE >> 2] | 0) + 12 >> 2] | 0)) {
     i87 = 57;
     break;
    }
   }
   i7 = HEAP32[i90 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i9 = (HEAP32[i7 + 12 >> 2] & 2048 | 0) == 0;
     i83 = i7 + 32 | 0;
     if (i9) {
      i99 = i83 | 0;
     } else {
      i99 = HEAP32[i83 >> 2] | 0;
     }
     if ((HEAP32[i99 >> 2] | 0) == 0) {
      i100 = i7;
     } else {
      if (i9) {
       i101 = i83 | 0;
      } else {
       i101 = HEAP32[i83 >> 2] | 0;
      }
      i83 = HEAP32[i101 >> 2] | 0;
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i83 >> 2] | 0) + 184 >> 2] & 31](i83) | 0) {
       i87 = 57;
       break L54;
      }
      i100 = HEAP32[i90 >> 2] | 0;
     }
     if ((i100 | 0) == 0) {
      break;
     }
     if ((HEAP32[i100 + 12 >> 2] & 4 | 0) == 0) {
      break;
     }
     i83 = HEAP32[i100 + 44 >> 2] | 0;
     i9 = HEAP32[__ZN7WebCore9HTMLNames5hrTagE >> 2] | 0;
     if ((i83 | 0) == (i9 | 0)) {
      i87 = 57;
      break L54;
     }
     if ((HEAP32[i83 + 12 >> 2] | 0) != (HEAP32[i9 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i83 + 16 >> 2] | 0) == (HEAP32[i9 + 16 >> 2] | 0)) {
      i87 = 57;
      break L54;
     }
    }
   } while (0);
   __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i11, i6, 1);
   i7 = i11 | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   i83 = HEAP32[i97 >> 2] | 0;
   HEAP32[i97 >> 2] = i9;
   do {
    if ((i83 | 0) != 0) {
     i9 = i83 + 8 | 0;
     i86 = i9 | 0;
     i88 = (HEAP32[i86 >> 2] | 0) - 1 | 0;
     HEAP32[i86 >> 2] = i88;
     if ((i88 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   HEAP32[i92 >> 2] = HEAP32[i11 + 4 >> 2];
   i83 = HEAP32[i11 + 8 >> 2] | 0;
   i9 = HEAP32[i85 >> 2] & -8 | i83 & 7;
   HEAP32[i85 >> 2] = i9;
   HEAP8[i94] = i9 & 255 & -9 | i83 & 8;
   i83 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i83 | 0) != 0) {
     i9 = i83 + 8 | 0;
     i88 = i9 | 0;
     i86 = (HEAP32[i88 >> 2] | 0) - 1 | 0;
     HEAP32[i88 >> 2] = i86;
     if ((i86 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   do {
    if (!(__ZNK7WebCore8Position11isCandidateEv(i6) | 0)) {
     __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i12, i6, 1);
     i83 = i12 | 0;
     i7 = HEAP32[i83 >> 2] | 0;
     HEAP32[i83 >> 2] = 0;
     i9 = HEAP32[i97 >> 2] | 0;
     HEAP32[i97 >> 2] = i7;
     do {
      if ((i9 | 0) != 0) {
       i7 = i9 + 8 | 0;
       i86 = i7 | 0;
       i88 = (HEAP32[i86 >> 2] | 0) - 1 | 0;
       HEAP32[i86 >> 2] = i88;
       if ((i88 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
      }
     } while (0);
     HEAP32[i92 >> 2] = HEAP32[i12 + 4 >> 2];
     i9 = HEAP32[i12 + 8 >> 2] | 0;
     i7 = HEAP32[i85 >> 2] & -8 | i9 & 7;
     HEAP32[i85 >> 2] = i7;
     HEAP8[i94] = i7 & 255 & -9 | i9 & 8;
     i9 = HEAP32[i83 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     i7 = i9 + 8 | 0;
     i9 = i7 | 0;
     i88 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i88;
     if ((i88 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
    }
   } while (0);
   i7 = i1 | 0;
   __ZN7WebCore20CompositeEditCommand38positionAvoidingSpecialElementBoundaryERKNS_8PositionE(i13, i7, i6);
   i88 = i13 | 0;
   i9 = HEAP32[i88 >> 2] | 0;
   HEAP32[i88 >> 2] = 0;
   i86 = HEAP32[i97 >> 2] | 0;
   HEAP32[i97 >> 2] = i9;
   do {
    if ((i86 | 0) != 0) {
     i9 = i86 + 8 | 0;
     i95 = i9 | 0;
     i96 = (HEAP32[i95 >> 2] | 0) - 1 | 0;
     HEAP32[i95 >> 2] = i96;
     if ((i96 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   HEAP32[i92 >> 2] = HEAP32[i13 + 4 >> 2];
   i86 = HEAP32[i13 + 8 >> 2] | 0;
   i9 = HEAP32[i85 >> 2] & -8 | i86 & 7;
   HEAP32[i85 >> 2] = i9;
   HEAP8[i94] = i9 & 255 & -9 | i86 & 8;
   i86 = HEAP32[i88 >> 2] | 0;
   do {
    if ((i86 | 0) != 0) {
     i9 = i86 + 8 | 0;
     i96 = i9 | 0;
     i95 = (HEAP32[i96 >> 2] | 0) - 1 | 0;
     HEAP32[i96 >> 2] = i95;
     if ((i95 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i14, i6, i93);
   __ZN7WebCore31InsertParagraphSeparatorCommand29calculateStyleBeforeInsertionERKNS_8PositionE(i1, i6);
   do {
    if (__ZN7WebCore20CompositeEditCommand23breakOutOfEmptyListItemEv(i7) | 0) {
     i102 = i91;
    } else {
     i86 = __ZN7WebCore14isStartOfBlockERKNS_15VisiblePositionE(i14) | 0;
     i88 = __ZN7WebCore12isEndOfBlockERKNS_15VisiblePositionE(i14) | 0;
     do {
      if (__ZNK7WebCore4Node21isRootEditableElementEv(i98) | 0) {
       __ZN7WebCore29createDefaultParagraphElementERNS_8DocumentE(i15, HEAP32[i1 + 8 >> 2] | 0);
       i9 = i15 | 0;
       i95 = HEAP32[i9 >> 2] | 0;
       HEAP32[i9 >> 2] = 0;
       i103 = 1;
       i104 = i95 | 0;
      } else {
       if (__ZNK7WebCore31InsertParagraphSeparatorCommand32shouldUseDefaultParagraphElementEPNS_4NodeE(i1, i98) | 0) {
        __ZN7WebCore29createDefaultParagraphElementERNS_8DocumentE(i16, HEAP32[i1 + 8 >> 2] | 0);
        i95 = i16 | 0;
        i9 = HEAP32[i95 >> 2] | 0;
        HEAP32[i95 >> 2] = 0;
        i103 = 0;
        i104 = i9 | 0;
        break;
       } else {
        __ZN7WebCore7Element27cloneElementWithoutChildrenEv(i17, i91);
        i9 = i17 | 0;
        i95 = HEAP32[i9 >> 2] | 0;
        HEAP32[i9 >> 2] = 0;
        i103 = 0;
        i104 = i95;
        break;
       }
      }
     } while (0);
     L120 : do {
      if (i88) {
       do {
        if (i103) {
         do {
          if (i86) {
           if (__ZN7WebCore32lineBreakExistsAtVisiblePositionERKNS_15VisiblePositionE(i14) | 0) {
            break;
           }
           __ZN7WebCore29createDefaultParagraphElementERNS_8DocumentE(i18, HEAP32[i1 + 8 >> 2] | 0);
           i83 = i18 | 0;
           i95 = HEAP32[i83 >> 2] | 0;
           HEAP32[i83 >> 2] = 0;
           i83 = i95 | 0;
           i9 = i19 | 0;
           HEAP32[i9 >> 2] = i95;
           i96 = (i95 | 0) == 0;
           if (!i96) {
            i89 = i95 + 8 | 0;
            HEAP32[i89 >> 2] = (HEAP32[i89 >> 2] | 0) + 1;
           }
           i89 = i20 | 0;
           HEAP32[i89 >> 2] = i91;
           i105 = i91 + 8 | 0;
           HEAP32[i105 >> 2] = (HEAP32[i105 >> 2] | 0) + 1;
           __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i7, i19, i20);
           i105 = HEAP32[i89 >> 2] | 0;
           do {
            if ((i105 | 0) != 0) {
             i89 = i105 + 8 | 0;
             i106 = i89 | 0;
             i107 = (HEAP32[i106 >> 2] | 0) - 1 | 0;
             HEAP32[i106 >> 2] = i107;
             if ((i107 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i89 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i89 - 8 | 0);
            }
           } while (0);
           i105 = HEAP32[i9 >> 2] | 0;
           do {
            if ((i105 | 0) != 0) {
             i89 = i105 + 8 | 0;
             i107 = i89 | 0;
             i106 = (HEAP32[i107 >> 2] | 0) - 1 | 0;
             HEAP32[i107 >> 2] = i106;
             if ((i106 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i89 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i89 - 8 | 0);
            }
           } while (0);
           i105 = i22 | 0;
           HEAP32[i105 >> 2] = i83;
           if (!i96) {
            i9 = i95 + 8 | 0;
            HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
           }
           __ZN7WebCore20CompositeEditCommand22appendBlockPlaceholderEN3WTF10PassRefPtrINS_7ElementEEE(i21, i7, i22);
           i9 = HEAP32[i21 >> 2] | 0;
           do {
            if ((i9 | 0) != 0) {
             i89 = i9 + 8 | 0;
             i106 = i89 | 0;
             i107 = (HEAP32[i106 >> 2] | 0) - 1 | 0;
             HEAP32[i106 >> 2] = i107;
             if ((i107 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i89 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i89 - 8 | 0);
            }
           } while (0);
           i9 = HEAP32[i105 >> 2] | 0;
           do {
            if ((i9 | 0) != 0) {
             i83 = i9 + 8 | 0;
             i89 = i83 | 0;
             i107 = (HEAP32[i89 >> 2] | 0) - 1 | 0;
             HEAP32[i89 >> 2] = i107;
             if ((i107 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i83 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i83 - 8 | 0);
            }
           } while (0);
           if (i96) {
            break;
           }
           i9 = i95 + 8 | 0;
           i105 = i9 | 0;
           i83 = (HEAP32[i105 >> 2] | 0) - 1 | 0;
           HEAP32[i105 >> 2] = i83;
           if ((i83 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
          }
         } while (0);
         i9 = i23 | 0;
         HEAP32[i9 >> 2] = i104;
         if ((i104 | 0) != 0) {
          i83 = i104 + 8 | 0;
          HEAP32[i83 >> 2] = (HEAP32[i83 >> 2] | 0) + 1;
         }
         i83 = i24 | 0;
         HEAP32[i83 >> 2] = i91;
         i105 = i91 + 8 | 0;
         HEAP32[i105 >> 2] = (HEAP32[i105 >> 2] | 0) + 1;
         __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i7, i23, i24);
         i105 = HEAP32[i83 >> 2] | 0;
         do {
          if ((i105 | 0) != 0) {
           i83 = i105 + 8 | 0;
           i107 = i83 | 0;
           i89 = (HEAP32[i107 >> 2] | 0) - 1 | 0;
           HEAP32[i107 >> 2] = i89;
           if ((i89 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i83 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i83 - 8 | 0);
          }
         } while (0);
         i105 = HEAP32[i9 >> 2] | 0;
         if ((i105 | 0) == 0) {
          i108 = i91;
          break;
         }
         i83 = i105 + 8 | 0;
         i105 = i83 | 0;
         i89 = (HEAP32[i105 >> 2] | 0) - 1 | 0;
         HEAP32[i105 >> 2] = i89;
         if ((i89 | 0) >= 1) {
          i108 = i91;
          break;
         }
         if ((HEAP32[i83 + 8 >> 2] | 0) != 0) {
          i108 = i91;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i83 - 8 | 0);
         i108 = i91;
        } else {
         do {
          if ((HEAP8[i1 + 157 | 0] & 1) == 0) {
           i109 = i91;
          } else {
           i83 = __ZN7WebCore26highestEnclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleEPS3_(i8, F_BASE_ii + 12 | 0, 1, 0) | 0;
           if ((i83 | 0) == 0) {
            i109 = i91;
            break;
           }
           i89 = i83;
           i105 = i83 + 8 | 0;
           HEAP32[i105 >> 2] = (HEAP32[i105 >> 2] | 0) + 1;
           i105 = i91 + 8 | 0;
           i83 = i105 | 0;
           i107 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
           HEAP32[i83 >> 2] = i107;
           if ((i107 | 0) >= 1) {
            i109 = i89;
            break;
           }
           if ((HEAP32[i105 + 8 >> 2] | 0) != 0) {
            i109 = i89;
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i105 - 8 | 0);
           i109 = i89;
          }
         } while (0);
         i9 = HEAP32[i104 + 44 >> 2] | 0;
         i89 = HEAP32[__ZN7WebCore9HTMLNames6divTagE >> 2] | 0;
         do {
          if ((i9 | 0) == (i89 | 0)) {
           i87 = 139;
          } else {
           if ((HEAP32[i9 + 12 >> 2] | 0) != (HEAP32[i89 + 12 >> 2] | 0)) {
            i110 = i109;
            break;
           }
           if ((HEAP32[i9 + 16 >> 2] | 0) == (HEAP32[i89 + 16 >> 2] | 0)) {
            i87 = 139;
           } else {
            i110 = i109;
           }
          }
         } while (0);
         L178 : do {
          if ((i87 | 0) == 139) {
           if ((HEAP32[i109 + 28 >> 2] | 0) == 0) {
            i111 = i109;
            i112 = i89;
           } else {
            i110 = i109;
            break;
           }
           while (1) {
            i9 = i111 + 16 | 0;
            i105 = HEAP32[i9 >> 2] | 0;
            i107 = HEAP32[i105 + 44 >> 2] | 0;
            if ((i107 | 0) != (i112 | 0)) {
             if ((HEAP32[i107 + 12 >> 2] | 0) != (HEAP32[i112 + 12 >> 2] | 0)) {
              i110 = i111;
              break L178;
             }
             if ((HEAP32[i107 + 16 >> 2] | 0) != (HEAP32[i112 + 16 >> 2] | 0)) {
              i110 = i111;
              break L178;
             }
            }
            i107 = HEAP32[i105 + 16 >> 2] | 0;
            if ((i107 | 0) == 0) {
             i110 = i111;
             break L178;
            }
            if ((HEAP32[i107 + 12 >> 2] & 4 | 0) == 0) {
             i110 = i111;
             break L178;
            }
            do {
             if ((i105 | 0) == 0) {
              i113 = 0;
             } else {
              if ((HEAP32[i105 + 12 >> 2] & 4 | 0) == 0) {
               i113 = 0;
               break;
              }
              i113 = i105;
             }
            } while (0);
            if (__ZNK7WebCore7Element13hasAttributesEv(i113) | 0) {
             i110 = i111;
             break L178;
            }
            i105 = HEAP32[i9 >> 2] | 0;
            do {
             if ((i105 | 0) == 0) {
              i114 = 0;
             } else {
              if ((HEAP32[i105 + 12 >> 2] & 4 | 0) == 0) {
               i114 = 0;
               break;
              }
              i114 = i105;
             }
            } while (0);
            if ((HEAP32[i114 + 28 >> 2] | 0) != 0) {
             i110 = i114;
             break L178;
            }
            i111 = i114;
            i112 = HEAP32[__ZN7WebCore9HTMLNames6divTagE >> 2] | 0;
           }
          }
         } while (0);
         i89 = i25 | 0;
         HEAP32[i89 >> 2] = i104;
         if ((i104 | 0) != 0) {
          i95 = i104 + 8 | 0;
          HEAP32[i95 >> 2] = (HEAP32[i95 >> 2] | 0) + 1;
         }
         i95 = i26 | 0;
         HEAP32[i95 >> 2] = i110;
         if ((i110 | 0) != 0) {
          i96 = i110 + 8 | 0;
          HEAP32[i96 >> 2] = (HEAP32[i96 >> 2] | 0) + 1;
         }
         __ZN7WebCore20CompositeEditCommand15insertNodeAfterEN3WTF10PassRefPtrINS_4NodeEEES4_(i7, i25, i26);
         i96 = HEAP32[i95 >> 2] | 0;
         do {
          if ((i96 | 0) != 0) {
           i95 = i96 + 8 | 0;
           i105 = i95 | 0;
           i9 = (HEAP32[i105 >> 2] | 0) - 1 | 0;
           HEAP32[i105 >> 2] = i9;
           if ((i9 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i95 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i95 - 8 | 0);
          }
         } while (0);
         i96 = HEAP32[i89 >> 2] | 0;
         if ((i96 | 0) == 0) {
          i108 = i109;
          break;
         }
         i95 = i96 + 8 | 0;
         i96 = i95 | 0;
         i9 = (HEAP32[i96 >> 2] | 0) - 1 | 0;
         HEAP32[i96 >> 2] = i9;
         if ((i9 | 0) >= 1) {
          i108 = i109;
          break;
         }
         if ((HEAP32[i95 + 8 >> 2] | 0) != 0) {
          i108 = i109;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i95 - 8 | 0);
         i108 = i109;
        }
       } while (0);
       i95 = i27 | 0;
       HEAP32[i95 >> 2] = 0;
       i9 = i27 + 4 | 0;
       HEAP32[i9 >> 2] = 0;
       i96 = i27 + 8 | 0;
       HEAP32[i96 >> 2] = 0;
       __ZN7WebCore20CompositeEditCommand22positionOutsideTabSpanERKNS_8PositionE(i28, i7, i6);
       i105 = i28 | 0;
       __ZN7WebCore31InsertParagraphSeparatorCommand23getAncestorsInsideBlockEPKNS_4NodeEPNS_7ElementERN3WTF6VectorINS6_6RefPtrIS4_EELj0ENS6_15CrashOnOverflowEEE(0, HEAP32[i105 >> 2] | 0, i108, i27);
       i107 = HEAP32[i105 >> 2] | 0;
       do {
        if ((i107 | 0) != 0) {
         i105 = i107 + 8 | 0;
         i83 = i105 | 0;
         i106 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
         HEAP32[i83 >> 2] = i106;
         if ((i106 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i105 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i105 - 8 | 0);
        }
       } while (0);
       i107 = i30 | 0;
       HEAP32[i107 >> 2] = i104;
       if ((i104 | 0) != 0) {
        i105 = i104 + 8 | 0;
        HEAP32[i105 >> 2] = (HEAP32[i105 >> 2] | 0) + 1;
       }
       __ZN7WebCore31InsertParagraphSeparatorCommand27cloneHierarchyUnderNewBlockERKN3WTF6VectorINS1_6RefPtrINS_7ElementEEELj0ENS1_15CrashOnOverflowEEENS1_10PassRefPtrIS4_EE(i29, i1, i27, i30);
       i105 = i29 | 0;
       i106 = HEAP32[i105 >> 2] | 0;
       HEAP32[i105 >> 2] = 0;
       i105 = HEAP32[i107 >> 2] | 0;
       do {
        if ((i105 | 0) != 0) {
         i107 = i105 + 8 | 0;
         i83 = i107 | 0;
         i115 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
         HEAP32[i83 >> 2] = i115;
         if ((i115 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i107 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i107 - 8 | 0);
        }
       } while (0);
       i105 = i32 | 0;
       HEAP32[i105 >> 2] = i106;
       i107 = (i106 | 0) == 0;
       if (!i107) {
        i115 = i106 + 8 | 0;
        HEAP32[i115 >> 2] = (HEAP32[i115 >> 2] | 0) + 1;
       }
       __ZN7WebCore20CompositeEditCommand22appendBlockPlaceholderEN3WTF10PassRefPtrINS_7ElementEEE(i31, i7, i32);
       i115 = HEAP32[i31 >> 2] | 0;
       do {
        if ((i115 | 0) != 0) {
         i83 = i115 + 8 | 0;
         i116 = i83 | 0;
         i117 = (HEAP32[i116 >> 2] | 0) - 1 | 0;
         HEAP32[i116 >> 2] = i117;
         if ((i117 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i83 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i83 - 8 | 0);
        }
       } while (0);
       i115 = HEAP32[i105 >> 2] | 0;
       do {
        if ((i115 | 0) != 0) {
         i83 = i115 + 8 | 0;
         i117 = i83 | 0;
         i116 = (HEAP32[i117 >> 2] | 0) - 1 | 0;
         HEAP32[i117 >> 2] = i116;
         if ((i116 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i83 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i83 - 8 | 0);
        }
       } while (0);
       __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i34, i106 | 0);
       __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb(i33, i34, 1, (HEAP8[i1 + 128 | 0] & 2) != 0);
       __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i82, i33);
       __ZN7WebCore16VisibleSelectionD2Ev(i33);
       i115 = HEAP32[i34 >> 2] | 0;
       do {
        if ((i115 | 0) != 0) {
         i105 = i115 + 8 | 0;
         i83 = i105 | 0;
         i116 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
         HEAP32[i83 >> 2] = i116;
         if ((i116 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i105 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i105 - 8 | 0);
        }
       } while (0);
       do {
        if (!i107) {
         i115 = i106 + 8 | 0;
         i105 = i115 | 0;
         i116 = (HEAP32[i105 >> 2] | 0) - 1 | 0;
         HEAP32[i105 >> 2] = i116;
         if ((i116 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i115 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i115 - 8 | 0);
        }
       } while (0);
       i106 = HEAP32[i96 >> 2] | 0;
       i107 = HEAP32[i95 >> 2] | 0;
       if ((i106 | 0) != 0) {
        i115 = i107 + (i106 << 2) | 0;
        i106 = i107;
        while (1) {
         i116 = HEAP32[i106 >> 2] | 0;
         do {
          if ((i116 | 0) != 0) {
           i105 = i116 + 8 | 0;
           i83 = i105 | 0;
           i117 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
           HEAP32[i83 >> 2] = i117;
           if ((i117 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i105 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i105 - 8 | 0);
          }
         } while (0);
         i106 = i106 + 4 | 0;
         if ((i106 | 0) == (i115 | 0)) {
          break;
         }
        }
        HEAP32[i96 >> 2] = 0;
       }
       if ((i107 | 0) == 0) {
        i118 = i108;
        break;
       }
       HEAP32[i95 >> 2] = 0;
       HEAP32[i9 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i107);
       i118 = i108;
      } else {
       L263 : do {
        if (!i86) {
         __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i35, i14, 0);
         i115 = __ZN7WebCore11inSameBlockERKNS_15VisiblePositionES2_(i14, i35) | 0;
         i106 = HEAP32[i35 >> 2] | 0;
         do {
          if ((i106 | 0) == 0) {
           i87 = 209;
          } else {
           i116 = i106 + 8 | 0;
           i89 = i116 | 0;
           i105 = (HEAP32[i89 >> 2] | 0) - 1 | 0;
           HEAP32[i89 >> 2] = i105;
           if ((i105 | 0) >= 1) {
            i87 = 209;
            break;
           }
           if ((HEAP32[i116 + 8 >> 2] | 0) != 0) {
            i87 = 209;
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i116 - 8 | 0);
           if (!i115) {
            break L263;
           }
          }
         } while (0);
         if ((i87 | 0) == 209) {
          if (!i115) {
           break;
          }
         }
         if (__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i14, 1) | 0) {
          __ZN7WebCore18createBreakElementERNS_8DocumentE(i47, HEAP32[i1 + 8 >> 2] | 0);
          i106 = i47 | 0;
          i116 = HEAP32[i106 >> 2] | 0;
          HEAP32[i106 >> 2] = 0;
          i106 = i116 | 0;
          i105 = i48 | 0;
          HEAP32[i105 >> 2] = i106;
          i89 = (i116 | 0) == 0;
          if (!i89) {
           i117 = i116 + 8 | 0;
           HEAP32[i117 >> 2] = (HEAP32[i117 >> 2] | 0) + 1;
          }
          __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i7, i48, i6);
          i117 = HEAP32[i105 >> 2] | 0;
          do {
           if ((i117 | 0) != 0) {
            i105 = i117 + 8 | 0;
            i83 = i105 | 0;
            i119 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
            HEAP32[i83 >> 2] = i119;
            if ((i119 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i105 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i105 - 8 | 0);
           }
          } while (0);
          i117 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i106) | 0;
          i115 = i3 | 0;
          HEAP32[i115 >> 2] = i117;
          if ((i117 | 0) != 0) {
           i105 = i117 + 8 | 0;
           HEAP32[i105 >> 2] = (HEAP32[i105 >> 2] | 0) + 1;
          }
          __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i49, i3, (__ZNK7WebCore4Node9nodeIndexEv(i106) | 0) + 1 | 0, 0);
          i105 = HEAP32[i115 >> 2] | 0;
          do {
           if ((i105 | 0) != 0) {
            i115 = i105 + 8 | 0;
            i117 = i115 | 0;
            i119 = (HEAP32[i117 >> 2] | 0) - 1 | 0;
            HEAP32[i117 >> 2] = i119;
            if ((i119 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i115 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i115 - 8 | 0);
           }
          } while (0);
          i105 = i49 | 0;
          i106 = HEAP32[i105 >> 2] | 0;
          HEAP32[i105 >> 2] = 0;
          i115 = HEAP32[i97 >> 2] | 0;
          HEAP32[i97 >> 2] = i106;
          do {
           if ((i115 | 0) != 0) {
            i106 = i115 + 8 | 0;
            i119 = i106 | 0;
            i117 = (HEAP32[i119 >> 2] | 0) - 1 | 0;
            HEAP32[i119 >> 2] = i117;
            if ((i117 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i106 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i106 - 8 | 0);
           }
          } while (0);
          HEAP32[i92 >> 2] = HEAP32[i49 + 4 >> 2];
          i115 = HEAP32[i49 + 8 >> 2] | 0;
          i106 = HEAP32[i85 >> 2] & -8 | i115 & 7;
          HEAP32[i85 >> 2] = i106;
          HEAP8[i94] = i106 & 255 & -9 | i115 & 8;
          i115 = HEAP32[i105 >> 2] | 0;
          do {
           if ((i115 | 0) != 0) {
            i106 = i115 + 8 | 0;
            i117 = i106 | 0;
            i119 = (HEAP32[i117 >> 2] | 0) - 1 | 0;
            HEAP32[i117 >> 2] = i119;
            if ((i119 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i106 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i106 - 8 | 0);
           }
          } while (0);
          i115 = HEAP32[i14 >> 2] | 0;
          i105 = (i115 | 0) == 0;
          if (!i105) {
           i106 = i115 + 8 | 0;
           HEAP32[i106 >> 2] = (HEAP32[i106 >> 2] | 0) + 1;
          }
          i106 = i115 + 32 | 0;
          if ((HEAP32[i115 + 12 >> 2] & 2048 | 0) == 0) {
           i120 = i106 | 0;
          } else {
           i120 = HEAP32[i106 >> 2] | 0;
          }
          i106 = HEAP32[i120 >> 2] | 0;
          if ((HEAP32[i106 + 20 >> 2] & 4096 | 0) == 0) {
           i121 = 0;
          } else {
           i121 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i106 >> 2] | 0) + 620 >> 2] & 31](i106) | 0) ^ 1;
          }
          do {
           if (!i105) {
            i106 = i115 + 8 | 0;
            i119 = i106 | 0;
            i117 = (HEAP32[i119 >> 2] | 0) - 1 | 0;
            HEAP32[i119 >> 2] = i117;
            if ((i117 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i106 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i106 - 8 | 0);
           }
          } while (0);
          if (i121) {
           __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb(i50, i6, 1, (HEAP8[i1 + 128 | 0] & 2) != 0);
           __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i82, i50);
           __ZN7WebCore16VisibleSelectionD2Ev(i50);
           i122 = 1;
          } else {
           i122 = 0;
          }
          do {
           if (!i89) {
            i115 = i116 + 8 | 0;
            i105 = i115 | 0;
            i106 = (HEAP32[i105 >> 2] | 0) - 1 | 0;
            HEAP32[i105 >> 2] = i106;
            if ((i106 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i115 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i115 - 8 | 0);
           }
          } while (0);
          if ((i122 | 0) != 0) {
           i118 = i91;
           break L120;
          }
         }
         __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i51, i6, 1);
         i116 = i51 | 0;
         i89 = HEAP32[i116 >> 2] | 0;
         HEAP32[i116 >> 2] = 0;
         i115 = HEAP32[i97 >> 2] | 0;
         HEAP32[i97 >> 2] = i89;
         do {
          if ((i115 | 0) != 0) {
           i89 = i115 + 8 | 0;
           i106 = i89 | 0;
           i105 = (HEAP32[i106 >> 2] | 0) - 1 | 0;
           HEAP32[i106 >> 2] = i105;
           if ((i105 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i89 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i89 - 8 | 0);
          }
         } while (0);
         HEAP32[i92 >> 2] = HEAP32[i51 + 4 >> 2];
         i115 = HEAP32[i51 + 8 >> 2] | 0;
         i89 = HEAP32[i85 >> 2] & -8 | i115 & 7;
         HEAP32[i85 >> 2] = i89;
         HEAP8[i94] = i89 & 255 & -9 | i115 & 8;
         i115 = HEAP32[i116 >> 2] | 0;
         do {
          if ((i115 | 0) != 0) {
           i89 = i115 + 8 | 0;
           i105 = i89 | 0;
           i106 = (HEAP32[i105 >> 2] | 0) - 1 | 0;
           HEAP32[i105 >> 2] = i106;
           if ((i106 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i89 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i89 - 8 | 0);
          }
         } while (0);
         __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i54, i6, 1);
         i115 = i53 | 0;
         i116 = i54 | 0;
         i89 = HEAP32[i116 >> 2] | 0;
         HEAP32[i115 >> 2] = i89;
         if ((i89 | 0) != 0) {
          i106 = i89 + 8 | 0;
          HEAP32[i106 >> 2] = (HEAP32[i106 >> 2] | 0) + 1;
         }
         HEAP32[i53 + 4 >> 2] = HEAP32[i54 + 4 >> 2];
         i106 = HEAP32[i54 + 8 >> 2] | 0;
         i89 = i53 + 8 | 0;
         i105 = i89;
         i117 = HEAP32[i105 >> 2] & -8 | i106 & 7;
         HEAP32[i105 >> 2] = i117;
         HEAP8[i89] = i117 & 255 & -9 | i106 & 8;
         __ZN7WebCore20CompositeEditCommand22positionOutsideTabSpanERKNS_8PositionE(i52, i7, i53);
         i106 = i52 | 0;
         i117 = HEAP32[i106 >> 2] | 0;
         HEAP32[i106 >> 2] = 0;
         i89 = HEAP32[i97 >> 2] | 0;
         HEAP32[i97 >> 2] = i117;
         do {
          if ((i89 | 0) != 0) {
           i117 = i89 + 8 | 0;
           i105 = i117 | 0;
           i119 = (HEAP32[i105 >> 2] | 0) - 1 | 0;
           HEAP32[i105 >> 2] = i119;
           if ((i119 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i117 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i117 - 8 | 0);
          }
         } while (0);
         HEAP32[i92 >> 2] = HEAP32[i52 + 4 >> 2];
         i89 = HEAP32[i52 + 8 >> 2] | 0;
         i117 = HEAP32[i85 >> 2] & -8 | i89 & 7;
         HEAP32[i85 >> 2] = i117;
         HEAP8[i94] = i117 & 255 & -9 | i89 & 8;
         i89 = HEAP32[i106 >> 2] | 0;
         do {
          if ((i89 | 0) != 0) {
           i117 = i89 + 8 | 0;
           i119 = i117 | 0;
           i105 = (HEAP32[i119 >> 2] | 0) - 1 | 0;
           HEAP32[i119 >> 2] = i105;
           if ((i105 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i117 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i117 - 8 | 0);
          }
         } while (0);
         i89 = HEAP32[i115 >> 2] | 0;
         do {
          if ((i89 | 0) != 0) {
           i106 = i89 + 8 | 0;
           i117 = i106 | 0;
           i105 = (HEAP32[i117 >> 2] | 0) - 1 | 0;
           HEAP32[i117 >> 2] = i105;
           if ((i105 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i106 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i106 - 8 | 0);
          }
         } while (0);
         i89 = HEAP32[i116 >> 2] | 0;
         do {
          if ((i89 | 0) != 0) {
           i115 = i89 + 8 | 0;
           i106 = i115 | 0;
           i105 = (HEAP32[i106 >> 2] | 0) - 1 | 0;
           HEAP32[i106 >> 2] = i105;
           if ((i105 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i115 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i115 - 8 | 0);
          }
         } while (0);
         i89 = HEAP32[i97 >> 2] | 0;
         do {
          if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i89 >> 2] | 0) + 132 >> 2] & 31](i89) | 0)) {
           if (__ZNK7WebCore8Position28atLastEditingPositionForNodeEv(i6) | 0) {
            __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i55, i6, 1);
            i116 = i55 | 0;
            i115 = HEAP32[i116 >> 2] | 0;
            HEAP32[i116 >> 2] = 0;
            i105 = HEAP32[i97 >> 2] | 0;
            HEAP32[i97 >> 2] = i115;
            do {
             if ((i105 | 0) != 0) {
              i115 = i105 + 8 | 0;
              i106 = i115 | 0;
              i117 = (HEAP32[i106 >> 2] | 0) - 1 | 0;
              HEAP32[i106 >> 2] = i117;
              if ((i117 | 0) >= 1) {
               break;
              }
              if ((HEAP32[i115 + 8 >> 2] | 0) != 0) {
               break;
              }
              __ZN7WebCore4Node14removedLastRefEv(i115 - 8 | 0);
             }
            } while (0);
            HEAP32[i92 >> 2] = HEAP32[i55 + 4 >> 2];
            i105 = HEAP32[i55 + 8 >> 2] | 0;
            i115 = HEAP32[i85 >> 2] & -8 | i105 & 7;
            HEAP32[i85 >> 2] = i115;
            HEAP8[i94] = i115 & 255 & -9 | i105 & 8;
            i105 = HEAP32[i116 >> 2] | 0;
            if ((i105 | 0) == 0) {
             break;
            }
            i115 = i105 + 8 | 0;
            i105 = i115 | 0;
            i117 = (HEAP32[i105 >> 2] | 0) - 1 | 0;
            HEAP32[i105 >> 2] = i117;
            if ((i117 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i115 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i115 - 8 | 0);
            break;
           }
           if (!(__ZNK7WebCore8Position29atFirstEditingPositionForNodeEv(i6) | 0)) {
            break;
           }
           __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i56, i6, 1);
           i115 = i56 | 0;
           i117 = HEAP32[i115 >> 2] | 0;
           HEAP32[i115 >> 2] = 0;
           i105 = HEAP32[i97 >> 2] | 0;
           HEAP32[i97 >> 2] = i117;
           do {
            if ((i105 | 0) != 0) {
             i117 = i105 + 8 | 0;
             i106 = i117 | 0;
             i119 = (HEAP32[i106 >> 2] | 0) - 1 | 0;
             HEAP32[i106 >> 2] = i119;
             if ((i119 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i117 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i117 - 8 | 0);
            }
           } while (0);
           HEAP32[i92 >> 2] = HEAP32[i56 + 4 >> 2];
           i105 = HEAP32[i56 + 8 >> 2] | 0;
           i116 = HEAP32[i85 >> 2] & -8 | i105 & 7;
           HEAP32[i85 >> 2] = i116;
           HEAP8[i94] = i116 & 255 & -9 | i105 & 8;
           i105 = HEAP32[i115 >> 2] | 0;
           if ((i105 | 0) == 0) {
            break;
           }
           i116 = i105 + 8 | 0;
           i105 = i116 | 0;
           i117 = (HEAP32[i105 >> 2] | 0) - 1 | 0;
           HEAP32[i105 >> 2] = i117;
           if ((i117 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i116 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i116 - 8 | 0);
          }
         } while (0);
         __ZNK7WebCore8Position25leadingWhitespacePositionENS_9EAffinityEb(i57, i6, 1, 0);
         i89 = i57 | 0;
         i116 = HEAP32[i89 >> 2] | 0;
         do {
          if ((i116 | 0) != 0) {
           if ((HEAP32[i116 + 12 >> 2] & 1 | 0) == 0) {
            break;
           }
           i117 = i58 | 0;
           HEAP32[i117 >> 2] = i116;
           i105 = i116 + 8 | 0;
           HEAP32[i105 >> 2] = (HEAP32[i105 >> 2] | 0) + 1;
           i105 = i57 + 8 | 0;
           do {
            if ((HEAP8[i105] & 8) == 0) {
             i119 = HEAP32[i105 >> 2] & 7;
             if (!((i119 | 0) == 2 | (i119 | 0) == 4)) {
              i87 = 367;
              break;
             }
             i123 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i57) | 0;
            } else {
             i87 = 367;
            }
           } while (0);
           if ((i87 | 0) == 367) {
            i123 = HEAP32[i57 + 4 >> 2] | 0;
           }
           __ZN7WebCore20CompositeEditCommand34replaceTextInNodePreservingMarkersEN3WTF10PassRefPtrINS_4TextEEEjjRKNS1_6StringE(i7, i58, i123, 1, __ZN7WebCore22nonBreakingSpaceStringEv() | 0);
           i105 = HEAP32[i117 >> 2] | 0;
           if ((i105 | 0) == 0) {
            break;
           }
           i115 = i105 + 8 | 0;
           i105 = i115 | 0;
           i119 = (HEAP32[i105 >> 2] | 0) - 1 | 0;
           HEAP32[i105 >> 2] = i119;
           if ((i119 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i115 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i115 - 8 | 0);
          }
         } while (0);
         i116 = i59 | 0;
         HEAP32[i116 >> 2] = 0;
         i115 = i59 + 4 | 0;
         HEAP32[i115 >> 2] = 0;
         i119 = i59 + 8 | 0;
         i105 = i119;
         i106 = HEAP32[i105 >> 2] | 0;
         HEAP32[i105 >> 2] = i106 & -8;
         HEAP8[i119] = i106 & 255 & -16;
         do {
          if ((HEAP32[i85 >> 2] & 7 | 0) == 0) {
           if ((HEAP32[(__ZNK7WebCore8Position13containerNodeEv(i6) | 0) + 12 >> 2] & 1 | 0) == 0) {
            i87 = 415;
            break;
           }
           i106 = __ZNK7WebCore8Position13containerNodeEv(i6) | 0;
           i83 = i106;
           i124 = (i106 | 0) == 0;
           if (!i124) {
            i125 = i106 + 8 | 0;
            HEAP32[i125 >> 2] = (HEAP32[i125 >> 2] | 0) + 1;
           }
           i125 = HEAP32[i92 >> 2] | 0;
           i126 = HEAP32[i106 + 36 >> 2] | 0;
           if ((i126 | 0) == 0) {
            i127 = 0;
           } else {
            i127 = HEAP32[i126 + 4 >> 2] | 0;
           }
           do {
            if ((HEAP8[i94] & 8) == 0) {
             i126 = HEAP32[i85 >> 2] & 7;
             if (!((i126 | 0) == 2 | (i126 | 0) == 4)) {
              i128 = i125;
              break;
             }
             i128 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i6) | 0;
            } else {
             i128 = i125;
            }
           } while (0);
           do {
            if ((i128 | 0) > 0 & i125 >>> 0 < i127 >>> 0) {
             i117 = i60 | 0;
             HEAP32[i117 >> 2] = i83;
             if (!i124) {
              i126 = i106 + 8 | 0;
              HEAP32[i126 >> 2] = (HEAP32[i126 >> 2] | 0) + 1;
             }
             __ZN7WebCore20CompositeEditCommand13splitTextNodeEN3WTF10PassRefPtrINS_4TextEEEj(i7, i60, HEAP32[i92 >> 2] | 0);
             i126 = HEAP32[i117 >> 2] | 0;
             do {
              if ((i126 | 0) != 0) {
               i117 = i126 + 8 | 0;
               i129 = i117 | 0;
               i130 = (HEAP32[i129 >> 2] | 0) - 1 | 0;
               HEAP32[i129 >> 2] = i130;
               if ((i130 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i117 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i117 - 8 | 0);
              }
             } while (0);
             __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i61, i106);
             i126 = i61 | 0;
             i117 = HEAP32[i126 >> 2] | 0;
             HEAP32[i126 >> 2] = 0;
             i130 = HEAP32[i116 >> 2] | 0;
             HEAP32[i116 >> 2] = i117;
             do {
              if ((i130 | 0) != 0) {
               i117 = i130 + 8 | 0;
               i129 = i117 | 0;
               i131 = (HEAP32[i129 >> 2] | 0) - 1 | 0;
               HEAP32[i129 >> 2] = i131;
               if ((i131 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i117 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i117 - 8 | 0);
              }
             } while (0);
             HEAP32[i115 >> 2] = HEAP32[i61 + 4 >> 2];
             i130 = HEAP32[i61 + 8 >> 2] | 0;
             i117 = HEAP32[i105 >> 2] & -8 | i130 & 7;
             HEAP32[i105 >> 2] = i117;
             HEAP8[i119] = i117 & 255 & -9 | i130 & 8;
             i130 = HEAP32[i126 >> 2] | 0;
             do {
              if ((i130 | 0) != 0) {
               i117 = i130 + 8 | 0;
               i131 = i117 | 0;
               i129 = (HEAP32[i131 >> 2] | 0) - 1 | 0;
               HEAP32[i131 >> 2] = i129;
               if ((i129 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i117 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i117 - 8 | 0);
              }
             } while (0);
             i130 = HEAP32[i106 + 24 >> 2] | 0;
             if ((i130 | 0) == 0) {
              i132 = 1;
              break;
             }
             i126 = i62 | 0;
             HEAP32[i126 >> 2] = i130;
             i117 = i130 + 8 | 0;
             HEAP32[i117 >> 2] = (HEAP32[i117 >> 2] | 0) + 1;
             __ZN7WebCore8Position14moveToPositionEN3WTF10PassRefPtrINS_4NodeEEEi(i6, i62, HEAP32[i92 >> 2] | 0);
             i117 = HEAP32[i126 >> 2] | 0;
             do {
              if ((i117 | 0) != 0) {
               i126 = i117 + 8 | 0;
               i130 = i126 | 0;
               i129 = (HEAP32[i130 >> 2] | 0) - 1 | 0;
               HEAP32[i130 >> 2] = i129;
               if ((i129 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i126 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i126 - 8 | 0);
              }
             } while (0);
             __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i63, i6, 1);
             i117 = i63 | 0;
             i126 = HEAP32[i117 >> 2] | 0;
             HEAP32[i117 >> 2] = 0;
             i129 = i14 | 0;
             i130 = HEAP32[i129 >> 2] | 0;
             HEAP32[i129 >> 2] = i126;
             do {
              if ((i130 | 0) != 0) {
               i126 = i130 + 8 | 0;
               i129 = i126 | 0;
               i131 = (HEAP32[i129 >> 2] | 0) - 1 | 0;
               HEAP32[i129 >> 2] = i131;
               if ((i131 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i126 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i126 - 8 | 0);
              }
             } while (0);
             HEAP32[i14 + 4 >> 2] = HEAP32[i63 + 4 >> 2];
             i130 = HEAP32[i63 + 8 >> 2] | 0;
             i126 = i14 + 8 | 0;
             i131 = i126;
             i129 = HEAP32[i131 >> 2] & -8 | i130 & 7;
             HEAP32[i131 >> 2] = i129;
             HEAP8[i126] = i129 & 255 & -9 | i130 & 8;
             HEAP32[i14 + 12 >> 2] = HEAP32[i63 + 12 >> 2];
             i130 = HEAP32[i117 >> 2] | 0;
             if ((i130 | 0) == 0) {
              i132 = 0;
              break;
             }
             i129 = i130 + 8 | 0;
             i130 = i129 | 0;
             i126 = (HEAP32[i130 >> 2] | 0) - 1 | 0;
             HEAP32[i130 >> 2] = i126;
             if ((i126 | 0) >= 1) {
              i132 = 0;
              break;
             }
             if ((HEAP32[i129 + 8 >> 2] | 0) != 0) {
              i132 = 0;
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i129 - 8 | 0);
             i132 = 0;
            } else {
             i132 = 0;
            }
           } while (0);
           do {
            if (!i124) {
             i83 = i106 + 8 | 0;
             i125 = i83 | 0;
             i129 = (HEAP32[i125 >> 2] | 0) - 1 | 0;
             HEAP32[i125 >> 2] = i129;
             if ((i129 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i83 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i83 - 8 | 0);
            }
           } while (0);
           if ((i132 | 0) == 0) {
            i87 = 415;
           }
          } else {
           i87 = 415;
          }
         } while (0);
         do {
          if ((i87 | 0) == 415) {
           if ((HEAP32[i91 + 16 >> 2] | 0) == 0) {
            break;
           }
           i119 = i104 | 0;
           do {
            if (i103) {
             i105 = i64 | 0;
             HEAP32[i105 >> 2] = i119;
             if ((i104 | 0) != 0) {
              i115 = i104 + 8 | 0;
              HEAP32[i115 >> 2] = (HEAP32[i115 >> 2] | 0) + 1;
             }
             i115 = i65 | 0;
             HEAP32[i115 >> 2] = i91;
             i106 = i91 + 8 | 0;
             HEAP32[i106 >> 2] = (HEAP32[i106 >> 2] | 0) + 1;
             __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i7, i64, i65);
             i106 = HEAP32[i115 >> 2] | 0;
             do {
              if ((i106 | 0) != 0) {
               i115 = i106 + 8 | 0;
               i124 = i115 | 0;
               i83 = (HEAP32[i124 >> 2] | 0) - 1 | 0;
               HEAP32[i124 >> 2] = i83;
               if ((i83 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i115 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i115 - 8 | 0);
              }
             } while (0);
             i106 = HEAP32[i105 >> 2] | 0;
             if ((i106 | 0) == 0) {
              break;
             }
             i117 = i106 + 8 | 0;
             i106 = i117 | 0;
             i115 = (HEAP32[i106 >> 2] | 0) - 1 | 0;
             HEAP32[i106 >> 2] = i115;
             if ((i115 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i117 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i117 - 8 | 0);
            } else {
             i117 = i66 | 0;
             HEAP32[i117 >> 2] = i119;
             if ((i104 | 0) != 0) {
              i115 = i104 + 8 | 0;
              HEAP32[i115 >> 2] = (HEAP32[i115 >> 2] | 0) + 1;
             }
             i115 = i67 | 0;
             HEAP32[i115 >> 2] = i98;
             i106 = i91 + 8 | 0;
             HEAP32[i106 >> 2] = (HEAP32[i106 >> 2] | 0) + 1;
             __ZN7WebCore20CompositeEditCommand15insertNodeAfterEN3WTF10PassRefPtrINS_4NodeEEES4_(i7, i66, i67);
             i106 = HEAP32[i115 >> 2] | 0;
             do {
              if ((i106 | 0) != 0) {
               i115 = i106 + 8 | 0;
               i83 = i115 | 0;
               i124 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
               HEAP32[i83 >> 2] = i124;
               if ((i124 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i115 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i115 - 8 | 0);
              }
             } while (0);
             i106 = HEAP32[i117 >> 2] | 0;
             if ((i106 | 0) == 0) {
              break;
             }
             i105 = i106 + 8 | 0;
             i106 = i105 | 0;
             i115 = (HEAP32[i106 >> 2] | 0) - 1 | 0;
             HEAP32[i106 >> 2] = i115;
             if ((i115 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i105 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i105 - 8 | 0);
            }
           } while (0);
           i105 = i1 + 8 | 0;
           __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i105 >> 2] | 0);
           do {
            if (__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i14, 1) | 0) {
             if (__ZN7WebCore32lineBreakExistsAtVisiblePositionERKNS_15VisiblePositionE(i14) | 0) {
              break;
             }
             __ZN7WebCore18createBreakElementERNS_8DocumentE(i69, HEAP32[i105 >> 2] | 0);
             i115 = i69 | 0;
             i106 = HEAP32[i115 >> 2] | 0;
             i124 = i68 | 0;
             HEAP32[i124 >> 2] = i106;
             if ((i106 | 0) != 0) {
              i83 = i106 + 8 | 0;
              HEAP32[i83 >> 2] = (HEAP32[i83 >> 2] | 0) + 1;
             }
             i83 = i70 | 0;
             HEAP32[i83 >> 2] = i104;
             if ((i104 | 0) != 0) {
              i106 = i104 + 8 | 0;
              HEAP32[i106 >> 2] = (HEAP32[i106 >> 2] | 0) + 1;
             }
             __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i7, i68, i70);
             i106 = HEAP32[i83 >> 2] | 0;
             do {
              if ((i106 | 0) != 0) {
               i83 = i106 + 8 | 0;
               i129 = i83 | 0;
               i125 = (HEAP32[i129 >> 2] | 0) - 1 | 0;
               HEAP32[i129 >> 2] = i125;
               if ((i125 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i83 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i83 - 8 | 0);
              }
             } while (0);
             i106 = HEAP32[i124 >> 2] | 0;
             do {
              if ((i106 | 0) != 0) {
               i117 = i106 + 8 | 0;
               i83 = i117 | 0;
               i125 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
               HEAP32[i83 >> 2] = i125;
               if ((i125 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i117 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i117 - 8 | 0);
              }
             } while (0);
             i106 = HEAP32[i115 >> 2] | 0;
             if ((i106 | 0) == 0) {
              break;
             }
             i124 = i106 + 8 | 0;
             i106 = i124 | 0;
             i117 = (HEAP32[i106 >> 2] | 0) - 1 | 0;
             HEAP32[i106 >> 2] = i117;
             if ((i117 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i124 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i124 - 8 | 0);
            }
           } while (0);
           __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i71, i6, 1);
           i124 = i4 | 0;
           HEAP32[i124 >> 2] = i119;
           i117 = (i104 | 0) == 0;
           if (!i117) {
            i106 = i104 + 8 | 0;
            HEAP32[i106 >> 2] = (HEAP32[i106 >> 2] | 0) + 1;
           }
           __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i73, i4, 1);
           i106 = HEAP32[i124 >> 2] | 0;
           do {
            if ((i106 | 0) != 0) {
             i124 = i106 + 8 | 0;
             i125 = i124 | 0;
             i83 = (HEAP32[i125 >> 2] | 0) - 1 | 0;
             HEAP32[i125 >> 2] = i83;
             if ((i83 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i124 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i124 - 8 | 0);
            }
           } while (0);
           __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i72, i73, 1);
           i106 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i71, i72) | 0;
           i124 = HEAP32[i72 >> 2] | 0;
           do {
            if ((i124 | 0) != 0) {
             i83 = i124 + 8 | 0;
             i125 = i83 | 0;
             i129 = (HEAP32[i125 >> 2] | 0) - 1 | 0;
             HEAP32[i125 >> 2] = i129;
             if ((i129 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i83 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i83 - 8 | 0);
            }
           } while (0);
           i124 = HEAP32[i73 >> 2] | 0;
           do {
            if ((i124 | 0) != 0) {
             i83 = i124 + 8 | 0;
             i129 = i83 | 0;
             i125 = (HEAP32[i129 >> 2] | 0) - 1 | 0;
             HEAP32[i129 >> 2] = i125;
             if ((i125 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i83 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i83 - 8 | 0);
            }
           } while (0);
           i124 = HEAP32[i71 >> 2] | 0;
           do {
            if ((i124 | 0) != 0) {
             i83 = i124 + 8 | 0;
             i125 = i83 | 0;
             i129 = (HEAP32[i125 >> 2] | 0) - 1 | 0;
             HEAP32[i125 >> 2] = i129;
             if ((i129 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i83 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i83 - 8 | 0);
            }
           } while (0);
           do {
            if (!i106) {
             L523 : do {
              if ((i98 | 0) == (__ZNK7WebCore8Position13containerNodeEv(i6) | 0)) {
               i133 = __ZNK7WebCore8Position24computeNodeAfterPositionEv(i6) | 0;
              } else {
               i124 = __ZNK7WebCore8Position13containerNodeEv(i6) | 0;
               i83 = i124 + 12 | 0;
               do {
                if ((HEAP32[i83 >> 2] & 1 | 0) == 0) {
                 i134 = i124;
                } else {
                 i129 = HEAP32[i92 >> 2] | 0;
                 if ((i129 | 0) < (__ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(i124) | 0)) {
                  i134 = i124;
                  break;
                 }
                 if ((HEAP32[i83 >> 2] & 2 | 0) != 0) {
                  i129 = HEAP32[i124 + 36 >> 2] | 0;
                  if ((i129 | 0) != 0) {
                   i134 = i129;
                   break;
                  }
                 }
                 if ((i124 | 0) == (i98 | 0)) {
                  i134 = 0;
                  break;
                 }
                 i129 = HEAP32[i124 + 28 >> 2] | 0;
                 if ((i129 | 0) != 0) {
                  i134 = i129;
                  break;
                 }
                 i134 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i124, i98) | 0;
                }
               } while (0);
               __ZN7WebCore20CompositeEditCommand15splitTreeToNodeEPNS_4NodeES2_b(i74, i7, i134, i98, 0);
               i124 = HEAP32[i74 >> 2] | 0;
               do {
                if ((i124 | 0) != 0) {
                 i83 = i124 + 8 | 0;
                 i129 = i83 | 0;
                 i125 = (HEAP32[i129 >> 2] | 0) - 1 | 0;
                 HEAP32[i129 >> 2] = i125;
                 if ((i125 | 0) >= 1) {
                  break;
                 }
                 if ((HEAP32[i83 + 8 >> 2] | 0) != 0) {
                  break;
                 }
                 __ZN7WebCore4Node14removedLastRefEv(i83 - 8 | 0);
                }
               } while (0);
               i124 = HEAP32[i91 + 36 >> 2] | 0;
               if ((i124 | 0) == 0) {
                i133 = 0;
                break;
               }
               i83 = i5 | 0;
               i125 = i76 | 0;
               i129 = i75 | 0;
               i126 = i77 | 0;
               i130 = i124;
               while (1) {
                HEAP32[i83 >> 2] = i130;
                i124 = i130 + 8 | 0;
                HEAP32[i124 >> 2] = (HEAP32[i124 >> 2] | 0) + 1;
                __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i76, i5, 1);
                i124 = HEAP32[i83 >> 2] | 0;
                do {
                 if ((i124 | 0) != 0) {
                  i131 = i124 + 8 | 0;
                  i135 = i131 | 0;
                  i136 = (HEAP32[i135 >> 2] | 0) - 1 | 0;
                  HEAP32[i135 >> 2] = i136;
                  if ((i136 | 0) >= 1) {
                   break;
                  }
                  if ((HEAP32[i131 + 8 >> 2] | 0) != 0) {
                   break;
                  }
                  __ZN7WebCore4Node14removedLastRefEv(i131 - 8 | 0);
                 }
                } while (0);
                __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i75, i76, 1);
                i124 = HEAP32[i125 >> 2] | 0;
                do {
                 if ((i124 | 0) != 0) {
                  i131 = i124 + 8 | 0;
                  i136 = i131 | 0;
                  i135 = (HEAP32[i136 >> 2] | 0) - 1 | 0;
                  HEAP32[i136 >> 2] = i135;
                  if ((i135 | 0) >= 1) {
                   break;
                  }
                  if ((HEAP32[i131 + 8 >> 2] | 0) != 0) {
                   break;
                  }
                  __ZN7WebCore4Node14removedLastRefEv(i131 - 8 | 0);
                 }
                } while (0);
                L553 : do {
                 if ((HEAP32[i129 >> 2] | 0) != 0) {
                  __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i77, i6, 1);
                  i124 = (__ZN7WebCore16comparePositionsERKNS_15VisiblePositionES2_(i77, i75) | 0) < 1;
                  i131 = HEAP32[i126 >> 2] | 0;
                  do {
                   if ((i131 | 0) != 0) {
                    i135 = i131 + 8 | 0;
                    i136 = i135 | 0;
                    i137 = (HEAP32[i136 >> 2] | 0) - 1 | 0;
                    HEAP32[i136 >> 2] = i137;
                    if ((i137 | 0) >= 1) {
                     break;
                    }
                    if ((HEAP32[i135 + 8 >> 2] | 0) != 0) {
                     break;
                    }
                    __ZN7WebCore4Node14removedLastRefEv(i135 - 8 | 0);
                   }
                  } while (0);
                  i131 = HEAP32[i129 >> 2] | 0;
                  do {
                   if ((i131 | 0) != 0) {
                    i135 = i131 + 8 | 0;
                    i137 = i135 | 0;
                    i136 = (HEAP32[i137 >> 2] | 0) - 1 | 0;
                    HEAP32[i137 >> 2] = i136;
                    if ((i136 | 0) >= 1) {
                     break;
                    }
                    if ((HEAP32[i135 + 8 >> 2] | 0) != 0) {
                     break;
                    }
                    __ZN7WebCore4Node14removedLastRefEv(i135 - 8 | 0);
                    if (i124) {
                     i133 = i130;
                     break L523;
                    } else {
                     break L553;
                    }
                   }
                  } while (0);
                  if (i124) {
                   i133 = i130;
                   break L523;
                  }
                 }
                } while (0);
                i131 = HEAP32[i130 + 28 >> 2] | 0;
                if ((i131 | 0) == 0) {
                 i133 = 0;
                 break;
                } else {
                 i130 = i131;
                }
               }
              }
             } while (0);
             i115 = i78 | 0;
             HEAP32[i115 >> 2] = i104;
             if (!i117) {
              i130 = i104 + 8 | 0;
              HEAP32[i130 >> 2] = (HEAP32[i130 >> 2] | 0) + 1;
             }
             __ZN7WebCore20CompositeEditCommand32moveRemainingSiblingsToNewParentEPNS_4NodeES2_N3WTF10PassRefPtrINS_7ElementEEE(i7, i133, i119, i78);
             i130 = HEAP32[i115 >> 2] | 0;
             if ((i130 | 0) == 0) {
              break;
             }
             i115 = i130 + 8 | 0;
             i130 = i115 | 0;
             i129 = (HEAP32[i130 >> 2] | 0) - 1 | 0;
             HEAP32[i130 >> 2] = i129;
             if ((i129 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i115 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i115 - 8 | 0);
            }
           } while (0);
           do {
            if ((HEAP32[i116 >> 2] | 0) != 0) {
             __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i105 >> 2] | 0);
             if (__ZNK7WebCore8Position19isRenderedCharacterEv(i59) | 0) {
              break;
             }
             __ZN7WebCore20CompositeEditCommand33deleteInsignificantTextDownstreamERKNS_8PositionE(i7, i59);
             if ((HEAP32[(HEAP32[i116 >> 2] | 0) + 12 >> 2] & 1 | 0) == 0) {
              break;
             }
             i117 = __ZNK7WebCore8Position13containerNodeEv(i59) | 0;
             i106 = i79 | 0;
             HEAP32[i106 >> 2] = i117;
             if ((i117 | 0) != 0) {
              i115 = i117 + 8 | 0;
              HEAP32[i115 >> 2] = (HEAP32[i115 >> 2] | 0) + 1;
             }
             __ZN7WebCore20CompositeEditCommand18insertTextIntoNodeEN3WTF10PassRefPtrINS_4TextEEEjRKNS1_6StringE(i7, i79, 0, __ZN7WebCore22nonBreakingSpaceStringEv() | 0);
             i115 = HEAP32[i106 >> 2] | 0;
             if ((i115 | 0) == 0) {
              break;
             }
             i106 = i115 + 8 | 0;
             i115 = i106 | 0;
             i117 = (HEAP32[i115 >> 2] | 0) - 1 | 0;
             HEAP32[i115 >> 2] = i117;
             if ((i117 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i106 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i106 - 8 | 0);
            }
           } while (0);
           __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i81, i119);
           __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb(i80, i81, 1, (HEAP8[i1 + 128 | 0] & 2) != 0);
           __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i82, i80);
           __ZN7WebCore16VisibleSelectionD2Ev(i80);
           i105 = HEAP32[i81 >> 2] | 0;
           do {
            if ((i105 | 0) != 0) {
             i106 = i105 + 8 | 0;
             i117 = i106 | 0;
             i115 = (HEAP32[i117 >> 2] | 0) - 1 | 0;
             HEAP32[i117 >> 2] = i115;
             if ((i115 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i106 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i106 - 8 | 0);
            }
           } while (0);
           __ZN7WebCore31InsertParagraphSeparatorCommand24applyStyleAfterInsertionEPNS_4NodeE(i1, i98);
          }
         } while (0);
         i105 = HEAP32[i116 >> 2] | 0;
         do {
          if ((i105 | 0) != 0) {
           i119 = i105 + 8 | 0;
           i106 = i119 | 0;
           i115 = (HEAP32[i106 >> 2] | 0) - 1 | 0;
           HEAP32[i106 >> 2] = i115;
           if ((i115 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i119 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i119 - 8 | 0);
          }
         } while (0);
         i105 = HEAP32[i89 >> 2] | 0;
         if ((i105 | 0) == 0) {
          i118 = i91;
          break L120;
         }
         i116 = i105 + 8 | 0;
         i105 = i116 | 0;
         i119 = (HEAP32[i105 >> 2] | 0) - 1 | 0;
         HEAP32[i105 >> 2] = i119;
         if ((i119 | 0) >= 1) {
          i118 = i91;
          break L120;
         }
         if ((HEAP32[i116 + 8 >> 2] | 0) != 0) {
          i118 = i91;
          break L120;
         }
         __ZN7WebCore4Node14removedLastRefEv(i116 - 8 | 0);
         i118 = i91;
         break L120;
        }
       } while (0);
       __ZN7WebCore20CompositeEditCommand22positionOutsideTabSpanERKNS_8PositionE(i36, i7, i6);
       i107 = i36 | 0;
       i9 = HEAP32[i107 >> 2] | 0;
       HEAP32[i107 >> 2] = 0;
       i95 = HEAP32[i97 >> 2] | 0;
       HEAP32[i97 >> 2] = i9;
       do {
        if ((i95 | 0) != 0) {
         i9 = i95 + 8 | 0;
         i96 = i9 | 0;
         i116 = (HEAP32[i96 >> 2] | 0) - 1 | 0;
         HEAP32[i96 >> 2] = i116;
         if ((i116 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
        }
       } while (0);
       HEAP32[i92 >> 2] = HEAP32[i36 + 4 >> 2];
       i95 = HEAP32[i36 + 8 >> 2] | 0;
       i9 = HEAP32[i85 >> 2] & -8 | i95 & 7;
       HEAP32[i85 >> 2] = i9;
       HEAP8[i94] = i9 & 255 & -9 | i95 & 8;
       i95 = HEAP32[i107 >> 2] | 0;
       do {
        if ((i95 | 0) != 0) {
         i9 = i95 + 8 | 0;
         i116 = i9 | 0;
         i96 = (HEAP32[i116 >> 2] | 0) - 1 | 0;
         HEAP32[i116 >> 2] = i96;
         if ((i96 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
        }
       } while (0);
       i95 = i86 ^ 1;
       do {
        if (i103 | i95) {
         i107 = i103 ^ 1;
         if (!(i95 | i107)) {
          i138 = HEAP32[i91 + 36 >> 2] | 0;
          break;
         }
         i9 = HEAP32[i97 >> 2] | 0;
         if ((i98 | 0) != (i9 | 0) | i107) {
          i138 = i9;
          break;
         }
         i9 = i91 | 0;
         do {
          if ((HEAP8[i94] & 8) == 0) {
           i107 = HEAP32[i85 >> 2] & 7;
           if (!((i107 | 0) == 2 | (i107 | 0) == 4)) {
            i87 = 224;
            break;
           }
           i139 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i6) | 0;
          } else {
           i87 = 224;
          }
         } while (0);
         if ((i87 | 0) == 224) {
          i139 = HEAP32[i92 >> 2] | 0;
         }
         i138 = __ZNK7WebCore13ContainerNode9childNodeEj(i9, i139) | 0;
        } else {
         i138 = i98;
        }
       } while (0);
       __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i37, i6, 1);
       i95 = i37 | 0;
       i89 = HEAP32[i95 >> 2] | 0;
       HEAP32[i95 >> 2] = 0;
       i107 = HEAP32[i97 >> 2] | 0;
       HEAP32[i97 >> 2] = i89;
       do {
        if ((i107 | 0) != 0) {
         i89 = i107 + 8 | 0;
         i96 = i89 | 0;
         i116 = (HEAP32[i96 >> 2] | 0) - 1 | 0;
         HEAP32[i96 >> 2] = i116;
         if ((i116 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i89 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i89 - 8 | 0);
        }
       } while (0);
       HEAP32[i92 >> 2] = HEAP32[i37 + 4 >> 2];
       i107 = HEAP32[i37 + 8 >> 2] | 0;
       i89 = HEAP32[i85 >> 2] & -8 | i107 & 7;
       HEAP32[i85 >> 2] = i89;
       HEAP8[i94] = i89 & 255 & -9 | i107 & 8;
       i107 = HEAP32[i95 >> 2] | 0;
       do {
        if ((i107 | 0) != 0) {
         i89 = i107 + 8 | 0;
         i116 = i89 | 0;
         i96 = (HEAP32[i116 >> 2] | 0) - 1 | 0;
         HEAP32[i116 >> 2] = i96;
         if ((i96 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i89 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i89 - 8 | 0);
        }
       } while (0);
       i107 = i38 | 0;
       HEAP32[i107 >> 2] = i104;
       i95 = (i104 | 0) == 0;
       if (!i95) {
        i89 = i104 + 8 | 0;
        HEAP32[i89 >> 2] = (HEAP32[i89 >> 2] | 0) + 1;
       }
       i89 = i39 | 0;
       HEAP32[i89 >> 2] = i138;
       if ((i138 | 0) != 0) {
        i96 = i138 + 8 | 0;
        HEAP32[i96 >> 2] = (HEAP32[i96 >> 2] | 0) + 1;
       }
       __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i7, i38, i39, 1);
       i96 = HEAP32[i89 >> 2] | 0;
       do {
        if ((i96 | 0) != 0) {
         i89 = i96 + 8 | 0;
         i116 = i89 | 0;
         i119 = (HEAP32[i116 >> 2] | 0) - 1 | 0;
         HEAP32[i116 >> 2] = i119;
         if ((i119 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i89 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i89 - 8 | 0);
        }
       } while (0);
       i96 = HEAP32[i107 >> 2] | 0;
       do {
        if ((i96 | 0) != 0) {
         i89 = i96 + 8 | 0;
         i119 = i89 | 0;
         i116 = (HEAP32[i119 >> 2] | 0) - 1 | 0;
         HEAP32[i119 >> 2] = i116;
         if ((i116 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i89 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i89 - 8 | 0);
        }
       } while (0);
       i96 = i40 | 0;
       HEAP32[i96 >> 2] = 0;
       i107 = i40 + 4 | 0;
       HEAP32[i107 >> 2] = 0;
       i89 = i40 + 8 | 0;
       HEAP32[i89 >> 2] = 0;
       __ZN7WebCore20CompositeEditCommand22positionOutsideTabSpanERKNS_8PositionE(i42, i7, i6);
       __ZN7WebCore20CompositeEditCommand38positionAvoidingSpecialElementBoundaryERKNS_8PositionE(i41, i7, i42);
       i116 = i41 | 0;
       __ZN7WebCore31InsertParagraphSeparatorCommand23getAncestorsInsideBlockEPKNS_4NodeEPNS_7ElementERN3WTF6VectorINS6_6RefPtrIS4_EELj0ENS6_15CrashOnOverflowEEE(0, HEAP32[i116 >> 2] | 0, i91, i40);
       i119 = HEAP32[i116 >> 2] | 0;
       do {
        if ((i119 | 0) != 0) {
         i116 = i119 + 8 | 0;
         i105 = i116 | 0;
         i115 = (HEAP32[i105 >> 2] | 0) - 1 | 0;
         HEAP32[i105 >> 2] = i115;
         if ((i115 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i116 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i116 - 8 | 0);
        }
       } while (0);
       i119 = HEAP32[i42 >> 2] | 0;
       do {
        if ((i119 | 0) != 0) {
         i116 = i119 + 8 | 0;
         i115 = i116 | 0;
         i105 = (HEAP32[i115 >> 2] | 0) - 1 | 0;
         HEAP32[i115 >> 2] = i105;
         if ((i105 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i116 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i116 - 8 | 0);
        }
       } while (0);
       i119 = i45 | 0;
       HEAP32[i119 >> 2] = i104;
       if (!i95) {
        i116 = i104 + 8 | 0;
        HEAP32[i116 >> 2] = (HEAP32[i116 >> 2] | 0) + 1;
       }
       __ZN7WebCore31InsertParagraphSeparatorCommand27cloneHierarchyUnderNewBlockERKN3WTF6VectorINS1_6RefPtrINS_7ElementEEELj0ENS1_15CrashOnOverflowEEENS1_10PassRefPtrIS4_EE(i44, i1, i40, i45);
       __ZN7WebCore20CompositeEditCommand22appendBlockPlaceholderEN3WTF10PassRefPtrINS_7ElementEEE(i43, i7, i44);
       i116 = HEAP32[i43 >> 2] | 0;
       do {
        if ((i116 | 0) != 0) {
         i105 = i116 + 8 | 0;
         i115 = i105 | 0;
         i106 = (HEAP32[i115 >> 2] | 0) - 1 | 0;
         HEAP32[i115 >> 2] = i106;
         if ((i106 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i105 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i105 - 8 | 0);
        }
       } while (0);
       i116 = HEAP32[i44 >> 2] | 0;
       do {
        if ((i116 | 0) != 0) {
         i95 = i116 + 8 | 0;
         i105 = i95 | 0;
         i106 = (HEAP32[i105 >> 2] | 0) - 1 | 0;
         HEAP32[i105 >> 2] = i106;
         if ((i106 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i95 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i95 - 8 | 0);
        }
       } while (0);
       i116 = HEAP32[i119 >> 2] | 0;
       do {
        if ((i116 | 0) != 0) {
         i95 = i116 + 8 | 0;
         i106 = i95 | 0;
         i105 = (HEAP32[i106 >> 2] | 0) - 1 | 0;
         HEAP32[i106 >> 2] = i105;
         if ((i105 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i95 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i95 - 8 | 0);
        }
       } while (0);
       __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb(i46, i6, 1, (HEAP8[i1 + 128 | 0] & 2) != 0);
       __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i82, i46);
       __ZN7WebCore16VisibleSelectionD2Ev(i46);
       i116 = HEAP32[i89 >> 2] | 0;
       i119 = HEAP32[i96 >> 2] | 0;
       if ((i116 | 0) != 0) {
        i95 = i119 + (i116 << 2) | 0;
        i116 = i119;
        while (1) {
         i105 = HEAP32[i116 >> 2] | 0;
         do {
          if ((i105 | 0) != 0) {
           i106 = i105 + 8 | 0;
           i115 = i106 | 0;
           i117 = (HEAP32[i115 >> 2] | 0) - 1 | 0;
           HEAP32[i115 >> 2] = i117;
           if ((i117 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i106 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i106 - 8 | 0);
          }
         } while (0);
         i116 = i116 + 4 | 0;
         if ((i116 | 0) == (i95 | 0)) {
          break;
         }
        }
        HEAP32[i89 >> 2] = 0;
       }
       if ((i119 | 0) == 0) {
        i118 = i91;
        break;
       }
       HEAP32[i96 >> 2] = 0;
       HEAP32[i107 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i119);
       i118 = i91;
      }
     } while (0);
     if ((i104 | 0) == 0) {
      i102 = i118;
      break;
     }
     i86 = i104 + 8 | 0;
     i88 = i86 | 0;
     i95 = (HEAP32[i88 >> 2] | 0) - 1 | 0;
     HEAP32[i88 >> 2] = i95;
     if ((i95 | 0) >= 1) {
      i102 = i118;
      break;
     }
     if ((HEAP32[i86 + 8 >> 2] | 0) != 0) {
      i102 = i118;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i86 - 8 | 0);
     i102 = i118;
    }
   } while (0);
   i7 = HEAP32[i14 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i140 = i102;
    break;
   }
   i98 = i7 + 8 | 0;
   i7 = i98 | 0;
   i86 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i86;
   if ((i86 | 0) >= 1) {
    i140 = i102;
    break;
   }
   if ((HEAP32[i98 + 8 >> 2] | 0) != 0) {
    i140 = i102;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i98 - 8 | 0);
   i140 = i102;
  }
 } while (0);
 do {
  if ((i87 | 0) == 57) {
   i102 = HEAP32[i1 + 8 >> 2] | 0;
   i14 = __ZN3WTF10fastMallocEj(152) | 0;
   __ZN7WebCore22InsertLineBreakCommandC1ERNS_8DocumentE(i14, i102);
   i102 = i10 | 0;
   HEAP32[i102 >> 2] = i14;
   __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1 | 0, i10);
   i14 = HEAP32[i102 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i140 = i91;
    break;
   }
   i102 = i14 + 4 | 0;
   i14 = i102 | 0;
   i118 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i118 | 0) != 0) {
    HEAP32[i14 >> 2] = i118;
    i140 = i91;
    break;
   }
   i118 = i102 - 4 | 0;
   if ((i118 | 0) == 0) {
    i140 = i91;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i118 >> 2] | 0) + 4 >> 2] & 7](i118);
   i140 = i91;
  }
 } while (0);
 i91 = HEAP32[i90 >> 2] | 0;
 do {
  if ((i91 | 0) != 0) {
   i90 = i91 + 8 | 0;
   i10 = i90 | 0;
   i1 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i90 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i90 - 8 | 0);
  }
 } while (0);
 do {
  if ((i140 | 0) != 0) {
   i91 = i140 + 8 | 0;
   i90 = i91 | 0;
   i1 = (HEAP32[i90 >> 2] | 0) - 1 | 0;
   HEAP32[i90 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i91 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i91 - 8 | 0);
  }
 } while (0);
 i140 = HEAP32[i97 >> 2] | 0;
 if ((i140 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i97 = i140 + 8 | 0;
 i140 = i97 | 0;
 i91 = (HEAP32[i140 >> 2] | 0) - 1 | 0;
 HEAP32[i140 >> 2] = i91;
 if ((i91 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i97 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i97 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore31InsertParagraphSeparatorCommand24applyStyleAfterInsertionEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = (HEAP32[i2 + 12 >> 2] & 4 | 0) == 0;
 do {
  if (!i5) {
   i6 = HEAP32[i2 + 44 >> 2] | 0;
   i7 = HEAP32[__ZN7WebCore9HTMLNames5h1TagE >> 2] | 0;
   if ((i6 | 0) == (i7 | 0)) {
    STACKTOP = i3;
    return;
   }
   do {
    if ((HEAP32[i6 + 12 >> 2] | 0) == (HEAP32[i7 + 12 >> 2] | 0)) {
     if ((HEAP32[i6 + 16 >> 2] | 0) != (HEAP32[i7 + 16 >> 2] | 0)) {
      break;
     }
     STACKTOP = i3;
     return;
    }
   } while (0);
   if (i5) {
    break;
   }
   i7 = HEAP32[i2 + 44 >> 2] | 0;
   i6 = HEAP32[__ZN7WebCore9HTMLNames5h2TagE >> 2] | 0;
   if ((i7 | 0) == (i6 | 0)) {
    STACKTOP = i3;
    return;
   }
   do {
    if ((HEAP32[i7 + 12 >> 2] | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
     if ((HEAP32[i7 + 16 >> 2] | 0) != (HEAP32[i6 + 16 >> 2] | 0)) {
      break;
     }
     STACKTOP = i3;
     return;
    }
   } while (0);
   if (i5) {
    break;
   }
   i6 = HEAP32[i2 + 44 >> 2] | 0;
   i7 = HEAP32[__ZN7WebCore9HTMLNames5h3TagE >> 2] | 0;
   if ((i6 | 0) == (i7 | 0)) {
    STACKTOP = i3;
    return;
   }
   do {
    if ((HEAP32[i6 + 12 >> 2] | 0) == (HEAP32[i7 + 12 >> 2] | 0)) {
     if ((HEAP32[i6 + 16 >> 2] | 0) != (HEAP32[i7 + 16 >> 2] | 0)) {
      break;
     }
     STACKTOP = i3;
     return;
    }
   } while (0);
   if (i5) {
    break;
   }
   i7 = HEAP32[i2 + 44 >> 2] | 0;
   i6 = HEAP32[__ZN7WebCore9HTMLNames5h4TagE >> 2] | 0;
   if ((i7 | 0) == (i6 | 0)) {
    STACKTOP = i3;
    return;
   }
   do {
    if ((HEAP32[i7 + 12 >> 2] | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
     if ((HEAP32[i7 + 16 >> 2] | 0) != (HEAP32[i6 + 16 >> 2] | 0)) {
      break;
     }
     STACKTOP = i3;
     return;
    }
   } while (0);
   if (i5) {
    break;
   }
   i6 = HEAP32[i2 + 44 >> 2] | 0;
   i7 = HEAP32[__ZN7WebCore9HTMLNames5h5TagE >> 2] | 0;
   if ((i6 | 0) == (i7 | 0)) {
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[i6 + 12 >> 2] | 0) != (HEAP32[i7 + 12 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i6 + 16 >> 2] | 0) != (HEAP32[i7 + 16 >> 2] | 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i2 = i1 + 152 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 i6 = HEAP32[i1 + 96 >> 2] | 0;
 HEAP32[i7 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i8 = i4 + 8 | 0;
  i9 = 0;
  i10 = i8;
  i11 = i8;
 } else {
  i8 = i6 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i8 = i4 + 8 | 0;
  i6 = i8;
  i9 = HEAP32[i6 >> 2] & -8;
  i10 = i8;
  i11 = i6;
 }
 HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 100 >> 2];
 i6 = HEAP32[i1 + 104 >> 2] | 0;
 i8 = i9 | i6 & 7;
 HEAP32[i11 >> 2] = i8;
 HEAP8[i10] = i8 & 255 & -9 | i6 & 8;
 __ZN7WebCore12EditingStyle16prepareToApplyAtERKNS_8PositionENS0_30ShouldPreserveWritingDirectionE(i5, i4, 1);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 8 | 0;
   i5 = i7 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 if (__ZNK7WebCore12EditingStyle7isEmptyEv(HEAP32[i2 >> 2] | 0) | 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore20CompositeEditCommand10applyStyleEPKNS_12EditingStyleENS_10EditActionE(i1 | 0, HEAP32[i2 >> 2] | 0, 14);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore31InsertParagraphSeparatorCommand32shouldUseDefaultParagraphElementEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 if ((HEAP8[i1 + 156 | 0] & 1) != 0) {
  i5 = 1;
  STACKTOP = i3;
  return i5 | 0;
 }
 if ((HEAP32[i1 + 124 >> 2] | 0) == 2) {
  i6 = 1;
 } else {
  i6 = HEAP32[i1 + 120 >> 2] | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i1 + 96 | 0, i6);
 i6 = __ZN7WebCore12isEndOfBlockERKNS_15VisiblePositionE(i4) | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 + 8 | 0;
   i7 = i4 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 if (!i6) {
  i5 = 0;
  STACKTOP = i3;
  return i5 | 0;
 }
 i6 = (HEAP32[i2 + 12 >> 2] & 4 | 0) == 0;
 if (i6) {
  i5 = 0;
  STACKTOP = i3;
  return i5 | 0;
 }
 i1 = HEAP32[i2 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames5h1TagE >> 2] | 0;
 if ((i1 | 0) == (i4 | 0)) {
  i5 = 1;
  STACKTOP = i3;
  return i5 | 0;
 }
 do {
  if ((HEAP32[i1 + 12 >> 2] | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
   i8 = (HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0);
   if (i8 | i6) {
    i5 = i8;
   } else {
    break;
   }
   STACKTOP = i3;
   return i5 | 0;
  } else {
   if (i6) {
    i5 = 0;
   } else {
    break;
   }
   STACKTOP = i3;
   return i5 | 0;
  }
 } while (0);
 i4 = HEAP32[i2 + 44 >> 2] | 0;
 i1 = HEAP32[__ZN7WebCore9HTMLNames5h2TagE >> 2] | 0;
 if ((i4 | 0) == (i1 | 0)) {
  i5 = 1;
  STACKTOP = i3;
  return i5 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
   i8 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0);
   if (i8 | i6) {
    i5 = i8;
   } else {
    break;
   }
   STACKTOP = i3;
   return i5 | 0;
  } else {
   if (i6) {
    i5 = 0;
   } else {
    break;
   }
   STACKTOP = i3;
   return i5 | 0;
  }
 } while (0);
 i1 = HEAP32[i2 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames5h3TagE >> 2] | 0;
 if ((i1 | 0) == (i4 | 0)) {
  i5 = 1;
  STACKTOP = i3;
  return i5 | 0;
 }
 do {
  if ((HEAP32[i1 + 12 >> 2] | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
   i8 = (HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0);
   if (i8 | i6) {
    i5 = i8;
   } else {
    break;
   }
   STACKTOP = i3;
   return i5 | 0;
  } else {
   if (i6) {
    i5 = 0;
   } else {
    break;
   }
   STACKTOP = i3;
   return i5 | 0;
  }
 } while (0);
 i4 = HEAP32[i2 + 44 >> 2] | 0;
 i1 = HEAP32[__ZN7WebCore9HTMLNames5h4TagE >> 2] | 0;
 if ((i4 | 0) == (i1 | 0)) {
  i5 = 1;
  STACKTOP = i3;
  return i5 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
   i8 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0);
   if (i8 | i6) {
    i5 = i8;
   } else {
    break;
   }
   STACKTOP = i3;
   return i5 | 0;
  } else {
   if (i6) {
    i5 = 0;
   } else {
    break;
   }
   STACKTOP = i3;
   return i5 | 0;
  }
 } while (0);
 i6 = HEAP32[i2 + 44 >> 2] | 0;
 i2 = HEAP32[__ZN7WebCore9HTMLNames5h5TagE >> 2] | 0;
 if ((i6 | 0) == (i2 | 0)) {
  i5 = 1;
  STACKTOP = i3;
  return i5 | 0;
 }
 if ((HEAP32[i6 + 12 >> 2] | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
  i5 = 0;
  STACKTOP = i3;
  return i5 | 0;
 }
 i5 = (HEAP32[i6 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0);
 STACKTOP = i3;
 return i5 | 0;
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
function __ZN7WebCore31InsertParagraphSeparatorCommand27cloneHierarchyUnderNewBlockERKN3WTF6VectorINS1_6RefPtrINS_7ElementEEELj0ENS1_15CrashOnOverflowEEENS1_10PassRefPtrIS4_EE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i4 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i3 + 8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = i4;
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = i11;
  STACKTOP = i5;
  return;
 }
 i13 = i3 | 0;
 i3 = i6 | 0;
 i14 = i2 | 0;
 i2 = i7 | 0;
 i15 = i8 | 0;
 i16 = i4;
 i4 = i10;
 i17 = i10;
 while (1) {
  i10 = i4 - 1 | 0;
  if (i17 >>> 0 <= i10 >>> 0) {
   i18 = 4;
   break;
  }
  __ZN7WebCore7Element27cloneElementWithoutChildrenEv(i6, HEAP32[(HEAP32[i13 >> 2] | 0) + (i10 << 2) >> 2] | 0);
  i19 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  __ZN7WebCore7Element15removeAttributeERKNS_13QualifiedNameE(i19, __ZN7WebCore9HTMLNames6idAttrE);
  HEAP32[i2 >> 2] = i19;
  if ((i19 | 0) != 0) {
   i20 = i19 + 8 | 0;
   HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
  }
  HEAP32[i15 >> 2] = i16;
  i20 = (i16 | 0) == 0;
  if (!i20) {
   i21 = i16 + 8 | 0;
   HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
  }
  __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i14, i7, i8);
  i21 = HEAP32[i15 >> 2] | 0;
  do {
   if ((i21 | 0) != 0) {
    i22 = i21 + 8 | 0;
    i23 = i22 | 0;
    i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
    HEAP32[i23 >> 2] = i24;
    if ((i24 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
   }
  } while (0);
  i21 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i21 | 0) != 0) {
    i22 = i21 + 8 | 0;
    i24 = i22 | 0;
    i23 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
    HEAP32[i24 >> 2] = i23;
    if ((i23 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
   }
  } while (0);
  do {
   if (!i20) {
    i21 = i16 + 8 | 0;
    i22 = i21 | 0;
    i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
    HEAP32[i22 >> 2] = i23;
    if ((i23 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
   }
  } while (0);
  if ((i10 | 0) == 0) {
   i11 = i19;
   i18 = 25;
   break;
  }
  i16 = i19;
  i4 = i10;
  i17 = HEAP32[i9 >> 2] | 0;
 }
 if ((i18 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i18 | 0) == 25) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = i11;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore31InsertParagraphSeparatorCommand23getAncestorsInsideBlockEPKNS_4NodeEPNS_7ElementERN3WTF6VectorINS6_6RefPtrIS4_EELj0ENS6_15CrashOnOverflowEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i1 = i4 + 4 | 0;
 do {
  if ((HEAP32[i1 >> 2] | 0) != 0) {
   i5 = i4 + 8 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i4 | 0;
   if ((i6 | 0) != 0) {
    i8 = HEAP32[i7 >> 2] | 0;
    i9 = i8 + (i6 << 2) | 0;
    i6 = i8;
    while (1) {
     i8 = HEAP32[i6 >> 2] | 0;
     do {
      if ((i8 | 0) != 0) {
       i10 = i8 + 8 | 0;
       i11 = i10 | 0;
       i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
       HEAP32[i11 >> 2] = i12;
       if ((i12 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
      }
     } while (0);
     i6 = i6 + 4 | 0;
     if ((i6 | 0) == (i9 | 0)) {
      break;
     }
    }
    HEAP32[i5 >> 2] = 0;
   }
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   HEAP32[i7 >> 2] = 0;
   HEAP32[i1 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i9);
  }
 } while (0);
 if ((i3 | 0) == (i2 | 0)) {
  return;
 }
 i9 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i9 | 0) == 0) {
  return;
 }
 if ((HEAP32[i9 + 12 >> 2] & 4 | 0) == 0) {
  return;
 }
 i2 = i9;
 if ((i9 | 0) == 0 | (i2 | 0) == (i3 | 0)) {
  return;
 }
 i9 = i4 + 8 | 0;
 i6 = i4 | 0;
 i8 = i2;
 i2 = HEAP32[i9 >> 2] | 0;
 while (1) {
  if ((i2 | 0) == (HEAP32[i1 >> 2] | 0)) {
   __ZN3WTF6VectorINS_6RefPtrIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i2 + 1 | 0);
   HEAP32[(HEAP32[i6 >> 2] | 0) + (HEAP32[i9 >> 2] << 2) >> 2] = i8;
   i10 = i8 + 8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  } else {
   HEAP32[(HEAP32[i6 >> 2] | 0) + (i2 << 2) >> 2] = i8;
   i10 = i8 + 8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  }
  i10 = (HEAP32[i9 >> 2] | 0) + 1 | 0;
  HEAP32[i9 >> 2] = i10;
  i12 = HEAP32[i8 + 16 >> 2] | 0;
  if ((i12 | 0) == 0) {
   i13 = 29;
   break;
  }
  if ((HEAP32[i12 + 12 >> 2] & 4 | 0) == 0) {
   i13 = 28;
   break;
  }
  i11 = i12;
  if ((i12 | 0) == 0 | (i11 | 0) == (i3 | 0)) {
   i13 = 30;
   break;
  } else {
   i8 = i11;
   i2 = i10;
  }
 }
 if ((i13 | 0) == 28) {
  return;
 } else if ((i13 | 0) == 29) {
  return;
 } else if ((i13 | 0) == 30) {
  return;
 }
}
function __ZN7WebCore31InsertParagraphSeparatorCommand29calculateStyleBeforeInsertionERKNS_8PositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i2, 1);
 if (__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i4, 1) | 0) {
  i5 = 3;
 } else {
  if (__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i4, 1) | 0) {
   i5 = 3;
  }
 }
 if ((i5 | 0) == 3) {
  i5 = __ZN3WTF10fastMallocEj(16) | 0;
  __ZN7WebCore12EditingStyleC1ERKNS_8PositionENS0_19PropertiesToIncludeE(i5, i2, 2);
  i6 = i1 + 152 | 0;
  i1 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = i5;
  do {
   if ((i1 | 0) != 0) {
    i5 = i1 | 0;
    i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
    if ((i7 | 0) == 0) {
     __ZN7WebCore12EditingStyleD1Ev(i1);
     __ZN3WTF8fastFreeEPv(i1);
     break;
    } else {
     HEAP32[i5 >> 2] = i7;
     break;
    }
   }
  } while (0);
  __ZN7WebCore12EditingStyle16mergeTypingStyleERNS_8DocumentE(HEAP32[i6 >> 2] | 0, HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0);
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 + 8 | 0;
 i2 = i4 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i6 | 0) >= 1) {
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
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_viiii + 4;
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
function __ZN7WebCore31InsertParagraphSeparatorCommandD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 152 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore20CompositeEditCommandD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore31InsertParagraphSeparatorCommandD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 152 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore20CompositeEditCommandD2Ev(i1 | 0);
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
function __ZN7WebCore31InsertParagraphSeparatorCommandC2ERNS_8DocumentEbb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 152 >> 2] = 0;
 HEAP8[i1 + 156 | 0] = i3 & 1;
 HEAP8[i1 + 157 | 0] = i4 & 1;
 return;
}
function __ZN7WebCore31InsertParagraphSeparatorCommandC1ERNS_8DocumentEbb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 152 >> 2] = 0;
 HEAP8[i1 + 156 | 0] = i3 & 1;
 HEAP8[i1 + 157 | 0] = i4 & 1;
 return;
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
function __ZNK7WebCore31InsertParagraphSeparatorCommand20preservesTypingStyleEv(i1) {
 i1 = i1 | 0;
 return 1;
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore31InsertParagraphSeparatorCommandD0Ev,b0,__ZN7WebCore31InsertParagraphSeparatorCommandD1Ev,b0,__ZN7WebCore31InsertParagraphSeparatorCommand7doApplyEv,b0];
  var FUNCTION_TABLE_vii = [b1,b1,vii___ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb__wrapper,b1];
  var FUNCTION_TABLE_ii = [b2,b2,ii___ZNK7WebCore11EditCommand13editingActionEv__wrapper,b2,__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv,b2,ii___ZNK7WebCore20CompositeEditCommand15isTypingCommandEv__wrapper,b2,ii___ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv__wrapper,b2,ii___ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv__wrapper,b2,ii___ZN7WebCore16isMailBlockquoteEPKNS_4NodeE__wrapper,b2,__ZNK7WebCore31InsertParagraphSeparatorCommand20preservesTypingStyleEv,b2,__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv,b2,__ZNK7WebCore11EditCommand24isEditCommandCompositionEv,b2,__ZNK7WebCore11EditCommand19isSimpleEditCommandEv,b2,__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,viii___ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE__wrapper,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6,__ZN7WebCore31InsertParagraphSeparatorCommandC2ERNS_8DocumentEbb,b6,viiii___ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj__wrapper,b6,b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames5h2TagE": __ZN7WebCore9HTMLNames5h2TagE, "__ZN7WebCore9HTMLNames5h5TagE": __ZN7WebCore9HTMLNames5h5TagE, "__ZN7WebCore9HTMLNames5h1TagE": __ZN7WebCore9HTMLNames5h1TagE, "__ZN7WebCore9HTMLNames7formTagE": __ZN7WebCore9HTMLNames7formTagE, "__ZN7WebCore9HTMLNames5h3TagE": __ZN7WebCore9HTMLNames5h3TagE, "__ZN7WebCore9HTMLNames6divTagE": __ZN7WebCore9HTMLNames6divTagE, "__ZN7WebCore9HTMLNames5hrTagE": __ZN7WebCore9HTMLNames5hrTagE, "__ZN7WebCore9HTMLNames6idAttrE": __ZN7WebCore9HTMLNames6idAttrE, "__ZN7WebCore9HTMLNames5h4TagE": __ZN7WebCore9HTMLNames5h4TagE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv","__ZN7WebCore31InsertParagraphSeparatorCommand23getAncestorsInsideBlockEPKNS_4NodeEPNS_7ElementERN3WTF6VectorINS6_6RefPtrIS4_EELj0ENS6_15CrashOnOverflowEEE","__ZN7WebCore31InsertParagraphSeparatorCommand24applyStyleAfterInsertionEPNS_4NodeE","__ZNK7WebCore31InsertParagraphSeparatorCommand32shouldUseDefaultParagraphElementEPNS_4NodeE","_memset","__ZNK7WebCore31InsertParagraphSeparatorCommand20preservesTypingStyleEv","_memcpy","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv","__ZN7WebCore31InsertParagraphSeparatorCommand27cloneHierarchyUnderNewBlockERKN3WTF6VectorINS1_6RefPtrINS_7ElementEEELj0ENS1_15CrashOnOverflowEEENS1_10PassRefPtrIS4_EE","__ZN7WebCore31InsertParagraphSeparatorCommandC2ERNS_8DocumentEbb","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF6VectorINS_6RefPtrIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCoreeqERKNS_15VisiblePositionES2_","__ZN7WebCore16VisibleSelectionD2Ev","__ZN7WebCore31InsertParagraphSeparatorCommandD0Ev","__ZN7WebCore31InsertParagraphSeparatorCommand7doApplyEv","__ZNK7WebCore11EditCommand24isEditCommandCompositionEv","__ZNK7WebCore11EditCommand19isSimpleEditCommandEv","__ZN7WebCore31InsertParagraphSeparatorCommandD1Ev","__ZN7WebCore31InsertParagraphSeparatorCommand29calculateStyleBeforeInsertionERKNS_8PositionE","__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv"]

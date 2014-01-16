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
var __ZN7WebCore11LayoutStateC1ENSt3__110unique_ptrIS0_NS1_14default_deleteIS0_EEEEPNS_9RenderBoxERKNS_10LayoutSizeENS_10LayoutUnitEbPNS_10ColumnInfoE;
var __ZN7WebCore11LayoutStateC1ERNS_12RenderObjectE;
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
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
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
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore11LayoutStateC2ENSt3__110unique_ptrIS0_NS1_14default_deleteIS0_EEEEPNS_9RenderBoxERKNS_10LayoutSizeENS_10LayoutUnitEbPNS_10ColumnInfoE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, d44 = +0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i9 = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i5 >> 2] = HEAP32[i9 >> 2];
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i12 | 0;
 i14 = i12;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = i15;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i22 = i1 + 4 | 0;
 HEAP32[i22 >> 2] = i7;
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 i23 = i2 | 0;
 i2 = HEAP32[i23 >> 2] | 0;
 HEAP32[i23 >> 2] = 0;
 i23 = i1 + 12 | 0;
 HEAP32[i23 >> 2] = i2;
 i24 = i1 + 16 | 0;
 i25 = i1 + 20 | 0;
 i26 = i25;
 i27 = i1 + 36 | 0;
 i28 = i27 | 0;
 i29 = i1 + 40 | 0;
 i30 = i1 + 44 | 0;
 i31 = i30 | 0;
 i32 = i1 + 48 | 0;
 i33 = i1 + 52 | 0;
 i34 = i1 + 60 | 0;
 i35 = i1 + 64 | 0;
 i36 = i1 + 68 | 0;
 i37 = i1 + 72 | 0;
 i38 = i1 + 80 | 0;
 i39 = i1 + 84 | 0;
 i40 = i3 | 0;
 i41 = i3 + 20 | 0;
 _memset(i24 | 0, 0, 72) | 0;
 do {
  if ((HEAP32[i41 >> 2] & 25165824 | 0) == 16777216) {
   if ((HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 48 >> 2] & 29360128 | 0) != 25165824) {
    i42 = 10;
    break;
   }
   i43 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
   HEAPF32[i10 >> 2] = +0;
   HEAPF32[i10 + 4 >> 2] = +0;
   __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i9, i43, i10, 1);
   d44 = +HEAPF32[i9 >> 2];
   do {
    if (d44 < +2147483647) {
     if (d44 <= +-2147483648) {
      i45 = -2147483648;
      break;
     }
     i45 = ~~d44;
    } else {
     i45 = 2147483647;
    }
   } while (0);
   d44 = +HEAPF32[i9 + 4 >> 2];
   do {
    if (d44 < +2147483647) {
     if (d44 <= +-2147483648) {
      i46 = -2147483648;
      break;
     }
     i46 = ~~d44;
    } else {
     i46 = 2147483647;
    }
   } while (0);
   i43 = i27;
   i47 = (HEAP32[i4 + 4 >> 2] | 0) + i46 | 0;
   HEAP32[i43 >> 2] = (HEAP32[i4 >> 2] | 0) + i45;
   HEAP32[i43 + 4 >> 2] = i47;
   i48 = 1;
  } else {
   i42 = 10;
  }
 } while (0);
 do {
  if ((i42 | 0) == 10) {
   i45 = i27;
   i46 = (HEAP32[i4 + 4 >> 2] | 0) + (HEAP32[i2 + 40 >> 2] | 0) | 0;
   HEAP32[i45 >> 2] = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 36 >> 2] | 0);
   HEAP32[i45 + 4 >> 2] = i46;
   if ((HEAP32[i41 >> 2] & 25165824 | 0) != 16777216) {
    i48 = 0;
    break;
   }
   i46 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i40, 0, 0) | 0;
   if ((i46 | 0) == 0) {
    i48 = 0;
    break;
   }
   i45 = HEAP32[i46 + 20 >> 2] & 25165824;
   if (!((i45 | 0) == 25165824 | (i45 | 0) == 8388608)) {
    i48 = 0;
    break;
   }
   if ((HEAP32[i46 + 24 >> 2] & 4 | 0) == 0) {
    i48 = 0;
    break;
   }
   __ZNK7WebCore12RenderInline31offsetForInFlowPositionedInlineEPKNS_9RenderBoxE(i11, i46, i3);
   HEAP32[i28 >> 2] = (HEAP32[i11 >> 2] | 0) + (HEAP32[i28 >> 2] | 0);
   HEAP32[i29 >> 2] = (HEAP32[i11 + 4 >> 2] | 0) + (HEAP32[i29 >> 2] | 0);
   i48 = 0;
  }
 } while (0);
 i11 = i27;
 i27 = i30;
 i30 = HEAP32[i11 >> 2] | 0;
 i2 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i27 >> 2] = i30;
 HEAP32[i27 + 4 >> 2] = i2;
 i2 = HEAP32[i41 >> 2] | 0;
 i11 = i2 & 25165824;
 i4 = i30;
 do {
  if ((i11 | 0) == 25165824 | (i11 | 0) == 8388608) {
   if ((i2 & 32768 | 0) == 0) {
    i49 = i4;
    break;
   }
   i30 = HEAP32[i3 + 40 >> 2] | 0;
   i46 = (HEAP32[i30 + 88 >> 2] | 0) + i4 | 0;
   HEAP32[i28 >> 2] = i46;
   HEAP32[i29 >> 2] = (HEAP32[i30 + 92 >> 2] | 0) + (HEAP32[i29 >> 2] | 0);
   i49 = i46;
  } else {
   i49 = i4;
  }
 } while (0);
 do {
  if (i48) {
   i4 = i1 | 0;
   HEAP8[i4] = HEAP8[i4] & -2;
   i50 = i4;
  } else {
   i4 = HEAP32[i23 >> 2] | 0;
   i2 = HEAP8[i4 | 0] & 1;
   i11 = i1 | 0;
   HEAP8[i11] = HEAP8[i11] & -2 | i2;
   if (i2 << 24 >> 24 == 0) {
    i50 = i11;
    break;
   }
   i2 = i4 + 20 | 0;
   HEAP32[i26 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i26 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
   HEAP32[i26 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
   HEAP32[i26 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
   i50 = i11;
  }
 } while (0);
 if ((HEAP32[i41 >> 2] & 65536 | 0) != 0) {
  i48 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
  if ((i48 | 0) == 0) {
   i51 = 0;
   i52 = 0;
  } else {
   i11 = i48 + 52 | 0;
   i51 = HEAP32[i11 >> 2] | 0;
   i52 = HEAP32[i11 + 4 >> 2] | 0;
  }
  i11 = i52 + (HEAP32[i29 >> 2] | 0) | 0;
  __ZNK7WebCore9RenderBox25cachedSizeForOverflowClipEv(i16, i3);
  HEAP32[i13 >> 2] = i51 + i49;
  HEAP32[i13 + 4 >> 2] = i11;
  i11 = i12 + 8 | 0;
  i13 = HEAP32[i15 + 4 >> 2] | 0;
  HEAP32[i11 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i11 + 4 >> 2] = i13;
  i13 = HEAP8[i50] | 0;
  if ((i13 & 1) == 0) {
   i11 = i12;
   HEAP32[i26 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i26 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
   HEAP32[i26 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
   HEAP32[i26 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
   HEAP8[i50] = i13 | 1;
  } else {
   __ZN7WebCore10LayoutRect9intersectERKS0_(i25, i14);
  }
  __ZNK7WebCore9RenderBox21scrolledContentOffsetEv(i17, i3);
  i14 = HEAP32[i17 + 4 >> 2] | 0;
  HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) - (HEAP32[i17 >> 2] | 0);
  HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) - i14;
 }
 i14 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   if ((HEAP32[i22 >> 2] | 0) != 0) {
    i42 = 32;
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 248 >> 2] & 1](i40) | 0) {
    i42 = 32;
    break;
   }
   i5 = HEAP32[i23 >> 2] | 0;
   HEAP32[i34 >> 2] = HEAP32[i5 + 60 >> 2];
   HEAP8[i50] = HEAP8[i50] & -5 | HEAP8[i5 | 0] & 4;
   i29 = i5 + 64 | 0;
   i5 = i35;
   i17 = HEAP32[i29 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i29 >> 2];
   HEAP32[i5 + 4 >> 2] = i17;
   if (!(__ZNK7WebCore9RenderBox27isUnsplittableForPaginationEv(i3) | 0)) {
    break;
   }
   HEAP32[i34 >> 2] = 0;
  } else {
   i42 = 32;
  }
 } while (0);
 if ((i42 | 0) == 32) {
  HEAP32[i34 >> 2] = i14;
  i14 = (HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  i42 = HEAP32[i31 >> 2] | 0;
  i31 = i3 | 0;
  i17 = i3;
  i5 = HEAP32[i17 >> 2] | 0;
  if ((i14 | 0) == 3 | (i14 | 0) == 1) {
   i14 = FUNCTION_TABLE_ii[HEAP32[i5 + 748 >> 2] & 1](i31) | 0;
   i29 = i3;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i29 >> 2] | 0) + 716 >> 2] & 3](i19, i31);
   i28 = (HEAP32[i19 >> 2] | 0) + i14 | 0;
   i14 = HEAP32[i32 >> 2] | 0;
   i19 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 740 >> 2] & 1](i31) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i29 >> 2] | 0) + 708 >> 2] & 3](i21, i31);
   i53 = (HEAP32[i21 >> 2] | 0) + i19 | 0;
   i54 = i28;
   i55 = i14;
  } else {
   i14 = FUNCTION_TABLE_ii[HEAP32[i5 + 744 >> 2] & 1](i31) | 0;
   i5 = i3;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 712 >> 2] & 3](i18, i31);
   i28 = (HEAP32[i18 >> 2] | 0) + i14 | 0;
   i14 = HEAP32[i32 >> 2] | 0;
   i32 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 736 >> 2] & 1](i31) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 704 >> 2] & 3](i20, i31);
   i53 = (HEAP32[i20 >> 2] | 0) + i32 | 0;
   i54 = i28;
   i55 = i14;
  }
  i14 = i35;
  HEAP32[i14 >> 2] = i54 + i42;
  HEAP32[i14 + 4 >> 2] = i53 + i55;
  HEAP8[i50] = HEAP8[i50] & -5 | (i6 & 1) << 2;
 }
 do {
  if ((HEAP32[i23 >> 2] | 0) != 0) {
   if (__ZNK7WebCore9RenderBox27isUnsplittableForPaginationEv(i3) | 0) {
    break;
   }
   i6 = HEAP32[i23 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i6 + 8 >> 2];
   i55 = i6 + 72 | 0;
   i53 = i37;
   i14 = HEAP32[i55 + 4 >> 2] | 0;
   HEAP32[i53 >> 2] = HEAP32[i55 >> 2];
   HEAP32[i53 + 4 >> 2] = i14;
   i14 = i6 + 80 | 0;
   i6 = i38;
   i53 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i6 + 4 >> 2] = i53;
  }
 } while (0);
 if ((HEAP32[i22 >> 2] | 0) == 0) {
  HEAP32[i22 >> 2] = HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2];
 }
 i38 = i3 + 24 | 0;
 do {
  if ((HEAP32[i38 >> 2] & 16 | 0) != 0) {
   i53 = __ZNK7WebCore11RenderBlock15shapeInsideInfoEv(i3) | 0;
   HEAP32[i24 >> 2] = i53;
   if ((i53 | 0) != 0) {
    break;
   }
   i53 = HEAP32[(HEAP32[i23 >> 2] | 0) + 16 >> 2] | 0;
   if ((i53 | 0) == 0) {
    break;
   }
   if ((HEAP32[i41 >> 2] & 1088 | 0) != 0) {
    break;
   }
   HEAP32[i24 >> 2] = i53;
  }
 } while (0);
 i24 = (HEAP32[i23 >> 2] | 0) + 52 | 0;
 i23 = i33;
 i33 = HEAP32[i24 + 4 >> 2] | 0;
 HEAP32[i23 >> 2] = HEAP32[i24 >> 2];
 HEAP32[i23 + 4 >> 2] = i33;
 do {
  if ((HEAP32[i34 >> 2] | 0) == 0) {
   if ((HEAP32[i22 >> 2] | 0) != 0) {
    i56 = 2;
    break;
   }
   i56 = ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 248 >> 2] & 1](i40) | 0) & 1) << 1;
  } else {
   i56 = 2;
  }
 } while (0);
 HEAP8[i50] = HEAP8[i50] & -3 | i56;
 i50 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i50 | 0) == 0) {
   i57 = 0;
  } else {
   i40 = HEAP32[i41 >> 2] | 0;
   if ((i40 & 4194304 | 0) == 0) {
    i57 = i50;
    break;
   }
   i22 = HEAP32[i3 + 36 >> 2] | 0;
   i33 = (HEAP32[(HEAP32[(HEAP32[i22 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] | 0) >>> 11 & 3;
   if ((i33 | 0) != 2) {
    i23 = (HEAP32[i22 + 44 >> 2] | 0) >>> 13 & 3;
    if (((i23 | 0) == 0 | (i23 | 0) == 3) ^ (i33 | 0) == 0) {
     i57 = i50;
     break;
    }
   }
   if (((HEAP32[i22 + 44 >> 2] ^ HEAP32[(HEAP32[i50 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
    i57 = i50;
    break;
   }
   i22 = HEAP32[i50 + 100 >> 2] | 0;
   if ((i22 | 0) == 0) {
    i57 = i50;
    break;
   }
   i33 = HEAP32[i22 + 24 >> 2] | 0;
   if ((i33 | 0) == 0) {
    i57 = i50;
    break;
   }
   i22 = (HEAP32[i50 + 20 >> 2] & 8192 | 0) != 0;
   i23 = i37;
   i24 = HEAP32[i23 + 4 >> 2] | 0;
   i53 = HEAP32[i33 + 84 >> 2] | 0;
   i6 = HEAP32[i33 + 80 >> 2] | 0;
   i33 = i53 - i6 | 0;
   if ((i53 | 0) == (i6 | 0)) {
    i57 = i50;
    break;
   }
   i53 = 0;
   i14 = i22 ? i24 : HEAP32[i23 >> 2] | 0;
   i22 ? i53 : i24;
   i24 = i14 + i6 | 0;
   if ((i56 & 2) == 0) {
    i57 = i50;
    break;
   }
   if ((HEAP32[i34 >> 2] | 0) == 0) {
    i57 = i50;
    break;
   }
   i6 = HEAP32[((i40 & 8192 | 0) == 0 ? i1 + 64 | 0 : i36) >> 2] | 0;
   if ((i6 | 0) <= (i24 | 0)) {
    i57 = i50;
    break;
   }
   i40 = i33 - ((i6 - i24 | 0) % (i33 | 0) & -1) | 0;
   if (i22) {
    HEAP32[i39 >> 2] = i40;
    i57 = i50;
    break;
   } else {
    HEAP32[i1 + 80 >> 2] = i40;
    i57 = i50;
    break;
   }
  }
 } while (0);
 i50 = HEAP32[(HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 24 >> 2] | 0) + 120 >> 2] | 0;
 if ((i50 | 0) == (HEAP32[__ZN3WTF8nullAtomE >> 2] | 0)) {
  STACKTOP = i8;
  return;
 }
 if ((HEAP32[i38 >> 2] & 32 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i38 = i3;
 L90 : do {
  if ((i57 | 0) != 0) {
   if ((HEAP32[(HEAP32[(HEAP32[i57 + 36 >> 2] | 0) + 24 >> 2] | 0) + 120 >> 2] | 0) == (i50 | 0)) {
    STACKTOP = i8;
    return;
   } else {
    i58 = i1;
    i59 = i57;
   }
   while (1) {
    i60 = i58;
    while (1) {
     i60 = HEAP32[i60 + 12 >> 2] | 0;
     if ((i60 | 0) == 0) {
      break L90;
     }
     i61 = HEAP32[i60 + 8 >> 2] | 0;
     if ((i61 | 0) != (i59 | 0)) {
      break;
     }
    }
    if ((i61 | 0) == 0) {
     break L90;
    }
    if ((HEAP32[(HEAP32[(HEAP32[i61 + 36 >> 2] | 0) + 24 >> 2] | 0) + 120 >> 2] | 0) == (i50 | 0)) {
     break;
    } else {
     i58 = i60;
     i59 = i61;
    }
   }
   HEAP32[i7 >> 2] = i61;
   i3 = i60 + 72 | 0;
   i39 = i37;
   i36 = HEAP32[i3 + 4 >> 2] | 0;
   HEAP32[i39 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i39 + 4 >> 2] = i36;
   STACKTOP = i8;
   return;
  }
 } while (0);
 HEAP32[i7 >> 2] = i38;
 i38 = i37;
 i37 = HEAP32[i27 + 4 >> 2] | 0;
 HEAP32[i38 >> 2] = HEAP32[i27 >> 2];
 HEAP32[i38 + 4 >> 2] = i37;
 STACKTOP = i8;
 return;
}
function __ZN7WebCore11LayoutStateC1ENSt3__110unique_ptrIS0_NS1_14default_deleteIS0_EEEEPNS_9RenderBoxERKNS_10LayoutSizeENS_10LayoutUnitEbPNS_10ColumnInfoE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, d44 = +0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i9 = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i5 >> 2] = HEAP32[i9 >> 2];
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i12 | 0;
 i14 = i12;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = i15;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i22 = i1 + 4 | 0;
 HEAP32[i22 >> 2] = i7;
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 i23 = i2 | 0;
 i2 = HEAP32[i23 >> 2] | 0;
 HEAP32[i23 >> 2] = 0;
 i23 = i1 + 12 | 0;
 HEAP32[i23 >> 2] = i2;
 i24 = i1 + 16 | 0;
 i25 = i1 + 20 | 0;
 i26 = i25;
 i27 = i1 + 36 | 0;
 i28 = i27 | 0;
 i29 = i1 + 40 | 0;
 i30 = i1 + 44 | 0;
 i31 = i30 | 0;
 i32 = i1 + 48 | 0;
 i33 = i1 + 52 | 0;
 i34 = i1 + 60 | 0;
 i35 = i1 + 64 | 0;
 i36 = i1 + 68 | 0;
 i37 = i1 + 72 | 0;
 i38 = i1 + 80 | 0;
 i39 = i1 + 84 | 0;
 i40 = i3 | 0;
 i41 = i3 + 20 | 0;
 _memset(i24 | 0, 0, 72) | 0;
 do {
  if ((HEAP32[i41 >> 2] & 25165824 | 0) == 16777216) {
   if ((HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 48 >> 2] & 29360128 | 0) != 25165824) {
    i42 = 10;
    break;
   }
   i43 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
   HEAPF32[i10 >> 2] = +0;
   HEAPF32[i10 + 4 >> 2] = +0;
   __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i9, i43, i10, 1);
   d44 = +HEAPF32[i9 >> 2];
   do {
    if (d44 < +2147483647) {
     if (d44 <= +-2147483648) {
      i45 = -2147483648;
      break;
     }
     i45 = ~~d44;
    } else {
     i45 = 2147483647;
    }
   } while (0);
   d44 = +HEAPF32[i9 + 4 >> 2];
   do {
    if (d44 < +2147483647) {
     if (d44 <= +-2147483648) {
      i46 = -2147483648;
      break;
     }
     i46 = ~~d44;
    } else {
     i46 = 2147483647;
    }
   } while (0);
   i43 = i27;
   i47 = (HEAP32[i4 + 4 >> 2] | 0) + i46 | 0;
   HEAP32[i43 >> 2] = (HEAP32[i4 >> 2] | 0) + i45;
   HEAP32[i43 + 4 >> 2] = i47;
   i48 = 1;
  } else {
   i42 = 10;
  }
 } while (0);
 do {
  if ((i42 | 0) == 10) {
   i45 = i27;
   i46 = (HEAP32[i4 + 4 >> 2] | 0) + (HEAP32[i2 + 40 >> 2] | 0) | 0;
   HEAP32[i45 >> 2] = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 36 >> 2] | 0);
   HEAP32[i45 + 4 >> 2] = i46;
   if ((HEAP32[i41 >> 2] & 25165824 | 0) != 16777216) {
    i48 = 0;
    break;
   }
   i46 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i40, 0, 0) | 0;
   if ((i46 | 0) == 0) {
    i48 = 0;
    break;
   }
   i45 = HEAP32[i46 + 20 >> 2] & 25165824;
   if (!((i45 | 0) == 25165824 | (i45 | 0) == 8388608)) {
    i48 = 0;
    break;
   }
   if ((HEAP32[i46 + 24 >> 2] & 4 | 0) == 0) {
    i48 = 0;
    break;
   }
   __ZNK7WebCore12RenderInline31offsetForInFlowPositionedInlineEPKNS_9RenderBoxE(i11, i46, i3);
   HEAP32[i28 >> 2] = (HEAP32[i11 >> 2] | 0) + (HEAP32[i28 >> 2] | 0);
   HEAP32[i29 >> 2] = (HEAP32[i11 + 4 >> 2] | 0) + (HEAP32[i29 >> 2] | 0);
   i48 = 0;
  }
 } while (0);
 i11 = i27;
 i27 = i30;
 i30 = HEAP32[i11 >> 2] | 0;
 i2 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i27 >> 2] = i30;
 HEAP32[i27 + 4 >> 2] = i2;
 i2 = HEAP32[i41 >> 2] | 0;
 i11 = i2 & 25165824;
 i4 = i30;
 do {
  if ((i11 | 0) == 25165824 | (i11 | 0) == 8388608) {
   if ((i2 & 32768 | 0) == 0) {
    i49 = i4;
    break;
   }
   i30 = HEAP32[i3 + 40 >> 2] | 0;
   i46 = (HEAP32[i30 + 88 >> 2] | 0) + i4 | 0;
   HEAP32[i28 >> 2] = i46;
   HEAP32[i29 >> 2] = (HEAP32[i30 + 92 >> 2] | 0) + (HEAP32[i29 >> 2] | 0);
   i49 = i46;
  } else {
   i49 = i4;
  }
 } while (0);
 do {
  if (i48) {
   i4 = i1 | 0;
   HEAP8[i4] = HEAP8[i4] & -2;
   i50 = i4;
  } else {
   i4 = HEAP32[i23 >> 2] | 0;
   i2 = HEAP8[i4 | 0] & 1;
   i11 = i1 | 0;
   HEAP8[i11] = HEAP8[i11] & -2 | i2;
   if (i2 << 24 >> 24 == 0) {
    i50 = i11;
    break;
   }
   i2 = i4 + 20 | 0;
   HEAP32[i26 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i26 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
   HEAP32[i26 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
   HEAP32[i26 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
   i50 = i11;
  }
 } while (0);
 if ((HEAP32[i41 >> 2] & 65536 | 0) != 0) {
  i48 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
  if ((i48 | 0) == 0) {
   i51 = 0;
   i52 = 0;
  } else {
   i11 = i48 + 52 | 0;
   i51 = HEAP32[i11 >> 2] | 0;
   i52 = HEAP32[i11 + 4 >> 2] | 0;
  }
  i11 = i52 + (HEAP32[i29 >> 2] | 0) | 0;
  __ZNK7WebCore9RenderBox25cachedSizeForOverflowClipEv(i16, i3);
  HEAP32[i13 >> 2] = i51 + i49;
  HEAP32[i13 + 4 >> 2] = i11;
  i11 = i12 + 8 | 0;
  i13 = HEAP32[i15 + 4 >> 2] | 0;
  HEAP32[i11 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i11 + 4 >> 2] = i13;
  i13 = HEAP8[i50] | 0;
  if ((i13 & 1) == 0) {
   i11 = i12;
   HEAP32[i26 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i26 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
   HEAP32[i26 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
   HEAP32[i26 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
   HEAP8[i50] = i13 | 1;
  } else {
   __ZN7WebCore10LayoutRect9intersectERKS0_(i25, i14);
  }
  __ZNK7WebCore9RenderBox21scrolledContentOffsetEv(i17, i3);
  i14 = HEAP32[i17 + 4 >> 2] | 0;
  HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) - (HEAP32[i17 >> 2] | 0);
  HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) - i14;
 }
 i14 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   if ((HEAP32[i22 >> 2] | 0) != 0) {
    i42 = 32;
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 248 >> 2] & 1](i40) | 0) {
    i42 = 32;
    break;
   }
   i5 = HEAP32[i23 >> 2] | 0;
   HEAP32[i34 >> 2] = HEAP32[i5 + 60 >> 2];
   HEAP8[i50] = HEAP8[i50] & -5 | HEAP8[i5 | 0] & 4;
   i29 = i5 + 64 | 0;
   i5 = i35;
   i17 = HEAP32[i29 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i29 >> 2];
   HEAP32[i5 + 4 >> 2] = i17;
   if (!(__ZNK7WebCore9RenderBox27isUnsplittableForPaginationEv(i3) | 0)) {
    break;
   }
   HEAP32[i34 >> 2] = 0;
  } else {
   i42 = 32;
  }
 } while (0);
 if ((i42 | 0) == 32) {
  HEAP32[i34 >> 2] = i14;
  i14 = (HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  i42 = HEAP32[i31 >> 2] | 0;
  i31 = i3 | 0;
  i17 = i3;
  i5 = HEAP32[i17 >> 2] | 0;
  if ((i14 | 0) == 3 | (i14 | 0) == 1) {
   i14 = FUNCTION_TABLE_ii[HEAP32[i5 + 748 >> 2] & 1](i31) | 0;
   i29 = i3;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i29 >> 2] | 0) + 716 >> 2] & 3](i19, i31);
   i28 = (HEAP32[i19 >> 2] | 0) + i14 | 0;
   i14 = HEAP32[i32 >> 2] | 0;
   i19 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 740 >> 2] & 1](i31) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i29 >> 2] | 0) + 708 >> 2] & 3](i21, i31);
   i53 = (HEAP32[i21 >> 2] | 0) + i19 | 0;
   i54 = i28;
   i55 = i14;
  } else {
   i14 = FUNCTION_TABLE_ii[HEAP32[i5 + 744 >> 2] & 1](i31) | 0;
   i5 = i3;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 712 >> 2] & 3](i18, i31);
   i28 = (HEAP32[i18 >> 2] | 0) + i14 | 0;
   i14 = HEAP32[i32 >> 2] | 0;
   i32 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 736 >> 2] & 1](i31) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 704 >> 2] & 3](i20, i31);
   i53 = (HEAP32[i20 >> 2] | 0) + i32 | 0;
   i54 = i28;
   i55 = i14;
  }
  i14 = i35;
  HEAP32[i14 >> 2] = i54 + i42;
  HEAP32[i14 + 4 >> 2] = i53 + i55;
  HEAP8[i50] = HEAP8[i50] & -5 | (i6 & 1) << 2;
 }
 do {
  if ((HEAP32[i23 >> 2] | 0) != 0) {
   if (__ZNK7WebCore9RenderBox27isUnsplittableForPaginationEv(i3) | 0) {
    break;
   }
   i6 = HEAP32[i23 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i6 + 8 >> 2];
   i55 = i6 + 72 | 0;
   i53 = i37;
   i14 = HEAP32[i55 + 4 >> 2] | 0;
   HEAP32[i53 >> 2] = HEAP32[i55 >> 2];
   HEAP32[i53 + 4 >> 2] = i14;
   i14 = i6 + 80 | 0;
   i6 = i38;
   i53 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i6 + 4 >> 2] = i53;
  }
 } while (0);
 if ((HEAP32[i22 >> 2] | 0) == 0) {
  HEAP32[i22 >> 2] = HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2];
 }
 i38 = i3 + 24 | 0;
 do {
  if ((HEAP32[i38 >> 2] & 16 | 0) != 0) {
   i53 = __ZNK7WebCore11RenderBlock15shapeInsideInfoEv(i3) | 0;
   HEAP32[i24 >> 2] = i53;
   if ((i53 | 0) != 0) {
    break;
   }
   i53 = HEAP32[(HEAP32[i23 >> 2] | 0) + 16 >> 2] | 0;
   if ((i53 | 0) == 0) {
    break;
   }
   if ((HEAP32[i41 >> 2] & 1088 | 0) != 0) {
    break;
   }
   HEAP32[i24 >> 2] = i53;
  }
 } while (0);
 i24 = (HEAP32[i23 >> 2] | 0) + 52 | 0;
 i23 = i33;
 i33 = HEAP32[i24 + 4 >> 2] | 0;
 HEAP32[i23 >> 2] = HEAP32[i24 >> 2];
 HEAP32[i23 + 4 >> 2] = i33;
 do {
  if ((HEAP32[i34 >> 2] | 0) == 0) {
   if ((HEAP32[i22 >> 2] | 0) != 0) {
    i56 = 2;
    break;
   }
   i56 = ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 248 >> 2] & 1](i40) | 0) & 1) << 1;
  } else {
   i56 = 2;
  }
 } while (0);
 HEAP8[i50] = HEAP8[i50] & -3 | i56;
 i50 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i50 | 0) == 0) {
   i57 = 0;
  } else {
   i40 = HEAP32[i41 >> 2] | 0;
   if ((i40 & 4194304 | 0) == 0) {
    i57 = i50;
    break;
   }
   i22 = HEAP32[i3 + 36 >> 2] | 0;
   i33 = (HEAP32[(HEAP32[(HEAP32[i22 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] | 0) >>> 11 & 3;
   if ((i33 | 0) != 2) {
    i23 = (HEAP32[i22 + 44 >> 2] | 0) >>> 13 & 3;
    if (((i23 | 0) == 0 | (i23 | 0) == 3) ^ (i33 | 0) == 0) {
     i57 = i50;
     break;
    }
   }
   if (((HEAP32[i22 + 44 >> 2] ^ HEAP32[(HEAP32[i50 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
    i57 = i50;
    break;
   }
   i22 = HEAP32[i50 + 100 >> 2] | 0;
   if ((i22 | 0) == 0) {
    i57 = i50;
    break;
   }
   i33 = HEAP32[i22 + 24 >> 2] | 0;
   if ((i33 | 0) == 0) {
    i57 = i50;
    break;
   }
   i22 = (HEAP32[i50 + 20 >> 2] & 8192 | 0) != 0;
   i23 = i37;
   i24 = HEAP32[i23 + 4 >> 2] | 0;
   i53 = HEAP32[i33 + 84 >> 2] | 0;
   i6 = HEAP32[i33 + 80 >> 2] | 0;
   i33 = i53 - i6 | 0;
   if ((i53 | 0) == (i6 | 0)) {
    i57 = i50;
    break;
   }
   i53 = 0;
   i14 = i22 ? i24 : HEAP32[i23 >> 2] | 0;
   i22 ? i53 : i24;
   i24 = i14 + i6 | 0;
   if ((i56 & 2) == 0) {
    i57 = i50;
    break;
   }
   if ((HEAP32[i34 >> 2] | 0) == 0) {
    i57 = i50;
    break;
   }
   i6 = HEAP32[((i40 & 8192 | 0) == 0 ? i1 + 64 | 0 : i36) >> 2] | 0;
   if ((i6 | 0) <= (i24 | 0)) {
    i57 = i50;
    break;
   }
   i40 = i33 - ((i6 - i24 | 0) % (i33 | 0) & -1) | 0;
   if (i22) {
    HEAP32[i39 >> 2] = i40;
    i57 = i50;
    break;
   } else {
    HEAP32[i1 + 80 >> 2] = i40;
    i57 = i50;
    break;
   }
  }
 } while (0);
 i50 = HEAP32[(HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 24 >> 2] | 0) + 120 >> 2] | 0;
 if ((i50 | 0) == (HEAP32[__ZN3WTF8nullAtomE >> 2] | 0)) {
  STACKTOP = i8;
  return;
 }
 if ((HEAP32[i38 >> 2] & 32 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i38 = i3;
 L90 : do {
  if ((i57 | 0) != 0) {
   if ((HEAP32[(HEAP32[(HEAP32[i57 + 36 >> 2] | 0) + 24 >> 2] | 0) + 120 >> 2] | 0) == (i50 | 0)) {
    STACKTOP = i8;
    return;
   } else {
    i58 = i1;
    i59 = i57;
   }
   while (1) {
    i60 = i58;
    while (1) {
     i60 = HEAP32[i60 + 12 >> 2] | 0;
     if ((i60 | 0) == 0) {
      break L90;
     }
     i61 = HEAP32[i60 + 8 >> 2] | 0;
     if ((i61 | 0) != (i59 | 0)) {
      break;
     }
    }
    if ((i61 | 0) == 0) {
     break L90;
    }
    if ((HEAP32[(HEAP32[(HEAP32[i61 + 36 >> 2] | 0) + 24 >> 2] | 0) + 120 >> 2] | 0) == (i50 | 0)) {
     break;
    } else {
     i58 = i60;
     i59 = i61;
    }
   }
   HEAP32[i7 >> 2] = i61;
   i3 = i60 + 72 | 0;
   i39 = i37;
   i36 = HEAP32[i3 + 4 >> 2] | 0;
   HEAP32[i39 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i39 + 4 >> 2] = i36;
   STACKTOP = i8;
   return;
  }
 } while (0);
 HEAP32[i7 >> 2] = i38;
 i38 = i37;
 i37 = HEAP32[i27 + 4 >> 2] | 0;
 HEAP32[i38 >> 2] = HEAP32[i27 >> 2];
 HEAP32[i38 + 4 >> 2] = i37;
 STACKTOP = i8;
 return;
}
function __ZN7WebCore11LayoutStateC2ERNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i1 | 0;
 HEAP8[i9] = HEAP8[i9] & -8;
 i10 = i1 + 20 | 0;
 i11 = i1 + 36 | 0;
 i12 = i11 | 0;
 i13 = i1 + 40 | 0;
 _memset(i1 + 4 | 0, 0, 84) | 0;
 i14 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i2, 0, 0) | 0;
 HEAPF32[i5 >> 2] = +0;
 HEAPF32[i5 + 4 >> 2] = +0;
 __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i4, i14 | 0, i5, 2);
 d15 = +HEAPF32[i4 >> 2];
 do {
  if (d15 < +2147483647) {
   if (d15 <= +-2147483648) {
    i16 = 0;
    i17 = -2147483648;
    break;
   }
   i16 = 0;
   i17 = ~~d15;
  } else {
   i16 = 0;
   i17 = 2147483647;
  }
 } while (0);
 d15 = +HEAPF32[i4 + 4 >> 2];
 do {
  if (d15 < +2147483647) {
   if (d15 <= +-2147483648) {
    i18 = -2147483648;
    i19 = 0;
    break;
   }
   i18 = ~~d15;
   i19 = 0;
  } else {
   i18 = 2147483647;
   i19 = 0;
  }
 } while (0);
 i4 = i11;
 HEAP32[i4 >> 2] = i19 | i17;
 HEAP32[i4 + 4 >> 2] = i18 | i16;
 if ((HEAP32[i14 + 20 >> 2] & 65536 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP8[i9] = HEAP8[i9] | 1;
 i9 = i14;
 __ZNK7WebCore9RenderBox25cachedSizeForOverflowClipEv(i7, i9);
 i7 = HEAP32[i6 >> 2] | 0;
 i14 = HEAP32[i6 + 4 >> 2] | 0;
 i6 = i10;
 HEAP32[i6 >> 2] = i19 | i17;
 HEAP32[i6 + 4 >> 2] = i18 | i16;
 i16 = i1 + 28 | 0;
 HEAP32[i16 >> 2] = i7;
 HEAP32[i16 + 4 >> 2] = i14;
 __ZNK7WebCore9RenderBox21scrolledContentOffsetEv(i8, i9);
 i9 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) - (HEAP32[i8 >> 2] | 0);
 HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - i9;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11LayoutStateC1ERNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i1 | 0;
 HEAP8[i9] = HEAP8[i9] & -8;
 i10 = i1 + 20 | 0;
 i11 = i1 + 36 | 0;
 i12 = i11 | 0;
 i13 = i1 + 40 | 0;
 _memset(i1 + 4 | 0, 0, 84) | 0;
 i14 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i2, 0, 0) | 0;
 HEAPF32[i5 >> 2] = +0;
 HEAPF32[i5 + 4 >> 2] = +0;
 __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i4, i14 | 0, i5, 2);
 d15 = +HEAPF32[i4 >> 2];
 do {
  if (d15 < +2147483647) {
   if (d15 <= +-2147483648) {
    i16 = 0;
    i17 = -2147483648;
    break;
   }
   i16 = 0;
   i17 = ~~d15;
  } else {
   i16 = 0;
   i17 = 2147483647;
  }
 } while (0);
 d15 = +HEAPF32[i4 + 4 >> 2];
 do {
  if (d15 < +2147483647) {
   if (d15 <= +-2147483648) {
    i18 = -2147483648;
    i19 = 0;
    break;
   }
   i18 = ~~d15;
   i19 = 0;
  } else {
   i18 = 2147483647;
   i19 = 0;
  }
 } while (0);
 i4 = i11;
 HEAP32[i4 >> 2] = i19 | i17;
 HEAP32[i4 + 4 >> 2] = i18 | i16;
 if ((HEAP32[i14 + 20 >> 2] & 65536 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP8[i9] = HEAP8[i9] | 1;
 i9 = i14;
 __ZNK7WebCore9RenderBox25cachedSizeForOverflowClipEv(i7, i9);
 i7 = HEAP32[i6 >> 2] | 0;
 i14 = HEAP32[i6 + 4 >> 2] | 0;
 i6 = i10;
 HEAP32[i6 >> 2] = i19 | i17;
 HEAP32[i6 + 4 >> 2] = i18 | i16;
 i16 = i1 + 28 | 0;
 HEAP32[i16 >> 2] = i7;
 HEAP32[i16 + 4 >> 2] = i14;
 __ZNK7WebCore9RenderBox21scrolledContentOffsetEv(i8, i9);
 i9 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) - (HEAP32[i8 >> 2] | 0);
 HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - i9;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11LayoutState17establishLineGridEPNS_15RenderBlockFlowE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) != 0) {
   i5 = HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 24 >> 2] | 0) + 120 >> 2] | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i4 + 36 >> 2] | 0) + 24 >> 2] | 0) + 120 >> 2] | 0) == (i5 | 0)) {
    return;
   } else {
    i6 = i1;
    i7 = i4;
   }
   while (1) {
    i8 = i6;
    while (1) {
     i8 = HEAP32[i8 + 12 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break L1;
     }
     i9 = HEAP32[i8 + 8 >> 2] | 0;
     if ((i9 | 0) != (i7 | 0)) {
      break;
     }
    }
    if ((i9 | 0) == 0) {
     break L1;
    }
    if ((HEAP32[(HEAP32[(HEAP32[i9 + 36 >> 2] | 0) + 24 >> 2] | 0) + 120 >> 2] | 0) == (i5 | 0)) {
     break;
    } else {
     i6 = i8;
     i7 = i9;
    }
   }
   HEAP32[i3 >> 2] = i9;
   i5 = i8 + 72 | 0;
   i10 = i1 + 72 | 0;
   i11 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i10 + 4 >> 2] = i11;
   return;
  }
 } while (0);
 HEAP32[i3 >> 2] = i2;
 i2 = i1 + 44 | 0;
 i3 = i1 + 72 | 0;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i3 + 4 >> 2] = i1;
 return;
}
function __ZN7WebCore11LayoutState31computeLineGridPaginationOriginEPNS_9RenderBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if (((HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
  return;
 }
 i4 = HEAP32[i3 + 100 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = HEAP32[i4 + 24 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i4 = (HEAP32[i3 + 20 >> 2] & 8192 | 0) != 0;
 i3 = i1 + 72 | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i7 = HEAP32[i5 + 84 >> 2] | 0;
 i8 = HEAP32[i5 + 80 >> 2] | 0;
 i5 = i7 - i8 | 0;
 if ((i7 | 0) == (i8 | 0)) {
  return;
 }
 i4 ? 0 : i6;
 i7 = (i4 ? i6 : HEAP32[i3 >> 2] | 0) + i8 | 0;
 if ((HEAP8[i1 | 0] & 2) == 0) {
  return;
 }
 if ((HEAP32[i1 + 60 >> 2] | 0) == 0) {
  return;
 }
 i8 = HEAP32[((HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0 ? i1 + 64 | 0 : i1 + 68 | 0) >> 2] | 0;
 if ((i8 | 0) <= (i7 | 0)) {
  return;
 }
 i2 = i5 - ((i8 - i7 | 0) % (i5 | 0) & -1) | 0;
 if (i4) {
  HEAP32[i1 + 84 >> 2] = i2;
  return;
 } else {
  HEAP32[i1 + 80 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore11LayoutState20addForcedColumnBreakEPNS_9RenderBoxENS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i6 + 20 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i7 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0) {
  i8 = (HEAP32[i1 + 44 >> 2] | 0) + i7 - (HEAP32[i1 + 64 >> 2] | 0) | 0;
 } else {
  i8 = (HEAP32[i1 + 48 >> 2] | 0) + i7 - (HEAP32[i1 + 68 >> 2] | 0) | 0;
 }
 _llvm_lifetime_start(4, 0, i5 | 0);
 i1 = i6 + 36 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 i2 = i8 - i7 | 0;
 HEAP32[i5 >> 2] = i2;
 if ((i8 | 0) == (i7 | 0)) {
  STACKTOP = i4;
  return;
 }
 i7 = i6 + 28 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = i6 + 32 | 0;
 i6 = i7 | 0;
 HEAP32[i6 >> 2] = HEAP32[((HEAP32[i6 >> 2] | 0) < (i2 | 0) ? i5 : i7) >> 2];
 HEAP32[i1 >> 2] = i8;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11LayoutState17pageLogicalOffsetEPNS_9RenderBoxENS_10LayoutUnitE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 if ((HEAP32[i3 + 20 >> 2] & 8192 | 0) == 0) {
  HEAP32[i1 >> 2] = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 44 >> 2] | 0) - (HEAP32[i2 + 64 >> 2] | 0);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i1 >> 2] = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 48 >> 2] | 0) - (HEAP32[i2 + 68 >> 2] | 0);
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore11LayoutState21propagateLineGridInfoEPNS_9RenderBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 12 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 if (__ZNK7WebCore9RenderBox27isUnsplittableForPaginationEv(i2) | 0) {
  return;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 i3 = i2 + 72 | 0;
 i4 = i1 + 72 | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i5;
 i5 = i2 + 80 | 0;
 i2 = i1 + 80 | 0;
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
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
function __ZN7WebCore11LayoutState26clearPaginationInformationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 HEAP32[i1 + 60 >> 2] = HEAP32[i2 + 60 >> 2];
 i3 = i2 + 64 | 0;
 i4 = i1 + 64 | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i5;
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 return;
}
function dynCall_viiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function b3(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(3);
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
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore11LayoutStateC2ERNS_12RenderObjectE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viiiiiii = [b3,b3,__ZN7WebCore11LayoutStateC2ENSt3__110unique_ptrIS0_NS1_14default_deleteIS0_EEEEPNS_9RenderBoxERKNS_10LayoutSizeENS_10LayoutUnitEbPNS_10ColumnInfoE,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viiiiiii: dynCall_viiiiiii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viiiiiii": invoke_viiiiiii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore11LayoutStateC2ENSt3__110unique_ptrIS0_NS1_14default_deleteIS0_EEEEPNS_9RenderBoxERKNS_10LayoutSizeENS_10LayoutUnitEbPNS_10ColumnInfoE","__ZN7WebCore11LayoutState17establishLineGridEPNS_15RenderBlockFlowE","_memset","__ZNK7WebCore11LayoutState17pageLogicalOffsetEPNS_9RenderBoxENS_10LayoutUnitE","__ZN7WebCore11LayoutState21propagateLineGridInfoEPNS_9RenderBoxE","_memcpy","__ZN7WebCore11LayoutState31computeLineGridPaginationOriginEPNS_9RenderBoxE","__ZN7WebCore11LayoutState20addForcedColumnBreakEPNS_9RenderBoxENS_10LayoutUnitE","__ZN7WebCore11LayoutState26clearPaginationInformationEv","__ZN7WebCore11LayoutStateC2ERNS_12RenderObjectE"]

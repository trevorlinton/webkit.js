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
H_BASE = parentModule["_malloc"](16 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 16;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore9LineWidthC1ERNS_15RenderBlockFlowEbNS_15IndentTextOrNotE;
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
  var __ZZN7WebCore10MappedInfoINS_9RenderBoxENS_16ShapeOutsideInfoEE7infoMapEvE13staticInfoMap=(H_BASE+8)|0;
  var __ZGVZN7WebCore10MappedInfoINS_9RenderBoxENS_16ShapeOutsideInfoEE7infoMapEvE13staticInfoMap=(H_BASE+16)|0;
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
function __ZN7WebCore9LineWidth39shrinkAvailableWidthForNewFloatIfNeededEPNS_14FloatingObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, d23 = +0, d24 = +0, d25 = +0, d26 = +0, d27 = +0, d28 = +0, d29 = +0, d30 = +0, d31 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i1 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = (HEAP32[(HEAP32[i12 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i13 | 0) == 3 | (i13 | 0) == 0) {
  i14 = i12 + 56 | 0;
 } else {
  i14 = i12 + 52 | 0;
 }
 i13 = HEAP32[i14 >> 2] | 0;
 i14 = HEAP32[i12 + 20 >> 2] | 0;
 i15 = (i14 & 8192 | 0) == 0;
 i16 = i2 + 12 | 0;
 i17 = i2 + 8 | 0;
 if ((i13 | 0) < (HEAP32[(i15 ? i17 : i16) >> 2] | 0)) {
  STACKTOP = i3;
  return;
 }
 if (i15) {
  i18 = (HEAP32[i2 + 16 >> 2] | 0) + (HEAP32[i17 >> 2] | 0) | 0;
 } else {
  i18 = (HEAP32[i2 + 20 >> 2] | 0) + (HEAP32[i16 >> 2] | 0) | 0;
 }
 if ((i13 | 0) >= (i18 | 0)) {
  STACKTOP = i3;
  return;
 }
 i18 = HEAP32[i12 + 96 >> 2] | 0;
 i13 = HEAP32[i18 + 20 >> 2] | 0;
 __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i4, i12 | 0, (HEAP8[i1 + 40 | 0] & 1) != 0, i14 >>> 13 & 1 ^ 1, 1);
 i14 = i18 + 24 | 0;
 i18 = HEAP32[i14 >> 2] | 0;
 L15 : do {
  if ((i18 | 0) == (i13 | 0)) {
   i19 = 0;
  } else {
   i12 = i2 + 28 | 0;
   i15 = i18;
   while (1) {
    i20 = HEAP32[i15 >> 2] | 0;
    if ((i20 | 0) != (i2 | 0)) {
     if (((HEAP32[i12 >> 2] ^ HEAP32[i20 + 28 >> 2]) & 3 | 0) == 0) {
      break;
     }
    }
    i21 = HEAP32[((i15 | 0) == 0 ? i14 : i15 + 4 | 0) >> 2] | 0;
    if ((i21 | 0) == (i13 | 0)) {
     i19 = 0;
     break L15;
    } else {
     i15 = i21;
    }
   }
   i15 = __ZNK7WebCore9RenderBox16shapeOutsideInfoEv(HEAP32[i20 >> 2] | 0) | 0;
   if ((i15 | 0) == 0) {
    i19 = 0;
    break;
   }
   i12 = HEAP32[i11 >> 2] | 0;
   i21 = (HEAP32[(HEAP32[i12 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i21 | 0) == 3 | (i21 | 0) == 0) {
    HEAP32[i5 >> 2] = HEAP32[i12 + 56 >> 2];
   } else {
    HEAP32[i5 >> 2] = HEAP32[i12 + 52 >> 2];
   }
   HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
   __ZN7WebCore16ShapeOutsideInfo34updateDeltasForContainingBlockLineERKNS_15RenderBlockFlowERKNS_14FloatingObjectENS_10LayoutUnitES7_(i15, i12, i20, i5, i6);
   i19 = i15;
  }
 } while (0);
 i6 = __ZNK7WebCore9RenderBox16shapeOutsideInfoEv(HEAP32[i2 >> 2] | 0) | 0;
 i5 = (i6 | 0) != 0;
 if (i5) {
  i20 = HEAP32[i11 >> 2] | 0;
  i13 = (HEAP32[(HEAP32[i20 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  if ((i13 | 0) == 3 | (i13 | 0) == 0) {
   HEAP32[i7 >> 2] = HEAP32[i20 + 56 >> 2];
  } else {
   HEAP32[i7 >> 2] = HEAP32[i20 + 52 >> 2];
  }
  HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
  __ZN7WebCore16ShapeOutsideInfo34updateDeltasForContainingBlockLineERKNS_15RenderBlockFlowERKNS_14FloatingObjectENS_10LayoutUnitES7_(i6, i20, i2, i7, i8);
 }
 i8 = HEAP32[i11 >> 2] | 0;
 i11 = (HEAP32[i8 + 20 >> 2] & 8192 | 0) == 0;
 if ((HEAP32[i2 + 28 >> 2] & 3 | 0) == 1) {
  if (i11) {
   i22 = (HEAP32[i2 + 20 >> 2] | 0) + (HEAP32[i16 >> 2] | 0) | 0;
  } else {
   i22 = (HEAP32[i2 + 16 >> 2] | 0) + (HEAP32[i17 >> 2] | 0) | 0;
  }
  d23 = +(i22 | 0);
  if ((i19 | 0) == 0) {
   d24 = d23;
  } else {
   d24 = d23 - +(HEAP32[i19 + 32 >> 2] | 0);
  }
  if (i5) {
   d25 = d24 + +(HEAP32[i6 + 32 >> 2] | 0);
  } else {
   d25 = d24;
  }
  do {
   if ((HEAP32[i1 + 44 >> 2] | 0) == 1) {
    if ((HEAP32[(HEAP32[i8 + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) == 0) {
     d26 = d25;
     break;
    }
    __ZNK7WebCore11RenderBlock16textIndentOffsetEv(i9, i8 | 0);
    d26 = d25 + +(HEAP32[i9 >> 2] | 0);
   } else {
    d26 = d25;
   }
  } while (0);
  i9 = i1 + 24 | 0;
  d25 = +HEAPF32[i9 >> 2];
  d24 = d25 < d26 ? d26 : d25;
  HEAPF32[i9 >> 2] = d24;
  d27 = +HEAPF32[i1 + 28 >> 2];
  d28 = d24;
 } else {
  d24 = +(HEAP32[(i11 ? i16 : i17) >> 2] | 0);
  if ((i19 | 0) == 0) {
   d29 = d24;
  } else {
   d29 = d24 - +(HEAP32[i19 + 28 >> 2] | 0);
  }
  if (i5) {
   d30 = d29 + +(HEAP32[i6 + 28 >> 2] | 0);
  } else {
   d30 = d29;
  }
  do {
   if ((HEAP32[i1 + 44 >> 2] | 0) == 1) {
    if ((HEAP32[(HEAP32[i8 + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0) {
     d31 = d30;
     break;
    }
    __ZNK7WebCore11RenderBlock16textIndentOffsetEv(i10, i8 | 0);
    d31 = d30 - +(HEAP32[i10 >> 2] | 0);
   } else {
    d31 = d30;
   }
  } while (0);
  i10 = i1 + 28 | 0;
  d30 = +HEAPF32[i10 >> 2];
  d29 = d31 < d30 ? d31 : d30;
  HEAPF32[i10 >> 2] = d29;
  d27 = d29;
  d28 = +HEAPF32[i1 + 24 >> 2];
 }
 d29 = d27 - d28;
 HEAPF32[i1 + 32 >> 2] = +HEAPF32[i1 + 12 >> 2] + (d29 > +0 ? d29 : +0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9LineWidth14fitBelowFloatsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, d48 = +0, d49 = +0, d50 = +0, i51 = 0, d52 = +0, d53 = +0, d54 = +0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, d61 = +0, d62 = +0, d63 = +0, d64 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 72 | 0;
 i13 = i2 + 80 | 0;
 i14 = i2 + 88 | 0;
 i15 = i2 + 96 | 0;
 i16 = i2 + 104 | 0;
 i17 = i2 + 112 | 0;
 i18 = i2 + 120 | 0;
 i19 = i2 + 128 | 0;
 i20 = i2 + 136 | 0;
 i21 = i2 + 144 | 0;
 i22 = i2 + 152 | 0;
 i23 = i1 | 0;
 i24 = HEAP32[i23 >> 2] | 0;
 i25 = (HEAP32[(HEAP32[i24 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i25 | 0) == 3 | (i25 | 0) == 0) {
  i26 = i24 + 56 | 0;
 } else {
  i26 = i24 + 52 | 0;
 }
 i25 = i1 + 32 | 0;
 i27 = i1 + 24 | 0;
 i28 = i1 + 28 | 0;
 i29 = i16 | 0;
 i30 = i15 | 0;
 i31 = i1 + 44 | 0;
 i32 = i7 | 0;
 i33 = i8 | 0;
 i34 = i4 | 0;
 i35 = i5 | 0;
 i36 = i6 | 0;
 i37 = i17 | 0;
 i38 = i13 | 0;
 i39 = i14 | 0;
 i40 = i10 | 0;
 i41 = i11 | 0;
 i42 = i12 | 0;
 i43 = i18 | 0;
 i44 = i1 + 4 | 0;
 i45 = i19 + 4 | 0;
 i46 = i20 | 0;
 i47 = i22 | 0;
 d48 = +HEAPF32[i25 >> 2];
 d49 = +HEAPF32[i28 >> 2];
 d50 = +HEAPF32[i27 >> 2];
 i51 = HEAP32[i26 >> 2] | 0;
 i26 = i24;
 while (1) {
  HEAP32[i29 >> 2] = i51;
  __ZNK7WebCore15RenderBlockFlow27nextFloatLogicalBottomBelowENS_10LayoutUnitE(i15, i26, i16);
  i24 = HEAP32[i30 >> 2] | 0;
  if ((i24 | 0) <= (i51 | 0)) {
   d52 = d48;
   d53 = d49;
   d54 = d50;
   i55 = i51;
   break;
  }
  i56 = HEAP32[i23 >> 2] | 0;
  i57 = i56 | 0;
  i58 = (HEAP32[i31 >> 2] | 0) == 1;
  HEAP32[i32 >> 2] = i24;
  __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i8, i57, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i57, i7) | 0);
  i59 = HEAP32[i33 >> 2] | 0;
  i60 = HEAP32[(HEAP32[i56 >> 2] | 0) + 1072 >> 2] | 0;
  HEAP32[i34 >> 2] = i24;
  HEAP32[i35 >> 2] = i59;
  HEAP32[i36 >> 2] = 0;
  FUNCTION_TABLE_viiiii[i60 & 1](i3, i57, i4, i5, i6);
  __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i17, i57, i3, i58);
  d61 = +(HEAP32[i37 >> 2] | 0);
  i58 = HEAP32[i23 >> 2] | 0;
  i57 = i58 | 0;
  i60 = (HEAP32[i31 >> 2] | 0) == 1;
  HEAP32[i38 >> 2] = i24;
  __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i14, i57, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i57, i13) | 0);
  i59 = HEAP32[i39 >> 2] | 0;
  i56 = HEAP32[(HEAP32[i58 >> 2] | 0) + 1068 >> 2] | 0;
  HEAP32[i40 >> 2] = i24;
  HEAP32[i41 >> 2] = i59;
  HEAP32[i42 >> 2] = 0;
  FUNCTION_TABLE_viiiii[i56 & 1](i9, i57, i10, i11, i12);
  __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i18, i57, i9, i60);
  d62 = +(HEAP32[i43 >> 2] | 0);
  d63 = d62 - d61;
  d64 = d63 > +0 ? d63 : +0;
  i60 = __ZNK7WebCore11RenderBlock21layoutShapeInsideInfoEv(HEAP32[i23 >> 2] | 0) | 0;
  if ((i60 | 0) != 0) {
   __ZNK7WebCore11RenderBlock39logicalOffsetFromShapeAncestorContainerEPKS0_(i19, HEAP32[i23 >> 2] | 0, HEAP32[i60 + 12 >> 2] | 0);
   i57 = HEAP32[i45 >> 2] | 0;
   i56 = HEAP32[i23 >> 2] | 0;
   __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i21, i56 | 0, 0, (HEAP32[i56 + 20 >> 2] | 0) >>> 13 & 1 ^ 1, 1);
   HEAP32[i46 >> 2] = i57 + i24;
   __ZN7WebCore15ShapeInsideInfo21updateSegmentsForLineENS_10LayoutUnitES1_(i60, i20, i21) | 0;
   __ZN7WebCore9LineWidth25updateCurrentShapeSegmentEv(i1);
   HEAP32[i47 >> 2] = 0;
   __ZN7WebCore9LineWidth20updateAvailableWidthENS_10LayoutUnitE(i1, i22);
  }
  if (d64 >= +HEAPF32[i44 >> 2]) {
   d52 = d64;
   d53 = d62;
   d54 = d61;
   i55 = i24;
   break;
  }
  d48 = d64;
  d49 = d62;
  d50 = d61;
  i51 = i24;
  i26 = HEAP32[i23 >> 2] | 0;
 }
 if (d52 <= +HEAPF32[i25 >> 2]) {
  STACKTOP = i2;
  return;
 }
 i26 = HEAP32[i23 >> 2] | 0;
 i23 = (HEAP32[(HEAP32[i26 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i23 | 0) == 3 | (i23 | 0) == 0) {
  HEAP32[i26 + 56 >> 2] = i55;
 } else {
  HEAP32[i26 + 52 >> 2] = i55;
 }
 HEAPF32[i25 >> 2] = d52 + +HEAPF32[i1 + 12 >> 2];
 HEAPF32[i27 >> 2] = d54;
 HEAPF32[i28 >> 2] = d53;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore9LineWidth20updateAvailableWidthENS_10LayoutUnitE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, d25 = +0, d26 = +0, d27 = +0, d28 = +0, i29 = 0, d30 = +0, i31 = 0, d32 = +0, d33 = +0, i34 = 0, d35 = +0, d36 = +0, d37 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 72 | 0;
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 i20 = i1 | 0;
 i21 = HEAP32[i20 >> 2] | 0;
 i22 = (HEAP32[(HEAP32[i21 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i22 | 0) == 3 | (i22 | 0) == 0) {
  i23 = i21 + 56 | 0;
 } else {
  i23 = i21 + 52 | 0;
 }
 i22 = HEAP32[i23 >> 2] | 0;
 i23 = (HEAP8[i1 + 40 | 0] & 1) != 0;
 HEAP32[i17 >> 2] = HEAP32[i2 >> 2];
 __ZNK7WebCore11RenderBlock32minLineHeightForReplacedRendererEbNS_10LayoutUnitE(i16, i21 | 0, i23, i17);
 i17 = HEAP32[i20 >> 2] | 0;
 i23 = i17 | 0;
 i21 = i1 + 44 | 0;
 i2 = (HEAP32[i21 >> 2] | 0) == 1;
 i24 = i16 | 0;
 i16 = HEAP32[i24 >> 2] | 0;
 HEAP32[i8 >> 2] = i22;
 __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i9, i23, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i23, i8) | 0);
 i8 = HEAP32[i9 >> 2] | 0;
 i9 = HEAP32[(HEAP32[i17 >> 2] | 0) + 1072 >> 2] | 0;
 HEAP32[i5 >> 2] = i22;
 HEAP32[i6 >> 2] = i8;
 HEAP32[i7 >> 2] = i16;
 FUNCTION_TABLE_viiiii[i9 & 1](i4, i23, i5, i6, i7);
 __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i18, i23, i4, i2);
 i2 = i1 + 24 | 0;
 HEAPF32[i2 >> 2] = +(HEAP32[i18 >> 2] | 0);
 i18 = HEAP32[i20 >> 2] | 0;
 i20 = i18 | 0;
 i4 = (HEAP32[i21 >> 2] | 0) == 1;
 i21 = HEAP32[i24 >> 2] | 0;
 HEAP32[i14 >> 2] = i22;
 __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i15, i20, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i20, i14) | 0);
 i14 = HEAP32[i15 >> 2] | 0;
 i15 = HEAP32[(HEAP32[i18 >> 2] | 0) + 1068 >> 2] | 0;
 HEAP32[i11 >> 2] = i22;
 HEAP32[i12 >> 2] = i14;
 HEAP32[i13 >> 2] = i21;
 FUNCTION_TABLE_viiiii[i15 & 1](i10, i20, i11, i12, i13);
 __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i19, i20, i10, i4);
 d25 = +(HEAP32[i19 >> 2] | 0);
 i19 = i1 + 28 | 0;
 HEAPF32[i19 >> 2] = d25;
 i4 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i4 | 0) == 0) {
  d26 = d25;
  d27 = +HEAPF32[i2 >> 2];
  d28 = d26 - d27;
  i29 = d28 > +0;
  d30 = i29 ? d28 : +0;
  i31 = i1 + 12 | 0;
  d32 = +HEAPF32[i31 >> 2];
  d33 = d32 + d30;
  i34 = i1 + 32 | 0;
  HEAPF32[i34 >> 2] = d33;
  STACKTOP = i3;
  return;
 } else {
  d35 = +(HEAP32[i4 >> 2] | 0);
  d36 = +HEAPF32[i2 >> 2];
  d37 = d35 < d36 ? d36 : d35;
  HEAPF32[i2 >> 2] = d37;
  d35 = +(HEAP32[i4 + 4 >> 2] | 0);
  d36 = d25 < d35 ? d25 : d35;
  HEAPF32[i19 >> 2] = d36;
  d26 = d36;
  d27 = d37;
  d28 = d26 - d27;
  i29 = d28 > +0;
  d30 = i29 ? d28 : +0;
  i31 = i1 + 12 | 0;
  d32 = +HEAPF32[i31 >> 2];
  d33 = d32 + d30;
  i34 = i1 + 32 | 0;
  HEAPF32[i34 >> 2] = d33;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore9RenderBox16shapeOutsideInfoEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 if (!(__ZN7WebCore16ShapeOutsideInfo12isEnabledForERKNS_9RenderBoxE(i1) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i3 = __ZN3WTF10fastMallocEj(20) | 0;
  i4 = i3;
  _memset(i3 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 8 >> 2] = i4;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i5 = i4;
 } else {
  i5 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 i4 = HEAP32[i5 + 8 >> 2] | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 i5 = i1;
 i6 = i5 + ~(i5 << 15) | 0;
 i5 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i5 >>> 6 ^ i5;
 i5 = i6 + ~(i6 << 11) | 0;
 i6 = i5 >>> 16 ^ i5;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i5 = i4 & i6;
 i7 = i3 + (i5 << 3) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L11 : do {
  if ((i8 | 0) == (i1 | 0)) {
   i9 = i7;
  } else {
   i10 = (i6 >>> 23) + ~i6 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = 0;
   i12 = i5;
   i13 = i8;
   while (1) {
    if ((i13 | 0) == 0) {
     i2 = 0;
     break;
    }
    i14 = (i11 | 0) == 0 ? i10 : i11;
    i15 = i14 + i12 & i4;
    i16 = i3 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i1 | 0)) {
     i9 = i16;
     break L11;
    } else {
     i11 = i14;
     i12 = i15;
     i13 = i17;
    }
   }
   return i2 | 0;
  }
 } while (0);
 if ((i9 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = HEAP32[i9 + 4 >> 2] | 0;
 return i2 | 0;
}
function __ZN7WebCore9LineWidth25updateCurrentShapeSegmentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = __ZNK7WebCore11RenderBlock21layoutShapeInsideInfoEv(HEAP32[i1 >> 2] | 0) | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE13computedShapeEv(i4 | 0) | 0;
 i6 = HEAP32[i4 + 4 >> 2] | 0;
 i7 = HEAP32[i4 + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 1](i3, i5);
 do {
  if ((HEAP32[i3 + 8 >> 2] | 0) < 1) {
   i8 = 0;
  } else {
   i5 = HEAP32[i3 + 12 >> 2] | 0;
   if ((i5 | 0) < 1) {
    i8 = 0;
    break;
   }
   i9 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i6 | 0) < (i9 + i5 | 0)) {
    if ((i7 + i6 | 0) <= (i9 | 0)) {
     i10 = 6;
    }
   } else {
    i10 = 6;
   }
   if ((i10 | 0) == 6) {
    if (!((i7 | 0) == 0 & (i6 | 0) == (i9 | 0))) {
     i8 = 0;
     break;
    }
   }
   i9 = HEAP32[i4 + 52 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i8 = 0;
    break;
   }
   i5 = HEAP32[i4 + 36 >> 2] | 0;
   if (i9 >>> 0 > i5 >>> 0) {
    i8 = (HEAP32[i4 + 44 >> 2] | 0) + (i5 << 3) | 0;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 HEAP32[i1 + 36 >> 2] = i8;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore9LineWidth13applyOverhangEPNS_13RenderRubyRunEPNS_12RenderObjectES4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 __ZNK7WebCore13RenderRubyRun11getOverhangEbPNS_12RenderObjectES2_RiS3_(i2, (HEAP8[i1 + 40 | 0] & 1) != 0, i3, i4, i6, i7);
 d8 = +HEAPF32[i1 + 8 >> 2];
 i4 = ~~d8;
 i3 = HEAP32[i6 >> 2] | 0;
 i6 = (i4 | 0) < (i3 | 0) ? i4 : i3;
 i3 = i1 + 32 | 0;
 d9 = +HEAPF32[i3 >> 2] + +(i6 | 0);
 i4 = ~~(d9 - (d8 + +HEAPF32[i1 + 4 >> 2]));
 i2 = HEAP32[i7 >> 2] | 0;
 i7 = (i4 | 0) < (i2 | 0) ? i4 : i2;
 i2 = (i7 | 0) < 0 ? 0 : i7;
 HEAPF32[i3 >> 2] = d9 + +(i2 | 0);
 i3 = i1 + 12 | 0;
 HEAPF32[i3 >> 2] = +HEAPF32[i3 >> 2] + +(i2 + i6 | 0);
 STACKTOP = i5;
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
function __ZN7WebCore9LineWidthC2ERNS_15RenderBlockFlowEbNS_15IndentTextOrNotE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 HEAP32[i1 >> 2] = i2;
 _memset(i1 + 4 | 0, 0, 36) | 0;
 HEAP8[i1 + 40 | 0] = i3 & 1;
 HEAP32[i1 + 44 >> 2] = i4;
 __ZN7WebCore9LineWidth25updateCurrentShapeSegmentEv(i1);
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore9LineWidth20updateAvailableWidthENS_10LayoutUnitE(i1, i6);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9LineWidthC1ERNS_15RenderBlockFlowEbNS_15IndentTextOrNotE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 HEAP32[i1 >> 2] = i2;
 _memset(i1 + 4 | 0, 0, 36) | 0;
 HEAP8[i1 + 40 | 0] = i3 & 1;
 HEAP32[i1 + 44 >> 2] = i4;
 __ZN7WebCore9LineWidth25updateCurrentShapeSegmentEv(i1);
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore9LineWidth20updateAvailableWidthENS_10LayoutUnitE(i1, i6);
 STACKTOP = i5;
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
function __ZNK7WebCore9LineWidth10fitsOnLineEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var d3 = +0, i4 = 0;
 d3 = +HEAPF32[i1 + 8 >> 2] + +HEAPF32[i1 + 4 >> 2];
 if (i2) {
  i4 = d3 - +HEAPF32[i1 + 20 >> 2] <= +HEAPF32[i1 + 32 >> 2];
  return i4 | 0;
 } else {
  i4 = d3 + +0 <= +HEAPF32[i1 + 32 >> 2];
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore9LineWidth37computeAvailableWidthFromLeftAndRightEv(i1) {
 i1 = i1 | 0;
 var d2 = +0;
 d2 = +HEAPF32[i1 + 28 >> 2] - +HEAPF32[i1 + 24 >> 2];
 HEAPF32[i1 + 32 >> 2] = +HEAPF32[i1 + 12 >> 2] + (d2 > +0 ? d2 : +0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore9LineWidth37fitsOnLineExcludingTrailingWhitespaceEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +HEAPF32[i1 + 8 >> 2] + +HEAPF32[i1 + 4 >> 2] - +HEAPF32[i1 + 16 >> 2] + d2 <= +HEAPF32[i1 + 32 >> 2] | 0;
}
function __ZNK7WebCore9LineWidth46fitsOnLineExcludingTrailingCollapsedWhitespaceEv(i1) {
 i1 = i1 | 0;
 return +HEAPF32[i1 + 8 >> 2] + +HEAPF32[i1 + 4 >> 2] - +HEAPF32[i1 + 20 >> 2] <= +HEAPF32[i1 + 32 >> 2] | 0;
}
function __ZN7WebCore9LineWidth6commitEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 4 | 0;
 i3 = i1 + 8 | 0;
 HEAPF32[i3 >> 2] = +HEAPF32[i2 >> 2] + +HEAPF32[i3 >> 2];
 HEAPF32[i2 >> 2] = +0;
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
function __ZNK7WebCore9LineWidth29fitsOnLineIncludingExtraWidthEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +HEAPF32[i1 + 8 >> 2] + +HEAPF32[i1 + 4 >> 2] + d2 <= +HEAPF32[i1 + 32 >> 2] | 0;
}
function __ZN7WebCore9LineWidth26setTrailingWhitespaceWidthEff(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 HEAPF32[i1 + 20 >> 2] = d2;
 HEAPF32[i1 + 16 >> 2] = d2 + d3;
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore14requiresIndentEbbRKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return i1 & 1 | 0;
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
 FUNCTION_TABLE_vii[i1 & 1](i2 | 0, i3 | 0);
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
function b4() {
 abort(4);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6,__ZN7WebCore9LineWidthC2ERNS_15RenderBlockFlowEbNS_15IndentTextOrNotE,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore9LineWidth25updateCurrentShapeSegmentEv","__ZN7WebCore9LineWidth14fitBelowFloatsEv","__ZN7WebCore9LineWidth37computeAvailableWidthFromLeftAndRightEv","__ZNK7WebCore9LineWidth46fitsOnLineExcludingTrailingCollapsedWhitespaceEv","__ZN7WebCore9LineWidthC2ERNS_15RenderBlockFlowEbNS_15IndentTextOrNotE","__ZNK7WebCore9LineWidth29fitsOnLineIncludingExtraWidthEf","__ZN7WebCore14requiresIndentEbbRKNS_11RenderStyleE","__ZNK7WebCore9LineWidth10fitsOnLineEb","_memset","__ZNK7WebCore9LineWidth37fitsOnLineExcludingTrailingWhitespaceEf","_strlen","__ZN7WebCore9LineWidth6commitEv","__ZNK7WebCore9RenderBox16shapeOutsideInfoEv","__ZN7WebCore9LineWidth39shrinkAvailableWidthForNewFloatIfNeededEPNS_14FloatingObjectE","__ZN7WebCore9LineWidth26setTrailingWhitespaceWidthEff","__ZN7WebCore9LineWidth20updateAvailableWidthENS_10LayoutUnitE","__ZN3WTF15CrashOnOverflow10overflowedEv","_memcpy","__ZN7WebCore9LineWidth13applyOverhangEPNS_13RenderRubyRunEPNS_12RenderObjectES4_"]

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
H_BASE = parentModule["_malloc"](224 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 224;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore21RenderLayerCompositorC1ERNS_10RenderViewE;
var __ZN7WebCore21RenderLayerCompositorD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,252,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_did(index,a1,a2) {
  try {
    return Module["dynCall_did"](index,a1,a2);
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
function invoke_viid(index,a1,a2,a3) {
  try {
    Module["dynCall_viid"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_fi(index,a1) {
  try {
    return Module["dynCall_fi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_fii(index,a1,a2) {
  try {
    return Module["dynCall_fii"](index,a1,a2);
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
  var __ZTVN7WebCore21RenderLayerCompositorE=(H_BASE+104)|0;
  var __ZTVN7WebCore32FixedPositionViewportConstraintsE=(H_BASE+72)|0;
  var __ZTVN7WebCore33StickyPositionViewportConstraintsE=(H_BASE+40)|0;
  var _WebCoreHas3DRendering=(H_BASE+216)|0;
  var __ZTVN7WebCore5TimerINS_21RenderLayerCompositorEEE=(H_BASE+8)|0;
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
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viid=env.invoke_viid;
  var invoke_fi=env.invoke_fi;
  var invoke_fii=env.invoke_fii;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore21RenderLayerCompositor30computeCompositingRequirementsEPNS_11RenderLayerERS1_PNS0_10OverlapMapERNS_16CompositingStateERbS8_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, d30 = +0, d31 = +0, d32 = +0, d33 = +0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i9 = i8 | 0;
 i10 = i8 + 32 | 0;
 i11 = i8 + 40 | 0;
 i12 = i8 + 56 | 0;
 i13 = i8 + 72 | 0;
 i14 = i8 + 88 | 0;
 i15 = i14 | 0;
 i16 = i14;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 __ZN7WebCore11RenderLayer30updateDescendantDependentFlagsEPN3WTF7HashSetIPKNS_12RenderObjectENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEE(i3, 0);
 __ZN7WebCore11RenderLayer24updateLayerListsIfNeededEv(i3);
 if (__ZNK7WebCore11RenderLayer48isFlowThreadCollectingGraphicsLayersUnderRegionsEv(i3) | 0) {
  i21 = i3 + 23 | 0;
  i22 = ((__ZNK7WebCore16RenderFlowThread30hasCompositingRegionDescendantEv(HEAP32[i3 + 32 >> 2] | 0) | 0) & 1) << 1;
  HEAP8[i21] = HEAP8[i21] & -3 | i22;
  __ZN7WebCore11RenderLayer35updateDescendantsLayerListsIfNeededEb(i3, 1);
  STACKTOP = i8;
  return;
 }
 i22 = (i4 | 0) != 0;
 if (i22) {
  __ZN7WebCore17RenderGeometryMap22pushMappingsToAncestorEPKNS_11RenderLayerES3_(i4 + 32 | 0, i3, i2);
 }
 i21 = i3 + 23 | 0;
 HEAP8[i21] = HEAP8[i21] & -3;
 i23 = i5 + 4 | 0;
 i24 = HEAP8[i23] & 1;
 HEAP8[i10] = 0;
 i25 = i11;
 _memset(i25 | 0, 0, 16) | 0;
 L8 : do {
  if (i22) {
   if ((HEAP32[i4 + 24 >> 2] | 0) == 0) {
    i26 = i24;
    break;
   }
   if ((HEAP8[i5 + 5 | 0] & 1) == 0) {
    i26 = i24;
    break;
   }
   i27 = i4 + 32 | 0;
   i28 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0;
   do {
    if ((HEAP32[i28 + 12 >> 2] | 0) == 0) {
     i29 = 11;
    } else {
     if (!(__ZNK7WebCore16FilterOperations24hasFilterThatMovesPixelsEv(i28 + 4 | 0) | 0)) {
      i29 = 11;
      break;
     }
     __ZNK7WebCore11RenderLayer20calculateLayerBoundsEPKS0_PKNS_11LayoutPointEj(i17, i3, i3, 0, 71);
    }
   } while (0);
   if ((i29 | 0) == 11) {
    __ZNK7WebCore11RenderLayer16localBoundingBoxEj(i17, i3, 0);
   }
   d30 = +(HEAP32[i17 + 8 >> 2] | 0);
   d31 = +(HEAP32[i17 + 12 >> 2] | 0);
   d32 = +(+(HEAP32[i17 >> 2] | 0));
   d33 = +(+(HEAP32[i17 + 4 >> 2] | 0));
   HEAPF32[i15 >> 2] = d32;
   HEAPF32[i15 + 4 >> 2] = d33;
   i28 = i14 + 8 | 0;
   d33 = +d30;
   d30 = +d31;
   HEAPF32[i28 >> 2] = d33;
   HEAPF32[i28 + 4 >> 2] = d30;
   __ZNK7WebCore17RenderGeometryMap14mapToContainerERKNS_9FloatRectEPKNS_22RenderLayerModelObjectE(i9, i27, i16, 0);
   __ZNK7WebCore9FloatQuad11boundingBoxEv(i13, i9);
   __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i12, i13);
   i28 = i12;
   HEAP32[i25 >> 2] = HEAP32[i28 >> 2];
   HEAP32[i25 + 4 >> 2] = HEAP32[i28 + 4 >> 2];
   HEAP32[i25 + 8 >> 2] = HEAP32[i28 + 8 >> 2];
   HEAP32[i25 + 12 >> 2] = HEAP32[i28 + 12 >> 2];
   if ((HEAP32[i11 + 8 >> 2] | 0) < 1) {
    i29 = 14;
   } else {
    if ((HEAP32[i11 + 12 >> 2] | 0) < 1) {
     i29 = 14;
    }
   }
   if ((i29 | 0) == 14) {
    i28 = i11 + 8 | 0;
    HEAP32[i28 >> 2] = 1;
    HEAP32[i28 + 4 >> 2] = 1;
   }
   HEAP8[i10] = 1;
   i28 = _llvm_uadd_with_overflow_i32(HEAP32[i4 + 8 >> 2] | 0, -1 | 0) | 0;
   if (!tempRet0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i34 = i28;
   i28 = HEAP32[i4 >> 2] | 0;
   i35 = i28 + (i34 * 28 & -1) + 8 | 0;
   if ((HEAP32[i35 >> 2] | 0) == 0) {
    i26 = 0;
    break;
   }
   if (!(__ZNK7WebCore7IntRect10intersectsERKS0_(i28 + (i34 * 28 & -1) + 12 | 0, i11) | 0)) {
    i26 = 0;
    break;
   }
   i36 = i28 + (i34 * 28 & -1) | 0;
   i34 = 0;
   while (1) {
    if (i34 >>> 0 >= (HEAP32[i35 >> 2] | 0) >>> 0) {
     i26 = 0;
     break L8;
    }
    if (__ZNK7WebCore7IntRect10intersectsERKS0_((HEAP32[i36 >> 2] | 0) + (i34 << 4) | 0, i11) | 0) {
     i26 = 2;
     break;
    } else {
     i34 = i34 + 1 | 0;
    }
   }
  } else {
   i26 = i24;
  }
 } while (0);
 i24 = i3 + 20 | 0;
 i25 = i24;
 i12 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = i12 & -469762049 | i26 << 26 & 469762048;
 i26 = i18 | 0;
 HEAP32[i26 >> 2] = HEAP32[i5 >> 2];
 i13 = i18 + 4 | 0;
 i9 = i18 + 5 | 0;
 i16 = i5 + 5 | 0;
 HEAP8[i9] = HEAP8[i16] & 1;
 HEAP8[i13] = 0;
 i5 = i1 + 72 | 0;
 L32 : do {
  if ((HEAP8[i5] & 1) == 0) {
   i37 = 0;
   i38 = 0;
  } else {
   if ((i12 & 32 | 0) == 0) {
    i37 = 0;
    i38 = 0;
    break;
   }
   i14 = i3 + 32 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   if ((HEAP32[i15 + 20 >> 2] & 805306368 | 0) != 0) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 248 >> 2] & 7](i15 | 0) | 0) {
     i37 = 0;
     i38 = 0;
     break;
    }
    if ((HEAP32[(HEAP32[i14 >> 2] | 0) + 20 >> 2] & 805306368 | 0) != 268435456) {
     i37 = 0;
     i38 = 0;
     break;
    }
   }
   do {
    if (__ZNK7WebCore21RenderLayerCompositor24requiresCompositingLayerERKNS_11RenderLayerEPNS1_38ViewportConstrainedNotCompositedReasonE(i1, i3, 0) | 0) {
     i39 = 1;
    } else {
     if ((HEAP32[i25 >> 2] & 469762048 | 0) != 0) {
      i39 = 1;
      break;
     }
     if ((HEAP8[i1 + 88 | 0] & 1) == 0) {
      i37 = 0;
      i38 = 0;
      break L32;
     }
     i14 = HEAP8[i3 + 21 | 0] & 16;
     i15 = (i14 & 255) >>> 4;
     if (i14 << 24 >> 24 == 0) {
      i37 = 0;
      i38 = i15;
      break L32;
     } else {
      i39 = i15;
     }
    }
   } while (0);
   HEAP8[i23] = 1;
   HEAP32[i26 >> 2] = i3;
   if (i22) {
    __ZN7WebCore21RenderLayerCompositor10OverlapMap24pushCompositingContainerEv(i4);
   }
   HEAP8[i9] = 1;
   i37 = 1;
   i38 = i39;
  }
 } while (0);
 HEAP8[i19] = 0;
 i39 = i3 + 32 | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i39 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
   i29 = 37;
  } else {
   if ((HEAP8[i3 + 21 | 0] & 16) != 0) {
    i29 = 37;
    break;
   }
   if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i3) | 0) {
    i29 = 37;
   } else {
    i40 = i37;
   }
  }
 } while (0);
 do {
  if ((i29 | 0) == 37) {
   i12 = HEAP32[i3 + 140 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i40 = i37;
    break;
   }
   i15 = i12 + 8 | 0;
   i14 = HEAP32[i15 >> 2] | 0;
   i17 = i38 & 1;
   L54 : do {
    if ((i14 | 0) == 0) {
     i41 = i17;
    } else {
     i34 = i12 | 0;
     if (i22) {
      i36 = 0;
      i35 = i38;
      i27 = i17;
      i28 = i14;
      while (1) {
       if (i28 >>> 0 <= i36 >>> 0) {
        break;
       }
       __ZN7WebCore21RenderLayerCompositor30computeCompositingRequirementsEPNS_11RenderLayerERS1_PNS0_10OverlapMapERNS_16CompositingStateERbS8_(i1, i3, HEAP32[(HEAP32[i34 >> 2] | 0) + (i36 << 2) >> 2] | 0, i4, i18, i6, i19);
       do {
        if (i27 << 24 >> 24 == 0) {
         if ((HEAP8[i13] & 1) == 0) {
          i42 = i35;
          break;
         }
         HEAP32[i25 >> 2] = HEAP32[i25 >> 2] & -469762049 | 201326592;
         HEAP32[i26 >> 2] = i3;
         __ZN7WebCore21RenderLayerCompositor10OverlapMap24pushCompositingContainerEv(i4);
         HEAP8[i9] = 1;
         i42 = 1;
        } else {
         i42 = i35;
        }
       } while (0);
       i43 = i36 + 1 | 0;
       i44 = i42 & 1;
       if (i43 >>> 0 >= i14 >>> 0) {
        i41 = i44;
        break L54;
       }
       i36 = i43;
       i35 = i42;
       i27 = i44;
       i28 = HEAP32[i15 >> 2] | 0;
      }
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else {
      i28 = 0;
      i27 = i38;
      i35 = i17;
      i36 = i14;
      while (1) {
       if (i36 >>> 0 <= i28 >>> 0) {
        break;
       }
       __ZN7WebCore21RenderLayerCompositor30computeCompositingRequirementsEPNS_11RenderLayerERS1_PNS0_10OverlapMapERNS_16CompositingStateERbS8_(i1, i3, HEAP32[(HEAP32[i34 >> 2] | 0) + (i28 << 2) >> 2] | 0, 0, i18, i6, i19);
       do {
        if (i35 << 24 >> 24 == 0) {
         if ((HEAP8[i13] & 1) == 0) {
          i45 = i27;
          break;
         }
         HEAP32[i25 >> 2] = HEAP32[i25 >> 2] & -469762049 | 201326592;
         HEAP32[i26 >> 2] = i3;
         HEAP8[i9] = 1;
         i45 = 1;
        } else {
         i45 = i27;
        }
       } while (0);
       i44 = i28 + 1 | 0;
       i43 = i45 & 1;
       if (i44 >>> 0 >= i14 >>> 0) {
        i41 = i43;
        break L54;
       }
       i28 = i44;
       i27 = i45;
       i35 = i43;
       i36 = HEAP32[i15 >> 2] | 0;
      }
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    }
   } while (0);
   i40 = i41 << 24 >> 24 != 0;
  }
 } while (0);
 i41 = HEAP32[i39 >> 2] | 0;
 do {
  if ((HEAP32[i41 + 24 >> 2] & 32 | 0) != 0) {
   i45 = HEAP32[i41 + 100 >> 2] | 0;
   if ((i45 | 0) == 0) {
    break;
   }
   if ((HEAP32[i45 + 28 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore21RenderLayerCompositor36computeRegionCompositingRequirementsEPNS_23RenderNamedFlowFragmentEPNS0_10OverlapMapERNS_16CompositingStateERbS7_(i1, HEAP32[i45 + 28 >> 2] | 0, i4, i18, i6, i19);
  }
 } while (0);
 i41 = HEAP32[i3 + 144 >> 2] | 0;
 L82 : do {
  if ((i41 | 0) != 0) {
   i45 = i41 + 8 | 0;
   i38 = HEAP32[i45 >> 2] | 0;
   if ((i38 | 0) == 0) {
    break;
   }
   i42 = i41 | 0;
   i37 = 0;
   i15 = i38;
   while (1) {
    if (i15 >>> 0 <= i37 >>> 0) {
     break;
    }
    __ZN7WebCore21RenderLayerCompositor30computeCompositingRequirementsEPNS_11RenderLayerERS1_PNS0_10OverlapMapERNS_16CompositingStateERbS8_(i1, i3, HEAP32[(HEAP32[i42 >> 2] | 0) + (i37 << 2) >> 2] | 0, i4, i18, i6, i19);
    i14 = i37 + 1 | 0;
    if (i14 >>> 0 >= i38 >>> 0) {
     break L82;
    }
    i37 = i14;
    i15 = HEAP32[i45 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i39 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
   i29 = 68;
  } else {
   if ((HEAP8[i3 + 21 | 0] & 16) != 0) {
    i29 = 68;
    break;
   }
   if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i3) | 0) {
    i29 = 68;
   }
  }
 } while (0);
 L94 : do {
  if ((i29 | 0) == 68) {
   i41 = HEAP32[i3 + 136 >> 2] | 0;
   if ((i41 | 0) == 0) {
    break;
   }
   i45 = i41 + 8 | 0;
   i15 = HEAP32[i45 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i37 = i41 | 0;
   i41 = 0;
   i38 = i15;
   while (1) {
    if (i38 >>> 0 <= i41 >>> 0) {
     break;
    }
    __ZN7WebCore21RenderLayerCompositor30computeCompositingRequirementsEPNS_11RenderLayerERS1_PNS0_10OverlapMapERNS_16CompositingStateERbS8_(i1, i3, HEAP32[(HEAP32[i37 >> 2] | 0) + (i41 << 2) >> 2] | 0, i4, i18, i6, i19);
    i42 = i41 + 1 | 0;
    if (i42 >>> 0 >= i15 >>> 0) {
     break L94;
    }
    i41 = i42;
    i38 = HEAP32[i45 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i18 = i3 + 21 | 0;
 do {
  if ((HEAP8[i18] & 16) == 0) {
   i46 = i40;
  } else {
   if ((HEAP8[i1 + 88 | 0] & 1) == 0) {
    i46 = i40;
    break;
   }
   i46 = i40 | (HEAP8[i5] & 1) != 0;
  }
 } while (0);
 do {
  if (i22) {
   i40 = HEAP32[i26 >> 2] | 0;
   if ((i40 | 0) == 0) {
    break;
   }
   if ((HEAP8[i40 + 21 | 0] & 16) != 0) {
    break;
   }
   __ZN7WebCore21RenderLayerCompositor15addToOverlapMapERNS0_10OverlapMapERNS_11RenderLayerERNS_7IntRectERb(i1, i4, i3, i11, i10);
  }
 } while (0);
 do {
  if (i46) {
   i47 = 1;
  } else {
   if ((HEAP8[i5] & 1) == 0) {
    i47 = 0;
    break;
   }
   if ((HEAP8[i24] & 32) == 0) {
    i47 = 0;
    break;
   }
   i10 = HEAP32[i39 >> 2] | 0;
   if ((HEAP32[i10 + 20 >> 2] & 805306368 | 0) == 0) {
    i48 = i10;
   } else {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 248 >> 2] & 7](i10 | 0) | 0) {
     i47 = 0;
     break;
    }
    i10 = HEAP32[i39 >> 2] | 0;
    if ((HEAP32[i10 + 20 >> 2] & 805306368 | 0) == 268435456) {
     i48 = i10;
    } else {
     i47 = 0;
     break;
    }
   }
   if (!(__ZNK7WebCore21RenderLayerCompositor36requiresCompositingForIndirectReasonERNS_22RenderLayerModelObjectEbbRNS_11RenderLayer25IndirectCompositingReasonE(0, i48, (HEAP8[i13] & 1) != 0, (HEAP8[i19] & 1) != 0, i20) | 0)) {
    i47 = 0;
    break;
   }
   HEAP32[i25 >> 2] = HEAP32[i25 >> 2] & -469762049 | HEAP32[i20 >> 2] << 26 & 469762048;
   HEAP32[i26 >> 2] = i3;
   if (!i22) {
    i47 = 1;
    break;
   }
   __ZN7WebCore21RenderLayerCompositor10OverlapMap24pushCompositingContainerEv(i4);
   __ZN7WebCore21RenderLayerCompositor24addToOverlapMapRecursiveERNS0_10OverlapMapERNS_11RenderLayerEPS3_(i1, i4, i3, 0);
   i47 = 1;
  }
 } while (0);
 if ((__ZNK7WebCore11RenderLayer15reflectionLayerEv(i3) | 0) != 0) {
  i20 = (__ZNK7WebCore11RenderLayer15reflectionLayerEv(i3) | 0) + 20 | 0;
  HEAP32[i20 >> 2] = HEAP32[i20 >> 2] & -469762049 | (i47 & 1) << 26;
 }
 i20 = HEAP8[i13] | 0;
 if ((i20 & 1) != 0) {
  HEAP8[i23] = 1;
 }
 i23 = HEAP8[i21] & -3 | i20 << 1 & 2;
 HEAP8[i21] = i23;
 do {
  if ((HEAP8[i5] & 1) == 0) {
   i49 = 0;
   i29 = 105;
  } else {
   if ((HEAP8[i24] & 32) == 0) {
    i49 = 0;
    i29 = 105;
    break;
   }
   i20 = HEAP32[i39 >> 2] | 0;
   i25 = HEAP32[i20 + 20 >> 2] | 0;
   if ((i25 & 805306368 | 0) == 0) {
    i50 = i20;
    i51 = i25;
    i52 = i23;
   } else {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 248 >> 2] & 7](i20 | 0) | 0) {
     i49 = 0;
     i29 = 105;
     break;
    }
    i20 = HEAP32[i39 >> 2] | 0;
    i25 = HEAP32[i20 + 20 >> 2] | 0;
    if ((i25 & 805306368 | 0) != 268435456) {
     i49 = 0;
     i29 = 105;
     break;
    }
    i50 = i20;
    i51 = i25;
    i52 = HEAP8[i21] | 0;
   }
   if ((i52 & 2) == 0) {
    i49 = 0;
    i29 = 105;
    break;
   }
   if ((i51 & 25165824 | 0) == 16777216) {
    if ((HEAP8[(HEAP32[(HEAP32[i50 + 36 >> 2] | 0) + 8 >> 2] | 0) + 36 | 0] & 1) != 0) {
     i53 = 1;
     i54 = i50;
     i29 = 107;
     break;
    }
   }
   i49 = (i51 & 65536 | 0) != 0;
   i29 = 105;
  }
 } while (0);
 do {
  if ((i29 | 0) == 105) {
   if (!((HEAP8[i9] & 1) != 0 | i49)) {
    i55 = 0;
    i29 = 109;
    break;
   }
   i53 = i49;
   i54 = HEAP32[i39 >> 2] | 0;
   i29 = 107;
  }
 } while (0);
 do {
  if ((i29 | 0) == 107) {
   if ((HEAP32[i1 + 76 >> 2] & 16 | 0) == 0) {
    i56 = i53;
    break;
   }
   if (__ZNK7WebCore19AnimationController28isRunningAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb(__ZNK7WebCore12RenderObject9animationEv(i54 | 0) | 0, i54 | 0, 345, 1) | 0) {
    i55 = i53;
    i29 = 109;
   } else {
    i56 = i53;
   }
  }
 } while (0);
 if ((i29 | 0) == 109) {
  HEAP8[i16] = 0;
  i56 = i55;
 }
 do {
  if (i47 | i56 ^ 1) {
   if (i22) {
    i57 = i47;
    i29 = 114;
   } else {
    i58 = i47;
   }
  } else {
   HEAP32[i26 >> 2] = i3;
   if (!i22) {
    i58 = 1;
    break;
   }
   __ZN7WebCore21RenderLayerCompositor10OverlapMap24pushCompositingContainerEv(i4);
   __ZN7WebCore21RenderLayerCompositor24addToOverlapMapRecursiveERNS0_10OverlapMapERNS_11RenderLayerEPS3_(i1, i4, i3, 0);
   i57 = 1;
   i29 = 114;
  }
 } while (0);
 do {
  if ((i29 | 0) == 114) {
   if ((HEAP32[i26 >> 2] | 0) != (i3 | 0)) {
    i58 = i57;
    break;
   }
   if ((HEAP8[i18] & 16) != 0) {
    i58 = i57;
    break;
   }
   __ZN7WebCore21RenderLayerCompositor10OverlapMap23popCompositingContainerEv(i4);
   i58 = i57;
  }
 } while (0);
 do {
  if ((HEAP8[i18] & 16) == 0) {
   i29 = 124;
  } else {
   if ((HEAP8[i13] & 1) != 0) {
    i29 = 124;
    break;
   }
   if (__ZNK7WebCore21RenderLayerCompositor24requiresCompositingLayerERKNS_11RenderLayerEPNS1_38ViewportConstrainedNotCompositedReasonE(i1, i3, 0) | 0) {
    i29 = 124;
    break;
   }
   if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
    i29 = 124;
    break;
   }
   if ((HEAP32[i1 + 80 >> 2] | 0) > ((HEAP32[i3 + 208 >> 2] | 0) != 0 | 0)) {
    i29 = 124;
    break;
   }
   i57 = i1 + 88 | 0;
   if ((HEAP8[i57] & 1) == 0) {
    break;
   }
   HEAP8[i57] = 0;
   __ZN7WebCore21RenderLayerCompositor16destroyRootLayerEv(i1);
  }
 } while (0);
 do {
  if ((i29 | 0) == 124) {
   if ((HEAP32[i3 + 208 >> 2] | 0) != 0 | i58 ^ 1) {
    break;
   }
   i13 = HEAP32[i39 >> 2] | 0;
   i18 = i1 + 8 | 0;
   if ((i13 | 0) != (HEAP32[i18 >> 2] | 0)) {
    if ((HEAP32[i13 + 8 >> 2] | 0) == 0) {
     break;
    }
   }
   i57 = __ZNK7WebCore12RenderObject19containerForRepaintEv(i13 | 0) | 0;
   if ((i57 | 0) == 0) {
    i59 = HEAP32[i18 >> 2] | 0;
   } else {
    i59 = i57;
   }
   __ZN7WebCore11RenderLayer41repaintIncludingNonCompositingDescendantsEPNS_22RenderLayerModelObjectE(i3, i59);
   i57 = HEAP32[i18 >> 2] | 0;
   if ((i59 | 0) != (i57 | 0)) {
    break;
   }
   __ZN7WebCore9FrameView37setNeedsOneShotDrawingSynchronizationEv(HEAP32[i57 + 116 >> 2] | 0);
  }
 } while (0);
 if (__ZN7WebCore21RenderLayerCompositor13updateBackingERNS_11RenderLayerENS0_24CompositingChangeRepaintE(i1, i3, 0) | 0) {
  HEAP8[i6] = 1;
 }
 do {
  if ((__ZNK7WebCore11RenderLayer15reflectionLayerEv(i3) | 0) != 0) {
   i59 = __ZNK7WebCore11RenderLayer15reflectionLayerEv(i3) | 0;
   i39 = __ZN7WebCore21RenderLayerCompositor13updateBackingERNS_11RenderLayerENS0_24CompositingChangeRepaintE(i1, i59, 0) | 0;
   i58 = HEAP32[i59 + 208 >> 2] | 0;
   if ((i58 | 0) == 0) {
    if (!i39) {
     break;
    }
   } else {
    if (!(__ZN7WebCore18RenderLayerBacking32updateGraphicsLayerConfigurationEv(i58) | 0 | i39)) {
     break;
    }
   }
   HEAP8[i6] = 1;
  }
 } while (0);
 do {
  if ((HEAP8[i19] & 1) == 0) {
   i6 = HEAP32[i3 + 172 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i60 = 0;
    break;
   }
   if (+HEAPF64[i6 + 16 >> 3] != +0) {
    i60 = 1;
    break;
   }
   if (+HEAPF64[i6 + 24 >> 3] != +0) {
    i60 = 1;
    break;
   }
   if (+HEAPF64[i6 + 48 >> 3] != +0) {
    i60 = 1;
    break;
   }
   if (+HEAPF64[i6 + 56 >> 3] != +0) {
    i60 = 1;
    break;
   }
   if (+HEAPF64[i6 + 64 >> 3] != +0) {
    i60 = 1;
    break;
   }
   if (+HEAPF64[i6 + 72 >> 3] != +0) {
    i60 = 1;
    break;
   }
   if (+HEAPF64[i6 + 80 >> 3] != +1) {
    i60 = 1;
    break;
   }
   if (+HEAPF64[i6 + 88 >> 3] != +0) {
    i60 = 1;
    break;
   }
   if (+HEAPF64[i6 + 112 >> 3] != +0) {
    i60 = 1;
    break;
   }
   i60 = +HEAPF64[i6 + 120 >> 3] != +1 | 0;
  } else {
   i60 = 1;
  }
 } while (0);
 HEAP8[i7] = HEAP8[i7] & 1 | i60;
 if (!i22) {
  STACKTOP = i8;
  return;
 }
 __ZN7WebCore17RenderGeometryMap21popMappingsToAncestorEPKNS_11RenderLayerE(i4 + 32 | 0, i2);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore21RenderLayerCompositor28updateOverflowControlsLayersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i7 + 116 >> 2] | 0;
 do {
  if ((HEAP32[i8 + 12 >> 2] | 0) == 0) {
   i9 = HEAP32[i7 + 40 >> 2] | 0;
   do {
    if ((i9 | 0) == 0) {
     i10 = 5;
    } else {
     i11 = HEAP32[i9 + 208 >> 2] | 0;
     if ((i11 | 0) == 0) {
      i10 = 5;
      break;
     }
     if ((HEAP8[i11 + 90 | 0] & 1) == 0) {
      i10 = 5;
     } else {
      i12 = i8;
     }
    }
   } while (0);
   if ((i10 | 0) == 5) {
    if (!(__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(i8 + 36 | 0) | 0)) {
     i10 = 7;
     break;
    }
    i12 = HEAP32[(HEAP32[i6 >> 2] | 0) + 116 >> 2] | 0;
   }
   i9 = i1 + 156 | 0;
   i11 = HEAP32[i9 >> 2] | 0;
   i13 = (i11 | 0) == 0;
   if ((HEAP32[i12 + 56 >> 2] | 0) == 0) {
    if (i13) {
     break;
    } else {
     i14 = i11;
     i15 = i9;
     i10 = 20;
     break;
    }
   }
   if (!i13) {
    break;
   }
   i13 = HEAP32[(HEAP32[i12 + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i16 = 0;
   } else {
    i11 = HEAP32[(HEAP32[i13 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 296 >> 2] & 7](i11) | 0;
   }
   __ZN7WebCore13GraphicsLayer6createEPNS_20GraphicsLayerFactoryEPNS_19GraphicsLayerClientE(i3, i16, i1 | 0);
   i11 = i3 | 0;
   i13 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   i17 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i13;
   do {
    if ((i17 | 0) == 0) {
     HEAP32[i11 >> 2] = 0;
    } else {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 31](i17);
     i13 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 31](i13);
    }
   } while (0);
   i11 = HEAP32[i9 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 212 >> 2] & 31](i11, (HEAP8[i1 + 84 | 0] & 1) != 0);
   i11 = HEAP32[i1 + 152 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 24 >> 2] & 31](i11, HEAP32[i9 >> 2] | 0);
   i11 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i17 = __ZN7WebCore4Page20scrollingCoordinatorEv(i11) | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   i11 = HEAP32[(HEAP32[i6 >> 2] | 0) + 116 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i17 >> 2] | 0) + 88 >> 2] & 7](i17, (i11 | 0) == 0 ? 0 : i11 + 36 | 0, 0);
  } else {
   i10 = 7;
  }
 } while (0);
 if ((i10 | 0) == 7) {
  i3 = i1 + 156 | 0;
  i16 = HEAP32[i3 >> 2] | 0;
  if ((i16 | 0) != 0) {
   i14 = i16;
   i15 = i3;
   i10 = 20;
  }
 }
 do {
  if ((i10 | 0) == 20) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 44 >> 2] & 31](i14);
   i3 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i3 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
   }
   i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i16 = __ZN7WebCore4Page20scrollingCoordinatorEv(i3) | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   i3 = HEAP32[(HEAP32[i6 >> 2] | 0) + 116 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i16 >> 2] | 0) + 88 >> 2] & 7](i16, (i3 | 0) == 0 ? 0 : i3 + 36 | 0, 0);
  }
 } while (0);
 i15 = HEAP32[i6 >> 2] | 0;
 i14 = HEAP32[i15 + 116 >> 2] | 0;
 do {
  if ((HEAP32[i14 + 12 >> 2] | 0) == 0) {
   i3 = HEAP32[i15 + 40 >> 2] | 0;
   do {
    if ((i3 | 0) == 0) {
     i10 = 29;
    } else {
     i16 = HEAP32[i3 + 208 >> 2] | 0;
     if ((i16 | 0) == 0) {
      i10 = 29;
      break;
     }
     if ((HEAP8[i16 + 90 | 0] & 1) == 0) {
      i10 = 29;
     } else {
      i18 = i14;
     }
    }
   } while (0);
   if ((i10 | 0) == 29) {
    if (!(__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(i14 + 36 | 0) | 0)) {
     i10 = 31;
     break;
    }
    i18 = HEAP32[(HEAP32[i6 >> 2] | 0) + 116 >> 2] | 0;
   }
   i3 = i1 + 160 | 0;
   i9 = HEAP32[i3 >> 2] | 0;
   i16 = (i9 | 0) == 0;
   if ((HEAP32[i18 + 60 >> 2] | 0) == 0) {
    if (i16) {
     break;
    } else {
     i19 = i9;
     i20 = i3;
     i10 = 44;
     break;
    }
   }
   if (!i16) {
    break;
   }
   i16 = HEAP32[(HEAP32[i18 + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i21 = 0;
   } else {
    i9 = HEAP32[(HEAP32[i16 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i21 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 296 >> 2] & 7](i9) | 0;
   }
   __ZN7WebCore13GraphicsLayer6createEPNS_20GraphicsLayerFactoryEPNS_19GraphicsLayerClientE(i4, i21, i1 | 0);
   i9 = i4 | 0;
   i16 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i12 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i16;
   do {
    if ((i12 | 0) == 0) {
     HEAP32[i9 >> 2] = 0;
    } else {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
     i16 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 31](i16);
    }
   } while (0);
   i9 = HEAP32[i3 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 212 >> 2] & 31](i9, (HEAP8[i1 + 84 | 0] & 1) != 0);
   i9 = HEAP32[i1 + 152 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 24 >> 2] & 31](i9, HEAP32[i3 >> 2] | 0);
   i9 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i12 = __ZN7WebCore4Page20scrollingCoordinatorEv(i9) | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i9 = HEAP32[(HEAP32[i6 >> 2] | 0) + 116 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i12 >> 2] | 0) + 88 >> 2] & 7](i12, (i9 | 0) == 0 ? 0 : i9 + 36 | 0, 1);
  } else {
   i10 = 31;
  }
 } while (0);
 if ((i10 | 0) == 31) {
  i4 = i1 + 160 | 0;
  i21 = HEAP32[i4 >> 2] | 0;
  if ((i21 | 0) != 0) {
   i19 = i21;
   i20 = i4;
   i10 = 44;
  }
 }
 do {
  if ((i10 | 0) == 44) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 44 >> 2] & 31](i19);
   i4 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   if ((i4 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
   }
   i4 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i21 = __ZN7WebCore4Page20scrollingCoordinatorEv(i4) | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   i4 = HEAP32[(HEAP32[i6 >> 2] | 0) + 116 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i21 >> 2] | 0) + 88 >> 2] & 7](i21, (i4 | 0) == 0 ? 0 : i4 + 36 | 0, 1);
  }
 } while (0);
 i20 = HEAP32[i6 >> 2] | 0;
 i19 = HEAP32[i20 + 116 >> 2] | 0;
 do {
  if ((HEAP32[i19 + 12 >> 2] | 0) == 0) {
   i4 = HEAP32[i20 + 40 >> 2] | 0;
   do {
    if ((i4 | 0) == 0) {
     i10 = 53;
    } else {
     i21 = HEAP32[i4 + 208 >> 2] | 0;
     if ((i21 | 0) == 0) {
      i10 = 53;
      break;
     }
     if ((HEAP8[i21 + 90 | 0] & 1) == 0) {
      i10 = 53;
     } else {
      i22 = i19;
     }
    }
   } while (0);
   if ((i10 | 0) == 53) {
    if (!(__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(i19 + 36 | 0) | 0)) {
     i10 = 55;
     break;
    }
    i22 = HEAP32[(HEAP32[i6 >> 2] | 0) + 116 >> 2] | 0;
   }
   i4 = __ZNK7WebCore10ScrollView21isScrollCornerVisibleEv(i22 | 0) | 0;
   i3 = i1 + 164 | 0;
   i21 = HEAP32[i3 >> 2] | 0;
   i18 = (i21 | 0) == 0;
   if (!i4) {
    if (!i18) {
     i23 = i21;
     i24 = i3;
     break;
    }
    i25 = HEAP32[i6 >> 2] | 0;
    i26 = i25 + 116 | 0;
    i27 = HEAP32[i26 >> 2] | 0;
    i28 = i27 | 0;
    __ZN7WebCore10ScrollView23positionScrollbarLayersEv(i28);
    STACKTOP = i2;
    return;
   }
   if (!i18) {
    i25 = HEAP32[i6 >> 2] | 0;
    i26 = i25 + 116 | 0;
    i27 = HEAP32[i26 >> 2] | 0;
    i28 = i27 | 0;
    __ZN7WebCore10ScrollView23positionScrollbarLayersEv(i28);
    STACKTOP = i2;
    return;
   }
   i18 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i29 = 0;
   } else {
    i21 = HEAP32[(HEAP32[i18 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i29 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 296 >> 2] & 7](i21) | 0;
   }
   __ZN7WebCore13GraphicsLayer6createEPNS_20GraphicsLayerFactoryEPNS_19GraphicsLayerClientE(i5, i29, i1 | 0);
   i21 = i5 | 0;
   i18 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   i4 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i18;
   do {
    if ((i4 | 0) == 0) {
     HEAP32[i21 >> 2] = 0;
    } else {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
     i18 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = 0;
     if ((i18 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 31](i18);
    }
   } while (0);
   i21 = HEAP32[i3 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 212 >> 2] & 31](i21, (HEAP8[i1 + 84 | 0] & 1) != 0);
   i21 = HEAP32[i1 + 152 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 24 >> 2] & 31](i21, HEAP32[i3 >> 2] | 0);
   i25 = HEAP32[i6 >> 2] | 0;
   i26 = i25 + 116 | 0;
   i27 = HEAP32[i26 >> 2] | 0;
   i28 = i27 | 0;
   __ZN7WebCore10ScrollView23positionScrollbarLayersEv(i28);
   STACKTOP = i2;
   return;
  } else {
   i10 = 55;
  }
 } while (0);
 do {
  if ((i10 | 0) == 55) {
   i5 = i1 + 164 | 0;
   i29 = HEAP32[i5 >> 2] | 0;
   if ((i29 | 0) != 0) {
    i23 = i29;
    i24 = i5;
    break;
   }
   i25 = HEAP32[i6 >> 2] | 0;
   i26 = i25 + 116 | 0;
   i27 = HEAP32[i26 >> 2] | 0;
   i28 = i27 | 0;
   __ZN7WebCore10ScrollView23positionScrollbarLayersEv(i28);
   STACKTOP = i2;
   return;
  }
 } while (0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 44 >> 2] & 31](i23);
 i23 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 if ((i23 | 0) == 0) {
  i25 = HEAP32[i6 >> 2] | 0;
  i26 = i25 + 116 | 0;
  i27 = HEAP32[i26 >> 2] | 0;
  i28 = i27 | 0;
  __ZN7WebCore10ScrollView23positionScrollbarLayersEv(i28);
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 31](i23);
 i25 = HEAP32[i6 >> 2] | 0;
 i26 = i25 + 116 | 0;
 i27 = HEAP32[i26 >> 2] | 0;
 i28 = i27 | 0;
 __ZN7WebCore10ScrollView23positionScrollbarLayersEv(i28);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore21RenderLayerCompositor27rebuildCompositingLayerTreeERNS_11RenderLayerERN3WTF6VectorIPNS_13GraphicsLayerELj0ENS3_15CrashOnOverflowEEEi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 if (__ZNK7WebCore11RenderLayer48isFlowThreadCollectingGraphicsLayersUnderRegionsEv(i2) | 0) {
  STACKTOP = i5;
  return;
 }
 i9 = HEAP32[i2 + 208 >> 2] | 0;
 i10 = (i9 | 0) != 0;
 do {
  if (i10) {
   __ZN7WebCore18RenderLayerBacking22updateCompositedBoundsEv(i9);
   i11 = __ZNK7WebCore11RenderLayer15reflectionLayerEv(i2) | 0;
   do {
    if ((i11 | 0) != 0) {
     i12 = HEAP32[i11 + 208 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     __ZN7WebCore18RenderLayerBacking22updateCompositedBoundsEv(i12);
    }
   } while (0);
   if (__ZN7WebCore18RenderLayerBacking32updateGraphicsLayerConfigurationEv(i9) | 0) {
    __ZN7WebCore18RenderLayerBacking21updateDebugIndicatorsEbb(i9, (HEAP8[i1 + 84 | 0] & 1) != 0, (HEAP8[i1 + 85 | 0] & 1) != 0);
   }
   __ZN7WebCore18RenderLayerBacking27updateGraphicsLayerGeometryEv(i9);
   if ((HEAP32[i2 + 36 >> 2] | 0) == 0) {
    __ZN7WebCore21RenderLayerCompositor23updateRootLayerPositionEv(i1);
   }
   if (!(__ZNK7WebCore18RenderLayerBacking37hasUnpositionedOverflowControlsLayersEv(i9) | 0)) {
    break;
   }
   __ZN7WebCore11RenderLayer36positionNewlyCreatedOverflowControlsEv(i2);
  }
 } while (0);
 i11 = i6 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i6 + 4 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i6 + 8 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i10 ? i6 : i3;
 i15 = i2 + 32 | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
   i16 = 15;
  } else {
   if ((HEAP8[i2 + 21 | 0] & 16) != 0) {
    i16 = 15;
    break;
   }
   if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i2) | 0) {
    i16 = 15;
   }
  }
 } while (0);
 do {
  if ((i16 | 0) == 15) {
   i17 = HEAP32[i2 + 140 >> 2] | 0;
   L23 : do {
    if ((i17 | 0) != 0) {
     i18 = i17 + 8 | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     i20 = i17 | 0;
     i21 = i4 + 1 | 0;
     i22 = 0;
     i23 = i19;
     while (1) {
      if (i23 >>> 0 <= i22 >>> 0) {
       break;
      }
      __ZN7WebCore21RenderLayerCompositor27rebuildCompositingLayerTreeERNS_11RenderLayerERN3WTF6VectorIPNS_13GraphicsLayerELj0ENS3_15CrashOnOverflowEEEi(i1, HEAP32[(HEAP32[i20 >> 2] | 0) + (i22 << 2) >> 2] | 0, i14, i21);
      i24 = i22 + 1 | 0;
      if (i24 >>> 0 >= i19 >>> 0) {
       break L23;
      }
      i22 = i24;
      i23 = HEAP32[i18 >> 2] | 0;
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   } while (0);
   if (!i10) {
    break;
   }
   i17 = HEAP32[i9 + 20 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   HEAP32[i7 >> 2] = i17;
   i18 = i14 + 8 | 0;
   i23 = HEAP32[i18 >> 2] | 0;
   if ((i23 | 0) != (HEAP32[i14 + 4 >> 2] | 0)) {
    HEAP32[(HEAP32[i14 >> 2] | 0) + (i23 << 2) >> 2] = i17;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
    break;
   }
   i17 = i23 + 1 | 0;
   i22 = i14 | 0;
   i19 = HEAP32[i22 >> 2] | 0;
   do {
    if (i19 >>> 0 > i7 >>> 0) {
     i16 = 28;
    } else {
     if ((i19 + (i23 << 2) | 0) >>> 0 <= i7 >>> 0) {
      i16 = 28;
      break;
     }
     __ZN3WTF6VectorIPN7WebCore13GraphicsLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i14, i17);
     i21 = HEAP32[i22 >> 2] | 0;
     i25 = i21 + (i7 - i19 >> 2 << 2) | 0;
     i26 = i21;
    }
   } while (0);
   if ((i16 | 0) == 28) {
    __ZN3WTF6VectorIPN7WebCore13GraphicsLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i14, i17);
    i25 = i7;
    i26 = HEAP32[i22 >> 2] | 0;
   }
   HEAP32[i26 + (HEAP32[i18 >> 2] << 2) >> 2] = HEAP32[i25 >> 2];
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
  }
 } while (0);
 i25 = HEAP32[i15 >> 2] | 0;
 L44 : do {
  if ((HEAP32[i25 + 24 >> 2] & 32 | 0) != 0) {
   i26 = HEAP32[i25 + 100 >> 2] | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   if ((HEAP32[i26 + 28 >> 2] | 0) == 0) {
    break;
   }
   i7 = HEAP32[i26 + 28 >> 2] | 0;
   if ((HEAP8[i7 + 160 | 0] & 1) == 0) {
    break;
   }
   i26 = __ZN7WebCore16RenderFlowThread21getLayerListForRegionEPNS_23RenderNamedFlowFragmentE(HEAP32[i7 + 116 >> 2] | 0, i7) | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   i7 = i26 + 8 | 0;
   i19 = HEAP32[i7 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i23 = i26 | 0;
   i26 = i4 + 2 | 0;
   i21 = 0;
   i20 = i19;
   while (1) {
    if (i20 >>> 0 <= i21 >>> 0) {
     break;
    }
    __ZN7WebCore21RenderLayerCompositor27rebuildCompositingLayerTreeERNS_11RenderLayerERN3WTF6VectorIPNS_13GraphicsLayerELj0ENS3_15CrashOnOverflowEEEi(i1, HEAP32[(HEAP32[i23 >> 2] | 0) + (i21 << 2) >> 2] | 0, i6, i26);
    i24 = i21 + 1 | 0;
    if (i24 >>> 0 >= i19 >>> 0) {
     break L44;
    }
    i21 = i24;
    i20 = HEAP32[i7 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i25 = HEAP32[i2 + 144 >> 2] | 0;
 L57 : do {
  if ((i25 | 0) != 0) {
   i7 = i25 + 8 | 0;
   i20 = HEAP32[i7 >> 2] | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   i21 = i25 | 0;
   i19 = i4 + 1 | 0;
   i26 = 0;
   i23 = i20;
   while (1) {
    if (i23 >>> 0 <= i26 >>> 0) {
     break;
    }
    __ZN7WebCore21RenderLayerCompositor27rebuildCompositingLayerTreeERNS_11RenderLayerERN3WTF6VectorIPNS_13GraphicsLayerELj0ENS3_15CrashOnOverflowEEEi(i1, HEAP32[(HEAP32[i21 >> 2] | 0) + (i26 << 2) >> 2] | 0, i14, i19);
    i18 = i26 + 1 | 0;
    if (i18 >>> 0 >= i20 >>> 0) {
     break L57;
    }
    i26 = i18;
    i23 = HEAP32[i7 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
   i16 = 52;
  } else {
   if ((HEAP8[i2 + 21 | 0] & 16) != 0) {
    i16 = 52;
    break;
   }
   if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i2) | 0) {
    i16 = 52;
   }
  }
 } while (0);
 L69 : do {
  if ((i16 | 0) == 52) {
   i25 = HEAP32[i2 + 136 >> 2] | 0;
   if ((i25 | 0) == 0) {
    break;
   }
   i7 = i25 + 8 | 0;
   i23 = HEAP32[i7 >> 2] | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   i26 = i25 | 0;
   i25 = i4 + 1 | 0;
   i20 = 0;
   i19 = i23;
   while (1) {
    if (i19 >>> 0 <= i20 >>> 0) {
     break;
    }
    __ZN7WebCore21RenderLayerCompositor27rebuildCompositingLayerTreeERNS_11RenderLayerERN3WTF6VectorIPNS_13GraphicsLayerELj0ENS3_15CrashOnOverflowEEEi(i1, HEAP32[(HEAP32[i26 >> 2] | 0) + (i20 << 2) >> 2] | 0, i14, i25);
    i21 = i20 + 1 | 0;
    if (i21 >>> 0 >= i23 >>> 0) {
     break L69;
    }
    i20 = i21;
    i19 = HEAP32[i7 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 do {
  if (i10) {
   i14 = HEAP32[i15 >> 2] | 0;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 228 >> 2] & 7](i14 | 0) | 0) {
    if (!(__ZN7WebCore21RenderLayerCompositor24parentFrameContentLayersEPNS_12RenderWidgetE(HEAP32[i15 >> 2] | 0) | 0)) {
     i16 = 62;
    }
   } else {
    i16 = 62;
   }
   if ((i16 | 0) == 62) {
    i14 = __ZNK7WebCore18RenderLayerBacking18parentForSublayersEv(i9) | 0;
    FUNCTION_TABLE_iii[HEAP32[(HEAP32[i14 >> 2] | 0) + 20 >> 2] & 7](i14, i6) | 0;
   }
   if ((HEAP32[i9 + 28 >> 2] | 0) == 0) {
    i16 = 65;
   } else {
    if ((HEAP8[i9 + 90 | 0] & 1) != 0) {
     i16 = 65;
    }
   }
   do {
    if ((i16 | 0) == 65) {
     if ((HEAP32[i9 + 48 >> 2] | 0) != 0) {
      break;
     }
     i14 = HEAP32[i9 + 36 >> 2] | 0;
     if ((i14 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 44 >> 2] & 31](i14);
      i1 = __ZNK7WebCore18RenderLayerBacking18parentForSublayersEv(i9) | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 31](i1, i14);
     }
     i14 = HEAP32[i9 + 40 >> 2] | 0;
     if ((i14 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 44 >> 2] & 31](i14);
      i1 = __ZNK7WebCore18RenderLayerBacking18parentForSublayersEv(i9) | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 31](i1, i14);
     }
     i14 = HEAP32[i9 + 44 >> 2] | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 44 >> 2] & 31](i14);
     i1 = __ZNK7WebCore18RenderLayerBacking18parentForSublayersEv(i9) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 31](i1, i14);
    }
   } while (0);
   i14 = __ZNK7WebCore18RenderLayerBacking19childForSuperlayersEv(i9) | 0;
   HEAP32[i8 >> 2] = i14;
   i1 = i3 + 8 | 0;
   i4 = HEAP32[i1 >> 2] | 0;
   if ((i4 | 0) != (HEAP32[i3 + 4 >> 2] | 0)) {
    HEAP32[(HEAP32[i3 >> 2] | 0) + (i4 << 2) >> 2] = i14;
    HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
    break;
   }
   i14 = i4 + 1 | 0;
   i2 = i3 | 0;
   i7 = HEAP32[i2 >> 2] | 0;
   do {
    if (i7 >>> 0 > i8 >>> 0) {
     i16 = 76;
    } else {
     if ((i7 + (i4 << 2) | 0) >>> 0 <= i8 >>> 0) {
      i16 = 76;
      break;
     }
     __ZN3WTF6VectorIPN7WebCore13GraphicsLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i14);
     i19 = HEAP32[i2 >> 2] | 0;
     i27 = i19 + (i8 - i7 >> 2 << 2) | 0;
     i28 = i19;
    }
   } while (0);
   if ((i16 | 0) == 76) {
    __ZN3WTF6VectorIPN7WebCore13GraphicsLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i14);
    i27 = i8;
    i28 = HEAP32[i2 >> 2] | 0;
   }
   HEAP32[i28 + (HEAP32[i1 >> 2] << 2) >> 2] = HEAP32[i27 >> 2];
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  }
 } while (0);
 if ((HEAP32[i13 >> 2] | 0) != 0) {
  HEAP32[i13 >> 2] = 0;
 }
 i13 = HEAP32[i11 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i11 >> 2] = 0;
 HEAP32[i12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore21RenderLayerCompositor15ensureRootLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, d26 = +0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 48 | 0;
 i9 = i2 + 56 | 0;
 i10 = i2 + 72 | 0;
 i11 = i2 + 80 | 0;
 i12 = i2 + 88 | 0;
 i13 = i2 + 96 | 0;
 i14 = i2 + 104 | 0;
 i15 = i1 + 8 | 0;
 i16 = (__ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) != 0;
 i17 = i16 ? 2 : 1;
 i18 = i1 + 100 | 0;
 if ((i17 | 0) == (HEAP32[i18 >> 2] | 0)) {
  STACKTOP = i2;
  return;
 }
 i19 = i1 + 12 | 0;
 if ((HEAP32[i19 >> 2] | 0) == 0) {
  i20 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
  if ((i20 | 0) == 0) {
   i21 = 0;
  } else {
   i22 = HEAP32[(HEAP32[i20 + 20 >> 2] | 0) + 8 >> 2] | 0;
   i21 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 296 >> 2] & 7](i22) | 0;
  }
  __ZN7WebCore13GraphicsLayer6createEPNS_20GraphicsLayerFactoryEPNS_19GraphicsLayerClientE(i8, i21, i1 | 0);
  i21 = i8 | 0;
  i8 = HEAP32[i21 >> 2] | 0;
  HEAP32[i21 >> 2] = 0;
  i22 = HEAP32[i19 >> 2] | 0;
  HEAP32[i19 >> 2] = i8;
  do {
   if ((i22 | 0) == 0) {
    HEAP32[i21 >> 2] = 0;
   } else {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 31](i22);
    i8 = HEAP32[i21 >> 2] | 0;
    HEAP32[i21 >> 2] = 0;
    if ((i8 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
   }
  } while (0);
  i21 = HEAP32[i15 >> 2] | 0;
  i22 = i7;
  i8 = i21 | 0;
  i20 = HEAP32[i21 + 88 >> 2] | 0;
  if ((i20 | 0) == 0) {
   i23 = i21 | 0;
   i24 = i21;
   i21 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 744 >> 2] & 7](i23) | 0;
   i25 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 736 >> 2] & 7](i23) | 0;
   __ZNK7WebCore9RenderBox11clientWidthEv(i5, i8);
   __ZNK7WebCore9RenderBox12clientHeightEv(i6, i8);
   i8 = HEAP32[i5 >> 2] | 0;
   i5 = HEAP32[i6 >> 2] | 0;
   HEAP32[i7 >> 2] = i21;
   HEAP32[i7 + 4 >> 2] = i25;
   HEAP32[i7 + 8 >> 2] = i8;
   HEAP32[i7 + 12 >> 2] = i5;
  } else {
   i5 = i20 + 4 | 0;
   HEAP32[i22 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i22 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
   HEAP32[i22 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
   HEAP32[i22 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
  }
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i9, i7);
  i7 = HEAP32[i19 >> 2] | 0;
  i5 = HEAP32[(HEAP32[i7 >> 2] | 0) + 68 >> 2] | 0;
  d26 = +((HEAP32[i9 + 12 >> 2] | 0) + (HEAP32[i9 + 4 >> 2] | 0) | 0);
  HEAPF32[i10 >> 2] = +((HEAP32[i9 + 8 >> 2] | 0) + (HEAP32[i9 >> 2] | 0) | 0);
  HEAPF32[i10 + 4 >> 2] = d26;
  FUNCTION_TABLE_vii[i5 & 31](i7, i10);
  i10 = HEAP32[i19 >> 2] | 0;
  i7 = HEAP32[(HEAP32[i10 >> 2] | 0) + 56 >> 2] | 0;
  HEAPF32[i11 >> 2] = +0;
  HEAPF32[i11 + 4 >> 2] = +0;
  FUNCTION_TABLE_vii[i7 & 31](i10, i11);
  i11 = HEAP32[i19 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 88 >> 2] & 31](i11, 1);
 }
 i11 = HEAP32[(HEAP32[i15 >> 2] | 0) + 116 >> 2] | 0;
 do {
  if ((HEAP8[i11 + 172 | 0] & 1) == 0) {
   i10 = i1 + 152 | 0;
   i7 = HEAP32[i10 >> 2] | 0;
   if (!((HEAP32[i11 + 12 >> 2] | 0) == 0 | i16)) {
    i27 = i10;
    i28 = i7;
    i29 = 41;
    break;
   }
   if ((i7 | 0) != 0) {
    break;
   }
   i7 = HEAP32[(HEAP32[i11 + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i30 = 0;
   } else {
    i5 = HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i30 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 296 >> 2] & 7](i5) | 0;
   }
   i5 = i1 | 0;
   __ZN7WebCore13GraphicsLayer6createEPNS_20GraphicsLayerFactoryEPNS_19GraphicsLayerClientE(i12, i30, i5);
   i7 = i12 | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   i22 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i9;
   do {
    if ((i22 | 0) == 0) {
     HEAP32[i7 >> 2] = 0;
    } else {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 31](i22);
     i9 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
    }
   } while (0);
   i7 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i31 = 0;
   } else {
    i22 = HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i31 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 296 >> 2] & 7](i22) | 0;
   }
   __ZN7WebCore13GraphicsLayer6createEPNS_20GraphicsLayerFactoryEPNS_19GraphicsLayerClientE(i13, i31, i5);
   i22 = i13 | 0;
   i7 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = 0;
   i9 = i1 + 104 | 0;
   i20 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i7;
   do {
    if ((i20 | 0) == 0) {
     HEAP32[i22 >> 2] = 0;
    } else {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 31](i20);
     i7 = HEAP32[i22 >> 2] | 0;
     HEAP32[i22 >> 2] = 0;
     if ((i7 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
    }
   } while (0);
   i22 = HEAP32[i9 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i22 >> 2] | 0) + 88 >> 2] & 31](i22, 1);
   i22 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i22 | 0) == 0) {
    i32 = 0;
   } else {
    i20 = HEAP32[(HEAP32[i22 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i32 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 296 >> 2] & 7](i20) | 0;
   }
   __ZN7WebCore13GraphicsLayer6createEPNS_20GraphicsLayerFactoryEPNS_19GraphicsLayerClientE(i14, i32, i5);
   i20 = i14 | 0;
   i22 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   i7 = i1 + 108 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i22;
   do {
    if ((i8 | 0) == 0) {
     HEAP32[i20 >> 2] = 0;
    } else {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
     i22 = HEAP32[i20 >> 2] | 0;
     HEAP32[i20 >> 2] = 0;
     if ((i22 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 31](i22);
    }
   } while (0);
   i20 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i8 = __ZN7WebCore4Page20scrollingCoordinatorEv(i20) | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i8 >> 2] | 0) + 92 >> 2] & 7](i8, HEAP32[i7 >> 2] | 0, 1);
    }
   } while (0);
   i20 = HEAP32[i10 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 24 >> 2] & 31](i20, HEAP32[i9 >> 2] | 0);
   i20 = HEAP32[i9 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 24 >> 2] & 31](i20, HEAP32[i7 >> 2] | 0);
   i20 = HEAP32[i7 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 24 >> 2] & 31](i20, HEAP32[i19 >> 2] | 0);
   i20 = HEAP32[i9 >> 2] | 0;
   if ((i20 | 0) != 0) {
    i8 = HEAP32[(HEAP32[i20 >> 2] | 0) + 68 >> 2] | 0;
    __ZNK7WebCore10ScrollView26unscaledVisibleContentSizeENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i4, HEAP32[(HEAP32[i15 >> 2] | 0) + 116 >> 2] | 0, 0);
    __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i3, i4);
    FUNCTION_TABLE_vii[i8 & 31](i20, i3);
    __ZN7WebCore21RenderLayerCompositor18frameViewDidScrollEv(i1);
    __ZN7WebCore21RenderLayerCompositor28updateOverflowControlsLayersEv(i1);
   }
   __ZN7WebCore21RenderLayerCompositor18frameViewDidScrollEv(i1);
  } else {
   i20 = i1 + 152 | 0;
   i27 = i20;
   i28 = HEAP32[i20 >> 2] | 0;
   i29 = 41;
  }
 } while (0);
 do {
  if ((i29 | 0) == 41) {
   if ((i28 | 0) == 0) {
    break;
   }
   HEAP32[i27 >> 2] = 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 31](i28);
   i3 = i1 + 104 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   if ((i4 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
   }
   i4 = i1 + 108 | 0;
   i3 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
  }
 } while (0);
 if ((HEAP32[i18 >> 2] | 0) != 0) {
  __ZN7WebCore21RenderLayerCompositor15detachRootLayerEv(i1);
 }
 __ZN7WebCore21RenderLayerCompositor15attachRootLayerENS0_19RootLayerAttachmentE(i1, i17);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore21RenderLayerCompositor13updateBackingERNS_11RenderLayerENS0_24CompositingChangeRepaintE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 L1 : do {
  if ((HEAP8[i1 + 72 | 0] & 1) == 0) {
   i6 = 31;
  } else {
   i7 = i2 + 20 | 0;
   if ((HEAP8[i7] & 32) == 0) {
    i6 = 31;
    break;
   }
   i8 = i2 + 32 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if ((HEAP32[i9 + 20 >> 2] & 805306368 | 0) != 0) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 248 >> 2] & 7](i9 | 0) | 0) {
     i6 = 31;
     break;
    }
    if ((HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] & 805306368 | 0) != 268435456) {
     i6 = 31;
     break;
    }
   }
   do {
    if (!(__ZNK7WebCore21RenderLayerCompositor24requiresCompositingLayerERKNS_11RenderLayerEPNS1_38ViewportConstrainedNotCompositedReasonE(i1, i2, i5) | 0)) {
     if ((HEAP32[i7 >> 2] & 469762048 | 0) != 0) {
      break;
     }
     if ((HEAP8[i1 + 88 | 0] & 1) == 0) {
      i6 = 31;
      break L1;
     }
     if ((HEAP8[i2 + 21 | 0] & 16) == 0) {
      i6 = 31;
      break L1;
     }
    }
   } while (0);
   i7 = i1 + 88 | 0;
   if ((HEAP8[i7] & 1) == 0) {
    HEAP8[i7] = 1;
    __ZN7WebCore21RenderLayerCompositor15ensureRootLayerEv(i1);
    __ZN7WebCore21RenderLayerCompositor32notifyIFramesOfCompositingChangeEv(i1);
   }
   i7 = i2 + 208 | 0;
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    i10 = 0;
    i11 = i8;
    break;
   }
   do {
    if ((i3 | 0) == 0) {
     i9 = HEAP32[i8 >> 2] | 0;
     i12 = i1 + 8 | 0;
     if ((i9 | 0) != (HEAP32[i12 >> 2] | 0)) {
      if ((HEAP32[i9 + 8 >> 2] | 0) == 0) {
       break;
      }
     }
     i13 = __ZNK7WebCore12RenderObject19containerForRepaintEv(i9 | 0) | 0;
     if ((i13 | 0) == 0) {
      i14 = HEAP32[i12 >> 2] | 0;
     } else {
      i14 = i13;
     }
     __ZN7WebCore11RenderLayer41repaintIncludingNonCompositingDescendantsEPNS_22RenderLayerModelObjectE(i2, i14);
     i13 = HEAP32[i12 >> 2] | 0;
     if ((i14 | 0) != (i13 | 0)) {
      break;
     }
     __ZN7WebCore9FrameView37setNeedsOneShotDrawingSynchronizationEv(HEAP32[i13 + 116 >> 2] | 0);
    }
   } while (0);
   __ZN7WebCore11RenderLayer13ensureBackingEv(i2) | 0;
   do {
    if ((HEAP8[i2 + 21 | 0] & 16) != 0) {
     i8 = i1 + 8 | 0;
     if ((__ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) != 0) {
      break;
     }
     __ZN7WebCore18RenderLayerBacking38attachToScrollingCoordinatorWithParentEPS0_(HEAP32[i7 >> 2] | 0, 0);
     i13 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
     do {
      if ((i13 | 0) != 0) {
       i12 = __ZN7WebCore4Page20scrollingCoordinatorEv(i13) | 0;
       if ((i12 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 24 >> 2] & 31](i12, HEAP32[(HEAP32[i8 >> 2] | 0) + 116 >> 2] | 0);
      }
     } while (0);
     i13 = HEAP32[(HEAP32[i8 >> 2] | 0) + 40 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     i12 = HEAP32[i13 + 208 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     if (!(__ZNK7WebCore18RenderLayerBacking21tiledBackingHasMarginEv(i12) | 0)) {
      break;
     }
     i12 = HEAP32[i1 + 12 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 88 >> 2] & 31](i12, 0);
    }
   } while (0);
   if ((HEAP32[i2 + 36 >> 2] | 0) == 0) {
    i6 = 42;
    break;
   }
   __ZN7WebCore11RenderLayer39computeRepaintRectsIncludingDescendantsEv(i2);
   i6 = 42;
  }
 } while (0);
 do {
  if ((i6 | 0) == 31) {
   i14 = i2 + 32 | 0;
   if ((HEAP32[i2 + 208 >> 2] | 0) == 0) {
    i10 = 0;
    i11 = i14;
    break;
   }
   i7 = HEAP32[i14 >> 2] | 0;
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 156 >> 2] & 7](i7 | 0) | 0) {
     i12 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] | 0) + 40 >> 2] | 0) + 208 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     i13 = HEAP32[i12 + 16 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 52 >> 2] & 31](i13, 0);
    }
   } while (0);
   __ZN7WebCore21RenderLayerCompositor30removeViewportConstrainedLayerERNS_11RenderLayerE(i1, i2);
   __ZN7WebCore11RenderLayer12clearBackingEb(i2, 0);
   __ZN7WebCore11RenderLayer39computeRepaintRectsIncludingDescendantsEv(i2);
   if ((i3 | 0) != 0) {
    i6 = 42;
    break;
   }
   i7 = HEAP32[i14 >> 2] | 0;
   i13 = i1 + 8 | 0;
   if ((i7 | 0) != (HEAP32[i13 >> 2] | 0)) {
    if ((HEAP32[i7 + 8 >> 2] | 0) == 0) {
     i6 = 42;
     break;
    }
   }
   i12 = __ZNK7WebCore12RenderObject19containerForRepaintEv(i7 | 0) | 0;
   if ((i12 | 0) == 0) {
    i15 = HEAP32[i13 >> 2] | 0;
   } else {
    i15 = i12;
   }
   __ZN7WebCore11RenderLayer41repaintIncludingNonCompositingDescendantsEPNS_22RenderLayerModelObjectE(i2, i15);
   i12 = HEAP32[i13 >> 2] | 0;
   if ((i15 | 0) != (i12 | 0)) {
    i6 = 42;
    break;
   }
   __ZN7WebCore9FrameView37setNeedsOneShotDrawingSynchronizationEv(HEAP32[i12 + 116 >> 2] | 0);
   i6 = 42;
  }
 } while (0);
 if ((i6 | 0) == 42) {
  i6 = i2 + 32 | 0;
  i15 = HEAP32[i6 >> 2] | 0;
  do {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 228 >> 2] & 7](i15 | 0) | 0) {
    i3 = __ZNK7WebCore21HTMLFrameOwnerElement15contentDocumentEv(HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] | 0) | 0;
    if ((i3 | 0) == 0) {
     break;
    }
    i12 = HEAP32[i3 + 1584 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    i3 = __ZN7WebCore10RenderView10compositorEv(i12) | 0;
    if ((i3 | 0) == 0) {
     break;
    }
    if ((HEAP8[i3 + 88 | 0] & 1) == 0) {
     break;
    }
    __ZN7WebCore21RenderLayerCompositor15ensureRootLayerEv(i3);
   }
  } while (0);
  __ZN7WebCore11RenderLayer34clearClipRectsIncludingDescendantsENS_13ClipRectsTypeE(i2, 0);
  i10 = 1;
  i11 = i6;
 }
 i6 = i2 + 20 | 0;
 i15 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 36 >> 2] | 0) + 48 >> 2] & 29360128 | 0) == 25165824) {
   i3 = HEAP32[i5 >> 2] | 0;
   if ((i15 >>> 29 & 3 | 0) == (i3 | 0)) {
    if (!i10) {
     i16 = 0;
     break;
    }
   } else {
    HEAP32[i6 >> 2] = i3 << 29 & 1610612736 | i15 & -1610612737;
   }
   i3 = i1 + 8 | 0;
   i12 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i16 = 1;
    break;
   }
   i13 = __ZN7WebCore4Page20scrollingCoordinatorEv(i12) | 0;
   if ((i13 | 0) == 0) {
    i16 = 1;
    break;
   }
   __ZN7WebCore20ScrollingCoordinator30frameViewFixedObjectsDidChangeEPNS_9FrameViewE(i13, HEAP32[(HEAP32[i3 >> 2] | 0) + 116 >> 2] | 0);
   i16 = 1;
  } else {
   HEAP32[i6 >> 2] = i15 & -1610612737;
   i16 = i10;
  }
 } while (0);
 i10 = HEAP32[i2 + 208 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return i16 | 0;
 }
 __ZN7WebCore18RenderLayerBacking21updateDebugIndicatorsEbb(i10, (HEAP8[i1 + 84 | 0] & 1) != 0, (HEAP8[i1 + 85 | 0] & 1) != 0);
 STACKTOP = i4;
 return i16 | 0;
}
function __ZN7WebCore21RenderLayerCompositor23updateCompositingLayersENS_21CompositingUpdateTypeEPNS_11RenderLayerE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 752 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 736 | 0;
 __ZN7WebCore9TimerBase4stopEv(i1 + 16 | 0);
 i10 = i1 + 8 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i11 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2053 | 0] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i11 + 20 >> 2] & 31 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 do {
  if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
   i11 = i1 + 88 | 0;
   if ((HEAP8[i11] & 1) != 0) {
    break;
   }
   HEAP8[i11] = 1;
   __ZN7WebCore21RenderLayerCompositor15ensureRootLayerEv(i1);
   __ZN7WebCore21RenderLayerCompositor32notifyIFramesOfCompositingChangeEv(i1);
  }
 } while (0);
 i11 = i1 + 87 | 0;
 i12 = HEAP8[i11] | 0;
 do {
  if ((i12 & 1) == 0) {
   if ((HEAP8[i1 + 88 | 0] & 1) != 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i13 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 476 >> 2] | 0;
 i14 = (i13 | 0) == 0;
 if (i14) {
  i15 = i12;
 } else {
  __ZN7WebCore19AnimationController20beginAnimationUpdateEv(i13);
  i15 = HEAP8[i11] | 0;
 }
 i12 = i1 + 93 | 0;
 i16 = HEAP8[i12] & 1;
 HEAP8[i12] = 1;
 i17 = (i15 & 1) != 0;
 switch (i2 | 0) {
 case 3:
  {
   i18 = 1;
   i19 = 1;
   i20 = 14;
   break;
  }
 case 0:
 case 1:
 case 2:
  {
   i18 = 1;
   i19 = 0;
   i20 = 14;
   break;
  }
 case 4:
  {
   i18 = i17;
   i19 = 1;
   i20 = 14;
   break;
  }
 default:
  {
   if (i17) {
    i18 = 1;
    i19 = 0;
    i20 = 14;
   }
  }
 }
 do {
  if ((i20 | 0) == 14) {
   i17 = i1 + 89 | 0;
   i15 = HEAP8[i17] | 0;
   i21 = (i3 | 0) == 0;
   HEAP8[i17] = 0;
   i17 = HEAP32[i10 >> 2] | 0;
   i22 = HEAP32[i17 + 40 >> 2] | 0;
   if (i21 & (i2 | 0) == 1) {
    HEAP8[i11] = 0;
   }
   do {
    if (i18) {
     do {
      if (i21) {
       if (!(__ZNK7WebCore10RenderView25hasRenderNamedFlowThreadsEv(i17) | 0)) {
        break;
       }
       __ZN7WebCore20FlowThreadController36updateRenderFlowThreadLayersIfNeededEv(__ZN7WebCore10RenderView20flowThreadControllerEv(HEAP32[i10 >> 2] | 0) | 0);
      }
     } while (0);
     HEAP32[i5 >> 2] = i22;
     HEAP8[i5 + 4 | 0] = 0;
     HEAP8[i5 + 5 | 0] = 1;
     HEAP8[i6] = 0;
     HEAP8[i7] = 0;
     i23 = i8 + 32 | 0;
     _memset(i8 | 0, 0, 32) | 0;
     __ZN7WebCore17RenderGeometryMapC1Ej(i23, 2);
     __ZN7WebCore21RenderLayerCompositor10OverlapMap24pushCompositingContainerEv(i8);
     __ZN7WebCore21RenderLayerCompositor30computeCompositingRequirementsEPNS_11RenderLayerERS1_PNS0_10OverlapMapERNS_16CompositingStateERbS8_(i1, 0, i22, i8, i5, i6, i7);
     i24 = HEAP8[i6] | i15;
     __ZN7WebCore17RenderGeometryMapD1Ev(i23);
     i23 = HEAP32[i8 + 12 >> 2] | 0;
     if ((i23 | 0) != 0) {
      __ZN3WTF8fastFreeEPv(i23);
     }
     i23 = i8 + 8 | 0;
     i25 = HEAP32[i23 >> 2] | 0;
     i26 = i8 | 0;
     if ((i25 | 0) != 0) {
      i27 = HEAP32[i26 >> 2] | 0;
      i28 = i27 + (i25 * 28 & -1) | 0;
      i25 = i27;
      while (1) {
       i27 = i25 + 8 | 0;
       if ((HEAP32[i27 >> 2] | 0) != 0) {
        HEAP32[i27 >> 2] = 0;
       }
       i27 = i25 | 0;
       i29 = HEAP32[i27 >> 2] | 0;
       if ((i29 | 0) != 0) {
        HEAP32[i27 >> 2] = 0;
        HEAP32[i25 + 4 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i29);
       }
       i25 = i25 + 28 | 0;
       if ((i25 | 0) == (i28 | 0)) {
        break;
       }
      }
      HEAP32[i23 >> 2] = 0;
     }
     i28 = HEAP32[i26 >> 2] | 0;
     if ((i28 | 0) == 0) {
      i30 = i24;
      break;
     }
     HEAP32[i26 >> 2] = 0;
     HEAP32[i8 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i28);
     i30 = i24;
    } else {
     i30 = i15;
    }
   } while (0);
   do {
    if ((i30 & 1) == 0) {
     if (!i19) {
      break;
     }
     __ZN7WebCore21RenderLayerCompositor23updateLayerTreeGeometryERNS_11RenderLayerEi(i1, i22, 0);
    } else {
     i15 = i9 | 0;
     HEAP32[i15 >> 2] = 0;
     i17 = i9 + 4 | 0;
     HEAP32[i17 >> 2] = 0;
     i28 = i9 + 8 | 0;
     HEAP32[i28 >> 2] = 0;
     __ZN7WebCore21RenderLayerCompositor27rebuildCompositingLayerTreeERNS_11RenderLayerERN3WTF6VectorIPNS_13GraphicsLayerELj0ENS3_15CrashOnOverflowEEEi(i1, i22, i9, 0);
     L52 : do {
      if (i21) {
       do {
        if ((HEAP32[i28 >> 2] | 0) == 0) {
         if ((HEAP32[i1 + 80 >> 2] | 0) > ((HEAP32[i22 + 208 >> 2] | 0) != 0 | 0)) {
          break;
         }
         __ZN7WebCore21RenderLayerCompositor16destroyRootLayerEv(i1);
         break L52;
        }
       } while (0);
       i25 = HEAP32[i1 + 12 >> 2] | 0;
       FUNCTION_TABLE_iii[HEAP32[(HEAP32[i25 >> 2] | 0) + 20 >> 2] & 7](i25, i9) | 0;
      }
     } while (0);
     if ((HEAP32[i28 >> 2] | 0) != 0) {
      HEAP32[i28 >> 2] = 0;
     }
     i24 = HEAP32[i15 >> 2] | 0;
     if ((i24 | 0) == 0) {
      break;
     }
     HEAP32[i15 >> 2] = 0;
     HEAP32[i17 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i24);
    }
   } while (0);
   do {
    if ((HEAP8[i1 + 72 | 0] & 1) == 0) {
     i22 = i1 + 88 | 0;
     if ((HEAP8[i22] & 1) == 0) {
      break;
     }
     HEAP8[i22] = 0;
     __ZN7WebCore21RenderLayerCompositor16destroyRootLayerEv(i1);
    }
   } while (0);
   i22 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[(HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0) | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation22layerTreeDidChangeImplEPNS_19InstrumentingAgentsE(i22);
  }
 } while (0);
 HEAP8[i12] = i16;
 if (i14) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore19AnimationController18endAnimationUpdateEv(i13);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore21RenderLayerCompositor30requiresCompositingForPositionERNS_22RenderLayerModelObjectERKNS_11RenderLayerEPNS3_38ViewportConstrainedNotCompositedReasonE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, d26 = +0, d27 = +0, d28 = +0, d29 = +0, d30 = +0, d31 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 48 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i15 = i14 | 0;
 i16 = i14;
 i17 = i2 | 0;
 i18 = i2 + 20 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 i20 = i19 & 25165824;
 if ((i20 | 0) == 0) {
  i21 = 0;
  STACKTOP = i5;
  return i21 | 0;
 }
 i22 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 22 & 7;
 i2 = (i20 | 0) == 16777216 & (i22 | 0) == 6;
 do {
  if (i2) {
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
    i23 = i19;
    break;
   }
   if ((HEAP8[i3 + 21 | 0] & 16) != 0) {
    i23 = i19;
    break;
   }
   if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i3) | 0) {
    i23 = HEAP32[i18 >> 2] | 0;
    break;
   } else {
    i21 = 0;
    STACKTOP = i5;
    return i21 | 0;
   }
  } else {
   i23 = i19;
  }
 } while (0);
 i19 = i23 & 25165824;
 i23 = ((i19 | 0) == 8388608 | (i19 | 0) == 25165824) & (i22 | 0) == 3;
 if (!(i2 | i23)) {
  i21 = 0;
  STACKTOP = i5;
  return i21 | 0;
 }
 i2 = i1 + 8 | 0;
 i22 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0;
 if ((HEAP8[(HEAP32[i22 + 36 >> 2] | 0) + 180 | 0] & 16) == 0) {
  i21 = 0;
  STACKTOP = i5;
  return i21 | 0;
 }
 if (i23) {
  i23 = HEAP32[i22 + 32 >> 2] | 0;
  if ((i23 | 0) == 0) {
   i21 = 0;
   STACKTOP = i5;
   return i21 | 0;
  }
  i22 = __ZN7WebCore4Page20scrollingCoordinatorEv(i23) | 0;
  if ((i22 | 0) == 0) {
   i21 = 0;
   STACKTOP = i5;
   return i21 | 0;
  }
  if (!(__ZNK7WebCore20ScrollingCoordinator32coordinatesScrollingForFrameViewEPNS_9FrameViewE(i22, HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] | 0) | 0)) {
   i21 = 0;
   STACKTOP = i5;
   return i21 | 0;
  }
  i22 = HEAP32[i3 + 32 >> 2] | 0;
  if ((HEAP32[i22 + 20 >> 2] & 25165824 | 0) == 25165824) {
   i21 = (__ZNK7WebCore11RenderLayer26enclosingOverflowClipLayerENS_16IncludeSelfOrNotE(i3, 1) | 0) == 0;
   STACKTOP = i5;
   return i21 | 0;
  }
  if ((HEAP32[(HEAP32[i22 + 36 >> 2] | 0) + 48 >> 2] & 29360128 | 0) != 25165824) {
   i21 = 0;
   STACKTOP = i5;
   return i21 | 0;
  }
  i22 = __ZNK7WebCore11RenderLayer17stackingContainerEv(i3) | 0;
  if ((i22 | 0) == 0) {
   i21 = 1;
   STACKTOP = i5;
   return i21 | 0;
  } else {
   i24 = i22;
  }
  while (1) {
   if ((HEAP32[i24 + 208 >> 2] | 0) != 0) {
    if ((HEAP32[(HEAP32[(HEAP32[i24 + 32 >> 2] | 0) + 36 >> 2] | 0) + 48 >> 2] & 29360128 | 0) == 25165824) {
     i21 = 0;
     i25 = 38;
     break;
    }
   }
   i22 = __ZNK7WebCore11RenderLayer17stackingContainerEv(i24) | 0;
   if ((i22 | 0) == 0) {
    i21 = 1;
    i25 = 46;
    break;
   } else {
    i24 = i22;
   }
  }
  if ((i25 | 0) == 46) {
   STACKTOP = i5;
   return i21 | 0;
  } else if ((i25 | 0) == 38) {
   STACKTOP = i5;
   return i21 | 0;
  }
 }
 i25 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i17, 0, 0) | 0;
 if ((i25 | 0) == 0) {
  HEAP8[i1 + 87 | 0] = 1;
  i21 = 0;
  STACKTOP = i5;
  return i21 | 0;
 }
 if ((i25 | 0) != (HEAP32[i2 >> 2] | 0)) {
  if ((i4 | 0) == 0) {
   i21 = 0;
   STACKTOP = i5;
   return i21 | 0;
  }
  HEAP32[i4 >> 2] = 2;
  i21 = 0;
  STACKTOP = i5;
  return i21 | 0;
 }
 if ((HEAP8[i1 + 93 | 0] & 1) == 0) {
  HEAP8[i1 + 87 | 0] = 1;
  i21 = (HEAP32[i3 + 208 >> 2] | 0) != 0;
  STACKTOP = i5;
  return i21 | 0;
 }
 do {
  if (!(__ZNK7WebCore11RenderLayer18isVisuallyNonEmptyEv(i3) | 0)) {
   if ((HEAP8[i3 + 22 | 0] & 32) != 0) {
    break;
   }
   if ((i4 | 0) == 0) {
    i21 = 0;
    STACKTOP = i5;
    return i21 | 0;
   }
   HEAP32[i4 >> 2] = 3;
   i21 = 0;
   STACKTOP = i5;
   return i21 | 0;
  }
 } while (0);
 __ZNK7WebCore9FrameView37viewportConstrainedVisibleContentRectEv(i6, HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] | 0);
 __ZNK7WebCore11RenderLayer20calculateLayerBoundsEPKS0_PKNS_11LayoutPointEj(i7, i3, i3, 0, 126);
 i1 = HEAP32[i3 + 32 >> 2] | 0;
 d26 = +(HEAP32[i7 >> 2] | 0);
 d27 = +(HEAP32[i7 + 4 >> 2] | 0);
 d28 = +(HEAP32[i7 + 8 >> 2] | 0);
 d29 = +(HEAP32[i7 + 12 >> 2] | 0);
 d30 = +d26;
 d31 = +d27;
 HEAPF32[i10 >> 2] = d30;
 HEAPF32[i10 + 4 >> 2] = d31;
 d31 = d26 + d28;
 HEAPF32[i9 + 8 >> 2] = d31;
 HEAPF32[i11 + 12 >> 2] = d27;
 d28 = d27 + d29;
 HEAPF32[i9 + 16 >> 2] = d31;
 HEAPF32[i11 + 20 >> 2] = d28;
 HEAPF32[i9 + 24 >> 2] = d26;
 HEAPF32[i11 + 28 >> 2] = d28;
 __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i12, i1, i11, HEAP32[i2 >> 2] | 0, 0, 0);
 __ZNK7WebCore9FloatQuad11boundingBoxEv(i8, i12);
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i16, i8);
 i8 = HEAP32[i15 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i13 + 4 >> 2] = i8;
 i8 = i14 + 8 | 0;
 i14 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i13 + 8 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i13 + 12 >> 2] = i14;
 if (__ZNK7WebCore10LayoutRect10intersectsERKS0_(i6, i13) | 0) {
  i21 = 1;
  STACKTOP = i5;
  return i21 | 0;
 }
 if ((i4 | 0) == 0) {
  i21 = 0;
  STACKTOP = i5;
  return i21 | 0;
 }
 HEAP32[i4 >> 2] = 1;
 i21 = 0;
 STACKTOP = i5;
 return i21 | 0;
}
function __ZNK7WebCore21RenderLayerCompositor21reasonsForCompositingERKNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 if ((HEAP32[i2 + 208 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 + 32 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 156 >> 2] & 7](i4 | 0) | 0) {
  i5 = HEAP32[i4 + 8 >> 2] | 0;
 } else {
  i5 = i4;
 }
 i4 = i1 + 76 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i2 & 1 | 0) == 0) {
   i6 = 0;
   i7 = i2;
  } else {
   if ((HEAP32[i5 + 20 >> 2] & 131072 | 0) == 0) {
    i6 = 0;
    i7 = i2;
    break;
   }
   i8 = HEAP32[(HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 20 >> 2] | 0) + 72 >> 2] | 0;
   i9 = i8 + 4 | 0;
   i10 = i8 + 12 | 0;
   i8 = 0;
   while (1) {
    if (i8 >>> 0 >= (HEAP32[i10 >> 2] | 0) >>> 0) {
     i11 = 0;
     break;
    }
    i12 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i8 << 2) >> 2] | 0;
    if (((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 24 >> 2] & 7](i12) | 0) - 11 | 0) >>> 0 < 9 >>> 0) {
     i11 = 1;
     break;
    } else {
     i8 = i8 + 1 | 0;
    }
   }
   i6 = i11;
   i7 = HEAP32[i4 >> 2] | 0;
  }
 } while (0);
 do {
  if ((i7 & 8 | 0) == 0) {
   i13 = 14;
  } else {
   i11 = i5 | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 232 >> 2] & 7](i11) | 0)) {
    i13 = 14;
    break;
   }
   if (((__ZN7WebCore25canvasCompositingStrategyERKNS_12RenderObjectE(i11) | 0) - 1 | 0) >>> 0 >= 2 >>> 0) {
    i13 = 14;
    break;
   }
   i14 = i6 | 4;
  }
 } while (0);
 do {
  if ((i13 | 0) == 14) {
   if (__ZNK7WebCore21RenderLayerCompositor28requiresCompositingForPluginERNS_22RenderLayerModelObjectE(i1, i5) | 0) {
    i14 = i6 | 8;
    break;
   } else {
    i7 = __ZNK7WebCore21RenderLayerCompositor27requiresCompositingForFrameERNS_22RenderLayerModelObjectE(i1, i5) | 0;
    i14 = i7 ? i6 | 16 : i6;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP8[i1 + 72 | 0] & 1) == 0) {
   i15 = i14;
  } else {
   if ((HEAP32[i4 >> 2] & 1 | 0) == 0) {
    i15 = i14;
    break;
   }
   i15 = (HEAP32[(HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 1024 | 0) != 0 ? i14 | 32 : i14;
  }
 } while (0);
 i14 = i5 + 40 | 0;
 i6 = HEAP32[i14 >> 2] | 0;
 do {
  if ((HEAP8[i6 + 23 | 0] & 2) == 0) {
   i16 = 0;
  } else {
   i7 = HEAP32[i6 + 32 >> 2] | 0;
   i11 = HEAP32[i7 + 20 >> 2] | 0;
   if ((i11 & 25165824 | 0) == 16777216) {
    if ((HEAP8[(HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 8 >> 2] | 0) + 36 | 0] & 1) != 0) {
     i16 = 1;
     break;
    }
   }
   i16 = (i11 & 65536 | 0) != 0;
  }
 } while (0);
 i6 = i16 ? i15 | 64 : i15;
 do {
  if ((HEAP32[i4 >> 2] & 16 | 0) == 0) {
   i17 = 0;
  } else {
   i15 = __ZNK7WebCore12RenderObject9animationEv(i5 | 0) | 0;
   i16 = i5 | 0;
   if (__ZNK7WebCore19AnimationController28isRunningAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb(i15, i16, 102, 1) | 0) {
    if ((HEAP8[i1 + 88 | 0] & 1) != 0) {
     i17 = 1;
     break;
    }
    if ((HEAP32[i4 >> 2] & 128 | 0) != 0) {
     i17 = 1;
     break;
    }
   }
   if (__ZNK7WebCore19AnimationController28isRunningAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb(i15, i16, 237, 1) | 0) {
    i17 = 1;
    break;
   }
   i17 = __ZNK7WebCore19AnimationController28isRunningAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb(i15, i16, 345, 1) | 0;
  }
 } while (0);
 i16 = i17 ? i6 | 128 : i6;
 if ((HEAP32[i4 >> 2] & 32 | 0) == 0) {
  i18 = 0;
 } else {
  i18 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0) + 12 >> 2] | 0) != 0;
 }
 i4 = i18 ? i16 | 256 : i16;
 if (__ZNK7WebCore21RenderLayerCompositor30requiresCompositingForPositionERNS_22RenderLayerModelObjectERKNS_11RenderLayerEPNS3_38ViewportConstrainedNotCompositedReasonE(i1, i5, HEAP32[i14 >> 2] | 0, 0) | 0) {
  i19 = ((HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 48 >> 2] & 29360128 | 0) == 25165824 ? 512 : 1024) | i4;
 } else {
  i19 = i4;
 }
 i4 = __ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(HEAP32[i14 >> 2] | 0) | 0;
 i16 = i4 ? i19 | 2048 : i19;
 i19 = HEAP32[i14 >> 2] | 0;
 i14 = (HEAP32[i19 + 20 >> 2] | 0) >>> 26 & 7;
 L49 : do {
  switch (i14 | 0) {
  case 5:
   {
    i20 = i16 | 2097152;
    break;
   }
  case 1:
   {
    i20 = i16 | 4096;
    break;
   }
  case 2:
   {
    i20 = i16 | 8192;
    break;
   }
  case 3:
   {
    i20 = i16 | 16384;
    break;
   }
  case 4:
   {
    i4 = (HEAP32[i19 + 172 >> 2] | 0) == 0 ? i16 : i16 | 32768;
    i18 = HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 20 >> 2] | 0;
    i6 = +HEAPF32[i18 + 4 >> 2] < +1 ? i4 | 65536 : i4;
    i4 = i18 + 116 | 0;
    while (1) {
     if ((HEAP32[i4 + 4 >> 2] | 0) != 0) {
      i21 = 1;
      break;
     }
     i17 = HEAP32[i4 >> 2] | 0;
     if ((i17 | 0) == 0) {
      i13 = 41;
      break;
     } else {
      i4 = i17;
     }
    }
    if ((i13 | 0) == 41) {
     i21 = (HEAP32[(HEAP32[i18 + 164 >> 2] | 0) + 8 >> 2] | 0) != 0;
    }
    i4 = i21 ? i6 | 131072 : i6;
    i17 = (HEAP32[i5 + 20 >> 2] & 262144 | 0) != 0 ? i4 | 262144 : i4;
    i4 = (HEAP32[(HEAP32[i18 + 76 >> 2] | 0) + 12 >> 2] | 0) != 0 ? i17 | 524288 : i17;
    if ((HEAP32[i18 + 296 >> 2] & 4063232 | 0) == 0) {
     i20 = i4;
     break L49;
    }
    i20 = i4 | 1048576;
    break;
   }
  default:
   {
    i20 = (i14 | 0) == 6 ? i16 | 4194304 : i16;
   }
  }
 } while (0);
 if ((HEAP8[i1 + 88 | 0] & 1) == 0) {
  i3 = i20;
  return i3 | 0;
 } else {
  return ((HEAP8[i19 + 21 | 0] & 16) != 0 ? i20 | 8388608 : i20) | 0;
 }
 return 0;
}
function __ZN7WebCore21RenderLayerCompositor21recursiveRepaintLayerERNS_11RenderLayerEPKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = HEAP32[i2 + 208 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   if ((HEAP8[i9 + 91 | 0] & 1) == 0) {
    break;
   }
   if ((i3 | 0) == 0) {
    __ZN7WebCore11RenderLayer22setBackingNeedsRepaintENS_13GraphicsLayer17ShouldClipToLayerE(i2, 1);
    break;
   } else {
    i10 = i3;
    i11 = HEAP32[i10 + 4 >> 2] | 0;
    HEAP32[i5 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i5 + 4 >> 2] = i11;
    i11 = i3 + 8 | 0;
    i10 = HEAP32[i11 + 4 >> 2] | 0;
    HEAP32[i5 + 8 >> 2] = HEAP32[i11 >> 2];
    HEAP32[i5 + 12 >> 2] = i10;
    __ZN7WebCore11RenderLayer28setBackingNeedsRepaintInRectERKNS_10LayoutRectE(i2, i5);
    break;
   }
  }
 } while (0);
 L8 : do {
  if ((HEAP8[i2 + 23 | 0] & 2) != 0) {
   i5 = HEAP32[i2 + 140 >> 2] | 0;
   L10 : do {
    if ((i5 | 0) != 0) {
     i9 = i5 + 8 | 0;
     i10 = HEAP32[i9 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     i11 = i5 | 0;
     i12 = (i3 | 0) == 0;
     i13 = i6;
     i14 = i3;
     i15 = 0;
     i16 = i10;
     while (1) {
      if (i16 >>> 0 <= i15 >>> 0) {
       break;
      }
      i17 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i15 << 2) >> 2] | 0;
      if (i12) {
       __ZN7WebCore21RenderLayerCompositor21recursiveRepaintLayerERNS_11RenderLayerEPKNS_7IntRectE(i1, i17, 0);
      } else {
       HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
       HEAP32[i13 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
       HEAP32[i13 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
       HEAP32[i13 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
       __ZNK7WebCore11RenderLayer32convertToPixelSnappedLayerCoordsEPKS0_RNS_7IntRectENS0_22ColumnOffsetAdjustmentE(i17, i2, i6, 0);
       __ZN7WebCore21RenderLayerCompositor21recursiveRepaintLayerERNS_11RenderLayerEPKNS_7IntRectE(i1, i17, i6);
      }
      i17 = i15 + 1 | 0;
      if (i17 >>> 0 >= i10 >>> 0) {
       break L10;
      }
      i15 = i17;
      i16 = HEAP32[i9 >> 2] | 0;
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   } while (0);
   i5 = HEAP32[i2 + 136 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i9 = i5 + 8 | 0;
   i16 = HEAP32[i9 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   i15 = i5 | 0;
   i5 = i7;
   i10 = i3;
   if ((i3 | 0) == 0) {
    i14 = 0;
    i13 = i16;
    while (1) {
     if (i13 >>> 0 <= i14 >>> 0) {
      break;
     }
     __ZN7WebCore21RenderLayerCompositor21recursiveRepaintLayerERNS_11RenderLayerEPKNS_7IntRectE(i1, HEAP32[(HEAP32[i15 >> 2] | 0) + (i14 << 2) >> 2] | 0, 0);
     i12 = i14 + 1 | 0;
     if (i12 >>> 0 >= i16 >>> 0) {
      break L8;
     }
     i14 = i12;
     i13 = HEAP32[i9 >> 2] | 0;
    }
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else {
    i13 = 0;
    i14 = i16;
    while (1) {
     if (i14 >>> 0 <= i13 >>> 0) {
      break;
     }
     i12 = HEAP32[(HEAP32[i15 >> 2] | 0) + (i13 << 2) >> 2] | 0;
     HEAP32[i5 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i5 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
     HEAP32[i5 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
     HEAP32[i5 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
     __ZNK7WebCore11RenderLayer32convertToPixelSnappedLayerCoordsEPKS0_RNS_7IntRectENS0_22ColumnOffsetAdjustmentE(i12, i2, i7, 0);
     __ZN7WebCore21RenderLayerCompositor21recursiveRepaintLayerERNS_11RenderLayerEPKNS_7IntRectE(i1, i12, i7);
     i12 = i13 + 1 | 0;
     if (i12 >>> 0 >= i16 >>> 0) {
      break L8;
     }
     i13 = i12;
     i14 = HEAP32[i9 >> 2] | 0;
    }
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 i7 = HEAP32[i2 + 144 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i7 + 8 | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i14 = i7 | 0;
 i7 = i8;
 i13 = i3;
 if ((i3 | 0) == 0) {
  i3 = 0;
  i16 = i9;
  while (1) {
   if (i16 >>> 0 <= i3 >>> 0) {
    i18 = 45;
    break;
   }
   __ZN7WebCore21RenderLayerCompositor21recursiveRepaintLayerERNS_11RenderLayerEPKNS_7IntRectE(i1, HEAP32[(HEAP32[i14 >> 2] | 0) + (i3 << 2) >> 2] | 0, 0);
   i10 = i3 + 1 | 0;
   if (i10 >>> 0 >= i9 >>> 0) {
    i18 = 43;
    break;
   }
   i3 = i10;
   i16 = HEAP32[i6 >> 2] | 0;
  }
  if ((i18 | 0) == 43) {
   STACKTOP = i4;
   return;
  } else if ((i18 | 0) == 45) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } else {
  i16 = 0;
  i3 = i9;
  while (1) {
   if (i3 >>> 0 <= i16 >>> 0) {
    i18 = 44;
    break;
   }
   i10 = HEAP32[(HEAP32[i14 >> 2] | 0) + (i16 << 2) >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i7 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
   HEAP32[i7 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
   HEAP32[i7 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
   __ZNK7WebCore11RenderLayer32convertToPixelSnappedLayerCoordsEPKS0_RNS_7IntRectENS0_22ColumnOffsetAdjustmentE(i10, i2, i8, 0);
   __ZN7WebCore21RenderLayerCompositor21recursiveRepaintLayerERNS_11RenderLayerEPKNS_7IntRectE(i1, i10, i8);
   i10 = i16 + 1 | 0;
   if (i10 >>> 0 >= i9 >>> 0) {
    i18 = 40;
    break;
   }
   i16 = i10;
   i3 = HEAP32[i6 >> 2] | 0;
  }
  if ((i18 | 0) == 44) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i18 | 0) == 40) {
   STACKTOP = i4;
   return;
  }
 }
}
function __ZN7WebCore21RenderLayerCompositor24addToOverlapMapRecursiveERNS0_10OverlapMapERNS_11RenderLayerEPS3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 if ((HEAP8[i1 + 72 | 0] & 1) == 0) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP8[i3 + 20 | 0] & 32) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = i3 + 32 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((HEAP32[i9 + 20 >> 2] & 805306368 | 0) != 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 248 >> 2] & 7](i9 | 0) | 0) {
    STACKTOP = i5;
    return;
   }
   if ((HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] & 805306368 | 0) == 268435456) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 i9 = HEAP32[i2 + 12 >> 2] | 0;
 L14 : do {
  if ((i9 | 0) != 0) {
   i10 = HEAP32[i2 + 20 >> 2] | 0;
   i11 = i3;
   i12 = i11 + ~(i11 << 15) | 0;
   i11 = (i12 >>> 10 ^ i12) * 9 & -1;
   i12 = i11 >>> 6 ^ i11;
   i11 = i12 + ~(i12 << 11) | 0;
   i12 = i11 >>> 16 ^ i11;
   i11 = i10 & i12;
   i13 = i9 + (i11 << 2) | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == (i3 | 0)) {
    i15 = i13;
   } else {
    i13 = (i12 >>> 23) + ~i12 | 0;
    i12 = i13 << 12 ^ i13;
    i13 = i12 >>> 7 ^ i12;
    i12 = i13 << 2 ^ i13;
    i13 = i12 >>> 20 ^ i12 | 1;
    i12 = 0;
    i16 = i11;
    i11 = i14;
    while (1) {
     if ((i11 | 0) == 0) {
      break L14;
     }
     i14 = (i12 | 0) == 0 ? i13 : i12;
     i17 = i14 + i16 & i10;
     i18 = i9 + (i17 << 2) | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     if ((i19 | 0) == (i3 | 0)) {
      i15 = i18;
      break;
     } else {
      i12 = i14;
      i16 = i17;
      i11 = i19;
     }
    }
   }
   if ((i15 | 0) == 0) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 i15 = (i4 | 0) != 0;
 if (i15) {
  __ZN7WebCore17RenderGeometryMap22pushMappingsToAncestorEPKNS_11RenderLayerES3_(i2 + 32 | 0, i3, i4);
 }
 _memset(i6 | 0, 0, 16) | 0;
 HEAP8[i7] = 0;
 __ZN7WebCore21RenderLayerCompositor15addToOverlapMapERNS0_10OverlapMapERNS_11RenderLayerERNS_7IntRectERb(i1, i2, i3, i6, i7);
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
   i20 = 17;
  } else {
   if ((HEAP8[i3 + 21 | 0] & 16) != 0) {
    i20 = 17;
    break;
   }
   if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i3) | 0) {
    i20 = 17;
   }
  }
 } while (0);
 L30 : do {
  if ((i20 | 0) == 17) {
   i7 = HEAP32[i3 + 140 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i6 = i7 + 8 | 0;
   i9 = HEAP32[i6 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i11 = i7 | 0;
   i7 = 0;
   i16 = i9;
   while (1) {
    if (i16 >>> 0 <= i7 >>> 0) {
     break;
    }
    __ZN7WebCore21RenderLayerCompositor24addToOverlapMapRecursiveERNS0_10OverlapMapERNS_11RenderLayerEPS3_(i1, i2, HEAP32[(HEAP32[i11 >> 2] | 0) + (i7 << 2) >> 2] | 0, i3);
    i12 = i7 + 1 | 0;
    if (i12 >>> 0 >= i9 >>> 0) {
     break L30;
    }
    i7 = i12;
    i16 = HEAP32[i6 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i6 = HEAP32[i3 + 144 >> 2] | 0;
 L40 : do {
  if ((i6 | 0) != 0) {
   i16 = i6 + 8 | 0;
   i7 = HEAP32[i16 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i9 = i6 | 0;
   i11 = 0;
   i12 = i7;
   while (1) {
    if (i12 >>> 0 <= i11 >>> 0) {
     break;
    }
    __ZN7WebCore21RenderLayerCompositor24addToOverlapMapRecursiveERNS0_10OverlapMapERNS_11RenderLayerEPS3_(i1, i2, HEAP32[(HEAP32[i9 >> 2] | 0) + (i11 << 2) >> 2] | 0, i3);
    i10 = i11 + 1 | 0;
    if (i10 >>> 0 >= i7 >>> 0) {
     break L40;
    }
    i11 = i10;
    i12 = HEAP32[i16 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
   i20 = 34;
  } else {
   if ((HEAP8[i3 + 21 | 0] & 16) != 0) {
    i20 = 34;
    break;
   }
   if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i3) | 0) {
    i20 = 34;
   }
  }
 } while (0);
 L52 : do {
  if ((i20 | 0) == 34) {
   i8 = HEAP32[i3 + 136 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i6 = i8 + 8 | 0;
   i16 = HEAP32[i6 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   i12 = i8 | 0;
   i8 = 0;
   i11 = i16;
   while (1) {
    if (i11 >>> 0 <= i8 >>> 0) {
     break;
    }
    __ZN7WebCore21RenderLayerCompositor24addToOverlapMapRecursiveERNS0_10OverlapMapERNS_11RenderLayerEPS3_(i1, i2, HEAP32[(HEAP32[i12 >> 2] | 0) + (i8 << 2) >> 2] | 0, i3);
    i7 = i8 + 1 | 0;
    if (i7 >>> 0 >= i16 >>> 0) {
     break L52;
    }
    i8 = i7;
    i11 = HEAP32[i6 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 if (!i15) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore17RenderGeometryMap21popMappingsToAncestorEPKNS_11RenderLayerE(i2 + 32 | 0, i4);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore21RenderLayerCompositor15addToOverlapMapERNS0_10OverlapMapERNS_11RenderLayerERNS_7IntRectERb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, d23 = +0, d24 = +0, d25 = +0, i26 = 0, i27 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i7 = i6 | 0;
 i8 = i6 + 32 | 0;
 i9 = i6 + 40 | 0;
 i10 = i6 + 56 | 0;
 i11 = i6 + 72 | 0;
 i12 = i6 + 88 | 0;
 i13 = i12 | 0;
 i14 = i12;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 if ((HEAP8[i3 + 21 | 0] & 16) != 0) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP8[i5] & 1) == 0) {
  i19 = i2 + 32 | 0;
  i20 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0;
  do {
   if ((HEAP32[i20 + 12 >> 2] | 0) == 0) {
    i21 = 6;
   } else {
    if (!(__ZNK7WebCore16FilterOperations24hasFilterThatMovesPixelsEv(i20 + 4 | 0) | 0)) {
     i21 = 6;
     break;
    }
    __ZNK7WebCore11RenderLayer20calculateLayerBoundsEPKS0_PKNS_11LayoutPointEj(i15, i3, i3, 0, 71);
   }
  } while (0);
  if ((i21 | 0) == 6) {
   __ZNK7WebCore11RenderLayer16localBoundingBoxEj(i15, i3, 0);
  }
  d22 = +(HEAP32[i15 + 8 >> 2] | 0);
  d23 = +(HEAP32[i15 + 12 >> 2] | 0);
  d24 = +(+(HEAP32[i15 >> 2] | 0));
  d25 = +(+(HEAP32[i15 + 4 >> 2] | 0));
  HEAPF32[i13 >> 2] = d24;
  HEAPF32[i13 + 4 >> 2] = d25;
  i13 = i12 + 8 | 0;
  d25 = +d22;
  d22 = +d23;
  HEAPF32[i13 >> 2] = d25;
  HEAPF32[i13 + 4 >> 2] = d22;
  __ZNK7WebCore17RenderGeometryMap14mapToContainerERKNS_9FloatRectEPKNS_22RenderLayerModelObjectE(i7, i19, i14, 0);
  __ZNK7WebCore9FloatQuad11boundingBoxEv(i11, i7);
  __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i10, i11);
  i11 = i4;
  i7 = i10;
  HEAP32[i11 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i11 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
  HEAP32[i11 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
  HEAP32[i11 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
  if ((HEAP32[i4 + 8 >> 2] | 0) < 1) {
   i21 = 9;
  } else {
   if ((HEAP32[i4 + 12 >> 2] | 0) < 1) {
    i21 = 9;
   }
  }
  if ((i21 | 0) == 9) {
   i7 = i4 + 8 | 0;
   HEAP32[i7 >> 2] = 1;
   HEAP32[i7 + 4 >> 2] = 1;
  }
  HEAP8[i5] = 1;
 }
 i5 = i1 + 8 | 0;
 HEAP32[i17 >> 2] = HEAP32[(HEAP32[i5 >> 2] | 0) + 40 >> 2];
 HEAP32[i17 + 4 >> 2] = 0;
 HEAP32[i17 + 8 >> 2] = 2;
 HEAP32[i17 + 12 >> 2] = 0;
 HEAP32[i17 + 16 >> 2] = 1;
 __ZNK7WebCore11RenderLayer18backgroundClipRectERKNS0_16ClipRectsContextE(i18, i3, i17);
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i16, i18 | 0);
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 36 >> 2] | 0) + 183 | 0] | 0) >= 0) {
  __ZN7WebCore7IntRect5scaleEf(i16, +FUNCTION_TABLE_fi[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 7](i1));
 }
 __ZN7WebCore7IntRect9intersectERKS0_(i16, i4);
 HEAP32[i8 >> 2] = i3;
 i3 = _llvm_uadd_with_overflow_i32(HEAP32[i2 + 8 >> 2] | 0, -2 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i4 = i3;
 i3 = HEAP32[i2 >> 2] | 0;
 i1 = i3 + (i4 * 28 & -1) | 0;
 i5 = i1 | 0;
 i18 = i3 + (i4 * 28 & -1) + 8 | 0;
 i17 = HEAP32[i18 >> 2] | 0;
 if ((i17 | 0) == (HEAP32[i3 + (i4 * 28 & -1) + 4 >> 2] | 0)) {
  i7 = i17 + 1 | 0;
  i11 = i1 | 0;
  i10 = HEAP32[i11 >> 2] | 0;
  do {
   if (i10 >>> 0 > i16 >>> 0) {
    i21 = 19;
   } else {
    if ((i10 + (i17 << 4) | 0) >>> 0 <= i16 >>> 0) {
     i21 = 19;
     break;
    }
    __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
    i14 = HEAP32[i11 >> 2] | 0;
    i26 = i14 + (i16 - i10 >> 4 << 4) | 0;
    i27 = i14;
   }
  } while (0);
  if ((i21 | 0) == 19) {
   __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
   i26 = i16;
   i27 = HEAP32[i11 >> 2] | 0;
  }
  i11 = i27 + (HEAP32[i18 >> 2] << 4) | 0;
  i27 = i26;
  HEAP32[i11 >> 2] = HEAP32[i27 >> 2];
  HEAP32[i11 + 4 >> 2] = HEAP32[i27 + 4 >> 2];
  HEAP32[i11 + 8 >> 2] = HEAP32[i27 + 8 >> 2];
  HEAP32[i11 + 12 >> 2] = HEAP32[i27 + 12 >> 2];
 } else {
  i27 = (HEAP32[i1 >> 2] | 0) + (i17 << 4) | 0;
  i17 = i16;
  HEAP32[i27 >> 2] = HEAP32[i17 >> 2];
  HEAP32[i27 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
  HEAP32[i27 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
  HEAP32[i27 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
 }
 HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
 __ZN7WebCore7IntRect5uniteERKS0_(i3 + (i4 * 28 & -1) + 12 | 0, i16);
 __ZN3WTF9HashTableIPKN7WebCore11RenderLayerES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i9, i2 + 12 | 0, i8, i8);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore21RenderLayerCompositor16destroyRootLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 i5 = i3;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = i1 + 12 | 0;
 if ((HEAP32[i12 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore21RenderLayerCompositor15detachRootLayerEv(i1);
 i13 = i1 + 156 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 44 >> 2] & 31](i14);
   i15 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   if ((i15 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 31](i15);
   }
   i15 = i1 + 8 | 0;
   i16 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i17 = __ZN7WebCore4Page20scrollingCoordinatorEv(i16) | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     i18 = HEAP32[(HEAP32[i15 >> 2] | 0) + 116 >> 2] | 0;
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i17 >> 2] | 0) + 88 >> 2] & 7](i17, (i18 | 0) == 0 ? 0 : i18 + 36 | 0, 0);
    }
   } while (0);
   i16 = HEAP32[(HEAP32[i15 >> 2] | 0) + 116 >> 2] | 0;
   i18 = HEAP32[i16 + 60 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 128 >> 2] & 31](i6, i18);
   i17 = i6 + 8 | 0;
   i19 = HEAP32[i17 >> 2] | 0;
   i20 = HEAP32[i17 + 4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   HEAP32[i4 + 4 >> 2] = 0;
   i17 = i3 + 8 | 0;
   HEAP32[i17 >> 2] = i19;
   HEAP32[i17 + 4 >> 2] = i20;
   __ZN7WebCore14ScrollableArea19invalidateScrollbarEPNS_9ScrollbarERKNS_7IntRectE(i16 + 36 | 0, i18, i5);
  }
 } while (0);
 i5 = i1 + 160 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] & 31](i3);
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i4 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
   }
   i4 = i1 + 8 | 0;
   i6 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i13 = __ZN7WebCore4Page20scrollingCoordinatorEv(i6) | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     i14 = HEAP32[(HEAP32[i4 >> 2] | 0) + 116 >> 2] | 0;
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i13 >> 2] | 0) + 88 >> 2] & 7](i13, (i14 | 0) == 0 ? 0 : i14 + 36 | 0, 1);
    }
   } while (0);
   i6 = HEAP32[(HEAP32[i4 >> 2] | 0) + 116 >> 2] | 0;
   i15 = HEAP32[i6 + 60 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 128 >> 2] & 31](i10, i15);
   i14 = i10 + 8 | 0;
   i13 = HEAP32[i14 >> 2] | 0;
   i18 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i8 + 4 >> 2] = 0;
   i14 = i7 + 8 | 0;
   HEAP32[i14 >> 2] = i13;
   HEAP32[i14 + 4 >> 2] = i18;
   __ZN7WebCore14ScrollableArea19invalidateScrollbarEPNS_9ScrollbarERKNS_7IntRectE(i6 + 36 | 0, i15, i9);
  }
 } while (0);
 i9 = i1 + 164 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i9 >> 2] = 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  i7 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 116 >> 2] | 0;
  __ZNK7WebCore10ScrollView16scrollCornerRectEv(i11, i7 | 0);
  __ZN7WebCore14ScrollableArea22invalidateScrollCornerERKNS_7IntRectE(i7 + 36 | 0, i11);
 }
 i11 = i1 + 152 | 0;
 i7 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   HEAP32[i11 >> 2] = 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
   i9 = i1 + 104 | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   if ((i8 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
   }
   i8 = i1 + 108 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
  }
 } while (0);
 i7 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 if ((i7 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
 }
 i7 = i1 + 168 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore21RenderLayerCompositor24requiresCompositingLayerERKNS_11RenderLayerEPNS1_38ViewportConstrainedNotCompositedReasonE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = HEAP32[i2 + 32 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 156 >> 2] & 7](i4 | 0) | 0) {
  i5 = HEAP32[i4 + 8 >> 2] | 0;
 } else {
  i5 = i4;
 }
 i4 = i1 + 76 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i2 & 1 | 0) == 0) {
   i6 = i2;
  } else {
   if ((HEAP32[i5 + 20 >> 2] & 131072 | 0) == 0) {
    i6 = i2;
    break;
   }
   i7 = HEAP32[(HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 20 >> 2] | 0) + 72 >> 2] | 0;
   i8 = i7 + 4 | 0;
   i9 = i7 + 12 | 0;
   i7 = 0;
   while (1) {
    if (i7 >>> 0 >= (HEAP32[i9 >> 2] | 0) >>> 0) {
     i10 = 8;
     break;
    }
    i11 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i7 << 2) >> 2] | 0;
    if (((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 24 >> 2] & 7](i11) | 0) - 11 | 0) >>> 0 < 9 >>> 0) {
     i12 = 1;
     i10 = 37;
     break;
    } else {
     i7 = i7 + 1 | 0;
    }
   }
   if ((i10 | 0) == 8) {
    i6 = HEAP32[i4 >> 2] | 0;
    break;
   } else if ((i10 | 0) == 37) {
    return i12 | 0;
   }
  }
 } while (0);
 do {
  if ((i6 & 8 | 0) != 0) {
   i10 = i5 | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 232 >> 2] & 7](i10) | 0)) {
    break;
   }
   if (((__ZN7WebCore25canvasCompositingStrategyERKNS_12RenderObjectE(i10) | 0) - 1 | 0) >>> 0 < 2 >>> 0) {
    i12 = 1;
   } else {
    break;
   }
   return i12 | 0;
  }
 } while (0);
 if (__ZNK7WebCore21RenderLayerCompositor28requiresCompositingForPluginERNS_22RenderLayerModelObjectE(i1, i5) | 0) {
  i12 = 1;
  return i12 | 0;
 }
 if (__ZNK7WebCore21RenderLayerCompositor27requiresCompositingForFrameERNS_22RenderLayerModelObjectE(i1, i5) | 0) {
  i12 = 1;
  return i12 | 0;
 }
 do {
  if ((HEAP8[i1 + 72 | 0] & 1) != 0) {
   if ((HEAP32[i4 >> 2] & 1 | 0) == 0) {
    break;
   }
   if ((HEAP32[(HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 1024 | 0) == 0) {
    break;
   } else {
    i12 = 1;
   }
   return i12 | 0;
  }
 } while (0);
 i6 = i5 + 40 | 0;
 i10 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP8[i10 + 23 | 0] & 2) != 0) {
   i2 = HEAP32[i10 + 32 >> 2] | 0;
   i7 = HEAP32[i2 + 20 >> 2] | 0;
   do {
    if ((i7 & 25165824 | 0) == 16777216) {
     if ((HEAP8[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 8 >> 2] | 0) + 36 | 0] & 1) == 0) {
      break;
     } else {
      i12 = 1;
     }
     return i12 | 0;
    }
   } while (0);
   if ((i7 & 65536 | 0) == 0) {
    break;
   } else {
    i12 = 1;
   }
   return i12 | 0;
  }
 } while (0);
 i10 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i10 & 16 | 0) == 0) {
   i13 = i10;
  } else {
   i2 = __ZNK7WebCore12RenderObject9animationEv(i5 | 0) | 0;
   i8 = i5 | 0;
   do {
    if (__ZNK7WebCore19AnimationController28isRunningAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb(i2, i8, 102, 1) | 0) {
     if ((HEAP8[i1 + 88 | 0] & 1) != 0) {
      i12 = 1;
      return i12 | 0;
     }
     if ((HEAP32[i4 >> 2] & 128 | 0) == 0) {
      break;
     } else {
      i12 = 1;
     }
     return i12 | 0;
    }
   } while (0);
   if (__ZNK7WebCore19AnimationController28isRunningAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb(i2, i8, 237, 1) | 0) {
    i12 = 1;
    return i12 | 0;
   }
   if (__ZNK7WebCore19AnimationController28isRunningAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb(i2, i8, 345, 1) | 0) {
    i12 = 1;
    return i12 | 0;
   } else {
    i13 = HEAP32[i4 >> 2] | 0;
    break;
   }
  }
 } while (0);
 do {
  if ((i13 & 32 | 0) != 0) {
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0) + 12 >> 2] | 0) == 0) {
    break;
   } else {
    i12 = 1;
   }
   return i12 | 0;
  }
 } while (0);
 if (__ZNK7WebCore21RenderLayerCompositor30requiresCompositingForPositionERNS_22RenderLayerModelObjectERKNS_11RenderLayerEPNS3_38ViewportConstrainedNotCompositedReasonE(i1, i5, HEAP32[i6 >> 2] | 0, i3) | 0) {
  i12 = 1;
  return i12 | 0;
 }
 if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(HEAP32[i6 >> 2] | 0) | 0) {
  i12 = 1;
  return i12 | 0;
 }
 i12 = (HEAP32[(HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 20 >> 2] | 0) + 296 >> 2] & 4063232 | 0) != 0;
 return i12 | 0;
}
function __ZNK7WebCore21RenderLayerCompositor23requiresOwnBackingStoreERKNS_11RenderLayerEPS2_RKNS_7IntRectES7_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i6 = HEAP32[i2 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 + 208 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if ((HEAP8[(HEAP32[i8 + 16 >> 2] | 0) + 340 | 0] & 32) != 0) {
    break;
   }
   if (__ZNK7WebCore18RenderLayerBacking16paintsIntoWindowEv(i8) | 0) {
    break;
   }
   if ((HEAP8[(HEAP32[i7 >> 2] | 0) + 91 | 0] & 1) == 0) {
    break;
   } else {
    i9 = 1;
   }
   return i9 | 0;
  }
 } while (0);
 if ((HEAP8[i2 + 21 | 0] & 16) != 0) {
  i9 = 1;
  return i9 | 0;
 }
 if ((HEAP32[i2 + 172 >> 2] | 0) != 0) {
  i9 = 1;
  return i9 | 0;
 }
 i3 = i1 + 76 | 0;
 do {
  if ((HEAP32[i3 >> 2] & 8 | 0) != 0) {
   i7 = i6 | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 232 >> 2] & 7](i7) | 0)) {
    break;
   }
   if (((__ZN7WebCore25canvasCompositingStrategyERKNS_12RenderObjectE(i7) | 0) - 1 | 0) >>> 0 < 2 >>> 0) {
    i9 = 1;
   } else {
    break;
   }
   return i9 | 0;
  }
 } while (0);
 if (__ZNK7WebCore21RenderLayerCompositor28requiresCompositingForPluginERNS_22RenderLayerModelObjectE(i1, i6) | 0) {
  i9 = 1;
  return i9 | 0;
 }
 if (__ZNK7WebCore21RenderLayerCompositor27requiresCompositingForFrameERNS_22RenderLayerModelObjectE(i1, i6) | 0) {
  i9 = 1;
  return i9 | 0;
 }
 i7 = HEAP32[i3 >> 2] | 0;
 do {
  if ((HEAP8[i1 + 72 | 0] & 1) != 0) {
   if ((i7 & 1 | 0) == 0) {
    break;
   }
   if ((HEAP32[(HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 1024 | 0) == 0) {
    break;
   } else {
    i9 = 1;
   }
   return i9 | 0;
  }
 } while (0);
 do {
  if ((i7 & 16 | 0) == 0) {
   i10 = i7;
  } else {
   i8 = __ZNK7WebCore12RenderObject9animationEv(i6 | 0) | 0;
   i11 = i6 | 0;
   do {
    if (__ZNK7WebCore19AnimationController28isRunningAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb(i8, i11, 102, 1) | 0) {
     if ((HEAP8[i1 + 88 | 0] & 1) != 0) {
      i9 = 1;
      return i9 | 0;
     }
     if ((HEAP32[i3 >> 2] & 128 | 0) == 0) {
      break;
     } else {
      i9 = 1;
     }
     return i9 | 0;
    }
   } while (0);
   if (__ZNK7WebCore19AnimationController28isRunningAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb(i8, i11, 237, 1) | 0) {
    i9 = 1;
    return i9 | 0;
   }
   if (__ZNK7WebCore19AnimationController28isRunningAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb(i8, i11, 345, 1) | 0) {
    i9 = 1;
    return i9 | 0;
   } else {
    i10 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 20 >> 2] | 0;
 do {
  if ((i10 & 32 | 0) != 0) {
   if ((HEAP32[(HEAP32[i3 + 76 >> 2] | 0) + 12 >> 2] | 0) == 0) {
    break;
   } else {
    i9 = 1;
   }
   return i9 | 0;
  }
 } while (0);
 if ((HEAP32[i3 + 296 >> 2] & 4063232 | 0) != 0) {
  i9 = 1;
  return i9 | 0;
 }
 if (__ZNK7WebCore21RenderLayerCompositor30requiresCompositingForPositionERNS_22RenderLayerModelObjectERKNS_11RenderLayerEPNS3_38ViewportConstrainedNotCompositedReasonE(i1, i6, i2, 0) | 0) {
  i9 = 1;
  return i9 | 0;
 }
 if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i2) | 0) {
  i9 = 1;
  return i9 | 0;
 }
 i1 = HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 20 >> 2] | 0;
 if (+HEAPF32[i1 + 4 >> 2] < +1) {
  i9 = 1;
  return i9 | 0;
 }
 i3 = i1 + 116 | 0;
 while (1) {
  if ((HEAP32[i3 + 4 >> 2] | 0) != 0) {
   i9 = 1;
   i12 = 54;
   break;
  }
  i3 = HEAP32[i3 >> 2] | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
 if ((i12 | 0) == 54) {
  return i9 | 0;
 }
 if ((HEAP32[(HEAP32[i1 + 164 >> 2] | 0) + 8 >> 2] | 0) != 0) {
  i9 = 1;
  return i9 | 0;
 }
 if ((HEAP32[i6 + 20 >> 2] & 262144 | 0) != 0) {
  i9 = 1;
  return i9 | 0;
 }
 if ((HEAP32[(HEAP32[i1 + 76 >> 2] | 0) + 12 >> 2] | 0) != 0) {
  i9 = 1;
  return i9 | 0;
 }
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i1 & 469762048 | 0) == 0) {
  i9 = (__ZNK7WebCore7IntRect8containsERKS0_(i5, i4) | 0) ^ 1;
  return i9 | 0;
 } else {
  i4 = i1 >>> 26 & 7;
  i9 = (i4 - 1 | 0) >>> 0 < 4 >>> 0 | (i4 | 0) == 6;
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCore21RenderLayerCompositor23updateLayerTreeGeometryERNS_11RenderLayerEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i2 + 32 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 248 >> 2] & 7](i5 | 0) | 0) {
   if ((HEAP32[i5 + 20 >> 2] & 25165824 | 0) != 16777216) {
    break;
   }
   return;
  }
 } while (0);
 i5 = HEAP32[i2 + 208 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   __ZN7WebCore18RenderLayerBacking22updateCompositedBoundsEv(i5);
   i6 = __ZNK7WebCore11RenderLayer15reflectionLayerEv(i2) | 0;
   do {
    if ((i6 | 0) != 0) {
     i7 = HEAP32[i6 + 208 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     __ZN7WebCore18RenderLayerBacking22updateCompositedBoundsEv(i7);
    }
   } while (0);
   __ZN7WebCore18RenderLayerBacking32updateGraphicsLayerConfigurationEv(i5) | 0;
   __ZN7WebCore18RenderLayerBacking27updateGraphicsLayerGeometryEv(i5);
   if ((HEAP32[i2 + 36 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore21RenderLayerCompositor23updateRootLayerPositionEv(i1);
  }
 } while (0);
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
   i8 = 12;
  } else {
   if ((HEAP8[i2 + 21 | 0] & 16) != 0) {
    i8 = 12;
    break;
   }
   if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i2) | 0) {
    i8 = 12;
   }
  }
 } while (0);
 L16 : do {
  if ((i8 | 0) == 12) {
   i5 = HEAP32[i2 + 140 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 + 8 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i9 = i5 | 0;
   i5 = i3 + 1 | 0;
   i10 = 0;
   i11 = i7;
   while (1) {
    if (i11 >>> 0 <= i10 >>> 0) {
     break;
    }
    __ZN7WebCore21RenderLayerCompositor23updateLayerTreeGeometryERNS_11RenderLayerEi(i1, HEAP32[(HEAP32[i9 >> 2] | 0) + (i10 << 2) >> 2] | 0, i5);
    i12 = i10 + 1 | 0;
    if (i12 >>> 0 >= i7 >>> 0) {
     break L16;
    }
    i10 = i12;
    i11 = HEAP32[i6 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i6 = HEAP32[i2 + 144 >> 2] | 0;
 L26 : do {
  if ((i6 | 0) != 0) {
   i11 = i6 + 8 | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i7 = i6 | 0;
   i5 = i3 + 1 | 0;
   i9 = 0;
   i12 = i10;
   while (1) {
    if (i12 >>> 0 <= i9 >>> 0) {
     break;
    }
    __ZN7WebCore21RenderLayerCompositor23updateLayerTreeGeometryERNS_11RenderLayerEi(i1, HEAP32[(HEAP32[i7 >> 2] | 0) + (i9 << 2) >> 2] | 0, i5);
    i13 = i9 + 1 | 0;
    if (i13 >>> 0 >= i10 >>> 0) {
     break L26;
    }
    i9 = i13;
    i12 = HEAP32[i11 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) != 0) {
   if ((HEAP8[i2 + 21 | 0] & 16) != 0) {
    break;
   }
   if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i2) | 0) {
    break;
   }
   return;
  }
 } while (0);
 i4 = HEAP32[i2 + 136 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i2 = i4 + 8 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i11 = i4 | 0;
 i4 = i3 + 1 | 0;
 i3 = 0;
 i12 = i6;
 while (1) {
  if (i12 >>> 0 <= i3 >>> 0) {
   i8 = 33;
   break;
  }
  __ZN7WebCore21RenderLayerCompositor23updateLayerTreeGeometryERNS_11RenderLayerEi(i1, HEAP32[(HEAP32[i11 >> 2] | 0) + (i3 << 2) >> 2] | 0, i4);
  i9 = i3 + 1 | 0;
  if (i9 >>> 0 >= i6 >>> 0) {
   i8 = 41;
   break;
  }
  i3 = i9;
  i12 = HEAP32[i2 >> 2] | 0;
 }
 if ((i8 | 0) == 33) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i8 | 0) == 41) {
  return;
 }
}
function __ZN7WebCore21RenderLayerCompositor35updateCompositingDescendantGeometryERNS_11RenderLayerES2_b(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 do {
  if ((i3 | 0) != (i2 | 0)) {
   i5 = HEAP32[i3 + 208 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore18RenderLayerBacking22updateCompositedBoundsEv(i5);
   i6 = __ZNK7WebCore11RenderLayer15reflectionLayerEv(i3) | 0;
   do {
    if ((i6 | 0) != 0) {
     i7 = HEAP32[i6 + 208 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     __ZN7WebCore18RenderLayerBacking22updateCompositedBoundsEv(i7);
    }
   } while (0);
   __ZN7WebCore18RenderLayerBacking27updateGraphicsLayerGeometryEv(i5);
   if (!i4) {
    break;
   }
   return;
  }
 } while (0);
 if ((__ZNK7WebCore11RenderLayer15reflectionLayerEv(i3) | 0) != 0) {
  __ZN7WebCore21RenderLayerCompositor35updateCompositingDescendantGeometryERNS_11RenderLayerES2_b(i1, i2, __ZNK7WebCore11RenderLayer15reflectionLayerEv(i3) | 0, i4);
 }
 if ((HEAP8[i3 + 23 | 0] & 2) == 0) {
  return;
 }
 i6 = i3 + 32 | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
   i8 = 13;
  } else {
   if ((HEAP8[i3 + 21 | 0] & 16) != 0) {
    i8 = 13;
    break;
   }
   if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i3) | 0) {
    i8 = 13;
   }
  }
 } while (0);
 L19 : do {
  if ((i8 | 0) == 13) {
   i7 = HEAP32[i3 + 140 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i9 = i7 + 8 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i11 = i7 | 0;
   i7 = 0;
   i12 = i10;
   while (1) {
    if (i12 >>> 0 <= i7 >>> 0) {
     break;
    }
    __ZN7WebCore21RenderLayerCompositor35updateCompositingDescendantGeometryERNS_11RenderLayerES2_b(i1, i2, HEAP32[(HEAP32[i11 >> 2] | 0) + (i7 << 2) >> 2] | 0, i4);
    i13 = i7 + 1 | 0;
    if (i13 >>> 0 >= i10 >>> 0) {
     break L19;
    }
    i7 = i13;
    i12 = HEAP32[i9 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i9 = HEAP32[i3 + 144 >> 2] | 0;
 L29 : do {
  if ((i9 | 0) != 0) {
   i12 = i9 + 8 | 0;
   i7 = HEAP32[i12 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i10 = i9 | 0;
   i11 = 0;
   i5 = i7;
   while (1) {
    if (i5 >>> 0 <= i11 >>> 0) {
     break;
    }
    __ZN7WebCore21RenderLayerCompositor35updateCompositingDescendantGeometryERNS_11RenderLayerES2_b(i1, i2, HEAP32[(HEAP32[i10 >> 2] | 0) + (i11 << 2) >> 2] | 0, i4);
    i13 = i11 + 1 | 0;
    if (i13 >>> 0 >= i7 >>> 0) {
     break L29;
    }
    i11 = i13;
    i5 = HEAP32[i12 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) != 0) {
   if ((HEAP8[i3 + 21 | 0] & 16) != 0) {
    break;
   }
   if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i3) | 0) {
    break;
   }
   return;
  }
 } while (0);
 i6 = HEAP32[i3 + 136 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i3 = i6 + 8 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 if ((i9 | 0) == 0) {
  return;
 }
 i12 = i6 | 0;
 i6 = 0;
 i5 = i9;
 while (1) {
  if (i5 >>> 0 <= i6 >>> 0) {
   i8 = 34;
   break;
  }
  __ZN7WebCore21RenderLayerCompositor35updateCompositingDescendantGeometryERNS_11RenderLayerES2_b(i1, i2, HEAP32[(HEAP32[i12 >> 2] | 0) + (i6 << 2) >> 2] | 0, i4);
  i11 = i6 + 1 | 0;
  if (i11 >>> 0 >= i9 >>> 0) {
   i8 = 42;
   break;
  }
  i6 = i11;
  i5 = HEAP32[i3 >> 2] | 0;
 }
 if ((i8 | 0) == 42) {
  return;
 } else if ((i8 | 0) == 34) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore21RenderLayerCompositor40registerOrUpdateViewportConstrainedLayerERNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, d19 = +0, d20 = +0, d21 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 136 | 0;
 i9 = i1 + 8 | 0;
 if ((__ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 i10 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = __ZN7WebCore4Page20scrollingCoordinatorEv(i10) | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 28 >> 2] & 7](i11) | 0)) {
  STACKTOP = i3;
  return;
 }
 i10 = HEAP32[i2 + 36 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i12 = i2 + 208 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 } else {
  i14 = i10;
 }
 L18 : while (1) {
  i15 = HEAP32[i14 + 208 >> 2] | 0;
  do {
   if ((i15 | 0) != 0) {
    i10 = i15 + 56 | 0;
    if ((HEAP32[i10 >> 2] | 0) == 0 & (HEAP32[i10 + 4 >> 2] | 0) == 0) {
     break;
    }
    if (!(__ZNK7WebCore11RenderLayer15scrollsOverflowEv(i14) | 0)) {
     break L18;
    }
   }
  } while (0);
  i10 = HEAP32[i14 + 36 >> 2] | 0;
  if ((i10 | 0) == 0) {
   i16 = 18;
   break;
  } else {
   i14 = i10;
  }
 }
 if ((i16 | 0) == 18) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore18RenderLayerBacking38attachToScrollingCoordinatorWithParentEPS0_(i13, i15);
 i15 = i13 + 56 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 i14 = HEAP32[i15 + 4 >> 2] | 0;
 i15 = i2 + 32 | 0;
 i10 = HEAP32[(HEAP32[i11 >> 2] | 0) + 56 >> 2] | 0;
 if ((HEAP32[(HEAP32[i15 >> 2] | 0) + 20 >> 2] & 25165824 | 0) == 25165824) {
  i17 = i5 | 0;
  __ZNK7WebCore9FrameView37viewportConstrainedVisibleContentRectEv(i4, HEAP32[(HEAP32[i9 >> 2] | 0) + 116 >> 2] | 0);
  i9 = HEAP32[i15 >> 2] | 0;
  HEAPF32[i7 + 4 >> 2] = +0;
  HEAPF32[i7 + 8 >> 2] = +0;
  HEAP32[i7 + 12 >> 2] = 0;
  HEAP32[i7 >> 2] = H_BASE + 48;
  _memset(i7 + 16 | 0, 0, 80) | 0;
  d18 = +(HEAP32[i4 + 8 >> 2] | 0);
  d19 = +(HEAP32[i4 + 12 >> 2] | 0);
  d20 = +(+(HEAP32[i4 >> 2] | 0));
  d21 = +(+(HEAP32[i4 + 4 >> 2] | 0));
  HEAPF32[i17 >> 2] = d20;
  HEAPF32[i17 + 4 >> 2] = d21;
  i17 = i5 + 8 | 0;
  d21 = +d18;
  d18 = +d19;
  HEAPF32[i17 >> 2] = d21;
  HEAPF32[i17 + 4 >> 2] = d18;
  __ZNK7WebCore20RenderBoxModelObject32computeStickyPositionConstraintsERNS_33StickyPositionViewportConstraintsERKNS_9FloatRectE(i9, i7, i5);
  i5 = (HEAP32[(HEAP32[i12 >> 2] | 0) + 16 >> 2] | 0) + 20 | 0;
  i12 = i7 + 88 | 0;
  i17 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i12 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i12 + 4 >> 2] = i17;
  __ZNK7WebCore20RenderBoxModelObject20stickyPositionOffsetEv(i6, i9);
  i9 = i7 + 80 | 0;
  d18 = +(+(HEAP32[i6 >> 2] | 0));
  d21 = +(+(HEAP32[i6 + 4 >> 2] | 0));
  HEAPF32[i9 >> 2] = d18;
  HEAPF32[i9 + 4 >> 2] = d21;
  FUNCTION_TABLE_viiiii[i10 & 3](i11, i16, i14, i7 | 0, HEAP32[i13 + 16 >> 2] | 0);
  STACKTOP = i3;
  return;
 } else {
  __ZNK7WebCore21RenderLayerCompositor31computeFixedViewportConstraintsERNS_11RenderLayerE(i8, i1, i2);
  FUNCTION_TABLE_viiiii[i10 & 3](i11, i16, i14, i8 | 0, HEAP32[i13 + 16 >> 2] | 0);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore21RenderLayerCompositor13paintContentsEPKNS_13GraphicsLayerERNS_15GraphicsContextEjRKNS_7IntRectE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i4 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 48 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((HEAP32[i1 + 156 >> 2] | 0) == (i2 | 0)) {
  i13 = HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 116 >> 2] | 0) + 56 >> 2] | 0;
  i14 = i6;
  i15 = i7;
  if ((i13 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i16 = i7 | 0;
  __ZN7WebCore15GraphicsContext4saveEv(i3);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 128 >> 2] & 31](i15, i13);
  __ZN7WebCore15GraphicsContext9translateEff(i3, +(-(HEAP32[i7 >> 2] | 0) | 0), +(-(HEAP32[i15 + 4 >> 2] | 0) | 0));
  i15 = i5;
  HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i14 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
  HEAP32[i14 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
  HEAP32[i14 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
  i15 = HEAP32[i16 + 4 >> 2] | 0;
  i14 = i6 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + (HEAP32[i16 >> 2] | 0);
  i16 = i6 + 4 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + i15;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i13 >> 2] | 0) + 12 >> 2] & 7](i13, i3, i6);
  __ZN7WebCore15GraphicsContext7restoreEv(i3);
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i1 + 160 >> 2] | 0) == (i2 | 0)) {
  i6 = HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 116 >> 2] | 0) + 60 >> 2] | 0;
  i13 = i8;
  i15 = i7;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i16 = i7 | 0;
  __ZN7WebCore15GraphicsContext4saveEv(i3);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 128 >> 2] & 31](i15, i6);
  __ZN7WebCore15GraphicsContext9translateEff(i3, +(-(HEAP32[i7 >> 2] | 0) | 0), +(-(HEAP32[i15 + 4 >> 2] | 0) | 0));
  i15 = i5;
  HEAP32[i13 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i13 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
  HEAP32[i13 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
  HEAP32[i13 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
  i15 = HEAP32[i16 + 4 >> 2] | 0;
  i13 = i8 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + (HEAP32[i16 >> 2] | 0);
  i16 = i8 + 4 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + i15;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 7](i6, i3, i8);
  __ZN7WebCore15GraphicsContext7restoreEv(i3);
  STACKTOP = i4;
  return;
 } else {
  if ((HEAP32[i1 + 164 >> 2] | 0) != (i2 | 0)) {
   STACKTOP = i4;
   return;
  }
  i2 = i1 + 8 | 0;
  __ZNK7WebCore10ScrollView16scrollCornerRectEv(i11, HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] | 0);
  __ZN7WebCore15GraphicsContext4saveEv(i3);
  __ZN7WebCore15GraphicsContext9translateEff(i3, +(-(HEAP32[i9 >> 2] | 0) | 0), +(-(HEAP32[i11 + 4 >> 2] | 0) | 0));
  i11 = i12;
  i9 = i5;
  HEAP32[i11 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i11 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
  HEAP32[i11 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
  HEAP32[i11 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
  i9 = HEAP32[i10 + 4 >> 2] | 0;
  i11 = i12 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + (HEAP32[i10 >> 2] | 0);
  i10 = i12 + 4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + i9;
  __ZN7WebCore9FrameView17paintScrollCornerEPNS_15GraphicsContextERKNS_7IntRectE(HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] | 0, i3, i12);
  __ZN7WebCore15GraphicsContext7restoreEv(i3);
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore21RenderLayerCompositor17layerHas3DContentERKNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i2 + 32 | 0;
 i4 = HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0;
 if ((HEAP32[i4 + 292 >> 2] & 512 | 0) != 0) {
  i5 = 1;
  return i5 | 0;
 }
 if (+HEAPF32[i4 + 16 >> 2] > +0) {
  i5 = 1;
  return i5 | 0;
 }
 i6 = HEAP32[i4 + 72 >> 2] | 0;
 i4 = i6 + 4 | 0;
 i7 = i6 + 12 | 0;
 i6 = 0;
 while (1) {
  if (i6 >>> 0 >= (HEAP32[i7 >> 2] | 0) >>> 0) {
   break;
  }
  i8 = HEAP32[(HEAP32[i4 >> 2] | 0) + (i6 << 2) >> 2] | 0;
  if (((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 24 >> 2] & 7](i8) | 0) - 11 | 0) >>> 0 < 9 >>> 0) {
   i5 = 1;
   i9 = 28;
   break;
  } else {
   i6 = i6 + 1 | 0;
  }
 }
 if ((i9 | 0) == 28) {
  return i5 | 0;
 }
 __ZN7WebCore11RenderLayer24updateLayerListsIfNeededEv(i2);
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
   i9 = 9;
  } else {
   if ((HEAP8[i2 + 21 | 0] & 16) != 0) {
    i9 = 9;
    break;
   }
   if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i2) | 0) {
    i9 = 9;
   }
  }
 } while (0);
 L16 : do {
  if ((i9 | 0) == 9) {
   i3 = HEAP32[i2 + 140 >> 2] | 0;
   L18 : do {
    if ((i3 | 0) != 0) {
     i6 = i3 + 8 | 0;
     i4 = HEAP32[i6 >> 2] | 0;
     i7 = i3 | 0;
     i8 = 0;
     while (1) {
      if (i8 >>> 0 >= i4 >>> 0) {
       break L18;
      }
      if ((HEAP32[i6 >> 2] | 0) >>> 0 <= i8 >>> 0) {
       i9 = 13;
       break;
      }
      if (__ZNK7WebCore21RenderLayerCompositor17layerHas3DContentERKNS_11RenderLayerE(i1, HEAP32[(HEAP32[i7 >> 2] | 0) + (i8 << 2) >> 2] | 0) | 0) {
       i5 = 1;
       i9 = 31;
       break;
      } else {
       i8 = i8 + 1 | 0;
      }
     }
     if ((i9 | 0) == 31) {
      return i5 | 0;
     } else if ((i9 | 0) == 13) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return 0;
     }
    }
   } while (0);
   i3 = HEAP32[i2 + 136 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i8 = i3 + 8 | 0;
   i7 = HEAP32[i8 >> 2] | 0;
   i6 = i3 | 0;
   i3 = 0;
   while (1) {
    if (i3 >>> 0 >= i7 >>> 0) {
     break L16;
    }
    if ((HEAP32[i8 >> 2] | 0) >>> 0 <= i3 >>> 0) {
     i9 = 19;
     break;
    }
    if (__ZNK7WebCore21RenderLayerCompositor17layerHas3DContentERKNS_11RenderLayerE(i1, HEAP32[(HEAP32[i6 >> 2] | 0) + (i3 << 2) >> 2] | 0) | 0) {
     i5 = 1;
     i9 = 35;
     break;
    } else {
     i3 = i3 + 1 | 0;
    }
   }
   if ((i9 | 0) == 19) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i9 | 0) == 35) {
    return i5 | 0;
   }
  }
 } while (0);
 i3 = HEAP32[i2 + 144 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i2 = i3 + 8 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i8 = i3 | 0;
 i3 = 0;
 while (1) {
  if (i3 >>> 0 >= i6 >>> 0) {
   i5 = 0;
   i9 = 34;
   break;
  }
  if ((HEAP32[i2 >> 2] | 0) >>> 0 <= i3 >>> 0) {
   i9 = 25;
   break;
  }
  if (__ZNK7WebCore21RenderLayerCompositor17layerHas3DContentERKNS_11RenderLayerE(i1, HEAP32[(HEAP32[i8 >> 2] | 0) + (i3 << 2) >> 2] | 0) | 0) {
   i5 = 1;
   i9 = 33;
   break;
  } else {
   i3 = i3 + 1 | 0;
  }
 }
 if ((i9 | 0) == 33) {
  return i5 | 0;
 } else if ((i9 | 0) == 34) {
  return i5 | 0;
 } else if ((i9 | 0) == 25) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
}
function __ZN7WebCore21RenderLayerCompositor24flushPendingLayerChangesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 i6 = i4;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = HEAP32[i1 + 100 >> 2] | 0;
 if ((i10 | 0) == 2 & (i2 ^ 1)) {
  STACKTOP = i3;
  return;
 }
 if ((i10 | 0) == 0) {
  HEAP8[i1 + 91 | 0] = 1;
  STACKTOP = i3;
  return;
 }
 i10 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 116 >> 2] | 0;
 i2 = HEAP32[(HEAP32[i10 + 216 >> 2] | 0) + 476 >> 2] | 0;
 i11 = (i2 | 0) == 0;
 if (!i11) {
  __ZN7WebCore19AnimationController20beginAnimationUpdateEv(i2);
 }
 i12 = i1 + 90 | 0;
 HEAP8[i12] = 1;
 i13 = HEAP32[i1 + 152 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i14 = HEAP32[i1 + 12 >> 2] | 0;
  if ((i14 | 0) != 0) {
   i15 = i14;
   i16 = 8;
  }
 } else {
  i15 = i13;
  i16 = 8;
 }
 if ((i16 | 0) == 8) {
  i16 = i10 | 0;
  if ((HEAP32[i1 + 104 >> 2] | 0) == 0) {
   __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i6, i16, 0);
  } else {
   __ZNK7WebCore10ScrollView12contentsSizeEv(i8, i16);
   HEAP32[i5 >> 2] = 0;
   HEAP32[i5 + 4 >> 2] = 0;
   i5 = i4 + 8 | 0;
   i4 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i5 + 4 >> 2] = i4;
  }
  i4 = HEAP32[(HEAP32[i15 >> 2] | 0) + 268 >> 2] | 0;
  __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i9, i6);
  FUNCTION_TABLE_vii[i4 & 31](i15, i9);
 }
 HEAP8[i12] = 0;
 i12 = i1 + 132 | 0;
 i9 = i12 | 0;
 i15 = HEAP32[i9 >> 2] | 0;
 i4 = HEAP32[i1 + 136 >> 2] | 0;
 i6 = i15 + (i4 << 2) | 0;
 L20 : do {
  if ((HEAP32[i1 + 144 >> 2] | 0) == 0) {
   i17 = i15;
  } else {
   L22 : do {
    if ((i4 | 0) == 0) {
     i18 = i15;
    } else {
     i5 = i15;
     while (1) {
      i7 = HEAP32[i5 >> 2] | 0;
      if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
       i18 = i5;
       break L22;
      }
      i7 = i5 + 4 | 0;
      if ((i7 | 0) == (i6 | 0)) {
       i17 = i15;
       break L20;
      } else {
       i5 = i7;
      }
     }
    }
   } while (0);
   if ((i18 | 0) == (i6 | 0)) {
    i17 = i15;
    break;
   } else {
    i19 = i18;
   }
   L27 : while (1) {
    __ZN7WebCore21RenderLayerCompositor40registerOrUpdateViewportConstrainedLayerERNS_11RenderLayerE(i1, HEAP32[i19 >> 2] | 0);
    i5 = i19 + 4 | 0;
    if ((i5 | 0) == (i6 | 0)) {
     break;
    } else {
     i20 = i5;
    }
    while (1) {
     i5 = HEAP32[i20 >> 2] | 0;
     if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
      break;
     }
     i5 = i20 + 4 | 0;
     if ((i5 | 0) == (i6 | 0)) {
      break L27;
     } else {
      i20 = i5;
     }
    }
    if ((i20 | 0) == (i6 | 0)) {
     break;
    } else {
     i19 = i20;
    }
   }
   i17 = HEAP32[i9 >> 2] | 0;
  }
 } while (0);
 if ((i17 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i17);
  _memset(i12 | 0, 0, 16) | 0;
 }
 HEAP8[i1 + 233 | 0] = 0;
 i12 = i1 + 176 | 0;
 __ZN7WebCore9TimerBase4stopEv(i12);
 if ((HEAP8[i1 + 232 | 0] & 1) != 0) {
  __ZN7WebCore9TimerBase5startEdd(i12, +.5, +0);
 }
 if (i11) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore19AnimationController18endAnimationUpdateEv(i2);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore21RenderLayerCompositor27requiresCompositingForFrameERNS_22RenderLayerModelObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 80 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 228 >> 2] & 7](i2 | 0) | 0)) {
  i14 = 0;
  STACKTOP = i3;
  return i14 | 0;
 }
 if (!(__ZNK7WebCore12RenderWidget30requiresAcceleratedCompositingEv(i2) | 0)) {
  i14 = 0;
  STACKTOP = i3;
  return i14 | 0;
 }
 HEAP8[i1 + 87 | 0] = 1;
 i1 = __ZNK7WebCore21HTMLFrameOwnerElement15contentDocumentEv(HEAP32[i2 + 4 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  i14 = 0;
  STACKTOP = i3;
  return i14 | 0;
 }
 i15 = HEAP32[i1 + 1584 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i14 = 0;
  STACKTOP = i3;
  return i14 | 0;
 }
 i1 = __ZN7WebCore10RenderView10compositorEv(i15) | 0;
 if ((i1 | 0) == 0) {
  i14 = 0;
  STACKTOP = i3;
  return i14 | 0;
 }
 if ((__ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) == 0) {
  i14 = 0;
  STACKTOP = i3;
  return i14 | 0;
 }
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 do {
  if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
   if ((i1 & 31 | 0) != 0) {
    break;
   }
   i15 = i2;
   i16 = i2;
   i17 = i2;
   i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 744 >> 2] & 7](i16) | 0;
   i19 = i2;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 712 >> 2] & 31](i10, i16);
   i20 = (HEAP32[i10 >> 2] | 0) + i18 | 0;
   i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 736 >> 2] & 7](i16) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 704 >> 2] & 31](i11, i16);
   i17 = (HEAP32[i11 >> 2] | 0) + i18 | 0;
   __ZNK7WebCore9RenderBox11clientWidthEv(i4, i15);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 712 >> 2] & 31](i5, i16);
   i18 = (HEAP32[i4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 716 >> 2] & 31](i6, i16);
   i21 = i18 - (HEAP32[i6 >> 2] | 0) | 0;
   __ZNK7WebCore9RenderBox12clientHeightEv(i7, i15);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 704 >> 2] & 31](i8, i16);
   i15 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 >> 2] | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 708 >> 2] & 31](i9, i16);
   i16 = i15 - (HEAP32[i9 >> 2] | 0) | 0;
   HEAP32[i12 >> 2] = i20;
   HEAP32[i12 + 4 >> 2] = i17;
   HEAP32[i12 + 8 >> 2] = i21;
   HEAP32[i12 + 12 >> 2] = i16;
   __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i13, i12);
   if ((HEAP32[i13 + 8 >> 2] | 0) < 1) {
    i14 = 0;
    STACKTOP = i3;
    return i14 | 0;
   }
   i14 = (HEAP32[i13 + 12 >> 2] | 0) > 0;
   STACKTOP = i3;
   return i14 | 0;
  }
 } while (0);
 if ((i1 & 32768 | 0) == 0) {
  i14 = 0;
  STACKTOP = i3;
  return i14 | 0;
 }
 i14 = (HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 208 >> 2] | 0) != 0;
 STACKTOP = i3;
 return i14 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore11RenderLayerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableIPN7WebCore11RenderLayerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore11RenderLayerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore11RenderLayerES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPKN7WebCore11RenderLayerES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6expandEPS4_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i10 = i7 + (i3 << 2) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = 9;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 6;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i7 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 8;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 8) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 9;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 6) {
    i19 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 9) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  i13 = __ZN3WTF9HashTableIPKN7WebCore11RenderLayerES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6expandEPS4_(i2, i25) | 0;
  i27 = i13;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore21RenderLayerCompositor23didFlushChangesForLayerERNS_11RenderLayerEPKNS_13GraphicsLayerE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i1 + 112 >> 2] | 0;
 L1 : do {
  if ((i7 | 0) != 0) {
   i8 = HEAP32[i1 + 120 >> 2] | 0;
   i9 = i2;
   i10 = i9 + ~(i9 << 15) | 0;
   i9 = (i10 >>> 10 ^ i10) * 9 & -1;
   i10 = i9 >>> 6 ^ i9;
   i9 = i10 + ~(i10 << 11) | 0;
   i10 = i9 >>> 16 ^ i9;
   i9 = i8 & i10;
   i11 = i7 + (i9 << 2) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == (i2 | 0)) {
    i13 = i11;
   } else {
    i11 = (i10 >>> 23) + ~i10 | 0;
    i10 = i11 << 12 ^ i11;
    i11 = i10 >>> 7 ^ i10;
    i10 = i11 << 2 ^ i11;
    i11 = i10 >>> 20 ^ i10 | 1;
    i10 = 0;
    i14 = i9;
    i9 = i12;
    while (1) {
     if ((i9 | 0) == 0) {
      break L1;
     }
     i12 = (i10 | 0) == 0 ? i11 : i10;
     i15 = i12 + i14 & i8;
     i16 = i7 + (i15 << 2) | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     if ((i17 | 0) == (i2 | 0)) {
      i13 = i16;
      break;
     } else {
      i10 = i12;
      i14 = i15;
      i9 = i17;
     }
    }
   }
   if ((i13 | 0) == 0) {
    break;
   }
   HEAP32[i5 >> 2] = i2;
   __ZN3WTF9HashTableIPN7WebCore11RenderLayerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i6, i1 + 132 | 0, i5, i5);
  }
 } while (0);
 i5 = HEAP32[i2 + 208 >> 2] | 0;
 if ((HEAP8[i5 + 93 | 0] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i5 + 24 >> 2] | 0) != (i3 | 0)) {
  STACKTOP = i4;
  return;
 }
 i3 = i1 + 8 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i5 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) != 0) {
  STACKTOP = i4;
  return;
 }
 i2 = HEAP32[(HEAP32[(HEAP32[i5 + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = __ZN7WebCore4Page20scrollingCoordinatorEv(i2) | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = HEAP32[(HEAP32[i3 >> 2] | 0) + 40 >> 2] | 0;
 i3 = HEAP32[i2 + 208 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 60 >> 2] | 0;
 i13 = i3 + 56 | 0;
 i7 = HEAP32[i13 >> 2] | 0;
 i9 = HEAP32[i13 + 4 >> 2] | 0;
 i13 = HEAP32[i1 + 108 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i18 = 0;
  } else {
   if ((HEAP8[i3 + 93 | 0] & 1) == 0) {
    i18 = 0;
    break;
   }
   i18 = HEAP32[i3 + 24 >> 2] | 0;
  }
 } while (0);
 FUNCTION_TABLE_viiiii[i6 & 3](i5, i7, i9, i13, i18);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore21RenderLayerCompositor18frameViewDidScrollEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 i7 = i2 + 40 | 0;
 i8 = i1 + 108 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i9 = i1 + 8 | 0;
 i10 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i11 = __ZN7WebCore4Page20scrollingCoordinatorEv(i10) | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   if (!(__ZNK7WebCore20ScrollingCoordinator32coordinatesScrollingForFrameViewEPNS_9FrameViewE(i11, HEAP32[(HEAP32[i9 >> 2] | 0) + 116 >> 2] | 0) | 0)) {
    break;
   }
   HEAP8[i1 + 234 | 0] = 0;
   i11 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i11 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   i12 = HEAP32[(HEAP32[i11 + 20 >> 2] | 0) + 8 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 308 >> 2] & 31](i12);
   STACKTOP = i2;
   return;
  }
 } while (0);
 i1 = HEAP32[(HEAP32[i9 >> 2] | 0) + 116 >> 2] | 0;
 i10 = i3 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 7](i3, i1 | 0, 0);
 i3 = HEAP32[i10 >> 2] | 0;
 i12 = HEAP32[i10 + 4 >> 2] | 0;
 i10 = HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0;
 do {
  if ((HEAP8[(HEAP32[i10 + 36 >> 2] | 0) + 183 | 0] & 8) != 0) {
   i11 = HEAP32[i10 + 32 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i13 = __ZN7WebCore4Page20scrollingCoordinatorEv(i11) | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 84 >> 2] & 31](i13, (i1 | 0) == 0 ? 0 : i1 + 36 | 0);
  }
 } while (0);
 i10 = HEAP32[i8 >> 2] | 0;
 i8 = HEAP32[(HEAP32[i10 >> 2] | 0) + 56 >> 2] | 0;
 HEAPF32[i4 >> 2] = +(-i3 | 0);
 HEAPF32[i4 + 4 >> 2] = +(-i12 | 0);
 FUNCTION_TABLE_vii[i8 & 31](i10, i4);
 i4 = HEAP32[(HEAP32[i9 >> 2] | 0) + 40 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i9 = HEAP32[i4 + 208 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP8[i9 + 93 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = HEAP32[i9 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i9 = HEAP32[(HEAP32[i4 >> 2] | 0) + 56 >> 2] | 0;
 __ZNK7WebCore9FrameView28scrollOffsetForFixedPositionEv(i7, i1);
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i5, i6);
 FUNCTION_TABLE_vii[i9 & 31](i4, i5);
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore11RenderLayerES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6expandEPS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 8;
  i6 = 0;
 } else {
  i7 = i4 << 1;
  i5 = ((HEAP32[i1 + 12 >> 2] | 0) * 6 & -1 | 0) < (i7 | 0) ? i4 : i7;
  i6 = i4;
 }
 i4 = i1 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i5 - 1;
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 2) | 0;
 if ((i6 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i5 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i5 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i3 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L10 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 7;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L10;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 7;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 7) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i6 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore21RenderLayerCompositor32cacheAcceleratedCompositingFlagsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0;
 i4 = HEAP32[i3 + 36 >> 2] | 0;
 i5 = i4 + 180 | 0;
 do {
  if ((HEAP8[i5] & 8) == 0) {
   i6 = 0;
  } else {
   i7 = HEAP32[i3 + 32 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i6 = 1;
    break;
   }
   i8 = HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0;
   i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 316 >> 2] & 7](i8) | 0;
   HEAP32[i1 + 76 >> 2] = i7;
   i6 = (i7 | 0) != 0;
  }
 } while (0);
 i3 = HEAP8[i4 + 190 | 0] | 0;
 i7 = i3 & 4;
 i8 = i3 & 8;
 do {
  if ((HEAP8[i4 + 185 | 0] & 2) != 0 & i6) {
   if ((__ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) == 0) {
    i9 = 1;
    break;
   }
   if ((__ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) == 0) {
    i9 = 0;
    break;
   }
   if ((HEAP32[i1 + 76 >> 2] & 64 | 0) == 0) {
    i9 = 0;
    break;
   }
   i9 = __ZN7WebCore9FrameView12isScrollableEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] | 0) | 0;
  } else {
   i9 = 0;
  }
 } while (0);
 i2 = HEAP8[i5] | 0;
 i5 = i1 + 72 | 0;
 do {
  if ((i6 & 1 | 0) == (HEAP8[i5] & 1 | 0)) {
   if ((i7 & 255) >>> 2 << 24 >> 24 != (HEAP8[i1 + 84 | 0] & 1)) {
    i10 = 13;
    break;
   }
   if ((i8 & 255) >>> 3 << 24 >> 24 != (HEAP8[i1 + 85 | 0] & 1)) {
    i10 = 13;
    break;
   }
   if ((i9 & 1 | 0) != (HEAP8[i1 + 92 | 0] & 1 | 0)) {
    i10 = 13;
   }
  } else {
   i10 = 13;
  }
 } while (0);
 do {
  if ((i10 | 0) == 13) {
   if ((HEAP8[i1 + 88 | 0] & 1) == 0) {
    break;
   }
   HEAP8[i1 + 89 | 0] = 1;
  }
 } while (0);
 i10 = i1 + 84 | 0;
 i4 = (i7 & 255) >>> 2;
 i7 = (HEAP8[i10] & 1) == i4 << 24 >> 24;
 HEAP8[i5] = i6 & 1;
 HEAP8[i10] = i4;
 HEAP8[i1 + 85 | 0] = (i8 & 255) >>> 3;
 HEAP8[i1 + 92 | 0] = i9 & 1;
 HEAP8[i1 + 86 | 0] = (i2 & 255) >>> 7;
 if (i7) {
  return;
 }
 i7 = HEAP32[i1 + 156 >> 2] | 0;
 if ((i7 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 212 >> 2] & 31](i7, i4 << 24 >> 24 != 0);
 }
 i4 = HEAP32[i1 + 160 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 212 >> 2] & 31](i4, (HEAP8[i10] & 1) != 0);
 }
 i4 = HEAP32[i1 + 164 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 212 >> 2] & 31](i4, (HEAP8[i10] & 1) != 0);
 return;
}
function __ZN7WebCore21RenderLayerCompositor15layerTreeAsTextEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 __ZN7WebCore21RenderLayerCompositor23updateCompositingLayersENS_21CompositingUpdateTypeEPNS_11RenderLayerE(i2, 1, 0);
 i8 = i2 + 12 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore21RenderLayerCompositor24flushPendingLayerChangesEb(i2, 1);
 i9 = i3 & 1;
 i10 = (i3 & 2 | 0) == 0 ? i9 : i9 | 2;
 i9 = (i3 & 4 | 0) == 0 ? i10 : i10 | 4;
 i10 = (i3 & 8 | 0) != 0;
 i11 = i10 ? i9 | 8 : i9;
 i9 = (i3 & 16 | 0) == 0 ? i11 : i11 | 16;
 i11 = (i3 & 32 | 0) == 0 ? i9 : i9 | 32;
 __ZNK7WebCore13GraphicsLayer15layerTreeAsTextEj(i5, HEAP32[i8 >> 2] | 0, i11);
 i8 = i2 + 8 | 0;
 i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 40 >> 2] | 0;
 i3 = HEAP32[i9 + 208 >> 2] | 0;
 do {
  if (!((HEAP32[i2 + 80 >> 2] | 0) > ((i3 | 0) != 0 | 0) | (i9 | 0) == 0 | (i3 | 0) == 0)) {
   if ((HEAP8[i3 + 90 | 0] & 1) == 0) {
    break;
   }
   if ((i11 & 4 | 0) != 0) {
    break;
   }
   __ZN3WTF6StringC1EPKc(i6, H_BASE + 224 | 0);
   i12 = i6 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i14 = i5 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i13;
   do {
    if ((i15 | 0) != 0) {
     i13 = i15 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i15 = HEAP32[i12 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i14 = i15 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i14 >> 2] = i13;
    break;
   }
  }
 } while (0);
 if (i10) {
  __ZNK7WebCore9FrameView25trackedRepaintRectsAsTextEv(i7, HEAP32[(HEAP32[i8 >> 2] | 0) + 116 >> 2] | 0);
  __ZN3WTF6String6appendERKS0_(i7, i5);
  i8 = i7 | 0;
  i7 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i1 >> 2] = i7;
 } else {
  i7 = i5 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i1 >> 2] = i8;
 }
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i8 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore21RenderLayerCompositor28requiresCompositingForPluginERNS_22RenderLayerModelObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 80 | 0;
 if ((HEAP32[i1 + 76 >> 2] & 4 | 0) == 0) {
  i14 = 0;
  STACKTOP = i3;
  return i14 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 72 >> 2] & 7](i2 | 0) | 0)) {
  i14 = 0;
  STACKTOP = i3;
  return i14 | 0;
 }
 if (!(__ZNK7WebCore20RenderEmbeddedObject28allowsAcceleratedCompositingEv(i2) | 0)) {
  i14 = 0;
  STACKTOP = i3;
  return i14 | 0;
 }
 HEAP8[i1 + 87 | 0] = 1;
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i1 & 31 | 0) == 0) {
  i15 = i2;
  i16 = i2;
  i17 = i2;
  i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 744 >> 2] & 7](i16) | 0;
  i19 = i2;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 712 >> 2] & 31](i10, i16);
  i20 = (HEAP32[i10 >> 2] | 0) + i18 | 0;
  i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 736 >> 2] & 7](i16) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 704 >> 2] & 31](i11, i16);
  i17 = (HEAP32[i11 >> 2] | 0) + i18 | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i4, i15);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 712 >> 2] & 31](i5, i16);
  i18 = (HEAP32[i4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 716 >> 2] & 31](i6, i16);
  i5 = i18 - (HEAP32[i6 >> 2] | 0) | 0;
  __ZNK7WebCore9RenderBox12clientHeightEv(i7, i15);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 704 >> 2] & 31](i8, i16);
  i15 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 708 >> 2] & 31](i9, i16);
  i16 = i15 - (HEAP32[i9 >> 2] | 0) | 0;
  HEAP32[i13 >> 2] = i20;
  HEAP32[i13 + 4 >> 2] = i17;
  HEAP32[i13 + 8 >> 2] = i5;
  HEAP32[i13 + 12 >> 2] = i16;
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i12, i13);
  i14 = (Math_imul(HEAP32[i12 + 8 >> 2] | 0, HEAP32[i12 + 12 >> 2] | 0) | 0) > 1;
  STACKTOP = i3;
  return i14 | 0;
 }
 if ((i1 & 32768 | 0) == 0) {
  i14 = 0;
  STACKTOP = i3;
  return i14 | 0;
 }
 i14 = (HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 208 >> 2] | 0) != 0;
 STACKTOP = i3;
 return i14 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore11RenderLayerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore21RenderLayerCompositorD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 112;
 HEAP32[i1 + 4 >> 2] = H_BASE + 192;
 i2 = i1 + 104 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 }
 i3 = i1 + 108 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 240 | 0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 176 | 0);
 i4 = HEAP32[i1 + 168 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 i4 = i1 + 164 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 }
 i5 = i1 + 160 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 i4 = i1 + 156 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 }
 i5 = i1 + 152 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 i4 = HEAP32[i1 + 132 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 112 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 16 | 0);
 i4 = i1 + 12 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 return;
}
function __ZN7WebCore21RenderLayerCompositorD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 112;
 HEAP32[i1 + 4 >> 2] = H_BASE + 192;
 i2 = i1 + 104 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 }
 i3 = i1 + 108 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 240 | 0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 176 | 0);
 i4 = HEAP32[i1 + 168 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 i4 = i1 + 164 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 }
 i5 = i1 + 160 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 i4 = i1 + 156 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 }
 i5 = i1 + 152 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 i4 = HEAP32[i1 + 132 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 112 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 16 | 0);
 i4 = i1 + 12 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 return;
}
function __ZN7WebCore21RenderLayerCompositor10OverlapMap23popCompositingContainerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = _llvm_uadd_with_overflow_i32(i3 | 0, -2 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i5 = i4;
 i4 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + (i5 * 28 & -1) | 0;
 i7 = _llvm_uadd_with_overflow_i32(i3 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i3 = i7;
 i7 = HEAP32[i1 + (i3 * 28 & -1) >> 2] | 0;
 i8 = HEAP32[i1 + (i3 * 28 & -1) + 8 >> 2] | 0;
 i9 = i1 + (i5 * 28 & -1) + 8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i10 + i8 | 0;
 if (i11 >>> 0 > (HEAP32[i1 + (i5 * 28 & -1) + 4 >> 2] | 0) >>> 0) {
  __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6 | 0, i11);
  i12 = HEAP32[i9 >> 2] | 0;
 } else {
  i12 = i10;
 }
 if (i11 >>> 0 < i12 >>> 0) {
  _WTFCrash();
 }
 i10 = HEAP32[i6 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i6 = 0;
  while (1) {
   i13 = i10 + (i6 + i12 << 4) | 0;
   i14 = i7 + (i6 << 4) | 0;
   HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i13 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
   HEAP32[i13 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
   HEAP32[i13 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
   i6 = i6 + 1 | 0;
   if (i6 >>> 0 >= i8 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i9 >> 2] = i11;
 __ZN7WebCore7IntRect5uniteERKS0_(i1 + (i5 * 28 & -1) + 12 | 0, i1 + (i3 * 28 & -1) + 12 | 0);
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i1 = i3 - 1 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i4 = i3 + (i1 * 28 & -1) + 8 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = i3 + (i1 * 28 & -1) | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 >> 2] = i1;
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i3 + (i1 * 28 & -1) + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 HEAP32[i2 >> 2] = i1;
 return;
}
function __ZN3WTF7HashSetIPN7WebCore11RenderLayerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L3 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L3;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 2) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore11RenderLayerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZNK7WebCore21RenderLayerCompositor31computeFixedViewportConstraintsERNS_11RenderLayerE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZNK7WebCore9FrameView37viewportConstrainedVisibleContentRectEv(i5, HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 116 >> 2] | 0);
 HEAPF32[i1 + 4 >> 2] = +0;
 HEAPF32[i1 + 8 >> 2] = +0;
 i2 = i1 + 12 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 >> 2] = H_BASE + 80;
 i6 = i1 + 16 | 0;
 i7 = i6;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 i7 = (HEAP32[(HEAP32[i3 + 208 >> 2] | 0) + 16 >> 2] | 0) + 20 | 0;
 i8 = i1 + 32 | 0;
 i9 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i8 + 4 >> 2] = i9;
 d10 = +(+(HEAP32[i5 >> 2] | 0));
 d11 = +(+(HEAP32[i5 + 4 >> 2] | 0));
 d12 = +(+(HEAP32[i5 + 8 >> 2] | 0));
 d13 = +(+(HEAP32[i5 + 12 >> 2] | 0));
 i5 = i6;
 HEAPF32[i5 >> 2] = d10;
 HEAPF32[i5 + 4 >> 2] = d11;
 i5 = i1 + 24 | 0;
 HEAPF32[i5 >> 2] = d12;
 HEAPF32[i5 + 4 >> 2] = d13;
 i5 = HEAP32[(HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 36 >> 2] | 0) + 16 >> 2] | 0;
 i3 = HEAP8[i5 + 9 | 0] | 0;
 if (i3 << 24 >> 24 == 0) {
  i14 = 0;
 } else {
  HEAP32[i2 >> 2] = 1;
  i14 = 1;
 }
 i1 = HEAP8[i5 + 17 | 0] | 0;
 if (i1 << 24 >> 24 == 0) {
  i15 = i14;
 } else {
  i6 = i14 | 2;
  HEAP32[i2 >> 2] = i6;
  i15 = i6;
 }
 i6 = HEAP8[i5 + 25 | 0] | 0;
 if (i6 << 24 >> 24 == 0) {
  i16 = i15;
 } else {
  i14 = i15 | 4;
  HEAP32[i2 >> 2] = i14;
  i16 = i14;
 }
 i14 = HEAP8[i5 + 33 | 0] | 0;
 if (i14 << 24 >> 24 == 0) {
  i17 = i16;
 } else {
  i5 = i16 | 8;
  HEAP32[i2 >> 2] = i5;
  i17 = i5;
 }
 if ((i3 | i1) << 24 >> 24 == 0) {
  i1 = i17 | 1;
  HEAP32[i2 >> 2] = i1;
  i18 = i1;
 } else {
  i18 = i17;
 }
 if ((i6 | i14) << 24 >> 24 != 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i2 >> 2] = i18 | 4;
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorIN7WebCore21RenderLayerCompositor10OverlapMap8RectListELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS4_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 * 28 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore21RenderLayerCompositor10OverlapMap8RectListELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (((i2 - i7 | 0) / 28 & -1) * 28 & -1) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore21RenderLayerCompositor10OverlapMap8RectListELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 i2 = i12 + (i6 * 28 & -1) | 0;
 HEAP32[i2 >> 2] = 0;
 i5 = i12 + (i6 * 28 & -1) + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i8 = i12 + (i6 * 28 & -1) + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 i1 = i11 + 8 | 0;
 HEAP32[i8 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = 0;
 i1 = i11 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = i8;
 i8 = i11 + 4 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i1;
 i1 = i12 + (i6 * 28 & -1) + 12 | 0;
 i6 = i11 + 12 | 0;
 HEAP32[i1 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i1 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN3WTF6VectorIN7WebCore21RenderLayerCompositor10OverlapMap8RectListELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 28 & -1) | 0;
 if (i2 >>> 0 > 153391689 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 28 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 28 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = i7 | 0;
   HEAP32[i2 >> 2] = 0;
   i8 = i7 + 4 | 0;
   HEAP32[i8 >> 2] = 0;
   i9 = i7 + 8 | 0;
   HEAP32[i9 >> 2] = 0;
   i10 = i6 + 8 | 0;
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i10 >> 2] = 0;
   i9 = i6 | 0;
   i11 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i9 >> 2] = i11;
   i11 = i6 + 4 | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i11 >> 2] = i2;
   i2 = i7 + 12 | 0;
   i8 = i6 + 12 | 0;
   HEAP32[i2 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i2 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
   HEAP32[i2 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   HEAP32[i2 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
   if ((HEAP32[i10 >> 2] | 0) != 0) {
    HEAP32[i10 >> 2] = 0;
   }
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i9 >> 2] = 0;
    HEAP32[i11 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i10);
   }
   i10 = i6 + 28 | 0;
   if ((i10 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i10;
    i7 = i7 + 28 | 0;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore21RenderLayerCompositor30removeViewportConstrainedLayerERNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 112 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i1 + 120 >> 2] | 0;
 i9 = i2;
 i10 = i9 + ~(i9 << 15) | 0;
 i9 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i9 >>> 6 ^ i9;
 i9 = i10 + ~(i10 << 11) | 0;
 i10 = i9 >>> 16 ^ i9;
 i9 = i8 & i10;
 i11 = i7 + (i9 << 2) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 L4 : do {
  if ((i12 | 0) == (i2 | 0)) {
   i13 = i11;
  } else {
   i14 = (i10 >>> 23) + ~i10 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = i9;
   i17 = i12;
   while (1) {
    if ((i17 | 0) == 0) {
     break;
    }
    i18 = (i15 | 0) == 0 ? i14 : i15;
    i19 = i18 + i16 & i8;
    i20 = i7 + (i19 << 2) | 0;
    i21 = HEAP32[i20 >> 2] | 0;
    if ((i21 | 0) == (i2 | 0)) {
     i13 = i20;
     break L4;
    } else {
     i15 = i18;
     i16 = i19;
     i17 = i21;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = HEAP32[i2 + 208 >> 2] | 0;
 if ((i13 | 0) != 0) {
  __ZN7WebCore18RenderLayerBacking30detachFromScrollingCoordinatorEv(i13);
 }
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore11RenderLayerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i6, i4) | 0;
 HEAP32[i5 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore11RenderLayerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 132 | 0, i5) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore21RenderLayerCompositor18layerWillBeRemovedERNS_11RenderLayerES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i3 + 208 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore21RenderLayerCompositor30removeViewportConstrainedLayerERNS_11RenderLayerE(i1, i3);
 __ZNK7WebCore18RenderLayerBacking16compositedBoundsEv(i7, HEAP32[i8 >> 2] | 0);
 i8 = i6;
 i2 = __ZNK7WebCore11RenderLayer35enclosingCompositingLayerForRepaintENS_16IncludeSelfOrNotE(i3, 1) | 0;
 if ((i2 | 0) != 0) {
  i9 = i5 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i5 + 4 | 0;
  HEAP32[i10 >> 2] = 0;
  __ZNK7WebCore11RenderLayer20convertToLayerCoordsEPKS0_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i3, i2, i5, 0);
  i5 = i7;
  HEAP32[i8 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i8 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
  HEAP32[i8 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
  HEAP32[i8 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
  i5 = HEAP32[i10 >> 2] | 0;
  i10 = i6 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + (HEAP32[i9 >> 2] | 0);
  i9 = i6 + 4 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + i5;
  __ZN7WebCore11RenderLayer28setBackingNeedsRepaintInRectERKNS_10LayoutRectE(i2, i6);
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == (HEAP32[i6 + 40 >> 2] | 0)) {
  __ZN7WebCore9FrameView37setNeedsOneShotDrawingSynchronizationEv(HEAP32[i6 + 116 >> 2] | 0);
 }
 if ((HEAP8[i1 + 88 | 0] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP8[i1 + 89 | 0] = 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore21RenderLayerCompositor30updateViewportConstraintStatusERNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 + 32 >> 2] | 0;
 L1 : do {
  if ((HEAP32[i6 + 20 >> 2] & 25165824 | 0) == 25165824) {
   if ((__ZNK7WebCore11RenderLayer26enclosingOverflowClipLayerENS_16IncludeSelfOrNotE(i2, 1) | 0) == 0) {
    i7 = 8;
   } else {
    i7 = 9;
   }
  } else {
   if ((HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 48 >> 2] & 29360128 | 0) != 25165824) {
    i7 = 9;
    break;
   }
   i8 = __ZNK7WebCore11RenderLayer17stackingContainerEv(i2) | 0;
   if ((i8 | 0) == 0) {
    i7 = 8;
    break;
   } else {
    i9 = i8;
   }
   while (1) {
    if ((HEAP32[i9 + 208 >> 2] | 0) != 0) {
     if ((HEAP32[(HEAP32[(HEAP32[i9 + 32 >> 2] | 0) + 36 >> 2] | 0) + 48 >> 2] & 29360128 | 0) == 25165824) {
      i7 = 9;
      break L1;
     }
    }
    i8 = __ZNK7WebCore11RenderLayer17stackingContainerEv(i9) | 0;
    if ((i8 | 0) == 0) {
     i7 = 8;
     break;
    } else {
     i9 = i8;
    }
   }
  }
 } while (0);
 if ((i7 | 0) == 9) {
  __ZN7WebCore21RenderLayerCompositor30removeViewportConstrainedLayerERNS_11RenderLayerE(i1, i2);
  STACKTOP = i3;
  return;
 } else if ((i7 | 0) == 8) {
  HEAP32[i4 >> 2] = i2;
  __ZN3WTF9HashTableIPN7WebCore11RenderLayerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i5, i1 + 112 | 0, i4, i4);
  __ZN7WebCore21RenderLayerCompositor40registerOrUpdateViewportConstrainedLayerERNS_11RenderLayerE(i1, i2);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore21RenderLayerCompositor36computeRegionCompositingRequirementsEPNS_23RenderNamedFlowFragmentEPNS0_10OverlapMapERNS_16CompositingStateERbS7_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 if ((HEAP8[i2 + 160 | 0] & 1) == 0) {
  return;
 }
 i7 = HEAP32[i2 + 116 >> 2] | 0;
 i8 = (i3 | 0) != 0;
 if (i8) {
  __ZN7WebCore17RenderGeometryMap20pushRenderFlowThreadEPKNS_16RenderFlowThreadE(i3 + 32 | 0, i7);
 }
 i9 = __ZN7WebCore16RenderFlowThread21getLayerListForRegionEPNS_23RenderNamedFlowFragmentE(i7, i2) | 0;
 L7 : do {
  if ((i9 | 0) != 0) {
   i10 = i9 + 8 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i12 = i9 | 0;
   i13 = i7 + 40 | 0;
   i14 = 0;
   i15 = i11;
   while (1) {
    if (i15 >>> 0 <= i14 >>> 0) {
     break;
    }
    __ZN7WebCore21RenderLayerCompositor30computeCompositingRequirementsEPNS_11RenderLayerERS1_PNS0_10OverlapMapERNS_16CompositingStateERbS8_(i1, HEAP32[i13 >> 2] | 0, HEAP32[(HEAP32[i12 >> 2] | 0) + (i14 << 2) >> 2] | 0, i3, i4, i5, i6);
    i16 = i14 + 1 | 0;
    if (i16 >>> 0 >= i11 >>> 0) {
     break L7;
    }
    i14 = i16;
    i15 = HEAP32[i10 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 if (!i8) {
  return;
 }
 i8 = i3 + 32 | 0;
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i17 = 0;
  } else {
   if ((HEAP32[i3 + 24 >> 2] & 1 | 0) == 0) {
    i17 = 0;
    break;
   }
   i17 = i3;
  }
 } while (0);
 __ZN7WebCore17RenderGeometryMap21popMappingsToAncestorEPKNS_22RenderLayerModelObjectE(i8, i17);
 return;
}
function __ZNK7WebCore21RenderLayerCompositor36requiresCompositingForIndirectReasonERNS_22RenderLayerModelObjectEbbRNS_11RenderLayer25IndirectCompositingReasonE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 L1 : do {
  if (i3) {
   L3 : do {
    if ((HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 172 >> 2] | 0) == 0) {
     i1 = i2 | 0;
     i6 = HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 20 >> 2] | 0;
     if (+HEAPF32[i6 + 4 >> 2] < +1) {
      break;
     }
     i7 = i6 + 116 | 0;
     while (1) {
      if ((HEAP32[i7 + 4 >> 2] | 0) != 0) {
       break L3;
      }
      i7 = HEAP32[i7 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
     }
     if ((HEAP32[(HEAP32[i6 + 164 >> 2] | 0) + 8 >> 2] | 0) != 0) {
      break;
     }
     if ((HEAP32[(HEAP32[i6 + 76 >> 2] | 0) + 12 >> 2] | 0) != 0) {
      break;
     }
     if ((HEAP32[i6 + 296 >> 2] & 4063232 | 0) != 0) {
      break;
     }
     if ((HEAP32[i2 + 20 >> 2] & 262144 | 0) != 0) {
      break;
     }
     if ((HEAP32[i2 + 24 >> 2] & 32 | 0) == 0) {
      break L1;
     }
     i7 = HEAP32[i1 + 100 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break L1;
     }
     if ((HEAP32[i7 + 28 >> 2] | 0) == 0) {
      break L1;
     }
    }
   } while (0);
   HEAP32[i5 >> 2] = 4;
   i8 = 1;
   return i8 | 0;
  }
 } while (0);
 do {
  if (i4) {
   i3 = HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 20 >> 2] | 0;
   if ((HEAP32[i3 + 292 >> 2] & 512 | 0) != 0) {
    HEAP32[i5 >> 2] = 6;
    i8 = 1;
    return i8 | 0;
   }
   if (+HEAPF32[i3 + 16 >> 2] <= +0) {
    break;
   }
   HEAP32[i5 >> 2] = 5;
   i8 = 1;
   return i8 | 0;
  }
 } while (0);
 HEAP32[i5 >> 2] = 0;
 i8 = 0;
 return i8 | 0;
}
function __ZN7WebCore21RenderLayerCompositor15attachRootLayerENS0_19RootLayerAttachmentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 do {
  if ((i2 | 0) == 2) {
   i4 = i1 + 8 | 0;
   __ZN7WebCore21HTMLFrameOwnerElement27scheduleSetNeedsStyleRecalcENS_15StyleChangeTypeE(__ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0, 49152);
   i5 = i4;
  } else if ((i2 | 0) == 1) {
   i4 = i1 + 8 | 0;
   i6 = HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0;
   i7 = HEAP32[i6 + 32 >> 2] | 0;
   if ((i7 | 0) == 0) {
    return;
   } else {
    i8 = HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i7 = HEAP32[i1 + 152 >> 2] | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i8 >> 2] | 0) + 300 >> 2] & 7](i8, i6, (i7 | 0) == 0 ? i3 : i7);
    i5 = i4;
    break;
   }
  } else {
   i5 = i1 + 8 | 0;
  }
 } while (0);
 HEAP32[i1 + 100 >> 2] = i2;
 i2 = HEAP32[(HEAP32[i5 >> 2] | 0) + 40 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = HEAP32[i2 + 208 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   __ZN7WebCore18RenderLayerBacking18updateDrawsContentEv(i3);
  }
 } while (0);
 i2 = i1 + 91 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  return;
 }
 HEAP8[i1 + 234 | 0] = 0;
 i1 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 308 >> 2] & 31](i5);
 }
 HEAP8[i2] = 0;
 return;
}
function __ZNK7WebCore21RenderLayerCompositor39customPositionForVisibleRectComputationEPKNS_13GraphicsLayerERNS_10FloatPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0, d11 = +0, i12 = 0, i13 = 0, d14 = +0, d15 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 if ((HEAP32[i1 + 108 >> 2] | 0) != (i2 | 0)) {
  STACKTOP = i4;
  return;
 }
 d9 = +-0 - +HEAPF32[i3 >> 2];
 d10 = +-0 - +HEAPF32[i3 + 4 >> 2];
 i2 = i1 + 8 | 0;
 if ((__ZNK7WebCore9FrameView30scrollBehaviorForFixedElementsEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] | 0) | 0) == 0) {
  i1 = (HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] | 0) + 36 | 0;
  d11 = +_round(+d9);
  do {
   if (d11 < +2147483647) {
    if (d11 <= +-2147483648) {
     i12 = -2147483648;
     break;
    }
    i12 = ~~d11;
   } else {
    i12 = 2147483647;
   }
  } while (0);
  d11 = +_round(+d10);
  do {
   if (d11 < +2147483647) {
    if (d11 <= +-2147483648) {
     i13 = -2147483648;
     break;
    }
    i13 = ~~d11;
   } else {
    i13 = 2147483647;
   }
  } while (0);
  HEAP32[i8 >> 2] = i12;
  HEAP32[i8 + 4 >> 2] = i13;
  __ZN7WebCore14ScrollableArea34constrainScrollPositionForOverhangERKNS_8IntPointE(i7, i1, i8);
  __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i6, i7);
  d11 = +HEAPF32[i5 >> 2];
  d14 = d11;
  d15 = +HEAPF32[i5 + 4 >> 2];
 } else {
  d14 = d9;
  d15 = d10;
 }
 i5 = i3;
 d10 = +(+-0 - d14);
 d14 = +(+-0 - d15);
 HEAPF32[i5 >> 2] = d10;
 HEAPF32[i5 + 4 >> 2] = d14;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore21RenderLayerCompositor10OverlapMap24pushCompositingContainerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 _memset(i3 | 0, 0, 28) | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == (HEAP32[i1 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore21RenderLayerCompositor10OverlapMap8RectListELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS4_EEvOT_(i1 | 0, i3);
  i6 = i3 + 8 | 0;
 } else {
  i7 = HEAP32[i1 >> 2] | 0;
  i1 = i7 + (i5 * 28 & -1) | 0;
  HEAP32[i1 >> 2] = 0;
  i8 = i7 + (i5 * 28 & -1) + 4 | 0;
  HEAP32[i8 >> 2] = 0;
  i9 = i7 + (i5 * 28 & -1) + 8 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i3 + 8 | 0;
  HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i10 >> 2] = 0;
  i9 = i3 | 0;
  i11 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i9 >> 2] = i11;
  i11 = i3 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i11 >> 2] = i9;
  i9 = i7 + (i5 * 28 & -1) + 12 | 0;
  i5 = i3 + 12 | 0;
  HEAP32[i9 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
  HEAP32[i9 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
  HEAP32[i9 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  i6 = i10;
 }
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
 }
 i6 = i3 | 0;
 i10 = HEAP32[i6 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i10);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore21RenderLayerCompositor17clippedByAncestorERNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i1 | 0;
 i4 = i1 + 24 | 0;
 if ((HEAP32[i2 + 208 >> 2] | 0) == 0) {
  i5 = 0;
  STACKTOP = i1;
  return i5 | 0;
 }
 if ((HEAP32[i2 + 36 >> 2] | 0) == 0) {
  i5 = 0;
  STACKTOP = i1;
  return i5 | 0;
 }
 i6 = __ZNK7WebCore11RenderLayer25enclosingCompositingLayerENS_16IncludeSelfOrNotE(i2, 1) | 0;
 if ((i6 | 0) == 0) {
  i5 = 0;
  STACKTOP = i1;
  return i5 | 0;
 } else {
  i7 = i2;
 }
 while (1) {
  if ((i7 | 0) == 0) {
   i5 = 0;
   i8 = 15;
   break;
  }
  i9 = HEAP32[i7 + 36 >> 2] | 0;
  if ((i9 | 0) == (i6 | 0)) {
   break;
  } else {
   i7 = i9;
  }
 }
 if ((i8 | 0) == 15) {
  STACKTOP = i1;
  return i5 | 0;
 }
 if ((i7 | 0) == (i2 | 0)) {
  i5 = 0;
  STACKTOP = i1;
  return i5 | 0;
 }
 HEAP32[i3 >> 2] = i7;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = 5;
 HEAP32[i3 + 12 >> 2] = 0;
 HEAP32[i3 + 16 >> 2] = 1;
 __ZNK7WebCore11RenderLayer18backgroundClipRectERKNS0_16ClipRectsContextE(i4, i2, i3);
 i3 = i4;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != -1073741824 | ((i2 & 0 | 0) != 0 | (HEAP32[i3 + 4 >> 2] & -1 | 0) != (-1073741824 | 0))) {
  i5 = 1;
  STACKTOP = i1;
  return i5 | 0;
 }
 i3 = i4 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 2147483647) {
  i5 = 1;
  STACKTOP = i1;
  return i5 | 0;
 }
 i5 = (i4 & 0 | 0) != 0 | (HEAP32[i3 + 4 >> 2] & -1 | 0) != 2147483647;
 STACKTOP = i1;
 return i5 | 0;
}
function __ZN7WebCore21RenderLayerCompositor20didChangeVisibleRectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 i5 = i3;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = HEAP32[i1 + 152 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i10 | 0) != 0) {
    i11 = i10;
    break;
   }
   STACKTOP = i2;
   return;
  } else {
   i11 = i9;
  }
 } while (0);
 i9 = i1 + 8 | 0;
 i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 116 >> 2] | 0;
 if ((HEAP32[i1 + 104 >> 2] | 0) == 0) {
  __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i5, i10, 0);
 } else {
  __ZNK7WebCore10ScrollView12contentsSizeEv(i7, i10);
  HEAP32[i4 >> 2] = 0;
  HEAP32[i4 + 4 >> 2] = 0;
  i4 = i3 + 8 | 0;
  i3 = HEAP32[i6 + 4 >> 2] | 0;
  HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i4 + 4 >> 2] = i3;
 }
 i3 = HEAP32[(HEAP32[i11 >> 2] | 0) + 276 >> 2] | 0;
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i8, i5);
 if (!(FUNCTION_TABLE_iii[i3 & 7](i11, i8) | 0)) {
  STACKTOP = i2;
  return;
 }
 HEAP8[i1 + 234 | 0] = 0;
 i1 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i9 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 308 >> 2] & 31](i9);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore21RenderLayerCompositor15detachRootLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = i1 + 100 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   return;
  } else if ((i4 | 0) == 2) {
   i5 = HEAP32[i1 + 152 >> 2] | 0;
   if ((i5 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 31](i2);
   } else {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] & 31](i5);
   }
   i5 = i1 + 8 | 0;
   i6 = __ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
   if ((i6 | 0) == 0) {
    i7 = i5;
    break;
   }
   __ZN7WebCore21HTMLFrameOwnerElement27scheduleSetNeedsStyleRecalcENS_15StyleChangeTypeE(i6, 49152);
   i7 = i5;
  } else if ((i4 | 0) == 1) {
   i5 = i1 + 8 | 0;
   i6 = HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0;
   i8 = HEAP32[i6 + 32 >> 2] | 0;
   if ((i8 | 0) == 0) {
    return;
   } else {
    i9 = HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 8 >> 2] | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i9 >> 2] | 0) + 300 >> 2] & 7](i9, i6, 0);
    i7 = i5;
    break;
   }
  } else {
   i7 = i1 + 8 | 0;
  }
 } while (0);
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[(HEAP32[i7 >> 2] | 0) + 40 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i3 + 208 >> 2] | 0;
 if ((i7 | 0) == 0) {
  return;
 }
 __ZN7WebCore18RenderLayerBacking18updateDrawsContentEv(i7);
 return;
}
function __ZN7WebCore21RenderLayerCompositor23updateRootLayerPositionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 i7 = i2 + 40 | 0;
 i8 = i2 + 48 | 0;
 i9 = i1 + 12 | 0;
 if ((HEAP32[i9 >> 2] | 0) != 0) {
  i10 = i1 + 8 | 0;
  __ZNK7WebCore10RenderView12documentRectEv(i3, HEAP32[i10 >> 2] | 0);
  i11 = HEAP32[i9 >> 2] | 0;
  i12 = HEAP32[(HEAP32[i11 >> 2] | 0) + 68 >> 2] | 0;
  i13 = i3 + 8 | 0;
  i14 = HEAP32[i13 + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i5 + 4 >> 2] = i14;
  __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i4, i5);
  FUNCTION_TABLE_vii[i12 & 31](i11, i4);
  i4 = HEAP32[i9 >> 2] | 0;
  i9 = HEAP32[(HEAP32[i4 >> 2] | 0) + 56 >> 2] | 0;
  d15 = +((HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 116 >> 2] | 0) + 644 >> 2] | 0) + (HEAP32[i3 + 4 >> 2] | 0) | 0);
  HEAPF32[i6 >> 2] = +(HEAP32[i3 >> 2] | 0);
  HEAPF32[i6 + 4 >> 2] = d15;
  FUNCTION_TABLE_vii[i9 & 31](i4, i6);
 }
 i6 = HEAP32[i1 + 104 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = HEAP32[(HEAP32[i6 >> 2] | 0) + 68 >> 2] | 0;
 __ZNK7WebCore10ScrollView26unscaledVisibleContentSizeENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i8, HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 116 >> 2] | 0, 0);
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i7, i8);
 FUNCTION_TABLE_vii[i4 & 31](i6, i7);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore21RenderLayerCompositor32computeStickyViewportConstraintsERNS_11RenderLayerE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0, d11 = +0, d12 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i6 | 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 __ZNK7WebCore9FrameView37viewportConstrainedVisibleContentRectEv(i5, HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 116 >> 2] | 0);
 i2 = HEAP32[i3 + 32 >> 2] | 0;
 HEAPF32[i1 + 4 >> 2] = +0;
 HEAPF32[i1 + 8 >> 2] = +0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 _memset(i1 + 16 | 0, 0, 80) | 0;
 d9 = +(HEAP32[i5 + 8 >> 2] | 0);
 d10 = +(HEAP32[i5 + 12 >> 2] | 0);
 d11 = +(+(HEAP32[i5 >> 2] | 0));
 d12 = +(+(HEAP32[i5 + 4 >> 2] | 0));
 HEAPF32[i7 >> 2] = d11;
 HEAPF32[i7 + 4 >> 2] = d12;
 i7 = i6 + 8 | 0;
 d12 = +d9;
 d9 = +d10;
 HEAPF32[i7 >> 2] = d12;
 HEAPF32[i7 + 4 >> 2] = d9;
 __ZNK7WebCore20RenderBoxModelObject32computeStickyPositionConstraintsERNS_33StickyPositionViewportConstraintsERKNS_9FloatRectE(i2, i1, i6);
 i6 = (HEAP32[(HEAP32[i3 + 208 >> 2] | 0) + 16 >> 2] | 0) + 20 | 0;
 i3 = i1 + 88 | 0;
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i3 + 4 >> 2] = i7;
 __ZNK7WebCore20RenderBoxModelObject20stickyPositionOffsetEv(i8, i2);
 i2 = i1 + 80 | 0;
 d9 = +(+(HEAP32[i8 >> 2] | 0));
 d12 = +(+(HEAP32[i8 + 4 >> 2] | 0));
 HEAPF32[i2 >> 2] = d9;
 HEAPF32[i2 + 4 >> 2] = d12;
 STACKTOP = i4;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_viid + 2;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_fi + 2;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_fi + 4;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_fii + 2;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_vii + 16;
}
function __ZN7WebCore21RenderLayerCompositor27repaintInCompositedAncestorERNS_11RenderLayerERKNS_10LayoutRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = __ZNK7WebCore11RenderLayer35enclosingCompositingLayerForRepaintENS_16IncludeSelfOrNotE(i2, 1) | 0;
 if ((i7 | 0) != 0) {
  i8 = i5 | 0;
  HEAP32[i8 >> 2] = 0;
  i9 = i5 + 4 | 0;
  HEAP32[i9 >> 2] = 0;
  __ZNK7WebCore11RenderLayer20convertToLayerCoordsEPKS0_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i2, i7, i5, 0);
  i5 = i6;
  i2 = i3;
  HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  HEAP32[i5 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
  HEAP32[i5 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
  i2 = HEAP32[i9 >> 2] | 0;
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + (HEAP32[i8 >> 2] | 0);
  i8 = i6 + 4 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + i2;
  __ZN7WebCore11RenderLayer28setBackingNeedsRepaintInRectERKNS_10LayoutRectE(i7, i6);
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i7 | 0) != (HEAP32[i6 + 40 >> 2] | 0)) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore9FrameView37setNeedsOneShotDrawingSynchronizationEv(HEAP32[i6 + 116 >> 2] | 0);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore21RenderLayerCompositor33enclosingNonStackingClippingLayerERKNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i1 = i2;
 while (1) {
  i2 = HEAP32[i1 + 36 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = 0;
   i4 = 11;
   break;
  }
  i5 = i2 + 32 | 0;
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
   i3 = 0;
   i4 = 14;
   break;
  }
  if ((HEAP8[i2 + 21 | 0] & 16) != 0) {
   i3 = 0;
   i4 = 13;
   break;
  }
  if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i2) | 0) {
   i3 = 0;
   i4 = 10;
   break;
  }
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 + 20 >> 2] | 0;
  if ((i5 & 25165824 | 0) == 16777216) {
   if ((HEAP8[(HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 8 >> 2] | 0) + 36 | 0] & 1) != 0) {
    i3 = i2;
    i4 = 15;
    break;
   }
  }
  if ((i5 & 65536 | 0) == 0) {
   i1 = i2;
  } else {
   i3 = i2;
   i4 = 12;
   break;
  }
 }
 if ((i4 | 0) == 15) {
  return i3 | 0;
 } else if ((i4 | 0) == 10) {
  return i3 | 0;
 } else if ((i4 | 0) == 12) {
  return i3 | 0;
 } else if ((i4 | 0) == 14) {
  return i3 | 0;
 } else if ((i4 | 0) == 11) {
  return i3 | 0;
 } else if ((i4 | 0) == 13) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore21RenderLayerCompositor24parentFrameContentLayersEPNS_12RenderWidgetE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = __ZNK7WebCore21HTMLFrameOwnerElement15contentDocumentEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 + 1584 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = __ZN7WebCore10RenderView10compositorEv(i4) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 100 >> 2] | 0) != 2) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + 208 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = __ZNK7WebCore18RenderLayerBacking18parentForSublayersEv(i4) | 0;
 i4 = HEAP32[i2 + 152 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i2 + 12 >> 2] | 0;
 } else {
  i5 = i4;
 }
 do {
  if ((HEAP32[i1 + 360 >> 2] | 0) == 1) {
   if ((HEAP32[HEAP32[i1 + 352 >> 2] >> 2] | 0) == (i5 | 0)) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 __ZN7WebCore13GraphicsLayer17removeAllChildrenEv(i1);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 31](i1, i5);
 i3 = 1;
 return i3 | 0;
}
function __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
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
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 + (i6 << 4) | 0;
 if (i5 >>> 0 > 268435455 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 4) | 0;
 HEAP32[i3 >> 2] = i7 >>> 4;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   i5 = i7;
   i8 = i6;
   HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i5 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
   HEAP32[i5 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   HEAP32[i5 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
   i8 = i6 + 16 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
    i7 = i7 + 16 | 0;
   }
  }
 }
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore21RenderLayerCompositor33rebuildRegionCompositingLayerTreeEPNS_23RenderNamedFlowFragmentERN3WTF6VectorIPNS_13GraphicsLayerELj0ENS3_15CrashOnOverflowEEEi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((HEAP8[i2 + 160 | 0] & 1) == 0) {
  return;
 }
 i5 = __ZN7WebCore16RenderFlowThread21getLayerListForRegionEPNS_23RenderNamedFlowFragmentE(HEAP32[i2 + 116 >> 2] | 0, i2) | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i2 = i5 + 8 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i7 = i5 | 0;
 i5 = i4 + 1 | 0;
 i4 = 0;
 i8 = i6;
 while (1) {
  if (i8 >>> 0 <= i4 >>> 0) {
   i9 = 6;
   break;
  }
  __ZN7WebCore21RenderLayerCompositor27rebuildCompositingLayerTreeERNS_11RenderLayerERN3WTF6VectorIPNS_13GraphicsLayerELj0ENS3_15CrashOnOverflowEEEi(i1, HEAP32[(HEAP32[i7 >> 2] | 0) + (i4 << 2) >> 2] | 0, i3, i5);
  i10 = i4 + 1 | 0;
  if (i10 >>> 0 >= i6 >>> 0) {
   i9 = 11;
   break;
  }
  i4 = i10;
  i8 = HEAP32[i2 >> 2] | 0;
 }
 if ((i9 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i9 | 0) == 11) {
  return;
 }
}
function __ZNK7WebCore21RenderLayerCompositor19needsToBeCompositedERKNS_11RenderLayerEPNS1_38ViewportConstrainedNotCompositedReasonE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((HEAP8[i1 + 72 | 0] & 1) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i2 + 20 | 0;
 if ((HEAP8[i5] & 32) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i6 = i2 + 32 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP32[i7 + 20 >> 2] & 805306368 | 0) != 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 248 >> 2] & 7](i7 | 0) | 0) {
    i4 = 0;
    return i4 | 0;
   }
   if ((HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 805306368 | 0) == 268435456) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 if (__ZNK7WebCore21RenderLayerCompositor24requiresCompositingLayerERKNS_11RenderLayerEPNS1_38ViewportConstrainedNotCompositedReasonE(i1, i2, i3) | 0) {
  i4 = 1;
  return i4 | 0;
 }
 if ((HEAP32[i5 >> 2] & 469762048 | 0) != 0) {
  i4 = 1;
  return i4 | 0;
 }
 if ((HEAP8[i1 + 88 | 0] & 1) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP8[i2 + 21 | 0] & 16) != 0;
 return i4 | 0;
}
function __ZN7WebCore21RenderLayerCompositor32notifyIFramesOfCompositingChangeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 8 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i3 = HEAP32[(HEAP32[i1 + 116 >> 2] | 0) + 216 >> 2] | 0;
 i4 = HEAP32[i3 + 64 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = i1;
 } else {
  i1 = i4;
  while (1) {
   i4 = i1 + 456 | 0;
   i6 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     if ((__ZNK7WebCore8Document12ownerElementEv(i6) | 0) == 0) {
      break;
     }
     __ZN7WebCore21HTMLFrameOwnerElement27scheduleSetNeedsStyleRecalcENS_15StyleChangeTypeE(__ZNK7WebCore8Document12ownerElementEv(HEAP32[i4 >> 2] | 0) | 0, 49152);
    }
   } while (0);
   i1 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i1 + 40 | 0, i3) | 0;
   if ((i1 | 0) == 0) {
    break;
   }
  }
  i5 = HEAP32[i2 >> 2] | 0;
 }
 i2 = __ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[(HEAP32[i5 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore21HTMLFrameOwnerElement27scheduleSetNeedsStyleRecalcENS_15StyleChangeTypeE(i2, 49152);
 return;
}
function __ZN7WebCoreL33resetTrackedRepaintRectsRecursiveERNS_13GraphicsLayerE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1;
 L1 : while (1) {
  __ZN7WebCore13GraphicsLayer20resetTrackedRepaintsEv(i2);
  i1 = i2 + 360 | 0;
  i3 = HEAP32[i1 >> 2] | 0;
  L3 : do {
   if ((i3 | 0) != 0) {
    i4 = i2 + 352 | 0;
    i5 = 0;
    i6 = i3;
    while (1) {
     if (i6 >>> 0 <= i5 >>> 0) {
      i7 = 5;
      break L1;
     }
     __ZN7WebCoreL33resetTrackedRepaintRectsRecursiveERNS_13GraphicsLayerE(HEAP32[(HEAP32[i4 >> 2] | 0) + (i5 << 2) >> 2] | 0);
     i8 = i5 + 1 | 0;
     if (i8 >>> 0 >= i3 >>> 0) {
      break L3;
     }
     i5 = i8;
     i6 = HEAP32[i1 >> 2] | 0;
    }
   }
  } while (0);
  i1 = HEAP32[i2 + 372 >> 2] | 0;
  if ((i1 | 0) != 0) {
   __ZN7WebCoreL33resetTrackedRepaintRectsRecursiveERNS_13GraphicsLayerE(i1);
  }
  i1 = HEAP32[i2 + 368 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i7 = 11;
   break;
  } else {
   i2 = i1;
  }
 }
 if ((i7 | 0) == 11) {
  return;
 } else if ((i7 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore21RenderLayerCompositor31fixedRootBackgroundLayerChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i3 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) != 0) {
  return;
 }
 i4 = HEAP32[(HEAP32[(HEAP32[i3 + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i3 = __ZN7WebCore4Page20scrollingCoordinatorEv(i4) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = HEAP32[(HEAP32[i2 >> 2] | 0) + 40 >> 2] | 0;
 i2 = HEAP32[i4 + 208 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i5 = HEAP32[(HEAP32[i3 >> 2] | 0) + 60 >> 2] | 0;
 i6 = i2 + 56 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 i6 = HEAP32[i1 + 108 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i9 = 0;
  } else {
   if ((HEAP8[i2 + 93 | 0] & 1) == 0) {
    i9 = 0;
    break;
   }
   i9 = HEAP32[i2 + 24 >> 2] | 0;
  }
 } while (0);
 FUNCTION_TABLE_viiiii[i5 & 3](i3, i7, i8, i6, i9);
 return;
}
function __ZN7WebCore21RenderLayerCompositor31notifyFlushBeforeDisplayRefreshEPKNS_13GraphicsLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 168 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  __ZN7WebCore20GraphicsLayerUpdater14scheduleUpdateEv(i4);
  return;
 }
 i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i5 = 0;
 } else {
  i6 = HEAP32[i3 + 20 >> 2] | 0;
  i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 56 >> 2] & 7](i6) | 0;
 }
 i6 = __Znwj(12) | 0;
 __ZN7WebCore20GraphicsLayerUpdaterC1EPNS_26GraphicsLayerUpdaterClientEj(i6, i1 + 4 | 0, i5);
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i5 | 0) == 0) {
  i4 = i6;
  __ZN7WebCore20GraphicsLayerUpdater14scheduleUpdateEv(i4);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 i4 = HEAP32[i2 >> 2] | 0;
 __ZN7WebCore20GraphicsLayerUpdater14scheduleUpdateEv(i4);
 return;
}
function __ZN7WebCore21RenderLayerCompositorC2ERNS_10RenderViewE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 112;
 HEAP32[i1 + 4 >> 2] = H_BASE + 192;
 HEAP32[i1 + 8 >> 2] = i2;
 HEAP32[i1 + 12 >> 2] = 0;
 i2 = i1 + 16 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 16;
 HEAP32[i1 + 60 >> 2] = i1;
 i2 = i1 + 64 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 18;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP8[i1 + 72 | 0] = 1;
 HEAP32[i1 + 76 >> 2] = -1;
 i2 = i1 + 176 | 0;
 _memset(i1 + 80 | 0, 0, 15) | 0;
 _memset(i1 + 96 | 0, 0, 76) | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 16;
 HEAP32[i1 + 220 >> 2] = i1;
 i2 = i1 + 224 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 12;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP8[i1 + 232 | 0] = 0;
 HEAP8[i1 + 233 | 0] = 0;
 HEAP8[i1 + 234 | 0] = 0;
 i2 = i1 + 240 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 16;
 HEAP32[i1 + 284 >> 2] = i1;
 i2 = i1 + 288 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 14;
 HEAP32[i2 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore21RenderLayerCompositorC1ERNS_10RenderViewE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 112;
 HEAP32[i1 + 4 >> 2] = H_BASE + 192;
 HEAP32[i1 + 8 >> 2] = i2;
 HEAP32[i1 + 12 >> 2] = 0;
 i2 = i1 + 16 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 16;
 HEAP32[i1 + 60 >> 2] = i1;
 i2 = i1 + 64 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 18;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP8[i1 + 72 | 0] = 1;
 HEAP32[i1 + 76 >> 2] = -1;
 i2 = i1 + 176 | 0;
 _memset(i1 + 80 | 0, 0, 15) | 0;
 _memset(i1 + 96 | 0, 0, 76) | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 16;
 HEAP32[i1 + 220 >> 2] = i1;
 i2 = i1 + 224 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 12;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP8[i1 + 232 | 0] = 0;
 HEAP8[i1 + 233 | 0] = 0;
 HEAP8[i1 + 234 | 0] = 0;
 i2 = i1 + 240 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 16;
 HEAP32[i1 + 284 >> 2] = i1;
 i2 = i1 + 288 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 14;
 HEAP32[i2 + 4 >> 2] = 0;
 return;
}
function __ZNK7WebCore21RenderLayerCompositor31requiresCompositingForAnimationERNS_22RenderLayerModelObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 76 | 0;
 if ((HEAP32[i3 >> 2] & 16 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = __ZNK7WebCore12RenderObject9animationEv(i2 | 0) | 0;
 i6 = i2 | 0;
 do {
  if (__ZNK7WebCore19AnimationController28isRunningAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb(i5, i6, 102, 1) | 0) {
   if ((HEAP8[i1 + 88 | 0] & 1) != 0) {
    i4 = 1;
    return i4 | 0;
   }
   if ((HEAP32[i3 >> 2] & 128 | 0) == 0) {
    break;
   } else {
    i4 = 1;
   }
   return i4 | 0;
  }
 } while (0);
 if (__ZNK7WebCore19AnimationController28isRunningAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb(i5, i6, 237, 1) | 0) {
  i4 = 1;
  return i4 | 0;
 }
 i4 = __ZNK7WebCore19AnimationController28isRunningAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb(i5, i6, 345, 1) | 0;
 return i4 | 0;
}
function __ZN7WebCore21RenderLayerCompositor13setIsInWindowEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 40 >> 2] | 0) + 208 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = __ZNK7WebCore18RenderLayerBacking12tiledBackingEv(i4) | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 28 >> 2] & 31](i5, i2);
  }
 } while (0);
 if ((HEAP8[i1 + 88 | 0] & 1) == 0) {
  return;
 }
 i4 = (HEAP32[i1 + 100 >> 2] | 0) == 0;
 if (i2) {
  if (!i4) {
   return;
  }
  i2 = (__ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) != 0;
  __ZN7WebCore21RenderLayerCompositor15attachRootLayerENS0_19RootLayerAttachmentE(i1, i2 ? 2 : 1);
  return;
 } else {
  if (i4) {
   return;
  }
  __ZN7WebCore21RenderLayerCompositor15detachRootLayerEv(i1);
  return;
 }
}
function __ZNK7WebCore21RenderLayerCompositor28viewHasTransparentBackgroundEPNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 8 | 0;
 if (__ZNK7WebCore9FrameView13isTransparentEv(HEAP32[(HEAP32[i5 >> 2] | 0) + 116 >> 2] | 0) | 0) {
  if ((i2 | 0) == 0) {
   i6 = 1;
   STACKTOP = i3;
   return i6 | 0;
  }
  HEAP32[i2 >> 2] = 0;
  HEAP8[i2 + 4 | 0] = 0;
  i6 = 1;
  STACKTOP = i3;
  return i6 | 0;
 }
 __ZNK7WebCore9FrameView23documentBackgroundColorEv(i4, HEAP32[(HEAP32[i5 >> 2] | 0) + 116 >> 2] | 0);
 i5 = i4 + 4 | 0;
 if ((HEAP8[i5] & 1) == 0) {
  HEAP32[i4 >> 2] = -1;
  HEAP8[i5] = 1;
 }
 if ((i2 | 0) != 0) {
  i5 = i2;
  i2 = i4;
  HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
  HEAP8[i5 + 4 | 0] = HEAP8[i2 + 4 | 0] | 0;
 }
 i6 = (HEAP32[i4 >> 2] & -16777216 | 0) != -16777216;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZNK7WebCore21RenderLayerCompositor31requiresCompositingForTransformERNS_22RenderLayerModelObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP32[i1 + 76 >> 2] & 1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 20 >> 2] & 131072 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 20 >> 2] | 0) + 72 >> 2] | 0;
 i2 = i1 + 4 | 0;
 i4 = i1 + 12 | 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= (HEAP32[i4 >> 2] | 0) >>> 0) {
   i3 = 0;
   i5 = 8;
   break;
  }
  i6 = HEAP32[(HEAP32[i2 >> 2] | 0) + (i1 << 2) >> 2] | 0;
  if (((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 7](i6) | 0) - 11 | 0) >>> 0 < 9 >>> 0) {
   i3 = 1;
   i5 = 7;
   break;
  } else {
   i1 = i1 + 1 | 0;
  }
 }
 if ((i5 | 0) == 7) {
  return i3 | 0;
 } else if ((i5 | 0) == 8) {
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore21RenderLayerCompositor25requiresScrollCornerLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 8 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i3 = HEAP32[i1 + 116 >> 2] | 0;
 if ((HEAP32[i3 + 12 >> 2] | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = 5;
  } else {
   i1 = HEAP32[i5 + 208 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i6 = 5;
    break;
   }
   if ((HEAP8[i1 + 90 | 0] & 1) == 0) {
    i6 = 5;
   } else {
    i7 = i3;
   }
  }
 } while (0);
 do {
  if ((i6 | 0) == 5) {
   if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(i3 + 36 | 0) | 0) {
    i7 = HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] | 0;
    break;
   } else {
    i4 = 0;
    return i4 | 0;
   }
  }
 } while (0);
 i4 = __ZNK7WebCore10ScrollView21isScrollCornerVisibleEv(i7 | 0) | 0;
 return i4 | 0;
}
function __ZNK7WebCore21RenderLayerCompositor32requiresHorizontalScrollbarLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 8 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i3 = HEAP32[i1 + 116 >> 2] | 0;
 if ((HEAP32[i3 + 12 >> 2] | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = 5;
  } else {
   i1 = HEAP32[i5 + 208 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i6 = 5;
    break;
   }
   if ((HEAP8[i1 + 90 | 0] & 1) == 0) {
    i6 = 5;
   } else {
    i7 = i3;
   }
  }
 } while (0);
 do {
  if ((i6 | 0) == 5) {
   if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(i3 + 36 | 0) | 0) {
    i7 = HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] | 0;
    break;
   } else {
    i4 = 0;
    return i4 | 0;
   }
  }
 } while (0);
 i4 = (HEAP32[i7 + 56 >> 2] | 0) != 0;
 return i4 | 0;
}
function __ZNK7WebCore21RenderLayerCompositor30requiresVerticalScrollbarLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 8 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i3 = HEAP32[i1 + 116 >> 2] | 0;
 if ((HEAP32[i3 + 12 >> 2] | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = 5;
  } else {
   i1 = HEAP32[i5 + 208 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i6 = 5;
    break;
   }
   if ((HEAP8[i1 + 90 | 0] & 1) == 0) {
    i6 = 5;
   } else {
    i7 = i3;
   }
  }
 } while (0);
 do {
  if ((i6 | 0) == 5) {
   if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(i3 + 36 | 0) | 0) {
    i7 = HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] | 0;
    break;
   } else {
    i4 = 0;
    return i4 | 0;
   }
  }
 } while (0);
 i4 = (HEAP32[i7 + 60 >> 2] | 0) != 0;
 return i4 | 0;
}
function __ZN3WTF6VectorIPN7WebCore13GraphicsLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZNK7WebCore21RenderLayerCompositor33enclosingCompositorFlushingLayersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 while (1) {
  __ZNK7WebCore5Frame15contentRendererEv(i4) | 0;
  i2 = __ZN7WebCore10RenderView10compositorEv(__ZNK7WebCore5Frame15contentRendererEv(i4) | 0) | 0;
  if ((HEAP8[i2 + 90 | 0] & 1) != 0) {
   i3 = i2;
   i5 = 6;
   break;
  }
  i2 = __ZNK7WebCore9FrameTree6parentEv(i4 + 40 | 0) | 0;
  if ((i2 | 0) == 0) {
   i3 = 0;
   i5 = 7;
   break;
  } else {
   i4 = i2;
  }
 }
 if ((i5 | 0) == 7) {
  return i3 | 0;
 } else if ((i5 | 0) == 6) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore21RenderLayerCompositor22frameViewDidChangeSizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 104 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 68 >> 2] | 0;
 __ZNK7WebCore10ScrollView26unscaledVisibleContentSizeENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i4, HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 116 >> 2] | 0, 0);
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i3, i4);
 FUNCTION_TABLE_vii[i6 & 31](i5, i3);
 __ZN7WebCore21RenderLayerCompositor18frameViewDidScrollEv(i1);
 __ZN7WebCore21RenderLayerCompositor28updateOverflowControlsLayersEv(i1);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore21RenderLayerCompositor25calculateCompositedBoundsERKNS_11RenderLayerES3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 do {
  if ((HEAP8[i2 + 72 | 0] & 1) != 0) {
   if ((HEAP8[i3 + 20 | 0] & 32) == 0) {
    break;
   }
   i5 = i3 + 32 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   if ((HEAP32[i6 + 20 >> 2] & 805306368 | 0) != 0) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 248 >> 2] & 7](i6 | 0) | 0) {
     break;
    }
    if ((HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] & 805306368 | 0) != 268435456) {
     break;
    }
   }
   __ZNK7WebCore11RenderLayer20calculateLayerBoundsEPKS0_PKNS_11LayoutPointEj(i1, i3, i4, 0, 95);
   return;
  }
 } while (0);
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore21RenderLayerCompositor26repaintOnCompositingChangeERNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 + 32 >> 2] | 0;
 i4 = i1 + 8 | 0;
 do {
  if ((i3 | 0) != (HEAP32[i4 >> 2] | 0)) {
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   return;
  }
 } while (0);
 i1 = __ZNK7WebCore12RenderObject19containerForRepaintEv(i3 | 0) | 0;
 if ((i1 | 0) == 0) {
  i5 = HEAP32[i4 >> 2] | 0;
 } else {
  i5 = i1;
 }
 __ZN7WebCore11RenderLayer41repaintIncludingNonCompositingDescendantsEPNS_22RenderLayerModelObjectE(i2, i5);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != (i2 | 0)) {
  return;
 }
 __ZN7WebCore9FrameView37setNeedsOneShotDrawingSynchronizationEv(HEAP32[i2 + 116 >> 2] | 0);
 return;
}
function __ZN7WebCore21RenderLayerCompositor19notifyFlushRequiredEPKNS_13GraphicsLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 288 >> 2] & 7](i2) | 0) {
   if ((HEAP8[i1 + 232 | 0] & 1) == 0) {
    break;
   }
   if (+HEAPF64[i1 + 184 >> 3] == +0) {
    break;
   }
   if ((HEAP8[i1 + 233 | 0] & 1) != 0) {
    break;
   }
   HEAP8[i1 + 234 | 0] = 1;
   return;
  }
 } while (0);
 HEAP8[i1 + 234 | 0] = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 308 >> 2] & 31](i1);
 return;
}
function __ZN7WebCore21RenderLayerCompositor24layerBecameNonCompositedERKNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0) | 0;
 if ((i3 | 0) == 0) {
  i4 = i1 + 80 | 0;
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 - 1 | 0;
  HEAP32[i4 >> 2] = i6;
  return;
 }
 __ZN7WebCore24InspectorInstrumentation24renderLayerDestroyedImplEPNS_19InstrumentingAgentsEPKNS_11RenderLayerE(i3, i2);
 i4 = i1 + 80 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5 - 1 | 0;
 HEAP32[i4 >> 2] = i6;
 return;
}
function __ZN7WebCore21RenderLayerCompositor18scheduleLayerFlushEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 do {
  if (i2) {
   if ((HEAP8[i1 + 232 | 0] & 1) == 0) {
    break;
   }
   if (+HEAPF64[i1 + 184 >> 3] == +0) {
    break;
   }
   if ((HEAP8[i1 + 233 | 0] & 1) != 0) {
    break;
   }
   HEAP8[i1 + 234 | 0] = 1;
   return;
  }
 } while (0);
 HEAP8[i1 + 234 | 0] = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 308 >> 2] & 31](i1);
 return;
}
function __ZN7WebCore21RenderLayerCompositor40clearBackingForLayerIncludingDescendantsERNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((HEAP32[i2 + 208 >> 2] | 0) != 0) {
  __ZN7WebCore21RenderLayerCompositor30removeViewportConstrainedLayerERNS_11RenderLayerE(i1, i2);
  __ZN7WebCore11RenderLayer12clearBackingEb(i2, 0);
 }
 i3 = HEAP32[i2 + 48 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 } else {
  i4 = i3;
 }
 while (1) {
  __ZN7WebCore21RenderLayerCompositor40clearBackingForLayerIncludingDescendantsERNS_11RenderLayerE(i1, i4);
  i4 = HEAP32[i4 + 44 >> 2] | 0;
  if ((i4 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore21RenderLayerCompositor27addViewportConstrainedLayerERNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore11RenderLayerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 112 | 0, i4, i4);
 __ZN7WebCore21RenderLayerCompositor40registerOrUpdateViewportConstrainedLayerERNS_11RenderLayerE(i1, i2);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore21RenderLayerCompositor31shouldCompositeOverflowControlsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = HEAP32[i2 + 116 >> 2] | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 + 40 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = HEAP32[i4 + 208 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   if ((HEAP8[i2 + 90 | 0] & 1) == 0) {
    break;
   } else {
    i3 = 1;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = __ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(i1 + 36 | 0) | 0;
 return i3 | 0;
}
function __ZNK7WebCore21RenderLayerCompositor15canBeCompositedERKNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP8[i1 + 72 | 0] & 1) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP8[i2 + 20 | 0] & 32) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = i2 + 32 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((HEAP32[i2 + 20 >> 2] & 805306368 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 248 >> 2] & 7](i2 | 0) | 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 805306368 | 0) == 268435456;
 return i3 | 0;
}
function __ZN7WebCore21RenderLayerCompositor30setLayerFlushThrottlingEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 232 | 0] = i2 & 1;
 if (i2) {
  return;
 }
 __ZN7WebCore9TimerBase4stopEv(i1 + 176 | 0);
 i2 = i1 + 234 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  return;
 }
 HEAP8[i2] = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 308 >> 2] & 31](i1);
 return;
}
function __ZNK7WebCore21RenderLayerCompositor23hasCoordinatedScrollingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 8 | 0;
 i1 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = __ZN7WebCore4Page20scrollingCoordinatorEv(i1) | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore20ScrollingCoordinator32coordinatesScrollingForFrameViewEPNS_9FrameViewE(i4, HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] | 0) | 0;
 return i3 | 0;
}
function __ZN7WebCore21RenderLayerCompositor32paintRelatedMilestonesTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i2 = i1 + 8 | 0;
 i1 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 320 >> 2] & 7](i3) | 0) {
  return;
 }
 __ZN7WebCore9FrameView26firePaintRelatedMilestonesEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] | 0);
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
function __ZNK7WebCore21RenderLayerCompositor28requiresCompositingForCanvasERNS_22RenderLayerModelObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i1 + 76 >> 2] & 8 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = i2 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 232 >> 2] & 7](i1) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = __ZN7WebCore25canvasCompositingStrategyERKNS_12RenderObjectE(i1) | 0;
 if ((i2 | 0) == 2) {
  i3 = 1;
  return i3 | 0;
 } else {
  return (i2 | 0) == 1 | 0;
 }
 return 0;
}
function __ZNK7WebCore21RenderLayerCompositor27clipsCompositingDescendantsERKNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP8[i2 + 23 | 0] & 2) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 32 >> 2] | 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 & 25165824 | 0) == 16777216) {
   if ((HEAP8[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 8 >> 2] | 0) + 36 | 0] & 1) == 0) {
    break;
   } else {
    i3 = 1;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = (i2 & 65536 | 0) != 0;
 return i3 | 0;
}
function __ZNK7WebCore21RenderLayerCompositor37requiresCompositingForScrollableFrameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 8 | 0;
 if ((__ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 76 >> 2] & 64 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZN7WebCore9FrameView12isScrollableEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] | 0) | 0;
 return i3 | 0;
}
function __ZN7WebCore21RenderLayerCompositor27updateLayerCompositingStateERNS_11RenderLayerENS0_24CompositingChangeRepaintE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = __ZN7WebCore21RenderLayerCompositor13updateBackingERNS_11RenderLayerENS0_24CompositingChangeRepaintE(i1, i2, i3) | 0;
 i3 = HEAP32[i2 + 208 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return i4 | 0;
 } else {
  return __ZN7WebCore18RenderLayerBacking32updateGraphicsLayerConfigurationEv(i3) | 0 | i4 | 0;
 }
 return 0;
}
function __ZNK7WebCore21RenderLayerCompositor29needsFixedRootBackgroundLayerERKNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((HEAP32[i3 + 40 >> 2] | 0) != (i2 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = HEAP32[i2 + 208 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP8[i1 + 90 | 0] & 1) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = __ZNK7WebCore10RenderView29rootBackgroundIsEntirelyFixedEv(i3) | 0;
 return i4 | 0;
}
function __ZN7WebCore21RenderLayerCompositor20setCompositingParentERNS_11RenderLayerEPS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 + 208 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = __ZNK7WebCore18RenderLayerBacking18parentForSublayersEv(i1) | 0;
 i1 = __ZNK7WebCore18RenderLayerBacking19childForSuperlayersEv(HEAP32[i2 + 208 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 31](i3, i1);
 return;
}
function __ZN7WebCore21RenderLayerCompositor20layerFlushTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 + 234 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  return;
 }
 HEAP8[i2] = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 308 >> 2] & 31](i1);
 return;
}
function __ZN7WebCore21RenderLayerCompositor26frameViewDidChangeLocationERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 152 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[(HEAP32[i5 >> 2] | 0) + 56 >> 2] | 0;
 __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i4, i2);
 FUNCTION_TABLE_vii[i1 & 31](i5, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore21RenderLayerCompositor21enableCompositingModeEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 88 | 0;
 if ((i2 & 1 | 0) == (HEAP8[i3] & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i2 & 1;
 if (i2) {
  __ZN7WebCore21RenderLayerCompositor15ensureRootLayerEv(i1);
  __ZN7WebCore21RenderLayerCompositor32notifyIFramesOfCompositingChangeEv(i1);
  return;
 } else {
  __ZN7WebCore21RenderLayerCompositor16destroyRootLayerEv(i1);
  return;
 }
}
function __ZN7WebCore21RenderLayerCompositor23scrollingLayerDidChangeERNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = __ZN7WebCore4Page20scrollingCoordinatorEv(i3) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 84 >> 2] & 31](i1, i2 | 0);
 return;
}
function __ZN7WebCore5TimerINS_21RenderLayerCompositorEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 31](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 31](i4, i1);
  return;
 }
}
function __ZNK7WebCore21RenderLayerCompositor38isRunningAcceleratedTransformAnimationERNS_22RenderLayerModelObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i1 + 76 >> 2] & 16 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore19AnimationController28isRunningAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb(__ZNK7WebCore12RenderObject9animationEv(i2 | 0) | 0, i2 | 0, 345, 1) | 0;
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
function __ZN7WebCore21RenderLayerCompositor30deviceOrPageScaleFactorChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] | 0) + 208 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = __ZNK7WebCore18RenderLayerBacking19childForSuperlayersEv(i2) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore13GraphicsLayer54noteDeviceOrPageScaleFactorChangedIncludingDescendantsEv(i1);
 return;
}
function __ZN7WebCore21RenderLayerCompositor23frameContentsCompositorEPNS_12RenderWidgetE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore21HTMLFrameOwnerElement15contentDocumentEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 1584 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZN7WebCore10RenderView10compositorEv(i1) | 0;
 return i3 | 0;
}
function __ZNK7WebCore21RenderLayerCompositor24fixedRootBackgroundLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 208 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP8[i1 + 93 | 0] & 1) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore21RenderLayerCompositor15didPaintBackingEPNS_18RenderLayerBackingE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 116 >> 2] | 0;
 HEAPF64[i2 + 520 >> 3] = +__ZN3WTF27monotonicallyIncreasingTimeEv();
 if ((HEAP32[i2 + 652 >> 2] | 0) == 0) {
  return;
 }
 if (+HEAPF64[i1 + 248 >> 3] != +0) {
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 240 | 0, +0, +0);
 return;
}
function __ZNK7WebCore21RenderLayerCompositor20graphicsLayerFactoryEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 296 >> 2] & 7](i1) | 0;
 return i3 | 0;
}
function __ZN7WebCore21RenderLayerCompositor24resetTrackedRepaintRectsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 152 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i3 | 0) != 0) {
    i4 = i3;
    break;
   }
   return;
  } else {
   i4 = i2;
  }
 } while (0);
 __ZN7WebCoreL33resetTrackedRepaintRectsRecursiveERNS_13GraphicsLayerE(i4);
 return;
}
function __ZNK7WebCore21RenderLayerCompositor33mainFrameBackingIsTiledWithMarginEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 208 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore18RenderLayerBacking21tiledBackingHasMarginEv(i1) | 0;
 return i3 | 0;
}
function __ZN7WebCore21RenderLayerCompositor21scheduleLayerFlushNowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP8[i1 + 234 | 0] = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 308 >> 2] & 31](i1);
 return;
}
function __ZN7WebCore21RenderLayerCompositor36updateRenderFlowThreadLayersIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 8 | 0;
 if (!(__ZNK7WebCore10RenderView25hasRenderNamedFlowThreadsEv(HEAP32[i2 >> 2] | 0) | 0)) {
  return;
 }
 __ZN7WebCore20FlowThreadController36updateRenderFlowThreadLayersIfNeededEv(__ZN7WebCore10RenderView20flowThreadControllerEv(HEAP32[i2 >> 2] | 0) | 0);
 return;
}
function __ZNK7WebCore21RenderLayerCompositor29requiresCompositingForFiltersERNS_22RenderLayerModelObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i1 + 76 >> 2] & 32 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0) + 12 >> 2] | 0) != 0;
 return i3 | 0;
}
function __ZN7WebCore21RenderLayerCompositor27rootFixedBackgroundsChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] | 0) + 208 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP8[i2 + 90 | 0] & 1) == 0) {
  return;
 }
 if ((HEAP8[i1 + 88 | 0] & 1) == 0) {
  return;
 }
 HEAP8[i1 + 89 | 0] = 1;
 return;
}
function __ZNK7WebCore21RenderLayerCompositor23mainFrameBackingIsTiledEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 208 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[i1 + 90 | 0] & 1) != 0;
 return i3 | 0;
}
function __ZNK7WebCore21RenderLayerCompositor19requiresScrollLayerENS0_19RootLayerAttachmentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 116 >> 2] | 0;
 if ((HEAP8[i3 + 172 | 0] & 1) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[i3 + 12 >> 2] | 0) == 0 | (i2 | 0) == 2;
 return i4 | 0;
}
function __ZNK7WebCore21RenderLayerCompositor20scrollingCoordinatorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZN7WebCore4Page20scrollingCoordinatorEv(i2) | 0;
 return i3 | 0;
}
function __ZN7WebCore21RenderLayerCompositor26rootLayerAttachmentChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 208 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore18RenderLayerBacking18updateDrawsContentEv(i1);
 return;
}
function __ZNK7WebCore21RenderLayerCompositor16pageTiledBackingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] | 0) + 208 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore18RenderLayerBacking12tiledBackingEv(i2) | 0;
 return i3 | 0;
}
function __ZNK7WebCore21RenderLayerCompositor38supportsFixedRootBackgroundCompositingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] | 0) + 208 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[i2 + 90 | 0] & 1) != 0;
 return i3 | 0;
}
function __ZNK7WebCore21RenderLayerCompositor17deviceScaleFactorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0;
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  d3 = +1;
  return +d3;
 }
 d3 = +HEAPF32[i2 + 116 >> 2];
 return +d3;
}
function __ZNK7WebCore21RenderLayerCompositor15pageScaleFactorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0;
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  d3 = +1;
  return +d3;
 }
 d3 = +HEAPF32[i2 + 112 >> 2];
 return +d3;
}
function __ZN7WebCore21RenderLayerCompositor28startLayerFlushTimerIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP8[i1 + 233 | 0] = 0;
 i2 = i1 + 176 | 0;
 __ZN7WebCore9TimerBase4stopEv(i2);
 if ((HEAP8[i1 + 232 | 0] & 1) == 0) {
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i2, +.5, +0);
 return;
}
function __ZNK7WebCore21RenderLayerCompositor24isThrottlingLayerFlushesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP8[i1 + 232 | 0] & 1) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (+HEAPF64[i1 + 184 >> 3] == +0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[i1 + 233 | 0] & 1) == 0;
 return i2 | 0;
}
function __ZN7WebCore21RenderLayerCompositor18frameViewDidLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] | 0) + 208 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore18RenderLayerBacking26adjustTiledBackingCoverageEv(i2);
 return;
}
function __ZN7WebCore21RenderLayerCompositor34unregisterViewportConstrainedLayerERNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i1 = HEAP32[i2 + 208 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore18RenderLayerBacking30detachFromScrollingCoordinatorEv(i1);
 return;
}
function __ZNK7WebCore21RenderLayerCompositor29needsContentsCompositingLayerERKNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i1 = HEAP32[i2 + 140 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i1 + 8 >> 2] | 0) != 0;
 return i3 | 0;
}
function __ZN7WebCore21RenderLayerCompositor23repaintCompositedLayersEPKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore21RenderLayerCompositor21recursiveRepaintLayerERNS_11RenderLayerEPKNS_7IntRectE(i1, HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] | 0, i2);
 return;
}
function __ZN7WebCore21RenderLayerCompositor24removeCompositedChildrenERNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore13GraphicsLayer17removeAllChildrenEv(__ZNK7WebCore18RenderLayerBacking18parentForSublayersEv(HEAP32[i2 + 208 >> 2] | 0) | 0);
 return;
}
function __ZNK7WebCore21RenderLayerCompositor42shouldPropagateCompositingToEnclosingFrameEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) != 0 | 0;
}
function __ZN7WebCore21RenderLayerCompositor33updateCompositingLayersTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore21RenderLayerCompositor23updateCompositingLayersENS_21CompositingUpdateTypeEPNS_11RenderLayerE(i1, 1, 0);
 return;
}
function __ZN7WebCore21RenderLayerCompositor21windowScreenDidChangeEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 168 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore20GraphicsLayerUpdater15screenDidChangeEj(i3, i2);
 return;
}
function __ZN7WebCore21RenderLayerCompositor24clearBackingForAllLayersEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore21RenderLayerCompositor40clearBackingForLayerIncludingDescendantsERNS_11RenderLayerE(i1, HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] | 0);
 return;
}
function __ZNK7WebCore21RenderLayerCompositor30requiresCompositingForBlendingERNS_22RenderLayerModelObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 20 >> 2] | 0) + 296 >> 2] & 4063232 | 0) != 0 | 0;
}
function __ZNK7WebCore21RenderLayerCompositor17rootGraphicsLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 152 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2;
  return i3 | 0;
 }
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore21RenderLayerCompositor29layerTiledBackingUsageChangedEPKNS_13GraphicsLayerEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = i1 + 96 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + (i3 ? 1 : -1);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore21RenderLayerCompositor21canRender3DTransformsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP8[i1 + 72 | 0] & 1) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[i1 + 76 >> 2] & 1 | 0) != 0;
 return i2 | 0;
}
function __ZThn4_N7WebCore21RenderLayerCompositor11flushLayersEPNS_20GraphicsLayerUpdaterE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore21RenderLayerCompositor24flushPendingLayerChangesEb(i1 - 296 + 292 | 0, 1);
 return;
}
function __ZNK7WebCore21RenderLayerCompositor12has3DContentEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore21RenderLayerCompositor17layerHas3DContentERKNS_11RenderLayerE(i1, HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] | 0) | 0;
}
function __ZN7WebCore21RenderLayerCompositor13layerWasAddedERNS_11RenderLayerES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP8[i1 + 88 | 0] & 1) == 0) {
  return;
 }
 HEAP8[i1 + 89 | 0] = 1;
 return;
}
function __ZN7WebCore21RenderLayerCompositor52disableLayerFlushThrottlingTemporarilyForInteractionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 233 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  return;
 }
 HEAP8[i2] = 1;
 return;
}
function __ZNK7WebCore21RenderLayerCompositor32hasAnyAdditionalCompositedLayersERKNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (HEAP32[i1 + 80 >> 2] | 0) > ((HEAP32[i2 + 208 >> 2] | 0) != 0 | 0) | 0;
}
function __ZNK7WebCore21RenderLayerCompositor39requiresCompositingForOverflowScrollingERKNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i2) | 0;
}
function __ZN7WebCore21RenderLayerCompositor30scheduleCompositingLayerUpdateEv(i1) {
 i1 = i1 | 0;
 if (+HEAPF64[i1 + 24 >> 3] != +0) {
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 16 | 0, +0, +0);
 return;
}
function __ZN7WebCore21RenderLayerCompositor31setCompositingLayersNeedRebuildEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP8[i1 + 88 | 0] & 1) == 0) {
  return;
 }
 HEAP8[i1 + 89 | 0] = i2 & 1;
 return;
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
function __ZN7WebCore21RenderLayerCompositor11flushLayersEPNS_20GraphicsLayerUpdaterE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore21RenderLayerCompositor24flushPendingLayerChangesEb(i1, 1);
 return;
}
function __ZThn4_N7WebCore21RenderLayerCompositorD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 296 + 292 | 0;
 __ZN7WebCore21RenderLayerCompositorD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore21RenderLayerCompositor33frameViewDidAddOrRemoveScrollbarsEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore21RenderLayerCompositor28updateOverflowControlsLayersEv(i1);
 return;
}
function __ZNK7WebCore19GraphicsLayerClient19getCurrentTransformEPKNS_13GraphicsLayerERNS_20TransformationMatrixE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 0;
}
function __ZNK7WebCore21RenderLayerCompositor4pageEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
}
function __ZNK7WebCore19GraphicsLayerClient26shouldDumpPropertyForLayerEPKNS_13GraphicsLayerEPKc(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 1;
}
function __ZN7WebCore21RenderLayerCompositor25updateRootLayerAttachmentEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore21RenderLayerCompositor15ensureRootLayerEv(i1);
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZNK7WebCore21RenderLayerCompositor34contentsScaleMultiplierForNewTilesEPKNS_13GraphicsLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +(+1);
}
function __ZN7WebCore19GraphicsLayerClient24tiledBackingUsageChangedEPKNS_13GraphicsLayerEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZNK7WebCore21RenderLayerCompositor27requiresCompositingForVideoERNS_22RenderLayerModelObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore5TimerINS_21RenderLayerCompositorEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function __ZN7WebCore21RenderLayerCompositor22notifyAnimationStartedEPKNS_13GraphicsLayerEd(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return;
}
function __ZN7WebCore21RenderLayerCompositorD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore21RenderLayerCompositorD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
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
function __ZThn4_N7WebCore21RenderLayerCompositorD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore21RenderLayerCompositorD2Ev(i1 - 296 + 292 | 0);
 return;
}
function dynCall_viid(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 FUNCTION_TABLE_viid[i1 & 3](i2 | 0, i3 | 0, +d4);
}
function __ZN7WebCore21RenderLayerCompositor17setTracksRepaintsEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 94 | 0] = i2 & 1;
 return;
}
function __ZNK7WebCore21RenderLayerCompositor15rootRenderLayerEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] | 0;
}
function __ZNK7WebCore21RenderLayerCompositor24didCommitChangesForLayerEPKNS_13GraphicsLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore19GraphicsLayerClient21shouldUseTiledBackingEPKNS_13GraphicsLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZNK7WebCore19GraphicsLayerClient21shouldSkipLayerInDumpEPKNS_13GraphicsLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore21RenderLayerCompositor18isTrackingRepaintsEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 94 | 0] & 1) != 0 | 0;
}
function dynCall_fii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return +FUNCTION_TABLE_fii[i1 & 3](i2 | 0, i3 | 0);
}
function __ZN7WebCore21RenderLayerCompositor35allowsIndependentlyCompositedFramesEPKNS_9FrameViewE(i1) {
 i1 = i1 | 0;
 return 0;
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
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function __ZN7WebCore5TimerINS_21RenderLayerCompositorEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function __ZNK7WebCore21RenderLayerCompositor11scrollLayerEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 108 >> 2] | 0;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZNK7WebCore33StickyPositionViewportConstraints14constraintTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore32FixedPositionViewportConstraints14constraintTypeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZN7WebCore33StickyPositionViewportConstraintsD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function __ZNK7WebCore21RenderLayerCompositor22keepLayersPixelAlignedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore32FixedPositionViewportConstraintsD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function dynCall_fi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_fi[i1 & 7](i2 | 0);
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
 return 0;
}
function __ZN7WebCore33StickyPositionViewportConstraintsD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore32FixedPositionViewportConstraintsD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function b8(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(8);
}
function b10(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(10);
 return +0;
}
function b11(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(11);
 return 0;
}
function b1(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(1);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
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
function b9(i1) {
 i1 = i1 | 0;
 abort(9);
 return +0;
}
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore21RenderLayerCompositor13paintContentsEPKNS_13GraphicsLayerERNS_15GraphicsContextEjRKNS_7IntRectE,b0];
  var FUNCTION_TABLE_did = [b1,b1,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore5TimerINS_21RenderLayerCompositorEED1Ev,b2,__ZN7WebCore5TimerINS_21RenderLayerCompositorEE5firedEv,b2,__ZN7WebCore33StickyPositionViewportConstraintsD1Ev,b2,__ZN7WebCore33StickyPositionViewportConstraintsD0Ev,b2,__ZThn4_N7WebCore21RenderLayerCompositorD1Ev,b2,__ZThn4_N7WebCore21RenderLayerCompositorD0Ev,b2,__ZN7WebCore5TimerINS_21RenderLayerCompositorEED0Ev,b2,__ZN7WebCore21RenderLayerCompositorD2Ev,b2,__ZN7WebCore32FixedPositionViewportConstraintsD1Ev,b2,__ZN7WebCore32FixedPositionViewportConstraintsD0Ev,b2,__ZN7WebCore21RenderLayerCompositorD0Ev,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore21RenderLayerCompositor11flushLayersEPNS_20GraphicsLayerUpdaterE,b3,__ZNK7WebCore21RenderLayerCompositor24didCommitChangesForLayerEPKNS_13GraphicsLayerE,b3,__ZN7WebCore21RenderLayerCompositor19notifyFlushRequiredEPKNS_13GraphicsLayerE,b3,__ZN7WebCore21RenderLayerCompositorC2ERNS_10RenderViewE,b3,__ZN7WebCore21RenderLayerCompositor31notifyFlushBeforeDisplayRefreshEPKNS_13GraphicsLayerE,b3,__ZN7WebCore21RenderLayerCompositor20layerFlushTimerFiredEPNS_5TimerIS0_EE,b3,__ZN7WebCore21RenderLayerCompositor32paintRelatedMilestonesTimerFiredEPNS_5TimerIS0_EE,b3,__ZThn4_N7WebCore21RenderLayerCompositor11flushLayersEPNS_20GraphicsLayerUpdaterE,b3,__ZN7WebCore21RenderLayerCompositor33updateCompositingLayersTimerFiredEPNS_5TimerIS0_EE,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZNK7WebCore21RenderLayerCompositor18isTrackingRepaintsEv,b4,__ZNK7WebCore33StickyPositionViewportConstraints14constraintTypeEv,b4,__ZNK7WebCore32FixedPositionViewportConstraints14constraintTypeEv,b4];
  var FUNCTION_TABLE_iiii = [b5,b5,__ZNK7WebCore19GraphicsLayerClient26shouldDumpPropertyForLayerEPKNS_13GraphicsLayerEPKc,b5,__ZNK7WebCore19GraphicsLayerClient19getCurrentTransformEPKNS_13GraphicsLayerERNS_20TransformationMatrixE,b5,b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6,__ZN7WebCore19GraphicsLayerClient24tiledBackingUsageChangedEPKNS_13GraphicsLayerEb,b6,__ZNK7WebCore21RenderLayerCompositor39customPositionForVisibleRectComputationEPKNS_13GraphicsLayerERNS_10FloatPointE,b6,b6,b6];
  var FUNCTION_TABLE_v = [b7,b7];
  var FUNCTION_TABLE_viid = [b8,b8,__ZN7WebCore21RenderLayerCompositor22notifyAnimationStartedEPKNS_13GraphicsLayerEd,b8];
  var FUNCTION_TABLE_fi = [b9,b9,__ZNK7WebCore21RenderLayerCompositor17deviceScaleFactorEv,b9,__ZNK7WebCore21RenderLayerCompositor15pageScaleFactorEv,b9,b9,b9];
  var FUNCTION_TABLE_fii = [b10,b10,__ZNK7WebCore21RenderLayerCompositor34contentsScaleMultiplierForNewTilesEPKNS_13GraphicsLayerE,b10];
  var FUNCTION_TABLE_iii = [b11,b11,__ZNK7WebCore19GraphicsLayerClient21shouldSkipLayerInDumpEPKNS_13GraphicsLayerE,b11,__ZNK7WebCore19GraphicsLayerClient21shouldUseTiledBackingEPKNS_13GraphicsLayerE,b11,b11,b11];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viid: dynCall_viid, dynCall_fi: dynCall_fi, dynCall_fii: dynCall_fii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viid": invoke_viid, "invoke_fi": invoke_fi, "invoke_fii": invoke_fii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viid = Module["dynCall_viid"] = asm["dynCall_viid"];
var dynCall_fi = Module["dynCall_fi"] = asm["dynCall_fi"];
var dynCall_fii = Module["dynCall_fii"] = asm["dynCall_fii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore21RenderLayerCompositor13updateBackingERNS_11RenderLayerENS0_24CompositingChangeRepaintE","__ZN7WebCore5TimerINS_21RenderLayerCompositorEED1Ev","_strlen","__ZN7WebCore21RenderLayerCompositor33rebuildRegionCompositingLayerTreeEPNS_23RenderNamedFlowFragmentERN3WTF6VectorIPNS_13GraphicsLayerELj0ENS3_15CrashOnOverflowEEEi","__ZNK7WebCore21RenderLayerCompositor17deviceScaleFactorEv","__ZN3WTF7HashSetIPN7WebCore11RenderLayerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZNK7WebCore21RenderLayerCompositor32requiresHorizontalScrollbarLayerEv","__ZN7WebCore21RenderLayerCompositor11flushLayersEPNS_20GraphicsLayerUpdaterE","__ZNK7WebCore21RenderLayerCompositor30requiresCompositingForPositionERNS_22RenderLayerModelObjectERKNS_11RenderLayerEPNS3_38ViewportConstrainedNotCompositedReasonE","__ZNK7WebCore21RenderLayerCompositor24didCommitChangesForLayerEPKNS_13GraphicsLayerE","__ZN7WebCoreL33resetTrackedRepaintRectsRecursiveERNS_13GraphicsLayerE","__ZNK7WebCore21RenderLayerCompositor19needsToBeCompositedERKNS_11RenderLayerEPNS1_38ViewportConstrainedNotCompositedReasonE","__ZN3WTF6VectorIN7WebCore21RenderLayerCompositor10OverlapMap8RectListELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS4_EEvOT_","__ZNK7WebCore21RenderLayerCompositor17layerHas3DContentERKNS_11RenderLayerE","__ZNK7WebCore21RenderLayerCompositor33enclosingNonStackingClippingLayerERKNS_11RenderLayerE","__ZNK7WebCore21RenderLayerCompositor27clipsCompositingDescendantsERKNS_11RenderLayerE","__ZNK7WebCore21RenderLayerCompositor20graphicsLayerFactoryEv","__ZN7WebCore21RenderLayerCompositor16destroyRootLayerEv","__ZN7WebCore21RenderLayerCompositor27addViewportConstrainedLayerERNS_11RenderLayerE","__ZNK7WebCore21RenderLayerCompositor21canRender3DTransformsEv","_memcpy","__ZN7WebCore21RenderLayerCompositor23repaintCompositedLayersEPKNS_7IntRectE","__ZN7WebCore21RenderLayerCompositor33frameViewDidAddOrRemoveScrollbarsEv","__ZNK7WebCore21RenderLayerCompositor24requiresCompositingLayerERKNS_11RenderLayerEPNS1_38ViewportConstrainedNotCompositedReasonE","__ZN7WebCore21RenderLayerCompositor15ensureRootLayerEv","__ZNK7WebCore21RenderLayerCompositor21reasonsForCompositingERKNS_11RenderLayerE","__ZNK7WebCore21RenderLayerCompositor23mainFrameBackingIsTiledEv","__ZNK7WebCore21RenderLayerCompositor31shouldCompositeOverflowControlsEv","__ZN7WebCore21RenderLayerCompositor22notifyAnimationStartedEPKNS_13GraphicsLayerEd","__ZNK7WebCore21RenderLayerCompositor23requiresOwnBackingStoreERKNS_11RenderLayerEPS2_RKNS_7IntRectES7_","__ZN7WebCore21RenderLayerCompositor20setCompositingParentERNS_11RenderLayerEPS1_","__ZNK7WebCore21RenderLayerCompositor31computeFixedViewportConstraintsERNS_11RenderLayerE","__ZN7WebCore21RenderLayerCompositorC2ERNS_10RenderViewE","__ZN7WebCore21RenderLayerCompositor35updateCompositingDescendantGeometryERNS_11RenderLayerES2_b","__ZN7WebCore21RenderLayerCompositor40registerOrUpdateViewportConstrainedLayerERNS_11RenderLayerE","__ZNK7WebCore21RenderLayerCompositor29needsFixedRootBackgroundLayerERKNS_11RenderLayerE","__ZN7WebCore21RenderLayerCompositor36updateRenderFlowThreadLayersIfNeededEv","__ZN7WebCore21RenderLayerCompositor30removeViewportConstrainedLayerERNS_11RenderLayerE","__ZN7WebCore21RenderLayerCompositor15attachRootLayerENS0_19RootLayerAttachmentE","__ZN7WebCore21RenderLayerCompositor52disableLayerFlushThrottlingTemporarilyForInteractionEv","__ZNK7WebCore21RenderLayerCompositor24isThrottlingLayerFlushesEv","__ZN7WebCore21RenderLayerCompositor15addToOverlapMapERNS0_10OverlapMapERNS_11RenderLayerERNS_7IntRectERb","__ZNK7WebCore21RenderLayerCompositor25calculateCompositedBoundsERKNS_11RenderLayerES3_","__ZN7WebCore32FixedPositionViewportConstraintsD0Ev","__ZN7WebCore21RenderLayerCompositor36computeRegionCompositingRequirementsEPNS_23RenderNamedFlowFragmentEPNS0_10OverlapMapERNS_16CompositingStateERbS7_","__ZN7WebCore21RenderLayerCompositor17setTracksRepaintsEb","__ZN7WebCore21RenderLayerCompositor24addToOverlapMapRecursiveERNS0_10OverlapMapERNS_11RenderLayerEPS3_","__ZNK7WebCore21RenderLayerCompositor25requiresScrollCornerLayerEv","__ZN7WebCore21RenderLayerCompositor13setIsInWindowEb","__ZN7WebCore21RenderLayerCompositor13layerWasAddedERNS_11RenderLayerES2_","__ZN7WebCore21RenderLayerCompositor27updateLayerCompositingStateERNS_11RenderLayerENS0_24CompositingChangeRepaintE","__ZNK7WebCore21RenderLayerCompositor20scrollingCoordinatorEv","__ZNK7WebCore21RenderLayerCompositor31requiresCompositingForTransformERNS_22RenderLayerModelObjectE","__ZNK7WebCore33StickyPositionViewportConstraints14constraintTypeEv","__ZN7WebCore21RenderLayerCompositor27rebuildCompositingLayerTreeERNS_11RenderLayerERN3WTF6VectorIPNS_13GraphicsLayerELj0ENS3_15CrashOnOverflowEEEi","__ZNK7WebCore21RenderLayerCompositor34contentsScaleMultiplierForNewTilesEPKNS_13GraphicsLayerE","__ZN3WTF9HashTableIPN7WebCore11RenderLayerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZNK7WebCore21RenderLayerCompositor17rootGraphicsLayerEv","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZNK7WebCore21RenderLayerCompositor42shouldPropagateCompositingToEnclosingFrameEv","__ZNK7WebCore21RenderLayerCompositor17clippedByAncestorERNS_11RenderLayerE","__ZNK7WebCore21RenderLayerCompositor29needsContentsCompositingLayerERKNS_11RenderLayerE","__ZNK7WebCore21RenderLayerCompositor4pageEv","__ZN7WebCore21RenderLayerCompositor28updateOverflowControlsLayersEv","__ZNK7WebCore21RenderLayerCompositor15pageScaleFactorEv","__ZNK7WebCore21RenderLayerCompositor27requiresCompositingForFrameERNS_22RenderLayerModelObjectE","__ZNK7WebCore21RenderLayerCompositor24fixedRootBackgroundLayerEv","__ZNK7WebCore21RenderLayerCompositor15rootRenderLayerEv","__ZN7WebCore21RenderLayerCompositor24flushPendingLayerChangesEb","__ZN7WebCore21RenderLayerCompositor18frameViewDidScrollEv","__ZN7WebCore33StickyPositionViewportConstraintsD1Ev","__ZN7WebCore21RenderLayerCompositor40clearBackingForLayerIncludingDescendantsERNS_11RenderLayerE","__ZN7WebCore21RenderLayerCompositor27repaintInCompositedAncestorERNS_11RenderLayerERKNS_10LayoutRectE","__ZN7WebCore21RenderLayerCompositor35allowsIndependentlyCompositedFramesEPKNS_9FrameViewE","__ZN3WTF9HashTableIPKN7WebCore11RenderLayerES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6expandEPS4_","__ZNK7WebCore21RenderLayerCompositor39customPositionForVisibleRectComputationEPKNS_13GraphicsLayerERNS_10FloatPointE","__ZNK7WebCore21RenderLayerCompositor23hasCoordinatedScrollingEv","__ZN3WTF6VectorIN7WebCore21RenderLayerCompositor10OverlapMap8RectListELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3WTF6VectorIPN7WebCore13GraphicsLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZThn4_N7WebCore21RenderLayerCompositorD1Ev","__ZNK7WebCore21RenderLayerCompositor38supportsFixedRootBackgroundCompositingEv","__ZNK7WebCore21RenderLayerCompositor31requiresCompositingForAnimationERNS_22RenderLayerModelObjectE","__ZNK7WebCore19GraphicsLayerClient21shouldUseTiledBackingEPKNS_13GraphicsLayerE","__ZNK7WebCore32FixedPositionViewportConstraints14constraintTypeEv","__ZNK7WebCore21RenderLayerCompositor36requiresCompositingForIndirectReasonERNS_22RenderLayerModelObjectEbbRNS_11RenderLayer25IndirectCompositingReasonE","__ZN7WebCore21RenderLayerCompositor30setLayerFlushThrottlingEnabledEb","__ZNK7WebCore21RenderLayerCompositor38isRunningAcceleratedTransformAnimationERNS_22RenderLayerModelObjectE","__ZN7WebCore21RenderLayerCompositor21scheduleLayerFlushNowEv","__ZN7WebCore21RenderLayerCompositor24layerBecameNonCompositedERKNS_11RenderLayerE","__ZN7WebCore21RenderLayerCompositor31notifyFlushBeforeDisplayRefreshEPKNS_13GraphicsLayerE","__ZN7WebCore21RenderLayerCompositorD2Ev","__ZN7WebCore21RenderLayerCompositor29layerTiledBackingUsageChangedEPKNS_13GraphicsLayerEb","__ZN7WebCore21RenderLayerCompositor28startLayerFlushTimerIfNeededEv","__ZThn4_N7WebCore21RenderLayerCompositor11flushLayersEPNS_20GraphicsLayerUpdaterE","__ZN7WebCore21RenderLayerCompositor26rootLayerAttachmentChangedEv","__ZN7WebCore21RenderLayerCompositor23updateRootLayerPositionEv","__ZN7WebCore21RenderLayerCompositor21enableCompositingModeEb","__ZN7WebCore21RenderLayerCompositor23scrollingLayerDidChangeERNS_11RenderLayerE","__ZN7WebCore21RenderLayerCompositor27rootFixedBackgroundsChangedEv","__ZN7WebCore21RenderLayerCompositor15layerTreeAsTextEj","__ZN7WebCore21RenderLayerCompositor34unregisterViewportConstrainedLayerERNS_11RenderLayerE","__ZN7WebCore21RenderLayerCompositor30deviceOrPageScaleFactorChangedEv","__ZNK7WebCore21RenderLayerCompositor18isTrackingRepaintsEv","__ZNK7WebCore21RenderLayerCompositor19requiresScrollLayerENS0_19RootLayerAttachmentE","__ZN7WebCore21RenderLayerCompositor26repaintOnCompositingChangeERNS_11RenderLayerE","__ZN7WebCore21RenderLayerCompositor26frameViewDidChangeLocationERKNS_8IntPointE","__ZN7WebCore21RenderLayerCompositor24clearBackingForAllLayersEv","__ZNK7WebCore21RenderLayerCompositor32computeStickyViewportConstraintsERNS_11RenderLayerE","__ZNK7WebCore21RenderLayerCompositor33enclosingCompositorFlushingLayersEv","_memset","__ZNK7WebCore21RenderLayerCompositor12has3DContentEv","__ZN7WebCore5TimerINS_21RenderLayerCompositorEE5firedEv","__ZN7WebCore21RenderLayerCompositor23didFlushChangesForLayerERNS_11RenderLayerEPKNS_13GraphicsLayerE","__ZN7WebCore33StickyPositionViewportConstraintsD0Ev","__ZNK7WebCore19GraphicsLayerClient26shouldDumpPropertyForLayerEPKNS_13GraphicsLayerEPKc","__ZN7WebCore21RenderLayerCompositor31setCompositingLayersNeedRebuildEb","__ZN7WebCore21RenderLayerCompositor18frameViewDidLayoutEv","__ZNK7WebCore21RenderLayerCompositor30requiresCompositingForBlendingERNS_22RenderLayerModelObjectE","__ZN7WebCore21RenderLayerCompositor15didPaintBackingEPNS_18RenderLayerBackingE","__ZN7WebCore21RenderLayerCompositor21windowScreenDidChangeEj","__ZN7WebCore21RenderLayerCompositor30updateViewportConstraintStatusERNS_11RenderLayerE","__ZN7WebCore21RenderLayerCompositor18scheduleLayerFlushEb","__ZThn4_N7WebCore21RenderLayerCompositorD0Ev","__ZN7WebCore21RenderLayerCompositor21recursiveRepaintLayerERNS_11RenderLayerEPKNS_7IntRectE","__ZN7WebCore21RenderLayerCompositor10OverlapMap23popCompositingContainerEv","__ZN7WebCore21RenderLayerCompositor32cacheAcceleratedCompositingFlagsEv","__ZN7WebCore21RenderLayerCompositor20didChangeVisibleRectEv","__ZNK7WebCore21RenderLayerCompositor11scrollLayerEv","__ZN7WebCore21RenderLayerCompositor13paintContentsEPKNS_13GraphicsLayerERNS_15GraphicsContextEjRKNS_7IntRectE","__ZNK7WebCore21RenderLayerCompositor32hasAnyAdditionalCompositedLayersERKNS_11RenderLayerE","__ZN7WebCore21RenderLayerCompositor31fixedRootBackgroundLayerChangedEv","__ZNK7WebCore21RenderLayerCompositor39requiresCompositingForOverflowScrollingERKNS_11RenderLayerE","__ZN7WebCore19GraphicsLayerClient24tiledBackingUsageChangedEPKNS_13GraphicsLayerEb","__ZNK7WebCore21RenderLayerCompositor22keepLayersPixelAlignedEv","__ZN7WebCore21RenderLayerCompositor15detachRootLayerEv","__ZNK7WebCore21RenderLayerCompositor37requiresCompositingForScrollableFrameEv","__ZNK7WebCore19GraphicsLayerClient21shouldSkipLayerInDumpEPKNS_13GraphicsLayerE","__ZN7WebCore21RenderLayerCompositor23updateLayerTreeGeometryERNS_11RenderLayerEi","__ZN7WebCore21RenderLayerCompositor24removeCompositedChildrenERNS_11RenderLayerE","__ZN7WebCore21RenderLayerCompositor19notifyFlushRequiredEPKNS_13GraphicsLayerE","__ZN7WebCore21RenderLayerCompositor20layerFlushTimerFiredEPNS_5TimerIS0_EE","__ZNK7WebCore21RenderLayerCompositor33mainFrameBackingIsTiledWithMarginEv","__ZN3WTF9HashTableIPN7WebCore11RenderLayerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore21RenderLayerCompositor24parentFrameContentLayersEPNS_12RenderWidgetE","__ZNK7WebCore19GraphicsLayerClient19getCurrentTransformEPKNS_13GraphicsLayerERNS_20TransformationMatrixE","__ZN7WebCore21RenderLayerCompositor23frameContentsCompositorEPNS_12RenderWidgetE","__ZNK7WebCore21RenderLayerCompositor28viewHasTransparentBackgroundEPNS_5ColorE","__ZNK7WebCore21RenderLayerCompositor27requiresCompositingForVideoERNS_22RenderLayerModelObjectE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore21RenderLayerCompositor32notifyIFramesOfCompositingChangeEv","__ZN7WebCore21RenderLayerCompositor18layerWillBeRemovedERNS_11RenderLayerES2_","__ZN7WebCore21RenderLayerCompositor30computeCompositingRequirementsEPNS_11RenderLayerERS1_PNS0_10OverlapMapERNS_16CompositingStateERbS8_","__ZN7WebCore21RenderLayerCompositor33updateCompositingLayersTimerFiredEPNS_5TimerIS0_EE","__ZNK7WebCore21RenderLayerCompositor28requiresCompositingForPluginERNS_22RenderLayerModelObjectE","__ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore21RenderLayerCompositor25updateRootLayerAttachmentEv","__ZNK7WebCore21RenderLayerCompositor30requiresVerticalScrollbarLayerEv","__ZN7WebCore21RenderLayerCompositor10OverlapMap24pushCompositingContainerEv","__ZNK7WebCore21RenderLayerCompositor29requiresCompositingForFiltersERNS_22RenderLayerModelObjectE","__ZN7WebCore21RenderLayerCompositor22frameViewDidChangeSizeEv","__ZN7WebCore21RenderLayerCompositor30scheduleCompositingLayerUpdateEv","__ZN7WebCore5TimerINS_21RenderLayerCompositorEED0Ev","__ZNK7WebCore21RenderLayerCompositor15canBeCompositedERKNS_11RenderLayerE","__ZN7WebCore32FixedPositionViewportConstraintsD1Ev","__ZN7WebCore21RenderLayerCompositor32paintRelatedMilestonesTimerFiredEPNS_5TimerIS0_EE","__ZNK7WebCore21RenderLayerCompositor28requiresCompositingForCanvasERNS_22RenderLayerModelObjectE","__ZN7WebCore21RenderLayerCompositor23updateCompositingLayersENS_21CompositingUpdateTypeEPNS_11RenderLayerE","__ZNK7WebCore21RenderLayerCompositor16pageTiledBackingEv","__ZN7WebCore21RenderLayerCompositorD0Ev","__ZN3WTF9HashTableIPKN7WebCore11RenderLayerES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZN7WebCore21RenderLayerCompositor24resetTrackedRepaintRectsEv"]

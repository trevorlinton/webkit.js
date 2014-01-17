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
H_BASE = parentModule["_malloc"](416 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 416;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore15RenderScrollbarC1EPNS_14ScrollableAreaENS_20ScrollbarOrientationEPNS_7ElementEPNS_5FrameE;
var __ZN7WebCore15RenderScrollbarD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,220,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_fi(index,a1) {
  try {
    return Module["dynCall_fi"](index,a1);
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
  var __ZTVN7WebCore15RenderScrollbarE=(H_BASE+8)|0;
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
  var invoke_fi=env.invoke_fi;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore15RenderScrollbar19updateScrollbarPartENS_13ScrollbarPartE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 48 | 0;
 switch (i2 | 0) {
 case 4:
 case 16:
  {
   i10 = 11;
   break;
  }
 case 8:
  {
   i10 = 8;
   break;
  }
 case 256:
  {
   i10 = 10;
   break;
  }
 case 128:
  {
   i10 = 7;
   break;
  }
 case 1:
 case 2:
 case 32:
 case 64:
  {
   i10 = 9;
   break;
  }
 case 0:
  {
   STACKTOP = i3;
   return;
  }
 default:
  {
   i10 = 7;
  }
 }
 __ZN7WebCore15RenderScrollbar23getScrollbarPseudoStyleENS_13ScrollbarPartENS_8PseudoIdE(i5, i1, i2, i10);
 i10 = i5 | 0;
 i5 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = (i5 | 0) == 0;
 L9 : do {
  if (i10) {
   i11 = 14;
  } else {
   i12 = HEAP32[i5 + 48 >> 2] & 31;
   do {
    if ((i12 | 0) == 22) {
     i11 = 14;
     break L9;
    } else if ((i12 | 0) == 1) {
     i11 = 15;
    } else {
     i13 = HEAP32[i1 + 52 >> 2] | 0;
     i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 24 >> 2] & 127](i13) | 0;
     if ((i2 | 0) == 1) {
      i13 = i1 + 180 | 0;
      if ((i14 - 1 | 0) >>> 0 < 2 >>> 0 | (i14 | 0) == 4) {
       i15 = i13;
       break;
      } else {
       i16 = i13;
       break L9;
      }
     } else if ((i2 | 0) == 2) {
      i13 = i1 + 180 | 0;
      if ((i14 | 0) == 4 | (i14 | 0) == 2) {
       i15 = i13;
       break;
      } else {
       i16 = i13;
       break L9;
      }
     } else if ((i2 | 0) == 32) {
      i13 = i1 + 180 | 0;
      if ((i14 - 3 | 0) >>> 0 < 2 >>> 0) {
       i15 = i13;
       break;
      } else {
       i16 = i13;
       break L9;
      }
     } else if ((i2 | 0) == 64) {
      if ((i14 | 0) == 3 | (i14 | 0) == 1 | (i14 | 0) == 4) {
       i11 = 15;
       break;
      } else {
       i11 = 14;
       break L9;
      }
     } else {
      i15 = i1 + 180 | 0;
      break;
     }
    }
   } while (0);
   if ((i11 | 0) == 15) {
    i15 = i1 + 180 | 0;
   }
   HEAP32[i6 >> 2] = i2;
   HEAP32[i7 >> 2] = 0;
   __ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore9RenderPtrINS2_19RenderScrollbarPartEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EEjDnEENS_18HashTableAddResultINS_17HashTableIteratorIjS6_S8_SA_SG_SD_EEEEOT0_OT1_(i8, i15 | 0, i6, i7);
   i12 = (HEAP32[i8 >> 2] | 0) + 4 | 0;
   i14 = HEAP32[i12 >> 2] | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i9 >> 2] = i5;
    __ZN7WebCore13RenderElement8setStyleEN3WTF7PassRefINS_11RenderStyleEEE(i14 | 0, i9);
    STACKTOP = i3;
    return;
   }
   i14 = HEAP32[i1 + 176 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i13 = HEAP32[i1 + 172 >> 2] | 0;
    i17 = i13 + 32 | 0;
    if ((HEAP32[i13 + 12 >> 2] & 2048 | 0) == 0) {
     i18 = i17 | 0;
    } else {
     i18 = HEAP32[i17 >> 2] | 0;
    }
    i19 = __ZNK7WebCore12RenderObject12enclosingBoxEv(HEAP32[i18 >> 2] | 0) | 0;
   } else {
    i19 = __ZNK7WebCore5Frame13ownerRendererEv(i14) | 0;
   }
   i14 = HEAP32[(HEAP32[(HEAP32[i19 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   i17 = __ZN3WTF10fastMallocEj(104) | 0;
   HEAP32[i4 >> 2] = i5;
   __ZN7WebCore19RenderScrollbarPartC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEPNS_15RenderScrollbarENS_13ScrollbarPartE(i17, i14, i4, i1, i2);
   i14 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i17;
   if ((i14 | 0) == 0) {
    i20 = i17;
   } else {
    __ZN7WebCore12RenderObject7destroyEv(i14 | 0);
    i20 = HEAP32[i12 >> 2] | 0;
   }
   __ZN7WebCore13RenderElement15initializeStyleEv(i20 | 0);
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i11 | 0) == 14) {
  i16 = i1 + 180 | 0;
 }
 i1 = HEAP32[i16 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i11 = HEAP32[i16 + 4 >> 2] | 0;
  i21 = i11 << 3 | 0;
  i22 = 0;
  i23 = i11;
 } else {
  i11 = HEAP32[i16 + 8 >> 2] | 0;
  i20 = ~(i2 << 15) + i2 | 0;
  i4 = (i20 >>> 10 ^ i20) * 9 & -1;
  i20 = i4 >>> 6 ^ i4;
  i4 = i20 + ~(i20 << 11) | 0;
  i20 = i4 >>> 16 ^ i4;
  i4 = i11 & i20;
  i19 = i1 + (i4 << 3) | 0;
  i18 = HEAP32[i19 >> 2] | 0;
  L44 : do {
   if ((i18 | 0) == (i2 | 0)) {
    i24 = i19;
   } else {
    i9 = (i20 >>> 23) + ~i20 | 0;
    i8 = i9 << 12 ^ i9;
    i9 = i8 >>> 7 ^ i8;
    i8 = i9 << 2 ^ i9;
    i9 = i8 >>> 20 ^ i8 | 1;
    i8 = 0;
    i7 = i4;
    i6 = i18;
    while (1) {
     if ((i6 | 0) == 0) {
      i24 = 0;
      break L44;
     }
     i15 = (i8 | 0) == 0 ? i9 : i8;
     i12 = i15 + i7 & i11;
     i14 = i1 + (i12 << 3) | 0;
     i17 = HEAP32[i14 >> 2] | 0;
     if ((i17 | 0) == (i2 | 0)) {
      i24 = i14;
      break;
     } else {
      i8 = i15;
      i7 = i12;
      i6 = i17;
     }
    }
   }
  } while (0);
  i2 = HEAP32[i16 + 4 >> 2] | 0;
  i21 = (i24 | 0) == 0 ? i1 + (i2 << 3) | 0 : i24;
  i22 = i1;
  i23 = i2;
 }
 i2 = i16 | 0;
 i1 = i16 + 4 | 0;
 do {
  if ((i21 | 0) != (i22 + (i23 << 3) | 0)) {
   i24 = HEAP32[i21 + 4 >> 2] | 0;
   if ((i24 | 0) != 0) {
    __ZN7WebCore12RenderObject7destroyEv(i24 | 0);
   }
   HEAP32[i21 >> 2] = -1;
   i24 = i16 + 16 | 0;
   HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
   i24 = i16 + 12 | 0;
   i11 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   HEAP32[i24 >> 2] = i11;
   i24 = HEAP32[i1 >> 2] | 0;
   if (!((i11 * 6 & -1 | 0) < (i24 | 0) & (i24 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore9RenderPtrINS2_19RenderScrollbarPartEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, (i24 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 if (i10) {
  STACKTOP = i3;
  return;
 }
 i10 = i5 | 0;
 i2 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore11RenderStyleD2Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i10 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore15RenderScrollbar10buttonRectENS_13ScrollbarPartE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 336 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 80 | 0;
 i11 = i4 + 96 | 0;
 i12 = i4 + 112 | 0;
 i13 = i4 + 128 | 0;
 i14 = i4 + 144 | 0;
 i15 = i4 + 160 | 0;
 i16 = i4 + 176 | 0;
 i17 = i4 + 192 | 0;
 i18 = i4 + 208 | 0;
 i19 = i4 + 224 | 0;
 i20 = i4 + 240 | 0;
 i21 = i4 + 256 | 0;
 i22 = i4 + 272 | 0;
 i23 = i4 + 288 | 0;
 i24 = i4 + 304 | 0;
 i25 = i4 + 320 | 0;
 i26 = HEAP32[i2 + 188 >> 2] | 0;
 i27 = HEAP32[i2 + 180 >> 2] | 0;
 i28 = ~(i3 << 15) + i3 | 0;
 i29 = (i28 >>> 10 ^ i28) * 9 & -1;
 i28 = i29 >>> 6 ^ i29;
 i29 = i28 + ~(i28 << 11) | 0;
 i28 = i29 >>> 16 ^ i29;
 L1 : do {
  if ((i27 | 0) != 0) {
   i29 = i26 & i28;
   i30 = i27 + (i29 << 3) | 0;
   i31 = HEAP32[i30 >> 2] | 0;
   if ((i31 | 0) == (i3 | 0)) {
    i32 = i30;
   } else {
    i30 = (i28 >>> 23) + ~i28 | 0;
    i33 = i30 << 12 ^ i30;
    i30 = i33 >>> 7 ^ i33;
    i33 = i30 << 2 ^ i30;
    i30 = i33 >>> 20 ^ i33 | 1;
    i33 = 0;
    i34 = i29;
    i29 = i31;
    while (1) {
     if ((i29 | 0) == 0) {
      break L1;
     }
     i31 = (i33 | 0) == 0 ? i30 : i33;
     i35 = i31 + i34 & i26;
     i36 = i27 + (i35 << 3) | 0;
     i37 = HEAP32[i36 >> 2] | 0;
     if ((i37 | 0) == (i3 | 0)) {
      i32 = i36;
      break;
     } else {
      i33 = i31;
      i34 = i35;
      i29 = i37;
     }
    }
   }
   if ((i32 | 0) == 0) {
    break;
   }
   i29 = HEAP32[i32 + 4 >> 2] | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   __ZN7WebCore19RenderScrollbarPart6layoutEv(i29);
   i34 = (HEAP32[i2 + 44 >> 2] | 0) == 0;
   if ((i3 | 0) == 1) {
    i33 = i2;
    i30 = i22 | 0;
    __ZNK7WebCore6Widget9frameRectEv(i22, i33);
    i37 = HEAP32[i30 >> 2] | 0;
    i35 = HEAP32[i30 + 4 >> 2] | 0;
    if (i34) {
     i30 = HEAP32[i29 + 52 >> 2] | 0;
     __ZNK7WebCore6Widget9frameRectEv(i19, i33);
     i38 = HEAP32[i19 + 12 >> 2] | 0;
     i39 = i30;
    } else {
     __ZNK7WebCore6Widget9frameRectEv(i20, i33);
     i38 = HEAP32[i29 + 56 >> 2] | 0;
     i39 = HEAP32[i20 + 8 >> 2] | 0;
    }
    i33 = i1;
    HEAP32[i33 >> 2] = i37;
    HEAP32[i33 + 4 >> 2] = i35;
    i35 = i1 + 8 | 0;
    HEAP32[i35 >> 2] = i39;
    HEAP32[i35 + 4 >> 2] = i38;
    STACKTOP = i4;
    return;
   } else if ((i3 | 0) == 64) {
    i35 = i2;
    __ZNK7WebCore6Widget9frameRectEv(i15, i35);
    i33 = HEAP32[i15 >> 2] | 0;
    if (i34) {
     __ZNK7WebCore6Widget9frameRectEv(i14, i35);
     i40 = (HEAP32[i14 + 8 >> 2] | 0) + i33 - (HEAP32[i29 + 52 >> 2] | 0) | 0;
    } else {
     i40 = i33;
    }
    __ZNK7WebCore6Widget9frameRectEv(i12, i35);
    i33 = HEAP32[i12 + 4 >> 2] | 0;
    if (i34) {
     i37 = HEAP32[i29 + 52 >> 2] | 0;
     __ZNK7WebCore6Widget9frameRectEv(i7, i35);
     i41 = HEAP32[i7 + 12 >> 2] | 0;
     i42 = i33;
     i43 = i37;
    } else {
     __ZNK7WebCore6Widget9frameRectEv(i11, i35);
     i37 = i29 + 56 | 0;
     i30 = (HEAP32[i11 + 12 >> 2] | 0) + i33 - (HEAP32[i37 >> 2] | 0) | 0;
     __ZNK7WebCore6Widget9frameRectEv(i8, i35);
     i41 = HEAP32[i37 >> 2] | 0;
     i42 = i30;
     i43 = HEAP32[i8 + 8 >> 2] | 0;
    }
    HEAP32[i1 >> 2] = i40;
    HEAP32[i1 + 4 >> 2] = i42;
    HEAP32[i1 + 8 >> 2] = i43;
    HEAP32[i1 + 12 >> 2] = i41;
    STACKTOP = i4;
    return;
   } else if ((i3 | 0) == 2) {
    __ZN7WebCore15RenderScrollbar10buttonRectENS_13ScrollbarPartE(i24, i2, 1);
    i30 = i2;
    __ZNK7WebCore6Widget9frameRectEv(i5, i30);
    i37 = HEAP32[i5 >> 2] | 0;
    if (i34) {
     i44 = (HEAP32[i24 + 8 >> 2] | 0) + i37 | 0;
    } else {
     i44 = i37;
    }
    __ZNK7WebCore6Widget9frameRectEv(i6, i30);
    i37 = HEAP32[i6 + 4 >> 2] | 0;
    if (i34) {
     i35 = HEAP32[i29 + 52 >> 2] | 0;
     __ZNK7WebCore6Widget9frameRectEv(i10, i30);
     i45 = HEAP32[i10 + 12 >> 2] | 0;
     i46 = i37;
     i47 = i35;
    } else {
     i35 = (HEAP32[i24 + 12 >> 2] | 0) + i37 | 0;
     __ZNK7WebCore6Widget9frameRectEv(i9, i30);
     i45 = HEAP32[i29 + 56 >> 2] | 0;
     i46 = i35;
     i47 = HEAP32[i9 + 8 >> 2] | 0;
    }
    HEAP32[i1 >> 2] = i44;
    HEAP32[i1 + 4 >> 2] = i46;
    HEAP32[i1 + 8 >> 2] = i47;
    HEAP32[i1 + 12 >> 2] = i45;
    STACKTOP = i4;
    return;
   } else {
    __ZN7WebCore15RenderScrollbar10buttonRectENS_13ScrollbarPartE(i25, i2, 64);
    i35 = i2;
    __ZNK7WebCore6Widget9frameRectEv(i13, i35);
    i30 = HEAP32[i13 >> 2] | 0;
    if (i34) {
     __ZNK7WebCore6Widget9frameRectEv(i16, i35);
     i48 = (HEAP32[i16 + 8 >> 2] | 0) + i30 - (HEAP32[i25 + 8 >> 2] | 0) - (HEAP32[i29 + 52 >> 2] | 0) | 0;
    } else {
     i48 = i30;
    }
    __ZNK7WebCore6Widget9frameRectEv(i17, i35);
    i30 = HEAP32[i17 + 4 >> 2] | 0;
    if (i34) {
     i34 = HEAP32[i29 + 52 >> 2] | 0;
     __ZNK7WebCore6Widget9frameRectEv(i23, i35);
     i49 = HEAP32[i23 + 12 >> 2] | 0;
     i50 = i30;
     i51 = i34;
    } else {
     __ZNK7WebCore6Widget9frameRectEv(i18, i35);
     i34 = i29 + 56 | 0;
     i29 = (HEAP32[i18 + 12 >> 2] | 0) + i30 - (HEAP32[i25 + 12 >> 2] | 0) - (HEAP32[i34 >> 2] | 0) | 0;
     __ZNK7WebCore6Widget9frameRectEv(i21, i35);
     i49 = HEAP32[i34 >> 2] | 0;
     i50 = i29;
     i51 = HEAP32[i21 + 8 >> 2] | 0;
    }
    HEAP32[i1 >> 2] = i48;
    HEAP32[i1 + 4 >> 2] = i50;
    HEAP32[i1 + 8 >> 2] = i51;
    HEAP32[i1 + 12 >> 2] = i49;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 _memset(i1 | 0, 0, 16) | 0;
 STACKTOP = i4;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_fi + 4;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_fi + 2;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_vi + 28;
}
function __ZN7WebCore15RenderScrollbar23getScrollbarPseudoStyleENS_13ScrollbarPartENS_8PseudoIdE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i2 + 176 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = HEAP32[i2 + 172 >> 2] | 0;
   i13 = (HEAP32[i12 + 12 >> 2] & 2048 | 0) == 0;
   i14 = i12 + 32 | 0;
   if (i13) {
    i15 = i14 | 0;
   } else {
    i15 = HEAP32[i14 >> 2] | 0;
   }
   if ((HEAP32[i15 >> 2] | 0) == 0) {
    break;
   }
   if (i13) {
    i16 = i14 | 0;
   } else {
    i16 = HEAP32[i14 >> 2] | 0;
   }
   i17 = __ZNK7WebCore12RenderObject12enclosingBoxEv(HEAP32[i16 >> 2] | 0) | 0;
   i18 = 11;
  } else {
   i17 = __ZNK7WebCore5Frame13ownerRendererEv(i11) | 0;
   i18 = 11;
  }
 } while (0);
 do {
  if ((i18 | 0) == 11) {
   if ((i17 | 0) == 0) {
    break;
   }
   i11 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i16 = HEAP32[i2 + 172 >> 2] | 0;
     i15 = (HEAP32[i16 + 12 >> 2] & 2048 | 0) == 0;
     i14 = i16 + 32 | 0;
     if (i15) {
      i19 = i14 | 0;
     } else {
      i19 = HEAP32[i14 >> 2] | 0;
     }
     if ((HEAP32[i19 >> 2] | 0) == 0) {
      i20 = 0;
      break;
     }
     if (i15) {
      i21 = i14 | 0;
     } else {
      i21 = HEAP32[i14 >> 2] | 0;
     }
     i20 = __ZNK7WebCore12RenderObject12enclosingBoxEv(HEAP32[i21 >> 2] | 0) | 0;
    } else {
     i20 = __ZNK7WebCore5Frame13ownerRendererEv(i11) | 0;
    }
   } while (0);
   i11 = i20 | 0;
   HEAP32[i9 >> 2] = i4;
   HEAP32[i9 + 4 >> 2] = i3;
   HEAP32[i9 + 8 >> 2] = i2;
   i14 = HEAP32[i10 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i15 = HEAP32[i2 + 172 >> 2] | 0;
    i16 = i15 + 32 | 0;
    if ((HEAP32[i15 + 12 >> 2] & 2048 | 0) == 0) {
     i22 = i16 | 0;
    } else {
     i22 = HEAP32[i16 >> 2] | 0;
    }
    i23 = __ZNK7WebCore12RenderObject12enclosingBoxEv(HEAP32[i22 >> 2] | 0) | 0;
   } else {
    i23 = __ZNK7WebCore5Frame13ownerRendererEv(i14) | 0;
   }
   __ZNK7WebCore12RenderObject22getUncachedPseudoStyleERKNS_18PseudoStyleRequestEPNS_11RenderStyleES5_(i8, i11, i9, HEAP32[i23 + 36 >> 2] | 0, 0);
   i11 = i8 | 0;
   i14 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   if ((i14 | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i5;
    return;
   }
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == 0) {
    HEAP32[i1 >> 2] = i14;
   } else {
    i16 = HEAP32[i11 + 452 >> 2] | 0;
    L44 : do {
     if ((i16 | 0) != 0) {
      if (__ZNK7WebCore9FrameView13isTransparentEv(i16) | 0) {
       break;
      }
      __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i6, i14, 23);
      if ((HEAP8[i6 + 4 | 0] & 1) != 0) {
       if ((HEAP32[i6 >> 2] | 0) >>> 0 >= 16777216 >>> 0) {
        break;
       }
      }
      i11 = i14 + 12 | 0;
      i15 = (HEAP32[i11 >> 2] | 0) + 4 | 0;
      while (1) {
       if ((HEAP32[i15 + 4 >> 2] | 0) != 0) {
        break L44;
       }
       i15 = HEAP32[i15 >> 2] | 0;
       if ((i15 | 0) == 0) {
        break;
       }
      }
      i15 = HEAP32[i11 >> 2] | 0;
      if ((HEAP32[i15 + 52 >> 2] | 0) == -1) {
       if ((HEAP8[i15 + 56 | 0] & 1) != 0) {
        break;
       }
      }
      if ((HEAP32[i15 >> 2] | 0) == 1) {
       i24 = i15;
      } else {
       __ZNK7WebCore19StyleBackgroundData4copyEv(i7, i15);
       i15 = HEAP32[i7 >> 2] | 0;
       i13 = HEAP32[i11 >> 2] | 0;
       i12 = i13 | 0;
       i25 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
       if ((i25 | 0) == 0) {
        __ZN7WebCore9FillLayerD1Ev(i13 + 4 | 0);
        __ZN3WTF8fastFreeEPv(i13);
       } else {
        HEAP32[i12 >> 2] = i25;
       }
       HEAP32[i11 >> 2] = i15;
       i24 = i15;
      }
      HEAP32[i24 + 52 >> 2] = -1;
      HEAP8[i24 + 56 | 0] = 1;
     }
    } while (0);
    HEAP32[i1 >> 2] = i14;
   }
   i16 = i14 | 0;
   i15 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = i15 + 1;
   if ((i15 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i14);
    __ZN3WTF8fastFreeEPv(i14);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i16 >> 2] = i15;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15RenderScrollbar20updateScrollbarPartsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 48 | 0;
 i7 = i2 + 64 | 0;
 i8 = i2 + 80 | 0;
 i9 = i8 | 0;
 i10 = i8;
 __ZN7WebCore15RenderScrollbar19updateScrollbarPartENS_13ScrollbarPartE(i1, 128);
 __ZN7WebCore15RenderScrollbar19updateScrollbarPartENS_13ScrollbarPartE(i1, 1);
 __ZN7WebCore15RenderScrollbar19updateScrollbarPartENS_13ScrollbarPartE(i1, 2);
 __ZN7WebCore15RenderScrollbar19updateScrollbarPartENS_13ScrollbarPartE(i1, 4);
 __ZN7WebCore15RenderScrollbar19updateScrollbarPartENS_13ScrollbarPartE(i1, 8);
 __ZN7WebCore15RenderScrollbar19updateScrollbarPartENS_13ScrollbarPartE(i1, 16);
 __ZN7WebCore15RenderScrollbar19updateScrollbarPartENS_13ScrollbarPartE(i1, 32);
 __ZN7WebCore15RenderScrollbar19updateScrollbarPartENS_13ScrollbarPartE(i1, 64);
 __ZN7WebCore15RenderScrollbar19updateScrollbarPartENS_13ScrollbarPartE(i1, 256);
 i11 = i1;
 i12 = (HEAP32[i1 + 44 >> 2] | 0) == 0;
 i13 = i1;
 if (i12) {
  __ZNK7WebCore6Widget9frameRectEv(i7, i13);
  i14 = HEAP32[i7 + 12 >> 2] | 0;
 } else {
  __ZNK7WebCore6Widget9frameRectEv(i6, i13);
  i14 = HEAP32[i6 + 8 >> 2] | 0;
 }
 i6 = HEAP32[i1 + 188 >> 2] | 0;
 i7 = HEAP32[i1 + 180 >> 2] | 0;
 L5 : do {
  if ((i7 | 0) == 0) {
   i15 = 0;
  } else {
   i16 = i6 & -139219434;
   i17 = i7 + (i16 << 3) | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   if ((i18 | 0) == 128) {
    i19 = i17;
   } else {
    i17 = 0;
    i20 = i16;
    i16 = i18;
    while (1) {
     if ((i16 | 0) == 0) {
      i15 = 0;
      break L5;
     }
     i18 = (i17 | 0) == 0 ? -12059017 : i17;
     i21 = i18 + i20 & i6;
     i22 = i7 + (i21 << 3) | 0;
     i23 = HEAP32[i22 >> 2] | 0;
     if ((i23 | 0) == 128) {
      i19 = i22;
      break;
     } else {
      i17 = i18;
      i20 = i21;
      i16 = i23;
     }
    }
   }
   if ((i19 | 0) == 0) {
    i15 = 0;
    break;
   }
   i16 = HEAP32[i19 + 4 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i15 = 0;
    break;
   }
   __ZN7WebCore19RenderScrollbarPart6layoutEv(i16);
   if (i12) {
    i15 = HEAP32[i16 + 56 >> 2] | 0;
    break;
   } else {
    i15 = HEAP32[i16 + 52 >> 2] | 0;
    break;
   }
  }
 } while (0);
 if ((i15 | 0) == (i14 | 0)) {
  STACKTOP = i2;
  return;
 }
 i14 = i3 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i3, i13);
 i3 = HEAP32[i14 >> 2] | 0;
 i19 = HEAP32[i14 + 4 >> 2] | 0;
 if (i12) {
  __ZNK7WebCore6Widget9frameRectEv(i4, i13);
  i24 = i15;
  i25 = HEAP32[i4 + 8 >> 2] | 0;
 } else {
  __ZNK7WebCore6Widget9frameRectEv(i5, i13);
  i24 = HEAP32[i5 + 12 >> 2] | 0;
  i25 = i15;
 }
 HEAP32[i9 >> 2] = i3;
 HEAP32[i9 + 4 >> 2] = i19;
 i19 = i8 + 8 | 0;
 HEAP32[i19 >> 2] = i25;
 HEAP32[i19 + 4 >> 2] = i24;
 __ZN7WebCore9Scrollbar12setFrameRectERKNS_7IntRectE(i11, i10);
 i10 = HEAP32[i1 + 176 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = HEAP32[i1 + 172 >> 2] | 0;
  i1 = (HEAP32[i11 + 12 >> 2] & 2048 | 0) == 0;
  i24 = i11 + 32 | 0;
  if (i1) {
   i26 = i24 | 0;
  } else {
   i26 = HEAP32[i24 >> 2] | 0;
  }
  if ((HEAP32[i26 >> 2] | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  if (i1) {
   i27 = i24 | 0;
  } else {
   i27 = HEAP32[i24 >> 2] | 0;
  }
  i28 = __ZNK7WebCore12RenderObject12enclosingBoxEv(HEAP32[i27 >> 2] | 0) | 0;
 } else {
  i28 = __ZNK7WebCore5Frame13ownerRendererEv(i10) | 0;
 }
 if ((i28 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i10 = i28 + 20 | 0;
 i27 = HEAP32[i10 >> 2] | 0;
 if ((i27 & 4 | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i10 >> 2] = i27 | 4;
 __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i28 | 0, 1, 0);
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore9RenderPtrINS2_19RenderScrollbarPartEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EEjDnEENS_18HashTableAddResultINS_17HashTableIteratorIjS6_S8_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = 8;
  } else {
   i8 = i6 << 1;
   i7 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i8 | 0) ? i6 : i8;
  }
  __ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore9RenderPtrINS2_19RenderScrollbarPartEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i8 = i7 + ~(i7 << 15) | 0;
 i6 = (i8 >>> 10 ^ i8) * 9 & -1;
 i8 = i6 >>> 6 ^ i6;
 i6 = i8 + ~(i8 << 11) | 0;
 i8 = i6 >>> 16 ^ i6;
 i6 = i8 & i5;
 i10 = i9 + (i6 << 3) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = i7;
  } else {
   i14 = (i8 >>> 23) + ~i8 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i6;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i7 | 0)) {
     i20 = 8;
     break;
    }
    i21 = (i19 | 0) == -1 ? i18 : i16;
    i22 = (i15 | 0) == 0 ? i14 : i15;
    i23 = i22 + i17 & i5;
    i24 = i9 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i20 = 10;
     break;
    } else {
     i15 = i22;
     i16 = i21;
     i17 = i23;
     i18 = i24;
     i19 = i25;
    }
   }
   if ((i20 | 0) == 8) {
    i19 = i9 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i20 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i12 = i24;
     i13 = i7;
     break;
    }
    i19 = i21;
    HEAP32[i19 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i12 = i21;
    i13 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i12 >> 2] = i13;
 i13 = i12 + 4 | 0;
 i3 = HEAP32[i13 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore12RenderObject7destroyEv(i3 | 0);
 }
 HEAP32[i13 >> 2] = 0;
 i13 = i2 + 12 | 0;
 i3 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i3;
 i13 = i2 + 4 | 0;
 i21 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i3 << 1 | 0) < (i21 | 0)) {
  i26 = i12;
  i27 = i21;
 } else {
  if ((i21 | 0) == 0) {
   i28 = 8;
  } else {
   i7 = i21 << 1;
   i28 = (i3 * 6 & -1 | 0) < (i7 | 0) ? i21 : i7;
  }
  i7 = __ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore9RenderPtrINS2_19RenderScrollbarPartEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i28, i12) | 0;
  i26 = i7;
  i27 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i4 >> 2] | 0) + (i27 << 3) | 0;
 i27 = i1;
 HEAP32[i27 >> 2] = i26;
 HEAP32[i27 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore9RenderPtrINS2_19RenderScrollbarPartEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 << 3) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  if ((i13 | 0) == (-1 | 0) | (i13 | 0) == 0) {
   i14 = i11;
  } else {
   i15 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = i13 + ~(i13 << 15) | 0;
   i18 = (i17 >>> 10 ^ i17) * 9 & -1;
   i17 = i18 >>> 6 ^ i18;
   i18 = i17 + ~(i17 << 11) | 0;
   i17 = i18 >>> 16 ^ i18;
   i18 = i16 & i17;
   i19 = i15 + (i18 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
    } else {
     i24 = (i17 >>> 23) + ~i17 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i18;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i16;
      i34 = i15 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 6;
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
   if ((i23 | 0) == 6) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i15 = i30 + 4 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i36 = i13;
   } else {
    __ZN7WebCore12RenderObject7destroyEv(i16 | 0);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
   i16 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i15 >> 2] = i20;
   i14 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i14;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i37 = 0;
 } else {
  i8 = i14;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i37 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    __ZN7WebCore12RenderObject7destroyEv(i1 | 0);
   }
  } while (0);
  i2 = i37 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i37 = i2;
  } else {
   i8 = i14;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore15RenderScrollbar25trackPieceRectWithMarginsENS_13ScrollbarPartERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = HEAP32[i2 + 188 >> 2] | 0;
 i11 = HEAP32[i2 + 180 >> 2] | 0;
 i12 = ~(i3 << 15) + i3 | 0;
 i13 = (i12 >>> 10 ^ i12) * 9 & -1;
 i12 = i13 >>> 6 ^ i13;
 i13 = i12 + ~(i12 << 11) | 0;
 i12 = i13 >>> 16 ^ i13;
 L1 : do {
  if ((i11 | 0) != 0) {
   i13 = i10 & i12;
   i14 = i11 + (i13 << 3) | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   if ((i15 | 0) == (i3 | 0)) {
    i16 = i14;
   } else {
    i14 = (i12 >>> 23) + ~i12 | 0;
    i17 = i14 << 12 ^ i14;
    i14 = i17 >>> 7 ^ i17;
    i17 = i14 << 2 ^ i14;
    i14 = i17 >>> 20 ^ i17 | 1;
    i17 = 0;
    i18 = i13;
    i13 = i15;
    while (1) {
     if ((i13 | 0) == 0) {
      break L1;
     }
     i15 = (i17 | 0) == 0 ? i14 : i17;
     i19 = i15 + i18 & i10;
     i20 = i11 + (i19 << 3) | 0;
     i21 = HEAP32[i20 >> 2] | 0;
     if ((i21 | 0) == (i3 | 0)) {
      i16 = i20;
      break;
     } else {
      i17 = i15;
      i18 = i19;
      i13 = i21;
     }
    }
   }
   if ((i16 | 0) == 0) {
    break;
   }
   i13 = HEAP32[i16 + 4 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   __ZN7WebCore19RenderScrollbarPart6layoutEv(i13);
   i18 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i4 + 4 >> 2] | 0;
   i14 = HEAP32[i4 + 8 >> 2] | 0;
   i21 = HEAP32[i4 + 12 >> 2] | 0;
   if ((HEAP32[i2 + 44 >> 2] | 0) == 0) {
    i19 = (HEAP32[i13 + 72 >> 2] | 0) + i18 | 0;
    i15 = i13 | 0;
    i20 = i13;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 776 >> 2] & 63](i6, i15);
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 780 >> 2] & 63](i7, i15);
    i22 = i19;
    i23 = i17;
    i24 = i14 - (HEAP32[i6 >> 2] | 0) - (HEAP32[i7 >> 2] | 0) | 0;
    i25 = i21;
   } else {
    i19 = (HEAP32[i13 + 60 >> 2] | 0) + i17 | 0;
    i17 = i13 | 0;
    i15 = i13;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 768 >> 2] & 63](i8, i17);
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 772 >> 2] & 63](i9, i17);
    i22 = i18;
    i23 = i19;
    i24 = i14;
    i25 = i21 - (HEAP32[i8 >> 2] | 0) - (HEAP32[i9 >> 2] | 0) | 0;
   }
   HEAP32[i1 >> 2] = i22;
   HEAP32[i1 + 4 >> 2] = i23;
   HEAP32[i1 + 8 >> 2] = i24;
   HEAP32[i1 + 12 >> 2] = i25;
   STACKTOP = i5;
   return;
  }
 } while (0);
 i25 = i1;
 i1 = i4;
 HEAP32[i25 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i25 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i25 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i25 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15RenderScrollbar9trackRectEii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 48 | 0;
 i10 = i5 + 64 | 0;
 i11 = i5 + 80 | 0;
 i12 = i5 + 96 | 0;
 i13 = i5 + 112 | 0;
 i14 = HEAP32[i2 + 188 >> 2] | 0;
 i15 = HEAP32[i2 + 180 >> 2] | 0;
 L1 : do {
  if ((i15 | 0) == 0) {
   i16 = 0;
   i17 = 0;
  } else {
   i18 = i14 & -1112682754;
   i19 = i15 + (i18 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   if ((i20 | 0) == 256) {
    i21 = i19;
   } else {
    i19 = 0;
    i22 = i18;
    i18 = i20;
    while (1) {
     if ((i18 | 0) == 0) {
      i16 = 0;
      i17 = 0;
      break L1;
     }
     i20 = (i19 | 0) == 0 ? -412388977 : i19;
     i23 = i20 + i22 & i14;
     i24 = i15 + (i23 << 3) | 0;
     i25 = HEAP32[i24 >> 2] | 0;
     if ((i25 | 0) == 256) {
      i21 = i24;
      break;
     } else {
      i19 = i20;
      i22 = i23;
      i18 = i25;
     }
    }
   }
   if ((i21 | 0) == 0) {
    i16 = 0;
    i17 = 0;
    break;
   }
   i18 = HEAP32[i21 + 4 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i16 = 0;
    i17 = 0;
    break;
   }
   __ZN7WebCore19RenderScrollbarPart6layoutEv(i18);
   i16 = i18;
   i17 = 1;
  }
 } while (0);
 if ((HEAP32[i2 + 44 >> 2] | 0) == 0) {
  if (i17) {
   i26 = HEAP32[i16 + 64 >> 2] | 0;
   i27 = HEAP32[i16 + 72 >> 2] | 0;
  } else {
   i26 = 0;
   i27 = 0;
  }
  i21 = i27 + i3 | 0;
  i27 = i2;
  __ZNK7WebCore6Widget9frameRectEv(i7, i27);
  i15 = (HEAP32[i7 >> 2] | 0) + i21 | 0;
  __ZNK7WebCore6Widget9frameRectEv(i6, i27);
  i7 = HEAP32[i6 + 4 >> 2] | 0;
  __ZNK7WebCore6Widget9frameRectEv(i8, i27);
  i6 = (HEAP32[i8 + 8 >> 2] | 0) - (i26 + i4 + i21) | 0;
  __ZNK7WebCore6Widget9frameRectEv(i9, i27);
  i27 = HEAP32[i9 + 12 >> 2] | 0;
  HEAP32[i1 >> 2] = i15;
  HEAP32[i1 + 4 >> 2] = i7;
  HEAP32[i1 + 8 >> 2] = i6;
  HEAP32[i1 + 12 >> 2] = i27;
  STACKTOP = i5;
  return;
 } else {
  if (i17) {
   i28 = HEAP32[i16 + 68 >> 2] | 0;
   i29 = HEAP32[i16 + 60 >> 2] | 0;
  } else {
   i28 = 0;
   i29 = 0;
  }
  i16 = i29 + i3 | 0;
  i3 = i2;
  __ZNK7WebCore6Widget9frameRectEv(i10, i3);
  i2 = HEAP32[i10 >> 2] | 0;
  __ZNK7WebCore6Widget9frameRectEv(i11, i3);
  i10 = (HEAP32[i11 + 4 >> 2] | 0) + i16 | 0;
  __ZNK7WebCore6Widget9frameRectEv(i12, i3);
  i11 = HEAP32[i12 + 8 >> 2] | 0;
  __ZNK7WebCore6Widget9frameRectEv(i13, i3);
  i3 = (HEAP32[i13 + 12 >> 2] | 0) - (i28 + i4 + i16) | 0;
  HEAP32[i1 >> 2] = i2;
  HEAP32[i1 + 4 >> 2] = i10;
  HEAP32[i1 + 8 >> 2] = i11;
  HEAP32[i1 + 12 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore11RenderStyleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore14SVGRenderStyleD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = i4 + 8 | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  i5 = i4 | 0;
  if ((i2 | 0) != 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i6 + (i2 << 2) | 0;
   i2 = i6;
   while (1) {
    i6 = HEAP32[i2 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i8 = i6 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i9 | 0) == 0) {
       __ZN7WebCore11RenderStyleD2Ev(i6);
       __ZN3WTF8fastFreeEPv(i6);
       break;
      } else {
       HEAP32[i8 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i7 | 0)) {
     break;
    }
   }
   HEAP32[i3 >> 2] = 0;
  }
  i3 = HEAP32[i5 >> 2] | 0;
  if (!((i4 + 12 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i4 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore18StyleInheritedDataD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore22StyleRareInheritedDataD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore17StyleSurroundDataD2Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore9FillLayerD1Ev(i4 + 4 | 0);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore15StyleVisualDataD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore12StyleBoxDataD2Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore15RenderScrollbarC2EPNS_14ScrollableAreaENS_20ScrollbarOrientationEPNS_7ElementEPNS_5FrameE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 32 | 0;
 i10 = i1;
 __ZN7WebCore9ScrollbarC2EPNS_14ScrollableAreaENS_20ScrollbarOrientationENS_20ScrollbarControlSizeEPNS_14ScrollbarThemeE(i10, i2, i3, 0, __ZN7WebCore20RenderScrollbarTheme20renderScrollbarThemeEv() | 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 36 >> 2] = H_BASE + 268;
 HEAP32[i1 + 172 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 176 >> 2] = i5;
 i5 = i1 + 180 | 0;
 _memset(i5 | 0, 0, 20) | 0;
 __ZN7WebCore15RenderScrollbar19updateScrollbarPartENS_13ScrollbarPartE(i1, 128);
 i3 = HEAP32[i1 + 188 >> 2] | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 L4 : do {
  if ((i4 | 0) == 0) {
   i11 = 10;
  } else {
   i5 = i3 & -139219434;
   i2 = i4 + (i5 << 3) | 0;
   i12 = HEAP32[i2 >> 2] | 0;
   if ((i12 | 0) == 128) {
    i13 = i2;
   } else {
    i2 = 0;
    i14 = i5;
    i5 = i12;
    while (1) {
     if ((i5 | 0) == 0) {
      i11 = 10;
      break L4;
     }
     i12 = (i2 | 0) == 0 ? -12059017 : i2;
     i15 = i12 + i14 & i3;
     i16 = i4 + (i15 << 3) | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     if ((i17 | 0) == 128) {
      i13 = i16;
      break;
     } else {
      i2 = i12;
      i14 = i15;
      i5 = i17;
     }
    }
   }
   if ((i13 | 0) == 0) {
    i11 = 10;
    break;
   }
   i5 = HEAP32[i13 + 4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i11 = 10;
    break;
   }
   __ZN7WebCore19RenderScrollbarPart6layoutEv(i5);
   i18 = HEAP32[i5 + 52 >> 2] | 0;
   i19 = HEAP32[i5 + 56 >> 2] | 0;
  }
 } while (0);
 do {
  if ((i11 | 0) == 10) {
   i13 = i1;
   if ((HEAP32[i1 + 44 >> 2] | 0) == 0) {
    __ZNK7WebCore6Widget9frameRectEv(i7, i13);
    i18 = HEAP32[i7 + 8 >> 2] | 0;
    i19 = 0;
    break;
   } else {
    __ZNK7WebCore6Widget9frameRectEv(i8, i13);
    i18 = 0;
    i19 = HEAP32[i8 + 12 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i9 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i9 + 8 >> 2] = i18;
 HEAP32[i9 + 12 >> 2] = i19;
 __ZN7WebCore9Scrollbar12setFrameRectERKNS_7IntRectE(i10, i9);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore15RenderScrollbarC1EPNS_14ScrollableAreaENS_20ScrollbarOrientationEPNS_7ElementEPNS_5FrameE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 32 | 0;
 i10 = i1;
 __ZN7WebCore9ScrollbarC2EPNS_14ScrollableAreaENS_20ScrollbarOrientationENS_20ScrollbarControlSizeEPNS_14ScrollbarThemeE(i10, i2, i3, 0, __ZN7WebCore20RenderScrollbarTheme20renderScrollbarThemeEv() | 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 36 >> 2] = H_BASE + 268;
 HEAP32[i1 + 172 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 176 >> 2] = i5;
 i5 = i1 + 180 | 0;
 _memset(i5 | 0, 0, 20) | 0;
 __ZN7WebCore15RenderScrollbar19updateScrollbarPartENS_13ScrollbarPartE(i1, 128);
 i3 = HEAP32[i1 + 188 >> 2] | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 L4 : do {
  if ((i4 | 0) == 0) {
   i11 = 10;
  } else {
   i5 = i3 & -139219434;
   i2 = i4 + (i5 << 3) | 0;
   i12 = HEAP32[i2 >> 2] | 0;
   if ((i12 | 0) == 128) {
    i13 = i2;
   } else {
    i2 = 0;
    i14 = i5;
    i5 = i12;
    while (1) {
     if ((i5 | 0) == 0) {
      i11 = 10;
      break L4;
     }
     i12 = (i2 | 0) == 0 ? -12059017 : i2;
     i15 = i12 + i14 & i3;
     i16 = i4 + (i15 << 3) | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     if ((i17 | 0) == 128) {
      i13 = i16;
      break;
     } else {
      i2 = i12;
      i14 = i15;
      i5 = i17;
     }
    }
   }
   if ((i13 | 0) == 0) {
    i11 = 10;
    break;
   }
   i5 = HEAP32[i13 + 4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i11 = 10;
    break;
   }
   __ZN7WebCore19RenderScrollbarPart6layoutEv(i5);
   i18 = HEAP32[i5 + 52 >> 2] | 0;
   i19 = HEAP32[i5 + 56 >> 2] | 0;
  }
 } while (0);
 do {
  if ((i11 | 0) == 10) {
   i13 = i1;
   if ((HEAP32[i1 + 44 >> 2] | 0) == 0) {
    __ZNK7WebCore6Widget9frameRectEv(i7, i13);
    i18 = HEAP32[i7 + 8 >> 2] | 0;
    i19 = 0;
    break;
   } else {
    __ZNK7WebCore6Widget9frameRectEv(i8, i13);
    i18 = 0;
    i19 = HEAP32[i8 + 12 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i9 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i9 + 8 >> 2] = i18;
 HEAP32[i9 + 12 >> 2] = i19;
 __ZN7WebCore9Scrollbar12setFrameRectERKNS_7IntRectE(i10, i9);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore15RenderScrollbar9paintPartEPNS_15GraphicsContextENS_13ScrollbarPartERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = HEAP32[i1 + 188 >> 2] | 0;
 i10 = HEAP32[i1 + 180 >> 2] | 0;
 i11 = ~(i3 << 15) + i3 | 0;
 i12 = (i11 >>> 10 ^ i11) * 9 & -1;
 i11 = i12 >>> 6 ^ i12;
 i12 = i11 + ~(i11 << 11) | 0;
 i11 = i12 >>> 16 ^ i12;
 if ((i10 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i12 = i9 & i11;
 i13 = i10 + (i12 << 3) | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 L4 : do {
  if ((i14 | 0) == (i3 | 0)) {
   i15 = i13;
  } else {
   i16 = (i11 >>> 23) + ~i11 | 0;
   i17 = i16 << 12 ^ i16;
   i16 = i17 >>> 7 ^ i17;
   i17 = i16 << 2 ^ i16;
   i16 = i17 >>> 20 ^ i17 | 1;
   i17 = 0;
   i18 = i12;
   i19 = i14;
   while (1) {
    if ((i19 | 0) == 0) {
     break;
    }
    i20 = (i17 | 0) == 0 ? i16 : i17;
    i21 = i20 + i18 & i9;
    i22 = i10 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    if ((i23 | 0) == (i3 | 0)) {
     i15 = i22;
     break L4;
    } else {
     i17 = i20;
     i18 = i21;
     i19 = i23;
    }
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 if ((i15 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i3 = HEAP32[i15 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i15 = i6 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i6, i1);
 i1 = HEAP32[i15 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i7 + 4 >> 2] = i1;
 i1 = i4;
 i15 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i8 + 4 >> 2] = i15;
 i15 = i4 + 8 | 0;
 i4 = HEAP32[i15 + 4 >> 2] | 0;
 HEAP32[i8 + 8 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i8 + 12 >> 2] = i4;
 __ZN7WebCore19RenderScrollbarPart13paintIntoRectEPNS_15GraphicsContextERKNS_11LayoutPointERKNS_10LayoutRectE(i3, i2, i7, i8);
 STACKTOP = i5;
 return;
}
function __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 + 76 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 100 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = i1 + 44 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = i1 + 12 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore17StyleSurroundDataD2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10BorderDataD2Ev(i1 + 100 | 0);
 if ((HEAP8[i1 + 97 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i1 + 81 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 76 | 0);
 }
 if ((HEAP8[i1 + 73 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i1 + 65 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 }
 if ((HEAP8[i1 + 9 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 4 | 0);
 return;
}
function __ZN7WebCore15RenderScrollbar18minimumThumbLengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = HEAP32[i1 + 188 >> 2] | 0;
 i3 = HEAP32[i1 + 180 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i2 & 1515010735;
 i6 = i3 + (i5 << 3) | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 L4 : do {
  if ((i7 | 0) == 8) {
   i8 = i6;
  } else {
   i9 = 0;
   i10 = i5;
   i11 = i7;
   while (1) {
    if ((i11 | 0) == 0) {
     i4 = 0;
     break;
    }
    i12 = (i9 | 0) == 0 ? -1413110379 : i9;
    i13 = i12 + i10 & i2;
    i14 = i3 + (i13 << 3) | 0;
    i15 = HEAP32[i14 >> 2] | 0;
    if ((i15 | 0) == 8) {
     i8 = i14;
     break L4;
    } else {
     i9 = i12;
     i10 = i13;
     i11 = i15;
    }
   }
   return i4 | 0;
  }
 } while (0);
 if ((i8 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i8 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 __ZN7WebCore19RenderScrollbarPart6layoutEv(i3);
 if ((HEAP32[i1 + 44 >> 2] | 0) == 0) {
  i4 = HEAP32[i3 + 52 >> 2] | 0;
  return i4 | 0;
 } else {
  i4 = HEAP32[i3 + 56 >> 2] | 0;
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore10BorderDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP8[i1 + 97 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i1 + 81 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 76 | 0);
 }
 if ((HEAP8[i1 + 73 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i1 + 65 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) != 10) {
  i2 = i1 + 32 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  i4 = i3 | 0;
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i4);
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3 | 0;
 __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i4);
 return;
}
function __ZN7WebCore15RenderScrollbarD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 36 >> 2] = H_BASE + 268;
 i2 = HEAP32[i1 + 180 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 184 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i4 << 3) >> 2] | 0) != -1) {
      i5 = HEAP32[i2 + (i4 << 3) + 4 >> 2] | 0;
      if ((i5 | 0) == 0) {
       break;
      }
      __ZN7WebCore12RenderObject7destroyEv(i5 | 0);
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 172 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1;
  __ZN7WebCore9ScrollbarD2Ev(i6);
  return;
 }
 i3 = i2 + 8 | 0;
 i2 = i3 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  i6 = i1;
  __ZN7WebCore9ScrollbarD2Ev(i6);
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i6 = i1;
  __ZN7WebCore9ScrollbarD2Ev(i6);
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i6 = i1;
 __ZN7WebCore9ScrollbarD2Ev(i6);
 return;
}
function __ZN7WebCore15RenderScrollbarD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 36 >> 2] = H_BASE + 268;
 i2 = HEAP32[i1 + 180 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 184 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i4 << 3) >> 2] | 0) != -1) {
      i5 = HEAP32[i2 + (i4 << 3) + 4 >> 2] | 0;
      if ((i5 | 0) == 0) {
       break;
      }
      __ZN7WebCore12RenderObject7destroyEv(i5 | 0);
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 172 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1;
  __ZN7WebCore9ScrollbarD2Ev(i6);
  return;
 }
 i3 = i2 + 8 | 0;
 i2 = i3 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  i6 = i1;
  __ZN7WebCore9ScrollbarD2Ev(i6);
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i6 = i1;
  __ZN7WebCore9ScrollbarD2Ev(i6);
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i6 = i1;
 __ZN7WebCore9ScrollbarD2Ev(i6);
 return;
}
function __ZN7WebCore15RenderScrollbar7opacityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, d4 = +0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = HEAP32[i1 + 188 >> 2] | 0;
 i3 = HEAP32[i1 + 180 >> 2] | 0;
 if ((i3 | 0) == 0) {
  d4 = +1;
  return +d4;
 }
 i1 = i2 & -139219434;
 i5 = i3 + (i1 << 3) | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 L4 : do {
  if ((i6 | 0) == 128) {
   i7 = i5;
  } else {
   i8 = 0;
   i9 = i1;
   i10 = i6;
   while (1) {
    if ((i10 | 0) == 0) {
     d4 = +1;
     break;
    }
    i11 = (i8 | 0) == 0 ? -12059017 : i8;
    i12 = i11 + i9 & i2;
    i13 = i3 + (i12 << 3) | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    if ((i14 | 0) == 128) {
     i7 = i13;
     break L4;
    } else {
     i8 = i11;
     i9 = i12;
     i10 = i14;
    }
   }
   return +d4;
  }
 } while (0);
 if ((i7 | 0) == 0) {
  d4 = +1;
  return +d4;
 }
 i3 = HEAP32[i7 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  d4 = +1;
  return +d4;
 }
 d4 = +HEAPF32[(HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 20 >> 2] | 0) + 4 >> 2];
 return +d4;
}
function __ZN7WebCore12StyleBoxDataD2Ev(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 }
 if ((HEAP8[i1 + 9 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 4 | 0);
 return;
}
function __ZN7WebCore15RenderScrollbar9setParentEPNS_10ScrollViewE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 __ZN7WebCore9Scrollbar9setParentEPNS_10ScrollViewE(i1, i2);
 if ((i2 | 0) != 0) {
  return;
 }
 i2 = i1 + 180 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 184 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i3 + (i1 << 3) >> 2] | 0) != -1) {
     i5 = HEAP32[i3 + (i1 << 3) + 4 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     __ZN7WebCore12RenderObject7destroyEv(i5 | 0);
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i3);
 _memset(i2 | 0, 0, 16) | 0;
 return;
}
function __ZNK7WebCore15RenderScrollbar14owningRendererEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 176 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = __ZNK7WebCore5Frame13ownerRendererEv(i2) | 0;
  return i3 | 0;
 }
 i2 = HEAP32[i1 + 172 >> 2] | 0;
 i1 = (HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0;
 i4 = i2 + 32 | 0;
 if (i1) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if (i1) {
  i6 = i4 | 0;
 } else {
  i6 = HEAP32[i4 >> 2] | 0;
 }
 i3 = __ZNK7WebCore12RenderObject12enclosingBoxEv(HEAP32[i6 >> 2] | 0) | 0;
 return i3 | 0;
}
function __ZThn36_N7WebCore9Scrollbar10invalidateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i1 - 176 + 140 | 0;
 i1 = i6;
 i7 = HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0;
 __ZNK7WebCore6Widget9frameRectEv(i4, i1);
 i6 = HEAP32[i4 + 8 >> 2] | 0;
 __ZNK7WebCore6Widget9frameRectEv(i3, i1);
 i4 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 HEAP32[i5 + 8 >> 2] = i6;
 HEAP32[i5 + 12 >> 2] = i4;
 FUNCTION_TABLE_vii[i7 & 63](i1, i5);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore9Scrollbar10invalidateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] | 0;
 __ZNK7WebCore6Widget9frameRectEv(i4, i6);
 i1 = HEAP32[i4 + 8 >> 2] | 0;
 __ZNK7WebCore6Widget9frameRectEv(i3, i6);
 i4 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 HEAP32[i5 + 8 >> 2] = i1;
 HEAP32[i5 + 12 >> 2] = i4;
 FUNCTION_TABLE_vii[i7 & 63](i6, i5);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15RenderScrollbar14setHoveredPartENS_13ScrollbarPartE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 84 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  return;
 }
 HEAP32[i3 >> 2] = i2;
 __ZN7WebCore15RenderScrollbar19updateScrollbarPartENS_13ScrollbarPartE(i1, i4);
 __ZN7WebCore15RenderScrollbar19updateScrollbarPartENS_13ScrollbarPartE(i1, HEAP32[i3 >> 2] | 0);
 __ZN7WebCore15RenderScrollbar19updateScrollbarPartENS_13ScrollbarPartE(i1, 128);
 __ZN7WebCore15RenderScrollbar19updateScrollbarPartENS_13ScrollbarPartE(i1, 256);
 return;
}
function __ZN7WebCore15RenderScrollbar14setPressedPartENS_13ScrollbarPartE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 88 >> 2] | 0;
 __ZN7WebCore9Scrollbar14setPressedPartENS_13ScrollbarPartE(i1, i2);
 __ZN7WebCore15RenderScrollbar19updateScrollbarPartENS_13ScrollbarPartE(i1, i3);
 __ZN7WebCore15RenderScrollbar19updateScrollbarPartENS_13ScrollbarPartE(i1, i2);
 __ZN7WebCore15RenderScrollbar19updateScrollbarPartENS_13ScrollbarPartE(i1, 128);
 __ZN7WebCore15RenderScrollbar19updateScrollbarPartENS_13ScrollbarPartE(i1, 256);
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
function __ZN7WebCore15RenderScrollbar21createCustomScrollbarEPNS_14ScrollableAreaENS_20ScrollbarOrientationEPNS_7ElementEPNS_5FrameE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 i6 = __ZN3WTF10fastMallocEj(200) | 0;
 __ZN7WebCore15RenderScrollbarC2EPNS_14ScrollableAreaENS_20ScrollbarOrientationEPNS_7ElementEPNS_5FrameE(i6, i2, i3, i4, i5);
 HEAP32[i1 >> 2] = i6;
 return;
}
function __ZN7WebCore15RenderScrollbar5paintEPNS_15GraphicsContextERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if (__ZNK7WebCore15GraphicsContext20updatingControlTintsEv(i2) | 0) {
  __ZN7WebCore15RenderScrollbar20updateScrollbarPartsEv(i1);
  return;
 } else {
  __ZN7WebCore9Scrollbar5paintEPNS_15GraphicsContextERKNS_7IntRectE(i1, i2, i3);
  return;
 }
}
function __ZThn36_NK7WebCore9Scrollbar8locationEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i4, i2 - 176 + 140 | 0);
 i2 = i1;
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function __ZThn36_NK7WebCore9Scrollbar4sizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i4, i2 - 176 + 140 | 0);
 i2 = i4 + 8 | 0;
 i4 = i1;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i4 + 4 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9Scrollbar8locationEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i4, i2 | 0);
 i2 = i1;
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9Scrollbar4sizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i4, i2 | 0);
 i2 = i4 + 8 | 0;
 i4 = i1;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i4 + 4 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function __ZThn36_N7WebCore15RenderScrollbar10setEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 - 36 | 0;
 i4 = (HEAP8[i1 + 72 | 0] & 1) != 0;
 __ZN7WebCore9Scrollbar10setEnabledEb(i3, i2);
 if (!(i4 ^ i2)) {
  return;
 }
 __ZN7WebCore15RenderScrollbar20updateScrollbarPartsEv(i3);
 return;
}
function __ZN7WebCore15RenderScrollbar10setEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP8[i1 + 108 | 0] & 1) != 0;
 __ZN7WebCore9Scrollbar10setEnabledEb(i1, i2);
 if (!(i3 ^ i2)) {
  return;
 }
 __ZN7WebCore15RenderScrollbar20updateScrollbarPartsEv(i1);
 return;
}
function __ZThn36_NK7WebCore9Scrollbar6heightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i3, i1 - 176 + 140 | 0);
 STACKTOP = i2;
 return HEAP32[i3 + 12 >> 2] | 0;
}
function __ZThn36_NK7WebCore9Scrollbar5widthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i3, i1 - 176 + 140 | 0);
 STACKTOP = i2;
 return HEAP32[i3 + 8 >> 2] | 0;
}
function __ZThn36_NK7WebCore9Scrollbar1yEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i3, i1 - 176 + 140 | 0);
 STACKTOP = i2;
 return HEAP32[i3 + 4 >> 2] | 0;
}
function __ZThn36_NK7WebCore9Scrollbar1xEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i3, i1 - 176 + 140 | 0);
 STACKTOP = i2;
 return HEAP32[i3 >> 2] | 0;
}
function __ZThn36_N7WebCore9Scrollbar27convertFromContainingWindowERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore6Widget27convertFromContainingWindowERKNS_8IntPointE(i1, i2 - 176 + 140 | 0, i3);
 return;
}
function __ZNK7WebCore9Scrollbar6heightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i3, i1 | 0);
 STACKTOP = i2;
 return HEAP32[i3 + 12 >> 2] | 0;
}
function viii___ZNK7WebCore9Scrollbar25convertFromContainingViewERKNS_8IntPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9Scrollbar25convertFromContainingViewERKNS_8IntPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore9Scrollbar5widthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i3, i1 | 0);
 STACKTOP = i2;
 return HEAP32[i3 + 8 >> 2] | 0;
}
function viii___ZNK7WebCore9Scrollbar25convertFromContainingViewERKNS_7IntRectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9Scrollbar25convertFromContainingViewERKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore9Scrollbar23convertToContainingViewERKNS_8IntPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9Scrollbar23convertToContainingViewERKNS_8IntPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore9Scrollbar1yEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i3, i1 | 0);
 STACKTOP = i2;
 return HEAP32[i3 + 4 >> 2] | 0;
}
function viii___ZNK7WebCore9Scrollbar23convertToContainingViewERKNS_7IntRectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9Scrollbar23convertToContainingViewERKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore9Scrollbar1xEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i3, i1 | 0);
 STACKTOP = i2;
 return HEAP32[i3 >> 2] | 0;
}
function __ZN7WebCore9Scrollbar27convertFromContainingWindowERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore6Widget27convertFromContainingWindowERKNS_8IntPointE(i1, i2 | 0, i3);
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
function vii___ZThn36_N7WebCore9Scrollbar14invalidateRectERKNS_7IntRectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn36_N7WebCore9Scrollbar14invalidateRectERKNS_7IntRectE(i1 | 0, i2 | 0);
}
function vii___ZThn36_N7WebCore9Scrollbar12setFrameRectERKNS_7IntRectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn36_N7WebCore9Scrollbar12setFrameRectERKNS_7IntRectE(i1 | 0, i2 | 0);
}
function ii___ZThn36_NK7WebCore9Scrollbar31supportsUpdateOnSecondaryThreadEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZThn36_NK7WebCore9Scrollbar31supportsUpdateOnSecondaryThreadEv(i1 | 0) | 0;
}
function vii___ZN7WebCore9Scrollbar14invalidateRectERKNS_7IntRectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9Scrollbar14invalidateRectERKNS_7IntRectE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore9Scrollbar12setFrameRectERKNS_7IntRectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9Scrollbar12setFrameRectERKNS_7IntRectE(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore9Scrollbar31supportsUpdateOnSecondaryThreadEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9Scrollbar31supportsUpdateOnSecondaryThreadEv(i1 | 0) | 0;
}
function __ZThn36_N7WebCore15RenderScrollbarD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 36 | 0;
 __ZN7WebCore15RenderScrollbarD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function ii___ZThn36_NK7WebCore9Scrollbar22isScrollableAreaActiveEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZThn36_NK7WebCore9Scrollbar22isScrollableAreaActiveEv(i1 | 0) | 0;
}
function ii___ZThn36_NK7WebCore9Scrollbar21scrollbarOverlayStyleEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZThn36_NK7WebCore9Scrollbar21scrollbarOverlayStyleEv(i1 | 0) | 0;
}
function ii___ZThn36_NK7WebCore9Scrollbar21isScrollViewScrollbarEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZThn36_NK7WebCore9Scrollbar21isScrollViewScrollbarEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9Scrollbar22isScrollableAreaActiveEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9Scrollbar22isScrollableAreaActiveEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9Scrollbar21scrollbarOverlayStyleEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9Scrollbar21scrollbarOverlayStyleEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9Scrollbar21isScrollViewScrollbarEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9Scrollbar21isScrollViewScrollbarEv(i1 | 0) | 0;
}
function __ZThn36_N7WebCore15RenderScrollbar12styleChangedEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15RenderScrollbar20updateScrollbarPartsEv(i1 - 36 | 0);
 return;
}
function __ZThn36_NK7WebCore9Scrollbar9frameRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i1, i2 - 176 + 140 | 0);
 return;
}
function __ZThn36_NK7WebCore9Scrollbar7maximumEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 - 176 + 200 >> 2] | 0) - (HEAP32[i1 - 176 + 196 >> 2] | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function vi___ZN7WebCore9Scrollbar21updateThumbProportionEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9Scrollbar21updateThumbProportionEv(i1 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore15RenderScrollbar12styleChangedEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15RenderScrollbar20updateScrollbarPartsEv(i1);
 return;
}
function vi___ZN7WebCore9Scrollbar19updateThumbPositionEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9Scrollbar19updateThumbPositionEv(i1 | 0);
}
function __ZN7WebCore15RenderScrollbarD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15RenderScrollbarD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function __ZThn36_N7WebCore9Scrollbar16setIsAlphaLockedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 - 176 + 310 | 0] = i2 & 1;
 return;
}
function vii___ZN7WebCore6Widget8setFocusEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore6Widget8setFocusEb(i1 | 0, i2 | 0);
}
function __ZNK7WebCore9Scrollbar9frameRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i1, i2 | 0);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore9Scrollbar7maximumEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 60 >> 2] | 0) - (HEAP32[i1 + 56 >> 2] | 0) | 0;
}
function __ZN7WebCore9Scrollbar16setIsAlphaLockedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 170 | 0] = i2 & 1;
 return;
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
function __ZThn36_NK7WebCore9Scrollbar4rootEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore6Widget4rootEv(i1 - 176 + 140 | 0) | 0;
}
function __ZThn36_N7WebCore15RenderScrollbarD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15RenderScrollbarD2Ev(i1 - 36 | 0);
 return;
}
function __ZThn36_NK7WebCore9Scrollbar13isAlphaLockedEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 - 176 + 310 | 0] & 1) != 0 | 0;
}
function __ZN7WebCore6Widget16setParentVisibleEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 17 | 0] = i2 & 1;
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
 FUNCTION_TABLE_vii[i1 & 63](i2 | 0, i3 | 0);
}
function __ZThn36_NK7WebCore9Scrollbar5valueEv(i1) {
 i1 = i1 | 0;
 return _round(+(+HEAPF32[i1 - 176 + 204 >> 2])) | 0;
}
function __ZThn36_NK7WebCore9Scrollbar7enabledEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 - 176 + 248 | 0] & 1) != 0 | 0;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZThn36_NK7WebCore9Scrollbar11visibleSizeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 176 + 196 >> 2] | 0;
}
function __ZThn36_NK7WebCore9Scrollbar11pressedPartEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 176 + 228 >> 2] | 0;
}
function __ZThn36_NK7WebCore9Scrollbar11orientationEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 176 + 184 >> 2] | 0;
}
function __ZThn36_NK7WebCore9Scrollbar11hoveredPartEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 176 + 224 >> 2] | 0;
}
function __ZThn36_NK7WebCore9Scrollbar11controlSizeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 176 + 188 >> 2] | 0;
}
function __ZThn36_NK7WebCore9Scrollbar10currentPosEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[i1 - 176 + 204 >> 2]);
}
function __ZN7WebCore6Widget12notifyWidgetENS_18WidgetNotificationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore9Scrollbar13isAlphaLockedEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 170 | 0] & 1) != 0 | 0;
}
function __ZThn36_NK7WebCore9Scrollbar9totalSizeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 176 + 200 >> 2] | 0;
}
function __ZThn36_NK7WebCore9Scrollbar8pageStepEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 176 + 216 >> 2] | 0;
}
function __ZThn36_NK7WebCore9Scrollbar8lineStepEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 176 + 212 >> 2] | 0;
}
function __ZThn36_NK7WebCore9Scrollbar6parentEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 176 + 148 >> 2] | 0;
}
function __ZNK7WebCore9Scrollbar4rootEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore6Widget4rootEv(i1 | 0) | 0;
}
function __ZNK7WebCore9Scrollbar5valueEv(i1) {
 i1 = i1 | 0;
 return _round(+(+HEAPF32[i1 + 64 >> 2])) | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 127](i2 | 0) | 0;
}
function __ZNK7WebCore9Scrollbar7enabledEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 108 | 0] & 1) != 0 | 0;
}
function vi___ZN7WebCore6Widget4showEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore6Widget4showEv(i1 | 0);
}
function vi___ZN7WebCore6Widget4hideEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore6Widget4hideEv(i1 | 0);
}
function dynCall_fi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_fi[i1 & 7](i2 | 0);
}
function __ZNK7WebCore9Scrollbar11visibleSizeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 56 >> 2] | 0;
}
function __ZNK7WebCore9Scrollbar11pressedPartEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 88 >> 2] | 0;
}
function __ZNK7WebCore9Scrollbar11orientationEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 44 >> 2] | 0;
}
function __ZNK7WebCore9Scrollbar11hoveredPartEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 84 >> 2] | 0;
}
function __ZNK7WebCore9Scrollbar11controlSizeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 48 >> 2] | 0;
}
function __ZNK7WebCore9Scrollbar10currentPosEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[i1 + 64 >> 2]);
}
function __ZN7WebCore6Widget11handleEventEPNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZThn36_NK7WebCore15RenderScrollbar18isOverlayScrollbarEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9Scrollbar9totalSizeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 60 >> 2] | 0;
}
function __ZThn36_NK7WebCore15RenderScrollbar17isCustomScrollbarEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore9Scrollbar8pageStepEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 76 >> 2] | 0;
}
function __ZNK7WebCore9Scrollbar8lineStepEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 72 >> 2] | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore9Scrollbar6parentEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 8 >> 2] | 0;
}
function __ZNK7WebCore15RenderScrollbar18isOverlayScrollbarEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore15RenderScrollbar17isCustomScrollbarEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore6Widget25transformsAffectFrameRectEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore6Widget16isPluginViewBaseEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function __ZNK7WebCore9Scrollbar11isScrollbarEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore6Widget17frameRectsChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore6Widget12isScrollViewEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore6Widget12isPluginViewEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore6Widget15clipRectChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore6Widget11isFrameViewEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
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
function b6(i1) {
 i1 = i1 | 0;
 abort(6);
 return +0;
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore15RenderScrollbarC2EPNS_14ScrollableAreaENS_20ScrollbarOrientationEPNS_7ElementEPNS_5FrameE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,vi___ZN7WebCore9Scrollbar19updateThumbPositionEv__wrapper,b1,vi___ZN7WebCore6Widget4showEv__wrapper,b1,__ZThn36_N7WebCore9Scrollbar10invalidateEv,b1,vi___ZN7WebCore6Widget4hideEv__wrapper,b1,__ZN7WebCore15RenderScrollbar12styleChangedEv,b1,__ZThn36_N7WebCore15RenderScrollbar12styleChangedEv,b1,__ZN7WebCore15RenderScrollbarD2Ev,b1,vi___ZN7WebCore9Scrollbar21updateThumbProportionEv__wrapper,b1,__ZN7WebCore9Scrollbar10invalidateEv,b1,__ZN7WebCore6Widget15clipRectChangedEv,b1,__ZThn36_N7WebCore15RenderScrollbarD1Ev,b1,__ZN7WebCore15RenderScrollbarD0Ev,b1,__ZN7WebCore6Widget17frameRectsChangedEv,b1,__ZThn36_N7WebCore15RenderScrollbarD0Ev
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZThn36_NK7WebCore9Scrollbar4sizeEv,b2,__ZN7WebCore6Widget16setParentVisibleEb,b2,vii___ZN7WebCore9Scrollbar14invalidateRectERKNS_7IntRectE__wrapper,b2,__ZN7WebCore9Scrollbar16setIsAlphaLockedEb,b2,__ZNK7WebCore9Scrollbar4sizeEv,b2,__ZN7WebCore15RenderScrollbar9setParentEPNS_10ScrollViewE,b2,__ZN7WebCore15RenderScrollbar14setHoveredPartENS_13ScrollbarPartE,b2,__ZNK7WebCore9Scrollbar9frameRectEv,b2,__ZThn36_NK7WebCore9Scrollbar9frameRectEv,b2,__ZThn36_N7WebCore9Scrollbar16setIsAlphaLockedEb,b2,vii___ZN7WebCore9Scrollbar12setFrameRectERKNS_7IntRectE__wrapper,b2,__ZNK7WebCore9Scrollbar8locationEv,b2,vii___ZN7WebCore6Widget8setFocusEb__wrapper,b2,__ZN7WebCore6Widget12notifyWidgetENS_18WidgetNotificationE
  ,b2,__ZThn36_N7WebCore15RenderScrollbar10setEnabledEb,b2,__ZN7WebCore15RenderScrollbar14setPressedPartENS_13ScrollbarPartE,b2,__ZThn36_NK7WebCore9Scrollbar8locationEv,b2,vii___ZThn36_N7WebCore9Scrollbar12setFrameRectERKNS_7IntRectE__wrapper,b2,vii___ZThn36_N7WebCore9Scrollbar14invalidateRectERKNS_7IntRectE__wrapper,b2,__ZN7WebCore15RenderScrollbar10setEnabledEb,b2,__ZN7WebCore6Widget11handleEventEPNS_5EventE,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore6Widget12isPluginViewEv,b3,__ZThn36_NK7WebCore9Scrollbar9totalSizeEv,b3,__ZNK7WebCore9Scrollbar6heightEv,b3,__ZNK7WebCore9Scrollbar8lineStepEv,b3,__ZNK7WebCore15RenderScrollbar18isOverlayScrollbarEv,b3,__ZThn36_NK7WebCore9Scrollbar6heightEv,b3,ii___ZNK7WebCore9Scrollbar22isScrollableAreaActiveEv__wrapper,b3,__ZNK7WebCore9Scrollbar13isAlphaLockedEv,b3,__ZNK7WebCore9Scrollbar11pressedPartEv,b3,__ZThn36_NK7WebCore9Scrollbar4rootEv,b3,__ZNK7WebCore9Scrollbar5valueEv,b3,__ZThn36_NK7WebCore9Scrollbar5widthEv,b3,ii___ZThn36_NK7WebCore9Scrollbar31supportsUpdateOnSecondaryThreadEv__wrapper,b3,__ZThn36_NK7WebCore9Scrollbar8lineStepEv
  ,b3,__ZThn36_NK7WebCore9Scrollbar13isAlphaLockedEv,b3,__ZThn36_NK7WebCore9Scrollbar1xEv,b3,__ZThn36_NK7WebCore9Scrollbar11visibleSizeEv,b3,__ZThn36_NK7WebCore9Scrollbar6parentEv,b3,__ZNK7WebCore9Scrollbar4rootEv,b3,ii___ZThn36_NK7WebCore9Scrollbar21isScrollViewScrollbarEv__wrapper,b3,__ZNK7WebCore6Widget16isPluginViewBaseEv,b3,__ZNK7WebCore9Scrollbar6parentEv,b3,ii___ZThn36_NK7WebCore9Scrollbar22isScrollableAreaActiveEv__wrapper,b3,__ZNK7WebCore9Scrollbar8pageStepEv,b3,__ZThn36_NK7WebCore9Scrollbar11pressedPartEv,b3,__ZNK7WebCore9Scrollbar5widthEv,b3,__ZThn36_NK7WebCore9Scrollbar11hoveredPartEv,b3,__ZN7WebCore6Widget25transformsAffectFrameRectEv,b3,__ZThn36_NK7WebCore9Scrollbar1yEv
  ,b3,__ZNK7WebCore6Widget11isFrameViewEv,b3,__ZThn36_NK7WebCore15RenderScrollbar18isOverlayScrollbarEv,b3,__ZNK7WebCore9Scrollbar11orientationEv,b3,__ZThn36_NK7WebCore9Scrollbar7enabledEv,b3,ii___ZThn36_NK7WebCore9Scrollbar21scrollbarOverlayStyleEv__wrapper,b3,__ZNK7WebCore9Scrollbar9totalSizeEv,b3,ii___ZNK7WebCore9Scrollbar21scrollbarOverlayStyleEv__wrapper,b3,__ZNK7WebCore9Scrollbar7enabledEv,b3,__ZThn36_NK7WebCore9Scrollbar11controlSizeEv,b3,__ZNK7WebCore9Scrollbar1xEv,b3,__ZNK7WebCore9Scrollbar11visibleSizeEv,b3,__ZNK7WebCore9Scrollbar11isScrollbarEv,b3,__ZThn36_NK7WebCore9Scrollbar11orientationEv,b3,__ZThn36_NK7WebCore9Scrollbar5valueEv,b3,__ZThn36_NK7WebCore9Scrollbar7maximumEv
  ,b3,ii___ZNK7WebCore9Scrollbar21isScrollViewScrollbarEv__wrapper,b3,__ZNK7WebCore9Scrollbar11hoveredPartEv,b3,ii___ZNK7WebCore9Scrollbar31supportsUpdateOnSecondaryThreadEv__wrapper,b3,__ZNK7WebCore15RenderScrollbar17isCustomScrollbarEv,b3,__ZNK7WebCore9Scrollbar11controlSizeEv,b3,__ZNK7WebCore9Scrollbar7maximumEv,b3,__ZThn36_NK7WebCore15RenderScrollbar17isCustomScrollbarEv,b3,__ZNK7WebCore9Scrollbar1yEv,b3,__ZNK7WebCore6Widget12isScrollViewEv,b3,__ZThn36_NK7WebCore9Scrollbar8pageStepEv,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,viii___ZNK7WebCore9Scrollbar23convertToContainingViewERKNS_8IntPointE__wrapper,b4,__ZN7WebCore15RenderScrollbar5paintEPNS_15GraphicsContextERKNS_7IntRectE,b4,viii___ZNK7WebCore9Scrollbar25convertFromContainingViewERKNS_7IntRectE__wrapper,b4,__ZThn36_N7WebCore9Scrollbar27convertFromContainingWindowERKNS_8IntPointE,b4,__ZN7WebCore9Scrollbar27convertFromContainingWindowERKNS_8IntPointE,b4,viii___ZNK7WebCore9Scrollbar25convertFromContainingViewERKNS_8IntPointE__wrapper,b4,viii___ZNK7WebCore9Scrollbar23convertToContainingViewERKNS_7IntRectE__wrapper,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_fi = [b6,b6,__ZThn36_NK7WebCore9Scrollbar10currentPosEv,b6,__ZNK7WebCore9Scrollbar10currentPosEv,b6,b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_fi: dynCall_fi, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_fi": invoke_fi, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
var dynCall_fi = Module["dynCall_fi"] = asm["dynCall_fi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZThn36_NK7WebCore9Scrollbar4sizeEv","__ZNK7WebCore6Widget12isPluginViewEv","_strlen","__ZN7WebCore6Widget16setParentVisibleEb","__ZThn36_NK7WebCore9Scrollbar9totalSizeEv","__ZNK7WebCore9Scrollbar6heightEv","__ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore9RenderPtrINS2_19RenderScrollbarPartEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_","__ZNK7WebCore15RenderScrollbar18isOverlayScrollbarEv","_memcpy","__ZThn36_NK7WebCore9Scrollbar6heightEv","__ZNK7WebCore9Scrollbar13isAlphaLockedEv","__ZNK7WebCore9Scrollbar11pressedPartEv","__ZThn36_NK7WebCore9Scrollbar4rootEv","__ZThn36_NK7WebCore9Scrollbar10currentPosEv","__ZThn36_NK7WebCore9Scrollbar8locationEv","__ZNK7WebCore9Scrollbar5valueEv","__ZN7WebCore15RenderScrollbar9paintPartEPNS_15GraphicsContextENS_13ScrollbarPartERKNS_7IntRectE","__ZThn36_NK7WebCore9Scrollbar5widthEv","__ZNK7WebCore9Scrollbar8lineStepEv","__ZN7WebCore10BorderDataD2Ev","__ZThn36_NK7WebCore9Scrollbar8lineStepEv","__ZN7WebCore9Scrollbar16setIsAlphaLockedEb","__ZThn36_NK7WebCore9Scrollbar13isAlphaLockedEv","__ZThn36_NK7WebCore9Scrollbar1xEv","__ZNK7WebCore9Scrollbar4sizeEv","__ZThn36_NK7WebCore9Scrollbar11visibleSizeEv","__ZN7WebCore17StyleSurroundDataD2Ev","__ZThn36_N7WebCore9Scrollbar10invalidateEv","__ZN7WebCore15RenderScrollbarC2EPNS_14ScrollableAreaENS_20ScrollbarOrientationEPNS_7ElementEPNS_5FrameE","__ZNK7WebCore9Scrollbar4rootEv","__ZN7WebCore15RenderScrollbar21createCustomScrollbarEPNS_14ScrollableAreaENS_20ScrollbarOrientationEPNS_7ElementEPNS_5FrameE","__ZN7WebCore15RenderScrollbar9setParentEPNS_10ScrollViewE","__ZNK7WebCore6Widget16isPluginViewBaseEv","__ZN7WebCore15RenderScrollbar20updateScrollbarPartsEv","__ZNK7WebCore9Scrollbar6parentEv","__ZN7WebCore15RenderScrollbar12styleChangedEv","__ZThn36_N7WebCore15RenderScrollbar12styleChangedEv","__ZN7WebCore15RenderScrollbar5paintEPNS_15GraphicsContextERKNS_7IntRectE","__ZN7WebCore15RenderScrollbarD2Ev","__ZN7WebCore15RenderScrollbar14setHoveredPartENS_13ScrollbarPartE","__ZNK7WebCore9Scrollbar8pageStepEv","__ZThn36_NK7WebCore9Scrollbar11pressedPartEv","__ZN7WebCore12StyleBoxDataD2Ev","__ZNK7WebCore9Scrollbar5widthEv","__ZNK7WebCore9Scrollbar9frameRectEv","__ZN7WebCore11RenderStyleD2Ev","__ZThn36_NK7WebCore9Scrollbar9frameRectEv","__ZThn36_N7WebCore9Scrollbar27convertFromContainingWindowERKNS_8IntPointE","__ZN7WebCore15RenderScrollbar25trackPieceRectWithMarginsENS_13ScrollbarPartERKNS_7IntRectE","__ZThn36_NK7WebCore9Scrollbar11hoveredPartEv","__ZN7WebCore6Widget25transformsAffectFrameRectEv","__ZThn36_NK7WebCore9Scrollbar1yEv","__ZThn36_NK7WebCore9Scrollbar6parentEv","__ZNK7WebCore6Widget11isFrameViewEv","__ZThn36_N7WebCore9Scrollbar16setIsAlphaLockedEb","__ZNK7WebCore9Scrollbar8locationEv","__ZThn36_NK7WebCore15RenderScrollbar18isOverlayScrollbarEv","__ZNK7WebCore9Scrollbar11orientationEv","__ZThn36_NK7WebCore9Scrollbar7enabledEv","__ZN7WebCore15RenderScrollbar7opacityEv","_memset","__ZN7WebCore15RenderScrollbar19updateScrollbarPartENS_13ScrollbarPartE","__ZN7WebCore6Widget12notifyWidgetENS_18WidgetNotificationE","__ZN7WebCore15RenderScrollbar9trackRectEii","__ZNK7WebCore9Scrollbar9totalSizeEv","__ZN7WebCore9Scrollbar27convertFromContainingWindowERKNS_8IntPointE","__ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv","__ZN7WebCore15RenderScrollbar18minimumThumbLengthEv","__ZNK7WebCore9Scrollbar7enabledEv","__ZThn36_N7WebCore15RenderScrollbar10setEnabledEb","__ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore9RenderPtrINS2_19RenderScrollbarPartEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EEjDnEENS_18HashTableAddResultINS_17HashTableIteratorIjS6_S8_SA_SG_SD_EEEEOT0_OT1_","__ZThn36_NK7WebCore9Scrollbar11controlSizeEv","__ZN7WebCore9Scrollbar10invalidateEv","__ZNK7WebCore9Scrollbar1xEv","__ZNK7WebCore9Scrollbar11visibleSizeEv","__ZN7WebCore6Widget15clipRectChangedEv","__ZNK7WebCore9Scrollbar11isScrollbarEv","__ZThn36_NK7WebCore9Scrollbar11orientationEv","__ZThn36_N7WebCore15RenderScrollbarD1Ev","__ZN7WebCore15RenderScrollbarD0Ev","__ZThn36_NK7WebCore9Scrollbar5valueEv","__ZN7WebCore15RenderScrollbar14setPressedPartENS_13ScrollbarPartE","__ZThn36_NK7WebCore9Scrollbar7maximumEv","__ZNK7WebCore9Scrollbar11hoveredPartEv","__ZN7WebCore15RenderScrollbar23getScrollbarPseudoStyleENS_13ScrollbarPartENS_8PseudoIdE","__ZNK7WebCore15RenderScrollbar14owningRendererEv","__ZNK7WebCore15RenderScrollbar17isCustomScrollbarEv","__ZNK7WebCore9Scrollbar10currentPosEv","__ZNK7WebCore9Scrollbar11controlSizeEv","__ZNK7WebCore9Scrollbar7maximumEv","__ZN7WebCore15RenderScrollbar10setEnabledEb","__ZN7WebCore6Widget17frameRectsChangedEv","__ZThn36_NK7WebCore15RenderScrollbar17isCustomScrollbarEv","__ZNK7WebCore9Scrollbar1yEv","__ZNK7WebCore6Widget12isScrollViewEv","__ZThn36_N7WebCore15RenderScrollbarD0Ev","__ZThn36_NK7WebCore9Scrollbar8pageStepEv","__ZN7WebCore15RenderScrollbar10buttonRectENS_13ScrollbarPartE","__ZN7WebCore6Widget11handleEventEPNS_5EventE"]

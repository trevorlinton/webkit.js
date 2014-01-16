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
H_BASE = parentModule["_malloc"](32 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 32;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore13WidthIteratorC1EPKNS_4FontERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS7_7PtrHashISB_EENS7_10HashTraitsISB_EEEEbb;
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
;
;
;
;
;
;
var Math_min = Math.min;
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
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
function invoke_fiif(index,a1,a2,a3) {
  try {
    return Module["dynCall_fiif"](index,a1,a2,a3);
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
function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  try {
    Module["dynCall_viiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
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
  var __ZN7WebCore4Font28s_roundingHackCharacterTableE=env.__ZN7WebCore4Font28s_roundingHackCharacterTableE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZZN7WebCore13WidthIterator15advanceInternalINS_18Latin1TextIteratorEEEjRT_PNS_11GlyphBufferEE22expandAroundIdeographs=(H_BASE+16)|0;
  var __ZZN7WebCore13WidthIterator15advanceInternalINS_30SurrogatePairAwareTextIteratorEEEjRT_PNS_11GlyphBufferEE22expandAroundIdeographs=(H_BASE+8)|0;
  var __ZGVZN7WebCore13WidthIterator15advanceInternalINS_18Latin1TextIteratorEEEjRT_PNS_11GlyphBufferEE22expandAroundIdeographs=(H_BASE+32)|0;
  var __ZGVZN7WebCore13WidthIterator15advanceInternalINS_30SurrogatePairAwareTextIteratorEEEjRT_PNS_11GlyphBufferEE22expandAroundIdeographs=(H_BASE+24)|0;
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
  var invoke_ii=env.invoke_ii;
  var invoke_vi=env.invoke_vi;
  var invoke_fiif=env.invoke_fiif;
  var invoke_v=env.invoke_v;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiiiiiii=env.invoke_viiiiiiii;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var _floorf=env._floorf;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _malloc=env._malloc;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fmod=env._fmod;
  var _fflush=env._fflush;
  var _round=env._round;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore13WidthIterator15advanceInternalINS_30SurrogatePairAwareTextIteratorEEEjRT_PNS_11GlyphBufferE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, d31 = +0, d32 = +0, d33 = +0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, d82 = +0, d83 = +0, d84 = +0, i85 = 0, d86 = +0, d87 = +0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, d95 = +0, d96 = +0, i97 = 0, i98 = 0, i99 = 0, d100 = +0, i101 = 0, d102 = +0, d103 = +0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, d108 = +0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, d113 = +0, i114 = 0, d115 = +0, d116 = +0, d117 = +0, d118 = +0, d119 = +0, d120 = +0, i121 = 0, i122 = 0, i123 = 0, i124 = 0, d125 = +0, d126 = +0, d127 = +0, i128 = 0, i129 = 0, d130 = +0, d131 = +0, d132 = +0, d133 = +0, d134 = +0, d135 = +0, d136 = +0, d137 = +0, i138 = 0, i139 = 0, i140 = 0, i141 = 0, i142 = 0, i143 = 0, i144 = 0, i145 = 0, i146 = 0, d147 = +0, d148 = +0, d149 = +0, d150 = +0, d151 = +0, i152 = 0, i153 = 0, d154 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 1144 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 56 | 0;
 i10 = i4 + 64 | 0;
 i11 = i4 + 72 | 0;
 i12 = i4 + 80 | 0;
 i13 = i4 + 1120 | 0;
 i14 = i4 + 1128 | 0;
 i15 = i4 + 1136 | 0;
 i16 = i15;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i20 = i19;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 3 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i24 = i1 + 4 | 0;
 i25 = HEAP32[(HEAP32[i24 >> 2] | 0) + 24 >> 2] | 0;
 i26 = (i25 & 16 | 0) == 0;
 i27 = i1 | 0;
 i28 = HEAP32[i27 >> 2] | 0;
 do {
  if (+HEAPF32[i28 + 28 >> 2] != +0) {
   i29 = 4;
  } else {
   if (+HEAPF32[i28 + 32 >> 2] != +0) {
    i29 = 4;
    break;
   }
   if (+HEAPF32[i1 + 16 >> 2] != +0) {
    i29 = 4;
   } else {
    i30 = 0;
   }
  }
 } while (0);
 if ((i29 | 0) == 4) {
  i30 = (i25 & 512 | 0) == 0;
 }
 i25 = i1 + 12 | 0;
 d31 = +HEAPF32[i25 >> 2];
 d32 = +Math_floor(d31);
 HEAPF32[i25 >> 2] = d32;
 d33 = d31 - d32;
 i34 = i1 + 28 | 0;
 d32 = +HEAPF32[i34 >> 2];
 i35 = HEAP32[i28 + 24 >> 2] | 0;
 i36 = i35 + 44 | 0;
 i37 = HEAP32[i36 >> 2] | 0;
 if ((i37 | 0) == 0) {
  i38 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i35, i28 | 0, 0) | 0;
  i28 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i38 >> 2] | 0) + 8 >> 2] & 1](i38, 32) | 0;
  HEAP32[i36 >> 2] = i28;
  i39 = i28;
 } else {
  i39 = i37;
 }
 i37 = (i3 | 0) != 0;
 if (i37) {
  i40 = HEAP32[i3 + 8 >> 2] | 0;
 } else {
  i40 = 0;
 }
 HEAP32[i9 >> 2] = i40;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i11 >> 2] = 0;
 i40 = i12 + 12 | 0;
 i28 = i12 | 0;
 HEAP32[i28 >> 2] = i40;
 i36 = i12 + 4 | 0;
 HEAP32[i36 >> 2] = 64;
 i38 = i12 + 8 | 0;
 HEAP32[i38 >> 2] = 0;
 i35 = i2 + 4 | 0;
 i41 = HEAP32[i35 >> 2] | 0;
 i42 = i2 + 8 | 0;
 L13 : do {
  if ((i41 | 0) < (HEAP32[i42 >> 2] | 0)) {
   i43 = i2 | 0;
   i44 = i6;
   i45 = i15;
   i46 = i16 + 4 | 0;
   i47 = i1 + 100 | 0;
   i48 = i3 + 8 | 0;
   i49 = i1 + 104 | 0;
   i50 = i5;
   i51 = i20 + 4 | 0;
   i52 = i1 + 24 | 0;
   i53 = i1 + 16 | 0;
   i54 = i1 + 20 | 0;
   i55 = i1 + 128 | 0;
   i56 = i1 + 32 | 0;
   i57 = i1 + 40 | 0;
   i58 = i1 + 36 | 0;
   i59 = i56 | 0;
   i60 = i14;
   i61 = i3 + 57384 | 0;
   i62 = i3 + 57376 | 0;
   i63 = i37 ^ 1;
   i64 = i22 | 0;
   i65 = i22 + 4 | 0;
   i66 = i22;
   i67 = i66 + 5 | 0;
   i68 = i23 | 0;
   i69 = i22 + 8 | 0;
   i70 = i22 + 12 | 0;
   i71 = i22;
   i72 = i1 + 108 | 0;
   i73 = i1 + 112 | 0;
   i74 = i1 + 116 | 0;
   i75 = i1 + 124 | 0;
   i76 = i1 + 120 | 0;
   i77 = i7 | 0;
   i78 = i7 + 4 | 0;
   i79 = i7 + 8 | 0;
   i80 = i7 + 12 | 0;
   i81 = i8 | 0;
   d31 = +0;
   d82 = +0;
   d83 = +0;
   d84 = +0;
   i85 = i39;
   d86 = d32;
   d87 = d33;
   i88 = i41;
   L15 : while (1) {
    i89 = HEAP16[HEAP32[i43 >> 2] >> 1] | 0;
    i90 = i89 & 65535;
    HEAP32[i10 >> 2] = i90;
    HEAP32[i11 >> 2] = 1;
    if ((i89 & 65535) >>> 0 < 12353 >>> 0) {
     i91 = 1;
     i92 = i88;
     i93 = i90;
    } else {
     if (!(__ZN7WebCore30SurrogatePairAwareTextIterator15consumeSlowCaseERiRj(i2, i10, i11) | 0)) {
      i94 = i85;
      d95 = d86;
      d96 = d87;
      break L13;
     }
     i91 = HEAP32[i11 >> 2] | 0;
     i92 = HEAP32[i35 >> 2] | 0;
     i93 = HEAP32[i10 >> 2] | 0;
    }
    HEAP32[i13 >> 2] = i91;
    HEAP32[i14 >> 2] = i92;
    i90 = HEAP32[(HEAP32[i24 >> 2] | 0) + 32 >> 2] | 0;
    if ((i90 | 0) == 0) {
     i89 = HEAP32[i27 >> 2] | 0;
     __ZNK7WebCore10FontGlyphs28glyphDataAndPageForCharacterERKNS_15FontDescriptionEibNS_15FontDataVariantE(i6, HEAP32[i89 + 24 >> 2] | 0, i89 | 0, i93, i26, 0);
     i89 = HEAP32[i44 >> 2] | 0;
     i97 = HEAP32[i44 + 4 >> 2] | 0;
     HEAP32[i15 >> 2] = i89;
     HEAP32[i15 + 4 >> 2] = i97;
     i98 = i89 & 65535;
     i99 = i97;
    } else {
     FUNCTION_TABLE_viiiiiiii[HEAP32[(HEAP32[i90 >> 2] | 0) + 8 >> 2] & 1](i16, i90, HEAP32[i27 >> 2] | 0, i1, i93, i26, i92, i13);
     i98 = HEAP16[i45 >> 1] | 0;
     i99 = HEAP32[i46 >> 2] | 0;
    }
    HEAP32[i17 >> 2] = i99;
    do {
     if ((HEAP32[i10 >> 2] | 0) == 9) {
      i90 = HEAP32[i24 >> 2] | 0;
      if ((HEAP32[i90 + 24 >> 2] & 8 | 0) == 0) {
       i29 = 22;
       break;
      }
      i97 = HEAP32[i27 >> 2] | 0;
      i89 = HEAP32[i90 + 28 >> 2] | 0;
      if ((i89 | 0) == 0) {
       d100 = +HEAPF32[i97 + 28 >> 2];
       i101 = i99;
       break;
      } else {
       d102 = +(i89 >>> 0 >>> 0) * +HEAPF32[i99 + 1124 >> 2] + +HEAPF32[i97 + 28 >> 2];
       d100 = d102 - +_fmod(+(d87 + (+HEAPF32[i25 >> 2] + +HEAPF32[i90 + 12 >> 2])), +d102);
       i101 = i99;
       break;
      }
     } else {
      i29 = 22;
     }
    } while (0);
    do {
     if ((i29 | 0) == 22) {
      i29 = 0;
      do {
       if ((HEAP16[i99 + 1136 >> 1] | 0) == i98 << 16 >> 16 & i98 << 16 >> 16 != 0) {
        d103 = +0;
       } else {
        i90 = i99 + 84 | 0;
        i97 = i98 & 65535;
        i89 = i97 >>> 8;
        i104 = (i89 | 0) == 0;
        do {
         if (i104) {
          if ((HEAP8[i90 | 0] & 1) == 0) {
           i29 = 26;
           break;
          }
          i105 = i99 + 88 | 0;
         } else {
          i29 = 26;
         }
        } while (0);
        if ((i29 | 0) == 26) {
         i29 = 0;
         i105 = __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i90, i89) | 0;
        }
        i106 = i97 & 255;
        d102 = +HEAPF32[i105 + (i106 << 2) >> 2];
        if (d102 != +-1) {
         d103 = d102;
         break;
        }
        i107 = HEAP32[i99 + 76 >> 2] | 0;
        if ((i107 | 0) == 0) {
         d108 = +__ZNK7WebCore14SimpleFontData21platformWidthForGlyphEt(i99, i98);
        } else {
         d108 = +FUNCTION_TABLE_fiif[HEAP32[(HEAP32[i107 >> 2] | 0) + 12 >> 2] & 1](i107, i98, +HEAPF32[i99 + 60 >> 2]);
        }
        do {
         if (i104) {
          if ((HEAP8[i90 | 0] & 1) == 0) {
           i29 = 34;
           break;
          }
          i109 = i99 + 88 | 0;
         } else {
          i29 = 34;
         }
        } while (0);
        if ((i29 | 0) == 34) {
         i29 = 0;
         i109 = __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i90, i89) | 0;
        }
        HEAPF32[i109 + (i106 << 2) >> 2] = d108;
        d103 = d108;
       }
      } while (0);
      i104 = HEAP32[i24 >> 2] | 0;
      d102 = d103 * +HEAPF32[i104 + 16 >> 2];
      i97 = HEAP32[i17 >> 2] | 0;
      if ((HEAP32[i104 + 24 >> 2] & 256 | 0) == 0) {
       d100 = d102;
       i101 = i97;
       break;
      }
      if (d102 != +HEAPF32[i97 + 1124 >> 2]) {
       d100 = d102;
       i101 = i97;
       break;
      }
      if ((HEAP8[i97 + 1116 | 0] & 1) == 0) {
       if (i98 << 16 >> 16 != (HEAP16[i97 + 1122 >> 1] | 0)) {
        d100 = d102;
        i101 = i97;
        break;
       }
      }
      d100 = +HEAPF32[i97 + 1132 >> 2];
      i101 = i97;
     }
    } while (0);
    i97 = d100 != +0;
    L59 : do {
     if ((i101 | 0) != (i85 | 0) & i97) {
      i104 = HEAP32[i24 >> 2] | 0;
      do {
       if ((HEAP32[i104 + 8 >> 2] | 0) > 1) {
        i107 = HEAP32[i47 >> 2] | 0;
        if ((i107 & 3 | 0) == 0) {
         break;
        }
        d102 = +__ZN7WebCoreL19applyFontTransformsEPNS_11GlyphBufferEbRiPKNS_14SimpleFontDataERNS_13WidthIteratorEjRN3WTF6VectorINSt3__14pairIiNS_42OriginalAdvancesForCharacterTreatedAsSpaceEEELj64ENS8_15CrashOnOverflowEEE(i3, (HEAP32[i104 + 24 >> 2] & 16 | 0) != 0, i9, i85, i1, i107, i12);
        HEAPF32[i25 >> 2] = d102 + +HEAPF32[i25 >> 2];
        HEAP32[i9 >> 2] = HEAP32[i48 >> 2];
       }
      } while (0);
      i104 = HEAP32[i49 >> 2] | 0;
      if ((i104 | 0) == 0 | (i101 | 0) == (i39 | 0)) {
       i110 = i101;
       break;
      }
      do {
       if ((HEAP32[(HEAP32[i27 >> 2] | 0) + 16 >> 2] & 32 | 0) == 0) {
        i111 = i104;
       } else {
        i107 = HEAP32[i10 >> 2] | 0;
        if ((i107 | 0) == (_u_toupper(i107) | 0)) {
         i111 = HEAP32[i49 >> 2] | 0;
         break;
        }
        i107 = HEAP32[i27 >> 2] | 0;
        i112 = _u_toupper(HEAP32[i10 >> 2] | 0) | 0;
        __ZNK7WebCore10FontGlyphs28glyphDataAndPageForCharacterERKNS_15FontDescriptionEibNS_15FontDataVariantE(i5, HEAP32[i107 + 24 >> 2] | 0, i107 | 0, i112, i26, 0);
        i112 = HEAP32[i50 + 4 >> 2] | 0;
        HEAP32[i19 >> 2] = HEAP32[i50 >> 2];
        HEAP32[i19 + 4 >> 2] = i112;
        if ((i112 | 0) == (i39 | 0)) {
         i110 = i101;
         break L59;
        }
        __ZN3WTF9HashTableIPKN7WebCore14SimpleFontDataES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i21, HEAP32[i49 >> 2] | 0, i51, i51);
        i110 = i101;
        break L59;
       }
      } while (0);
      __ZN3WTF9HashTableIPKN7WebCore14SimpleFontDataES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i18, i111 | 0, i17, i17);
      i110 = i101;
     } else {
      i110 = i85;
     }
    } while (0);
    L74 : do {
     if (i30) {
      do {
       if (i97) {
        d102 = +HEAPF32[(HEAP32[i27 >> 2] | 0) + 28 >> 2];
        if (d102 == +0) {
         d113 = d100;
         break;
        }
        d113 = d100 + d102;
       } else {
        d113 = d100;
       }
      } while (0);
      if ((HEAP8[H_BASE + 24 | 0] | 0) == 0) {
       i104 = (__ZN7WebCore4Font38canExpandAroundIdeographsInComplexTextEv() | 0) & 1;
       HEAP8[H_BASE + 8 | 0] = i104;
       HEAP32[H_BASE + 24 >> 2] = 1;
       HEAP32[H_BASE + 28 >> 2] = 0;
      }
      i104 = HEAP32[i10 >> 2] | 0;
      i112 = i104 & 65535;
      do {
       if ((i112 << 16 >> 16 | 0) == 32 | (i112 << 16 >> 16 | 0) == 9 | (i112 << 16 >> 16 | 0) == 10 | (i112 << 16 >> 16 | 0) == 160) {
        i114 = 1;
       } else {
        if ((HEAP8[H_BASE + 8 | 0] & 1) != 0) {
         if (__ZN7WebCore4Font22isCJKIdeographOrSymbolEi(i104) | 0) {
          i114 = 0;
          break;
         }
        }
        HEAP8[i52] = 0;
        d115 = d113;
        break L74;
       }
      } while (0);
      d102 = +HEAPF32[i53 >> 2];
      L89 : do {
       if (d102 != +0) {
        do {
         if (i114) {
          d116 = d102;
         } else {
          if ((HEAP8[i52] & 1) != 0) {
           d116 = d102;
           break;
          }
          d117 = +HEAPF32[i54 >> 2];
          d118 = d102 - d117;
          HEAPF32[i53 >> 2] = d118;
          if ((HEAP32[(HEAP32[i24 >> 2] | 0) + 24 >> 2] & 256 | 0) == 0) {
           d119 = d117;
          } else {
           d120 = +_round(+d102);
           d119 = d120 - +_round(+d118);
          }
          HEAPF32[i25 >> 2] = d119 + +HEAPF32[i25 >> 2];
          do {
           if (i37) {
            if ((HEAP32[i48 >> 2] | 0) != 0) {
             i104 = _llvm_uadd_with_overflow_i32(HEAP32[i61 >> 2] | 0, -1 | 0) | 0;
             if (!tempRet0) {
              i29 = 79;
              break L15;
             }
             i112 = (HEAP32[i62 >> 2] | 0) + (i104 << 3) | 0;
             HEAPF32[i112 >> 2] = d119 + +HEAPF32[i112 >> 2];
             break;
            }
            i112 = HEAP32[i17 >> 2] | 0;
            if ((HEAP8[i55] & 1) == 0) {
             __ZN7WebCore11GlyphBuffer3addEtPKNS_14SimpleFontDataEfPKNS_9FloatSizeE(i3, HEAP16[i112 + 1122 >> 1] | 0, i112, d119, 0);
            } else {
             __ZN7WebCore11GlyphBuffer3addEtPKNS_14SimpleFontDataEfPKNS_9FloatSizeE(i3, HEAP16[i112 + 1136 >> 1] | 0, i112, d117, 0);
            }
            i112 = HEAP32[i57 >> 2] | 0;
            if ((i112 | 0) != (HEAP32[i58 >> 2] | 0)) {
             HEAP32[(HEAP32[i59 >> 2] | 0) + (i112 << 2) >> 2] = HEAP32[i14 >> 2];
             HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
             break;
            }
            i104 = i112 + 1 | 0;
            i107 = HEAP32[i59 >> 2] | 0;
            do {
             if (i107 >>> 0 > i14 >>> 0) {
              i29 = 75;
             } else {
              if ((i107 + (i112 << 2) | 0) >>> 0 <= i14 >>> 0) {
               i29 = 75;
               break;
              }
              i121 = i104 + (i112 >>> 2) | 0;
              i122 = i121 >>> 0 > 16 >>> 0 ? i121 : 16;
              __ZN3WTF6VectorIiLj10ENS_15CrashOnOverflowEE15reserveCapacityEj(i56, i122 >>> 0 > i104 >>> 0 ? i122 : i104);
              i122 = HEAP32[i59 >> 2] | 0;
              i123 = i122 + (i60 - i107 >> 2 << 2) | 0;
              i124 = i122;
             }
            } while (0);
            if ((i29 | 0) == 75) {
             i29 = 0;
             i107 = i104 + (i112 >>> 2) | 0;
             i122 = i107 >>> 0 > 16 >>> 0 ? i107 : 16;
             __ZN3WTF6VectorIiLj10ENS_15CrashOnOverflowEE15reserveCapacityEj(i56, i122 >>> 0 > i104 >>> 0 ? i122 : i104);
             i123 = i14;
             i124 = HEAP32[i59 >> 2] | 0;
            }
            HEAP32[i124 + (HEAP32[i57 >> 2] << 2) >> 2] = HEAP32[i123 >> 2];
            HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
           }
          } while (0);
          d116 = +HEAPF32[i53 >> 2];
         }
        } while (0);
        i106 = HEAP32[i24 >> 2] | 0;
        i89 = i106 + 24 | 0;
        i90 = HEAP32[i89 >> 2] | 0;
        do {
         if ((i90 & 1 | 0) == 0) {
          i122 = HEAP32[i35 >> 2] | 0;
          if ((i90 & 16 | 0) == 0) {
           if ((i122 | 0) == 0) {
            d125 = d113;
            break L89;
           } else {
            break;
           }
          } else {
           if (((HEAP32[i13 >> 2] | 0) + i122 | 0) >>> 0 < (HEAP32[i106 + 8 >> 2] | 0) >>> 0) {
            break;
           } else {
            d125 = d113;
            break L89;
           }
          }
         }
        } while (0);
        d117 = +HEAPF32[i54 >> 2];
        d118 = d116 - d117;
        HEAPF32[i53 >> 2] = d118;
        if ((HEAP32[i89 >> 2] & 256 | 0) == 0) {
         d126 = d117;
        } else {
         d117 = +_round(+d116);
         d126 = d117 - +_round(+d118);
        }
        HEAP8[i52] = 1;
        d125 = d113 + d126;
       } else {
        HEAP8[i52] = 0;
        d125 = d113;
       }
      } while (0);
      if (!i114) {
       d115 = d125;
       break;
      }
      i106 = HEAP32[i10 >> 2] | 0;
      if ((i106 | 0) == 9) {
       if ((HEAP32[(HEAP32[i24 >> 2] | 0) + 24 >> 2] & 8 | 0) != 0) {
        d115 = d125;
        break;
       }
      }
      if (!((HEAP32[i35 >> 2] | 0) != 0 | (i106 | 0) == 160)) {
       d115 = d125;
       break;
      }
      d102 = +HEAPF32[(HEAP32[i27 >> 2] | 0) + 32 >> 2];
      if (d102 == +0) {
       d115 = d125;
       break;
      }
      d115 = d125 + d102;
     } else {
      d115 = d100;
     }
    } while (0);
    do {
     if ((HEAP32[(HEAP32[i24 >> 2] | 0) + 8 >> 2] | 0) > 1) {
      if ((HEAP32[i47 >> 2] & 3 | 0) == 0 | i63) {
       break;
      }
      i97 = HEAP32[i10 >> 2] | 0;
      i106 = i97 & 65535;
      if (!((i106 << 16 >> 16 | 0) == 32 | (i106 << 16 >> 16 | 0) == 9 | (i106 << 16 >> 16 | 0) == 10 | (i106 << 16 >> 16 | 0) == 160)) {
       break;
      }
      i106 = HEAP32[i48 >> 2] | 0;
      i90 = (i97 | 0) == 32;
      if ((i106 | 0) == 0) {
       d127 = +0;
      } else {
       i97 = i106 - 1 | 0;
       if ((HEAP32[i61 >> 2] | 0) >>> 0 <= i97 >>> 0) {
        i29 = 102;
        break L15;
       }
       d127 = +HEAPF32[(HEAP32[i62 >> 2] | 0) + (i97 << 3) >> 2];
      }
      HEAP32[i64 >> 2] = i106;
      HEAP8[i65] = i90 & 1;
      HEAP8[i67] = HEAP8[i68] | 0;
      HEAP8[i67 + 1 | 0] = HEAP8[i68 + 1 | 0] | 0;
      HEAP8[i67 + 2 | 0] = HEAP8[i68 + 2 | 0] | 0;
      HEAPF32[i69 >> 2] = d127;
      HEAPF32[i70 >> 2] = d115;
      i90 = HEAP32[i38 >> 2] | 0;
      if ((i90 | 0) != (HEAP32[i36 >> 2] | 0)) {
       i106 = (HEAP32[i28 >> 2] | 0) + (i90 << 4) | 0;
       HEAP32[i106 >> 2] = HEAP32[i66 >> 2];
       HEAP32[i106 + 4 >> 2] = HEAP32[i66 + 4 >> 2];
       HEAP32[i106 + 8 >> 2] = HEAP32[i66 + 8 >> 2];
       HEAP32[i106 + 12 >> 2] = HEAP32[i66 + 12 >> 2];
       HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
       break;
      }
      i106 = i90 + 1 | 0;
      i97 = HEAP32[i28 >> 2] | 0;
      do {
       if (i97 >>> 0 > i22 >>> 0) {
        i29 = 108;
       } else {
        if ((i97 + (i90 << 4) | 0) >>> 0 <= i22 >>> 0) {
         i29 = 108;
         break;
        }
        i122 = i106 + (i90 >>> 2) | 0;
        i107 = i122 >>> 0 > 16 >>> 0 ? i122 : 16;
        __ZN3WTF6VectorINSt3__14pairIiN7WebCore42OriginalAdvancesForCharacterTreatedAsSpaceEEELj64ENS_15CrashOnOverflowEE15reserveCapacityEj(i12, i107 >>> 0 > i106 >>> 0 ? i107 : i106);
        i107 = HEAP32[i28 >> 2] | 0;
        i128 = i107 + (i71 - i97 >> 4 << 4) | 0;
        i129 = i107;
       }
      } while (0);
      if ((i29 | 0) == 108) {
       i29 = 0;
       i97 = i106 + (i90 >>> 2) | 0;
       i107 = i97 >>> 0 > 16 >>> 0 ? i97 : 16;
       __ZN3WTF6VectorINSt3__14pairIiN7WebCore42OriginalAdvancesForCharacterTreatedAsSpaceEEELj64ENS_15CrashOnOverflowEE15reserveCapacityEj(i12, i107 >>> 0 > i106 >>> 0 ? i107 : i106);
       i128 = i22;
       i129 = HEAP32[i28 >> 2] | 0;
      }
      i107 = i129 + (HEAP32[i38 >> 2] << 4) | 0;
      i97 = i128;
      HEAP32[i107 >> 2] = HEAP32[i97 >> 2];
      HEAP32[i107 + 4 >> 2] = HEAP32[i97 + 4 >> 2];
      HEAP32[i107 + 8 >> 2] = HEAP32[i97 + 8 >> 2];
      HEAP32[i107 + 12 >> 2] = HEAP32[i97 + 12 >> 2];
      HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
     }
    } while (0);
    do {
     if ((HEAP8[i72] & 1) == 0) {
      d130 = d84;
      d131 = d83;
      d132 = d82;
      d133 = d31;
     } else {
      i97 = HEAP32[i17 >> 2] | 0;
      L156 : do {
       if ((HEAP16[i97 + 1136 >> 1] | 0) == i98 << 16 >> 16 & i98 << 16 >> 16 != 0) {
        d134 = +0;
        d135 = +0;
        d136 = +0;
        d137 = +0;
       } else {
        i107 = i97 + 80 | 0;
        i122 = i107 | 0;
        i121 = HEAP32[i122 >> 2] | 0;
        do {
         if ((i121 | 0) != 0) {
          i138 = i98 & 65535;
          i139 = i138 >>> 8;
          do {
           if ((i139 | 0) == 0) {
            if ((HEAP8[i121 | 0] & 1) == 0) {
             i29 = 117;
             break;
            }
            i140 = i121 + 4 | 0;
           } else {
            i29 = 117;
           }
          } while (0);
          if ((i29 | 0) == 117) {
           i29 = 0;
           i140 = __ZN7WebCore15GlyphMetricsMapINS_9FloatRectEE18locatePageSlowCaseEj(i121, i139) | 0;
          }
          i141 = i138 & 255;
          d102 = +HEAPF32[i140 + (i141 << 4) + 8 >> 2];
          if (d102 == +-1) {
           break;
          }
          d134 = +HEAPF32[i140 + (i141 << 4) >> 2];
          d135 = +HEAPF32[i140 + (i141 << 4) + 4 >> 2];
          d136 = d102;
          d137 = +HEAPF32[i140 + (i141 << 4) + 12 >> 2];
          break L156;
         }
        } while (0);
        __ZNK7WebCore14SimpleFontData22platformBoundsForGlyphEt(i7, i97, i98);
        d102 = +HEAPF32[i77 >> 2];
        d118 = +HEAPF32[i78 >> 2];
        d117 = +HEAPF32[i79 >> 2];
        d120 = +HEAPF32[i80 >> 2];
        do {
         if ((HEAP32[i122 >> 2] | 0) == 0) {
          i121 = __Znwj(4104) | 0;
          HEAP8[i121] = 0;
          i89 = i121 + 4100 | 0;
          i141 = i89;
          i142 = i121 + 4 | 0;
          while (1) {
           _memset(i142 | 0, 0, 16) | 0;
           i142 = i142 + 16 | 0;
           if ((i142 | 0) == (i141 | 0)) {
            break;
           }
          }
          HEAP32[i89 >> 2] = 0;
          HEAP32[i81 >> 2] = i121;
          __ZN3WTF6OwnPtrIN7WebCore15GlyphMetricsMapINS1_9FloatRectEEEEaSERKNS_10PassOwnPtrIS4_EE(i107, i8) | 0;
          i141 = HEAP32[i81 >> 2] | 0;
          if ((i141 | 0) == 0) {
           break;
          }
          i142 = HEAP32[i141 + 4100 >> 2] | 0;
          if ((i142 | 0) != 0) {
           i138 = HEAP32[i142 >> 2] | 0;
           if ((i138 | 0) != 0) {
            i139 = HEAP32[i142 + 4 >> 2] | 0;
            if ((i139 | 0) > 0) {
             i143 = 0;
             while (1) {
              do {
               if ((HEAP32[i138 + (i143 << 3) >> 2] | 0) != -1) {
                i144 = HEAP32[i138 + (i143 << 3) + 4 >> 2] | 0;
                if ((i144 | 0) == 0) {
                 break;
                }
                __ZdlPv(i144);
               }
              } while (0);
              i143 = i143 + 1 | 0;
              if ((i143 | 0) >= (i139 | 0)) {
               break;
              }
             }
            }
            __ZN3WTF8fastFreeEPv(i138);
           }
           __ZN3WTF8fastFreeEPv(i142);
          }
          __ZdlPv(i141 | 0);
         }
        } while (0);
        i107 = HEAP32[i122 >> 2] | 0;
        i139 = i98 & 65535;
        i143 = i139 >>> 8;
        do {
         if ((i143 | 0) == 0) {
          if ((HEAP8[i107 | 0] & 1) == 0) {
           i29 = 137;
           break;
          }
          i145 = i107 + 4 | 0;
         } else {
          i29 = 137;
         }
        } while (0);
        if ((i29 | 0) == 137) {
         i29 = 0;
         i145 = __ZN7WebCore15GlyphMetricsMapINS_9FloatRectEE18locatePageSlowCaseEj(i107, i143) | 0;
        }
        i122 = i139 & 255;
        HEAPF32[i145 + (i122 << 4) >> 2] = d102;
        HEAPF32[i145 + (i122 << 4) + 4 >> 2] = d118;
        HEAPF32[i145 + (i122 << 4) + 8 >> 2] = d117;
        HEAPF32[i145 + (i122 << 4) + 12 >> 2] = d120;
        d134 = d102;
        d135 = d118;
        d136 = d117;
        d137 = d120;
       }
      } while (0);
      if ((HEAP32[i35 >> 2] | 0) != 0) {
       d130 = d134;
       d131 = d135;
       d132 = d136;
       d133 = d137;
       break;
      }
      HEAPF32[i76 >> 2] = d134 < +-0 ? +-0 - d134 : +0;
      d130 = d134;
      d131 = d135;
      d132 = d136;
      d133 = d137;
     }
    } while (0);
    if ((HEAP8[i55] & 1) == 0) {
     i146 = i98;
    } else {
     i97 = __ZN7WebCore4Font22canReceiveTextEmphasisEi(HEAP32[i10 >> 2] | 0) | 0;
     i146 = i97 ? i98 : 0;
    }
    i97 = HEAP32[i13 >> 2] | 0;
    i106 = (HEAP32[i43 >> 2] | 0) + (i97 << 1) | 0;
    HEAP32[i43 >> 2] = i106;
    i90 = (HEAP32[i35 >> 2] | 0) + i97 | 0;
    HEAP32[i35 >> 2] = i90;
    i97 = HEAP32[i24 >> 2] | 0;
    i122 = HEAP32[i97 + 24 >> 2] | 0;
    i121 = (i122 & 256 | 0) == 0;
    L201 : do {
     if (i121) {
      i29 = 151;
     } else {
      i89 = HEAP32[i10 >> 2] | 0;
      do {
       if (i89 >>> 0 <= 255 >>> 0) {
        if ((HEAP8[__ZN7WebCore4Font28s_roundingHackCharacterTableE + i89 | 0] | 0) == 0) {
         if (i121) {
          i29 = 151;
          break L201;
         } else {
          break;
         }
        } else {
         d147 = +Math_ceil(d115);
         HEAPF32[i25 >> 2] = d147 + +HEAPF32[i25 >> 2];
         d148 = d87;
         d149 = d147;
         break L201;
        }
       }
      } while (0);
      if ((i90 | 0) >= (HEAP32[i97 + 8 >> 2] | 0)) {
       i29 = 151;
       break;
      }
      i89 = HEAP16[i106 >> 1] | 0;
      if ((i89 & 65535) >>> 0 > 255 >>> 0) {
       i29 = 151;
       break;
      }
      if ((HEAP8[__ZN7WebCore4Font28s_roundingHackCharacterTableE + (i89 & 65535) | 0] | 0) == 0) {
       i29 = 151;
      } else {
       i29 = 153;
      }
     }
    } while (0);
    do {
     if ((i29 | 0) == 151) {
      i29 = 0;
      if ((i122 & 128 | 0) != 0) {
       if ((i90 | 0) >= (HEAP32[i97 + 8 >> 2] | 0)) {
        i29 = 153;
        break;
       }
      }
      d148 = d87 + d115;
      d149 = d115;
     }
    } while (0);
    if ((i29 | 0) == 153) {
     i29 = 0;
     d147 = d87 + d115;
     d150 = +Math_ceil(d147);
     HEAPF32[i25 >> 2] = d150 + +HEAPF32[i25 >> 2];
     d148 = +0;
     d149 = d115 + (d150 - d147);
    }
    do {
     if (i37) {
      if (i26) {
       d151 = d86 + d115;
      } else {
       d151 = d149;
      }
      __ZN7WebCore11GlyphBuffer3addEtPKNS_14SimpleFontDataEfPKNS_9FloatSizeE(i3, i146, HEAP32[i17 >> 2] | 0, d151, 0);
      i97 = HEAP32[i57 >> 2] | 0;
      if ((i97 | 0) != (HEAP32[i58 >> 2] | 0)) {
       HEAP32[(HEAP32[i59 >> 2] | 0) + (i97 << 2) >> 2] = HEAP32[i14 >> 2];
       HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
       break;
      }
      i90 = i97 + 1 | 0;
      i122 = HEAP32[i59 >> 2] | 0;
      do {
       if (i122 >>> 0 > i14 >>> 0) {
        i29 = 162;
       } else {
        if ((i122 + (i97 << 2) | 0) >>> 0 <= i14 >>> 0) {
         i29 = 162;
         break;
        }
        i106 = i90 + (i97 >>> 2) | 0;
        i121 = i106 >>> 0 > 16 >>> 0 ? i106 : 16;
        __ZN3WTF6VectorIiLj10ENS_15CrashOnOverflowEE15reserveCapacityEj(i56, i121 >>> 0 > i90 >>> 0 ? i121 : i90);
        i121 = HEAP32[i59 >> 2] | 0;
        i152 = i121 + (i60 - i122 >> 2 << 2) | 0;
        i153 = i121;
       }
      } while (0);
      if ((i29 | 0) == 162) {
       i29 = 0;
       i122 = i90 + (i97 >>> 2) | 0;
       i121 = i122 >>> 0 > 16 >>> 0 ? i122 : 16;
       __ZN3WTF6VectorIiLj10ENS_15CrashOnOverflowEE15reserveCapacityEj(i56, i121 >>> 0 > i90 >>> 0 ? i121 : i90);
       i152 = i14;
       i153 = HEAP32[i59 >> 2] | 0;
      }
      HEAP32[i153 + (HEAP32[i57 >> 2] << 2) >> 2] = HEAP32[i152 >> 2];
      HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
     }
    } while (0);
    d147 = d149 - d115;
    if ((HEAP8[i72] & 1) != 0) {
     d150 = d133 + d131;
     d154 = +HEAPF32[i73 >> 2];
     HEAPF32[i73 >> 2] = d154 < d150 ? d150 : d154;
     d154 = +HEAPF32[i74 >> 2];
     HEAPF32[i74 >> 2] = d131 < d154 ? d131 : d154;
     d154 = d132 + d130 - d149;
     HEAPF32[i75 >> 2] = d154 > +0 ? d154 : +0;
    }
    i121 = HEAP32[i35 >> 2] | 0;
    if ((i121 | 0) < (HEAP32[i42 >> 2] | 0)) {
     d31 = d133;
     d82 = d132;
     d83 = d131;
     d84 = d130;
     i85 = i110;
     d86 = d147;
     d87 = d148;
     i88 = i121;
    } else {
     i94 = i110;
     d95 = d147;
     d96 = d148;
     break L13;
    }
   }
   if ((i29 | 0) == 79) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i29 | 0) == 102) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
  } else {
   i94 = i39;
   d95 = d32;
   d96 = d33;
  }
 } while (0);
 i39 = HEAP32[i24 >> 2] | 0;
 do {
  if ((HEAP32[i39 + 8 >> 2] | 0) > 1) {
   i24 = HEAP32[i1 + 100 >> 2] | 0;
   if ((i24 & 3 | 0) == 0) {
    break;
   }
   d33 = +__ZN7WebCoreL19applyFontTransformsEPNS_11GlyphBufferEbRiPKNS_14SimpleFontDataERNS_13WidthIteratorEjRN3WTF6VectorINSt3__14pairIiNS_42OriginalAdvancesForCharacterTreatedAsSpaceEEELj64ENS8_15CrashOnOverflowEEE(i3, (HEAP32[i39 + 24 >> 2] & 16 | 0) != 0, i9, i94, i1, i24, i12);
   HEAPF32[i25 >> 2] = d33 + +HEAPF32[i25 >> 2];
  }
 } while (0);
 i12 = HEAP32[i35 >> 2] | 0;
 i35 = i1 + 8 | 0;
 i1 = i12 - (HEAP32[i35 >> 2] | 0) | 0;
 HEAP32[i35 >> 2] = i12;
 HEAPF32[i25 >> 2] = d96 + +HEAPF32[i25 >> 2];
 HEAPF32[i34 >> 2] = d95;
 if ((HEAP32[i38 >> 2] | 0) != 0) {
  HEAP32[i38 >> 2] = 0;
 }
 i38 = HEAP32[i28 >> 2] | 0;
 if ((i40 | 0) == (i38 | 0) | (i38 | 0) == 0) {
  STACKTOP = i4;
  return i1 | 0;
 }
 HEAP32[i28 >> 2] = 0;
 HEAP32[i36 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i38);
 STACKTOP = i4;
 return i1 | 0;
}
function __ZN7WebCore13WidthIterator15advanceInternalINS_18Latin1TextIteratorEEEjRT_PNS_11GlyphBufferE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, d29 = +0, d30 = +0, d31 = +0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, d80 = +0, d81 = +0, d82 = +0, i83 = 0, d84 = +0, d85 = +0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, d95 = +0, i96 = 0, d97 = +0, d98 = +0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, d103 = +0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, d108 = +0, i109 = 0, d110 = +0, d111 = +0, d112 = +0, d113 = +0, d114 = +0, d115 = +0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, d120 = +0, d121 = +0, d122 = +0, i123 = 0, i124 = 0, d125 = +0, d126 = +0, d127 = +0, d128 = +0, d129 = +0, d130 = +0, d131 = +0, d132 = +0, i133 = 0, i134 = 0, i135 = 0, i136 = 0, i137 = 0, i138 = 0, i139 = 0, d140 = +0, d141 = +0, d142 = +0, d143 = +0, d144 = +0, i145 = 0, i146 = 0, d147 = +0, i148 = 0, d149 = +0, d150 = +0, i151 = 0, i152 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 1128 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 56 | 0;
 i10 = i4 + 64 | 0;
 i11 = i4 + 1104 | 0;
 i12 = i4 + 1112 | 0;
 i13 = i4 + 1120 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = i17;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 3 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i22 = i1 + 4 | 0;
 i23 = HEAP32[(HEAP32[i22 >> 2] | 0) + 24 >> 2] | 0;
 i24 = (i23 & 16 | 0) == 0;
 i25 = i1 | 0;
 i26 = HEAP32[i25 >> 2] | 0;
 do {
  if (+HEAPF32[i26 + 28 >> 2] != +0) {
   i27 = 4;
  } else {
   if (+HEAPF32[i26 + 32 >> 2] != +0) {
    i27 = 4;
    break;
   }
   if (+HEAPF32[i1 + 16 >> 2] != +0) {
    i27 = 4;
   } else {
    i28 = 0;
   }
  }
 } while (0);
 if ((i27 | 0) == 4) {
  i28 = (i23 & 512 | 0) == 0;
 }
 i23 = i1 + 12 | 0;
 d29 = +HEAPF32[i23 >> 2];
 d30 = +Math_floor(d29);
 HEAPF32[i23 >> 2] = d30;
 d31 = d29 - d30;
 i32 = i1 + 28 | 0;
 d30 = +HEAPF32[i32 >> 2];
 i33 = HEAP32[i26 + 24 >> 2] | 0;
 i34 = i33 + 44 | 0;
 i35 = HEAP32[i34 >> 2] | 0;
 if ((i35 | 0) == 0) {
  i36 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i33, i26 | 0, 0) | 0;
  i26 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i36 >> 2] | 0) + 8 >> 2] & 1](i36, 32) | 0;
  HEAP32[i34 >> 2] = i26;
  i37 = i26;
 } else {
  i37 = i35;
 }
 i35 = (i3 | 0) != 0;
 if (i35) {
  i38 = HEAP32[i3 + 8 >> 2] | 0;
 } else {
  i38 = 0;
 }
 HEAP32[i9 >> 2] = i38;
 i38 = i10 + 12 | 0;
 i26 = i10 | 0;
 HEAP32[i26 >> 2] = i38;
 i34 = i10 + 4 | 0;
 HEAP32[i34 >> 2] = 64;
 i36 = i10 + 8 | 0;
 HEAP32[i36 >> 2] = 0;
 i33 = i2 + 4 | 0;
 i39 = HEAP32[i33 >> 2] | 0;
 i40 = i2 + 8 | 0;
 L13 : do {
  if ((i39 | 0) < (HEAP32[i40 >> 2] | 0)) {
   i41 = i2 | 0;
   i42 = i6;
   i43 = i13;
   i44 = i14 + 4 | 0;
   i45 = i1 + 100 | 0;
   i46 = i3 + 8 | 0;
   i47 = i1 + 104 | 0;
   i48 = i5;
   i49 = i18 + 4 | 0;
   i50 = i1 + 24 | 0;
   i51 = i1 + 16 | 0;
   i52 = i1 + 20 | 0;
   i53 = i1 + 128 | 0;
   i54 = i1 + 32 | 0;
   i55 = i1 + 40 | 0;
   i56 = i1 + 36 | 0;
   i57 = i54 | 0;
   i58 = i12;
   i59 = i3 + 57384 | 0;
   i60 = i3 + 57376 | 0;
   i61 = i35 ^ 1;
   i62 = i20 | 0;
   i63 = i20 + 4 | 0;
   i64 = i20;
   i65 = i64 + 5 | 0;
   i66 = i21 | 0;
   i67 = i20 + 8 | 0;
   i68 = i20 + 12 | 0;
   i69 = i20;
   i70 = i1 + 108 | 0;
   i71 = i1 + 112 | 0;
   i72 = i1 + 116 | 0;
   i73 = i1 + 124 | 0;
   i74 = i1 + 120 | 0;
   i75 = i7 | 0;
   i76 = i7 + 4 | 0;
   i77 = i7 + 8 | 0;
   i78 = i7 + 12 | 0;
   i79 = i8 | 0;
   d29 = +0;
   d80 = +0;
   d81 = +0;
   d82 = +0;
   i83 = i37;
   d84 = d30;
   d85 = d31;
   i86 = i39;
   L15 : while (1) {
    i87 = HEAP8[HEAP32[i41 >> 2] | 0] | 0;
    i88 = i87 & 255;
    HEAP32[i11 >> 2] = 1;
    HEAP32[i12 >> 2] = i86;
    i89 = HEAP32[(HEAP32[i22 >> 2] | 0) + 32 >> 2] | 0;
    if ((i89 | 0) == 0) {
     i90 = HEAP32[i25 >> 2] | 0;
     __ZNK7WebCore10FontGlyphs28glyphDataAndPageForCharacterERKNS_15FontDescriptionEibNS_15FontDataVariantE(i6, HEAP32[i90 + 24 >> 2] | 0, i90 | 0, i88, i24, 0);
     i90 = HEAP32[i42 >> 2] | 0;
     i91 = HEAP32[i42 + 4 >> 2] | 0;
     HEAP32[i13 >> 2] = i90;
     HEAP32[i13 + 4 >> 2] = i91;
     i92 = i90 & 65535;
     i93 = i91;
    } else {
     FUNCTION_TABLE_viiiiiiii[HEAP32[(HEAP32[i89 >> 2] | 0) + 8 >> 2] & 1](i14, i89, HEAP32[i25 >> 2] | 0, i1, i88, i24, i86, i11);
     i92 = HEAP16[i43 >> 1] | 0;
     i93 = HEAP32[i44 >> 2] | 0;
    }
    HEAP32[i15 >> 2] = i93;
    i89 = i87 << 24 >> 24 == 9;
    do {
     if (i89) {
      i91 = HEAP32[i22 >> 2] | 0;
      if ((HEAP32[i91 + 24 >> 2] & 8 | 0) == 0) {
       i27 = 19;
       break;
      }
      i90 = HEAP32[i25 >> 2] | 0;
      i94 = HEAP32[i91 + 28 >> 2] | 0;
      if ((i94 | 0) == 0) {
       d95 = +HEAPF32[i90 + 28 >> 2];
       i96 = i93;
       break;
      } else {
       d97 = +(i94 >>> 0 >>> 0) * +HEAPF32[i93 + 1124 >> 2] + +HEAPF32[i90 + 28 >> 2];
       d95 = d97 - +_fmod(+(d85 + (+HEAPF32[i23 >> 2] + +HEAPF32[i91 + 12 >> 2])), +d97);
       i96 = i93;
       break;
      }
     } else {
      i27 = 19;
     }
    } while (0);
    do {
     if ((i27 | 0) == 19) {
      i27 = 0;
      do {
       if ((HEAP16[i93 + 1136 >> 1] | 0) == i92 << 16 >> 16 & i92 << 16 >> 16 != 0) {
        d98 = +0;
       } else {
        i91 = i93 + 84 | 0;
        i90 = i92 & 65535;
        i94 = i90 >>> 8;
        i99 = (i94 | 0) == 0;
        do {
         if (i99) {
          if ((HEAP8[i91 | 0] & 1) == 0) {
           i27 = 23;
           break;
          }
          i100 = i93 + 88 | 0;
         } else {
          i27 = 23;
         }
        } while (0);
        if ((i27 | 0) == 23) {
         i27 = 0;
         i100 = __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i91, i94) | 0;
        }
        i101 = i90 & 255;
        d97 = +HEAPF32[i100 + (i101 << 2) >> 2];
        if (d97 != +-1) {
         d98 = d97;
         break;
        }
        i102 = HEAP32[i93 + 76 >> 2] | 0;
        if ((i102 | 0) == 0) {
         d103 = +__ZNK7WebCore14SimpleFontData21platformWidthForGlyphEt(i93, i92);
        } else {
         d103 = +FUNCTION_TABLE_fiif[HEAP32[(HEAP32[i102 >> 2] | 0) + 12 >> 2] & 1](i102, i92, +HEAPF32[i93 + 60 >> 2]);
        }
        do {
         if (i99) {
          if ((HEAP8[i91 | 0] & 1) == 0) {
           i27 = 31;
           break;
          }
          i104 = i93 + 88 | 0;
         } else {
          i27 = 31;
         }
        } while (0);
        if ((i27 | 0) == 31) {
         i27 = 0;
         i104 = __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i91, i94) | 0;
        }
        HEAPF32[i104 + (i101 << 2) >> 2] = d103;
        d98 = d103;
       }
      } while (0);
      i99 = HEAP32[i22 >> 2] | 0;
      d97 = d98 * +HEAPF32[i99 + 16 >> 2];
      i90 = HEAP32[i15 >> 2] | 0;
      if ((HEAP32[i99 + 24 >> 2] & 256 | 0) == 0) {
       d95 = d97;
       i96 = i90;
       break;
      }
      if (d97 != +HEAPF32[i90 + 1124 >> 2]) {
       d95 = d97;
       i96 = i90;
       break;
      }
      if ((HEAP8[i90 + 1116 | 0] & 1) == 0) {
       if (i92 << 16 >> 16 != (HEAP16[i90 + 1122 >> 1] | 0)) {
        d95 = d97;
        i96 = i90;
        break;
       }
      }
      d95 = +HEAPF32[i90 + 1132 >> 2];
      i96 = i90;
     }
    } while (0);
    i90 = d95 != +0;
    L55 : do {
     if ((i96 | 0) != (i83 | 0) & i90) {
      i99 = HEAP32[i22 >> 2] | 0;
      do {
       if ((HEAP32[i99 + 8 >> 2] | 0) > 1) {
        i102 = HEAP32[i45 >> 2] | 0;
        if ((i102 & 3 | 0) == 0) {
         break;
        }
        d97 = +__ZN7WebCoreL19applyFontTransformsEPNS_11GlyphBufferEbRiPKNS_14SimpleFontDataERNS_13WidthIteratorEjRN3WTF6VectorINSt3__14pairIiNS_42OriginalAdvancesForCharacterTreatedAsSpaceEEELj64ENS8_15CrashOnOverflowEEE(i3, (HEAP32[i99 + 24 >> 2] & 16 | 0) != 0, i9, i83, i1, i102, i10);
        HEAPF32[i23 >> 2] = d97 + +HEAPF32[i23 >> 2];
        HEAP32[i9 >> 2] = HEAP32[i46 >> 2];
       }
      } while (0);
      i99 = HEAP32[i47 >> 2] | 0;
      if ((i99 | 0) == 0 | (i96 | 0) == (i37 | 0)) {
       i105 = i96;
       break;
      }
      do {
       if ((HEAP32[(HEAP32[i25 >> 2] | 0) + 16 >> 2] & 32 | 0) == 0) {
        i106 = i99;
       } else {
        if ((i88 | 0) == (_u_toupper(i88) | 0)) {
         i106 = HEAP32[i47 >> 2] | 0;
         break;
        }
        i102 = HEAP32[i25 >> 2] | 0;
        i107 = _u_toupper(i88) | 0;
        __ZNK7WebCore10FontGlyphs28glyphDataAndPageForCharacterERKNS_15FontDescriptionEibNS_15FontDataVariantE(i5, HEAP32[i102 + 24 >> 2] | 0, i102 | 0, i107, i24, 0);
        i107 = HEAP32[i48 + 4 >> 2] | 0;
        HEAP32[i17 >> 2] = HEAP32[i48 >> 2];
        HEAP32[i17 + 4 >> 2] = i107;
        if ((i107 | 0) == (i37 | 0)) {
         i105 = i96;
         break L55;
        }
        __ZN3WTF9HashTableIPKN7WebCore14SimpleFontDataES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i19, HEAP32[i47 >> 2] | 0, i49, i49);
        i105 = i96;
        break L55;
       }
      } while (0);
      __ZN3WTF9HashTableIPKN7WebCore14SimpleFontDataES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i16, i106 | 0, i15, i15);
      i105 = i96;
     } else {
      i105 = i83;
     }
    } while (0);
    L70 : do {
     if (i28) {
      do {
       if (i90) {
        d97 = +HEAPF32[(HEAP32[i25 >> 2] | 0) + 28 >> 2];
        if (d97 == +0) {
         d108 = d95;
         break;
        }
        d108 = d95 + d97;
       } else {
        d108 = d95;
       }
      } while (0);
      if ((HEAP8[H_BASE + 32 | 0] | 0) == 0) {
       i99 = (__ZN7WebCore4Font38canExpandAroundIdeographsInComplexTextEv() | 0) & 1;
       HEAP8[H_BASE + 16 | 0] = i99;
       HEAP32[H_BASE + 32 >> 2] = 1;
       HEAP32[H_BASE + 36 >> 2] = 0;
      }
      i99 = i87 & 255;
      do {
       if ((i99 << 16 >> 16 | 0) == 32 | (i99 << 16 >> 16 | 0) == 9 | (i99 << 16 >> 16 | 0) == 10 | (i99 << 16 >> 16 | 0) == 160) {
        i109 = 1;
       } else {
        if ((HEAP8[H_BASE + 16 | 0] & 1) != 0) {
         if (__ZN7WebCore4Font22isCJKIdeographOrSymbolEi(i88) | 0) {
          i109 = 0;
          break;
         }
        }
        HEAP8[i50] = 0;
        d110 = d108;
        break L70;
       }
      } while (0);
      d97 = +HEAPF32[i51 >> 2];
      L85 : do {
       if (d97 != +0) {
        do {
         if (i109) {
          d111 = d97;
         } else {
          if ((HEAP8[i50] & 1) != 0) {
           d111 = d97;
           break;
          }
          d112 = +HEAPF32[i52 >> 2];
          d113 = d97 - d112;
          HEAPF32[i51 >> 2] = d113;
          if ((HEAP32[(HEAP32[i22 >> 2] | 0) + 24 >> 2] & 256 | 0) == 0) {
           d114 = d112;
          } else {
           d115 = +_round(+d97);
           d114 = d115 - +_round(+d113);
          }
          HEAPF32[i23 >> 2] = d114 + +HEAPF32[i23 >> 2];
          do {
           if (i35) {
            if ((HEAP32[i46 >> 2] | 0) != 0) {
             i99 = _llvm_uadd_with_overflow_i32(HEAP32[i59 >> 2] | 0, -1 | 0) | 0;
             if (!tempRet0) {
              i27 = 76;
              break L15;
             }
             i107 = (HEAP32[i60 >> 2] | 0) + (i99 << 3) | 0;
             HEAPF32[i107 >> 2] = d114 + +HEAPF32[i107 >> 2];
             break;
            }
            i107 = HEAP32[i15 >> 2] | 0;
            if ((HEAP8[i53] & 1) == 0) {
             __ZN7WebCore11GlyphBuffer3addEtPKNS_14SimpleFontDataEfPKNS_9FloatSizeE(i3, HEAP16[i107 + 1122 >> 1] | 0, i107, d114, 0);
            } else {
             __ZN7WebCore11GlyphBuffer3addEtPKNS_14SimpleFontDataEfPKNS_9FloatSizeE(i3, HEAP16[i107 + 1136 >> 1] | 0, i107, d112, 0);
            }
            i107 = HEAP32[i55 >> 2] | 0;
            if ((i107 | 0) != (HEAP32[i56 >> 2] | 0)) {
             HEAP32[(HEAP32[i57 >> 2] | 0) + (i107 << 2) >> 2] = HEAP32[i12 >> 2];
             HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
             break;
            }
            i99 = i107 + 1 | 0;
            i102 = HEAP32[i57 >> 2] | 0;
            do {
             if (i102 >>> 0 > i12 >>> 0) {
              i27 = 72;
             } else {
              if ((i102 + (i107 << 2) | 0) >>> 0 <= i12 >>> 0) {
               i27 = 72;
               break;
              }
              i116 = i99 + (i107 >>> 2) | 0;
              i117 = i116 >>> 0 > 16 >>> 0 ? i116 : 16;
              __ZN3WTF6VectorIiLj10ENS_15CrashOnOverflowEE15reserveCapacityEj(i54, i117 >>> 0 > i99 >>> 0 ? i117 : i99);
              i117 = HEAP32[i57 >> 2] | 0;
              i118 = i117 + (i58 - i102 >> 2 << 2) | 0;
              i119 = i117;
             }
            } while (0);
            if ((i27 | 0) == 72) {
             i27 = 0;
             i102 = i99 + (i107 >>> 2) | 0;
             i117 = i102 >>> 0 > 16 >>> 0 ? i102 : 16;
             __ZN3WTF6VectorIiLj10ENS_15CrashOnOverflowEE15reserveCapacityEj(i54, i117 >>> 0 > i99 >>> 0 ? i117 : i99);
             i118 = i12;
             i119 = HEAP32[i57 >> 2] | 0;
            }
            HEAP32[i119 + (HEAP32[i55 >> 2] << 2) >> 2] = HEAP32[i118 >> 2];
            HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
           }
          } while (0);
          d111 = +HEAPF32[i51 >> 2];
         }
        } while (0);
        i101 = HEAP32[i22 >> 2] | 0;
        i94 = i101 + 24 | 0;
        i91 = HEAP32[i94 >> 2] | 0;
        do {
         if ((i91 & 1 | 0) == 0) {
          i117 = HEAP32[i33 >> 2] | 0;
          if ((i91 & 16 | 0) == 0) {
           if ((i117 | 0) == 0) {
            d120 = d108;
            break L85;
           } else {
            break;
           }
          } else {
           if (((HEAP32[i11 >> 2] | 0) + i117 | 0) >>> 0 < (HEAP32[i101 + 8 >> 2] | 0) >>> 0) {
            break;
           } else {
            d120 = d108;
            break L85;
           }
          }
         }
        } while (0);
        d112 = +HEAPF32[i52 >> 2];
        d113 = d111 - d112;
        HEAPF32[i51 >> 2] = d113;
        if ((HEAP32[i94 >> 2] & 256 | 0) == 0) {
         d121 = d112;
        } else {
         d112 = +_round(+d111);
         d121 = d112 - +_round(+d113);
        }
        HEAP8[i50] = 1;
        d120 = d108 + d121;
       } else {
        HEAP8[i50] = 0;
        d120 = d108;
       }
      } while (0);
      if (!i109) {
       d110 = d120;
       break;
      }
      if (i89) {
       if ((HEAP32[(HEAP32[i22 >> 2] | 0) + 24 >> 2] & 8 | 0) != 0) {
        d110 = d120;
        break;
       }
      }
      if (!((HEAP32[i33 >> 2] | 0) != 0 | i87 << 24 >> 24 == -96)) {
       d110 = d120;
       break;
      }
      d97 = +HEAPF32[(HEAP32[i25 >> 2] | 0) + 32 >> 2];
      if (d97 == +0) {
       d110 = d120;
       break;
      }
      d110 = d120 + d97;
     } else {
      d110 = d95;
     }
    } while (0);
    do {
     if ((HEAP32[(HEAP32[i22 >> 2] | 0) + 8 >> 2] | 0) > 1) {
      if ((HEAP32[i45 >> 2] & 3 | 0) == 0 | i61) {
       break;
      }
      i89 = i87 & 255;
      if (!((i89 << 16 >> 16 | 0) == 32 | (i89 << 16 >> 16 | 0) == 9 | (i89 << 16 >> 16 | 0) == 10 | (i89 << 16 >> 16 | 0) == 160)) {
       break;
      }
      i89 = HEAP32[i46 >> 2] | 0;
      i90 = i87 << 24 >> 24 == 32;
      if ((i89 | 0) == 0) {
       d122 = +0;
      } else {
       i101 = i89 - 1 | 0;
       if ((HEAP32[i59 >> 2] | 0) >>> 0 <= i101 >>> 0) {
        i27 = 99;
        break L15;
       }
       d122 = +HEAPF32[(HEAP32[i60 >> 2] | 0) + (i101 << 3) >> 2];
      }
      HEAP32[i62 >> 2] = i89;
      HEAP8[i63] = i90 & 1;
      HEAP8[i65] = HEAP8[i66] | 0;
      HEAP8[i65 + 1 | 0] = HEAP8[i66 + 1 | 0] | 0;
      HEAP8[i65 + 2 | 0] = HEAP8[i66 + 2 | 0] | 0;
      HEAPF32[i67 >> 2] = d122;
      HEAPF32[i68 >> 2] = d110;
      i90 = HEAP32[i36 >> 2] | 0;
      if ((i90 | 0) != (HEAP32[i34 >> 2] | 0)) {
       i89 = (HEAP32[i26 >> 2] | 0) + (i90 << 4) | 0;
       HEAP32[i89 >> 2] = HEAP32[i64 >> 2];
       HEAP32[i89 + 4 >> 2] = HEAP32[i64 + 4 >> 2];
       HEAP32[i89 + 8 >> 2] = HEAP32[i64 + 8 >> 2];
       HEAP32[i89 + 12 >> 2] = HEAP32[i64 + 12 >> 2];
       HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
       break;
      }
      i89 = i90 + 1 | 0;
      i101 = HEAP32[i26 >> 2] | 0;
      do {
       if (i101 >>> 0 > i20 >>> 0) {
        i27 = 105;
       } else {
        if ((i101 + (i90 << 4) | 0) >>> 0 <= i20 >>> 0) {
         i27 = 105;
         break;
        }
        i91 = i89 + (i90 >>> 2) | 0;
        i117 = i91 >>> 0 > 16 >>> 0 ? i91 : 16;
        __ZN3WTF6VectorINSt3__14pairIiN7WebCore42OriginalAdvancesForCharacterTreatedAsSpaceEEELj64ENS_15CrashOnOverflowEE15reserveCapacityEj(i10, i117 >>> 0 > i89 >>> 0 ? i117 : i89);
        i117 = HEAP32[i26 >> 2] | 0;
        i123 = i117 + (i69 - i101 >> 4 << 4) | 0;
        i124 = i117;
       }
      } while (0);
      if ((i27 | 0) == 105) {
       i27 = 0;
       i101 = i89 + (i90 >>> 2) | 0;
       i117 = i101 >>> 0 > 16 >>> 0 ? i101 : 16;
       __ZN3WTF6VectorINSt3__14pairIiN7WebCore42OriginalAdvancesForCharacterTreatedAsSpaceEEELj64ENS_15CrashOnOverflowEE15reserveCapacityEj(i10, i117 >>> 0 > i89 >>> 0 ? i117 : i89);
       i123 = i20;
       i124 = HEAP32[i26 >> 2] | 0;
      }
      i117 = i124 + (HEAP32[i36 >> 2] << 4) | 0;
      i101 = i123;
      HEAP32[i117 >> 2] = HEAP32[i101 >> 2];
      HEAP32[i117 + 4 >> 2] = HEAP32[i101 + 4 >> 2];
      HEAP32[i117 + 8 >> 2] = HEAP32[i101 + 8 >> 2];
      HEAP32[i117 + 12 >> 2] = HEAP32[i101 + 12 >> 2];
      HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
     }
    } while (0);
    do {
     if ((HEAP8[i70] & 1) == 0) {
      d125 = d82;
      d126 = d81;
      d127 = d80;
      d128 = d29;
     } else {
      i87 = HEAP32[i15 >> 2] | 0;
      L152 : do {
       if ((HEAP16[i87 + 1136 >> 1] | 0) == i92 << 16 >> 16 & i92 << 16 >> 16 != 0) {
        d129 = +0;
        d130 = +0;
        d131 = +0;
        d132 = +0;
       } else {
        i101 = i87 + 80 | 0;
        i117 = i101 | 0;
        i91 = HEAP32[i117 >> 2] | 0;
        do {
         if ((i91 | 0) != 0) {
          i102 = i92 & 65535;
          i116 = i102 >>> 8;
          do {
           if ((i116 | 0) == 0) {
            if ((HEAP8[i91 | 0] & 1) == 0) {
             i27 = 114;
             break;
            }
            i133 = i91 + 4 | 0;
           } else {
            i27 = 114;
           }
          } while (0);
          if ((i27 | 0) == 114) {
           i27 = 0;
           i133 = __ZN7WebCore15GlyphMetricsMapINS_9FloatRectEE18locatePageSlowCaseEj(i91, i116) | 0;
          }
          i134 = i102 & 255;
          d97 = +HEAPF32[i133 + (i134 << 4) + 8 >> 2];
          if (d97 == +-1) {
           break;
          }
          d129 = +HEAPF32[i133 + (i134 << 4) >> 2];
          d130 = +HEAPF32[i133 + (i134 << 4) + 4 >> 2];
          d131 = d97;
          d132 = +HEAPF32[i133 + (i134 << 4) + 12 >> 2];
          break L152;
         }
        } while (0);
        __ZNK7WebCore14SimpleFontData22platformBoundsForGlyphEt(i7, i87, i92);
        d97 = +HEAPF32[i75 >> 2];
        d113 = +HEAPF32[i76 >> 2];
        d112 = +HEAPF32[i77 >> 2];
        d115 = +HEAPF32[i78 >> 2];
        do {
         if ((HEAP32[i117 >> 2] | 0) == 0) {
          i91 = __Znwj(4104) | 0;
          HEAP8[i91] = 0;
          i94 = i91 + 4100 | 0;
          i134 = i94;
          i135 = i91 + 4 | 0;
          while (1) {
           _memset(i135 | 0, 0, 16) | 0;
           i135 = i135 + 16 | 0;
           if ((i135 | 0) == (i134 | 0)) {
            break;
           }
          }
          HEAP32[i94 >> 2] = 0;
          HEAP32[i79 >> 2] = i91;
          __ZN3WTF6OwnPtrIN7WebCore15GlyphMetricsMapINS1_9FloatRectEEEEaSERKNS_10PassOwnPtrIS4_EE(i101, i8) | 0;
          i134 = HEAP32[i79 >> 2] | 0;
          if ((i134 | 0) == 0) {
           break;
          }
          i135 = HEAP32[i134 + 4100 >> 2] | 0;
          if ((i135 | 0) != 0) {
           i102 = HEAP32[i135 >> 2] | 0;
           if ((i102 | 0) != 0) {
            i116 = HEAP32[i135 + 4 >> 2] | 0;
            if ((i116 | 0) > 0) {
             i136 = 0;
             while (1) {
              do {
               if ((HEAP32[i102 + (i136 << 3) >> 2] | 0) != -1) {
                i137 = HEAP32[i102 + (i136 << 3) + 4 >> 2] | 0;
                if ((i137 | 0) == 0) {
                 break;
                }
                __ZdlPv(i137);
               }
              } while (0);
              i136 = i136 + 1 | 0;
              if ((i136 | 0) >= (i116 | 0)) {
               break;
              }
             }
            }
            __ZN3WTF8fastFreeEPv(i102);
           }
           __ZN3WTF8fastFreeEPv(i135);
          }
          __ZdlPv(i134 | 0);
         }
        } while (0);
        i101 = HEAP32[i117 >> 2] | 0;
        i116 = i92 & 65535;
        i136 = i116 >>> 8;
        do {
         if ((i136 | 0) == 0) {
          if ((HEAP8[i101 | 0] & 1) == 0) {
           i27 = 134;
           break;
          }
          i138 = i101 + 4 | 0;
         } else {
          i27 = 134;
         }
        } while (0);
        if ((i27 | 0) == 134) {
         i27 = 0;
         i138 = __ZN7WebCore15GlyphMetricsMapINS_9FloatRectEE18locatePageSlowCaseEj(i101, i136) | 0;
        }
        i117 = i116 & 255;
        HEAPF32[i138 + (i117 << 4) >> 2] = d97;
        HEAPF32[i138 + (i117 << 4) + 4 >> 2] = d113;
        HEAPF32[i138 + (i117 << 4) + 8 >> 2] = d112;
        HEAPF32[i138 + (i117 << 4) + 12 >> 2] = d115;
        d129 = d97;
        d130 = d113;
        d131 = d112;
        d132 = d115;
       }
      } while (0);
      if ((HEAP32[i33 >> 2] | 0) != 0) {
       d125 = d129;
       d126 = d130;
       d127 = d131;
       d128 = d132;
       break;
      }
      HEAPF32[i74 >> 2] = d129 < +-0 ? +-0 - d129 : +0;
      d125 = d129;
      d126 = d130;
      d127 = d131;
      d128 = d132;
     }
    } while (0);
    if ((HEAP8[i53] & 1) == 0) {
     i139 = i92;
    } else {
     i87 = __ZN7WebCore4Font22canReceiveTextEmphasisEi(i88) | 0;
     i139 = i87 ? i92 : 0;
    }
    i87 = HEAP32[i11 >> 2] | 0;
    i89 = (HEAP32[i41 >> 2] | 0) + i87 | 0;
    HEAP32[i41 >> 2] = i89;
    i90 = (HEAP32[i33 >> 2] | 0) + i87 | 0;
    HEAP32[i33 >> 2] = i90;
    i87 = HEAP32[i22 >> 2] | 0;
    i117 = HEAP32[i87 + 24 >> 2] | 0;
    do {
     if ((i117 & 256 | 0) == 0) {
      i27 = 145;
     } else {
      if ((HEAP8[__ZN7WebCore4Font28s_roundingHackCharacterTableE + i88 | 0] | 0) != 0) {
       d140 = +Math_ceil(d110);
       HEAPF32[i23 >> 2] = d140 + +HEAPF32[i23 >> 2];
       d141 = d85;
       d142 = d140;
       break;
      }
      if ((i90 | 0) >= (HEAP32[i87 + 8 >> 2] | 0)) {
       i27 = 145;
       break;
      }
      if ((HEAP8[__ZN7WebCore4Font28s_roundingHackCharacterTableE + (HEAPU8[i89] | 0) | 0] | 0) == 0) {
       i27 = 145;
      } else {
       i27 = 147;
      }
     }
    } while (0);
    do {
     if ((i27 | 0) == 145) {
      i27 = 0;
      if ((i117 & 128 | 0) != 0) {
       if ((i90 | 0) >= (HEAP32[i87 + 8 >> 2] | 0)) {
        i27 = 147;
        break;
       }
      }
      d141 = d85 + d110;
      d142 = d110;
     }
    } while (0);
    if ((i27 | 0) == 147) {
     i27 = 0;
     d140 = d85 + d110;
     d143 = +Math_ceil(d140);
     HEAPF32[i23 >> 2] = d143 + +HEAPF32[i23 >> 2];
     d141 = +0;
     d142 = d110 + (d143 - d140);
    }
    do {
     if (i35) {
      if (i24) {
       d144 = d84 + d110;
      } else {
       d144 = d142;
      }
      __ZN7WebCore11GlyphBuffer3addEtPKNS_14SimpleFontDataEfPKNS_9FloatSizeE(i3, i139, HEAP32[i15 >> 2] | 0, d144, 0);
      i87 = HEAP32[i55 >> 2] | 0;
      if ((i87 | 0) != (HEAP32[i56 >> 2] | 0)) {
       HEAP32[(HEAP32[i57 >> 2] | 0) + (i87 << 2) >> 2] = HEAP32[i12 >> 2];
       HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
       break;
      }
      i90 = i87 + 1 | 0;
      i117 = HEAP32[i57 >> 2] | 0;
      do {
       if (i117 >>> 0 > i12 >>> 0) {
        i27 = 156;
       } else {
        if ((i117 + (i87 << 2) | 0) >>> 0 <= i12 >>> 0) {
         i27 = 156;
         break;
        }
        i89 = i90 + (i87 >>> 2) | 0;
        i88 = i89 >>> 0 > 16 >>> 0 ? i89 : 16;
        __ZN3WTF6VectorIiLj10ENS_15CrashOnOverflowEE15reserveCapacityEj(i54, i88 >>> 0 > i90 >>> 0 ? i88 : i90);
        i88 = HEAP32[i57 >> 2] | 0;
        i145 = i88 + (i58 - i117 >> 2 << 2) | 0;
        i146 = i88;
       }
      } while (0);
      if ((i27 | 0) == 156) {
       i27 = 0;
       i117 = i90 + (i87 >>> 2) | 0;
       i88 = i117 >>> 0 > 16 >>> 0 ? i117 : 16;
       __ZN3WTF6VectorIiLj10ENS_15CrashOnOverflowEE15reserveCapacityEj(i54, i88 >>> 0 > i90 >>> 0 ? i88 : i90);
       i145 = i12;
       i146 = HEAP32[i57 >> 2] | 0;
      }
      HEAP32[i146 + (HEAP32[i55 >> 2] << 2) >> 2] = HEAP32[i145 >> 2];
      HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
     }
    } while (0);
    d140 = d142 - d110;
    if ((HEAP8[i70] & 1) != 0) {
     d143 = d128 + d126;
     d147 = +HEAPF32[i71 >> 2];
     HEAPF32[i71 >> 2] = d147 < d143 ? d143 : d147;
     d147 = +HEAPF32[i72 >> 2];
     HEAPF32[i72 >> 2] = d126 < d147 ? d126 : d147;
     d147 = d127 + d125 - d142;
     HEAPF32[i73 >> 2] = d147 > +0 ? d147 : +0;
    }
    i88 = HEAP32[i33 >> 2] | 0;
    if ((i88 | 0) < (HEAP32[i40 >> 2] | 0)) {
     d29 = d128;
     d80 = d127;
     d81 = d126;
     d82 = d125;
     i83 = i105;
     d84 = d140;
     d85 = d141;
     i86 = i88;
    } else {
     i148 = i105;
     d149 = d140;
     d150 = d141;
     i151 = i88;
     break L13;
    }
   }
   if ((i27 | 0) == 76) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i27 | 0) == 99) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
  } else {
   i148 = i37;
   d149 = d30;
   d150 = d31;
   i151 = i39;
  }
 } while (0);
 i39 = HEAP32[i22 >> 2] | 0;
 do {
  if ((HEAP32[i39 + 8 >> 2] | 0) > 1) {
   i22 = HEAP32[i1 + 100 >> 2] | 0;
   if ((i22 & 3 | 0) == 0) {
    i152 = i151;
    break;
   }
   d31 = +__ZN7WebCoreL19applyFontTransformsEPNS_11GlyphBufferEbRiPKNS_14SimpleFontDataERNS_13WidthIteratorEjRN3WTF6VectorINSt3__14pairIiNS_42OriginalAdvancesForCharacterTreatedAsSpaceEEELj64ENS8_15CrashOnOverflowEEE(i3, (HEAP32[i39 + 24 >> 2] & 16 | 0) != 0, i9, i148, i1, i22, i10);
   HEAPF32[i23 >> 2] = d31 + +HEAPF32[i23 >> 2];
   i152 = HEAP32[i33 >> 2] | 0;
  } else {
   i152 = i151;
  }
 } while (0);
 i151 = i1 + 8 | 0;
 i1 = i152 - (HEAP32[i151 >> 2] | 0) | 0;
 HEAP32[i151 >> 2] = i152;
 HEAPF32[i23 >> 2] = d150 + +HEAPF32[i23 >> 2];
 HEAPF32[i32 >> 2] = d149;
 if ((HEAP32[i36 >> 2] | 0) != 0) {
  HEAP32[i36 >> 2] = 0;
 }
 i36 = HEAP32[i26 >> 2] | 0;
 if ((i38 | 0) == (i36 | 0) | (i36 | 0) == 0) {
  STACKTOP = i4;
  return i1 | 0;
 }
 HEAP32[i26 >> 2] = 0;
 HEAP32[i34 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i36);
 STACKTOP = i4;
 return i1 | 0;
}
function __ZN7WebCore11GlyphBuffer3addEtPKNS_14SimpleFontDataEfPKNS_9FloatSizeE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 32 | 0;
 i9 = i8;
 HEAP32[i6 >> 2] = i3;
 i10 = i1 | 0;
 i11 = i1 + 8 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == (HEAP32[i1 + 4 >> 2] | 0)) {
  i13 = i12 + 1 | 0;
  i14 = i1 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  do {
   if (i15 >>> 0 > i6 >>> 0) {
    i16 = 5;
   } else {
    if ((i15 + (i12 << 2) | 0) >>> 0 <= i6 >>> 0) {
     i16 = 5;
     break;
    }
    i17 = i13 + (i12 >>> 2) | 0;
    i18 = i17 >>> 0 > 16 >>> 0 ? i17 : 16;
    __ZN3WTF6VectorIPKN7WebCore14SimpleFontDataELj2048ENS_15CrashOnOverflowEE15reserveCapacityEj(i10, i18 >>> 0 > i13 >>> 0 ? i18 : i13);
    i18 = HEAP32[i14 >> 2] | 0;
    i19 = i18 + (i6 - i15 >> 2 << 2) | 0;
    i20 = i18;
   }
  } while (0);
  if ((i16 | 0) == 5) {
   i15 = i13 + (i12 >>> 2) | 0;
   i18 = i15 >>> 0 > 16 >>> 0 ? i15 : 16;
   __ZN3WTF6VectorIPKN7WebCore14SimpleFontDataELj2048ENS_15CrashOnOverflowEE15reserveCapacityEj(i10, i18 >>> 0 > i13 >>> 0 ? i18 : i13);
   i19 = i6;
   i20 = HEAP32[i14 >> 2] | 0;
  }
  HEAP32[i20 + (HEAP32[i11 >> 2] << 2) >> 2] = HEAP32[i19 >> 2];
 } else {
  HEAP32[(HEAP32[i1 >> 2] | 0) + (i12 << 2) >> 2] = i3;
 }
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 HEAP32[i7 >> 2] = i2 & 65535;
 i2 = i1 + 8208 | 0;
 i11 = i1 + 8216 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 if ((i3 | 0) == (HEAP32[i1 + 8212 >> 2] | 0)) {
  i12 = i3 + 1 | 0;
  i19 = i2 | 0;
  i20 = HEAP32[i19 >> 2] | 0;
  do {
   if (i20 >>> 0 > i7 >>> 0) {
    i16 = 12;
   } else {
    if ((i20 + (i3 * 24 & -1) | 0) >>> 0 <= i7 >>> 0) {
     i16 = 12;
     break;
    }
    i14 = i12 + (i3 >>> 2) | 0;
    i6 = i14 >>> 0 > 16 >>> 0 ? i14 : 16;
    __ZN3WTF6VectorI13cairo_glyph_tLj2048ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i6 >>> 0 > i12 >>> 0 ? i6 : i12);
    i6 = HEAP32[i19 >> 2] | 0;
    i21 = i6 + (((i7 - i20 | 0) / 24 & -1) * 24 & -1) | 0;
    i22 = i6;
   }
  } while (0);
  if ((i16 | 0) == 12) {
   i20 = i12 + (i3 >>> 2) | 0;
   i6 = i20 >>> 0 > 16 >>> 0 ? i20 : 16;
   __ZN3WTF6VectorI13cairo_glyph_tLj2048ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i6 >>> 0 > i12 >>> 0 ? i6 : i12);
   i21 = i7;
   i22 = HEAP32[i19 >> 2] | 0;
  }
  i19 = i22 + ((HEAP32[i11 >> 2] | 0) * 24 & -1) | 0;
  i22 = i21;
  HEAP32[i19 >> 2] = HEAP32[i22 >> 2];
  HEAP32[i19 + 4 >> 2] = HEAP32[i22 + 4 >> 2];
  HEAP32[i19 + 8 >> 2] = HEAP32[i22 + 8 >> 2];
  HEAP32[i19 + 12 >> 2] = HEAP32[i22 + 12 >> 2];
  HEAP32[i19 + 16 >> 2] = HEAP32[i22 + 16 >> 2];
  HEAP32[i19 + 20 >> 2] = HEAP32[i22 + 20 >> 2];
 } else {
  i22 = (HEAP32[i2 >> 2] | 0) + (i3 * 24 & -1) | 0;
  i3 = i7;
  HEAP32[i22 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i22 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
  HEAP32[i22 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
  HEAP32[i22 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
  HEAP32[i22 + 16 >> 2] = HEAP32[i3 + 16 >> 2];
  HEAP32[i22 + 20 >> 2] = HEAP32[i3 + 20 >> 2];
 }
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 i11 = i1 + 57376 | 0;
 HEAPF32[i8 >> 2] = d4;
 HEAPF32[i9 + 4 >> 2] = +0;
 i3 = i1 + 57384 | 0;
 i22 = HEAP32[i3 >> 2] | 0;
 if ((i22 | 0) != (HEAP32[i1 + 57380 >> 2] | 0)) {
  i1 = (HEAP32[i11 >> 2] | 0) + (i22 << 3) | 0;
  i7 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i1 + 4 >> 2] = i7;
  i23 = HEAP32[i3 >> 2] | 0;
  i24 = i23 + 1 | 0;
  HEAP32[i3 >> 2] = i24;
  STACKTOP = i5;
  return;
 }
 i7 = i22 + 1 | 0;
 i1 = i11 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 do {
  if (i2 >>> 0 > i9 >>> 0) {
   i16 = 19;
  } else {
   if ((i2 + (i22 << 3) | 0) >>> 0 <= i9 >>> 0) {
    i16 = 19;
    break;
   }
   i19 = i7 + (i22 >>> 2) | 0;
   i21 = i19 >>> 0 > 16 >>> 0 ? i19 : 16;
   __ZN3WTF6VectorIN7WebCore9FloatSizeELj2048ENS_15CrashOnOverflowEE15reserveCapacityEj(i11, i21 >>> 0 > i7 >>> 0 ? i21 : i7);
   i21 = HEAP32[i1 >> 2] | 0;
   i25 = i21 + (i8 - i2 >> 3 << 3) | 0;
   i26 = i21;
  }
 } while (0);
 if ((i16 | 0) == 19) {
  i16 = i7 + (i22 >>> 2) | 0;
  i22 = i16 >>> 0 > 16 >>> 0 ? i16 : 16;
  __ZN3WTF6VectorIN7WebCore9FloatSizeELj2048ENS_15CrashOnOverflowEE15reserveCapacityEj(i11, i22 >>> 0 > i7 >>> 0 ? i22 : i7);
  i25 = i9;
  i26 = HEAP32[i1 >> 2] | 0;
 }
 i1 = i25;
 i25 = i26 + (HEAP32[i3 >> 2] << 3) | 0;
 i26 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i25 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i25 + 4 >> 2] = i26;
 i23 = HEAP32[i3 >> 2] | 0;
 i24 = i23 + 1 | 0;
 HEAP32[i3 >> 2] = i24;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15GlyphMetricsMapINS_9FloatRectEE18locatePageSlowCaseEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 do {
  if ((i2 | 0) == 0) {
   HEAP8[i1 | 0] = 1;
   i7 = i1 + 4 | 0;
  } else {
   i8 = i1 + 4100 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   L4 : do {
    if ((i9 | 0) == 0) {
     i10 = __ZN3WTF10fastMallocEj(20) | 0;
     _memset(i10 | 0, 0, 20) | 0;
     i11 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = i10;
     if ((i11 | 0) == 0) {
      break;
     }
     i10 = HEAP32[i11 >> 2] | 0;
     if ((i10 | 0) != 0) {
      i12 = HEAP32[i11 + 4 >> 2] | 0;
      if ((i12 | 0) > 0) {
       i13 = 0;
       while (1) {
        do {
         if ((HEAP32[i10 + (i13 << 3) >> 2] | 0) != -1) {
          i14 = HEAP32[i10 + (i13 << 3) + 4 >> 2] | 0;
          if ((i14 | 0) == 0) {
           break;
          }
          __ZdlPv(i14);
         }
        } while (0);
        i13 = i13 + 1 | 0;
        if ((i13 | 0) >= (i12 | 0)) {
         break;
        }
       }
      }
      __ZN3WTF8fastFreeEPv(i10);
     }
     __ZN3WTF8fastFreeEPv(i11);
    } else {
     i12 = HEAP32[i9 + 8 >> 2] | 0;
     i13 = HEAP32[i9 >> 2] | 0;
     i14 = ~(i2 << 15) + i2 | 0;
     i15 = (i14 >>> 10 ^ i14) * 9 & -1;
     i14 = i15 >>> 6 ^ i15;
     i15 = i14 + ~(i14 << 11) | 0;
     i14 = i15 >>> 16 ^ i15;
     if ((i13 | 0) == 0) {
      break;
     }
     i15 = i12 & i14;
     i16 = i13 + (i15 << 3) | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     if ((i17 | 0) == (i2 | 0)) {
      i18 = i16;
     } else {
      i16 = (i14 >>> 23) + ~i14 | 0;
      i14 = i16 << 12 ^ i16;
      i16 = i14 >>> 7 ^ i14;
      i14 = i16 << 2 ^ i16;
      i16 = i14 >>> 20 ^ i14 | 1;
      i14 = 0;
      i19 = i15;
      i15 = i17;
      while (1) {
       if ((i15 | 0) == 0) {
        break L4;
       }
       i17 = (i14 | 0) == 0 ? i16 : i14;
       i20 = i17 + i19 & i12;
       i21 = i13 + (i20 << 3) | 0;
       i22 = HEAP32[i21 >> 2] | 0;
       if ((i22 | 0) == (i2 | 0)) {
        i18 = i21;
        break;
       } else {
        i14 = i17;
        i19 = i20;
        i15 = i22;
       }
      }
     }
     if ((i18 | 0) == 0) {
      break;
     }
     i15 = HEAP32[i18 + 4 >> 2] | 0;
     if ((i15 | 0) == 0) {
      break;
     } else {
      i23 = i15;
     }
     STACKTOP = i3;
     return i23 | 0;
    }
   } while (0);
   i9 = __Znwj(4096) | 0;
   i15 = i9 + 4096 | 0;
   i19 = i9;
   while (1) {
    _memset(i19 | 0, 0, 16) | 0;
    i19 = i19 + 16 | 0;
    if ((i19 | 0) == (i15 | 0)) {
     break;
    }
   }
   i15 = i9;
   i19 = HEAP32[i8 >> 2] | 0;
   HEAP32[i4 >> 2] = i2;
   i14 = i5 | 0;
   HEAP32[i14 >> 2] = i15;
   __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapINS3_9FloatRectEE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIjEENS_7HashMapIiS8_SD_NS_10HashTraitsIiEENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EEiNS_10PassOwnPtrIS7_EEEENS_18HashTableAddResultINS_17HashTableIteratorIiS9_SB_SD_SJ_SG_EEEEOT0_OT1_(i6, i19 | 0, i4, i5);
   if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
    i19 = (HEAP32[i6 >> 2] | 0) + 4 | 0;
    i13 = HEAP32[i19 >> 2] | 0;
    i12 = HEAP32[i14 >> 2] | 0;
    HEAP32[i14 >> 2] = 0;
    HEAP32[i19 >> 2] = i12;
    if ((i13 | 0) == 0) {
     i7 = i15;
     break;
    }
    __ZdlPv(i13);
    i7 = i15;
    break;
   } else {
    i13 = HEAP32[i14 >> 2] | 0;
    if ((i13 | 0) == 0) {
     i7 = i15;
     break;
    }
    __ZdlPv(i13);
    i7 = i15;
    break;
   }
  }
 } while (0);
 i6 = 0;
 while (1) {
  HEAPF32[i7 + (i6 << 4) >> 2] = +0;
  HEAPF32[i7 + (i6 << 4) + 4 >> 2] = +0;
  HEAPF32[i7 + (i6 << 4) + 8 >> 2] = +-1;
  HEAPF32[i7 + (i6 << 4) + 12 >> 2] = +-1;
  i5 = i6 + 1 | 0;
  if (i5 >>> 0 < 256 >>> 0) {
   i6 = i5;
  } else {
   i23 = i7;
   break;
  }
 }
 STACKTOP = i3;
 return i23 | 0;
}
function __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 do {
  if ((i2 | 0) == 0) {
   HEAP8[i1 | 0] = 1;
   i7 = i1 + 4 | 0;
  } else {
   i8 = i1 + 1028 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   L4 : do {
    if ((i9 | 0) == 0) {
     i10 = __ZN3WTF10fastMallocEj(20) | 0;
     i11 = i10;
     _memset(i10 | 0, 0, 20) | 0;
     i10 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = i11;
     if ((i10 | 0) == 0) {
      i12 = i11;
      break;
     }
     i11 = HEAP32[i10 >> 2] | 0;
     if ((i11 | 0) != 0) {
      i13 = HEAP32[i10 + 4 >> 2] | 0;
      if ((i13 | 0) > 0) {
       i14 = 0;
       while (1) {
        do {
         if ((HEAP32[i11 + (i14 << 3) >> 2] | 0) != -1) {
          i15 = HEAP32[i11 + (i14 << 3) + 4 >> 2] | 0;
          if ((i15 | 0) == 0) {
           break;
          }
          __ZdlPv(i15);
         }
        } while (0);
        i14 = i14 + 1 | 0;
        if ((i14 | 0) >= (i13 | 0)) {
         break;
        }
       }
      }
      __ZN3WTF8fastFreeEPv(i11);
     }
     __ZN3WTF8fastFreeEPv(i10);
     i12 = HEAP32[i8 >> 2] | 0;
    } else {
     i13 = HEAP32[i9 + 8 >> 2] | 0;
     i14 = HEAP32[i9 >> 2] | 0;
     i15 = ~(i2 << 15) + i2 | 0;
     i16 = (i15 >>> 10 ^ i15) * 9 & -1;
     i15 = i16 >>> 6 ^ i16;
     i16 = i15 + ~(i15 << 11) | 0;
     i15 = i16 >>> 16 ^ i16;
     if ((i14 | 0) == 0) {
      i12 = i9;
      break;
     }
     i16 = i13 & i15;
     i17 = i14 + (i16 << 3) | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     if ((i18 | 0) == (i2 | 0)) {
      i19 = i17;
     } else {
      i17 = (i15 >>> 23) + ~i15 | 0;
      i15 = i17 << 12 ^ i17;
      i17 = i15 >>> 7 ^ i15;
      i15 = i17 << 2 ^ i17;
      i17 = i15 >>> 20 ^ i15 | 1;
      i15 = 0;
      i20 = i16;
      i16 = i18;
      while (1) {
       if ((i16 | 0) == 0) {
        i12 = i9;
        break L4;
       }
       i18 = (i15 | 0) == 0 ? i17 : i15;
       i21 = i18 + i20 & i13;
       i22 = i14 + (i21 << 3) | 0;
       i23 = HEAP32[i22 >> 2] | 0;
       if ((i23 | 0) == (i2 | 0)) {
        i19 = i22;
        break;
       } else {
        i15 = i18;
        i20 = i21;
        i16 = i23;
       }
      }
     }
     if ((i19 | 0) == 0) {
      i12 = i9;
      break;
     }
     i16 = HEAP32[i19 + 4 >> 2] | 0;
     if ((i16 | 0) == 0) {
      i12 = i9;
      break;
     } else {
      i24 = i16;
     }
     STACKTOP = i3;
     return i24 | 0;
    }
   } while (0);
   i9 = __Znwj(1024) | 0;
   HEAP32[i4 >> 2] = i2;
   i8 = i5 | 0;
   HEAP32[i8 >> 2] = i9;
   __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EEiNS_10PassOwnPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIiS8_SA_SC_SI_SF_EEEEOT0_OT1_(i6, i12 | 0, i4, i5);
   if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
    i16 = (HEAP32[i6 >> 2] | 0) + 4 | 0;
    i20 = HEAP32[i16 >> 2] | 0;
    i15 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = 0;
    HEAP32[i16 >> 2] = i15;
    if ((i20 | 0) == 0) {
     i7 = i9;
     break;
    }
    __ZdlPv(i20);
    i7 = i9;
    break;
   } else {
    i20 = HEAP32[i8 >> 2] | 0;
    if ((i20 | 0) == 0) {
     i7 = i9;
     break;
    }
    __ZdlPv(i20);
    i7 = i9;
    break;
   }
  }
 } while (0);
 i6 = 0;
 while (1) {
  HEAPF32[i7 + (i6 << 2) >> 2] = +-1;
  i5 = i6 + 1 | 0;
  if (i5 >>> 0 < 256 >>> 0) {
   i6 = i5;
  } else {
   i24 = i7;
   break;
  }
 }
 STACKTOP = i3;
 return i24 | 0;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapINS3_9FloatRectEE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIjEENS_7HashMapIiS8_SD_NS_10HashTraitsIiEENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EEiNS_10PassOwnPtrIS7_EEEENS_18HashTableAddResultINS_17HashTableIteratorIiS9_SB_SD_SJ_SG_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapINS3_9FloatRectEE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIjEENS_7HashMapIiS8_SD_NS_10HashTraitsIiEENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8 + ~(i8 << 15) | 0;
 i7 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i7 >>> 6 ^ i7;
 i7 = i9 + ~(i9 << 11) | 0;
 i9 = i7 >>> 16 ^ i7;
 i7 = i9 & i6;
 i11 = i10 + (i7 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i9 >>> 23) + ~i9 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i7;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i6;
    i25 = i10 + (i24 << 3) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i16 = i23;
     i17 = i22;
     i18 = i24;
     i19 = i25;
     i20 = i26;
    }
   }
   if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i21 | 0) == 10) {
    if ((i22 | 0) == 0) {
     i13 = i25;
     i14 = i8;
     break;
    }
    i20 = i22;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i13 = i22;
    i14 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = i13 + 4 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 i22 = i4 | 0;
 i4 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 HEAP32[i14 >> 2] = i4;
 if ((i3 | 0) != 0) {
  __ZdlPv(i3);
 }
 i3 = i2 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i2 + 4 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i22 = i14 << 1;
   i29 = (i4 * 6 & -1 | 0) < (i22 | 0) ? i14 : i22;
  }
  i22 = __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapINS3_9FloatRectEE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIjEENS_7HashMapIiS8_SD_NS_10HashTraitsIiEENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i29, i13) | 0;
  i27 = i22;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EEiNS_10PassOwnPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIiS8_SA_SC_SI_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8 + ~(i8 << 15) | 0;
 i7 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i7 >>> 6 ^ i7;
 i7 = i9 + ~(i9 << 11) | 0;
 i9 = i7 >>> 16 ^ i7;
 i7 = i9 & i6;
 i11 = i10 + (i7 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i9 >>> 23) + ~i9 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i7;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i6;
    i25 = i10 + (i24 << 3) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i16 = i23;
     i17 = i22;
     i18 = i24;
     i19 = i25;
     i20 = i26;
    }
   }
   if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i21 | 0) == 10) {
    if ((i22 | 0) == 0) {
     i13 = i25;
     i14 = i8;
     break;
    }
    i20 = i22;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i13 = i22;
    i14 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = i13 + 4 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 i22 = i4 | 0;
 i4 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 HEAP32[i14 >> 2] = i4;
 if ((i3 | 0) != 0) {
  __ZdlPv(i3);
 }
 i3 = i2 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i2 + 4 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i22 = i14 << 1;
   i29 = (i4 * 6 & -1 | 0) < (i22 | 0) ? i14 : i22;
  }
  i22 = __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i29, i13) | 0;
  i27 = i22;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCoreL19applyFontTransformsEPNS_11GlyphBufferEbRiPKNS_14SimpleFontDataERNS_13WidthIteratorEjRN3WTF6VectorINSt3__14pairIiNS_42OriginalAdvancesForCharacterTreatedAsSpaceEEELj64ENS8_15CrashOnOverflowEEE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var d8 = +0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0, i16 = 0, d17 = +0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0;
 if ((i1 | 0) == 0) {
  d8 = +0;
  return +d8;
 }
 i9 = HEAP32[i1 + 8 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 if ((i9 | 0) <= (i10 + 1 | 0)) {
  d8 = +0;
  return +d8;
 }
 i11 = i1 + 57376 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) < (i9 | 0)) {
  i13 = i10;
  d14 = +0;
  while (1) {
   d15 = d14 - +HEAPF32[i12 + (i13 << 3) >> 2];
   i16 = i13 + 1 | 0;
   if ((i16 | 0) < (i9 | 0)) {
    i13 = i16;
    d14 = d15;
   } else {
    d17 = d15;
    break;
   }
  }
 } else {
  d17 = +0;
 }
 do {
  if (!i2) {
   i13 = i9 - 1 | 0;
   if ((i13 | 0) > (i10 | 0)) {
    i18 = i10;
    i19 = i13;
   } else {
    break;
   }
   while (1) {
    __ZN7WebCore11GlyphBuffer4swapEii(i1, i18, i19);
    i18 = i18 + 1 | 0;
    i19 = i19 - 1 | 0;
    if ((i18 | 0) >= (i19 | 0)) {
     break;
    }
   }
  }
 } while (0);
 do {
  if ((HEAP32[i4 + 76 >> 2] | 0) != 0) {
   if ((i6 & 1 | 0) == 0) {
    break;
   }
   i19 = HEAP32[(HEAP32[i5 + 4 >> 2] | 0) + 32 >> 2] | 0;
   FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i19 >> 2] | 0) + 20 >> 2] & 1](i19, i4, i5, i1, HEAP32[i3 >> 2] | 0) | 0;
  }
 } while (0);
 do {
  if (!i2) {
   i5 = HEAP32[i3 >> 2] | 0;
   i4 = i9 - 1 | 0;
   if ((i4 | 0) > (i5 | 0)) {
    i20 = i5;
    i21 = i4;
   } else {
    break;
   }
   while (1) {
    __ZN7WebCore11GlyphBuffer4swapEii(i1, i20, i21);
    i20 = i20 + 1 | 0;
    i21 = i21 - 1 | 0;
    if ((i20 | 0) >= (i21 | 0)) {
     break;
    }
   }
  }
 } while (0);
 i21 = i7 + 8 | 0;
 if ((HEAP32[i21 >> 2] | 0) == 0) {
  i22 = 0;
 } else {
  i20 = i7 | 0;
  i1 = 0;
  while (1) {
   i2 = HEAP32[i20 >> 2] | 0;
   i4 = HEAP32[i2 + (i1 << 4) >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     if ((HEAP8[i2 + (i1 << 4) + 4 | 0] & 1) != 0) {
      break;
     }
     HEAPF32[(HEAP32[i11 >> 2] | 0) + (i4 - 1 << 3) >> 2] = +HEAPF32[i2 + (i1 << 4) + 8 >> 2];
    }
   } while (0);
   HEAPF32[(HEAP32[i11 >> 2] | 0) + (i4 << 3) >> 2] = +HEAPF32[i2 + (i1 << 4) + 12 >> 2];
   i5 = i1 + 1 | 0;
   i6 = HEAP32[i21 >> 2] | 0;
   if (i5 >>> 0 < i6 >>> 0) {
    i1 = i5;
   } else {
    i22 = i6;
    break;
   }
  }
 }
 i1 = i7 + 4 | 0;
 do {
  if ((HEAP32[i1 >> 2] | 0) != 0) {
   if ((i22 | 0) != 0) {
    HEAP32[i21 >> 2] = 0;
   }
   i11 = i7 | 0;
   i20 = HEAP32[i11 >> 2] | 0;
   i6 = i7 + 12 | 0;
   if ((i6 | 0) == (i20 | 0) | (i20 | 0) == 0) {
    i23 = i20;
   } else {
    HEAP32[i11 >> 2] = 0;
    HEAP32[i1 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i20);
    i23 = HEAP32[i11 >> 2] | 0;
   }
   if ((i23 | 0) != 0) {
    break;
   }
   HEAP32[i11 >> 2] = i6;
   HEAP32[i1 >> 2] = 64;
  }
 } while (0);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) < (i9 | 0)) {
  d14 = d17;
  i23 = i1;
  while (1) {
   d15 = d14 + +HEAPF32[i12 + (i23 << 3) >> 2];
   i1 = i23 + 1 | 0;
   if ((i1 | 0) < (i9 | 0)) {
    d14 = d15;
    i23 = i1;
   } else {
    d24 = d15;
    break;
   }
  }
 } else {
  d24 = d17;
 }
 HEAP32[i3 >> 2] = i9;
 d8 = d24;
 return +d8;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapINS3_9FloatRectEE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIjEENS_7HashMapIiS8_SD_NS_10HashTraitsIiEENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i1, i2, i3) {
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
    __ZdlPv(i16);
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
    __ZdlPv(i1);
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
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i1, i2, i3) {
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
    __ZdlPv(i16);
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
    __ZdlPv(i1);
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
function __ZN3WTF9HashTableIPKN7WebCore14SimpleFontDataES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPKN7WebCore14SimpleFontDataES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6expandEPS4_(i2, 0) | 0;
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
   if ((i13 | 0) == 6) {
    i19 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 8) {
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
  i13 = __ZN3WTF9HashTableIPKN7WebCore14SimpleFontDataES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6expandEPS4_(i2, i25) | 0;
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
function __ZN3WTF9HashTableIPKN7WebCore14SimpleFontDataES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6expandEPS4_(i1, i2) {
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
function __ZN7WebCore11GlyphBuffer4swapEii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if (i6 >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = i1 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i8 + (i2 << 2) | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if (i6 >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAP32[i9 >> 2] = HEAP32[i8 + (i3 << 2) >> 2];
 if ((HEAP32[i5 >> 2] | 0) >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAP32[(HEAP32[i7 >> 2] | 0) + (i3 << 2) >> 2] = i10;
 i10 = i1 + 8216 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 if (i7 >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i5 = i1 + 8208 | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 i9 = i4 | 0;
 i6 = i8 + (i2 * 24 & -1) | 0;
 HEAP32[i9 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 HEAP32[i9 + 16 >> 2] = HEAP32[i6 + 16 >> 2];
 HEAP32[i9 + 20 >> 2] = HEAP32[i6 + 20 >> 2];
 if (i7 >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = i8 + (i3 * 24 & -1) | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 HEAP32[i6 + 16 >> 2] = HEAP32[i7 + 16 >> 2];
 HEAP32[i6 + 20 >> 2] = HEAP32[i7 + 20 >> 2];
 if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i10 = (HEAP32[i5 >> 2] | 0) + (i3 * 24 & -1) | 0;
 HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 HEAP32[i10 + 16 >> 2] = HEAP32[i9 + 16 >> 2];
 HEAP32[i10 + 20 >> 2] = HEAP32[i9 + 20 >> 2];
 i9 = i1 + 57384 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if (i10 >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i5 = i1 + 57376 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + (i2 << 3) | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i6 = HEAP32[i7 + 4 >> 2] | 0;
 if (i10 >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i10 = i1 + (i3 << 3) | 0;
 i1 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i7 + 4 >> 2] = i1;
 if ((HEAP32[i9 >> 2] | 0) >>> 0 > i3 >>> 0) {
  i9 = (HEAP32[i5 >> 2] | 0) + (i3 << 3) | 0;
  HEAP32[i9 >> 2] = i2;
  HEAP32[i9 + 4 >> 2] = i6;
  STACKTOP = i4;
  return;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore13WidthIteratorC2EPKNS_4FontERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS7_7PtrHashISB_EENS7_10HashTraitsISB_EEEEbb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, i16 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 HEAP32[i1 >> 2] = i2;
 i9 = i1 + 4 | 0;
 HEAP32[i9 >> 2] = i3;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAPF32[i1 + 12 >> 2] = +0;
 i10 = i3 + 24 | 0;
 i11 = (HEAP32[i10 >> 2] | 0) >>> 1 & 1 ^ 1;
 HEAP8[i1 + 24 | 0] = i11;
 HEAPF32[i1 + 28 >> 2] = +0;
 i12 = i1 + 32 | 0;
 HEAP32[i12 >> 2] = i1 + 44;
 i13 = i1 + 36 | 0;
 HEAP32[i13 >> 2] = 10;
 HEAP32[i1 + 40 >> 2] = 0;
 _memset(i1 + 84 | 0, 0, 16) | 0;
 HEAP32[i1 + 100 >> 2] = (HEAP32[i2 + 36 >> 2] | 0) >>> 8 & 3;
 HEAP32[i1 + 104 >> 2] = i4;
 HEAP8[i1 + 108 | 0] = i5 & 1;
 HEAPF32[i1 + 112 >> 2] = +1.1754943508222875e-38;
 HEAPF32[i1 + 116 >> 2] = 3.4028234663852886e+38;
 HEAPF32[i1 + 120 >> 2] = +0;
 HEAPF32[i1 + 124 >> 2] = +0;
 HEAP8[i1 + 128 | 0] = i6 & 1;
 d14 = +HEAPF32[i3 + 20 >> 2];
 i6 = i1 + 16 | 0;
 HEAPF32[i6 >> 2] = d14;
 do {
  if (d14 != +0) {
   HEAP8[i8] = i11;
   i5 = HEAP32[i10 >> 2] | 0;
   if ((i5 & 4 | 0) == 0) {
    i15 = __ZN7WebCore4Font25expansionOpportunityCountEPKtjNS_13TextDirectionERb(HEAP32[i3 >> 2] | 0, HEAP32[i3 + 8 >> 2] | 0, i5 >>> 4 & 1, i8) | 0;
   } else {
    i15 = __ZN7WebCore4Font25expansionOpportunityCountEPKhjNS_13TextDirectionERb(HEAP32[i3 >> 2] | 0, HEAP32[i3 + 8 >> 2] | 0, i5 >>> 4 & 1, i8) | 0;
   }
   if ((HEAP8[i8] & 1) == 0) {
    i16 = i15;
   } else {
    i16 = i15 - 1 + (HEAP32[(HEAP32[i9 >> 2] | 0) + 24 >> 2] & 1) | 0;
   }
   if ((i16 | 0) == 0) {
    HEAPF32[i1 + 20 >> 2] = +0;
    break;
   } else {
    HEAPF32[i1 + 20 >> 2] = +HEAPF32[i6 >> 2] / +(i16 >>> 0 >>> 0);
    break;
   }
  } else {
   HEAPF32[i1 + 20 >> 2] = +0;
  }
 } while (0);
 i1 = HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] | 0;
 if (i1 >>> 0 <= 10 >>> 0) {
  STACKTOP = i7;
  return;
 }
 if (i1 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i9 = __ZN3WTF18fastMallocGoodSizeEj(i1 << 2) | 0;
 HEAP32[i13 >> 2] = i9 >>> 2;
 HEAP32[i12 >> 2] = __ZN3WTF10fastMallocEj(i9) | 0;
 STACKTOP = i7;
 return;
}
function __ZN7WebCore13WidthIteratorC1EPKNS_4FontERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS7_7PtrHashISB_EENS7_10HashTraitsISB_EEEEbb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, i16 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 HEAP32[i1 >> 2] = i2;
 i9 = i1 + 4 | 0;
 HEAP32[i9 >> 2] = i3;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAPF32[i1 + 12 >> 2] = +0;
 i10 = i3 + 24 | 0;
 i11 = (HEAP32[i10 >> 2] | 0) >>> 1 & 1 ^ 1;
 HEAP8[i1 + 24 | 0] = i11;
 HEAPF32[i1 + 28 >> 2] = +0;
 i12 = i1 + 32 | 0;
 HEAP32[i12 >> 2] = i1 + 44;
 i13 = i1 + 36 | 0;
 HEAP32[i13 >> 2] = 10;
 HEAP32[i1 + 40 >> 2] = 0;
 _memset(i1 + 84 | 0, 0, 16) | 0;
 HEAP32[i1 + 100 >> 2] = (HEAP32[i2 + 36 >> 2] | 0) >>> 8 & 3;
 HEAP32[i1 + 104 >> 2] = i4;
 HEAP8[i1 + 108 | 0] = i5 & 1;
 HEAPF32[i1 + 112 >> 2] = +1.1754943508222875e-38;
 HEAPF32[i1 + 116 >> 2] = 3.4028234663852886e+38;
 HEAPF32[i1 + 120 >> 2] = +0;
 HEAPF32[i1 + 124 >> 2] = +0;
 HEAP8[i1 + 128 | 0] = i6 & 1;
 d14 = +HEAPF32[i3 + 20 >> 2];
 i6 = i1 + 16 | 0;
 HEAPF32[i6 >> 2] = d14;
 do {
  if (d14 != +0) {
   HEAP8[i8] = i11;
   i5 = HEAP32[i10 >> 2] | 0;
   if ((i5 & 4 | 0) == 0) {
    i15 = __ZN7WebCore4Font25expansionOpportunityCountEPKtjNS_13TextDirectionERb(HEAP32[i3 >> 2] | 0, HEAP32[i3 + 8 >> 2] | 0, i5 >>> 4 & 1, i8) | 0;
   } else {
    i15 = __ZN7WebCore4Font25expansionOpportunityCountEPKhjNS_13TextDirectionERb(HEAP32[i3 >> 2] | 0, HEAP32[i3 + 8 >> 2] | 0, i5 >>> 4 & 1, i8) | 0;
   }
   if ((HEAP8[i8] & 1) == 0) {
    i16 = i15;
   } else {
    i16 = i15 - 1 + (HEAP32[(HEAP32[i9 >> 2] | 0) + 24 >> 2] & 1) | 0;
   }
   if ((i16 | 0) == 0) {
    HEAPF32[i1 + 20 >> 2] = +0;
    break;
   } else {
    HEAPF32[i1 + 20 >> 2] = +HEAPF32[i6 >> 2] / +(i16 >>> 0 >>> 0);
    break;
   }
  } else {
   HEAPF32[i1 + 20 >> 2] = +0;
  }
 } while (0);
 i1 = HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] | 0;
 if (i1 >>> 0 <= 10 >>> 0) {
  STACKTOP = i7;
  return;
 }
 if (i1 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i9 = __ZN3WTF18fastMallocGoodSizeEj(i1 << 2) | 0;
 HEAP32[i13 >> 2] = i9 >>> 2;
 HEAP32[i12 >> 2] = __ZN3WTF10fastMallocEj(i9) | 0;
 STACKTOP = i7;
 return;
}
function __ZN3WTF6VectorINSt3__14pairIiN7WebCore42OriginalAdvancesForCharacterTreatedAsSpaceEEELj64ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i7 = i5 + (i6 << 4) | 0;
 do {
  if (i2 >>> 0 > 64 >>> 0) {
   if (i2 >>> 0 > 268435455 >>> 0) {
    _WTFCrash();
   } else {
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 4) | 0;
    HEAP32[i3 >> 2] = i8 >>> 4;
    i9 = __ZN3WTF10fastMallocEj(i8) | 0;
    HEAP32[i4 >> 2] = i9;
    i10 = i9;
    break;
   }
  } else {
   i9 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i9;
   HEAP32[i3 >> 2] = 64;
   i10 = i9;
  }
 } while (0);
 if ((i6 | 0) != 0) {
  i6 = i5;
  i2 = i10;
  while (1) {
   i10 = i2;
   i9 = i6;
   HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i10 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
   HEAP32[i10 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
   HEAP32[i10 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
   i9 = i6 + 16 | 0;
   if ((i9 | 0) == (i7 | 0)) {
    break;
   } else {
    i6 = i9;
    i2 = i2 + 16 | 0;
   }
  }
 }
 if ((i1 + 12 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN3WTF6VectorIN7WebCore9FloatSizeELj2048ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i7 = i5 + (i6 << 3) | 0;
 do {
  if (i2 >>> 0 > 2048 >>> 0) {
   if (i2 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   } else {
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
    HEAP32[i3 >> 2] = i8 >>> 3;
    i9 = __ZN3WTF10fastMallocEj(i8) | 0;
    HEAP32[i4 >> 2] = i9;
    i10 = i9;
    break;
   }
  } else {
   i9 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i9;
   HEAP32[i3 >> 2] = 2048;
   i10 = i9;
  }
 } while (0);
 if ((i6 | 0) != 0) {
  i6 = i5;
  i2 = i10;
  while (1) {
   i10 = i6;
   i9 = i2;
   i8 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i9 + 4 >> 2] = i8;
   i8 = i6 + 8 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   } else {
    i6 = i8;
    i2 = i2 + 8 | 0;
   }
  }
 }
 if ((i1 + 12 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore13WidthIterator7advanceEiPNS_11GlyphBufferE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i8 = HEAP32[i7 + 8 >> 2] | 0;
 i9 = (i8 | 0) < (i2 | 0) ? i8 : i2;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if (i2 >>> 0 >= i9 >>> 0) {
  i10 = 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 if ((HEAP32[i7 + 24 >> 2] & 4 | 0) == 0) {
  __ZN7WebCore30SurrogatePairAwareTextIteratorC1EPKtiii(i6, (HEAP32[i7 >> 2] | 0) + (i2 << 1) | 0, i2, i9, i8);
  i10 = __ZN7WebCore13WidthIterator15advanceInternalINS_30SurrogatePairAwareTextIteratorEEEjRT_PNS_11GlyphBufferE(i1, i6, i3) | 0;
  STACKTOP = i4;
  return i10 | 0;
 } else {
  HEAP32[i5 >> 2] = (HEAP32[i7 >> 2] | 0) + i2;
  HEAP32[i5 + 4 >> 2] = i2;
  HEAP32[i5 + 8 >> 2] = i9;
  i10 = __ZN7WebCore13WidthIterator15advanceInternalINS_18Latin1TextIteratorEEEjRT_PNS_11GlyphBufferE(i1, i5, i3) | 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorI13cairo_glyph_tLj2048ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i2 >>> 0 > 2048 >>> 0) {
   if (i2 >>> 0 > 178956970 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 24 & -1) | 0;
    HEAP32[i3 >> 2] = (i7 >>> 0) / 24 & -1;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 16 | 0;
    break;
   }
  } else {
   i8 = i1 + 16 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 2048;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 * 24 & -1) | 0;
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF6VectorIPKN7WebCore14SimpleFontDataELj2048ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i2 >>> 0 > 2048 >>> 0) {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i7 >>> 2;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 2048;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 << 2) | 0;
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF6VectorIiLj10ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i2 >>> 0 > 10 >>> 0) {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i7 >>> 2;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 10;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 << 2) | 0;
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF6OwnPtrIN7WebCore15GlyphMetricsMapINS1_9FloatRectEEEEaSERKNS_10PassOwnPtrIS4_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  return i1 | 0;
 }
 i2 = HEAP32[i4 + 4100 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) != 0) {
   i5 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i5 | 0) > 0) {
    i6 = 0;
    while (1) {
     do {
      if ((HEAP32[i3 + (i6 << 3) >> 2] | 0) != -1) {
       i7 = HEAP32[i3 + (i6 << 3) + 4 >> 2] | 0;
       if ((i7 | 0) == 0) {
        break;
       }
       __ZdlPv(i7);
      }
     } while (0);
     i6 = i6 + 1 | 0;
     if ((i6 | 0) >= (i5 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZdlPv(i4 | 0);
 return i1 | 0;
}
function __ZN7WebCore13WidthIterator21glyphDataForCharacterEibiRj(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 32 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = HEAP32[i2 >> 2] | 0;
  __ZNK7WebCore10FontGlyphs28glyphDataAndPageForCharacterERKNS_15FontDescriptionEibNS_15FontDataVariantE(i8, HEAP32[i10 + 24 >> 2] | 0, i10 | 0, i3, i4, 0);
  i10 = i8;
  i8 = i1;
  i11 = HEAP32[i10 + 4 >> 2] | 0;
  HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i8 + 4 >> 2] = i11;
  STACKTOP = i7;
  return;
 } else {
  FUNCTION_TABLE_viiiiiiii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 1](i1, i9, HEAP32[i2 >> 2] | 0, i2, i3, i4, i5, i6);
  STACKTOP = i7;
  return;
 }
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
function dynCall_viiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 FUNCTION_TABLE_viiiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0);
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
function b5(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 abort(5);
}
function dynCall_fiif(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 return +FUNCTION_TABLE_fiif[i1 & 1](i2 | 0, i3 | 0, +d4);
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
function b6(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(6);
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
function b4(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(4);
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
function b2(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(2);
 return +0;
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
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b3() {
 abort(3);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_fiif = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iiiiii = [b4,b4];
  var FUNCTION_TABLE_viiiiiiii = [b5,b5];
  var FUNCTION_TABLE_viiiiii = [b6,b6,__ZN7WebCore13WidthIteratorC2EPKNS_4FontERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS7_7PtrHashISB_EENS7_10HashTraitsISB_EEEEbb,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vi: dynCall_vi, dynCall_fiif: dynCall_fiif, dynCall_v: dynCall_v, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiiiiiii: dynCall_viiiiiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vi": invoke_vi, "invoke_fiif": invoke_fiif, "invoke_v": invoke_v, "invoke_iiiiii": invoke_iiiiii, "invoke_viiiiiiii": invoke_viiiiiiii, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "_floorf": _floorf, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_malloc": _malloc, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fmod": _fmod, "_fflush": _fflush, "_round": _round, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore4Font28s_roundingHackCharacterTableE": __ZN7WebCore4Font28s_roundingHackCharacterTableE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_fiif = Module["dynCall_fiif"] = asm["dynCall_fiif"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = asm["dynCall_viiiiiiii"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore13WidthIterator7advanceEiPNS_11GlyphBufferE","__ZN7WebCore13WidthIteratorC2EPKNS_4FontERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS7_7PtrHashISB_EENS7_10HashTraitsISB_EEEEbb","__ZN3WTF6OwnPtrIN7WebCore15GlyphMetricsMapINS1_9FloatRectEEEEaSERKNS_10PassOwnPtrIS4_EE","__ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapINS3_9FloatRectEE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIjEENS_7HashMapIiS8_SD_NS_10HashTraitsIiEENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_","__ZN3WTF6VectorINSt3__14pairIiN7WebCore42OriginalAdvancesForCharacterTreatedAsSpaceEEELj64ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3WTF9HashTableIPKN7WebCore14SimpleFontDataES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6expandEPS4_","__ZN3WTF6VectorI13cairo_glyph_tLj2048ENS_15CrashOnOverflowEE15reserveCapacityEj","_memset","__ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_","__ZN3WTF6VectorIN7WebCore9FloatSizeELj2048ENS_15CrashOnOverflowEE15reserveCapacityEj","_memcpy","__ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj","__ZN3WTF6VectorIiLj10ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCoreL19applyFontTransformsEPNS_11GlyphBufferEbRiPKNS_14SimpleFontDataERNS_13WidthIteratorEjRN3WTF6VectorINSt3__14pairIiNS_42OriginalAdvancesForCharacterTreatedAsSpaceEEELj64ENS8_15CrashOnOverflowEEE","__ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EEiNS_10PassOwnPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIiS8_SA_SC_SI_SF_EEEEOT0_OT1_","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore15GlyphMetricsMapINS_9FloatRectEE18locatePageSlowCaseEj","__ZN3WTF9HashTableIPKN7WebCore14SimpleFontDataES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZN7WebCore13WidthIterator21glyphDataForCharacterEibiRj","__ZN7WebCore13WidthIterator15advanceInternalINS_30SurrogatePairAwareTextIteratorEEEjRT_PNS_11GlyphBufferE","__ZN7WebCore11GlyphBuffer4swapEii","__ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapINS3_9FloatRectEE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIjEENS_7HashMapIiS8_SD_NS_10HashTraitsIiEENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EEiNS_10PassOwnPtrIS7_EEEENS_18HashTableAddResultINS_17HashTableIteratorIiS9_SB_SD_SJ_SG_EEEEOT0_OT1_","__ZN7WebCore13WidthIterator15advanceInternalINS_18Latin1TextIteratorEEEjRT_PNS_11GlyphBufferE","__ZN7WebCore11GlyphBuffer3addEtPKNS_14SimpleFontDataEfPKNS_9FloatSizeE","__ZN3WTF6VectorIPKN7WebCore14SimpleFontDataELj2048ENS_15CrashOnOverflowEE15reserveCapacityEj"]

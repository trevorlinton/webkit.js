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
H_BASE = parentModule["_malloc"](8 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 8;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore21TextCheckingParagraphC1EN3WTF10PassRefPtrINS_5RangeEEE;
var __ZN7WebCore21TextCheckingParagraphC1EN3WTF10PassRefPtrINS_5RangeEEES4_;
var __ZN7WebCore21TextCheckingParagraphD1Ev;
var __ZN7WebCore18TextCheckingHelperC1EPNS_12EditorClientEN3WTF10PassRefPtrINS_5RangeEEE;
var __ZN7WebCore18TextCheckingHelperD1Ev;
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
;
;
;
;
;
;
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
  var invoke_viiiiii=env.invoke_viiiiii;
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
function __ZN7WebCore18TextCheckingHelper32findFirstMisspellingOrBadGrammarEbRbRiRNS_13GrammarDetailE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, i123 = 0, i124 = 0, i125 = 0, i126 = 0, i127 = 0, i128 = 0, i129 = 0, i130 = 0, i131 = 0, i132 = 0, i133 = 0, i134 = 0, i135 = 0, i136 = 0, i137 = 0, i138 = 0, i139 = 0, i140 = 0, i141 = 0, i142 = 0, i143 = 0, i144 = 0, i145 = 0, i146 = 0, i147 = 0, i148 = 0, i149 = 0, i150 = 0, i151 = 0, i152 = 0, i153 = 0, i154 = 0, i155 = 0, i156 = 0, i157 = 0, i158 = 0, i159 = 0, i160 = 0, i161 = 0, i162 = 0, i163 = 0, i164 = 0, i165 = 0, i166 = 0, i167 = 0, i168 = 0, i169 = 0, i170 = 0, i171 = 0, i172 = 0, i173 = 0, i174 = 0, i175 = 0, i176 = 0, i177 = 0, i178 = 0, i179 = 0, i180 = 0, i181 = 0, i182 = 0, i183 = 0, i184 = 0, i185 = 0, i186 = 0, i187 = 0, i188 = 0, i189 = 0, i190 = 0, i191 = 0, i192 = 0, i193 = 0, i194 = 0, i195 = 0, i196 = 0, i197 = 0, i198 = 0, i199 = 0, i200 = 0, i201 = 0, i202 = 0, i203 = 0, i204 = 0, i205 = 0, i206 = 0, i207 = 0, i208 = 0, i209 = 0, i210 = 0, i211 = 0, i212 = 0, i213 = 0, i214 = 0, i215 = 0, i216 = 0, i217 = 0, i218 = 0, i219 = 0, i220 = 0, i221 = 0, i222 = 0, i223 = 0, i224 = 0, i225 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 656 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 40 | 0;
 i14 = i7 + 48 | 0;
 i15 = i7 + 56 | 0;
 i16 = i7 + 64 | 0;
 i17 = i7 + 72 | 0;
 i18 = i7 + 80 | 0;
 i19 = i7 + 88 | 0;
 i20 = i7 + 96 | 0;
 i21 = i7 + 104 | 0;
 i22 = i7 + 112 | 0;
 i23 = i7 + 120 | 0;
 i24 = i7 + 128 | 0;
 i25 = i7 + 136 | 0;
 i26 = i7 + 144 | 0;
 i27 = i7 + 152 | 0;
 i28 = i7 + 160 | 0;
 i29 = i7 + 168 | 0;
 i30 = i7 + 176 | 0;
 i31 = i7 + 184 | 0;
 i32 = i7 + 192 | 0;
 i33 = i7 + 200 | 0;
 i34 = i7 + 208 | 0;
 i35 = i7 + 216 | 0;
 i36 = i7 + 224 | 0;
 i37 = i7 + 232 | 0;
 i38 = i7 + 248 | 0;
 i39 = i7 + 264 | 0;
 i40 = i7 + 280 | 0;
 i41 = i7 + 296 | 0;
 i42 = i7 + 312 | 0;
 i43 = i7 + 328 | 0;
 i44 = i7 + 336 | 0;
 i45 = i7 + 352 | 0;
 i46 = i7 + 368 | 0;
 i47 = i7 + 384 | 0;
 i48 = i7 + 400 | 0;
 i49 = i7 + 416 | 0;
 i50 = i7 + 432 | 0;
 i51 = i7 + 440 | 0;
 i52 = i7 + 456 | 0;
 i53 = i7 + 472 | 0;
 i54 = i7 + 480 | 0;
 i55 = i7 + 496 | 0;
 i56 = i7 + 504 | 0;
 i57 = i7 + 512 | 0;
 i58 = i7 + 520 | 0;
 i59 = i7 + 536 | 0;
 i60 = i7 + 552 | 0;
 i61 = i7 + 560 | 0;
 i62 = i7 + 576 | 0;
 i63 = i7 + 592 | 0;
 i64 = i7 + 608 | 0;
 i65 = i7 + 624 | 0;
 i66 = i7 + 640 | 0;
 i67 = i2 + 4 | 0;
 i68 = HEAP32[i67 >> 2] | 0;
 do {
  if ((i68 | 0) != 0) {
   i69 = HEAP32[(HEAP32[i68 + 4 >> 2] | 0) + 332 >> 2] | 0;
   if ((i69 | 0) == 0) {
    break;
   }
   if ((HEAP8[(HEAP32[i69 + 36 >> 2] | 0) + 192 | 0] & 8) == 0) {
    break;
   }
   HEAP8[i4] = 1;
   HEAP32[i5 >> 2] = 0;
   i69 = i6 | 0;
   HEAP32[i69 >> 2] = -1;
   i70 = i6 + 4 | 0;
   HEAP32[i70 >> 2] = 0;
   i71 = i6 + 8 | 0;
   i72 = i6 + 12 | 0;
   do {
    if ((HEAP32[i72 >> 2] | 0) != 0) {
     i73 = i6 + 16 | 0;
     i74 = HEAP32[i73 >> 2] | 0;
     i75 = i71 | 0;
     if ((i74 | 0) != 0) {
      i76 = HEAP32[i75 >> 2] | 0;
      i77 = i76 + (i74 << 2) | 0;
      i74 = i76;
      while (1) {
       i76 = HEAP32[i74 >> 2] | 0;
       do {
        if ((i76 | 0) != 0) {
         i78 = i76 | 0;
         i79 = (HEAP32[i78 >> 2] | 0) - 2 | 0;
         if ((i79 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i76);
          break;
         } else {
          HEAP32[i78 >> 2] = i79;
          break;
         }
        }
       } while (0);
       i74 = i74 + 4 | 0;
       if ((i74 | 0) == (i77 | 0)) {
        break;
       }
      }
      HEAP32[i73 >> 2] = 0;
     }
     i77 = HEAP32[i75 >> 2] | 0;
     if ((i77 | 0) == 0) {
      break;
     }
     HEAP32[i75 >> 2] = 0;
     HEAP32[i72 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i77);
    }
   } while (0);
   __ZN3WTF6StringC1EPKc(i34, H_BASE + 8 | 0);
   i72 = i34 | 0;
   i77 = HEAP32[i72 >> 2] | 0;
   HEAP32[i72 >> 2] = 0;
   i74 = i6 + 20 | 0;
   i76 = HEAP32[i74 >> 2] | 0;
   HEAP32[i74 >> 2] = i77;
   do {
    if ((i76 | 0) != 0) {
     i77 = i76 | 0;
     i79 = (HEAP32[i77 >> 2] | 0) - 2 | 0;
     if ((i79 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i76);
      break;
     } else {
      HEAP32[i77 >> 2] = i79;
      break;
     }
    }
   } while (0);
   i76 = HEAP32[i72 >> 2] | 0;
   do {
    if ((i76 | 0) != 0) {
     i79 = i76 | 0;
     i77 = (HEAP32[i79 >> 2] | 0) - 2 | 0;
     if ((i77 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i76);
      break;
     } else {
      HEAP32[i79 >> 2] = i77;
      break;
     }
    }
   } while (0);
   i76 = HEAP32[i67 >> 2] | 0;
   i72 = i36 | 0;
   HEAP32[i72 >> 2] = 0;
   __ZNK7WebCore5Range10cloneRangeERi(i35, i76, i72);
   i72 = i35 | 0;
   i76 = HEAP32[i72 >> 2] | 0;
   HEAP32[i72 >> 2] = 0;
   i72 = HEAP32[i67 >> 2] | 0;
   i77 = i72 + 12 | 0;
   i79 = HEAP32[i77 >> 2] | 0;
   if ((i79 | 0) > -1) {
    i80 = i79;
   } else {
    i79 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i72 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i77 >> 2] = i79;
    i80 = i79;
   }
   i79 = HEAP32[i72 + 8 >> 2] | 0;
   if ((i79 | 0) == 0) {
    i81 = i80;
   } else {
    i72 = i79 + 8 | 0;
    HEAP32[i72 >> 2] = (HEAP32[i72 >> 2] | 0) + 1;
    i81 = HEAP32[i77 >> 2] | 0;
   }
   i77 = i32 | 0;
   HEAP32[i77 >> 2] = i79;
   HEAP32[i33 >> 2] = i81;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i39, i32, i33);
   i79 = HEAP32[i77 >> 2] | 0;
   do {
    if ((i79 | 0) != 0) {
     i77 = i79 + 8 | 0;
     i72 = i77 | 0;
     i78 = (HEAP32[i72 >> 2] | 0) - 1 | 0;
     HEAP32[i72 >> 2] = i78;
     if ((i78 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i77 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i77 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i38, i39, 1);
   __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i37, i38, 1);
   __ZN7WebCore8setStartEPNS_5RangeERKNS_15VisiblePositionE(i76, i37) | 0;
   i79 = HEAP32[i37 >> 2] | 0;
   do {
    if ((i79 | 0) != 0) {
     i77 = i79 + 8 | 0;
     i78 = i77 | 0;
     i72 = (HEAP32[i78 >> 2] | 0) - 1 | 0;
     HEAP32[i78 >> 2] = i72;
     if ((i72 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i77 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i77 - 8 | 0);
    }
   } while (0);
   i79 = HEAP32[i38 >> 2] | 0;
   do {
    if ((i79 | 0) != 0) {
     i77 = i79 + 8 | 0;
     i72 = i77 | 0;
     i78 = (HEAP32[i72 >> 2] | 0) - 1 | 0;
     HEAP32[i72 >> 2] = i78;
     if ((i78 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i77 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i77 - 8 | 0);
    }
   } while (0);
   i79 = HEAP32[i39 >> 2] | 0;
   do {
    if ((i79 | 0) != 0) {
     i77 = i79 + 8 | 0;
     i78 = i77 | 0;
     i72 = (HEAP32[i78 >> 2] | 0) - 1 | 0;
     HEAP32[i78 >> 2] = i72;
     if ((i72 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i77 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i77 - 8 | 0);
    }
   } while (0);
   i79 = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i76, 0) | 0;
   i77 = HEAP32[i67 >> 2] | 0;
   i72 = i77 + 12 | 0;
   i78 = HEAP32[i72 >> 2] | 0;
   if ((i78 | 0) > -1) {
    i82 = i78;
   } else {
    i78 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i77 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i72 >> 2] = i78;
    i82 = i78;
   }
   i78 = HEAP32[i77 + 8 >> 2] | 0;
   if ((i78 | 0) == 0) {
    i83 = i82;
   } else {
    i77 = i78 + 8 | 0;
    HEAP32[i77 >> 2] = (HEAP32[i77 >> 2] | 0) + 1;
    i83 = HEAP32[i72 >> 2] | 0;
   }
   i72 = i30 | 0;
   HEAP32[i72 >> 2] = i78;
   HEAP32[i31 >> 2] = i83;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i42, i30, i31);
   i78 = HEAP32[i72 >> 2] | 0;
   do {
    if ((i78 | 0) != 0) {
     i72 = i78 + 8 | 0;
     i77 = i72 | 0;
     i84 = (HEAP32[i77 >> 2] | 0) - 1 | 0;
     HEAP32[i77 >> 2] = i84;
     if ((i84 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i72 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i72 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i41, i42, 1);
   __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i40, i41, 1);
   __ZN7WebCore6setEndEPNS_5RangeERKNS_15VisiblePositionE(i76, i40) | 0;
   i78 = HEAP32[i40 >> 2] | 0;
   do {
    if ((i78 | 0) != 0) {
     i72 = i78 + 8 | 0;
     i84 = i72 | 0;
     i77 = (HEAP32[i84 >> 2] | 0) - 1 | 0;
     HEAP32[i84 >> 2] = i77;
     if ((i77 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i72 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i72 - 8 | 0);
    }
   } while (0);
   i78 = HEAP32[i41 >> 2] | 0;
   do {
    if ((i78 | 0) != 0) {
     i72 = i78 + 8 | 0;
     i77 = i72 | 0;
     i84 = (HEAP32[i77 >> 2] | 0) - 1 | 0;
     HEAP32[i77 >> 2] = i84;
     if ((i84 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i72 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i72 - 8 | 0);
    }
   } while (0);
   i78 = HEAP32[i42 >> 2] | 0;
   do {
    if ((i78 | 0) != 0) {
     i72 = i78 + 8 | 0;
     i84 = i72 | 0;
     i77 = (HEAP32[i84 >> 2] | 0) - 1 | 0;
     HEAP32[i84 >> 2] = i77;
     if ((i77 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i72 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i72 - 8 | 0);
    }
   } while (0);
   i78 = i76 + 8 | 0;
   i72 = HEAP32[i78 >> 2] | 0;
   i77 = HEAP32[(HEAP32[i72 + 20 >> 2] | 0) + 8 >> 2] | 0;
   i84 = i76 + 12 | 0;
   i85 = HEAP32[i84 >> 2] | 0;
   if ((i85 | 0) > -1) {
    i86 = i85;
    i87 = i72;
   } else {
    i72 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i76 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i84 >> 2] = i72;
    i86 = i72;
    i87 = HEAP32[i78 >> 2] | 0;
   }
   if ((i87 | 0) == 0) {
    i88 = i86;
   } else {
    i72 = i87 + 8 | 0;
    HEAP32[i72 >> 2] = (HEAP32[i72 >> 2] | 0) + 1;
    i88 = HEAP32[i84 >> 2] | 0;
   }
   i72 = i28 | 0;
   HEAP32[i72 >> 2] = i87;
   HEAP32[i29 >> 2] = i88;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i44, i28, i29);
   i85 = HEAP32[i72 >> 2] | 0;
   do {
    if ((i85 | 0) != 0) {
     i72 = i85 + 8 | 0;
     i89 = i72 | 0;
     i90 = (HEAP32[i89 >> 2] | 0) - 1 | 0;
     HEAP32[i89 >> 2] = i90;
     if ((i90 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i72 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i72 - 8 | 0);
    }
   } while (0);
   i85 = HEAP32[i67 >> 2] | 0;
   i72 = i85 + 12 | 0;
   i90 = HEAP32[i72 >> 2] | 0;
   if ((i90 | 0) > -1) {
    i91 = i90;
   } else {
    i90 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i85 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i72 >> 2] = i90;
    i91 = i90;
   }
   i90 = HEAP32[i85 + 8 >> 2] | 0;
   if ((i90 | 0) == 0) {
    i92 = i91;
   } else {
    i85 = i90 + 8 | 0;
    HEAP32[i85 >> 2] = (HEAP32[i85 >> 2] | 0) + 1;
    i92 = HEAP32[i72 >> 2] | 0;
   }
   i72 = i26 | 0;
   HEAP32[i72 >> 2] = i90;
   HEAP32[i27 >> 2] = i92;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i45, i26, i27);
   i90 = HEAP32[i72 >> 2] | 0;
   do {
    if ((i90 | 0) != 0) {
     i72 = i90 + 8 | 0;
     i85 = i72 | 0;
     i89 = (HEAP32[i85 >> 2] | 0) - 1 | 0;
     HEAP32[i85 >> 2] = i89;
     if ((i89 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i72 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i72 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i43, i77, i44, i45);
   i90 = i43 | 0;
   i72 = HEAP32[i90 >> 2] | 0;
   HEAP32[i90 >> 2] = 0;
   i90 = HEAP32[i45 >> 2] | 0;
   do {
    if ((i90 | 0) != 0) {
     i89 = i90 + 8 | 0;
     i85 = i89 | 0;
     i93 = (HEAP32[i85 >> 2] | 0) - 1 | 0;
     HEAP32[i85 >> 2] = i93;
     if ((i93 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i89 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i89 - 8 | 0);
    }
   } while (0);
   i90 = HEAP32[i44 >> 2] | 0;
   do {
    if ((i90 | 0) != 0) {
     i77 = i90 + 8 | 0;
     i89 = i77 | 0;
     i93 = (HEAP32[i89 >> 2] | 0) - 1 | 0;
     HEAP32[i89 >> 2] = i93;
     if ((i93 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i77 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i77 - 8 | 0);
    }
   } while (0);
   i90 = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i72, 0) | 0;
   L117 : do {
    if ((i79 | 0) > 0) {
     i77 = i24 | 0;
     i93 = i25 | 0;
     i89 = i22 | 0;
     i85 = i23 | 0;
     i94 = i48 | 0;
     i95 = i49 | 0;
     i96 = i46 | 0;
     i97 = i47 | 0;
     i98 = i20 | 0;
     i99 = i21 | 0;
     i100 = i18 | 0;
     i101 = i19 | 0;
     i102 = i50 | 0;
     i103 = i52 | 0;
     i104 = i51 | 0;
     i105 = i76 + 16 | 0;
     i106 = i53 | 0;
     i107 = i54 | 0;
     i108 = i54 + 4 | 0;
     i109 = i54 + 8 | 0;
     i110 = i3 ? 6 : 2;
     i111 = i2 | 0;
     i112 = i12 | 0;
     i113 = i13 | 0;
     i114 = i10 | 0;
     i115 = i11 | 0;
     i116 = i60 | 0;
     i117 = i62 | 0;
     i118 = i61 | 0;
     i119 = i3 ^ 1;
     i120 = i16 | 0;
     i121 = i17 | 0;
     i122 = i14 | 0;
     i123 = i15 | 0;
     i124 = i57 | 0;
     i125 = i59 | 0;
     i126 = i58 | 0;
     i127 = i56 | 0;
     i128 = i55 | 0;
     i129 = i76 + 24 | 0;
     i130 = i76 + 20 | 0;
     i131 = i8 | 0;
     i132 = i9 | 0;
     i133 = i64 | 0;
     i134 = i65 | 0;
     i135 = i66 | 0;
     i136 = i63 | 0;
     i137 = i76 + 28 | 0;
     i138 = 0;
     i139 = 0;
     i140 = 0;
     i141 = 0;
     i142 = 1;
     i143 = 0;
     L119 : while (1) {
      i144 = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i76, 0) | 0;
      i145 = i142 ? i90 : 0;
      i146 = HEAP32[i84 >> 2] | 0;
      if ((i146 | 0) > -1) {
       i147 = i146;
      } else {
       i146 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i105 >> 2] | 0) | 0) + 1 | 0;
       HEAP32[i84 >> 2] = i146;
       i147 = i146;
      }
      i146 = HEAP32[i78 >> 2] | 0;
      if ((i146 | 0) == 0) {
       i148 = i147;
      } else {
       i149 = i146 + 8 | 0;
       HEAP32[i149 >> 2] = (HEAP32[i149 >> 2] | 0) + 1;
       i148 = HEAP32[i84 >> 2] | 0;
      }
      HEAP32[i77 >> 2] = i146;
      HEAP32[i93 >> 2] = i148;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i47, i24, i25);
      i146 = HEAP32[i77 >> 2] | 0;
      do {
       if ((i146 | 0) != 0) {
        i149 = i146 + 8 | 0;
        i150 = i149 | 0;
        i151 = (HEAP32[i150 >> 2] | 0) - 1 | 0;
        HEAP32[i150 >> 2] = i151;
        if ((i151 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i149 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i149 - 8 | 0);
       }
      } while (0);
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i46, i47, 1);
      i146 = HEAP32[i67 >> 2] | 0;
      i149 = i146 + 24 | 0;
      i151 = HEAP32[i149 >> 2] | 0;
      if ((i151 | 0) > -1) {
       i152 = i151;
      } else {
       i151 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i146 + 28 >> 2] | 0) | 0) + 1 | 0;
       HEAP32[i149 >> 2] = i151;
       i152 = i151;
      }
      i151 = HEAP32[i146 + 20 >> 2] | 0;
      if ((i151 | 0) == 0) {
       i153 = i152;
      } else {
       i146 = i151 + 8 | 0;
       HEAP32[i146 >> 2] = (HEAP32[i146 >> 2] | 0) + 1;
       i153 = HEAP32[i149 >> 2] | 0;
      }
      HEAP32[i89 >> 2] = i151;
      HEAP32[i85 >> 2] = i153;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i49, i22, i23);
      i151 = HEAP32[i89 >> 2] | 0;
      do {
       if ((i151 | 0) != 0) {
        i149 = i151 + 8 | 0;
        i146 = i149 | 0;
        i150 = (HEAP32[i146 >> 2] | 0) - 1 | 0;
        HEAP32[i146 >> 2] = i150;
        if ((i150 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i149 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i149 - 8 | 0);
       }
      } while (0);
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i48, i49, 1);
      i151 = __ZN7WebCore15inSameParagraphERKNS_15VisiblePositionES2_NS_27EditingBoundaryCrossingRuleE(i46, i48, 1) | 0;
      i149 = HEAP32[i94 >> 2] | 0;
      do {
       if ((i149 | 0) != 0) {
        i150 = i149 + 8 | 0;
        i146 = i150 | 0;
        i154 = (HEAP32[i146 >> 2] | 0) - 1 | 0;
        HEAP32[i146 >> 2] = i154;
        if ((i154 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i150 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i150 - 8 | 0);
       }
      } while (0);
      i149 = HEAP32[i95 >> 2] | 0;
      do {
       if ((i149 | 0) != 0) {
        i150 = i149 + 8 | 0;
        i154 = i150 | 0;
        i146 = (HEAP32[i154 >> 2] | 0) - 1 | 0;
        HEAP32[i154 >> 2] = i146;
        if ((i146 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i150 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i150 - 8 | 0);
       }
      } while (0);
      i149 = HEAP32[i96 >> 2] | 0;
      do {
       if ((i149 | 0) != 0) {
        i150 = i149 + 8 | 0;
        i146 = i150 | 0;
        i154 = (HEAP32[i146 >> 2] | 0) - 1 | 0;
        HEAP32[i146 >> 2] = i154;
        if ((i154 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i150 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i150 - 8 | 0);
       }
      } while (0);
      i149 = HEAP32[i97 >> 2] | 0;
      do {
       if ((i149 | 0) != 0) {
        i150 = i149 + 8 | 0;
        i154 = i150 | 0;
        i146 = (HEAP32[i154 >> 2] | 0) - 1 | 0;
        HEAP32[i154 >> 2] = i146;
        if ((i146 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i150 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i150 - 8 | 0);
       }
      } while (0);
      do {
       if (i151) {
        i149 = HEAP32[i78 >> 2] | 0;
        i150 = HEAP32[(HEAP32[i149 + 20 >> 2] | 0) + 8 >> 2] | 0;
        i146 = HEAP32[i84 >> 2] | 0;
        if ((i146 | 0) > -1) {
         i155 = i146;
         i156 = i149;
        } else {
         i149 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i105 >> 2] | 0) | 0) + 1 | 0;
         HEAP32[i84 >> 2] = i149;
         i155 = i149;
         i156 = HEAP32[i78 >> 2] | 0;
        }
        if ((i156 | 0) == 0) {
         i157 = i155;
        } else {
         i149 = i156 + 8 | 0;
         HEAP32[i149 >> 2] = (HEAP32[i149 >> 2] | 0) + 1;
         i157 = HEAP32[i84 >> 2] | 0;
        }
        HEAP32[i98 >> 2] = i156;
        HEAP32[i99 >> 2] = i157;
        __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i51, i20, i21);
        i149 = HEAP32[i98 >> 2] | 0;
        do {
         if ((i149 | 0) != 0) {
          i146 = i149 + 8 | 0;
          i154 = i146 | 0;
          i158 = (HEAP32[i154 >> 2] | 0) - 1 | 0;
          HEAP32[i154 >> 2] = i158;
          if ((i158 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i146 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i146 - 8 | 0);
         }
        } while (0);
        i149 = HEAP32[i67 >> 2] | 0;
        i146 = i149 + 24 | 0;
        i158 = HEAP32[i146 >> 2] | 0;
        if ((i158 | 0) > -1) {
         i159 = i158;
        } else {
         i158 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i149 + 28 >> 2] | 0) | 0) + 1 | 0;
         HEAP32[i146 >> 2] = i158;
         i159 = i158;
        }
        i158 = HEAP32[i149 + 20 >> 2] | 0;
        if ((i158 | 0) == 0) {
         i160 = i159;
        } else {
         i149 = i158 + 8 | 0;
         HEAP32[i149 >> 2] = (HEAP32[i149 >> 2] | 0) + 1;
         i160 = HEAP32[i146 >> 2] | 0;
        }
        HEAP32[i100 >> 2] = i158;
        HEAP32[i101 >> 2] = i160;
        __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i52, i18, i19);
        i158 = HEAP32[i100 >> 2] | 0;
        do {
         if ((i158 | 0) != 0) {
          i146 = i158 + 8 | 0;
          i149 = i146 | 0;
          i154 = (HEAP32[i149 >> 2] | 0) - 1 | 0;
          HEAP32[i149 >> 2] = i154;
          if ((i154 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i146 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i146 - 8 | 0);
         }
        } while (0);
        __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i50, i150, i51, i52);
        i158 = HEAP32[i102 >> 2] | 0;
        HEAP32[i102 >> 2] = 0;
        i146 = HEAP32[i103 >> 2] | 0;
        do {
         if ((i146 | 0) != 0) {
          i154 = i146 + 8 | 0;
          i149 = i154 | 0;
          i161 = (HEAP32[i149 >> 2] | 0) - 1 | 0;
          HEAP32[i149 >> 2] = i161;
          if ((i161 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i154 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i154 - 8 | 0);
         }
        } while (0);
        i146 = HEAP32[i104 >> 2] | 0;
        do {
         if ((i146 | 0) != 0) {
          i150 = i146 + 8 | 0;
          i154 = i150 | 0;
          i161 = (HEAP32[i154 >> 2] | 0) - 1 | 0;
          HEAP32[i154 >> 2] = i161;
          if ((i161 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i150 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i150 - 8 | 0);
         }
        } while (0);
        i146 = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i158, 0) | 0;
        if ((i158 | 0) == 0) {
         i162 = 1;
         i163 = i146;
         break;
        }
        i150 = i158 | 0;
        i161 = (HEAP32[i150 >> 2] | 0) - 1 | 0;
        if ((i161 | 0) == 0) {
         __ZN7WebCore5RangeD1Ev(i158);
         __ZN3WTF8fastFreeEPv(i158);
         i162 = 1;
         i163 = i146;
         break;
        } else {
         HEAP32[i150 >> 2] = i161;
         i162 = 1;
         i163 = i146;
         break;
        }
       } else {
        i162 = i141;
        i163 = i144;
       }
      } while (0);
      if ((i145 | 0) < (i163 | 0)) {
       __ZN7WebCore9plainTextEPKNS_5RangeENS_20TextIteratorBehaviorEb(i53, i76, 0, 0);
       i151 = HEAP32[i106 >> 2] | 0;
       do {
        if ((i151 | 0) == 0) {
         i164 = i140;
         i165 = i139;
         i166 = i138;
         i167 = 283;
        } else {
         if ((HEAP32[i151 + 4 >> 2] | 0) == 0) {
          i164 = i140;
          i165 = i139;
          i166 = i138;
          i167 = 283;
          break;
         }
         HEAP32[i107 >> 2] = 0;
         HEAP32[i108 >> 2] = 0;
         HEAP32[i109 >> 2] = 0;
         i146 = HEAP32[i111 >> 2] | 0;
         i161 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i146 >> 2] | 0) + 168 >> 2] & 1](i146) | 0;
         i146 = HEAP32[i106 >> 2] | 0;
         do {
          if ((i146 | 0) == 0) {
           i168 = 0;
           i169 = 0;
          } else {
           if ((HEAP32[i146 + 16 >> 2] & 32 | 0) == 0) {
            i170 = HEAP32[i146 + 8 >> 2] | 0;
            i171 = i146;
           } else {
            i150 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i146) | 0;
            i170 = i150;
            i171 = HEAP32[i106 >> 2] | 0;
           }
           if ((i171 | 0) == 0) {
            i168 = 0;
            i169 = i170;
            break;
           }
           i168 = HEAP32[i171 + 4 >> 2] | 0;
           i169 = i170;
          }
         } while (0);
         __ZN7WebCore20checkTextOfParagraphEPNS_17TextCheckerClientEPKtijRN3WTF6VectorINS_18TextCheckingResultELj0ENS4_15CrashOnOverflowEEE(i161, i169, i168, i110, i54);
         L215 : do {
          if ((HEAP32[i109 >> 2] | 0) == 0) {
           i172 = 0;
           i173 = i139;
           i174 = i140;
           i175 = 0;
           i176 = 0;
          } else {
           i146 = i140;
           i158 = 0;
           i150 = 0;
           i154 = 0;
           i149 = 0;
           i177 = 0;
           L216 : while (1) {
            i178 = HEAP32[i107 >> 2] | 0;
            i179 = HEAP32[i178 + (i177 * 28 & -1) >> 2] | 0;
            do {
             if ((i179 | 0) == 2) {
              i180 = HEAP32[i178 + (i177 * 28 & -1) + 4 >> 2] | 0;
              if ((i180 | 0) < (i145 | 0)) {
               break;
              }
              i181 = HEAP32[i178 + (i177 * 28 & -1) + 8 >> 2] | 0;
              if ((i181 + i180 | 0) <= (i163 | 0)) {
               break L216;
              }
             }
            } while (0);
            do {
             if ((i179 | 0) == 4 & i3) {
              i182 = i178 + (i177 * 28 & -1) + 4 | 0;
              i183 = HEAP32[i182 >> 2] | 0;
              if ((i183 | 0) >= (i163 | 0)) {
               i184 = i149;
               i185 = i154;
               i186 = i150;
               i187 = i158;
               i188 = i146;
               break;
              }
              i189 = i178 + (i177 * 28 & -1) + 8 | 0;
              if (((HEAP32[i189 >> 2] | 0) + i183 | 0) <= (i145 | 0)) {
               i184 = i149;
               i185 = i154;
               i186 = i150;
               i187 = i158;
               i188 = i146;
               break;
              }
              if (i158) {
               i172 = 0;
               i173 = i139;
               i174 = i146;
               i175 = i150;
               i176 = i154;
               break L215;
              }
              i190 = i178 + (i177 * 28 & -1) + 12 | 0;
              i191 = HEAP32[i178 + (i177 * 28 & -1) + 20 >> 2] | 0;
              if ((i191 | 0) == 0) {
               i184 = i149;
               i185 = i154;
               i186 = i150;
               i187 = 0;
               i188 = i146;
               break;
              }
              i192 = HEAP32[i190 >> 2] | 0;
              i193 = 0;
              i194 = i154;
              i195 = i149;
              i196 = 0;
              while (1) {
               i197 = (HEAP32[i192 + (i196 * 24 & -1) >> 2] | 0) + i183 | 0;
               do {
                if ((i197 | 0) < (i145 | 0)) {
                 i198 = i195;
                 i199 = i194;
                 i200 = i193;
                } else {
                 if (((HEAP32[i192 + (i196 * 24 & -1) + 4 >> 2] | 0) + i197 | 0) > (i163 | 0)) {
                  i198 = i195;
                  i199 = i194;
                  i200 = i193;
                  break;
                 }
                 i201 = (i197 | 0) < (i194 | 0) | i193 ^ 1;
                 i198 = i201 ? i196 : i195;
                 i199 = i201 ? i197 : i194;
                 i200 = 1;
                }
               } while (0);
               i197 = i196 + 1 | 0;
               if (i197 >>> 0 < i191 >>> 0) {
                i193 = i200;
                i194 = i199;
                i195 = i198;
                i196 = i197;
               } else {
                break;
               }
              }
              if (!i200) {
               i184 = i198;
               i185 = i199;
               i186 = i150;
               i187 = 0;
               i188 = i146;
               break;
              }
              if (i191 >>> 0 <= i198 >>> 0) {
               break L119;
              }
              i196 = HEAP32[i190 >> 2] | 0;
              HEAP32[i69 >> 2] = HEAP32[i196 + (i198 * 24 & -1) >> 2];
              HEAP32[i70 >> 2] = HEAP32[i196 + (i198 * 24 & -1) + 4 >> 2];
              __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_(i71, i196 + (i198 * 24 & -1) + 8 | 0) | 0;
              i195 = HEAP32[i196 + (i198 * 24 & -1) + 20 >> 2] | 0;
              if ((i195 | 0) != 0) {
               i196 = i195 | 0;
               HEAP32[i196 >> 2] = (HEAP32[i196 >> 2] | 0) + 2;
              }
              i196 = HEAP32[i74 >> 2] | 0;
              HEAP32[i74 >> 2] = i195;
              do {
               if ((i196 | 0) != 0) {
                i195 = i196 | 0;
                i194 = (HEAP32[i195 >> 2] | 0) - 2 | 0;
                if ((i194 | 0) == 0) {
                 __ZN3WTF10StringImpl7destroyEPS0_(i196);
                 break;
                } else {
                 HEAP32[i195 >> 2] = i194;
                 break;
                }
               }
              } while (0);
              __ZNK3WTF6String9substringEjj(i56, i53, HEAP32[i182 >> 2] | 0, HEAP32[i189 >> 2] | 0);
              i196 = HEAP32[i127 >> 2] | 0;
              HEAP32[i127 >> 2] = 0;
              if ((i146 | 0) == 0) {
               i184 = i198;
               i185 = i199;
               i186 = i183;
               i187 = 1;
               i188 = i196;
               break;
              }
              i190 = i146 | 0;
              i191 = (HEAP32[i190 >> 2] | 0) - 2 | 0;
              if ((i191 | 0) == 0) {
               __ZN3WTF10StringImpl7destroyEPS0_(i146);
              } else {
               HEAP32[i190 >> 2] = i191;
              }
              i191 = HEAP32[i127 >> 2] | 0;
              if ((i191 | 0) == 0) {
               i184 = i198;
               i185 = i199;
               i186 = i183;
               i187 = 1;
               i188 = i196;
               break;
              }
              i190 = i191 | 0;
              i194 = (HEAP32[i190 >> 2] | 0) - 2 | 0;
              if ((i194 | 0) == 0) {
               __ZN3WTF10StringImpl7destroyEPS0_(i191);
               i184 = i198;
               i185 = i199;
               i186 = i183;
               i187 = 1;
               i188 = i196;
               break;
              } else {
               HEAP32[i190 >> 2] = i194;
               i184 = i198;
               i185 = i199;
               i186 = i183;
               i187 = 1;
               i188 = i196;
               break;
              }
             } else {
              i184 = i149;
              i185 = i154;
              i186 = i150;
              i187 = i158;
              i188 = i146;
             }
            } while (0);
            i178 = i177 + 1 | 0;
            if (i178 >>> 0 < (HEAP32[i109 >> 2] | 0) >>> 0) {
             i146 = i188;
             i158 = i187;
             i150 = i186;
             i154 = i185;
             i149 = i184;
             i177 = i178;
            } else {
             i172 = 0;
             i173 = i139;
             i174 = i188;
             i175 = i186;
             i176 = i185;
             break L215;
            }
           }
           __ZNK3WTF6String9substringEjj(i55, i53, i180, i181);
           i177 = HEAP32[i128 >> 2] | 0;
           HEAP32[i128 >> 2] = 0;
           if ((i139 | 0) == 0) {
            i172 = i180;
            i173 = i177;
            i174 = i146;
            i175 = i150;
            i176 = i154;
            break;
           }
           i149 = i139 | 0;
           i158 = (HEAP32[i149 >> 2] | 0) - 2 | 0;
           if ((i158 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i139);
           } else {
            HEAP32[i149 >> 2] = i158;
           }
           i158 = HEAP32[i128 >> 2] | 0;
           if ((i158 | 0) == 0) {
            i172 = i180;
            i173 = i177;
            i174 = i146;
            i175 = i150;
            i176 = i154;
            break;
           }
           i149 = i158 | 0;
           i178 = (HEAP32[i149 >> 2] | 0) - 2 | 0;
           if ((i178 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i158);
            i172 = i180;
            i173 = i177;
            i174 = i146;
            i175 = i150;
            i176 = i154;
            break;
           } else {
            HEAP32[i149 >> 2] = i178;
            i172 = i180;
            i173 = i177;
            i174 = i146;
            i175 = i150;
            i176 = i154;
            break;
           }
          }
         } while (0);
         do {
          if ((i173 | 0) == 0) {
           i167 = 237;
          } else {
           if ((HEAP32[i173 + 4 >> 2] | 0) == 0) {
            i167 = 237;
            break;
           }
           if (!((i174 | 0) == 0 | i119)) {
            if ((HEAP32[i174 + 4 >> 2] | 0) != 0 & (i172 | 0) > (i176 | 0)) {
             i167 = 237;
             break;
            }
           }
           i161 = i172 - i145 | 0;
           do {
            if (i142) {
             i202 = i161;
            } else {
             i177 = HEAP32[(HEAP32[(HEAP32[i78 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
             i178 = HEAP32[i67 >> 2] | 0;
             i149 = i178 + 12 | 0;
             i158 = HEAP32[i149 >> 2] | 0;
             if ((i158 | 0) > -1) {
              i203 = i158;
             } else {
              i158 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i178 + 16 >> 2] | 0) | 0) + 1 | 0;
              HEAP32[i149 >> 2] = i158;
              i203 = i158;
             }
             i158 = HEAP32[i178 + 8 >> 2] | 0;
             if ((i158 | 0) == 0) {
              i204 = i203;
             } else {
              i178 = i158 + 8 | 0;
              HEAP32[i178 >> 2] = (HEAP32[i178 >> 2] | 0) + 1;
              i204 = HEAP32[i149 >> 2] | 0;
             }
             HEAP32[i120 >> 2] = i158;
             HEAP32[i121 >> 2] = i204;
             __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i58, i16, i17);
             i158 = HEAP32[i120 >> 2] | 0;
             do {
              if ((i158 | 0) != 0) {
               i149 = i158 + 8 | 0;
               i178 = i149 | 0;
               i179 = (HEAP32[i178 >> 2] | 0) - 1 | 0;
               HEAP32[i178 >> 2] = i179;
               if ((i179 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i149 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i149 - 8 | 0);
              }
             } while (0);
             i158 = HEAP32[i84 >> 2] | 0;
             if ((i158 | 0) > -1) {
              i205 = i158;
             } else {
              i158 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i105 >> 2] | 0) | 0) + 1 | 0;
              HEAP32[i84 >> 2] = i158;
              i205 = i158;
             }
             i158 = HEAP32[i78 >> 2] | 0;
             if ((i158 | 0) == 0) {
              i206 = i205;
             } else {
              i149 = i158 + 8 | 0;
              HEAP32[i149 >> 2] = (HEAP32[i149 >> 2] | 0) + 1;
              i206 = HEAP32[i84 >> 2] | 0;
             }
             HEAP32[i122 >> 2] = i158;
             HEAP32[i123 >> 2] = i206;
             __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i59, i14, i15);
             i158 = HEAP32[i122 >> 2] | 0;
             do {
              if ((i158 | 0) != 0) {
               i149 = i158 + 8 | 0;
               i179 = i149 | 0;
               i178 = (HEAP32[i179 >> 2] | 0) - 1 | 0;
               HEAP32[i179 >> 2] = i178;
               if ((i178 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i149 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i149 - 8 | 0);
              }
             } while (0);
             __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i57, i177, i58, i59);
             i158 = HEAP32[i124 >> 2] | 0;
             HEAP32[i124 >> 2] = 0;
             i149 = HEAP32[i125 >> 2] | 0;
             do {
              if ((i149 | 0) != 0) {
               i178 = i149 + 8 | 0;
               i179 = i178 | 0;
               i196 = (HEAP32[i179 >> 2] | 0) - 1 | 0;
               HEAP32[i179 >> 2] = i196;
               if ((i196 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i178 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i178 - 8 | 0);
              }
             } while (0);
             i149 = HEAP32[i126 >> 2] | 0;
             do {
              if ((i149 | 0) != 0) {
               i177 = i149 + 8 | 0;
               i178 = i177 | 0;
               i196 = (HEAP32[i178 >> 2] | 0) - 1 | 0;
               HEAP32[i178 >> 2] = i196;
               if ((i196 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i177 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i177 - 8 | 0);
              }
             } while (0);
             i149 = (__ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i158, 0) | 0) + i161 | 0;
             if ((i158 | 0) == 0) {
              i202 = i149;
              break;
             }
             i177 = i158 | 0;
             i196 = (HEAP32[i177 >> 2] | 0) - 1 | 0;
             if ((i196 | 0) == 0) {
              __ZN7WebCore5RangeD1Ev(i158);
              __ZN3WTF8fastFreeEPv(i158);
              i202 = i149;
              break;
             } else {
              HEAP32[i177 >> 2] = i196;
              i202 = i149;
              break;
             }
            }
           } while (0);
           HEAP8[i4] = 1;
           HEAP32[i5 >> 2] = i202;
           i161 = i173 | 0;
           HEAP32[i161 >> 2] = (HEAP32[i161 >> 2] | 0) + 2;
           if ((i138 | 0) == 0) {
            i207 = 3;
            i208 = i173;
            break;
           }
           i161 = i138 | 0;
           i154 = (HEAP32[i161 >> 2] | 0) - 2 | 0;
           if ((i154 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i138);
            i207 = 3;
            i208 = i173;
            break;
           } else {
            HEAP32[i161 >> 2] = i154;
            i207 = 3;
            i208 = i173;
            break;
           }
          }
         } while (0);
         do {
          if ((i167 | 0) == 237) {
           i167 = 0;
           if ((i174 | 0) == 0 | i3 ^ 1) {
            i207 = 0;
            i208 = i138;
            break;
           }
           if ((HEAP32[i174 + 4 >> 2] | 0) == 0) {
            i207 = 0;
            i208 = i138;
            break;
           }
           i154 = i175 - i145 | 0;
           do {
            if (i142) {
             i209 = i154;
            } else {
             i161 = HEAP32[(HEAP32[(HEAP32[i78 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
             i150 = HEAP32[i67 >> 2] | 0;
             i146 = i150 + 12 | 0;
             i149 = HEAP32[i146 >> 2] | 0;
             if ((i149 | 0) > -1) {
              i210 = i149;
             } else {
              i149 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i150 + 16 >> 2] | 0) | 0) + 1 | 0;
              HEAP32[i146 >> 2] = i149;
              i210 = i149;
             }
             i149 = HEAP32[i150 + 8 >> 2] | 0;
             if ((i149 | 0) == 0) {
              i211 = i210;
             } else {
              i150 = i149 + 8 | 0;
              HEAP32[i150 >> 2] = (HEAP32[i150 >> 2] | 0) + 1;
              i211 = HEAP32[i146 >> 2] | 0;
             }
             HEAP32[i112 >> 2] = i149;
             HEAP32[i113 >> 2] = i211;
             __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i61, i12, i13);
             i149 = HEAP32[i112 >> 2] | 0;
             do {
              if ((i149 | 0) != 0) {
               i146 = i149 + 8 | 0;
               i150 = i146 | 0;
               i196 = (HEAP32[i150 >> 2] | 0) - 1 | 0;
               HEAP32[i150 >> 2] = i196;
               if ((i196 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i146 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i146 - 8 | 0);
              }
             } while (0);
             i149 = HEAP32[i84 >> 2] | 0;
             if ((i149 | 0) > -1) {
              i212 = i149;
             } else {
              i149 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i105 >> 2] | 0) | 0) + 1 | 0;
              HEAP32[i84 >> 2] = i149;
              i212 = i149;
             }
             i149 = HEAP32[i78 >> 2] | 0;
             if ((i149 | 0) == 0) {
              i213 = i212;
             } else {
              i158 = i149 + 8 | 0;
              HEAP32[i158 >> 2] = (HEAP32[i158 >> 2] | 0) + 1;
              i213 = HEAP32[i84 >> 2] | 0;
             }
             HEAP32[i114 >> 2] = i149;
             HEAP32[i115 >> 2] = i213;
             __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i62, i10, i11);
             i149 = HEAP32[i114 >> 2] | 0;
             do {
              if ((i149 | 0) != 0) {
               i158 = i149 + 8 | 0;
               i146 = i158 | 0;
               i196 = (HEAP32[i146 >> 2] | 0) - 1 | 0;
               HEAP32[i146 >> 2] = i196;
               if ((i196 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i158 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i158 - 8 | 0);
              }
             } while (0);
             __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i60, i161, i61, i62);
             i149 = HEAP32[i116 >> 2] | 0;
             HEAP32[i116 >> 2] = 0;
             i158 = HEAP32[i117 >> 2] | 0;
             do {
              if ((i158 | 0) != 0) {
               i196 = i158 + 8 | 0;
               i146 = i196 | 0;
               i150 = (HEAP32[i146 >> 2] | 0) - 1 | 0;
               HEAP32[i146 >> 2] = i150;
               if ((i150 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i196 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i196 - 8 | 0);
              }
             } while (0);
             i158 = HEAP32[i118 >> 2] | 0;
             do {
              if ((i158 | 0) != 0) {
               i161 = i158 + 8 | 0;
               i196 = i161 | 0;
               i150 = (HEAP32[i196 >> 2] | 0) - 1 | 0;
               HEAP32[i196 >> 2] = i150;
               if ((i150 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i161 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i161 - 8 | 0);
              }
             } while (0);
             i158 = (__ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i149, 0) | 0) + i154 | 0;
             if ((i149 | 0) == 0) {
              i209 = i158;
              break;
             }
             i161 = i149 | 0;
             i150 = (HEAP32[i161 >> 2] | 0) - 1 | 0;
             if ((i150 | 0) == 0) {
              __ZN7WebCore5RangeD1Ev(i149);
              __ZN3WTF8fastFreeEPv(i149);
              i209 = i158;
              break;
             } else {
              HEAP32[i161 >> 2] = i150;
              i209 = i158;
              break;
             }
            }
           } while (0);
           HEAP8[i4] = 0;
           HEAP32[i5 >> 2] = i209;
           i154 = i174 | 0;
           HEAP32[i154 >> 2] = (HEAP32[i154 >> 2] | 0) + 2;
           if ((i138 | 0) == 0) {
            i207 = 3;
            i208 = i174;
            break;
           }
           i154 = i138 | 0;
           i158 = (HEAP32[i154 >> 2] | 0) - 2 | 0;
           if ((i158 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i138);
            i207 = 3;
            i208 = i174;
            break;
           } else {
            HEAP32[i154 >> 2] = i158;
            i207 = 3;
            i208 = i174;
            break;
           }
          }
         } while (0);
         i158 = HEAP32[i109 >> 2] | 0;
         if ((i158 | 0) != 0) {
          i154 = HEAP32[i107 >> 2] | 0;
          i150 = i154 + (i158 * 28 & -1) | 0;
          i158 = i154;
          while (1) {
           i154 = HEAP32[i158 + 24 >> 2] | 0;
           do {
            if ((i154 | 0) != 0) {
             i161 = i154 | 0;
             i196 = (HEAP32[i161 >> 2] | 0) - 2 | 0;
             if ((i196 | 0) == 0) {
              __ZN3WTF10StringImpl7destroyEPS0_(i154);
              break;
             } else {
              HEAP32[i161 >> 2] = i196;
              break;
             }
            }
           } while (0);
           __ZN3WTF6VectorIN7WebCore13GrammarDetailELj0ENS_15CrashOnOverflowEED1Ev(i158 + 12 | 0);
           i158 = i158 + 28 | 0;
           if ((i158 | 0) == (i150 | 0)) {
            break;
           }
          }
          HEAP32[i109 >> 2] = 0;
         }
         i150 = HEAP32[i107 >> 2] | 0;
         if ((i150 | 0) != 0) {
          HEAP32[i107 >> 2] = 0;
          HEAP32[i108 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i150);
         }
         if ((i207 | 0) == 0) {
          i164 = i174;
          i165 = i173;
          i166 = i208;
          i167 = 283;
         } else {
          i214 = i207;
          i215 = i174;
          i216 = i173;
          i217 = i208;
         }
        }
       } while (0);
       if ((i167 | 0) == 283) {
        i167 = 0;
        i214 = 0;
        i215 = i164;
        i216 = i165;
        i217 = i166;
       }
       i145 = HEAP32[i106 >> 2] | 0;
       do {
        if ((i145 | 0) != 0) {
         i151 = i145 | 0;
         i150 = (HEAP32[i151 >> 2] | 0) - 2 | 0;
         if ((i150 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i145);
          break;
         } else {
          HEAP32[i151 >> 2] = i150;
          break;
         }
        }
       } while (0);
       if ((i214 | 0) == 3 | i162) {
        i218 = i215;
        i219 = i216;
        i220 = i217;
        break L117;
       } else {
        i221 = i215;
        i222 = i216;
        i223 = i217;
       }
      } else {
       if (i162) {
        i218 = i140;
        i219 = i139;
        i220 = i138;
        break L117;
       } else {
        i221 = i140;
        i222 = i139;
        i223 = i138;
       }
      }
      i145 = i144 + i143 | 0;
      if ((i145 | 0) >= (i79 | 0)) {
       i218 = i221;
       i219 = i222;
       i220 = i223;
       break L117;
      }
      i150 = HEAP32[i129 >> 2] | 0;
      if ((i150 | 0) > -1) {
       i224 = i150;
      } else {
       i150 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i137 >> 2] | 0) | 0) + 1 | 0;
       HEAP32[i129 >> 2] = i150;
       i224 = i150;
      }
      i150 = HEAP32[i130 >> 2] | 0;
      if ((i150 | 0) == 0) {
       i225 = i224;
      } else {
       i151 = i150 + 8 | 0;
       HEAP32[i151 >> 2] = (HEAP32[i151 >> 2] | 0) + 1;
       i225 = HEAP32[i129 >> 2] | 0;
      }
      HEAP32[i131 >> 2] = i150;
      HEAP32[i132 >> 2] = i225;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i65, i8, i9);
      i150 = HEAP32[i131 >> 2] | 0;
      do {
       if ((i150 | 0) != 0) {
        i151 = i150 + 8 | 0;
        i158 = i151 | 0;
        i154 = (HEAP32[i158 >> 2] | 0) - 1 | 0;
        HEAP32[i158 >> 2] = i154;
        if ((i154 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i151 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i151 - 8 | 0);
       }
      } while (0);
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i64, i65, 1);
      __ZN7WebCore20startOfNextParagraphERKNS_15VisiblePositionE(i63, i64);
      i150 = HEAP32[i133 >> 2] | 0;
      do {
       if ((i150 | 0) != 0) {
        i144 = i150 + 8 | 0;
        i151 = i144 | 0;
        i154 = (HEAP32[i151 >> 2] | 0) - 1 | 0;
        HEAP32[i151 >> 2] = i154;
        if ((i154 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i144 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i144 - 8 | 0);
       }
      } while (0);
      i150 = HEAP32[i134 >> 2] | 0;
      do {
       if ((i150 | 0) != 0) {
        i144 = i150 + 8 | 0;
        i154 = i144 | 0;
        i151 = (HEAP32[i154 >> 2] | 0) - 1 | 0;
        HEAP32[i154 >> 2] = i151;
        if ((i151 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i144 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i144 - 8 | 0);
       }
      } while (0);
      __ZN7WebCore8setStartEPNS_5RangeERKNS_15VisiblePositionE(i76, i63) | 0;
      __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i66, i63, 1);
      __ZN7WebCore6setEndEPNS_5RangeERKNS_15VisiblePositionE(i76, i66) | 0;
      i150 = HEAP32[i135 >> 2] | 0;
      do {
       if ((i150 | 0) != 0) {
        i144 = i150 + 8 | 0;
        i151 = i144 | 0;
        i154 = (HEAP32[i151 >> 2] | 0) - 1 | 0;
        HEAP32[i151 >> 2] = i154;
        if ((i154 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i144 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i144 - 8 | 0);
       }
      } while (0);
      i150 = HEAP32[i136 >> 2] | 0;
      if ((i150 | 0) == 0) {
       i138 = i223;
       i139 = i222;
       i140 = i221;
       i141 = i162;
       i142 = 0;
       i143 = i145;
       continue;
      }
      i144 = i150 + 8 | 0;
      i150 = i144 | 0;
      i154 = (HEAP32[i150 >> 2] | 0) - 1 | 0;
      HEAP32[i150 >> 2] = i154;
      if ((i154 | 0) >= 1) {
       i138 = i223;
       i139 = i222;
       i140 = i221;
       i141 = i162;
       i142 = 0;
       i143 = i145;
       continue;
      }
      if ((HEAP32[i144 + 8 >> 2] | 0) != 0) {
       i138 = i223;
       i139 = i222;
       i140 = i221;
       i141 = i162;
       i142 = 0;
       i143 = i145;
       continue;
      }
      __ZN7WebCore4Node14removedLastRefEv(i144 - 8 | 0);
      i138 = i223;
      i139 = i222;
      i140 = i221;
      i141 = i162;
      i142 = 0;
      i143 = i145;
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else {
     i218 = 0;
     i219 = 0;
     i220 = 0;
    }
   } while (0);
   HEAP32[i1 >> 2] = i220;
   do {
    if ((i72 | 0) != 0) {
     i79 = i72 | 0;
     i84 = (HEAP32[i79 >> 2] | 0) - 1 | 0;
     if ((i84 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i72);
      __ZN3WTF8fastFreeEPv(i72);
      break;
     } else {
      HEAP32[i79 >> 2] = i84;
      break;
     }
    }
   } while (0);
   do {
    if ((i76 | 0) != 0) {
     i72 = i76 | 0;
     i84 = (HEAP32[i72 >> 2] | 0) - 1 | 0;
     if ((i84 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i76);
      __ZN3WTF8fastFreeEPv(i76);
      break;
     } else {
      HEAP32[i72 >> 2] = i84;
      break;
     }
    }
   } while (0);
   do {
    if ((i218 | 0) != 0) {
     i76 = i218 | 0;
     i84 = (HEAP32[i76 >> 2] | 0) - 2 | 0;
     if ((i84 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i218);
      break;
     } else {
      HEAP32[i76 >> 2] = i84;
      break;
     }
    }
   } while (0);
   if ((i219 | 0) == 0) {
    STACKTOP = i7;
    return;
   }
   i84 = i219 | 0;
   i76 = (HEAP32[i84 >> 2] | 0) - 2 | 0;
   if ((i76 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i219);
    STACKTOP = i7;
    return;
   } else {
    HEAP32[i84 >> 2] = i76;
    STACKTOP = i7;
    return;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i1, H_BASE + 8 | 0);
 STACKTOP = i7;
 return;
}
function __ZNK7WebCore18TextCheckingHelper40guessesForMisspelledOrUngrammaticalRangeEbRbS1_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 32 | 0;
 i11 = i6 + 40 | 0;
 i12 = i6 + 72 | 0;
 i13 = i6 + 88 | 0;
 i14 = i6 + 96 | 0;
 i15 = i6 + 104 | 0;
 i16 = i2 + 4 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i18 = HEAP32[(HEAP32[i17 + 4 >> 2] | 0) + 332 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   if ((HEAP8[(HEAP32[i18 + 36 >> 2] | 0) + 192 | 0] & 8) == 0) {
    break;
   }
   i18 = i9 | 0;
   HEAP32[i18 >> 2] = 0;
   i19 = i9 + 4 | 0;
   HEAP32[i19 >> 2] = 0;
   i20 = i9 + 8 | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP8[i4] = 0;
   HEAP8[i5] = 0;
   i21 = i2 | 0;
   do {
    if ((HEAP32[i21 >> 2] | 0) == 0) {
     i22 = 8;
    } else {
     i23 = HEAP32[i16 >> 2] | 0;
     if ((i23 | 0) == 0) {
      i22 = 8;
      break;
     }
     i24 = i10 | 0;
     HEAP32[i24 >> 2] = 0;
     if (__ZNK7WebCore5Range9collapsedERi(i23, i24) | 0) {
      i22 = 8;
      break;
     }
     i24 = HEAP32[i16 >> 2] | 0;
     if ((i24 | 0) != 0) {
      i23 = i24 | 0;
      HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
     }
     i23 = i11 | 0;
     HEAP32[i23 >> 2] = i24;
     HEAP32[i11 + 4 >> 2] = 0;
     HEAP32[i11 + 8 >> 2] = 0;
     HEAP32[i11 + 12 >> 2] = 0;
     i24 = i11 + 16 | 0;
     HEAP32[i24 >> 2] = -1;
     HEAP32[i11 + 20 >> 2] = -1;
     i25 = i11 + 24 | 0;
     HEAP32[i25 >> 2] = -1;
     do {
      if (__ZNK7WebCore21TextCheckingParagraph7isEmptyEv(i11) | 0) {
       HEAP32[i1 + 8 >> 2] = HEAP32[i20 >> 2];
       HEAP32[i20 >> 2] = 0;
       HEAP32[i1 >> 2] = HEAP32[i18 >> 2];
       HEAP32[i18 >> 2] = 0;
       HEAP32[i1 + 4 >> 2] = HEAP32[i19 >> 2];
       HEAP32[i19 >> 2] = 0;
      } else {
       i26 = i12 | 0;
       HEAP32[i26 >> 2] = 0;
       i27 = i12 + 4 | 0;
       HEAP32[i27 >> 2] = 0;
       i28 = i12 + 8 | 0;
       HEAP32[i28 >> 2] = 0;
       i29 = i3 ? 6 : 2;
       i30 = HEAP32[i21 >> 2] | 0;
       i31 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 168 >> 2] & 1](i30) | 0;
       i30 = HEAP32[(__ZNK7WebCore21TextCheckingParagraph4textEv(i11) | 0) >> 2] | 0;
       do {
        if ((i30 | 0) == 0) {
         i32 = 0;
        } else {
         if ((HEAP32[i30 + 16 >> 2] & 32 | 0) == 0) {
          i32 = HEAP32[i30 + 8 >> 2] | 0;
          break;
         } else {
          i32 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i30) | 0;
          break;
         }
        }
       } while (0);
       i30 = HEAP32[(__ZNK7WebCore21TextCheckingParagraph4textEv(i11) | 0) >> 2] | 0;
       if ((i30 | 0) == 0) {
        i33 = 0;
       } else {
        i33 = HEAP32[i30 + 4 >> 2] | 0;
       }
       __ZN7WebCore20checkTextOfParagraphEPNS_17TextCheckerClientEPKtijRN3WTF6VectorINS_18TextCheckingResultELj0ENS4_15CrashOnOverflowEEE(i31, i32, i33, i29, i12);
       i30 = HEAP32[i28 >> 2] | 0;
       L24 : do {
        if ((i30 | 0) == 0) {
         i34 = 0;
         i22 = 32;
        } else {
         i35 = HEAP32[i26 >> 2] | 0;
         i36 = 0;
         while (1) {
          if ((HEAP32[i35 + (i36 * 28 & -1) >> 2] | 0) == 2) {
           if (__ZNK7WebCore21TextCheckingParagraph20checkingRangeMatchesEii(i11, HEAP32[i35 + (i36 * 28 & -1) + 4 >> 2] | 0, HEAP32[i35 + (i36 * 28 & -1) + 8 >> 2] | 0) | 0) {
            break;
           }
          }
          i37 = i36 + 1 | 0;
          if (i37 >>> 0 < i30 >>> 0) {
           i36 = i37;
          } else {
           i34 = i30;
           i22 = 32;
           break L24;
          }
         }
         __ZNK7WebCore21TextCheckingParagraph17checkingSubstringEv(i13, i11);
         i36 = HEAP32[i21 >> 2] | 0;
         i35 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i36 >> 2] | 0) + 168 >> 2] & 1](i36) | 0;
         i36 = HEAP32[(HEAP32[i35 >> 2] | 0) + 32 >> 2] | 0;
         i37 = i14 | 0;
         HEAP32[i37 >> 2] = 0;
         FUNCTION_TABLE_viiii[i36 & 1](i35, i13, i14, i9);
         i35 = HEAP32[i37 >> 2] | 0;
         do {
          if ((i35 | 0) != 0) {
           i37 = i35 | 0;
           i36 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
           if ((i36 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i35);
            break;
           } else {
            HEAP32[i37 >> 2] = i36;
            break;
           }
          }
         } while (0);
         i35 = HEAP32[i21 >> 2] | 0;
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i35 >> 2] | 0) + 176 >> 2] & 3](i35, i13);
         HEAP8[i4] = 1;
         HEAP32[i1 + 8 >> 2] = HEAP32[i20 >> 2];
         HEAP32[i20 >> 2] = 0;
         HEAP32[i1 >> 2] = HEAP32[i18 >> 2];
         HEAP32[i18 >> 2] = 0;
         HEAP32[i1 + 4 >> 2] = HEAP32[i19 >> 2];
         HEAP32[i19 >> 2] = 0;
         i35 = HEAP32[i13 >> 2] | 0;
         if ((i35 | 0) == 0) {
          i38 = i30;
          break;
         }
         i36 = i35 | 0;
         i37 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
         if ((i37 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i35);
          i38 = i30;
          break;
         } else {
          HEAP32[i36 >> 2] = i37;
          i38 = i30;
          break;
         }
        }
       } while (0);
       L42 : do {
        if ((i22 | 0) == 32) {
         if (!i3) {
          HEAP32[i1 + 8 >> 2] = HEAP32[i20 >> 2];
          HEAP32[i20 >> 2] = 0;
          HEAP32[i1 >> 2] = HEAP32[i18 >> 2];
          HEAP32[i18 >> 2] = 0;
          HEAP32[i1 + 4 >> 2] = HEAP32[i19 >> 2];
          HEAP32[i19 >> 2] = 0;
          i38 = i34;
          break;
         }
         L47 : do {
          if ((i34 | 0) == 0) {
           i39 = 0;
          } else {
           i30 = HEAP32[i26 >> 2] | 0;
           i29 = i7 | 0;
           i31 = i8 | 0;
           i37 = 0;
           L49 : while (1) {
            L51 : do {
             if ((HEAP32[i30 + (i37 * 28 & -1) >> 2] | 0) == 4) {
              i40 = i30 + (i37 * 28 & -1) + 4 | 0;
              i36 = HEAP32[i40 >> 2] | 0;
              i41 = i30 + (i37 * 28 & -1) + 8 | 0;
              i35 = HEAP32[i41 >> 2] | 0;
              i42 = HEAP32[i24 >> 2] | 0;
              do {
               if ((i42 | 0) == -1) {
                __ZNK7WebCore21TextCheckingParagraph13offsetAsRangeEv(i7, i11);
                i43 = HEAP32[i29 >> 2] | 0;
                i44 = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i43, 0) | 0;
                HEAP32[i24 >> 2] = i44;
                if ((i43 | 0) == 0) {
                 i45 = i44;
                 break;
                }
                i44 = i43 | 0;
                i46 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
                if ((i46 | 0) == 0) {
                 __ZN7WebCore5RangeD1Ev(i43);
                 __ZN3WTF8fastFreeEPv(i43);
                } else {
                 HEAP32[i44 >> 2] = i46;
                }
                i45 = HEAP32[i24 >> 2] | 0;
               } else {
                i45 = i42;
               }
              } while (0);
              if ((i45 | 0) < (i36 | 0)) {
               break;
              }
              i42 = i35 + i36 | 0;
              do {
               if ((i45 | 0) == -1) {
                __ZNK7WebCore21TextCheckingParagraph13offsetAsRangeEv(i8, i11);
                i46 = HEAP32[i31 >> 2] | 0;
                HEAP32[i24 >> 2] = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i46, 0) | 0;
                if ((i46 | 0) == 0) {
                 break;
                }
                i44 = i46 | 0;
                i43 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
                if ((i43 | 0) == 0) {
                 __ZN7WebCore5RangeD1Ev(i46);
                 __ZN3WTF8fastFreeEPv(i46);
                 break;
                } else {
                 HEAP32[i44 >> 2] = i43;
                 break;
                }
               }
              } while (0);
              i36 = HEAP32[i24 >> 2] | 0;
              do {
               if ((HEAP32[i25 >> 2] | 0) == -1) {
                i35 = HEAP32[i23 >> 2] | 0;
                if ((i35 | 0) == 0) {
                 HEAP32[i25 >> 2] = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(0, 0) | 0;
                 break;
                }
                i43 = i35 | 0;
                HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
                HEAP32[i25 >> 2] = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i35, 0) | 0;
                i44 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
                if ((i44 | 0) == 0) {
                 __ZN7WebCore5RangeD1Ev(i35);
                 __ZN3WTF8fastFreeEPv(i35);
                 break;
                } else {
                 HEAP32[i43 >> 2] = i44;
                 break;
                }
               }
              } while (0);
              if ((i42 | 0) < ((HEAP32[i25 >> 2] | 0) + i36 | 0)) {
               break;
              }
              i44 = i30 + (i37 * 28 & -1) + 20 | 0;
              i43 = i30 + (i37 * 28 & -1) + 12 | 0;
              i47 = 0;
              while (1) {
               if (i47 >>> 0 >= (HEAP32[i44 >> 2] | 0) >>> 0) {
                break L51;
               }
               i48 = HEAP32[i43 >> 2] | 0;
               i49 = i48 + (i47 * 24 & -1) | 0;
               if (__ZNK7WebCore21TextCheckingParagraph20checkingRangeMatchesEii(i11, (HEAP32[i49 >> 2] | 0) + (HEAP32[i40 >> 2] | 0) | 0, HEAP32[i48 + (i47 * 24 & -1) + 4 >> 2] | 0) | 0) {
                break L49;
               } else {
                i47 = i47 + 1 | 0;
               }
              }
             }
            } while (0);
            i43 = i37 + 1 | 0;
            if (i43 >>> 0 < i34 >>> 0) {
             i37 = i43;
            } else {
             i39 = i34;
             break L47;
            }
           }
           i37 = HEAP32[i40 >> 2] | 0;
           i30 = HEAP32[i41 >> 2] | 0;
           __ZNK3WTF6String9substringEjj(i15, __ZNK7WebCore21TextCheckingParagraph4textEv(i11) | 0, i37, i30);
           i30 = i48 + (i47 * 24 & -1) + 16 | 0;
           L84 : do {
            if ((HEAP32[i30 >> 2] | 0) != 0) {
             i37 = i48 + (i47 * 24 & -1) + 8 | 0;
             i31 = 0;
             i29 = HEAP32[i20 >> 2] | 0;
             L86 : while (1) {
              i43 = (HEAP32[i37 >> 2] | 0) + (i31 << 2) | 0;
              if ((i29 | 0) == (HEAP32[i19 >> 2] | 0)) {
               i44 = i29 + 1 | 0;
               i36 = HEAP32[i18 >> 2] | 0;
               do {
                if (i36 >>> 0 > i43 >>> 0) {
                 i22 = 67;
                } else {
                 if ((i36 + (i29 << 2) | 0) >>> 0 <= i43 >>> 0) {
                  i22 = 67;
                  break;
                 }
                 i42 = i43 - i36 >> 2;
                 i35 = i44 + (i29 >>> 2) | 0;
                 i46 = i35 >>> 0 > 16 >>> 0 ? i35 : 16;
                 i35 = i46 >>> 0 > i44 >>> 0 ? i46 : i44;
                 do {
                  if (i29 >>> 0 < i35 >>> 0) {
                   if (i35 >>> 0 > 1073741823 >>> 0) {
                    i22 = 77;
                    break L86;
                   }
                   i46 = __ZN3WTF18fastMallocGoodSizeEj(i35 << 2) | 0;
                   HEAP32[i19 >> 2] = i46 >>> 2;
                   i50 = __ZN3WTF10fastMallocEj(i46) | 0;
                   HEAP32[i18 >> 2] = i50;
                   i46 = i36;
                   _memcpy(i50 | 0, i46 | 0, i29 << 2) | 0;
                   if ((i36 | 0) == 0) {
                    break;
                   }
                   if ((HEAP32[i18 >> 2] | 0) == (i36 | 0)) {
                    HEAP32[i18 >> 2] = 0;
                    HEAP32[i19 >> 2] = 0;
                   }
                   __ZN3WTF8fastFreeEPv(i46);
                  }
                 } while (0);
                 i35 = HEAP32[i18 >> 2] | 0;
                 i51 = i35 + (i42 << 2) | 0;
                 i52 = i35;
                }
               } while (0);
               if ((i22 | 0) == 67) {
                i22 = 0;
                i35 = i44 + (i29 >>> 2) | 0;
                i46 = i35 >>> 0 > 16 >>> 0 ? i35 : 16;
                i35 = i46 >>> 0 > i44 >>> 0 ? i46 : i44;
                do {
                 if (i29 >>> 0 < i35 >>> 0) {
                  if (i35 >>> 0 > 1073741823 >>> 0) {
                   i22 = 69;
                   break L86;
                  }
                  i46 = __ZN3WTF18fastMallocGoodSizeEj(i35 << 2) | 0;
                  HEAP32[i19 >> 2] = i46 >>> 2;
                  i50 = __ZN3WTF10fastMallocEj(i46) | 0;
                  HEAP32[i18 >> 2] = i50;
                  i46 = i36;
                  _memcpy(i50 | 0, i46 | 0, i29 << 2) | 0;
                  if ((i36 | 0) == 0) {
                   break;
                  }
                  if ((HEAP32[i18 >> 2] | 0) == (i36 | 0)) {
                   HEAP32[i18 >> 2] = 0;
                   HEAP32[i19 >> 2] = 0;
                  }
                  __ZN3WTF8fastFreeEPv(i46);
                 }
                } while (0);
                i51 = i43;
                i52 = HEAP32[i18 >> 2] | 0;
               }
               i36 = HEAP32[i51 >> 2] | 0;
               HEAP32[i52 + (HEAP32[i20 >> 2] << 2) >> 2] = i36;
               if ((i36 | 0) != 0) {
                i35 = i36 | 0;
                HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 2;
               }
               i53 = HEAP32[i20 >> 2] | 0;
              } else {
               i35 = HEAP32[i43 >> 2] | 0;
               HEAP32[(HEAP32[i18 >> 2] | 0) + (i29 << 2) >> 2] = i35;
               if ((i35 | 0) != 0) {
                i36 = i35 | 0;
                HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 2;
               }
               i53 = HEAP32[i20 >> 2] | 0;
              }
              i29 = i53 + 1 | 0;
              HEAP32[i20 >> 2] = i29;
              i31 = i31 + 1 | 0;
              if (i31 >>> 0 >= (HEAP32[i30 >> 2] | 0) >>> 0) {
               break L84;
              }
             }
             if ((i22 | 0) == 69) {
              _WTFCrash();
             } else if ((i22 | 0) == 77) {
              _WTFCrash();
             }
            }
           } while (0);
           i30 = HEAP32[i21 >> 2] | 0;
           FUNCTION_TABLE_viii[HEAP32[(HEAP32[i30 >> 2] | 0) + 172 >> 2] & 7](i30, i15, i49);
           HEAP8[i5] = 1;
           HEAP32[i1 + 8 >> 2] = HEAP32[i20 >> 2];
           HEAP32[i20 >> 2] = 0;
           HEAP32[i1 >> 2] = HEAP32[i18 >> 2];
           HEAP32[i18 >> 2] = 0;
           HEAP32[i1 + 4 >> 2] = HEAP32[i19 >> 2];
           HEAP32[i19 >> 2] = 0;
           i30 = HEAP32[i15 >> 2] | 0;
           if ((i30 | 0) == 0) {
            i38 = i34;
            break L42;
           }
           i31 = i30 | 0;
           i29 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
           if ((i29 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i30);
            i38 = i34;
            break L42;
           } else {
            HEAP32[i31 >> 2] = i29;
            i38 = i34;
            break L42;
           }
          }
         } while (0);
         HEAP32[i1 + 8 >> 2] = HEAP32[i20 >> 2];
         HEAP32[i20 >> 2] = 0;
         HEAP32[i1 >> 2] = HEAP32[i18 >> 2];
         HEAP32[i18 >> 2] = 0;
         HEAP32[i1 + 4 >> 2] = HEAP32[i19 >> 2];
         HEAP32[i19 >> 2] = 0;
         i38 = i39;
        }
       } while (0);
       if ((i38 | 0) != 0) {
        i29 = HEAP32[i26 >> 2] | 0;
        i31 = i29 + (i38 * 28 & -1) | 0;
        i30 = i29;
        while (1) {
         i29 = HEAP32[i30 + 24 >> 2] | 0;
         do {
          if ((i29 | 0) != 0) {
           i37 = i29 | 0;
           i36 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
           if ((i36 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i29);
            break;
           } else {
            HEAP32[i37 >> 2] = i36;
            break;
           }
          }
         } while (0);
         __ZN3WTF6VectorIN7WebCore13GrammarDetailELj0ENS_15CrashOnOverflowEED1Ev(i30 + 12 | 0);
         i30 = i30 + 28 | 0;
         if ((i30 | 0) == (i31 | 0)) {
          break;
         }
        }
        HEAP32[i28 >> 2] = 0;
       }
       i31 = HEAP32[i26 >> 2] | 0;
       if ((i31 | 0) == 0) {
        break;
       }
       HEAP32[i26 >> 2] = 0;
       HEAP32[i27 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i31);
      }
     } while (0);
     __ZN7WebCore21TextCheckingParagraphD2Ev(i11);
     i25 = HEAP32[i20 >> 2] | 0;
     if ((i25 | 0) == 0) {
      break;
     }
     i23 = HEAP32[i18 >> 2] | 0;
     i24 = i23 + (i25 << 2) | 0;
     i25 = i23;
     while (1) {
      i23 = HEAP32[i25 >> 2] | 0;
      do {
       if ((i23 | 0) != 0) {
        i31 = i23 | 0;
        i30 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
        if ((i30 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i23);
         break;
        } else {
         HEAP32[i31 >> 2] = i30;
         break;
        }
       }
      } while (0);
      i25 = i25 + 4 | 0;
      if ((i25 | 0) == (i24 | 0)) {
       break;
      }
     }
     HEAP32[i20 >> 2] = 0;
    }
   } while (0);
   if ((i22 | 0) == 8) {
    _memset(i1 | 0, 0, 12) | 0;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i1 >> 2] = 0;
    HEAP32[i18 >> 2] = 0;
    HEAP32[i1 + 4 >> 2] = 0;
    HEAP32[i19 >> 2] = 0;
   }
   i21 = HEAP32[i18 >> 2] | 0;
   if ((i21 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   HEAP32[i18 >> 2] = 0;
   HEAP32[i19 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i21);
   STACKTOP = i6;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore20checkTextOfParagraphEPNS_17TextCheckerClientEPKtijRN3WTF6VectorINS_18TextCheckingResultELj0ENS4_15CrashOnOverflowEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 32 | 0;
 i11 = i6 + 64 | 0;
 i12 = i6 + 72 | 0;
 i13 = i6 + 80 | 0;
 i14 = i6 + 112 | 0;
 i15 = i6 + 120 | 0;
 i16 = i6 + 128 | 0;
 i17 = i6 + 144 | 0;
 i18 = i16 | 0;
 HEAP32[i18 >> 2] = 0;
 i19 = i16 + 4 | 0;
 HEAP32[i19 >> 2] = 0;
 i20 = i16 + 8 | 0;
 HEAP32[i20 >> 2] = 0;
 L1 : do {
  if ((i4 & 2 | 0) != 0) {
   i21 = __ZN7WebCore17wordBreakIteratorEPKti(i2, i3) | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   i22 = __ZN7WebCore16textBreakCurrentEPNS_17TextBreakIteratorE(i21) | 0;
   if ((i22 | 0) <= -1) {
    break;
   }
   i23 = i1;
   i24 = i13 + 12 | 0;
   i25 = i13 | 0;
   i26 = i13 + 4 | 0;
   i27 = i13 + 8 | 0;
   i28 = i1;
   i29 = i14 | 0;
   i30 = i13 + 24 | 0;
   i31 = i15 | 0;
   i32 = i13 + 12 | 0;
   i33 = i22;
   while (1) {
    i22 = __ZN7WebCore13textBreakNextEPNS_17TextBreakIteratorE(i21) | 0;
    if ((i22 | 0) < 0) {
     break L1;
    }
    HEAP32[i11 >> 2] = -1;
    HEAP32[i12 >> 2] = 0;
    FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i23 >> 2] | 0) + 20 >> 2] & 1](i1, i2 + (i33 << 1) | 0, i22 - i33 | 0, i11, i12);
    i34 = HEAP32[i12 >> 2] | 0;
    if ((i34 | 0) > 0) {
     _memset(i24 | 0, 0, 16) | 0;
     HEAP32[i25 >> 2] = 2;
     i35 = (HEAP32[i11 >> 2] | 0) + i33 | 0;
     HEAP32[i26 >> 2] = i35;
     HEAP32[i27 >> 2] = i34;
     i36 = HEAP32[(HEAP32[i28 >> 2] | 0) + 24 >> 2] | 0;
     __ZN3WTF6StringC1EPKtj(i15, i2 + (i35 << 1) | 0, i34);
     FUNCTION_TABLE_viii[i36 & 7](i14, i1, i15);
     i36 = HEAP32[i29 >> 2] | 0;
     HEAP32[i29 >> 2] = 0;
     HEAP32[i30 >> 2] = i36;
     i36 = HEAP32[i31 >> 2] | 0;
     do {
      if ((i36 | 0) != 0) {
       i34 = i36 | 0;
       i35 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
       if ((i35 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i36);
        break;
       } else {
        HEAP32[i34 >> 2] = i35;
        break;
       }
      }
     } while (0);
     i36 = HEAP32[i20 >> 2] | 0;
     if ((i36 | 0) == (HEAP32[i19 >> 2] | 0)) {
      __ZN3WTF6VectorIN7WebCore18TextCheckingResultELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i16, i13);
     } else {
      i35 = HEAP32[i18 >> 2] | 0;
      HEAP32[i35 + (i36 * 28 & -1) >> 2] = HEAP32[i25 >> 2];
      HEAP32[i35 + (i36 * 28 & -1) + 4 >> 2] = HEAP32[i26 >> 2];
      HEAP32[i35 + (i36 * 28 & -1) + 8 >> 2] = HEAP32[i27 >> 2];
      __ZN3WTF6VectorIN7WebCore13GrammarDetailELj0ENS_15CrashOnOverflowEEC2ERKS4_(i35 + (i36 * 28 & -1) + 12 | 0, i32);
      i34 = HEAP32[i30 >> 2] | 0;
      HEAP32[i35 + (i36 * 28 & -1) + 24 >> 2] = i34;
      if ((i34 | 0) != 0) {
       i35 = i34 | 0;
       HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 2;
      }
      HEAP32[i20 >> 2] = i36 + 1;
     }
     i36 = HEAP32[i30 >> 2] | 0;
     do {
      if ((i36 | 0) != 0) {
       i35 = i36 | 0;
       i34 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
       if ((i34 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i36);
        break;
       } else {
        HEAP32[i35 >> 2] = i34;
        break;
       }
      }
     } while (0);
     __ZN3WTF6VectorIN7WebCore13GrammarDetailELj0ENS_15CrashOnOverflowEED1Ev(i32);
    }
    if ((i22 | 0) > -1) {
     i33 = i22;
    } else {
     break;
    }
   }
  }
 } while (0);
 i13 = i17 | 0;
 HEAP32[i13 >> 2] = 0;
 i16 = i17 + 4 | 0;
 HEAP32[i16 >> 2] = 0;
 i15 = i17 + 8 | 0;
 HEAP32[i15 >> 2] = 0;
 i14 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i4 & 4 | 0) == 0) {
   i37 = 0;
  } else {
   if ((i14 | 0) == 0) {
    i38 = i3;
   } else {
    i11 = HEAP32[i18 >> 2] | 0;
    i12 = i3;
    i33 = 0;
    while (1) {
     i32 = HEAP32[i11 + (i33 * 28 & -1) + 4 >> 2] | 0;
     i30 = (i32 | 0) < (i12 | 0) ? i32 : i12;
     i32 = i33 + 1 | 0;
     if (i32 >>> 0 < i14 >>> 0) {
      i12 = i30;
      i33 = i32;
     } else {
      i38 = i30;
      break;
     }
    }
   }
   L38 : do {
    if ((i38 | 0) > 0) {
     i33 = i9 | 0;
     i12 = i9 + 4 | 0;
     i11 = i9 + 8 | 0;
     i30 = i1;
     i32 = i10 + 12 | 0;
     i27 = i10 | 0;
     i26 = i10 + 4 | 0;
     i25 = i10 + 8 | 0;
     i31 = i10 + 12 | 0;
     i29 = i10 + 20 | 0;
     i28 = i31 | 0;
     i24 = i10 + 16 | 0;
     i23 = i10 + 24 | 0;
     i21 = 0;
     i36 = i38;
     while (1) {
      HEAP32[i7 >> 2] = -1;
      HEAP32[i8 >> 2] = 0;
      HEAP32[i33 >> 2] = 0;
      HEAP32[i12 >> 2] = 0;
      HEAP32[i11 >> 2] = 0;
      FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i30 >> 2] | 0) + 28 >> 2] & 1](i1, i2 + (i21 << 1) | 0, i36, i9, i7, i8);
      i34 = HEAP32[i8 >> 2] | 0;
      if ((i34 | 0) == 0) {
       break;
      }
      _memset(i32 | 0, 0, 16) | 0;
      HEAP32[i27 >> 2] = 4;
      HEAP32[i26 >> 2] = (HEAP32[i7 >> 2] | 0) + i21;
      HEAP32[i25 >> 2] = i34;
      HEAP32[i29 >> 2] = HEAP32[i11 >> 2];
      HEAP32[i11 >> 2] = 0;
      HEAP32[i28 >> 2] = HEAP32[i33 >> 2];
      HEAP32[i33 >> 2] = 0;
      HEAP32[i24 >> 2] = HEAP32[i12 >> 2];
      HEAP32[i12 >> 2] = 0;
      i34 = HEAP32[i15 >> 2] | 0;
      if ((i34 | 0) == (HEAP32[i16 >> 2] | 0)) {
       __ZN3WTF6VectorIN7WebCore18TextCheckingResultELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i17, i10);
      } else {
       i35 = HEAP32[i13 >> 2] | 0;
       HEAP32[i35 + (i34 * 28 & -1) >> 2] = 4;
       HEAP32[i35 + (i34 * 28 & -1) + 4 >> 2] = HEAP32[i26 >> 2];
       HEAP32[i35 + (i34 * 28 & -1) + 8 >> 2] = HEAP32[i25 >> 2];
       __ZN3WTF6VectorIN7WebCore13GrammarDetailELj0ENS_15CrashOnOverflowEEC2ERKS4_(i35 + (i34 * 28 & -1) + 12 | 0, i31);
       i39 = HEAP32[i23 >> 2] | 0;
       HEAP32[i35 + (i34 * 28 & -1) + 24 >> 2] = i39;
       if ((i39 | 0) != 0) {
        i35 = i39 | 0;
        HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 2;
       }
       HEAP32[i15 >> 2] = i34 + 1;
      }
      i34 = (HEAP32[i8 >> 2] | 0) + (HEAP32[i7 >> 2] | 0) | 0;
      i21 = i34 + i21 | 0;
      i36 = i36 - i34 | 0;
      i34 = HEAP32[i23 >> 2] | 0;
      do {
       if ((i34 | 0) != 0) {
        i35 = i34 | 0;
        i39 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
        if ((i39 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i34);
         break;
        } else {
         HEAP32[i35 >> 2] = i39;
         break;
        }
       }
      } while (0);
      __ZN3WTF6VectorIN7WebCore13GrammarDetailELj0ENS_15CrashOnOverflowEED1Ev(i31);
      __ZN3WTF6VectorIN7WebCore13GrammarDetailELj0ENS_15CrashOnOverflowEED1Ev(i9);
      if ((i36 | 0) <= 0) {
       break L38;
      }
     }
     __ZN3WTF6VectorIN7WebCore13GrammarDetailELj0ENS_15CrashOnOverflowEED1Ev(i9);
    }
   } while (0);
   i36 = HEAP32[i15 >> 2] | 0;
   if ((i36 | 0) == 0) {
    i37 = 0;
    break;
   }
   i31 = i5 + 8 | 0;
   i23 = HEAP32[i31 >> 2] | 0;
   HEAP32[i31 >> 2] = i36;
   HEAP32[i15 >> 2] = i23;
   i36 = i5 | 0;
   i31 = HEAP32[i36 >> 2] | 0;
   HEAP32[i36 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i13 >> 2] = i31;
   i31 = i5 + 4 | 0;
   i36 = HEAP32[i31 >> 2] | 0;
   HEAP32[i31 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i16 >> 2] = i36;
   i37 = i23;
  }
 } while (0);
 do {
  if ((i14 | 0) != 0) {
   i9 = i5 + 8 | 0;
   if ((HEAP32[i9 >> 2] | 0) == 0) {
    HEAP32[i9 >> 2] = i14;
    HEAP32[i20 >> 2] = 0;
    i9 = i5 | 0;
    i7 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = HEAP32[i18 >> 2];
    HEAP32[i18 >> 2] = i7;
    i7 = i5 + 4 | 0;
    i9 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = HEAP32[i19 >> 2];
    HEAP32[i19 >> 2] = i9;
    break;
   } else {
    __ZN3WTF6VectorIN7WebCore18TextCheckingResultELj0ENS_15CrashOnOverflowEE6appendIS2_EEvPKT_j(i5, HEAP32[i18 >> 2] | 0, i14);
    break;
   }
  }
 } while (0);
 if ((i37 | 0) != 0) {
  i14 = HEAP32[i13 >> 2] | 0;
  i5 = i14 + (i37 * 28 & -1) | 0;
  i37 = i14;
  while (1) {
   i14 = HEAP32[i37 + 24 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i9 = i14 | 0;
     i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i9 >> 2] = i7;
      break;
     }
    }
   } while (0);
   __ZN3WTF6VectorIN7WebCore13GrammarDetailELj0ENS_15CrashOnOverflowEED1Ev(i37 + 12 | 0);
   i37 = i37 + 28 | 0;
   if ((i37 | 0) == (i5 | 0)) {
    break;
   }
  }
  HEAP32[i15 >> 2] = 0;
 }
 i15 = HEAP32[i13 >> 2] | 0;
 if ((i15 | 0) != 0) {
  HEAP32[i13 >> 2] = 0;
  HEAP32[i16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i15);
 }
 i15 = HEAP32[i20 >> 2] | 0;
 if ((i15 | 0) != 0) {
  i16 = HEAP32[i18 >> 2] | 0;
  i13 = i16 + (i15 * 28 & -1) | 0;
  i15 = i16;
  while (1) {
   i16 = HEAP32[i15 + 24 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i5 = i16 | 0;
     i37 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i37 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i5 >> 2] = i37;
      break;
     }
    }
   } while (0);
   __ZN3WTF6VectorIN7WebCore13GrammarDetailELj0ENS_15CrashOnOverflowEED1Ev(i15 + 12 | 0);
   i15 = i15 + 28 | 0;
   if ((i15 | 0) == (i13 | 0)) {
    break;
   }
  }
  HEAP32[i20 >> 2] = 0;
 }
 i20 = HEAP32[i18 >> 2] | 0;
 if ((i20 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 HEAP32[i18 >> 2] = 0;
 HEAP32[i19 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i20);
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore18TextCheckingHelper19findFirstBadGrammarERNS_13GrammarDetailERib(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 56 | 0;
 i12 = i6 + 72 | 0;
 i13 = i6 + 80 | 0;
 i14 = i6 + 88 | 0;
 i15 = i3 | 0;
 HEAP32[i15 >> 2] = -1;
 i16 = i3 + 4 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i3 + 8 | 0;
 i18 = i3 + 12 | 0;
 do {
  if ((HEAP32[i18 >> 2] | 0) != 0) {
   i19 = i3 + 16 | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   i21 = i17 | 0;
   if ((i20 | 0) != 0) {
    i22 = HEAP32[i21 >> 2] | 0;
    i23 = i22 + (i20 << 2) | 0;
    i20 = i22;
    while (1) {
     i22 = HEAP32[i20 >> 2] | 0;
     do {
      if ((i22 | 0) != 0) {
       i24 = i22 | 0;
       i25 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
       if ((i25 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i22);
        break;
       } else {
        HEAP32[i24 >> 2] = i25;
        break;
       }
      }
     } while (0);
     i20 = i20 + 4 | 0;
     if ((i20 | 0) == (i23 | 0)) {
      break;
     }
    }
    HEAP32[i19 >> 2] = 0;
   }
   i23 = HEAP32[i21 >> 2] | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   HEAP32[i21 >> 2] = 0;
   HEAP32[i18 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i23);
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i9, H_BASE + 8 | 0);
 i18 = i9 | 0;
 i9 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 i23 = i3 + 20 | 0;
 i3 = HEAP32[i23 >> 2] | 0;
 HEAP32[i23 >> 2] = i9;
 do {
  if ((i3 | 0) != 0) {
   i9 = i3 | 0;
   i20 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i9 >> 2] = i20;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i18 = i3 | 0;
   i20 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i18 >> 2] = i20;
    break;
   }
  }
 } while (0);
 HEAP32[i4 >> 2] = 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i20 = i3 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
 }
 HEAP32[i10 >> 2] = i3;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i10 + 8 >> 2] = 0;
 HEAP32[i10 + 12 >> 2] = 0;
 i3 = i10 + 16 | 0;
 HEAP32[i3 >> 2] = -1;
 HEAP32[i10 + 20 >> 2] = -1;
 HEAP32[i10 + 24 >> 2] = -1;
 L32 : do {
  if ((__ZNK7WebCore21TextCheckingParagraph11checkingEndEv(i10) | 0) > 0) {
   i20 = i11 | 0;
   i18 = i11 + 4 | 0;
   i9 = i11 + 8 | 0;
   i22 = i2 | 0;
   i25 = i8 | 0;
   i24 = i7 | 0;
   i26 = i14 | 0;
   i27 = 0;
   i28 = 0;
   L34 : while (1) {
    HEAP32[i20 >> 2] = 0;
    HEAP32[i18 >> 2] = 0;
    HEAP32[i9 >> 2] = 0;
    HEAP32[i12 >> 2] = -1;
    HEAP32[i13 >> 2] = 0;
    i29 = HEAP32[i22 >> 2] | 0;
    i30 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i29 >> 2] | 0) + 168 >> 2] & 1](i29) | 0;
    i29 = HEAP32[(HEAP32[i30 >> 2] | 0) + 28 >> 2] | 0;
    i31 = HEAP32[(__ZNK7WebCore21TextCheckingParagraph4textEv(i10) | 0) >> 2] | 0;
    do {
     if ((i31 | 0) == 0) {
      i32 = 0;
     } else {
      if ((HEAP32[i31 + 16 >> 2] & 32 | 0) == 0) {
       i32 = HEAP32[i31 + 8 >> 2] | 0;
       break;
      } else {
       i32 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i31) | 0;
       break;
      }
     }
    } while (0);
    i31 = HEAP32[(__ZNK7WebCore21TextCheckingParagraph4textEv(i10) | 0) >> 2] | 0;
    if ((i31 | 0) == 0) {
     i33 = 0;
    } else {
     i33 = HEAP32[i31 + 4 >> 2] | 0;
    }
    FUNCTION_TABLE_viiiiii[i29 & 1](i30, i32 + (i28 << 1) | 0, i33 - i28 | 0, i11, i12, i13);
    if ((HEAP32[i13 >> 2] | 0) == 0) {
     i34 = 64;
     break;
    }
    i31 = (HEAP32[i12 >> 2] | 0) + i28 | 0;
    HEAP32[i12 >> 2] = i31;
    do {
     if ((HEAP32[i3 >> 2] | 0) == -1) {
      __ZNK7WebCore21TextCheckingParagraph13offsetAsRangeEv(i8, i10);
      i35 = HEAP32[i25 >> 2] | 0;
      HEAP32[i3 >> 2] = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i35, 0) | 0;
      if ((i35 | 0) == 0) {
       break;
      }
      i36 = i35 | 0;
      i37 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
      if ((i37 | 0) == 0) {
       __ZN7WebCore5RangeD1Ev(i35);
       __ZN3WTF8fastFreeEPv(i35);
       break;
      } else {
       HEAP32[i36 >> 2] = i37;
       break;
      }
     }
    } while (0);
    i30 = HEAP32[i3 >> 2] | 0;
    i29 = __ZNK7WebCore18TextCheckingHelper22findFirstGrammarDetailERKN3WTF6VectorINS_13GrammarDetailELj0ENS1_15CrashOnOverflowEEEiiib(i2, i11, i31, i30, __ZNK7WebCore21TextCheckingParagraph11checkingEndEv(i10) | 0, i5) | 0;
    do {
     if ((i29 | 0) > -1) {
      if ((HEAP32[i9 >> 2] | 0) >>> 0 <= i29 >>> 0) {
       i34 = 38;
       break L34;
      }
      i30 = HEAP32[i20 >> 2] | 0;
      HEAP32[i15 >> 2] = HEAP32[i30 + (i29 * 24 & -1) >> 2];
      HEAP32[i16 >> 2] = HEAP32[i30 + (i29 * 24 & -1) + 4 >> 2];
      __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_(i17, i30 + (i29 * 24 & -1) + 8 | 0) | 0;
      i37 = HEAP32[i30 + (i29 * 24 & -1) + 20 >> 2] | 0;
      if ((i37 | 0) != 0) {
       i30 = i37 | 0;
       HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 2;
      }
      i30 = HEAP32[i23 >> 2] | 0;
      HEAP32[i23 >> 2] = i37;
      do {
       if ((i30 | 0) != 0) {
        i37 = i30 | 0;
        i36 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
        if ((i36 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i30);
         break;
        } else {
         HEAP32[i37 >> 2] = i36;
         break;
        }
       }
      } while (0);
      i30 = (i27 | 0) == 0;
      if (!i30) {
       if ((HEAP32[i27 + 4 >> 2] | 0) != 0) {
        i38 = i27;
        break;
       }
      }
      i36 = HEAP32[i12 >> 2] | 0;
      do {
       if ((HEAP32[i3 >> 2] | 0) == -1) {
        __ZNK7WebCore21TextCheckingParagraph13offsetAsRangeEv(i7, i10);
        i37 = HEAP32[i24 >> 2] | 0;
        HEAP32[i3 >> 2] = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i37, 0) | 0;
        if ((i37 | 0) == 0) {
         break;
        }
        i35 = i37 | 0;
        i39 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
        if ((i39 | 0) == 0) {
         __ZN7WebCore5RangeD1Ev(i37);
         __ZN3WTF8fastFreeEPv(i37);
         break;
        } else {
         HEAP32[i35 >> 2] = i39;
         break;
        }
       }
      } while (0);
      HEAP32[i4 >> 2] = i36 - (HEAP32[i3 >> 2] | 0);
      i39 = HEAP32[i12 >> 2] | 0;
      i35 = HEAP32[i13 >> 2] | 0;
      __ZNK3WTF6String9substringEjj(i14, __ZNK7WebCore21TextCheckingParagraph4textEv(i10) | 0, i39, i35);
      i40 = HEAP32[i26 >> 2] | 0;
      HEAP32[i26 >> 2] = 0;
      do {
       if (!i30) {
        i35 = i27 | 0;
        i39 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
        if ((i39 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i27);
        } else {
         HEAP32[i35 >> 2] = i39;
        }
        i39 = HEAP32[i26 >> 2] | 0;
        if ((i39 | 0) == 0) {
         break;
        }
        i35 = i39 | 0;
        i37 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
        if ((i37 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i39);
         break;
        } else {
         HEAP32[i35 >> 2] = i37;
         break;
        }
       }
      } while (0);
      if (i5) {
       i38 = i40;
      } else {
       i34 = 62;
       break L34;
      }
     } else {
      i38 = i27;
     }
    } while (0);
    i29 = (HEAP32[i13 >> 2] | 0) + (HEAP32[i12 >> 2] | 0) | 0;
    __ZN3WTF6VectorIN7WebCore13GrammarDetailELj0ENS_15CrashOnOverflowEED1Ev(i11);
    if ((i29 | 0) < (__ZNK7WebCore21TextCheckingParagraph11checkingEndEv(i10) | 0)) {
     i27 = i38;
     i28 = i29;
    } else {
     i41 = i38;
     break L32;
    }
   }
   if ((i34 | 0) == 38) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i34 | 0) == 62) {
    __ZN3WTF6VectorIN7WebCore13GrammarDetailELj0ENS_15CrashOnOverflowEED1Ev(i11);
    i41 = i40;
    break;
   } else if ((i34 | 0) == 64) {
    HEAP32[i1 >> 2] = 0;
    __ZN3WTF6VectorIN7WebCore13GrammarDetailELj0ENS_15CrashOnOverflowEED1Ev(i11);
    __ZN7WebCore21TextCheckingParagraphD2Ev(i10);
    if ((i27 | 0) == 0) {
     STACKTOP = i6;
     return;
    }
    i28 = i27 | 0;
    i26 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
    if ((i26 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i27);
     STACKTOP = i6;
     return;
    } else {
     HEAP32[i28 >> 2] = i26;
     STACKTOP = i6;
     return;
    }
   }
  } else {
   i41 = 0;
  }
 } while (0);
 HEAP32[i1 >> 2] = i41;
 __ZN7WebCore21TextCheckingParagraphD2Ev(i10);
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore21TextCheckingParagraph14paragraphRangeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 64 | 0;
 i12 = i3 + 80 | 0;
 i13 = i3 + 96 | 0;
 i14 = i3 + 112 | 0;
 i15 = i3 + 128 | 0;
 i16 = i2 + 4 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i17 | 0) == 0) {
   i18 = HEAP32[i2 >> 2] | 0;
   i19 = (i18 | 0) == 0;
   if (!i19) {
    i20 = i18 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   }
   i20 = i9 | 0;
   HEAP32[i20 >> 2] = 0;
   __ZNK7WebCore5Range10cloneRangeERi(i8, i18, i20);
   i20 = i8 | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   i20 = i18 + 12 | 0;
   i22 = HEAP32[i20 >> 2] | 0;
   if ((i22 | 0) > -1) {
    i23 = i22;
   } else {
    i22 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i18 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i20 >> 2] = i22;
    i23 = i22;
   }
   i22 = HEAP32[i18 + 8 >> 2] | 0;
   if ((i22 | 0) == 0) {
    i24 = i23;
   } else {
    i25 = i22 + 8 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
    i24 = HEAP32[i20 >> 2] | 0;
   }
   i20 = i6 | 0;
   HEAP32[i20 >> 2] = i22;
   HEAP32[i7 >> 2] = i24;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i12, i6, i7);
   i22 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i20 = i22 + 8 | 0;
     i25 = i20 | 0;
     i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     HEAP32[i25 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i11, i12, 1);
   __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i10, i11, 1);
   __ZN7WebCore8setStartEPNS_5RangeERKNS_15VisiblePositionE(i21, i10) | 0;
   i22 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i20 = i22 + 8 | 0;
     i26 = i20 | 0;
     i25 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
    }
   } while (0);
   i22 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i20 = i22 + 8 | 0;
     i25 = i20 | 0;
     i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     HEAP32[i25 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
    }
   } while (0);
   i22 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i20 = i22 + 8 | 0;
     i26 = i20 | 0;
     i25 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
    }
   } while (0);
   i22 = i18 + 24 | 0;
   i20 = HEAP32[i22 >> 2] | 0;
   if ((i20 | 0) > -1) {
    i27 = i20;
   } else {
    i20 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i18 + 28 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i22 >> 2] = i20;
    i27 = i20;
   }
   i20 = HEAP32[i18 + 20 >> 2] | 0;
   if ((i20 | 0) == 0) {
    i28 = i27;
   } else {
    i25 = i20 + 8 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
    i28 = HEAP32[i22 >> 2] | 0;
   }
   i22 = i4 | 0;
   HEAP32[i22 >> 2] = i20;
   HEAP32[i5 >> 2] = i28;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i15, i4, i5);
   i20 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i22 = i20 + 8 | 0;
     i25 = i22 | 0;
     i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     HEAP32[i25 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i14, i15, 1);
   __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i13, i14, 1);
   __ZN7WebCore6setEndEPNS_5RangeERKNS_15VisiblePositionE(i21, i13) | 0;
   i20 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i22 = i20 + 8 | 0;
     i26 = i22 | 0;
     i25 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
    }
   } while (0);
   i20 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i22 = i20 + 8 | 0;
     i25 = i22 | 0;
     i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     HEAP32[i25 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
    }
   } while (0);
   i20 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i22 = i20 + 8 | 0;
     i26 = i22 | 0;
     i25 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
    }
   } while (0);
   do {
    if ((i21 | 0) != 0) {
     i20 = i21 | 0;
     i22 = HEAP32[i20 >> 2] | 0;
     HEAP32[i20 >> 2] = i22 + 1;
     if ((i22 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i21);
      __ZN3WTF8fastFreeEPv(i21);
      break;
     } else {
      HEAP32[i20 >> 2] = i22;
      break;
     }
    }
   } while (0);
   i22 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = i21;
   do {
    if ((i22 | 0) != 0) {
     i20 = i22 | 0;
     i25 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i25 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i22);
      __ZN3WTF8fastFreeEPv(i22);
      break;
     } else {
      HEAP32[i20 >> 2] = i25;
      break;
     }
    }
   } while (0);
   do {
    if (!i19) {
     i22 = i18 | 0;
     i21 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
     if ((i21 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i18);
      __ZN3WTF8fastFreeEPv(i18);
      break;
     } else {
      HEAP32[i22 >> 2] = i21;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i16 >> 2] | 0;
   HEAP32[i1 >> 2] = i18;
   if ((i18 | 0) != 0) {
    i29 = i18;
    break;
   }
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i1 >> 2] = i17;
   i29 = i17;
  }
 } while (0);
 i17 = i29 | 0;
 HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore21TextCheckingParagraph13offsetAsRangeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 64 | 0;
 i12 = i3 + 72 | 0;
 i13 = i2 + 8 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   __ZNK7WebCore21TextCheckingParagraph14paragraphRangeEv(i9, i2);
   i15 = HEAP32[i9 >> 2] | 0;
   i16 = HEAP32[(HEAP32[(HEAP32[i15 + 8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   __ZNK7WebCore21TextCheckingParagraph14paragraphRangeEv(i11, i2);
   i17 = HEAP32[i11 >> 2] | 0;
   i18 = i17 + 12 | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   if ((i19 | 0) > -1) {
    i20 = i19;
   } else {
    i19 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i17 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i18 >> 2] = i19;
    i20 = i19;
   }
   i19 = HEAP32[i17 + 8 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i21 = i20;
   } else {
    i22 = i19 + 8 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
    i21 = HEAP32[i18 >> 2] | 0;
   }
   i18 = i6 | 0;
   HEAP32[i18 >> 2] = i19;
   HEAP32[i7 >> 2] = i21;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i10, i6, i7);
   i19 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i18 = i19 + 8 | 0;
     i22 = i18 | 0;
     i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
     HEAP32[i22 >> 2] = i23;
     if ((i23 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
    }
   } while (0);
   i19 = HEAP32[i2 >> 2] | 0;
   i18 = (i19 | 0) == 0;
   if (!i18) {
    i23 = i19 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
   }
   i23 = i19 + 12 | 0;
   i22 = HEAP32[i23 >> 2] | 0;
   if ((i22 | 0) > -1) {
    i24 = i22;
   } else {
    i22 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i19 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i23 >> 2] = i22;
    i24 = i22;
   }
   i22 = HEAP32[i19 + 8 >> 2] | 0;
   if ((i22 | 0) == 0) {
    i25 = i24;
   } else {
    i26 = i22 + 8 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
    i25 = HEAP32[i23 >> 2] | 0;
   }
   i23 = i4 | 0;
   HEAP32[i23 >> 2] = i22;
   HEAP32[i5 >> 2] = i25;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i12, i4, i5);
   i22 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i23 = i22 + 8 | 0;
     i26 = i23 | 0;
     i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i27;
     if ((i27 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i8, i16, i10, i12);
   i22 = i8 | 0;
   i23 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = 0;
   i27 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i23;
   do {
    if ((i27 | 0) != 0) {
     i23 = i27 | 0;
     i26 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     if ((i26 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i27);
      __ZN3WTF8fastFreeEPv(i27);
      break;
     } else {
      HEAP32[i23 >> 2] = i26;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i16 = i27 | 0;
     i26 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i26 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i27);
      __ZN3WTF8fastFreeEPv(i27);
      break;
     } else {
      HEAP32[i16 >> 2] = i26;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i22 = i27 + 8 | 0;
     i26 = i22 | 0;
     i16 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
    }
   } while (0);
   do {
    if (!i18) {
     i27 = i19 | 0;
     i22 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     if ((i22 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i19);
      __ZN3WTF8fastFreeEPv(i19);
      break;
     } else {
      HEAP32[i27 >> 2] = i22;
      break;
     }
    }
   } while (0);
   i19 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i18 = i19 + 8 | 0;
     i22 = i18 | 0;
     i27 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
     HEAP32[i22 >> 2] = i27;
     if ((i27 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
    }
   } while (0);
   do {
    if ((i17 | 0) != 0) {
     i19 = i17 | 0;
     i18 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i17);
      __ZN3WTF8fastFreeEPv(i17);
      break;
     } else {
      HEAP32[i19 >> 2] = i18;
      break;
     }
    }
   } while (0);
   do {
    if ((i15 | 0) != 0) {
     i17 = i15 | 0;
     i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i15);
      __ZN3WTF8fastFreeEPv(i15);
      break;
     } else {
      HEAP32[i17 >> 2] = i18;
      break;
     }
    }
   } while (0);
   i15 = HEAP32[i13 >> 2] | 0;
   HEAP32[i1 >> 2] = i15;
   if ((i15 | 0) != 0) {
    i28 = i15;
    break;
   }
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i1 >> 2] = i14;
   i28 = i14;
  }
 } while (0);
 i14 = i28 | 0;
 HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore21TextCheckingParagraph20expandRangeToNextEndEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 40 | 0;
 i8 = i2 + 56 | 0;
 i9 = i2 + 72 | 0;
 i10 = i2 + 88 | 0;
 __ZNK7WebCore21TextCheckingParagraph14paragraphRangeEv(i5, i1);
 i11 = HEAP32[i5 >> 2] | 0;
 __ZNK7WebCore21TextCheckingParagraph14paragraphRangeEv(i10, i1);
 i5 = HEAP32[i10 >> 2] | 0;
 i10 = i5 + 12 | 0;
 i12 = HEAP32[i10 >> 2] | 0;
 if ((i12 | 0) > -1) {
  i13 = i12;
 } else {
  i12 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i5 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i10 >> 2] = i12;
  i13 = i12;
 }
 i12 = HEAP32[i5 + 8 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i14 = i13;
 } else {
  i13 = i12 + 8 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
  i14 = HEAP32[i10 >> 2] | 0;
 }
 i10 = i3 | 0;
 HEAP32[i10 >> 2] = i12;
 HEAP32[i4 >> 2] = i14;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i9, i3, i4);
 i4 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 + 8 | 0;
   i3 = i10 | 0;
   i14 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i9, 1);
 __ZN7WebCore20startOfNextParagraphERKNS_15VisiblePositionE(i7, i8);
 __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i6, i7, 1);
 __ZN7WebCore6setEndEPNS_5RangeERKNS_15VisiblePositionE(i11, i6) | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 + 8 | 0;
   i10 = i6 | 0;
   i14 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 8 | 0;
   i6 = i7 | 0;
   i14 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 8 | 0;
   i7 = i8 | 0;
   i14 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 + 8 | 0;
   i8 = i9 | 0;
   i14 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i9;
    break;
   }
  }
 } while (0);
 do {
  if ((i11 | 0) != 0) {
   i5 = i11 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i11);
    __ZN3WTF8fastFreeEPv(i11);
    break;
   } else {
    HEAP32[i5 >> 2] = i9;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 20 >> 2] = -1;
 HEAP32[i1 + 16 >> 2] = -1;
 i11 = i1 + 8 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 do {
  if ((i9 | 0) != 0) {
   i11 = i9 | 0;
   i5 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    HEAP32[i11 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i9 = i1 + 12 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i9 = i1 | 0;
 i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i9 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore18TextCheckingHelper20findFirstMisspellingERibRN3WTF6RefPtrINS_5RangeEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 200 | 0;
 i7 = i6 | 0;
 i8 = i6 + 168 | 0;
 i9 = i6 + 176 | 0;
 i10 = i6 + 184 | 0;
 i11 = i6 + 192 | 0;
 i12 = i2 + 4 | 0;
 __ZN7WebCore17WordAwareIteratorC1EPKNS_5RangeE(i7, HEAP32[i12 >> 2] | 0);
 HEAP32[i3 >> 2] = 0;
 i13 = i1 | 0;
 HEAP32[i13 >> 2] = 0;
 i1 = i7 + 80 | 0;
 i14 = i7 + 161 | 0;
 i15 = i7 + 20 | 0;
 i16 = i2 | 0;
 i2 = i10 | 0;
 i17 = i11 | 0;
 i18 = i5 | 0;
 i5 = 0;
 i19 = 0;
 L1 : while (1) {
  if ((HEAP8[i15] & 1) == 0) {
   if ((HEAP32[i1 >> 2] | 0) == 0) {
    i20 = 27;
    break;
   }
   if ((HEAP8[i14] & 1) != 0) {
    i20 = 28;
    break;
   }
  }
  i21 = __ZNK7WebCore17WordAwareIterator10charactersEv(i7) | 0;
  i22 = __ZNK7WebCore17WordAwareIterator6lengthEv(i7) | 0;
  if ((i22 | 0) == 1) {
   if ((HEAP16[i21 >> 1] | 0) == 32) {
    i23 = i19;
   } else {
    i20 = 7;
   }
  } else {
   i20 = 7;
  }
  do {
   if ((i20 | 0) == 7) {
    i20 = 0;
    HEAP32[i8 >> 2] = -1;
    HEAP32[i9 >> 2] = 0;
    i24 = HEAP32[i16 >> 2] | 0;
    i25 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 168 >> 2] & 1](i24) | 0;
    FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i25 >> 2] | 0) + 20 >> 2] & 1](i25, i21, i22, i8, i9);
    i25 = HEAP32[i8 >> 2] | 0;
    if ((i25 | 0) <= -1) {
     i23 = i19;
     break;
    }
    i24 = HEAP32[i9 >> 2] | 0;
    if ((i25 | 0) >= (i22 | 0) | (i24 | 0) < 1 | (i24 | 0) > (i22 | 0) | (i24 + i25 | 0) > (i22 | 0)) {
     i23 = i19;
     break;
    }
    __ZN7WebCore12TextIterator8subrangeEPNS_5RangeEii(i10, HEAP32[i12 >> 2] | 0, i25 + i5 | 0, i24);
    i24 = HEAP32[i2 >> 2] | 0;
    HEAP32[i2 >> 2] = 0;
    do {
     if ((i19 | 0) == 0) {
      i25 = HEAP32[i8 >> 2] | 0;
      HEAP32[i3 >> 2] = i25 + i5;
      __ZN3WTF6StringC1EPKtj(i11, i21 + (i25 << 1) | 0, HEAP32[i9 >> 2] | 0);
      i25 = HEAP32[i17 >> 2] | 0;
      HEAP32[i17 >> 2] = 0;
      HEAP32[i13 >> 2] = i25;
      i26 = HEAP32[i17 >> 2] | 0;
      do {
       if ((i26 | 0) != 0) {
        i27 = i26 | 0;
        i28 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
        if ((i28 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i26);
         break;
        } else {
         HEAP32[i27 >> 2] = i28;
         break;
        }
       }
      } while (0);
      if ((i24 | 0) != 0) {
       i26 = i24 | 0;
       HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
      }
      i26 = HEAP32[i18 >> 2] | 0;
      HEAP32[i18 >> 2] = i24;
      if ((i26 | 0) == 0) {
       i29 = i25;
       break;
      }
      i28 = i26 | 0;
      i27 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
      if ((i27 | 0) == 0) {
       __ZN7WebCore5RangeD1Ev(i26);
       __ZN3WTF8fastFreeEPv(i26);
       i29 = i25;
       break;
      } else {
       HEAP32[i28 >> 2] = i27;
       i29 = i25;
       break;
      }
     } else {
      i29 = i19;
     }
    } while (0);
    __ZN7WebCore24DocumentMarkerController9addMarkerEPNS_5RangeENS_14DocumentMarker10MarkerTypeE(HEAP32[(HEAP32[(HEAP32[(HEAP32[i24 + 8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1124 >> 2] | 0, i24, 1);
    do {
     if ((i24 | 0) != 0) {
      i27 = i24 | 0;
      i28 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      if ((i28 | 0) == 0) {
       __ZN7WebCore5RangeD1Ev(i24);
       __ZN3WTF8fastFreeEPv(i24);
       break;
      } else {
       HEAP32[i27 >> 2] = i28;
       break;
      }
     }
    } while (0);
    if (i4) {
     i23 = i29;
    } else {
     i20 = 29;
     break L1;
    }
   }
  } while (0);
  __ZN7WebCore17WordAwareIterator7advanceEv(i7);
  i5 = i22 + i5 | 0;
  i19 = i23;
 }
 if ((i20 | 0) == 27) {
  __ZN7WebCore17WordAwareIteratorD1Ev(i7);
  STACKTOP = i6;
  return;
 } else if ((i20 | 0) == 28) {
  __ZN7WebCore17WordAwareIteratorD1Ev(i7);
  STACKTOP = i6;
  return;
 } else if ((i20 | 0) == 29) {
  __ZN7WebCore17WordAwareIteratorD1Ev(i7);
  STACKTOP = i6;
  return;
 }
}
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if (i4 >>> 0 > i6 >>> 0) {
  i7 = HEAP32[i1 >> 2] | 0;
  i8 = i7 + (i4 << 2) | 0;
  if ((i4 | 0) != (i6 | 0)) {
   i9 = i7 + (i6 << 2) | 0;
   while (1) {
    i7 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i10 = i7 | 0;
      i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i11 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i10 >> 2] = i11;
       break;
      }
     }
    } while (0);
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i8 | 0)) {
     break;
    }
   }
  }
  HEAP32[i3 >> 2] = i6;
  i12 = i6;
 } else {
  i8 = i1 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  do {
   if (i6 >>> 0 > i9 >>> 0) {
    do {
     if ((i9 | 0) != 0) {
      i7 = i1 | 0;
      if ((i4 | 0) != 0) {
       i11 = HEAP32[i7 >> 2] | 0;
       i10 = i11 + (i4 << 2) | 0;
       i13 = i11;
       while (1) {
        i11 = HEAP32[i13 >> 2] | 0;
        do {
         if ((i11 | 0) != 0) {
          i14 = i11 | 0;
          i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
          if ((i15 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i11);
           break;
          } else {
           HEAP32[i14 >> 2] = i15;
           break;
          }
         }
        } while (0);
        i13 = i13 + 4 | 0;
        if ((i13 | 0) == (i10 | 0)) {
         break;
        }
       }
       HEAP32[i3 >> 2] = 0;
      }
      i10 = HEAP32[i7 >> 2] | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      HEAP32[i7 >> 2] = 0;
      HEAP32[i8 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i10);
     }
    } while (0);
    i10 = HEAP32[i5 >> 2] | 0;
    if ((HEAP32[i8 >> 2] | 0) >>> 0 >= i10 >>> 0) {
     break;
    }
    i13 = i1 | 0;
    i11 = HEAP32[i13 >> 2] | 0;
    if (i10 >>> 0 > 1073741823 >>> 0) {
     _WTFCrash();
     return 0;
    }
    i15 = HEAP32[i3 >> 2] | 0;
    i14 = __ZN3WTF18fastMallocGoodSizeEj(i10 << 2) | 0;
    HEAP32[i8 >> 2] = i14 >>> 2;
    i10 = __ZN3WTF10fastMallocEj(i14) | 0;
    HEAP32[i13 >> 2] = i10;
    i14 = i11;
    _memcpy(i10 | 0, i14 | 0, i15 << 2) | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    if ((HEAP32[i13 >> 2] | 0) == (i11 | 0)) {
     HEAP32[i13 >> 2] = 0;
     HEAP32[i8 >> 2] = 0;
    }
    __ZN3WTF8fastFreeEPv(i14);
   }
  } while (0);
  i12 = HEAP32[i3 >> 2] | 0;
 }
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i4 = i2 + (i12 << 2) | 0;
 i9 = i1 | 0;
 if ((i12 | 0) == 0) {
  i16 = i2;
  i17 = 0;
 } else {
  i12 = HEAP32[i9 >> 2] | 0;
  i6 = i2;
  while (1) {
   i2 = HEAP32[i6 >> 2] | 0;
   if ((i2 | 0) != 0) {
    i14 = i2 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   }
   i14 = i12 | 0;
   i13 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i2;
   do {
    if ((i13 | 0) != 0) {
     i2 = i13 | 0;
     i14 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i2 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i13 = i6 + 4 | 0;
   if ((i13 | 0) == (i4 | 0)) {
    break;
   } else {
    i12 = i12 + 4 | 0;
    i6 = i13;
   }
  }
  i16 = HEAP32[i8 >> 2] | 0;
  i17 = HEAP32[i3 >> 2] | 0;
 }
 i8 = HEAP32[i5 >> 2] | 0;
 i6 = i16 + (i8 << 2) | 0;
 if ((i17 | 0) == (i8 | 0)) {
  i18 = i17;
 } else {
  i8 = i16 + (i17 << 2) | 0;
  i16 = (HEAP32[i9 >> 2] | 0) + (i17 << 2) | 0;
  while (1) {
   i17 = HEAP32[i8 >> 2] | 0;
   HEAP32[i16 >> 2] = i17;
   if ((i17 | 0) != 0) {
    i9 = i17 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   i9 = i8 + 4 | 0;
   if ((i9 | 0) == (i6 | 0)) {
    break;
   } else {
    i8 = i9;
    i16 = i16 + 4 | 0;
   }
  }
  i18 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i18;
 return i1 | 0;
}
function __ZNK7WebCore18TextCheckingHelper15isUngrammaticalEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 + 8 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 40 | 0;
 i6 = i1 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i8 = i1 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i10 = i2 | 0;
 HEAP32[i10 >> 2] = 0;
 if (__ZNK7WebCore5Range9collapsedERi(i9, i10) | 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i10 = i4 + 8 | 0;
 _memset(i10 | 0, 0, 16) | 0;
 __ZNK7WebCore18TextCheckingHelper19findFirstBadGrammarERNS_13GrammarDetailERib(i5, i1, i4, i3, 0);
 i1 = i5 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i11 = 0;
  } else {
   if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
    i12 = i9;
    i13 = 0;
   } else {
    i14 = HEAP32[i3 >> 2] | 0;
    do {
     if ((i14 | 0) > 0) {
      i15 = 0;
      i16 = i9;
     } else {
      if ((HEAP32[i4 >> 2] | 0) != (-i14 | 0)) {
       i15 = 0;
       i16 = i9;
       break;
      }
      i17 = HEAP32[i4 + 4 >> 2] | 0;
      if ((i17 | 0) != (__ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(HEAP32[i8 >> 2] | 0, 0) | 0)) {
       i15 = 0;
       i16 = i9;
       break;
      }
      i17 = HEAP32[i6 >> 2] | 0;
      FUNCTION_TABLE_viii[HEAP32[(HEAP32[i17 >> 2] | 0) + 172 >> 2] & 7](i17, i5, i4);
      i15 = 1;
      i16 = HEAP32[i1 >> 2] | 0;
     }
    } while (0);
    if ((i16 | 0) == 0) {
     i11 = i15;
     break;
    } else {
     i12 = i16;
     i13 = i15;
    }
   }
   i14 = i12 | 0;
   i17 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    i11 = i13;
    break;
   } else {
    HEAP32[i14 >> 2] = i17;
    i11 = i13;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i4 + 20 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i12 = i13 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i12 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i13 = i4 + 16 | 0;
 i15 = HEAP32[i13 >> 2] | 0;
 if ((i15 | 0) != 0) {
  i12 = HEAP32[i10 >> 2] | 0;
  i16 = i12 + (i15 << 2) | 0;
  i15 = i12;
  while (1) {
   i12 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i1 = i12 | 0;
     i5 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i1 >> 2] = i5;
      break;
     }
    }
   } while (0);
   i15 = i15 + 4 | 0;
   if ((i15 | 0) == (i16 | 0)) {
    break;
   }
  }
  HEAP32[i13 >> 2] = 0;
 }
 i13 = HEAP32[i10 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i7 = i11;
  STACKTOP = i2;
  return i7 | 0;
 }
 HEAP32[i10 >> 2] = 0;
 HEAP32[i4 + 12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i13);
 i7 = i11;
 STACKTOP = i2;
 return i7 | 0;
}
function __ZNK7WebCore18TextCheckingHelper22findFirstGrammarDetailERKN3WTF6VectorINS_13GrammarDetailELj0ENS1_15CrashOnOverflowEEEiiib(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = i2 + 8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = -1;
  STACKTOP = i7;
  return i11 | 0;
 }
 i12 = i2 | 0;
 i2 = i1 + 4 | 0;
 i1 = i3 - i4 | 0;
 i13 = i8 | 0;
 if (i6) {
  i14 = 0;
  i15 = -1;
  i16 = -1;
 } else {
  i6 = HEAP32[i12 >> 2] | 0;
  i17 = 0;
  i18 = -1;
  i19 = -1;
  while (1) {
   i20 = HEAP32[i6 + (i17 * 24 & -1) >> 2] | 0;
   i21 = i20 + i3 | 0;
   if ((i21 | 0) >= (i4 | 0) & (i21 | 0) < (i5 | 0)) {
    i21 = (i18 | 0) < 0 | (i19 | 0) > (i20 | 0);
    i22 = i21 ? i20 : i19;
    i23 = i21 ? i17 : i18;
   } else {
    i22 = i19;
    i23 = i18;
   }
   i21 = i17 + 1 | 0;
   if (i21 >>> 0 < i10 >>> 0) {
    i17 = i21;
    i18 = i23;
    i19 = i22;
   } else {
    i11 = i23;
    break;
   }
  }
  STACKTOP = i7;
  return i11 | 0;
 }
 while (1) {
  i23 = HEAP32[i12 >> 2] | 0;
  i22 = i23 + (i14 * 24 & -1) | 0;
  i19 = HEAP32[i22 >> 2] | 0;
  i18 = i19 + i3 | 0;
  if ((i18 | 0) >= (i4 | 0) & (i18 | 0) < (i5 | 0)) {
   __ZN7WebCore12TextIterator8subrangeEPNS_5RangeEii(i8, HEAP32[i2 >> 2] | 0, i1 + i19 | 0, HEAP32[i23 + (i14 * 24 & -1) + 4 >> 2] | 0);
   i19 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   __ZN7WebCore24DocumentMarkerController9addMarkerEPNS_5RangeENS_14DocumentMarker10MarkerTypeERKN3WTF6StringE(HEAP32[(HEAP32[(HEAP32[(HEAP32[i19 + 8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1124 >> 2] | 0, i19, 2, i23 + (i14 * 24 & -1) + 20 | 0);
   do {
    if ((i19 | 0) != 0) {
     i23 = i19 | 0;
     i18 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i19);
      __ZN3WTF8fastFreeEPv(i19);
      break;
     } else {
      HEAP32[i23 >> 2] = i18;
      break;
     }
    }
   } while (0);
   i19 = HEAP32[i22 >> 2] | 0;
   i18 = (i15 | 0) < 0 | (i16 | 0) > (i19 | 0);
   i24 = i18 ? i19 : i16;
   i25 = i18 ? i14 : i15;
  } else {
   i24 = i16;
   i25 = i15;
  }
  i18 = i14 + 1 | 0;
  if (i18 >>> 0 < (HEAP32[i9 >> 2] | 0) >>> 0) {
   i14 = i18;
   i15 = i25;
   i16 = i24;
  } else {
   i11 = i25;
   break;
  }
 }
 STACKTOP = i7;
 return i11 | 0;
}
function __ZN3WTF6VectorIN7WebCore13GrammarDetailELj0ENS_15CrashOnOverflowEEC2ERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i5;
 if ((i3 | 0) == 0) {
  return;
 }
 if (i3 >>> 0 > 178956970 >>> 0) {
  _WTFCrash();
 }
 i5 = __ZN3WTF18fastMallocGoodSizeEj(i3 * 24 & -1) | 0;
 HEAP32[i7 >> 2] = (i5 >>> 0) / 24 & -1;
 i7 = __ZN3WTF10fastMallocEj(i5) | 0;
 i5 = i7;
 HEAP32[i6 >> 2] = i5;
 if ((i7 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i7 + (i2 * 24 & -1) | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i8 = i7;
  i9 = i5;
 }
 L12 : while (1) {
  HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
  i5 = HEAP32[i8 + 12 >> 2] | 0;
  i7 = i8 + 16 | 0;
  i2 = HEAP32[i7 >> 2] | 0;
  i6 = i9 + 8 | 0;
  HEAP32[i6 >> 2] = 0;
  i3 = i9 + 12 | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i9 + 16 >> 2] = i2;
  do {
   if ((i5 | 0) != 0) {
    if (i5 >>> 0 > 1073741823 >>> 0) {
     i10 = 8;
     break L12;
    }
    i2 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
    HEAP32[i3 >> 2] = i2 >>> 2;
    i1 = __ZN3WTF10fastMallocEj(i2) | 0;
    i2 = i1;
    HEAP32[i6 >> 2] = i2;
    if ((i1 | 0) == 0) {
     break;
    }
    i1 = HEAP32[i8 + 8 >> 2] | 0;
    i11 = HEAP32[i7 >> 2] | 0;
    i12 = i1 + (i11 << 2) | 0;
    if ((i11 | 0) == 0) {
     break;
    } else {
     i13 = i1;
     i14 = i2;
    }
    while (1) {
     i2 = HEAP32[i13 >> 2] | 0;
     HEAP32[i14 >> 2] = i2;
     if ((i2 | 0) != 0) {
      i1 = i2 | 0;
      HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
     }
     i1 = i13 + 4 | 0;
     if ((i1 | 0) == (i12 | 0)) {
      break;
     } else {
      i13 = i1;
      i14 = i14 + 4 | 0;
     }
    }
   }
  } while (0);
  i7 = HEAP32[i8 + 20 >> 2] | 0;
  HEAP32[i9 + 20 >> 2] = i7;
  if ((i7 | 0) != 0) {
   i6 = i7 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
  }
  i6 = i8 + 24 | 0;
  if ((i6 | 0) == (i4 | 0)) {
   i10 = 21;
   break;
  } else {
   i8 = i6;
   i9 = i9 + 24 | 0;
  }
 }
 if ((i10 | 0) == 8) {
  _WTFCrash();
 } else if ((i10 | 0) == 21) {
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore18TextCheckingResultELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
   HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i7 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   HEAP32[i7 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
   i2 = i7 + 12 | 0;
   HEAP32[i2 >> 2] = 0;
   i8 = i7 + 16 | 0;
   HEAP32[i8 >> 2] = 0;
   i9 = i7 + 20 | 0;
   HEAP32[i9 >> 2] = 0;
   i10 = i6 + 20 | 0;
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i10 >> 2] = 0;
   i10 = i6 + 12 | 0;
   i9 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i10 >> 2] = i9;
   i9 = i6 + 16 | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i9 >> 2] = i10;
   i10 = i6 + 24 | 0;
   i9 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i7 + 24 >> 2] = i9;
   i9 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
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
   __ZN3WTF6VectorIN7WebCore13GrammarDetailELj0ENS_15CrashOnOverflowEED1Ev(i6 + 12 | 0);
   i9 = i6 + 28 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
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
function __ZNK7WebCore21TextCheckingParagraph8offsetToERKNS_8PositionERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 __ZNK7WebCore21TextCheckingParagraph13offsetAsRangeEv(i6, i1);
 i1 = HEAP32[i6 >> 2] | 0;
 i6 = i4 + 16 | 0;
 HEAP32[i6 >> 2] = 0;
 __ZNK7WebCore5Range10cloneRangeERi(i5, i1, i6);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i6 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i1 = __ZNK7WebCore8Position13containerNodeEv(i2) | 0;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i6 = i1 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i5, i7, __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i2) | 0, i3);
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = i2 + 8 | 0;
   i7 = i8 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  i9 = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i5, 0) | 0;
 } else {
  i9 = 0;
 }
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return i9 | 0;
 }
 i3 = i5 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return i9 | 0;
 } else {
  HEAP32[i3 >> 2] = i2;
  STACKTOP = i4;
  return i9 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorIN7WebCore18TextCheckingResultELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
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
   __ZN3WTF6VectorIN7WebCore18TextCheckingResultELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (((i2 - i7 | 0) / 28 & -1) * 28 & -1) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore18TextCheckingResultELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i12 + (i6 * 28 & -1) >> 2] = HEAP32[i11 >> 2];
 HEAP32[i12 + (i6 * 28 & -1) + 4 >> 2] = HEAP32[i11 + 4 >> 2];
 HEAP32[i12 + (i6 * 28 & -1) + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 __ZN3WTF6VectorIN7WebCore13GrammarDetailELj0ENS_15CrashOnOverflowEEC2ERKS4_(i12 + (i6 * 28 & -1) + 12 | 0, i11 + 12 | 0);
 i2 = HEAP32[i11 + 24 >> 2] | 0;
 HEAP32[i12 + (i6 * 28 & -1) + 24 >> 2] = i2;
 if ((i2 | 0) == 0) {
  i13 = HEAP32[i3 >> 2] | 0;
  i14 = i13 + 1 | 0;
  HEAP32[i3 >> 2] = i14;
  return;
 }
 i6 = i2 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 i13 = HEAP32[i3 >> 2] | 0;
 i14 = i13 + 1 | 0;
 HEAP32[i3 >> 2] = i14;
 return;
}
function __ZN3WTF6VectorIN7WebCore13GrammarDetailELj0ENS_15CrashOnOverflowEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 24 & -1) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 + 20 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i5 = i3 + 16 | 0;
   i8 = HEAP32[i5 >> 2] | 0;
   i7 = i3 + 8 | 0;
   if ((i8 | 0) != 0) {
    i9 = HEAP32[i7 >> 2] | 0;
    i10 = i9 + (i8 << 2) | 0;
    i8 = i9;
    while (1) {
     i9 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i11 = i9 | 0;
       i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
       if ((i12 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i9);
        break;
       } else {
        HEAP32[i11 >> 2] = i12;
        break;
       }
      }
     } while (0);
     i8 = i8 + 4 | 0;
     if ((i8 | 0) == (i10 | 0)) {
      break;
     }
    }
    HEAP32[i5 >> 2] = 0;
   }
   i10 = HEAP32[i7 >> 2] | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
    HEAP32[i3 + 12 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i10);
   }
   i3 = i3 + 24 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore18TextCheckingHelper17markAllBadGrammarEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 32 | 0;
 i5 = i3 + 8 | 0;
 _memset(i5 | 0, 0, 16) | 0;
 __ZNK7WebCore18TextCheckingHelper19findFirstBadGrammarERNS_13GrammarDetailERib(i4, i1, i3, i2 + 24 | 0, 1);
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i3 + 20 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i6 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = i3 + 16 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 + (i4 << 2) | 0;
  i4 = i6;
  while (1) {
   i6 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i8 = i6 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i1 >> 2] = 0;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i3 + 12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore21TextCheckingParagraph11checkingEndEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 20 | 0;
 if ((HEAP32[i4 >> 2] | 0) != -1) {
  i5 = HEAP32[i4 >> 2] | 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i6 = i1 + 16 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) == -1) {
   __ZNK7WebCore21TextCheckingParagraph13offsetAsRangeEv(i3, i1);
   i7 = HEAP32[i3 >> 2] | 0;
   HEAP32[i6 >> 2] = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i7, 0) | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = i7 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i4 >> 2] = (__ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(0, 0) | 0) + i3;
  i5 = HEAP32[i4 >> 2] | 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i1 = i6 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 HEAP32[i4 >> 2] = (__ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i6, 0) | 0) + i3;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
  i5 = HEAP32[i4 >> 2] | 0;
  STACKTOP = i2;
  return i5 | 0;
 } else {
  HEAP32[i1 >> 2] = i3;
  i5 = HEAP32[i4 >> 2] | 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 return 0;
}
function __ZNK7WebCore21TextCheckingParagraph20checkingRangeMatchesEii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 16 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) == -1) {
   __ZNK7WebCore21TextCheckingParagraph13offsetAsRangeEv(i5, i1);
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i6 >> 2] = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i7, 0) | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = i7 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i6 >> 2] | 0) != (i2 | 0)) {
  i10 = 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 i2 = i1 + 24 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == -1) {
   i6 = HEAP32[i1 >> 2] | 0;
   if ((i6 | 0) == 0) {
    HEAP32[i2 >> 2] = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(0, 0) | 0;
    break;
   }
   i5 = i6 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   HEAP32[i2 >> 2] = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i6, 0) | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i10 = (HEAP32[i2 >> 2] | 0) == (i3 | 0);
 STACKTOP = i4;
 return i10 | 0;
}
function __ZNK7WebCore21TextCheckingParagraph4textEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 12 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
    break;
   }
   STACKTOP = i2;
   return i5 | 0;
  }
 } while (0);
 __ZNK7WebCore21TextCheckingParagraph14paragraphRangeEv(i4, i1);
 i1 = HEAP32[i4 >> 2] | 0;
 __ZN7WebCore9plainTextEPKNS_5RangeENS_20TextIteratorBehaviorEb(i3, i1, 0, 0);
 i4 = i3 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i3;
 do {
  if ((i7 | 0) != 0) {
   i3 = i7 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return i5 | 0;
 }
 i7 = i1 | 0;
 i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  STACKTOP = i2;
  return i5 | 0;
 } else {
  HEAP32[i7 >> 2] = i6;
  STACKTOP = i2;
  return i5 | 0;
 }
 return 0;
}
function __ZNK7WebCore21TextCheckingParagraph17checkingSubstringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 + 16 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == -1) {
   __ZNK7WebCore21TextCheckingParagraph13offsetAsRangeEv(i4, i2);
   i6 = HEAP32[i4 >> 2] | 0;
   HEAP32[i5 >> 2] = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i6, 0) | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i5 >> 2] | 0;
 i5 = i2 + 24 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == -1) {
   i8 = HEAP32[i2 >> 2] | 0;
   if ((i8 | 0) == 0) {
    HEAP32[i5 >> 2] = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(0, 0) | 0;
    break;
   }
   i7 = i8 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   HEAP32[i5 >> 2] = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i8, 0) | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    break;
   } else {
    HEAP32[i7 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i5 >> 2] | 0;
 __ZNK3WTF6String9substringEjj(i1, __ZNK7WebCore21TextCheckingParagraph4textEv(i2) | 0, i4, i6);
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIN7WebCore18TextCheckingResultELj0ENS_15CrashOnOverflowEE6appendIS2_EEvPKT_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5 + i3 | 0;
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 if (i6 >>> 0 > i7 >>> 0) {
  i8 = i7 + 1 + (i7 >>> 2) | 0;
  i7 = i8 >>> 0 > 16 >>> 0 ? i8 : 16;
  __ZN3WTF6VectorIN7WebCore18TextCheckingResultELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i6 >>> 0 ? i7 : i6);
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 if (i6 >>> 0 < i9 >>> 0) {
  _WTFCrash();
 }
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i4 >> 2] = i6;
  return;
 } else {
  i10 = 0;
 }
 while (1) {
  i1 = i10 + i9 | 0;
  HEAP32[i5 + (i1 * 28 & -1) >> 2] = HEAP32[i2 + (i10 * 28 & -1) >> 2];
  HEAP32[i5 + (i1 * 28 & -1) + 4 >> 2] = HEAP32[i2 + (i10 * 28 & -1) + 4 >> 2];
  HEAP32[i5 + (i1 * 28 & -1) + 8 >> 2] = HEAP32[i2 + (i10 * 28 & -1) + 8 >> 2];
  __ZN3WTF6VectorIN7WebCore13GrammarDetailELj0ENS_15CrashOnOverflowEEC2ERKS4_(i5 + (i1 * 28 & -1) + 12 | 0, i2 + (i10 * 28 & -1) + 12 | 0);
  i7 = HEAP32[i2 + (i10 * 28 & -1) + 24 >> 2] | 0;
  HEAP32[i5 + (i1 * 28 & -1) + 24 >> 2] = i7;
  if ((i7 | 0) != 0) {
   i1 = i7 | 0;
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
  }
  i10 = i10 + 1 | 0;
  if (i10 >>> 0 >= i3 >>> 0) {
   break;
  }
 }
 HEAP32[i4 >> 2] = i6;
 return;
}
function __ZN7WebCore21TextCheckingParagraphD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore21TextCheckingParagraphD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZNK7WebCore21TextCheckingParagraph7isEmptyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 16 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == -1) {
   __ZNK7WebCore21TextCheckingParagraph13offsetAsRangeEv(i3, i1);
   i5 = HEAP32[i3 >> 2] | 0;
   HEAP32[i4 >> 2] = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i5, 0) | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) >= (__ZNK7WebCore21TextCheckingParagraph11checkingEndEv(i1) | 0)) {
  i8 = 1;
  STACKTOP = i2;
  return i8 | 0;
 }
 i3 = HEAP32[(__ZNK7WebCore21TextCheckingParagraph4textEv(i1) | 0) >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = 1;
  STACKTOP = i2;
  return i8 | 0;
 }
 i8 = (HEAP32[i3 + 4 >> 2] | 0) == 0;
 STACKTOP = i2;
 return i8 | 0;
}
function __ZN7WebCore21TextCheckingParagraph30invalidateParagraphRangeValuesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 + 20 >> 2] = -1;
 HEAP32[i1 + 16 >> 2] = -1;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = i1 + 12 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  return;
 } else {
  HEAP32[i3 >> 2] = i4;
  return;
 }
}
function __ZNK7WebCore21TextCheckingParagraph13checkingStartEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 16 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == -1) {
   __ZNK7WebCore21TextCheckingParagraph13offsetAsRangeEv(i3, i1);
   i5 = HEAP32[i3 >> 2] | 0;
   HEAP32[i4 >> 2] = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i5, 0) | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 STACKTOP = i2;
 return HEAP32[i4 >> 2] | 0;
}
function __ZNK7WebCore21TextCheckingParagraph14checkingLengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 24 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == -1) {
   i3 = HEAP32[i1 >> 2] | 0;
   if ((i3 | 0) == 0) {
    HEAP32[i2 >> 2] = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(0, 0) | 0;
    break;
   }
   i4 = i3 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
   HEAP32[i2 >> 2] = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i3, 0) | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 return HEAP32[i2 >> 2] | 0;
}
function __ZNK7WebCore21TextCheckingParagraph11rangeLengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 __ZNK7WebCore21TextCheckingParagraph14paragraphRangeEv(i3, i1);
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i1, 0) | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return i3 | 0;
 }
 i4 = i1 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  STACKTOP = i2;
  return i3 | 0;
 } else {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore21TextCheckingParagraph8subrangeEii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 __ZNK7WebCore21TextCheckingParagraph14paragraphRangeEv(i6, i2);
 i2 = HEAP32[i6 >> 2] | 0;
 __ZN7WebCore12TextIterator8subrangeEPNS_5RangeEii(i1, i2, i3, i4);
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore18TextCheckingHelper19markAllMisspellingsERN3WTF6RefPtrINS_5RangeEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 + 8 | 0;
 __ZN7WebCore18TextCheckingHelper20findFirstMisspellingERibRN3WTF6RefPtrINS_5RangeEEE(i4, i1, i3 | 0, 1, i2);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
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
function __ZN7WebCore21TextCheckingParagraphC2EN3WTF10PassRefPtrINS_5RangeEEES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = i3;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = -1;
 HEAP32[i1 + 20 >> 2] = -1;
 HEAP32[i1 + 24 >> 2] = -1;
 return;
}
function __ZN7WebCore21TextCheckingParagraphC1EN3WTF10PassRefPtrINS_5RangeEEES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = i3;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = -1;
 HEAP32[i1 + 20 >> 2] = -1;
 HEAP32[i1 + 24 >> 2] = -1;
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
function __ZN7WebCore21TextCheckingParagraphC2EN3WTF10PassRefPtrINS_5RangeEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = -1;
 HEAP32[i1 + 20 >> 2] = -1;
 HEAP32[i1 + 24 >> 2] = -1;
 return;
}
function __ZN7WebCore21TextCheckingParagraphC1EN3WTF10PassRefPtrINS_5RangeEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = -1;
 HEAP32[i1 + 20 >> 2] = -1;
 HEAP32[i1 + 24 >> 2] = -1;
 return;
}
function __ZNK7WebCore18TextCheckingHelper25unifiedTextCheckerEnabledEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 332 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[(HEAP32[i1 + 36 >> 2] | 0) + 192 | 0] & 8) != 0;
 return i3 | 0;
}
function __ZN7WebCore18TextCheckingHelperD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore18TextCheckingHelperD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore18TextCheckingHelperC2EPNS_12EditorClientEN3WTF10PassRefPtrINS_5RangeEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = i3;
 return;
}
function __ZN7WebCore18TextCheckingHelperC1EPNS_12EditorClientEN3WTF10PassRefPtrINS_5RangeEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = i3;
 return;
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore25unifiedTextCheckerEnabledEPKNS_5FrameE(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[(HEAP32[i1 + 36 >> 2] | 0) + 192 | 0] & 8) != 0;
 return i2 | 0;
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
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
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
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore21TextCheckingParagraphD2Ev,b1,__ZN7WebCore18TextCheckingHelperD2Ev,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore21TextCheckingParagraphC2EN3WTF10PassRefPtrINS_5RangeEEE,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore21TextCheckingParagraphC2EN3WTF10PassRefPtrINS_5RangeEEES4_,b4,__ZN7WebCore18TextCheckingHelperC2EPNS_12EditorClientEN3WTF10PassRefPtrINS_5RangeEEE,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_viiiiii = [b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  var FUNCTION_TABLE_viiii = [b8,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore25unifiedTextCheckerEnabledEPKNS_5FrameE","_strlen","__ZNK7WebCore21TextCheckingParagraph11rangeLengthEv","__ZN3WTF6VectorIN7WebCore18TextCheckingResultELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_","__ZN7WebCore21TextCheckingParagraph20expandRangeToNextEndEv","__ZN3WTF6VectorIN7WebCore13GrammarDetailELj0ENS_15CrashOnOverflowEEC2ERKS4_","__ZN7WebCore21TextCheckingParagraphC2EN3WTF10PassRefPtrINS_5RangeEEE","__ZNK7WebCore21TextCheckingParagraph8offsetToERKNS_8PositionERi","__ZNK7WebCore21TextCheckingParagraph20checkingRangeMatchesEii","__ZN7WebCore18TextCheckingHelper17markAllBadGrammarEv","__ZNK7WebCore21TextCheckingParagraph4textEv","__ZNK7WebCore21TextCheckingParagraph13checkingStartEv","__ZNK7WebCore21TextCheckingParagraph14paragraphRangeEv","__ZNK7WebCore18TextCheckingHelper25unifiedTextCheckerEnabledEv","__ZN7WebCore18TextCheckingHelper20findFirstMisspellingERibRN3WTF6RefPtrINS_5RangeEEE","__ZN7WebCore18TextCheckingHelperD2Ev","__ZNK7WebCore21TextCheckingParagraph7isEmptyEv","_memcpy","__ZN7WebCore21TextCheckingParagraphD2Ev","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore18TextCheckingHelper22findFirstGrammarDetailERKN3WTF6VectorINS_13GrammarDetailELj0ENS1_15CrashOnOverflowEEEiiib","__ZN7WebCore18TextCheckingHelper19markAllMisspellingsERN3WTF6RefPtrINS_5RangeEEE","__ZN7WebCore18TextCheckingHelperC2EPNS_12EditorClientEN3WTF10PassRefPtrINS_5RangeEEE","__ZNK7WebCore21TextCheckingParagraph11checkingEndEv","__ZNK7WebCore18TextCheckingHelper40guessesForMisspelledOrUngrammaticalRangeEbRbS1_","__ZNK7WebCore21TextCheckingParagraph13offsetAsRangeEv","__ZN7WebCore21TextCheckingParagraph30invalidateParagraphRangeValuesEv","_memset","__ZNK7WebCore18TextCheckingHelper15isUngrammaticalEv","__ZN3WTF6VectorIN7WebCore18TextCheckingResultELj0ENS_15CrashOnOverflowEE6appendIS2_EEvPKT_j","__ZNK7WebCore21TextCheckingParagraph8subrangeEii","__ZN3WTF6VectorIN7WebCore13GrammarDetailELj0ENS_15CrashOnOverflowEED1Ev","__ZN7WebCore20checkTextOfParagraphEPNS_17TextCheckerClientEPKtijRN3WTF6VectorINS_18TextCheckingResultELj0ENS4_15CrashOnOverflowEEE","__ZNK7WebCore18TextCheckingHelper19findFirstBadGrammarERNS_13GrammarDetailERib","__ZN7WebCore18TextCheckingHelper32findFirstMisspellingOrBadGrammarEbRbRiRNS_13GrammarDetailE","__ZNK7WebCore21TextCheckingParagraph14checkingLengthEv","__ZNK7WebCore21TextCheckingParagraph17checkingSubstringEv","__ZN7WebCore21TextCheckingParagraphC2EN3WTF10PassRefPtrINS_5RangeEEES4_","__ZN3WTF6VectorIN7WebCore18TextCheckingResultELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_"]

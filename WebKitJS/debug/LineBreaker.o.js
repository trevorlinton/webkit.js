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
/* memory initializer */ allocate([32,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_fiiiifii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_fiiiifii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var __ZN7WebCore19asciiLineBreakTableE=env.__ZN7WebCore19asciiLineBreakTableE|0;
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
  var invoke_fiiiifii=env.invoke_fiiiifii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
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
function __ZN7WebCore15BreakingContext10handleTextERN3WTF6VectorINS_15WordMeasurementELj64ENS1_15CrashOnOverflowEEERbRj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, d44 = +0, i45 = 0, d46 = +0, i47 = 0, d48 = +0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, d57 = +0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, i123 = 0, i124 = 0, i125 = 0, i126 = 0, i127 = 0, i128 = 0, i129 = 0, d130 = +0, d131 = +0, d132 = +0, d133 = +0, i134 = 0, i135 = 0, i136 = 0, i137 = 0, i138 = 0, i139 = 0, i140 = 0, i141 = 0, i142 = 0, i143 = 0, i144 = 0, i145 = 0, i146 = 0, d147 = +0, d148 = +0, i149 = 0, i150 = 0, i151 = 0, d152 = +0, i153 = 0, d154 = +0, d155 = +0, i156 = 0, i157 = 0, d158 = +0, i159 = 0, i160 = 0, d161 = +0, i162 = 0, i163 = 0, i164 = 0, i165 = 0, i166 = 0, i167 = 0, i168 = 0, i169 = 0, i170 = 0, i171 = 0, i172 = 0, i173 = 0, i174 = 0, i175 = 0, i176 = 0, i177 = 0, i178 = 0, i179 = 0, i180 = 0, i181 = 0, d182 = +0, d183 = +0, i184 = 0, i185 = 0, i186 = 0, d187 = +0, d188 = +0, d189 = +0, d190 = +0, i191 = 0, i192 = 0, i193 = 0, i194 = 0, i195 = 0, i196 = 0, i197 = 0, i198 = 0, i199 = 0, d200 = +0, d201 = +0, d202 = +0, d203 = +0, i204 = 0, i205 = 0, i206 = 0, i207 = 0, i208 = 0, i209 = 0, i210 = 0, i211 = 0, d212 = +0, d213 = +0, i214 = 0, i215 = 0, d216 = +0, d217 = +0, d218 = +0, i219 = 0, i220 = 0, i221 = 0, i222 = 0, d223 = +0, i224 = 0, i225 = 0, d226 = +0, i227 = 0, d228 = +0, d229 = +0, i230 = 0, i231 = 0, i232 = 0, i233 = 0, i234 = 0, i235 = 0, i236 = 0, d237 = +0, d238 = +0, i239 = 0, i240 = 0, i241 = 0, i242 = 0, d243 = +0, d244 = +0, i245 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 488 | 0;
 i6 = i5 | 0;
 i7 = i5 + 40 | 0;
 i8 = i5 + 64 | 0;
 i9 = i5 + 104 | 0;
 i10 = i5 + 128 | 0;
 i11 = i5 + 168 | 0;
 i12 = i5 + 192 | 0;
 i13 = i5 + 232 | 0;
 i14 = i5 + 256 | 0;
 i15 = i5 + 296 | 0;
 i16 = i5 + 320 | 0;
 i17 = i5 + 360 | 0;
 i18 = i5 + 368 | 0;
 i19 = i5 + 376 | 0;
 i20 = i5 + 384 | 0;
 i21 = i5 + 392 | 0;
 i22 = i5 + 416 | 0;
 i23 = i5 + 456 | 0;
 i24 = i5 + 464 | 0;
 i25 = i5 + 480 | 0;
 i26 = i1 + 8 | 0;
 i27 = i1 + 20 | 0;
 if ((HEAP32[i27 >> 2] | 0) == 0) {
  HEAP8[i1 + 149 | 0] = 0;
 }
 i28 = i1 + 12 | 0;
 i29 = HEAP32[i28 >> 2] | 0;
 i30 = i29;
 i31 = i29;
 i32 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i31 >> 2] | 0) + 368 >> 2] & 1](i29) | 0;
 i33 = i1 + 151 | 0;
 do {
  if ((HEAP8[i33] & 1) != 0) {
   i34 = HEAP32[i1 + 140 >> 2] | 0;
   if (!((i34 | 0) == 4 | (i34 | 0) == 1)) {
    break;
   }
   if ((HEAP8[i1 + 146 | 0] & 1) == 0) {
    break;
   }
   i34 = HEAP32[i28 >> 2] | 0;
   __ZN7WebCore9LineWidth6commitEv(i1 + 88 | 0);
   HEAP32[i1 + 28 >> 2] = i34;
   HEAP32[i1 + 36 >> 2] = 0;
   HEAP32[i1 + 32 >> 2] = -1;
  }
 } while (0);
 i34 = i29 + 8 | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i34 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 296 >> 2] & 128 | 0) != 0) {
   i35 = HEAP32[i28 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i35 >> 2] | 0) + 560 >> 2] & 1](i35) | 0)) {
    break;
   }
   i35 = HEAP32[i28 >> 2] | 0;
   if ((HEAP8[i35 + 64 | 0] & 1) != 0) {
    break;
   }
   __ZN7WebCore17RenderCombineText11combineTextEv(i35);
   i36 = i1 + 28 | 0;
   if ((HEAP32[i36 >> 2] | 0) != (i35 | 0)) {
    break;
   }
   i37 = i1 + 36 | 0;
   i38 = HEAP32[i37 >> 2] | 0;
   i39 = i35 + 44 | 0;
   if (i38 >>> 0 < (HEAP32[(HEAP32[i39 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
    break;
   }
   do {
    if ((i35 | 0) != 0) {
     if ((HEAP32[i35 + 20 >> 2] & 768 | 0) == 256) {
      i40 = i38 + 1 | 0;
      HEAP32[i37 >> 2] = i40;
      if (i40 >>> 0 < (HEAP32[(HEAP32[i39 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
       break;
      }
     }
     HEAP32[i36 >> 2] = __ZN7WebCoreL28bidiNextSkippingEmptyInlinesINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_(HEAP32[i1 + 24 >> 2] | 0, i35, 0) | 0;
     HEAP32[i37 >> 2] = 0;
     HEAP32[i1 + 32 >> 2] = -1;
    }
   } while (0);
   i37 = HEAP32[i1 + 4 >> 2] | 0;
   i35 = i37 + 4 | 0;
   i36 = HEAP32[i35 >> 2] | 0;
   if ((i36 | 0) == 0) {
    break;
   }
   i39 = i37 + 12 | 0;
   if ((HEAP32[i36 + 20 >> 2] & 768 | 0) == 256) {
    i38 = (HEAP32[i39 >> 2] | 0) + 1 | 0;
    HEAP32[i39 >> 2] = i38;
    if (i38 >>> 0 < (HEAP32[(HEAP32[i36 + 44 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
     break;
    }
   }
   HEAP32[i35 >> 2] = __ZN7WebCoreL28bidiNextSkippingEmptyInlinesINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_(HEAP32[i37 >> 2] | 0, i36, i37) | 0;
   HEAP32[i39 >> 2] = 0;
   HEAP32[i37 + 8 >> 2] = -1;
  }
 } while (0);
 i37 = HEAP32[i34 >> 2] | 0;
 i39 = i1 + 76 | 0;
 do {
  if ((HEAP8[HEAP32[i39 >> 2] | 0] & 1) == 0) {
   i41 = HEAP32[i37 + 36 >> 2] | 0;
  } else {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i37 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    i41 = HEAP32[i37 + 36 >> 2] | 0;
    break;
   } else {
    i41 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i37) | 0;
    break;
   }
  }
 } while (0);
 i37 = __ZNK7WebCore11RenderStyle4fontEv(i41) | 0;
 i36 = HEAP32[i37 + 24 >> 2] | 0;
 i35 = i36 + 108 | 0;
 i38 = HEAP32[i35 >> 2] | 0;
 if ((i38 & 458752 | 0) == 0) {
  __ZNK7WebCore10FontGlyphs14determinePitchERKNS_15FontDescriptionE(i36, i37 | 0);
  i42 = HEAP32[i35 >> 2] | 0;
 } else {
  i42 = i38;
 }
 i38 = (i42 & 458752 | 0) == 65536;
 i42 = i41 + 24 | 0;
 i35 = HEAP32[i42 >> 2] | 0;
 if ((HEAP32[i35 + 88 >> 2] & 6291456 | 0) == 4194304) {
  i43 = __ZN7WebCore12canHyphenateERKN3WTF12AtomicStringE(i35 + 108 | 0) | 0;
 } else {
  i43 = 0;
 }
 i35 = HEAP32[i27 >> 2] | 0;
 i36 = i1 + 68 | 0;
 d44 = +__ZNK7WebCore11RenderStyle11wordSpacingEv(HEAP32[i36 >> 2] | 0);
 i40 = i1 + 88 | 0;
 i45 = i1 + 92 | 0;
 d46 = +HEAPF32[i45 >> 2];
 i47 = i1 + 149 | 0;
 __ZN7WebCore18inlineLogicalWidthEPNS_12RenderObjectEbb(i17, HEAP32[i28 >> 2] | 0, (HEAP8[i47] & 1) == 0, 1);
 d48 = d46 + +(HEAP32[i17 >> 2] | 0);
 i17 = HEAP8[i33] & 1;
 i49 = i17 << 24 >> 24 == 0;
 i50 = HEAP32[(HEAP32[(HEAP32[i36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0;
 if (i49) {
  i51 = 0;
 } else {
  i51 = (i50 & 512 | 0) != 0;
 }
 i52 = i50 & 192;
 do {
  if ((i52 | 0) == 128 | (i50 & 256 | 0) != 0) {
   if (!i49) {
    if (+HEAPF32[i1 + 96 >> 2] == +0) {
     i53 = 1;
     break;
    }
   }
   i53 = (HEAP32[i1 + 136 >> 2] | 0) == 1;
  } else {
   i53 = 0;
  }
 } while (0);
 i49 = i32 ^ 1;
 i50 = i53 & i49;
 i53 = (i52 | 0) == 64 & i17 << 24 >> 24 != 0 & i49;
 i49 = i1 + 80 | 0;
 i17 = HEAP32[i49 >> 2] | 0;
 do {
  if ((HEAP32[i17 >> 2] | 0) == (i30 | 0)) {
   if ((HEAP32[i17 + 4 >> 2] | 0) == 0) {
    break;
   }
   i52 = i17 + 32 | 0;
   if ((HEAP32[i52 >> 2] | 0) == (i37 | 0)) {
    break;
   }
   HEAP32[i52 >> 2] = i37;
   i52 = HEAP32[i49 >> 2] | 0;
   __ZNK7WebCore4Font12createLayoutEPNS_10RenderTextEfb(i20, i37, i30, +HEAPF32[i1 + 96 >> 2] + +HEAPF32[i45 >> 2], (HEAP8[i1 + 154 | 0] & 1) != 0);
   i54 = i52 + 4 | 0;
   i52 = HEAP32[i54 >> 2] | 0;
   i55 = i20 | 0;
   i56 = HEAP32[i55 >> 2] | 0;
   HEAP32[i55 >> 2] = 0;
   HEAP32[i54 >> 2] = i56;
   __ZN3WTF14deleteOwnedPtrIN7WebCore10TextLayoutEEEvPT_(i52);
   __ZN3WTF14deleteOwnedPtrIN7WebCore10TextLayoutEEEvPT_(HEAP32[i55 >> 2] | 0);
  } else {
   do {
    if ((HEAP32[i29 + 20 >> 2] & 32 | 0) != 0) {
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i31 >> 2] | 0) + 60 >> 2] & 1](i29) | 0)) {
      break;
     }
     __ZN7WebCore13RenderCounter13updateCounterEv(i29);
    }
   } while (0);
   HEAP32[HEAP32[i49 >> 2] >> 2] = i30;
   HEAP32[(HEAP32[i49 >> 2] | 0) + 32 >> 2] = i37;
   i55 = HEAP32[i49 >> 2] | 0;
   __ZNK7WebCore4Font12createLayoutEPNS_10RenderTextEfb(i18, i37, i30, +HEAPF32[i1 + 96 >> 2] + +HEAPF32[i45 >> 2], (HEAP8[i1 + 154 | 0] & 1) != 0);
   i52 = i55 + 4 | 0;
   i55 = HEAP32[i52 >> 2] | 0;
   i56 = i18 | 0;
   i54 = HEAP32[i56 >> 2] | 0;
   HEAP32[i56 >> 2] = 0;
   HEAP32[i52 >> 2] = i54;
   __ZN3WTF14deleteOwnedPtrIN7WebCore10TextLayoutEEEvPT_(i55);
   __ZN3WTF14deleteOwnedPtrIN7WebCore10TextLayoutEEEvPT_(HEAP32[i56 >> 2] | 0);
   i56 = (HEAP32[i49 >> 2] | 0) + 8 | 0;
   i55 = HEAP32[i29 + 44 >> 2] | 0;
   i54 = i19 | 0;
   HEAP32[i54 >> 2] = i55;
   if ((i55 | 0) != 0) {
    i52 = i55 | 0;
    HEAP32[i52 >> 2] = (HEAP32[i52 >> 2] | 0) + 2;
   }
   __ZN7WebCore21LazyLineBreakIterator29resetStringAndReleaseIteratorEN3WTF6StringERKNS1_12AtomicStringE(i56, i19, (HEAP32[i42 >> 2] | 0) + 108 | 0);
   i56 = HEAP32[i54 >> 2] | 0;
   if ((i56 | 0) == 0) {
    break;
   }
   i54 = i56 | 0;
   i52 = (HEAP32[i54 >> 2] | 0) - 2 | 0;
   if ((i52 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i56);
    break;
   } else {
    HEAP32[i54 >> 2] = i52;
    break;
   }
  }
 } while (0);
 i19 = HEAP32[(HEAP32[i49 >> 2] | 0) + 4 >> 2] | 0;
 i18 = i21;
 _memset(i18 | 0, 0, 20) | 0;
 i31 = (i19 | 0) == 0;
 do {
  if ((HEAP32[i37 + 36 >> 2] & 256 | 0) != 0 & i31) {
   __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKtiRKNS_11RenderStyleEj(i22, i29, i37, H_BASE + 8, 1, i41, 1);
   d46 = d44 + +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i37, i22, i21, 0);
   i20 = HEAP32[i22 + 32 >> 2] | 0;
   if ((i20 | 0) == 0) {
    d57 = d46;
    break;
   }
   i17 = i20 + 4 | 0;
   i20 = i17 | 0;
   i52 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i52 | 0) != 0) {
    HEAP32[i20 >> 2] = i52;
    d57 = d46;
    break;
   }
   i52 = i17 - 4 | 0;
   if ((i52 | 0) == 0) {
    d57 = d46;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i52 >> 2] | 0) + 4 >> 2] & 1](i52);
   d57 = d46;
  } else {
   d57 = +0;
  }
 } while (0);
 i22 = HEAP32[i49 >> 2] | 0;
 i52 = HEAP16[i22 + 22 >> 1] | 0;
 i17 = HEAP32[i27 >> 2] | 0;
 i20 = i29 + 44 | 0;
 do {
  if (i17 >>> 0 < (HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
   i54 = i1 + 147 | 0;
   i56 = i1 + 148 | 0;
   i55 = i1 + 144 | 0;
   i58 = i1 + 154 | 0;
   i59 = i1 + 56 | 0;
   i60 = i6 + 32 | 0;
   i61 = i51 ^ 1;
   i62 = i1 + 16 | 0;
   i63 = i1 + 146 | 0;
   i64 = i2 + 8 | 0;
   i65 = i2 + 4 | 0;
   i66 = i2 | 0;
   i67 = d57 != +0;
   i68 = i1 + 96 | 0;
   i69 = i13;
   i70 = i29;
   i71 = i14 + 4 | 0;
   i72 = i30 + 25 | 0;
   i73 = i14 + 24 | 0;
   i74 = i14 + 28 | 0;
   i75 = i14 + 12 | 0;
   i76 = i14 + 32 | 0;
   i77 = i21 + 12 | 0;
   i78 = i21 | 0;
   i79 = i21 + 4 | 0;
   i80 = i21 + 8 | 0;
   i81 = i21 + 16 | 0;
   i82 = i23 | 0;
   i83 = i1 + 84 | 0;
   i84 = d44 != +0;
   i85 = i9;
   i86 = i1 + 24 | 0;
   i87 = i1 + 28 | 0;
   i88 = i1 + 36 | 0;
   i89 = i1 + 32 | 0;
   i90 = i1 | 0;
   i91 = i10 + 4 | 0;
   i92 = i10 + 24 | 0;
   i93 = i10 + 28 | 0;
   i94 = i10 + 12 | 0;
   i95 = i10 + 32 | 0;
   i96 = i1 + 72 | 0;
   i97 = i1 + 120 | 0;
   i98 = i1 + 24 | 0;
   i99 = i1 + 160 | 0;
   i100 = i1 + 40 | 0;
   i101 = i1 + 164 | 0;
   i102 = i24 | 0;
   i103 = i24 + 4 | 0;
   i104 = i24 + 8 | 0;
   i105 = i24 + 12 | 0;
   i106 = i11;
   i107 = i12 + 4 | 0;
   i108 = i12 + 24 | 0;
   i109 = i12 + 28 | 0;
   i110 = i12 + 12 | 0;
   i111 = i12 + 32 | 0;
   i112 = i29;
   i113 = i1 + 164 | 0;
   i114 = i1 + 176 | 0;
   i115 = i1 + 145 | 0;
   i116 = i1 + 44 | 0;
   i117 = i1 + 52 | 0;
   i118 = i1 + 64 | 0;
   i119 = i1 + 136 | 0;
   i120 = i15;
   i121 = i16 + 4 | 0;
   i122 = i16 + 24 | 0;
   i123 = i16 + 28 | 0;
   i124 = i16 + 12 | 0;
   i125 = i16 + 32 | 0;
   i126 = i41 + 44 | 0;
   i127 = i52;
   d46 = +0;
   i128 = i50;
   i129 = 0;
   d130 = +0;
   d131 = d48;
   d132 = +0;
   d133 = +0;
   i134 = i35;
   i135 = i17;
   L76 : while (1) {
    i136 = HEAP8[i54] | 0;
    i137 = (HEAP8[i56] & 1) == 0;
    i138 = HEAP32[i28 >> 2] | 0;
    do {
     if ((i138 | 0) == 0) {
      i139 = 0;
      i140 = 65;
     } else {
      if ((HEAP32[i138 + 20 >> 2] & 768 | 0) != 256) {
       i139 = 0;
       i140 = 65;
       break;
      }
      i141 = HEAP32[i138 + 44 >> 2] | 0;
      if ((HEAP32[i141 + 4 >> 2] | 0) >>> 0 <= i135 >>> 0) {
       i139 = 0;
       i140 = 65;
       break;
      }
      if ((HEAP32[i141 + 16 >> 2] & 32 | 0) == 0) {
       i142 = HEAP16[(HEAP32[i141 + 8 >> 2] | 0) + (i135 << 1) >> 1] | 0;
      } else {
       i142 = HEAPU8[(HEAP32[i141 + 8 >> 2] | 0) + i135 | 0] | 0;
      }
      if ((i142 << 16 >> 16 | 0) == 9) {
       i143 = 1;
       i144 = 9;
       i140 = 68;
       break;
      } else if ((i142 << 16 >> 16 | 0) != 32) {
       i139 = i142;
       i140 = 65;
       break;
      }
      i143 = 1;
      i144 = 32;
      i140 = 68;
     }
    } while (0);
    do {
     if ((i140 | 0) == 65) {
      i140 = 0;
      if ((HEAP8[i55] & 1) == 0) {
       i143 = i139 << 16 >> 16 == 10 | 0;
       i144 = i139;
       i140 = 68;
       break;
      } else {
       HEAP8[i54] = 0;
       i145 = i139;
       i140 = 69;
       break;
      }
     }
    } while (0);
    if ((i140 | 0) == 68) {
     i140 = 0;
     HEAP8[i54] = i143;
     if ((HEAP8[i58] & 1) == 0 | i143 << 24 >> 24 == 0) {
      i145 = i144;
      i140 = 69;
     } else {
      i146 = i144;
     }
    }
    if ((i140 | 0) == 69) {
     i140 = 0;
     __ZN7WebCore8LineInfo8setEmptyEbPNS_11RenderBlockEPNS_9LineWidthE(HEAP32[i39 >> 2] | 0, 0, HEAP32[i59 >> 2] | 0, i40);
     i146 = i145;
    }
    do {
     if (i146 << 16 >> 16 == 173) {
      if ((HEAP8[i33] & 1) == 0 | d130 != +0) {
       d147 = d130;
       break;
      }
      if ((HEAP32[(HEAP32[i42 >> 2] | 0) + 88 >> 2] & 6291456 | 0) == 0) {
       d147 = d130;
       break;
      }
      i138 = HEAP32[(HEAP32[i34 >> 2] | 0) + 36 >> 2] | 0;
      __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontERKN3WTF6StringERKNS_11RenderStyleEjj(i6, i29, i37, __ZNK7WebCore11RenderStyle12hyphenStringEv(i138) | 0, i138, 1, 0);
      d148 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i37, i6, i21, 0);
      i138 = HEAP32[i60 >> 2] | 0;
      do {
       if ((i138 | 0) != 0) {
        i141 = i138 + 4 | 0;
        i149 = i141 | 0;
        i150 = (HEAP32[i149 >> 2] | 0) - 1 | 0;
        if ((i150 | 0) != 0) {
         HEAP32[i149 >> 2] = i150;
         break;
        }
        i150 = i141 - 4 | 0;
        if ((i150 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i150 >> 2] | 0) + 4 >> 2] & 1](i150);
       }
      } while (0);
      HEAPF32[i45 >> 2] = d148 + +HEAPF32[i45 >> 2];
      d147 = d148;
     } else {
      d147 = d130;
     }
    } while (0);
    i138 = HEAP8[i54] & 1;
    if (i138 << 24 >> 24 != 0 | i61) {
     i151 = i138;
    } else {
     i151 = i146 << 16 >> 16 == 160 | 0;
    }
    HEAP8[i56] = i151;
    do {
     if (i129 | (i53 | i128) ^ 1) {
      d152 = d131;
      i153 = i129;
      d154 = d46;
     } else {
      if (i138 << 24 >> 24 != 0) {
       if ((HEAP32[i126 >> 2] & 7 | 0) == 2) {
        d152 = d131;
        i153 = 0;
        d154 = d46;
        break;
       }
      }
      d155 = d46 + d131;
      i150 = HEAP32[i27 >> 2] | 0;
      do {
       if ((i146 & -1024) << 16 >> 16 == -10240) {
        i141 = i150 + 1 | 0;
        i149 = HEAP32[i20 >> 2] | 0;
        if (i141 >>> 0 >= (HEAP32[i149 + 4 >> 2] | 0) >>> 0) {
         i156 = 1;
         break;
        }
        if ((HEAP32[i149 + 16 >> 2] & 32 | 0) == 0) {
         i157 = HEAP16[(HEAP32[i149 + 8 >> 2] | 0) + (i141 << 1) >> 1] | 0;
        } else {
         i157 = HEAPU8[(HEAP32[i149 + 8 >> 2] | 0) + i141 | 0] | 0;
        }
        i156 = (i157 & -1024) << 16 >> 16 == -9216 ? 2 : 1;
       } else {
        i156 = 1;
       }
      } while (0);
      d148 = d155 + +HEAPF32[i68 >> 2];
      i141 = HEAP8[i58] & 1;
      i149 = HEAP32[(HEAP32[i34 >> 2] | 0) + 36 >> 2] | 0;
      _memset(i120 | 0, 0, 17) | 0;
      do {
       if (i38) {
        i140 = 94;
       } else {
        if ((i150 | 0) == 0) {
         if ((i156 | 0) == (HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] | 0)) {
          i140 = 94;
          break;
         }
        }
        if ((HEAP32[(HEAP32[i149 + 20 >> 2] | 0) + 296 >> 2] & 128 | 0) != 0) {
         i140 = 94;
         break;
        }
        if (!i31) {
         d158 = +__ZN7WebCore4Font5widthERNS_10TextLayoutEjjPN3WTF7HashSetIPKNS_14SimpleFontDataENS3_7PtrHashIS7_EENS3_10HashTraitsIS7_EEEE(i19, i150, i156, i21);
         break;
        }
        __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKNS_10RenderTextEjjRKNS_11RenderStyleEj(i16, i29, i37, i30, i150, i156, i149, 1);
        HEAP32[i121 >> 2] = (HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] | 0) - i150;
        i159 = ((HEAP8[i72] & 1 ^ 1) & 255) << 6 | HEAP32[i122 >> 2] & -65;
        HEAP32[i122 >> 2] = i159;
        i160 = HEAP32[(HEAP32[i149 + 24 >> 2] | 0) + 124 >> 2] | 0;
        HEAP32[i122 >> 2] = i159 & -9 | ((i141 ^ 1) & 255) << 3;
        HEAP32[i123 >> 2] = i160;
        HEAPF32[i124 >> 2] = d148;
        d161 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i37, i16, i21, i15);
        i160 = HEAP32[i125 >> 2] | 0;
        if ((i160 | 0) == 0) {
         d158 = d161;
         break;
        }
        i159 = i160 + 4 | 0;
        i160 = i159 | 0;
        i162 = (HEAP32[i160 >> 2] | 0) - 1 | 0;
        if ((i162 | 0) != 0) {
         HEAP32[i160 >> 2] = i162;
         d158 = d161;
         break;
        }
        i162 = i159 - 4 | 0;
        if ((i162 | 0) == 0) {
         d158 = d161;
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i162 >> 2] | 0) + 4 >> 2] & 1](i162);
        d158 = d161;
       }
      } while (0);
      if ((i140 | 0) == 94) {
       i140 = 0;
       d158 = +FUNCTION_TABLE_fiiiifii[HEAP32[(HEAP32[i70 >> 2] | 0) + 632 >> 2] & 1](i30, i150, i156, i37, d148, i21, i15);
      }
      d152 = d155;
      i153 = d158 + (d155 + +HEAPF32[i68 >> 2]) > +HEAPF32[i97 >> 2];
      d154 = d158;
     }
    } while (0);
    i138 = HEAP32[i62 >> 2] | 0;
    i141 = i146 << 16 >> 16 == 10;
    L143 : do {
     if (i141) {
      i163 = i138;
      i140 = 144;
     } else {
      do {
       if ((HEAP32[i119 >> 2] | 0) == 1) {
        i164 = 0;
        i165 = i138;
       } else {
        if ((HEAP8[i115] & 1) != 0) {
         i164 = 0;
         i165 = i138;
         break;
        }
        i149 = (HEAP32[i49 >> 2] | 0) + 8 | 0;
        i162 = HEAP32[i27 >> 2] | 0;
        do {
         if ((i138 | 0) < (i162 | 0)) {
          i159 = HEAP32[i149 >> 2] | 0;
          i160 = (i159 | 0) == 0;
          if (i51) {
           if (!i160) {
            i166 = i159 | 0;
            HEAP32[i166 >> 2] = (HEAP32[i166 >> 2] | 0) + 2;
           }
           if ((HEAP32[i159 + 16 >> 2] & 32 | 0) == 0) {
            if (i160) {
             i167 = 0;
             i168 = 0;
            } else {
             i167 = HEAP32[i159 + 4 >> 2] | 0;
             i168 = HEAP32[i159 + 8 >> 2] | 0;
            }
            i169 = __ZN7WebCore21nextBreakablePositionItLb1EEEiRNS_21LazyLineBreakIteratorEPKT_ji(i149, i168, i167, i162) | 0;
           } else {
            if (i160) {
             i170 = 0;
             i171 = 0;
            } else {
             i170 = HEAP32[i159 + 4 >> 2] | 0;
             i171 = HEAP32[i159 + 8 >> 2] | 0;
            }
            i169 = __ZN7WebCore21nextBreakablePositionIhLb1EEEiRNS_21LazyLineBreakIteratorEPKT_ji(i149, i171, i170, i162) | 0;
           }
           if (i160) {
            i172 = i169;
            break;
           }
           i166 = i159 | 0;
           i173 = (HEAP32[i166 >> 2] | 0) - 2 | 0;
           if ((i173 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i159);
            i172 = i169;
            break;
           } else {
            HEAP32[i166 >> 2] = i173;
            i172 = i169;
            break;
           }
          } else {
           if (!i160) {
            i173 = i159 | 0;
            HEAP32[i173 >> 2] = (HEAP32[i173 >> 2] | 0) + 2;
           }
           if ((HEAP32[i159 + 16 >> 2] & 32 | 0) == 0) {
            if (i160) {
             i174 = 0;
             i175 = 0;
            } else {
             i174 = HEAP32[i159 + 4 >> 2] | 0;
             i175 = HEAP32[i159 + 8 >> 2] | 0;
            }
            i176 = __ZN7WebCore21nextBreakablePositionItLb0EEEiRNS_21LazyLineBreakIteratorEPKT_ji(i149, i175, i174, i162) | 0;
           } else {
            if (i160) {
             i177 = 0;
             i178 = 0;
            } else {
             i177 = HEAP32[i159 + 4 >> 2] | 0;
             i178 = HEAP32[i159 + 8 >> 2] | 0;
            }
            i176 = __ZN7WebCore21nextBreakablePositionIhLb0EEEiRNS_21LazyLineBreakIteratorEPKT_ji(i149, i178, i177, i162) | 0;
           }
           if (i160) {
            i172 = i176;
            break;
           }
           i160 = i159 | 0;
           i173 = (HEAP32[i160 >> 2] | 0) - 2 | 0;
           if ((i173 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i159);
            i172 = i176;
            break;
           } else {
            HEAP32[i160 >> 2] = i173;
            i172 = i176;
            break;
           }
          }
         } else {
          i172 = i138;
         }
        } while (0);
        if ((i172 | 0) != (i162 | 0)) {
         i164 = 0;
         i165 = i172;
         break;
        }
        if ((HEAP32[(HEAP32[i42 >> 2] | 0) + 88 >> 2] & 6291456 | 0) != 0) {
         i163 = i162;
         i140 = 144;
         break L143;
        }
        i149 = HEAP32[i27 >> 2] | 0;
        do {
         if ((i149 | 0) == 0) {
          i179 = 0;
         } else {
          i173 = i149 - 1 | 0;
          i160 = HEAP32[i28 >> 2] | 0;
          if ((i160 | 0) == 0) {
           i179 = 0;
           break;
          }
          if ((HEAP32[i160 + 20 >> 2] & 768 | 0) != 256) {
           i179 = 0;
           break;
          }
          i159 = HEAP32[i160 + 44 >> 2] | 0;
          if ((HEAP32[i159 + 4 >> 2] | 0) >>> 0 <= i173 >>> 0) {
           i179 = 0;
           break;
          }
          if ((HEAP32[i159 + 16 >> 2] & 32 | 0) == 0) {
           i179 = HEAP16[(HEAP32[i159 + 8 >> 2] | 0) + (i173 << 1) >> 1] | 0;
           break;
          } else {
           i179 = HEAPU8[(HEAP32[i159 + 8 >> 2] | 0) + i173 | 0] | 0;
           break;
          }
         }
        } while (0);
        i164 = i179 << 16 >> 16 != 173;
        i165 = i162;
       }
      } while (0);
      HEAP32[i62 >> 2] = i165;
      i150 = (HEAP8[i63] & 1) == 0;
      if (i164 | i153) {
       if (i150) {
        i180 = 0;
        i181 = i134;
        d182 = d133;
        d183 = d132;
        i184 = i164;
        i140 = 158;
        break;
       } else {
        i185 = i164;
        i140 = 147;
        break;
       }
      }
      if (i150) {
       i186 = i134;
       d187 = d133;
       d188 = d132;
       d189 = d152;
       d190 = d147;
       i191 = 0;
       i192 = i128;
       i140 = 327;
       break;
      }
      HEAP8[i63] = 0;
      i150 = HEAP32[i27 >> 2] | 0;
      i149 = HEAP32[i99 >> 2] | 0;
      i173 = HEAP32[i28 >> 2] | 0;
      i159 = i149 | 0;
      i160 = i149 + 8 | 0;
      i166 = i149 + 12 | 0;
      i193 = HEAP32[i166 >> 2] | 0;
      if ((HEAP32[i160 >> 2] | 0) >>> 0 > i193 >>> 0) {
       i194 = i193;
       i195 = i149 | 0;
      } else {
       i196 = i193 + 10 | 0;
       if ((HEAP32[i149 + 4 >> 2] | 0) >>> 0 < i196 >>> 0) {
        __ZN3WTF6VectorIN7WebCore14InlineIteratorELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i159, i196);
       }
       i159 = i149 | 0;
       i149 = HEAP32[i159 >> 2] | 0;
       do {
        if ((i149 | 0) != 0) {
         i193 = HEAP32[i160 >> 2] | 0;
         i197 = i149 + (i196 << 4) | 0;
         if ((i193 | 0) == (i196 | 0)) {
          break;
         }
         i198 = i149 + (i193 << 4) | 0;
         while (1) {
          HEAP32[i198 >> 2] = 0;
          HEAP32[i198 + 4 >> 2] = 0;
          HEAP32[i198 + 8 >> 2] = -1;
          HEAP32[i198 + 12 >> 2] = 0;
          i198 = i198 + 16 | 0;
          if ((i198 | 0) == (i197 | 0)) {
           break;
          }
         }
        }
       } while (0);
       HEAP32[i160 >> 2] = i196;
       i194 = HEAP32[i166 >> 2] | 0;
       i195 = i159;
      }
      i149 = HEAP32[i195 >> 2] | 0;
      HEAP32[i166 >> 2] = i194 + 1;
      HEAP32[i149 + (i194 << 4) >> 2] = 0;
      HEAP32[i149 + (i194 << 4) + 4 >> 2] = i173;
      HEAP32[i149 + (i194 << 4) + 8 >> 2] = -1;
      HEAP32[i149 + (i194 << 4) + 12 >> 2] = i150;
      i186 = i150;
      d187 = +0;
      d188 = +0;
      d189 = d152;
      d190 = d147;
      i191 = 0;
      i192 = i128;
      i140 = 327;
     }
    } while (0);
    if ((i140 | 0) == 144) {
     i140 = 0;
     HEAP32[i62 >> 2] = i163;
     if ((HEAP8[i63] & 1) == 0) {
      i180 = 0;
      i181 = i134;
      d182 = d133;
      d183 = d132;
      i184 = 1;
      i140 = 158;
     } else {
      i185 = 1;
      i140 = 147;
     }
    }
    do {
     if ((i140 | 0) == 147) {
      i140 = 0;
      if ((HEAP8[i54] & 1) != 0) {
       i199 = i134;
       d200 = +0;
       d201 = d132;
       d202 = d152;
       d203 = d147;
       i204 = i153;
       i205 = i128;
       break;
      }
      HEAP8[i63] = 0;
      i138 = HEAP32[i27 >> 2] | 0;
      i149 = HEAP32[i99 >> 2] | 0;
      i197 = HEAP32[i28 >> 2] | 0;
      i198 = i149 | 0;
      i162 = i149 + 8 | 0;
      i193 = i149 + 12 | 0;
      i206 = HEAP32[i193 >> 2] | 0;
      if ((HEAP32[i162 >> 2] | 0) >>> 0 > i206 >>> 0) {
       i207 = i206;
       i208 = i149 | 0;
      } else {
       i209 = i206 + 10 | 0;
       if ((HEAP32[i149 + 4 >> 2] | 0) >>> 0 < i209 >>> 0) {
        __ZN3WTF6VectorIN7WebCore14InlineIteratorELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i198, i209);
       }
       i198 = i149 | 0;
       i149 = HEAP32[i198 >> 2] | 0;
       do {
        if ((i149 | 0) != 0) {
         i206 = HEAP32[i162 >> 2] | 0;
         i210 = i149 + (i209 << 4) | 0;
         if ((i206 | 0) == (i209 | 0)) {
          break;
         }
         i211 = i149 + (i206 << 4) | 0;
         while (1) {
          HEAP32[i211 >> 2] = 0;
          HEAP32[i211 + 4 >> 2] = 0;
          HEAP32[i211 + 8 >> 2] = -1;
          HEAP32[i211 + 12 >> 2] = 0;
          i211 = i211 + 16 | 0;
          if ((i211 | 0) == (i210 | 0)) {
           break;
          }
         }
        }
       } while (0);
       HEAP32[i162 >> 2] = i209;
       i207 = HEAP32[i193 >> 2] | 0;
       i208 = i198;
      }
      i149 = HEAP32[i208 >> 2] | 0;
      HEAP32[i193 >> 2] = i207 + 1;
      HEAP32[i149 + (i207 << 4) >> 2] = 0;
      HEAP32[i149 + (i207 << 4) + 4 >> 2] = i197;
      HEAP32[i149 + (i207 << 4) + 8 >> 2] = -1;
      HEAP32[i149 + (i207 << 4) + 12 >> 2] = i138;
      i180 = 1;
      i181 = i138;
      d182 = +0;
      d183 = +0;
      i184 = i185;
      i140 = 158;
     }
    } while (0);
    do {
     if ((i140 | 0) == 158) {
      i140 = 0;
      i149 = (HEAP32[i64 >> 2] | 0) + 1 | 0;
      i150 = HEAP32[i65 >> 2] | 0;
      if (i150 >>> 0 < i149 >>> 0) {
       i173 = i150 + 1 + (i150 >>> 2) | 0;
       i150 = i173 >>> 0 > 16 >>> 0 ? i173 : 16;
       __ZN3WTF6VectorIN7WebCore15WordMeasurementELj64ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i150 >>> 0 > i149 >>> 0 ? i150 : i149);
      }
      i150 = HEAP32[i66 >> 2] | 0;
      do {
       if ((i150 | 0) != 0) {
        i173 = HEAP32[i64 >> 2] | 0;
        i166 = i150 + (i149 * 36 & -1) | 0;
        if ((i173 | 0) == (i149 | 0)) {
         break;
        }
        i159 = i150 + (i173 * 36 & -1) | 0;
        while (1) {
         _memset(i159 | 0, 0, 36) | 0;
         i159 = i159 + 36 | 0;
         if ((i159 | 0) == (i166 | 0)) {
          break;
         }
        }
       }
      } while (0);
      HEAP32[i64 >> 2] = i149;
      i150 = _llvm_uadd_with_overflow_i32(i149 | 0, -1 | 0) | 0;
      if (!tempRet0) {
       i140 = 165;
       break L76;
      }
      i138 = i150;
      i150 = HEAP32[i66 >> 2] | 0;
      HEAP32[i150 + (i138 * 36 & -1) >> 2] = i30;
      i197 = i150 + (i138 * 36 & -1) + 12 | 0;
      HEAP32[i197 >> 2] = HEAP32[i27 >> 2];
      HEAP32[i150 + (i138 * 36 & -1) + 8 >> 2] = i181;
      i193 = HEAP32[i27 >> 2] | 0;
      L247 : do {
       if (i67 & i146 << 16 >> 16 == 32) {
        i198 = 1 - i181 + i193 | 0;
        d155 = +HEAPF32[i68 >> 2] + +HEAPF32[i45 >> 2];
        i209 = HEAP8[i58] & 1;
        i162 = i150 + (i138 * 36 & -1) + 16 | 0;
        i166 = HEAP32[(HEAP32[i34 >> 2] | 0) + 36 >> 2] | 0;
        _memset(i69 | 0, 0, 17) | 0;
        do {
         if (i38) {
          i140 = 171;
         } else {
          if ((i181 | 0) == 0) {
           if ((i198 | 0) == (HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] | 0)) {
            i140 = 171;
            break;
           }
          }
          if ((HEAP32[(HEAP32[i166 + 20 >> 2] | 0) + 296 >> 2] & 128 | 0) != 0) {
           i140 = 171;
           break;
          }
          if (!i31) {
           d212 = +__ZN7WebCore4Font5widthERNS_10TextLayoutEjjPN3WTF7HashSetIPKNS_14SimpleFontDataENS3_7PtrHashIS7_EENS3_10HashTraitsIS7_EEEE(i19, i181, i198, i162);
           break;
          }
          __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKNS_10RenderTextEjjRKNS_11RenderStyleEj(i14, i29, i37, i30, i181, i198, i166, 1);
          HEAP32[i71 >> 2] = (HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] | 0) - i181;
          i159 = ((HEAP8[i72] & 1 ^ 1) & 255) << 6 | HEAP32[i73 >> 2] & -65;
          HEAP32[i73 >> 2] = i159;
          i173 = HEAP32[(HEAP32[i166 + 24 >> 2] | 0) + 124 >> 2] | 0;
          HEAP32[i73 >> 2] = i159 & -9 | ((i209 ^ 1) & 255) << 3;
          HEAP32[i74 >> 2] = i173;
          HEAPF32[i75 >> 2] = d155;
          d148 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i37, i14, i162, i13);
          i173 = HEAP32[i76 >> 2] | 0;
          if ((i173 | 0) == 0) {
           d212 = d148;
           break;
          }
          i159 = i173 + 4 | 0;
          i173 = i159 | 0;
          i196 = (HEAP32[i173 >> 2] | 0) - 1 | 0;
          if ((i196 | 0) != 0) {
           HEAP32[i173 >> 2] = i196;
           d212 = d148;
           break;
          }
          i196 = i159 - 4 | 0;
          if ((i196 | 0) == 0) {
           d212 = d148;
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i196 >> 2] | 0) + 4 >> 2] & 1](i196);
          d212 = d148;
         }
        } while (0);
        if ((i140 | 0) == 171) {
         i140 = 0;
         d212 = +FUNCTION_TABLE_fiiiifii[HEAP32[(HEAP32[i70 >> 2] | 0) + 632 >> 2] & 1](i30, i181, i198, i37, d155, i162, i13);
        }
        d213 = d212 - d57;
       } else {
        i209 = i193 - i181 | 0;
        d148 = +HEAPF32[i68 >> 2] + +HEAPF32[i45 >> 2];
        i166 = HEAP8[i58] & 1;
        i196 = i150 + (i138 * 36 & -1) + 16 | 0;
        i159 = HEAP32[(HEAP32[i34 >> 2] | 0) + 36 >> 2] | 0;
        _memset(i106 | 0, 0, 17) | 0;
        do {
         if (!i38) {
          if ((i181 | 0) == 0) {
           if ((i209 | 0) == (HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] | 0)) {
            break;
           }
          }
          if ((HEAP32[(HEAP32[i159 + 20 >> 2] | 0) + 296 >> 2] & 128 | 0) != 0) {
           break;
          }
          if (!i31) {
           d213 = +__ZN7WebCore4Font5widthERNS_10TextLayoutEjjPN3WTF7HashSetIPKNS_14SimpleFontDataENS3_7PtrHashIS7_EENS3_10HashTraitsIS7_EEEE(i19, i181, i209, i196);
           break L247;
          }
          __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKNS_10RenderTextEjjRKNS_11RenderStyleEj(i12, i29, i37, i30, i181, i209, i159, 1);
          HEAP32[i107 >> 2] = (HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] | 0) - i181;
          i173 = ((HEAP8[i72] & 1 ^ 1) & 255) << 6 | HEAP32[i108 >> 2] & -65;
          HEAP32[i108 >> 2] = i173;
          i160 = HEAP32[(HEAP32[i159 + 24 >> 2] | 0) + 124 >> 2] | 0;
          HEAP32[i108 >> 2] = i173 & -9 | ((i166 ^ 1) & 255) << 3;
          HEAP32[i109 >> 2] = i160;
          HEAPF32[i110 >> 2] = d148;
          d161 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i37, i12, i196, i11);
          i160 = HEAP32[i111 >> 2] | 0;
          if ((i160 | 0) == 0) {
           d213 = d161;
           break L247;
          }
          i173 = i160 + 4 | 0;
          i160 = i173 | 0;
          i210 = (HEAP32[i160 >> 2] | 0) - 1 | 0;
          if ((i210 | 0) != 0) {
           HEAP32[i160 >> 2] = i210;
           d213 = d161;
           break L247;
          }
          i210 = i173 - 4 | 0;
          if ((i210 | 0) == 0) {
           d213 = d161;
           break L247;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i210 >> 2] | 0) + 4 >> 2] & 1](i210);
          d213 = d161;
          break L247;
         }
        } while (0);
        d213 = +FUNCTION_TABLE_fiiiifii[HEAP32[(HEAP32[i70 >> 2] | 0) + 632 >> 2] & 1](i30, i181, i209, i37, d148, i196, i11);
       }
      } while (0);
      i193 = i150 + (i138 * 36 & -1) + 16 | 0;
      i149 = i150 + (i138 * 36 & -1) + 28 | 0;
      do {
       if ((HEAP32[i149 >> 2] | 0) == 0) {
        if ((HEAP32[i77 >> 2] | 0) == 0) {
         break;
        }
        i166 = i193 | 0;
        i159 = HEAP32[i166 >> 2] | 0;
        HEAP32[i166 >> 2] = HEAP32[i78 >> 2];
        HEAP32[i78 >> 2] = i159;
        i159 = i150 + (i138 * 36 & -1) + 20 | 0;
        i166 = HEAP32[i159 >> 2] | 0;
        HEAP32[i159 >> 2] = HEAP32[i79 >> 2];
        HEAP32[i79 >> 2] = i166;
        i166 = i150 + (i138 * 36 & -1) + 24 | 0;
        i159 = HEAP32[i166 >> 2] | 0;
        HEAP32[i166 >> 2] = HEAP32[i80 >> 2];
        HEAP32[i80 >> 2] = i159;
        i159 = HEAP32[i149 >> 2] | 0;
        HEAP32[i149 >> 2] = HEAP32[i77 >> 2];
        HEAP32[i77 >> 2] = i159;
        i159 = i150 + (i138 * 36 & -1) + 32 | 0;
        i166 = HEAP32[i159 >> 2] | 0;
        HEAP32[i159 >> 2] = HEAP32[i81 >> 2];
        HEAP32[i81 >> 2] = i166;
       }
      } while (0);
      i149 = HEAP32[i78 >> 2] | 0;
      if ((i149 | 0) != 0) {
       __ZN3WTF8fastFreeEPv(i149);
       _memset(i18 | 0, 0, 16) | 0;
      }
      i149 = i150 + (i138 * 36 & -1) + 4 | 0;
      HEAPF32[i149 >> 2] = d183 + d213;
      d155 = d182 + d213;
      HEAPF32[i45 >> 2] = d155 + +HEAPF32[i45 >> 2];
      do {
       if ((HEAP8[i58] & 1) != 0) {
        if ((i136 & 1) == 0) {
         break;
        }
        if (!((HEAP8[i54] & 1) != 0 & d155 != +0)) {
         break;
        }
        __ZN7WebCore9LineWidth26setTrailingWhitespaceWidthEff(i40, d155, +0);
       }
      } while (0);
      if ((HEAP8[i47] & 1) == 0) {
       __ZN7WebCore18inlineLogicalWidthEPNS_12RenderObjectEbb(i23, HEAP32[i28 >> 2] | 0, 1, 0);
       HEAPF32[i45 >> 2] = +HEAPF32[i45 >> 2] + +(HEAP32[i82 >> 2] | 0);
       HEAP8[i47] = 1;
      }
      i138 = HEAP32[i83 >> 2] | 0;
      if ((i138 | 0) != 0) {
       __ZN7WebCore23updateSegmentsForShapesERNS_15RenderBlockFlowEPKNS_14FloatingObjectERKN3WTF6VectorINS_15WordMeasurementELj64ENS5_15CrashOnOverflowEEERNS_9LineWidthEb(HEAP32[i59 >> 2] | 0, i138, i2, i40, (HEAP8[HEAP32[i39 >> 2] | 0] & 1) != 0);
      }
      if (i84) {
       i214 = (HEAP8[i54] & 1) != 0;
      } else {
       i214 = 0;
      }
      do {
       if (+HEAPF32[i68 >> 2] == +0) {
        if ((HEAP8[i33] & 1) == 0) {
         break;
        }
        if (__ZNK7WebCore9LineWidth10fitsOnLineEb(i40, 0) | 0) {
         break;
        }
        __ZN7WebCore9LineWidth14fitBelowFloatsEv(i40);
       }
      } while (0);
      L309 : do {
       if ((HEAP8[i33] & 1) != 0 | i128) {
        do {
         if (__ZNK7WebCore9LineWidth10fitsOnLineEb(i40, 0) | 0) {
          if ((HEAP8[i56] & 1) == 0) {
           i140 = 231;
           break;
          }
          i138 = HEAP32[i36 >> 2] | 0;
          if ((HEAP32[i138 + 44 >> 2] & 7 | 0) == 2) {
           i215 = 0;
          } else {
           i215 = (HEAP32[(HEAP32[i138 + 24 >> 2] | 0) + 88 >> 2] & 7168 | 0) != 4096;
          }
          if (i215 | i153) {
           i140 = 231;
           break;
          }
          i138 = HEAP32[i27 >> 2] | 0;
          d161 = +HEAPF32[i68 >> 2] + +HEAPF32[i45 >> 2];
          i150 = HEAP8[i58] & 1;
          i166 = HEAP32[(HEAP32[i34 >> 2] | 0) + 36 >> 2] | 0;
          _memset(i85 | 0, 0, 17) | 0;
          do {
           if (i38) {
            i140 = 221;
           } else {
            if ((i138 | 0) == 0) {
             if ((HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] | 0) == 1) {
              i140 = 221;
              break;
             }
            }
            if ((HEAP32[(HEAP32[i166 + 20 >> 2] | 0) + 296 >> 2] & 128 | 0) != 0) {
             i140 = 221;
             break;
            }
            if (!i31) {
             d216 = +__ZN7WebCore4Font5widthERNS_10TextLayoutEjjPN3WTF7HashSetIPKNS_14SimpleFontDataENS3_7PtrHashIS7_EENS3_10HashTraitsIS7_EEEE(i19, i138, 1, i193);
             break;
            }
            __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKNS_10RenderTextEjjRKNS_11RenderStyleEj(i10, i29, i37, i30, i138, 1, i166, 1);
            HEAP32[i91 >> 2] = (HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] | 0) - i138;
            i159 = ((HEAP8[i72] & 1 ^ 1) & 255) << 6 | HEAP32[i92 >> 2] & -65;
            HEAP32[i92 >> 2] = i159;
            i162 = HEAP32[(HEAP32[i166 + 24 >> 2] | 0) + 124 >> 2] | 0;
            HEAP32[i92 >> 2] = i159 & -9 | ((i150 ^ 1) & 255) << 3;
            HEAP32[i93 >> 2] = i162;
            HEAPF32[i94 >> 2] = d161;
            d217 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i37, i10, i193, i9);
            i162 = HEAP32[i95 >> 2] | 0;
            if ((i162 | 0) == 0) {
             d216 = d217;
             break;
            }
            i159 = i162 + 4 | 0;
            i162 = i159 | 0;
            i198 = (HEAP32[i162 >> 2] | 0) - 1 | 0;
            if ((i198 | 0) != 0) {
             HEAP32[i162 >> 2] = i198;
             d216 = d217;
             break;
            }
            i198 = i159 - 4 | 0;
            if ((i198 | 0) == 0) {
             d216 = d217;
             break;
            }
            FUNCTION_TABLE_vi[HEAP32[(HEAP32[i198 >> 2] | 0) + 4 >> 2] & 1](i198);
            d216 = d217;
           }
          } while (0);
          if ((i140 | 0) == 221) {
           i140 = 0;
           d216 = +FUNCTION_TABLE_fiiiifii[HEAP32[(HEAP32[i70 >> 2] | 0) + 632 >> 2] & 1](i30, i138, 1, i37, d161, i193, i9);
          }
          if (__ZNK7WebCore9LineWidth29fitsOnLineIncludingExtraWidthEf(i40, (i214 ? d44 : +0) + d216) | 0) {
           i140 = 231;
           break;
          }
          i150 = HEAP32[i27 >> 2] | 0;
          i166 = HEAP32[i62 >> 2] | 0;
          HEAP32[i87 >> 2] = HEAP32[i28 >> 2];
          HEAP32[i88 >> 2] = i150;
          HEAP32[i89 >> 2] = i166;
          __ZN7WebCore11LineBreaker22skipTrailingWhitespaceERNS_14InlineIteratorERKNS_8LineInfoE(HEAP32[i90 >> 2] | 0, i86, HEAP32[i39 >> 2] | 0);
         } else {
          i140 = 231;
         }
        } while (0);
        do {
         if ((i140 | 0) == 231) {
          i140 = 0;
          if (!(__ZNK7WebCore9LineWidth10fitsOnLineEb(i40, 0) | 0)) {
           break;
          }
          do {
           if (i184) {
            if (!i153) {
             break;
            }
            if ((HEAP8[i33] & 1) == 0) {
             i140 = 278;
            }
           } else {
            i140 = 278;
           }
          } while (0);
          if ((i140 | 0) == 278) {
           i140 = 0;
           HEAPF32[i45 >> 2] = +HEAPF32[i45 >> 2] - d155;
          }
          if (d147 == +0) {
           d218 = d147;
           break L309;
          }
          HEAPF32[i45 >> 2] = +HEAPF32[i45 >> 2] - d147;
          d218 = +0;
          break L309;
         }
        } while (0);
        do {
         if (i43) {
          if (__ZNK7WebCore9LineWidth10fitsOnLineEb(i40, 0) | 0) {
           break;
          }
          i138 = HEAP32[i42 >> 2] | 0;
          __ZN7WebCore14tryHyphenatingEPNS_10RenderTextERKNS_4FontERKN3WTF12AtomicStringEjiiijjfibbiRNS_14InlineIteratorEiRb(i30, i37, i138 + 108 | 0, HEAP32[i4 >> 2] | 0, HEAP16[(HEAP32[(HEAP32[i96 >> 2] | 0) + 24 >> 2] | 0) + 104 >> 1] | 0, HEAP16[i138 + 100 >> 1] | 0, HEAP16[i138 + 102 >> 1] | 0, i181, HEAP32[i27 >> 2] | 0, +HEAPF32[i68 >> 2] + +HEAPF32[i45 >> 2] - d155, ~~+HEAPF32[i97 >> 2], 0, (HEAP8[i58] & 1) != 0, ~~d182, i86, HEAP32[i62 >> 2] | 0, (HEAP32[i90 >> 2] | 0) + 4 | 0);
          if ((HEAP8[(HEAP32[i90 >> 2] | 0) + 4 | 0] & 1) != 0) {
           i140 = 235;
           break L76;
          }
         }
        } while (0);
        i138 = HEAP32[i87 >> 2] | 0;
        do {
         if ((i138 | 0) == 0) {
          i140 = 266;
         } else {
          do {
           if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i138 >> 2] | 0) + 368 >> 2] & 1](i138) | 0)) {
            if ((HEAP32[i138 + 20 >> 2] & 768 | 0) == 256) {
             i219 = HEAP32[(HEAP32[i138 + 8 >> 2] | 0) + 36 >> 2] | 0;
            } else {
             i219 = HEAP32[i138 + 36 >> 2] | 0;
            }
            i196 = HEAP32[i219 + 44 >> 2] & 7;
            if ((i196 | 0) == 4 | (i196 | 0) == 0) {
             break;
            }
            i196 = HEAP32[i87 >> 2] | 0;
            if ((HEAP32[i196 + 20 >> 2] & 768 | 0) != 256) {
             break;
            }
            i209 = HEAP32[i196 + 44 >> 2] | 0;
            if ((HEAP32[i209 + 4 >> 2] | 0) == 0) {
             break;
            }
            i166 = HEAP32[i88 >> 2] | 0;
            if ((HEAP32[i209 + 16 >> 2] & 32 | 0) == 0) {
             i220 = HEAP16[(HEAP32[i209 + 8 >> 2] | 0) + (i166 << 1) >> 1] | 0;
            } else {
             i220 = HEAPU8[(HEAP32[i209 + 8 >> 2] | 0) + i166 | 0] | 0;
            }
            if (i220 << 16 >> 16 != 10) {
             break;
            }
            do {
             if (i180) {
              i221 = i196;
             } else {
              if ((HEAP32[i27 >> 2] | 0) == 0) {
               i221 = i196;
               break;
              }
              __ZN7WebCore26ensureCharacterGetsLineBoxERNS_13MidpointStateINS_14InlineIteratorEEERS1_(HEAP32[i99 >> 2] | 0, i26);
              i221 = HEAP32[i87 >> 2] | 0;
             }
            } while (0);
            do {
             if ((i221 | 0) != 0) {
              if ((HEAP32[i221 + 20 >> 2] & 768 | 0) == 256) {
               i196 = (HEAP32[i88 >> 2] | 0) + 1 | 0;
               HEAP32[i88 >> 2] = i196;
               if (i196 >>> 0 < (HEAP32[(HEAP32[i221 + 44 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
                break;
               }
              }
              HEAP32[i87 >> 2] = __ZN7WebCoreL28bidiNextSkippingEmptyInlinesINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_(HEAP32[i98 >> 2] | 0, i221, 0) | 0;
              HEAP32[i88 >> 2] = 0;
              HEAP32[i89 >> 2] = -1;
             }
            } while (0);
            HEAP8[(HEAP32[i39 >> 2] | 0) + 3 | 0] = 1;
            HEAP32[i197 >> 2] = HEAP32[i88 >> 2];
           }
          } while (0);
          i196 = HEAP32[i87 >> 2] | 0;
          if ((i196 | 0) == 0) {
           i140 = 266;
           break;
          }
          i166 = HEAP32[i88 >> 2] | 0;
          if ((i166 | 0) == 0) {
           break;
          }
          if ((HEAP32[i196 + 20 >> 2] & 768 | 0) != 256) {
           i140 = 266;
           break;
          }
          i209 = HEAP32[i196 + 44 >> 2] | 0;
          if ((HEAP32[i209 + 4 >> 2] | 0) == 0) {
           i140 = 266;
           break;
          }
          i196 = i166 - 1 | 0;
          if ((HEAP32[i209 + 16 >> 2] & 32 | 0) == 0) {
           i222 = HEAP16[(HEAP32[i209 + 8 >> 2] | 0) + (i196 << 1) >> 1] | 0;
          } else {
           i222 = HEAPU8[(HEAP32[i209 + 8 >> 2] | 0) + i196 | 0] | 0;
          }
          if (i222 << 16 >> 16 != 173) {
           i140 = 266;
           break;
          }
          if ((HEAP32[(HEAP32[i42 >> 2] | 0) + 88 >> 2] & 6291456 | 0) == 0) {
           i140 = 266;
           break;
          }
          HEAP8[i3] = 1;
          i140 = 266;
         }
        } while (0);
        do {
         if ((i140 | 0) == 266) {
          i140 = 0;
          i138 = HEAP32[i88 >> 2] | 0;
          if ((i138 | 0) == 0) {
           break;
          }
          if ((i138 | 0) == (HEAP32[i197 >> 2] | 0)) {
           break;
          }
          if (!(+HEAPF32[i149 >> 2] == +0 & d154 != +0)) {
           break;
          }
          HEAP32[i197 >> 2] = i138;
          HEAPF32[i149 >> 2] = d154;
         }
        } while (0);
        if ((HEAP8[i63] & 1) != 0) {
         i140 = 274;
         break L76;
        }
        if ((HEAP8[i58] & 1) == 0) {
         i140 = 274;
         break L76;
        }
        if ((HEAP8[i54] & 1) == 0) {
         i140 = 274;
         break L76;
        }
        if ((i136 & 1) == 0) {
         i140 = 274;
         break L76;
        } else {
         d218 = d147;
        }
       } else {
        d218 = d147;
       }
      } while (0);
      if (i141) {
       if ((HEAP8[i55] & 1) != 0) {
        i140 = 283;
        break L76;
       }
      }
      if ((HEAP8[i33] & 1) == 0 | i184 ^ 1) {
       d223 = d152;
       i224 = i128;
      } else {
       __ZN7WebCore9LineWidth6commitEv(i40);
       i197 = HEAP32[i27 >> 2] | 0;
       i193 = HEAP32[i62 >> 2] | 0;
       HEAP32[i87 >> 2] = HEAP32[i28 >> 2];
       HEAP32[i88 >> 2] = i197;
       HEAP32[i89 >> 2] = i193;
       d223 = +0;
       i224 = 0;
      }
      do {
       if (i153) {
        i193 = i146 & 65535;
        if ((i193 & 64512 | 0) == 56320) {
         i225 = 1;
         break;
        }
        if ((1 << ((_u_charType(i193) | 0) << 24 >> 24) & 448 | 0) != 0) {
         i225 = 1;
         break;
        }
        i193 = HEAP32[i27 >> 2] | 0;
        i197 = HEAP32[i62 >> 2] | 0;
        HEAP32[i87 >> 2] = HEAP32[i28 >> 2];
        HEAP32[i88 >> 2] = i193;
        HEAP32[i89 >> 2] = i197;
        i225 = i224 | i53;
       } else {
        i225 = 0;
       }
      } while (0);
      if (i184) {
       d155 = i214 ? d44 : +0;
       do {
        if (i214) {
         if (+HEAPF32[i149 >> 2] == +0) {
          d226 = +0;
          break;
         }
         d226 = d44;
        } else {
         d226 = +0;
        }
       } while (0);
       i227 = HEAP32[i27 >> 2] | 0;
       d228 = d155;
       d229 = d226;
      } else {
       i227 = i181;
       d228 = d182;
       d229 = d183;
      }
      if ((HEAP8[i63] & 1) != 0) {
       i186 = i227;
       d187 = d228;
       d188 = d229;
       d189 = d223;
       d190 = d218;
       i191 = i225;
       i192 = i224;
       i140 = 327;
       break;
      }
      if (((HEAP32[(HEAP32[i36 >> 2] | 0) + 44 >> 2] & 7) - 1 | 0) >>> 0 <= 1 >>> 0) {
       i186 = i227;
       d187 = d228;
       d188 = d229;
       d189 = d223;
       d190 = d218;
       i191 = i225;
       i192 = i224;
       i140 = 327;
       break;
      }
      if ((HEAP8[i54] & 1) == 0) {
       i186 = i227;
       d187 = d228;
       d188 = d229;
       d189 = d223;
       d190 = d218;
       i191 = i225;
       i192 = i224;
       i140 = 327;
       break;
      }
      if ((i136 & 1) == 0) {
       i186 = i227;
       d187 = d228;
       d188 = d229;
       d189 = d223;
       d190 = d218;
       i191 = i225;
       i192 = i224;
       i140 = 327;
       break;
      }
      HEAP8[i63] = 1;
      i149 = HEAP32[i99 >> 2] | 0;
      i197 = i149 | 0;
      i193 = i149 + 8 | 0;
      i138 = i149 + 12 | 0;
      i196 = HEAP32[i138 >> 2] | 0;
      if ((HEAP32[i193 >> 2] | 0) >>> 0 > i196 >>> 0) {
       i230 = i196;
       i231 = i149 | 0;
      } else {
       i209 = i196 + 10 | 0;
       if ((HEAP32[i149 + 4 >> 2] | 0) >>> 0 < i209 >>> 0) {
        __ZN3WTF6VectorIN7WebCore14InlineIteratorELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i197, i209);
       }
       i197 = i149 | 0;
       i149 = HEAP32[i197 >> 2] | 0;
       do {
        if ((i149 | 0) != 0) {
         i196 = HEAP32[i193 >> 2] | 0;
         i166 = i149 + (i209 << 4) | 0;
         if ((i196 | 0) == (i209 | 0)) {
          break;
         }
         i150 = i149 + (i196 << 4) | 0;
         while (1) {
          HEAP32[i150 >> 2] = 0;
          HEAP32[i150 + 4 >> 2] = 0;
          HEAP32[i150 + 8 >> 2] = -1;
          HEAP32[i150 + 12 >> 2] = 0;
          i150 = i150 + 16 | 0;
          if ((i150 | 0) == (i166 | 0)) {
           break;
          }
         }
        }
       } while (0);
       HEAP32[i193 >> 2] = i209;
       i230 = HEAP32[i138 >> 2] | 0;
       i231 = i197;
      }
      i149 = HEAP32[i231 >> 2] | 0;
      HEAP32[i138 >> 2] = i230 + 1;
      i166 = i149 + (i230 << 4) | 0;
      HEAP32[i166 >> 2] = HEAP32[i100 >> 2];
      HEAP32[i166 + 4 >> 2] = HEAP32[i100 + 4 >> 2];
      HEAP32[i166 + 8 >> 2] = HEAP32[i100 + 8 >> 2];
      HEAP32[i166 + 12 >> 2] = HEAP32[i100 + 12 >> 2];
      i166 = HEAP32[i99 >> 2] | 0;
      HEAP32[i102 >> 2] = 0;
      HEAP32[i103 >> 2] = 0;
      HEAP32[i104 >> 2] = -1;
      HEAP32[i105 >> 2] = 0;
      __ZN7WebCore15TrailingObjects31updateMidpointsForTrailingBoxesERNS_13MidpointStateINS_14InlineIteratorEEERKS2_NS0_23CollapseFirstSpaceOrNotE(i101, i166, i24, 0);
      i186 = i227;
      d187 = d228;
      d188 = d229;
      d189 = d223;
      d190 = d218;
      i191 = i225;
      i192 = i224;
      i140 = 327;
     }
    } while (0);
    if ((i140 | 0) == 327) {
     i140 = 0;
     do {
      if (i32) {
       i141 = HEAP32[i27 >> 2] | 0;
       if ((i141 | 0) == 0) {
        break;
       }
       if (!(__ZNK7WebCore19RenderSVGInlineText27characterStartsNewTextChunkEi(i112, i141) | 0)) {
        break;
       }
       __ZN7WebCore26ensureCharacterGetsLineBoxERNS_13MidpointStateINS_14InlineIteratorEEERS1_(HEAP32[i99 >> 2] | 0, i26);
      }
     } while (0);
     do {
      if ((HEAP8[i54] & 1) != 0) {
       if ((i136 & 1) != 0) {
        break;
       }
       HEAP32[i116 >> 2] = HEAP32[i28 >> 2];
       HEAP32[i117 >> 2] = HEAP32[i27 >> 2];
       i141 = HEAP32[i118 >> 2] | 0;
       if ((i141 | 0) == 0) {
        break;
       }
       if ((HEAP32[i141 + 20 >> 2] & 4096 | 0) == 0) {
        break;
       }
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i141 >> 2] | 0) + 620 >> 2] & 1](i141) | 0) {
        break;
       }
       i141 = (HEAP32[(HEAP32[i96 >> 2] | 0) + 40 >> 2] | 0) >>> 13 & 15;
       if (!((i141 | 0) == 1 | (i141 | 0) == 5)) {
        break;
       }
       HEAP32[i117 >> 2] = (HEAP32[i117 >> 2] | 0) - 1;
       if ((HEAP32[i27 >> 2] | 0) != ((HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] | 0) - 1 | 0)) {
        break;
       }
       i141 = HEAP32[i99 >> 2] | 0;
       i166 = i141 | 0;
       i149 = i141 + 8 | 0;
       i150 = i141 + 12 | 0;
       i196 = HEAP32[i150 >> 2] | 0;
       if ((HEAP32[i149 >> 2] | 0) >>> 0 > i196 >>> 0) {
        i232 = i196;
        i233 = i141 | 0;
       } else {
        i198 = i196 + 10 | 0;
        if ((HEAP32[i141 + 4 >> 2] | 0) >>> 0 < i198 >>> 0) {
         __ZN3WTF6VectorIN7WebCore14InlineIteratorELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i166, i198);
        }
        i166 = i141 | 0;
        i141 = HEAP32[i166 >> 2] | 0;
        do {
         if ((i141 | 0) != 0) {
          i196 = HEAP32[i149 >> 2] | 0;
          i159 = i141 + (i198 << 4) | 0;
          if ((i196 | 0) == (i198 | 0)) {
           break;
          }
          i162 = i141 + (i196 << 4) | 0;
          while (1) {
           HEAP32[i162 >> 2] = 0;
           HEAP32[i162 + 4 >> 2] = 0;
           HEAP32[i162 + 8 >> 2] = -1;
           HEAP32[i162 + 12 >> 2] = 0;
           i162 = i162 + 16 | 0;
           if ((i162 | 0) == (i159 | 0)) {
            break;
           }
          }
         }
        } while (0);
        HEAP32[i149 >> 2] = i198;
        i232 = HEAP32[i150 >> 2] | 0;
        i233 = i166;
       }
       i141 = HEAP32[i233 >> 2] | 0;
       HEAP32[i150 >> 2] = i232 + 1;
       i138 = i141 + (i232 << 4) | 0;
       HEAP32[i138 >> 2] = HEAP32[i100 >> 2];
       HEAP32[i138 + 4 >> 2] = HEAP32[i100 + 4 >> 2];
       HEAP32[i138 + 8 >> 2] = HEAP32[i100 + 8 >> 2];
       HEAP32[i138 + 12 >> 2] = HEAP32[i100 + 12 >> 2];
      }
     } while (0);
     do {
      if (!((HEAP8[i56] & 1) != 0 | i137)) {
       if ((HEAP8[i33] & 1) == 0) {
        break;
       }
       i136 = HEAP32[i36 >> 2] | 0;
       if ((HEAP32[i136 + 44 >> 2] & 7 | 0) != 2) {
        if ((HEAP32[(HEAP32[i136 + 24 >> 2] | 0) + 88 >> 2] & 7168 | 0) != 4096) {
         break;
        }
       }
       i136 = HEAP32[i27 >> 2] | 0;
       i138 = HEAP32[i62 >> 2] | 0;
       HEAP32[i87 >> 2] = HEAP32[i28 >> 2];
       HEAP32[i88 >> 2] = i136;
       HEAP32[i89 >> 2] = i138;
      }
     } while (0);
     do {
      if ((HEAP8[i58] & 1) == 0) {
       i140 = 357;
      } else {
       if ((HEAP8[i54] & 1) == 0) {
        i140 = 357;
        break;
       }
       if ((HEAP8[i63] & 1) != 0) {
        i140 = 357;
        break;
       }
       HEAP32[i113 >> 2] = HEAP32[i28 >> 2];
      }
     } while (0);
     do {
      if ((i140 | 0) == 357) {
       i140 = 0;
       if (((HEAP32[(HEAP32[i36 >> 2] | 0) + 44 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0) {
        if ((HEAP8[i54] & 1) != 0) {
         break;
        }
       }
       HEAP32[i113 >> 2] = 0;
       HEAP32[i114 >> 2] = 0;
      }
     } while (0);
     HEAP8[i115] = 0;
     i199 = i186;
     d200 = d187;
     d201 = d188;
     d202 = d189;
     d203 = d190;
     i204 = i191;
     i205 = i192;
    }
    i137 = (HEAP32[i27 >> 2] | 0) + 1 | 0;
    HEAP32[i27 >> 2] = i137;
    if (i137 >>> 0 < (HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
     i127 = i146;
     d46 = d154;
     i128 = i205;
     i129 = i204;
     d130 = d203;
     d131 = d202;
     d132 = d201;
     d133 = d200;
     i134 = i199;
     i135 = i137;
    } else {
     i140 = 362;
     break;
    }
   }
   if ((i140 | 0) == 165) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i140 | 0) == 235) {
    HEAP8[i1 + 157 | 0] = 1;
    i234 = 0;
    break;
   } else if ((i140 | 0) == 274) {
    HEAP8[i1 + 157 | 0] = 1;
    i234 = 0;
    break;
   } else if ((i140 | 0) == 283) {
    do {
     if (!i180) {
      if ((HEAP32[i27 >> 2] | 0) == 0) {
       break;
      }
      __ZN7WebCore26ensureCharacterGetsLineBoxERNS_13MidpointStateINS_14InlineIteratorEEERS1_(HEAP32[i99 >> 2] | 0, i26);
     }
    } while (0);
    i99 = HEAP32[i28 >> 2] | 0;
    i135 = HEAP32[i27 >> 2] | 0;
    i134 = HEAP32[i62 >> 2] | 0;
    HEAP32[i87 >> 2] = i99;
    HEAP32[i88 >> 2] = i135;
    HEAP32[i89 >> 2] = i134;
    do {
     if ((i99 | 0) != 0) {
      if ((HEAP32[i99 + 20 >> 2] & 768 | 0) == 256) {
       i134 = i135 + 1 | 0;
       HEAP32[i88 >> 2] = i134;
       if (i134 >>> 0 < (HEAP32[(HEAP32[i99 + 44 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
        break;
       }
      }
      HEAP32[i87 >> 2] = __ZN7WebCoreL28bidiNextSkippingEmptyInlinesINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_(HEAP32[i98 >> 2] | 0, i99, 0) | 0;
      HEAP32[i88 >> 2] = 0;
      HEAP32[i89 >> 2] = -1;
     }
    } while (0);
    HEAP8[(HEAP32[i39 >> 2] | 0) + 3 | 0] = 1;
    i234 = 1;
    break;
   } else if ((i140 | 0) == 362) {
    i235 = i146;
    i236 = i127;
    d237 = d201;
    d238 = d200;
    i239 = i199;
    i240 = HEAP32[i49 >> 2] | 0;
    i241 = i64;
    i242 = i65;
    i140 = 363;
    break;
   }
  } else {
   i235 = i52;
   i236 = HEAP16[i22 + 20 >> 1] | 0;
   d237 = +0;
   d238 = +0;
   i239 = i35;
   i240 = i22;
   i241 = i2 + 8 | 0;
   i242 = i2 + 4 | 0;
   i140 = 363;
  }
 } while (0);
 do {
  if ((i140 | 0) == 363) {
   HEAP16[i240 + 20 >> 1] = i236;
   HEAP16[i240 + 22 >> 1] = i235;
   i22 = (HEAP32[i241 >> 2] | 0) + 1 | 0;
   i35 = HEAP32[i242 >> 2] | 0;
   if (i35 >>> 0 < i22 >>> 0) {
    i52 = i35 + 1 + (i35 >>> 2) | 0;
    i35 = i52 >>> 0 > 16 >>> 0 ? i52 : 16;
    __ZN3WTF6VectorIN7WebCore15WordMeasurementELj64ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i35 >>> 0 > i22 >>> 0 ? i35 : i22);
   }
   i35 = i2 | 0;
   i52 = HEAP32[i35 >> 2] | 0;
   do {
    if ((i52 | 0) != 0) {
     i49 = HEAP32[i241 >> 2] | 0;
     i199 = i52 + (i22 * 36 & -1) | 0;
     if ((i49 | 0) == (i22 | 0)) {
      break;
     }
     i146 = i52 + (i49 * 36 & -1) | 0;
     while (1) {
      _memset(i146 | 0, 0, 36) | 0;
      i146 = i146 + 36 | 0;
      if ((i146 | 0) == (i199 | 0)) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i241 >> 2] = i22;
   i52 = _llvm_uadd_with_overflow_i32(i22 | 0, -1 | 0) | 0;
   if (!tempRet0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
   i65 = i52;
   i52 = HEAP32[i35 >> 2] | 0;
   HEAP32[i52 + (i65 * 36 & -1) >> 2] = i30;
   i64 = i1 + 146 | 0;
   L510 : do {
    if ((HEAP8[i64] & 1) == 0) {
     i127 = (HEAP32[i27 >> 2] | 0) - i239 | 0;
     d200 = +HEAPF32[i1 + 96 >> 2] + +HEAPF32[i45 >> 2];
     i199 = HEAP8[i1 + 154 | 0] & 1;
     i146 = i52 + (i65 * 36 & -1) + 16 | 0;
     i49 = HEAP32[(HEAP32[i34 >> 2] | 0) + 36 >> 2] | 0;
     _memset(i7 | 0, 0, 17) | 0;
     do {
      if (!i38) {
       if ((i239 | 0) == 0) {
        if ((i127 | 0) == (HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] | 0)) {
         break;
        }
       }
       if ((HEAP32[(HEAP32[i49 + 20 >> 2] | 0) + 296 >> 2] & 128 | 0) != 0) {
        break;
       }
       if (!i31) {
        d243 = +__ZN7WebCore4Font5widthERNS_10TextLayoutEjjPN3WTF7HashSetIPKNS_14SimpleFontDataENS3_7PtrHashIS7_EENS3_10HashTraitsIS7_EEEE(i19, i239, i127, i146);
        break L510;
       }
       __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKNS_10RenderTextEjjRKNS_11RenderStyleEj(i8, i29, i37, i30, i239, i127, i49, 1);
       HEAP32[i8 + 4 >> 2] = (HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] | 0) - i239;
       i39 = i8 + 24 | 0;
       i26 = ((HEAP8[i30 + 25 | 0] & 1 ^ 1) & 255) << 6 | HEAP32[i39 >> 2] & -65;
       HEAP32[i39 >> 2] = i26;
       i180 = HEAP32[(HEAP32[i49 + 24 >> 2] | 0) + 124 >> 2] | 0;
       HEAP32[i39 >> 2] = i26 & -9 | ((i199 ^ 1) & 255) << 3;
       HEAP32[i8 + 28 >> 2] = i180;
       HEAPF32[i8 + 12 >> 2] = d200;
       d201 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i37, i8, i146, i7);
       i180 = HEAP32[i8 + 32 >> 2] | 0;
       if ((i180 | 0) == 0) {
        d243 = d201;
        break L510;
       }
       i26 = i180 + 4 | 0;
       i180 = i26 | 0;
       i39 = (HEAP32[i180 >> 2] | 0) - 1 | 0;
       if ((i39 | 0) != 0) {
        HEAP32[i180 >> 2] = i39;
        d243 = d201;
        break L510;
       }
       i39 = i26 - 4 | 0;
       if ((i39 | 0) == 0) {
        d243 = d201;
        break L510;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i39 >> 2] | 0) + 4 >> 2] & 1](i39);
       d243 = d201;
       break L510;
      }
     } while (0);
     d243 = +FUNCTION_TABLE_fiiiifii[HEAP32[(HEAP32[i29 >> 2] | 0) + 632 >> 2] & 1](i30, i239, i127, i37, d200, i146, i7);
    } else {
     d243 = +0;
    }
   } while (0);
   HEAP32[i52 + (i65 * 36 & -1) + 8 >> 2] = i239;
   HEAP32[i52 + (i65 * 36 & -1) + 12 >> 2] = HEAP32[i27 >> 2];
   if ((HEAP8[i64] & 1) == 0) {
    d244 = d237 + d243;
   } else {
    d244 = +0;
   }
   HEAPF32[i52 + (i65 * 36 & -1) + 4 >> 2] = d244;
   d201 = d238 + d243;
   i35 = i1 + 150 | 0;
   __ZN7WebCore18inlineLogicalWidthEPNS_12RenderObjectEbb(i25, HEAP32[i28 >> 2] | 0, (HEAP8[i47] & 1) == 0, (HEAP8[i35] & 1) != 0);
   d202 = +(HEAP32[i25 >> 2] | 0);
   HEAPF32[i45 >> 2] = +HEAPF32[i45 >> 2] + (d201 + d202);
   i22 = i52 + (i65 * 36 & -1) + 28 | 0;
   do {
    if ((HEAP32[i22 >> 2] | 0) == 0) {
     i199 = i21 + 12 | 0;
     if ((HEAP32[i199 >> 2] | 0) == 0) {
      break;
     }
     i49 = i52 + (i65 * 36 & -1) + 16 | 0;
     i39 = HEAP32[i49 >> 2] | 0;
     i26 = i21 | 0;
     HEAP32[i49 >> 2] = HEAP32[i26 >> 2];
     HEAP32[i26 >> 2] = i39;
     i39 = i52 + (i65 * 36 & -1) + 20 | 0;
     i26 = HEAP32[i39 >> 2] | 0;
     i49 = i21 + 4 | 0;
     HEAP32[i39 >> 2] = HEAP32[i49 >> 2];
     HEAP32[i49 >> 2] = i26;
     i26 = i52 + (i65 * 36 & -1) + 24 | 0;
     i49 = HEAP32[i26 >> 2] | 0;
     i39 = i21 + 8 | 0;
     HEAP32[i26 >> 2] = HEAP32[i39 >> 2];
     HEAP32[i39 >> 2] = i49;
     i49 = HEAP32[i22 >> 2] | 0;
     HEAP32[i22 >> 2] = HEAP32[i199 >> 2];
     HEAP32[i199 >> 2] = i49;
     i49 = i52 + (i65 * 36 & -1) + 32 | 0;
     i199 = HEAP32[i49 >> 2] | 0;
     i39 = i21 + 16 | 0;
     HEAP32[i49 >> 2] = HEAP32[i39 >> 2];
     HEAP32[i39 >> 2] = i199;
    }
   } while (0);
   i65 = HEAP32[i21 >> 2] | 0;
   if ((i65 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(i65);
    _memset(i18 | 0, 0, 16) | 0;
   }
   i65 = i1 + 154 | 0;
   do {
    if ((HEAP8[i65] & 1) != 0) {
     if (!((HEAP8[i1 + 147 | 0] & 1) != 0 & d201 != +0)) {
      break;
     }
     __ZN7WebCore9LineWidth26setTrailingWhitespaceWidthEff(i40, d201, d202);
    }
   } while (0);
   HEAP8[i35] = 0;
   if (__ZNK7WebCore9LineWidth10fitsOnLineEb(i40, 0) | 0) {
    i234 = 0;
    break;
   }
   if (i43) {
    i52 = HEAP32[i42 >> 2] | 0;
    __ZN7WebCore14tryHyphenatingEPNS_10RenderTextERKNS_4FontERKN3WTF12AtomicStringEjiiijjfibbiRNS_14InlineIteratorEiRb(i30, i37, i52 + 108 | 0, HEAP32[i4 >> 2] | 0, HEAP16[(HEAP32[(HEAP32[i1 + 72 >> 2] | 0) + 24 >> 2] | 0) + 104 >> 1] | 0, HEAP16[i52 + 100 >> 1] | 0, HEAP16[i52 + 102 >> 1] | 0, i239, HEAP32[i27 >> 2] | 0, +HEAPF32[i1 + 96 >> 2] + +HEAPF32[i45 >> 2] - d201, ~~+HEAPF32[i1 + 120 >> 2], 0, (HEAP8[i65] & 1) != 0, ~~d238, i1 + 24 | 0, HEAP32[i1 + 16 >> 2] | 0, (HEAP32[i1 >> 2] | 0) + 4 | 0);
   }
   if ((HEAP8[i3] & 1) != 0) {
    i234 = 0;
    break;
   }
   i52 = HEAP32[i1 + 36 >> 2] | 0;
   if ((i52 | 0) == 0) {
    i234 = 0;
    break;
   }
   i22 = i52 - 1 | 0;
   i52 = HEAP32[i1 + 28 >> 2] | 0;
   if ((i52 | 0) == 0) {
    i234 = 0;
    break;
   }
   if ((HEAP32[i52 + 20 >> 2] & 768 | 0) != 256) {
    i234 = 0;
    break;
   }
   i64 = HEAP32[i52 + 44 >> 2] | 0;
   if ((HEAP32[i64 + 4 >> 2] | 0) >>> 0 <= i22 >>> 0) {
    i234 = 0;
    break;
   }
   if ((HEAP32[i64 + 16 >> 2] & 32 | 0) == 0) {
    i245 = HEAP16[(HEAP32[i64 + 8 >> 2] | 0) + (i22 << 1) >> 1] | 0;
   } else {
    i245 = HEAPU8[(HEAP32[i64 + 8 >> 2] | 0) + i22 | 0] | 0;
   }
   if (i245 << 16 >> 16 != 173) {
    i234 = 0;
    break;
   }
   if ((HEAP32[(HEAP32[i42 >> 2] | 0) + 88 >> 2] & 6291456 | 0) == 0) {
    i234 = 0;
    break;
   }
   HEAP8[i3] = 1;
   HEAP8[i1 + 157 | 0] = 1;
   i234 = 0;
  }
 } while (0);
 i1 = HEAP32[i21 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return i234 | 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i5;
 return i234 | 0;
}
function __ZN7WebCore11LineBreaker13nextLineBreakERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERNS_8LineInfoERNS_14RenderTextInfoEPNS_14FloatingObjectEjRN3WTF6VectorINS_15WordMeasurementELj64ENSC_15CrashOnOverflowEEE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i10 = i9 | 0;
 i11 = i9 + 16 | 0;
 i12 = i9 + 32 | 0;
 i13 = i9 + 48 | 0;
 i14 = i9 + 64 | 0;
 i15 = i9 + 80 | 0;
 i16 = i9 + 96 | 0;
 i17 = i9 + 120 | 0;
 i18 = i9 + 144 | 0;
 i19 = __ZNK7WebCore11RenderBlock21layoutShapeInsideInfoEv(HEAP32[i2 >> 2] | 0) | 0;
 do {
  if ((i19 | 0) != 0) {
   i20 = i19 | 0;
   i21 = __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE13computedShapeEv(i20) | 0;
   i22 = i19 + 4 | 0;
   i23 = HEAP32[i22 >> 2] | 0;
   i24 = i19 + 8 | 0;
   i25 = HEAP32[i24 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 12 >> 2] & 1](i11, i21);
   if ((HEAP32[i11 + 8 >> 2] | 0) < 1) {
    break;
   }
   i21 = HEAP32[i11 + 12 >> 2] | 0;
   if ((i21 | 0) < 1) {
    break;
   }
   i26 = HEAP32[i11 + 4 >> 2] | 0;
   if ((i23 | 0) < (i26 + i21 | 0)) {
    if ((i25 + i23 | 0) <= (i26 | 0)) {
     i27 = 6;
    }
   } else {
    i27 = 6;
   }
   if ((i27 | 0) == 6) {
    if (!((i25 | 0) == 0 & (i23 | 0) == (i26 | 0))) {
     break;
    }
   }
   i26 = i3 | 0;
   i23 = i12;
   i25 = i3;
   HEAP32[i23 >> 2] = HEAP32[i25 >> 2];
   HEAP32[i23 + 4 >> 2] = HEAP32[i25 + 4 >> 2];
   HEAP32[i23 + 8 >> 2] = HEAP32[i25 + 8 >> 2];
   HEAP32[i23 + 12 >> 2] = HEAP32[i25 + 12 >> 2];
   i21 = i13;
   HEAP32[i21 >> 2] = HEAP32[i25 >> 2];
   HEAP32[i21 + 4 >> 2] = HEAP32[i25 + 4 >> 2];
   HEAP32[i21 + 8 >> 2] = HEAP32[i25 + 8 >> 2];
   HEAP32[i21 + 12 >> 2] = HEAP32[i25 + 12 >> 2];
   i28 = __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE13computedShapeEv(i20) | 0;
   i20 = HEAP32[i22 >> 2] | 0;
   i22 = HEAP32[i24 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i28 >> 2] | 0) + 12 >> 2] & 1](i10, i28);
   do {
    if ((HEAP32[i10 + 8 >> 2] | 0) >= 1) {
     i28 = HEAP32[i10 + 12 >> 2] | 0;
     if ((i28 | 0) < 1) {
      break;
     }
     i24 = HEAP32[i10 + 4 >> 2] | 0;
     if ((i20 | 0) < (i24 + i28 | 0)) {
      if ((i22 + i20 | 0) <= (i24 | 0)) {
       i27 = 12;
      }
     } else {
      i27 = 12;
     }
     if ((i27 | 0) == 12) {
      if (!((i22 | 0) == 0 & (i20 | 0) == (i24 | 0))) {
       break;
      }
     }
     i24 = i19 + 52 | 0;
     if ((HEAP32[i24 >> 2] | 0) == 0) {
      break;
     }
     i28 = i19 + 28 | 0;
     i29 = i12 + 4 | 0;
     i30 = i15;
     i31 = i3 + 4 | 0;
     i32 = i3 + 12 | 0;
     i33 = i12 + 12 | 0;
     i34 = i19 + 36 | 0;
     i35 = i19 + 32 | 0;
     i36 = i28 | 0;
     i37 = i17;
     i38 = i17;
     i39 = i18;
     i40 = i3 + 164 | 0;
     i41 = i4 + 3 | 0;
     i42 = i12 | 0;
     i43 = i18;
     i44 = 1;
     while (1) {
      if ((HEAP32[i29 >> 2] | 0) == 0) {
       break;
      }
      HEAP32[i30 >> 2] = HEAP32[i25 >> 2];
      HEAP32[i30 + 4 >> 2] = HEAP32[i25 + 4 >> 2];
      HEAP32[i30 + 8 >> 2] = HEAP32[i25 + 8 >> 2];
      HEAP32[i30 + 12 >> 2] = HEAP32[i25 + 12 >> 2];
      __ZN7WebCore11LineBreaker16nextSegmentBreakERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERNS_8LineInfoERNS_14RenderTextInfoEPNS_14FloatingObjectEjRN3WTF6VectorINS_15WordMeasurementELj64ENSC_15CrashOnOverflowEEE(i12, i2, i3, i4, i5, i6, i7, i8);
      i45 = HEAP32[i31 >> 2] | 0;
      if ((i45 | 0) == 0) {
       i27 = 18;
       break;
      }
      do {
       if ((HEAP32[i32 >> 2] | 0) == (HEAP32[i33 >> 2] | 0)) {
        if ((i45 | 0) != (HEAP32[i29 >> 2] | 0)) {
         i27 = 35;
         break;
        }
        HEAP32[i23 >> 2] = HEAP32[i30 >> 2];
        HEAP32[i23 + 4 >> 2] = HEAP32[i30 + 4 >> 2];
        HEAP32[i23 + 8 >> 2] = HEAP32[i30 + 8 >> 2];
        HEAP32[i23 + 12 >> 2] = HEAP32[i30 + 12 >> 2];
        __ZN7WebCore16LineSegmentRangeC1ERKNS_14InlineIteratorES3_(i17, i15, i15);
        i46 = HEAP32[i34 >> 2] | 0;
        if ((i46 | 0) == (HEAP32[i35 >> 2] | 0)) {
         i47 = i46 + 1 | 0;
         i48 = HEAP32[i36 >> 2] | 0;
         do {
          if (i48 >>> 0 > i17 >>> 0) {
           i27 = 31;
          } else {
           if ((i48 + (i46 * 24 & -1) | 0) >>> 0 <= i17 >>> 0) {
            i27 = 31;
            break;
           }
           __ZN3WTF6VectorIN7WebCore16LineSegmentRangeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i28, i47);
           i49 = HEAP32[i36 >> 2] | 0;
           i50 = i49 + (((i37 - i48 | 0) / 24 & -1) * 24 & -1) | 0;
           i51 = i49;
          }
         } while (0);
         if ((i27 | 0) == 31) {
          i27 = 0;
          __ZN3WTF6VectorIN7WebCore16LineSegmentRangeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i28, i47);
          i50 = i17;
          i51 = HEAP32[i36 >> 2] | 0;
         }
         i48 = i51 + ((HEAP32[i34 >> 2] | 0) * 24 & -1) | 0;
         i49 = i50;
         HEAP32[i48 >> 2] = HEAP32[i49 >> 2];
         HEAP32[i48 + 4 >> 2] = HEAP32[i49 + 4 >> 2];
         HEAP32[i48 + 8 >> 2] = HEAP32[i49 + 8 >> 2];
         HEAP32[i48 + 12 >> 2] = HEAP32[i49 + 12 >> 2];
         HEAP32[i48 + 16 >> 2] = HEAP32[i49 + 16 >> 2];
         HEAP32[i48 + 20 >> 2] = HEAP32[i49 + 20 >> 2];
        } else {
         i49 = (HEAP32[i36 >> 2] | 0) + (i46 * 24 & -1) | 0;
         HEAP32[i49 >> 2] = HEAP32[i38 >> 2];
         HEAP32[i49 + 4 >> 2] = HEAP32[i38 + 4 >> 2];
         HEAP32[i49 + 8 >> 2] = HEAP32[i38 + 8 >> 2];
         HEAP32[i49 + 12 >> 2] = HEAP32[i38 + 12 >> 2];
         HEAP32[i49 + 16 >> 2] = HEAP32[i38 + 16 >> 2];
         HEAP32[i49 + 20 >> 2] = HEAP32[i38 + 20 >> 2];
        }
        HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
        HEAP32[i25 >> 2] = HEAP32[i30 >> 2];
        HEAP32[i25 + 4 >> 2] = HEAP32[i30 + 4 >> 2];
        HEAP32[i25 + 8 >> 2] = HEAP32[i30 + 8 >> 2];
        HEAP32[i25 + 12 >> 2] = HEAP32[i30 + 12 >> 2];
       } else {
        i27 = 35;
       }
      } while (0);
      if ((i27 | 0) == 35) {
       i27 = 0;
       __ZN7WebCore16LineSegmentRangeC1ERKNS_14InlineIteratorES3_(i18, i26, i12);
       i45 = HEAP32[i34 >> 2] | 0;
       if ((i45 | 0) == (HEAP32[i35 >> 2] | 0)) {
        i49 = i45 + 1 | 0;
        i48 = HEAP32[i36 >> 2] | 0;
        do {
         if (i48 >>> 0 > i18 >>> 0) {
          i27 = 39;
         } else {
          if ((i48 + (i45 * 24 & -1) | 0) >>> 0 <= i18 >>> 0) {
           i27 = 39;
           break;
          }
          __ZN3WTF6VectorIN7WebCore16LineSegmentRangeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i28, i49);
          i52 = HEAP32[i36 >> 2] | 0;
          i53 = i52 + (((i39 - i48 | 0) / 24 & -1) * 24 & -1) | 0;
          i54 = i52;
         }
        } while (0);
        if ((i27 | 0) == 39) {
         i27 = 0;
         __ZN3WTF6VectorIN7WebCore16LineSegmentRangeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i28, i49);
         i53 = i18;
         i54 = HEAP32[i36 >> 2] | 0;
        }
        i48 = i54 + ((HEAP32[i34 >> 2] | 0) * 24 & -1) | 0;
        i52 = i53;
        HEAP32[i48 >> 2] = HEAP32[i52 >> 2];
        HEAP32[i48 + 4 >> 2] = HEAP32[i52 + 4 >> 2];
        HEAP32[i48 + 8 >> 2] = HEAP32[i52 + 8 >> 2];
        HEAP32[i48 + 12 >> 2] = HEAP32[i52 + 12 >> 2];
        HEAP32[i48 + 16 >> 2] = HEAP32[i52 + 16 >> 2];
        HEAP32[i48 + 20 >> 2] = HEAP32[i52 + 20 >> 2];
       } else {
        i52 = (HEAP32[i36 >> 2] | 0) + (i45 * 24 & -1) | 0;
        HEAP32[i52 >> 2] = HEAP32[i43 >> 2];
        HEAP32[i52 + 4 >> 2] = HEAP32[i43 + 4 >> 2];
        HEAP32[i52 + 8 >> 2] = HEAP32[i43 + 8 >> 2];
        HEAP32[i52 + 12 >> 2] = HEAP32[i43 + 12 >> 2];
        HEAP32[i52 + 16 >> 2] = HEAP32[i43 + 16 >> 2];
        HEAP32[i52 + 20 >> 2] = HEAP32[i43 + 20 >> 2];
       }
       HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
       i52 = HEAP32[i29 >> 2] | 0;
       L48 : do {
        if ((i52 | 0) == 0) {
         i55 = 0;
        } else {
         i48 = HEAP32[i42 >> 2] | 0;
         i56 = i52;
         i57 = 0;
         while (1) {
          if ((i56 | 0) == (i48 | 0)) {
           i55 = i57;
           break L48;
          }
          do {
           if ((HEAP32[i56 + 20 >> 2] & 768 | 0) == 256) {
            i58 = 0;
           } else {
            if ((HEAP32[i56 + 24 >> 2] & 4 | 0) == 0) {
             i58 = 0;
             break;
            }
            i58 = (((HEAP32[(HEAP32[i56 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 28 & 7) - 3 | 0) >>> 0 < 3 >>> 0 | 0;
           }
          } while (0);
          i59 = i58 + i57 | 0;
          i60 = HEAP32[i56 + 8 >> 2] | 0;
          if ((i60 | 0) == 0) {
           i55 = i59;
           break;
          } else {
           i56 = i60 | 0;
           i57 = i59;
          }
         }
        }
       } while (0);
       HEAP32[i25 >> 2] = HEAP32[i23 >> 2];
       HEAP32[i25 + 4 >> 2] = HEAP32[i23 + 4 >> 2];
       HEAP32[i25 + 8 >> 2] = HEAP32[i23 + 8 >> 2];
       HEAP32[i25 + 12 >> 2] = HEAP32[i23 + 12 >> 2];
       HEAP32[i40 >> 2] = i55;
       if ((HEAP8[i41] & 1) != 0) {
        break;
       }
      }
      if (i44 >>> 0 >= (HEAP32[i24 >> 2] | 0) >>> 0) {
       break;
      }
      i44 = i44 + 1 | 0;
     }
     do {
      if ((i27 | 0) == 18) {
       __ZN7WebCore16LineSegmentRangeC1ERKNS_14InlineIteratorES3_(i16, i15, i12);
       i44 = HEAP32[i34 >> 2] | 0;
       if ((i44 | 0) != (HEAP32[i35 >> 2] | 0)) {
        i24 = (HEAP32[i36 >> 2] | 0) + (i44 * 24 & -1) | 0;
        i41 = i16;
        HEAP32[i24 >> 2] = HEAP32[i41 >> 2];
        HEAP32[i24 + 4 >> 2] = HEAP32[i41 + 4 >> 2];
        HEAP32[i24 + 8 >> 2] = HEAP32[i41 + 8 >> 2];
        HEAP32[i24 + 12 >> 2] = HEAP32[i41 + 12 >> 2];
        HEAP32[i24 + 16 >> 2] = HEAP32[i41 + 16 >> 2];
        HEAP32[i24 + 20 >> 2] = HEAP32[i41 + 20 >> 2];
        HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
        break;
       }
       i41 = i44 + 1 | 0;
       i24 = HEAP32[i36 >> 2] | 0;
       do {
        if (i24 >>> 0 > i16 >>> 0) {
         i27 = 22;
        } else {
         if ((i24 + (i44 * 24 & -1) | 0) >>> 0 <= i16 >>> 0) {
          i27 = 22;
          break;
         }
         __ZN3WTF6VectorIN7WebCore16LineSegmentRangeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i28, i41);
         i40 = HEAP32[i36 >> 2] | 0;
         i61 = i40 + (((i16 - i24 | 0) / 24 & -1) * 24 & -1) | 0;
         i62 = i40;
        }
       } while (0);
       if ((i27 | 0) == 22) {
        __ZN3WTF6VectorIN7WebCore16LineSegmentRangeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i28, i41);
        i61 = i16;
        i62 = HEAP32[i36 >> 2] | 0;
       }
       i24 = i62 + ((HEAP32[i34 >> 2] | 0) * 24 & -1) | 0;
       i44 = i61;
       HEAP32[i24 >> 2] = HEAP32[i44 >> 2];
       HEAP32[i24 + 4 >> 2] = HEAP32[i44 + 4 >> 2];
       HEAP32[i24 + 8 >> 2] = HEAP32[i44 + 8 >> 2];
       HEAP32[i24 + 12 >> 2] = HEAP32[i44 + 12 >> 2];
       HEAP32[i24 + 16 >> 2] = HEAP32[i44 + 16 >> 2];
       HEAP32[i24 + 20 >> 2] = HEAP32[i44 + 20 >> 2];
       HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
      }
     } while (0);
     HEAP32[i25 >> 2] = HEAP32[i21 >> 2];
     HEAP32[i25 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
     HEAP32[i25 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
     HEAP32[i25 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
     i34 = i1;
     HEAP32[i34 >> 2] = HEAP32[i23 >> 2];
     HEAP32[i34 + 4 >> 2] = HEAP32[i23 + 4 >> 2];
     HEAP32[i34 + 8 >> 2] = HEAP32[i23 + 8 >> 2];
     HEAP32[i34 + 12 >> 2] = HEAP32[i23 + 12 >> 2];
     STACKTOP = i9;
     return;
    }
   } while (0);
   __ZN7WebCore11LineBreaker16nextSegmentBreakERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERNS_8LineInfoERNS_14RenderTextInfoEPNS_14FloatingObjectEjRN3WTF6VectorINS_15WordMeasurementELj64ENSC_15CrashOnOverflowEEE(i14, i2, i3, i4, i5, i6, i7, i8);
   i26 = i14;
   HEAP32[i23 >> 2] = HEAP32[i26 >> 2];
   HEAP32[i23 + 4 >> 2] = HEAP32[i26 + 4 >> 2];
   HEAP32[i23 + 8 >> 2] = HEAP32[i26 + 8 >> 2];
   HEAP32[i23 + 12 >> 2] = HEAP32[i26 + 12 >> 2];
   HEAP32[i25 >> 2] = HEAP32[i21 >> 2];
   HEAP32[i25 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
   HEAP32[i25 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
   HEAP32[i25 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
   i26 = i1;
   HEAP32[i26 >> 2] = HEAP32[i21 >> 2];
   HEAP32[i26 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
   HEAP32[i26 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
   HEAP32[i26 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
   STACKTOP = i9;
   return;
  }
 } while (0);
 __ZN7WebCore11LineBreaker16nextSegmentBreakERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERNS_8LineInfoERNS_14RenderTextInfoEPNS_14FloatingObjectEjRN3WTF6VectorINS_15WordMeasurementELj64ENSC_15CrashOnOverflowEEE(i1, i2, i3, i4, i5, i6, i7, i8);
 STACKTOP = i9;
 return;
}
function __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if ((HEAP8[i1 + 120 | 0] & 1) != 0) {
  i4 = i1 + 80 | 0;
  HEAP32[i4 >> 2] = 10;
  i5 = i1 + 64 | 0;
  HEAP32[i5 >> 2] = 10;
  STACKTOP = i2;
  return;
 }
 i6 = i1 + 32 | 0;
 i7 = i1 + 36 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i4 = i1 + 80 | 0;
  HEAP32[i4 >> 2] = 10;
  i5 = i1 + 64 | 0;
  HEAP32[i5 >> 2] = 10;
  STACKTOP = i2;
  return;
 }
 i9 = i1 + 100 | 0;
 if ((HEAP8[i9] & 1) != 0) {
  i4 = i1 + 80 | 0;
  HEAP32[i4 >> 2] = 10;
  i5 = i1 + 64 | 0;
  HEAP32[i5 >> 2] = 10;
  STACKTOP = i2;
  return;
 }
 i10 = i1 + 16 | 0;
 i11 = HEAP32[i1 + 20 >> 2] | 0;
 L10 : do {
  if ((i11 | 0) == 0) {
   HEAP32[i3 >> 2] = 0;
   HEAP8[i3 + 4 | 0] = 0;
  } else {
   i12 = HEAP32[i10 >> 2] | 0;
   i13 = i11;
   i14 = 0;
   while (1) {
    if ((i13 | 0) == (i12 | 0)) {
     i15 = i14;
     break;
    }
    do {
     if ((HEAP32[i13 + 20 >> 2] & 768 | 0) == 256) {
      i16 = 0;
     } else {
      if ((HEAP32[i13 + 24 >> 2] & 4 | 0) == 0) {
       i16 = 0;
       break;
      }
      i16 = (((HEAP32[(HEAP32[i13 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 28 & 7) - 3 | 0) >>> 0 < 3 >>> 0 | 0;
     }
    } while (0);
    i17 = i16 + i14 | 0;
    i18 = HEAP32[i13 + 8 >> 2] | 0;
    if ((i18 | 0) == 0) {
     i15 = i17;
     break;
    } else {
     i13 = i18 | 0;
     i14 = i17;
    }
   }
   i14 = i3 | 0;
   HEAP32[i14 >> 2] = i15;
   i13 = i3 + 4 | 0;
   HEAP8[i13] = 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i12 = i1 + 88 | 0;
   i17 = i1 + 124 | 0;
   i18 = i10 | 0;
   i19 = i11;
   i20 = HEAP32[i1 + 28 >> 2] | 0;
   i21 = i8;
   while (1) {
    if ((i19 | 0) == (i21 | 0)) {
     i22 = 48;
     break;
    }
    if ((i19 | 0) == (HEAP32[i12 >> 2] | 0)) {
     i23 = -1;
     break;
    }
    if ((HEAP32[i14 >> 2] | 0) == 0) {
     __ZN7WebCore15RenderBlockFlow19appendRunsForObjectERNS_11BidiRunListINS_7BidiRunEEEiiPNS_12RenderObjectERNS_12BidiResolverINS_14InlineIteratorES2_EE(i17, i20, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 524 >> 2] & 1](i19) | 0, i19, i1);
    } else {
     __ZN7WebCore14IsolateTracker21addFakeRunIfNecessaryERNS_12RenderObjectEjRNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEE(i3, i19, i20, i1);
    }
    if ((i19 | 0) == 0) {
     break L10;
    }
    i24 = HEAP32[i18 >> 2] | 0;
    i25 = i19;
    while (1) {
     i26 = HEAP32[i25 + 20 >> 2] | 0;
     do {
      if ((i26 & 768 | 0) == 256 | (i26 & 4096 | 0) != 0) {
       i22 = 30;
      } else {
       if ((i26 & 64 | 0) != 0 | (i26 & 25165824 | 0) == 16777216 | (i26 & 2048 | 0) != 0) {
        i22 = 30;
        break;
       }
       i27 = HEAP32[i25 + 28 >> 2] | 0;
       i28 = i27;
       if ((i27 | 0) == 0) {
        i22 = 30;
        break;
       }
       if ((HEAP32[i27 + 20 >> 2] & 768 | 0) == 256) {
        i29 = i28;
        break;
       }
       if ((HEAP32[i27 + 24 >> 2] & 4 | 0) == 0) {
        i29 = i28;
        break;
       }
       i30 = (HEAP32[(HEAP32[i27 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 28 & 7;
       if (!((i30 | 0) != 0 & (i30 - 3 | 0) >>> 0 < 3 >>> 0)) {
        i29 = i28;
        break;
       }
       HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
       i29 = i28;
      }
     } while (0);
     do {
      if ((i22 | 0) == 30) {
       i22 = 0;
       if ((i25 | 0) == 0) {
        break L10;
       } else {
        i31 = i25;
       }
       while (1) {
        if ((i31 | 0) == (i24 | 0)) {
         break L10;
        }
        do {
         if ((HEAP32[i31 + 20 >> 2] & 768 | 0) != 256) {
          if ((HEAP32[i31 + 24 >> 2] & 4 | 0) == 0) {
           break;
          }
          i26 = (HEAP32[(HEAP32[i31 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 28 & 7;
          if (!((i26 | 0) != 0 & (i26 - 3 | 0) >>> 0 < 3 >>> 0)) {
           break;
          }
          i26 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
          HEAP32[i14 >> 2] = i26;
          if ((i26 | 0) != 0) {
           break;
          }
          HEAP8[i13] = 0;
         }
        } while (0);
        i32 = HEAP32[i31 + 16 >> 2] | 0;
        if ((i32 | 0) != 0) {
         break;
        }
        i26 = HEAP32[i31 + 8 >> 2] | 0;
        if ((i26 | 0) == 0) {
         break L10;
        } else {
         i31 = i26 | 0;
        }
       }
       if ((HEAP32[i32 + 20 >> 2] & 768 | 0) == 256) {
        i29 = i32;
        break;
       }
       if ((HEAP32[i32 + 24 >> 2] & 4 | 0) == 0) {
        i29 = i32;
        break;
       }
       i26 = (HEAP32[(HEAP32[i32 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 28 & 7;
       if (!((i26 | 0) != 0 & (i26 - 3 | 0) >>> 0 < 3 >>> 0)) {
        i29 = i32;
        break;
       }
       HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
       i29 = i32;
      }
     } while (0);
     i26 = HEAP32[i29 + 20 >> 2] | 0;
     if ((i26 & 768 | 0) == 256 | (i26 & 4096 | 0) != 0) {
      break;
     }
     if ((i26 & 64 | 0) != 0 | (i26 & 25165824 | 0) == 16777216 | (i26 & 2048 | 0) != 0) {
      break;
     }
     if ((HEAP32[i29 + 24 >> 2] & 4 | 0) != 0) {
      if (__ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE(i29) | 0) {
       break;
      }
     }
     if ((i29 | 0) == 0) {
      break L10;
     } else {
      i25 = i29;
     }
    }
    if ((i29 | 0) == 0) {
     break L10;
    }
    i19 = i29;
    i20 = 0;
    i21 = HEAP32[i7 >> 2] | 0;
   }
   if ((i22 | 0) == 48) {
    i23 = HEAP32[i1 + 44 >> 2] | 0;
   }
   do {
    if ((i19 | 0) == (HEAP32[i12 >> 2] | 0)) {
     i21 = HEAP32[i1 + 96 >> 2] | 0;
     if (i21 >>> 0 > i23 >>> 0) {
      i33 = i23;
      break;
     }
     HEAP8[i9] = 1;
     i33 = i21;
    } else {
     i33 = i23;
    }
   } while (0);
   i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 524 >> 2] & 1](i19) | 0;
   if ((HEAP32[i14 >> 2] | 0) == 0) {
    __ZN7WebCore15RenderBlockFlow19appendRunsForObjectERNS_11BidiRunListINS_7BidiRunEEEiiPNS_12RenderObjectERNS_12BidiResolverINS_14InlineIteratorES2_EE(i17, i20, (i12 | 0) == 0 ? 0 : i33 + 1 | 0, i19, i1);
    break;
   } else {
    __ZN7WebCore14IsolateTracker21addFakeRunIfNecessaryERNS_12RenderObjectEjRNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEE(i3, i19, i20, i1);
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i33 = i1 + 44 | 0;
   if ((HEAP32[i3 + 20 >> 2] & 768 | 0) == 256) {
    i23 = (HEAP32[i33 >> 2] | 0) + 1 | 0;
    HEAP32[i33 >> 2] = i23;
    if (i23 >>> 0 < (HEAP32[(HEAP32[i3 + 44 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
     break;
    }
   }
   HEAP32[i7 >> 2] = __ZN7WebCoreL28bidiNextSkippingEmptyInlinesINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_(HEAP32[i6 >> 2] | 0, i3, 0) | 0;
   HEAP32[i33 >> 2] = 0;
   HEAP32[i1 + 40 >> 2] = -1;
  }
 } while (0);
 i3 = i10;
 i10 = i6;
 HEAP32[i3 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 i4 = i1 + 80 | 0;
 HEAP32[i4 >> 2] = 10;
 i5 = i1 + 64 | 0;
 HEAP32[i5 >> 2] = 10;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15BreakingContext15handleEndOfLineEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = __ZNK7WebCore11RenderBlock21layoutShapeInsideInfoEv(HEAP32[i2 + 56 >> 2] | 0) | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = 9;
  } else {
   i7 = __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE13computedShapeEv(i5 | 0) | 0;
   i8 = HEAP32[i5 + 4 >> 2] | 0;
   i9 = HEAP32[i5 + 8 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] & 1](i4, i7);
   if ((HEAP32[i4 + 8 >> 2] | 0) < 1) {
    i6 = 9;
    break;
   }
   i7 = HEAP32[i4 + 12 >> 2] | 0;
   if ((i7 | 0) < 1) {
    i6 = 9;
    break;
   }
   i10 = HEAP32[i4 + 4 >> 2] | 0;
   if ((i8 | 0) < (i10 + i7 | 0)) {
    if ((i9 + i8 | 0) <= (i10 | 0)) {
     i6 = 6;
    }
   } else {
    i6 = 6;
   }
   if ((i6 | 0) == 6) {
    if (!((i9 | 0) == 0 & (i8 | 0) == (i10 | 0))) {
     i6 = 9;
     break;
    }
   }
   if ((HEAP32[i5 + 52 >> 2] | 0) == 0) {
    i6 = 9;
    break;
   }
   i11 = i2 + 24 | 0;
   i12 = i2 + 36 | 0;
  }
 } while (0);
 L11 : do {
  if ((i6 | 0) == 9) {
   i5 = i2 + 24 | 0;
   i4 = i2 + 4 | 0;
   i10 = HEAP32[i4 >> 2] | 0;
   i8 = i2 + 36 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) == (HEAP32[i10 + 12 >> 2] | 0)) {
     i7 = i2 + 28 | 0;
     i13 = HEAP32[i7 >> 2] | 0;
     if ((i13 | 0) != (HEAP32[i10 + 4 >> 2] | 0)) {
      break;
     }
     do {
      if ((i13 | 0) == 0) {
       i6 = 14;
      } else {
       if ((HEAP32[i13 + 20 >> 2] & 4096 | 0) == 0) {
        i6 = 14;
        break;
       }
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 620 >> 2] & 1](i13) | 0) {
        i6 = 14;
       }
      }
     } while (0);
     L19 : do {
      if ((i6 | 0) == 14) {
       do {
        if ((HEAP32[(HEAP32[i2 + 72 >> 2] | 0) + 44 >> 2] & 7 | 0) == 1) {
         if ((HEAP32[i2 + 20 >> 2] | 0) != 0) {
          break;
         }
         i13 = HEAP32[i2 + 60 >> 2] | 0;
         if ((HEAP32[i13 + 20 >> 2] & 768 | 0) == 256) {
          i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 524 >> 2] & 1](i13) | 0;
         } else {
          i14 = 0;
         }
         HEAP32[i7 >> 2] = i13;
         HEAP32[i8 >> 2] = i14;
         HEAP32[i2 + 32 >> 2] = -1;
         break L19;
        }
       } while (0);
       if ((HEAP32[i7 >> 2] | 0) == 0) {
        break;
       }
       i13 = HEAP32[i2 + 20 >> 2] | 0;
       HEAP32[i7 >> 2] = HEAP32[i2 + 12 >> 2];
       HEAP32[i8 >> 2] = i13;
       HEAP32[i2 + 32 >> 2] = -1;
      }
     } while (0);
     i13 = HEAP32[i4 >> 2] | 0;
     i15 = HEAP32[i8 >> 2] | 0;
     if ((i15 | 0) != (HEAP32[i13 + 12 >> 2] | 0)) {
      i11 = i5;
      i12 = i8;
      break L11;
     }
     i16 = HEAP32[i7 >> 2] | 0;
     if ((i16 | 0) != (HEAP32[i13 + 4 >> 2] | 0) | (i16 | 0) == 0) {
      i11 = i5;
      i12 = i8;
      break L11;
     }
     if ((HEAP32[i16 + 20 >> 2] & 768 | 0) == 256) {
      i13 = i15 + 1 | 0;
      HEAP32[i8 >> 2] = i13;
      if (i13 >>> 0 < (HEAP32[(HEAP32[i16 + 44 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
       i11 = i5;
       i12 = i8;
       break L11;
      }
     }
     HEAP32[i7 >> 2] = __ZN7WebCoreL28bidiNextSkippingEmptyInlinesINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_(HEAP32[i5 >> 2] | 0, i16, 0) | 0;
     HEAP32[i8 >> 2] = 0;
     HEAP32[i2 + 32 >> 2] = -1;
     i11 = i5;
     i12 = i8;
     break L11;
    }
   } while (0);
   if ((HEAP32[i2 + 20 >> 2] | 0) != 0) {
    i11 = i5;
    i12 = i8;
    break;
   }
   if (+HEAPF32[i2 + 96 >> 2] != +0) {
    i11 = i5;
    i12 = i8;
    break;
   }
   if (+HEAPF32[i2 + 92 >> 2] == +0) {
    i11 = i5;
    i12 = i8;
    break;
   }
   if ((HEAP8[i2 + 158 | 0] & 1) != 0) {
    i11 = i5;
    i12 = i8;
    break;
   }
   i4 = i2 + 28 | 0;
   i10 = HEAP32[i4 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i11 = i5;
    i12 = i8;
    break;
   }
   if ((HEAP32[i10 + 20 >> 2] & 768 | 0) == 256) {
    i16 = i9 + 1 | 0;
    HEAP32[i8 >> 2] = i16;
    if (i16 >>> 0 < (HEAP32[(HEAP32[i10 + 44 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
     i11 = i5;
     i12 = i8;
     break;
    }
   }
   HEAP32[i4 >> 2] = __ZN7WebCoreL28bidiNextSkippingEmptyInlinesINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_(HEAP32[i5 >> 2] | 0, i10, 0) | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i2 + 32 >> 2] = -1;
   i11 = i5;
   i12 = i8;
  }
 } while (0);
 i14 = i2 + 160 | 0;
 __ZN7WebCore14checkMidpointsERNS_13MidpointStateINS_14InlineIteratorEEERS1_(HEAP32[i14 >> 2] | 0, i11);
 __ZN7WebCore15TrailingObjects31updateMidpointsForTrailingBoxesERNS_13MidpointStateINS_14InlineIteratorEEERKS2_NS0_23CollapseFirstSpaceOrNotE(i2 + 164 | 0, HEAP32[i14 >> 2] | 0, i11, 1);
 i14 = HEAP32[i12 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i17 = i1;
  i18 = i11;
  HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
  HEAP32[i17 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
  HEAP32[i17 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
  HEAP32[i17 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
  STACKTOP = i3;
  return;
 }
 HEAP32[i12 >> 2] = i14 - 1;
 i6 = i2 + 28 | 0;
 i10 = HEAP32[i6 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i17 = i1;
  i18 = i11;
  HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
  HEAP32[i17 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
  HEAP32[i17 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
  HEAP32[i17 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
  STACKTOP = i3;
  return;
 }
 do {
  if ((HEAP32[i10 + 20 >> 2] & 768 | 0) == 256) {
   HEAP32[i12 >> 2] = i14;
   if (i14 >>> 0 >= (HEAP32[(HEAP32[i10 + 44 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
    break;
   }
   i17 = i1;
   i18 = i11;
   HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i17 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
   HEAP32[i17 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
   HEAP32[i17 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i6 >> 2] = __ZN7WebCoreL28bidiNextSkippingEmptyInlinesINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_(HEAP32[i11 >> 2] | 0, i10, 0) | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i2 + 32 >> 2] = -1;
 i17 = i1;
 i18 = i11;
 HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
 HEAP32[i17 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
 HEAP32[i17 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
 HEAP32[i17 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11LineBreaker16nextSegmentBreakERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERNS_8LineInfoERNS_14RenderTextInfoEPNS_14FloatingObjectEjRN3WTF6VectorINS_15WordMeasurementELj64ENSC_15CrashOnOverflowEEE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i9 + 56 | 0;
 HEAP32[i10 >> 2] = i7;
 i7 = i2 + 16 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) != 0) {
   i13 = i2 + 20 | 0;
   if ((HEAP32[i13 >> 2] | 0) != 0) {
    HEAP32[i13 >> 2] = 0;
   }
   i13 = i2 + 12 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   HEAP32[i13 >> 2] = 0;
   HEAP32[i7 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i14);
  }
 } while (0);
 i7 = i2 + 4 | 0;
 HEAP8[i7] = 0;
 i14 = i2 + 8 | 0;
 HEAP32[i14 >> 2] = 0;
 i13 = HEAP32[i3 + 12 >> 2] | 0;
 i15 = i2 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 i17 = (HEAP8[i4 | 0] & 1) != 0;
 __ZN7WebCore9LineWidthC1ERNS_15RenderBlockFlowEbNS_15IndentTextOrNotE(i11, i16, i17, __ZN7WebCore14requiresIndentEbbRKNS_11RenderStyleE(i17, (HEAP8[i4 + 3 | 0] & 1) != 0, HEAP32[i16 + 36 >> 2] | 0) | 0);
 __ZN7WebCore11LineBreaker21skipLeadingWhitespaceERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERNS_8LineInfoEPNS_14FloatingObjectERNS_9LineWidthE(i2, i3, i4, i6, i11);
 if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
  i16 = i1;
  i17 = i3;
  HEAP32[i16 >> 2] = HEAP32[i17 >> 2];
  HEAP32[i16 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
  HEAP32[i16 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
  HEAP32[i16 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
  STACKTOP = i9;
  return;
 }
 __ZN7WebCore15BreakingContextC2ERNS_11LineBreakerERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERNS_8LineInfoERNS_9LineWidthERNS_14RenderTextInfoEPNS_14FloatingObjectEbRNS_15RenderBlockFlowE(i12, i2, i3, i4, i11, i5, i6, (i13 | 0) != 0, HEAP32[i15 >> 2] | 0);
 i15 = i12 + 12 | 0;
 L12 : do {
  if ((HEAP32[i15 >> 2] | 0) == 0) {
   i18 = i12 + 88 | 0;
   i19 = 37;
  } else {
   i13 = i2 + 12 | 0;
   i6 = i12 + 88 | 0;
   i5 = i12 + 28 | 0;
   i11 = i12 + 36 | 0;
   i4 = i12 + 32 | 0;
   i3 = i12 + 157 | 0;
   i17 = i12 + 154 | 0;
   i16 = i12 + 147 | 0;
   i20 = i12 + 64 | 0;
   i21 = i12 + 20 | 0;
   i22 = i12 + 16 | 0;
   i23 = i12 + 145 | 0;
   L15 : while (1) {
    __ZN7WebCore15BreakingContext26initializeForCurrentObjectEv(i12);
    i24 = HEAP32[i15 >> 2] | 0;
    i25 = HEAP32[i24 + 20 >> 2] | 0;
    do {
     if ((i25 & 4096 | 0) == 0) {
      i26 = i24;
      i27 = i25;
      i19 = 15;
     } else {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 620 >> 2] & 1](i24) | 0) {
       i28 = HEAP32[i15 >> 2] | 0;
       i26 = i28;
       i27 = HEAP32[i28 + 20 >> 2] | 0;
       i19 = 15;
       break;
      } else {
       __ZN7WebCore15BreakingContext8handleBRERNS_6EClearE(i12, i14);
       break;
      }
     }
    } while (0);
    L22 : do {
     if ((i19 | 0) == 15) {
      i19 = 0;
      if ((i27 & 25165824 | 0) == 16777216) {
       __ZN7WebCore15BreakingContext25handleOutOfFlowPositionedERN3WTF6VectorIPNS_9RenderBoxELj0ENS1_15CrashOnOverflowEEE(i12, i13);
       break;
      }
      if ((i27 & 64 | 0) != 0) {
       __ZN7WebCore15BreakingContext11handleFloatEv(i12);
       break;
      }
      i24 = (i27 & 768 | 0) == 256;
      do {
       if (!i24) {
        if ((HEAP32[i26 + 24 >> 2] & 4 | 0) == 0) {
         break;
        }
        __ZN7WebCore15BreakingContext17handleEmptyInlineEv(i12);
        break L22;
       }
      } while (0);
      if ((i27 & 2048 | 0) != 0) {
       __ZN7WebCore15BreakingContext14handleReplacedEv(i12);
       break;
      }
      if (i24) {
       if (__ZN7WebCore15BreakingContext10handleTextERN3WTF6VectorINS_15WordMeasurementELj64ENS1_15CrashOnOverflowEEERbRj(i12, i8, i7, i10) | 0) {
        i19 = 26;
        break L15;
       } else {
        break;
       }
      }
      if ((i27 & 4096 | 0) == 0) {
       break;
      }
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 620 >> 2] & 1](i26) | 0)) {
       break;
      }
      i25 = HEAP32[i15 >> 2] | 0;
      __ZN7WebCore9LineWidth6commitEv(i6);
      HEAP32[i5 >> 2] = i25;
      HEAP32[i11 >> 2] = 0;
      HEAP32[i4 >> 2] = -1;
     }
    } while (0);
    if ((HEAP8[i3] & 1) != 0) {
     i19 = 31;
     break;
    }
    __ZN7WebCore15BreakingContext32commitAndUpdateLineBreakIfNeededEv(i12);
    if ((HEAP8[i3] & 1) != 0) {
     i19 = 33;
     break;
    }
    if ((HEAP8[i17] & 1) == 0) {
     HEAP8[i16] = 0;
    }
    i25 = HEAP32[i20 >> 2] | 0;
    HEAP32[i15 >> 2] = i25;
    HEAP32[i21 >> 2] = 0;
    HEAP32[i22 >> 2] = -1;
    HEAP8[i23] = 0;
    if ((i25 | 0) == 0) {
     i18 = i6;
     i19 = 37;
     break L12;
    }
   }
   if ((i19 | 0) == 26) {
    i6 = i1;
    i23 = i12 + 24 | 0;
    HEAP32[i6 >> 2] = HEAP32[i23 >> 2];
    HEAP32[i6 + 4 >> 2] = HEAP32[i23 + 4 >> 2];
    HEAP32[i6 + 8 >> 2] = HEAP32[i23 + 8 >> 2];
    HEAP32[i6 + 12 >> 2] = HEAP32[i23 + 12 >> 2];
    break;
   } else if ((i19 | 0) == 33) {
    __ZN7WebCore15BreakingContext15handleEndOfLineEv(i1, i12);
    break;
   } else if ((i19 | 0) == 31) {
    __ZN7WebCore15BreakingContext15handleEndOfLineEv(i1, i12);
    break;
   }
  }
 } while (0);
 if ((i19 | 0) == 37) {
  if (__ZNK7WebCore9LineWidth10fitsOnLineEb(i18, 1) | 0) {
   i19 = 39;
  } else {
   if ((HEAP32[i12 + 140 >> 2] | 0) == 4) {
    i19 = 39;
   }
  }
  if ((i19 | 0) == 39) {
   HEAP32[i12 + 28 >> 2] = 0;
   HEAP32[i12 + 36 >> 2] = 0;
   HEAP32[i12 + 32 >> 2] = -1;
  }
  __ZN7WebCore15BreakingContext15handleEndOfLineEv(i1, i12);
 }
 i1 = i12 + 176 | 0;
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
 }
 i1 = i12 + 168 | 0;
 i19 = HEAP32[i1 >> 2] | 0;
 if ((i12 + 180 | 0) == (i19 | 0) | (i19 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i12 + 172 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i19);
 STACKTOP = i9;
 return;
}
function __ZN7WebCore15BreakingContext25handleOutOfFlowPositionedERN3WTF6VectorIPNS_9RenderBoxELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, i25 = 0, d26 = +0, d27 = +0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = HEAP32[i1 + 12 >> 2] | 0;
 i11 = i10;
 HEAP32[i6 >> 2] = i11;
 L1 : do {
  switch ((HEAP32[(HEAP32[i10 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 5 & 31 | 0) {
  case 0:
  case 19:
  case 17:
  case 7:
  case 5:
  case 21:
   {
    i12 = HEAP32[i1 + 56 >> 2] | 0;
    i13 = (HEAP32[(HEAP32[i12 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if ((i13 | 0) == 3 | (i13 | 0) == 0) {
     i14 = i12 + 56 | 0;
    } else {
     i14 = i12 + 52 | 0;
    }
    HEAP32[(HEAP32[i10 + 40 >> 2] | 0) + 168 >> 2] = HEAP32[i14 >> 2];
    break;
   }
  default:
   {
    i12 = HEAP32[i1 + 56 >> 2] | 0;
    i13 = i12 + 36 | 0;
    i15 = (HEAP32[(HEAP32[i13 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if ((i15 | 0) == 3 | (i15 | 0) == 0) {
     HEAP32[i7 >> 2] = HEAP32[i12 + 56 >> 2];
    } else {
     HEAP32[i7 >> 2] = HEAP32[i12 + 52 >> 2];
    }
    i15 = i12 | 0;
    i16 = (HEAP32[(HEAP32[i13 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if ((i16 | 0) == 3 | (i16 | 0) == 0) {
     i17 = i12 + 56 | 0;
    } else {
     i17 = i12 + 52 | 0;
    }
    HEAP32[i5 >> 2] = HEAP32[i17 >> 2];
    i16 = __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i15, i5) | 0;
    i18 = HEAP32[i13 >> 2] | 0;
    if ((HEAP32[i18 + 40 >> 2] & 1073741824 | 0) == 0) {
     i13 = (HEAP32[i18 + 44 >> 2] | 0) >>> 13 & 3;
     if ((i13 | 0) == 3 | (i13 | 0) == 0) {
      i19 = i12 + 52 | 0;
     } else {
      i19 = i12 + 56 | 0;
     }
     i13 = HEAP32[i19 >> 2] | 0;
     __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i4, i15, i16);
     HEAP32[i8 >> 2] = i13 - (HEAP32[i4 >> 2] | 0);
    } else {
     __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i8, i15, i16);
    }
    __ZN7WebCore15RenderBlockFlow31setStaticInlinePositionForChildERNS_9RenderBoxENS_10LayoutUnitES3_(i12, i11, i7, i8);
    i12 = HEAP32[i6 >> 2] | 0;
    if ((HEAP32[(__ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i12 | 0, 0, 0) | 0) + 24 >> 2] & 4 | 0) != 0) {
     break L1;
    }
    i16 = i2 + 8 | 0;
    i15 = HEAP32[i16 >> 2] | 0;
    if ((i15 | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
     HEAP32[(HEAP32[i2 >> 2] | 0) + (i15 << 2) >> 2] = i12;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     i20 = HEAP32[i6 >> 2] | 0;
     i21 = i20 | 0;
     __ZN7WebCore18inlineLogicalWidthEPNS_12RenderObjectEbb(i9, i21, 1, 1);
     i22 = i9 | 0;
     i23 = HEAP32[i22 >> 2] | 0;
     d24 = +(i23 | 0);
     i25 = i1 + 92 | 0;
     d26 = +HEAPF32[i25 >> 2];
     d27 = d26 + d24;
     HEAPF32[i25 >> 2] = d27;
     i28 = i1 + 80 | 0;
     i29 = HEAP32[i28 >> 2] | 0;
     i30 = i29 + 20 | 0;
     HEAP16[i30 >> 1] = 0;
     i31 = i29 + 22 | 0;
     HEAP16[i31 >> 1] = 0;
     STACKTOP = i3;
     return;
    }
    i12 = i15 + 1 | 0;
    i13 = i2 | 0;
    i18 = HEAP32[i13 >> 2] | 0;
    do {
     if (i18 >>> 0 > i6 >>> 0) {
      i32 = 26;
     } else {
      if ((i18 + (i15 << 2) | 0) >>> 0 <= i6 >>> 0) {
       i32 = 26;
       break;
      }
      __ZN3WTF6VectorIPN7WebCore9RenderBoxELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i12);
      i33 = HEAP32[i13 >> 2] | 0;
      i34 = i33 + (i6 - i18 >> 2 << 2) | 0;
      i35 = i33;
     }
    } while (0);
    if ((i32 | 0) == 26) {
     __ZN3WTF6VectorIPN7WebCore9RenderBoxELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i12);
     i34 = i6;
     i35 = HEAP32[i13 >> 2] | 0;
    }
    HEAP32[i35 + (HEAP32[i16 >> 2] << 2) >> 2] = HEAP32[i34 >> 2];
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
    i20 = HEAP32[i6 >> 2] | 0;
    i21 = i20 | 0;
    __ZN7WebCore18inlineLogicalWidthEPNS_12RenderObjectEbb(i9, i21, 1, 1);
    i22 = i9 | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    d24 = +(i23 | 0);
    i25 = i1 + 92 | 0;
    d26 = +HEAPF32[i25 >> 2];
    d27 = d26 + d24;
    HEAPF32[i25 >> 2] = d27;
    i28 = i1 + 80 | 0;
    i29 = HEAP32[i28 >> 2] | 0;
    i30 = i29 + 20 | 0;
    HEAP16[i30 >> 1] = 0;
    i31 = i29 + 22 | 0;
    HEAP16[i31 >> 1] = 0;
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 if ((HEAP8[i1 + 146 | 0] & 1) != 0) {
  __ZN7WebCore13MidpointStateINS_14InlineIteratorEE32ensureLineBoxInsideIgnoredSpacesEPNS_12RenderObjectE(HEAP32[i1 + 160 >> 2] | 0, HEAP32[i6 >> 2] | 0);
 }
 __ZN7WebCore15TrailingObjects17appendBoxIfNeededEPNS_20RenderBoxModelObjectE(i1 + 164 | 0, HEAP32[i6 >> 2] | 0);
 i20 = HEAP32[i6 >> 2] | 0;
 i21 = i20 | 0;
 __ZN7WebCore18inlineLogicalWidthEPNS_12RenderObjectEbb(i9, i21, 1, 1);
 i22 = i9 | 0;
 i23 = HEAP32[i22 >> 2] | 0;
 d24 = +(i23 | 0);
 i25 = i1 + 92 | 0;
 d26 = +HEAPF32[i25 >> 2];
 d27 = d26 + d24;
 HEAPF32[i25 >> 2] = d27;
 i28 = i1 + 80 | 0;
 i29 = HEAP32[i28 >> 2] | 0;
 i30 = i29 + 20 | 0;
 HEAP16[i30 >> 1] = 0;
 i31 = i29 + 22 | 0;
 HEAP16[i31 >> 1] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11LineBreaker21skipLeadingWhitespaceERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERNS_8LineInfoEPNS_14FloatingObjectERNS_9LineWidthE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i2 + 4 | 0;
 if ((HEAP32[i10 >> 2] | 0) == 0) {
  i11 = __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE23commitExplicitEmbeddingEv(i2) | 0;
  STACKTOP = i6;
  return;
 }
 i12 = i2 | 0;
 i13 = i1 | 0;
 i1 = i9 | 0;
 i14 = i2 + 76 | 0;
 i15 = i2 + 80 | 0;
 i16 = i2 + 124 | 0;
 i17 = i2 + 128 | 0;
 i18 = i2 + 136 | 0;
 i19 = i3 + 8 | 0;
 i20 = i8 | 0;
 i21 = i7 | 0;
 i22 = i2 + 12 | 0;
 i23 = i2 | 0;
 i24 = i2 + 8 | 0;
 L4 : while (1) {
  if (__ZN7WebCore15requiresLineBoxERKNS_14InlineIteratorERKNS_8LineInfoENS_18WhitespacePositionE(i12, i3, 0) | 0) {
   i25 = 33;
   break;
  }
  i26 = HEAP32[i10 >> 2] | 0;
  i27 = i26 + 20 | 0;
  i28 = HEAP32[i27 >> 2] | 0;
  L7 : do {
   if ((i28 & 25165824 | 0) == 16777216) {
    i29 = HEAP32[i13 >> 2] | 0;
    i30 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i26, 0, 0) | 0;
    i31 = (HEAP32[(HEAP32[i29 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if ((i31 | 0) == 3 | (i31 | 0) == 0) {
     i32 = i29 + 56 | 0;
    } else {
     i32 = i29 + 52 | 0;
    }
    i31 = HEAP32[i32 >> 2] | 0;
    if ((HEAP32[i30 + 24 >> 2] & 4 | 0) != 0) {
     i33 = i30 + 40 | 0;
     i30 = HEAP32[i33 >> 2] | 0;
     HEAP32[i20 >> 2] = i31;
     __ZN7WebCore15RenderBlockFlow25startAlignedOffsetForLineENS_10LayoutUnitEb(i7, i29, i8, 0);
     HEAP32[i30 + 164 >> 2] = HEAP32[i21 >> 2];
     HEAP32[(HEAP32[i33 >> 2] | 0) + 168 >> 2] = i31;
    }
    HEAP32[i1 >> 2] = i31;
    __ZN7WebCore15RenderBlockFlow34updateStaticInlinePositionForChildERNS_9RenderBoxENS_10LayoutUnitE(i29, i26, i9);
    HEAP32[(HEAP32[i26 + 40 >> 2] | 0) + 168 >> 2] = i31;
    if ((HEAP32[i27 >> 2] & 768 | 0) == 256) {
     i34 = HEAP32[(HEAP32[i26 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i34 = HEAP32[i26 + 36 >> 2] | 0;
    }
    switch ((HEAP32[i34 + 48 >> 2] | 0) >>> 5 & 31 | 0) {
    case 0:
    case 19:
    case 17:
    case 7:
    case 5:
    case 21:
     {
      break;
     }
    default:
     {
      i25 = 26;
      break L7;
     }
    }
    i31 = __Znwj(24) | 0;
    i29 = i31;
    __ZN7WebCore7BidiRunC1EiiRNS_12RenderObjectEPNS_11BidiContextE14UCharDirection(i29, 0, 1, i26, HEAP32[i14 >> 2] | 0, HEAP32[i15 >> 2] | 0);
    if ((HEAP32[i16 >> 2] | 0) == 0) {
     HEAP32[i16 >> 2] = i29;
    } else {
     HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] = i31;
    }
    HEAP32[i17 >> 2] = i29;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
    i25 = 26;
   } else {
    if ((i28 & 64 | 0) != 0) {
     i29 = HEAP32[i13 >> 2] | 0;
     __ZN7WebCore15RenderBlockFlow22positionNewFloatOnLineEPNS_14FloatingObjectES2_RNS_8LineInfoERNS_9LineWidthE(i29, __ZN7WebCore15RenderBlockFlow20insertFloatingObjectERNS_9RenderBoxE(i29, i26) | 0, i4, i3, i5) | 0;
     i25 = 26;
     break;
    }
    if ((i28 & 768 | 0) != 256) {
     i25 = 26;
     break;
    }
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i26 + 8 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 296 >> 2] & 128 | 0) == 0) {
     i25 = 26;
     break;
    }
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 560 >> 2] & 1](i26) | 0)) {
     i25 = 26;
     break;
    }
    i29 = i26 + 64 | 0;
    if ((HEAP8[i29] & 1) != 0) {
     i25 = 26;
     break;
    }
    __ZN7WebCore17RenderCombineText11combineTextEv(i26);
    if ((HEAP8[i29] & 1) == 0) {
     i25 = 26;
     break;
    }
    i35 = HEAP32[i10 >> 2] | 0;
   }
  } while (0);
  do {
   if ((i25 | 0) == 26) {
    i25 = 0;
    i26 = HEAP32[i10 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i25 = 34;
     break L4;
    }
    if ((HEAP32[i26 + 20 >> 2] & 768 | 0) == 256) {
     i28 = (HEAP32[i22 >> 2] | 0) + 1 | 0;
     HEAP32[i22 >> 2] = i28;
     if (i28 >>> 0 < (HEAP32[(HEAP32[i26 + 44 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
      i35 = i26;
      break;
     }
    }
    i28 = __ZN7WebCoreL28bidiNextSkippingEmptyInlinesINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_(HEAP32[i23 >> 2] | 0, i26, i2) | 0;
    HEAP32[i10 >> 2] = i28;
    HEAP32[i22 >> 2] = 0;
    HEAP32[i24 >> 2] = -1;
    i35 = i28;
   }
  } while (0);
  if ((i35 | 0) == 0) {
   i25 = 35;
   break;
  }
 }
 if ((i25 | 0) == 33) {
  i11 = __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE23commitExplicitEmbeddingEv(i2) | 0;
  STACKTOP = i6;
  return;
 } else if ((i25 | 0) == 34) {
  i11 = __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE23commitExplicitEmbeddingEv(i2) | 0;
  STACKTOP = i6;
  return;
 } else if ((i25 | 0) == 35) {
  i11 = __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE23commitExplicitEmbeddingEv(i2) | 0;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore15BreakingContext14handleReplacedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i1 + 12 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((HEAP8[i1 + 145 | 0] & 1) != 0) {
  i9 = (HEAP32[(HEAP32[i8 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  if ((i9 | 0) == 3 | (i9 | 0) == 0) {
   HEAP32[i3 >> 2] = HEAP32[i8 + 56 >> 2];
  } else {
   HEAP32[i3 >> 2] = HEAP32[i8 + 52 >> 2];
  }
  __ZN7WebCore9LineWidth20updateAvailableWidthENS_10LayoutUnitE(i1 + 88 | 0, i3);
 }
 if ((HEAP8[i1 + 151 | 0] & 1) == 0) {
  i3 = HEAP32[i1 + 140 >> 2] | 0;
  if (!((i3 | 0) == 4 | (i3 | 0) == 1)) {
   i10 = 8;
  }
 } else {
  i10 = 8;
 }
 do {
  if ((i10 | 0) == 8) {
   i3 = HEAP32[i7 >> 2] | 0;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 92 >> 2] & 1](i3) | 0) {
    if ((HEAP8[i1 + 156 | 0] & 1) == 0) {
     break;
    }
   }
   __ZN7WebCore9LineWidth6commitEv(i1 + 88 | 0);
   HEAP32[i1 + 28 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i1 + 36 >> 2] = 0;
   HEAP32[i1 + 32 >> 2] = -1;
  }
 } while (0);
 i10 = i1 + 146 | 0;
 if ((HEAP8[i10] & 1) != 0) {
  i3 = HEAP32[i1 + 160 >> 2] | 0;
  i9 = HEAP32[i7 >> 2] | 0;
  i11 = i3 | 0;
  i12 = i3 + 8 | 0;
  i13 = i3 + 12 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  if ((HEAP32[i12 >> 2] | 0) >>> 0 > i14 >>> 0) {
   i15 = i14;
   i16 = i3 | 0;
  } else {
   i17 = i14 + 10 | 0;
   if ((HEAP32[i3 + 4 >> 2] | 0) >>> 0 < i17 >>> 0) {
    __ZN3WTF6VectorIN7WebCore14InlineIteratorELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i11, i17);
   }
   i11 = i3 | 0;
   i3 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i14 = HEAP32[i12 >> 2] | 0;
     i18 = i3 + (i17 << 4) | 0;
     if ((i14 | 0) == (i17 | 0)) {
      break;
     }
     i19 = i3 + (i14 << 4) | 0;
     while (1) {
      HEAP32[i19 >> 2] = 0;
      HEAP32[i19 + 4 >> 2] = 0;
      HEAP32[i19 + 8 >> 2] = -1;
      HEAP32[i19 + 12 >> 2] = 0;
      i19 = i19 + 16 | 0;
      if ((i19 | 0) == (i18 | 0)) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i12 >> 2] = i17;
   i15 = HEAP32[i13 >> 2] | 0;
   i16 = i11;
  }
  i11 = HEAP32[i16 >> 2] | 0;
  HEAP32[i13 >> 2] = i15 + 1;
  HEAP32[i11 + (i15 << 4) >> 2] = 0;
  HEAP32[i11 + (i15 << 4) + 4 >> 2] = i9;
  HEAP32[i11 + (i15 << 4) + 8 >> 2] = -1;
  HEAP32[i11 + (i15 << 4) + 12 >> 2] = 0;
 }
 i15 = i1 + 56 | 0;
 i11 = i1 + 88 | 0;
 __ZN7WebCore8LineInfo8setEmptyEbPNS_11RenderBlockEPNS_9LineWidthE(HEAP32[i1 + 76 >> 2] | 0, 0, HEAP32[i15 >> 2] | 0, i11);
 HEAP8[i10] = 0;
 i9 = i1 + 147 | 0;
 HEAP8[i9] = 0;
 i13 = i1 + 148 | 0;
 HEAP8[i13] = 0;
 HEAP32[i1 + 164 >> 2] = 0;
 HEAP32[i1 + 176 >> 2] = 0;
 i16 = HEAP32[i15 >> 2] | 0;
 if ((HEAP32[i16 + 20 >> 2] & 8192 | 0) == 0) {
  i20 = i8 + 56 | 0;
 } else {
  i20 = i8 + 52 | 0;
 }
 i17 = HEAP32[i20 >> 2] | 0;
 i20 = i8;
 i12 = i8;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i12 >> 2] | 0) + 792 >> 2] & 1](i4, i20, HEAP32[i16 + 36 >> 2] | 0);
 i16 = (HEAP32[i4 >> 2] | 0) + i17 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i12 >> 2] | 0) + 796 >> 2] & 1](i5, i20, HEAP32[(HEAP32[i15 >> 2] | 0) + 36 >> 2] | 0);
 i20 = i16 + (HEAP32[i5 >> 2] | 0) | 0;
 __ZN7WebCore18inlineLogicalWidthEPNS_12RenderObjectEbb(i6, HEAP32[i7 >> 2] | 0, 1, 1);
 i5 = i20 + (HEAP32[i6 >> 2] | 0) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 108 >> 2] & 1](i6) | 0) {
   do {
    if (((HEAP32[(HEAP32[i1 + 72 >> 2] | 0) + 44 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0) {
     if (!(__ZN7WebCore36shouldSkipWhitespaceAfterStartObjectERNS_15RenderBlockFlowEPNS_12RenderObjectERNS_13MidpointStateINS_14InlineIteratorEEE(HEAP32[i15 >> 2] | 0, HEAP32[i7 >> 2] | 0, HEAP32[i1 + 160 >> 2] | 0) | 0)) {
      break;
     }
     HEAP8[i9] = 1;
     HEAP8[i13] = 0;
     HEAP8[i10] = 1;
    }
   } while (0);
   if (!(__ZNK7WebCore16RenderListMarker8isInsideEv(HEAP32[i7 >> 2] | 0) | 0)) {
    break;
   }
   i20 = i1 + 92 | 0;
   HEAPF32[i20 >> 2] = +(i5 | 0) + +HEAPF32[i20 >> 2];
  } else {
   i20 = i1 + 92 | 0;
   HEAPF32[i20 >> 2] = +(i5 | 0) + +HEAPF32[i20 >> 2];
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 168 >> 2] & 1](i5) | 0)) {
  i21 = i1 + 80 | 0;
  i22 = HEAP32[i21 >> 2] | 0;
  i23 = i22 + 22 | 0;
  i24 = HEAP16[i23 >> 1] | 0;
  i25 = i22 + 20 | 0;
  HEAP16[i25 >> 1] = i24;
  HEAP16[i23 >> 1] = -3;
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore9LineWidth13applyOverhangEPNS_13RenderRubyRunEPNS_12RenderObjectES4_(i11, HEAP32[i7 >> 2] | 0, HEAP32[i1 + 60 >> 2] | 0, HEAP32[i1 + 64 >> 2] | 0);
 i21 = i1 + 80 | 0;
 i22 = HEAP32[i21 >> 2] | 0;
 i23 = i22 + 22 | 0;
 i24 = HEAP16[i23 >> 1] | 0;
 i25 = i22 + 20 | 0;
 HEAP16[i25 >> 1] = i24;
 HEAP16[i23 >> 1] = -3;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE23commitExplicitEmbeddingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 76 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i5 + 4 >> 2] & 63;
 if ((i5 | 0) == 0) {
  i7 = 0;
 } else {
  i8 = i5 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i7 = i5;
 }
 i5 = i1 + 180 | 0;
 i8 = i1 + 188 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  i9 = i7;
 } else {
  i10 = i5 | 0;
  i11 = i3 | 0;
  i12 = i7;
  i7 = 0;
  while (1) {
   i13 = (HEAP32[i10 >> 2] | 0) + (i7 << 3) | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   i15 = HEAP32[i13 + 4 >> 2] | 0;
   do {
    if ((i14 | 0) == 16) {
     i13 = HEAP32[i12 + 8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i16 = i12;
      break;
     }
     i17 = i13 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     if ((i12 | 0) == 0) {
      i16 = i13;
      break;
     }
     i17 = i12 | 0;
     i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) == 0) {
      __ZN7WebCore11BidiContextD2Ev(i12);
      __ZN3WTF8fastFreeEPv(i12);
      i16 = i13;
      break;
     } else {
      HEAP32[i17 >> 2] = i18;
      i16 = i13;
      break;
     }
    } else if ((i14 | 0) == 14) {
     i19 = 1;
     i20 = 0;
     i21 = HEAP32[i12 + 4 >> 2] & 63;
     i22 = 13;
    } else {
     i13 = (i14 | 0) == 15;
     i18 = i13 & 1;
     i17 = (i14 | 0) == 12;
     i23 = HEAP32[i12 + 4 >> 2] & 63;
     if (!(i17 | i13 ^ 1)) {
      i19 = i18;
      i20 = 1;
      i21 = i23;
      i22 = 13;
      break;
     }
     i24 = i23 + 2 & 126;
     i25 = i18;
     i26 = i17;
     i22 = 15;
    }
   } while (0);
   if ((i22 | 0) == 13) {
    i22 = 0;
    i24 = i21 + 1 & 255 | 1;
    i25 = i19;
    i26 = i20;
    i22 = 15;
   }
   do {
    if ((i22 | 0) == 15) {
     i22 = 0;
     if ((i24 & 255) >>> 0 >= 61 >>> 0) {
      i16 = i12;
      break;
     }
     __ZN7WebCore11BidiContext6createEh14UCharDirectionbNS_19BidiEmbeddingSourceEPS0_(i3, i24, i25, i26, i15, i12);
     i14 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i12 | 0) == 0) {
      i16 = i14;
      break;
     }
     i17 = i12 | 0;
     i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) == 0) {
      __ZN7WebCore11BidiContextD2Ev(i12);
      __ZN3WTF8fastFreeEPv(i12);
     } else {
      HEAP32[i17 >> 2] = i18;
     }
     i18 = HEAP32[i11 >> 2] | 0;
     if ((i18 | 0) == 0) {
      i16 = i14;
      break;
     }
     i17 = i18 | 0;
     i23 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) == 0) {
      __ZN7WebCore11BidiContextD2Ev(i18);
      __ZN3WTF8fastFreeEPv(i18);
      i16 = i14;
      break;
     } else {
      HEAP32[i17 >> 2] = i23;
      i16 = i14;
      break;
     }
    }
   } while (0);
   i15 = i7 + 1 | 0;
   if (i15 >>> 0 < (HEAP32[i8 >> 2] | 0) >>> 0) {
    i12 = i16;
    i7 = i15;
   } else {
    i9 = i16;
    break;
   }
  }
 }
 i16 = HEAP32[i9 + 4 >> 2] | 0;
 i7 = i16 & 63;
 i12 = i6 & 255;
 if ((i7 & 255) >>> 0 > (i6 & 255) >>> 0) {
  __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE27raiseExplicitEmbeddingLevelE14UCharDirectionS4_(i1, i12 & 1, i16 & 1);
  i22 = 30;
 } else {
  if ((i7 & 255) >>> 0 < (i6 & 255) >>> 0) {
   __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE27lowerExplicitEmbeddingLevelE14UCharDirection(i1, i12 & 1);
  }
  if ((i9 | 0) == 0) {
   i27 = 1;
  } else {
   i22 = 30;
  }
 }
 if ((i22 | 0) == 30) {
  i22 = i9 | 0;
  HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
  i27 = 0;
 }
 i22 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 do {
  if ((i22 | 0) != 0) {
   i4 = i22 | 0;
   i12 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore11BidiContextD2Ev(i22);
    __ZN3WTF8fastFreeEPv(i22);
    break;
   } else {
    HEAP32[i4 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i22 = i1 + 184 | 0;
 do {
  if ((HEAP32[i22 >> 2] | 0) != 0) {
   if ((HEAP32[i8 >> 2] | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
   }
   i12 = i5 | 0;
   i4 = HEAP32[i12 >> 2] | 0;
   i16 = i1 + 192 | 0;
   if ((i16 | 0) == (i4 | 0) | (i4 | 0) == 0) {
    i28 = i4;
   } else {
    HEAP32[i12 >> 2] = 0;
    HEAP32[i22 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i4);
    i28 = HEAP32[i12 >> 2] | 0;
   }
   if ((i28 | 0) != 0) {
    break;
   }
   HEAP32[i12 >> 2] = i16;
   HEAP32[i22 >> 2] = 8;
  }
 } while (0);
 i22 = i6 << 24 >> 24 != i7 << 24 >> 24;
 if (i27) {
  STACKTOP = i2;
  return i22 | 0;
 }
 i27 = i9 | 0;
 i7 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  __ZN7WebCore11BidiContextD2Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
  STACKTOP = i2;
  return i22 | 0;
 } else {
  HEAP32[i27 >> 2] = i7;
  STACKTOP = i2;
  return i22 | 0;
 }
 return 0;
}
function __ZN7WebCore25requiresLineBoxForContentERKNS_12RenderInlineERKNS_8LineInfoE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i7 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 L1 : do {
  if ((HEAP32[i7 + 664 >> 2] | 0) == 2) {
   i8 = i1 | 0;
   i9 = i2 | 0;
   i10 = HEAP8[i9] | 0;
   do {
    if ((i10 & 1) == 0) {
     i11 = HEAP32[i1 + 36 >> 2] | 0;
     i12 = i10;
    } else {
     if ((HEAP8[i7 + 914 | 0] & 1) == 0) {
      i11 = HEAP32[i1 + 36 >> 2] | 0;
      i12 = i10;
      break;
     } else {
      i13 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i8) | 0;
      i11 = i13;
      i12 = HEAP8[i9] | 0;
      break;
     }
    }
   } while (0);
   do {
    if ((i12 & 1) == 0) {
     i14 = HEAP32[i6 + 36 >> 2] | 0;
    } else {
     if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i6 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
      i14 = HEAP32[i6 + 36 >> 2] | 0;
      break;
     } else {
      i14 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i6) | 0;
      break;
     }
    }
   } while (0);
   __ZNK7WebCore11RenderStyle10lineHeightEv(i4, i11);
   __ZNK7WebCore11RenderStyle10lineHeightEv(i5, i14);
   i9 = i4 + 5 | 0;
   i8 = HEAP8[i9] | 0;
   i10 = i5 + 5 | 0;
   i13 = HEAP8[i10] | 0;
   L17 : do {
    if (i8 << 24 >> 24 == i13 << 24 >> 24) {
     if (((HEAP8[i5 + 4 | 0] ^ HEAP8[i4 + 4 | 0]) & 1) != 0) {
      i15 = i8;
      break;
     }
     do {
      if (i8 << 24 >> 24 != 15) {
       if ((HEAP8[i4 + 6 | 0] & 1) == 0) {
        d16 = +(HEAP32[i4 >> 2] | 0);
       } else {
        d16 = +HEAPF32[i4 >> 2];
       }
       if ((HEAP8[i5 + 6 | 0] & 1) == 0) {
        d17 = +(HEAP32[i5 >> 2] | 0);
       } else {
        d17 = +HEAPF32[i5 >> 2];
       }
       if (d16 == d17) {
        break;
       }
       if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i4, i5) | 0) {
        break;
       }
       i15 = HEAP8[i10] | 0;
       break L17;
      }
     } while (0);
     if (((HEAP32[i14 + 48 >> 2] ^ HEAP32[i11 + 48 >> 2]) & 983040 | 0) != 0) {
      if ((HEAP8[i10] | 0) == 10) {
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
      }
      if ((HEAP8[i9] | 0) != 10) {
       i18 = 1;
       STACKTOP = i3;
       return i18 | 0;
      }
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i4);
      i18 = 1;
      STACKTOP = i3;
      return i18 | 0;
     }
     i19 = __ZNK7WebCore11RenderStyle4fontEv(i14) | 0;
     i20 = HEAP32[i19 + 24 >> 2] | 0;
     i21 = i20 + 44 | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     if ((i22 | 0) == 0) {
      i23 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i20, i19 | 0, 0) | 0;
      i19 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] & 1](i23, 32) | 0;
      HEAP32[i21 >> 2] = i19;
      i24 = i19;
     } else {
      i24 = i22;
     }
     i22 = __ZNK7WebCore11RenderStyle4fontEv(i11) | 0;
     i19 = HEAP32[i22 + 24 >> 2] | 0;
     i21 = i19 + 44 | 0;
     i23 = HEAP32[i21 >> 2] | 0;
     if ((i23 | 0) == 0) {
      i20 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i19, i22 | 0, 0) | 0;
      i22 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i20 >> 2] | 0) + 8 >> 2] & 1](i20, 32) | 0;
      HEAP32[i21 >> 2] = i22;
      i25 = i22;
     } else {
      i25 = i23;
     }
     i23 = _round(+(+HEAPF32[i24 + 16 >> 2])) | 0;
     do {
      if ((i23 | 0) == (_round(+(+HEAPF32[i25 + 16 >> 2])) | 0)) {
       i22 = _round(+(+HEAPF32[i24 + 20 >> 2])) | 0;
       if ((i22 | 0) != (_round(+(+HEAPF32[i25 + 20 >> 2])) | 0)) {
        i26 = 0;
        break;
       }
       i22 = _round(+(+HEAPF32[i24 + 24 >> 2])) | 0;
       i26 = (i22 | 0) == (_round(+(+HEAPF32[i25 + 24 >> 2])) | 0);
      } else {
       i26 = 0;
      }
     } while (0);
     if ((HEAP8[i10] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
     }
     if ((HEAP8[i9] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i4);
     }
     if (i26) {
      break L1;
     } else {
      i18 = 1;
     }
     STACKTOP = i3;
     return i18 | 0;
    } else {
     i15 = i13;
    }
   } while (0);
   if (i15 << 24 >> 24 == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
   }
   if ((HEAP8[i9] | 0) != 10) {
    i18 = 1;
    STACKTOP = i3;
    return i18 | 0;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i4);
   i18 = 1;
   STACKTOP = i3;
   return i18 | 0;
  }
 } while (0);
 i18 = 0;
 STACKTOP = i3;
 return i18 | 0;
}
function __ZN7WebCore23updateSegmentsForShapesERNS_15RenderBlockFlowEPKNS_14FloatingObjectERKN3WTF6VectorINS_15WordMeasurementELj64ENS5_15CrashOnOverflowEEERNS_9LineWidthEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, d25 = +0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i1 | 0;
 i15 = __ZNK7WebCore11RenderBlock21layoutShapeInsideInfoEv(i14) | 0;
 if ((HEAP32[i2 + 28 >> 2] & 16 | 0) == 0 | (i15 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i16 = i1 + 20 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = i15 | 0;
 i19 = i15 + 12 | 0;
 __ZNK7WebCore11RenderBlock39logicalOffsetFromShapeAncestorContainerEPKS0_(i9, i14, HEAP32[i19 >> 2] | 0);
 i20 = HEAP32[i9 + 4 >> 2] | 0;
 i9 = i1 + 36 | 0;
 i21 = (HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i21 | 0) == 3 | (i21 | 0) == 0) {
  i22 = i1 + 56 | 0;
 } else {
  i22 = i1 + 52 | 0;
 }
 i21 = (HEAP32[i22 >> 2] | 0) + i20 | 0;
 __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i10, i14, i5, i17 >>> 13 & 1 ^ 1, 1);
 i17 = i10 | 0;
 i10 = (HEAP32[i16 >> 2] & 8192 | 0) == 0;
 i16 = i2 + 12 | 0;
 i5 = i2 + 8 | 0;
 i14 = HEAP32[(i10 ? i5 : i16) >> 2] | 0;
 if (i10) {
  i23 = (HEAP32[i2 + 16 >> 2] | 0) + (HEAP32[i5 >> 2] | 0) | 0;
 } else {
  i23 = (HEAP32[i2 + 20 >> 2] | 0) + (HEAP32[i16 >> 2] | 0) | 0;
 }
 if (!((i14 | 0) < ((HEAP32[i17 >> 2] | 0) + i21 | 0) & (i21 | 0) < (i23 | 0))) {
  STACKTOP = i6;
  return;
 }
 i21 = i3 | 0;
 i22 = HEAP32[i3 + 8 >> 2] | 0;
 i3 = 0;
 while (1) {
  if (i3 >>> 0 >= i22 >>> 0) {
   d24 = +0;
   break;
  }
  d25 = +HEAPF32[(HEAP32[i21 >> 2] | 0) + (i3 * 36 & -1) + 4 >> 2];
  if (d25 > +0) {
   d24 = d25;
   break;
  } else {
   i3 = i3 + 1 | 0;
  }
 }
 i3 = i2 + 16 | 0;
 i21 = i2 + 20 | 0;
 i2 = HEAP32[(i10 ? i21 : i3) >> 2] | 0;
 i22 = HEAP32[i9 >> 2] | 0;
 i26 = i22 + 44 | 0;
 i27 = (HEAP32[i26 >> 2] | 0) >>> 13 & 3;
 if ((i27 | 0) == 3 | (i27 | 0) == 0) {
  i28 = i1 + 52 | 0;
 } else {
  i28 = i1 + 56 | 0;
 }
 if (i10) {
  i29 = (HEAP32[i21 >> 2] | 0) + (HEAP32[i16 >> 2] | 0) | 0;
 } else {
  i29 = (HEAP32[i3 >> 2] | 0) + (HEAP32[i5 >> 2] | 0) | 0;
 }
 do {
  if (+((HEAP32[i28 >> 2] | 0) - i29 | 0) < d24) {
   if ((i27 | 0) == 3 | (i27 | 0) == 0) {
    HEAP32[i1 + 56 >> 2] = i23;
    break;
   } else {
    HEAP32[i1 + 52 >> 2] = i23;
    break;
   }
  }
 } while (0);
 i23 = (HEAP32[i26 >> 2] | 0) >>> 13 & 3;
 if ((i23 | 0) == 3 | (i23 | 0) == 0) {
  i30 = i1 + 56 | 0;
 } else {
  i30 = i1 + 52 | 0;
 }
 do {
  if ((HEAP32[i30 >> 2] | 0) < (i14 | 0)) {
   __ZN7WebCore15ShapeInsideInfo20adjustLogicalLineTopEf(i15, d24 + +(i2 | 0)) | 0;
   i23 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 12 >> 2] & 1](i18) | 0;
   if ((i23 | 0) == 1) {
    i26 = HEAP32[i19 >> 2] | 0;
    __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i8, i26 + 60 | 0, (HEAP32[(HEAP32[i26 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
    i31 = -(HEAP32[i8 >> 2] | 0) | 0;
   } else if ((i23 | 0) == 3) {
    i26 = HEAP32[i19 >> 2] | 0;
    i31 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 752 >> 2] & 1](i26 | 0) | 0;
   } else if ((i23 | 0) == 4) {
    i23 = HEAP32[i19 >> 2] | 0;
    i26 = i23 | 0;
    i27 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i23 >> 2] | 0) + 752 >> 2] & 1](i26) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i23 >> 2] | 0) + 720 >> 2] & 1](i7, i26);
    i31 = (HEAP32[i7 >> 2] | 0) + i27 | 0;
   } else {
    i31 = 0;
   }
   i27 = i31 - i20 + (HEAP32[i15 + 4 >> 2] | 0) | 0;
   i26 = HEAP32[i9 >> 2] | 0;
   i23 = (HEAP32[i26 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i23 | 0) == 3 | (i23 | 0) == 0) {
    HEAP32[i1 + 56 >> 2] = i27;
    i32 = i26;
    break;
   } else {
    HEAP32[i1 + 52 >> 2] = i27;
    i32 = i26;
    break;
   }
  } else {
   i32 = i22;
  }
 } while (0);
 i22 = (HEAP32[i32 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i22 | 0) == 3 | (i22 | 0) == 0) {
  i33 = i1 + 56 | 0;
 } else {
  i33 = i1 + 52 | 0;
 }
 HEAP32[i11 >> 2] = (HEAP32[i33 >> 2] | 0) + i20;
 HEAP32[i12 >> 2] = HEAP32[i17 >> 2];
 __ZN7WebCore15ShapeInsideInfo21updateSegmentsForLineENS_10LayoutUnitES1_(i15, i11, i12) | 0;
 __ZN7WebCore9LineWidth25updateCurrentShapeSegmentEv(i4);
 HEAP32[i13 >> 2] = 0;
 __ZN7WebCore9LineWidth20updateAvailableWidthENS_10LayoutUnitE(i4, i13);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore15requiresLineBoxERKNS_14InlineIteratorERKNS_8LineInfoENS_18WhitespacePositionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i5 + 20 >> 2] | 0;
 if ((i6 & 64 | 0) != 0 | (i6 & 25165824 | 0) == 16777216) {
  i7 = 0;
  return i7 | 0;
 }
 do {
  if ((i6 & 4096 | 0) == 0) {
   i8 = i5;
   i9 = i6;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 620 >> 2] & 1](i5) | 0) {
    i10 = HEAP32[i4 >> 2] | 0;
    i8 = i10;
    i9 = HEAP32[i10 + 20 >> 2] | 0;
    break;
   } else {
    i7 = 1;
    return i7 | 0;
   }
  }
 } while (0);
 do {
  if ((i9 & 768 | 0) == 256) {
   i11 = 0;
   i12 = i8;
   i13 = i9;
  } else {
   if ((HEAP32[i8 + 24 >> 2] & 4 | 0) == 0) {
    i11 = 0;
    i12 = i8;
    i13 = i9;
    break;
   }
   i5 = i8;
   if (__ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE(i5) | 0) {
    if (!(__ZN7WebCore40hasInlineDirectionBordersPaddingOrMarginERKNS_12RenderInlineE(i5) | 0)) {
     i14 = 9;
    }
   } else {
    i14 = 9;
   }
   do {
    if ((i14 | 0) == 9) {
     if (__ZN7WebCore25requiresLineBoxForContentERKNS_12RenderInlineERKNS_8LineInfoE(i5, i2) | 0) {
      break;
     } else {
      i7 = 0;
     }
     return i7 | 0;
    }
   } while (0);
   i6 = __ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE(i5) | 0;
   i10 = HEAP32[i4 >> 2] | 0;
   i11 = i6;
   i12 = i10;
   i13 = HEAP32[i10 + 20 >> 2] | 0;
  }
 } while (0);
 i8 = i12 + 20 | 0;
 i9 = (i13 & 768 | 0) == 256;
 if (i9) {
  i15 = HEAP32[(HEAP32[i12 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i15 = HEAP32[i12 + 36 >> 2] | 0;
 }
 i10 = HEAP32[i15 + 44 >> 2] & 7;
 do {
  if ((i10 - 1 | 0) >>> 0 <= 1 >>> 0) {
   if (!((i3 | 0) == 1 & (i10 | 0) == 2)) {
    i7 = 1;
    return i7 | 0;
   }
   if ((HEAP8[i2 + 2 | 0] & 1) == 0) {
    break;
   }
   if ((HEAP8[i2 + 3 | 0] & 1) == 0) {
    break;
   } else {
    i7 = 1;
   }
   return i7 | 0;
  }
 } while (0);
 i10 = i1 + 12 | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i12 | 0) == 0 | i9 ^ 1) {
   i16 = i12;
   i17 = i13;
   i14 = 30;
  } else {
   i3 = HEAP32[i12 + 44 >> 2] | 0;
   if ((HEAP32[i3 + 4 >> 2] | 0) >>> 0 <= i1 >>> 0) {
    i16 = i12;
    i17 = i13;
    i14 = 30;
    break;
   }
   if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
    i18 = HEAP16[(HEAP32[i3 + 8 >> 2] | 0) + (i1 << 1) >> 1] | 0;
   } else {
    i18 = HEAPU8[(HEAP32[i3 + 8 >> 2] | 0) + i1 | 0] | 0;
   }
   if ((i18 << 16 >> 16 | 0) == 32 | (i18 << 16 >> 16 | 0) == 9 | (i18 << 16 >> 16 | 0) == 173) {
    i19 = 0;
    break;
   } else if ((i18 << 16 >> 16 | 0) != 10) {
    i16 = i12;
    i17 = i13;
    i14 = 30;
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 368 >> 2] & 1](i12) | 0) {
    i19 = 0;
    break;
   }
   if ((HEAP32[i8 >> 2] & 768 | 0) == 256) {
    i20 = HEAP32[(HEAP32[i12 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i20 = HEAP32[i12 + 36 >> 2] | 0;
   }
   i3 = HEAP32[i20 + 44 >> 2] & 7;
   if ((i3 | 0) == 4 | (i3 | 0) == 0) {
    i19 = 0;
    break;
   }
   i3 = HEAP32[i4 >> 2] | 0;
   i16 = i3;
   i17 = HEAP32[i3 + 20 >> 2] | 0;
   i14 = 30;
  }
 } while (0);
 do {
  if ((i14 | 0) == 30) {
   i4 = (i17 & 768 | 0) == 256;
   if (i4) {
    i21 = HEAP32[(HEAP32[i16 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i21 = HEAP32[i16 + 36 >> 2] | 0;
   }
   if ((HEAP32[(HEAP32[i21 + 24 >> 2] | 0) + 88 >> 2] & 512 | 0) == 0) {
    i19 = 1;
    break;
   }
   i20 = HEAP32[i10 >> 2] | 0;
   if ((i16 | 0) == 0 | i4 ^ 1) {
    i19 = 1;
    break;
   }
   i4 = HEAP32[i16 + 44 >> 2] | 0;
   if ((HEAP32[i4 + 4 >> 2] | 0) >>> 0 <= i20 >>> 0) {
    i19 = 1;
    break;
   }
   if ((HEAP32[i4 + 16 >> 2] & 32 | 0) == 0) {
    i22 = HEAP16[(HEAP32[i4 + 8 >> 2] | 0) + (i20 << 1) >> 1] | 0;
   } else {
    i22 = HEAPU8[(HEAP32[i4 + 8 >> 2] | 0) + i20 | 0] | 0;
   }
   if (i22 << 16 >> 16 != 160) {
    i19 = 1;
    break;
   }
   if ((HEAP8[i2 + 2 | 0] & 1) != 0) {
    if ((HEAP8[i2 + 3 | 0] & 1) != 0) {
     i19 = 1;
     break;
    }
   }
   i19 = 0;
  }
 } while (0);
 i7 = i19 | i11;
 return i7 | 0;
}
function __ZN7WebCore14tryHyphenatingEPNS_10RenderTextERKNS_4FontERKN3WTF12AtomicStringEjiiijjfibbiRNS_14InlineIteratorEiRb(i1, i2, i3, i4, i5, i6, i7, i8, i9, d10, i11, i12, i13, i14, i15, i16, i17) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 d10 = +d10;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 i15 = i15 | 0;
 i16 = i16 | 0;
 i17 = i17 | 0;
 var i18 = 0, i19 = 0, i20 = 0, d21 = +0, i22 = 0, i23 = 0, d24 = +0, d25 = +0, i26 = 0, i27 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i18 = i12 | 0;
 i19 = i12 + 40 | 0;
 i20 = (i6 | 0) < 0 ? 2 : i6;
 i6 = (i7 | 0) < 0 ? 2 : i7;
 i7 = i9 - i8 | 0;
 if (i7 >>> 0 <= i6 >>> 0) {
  STACKTOP = i12;
  return;
 }
 if (!((i5 | 0) < 0 | i4 >>> 0 < i5 >>> 0)) {
  STACKTOP = i12;
  return;
 }
 i5 = i1 + 8 | 0;
 i4 = HEAP32[(HEAP32[i5 >> 2] | 0) + 36 >> 2] | 0;
 i9 = i1 | 0;
 __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontERKN3WTF6StringERKNS_11RenderStyleEjj(i18, i9, i2, __ZNK7WebCore11RenderStyle12hyphenStringEv(i4) | 0, i4, 1, 0);
 d21 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i2, i18, 0, 0);
 i4 = HEAP32[i18 + 32 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i18 = i4 + 4 | 0;
   i22 = i18 | 0;
   i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) != 0) {
    HEAP32[i22 >> 2] = i23;
    break;
   }
   i23 = i18 - 4 | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 1](i23);
  }
 } while (0);
 d24 = +(i14 | 0);
 d25 = +(i11 | 0) - d10 - +(~~d21 | 0) - d24;
 if (d25 <= +((~~(+HEAPF32[i2 + 12 >> 2] + +.5) * 5 & -1 | 0) / 4 & -1 | 0)) {
  STACKTOP = i12;
  return;
 }
 i11 = HEAP32[(HEAP32[i5 >> 2] | 0) + 36 >> 2] | 0;
 __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKNS_10RenderTextEjjRKNS_11RenderStyleEj(i19, i9, i2, i1, i8, i7, i11, 1);
 i5 = i1 + 44 | 0;
 HEAP32[i19 + 4 >> 2] = (HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] | 0) - i8;
 i1 = HEAP32[(HEAP32[i11 + 24 >> 2] | 0) + 124 >> 2] | 0;
 i11 = i19 + 24 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] & -9 | (i13 & 1) << 3) ^ 8;
 HEAP32[i19 + 28 >> 2] = i1;
 HEAPF32[i19 + 12 >> 2] = d24 + d10;
 i1 = __ZNK7WebCore4Font17offsetForPositionERKNS_7TextRunEfb(i2, i19, d25, 0) | 0;
 do {
  if (i1 >>> 0 >= i20 >>> 0) {
   i2 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     i26 = 0;
    } else {
     if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
      i26 = HEAP32[i2 + 8 >> 2] | 0;
      break;
     } else {
      i26 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i2) | 0;
      break;
     }
    }
   } while (0);
   i2 = i7 - i6 | 0;
   i13 = __ZN7WebCore18lastHyphenLocationEPKtjjRKN3WTF12AtomicStringE(i26 + (i8 << 1) | 0, i7, (i2 >>> 0 < i1 >>> 0 ? i2 : i1) + 1 | 0, i3) | 0;
   if ((i13 | 0) == 0 | i13 >>> 0 < i20 >>> 0) {
    break;
   }
   if ((i13 | 0) == (i20 | 0)) {
    i2 = HEAP32[i5 >> 2] | 0;
    if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
     i27 = HEAP16[(HEAP32[i2 + 8 >> 2] | 0) + (i8 << 1) >> 1] | 0;
    } else {
     i27 = HEAPU8[(HEAP32[i2 + 8 >> 2] | 0) + i8 | 0] | 0;
    }
    if ((i27 << 16 >> 16 | 0) == 32 | (i27 << 16 >> 16 | 0) == 10 | (i27 << 16 >> 16 | 0) == 9 | (i27 << 16 >> 16 | 0) == 160) {
     break;
    }
   }
   HEAP32[i15 + 4 >> 2] = i9;
   HEAP32[i15 + 12 >> 2] = i13 + i8;
   HEAP32[i15 + 8 >> 2] = i16;
   HEAP8[i17] = 1;
  }
 } while (0);
 i17 = HEAP32[i19 + 32 >> 2] | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i12;
  return;
 }
 i19 = i17 + 4 | 0;
 i17 = i19 | 0;
 i16 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
 if ((i16 | 0) != 0) {
  HEAP32[i17 >> 2] = i16;
  STACKTOP = i12;
  return;
 }
 i16 = i19 - 4 | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i12;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
 STACKTOP = i12;
 return;
}
function __ZN7WebCore15BreakingContext22canBreakAtThisPositionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = i1 + 88 | 0;
 i3 = i1 + 96 | 0;
 do {
  if (+HEAPF32[i3 >> 2] != +0) {
   if (__ZNK7WebCore9LineWidth10fitsOnLineEb(i2, (HEAP8[i1 + 147 | 0] & 1) != 0) | 0) {
    break;
   }
   if ((HEAP32[i1 + 136 >> 2] | 0) == 4) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i5 = i1 + 64 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   if ((HEAP32[i6 + 20 >> 2] & 768 | 0) == 256) {
    break;
   }
   if ((HEAP32[i6 + 24 >> 2] & 4 | 0) == 0) {
    break;
   }
   if (__ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE(i6) | 0) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i6 = i1 + 151 | 0;
 do {
  if ((HEAP8[i6] & 1) != 0) {
   if ((HEAP8[i1 + 147 | 0] & 1) == 0) {
    break;
   } else {
    i4 = 1;
   }
   return i4 | 0;
  }
 } while (0);
 i7 = HEAP32[i5 >> 2] | 0;
 L16 : do {
  if ((i7 | 0) != 0) {
   do {
    if ((HEAP32[i7 + 20 >> 2] & 4096 | 0) == 0) {
     i8 = i7;
    } else {
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 620 >> 2] & 1](i7) | 0)) {
      i9 = HEAP32[i5 >> 2] | 0;
      if ((i9 | 0) == 0) {
       break L16;
      } else {
       i8 = i9;
       break;
      }
     }
     i4 = (HEAP8[i6] & 1) != 0;
     return i4 | 0;
    }
   } while (0);
   if ((HEAP32[i8 + 20 >> 2] & 768 | 0) != 256) {
    break;
   }
   i9 = HEAP8[i6] | 0;
   if ((i9 & 1) == 0) {
    i10 = HEAP32[(HEAP32[(HEAP32[i8 + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] & 7;
    if ((i10 | 0) == 4 | (i10 | 0) == 1) {
     break;
    }
   }
   i10 = HEAP32[i1 + 12 >> 2] | 0;
   do {
    if ((HEAP32[i10 + 20 >> 2] & 768 | 0) != 256) {
     if ((HEAP32[i10 + 24 >> 2] & 4 | 0) == 0) {
      i11 = i9;
     } else {
      if (__ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE(i10) | 0) {
       break;
      }
      i11 = HEAP8[i6] | 0;
     }
     i4 = (i11 & 1) != 0;
     return i4 | 0;
    }
   } while (0);
   do {
    if ((HEAP8[i1 + 147 | 0] & 1) == 0) {
     i10 = HEAP32[i5 >> 2] | 0;
     i9 = HEAP32[i10 + 44 >> 2] | 0;
     if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
      i12 = 0;
      break;
     }
     if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
      i13 = HEAP16[HEAP32[i9 + 8 >> 2] >> 1] | 0;
     } else {
      i13 = HEAPU8[HEAP32[i9 + 8 >> 2] | 0] | 0;
     }
     if ((i13 << 16 >> 16 | 0) == 32 | (i13 << 16 >> 16 | 0) == 9) {
      i12 = 1;
      break;
     }
     if (i13 << 16 >> 16 != 10) {
      i12 = 0;
      break;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 368 >> 2] & 1](i10) | 0) {
      i12 = 1;
      break;
     }
     if ((HEAP32[i10 + 20 >> 2] & 768 | 0) == 256) {
      i14 = HEAP32[(HEAP32[i10 + 8 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i14 = HEAP32[i10 + 36 >> 2] | 0;
     }
     i10 = HEAP32[i14 + 44 >> 2] & 7;
     i12 = (i10 | 0) == 0 | (i10 | 0) == 4;
    } else {
     i12 = 0;
    }
   } while (0);
   do {
    if (!(__ZNK7WebCore9LineWidth10fitsOnLineEb(i2, 0) | 0)) {
     if (+HEAPF32[i3 >> 2] != +0) {
      break;
     }
     __ZN7WebCore9LineWidth14fitBelowFloatsEv(i2);
    }
   } while (0);
   do {
    if (__ZNK7WebCore9LineWidth10fitsOnLineEb(i2, 0) | 0) {
     if (i12) {
      break;
     } else {
      i4 = 0;
     }
     return i4 | 0;
    } else {
     if ((HEAP8[i1 + 152 | 0] & 1) != 0 | i12 ^ 1) {
      i4 = i12;
     } else {
      break;
     }
     return i4 | 0;
    }
   } while (0);
   i10 = HEAP32[i5 >> 2] | 0;
   __ZN7WebCore9LineWidth6commitEv(i2);
   HEAP32[i1 + 28 >> 2] = i10;
   HEAP32[i1 + 36 >> 2] = 0;
   HEAP32[i1 + 32 >> 2] = -1;
   i4 = i12;
   return i4 | 0;
  }
 } while (0);
 i4 = (HEAP8[i6] & 1) != 0;
 return i4 | 0;
}
function __ZN7WebCore18inlineLogicalWidthEPNS_12RenderObjectEbb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i1 | 0;
 HEAP32[i10 >> 2] = 0;
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 if ((HEAP32[i1 + 24 >> 2] & 4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i11 = i8 | 0;
 i12 = i9 | 0;
 i13 = i6 | 0;
 i14 = i7 | 0;
 i15 = i3;
 i3 = i4;
 i4 = 1;
 i16 = i2;
 i2 = i1;
 i1 = 0;
 L4 : while (1) {
  i17 = i4 + 1 | 0;
  if (i4 >>> 0 >= 200 >>> 0) {
   i18 = 20;
   break;
  }
  i19 = i2 | 0;
  i20 = i2;
  L7 : do {
   if (__ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE(i20) | 0) {
    i21 = i3;
    i22 = i15;
    i23 = i1;
   } else {
    do {
     if (i15) {
      i24 = i16;
      while (1) {
       i25 = HEAP32[i24 + 12 >> 2] | 0;
       if ((i25 | 0) == 0) {
        break;
       }
       i26 = HEAP32[i25 + 20 >> 2] | 0;
       if ((i26 & 25165824 | 0) == 16777216) {
        i24 = i25;
       } else {
        i18 = 8;
        break;
       }
      }
      if ((i18 | 0) == 8) {
       i18 = 0;
       if ((i26 & 768 | 0) != 256) {
        i27 = 0;
        i28 = i1;
        break;
       }
       if ((HEAP32[(HEAP32[i25 + 44 >> 2] | 0) + 4 >> 2] | 0) != 0) {
        i27 = 0;
        i28 = i1;
        break;
       }
      }
      __ZNK7WebCore12RenderInline11marginStartEPKNS_11RenderStyleE(i6, i20, 0);
      i24 = i2;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 728 >> 2] & 1](i7, i24);
      i29 = (HEAP32[i14 >> 2] | 0) + (HEAP32[i13 >> 2] | 0) | 0;
      i30 = i29 + (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 760 >> 2] & 1](i24) | 0) + i1 | 0;
      HEAP32[i10 >> 2] = i30;
      i27 = 1;
      i28 = i30;
     } else {
      i27 = 0;
      i28 = i1;
     }
    } while (0);
    do {
     if (i3) {
      i30 = HEAP32[i16 + 16 >> 2] | 0;
      if ((i30 | 0) != 0) {
       if ((HEAP32[i30 + 20 >> 2] & 768 | 0) != 256) {
        break;
       }
       if ((HEAP32[(HEAP32[i30 + 44 >> 2] | 0) + 4 >> 2] | 0) != 0) {
        break;
       }
      }
      __ZNK7WebCore12RenderInline9marginEndEPKNS_11RenderStyleE(i8, i20, 0);
      i30 = i2;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 732 >> 2] & 1](i9, i30);
      i24 = (HEAP32[i12 >> 2] | 0) + (HEAP32[i11 >> 2] | 0) | 0;
      i29 = i24 + (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 764 >> 2] & 1](i30) | 0) + i28 | 0;
      HEAP32[i10 >> 2] = i29;
      i21 = 1;
      i22 = i27;
      i23 = i29;
      break L7;
     }
    } while (0);
    if (i27) {
     i21 = 0;
     i22 = 1;
     i23 = i28;
    } else {
     i18 = 21;
     break L4;
    }
   }
  } while (0);
  i20 = HEAP32[i2 + 8 >> 2] | 0;
  if ((HEAP32[i20 + 24 >> 2] & 4 | 0) == 0) {
   i18 = 22;
   break;
  } else {
   i15 = i22;
   i3 = i21;
   i4 = i17;
   i16 = i19;
   i2 = i20;
   i1 = i23;
  }
 }
 if ((i18 | 0) == 20) {
  STACKTOP = i5;
  return;
 } else if ((i18 | 0) == 21) {
  STACKTOP = i5;
  return;
 } else if ((i18 | 0) == 22) {
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore21nextBreakablePositionItLb0EEEiRNS_21LazyLineBreakIteratorEPKT_ji(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 do {
  if ((i4 | 0) > 1) {
   i5 = HEAP16[i2 + (i4 - 2 << 1) >> 1] | 0;
   i6 = 4;
  } else {
   i7 = HEAP16[i1 + 12 >> 1] | 0;
   if ((i4 | 0) > 0) {
    i5 = i7;
    i6 = 4;
    break;
   }
   i8 = i1 + 14 | 0;
   i9 = i8;
   i10 = i7;
   i11 = i8;
  }
 } while (0);
 if ((i6 | 0) == 4) {
  i9 = i2 + (i4 - 1 << 1) | 0;
  i10 = i5;
  i11 = i1 + 14 | 0;
 }
 if ((HEAP16[i11 >> 1] | 0) == 0) {
  i12 = 0;
 } else {
  i12 = (HEAP16[i1 + 12 >> 1] | 0) == 0 ? 1 : 2;
 }
 if ((i4 | 0) >= (i3 | 0)) {
  i13 = i3;
  return i13 | 0;
 }
 i11 = i12 - 1 | 0;
 i5 = HEAP16[i9 >> 1] | 0;
 i9 = i10;
 i10 = i4;
 i4 = -1;
 L14 : while (1) {
  i8 = HEAP16[i2 + (i10 << 1) >> 1] | 0;
  i7 = i8 & 65535;
  if ((i7 | 0) == 32 | (i7 | 0) == 10 | (i7 | 0) == 9) {
   i13 = i10;
   i6 = 29;
   break;
  }
  i14 = i5 & 65535;
  do {
   if (i5 << 16 >> 16 == 45) {
    if ((i8 - 48 & 65535) >>> 0 >= 10 >>> 0) {
     if ((i8 - 33 & 65535) >>> 0 < 95 >>> 0) {
      i6 = 16;
      break;
     } else {
      break;
     }
    }
    if ((i9 - 48 & 65535) >>> 0 < 10 >>> 0) {
     i13 = i10;
     i6 = 30;
     break L14;
    }
    if (((i9 & 65535 | 32) - 97 | 0) >>> 0 < 26 >>> 0) {
     i13 = i10;
     i6 = 32;
     break L14;
    }
   } else {
    if ((i5 - 33 & 65535) >>> 0 < 95 >>> 0 & (i8 - 33 & 65535) >>> 0 < 95 >>> 0) {
     i6 = 16;
    }
   }
  } while (0);
  if ((i6 | 0) == 16) {
   i6 = 0;
   i15 = i7 - 33 | 0;
   if ((HEAPU8[((i15 | 0) / 8 & -1) + (__ZN7WebCore19asciiLineBreakTableE + ((i14 - 33 | 0) * 12 & -1)) | 0] & 1 << (i15 & 7) | 0) != 0) {
    i13 = i10;
    i6 = 31;
    break;
   }
  }
  if ((i8 & 65535) >>> 0 > 127 >>> 0 & i8 << 16 >> 16 != 160) {
   i6 = 20;
  } else {
   if ((i5 & 65535) >>> 0 > 127 >>> 0 & i5 << 16 >> 16 != 160) {
    i6 = 20;
   } else {
    i16 = i4;
   }
  }
  do {
   if ((i6 | 0) == 20) {
    i6 = 0;
    do {
     if ((i4 | 0) < (i10 | 0)) {
      if ((i10 | i12 | 0) == 0) {
       i17 = i4;
       break;
      }
      i15 = __ZN7WebCore21LazyLineBreakIterator3getEj(i1, i12) | 0;
      if ((i15 | 0) == 0) {
       i17 = i4;
       break;
      }
      i18 = __ZN7WebCore18textBreakFollowingEPNS_17TextBreakIteratorEi(i15, i11 + i10 | 0) | 0;
      i17 = i18 - ((i18 | 0) > -1 ? i12 : 0) | 0;
     } else {
      i17 = i4;
     }
    } while (0);
    if ((i10 | 0) != (i17 | 0)) {
     i16 = i17;
     break;
    }
    if ((i14 | 0) == 32 | (i14 | 0) == 10 | (i14 | 0) == 9) {
     i16 = i10;
    } else {
     i13 = i10;
     i6 = 33;
     break L14;
    }
   }
  } while (0);
  i14 = i10 + 1 | 0;
  if ((i14 | 0) < (i3 | 0)) {
   i9 = i5;
   i5 = i8;
   i10 = i14;
   i4 = i16;
  } else {
   i13 = i3;
   i6 = 34;
   break;
  }
 }
 if ((i6 | 0) == 29) {
  return i13 | 0;
 } else if ((i6 | 0) == 30) {
  return i13 | 0;
 } else if ((i6 | 0) == 31) {
  return i13 | 0;
 } else if ((i6 | 0) == 32) {
  return i13 | 0;
 } else if ((i6 | 0) == 33) {
  return i13 | 0;
 } else if ((i6 | 0) == 34) {
  return i13 | 0;
 }
 return 0;
}
function __ZN7WebCore21nextBreakablePositionIhLb0EEEiRNS_21LazyLineBreakIteratorEPKT_ji(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 do {
  if ((i4 | 0) > 1) {
   i5 = HEAP8[i2 + (i4 - 2) | 0] | 0;
   i6 = 4;
  } else {
   i7 = HEAP16[i1 + 12 >> 1] & 255;
   if ((i4 | 0) > 0) {
    i5 = i7;
    i6 = 4;
    break;
   }
   i8 = HEAP16[i1 + 14 >> 1] | 0;
   i9 = i8 & 255;
   i10 = i7;
   i11 = i8;
  }
 } while (0);
 if ((i6 | 0) == 4) {
  i9 = HEAP8[i2 + (i4 - 1) | 0] | 0;
  i10 = i5;
  i11 = HEAP16[i1 + 14 >> 1] | 0;
 }
 if (i11 << 16 >> 16 == 0) {
  i12 = 0;
 } else {
  i12 = (HEAP16[i1 + 12 >> 1] | 0) == 0 ? 1 : 2;
 }
 if ((i4 | 0) >= (i3 | 0)) {
  i13 = i3;
  return i13 | 0;
 }
 i11 = i12 - 1 | 0;
 i5 = i9;
 i9 = i10;
 i10 = i4;
 i4 = -1;
 L14 : while (1) {
  i8 = HEAP8[i2 + i10 | 0] | 0;
  i7 = i8 & 255;
  i14 = i8 & 255;
  if ((i14 | 0) == 32 | (i14 | 0) == 10 | (i14 | 0) == 9) {
   i13 = i10;
   i6 = 29;
   break;
  }
  i15 = i9 & 255;
  i16 = i5 & 255;
  do {
   if (i5 << 24 >> 24 == 45) {
    if ((i7 - 48 & 65535) >>> 0 >= 10 >>> 0) {
     i6 = 15;
     break;
    }
    if ((i15 - 48 & 65535) >>> 0 < 10 >>> 0) {
     i13 = i10;
     i6 = 30;
     break L14;
    }
    if (((i9 & 255 | 32) - 97 | 0) >>> 0 < 26 >>> 0) {
     i13 = i10;
     i6 = 32;
     break L14;
    }
   } else {
    if (((i5 & 255) - 33 & 65535) >>> 0 < 95 >>> 0) {
     i6 = 15;
    }
   }
  } while (0);
  do {
   if ((i6 | 0) == 15) {
    i6 = 0;
    if ((i7 - 33 & 65535) >>> 0 >= 95 >>> 0) {
     break;
    }
    i15 = i14 - 33 | 0;
    if ((HEAPU8[((i15 | 0) / 8 & -1) + (__ZN7WebCore19asciiLineBreakTableE + ((i16 - 33 | 0) * 12 & -1)) | 0] & 1 << (i15 & 7) | 0) != 0) {
     i13 = i10;
     i6 = 31;
     break L14;
    }
   }
  } while (0);
  if (i8 << 24 >> 24 < 0 & i8 << 24 >> 24 != -96) {
   i6 = 20;
  } else {
   if (i5 << 24 >> 24 < 0 & i5 << 24 >> 24 != -96) {
    i6 = 20;
   } else {
    i17 = i4;
   }
  }
  do {
   if ((i6 | 0) == 20) {
    i6 = 0;
    do {
     if ((i4 | 0) < (i10 | 0)) {
      if ((i10 | i12 | 0) == 0) {
       i18 = i4;
       break;
      }
      i14 = __ZN7WebCore21LazyLineBreakIterator3getEj(i1, i12) | 0;
      if ((i14 | 0) == 0) {
       i18 = i4;
       break;
      }
      i7 = __ZN7WebCore18textBreakFollowingEPNS_17TextBreakIteratorEi(i14, i11 + i10 | 0) | 0;
      i18 = i7 - ((i7 | 0) > -1 ? i12 : 0) | 0;
     } else {
      i18 = i4;
     }
    } while (0);
    if ((i10 | 0) != (i18 | 0)) {
     i17 = i18;
     break;
    }
    if ((i16 | 0) == 32 | (i16 | 0) == 10 | (i16 | 0) == 9) {
     i17 = i10;
    } else {
     i13 = i10;
     i6 = 33;
     break L14;
    }
   }
  } while (0);
  i16 = i10 + 1 | 0;
  if ((i16 | 0) < (i3 | 0)) {
   i9 = i5;
   i5 = i8;
   i10 = i16;
   i4 = i17;
  } else {
   i13 = i3;
   i6 = 34;
   break;
  }
 }
 if ((i6 | 0) == 29) {
  return i13 | 0;
 } else if ((i6 | 0) == 30) {
  return i13 | 0;
 } else if ((i6 | 0) == 31) {
  return i13 | 0;
 } else if ((i6 | 0) == 32) {
  return i13 | 0;
 } else if ((i6 | 0) == 33) {
  return i13 | 0;
 } else if ((i6 | 0) == 34) {
  return i13 | 0;
 }
 return 0;
}
function __ZN7WebCore15BreakingContext8handleBRERNS_6EClearE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = i1 + 88 | 0;
 if (!(__ZNK7WebCore9LineWidth10fitsOnLineEb(i3, 0) | 0)) {
  i4 = i1 + 157 | 0;
  HEAP8[i4] = 1;
  return;
 }
 i5 = i1 + 12 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 28 | 0;
 HEAP32[i7 >> 2] = i6;
 i8 = i1 + 36 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 32 | 0;
 HEAP32[i9 >> 2] = -1;
 do {
  if ((i6 | 0) != 0) {
   if ((HEAP32[i6 + 20 >> 2] & 768 | 0) == 256) {
    HEAP32[i8 >> 2] = 1;
    if ((HEAP32[(HEAP32[i6 + 44 >> 2] | 0) + 4 >> 2] | 0) >>> 0 > 1 >>> 0) {
     break;
    }
   }
   HEAP32[i7 >> 2] = __ZN7WebCoreL28bidiNextSkippingEmptyInlinesINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_(HEAP32[i1 + 24 >> 2] | 0, i6, 0) | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i9 >> 2] = -1;
  }
 } while (0);
 i9 = i1 + 76 | 0;
 if ((HEAP8[i1 + 155 | 0] & 1) != 0) {
  __ZN7WebCore8LineInfo8setEmptyEbPNS_11RenderBlockEPNS_9LineWidthE(HEAP32[i9 >> 2] | 0, 0, HEAP32[i1 + 56 >> 2] | 0, i3);
 }
 HEAP32[i1 + 164 >> 2] = 0;
 HEAP32[i1 + 176 >> 2] = 0;
 HEAP8[(HEAP32[i9 >> 2] | 0) + 3 | 0] = 1;
 do {
  if ((HEAP8[i1 + 146 | 0] & 1) != 0) {
   if ((HEAP32[(HEAP32[i1 + 68 >> 2] | 0) + 48 >> 2] & 3145728 | 0) != 0) {
    __ZN7WebCore13MidpointStateINS_14InlineIteratorEE32ensureLineBoxInsideIgnoredSpacesEPNS_12RenderObjectE(HEAP32[i1 + 160 >> 2] | 0, i6);
    break;
   }
   i3 = (HEAP32[(HEAP32[i1 + 72 >> 2] | 0) + 40 >> 2] | 0) >>> 13 & 15;
   if (!((i3 | 0) == 1 | (i3 | 0) == 5)) {
    break;
   }
   i3 = HEAP32[i1 + 160 >> 2] | 0;
   i8 = HEAP32[i5 >> 2] | 0;
   i7 = HEAP32[i1 + 20 >> 2] | 0;
   i10 = i3 | 0;
   i11 = i3 + 8 | 0;
   i12 = i3 + 12 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   if ((HEAP32[i11 >> 2] | 0) >>> 0 > i13 >>> 0) {
    i14 = i13;
    i15 = i3 | 0;
   } else {
    i16 = i13 + 10 | 0;
    if ((HEAP32[i3 + 4 >> 2] | 0) >>> 0 < i16 >>> 0) {
     __ZN3WTF6VectorIN7WebCore14InlineIteratorELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i10, i16);
    }
    i10 = i3 | 0;
    i3 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i3 | 0) != 0) {
      i13 = HEAP32[i11 >> 2] | 0;
      i17 = i3 + (i16 << 4) | 0;
      if ((i13 | 0) == (i16 | 0)) {
       break;
      }
      i18 = i3 + (i13 << 4) | 0;
      while (1) {
       HEAP32[i18 >> 2] = 0;
       HEAP32[i18 + 4 >> 2] = 0;
       HEAP32[i18 + 8 >> 2] = -1;
       HEAP32[i18 + 12 >> 2] = 0;
       i18 = i18 + 16 | 0;
       if ((i18 | 0) == (i17 | 0)) {
        break;
       }
      }
     }
    } while (0);
    HEAP32[i11 >> 2] = i16;
    i14 = HEAP32[i12 >> 2] | 0;
    i15 = i10;
   }
   i3 = HEAP32[i15 >> 2] | 0;
   HEAP32[i12 >> 2] = i14 + 1;
   HEAP32[i3 + (i14 << 4) >> 2] = 0;
   HEAP32[i3 + (i14 << 4) + 4 >> 2] = i8;
   HEAP32[i3 + (i14 << 4) + 8 >> 2] = -1;
   HEAP32[i3 + (i14 << 4) + 12 >> 2] = i7;
  }
 } while (0);
 if ((HEAP8[(HEAP32[i9 >> 2] | 0) + 2 | 0] & 1) != 0) {
  i4 = i1 + 157 | 0;
  HEAP8[i4] = 1;
  return;
 }
 HEAP32[i2 >> 2] = (HEAP32[(HEAP32[i1 + 68 >> 2] | 0) + 48 >> 2] | 0) >>> 20 & 3;
 i4 = i1 + 157 | 0;
 HEAP8[i4] = 1;
 return;
}
function __ZN3WTF6VectorIN7WebCore15WordMeasurementELj64ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i1 + 4 | 0;
 if ((HEAP32[i5 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i1 + 8 >> 2] | 0;
 i9 = i7 + (i8 * 36 & -1) | 0;
 do {
  if (i2 >>> 0 > 64 >>> 0) {
   if (i2 >>> 0 > 119304647 >>> 0) {
    _WTFCrash();
   } else {
    i10 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 36 & -1) | 0;
    HEAP32[i5 >> 2] = (i10 >>> 0) / 36 & -1;
    i11 = __ZN3WTF10fastMallocEj(i10) | 0;
    HEAP32[i6 >> 2] = i11;
    i12 = i11;
    break;
   }
  } else {
   i11 = i1 + 12 | 0;
   HEAP32[i6 >> 2] = i11;
   HEAP32[i5 >> 2] = 64;
   i12 = i11;
  }
 } while (0);
 if ((i8 | 0) != 0) {
  i8 = i7;
  i2 = i12;
  while (1) {
   HEAP32[i2 >> 2] = HEAP32[i8 >> 2];
   HEAPF32[i2 + 4 >> 2] = +HEAPF32[i8 + 4 >> 2];
   HEAP32[i2 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   HEAP32[i2 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
   i12 = i2 + 16 | 0;
   i11 = i12 | 0;
   i10 = i8 + 16 | 0;
   _memset(i12 | 0, 0, 20) | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   i13 = HEAP32[i8 + 20 >> 2] | 0;
   i14 = i12 + (i13 << 2) | 0;
   L15 : do {
    if ((HEAP32[i8 + 28 >> 2] | 0) != 0) {
     L17 : do {
      if ((i13 | 0) == 0) {
       i15 = i12;
      } else {
       i16 = i12;
       while (1) {
        i17 = HEAP32[i16 >> 2] | 0;
        if (!((i17 | 0) == (-1 | 0) | (i17 | 0) == 0)) {
         i15 = i16;
         break L17;
        }
        i16 = i16 + 4 | 0;
        if ((i16 | 0) == (i14 | 0)) {
         break L15;
        }
       }
      }
     } while (0);
     if ((i15 | 0) == (i14 | 0)) {
      break;
     } else {
      i18 = i15;
     }
     while (1) {
      __ZN3WTF9HashTableIPKN7WebCore14SimpleFontDataES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i4, i11, i18, i18);
      i16 = i18 + 4 | 0;
      if ((i16 | 0) == (i14 | 0)) {
       break L15;
      } else {
       i19 = i16;
      }
      while (1) {
       i16 = HEAP32[i19 >> 2] | 0;
       if (!((i16 | 0) == (-1 | 0) | (i16 | 0) == 0)) {
        break;
       }
       i16 = i19 + 4 | 0;
       if ((i16 | 0) == (i14 | 0)) {
        break L15;
       } else {
        i19 = i16;
       }
      }
      if ((i19 | 0) == (i14 | 0)) {
       break;
      } else {
       i18 = i19;
      }
     }
    }
   } while (0);
   i14 = HEAP32[i10 >> 2] | 0;
   if ((i14 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(i14);
   }
   i14 = i8 + 36 | 0;
   if ((i14 | 0) == (i9 | 0)) {
    break;
   } else {
    i8 = i14;
    i2 = i2 + 36 | 0;
   }
  }
 }
 if ((i1 + 12 | 0) == (i7 | 0) | (i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i6 >> 2] | 0) == (i7 | 0)) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i5 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore21nextBreakablePositionItLb1EEEiRNS_21LazyLineBreakIteratorEPKT_ji(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 do {
  if ((i4 | 0) > 1) {
   i5 = HEAP16[i2 + (i4 - 2 << 1) >> 1] | 0;
   i6 = 4;
  } else {
   i7 = HEAP16[i1 + 12 >> 1] | 0;
   if ((i4 | 0) > 0) {
    i5 = i7;
    i6 = 4;
    break;
   }
   i8 = i1 + 14 | 0;
   i9 = i8;
   i10 = i7;
   i11 = i8;
  }
 } while (0);
 if ((i6 | 0) == 4) {
  i9 = i2 + (i4 - 1 << 1) | 0;
  i10 = i5;
  i11 = i1 + 14 | 0;
 }
 if ((HEAP16[i11 >> 1] | 0) == 0) {
  i12 = 0;
 } else {
  i12 = (HEAP16[i1 + 12 >> 1] | 0) == 0 ? 1 : 2;
 }
 if ((i4 | 0) >= (i3 | 0)) {
  i13 = i3;
  return i13 | 0;
 }
 i11 = i12 - 1 | 0;
 i5 = HEAP16[i9 >> 1] | 0;
 i9 = i10;
 i10 = i4;
 i4 = -1;
 L14 : while (1) {
  i8 = HEAP16[i2 + (i10 << 1) >> 1] | 0;
  i7 = i8 & 65535;
  if ((i7 | 0) == 32 | (i7 | 0) == 10 | (i7 | 0) == 9 | (i7 | 0) == 160) {
   i13 = i10;
   i6 = 28;
   break;
  }
  i14 = i5 & 65535;
  do {
   if (i5 << 16 >> 16 == 45) {
    if ((i8 - 48 & 65535) >>> 0 >= 10 >>> 0) {
     if ((i8 - 33 & 65535) >>> 0 < 95 >>> 0) {
      i6 = 16;
      break;
     } else {
      break;
     }
    }
    if ((i9 - 48 & 65535) >>> 0 < 10 >>> 0) {
     i13 = i10;
     i6 = 29;
     break L14;
    }
    if (((i9 & 65535 | 32) - 97 | 0) >>> 0 < 26 >>> 0) {
     i13 = i10;
     i6 = 31;
     break L14;
    }
   } else {
    if ((i5 - 33 & 65535) >>> 0 < 95 >>> 0 & (i8 - 33 & 65535) >>> 0 < 95 >>> 0) {
     i6 = 16;
    }
   }
  } while (0);
  if ((i6 | 0) == 16) {
   i6 = 0;
   i15 = i7 - 33 | 0;
   if ((HEAPU8[((i15 | 0) / 8 & -1) + (__ZN7WebCore19asciiLineBreakTableE + ((i14 - 33 | 0) * 12 & -1)) | 0] & 1 << (i15 & 7) | 0) != 0) {
    i13 = i10;
    i6 = 30;
    break;
   }
  }
  do {
   if ((i8 & 65535) >>> 0 > 127 >>> 0 | (i5 & 65535) >>> 0 > 127 >>> 0) {
    do {
     if ((i4 | 0) < (i10 | 0)) {
      if ((i10 | i12 | 0) == 0) {
       i16 = i4;
       break;
      }
      i15 = __ZN7WebCore21LazyLineBreakIterator3getEj(i1, i12) | 0;
      if ((i15 | 0) == 0) {
       i16 = i4;
       break;
      }
      i17 = __ZN7WebCore18textBreakFollowingEPNS_17TextBreakIteratorEi(i15, i11 + i10 | 0) | 0;
      i16 = i17 - ((i17 | 0) > -1 ? i12 : 0) | 0;
     } else {
      i16 = i4;
     }
    } while (0);
    if ((i10 | 0) != (i16 | 0)) {
     i18 = i16;
     break;
    }
    if ((i14 | 0) == 32 | (i14 | 0) == 10 | (i14 | 0) == 9 | (i14 | 0) == 160) {
     i18 = i10;
    } else {
     i13 = i10;
     i6 = 32;
     break L14;
    }
   } else {
    i18 = i4;
   }
  } while (0);
  i14 = i10 + 1 | 0;
  if ((i14 | 0) < (i3 | 0)) {
   i9 = i5;
   i5 = i8;
   i10 = i14;
   i4 = i18;
  } else {
   i13 = i3;
   i6 = 33;
   break;
  }
 }
 if ((i6 | 0) == 28) {
  return i13 | 0;
 } else if ((i6 | 0) == 29) {
  return i13 | 0;
 } else if ((i6 | 0) == 30) {
  return i13 | 0;
 } else if ((i6 | 0) == 31) {
  return i13 | 0;
 } else if ((i6 | 0) == 32) {
  return i13 | 0;
 } else if ((i6 | 0) == 33) {
  return i13 | 0;
 }
 return 0;
}
function __ZN7WebCore21nextBreakablePositionIhLb1EEEiRNS_21LazyLineBreakIteratorEPKT_ji(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 do {
  if ((i4 | 0) > 1) {
   i5 = HEAP8[i2 + (i4 - 2) | 0] | 0;
   i6 = 4;
  } else {
   i7 = HEAP16[i1 + 12 >> 1] & 255;
   if ((i4 | 0) > 0) {
    i5 = i7;
    i6 = 4;
    break;
   }
   i8 = HEAP16[i1 + 14 >> 1] | 0;
   i9 = i8 & 255;
   i10 = i7;
   i11 = i8;
  }
 } while (0);
 if ((i6 | 0) == 4) {
  i9 = HEAP8[i2 + (i4 - 1) | 0] | 0;
  i10 = i5;
  i11 = HEAP16[i1 + 14 >> 1] | 0;
 }
 if (i11 << 16 >> 16 == 0) {
  i12 = 0;
 } else {
  i12 = (HEAP16[i1 + 12 >> 1] | 0) == 0 ? 1 : 2;
 }
 if ((i4 | 0) >= (i3 | 0)) {
  i13 = i3;
  return i13 | 0;
 }
 i11 = i12 - 1 | 0;
 i5 = i9;
 i9 = i10;
 i10 = i4;
 i4 = -1;
 L14 : while (1) {
  i8 = HEAP8[i2 + i10 | 0] | 0;
  i7 = i8 & 255;
  i14 = i8 & 255;
  if ((i14 | 0) == 32 | (i14 | 0) == 10 | (i14 | 0) == 9 | (i14 | 0) == 160) {
   i13 = i10;
   i6 = 28;
   break;
  }
  i15 = i9 & 255;
  i16 = i5 & 255;
  do {
   if (i5 << 24 >> 24 == 45) {
    if ((i7 - 48 & 65535) >>> 0 >= 10 >>> 0) {
     i6 = 15;
     break;
    }
    if ((i15 - 48 & 65535) >>> 0 < 10 >>> 0) {
     i13 = i10;
     i6 = 29;
     break L14;
    }
    if (((i9 & 255 | 32) - 97 | 0) >>> 0 < 26 >>> 0) {
     i13 = i10;
     i6 = 31;
     break L14;
    }
   } else {
    if (((i5 & 255) - 33 & 65535) >>> 0 < 95 >>> 0) {
     i6 = 15;
    }
   }
  } while (0);
  do {
   if ((i6 | 0) == 15) {
    i6 = 0;
    if ((i7 - 33 & 65535) >>> 0 >= 95 >>> 0) {
     break;
    }
    i15 = i14 - 33 | 0;
    if ((HEAPU8[((i15 | 0) / 8 & -1) + (__ZN7WebCore19asciiLineBreakTableE + ((i16 - 33 | 0) * 12 & -1)) | 0] & 1 << (i15 & 7) | 0) != 0) {
     i13 = i10;
     i6 = 30;
     break L14;
    }
   }
  } while (0);
  do {
   if ((i8 | i5) << 24 >> 24 < 0) {
    do {
     if ((i4 | 0) < (i10 | 0)) {
      if ((i10 | i12 | 0) == 0) {
       i17 = i4;
       break;
      }
      i14 = __ZN7WebCore21LazyLineBreakIterator3getEj(i1, i12) | 0;
      if ((i14 | 0) == 0) {
       i17 = i4;
       break;
      }
      i7 = __ZN7WebCore18textBreakFollowingEPNS_17TextBreakIteratorEi(i14, i11 + i10 | 0) | 0;
      i17 = i7 - ((i7 | 0) > -1 ? i12 : 0) | 0;
     } else {
      i17 = i4;
     }
    } while (0);
    if ((i10 | 0) != (i17 | 0)) {
     i18 = i17;
     break;
    }
    if ((i16 | 0) == 32 | (i16 | 0) == 10 | (i16 | 0) == 9 | (i16 | 0) == 160) {
     i18 = i10;
    } else {
     i13 = i10;
     i6 = 32;
     break L14;
    }
   } else {
    i18 = i4;
   }
  } while (0);
  i16 = i10 + 1 | 0;
  if ((i16 | 0) < (i3 | 0)) {
   i9 = i5;
   i5 = i8;
   i10 = i16;
   i4 = i18;
  } else {
   i13 = i3;
   i6 = 33;
   break;
  }
 }
 if ((i6 | 0) == 28) {
  return i13 | 0;
 } else if ((i6 | 0) == 29) {
  return i13 | 0;
 } else if ((i6 | 0) == 30) {
  return i13 | 0;
 } else if ((i6 | 0) == 31) {
  return i13 | 0;
 } else if ((i6 | 0) == 32) {
  return i13 | 0;
 } else if ((i6 | 0) == 33) {
  return i13 | 0;
 }
 return 0;
}
function __ZN7WebCoreL28bidiNextSkippingEmptyInlinesINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i1 | 0;
 i1 = (i3 | 0) == 0;
 i6 = i3 + 164 | 0;
 i7 = i2;
 L4 : while (1) {
  i2 = HEAP32[i7 + 20 >> 2] | 0;
  do {
   if ((i2 & 768 | 0) == 256 | (i2 & 4096 | 0) != 0) {
    i8 = 6;
   } else {
    if ((i2 & 64 | 0) != 0 | (i2 & 25165824 | 0) == 16777216 | (i2 & 2048 | 0) != 0) {
     i8 = 6;
     break;
    }
    i9 = HEAP32[i7 + 28 >> 2] | 0;
    i10 = i9;
    __ZN7WebCoreL27notifyObserverEnteredObjectINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEvPT_PNS_12RenderObjectE(i3, i10);
    if ((i9 | 0) == 0) {
     i8 = 6;
    } else {
     i11 = i10;
    }
   }
  } while (0);
  if ((i8 | 0) == 6) {
   i8 = 0;
   if ((i7 | 0) == 0) {
    i4 = 0;
    i8 = 28;
    break;
   } else {
    i12 = i7;
   }
   while (1) {
    if ((i12 | 0) == (i5 | 0)) {
     i4 = 0;
     i8 = 30;
     break L4;
    }
    do {
     if (!i1) {
      if ((HEAP32[i12 + 20 >> 2] & 768 | 0) == 256) {
       break;
      }
      if ((HEAP32[i12 + 24 >> 2] & 4 | 0) == 0) {
       break;
      }
      i2 = (HEAP32[(HEAP32[i12 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 28 & 7;
      if ((i2 | 0) == 0) {
       break;
      }
      i10 = HEAP32[i6 >> 2] | 0;
      if ((i2 - 3 | 0) >>> 0 < 3 >>> 0) {
       HEAP32[i6 >> 2] = i10 - 1;
       break;
      }
      if ((i10 | 0) != 0) {
       break;
      }
      __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE5embedE14UCharDirectionNS_19BidiEmbeddingSourceE(i3, 16, 0);
     }
    } while (0);
    i13 = HEAP32[i12 + 16 >> 2] | 0;
    if ((i13 | 0) != 0) {
     break;
    }
    i10 = HEAP32[i12 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i4 = 0;
     i8 = 29;
     break L4;
    } else {
     i12 = i10 | 0;
    }
   }
   __ZN7WebCoreL27notifyObserverEnteredObjectINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEvPT_PNS_12RenderObjectE(i3, i13);
   i11 = i13;
  }
  i10 = HEAP32[i11 + 20 >> 2] | 0;
  if ((i10 & 768 | 0) == 256 | (i10 & 4096 | 0) != 0) {
   i4 = i11;
   i8 = 27;
   break;
  }
  if ((i10 & 64 | 0) != 0 | (i10 & 25165824 | 0) == 16777216 | (i10 & 2048 | 0) != 0) {
   i4 = i11;
   i8 = 31;
   break;
  }
  if ((HEAP32[i11 + 24 >> 2] & 4 | 0) != 0) {
   if (__ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE(i11) | 0) {
    i4 = i11;
    i8 = 32;
    break;
   }
  }
  if ((i11 | 0) == 0) {
   i4 = 0;
   i8 = 25;
   break;
  } else {
   i7 = i11;
  }
 }
 if ((i8 | 0) == 32) {
  return i4 | 0;
 } else if ((i8 | 0) == 28) {
  return i4 | 0;
 } else if ((i8 | 0) == 29) {
  return i4 | 0;
 } else if ((i8 | 0) == 30) {
  return i4 | 0;
 } else if ((i8 | 0) == 31) {
  return i4 | 0;
 } else if ((i8 | 0) == 25) {
  return i4 | 0;
 } else if ((i8 | 0) == 27) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore26ensureCharacterGetsLineBoxERNS_13MidpointStateINS_14InlineIteratorEEERS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = i2 + 4 | 0;
 i4 = i2 + 12 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 i6 = i1 | 0;
 i7 = i1 + 8 | 0;
 i8 = i1 + 12 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i7 >> 2] | 0) >>> 0 > i9 >>> 0) {
  i10 = i9;
  i11 = i1 | 0;
 } else {
  i12 = i9 + 10 | 0;
  if ((HEAP32[i1 + 4 >> 2] | 0) >>> 0 < i12 >>> 0) {
   __ZN3WTF6VectorIN7WebCore14InlineIteratorELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i12);
  }
  i9 = i1 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    i14 = HEAP32[i7 >> 2] | 0;
    i15 = i13 + (i12 << 4) | 0;
    if ((i14 | 0) == (i12 | 0)) {
     break;
    }
    i16 = i13 + (i14 << 4) | 0;
    while (1) {
     HEAP32[i16 >> 2] = 0;
     HEAP32[i16 + 4 >> 2] = 0;
     HEAP32[i16 + 8 >> 2] = -1;
     HEAP32[i16 + 12 >> 2] = 0;
     i16 = i16 + 16 | 0;
     if ((i16 | 0) == (i15 | 0)) {
      break;
     }
    }
   }
  } while (0);
  HEAP32[i7 >> 2] = i12;
  i10 = HEAP32[i8 >> 2] | 0;
  i11 = i9;
 }
 i9 = HEAP32[i11 >> 2] | 0;
 HEAP32[i8 >> 2] = i10 + 1;
 HEAP32[i9 + (i10 << 4) >> 2] = 0;
 HEAP32[i9 + (i10 << 4) + 4 >> 2] = i2;
 HEAP32[i9 + (i10 << 4) + 8 >> 2] = -1;
 HEAP32[i9 + (i10 << 4) + 12 >> 2] = i5;
 i5 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i7 >> 2] | 0) >>> 0 > i4 >>> 0) {
  i17 = i4;
  i18 = i1 | 0;
  i19 = HEAP32[i18 >> 2] | 0;
  i20 = i17 + 1 | 0;
  HEAP32[i8 >> 2] = i20;
  i21 = i19 + (i17 << 4) | 0;
  HEAP32[i21 >> 2] = 0;
  i22 = i19 + (i17 << 4) + 4 | 0;
  HEAP32[i22 >> 2] = i5;
  i23 = i19 + (i17 << 4) + 8 | 0;
  HEAP32[i23 >> 2] = -1;
  i24 = i19 + (i17 << 4) + 12 | 0;
  HEAP32[i24 >> 2] = i3;
  return;
 }
 i10 = i4 + 10 | 0;
 if ((HEAP32[i1 + 4 >> 2] | 0) >>> 0 < i10 >>> 0) {
  __ZN3WTF6VectorIN7WebCore14InlineIteratorELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i10);
 }
 i6 = i1 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = HEAP32[i7 >> 2] | 0;
   i9 = i1 + (i10 << 4) | 0;
   if ((i4 | 0) == (i10 | 0)) {
    break;
   }
   i2 = i1 + (i4 << 4) | 0;
   while (1) {
    HEAP32[i2 >> 2] = 0;
    HEAP32[i2 + 4 >> 2] = 0;
    HEAP32[i2 + 8 >> 2] = -1;
    HEAP32[i2 + 12 >> 2] = 0;
    i2 = i2 + 16 | 0;
    if ((i2 | 0) == (i9 | 0)) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = i10;
 i17 = HEAP32[i8 >> 2] | 0;
 i18 = i6;
 i19 = HEAP32[i18 >> 2] | 0;
 i20 = i17 + 1 | 0;
 HEAP32[i8 >> 2] = i20;
 i21 = i19 + (i17 << 4) | 0;
 HEAP32[i21 >> 2] = 0;
 i22 = i19 + (i17 << 4) + 4 | 0;
 HEAP32[i22 >> 2] = i5;
 i23 = i19 + (i17 << 4) + 8 | 0;
 HEAP32[i23 >> 2] = -1;
 i24 = i19 + (i17 << 4) + 12 | 0;
 HEAP32[i24 >> 2] = i3;
 return;
}
function __ZN7WebCore14IsolateTracker21addFakeRunIfNecessaryERNS_12RenderObjectEjRNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i1 + 4 | 0;
 if ((HEAP8[i7] & 1) != 0) {
  STACKTOP = i5;
  return;
 }
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i1 & 64 | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 L7 : do {
  if ((i1 & 25165824 | 0) == 16777216) {
   if ((i1 & 768 | 0) == 256) {
    i8 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i8 = HEAP32[i2 + 36 >> 2] | 0;
   }
   switch ((HEAP32[i8 + 48 >> 2] | 0) >>> 5 & 31 | 0) {
   case 0:
   case 19:
   case 17:
   case 7:
   case 5:
   case 21:
    {
     break L7;
     break;
    }
   default:
    {}
   }
   if ((HEAP32[(__ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i2, 0, 0) | 0) + 24 >> 2] & 4 | 0) != 0) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP8[i7] = 1;
 i7 = __Znwj(24) | 0;
 i8 = i7;
 __ZN7WebCore7BidiRunC1EiiRNS_12RenderObjectEPNS_11BidiContextE14UCharDirection(i8, i3, 0, i2, HEAP32[i4 + 76 >> 2] | 0, HEAP32[i4 + 80 >> 2] | 0);
 HEAP32[i6 >> 2] = i8;
 i3 = i4 + 124 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  HEAP32[i3 >> 2] = i8;
  i9 = i4 + 128 | 0;
 } else {
  i3 = i4 + 128 | 0;
  HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] = i7;
  i9 = i3;
 }
 HEAP32[i9 >> 2] = i8;
 i8 = i4 + 136 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 i8 = i4 + 168 | 0;
 i9 = i4 + 176 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 if ((i3 | 0) == (HEAP32[i4 + 172 >> 2] | 0)) {
  i7 = i3 + 1 | 0;
  i1 = i8 | 0;
  i10 = HEAP32[i1 >> 2] | 0;
  do {
   if (i10 >>> 0 > i6 >>> 0) {
    i11 = 16;
   } else {
    if ((i10 + (i3 << 2) | 0) >>> 0 <= i6 >>> 0) {
     i11 = 16;
     break;
    }
    __ZN3WTF6VectorIPN7WebCore7BidiRunELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, i7);
    i12 = HEAP32[i1 >> 2] | 0;
    i13 = i12 + (i6 - i10 >> 2 << 2) | 0;
    i14 = i12;
   }
  } while (0);
  if ((i11 | 0) == 16) {
   __ZN3WTF6VectorIPN7WebCore7BidiRunELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, i7);
   i13 = i6;
   i14 = HEAP32[i1 >> 2] | 0;
  }
  HEAP32[i14 + (HEAP32[i9 >> 2] << 2) >> 2] = HEAP32[i13 >> 2];
 } else {
  HEAP32[(HEAP32[i8 >> 2] | 0) + (i3 << 2) >> 2] = HEAP32[i6 >> 2];
 }
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 i9 = i4 + 160 | 0;
 if ((HEAP8[i9] & 1) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i4 + 156 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i4 + 148 >> 2] | 0) >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 if ((HEAP32[(HEAP32[i4 + 140 >> 2] | 0) + (i3 << 4) + 4 >> 2] | 0) != (i2 | 0)) {
  STACKTOP = i5;
  return;
 }
 HEAP8[i9] = 0;
 HEAP32[i6 >> 2] = i3 + 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11LineBreaker22skipTrailingWhitespaceERNS_14InlineIteratorERKNS_8LineInfoE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i2 + 4 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i1 | 0;
 i1 = i7 | 0;
 i10 = i6 | 0;
 i11 = i5 | 0;
 i12 = i2 + 12 | 0;
 i13 = i2 | 0;
 i14 = i2 + 8 | 0;
 while (1) {
  if (__ZN7WebCore15requiresLineBoxERKNS_14InlineIteratorERKNS_8LineInfoENS_18WhitespacePositionE(i2, i3, 1) | 0) {
   i15 = 20;
   break;
  }
  i16 = HEAP32[i8 >> 2] | 0;
  i17 = HEAP32[i16 + 20 >> 2] | 0;
  do {
   if ((i17 & 25165824 | 0) == 16777216) {
    i18 = HEAP32[i9 >> 2] | 0;
    i19 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i16, 0, 0) | 0;
    i20 = (HEAP32[(HEAP32[i18 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if ((i20 | 0) == 3 | (i20 | 0) == 0) {
     i21 = i18 + 56 | 0;
    } else {
     i21 = i18 + 52 | 0;
    }
    i20 = HEAP32[i21 >> 2] | 0;
    if ((HEAP32[i19 + 24 >> 2] & 4 | 0) != 0) {
     i22 = i19 + 40 | 0;
     i19 = HEAP32[i22 >> 2] | 0;
     HEAP32[i10 >> 2] = i20;
     __ZN7WebCore15RenderBlockFlow25startAlignedOffsetForLineENS_10LayoutUnitEb(i5, i18, i6, 0);
     HEAP32[i19 + 164 >> 2] = HEAP32[i11 >> 2];
     HEAP32[(HEAP32[i22 >> 2] | 0) + 168 >> 2] = i20;
    }
    HEAP32[i1 >> 2] = i20;
    __ZN7WebCore15RenderBlockFlow34updateStaticInlinePositionForChildERNS_9RenderBoxENS_10LayoutUnitE(i18, i16, i7);
    HEAP32[(HEAP32[i16 + 40 >> 2] | 0) + 168 >> 2] = i20;
   } else {
    if ((i17 & 64 | 0) == 0) {
     break;
    }
    __ZN7WebCore15RenderBlockFlow20insertFloatingObjectERNS_9RenderBoxE(HEAP32[i9 >> 2] | 0, i16) | 0;
   }
  } while (0);
  i16 = HEAP32[i8 >> 2] | 0;
  if ((i16 | 0) == 0) {
   i15 = 21;
   break;
  }
  if ((HEAP32[i16 + 20 >> 2] & 768 | 0) == 256) {
   i17 = (HEAP32[i12 >> 2] | 0) + 1 | 0;
   HEAP32[i12 >> 2] = i17;
   if (i17 >>> 0 < (HEAP32[(HEAP32[i16 + 44 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
    i23 = i16;
   } else {
    i15 = 17;
   }
  } else {
   i15 = 17;
  }
  if ((i15 | 0) == 17) {
   i15 = 0;
   i17 = __ZN7WebCoreL28bidiNextSkippingEmptyInlinesINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_(HEAP32[i13 >> 2] | 0, i16, 0) | 0;
   HEAP32[i8 >> 2] = i17;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i14 >> 2] = -1;
   i23 = i17;
  }
  if ((i23 | 0) == 0) {
   i15 = 22;
   break;
  }
 }
 if ((i15 | 0) == 20) {
  STACKTOP = i4;
  return;
 } else if ((i15 | 0) == 21) {
  STACKTOP = i4;
  return;
 } else if ((i15 | 0) == 22) {
  STACKTOP = i4;
  return;
 }
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
function __ZN7WebCore36shouldSkipWhitespaceAfterStartObjectERNS_15RenderBlockFlowEPNS_12RenderObjectERNS_13MidpointStateINS_14InlineIteratorEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = i1 | 0;
 i1 = __ZN7WebCoreL28bidiNextSkippingEmptyInlinesINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_(i4, i2, 0) | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 } else {
  i6 = i1;
 }
 while (1) {
  i7 = HEAP32[i6 + 20 >> 2] | 0;
  if (!((i7 & 64 | 0) != 0 | (i7 & 25165824 | 0) == 16777216)) {
   break;
  }
  i1 = __ZN7WebCoreL28bidiNextSkippingEmptyInlinesINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_(i4, i6, 0) | 0;
  if ((i1 | 0) == 0) {
   i5 = 0;
   i8 = 24;
   break;
  } else {
   i6 = i1;
  }
 }
 if ((i8 | 0) == 24) {
  return i5 | 0;
 }
 if ((i7 & 768 | 0) != 256) {
  i5 = 0;
  return i5 | 0;
 }
 i7 = HEAP32[i6 + 44 >> 2] | 0;
 if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
  i9 = HEAP16[HEAP32[i7 + 8 >> 2] >> 1] | 0;
 } else {
  i9 = HEAPU8[HEAP32[i7 + 8 >> 2] | 0] | 0;
 }
 i7 = HEAP32[(HEAP32[i6 + 8 >> 2] | 0) + 36 >> 2] | 0;
 i6 = i9 & 65535;
 do {
  if ((i6 | 0) == 10) {
   i9 = HEAP32[i7 + 44 >> 2] & 7;
   if ((i9 | 0) == 4 | (i9 | 0) == 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  } else if ((i6 | 0) == 32 | (i6 | 0) == 9) {
   if (((HEAP32[i7 + 44 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  } else {
   i5 = 0;
   return i5 | 0;
  }
 } while (0);
 i7 = i3 | 0;
 i6 = i3 + 8 | 0;
 i9 = i3 + 12 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 if ((HEAP32[i6 >> 2] | 0) >>> 0 > i8 >>> 0) {
  i10 = i8;
  i11 = i3 | 0;
 } else {
  i4 = i8 + 10 | 0;
  if ((HEAP32[i3 + 4 >> 2] | 0) >>> 0 < i4 >>> 0) {
   __ZN3WTF6VectorIN7WebCore14InlineIteratorELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i7, i4);
  }
  i7 = i3 | 0;
  i3 = HEAP32[i7 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i8 = HEAP32[i6 >> 2] | 0;
    i1 = i3 + (i4 << 4) | 0;
    if ((i8 | 0) == (i4 | 0)) {
     break;
    }
    i12 = i3 + (i8 << 4) | 0;
    while (1) {
     HEAP32[i12 >> 2] = 0;
     HEAP32[i12 + 4 >> 2] = 0;
     HEAP32[i12 + 8 >> 2] = -1;
     HEAP32[i12 + 12 >> 2] = 0;
     i12 = i12 + 16 | 0;
     if ((i12 | 0) == (i1 | 0)) {
      break;
     }
    }
   }
  } while (0);
  HEAP32[i6 >> 2] = i4;
  i10 = HEAP32[i9 >> 2] | 0;
  i11 = i7;
 }
 i7 = HEAP32[i11 >> 2] | 0;
 HEAP32[i9 >> 2] = i10 + 1;
 HEAP32[i7 + (i10 << 4) >> 2] = 0;
 HEAP32[i7 + (i10 << 4) + 4 >> 2] = i2;
 HEAP32[i7 + (i10 << 4) + 8 >> 2] = -1;
 HEAP32[i7 + (i10 << 4) + 12 >> 2] = 0;
 i5 = 1;
 return i5 | 0;
}
function __ZN7WebCore15BreakingContext17handleEmptyInlineEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i1 + 12 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i9;
 do {
  if (__ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE(i10) | 0) {
   if (!(__ZN7WebCore40hasInlineDirectionBordersPaddingOrMarginERKNS_12RenderInlineE(i10) | 0)) {
    i11 = 3;
    break;
   }
   __ZN7WebCore8LineInfo8setEmptyEbPNS_11RenderBlockEPNS_9LineWidthE(HEAP32[i1 + 76 >> 2] | 0, 0, HEAP32[i1 + 56 >> 2] | 0, i1 + 88 | 0);
   i11 = 5;
  } else {
   i11 = 3;
  }
 } while (0);
 if ((i11 | 0) == 3) {
  if (__ZN7WebCore25requiresLineBoxForContentERKNS_12RenderInlineERKNS_8LineInfoE(i10, HEAP32[i1 + 76 >> 2] | 0) | 0) {
   i11 = 5;
  }
 }
 L6 : do {
  if ((i11 | 0) == 5) {
   i12 = i1 + 146 | 0;
   if ((HEAP8[i12] & 1) != 0) {
    HEAP32[i1 + 164 >> 2] = 0;
    HEAP32[i1 + 176 >> 2] = 0;
    __ZN7WebCore13MidpointStateINS_14InlineIteratorEE32ensureLineBoxInsideIgnoredSpacesEPNS_12RenderObjectE(HEAP32[i1 + 160 >> 2] | 0, HEAP32[i8 >> 2] | 0);
    break;
   }
   do {
    if (((HEAP32[(HEAP32[i1 + 72 >> 2] | 0) + 44 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0) {
     i13 = HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 4 >> 2] | 0;
     if ((i13 | 0) != (HEAP32[i8 >> 2] | 0)) {
      break;
     }
     if (!(__ZN7WebCore36shouldSkipWhitespaceAfterStartObjectERNS_15RenderBlockFlowEPNS_12RenderObjectERNS_13MidpointStateINS_14InlineIteratorEEE(HEAP32[i1 + 56 >> 2] | 0, i13, HEAP32[i1 + 160 >> 2] | 0) | 0)) {
      break;
     }
     HEAP8[i1 + 147 | 0] = 1;
     HEAP8[i1 + 148 | 0] = 1;
     HEAP8[i12] = 1;
     break L6;
    }
   } while (0);
   __ZN7WebCore15TrailingObjects17appendBoxIfNeededEPNS_20RenderBoxModelObjectE(i1 + 164 | 0, i9);
  }
 } while (0);
 __ZN7WebCore18inlineLogicalWidthEPNS_12RenderObjectEbb(i7, HEAP32[i8 >> 2] | 0, 1, 1);
 __ZNK7WebCore12RenderInline11marginStartEPKNS_11RenderStyleE(i3, i10, 0);
 i8 = i9;
 i11 = i9;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 728 >> 2] & 1](i4, i8);
 i12 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0;
 i3 = i9;
 i9 = i12 + (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 760 >> 2] & 1](i8) | 0) | 0;
 i12 = i9 + (HEAP32[i7 >> 2] | 0) | 0;
 __ZNK7WebCore12RenderInline9marginEndEPKNS_11RenderStyleE(i5, i10, 0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 732 >> 2] & 1](i6, i8);
 i11 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 d14 = +(i12 + i11 + i5 + (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 764 >> 2] & 1](i8) | 0) | 0);
 i8 = i1 + 92 | 0;
 HEAPF32[i8 >> 2] = d14 + +HEAPF32[i8 >> 2];
 STACKTOP = i2;
 return;
}
function __ZN7WebCore13MidpointStateINS_14InlineIteratorEE32ensureLineBoxInsideIgnoredSpacesEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = i1 | 0;
 i4 = i1 + 8 | 0;
 i5 = i1 + 12 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i4 >> 2] | 0) >>> 0 > i6 >>> 0) {
  i7 = i6;
  i8 = i1 | 0;
 } else {
  i9 = i6 + 10 | 0;
  if ((HEAP32[i1 + 4 >> 2] | 0) >>> 0 < i9 >>> 0) {
   __ZN3WTF6VectorIN7WebCore14InlineIteratorELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i9);
  }
  i6 = i1 | 0;
  i10 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i10 | 0) != 0) {
    i11 = HEAP32[i4 >> 2] | 0;
    i12 = i10 + (i9 << 4) | 0;
    if ((i11 | 0) == (i9 | 0)) {
     break;
    }
    i13 = i10 + (i11 << 4) | 0;
    while (1) {
     HEAP32[i13 >> 2] = 0;
     HEAP32[i13 + 4 >> 2] = 0;
     HEAP32[i13 + 8 >> 2] = -1;
     HEAP32[i13 + 12 >> 2] = 0;
     i13 = i13 + 16 | 0;
     if ((i13 | 0) == (i12 | 0)) {
      break;
     }
    }
   }
  } while (0);
  HEAP32[i4 >> 2] = i9;
  i7 = HEAP32[i5 >> 2] | 0;
  i8 = i6;
 }
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i5 >> 2] = i7 + 1;
 HEAP32[i6 + (i7 << 4) >> 2] = 0;
 HEAP32[i6 + (i7 << 4) + 4 >> 2] = i2;
 HEAP32[i6 + (i7 << 4) + 8 >> 2] = -1;
 HEAP32[i6 + (i7 << 4) + 12 >> 2] = 0;
 i7 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i4 >> 2] | 0) >>> 0 > i7 >>> 0) {
  i14 = i7;
  i15 = i1 | 0;
  i16 = HEAP32[i15 >> 2] | 0;
  i17 = i14 + 1 | 0;
  HEAP32[i5 >> 2] = i17;
  i18 = i16 + (i14 << 4) | 0;
  HEAP32[i18 >> 2] = 0;
  i19 = i16 + (i14 << 4) + 4 | 0;
  HEAP32[i19 >> 2] = i2;
  i20 = i16 + (i14 << 4) + 8 | 0;
  HEAP32[i20 >> 2] = -1;
  i21 = i16 + (i14 << 4) + 12 | 0;
  HEAP32[i21 >> 2] = 0;
  return;
 }
 i6 = i7 + 10 | 0;
 if ((HEAP32[i1 + 4 >> 2] | 0) >>> 0 < i6 >>> 0) {
  __ZN3WTF6VectorIN7WebCore14InlineIteratorELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i6);
 }
 i3 = i1 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i7 = HEAP32[i4 >> 2] | 0;
   i8 = i1 + (i6 << 4) | 0;
   if ((i7 | 0) == (i6 | 0)) {
    break;
   }
   i9 = i1 + (i7 << 4) | 0;
   while (1) {
    HEAP32[i9 >> 2] = 0;
    HEAP32[i9 + 4 >> 2] = 0;
    HEAP32[i9 + 8 >> 2] = -1;
    HEAP32[i9 + 12 >> 2] = 0;
    i9 = i9 + 16 | 0;
    if ((i9 | 0) == (i8 | 0)) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i4 >> 2] = i6;
 i14 = HEAP32[i5 >> 2] | 0;
 i15 = i3;
 i16 = HEAP32[i15 >> 2] | 0;
 i17 = i14 + 1 | 0;
 HEAP32[i5 >> 2] = i17;
 i18 = i16 + (i14 << 4) | 0;
 HEAP32[i18 >> 2] = 0;
 i19 = i16 + (i14 << 4) + 4 | 0;
 HEAP32[i19 >> 2] = i2;
 i20 = i16 + (i14 << 4) + 8 | 0;
 HEAP32[i20 >> 2] = -1;
 i21 = i16 + (i14 << 4) + 12 | 0;
 HEAP32[i21 >> 2] = 0;
 return;
}
function __ZN7WebCore40hasInlineDirectionBordersPaddingOrMarginERKNS_12RenderInlineE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i1 | 0;
 i8 = i1 + 8 | 0;
 do {
  if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(HEAP32[i8 >> 2] | 0) | 0) {
   i9 = HEAP32[i1 + 20 >> 2] | 0;
   if ((i9 & 128 | 0) != 0) {
    i10 = 9;
    break;
   }
   i11 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i10 = 9;
    break;
   }
   i12 = i11 + 32 | 0;
   if ((HEAP32[i11 + 12 >> 2] & 2048 | 0) == 0) {
    i13 = i12 | 0;
   } else {
    i13 = HEAP32[i12 >> 2] | 0;
   }
   if ((HEAP32[i13 >> 2] | 0) == (i7 | 0)) {
    i10 = 9;
    break;
   }
   if ((i9 & 1024 | 0) == 0) {
    i10 = 9;
   }
  } else {
   i10 = 9;
  }
 } while (0);
 do {
  if ((i10 | 0) == 9) {
   i13 = i1 | 0;
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 760 >> 2] & 1](i13) | 0) != 0) {
    i14 = 1;
    STACKTOP = i2;
    return i14 | 0;
   }
   __ZNK7WebCore12RenderInline11marginStartEPKNS_11RenderStyleE(i3, i1, 0);
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    i14 = 1;
    STACKTOP = i2;
    return i14 | 0;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 728 >> 2] & 1](i4, i13);
   if ((HEAP32[i4 >> 2] | 0) == 0) {
    break;
   } else {
    i14 = 1;
   }
   STACKTOP = i2;
   return i14 | 0;
  }
 } while (0);
 L20 : do {
  if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(HEAP32[i8 >> 2] | 0) | 0) {
   i4 = HEAP32[i1 + 20 >> 2] | 0;
   do {
    if ((i4 & 128 | 0) == 0) {
     i3 = HEAP32[i1 + 4 >> 2] | 0;
     if ((i3 | 0) == 0) {
      break;
     }
     i10 = i3 + 32 | 0;
     if ((HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0) {
      i15 = i10 | 0;
     } else {
      i15 = HEAP32[i10 >> 2] | 0;
     }
     if ((HEAP32[i15 >> 2] | 0) == (i7 | 0)) {
      break;
     }
     if ((i4 & 1024 | 0) != 0) {
      break L20;
     }
    }
   } while (0);
   if ((__ZNK7WebCore12RenderInline25inlineElementContinuationEv(i1) | 0) == 0) {
    break;
   } else {
    i14 = 0;
   }
   STACKTOP = i2;
   return i14 | 0;
  }
 } while (0);
 i7 = i1 | 0;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 764 >> 2] & 1](i7) | 0) != 0) {
  i14 = 1;
  STACKTOP = i2;
  return i14 | 0;
 }
 __ZNK7WebCore12RenderInline9marginEndEPKNS_11RenderStyleE(i5, i1, 0);
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  i14 = 1;
  STACKTOP = i2;
  return i14 | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 732 >> 2] & 1](i6, i7);
 i14 = (HEAP32[i6 >> 2] | 0) != 0;
 STACKTOP = i2;
 return i14 | 0;
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
function __ZN7WebCore15BreakingContextC2ERNS_11LineBreakerERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERNS_8LineInfoERNS_9LineWidthERNS_14RenderTextInfoEPNS_14FloatingObjectEbRNS_15RenderBlockFlowE(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 i2 = i1 + 8 | 0;
 i10 = i3;
 HEAP32[i2 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 i2 = i1 + 24 | 0;
 HEAP32[i2 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[i1 + 44 >> 2] = 0;
 HEAP32[i1 + 48 >> 2] = -1;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP32[i1 + 56 >> 2] = i9;
 HEAP32[i1 + 60 >> 2] = HEAP32[i1 + 12 >> 2];
 HEAP32[i1 + 64 >> 2] = 0;
 HEAP32[i1 + 68 >> 2] = 0;
 i10 = i1 + 72 | 0;
 HEAP32[i10 >> 2] = HEAP32[i9 + 36 >> 2];
 i2 = i1 + 76 | 0;
 HEAP32[i2 >> 2] = i4;
 HEAP32[i1 + 80 >> 2] = i6;
 HEAP32[i1 + 84 >> 2] = i7;
 _memcpy(i1 + 88 | 0, i5 | 0, 48) | 0;
 HEAP32[i1 + 136 >> 2] = 0;
 HEAP32[i1 + 140 >> 2] = 0;
 HEAP8[i1 + 144 | 0] = 0;
 HEAP8[i1 + 145 | 0] = 1;
 HEAP8[i1 + 146 | 0] = 0;
 HEAP8[i1 + 147 | 0] = 0;
 HEAP8[i1 + 148 | 0] = 0;
 HEAP8[i1 + 149 | 0] = i8 & 1;
 HEAP8[i1 + 150 | 0] = 1;
 HEAP8[i1 + 151 | 0] = 0;
 HEAP8[i1 + 152 | 0] = 0;
 HEAP8[i1 + 153 | 0] = 1;
 HEAP8[i1 + 154 | 0] = 0;
 HEAP8[i1 + 155 | 0] = HEAP8[i4 + 3 | 0] & 1;
 i4 = i1 + 156 | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) == 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 188 >> 2] & 1](i9 | 0) | 0)) {
    i11 = 1;
    break;
   }
   i8 = HEAP32[i10 >> 2] | 0;
   i5 = (HEAP32[i8 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i5 | 0) == 3 | (i5 | 0) == 0) {
    i12 = (HEAP32[i8 + 4 >> 2] | 0) + 4 | 0;
   } else {
    i12 = (HEAP32[i8 + 4 >> 2] | 0) + 12 | 0;
   }
   i8 = HEAP8[i12 + 5 | 0] | 0;
   if (i8 << 24 >> 24 == 0 | (i8 - 4 & 255) >>> 0 < 2 >>> 0) {
    i11 = 0;
    break;
   }
   i11 = ((i8 & 255) - 6 | 0) >>> 0 > 3 >>> 0 | 0;
  } else {
   i11 = 1;
  }
 } while (0);
 HEAP8[i4] = i11;
 HEAP8[i1 + 157 | 0] = 0;
 HEAP8[i1 + 158 | 0] = 0;
 HEAP32[i1 + 160 >> 2] = i3 + 140;
 HEAP32[i1 + 164 >> 2] = 0;
 HEAP32[i1 + 168 >> 2] = i1 + 180;
 HEAP32[i1 + 172 >> 2] = 4;
 HEAP32[i1 + 176 >> 2] = 0;
 HEAP8[(HEAP32[i2 >> 2] | 0) + 3 | 0] = 0;
 return;
}
function __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE27raiseExplicitEmbeddingLevelE14UCharDirectionS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = i1 + 120 | 0;
 do {
  if ((HEAP8[i4] & 1) == 0) {
   i5 = i1 + 32 | 0;
   i6 = i1 + 48 | 0;
   i7 = i1 + 44 | 0;
   if ((HEAP32[i7 >> 2] | 0) == (HEAP32[i1 + 60 >> 2] | 0)) {
    if ((HEAP32[i1 + 36 >> 2] | 0) == (HEAP32[i1 + 52 >> 2] | 0)) {
     i8 = i7;
     break;
    }
   }
   i9 = i1 + 80 | 0;
   if ((HEAP32[i9 >> 2] | 0) == 10) {
    HEAP32[i9 >> 2] = (HEAP32[i1 + 68 >> 2] | 0) != 0;
   }
   i10 = HEAP32[i1 + 64 >> 2] | 0;
   do {
    if ((i3 | 0) == 0) {
     if ((i10 | 0) == 2) {
      if ((HEAP32[i1 + 68 >> 2] | 0) == 0) {
       break;
      }
      HEAP32[i9 >> 2] = 2;
      __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
      break;
     } else if ((i10 | 0) == 5) {
      HEAP32[i9 >> 2] = 5;
      __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
      break;
     } else {
      if (!((HEAP32[i1 + 68 >> 2] | 0) != 0 & (i2 | 0) == 0)) {
       break;
      }
      __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
      HEAP32[i9 >> 2] = 0;
      break;
     }
    } else {
     if ((i10 | 0) == 2) {
      if (!((HEAP32[i1 + 68 >> 2] | 0) != 0 | (i2 | 0) == 1)) {
       break;
      }
     } else if ((i10 | 0) != 5) {
      if (!((HEAP32[i1 + 68 >> 2] | 0) == 0 & (i2 | 0) == 1)) {
       break;
      }
     }
     __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
     HEAP32[i9 >> 2] = 1;
    }
   } while (0);
   i9 = i5;
   i10 = i6;
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i9 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
   HEAP32[i9 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
   HEAP32[i9 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
   i8 = i7;
  } else {
   i8 = i1 + 44 | 0;
  }
 } while (0);
 __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
 HEAP8[i4] = 1;
 HEAP32[i1 + 72 >> 2] = i3;
 HEAP32[i1 + 68 >> 2] = i3;
 HEAP32[i1 + 32 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = -1;
 HEAP32[i8 >> 2] = 0;
 return;
}
function __ZN7WebCore15BreakingContext26initializeForCurrentObjectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 HEAP8[i1 + 158 | 0] = +HEAPF32[i1 + 92 >> 2] != +0 | 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i3 + 20 >> 2] & 768 | 0) == 256) {
  i4 = HEAP32[(HEAP32[i3 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i4 = HEAP32[i3 + 36 >> 2] | 0;
 }
 i5 = i1 + 68 | 0;
 HEAP32[i5 >> 2] = i4;
 i4 = __ZN7WebCoreL28bidiNextSkippingEmptyInlinesINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_(HEAP32[i1 + 56 >> 2] | 0, i3, 0) | 0;
 HEAP32[i1 + 64 >> 2] = i4;
 do {
  if ((i4 | 0) != 0) {
   i3 = HEAP32[i4 + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if (__ZNK7WebCore12RenderObject14isDescendantOfEPKS0_(i3 | 0, HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] | 0) | 0) {
    break;
   }
   HEAP8[i1 + 150 | 0] = 1;
  }
 } while (0);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i4 + 20 >> 2] & 2048 | 0) == 0) {
  i6 = i5;
 } else {
  i6 = (HEAP32[i4 + 8 >> 2] | 0) + 36 | 0;
 }
 i5 = HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] & 7;
 i6 = i1 + 136 | 0;
 HEAP32[i6 >> 2] = i5;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 i3 = HEAP32[i2 + 20 >> 2] | 0;
 do {
  if ((i3 & 2048 | 0) == 0) {
   if ((i3 & 768 | 0) == 256) {
    i7 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i7 = HEAP32[i2 + 36 >> 2] | 0;
    break;
   }
  } else {
   i7 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
  }
 } while (0);
 HEAP32[i1 + 140 >> 2] = HEAP32[i7 + 44 >> 2] & 7;
 i7 = (i5 | 0) != 1 & (i5 | 0) != 4 & 1;
 HEAP8[i1 + 151 | 0] = i7;
 i5 = i1 + 152 | 0;
 HEAP8[i5] = (HEAP8[i5] & 1) == 0 ? i7 : 1;
 i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 368 >> 2] & 1](i4) | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 if (i7) {
  i8 = 0;
  i9 = i1 + 144 | 0;
  HEAP8[i9] = i8;
  i10 = i4 - 1 | 0;
  i11 = i10 >>> 0 > 1 >>> 0;
  i12 = i1 + 154 | 0;
  i13 = i11 & 1;
  HEAP8[i12] = i13;
  return;
 }
 i8 = (i4 | 0) != 4 & (i4 | 0) != 0 & 1;
 i9 = i1 + 144 | 0;
 HEAP8[i9] = i8;
 i10 = i4 - 1 | 0;
 i11 = i10 >>> 0 > 1 >>> 0;
 i12 = i1 + 154 | 0;
 i13 = i11 & 1;
 HEAP8[i12] = i13;
 return;
}
function __ZN7WebCore15BreakingContext32commitAndUpdateLineBreakIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 do {
  if (__ZN7WebCore15BreakingContext22canBreakAtThisPositionEv(i1) | 0) {
   i2 = i1 + 88 | 0;
   i3 = i1 + 146 | 0;
   if (__ZNK7WebCore9LineWidth10fitsOnLineEb(i2, (HEAP8[i3] & 1) != 0) | 0) {
    i4 = 11;
    break;
   }
   do {
    if ((HEAP8[i1 + 147 | 0] & 1) != 0) {
     if ((HEAP8[i3] & 1) != 0) {
      break;
     }
     if (((HEAP32[(HEAP32[i1 + 68 >> 2] | 0) + 44 >> 2] & 7) - 1 | 0) >>> 0 <= 1 >>> 0) {
      break;
     }
     HEAP32[i1 + 164 >> 2] = 0;
     HEAP32[i1 + 176 >> 2] = 0;
    }
   } while (0);
   if (+HEAPF32[i1 + 96 >> 2] != +0) {
    HEAP8[i1 + 157 | 0] = 1;
    return;
   }
   __ZN7WebCore9LineWidth14fitBelowFloatsEv(i2);
   if (__ZNK7WebCore9LineWidth10fitsOnLineEb(i2, (HEAP8[i3] & 1) != 0) | 0) {
    break;
   }
   HEAP8[i1 + 157 | 0] = 1;
   return;
  } else {
   i4 = 11;
  }
 } while (0);
 do {
  if ((i4 | 0) == 11) {
   i5 = HEAP32[(HEAP32[i1 + 72 >> 2] | 0) + 44 >> 2] & 7;
   if ((i5 | 0) == 4 | (i5 | 0) == 1) {
    break;
   }
   i5 = i1 + 88 | 0;
   if (__ZNK7WebCore9LineWidth10fitsOnLineEb(i5, 0) | 0) {
    break;
   }
   if (+HEAPF32[i1 + 96 >> 2] != +0) {
    break;
   }
   __ZN7WebCore9LineWidth14fitBelowFloatsEv(i5);
  }
 } while (0);
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i5 = i4 + 20 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 & 64 | 0) != 0 | (i6 & 25165824 | 0) == 16777216) {
  return;
 }
 i6 = i1 + 60 | 0;
 HEAP32[i6 >> 2] = i4;
 if ((HEAP32[i5 >> 2] & 2048 | 0) == 0) {
  return;
 }
 if ((HEAP8[i1 + 151 | 0] & 1) == 0) {
  return;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 92 >> 2] & 1](i4) | 0) {
   if ((HEAP8[i1 + 156 | 0] & 1) != 0) {
    break;
   }
   return;
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 108 >> 2] & 1](i4) | 0) {
   if (__ZNK7WebCore16RenderListMarker8isInsideEv(HEAP32[i6 >> 2] | 0) | 0) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore9LineWidth6commitEv(i1 + 88 | 0);
 HEAP32[i1 + 28 >> 2] = HEAP32[i1 + 64 >> 2];
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = -1;
 return;
}
function __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE27lowerExplicitEmbeddingLevelE14UCharDirection(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 120 | 0;
 do {
  if ((HEAP8[i3] & 1) == 0) {
   i4 = i1 + 32 | 0;
   i5 = i1 + 48 | 0;
   i6 = i1 + 44 | 0;
   if ((HEAP32[i6 >> 2] | 0) == (HEAP32[i1 + 60 >> 2] | 0)) {
    if ((HEAP32[i1 + 36 >> 2] | 0) == (HEAP32[i1 + 52 >> 2] | 0)) {
     i7 = i6;
     break;
    }
   }
   i8 = i1 + 80 | 0;
   if ((HEAP32[i8 >> 2] | 0) == 10) {
    HEAP32[i8 >> 2] = (HEAP32[i1 + 68 >> 2] | 0) != 0;
   }
   i9 = HEAP32[i1 + 64 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     if ((i9 | 0) == 2) {
      if ((HEAP32[i1 + 68 >> 2] | 0) == 0) {
       break;
      }
      HEAP32[i8 >> 2] = 2;
      __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
      break;
     } else if ((i9 | 0) == 5) {
      HEAP32[i8 >> 2] = 5;
      __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
      break;
     } else {
      if ((HEAP32[i1 + 68 >> 2] | 0) == 0) {
       break;
      }
      __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
      HEAP32[i8 >> 2] = 0;
      break;
     }
    } else {
     if (!((i9 | 0) == 5 | (i9 | 0) == 2)) {
      if ((HEAP32[i1 + 68 >> 2] | 0) != 0) {
       break;
      }
     }
     __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
     HEAP32[i8 >> 2] = 1;
    }
   } while (0);
   i8 = i4;
   i9 = i5;
   HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
   HEAP32[i8 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
   HEAP32[i8 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
   i7 = i6;
  } else {
   i7 = i1 + 44 | 0;
  }
 } while (0);
 __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
 HEAP8[i3] = 1;
 HEAP32[i1 + 72 >> 2] = i2;
 HEAP32[i1 + 68 >> 2] = i2;
 HEAP32[i1 + 32 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = -1;
 HEAP32[i7 >> 2] = 0;
 return;
}
function __ZN7WebCore21LazyLineBreakIterator3getEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((i2 | 0) == 0) {
  i5 = 0;
 } else {
  i5 = i1 + 12 + (2 - i2 << 1) | 0;
 }
 i6 = i1 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = HEAP32[i1 >> 2] | 0;
  i9 = (i8 | 0) == 0;
  if ((HEAP32[i8 + 16 >> 2] & 32 | 0) == 0) {
   if (i9) {
    i10 = 0;
    i11 = 0;
   } else {
    i10 = HEAP32[i8 + 4 >> 2] | 0;
    i11 = HEAP32[i8 + 8 >> 2] | 0;
   }
   i12 = __ZN7WebCore24acquireLineBreakIteratorEPKtiRKN3WTF12AtomicStringES1_j(i11, i10, i1 + 4 | 0, i5, i2) | 0;
  } else {
   if (i9) {
    i13 = 0;
    i14 = 0;
   } else {
    i13 = HEAP32[i8 + 4 >> 2] | 0;
    i14 = HEAP32[i8 + 8 >> 2] | 0;
   }
   i12 = __ZN7WebCore24acquireLineBreakIteratorEPKhiRKN3WTF12AtomicStringEPKtj(i14, i13, i1 + 4 | 0, i5, i2) | 0;
  }
  HEAP32[i6 >> 2] = i12;
  HEAP32[i1 + 16 >> 2] = i5;
  HEAP32[i1 + 20 >> 2] = i2;
  i15 = i12;
  STACKTOP = i3;
  return i15 | 0;
 }
 do {
  if ((i5 | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
   if ((HEAP32[i1 + 20 >> 2] | 0) == (i2 | 0)) {
    i15 = i7;
   } else {
    break;
   }
   STACKTOP = i3;
   return i15 | 0;
  }
 } while (0);
 i7 = i4 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i7 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i12 = i5 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 __ZN7WebCore21LazyLineBreakIterator29resetStringAndReleaseIteratorEN3WTF6StringERKNS1_12AtomicStringE(i1, i4, i1 + 4 | 0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i12 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i15 = __ZN7WebCore21LazyLineBreakIterator3getEj(i1, i2) | 0;
 STACKTOP = i3;
 return i15 | 0;
}
function __ZN7WebCore14checkMidpointsERNS_13MidpointStateINS_14InlineIteratorEEERS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = i2 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 i4 = i1 + 12 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if (!((i5 | 0) != 0 & (i5 & 1 | 0) == 0)) {
  return;
 }
 i6 = HEAP32[i1 >> 2] | 0;
 i1 = i5 - 2 | 0;
 i7 = i5 - 1 | 0;
 i5 = HEAP32[i6 + (i1 << 4) >> 2] | 0;
 i8 = i6 + (i1 << 4) + 4 | 0;
 i9 = i6 + (i1 << 4) + 12 | 0;
 i1 = i6 + (i7 << 4) + 12 | 0;
 i10 = i6 + (i7 << 4) + 4 | 0;
 i7 = i2 + 12 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 while (1) {
  if ((i2 | 0) == 0) {
   i11 = 0;
   break;
  }
  if ((i6 | 0) == (HEAP32[i1 >> 2] | 0)) {
   if ((i2 | 0) == (HEAP32[i10 >> 2] | 0)) {
    i11 = i2;
    break;
   }
  }
  if ((i6 | 0) == (HEAP32[i7 >> 2] | 0)) {
   if ((i2 | 0) == (HEAP32[i3 >> 2] | 0)) {
    i11 = i2;
    break;
   }
  }
  if ((HEAP32[i2 + 20 >> 2] & 768 | 0) == 256) {
   i12 = i6 + 1 | 0;
   if (i12 >>> 0 < (HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
    i2 = i2;
    i6 = i12;
    continue;
   }
  }
  i2 = __ZN7WebCoreL28bidiNextSkippingEmptyInlinesINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_(i5, i2, 0) | 0;
  i6 = 0;
 }
 if ((i6 | 0) != (HEAP32[i7 >> 2] | 0)) {
  return;
 }
 if ((i11 | 0) != (HEAP32[i3 >> 2] | 0)) {
  return;
 }
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - 1;
 i4 = HEAP32[i8 >> 2] | 0;
 i8 = (HEAP32[i4 + 20 >> 2] & 768 | 0) == 256;
 if (i8) {
  i13 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i13 = HEAP32[i4 + 36 >> 2] | 0;
 }
 if (((HEAP32[i13 + 44 >> 2] & 7) - 1 | 0) >>> 0 < 2 >>> 0 | i8 ^ 1) {
  return;
 }
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) - 1;
 return;
}
function __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE5embedE14UCharDirectionNS_19BidiEmbeddingSourceE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5;
 i7 = i1 + 180 | 0;
 HEAP32[i5 >> 2] = i2;
 HEAP32[i6 + 4 >> 2] = i3;
 i3 = i1 + 188 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != (HEAP32[i1 + 184 >> 2] | 0)) {
  i1 = (HEAP32[i7 >> 2] | 0) + (i2 << 3) | 0;
  i8 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i1 + 4 >> 2] = i8;
  i9 = HEAP32[i3 >> 2] | 0;
  i10 = i9 + 1 | 0;
  HEAP32[i3 >> 2] = i10;
  STACKTOP = i4;
  return;
 }
 i8 = i2 + 1 | 0;
 i1 = i7 | 0;
 i11 = HEAP32[i1 >> 2] | 0;
 do {
  if (i11 >>> 0 > i6 >>> 0) {
   i12 = 5;
  } else {
   if ((i11 + (i2 << 3) | 0) >>> 0 <= i6 >>> 0) {
    i12 = 5;
    break;
   }
   i13 = i8 + (i2 >>> 2) | 0;
   i14 = i13 >>> 0 > 16 >>> 0 ? i13 : 16;
   __ZN3WTF6VectorIN7WebCore13BidiEmbeddingELj8ENS_15CrashOnOverflowEE15reserveCapacityEj(i7, i14 >>> 0 > i8 >>> 0 ? i14 : i8);
   i14 = HEAP32[i1 >> 2] | 0;
   i15 = i14 + (i5 - i11 >> 3 << 3) | 0;
   i16 = i14;
  }
 } while (0);
 if ((i12 | 0) == 5) {
  i12 = i8 + (i2 >>> 2) | 0;
  i2 = i12 >>> 0 > 16 >>> 0 ? i12 : 16;
  __ZN3WTF6VectorIN7WebCore13BidiEmbeddingELj8ENS_15CrashOnOverflowEE15reserveCapacityEj(i7, i2 >>> 0 > i8 >>> 0 ? i2 : i8);
  i15 = i6;
  i16 = HEAP32[i1 >> 2] | 0;
 }
 i1 = i15;
 i15 = i16 + (HEAP32[i3 >> 2] << 3) | 0;
 i16 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i15 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i15 + 4 >> 2] = i16;
 i9 = HEAP32[i3 >> 2] | 0;
 i10 = i9 + 1 | 0;
 HEAP32[i3 >> 2] = i10;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15BreakingContext11handleFloatEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 12 | 0;
 i3 = i1 | 0;
 i4 = __ZN7WebCore15RenderBlockFlow20insertFloatingObjectERNS_9RenderBoxE(HEAP32[HEAP32[i3 >> 2] >> 2] | 0, HEAP32[i2 >> 2] | 0) | 0;
 i5 = i1 + 153 | 0;
 do {
  if ((HEAP8[i5] & 1) == 0) {
   i6 = 7;
  } else {
   i7 = i1 + 88 | 0;
   if (!(__ZNK7WebCore9LineWidth37fitsOnLineExcludingTrailingWhitespaceEf(i7, +(HEAP32[((HEAP32[(HEAP32[i1 + 56 >> 2] | 0) + 20 >> 2] & 8192 | 0) == 0 ? i4 + 20 | 0 : i4 + 16 | 0) >> 2] | 0)) | 0)) {
    i6 = 7;
    break;
   }
   __ZN7WebCore15RenderBlockFlow22positionNewFloatOnLineEPNS_14FloatingObjectES2_RNS_8LineInfoERNS_9LineWidthE(HEAP32[HEAP32[i3 >> 2] >> 2] | 0, i4, HEAP32[i1 + 84 >> 2] | 0, HEAP32[i1 + 76 >> 2] | 0, i7) | 0;
   i7 = i1 + 28 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) != (HEAP32[i2 >> 2] | 0) | (i8 | 0) == 0) {
    break;
   }
   i9 = i1 + 36 | 0;
   if ((HEAP32[i8 + 20 >> 2] & 768 | 0) == 256) {
    i10 = (HEAP32[i9 >> 2] | 0) + 1 | 0;
    HEAP32[i9 >> 2] = i10;
    if (i10 >>> 0 < (HEAP32[(HEAP32[i8 + 44 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
     break;
    }
   }
   HEAP32[i7 >> 2] = __ZN7WebCoreL28bidiNextSkippingEmptyInlinesINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_(HEAP32[i1 + 24 >> 2] | 0, i8, 0) | 0;
   HEAP32[i9 >> 2] = 0;
   HEAP32[i1 + 32 >> 2] = -1;
  }
 } while (0);
 if ((i6 | 0) == 7) {
  HEAP8[i5] = 0;
 }
 i5 = HEAP32[i1 + 80 >> 2] | 0;
 i1 = i5 + 22 | 0;
 HEAP16[i5 + 20 >> 1] = HEAP16[i1 >> 1] | 0;
 HEAP16[i1 >> 1] = -3;
 return;
}
function __ZNK7WebCore12RenderObject16isAnonymousBlockEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 & 128 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = (i3 & 768 | 0) == 256;
 if (i5) {
  i6 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i6 = HEAP32[i1 + 36 >> 2] | 0;
 }
 do {
  if ((HEAP32[i6 + 48 >> 2] & 31 | 0) != 1) {
   if (i5) {
    i7 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i7 = HEAP32[i1 + 36 >> 2] | 0;
   }
   if ((HEAP32[i7 + 48 >> 2] & 31 | 0) == 16) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 if (i5) {
  i8 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i8 = HEAP32[i1 + 36 >> 2] | 0;
 }
 if ((HEAP32[i8 + 52 >> 2] & 4032 | 0) != 0 | i5) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 24 >> 2] & 16 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i1;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 108 >> 2] & 1](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 248 >> 2] & 1](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i2 >> 2] & 768 | 0) == 768) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 236 >> 2] & 1](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 240 >> 2] & 1](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 272 >> 2] & 1](i1) | 0) ^ 1;
 return i4 | 0;
}
function __ZN7WebCore15TrailingObjects17appendBoxIfNeededEPNS_20RenderBoxModelObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 + 4 | 0;
 i6 = i1 + 12 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != (HEAP32[i1 + 8 >> 2] | 0)) {
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i7 << 2) >> 2] = i2;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  STACKTOP = i3;
  return;
 }
 i2 = i7 + 1 | 0;
 i1 = i5 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if (i8 >>> 0 > i4 >>> 0) {
   i9 = 6;
  } else {
   if ((i8 + (i7 << 2) | 0) >>> 0 <= i4 >>> 0) {
    i9 = 6;
    break;
   }
   i10 = i2 + (i7 >>> 2) | 0;
   i11 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIPN7WebCore20RenderBoxModelObjectELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i5, i11 >>> 0 > i2 >>> 0 ? i11 : i2);
   i11 = HEAP32[i1 >> 2] | 0;
   i12 = i11 + (i4 - i8 >> 2 << 2) | 0;
   i13 = i11;
  }
 } while (0);
 if ((i9 | 0) == 6) {
  i9 = i2 + (i7 >>> 2) | 0;
  i7 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
  __ZN3WTF6VectorIPN7WebCore20RenderBoxModelObjectELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i5, i7 >>> 0 > i2 >>> 0 ? i7 : i2);
  i12 = i4;
  i13 = HEAP32[i1 >> 2] | 0;
 }
 HEAP32[i13 + (HEAP32[i6 >> 2] << 2) >> 2] = HEAP32[i12 >> 2];
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIN7WebCore16LineSegmentRangeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
 i1 = i2 + (i6 * 24 & -1) | 0;
 if (i5 >>> 0 > 178956970 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 * 24 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 24 & -1;
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
   HEAP32[i5 + 16 >> 2] = HEAP32[i8 + 16 >> 2];
   HEAP32[i5 + 20 >> 2] = HEAP32[i8 + 20 >> 2];
   i8 = i6 + 24 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
    i7 = i7 + 24 | 0;
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
function __ZN3WTF6VectorIN7WebCore13BidiEmbeddingELj8ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
  if (i2 >>> 0 > 8 >>> 0) {
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
   HEAP32[i3 >> 2] = 8;
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
function __ZN7WebCore21LazyLineBreakIterator29resetStringAndReleaseIteratorEN3WTF6StringERKNS1_12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore24releaseLineBreakIteratorEPNS_17TextBreakIteratorE(i5);
 }
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i5;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i3 = i6 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 4 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i6;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 return;
}
function __ZN3WTF6VectorIN7WebCore14InlineIteratorELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 L3 : while (1) {
  i2 = HEAP32[i4 + 20 >> 2] | 0;
  do {
   if (!((i2 & 64 | 0) != 0 | (i2 & 25165824 | 0) == 16777216)) {
    if ((i2 & 768 | 0) == 256) {
     if (__ZNK7WebCore10RenderText26isAllCollapsibleWhitespaceEv(i4) | 0) {
      break;
     } else {
      i3 = 0;
      i5 = 10;
      break L3;
     }
    }
    if ((HEAP32[i4 + 24 >> 2] & 4 | 0) == 0) {
     i3 = 0;
     i5 = 11;
     break L3;
    }
    if (!(__ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE(i4) | 0)) {
     i3 = 0;
     i5 = 12;
     break L3;
    }
   }
  } while (0);
  i2 = HEAP32[i4 + 16 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = 1;
   i5 = 13;
   break;
  } else {
   i4 = i2;
  }
 }
 if ((i5 | 0) == 10) {
  return i3 | 0;
 } else if ((i5 | 0) == 11) {
  return i3 | 0;
 } else if ((i5 | 0) == 12) {
  return i3 | 0;
 } else if ((i5 | 0) == 13) {
  return i3 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorIPN7WebCore20RenderBoxModelObjectELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
  if (i2 >>> 0 > 4 >>> 0) {
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
   HEAP32[i3 >> 2] = 4;
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
function __ZN7WebCoreL27notifyObserverEnteredObjectINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEvPT_PNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i1 | 0) == 0 | (i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i2 + 20 >> 2] & 768 | 0) == 256) {
  return;
 }
 if ((HEAP32[i2 + 24 >> 2] & 4 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i2 + 36 >> 2] | 0;
 i2 = (HEAP32[i3 + 48 >> 2] | 0) >>> 28 & 7;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((i2 - 3 | 0) >>> 0 < 3 >>> 0) {
  __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE23commitExplicitEmbeddingEv(i1) | 0;
  i4 = i1 + 164 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  return;
 }
 if ((HEAP32[i1 + 164 >> 2] | 0) != 0) {
  return;
 }
 i4 = (HEAP32[i3 + 40 >> 2] & 1073741824 | 0) == 0;
 if ((i2 | 0) == 1) {
  i5 = i4 ? 14 : 11;
 } else {
  i5 = i4 ? 15 : 12;
 }
 __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE5embedE14UCharDirectionNS_19BidiEmbeddingSourceE(i1, i5, 0);
 return;
}
function __ZN3WTF6VectorIPN7WebCore9RenderBoxELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorIPN7WebCore7BidiRunELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore11LineBreaker5resetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 16 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) != 0) {
   i3 = i1 + 20 | 0;
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    HEAP32[i3 >> 2] = 0;
   }
   i3 = i1 + 12 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   HEAP32[i3 >> 2] = 0;
   HEAP32[i2 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 HEAP8[i1 + 4 | 0] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
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
function __ZN7WebCore11BidiContextD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore11BidiContextD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
 HEAP32[i1 >> 2] = i3;
 return;
}
function dynCall_fiiiifii(i1, i2, i3, i4, i5, d6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 i7 = i7 | 0;
 i8 = i8 | 0;
 return +FUNCTION_TABLE_fiiiifii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, +d6, i7 | 0, i8 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function b0(i1, i2, i3, i4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(0);
 return +0;
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
  var FUNCTION_TABLE_fiiiifii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_fiiiifii: dynCall_fiiiifii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_fiiiifii": invoke_fiiiifii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore19asciiLineBreakTableE": __ZN7WebCore19asciiLineBreakTableE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_fiiiifii = Module["dynCall_fiiiifii"] = asm["dynCall_fiiiifii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore11LineBreaker21skipLeadingWhitespaceERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERNS_8LineInfoEPNS_14FloatingObjectERNS_9LineWidthE","__ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE27lowerExplicitEmbeddingLevelE14UCharDirection","__ZN7WebCore11LineBreaker5resetEv","__ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE27raiseExplicitEmbeddingLevelE14UCharDirectionS4_","__ZN7WebCore15BreakingContext10handleTextERN3WTF6VectorINS_15WordMeasurementELj64ENS1_15CrashOnOverflowEEERbRj","__ZNK7WebCore12RenderObject16isAnonymousBlockEv","__ZN7WebCore15BreakingContext17handleEmptyInlineEv","__ZN7WebCore15BreakingContext15handleEndOfLineEv","__ZN7WebCore15BreakingContext8handleBRERNS_6EClearE","__ZN3WTF6VectorIN7WebCore15WordMeasurementELj64ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore21nextBreakablePositionItLb1EEEiRNS_21LazyLineBreakIteratorEPKT_ji","__ZN7WebCore15requiresLineBoxERKNS_14InlineIteratorERKNS_8LineInfoENS_18WhitespacePositionE","__ZN7WebCore15BreakingContext25handleOutOfFlowPositionedERN3WTF6VectorIPNS_9RenderBoxELj0ENS1_15CrashOnOverflowEEE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore26ensureCharacterGetsLineBoxERNS_13MidpointStateINS_14InlineIteratorEEERS1_","__ZN7WebCore21nextBreakablePositionIhLb0EEEiRNS_21LazyLineBreakIteratorEPKT_ji","__ZN7WebCore15BreakingContext11handleFloatEv","__ZN7WebCore14checkMidpointsERNS_13MidpointStateINS_14InlineIteratorEEERS1_","__ZN3WTF9HashTableIPKN7WebCore14SimpleFontDataES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6expandEPS4_","__ZN7WebCore21LazyLineBreakIterator3getEj","_memset","__ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE23commitExplicitEmbeddingEv","__ZN7WebCore15BreakingContext22canBreakAtThisPositionEv","_memcpy","__ZN7WebCore36shouldSkipWhitespaceAfterStartObjectERNS_15RenderBlockFlowEPNS_12RenderObjectERNS_13MidpointStateINS_14InlineIteratorEEE","__ZN7WebCore21LazyLineBreakIterator29resetStringAndReleaseIteratorEN3WTF6StringERKNS1_12AtomicStringE","__ZN3WTF6VectorIN7WebCore16LineSegmentRangeELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCoreL28bidiNextSkippingEmptyInlinesINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_","__ZN7WebCore15BreakingContext26initializeForCurrentObjectEv","__ZN7WebCore18inlineLogicalWidthEPNS_12RenderObjectEbb","__ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv","__ZN3WTF6VectorIPN7WebCore7BidiRunELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE","__ZN7WebCore21nextBreakablePositionItLb0EEEiRNS_21LazyLineBreakIteratorEPKT_ji","__ZN7WebCore15TrailingObjects17appendBoxIfNeededEPNS_20RenderBoxModelObjectE","__ZN3WTF9HashTableIPKN7WebCore14SimpleFontDataES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZN7WebCore21nextBreakablePositionIhLb1EEEiRNS_21LazyLineBreakIteratorEPKT_ji","__ZN7WebCore15BreakingContextC2ERNS_11LineBreakerERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERNS_8LineInfoERNS_9LineWidthERNS_14RenderTextInfoEPNS_14FloatingObjectEbRNS_15RenderBlockFlowE","__ZN3WTF6VectorIN7WebCore13BidiEmbeddingELj8ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore15BreakingContext14handleReplacedEv","__ZN7WebCore23updateSegmentsForShapesERNS_15RenderBlockFlowEPKNS_14FloatingObjectERKN3WTF6VectorINS_15WordMeasurementELj64ENS5_15CrashOnOverflowEEERNS_9LineWidthEb","__ZN7WebCore11BidiContextD2Ev","__ZN7WebCore40hasInlineDirectionBordersPaddingOrMarginERKNS_12RenderInlineE","__ZN7WebCore13MidpointStateINS_14InlineIteratorEE32ensureLineBoxInsideIgnoredSpacesEPNS_12RenderObjectE","_strlen","__ZN7WebCore11LineBreaker13nextLineBreakERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERNS_8LineInfoERNS_14RenderTextInfoEPNS_14FloatingObjectEjRN3WTF6VectorINS_15WordMeasurementELj64ENSC_15CrashOnOverflowEEE","__ZN3WTF6VectorIPN7WebCore20RenderBoxModelObjectELj4ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore15BreakingContext32commitAndUpdateLineBreakIfNeededEv","__ZN7WebCore14IsolateTracker21addFakeRunIfNecessaryERNS_12RenderObjectEjRNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEE","__ZN3WTF6VectorIN7WebCore14InlineIteratorELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCoreL27notifyObserverEnteredObjectINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEvPT_PNS_12RenderObjectE","__ZN7WebCore14tryHyphenatingEPNS_10RenderTextERKNS_4FontERKN3WTF12AtomicStringEjiiijjfibbiRNS_14InlineIteratorEiRb","__ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE5embedE14UCharDirectionNS_19BidiEmbeddingSourceE","__ZN7WebCore25requiresLineBoxForContentERKNS_12RenderInlineERKNS_8LineInfoE","__ZN3WTF6VectorIPN7WebCore9RenderBoxELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore11LineBreaker16nextSegmentBreakERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERNS_8LineInfoERNS_14RenderTextInfoEPNS_14FloatingObjectEjRN3WTF6VectorINS_15WordMeasurementELj64ENSC_15CrashOnOverflowEEE","__ZN7WebCore11LineBreaker22skipTrailingWhitespaceERNS_14InlineIteratorERKNS_8LineInfoE"]

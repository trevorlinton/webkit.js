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
H_BASE = parentModule["_malloc"](784 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 784;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore10RenderTextC1ERNS_4TextERKN3WTF6StringE;
var __ZN7WebCore10RenderTextC1ERNS_8DocumentERKN3WTF6StringE;
var __ZN7WebCore10RenderTextD1Ev;
/* memory initializer */ allocate([82,101,110,100,101,114,84,101,120,116,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_fiiiifii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_fiiiifii"](index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vif(index,a1,a2) {
  try {
    Module["dynCall_vif"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
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
function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    return Module["dynCall_iiiiiii"](index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_fiiifiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_fiiifiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var __ZN7WebCore19asciiLineBreakTableE=env.__ZN7WebCore19asciiLineBreakTableE|0;
  var __ZTVN7WebCore13InlineTextBoxE=env.__ZTVN7WebCore13InlineTextBoxE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore10RenderTextE=(H_BASE+56)|0;
  var __ZTVN7WebCore15SecureTextTimerE=(H_BASE+24)|0;
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
  var invoke_iiii=env.invoke_iiii;
  var invoke_fiiiifii=env.invoke_fiiiifii;
  var invoke_vif=env.invoke_vif;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_fiiifiii=env.invoke_fiiifiii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_fii=env.invoke_fii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var _llvm_trap=env._llvm_trap;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fmod=env._fmod;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore10RenderText29computePreferredLogicalWidthsEfRN3WTF7HashSetIPKNS_14SimpleFontDataENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEERNS_13GlyphOverflowE(i1, d2, i3, i4) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, d29 = +0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, d41 = +0, d42 = +0, i43 = 0, i44 = 0, d45 = +0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, d113 = +0, d114 = +0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, i123 = 0, i124 = 0, i125 = 0, i126 = 0, i127 = 0, i128 = 0, i129 = 0, i130 = 0, i131 = 0, i132 = 0, i133 = 0, d134 = +0, d135 = +0, d136 = +0, i137 = 0, i138 = 0, d139 = +0, d140 = +0, i141 = 0, i142 = 0, i143 = 0, i144 = 0, i145 = 0, i146 = 0, d147 = +0, d148 = +0, i149 = 0, i150 = 0, i151 = 0, i152 = 0, i153 = 0, i154 = 0, i155 = 0, d156 = +0, d157 = +0, d158 = +0, i159 = 0, i160 = 0, i161 = 0, i162 = 0, i163 = 0, i164 = 0, i165 = 0, i166 = 0, i167 = 0, i168 = 0, i169 = 0, i170 = 0, i171 = 0, i172 = 0, i173 = 0, i174 = 0, i175 = 0, i176 = 0, i177 = 0, i178 = 0, i179 = 0, i180 = 0, i181 = 0, i182 = 0, i183 = 0, i184 = 0, i185 = 0, i186 = 0, i187 = 0, i188 = 0, i189 = 0, i190 = 0, i191 = 0, i192 = 0, i193 = 0, i194 = 0, d195 = +0, i196 = 0, i197 = 0, d198 = +0, d199 = +0, i200 = 0, i201 = 0, d202 = +0, i203 = 0, i204 = 0, i205 = 0, i206 = 0, i207 = 0, i208 = 0, i209 = 0, d210 = +0, d211 = +0, d212 = +0, d213 = +0, i214 = 0, i215 = 0, d216 = +0, i217 = 0, i218 = 0, i219 = 0, i220 = 0, d221 = +0, d222 = +0, i223 = 0, i224 = 0, i225 = 0, i226 = 0, i227 = 0, i228 = 0, i229 = 0, d230 = +0, i231 = 0, d232 = +0, i233 = 0, i234 = 0, i235 = 0, i236 = 0, i237 = 0, d238 = +0, i239 = 0, i240 = 0, d241 = +0, i242 = 0, d243 = +0, d244 = +0, d245 = +0, i246 = 0, i247 = 0, i248 = 0, i249 = 0, d250 = +0, d251 = +0, d252 = +0, i253 = 0, i254 = 0, i255 = 0, i256 = 0, i257 = 0, i258 = 0, d259 = +0, d260 = +0, i261 = 0, d262 = +0, i263 = 0, i264 = 0, i265 = 0, i266 = 0, d267 = +0, d268 = +0, d269 = +0, i270 = 0, d271 = +0, i272 = 0, i273 = 0, i274 = 0, d275 = +0, d276 = +0, i277 = 0, i278 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 544 | 0;
 i6 = i5 | 0;
 i7 = i5 + 40 | 0;
 i8 = i5 + 80 | 0;
 i9 = i5 + 128 | 0;
 i10 = i5 + 136 | 0;
 i11 = i5 + 160 | 0;
 i12 = i5 + 200 | 0;
 i13 = i5 + 240 | 0;
 i14 = i5 + 280 | 0;
 i15 = i5 + 320 | 0;
 i16 = i5 + 360 | 0;
 i17 = i5 + 400 | 0;
 i18 = i5 + 440 | 0;
 i19 = i5 + 464 | 0;
 i20 = i5 + 504 | 0;
 i21 = i1 + 28 | 0;
 i22 = i1 + 36 | 0;
 i23 = i1 + 40 | 0;
 i24 = i1 + 32 | 0;
 i25 = i1 + 24 | 0;
 _memset(i21 | 0, 0, 16) | 0;
 HEAP8[i25] = HEAP8[i25] & -32;
 i26 = i1 + 8 | 0;
 i27 = HEAP32[(HEAP32[i26 >> 2] | 0) + 36 >> 2] | 0;
 i28 = __ZNK7WebCore11RenderStyle4fontEv(i27) | 0;
 d29 = +__ZNK7WebCore11RenderStyle11wordSpacingEv(i27);
 i30 = i1 + 44 | 0;
 i31 = HEAP32[i30 >> 2] | 0;
 i32 = HEAP32[i31 + 4 >> 2] | 0;
 i33 = (i31 | 0) == 0;
 if (i33) {
  i34 = i27 + 24 | 0;
  i35 = HEAP32[i34 >> 2] | 0;
  i36 = i18 | 0;
  HEAP32[i36 >> 2] = 0;
  i37 = i34;
  i38 = i35;
  i39 = i36;
 } else {
  i36 = i31 | 0;
  HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 2;
  i35 = i27 + 24 | 0;
  i34 = HEAP32[i35 >> 2] | 0;
  i40 = i18 | 0;
  HEAP32[i40 >> 2] = i31;
  HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 2;
  i37 = i35;
  i38 = i34;
  i39 = i40;
 }
 i40 = i18 + 4 | 0;
 i34 = HEAP32[i38 + 108 >> 2] | 0;
 HEAP32[i40 >> 2] = i34;
 if ((i34 | 0) != 0) {
  i38 = i34 | 0;
  HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 2;
 }
 i38 = i18 + 8 | 0;
 _memset(i38 | 0, 0, 16) | 0;
 do {
  if (!i33) {
   i34 = i31 | 0;
   i35 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
   if ((i35 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i31);
    break;
   } else {
    HEAP32[i34 >> 2] = i35;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[i28 + 36 >> 2] & 256 | 0) == 0) {
   d41 = +0;
  } else {
   __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKtiRKNS_11RenderStyleEj(i19, i1 | 0, i28, H_BASE + 744, 1, i27, 1);
   d42 = d29 + +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i28, i19, i3, 0);
   i31 = HEAP32[i19 + 32 >> 2] | 0;
   if ((i31 | 0) == 0) {
    d41 = d42;
    break;
   }
   i33 = i31 + 4 | 0;
   i31 = i33 | 0;
   i35 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
   if ((i35 | 0) != 0) {
    HEAP32[i31 >> 2] = i35;
    d41 = d42;
    break;
   }
   i35 = i33 - 4 | 0;
   if ((i35 | 0) == 0) {
    d41 = d42;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i35 >> 2] | 0) + 4 >> 2] & 31](i35);
   d41 = d42;
  }
 } while (0);
 i19 = HEAP32[i37 >> 2] | 0;
 do {
  if ((HEAP32[i19 + 88 >> 2] & 6291456 | 0) == 4194304) {
   if (!(__ZN7WebCore12canHyphenateERKN3WTF12AtomicStringE(i19 + 108 | 0) | 0)) {
    i43 = 0;
    i44 = 0;
    d45 = 3.4028234663852886e+38;
    break;
   }
   i35 = HEAP32[i37 >> 2] | 0;
   i33 = HEAP16[i35 + 100 >> 1] | 0;
   i31 = HEAP16[i35 + 102 >> 1] | 0;
   i43 = i31 << 16 >> 16 < 0 ? 2 : i31 << 16 >> 16;
   i44 = i33 << 16 >> 16 < 0 ? 2 : i33 << 16 >> 16;
   d45 = +0;
  } else {
   i43 = 0;
   i44 = 0;
   d45 = 3.4028234663852886e+38;
  }
 } while (0);
 i19 = i27 + 44 | 0;
 i33 = HEAP32[i19 >> 2] & 7;
 if ((i33 | 0) == 4 | (i33 | 0) == 1) {
  i46 = 0;
 } else {
  i46 = (HEAP32[(HEAP32[i37 >> 2] | 0) + 88 >> 2] & 512 | 0) != 0;
 }
 if ((((HEAP32[(HEAP32[i37 >> 2] | 0) + 88 >> 2] | 0) >>> 6 & 3) - 1 | 0) >>> 0 < 2 >>> 0) {
  i47 = (i33 | 0) != 1 & (i33 | 0) != 4;
 } else {
  i47 = 0;
 }
 do {
  if ((i32 | 0) > 0) {
   i33 = i32 - 1 | 0;
   i31 = i27 + 20 | 0;
   i35 = i28 + 24 | 0;
   i34 = i28 | 0;
   i36 = i28 + 16 | 0;
   i48 = (i4 | 0) == 0;
   i49 = i28 + 28 | 0;
   i50 = i28 + 32 | 0;
   i51 = i4 + 16 | 0;
   i52 = i1 | 0;
   i53 = i17 + 4 | 0;
   i54 = i1 + 25 | 0;
   i55 = i17 + 24 | 0;
   i56 = i17 + 28 | 0;
   i57 = i17 + 12 | 0;
   i58 = i17 + 32 | 0;
   i59 = i4 | 0;
   i60 = i1;
   i61 = i1 + 64 | 0;
   i62 = i28 + 12 | 0;
   i63 = i20 + 4 | 0;
   i64 = i20 + 24 | 0;
   i65 = i20 + 28 | 0;
   i66 = i20 + 12 | 0;
   i67 = i4 + 4 | 0;
   i68 = i20 + 32 | 0;
   i69 = d41 == +0;
   i70 = i16 + 4 | 0;
   i71 = i16 + 24 | 0;
   i72 = i16 + 28 | 0;
   i73 = i16 + 12 | 0;
   i74 = i16 + 32 | 0;
   i75 = i15 + 4 | 0;
   i76 = i15 + 24 | 0;
   i77 = i15 + 28 | 0;
   i78 = i15 + 12 | 0;
   i79 = i15 + 32 | 0;
   i80 = i6 + 32 | 0;
   i81 = i8 + 12 | 0;
   i82 = i8 | 0;
   i83 = i8 + 4 | 0;
   i84 = i8 + 8 | 0;
   i85 = i7 + 32 | 0;
   i86 = i10 | 0;
   i87 = i10 + 4 | 0;
   i88 = i10 + 8 | 0;
   i89 = i10 + 12 | 0;
   i90 = i10 + 16 | 0;
   i91 = i10 + 20 | 0;
   i92 = i11 + 4 | 0;
   i93 = i11 + 24 | 0;
   i94 = i11 + 32 | 0;
   i95 = i9;
   i96 = i13 + 4 | 0;
   i97 = i13 + 24 | 0;
   i98 = i13 + 28 | 0;
   i99 = i13 + 12 | 0;
   i100 = i13 + 32 | 0;
   i101 = i14 + 4 | 0;
   i102 = i14 + 24 | 0;
   i103 = i14 + 28 | 0;
   i104 = i14 + 12 | 0;
   i105 = i14 + 32 | 0;
   i106 = i12 + 4 | 0;
   i107 = i12 + 24 | 0;
   i108 = i12 + 28 | 0;
   i109 = i12 + 12 | 0;
   i110 = i12 + 32 | 0;
   i111 = d29 != +0;
   i112 = -1;
   d42 = d45;
   d113 = +0;
   d114 = d2;
   i115 = 0;
   i116 = 0;
   i117 = 0;
   i118 = 1;
   i119 = 1;
   i120 = 0;
   i121 = -1;
   i122 = 0;
   L34 : while (1) {
    i123 = HEAP32[i30 >> 2] | 0;
    if ((HEAP32[i123 + 16 >> 2] & 32 | 0) == 0) {
     i124 = HEAP16[(HEAP32[i123 + 8 >> 2] | 0) + (i122 << 1) >> 1] | 0;
    } else {
     i124 = HEAPU8[(HEAP32[i123 + 8 >> 2] | 0) + i122 | 0] | 0;
    }
    do {
     if ((i124 << 16 >> 16 | 0) == 10) {
      i123 = HEAP32[i19 >> 2] & 7;
      if ((i123 | 0) == 4 | (i123 | 0) == 0) {
       i125 = 0;
       i126 = 1;
       break;
      }
      HEAP8[i25] = HEAP8[i25] | 2;
      i125 = 1;
      i126 = 0;
     } else if ((i124 << 16 >> 16 | 0) == 9) {
      if (((HEAP32[i19 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0) {
       i125 = 0;
       i126 = 1;
       break;
      }
      HEAP8[i25] = HEAP8[i25] | 4;
      i125 = 0;
      i126 = 0;
     } else {
      i125 = 0;
      i126 = i124 << 16 >> 16 == 32;
     }
    } while (0);
    i123 = i126 | i125;
    if (i123 & (i122 | 0) == 0) {
     HEAP8[i25] = HEAP8[i25] | 8;
    }
    if (i123 & (i122 | 0) == (i33 | 0)) {
     HEAP8[i25] = HEAP8[i25] | 16;
    }
    if (i116) {
     if (i126) {
      i127 = 41;
     } else {
      i127 = 42;
     }
    } else {
     if (i117 & ((HEAP32[i19 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0 & i126) {
      i127 = 41;
     } else {
      i127 = 42;
     }
    }
    L56 : do {
     if ((i127 | 0) == 41) {
      i127 = 0;
      i128 = i122;
      i129 = i121;
      i130 = i120 + 1 | 0;
      i131 = i119;
      i132 = i118;
      i133 = i115;
      d134 = d114;
      d135 = d113;
      d136 = d42;
      i137 = i112;
      i138 = 1;
     } else if ((i127 | 0) == 42) {
      i127 = 0;
      do {
       if (i124 << 16 >> 16 == 173) {
        if ((HEAP32[(HEAP32[i37 >> 2] | 0) + 88 >> 2] & 6291456 | 0) == 0) {
         break;
        }
        i123 = i122 - i120 | 0;
        d139 = d113 + d114;
        do {
         if ((HEAP32[(HEAP32[i31 >> 2] | 0) + 296 >> 2] & 128 | 0) == 0) {
          i127 = 48;
         } else {
          if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i60 >> 2] | 0) + 560 >> 2] & 255](i52) | 0)) {
           i127 = 48;
           break;
          }
          if ((HEAP8[i61] & 1) == 0) {
           i127 = 48;
           break;
          }
          d140 = +HEAPF32[i62 >> 2];
         }
        } while (0);
        L66 : do {
         if ((i127 | 0) == 48) {
          i127 = 0;
          i141 = HEAP32[i35 >> 2] | 0;
          i142 = i141 + 108 | 0;
          i143 = HEAP32[i142 >> 2] | 0;
          if ((i143 & 458752 | 0) == 0) {
           __ZNK7WebCore10FontGlyphs14determinePitchERKNS_15FontDescriptionE(i141, i34);
           i144 = HEAP32[i142 >> 2] | 0;
          } else {
           i144 = i143;
          }
          do {
           if ((i144 & 458752 | 0) == 65536) {
            if ((HEAP32[i36 >> 2] & 32 | 0) != 0) {
             break;
            }
            if ((HEAP8[i25] | 0) >= 0) {
             break;
            }
            if (!i48) {
             if ((HEAP8[i51] & 1) != 0) {
              break;
             }
            }
            i143 = HEAP32[i35 >> 2] | 0;
            i142 = i143 + 44 | 0;
            i141 = HEAP32[i142 >> 2] | 0;
            if ((i141 | 0) == 0) {
             i145 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i143, i34, 0) | 0;
             i143 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i145 >> 2] | 0) + 8 >> 2] & 15](i145, 32) | 0;
             HEAP32[i142 >> 2] = i143;
             i146 = i143;
            } else {
             i146 = i141;
            }
            d147 = +HEAPF32[i146 + 1124 >> 2] + +HEAPF32[i49 >> 2];
            i141 = HEAP32[i30 >> 2] | 0;
            if ((i120 | 0) >= (i122 | 0)) {
             d140 = +0;
             break L66;
            }
            i143 = i141 + 16 | 0;
            i142 = i141 + 8 | 0;
            i141 = i142;
            i145 = i142 | 0;
            i142 = i120;
            d148 = +0;
            while (1) {
             if ((HEAP32[i143 >> 2] & 32 | 0) == 0) {
              i149 = HEAP16[(HEAP32[i141 >> 2] | 0) + (i142 << 1) >> 1] & 255;
             } else {
              i149 = HEAP8[(HEAP32[i145 >> 2] | 0) + i142 | 0] | 0;
             }
             L88 : do {
              if (i149 << 24 >> 24 < 33) {
               do {
                if ((i149 << 24 >> 24 | 0) == 9) {
                 if (((HEAP32[i19 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0) {
                  break;
                 }
                 i150 = HEAP32[(HEAP32[i37 >> 2] | 0) + 124 >> 2] | 0;
                 i151 = HEAP32[i35 >> 2] | 0;
                 i152 = i151 + 44 | 0;
                 i153 = HEAP32[i152 >> 2] | 0;
                 if ((i153 | 0) == 0) {
                  i154 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i151, i34, 0) | 0;
                  i151 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i154 >> 2] | 0) + 8 >> 2] & 15](i154, 32) | 0;
                  HEAP32[i152 >> 2] = i151;
                  i155 = i151;
                 } else {
                  i155 = i153;
                 }
                 if ((i150 | 0) == 0) {
                  d156 = +HEAPF32[i49 >> 2];
                 } else {
                  d157 = +(i150 >>> 0 >>> 0) * +HEAPF32[i155 + 1124 >> 2] + +HEAPF32[i49 >> 2];
                  d156 = d157 - +_fmod(+(d139 + d148), +d157);
                 }
                 d158 = d148 + d156;
                 break L88;
                } else if (!((i149 << 24 >> 24 | 0) == 32 | (i149 << 24 >> 24 | 0) == 10)) {
                 d158 = d148;
                 break L88;
                }
               } while (0);
               d157 = d147 + d148;
               if ((i142 | 0) <= (i120 | 0)) {
                d158 = d157;
                break;
               }
               d158 = d157 + +HEAPF32[i50 >> 2];
              } else {
               d158 = d147 + d148;
              }
             } while (0);
             i150 = i142 + 1 | 0;
             if ((i150 | 0) < (i122 | 0)) {
              i142 = i150;
              d148 = d158;
             } else {
              d140 = d158;
              break L66;
             }
            }
           }
          } while (0);
          __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKNS_10RenderTextEjjRKNS_11RenderStyleEj(i17, i52, i28, i1, i120, i123, i27, 1);
          HEAP32[i53 >> 2] = (HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] | 0) - i120;
          i142 = ((HEAP8[i54] & 1 ^ 1) & 255) << 6 | HEAP32[i55 >> 2] & -65;
          HEAP32[i55 >> 2] = i142;
          i145 = HEAP32[(HEAP32[i37 >> 2] | 0) + 124 >> 2] | 0;
          HEAP32[i55 >> 2] = (((HEAP32[i19 >> 2] & 7) - 1 | 0) >>> 0 < 2 >>> 0) << 3 | i142 & -9;
          HEAP32[i56 >> 2] = i145;
          HEAPF32[i57 >> 2] = d139;
          d148 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i28, i17, i3, i4);
          i145 = HEAP32[i58 >> 2] | 0;
          if ((i145 | 0) == 0) {
           d140 = d148;
           break;
          }
          i142 = i145 + 4 | 0;
          i145 = i142 | 0;
          i141 = (HEAP32[i145 >> 2] | 0) - 1 | 0;
          if ((i141 | 0) != 0) {
           HEAP32[i145 >> 2] = i141;
           d140 = d148;
           break;
          }
          i141 = i142 - 4 | 0;
          if ((i141 | 0) == 0) {
           d140 = d148;
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i141 >> 2] | 0) + 4 >> 2] & 31](i141);
          d140 = d148;
         }
        } while (0);
        if ((i121 | 0) < 0) {
         i159 = HEAP32[i59 >> 2] | 0;
        } else {
         i159 = i121;
        }
        i128 = i122;
        i129 = i159;
        i130 = i122 + 1 | 0;
        i131 = i119;
        i132 = i118;
        i133 = i115;
        d134 = d114;
        d135 = d113 + d140;
        d136 = d42;
        i137 = i112;
        i138 = 0;
        break L56;
       }
      } while (0);
      if (i47) {
       i160 = 1;
       i161 = i112;
      } else {
       do {
        if ((i112 | 0) < (i122 | 0)) {
         i123 = HEAP32[i39 >> 2] | 0;
         i141 = (i123 | 0) == 0;
         if (i46) {
          if (!i141) {
           i142 = i123 | 0;
           HEAP32[i142 >> 2] = (HEAP32[i142 >> 2] | 0) + 2;
          }
          if ((HEAP32[i123 + 16 >> 2] & 32 | 0) == 0) {
           if (i141) {
            i162 = 0;
            i163 = 0;
           } else {
            i162 = HEAP32[i123 + 4 >> 2] | 0;
            i163 = HEAP32[i123 + 8 >> 2] | 0;
           }
           i164 = __ZN7WebCore21nextBreakablePositionItLb1EEEiRNS_21LazyLineBreakIteratorEPKT_ji(i18, i163, i162, i122) | 0;
          } else {
           if (i141) {
            i165 = 0;
            i166 = 0;
           } else {
            i165 = HEAP32[i123 + 4 >> 2] | 0;
            i166 = HEAP32[i123 + 8 >> 2] | 0;
           }
           i164 = __ZN7WebCore21nextBreakablePositionIhLb1EEEiRNS_21LazyLineBreakIteratorEPKT_ji(i18, i166, i165, i122) | 0;
          }
          if (i141) {
           i167 = i164;
           break;
          }
          i142 = i123 | 0;
          i145 = (HEAP32[i142 >> 2] | 0) - 2 | 0;
          if ((i145 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i123);
           i167 = i164;
           break;
          } else {
           HEAP32[i142 >> 2] = i145;
           i167 = i164;
           break;
          }
         } else {
          if (!i141) {
           i145 = i123 | 0;
           HEAP32[i145 >> 2] = (HEAP32[i145 >> 2] | 0) + 2;
          }
          if ((HEAP32[i123 + 16 >> 2] & 32 | 0) == 0) {
           if (i141) {
            i168 = 0;
            i169 = 0;
           } else {
            i168 = HEAP32[i123 + 4 >> 2] | 0;
            i169 = HEAP32[i123 + 8 >> 2] | 0;
           }
           i170 = __ZN7WebCore21nextBreakablePositionItLb0EEEiRNS_21LazyLineBreakIteratorEPKT_ji(i18, i169, i168, i122) | 0;
          } else {
           if (i141) {
            i171 = 0;
            i172 = 0;
           } else {
            i171 = HEAP32[i123 + 4 >> 2] | 0;
            i172 = HEAP32[i123 + 8 >> 2] | 0;
           }
           i170 = __ZN7WebCore21nextBreakablePositionIhLb0EEEiRNS_21LazyLineBreakIteratorEPKT_ji(i18, i172, i171, i122) | 0;
          }
          if (i141) {
           i167 = i170;
           break;
          }
          i141 = i123 | 0;
          i145 = (HEAP32[i141 >> 2] | 0) - 2 | 0;
          if ((i145 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i123);
           i167 = i170;
           break;
          } else {
           HEAP32[i141 >> 2] = i145;
           i167 = i170;
           break;
          }
         }
        } else {
         i167 = i112;
        }
       } while (0);
       i160 = (i167 | 0) == (i122 | 0);
       i161 = i167;
      }
      i145 = i122;
      i141 = i124;
      i123 = i161;
      while (1) {
       if ((i141 << 16 >> 16 | 0) == 160) {
        i173 = (HEAP32[(HEAP32[i37 >> 2] | 0) + 88 >> 2] & 512 | 0) != 0;
       } else if ((i141 << 16 >> 16 | 0) == 10) {
        i174 = i145;
        i175 = 1;
        i176 = 10;
        i177 = i123;
        i127 = 157;
        break;
       } else if ((i141 << 16 >> 16 | 0) == 32) {
        i178 = i145;
        i179 = 1;
        i180 = 32;
        i181 = i123;
        break;
       } else {
        i173 = 0;
       }
       if (i173 | i141 << 16 >> 16 == 9) {
        i174 = i145;
        i175 = 1;
        i176 = i141;
        i177 = i123;
        i127 = 157;
        break;
       }
       if (i141 << 16 >> 16 == 173) {
        if ((HEAP32[(HEAP32[i37 >> 2] | 0) + 88 >> 2] & 6291456 | 0) != 0) {
         i174 = i145;
         i175 = 1;
         i176 = 173;
         i177 = i123;
         i127 = 157;
         break;
        }
       }
       i142 = i145 + 1 | 0;
       if ((i142 | 0) == (i32 | 0)) {
        i174 = i32;
        i175 = 1;
        i176 = i141;
        i177 = i123;
        i127 = 157;
        break;
       }
       i143 = HEAP32[i30 >> 2] | 0;
       if ((HEAP32[i143 + 16 >> 2] & 32 | 0) == 0) {
        i182 = HEAP16[(HEAP32[i143 + 8 >> 2] | 0) + (i142 << 1) >> 1] | 0;
       } else {
        i182 = HEAPU8[(HEAP32[i143 + 8 >> 2] | 0) + i142 | 0] | 0;
       }
       do {
        if ((i123 | 0) < (i142 | 0)) {
         i143 = HEAP32[i39 >> 2] | 0;
         i150 = (i143 | 0) == 0;
         if (i46) {
          if (!i150) {
           i153 = i143 | 0;
           HEAP32[i153 >> 2] = (HEAP32[i153 >> 2] | 0) + 2;
          }
          if ((HEAP32[i143 + 16 >> 2] & 32 | 0) == 0) {
           if (i150) {
            i183 = 0;
            i184 = 0;
           } else {
            i183 = HEAP32[i143 + 4 >> 2] | 0;
            i184 = HEAP32[i143 + 8 >> 2] | 0;
           }
           i185 = __ZN7WebCore21nextBreakablePositionItLb1EEEiRNS_21LazyLineBreakIteratorEPKT_ji(i18, i184, i183, i142) | 0;
          } else {
           if (i150) {
            i186 = 0;
            i187 = 0;
           } else {
            i186 = HEAP32[i143 + 4 >> 2] | 0;
            i187 = HEAP32[i143 + 8 >> 2] | 0;
           }
           i185 = __ZN7WebCore21nextBreakablePositionIhLb1EEEiRNS_21LazyLineBreakIteratorEPKT_ji(i18, i187, i186, i142) | 0;
          }
          if (i150) {
           i188 = i185;
           break;
          }
          i153 = i143 | 0;
          i151 = (HEAP32[i153 >> 2] | 0) - 2 | 0;
          if ((i151 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i143);
           i188 = i185;
           break;
          } else {
           HEAP32[i153 >> 2] = i151;
           i188 = i185;
           break;
          }
         } else {
          if (!i150) {
           i151 = i143 | 0;
           HEAP32[i151 >> 2] = (HEAP32[i151 >> 2] | 0) + 2;
          }
          if ((HEAP32[i143 + 16 >> 2] & 32 | 0) == 0) {
           if (i150) {
            i189 = 0;
            i190 = 0;
           } else {
            i189 = HEAP32[i143 + 4 >> 2] | 0;
            i190 = HEAP32[i143 + 8 >> 2] | 0;
           }
           i191 = __ZN7WebCore21nextBreakablePositionItLb0EEEiRNS_21LazyLineBreakIteratorEPKT_ji(i18, i190, i189, i142) | 0;
          } else {
           if (i150) {
            i192 = 0;
            i193 = 0;
           } else {
            i192 = HEAP32[i143 + 4 >> 2] | 0;
            i193 = HEAP32[i143 + 8 >> 2] | 0;
           }
           i191 = __ZN7WebCore21nextBreakablePositionIhLb0EEEiRNS_21LazyLineBreakIteratorEPKT_ji(i18, i193, i192, i142) | 0;
          }
          if (i150) {
           i188 = i191;
           break;
          }
          i150 = i143 | 0;
          i151 = (HEAP32[i150 >> 2] | 0) - 2 | 0;
          if ((i151 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i143);
           i188 = i191;
           break;
          } else {
           HEAP32[i150 >> 2] = i151;
           i188 = i191;
           break;
          }
         }
        } else {
         i188 = i123;
        }
       } while (0);
       if ((i188 | 0) != (i142 | 0)) {
        if (i47) {
         i174 = i142;
         i175 = 0;
         i176 = i182;
         i177 = i188;
         i127 = 157;
         break;
        } else {
         i145 = i142;
         i141 = i182;
         i123 = i188;
         continue;
        }
       }
       i151 = HEAP32[i30 >> 2] | 0;
       if ((HEAP32[i151 + 16 >> 2] & 32 | 0) == 0) {
        i194 = HEAP16[(HEAP32[i151 + 8 >> 2] | 0) + (i145 << 1) >> 1] | 0;
       } else {
        i194 = HEAPU8[(HEAP32[i151 + 8 >> 2] | 0) + i145 | 0] | 0;
       }
       i151 = i194 << 16 >> 16 != 173;
       if (i151 | i47) {
        i174 = i142;
        i175 = i151;
        i176 = i182;
        i177 = i142;
        i127 = 157;
        break;
       } else {
        i145 = i142;
        i141 = i182;
        i123 = i188;
       }
      }
      if ((i127 | 0) == 157) {
       i127 = 0;
       i178 = i174;
       i179 = i175;
       i180 = i176;
       i181 = i177;
      }
      i123 = i178 - i122 | 0;
      if ((i178 | 0) == (i122 | 0)) {
       i141 = HEAP32[i19 >> 2] & 7;
       if ((i141 | 0) != 1 & (i141 | 0) != 4 | i125) {
        HEAP8[i25] = HEAP8[i25] | 1;
       }
       if (+HEAPF32[i21 >> 2] < +0) {
        HEAPF32[i21 >> 2] = +0;
       }
       do {
        if (i125) {
         do {
          if (i119) {
           i141 = HEAP32[i19 >> 2] & 7;
           if (!((i141 | 0) == 4 | (i141 | 0) == 1)) {
            d195 = +0;
            break;
           }
           HEAPF32[i22 >> 2] = d113;
           d195 = +0;
          } else {
           d195 = d114;
          }
         } while (0);
         if (d113 <= +HEAPF32[i24 >> 2]) {
          i196 = 0;
          i197 = i115;
          d198 = d195;
          d199 = +0;
          break;
         }
         HEAPF32[i24 >> 2] = d113;
         i196 = 0;
         i197 = i115;
         d198 = d195;
         d199 = +0;
        } else {
         __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKNS_10RenderTextEjjRKNS_11RenderStyleEj(i20, i52, i28, i1, i122, 1, i27, 1);
         HEAP32[i63 >> 2] = i32 - i122;
         i142 = HEAP32[(HEAP32[i37 >> 2] | 0) + 124 >> 2] | 0;
         HEAP32[i64 >> 2] = (((HEAP32[i19 >> 2] & 7) - 1 | 0) >>> 0 < 2 >>> 0) << 3 | HEAP32[i64 >> 2] & -9;
         HEAP32[i65 >> 2] = i142;
         HEAPF32[i66 >> 2] = d113 + d114;
         d139 = d113 + +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i28, i20, i3, 0);
         HEAP32[i67 >> 2] = 0;
         i142 = (i122 | 0) == (i33 | 0) & (i126 & (i117 ^ 1));
         i141 = HEAP32[i68 >> 2] | 0;
         if ((i141 | 0) == 0) {
          i196 = i119;
          i197 = i142;
          d198 = d114;
          d199 = d139;
          break;
         }
         i145 = i141 + 4 | 0;
         i141 = i145 | 0;
         i151 = (HEAP32[i141 >> 2] | 0) - 1 | 0;
         if ((i151 | 0) != 0) {
          HEAP32[i141 >> 2] = i151;
          i196 = i119;
          i197 = i142;
          d198 = d114;
          d199 = d139;
          break;
         }
         i151 = i145 - 4 | 0;
         if ((i151 | 0) == 0) {
          i196 = i119;
          i197 = i142;
          d198 = d114;
          d199 = d139;
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i151 >> 2] | 0) + 4 >> 2] & 31](i151);
         i196 = i119;
         i197 = i142;
         d198 = d114;
         d199 = d139;
        }
       } while (0);
       i128 = i122;
       i129 = i121;
       i130 = i120 + 1 | 0;
       i131 = i196;
       i132 = i118;
       i133 = i197;
       d134 = d198;
       d135 = d199;
       d136 = d42;
       i137 = i181;
       i138 = 0;
       break;
      }
      i142 = (i178 | 0) < (i32 | 0);
      do {
       if (i142) {
        if ((i180 << 16 >> 16 | 0) == 160) {
         i200 = (HEAP32[(HEAP32[i37 >> 2] | 0) + 88 >> 2] & 512 | 0) != 0;
        } else if ((i180 << 16 >> 16 | 0) == 32) {
         i200 = 1;
        } else {
         i201 = 0;
         i127 = 200;
         break;
        }
        if (i69 | i200 ^ 1) {
         i201 = i200;
         i127 = 200;
         break;
        }
        i151 = i123 + 1 | 0;
        d139 = d113 + d114;
        do {
         if ((HEAP32[(HEAP32[i31 >> 2] | 0) + 296 >> 2] & 128 | 0) == 0) {
          i127 = 167;
         } else {
          if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i60 >> 2] | 0) + 560 >> 2] & 255](i52) | 0)) {
           i127 = 167;
           break;
          }
          if ((HEAP8[i61] & 1) == 0) {
           i127 = 167;
           break;
          }
          d202 = +HEAPF32[i62 >> 2];
         }
        } while (0);
        L255 : do {
         if ((i127 | 0) == 167) {
          i127 = 0;
          i145 = HEAP32[i35 >> 2] | 0;
          i141 = i145 + 108 | 0;
          i150 = HEAP32[i141 >> 2] | 0;
          if ((i150 & 458752 | 0) == 0) {
           __ZNK7WebCore10FontGlyphs14determinePitchERKNS_15FontDescriptionE(i145, i34);
           i203 = HEAP32[i141 >> 2] | 0;
          } else {
           i203 = i150;
          }
          do {
           if ((i203 & 458752 | 0) == 65536) {
            if ((HEAP32[i36 >> 2] & 32 | 0) != 0) {
             break;
            }
            if ((HEAP8[i25] | 0) >= 0) {
             break;
            }
            if (!i48) {
             if ((HEAP8[i51] & 1) != 0) {
              break;
             }
            }
            i150 = HEAP32[i35 >> 2] | 0;
            i141 = i150 + 44 | 0;
            i145 = HEAP32[i141 >> 2] | 0;
            if ((i145 | 0) == 0) {
             i143 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i150, i34, 0) | 0;
             i150 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i143 >> 2] | 0) + 8 >> 2] & 15](i143, 32) | 0;
             HEAP32[i141 >> 2] = i150;
             i204 = i150;
            } else {
             i204 = i145;
            }
            d148 = +HEAPF32[i204 + 1124 >> 2] + +HEAPF32[i49 >> 2];
            i145 = HEAP32[i30 >> 2] | 0;
            i150 = i178 + 1 | 0;
            if ((i122 | 0) >= (i150 | 0)) {
             d202 = +0;
             break L255;
            }
            i141 = i145 + 16 | 0;
            i143 = i145 + 8 | 0;
            i145 = i143;
            i153 = i143 | 0;
            i143 = i122;
            d147 = +0;
            while (1) {
             if ((HEAP32[i141 >> 2] & 32 | 0) == 0) {
              i205 = HEAP16[(HEAP32[i145 >> 2] | 0) + (i143 << 1) >> 1] & 255;
             } else {
              i205 = HEAP8[(HEAP32[i153 >> 2] | 0) + i143 | 0] | 0;
             }
             L277 : do {
              if (i205 << 24 >> 24 < 33) {
               do {
                if ((i205 << 24 >> 24 | 0) == 9) {
                 if (((HEAP32[i19 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0) {
                  break;
                 }
                 i152 = HEAP32[(HEAP32[i37 >> 2] | 0) + 124 >> 2] | 0;
                 i154 = HEAP32[i35 >> 2] | 0;
                 i206 = i154 + 44 | 0;
                 i207 = HEAP32[i206 >> 2] | 0;
                 if ((i207 | 0) == 0) {
                  i208 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i154, i34, 0) | 0;
                  i154 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i208 >> 2] | 0) + 8 >> 2] & 15](i208, 32) | 0;
                  HEAP32[i206 >> 2] = i154;
                  i209 = i154;
                 } else {
                  i209 = i207;
                 }
                 if ((i152 | 0) == 0) {
                  d210 = +HEAPF32[i49 >> 2];
                 } else {
                  d157 = +(i152 >>> 0 >>> 0) * +HEAPF32[i209 + 1124 >> 2] + +HEAPF32[i49 >> 2];
                  d210 = d157 - +_fmod(+(d139 + d147), +d157);
                 }
                 d211 = d147 + d210;
                 break L277;
                } else if (!((i205 << 24 >> 24 | 0) == 32 | (i205 << 24 >> 24 | 0) == 10)) {
                 d211 = d147;
                 break L277;
                }
               } while (0);
               d157 = d148 + d147;
               if ((i143 | 0) <= (i122 | 0)) {
                d211 = d157;
                break;
               }
               d211 = d157 + +HEAPF32[i50 >> 2];
              } else {
               d211 = d148 + d147;
              }
             } while (0);
             i152 = i143 + 1 | 0;
             if ((i152 | 0) < (i150 | 0)) {
              i143 = i152;
              d147 = d211;
             } else {
              d202 = d211;
              break L255;
             }
            }
           }
          } while (0);
          __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKNS_10RenderTextEjjRKNS_11RenderStyleEj(i16, i52, i28, i1, i122, i151, i27, 1);
          HEAP32[i70 >> 2] = (HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] | 0) - i122;
          i143 = ((HEAP8[i54] & 1 ^ 1) & 255) << 6 | HEAP32[i71 >> 2] & -65;
          HEAP32[i71 >> 2] = i143;
          i150 = HEAP32[(HEAP32[i37 >> 2] | 0) + 124 >> 2] | 0;
          HEAP32[i71 >> 2] = (((HEAP32[i19 >> 2] & 7) - 1 | 0) >>> 0 < 2 >>> 0) << 3 | i143 & -9;
          HEAP32[i72 >> 2] = i150;
          HEAPF32[i73 >> 2] = d139;
          d147 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i28, i16, i3, i4);
          i150 = HEAP32[i74 >> 2] | 0;
          if ((i150 | 0) == 0) {
           d202 = d147;
           break;
          }
          i143 = i150 + 4 | 0;
          i150 = i143 | 0;
          i153 = (HEAP32[i150 >> 2] | 0) - 1 | 0;
          if ((i153 | 0) != 0) {
           HEAP32[i150 >> 2] = i153;
           d202 = d147;
           break;
          }
          i153 = i143 - 4 | 0;
          if ((i153 | 0) == 0) {
           d202 = d147;
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i153 >> 2] | 0) + 4 >> 2] & 31](i153);
          d202 = d147;
         }
        } while (0);
        d212 = d202 - d41;
        d213 = +0;
        i214 = i200;
        i215 = 0;
       } else {
        i201 = 0;
        i127 = 200;
       }
      } while (0);
      do {
       if ((i127 | 0) == 200) {
        i127 = 0;
        d139 = d113 + d114;
        do {
         if ((HEAP32[(HEAP32[i31 >> 2] | 0) + 296 >> 2] & 128 | 0) == 0) {
          i127 = 204;
         } else {
          if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i60 >> 2] | 0) + 560 >> 2] & 255](i52) | 0)) {
           i127 = 204;
           break;
          }
          if ((HEAP8[i61] & 1) == 0) {
           i127 = 204;
           break;
          }
          d216 = +HEAPF32[i62 >> 2];
         }
        } while (0);
        L306 : do {
         if ((i127 | 0) == 204) {
          i127 = 0;
          i151 = HEAP32[i35 >> 2] | 0;
          i153 = i151 + 108 | 0;
          i143 = HEAP32[i153 >> 2] | 0;
          if ((i143 & 458752 | 0) == 0) {
           __ZNK7WebCore10FontGlyphs14determinePitchERKNS_15FontDescriptionE(i151, i34);
           i217 = HEAP32[i153 >> 2] | 0;
          } else {
           i217 = i143;
          }
          do {
           if ((i217 & 458752 | 0) == 65536) {
            if ((HEAP32[i36 >> 2] & 32 | 0) != 0) {
             break;
            }
            if ((HEAP8[i25] | 0) >= 0) {
             break;
            }
            if (!i48) {
             if ((HEAP8[i51] & 1) != 0) {
              break;
             }
            }
            i143 = HEAP32[i35 >> 2] | 0;
            i153 = i143 + 44 | 0;
            i151 = HEAP32[i153 >> 2] | 0;
            if ((i151 | 0) == 0) {
             i150 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i143, i34, 0) | 0;
             i143 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i150 >> 2] | 0) + 8 >> 2] & 15](i150, 32) | 0;
             HEAP32[i153 >> 2] = i143;
             i218 = i143;
            } else {
             i218 = i151;
            }
            d147 = +HEAPF32[i218 + 1124 >> 2] + +HEAPF32[i49 >> 2];
            i151 = HEAP32[i30 >> 2] | 0;
            if ((i122 | 0) >= (i178 | 0)) {
             d216 = +0;
             break L306;
            }
            i143 = i151 + 16 | 0;
            i153 = i151 + 8 | 0;
            i151 = i153;
            i150 = i153 | 0;
            i153 = i122;
            d148 = +0;
            while (1) {
             if ((HEAP32[i143 >> 2] & 32 | 0) == 0) {
              i219 = HEAP16[(HEAP32[i151 >> 2] | 0) + (i153 << 1) >> 1] & 255;
             } else {
              i219 = HEAP8[(HEAP32[i150 >> 2] | 0) + i153 | 0] | 0;
             }
             L328 : do {
              if (i219 << 24 >> 24 < 33) {
               do {
                if ((i219 << 24 >> 24 | 0) == 9) {
                 if (((HEAP32[i19 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0) {
                  break;
                 }
                 i145 = HEAP32[(HEAP32[i37 >> 2] | 0) + 124 >> 2] | 0;
                 i141 = HEAP32[i35 >> 2] | 0;
                 i152 = i141 + 44 | 0;
                 i207 = HEAP32[i152 >> 2] | 0;
                 if ((i207 | 0) == 0) {
                  i154 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i141, i34, 0) | 0;
                  i141 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i154 >> 2] | 0) + 8 >> 2] & 15](i154, 32) | 0;
                  HEAP32[i152 >> 2] = i141;
                  i220 = i141;
                 } else {
                  i220 = i207;
                 }
                 if ((i145 | 0) == 0) {
                  d221 = +HEAPF32[i49 >> 2];
                 } else {
                  d157 = +(i145 >>> 0 >>> 0) * +HEAPF32[i220 + 1124 >> 2] + +HEAPF32[i49 >> 2];
                  d221 = d157 - +_fmod(+(d139 + d148), +d157);
                 }
                 d222 = d148 + d221;
                 break L328;
                } else if (!((i219 << 24 >> 24 | 0) == 32 | (i219 << 24 >> 24 | 0) == 10)) {
                 d222 = d148;
                 break L328;
                }
               } while (0);
               d157 = d147 + d148;
               if ((i153 | 0) <= (i122 | 0)) {
                d222 = d157;
                break;
               }
               d222 = d157 + +HEAPF32[i50 >> 2];
              } else {
               d222 = d147 + d148;
              }
             } while (0);
             i145 = i153 + 1 | 0;
             if ((i145 | 0) < (i178 | 0)) {
              i153 = i145;
              d148 = d222;
             } else {
              d216 = d222;
              break L306;
             }
            }
           }
          } while (0);
          __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKNS_10RenderTextEjjRKNS_11RenderStyleEj(i15, i52, i28, i1, i122, i123, i27, 1);
          HEAP32[i75 >> 2] = (HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] | 0) - i122;
          i153 = ((HEAP8[i54] & 1 ^ 1) & 255) << 6 | HEAP32[i76 >> 2] & -65;
          HEAP32[i76 >> 2] = i153;
          i150 = HEAP32[(HEAP32[i37 >> 2] | 0) + 124 >> 2] | 0;
          HEAP32[i76 >> 2] = (((HEAP32[i19 >> 2] & 7) - 1 | 0) >>> 0 < 2 >>> 0) << 3 | i153 & -9;
          HEAP32[i77 >> 2] = i150;
          HEAPF32[i78 >> 2] = d139;
          d148 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i28, i15, i3, i4);
          i150 = HEAP32[i79 >> 2] | 0;
          if ((i150 | 0) == 0) {
           d216 = d148;
           break;
          }
          i153 = i150 + 4 | 0;
          i150 = i153 | 0;
          i151 = (HEAP32[i150 >> 2] | 0) - 1 | 0;
          if ((i151 | 0) != 0) {
           HEAP32[i150 >> 2] = i151;
           d216 = d148;
           break;
          }
          i151 = i153 - 4 | 0;
          if ((i151 | 0) == 0) {
           d216 = d148;
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i151 >> 2] | 0) + 4 >> 2] & 31](i151);
          d216 = d148;
         }
        } while (0);
        if (i180 << 16 >> 16 != 173) {
         d212 = d216;
         d213 = +0;
         i214 = i201;
         i215 = 1;
         break;
        }
        if ((HEAP32[(HEAP32[i37 >> 2] | 0) + 88 >> 2] & 6291456 | 0) == 0) {
         d212 = d216;
         d213 = +0;
         i214 = i201;
         i215 = 1;
         break;
        }
        i151 = HEAP32[(HEAP32[i26 >> 2] | 0) + 36 >> 2] | 0;
        __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontERKN3WTF6StringERKNS_11RenderStyleEjj(i6, i52, i28, __ZNK7WebCore11RenderStyle12hyphenStringEv(i151) | 0, i151, 1, 0);
        d139 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i28, i6, 0, 0);
        i151 = HEAP32[i80 >> 2] | 0;
        do {
         if ((i151 | 0) != 0) {
          i153 = i151 + 4 | 0;
          i150 = i153 | 0;
          i143 = (HEAP32[i150 >> 2] | 0) - 1 | 0;
          if ((i143 | 0) != 0) {
           HEAP32[i150 >> 2] = i143;
           break;
          }
          i143 = i153 - 4 | 0;
          if ((i143 | 0) == 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i143 >> 2] | 0) + 4 >> 2] & 31](i143);
         }
        } while (0);
        d212 = d216;
        d213 = d139 + +0;
        i214 = i201;
        i215 = 1;
       }
      } while (0);
      do {
       if (d212 > d42) {
        i151 = HEAP32[i30 >> 2] | 0;
        do {
         if ((i151 | 0) == 0) {
          i223 = 0;
         } else {
          if ((HEAP32[i151 + 16 >> 2] & 32 | 0) == 0) {
           i223 = HEAP32[i151 + 8 >> 2] | 0;
           break;
          } else {
           i223 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i151) | 0;
           break;
          }
         }
        } while (0);
        i151 = i223 + (i122 << 1) | 0;
        do {
         if ((i123 | 0) > (i43 | 0)) {
          HEAP32[i82 >> 2] = i81;
          HEAP32[i83 >> 2] = 8;
          HEAP32[i84 >> 2] = 0;
          i143 = __ZN7WebCore18lastHyphenLocationEPKtjjRKN3WTF12AtomicStringE(i151, i123, i123 - i43 | 0, (HEAP32[i37 >> 2] | 0) + 108 | 0) | 0;
          HEAP32[i9 >> 2] = i143;
          i153 = HEAP32[i84 >> 2] | 0;
          if ((i143 | 0) < (i44 | 0)) {
           i224 = i153;
          } else {
           i150 = i143;
           i143 = i153;
           while (1) {
            if ((i143 | 0) == (HEAP32[i83 >> 2] | 0)) {
             i153 = i143 + 1 | 0;
             i145 = HEAP32[i82 >> 2] | 0;
             do {
              if (i145 >>> 0 > i9 >>> 0) {
               i127 = 255;
              } else {
               if ((i145 + (i143 << 2) | 0) >>> 0 <= i9 >>> 0) {
                i127 = 255;
                break;
               }
               i207 = i95 - i145 >> 2;
               i141 = i153 + (i143 >>> 2) | 0;
               i152 = i141 >>> 0 > 16 >>> 0 ? i141 : 16;
               i141 = i152 >>> 0 > i153 >>> 0 ? i152 : i153;
               do {
                if (i143 >>> 0 < i141 >>> 0) {
                 if (i141 >>> 0 > 8 >>> 0) {
                  if (i141 >>> 0 > 1073741823 >>> 0) {
                   i127 = 269;
                   break L34;
                  }
                  i152 = __ZN3WTF18fastMallocGoodSizeEj(i141 << 2) | 0;
                  HEAP32[i83 >> 2] = i152 >>> 2;
                  i154 = __ZN3WTF10fastMallocEj(i152) | 0;
                  HEAP32[i82 >> 2] = i154;
                  i225 = i154;
                 } else {
                  HEAP32[i82 >> 2] = i81;
                  HEAP32[i83 >> 2] = 8;
                  i225 = i81;
                 }
                 i154 = i145;
                 _memcpy(i225 | 0, i154 | 0, i143 << 2) | 0;
                 if ((i81 | 0) == (i145 | 0) | (i145 | 0) == 0) {
                  break;
                 }
                 if ((HEAP32[i82 >> 2] | 0) == (i145 | 0)) {
                  HEAP32[i82 >> 2] = 0;
                  HEAP32[i83 >> 2] = 0;
                 }
                 __ZN3WTF8fastFreeEPv(i154);
                }
               } while (0);
               i141 = HEAP32[i82 >> 2] | 0;
               i226 = i141 + (i207 << 2) | 0;
               i227 = i141;
              }
             } while (0);
             if ((i127 | 0) == 255) {
              i127 = 0;
              i141 = i153 + (i143 >>> 2) | 0;
              i154 = i141 >>> 0 > 16 >>> 0 ? i141 : 16;
              i141 = i154 >>> 0 > i153 >>> 0 ? i154 : i153;
              do {
               if (i143 >>> 0 < i141 >>> 0) {
                if (i141 >>> 0 > 8 >>> 0) {
                 if (i141 >>> 0 > 1073741823 >>> 0) {
                  i127 = 258;
                  break L34;
                 }
                 i154 = __ZN3WTF18fastMallocGoodSizeEj(i141 << 2) | 0;
                 HEAP32[i83 >> 2] = i154 >>> 2;
                 i152 = __ZN3WTF10fastMallocEj(i154) | 0;
                 HEAP32[i82 >> 2] = i152;
                 i228 = i152;
                } else {
                 HEAP32[i82 >> 2] = i81;
                 HEAP32[i83 >> 2] = 8;
                 i228 = i81;
                }
                i152 = i145;
                _memcpy(i228 | 0, i152 | 0, i143 << 2) | 0;
                if ((i81 | 0) == (i145 | 0) | (i145 | 0) == 0) {
                 break;
                }
                if ((HEAP32[i82 >> 2] | 0) == (i145 | 0)) {
                 HEAP32[i82 >> 2] = 0;
                 HEAP32[i83 >> 2] = 0;
                }
                __ZN3WTF8fastFreeEPv(i152);
               }
              } while (0);
              i226 = i9;
              i227 = HEAP32[i82 >> 2] | 0;
             }
             HEAP32[i227 + (HEAP32[i84 >> 2] << 2) >> 2] = HEAP32[i226 >> 2];
             i229 = HEAP32[i84 >> 2] | 0;
            } else {
             HEAP32[(HEAP32[i82 >> 2] | 0) + (i143 << 2) >> 2] = i150;
             i229 = HEAP32[i84 >> 2] | 0;
            }
            HEAP32[i84 >> 2] = i229 + 1;
            i145 = __ZN7WebCore18lastHyphenLocationEPKtjjRKN3WTF12AtomicStringE(i151, i123, HEAP32[i9 >> 2] | 0, (HEAP32[i37 >> 2] | 0) + 108 | 0) | 0;
            HEAP32[i9 >> 2] = i145;
            i141 = HEAP32[i84 >> 2] | 0;
            if ((i145 | 0) < (i44 | 0)) {
             i224 = i141;
             break;
            } else {
             i150 = i145;
             i143 = i141;
            }
           }
          }
          do {
           if ((i224 | 0) == 0) {
            d230 = +0;
            i231 = 0;
           } else {
            if (i224 >>> 0 > 1 >>> 0) {
             i143 = 0;
             i150 = i224;
             while (1) {
              if (i150 >>> 0 <= i143 >>> 0) {
               i127 = 282;
               break L34;
              }
              i141 = HEAP32[i82 >> 2] | 0;
              i145 = i141 + (i143 << 2) | 0;
              i153 = _llvm_uadd_with_overflow_i32(i150 | 0, ~i143 | 0) | 0;
              if (!tempRet0) {
               i127 = 284;
               break L34;
              }
              i152 = i141 + (i153 << 2) | 0;
              i153 = HEAP32[i145 >> 2] | 0;
              HEAP32[i145 >> 2] = HEAP32[i152 >> 2];
              HEAP32[i152 >> 2] = i153;
              i143 = i143 + 1 | 0;
              i150 = HEAP32[i84 >> 2] | 0;
              if (i143 >>> 0 >= i150 >>> 1 >>> 0) {
               break;
              }
             }
            }
            d139 = +((~~(+HEAPF32[i62 >> 2] + +.5) * 5 & -1 | 0) / 4 & -1 | 0);
            i150 = HEAP32[(HEAP32[i26 >> 2] | 0) + 36 >> 2] | 0;
            __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontERKN3WTF6StringERKNS_11RenderStyleEjj(i7, i52, i28, __ZNK7WebCore11RenderStyle12hyphenStringEv(i150) | 0, i150, 1, 0);
            d148 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i28, i7, 0, 0);
            i150 = HEAP32[i85 >> 2] | 0;
            do {
             if ((i150 | 0) != 0) {
              i143 = i150 + 4 | 0;
              i153 = i143 | 0;
              i152 = (HEAP32[i153 >> 2] | 0) - 1 | 0;
              if ((i152 | 0) != 0) {
               HEAP32[i153 >> 2] = i152;
               break;
              }
              i152 = i143 - 4 | 0;
              if ((i152 | 0) == 0) {
               break;
              }
              FUNCTION_TABLE_vi[HEAP32[(HEAP32[i152 >> 2] | 0) + 4 >> 2] & 31](i152);
             }
            } while (0);
            d147 = d139 + d148;
            if ((HEAP32[i84 >> 2] | 0) == 0) {
             d230 = +0;
             i231 = 0;
             break;
            } else {
             d232 = +0;
             i233 = 0;
             i234 = 0;
            }
            while (1) {
             i150 = HEAP32[(HEAP32[i82 >> 2] | 0) + (i233 << 2) >> 2] | 0;
             HEAP32[i86 >> 2] = 0;
             HEAP32[i87 >> 2] = 0;
             HEAP32[i88 >> 2] = 0;
             HEAP8[i89] = 1;
             HEAP32[i90 >> 2] = 0;
             HEAP32[i91 >> 2] = 0;
             __ZN3WTF13StringBuilder6appendEPKtj(i10, i223 + (i234 + i122 << 1) | 0, i150 - i234 | 0);
             __ZN3WTF13StringBuilder6appendERKNS_6StringE(i10, __ZNK7WebCore11RenderStyle12hyphenStringEv(i27) | 0);
             i152 = HEAP32[i86 >> 2] | 0;
             do {
              if ((i152 | 0) == 0) {
               i235 = 0;
              } else {
               i143 = HEAP32[i87 >> 2] | 0;
               if ((i143 | 0) != 0) {
                if ((HEAP32[i143 + 16 >> 2] & 32 | 0) == 0) {
                 i235 = HEAP32[i143 + 8 >> 2] | 0;
                 break;
                } else {
                 i235 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i143) | 0;
                 break;
                }
               }
               i143 = HEAP32[i88 >> 2] | 0;
               do {
                if ((HEAP32[i143 + 16 >> 2] & 64 | 0) == 0) {
                 i236 = i152;
                 i237 = i143;
                } else {
                 i153 = HEAP32[i90 >> 2] | 0;
                 if (i153 >>> 0 >= i152 >>> 0) {
                  i236 = i152;
                  i237 = i143;
                  break;
                 }
                 __ZNK3WTF10StringImpl19upconvertCharactersEjj(i143, i153, i152);
                 i236 = HEAP32[i86 >> 2] | 0;
                 i237 = HEAP32[i88 >> 2] | 0;
                }
               } while (0);
               HEAP32[i90 >> 2] = i236;
               if ((HEAP32[i237 + 16 >> 2] & 32 | 0) == 0) {
                i235 = HEAP32[i237 + 8 >> 2] | 0;
                break;
               } else {
                i235 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i237) | 0;
                break;
               }
              }
             } while (0);
             __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKtiRKNS_11RenderStyleEj(i11, i52, i28, i235, HEAP32[i86 >> 2] | 0, i27, 1);
             HEAP32[i92 >> 2] = HEAP32[i86 >> 2];
             HEAP32[i93 >> 2] = ((HEAP8[i54] & 1 ^ 1) & 255) << 6 | HEAP32[i93 >> 2] & -65;
             d157 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i28, i11, i3, i4);
             if (d157 > d147) {
              d238 = d232 < d157 ? d157 : d232;
              i239 = i150;
             } else {
              d238 = d232;
              i239 = i234;
             }
             i152 = HEAP32[i94 >> 2] | 0;
             do {
              if ((i152 | 0) != 0) {
               i207 = i152 + 4 | 0;
               i143 = i207 | 0;
               i153 = (HEAP32[i143 >> 2] | 0) - 1 | 0;
               if ((i153 | 0) != 0) {
                HEAP32[i143 >> 2] = i153;
                break;
               }
               i153 = i207 - 4 | 0;
               if ((i153 | 0) == 0) {
                break;
               }
               FUNCTION_TABLE_vi[HEAP32[(HEAP32[i153 >> 2] | 0) + 4 >> 2] & 31](i153);
              }
             } while (0);
             i152 = HEAP32[i88 >> 2] | 0;
             do {
              if ((i152 | 0) != 0) {
               i150 = i152 | 0;
               i153 = (HEAP32[i150 >> 2] | 0) - 2 | 0;
               if ((i153 | 0) == 0) {
                __ZN3WTF10StringImpl7destroyEPS0_(i152);
                break;
               } else {
                HEAP32[i150 >> 2] = i153;
                break;
               }
              }
             } while (0);
             i152 = HEAP32[i87 >> 2] | 0;
             do {
              if ((i152 | 0) != 0) {
               i153 = i152 | 0;
               i150 = (HEAP32[i153 >> 2] | 0) - 2 | 0;
               if ((i150 | 0) == 0) {
                __ZN3WTF10StringImpl7destroyEPS0_(i152);
                break;
               } else {
                HEAP32[i153 >> 2] = i150;
                break;
               }
              }
             } while (0);
             i152 = i233 + 1 | 0;
             i240 = HEAP32[i84 >> 2] | 0;
             if (i152 >>> 0 < i240 >>> 0) {
              d232 = d238;
              i233 = i152;
              i234 = i239;
             } else {
              break;
             }
            }
            if ((i240 | 0) == 0) {
             d230 = d238;
             i231 = i239;
             break;
            }
            HEAP32[i84 >> 2] = 0;
            d230 = d238;
            i231 = i239;
           }
          } while (0);
          i152 = HEAP32[i82 >> 2] | 0;
          if ((i81 | 0) == (i152 | 0) | (i152 | 0) == 0) {
           d241 = d230;
           i242 = i231;
           break;
          }
          HEAP32[i82 >> 2] = 0;
          HEAP32[i83 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i152);
          d241 = d230;
          i242 = i231;
         } else {
          d241 = +0;
          i242 = 0;
         }
        } while (0);
        if ((i242 | 0) == 0) {
         d243 = d213;
         d244 = d212;
         break;
        }
        i151 = i242 + i122 | 0;
        i152 = i123 - i242 | 0;
        L470 : do {
         if (i215) {
          d147 = d113 + d114;
          do {
           if ((HEAP32[(HEAP32[i31 >> 2] | 0) + 296 >> 2] & 128 | 0) != 0) {
            if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i60 >> 2] | 0) + 560 >> 2] & 255](i52) | 0)) {
             break;
            }
            if ((HEAP8[i61] & 1) == 0) {
             break;
            }
            d245 = +HEAPF32[i62 >> 2];
            break L470;
           }
          } while (0);
          i150 = HEAP32[i35 >> 2] | 0;
          i153 = i150 + 108 | 0;
          i207 = HEAP32[i153 >> 2] | 0;
          if ((i207 & 458752 | 0) == 0) {
           __ZNK7WebCore10FontGlyphs14determinePitchERKNS_15FontDescriptionE(i150, i34);
           i246 = HEAP32[i153 >> 2] | 0;
          } else {
           i246 = i207;
          }
          do {
           if ((i246 & 458752 | 0) == 65536) {
            if ((HEAP32[i36 >> 2] & 32 | 0) != 0) {
             break;
            }
            if ((HEAP8[i25] | 0) >= 0) {
             break;
            }
            i207 = HEAP32[i35 >> 2] | 0;
            i153 = i207 + 44 | 0;
            i150 = HEAP32[i153 >> 2] | 0;
            if ((i150 | 0) == 0) {
             i143 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i207, i34, 0) | 0;
             i207 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i143 >> 2] | 0) + 8 >> 2] & 15](i143, 32) | 0;
             HEAP32[i153 >> 2] = i207;
             i247 = i207;
            } else {
             i247 = i150;
            }
            d148 = +HEAPF32[i247 + 1124 >> 2] + +HEAPF32[i49 >> 2];
            i150 = HEAP32[i30 >> 2] | 0;
            if ((i151 | 0) >= (i178 | 0)) {
             d245 = +0;
             break L470;
            }
            i207 = i150 + 16 | 0;
            i153 = i150 + 8 | 0;
            i150 = i153;
            i143 = i153 | 0;
            i153 = i151;
            d139 = +0;
            while (1) {
             if ((HEAP32[i207 >> 2] & 32 | 0) == 0) {
              i248 = HEAP16[(HEAP32[i150 >> 2] | 0) + (i153 << 1) >> 1] & 255;
             } else {
              i248 = HEAP8[(HEAP32[i143 >> 2] | 0) + i153 | 0] | 0;
             }
             L541 : do {
              if (i248 << 24 >> 24 < 33) {
               do {
                if ((i248 << 24 >> 24 | 0) == 9) {
                 if (((HEAP32[i19 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0) {
                  break;
                 }
                 i145 = HEAP32[(HEAP32[i37 >> 2] | 0) + 124 >> 2] | 0;
                 i141 = HEAP32[i35 >> 2] | 0;
                 i154 = i141 + 44 | 0;
                 i206 = HEAP32[i154 >> 2] | 0;
                 if ((i206 | 0) == 0) {
                  i208 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i141, i34, 0) | 0;
                  i141 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i208 >> 2] | 0) + 8 >> 2] & 15](i208, 32) | 0;
                  HEAP32[i154 >> 2] = i141;
                  i249 = i141;
                 } else {
                  i249 = i206;
                 }
                 if ((i145 | 0) == 0) {
                  d250 = +HEAPF32[i49 >> 2];
                 } else {
                  d157 = +(i145 >>> 0 >>> 0) * +HEAPF32[i249 + 1124 >> 2] + +HEAPF32[i49 >> 2];
                  d250 = d157 - +_fmod(+(d147 + d139), +d157);
                 }
                 d251 = d139 + d250;
                 break L541;
                } else if (!((i248 << 24 >> 24 | 0) == 32 | (i248 << 24 >> 24 | 0) == 10)) {
                 d251 = d139;
                 break L541;
                }
               } while (0);
               d157 = d148 + d139;
               if ((i153 | 0) <= (i151 | 0)) {
                d251 = d157;
                break;
               }
               d251 = d157 + +HEAPF32[i50 >> 2];
              } else {
               d251 = d148 + d139;
              }
             } while (0);
             i145 = i153 + 1 | 0;
             if ((i145 | 0) < (i178 | 0)) {
              i153 = i145;
              d139 = d251;
             } else {
              d245 = d251;
              break L470;
             }
            }
           }
          } while (0);
          __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKNS_10RenderTextEjjRKNS_11RenderStyleEj(i13, i52, i28, i1, i151, i152, i27, 1);
          HEAP32[i96 >> 2] = (HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] | 0) - i151;
          i153 = ((HEAP8[i54] & 1 ^ 1) & 255) << 6 | HEAP32[i97 >> 2] & -65;
          HEAP32[i97 >> 2] = i153;
          i143 = HEAP32[(HEAP32[i37 >> 2] | 0) + 124 >> 2] | 0;
          HEAP32[i97 >> 2] = (((HEAP32[i19 >> 2] & 7) - 1 | 0) >>> 0 < 2 >>> 0) << 3 | i153 & -9;
          HEAP32[i98 >> 2] = i143;
          HEAPF32[i99 >> 2] = d147;
          d139 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i28, i13, 0, 0);
          i143 = HEAP32[i100 >> 2] | 0;
          if ((i143 | 0) == 0) {
           d245 = d139;
           break;
          }
          i153 = i143 + 4 | 0;
          i143 = i153 | 0;
          i150 = (HEAP32[i143 >> 2] | 0) - 1 | 0;
          if ((i150 | 0) != 0) {
           HEAP32[i143 >> 2] = i150;
           d245 = d139;
           break;
          }
          i150 = i153 - 4 | 0;
          if ((i150 | 0) == 0) {
           d245 = d139;
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i150 >> 2] | 0) + 4 >> 2] & 31](i150);
          d245 = d139;
         } else {
          i150 = i152 + 1 | 0;
          d139 = d113 + d114;
          do {
           if ((HEAP32[(HEAP32[i31 >> 2] | 0) + 296 >> 2] & 128 | 0) == 0) {
            i127 = 329;
           } else {
            if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i60 >> 2] | 0) + 560 >> 2] & 255](i52) | 0)) {
             i127 = 329;
             break;
            }
            if ((HEAP8[i61] & 1) == 0) {
             i127 = 329;
             break;
            }
            d252 = +HEAPF32[i62 >> 2];
           }
          } while (0);
          L476 : do {
           if ((i127 | 0) == 329) {
            i127 = 0;
            i153 = HEAP32[i35 >> 2] | 0;
            i143 = i153 + 108 | 0;
            i207 = HEAP32[i143 >> 2] | 0;
            if ((i207 & 458752 | 0) == 0) {
             __ZNK7WebCore10FontGlyphs14determinePitchERKNS_15FontDescriptionE(i153, i34);
             i253 = HEAP32[i143 >> 2] | 0;
            } else {
             i253 = i207;
            }
            do {
             if ((i253 & 458752 | 0) == 65536) {
              if ((HEAP32[i36 >> 2] & 32 | 0) != 0) {
               break;
              }
              if ((HEAP8[i25] | 0) >= 0) {
               break;
              }
              i207 = HEAP32[i35 >> 2] | 0;
              i143 = i207 + 44 | 0;
              i153 = HEAP32[i143 >> 2] | 0;
              if ((i153 | 0) == 0) {
               i145 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i207, i34, 0) | 0;
               i207 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i145 >> 2] | 0) + 8 >> 2] & 15](i145, 32) | 0;
               HEAP32[i143 >> 2] = i207;
               i254 = i207;
              } else {
               i254 = i153;
              }
              d147 = +HEAPF32[i254 + 1124 >> 2] + +HEAPF32[i49 >> 2];
              i153 = HEAP32[i30 >> 2] | 0;
              i207 = i178 + 1 | 0;
              if ((i151 | 0) >= (i207 | 0)) {
               d252 = +0;
               break L476;
              }
              i143 = i153 + 16 | 0;
              i145 = i153 + 8 | 0;
              i153 = i145;
              i206 = i145 | 0;
              i145 = i151;
              d148 = +0;
              while (1) {
               if ((HEAP32[i143 >> 2] & 32 | 0) == 0) {
                i255 = HEAP16[(HEAP32[i153 >> 2] | 0) + (i145 << 1) >> 1] & 255;
               } else {
                i255 = HEAP8[(HEAP32[i206 >> 2] | 0) + i145 | 0] | 0;
               }
               L495 : do {
                if (i255 << 24 >> 24 < 33) {
                 do {
                  if ((i255 << 24 >> 24 | 0) == 9) {
                   if (((HEAP32[i19 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0) {
                    break;
                   }
                   i141 = HEAP32[(HEAP32[i37 >> 2] | 0) + 124 >> 2] | 0;
                   i154 = HEAP32[i35 >> 2] | 0;
                   i208 = i154 + 44 | 0;
                   i256 = HEAP32[i208 >> 2] | 0;
                   if ((i256 | 0) == 0) {
                    i257 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i154, i34, 0) | 0;
                    i154 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i257 >> 2] | 0) + 8 >> 2] & 15](i257, 32) | 0;
                    HEAP32[i208 >> 2] = i154;
                    i258 = i154;
                   } else {
                    i258 = i256;
                   }
                   if ((i141 | 0) == 0) {
                    d259 = +HEAPF32[i49 >> 2];
                   } else {
                    d157 = +(i141 >>> 0 >>> 0) * +HEAPF32[i258 + 1124 >> 2] + +HEAPF32[i49 >> 2];
                    d259 = d157 - +_fmod(+(d139 + d148), +d157);
                   }
                   d260 = d148 + d259;
                   break L495;
                  } else if (!((i255 << 24 >> 24 | 0) == 32 | (i255 << 24 >> 24 | 0) == 10)) {
                   d260 = d148;
                   break L495;
                  }
                 } while (0);
                 d157 = d147 + d148;
                 if ((i145 | 0) <= (i151 | 0)) {
                  d260 = d157;
                  break;
                 }
                 d260 = d157 + +HEAPF32[i50 >> 2];
                } else {
                 d260 = d147 + d148;
                }
               } while (0);
               i141 = i145 + 1 | 0;
               if ((i141 | 0) < (i207 | 0)) {
                i145 = i141;
                d148 = d260;
               } else {
                d252 = d260;
                break L476;
               }
              }
             }
            } while (0);
            __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKNS_10RenderTextEjjRKNS_11RenderStyleEj(i14, i52, i28, i1, i151, i150, i27, 1);
            HEAP32[i101 >> 2] = (HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] | 0) - i151;
            i145 = ((HEAP8[i54] & 1 ^ 1) & 255) << 6 | HEAP32[i102 >> 2] & -65;
            HEAP32[i102 >> 2] = i145;
            i207 = HEAP32[(HEAP32[i37 >> 2] | 0) + 124 >> 2] | 0;
            HEAP32[i102 >> 2] = (((HEAP32[i19 >> 2] & 7) - 1 | 0) >>> 0 < 2 >>> 0) << 3 | i145 & -9;
            HEAP32[i103 >> 2] = i207;
            HEAPF32[i104 >> 2] = d139;
            d148 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i28, i14, 0, 0);
            i207 = HEAP32[i105 >> 2] | 0;
            if ((i207 | 0) == 0) {
             d252 = d148;
             break;
            }
            i145 = i207 + 4 | 0;
            i207 = i145 | 0;
            i206 = (HEAP32[i207 >> 2] | 0) - 1 | 0;
            if ((i206 | 0) != 0) {
             HEAP32[i207 >> 2] = i206;
             d252 = d148;
             break;
            }
            i206 = i145 - 4 | 0;
            if ((i206 | 0) == 0) {
             d252 = d148;
             break;
            }
            FUNCTION_TABLE_vi[HEAP32[(HEAP32[i206 >> 2] | 0) + 4 >> 2] & 31](i206);
            d252 = d148;
           }
          } while (0);
          d245 = d252 - d41;
         }
        } while (0);
        d139 = d241 < d245 ? d245 : d241;
        d243 = d213 + (d139 - d212);
        d244 = d42 < d139 ? d139 : d42;
       } else {
        d243 = d213;
        d244 = d42;
       }
      } while (0);
      if ((i121 | 0) < 0) {
       i261 = HEAP32[i59 >> 2] | 0;
      } else {
       i261 = i121;
      }
      d139 = d212 + d243;
      if (i179) {
       L570 : do {
        if ((i120 | 0) == (i122 | 0)) {
         d262 = d212;
        } else {
         i123 = i178 - i120 | 0;
         d148 = d113 + d114;
         do {
          if ((HEAP32[(HEAP32[i31 >> 2] | 0) + 296 >> 2] & 128 | 0) != 0) {
           if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i60 >> 2] | 0) + 560 >> 2] & 255](i52) | 0)) {
            break;
           }
           if ((HEAP8[i61] & 1) == 0) {
            break;
           }
           d262 = +HEAPF32[i62 >> 2];
           break L570;
          }
         } while (0);
         i151 = HEAP32[i35 >> 2] | 0;
         i152 = i151 + 108 | 0;
         i150 = HEAP32[i152 >> 2] | 0;
         if ((i150 & 458752 | 0) == 0) {
          __ZNK7WebCore10FontGlyphs14determinePitchERKNS_15FontDescriptionE(i151, i34);
          i263 = HEAP32[i152 >> 2] | 0;
         } else {
          i263 = i150;
         }
         do {
          if ((i263 & 458752 | 0) == 65536) {
           if ((HEAP32[i36 >> 2] & 32 | 0) != 0) {
            break;
           }
           if ((HEAP8[i25] | 0) >= 0) {
            break;
           }
           if (!i48) {
            if ((HEAP8[i51] & 1) != 0) {
             break;
            }
           }
           i150 = HEAP32[i35 >> 2] | 0;
           i152 = i150 + 44 | 0;
           i151 = HEAP32[i152 >> 2] | 0;
           if ((i151 | 0) == 0) {
            i206 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i150, i34, 0) | 0;
            i150 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i206 >> 2] | 0) + 8 >> 2] & 15](i206, 32) | 0;
            HEAP32[i152 >> 2] = i150;
            i264 = i150;
           } else {
            i264 = i151;
           }
           d147 = +HEAPF32[i264 + 1124 >> 2] + +HEAPF32[i49 >> 2];
           i151 = HEAP32[i30 >> 2] | 0;
           if ((i120 | 0) >= (i178 | 0)) {
            d262 = +0;
            break L570;
           }
           i150 = i151 + 16 | 0;
           i152 = i151 + 8 | 0;
           i151 = i152;
           i206 = i152 | 0;
           i152 = i120;
           d157 = +0;
           while (1) {
            if ((HEAP32[i150 >> 2] & 32 | 0) == 0) {
             i265 = HEAP16[(HEAP32[i151 >> 2] | 0) + (i152 << 1) >> 1] & 255;
            } else {
             i265 = HEAP8[(HEAP32[i206 >> 2] | 0) + i152 | 0] | 0;
            }
            L597 : do {
             if (i265 << 24 >> 24 < 33) {
              do {
               if ((i265 << 24 >> 24 | 0) == 9) {
                if (((HEAP32[i19 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0) {
                 break;
                }
                i145 = HEAP32[(HEAP32[i37 >> 2] | 0) + 124 >> 2] | 0;
                i207 = HEAP32[i35 >> 2] | 0;
                i153 = i207 + 44 | 0;
                i143 = HEAP32[i153 >> 2] | 0;
                if ((i143 | 0) == 0) {
                 i141 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i207, i34, 0) | 0;
                 i207 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i141 >> 2] | 0) + 8 >> 2] & 15](i141, 32) | 0;
                 HEAP32[i153 >> 2] = i207;
                 i266 = i207;
                } else {
                 i266 = i143;
                }
                if ((i145 | 0) == 0) {
                 d267 = +HEAPF32[i49 >> 2];
                } else {
                 d268 = +(i145 >>> 0 >>> 0) * +HEAPF32[i266 + 1124 >> 2] + +HEAPF32[i49 >> 2];
                 d267 = d268 - +_fmod(+(d148 + d157), +d268);
                }
                d269 = d157 + d267;
                break L597;
               } else if (!((i265 << 24 >> 24 | 0) == 32 | (i265 << 24 >> 24 | 0) == 10)) {
                d269 = d157;
                break L597;
               }
              } while (0);
              d268 = d147 + d157;
              if ((i152 | 0) <= (i120 | 0)) {
               d269 = d268;
               break;
              }
              d269 = d268 + +HEAPF32[i50 >> 2];
             } else {
              d269 = d147 + d157;
             }
            } while (0);
            i145 = i152 + 1 | 0;
            if ((i145 | 0) < (i178 | 0)) {
             i152 = i145;
             d157 = d269;
            } else {
             d262 = d269;
             break L570;
            }
           }
          }
         } while (0);
         __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKNS_10RenderTextEjjRKNS_11RenderStyleEj(i12, i52, i28, i1, i120, i123, i27, 1);
         HEAP32[i106 >> 2] = (HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] | 0) - i120;
         i152 = ((HEAP8[i54] & 1 ^ 1) & 255) << 6 | HEAP32[i107 >> 2] & -65;
         HEAP32[i107 >> 2] = i152;
         i206 = HEAP32[(HEAP32[i37 >> 2] | 0) + 124 >> 2] | 0;
         HEAP32[i107 >> 2] = (((HEAP32[i19 >> 2] & 7) - 1 | 0) >>> 0 < 2 >>> 0) << 3 | i152 & -9;
         HEAP32[i108 >> 2] = i206;
         HEAPF32[i109 >> 2] = d148;
         d157 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i28, i12, i3, i4);
         i206 = HEAP32[i110 >> 2] | 0;
         if ((i206 | 0) == 0) {
          d262 = d157;
          break;
         }
         i152 = i206 + 4 | 0;
         i206 = i152 | 0;
         i151 = (HEAP32[i206 >> 2] | 0) - 1 | 0;
         if ((i151 | 0) != 0) {
          HEAP32[i206 >> 2] = i151;
          d262 = d157;
          break;
         }
         i151 = i152 - 4 | 0;
         if ((i151 | 0) == 0) {
          d262 = d157;
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i151 >> 2] | 0) + 4 >> 2] & 31](i151);
         d262 = d157;
        }
       } while (0);
       i270 = i178;
       d271 = d113 + d262;
      } else {
       i270 = i120;
       d271 = d113;
      }
      do {
       if (i142) {
        i151 = i180 & 65535;
        if ((i151 | 0) == 10) {
         i152 = HEAP32[i19 >> 2] & 7;
         i272 = (i152 | 0) == 0 | (i152 | 0) == 4;
        } else if ((i151 | 0) == 32 | (i151 | 0) == 9) {
         i272 = ((HEAP32[i19 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0;
        } else {
         i272 = 0;
        }
        i151 = HEAP32[i19 >> 2] & 7;
        if ((i151 | 0) == 4 | (i151 | 0) == 1) {
         i273 = i272;
         break;
        }
        HEAP8[i25] = HEAP8[i25] | 1;
        i273 = i272;
       } else {
        i273 = 0;
       }
      } while (0);
      do {
       if (i111 & (i214 | i273)) {
        i142 = HEAP32[i30 >> 2] | 0;
        L631 : do {
         if (i32 >>> 0 > i178 >>> 0) {
          i151 = i142 + 8 | 0;
          if ((HEAP32[i142 + 16 >> 2] & 32 | 0) == 0) {
           i152 = HEAP32[i151 >> 2] | 0;
           i206 = i178;
           while (1) {
            i150 = HEAP16[i152 + (i206 << 1) >> 1] | 0;
            if (!((i150 << 16 >> 16 | 0) == 10 | (i150 << 16 >> 16 | 0) == 32 | (i150 << 16 >> 16 | 0) == 9)) {
             i274 = i206;
             break L631;
            }
            i150 = i206 + 1 | 0;
            if (i150 >>> 0 < i32 >>> 0) {
             i206 = i150;
            } else {
             i274 = i150;
             break;
            }
           }
          } else {
           i206 = HEAP32[i151 >> 2] | 0;
           i152 = i178;
           while (1) {
            i150 = HEAP8[i206 + i152 | 0] | 0;
            if (!((i150 << 24 >> 24 | 0) == 10 | (i150 << 24 >> 24 | 0) == 32 | (i150 << 24 >> 24 | 0) == 9)) {
             i274 = i152;
             break L631;
            }
            i150 = i152 + 1 | 0;
            if (i150 >>> 0 < i32 >>> 0) {
             i152 = i150;
            } else {
             i274 = i150;
             break;
            }
           }
          }
         } else {
          i274 = i178;
         }
        } while (0);
        if (i274 >>> 0 >= i32 >>> 0) {
         d275 = d271;
         break;
        }
        d275 = d29 + d271;
       } else {
        d275 = d271;
       }
      } while (0);
      if (i118) {
       if (i160) {
        HEAP8[i25] = HEAP8[i25] | 1;
       }
       HEAPF32[i22 >> 2] = i160 ? +0 : d139;
      }
      HEAPF32[i23 >> 2] = d139;
      if (d139 > +HEAPF32[i21 >> 2]) {
       HEAPF32[i21 >> 2] = d139;
      }
      i128 = i178 - 1 | 0;
      i129 = i261;
      i130 = i270;
      i131 = i119;
      i132 = 0;
      i133 = i115;
      d134 = d114;
      d135 = d275;
      d136 = d244;
      i137 = i181;
      i138 = 0;
     }
    } while (0);
    i142 = i128 + 1 | 0;
    if ((i142 | 0) < (i32 | 0)) {
     i112 = i137;
     d42 = d136;
     d113 = d135;
     d114 = d134;
     i115 = i133;
     i116 = i138;
     i117 = i126;
     i118 = i132;
     i119 = i131;
     i120 = i130;
     i121 = i129;
     i122 = i142;
    } else {
     i127 = 477;
     break;
    }
   }
   if ((i127 | 0) == 258) {
    _WTFCrash();
   } else if ((i127 | 0) == 269) {
    _WTFCrash();
   } else if ((i127 | 0) == 282) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i127 | 0) == 284) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i127 | 0) == 477) {
    if ((i129 | 0) > 0) {
     HEAP32[i4 >> 2] = i129;
    }
    if (!(i133 & (i32 | 0) > 1)) {
     if (i132 | i138 ^ 1) {
      d276 = d135;
      i277 = i131;
      break;
     }
    }
    d276 = d29 + d135;
    i277 = i131;
    break;
   }
  } else {
   d276 = +0;
   i277 = 1;
  }
 } while (0);
 d135 = +HEAPF32[i21 >> 2];
 HEAPF32[i21 >> 2] = d135 > +0 ? d135 : +0;
 d135 = +HEAPF32[i24 >> 2];
 d29 = d276 < d135 ? d135 : d276;
 HEAPF32[i24 >> 2] = d29;
 i24 = HEAP32[i19 >> 2] | 0;
 i131 = i24 & 7;
 if ((i131 | 0) == 4 | (i131 | 0) == 1) {
  HEAPF32[i21 >> 2] = d29;
  i278 = HEAP32[i19 >> 2] | 0;
 } else {
  i278 = i24;
 }
 if ((i278 & 7 | 0) == 1) {
  if (i277) {
   HEAPF32[i22 >> 2] = d29;
  }
  HEAPF32[i23 >> 2] = d276;
 }
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i1 | 0, 0, 1);
 i1 = HEAP32[i38 >> 2] | 0;
 if ((i1 | 0) != 0) {
  __ZN7WebCore24releaseLineBreakIteratorEPNS_17TextBreakIteratorE(i1);
 }
 i1 = HEAP32[i40 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i40 = i1 | 0;
   i38 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
   if ((i38 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i40 >> 2] = i38;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i39 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i39 = i1 | 0;
 i38 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
 if ((i38 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i39 >> 2] = i38;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore10RenderText17trimmedPrefWidthsEfRfRbS1_S2_S2_S2_S1_S1_S1_S1_S2_(i1, d2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 var i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, d34 = +0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, d55 = +0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, d62 = +0, d63 = +0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, d70 = +0, d71 = +0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, d79 = +0, d80 = +0, d81 = +0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i15 = i14 | 0;
 i16 = i14 + 40 | 0;
 i17 = i14 + 48 | 0;
 i18 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 i19 = i18 + 44 | 0;
 i20 = ((HEAP32[i19 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0;
 if (!i20) {
  HEAP8[i13] = 0;
 }
 i21 = i1 + 24 | 0;
 if ((HEAP8[i21] & 4) == 0) {
  if ((HEAP32[i1 + 20 >> 2] & 32 | 0) != 0) {
   i22 = 5;
  }
 } else {
  i22 = 5;
 }
 if ((i22 | 0) == 5) {
  FUNCTION_TABLE_vif[HEAP32[(HEAP32[i1 >> 2] | 0) + 656 >> 2] & 3](i1, d2);
 }
 if ((HEAP8[i13] & 1) == 0) {
  i23 = (HEAPU8[i21] | 0) >>> 3 & 1;
 } else {
  i23 = 0;
 }
 HEAP8[i4] = i23;
 HEAP8[i6] = (HEAPU8[i21] | 0) >>> 4 & 1;
 i6 = i1 + 44 | 0;
 i23 = HEAP32[i6 >> 2] | 0;
 i4 = HEAP32[i23 + 4 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP8[i13] & 1) != 0) {
    if (__ZN3WTF10StringImpl22containsOnlyWhitespaceEv(i23) | 0) {
     break;
    }
   }
   HEAPF32[i11 >> 2] = +HEAPF32[i1 + 28 >> 2];
   HEAPF32[i12 >> 2] = +HEAPF32[i1 + 32 >> 2];
   HEAPF32[i3 >> 2] = +HEAPF32[i1 + 36 >> 2];
   HEAPF32[i5 >> 2] = +HEAPF32[i1 + 40 >> 2];
   HEAP8[i7] = HEAP8[i21] & 1;
   HEAP8[i8] = (HEAPU8[i21] | 0) >>> 1 & 1;
   i24 = HEAP32[i6 >> 2] | 0;
   i25 = i24 + 16 | 0;
   i26 = (HEAP32[i25 >> 2] & 32 | 0) == 0;
   i27 = i24 + 8 | 0;
   if (i26) {
    i24 = HEAP32[i27 >> 2] | 0;
    i28 = HEAP16[i24 >> 1] | 0;
    i29 = i24;
    i30 = i24;
   } else {
    i24 = HEAP32[i27 >> 2] | 0;
    i28 = HEAPU8[i24] | 0;
    i29 = i24;
    i30 = i24;
   }
   do {
    if (i28 << 16 >> 16 == 32) {
     i22 = 25;
    } else {
     if (i26) {
      i31 = HEAP16[i29 >> 1] | 0;
      i32 = i29;
     } else {
      i31 = HEAPU8[i30] | 0;
      i32 = i30;
     }
     if (i31 << 16 >> 16 == 10) {
      i24 = HEAP32[i19 >> 2] & 7;
      if ((i24 | 0) == 4 | (i24 | 0) == 0) {
       i22 = 25;
       break;
      }
     }
     if (i26) {
      i33 = HEAP16[i32 >> 1] | 0;
     } else {
      i33 = HEAPU8[i30] | 0;
     }
     if (i33 << 16 >> 16 == 9) {
      i22 = 25;
     }
    }
   } while (0);
   do {
    if ((i22 | 0) == 25) {
     i26 = __ZNK7WebCore11RenderStyle4fontEv(i18) | 0;
     if ((HEAP8[i13] & 1) == 0) {
      HEAPF32[i12 >> 2] = +HEAPF32[i26 + 32 >> 2] + +HEAPF32[i12 >> 2];
      break;
     }
     HEAP16[i16 >> 1] = 32;
     __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKtiRKNS_11RenderStyleEj(i17, i1 | 0, i26, i16, 1, i18, 1);
     d34 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i26, i17, 0, 0);
     i26 = HEAP32[i17 + 32 >> 2] | 0;
     do {
      if ((i26 | 0) != 0) {
       i24 = i26 + 4 | 0;
       i35 = i24 | 0;
       i36 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
       if ((i36 | 0) != 0) {
        HEAP32[i35 >> 2] = i36;
        break;
       }
       i36 = i24 - 4 | 0;
       if ((i36 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i36 >> 2] | 0) + 4 >> 2] & 31](i36);
      }
     } while (0);
     HEAPF32[i12 >> 2] = +HEAPF32[i12 >> 2] - d34;
    }
   } while (0);
   if (i20) {
    i37 = (HEAPU8[i21] | 0) >>> 4 & 1;
   } else {
    i37 = 0;
   }
   HEAP8[i13] = i37;
   i26 = HEAP32[i19 >> 2] & 7;
   if ((i26 | 0) == 4 | (i26 | 0) == 1) {
    i22 = 37;
   } else {
    if (+HEAPF32[i11 >> 2] > +HEAPF32[i12 >> 2]) {
     i22 = 37;
    }
   }
   if ((i22 | 0) == 37) {
    HEAPF32[i11 >> 2] = +HEAPF32[i12 >> 2];
   }
   if ((HEAP8[i8] & 1) == 0) {
    STACKTOP = i14;
    return;
   }
   i26 = __ZNK7WebCore11RenderStyle4fontEv(i18) | 0;
   HEAPF32[i9 >> 2] = +HEAPF32[i12 >> 2];
   HEAPF32[i10 >> 2] = +HEAPF32[i12 >> 2];
   if ((i4 | 0) <= 0) {
    STACKTOP = i14;
    return;
   }
   i36 = i27;
   i24 = i27 | 0;
   i35 = i4 - 1 | 0;
   i38 = i18 + 20 | 0;
   i39 = i26 + 24 | 0;
   i40 = i26 | 0;
   i41 = i26 + 16 | 0;
   i42 = i26 + 28 | 0;
   i43 = i26 + 32 | 0;
   i44 = i18 + 24 | 0;
   i45 = i1 | 0;
   i46 = i15 + 4 | 0;
   i47 = i1 + 25 | 0;
   i48 = i15 + 24 | 0;
   i49 = i15 + 28 | 0;
   i50 = i15 + 12 | 0;
   i51 = i15 + 32 | 0;
   i52 = i1;
   i53 = i1 + 64 | 0;
   i54 = i26 + 12 | 0;
   d55 = d2;
   i56 = 1;
   i57 = 0;
   while (1) {
    i58 = 0;
    while (1) {
     i59 = i58 + i57 | 0;
     if ((i59 | 0) >= (i4 | 0)) {
      break;
     }
     if ((HEAP32[i25 >> 2] & 32 | 0) == 0) {
      i60 = HEAP16[(HEAP32[i36 >> 2] | 0) + (i59 << 1) >> 1] | 0;
     } else {
      i60 = HEAPU8[(HEAP32[i24 >> 2] | 0) + i59 | 0] | 0;
     }
     if (i60 << 16 >> 16 == 10) {
      break;
     } else {
      i58 = i58 + 1 | 0;
     }
    }
    do {
     if ((i58 | 0) == 0) {
      if (!i56) {
       i61 = i57;
       d62 = d55;
       break;
      }
      HEAPF32[i9 >> 2] = +0;
      i61 = i57;
      d62 = +0;
     } else {
      d34 = d55 + +HEAPF32[i10 >> 2];
      do {
       if ((HEAP32[(HEAP32[i38 >> 2] | 0) + 296 >> 2] & 128 | 0) == 0) {
        i22 = 52;
       } else {
        if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i52 >> 2] | 0) + 560 >> 2] & 255](i45) | 0)) {
         i22 = 52;
         break;
        }
        if ((HEAP8[i53] & 1) == 0) {
         i22 = 52;
         break;
        }
        d63 = +HEAPF32[i54 >> 2];
       }
      } while (0);
      L77 : do {
       if ((i22 | 0) == 52) {
        i22 = 0;
        i64 = HEAP32[i39 >> 2] | 0;
        i65 = i64 + 108 | 0;
        i66 = HEAP32[i65 >> 2] | 0;
        if ((i66 & 458752 | 0) == 0) {
         __ZNK7WebCore10FontGlyphs14determinePitchERKNS_15FontDescriptionE(i64, i40);
         i67 = HEAP32[i65 >> 2] | 0;
        } else {
         i67 = i66;
        }
        do {
         if ((i67 & 458752 | 0) == 65536) {
          if ((HEAP32[i41 >> 2] & 32 | 0) != 0) {
           break;
          }
          if ((HEAP8[i21] | 0) >= 0) {
           break;
          }
          i66 = HEAP32[i39 >> 2] | 0;
          i65 = i66 + 44 | 0;
          i64 = HEAP32[i65 >> 2] | 0;
          if ((i64 | 0) == 0) {
           i68 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i66, i40, 0) | 0;
           i66 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i68 >> 2] | 0) + 8 >> 2] & 15](i68, 32) | 0;
           HEAP32[i65 >> 2] = i66;
           i69 = i66;
          } else {
           i69 = i64;
          }
          d70 = +HEAPF32[i69 + 1124 >> 2] + +HEAPF32[i42 >> 2];
          i64 = HEAP32[i6 >> 2] | 0;
          if ((i58 | 0) <= 0) {
           d63 = +0;
           break L77;
          }
          i66 = i64 + 16 | 0;
          i65 = i64 + 8 | 0;
          i64 = i65;
          i68 = i65 | 0;
          i65 = i57;
          d71 = +0;
          while (1) {
           if ((HEAP32[i66 >> 2] & 32 | 0) == 0) {
            i72 = HEAP16[(HEAP32[i64 >> 2] | 0) + (i65 << 1) >> 1] & 255;
           } else {
            i72 = HEAP8[(HEAP32[i68 >> 2] | 0) + i65 | 0] | 0;
           }
           L96 : do {
            if (i72 << 24 >> 24 < 33) {
             do {
              if ((i72 << 24 >> 24 | 0) == 9) {
               if (((HEAP32[i19 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0) {
                break;
               }
               i73 = HEAP32[(HEAP32[i44 >> 2] | 0) + 124 >> 2] | 0;
               i74 = HEAP32[i39 >> 2] | 0;
               i75 = i74 + 44 | 0;
               i76 = HEAP32[i75 >> 2] | 0;
               if ((i76 | 0) == 0) {
                i77 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i74, i40, 0) | 0;
                i74 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i77 >> 2] | 0) + 8 >> 2] & 15](i77, 32) | 0;
                HEAP32[i75 >> 2] = i74;
                i78 = i74;
               } else {
                i78 = i76;
               }
               if ((i73 | 0) == 0) {
                d79 = +HEAPF32[i42 >> 2];
               } else {
                d80 = +(i73 >>> 0 >>> 0) * +HEAPF32[i78 + 1124 >> 2] + +HEAPF32[i42 >> 2];
                d79 = d80 - +_fmod(+(d34 + d71), +d80);
               }
               d81 = d71 + d79;
               break L96;
              } else if (!((i72 << 24 >> 24 | 0) == 32 | (i72 << 24 >> 24 | 0) == 10)) {
               d81 = d71;
               break L96;
              }
             } while (0);
             d80 = d70 + d71;
             if ((i65 | 0) <= (i57 | 0)) {
              d81 = d80;
              break;
             }
             d81 = d80 + +HEAPF32[i43 >> 2];
            } else {
             d81 = d70 + d71;
            }
           } while (0);
           i73 = i65 + 1 | 0;
           if ((i73 | 0) < (i59 | 0)) {
            i65 = i73;
            d71 = d81;
           } else {
            d63 = d81;
            break L77;
           }
          }
         }
        } while (0);
        __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKNS_10RenderTextEjjRKNS_11RenderStyleEj(i15, i45, i26, i1, i57, i58, i18, 1);
        HEAP32[i46 >> 2] = (HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] | 0) - i57;
        i65 = ((HEAP8[i47] & 1 ^ 1) & 255) << 6 | HEAP32[i48 >> 2] & -65;
        HEAP32[i48 >> 2] = i65;
        i68 = HEAP32[(HEAP32[i44 >> 2] | 0) + 124 >> 2] | 0;
        HEAP32[i48 >> 2] = (((HEAP32[i19 >> 2] & 7) - 1 | 0) >>> 0 < 2 >>> 0) << 3 | i65 & -9;
        HEAP32[i49 >> 2] = i68;
        HEAPF32[i50 >> 2] = d34;
        d71 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i26, i15, 0, 0);
        i68 = HEAP32[i51 >> 2] | 0;
        if ((i68 | 0) == 0) {
         d63 = d71;
         break;
        }
        i65 = i68 + 4 | 0;
        i68 = i65 | 0;
        i64 = (HEAP32[i68 >> 2] | 0) - 1 | 0;
        if ((i64 | 0) != 0) {
         HEAP32[i68 >> 2] = i64;
         d63 = d71;
         break;
        }
        i64 = i65 - 4 | 0;
        if ((i64 | 0) == 0) {
         d63 = d71;
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i64 >> 2] | 0) + 4 >> 2] & 31](i64);
        d63 = d71;
       }
      } while (0);
      HEAPF32[i10 >> 2] = d63;
      if (!i56) {
       i61 = i59;
       d62 = d55;
       break;
      }
      HEAPF32[i9 >> 2] = d63;
      i61 = i59;
      d62 = +0;
     }
    } while (0);
    if ((i61 | 0) == (i35 | 0)) {
     HEAPF32[i10 >> 2] = +0;
    }
    i58 = i61 + 1 | 0;
    if ((i58 | 0) < (i4 | 0)) {
     d55 = d62;
     i56 = 0;
     i57 = i58;
    } else {
     break;
    }
   }
   STACKTOP = i14;
   return;
  }
 } while (0);
 HEAPF32[i3 >> 2] = +0;
 HEAPF32[i5 >> 2] = +0;
 HEAPF32[i9 >> 2] = +0;
 HEAPF32[i10 >> 2] = +0;
 HEAPF32[i11 >> 2] = +0;
 HEAPF32[i12 >> 2] = +0;
 HEAP8[i8] = 0;
 STACKTOP = i14;
 return;
}
function __ZN7WebCore18applyTextTransformERKNS_11RenderStyleERN3WTF6StringEt(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 64 | 0;
 i12 = i4 + 72 | 0;
 i13 = (HEAP32[i1 + 40 >> 2] | 0) >>> 17 & 3;
 if ((i13 | 0) == 0) {
  i14 = i2 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  if ((i15 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i16 = HEAP32[i15 + 4 >> 2] | 0;
  if ((i16 | 0) == -1) {
   _WTFCrash();
  }
  i17 = i16 + 1 | 0;
  if ((i17 | 0) == 0) {
   _llvm_trap();
  }
  if ((4294967295 / (i17 >>> 0) & -1) >>> 0 < 2 >>> 0) {
   __ZN3WTF7CheckedIjNS_15CrashOnOverflowEEC1ENS_19ResultOverflowedTagE(i9, 0);
  }
  i18 = i17 << 1;
  HEAP32[i9 >> 2] = i18;
  i9 = __ZN3WTF10fastMallocEj(i18) | 0;
  i18 = i9;
  HEAP16[i18 >> 1] = i3 << 16 >> 16 == 160 ? 32 : i3;
  if (i17 >>> 0 > 1 >>> 0) {
   i3 = i15 + 16 | 0;
   i19 = i15 + 8 | 0;
   i20 = i19;
   i21 = i19 | 0;
   i19 = 1;
   while (1) {
    i22 = i19 - 1 | 0;
    i23 = (HEAP32[i3 >> 2] & 32 | 0) == 0;
    if (i23) {
     i24 = HEAP32[i20 >> 2] | 0;
     i25 = HEAP16[i24 + (i22 << 1) >> 1] | 0;
     i26 = i24;
     i27 = i24;
    } else {
     i24 = HEAP32[i21 >> 2] | 0;
     i25 = HEAPU8[i24 + i22 | 0] | 0;
     i26 = i24;
     i27 = i24;
    }
    if (i25 << 16 >> 16 == 160) {
     HEAP16[i18 + (i19 << 1) >> 1] = 32;
    } else {
     if (i23) {
      i28 = HEAP16[i26 + (i22 << 1) >> 1] | 0;
     } else {
      i28 = HEAPU8[i27 + i22 | 0] | 0;
     }
     HEAP16[i18 + (i19 << 1) >> 1] = i28;
    }
    i19 = i19 + 1 | 0;
    if (i19 >>> 0 >= i17 >>> 0) {
     break;
    }
   }
  }
  i19 = __ZN7WebCore17wordBreakIteratorEPKti(i18, i17) | 0;
  do {
   if ((i19 | 0) != 0) {
    i17 = i10 | 0;
    HEAP32[i17 >> 2] = 0;
    i28 = i10 + 4 | 0;
    HEAP32[i28 >> 2] = 0;
    i27 = i10 + 8 | 0;
    HEAP32[i27 >> 2] = 0;
    i26 = i10 + 12 | 0;
    HEAP8[i26] = 1;
    HEAP32[i10 + 16 >> 2] = 0;
    i25 = i10 + 20 | 0;
    HEAP32[i25 >> 2] = 0;
    __ZN3WTF13StringBuilder15reserveCapacityEj(i10, i16);
    i21 = __ZN7WebCore14textBreakFirstEPNS_17TextBreakIteratorE(i19) | 0;
    i20 = __ZN7WebCore13textBreakNextEPNS_17TextBreakIteratorE(i19) | 0;
    if ((i20 | 0) != -1) {
     i3 = i15 + 16 | 0;
     i22 = i15 + 8 | 0;
     i23 = i22;
     i24 = i10 + 20 | 0;
     i29 = i22 | 0;
     i22 = i20;
     i20 = i21;
     while (1) {
      L38 : do {
       if ((i20 | 0) == 0) {
        i30 = 0;
       } else {
        i21 = i20 - 1 | 0;
        if ((HEAP32[i3 >> 2] & 32 | 0) == 0) {
         i31 = HEAP16[(HEAP32[i23 >> 2] | 0) + (i21 << 1) >> 1] | 0;
        } else {
         i31 = HEAPU8[(HEAP32[i29 >> 2] | 0) + i21 | 0] | 0;
        }
        do {
         if (i31 << 16 >> 16 == 160) {
          i32 = 160;
         } else {
          i21 = _u_totitle(HEAPU16[i18 + (i20 << 1) >> 1] | 0) | 0;
          if (i21 >>> 0 < 65536 >>> 0) {
           i32 = i21 & 65535;
           break;
          }
          i33 = (i21 >>> 10) + 55232 | 0;
          i34 = i33 & 65535;
          HEAP16[i6 >> 1] = i34;
          i35 = HEAP32[i27 >> 2] | 0;
          do {
           if ((i35 | 0) == 0) {
            i36 = 45;
           } else {
            i37 = HEAP32[i17 >> 2] | 0;
            if (i37 >>> 0 >= (HEAP32[i35 + 4 >> 2] | 0) >>> 0) {
             i36 = 45;
             break;
            }
            if ((HEAP32[i28 >> 2] | 0) != 0) {
             i36 = 45;
             break;
            }
            if ((HEAP8[i26] & 1) == 0) {
             HEAP32[i17 >> 2] = i37 + 1;
             HEAP16[(HEAP32[i24 >> 2] | 0) + (i37 << 1) >> 1] = i34;
             break;
            }
            if ((i34 & 65535) >>> 0 > 255 >>> 0) {
             i36 = 45;
             break;
            }
            HEAP32[i17 >> 2] = i37 + 1;
            HEAP8[(HEAP32[i25 >> 2] | 0) + i37 | 0] = i33;
           }
          } while (0);
          if ((i36 | 0) == 45) {
           i36 = 0;
           __ZN3WTF13StringBuilder6appendEPKtj(i10, i6, 1);
          }
          i33 = (i21 & 1023 | 56320) & 65535;
          HEAP16[i7 >> 1] = i33;
          i34 = HEAP32[i27 >> 2] | 0;
          do {
           if ((i34 | 0) != 0) {
            i35 = HEAP32[i17 >> 2] | 0;
            if (i35 >>> 0 >= (HEAP32[i34 + 4 >> 2] | 0) >>> 0) {
             break;
            }
            if ((HEAP32[i28 >> 2] | 0) != 0) {
             break;
            }
            if ((HEAP8[i26] & 1) != 0) {
             break;
            }
            HEAP32[i17 >> 2] = i35 + 1;
            HEAP16[(HEAP32[i24 >> 2] | 0) + (i35 << 1) >> 1] = i33;
            i30 = i20;
            break L38;
           }
          } while (0);
          __ZN3WTF13StringBuilder6appendEPKtj(i10, i7, 1);
          i30 = i20;
          break L38;
         }
        } while (0);
        HEAP16[i5 >> 1] = i32;
        i33 = HEAP32[i27 >> 2] | 0;
        do {
         if ((i33 | 0) != 0) {
          i34 = HEAP32[i17 >> 2] | 0;
          if (i34 >>> 0 >= (HEAP32[i33 + 4 >> 2] | 0) >>> 0) {
           break;
          }
          if ((HEAP32[i28 >> 2] | 0) != 0) {
           break;
          }
          if ((HEAP8[i26] & 1) == 0) {
           HEAP32[i17 >> 2] = i34 + 1;
           HEAP16[(HEAP32[i24 >> 2] | 0) + (i34 << 1) >> 1] = i32;
           i30 = i20;
           break L38;
          }
          if ((i32 & 65535) >>> 0 > 255 >>> 0) {
           break;
          }
          HEAP32[i17 >> 2] = i34 + 1;
          HEAP8[(HEAP32[i25 >> 2] | 0) + i34 | 0] = i32;
          i30 = i20;
          break L38;
         }
        } while (0);
        __ZN3WTF13StringBuilder6appendEPKtj(i10, i5, 1);
        i30 = i20;
       }
      } while (0);
      i33 = i30 + 1 | 0;
      if ((i33 | 0) < (i22 | 0)) {
       i34 = i30;
       i21 = i33;
       while (1) {
        if ((HEAP32[i3 >> 2] & 32 | 0) == 0) {
         i38 = HEAP16[(HEAP32[i23 >> 2] | 0) + (i34 << 1) >> 1] | 0;
        } else {
         i38 = HEAPU8[(HEAP32[i29 >> 2] | 0) + i34 | 0] | 0;
        }
        HEAP16[i8 >> 1] = i38;
        i33 = HEAP32[i27 >> 2] | 0;
        do {
         if ((i33 | 0) == 0) {
          i36 = 64;
         } else {
          i35 = HEAP32[i17 >> 2] | 0;
          if (i35 >>> 0 >= (HEAP32[i33 + 4 >> 2] | 0) >>> 0) {
           i36 = 64;
           break;
          }
          if ((HEAP32[i28 >> 2] | 0) != 0) {
           i36 = 64;
           break;
          }
          if ((HEAP8[i26] & 1) == 0) {
           HEAP32[i17 >> 2] = i35 + 1;
           HEAP16[(HEAP32[i24 >> 2] | 0) + (i35 << 1) >> 1] = i38;
           break;
          }
          if ((i38 & 65535) >>> 0 > 255 >>> 0) {
           i36 = 64;
           break;
          }
          HEAP32[i17 >> 2] = i35 + 1;
          HEAP8[(HEAP32[i25 >> 2] | 0) + i35 | 0] = i38;
         }
        } while (0);
        if ((i36 | 0) == 64) {
         i36 = 0;
         __ZN3WTF13StringBuilder6appendEPKtj(i10, i8, 1);
        }
        i33 = i21 + 1 | 0;
        if ((i33 | 0) < (i22 | 0)) {
         i34 = i21;
         i21 = i33;
        } else {
         break;
        }
       }
      }
      i21 = __ZN7WebCore13textBreakNextEPNS_17TextBreakIteratorE(i19) | 0;
      if ((i21 | 0) == -1) {
       break;
      } else {
       i20 = i22;
       i22 = i21;
      }
     }
    }
    __ZN3WTF13StringBuilder11shrinkToFitEv(i10);
    i22 = HEAP32[i28 >> 2] | 0;
    if ((i22 | 0) == 0) {
     __ZNK3WTF13StringBuilder11reifyStringEv(i10);
     i20 = HEAP32[i28 >> 2] | 0;
     if ((i20 | 0) == 0) {
      i39 = 0;
     } else {
      i40 = i20;
      i36 = 68;
     }
    } else {
     i40 = i22;
     i36 = 68;
    }
    if ((i36 | 0) == 68) {
     i22 = i40 | 0;
     HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
     i39 = i40;
    }
    i22 = HEAP32[i14 >> 2] | 0;
    HEAP32[i14 >> 2] = i39;
    do {
     if ((i22 | 0) != 0) {
      i20 = i22 | 0;
      i25 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
      if ((i25 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i22);
       break;
      } else {
       HEAP32[i20 >> 2] = i25;
       break;
      }
     }
    } while (0);
    i22 = HEAP32[i27 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i25 = i22 | 0;
      i20 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
      if ((i20 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i22);
       break;
      } else {
       HEAP32[i25 >> 2] = i20;
       break;
      }
     }
    } while (0);
    i22 = HEAP32[i28 >> 2] | 0;
    if ((i22 | 0) == 0) {
     break;
    }
    i27 = i22 | 0;
    i20 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
    if ((i20 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i22);
     break;
    } else {
     HEAP32[i27 >> 2] = i20;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i9);
  STACKTOP = i4;
  return;
 } else if ((i13 | 0) == 1) {
  __ZNK3WTF6String5upperERKNS_12AtomicStringE(i11, i2, (HEAP32[i1 + 24 >> 2] | 0) + 108 | 0);
  i9 = i11 | 0;
  i11 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  i39 = i2 | 0;
  i14 = HEAP32[i39 >> 2] | 0;
  HEAP32[i39 >> 2] = i11;
  do {
   if ((i14 | 0) != 0) {
    i11 = i14 | 0;
    i39 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i39 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i14);
     break;
    } else {
     HEAP32[i11 >> 2] = i39;
     break;
    }
   }
  } while (0);
  i14 = HEAP32[i9 >> 2] | 0;
  if ((i14 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i9 = i14 | 0;
  i39 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
  if ((i39 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i14);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i9 >> 2] = i39;
   STACKTOP = i4;
   return;
  }
 } else if ((i13 | 0) == 2) {
  __ZNK3WTF6String5lowerERKNS_12AtomicStringE(i12, i2, (HEAP32[i1 + 24 >> 2] | 0) + 108 | 0);
  i1 = i12 | 0;
  i12 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  i13 = i2 | 0;
  i2 = HEAP32[i13 >> 2] | 0;
  HEAP32[i13 >> 2] = i12;
  do {
   if ((i2 | 0) != 0) {
    i12 = i2 | 0;
    i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i13 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i2);
     break;
    } else {
     HEAP32[i12 >> 2] = i13;
     break;
    }
   }
  } while (0);
  i2 = HEAP32[i1 >> 2] | 0;
  if ((i2 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i1 = i2 | 0;
  i13 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
  if ((i13 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i2);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i1 >> 2] = i13;
   STACKTOP = i4;
   return;
  }
 } else {
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore10RenderText5widthEjjRKNS_4FontEfPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i1, i2, i3, i4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, d27 = +0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, d35 = +0, d36 = +0, d37 = +0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i9 = i8 | 0;
 i10 = i8 + 40 | 0;
 i11 = i1 + 44 | 0;
 if ((HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] | 0) == 0) {
  d12 = +0;
  STACKTOP = i8;
  return +d12;
 }
 i13 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 if ((__ZNK7WebCore11RenderStyle4fontEv(i13) | 0) != (i4 | 0)) {
  __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKNS_10RenderTextEjjRKNS_11RenderStyleEj(i10, i1 | 0, i4, i1, i2, i3, i13, 1);
  HEAP32[i10 + 4 >> 2] = (HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] | 0) - i2;
  i14 = i10 + 24 | 0;
  i15 = ((HEAP8[i1 + 25 | 0] & 1 ^ 1) & 255) << 6 | HEAP32[i14 >> 2] & -65;
  HEAP32[i14 >> 2] = i15;
  i16 = HEAP32[(HEAP32[i13 + 24 >> 2] | 0) + 124 >> 2] | 0;
  HEAP32[i14 >> 2] = (((HEAP32[i13 + 44 >> 2] & 7) - 1 | 0) >>> 0 < 2 >>> 0) << 3 | i15 & -9;
  HEAP32[i10 + 28 >> 2] = i16;
  HEAPF32[i10 + 12 >> 2] = d5;
  d17 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i4, i10, i6, i7);
  i16 = HEAP32[i10 + 32 >> 2] | 0;
  if ((i16 | 0) == 0) {
   d12 = d17;
   STACKTOP = i8;
   return +d12;
  }
  i10 = i16 + 4 | 0;
  i16 = i10 | 0;
  i15 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
  if ((i15 | 0) != 0) {
   HEAP32[i16 >> 2] = i15;
   d12 = d17;
   STACKTOP = i8;
   return +d12;
  }
  i15 = i10 - 4 | 0;
  if ((i15 | 0) == 0) {
   d12 = d17;
   STACKTOP = i8;
   return +d12;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 31](i15);
  d12 = d17;
  STACKTOP = i8;
  return +d12;
 }
 i15 = i13 + 44 | 0;
 i10 = HEAP32[i15 >> 2] & 7;
 do {
  if (((i10 | 0) == 0 | (i10 | 0) == 4) & (i2 | 0) == 0) {
   if ((HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] | 0) != (i3 | 0)) {
    break;
   }
   if ((i7 | 0) != 0) {
    if ((HEAP8[i7 + 16 | 0] & 1) != 0) {
     break;
    }
   }
   i16 = (HEAP32[i1 + 20 >> 2] & 32 | 0) == 0;
   if ((i6 | 0) == 0) {
    if (!i16) {
     FUNCTION_TABLE_vif[HEAP32[(HEAP32[i1 >> 2] | 0) + 656 >> 2] & 3](i1, +0);
    }
    d12 = +HEAPF32[i1 + 32 >> 2];
    STACKTOP = i8;
    return +d12;
   }
   if (i16) {
    if ((HEAP8[i1 + 25 | 0] & 2) == 0) {
     i18 = 10;
    }
   } else {
    i18 = 10;
   }
   do {
    if ((i18 | 0) == 10) {
     __ZN7WebCore10RenderText29computePreferredLogicalWidthsEfRN3WTF7HashSetIPKNS_14SimpleFontDataENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEERNS_13GlyphOverflowE(i1, +0, i6, i7);
     if ((HEAP32[i6 + 12 >> 2] | 0) != 0) {
      break;
     }
     if ((HEAP32[i7 >> 2] | 0) != 0) {
      break;
     }
     if ((HEAP32[i7 + 4 >> 2] | 0) != 0) {
      break;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break;
     }
     if ((HEAP32[i7 + 12 >> 2] | 0) != 0) {
      break;
     }
     i16 = i1 + 25 | 0;
     HEAP8[i16] = HEAP8[i16] | 2;
    }
   } while (0);
   d12 = +HEAPF32[i1 + 32 >> 2];
   STACKTOP = i8;
   return +d12;
  }
 } while (0);
 do {
  if ((HEAP32[(HEAP32[i13 + 20 >> 2] | 0) + 296 >> 2] & 128 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 560 >> 2] & 255](i1 | 0) | 0)) {
    break;
   }
   if ((HEAP8[i1 + 64 | 0] & 1) == 0) {
    break;
   }
   d12 = +HEAPF32[i4 + 12 >> 2];
   STACKTOP = i8;
   return +d12;
  }
 } while (0);
 i18 = i4 + 24 | 0;
 i10 = HEAP32[i18 >> 2] | 0;
 i16 = i10 + 108 | 0;
 i14 = HEAP32[i16 >> 2] | 0;
 if ((i14 & 458752 | 0) == 0) {
  __ZNK7WebCore10FontGlyphs14determinePitchERKNS_15FontDescriptionE(i10, i4 | 0);
  i19 = HEAP32[i16 >> 2] | 0;
 } else {
  i19 = i14;
 }
 do {
  if ((i19 & 458752 | 0) == 65536) {
   if ((HEAP32[i4 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   if ((HEAP8[i1 + 24 | 0] | 0) >= 0) {
    break;
   }
   if ((i7 | 0) != 0) {
    if ((HEAP8[i7 + 16 | 0] & 1) != 0) {
     break;
    }
   }
   i14 = HEAP32[i18 >> 2] | 0;
   i16 = i14 + 44 | 0;
   i10 = HEAP32[i16 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i20 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i14, i4 | 0, 0) | 0;
    i14 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i20 >> 2] | 0) + 8 >> 2] & 15](i20, 32) | 0;
    HEAP32[i16 >> 2] = i14;
    i21 = i14;
   } else {
    i21 = i10;
   }
   i10 = i4 + 28 | 0;
   d17 = +HEAPF32[i21 + 1124 >> 2] + +HEAPF32[i10 >> 2];
   i14 = HEAP32[i11 >> 2] | 0;
   i16 = i3 + i2 | 0;
   if ((i3 | 0) <= 0) {
    d12 = +0;
    STACKTOP = i8;
    return +d12;
   }
   i20 = i14 + 16 | 0;
   i22 = i14 + 8 | 0;
   i14 = i22;
   i23 = i4 + 32 | 0;
   i24 = i13 + 24 | 0;
   i25 = i4 | 0;
   i26 = i22 | 0;
   i22 = i2;
   d27 = +0;
   while (1) {
    if ((HEAP32[i20 >> 2] & 32 | 0) == 0) {
     i28 = HEAP16[(HEAP32[i14 >> 2] | 0) + (i22 << 1) >> 1] & 255;
    } else {
     i28 = HEAP8[(HEAP32[i26 >> 2] | 0) + i22 | 0] | 0;
    }
    L71 : do {
     if (i28 << 24 >> 24 < 33) {
      do {
       if ((i28 << 24 >> 24 | 0) == 9) {
        if (((HEAP32[i15 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0) {
         break;
        }
        i29 = HEAP32[(HEAP32[i24 >> 2] | 0) + 124 >> 2] | 0;
        i30 = HEAP32[i18 >> 2] | 0;
        i31 = i30 + 44 | 0;
        i32 = HEAP32[i31 >> 2] | 0;
        if ((i32 | 0) == 0) {
         i33 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i30, i25, 0) | 0;
         i30 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i33 >> 2] | 0) + 8 >> 2] & 15](i33, 32) | 0;
         HEAP32[i31 >> 2] = i30;
         i34 = i30;
        } else {
         i34 = i32;
        }
        if ((i29 | 0) == 0) {
         d35 = +HEAPF32[i10 >> 2];
        } else {
         d36 = +(i29 >>> 0 >>> 0) * +HEAPF32[i34 + 1124 >> 2] + +HEAPF32[i10 >> 2];
         d35 = d36 - +_fmod(+(d27 + d5), +d36);
        }
        d37 = d27 + d35;
        break L71;
       } else if (!((i28 << 24 >> 24 | 0) == 32 | (i28 << 24 >> 24 | 0) == 10)) {
        d37 = d27;
        break L71;
       }
      } while (0);
      d36 = d17 + d27;
      if ((i22 | 0) <= (i2 | 0)) {
       d37 = d36;
       break;
      }
      d37 = d36 + +HEAPF32[i23 >> 2];
     } else {
      d37 = d17 + d27;
     }
    } while (0);
    i29 = i22 + 1 | 0;
    if ((i29 | 0) < (i16 | 0)) {
     i22 = i29;
     d27 = d37;
    } else {
     d12 = d37;
     break;
    }
   }
   STACKTOP = i8;
   return +d12;
  }
 } while (0);
 __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKNS_10RenderTextEjjRKNS_11RenderStyleEj(i9, i1 | 0, i4, i1, i2, i3, i13, 1);
 HEAP32[i9 + 4 >> 2] = (HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] | 0) - i2;
 i2 = i9 + 24 | 0;
 i11 = ((HEAP8[i1 + 25 | 0] & 1 ^ 1) & 255) << 6 | HEAP32[i2 >> 2] & -65;
 HEAP32[i2 >> 2] = i11;
 i1 = HEAP32[(HEAP32[i13 + 24 >> 2] | 0) + 124 >> 2] | 0;
 HEAP32[i2 >> 2] = (((HEAP32[i15 >> 2] & 7) - 1 | 0) >>> 0 < 2 >>> 0) << 3 | i11 & -9;
 HEAP32[i9 + 28 >> 2] = i1;
 HEAPF32[i9 + 12 >> 2] = d5;
 d5 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i4, i9, i6, i7);
 i7 = HEAP32[i9 + 32 >> 2] | 0;
 if ((i7 | 0) == 0) {
  d12 = d5;
  STACKTOP = i8;
  return +d12;
 }
 i9 = i7 + 4 | 0;
 i7 = i9 | 0;
 i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i7 >> 2] = i6;
  d12 = d5;
  STACKTOP = i8;
  return +d12;
 }
 i6 = i9 - 4 | 0;
 if ((i6 | 0) == 0) {
  d12 = d5;
  STACKTOP = i8;
  return +d12;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 d12 = d5;
 STACKTOP = i8;
 return +d12;
}
function runPostSets() {
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 216;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 214;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 218;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 222;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 220;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 210;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_ii + 212;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_ii + 224;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_fiiiifii + 2;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_fiiifiii + 2;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_vif + 2;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_ii + 92;
}
function __ZN7WebCore10RenderText15setTextInternalERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i1 + 25 | 0;
 if ((HEAP8[i9] & 8) != 0) {
  if (!(HEAP8[H_BASE + 752 | 0] | 0)) {
   _memset(H_BASE + 760 | 0, 0, 20) | 0;
   HEAP8[H_BASE + 752 | 0] = 1;
  }
  HEAP32[i5 >> 2] = i1;
  __ZN3WTF7HashMapIPKN7WebCore10RenderTextENS_6StringENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(H_BASE + 760, i5) | 0;
  HEAP8[i9] = HEAP8[i9] & -9;
 }
 i5 = i6 | 0;
 i10 = i2 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 do {
  if ((i2 | 0) == 0) {
   i11 = 0;
   i12 = i1 + 44 | 0;
  } else {
   i13 = i2 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   i13 = HEAP32[i10 >> 2] | 0;
   i14 = i1 + 44 | 0;
   if ((i13 | 0) == 0) {
    i11 = 0;
    i12 = i14;
    break;
   }
   i15 = i13 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   i11 = i13;
   i12 = i14;
  }
 } while (0);
 i10 = i12 | 0;
 i14 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i11;
 do {
  if ((i14 | 0) != 0) {
   i11 = i14 | 0;
   i13 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i11 >> 2] = i13;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP8[i9] & 4) != 0) {
   i14 = HEAP32[i10 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   __ZN3WTF10StringImpl7replaceEtt(i4, i14, 92, 165);
   i14 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i4 >> 2];
   if ((i14 | 0) == 0) {
    break;
   }
   i13 = i14 | 0;
   i11 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i13 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i4 = i1 + 8 | 0;
 i11 = HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] | 0;
 __ZN7WebCore18applyTextTransformERKNS_11RenderStyleERN3WTF6StringEt(i11, i12, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 664 >> 2] & 255](i1) | 0);
 i11 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 2 & 3;
 if ((i11 | 0) == 2) {
  __ZN7WebCore10RenderText10secureTextEt(i1, 9702);
 } else if ((i11 | 0) == 1) {
  __ZN7WebCore10RenderText10secureTextEt(i1, 8226);
 } else if ((i11 | 0) == 3) {
  __ZN7WebCore10RenderText10secureTextEt(i1, 9632);
 }
 i11 = i1 + 24 | 0;
 i4 = ((__ZNK3WTF6String17containsOnlyASCIIEv(i12) | 0) & 1) << 7;
 i12 = HEAP8[i11] & 127 | i4;
 HEAP8[i11] = i12;
 do {
  if (i12 << 24 >> 24 < 0) {
   i16 = 1;
  } else {
   i11 = HEAP32[i1 + 44 >> 2] | 0;
   if ((HEAP32[i11 + 16 >> 2] & 32 | 0) != 0) {
    i16 = 1;
    break;
   }
   i16 = (__ZN7WebCore4Font22characterRangeCodePathEPKtj(HEAP32[i11 + 8 >> 2] | 0, HEAP32[i11 + 4 >> 2] | 0) | 0) == 1 | 0;
  }
 } while (0);
 HEAP8[i9] = HEAP8[i9] & -2 | i16;
 if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i10 >> 2] | 0, i2) | 0) {
  i17 = i2;
 } else {
  if (!(HEAP8[H_BASE + 752 | 0] | 0)) {
   _memset(H_BASE + 760 | 0, 0, 20) | 0;
   HEAP8[H_BASE + 752 | 0] = 1;
  }
  HEAP32[i7 >> 2] = i1;
  __ZN3WTF9HashTableIPKN7WebCore10RenderTextENS_12KeyValuePairIS4_NS_6StringEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES4_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i8, H_BASE + 760, i7, i6);
  HEAP8[i9] = HEAP8[i9] | 8;
  i17 = HEAP32[i5 >> 2] | 0;
 }
 if ((i17 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i17 | 0;
 i9 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i17);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore10RenderText14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((i2 | 0) == 8) {
  i2 = i1 | 0;
  i6 = i1 + 20 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i7 & 1 | 0) == 0) {
    HEAP32[i6 >> 2] = i7 | 1;
    __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i2, 1, 0);
    if ((HEAP32[i6 >> 2] & 32768 | 0) == 0) {
     break;
    }
    __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i2);
   }
  } while (0);
  __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i2, 1, 1);
  i2 = i1 + 25 | 0;
  HEAP8[i2] = HEAP8[i2] & -3;
 }
 i2 = i1 + 8 | 0;
 i6 = HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] | 0;
 i7 = (i3 | 0) != 0;
 do {
  if (i7) {
   i8 = (HEAP8[(__ZNK7WebCore11RenderStyle4fontEv(i3) | 0) + 36 | 0] & 1) != 0;
   if (!(i8 ^ (HEAP8[(__ZNK7WebCore11RenderStyle4fontEv(i6) | 0) + 36 | 0] & 1) != 0)) {
    i9 = 0;
    i10 = 23;
    break;
   }
   i8 = HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] | 0;
   i11 = __ZNK7WebCore11RenderStyle4fontEv(i8) | 0;
   L20 : do {
    if ((HEAP8[(__ZNK7WebCore11RenderStyle4fontEv(i8) | 0) + 36 | 0] & 1) == 0) {
     if ((HEAP32[i11 + 20 >> 2] & 16 | 0) != 0) {
      i12 = 0;
      break;
     }
     i13 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1308 >> 2] | 0;
     do {
      if ((i13 | 0) != 0) {
       i14 = i13 + 8 | 0;
       if ((i14 | 0) == 0) {
        break;
       }
       if ((__ZNK7WebCore12TextEncoding25backslashAsCurrencySymbolEv(i14) | 0) << 16 >> 16 != 92) {
        i12 = 4;
        break L20;
       }
      }
     } while (0);
     i12 = 0;
    } else {
     i12 = 4;
    }
   } while (0);
   i11 = i1 + 25 | 0;
   HEAP8[i11] = HEAP8[i11] & -5 | i12;
   i15 = 1;
   i10 = 22;
  } else {
   i11 = __ZNK7WebCore11RenderStyle4fontEv(i6) | 0;
   L10 : do {
    if ((HEAP8[(__ZNK7WebCore11RenderStyle4fontEv(i6) | 0) + 36 | 0] & 1) == 0) {
     if ((HEAP32[i11 + 20 >> 2] & 16 | 0) != 0) {
      i16 = 0;
      break;
     }
     i8 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1308 >> 2] | 0;
     do {
      if ((i8 | 0) != 0) {
       i13 = i8 + 8 | 0;
       if ((i13 | 0) == 0) {
        break;
       }
       if ((__ZNK7WebCore12TextEncoding25backslashAsCurrencySymbolEv(i13) | 0) << 16 >> 16 != 92) {
        i16 = 1;
        break L10;
       }
      }
     } while (0);
     i16 = 0;
    } else {
     i16 = 1;
    }
   } while (0);
   i11 = i1 + 25 | 0;
   HEAP8[i11] = HEAP8[i11] & -5 | (i16 & 1) << 2;
   i15 = i16;
   i10 = 22;
  }
 } while (0);
 do {
  if ((i10 | 0) == 22) {
   if (i7) {
    i9 = i15;
    i10 = 23;
    break;
   }
   if (!i15) {
    i17 = 3;
    i18 = 0;
    i10 = 25;
   }
  }
 } while (0);
 if ((i10 | 0) == 23) {
  if (!i9) {
   i17 = (HEAP32[i3 + 40 >> 2] | 0) >>> 17 & 3;
   i18 = (HEAP32[(HEAP32[i3 + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 2 & 3;
   i10 = 25;
  }
 }
 do {
  if ((i10 | 0) == 25) {
   if ((i17 | 0) != ((HEAP32[i6 + 40 >> 2] | 0) >>> 17 & 3 | 0)) {
    break;
   }
   if ((i18 | 0) != ((HEAP32[(HEAP32[i6 + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 2 & 3 | 0)) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 628 >> 2] & 63](i5, i1);
 __ZN7WebCore10RenderText7setTextERKN3WTF6StringEb(i1, i5, 1);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i1 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore10RenderText10secureTextEt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 44 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i8 + 4 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = HEAP32[H_BASE + 784 >> 2] | 0;
 L4 : do {
  if ((i11 | 0) == 0) {
   i12 = -1;
   i13 = 0;
   i14 = i8;
  } else {
   i15 = HEAP32[i11 + 8 >> 2] | 0;
   i16 = HEAP32[i11 >> 2] | 0;
   i17 = i1;
   i18 = i17 + ~(i17 << 15) | 0;
   i17 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i17 >>> 6 ^ i17;
   i17 = i18 + ~(i18 << 11) | 0;
   i18 = i17 >>> 16 ^ i17;
   if ((i16 | 0) == 0) {
    i12 = -1;
    i13 = 0;
    i14 = i8;
    break;
   }
   i17 = i15 & i18;
   i19 = i16 + (i17 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   if ((i20 | 0) == (i1 | 0)) {
    i21 = i19;
   } else {
    i19 = (i18 >>> 23) + ~i18 | 0;
    i18 = i19 << 12 ^ i19;
    i19 = i18 >>> 7 ^ i18;
    i18 = i19 << 2 ^ i19;
    i19 = i18 >>> 20 ^ i18 | 1;
    i18 = 0;
    i22 = i17;
    i17 = i20;
    while (1) {
     if ((i17 | 0) == 0) {
      i12 = -1;
      i13 = 0;
      i14 = i8;
      break L4;
     }
     i20 = (i18 | 0) == 0 ? i19 : i18;
     i23 = i20 + i22 & i15;
     i24 = i16 + (i23 << 3) | 0;
     i25 = HEAP32[i24 >> 2] | 0;
     if ((i25 | 0) == (i1 | 0)) {
      i21 = i24;
      break;
     } else {
      i18 = i20;
      i22 = i23;
      i17 = i25;
     }
    }
   }
   if ((i21 | 0) == 0) {
    i12 = -1;
    i13 = 0;
    i14 = i8;
    break;
   }
   i17 = HEAP32[i21 + 4 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i12 = -1;
    i13 = 0;
    i14 = i8;
    break;
   }
   if (+HEAPF64[i17 + 8 >> 3] == +0) {
    i12 = -1;
    i13 = i17;
    i14 = i8;
    break;
   }
   i22 = HEAP32[i17 + 48 >> 2] | 0;
   if ((i22 | 0) <= -1) {
    i12 = i22;
    i13 = i17;
    i14 = i8;
    break;
   }
   do {
    if ((i8 | 0) == 0) {
     i26 = 0;
    } else {
     if ((HEAP32[i9 >> 2] | 0) >>> 0 <= i22 >>> 0) {
      i26 = 0;
      break;
     }
     i18 = i8 + 8 | 0;
     if ((HEAP32[i8 + 16 >> 2] & 32 | 0) == 0) {
      i26 = HEAP16[(HEAP32[i18 >> 2] | 0) + (i22 << 1) >> 1] | 0;
      break;
     } else {
      i26 = HEAPU8[(HEAP32[i18 >> 2] | 0) + i22 | 0] | 0;
      break;
     }
    }
   } while (0);
   __ZN3WTF6String6appendEt(i6, i26);
   i12 = i22;
   i13 = i17;
   i14 = HEAP32[i7 >> 2] | 0;
  }
 } while (0);
 do {
  if ((i14 | 0) != 0) {
   __ZN3WTF10StringImpl4fillEt(i4, i14, i2);
   i26 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i4 >> 2];
   if ((i26 | 0) == 0) {
    break;
   }
   i6 = i26 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i26);
    break;
   } else {
    HEAP32[i6 >> 2] = i8;
    break;
   }
  }
 } while (0);
 if ((i12 | 0) > -1) {
  i4 = HEAP32[i7 >> 2] | 0;
  do {
   if ((i4 | 0) != 0) {
    __ZN3WTF10StringImpl7replaceEjjPS0_(i5, i4, i12, 1, HEAP32[i10 >> 2] | 0);
    i2 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = HEAP32[i5 >> 2];
    if ((i2 | 0) == 0) {
     break;
    }
    i14 = i2 | 0;
    i8 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
    if ((i8 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i2);
     break;
    } else {
     HEAP32[i14 >> 2] = i8;
     break;
    }
   }
  } while (0);
  HEAP32[i13 + 48 >> 2] = -1;
 }
 i13 = HEAP32[i10 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = i13 | 0;
 i5 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i13);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i10 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableIPKN7WebCore10RenderTextENS_12KeyValuePairIS4_NS_6StringEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES4_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPKN7WebCore10RenderTextENS_12KeyValuePairIS4_NS_6StringEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = i7 & i6;
 i11 = i10 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
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
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) != 0) {
  i4 = i14 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i13 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i14;
 do {
  if ((i3 | 0) != 0) {
   i14 = i3 | 0;
   i4 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i14 >> 2] = i4;
    break;
   }
  }
 } while (0);
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
  i22 = __ZN3WTF9HashTableIPKN7WebCore10RenderTextENS_12KeyValuePairIS4_NS_6StringEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i29, i13) | 0;
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
function __ZN3WTF9HashTableIPKN7WebCore10RenderTextENS_12KeyValuePairIS4_NS_6StringEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
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
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
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
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
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
   i16 = i30 + 4 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i20 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i20;
      break;
     }
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
   i17 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i36 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i36 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i36 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 | 0;
    i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i11 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i2 = i36 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i36 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore10RenderTextENS_12KeyValuePairIS3_PNS1_15SecureTextTimerEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES3_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
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
  __ZN3WTF9HashTableIPN7WebCore10RenderTextENS_12KeyValuePairIS3_PNS1_15SecureTextTimerEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = i7 & i6;
 i11 = i10 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 11;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i14 = 8;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i10 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 10;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i14 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 11;
     break;
    }
    i20 = i21;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 11) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 HEAP32[i26 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i27 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i27;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i28 >> 2] | 0) + i27 << 1 | 0) < (i8 | 0)) {
  i29 = i26;
  i30 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i31 = 8;
  } else {
   i28 = i8 << 1;
   i31 = (i27 * 6 & -1 | 0) < (i28 | 0) ? i8 : i28;
  }
  i28 = __ZN3WTF9HashTableIPN7WebCore10RenderTextENS_12KeyValuePairIS3_PNS1_15SecureTextTimerEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i31, i26) | 0;
  i29 = i28;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
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
function __ZN7WebCore10RenderText23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, d21 = +0, d22 = +0, d23 = +0, d24 = +0, d25 = +0, d26 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 48 | 0;
 i11 = i10 | 0;
 i12 = i10;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i14 = i13 | 0;
 i15 = i13;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i17 = i2 | 0;
 i18 = i2 + 20 | 0;
 if ((HEAP32[i18 >> 2] & 234881024 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i5;
  return;
 }
 i19 = __ZNK7WebCore12RenderObject15containingBlockEv(i17) | 0;
 if ((i19 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i5;
  return;
 }
 do {
  if ((HEAP32[i18 >> 2] & 234881024 | 0) == 67108864) {
   HEAP32[i7 >> 2] = 0;
   HEAP32[i8 >> 2] = HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 4 >> 2];
  } else {
   __ZNK7WebCore12RenderObject17selectionStartEndERiS1_(i17, i7, i8);
   i20 = (HEAP32[i18 >> 2] | 0) >>> 25 & 7;
   if ((i20 | 0) == 1) {
    HEAP32[i8 >> 2] = HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 4 >> 2];
    break;
   } else if ((i20 | 0) == 3) {
    HEAP32[i7 >> 2] = 0;
    break;
   } else {
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i18 | 0) == (i7 | 0)) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore19RenderTextLineBoxes21selectionRectForRangeEjj(i9, i2 + 48 | 0, i18, i7);
 if (i4) {
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 512 >> 2] & 15](i17, i3, i9, 0);
 } else {
  if ((HEAP32[i19 + 20 >> 2] & 4194304 | 0) != 0) {
   __ZNK7WebCore11RenderBlock20adjustRectForColumnsERNS_10LayoutRectE(i19, i9);
  }
  i19 = i9 | 0;
  d21 = +(HEAP32[i19 >> 2] | 0);
  i2 = i9 + 4 | 0;
  d22 = +(HEAP32[i2 >> 2] | 0);
  i4 = i9 + 8 | 0;
  d23 = +(HEAP32[i4 >> 2] | 0);
  i7 = i9 + 12 | 0;
  d24 = +(HEAP32[i7 >> 2] | 0);
  d25 = +d21;
  d26 = +d22;
  HEAPF32[i14 >> 2] = d25;
  HEAPF32[i14 + 4 >> 2] = d26;
  d26 = d21 + d23;
  HEAPF32[i13 + 8 >> 2] = d26;
  HEAPF32[i15 + 12 >> 2] = d22;
  d23 = d22 + d24;
  HEAPF32[i13 + 16 >> 2] = d26;
  HEAPF32[i15 + 20 >> 2] = d23;
  HEAPF32[i13 + 24 >> 2] = d21;
  HEAPF32[i15 + 28 >> 2] = d23;
  __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i16, i17, i15, i3, 0, 0);
  __ZNK7WebCore9FloatQuad11boundingBoxEv(i6, i16);
  __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i12, i6);
  i6 = HEAP32[i11 + 4 >> 2] | 0;
  i12 = i10 + 8 | 0;
  i10 = HEAP32[i12 >> 2] | 0;
  i16 = HEAP32[i12 + 4 >> 2] | 0;
  HEAP32[i19 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i2 >> 2] = i6;
  HEAP32[i4 >> 2] = i10;
  HEAP32[i7 >> 2] = i16;
 }
 i16 = i1;
 i1 = i9;
 HEAP32[i16 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i16 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i16 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i16 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore10RenderText13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((HEAP32[i7 + 24 >> 2] & 32 | 0) != 0) {
   i8 = HEAP32[i7 + 112 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN7WebCore16SimpleLineLayout24collectTextAbsoluteRectsERKNS_10RenderTextERKNS0_6LayoutERKNS_11LayoutPointE(i5, i1, i8, i3);
   i8 = i5 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i10 = i5 + 8 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = i2 + 8 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   i14 = i13 + i11 | 0;
   if (i14 >>> 0 > (HEAP32[i2 + 4 >> 2] | 0) >>> 0) {
    __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i14);
    i15 = HEAP32[i12 >> 2] | 0;
   } else {
    i15 = i13;
   }
   if (i14 >>> 0 < i15 >>> 0) {
    _WTFCrash();
   }
   i13 = HEAP32[i2 >> 2] | 0;
   if ((i11 | 0) != 0) {
    i16 = 0;
    while (1) {
     i17 = i13 + (i16 + i15 << 4) | 0;
     i18 = i9 + (i16 << 4) | 0;
     HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
     HEAP32[i17 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
     HEAP32[i17 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
     HEAP32[i17 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
     i16 = i16 + 1 | 0;
     if (i16 >>> 0 >= i11 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i12 >> 2] = i14;
   if ((HEAP32[i10 >> 2] | 0) != 0) {
    HEAP32[i10 >> 2] = 0;
   }
   i11 = HEAP32[i8 >> 2] | 0;
   if ((i11 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   HEAP32[i8 >> 2] = 0;
   HEAP32[i5 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i11);
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZNK7WebCore19RenderTextLineBoxes13absoluteRectsERKNS_11LayoutPointE(i6, i1 + 48 | 0, i3);
 i3 = i6 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i5 = i6 + 8 | 0;
 i15 = HEAP32[i5 >> 2] | 0;
 i7 = i2 + 8 | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 i16 = i11 + i15 | 0;
 if (i16 >>> 0 > (HEAP32[i2 + 4 >> 2] | 0) >>> 0) {
  __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i16);
  i19 = HEAP32[i7 >> 2] | 0;
 } else {
  i19 = i11;
 }
 if (i16 >>> 0 < i19 >>> 0) {
  _WTFCrash();
 }
 i11 = HEAP32[i2 >> 2] | 0;
 if ((i15 | 0) != 0) {
  i2 = 0;
  while (1) {
   i9 = i11 + (i2 + i19 << 4) | 0;
   i13 = i1 + (i2 << 4) | 0;
   HEAP32[i9 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i9 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
   HEAP32[i9 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
   HEAP32[i9 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
   i2 = i2 + 1 | 0;
   if (i2 >>> 0 >= i15 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i7 >> 2] = i16;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore10RenderText35momentarilyRevealLastTypedCharacterEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[H_BASE + 784 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = __ZN3WTF10fastMallocEj(20) | 0;
  i9 = i8;
  _memset(i8 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 784 >> 2] = i9;
  i10 = i9;
 } else {
  i10 = i7;
 }
 i7 = HEAP32[i10 + 8 >> 2] | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 i10 = i1;
 i8 = i10 + ~(i10 << 15) | 0;
 i10 = (i8 >>> 10 ^ i8) * 9 & -1;
 i8 = i10 >>> 6 ^ i10;
 i10 = i8 + ~(i8 << 11) | 0;
 i8 = i10 >>> 16 ^ i10;
 L4 : do {
  if ((i9 | 0) == 0) {
   i11 = 9;
  } else {
   i10 = i7 & i8;
   i12 = i9 + (i10 << 3) | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   if ((i13 | 0) == (i1 | 0)) {
    i14 = i12;
   } else {
    i12 = (i8 >>> 23) + ~i8 | 0;
    i15 = i12 << 12 ^ i12;
    i12 = i15 >>> 7 ^ i15;
    i15 = i12 << 2 ^ i12;
    i12 = i15 >>> 20 ^ i15 | 1;
    i15 = 0;
    i16 = i10;
    i10 = i13;
    while (1) {
     if ((i10 | 0) == 0) {
      i11 = 9;
      break L4;
     }
     i13 = (i15 | 0) == 0 ? i12 : i15;
     i17 = i13 + i16 & i7;
     i18 = i9 + (i17 << 3) | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     if ((i19 | 0) == (i1 | 0)) {
      i14 = i18;
      break;
     } else {
      i15 = i13;
      i16 = i17;
      i10 = i19;
     }
    }
   }
   if ((i14 | 0) == 0) {
    i11 = 9;
    break;
   }
   i10 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i4 >> 2] = i10;
   if ((i10 | 0) == 0) {
    i11 = 11;
   } else {
    i20 = i10;
   }
  }
 } while (0);
 if ((i11 | 0) == 9) {
  HEAP32[i4 >> 2] = 0;
  i11 = 11;
 }
 if ((i11 | 0) == 11) {
  i11 = __ZN3WTF10fastMallocEj(56) | 0;
  __ZN7WebCore9TimerBaseC2Ev(i11);
  HEAP32[i11 >> 2] = H_BASE + 32;
  HEAP32[i11 + 44 >> 2] = i1;
  HEAP32[i11 + 48 >> 2] = -1;
  HEAP32[i4 >> 2] = i11;
  i11 = HEAP32[H_BASE + 784 >> 2] | 0;
  HEAP32[i5 >> 2] = i1;
  __ZN3WTF9HashTableIPN7WebCore10RenderTextENS_12KeyValuePairIS3_PNS1_15SecureTextTimerEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES3_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i11 | 0, i5, i4);
  i20 = HEAP32[i4 >> 2] | 0;
 }
 HEAP32[i20 + 48 >> 2] = i2;
 __ZN7WebCore9TimerBase5startEdd(i20, +HEAPF64[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i20 + 44 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 36 >> 2] | 0) + 160 >> 3], +0);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore10RenderTextENS_12KeyValuePairIS3_PNS1_15SecureTextTimerEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1, i2, i3) {
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
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
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
  i2 = i7 + (i11 << 3) | 0;
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
   i19 = i16 + (i14 << 3) | 0;
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
      i34 = i16 + (i33 << 3) | 0;
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
   i16 = i2;
   i17 = i30;
   i13 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i17 + 4 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i13 = i11 + 1 | 0;
  if ((i13 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i13;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZNK7WebCore10RenderText13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((HEAP32[i7 + 24 >> 2] & 32 | 0) != 0) {
   i8 = HEAP32[i7 + 112 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN7WebCore16SimpleLineLayout24collectTextAbsoluteQuadsERKNS_10RenderTextERKNS0_6LayoutEPb(i5, i1, i8, i3);
   i8 = i5 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i10 = i5 + 8 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = i2 + 8 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   i14 = i13 + i11 | 0;
   if (i14 >>> 0 > (HEAP32[i2 + 4 >> 2] | 0) >>> 0) {
    __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i14);
    i15 = HEAP32[i12 >> 2] | 0;
   } else {
    i15 = i13;
   }
   if (i14 >>> 0 < i15 >>> 0) {
    _WTFCrash();
   }
   i13 = HEAP32[i2 >> 2] | 0;
   if ((i11 | 0) != 0) {
    i16 = 0;
    while (1) {
     _memcpy(i13 + (i16 + i15 << 5) | 0, i9 + (i16 << 5) | 0, 32) | 0;
     i16 = i16 + 1 | 0;
     if (i16 >>> 0 >= i11 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i12 >> 2] = i14;
   if ((HEAP32[i10 >> 2] | 0) != 0) {
    HEAP32[i10 >> 2] = 0;
   }
   i11 = HEAP32[i8 >> 2] | 0;
   if ((i11 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   HEAP32[i8 >> 2] = 0;
   HEAP32[i5 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i11);
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZNK7WebCore19RenderTextLineBoxes13absoluteQuadsERKNS_10RenderTextEPbNS0_14ClippingOptionE(i6, i1 + 48 | 0, i1, i3, 0);
 i3 = i6 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i5 = i6 + 8 | 0;
 i15 = HEAP32[i5 >> 2] | 0;
 i7 = i2 + 8 | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 i16 = i11 + i15 | 0;
 if (i16 >>> 0 > (HEAP32[i2 + 4 >> 2] | 0) >>> 0) {
  __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i16);
  i17 = HEAP32[i7 >> 2] | 0;
 } else {
  i17 = i11;
 }
 if (i16 >>> 0 < i17 >>> 0) {
  _WTFCrash();
 }
 i11 = HEAP32[i2 >> 2] | 0;
 if ((i15 | 0) != 0) {
  i2 = 0;
  while (1) {
   _memcpy(i11 + (i2 + i17 << 5) | 0, i1 + (i2 << 5) | 0, 32) | 0;
   i2 = i2 + 1 | 0;
   if (i2 >>> 0 >= i15 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i7 >> 2] = i16;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i4;
 return;
}
function __ZNK3WTF6String17containsOnlyASCIIEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  i4 = HEAP32[i2 + 8 >> 2] | 0;
  i5 = i4 + (i1 << 1) | 0;
  if ((i4 & 3 | 0) == 0) {
   i6 = 0;
   i7 = i4;
  } else {
   i8 = 0;
   i9 = i4;
   while (1) {
    i4 = HEAPU16[i9 >> 1] | 0 | i8;
    i10 = i9 + 2 | 0;
    if ((i10 & 3 | 0) == 0 | (i10 | 0) == (i5 | 0)) {
     i6 = i4;
     i7 = i10;
     break;
    } else {
     i8 = i4;
     i9 = i10;
    }
   }
  }
  i9 = i5 & -4;
  i8 = i9;
  if (i7 >>> 0 < i8 >>> 0) {
   i10 = (i9 + ~i7 | 0) >>> 2 << 1;
   i9 = i6;
   i4 = i7;
   while (1) {
    i9 = HEAP32[i4 >> 2] | i9;
    i4 = i4 + 4 | 0;
    if (i4 >>> 0 >= i8 >>> 0) {
     break;
    }
   }
   i11 = i9;
   i12 = i7 + (i10 + 2 << 1) | 0;
  } else {
   i11 = i6;
   i12 = i7;
  }
  if ((i12 | 0) == (i5 | 0)) {
   i13 = i11;
  } else {
   i7 = i11;
   i11 = i12;
   while (1) {
    i12 = HEAPU16[i11 >> 1] | 0 | i7;
    i6 = i11 + 2 | 0;
    if ((i6 | 0) == (i5 | 0)) {
     i13 = i12;
     break;
    } else {
     i7 = i12;
     i11 = i6;
    }
   }
  }
  i3 = (i13 & -8323200 | 0) == 0;
  return i3 | 0;
 } else {
  i13 = HEAP32[i2 + 8 >> 2] | 0;
  i2 = i13 + i1 | 0;
  if ((i13 & 3 | 0) == 0) {
   i14 = 0;
   i15 = i13;
  } else {
   i1 = 0;
   i11 = i13;
   while (1) {
    i13 = HEAPU8[i11] | 0 | i1;
    i7 = i11 + 1 | 0;
    if ((i7 & 3 | 0) == 0 | (i7 | 0) == (i2 | 0)) {
     i14 = i13;
     i15 = i7;
     break;
    } else {
     i1 = i13;
     i11 = i7;
    }
   }
  }
  i11 = i2 & -4;
  if (i15 >>> 0 < i11 >>> 0) {
   i1 = i11 + ~i15 + 4 | 0;
   i7 = i14;
   i13 = i15;
   while (1) {
    i7 = HEAP32[i13 >> 2] | i7;
    i13 = i13 + 4 | 0;
    if (i13 >>> 0 >= i11 >>> 0) {
     break;
    }
   }
   i16 = i7;
   i17 = i15 + (i1 & -4) | 0;
  } else {
   i16 = i14;
   i17 = i15;
  }
  if ((i17 | 0) == (i2 | 0)) {
   i18 = i16;
  } else {
   i15 = i16;
   i16 = i17;
   while (1) {
    i17 = HEAPU8[i16] | 0 | i15;
    i14 = i16 + 1 | 0;
    if ((i14 | 0) == (i2 | 0)) {
     i18 = i17;
     break;
    } else {
     i15 = i17;
     i16 = i14;
    }
   }
  }
  i3 = (i18 & -2139062144 | 0) == 0;
  return i3 | 0;
 }
 return 0;
}
function __ZN3WTF7HashMapIPKN7WebCore10RenderTextENS_6StringENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 3 | 0;
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
  i10 = i3 + (i2 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
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
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 3) | 0;
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
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 3) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 i8 = i1 | 0;
 i3 = i1 + 4 | 0;
 if ((i5 | 0) == (i6 + (i7 << 3) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 i7 = HEAP32[i5 + 4 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 | 0;
   i12 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i6 >> 2] = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i1;
 i5 = HEAP32[i3 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPKN7WebCore10RenderTextENS_12KeyValuePairIS4_NS_6StringEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i8, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN3WTF7HashMapIPN7WebCore10RenderTextEPNS1_15SecureTextTimerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS8_IS5_EEE4takeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 3 | 0;
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
  i10 = i3 + (i2 << 3) | 0;
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
     i19 = i3 + (i18 << 3) | 0;
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
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 3) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 3) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 i7 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i6;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i6 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = i7;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore10RenderTextENS_12KeyValuePairIS3_PNS1_15SecureTextTimerEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = i7;
 return i21 | 0;
}
function __ZNK7WebCore10RenderText26isAllCollapsibleWhitespaceEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 i4 = (i1 | 0) == 0;
 if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
  if (i4) {
   i5 = 1;
   return i5 | 0;
  }
  i6 = HEAP32[i3 + 8 >> 2] | 0;
  i7 = i2 + 44 | 0;
  i8 = 0;
  while (1) {
   i9 = HEAPU16[i6 + (i8 << 1) >> 1] | 0;
   if ((i9 | 0) == 32 | (i9 | 0) == 9) {
    if (((HEAP32[i7 >> 2] & 7) - 1 | 0) >>> 0 <= 1 >>> 0) {
     i5 = 0;
     i10 = 15;
     break;
    }
   } else if ((i9 | 0) == 10) {
    i9 = HEAP32[i7 >> 2] & 7;
    if (!((i9 | 0) == 4 | (i9 | 0) == 0)) {
     i5 = 0;
     i10 = 16;
     break;
    }
   } else {
    i5 = 0;
    i10 = 23;
    break;
   }
   i9 = i8 + 1 | 0;
   if (i9 >>> 0 < i1 >>> 0) {
    i8 = i9;
   } else {
    i5 = 1;
    i10 = 18;
    break;
   }
  }
  if ((i10 | 0) == 18) {
   return i5 | 0;
  } else if ((i10 | 0) == 15) {
   return i5 | 0;
  } else if ((i10 | 0) == 16) {
   return i5 | 0;
  } else if ((i10 | 0) == 23) {
   return i5 | 0;
  }
 } else {
  if (i4) {
   i5 = 1;
   return i5 | 0;
  }
  i4 = HEAP32[i3 + 8 >> 2] | 0;
  i3 = i2 + 44 | 0;
  i2 = 0;
  while (1) {
   i8 = HEAPU8[i4 + i2 | 0] | 0;
   if ((i8 | 0) == 10) {
    i7 = HEAP32[i3 >> 2] & 7;
    if (!((i7 | 0) == 4 | (i7 | 0) == 0)) {
     i5 = 0;
     i10 = 20;
     break;
    }
   } else if ((i8 | 0) == 32 | (i8 | 0) == 9) {
    if (((HEAP32[i3 >> 2] & 7) - 1 | 0) >>> 0 <= 1 >>> 0) {
     i5 = 0;
     i10 = 21;
     break;
    }
   } else {
    i5 = 0;
    i10 = 19;
    break;
   }
   i8 = i2 + 1 | 0;
   if (i8 >>> 0 < i1 >>> 0) {
    i2 = i8;
   } else {
    i5 = 1;
    i10 = 22;
    break;
   }
  }
  if ((i10 | 0) == 19) {
   return i5 | 0;
  } else if ((i10 | 0) == 20) {
   return i5 | 0;
  } else if ((i10 | 0) == 21) {
   return i5 | 0;
  } else if ((i10 | 0) == 22) {
   return i5 | 0;
  }
 }
 return 0;
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
function __ZN7WebCore10RenderText7setTextERKN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 do {
  if (!i3) {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 628 >> 2] & 63](i5, i1);
   i6 = i5 | 0;
   i7 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i2 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   if ((i8 | 0) == 0) {
    if (!i7) {
     break;
    }
    STACKTOP = i4;
    return;
   }
   i6 = i8 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    if (!i7) {
     break;
    }
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i6 >> 2] = i9;
    if (!i7) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 660 >> 2] & 63](i1, i2);
 i2 = i1 | 0;
 i5 = i1 + 20 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 & 1 | 0) == 0) {
   HEAP32[i5 >> 2] = i3 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i2, 1, 0);
   if ((HEAP32[i5 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i2);
  }
 } while (0);
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i2, 1, 1);
 i2 = i1 + 25 | 0;
 HEAP8[i2] = HEAP8[i2] & -3;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((HEAP32[i2 + 24 >> 2] & 32 | 0) != 0) {
  __ZN7WebCore11RenderBlock24invalidateLineLayoutPathEv(i2);
 }
 __ZNK7WebCore8Document21existingAXObjectCacheEv(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore10RenderTextC2ERNS_8DocumentERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 __ZN7WebCore12RenderObjectC2ERNS_4NodeE(i1 | 0, i2 | 0);
 HEAP32[i1 >> 2] = H_BASE + 64;
 i2 = i1 + 24 | 0;
 i4 = HEAP8[i2] | 0;
 HEAP8[i2] = i4 & -101;
 HEAP8[i2] = ((__ZNK3WTF6String17containsOnlyASCIIEv(i3) | 0) & 1) << 7 | i4 & 27;
 i4 = i1 + 25 | 0;
 HEAP8[i4] = HEAP8[i4] & -15;
 HEAPF32[i1 + 28 >> 2] = +-1;
 HEAPF32[i1 + 32 >> 2] = +-1;
 HEAPF32[i1 + 36 >> 2] = +0;
 HEAPF32[i1 + 40 >> 2] = +0;
 i5 = i1 + 44 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i3 = i6 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 __ZN7WebCore19RenderTextLineBoxesC1Ev(i1 + 48 | 0);
 i3 = i1 + 20 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] | 256;
 do {
  if ((HEAP8[i2] | 0) < 0) {
   i7 = 1;
  } else {
   i3 = HEAP32[i5 >> 2] | 0;
   if ((HEAP32[i3 + 16 >> 2] & 32 | 0) != 0) {
    i7 = 1;
    break;
   }
   i7 = (__ZN7WebCore4Font22characterRangeCodePathEPKtj(HEAP32[i3 + 8 >> 2] | 0, HEAP32[i3 + 4 >> 2] | 0) | 0) == 1 | 0;
  }
 } while (0);
 HEAP8[i4] = HEAP8[i4] & -2 | i7;
 i7 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0;
 if ((HEAP8[i7 + 592 | 0] & 1) != 0) {
  return;
 }
 i1 = i7 + 584 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) + (HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] | 0) | 0;
 HEAP32[i1 >> 2] = i4;
 if (i4 >>> 0 < 201 >>> 0) {
  return;
 }
 __ZN7WebCore9FrameView24updateIsVisuallyNonEmptyEv(i7);
 return;
}
function __ZN7WebCore10RenderTextC1ERNS_8DocumentERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 __ZN7WebCore12RenderObjectC2ERNS_4NodeE(i1 | 0, i2 | 0);
 HEAP32[i1 >> 2] = H_BASE + 64;
 i2 = i1 + 24 | 0;
 i4 = HEAP8[i2] | 0;
 HEAP8[i2] = i4 & -101;
 HEAP8[i2] = ((__ZNK3WTF6String17containsOnlyASCIIEv(i3) | 0) & 1) << 7 | i4 & 27;
 i4 = i1 + 25 | 0;
 HEAP8[i4] = HEAP8[i4] & -15;
 HEAPF32[i1 + 28 >> 2] = +-1;
 HEAPF32[i1 + 32 >> 2] = +-1;
 HEAPF32[i1 + 36 >> 2] = +0;
 HEAPF32[i1 + 40 >> 2] = +0;
 i5 = i1 + 44 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i3 = i6 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 __ZN7WebCore19RenderTextLineBoxesC1Ev(i1 + 48 | 0);
 i3 = i1 + 20 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] | 256;
 do {
  if ((HEAP8[i2] | 0) < 0) {
   i7 = 1;
  } else {
   i3 = HEAP32[i5 >> 2] | 0;
   if ((HEAP32[i3 + 16 >> 2] & 32 | 0) != 0) {
    i7 = 1;
    break;
   }
   i7 = (__ZN7WebCore4Font22characterRangeCodePathEPKtj(HEAP32[i3 + 8 >> 2] | 0, HEAP32[i3 + 4 >> 2] | 0) | 0) == 1 | 0;
  }
 } while (0);
 HEAP8[i4] = HEAP8[i4] & -2 | i7;
 i7 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0;
 if ((HEAP8[i7 + 592 | 0] & 1) != 0) {
  return;
 }
 i1 = i7 + 584 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) + (HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] | 0) | 0;
 HEAP32[i1 >> 2] = i4;
 if (i4 >>> 0 < 201 >>> 0) {
  return;
 }
 __ZN7WebCore9FrameView24updateIsVisuallyNonEmptyEv(i7);
 return;
}
function __ZN7WebCore10RenderTextC2ERNS_4TextERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 __ZN7WebCore12RenderObjectC2ERNS_4NodeE(i1 | 0, i2 | 0);
 HEAP32[i1 >> 2] = H_BASE + 64;
 i2 = i1 + 24 | 0;
 i4 = HEAP8[i2] | 0;
 HEAP8[i2] = i4 & -101;
 HEAP8[i2] = ((__ZNK3WTF6String17containsOnlyASCIIEv(i3) | 0) & 1) << 7 | i4 & 27;
 i4 = i1 + 25 | 0;
 HEAP8[i4] = HEAP8[i4] & -15;
 HEAPF32[i1 + 28 >> 2] = +-1;
 HEAPF32[i1 + 32 >> 2] = +-1;
 HEAPF32[i1 + 36 >> 2] = +0;
 HEAPF32[i1 + 40 >> 2] = +0;
 i5 = i1 + 44 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i3 = i6 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 __ZN7WebCore19RenderTextLineBoxesC1Ev(i1 + 48 | 0);
 i3 = i1 + 20 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] | 256;
 do {
  if ((HEAP8[i2] | 0) < 0) {
   i7 = 1;
  } else {
   i3 = HEAP32[i5 >> 2] | 0;
   if ((HEAP32[i3 + 16 >> 2] & 32 | 0) != 0) {
    i7 = 1;
    break;
   }
   i7 = (__ZN7WebCore4Font22characterRangeCodePathEPKtj(HEAP32[i3 + 8 >> 2] | 0, HEAP32[i3 + 4 >> 2] | 0) | 0) == 1 | 0;
  }
 } while (0);
 HEAP8[i4] = HEAP8[i4] & -2 | i7;
 i7 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0;
 if ((HEAP8[i7 + 592 | 0] & 1) != 0) {
  return;
 }
 i1 = i7 + 584 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) + (HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] | 0) | 0;
 HEAP32[i1 >> 2] = i4;
 if (i4 >>> 0 < 201 >>> 0) {
  return;
 }
 __ZN7WebCore9FrameView24updateIsVisuallyNonEmptyEv(i7);
 return;
}
function __ZN7WebCore10RenderTextC1ERNS_4TextERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 __ZN7WebCore12RenderObjectC2ERNS_4NodeE(i1 | 0, i2 | 0);
 HEAP32[i1 >> 2] = H_BASE + 64;
 i2 = i1 + 24 | 0;
 i4 = HEAP8[i2] | 0;
 HEAP8[i2] = i4 & -101;
 HEAP8[i2] = ((__ZNK3WTF6String17containsOnlyASCIIEv(i3) | 0) & 1) << 7 | i4 & 27;
 i4 = i1 + 25 | 0;
 HEAP8[i4] = HEAP8[i4] & -15;
 HEAPF32[i1 + 28 >> 2] = +-1;
 HEAPF32[i1 + 32 >> 2] = +-1;
 HEAPF32[i1 + 36 >> 2] = +0;
 HEAPF32[i1 + 40 >> 2] = +0;
 i5 = i1 + 44 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i3 = i6 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 __ZN7WebCore19RenderTextLineBoxesC1Ev(i1 + 48 | 0);
 i3 = i1 + 20 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] | 256;
 do {
  if ((HEAP8[i2] | 0) < 0) {
   i7 = 1;
  } else {
   i3 = HEAP32[i5 >> 2] | 0;
   if ((HEAP32[i3 + 16 >> 2] & 32 | 0) != 0) {
    i7 = 1;
    break;
   }
   i7 = (__ZN7WebCore4Font22characterRangeCodePathEPKtj(HEAP32[i3 + 8 >> 2] | 0, HEAP32[i3 + 4 >> 2] | 0) | 0) == 1 | 0;
  }
 } while (0);
 HEAP8[i4] = HEAP8[i4] & -2 | i7;
 i7 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0;
 if ((HEAP8[i7 + 592 | 0] & 1) != 0) {
  return;
 }
 i1 = i7 + 584 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) + (HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] | 0) | 0;
 HEAP32[i1 >> 2] = i4;
 if (i4 >>> 0 < 201 >>> 0) {
  return;
 }
 __ZN7WebCore9FrameView24updateIsVisuallyNonEmptyEv(i7);
 return;
}
function __ZNK3WTF7HashMapIPKN7WebCore10RenderTextENS_6StringENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE3getERKS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = i2;
 i6 = i3 + ~(i3 << 15) | 0;
 i3 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i3 >>> 6 ^ i3;
 i3 = i6 + ~(i6 << 11) | 0;
 i6 = i3 >>> 16 ^ i3;
 L1 : do {
  if ((i5 | 0) != 0) {
   i3 = i6 & i4;
   i7 = i5 + (i3 << 3) | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == (i2 | 0)) {
    i9 = i7;
   } else {
    i7 = (i6 >>> 23) + ~i6 | 0;
    i10 = i7 << 12 ^ i7;
    i7 = i10 >>> 7 ^ i10;
    i10 = i7 << 2 ^ i7;
    i7 = i10 >>> 20 ^ i10 | 1;
    i10 = 0;
    i11 = i3;
    i3 = i8;
    while (1) {
     if ((i3 | 0) == 0) {
      break L1;
     }
     i8 = (i10 | 0) == 0 ? i7 : i10;
     i12 = i8 + i11 & i4;
     i13 = i5 + (i12 << 3) | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     if ((i14 | 0) == (i2 | 0)) {
      i9 = i13;
      break;
     } else {
      i10 = i8;
      i11 = i12;
      i3 = i14;
     }
    }
   }
   if ((i9 | 0) == 0) {
    break;
   }
   i3 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i1 >> 2] = i3;
   if ((i3 | 0) == 0) {
    return;
   }
   i11 = i3 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore10RenderText22containsOnlyWhitespaceEjj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = i3 + i2 | 0;
 L1 : do {
  if (i1 >>> 0 > i2 >>> 0) {
   i3 = i4 + 8 | 0;
   i5 = i3;
   i6 = i3 | 0;
   if ((HEAP32[i4 + 16 >> 2] & 32 | 0) == 0) {
    i3 = i2;
    while (1) {
     do {
      if ((HEAP16[(HEAP32[i5 >> 2] | 0) + (i3 << 1) >> 1] | 0) != 10) {
       i7 = HEAP32[i5 >> 2] | 0;
       if ((HEAP16[i7 + (i3 << 1) >> 1] | 0) == 32) {
        break;
       }
       if ((HEAP16[i7 + (i3 << 1) >> 1] | 0) != 9) {
        i8 = i3;
        break L1;
       }
      }
     } while (0);
     i7 = i3 + 1 | 0;
     if (i7 >>> 0 < i1 >>> 0) {
      i3 = i7;
     } else {
      i8 = i7;
      break;
     }
    }
   } else {
    i3 = i2;
    while (1) {
     do {
      if ((HEAP8[(HEAP32[i6 >> 2] | 0) + i3 | 0] | 0) != 10) {
       i5 = HEAP32[i6 >> 2] | 0;
       if ((HEAP8[i5 + i3 | 0] | 0) == 32) {
        break;
       }
       if ((HEAP8[i5 + i3 | 0] | 0) != 9) {
        i8 = i3;
        break L1;
       }
      }
     } while (0);
     i5 = i3 + 1 | 0;
     if (i5 >>> 0 < i1 >>> 0) {
      i3 = i5;
     } else {
      i8 = i5;
      break;
     }
    }
   }
  } else {
   i8 = i2;
  }
 } while (0);
 return i8 >>> 0 >= i1 >>> 0 | 0;
}
function __ZNK7WebCore10RenderText17previousCharacterEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = __ZNK7WebCore12RenderObject18previousInPreOrderEv(i1 | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 32;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 L3 : while (1) {
  i5 = (HEAP32[i4 + 20 >> 2] & 768 | 0) == 256;
  do {
   if (i5) {
    i2 = HEAP32[i4 + 44 >> 2] | 0;
    if ((i2 | 0) == 0) {
     break;
    }
    if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
     i6 = 7;
     break L3;
    }
   } else {
    if ((HEAP32[i4 + 24 >> 2] & 4 | 0) == 0) {
     i3 = 32;
     i6 = 19;
     break L3;
    }
   }
  } while (0);
  i2 = __ZNK7WebCore12RenderObject18previousInPreOrderEv(i4) | 0;
  if ((i2 | 0) == 0) {
   i3 = 32;
   i6 = 14;
   break;
  } else {
   i4 = i2;
  }
 }
 if ((i6 | 0) == 7) {
  if (!i5) {
   i3 = 32;
   return i3 | 0;
  }
  i5 = HEAP32[i4 + 44 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i3 = 32;
   return i3 | 0;
  }
  i4 = (HEAP32[i5 + 4 >> 2] | 0) - 1 | 0;
  i2 = i5 + 8 | 0;
  if ((HEAP32[i5 + 16 >> 2] & 32 | 0) == 0) {
   i3 = HEAP16[(HEAP32[i2 >> 2] | 0) + (i4 << 1) >> 1] | 0;
   return i3 | 0;
  } else {
   i3 = HEAPU8[(HEAP32[i2 >> 2] | 0) + i4 | 0] | 0;
   return i3 | 0;
  }
 } else if ((i6 | 0) == 14) {
  return i3 | 0;
 } else if ((i6 | 0) == 19) {
  return i3 | 0;
 }
 return 0;
}
function __ZN3WTF13StringBuilder6appendERKNS_6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i1 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   i6 = i2 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   i6 = i1 + 4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i2;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i10 = 0;
   } else {
    i10 = HEAP32[i7 + 4 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = i10;
   HEAP8[i1 + 12 | 0] = (HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0) >>> 5 & 1;
   return;
  }
 } while (0);
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  __ZN3WTF13StringBuilder6appendEPKtj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 } else {
  __ZN3WTF13StringBuilder6appendEPKhj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 }
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
function __ZN7WebCore10RenderText17setTextWithOffsetERKN3WTF6StringEjjb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 do {
  if (i5) {
   i6 = i2 | 0;
  } else {
   i7 = i2 | 0;
   if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 + 44 >> 2] | 0, HEAP32[i7 >> 2] | 0) | 0)) {
    i6 = i7;
    break;
   }
   return;
  }
 } while (0);
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = HEAP32[i7 + 4 >> 2] | 0;
 }
 i7 = i8 - (HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 4 >> 2] | 0) | 0;
 if ((i4 | 0) == 0) {
  i9 = i3;
 } else {
  i9 = i3 - 1 + i4 | 0;
 }
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 if ((HEAP32[i4 + 24 >> 2] & 32 | 0) == 0) {
  i10 = 10;
 } else {
  if ((HEAP32[i4 + 112 >> 2] | 0) == 0) {
   i10 = 10;
  } else {
   i11 = 32;
  }
 }
 if ((i10 | 0) == 10) {
  i11 = ((__ZN7WebCore19RenderTextLineBoxes10dirtyRangeERNS_10RenderTextEjji(i1 + 48 | 0, i1, i3, i9, i7) | 0) & 1) << 5;
 }
 i7 = i1 + 24 | 0;
 HEAP8[i7] = HEAP8[i7] & -33 | i11;
 if (i5) {
  i12 = 1;
 } else {
  i12 = (i11 & 32) != 0;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 644 >> 2] & 31](i1, i2, i12);
 return;
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
function __ZN7WebCore10RenderText15willBeDestroyedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[H_BASE + 784 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   HEAP32[i3 >> 2] = i1;
   i5 = __ZN3WTF7HashMapIPN7WebCore10RenderTextEPNS1_15SecureTextTimerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS8_IS5_EEE4takeERKS3_(i4, i3) | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i3 = i1 + 48 | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) != 0) {
  __ZN7WebCore19RenderTextLineBoxes9deleteAllEv(i3);
  i6 = i1 | 0;
  __ZN7WebCore12RenderObject15willBeDestroyedEv(i6);
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore19RenderTextLineBoxes19removeAllFromParentERNS_10RenderTextE(i3, i1);
 __ZN7WebCore19RenderTextLineBoxes9deleteAllEv(i3);
 i6 = i1 | 0;
 __ZN7WebCore12RenderObject15willBeDestroyedEv(i6);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore10RenderText19containsCaretOffsetEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((HEAP32[i3 + 24 >> 2] & 32 | 0) != 0) {
   i4 = HEAP32[i3 + 112 >> 2] | 0;
   i5 = i4;
   if ((i4 | 0) == 0) {
    break;
   }
   i6 = HEAP32[i4 + 4 >> 2] | 0;
   i4 = 0;
   while (1) {
    if (i4 >>> 0 >= i6 >>> 0) {
     i7 = 0;
     i8 = 9;
     break;
    }
    if ((HEAP32[i5 + 8 + (i4 << 4) >> 2] | 0) >>> 0 > i2 >>> 0) {
     i7 = 0;
     i8 = 12;
     break;
    }
    if ((HEAP32[i5 + 8 + (i4 << 4) + 4 >> 2] & 2147483647) >>> 0 < i2 >>> 0) {
     i4 = i4 + 1 | 0;
    } else {
     i7 = 1;
     i8 = 10;
     break;
    }
   }
   if ((i8 | 0) == 9) {
    return i7 | 0;
   } else if ((i8 | 0) == 10) {
    return i7 | 0;
   } else if ((i8 | 0) == 12) {
    return i7 | 0;
   }
  }
 } while (0);
 i7 = __ZNK7WebCore19RenderTextLineBoxes14containsOffsetERKNS_10RenderTextEjNS0_10OffsetTypeE(i1 + 48 | 0, i1, i2, 0) | 0;
 return i7 | 0;
}
function __ZNK7WebCore10RenderText5widthEjjfbPN3WTF7HashSetIPKNS_14SimpleFontDataENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEEPNS_13GlyphOverflowE(i1, i2, i3, d4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, d9 = +0, i10 = 0, i11 = 0;
 i8 = HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 4 >> 2] | 0;
 if (i8 >>> 0 <= i2 >>> 0) {
  d9 = +0;
  return +d9;
 }
 i10 = (i3 + i2 | 0) >>> 0 > i8 >>> 0 ? i8 - i2 | 0 : i3;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i5) {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i3 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    i11 = HEAP32[i3 + 36 >> 2] | 0;
    break;
   } else {
    i11 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i3) | 0;
    break;
   }
  } else {
   i11 = HEAP32[i3 + 36 >> 2] | 0;
  }
 } while (0);
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 632 >> 2] | 0;
 i5 = __ZNK7WebCore11RenderStyle4fontEv(i11) | 0;
 d9 = +FUNCTION_TABLE_fiiiifii[i3 & 3](i1, i2, i10, i5, d4, i6, i7);
 return +d9;
}
function __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
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
 i1 = i2 + (i6 << 5) | 0;
 if (i5 >>> 0 > 134217727 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 5) | 0;
 HEAP32[i3 >> 2] = i7 >>> 5;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   _memcpy(i7 | 0, i6 | 0, 32) | 0;
   i5 = i6 + 32 | 0;
   if ((i5 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i5;
    i7 = i7 + 32 | 0;
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
function __ZNK7WebCore10RenderText41textWithoutConvertingBackslashToYenSymbolEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 do {
  if ((HEAP8[i2 + 25 | 0] & 4) != 0) {
   i5 = i2 + 8 | 0;
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 12 | 0) != 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 628 >> 2] & 63](i4, i2);
   i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 36 >> 2] | 0;
   __ZN7WebCore18applyTextTransformERKNS_11RenderStyleERN3WTF6StringEt(i6, i4, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 664 >> 2] & 255](i2) | 0);
   i6 = i4 | 0;
   i5 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i1 >> 2] = i5;
   STACKTOP = i3;
   return;
  }
 } while (0);
 i4 = HEAP32[i2 + 44 >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10RenderTextD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 if ((HEAP8[i1 + 25 | 0] & 8) != 0) {
  if (!(HEAP8[H_BASE + 752 | 0] | 0)) {
   _memset(H_BASE + 760 | 0, 0, 20) | 0;
   HEAP8[H_BASE + 752 | 0] = 1;
  }
  HEAP32[i3 >> 2] = i1;
  __ZN3WTF7HashMapIPKN7WebCore10RenderTextENS_6StringENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(H_BASE + 760, i3) | 0;
 }
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i1 | 0;
  __ZN7WebCore12RenderObjectD2Ev(i4);
  STACKTOP = i2;
  return;
 }
 i5 = i3 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i4 = i1 | 0;
  __ZN7WebCore12RenderObjectD2Ev(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i6;
  i4 = i1 | 0;
  __ZN7WebCore12RenderObjectD2Ev(i4);
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore10RenderTextD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 if ((HEAP8[i1 + 25 | 0] & 8) != 0) {
  if (!(HEAP8[H_BASE + 752 | 0] | 0)) {
   _memset(H_BASE + 760 | 0, 0, 20) | 0;
   HEAP8[H_BASE + 752 | 0] = 1;
  }
  HEAP32[i3 >> 2] = i1;
  __ZN3WTF7HashMapIPKN7WebCore10RenderTextENS_6StringENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(H_BASE + 760, i3) | 0;
 }
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i1 | 0;
  __ZN7WebCore12RenderObjectD2Ev(i4);
  STACKTOP = i2;
  return;
 }
 i5 = i3 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i4 = i1 | 0;
  __ZN7WebCore12RenderObjectD2Ev(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i6;
  i4 = i1 | 0;
  __ZN7WebCore12RenderObjectD2Ev(i4);
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore10RenderText29computePreferredLogicalWidthsEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 _memset(i4 | 0, 0, 20) | 0;
 _memset(i5 | 0, 0, 17) | 0;
 __ZN7WebCore10RenderText29computePreferredLogicalWidthsEfRN3WTF7HashSetIPKNS_14SimpleFontDataENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEERNS_13GlyphOverflowE(i1, d2, i4, i5);
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == 0) {
   if ((HEAP32[i5 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i5 + 4 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i5 + 12 >> 2] | 0) != 0) {
    break;
   }
   i6 = i1 + 25 | 0;
   HEAP8[i6] = HEAP8[i6] | 2;
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10RenderText17setSelectionStateENS_12RenderObject14SelectionStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = HEAP32[i1 + 8 >> 2] | 0;
   if ((HEAP32[i3 + 24 >> 2] & 32 | 0) == 0) {
    break;
   }
   __ZN7WebCore15RenderBlockFlow15ensureLineBoxesEv(i3);
  }
 } while (0);
 i3 = i1 | 0;
 i4 = i1 + 20 | 0;
 HEAP32[i4 >> 2] = HEAP32[i4 >> 2] & -234881025 | i2 << 25 & 234881024;
 if (__ZN7WebCore12RenderObject33canUpdateSelectionOnRootLineBoxesEv(i3) | 0) {
  __ZN7WebCore19RenderTextLineBoxes17setSelectionStateERNS_10RenderTextENS_12RenderObject14SelectionStateE(i1 + 48 | 0, i1, i2);
 }
 i1 = __ZNK7WebCore12RenderObject15containingBlockEv(i3) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 768) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 528 >> 2] & 63](i1 | 0, i2);
 return;
}
function __ZNK7WebCore10RenderText29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = i2 | 0;
 i2 = __ZNK7WebCore12RenderObject15containingBlockEv(i4) | 0;
 i5 = HEAP32[(__ZNK7WebCore12RenderObject14enclosingLayerEv(i4) | 0) + 32 >> 2] | 0;
 if ((i5 | 0) == (i2 | 0)) {
  i6 = i2;
 } else {
  i4 = __ZNK7WebCore12RenderObject14isDescendantOfEPKS0_(i2, i5) | 0;
  i6 = i4 ? i2 : i5;
 }
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   if ((i5 | 0) == (i6 | 0)) {
    break;
   }
   if (__ZNK7WebCore12RenderObject14isDescendantOfEPKS0_(i6, i5) | 0) {
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 500 >> 2] & 31](i1, i5, i3);
   return;
  }
 } while (0);
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 500 >> 2] & 31](i1, i6, i3);
 return;
}
function __ZN7WebCore10RenderTextD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 if ((HEAP8[i1 + 25 | 0] & 8) != 0) {
  if (!(HEAP8[H_BASE + 752 | 0] | 0)) {
   _memset(H_BASE + 760 | 0, 0, 20) | 0;
   HEAP8[H_BASE + 752 | 0] = 1;
  }
  HEAP32[i3 >> 2] = i1;
  __ZN3WTF7HashMapIPKN7WebCore10RenderTextENS_6StringENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(H_BASE + 760, i3) | 0;
 }
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN7WebCore12RenderObjectD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore10RenderText15hasRenderedTextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((HEAP32[i2 + 24 >> 2] & 32 | 0) != 0) {
   i3 = HEAP32[i2 + 112 >> 2] | 0;
   i4 = i3;
   if ((i3 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i3 + 4 >> 2] | 0;
   i3 = 0;
   while (1) {
    if (i3 >>> 0 >= i5 >>> 0) {
     i6 = 0;
     i7 = 8;
     break;
    }
    if ((HEAP32[i4 + 8 + (i3 << 4) + 4 >> 2] & 2147483647) >>> 0 > (HEAP32[i4 + 8 + (i3 << 4) >> 2] | 0) >>> 0) {
     i6 = 1;
     i7 = 9;
     break;
    } else {
     i3 = i3 + 1 | 0;
    }
   }
   if ((i7 | 0) == 8) {
    return i6 | 0;
   } else if ((i7 | 0) == 9) {
    return i6 | 0;
   }
  }
 } while (0);
 i6 = __ZNK7WebCore19RenderTextLineBoxes15hasRenderedTextEv(i1 + 48 | 0) | 0;
 return i6 | 0;
}
function __ZN7WebCore10RenderText14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, d8 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i2 | 0;
 if ((i3 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i2;
  return;
 } else {
  i7 = i6 | 0;
  d8 = +FUNCTION_TABLE_fii[HEAP32[(HEAP32[i3 >> 2] | 0) + 128 >> 2] & 1](i3, i4);
  __ZNK7WebCore13RootInlineBox16computeCaretRectEfjPNS_10LayoutUnitE(i6, __ZN7WebCore9InlineBox4rootEv(i3) | 0, d8, 1, i5);
  i5 = HEAP32[i7 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i1 + 4 >> 2] = i5;
  i5 = i6 + 8 | 0;
  i6 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i1 + 8 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i1 + 12 >> 2] = i6;
  STACKTOP = i2;
  return;
 }
}
function __ZNK7WebCore10RenderText30computeUseBackslashAsYenSymbolEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 i3 = __ZNK7WebCore11RenderStyle4fontEv(i2) | 0;
 if ((HEAP8[(__ZNK7WebCore11RenderStyle4fontEv(i2) | 0) + 36 | 0] & 1) != 0) {
  i4 = 1;
  return i4 | 0;
 }
 if ((HEAP32[i3 + 20 >> 2] & 16 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1308 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i1 = i3 + 8 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   if ((__ZNK7WebCore12TextEncoding25backslashAsCurrencySymbolEv(i1) | 0) << 16 >> 16 == 92) {
    break;
   } else {
    i4 = 1;
   }
   return i4 | 0;
  }
 } while (0);
 i4 = 0;
 return i4 | 0;
}
function __ZN7WebCore15SecureTextTimer5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i4 >> 2] | 0) + 644 >> 2] | 0;
 i5 = HEAP32[i4 + 44 >> 2] | 0;
 i6 = i3 | 0;
 HEAP32[i6 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 FUNCTION_TABLE_viii[i1 & 31](i4, i3, 1);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i3 | 0;
 i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i6 >> 2] = i4;
  STACKTOP = i2;
  return;
 }
}
function __ZNK7WebCore10RenderText12originalTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP8[i2 + 25 | 0] & 8) == 0) {
  i5 = HEAP32[i2 + 44 >> 2] | 0;
  HEAP32[i1 >> 2] = i5;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
  STACKTOP = i3;
  return;
 } else {
  if (!(HEAP8[H_BASE + 752 | 0] | 0)) {
   _memset(H_BASE + 760 | 0, 0, 20) | 0;
   HEAP8[H_BASE + 752 | 0] = 1;
  }
  HEAP32[i4 >> 2] = i2;
  __ZNK3WTF7HashMapIPKN7WebCore10RenderTextENS_6StringENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE3getERKS4_(i1, H_BASE + 760, i4);
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore10RenderText33previousOffsetForBackwardDeletionEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i2 - 1 | 0;
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = 0;
  } else {
   if ((HEAP32[i4 + 4 >> 2] | 0) >>> 0 <= i3 >>> 0) {
    i5 = 0;
    break;
   }
   i1 = i4 + 8 | 0;
   if ((HEAP32[i4 + 16 >> 2] & 32 | 0) == 0) {
    i5 = HEAP16[(HEAP32[i1 >> 2] | 0) + (i3 << 1) >> 1] | 0;
    break;
   } else {
    i5 = HEAPU8[(HEAP32[i1 >> 2] | 0) + i3 | 0] | 0;
    break;
   }
  }
 } while (0);
 i4 = (i5 & -1024) << 16 >> 16 == -9216 ? i2 - 2 | 0 : i3;
 return ((i4 | 0) < 0 ? 0 : i4) | 0;
}
function __ZNK7WebCore10RenderText14previousOffsetEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 do {
  if ((HEAP8[i1 + 24 | 0] | 0) >= 0) {
   i3 = HEAP32[i1 + 44 >> 2] | 0;
   if ((HEAP32[i3 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   i4 = __ZN7WebCore22cursorMovementIteratorEPKti(HEAP32[i3 + 8 >> 2] | 0, HEAP32[i3 + 4 >> 2] | 0) | 0;
   if ((i4 | 0) == 0) {
    i5 = i2 - 1 | 0;
    return i5 | 0;
   } else {
    i3 = __ZN7WebCore18textBreakPrecedingEPNS_17TextBreakIteratorEi(i4, i2) | 0;
    i5 = (i3 | 0) == -1 ? i2 - 1 | 0 : i3;
    return i5 | 0;
   }
  }
 } while (0);
 i5 = i2 - 1 | 0;
 return i5 | 0;
}
function __ZNK7WebCore10RenderText10nextOffsetEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 do {
  if ((HEAP8[i1 + 24 | 0] | 0) >= 0) {
   i3 = HEAP32[i1 + 44 >> 2] | 0;
   if ((HEAP32[i3 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   i4 = __ZN7WebCore22cursorMovementIteratorEPKti(HEAP32[i3 + 8 >> 2] | 0, HEAP32[i3 + 4 >> 2] | 0) | 0;
   if ((i4 | 0) == 0) {
    i5 = i2 + 1 | 0;
    return i5 | 0;
   } else {
    i3 = __ZN7WebCore18textBreakFollowingEPNS_17TextBreakIteratorEi(i4, i2) | 0;
    i5 = (i3 | 0) == -1 ? i2 + 1 | 0 : i3;
    return i5 | 0;
   }
  }
 } while (0);
 i5 = i2 + 1 | 0;
 return i5 | 0;
}
function __ZNK7WebCore10RenderText14caretMaxOffsetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((HEAP32[i2 + 24 >> 2] & 32 | 0) != 0) {
   i3 = HEAP32[i2 + 112 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i5 = HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 4 >> 2] | 0;
    return i5 | 0;
   } else {
    i5 = HEAP32[i3 + 8 + (i4 - 1 << 4) + 4 >> 2] & 2147483647;
    return i5 | 0;
   }
  }
 } while (0);
 i5 = __ZNK7WebCore19RenderTextLineBoxes14caretMaxOffsetERKNS_10RenderTextE(i1 + 48 | 0, i1) | 0;
 return i5 | 0;
}
function __ZNK7WebCore10RenderText30absoluteQuadsClippedToEllipsisEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((HEAP32[i3 + 24 >> 2] & 32 | 0) != 0) {
   i4 = HEAP32[i3 + 112 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore16SimpleLineLayout24collectTextAbsoluteQuadsERKNS_10RenderTextERKNS0_6LayoutEPb(i1, i2, i4, 0);
   return;
  }
 } while (0);
 __ZNK7WebCore19RenderTextLineBoxes13absoluteQuadsERKNS_10RenderTextEPbNS0_14ClippingOptionE(i1, i2 + 48 | 0, i2, 0, 1);
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
function __ZN7WebCore10RenderText15positionLineBoxERNS_13InlineTextBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP16[i2 + 48 >> 1] | 0) == 0) {
  __ZN7WebCore9InlineBox16removeFromParentEv(i2 | 0);
  __ZN7WebCore19RenderTextLineBoxes6removeERNS_13InlineTextBoxE(i1 + 48 | 0, i2);
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
  return;
 } else {
  i3 = i1 + 24 | 0;
  HEAP8[i3] = (((HEAP32[i2 + 32 >> 2] | 0) >>> 2 & 1 ^ 1) & 255) << 6 ^ 64 | HEAP8[i3];
  return;
 }
}
function __ZNK7WebCore10RenderText21absoluteRectsForRangeEjjbPb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 if ((HEAP32[i7 + 24 >> 2] & 32 | 0) != 0) {
  __ZN7WebCore15RenderBlockFlow15ensureLineBoxesEv(i7);
 }
 __ZNK7WebCore19RenderTextLineBoxes21absoluteRectsForRangeERKNS_10RenderTextEjjbPb(i1, i2 + 48 | 0, i2, (i3 | 0) < 0 ? 2147483647 : i3, (i4 | 0) < 0 ? 2147483647 : i4, i5, i6);
 return;
}
function __ZNK7WebCore10RenderText21absoluteQuadsForRangeEjjbPb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 if ((HEAP32[i7 + 24 >> 2] & 32 | 0) != 0) {
  __ZN7WebCore15RenderBlockFlow15ensureLineBoxesEv(i7);
 }
 __ZNK7WebCore19RenderTextLineBoxes21absoluteQuadsForRangeERKNS_10RenderTextEjjbPb(i1, i2 + 48 | 0, i2, (i3 | 0) < 0 ? 2147483647 : i3, (i4 | 0) < 0 ? 2147483647 : i4, i5, i6);
 return;
}
function __ZNK7WebCore10RenderText16linesBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((HEAP32[i3 + 24 >> 2] & 32 | 0) != 0) {
   i4 = HEAP32[i3 + 112 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore16SimpleLineLayout22computeTextBoundingBoxERKNS_10RenderTextERKNS0_6LayoutE(i1, i2, i4);
   return;
  }
 } while (0);
 __ZNK7WebCore19RenderTextLineBoxes11boundingBoxERKNS_10RenderTextE(i1, i2 + 48 | 0, i2);
 return;
}
function __ZNK7WebCore10RenderText14caretMinOffsetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((HEAP32[i2 + 24 >> 2] & 32 | 0) != 0) {
   i3 = HEAP32[i2 + 112 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
    i4 = 0;
    return i4 | 0;
   }
   i4 = HEAP32[i3 + 8 >> 2] | 0;
   return i4 | 0;
  }
 } while (0);
 i4 = __ZNK7WebCore19RenderTextLineBoxes14caretMinOffsetEv(i1 + 48 | 0) | 0;
 return i4 | 0;
}
function __ZN7WebCore10RenderText13createTextBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __Znwj(52) | 0;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i3 + 12 >> 2] = 0;
 HEAP32[i3 + 16 >> 2] = i2;
 HEAPF32[i3 + 20 >> 2] = +0;
 HEAPF32[i3 + 24 >> 2] = +0;
 HEAPF32[i3 + 28 >> 2] = +0;
 HEAP32[i3 >> 2] = __ZTVN7WebCore13InlineTextBoxE + 8;
 _memset(i3 + 36 | 0, 0, 14) | 0;
 HEAP16[i3 + 50 >> 1] = -1;
 HEAP32[i3 + 32 >> 2] = 149504;
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZNK7WebCore10RenderText14firstRunOriginEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 + 48 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  i7 = 0;
 } else {
  i6 = ~~+HEAPF32[i5 + 24 >> 2];
  i7 = ~~+HEAPF32[i5 + 20 >> 2];
 }
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i6;
 __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i1, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10RenderText14dirtyLineBoxesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 do {
  if (i2) {
   __ZN7WebCore19RenderTextLineBoxes9deleteAllEv(i1 + 48 | 0);
   i3 = i1 + 24 | 0;
  } else {
   i4 = i1 + 24 | 0;
   if ((HEAP8[i4] & 32) != 0) {
    i3 = i4;
    break;
   }
   __ZN7WebCore19RenderTextLineBoxes8dirtyAllEv(i1 + 48 | 0);
   i3 = i4;
  }
 } while (0);
 HEAP8[i3] = HEAP8[i3] & -33;
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
function __ZN7WebCore10RenderText25removeAndDestroyTextBoxesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 48 | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) != 0) {
  __ZN7WebCore19RenderTextLineBoxes9deleteAllEv(i2);
  return;
 }
 __ZN7WebCore19RenderTextLineBoxes19removeAllFromParentERNS_10RenderTextE(i2, i1);
 __ZN7WebCore19RenderTextLineBoxes9deleteAllEv(i2);
 return;
}
function iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZNK7WebCore10RenderText31computeCanUseSimpleFontCodePathEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP8[i1 + 24 | 0] | 0) < 0) {
  i2 = 1;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 if ((HEAP32[i3 + 16 >> 2] & 32 | 0) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (__ZN7WebCore4Font22characterRangeCodePathEPKtj(HEAP32[i3 + 8 >> 2] | 0, HEAP32[i3 + 4 >> 2] | 0) | 0) == 1;
 return i2 | 0;
}
function __ZN7WebCore10RenderText16positionForPointERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 if ((HEAP32[i4 + 24 >> 2] & 32 | 0) != 0) {
  __ZN7WebCore15RenderBlockFlow15ensureLineBoxesEv(i4);
 }
 __ZNK7WebCore19RenderTextLineBoxes16positionForPointERKNS_10RenderTextERKNS_11LayoutPointE(i1, i2 + 48 | 0, i2, i3);
 return;
}
function viiiii___ZNK7WebCore12RenderObject19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore12RenderObject19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZNK7WebCore12RenderObject21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiii___ZNK7WebCore12RenderObject22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore12RenderObject22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function viiiii___ZNK7WebCore12RenderObject19offsetFromContainerEPS0_RKNS_11LayoutPointEPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore12RenderObject19offsetFromContainerEPS0_RKNS_11LayoutPointEPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore12RenderObject22outlineStyleForRepaintEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i2 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
  return i2 | 0;
 } else {
  i2 = HEAP32[i1 + 36 >> 2] | 0;
  return i2 | 0;
 }
 return 0;
}
function viii___ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore10RenderText11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return 0;
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
 return +FUNCTION_TABLE_fiiiifii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, +d6, i7 | 0, i8 | 0);
}
function dynCall_fiiifiii(i1, i2, i3, i4, d5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 return +FUNCTION_TABLE_fiiifiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0, i7 | 0, i8 | 0);
}
function viii___ZNK7WebCore12RenderObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore12RenderObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE(i1 | 0, i2 | 0, i3 | 0);
}
function iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore10RenderText16simpleLineLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((HEAP32[i2 + 24 >> 2] & 32 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 112 >> 2] | 0;
 return i3 | 0;
}
function dynCall_iiiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return FUNCTION_TABLE_iiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
}
function __ZN7WebCore12RenderObject17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function __ZN7WebCore10RenderText15ensureLineBoxesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((HEAP32[i2 + 24 >> 2] & 32 | 0) == 0) {
  return;
 }
 __ZN7WebCore15RenderBlockFlow15ensureLineBoxesEv(i2);
 return;
}
function __ZNK7WebCore10RenderText31containsRenderedCharacterOffsetEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore19RenderTextLineBoxes14containsOffsetERKNS_10RenderTextEjNS0_10OffsetTypeE(i1 + 48 | 0, i1, i2, 1) | 0;
}
function __ZNK7WebCore10RenderText15minLogicalWidthEv(i1) {
 i1 = i1 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 32 | 0) != 0) {
  FUNCTION_TABLE_vif[HEAP32[(HEAP32[i1 >> 2] | 0) + 656 >> 2] & 3](i1, +0);
 }
 return +(+HEAPF32[i1 + 28 >> 2]);
}
function __ZNK7WebCore10RenderText15maxLogicalWidthEv(i1) {
 i1 = i1 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 32 | 0) != 0) {
  FUNCTION_TABLE_vif[HEAP32[(HEAP32[i1 >> 2] | 0) + 656 >> 2] & 3](i1, +0);
 }
 return +(+HEAPF32[i1 + 32 >> 2]);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZNK7WebCore10RenderText30linesVisualOverflowBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore19RenderTextLineBoxes25visualOverflowBoundingBoxERKNS_10RenderTextE(i1, i2 + 48 | 0, i2);
 return;
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE(i1 | 0, i2 | 0) | 0;
}
function __ZNK7WebCore10RenderText9firstRunYEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0;
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i2 | 0) == 0) {
  d3 = +0;
  return +d3;
 }
 d3 = +HEAPF32[i2 + 24 >> 2];
 return +d3;
}
function __ZNK7WebCore10RenderText9firstRunXEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0;
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i2 | 0) == 0) {
  d3 = +0;
  return +d3;
 }
 d3 = +HEAPF32[i2 + 20 >> 2];
 return +d3;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZNK7WebCore10RenderText34countRenderedCharacterOffsetsUntilEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore19RenderTextLineBoxes26countCharacterOffsetsUntilEj(i1 + 48 | 0, i2) | 0;
}
function __ZNK7WebCore10RenderText8textNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 128 | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 return i2 | 0;
}
function vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv(i1 | 0, i2 | 0);
}
function __ZN3WTF7CheckedIjNS_15CrashOnOverflowEEC1ENS_19ResultOverflowedTagE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3WTF7CheckedIjNS_15CrashOnOverflowEEC2ENS_19ResultOverflowedTagE(i1, 0);
}
function ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv(i1 | 0) | 0;
}
function __ZN3WTF7CheckedIjNS_15CrashOnOverflowEEC2ENS_19ResultOverflowedTagE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 __ZN3WTF15CrashOnOverflow10overflowedEv();
}
function ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv(i1 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject17strokeBoundingBoxEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject17objectBoundingBoxEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject14localTransformEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore12RenderObject15updateDragStateEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject15updateDragStateEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject22localToParentTransformEv(i1 | 0) | 0;
}
function __ZN7WebCore10RenderText37deleteLineBoxesBeforeSimpleLineLayoutEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19RenderTextLineBoxes9deleteAllEv(i1 + 48 | 0);
 return;
}
function vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv(i1 | 0);
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function b8(i1, i2, i3, d4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(8);
 return +0;
}
function b1(i1, i2, i3, i4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(1);
 return +0;
}
function __ZNK7WebCore12RenderObject7isEmptyEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 255](i1) | 0) == 0 | 0;
}
function __ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject15innerLineHeightEv(i1 | 0) | 0;
}
function vi___ZN7WebCore12RenderObject21willBeRemovedFromTreeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12RenderObject21willBeRemovedFromTreeEv(i1 | 0);
}
function ii___ZNK7WebCore12RenderObject14firstLineBlockEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14firstLineBlockEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function vi___ZN7WebCore12RenderObject16insertedIntoTreeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12RenderObject16insertedIntoTreeEv(i1 | 0);
}
function b7(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(7);
 return 0;
}
function __ZN7WebCore15SecureTextTimerD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore12RenderObject12imageChangedEPKvPKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function dynCall_fii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return +FUNCTION_TABLE_fii[i1 & 1](i2 | 0, i3 | 0);
}
function __ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function b14(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(14);
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
 FUNCTION_TABLE_vii[i1 & 63](i2 | 0, i3 | 0);
}
function __ZNK7WebCore10RenderText6lengthEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 4 >> 2] | 0;
}
function dynCall_vif(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 FUNCTION_TABLE_vif[i1 & 3](i2 | 0, +d3);
}
function b3(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(3);
}
function __ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 255](i2 | 0) | 0;
}
function __ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore15SecureTextTimerD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function __ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function __ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b15(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(15);
}
function __ZNK7WebCore12RenderObject27isSVGTransformableContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore17CachedImageClient18resourceClientTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject23isTextControlInnerBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23createsAnonymousWrapperEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isSVGViewportContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isSVGResourceContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMathMLFractionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject21isRenderScrollbarPartEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10RenderText10renderNameEv(i1) {
 i1 = i1 | 0;
 return H_BASE + 8 | 0;
}
function __ZNK7WebCore12RenderObject20isStretchingChildrenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isSVGHiddenContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isRenderMathMLFencedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12RenderObject23setNeedsTransformUpdateEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore12RenderObject21needsBoundariesUpdateEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19virtualContinuationEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isSnapshottedPlugInEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isSVGResourceFilterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isRenderMathMLBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isFileUploadControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return 0;
}
function __ZNK7WebCore12RenderObject18isSVGForeignObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderMathMLRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderMathMLMathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderFullScreenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderFlowThreadEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject17isSVGGradientStopEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject17isRenderMathMLRowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isRenderTableColEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isRenderSVGBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isEmbeddedObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10RenderText18canBeSelectionLeafEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject15isSVGInlineTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject15isDetailsMarkerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isTableSectionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isTableCaptionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isSVGContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderRegionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderIFrameEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderButtonEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14firstChildSlowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12RenderObject17updateFromElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore12RenderObject13lastChildSlowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isTextControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isSliderThumbEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isSVGTextPathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isRenderImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isFlexibleBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isCombineTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10RenderText15canHaveChildrenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject12isRenderGridEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject12isListMarkerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10RenderText14isTextFragmentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isTextFieldEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isTableCellEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isSVGInlineEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isTextAreaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isTableRowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isSVGShapeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isSVGImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isRubyTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isRubyBaseEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isProgressEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isMenuListEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isListItemEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isFrameSetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isFieldsetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b10(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(10);
}
function __ZNK7WebCore12RenderObject9isSVGTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isSVGRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isSVGPathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isRubyRunEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isReplicaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isListBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isCounterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject8isWidgetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject8isSliderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject8isCanvasEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isVideoEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isQuoteEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isMeterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isMediaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isFrameEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject6isRubyEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject5isWBREv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b12(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(12);
 return +0;
}
function b13(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(13);
 return 0;
}
function b4(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(4);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function b2(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(2);
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
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b5(i1) {
 i1 = i1 | 0;
 abort(5);
}
function b11() {
 abort(11);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiii = [b0,b0,iiii___ZNK7WebCore12RenderObject22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper,b0,iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_fiiiifii = [b1,b1,__ZNK7WebCore10RenderText5widthEjjRKNS_4FontEfPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE,b1];
  var FUNCTION_TABLE_vif = [b2,b2,__ZN7WebCore10RenderText29computePreferredLogicalWidthsEf,b2];
  var FUNCTION_TABLE_viiiii = [b3,b3,viiiii___ZNK7WebCore12RenderObject19offsetFromContainerEPS0_RKNS_11LayoutPointEPb__wrapper,b3,viiiii___ZNK7WebCore12RenderObject19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper,b3,__ZN7WebCore10RenderText14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE,b3];
  var FUNCTION_TABLE_did = [b4,b4,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b4];
  var FUNCTION_TABLE_vi = [b5,b5,vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper,b5,__ZN7WebCore10RenderTextD2Ev,b5,__ZN7WebCore15SecureTextTimer5firedEv,b5,__ZN7WebCore12RenderObject17updateFromElementEv,b5,__ZN7WebCore15SecureTextTimerD1Ev,b5,vi___ZN7WebCore12RenderObject16insertedIntoTreeEv__wrapper,b5,__ZN7WebCore10RenderTextD0Ev,b5,__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv,b5,__ZN7WebCore10RenderText15willBeDestroyedEv,b5,__ZN7WebCore15SecureTextTimerD0Ev,b5,vi___ZN7WebCore12RenderObject21willBeRemovedFromTreeEv__wrapper,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5];
  var FUNCTION_TABLE_vii = [b6,b6,__ZNK7WebCore10RenderText16linesBoundingBoxEv,b6,vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper,b6,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b6,__ZN7WebCore10RenderText17setSelectionStateENS_12RenderObject14SelectionStateE,b6,vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper,b6,__ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv,b6,vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper,b6,__ZN7WebCore10RenderText13createTextBoxEv,b6,vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper,b6,vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper,b6,vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper,b6,__ZNK7WebCore10RenderText12originalTextEv,b6,__ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv,b6,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE
  ,b6,__ZN7WebCore10RenderText15setTextInternalERKN3WTF6StringE,b6,vii___ZN7WebCore12RenderObject15updateDragStateEb__wrapper,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6];
  var FUNCTION_TABLE_iiiiiii = [b7,b7,__ZN7WebCore10RenderText11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE,b7];
  var FUNCTION_TABLE_fiiifiii = [b8,b8,__ZNK7WebCore10RenderText5widthEjjfbPN3WTF7HashSetIPKNS_14SimpleFontDataENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEEPNS_13GlyphOverflowE,b8];
  var FUNCTION_TABLE_ii = [b9,b9,__ZNK7WebCore12RenderObject19isSVGResourceFilterEv,b9,__ZNK7WebCore12RenderObject13isSVGTextPathEv,b9,__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv,b9,__ZNK7WebCore12RenderObject10isRubyTextEv,b9,__ZNK7WebCore12RenderObject6isRubyEv,b9,__ZNK7WebCore12RenderObject7isImageEv,b9,__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv,b9,__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv,b9,ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper,b9,__ZNK7WebCore12RenderObject8isWidgetEv,b9,__ZNK7WebCore12RenderObject11isTextFieldEv,b9,__ZNK7WebCore12RenderObject18isRenderFullScreenEv,b9,ii___ZNK7WebCore12RenderObject14firstLineBlockEv__wrapper,b9,__ZNK7WebCore12RenderObject9isSVGRootEv
  ,b9,__ZNK7WebCore12RenderObject16isEmbeddedObjectEv,b9,__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv,b9,__ZNK7WebCore12RenderObject15isSVGInlineTextEv,b9,__ZNK7WebCore12RenderObject7isMeterEv,b9,__ZNK7WebCore10RenderText10renderNameEv,b9,__ZNK7WebCore12RenderObject22isSVGResourceContainerEv,b9,__ZNK7WebCore10RenderText18canBeSelectionLeafEv,b9,__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv,b9,__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv,b9,__ZNK7WebCore12RenderObject7isQuoteEv,b9,__ZNK7WebCore12RenderObject10isListItemEv,b9,__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv,b9,__ZNK7WebCore12RenderObject10isSVGImageEv,b9,__ZNK7WebCore12RenderObject20isStretchingChildrenEv,b9,__ZNK7WebCore12RenderObject15isDetailsMarkerEv
  ,b9,__ZNK7WebCore12RenderObject13lastChildSlowEv,b9,__ZNK7WebCore12RenderObject16isRenderTableColEv,b9,__ZNK7WebCore12RenderObject7isVideoEv,b9,__ZNK7WebCore12RenderObject10isProgressEv,b9,__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv,b9,__ZNK7WebCore12RenderObject13isCombineTextEv,b9,__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv,b9,__ZNK7WebCore12RenderObject5isWBREv,b9,__ZNK7WebCore12RenderObject22isSVGViewportContainerEv,b9,__ZNK7WebCore10RenderText15canHaveChildrenEv,b9,__ZNK7WebCore12RenderObject7isFrameEv,b9,__ZNK7WebCore12RenderObject17isRenderMathMLRowEv,b9,__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv,b9,__ZNK7WebCore12RenderObject16isRenderSVGBlockEv,b9,__ZNK7WebCore12RenderObject9isReplicaEv
  ,b9,__ZNK7WebCore12RenderObject19isFileUploadControlEv,b9,__ZNK7WebCore10RenderText17previousCharacterEv,b9,__ZNK7WebCore12RenderObject7isMediaEv,b9,__ZNK7WebCore12RenderObject10isSVGShapeEv,b9,__ZNK7WebCore12RenderObject14isRenderButtonEv,b9,__ZNK7WebCore12RenderObject8isSliderEv,b9,__ZNK7WebCore12RenderObject10isRubyBaseEv,b9,__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv,b9,__ZNK7WebCore12RenderObject8isCanvasEv,b9,__ZNK7WebCore12RenderObject18isSVGForeignObjectEv,b9,__ZNK7WebCore12RenderObject10isMenuListEv,b9,__ZNK7WebCore12RenderObject18isRenderMathMLMathEv,b9,__ZNK7WebCore12RenderObject14isTableCaptionEv,b9,__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv,b9,__ZNK7WebCore12RenderObject13isSliderThumbEv
  ,b9,__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv,b9,__ZNK7WebCore12RenderObject13isTextControlEv,b9,ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper,b9,__ZNK7WebCore12RenderObject9isSVGTextEv,b9,__ZNK7WebCore12RenderObject10isTextAreaEv,b9,__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv,b9,__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv,b9,__ZNK7WebCore12RenderObject11isTableCellEv,b9,__ZNK7WebCore12RenderObject14firstChildSlowEv,b9,__ZNK7WebCore12RenderObject12isRenderGridEv,b9,__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv,b9,__ZNK7WebCore12RenderObject9isListBoxEv,b9,__ZNK7WebCore12RenderObject9isSVGPathEv,b9,__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv,b9,__ZNK7WebCore12RenderObject13isRenderImageEv
  ,b9,__ZNK7WebCore12RenderObject18isRenderMathMLRootEv,b9,__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv,b9,__ZNK7WebCore10RenderText14caretMinOffsetEv,b9,__ZNK7WebCore12RenderObject14isRenderIFrameEv,b9,__ZNK7WebCore12RenderObject10isTableRowEv,b9,__ZNK7WebCore12RenderObject13isFlexibleBoxEv,b9,__ZNK7WebCore12RenderObject10isFrameSetEv,b9,__ZNK7WebCore10RenderText6lengthEv,b9,__ZNK7WebCore12RenderObject10isFieldsetEv,b9,__ZNK7WebCore12RenderObject11isSVGInlineEv,b9,__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv,b9,__ZNK7WebCore10RenderText14caretMaxOffsetEv,b9,__ZNK7WebCore12RenderObject18isRenderFlowThreadEv,b9,ii___ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv__wrapper,b9,__ZNK7WebCore10RenderText14isTextFragmentEv
  ,b9,__ZNK7WebCore12RenderObject9isRubyRunEv,b9,__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv,b9,__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv,b9,__ZNK7WebCore12RenderObject14isRenderRegionEv,b9,__ZNK7WebCore12RenderObject17isSVGGradientStopEv,b9,__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv,b9,__ZNK7WebCore17CachedImageClient18resourceClientTypeEv,b9,__ZN7WebCore12RenderObject21needsBoundariesUpdateEv,b9,__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv,b9,__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv,b9,__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv,b9,__ZNK7WebCore12RenderObject9isCounterEv,b9,ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper,b9,__ZNK7WebCore12RenderObject14isSVGContainerEv,b9,__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv
  ,b9,ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper,b9,__ZNK7WebCore12RenderObject19virtualContinuationEv,b9,__ZNK7WebCore12RenderObject12isListMarkerEv,b9,__ZNK7WebCore12RenderObject7isEmptyEv,b9,__ZNK7WebCore12RenderObject7isTableEv,b9,__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv,b9,__ZNK7WebCore12RenderObject14isTableSectionEv,b9,__ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9
  ,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9];
  var FUNCTION_TABLE_viii = [b10,b10,__ZN7WebCore12RenderObject12imageChangedEPKvPKNS_7IntRectE,b10,__ZN7WebCore10RenderText7setTextERKN3WTF6StringEb,b10,__ZNK7WebCore10RenderText29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE,b10,__ZNK7WebCore10RenderText13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE,b10,viii___ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper,b10,viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper,b10,__ZN7WebCore10RenderText16positionForPointERKNS_11LayoutPointE,b10,viii___ZNK7WebCore12RenderObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper,b10,__ZNK7WebCore10RenderText13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb,b10,__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE,b10,__ZN7WebCore10RenderTextC2ERNS_8DocumentERKN3WTF6StringE,b10,__ZN7WebCore10RenderTextC2ERNS_4TextERKN3WTF6StringE,b10,__ZN7WebCore10RenderText14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE,b10,b10
  ,b10,b10,b10];
  var FUNCTION_TABLE_v = [b11,b11];
  var FUNCTION_TABLE_fii = [b12,b12];
  var FUNCTION_TABLE_iii = [b13,b13,iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper,b13,__ZNK7WebCore10RenderText33previousOffsetForBackwardDeletionEi,b13,__ZNK7WebCore10RenderText10nextOffsetEi,b13,__ZNK7WebCore10RenderText14previousOffsetEi,b13,b13,b13,b13,b13,b13,b13];
  var FUNCTION_TABLE_iiiiii = [b14,b14,iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper,b14];
  var FUNCTION_TABLE_viiii = [b15,b15,viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper,b15,__ZN7WebCore12RenderObject17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE,b15,__ZN7WebCore10RenderText23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb,b15,__ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE,b15,viiii___ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper,b15,viiii___ZNK7WebCore12RenderObject21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper,b15,b15,b15];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_fiiiifii: dynCall_fiiiifii, dynCall_vif: dynCall_vif, dynCall_viiiii: dynCall_viiiii, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_fiiifiii: dynCall_fiiifiii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_fii: dynCall_fii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_fiiiifii": invoke_fiiiifii, "invoke_vif": invoke_vif, "invoke_viiiii": invoke_viiiii, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_fiiifiii": invoke_fiiifiii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_fii": invoke_fii, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "_llvm_trap": _llvm_trap, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fmod": _fmod, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore19asciiLineBreakTableE": __ZN7WebCore19asciiLineBreakTableE, "__ZTVN7WebCore13InlineTextBoxE": __ZTVN7WebCore13InlineTextBoxE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_fiiiifii = Module["dynCall_fiiiifii"] = asm["dynCall_fiiiifii"];
var dynCall_vif = Module["dynCall_vif"] = asm["dynCall_vif"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_fiiifiii = Module["dynCall_fiiifiii"] = asm["dynCall_fiiifiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_fii = Module["dynCall_fii"] = asm["dynCall_fii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore10RenderText16linesBoundingBoxEv","__ZNK7WebCore12RenderObject19isSVGResourceFilterEv","__ZNK7WebCore12RenderObject13isSVGTextPathEv","__ZNK7WebCore10RenderText34countRenderedCharacterOffsetsUntilEj","__ZNK7WebCore12RenderObject10isRubyTextEv","__ZNK7WebCore12RenderObject6isRubyEv","_strlen","__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv","__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv","__ZN7WebCore10RenderText10secureTextEt","__ZN3WTF9HashTableIPN7WebCore10RenderTextENS_12KeyValuePairIS3_PNS1_15SecureTextTimerEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES3_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S7_S9_SB_SH_SE_EEEEOT0_OT1_","__ZN7WebCore10RenderTextD2Ev","__ZN7WebCore10RenderText29computePreferredLogicalWidthsEfRN3WTF7HashSetIPKNS_14SimpleFontDataENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEERNS_13GlyphOverflowE","__ZNK7WebCore10RenderText21absoluteRectsForRangeEjjbPb","__ZNK7WebCore10RenderText15maxLogicalWidthEv","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZNK7WebCore12RenderObject8isWidgetEv","__ZNK7WebCore10RenderText8textNodeEv","__ZN7WebCore15SecureTextTimer5firedEv","__ZNK7WebCore10RenderText41textWithoutConvertingBackslashToYenSymbolEv","__ZNK7WebCore12RenderObject18isRenderFullScreenEv","__ZN7WebCore12RenderObject17updateFromElementEv","__ZNK7WebCore10RenderText30linesVisualOverflowBoundingBoxEv","__ZNK7WebCore10RenderText12originalTextEv","__ZN7WebCore10RenderText17setSelectionStateENS_12RenderObject14SelectionStateE","__ZNK7WebCore12RenderObject9isSVGRootEv","__ZNK7WebCore10RenderText19containsCaretOffsetEj","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv","__ZNK7WebCore12RenderObject15isSVGInlineTextEv","__ZNK7WebCore12RenderObject7isMeterEv","__ZNK7WebCore12RenderObject13isSliderThumbEv","__ZN7WebCore10RenderText17trimmedPrefWidthsEfRfRbS1_S2_S2_S2_S1_S1_S1_S1_S2_","__ZNK7WebCore12RenderObject22isSVGResourceContainerEv","__ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE","__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv","__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv","__ZNK7WebCore12RenderObject7isQuoteEv","__ZNK7WebCore10RenderText15minLogicalWidthEv","__ZNK7WebCore12RenderObject10isListItemEv","__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv","__ZNK7WebCore12RenderObject10isSVGImageEv","__ZNK7WebCore10RenderText26isAllCollapsibleWhitespaceEv","__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv","__ZNK7WebCore12RenderObject15isDetailsMarkerEv","__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv","__ZNK7WebCore10RenderText29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE","__ZNK7WebCore10RenderText13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE","__ZN7WebCore15SecureTextTimerD1Ev","__ZNK7WebCore12RenderObject13lastChildSlowEv","__ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv","__ZNK7WebCore12RenderObject16isRenderTableColEv","__ZN7WebCore10RenderText14dirtyLineBoxesEb","__ZNK7WebCore12RenderObject10isProgressEv","__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv","__ZNK7WebCore12RenderObject13isCombineTextEv","__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv","__ZN7WebCore21nextBreakablePositionItLb0EEEiRNS_21LazyLineBreakIteratorEPKT_ji","__ZNK7WebCore12RenderObject5isWBREv","__ZNK7WebCore12RenderObject22isSVGViewportContainerEv","__ZNK7WebCore10RenderText15canHaveChildrenEv","__ZNK7WebCore12RenderObject20isStretchingChildrenEv","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN7WebCore21LazyLineBreakIterator3getEj","__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv","__ZNK7WebCore12RenderObject7isFrameEv","__ZNK7WebCore10RenderText18canBeSelectionLeafEv","__ZNK7WebCore12RenderObject17isRenderMathMLRowEv","__ZNK7WebCore12RenderObject9isReplicaEv","__ZNK7WebCore10RenderText9firstRunXEv","__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv","__ZNK7WebCore12RenderObject16isRenderSVGBlockEv","__ZNK7WebCore10RenderText31computeCanUseSimpleFontCodePathEv","__ZNK7WebCore10RenderText21absoluteQuadsForRangeEjjbPb","__ZNK7WebCore10RenderText14firstRunOriginEv","__ZNK7WebCore12RenderObject19isFileUploadControlEv","__ZNK7WebCore10RenderText5widthEjjfbPN3WTF7HashSetIPKNS_14SimpleFontDataENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEEPNS_13GlyphOverflowE","__ZN7WebCore10RenderText7setTextERKN3WTF6StringEb","__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv","__ZN7WebCore10RenderText16positionForPointERKNS_11LayoutPointE","__ZN7WebCore21nextBreakablePositionIhLb1EEEiRNS_21LazyLineBreakIteratorEPKT_ji","__ZNK7WebCore10RenderText17previousCharacterEv","__ZNK7WebCore12RenderObject7isMediaEv","__ZNK7WebCore12RenderObject10isSVGShapeEv","__ZNK7WebCore12RenderObject14isRenderButtonEv","__ZN7WebCore10RenderText13createTextBoxEv","__ZN3WTF7CheckedIjNS_15CrashOnOverflowEEC1ENS_19ResultOverflowedTagE","__ZNK7WebCore12RenderObject8isSliderEv","__ZNK7WebCore12RenderObject11isTextFieldEv","__ZN7WebCore10RenderText15ensureLineBoxesEv","__ZNK7WebCore12RenderObject10isRubyBaseEv","__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv","__ZNK7WebCore12RenderObject8isCanvasEv","__ZNK7WebCore12RenderObject18isSVGForeignObjectEv","__ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore21nextBreakablePositionItLb1EEEiRNS_21LazyLineBreakIteratorEPKT_ji","__ZNK7WebCore12RenderObject18isRenderMathMLMathEv","__ZNK7WebCore12RenderObject14isTableCaptionEv","__ZNK7WebCore12RenderObject10isMenuListEv","__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv","__ZNK7WebCore12RenderObject16isEmbeddedObjectEv","__ZNK7WebCore10RenderText10renderNameEv","__ZN3WTF9HashTableIPN7WebCore10RenderTextENS_12KeyValuePairIS3_PNS1_15SecureTextTimerEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_","_memset","__ZNK7WebCore12RenderObject7isVideoEv","__ZNK7WebCore12RenderObject13isTextControlEv","__ZNK7WebCore12RenderObject9isSVGTextEv","__ZNK7WebCore12RenderObject10isTextAreaEv","__ZN7WebCore10RenderTextD0Ev","__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv","__ZNK7WebCore10RenderText33previousOffsetForBackwardDeletionEi","__ZNK3WTF6String17containsOnlyASCIIEv","__ZN7WebCore10RenderText37deleteLineBoxesBeforeSimpleLineLayoutEv","__ZN7WebCore21nextBreakablePositionIhLb0EEEiRNS_21LazyLineBreakIteratorEPKT_ji","__ZN7WebCore10RenderText23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb","__ZN3WTF9HashTableIPKN7WebCore10RenderTextENS_12KeyValuePairIS4_NS_6StringEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_","__ZNK7WebCore10RenderText10nextOffsetEi","__ZN3WTF9HashTableIPKN7WebCore10RenderTextENS_12KeyValuePairIS4_NS_6StringEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES4_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S7_S9_SB_SH_SE_EEEEOT0_OT1_","__ZN7WebCore10RenderText14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE","__ZNK7WebCore12RenderObject11isTableCellEv","__ZNK7WebCore12RenderObject14firstChildSlowEv","__ZNK7WebCore12RenderObject12isRenderGridEv","__ZN7WebCore21LazyLineBreakIterator29resetStringAndReleaseIteratorEN3WTF6StringERKNS1_12AtomicStringE","__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv","__ZN7WebCore10RenderText17setTextWithOffsetERKN3WTF6StringEjjb","__ZNK7WebCore12RenderObject9isListBoxEv","__ZN7WebCore18applyTextTransformERKNS_11RenderStyleERN3WTF6StringEt","__ZN7WebCore12RenderObject17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE","__ZNK7WebCore12RenderObject9isSVGPathEv","__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv","__ZN7WebCore10RenderText35momentarilyRevealLastTypedCharacterEj","__ZNK7WebCore10RenderText31containsRenderedCharacterOffsetEj","__ZNK7WebCore10RenderText14previousOffsetEi","__ZN7WebCore10RenderText29computePreferredLogicalWidthsEf","__ZNK7WebCore10RenderText13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb","__ZN7WebCore12RenderObject12imageChangedEPKvPKNS_7IntRectE","__ZNK7WebCore12RenderObject13isRenderImageEv","__ZNK7WebCore12RenderObject18isRenderMathMLRootEv","__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv","__ZNK7WebCore10RenderText14caretMinOffsetEv","__ZN3WTF7CheckedIjNS_15CrashOnOverflowEEC2ENS_19ResultOverflowedTagE","__ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv","__ZNK7WebCore12RenderObject10isTableRowEv","__ZNK7WebCore12RenderObject13isFlexibleBoxEv","__ZNK7WebCore10RenderText15hasRenderedTextEv","__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE","__ZN3WTF7HashMapIPKN7WebCore10RenderTextENS_6StringENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_","__ZNK7WebCore12RenderObject10isFrameSetEv","__ZNK7WebCore10RenderText6lengthEv","__ZNK7WebCore10RenderText22containsOnlyWhitespaceEjj","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZNK7WebCore12RenderObject10isFieldsetEv","__ZNK7WebCore12RenderObject11isSVGInlineEv","__ZNK3WTF7HashMapIPKN7WebCore10RenderTextENS_6StringENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE3getERKS4_","__ZNK7WebCore10RenderText14caretMaxOffsetEv","__ZN7WebCore10RenderText25removeAndDestroyTextBoxesEv","__ZN7WebCore10RenderText15setTextInternalERKN3WTF6StringE","__ZNK7WebCore12RenderObject18isRenderFlowThreadEv","__ZNK7WebCore10RenderText30computeUseBackslashAsYenSymbolEv","__ZNK7WebCore10RenderText14isTextFragmentEv","__ZN3WTF7HashMapIPN7WebCore10RenderTextEPNS1_15SecureTextTimerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS8_IS5_EEE4takeERKS3_","__ZNK7WebCore12RenderObject9isRubyRunEv","__ZN7WebCore10RenderTextC2ERNS_8DocumentERKN3WTF6StringE","__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv","__ZNK7WebCore12RenderObject14isRenderIFrameEv","__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv","__ZNK7WebCore12RenderObject14isRenderRegionEv","__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv","__ZN7WebCore10RenderTextC2ERNS_4TextERKN3WTF6StringE","__ZNK7WebCore10RenderText30absoluteQuadsClippedToEllipsisEv","__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv","__ZNK7WebCore17CachedImageClient18resourceClientTypeEv","__ZN7WebCore12RenderObject21needsBoundariesUpdateEv","__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv","__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv","__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv","__ZN7WebCore10RenderText11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE","__ZN7WebCore10RenderText15positionLineBoxERNS_13InlineTextBoxE","__ZNK7WebCore12RenderObject7isImageEv","__ZNK7WebCore10RenderText5widthEjjRKNS_4FontEfPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE","__ZNK7WebCore12RenderObject9isCounterEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore10RenderText15willBeDestroyedEv","__ZN7WebCore15SecureTextTimerD0Ev","__ZNK7WebCore12RenderObject17isSVGGradientStopEv","__ZN7WebCore10RenderText14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE","__ZNK7WebCore10RenderText16simpleLineLayoutEv","__ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore12RenderObject14isSVGContainerEv","__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv","__ZNK7WebCore12RenderObject19virtualContinuationEv","__ZNK7WebCore12RenderObject12isListMarkerEv","__ZNK7WebCore12RenderObject7isEmptyEv","__ZNK7WebCore12RenderObject7isTableEv","__ZNK7WebCore10RenderText9firstRunYEv","_memcpy","__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv","__ZNK7WebCore12RenderObject14isTableSectionEv","__ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv"]

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
H_BASE = parentModule["_malloc"](1000 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1000;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore12RenderInlineC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE;
var __ZN7WebCore12RenderInlineC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE;
/* memory initializer */ allocate([82,101,110,100,101,114,73,110,108,105,110,101,0,0,0,0,82,101,110,100,101,114,73,110,108,105,110,101,32,40,114,117,110,45,105,110,41,0,0,0,82,101,110,100,101,114,73,110,108,105,110,101,32,40,103,101,110,101,114,97,116,101,100,41,0,0,0,0,0,0,0,0,82,101,110,100,101,114,73,110,108,105,110,101,32,40,115,116,105,99,107,121,32,112,111,115,105,116,105,111,110,101,100,41,0,0,0,0,0,0,0,0,82,101,110,100,101,114,73,110,108,105,110,101,32,40,114,101,108,97,116,105,118,101,32,112,111,115,105,116,105,111,110,101,100,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    return Module["dynCall_iiiiiii"](index,a1,a2,a3,a4,a5,a6);
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
  var __ZTVN7WebCore13InlineFlowBoxE=env.__ZTVN7WebCore13InlineFlowBoxE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore12RenderInlineE=(H_BASE+160)|0;
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
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var _floorf=env._floorf;
  var ___setErrNo=env.___setErrNo;
  var _malloc=env._malloc;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore12RenderInline26generateCulledLineBoxRectsINS_12_GLOBAL__N_136HitTestCulledInlinesGeneratorContextEEEvRT_PKS0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, i123 = 0, i124 = 0, i125 = 0, i126 = 0, i127 = 0, i128 = 0, i129 = 0, i130 = 0, i131 = 0, i132 = 0, i133 = 0, i134 = 0, i135 = 0, i136 = 0, i137 = 0, i138 = 0, i139 = 0, i140 = 0, i141 = 0, i142 = 0, i143 = 0, i144 = 0, i145 = 0, i146 = 0, i147 = 0, i148 = 0, i149 = 0, i150 = 0, i151 = 0, i152 = 0, i153 = 0, i154 = 0, i155 = 0, i156 = 0, i157 = 0, i158 = 0, i159 = 0, i160 = 0, i161 = 0, i162 = 0, i163 = 0, i164 = 0, d165 = +0, i166 = 0, i167 = 0, i168 = 0, i169 = 0, i170 = 0, i171 = 0, d172 = +0, d173 = +0, i174 = 0, i175 = 0, i176 = 0, i177 = 0, i178 = 0, i179 = 0, i180 = 0, i181 = 0, i182 = 0, i183 = 0, d184 = +0, i185 = 0, i186 = 0, i187 = 0, i188 = 0, i189 = 0, i190 = 0, i191 = 0, i192 = 0, i193 = 0, i194 = 0, i195 = 0, i196 = 0, i197 = 0, i198 = 0, d199 = +0, d200 = +0, i201 = 0, d202 = +0, i203 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 3048 | 0;
 i5 = i4 | 0;
 i6 = i4 + 296 | 0;
 i7 = i4 + 312 | 0;
 i8 = i4 + 608 | 0;
 i9 = i4 + 624 | 0;
 i10 = i4 + 920 | 0;
 i11 = i4 + 936 | 0;
 i12 = i4 + 1232 | 0;
 i13 = i4 + 1248 | 0;
 i14 = i4 + 1544 | 0;
 i15 = i4 + 1560 | 0;
 i16 = i4 + 1568 | 0;
 i17 = i4 + 1576 | 0;
 i18 = i4 + 1872 | 0;
 i19 = i4 + 1888 | 0;
 i20 = i4 + 2184 | 0;
 i21 = i4 + 2200 | 0;
 i22 = i4 + 2208 | 0;
 i23 = i4 + 2216 | 0;
 i24 = i4 + 2512 | 0;
 i25 = i4 + 2528 | 0;
 i26 = i4 + 2824 | 0;
 i27 = i4 + 2840 | 0;
 i28 = i4 + 2856 | 0;
 i29 = i4 + 2872 | 0;
 i30 = i4 + 2880 | 0;
 i31 = i4 + 2896 | 0;
 i32 = i4 + 2904 | 0;
 i33 = i4 + 2920 | 0;
 i34 = i4 + 2928 | 0;
 i35 = i4 + 2936 | 0;
 i36 = i4 + 2944 | 0;
 i37 = i4 + 2960 | 0;
 i38 = i4 + 2968 | 0;
 i39 = i4 + 2976 | 0;
 i40 = i4 + 2984 | 0;
 i41 = i4 + 3e3 | 0;
 i42 = i4 + 3016 | 0;
 i43 = i4 + 3032 | 0;
 if ((__ZNK7WebCore12RenderInline24culledInlineFirstLineBoxEv(i1) | 0) == 0) {
  _memset(i27 | 0, 0, 16) | 0;
  i44 = i2 | 0;
  if ((HEAP8[i44] & 1) == 0) {
   i45 = (__ZNK7WebCore15HitTestLocation10intersectsERKNS_9FloatRectE(HEAP32[i2 + 8 >> 2] | 0, i27) | 0) & 1;
  } else {
   i45 = 1;
  }
  HEAP8[i44] = i45;
  i45 = HEAP32[i2 + 4 >> 2] | 0;
  __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i26, i27);
  __ZN7WebCore6RegionC1ERKNS_7IntRectE(i25, i26);
  __ZN7WebCore6Region5uniteERKS0_(i45, i25);
  i45 = i25 + 164 | 0;
  if ((HEAP32[i45 >> 2] | 0) != 0) {
   HEAP32[i45 >> 2] = 0;
  }
  i45 = i25 + 156 | 0;
  i26 = HEAP32[i45 >> 2] | 0;
  if (!((i25 + 168 | 0) == (i26 | 0) | (i26 | 0) == 0)) {
   HEAP32[i45 >> 2] = 0;
   HEAP32[i25 + 160 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i26);
  }
  i26 = i25 + 24 | 0;
  if ((HEAP32[i26 >> 2] | 0) != 0) {
   HEAP32[i26 >> 2] = 0;
  }
  i26 = i25 + 16 | 0;
  i45 = HEAP32[i26 >> 2] | 0;
  if ((i25 + 28 | 0) == (i45 | 0) | (i45 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  HEAP32[i26 >> 2] = 0;
  HEAP32[i25 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i45);
  STACKTOP = i4;
  return;
 }
 i45 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i25 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i25 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i3 | 0;
 i26 = i3 + 36 | 0;
 i27 = i41 | 0;
 i44 = i41 + 4 | 0;
 i46 = i41 + 8 | 0;
 i47 = i41 + 12 | 0;
 i48 = i2 | 0;
 i49 = i2 + 8 | 0;
 i50 = i2 + 4 | 0;
 i51 = i5 + 164 | 0;
 i52 = i5 + 156 | 0;
 i53 = i5 + 168 | 0;
 i54 = i5 + 24 | 0;
 i55 = i5 + 16 | 0;
 i56 = i5 + 28 | 0;
 i57 = i5 + 20 | 0;
 i58 = i5 + 160 | 0;
 i59 = i40 | 0;
 i60 = i40 + 4 | 0;
 i61 = i40 + 8 | 0;
 i62 = i40 + 12 | 0;
 i63 = i7 + 164 | 0;
 i64 = i7 + 156 | 0;
 i65 = i7 + 168 | 0;
 i66 = i7 + 24 | 0;
 i67 = i7 + 16 | 0;
 i68 = i7 + 28 | 0;
 i69 = i7 + 20 | 0;
 i70 = i7 + 160 | 0;
 i71 = i3 + 4 | 0;
 i72 = i43 | 0;
 i73 = i43 + 4 | 0;
 i74 = i43 + 8 | 0;
 i75 = i43 + 12 | 0;
 i76 = i23 + 164 | 0;
 i77 = i23 + 156 | 0;
 i78 = i23 + 168 | 0;
 i79 = i23 + 24 | 0;
 i80 = i23 + 16 | 0;
 i81 = i23 + 28 | 0;
 i82 = i23 + 20 | 0;
 i83 = i23 + 160 | 0;
 i84 = i42 | 0;
 i85 = i42 + 4 | 0;
 i86 = i42 + 8 | 0;
 i87 = i42 + 12 | 0;
 i88 = i19 + 164 | 0;
 i89 = i19 + 156 | 0;
 i90 = i19 + 168 | 0;
 i91 = i19 + 24 | 0;
 i92 = i19 + 16 | 0;
 i93 = i19 + 28 | 0;
 i94 = i19 + 20 | 0;
 i95 = i19 + 160 | 0;
 i96 = i37 | 0;
 i97 = i38 | 0;
 i98 = i39 | 0;
 i99 = i36 | 0;
 i100 = i36 + 4 | 0;
 i101 = i36 + 8 | 0;
 i102 = i36 + 12 | 0;
 i103 = i9 + 164 | 0;
 i104 = i9 + 156 | 0;
 i105 = i9 + 168 | 0;
 i106 = i9 + 24 | 0;
 i107 = i9 + 16 | 0;
 i108 = i9 + 28 | 0;
 i109 = i9 + 20 | 0;
 i110 = i9 + 160 | 0;
 i111 = i33 | 0;
 i112 = i34 | 0;
 i113 = i35 | 0;
 i114 = i32 | 0;
 i115 = i32 + 4 | 0;
 i116 = i32 + 8 | 0;
 i117 = i32 + 12 | 0;
 i118 = i11 + 164 | 0;
 i119 = i11 + 156 | 0;
 i120 = i11 + 168 | 0;
 i121 = i11 + 24 | 0;
 i122 = i11 + 16 | 0;
 i123 = i11 + 28 | 0;
 i124 = i11 + 20 | 0;
 i125 = i11 + 160 | 0;
 i126 = i31 | 0;
 i127 = i15 | 0;
 i128 = i16 | 0;
 i129 = i30 | 0;
 i130 = i30 + 4 | 0;
 i131 = i30 + 8 | 0;
 i132 = i30 + 12 | 0;
 i133 = i13 + 164 | 0;
 i134 = i13 + 156 | 0;
 i135 = i13 + 168 | 0;
 i136 = i13 + 24 | 0;
 i137 = i13 + 16 | 0;
 i138 = i13 + 28 | 0;
 i139 = i13 + 20 | 0;
 i140 = i13 + 160 | 0;
 i141 = i29 | 0;
 i142 = i21 | 0;
 i143 = i22 | 0;
 i144 = i28 | 0;
 i145 = i28 + 4 | 0;
 i146 = i28 + 8 | 0;
 i147 = i28 + 12 | 0;
 i148 = i17 + 164 | 0;
 i149 = i17 + 156 | 0;
 i150 = i17 + 168 | 0;
 i151 = i17 + 24 | 0;
 i152 = i17 + 16 | 0;
 i153 = i17 + 28 | 0;
 i154 = i17 + 20 | 0;
 i155 = i17 + 160 | 0;
 i156 = i25;
 while (1) {
  i25 = HEAP32[i156 + 20 >> 2] | 0;
  L25 : do {
   if (!((i25 & 64 | 0) != 0 | (i25 & 25165824 | 0) == 16777216)) {
    if ((i25 & 512 | 0) != 0) {
     i157 = i156;
     i158 = i156 + 84 | 0;
     i159 = HEAP32[i158 >> 2] | 0;
     if ((i159 | 0) == 0) {
      break;
     }
     i160 = __ZN7WebCore9InlineBox4rootEv(i159) | 0;
     i159 = i160 + 32 | 0;
     i161 = HEAP32[i159 >> 2] | 0;
     do {
      if ((i161 & 1 | 0) == 0) {
       i162 = HEAP32[i26 >> 2] | 0;
       i163 = i161;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i71 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i162 = HEAP32[i26 >> 2] | 0;
        i163 = i161;
        break;
       } else {
        i164 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i1) | 0;
        i162 = i164;
        i163 = HEAP32[i159 >> 2] | 0;
        break;
       }
      }
     } while (0);
     d165 = +HEAPF32[((i163 & 2048 | 0) == 0 ? i160 + 20 | 0 : i160 + 24 | 0) >> 2];
     i159 = HEAP32[i160 + 16 >> 2] | 0;
     i161 = i159;
     do {
      if ((i163 & 1 | 0) == 0) {
       i166 = HEAP32[i159 + 36 >> 2] | 0;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i159 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i166 = HEAP32[i159 + 36 >> 2] | 0;
        break;
       } else {
        i166 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i161) | 0;
        break;
       }
      }
     } while (0);
     i161 = __ZNK7WebCore11RenderStyle4fontEv(i166) | 0;
     i159 = HEAP32[i161 + 24 >> 2] | 0;
     i160 = i159 + 44 | 0;
     i164 = HEAP32[i160 >> 2] | 0;
     if ((i164 | 0) == 0) {
      i167 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i159, i161 | 0, 0) | 0;
      i161 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i167 >> 2] | 0) + 8 >> 2] & 15](i167, 32) | 0;
      HEAP32[i160 >> 2] = i161;
      i168 = i161;
     } else {
      i168 = i164;
     }
     i164 = _round(+(+HEAPF32[i168 + 16 >> 2])) | 0;
     i161 = __ZNK7WebCore11RenderStyle4fontEv(i162) | 0;
     i160 = HEAP32[i161 + 24 >> 2] | 0;
     i167 = i160 + 44 | 0;
     i159 = HEAP32[i167 >> 2] | 0;
     if ((i159 | 0) == 0) {
      i169 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i160, i161 | 0, 0) | 0;
      i161 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i169 >> 2] | 0) + 8 >> 2] & 15](i169, 32) | 0;
      HEAP32[i167 >> 2] = i161;
      i170 = i161;
     } else {
      i170 = i159;
     }
     i159 = ~~(d165 + +(i164 - (_round(+(+HEAPF32[i170 + 16 >> 2])) | 0) | 0));
     i164 = __ZNK7WebCore11RenderStyle4fontEv(i162) | 0;
     i161 = HEAP32[i164 + 24 >> 2] | 0;
     i167 = i161 + 44 | 0;
     i169 = HEAP32[i167 >> 2] | 0;
     if ((i169 | 0) == 0) {
      i160 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i161, i164 | 0, 0) | 0;
      i164 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i160 >> 2] | 0) + 8 >> 2] & 15](i160, 32) | 0;
      HEAP32[i167 >> 2] = i164;
      i171 = i164;
     } else {
      i171 = i169;
     }
     i169 = _round(+(+HEAPF32[i171 + 16 >> 2])) | 0;
     i164 = (_round(+(+HEAPF32[i171 + 20 >> 2])) | 0) + i169 | 0;
     if ((i45 | 0) == 3 | (i45 | 0) == 0) {
      d172 = +HEAPF32[(HEAP32[i158 >> 2] | 0) + 20 >> 2];
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i156 >> 2] | 0) + 776 >> 2] & 127](i29, i157);
      d173 = d172 - +(HEAP32[i141 >> 2] | 0);
      i169 = HEAP32[i156 + 52 >> 2] | 0;
      i167 = i156;
      i160 = i156;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i160 >> 2] | 0) + 776 >> 2] & 127](i21, i167);
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i160 >> 2] | 0) + 780 >> 2] & 127](i22, i167);
      d172 = +((HEAP32[i142 >> 2] | 0) + i169 + (HEAP32[i143 >> 2] | 0) | 0);
      HEAPF32[i144 >> 2] = d173;
      HEAPF32[i145 >> 2] = +(i159 | 0);
      HEAPF32[i146 >> 2] = d172;
      HEAPF32[i147 >> 2] = +(i164 | 0);
      if ((HEAP8[i48] & 1) == 0) {
       i174 = (__ZNK7WebCore15HitTestLocation10intersectsERKNS_9FloatRectE(HEAP32[i49 >> 2] | 0, i28) | 0) & 1;
      } else {
       i174 = 1;
      }
      HEAP8[i48] = i174;
      i169 = HEAP32[i50 >> 2] | 0;
      __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i18, i28);
      __ZN7WebCore6RegionC1ERKNS_7IntRectE(i17, i18);
      __ZN7WebCore6Region5uniteERKS0_(i169, i17);
      if ((HEAP32[i148 >> 2] | 0) != 0) {
       HEAP32[i148 >> 2] = 0;
      }
      i169 = HEAP32[i149 >> 2] | 0;
      if (!((i150 | 0) == (i169 | 0) | (i169 | 0) == 0)) {
       HEAP32[i149 >> 2] = 0;
       HEAP32[i155 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i169);
      }
      if ((HEAP32[i151 >> 2] | 0) != 0) {
       HEAP32[i151 >> 2] = 0;
      }
      i169 = HEAP32[i152 >> 2] | 0;
      if ((i153 | 0) == (i169 | 0) | (i169 | 0) == 0) {
       break;
      }
      HEAP32[i152 >> 2] = 0;
      HEAP32[i154 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i169);
      break;
     } else {
      d172 = +HEAPF32[(HEAP32[i158 >> 2] | 0) + 24 >> 2];
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i156 >> 2] | 0) + 768 >> 2] & 127](i31, i157);
      d173 = d172 - +(HEAP32[i126 >> 2] | 0);
      i169 = HEAP32[i156 + 56 >> 2] | 0;
      i167 = i156;
      i160 = i156;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i160 >> 2] | 0) + 768 >> 2] & 127](i15, i167);
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i160 >> 2] | 0) + 772 >> 2] & 127](i16, i167);
      d172 = +((HEAP32[i127 >> 2] | 0) + i169 + (HEAP32[i128 >> 2] | 0) | 0);
      HEAPF32[i129 >> 2] = +(i159 | 0);
      HEAPF32[i130 >> 2] = d173;
      HEAPF32[i131 >> 2] = +(i164 | 0);
      HEAPF32[i132 >> 2] = d172;
      if ((HEAP8[i48] & 1) == 0) {
       i175 = (__ZNK7WebCore15HitTestLocation10intersectsERKNS_9FloatRectE(HEAP32[i49 >> 2] | 0, i30) | 0) & 1;
      } else {
       i175 = 1;
      }
      HEAP8[i48] = i175;
      i164 = HEAP32[i50 >> 2] | 0;
      __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i14, i30);
      __ZN7WebCore6RegionC1ERKNS_7IntRectE(i13, i14);
      __ZN7WebCore6Region5uniteERKS0_(i164, i13);
      if ((HEAP32[i133 >> 2] | 0) != 0) {
       HEAP32[i133 >> 2] = 0;
      }
      i164 = HEAP32[i134 >> 2] | 0;
      if (!((i135 | 0) == (i164 | 0) | (i164 | 0) == 0)) {
       HEAP32[i134 >> 2] = 0;
       HEAP32[i140 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i164);
      }
      if ((HEAP32[i136 >> 2] | 0) != 0) {
       HEAP32[i136 >> 2] = 0;
      }
      i164 = HEAP32[i137 >> 2] | 0;
      if ((i138 | 0) == (i164 | 0) | (i164 | 0) == 0) {
       break;
      }
      HEAP32[i137 >> 2] = 0;
      HEAP32[i139 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i164);
      break;
     }
    }
    if ((i25 & 768 | 0) == 256) {
     i164 = HEAP32[i156 + 48 >> 2] | 0;
     if ((i164 | 0) == 0) {
      break;
     } else {
      i176 = i164;
     }
     while (1) {
      i164 = __ZN7WebCore9InlineBox4rootEv(i176 | 0) | 0;
      i159 = i164 + 32 | 0;
      i169 = HEAP32[i159 >> 2] | 0;
      do {
       if ((i169 & 1 | 0) == 0) {
        i177 = HEAP32[i26 >> 2] | 0;
        i178 = i169;
       } else {
        if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i71 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
         i177 = HEAP32[i26 >> 2] | 0;
         i178 = i169;
         break;
        } else {
         i167 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i1) | 0;
         i177 = i167;
         i178 = HEAP32[i159 >> 2] | 0;
         break;
        }
       }
      } while (0);
      d172 = +HEAPF32[((i178 & 2048 | 0) == 0 ? i164 + 20 | 0 : i164 + 24 | 0) >> 2];
      i159 = HEAP32[i164 + 16 >> 2] | 0;
      i169 = i159;
      do {
       if ((i178 & 1 | 0) == 0) {
        i179 = HEAP32[i159 + 36 >> 2] | 0;
       } else {
        if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i159 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
         i179 = HEAP32[i159 + 36 >> 2] | 0;
         break;
        } else {
         i179 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i169) | 0;
         break;
        }
       }
      } while (0);
      i169 = __ZNK7WebCore11RenderStyle4fontEv(i179) | 0;
      i159 = HEAP32[i169 + 24 >> 2] | 0;
      i164 = i159 + 44 | 0;
      i167 = HEAP32[i164 >> 2] | 0;
      if ((i167 | 0) == 0) {
       i160 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i159, i169 | 0, 0) | 0;
       i169 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i160 >> 2] | 0) + 8 >> 2] & 15](i160, 32) | 0;
       HEAP32[i164 >> 2] = i169;
       i180 = i169;
      } else {
       i180 = i167;
      }
      i167 = _round(+(+HEAPF32[i180 + 16 >> 2])) | 0;
      i169 = __ZNK7WebCore11RenderStyle4fontEv(i177) | 0;
      i164 = HEAP32[i169 + 24 >> 2] | 0;
      i160 = i164 + 44 | 0;
      i159 = HEAP32[i160 >> 2] | 0;
      if ((i159 | 0) == 0) {
       i161 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i164, i169 | 0, 0) | 0;
       i169 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i161 >> 2] | 0) + 8 >> 2] & 15](i161, 32) | 0;
       HEAP32[i160 >> 2] = i169;
       i181 = i169;
      } else {
       i181 = i159;
      }
      i159 = ~~(d172 + +(i167 - (_round(+(+HEAPF32[i181 + 16 >> 2])) | 0) | 0));
      i167 = __ZNK7WebCore11RenderStyle4fontEv(i177) | 0;
      i169 = HEAP32[i167 + 24 >> 2] | 0;
      i160 = i169 + 44 | 0;
      i161 = HEAP32[i160 >> 2] | 0;
      if ((i161 | 0) == 0) {
       i164 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i169, i167 | 0, 0) | 0;
       i167 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i164 >> 2] | 0) + 8 >> 2] & 15](i164, 32) | 0;
       HEAP32[i160 >> 2] = i167;
       i182 = i167;
      } else {
       i182 = i161;
      }
      i161 = _round(+(+HEAPF32[i182 + 16 >> 2])) | 0;
      i167 = (_round(+(+HEAPF32[i182 + 20 >> 2])) | 0) + i161 | 0;
      do {
       if ((i45 | 0) == 3 | (i45 | 0) == 0) {
        d173 = +HEAPF32[i176 + 28 >> 2];
        HEAPF32[i59 >> 2] = +HEAPF32[i176 + 20 >> 2];
        HEAPF32[i60 >> 2] = +(i159 | 0);
        HEAPF32[i61 >> 2] = d173;
        HEAPF32[i62 >> 2] = +(i167 | 0);
        if ((HEAP8[i48] & 1) == 0) {
         i183 = (__ZNK7WebCore15HitTestLocation10intersectsERKNS_9FloatRectE(HEAP32[i49 >> 2] | 0, i40) | 0) & 1;
        } else {
         i183 = 1;
        }
        HEAP8[i48] = i183;
        i161 = HEAP32[i50 >> 2] | 0;
        __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i8, i40);
        __ZN7WebCore6RegionC1ERKNS_7IntRectE(i7, i8);
        __ZN7WebCore6Region5uniteERKS0_(i161, i7);
        if ((HEAP32[i63 >> 2] | 0) != 0) {
         HEAP32[i63 >> 2] = 0;
        }
        i161 = HEAP32[i64 >> 2] | 0;
        if (!((i65 | 0) == (i161 | 0) | (i161 | 0) == 0)) {
         HEAP32[i64 >> 2] = 0;
         HEAP32[i70 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i161);
        }
        if ((HEAP32[i66 >> 2] | 0) != 0) {
         HEAP32[i66 >> 2] = 0;
        }
        i161 = HEAP32[i67 >> 2] | 0;
        if ((i68 | 0) == (i161 | 0) | (i161 | 0) == 0) {
         break;
        }
        HEAP32[i67 >> 2] = 0;
        HEAP32[i69 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i161);
       } else {
        d173 = +HEAPF32[i176 + 24 >> 2];
        d184 = +HEAPF32[i176 + 28 >> 2];
        HEAPF32[i27 >> 2] = +(i159 | 0);
        HEAPF32[i44 >> 2] = d173;
        HEAPF32[i46 >> 2] = +(i167 | 0);
        HEAPF32[i47 >> 2] = d184;
        if ((HEAP8[i48] & 1) == 0) {
         i185 = (__ZNK7WebCore15HitTestLocation10intersectsERKNS_9FloatRectE(HEAP32[i49 >> 2] | 0, i41) | 0) & 1;
        } else {
         i185 = 1;
        }
        HEAP8[i48] = i185;
        i161 = HEAP32[i50 >> 2] | 0;
        __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i6, i41);
        __ZN7WebCore6RegionC1ERKNS_7IntRectE(i5, i6);
        __ZN7WebCore6Region5uniteERKS0_(i161, i5);
        if ((HEAP32[i51 >> 2] | 0) != 0) {
         HEAP32[i51 >> 2] = 0;
        }
        i161 = HEAP32[i52 >> 2] | 0;
        if (!((i53 | 0) == (i161 | 0) | (i161 | 0) == 0)) {
         HEAP32[i52 >> 2] = 0;
         HEAP32[i58 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i161);
        }
        if ((HEAP32[i54 >> 2] | 0) != 0) {
         HEAP32[i54 >> 2] = 0;
        }
        i161 = HEAP32[i55 >> 2] | 0;
        if ((i56 | 0) == (i161 | 0) | (i161 | 0) == 0) {
         break;
        }
        HEAP32[i55 >> 2] = 0;
        HEAP32[i57 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i161);
       }
      } while (0);
      i176 = HEAP32[i176 + 40 >> 2] | 0;
      if ((i176 | 0) == 0) {
       break L25;
      }
     }
    }
    if ((HEAP32[i156 + 24 >> 2] & 4 | 0) == 0) {
     if ((i25 & 4096 | 0) == 0) {
      break;
     }
     i157 = HEAP32[i156 + 44 >> 2] | 0;
     if ((i157 | 0) == 0) {
      break;
     }
     i158 = __ZN7WebCore9InlineBox4rootEv(i157 | 0) | 0;
     i167 = i158 + 32 | 0;
     i159 = HEAP32[i167 >> 2] | 0;
     do {
      if ((i159 & 1 | 0) == 0) {
       i186 = HEAP32[i26 >> 2] | 0;
       i187 = i159;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i71 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i186 = HEAP32[i26 >> 2] | 0;
        i187 = i159;
        break;
       } else {
        i161 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i1) | 0;
        i186 = i161;
        i187 = HEAP32[i167 >> 2] | 0;
        break;
       }
      }
     } while (0);
     d165 = +HEAPF32[((i187 & 2048 | 0) == 0 ? i158 + 20 | 0 : i158 + 24 | 0) >> 2];
     i167 = HEAP32[i158 + 16 >> 2] | 0;
     i159 = i167;
     do {
      if ((i187 & 1 | 0) == 0) {
       i188 = HEAP32[i167 + 36 >> 2] | 0;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i167 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i188 = HEAP32[i167 + 36 >> 2] | 0;
        break;
       } else {
        i188 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i159) | 0;
        break;
       }
      }
     } while (0);
     i159 = __ZNK7WebCore11RenderStyle4fontEv(i188) | 0;
     i167 = HEAP32[i159 + 24 >> 2] | 0;
     i158 = i167 + 44 | 0;
     i161 = HEAP32[i158 >> 2] | 0;
     if ((i161 | 0) == 0) {
      i160 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i167, i159 | 0, 0) | 0;
      i159 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i160 >> 2] | 0) + 8 >> 2] & 15](i160, 32) | 0;
      HEAP32[i158 >> 2] = i159;
      i189 = i159;
     } else {
      i189 = i161;
     }
     i161 = _round(+(+HEAPF32[i189 + 16 >> 2])) | 0;
     i159 = __ZNK7WebCore11RenderStyle4fontEv(i186) | 0;
     i158 = HEAP32[i159 + 24 >> 2] | 0;
     i160 = i158 + 44 | 0;
     i167 = HEAP32[i160 >> 2] | 0;
     if ((i167 | 0) == 0) {
      i164 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i158, i159 | 0, 0) | 0;
      i159 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i164 >> 2] | 0) + 8 >> 2] & 15](i164, 32) | 0;
      HEAP32[i160 >> 2] = i159;
      i190 = i159;
     } else {
      i190 = i167;
     }
     i167 = ~~(d165 + +(i161 - (_round(+(+HEAPF32[i190 + 16 >> 2])) | 0) | 0));
     i161 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i186) | 0;
     i159 = _round(+(+HEAPF32[i161 + 4 >> 2])) | 0;
     i160 = (_round(+(+HEAPF32[i161 + 8 >> 2])) | 0) + i159 | 0;
     if ((i45 | 0) == 3 | (i45 | 0) == 0) {
      d172 = +HEAPF32[i157 + 28 >> 2];
      HEAPF32[i84 >> 2] = +HEAPF32[i157 + 20 >> 2];
      HEAPF32[i85 >> 2] = +(i167 | 0);
      HEAPF32[i86 >> 2] = d172;
      HEAPF32[i87 >> 2] = +(i160 | 0);
      if ((HEAP8[i48] & 1) == 0) {
       i191 = (__ZNK7WebCore15HitTestLocation10intersectsERKNS_9FloatRectE(HEAP32[i49 >> 2] | 0, i42) | 0) & 1;
      } else {
       i191 = 1;
      }
      HEAP8[i48] = i191;
      i159 = HEAP32[i50 >> 2] | 0;
      __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i20, i42);
      __ZN7WebCore6RegionC1ERKNS_7IntRectE(i19, i20);
      __ZN7WebCore6Region5uniteERKS0_(i159, i19);
      if ((HEAP32[i88 >> 2] | 0) != 0) {
       HEAP32[i88 >> 2] = 0;
      }
      i159 = HEAP32[i89 >> 2] | 0;
      if (!((i90 | 0) == (i159 | 0) | (i159 | 0) == 0)) {
       HEAP32[i89 >> 2] = 0;
       HEAP32[i95 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i159);
      }
      if ((HEAP32[i91 >> 2] | 0) != 0) {
       HEAP32[i91 >> 2] = 0;
      }
      i159 = HEAP32[i92 >> 2] | 0;
      if ((i93 | 0) == (i159 | 0) | (i159 | 0) == 0) {
       break;
      }
      HEAP32[i92 >> 2] = 0;
      HEAP32[i94 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i159);
      break;
     } else {
      d172 = +HEAPF32[i157 + 24 >> 2];
      d184 = +HEAPF32[i157 + 28 >> 2];
      HEAPF32[i72 >> 2] = +(i167 | 0);
      HEAPF32[i73 >> 2] = d172;
      HEAPF32[i74 >> 2] = +(i160 | 0);
      HEAPF32[i75 >> 2] = d184;
      if ((HEAP8[i48] & 1) == 0) {
       i192 = (__ZNK7WebCore15HitTestLocation10intersectsERKNS_9FloatRectE(HEAP32[i49 >> 2] | 0, i43) | 0) & 1;
      } else {
       i192 = 1;
      }
      HEAP8[i48] = i192;
      i160 = HEAP32[i50 >> 2] | 0;
      __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i24, i43);
      __ZN7WebCore6RegionC1ERKNS_7IntRectE(i23, i24);
      __ZN7WebCore6Region5uniteERKS0_(i160, i23);
      if ((HEAP32[i76 >> 2] | 0) != 0) {
       HEAP32[i76 >> 2] = 0;
      }
      i160 = HEAP32[i77 >> 2] | 0;
      if (!((i78 | 0) == (i160 | 0) | (i160 | 0) == 0)) {
       HEAP32[i77 >> 2] = 0;
       HEAP32[i83 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i160);
      }
      if ((HEAP32[i79 >> 2] | 0) != 0) {
       HEAP32[i79 >> 2] = 0;
      }
      i160 = HEAP32[i80 >> 2] | 0;
      if ((i81 | 0) == (i160 | 0) | (i160 | 0) == 0) {
       break;
      }
      HEAP32[i80 >> 2] = 0;
      HEAP32[i82 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i160);
      break;
     }
    }
    i160 = i156;
    if ((HEAP8[i160 + 25 | 0] & 1) == 0) {
     __ZNK7WebCore12RenderInline26generateCulledLineBoxRectsINS_12_GLOBAL__N_136HitTestCulledInlinesGeneratorContextEEEvRT_PKS0_(i160, i2, i3);
     break;
    }
    i160 = HEAP32[i156 + 44 >> 2] | 0;
    if ((i160 | 0) == 0) {
     break;
    } else {
     i193 = i160;
    }
    while (1) {
     i160 = __ZN7WebCore9InlineBox4rootEv(i193 | 0) | 0;
     i167 = i160 + 32 | 0;
     i159 = HEAP32[i167 >> 2] | 0;
     do {
      if ((i159 & 1 | 0) == 0) {
       i194 = HEAP32[i26 >> 2] | 0;
       i195 = i159;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i71 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i194 = HEAP32[i26 >> 2] | 0;
        i195 = i159;
        break;
       } else {
        i161 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i1) | 0;
        i194 = i161;
        i195 = HEAP32[i167 >> 2] | 0;
        break;
       }
      }
     } while (0);
     d184 = +HEAPF32[((i195 & 2048 | 0) == 0 ? i160 + 20 | 0 : i160 + 24 | 0) >> 2];
     i167 = HEAP32[i160 + 16 >> 2] | 0;
     i159 = i167;
     do {
      if ((i195 & 1 | 0) == 0) {
       i196 = HEAP32[i167 + 36 >> 2] | 0;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i167 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i196 = HEAP32[i167 + 36 >> 2] | 0;
        break;
       } else {
        i196 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i159) | 0;
        break;
       }
      }
     } while (0);
     i159 = __ZNK7WebCore11RenderStyle4fontEv(i196) | 0;
     i167 = HEAP32[i159 + 24 >> 2] | 0;
     i160 = i167 + 44 | 0;
     i161 = HEAP32[i160 >> 2] | 0;
     if ((i161 | 0) == 0) {
      i164 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i167, i159 | 0, 0) | 0;
      i159 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i164 >> 2] | 0) + 8 >> 2] & 15](i164, 32) | 0;
      HEAP32[i160 >> 2] = i159;
      i197 = i159;
     } else {
      i197 = i161;
     }
     i161 = _round(+(+HEAPF32[i197 + 16 >> 2])) | 0;
     i159 = __ZNK7WebCore11RenderStyle4fontEv(i194) | 0;
     i160 = HEAP32[i159 + 24 >> 2] | 0;
     i164 = i160 + 44 | 0;
     i167 = HEAP32[i164 >> 2] | 0;
     if ((i167 | 0) == 0) {
      i158 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i160, i159 | 0, 0) | 0;
      i159 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i158 >> 2] | 0) + 8 >> 2] & 15](i158, 32) | 0;
      HEAP32[i164 >> 2] = i159;
      i198 = i159;
     } else {
      i198 = i167;
     }
     i167 = ~~(d184 + +(i161 - (_round(+(+HEAPF32[i198 + 16 >> 2])) | 0) | 0));
     i161 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i194) | 0;
     i159 = _round(+(+HEAPF32[i161 + 4 >> 2])) | 0;
     i164 = (_round(+(+HEAPF32[i161 + 8 >> 2])) | 0) + i159 | 0;
     do {
      if ((i45 | 0) == 3 | (i45 | 0) == 0) {
       d172 = +HEAPF32[i193 + 20 >> 2];
       i159 = i193 + 56 | 0;
       do {
        if ((HEAP32[i159 >> 2] & 1 | 0) == 0) {
         HEAP32[i111 >> 2] = 0;
        } else {
         i161 = HEAP32[i193 + 16 >> 2] | 0;
         i158 = i161;
         i160 = HEAP32[i161 >> 2] | 0;
         if ((HEAP32[i193 + 32 >> 2] & 2048 | 0) == 0) {
          FUNCTION_TABLE_vii[HEAP32[i160 + 768 >> 2] & 127](i33, i158);
          break;
         } else {
          FUNCTION_TABLE_vii[HEAP32[i160 + 776 >> 2] & 127](i33, i158);
          break;
         }
        }
       } while (0);
       d173 = d172 - +(HEAP32[i111 >> 2] | 0);
       d199 = +(i167 | 0);
       d200 = +HEAPF32[i193 + 28 >> 2];
       do {
        if ((HEAP32[i159 >> 2] & 1 | 0) == 0) {
         HEAP32[i112 >> 2] = 0;
        } else {
         i158 = HEAP32[i193 + 16 >> 2] | 0;
         i160 = i158;
         i161 = HEAP32[i158 >> 2] | 0;
         if ((HEAP32[i193 + 32 >> 2] & 2048 | 0) == 0) {
          FUNCTION_TABLE_vii[HEAP32[i161 + 768 >> 2] & 127](i34, i160);
          break;
         } else {
          FUNCTION_TABLE_vii[HEAP32[i161 + 776 >> 2] & 127](i34, i160);
          break;
         }
        }
       } while (0);
       d172 = d200 + +(HEAP32[i112 >> 2] | 0);
       do {
        if ((HEAP32[i159 >> 2] & 2 | 0) == 0) {
         HEAP32[i113 >> 2] = 0;
        } else {
         i160 = HEAP32[i193 + 16 >> 2] | 0;
         i161 = i160;
         i158 = HEAP32[i160 >> 2] | 0;
         if ((HEAP32[i193 + 32 >> 2] & 2048 | 0) == 0) {
          FUNCTION_TABLE_vii[HEAP32[i158 + 772 >> 2] & 127](i35, i161);
          break;
         } else {
          FUNCTION_TABLE_vii[HEAP32[i158 + 780 >> 2] & 127](i35, i161);
          break;
         }
        }
       } while (0);
       d200 = d172 + +(HEAP32[i113 >> 2] | 0);
       HEAPF32[i114 >> 2] = d173;
       HEAPF32[i115 >> 2] = d199;
       HEAPF32[i116 >> 2] = d200;
       HEAPF32[i117 >> 2] = +(i164 | 0);
       if ((HEAP8[i48] & 1) == 0) {
        i201 = (__ZNK7WebCore15HitTestLocation10intersectsERKNS_9FloatRectE(HEAP32[i49 >> 2] | 0, i32) | 0) & 1;
       } else {
        i201 = 1;
       }
       HEAP8[i48] = i201;
       i159 = HEAP32[i50 >> 2] | 0;
       __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i12, i32);
       __ZN7WebCore6RegionC1ERKNS_7IntRectE(i11, i12);
       __ZN7WebCore6Region5uniteERKS0_(i159, i11);
       if ((HEAP32[i118 >> 2] | 0) != 0) {
        HEAP32[i118 >> 2] = 0;
       }
       i159 = HEAP32[i119 >> 2] | 0;
       if (!((i120 | 0) == (i159 | 0) | (i159 | 0) == 0)) {
        HEAP32[i119 >> 2] = 0;
        HEAP32[i125 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i159);
       }
       if ((HEAP32[i121 >> 2] | 0) != 0) {
        HEAP32[i121 >> 2] = 0;
       }
       i159 = HEAP32[i122 >> 2] | 0;
       if ((i123 | 0) == (i159 | 0) | (i159 | 0) == 0) {
        break;
       }
       HEAP32[i122 >> 2] = 0;
       HEAP32[i124 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i159);
      } else {
       d200 = +(i167 | 0);
       d202 = +HEAPF32[i193 + 24 >> 2];
       i159 = i193 + 56 | 0;
       do {
        if ((HEAP32[i159 >> 2] & 1 | 0) == 0) {
         HEAP32[i96 >> 2] = 0;
        } else {
         i161 = HEAP32[i193 + 16 >> 2] | 0;
         i158 = i161;
         i160 = HEAP32[i161 >> 2] | 0;
         if ((HEAP32[i193 + 32 >> 2] & 2048 | 0) == 0) {
          FUNCTION_TABLE_vii[HEAP32[i160 + 768 >> 2] & 127](i37, i158);
          break;
         } else {
          FUNCTION_TABLE_vii[HEAP32[i160 + 776 >> 2] & 127](i37, i158);
          break;
         }
        }
       } while (0);
       d199 = d202 - +(HEAP32[i96 >> 2] | 0);
       d173 = +(i164 | 0);
       d172 = +HEAPF32[i193 + 28 >> 2];
       do {
        if ((HEAP32[i159 >> 2] & 1 | 0) == 0) {
         HEAP32[i97 >> 2] = 0;
        } else {
         i158 = HEAP32[i193 + 16 >> 2] | 0;
         i160 = i158;
         i161 = HEAP32[i158 >> 2] | 0;
         if ((HEAP32[i193 + 32 >> 2] & 2048 | 0) == 0) {
          FUNCTION_TABLE_vii[HEAP32[i161 + 768 >> 2] & 127](i38, i160);
          break;
         } else {
          FUNCTION_TABLE_vii[HEAP32[i161 + 776 >> 2] & 127](i38, i160);
          break;
         }
        }
       } while (0);
       d202 = d172 + +(HEAP32[i97 >> 2] | 0);
       do {
        if ((HEAP32[i159 >> 2] & 2 | 0) == 0) {
         HEAP32[i98 >> 2] = 0;
        } else {
         i160 = HEAP32[i193 + 16 >> 2] | 0;
         i161 = i160;
         i158 = HEAP32[i160 >> 2] | 0;
         if ((HEAP32[i193 + 32 >> 2] & 2048 | 0) == 0) {
          FUNCTION_TABLE_vii[HEAP32[i158 + 772 >> 2] & 127](i39, i161);
          break;
         } else {
          FUNCTION_TABLE_vii[HEAP32[i158 + 780 >> 2] & 127](i39, i161);
          break;
         }
        }
       } while (0);
       d172 = d202 + +(HEAP32[i98 >> 2] | 0);
       HEAPF32[i99 >> 2] = d200;
       HEAPF32[i100 >> 2] = d199;
       HEAPF32[i101 >> 2] = d173;
       HEAPF32[i102 >> 2] = d172;
       if ((HEAP8[i48] & 1) == 0) {
        i203 = (__ZNK7WebCore15HitTestLocation10intersectsERKNS_9FloatRectE(HEAP32[i49 >> 2] | 0, i36) | 0) & 1;
       } else {
        i203 = 1;
       }
       HEAP8[i48] = i203;
       i159 = HEAP32[i50 >> 2] | 0;
       __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i10, i36);
       __ZN7WebCore6RegionC1ERKNS_7IntRectE(i9, i10);
       __ZN7WebCore6Region5uniteERKS0_(i159, i9);
       if ((HEAP32[i103 >> 2] | 0) != 0) {
        HEAP32[i103 >> 2] = 0;
       }
       i159 = HEAP32[i104 >> 2] | 0;
       if (!((i105 | 0) == (i159 | 0) | (i159 | 0) == 0)) {
        HEAP32[i104 >> 2] = 0;
        HEAP32[i110 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i159);
       }
       if ((HEAP32[i106 >> 2] | 0) != 0) {
        HEAP32[i106 >> 2] = 0;
       }
       i159 = HEAP32[i107 >> 2] | 0;
       if ((i108 | 0) == (i159 | 0) | (i159 | 0) == 0) {
        break;
       }
       HEAP32[i107 >> 2] = 0;
       HEAP32[i109 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i159);
      }
     } while (0);
     i193 = HEAP32[i193 + 52 >> 2] | 0;
     if ((i193 | 0) == 0) {
      break;
     }
    }
   }
  } while (0);
  i156 = HEAP32[i156 + 16 >> 2] | 0;
  if ((i156 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore12RenderInline26generateCulledLineBoxRectsINS_12_GLOBAL__N_129AbsoluteRectsGeneratorContextEEEvRT_PKS0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, d82 = +0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, d89 = +0, d90 = +0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, d98 = +0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, d110 = +0, d111 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 240 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 64 | 0;
 i12 = i4 + 72 | 0;
 i13 = i4 + 88 | 0;
 i14 = i4 + 96 | 0;
 i15 = i4 + 112 | 0;
 i16 = i4 + 120 | 0;
 i17 = i4 + 128 | 0;
 i18 = i4 + 136 | 0;
 i19 = i4 + 152 | 0;
 i20 = i4 + 160 | 0;
 i21 = i4 + 168 | 0;
 i22 = i4 + 176 | 0;
 i23 = i4 + 192 | 0;
 i24 = i4 + 208 | 0;
 i25 = i4 + 224 | 0;
 if ((__ZNK7WebCore12RenderInline24culledInlineFirstLineBoxEv(i1) | 0) == 0) {
  _memset(i9 | 0, 0, 16) | 0;
  __ZN7WebCore12_GLOBAL__N_129AbsoluteRectsGeneratorContextclERKNS_9FloatRectE(i2, i9);
  STACKTOP = i4;
  return;
 }
 i9 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i26 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i26 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i3 | 0;
 i27 = i3 + 36 | 0;
 i28 = i23 | 0;
 i29 = i23 + 4 | 0;
 i30 = i23 + 8 | 0;
 i31 = i23 + 12 | 0;
 i32 = i22 | 0;
 i33 = i22 + 4 | 0;
 i34 = i22 + 8 | 0;
 i35 = i22 + 12 | 0;
 i36 = i3 + 4 | 0;
 i37 = i25 | 0;
 i38 = i25 + 4 | 0;
 i39 = i25 + 8 | 0;
 i40 = i25 + 12 | 0;
 i41 = i24 | 0;
 i42 = i24 + 4 | 0;
 i43 = i24 + 8 | 0;
 i44 = i24 + 12 | 0;
 i45 = i19 | 0;
 i46 = i20 | 0;
 i47 = i21 | 0;
 i48 = i18 | 0;
 i49 = i18 + 4 | 0;
 i50 = i18 + 8 | 0;
 i51 = i18 + 12 | 0;
 i52 = i15 | 0;
 i53 = i16 | 0;
 i54 = i17 | 0;
 i55 = i14 | 0;
 i56 = i14 + 4 | 0;
 i57 = i14 + 8 | 0;
 i58 = i14 + 12 | 0;
 i59 = i13 | 0;
 i60 = i5 | 0;
 i61 = i6 | 0;
 i62 = i12 | 0;
 i63 = i12 + 4 | 0;
 i64 = i12 + 8 | 0;
 i65 = i12 + 12 | 0;
 i66 = i11 | 0;
 i67 = i7 | 0;
 i68 = i8 | 0;
 i69 = i10 | 0;
 i70 = i10 + 4 | 0;
 i71 = i10 + 8 | 0;
 i72 = i10 + 12 | 0;
 i73 = i26;
 while (1) {
  i26 = HEAP32[i73 + 20 >> 2] | 0;
  L10 : do {
   if (!((i26 & 64 | 0) != 0 | (i26 & 25165824 | 0) == 16777216)) {
    if ((i26 & 512 | 0) != 0) {
     i74 = i73;
     i75 = i73 + 84 | 0;
     i76 = HEAP32[i75 >> 2] | 0;
     if ((i76 | 0) == 0) {
      break;
     }
     i77 = __ZN7WebCore9InlineBox4rootEv(i76) | 0;
     i76 = i77 + 32 | 0;
     i78 = HEAP32[i76 >> 2] | 0;
     do {
      if ((i78 & 1 | 0) == 0) {
       i79 = HEAP32[i27 >> 2] | 0;
       i80 = i78;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i36 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i79 = HEAP32[i27 >> 2] | 0;
        i80 = i78;
        break;
       } else {
        i81 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i1) | 0;
        i79 = i81;
        i80 = HEAP32[i76 >> 2] | 0;
        break;
       }
      }
     } while (0);
     d82 = +HEAPF32[((i80 & 2048 | 0) == 0 ? i77 + 20 | 0 : i77 + 24 | 0) >> 2];
     i76 = HEAP32[i77 + 16 >> 2] | 0;
     i78 = i76;
     do {
      if ((i80 & 1 | 0) == 0) {
       i83 = HEAP32[i76 + 36 >> 2] | 0;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i76 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i83 = HEAP32[i76 + 36 >> 2] | 0;
        break;
       } else {
        i83 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i78) | 0;
        break;
       }
      }
     } while (0);
     i78 = __ZNK7WebCore11RenderStyle4fontEv(i83) | 0;
     i76 = HEAP32[i78 + 24 >> 2] | 0;
     i77 = i76 + 44 | 0;
     i81 = HEAP32[i77 >> 2] | 0;
     if ((i81 | 0) == 0) {
      i84 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i76, i78 | 0, 0) | 0;
      i78 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i84 >> 2] | 0) + 8 >> 2] & 15](i84, 32) | 0;
      HEAP32[i77 >> 2] = i78;
      i85 = i78;
     } else {
      i85 = i81;
     }
     i81 = _round(+(+HEAPF32[i85 + 16 >> 2])) | 0;
     i78 = __ZNK7WebCore11RenderStyle4fontEv(i79) | 0;
     i77 = HEAP32[i78 + 24 >> 2] | 0;
     i84 = i77 + 44 | 0;
     i76 = HEAP32[i84 >> 2] | 0;
     if ((i76 | 0) == 0) {
      i86 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i77, i78 | 0, 0) | 0;
      i78 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i86 >> 2] | 0) + 8 >> 2] & 15](i86, 32) | 0;
      HEAP32[i84 >> 2] = i78;
      i87 = i78;
     } else {
      i87 = i76;
     }
     i76 = ~~(d82 + +(i81 - (_round(+(+HEAPF32[i87 + 16 >> 2])) | 0) | 0));
     i81 = __ZNK7WebCore11RenderStyle4fontEv(i79) | 0;
     i78 = HEAP32[i81 + 24 >> 2] | 0;
     i84 = i78 + 44 | 0;
     i86 = HEAP32[i84 >> 2] | 0;
     if ((i86 | 0) == 0) {
      i77 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i78, i81 | 0, 0) | 0;
      i81 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i77 >> 2] | 0) + 8 >> 2] & 15](i77, 32) | 0;
      HEAP32[i84 >> 2] = i81;
      i88 = i81;
     } else {
      i88 = i86;
     }
     i86 = _round(+(+HEAPF32[i88 + 16 >> 2])) | 0;
     i81 = (_round(+(+HEAPF32[i88 + 20 >> 2])) | 0) + i86 | 0;
     if ((i9 | 0) == 3 | (i9 | 0) == 0) {
      d89 = +HEAPF32[(HEAP32[i75 >> 2] | 0) + 20 >> 2];
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i73 >> 2] | 0) + 776 >> 2] & 127](i11, i74);
      d90 = d89 - +(HEAP32[i66 >> 2] | 0);
      i86 = HEAP32[i73 + 52 >> 2] | 0;
      i84 = i73;
      i77 = i73;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i77 >> 2] | 0) + 776 >> 2] & 127](i7, i84);
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i77 >> 2] | 0) + 780 >> 2] & 127](i8, i84);
      d89 = +((HEAP32[i67 >> 2] | 0) + i86 + (HEAP32[i68 >> 2] | 0) | 0);
      HEAPF32[i69 >> 2] = d90;
      HEAPF32[i70 >> 2] = +(i76 | 0);
      HEAPF32[i71 >> 2] = d89;
      HEAPF32[i72 >> 2] = +(i81 | 0);
      __ZN7WebCore12_GLOBAL__N_129AbsoluteRectsGeneratorContextclERKNS_9FloatRectE(i2, i10);
      break;
     } else {
      d89 = +HEAPF32[(HEAP32[i75 >> 2] | 0) + 24 >> 2];
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i73 >> 2] | 0) + 768 >> 2] & 127](i13, i74);
      d90 = d89 - +(HEAP32[i59 >> 2] | 0);
      i86 = HEAP32[i73 + 56 >> 2] | 0;
      i84 = i73;
      i77 = i73;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i77 >> 2] | 0) + 768 >> 2] & 127](i5, i84);
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i77 >> 2] | 0) + 772 >> 2] & 127](i6, i84);
      d89 = +((HEAP32[i60 >> 2] | 0) + i86 + (HEAP32[i61 >> 2] | 0) | 0);
      HEAPF32[i62 >> 2] = +(i76 | 0);
      HEAPF32[i63 >> 2] = d90;
      HEAPF32[i64 >> 2] = +(i81 | 0);
      HEAPF32[i65 >> 2] = d89;
      __ZN7WebCore12_GLOBAL__N_129AbsoluteRectsGeneratorContextclERKNS_9FloatRectE(i2, i12);
      break;
     }
    }
    if ((i26 & 768 | 0) == 256) {
     i81 = HEAP32[i73 + 48 >> 2] | 0;
     if ((i81 | 0) == 0) {
      break;
     } else {
      i91 = i81;
     }
     while (1) {
      i81 = __ZN7WebCore9InlineBox4rootEv(i91 | 0) | 0;
      i76 = i81 + 32 | 0;
      i86 = HEAP32[i76 >> 2] | 0;
      do {
       if ((i86 & 1 | 0) == 0) {
        i92 = HEAP32[i27 >> 2] | 0;
        i93 = i86;
       } else {
        if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i36 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
         i92 = HEAP32[i27 >> 2] | 0;
         i93 = i86;
         break;
        } else {
         i84 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i1) | 0;
         i92 = i84;
         i93 = HEAP32[i76 >> 2] | 0;
         break;
        }
       }
      } while (0);
      d89 = +HEAPF32[((i93 & 2048 | 0) == 0 ? i81 + 20 | 0 : i81 + 24 | 0) >> 2];
      i76 = HEAP32[i81 + 16 >> 2] | 0;
      i86 = i76;
      do {
       if ((i93 & 1 | 0) == 0) {
        i94 = HEAP32[i76 + 36 >> 2] | 0;
       } else {
        if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i76 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
         i94 = HEAP32[i76 + 36 >> 2] | 0;
         break;
        } else {
         i94 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i86) | 0;
         break;
        }
       }
      } while (0);
      i86 = __ZNK7WebCore11RenderStyle4fontEv(i94) | 0;
      i76 = HEAP32[i86 + 24 >> 2] | 0;
      i81 = i76 + 44 | 0;
      i84 = HEAP32[i81 >> 2] | 0;
      if ((i84 | 0) == 0) {
       i77 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i76, i86 | 0, 0) | 0;
       i86 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i77 >> 2] | 0) + 8 >> 2] & 15](i77, 32) | 0;
       HEAP32[i81 >> 2] = i86;
       i95 = i86;
      } else {
       i95 = i84;
      }
      i84 = _round(+(+HEAPF32[i95 + 16 >> 2])) | 0;
      i86 = __ZNK7WebCore11RenderStyle4fontEv(i92) | 0;
      i81 = HEAP32[i86 + 24 >> 2] | 0;
      i77 = i81 + 44 | 0;
      i76 = HEAP32[i77 >> 2] | 0;
      if ((i76 | 0) == 0) {
       i78 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i81, i86 | 0, 0) | 0;
       i86 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i78 >> 2] | 0) + 8 >> 2] & 15](i78, 32) | 0;
       HEAP32[i77 >> 2] = i86;
       i96 = i86;
      } else {
       i96 = i76;
      }
      i76 = ~~(d89 + +(i84 - (_round(+(+HEAPF32[i96 + 16 >> 2])) | 0) | 0));
      i84 = __ZNK7WebCore11RenderStyle4fontEv(i92) | 0;
      i86 = HEAP32[i84 + 24 >> 2] | 0;
      i77 = i86 + 44 | 0;
      i78 = HEAP32[i77 >> 2] | 0;
      if ((i78 | 0) == 0) {
       i81 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i86, i84 | 0, 0) | 0;
       i84 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i81 >> 2] | 0) + 8 >> 2] & 15](i81, 32) | 0;
       HEAP32[i77 >> 2] = i84;
       i97 = i84;
      } else {
       i97 = i78;
      }
      i78 = _round(+(+HEAPF32[i97 + 16 >> 2])) | 0;
      i84 = (_round(+(+HEAPF32[i97 + 20 >> 2])) | 0) + i78 | 0;
      if ((i9 | 0) == 3 | (i9 | 0) == 0) {
       d90 = +HEAPF32[i91 + 28 >> 2];
       HEAPF32[i32 >> 2] = +HEAPF32[i91 + 20 >> 2];
       HEAPF32[i33 >> 2] = +(i76 | 0);
       HEAPF32[i34 >> 2] = d90;
       HEAPF32[i35 >> 2] = +(i84 | 0);
       __ZN7WebCore12_GLOBAL__N_129AbsoluteRectsGeneratorContextclERKNS_9FloatRectE(i2, i22);
      } else {
       d90 = +HEAPF32[i91 + 24 >> 2];
       d98 = +HEAPF32[i91 + 28 >> 2];
       HEAPF32[i28 >> 2] = +(i76 | 0);
       HEAPF32[i29 >> 2] = d90;
       HEAPF32[i30 >> 2] = +(i84 | 0);
       HEAPF32[i31 >> 2] = d98;
       __ZN7WebCore12_GLOBAL__N_129AbsoluteRectsGeneratorContextclERKNS_9FloatRectE(i2, i23);
      }
      i91 = HEAP32[i91 + 40 >> 2] | 0;
      if ((i91 | 0) == 0) {
       break L10;
      }
     }
    }
    if ((HEAP32[i73 + 24 >> 2] & 4 | 0) == 0) {
     if ((i26 & 4096 | 0) == 0) {
      break;
     }
     i74 = HEAP32[i73 + 44 >> 2] | 0;
     if ((i74 | 0) == 0) {
      break;
     }
     i75 = __ZN7WebCore9InlineBox4rootEv(i74 | 0) | 0;
     i84 = i75 + 32 | 0;
     i76 = HEAP32[i84 >> 2] | 0;
     do {
      if ((i76 & 1 | 0) == 0) {
       i99 = HEAP32[i27 >> 2] | 0;
       i100 = i76;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i36 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i99 = HEAP32[i27 >> 2] | 0;
        i100 = i76;
        break;
       } else {
        i78 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i1) | 0;
        i99 = i78;
        i100 = HEAP32[i84 >> 2] | 0;
        break;
       }
      }
     } while (0);
     d82 = +HEAPF32[((i100 & 2048 | 0) == 0 ? i75 + 20 | 0 : i75 + 24 | 0) >> 2];
     i84 = HEAP32[i75 + 16 >> 2] | 0;
     i76 = i84;
     do {
      if ((i100 & 1 | 0) == 0) {
       i101 = HEAP32[i84 + 36 >> 2] | 0;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i84 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i101 = HEAP32[i84 + 36 >> 2] | 0;
        break;
       } else {
        i101 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i76) | 0;
        break;
       }
      }
     } while (0);
     i76 = __ZNK7WebCore11RenderStyle4fontEv(i101) | 0;
     i84 = HEAP32[i76 + 24 >> 2] | 0;
     i75 = i84 + 44 | 0;
     i78 = HEAP32[i75 >> 2] | 0;
     if ((i78 | 0) == 0) {
      i77 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i84, i76 | 0, 0) | 0;
      i76 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i77 >> 2] | 0) + 8 >> 2] & 15](i77, 32) | 0;
      HEAP32[i75 >> 2] = i76;
      i102 = i76;
     } else {
      i102 = i78;
     }
     i78 = _round(+(+HEAPF32[i102 + 16 >> 2])) | 0;
     i76 = __ZNK7WebCore11RenderStyle4fontEv(i99) | 0;
     i75 = HEAP32[i76 + 24 >> 2] | 0;
     i77 = i75 + 44 | 0;
     i84 = HEAP32[i77 >> 2] | 0;
     if ((i84 | 0) == 0) {
      i81 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i75, i76 | 0, 0) | 0;
      i76 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i81 >> 2] | 0) + 8 >> 2] & 15](i81, 32) | 0;
      HEAP32[i77 >> 2] = i76;
      i103 = i76;
     } else {
      i103 = i84;
     }
     i84 = ~~(d82 + +(i78 - (_round(+(+HEAPF32[i103 + 16 >> 2])) | 0) | 0));
     i78 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i99) | 0;
     i76 = _round(+(+HEAPF32[i78 + 4 >> 2])) | 0;
     i77 = (_round(+(+HEAPF32[i78 + 8 >> 2])) | 0) + i76 | 0;
     if ((i9 | 0) == 3 | (i9 | 0) == 0) {
      d98 = +HEAPF32[i74 + 28 >> 2];
      HEAPF32[i41 >> 2] = +HEAPF32[i74 + 20 >> 2];
      HEAPF32[i42 >> 2] = +(i84 | 0);
      HEAPF32[i43 >> 2] = d98;
      HEAPF32[i44 >> 2] = +(i77 | 0);
      __ZN7WebCore12_GLOBAL__N_129AbsoluteRectsGeneratorContextclERKNS_9FloatRectE(i2, i24);
      break;
     } else {
      d98 = +HEAPF32[i74 + 24 >> 2];
      d90 = +HEAPF32[i74 + 28 >> 2];
      HEAPF32[i37 >> 2] = +(i84 | 0);
      HEAPF32[i38 >> 2] = d98;
      HEAPF32[i39 >> 2] = +(i77 | 0);
      HEAPF32[i40 >> 2] = d90;
      __ZN7WebCore12_GLOBAL__N_129AbsoluteRectsGeneratorContextclERKNS_9FloatRectE(i2, i25);
      break;
     }
    }
    i77 = i73;
    if ((HEAP8[i77 + 25 | 0] & 1) == 0) {
     __ZNK7WebCore12RenderInline26generateCulledLineBoxRectsINS_12_GLOBAL__N_129AbsoluteRectsGeneratorContextEEEvRT_PKS0_(i77, i2, i3);
     break;
    }
    i77 = HEAP32[i73 + 44 >> 2] | 0;
    if ((i77 | 0) == 0) {
     break;
    } else {
     i104 = i77;
    }
    while (1) {
     i77 = __ZN7WebCore9InlineBox4rootEv(i104 | 0) | 0;
     i84 = i77 + 32 | 0;
     i76 = HEAP32[i84 >> 2] | 0;
     do {
      if ((i76 & 1 | 0) == 0) {
       i105 = HEAP32[i27 >> 2] | 0;
       i106 = i76;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i36 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i105 = HEAP32[i27 >> 2] | 0;
        i106 = i76;
        break;
       } else {
        i78 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i1) | 0;
        i105 = i78;
        i106 = HEAP32[i84 >> 2] | 0;
        break;
       }
      }
     } while (0);
     d89 = +HEAPF32[((i106 & 2048 | 0) == 0 ? i77 + 20 | 0 : i77 + 24 | 0) >> 2];
     i84 = HEAP32[i77 + 16 >> 2] | 0;
     i76 = i84;
     do {
      if ((i106 & 1 | 0) == 0) {
       i107 = HEAP32[i84 + 36 >> 2] | 0;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i84 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i107 = HEAP32[i84 + 36 >> 2] | 0;
        break;
       } else {
        i107 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i76) | 0;
        break;
       }
      }
     } while (0);
     i76 = __ZNK7WebCore11RenderStyle4fontEv(i107) | 0;
     i84 = HEAP32[i76 + 24 >> 2] | 0;
     i77 = i84 + 44 | 0;
     i78 = HEAP32[i77 >> 2] | 0;
     if ((i78 | 0) == 0) {
      i81 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i84, i76 | 0, 0) | 0;
      i76 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i81 >> 2] | 0) + 8 >> 2] & 15](i81, 32) | 0;
      HEAP32[i77 >> 2] = i76;
      i108 = i76;
     } else {
      i108 = i78;
     }
     i78 = _round(+(+HEAPF32[i108 + 16 >> 2])) | 0;
     i76 = __ZNK7WebCore11RenderStyle4fontEv(i105) | 0;
     i77 = HEAP32[i76 + 24 >> 2] | 0;
     i81 = i77 + 44 | 0;
     i84 = HEAP32[i81 >> 2] | 0;
     if ((i84 | 0) == 0) {
      i75 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i77, i76 | 0, 0) | 0;
      i76 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i75 >> 2] | 0) + 8 >> 2] & 15](i75, 32) | 0;
      HEAP32[i81 >> 2] = i76;
      i109 = i76;
     } else {
      i109 = i84;
     }
     i84 = ~~(d89 + +(i78 - (_round(+(+HEAPF32[i109 + 16 >> 2])) | 0) | 0));
     i78 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i105) | 0;
     i76 = _round(+(+HEAPF32[i78 + 4 >> 2])) | 0;
     i81 = (_round(+(+HEAPF32[i78 + 8 >> 2])) | 0) + i76 | 0;
     if ((i9 | 0) == 3 | (i9 | 0) == 0) {
      d90 = +HEAPF32[i104 + 20 >> 2];
      i76 = i104 + 56 | 0;
      do {
       if ((HEAP32[i76 >> 2] & 1 | 0) == 0) {
        HEAP32[i52 >> 2] = 0;
       } else {
        i78 = HEAP32[i104 + 16 >> 2] | 0;
        i75 = i78;
        i77 = HEAP32[i78 >> 2] | 0;
        if ((HEAP32[i104 + 32 >> 2] & 2048 | 0) == 0) {
         FUNCTION_TABLE_vii[HEAP32[i77 + 768 >> 2] & 127](i15, i75);
         break;
        } else {
         FUNCTION_TABLE_vii[HEAP32[i77 + 776 >> 2] & 127](i15, i75);
         break;
        }
       }
      } while (0);
      d89 = d90 - +(HEAP32[i52 >> 2] | 0);
      d98 = +(i84 | 0);
      d110 = +HEAPF32[i104 + 28 >> 2];
      do {
       if ((HEAP32[i76 >> 2] & 1 | 0) == 0) {
        HEAP32[i53 >> 2] = 0;
       } else {
        i75 = HEAP32[i104 + 16 >> 2] | 0;
        i77 = i75;
        i78 = HEAP32[i75 >> 2] | 0;
        if ((HEAP32[i104 + 32 >> 2] & 2048 | 0) == 0) {
         FUNCTION_TABLE_vii[HEAP32[i78 + 768 >> 2] & 127](i16, i77);
         break;
        } else {
         FUNCTION_TABLE_vii[HEAP32[i78 + 776 >> 2] & 127](i16, i77);
         break;
        }
       }
      } while (0);
      d90 = d110 + +(HEAP32[i53 >> 2] | 0);
      do {
       if ((HEAP32[i76 >> 2] & 2 | 0) == 0) {
        HEAP32[i54 >> 2] = 0;
       } else {
        i77 = HEAP32[i104 + 16 >> 2] | 0;
        i78 = i77;
        i75 = HEAP32[i77 >> 2] | 0;
        if ((HEAP32[i104 + 32 >> 2] & 2048 | 0) == 0) {
         FUNCTION_TABLE_vii[HEAP32[i75 + 772 >> 2] & 127](i17, i78);
         break;
        } else {
         FUNCTION_TABLE_vii[HEAP32[i75 + 780 >> 2] & 127](i17, i78);
         break;
        }
       }
      } while (0);
      d110 = d90 + +(HEAP32[i54 >> 2] | 0);
      HEAPF32[i55 >> 2] = d89;
      HEAPF32[i56 >> 2] = d98;
      HEAPF32[i57 >> 2] = d110;
      HEAPF32[i58 >> 2] = +(i81 | 0);
      __ZN7WebCore12_GLOBAL__N_129AbsoluteRectsGeneratorContextclERKNS_9FloatRectE(i2, i14);
     } else {
      d110 = +(i84 | 0);
      d111 = +HEAPF32[i104 + 24 >> 2];
      i76 = i104 + 56 | 0;
      do {
       if ((HEAP32[i76 >> 2] & 1 | 0) == 0) {
        HEAP32[i45 >> 2] = 0;
       } else {
        i78 = HEAP32[i104 + 16 >> 2] | 0;
        i75 = i78;
        i77 = HEAP32[i78 >> 2] | 0;
        if ((HEAP32[i104 + 32 >> 2] & 2048 | 0) == 0) {
         FUNCTION_TABLE_vii[HEAP32[i77 + 768 >> 2] & 127](i19, i75);
         break;
        } else {
         FUNCTION_TABLE_vii[HEAP32[i77 + 776 >> 2] & 127](i19, i75);
         break;
        }
       }
      } while (0);
      d98 = d111 - +(HEAP32[i45 >> 2] | 0);
      d89 = +(i81 | 0);
      d90 = +HEAPF32[i104 + 28 >> 2];
      do {
       if ((HEAP32[i76 >> 2] & 1 | 0) == 0) {
        HEAP32[i46 >> 2] = 0;
       } else {
        i84 = HEAP32[i104 + 16 >> 2] | 0;
        i75 = i84;
        i77 = HEAP32[i84 >> 2] | 0;
        if ((HEAP32[i104 + 32 >> 2] & 2048 | 0) == 0) {
         FUNCTION_TABLE_vii[HEAP32[i77 + 768 >> 2] & 127](i20, i75);
         break;
        } else {
         FUNCTION_TABLE_vii[HEAP32[i77 + 776 >> 2] & 127](i20, i75);
         break;
        }
       }
      } while (0);
      d111 = d90 + +(HEAP32[i46 >> 2] | 0);
      do {
       if ((HEAP32[i76 >> 2] & 2 | 0) == 0) {
        HEAP32[i47 >> 2] = 0;
       } else {
        i81 = HEAP32[i104 + 16 >> 2] | 0;
        i75 = i81;
        i77 = HEAP32[i81 >> 2] | 0;
        if ((HEAP32[i104 + 32 >> 2] & 2048 | 0) == 0) {
         FUNCTION_TABLE_vii[HEAP32[i77 + 772 >> 2] & 127](i21, i75);
         break;
        } else {
         FUNCTION_TABLE_vii[HEAP32[i77 + 780 >> 2] & 127](i21, i75);
         break;
        }
       }
      } while (0);
      d90 = d111 + +(HEAP32[i47 >> 2] | 0);
      HEAPF32[i48 >> 2] = d110;
      HEAPF32[i49 >> 2] = d98;
      HEAPF32[i50 >> 2] = d89;
      HEAPF32[i51 >> 2] = d90;
      __ZN7WebCore12_GLOBAL__N_129AbsoluteRectsGeneratorContextclERKNS_9FloatRectE(i2, i18);
     }
     i104 = HEAP32[i104 + 52 >> 2] | 0;
     if ((i104 | 0) == 0) {
      break;
     }
    }
   }
  } while (0);
  i73 = HEAP32[i73 + 16 >> 2] | 0;
  if ((i73 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore12RenderInline26generateCulledLineBoxRectsINS_12_GLOBAL__N_129AbsoluteQuadsGeneratorContextEEEvRT_PKS0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, d82 = +0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, d89 = +0, d90 = +0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, d98 = +0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, d110 = +0, d111 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 240 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 64 | 0;
 i12 = i4 + 72 | 0;
 i13 = i4 + 88 | 0;
 i14 = i4 + 96 | 0;
 i15 = i4 + 112 | 0;
 i16 = i4 + 120 | 0;
 i17 = i4 + 128 | 0;
 i18 = i4 + 136 | 0;
 i19 = i4 + 152 | 0;
 i20 = i4 + 160 | 0;
 i21 = i4 + 168 | 0;
 i22 = i4 + 176 | 0;
 i23 = i4 + 192 | 0;
 i24 = i4 + 208 | 0;
 i25 = i4 + 224 | 0;
 if ((__ZNK7WebCore12RenderInline24culledInlineFirstLineBoxEv(i1) | 0) == 0) {
  _memset(i9 | 0, 0, 16) | 0;
  __ZN7WebCore12_GLOBAL__N_129AbsoluteQuadsGeneratorContextclERKNS_9FloatRectE(i2, i9);
  STACKTOP = i4;
  return;
 }
 i9 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i26 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i26 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i3 | 0;
 i27 = i3 + 36 | 0;
 i28 = i23 | 0;
 i29 = i23 + 4 | 0;
 i30 = i23 + 8 | 0;
 i31 = i23 + 12 | 0;
 i32 = i22 | 0;
 i33 = i22 + 4 | 0;
 i34 = i22 + 8 | 0;
 i35 = i22 + 12 | 0;
 i36 = i3 + 4 | 0;
 i37 = i25 | 0;
 i38 = i25 + 4 | 0;
 i39 = i25 + 8 | 0;
 i40 = i25 + 12 | 0;
 i41 = i24 | 0;
 i42 = i24 + 4 | 0;
 i43 = i24 + 8 | 0;
 i44 = i24 + 12 | 0;
 i45 = i19 | 0;
 i46 = i20 | 0;
 i47 = i21 | 0;
 i48 = i18 | 0;
 i49 = i18 + 4 | 0;
 i50 = i18 + 8 | 0;
 i51 = i18 + 12 | 0;
 i52 = i15 | 0;
 i53 = i16 | 0;
 i54 = i17 | 0;
 i55 = i14 | 0;
 i56 = i14 + 4 | 0;
 i57 = i14 + 8 | 0;
 i58 = i14 + 12 | 0;
 i59 = i13 | 0;
 i60 = i5 | 0;
 i61 = i6 | 0;
 i62 = i12 | 0;
 i63 = i12 + 4 | 0;
 i64 = i12 + 8 | 0;
 i65 = i12 + 12 | 0;
 i66 = i11 | 0;
 i67 = i7 | 0;
 i68 = i8 | 0;
 i69 = i10 | 0;
 i70 = i10 + 4 | 0;
 i71 = i10 + 8 | 0;
 i72 = i10 + 12 | 0;
 i73 = i26;
 while (1) {
  i26 = HEAP32[i73 + 20 >> 2] | 0;
  L10 : do {
   if (!((i26 & 64 | 0) != 0 | (i26 & 25165824 | 0) == 16777216)) {
    if ((i26 & 512 | 0) != 0) {
     i74 = i73;
     i75 = i73 + 84 | 0;
     i76 = HEAP32[i75 >> 2] | 0;
     if ((i76 | 0) == 0) {
      break;
     }
     i77 = __ZN7WebCore9InlineBox4rootEv(i76) | 0;
     i76 = i77 + 32 | 0;
     i78 = HEAP32[i76 >> 2] | 0;
     do {
      if ((i78 & 1 | 0) == 0) {
       i79 = HEAP32[i27 >> 2] | 0;
       i80 = i78;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i36 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i79 = HEAP32[i27 >> 2] | 0;
        i80 = i78;
        break;
       } else {
        i81 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i1) | 0;
        i79 = i81;
        i80 = HEAP32[i76 >> 2] | 0;
        break;
       }
      }
     } while (0);
     d82 = +HEAPF32[((i80 & 2048 | 0) == 0 ? i77 + 20 | 0 : i77 + 24 | 0) >> 2];
     i76 = HEAP32[i77 + 16 >> 2] | 0;
     i78 = i76;
     do {
      if ((i80 & 1 | 0) == 0) {
       i83 = HEAP32[i76 + 36 >> 2] | 0;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i76 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i83 = HEAP32[i76 + 36 >> 2] | 0;
        break;
       } else {
        i83 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i78) | 0;
        break;
       }
      }
     } while (0);
     i78 = __ZNK7WebCore11RenderStyle4fontEv(i83) | 0;
     i76 = HEAP32[i78 + 24 >> 2] | 0;
     i77 = i76 + 44 | 0;
     i81 = HEAP32[i77 >> 2] | 0;
     if ((i81 | 0) == 0) {
      i84 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i76, i78 | 0, 0) | 0;
      i78 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i84 >> 2] | 0) + 8 >> 2] & 15](i84, 32) | 0;
      HEAP32[i77 >> 2] = i78;
      i85 = i78;
     } else {
      i85 = i81;
     }
     i81 = _round(+(+HEAPF32[i85 + 16 >> 2])) | 0;
     i78 = __ZNK7WebCore11RenderStyle4fontEv(i79) | 0;
     i77 = HEAP32[i78 + 24 >> 2] | 0;
     i84 = i77 + 44 | 0;
     i76 = HEAP32[i84 >> 2] | 0;
     if ((i76 | 0) == 0) {
      i86 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i77, i78 | 0, 0) | 0;
      i78 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i86 >> 2] | 0) + 8 >> 2] & 15](i86, 32) | 0;
      HEAP32[i84 >> 2] = i78;
      i87 = i78;
     } else {
      i87 = i76;
     }
     i76 = ~~(d82 + +(i81 - (_round(+(+HEAPF32[i87 + 16 >> 2])) | 0) | 0));
     i81 = __ZNK7WebCore11RenderStyle4fontEv(i79) | 0;
     i78 = HEAP32[i81 + 24 >> 2] | 0;
     i84 = i78 + 44 | 0;
     i86 = HEAP32[i84 >> 2] | 0;
     if ((i86 | 0) == 0) {
      i77 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i78, i81 | 0, 0) | 0;
      i81 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i77 >> 2] | 0) + 8 >> 2] & 15](i77, 32) | 0;
      HEAP32[i84 >> 2] = i81;
      i88 = i81;
     } else {
      i88 = i86;
     }
     i86 = _round(+(+HEAPF32[i88 + 16 >> 2])) | 0;
     i81 = (_round(+(+HEAPF32[i88 + 20 >> 2])) | 0) + i86 | 0;
     if ((i9 | 0) == 3 | (i9 | 0) == 0) {
      d89 = +HEAPF32[(HEAP32[i75 >> 2] | 0) + 20 >> 2];
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i73 >> 2] | 0) + 776 >> 2] & 127](i11, i74);
      d90 = d89 - +(HEAP32[i66 >> 2] | 0);
      i86 = HEAP32[i73 + 52 >> 2] | 0;
      i84 = i73;
      i77 = i73;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i77 >> 2] | 0) + 776 >> 2] & 127](i7, i84);
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i77 >> 2] | 0) + 780 >> 2] & 127](i8, i84);
      d89 = +((HEAP32[i67 >> 2] | 0) + i86 + (HEAP32[i68 >> 2] | 0) | 0);
      HEAPF32[i69 >> 2] = d90;
      HEAPF32[i70 >> 2] = +(i76 | 0);
      HEAPF32[i71 >> 2] = d89;
      HEAPF32[i72 >> 2] = +(i81 | 0);
      __ZN7WebCore12_GLOBAL__N_129AbsoluteQuadsGeneratorContextclERKNS_9FloatRectE(i2, i10);
      break;
     } else {
      d89 = +HEAPF32[(HEAP32[i75 >> 2] | 0) + 24 >> 2];
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i73 >> 2] | 0) + 768 >> 2] & 127](i13, i74);
      d90 = d89 - +(HEAP32[i59 >> 2] | 0);
      i86 = HEAP32[i73 + 56 >> 2] | 0;
      i84 = i73;
      i77 = i73;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i77 >> 2] | 0) + 768 >> 2] & 127](i5, i84);
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i77 >> 2] | 0) + 772 >> 2] & 127](i6, i84);
      d89 = +((HEAP32[i60 >> 2] | 0) + i86 + (HEAP32[i61 >> 2] | 0) | 0);
      HEAPF32[i62 >> 2] = +(i76 | 0);
      HEAPF32[i63 >> 2] = d90;
      HEAPF32[i64 >> 2] = +(i81 | 0);
      HEAPF32[i65 >> 2] = d89;
      __ZN7WebCore12_GLOBAL__N_129AbsoluteQuadsGeneratorContextclERKNS_9FloatRectE(i2, i12);
      break;
     }
    }
    if ((i26 & 768 | 0) == 256) {
     i81 = HEAP32[i73 + 48 >> 2] | 0;
     if ((i81 | 0) == 0) {
      break;
     } else {
      i91 = i81;
     }
     while (1) {
      i81 = __ZN7WebCore9InlineBox4rootEv(i91 | 0) | 0;
      i76 = i81 + 32 | 0;
      i86 = HEAP32[i76 >> 2] | 0;
      do {
       if ((i86 & 1 | 0) == 0) {
        i92 = HEAP32[i27 >> 2] | 0;
        i93 = i86;
       } else {
        if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i36 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
         i92 = HEAP32[i27 >> 2] | 0;
         i93 = i86;
         break;
        } else {
         i84 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i1) | 0;
         i92 = i84;
         i93 = HEAP32[i76 >> 2] | 0;
         break;
        }
       }
      } while (0);
      d89 = +HEAPF32[((i93 & 2048 | 0) == 0 ? i81 + 20 | 0 : i81 + 24 | 0) >> 2];
      i76 = HEAP32[i81 + 16 >> 2] | 0;
      i86 = i76;
      do {
       if ((i93 & 1 | 0) == 0) {
        i94 = HEAP32[i76 + 36 >> 2] | 0;
       } else {
        if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i76 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
         i94 = HEAP32[i76 + 36 >> 2] | 0;
         break;
        } else {
         i94 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i86) | 0;
         break;
        }
       }
      } while (0);
      i86 = __ZNK7WebCore11RenderStyle4fontEv(i94) | 0;
      i76 = HEAP32[i86 + 24 >> 2] | 0;
      i81 = i76 + 44 | 0;
      i84 = HEAP32[i81 >> 2] | 0;
      if ((i84 | 0) == 0) {
       i77 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i76, i86 | 0, 0) | 0;
       i86 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i77 >> 2] | 0) + 8 >> 2] & 15](i77, 32) | 0;
       HEAP32[i81 >> 2] = i86;
       i95 = i86;
      } else {
       i95 = i84;
      }
      i84 = _round(+(+HEAPF32[i95 + 16 >> 2])) | 0;
      i86 = __ZNK7WebCore11RenderStyle4fontEv(i92) | 0;
      i81 = HEAP32[i86 + 24 >> 2] | 0;
      i77 = i81 + 44 | 0;
      i76 = HEAP32[i77 >> 2] | 0;
      if ((i76 | 0) == 0) {
       i78 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i81, i86 | 0, 0) | 0;
       i86 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i78 >> 2] | 0) + 8 >> 2] & 15](i78, 32) | 0;
       HEAP32[i77 >> 2] = i86;
       i96 = i86;
      } else {
       i96 = i76;
      }
      i76 = ~~(d89 + +(i84 - (_round(+(+HEAPF32[i96 + 16 >> 2])) | 0) | 0));
      i84 = __ZNK7WebCore11RenderStyle4fontEv(i92) | 0;
      i86 = HEAP32[i84 + 24 >> 2] | 0;
      i77 = i86 + 44 | 0;
      i78 = HEAP32[i77 >> 2] | 0;
      if ((i78 | 0) == 0) {
       i81 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i86, i84 | 0, 0) | 0;
       i84 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i81 >> 2] | 0) + 8 >> 2] & 15](i81, 32) | 0;
       HEAP32[i77 >> 2] = i84;
       i97 = i84;
      } else {
       i97 = i78;
      }
      i78 = _round(+(+HEAPF32[i97 + 16 >> 2])) | 0;
      i84 = (_round(+(+HEAPF32[i97 + 20 >> 2])) | 0) + i78 | 0;
      if ((i9 | 0) == 3 | (i9 | 0) == 0) {
       d90 = +HEAPF32[i91 + 28 >> 2];
       HEAPF32[i32 >> 2] = +HEAPF32[i91 + 20 >> 2];
       HEAPF32[i33 >> 2] = +(i76 | 0);
       HEAPF32[i34 >> 2] = d90;
       HEAPF32[i35 >> 2] = +(i84 | 0);
       __ZN7WebCore12_GLOBAL__N_129AbsoluteQuadsGeneratorContextclERKNS_9FloatRectE(i2, i22);
      } else {
       d90 = +HEAPF32[i91 + 24 >> 2];
       d98 = +HEAPF32[i91 + 28 >> 2];
       HEAPF32[i28 >> 2] = +(i76 | 0);
       HEAPF32[i29 >> 2] = d90;
       HEAPF32[i30 >> 2] = +(i84 | 0);
       HEAPF32[i31 >> 2] = d98;
       __ZN7WebCore12_GLOBAL__N_129AbsoluteQuadsGeneratorContextclERKNS_9FloatRectE(i2, i23);
      }
      i91 = HEAP32[i91 + 40 >> 2] | 0;
      if ((i91 | 0) == 0) {
       break L10;
      }
     }
    }
    if ((HEAP32[i73 + 24 >> 2] & 4 | 0) == 0) {
     if ((i26 & 4096 | 0) == 0) {
      break;
     }
     i74 = HEAP32[i73 + 44 >> 2] | 0;
     if ((i74 | 0) == 0) {
      break;
     }
     i75 = __ZN7WebCore9InlineBox4rootEv(i74 | 0) | 0;
     i84 = i75 + 32 | 0;
     i76 = HEAP32[i84 >> 2] | 0;
     do {
      if ((i76 & 1 | 0) == 0) {
       i99 = HEAP32[i27 >> 2] | 0;
       i100 = i76;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i36 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i99 = HEAP32[i27 >> 2] | 0;
        i100 = i76;
        break;
       } else {
        i78 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i1) | 0;
        i99 = i78;
        i100 = HEAP32[i84 >> 2] | 0;
        break;
       }
      }
     } while (0);
     d82 = +HEAPF32[((i100 & 2048 | 0) == 0 ? i75 + 20 | 0 : i75 + 24 | 0) >> 2];
     i84 = HEAP32[i75 + 16 >> 2] | 0;
     i76 = i84;
     do {
      if ((i100 & 1 | 0) == 0) {
       i101 = HEAP32[i84 + 36 >> 2] | 0;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i84 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i101 = HEAP32[i84 + 36 >> 2] | 0;
        break;
       } else {
        i101 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i76) | 0;
        break;
       }
      }
     } while (0);
     i76 = __ZNK7WebCore11RenderStyle4fontEv(i101) | 0;
     i84 = HEAP32[i76 + 24 >> 2] | 0;
     i75 = i84 + 44 | 0;
     i78 = HEAP32[i75 >> 2] | 0;
     if ((i78 | 0) == 0) {
      i77 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i84, i76 | 0, 0) | 0;
      i76 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i77 >> 2] | 0) + 8 >> 2] & 15](i77, 32) | 0;
      HEAP32[i75 >> 2] = i76;
      i102 = i76;
     } else {
      i102 = i78;
     }
     i78 = _round(+(+HEAPF32[i102 + 16 >> 2])) | 0;
     i76 = __ZNK7WebCore11RenderStyle4fontEv(i99) | 0;
     i75 = HEAP32[i76 + 24 >> 2] | 0;
     i77 = i75 + 44 | 0;
     i84 = HEAP32[i77 >> 2] | 0;
     if ((i84 | 0) == 0) {
      i81 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i75, i76 | 0, 0) | 0;
      i76 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i81 >> 2] | 0) + 8 >> 2] & 15](i81, 32) | 0;
      HEAP32[i77 >> 2] = i76;
      i103 = i76;
     } else {
      i103 = i84;
     }
     i84 = ~~(d82 + +(i78 - (_round(+(+HEAPF32[i103 + 16 >> 2])) | 0) | 0));
     i78 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i99) | 0;
     i76 = _round(+(+HEAPF32[i78 + 4 >> 2])) | 0;
     i77 = (_round(+(+HEAPF32[i78 + 8 >> 2])) | 0) + i76 | 0;
     if ((i9 | 0) == 3 | (i9 | 0) == 0) {
      d98 = +HEAPF32[i74 + 28 >> 2];
      HEAPF32[i41 >> 2] = +HEAPF32[i74 + 20 >> 2];
      HEAPF32[i42 >> 2] = +(i84 | 0);
      HEAPF32[i43 >> 2] = d98;
      HEAPF32[i44 >> 2] = +(i77 | 0);
      __ZN7WebCore12_GLOBAL__N_129AbsoluteQuadsGeneratorContextclERKNS_9FloatRectE(i2, i24);
      break;
     } else {
      d98 = +HEAPF32[i74 + 24 >> 2];
      d90 = +HEAPF32[i74 + 28 >> 2];
      HEAPF32[i37 >> 2] = +(i84 | 0);
      HEAPF32[i38 >> 2] = d98;
      HEAPF32[i39 >> 2] = +(i77 | 0);
      HEAPF32[i40 >> 2] = d90;
      __ZN7WebCore12_GLOBAL__N_129AbsoluteQuadsGeneratorContextclERKNS_9FloatRectE(i2, i25);
      break;
     }
    }
    i77 = i73;
    if ((HEAP8[i77 + 25 | 0] & 1) == 0) {
     __ZNK7WebCore12RenderInline26generateCulledLineBoxRectsINS_12_GLOBAL__N_129AbsoluteQuadsGeneratorContextEEEvRT_PKS0_(i77, i2, i3);
     break;
    }
    i77 = HEAP32[i73 + 44 >> 2] | 0;
    if ((i77 | 0) == 0) {
     break;
    } else {
     i104 = i77;
    }
    while (1) {
     i77 = __ZN7WebCore9InlineBox4rootEv(i104 | 0) | 0;
     i84 = i77 + 32 | 0;
     i76 = HEAP32[i84 >> 2] | 0;
     do {
      if ((i76 & 1 | 0) == 0) {
       i105 = HEAP32[i27 >> 2] | 0;
       i106 = i76;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i36 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i105 = HEAP32[i27 >> 2] | 0;
        i106 = i76;
        break;
       } else {
        i78 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i1) | 0;
        i105 = i78;
        i106 = HEAP32[i84 >> 2] | 0;
        break;
       }
      }
     } while (0);
     d89 = +HEAPF32[((i106 & 2048 | 0) == 0 ? i77 + 20 | 0 : i77 + 24 | 0) >> 2];
     i84 = HEAP32[i77 + 16 >> 2] | 0;
     i76 = i84;
     do {
      if ((i106 & 1 | 0) == 0) {
       i107 = HEAP32[i84 + 36 >> 2] | 0;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i84 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i107 = HEAP32[i84 + 36 >> 2] | 0;
        break;
       } else {
        i107 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i76) | 0;
        break;
       }
      }
     } while (0);
     i76 = __ZNK7WebCore11RenderStyle4fontEv(i107) | 0;
     i84 = HEAP32[i76 + 24 >> 2] | 0;
     i77 = i84 + 44 | 0;
     i78 = HEAP32[i77 >> 2] | 0;
     if ((i78 | 0) == 0) {
      i81 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i84, i76 | 0, 0) | 0;
      i76 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i81 >> 2] | 0) + 8 >> 2] & 15](i81, 32) | 0;
      HEAP32[i77 >> 2] = i76;
      i108 = i76;
     } else {
      i108 = i78;
     }
     i78 = _round(+(+HEAPF32[i108 + 16 >> 2])) | 0;
     i76 = __ZNK7WebCore11RenderStyle4fontEv(i105) | 0;
     i77 = HEAP32[i76 + 24 >> 2] | 0;
     i81 = i77 + 44 | 0;
     i84 = HEAP32[i81 >> 2] | 0;
     if ((i84 | 0) == 0) {
      i75 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i77, i76 | 0, 0) | 0;
      i76 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i75 >> 2] | 0) + 8 >> 2] & 15](i75, 32) | 0;
      HEAP32[i81 >> 2] = i76;
      i109 = i76;
     } else {
      i109 = i84;
     }
     i84 = ~~(d89 + +(i78 - (_round(+(+HEAPF32[i109 + 16 >> 2])) | 0) | 0));
     i78 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i105) | 0;
     i76 = _round(+(+HEAPF32[i78 + 4 >> 2])) | 0;
     i81 = (_round(+(+HEAPF32[i78 + 8 >> 2])) | 0) + i76 | 0;
     if ((i9 | 0) == 3 | (i9 | 0) == 0) {
      d90 = +HEAPF32[i104 + 20 >> 2];
      i76 = i104 + 56 | 0;
      do {
       if ((HEAP32[i76 >> 2] & 1 | 0) == 0) {
        HEAP32[i52 >> 2] = 0;
       } else {
        i78 = HEAP32[i104 + 16 >> 2] | 0;
        i75 = i78;
        i77 = HEAP32[i78 >> 2] | 0;
        if ((HEAP32[i104 + 32 >> 2] & 2048 | 0) == 0) {
         FUNCTION_TABLE_vii[HEAP32[i77 + 768 >> 2] & 127](i15, i75);
         break;
        } else {
         FUNCTION_TABLE_vii[HEAP32[i77 + 776 >> 2] & 127](i15, i75);
         break;
        }
       }
      } while (0);
      d89 = d90 - +(HEAP32[i52 >> 2] | 0);
      d98 = +(i84 | 0);
      d110 = +HEAPF32[i104 + 28 >> 2];
      do {
       if ((HEAP32[i76 >> 2] & 1 | 0) == 0) {
        HEAP32[i53 >> 2] = 0;
       } else {
        i75 = HEAP32[i104 + 16 >> 2] | 0;
        i77 = i75;
        i78 = HEAP32[i75 >> 2] | 0;
        if ((HEAP32[i104 + 32 >> 2] & 2048 | 0) == 0) {
         FUNCTION_TABLE_vii[HEAP32[i78 + 768 >> 2] & 127](i16, i77);
         break;
        } else {
         FUNCTION_TABLE_vii[HEAP32[i78 + 776 >> 2] & 127](i16, i77);
         break;
        }
       }
      } while (0);
      d90 = d110 + +(HEAP32[i53 >> 2] | 0);
      do {
       if ((HEAP32[i76 >> 2] & 2 | 0) == 0) {
        HEAP32[i54 >> 2] = 0;
       } else {
        i77 = HEAP32[i104 + 16 >> 2] | 0;
        i78 = i77;
        i75 = HEAP32[i77 >> 2] | 0;
        if ((HEAP32[i104 + 32 >> 2] & 2048 | 0) == 0) {
         FUNCTION_TABLE_vii[HEAP32[i75 + 772 >> 2] & 127](i17, i78);
         break;
        } else {
         FUNCTION_TABLE_vii[HEAP32[i75 + 780 >> 2] & 127](i17, i78);
         break;
        }
       }
      } while (0);
      d110 = d90 + +(HEAP32[i54 >> 2] | 0);
      HEAPF32[i55 >> 2] = d89;
      HEAPF32[i56 >> 2] = d98;
      HEAPF32[i57 >> 2] = d110;
      HEAPF32[i58 >> 2] = +(i81 | 0);
      __ZN7WebCore12_GLOBAL__N_129AbsoluteQuadsGeneratorContextclERKNS_9FloatRectE(i2, i14);
     } else {
      d110 = +(i84 | 0);
      d111 = +HEAPF32[i104 + 24 >> 2];
      i76 = i104 + 56 | 0;
      do {
       if ((HEAP32[i76 >> 2] & 1 | 0) == 0) {
        HEAP32[i45 >> 2] = 0;
       } else {
        i78 = HEAP32[i104 + 16 >> 2] | 0;
        i75 = i78;
        i77 = HEAP32[i78 >> 2] | 0;
        if ((HEAP32[i104 + 32 >> 2] & 2048 | 0) == 0) {
         FUNCTION_TABLE_vii[HEAP32[i77 + 768 >> 2] & 127](i19, i75);
         break;
        } else {
         FUNCTION_TABLE_vii[HEAP32[i77 + 776 >> 2] & 127](i19, i75);
         break;
        }
       }
      } while (0);
      d98 = d111 - +(HEAP32[i45 >> 2] | 0);
      d89 = +(i81 | 0);
      d90 = +HEAPF32[i104 + 28 >> 2];
      do {
       if ((HEAP32[i76 >> 2] & 1 | 0) == 0) {
        HEAP32[i46 >> 2] = 0;
       } else {
        i84 = HEAP32[i104 + 16 >> 2] | 0;
        i75 = i84;
        i77 = HEAP32[i84 >> 2] | 0;
        if ((HEAP32[i104 + 32 >> 2] & 2048 | 0) == 0) {
         FUNCTION_TABLE_vii[HEAP32[i77 + 768 >> 2] & 127](i20, i75);
         break;
        } else {
         FUNCTION_TABLE_vii[HEAP32[i77 + 776 >> 2] & 127](i20, i75);
         break;
        }
       }
      } while (0);
      d111 = d90 + +(HEAP32[i46 >> 2] | 0);
      do {
       if ((HEAP32[i76 >> 2] & 2 | 0) == 0) {
        HEAP32[i47 >> 2] = 0;
       } else {
        i81 = HEAP32[i104 + 16 >> 2] | 0;
        i75 = i81;
        i77 = HEAP32[i81 >> 2] | 0;
        if ((HEAP32[i104 + 32 >> 2] & 2048 | 0) == 0) {
         FUNCTION_TABLE_vii[HEAP32[i77 + 772 >> 2] & 127](i21, i75);
         break;
        } else {
         FUNCTION_TABLE_vii[HEAP32[i77 + 780 >> 2] & 127](i21, i75);
         break;
        }
       }
      } while (0);
      d90 = d111 + +(HEAP32[i47 >> 2] | 0);
      HEAPF32[i48 >> 2] = d110;
      HEAPF32[i49 >> 2] = d98;
      HEAPF32[i50 >> 2] = d89;
      HEAPF32[i51 >> 2] = d90;
      __ZN7WebCore12_GLOBAL__N_129AbsoluteQuadsGeneratorContextclERKNS_9FloatRectE(i2, i18);
     }
     i104 = HEAP32[i104 + 52 >> 2] | 0;
     if ((i104 | 0) == 0) {
      break;
     }
    }
   }
  } while (0);
  i73 = HEAP32[i73 + 16 >> 2] | 0;
  if ((i73 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore12RenderInline26generateCulledLineBoxRectsINS_12_GLOBAL__N_132LinesBoundingBoxGeneratorContextEEEvRT_PKS0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, d83 = +0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, d90 = +0, d91 = +0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, d99 = +0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, d111 = +0, d112 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 240 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 64 | 0;
 i12 = i4 + 72 | 0;
 i13 = i4 + 88 | 0;
 i14 = i4 + 96 | 0;
 i15 = i4 + 112 | 0;
 i16 = i4 + 120 | 0;
 i17 = i4 + 128 | 0;
 i18 = i4 + 136 | 0;
 i19 = i4 + 152 | 0;
 i20 = i4 + 160 | 0;
 i21 = i4 + 168 | 0;
 i22 = i4 + 176 | 0;
 i23 = i4 + 192 | 0;
 i24 = i4 + 208 | 0;
 i25 = i4 + 224 | 0;
 if ((__ZNK7WebCore12RenderInline24culledInlineFirstLineBoxEv(i1) | 0) == 0) {
  _memset(i9 | 0, 0, 16) | 0;
  __ZN7WebCore9FloatRect14uniteIfNonZeroERKS0_(HEAP32[i2 >> 2] | 0, i9);
  STACKTOP = i4;
  return;
 }
 i9 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i26 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i26 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i3 | 0;
 i27 = i3 + 36 | 0;
 i28 = i23 | 0;
 i29 = i23 + 4 | 0;
 i30 = i23 + 8 | 0;
 i31 = i23 + 12 | 0;
 i32 = i2 | 0;
 i33 = i22 | 0;
 i34 = i22 + 4 | 0;
 i35 = i22 + 8 | 0;
 i36 = i22 + 12 | 0;
 i37 = i3 + 4 | 0;
 i38 = i25 | 0;
 i39 = i25 + 4 | 0;
 i40 = i25 + 8 | 0;
 i41 = i25 + 12 | 0;
 i42 = i24 | 0;
 i43 = i24 + 4 | 0;
 i44 = i24 + 8 | 0;
 i45 = i24 + 12 | 0;
 i46 = i19 | 0;
 i47 = i20 | 0;
 i48 = i21 | 0;
 i49 = i18 | 0;
 i50 = i18 + 4 | 0;
 i51 = i18 + 8 | 0;
 i52 = i18 + 12 | 0;
 i53 = i15 | 0;
 i54 = i16 | 0;
 i55 = i17 | 0;
 i56 = i14 | 0;
 i57 = i14 + 4 | 0;
 i58 = i14 + 8 | 0;
 i59 = i14 + 12 | 0;
 i60 = i13 | 0;
 i61 = i5 | 0;
 i62 = i6 | 0;
 i63 = i12 | 0;
 i64 = i12 + 4 | 0;
 i65 = i12 + 8 | 0;
 i66 = i12 + 12 | 0;
 i67 = i11 | 0;
 i68 = i7 | 0;
 i69 = i8 | 0;
 i70 = i10 | 0;
 i71 = i10 + 4 | 0;
 i72 = i10 + 8 | 0;
 i73 = i10 + 12 | 0;
 i74 = i26;
 while (1) {
  i26 = HEAP32[i74 + 20 >> 2] | 0;
  L10 : do {
   if (!((i26 & 64 | 0) != 0 | (i26 & 25165824 | 0) == 16777216)) {
    if ((i26 & 512 | 0) != 0) {
     i75 = i74;
     i76 = i74 + 84 | 0;
     i77 = HEAP32[i76 >> 2] | 0;
     if ((i77 | 0) == 0) {
      break;
     }
     i78 = __ZN7WebCore9InlineBox4rootEv(i77) | 0;
     i77 = i78 + 32 | 0;
     i79 = HEAP32[i77 >> 2] | 0;
     do {
      if ((i79 & 1 | 0) == 0) {
       i80 = HEAP32[i27 >> 2] | 0;
       i81 = i79;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i37 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i80 = HEAP32[i27 >> 2] | 0;
        i81 = i79;
        break;
       } else {
        i82 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i1) | 0;
        i80 = i82;
        i81 = HEAP32[i77 >> 2] | 0;
        break;
       }
      }
     } while (0);
     d83 = +HEAPF32[((i81 & 2048 | 0) == 0 ? i78 + 20 | 0 : i78 + 24 | 0) >> 2];
     i77 = HEAP32[i78 + 16 >> 2] | 0;
     i79 = i77;
     do {
      if ((i81 & 1 | 0) == 0) {
       i84 = HEAP32[i77 + 36 >> 2] | 0;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i77 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i84 = HEAP32[i77 + 36 >> 2] | 0;
        break;
       } else {
        i84 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i79) | 0;
        break;
       }
      }
     } while (0);
     i79 = __ZNK7WebCore11RenderStyle4fontEv(i84) | 0;
     i77 = HEAP32[i79 + 24 >> 2] | 0;
     i78 = i77 + 44 | 0;
     i82 = HEAP32[i78 >> 2] | 0;
     if ((i82 | 0) == 0) {
      i85 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i77, i79 | 0, 0) | 0;
      i79 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i85 >> 2] | 0) + 8 >> 2] & 15](i85, 32) | 0;
      HEAP32[i78 >> 2] = i79;
      i86 = i79;
     } else {
      i86 = i82;
     }
     i82 = _round(+(+HEAPF32[i86 + 16 >> 2])) | 0;
     i79 = __ZNK7WebCore11RenderStyle4fontEv(i80) | 0;
     i78 = HEAP32[i79 + 24 >> 2] | 0;
     i85 = i78 + 44 | 0;
     i77 = HEAP32[i85 >> 2] | 0;
     if ((i77 | 0) == 0) {
      i87 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i78, i79 | 0, 0) | 0;
      i79 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i87 >> 2] | 0) + 8 >> 2] & 15](i87, 32) | 0;
      HEAP32[i85 >> 2] = i79;
      i88 = i79;
     } else {
      i88 = i77;
     }
     i77 = ~~(d83 + +(i82 - (_round(+(+HEAPF32[i88 + 16 >> 2])) | 0) | 0));
     i82 = __ZNK7WebCore11RenderStyle4fontEv(i80) | 0;
     i79 = HEAP32[i82 + 24 >> 2] | 0;
     i85 = i79 + 44 | 0;
     i87 = HEAP32[i85 >> 2] | 0;
     if ((i87 | 0) == 0) {
      i78 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i79, i82 | 0, 0) | 0;
      i82 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i78 >> 2] | 0) + 8 >> 2] & 15](i78, 32) | 0;
      HEAP32[i85 >> 2] = i82;
      i89 = i82;
     } else {
      i89 = i87;
     }
     i87 = _round(+(+HEAPF32[i89 + 16 >> 2])) | 0;
     i82 = (_round(+(+HEAPF32[i89 + 20 >> 2])) | 0) + i87 | 0;
     if ((i9 | 0) == 3 | (i9 | 0) == 0) {
      d90 = +HEAPF32[(HEAP32[i76 >> 2] | 0) + 20 >> 2];
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i74 >> 2] | 0) + 776 >> 2] & 127](i11, i75);
      d91 = d90 - +(HEAP32[i67 >> 2] | 0);
      i87 = HEAP32[i74 + 52 >> 2] | 0;
      i85 = i74;
      i78 = i74;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i78 >> 2] | 0) + 776 >> 2] & 127](i7, i85);
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i78 >> 2] | 0) + 780 >> 2] & 127](i8, i85);
      d90 = +((HEAP32[i68 >> 2] | 0) + i87 + (HEAP32[i69 >> 2] | 0) | 0);
      HEAPF32[i70 >> 2] = d91;
      HEAPF32[i71 >> 2] = +(i77 | 0);
      HEAPF32[i72 >> 2] = d90;
      HEAPF32[i73 >> 2] = +(i82 | 0);
      __ZN7WebCore9FloatRect14uniteIfNonZeroERKS0_(HEAP32[i32 >> 2] | 0, i10);
      break;
     } else {
      d90 = +HEAPF32[(HEAP32[i76 >> 2] | 0) + 24 >> 2];
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i74 >> 2] | 0) + 768 >> 2] & 127](i13, i75);
      d91 = d90 - +(HEAP32[i60 >> 2] | 0);
      i87 = HEAP32[i74 + 56 >> 2] | 0;
      i85 = i74;
      i78 = i74;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i78 >> 2] | 0) + 768 >> 2] & 127](i5, i85);
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i78 >> 2] | 0) + 772 >> 2] & 127](i6, i85);
      d90 = +((HEAP32[i61 >> 2] | 0) + i87 + (HEAP32[i62 >> 2] | 0) | 0);
      HEAPF32[i63 >> 2] = +(i77 | 0);
      HEAPF32[i64 >> 2] = d91;
      HEAPF32[i65 >> 2] = +(i82 | 0);
      HEAPF32[i66 >> 2] = d90;
      __ZN7WebCore9FloatRect14uniteIfNonZeroERKS0_(HEAP32[i32 >> 2] | 0, i12);
      break;
     }
    }
    if ((i26 & 768 | 0) == 256) {
     i82 = HEAP32[i74 + 48 >> 2] | 0;
     if ((i82 | 0) == 0) {
      break;
     } else {
      i92 = i82;
     }
     while (1) {
      i82 = __ZN7WebCore9InlineBox4rootEv(i92 | 0) | 0;
      i77 = i82 + 32 | 0;
      i87 = HEAP32[i77 >> 2] | 0;
      do {
       if ((i87 & 1 | 0) == 0) {
        i93 = HEAP32[i27 >> 2] | 0;
        i94 = i87;
       } else {
        if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i37 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
         i93 = HEAP32[i27 >> 2] | 0;
         i94 = i87;
         break;
        } else {
         i85 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i1) | 0;
         i93 = i85;
         i94 = HEAP32[i77 >> 2] | 0;
         break;
        }
       }
      } while (0);
      d90 = +HEAPF32[((i94 & 2048 | 0) == 0 ? i82 + 20 | 0 : i82 + 24 | 0) >> 2];
      i77 = HEAP32[i82 + 16 >> 2] | 0;
      i87 = i77;
      do {
       if ((i94 & 1 | 0) == 0) {
        i95 = HEAP32[i77 + 36 >> 2] | 0;
       } else {
        if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i77 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
         i95 = HEAP32[i77 + 36 >> 2] | 0;
         break;
        } else {
         i95 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i87) | 0;
         break;
        }
       }
      } while (0);
      i87 = __ZNK7WebCore11RenderStyle4fontEv(i95) | 0;
      i77 = HEAP32[i87 + 24 >> 2] | 0;
      i82 = i77 + 44 | 0;
      i85 = HEAP32[i82 >> 2] | 0;
      if ((i85 | 0) == 0) {
       i78 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i77, i87 | 0, 0) | 0;
       i87 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i78 >> 2] | 0) + 8 >> 2] & 15](i78, 32) | 0;
       HEAP32[i82 >> 2] = i87;
       i96 = i87;
      } else {
       i96 = i85;
      }
      i85 = _round(+(+HEAPF32[i96 + 16 >> 2])) | 0;
      i87 = __ZNK7WebCore11RenderStyle4fontEv(i93) | 0;
      i82 = HEAP32[i87 + 24 >> 2] | 0;
      i78 = i82 + 44 | 0;
      i77 = HEAP32[i78 >> 2] | 0;
      if ((i77 | 0) == 0) {
       i79 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i82, i87 | 0, 0) | 0;
       i87 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i79 >> 2] | 0) + 8 >> 2] & 15](i79, 32) | 0;
       HEAP32[i78 >> 2] = i87;
       i97 = i87;
      } else {
       i97 = i77;
      }
      i77 = ~~(d90 + +(i85 - (_round(+(+HEAPF32[i97 + 16 >> 2])) | 0) | 0));
      i85 = __ZNK7WebCore11RenderStyle4fontEv(i93) | 0;
      i87 = HEAP32[i85 + 24 >> 2] | 0;
      i78 = i87 + 44 | 0;
      i79 = HEAP32[i78 >> 2] | 0;
      if ((i79 | 0) == 0) {
       i82 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i87, i85 | 0, 0) | 0;
       i85 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i82 >> 2] | 0) + 8 >> 2] & 15](i82, 32) | 0;
       HEAP32[i78 >> 2] = i85;
       i98 = i85;
      } else {
       i98 = i79;
      }
      i79 = _round(+(+HEAPF32[i98 + 16 >> 2])) | 0;
      i85 = (_round(+(+HEAPF32[i98 + 20 >> 2])) | 0) + i79 | 0;
      if ((i9 | 0) == 3 | (i9 | 0) == 0) {
       d91 = +HEAPF32[i92 + 28 >> 2];
       HEAPF32[i33 >> 2] = +HEAPF32[i92 + 20 >> 2];
       HEAPF32[i34 >> 2] = +(i77 | 0);
       HEAPF32[i35 >> 2] = d91;
       HEAPF32[i36 >> 2] = +(i85 | 0);
       __ZN7WebCore9FloatRect14uniteIfNonZeroERKS0_(HEAP32[i32 >> 2] | 0, i22);
      } else {
       d91 = +HEAPF32[i92 + 24 >> 2];
       d99 = +HEAPF32[i92 + 28 >> 2];
       HEAPF32[i28 >> 2] = +(i77 | 0);
       HEAPF32[i29 >> 2] = d91;
       HEAPF32[i30 >> 2] = +(i85 | 0);
       HEAPF32[i31 >> 2] = d99;
       __ZN7WebCore9FloatRect14uniteIfNonZeroERKS0_(HEAP32[i32 >> 2] | 0, i23);
      }
      i92 = HEAP32[i92 + 40 >> 2] | 0;
      if ((i92 | 0) == 0) {
       break L10;
      }
     }
    }
    if ((HEAP32[i74 + 24 >> 2] & 4 | 0) == 0) {
     if ((i26 & 4096 | 0) == 0) {
      break;
     }
     i75 = HEAP32[i74 + 44 >> 2] | 0;
     if ((i75 | 0) == 0) {
      break;
     }
     i76 = __ZN7WebCore9InlineBox4rootEv(i75 | 0) | 0;
     i85 = i76 + 32 | 0;
     i77 = HEAP32[i85 >> 2] | 0;
     do {
      if ((i77 & 1 | 0) == 0) {
       i100 = HEAP32[i27 >> 2] | 0;
       i101 = i77;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i37 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i100 = HEAP32[i27 >> 2] | 0;
        i101 = i77;
        break;
       } else {
        i79 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i1) | 0;
        i100 = i79;
        i101 = HEAP32[i85 >> 2] | 0;
        break;
       }
      }
     } while (0);
     d83 = +HEAPF32[((i101 & 2048 | 0) == 0 ? i76 + 20 | 0 : i76 + 24 | 0) >> 2];
     i85 = HEAP32[i76 + 16 >> 2] | 0;
     i77 = i85;
     do {
      if ((i101 & 1 | 0) == 0) {
       i102 = HEAP32[i85 + 36 >> 2] | 0;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i85 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i102 = HEAP32[i85 + 36 >> 2] | 0;
        break;
       } else {
        i102 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i77) | 0;
        break;
       }
      }
     } while (0);
     i77 = __ZNK7WebCore11RenderStyle4fontEv(i102) | 0;
     i85 = HEAP32[i77 + 24 >> 2] | 0;
     i76 = i85 + 44 | 0;
     i79 = HEAP32[i76 >> 2] | 0;
     if ((i79 | 0) == 0) {
      i78 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i85, i77 | 0, 0) | 0;
      i77 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i78 >> 2] | 0) + 8 >> 2] & 15](i78, 32) | 0;
      HEAP32[i76 >> 2] = i77;
      i103 = i77;
     } else {
      i103 = i79;
     }
     i79 = _round(+(+HEAPF32[i103 + 16 >> 2])) | 0;
     i77 = __ZNK7WebCore11RenderStyle4fontEv(i100) | 0;
     i76 = HEAP32[i77 + 24 >> 2] | 0;
     i78 = i76 + 44 | 0;
     i85 = HEAP32[i78 >> 2] | 0;
     if ((i85 | 0) == 0) {
      i82 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i76, i77 | 0, 0) | 0;
      i77 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i82 >> 2] | 0) + 8 >> 2] & 15](i82, 32) | 0;
      HEAP32[i78 >> 2] = i77;
      i104 = i77;
     } else {
      i104 = i85;
     }
     i85 = ~~(d83 + +(i79 - (_round(+(+HEAPF32[i104 + 16 >> 2])) | 0) | 0));
     i79 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i100) | 0;
     i77 = _round(+(+HEAPF32[i79 + 4 >> 2])) | 0;
     i78 = (_round(+(+HEAPF32[i79 + 8 >> 2])) | 0) + i77 | 0;
     if ((i9 | 0) == 3 | (i9 | 0) == 0) {
      d99 = +HEAPF32[i75 + 28 >> 2];
      HEAPF32[i42 >> 2] = +HEAPF32[i75 + 20 >> 2];
      HEAPF32[i43 >> 2] = +(i85 | 0);
      HEAPF32[i44 >> 2] = d99;
      HEAPF32[i45 >> 2] = +(i78 | 0);
      __ZN7WebCore9FloatRect14uniteIfNonZeroERKS0_(HEAP32[i32 >> 2] | 0, i24);
      break;
     } else {
      d99 = +HEAPF32[i75 + 24 >> 2];
      d91 = +HEAPF32[i75 + 28 >> 2];
      HEAPF32[i38 >> 2] = +(i85 | 0);
      HEAPF32[i39 >> 2] = d99;
      HEAPF32[i40 >> 2] = +(i78 | 0);
      HEAPF32[i41 >> 2] = d91;
      __ZN7WebCore9FloatRect14uniteIfNonZeroERKS0_(HEAP32[i32 >> 2] | 0, i25);
      break;
     }
    }
    i78 = i74;
    if ((HEAP8[i78 + 25 | 0] & 1) == 0) {
     __ZNK7WebCore12RenderInline26generateCulledLineBoxRectsINS_12_GLOBAL__N_132LinesBoundingBoxGeneratorContextEEEvRT_PKS0_(i78, i2, i3);
     break;
    }
    i78 = HEAP32[i74 + 44 >> 2] | 0;
    if ((i78 | 0) == 0) {
     break;
    } else {
     i105 = i78;
    }
    while (1) {
     i78 = __ZN7WebCore9InlineBox4rootEv(i105 | 0) | 0;
     i85 = i78 + 32 | 0;
     i77 = HEAP32[i85 >> 2] | 0;
     do {
      if ((i77 & 1 | 0) == 0) {
       i106 = HEAP32[i27 >> 2] | 0;
       i107 = i77;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i37 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i106 = HEAP32[i27 >> 2] | 0;
        i107 = i77;
        break;
       } else {
        i79 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i1) | 0;
        i106 = i79;
        i107 = HEAP32[i85 >> 2] | 0;
        break;
       }
      }
     } while (0);
     d90 = +HEAPF32[((i107 & 2048 | 0) == 0 ? i78 + 20 | 0 : i78 + 24 | 0) >> 2];
     i85 = HEAP32[i78 + 16 >> 2] | 0;
     i77 = i85;
     do {
      if ((i107 & 1 | 0) == 0) {
       i108 = HEAP32[i85 + 36 >> 2] | 0;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i85 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i108 = HEAP32[i85 + 36 >> 2] | 0;
        break;
       } else {
        i108 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i77) | 0;
        break;
       }
      }
     } while (0);
     i77 = __ZNK7WebCore11RenderStyle4fontEv(i108) | 0;
     i85 = HEAP32[i77 + 24 >> 2] | 0;
     i78 = i85 + 44 | 0;
     i79 = HEAP32[i78 >> 2] | 0;
     if ((i79 | 0) == 0) {
      i82 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i85, i77 | 0, 0) | 0;
      i77 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i82 >> 2] | 0) + 8 >> 2] & 15](i82, 32) | 0;
      HEAP32[i78 >> 2] = i77;
      i109 = i77;
     } else {
      i109 = i79;
     }
     i79 = _round(+(+HEAPF32[i109 + 16 >> 2])) | 0;
     i77 = __ZNK7WebCore11RenderStyle4fontEv(i106) | 0;
     i78 = HEAP32[i77 + 24 >> 2] | 0;
     i82 = i78 + 44 | 0;
     i85 = HEAP32[i82 >> 2] | 0;
     if ((i85 | 0) == 0) {
      i76 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i78, i77 | 0, 0) | 0;
      i77 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i76 >> 2] | 0) + 8 >> 2] & 15](i76, 32) | 0;
      HEAP32[i82 >> 2] = i77;
      i110 = i77;
     } else {
      i110 = i85;
     }
     i85 = ~~(d90 + +(i79 - (_round(+(+HEAPF32[i110 + 16 >> 2])) | 0) | 0));
     i79 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i106) | 0;
     i77 = _round(+(+HEAPF32[i79 + 4 >> 2])) | 0;
     i82 = (_round(+(+HEAPF32[i79 + 8 >> 2])) | 0) + i77 | 0;
     if ((i9 | 0) == 3 | (i9 | 0) == 0) {
      d91 = +HEAPF32[i105 + 20 >> 2];
      i77 = i105 + 56 | 0;
      do {
       if ((HEAP32[i77 >> 2] & 1 | 0) == 0) {
        HEAP32[i53 >> 2] = 0;
       } else {
        i79 = HEAP32[i105 + 16 >> 2] | 0;
        i76 = i79;
        i78 = HEAP32[i79 >> 2] | 0;
        if ((HEAP32[i105 + 32 >> 2] & 2048 | 0) == 0) {
         FUNCTION_TABLE_vii[HEAP32[i78 + 768 >> 2] & 127](i15, i76);
         break;
        } else {
         FUNCTION_TABLE_vii[HEAP32[i78 + 776 >> 2] & 127](i15, i76);
         break;
        }
       }
      } while (0);
      d90 = d91 - +(HEAP32[i53 >> 2] | 0);
      d99 = +(i85 | 0);
      d111 = +HEAPF32[i105 + 28 >> 2];
      do {
       if ((HEAP32[i77 >> 2] & 1 | 0) == 0) {
        HEAP32[i54 >> 2] = 0;
       } else {
        i76 = HEAP32[i105 + 16 >> 2] | 0;
        i78 = i76;
        i79 = HEAP32[i76 >> 2] | 0;
        if ((HEAP32[i105 + 32 >> 2] & 2048 | 0) == 0) {
         FUNCTION_TABLE_vii[HEAP32[i79 + 768 >> 2] & 127](i16, i78);
         break;
        } else {
         FUNCTION_TABLE_vii[HEAP32[i79 + 776 >> 2] & 127](i16, i78);
         break;
        }
       }
      } while (0);
      d91 = d111 + +(HEAP32[i54 >> 2] | 0);
      do {
       if ((HEAP32[i77 >> 2] & 2 | 0) == 0) {
        HEAP32[i55 >> 2] = 0;
       } else {
        i78 = HEAP32[i105 + 16 >> 2] | 0;
        i79 = i78;
        i76 = HEAP32[i78 >> 2] | 0;
        if ((HEAP32[i105 + 32 >> 2] & 2048 | 0) == 0) {
         FUNCTION_TABLE_vii[HEAP32[i76 + 772 >> 2] & 127](i17, i79);
         break;
        } else {
         FUNCTION_TABLE_vii[HEAP32[i76 + 780 >> 2] & 127](i17, i79);
         break;
        }
       }
      } while (0);
      d111 = d91 + +(HEAP32[i55 >> 2] | 0);
      HEAPF32[i56 >> 2] = d90;
      HEAPF32[i57 >> 2] = d99;
      HEAPF32[i58 >> 2] = d111;
      HEAPF32[i59 >> 2] = +(i82 | 0);
      __ZN7WebCore9FloatRect14uniteIfNonZeroERKS0_(HEAP32[i32 >> 2] | 0, i14);
     } else {
      d111 = +(i85 | 0);
      d112 = +HEAPF32[i105 + 24 >> 2];
      i77 = i105 + 56 | 0;
      do {
       if ((HEAP32[i77 >> 2] & 1 | 0) == 0) {
        HEAP32[i46 >> 2] = 0;
       } else {
        i79 = HEAP32[i105 + 16 >> 2] | 0;
        i76 = i79;
        i78 = HEAP32[i79 >> 2] | 0;
        if ((HEAP32[i105 + 32 >> 2] & 2048 | 0) == 0) {
         FUNCTION_TABLE_vii[HEAP32[i78 + 768 >> 2] & 127](i19, i76);
         break;
        } else {
         FUNCTION_TABLE_vii[HEAP32[i78 + 776 >> 2] & 127](i19, i76);
         break;
        }
       }
      } while (0);
      d99 = d112 - +(HEAP32[i46 >> 2] | 0);
      d90 = +(i82 | 0);
      d91 = +HEAPF32[i105 + 28 >> 2];
      do {
       if ((HEAP32[i77 >> 2] & 1 | 0) == 0) {
        HEAP32[i47 >> 2] = 0;
       } else {
        i85 = HEAP32[i105 + 16 >> 2] | 0;
        i76 = i85;
        i78 = HEAP32[i85 >> 2] | 0;
        if ((HEAP32[i105 + 32 >> 2] & 2048 | 0) == 0) {
         FUNCTION_TABLE_vii[HEAP32[i78 + 768 >> 2] & 127](i20, i76);
         break;
        } else {
         FUNCTION_TABLE_vii[HEAP32[i78 + 776 >> 2] & 127](i20, i76);
         break;
        }
       }
      } while (0);
      d112 = d91 + +(HEAP32[i47 >> 2] | 0);
      do {
       if ((HEAP32[i77 >> 2] & 2 | 0) == 0) {
        HEAP32[i48 >> 2] = 0;
       } else {
        i82 = HEAP32[i105 + 16 >> 2] | 0;
        i76 = i82;
        i78 = HEAP32[i82 >> 2] | 0;
        if ((HEAP32[i105 + 32 >> 2] & 2048 | 0) == 0) {
         FUNCTION_TABLE_vii[HEAP32[i78 + 772 >> 2] & 127](i21, i76);
         break;
        } else {
         FUNCTION_TABLE_vii[HEAP32[i78 + 780 >> 2] & 127](i21, i76);
         break;
        }
       }
      } while (0);
      d91 = d112 + +(HEAP32[i48 >> 2] | 0);
      HEAPF32[i49 >> 2] = d111;
      HEAPF32[i50 >> 2] = d99;
      HEAPF32[i51 >> 2] = d90;
      HEAPF32[i52 >> 2] = d91;
      __ZN7WebCore9FloatRect14uniteIfNonZeroERKS0_(HEAP32[i32 >> 2] | 0, i18);
     }
     i105 = HEAP32[i105 + 52 >> 2] | 0;
     if ((i105 | 0) == 0) {
      break;
     }
    }
   }
  } while (0);
  i74 = HEAP32[i74 + 16 >> 2] | 0;
  if ((i74 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12RenderInline19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, d74 = +0, i75 = 0, d76 = +0, d77 = +0, i78 = 0, d79 = +0, i80 = 0, d81 = +0, i82 = 0, d83 = +0, d84 = +0, i85 = 0, d86 = +0, d87 = +0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 56 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = HEAP32[i1 + 36 >> 2] | 0;
 if ((HEAP32[i12 + 40 >> 2] & 6144 | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEEC2ERKS4_(i4, (HEAP32[i12 + 20 >> 2] | 0) + 44 | 0);
 i12 = i4 + 8 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i4 | 0;
 do {
  if ((i13 | 0) == 0) {
   i15 = 87;
  } else {
   i16 = HEAP32[i14 >> 2] | 0;
   i17 = i5 | 0;
   i18 = i5 + 4 | 0;
   i19 = i18;
   i20 = i18 | 0;
   i21 = i5 + 12 | 0;
   i22 = i21;
   i23 = i5 + 20 | 0;
   i24 = i23;
   i25 = i5 + 28 | 0;
   i26 = i25;
   i27 = i5 + 36 | 0;
   i28 = i6 + 8 | 0;
   i29 = i9;
   i30 = i9 + 16 | 0;
   i31 = i5 + 10 | 0;
   i32 = i18 | 0;
   i33 = i5 + 26 | 0;
   i34 = i23 | 0;
   i35 = i5 + 18 | 0;
   i36 = i21 | 0;
   i37 = i5 + 34 | 0;
   i38 = i25 | 0;
   i39 = i9 | 0;
   i40 = i9 + 4 | 0;
   i41 = i9 + 8 | 0;
   i42 = i9 + 12 | 0;
   i43 = i9 + 36 | 0;
   i44 = i1 | 0;
   i45 = i9 + 20 | 0;
   i46 = i45;
   i47 = i9 + 32 | 0;
   i48 = i9 + 28 | 0;
   i49 = i11 | 0;
   i50 = i11 + 4 | 0;
   i51 = i10 | 0;
   i52 = i10 + 4 | 0;
   i53 = i2 + 8 | 0;
   i54 = i2 + 4 | 0;
   i55 = i2 | 0;
   i56 = i9;
   i57 = i5 + 33 | 0;
   i58 = i5 + 25 | 0;
   i59 = i5 + 17 | 0;
   i60 = i5 + 9 | 0;
   i61 = i5 + 4 | 0;
   i62 = i25;
   i63 = i23;
   i64 = i21;
   i65 = i18;
   i18 = 0;
   while (1) {
    if (i13 >>> 0 <= i18 >>> 0) {
     i15 = 5;
     break;
    }
    i66 = HEAP32[i16 + (i18 * 40 & -1) >> 2] | 0;
    HEAP32[i17 >> 2] = i66;
    if ((i66 | 0) != 0) {
     i67 = i66 | 0;
     HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 2;
    }
    i67 = i16 + (i18 * 40 & -1) + 4 | 0;
    i66 = HEAP32[i67 >> 2] | 0;
    i68 = HEAP32[i67 + 4 >> 2] | 0;
    HEAP32[i19 >> 2] = i66;
    HEAP32[i19 + 4 >> 2] = i68;
    if ((i66 & 0 | 0) == 0 & (i68 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i20);
    }
    i68 = i16 + (i18 * 40 & -1) + 12 | 0;
    i66 = HEAP32[i68 >> 2] | 0;
    i67 = HEAP32[i68 + 4 >> 2] | 0;
    HEAP32[i22 >> 2] = i66;
    HEAP32[i22 + 4 >> 2] = i67;
    if ((i66 & 0 | 0) == 0 & (i67 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i21);
    }
    i67 = i16 + (i18 * 40 & -1) + 20 | 0;
    i66 = HEAP32[i67 >> 2] | 0;
    i68 = HEAP32[i67 + 4 >> 2] | 0;
    HEAP32[i24 >> 2] = i66;
    HEAP32[i24 + 4 >> 2] = i68;
    if ((i66 & 0 | 0) == 0 & (i68 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i23);
    }
    i68 = i16 + (i18 * 40 & -1) + 28 | 0;
    i66 = HEAP32[i68 >> 2] | 0;
    i67 = HEAP32[i68 + 4 >> 2] | 0;
    HEAP32[i26 >> 2] = i66;
    HEAP32[i26 + 4 >> 2] = i67;
    if ((i66 & 0 | 0) == 0 & (i67 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i25);
    }
    HEAP32[i27 >> 2] = HEAP32[i16 + (i18 * 40 & -1) + 36 >> 2];
    __ZNK7WebCore12RenderInline16linesBoundingBoxEv(i8, i1);
    i67 = HEAP32[i7 >> 2] | 0;
    i66 = HEAP32[i7 + 4 >> 2] | 0;
    i68 = HEAP32[i28 >> 2] | 0;
    i69 = HEAP32[i28 + 4 >> 2] | 0;
    _memset(i29 | 0, 0, 36) | 0;
    i70 = HEAP32[i17 >> 2] | 0;
    do {
     if ((i70 | 0) == 0) {
      HEAP32[i30 >> 2] = i70;
     } else {
      i71 = i70 | 0;
      HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 2;
      i71 = HEAP32[i30 >> 2] | 0;
      HEAP32[i30 >> 2] = i70;
      if ((i71 | 0) == 0) {
       break;
      }
      i72 = i71 | 0;
      i73 = (HEAP32[i72 >> 2] | 0) - 2 | 0;
      if ((i73 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i71);
       break;
      } else {
       HEAP32[i72 >> 2] = i73;
       break;
      }
     }
    } while (0);
    i70 = (HEAP8[i31] & 1) == 0;
    if (i70) {
     i73 = HEAP32[i32 >> 2] | 0;
     d74 = +(i73 | 0);
     i75 = i73;
     d76 = (HEAP32[tempDoublePtr >> 2] = i73, +HEAPF32[tempDoublePtr >> 2]);
    } else {
     d77 = +HEAPF32[i65 >> 2];
     d74 = d77;
     i75 = (HEAPF32[tempDoublePtr >> 2] = d77, HEAP32[tempDoublePtr >> 2] | 0);
     d76 = d77;
    }
    d77 = +(i67 | 0) + d74;
    do {
     if (d77 < +2147483647) {
      if (d77 <= +-2147483648) {
       i78 = -2147483648;
       break;
      }
      i78 = ~~d77;
     } else {
      i78 = 2147483647;
     }
    } while (0);
    i67 = (HEAP8[i33] & 1) == 0;
    if (i67) {
     i73 = HEAP32[i34 >> 2] | 0;
     d79 = +(i73 | 0);
     i80 = i73;
     d81 = (HEAP32[tempDoublePtr >> 2] = i73, +HEAPF32[tempDoublePtr >> 2]);
    } else {
     d77 = +HEAPF32[i63 >> 2];
     d79 = d77;
     i80 = (HEAPF32[tempDoublePtr >> 2] = d77, HEAP32[tempDoublePtr >> 2] | 0);
     d81 = d77;
    }
    d77 = +(i66 | 0) + d79;
    do {
     if (d77 < +2147483647) {
      if (d77 <= +-2147483648) {
       i82 = -2147483648;
       break;
      }
      i82 = ~~d77;
     } else {
      i82 = 2147483647;
     }
    } while (0);
    if (i70) {
     d83 = +(i75 | 0);
    } else {
     d83 = d76;
    }
    if ((HEAP8[i35] & 1) == 0) {
     d84 = +(HEAP32[i36 >> 2] | 0);
    } else {
     d84 = +HEAPF32[i64 >> 2];
    }
    d77 = +(i68 | 0) - d83 - d84;
    do {
     if (d77 < +2147483647) {
      if (d77 <= +-2147483648) {
       i85 = -2147483648;
       break;
      }
      i85 = ~~d77;
     } else {
      i85 = 2147483647;
     }
    } while (0);
    if (i67) {
     d86 = +(i80 | 0);
    } else {
     d86 = d81;
    }
    if ((HEAP8[i37] & 1) == 0) {
     d87 = +(HEAP32[i38 >> 2] | 0);
    } else {
     d87 = +HEAPF32[i62 >> 2];
    }
    d77 = +(i69 | 0) - d86 - d87;
    do {
     if (d77 < +2147483647) {
      if (d77 <= +-2147483648) {
       i88 = -2147483648;
       break;
      }
      i88 = ~~d77;
     } else {
      i88 = 2147483647;
     }
    } while (0);
    HEAP32[i39 >> 2] = i78;
    HEAP32[i40 >> 2] = i82;
    HEAP32[i41 >> 2] = i85;
    HEAP32[i42 >> 2] = i88;
    HEAP32[i43 >> 2] = HEAP32[i27 >> 2];
    i69 = __ZNK7WebCore12RenderObject15containingBlockEv(i44) | 0;
    i67 = (i69 | 0) == 0 ? i44 : i69 | 0;
    HEAP32[i46 >> 2] = HEAP32[i29 >> 2];
    HEAP32[i46 + 4 >> 2] = HEAP32[i29 + 4 >> 2];
    HEAP32[i46 + 8 >> 2] = HEAP32[i29 + 8 >> 2];
    HEAP32[i46 + 12 >> 2] = HEAP32[i29 + 12 >> 2];
    FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i67 >> 2] | 0) + 512 >> 2] & 15](i67, 0, i45, 0);
    if ((HEAP32[i47 >> 2] | 0) < 0) {
     HEAP32[i47 >> 2] = 0;
     HEAP32[i48 >> 2] = 0;
    }
    HEAPF32[i49 >> 2] = +0;
    HEAPF32[i50 >> 2] = +0;
    __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i10, i67, i11, 0);
    d77 = +HEAPF32[i51 >> 2] + +(HEAP32[i39 >> 2] | 0);
    do {
     if (d77 < +2147483647) {
      if (d77 <= +-2147483648) {
       i89 = -2147483648;
       break;
      }
      i89 = ~~d77;
     } else {
      i89 = 2147483647;
     }
    } while (0);
    HEAP32[i39 >> 2] = i89;
    d77 = +HEAPF32[i52 >> 2] + +(HEAP32[i40 >> 2] | 0);
    do {
     if (d77 < +2147483647) {
      if (d77 <= +-2147483648) {
       i90 = -2147483648;
       break;
      }
      i90 = ~~d77;
     } else {
      i90 = 2147483647;
     }
    } while (0);
    HEAP32[i40 >> 2] = i90;
    i67 = HEAP32[i53 >> 2] | 0;
    if ((i67 | 0) == (HEAP32[i54 >> 2] | 0)) {
     i69 = i67 + 1 | 0;
     i68 = HEAP32[i55 >> 2] | 0;
     do {
      if (i68 >>> 0 > i9 >>> 0) {
       i15 = 64;
      } else {
       if ((i68 + (i67 * 40 & -1) | 0) >>> 0 <= i9 >>> 0) {
        i15 = 64;
        break;
       }
       i70 = i69 + (i67 >>> 2) | 0;
       i66 = i70 >>> 0 > 16 >>> 0 ? i70 : 16;
       __ZN3WTF6VectorIN7WebCore20AnnotatedRegionValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i66 >>> 0 > i69 >>> 0 ? i66 : i69);
       i66 = HEAP32[i55 >> 2] | 0;
       i91 = i66 + (((i56 - i68 | 0) / 40 & -1) * 40 & -1) | 0;
       i92 = i66;
      }
     } while (0);
     if ((i15 | 0) == 64) {
      i15 = 0;
      i68 = i69 + (i67 >>> 2) | 0;
      i66 = i68 >>> 0 > 16 >>> 0 ? i68 : 16;
      __ZN3WTF6VectorIN7WebCore20AnnotatedRegionValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i66 >>> 0 > i69 >>> 0 ? i66 : i69);
      i91 = i9;
      i92 = HEAP32[i55 >> 2] | 0;
     }
     i66 = HEAP32[i53 >> 2] | 0;
     i68 = i92 + (i66 * 40 & -1) | 0;
     i70 = i91;
     HEAP32[i68 >> 2] = HEAP32[i70 >> 2];
     HEAP32[i68 + 4 >> 2] = HEAP32[i70 + 4 >> 2];
     HEAP32[i68 + 8 >> 2] = HEAP32[i70 + 8 >> 2];
     HEAP32[i68 + 12 >> 2] = HEAP32[i70 + 12 >> 2];
     i70 = HEAP32[i91 + 16 >> 2] | 0;
     HEAP32[i92 + (i66 * 40 & -1) + 16 >> 2] = i70;
     if ((i70 | 0) != 0) {
      i68 = i70 | 0;
      HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 2;
     }
     i68 = i92 + (i66 * 40 & -1) + 20 | 0;
     i70 = i91 + 20 | 0;
     HEAP32[i68 >> 2] = HEAP32[i70 >> 2];
     HEAP32[i68 + 4 >> 2] = HEAP32[i70 + 4 >> 2];
     HEAP32[i68 + 8 >> 2] = HEAP32[i70 + 8 >> 2];
     HEAP32[i68 + 12 >> 2] = HEAP32[i70 + 12 >> 2];
     HEAP32[i92 + (i66 * 40 & -1) + 36 >> 2] = HEAP32[i91 + 36 >> 2];
    } else {
     i66 = HEAP32[i55 >> 2] | 0;
     i70 = i66 + (i67 * 40 & -1) | 0;
     HEAP32[i70 >> 2] = HEAP32[i29 >> 2];
     HEAP32[i70 + 4 >> 2] = HEAP32[i29 + 4 >> 2];
     HEAP32[i70 + 8 >> 2] = HEAP32[i29 + 8 >> 2];
     HEAP32[i70 + 12 >> 2] = HEAP32[i29 + 12 >> 2];
     i70 = HEAP32[i30 >> 2] | 0;
     HEAP32[i66 + (i67 * 40 & -1) + 16 >> 2] = i70;
     if ((i70 | 0) != 0) {
      i68 = i70 | 0;
      HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 2;
     }
     i68 = i66 + (i67 * 40 & -1) + 20 | 0;
     HEAP32[i68 >> 2] = HEAP32[i46 >> 2];
     HEAP32[i68 + 4 >> 2] = HEAP32[i46 + 4 >> 2];
     HEAP32[i68 + 8 >> 2] = HEAP32[i46 + 8 >> 2];
     HEAP32[i68 + 12 >> 2] = HEAP32[i46 + 12 >> 2];
     HEAP32[i66 + (i67 * 40 & -1) + 36 >> 2] = HEAP32[i43 >> 2];
    }
    HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
    i66 = HEAP32[i30 >> 2] | 0;
    do {
     if ((i66 | 0) != 0) {
      i68 = i66 | 0;
      i70 = (HEAP32[i68 >> 2] | 0) - 2 | 0;
      if ((i70 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i66);
       break;
      } else {
       HEAP32[i68 >> 2] = i70;
       break;
      }
     }
    } while (0);
    if ((HEAP8[i57] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i25);
    }
    if ((HEAP8[i58] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i23);
    }
    if ((HEAP8[i59] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i21);
    }
    if ((HEAP8[i60] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i61);
    }
    i66 = HEAP32[i17 >> 2] | 0;
    do {
     if ((i66 | 0) != 0) {
      i67 = i66 | 0;
      i69 = (HEAP32[i67 >> 2] | 0) - 2 | 0;
      if ((i69 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i66);
       break;
      } else {
       HEAP32[i67 >> 2] = i69;
       break;
      }
     }
    } while (0);
    i18 = i18 + 1 | 0;
    if (i18 >>> 0 >= i13 >>> 0) {
     break;
    }
   }
   if ((i15 | 0) == 5) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((i13 | 0) == 0) {
    i15 = 87;
    break;
   }
   i18 = HEAP32[i14 >> 2] | 0;
   i17 = i18 + (i13 * 40 & -1) | 0;
   i61 = i18;
   while (1) {
    if ((HEAP8[i61 + 33 | 0] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i61 + 28 | 0);
    }
    if ((HEAP8[i61 + 25 | 0] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i61 + 20 | 0);
    }
    if ((HEAP8[i61 + 17 | 0] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i61 + 12 | 0);
    }
    if ((HEAP8[i61 + 9 | 0] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i61 + 4 | 0);
    }
    i60 = HEAP32[i61 >> 2] | 0;
    do {
     if ((i60 | 0) != 0) {
      i21 = i60 | 0;
      i59 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
      if ((i59 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i60);
       break;
      } else {
       HEAP32[i21 >> 2] = i59;
       break;
      }
     }
    } while (0);
    i61 = i61 + 40 | 0;
    if ((i61 | 0) == (i17 | 0)) {
     break;
    }
   }
   HEAP32[i12 >> 2] = 0;
   i93 = i18;
  }
 } while (0);
 if ((i15 | 0) == 87) {
  i93 = HEAP32[i14 >> 2] | 0;
 }
 if ((i93 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i14 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i93);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12RenderInline19paintOutlineForLineEPNS_15GraphicsContextERKNS_11LayoutPointERKNS_10LayoutRectES8_S8_NS_5ColorE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i7;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 i9 = i8 | 0;
 i10 = i9 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = i12;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = i14;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = i16;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i19 = i18;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i21 = i20;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i23 = i22;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i25 = i24;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i27 = i26;
 i28 = i1 + 36 | 0;
 i29 = HEAP32[(HEAP32[(HEAP32[i28 >> 2] | 0) + 12 >> 2] | 0) + 64 >> 2] | 0;
 if ((i29 & 2013265920 | 0) == 0) {
  i30 = 0;
 } else {
  i30 = i29 >>> 1 & 65535;
 }
 i31 = i29 >>> 27 & 15;
 i29 = __ZN7WebCore20RenderBoxModelObject20shouldAntialiasLinesEPNS_15GraphicsContextE(i2) | 0;
 i32 = HEAP32[(HEAP32[i28 >> 2] | 0) + 12 >> 2] | 0;
 if ((HEAP32[i32 + 64 >> 2] & 2013265920 | 0) == 0) {
  i33 = 0;
 } else {
  i33 = HEAP32[i32 + 68 >> 2] | 0;
 }
 i32 = i3 | 0;
 i28 = i5 | 0;
 i34 = i5 + 8 | 0;
 i35 = (HEAP32[i34 >> 2] | 0) + i33 | 0;
 i36 = (HEAP32[i5 + 12 >> 2] | 0) + i33 | 0;
 i37 = (HEAP32[i3 + 4 >> 2] | 0) - i33 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 HEAP32[i10 >> 2] = (HEAP32[i32 >> 2] | 0) - i33 + (HEAP32[i28 >> 2] | 0);
 HEAP32[i10 + 4 >> 2] = i37;
 i37 = i9 + 8 | 0;
 HEAP32[i37 >> 2] = i35;
 HEAP32[i37 + 4 >> 2] = i36;
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i11, i9);
 i9 = i11 + 8 | 0;
 if ((HEAP32[i9 >> 2] | 0) < 1) {
  STACKTOP = i8;
  return;
 }
 i36 = i11 + 12 | 0;
 i37 = HEAP32[i36 >> 2] | 0;
 if ((i37 | 0) < 1) {
  STACKTOP = i8;
  return;
 }
 i35 = HEAP32[i32 >> 2] | 0;
 i10 = i4 | 0;
 i33 = HEAP32[i10 >> 2] | 0;
 i5 = i33 + i35 | 0;
 i3 = i4 + 8 | 0;
 i38 = HEAP32[i3 >> 2] | 0;
 i39 = i6 | 0;
 i40 = HEAP32[i39 >> 2] | 0;
 i41 = i40 + i35 | 0;
 i35 = i6 + 8 | 0;
 i42 = HEAP32[i35 >> 2] | 0;
 i43 = i1 | 0;
 i1 = i11 | 0;
 i44 = HEAP32[i1 >> 2] | 0;
 i45 = i44 - i30 | 0;
 i46 = i11 + 4 | 0;
 i11 = HEAP32[i46 >> 2] | 0;
 i47 = (i38 | 0) < 1;
 do {
  if (i47) {
   i48 = 11;
  } else {
   if ((HEAP32[i4 + 12 >> 2] | 0) < 1) {
    i48 = 11;
    break;
   }
   i49 = HEAP32[i28 >> 2] | 0;
   if ((i49 | 0) < (i33 | 0)) {
    i48 = 11;
    break;
   }
   if ((i33 - 1 + i38 | 0) > (i49 | 0)) {
    i50 = 0;
   } else {
    i48 = 11;
   }
  }
 } while (0);
 if ((i48 | 0) == 11) {
  i50 = i30;
 }
 i49 = i11 - i50 | 0;
 i50 = i37 + i11 | 0;
 i11 = (i42 | 0) < 1;
 do {
  if (i11) {
   i48 = 16;
  } else {
   if ((HEAP32[i6 + 12 >> 2] | 0) < 1) {
    i48 = 16;
    break;
   }
   i37 = HEAP32[i28 >> 2] | 0;
   if ((i37 | 0) <= (i40 | 0)) {
    i48 = 16;
    break;
   }
   if ((i40 - 1 + i42 | 0) > (i37 | 0)) {
    i51 = 0;
   } else {
    i48 = 16;
   }
  }
 } while (0);
 if ((i48 | 0) == 16) {
  i51 = i30;
 }
 i37 = i50 + i51 | 0;
 i51 = i7;
 i7 = HEAP32[i51 >> 2] | 0;
 i50 = HEAP32[i51 + 4 >> 2] | 0;
 HEAP32[i12 >> 2] = i7;
 HEAP32[i12 + 4 >> 2] = i50;
 do {
  if (i47) {
   i52 = i30;
  } else {
   if ((HEAP32[i4 + 12 >> 2] | 0) < 1) {
    i52 = i30;
    break;
   }
   i12 = HEAP32[i28 >> 2] | 0;
   if ((i12 | 0) < (i33 | 0)) {
    i52 = i30;
    break;
   }
   i52 = (i33 - 1 + i38 | 0) <= (i12 | 0) ? i30 : -i30 | 0;
  }
 } while (0);
 do {
  if (i11) {
   i53 = i30;
  } else {
   if ((HEAP32[i6 + 12 >> 2] | 0) < 1) {
    i53 = i30;
    break;
   }
   i33 = HEAP32[i28 >> 2] | 0;
   if ((i33 | 0) <= (i40 | 0)) {
    i53 = i30;
    break;
   }
   i53 = (i40 - 1 + i42 | 0) <= (i33 | 0) ? i30 : -i30 | 0;
  }
 } while (0);
 __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i43, i2, i45, i49, i44, i37, 3, i13, i31, i52, i53, i29);
 i53 = HEAP32[i1 >> 2] | 0;
 i52 = HEAP32[i9 >> 2] | 0;
 i13 = i52 + i53 | 0;
 i37 = HEAP32[i46 >> 2] | 0;
 i44 = HEAP32[i3 >> 2] | 0;
 i49 = (i44 | 0) < 1;
 do {
  if (i49) {
   i48 = 28;
  } else {
   if ((HEAP32[i4 + 12 >> 2] | 0) < 1) {
    i48 = 28;
    break;
   }
   i45 = HEAP32[i10 >> 2] | 0;
   i40 = (HEAP32[i34 >> 2] | 0) + (HEAP32[i28 >> 2] | 0) | 0;
   if ((i44 + i45 | 0) < (i40 | 0) | (i40 - 1 | 0) <= (i45 | 0)) {
    i48 = 28;
   } else {
    i54 = 0;
   }
  }
 } while (0);
 if ((i48 | 0) == 28) {
  i54 = i30;
 }
 i45 = i37 - i54 | 0;
 i54 = i53 + i30 + i52 | 0;
 i52 = (HEAP32[i36 >> 2] | 0) + i37 | 0;
 i37 = HEAP32[i35 >> 2] | 0;
 i53 = (i37 | 0) < 1;
 do {
  if (i53) {
   i48 = 32;
  } else {
   if ((HEAP32[i6 + 12 >> 2] | 0) < 1) {
    i48 = 32;
    break;
   }
   i40 = HEAP32[i39 >> 2] | 0;
   i11 = (HEAP32[i34 >> 2] | 0) + (HEAP32[i28 >> 2] | 0) | 0;
   if ((i37 + i40 | 0) <= (i11 | 0) | (i11 - 1 | 0) <= (i40 | 0)) {
    i48 = 32;
   } else {
    i55 = 0;
   }
  }
 } while (0);
 if ((i48 | 0) == 32) {
  i55 = i30;
 }
 i48 = i52 + i55 | 0;
 HEAP32[i14 >> 2] = i7;
 HEAP32[i14 + 4 >> 2] = i50;
 do {
  if (i49) {
   i56 = i30;
  } else {
   if ((HEAP32[i4 + 12 >> 2] | 0) < 1) {
    i56 = i30;
    break;
   }
   i14 = HEAP32[i10 >> 2] | 0;
   i55 = (HEAP32[i34 >> 2] | 0) + (HEAP32[i28 >> 2] | 0) | 0;
   if ((i44 + i14 | 0) < (i55 | 0)) {
    i56 = i30;
    break;
   }
   i56 = (i55 - 1 | 0) <= (i14 | 0) ? i30 : -i30 | 0;
  }
 } while (0);
 do {
  if (i53) {
   i57 = i30;
  } else {
   if ((HEAP32[i6 + 12 >> 2] | 0) < 1) {
    i57 = i30;
    break;
   }
   i44 = HEAP32[i39 >> 2] | 0;
   i49 = (HEAP32[i34 >> 2] | 0) + (HEAP32[i28 >> 2] | 0) | 0;
   if ((i37 + i44 | 0) <= (i49 | 0)) {
    i57 = i30;
    break;
   }
   i57 = (i49 - 1 | 0) <= (i44 | 0) ? i30 : -i30 | 0;
  }
 } while (0);
 __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i43, i2, i13, i45, i54, i48, 1, i15, i31, i56, i57, i29);
 i57 = HEAP32[i28 >> 2] | 0;
 i56 = HEAP32[i10 >> 2] | 0;
 if ((i57 | 0) < (i56 | 0)) {
  i15 = HEAP32[i1 >> 2] | 0;
  i48 = i15 - i30 | 0;
  i54 = HEAP32[i46 >> 2] | 0;
  i45 = i54 - i30 | 0;
  i13 = i15 + i30 + (HEAP32[i9 >> 2] | 0) | 0;
  do {
   if ((HEAP32[i3 >> 2] | 0) < 1) {
    HEAP32[i16 >> 2] = i7;
    HEAP32[i16 + 4 >> 2] = i50;
    i58 = i30;
    i59 = (i13 | 0) > 1e6 ? 1e6 : i13;
   } else {
    i15 = (HEAP32[i4 + 12 >> 2] | 0) < 1 ? 1e6 : i5;
    i37 = (i15 | 0) < (i13 | 0) ? i15 : i13;
    HEAP32[i16 >> 2] = i7;
    HEAP32[i16 + 4 >> 2] = i50;
    if ((HEAP32[i4 + 12 >> 2] | 0) < 1) {
     i58 = i30;
     i59 = i37;
     break;
    }
    i58 = ((HEAP32[i32 >> 2] | 0) + 1 + i56 | 0) < (i13 | 0) ? -i30 | 0 : i30;
    i59 = i37;
   }
  } while (0);
  __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i43, i2, i48, i45, i59, i54, 0, i17, i31, i30, i58, i29);
  i60 = HEAP32[i10 >> 2] | 0;
  i61 = HEAP32[i28 >> 2] | 0;
 } else {
  i60 = i56;
  i61 = i57;
 }
 i57 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i34 >> 2] | 0;
 if ((i57 + i60 | 0) < (i3 + i61 | 0)) {
  i61 = (i57 | 0) < 1;
  if (i61) {
   i62 = -1e6;
  } else {
   i62 = (HEAP32[i4 + 12 >> 2] | 0) < 1 ? -1e6 : i38 + i5 | 0;
  }
  i5 = HEAP32[i1 >> 2] | 0;
  i38 = i5 - i30 | 0;
  i56 = (i62 | 0) < (i38 | 0) ? i38 : i62;
  i62 = HEAP32[i46 >> 2] | 0;
  i10 = i62 - i30 | 0;
  i58 = i5 + i30 + (HEAP32[i9 >> 2] | 0) | 0;
  HEAP32[i18 >> 2] = i7;
  HEAP32[i18 + 4 >> 2] = i50;
  do {
   if (i61) {
    i63 = i30;
   } else {
    if ((HEAP32[i4 + 12 >> 2] | 0) < 1) {
     i63 = i30;
     break;
    }
    i63 = (i60 + (HEAP32[i32 >> 2] | 0) + i57 | 0) > (i38 | 0) ? -i30 | 0 : i30;
   }
  } while (0);
  __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i43, i2, i56, i10, i58, i62, 0, i19, i31, i63, i30, i29);
  i64 = HEAP32[i34 >> 2] | 0;
 } else {
  i64 = i3;
 }
 if ((i64 | 0) == 0) {
  i64 = HEAP32[i1 >> 2] | 0;
  i3 = HEAP32[i46 >> 2] | 0;
  i63 = i64 + i30 + (HEAP32[i9 >> 2] | 0) | 0;
  HEAP32[i20 >> 2] = i7;
  HEAP32[i20 + 4 >> 2] = i50;
  __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i43, i2, i64 - i30 | 0, i3 - i30 | 0, i63, i3, 0, i21, i31, i30, i30, i29);
 }
 i21 = HEAP32[i28 >> 2] | 0;
 i3 = HEAP32[i39 >> 2] | 0;
 if ((i21 | 0) < (i3 | 0)) {
  i63 = HEAP32[i1 >> 2] | 0;
  i64 = i63 - i30 | 0;
  i20 = HEAP32[i46 >> 2] | 0;
  i19 = HEAP32[i36 >> 2] | 0;
  i62 = i19 + i20 | 0;
  i58 = i63 + i30 + (HEAP32[i9 >> 2] | 0) | 0;
  do {
   if ((HEAP32[i35 >> 2] | 0) < 1) {
    HEAP32[i22 >> 2] = i7;
    HEAP32[i22 + 4 >> 2] = i50;
    i65 = i30;
    i66 = (i58 | 0) > 1e6 ? 1e6 : i58;
    i67 = i20 + i30 + i19 | 0;
   } else {
    i63 = (HEAP32[i6 + 12 >> 2] | 0) < 1 ? 1e6 : i41 + 1 | 0;
    i10 = (i63 | 0) < (i58 | 0) ? i63 : i58;
    i63 = i20 + i30 + i19 | 0;
    HEAP32[i22 >> 2] = i7;
    HEAP32[i22 + 4 >> 2] = i50;
    if ((HEAP32[i6 + 12 >> 2] | 0) < 1) {
     i65 = i30;
     i66 = i10;
     i67 = i63;
     break;
    }
    i65 = ((HEAP32[i32 >> 2] | 0) + 1 + i3 | 0) < (i58 | 0) ? -i30 | 0 : i30;
    i66 = i10;
    i67 = i63;
   }
  } while (0);
  __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i43, i2, i64, i62, i66, i67, 2, i23, i31, i30, i65, i29);
  i68 = HEAP32[i39 >> 2] | 0;
  i69 = HEAP32[i28 >> 2] | 0;
 } else {
  i68 = i3;
  i69 = i21;
 }
 i21 = HEAP32[i35 >> 2] | 0;
 i35 = HEAP32[i34 >> 2] | 0;
 if ((i21 + i68 | 0) < (i35 + i69 | 0)) {
  i69 = (i21 | 0) < 1;
  if (i69) {
   i70 = -1e6;
  } else {
   i70 = (HEAP32[i6 + 12 >> 2] | 0) < 1 ? -1e6 : i42 + i41 | 0;
  }
  i41 = HEAP32[i1 >> 2] | 0;
  i42 = i41 - i30 | 0;
  i3 = (i70 | 0) < (i42 | 0) ? i42 : i70;
  i70 = (HEAP32[i36 >> 2] | 0) + (HEAP32[i46 >> 2] | 0) | 0;
  i28 = i41 + i30 + (HEAP32[i9 >> 2] | 0) | 0;
  i41 = i70 + i30 | 0;
  HEAP32[i24 >> 2] = i7;
  HEAP32[i24 + 4 >> 2] = i50;
  do {
   if (i69) {
    i71 = i30;
   } else {
    if ((HEAP32[i6 + 12 >> 2] | 0) < 1) {
     i71 = i30;
     break;
    }
    i71 = (i68 + (HEAP32[i32 >> 2] | 0) + i21 | 0) > (i42 | 0) ? -i30 | 0 : i30;
   }
  } while (0);
  __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i43, i2, i3, i70, i28, i41, 2, i25, i31, i71, i30, i29);
  i72 = HEAP32[i34 >> 2] | 0;
 } else {
  i72 = i35;
 }
 if ((i72 | 0) != 0) {
  STACKTOP = i8;
  return;
 }
 i72 = HEAP32[i1 >> 2] | 0;
 i1 = (HEAP32[i36 >> 2] | 0) + (HEAP32[i46 >> 2] | 0) | 0;
 i46 = i72 + i30 + (HEAP32[i9 >> 2] | 0) | 0;
 HEAP32[i26 >> 2] = i7;
 HEAP32[i26 + 4 >> 2] = i50;
 __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i43, i2, i72 - i30 | 0, i1, i46, i1 + i30 | 0, 2, i27, i31, i30, i30, i29);
 STACKTOP = i8;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 234;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 212;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 232;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 238;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 242;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 240;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 226;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 222;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_ii + 230;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_iiiiii + 4;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_ii + 218;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_ii + 244;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_ii + 216;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_viii + 38;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_viii + 36;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_ii + 214;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_iiii + 8;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_viii + 28;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_ii + 224;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_ii + 220;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_ii + 210;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_ii + 228;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_ii + 236;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_viii + 40;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_viii + 34;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_viiiii + 8;
 HEAP32[H_BASE + 984 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 988 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_vii + 64;
}
function __ZN7WebCore12RenderInline27updateAlwaysCreateLineBoxesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, d25 = +0, d26 = +0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, d37 = +0, d38 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 + 25 | 0;
 if ((HEAP8[i8] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i1 + 8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i10 + 36 >> 2] | 0;
 if ((HEAP32[i10 + 24 >> 2] & 4 | 0) == 0) {
  i12 = 0;
 } else {
  i12 = i10;
 }
 i10 = i1 + 4 | 0;
 i13 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) == 2;
 if ((HEAP32[i1 + 20 >> 2] & 805306368 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1 | 0) | 0;
 }
 do {
  if ((i12 | 0) == 0) {
   i15 = 9;
  } else {
   if ((HEAP8[i12 + 25 | 0] & 1) != 0) {
    break;
   }
   if ((HEAP32[i11 + 48 >> 2] & 983040 | 0) == 0) {
    i15 = 9;
   }
  }
 } while (0);
 L13 : do {
  if ((i15 | 0) == 9) {
   i12 = i1 + 36 | 0;
   i16 = HEAP32[i12 >> 2] | 0;
   if ((HEAP32[i16 + 48 >> 2] & 983040 | 0) != 0) {
    break;
   }
   if ((__ZNK7WebCore11RenderStyle16textEmphasisMarkEv(i16) | 0) != 0) {
    break;
   }
   do {
    if (i13) {
     i16 = __ZNK7WebCore11RenderStyle4fontEv(i11) | 0;
     i17 = HEAP32[i16 + 24 >> 2] | 0;
     i18 = i17 + 44 | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     if ((i19 | 0) == 0) {
      i20 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i17, i16 | 0, 0) | 0;
      i16 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i20 >> 2] | 0) + 8 >> 2] & 15](i20, 32) | 0;
      HEAP32[i18 >> 2] = i16;
      i21 = i16;
     } else {
      i21 = i19;
     }
     i19 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[i12 >> 2] | 0) | 0;
     i16 = HEAP32[i19 + 24 >> 2] | 0;
     i18 = i16 + 44 | 0;
     i20 = HEAP32[i18 >> 2] | 0;
     if ((i20 | 0) == 0) {
      i17 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i16, i19 | 0, 0) | 0;
      i19 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] & 15](i17, 32) | 0;
      HEAP32[i18 >> 2] = i19;
      i22 = i19;
     } else {
      i22 = i20;
     }
     i20 = _round(+(+HEAPF32[i21 + 16 >> 2])) | 0;
     if ((i20 | 0) != (_round(+(+HEAPF32[i22 + 16 >> 2])) | 0)) {
      break L13;
     }
     i20 = _round(+(+HEAPF32[i21 + 20 >> 2])) | 0;
     if ((i20 | 0) != (_round(+(+HEAPF32[i22 + 20 >> 2])) | 0)) {
      break L13;
     }
     i20 = _round(+(+HEAPF32[i21 + 24 >> 2])) | 0;
     if ((i20 | 0) != (_round(+(+HEAPF32[i22 + 24 >> 2])) | 0)) {
      break L13;
     }
     __ZNK7WebCore11RenderStyle10lineHeightEv(i4, i11);
     __ZNK7WebCore11RenderStyle10lineHeightEv(i5, HEAP32[i12 >> 2] | 0);
     i20 = HEAP8[i4 + 5 | 0] | 0;
     if (i20 << 24 >> 24 != (HEAP8[i5 + 5 | 0] | 0)) {
      i23 = 1;
      i15 = 34;
      break;
     }
     if (((HEAP8[i5 + 4 | 0] ^ HEAP8[i4 + 4 | 0]) & 1) != 0) {
      i23 = 1;
      i15 = 34;
      break;
     }
     if (i20 << 24 >> 24 == 15) {
      i24 = 1;
      i15 = 30;
      break;
     }
     if ((HEAP8[i4 + 6 | 0] & 1) == 0) {
      d25 = +(HEAP32[i4 >> 2] | 0);
     } else {
      d25 = +HEAPF32[i4 >> 2];
     }
     if ((HEAP8[i5 + 6 | 0] & 1) == 0) {
      d26 = +(HEAP32[i5 >> 2] | 0);
     } else {
      d26 = +HEAPF32[i5 >> 2];
     }
     if (d25 == d26) {
      i24 = 1;
      i15 = 30;
      break;
     }
     if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i4, i5) | 0) {
      i24 = 1;
      i15 = 30;
     } else {
      i23 = 1;
      i15 = 34;
     }
    } else {
     i24 = 0;
     i15 = 30;
    }
   } while (0);
   L40 : do {
    if ((i15 | 0) == 30) {
     do {
      if ((i14 | 0) != 0) {
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 252 >> 2] & 255](i14 | 0) | 0)) {
        break;
       }
       i20 = (HEAP8[i14 + 404 | 0] & 2) != 0;
       if (i24) {
        i23 = i20;
        i15 = 34;
        break L40;
       } else {
        i27 = i20;
        break L40;
       }
      }
     } while (0);
     if (i24) {
      i23 = 0;
      i15 = 34;
     } else {
      i27 = 0;
     }
    }
   } while (0);
   do {
    if ((i15 | 0) == 34) {
     if ((HEAP8[i5 + 5 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
     }
     if ((HEAP8[i4 + 5 | 0] | 0) != 10) {
      i27 = i23;
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i4);
     i27 = i23;
    }
   } while (0);
   do {
    if (i27 | i13 ^ 1) {
     i28 = i27;
    } else {
     i20 = HEAP8[(HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] | 0;
     if ((i20 & 1) == 0) {
      STACKTOP = i3;
      return;
     }
     i19 = HEAP32[i9 >> 2] | 0;
     if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i19 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
      i29 = HEAP32[i19 + 36 >> 2] | 0;
      i30 = i20;
     } else {
      i20 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i19) | 0;
      i29 = i20;
      i30 = HEAP8[(HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] | 0;
     }
     if ((i30 & 1) == 0) {
      i31 = HEAP32[i12 >> 2] | 0;
     } else {
      i31 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i1 | 0) | 0;
     }
     i20 = __ZNK7WebCore11RenderStyle4fontEv(i29) | 0;
     i19 = HEAP32[i20 + 24 >> 2] | 0;
     i18 = i19 + 44 | 0;
     i17 = HEAP32[i18 >> 2] | 0;
     if ((i17 | 0) == 0) {
      i16 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i19, i20 | 0, 0) | 0;
      i20 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] & 15](i16, 32) | 0;
      HEAP32[i18 >> 2] = i20;
      i32 = i20;
     } else {
      i32 = i17;
     }
     i17 = __ZNK7WebCore11RenderStyle4fontEv(i31) | 0;
     i20 = HEAP32[i17 + 24 >> 2] | 0;
     i18 = i20 + 44 | 0;
     i16 = HEAP32[i18 >> 2] | 0;
     if ((i16 | 0) == 0) {
      i19 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i20, i17 | 0, 0) | 0;
      i17 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i19 >> 2] | 0) + 8 >> 2] & 15](i19, 32) | 0;
      HEAP32[i18 >> 2] = i17;
      i33 = i17;
     } else {
      i33 = i16;
     }
     i16 = _round(+(+HEAPF32[i32 + 16 >> 2])) | 0;
     if ((i16 | 0) != (_round(+(+HEAPF32[i33 + 16 >> 2])) | 0)) {
      break L13;
     }
     i16 = _round(+(+HEAPF32[i32 + 20 >> 2])) | 0;
     if ((i16 | 0) != (_round(+(+HEAPF32[i33 + 20 >> 2])) | 0)) {
      break L13;
     }
     i16 = _round(+(+HEAPF32[i32 + 24 >> 2])) | 0;
     if ((i16 | 0) != (_round(+(+HEAPF32[i33 + 24 >> 2])) | 0)) {
      break L13;
     }
     if ((HEAP32[i31 + 48 >> 2] & 983040 | 0) != 0) {
      break L13;
     }
     __ZNK7WebCore11RenderStyle10lineHeightEv(i6, i29);
     __ZNK7WebCore11RenderStyle10lineHeightEv(i7, i31);
     i16 = i6 + 5 | 0;
     i17 = HEAP8[i16] | 0;
     i18 = i7 + 5 | 0;
     i19 = HEAP8[i18] | 0;
     do {
      if (i17 << 24 >> 24 == i19 << 24 >> 24) {
       if (((HEAP8[i7 + 4 | 0] ^ HEAP8[i6 + 4 | 0]) & 1) != 0) {
        i34 = 1;
        i35 = i17;
        i15 = 65;
        break;
       }
       if (i17 << 24 >> 24 == 15) {
        i36 = 0;
        break;
       }
       if ((HEAP8[i6 + 6 | 0] & 1) == 0) {
        d37 = +(HEAP32[i6 >> 2] | 0);
       } else {
        d37 = +HEAPF32[i6 >> 2];
       }
       if ((HEAP8[i7 + 6 | 0] & 1) == 0) {
        d38 = +(HEAP32[i7 >> 2] | 0);
       } else {
        d38 = +HEAPF32[i7 >> 2];
       }
       if (d37 == d38) {
        i34 = 0;
        i35 = i17;
        i15 = 65;
        break;
       }
       i20 = (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i6, i7) | 0) ^ 1;
       i34 = i20;
       i35 = HEAP8[i18] | 0;
       i15 = 65;
      } else {
       i34 = 1;
       i35 = i19;
       i15 = 65;
      }
     } while (0);
     do {
      if ((i15 | 0) == 65) {
       if (i35 << 24 >> 24 != 10) {
        i36 = i34;
        break;
       }
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
       i36 = i34;
      }
     } while (0);
     if ((HEAP8[i16] | 0) != 10) {
      i28 = i36;
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
     if (i36) {
      break L13;
     }
     STACKTOP = i3;
     return;
    }
   } while (0);
   if (i28) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if (!i2) {
  __ZN7WebCore12RenderInline14dirtyLineBoxesEb(i1, 0);
 }
 HEAP8[i8] = HEAP8[i8] | 1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12RenderInline12paintOutlineERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, d32 = +0, i33 = 0, i34 = 0, i35 = 0, d36 = +0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i9;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = i11;
 i13 = i1 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i14 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i14 = HEAP32[i13 + 36 >> 2] | 0;
 }
 i15 = HEAP32[(HEAP32[i14 + 12 >> 2] | 0) + 64 >> 2] | 0;
 do {
  if (!((i15 & 131070 | 0) != 0 & (i15 & 2013265920 | 0) != 0 & (i15 & 1879048192) >>> 0 > 134217728 >>> 0)) {
   if (__ZNK7WebCore12RenderObject20hasOutlineAnnotationEv(i13) | 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i15 = HEAP32[i1 + 36 >> 2] | 0;
 i14 = i15 + 12 | 0;
 if ((HEAP32[(HEAP32[i14 >> 2] | 0) + 64 >> 2] | 0) > -1) {
  if (__ZNK7WebCore12RenderObject20hasOutlineAnnotationEv(i13) | 0) {
   i16 = 8;
  }
 } else {
  i16 = 8;
 }
 do {
  if ((i16 | 0) == 8) {
   i17 = __ZNK7WebCore12RenderObject5themeEv(i13) | 0;
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i17 >> 2] | 0) + 52 >> 2] & 15](i17, i15) | 0) {
    break;
   }
   __ZN7WebCore12RenderObject14paintFocusRingERNS_9PaintInfoERKNS_11LayoutPointEPNS_11RenderStyleE(i13, i2, i3, i15);
  }
 } while (0);
 i13 = HEAP32[i2 >> 2] | 0;
 if (__ZNK7WebCore15GraphicsContext16paintingDisabledEv(i13) | 0) {
  STACKTOP = i4;
  return;
 }
 i2 = HEAP32[(HEAP32[i14 >> 2] | 0) + 64 >> 2] | 0;
 if ((i2 | 0) < 0 | (i2 & 2013265920 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = 0;
 i14 = i5 + 4 | 0;
 HEAP32[i14 >> 2] = 0;
 i17 = i5 + 8 | 0;
 HEAP32[i17 >> 2] = 0;
 _memset(i6 | 0, 0, 16) | 0;
 __ZN3WTF6VectorIN7WebCore10LayoutRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, 1);
 i18 = HEAP32[i2 >> 2] | 0;
 i19 = HEAP32[i17 >> 2] | 0;
 i20 = i18 + (i19 << 4) | 0;
 i21 = i6;
 HEAP32[i20 >> 2] = HEAP32[i21 >> 2];
 HEAP32[i20 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
 HEAP32[i20 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
 HEAP32[i20 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
 i21 = i19 + 1 | 0;
 HEAP32[i17 >> 2] = i21;
 i19 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i19 | 0) == 0) {
  i22 = i21;
  i23 = i18;
 } else {
  i20 = i7 | 0;
  i6 = i7 + 4 | 0;
  i24 = i7 + 8 | 0;
  i25 = i7 + 12 | 0;
  i26 = i7;
  i27 = i7;
  i28 = i19;
  i19 = i21;
  i21 = i18;
  while (1) {
   i18 = i28 | 0;
   i29 = __ZN7WebCore9InlineBox4rootEv(i18) | 0;
   i30 = HEAP32[i29 + 72 >> 2] | 0;
   i31 = i28 + 20 | 0;
   d32 = +HEAPF32[((HEAP32[i28 + 32 >> 2] & 2048 | 0) == 0 ? i31 : i28 + 24 | 0) >> 2];
   do {
    if (d32 < +2147483647) {
     if (d32 <= +-2147483648) {
      i33 = -2147483648;
      break;
     }
     i33 = ~~d32;
    } else {
     i33 = 2147483647;
    }
   } while (0);
   i34 = (i30 | 0) < (i33 | 0) ? i33 : i30;
   i35 = HEAP32[i29 + 76 >> 2] | 0;
   d36 = d32 + +__ZNK7WebCore9InlineBox13logicalHeightEv(i18);
   do {
    if (d36 < +2147483647) {
     if (d36 <= +-2147483648) {
      i37 = -2147483648;
      break;
     }
     i37 = ~~d36;
    } else {
     i37 = 2147483647;
    }
   } while (0);
   i18 = (i37 | 0) < (i35 | 0) ? i37 : i35;
   d36 = +HEAPF32[i31 >> 2];
   do {
    if (d36 < +2147483647) {
     if (d36 <= +-2147483648) {
      i38 = -2147483648;
      break;
     }
     i38 = ~~d36;
    } else {
     i38 = 2147483647;
    }
   } while (0);
   d36 = +HEAPF32[i28 + 28 >> 2];
   do {
    if (d36 < +2147483647) {
     if (d36 <= +-2147483648) {
      i39 = -2147483648;
      break;
     }
     i39 = ~~d36;
    } else {
     i39 = 2147483647;
    }
   } while (0);
   HEAP32[i20 >> 2] = i38;
   HEAP32[i6 >> 2] = i34;
   HEAP32[i24 >> 2] = i39;
   HEAP32[i25 >> 2] = i18 - i34;
   if ((i19 | 0) == (HEAP32[i14 >> 2] | 0)) {
    i31 = i19 + 1 | 0;
    do {
     if (i21 >>> 0 > i7 >>> 0) {
      i16 = 30;
     } else {
      if ((i21 + (i19 << 4) | 0) >>> 0 <= i7 >>> 0) {
       i16 = 30;
       break;
      }
      __ZN3WTF6VectorIN7WebCore10LayoutRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i31);
      i35 = HEAP32[i2 >> 2] | 0;
      i40 = i35 + (i26 - i21 >> 4 << 4) | 0;
      i41 = i35;
     }
    } while (0);
    if ((i16 | 0) == 30) {
     i16 = 0;
     __ZN3WTF6VectorIN7WebCore10LayoutRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i31);
     i40 = i7;
     i41 = HEAP32[i2 >> 2] | 0;
    }
    i34 = HEAP32[i17 >> 2] | 0;
    i18 = i41 + (i34 << 4) | 0;
    i35 = i40;
    HEAP32[i18 >> 2] = HEAP32[i35 >> 2];
    HEAP32[i18 + 4 >> 2] = HEAP32[i35 + 4 >> 2];
    HEAP32[i18 + 8 >> 2] = HEAP32[i35 + 8 >> 2];
    HEAP32[i18 + 12 >> 2] = HEAP32[i35 + 12 >> 2];
    i42 = i34;
    i43 = i41;
   } else {
    i34 = i21 + (i19 << 4) | 0;
    HEAP32[i34 >> 2] = HEAP32[i27 >> 2];
    HEAP32[i34 + 4 >> 2] = HEAP32[i27 + 4 >> 2];
    HEAP32[i34 + 8 >> 2] = HEAP32[i27 + 8 >> 2];
    HEAP32[i34 + 12 >> 2] = HEAP32[i27 + 12 >> 2];
    i42 = i19;
    i43 = i21;
   }
   i34 = i42 + 1 | 0;
   HEAP32[i17 >> 2] = i34;
   i35 = HEAP32[i28 + 52 >> 2] | 0;
   if ((i35 | 0) == 0) {
    i22 = i34;
    i23 = i43;
    break;
   } else {
    i28 = i35;
    i19 = i34;
    i21 = i43;
   }
  }
 }
 i43 = i8;
 _memset(i43 | 0, 0, 16) | 0;
 if ((i22 | 0) == (HEAP32[i14 >> 2] | 0)) {
  i21 = i22 + 1 | 0;
  do {
   if (i23 >>> 0 > i8 >>> 0) {
    i16 = 38;
   } else {
    if ((i23 + (i22 << 4) | 0) >>> 0 <= i8 >>> 0) {
     i16 = 38;
     break;
    }
    __ZN3WTF6VectorIN7WebCore10LayoutRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i21);
    i19 = HEAP32[i2 >> 2] | 0;
    i44 = i19 + (i8 - i23 >> 4 << 4) | 0;
    i45 = i19;
   }
  } while (0);
  if ((i16 | 0) == 38) {
   __ZN3WTF6VectorIN7WebCore10LayoutRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i21);
   i44 = i8;
   i45 = HEAP32[i2 >> 2] | 0;
  }
  i8 = HEAP32[i17 >> 2] | 0;
  i21 = i45 + (i8 << 4) | 0;
  i5 = i44;
  HEAP32[i21 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i21 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
  HEAP32[i21 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
  HEAP32[i21 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
  i46 = i8;
  i47 = i45;
 } else {
  i45 = i23 + (i22 << 4) | 0;
  HEAP32[i45 >> 2] = HEAP32[i43 >> 2];
  HEAP32[i45 + 4 >> 2] = HEAP32[i43 + 4 >> 2];
  HEAP32[i45 + 8 >> 2] = HEAP32[i43 + 8 >> 2];
  HEAP32[i45 + 12 >> 2] = HEAP32[i43 + 12 >> 2];
  i46 = i22;
  i47 = i23;
 }
 i23 = i46 + 1 | 0;
 HEAP32[i17 >> 2] = i23;
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i10, i15, 105);
 i15 = i9;
 i10 = HEAP32[i15 >> 2] | 0;
 i22 = (i10 & -16777216 | 0) != -16777216;
 if (i22) {
  __ZN7WebCore15GraphicsContext22beginTransparencyLayerEf(i13, +(i10 >>> 24 | 0) / +255);
  i10 = HEAP32[i15 >> 2] | 0;
  HEAP32[i15 >> 2] = __ZN7WebCore7makeRGBEiii(i10 >>> 16 & 255, i10 >>> 8 & 255, i10 & 255) | 0;
  HEAP8[i9 + 4 | 0] = 1;
 }
 L65 : do {
  if (i46 >>> 0 > 1 >>> 0) {
   i10 = 1;
   while (1) {
    i15 = i10 - 1 | 0;
    if (i23 >>> 0 <= i15 >>> 0) {
     i16 = 45;
     break;
    }
    if (i23 >>> 0 <= i10 >>> 0) {
     i16 = 47;
     break;
    }
    i43 = i10 + 1 | 0;
    if (i23 >>> 0 <= i43 >>> 0) {
     i16 = 49;
     break;
    }
    i45 = HEAP32[i9 + 4 >> 2] | 0;
    HEAP32[i11 >> 2] = HEAP32[i9 >> 2];
    HEAP32[i11 + 4 >> 2] = i45;
    __ZN7WebCore12RenderInline19paintOutlineForLineEPNS_15GraphicsContextERKNS_11LayoutPointERKNS_10LayoutRectES8_S8_NS_5ColorE(i1, i13, i3, i47 + (i15 << 4) | 0, i47 + (i10 << 4) | 0, i47 + (i43 << 4) | 0, i12);
    if (i43 >>> 0 < i46 >>> 0) {
     i10 = i43;
    } else {
     break L65;
    }
   }
   if ((i16 | 0) == 49) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i16 | 0) == 47) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i16 | 0) == 45) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 if (i22) {
  __ZN7WebCore15GraphicsContext20endTransparencyLayerEv(i13);
 }
 if ((i23 | 0) != 0) {
  HEAP32[i17 >> 2] = 0;
 }
 if ((i47 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i14 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i47);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12RenderInline14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i1 | 0;
 __ZN7WebCore22RenderLayerModelObject14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i8, i2, i3);
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i9 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i1 | 0) | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = 3;
  } else {
   if ((HEAP32[i9 + 20 >> 2] & 1024 | 0) != 0) {
    i10 = 3;
    break;
   }
   i11 = __ZNK7WebCore11RenderBlock25inlineElementContinuationEv(i9) | 0;
  }
 } while (0);
 if ((i10 | 0) == 3) {
  i11 = i9;
 }
 i9 = (i11 | 0) == 0;
 L7 : do {
  if (i9) {
   i12 = (i3 | 0) == 0;
  } else {
   i13 = i7 | 0;
   i14 = i2 | 0;
   i15 = i11;
   while (1) {
    i16 = i15 | 0;
    i17 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i16) | 0;
    __ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_(i16, 0);
    HEAP32[i13 >> 2] = i2;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
    __ZN7WebCore13RenderElement8setStyleEN3WTF7PassRefINS_11RenderStyleEEE(i15 | 0, i7);
    __ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_(i16, i17);
    i17 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i16) | 0;
    do {
     if ((i17 | 0) == 0) {
      i10 = 10;
     } else {
      if ((HEAP32[i17 + 20 >> 2] & 1024 | 0) != 0) {
       i10 = 10;
       break;
      }
      i18 = __ZNK7WebCore11RenderBlock25inlineElementContinuationEv(i17) | 0;
     }
    } while (0);
    if ((i10 | 0) == 10) {
     i10 = 0;
     i18 = i17;
    }
    if ((i18 | 0) == 0) {
     break;
    } else {
     i15 = i18;
    }
   }
   i15 = (i3 | 0) == 0;
   if (i9 | i15) {
    i12 = i15;
    break;
   }
   i14 = i2 + 48 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) >>> 22 & 7;
   i16 = i3 + 48 | 0;
   i19 = (HEAP32[i16 >> 2] | 0) >>> 22 & 7;
   if ((i13 | 0) == (i19 | 0)) {
    i12 = i15;
    break;
   }
   if (!((i13 | 0) == 3 | (i13 | 0) == 1)) {
    if (!((i19 | 0) == 3 | (i19 | 0) == 1)) {
     i12 = i15;
     break;
    }
   }
   i19 = HEAP32[(__ZNK7WebCore12RenderObject15containingBlockEv(i1 | 0) | 0) + 16 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i12 = i15;
    break;
   }
   i13 = i5 | 0;
   i20 = i6 | 0;
   i21 = i19;
   while (1) {
    i19 = i21;
    if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i21) | 0)) {
     i12 = i15;
     break L7;
    }
    L28 : do {
     if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i21) | 0) {
      if ((__ZNK7WebCore20RenderBoxModelObject12continuationEv(i21) | 0) == 0) {
       break;
      }
      i22 = i21;
      i23 = i21 + 36 | 0;
      if (((HEAP32[i14 >> 2] ^ HEAP32[(HEAP32[i23 >> 2] | 0) + 48 >> 2]) & 29360128 | 0) == 0) {
       break;
      }
      i24 = __ZNK7WebCore11RenderBlock25inlineElementContinuationEv(i19) | 0;
      i25 = (HEAP32[i16 >> 2] | 0) >>> 22 & 7;
      L32 : do {
       if ((i25 | 0) == 3 | (i25 | 0) == 1) {
        if ((i24 | 0) == 0) {
         break;
        }
        i26 = i24 | 0;
        while (1) {
         if ((HEAP32[i26 + 24 >> 2] & 4 | 0) == 0) {
          break L32;
         }
         i27 = HEAP32[i26 + 20 >> 2] & 25165824;
         if ((i27 | 0) == 25165824 | (i27 | 0) == 8388608) {
          break;
         }
         i27 = HEAP32[i26 + 8 >> 2] | 0;
         if ((i27 | 0) == 0) {
          break L32;
         } else {
          i26 = i27;
         }
        }
        if ((i26 | 0) != 0) {
         break L28;
        }
       }
      } while (0);
      __ZN7WebCore11RenderStyle31createAnonymousStyleWithDisplayEPKS0_NS_8EDisplayE(i5, HEAP32[i23 >> 2] | 0, 1);
      i24 = (HEAP32[i13 >> 2] | 0) + 48 | 0;
      HEAP32[i24 >> 2] = HEAP32[i24 >> 2] & -29360129 | HEAP32[i14 >> 2] & 29360128;
      HEAP32[i20 >> 2] = HEAP32[i13 >> 2];
      __ZN7WebCore13RenderElement8setStyleEN3WTF7PassRefINS_11RenderStyleEEE(i22, i6);
     }
    } while (0);
    i19 = HEAP32[i21 + 16 >> 2] | 0;
    if ((i19 | 0) == 0) {
     i12 = i15;
     break;
    } else {
     i21 = i19;
    }
   }
  }
 } while (0);
 i6 = i1 + 25 | 0;
 if ((HEAP8[i6] & 1) != 0) {
  STACKTOP = i4;
  return;
 }
 do {
  if (__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(i8) | 0) {
   i28 = 1;
  } else {
   i5 = i1 | 0;
   i3 = HEAP32[i1 + 20 >> 2] | 0;
   if (i3 >>> 0 > 1073741823 >>> 0) {
    i28 = 1;
    break;
   }
   i9 = HEAP32[i2 + 16 >> 2] | 0;
   i18 = i9 + 68 | 0;
   if ((HEAP8[i9 + 73 | 0] | 0) == 10) {
    i28 = 1;
    break;
   }
   if ((HEAP8[i9 + 74 | 0] & 1) == 0) {
    if ((HEAP32[i18 >> 2] | 0) != 0) {
     i28 = 1;
     break;
    }
   } else {
    if (+HEAPF32[i18 >> 2] != +0) {
     i28 = 1;
     break;
    }
   }
   i18 = i9 + 76 | 0;
   if ((HEAP8[i9 + 81 | 0] | 0) == 10) {
    i28 = 1;
    break;
   }
   if ((HEAP8[i9 + 82 | 0] & 1) == 0) {
    if ((HEAP32[i18 >> 2] | 0) != 0) {
     i28 = 1;
     break;
    }
   } else {
    if (+HEAPF32[i18 >> 2] != +0) {
     i28 = 1;
     break;
    }
   }
   i18 = i9 + 84 | 0;
   if ((HEAP8[i9 + 89 | 0] | 0) == 10) {
    i28 = 1;
    break;
   }
   if ((HEAP8[i9 + 90 | 0] & 1) == 0) {
    if ((HEAP32[i18 >> 2] | 0) != 0) {
     i28 = 1;
     break;
    }
   } else {
    if (+HEAPF32[i18 >> 2] != +0) {
     i28 = 1;
     break;
    }
   }
   i18 = i9 + 92 | 0;
   if ((HEAP8[i9 + 97 | 0] | 0) == 10) {
    i28 = 1;
    break;
   }
   if ((HEAP8[i9 + 98 | 0] & 1) == 0) {
    if ((HEAP32[i18 >> 2] | 0) != 0) {
     i28 = 1;
     break;
    }
   } else {
    if (+HEAPF32[i18 >> 2] != +0) {
     i28 = 1;
     break;
    }
   }
   i18 = i9 + 36 | 0;
   if ((HEAP8[i9 + 41 | 0] | 0) == 10) {
    i28 = 1;
    break;
   }
   if ((HEAP8[i9 + 42 | 0] & 1) == 0) {
    if ((HEAP32[i18 >> 2] | 0) != 0) {
     i28 = 1;
     break;
    }
   } else {
    if (+HEAPF32[i18 >> 2] != +0) {
     i28 = 1;
     break;
    }
   }
   i18 = i9 + 44 | 0;
   if ((HEAP8[i9 + 49 | 0] | 0) == 10) {
    i28 = 1;
    break;
   }
   if ((HEAP8[i9 + 50 | 0] & 1) == 0) {
    if ((HEAP32[i18 >> 2] | 0) != 0) {
     i28 = 1;
     break;
    }
   } else {
    if (+HEAPF32[i18 >> 2] != +0) {
     i28 = 1;
     break;
    }
   }
   i18 = i9 + 52 | 0;
   if ((HEAP8[i9 + 57 | 0] | 0) == 10) {
    i28 = 1;
    break;
   }
   if ((HEAP8[i9 + 58 | 0] & 1) == 0) {
    if ((HEAP32[i18 >> 2] | 0) != 0) {
     i28 = 1;
     break;
    }
   } else {
    if (+HEAPF32[i18 >> 2] != +0) {
     i28 = 1;
     break;
    }
   }
   i18 = i9 + 60 | 0;
   if ((HEAP8[i9 + 65 | 0] | 0) == 10) {
    i28 = 1;
    break;
   }
   if ((HEAP8[i9 + 66 | 0] & 1) == 0) {
    if ((HEAP32[i18 >> 2] | 0) != 0) {
     i28 = 1;
     break;
    }
   } else {
    if (+HEAPF32[i18 >> 2] != +0) {
     i28 = 1;
     break;
    }
   }
   if ((i3 & 768 | 0) == 256) {
    i29 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i29 = HEAP32[i5 + 36 >> 2] | 0;
   }
   i3 = HEAP32[(HEAP32[i29 + 12 >> 2] | 0) + 64 >> 2] | 0;
   if ((i3 & 131070 | 0) != 0 & (i3 & 2013265920 | 0) != 0 & (i3 & 1879048192) >>> 0 > 134217728 >>> 0) {
    i28 = 1;
    break;
   }
   i28 = __ZNK7WebCore12RenderObject20hasOutlineAnnotationEv(i5) | 0;
  }
 } while (0);
 do {
  if (!(i12 | i28 ^ 1)) {
   __ZN7WebCore12RenderInline14dirtyLineBoxesEb(i1, 0);
   i29 = i1 | 0;
   i2 = i1 + 20 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   if ((i8 & 1 | 0) != 0) {
    break;
   }
   HEAP32[i2 >> 2] = i8 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i29, 1, 0);
   if ((HEAP32[i2 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i29);
  }
 } while (0);
 HEAP8[i6] = HEAP8[i6] & -2 | i28 & 1;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore12RenderInline19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, d30 = +0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i6;
  return;
 }
 i23 = i1 | 0;
 i24 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 do {
  if ((HEAP32[i24 + 196 >> 2] | 0) == 0) {
   i25 = HEAP32[i24 + 192 >> 2] | 0;
   if (!((i25 | 0) != 0 & (i2 | 0) == 0)) {
    break;
   }
   i26 = i25 + 36 | 0;
   i25 = HEAP32[i26 >> 2] | 0;
   i27 = HEAP32[i26 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = i25;
   HEAP32[i11 + 4 >> 2] = i27;
   i26 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 22 & 7;
   i28 = i25;
   i25 = i27;
   do {
    if ((i26 | 0) == 3 | (i26 | 0) == 1) {
     i27 = HEAP32[i1 + 40 >> 2] | 0;
     if ((i27 | 0) == 0) {
      break;
     }
     HEAP32[i11 >> 2] = (HEAP32[i27 + 88 >> 2] | 0) + i28;
     HEAP32[i12 + 4 >> 2] = (HEAP32[i27 + 92 >> 2] | 0) + i25;
    }
   } while (0);
   __ZN7WebCore14TransformState4moveERKNS_10LayoutSizeENS0_21TransformAccumulationE(i3, i12, 0);
   STACKTOP = i6;
   return;
  }
 } while (0);
 i12 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i23, i2, i13) | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 do {
  if ((i4 & 4 | 0) == 0) {
   i29 = i4;
  } else {
   if ((HEAP32[i12 + 20 >> 2] & 512 | 0) == 0) {
    i29 = i4;
    break;
   }
   i11 = (HEAP32[(HEAP32[i12 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i11 | 0) == 3 | (i11 | 0) == 1) {
    __ZNK7WebCore14TransformState11mappedPointEPb(i14, i3, 0);
    d30 = +_round(+(+HEAPF32[i14 >> 2]));
    do {
     if (d30 < +2147483647) {
      if (d30 <= +-2147483648) {
       i31 = -2147483648;
       break;
      }
      i31 = ~~d30;
     } else {
      i31 = 2147483647;
     }
    } while (0);
    d30 = +_round(+(+HEAPF32[i14 + 4 >> 2]));
    do {
     if (d30 < +2147483647) {
      if (d30 <= +-2147483648) {
       i32 = -2147483648;
       break;
      }
      i32 = ~~d30;
     } else {
      i32 = 2147483647;
     }
    } while (0);
    HEAP32[i17 >> 2] = i31;
    HEAP32[i17 + 4 >> 2] = i32;
    __ZNK7WebCore9RenderBox34flipForWritingModeIncludingColumnsERKNS_11LayoutPointE(i16, i12, i17);
    i11 = (HEAP32[i16 + 4 >> 2] | 0) - i32 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i16 >> 2] | 0) - i31;
    HEAP32[i15 + 4 >> 2] = i11;
    __ZN7WebCore14TransformState4moveERKNS_10LayoutSizeENS0_21TransformAccumulationE(i3, i15, 0);
   }
   i29 = i4 & -5;
  }
 } while (0);
 i4 = i12 | 0;
 __ZNK7WebCore14TransformState11mappedPointEPb(i20, i3, 0);
 d30 = +_round(+(+HEAPF32[i20 >> 2]));
 do {
  if (d30 < +2147483647) {
   if (d30 <= +-2147483648) {
    i33 = -2147483648;
    break;
   }
   i33 = ~~d30;
  } else {
   i33 = 2147483647;
  }
 } while (0);
 d30 = +_round(+(+HEAPF32[i20 + 4 >> 2]));
 do {
  if (d30 < +2147483647) {
   if (d30 <= +-2147483648) {
    i34 = -2147483648;
    break;
   }
   i34 = ~~d30;
  } else {
   i34 = 2147483647;
  }
 } while (0);
 HEAP32[i19 >> 2] = i33;
 HEAP32[i19 + 4 >> 2] = i34;
 i34 = i18 | 0;
 HEAP32[i34 >> 2] = 0;
 i33 = i18 + 4 | 0;
 HEAP32[i33 >> 2] = 0;
 i20 = HEAP32[i1 + 20 >> 2] & 25165824;
 if ((i20 | 0) == 25165824 | (i20 | 0) == 8388608) {
  __ZNK7WebCore20RenderBoxModelObject23offsetForInFlowPositionEv(i7, i1 | 0);
  HEAP32[i34 >> 2] = (HEAP32[i7 >> 2] | 0) + (HEAP32[i34 >> 2] | 0);
  HEAP32[i33 >> 2] = (HEAP32[i7 + 4 >> 2] | 0) + (HEAP32[i33 >> 2] | 0);
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i12 >> 2] | 0) + 520 >> 2] & 63](i4, i18, i19);
 if ((HEAP32[i12 + 20 >> 2] & 65536 | 0) != 0) {
  __ZNK7WebCore9RenderBox21scrolledContentOffsetEv(i8, i12);
  i19 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) - (HEAP32[i8 >> 2] | 0);
  HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) - i19;
 }
 do {
  if ((i29 & 2 | 0) == 0) {
   i35 = 0;
   i36 = 35;
  } else {
   if ((HEAP32[(HEAP32[(HEAP32[i12 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 512 | 0) == 0) {
    i37 = (HEAP32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] | 0) >>> 9 & 1;
   } else {
    i37 = 1;
   }
   if (!(__ZNK7WebCore12RenderObject31shouldUseTransformFromContainerEPKS0_(i23, i4) | 0)) {
    i35 = i37;
    i36 = 35;
    break;
   }
   HEAPF64[i21 >> 3] = +1;
   _memset(i21 + 8 | 0, 0, 32) | 0;
   HEAPF64[i21 + 40 >> 3] = +1;
   _memset(i21 + 48 | 0, 0, 32) | 0;
   HEAPF64[i21 + 80 >> 3] = +1;
   _memset(i21 + 88 | 0, 0, 32) | 0;
   HEAPF64[i21 + 120 >> 3] = +1;
   __ZNK7WebCore12RenderObject25getTransformFromContainerEPKS0_RKNS_10LayoutSizeERNS_20TransformationMatrixE(i23, i4, i18, i21);
   __ZN7WebCore14TransformState14applyTransformERKNS_20TransformationMatrixENS0_21TransformAccumulationEPb(i3, i21, i37, 0);
   i38 = i37;
  }
 } while (0);
 if ((i36 | 0) == 35) {
  i36 = HEAP32[i33 >> 2] | 0;
  HEAP32[i9 >> 2] = HEAP32[i34 >> 2];
  HEAP32[i9 + 4 >> 2] = i36;
  __ZN7WebCore14TransformState4moveERKNS_10LayoutSizeENS0_21TransformAccumulationE(i3, i9, i35);
  i38 = i35;
 }
 if ((HEAP8[i13] & 1) == 0) {
  FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i12 >> 2] | 0) + 588 >> 2] & 15](i4, i2, i3, i29, i5);
  STACKTOP = i6;
  return;
 } else {
  __ZNK7WebCore12RenderObject27offsetFromAncestorContainerEPS0_(i22, i2 | 0, i4);
  i4 = -(HEAP32[i22 + 4 >> 2] | 0) | 0;
  HEAP32[i10 >> 2] = -(HEAP32[i22 >> 2] | 0);
  HEAP32[i10 + 4 >> 2] = i4;
  __ZN7WebCore14TransformState4moveERKNS_10LayoutSizeENS0_21TransformAccumulationE(i3, i10, i38);
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore12RenderInline12splitInlinesEPNS_11RenderBlockES2_S2_PNS_12RenderObjectEPNS_20RenderBoxModelObjectE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i1 + 20 | 0;
 i11 = i1 + 4 | 0;
 if ((HEAP32[i10 >> 2] & 128 | 0) == 0) {
  i12 = HEAP32[i11 >> 2] | 0;
 } else {
  i12 = 0;
 }
 i13 = HEAP32[i1 + 36 >> 2] | 0;
 i14 = __ZN3WTF10fastMallocEj(52) | 0;
 i15 = i14;
 i16 = i13 | 0;
 HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 i16 = i14;
 HEAP32[i9 >> 2] = i13;
 __ZN7WebCore20RenderBoxModelObjectC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i16, i12, i9, 4);
 HEAP32[i14 >> 2] = H_BASE + 168;
 HEAP32[i14 + 44 >> 2] = 0;
 HEAP32[i14 + 48 >> 2] = 0;
 i9 = i14 + 20 | 0;
 HEAP32[i9 >> 2] = HEAP32[i9 >> 2] | 2097152;
 __ZN7WebCore13RenderElement15initializeStyleEv(i14);
 HEAP32[i9 >> 2] = HEAP32[i9 >> 2] & -805306369 | HEAP32[i10 >> 2] & 805306368;
 __ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_(i16, i6);
 i6 = HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 i11 = HEAP32[i6 + 1688 >> 2] | 0;
 do {
  if ((i11 | 0) == 0 | (i5 | 0) == 0) {
   i17 = i5;
  } else {
   if ((HEAP32[i5 + 20 >> 2] & 128 | 0) == 0) {
    i18 = HEAP32[i5 + 4 >> 2] | 0;
   } else {
    i18 = 0;
   }
   if ((i18 | 0) != (i11 | 0)) {
    i17 = i5;
    break;
   }
   i17 = HEAP32[i6 + 1704 >> 2] | 0;
  }
 } while (0);
 if ((i17 | 0) != 0) {
  i6 = i1 | 0;
  i5 = i17;
  while (1) {
   i17 = HEAP32[i5 + 16 >> 2] | 0;
   __ZN7WebCore13RenderElement19removeChildInternalERNS_12RenderObjectENS0_18NotifyChildrenTypeE(i6, i5, 0);
   __ZN7WebCore12RenderInline28addChildIgnoringContinuationEPNS_12RenderObjectES2_(i15, i5, 0);
   i11 = i5 + 20 | 0;
   i18 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i18 & 1 | 0) == 0) {
     HEAP32[i11 >> 2] = i18 | 1;
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i5, 1, 0);
     if ((HEAP32[i11 >> 2] & 32768 | 0) == 0) {
      break;
     }
     __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i5);
    }
   } while (0);
   __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i5, 1, 1);
   if ((i17 | 0) == 0) {
    break;
   } else {
    i5 = i17;
   }
  }
 }
 __ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_(i4 | 0, i16);
 i16 = i1 | 0;
 i4 = i2 | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5;
 if ((i5 | 0) == 0 | (i1 | 0) == (i4 | 0)) {
  i19 = i15;
  i20 = i16;
 } else {
  i6 = i8 | 0;
  i11 = i15;
  i15 = i16;
  i16 = 1;
  i18 = i5;
  i5 = i1;
  while (1) {
   do {
    if (i16 >>> 0 < 200 >>> 0) {
     i1 = i18 + 20 | 0;
     if ((HEAP32[i1 >> 2] & 128 | 0) == 0) {
      i21 = HEAP32[i18 + 4 >> 2] | 0;
     } else {
      i21 = 0;
     }
     i10 = HEAP32[i18 + 36 >> 2] | 0;
     i9 = __ZN3WTF10fastMallocEj(52) | 0;
     i14 = i9;
     i12 = i10 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     i12 = i9;
     HEAP32[i6 >> 2] = i10;
     __ZN7WebCore20RenderBoxModelObjectC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i12, i21, i8, 4);
     HEAP32[i9 >> 2] = H_BASE + 168;
     HEAP32[i9 + 44 >> 2] = 0;
     HEAP32[i9 + 48 >> 2] = 0;
     i10 = i9 + 20 | 0;
     HEAP32[i10 >> 2] = HEAP32[i10 >> 2] | 2097152;
     __ZN7WebCore13RenderElement15initializeStyleEv(i9);
     HEAP32[i10 >> 2] = HEAP32[i10 >> 2] & -805306369 | HEAP32[i1 >> 2] & 805306368;
     __ZN7WebCore12RenderInline28addChildIgnoringContinuationEPNS_12RenderObjectES2_(i14, i11 | 0, 0);
     i1 = i18;
     i10 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i1) | 0;
     __ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_(i1, i12);
     __ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_(i12, i10);
     i10 = HEAP32[i15 + 16 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i22 = i14;
      break;
     } else {
      i23 = i10;
     }
     while (1) {
      i10 = HEAP32[i23 + 16 >> 2] | 0;
      __ZN7WebCore13RenderElement19removeChildInternalERNS_12RenderObjectENS0_18NotifyChildrenTypeE(i18, i23, 0);
      __ZN7WebCore12RenderInline28addChildIgnoringContinuationEPNS_12RenderObjectES2_(i14, i23, 0);
      i12 = i23 + 20 | 0;
      i1 = HEAP32[i12 >> 2] | 0;
      do {
       if ((i1 & 1 | 0) == 0) {
        HEAP32[i12 >> 2] = i1 | 1;
        __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i23, 1, 0);
        if ((HEAP32[i12 >> 2] & 32768 | 0) == 0) {
         break;
        }
        __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i23);
       }
      } while (0);
      __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i23, 1, 1);
      if ((i10 | 0) == 0) {
       i22 = i14;
       break;
      } else {
       i23 = i10;
      }
     }
    } else {
     i22 = i11;
    }
   } while (0);
   i17 = HEAP32[i18 + 8 >> 2] | 0;
   i14 = i17;
   if ((i17 | 0) == 0 | (i14 | 0) == (i4 | 0)) {
    i19 = i22;
    i20 = i5;
    break;
   } else {
    i11 = i22;
    i15 = i5;
    i16 = i16 + 1 | 0;
    i18 = i17;
    i5 = i14;
   }
  }
 }
 i5 = i3 | 0;
 __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i5, i19 | 0, 0, 0);
 i19 = HEAP32[i20 + 16 >> 2] | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i20 = i2 | 0;
 i2 = i19;
 while (1) {
  i19 = HEAP32[i2 + 16 >> 2] | 0;
  __ZN7WebCore13RenderElement19removeChildInternalERNS_12RenderObjectENS0_18NotifyChildrenTypeE(i20, i2, 0);
  __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i5, i2, 0, 0);
  if ((i19 | 0) == 0) {
   break;
  } else {
   i2 = i19;
  }
 }
 STACKTOP = i7;
 return;
}
function __ZN7WebCore12RenderInline17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, d23 = +0, d24 = +0, i25 = 0, d26 = +0, d27 = +0, i28 = 0, i29 = 0, i30 = 0, d31 = +0, d32 = +0, i33 = 0, i34 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 40 | 0;
 i10 = i9;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i8 >> 2] = i2;
 HEAP32[i8 + 4 >> 2] = i3;
 i15 = i7;
 i16 = i6 | 0;
 i17 = i6;
 do {
  if ((HEAP8[i1 + 25 | 0] & 1) == 0) {
   __ZNK7WebCore12RenderInline26generateCulledLineBoxRectsINS_12_GLOBAL__N_129AbsoluteRectsGeneratorContextEEEvRT_PKS0_(i1, i8, i1);
  } else {
   i18 = HEAP32[i1 + 44 >> 2] | 0;
   if ((i18 | 0) == 0) {
    _memset(i15 | 0, 0, 16) | 0;
    __ZN7WebCore12_GLOBAL__N_129AbsoluteRectsGeneratorContextclERKNS_9FloatRectE(i8, i7);
    break;
   }
   i19 = i6 + 8 | 0;
   i20 = i18;
   while (1) {
    i18 = i20 | 0;
    i21 = i20 + 32 | 0;
    i22 = HEAP32[i21 >> 2] | 0;
    if ((i22 & 2048 | 0) == 0) {
     d23 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i18);
     d24 = d23;
     i25 = HEAP32[i21 >> 2] | 0;
    } else {
     d24 = +HEAPF32[i20 + 28 >> 2];
     i25 = i22;
    }
    if ((i25 & 2048 | 0) == 0) {
     d26 = +HEAPF32[i20 + 28 >> 2];
    } else {
     d26 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i18);
    }
    i18 = i20 + 20 | 0;
    i22 = HEAP32[i18 + 4 >> 2] | 0;
    HEAP32[i16 >> 2] = HEAP32[i18 >> 2];
    HEAP32[i16 + 4 >> 2] = i22;
    d23 = +d24;
    d27 = +d26;
    HEAPF32[i19 >> 2] = d23;
    HEAPF32[i19 + 4 >> 2] = d27;
    __ZN7WebCore12_GLOBAL__N_129AbsoluteRectsGeneratorContextclERKNS_9FloatRectE(i8, i17);
    i20 = HEAP32[i20 + 52 >> 2] | 0;
    if ((i20 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 i17 = i1 + 28 | 0;
 while (1) {
  i28 = HEAP32[i17 >> 2] | 0;
  if ((i28 | 0) == 0) {
   break;
  }
  if ((HEAP32[i28 + 20 >> 2] & 768 | 0) == 256) {
   i17 = i28 + 16 | 0;
  } else {
   i29 = 16;
   break;
  }
 }
 L21 : do {
  if ((i29 | 0) == 16) {
   i17 = i3 | 0;
   i8 = i3 + 4 | 0;
   i16 = i12 | 0;
   i25 = i12 + 4 | 0;
   i6 = i11 | 0;
   i7 = i11 + 4 | 0;
   i15 = i28;
   L23 : while (1) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 108 >> 2] & 255](i15) | 0) {
     i30 = i15;
    } else {
     d26 = +(HEAP32[i17 >> 2] | 0);
     d24 = +(HEAP32[i8 >> 2] | 0);
     i20 = HEAP32[i15 + 20 >> 2] | 0;
     do {
      if ((i20 & 32768 | 0) == 0) {
       if ((i20 & 512 | 0) == 0) {
        d31 = d26;
        d32 = d24;
        break;
       }
       d31 = d26 + +(HEAP32[i15 + 44 >> 2] | 0);
       d32 = d24 + +(HEAP32[i15 + 48 >> 2] | 0);
      } else {
       HEAPF32[i6 >> 2] = +0;
       HEAPF32[i7 >> 2] = +0;
       __ZNK7WebCore12RenderObject21localToContainerPointERKNS_10FloatPointEPKNS_22RenderLayerModelObjectEjPb(i10, i15, i11, i4, 0, 0);
       d27 = +HEAPF32[i9 >> 2];
       d31 = d27;
       d32 = +HEAPF32[i9 + 4 >> 2];
      }
     } while (0);
     i20 = HEAP32[(HEAP32[i15 >> 2] | 0) + 600 >> 2] | 0;
     d24 = +Math_floor(d31);
     do {
      if (d24 < +2147483647) {
       if (d24 <= +-2147483648) {
        i33 = -2147483648;
        break;
       }
       i33 = ~~d24;
      } else {
       i33 = 2147483647;
      }
     } while (0);
     d24 = +Math_floor(d32);
     do {
      if (d24 < +2147483647) {
       if (d24 <= +-2147483648) {
        i34 = -2147483648;
        break;
       }
       i34 = ~~d24;
      } else {
       i34 = 2147483647;
      }
     } while (0);
     HEAP32[i16 >> 2] = i33;
     HEAP32[i25 >> 2] = i34;
     FUNCTION_TABLE_viiii[i20 & 15](i15, i2, i12, i4);
     i30 = i15;
    }
    while (1) {
     i19 = HEAP32[i30 + 16 >> 2] | 0;
     if ((i19 | 0) == 0) {
      break L21;
     }
     if ((HEAP32[i19 + 20 >> 2] & 768 | 0) == 256) {
      i30 = i19;
     } else {
      i15 = i19;
      continue L23;
     }
    }
   }
  }
 } while (0);
 i30 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i1 | 0) | 0;
 if ((i30 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i12 = i30 | 0;
 i34 = HEAP32[(HEAP32[i30 >> 2] | 0) + 600 >> 2] | 0;
 if ((HEAP32[i30 + 20 >> 2] & 1024 | 0) == 0) {
  i33 = i30 + 44 | 0;
  i30 = (HEAP32[i33 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0;
  i9 = (HEAP32[i33 + 4 >> 2] | 0) + (HEAP32[i3 + 4 >> 2] | 0) | 0;
  i33 = (__ZNK7WebCore12RenderObject15containingBlockEv(i1 | 0) | 0) + 44 | 0;
  i11 = ~~+Math_floor(+(i9 - (HEAP32[i33 + 4 >> 2] | 0) | 0));
  HEAP32[i14 >> 2] = ~~+Math_floor(+(i30 - (HEAP32[i33 >> 2] | 0) | 0));
  HEAP32[i14 + 4 >> 2] = i11;
  FUNCTION_TABLE_viiii[i34 & 15](i12, i2, i14, i4);
  STACKTOP = i5;
  return;
 } else {
  i14 = (__ZNK7WebCore12RenderObject15containingBlockEv(i12) | 0) + 44 | 0;
  i11 = (HEAP32[i14 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0;
  i33 = (HEAP32[i14 + 4 >> 2] | 0) + (HEAP32[i3 + 4 >> 2] | 0) | 0;
  i3 = (__ZNK7WebCore12RenderObject15containingBlockEv(i1 | 0) | 0) + 44 | 0;
  i1 = ~~+Math_floor(+(i33 - (HEAP32[i3 + 4 >> 2] | 0) | 0));
  HEAP32[i13 >> 2] = ~~+Math_floor(+(i11 - (HEAP32[i3 >> 2] | 0) | 0));
  HEAP32[i13 + 4 >> 2] = i1;
  FUNCTION_TABLE_viiii[i34 & 15](i12, i2, i13, i4);
  STACKTOP = i5;
  return;
 }
}
function __ZNK7WebCore12RenderInline29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 56 | 0;
 if ((HEAP8[i2 + 25 | 0] & 1) == 0) {
  i10 = __ZNK7WebCore12RenderInline24culledInlineFirstLineBoxEv(i2) | 0;
 } else {
  i10 = HEAP32[i2 + 44 >> 2] | 0;
 }
 do {
  if ((i10 | 0) == 0) {
   if ((__ZNK7WebCore20RenderBoxModelObject12continuationEv(i2 | 0) | 0) != 0) {
    break;
   }
   _memset(i1 | 0, 0, 16) | 0;
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZNK7WebCore12RenderInline30linesVisualOverflowBoundingBoxEv(i5, i2);
 i10 = i2 | 0;
 i11 = __ZNK7WebCore12RenderObject15containingBlockEv(i10) | 0;
 i12 = i11 | 0;
 i13 = i3 | 0;
 L10 : do {
  if ((i2 | 0) == 0) {
   i14 = 0;
  } else {
   i15 = i5 | 0;
   i16 = i5 + 4 | 0;
   i17 = i10;
   while (1) {
    i18 = HEAP32[i17 + 20 >> 2] | 0;
    if ((i18 & 768 | 0) == 256) {
     i14 = 0;
     break L10;
    }
    if ((HEAP32[i17 + 24 >> 2] & 4 | 0) == 0 | (i17 | 0) == (i12 | 0)) {
     i14 = 0;
     break L10;
    }
    if ((i17 | 0) == (i13 | 0)) {
     i14 = 1;
     break L10;
    }
    i19 = (HEAP32[(HEAP32[i17 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 22 & 7;
    do {
     if ((i19 | 0) == 3 | (i19 | 0) == 1) {
      if ((i18 & 32768 | 0) == 0) {
       break;
      }
      i20 = (HEAP32[i17 + 40 >> 2] | 0) + 88 | 0;
      i21 = HEAP32[i20 + 4 >> 2] | 0;
      HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + (HEAP32[i20 >> 2] | 0);
      HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + i21;
     }
    } while (0);
    i18 = HEAP32[i17 + 8 >> 2] | 0;
    if ((i18 | 0) == 0) {
     i14 = 0;
     break;
    } else {
     i17 = i18 | 0;
    }
   }
  }
 } while (0);
 i13 = HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 12 >> 2] | 0;
 i12 = HEAP32[i13 + 64 >> 2] | 0;
 if ((i12 & 2013265920 | 0) == 0) {
  i22 = 0;
  i23 = 0;
 } else {
  i22 = HEAP32[i13 + 68 >> 2] | 0;
  i23 = i12 >>> 1 & 65535;
 }
 i12 = i22 + i23 | 0;
 i23 = (i12 | 0) > 0 ? i12 & 65535 : 0;
 i12 = i5 | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) - i23;
 i12 = i5 + 8 | 0;
 i22 = i23 << 1;
 HEAP32[i12 >> 2] = i22 + (HEAP32[i12 >> 2] | 0);
 i12 = i5 + 4 | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) - i23;
 i12 = i5 + 12 | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + i22;
 if (i14 | (i11 | 0) == 0) {
  i14 = i1;
  i22 = i5;
  HEAP32[i14 >> 2] = HEAP32[i22 >> 2];
  HEAP32[i14 + 4 >> 2] = HEAP32[i22 + 4 >> 2];
  HEAP32[i14 + 8 >> 2] = HEAP32[i22 + 8 >> 2];
  HEAP32[i14 + 12 >> 2] = HEAP32[i22 + 12 >> 2];
  STACKTOP = i4;
  return;
 }
 i22 = i11 + 20 | 0;
 i14 = HEAP32[i22 >> 2] | 0;
 if ((i14 & 4194304 | 0) == 0) {
  i24 = i14;
 } else {
  __ZNK7WebCore11RenderBlock20adjustRectForColumnsERNS_10LayoutRectE(i11, i5);
  i24 = HEAP32[i22 >> 2] | 0;
 }
 i22 = i11 | 0;
 if ((i24 & 65536 | 0) != 0) {
  __ZNK7WebCore9RenderBox40applyCachedClipAndScrollOffsetForRepaintERNS_10LayoutRectE(i22, i5);
 }
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i11 >> 2] | 0) + 512 >> 2] & 15](i22, i3, i5, 0);
 do {
  if ((i23 | 0) != 0) {
   i22 = i2 + 28 | 0;
   while (1) {
    i25 = HEAP32[i22 >> 2] | 0;
    if ((i25 | 0) == 0) {
     break;
    }
    if ((HEAP32[i25 + 20 >> 2] & 768 | 0) == 256) {
     i22 = i25 + 16 | 0;
    } else {
     i26 = 28;
     break;
    }
   }
   L40 : do {
    if ((i26 | 0) == 28) {
     i22 = i7 | 0;
     i11 = i25;
     L42 : while (1) {
      i24 = HEAP32[(HEAP32[i11 >> 2] | 0) + 504 >> 2] | 0;
      HEAP32[i22 >> 2] = i23;
      FUNCTION_TABLE_viiii[i24 & 15](i6, i11, i3, i7);
      __ZN7WebCore10LayoutRect5uniteERKS0_(i5, i6);
      i24 = i11;
      while (1) {
       i14 = HEAP32[i24 + 16 >> 2] | 0;
       if ((i14 | 0) == 0) {
        break L40;
       }
       if ((HEAP32[i14 + 20 >> 2] & 768 | 0) == 256) {
        i24 = i14;
       } else {
        i11 = i14;
        continue L42;
       }
      }
     }
    }
   } while (0);
   i11 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i2 | 0) | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   if ((HEAP32[i11 + 20 >> 2] & 1024 | 0) != 0) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) == 0) {
    break;
   }
   i22 = HEAP32[(HEAP32[i11 >> 2] | 0) + 504 >> 2] | 0;
   HEAP32[i9 >> 2] = i23;
   FUNCTION_TABLE_viiii[i22 & 15](i8, i11 | 0, i3, i9);
   __ZN7WebCore10LayoutRect5uniteERKS0_(i5, i8);
  }
 } while (0);
 i8 = i1;
 i1 = i5;
 HEAP32[i8 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore12RenderInline37culledInlineVisualOverflowBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 40 | 0;
 i8 = i7 | 0;
 i9 = i7;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 _memset(i4 | 0, 0, 16) | 0;
 HEAP32[i5 >> 2] = i4;
 __ZNK7WebCore12RenderInline26generateCulledLineBoxRectsINS_12_GLOBAL__N_132LinesBoundingBoxGeneratorContextEEEvRT_PKS0_(i2, i5, i2);
 __ZN7WebCore19enclosingLayoutRectERKNS_9FloatRectE(i1, i4);
 i4 = i2 + 36 | 0;
 i5 = (HEAP32[(HEAP32[i4 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i13 = HEAP32[i2 + 28 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i6 | 0;
 i14 = i6 + 4 | 0;
 i15 = i6 + 12 | 0;
 i16 = i6 + 8 | 0;
 i17 = i7 + 8 | 0;
 if ((i5 | 0) == 3) {
  i7 = i13;
  while (1) {
   i18 = HEAP32[i7 + 20 >> 2] | 0;
   do {
    if (!((i18 & 64 | 0) != 0 | (i18 & 25165824 | 0) == 16777216)) {
     if ((i18 & 512 | 0) != 0) {
      if (__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(i7) | 0) {
       break;
      }
      if ((HEAP32[i7 + 84 >> 2] | 0) == 0) {
       break;
      }
      __ZNK7WebCore9RenderBox39logicalVisualOverflowRectForPropagationEPNS_11RenderStyleE(i6, i7, HEAP32[i4 >> 2] | 0);
      i19 = i7 + 44 | 0;
      i20 = HEAP32[i19 + 4 >> 2] | 0;
      HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + (HEAP32[i19 >> 2] | 0);
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + i20;
      __ZN7WebCore10LayoutRect14uniteIfNonZeroERKS0_(i1, i6);
      break;
     }
     if ((i18 & 768 | 0) == 256) {
      __ZNK7WebCore10RenderText30linesVisualOverflowBoundingBoxEv(i12, i7);
      __ZN7WebCore10LayoutRect14uniteIfNonZeroERKS0_(i1, i12);
      break;
     }
     if ((HEAP32[i7 + 24 >> 2] & 4 | 0) == 0) {
      break;
     }
     i20 = i7;
     if ((HEAP8[i20 + 25 | 0] & 1) == 0) {
      __ZNK7WebCore12RenderInline37culledInlineVisualOverflowBoundingBoxEv(i10, i20);
      __ZN7WebCore10LayoutRect14uniteIfNonZeroERKS0_(i1, i10);
      break;
     }
     if (__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(i7) | 0) {
      break;
     }
     __ZNK7WebCore12RenderInline30linesVisualOverflowBoundingBoxEv(i11, i20);
     __ZN7WebCore10LayoutRect14uniteIfNonZeroERKS0_(i1, i11);
    }
   } while (0);
   i7 = HEAP32[i7 + 16 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
  }
  STACKTOP = i3;
  return;
 } else {
  i21 = i13;
 }
 while (1) {
  i13 = HEAP32[i21 + 20 >> 2] | 0;
  do {
   if (!((i13 & 64 | 0) != 0 | (i13 & 25165824 | 0) == 16777216)) {
    if ((i13 & 512 | 0) != 0) {
     if (__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(i21) | 0) {
      break;
     }
     if ((HEAP32[i21 + 84 >> 2] | 0) == 0) {
      break;
     }
     __ZNK7WebCore9RenderBox39logicalVisualOverflowRectForPropagationEPNS_11RenderStyleE(i6, i21, HEAP32[i4 >> 2] | 0);
     if ((i5 | 0) == 3 | (i5 | 0) == 0) {
      i7 = i21 + 44 | 0;
      i18 = HEAP32[i7 + 4 >> 2] | 0;
      HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + (HEAP32[i7 >> 2] | 0);
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + i18;
      __ZN7WebCore10LayoutRect14uniteIfNonZeroERKS0_(i1, i6);
      break;
     } else {
      i18 = i21 + 44 | 0;
      i7 = HEAP32[i18 + 4 >> 2] | 0;
      i20 = (HEAP32[i2 >> 2] | 0) + (HEAP32[i18 >> 2] | 0) | 0;
      HEAP32[i2 >> 2] = i20;
      i18 = (HEAP32[i14 >> 2] | 0) + i7 | 0;
      HEAP32[i14 >> 2] = i18;
      i7 = HEAP32[i15 >> 2] | 0;
      i19 = HEAP32[i16 >> 2] | 0;
      HEAP32[i8 >> 2] = i18;
      HEAP32[i8 + 4 >> 2] = i20;
      HEAP32[i17 >> 2] = i7;
      HEAP32[i17 + 4 >> 2] = i19;
      __ZN7WebCore10LayoutRect14uniteIfNonZeroERKS0_(i1, i9);
      break;
     }
    }
    if ((i13 & 768 | 0) == 256) {
     __ZNK7WebCore10RenderText30linesVisualOverflowBoundingBoxEv(i12, i21);
     __ZN7WebCore10LayoutRect14uniteIfNonZeroERKS0_(i1, i12);
     break;
    }
    if ((HEAP32[i21 + 24 >> 2] & 4 | 0) == 0) {
     break;
    }
    i19 = i21;
    if ((HEAP8[i19 + 25 | 0] & 1) == 0) {
     __ZNK7WebCore12RenderInline37culledInlineVisualOverflowBoundingBoxEv(i10, i19);
     __ZN7WebCore10LayoutRect14uniteIfNonZeroERKS0_(i1, i10);
     break;
    }
    if (__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(i21) | 0) {
     break;
    }
    __ZNK7WebCore12RenderInline30linesVisualOverflowBoundingBoxEv(i11, i19);
    __ZN7WebCore10LayoutRect14uniteIfNonZeroERKS0_(i1, i11);
   }
  } while (0);
  i21 = HEAP32[i21 + 16 >> 2] | 0;
  if ((i21 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12RenderInline9splitFlowEPNS_12RenderObjectEPNS_11RenderBlockES2_PNS_20RenderBoxModelObjectE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i6 = __ZNK7WebCore12RenderObject15containingBlockEv(i1 | 0) | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 1016 >> 2] & 31](i6);
 i7 = i6 | 0;
 do {
  if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i7) | 0) {
   i8 = HEAP32[i6 + 8 >> 2] | 0;
   if ((i8 | 0) != 0) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 56 >> 2] & 255](i8 | 0) | 0) {
     i9 = 7;
     break;
    }
   }
   __ZN7WebCore11RenderBlock23removePositionedObjectsEPS0_NS_20ContainingBlockStateE(i6, 0, 1);
   if ((HEAP32[i6 + 24 >> 2] & 32 | 0) != 0) {
    __ZN7WebCore15RenderBlockFlow21removeFloatingObjectsEv(i6);
   }
   i10 = i6;
   i11 = __ZNK7WebCore12RenderObject15containingBlockEv(i7) | 0;
   i12 = 0;
  } else {
   i9 = 7;
  }
 } while (0);
 if ((i9 | 0) == 7) {
  i10 = __ZN7WebCore11RenderBlock43createAnonymousWithParentRendererAndDisplayEPKNS_12RenderObjectENS_8EDisplayE(i7, 1) | 0;
  i11 = i6;
  i12 = 1;
 }
 i6 = i11 | 0;
 i7 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i10 >> 2] | 0) + 996 >> 2] & 15](i10, i6) | 0;
 i9 = i7;
 if (i12) {
  i8 = HEAP32[i11 + 28 >> 2] | 0;
  i13 = i11 | 0;
  __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i13, i10 | 0, i8, 0);
  i14 = i8;
  i15 = i13;
 } else {
  i14 = HEAP32[i10 + 16 >> 2] | 0;
  i15 = i11 | 0;
 }
 __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i15, i3 | 0, i14, 0);
 i13 = i7 | 0;
 __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i15, i13, i14, 0);
 i8 = i11 + 20 | 0;
 HEAP32[i8 >> 2] = HEAP32[i8 >> 2] & -2097153;
 if (!((i14 | 0) == 0 | i12 ^ 1)) {
  i12 = i10 | 0;
  i11 = i14;
  while (1) {
   i14 = HEAP32[i11 + 16 >> 2] | 0;
   __ZN7WebCore13RenderElement19removeChildInternalERNS_12RenderObjectENS0_18NotifyChildrenTypeE(i15, i11, 0);
   __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i12, i11, 0, 0);
   i16 = i11 + 20 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i17 & 1 | 0) == 0) {
     HEAP32[i16 >> 2] = i17 | 1;
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i11, 1, 0);
     if ((HEAP32[i16 >> 2] & 32768 | 0) == 0) {
      break;
     }
     __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i11);
    }
   } while (0);
   __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i11, 1, 1);
   if ((i14 | 0) == 0) {
    break;
   } else {
    i11 = i14;
   }
  }
 }
 __ZN7WebCore12RenderInline12splitInlinesEPNS_11RenderBlockES2_S2_PNS_12RenderObjectEPNS_20RenderBoxModelObjectE(i1, i10, i9, i3, i2, i5);
 i5 = i3 + 20 | 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] & -2097153;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 628 >> 2] & 63](i3, i4, 0);
 i4 = i10 | 0;
 i3 = i10 + 20 | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i10 & 1 | 0) == 0) {
   HEAP32[i3 >> 2] = i10 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i4, 1, 0);
   if ((HEAP32[i3 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i4);
  }
 } while (0);
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i4, 1, 1);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 & 1 | 0) == 0) {
   HEAP32[i8 >> 2] = i4 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i6, 1, 0);
   if ((HEAP32[i8 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i6);
  }
 } while (0);
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i6, 1, 1);
 i6 = i7 + 20 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 & 1 | 0) != 0) {
  __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i13, 1, 1);
  return;
 }
 HEAP32[i6 >> 2] = i7 | 1;
 __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i13, 1, 0);
 if ((HEAP32[i6 >> 2] & 32768 | 0) == 0) {
  __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i13, 1, 1);
  return;
 }
 __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i13);
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i13, 1, 1);
 return;
}
function __ZNK7WebCore12RenderInline21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i7 | 0;
 i9 = i7;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i1 | 0;
 i12 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 do {
  if ((HEAP32[i12 + 196 >> 2] | 0) == 0) {
   i13 = HEAP32[i12 + 192 >> 2] | 0;
   if (!((i13 | 0) != 0 & (i2 | 0) == 0)) {
    break;
   }
   i14 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 22 & 7;
   do {
    if ((i14 | 0) == 3 | (i14 | 0) == 1) {
     i15 = HEAP32[i1 + 40 >> 2] | 0;
     if ((i15 | 0) == 0) {
      break;
     }
     i16 = HEAP32[i15 + 92 >> 2] | 0;
     i17 = i3 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + (HEAP32[i15 + 88 >> 2] | 0);
     i15 = i3 + 4 | 0;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + i16;
    }
   } while (0);
   i14 = HEAP32[i13 + 40 >> 2] | 0;
   i16 = i3 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + (HEAP32[i13 + 36 >> 2] | 0);
   i16 = i3 + 4 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + i14;
   if ((HEAP8[i13 | 0] & 1) == 0) {
    STACKTOP = i5;
    return;
   }
   __ZN7WebCore10LayoutRect9intersectERKS0_(i3, i13 + 20 | 0);
   STACKTOP = i5;
   return;
  }
 } while (0);
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i5;
  return;
 }
 i12 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i11, i2, i6) | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i11 = i3;
 i14 = HEAP32[i11 >> 2] | 0;
 i16 = HEAP32[i11 + 4 >> 2] | 0;
 i15 = i14;
 i17 = i16;
 i18 = i17;
 i19 = i1 + 36 | 0;
 do {
  if ((HEAP32[i12 + 24 >> 2] & 32 | 0) == 0) {
   i20 = i15;
   i21 = i18;
  } else {
   i22 = (HEAP32[(HEAP32[i19 >> 2] | 0) + 48 >> 2] | 0) >>> 22 & 7;
   if ((i22 | 0) == 6 | (i22 | 0) == 2) {
    i20 = i15;
    i21 = i18;
    break;
   }
   if ((HEAP32[i12 + 20 >> 2] & 4194304 | 0) == 0) {
    i20 = i15;
    i21 = i18;
    break;
   }
   i22 = i3 + 8 | 0;
   i23 = HEAP32[i22 >> 2] | 0;
   i24 = HEAP32[i22 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = i14 & -1;
   HEAP32[i8 + 4 >> 2] = i17 | i16 & 0;
   i22 = i7 + 8 | 0;
   HEAP32[i22 >> 2] = i23;
   HEAP32[i22 + 4 >> 2] = i24;
   __ZNK7WebCore11RenderBlock20adjustRectForColumnsERNS_10LayoutRectE(i12, i9);
   i24 = HEAP32[i8 >> 2] | 0;
   i22 = HEAP32[i8 + 4 >> 2] | 0;
   i23 = i3;
   i25 = i7;
   HEAP32[i23 >> 2] = HEAP32[i25 >> 2];
   HEAP32[i23 + 4 >> 2] = HEAP32[i25 + 4 >> 2];
   HEAP32[i23 + 8 >> 2] = HEAP32[i25 + 8 >> 2];
   HEAP32[i23 + 12 >> 2] = HEAP32[i25 + 12 >> 2];
   i20 = i24;
   i21 = i22;
  }
 } while (0);
 i7 = (HEAP32[(HEAP32[i19 >> 2] | 0) + 48 >> 2] | 0) >>> 22 & 7;
 do {
  if ((i7 | 0) == 3 | (i7 | 0) == 1) {
   i19 = HEAP32[i1 + 40 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i26 = i20;
    i27 = i21;
    break;
   }
   i26 = (HEAP32[i19 + 88 >> 2] | 0) + i20 | 0;
   i27 = (HEAP32[i19 + 92 >> 2] | 0) + i21 | 0;
  } else {
   i26 = i20;
   i27 = i21;
  }
 } while (0);
 HEAP32[i11 >> 2] = i26;
 HEAP32[i11 + 4 >> 2] = i27;
 i27 = i12 | 0;
 do {
  if ((HEAP32[i12 + 20 >> 2] & 65536 | 0) != 0) {
   __ZNK7WebCore9RenderBox40applyCachedClipAndScrollOffsetForRepaintERNS_10LayoutRectE(i12, i3);
   if ((HEAP32[i3 + 8 >> 2] | 0) < 1) {
    STACKTOP = i5;
    return;
   }
   if ((HEAP32[i3 + 12 >> 2] | 0) >= 1) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 if ((HEAP8[i6] & 1) == 0) {
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i12 >> 2] | 0) + 512 >> 2] & 15](i27, i2, i3, i4);
  STACKTOP = i5;
  return;
 } else {
  __ZNK7WebCore12RenderObject27offsetFromAncestorContainerEPS0_(i10, i2 | 0, i27);
  i27 = HEAP32[i10 + 4 >> 2] | 0;
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - (HEAP32[i10 >> 2] | 0);
  i10 = i3 + 4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) - i27;
  STACKTOP = i5;
  return;
 }
}
function __ZNK7WebCore12RenderInline31offsetForInFlowPositionedInlineEPKNS_9RenderBoxE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i2 + 20 >> 2] & 25165824;
 if (!((i7 | 0) == 25165824 | (i7 | 0) == 8388608)) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i7 = i2 + 44 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = HEAP32[i2 + 40 >> 2] | 0;
   i10 = HEAP32[i9 + 168 >> 2] | 0;
   i11 = HEAP32[i9 + 164 >> 2] | 0;
  } else {
   i9 = _round(+(+HEAPF32[((HEAP32[i8 + 32 >> 2] & 2048 | 0) == 0 ? i8 + 24 | 0 : i8 + 20 | 0) >> 2])) | 0;
   i12 = HEAP32[i7 >> 2] | 0;
   d13 = +HEAPF32[((HEAP32[i12 + 32 >> 2] & 2048 | 0) == 0 ? i12 + 20 | 0 : i12 + 24 | 0) >> 2];
   if (d13 >= +2147483647) {
    i10 = 2147483647;
    i11 = i9;
    break;
   }
   if (d13 <= +-2147483648) {
    i10 = -2147483648;
    i11 = i9;
    break;
   }
   i10 = ~~d13;
   i11 = i9;
  }
 } while (0);
 i7 = i3 + 36 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i2 + 36 | 0;
 i2 = HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] | 0;
 i12 = i2 >>> 13 & 3;
 i14 = HEAP32[i8 + 16 >> 2] | 0;
 do {
  if ((i12 | 0) == 3 | (i12 | 0) == 0) {
   if ((HEAP8[i14 + 9 | 0] | 0) != 0) {
    i15 = i11;
    i16 = i2;
    i17 = i14;
    break;
   }
   if ((HEAP8[i14 + 17 | 0] | 0) == 0) {
    i18 = 13;
   } else {
    i15 = i11;
    i16 = i2;
    i17 = i14;
   }
  } else {
   if ((HEAP8[i14 + 25 | 0] | 0) != 0) {
    i15 = i11;
    i16 = i2;
    i17 = i14;
    break;
   }
   if ((HEAP8[i14 + 33 | 0] | 0) == 0) {
    i18 = 13;
   } else {
    i15 = i11;
    i16 = i2;
    i17 = i14;
   }
  }
 } while (0);
 L16 : do {
  if ((i18 | 0) == 13) {
   switch ((HEAP32[i8 + 48 >> 2] | 0) >>> 5 & 31 | 0) {
   case 0:
   case 19:
   case 17:
   case 7:
   case 5:
   case 21:
    {
     i15 = 0;
     i16 = i2;
     i17 = i14;
     break L16;
     break;
    }
   default:
    {}
   }
   i12 = __ZNK7WebCore12RenderObject15containingBlockEv(i3 | 0) | 0;
   i19 = i12 | 0;
   i20 = (HEAP32[(HEAP32[i12 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   i21 = HEAP32[i12 >> 2] | 0;
   if ((i20 | 0) == 3 | (i20 | 0) == 0) {
    i20 = FUNCTION_TABLE_ii[HEAP32[i21 + 744 >> 2] & 255](i19) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 712 >> 2] & 127](i5, i19);
    i22 = (HEAP32[i5 >> 2] | 0) + i20 | 0;
   } else {
    i20 = FUNCTION_TABLE_ii[HEAP32[i21 + 736 >> 2] & 255](i19) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 704 >> 2] & 127](i6, i19);
    i22 = (HEAP32[i6 >> 2] | 0) + i20 | 0;
   }
   i15 = i11 - i22 | 0;
   i16 = HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] | 0;
   i17 = HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] | 0;
  }
 } while (0);
 i7 = i16 >>> 13 & 3;
 do {
  if ((i7 | 0) == 3 | (i7 | 0) == 0) {
   if ((HEAP8[i17 + 25 | 0] | 0) != 0) {
    i18 = 23;
    break;
   }
   if ((HEAP8[i17 + 33 | 0] | 0) == 0) {
    i23 = 0;
   } else {
    i18 = 23;
   }
  } else {
   if ((HEAP8[i17 + 9 | 0] | 0) != 0) {
    i18 = 23;
    break;
   }
   if ((HEAP8[i17 + 17 | 0] | 0) == 0) {
    i23 = 0;
   } else {
    i18 = 23;
   }
  }
 } while (0);
 if ((i18 | 0) == 23) {
  i23 = i10;
 }
 if ((i7 | 0) == 3 | (i7 | 0) == 0) {
  i7 = i1;
  HEAP32[i7 >> 2] = i15;
  HEAP32[i7 + 4 >> 2] = i23;
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i1 >> 2] = i23;
  HEAP32[i1 + 4 >> 2] = i15;
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore12RenderInline30linesVisualOverflowBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 if ((HEAP8[i2 + 25 | 0] & 1) == 0) {
  __ZNK7WebCore12RenderInline37culledInlineVisualOverflowBoundingBoxEv(i1, i2);
  return;
 }
 i3 = i2 + 44 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i2 + 48 | 0;
   if ((HEAP32[i5 >> 2] | 0) == 0) {
    break;
   } else {
    i6 = i4;
    i7 = 2147483647;
    i8 = -2147483648;
   }
   while (1) {
    i9 = HEAP32[i6 + 36 >> 2] | 0;
    i10 = (HEAP32[i6 + 32 >> 2] & 2048 | 0) == 0;
    do {
     if ((i9 | 0) == 0) {
      d11 = +HEAPF32[(i10 ? i6 + 24 | 0 : i6 + 20 | 0) >> 2];
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
      i13 = (i12 | 0) < (i7 | 0) ? i12 : i7;
      d11 = +Math_ceil(+HEAPF32[(i10 ? i6 + 24 | 0 : i6 + 20 | 0) >> 2] + +HEAPF32[i6 + 28 >> 2]);
      if (d11 >= +2147483647) {
       i14 = 2147483647;
       i15 = i13;
       break;
      }
      if (d11 <= +-2147483648) {
       i14 = -2147483648;
       i15 = i13;
       break;
      }
      i14 = ~~d11;
      i15 = i13;
     } else {
      if (i10) {
       i13 = HEAP32[i9 + 24 >> 2] | 0;
       i14 = (HEAP32[i9 + 32 >> 2] | 0) + i13 | 0;
       i15 = (i13 | 0) < (i7 | 0) ? i13 : i7;
       break;
      } else {
       i13 = HEAP32[i9 + 20 >> 2] | 0;
       i14 = (HEAP32[i9 + 28 >> 2] | 0) + i13 | 0;
       i15 = (i13 | 0) < (i7 | 0) ? i13 : i7;
       break;
      }
     }
    } while (0);
    i16 = (i8 | 0) < (i14 | 0) ? i14 : i8;
    i9 = HEAP32[i6 + 52 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break;
    } else {
     i6 = i9;
     i7 = i15;
     i8 = i16;
    }
   }
   i9 = __ZN7WebCore9InlineBox4rootEv(i4 | 0) | 0;
   i10 = __ZN7WebCore9InlineBox4rootEv(HEAP32[i5 >> 2] | 0) | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   i17 = HEAP32[i13 + 36 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i18 = i9 + 72 | 0;
    } else {
     if ((HEAP32[i13 + 32 >> 2] & 2048 | 0) == 0) {
      i18 = i17 + 20 | 0;
      break;
     } else {
      i18 = i17 + 24 | 0;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i18 >> 2] | 0;
   i13 = i16 - i15 | 0;
   i9 = HEAP32[i5 >> 2] | 0;
   i19 = HEAP32[i9 + 36 >> 2] | 0;
   do {
    if ((i19 | 0) == 0) {
     i20 = HEAP32[i10 + 76 >> 2] | 0;
    } else {
     if ((HEAP32[i9 + 32 >> 2] & 2048 | 0) == 0) {
      i20 = (HEAP32[i19 + 28 >> 2] | 0) + (HEAP32[i19 + 20 >> 2] | 0) | 0;
      break;
     } else {
      i20 = (HEAP32[i19 + 32 >> 2] | 0) + (HEAP32[i19 + 24 >> 2] | 0) | 0;
      break;
     }
    }
   } while (0);
   i19 = i15;
   i9 = i17;
   i10 = i13;
   i5 = i20 - i17 | 0;
   i21 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i21 | 0) == 3 | (i21 | 0) == 0) {
    i22 = i9 | 0;
    i23 = i19 | 0;
    i24 = i5 | 0;
    i25 = i10 | 0;
   } else {
    i22 = i19 | 0;
    i23 = i9 | 0;
    i24 = i10 | 0;
    i25 = i5 | 0;
   }
   i5 = i1;
   HEAP32[i5 >> 2] = i23;
   HEAP32[i5 + 4 >> 2] = i22;
   i5 = i1 + 8 | 0;
   HEAP32[i5 >> 2] = i25;
   HEAP32[i5 + 4 >> 2] = i24;
   return;
  }
 } while (0);
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore12RenderInline19hitTestCulledInlineERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 720 | 0;
 i7 = i6 | 0;
 i8 = i6 + 72 | 0;
 i9 = i6 + 80 | 0;
 i10 = i6 + 376 | 0;
 i11 = i6 + 392 | 0;
 i12 = i6 + 408 | 0;
 i13 = i6 + 704 | 0;
 i14 = HEAP32[i1 + 36 >> 2] | 0;
 if ((HEAP32[i14 + 40 >> 2] & 6144 | 0) != 0) {
  i15 = 0;
  STACKTOP = i6;
  return i15 | 0;
 }
 if ((HEAP32[i14 + 44 >> 2] & 1920 | 0) == 0) {
  i15 = 0;
  STACKTOP = i6;
  return i15 | 0;
 }
 i14 = -(HEAP32[i5 + 4 >> 2] | 0) | 0;
 HEAP32[i8 >> 2] = -(HEAP32[i5 >> 2] | 0);
 HEAP32[i8 + 4 >> 2] = i14;
 __ZN7WebCore15HitTestLocationC1ERKS0_RKNS_10LayoutSizeEPNS_12RenderRegionE(i7, i4, i8, 0);
 __ZN7WebCore6RegionC1Ev(i9);
 i8 = i10 | 0;
 HEAP8[i8] = 0;
 HEAP32[i10 + 4 >> 2] = i9;
 HEAP32[i10 + 8 >> 2] = i7;
 __ZNK7WebCore12RenderInline26generateCulledLineBoxRectsINS_12_GLOBAL__N_136HitTestCulledInlinesGeneratorContextEEEvRT_PKS0_(i1, i10, i1);
 do {
  if ((HEAP8[i8] & 1) == 0) {
   i16 = 0;
  } else {
   __ZN7WebCore12RenderInline19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE(i1, i3, i7 | 0);
   if ((HEAP32[i1 + 20 >> 2] & 128 | 0) == 0) {
    i17 = HEAP32[i1 + 4 >> 2] | 0;
   } else {
    i17 = 0;
   }
   _memset(i11 | 0, 0, 16) | 0;
   __ZN7WebCore13HitTestResult28addNodeToRectBasedTestResultEPNS_4NodeERKNS_14HitTestRequestERKNS_15HitTestLocationERKNS_10LayoutRectE(i3, i17 | 0, i2, i4, i11) | 0;
   i10 = i13;
   i14 = i7 + 8 | 0;
   HEAP32[i10 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i10 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
   HEAP32[i10 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
   HEAP32[i10 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
   __ZN7WebCore6RegionC1ERKNS_7IntRectE(i12, i13);
   i14 = __ZNK7WebCore6Region8containsERKS0_(i9, i12) | 0;
   i10 = i12 + 164 | 0;
   if ((HEAP32[i10 >> 2] | 0) != 0) {
    HEAP32[i10 >> 2] = 0;
   }
   i10 = i12 + 156 | 0;
   i5 = HEAP32[i10 >> 2] | 0;
   if (!((i12 + 168 | 0) == (i5 | 0) | (i5 | 0) == 0)) {
    HEAP32[i10 >> 2] = 0;
    HEAP32[i12 + 160 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i5);
   }
   i5 = i12 + 24 | 0;
   if ((HEAP32[i5 >> 2] | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
   }
   i5 = i12 + 16 | 0;
   i10 = HEAP32[i5 >> 2] | 0;
   if ((i12 + 28 | 0) == (i10 | 0) | (i10 | 0) == 0) {
    i16 = i14;
    break;
   }
   HEAP32[i5 >> 2] = 0;
   HEAP32[i12 + 20 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i10);
   i16 = i14;
  }
 } while (0);
 i12 = i9 + 164 | 0;
 if ((HEAP32[i12 >> 2] | 0) != 0) {
  HEAP32[i12 >> 2] = 0;
 }
 i12 = i9 + 156 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if (!((i9 + 168 | 0) == (i13 | 0) | (i13 | 0) == 0)) {
  HEAP32[i12 >> 2] = 0;
  HEAP32[i9 + 160 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i13);
 }
 i13 = i9 + 24 | 0;
 if ((HEAP32[i13 >> 2] | 0) != 0) {
  HEAP32[i13 >> 2] = 0;
 }
 i13 = i9 + 16 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 if (!((i9 + 28 | 0) == (i12 | 0) | (i12 | 0) == 0)) {
  HEAP32[i13 >> 2] = 0;
  HEAP32[i9 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i12);
 }
 __ZN7WebCore15HitTestLocationD1Ev(i7);
 i15 = i16;
 STACKTOP = i6;
 return i15 | 0;
}
function __ZNK7WebCore12RenderInline16linesBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, d11 = +0, i12 = 0, d13 = +0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, d23 = +0, d24 = +0, d25 = +0, d26 = +0, d27 = +0, d28 = +0, d29 = +0, d30 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 40 | 0;
 if ((HEAP8[i2 + 25 | 0] & 1) == 0) {
  _memset(i4 | 0, 0, 16) | 0;
  HEAP32[i5 >> 2] = i4;
  __ZNK7WebCore12RenderInline26generateCulledLineBoxRectsINS_12_GLOBAL__N_132LinesBoundingBoxGeneratorContextEEEvRT_PKS0_(i2, i5, i2);
  __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i1, i4);
  STACKTOP = i3;
  return;
 }
 i4 = i6;
 _memset(i4 | 0, 0, 16) | 0;
 i5 = HEAP32[i2 + 44 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = HEAP32[i2 + 48 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i9 = i5;
    d10 = +0;
    d11 = +0;
   }
   while (1) {
    if ((i9 | 0) == (i5 | 0)) {
     i12 = HEAP32[i5 + 32 >> 2] | 0;
     d13 = +HEAPF32[i5 + 28 >> 2];
     i14 = i12 & 2048;
     i15 = i9 + 20 | 0;
     i16 = i9 + 24 | 0;
     d17 = +HEAPF32[((i12 & 2048 | 0) == 0 ? i9 + 24 | 0 : i9 + 20 | 0) >> 2];
     i18 = 10;
    } else {
     i12 = HEAP32[i9 + 32 >> 2] | 0;
     i19 = i12 & 2048;
     i20 = i9 + 20 | 0;
     i21 = i9 + 24 | 0;
     if (+HEAPF32[((i19 | 0) == 0 ? i21 : i20) >> 2] < d11) {
      d22 = +HEAPF32[((i19 | 0) == 0 ? i21 : i20) >> 2];
     } else {
      d22 = d11;
     }
     i20 = i12 & 2048;
     i12 = i9 + 20 | 0;
     i21 = i9 + 24 | 0;
     d23 = +HEAPF32[i9 + 28 >> 2];
     if (+HEAPF32[((i20 | 0) == 0 ? i21 : i12) >> 2] + d23 > d10) {
      d13 = d23;
      i14 = i20;
      i15 = i12;
      i16 = i21;
      d17 = d22;
      i18 = 10;
     } else {
      d24 = d10;
      d25 = d22;
     }
    }
    if ((i18 | 0) == 10) {
     i18 = 0;
     d24 = +HEAPF32[((i14 | 0) == 0 ? i16 : i15) >> 2] + d13;
     d25 = d17;
    }
    i21 = HEAP32[i9 + 52 >> 2] | 0;
    if ((i21 | 0) == 0) {
     break;
    } else {
     i9 = i21;
     d10 = d24;
     d11 = d25;
    }
   }
   i21 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i21 | 0) == 3 | (i21 | 0) == 0) {
    d23 = +HEAPF32[i5 + 24 >> 2];
    d26 = +HEAPF32[((HEAP32[i8 + 32 >> 2] & 2048 | 0) == 0 ? i8 + 20 | 0 : i8 + 24 | 0) >> 2];
    d27 = d26 + +__ZNK7WebCore9InlineBox13logicalHeightEv(i8 | 0) - d23;
    d28 = d23;
    d29 = d25;
    d30 = d24 - d25;
   } else {
    d23 = +HEAPF32[i5 + 20 >> 2];
    d26 = +HEAPF32[((HEAP32[i8 + 32 >> 2] & 2048 | 0) == 0 ? i8 + 20 | 0 : i8 + 24 | 0) >> 2];
    d27 = d24 - d25;
    d28 = d25;
    d29 = d23;
    d30 = d26 + +__ZNK7WebCore9InlineBox13logicalHeightEv(i8 | 0) - d23;
   }
   HEAPF32[i7 >> 2] = d29;
   HEAPF32[i7 + 4 >> 2] = d28;
   HEAPF32[i7 + 8 >> 2] = d30;
   HEAPF32[i7 + 12 >> 2] = d27;
   __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i6, i7);
  }
 } while (0);
 i7 = i1;
 HEAP32[i7 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore12RenderInline13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, d19 = +0, i20 = 0, d21 = +0, d22 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 48 | 0;
 HEAP32[i7 >> 2] = i2;
 HEAP32[i7 + 4 >> 2] = i3;
 i10 = i6;
 i11 = i5 | 0;
 i12 = i5;
 do {
  if ((HEAP8[i1 + 25 | 0] & 1) == 0) {
   __ZNK7WebCore12RenderInline26generateCulledLineBoxRectsINS_12_GLOBAL__N_129AbsoluteRectsGeneratorContextEEEvRT_PKS0_(i1, i7, i1);
  } else {
   i13 = HEAP32[i1 + 44 >> 2] | 0;
   if ((i13 | 0) == 0) {
    _memset(i10 | 0, 0, 16) | 0;
    __ZN7WebCore12_GLOBAL__N_129AbsoluteRectsGeneratorContextclERKNS_9FloatRectE(i7, i6);
    break;
   }
   i14 = i5 + 8 | 0;
   i15 = i13;
   while (1) {
    i13 = i15 | 0;
    i16 = i15 + 32 | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 & 2048 | 0) == 0) {
     d18 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i13);
     d19 = d18;
     i20 = HEAP32[i16 >> 2] | 0;
    } else {
     d19 = +HEAPF32[i15 + 28 >> 2];
     i20 = i17;
    }
    if ((i20 & 2048 | 0) == 0) {
     d21 = +HEAPF32[i15 + 28 >> 2];
    } else {
     d21 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i13);
    }
    i13 = i15 + 20 | 0;
    i17 = HEAP32[i13 + 4 >> 2] | 0;
    HEAP32[i11 >> 2] = HEAP32[i13 >> 2];
    HEAP32[i11 + 4 >> 2] = i17;
    d18 = +d19;
    d22 = +d21;
    HEAPF32[i14 >> 2] = d18;
    HEAPF32[i14 + 4 >> 2] = d22;
    __ZN7WebCore12_GLOBAL__N_129AbsoluteRectsGeneratorContextclERKNS_9FloatRectE(i7, i12);
    i15 = HEAP32[i15 + 52 >> 2] | 0;
    if ((i15 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 i12 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i1 | 0) | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i12 | 0;
 i11 = (HEAP32[i12 + 20 >> 2] & 512 | 0) == 0;
 i20 = HEAP32[(HEAP32[i12 >> 2] | 0) + 472 >> 2] | 0;
 i5 = (__ZNK7WebCore12RenderObject15containingBlockEv(i1 | 0) | 0) + 44 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
 i6 = (HEAP32[i3 + 4 >> 2] | 0) - (HEAP32[i5 + 4 >> 2] | 0) | 0;
 if (i11) {
  HEAP32[i9 >> 2] = i1;
  HEAP32[i9 + 4 >> 2] = i6;
  FUNCTION_TABLE_viii[i20 & 63](i7, i2, i9);
  STACKTOP = i4;
  return;
 } else {
  i9 = (HEAP32[i12 + 48 >> 2] | 0) + i6 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i12 + 44 >> 2] | 0) + i1;
  HEAP32[i8 + 4 >> 2] = i9;
  FUNCTION_TABLE_viii[i20 & 63](i7, i2, i8);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore12RenderInline28addChildIgnoringContinuationEPNS_12RenderObjectES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 do {
  if ((i3 | 0) == 0) {
   i7 = HEAP32[i1 + 32 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i8 = 0;
    break;
   }
   if ((HEAP32[i7 + 20 >> 2] & 768 | 0) == 256) {
    i8 = 0;
    break;
   }
   i8 = (HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 52 >> 2] & 4032 | 0) == 256 ? i7 : 0;
  } else {
   i8 = i3;
  }
 } while (0);
 i3 = i2 + 20 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i9 = i1 | 0;
 if ((i7 & 1088 | 0) != 0 | (i7 & 25165824 | 0) == 16777216) {
  __ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2_(i9, i2, i8);
  i7 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i7 & 1 | 0) == 0) {
    HEAP32[i3 >> 2] = i7 | 1;
    __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i2, 1, 0);
    if ((HEAP32[i3 >> 2] & 32768 | 0) == 0) {
     break;
    }
    __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i2);
   }
  } while (0);
  __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i2, 1, 1);
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore11RenderStyle31createAnonymousStyleWithDisplayEPKS0_NS_8EDisplayE(i5, HEAP32[i1 + 36 >> 2] | 0, 1);
 L14 : do {
  if ((i1 | 0) != 0) {
   i3 = i9;
   while (1) {
    if ((HEAP32[i3 + 24 >> 2] & 4 | 0) == 0) {
     break L14;
    }
    i7 = HEAP32[i3 + 20 >> 2] & 25165824;
    if ((i7 | 0) == 25165824 | (i7 | 0) == 8388608) {
     break;
    }
    i7 = HEAP32[i3 + 8 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break L14;
    } else {
     i3 = i7;
    }
   }
   if ((i3 | 0) == 0) {
    break;
   }
   i7 = (HEAP32[i5 >> 2] | 0) + 48 | 0;
   HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & -29360129 | HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 48 >> 2] & 29360128;
  }
 } while (0);
 i9 = __ZN3WTF10fastMallocEj(116) | 0;
 i7 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
 __ZN7WebCore15RenderBlockFlowC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i9, i7, i6);
 __ZN7WebCore13RenderElement15initializeStyleEv(i9);
 i6 = i1 | 0;
 i7 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i6) | 0;
 __ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_(i6, i9);
 __ZN7WebCore12RenderInline9splitFlowEPNS_12RenderObjectEPNS_11RenderBlockES2_PNS_20RenderBoxModelObjectE(i1, i8, i9, i2, i7);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12_GLOBAL__N_129AbsoluteQuadsGeneratorContextclERKNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 32 | 0;
 i6 = i5;
 i7 = HEAP32[i1 >> 2] | 0;
 __ZNK7WebCore17RenderGeometryMap14mapToContainerERKNS_9FloatRectEPKNS_22RenderLayerModelObjectE(i4, i1 + 4 | 0, i2, 0);
 __ZNK7WebCore9FloatQuad11boundingBoxEv(i6, i4);
 i4 = i7 + 8 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == (HEAP32[i7 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i7, i2 + 1 | 0);
  i1 = HEAP32[i7 >> 2] | 0;
  i8 = HEAP32[i4 >> 2] | 0;
  i9 = i5 | 0;
  i10 = i1 + (i8 << 5) | 0;
  i11 = HEAP32[i9 + 4 >> 2] | 0;
  HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i10 + 4 >> 2] = i11;
  i11 = i5;
  i10 = i5 + 8 | 0;
  i9 = i6 + 4 | 0;
  d12 = +HEAPF32[i9 >> 2];
  HEAPF32[i1 + (i8 << 5) + 8 >> 2] = +HEAPF32[i11 >> 2] + +HEAPF32[i10 >> 2];
  HEAPF32[i1 + (i8 << 5) + 12 >> 2] = d12;
  i13 = i6 + 12 | 0;
  d12 = +HEAPF32[i9 >> 2] + +HEAPF32[i13 >> 2];
  HEAPF32[i1 + (i8 << 5) + 16 >> 2] = +HEAPF32[i11 >> 2] + +HEAPF32[i10 >> 2];
  HEAPF32[i1 + (i8 << 5) + 20 >> 2] = d12;
  d12 = +HEAPF32[i9 >> 2] + +HEAPF32[i13 >> 2];
  HEAPF32[i1 + (i8 << 5) + 24 >> 2] = +HEAPF32[i11 >> 2];
  HEAPF32[i1 + (i8 << 5) + 28 >> 2] = d12;
  i14 = HEAP32[i4 >> 2] | 0;
  i15 = i14 + 1 | 0;
  HEAP32[i4 >> 2] = i15;
  STACKTOP = i3;
  return;
 } else {
  i8 = i5 | 0;
  i1 = HEAP32[i7 >> 2] | 0;
  i7 = i1 + (i2 << 5) | 0;
  i11 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i7 + 4 >> 2] = i11;
  i11 = i5;
  i7 = i5 + 8 | 0;
  i5 = i6 + 4 | 0;
  d12 = +HEAPF32[i5 >> 2];
  HEAPF32[i1 + (i2 << 5) + 8 >> 2] = +HEAPF32[i11 >> 2] + +HEAPF32[i7 >> 2];
  HEAPF32[i1 + (i2 << 5) + 12 >> 2] = d12;
  i8 = i6 + 12 | 0;
  d12 = +HEAPF32[i5 >> 2] + +HEAPF32[i8 >> 2];
  HEAPF32[i1 + (i2 << 5) + 16 >> 2] = +HEAPF32[i11 >> 2] + +HEAPF32[i7 >> 2];
  HEAPF32[i1 + (i2 << 5) + 20 >> 2] = d12;
  d12 = +HEAPF32[i5 >> 2] + +HEAPF32[i8 >> 2];
  HEAPF32[i1 + (i2 << 5) + 24 >> 2] = +HEAPF32[i11 >> 2];
  HEAPF32[i1 + (i2 << 5) + 28 >> 2] = d12;
  i14 = HEAP32[i4 >> 2] | 0;
  i15 = i14 + 1 | 0;
  HEAP32[i4 >> 2] = i15;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore12RenderInline22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i1 | 0;
 i12 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i11, i2, i5) | 0;
 if ((i12 | 0) == 0) {
  i13 = 0;
  STACKTOP = i4;
  return i13 | 0;
 }
 if ((HEAP8[i5] & 1) == 0) {
  i14 = 0;
  i15 = 0;
  i16 = i12 | 0;
 } else {
  i17 = i12 | 0;
  __ZNK7WebCore12RenderObject27offsetFromAncestorContainerEPS0_(i6, i2 | 0, i17);
  i14 = -(HEAP32[i6 >> 2] | 0) | 0;
  i15 = -(HEAP32[i6 + 4 >> 2] | 0) | 0;
  i16 = i17;
 }
 HEAP8[i7] = 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 __ZNK7WebCore12RenderInline19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb(i8, i1, i16, i9, i7);
 if ((HEAP32[(HEAP32[(HEAP32[i12 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 512 | 0) == 0) {
  i18 = (HEAP32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 512 | 0) != 0;
 } else {
  i18 = 1;
 }
 if (__ZNK7WebCore12RenderObject31shouldUseTransformFromContainerEPKS0_(i11, i16) | 0) {
  HEAPF64[i10 >> 3] = +1;
  _memset(i10 + 8 | 0, 0, 32) | 0;
  HEAPF64[i10 + 40 >> 3] = +1;
  _memset(i10 + 48 | 0, 0, 32) | 0;
  HEAPF64[i10 + 80 >> 3] = +1;
  _memset(i10 + 88 | 0, 0, 32) | 0;
  HEAPF64[i10 + 120 >> 3] = +1;
  __ZNK7WebCore12RenderObject25getTransformFromContainerEPKS0_RKNS_10LayoutSizeERNS_20TransformationMatrixE(i11, i16, i8, i10);
  __ZN7WebCore20TransformationMatrix14translateRightEdd(i10, +(i14 | 0), +(i15 | 0)) | 0;
  __ZN7WebCore17RenderGeometryMap4pushEPKNS_12RenderObjectERKNS_20TransformationMatrixEbbbb(i3, i11, i10, i18, (HEAP8[i7] & 1) != 0, 0, 0);
 } else {
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + i14;
  i14 = i8 + 4 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + i15;
  __ZN7WebCore17RenderGeometryMap4pushEPKNS_12RenderObjectERKNS_10LayoutSizeEbbbb(i3, i11, i8, i18, (HEAP8[i7] & 1) != 0, 0, 0);
 }
 i13 = ((HEAP8[i5] & 1) == 0 ? i12 : i2 | 0) | 0;
 STACKTOP = i4;
 return i13 | 0;
}
function __ZNK7WebCore12RenderInline13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, d18 = +0, i19 = 0, d20 = +0, d21 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 720 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 HEAP32[i7 >> 2] = i2;
 i8 = i7 + 4 | 0;
 __ZN7WebCore17RenderGeometryMapC1Ej(i8, 2);
 __ZN7WebCore17RenderGeometryMap22pushMappingsToAncestorEPKNS_12RenderObjectEPKNS_22RenderLayerModelObjectE(i8, i1 | 0, 0);
 i9 = i6;
 i10 = i5 | 0;
 i11 = i5;
 do {
  if ((HEAP8[i1 + 25 | 0] & 1) == 0) {
   __ZNK7WebCore12RenderInline26generateCulledLineBoxRectsINS_12_GLOBAL__N_129AbsoluteQuadsGeneratorContextEEEvRT_PKS0_(i1, i7, i1);
  } else {
   i12 = HEAP32[i1 + 44 >> 2] | 0;
   if ((i12 | 0) == 0) {
    _memset(i9 | 0, 0, 16) | 0;
    __ZN7WebCore12_GLOBAL__N_129AbsoluteQuadsGeneratorContextclERKNS_9FloatRectE(i7, i6);
    break;
   }
   i13 = i5 + 8 | 0;
   i14 = i12;
   while (1) {
    i12 = i14 | 0;
    i15 = i14 + 32 | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    if ((i16 & 2048 | 0) == 0) {
     d17 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i12);
     d18 = d17;
     i19 = HEAP32[i15 >> 2] | 0;
    } else {
     d18 = +HEAPF32[i14 + 28 >> 2];
     i19 = i16;
    }
    if ((i19 & 2048 | 0) == 0) {
     d20 = +HEAPF32[i14 + 28 >> 2];
    } else {
     d20 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i12);
    }
    i12 = i14 + 20 | 0;
    i16 = HEAP32[i12 + 4 >> 2] | 0;
    HEAP32[i10 >> 2] = HEAP32[i12 >> 2];
    HEAP32[i10 + 4 >> 2] = i16;
    d17 = +d18;
    d21 = +d20;
    HEAPF32[i13 >> 2] = d17;
    HEAPF32[i13 + 4 >> 2] = d21;
    __ZN7WebCore12_GLOBAL__N_129AbsoluteQuadsGeneratorContextclERKNS_9FloatRectE(i7, i11);
    i14 = HEAP32[i14 + 52 >> 2] | 0;
    if ((i14 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 i11 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i1 | 0) | 0;
 if ((i11 | 0) == 0) {
  __ZN7WebCore17RenderGeometryMapD1Ev(i8);
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i11 >> 2] | 0) + 476 >> 2] & 63](i11 | 0, i2, i3);
 __ZN7WebCore17RenderGeometryMapD1Ev(i8);
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEEC2ERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
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
 if (i3 >>> 0 > 107374182 >>> 0) {
  _WTFCrash();
 }
 i5 = __ZN3WTF18fastMallocGoodSizeEj(i3 * 40 & -1) | 0;
 HEAP32[i7 >> 2] = (i5 >>> 0) / 40 & -1;
 i7 = __ZN3WTF10fastMallocEj(i5) | 0;
 i5 = i7;
 HEAP32[i6 >> 2] = i5;
 if ((i7 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i7 + (i2 * 40 & -1) | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i8 = i7;
  i9 = i5;
 }
 while (1) {
  i5 = HEAP32[i8 >> 2] | 0;
  HEAP32[i9 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  i7 = i9 + 4 | 0;
  i5 = i8 + 4 | 0;
  i2 = i7;
  i6 = HEAP32[i5 >> 2] | 0;
  i3 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i2 >> 2] = i6;
  HEAP32[i2 + 4 >> 2] = i3;
  if ((i6 & 0 | 0) == 0 & (i3 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i7 | 0);
  }
  i7 = i9 + 12 | 0;
  i3 = i8 + 12 | 0;
  i6 = i7;
  i2 = HEAP32[i3 >> 2] | 0;
  i5 = HEAP32[i3 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = i2;
  HEAP32[i6 + 4 >> 2] = i5;
  if ((i2 & 0 | 0) == 0 & (i5 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
  }
  i7 = i9 + 20 | 0;
  i5 = i8 + 20 | 0;
  i2 = i7;
  i6 = HEAP32[i5 >> 2] | 0;
  i3 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i2 >> 2] = i6;
  HEAP32[i2 + 4 >> 2] = i3;
  if ((i6 & 0 | 0) == 0 & (i3 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
  }
  i7 = i9 + 28 | 0;
  i3 = i8 + 28 | 0;
  i6 = i7;
  i2 = HEAP32[i3 >> 2] | 0;
  i5 = HEAP32[i3 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = i2;
  HEAP32[i6 + 4 >> 2] = i5;
  if ((i2 & 0 | 0) == 0 & (i5 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
  }
  HEAP32[i9 + 36 >> 2] = HEAP32[i8 + 36 >> 2];
  i7 = i8 + 40 | 0;
  if ((i7 | 0) == (i4 | 0)) {
   break;
  } else {
   i8 = i7;
   i9 = i9 + 40 | 0;
  }
 }
 return;
}
function __ZNK7WebCore12RenderInline16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = i1 | 0;
 do {
  if (i3) {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    i6 = HEAP32[i1 + 36 >> 2] | 0;
    break;
   } else {
    i6 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i5) | 0;
    break;
   }
  } else {
   i6 = HEAP32[i1 + 36 >> 2] | 0;
  }
 } while (0);
 i4 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i6) | 0;
 i6 = i4 + 4 | 0;
 i7 = _round(+(+HEAPF32[i6 >> 2])) | 0;
 if ((i2 | 0) == 0) {
  i8 = i7;
 } else {
  i2 = i4 + 8 | 0;
  i9 = (_round(+(+HEAPF32[i2 >> 2])) | 0) + i7 | 0;
  i7 = _round(+(+HEAPF32[i6 >> 2])) | 0;
  i8 = i9 + (((_round(+(+HEAPF32[i2 >> 2])) | 0) + i7 | 0) / -2 & -1) | 0;
 }
 i7 = i1 + 4 | 0;
 do {
  if (i3) {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    break;
   }
   i2 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i5) | 0;
   if ((i2 | 0) == (HEAP32[i1 + 36 >> 2] | 0)) {
    break;
   }
   i10 = __ZNK7WebCore11RenderStyle18computedLineHeightEPNS_10RenderViewE(i2, HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0;
   d11 = +HEAPF32[i6 >> 2];
   i12 = _round(+d11) | 0;
   i13 = i4 + 8 | 0;
   d14 = +HEAPF32[i13 >> 2];
   i15 = _round(+d14) | 0;
   i16 = i10 - i12 | 0;
   i17 = i16 - i15 | 0;
   i18 = (i17 | 0) / 2 & -1;
   i19 = i18 + i8 | 0;
   return i19 | 0;
  }
 } while (0);
 i10 = __ZNK7WebCore11RenderStyle18computedLineHeightEPNS_10RenderViewE(HEAP32[i1 + 36 >> 2] | 0, HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0;
 d11 = +HEAPF32[i6 >> 2];
 i12 = _round(+d11) | 0;
 i13 = i4 + 8 | 0;
 d14 = +HEAPF32[i13 >> 2];
 i15 = _round(+d14) | 0;
 i16 = i10 - i12 | 0;
 i17 = i16 - i15 | 0;
 i18 = (i17 | 0) / 2 & -1;
 i19 = i18 + i8 | 0;
 return i19 | 0;
}
function __ZN7WebCore12RenderInline14dirtyLineBoxesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if (i2) {
  __ZN7WebCore17RenderLineBoxList15deleteLineBoxesEv(i1 + 44 | 0);
  return;
 }
 if ((HEAP8[i1 + 25 | 0] & 1) != 0) {
  __ZN7WebCore17RenderLineBoxList14dirtyLineBoxesEv(i1 + 44 | 0);
  return;
 }
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i3 = i2;
 }
 while (1) {
  i2 = HEAP32[i3 + 20 >> 2] | 0;
  L13 : do {
   if (!((i2 & 64 | 0) != 0 | (i2 & 25165824 | 0) == 16777216)) {
    if ((i2 & 543 | 0) == 512) {
     i1 = HEAP32[i3 + 84 >> 2] | 0;
     if ((i1 | 0) == 0) {
      break;
     }
     i4 = __ZN7WebCore9InlineBox4rootEv(i1) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 100 >> 2] & 127](i4 | 0, 1);
     break;
    }
    if ((i2 & 1 | 0) != 0) {
     break;
    }
    if ((i2 & 768 | 0) == 256) {
     i4 = HEAP32[i3 + 48 >> 2] | 0;
     if ((i4 | 0) == 0) {
      break;
     } else {
      i5 = i4;
     }
     while (1) {
      i4 = __ZN7WebCore9InlineBox4rootEv(i5 | 0) | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 100 >> 2] & 127](i4 | 0, 1);
      i5 = HEAP32[i5 + 40 >> 2] | 0;
      if ((i5 | 0) == 0) {
       break L13;
      }
     }
    }
    if ((HEAP32[i3 + 24 >> 2] & 4 | 0) != 0) {
     i4 = HEAP32[i3 + 44 >> 2] | 0;
     if ((i4 | 0) == 0) {
      break;
     } else {
      i6 = i4;
     }
     while (1) {
      i4 = __ZN7WebCore9InlineBox4rootEv(i6 | 0) | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 100 >> 2] & 127](i4 | 0, 1);
      i6 = HEAP32[i6 + 52 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break L13;
      }
     }
    }
    if ((i2 & 4096 | 0) == 0) {
     break;
    }
    i4 = HEAP32[i3 + 44 >> 2] | 0;
    if ((i4 | 0) == 0) {
     break;
    }
    i1 = __ZN7WebCore9InlineBox4rootEv(i4 | 0) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 100 >> 2] & 127](i1 | 0, 1);
   }
  } while (0);
  i3 = HEAP32[i3 + 16 >> 2] | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore12RenderInline14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP32[i2 + 28 >> 2] | 0) != 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i4;
  return;
 }
 if ((i5 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 i5 = i2 | 0;
 i10 = i2;
 i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 744 >> 2] & 255](i5) | 0;
 i12 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 748 >> 2] & 255](i5) | 0) + i11 | 0;
 i11 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 712 >> 2] & 127](i3, i5);
 i10 = i12 + (HEAP32[i3 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 716 >> 2] & 127](i6, i5);
 HEAP32[i8 >> 2] = i10 + (HEAP32[i6 >> 2] | 0);
 HEAP32[i9 >> 2] = 0;
 __ZN7WebCore20RenderBoxModelObject29localCaretRectForEmptyElementENS_10LayoutUnitES1_(i7, i5, i8, i9);
 i9 = HEAP32[i2 + 44 >> 2] | 0;
 if ((i9 | 0) != 0) {
  d13 = +_round(+(+HEAPF32[i9 + 20 >> 2]));
  do {
   if (d13 < +2147483647) {
    if (d13 <= +-2147483648) {
     i14 = -2147483648;
     break;
    }
    i14 = ~~d13;
   } else {
    i14 = 2147483647;
   }
  } while (0);
  d13 = +_round(+(+HEAPF32[i9 + 24 >> 2]));
  do {
   if (d13 < +2147483647) {
    if (d13 <= +-2147483648) {
     i15 = -2147483648;
     break;
    }
    i15 = ~~d13;
   } else {
    i15 = 2147483647;
   }
  } while (0);
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + i14;
  i14 = i7 + 4 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + i15;
 }
 i15 = i1;
 i1 = i7;
 HEAP32[i15 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i15 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i15 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i15 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12_GLOBAL__N_129AbsoluteRectsGeneratorContextclERKNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i4, i2);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + (HEAP32[i2 >> 2] | 0);
 i2 = i4 + 4 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + i5;
 i5 = HEAP32[i1 >> 2] | 0;
 i1 = i5 + 8 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) != (HEAP32[i5 + 4 >> 2] | 0)) {
  i6 = (HEAP32[i5 >> 2] | 0) + (i2 << 4) | 0;
  i7 = i4;
  HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
  HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
  HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
  i8 = HEAP32[i1 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
 i7 = i2 + 1 | 0;
 i6 = i5 | 0;
 i10 = HEAP32[i6 >> 2] | 0;
 do {
  if (i10 >>> 0 > i4 >>> 0) {
   i11 = 5;
  } else {
   if ((i10 + (i2 << 4) | 0) >>> 0 <= i4 >>> 0) {
    i11 = 5;
    break;
   }
   __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
   i12 = HEAP32[i6 >> 2] | 0;
   i13 = i12 + (i4 - i10 >> 4 << 4) | 0;
   i14 = i12;
  }
 } while (0);
 if ((i11 | 0) == 5) {
  __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
  i13 = i4;
  i14 = HEAP32[i6 >> 2] | 0;
 }
 i6 = i14 + (HEAP32[i1 >> 2] << 4) | 0;
 i14 = i13;
 HEAP32[i6 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
 i8 = HEAP32[i1 >> 2] | 0;
 i9 = i8 + 1 | 0;
 HEAP32[i1 >> 2] = i9;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12RenderInline18continuationBeforeEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = (i2 | 0) != 0;
 do {
  if (i3) {
   if ((HEAP32[i2 + 8 >> 2] | 0) != (i1 | 0)) {
    break;
   }
   i4 = i1 | 0;
   return i4 | 0;
  }
 } while (0);
 if ((HEAP32[i1 + 20 >> 2] & 3072 | 0) == 1024) {
  i5 = i1 | 0;
  i6 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i5) | 0;
  i7 = i5;
 } else {
  i6 = __ZNK7WebCore11RenderBlock25inlineElementContinuationEv(i1) | 0;
  i7 = i1 | 0;
 }
 L10 : do {
  if ((i6 | 0) == 0) {
   i8 = i7;
   i9 = i7;
  } else {
   i1 = i2 + 8 | 0;
   if (i3) {
    i10 = i6;
    i11 = i7;
   } else {
    i5 = i6;
    i12 = i7;
    while (1) {
     if ((HEAP32[i5 + 20 >> 2] & 3072 | 0) == 1024) {
      i13 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i5) | 0;
     } else {
      i13 = __ZNK7WebCore11RenderBlock25inlineElementContinuationEv(i5) | 0;
     }
     if ((i13 | 0) == 0) {
      i8 = i12;
      i9 = i5;
      break L10;
     } else {
      i12 = i5;
      i5 = i13;
     }
    }
   }
   while (1) {
    if ((HEAP32[i1 >> 2] | 0) == (i10 | 0)) {
     break;
    }
    if ((HEAP32[i10 + 20 >> 2] & 3072 | 0) == 1024) {
     i14 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i10) | 0;
    } else {
     i14 = __ZNK7WebCore11RenderBlock25inlineElementContinuationEv(i10) | 0;
    }
    if ((i14 | 0) == 0) {
     i8 = i11;
     i9 = i10;
     break L10;
    } else {
     i11 = i10;
     i10 = i14;
    }
   }
   i4 = (HEAP32[i10 + 28 >> 2] | 0) == (i2 | 0) ? i11 : i10;
   return i4 | 0;
  }
 } while (0);
 do {
  if (!i3) {
   if ((HEAP32[i9 + 28 >> 2] | 0) == 0) {
    i4 = i8;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i4 = i9;
 return i4 | 0;
}
function __ZN3WTF6VectorIN7WebCore20AnnotatedRegionValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 40 & -1) | 0;
 if (i2 >>> 0 > 107374182 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 40 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 40 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = i7;
   i8 = i6;
   HEAP32[i2 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i2 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
   HEAP32[i2 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   HEAP32[i2 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
   i8 = i6 + 16 | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i7 + 16 >> 2] = i2;
   i2 = i7 + 20 | 0;
   i9 = i6 + 20 | 0;
   HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i2 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
   HEAP32[i2 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
   HEAP32[i2 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
   HEAP32[i7 + 36 >> 2] = HEAP32[i6 + 36 >> 2];
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i8 = i9 | 0;
     i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i8 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i9 = i6 + 40 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 40 | 0;
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
function __ZN7WebCore12RenderInline16positionForPointERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i2 | 0;
 i7 = __ZNK7WebCore12RenderObject15containingBlockEv(i6) | 0;
 if ((HEAP32[i2 + 44 >> 2] | 0) != 0) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i7 >> 2] | 0) + 464 >> 2] & 63](i1, i7, i3);
  STACKTOP = i4;
  return;
 }
 i8 = i7 + 44 | 0;
 i7 = (HEAP32[i3 >> 2] | 0) + (HEAP32[i8 >> 2] | 0) | 0;
 i9 = (HEAP32[i3 + 4 >> 2] | 0) + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 i8 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i2 | 0) | 0;
 L5 : do {
  if ((i8 | 0) != 0) {
   i2 = i8;
   while (1) {
    i10 = i2 | 0;
    i11 = i2 + 20 | 0;
    i12 = HEAP32[i11 >> 2] | 0;
    if ((i12 & 1024 | 0) == 0) {
     i13 = i2;
     i14 = i12;
    } else {
     i12 = __ZNK7WebCore12RenderObject15containingBlockEv(i10) | 0;
     i13 = i12;
     i14 = HEAP32[i11 >> 2] | 0;
    }
    if ((i14 & 1024 | 0) != 0) {
     break;
    }
    if ((HEAP32[i2 + 28 >> 2] | 0) != 0) {
     break;
    }
    i11 = __ZNK7WebCore11RenderBlock25inlineElementContinuationEv(i2) | 0;
    if ((i11 | 0) == 0) {
     break L5;
    } else {
     i2 = i11 | 0;
    }
   }
   i11 = HEAP32[(HEAP32[i2 >> 2] | 0) + 464 >> 2] | 0;
   i12 = i9 - (HEAP32[i13 + 48 >> 2] | 0) | 0;
   HEAP32[i5 >> 2] = i7 - (HEAP32[i13 + 44 >> 2] | 0);
   HEAP32[i5 + 4 >> 2] = i12;
   FUNCTION_TABLE_viii[i11 & 63](i1, i10, i5);
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN7WebCore12RenderObject16positionForPointERKNS_11LayoutPointE(i1, i6, i3);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore12RenderInline19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i1 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i1 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = HEAP32[i2 + 20 >> 2] & 25165824;
 if ((i11 | 0) == 25165824 | (i11 | 0) == 8388608) {
  __ZNK7WebCore20RenderBoxModelObject23offsetForInFlowPositionEv(i7, i2 | 0);
  HEAP32[i9 >> 2] = (HEAP32[i7 >> 2] | 0) + (HEAP32[i9 >> 2] | 0);
  HEAP32[i10 >> 2] = (HEAP32[i7 + 4 >> 2] | 0) + (HEAP32[i10 >> 2] | 0);
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 520 >> 2] & 63](i3, i1, i4);
 i4 = i3 + 20 | 0;
 if ((HEAP32[i4 >> 2] & 65536 | 0) != 0) {
  __ZNK7WebCore9RenderBox21scrolledContentOffsetEv(i8, i3);
  i1 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) - (HEAP32[i8 >> 2] | 0);
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) - i1;
 }
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 & 4194304 | 0) == 0) {
   if ((i1 & 512 | 0) != 0) {
    if ((i1 & 768 | 0) == 256) {
     i12 = HEAP32[(HEAP32[i3 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i12 = HEAP32[i3 + 36 >> 2] | 0;
    }
    i4 = (HEAP32[i12 + 44 >> 2] | 0) >>> 13 & 3;
    if ((i4 | 0) == 3 | (i4 | 0) == 1) {
     i13 = 1;
     break;
    }
   }
   i13 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 248 >> 2] & 255](i3) | 0) & 1;
  } else {
   i13 = 1;
  }
 } while (0);
 HEAP8[i5] = i13;
 STACKTOP = i6;
 return;
}
function __ZN7WebCoreL13computeMarginEPKNS_12RenderInlineERKNS_6LengthE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = HEAP8[i3 + 5 | 0] | 0;
 if ((i9 << 24 >> 24 | 0) == 3) {
  if ((HEAP8[i3 + 6 | 0] & 1) == 0) {
   d10 = +(HEAP32[i3 >> 2] | 0);
  } else {
   d10 = +HEAPF32[i3 >> 2];
  }
  do {
   if (d10 < +2147483647) {
    if (d10 <= +-2147483648) {
     i11 = -2147483648;
     break;
    }
    i11 = ~~d10;
   } else {
    i11 = 2147483647;
   }
  } while (0);
  HEAP32[i1 >> 2] = i11;
  STACKTOP = i4;
  return;
 } else if ((i9 << 24 >> 24 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 } else if ((i9 << 24 >> 24 | 0) == 10 | (i9 << 24 >> 24 | 0) == 2) {
  HEAP32[i6 >> 2] = 0;
  __ZNK7WebCore11RenderBlock21availableLogicalWidthEv(i7, __ZNK7WebCore12RenderObject15containingBlockEv(i2 | 0) | 0);
  HEAP32[i5 >> 2] = HEAP32[((HEAP32[i7 >> 2] | 0) > 0 ? i7 : i6) >> 2];
  __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i1, i3, i5, 0, 0);
  STACKTOP = i4;
  return;
 } else {
  if ((i9 - 11 & 255) >>> 0 < 4 >>> 0) {
   HEAP32[i8 >> 2] = 0;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i1, i3, i8, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i4;
   return;
  }
 }
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
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 108 >> 2] & 255](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 248 >> 2] & 255](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i2 >> 2] & 768 | 0) == 768) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 236 >> 2] & 255](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 240 >> 2] & 255](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 272 >> 2] & 255](i1) | 0) ^ 1;
 return i4 | 0;
}
function __ZNK7WebCore12RenderInline24culledInlineFirstLineBoxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 L3 : while (1) {
  i2 = HEAP32[i4 + 20 >> 2] | 0;
  do {
   if (!((i2 & 64 | 0) != 0 | (i2 & 25165824 | 0) == 16777216)) {
    if ((i2 & 512 | 0) != 0) {
     i5 = 4;
     break L3;
    }
    if ((i2 & 4096 | 0) != 0) {
     i6 = HEAP32[i4 + 44 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     } else {
      i5 = 7;
      break L3;
     }
    }
    if ((i2 & 768 | 0) == 256) {
     i7 = HEAP32[i4 + 48 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     } else {
      i5 = 15;
      break L3;
     }
    }
    if ((HEAP32[i4 + 24 >> 2] & 4 | 0) == 0) {
     break;
    }
    i1 = i4;
    if ((HEAP8[i1 + 25 | 0] & 1) == 0) {
     i8 = __ZNK7WebCore12RenderInline24culledInlineFirstLineBoxEv(i1) | 0;
    } else {
     i8 = HEAP32[i4 + 44 >> 2] | 0;
    }
    if ((i8 | 0) != 0) {
     i3 = i8;
     i5 = 21;
     break L3;
    }
   }
  } while (0);
  i2 = HEAP32[i4 + 16 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = 0;
   i5 = 23;
   break;
  } else {
   i4 = i2;
  }
 }
 if ((i5 | 0) == 7) {
  i3 = i6 | 0;
  return i3 | 0;
 } else if ((i5 | 0) == 4) {
  i3 = HEAP32[i4 + 84 >> 2] | 0;
  return i3 | 0;
 } else if ((i5 | 0) == 15) {
  i3 = i7 | 0;
  return i3 | 0;
 } else if ((i5 | 0) == 21) {
  return i3 | 0;
 } else if ((i5 | 0) == 23) {
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore12RenderInline23culledInlineLastLineBoxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 L3 : while (1) {
  i2 = HEAP32[i4 + 20 >> 2] | 0;
  do {
   if (!((i2 & 64 | 0) != 0 | (i2 & 25165824 | 0) == 16777216)) {
    if ((i2 & 512 | 0) != 0) {
     i5 = 4;
     break L3;
    }
    if ((i2 & 4096 | 0) != 0) {
     i6 = HEAP32[i4 + 44 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     } else {
      i5 = 7;
      break L3;
     }
    }
    if ((i2 & 768 | 0) == 256) {
     i7 = HEAP32[i4 + 52 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     } else {
      i5 = 15;
      break L3;
     }
    }
    if ((HEAP32[i4 + 24 >> 2] & 4 | 0) == 0) {
     break;
    }
    i1 = i4;
    if ((HEAP8[i1 + 25 | 0] & 1) == 0) {
     i8 = __ZNK7WebCore12RenderInline23culledInlineLastLineBoxEv(i1) | 0;
    } else {
     i8 = HEAP32[i4 + 48 >> 2] | 0;
    }
    if ((i8 | 0) != 0) {
     i3 = i8;
     i5 = 21;
     break L3;
    }
   }
  } while (0);
  i2 = HEAP32[i4 + 12 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = 0;
   i5 = 23;
   break;
  } else {
   i4 = i2;
  }
 }
 if ((i5 | 0) == 4) {
  i3 = HEAP32[i4 + 84 >> 2] | 0;
  return i3 | 0;
 } else if ((i5 | 0) == 7) {
  i3 = i6 | 0;
  return i3 | 0;
 } else if ((i5 | 0) == 15) {
  i3 = i7;
  return i3 | 0;
 } else if ((i5 | 0) == 21) {
  return i3 | 0;
 } else if ((i5 | 0) == 23) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore12RenderInline19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 if ((HEAP32[i2 + 72 >> 2] | 0) != 0) {
  return;
 }
 i4 = i3;
 i3 = HEAP32[i4 >> 2] | 0;
 i5 = HEAP32[i4 + 4 >> 2] | 0;
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i4 & 128 | 0) != 0) {
  return;
 }
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i7 = i1 | 0;
 i1 = (HEAP32[i6 + 12 >> 2] & 2048 | 0) == 0;
 i8 = i6 + 32 | 0;
 if (i1) {
  i9 = i8 | 0;
 } else {
  i9 = HEAP32[i8 >> 2] | 0;
 }
 do {
  if ((HEAP32[i9 >> 2] | 0) == (i7 | 0)) {
   i10 = i3;
   i11 = i5;
  } else {
   if ((i4 & 1024 | 0) == 0) {
    i10 = i3;
    i11 = i5;
    break;
   }
   if (i1) {
    i12 = i8 | 0;
   } else {
    i12 = HEAP32[i8 >> 2] | 0;
   }
   i13 = __ZNK7WebCore12RenderObject15containingBlockEv(HEAP32[i12 >> 2] | 0) | 0;
   i14 = (__ZNK7WebCore12RenderObject15containingBlockEv(i7) | 0) + 44 | 0;
   i10 = i3 - (HEAP32[i13 + 44 >> 2] | 0) + (HEAP32[i14 >> 2] | 0) | 0;
   i11 = i5 - (HEAP32[i13 + 48 >> 2] | 0) + (HEAP32[i14 + 4 >> 2] | 0) | 0;
  }
 } while (0);
 __ZN7WebCore13HitTestResult12setInnerNodeEPNS_4NodeE(i2, i6);
 if ((HEAP32[i2 + 76 >> 2] | 0) == 0) {
  __ZN7WebCore13HitTestResult21setInnerNonSharedNodeEPNS_4NodeE(i2, i6);
 }
 i6 = i2 + 88 | 0;
 HEAP32[i6 >> 2] = i10;
 HEAP32[i6 + 4 >> 2] = i11;
 return;
}
function __ZN7WebCore12RenderInline15willBeDestroyedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 __ZN7WebCore13RenderElement23destroyLeftoverChildrenEv(i1 | 0);
 i2 = i1 | 0;
 i3 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i2) | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore12RenderObject7destroyEv(i3 | 0);
  __ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_(i2, 0);
 }
 i3 = i1 | 0;
 i4 = i1 + 4 | 0;
 do {
  if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0) {
   i5 = i1 + 44 | 0;
   if ((HEAP32[i5 >> 2] | 0) == 0) {
    i6 = HEAP32[i1 + 8 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 644 >> 2] & 127](i6, i3);
    break;
   }
   if (__ZNK7WebCore12RenderObject17isSelectionBorderEv(i3) | 0) {
    __ZN7WebCore10RenderView14clearSelectionEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0);
   }
   i6 = HEAP32[i5 >> 2] | 0;
   if ((HEAP32[i6 + 12 >> 2] | 0) == 0 | (i6 | 0) == 0) {
    break;
   } else {
    i7 = i6;
   }
   while (1) {
    __ZN7WebCore9InlineBox16removeFromParentEv(i7 | 0);
    i7 = HEAP32[i7 + 52 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 __ZN7WebCore17RenderLineBoxList15deleteLineBoxesEv(i1 + 44 | 0);
 __ZN7WebCore20RenderBoxModelObject15willBeDestroyedEv(i2);
 return;
}
function __ZNK7WebCore12RenderInline25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 24 | 0;
 i9 = HEAP32[i4 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 __ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE(i1, i2 | 0, i3, i6);
 i6 = i2 + 28 | 0;
 while (1) {
  i10 = HEAP32[i6 >> 2] | 0;
  if ((i10 | 0) == 0) {
   i11 = 10;
   break;
  }
  if ((HEAP32[i10 + 20 >> 2] & 768 | 0) == 256) {
   i6 = i10 + 16 | 0;
  } else {
   break;
  }
 }
 if ((i11 | 0) == 10) {
  STACKTOP = i5;
  return;
 }
 i11 = i8 | 0;
 i6 = i10;
 L7 : while (1) {
  i10 = HEAP32[(HEAP32[i6 >> 2] | 0) + 504 >> 2] | 0;
  HEAP32[i11 >> 2] = i9;
  FUNCTION_TABLE_viiii[i10 & 15](i7, i6, i3, i8);
  __ZN7WebCore10LayoutRect5uniteERKS0_(i1, i7);
  i10 = i6;
  while (1) {
   i2 = HEAP32[i10 + 16 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break L7;
   }
   if ((HEAP32[i2 + 20 >> 2] & 768 | 0) == 256) {
    i10 = i2;
   } else {
    i6 = i2;
    continue L7;
   }
  }
 }
 STACKTOP = i5;
 return;
}
function __ZN7WebCore12RenderInline22addChildToContinuationEPNS_12RenderObjectES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = __ZN7WebCore12RenderInline18continuationBeforeEPNS_12RenderObjectE(i1, i3) | 0;
 if ((i3 | 0) == 0) {
  if ((HEAP32[i4 + 20 >> 2] & 3072 | 0) == 1024) {
   i5 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i4) | 0;
  } else {
   i5 = __ZNK7WebCore11RenderBlock25inlineElementContinuationEv(i4) | 0;
  }
  i6 = (i5 | 0) == 0 ? i4 : i5;
 } else {
  i6 = HEAP32[i3 + 8 >> 2] | 0;
 }
 i5 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i5 & 64 | 0) != 0 | (i5 & 25165824 | 0) == 16777216) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 632 >> 2] & 63](i6 | 0, i2, i3);
  return;
 }
 i1 = (i5 & 1024 | 0) != 0;
 i5 = (HEAP32[i4 + 20 >> 2] & 1024 | 0) != 0;
 if ((i4 | 0) == (i6 | 0)) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 632 >> 2] & 63](i4 | 0, i2, i3);
  return;
 }
 if (!(i1 ^ (HEAP32[i6 + 20 >> 2] & 1024 | 0) != 0)) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 632 >> 2] & 63](i6 | 0, i2, i3);
  return;
 }
 if (i5 ^ i1) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 632 >> 2] & 63](i6 | 0, i2, i3);
  return;
 } else {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 632 >> 2] & 63](i4 | 0, i2, 0);
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore10LayoutRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZNK7WebCore12RenderInline9offsetTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 if ((HEAP8[i2 + 25 | 0] & 1) == 0) {
  i7 = __ZNK7WebCore12RenderInline24culledInlineFirstLineBoxEv(i2) | 0;
 } else {
  i7 = HEAP32[i2 + 44 >> 2] | 0;
 }
 if ((i7 | 0) == 0) {
  i8 = i2 | 0;
  __ZNK7WebCore20RenderBoxModelObject38adjustedPositionRelativeToOffsetParentERKNS_11LayoutPointE(i6, i8, i5);
  i9 = i6 + 4 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  i11 = i1 | 0;
  HEAP32[i11 >> 2] = i10;
  STACKTOP = i3;
  return;
 }
 i12 = ~~+Math_floor(+HEAPF32[i7 + 20 >> 2]);
 i13 = ~~+Math_floor(+HEAPF32[i7 + 24 >> 2]) | 0;
 HEAP32[i4 >> 2] = i12;
 HEAP32[i4 + 4 >> 2] = i13;
 i8 = i2 | 0;
 __ZNK7WebCore20RenderBoxModelObject38adjustedPositionRelativeToOffsetParentERKNS_11LayoutPointE(i6, i8, i5);
 i9 = i6 + 4 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i1 | 0;
 HEAP32[i11 >> 2] = i10;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore12RenderInline10offsetLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 if ((HEAP8[i2 + 25 | 0] & 1) == 0) {
  i7 = __ZNK7WebCore12RenderInline24culledInlineFirstLineBoxEv(i2) | 0;
 } else {
  i7 = HEAP32[i2 + 44 >> 2] | 0;
 }
 if ((i7 | 0) == 0) {
  i8 = i2 | 0;
  __ZNK7WebCore20RenderBoxModelObject38adjustedPositionRelativeToOffsetParentERKNS_11LayoutPointE(i6, i8, i5);
  i9 = i6 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  i11 = i1 | 0;
  HEAP32[i11 >> 2] = i10;
  STACKTOP = i3;
  return;
 }
 i12 = ~~+Math_floor(+HEAPF32[i7 + 20 >> 2]);
 i13 = ~~+Math_floor(+HEAPF32[i7 + 24 >> 2]) | 0;
 HEAP32[i4 >> 2] = i12;
 HEAP32[i4 + 4 >> 2] = i13;
 i8 = i2 | 0;
 __ZNK7WebCore20RenderBoxModelObject38adjustedPositionRelativeToOffsetParentERKNS_11LayoutPointE(i6, i8, i5);
 i9 = i6 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i1 | 0;
 HEAP32[i11 >> 2] = i10;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore12RenderInline10renderNameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 i3 = i1 + 20 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 & 25165824;
 if ((i5 | 0) == 8388608) {
  i6 = H_BASE + 120 | 0;
  return i6 | 0;
 }
 if ((i5 | 0) == 25165824) {
  i6 = H_BASE + 80 | 0;
  return i6 | 0;
 }
 do {
  if ((i4 & 128 | 0) == 0) {
   i5 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i7 = i4;
    break;
   }
   if ((HEAP32[i5 + 12 >> 2] & 1048580 | 0) != 1048580) {
    i7 = i4;
    break;
   }
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 232 >> 2] & 255](i5) | 0) == 0) {
    i7 = HEAP32[i3 >> 2] | 0;
    break;
   } else {
    i6 = H_BASE + 48 | 0;
    return i6 | 0;
   }
  } else {
   i7 = i4;
  }
 } while (0);
 if ((i7 & 128 | 0) != 0) {
  i6 = H_BASE + 48 | 0;
  return i6 | 0;
 }
 if ((i7 & 768 | 0) == 256) {
  i8 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i8 = HEAP32[i2 + 36 >> 2] | 0;
 }
 i6 = (HEAP32[i8 + 48 >> 2] & 31 | 0) == 3 ? H_BASE + 24 | 0 : H_BASE + 8 | 0;
 return i6 | 0;
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
function __ZN7WebCore12RenderInline28createAndAppendInlineFlowBoxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 25 | 0;
 HEAP8[i5] = HEAP8[i5] | 1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 824 >> 2] & 127](i3, i1);
 i5 = i3 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = i3;
 __ZN7WebCore17RenderLineBoxList13appendLineBoxENSt3__110unique_ptrINS_13InlineFlowBoxENS1_14default_deleteIS3_EEEE(i1 + 44 | 0, i4);
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return i3 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 STACKTOP = i2;
 return i3 | 0;
}
function __ZNK7WebCore12RenderInline10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i5 = i2 + 4 | 0;
 do {
  if (i3) {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    break;
   }
   i4 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i2 | 0) | 0;
   if ((i4 | 0) == (HEAP32[i2 + 36 >> 2] | 0)) {
    break;
   }
   HEAP32[i1 >> 2] = __ZNK7WebCore11RenderStyle18computedLineHeightEPNS_10RenderViewE(i4, HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = __ZNK7WebCore11RenderStyle18computedLineHeightEPNS_10RenderViewE(HEAP32[i2 + 36 >> 2] | 0, HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0;
 return;
}
function __ZNK7WebCore12RenderInline5cloneEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 + 20 | 0;
 if ((HEAP32[i5 >> 2] & 128 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
 } else {
  i6 = 0;
 }
 i7 = HEAP32[i2 + 36 >> 2] | 0;
 i2 = __ZN3WTF10fastMallocEj(52) | 0;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 HEAP32[i4 >> 2] = i7;
 __ZN7WebCore20RenderBoxModelObjectC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i2, i6, i4, 4);
 HEAP32[i2 >> 2] = H_BASE + 168;
 HEAP32[i2 + 44 >> 2] = 0;
 HEAP32[i2 + 48 >> 2] = 0;
 i4 = i2 + 20 | 0;
 HEAP32[i4 >> 2] = HEAP32[i4 >> 2] | 2097152;
 HEAP32[i1 >> 2] = i2;
 __ZN7WebCore13RenderElement15initializeStyleEv(i2);
 i1 = i2 + 20 | 0;
 HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -805306369 | HEAP32[i5 >> 2] & 805306368;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject12paddingStartEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i2 + 36 >> 2] | 0;
 i7 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i6 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i6 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i6 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore12RenderInline13requiresLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 20 >> 2] & 25165824;
 if ((i2 | 0) == 25165824 | (i2 | 0) == 8388608) {
  i3 = 1;
  return i3 | 0;
 }
 i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 20 >> 2] | 0;
 if (+HEAPF32[i2 + 4 >> 2] < +1) {
  i3 = 1;
  return i3 | 0;
 }
 i1 = i2 + 116 | 0;
 while (1) {
  if ((HEAP32[i1 + 4 >> 2] | 0) != 0) {
   i3 = 1;
   i4 = 14;
   break;
  }
  i1 = HEAP32[i1 >> 2] | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
 if ((i4 | 0) == 14) {
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 164 >> 2] | 0) + 8 >> 2] | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 76 >> 2] | 0) + 12 >> 2] | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 296 >> 2] & 4063232 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 212 >> 2] | 0) != 0;
 return i3 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject10paddingEndEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i2 + 36 >> 2] | 0;
 i7 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i6 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i6 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i6 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i2 + 36 >> 2] | 0;
 i7 = __ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i6 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i6 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject12paddingAfterEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i2 + 36 >> 2] | 0;
 i7 = __ZNK7WebCore9LengthBox5afterENS_11WritingModeE((HEAP32[i6 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i6 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12RenderInline20childBecameNonInlineEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = __ZN7WebCore11RenderBlock43createAnonymousWithParentRendererAndDisplayEPKNS_12RenderObjectENS_8EDisplayE(__ZNK7WebCore12RenderObject15containingBlockEv(i1 | 0) | 0, 1) | 0;
 i4 = i1 | 0;
 i5 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i4) | 0;
 __ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_(i4, i3 | 0);
 i4 = HEAP32[i2 + 16 >> 2] | 0;
 __ZN7WebCore13RenderElement19removeChildInternalERNS_12RenderObjectENS0_18NotifyChildrenTypeE(i1 | 0, i2, 0);
 __ZN7WebCore12RenderInline9splitFlowEPNS_12RenderObjectEPNS_11RenderBlockES2_PNS_20RenderBoxModelObjectE(i1, i4, i3, i2, i5);
 return;
}
function __ZNK7WebCore20RenderBoxModelObject13paddingBottomEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 92 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i7 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject12paddingRightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 76 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i7 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject11paddingLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 68 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i7 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject10paddingTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 84 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i7 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12RenderInlineC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore20RenderBoxModelObjectC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i5, 4);
 HEAP32[i1 >> 2] = H_BASE + 168;
 HEAP32[i1 + 44 >> 2] = 0;
 HEAP32[i1 + 48 >> 2] = 0;
 i5 = i1 + 20 | 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | 2097152;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12RenderInlineC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore20RenderBoxModelObjectC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i5, 4);
 HEAP32[i1 >> 2] = H_BASE + 168;
 HEAP32[i1 + 44 >> 2] = 0;
 HEAP32[i1 + 48 >> 2] = 0;
 i5 = i1 + 20 | 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | 2097152;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12RenderInlineC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore20RenderBoxModelObjectC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i5, 4);
 HEAP32[i1 >> 2] = H_BASE + 168;
 HEAP32[i1 + 44 >> 2] = 0;
 HEAP32[i1 + 48 >> 2] = 0;
 i5 = i1 + 20 | 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | 2097152;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12RenderInlineC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore20RenderBoxModelObjectC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i5, 4);
 HEAP32[i1 >> 2] = H_BASE + 168;
 HEAP32[i1 + 44 >> 2] = 0;
 HEAP32[i1 + 48 >> 2] = 0;
 i5 = i1 + 20 | 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | 2097152;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12RenderInline19createInlineFlowBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = __Znwj(60) | 0;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i3 + 12 >> 2] = 0;
 HEAP32[i3 + 16 >> 2] = i2;
 HEAPF32[i3 + 20 >> 2] = +0;
 HEAPF32[i3 + 24 >> 2] = +0;
 HEAPF32[i3 + 28 >> 2] = +0;
 HEAP32[i3 + 32 >> 2] = 18432;
 HEAP32[i3 >> 2] = __ZTVN7WebCore13InlineFlowBoxE + 8;
 i4 = i3 + 56 | 0;
 _memset(i3 + 36 | 0, 0, 20) | 0;
 HEAP32[i4 >> 2] = 16;
 i5 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 48 >> 2] & 31 | 0) == 2 | 0;
 HEAP32[i4 >> 2] = i5 << 3 | i5 << 2 | 16;
 HEAP32[i1 >> 2] = i3;
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
function __ZNK7WebCore12RenderInline29frameRectForStickyPositioningEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 __ZNK7WebCore12RenderInline16linesBoundingBoxEv(i4, i2);
 i2 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i1 + 4 >> 2] = i2;
 i2 = i4 + 8 | 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i1 + 12 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12RenderInline11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return __ZNK7WebCore17RenderLineBoxList7hitTestEPNS_20RenderBoxModelObjectERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1 + 44 | 0, i1 | 0, i2, i3, i4, i5, i6) | 0;
}
function __ZNK7WebCore12RenderInline11marginStartEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP32[i2 + 36 >> 2] | 0;
 i5 = (i3 | 0) == 0 ? i4 : i3;
 __ZN7WebCoreL13computeMarginEPKNS_12RenderInlineERKNS_6LengthE(i1, i2, __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i4 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i5 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i5 + 40 >> 2] | 0) >>> 30 & 1) | 0);
 return;
}
function __ZNK7WebCore12RenderInline9marginEndEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP32[i2 + 36 >> 2] | 0;
 i5 = (i3 | 0) == 0 ? i4 : i3;
 __ZN7WebCoreL13computeMarginEPKNS_12RenderInlineERKNS_6LengthE(i1, i2, __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i4 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i5 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i5 + 40 >> 2] | 0) >>> 30 & 1) | 0);
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
function __ZNK7WebCore12RenderInline17borderBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 __ZNK7WebCore12RenderInline16linesBoundingBoxEv(i4, i2);
 i2 = HEAP32[i4 + 8 >> 2] | 0;
 i5 = HEAP32[i4 + 12 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i2;
 HEAP32[i1 + 12 >> 2] = i5;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject12borderBottomEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i2 + 128 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = i1 >>> 1 & 67108863;
 return i3 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject11borderRightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i2 + 112 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = i1 >>> 1 & 67108863;
 return i3 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject10borderLeftEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i2 + 104 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = i1 >>> 1 & 67108863;
 return i3 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject9borderTopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i2 + 120 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = i1 >>> 1 & 67108863;
 return i3 | 0;
}
function iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZN7WebCore12RenderInline8addChildEPNS_12RenderObjectES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((__ZNK7WebCore20RenderBoxModelObject12continuationEv(i1 | 0) | 0) == 0) {
  __ZN7WebCore12RenderInline28addChildIgnoringContinuationEPNS_12RenderObjectES2_(i1, i2, i3);
  return;
 } else {
  __ZN7WebCore12RenderInline22addChildToContinuationEPNS_12RenderObjectES2_(i1, i2, i3);
  return;
 }
}
function __ZNK7WebCore12RenderInline25inlineElementContinuationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i1 | 0) | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP32[i2 + 20 >> 2] & 1024 | 0) != 0) {
    break;
   }
   i3 = __ZNK7WebCore11RenderBlock25inlineElementContinuationEv(i2) | 0;
   return i3 | 0;
  }
 } while (0);
 i3 = i2;
 return i3 | 0;
}
function __ZNK7WebCore12RenderInline12marginBeforeEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 + 36 >> 2] | 0;
 __ZN7WebCoreL13computeMarginEPKNS_12RenderInlineERKNS_6LengthE(i1, i2, __ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i4 + 16 >> 2] | 0) + 36 | 0, (HEAP32[((i3 | 0) == 0 ? i4 : i3) + 44 >> 2] | 0) >>> 13 & 3) | 0);
 return;
}
function __ZNK7WebCore12RenderInline11marginAfterEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 + 36 >> 2] | 0;
 __ZN7WebCoreL13computeMarginEPKNS_12RenderInlineERKNS_6LengthE(i1, i2, __ZNK7WebCore9LengthBox5afterENS_11WritingModeE((HEAP32[i4 + 16 >> 2] | 0) + 36 | 0, (HEAP32[((i3 | 0) == 0 ? i4 : i3) + 44 >> 2] | 0) >>> 13 & 3) | 0);
 return;
}
function iiii___ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore12RenderInline15updateDragStateEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 __ZN7WebCore12RenderObject15updateDragStateEb(i1 | 0, i2);
 i3 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i1 | 0) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 436 >> 2] & 127](i3 | 0, i2);
 return;
}
function viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore12RenderInline12offsetHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 __ZNK7WebCore12RenderInline16linesBoundingBoxEv(i4, i2);
 HEAP32[i1 >> 2] = HEAP32[i4 + 12 >> 2];
 STACKTOP = i3;
 return;
}
function viii___ZN7WebCore22RenderLayerModelObject15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore22RenderLayerModelObject15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore12RenderInline11offsetWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 __ZNK7WebCore12RenderInline16linesBoundingBoxEv(i4, i2);
 HEAP32[i1 >> 2] = HEAP32[i4 + 8 >> 2];
 STACKTOP = i3;
 return;
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
function __ZN7WebCore12RenderInline5paintERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore17RenderLineBoxList5paintEPNS_20RenderBoxModelObjectERNS_9PaintInfoERKNS_11LayoutPointE(i1 + 44 | 0, i1 | 0, i2, i3);
 return;
}
function viii___ZNK7WebCore20RenderBoxModelObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore20RenderBoxModelObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore12RenderInline26dirtyLinesFromChangedChildEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17RenderLineBoxList26dirtyLinesFromChangedChildEPNS_20RenderBoxModelObjectEPNS_12RenderObjectE(i1 + 44 | 0, i1 | 0, i2);
 return;
}
function vii___ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE(i1 | 0, i2 | 0);
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
function __ZN7WebCore12RenderInline12imageChangedEPKvPKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  return;
 }
 __ZNK7WebCore12RenderObject7repaintEb(i1 | 0, 0);
 return;
}
function __ZNK7WebCore12RenderInline12marginBottomEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCoreL13computeMarginEPKNS_12RenderInlineERKNS_6LengthE(i1, i2, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 60 | 0);
 return;
}
function __ZNK7WebCore12RenderInline11marginRightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCoreL13computeMarginEPKNS_12RenderInlineERKNS_6LengthE(i1, i2, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 44 | 0);
 return;
}
function __ZN7WebCore12RenderInline15updateFromStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore20RenderBoxModelObject15updateFromStyleEv(i1 | 0);
 i2 = i1 + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -394241 | 1024;
 return;
}
function vii___ZNK7WebCore20RenderBoxModelObject37containingBlockLogicalWidthForContentEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore20RenderBoxModelObject37containingBlockLogicalWidthForContentEv(i1 | 0, i2 | 0);
}
function __ZNK7WebCore12RenderInline10marginLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCoreL13computeMarginEPKNS_12RenderInlineERKNS_6LengthE(i1, i2, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 36 | 0);
 return;
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
function __ZNK7WebCore12RenderInline9marginTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCoreL13computeMarginEPKNS_12RenderInlineERKNS_6LengthE(i1, i2, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 52 | 0);
 return;
}
function iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi(i1 | 0, i2 | 0) | 0;
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE(i1 | 0, i2 | 0) | 0;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZN7WebCore12RenderObject23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore13RenderElement11removeChildERNS_12RenderObjectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore13RenderElement11removeChildERNS_12RenderObjectE(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore20RenderBoxModelObject24pixelSnappedOffsetHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20RenderBoxModelObject24pixelSnappedOffsetHeightEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore20RenderBoxModelObject23pixelSnappedOffsetWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20RenderBoxModelObject23pixelSnappedOffsetWidthEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv(i1 | 0) | 0;
}
function __ZNK7WebCore20RenderBoxModelObject12borderBeforeEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle17borderBeforeWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
}
function iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject14previousOffsetEi(i1 | 0, i2 | 0) | 0;
}
function ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv(i1 | 0) | 0;
}
function __ZNK7WebCore20RenderBoxModelObject11borderStartEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle16borderStartWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject11borderAfterEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle16borderAfterWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
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
function __ZNK7WebCore20RenderBoxModelObject9borderEndEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle14borderEndWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
}
function ii___ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv(i1 | 0) | 0;
}
function iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject10nextOffsetEi(i1 | 0, i2 | 0) | 0;
}
function vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject14localTransformEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject22localToParentTransformEv(i1 | 0) | 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv(i1 | 0);
}
function __ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject7isEmptyEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 255](i1) | 0) == 0 | 0;
}
function vi___ZN7WebCore13RenderElement21willBeRemovedFromTreeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13RenderElement21willBeRemovedFromTreeEv(i1 | 0);
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
function ii___ZNK7WebCore13RenderElement13hoverAncestorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore13RenderElement13hoverAncestorEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject14firstLineBlockEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14firstLineBlockEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14caretMinOffsetEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14caretMaxOffsetEv(i1 | 0) | 0;
}
function __ZNK7WebCore12RenderInline19virtualContinuationEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20RenderBoxModelObject12continuationEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 63](i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore22RenderLayerModelObject33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore12RenderInline11deleteLinesEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17RenderLineBoxList17deleteLineBoxTreeEv(i1 + 44 | 0);
 return;
}
function vi___ZN7WebCore13RenderElement16insertedIntoTreeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13RenderElement16insertedIntoTreeEv(i1 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore12RenderInlineD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore20RenderBoxModelObjectD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function b3(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(3);
 return 0;
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
function __ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 127](i2 | 0, i3 | 0);
}
function __ZN7WebCore12RenderInlineD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore20RenderBoxModelObjectD2Ev(i1 | 0);
 return;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZNK7WebCore13RenderElement14firstChildSlowEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 28 >> 2] | 0;
}
function __ZNK7WebCore13RenderElement13lastChildSlowEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 32 >> 2] | 0;
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
function __ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b10(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(10);
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
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
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
function __ZNK7WebCore12RenderObject18canBeSelectionLeafEv(i1) {
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
function __ZNK7WebCore12RenderObject15isSVGInlineTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject15isDetailsMarkerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderInline15canHaveChildrenEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function __ZN7WebCore12RenderObject17updateFromElementEv(i1) {
 i1 = i1 | 0;
 return;
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
function __ZNK7WebCore12RenderObject12isRenderGridEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject12isListMarkerEv(i1) {
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
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
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
function __ZNK7WebCore12RenderObject6lengthEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject6isRubyEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject5isWBREv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12RenderInline6layoutEv(i1) {
 i1 = i1 | 0;
 return;
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
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZNK7WebCore12RenderInline19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb,b0,__ZNK7WebCore12RenderInline19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb,b0,__ZN7WebCore12RenderInline14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE,b0,__ZNK7WebCore12RenderInline10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper,b1,__ZN7WebCore12RenderInline6layoutEv,b1,__ZN7WebCore12RenderObject17updateFromElementEv,b1,vi___ZN7WebCore13RenderElement21willBeRemovedFromTreeEv__wrapper,b1,vi___ZN7WebCore13RenderElement16insertedIntoTreeEv__wrapper,b1,__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv,b1,__ZN7WebCore12RenderInline15updateFromStyleEv,b1,__ZN7WebCore12RenderInlineD0Ev,b1,__ZN7WebCore12RenderInlineD1Ev,b1,__ZN7WebCore12RenderInline15willBeDestroyedEv,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZNK7WebCore12RenderInline10marginLeftEv,b2,__ZNK7WebCore12RenderInline9marginTopEv,b2,__ZNK7WebCore20RenderBoxModelObject12paddingStartEv,b2,__ZN7WebCore12RenderInline26dirtyLinesFromChangedChildEPNS_12RenderObjectE,b2,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b2,__ZNK7WebCore12RenderInline9offsetTopEv,b2,__ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv,b2,__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv,b2,__ZNK7WebCore12RenderInline12offsetHeightEv,b2,vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper,b2,__ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv,b2,vii___ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE__wrapper,b2,vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper,b2,__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv
  ,b2,vii___ZN7WebCore13RenderElement11removeChildERNS_12RenderObjectE__wrapper,b2,__ZNK7WebCore12RenderInline10offsetLeftEv,b2,__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv,b2,vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper,b2,vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper,b2,vii___ZNK7WebCore20RenderBoxModelObject37containingBlockLogicalWidthForContentEv__wrapper,b2,__ZNK7WebCore12RenderInline11marginRightEv,b2,__ZN7WebCore12RenderInline19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE,b2,__ZNK7WebCore20RenderBoxModelObject10paddingEndEv,b2,vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper,b2,__ZN7WebCore12RenderInline15updateDragStateEb,b2,__ZNK7WebCore12RenderInline29frameRectForStickyPositioningEv,b2,__ZNK7WebCore12RenderInline17borderBoundingBoxEv,b2,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b2,__ZNK7WebCore12RenderInline12marginBottomEv
  ,b2,__ZNK7WebCore20RenderBoxModelObject12paddingRightEv,b2,__ZNK7WebCore12RenderInline11offsetWidthEv,b2,__ZN7WebCore12RenderInline19createInlineFlowBoxEv,b2,__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv,b2,__ZNK7WebCore20RenderBoxModelObject10paddingTopEv,b2,__ZN7WebCore12RenderInline20childBecameNonInlineEPNS_12RenderObjectE,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_iiiiiii = [b3,b3,__ZN7WebCore12RenderInline11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZNK7WebCore12RenderObject19isSVGResourceFilterEv,b4,__ZNK7WebCore12RenderObject13isSVGTextPathEv,b4,__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv,b4,__ZNK7WebCore12RenderObject10isRubyTextEv,b4,__ZNK7WebCore12RenderObject6isRubyEv,b4,__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv,b4,__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv,b4,ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper,b4,__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv,b4,__ZNK7WebCore12RenderObject8isWidgetEv,b4,__ZNK7WebCore12RenderObject11isTextFieldEv,b4,__ZNK7WebCore12RenderObject18isRenderFullScreenEv,b4,__ZNK7WebCore13RenderElement13lastChildSlowEv,b4,__ZNK7WebCore20RenderBoxModelObject11borderRightEv
  ,b4,__ZNK7WebCore12RenderObject7isQuoteEv,b4,ii___ZNK7WebCore12RenderObject14firstLineBlockEv__wrapper,b4,__ZNK7WebCore12RenderObject9isSVGRootEv,b4,__ZNK7WebCore12RenderObject7isFrameEv,b4,__ZNK7WebCore12RenderObject16isEmbeddedObjectEv,b4,__ZNK7WebCore20RenderBoxModelObject12borderBottomEv,b4,__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv,b4,__ZNK7WebCore12RenderObject15isSVGInlineTextEv,b4,__ZNK7WebCore12RenderObject7isMeterEv,b4,__ZNK7WebCore12RenderObject14isSVGContainerEv,b4,__ZNK7WebCore12RenderObject22isSVGResourceContainerEv,b4,__ZNK7WebCore12RenderObject7isImageEv,b4,__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv,b4,__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv,b4,__ZNK7WebCore20RenderBoxModelObject9borderEndEv
  ,b4,__ZNK7WebCore12RenderObject18canBeSelectionLeafEv,b4,__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv,b4,__ZNK7WebCore12RenderObject10isSVGImageEv,b4,__ZNK7WebCore12RenderObject20isStretchingChildrenEv,b4,__ZNK7WebCore12RenderObject15isDetailsMarkerEv,b4,__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv,b4,__ZNK7WebCore12RenderObject16isRenderTableColEv,b4,__ZNK7WebCore12RenderInline10renderNameEv,b4,__ZNK7WebCore12RenderObject10isProgressEv,b4,__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv,b4,__ZNK7WebCore12RenderObject13isCombineTextEv,b4,__ZNK7WebCore12RenderObject9isCounterEv,b4,__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv,b4,__ZNK7WebCore12RenderObject10isFrameSetEv,b4,__ZNK7WebCore12RenderObject5isWBREv
  ,b4,__ZNK7WebCore12RenderObject22isSVGViewportContainerEv,b4,__ZNK7WebCore13RenderElement14firstChildSlowEv,b4,__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv,b4,__ZNK7WebCore12RenderObject17isRenderMathMLRowEv,b4,__ZNK7WebCore12RenderObject16isRenderSVGBlockEv,b4,__ZNK7WebCore12RenderObject9isReplicaEv,b4,__ZNK7WebCore12RenderObject19isFileUploadControlEv,b4,__ZNK7WebCore12RenderObject7isMediaEv,b4,__ZNK7WebCore12RenderObject10isSVGShapeEv,b4,__ZNK7WebCore12RenderObject14isRenderButtonEv,b4,__ZNK7WebCore12RenderObject8isSliderEv,b4,__ZNK7WebCore12RenderObject10isRubyBaseEv,b4,__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv,b4,__ZNK7WebCore12RenderObject8isCanvasEv,b4,__ZNK7WebCore12RenderObject10isMenuListEv
  ,b4,ii___ZNK7WebCore13RenderElement13hoverAncestorEv__wrapper,b4,__ZNK7WebCore12RenderObject18isRenderMathMLMathEv,b4,__ZNK7WebCore12RenderObject14isTableCaptionEv,b4,ii___ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv__wrapper,b4,__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv,b4,ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper,b4,__ZNK7WebCore12RenderObject13isSliderThumbEv,b4,__ZNK7WebCore12RenderObject7isVideoEv,b4,__ZNK7WebCore12RenderObject13isTextControlEv,b4,ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper,b4,__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv,b4,__ZNK7WebCore12RenderObject9isSVGTextEv,b4,__ZNK7WebCore12RenderObject10isTextAreaEv,b4,__ZNK7WebCore12RenderInline15canHaveChildrenEv,b4,__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv
  ,b4,__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv,b4,__ZNK7WebCore12RenderInline13requiresLayerEv,b4,__ZNK7WebCore12RenderObject11isTableCellEv,b4,__ZNK7WebCore12RenderObject12isRenderGridEv,b4,__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv,b4,__ZNK7WebCore12RenderObject9isListBoxEv,b4,__ZNK7WebCore12RenderObject9isSVGPathEv,b4,__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv,b4,__ZNK7WebCore12RenderObject13isRenderImageEv,b4,__ZNK7WebCore12RenderObject18isRenderMathMLRootEv,b4,ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper,b4,__ZNK7WebCore12RenderObject10isListItemEv,b4,__ZNK7WebCore12RenderObject14isRenderIFrameEv,b4,__ZNK7WebCore12RenderObject6lengthEv,b4,__ZNK7WebCore12RenderObject10isTableRowEv
  ,b4,__ZNK7WebCore12RenderObject13isFlexibleBoxEv,b4,__ZNK7WebCore20RenderBoxModelObject11borderAfterEv,b4,__ZNK7WebCore12RenderObject10isFieldsetEv,b4,__ZNK7WebCore12RenderObject11isSVGInlineEv,b4,__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv,b4,__ZNK7WebCore12RenderObject18isSVGForeignObjectEv,b4,__ZNK7WebCore12RenderObject18isRenderFlowThreadEv,b4,__ZNK7WebCore12RenderObject9isRubyRunEv,b4,__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv,b4,__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv,b4,__ZNK7WebCore12RenderObject14isRenderRegionEv,b4,__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv,b4,__ZNK7WebCore17CachedImageClient18resourceClientTypeEv,b4,__ZN7WebCore12RenderObject21needsBoundariesUpdateEv,b4,__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv
  ,b4,__ZNK7WebCore20RenderBoxModelObject9borderTopEv,b4,__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv,b4,__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv,b4,ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper,b4,__ZNK7WebCore12RenderInline19virtualContinuationEv,b4,ii___ZNK7WebCore20RenderBoxModelObject24pixelSnappedOffsetHeightEv__wrapper,b4,__ZNK7WebCore12RenderObject17isSVGGradientStopEv,b4,ii___ZNK7WebCore20RenderBoxModelObject23pixelSnappedOffsetWidthEv__wrapper,b4,__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv,b4,__ZNK7WebCore20RenderBoxModelObject10borderLeftEv,b4,ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper,b4,__ZNK7WebCore12RenderObject12isListMarkerEv,b4,__ZNK7WebCore12RenderObject7isEmptyEv,b4,__ZNK7WebCore20RenderBoxModelObject11borderStartEv,b4,__ZNK7WebCore12RenderObject7isTableEv
  ,b4,__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv,b4,__ZNK7WebCore12RenderObject14isTableSectionEv,b4,__ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_iiii = [b5,b5,__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE,b5,iiii___ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE__wrapper,b5,iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper,b5,__ZNK7WebCore12RenderInline22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE,b5,b5,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6,__ZN7WebCore12RenderInline12imageChangedEPKvPKNS_7IntRectE,b6,viii___ZNK7WebCore20RenderBoxModelObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper,b6,__ZN7WebCore12RenderInline5paintERNS_9PaintInfoERKNS_11LayoutPointE,b6,__ZN7WebCore12RenderInline14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE,b6,__ZNK7WebCore12RenderInline11marginAfterEPKNS_11RenderStyleE,b6,viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper,b6,__ZNK7WebCore12RenderInline13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb,b6,__ZNK7WebCore12RenderInline13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE,b6,viii___ZN7WebCore22RenderLayerModelObject15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE__wrapper,b6,__ZN7WebCore12RenderInlineC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE,b6,__ZN7WebCore12RenderInline16positionForPointERKNS_11LayoutPointE,b6,__ZN7WebCore12RenderInline8addChildEPNS_12RenderObjectES2_,b6,__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE,b6,__ZN7WebCore12RenderInline28addChildIgnoringContinuationEPNS_12RenderObjectES2_
  ,b6,__ZNK7WebCore12RenderInline11marginStartEPKNS_11RenderStyleE,b6,__ZN7WebCore12RenderInlineC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE,b6,__ZNK7WebCore12RenderInline9marginEndEPKNS_11RenderStyleE,b6,__ZNK7WebCore12RenderInline29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE,b6,__ZN7WebCore12RenderInline19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE,b6,__ZNK7WebCore12RenderInline12marginBeforeEPKNS_11RenderStyleE,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6];
  var FUNCTION_TABLE_v = [b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8,iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper,b8,__ZNK7WebCore22RenderLayerModelObject33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE,b8,iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper,b8,iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper,b8,iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper,b8,b8,b8,b8,b8];
  var FUNCTION_TABLE_iiiiii = [b9,b9,__ZNK7WebCore12RenderInline16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE,b9,iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper,b9,b9,b9];
  var FUNCTION_TABLE_viiii = [b10,b10,viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper,b10,__ZN7WebCore12RenderObject23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb,b10,__ZNK7WebCore12RenderInline25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE,b10,__ZN7WebCore12RenderInline17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE,b10,__ZNK7WebCore12RenderInline21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb,b10,__ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE,b10,b10,b10];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "_floorf": _floorf, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN7WebCore13InlineFlowBoxE": __ZTVN7WebCore13InlineFlowBoxE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore12RenderObject19isSVGResourceFilterEv","__ZNK7WebCore12RenderObject13isSVGTextPathEv","__ZN7WebCore12RenderInline19hitTestCulledInlineERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject10isRubyTextEv","__ZNK7WebCore12RenderObject6isRubyEv","_strlen","__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv","__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv","__ZNK7WebCore12RenderInline10marginLeftEv","__ZN3WTF6VectorIN7WebCore10LayoutRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore12RenderInline19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb","__ZN7WebCore12RenderInline6layoutEv","__ZN7WebCore12RenderInline12imageChangedEPKvPKNS_7IntRectE","__ZNK7WebCore12RenderInline9marginTopEv","__ZNK7WebCore20RenderBoxModelObject12paddingStartEv","__ZN7WebCore12RenderInline26dirtyLinesFromChangedChildEPNS_12RenderObjectE","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZNK7WebCore12RenderObject8isWidgetEv","__ZNK7WebCore12RenderObject11isTextFieldEv","__ZNK7WebCore12RenderObject18isRenderFullScreenEv","__ZNK7WebCore20RenderBoxModelObject11borderRightEv","__ZNK7WebCore12RenderInline9offsetTopEv","__ZN7WebCore12RenderObject17updateFromElementEv","__ZNK7WebCore20RenderBoxModelObject9borderEndEv","__ZNK7WebCore12RenderInline29frameRectForStickyPositioningEv","__ZNK7WebCore12RenderObject9isSVGRootEv","__ZNK7WebCore12RenderInline23culledInlineLastLineBoxEv","__ZNK7WebCore12RenderObject7isFrameEv","__ZN7WebCore12RenderInline12paintOutlineERNS_9PaintInfoERKNS_11LayoutPointE","__ZN7WebCore12RenderInline18continuationBeforeEPNS_12RenderObjectE","__ZNK7WebCore20RenderBoxModelObject12borderBottomEv","__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv","__ZN7WebCoreL13computeMarginEPKNS_12RenderInlineERKNS_6LengthE","__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv","__ZNK7WebCore12RenderInline19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb","__ZNK7WebCore12RenderObject7isMeterEv","__ZNK7WebCore12RenderObject13isSliderThumbEv","__ZN7WebCore12RenderInline20childBecameNonInlineEPNS_12RenderObjectE","__ZNK7WebCore12RenderInline26generateCulledLineBoxRectsINS_12_GLOBAL__N_136HitTestCulledInlinesGeneratorContextEEEvRT_PKS0_","__ZN7WebCore12RenderInline19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE","__ZN7WebCore12RenderInline22addChildToContinuationEPNS_12RenderObjectES2_","__ZNK7WebCore12RenderInline31offsetForInFlowPositionedInlineEPKNS_9RenderBoxE","__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv","__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv","__ZNK7WebCore12RenderObject7isQuoteEv","__ZN7WebCore12RenderInline14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE","__ZNK7WebCore12RenderObject10isListItemEv","__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv","__ZNK7WebCore12RenderObject10isSVGImageEv","__ZNK7WebCore12RenderInline12offsetHeightEv","__ZNK7WebCore12RenderInline17borderBoundingBoxEv","__ZNK7WebCore12RenderObject20isStretchingChildrenEv","__ZNK7WebCore12RenderInline37culledInlineVisualOverflowBoundingBoxEv","__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv","__ZNK7WebCore12RenderObject15isDetailsMarkerEv","__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv","__ZNK7WebCore12RenderInline11marginAfterEPKNS_11RenderStyleE","__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE","__ZN7WebCore12RenderInline5paintERNS_9PaintInfoERKNS_11LayoutPointE","__ZN7WebCore12RenderObject23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb","__ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv","__ZNK7WebCore12RenderObject16isRenderTableColEv","__ZNK7WebCore12RenderInline10renderNameEv","__ZNK7WebCore12RenderObject10isProgressEv","__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv","__ZNK7WebCore12RenderObject16isAnonymousBlockEv","__ZN7WebCore12RenderInlineC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE","__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv","__ZNK7WebCore12RenderObject5isWBREv","__ZN7WebCore12RenderInline28addChildIgnoringContinuationEPNS_12RenderObjectES2_","__ZNK7WebCore12RenderInline25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE","__ZNK7WebCore12RenderObject22isSVGViewportContainerEv","__ZN7WebCore12RenderInline19createInlineFlowBoxEv","__ZN7WebCore12RenderInline14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv","__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv","__ZN3WTF6VectorIN7WebCore20AnnotatedRegionValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZNK7WebCore12RenderInline16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE","__ZN7WebCore12RenderInline9splitFlowEPNS_12RenderObjectEPNS_11RenderBlockES2_PNS_20RenderBoxModelObjectE","__ZNK7WebCore12RenderObject17isRenderMathMLRowEv","__ZNK7WebCore12RenderObject18canBeSelectionLeafEv","__ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE","__ZN7WebCore12RenderInline17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE","__ZNK7WebCore12RenderObject16isRenderSVGBlockEv","__ZN7WebCore12_GLOBAL__N_129AbsoluteQuadsGeneratorContextclERKNS_9FloatRectE","__ZNK7WebCore12RenderObject9isReplicaEv","__ZNK7WebCore12RenderInline26generateCulledLineBoxRectsINS_12_GLOBAL__N_129AbsoluteRectsGeneratorContextEEEvRT_PKS0_","__ZNK7WebCore12RenderObject19isFileUploadControlEv","__ZNK7WebCore12RenderInline25inlineElementContinuationEv","__ZNK7WebCore12RenderInline13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb","__ZNK7WebCore12RenderObject7isMediaEv","__ZNK7WebCore12RenderObject10isSVGShapeEv","__ZNK7WebCore20RenderBoxModelObject12paddingRightEv","__ZN7WebCore12RenderInline12splitInlinesEPNS_11RenderBlockES2_S2_PNS_12RenderObjectEPNS_20RenderBoxModelObjectE","__ZNK7WebCore12RenderObject14isRenderButtonEv","__ZN7WebCore12RenderInline14dirtyLineBoxesEb","__ZNK7WebCore12RenderObject10isRubyBaseEv","__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv","__ZNK7WebCore12RenderInline10offsetLeftEv","__ZNK7WebCore12RenderObject8isCanvasEv","__ZNK7WebCore12RenderObject11isSVGInlineEv","__ZNK7WebCore12RenderInline13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE","__ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore12RenderObject18isRenderMathMLMathEv","__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv","__ZNK7WebCore12RenderObject14isTableCaptionEv","__ZNK7WebCore12RenderObject10isMenuListEv","__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv","__ZNK7WebCore12RenderObject16isEmbeddedObjectEv","__ZNK7WebCore13RenderElement13lastChildSlowEv","__ZNK7WebCore12RenderObject7isVideoEv","__ZNK7WebCore12RenderObject13isTextControlEv","__ZNK7WebCore12RenderObject9isSVGTextEv","__ZNK7WebCore12RenderObject10isTextAreaEv","__ZNK7WebCore12RenderInline15canHaveChildrenEv","__ZNK7WebCore12RenderInline11marginRightEv","__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv","__ZN7WebCore12RenderInline19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore12RenderInline26generateCulledLineBoxRectsINS_12_GLOBAL__N_132LinesBoundingBoxGeneratorContextEEEvRT_PKS0_","__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv","_memset","__ZNK7WebCore20RenderBoxModelObject10paddingTopEv","__ZNK7WebCore12RenderObject11isTableCellEv","__ZN7WebCore12RenderInlineC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE","__ZNK7WebCore12RenderObject12isRenderGridEv","__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv","__ZNK7WebCore20RenderBoxModelObject10paddingEndEv","__ZN7WebCore12RenderInline16positionForPointERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject9isListBoxEv","__ZN7WebCore12RenderInline15updateDragStateEb","__ZNK7WebCore12RenderObject9isSVGPathEv","__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv","__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv","__ZN7WebCore12RenderInline15updateFromStyleEv","__ZNK7WebCore12RenderInline26generateCulledLineBoxRectsINS_12_GLOBAL__N_129AbsoluteQuadsGeneratorContextEEEvRT_PKS0_","__ZNK7WebCore22RenderLayerModelObject33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE","__ZNK7WebCore12RenderObject13isRenderImageEv","__ZNK7WebCore12RenderObject18isRenderMathMLRootEv","__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv","__ZN7WebCore12RenderInline8addChildEPNS_12RenderObjectES2_","__ZN7WebCore12RenderInline27updateAlwaysCreateLineBoxesEb","__ZNK7WebCore12RenderObject6lengthEv","__ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv","__ZNK7WebCore12RenderInline5cloneEv","__ZNK7WebCore12RenderObject10isTableRowEv","__ZNK7WebCore12RenderObject13isFlexibleBoxEv","__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject10isFrameSetEv","__ZNK7WebCore20RenderBoxModelObject11borderAfterEv","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZNK7WebCore12RenderObject10isFieldsetEv","__ZNK7WebCore12RenderObject13isCombineTextEv","__ZNK7WebCore12RenderObject8isSliderEv","__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv","__ZNK7WebCore12RenderInline12marginBottomEv","__ZN7WebCore12RenderInline19paintOutlineForLineEPNS_15GraphicsContextERKNS_11LayoutPointERKNS_10LayoutRectES8_S8_NS_5ColorE","__ZNK7WebCore12RenderObject18isSVGForeignObjectEv","__ZNK7WebCore12RenderObject18isRenderFlowThreadEv","__ZNK7WebCore12RenderInline16linesBoundingBoxEv","__ZNK7WebCore12RenderInline21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb","__ZNK7WebCore12RenderObject9isRubyRunEv","__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv","__ZNK7WebCore20RenderBoxModelObject11borderStartEv","__ZNK7WebCore12RenderObject14isRenderIFrameEv","__ZN7WebCore12RenderInlineD1Ev","__ZNK7WebCore12RenderInline24culledInlineFirstLineBoxEv","__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv","__ZN7WebCore12RenderInline15willBeDestroyedEv","__ZNK7WebCore12RenderInline11offsetWidthEv","__ZNK7WebCore12RenderObject14isRenderRegionEv","__ZNK7WebCore13RenderElement14firstChildSlowEv","__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv","__ZNK7WebCore17CachedImageClient18resourceClientTypeEv","__ZN7WebCore12RenderObject21needsBoundariesUpdateEv","__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv","__ZNK7WebCore20RenderBoxModelObject9borderTopEv","__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv","__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv","__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv","__ZNK7WebCore12RenderObject15isSVGInlineTextEv","__ZNK7WebCore12RenderInline30linesVisualOverflowBoundingBoxEv","__ZNK7WebCore12RenderInline10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE","__ZNK7WebCore12RenderObject7isImageEv","__ZN7WebCore12_GLOBAL__N_129AbsoluteRectsGeneratorContextclERKNS_9FloatRectE","__ZNK7WebCore12RenderInline11marginStartEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject9isCounterEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore12RenderInline19virtualContinuationEv","__ZN7WebCore12RenderInline11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE","__ZNK7WebCore12RenderInline22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE","__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv","__ZNK7WebCore12RenderObject17isSVGGradientStopEv","__ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore12RenderObject14isSVGContainerEv","__ZNK7WebCore12RenderInline13requiresLayerEv","__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv","__ZNK7WebCore20RenderBoxModelObject10borderLeftEv","_memcpy","__ZNK7WebCore12RenderObject12isListMarkerEv","__ZNK7WebCore12RenderObject7isEmptyEv","__ZN7WebCore12RenderInline11deleteLinesEv","__ZN7WebCore12RenderInlineD0Ev","__ZNK7WebCore12RenderObject7isTableEv","__ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEEC2ERKS4_","__ZNK7WebCore12RenderInline9marginEndEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv","__ZNK7WebCore12RenderObject14isTableSectionEv","__ZNK7WebCore12RenderInline29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE","__ZNK7WebCore12RenderObject22isSVGResourceContainerEv","__ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv","__ZN7WebCore12RenderInline28createAndAppendInlineFlowBoxEv","__ZNK7WebCore12RenderInline12marginBeforeEPKNS_11RenderStyleE"]

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
H_BASE = parentModule["_malloc"](176 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 176;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14RenderTextInfoC1Ev;
var __ZN7WebCore14RenderTextInfoD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,38,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
function invoke_fiifffii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_fiifffii"](index,a1,a2,a3,a4,a5,a6,a7);
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
function invoke_viff(index,a1,a2,a3) {
  try {
    Module["dynCall_viff"](index,a1,a2,a3);
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
function invoke_iiiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_iiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var __ZTVN7WebCore27TrailingFloatsRootInlineBoxE=(H_BASE+8)|0;
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
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_fiifffii=env.invoke_fiifffii;
  var invoke_fiiifiii=env.invoke_fiiifiii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_viff=env.invoke_viff;
  var invoke_fi=env.invoke_fi;
  var invoke_iiiiiiii=env.invoke_iiiiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
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
function __ZN7WebCore15RenderBlockFlow26layoutRunsAndFloatsInRangeERNS_15LineLayoutStateERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERKS4_RKNS_10BidiStatusEj(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, i123 = 0, i124 = 0, i125 = 0, i126 = 0, i127 = 0, i128 = 0, i129 = 0, i130 = 0, i131 = 0, i132 = 0, i133 = 0, i134 = 0, i135 = 0, i136 = 0, i137 = 0, i138 = 0, i139 = 0, i140 = 0, i141 = 0, i142 = 0, i143 = 0, i144 = 0, i145 = 0, i146 = 0, i147 = 0, i148 = 0, i149 = 0, i150 = 0, i151 = 0, i152 = 0, i153 = 0, i154 = 0, i155 = 0, i156 = 0, i157 = 0, i158 = 0, i159 = 0, i160 = 0, i161 = 0, i162 = 0, i163 = 0, i164 = 0, i165 = 0, i166 = 0, i167 = 0, i168 = 0, i169 = 0, i170 = 0, i171 = 0, i172 = 0, i173 = 0, i174 = 0, i175 = 0, i176 = 0, i177 = 0, i178 = 0, i179 = 0, i180 = 0, i181 = 0, i182 = 0, i183 = 0, i184 = 0, i185 = 0, i186 = 0, i187 = 0, i188 = 0, i189 = 0, i190 = 0, i191 = 0, i192 = 0, i193 = 0, i194 = 0, i195 = 0, i196 = 0, i197 = 0, i198 = 0, d199 = +0, i200 = 0, i201 = 0, i202 = 0, i203 = 0, i204 = 0, i205 = 0, i206 = 0, i207 = 0, i208 = 0, i209 = 0, i210 = 0, i211 = 0, i212 = 0, i213 = 0, i214 = 0, i215 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 472 | 0;
 i8 = i7 | 0;
 i9 = i7 + 16 | 0;
 i10 = i7 + 32 | 0;
 i11 = i7 + 40 | 0;
 i12 = i7 + 48 | 0;
 i13 = i7 + 56 | 0;
 i14 = i7 + 64 | 0;
 i15 = i7 + 72 | 0;
 i16 = i7 + 80 | 0;
 i17 = i7 + 88 | 0;
 i18 = i7 + 96 | 0;
 i19 = i7 + 104 | 0;
 i20 = i7 + 112 | 0;
 i21 = i7 + 120 | 0;
 i22 = i7 + 128 | 0;
 i23 = i7 + 136 | 0;
 i24 = i7 + 144 | 0;
 i25 = i7 + 152 | 0;
 i26 = i7 + 160 | 0;
 i27 = i7 + 168 | 0;
 i28 = i7 + 176 | 0;
 i29 = i7 + 184 | 0;
 i30 = i7 + 192 | 0;
 i31 = i7 + 200 | 0;
 i32 = i7 + 208 | 0;
 i33 = i7 + 216 | 0;
 i34 = i7 + 224 | 0;
 i35 = i7 + 232 | 0;
 i36 = i7 + 240 | 0;
 i37 = i7 + 248 | 0;
 i38 = i7 + 256 | 0;
 i39 = i7 + 264 | 0;
 i40 = i7 + 272 | 0;
 i41 = i7 + 288 | 0;
 i42 = i7 + 296 | 0;
 i43 = i7 + 304 | 0;
 i44 = i7 + 320 | 0;
 i45 = i7 + 328 | 0;
 i46 = i7 + 336 | 0;
 i47 = i7 + 344 | 0;
 i48 = i7 + 360 | 0;
 i49 = i7 + 400 | 0;
 i50 = i7 + 440 | 0;
 i51 = i7 + 464 | 0;
 i52 = i51;
 i53 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i54 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i55 = i54;
 i56 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i57 = STACKTOP;
 STACKTOP = STACKTOP + 2316 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i58 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i59 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i60 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i61 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i62 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i63 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i64 = i63;
 i65 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i66 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i67 = i1 + 36 | 0;
 i68 = HEAP32[i67 >> 2] | 0;
 i69 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
 if ((i69 | 0) == 0) {
  i70 = 0;
 } else {
  i70 = (HEAP8[i69 | 0] & 2) != 0;
 }
 i69 = i47;
 i71 = i3;
 HEAP32[i69 >> 2] = HEAP32[i71 >> 2];
 HEAP32[i69 + 4 >> 2] = HEAP32[i71 + 4 >> 2];
 HEAP32[i69 + 8 >> 2] = HEAP32[i71 + 8 >> 2];
 HEAP32[i69 + 12 >> 2] = HEAP32[i71 + 12 >> 2];
 i72 = (HEAP32[i2 + 16 >> 2] | 0) != 0;
 _memset(i48 | 0, 0, 36) | 0;
 _memset(i49 | 0, 0, 40) | 0;
 HEAP32[i50 >> 2] = i1;
 i73 = i50 + 12 | 0;
 HEAP32[i73 >> 2] = 0;
 i74 = i50 + 16 | 0;
 HEAP32[i74 >> 2] = 0;
 i75 = i50 + 20 | 0;
 HEAP32[i75 >> 2] = 0;
 __ZN7WebCore11LineBreaker5resetEv(i50);
 HEAP32[i51 >> 2] = 0;
 i76 = i52 + 4 | 0;
 HEAP32[i76 >> 2] = 0;
 i77 = i1 | 0;
 i78 = __ZNK7WebCore11RenderBlock21layoutShapeInsideInfoEv(i77) | 0;
 HEAP32[i53 >> 2] = i78;
 do {
  if ((i78 | 0) != 0) {
   if ((i78 | 0) == (__ZNK7WebCore11RenderBlock15shapeInsideInfoEv(i77) | 0)) {
    i79 = 0;
   } else {
    __ZNK7WebCore11RenderBlock39logicalOffsetFromShapeAncestorContainerEPKS0_(i55, i77, HEAP32[i78 + 12 >> 2] | 0);
    i80 = HEAP32[i54 + 4 >> 2] | 0;
    HEAP32[i51 >> 2] = HEAP32[i54 >> 2];
    HEAP32[i51 + 4 >> 2] = i80;
    i79 = i80;
   }
   i80 = (HEAP32[(HEAP32[i67 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i80 | 0) == 3 | (i80 | 0) == 0) {
    i81 = i1 + 56 | 0;
   } else {
    i81 = i1 + 52 | 0;
   }
   i80 = i79 + (HEAP32[i81 >> 2] | 0) | 0;
   i82 = i78 | 0;
   i83 = i78;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i83 >> 2] | 0) + 16 >> 2] & 7](i43, i82);
   i84 = HEAP32[i43 + 4 >> 2] | 0;
   i85 = i78;
   i86 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i85 >> 2] | 0) + 12 >> 2] & 31](i82) | 0;
   if ((i86 | 0) == 4) {
    i87 = HEAP32[i78 + 12 >> 2] | 0;
    i88 = i87 | 0;
    i89 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i87 >> 2] | 0) + 752 >> 2] & 31](i88) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i87 >> 2] | 0) + 720 >> 2] & 7](i41, i88);
    i90 = (HEAP32[i41 >> 2] | 0) + i89 | 0;
   } else if ((i86 | 0) == 3) {
    i89 = HEAP32[i78 + 12 >> 2] | 0;
    i90 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i89 >> 2] | 0) + 752 >> 2] & 31](i89 | 0) | 0;
   } else if ((i86 | 0) == 1) {
    i86 = HEAP32[i78 + 12 >> 2] | 0;
    __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i42, i86 + 60 | 0, (HEAP32[(HEAP32[i86 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
    i90 = -(HEAP32[i42 >> 2] | 0) | 0;
   } else {
    i90 = 0;
   }
   if ((i80 | 0) >= (i90 + i84 | 0)) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i83 >> 2] | 0) + 16 >> 2] & 7](i40, i82);
   i83 = HEAP32[i40 + 4 >> 2] | 0;
   i84 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i85 >> 2] | 0) + 12 >> 2] & 31](i82) | 0;
   if ((i84 | 0) == 1) {
    i82 = HEAP32[i78 + 12 >> 2] | 0;
    __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i39, i82 + 60 | 0, (HEAP32[(HEAP32[i82 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
    i91 = -(HEAP32[i39 >> 2] | 0) | 0;
   } else if ((i84 | 0) == 3) {
    i82 = HEAP32[i78 + 12 >> 2] | 0;
    i91 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i82 >> 2] | 0) + 752 >> 2] & 31](i82 | 0) | 0;
   } else if ((i84 | 0) == 4) {
    i84 = HEAP32[i78 + 12 >> 2] | 0;
    i82 = i84 | 0;
    i85 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i84 >> 2] | 0) + 752 >> 2] & 31](i82) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i84 >> 2] | 0) + 720 >> 2] & 7](i38, i82);
    i91 = (HEAP32[i38 >> 2] | 0) + i85 | 0;
   } else {
    i91 = 0;
   }
   i85 = i91 + i83 - i79 | 0;
   if ((HEAP32[i2 + 44 >> 2] | 0) == 0) {
    i92 = i85;
   } else {
    i83 = HEAP32[i78 + 12 >> 2] | 0;
    i82 = i83 | 0;
    i84 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i83 >> 2] | 0) + 752 >> 2] & 31](i82) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i83 >> 2] | 0) + 720 >> 2] & 7](i37, i82);
    i92 = i85 - i84 - (HEAP32[i37 >> 2] | 0) | 0;
   }
   i84 = (HEAP32[(HEAP32[i67 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i84 | 0) == 3 | (i84 | 0) == 0) {
    HEAP32[i1 + 56 >> 2] = i92;
    break;
   } else {
    HEAP32[i1 + 52 >> 2] = i92;
    break;
   }
  }
 } while (0);
 i92 = i47 + 4 | 0;
 i37 = i2 | 0;
 i78 = i37 + 56 | 0;
 i79 = i3 + 152 | 0;
 i91 = i3 + 156 | 0;
 i38 = i3 + 160 | 0;
 i39 = i2 | 0;
 i40 = i2 + 8 | 0;
 i90 = i56;
 i56 = i2 + 3 | 0;
 i42 = i1;
 i41 = i1 + 96 | 0;
 i43 = i57 + 12 | 0;
 i81 = i57 | 0;
 i51 = i57 + 4 | 0;
 i54 = i57 + 8 | 0;
 i55 = i48 + 20 | 0;
 i84 = i48 + 22 | 0;
 i85 = i3 + 4 | 0;
 i82 = i3 + 124 | 0;
 i83 = i3 + 120 | 0;
 i80 = i3 + 8 | 0;
 i86 = i3 + 12 | 0;
 i89 = i3 + 164 | 0;
 i88 = i3 + 128 | 0;
 i87 = i3 + 136 | 0;
 i93 = i58 | 0;
 i94 = i2 + 2 | 0;
 i95 = i68 + 44 | 0;
 i96 = i3 + 124 | 0;
 i97 = i3 + 76 | 0;
 i98 = i1 + 52 | 0;
 i99 = i96 | 0;
 i100 = i47 + 12 | 0;
 i101 = i3 + 64 | 0;
 i102 = i61 | 0;
 i103 = i2 + 44 | 0;
 i104 = i36 | 0;
 i105 = i22 | 0;
 i106 = i14 | 0;
 i107 = i1;
 i108 = i11 | 0;
 i109 = i12 | 0;
 i110 = i13 | 0;
 i111 = i19 | 0;
 i112 = i16 | 0;
 i113 = i17 | 0;
 i114 = i18 | 0;
 i115 = i20 | 0;
 i116 = i21 | 0;
 i117 = i35 | 0;
 i118 = i27 | 0;
 i119 = i24 | 0;
 i120 = i25 | 0;
 i121 = i26 | 0;
 i122 = i32 | 0;
 i123 = i29 | 0;
 i124 = i30 | 0;
 i125 = i31 | 0;
 i126 = i33 | 0;
 i127 = i34 | 0;
 i128 = i1 + 56 | 0;
 i129 = i62 | 0;
 i130 = i60 | 0;
 i131 = i50 + 4 | 0;
 i132 = i3 + 132 | 0;
 i133 = i8 + 8 | 0;
 i134 = i8 + 12 | 0;
 i135 = i8 + 4 | 0;
 i136 = i9 | 0;
 i137 = i9 + 4 | 0;
 i138 = i9 + 8 | 0;
 i139 = i9 + 12 | 0;
 i140 = i3 | 0;
 i141 = i3 + 80 | 0;
 i142 = i68 + 48 | 0;
 i143 = i68 + 40 | 0;
 i68 = i59 | 0;
 i144 = i3 + 64 | 0;
 i145 = i59 + 4 | 0;
 i146 = i3 + 68 | 0;
 i147 = i59 + 8 | 0;
 i148 = i3 + 72 | 0;
 i149 = i59 + 12 | 0;
 i150 = i50 + 8 | 0;
 i151 = i47 | 0;
 i152 = i1 + 108 | 0;
 i153 = i2 + 20 | 0;
 i154 = i64 + 4 | 0;
 i155 = i2 + 36 | 0;
 i156 = i2 + 32 | 0;
 i157 = i2 + 24 | 0;
 i158 = i46 | 0;
 i159 = i45 | 0;
 i160 = i44 | 0;
 i161 = i6;
 i6 = i72;
 L31 : while (1) {
  if ((HEAP32[i92 >> 2] | 0) == 0) {
   break;
  }
  if (i6) {
   i72 = __ZN7WebCore15RenderBlockFlow14matchedEndLineERNS_15LineLayoutStateERKNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERKS4_RKNS_10BidiStatusE(i1, i2, i3, i4, i5) | 0;
   HEAP8[i78] = HEAP8[i78] & -2 | i72 & 1;
   if (i72) {
    i162 = 27;
    break;
   }
  }
  HEAP32[i79 >> 2] = 0;
  HEAP32[i91 >> 2] = 0;
  HEAP8[i38] = 0;
  __ZN7WebCore8LineInfo8setEmptyEbPNS_11RenderBlockEPNS_9LineWidthE(i39, 1, 0, 0);
  HEAP32[i40 >> 2] = 0;
  HEAP32[i90 >> 2] = HEAP32[i69 >> 2];
  HEAP32[i90 + 4 >> 2] = HEAP32[i69 + 4 >> 2];
  HEAP32[i90 + 8 >> 2] = HEAP32[i69 + 8 >> 2];
  HEAP32[i90 + 12 >> 2] = HEAP32[i69 + 12 >> 2];
  i72 = (HEAP8[i56] & 1) == 0;
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i42 >> 2] | 0) + 1024 >> 2] & 31](i1) | 0) {
   i163 = HEAP32[HEAP32[(HEAP32[i41 >> 2] | 0) + 24 >> 2] >> 2] | 0;
  } else {
   i163 = 0;
  }
  __ZN7WebCore15RenderBlockFlow36updateShapeAndSegmentsForCurrentLineERPNS_15ShapeInsideInfoERKNS_10LayoutSizeERNS_15LineLayoutStateE(i1, i53, i52, i2);
  HEAP32[i81 >> 2] = i43;
  HEAP32[i51 >> 2] = 64;
  HEAP32[i54 >> 2] = 0;
  __ZN7WebCore11LineBreaker13nextLineBreakERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERNS_8LineInfoERNS_14RenderTextInfoEPNS_14FloatingObjectEjRN3WTF6VectorINS_15WordMeasurementELj64ENSC_15CrashOnOverflowEEE(i47, i50, i3, i39, i48, i163, i161, i57);
  HEAP16[i55 >> 1] = 0;
  HEAP16[i84 >> 1] = 0;
  L40 : do {
   if ((HEAP32[i85 >> 2] | 0) == 0) {
    i164 = HEAP32[i82 >> 2] | 0;
    if ((i164 | 0) != 0) {
     i165 = i164;
     while (1) {
      i164 = HEAP32[i165 + 4 >> 2] | 0;
      __ZN7WebCore7BidiRunD1Ev(i165);
      __ZdlPv(i165 | 0);
      if ((i164 | 0) == 0) {
       break;
      } else {
       i165 = i164;
      }
     }
     HEAP32[i82 >> 2] = 0;
     HEAP32[i88 >> 2] = 0;
     HEAP32[i87 >> 2] = 0;
    }
    HEAP8[i83] = 1;
    HEAP8[i78] = HEAP8[i78] | 2;
    HEAP32[i85 >> 2] = 0;
    HEAP32[i80 >> 2] = -1;
    HEAP32[i86 >> 2] = 0;
    HEAP32[i89 >> 2] = 0;
    i166 = i161;
    i167 = i6;
    i168 = 1;
   } else {
    i165 = HEAP32[i53 >> 2] | 0;
    HEAP32[i93 >> 2] = HEAP32[i76 >> 2];
    if (__ZN7WebCore15RenderBlockFlow44adjustLogicalLineTopAndLogicalHeightIfNeededEPNS_15ShapeInsideInfoENS_10LayoutUnitERNS_15LineLayoutStateERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEPNS_14FloatingObjectERS7_RN3WTF6VectorINS_15WordMeasurementELj64ENSE_15CrashOnOverflowEEE(i1, i165, i58, i2, i3, i163, i47, i57) | 0) {
     i166 = i161;
     i167 = i6;
     i168 = 0;
     break;
    }
    do {
     if ((HEAP8[i94] & 1) == 0) {
      if ((HEAP32[i95 >> 2] & 32 | 0) == 0) {
       i169 = 0;
      } else {
       i169 = 2 - ((HEAP32[i143 >> 2] | 0) >>> 30 & 1) | 0;
      }
      do {
       if (!i72) {
        if ((HEAP32[i142 >> 2] & 1879048192 | 0) != 1073741824) {
         break;
        }
        if ((HEAP32[(HEAP32[i97 >> 2] | 0) + 8 >> 2] | 0) != 0) {
         break;
        }
        i165 = (HEAP32[i143 >> 2] | 0) >>> 30 & 1;
        i164 = HEAP32[i140 >> 2] | 0;
        i170 = HEAP32[i85 >> 2] | 0;
        L58 : do {
         if ((i170 | 0) == 0) {
          i171 = i165;
         } else {
          i172 = i170;
          i173 = HEAP32[i86 >> 2] | 0;
          L60 : while (1) {
           if ((i172 | 0) == 0) {
            i174 = i165;
            break;
           }
           i175 = i172 + 20 | 0;
           i176 = i172;
           if ((HEAP32[i175 >> 2] & 4096 | 0) != 0) {
            if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i176 >> 2] | 0) + 620 >> 2] & 31](i172) | 0)) {
             i174 = i165;
             break;
            }
           }
           i177 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i176 >> 2] | 0) + 368 >> 2] & 31](i172) | 0;
           i176 = HEAP32[i175 >> 2] | 0;
           do {
            if (!i177) {
             i178 = (i176 & 768 | 0) == 256;
             if (i178) {
              i179 = HEAP32[(HEAP32[i172 + 8 >> 2] | 0) + 36 >> 2] | 0;
             } else {
              i179 = HEAP32[i172 + 36 >> 2] | 0;
             }
             i180 = HEAP32[i179 + 44 >> 2] & 7;
             if ((i180 | 0) == 4 | (i180 | 0) == 0) {
              break;
             }
             if (!i178) {
              break;
             }
             i178 = HEAP32[i172 + 44 >> 2] | 0;
             if ((HEAP32[i178 + 4 >> 2] | 0) == 0) {
              break;
             }
             if ((HEAP32[i178 + 16 >> 2] & 32 | 0) == 0) {
              i181 = HEAP16[(HEAP32[i178 + 8 >> 2] | 0) + (i173 << 1) >> 1] | 0;
             } else {
              i181 = HEAPU8[(HEAP32[i178 + 8 >> 2] | 0) + i173 | 0] | 0;
             }
             if (i181 << 16 >> 16 == 10) {
              i174 = i165;
              break L60;
             }
            }
           } while (0);
           if ((i176 & 768 | 0) == 256) {
            i177 = HEAP32[i172 + 44 >> 2] | 0;
            do {
             if ((HEAP32[i177 + 4 >> 2] | 0) >>> 0 > i173 >>> 0) {
              if ((HEAP32[i177 + 16 >> 2] & 32 | 0) == 0) {
               i182 = HEAP16[(HEAP32[i177 + 8 >> 2] | 0) + (i173 << 1) >> 1] | 0;
              } else {
               i182 = HEAPU8[(HEAP32[i177 + 8 >> 2] | 0) + i173 | 0] | 0;
              }
              if (i182 << 16 >> 16 == 0) {
               break;
              }
              i178 = _u_charDirection(i182 & 65535) | 0;
              if ((i178 | 0) == 0) {
               i174 = 1;
               break L60;
              } else if ((i178 | 0) == 13 | (i178 | 0) == 1) {
               i171 = 0;
               break L58;
              }
             }
            } while (0);
            i183 = HEAP32[i175 >> 2] | 0;
           } else {
            i183 = i176;
           }
           if ((i183 & 768 | 0) == 256) {
            i177 = i173 + 1 | 0;
            if (i177 >>> 0 < (HEAP32[(HEAP32[i172 + 44 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
             i184 = i172;
             i185 = i177;
            } else {
             i162 = 70;
            }
           } else {
            i162 = 70;
           }
           if ((i162 | 0) == 70) {
            i162 = 0;
            i184 = __ZN7WebCoreL14bidiNextSharedINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_NS_19EmptyInlineBehaviorEPb(i164, i172, 0, 0, 0) | 0;
            i185 = 0;
           }
           if ((i184 | 0) == 0) {
            i174 = i165;
            break;
           } else {
            i172 = i184;
            i173 = i185;
           }
          }
          i171 = i174;
         }
        } while (0);
        i165 = (HEAP32[i142 >> 2] | 0) >>> 28 & 7;
        __ZN7WebCore10BidiStatusC2ENS_13TextDirectionEb(i59, i171, (i165 | 0) == 2 | (i165 | 0) == 5);
        HEAP32[i144 >> 2] = HEAP32[i68 >> 2];
        HEAP32[i146 >> 2] = HEAP32[i145 >> 2];
        HEAP32[i148 >> 2] = HEAP32[i147 >> 2];
        i165 = HEAP32[i149 >> 2] | 0;
        i164 = (i165 | 0) == 0;
        if (!i164) {
         i170 = i165 | 0;
         HEAP32[i170 >> 2] = (HEAP32[i170 >> 2] | 0) + 1;
        }
        i170 = HEAP32[i97 >> 2] | 0;
        HEAP32[i97 >> 2] = i165;
        do {
         if ((i170 | 0) != 0) {
          i173 = i170 | 0;
          i172 = (HEAP32[i173 >> 2] | 0) - 1 | 0;
          if ((i172 | 0) == 0) {
           __ZN7WebCore11BidiContextD2Ev(i170);
           __ZN3WTF8fastFreeEPv(i170);
           break;
          } else {
           HEAP32[i173 >> 2] = i172;
           break;
          }
         }
        } while (0);
        if (i164) {
         break;
        }
        i170 = i165 | 0;
        i172 = (HEAP32[i170 >> 2] | 0) - 1 | 0;
        if ((i172 | 0) == 0) {
         __ZN7WebCore11BidiContextD2Ev(i165);
         __ZN3WTF8fastFreeEPv(i165);
         break;
        } else {
         HEAP32[i170 >> 2] = i172;
         break;
        }
       }
      } while (0);
      i172 = (HEAP8[i56] & 1) != 0;
      i170 = __ZNK7WebCore11RenderBlock21layoutShapeInsideInfoEv(i77) | 0;
      do {
       if ((i170 | 0) == 0) {
        i162 = 92;
       } else {
        i173 = __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE13computedShapeEv(i170 | 0) | 0;
        i177 = HEAP32[i170 + 4 >> 2] | 0;
        i178 = HEAP32[i170 + 8 >> 2] | 0;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i173 >> 2] | 0) + 12 >> 2] & 7](i8, i173);
        if ((HEAP32[i133 >> 2] | 0) < 1) {
         i162 = 92;
         break;
        }
        i173 = HEAP32[i134 >> 2] | 0;
        if ((i173 | 0) < 1) {
         i162 = 92;
         break;
        }
        i180 = HEAP32[i135 >> 2] | 0;
        if ((i177 | 0) < (i180 + i173 | 0)) {
         if ((i178 + i177 | 0) <= (i180 | 0)) {
          i162 = 88;
         }
        } else {
         i162 = 88;
        }
        if ((i162 | 0) == 88) {
         i162 = 0;
         if (!((i178 | 0) == 0 & (i177 | 0) == (i180 | 0))) {
          i162 = 92;
          break;
         }
        }
        if ((HEAP32[i170 + 52 >> 2] | 0) == 0) {
         i162 = 92;
         break;
        }
        i180 = i170 + 36 | 0;
        if ((HEAP32[i180 >> 2] | 0) == 0) {
         break;
        }
        i177 = i170 + 28 | 0;
        i178 = 0;
        while (1) {
         i173 = HEAP32[i177 >> 2] | 0;
         i186 = HEAP32[i173 + (i178 * 24 & -1) >> 2] | 0;
         i187 = HEAP32[i173 + (i178 * 24 & -1) + 4 >> 2] | 0;
         i188 = HEAP32[i173 + (i178 * 24 & -1) + 8 >> 2] | 0;
         i189 = HEAP32[i173 + (i178 * 24 & -1) + 16 >> 2] | 0;
         i190 = HEAP32[i173 + (i178 * 24 & -1) + 20 >> 2] | 0;
         HEAP32[i136 >> 2] = HEAP32[i173 + (i178 * 24 & -1) + 12 >> 2];
         HEAP32[i137 >> 2] = i189;
         HEAP32[i138 >> 2] = -1;
         HEAP32[i139 >> 2] = i190;
         if ((i178 | 0) != 0) {
          i173 = __Znwj(24) | 0;
          i191 = i173;
          __ZN7WebCore7BidiRunC1EiiRNS_12RenderObjectEPNS_11BidiContextE14UCharDirection(i191, i188, i188, i187, HEAP32[i97 >> 2] | 0, HEAP32[i141 >> 2] | 0);
          HEAP8[i173] = HEAP8[i173] | 4;
          if ((HEAP32[i99 >> 2] | 0) == 0) {
           HEAP32[i99 >> 2] = i191;
          } else {
           HEAP32[(HEAP32[i88 >> 2] | 0) + 4 >> 2] = i173;
          }
          HEAP32[i88 >> 2] = i191;
          HEAP32[i87 >> 2] = (HEAP32[i87 >> 2] | 0) + 1;
          HEAP8[i38] = 0;
         }
         if (!((i188 | 0) == (i190 | 0) & (i187 | 0) == (i189 | 0))) {
          L134 : do {
           if ((i187 | 0) == 0) {
            i192 = 0;
           } else {
            i189 = i186 | 0;
            i190 = i187;
            i191 = 0;
            while (1) {
             if ((i190 | 0) == (i189 | 0)) {
              i192 = i191;
              break L134;
             }
             do {
              if ((HEAP32[i190 + 20 >> 2] & 768 | 0) == 256) {
               i193 = 0;
              } else {
               if ((HEAP32[i190 + 24 >> 2] & 4 | 0) == 0) {
                i193 = 0;
                break;
               }
               i193 = (((HEAP32[(HEAP32[i190 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 28 & 7) - 3 | 0) >>> 0 < 3 >>> 0 | 0;
              }
             } while (0);
             i173 = i193 + i191 | 0;
             i194 = HEAP32[i190 + 8 >> 2] | 0;
             if ((i194 | 0) == 0) {
              i192 = i173;
              break;
             } else {
              i190 = i194 | 0;
              i191 = i173;
             }
            }
           }
          } while (0);
          HEAP32[i140 >> 2] = i186;
          HEAP32[i85 >> 2] = i187;
          HEAP32[i80 >> 2] = -1;
          HEAP32[i86 >> 2] = i188;
          HEAP32[i89 >> 2] = i192;
          __ZN7WebCoreL27constructBidiRunsForSegmentERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERNS_11BidiRunListIS2_EERKS1_NS_23VisualDirectionOverrideEb(i3, i96, i9, i169, i172);
         }
         i178 = i178 + 1 | 0;
         if (i178 >>> 0 >= (HEAP32[i180 >> 2] | 0) >>> 0) {
          break;
         }
        }
       }
      } while (0);
      if ((i162 | 0) == 92) {
       i162 = 0;
       __ZN7WebCoreL27constructBidiRunsForSegmentERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERNS_11BidiRunListIS2_EERKS1_NS_23VisualDirectionOverrideEb(i3, i96, i47, i169, i172);
      }
      if ((HEAP8[i56] & 1) == 0) {
       i195 = __ZN7WebCore15RenderBlockFlow20handleTrailingSpacesERNS_11BidiRunListINS_7BidiRunEEEPNS_11BidiContextE(i1, i96, HEAP32[i97 >> 2] | 0) | 0;
      } else {
       i195 = 0;
      }
      do {
       if ((HEAP32[i87 >> 2] | 0) == 0) {
        i196 = 0;
       } else {
        if ((HEAP8[i131] & 1) == 0) {
         i196 = 0;
         break;
        }
        i170 = HEAP32[i132 >> 2] | 0;
        HEAP8[i170] = HEAP8[i170] | 2;
        i196 = i161 + 1 | 0;
       }
      } while (0);
      i172 = (HEAP32[(HEAP32[i67 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
      if ((i172 | 0) == 3 | (i172 | 0) == 0) {
       i197 = i128;
      } else {
       i197 = i98;
      }
      i172 = HEAP32[i197 >> 2] | 0;
      i170 = __ZN7WebCore15RenderBlockFlow27createLineBoxesFromBidiRunsERNS_11BidiRunListINS_7BidiRunEEERKNS_14InlineIteratorERNS_8LineInfoERNS_21VerticalPositionCacheEPS2_RN3WTF6VectorINS_15WordMeasurementELj64ENSD_15CrashOnOverflowEEE(i1, i96, i47, i39, i49, i195, i57) | 0;
      i180 = HEAP32[i99 >> 2] | 0;
      if ((i180 | 0) != 0) {
       i178 = i180;
       while (1) {
        i180 = HEAP32[i178 + 4 >> 2] | 0;
        __ZN7WebCore7BidiRunD1Ev(i178);
        __ZdlPv(i178 | 0);
        if ((i180 | 0) == 0) {
         break;
        } else {
         i178 = i180;
        }
       }
       HEAP32[i99 >> 2] = 0;
       HEAP32[i88 >> 2] = 0;
       HEAP32[i87 >> 2] = 0;
      }
      HEAP8[i83] = 1;
      if ((i170 | 0) == 0) {
       i198 = i196;
       break;
      }
      __ZN7WebCore13RootInlineBox16setLineBreakInfoEPNS_12RenderObjectEjRKNS_10BidiStatusE(i170, HEAP32[i92 >> 2] | 0, HEAP32[i100 >> 2] | 0, i101);
      if ((HEAP8[i78] & 8) != 0) {
       HEAP32[i130 >> 2] = 0;
       __ZN7WebCore15LineLayoutState25updateRepaintRangeFromBoxEPNS_13RootInlineBoxENS_10LayoutUnitE(i2, i170, i60);
      }
      if (!i70) {
       i198 = i196;
       break;
      }
      HEAP32[i102 >> 2] = 0;
      __ZN7WebCore15RenderBlockFlow31adjustLinePositionForPaginationEPNS_13RootInlineBoxERNS_10LayoutUnitEPNS_16RenderFlowThreadE(i1, i170, i61, HEAP32[i103 >> 2] | 0);
      do {
       if ((HEAP32[i102 >> 2] | 0) != 0) {
        i178 = (HEAP8[i37] & 1) != 0;
        HEAP32[i105 >> 2] = i172;
        i180 = __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i77, i22) | 0;
        __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i14, i77, i180);
        i177 = HEAP32[i106 >> 2] | 0;
        i165 = HEAP32[(HEAP32[i107 >> 2] | 0) + 1068 >> 2] | 0;
        HEAP32[i108 >> 2] = i172;
        HEAP32[i109 >> 2] = i177;
        HEAP32[i110 >> 2] = 0;
        FUNCTION_TABLE_viiiii[i165 & 3](i10, i77, i11, i12, i13);
        __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i20, i77, i10, i178);
        __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i19, i77, i180);
        i180 = HEAP32[i111 >> 2] | 0;
        i165 = HEAP32[(HEAP32[i107 >> 2] | 0) + 1072 >> 2] | 0;
        HEAP32[i112 >> 2] = i172;
        HEAP32[i113 >> 2] = i180;
        HEAP32[i114 >> 2] = 0;
        FUNCTION_TABLE_viiiii[i165 & 3](i15, i77, i16, i17, i18);
        __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i21, i77, i15, i178);
        i178 = (HEAP32[i115 >> 2] | 0) - (HEAP32[i116 >> 2] | 0) | 0;
        i165 = i170 | 0;
        d199 = +(HEAP32[i102 >> 2] | 0);
        i180 = HEAP32[(HEAP32[i170 >> 2] | 0) + 24 >> 2] | 0;
        if ((HEAP32[i170 + 32 >> 2] & 2048 | 0) == 0) {
         FUNCTION_TABLE_viff[i180 & 3](i165, d199, +0);
        } else {
         FUNCTION_TABLE_viff[i180 & 3](i165, +0, d199);
        }
        if ((HEAP8[i78] & 8) != 0) {
         HEAP32[i129 >> 2] = 0;
         __ZN7WebCore15LineLayoutState25updateRepaintRangeFromBoxEPNS_13RootInlineBoxENS_10LayoutUnitE(i2, i170, i62);
        }
        i165 = (HEAP32[i102 >> 2] | 0) + i172 | 0;
        i180 = (HEAP8[i37] & 1) != 0;
        HEAP32[i117 >> 2] = i165;
        i177 = __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i77, i35) | 0;
        __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i27, i77, i177);
        i164 = HEAP32[i118 >> 2] | 0;
        i191 = HEAP32[(HEAP32[i107 >> 2] | 0) + 1068 >> 2] | 0;
        HEAP32[i119 >> 2] = i165;
        HEAP32[i120 >> 2] = i164;
        HEAP32[i121 >> 2] = 0;
        FUNCTION_TABLE_viiiii[i191 & 3](i23, i77, i24, i25, i26);
        __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i33, i77, i23, i180);
        __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i32, i77, i177);
        i177 = HEAP32[i122 >> 2] | 0;
        i191 = HEAP32[(HEAP32[i107 >> 2] | 0) + 1072 >> 2] | 0;
        HEAP32[i123 >> 2] = i165;
        HEAP32[i124 >> 2] = i177;
        HEAP32[i125 >> 2] = 0;
        FUNCTION_TABLE_viiiii[i191 & 3](i28, i77, i29, i30, i31);
        __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i34, i77, i28, i180);
        i180 = (HEAP32[i126 >> 2] | 0) - (HEAP32[i127 >> 2] | 0) | 0;
        if ((((i180 | 0) > 0 ? i180 : 0) | 0) == (((i178 | 0) > 0 ? i178 : 0) | 0)) {
         i178 = HEAP32[i170 + 84 >> 2] | 0;
         i180 = (HEAP32[(HEAP32[i67 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
         if ((i180 | 0) == 3 | (i180 | 0) == 0) {
          HEAP32[i128 >> 2] = i178;
          break;
         } else {
          HEAP32[i98 >> 2] = i178;
          break;
         }
        }
        __ZN7WebCore13InlineFlowBox10deleteLineEv(i170 | 0);
        i178 = (HEAP32[i102 >> 2] | 0) + i172 | 0;
        __ZN7WebCore15RenderBlockFlow26removeFloatingObjectsBelowEPNS_14FloatingObjectEi(i1, i163, i172);
        i180 = (HEAP32[(HEAP32[i67 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
        if ((i180 | 0) == 3 | (i180 | 0) == 0) {
         HEAP32[i128 >> 2] = i178;
        } else {
         HEAP32[i98 >> 2] = i178;
        }
        HEAP32[i71 >> 2] = HEAP32[i90 >> 2];
        HEAP32[i71 + 4 >> 2] = HEAP32[i90 + 4 >> 2];
        HEAP32[i71 + 8 >> 2] = HEAP32[i90 + 8 >> 2];
        HEAP32[i71 + 12 >> 2] = HEAP32[i90 + 12 >> 2];
        HEAP32[i69 >> 2] = HEAP32[i90 >> 2];
        HEAP32[i69 + 4 >> 2] = HEAP32[i90 + 4 >> 2];
        HEAP32[i69 + 8 >> 2] = HEAP32[i90 + 8 >> 2];
        HEAP32[i69 + 12 >> 2] = HEAP32[i90 + 12 >> 2];
        i166 = i196;
        i167 = i6;
        i168 = 0;
        break L40;
       }
      } while (0);
      if ((HEAP32[i103 >> 2] | 0) == 0) {
       i198 = i196;
       break;
      }
      HEAP32[i104 >> 2] = HEAP32[i170 + 80 >> 2];
      __ZN7WebCore13RootInlineBox19setContainingRegionEPNS_12RenderRegionE(i170, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i77, i36) | 0);
      i172 = HEAP32[i170 + 48 >> 2] | 0;
      if ((i172 | 0) == 0) {
       i198 = i196;
       break;
      }
      i178 = __ZNK7WebCore13RootInlineBox16containingRegionEv(i170) | 0;
      if ((i178 | 0) == (__ZNK7WebCore13RootInlineBox16containingRegionEv(i172) | 0)) {
       i198 = i196;
       break;
      }
      i172 = i170 + 56 | 0;
      HEAP32[i172 >> 2] = HEAP32[i172 >> 2] | 8388608;
      i198 = i196;
     } else {
      i172 = HEAP32[i152 >> 2] | 0;
      if ((i172 | 0) == 0) {
       i198 = i161;
       break;
      }
      __ZN7WebCore13RootInlineBox16setLineBreakInfoEPNS_12RenderObjectEjRKNS_10BidiStatusE(i172, HEAP32[i92 >> 2] | 0, HEAP32[i100 >> 2] | 0, i101);
      i198 = i161;
     }
    } while (0);
    if ((HEAP32[i75 >> 2] | 0) != 0) {
     i172 = 0;
     while (1) {
      i178 = HEAP32[(HEAP32[i73 >> 2] | 0) + (i172 << 2) >> 2] | 0;
      i180 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i178 | 0, 0, 0) | 0;
      i191 = (HEAP32[(HEAP32[i67 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
      if ((i191 | 0) == 3 | (i191 | 0) == 0) {
       i200 = i128;
      } else {
       i200 = i98;
      }
      i191 = HEAP32[i200 >> 2] | 0;
      if ((HEAP32[i180 + 24 >> 2] & 4 | 0) != 0) {
       i177 = i180 + 40 | 0;
       i180 = HEAP32[i177 >> 2] | 0;
       HEAP32[i159 >> 2] = i191;
       __ZN7WebCore15RenderBlockFlow25startAlignedOffsetForLineENS_10LayoutUnitEb(i44, i1, i45, 0);
       HEAP32[i180 + 164 >> 2] = HEAP32[i160 >> 2];
       HEAP32[(HEAP32[i177 >> 2] | 0) + 168 >> 2] = i191;
      }
      HEAP32[i158 >> 2] = i191;
      __ZN7WebCore15RenderBlockFlow34updateStaticInlinePositionForChildERNS_9RenderBoxENS_10LayoutUnitE(i1, i178, i46);
      HEAP32[(HEAP32[i178 + 40 >> 2] | 0) + 168 >> 2] = i191;
      i172 = i172 + 1 | 0;
      if (i172 >>> 0 >= (HEAP32[i75 >> 2] | 0) >>> 0) {
       break;
      }
     }
    }
    if ((HEAP8[i94] & 1) == 0) {
     HEAP8[i37] = 0;
     __ZN7WebCore15RenderBlockFlow7newLineENS_6EClearE(i1, HEAP32[i150 >> 2] | 0);
    }
    i172 = HEAP32[i41 >> 2] | 0;
    do {
     if ((i172 | 0) == 0) {
      i201 = i6;
     } else {
      if ((HEAP32[i152 >> 2] | 0) == 0) {
       i201 = i6;
       break;
      }
      i191 = HEAP32[i153 >> 2] | 0;
      if ((i191 | 0) == 0) {
       i202 = HEAP32[i172 + 20 >> 2] | 0;
      } else {
       __ZNK3WTF11ListHashSetINSt3__110unique_ptrIN7WebCore14FloatingObjectENS1_14default_deleteIS4_EEEELj4ENS3_27FloatingObjectHashFunctionsEE4findIRS4_NS3_28FloatingObjectHashTranslatorEEENS_24ListHashSetConstIteratorIS7_Lj4ES8_EERKT_(i64, i172 | 0, i191);
       HEAP32[i154 >> 2] = HEAP32[(HEAP32[i154 >> 2] | 0) + 8 >> 2];
       i202 = HEAP32[i63 + 4 >> 2] | 0;
      }
      if ((i202 | 0) == 0) {
       i203 = i6;
      } else {
       i191 = i202;
       i178 = i6;
       while (1) {
        i177 = HEAP32[i191 >> 2] | 0;
        HEAP32[i177 + 4 >> 2] = HEAP32[i152 >> 2];
        __ZN7WebCore13RootInlineBox11appendFloatERNS_9RenderBoxE(HEAP32[i152 >> 2] | 0, HEAP32[i177 >> 2] | 0);
        i180 = HEAP32[i155 >> 2] | 0;
        if ((HEAP32[i156 >> 2] | 0) >>> 0 <= i180 >>> 0) {
         i162 = 154;
         break L31;
        }
        i165 = HEAP32[i157 >> 2] | 0;
        i164 = i165 + (i180 * 24 & -1) + 4 | 0;
        i190 = i177 + 8 | 0;
        do {
         if ((HEAP32[i164 >> 2] | 0) != (HEAP32[i190 >> 2] | 0) | (HEAP32[i164 + 4 >> 2] | 0) != (HEAP32[i190 + 4 >> 2] | 0)) {
          i204 = 0;
         } else {
          i189 = i165 + (i180 * 24 & -1) + 12 | 0;
          i176 = i177 + 16 | 0;
          if ((HEAP32[i189 >> 2] | 0) != (HEAP32[i176 >> 2] | 0)) {
           i204 = 0;
           break;
          }
          i204 = (HEAP32[i189 + 4 >> 2] | 0) == (HEAP32[i176 + 4 >> 2] | 0);
         }
        } while (0);
        i177 = i178 & i204;
        HEAP32[i155 >> 2] = i180 + 1;
        i165 = HEAP32[i191 + 8 >> 2] | 0;
        if ((i165 | 0) == 0) {
         i203 = i177;
         break;
        } else {
         i191 = i165;
         i178 = i177;
        }
       }
      }
      if ((HEAP32[i172 + 12 >> 2] | 0) == 0) {
       i205 = 0;
      } else {
       i205 = HEAP32[HEAP32[i172 + 24 >> 2] >> 2] | 0;
      }
      HEAP32[i153 >> 2] = i205;
      i201 = i203;
     }
    } while (0);
    HEAP32[i79 >> 2] = 0;
    HEAP32[i91 >> 2] = 0;
    HEAP8[i38] = 0;
    i172 = HEAP32[i92 >> 2] | 0;
    L226 : do {
     if ((i172 | 0) == 0) {
      i206 = 0;
     } else {
      i178 = HEAP32[i151 >> 2] | 0;
      i191 = i172;
      i170 = 0;
      while (1) {
       if ((i191 | 0) == (i178 | 0)) {
        i206 = i170;
        break L226;
       }
       do {
        if ((HEAP32[i191 + 20 >> 2] & 768 | 0) == 256) {
         i207 = 0;
        } else {
         if ((HEAP32[i191 + 24 >> 2] & 4 | 0) == 0) {
          i207 = 0;
          break;
         }
         i207 = (((HEAP32[(HEAP32[i191 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 28 & 7) - 3 | 0) >>> 0 < 3 >>> 0 | 0;
        }
       } while (0);
       i180 = i207 + i170 | 0;
       i177 = HEAP32[i191 + 8 >> 2] | 0;
       if ((i177 | 0) == 0) {
        i206 = i180;
        break;
       } else {
        i191 = i177 | 0;
        i170 = i180;
       }
      }
     }
    } while (0);
    HEAP32[i71 >> 2] = HEAP32[i69 >> 2];
    HEAP32[i71 + 4 >> 2] = HEAP32[i69 + 4 >> 2];
    HEAP32[i71 + 8 >> 2] = HEAP32[i69 + 8 >> 2];
    HEAP32[i71 + 12 >> 2] = HEAP32[i69 + 12 >> 2];
    HEAP32[i89 >> 2] = i206;
    i166 = i198;
    i167 = i201;
    i168 = 0;
   }
  } while (0);
  i72 = HEAP32[i54 >> 2] | 0;
  if ((i72 | 0) != 0) {
   i172 = HEAP32[i81 >> 2] | 0;
   i170 = i172 + (i72 * 36 & -1) | 0;
   i72 = i172;
   while (1) {
    i172 = HEAP32[i72 + 16 >> 2] | 0;
    if ((i172 | 0) != 0) {
     __ZN3WTF8fastFreeEPv(i172);
    }
    i72 = i72 + 36 | 0;
    if ((i72 | 0) == (i170 | 0)) {
     break;
    }
   }
   HEAP32[i54 >> 2] = 0;
  }
  i170 = HEAP32[i81 >> 2] | 0;
  if (!((i43 | 0) == (i170 | 0) | (i170 | 0) == 0)) {
   HEAP32[i81 >> 2] = 0;
   HEAP32[i51 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i170);
  }
  if (i168) {
   break;
  } else {
   i161 = i166;
   i6 = i167;
  }
 }
 if ((i162 | 0) == 27) {
  HEAP32[i85 >> 2] = 0;
  HEAP32[i80 >> 2] = -1;
  HEAP32[i86 >> 2] = 0;
  HEAP32[i89 >> 2] = 0;
 } else if ((i162 | 0) == 154) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 do {
  if (i70) {
   i89 = HEAP32[(HEAP32[i67 >> 2] | 0) + 24 >> 2] | 0;
   i86 = HEAP32[i89 + 88 >> 2] | 0;
   if ((i86 & 1 | 0) != 0) {
    i162 = 198;
    break;
   }
   i80 = HEAP32[i1 + 100 >> 2] | 0;
   if ((i80 | 0) != 0) {
    if ((HEAP8[i80 + 32 | 0] & 4) != 0) {
     i162 = 198;
     break;
    }
   }
   i80 = HEAP32[i1 + 104 >> 2] | 0;
   i85 = HEAP32[i152 >> 2] | 0;
   i167 = (i85 | 0) != 0;
   i6 = (i85 | 0) == (i80 | 0);
   L259 : do {
    if (i6 | i167 ^ 1) {
     i208 = 1;
     i209 = i85;
     i210 = i167;
     i211 = i6;
    } else {
     i166 = 1;
     i161 = i85;
     i168 = i167;
     while (1) {
      if ((HEAP32[i161 + 56 >> 2] & 8388608 | 0) != 0) {
       i208 = i166;
       i209 = i161;
       i210 = i168;
       i211 = 0;
       break L259;
      }
      i51 = i166 + 1 | 0;
      i81 = HEAP32[i161 + 48 >> 2] | 0;
      i43 = (i81 | 0) != 0;
      i54 = (i81 | 0) == (i80 | 0);
      if (i54 | i43 ^ 1) {
       i208 = i51;
       i209 = i81;
       i210 = i43;
       i211 = i54;
       break;
      } else {
       i166 = i51;
       i161 = i81;
       i168 = i43;
      }
     }
    }
   } while (0);
   if (!i210) {
    break;
   }
   if ((HEAP32[i209 + 56 >> 2] & 8388608 | 0) == 0 | i211) {
    break;
   }
   i167 = HEAP16[i89 + 84 >> 1] | 0;
   if ((i208 | 0) >= (i167 | 0)) {
    i162 = 198;
    break;
   }
   i85 = i167 - i208 | 0;
   i167 = 1;
   i6 = i209;
   while (1) {
    i168 = HEAP32[i6 + 48 >> 2] | 0;
    if ((i168 | 0) == 0 | (i168 | 0) == (i80 | 0)) {
     break;
    }
    if ((HEAP32[i168 + 56 >> 2] & 8388608 | 0) == 0) {
     i167 = i167 + 1 | 0;
     i6 = i168;
    } else {
     break;
    }
   }
   if ((i86 & 2 | 0) == 0) {
    i212 = HEAP16[i89 + 86 >> 1] | 0;
   } else {
    i212 = 2;
   }
   i6 = i167 - i212 | 0;
   if ((i6 | 0) < 1) {
    break;
   }
   i80 = (i85 | 0) < (i6 | 0) ? i85 : i6;
   if ((i80 | 0) > 0) {
    i6 = i209;
    i168 = 0;
    while (1) {
     i161 = HEAP32[i6 + 48 >> 2] | 0;
     i166 = i168 + 1 | 0;
     if ((i166 | 0) < (i80 | 0)) {
      i6 = i161;
      i168 = i166;
     } else {
      i213 = i161;
      break;
     }
    }
   } else {
    i213 = i209;
   }
   i168 = i213;
   __ZN7WebCore15RenderBlockFlow26setBreakAtLineToAvoidWidowEi(i1, __ZNK7WebCore15RenderBlockFlow9lineCountEPKNS_13RootInlineBoxEPb(i1, i168, 0) | 0);
   HEAP32[i65 >> 2] = HEAP32[(HEAP32[i152 >> 2] | 0) + 84 >> 2];
   HEAP32[i66 >> 2] = HEAP32[i213 + 84 >> 2];
   __ZN7WebCore15RenderBlockFlow26markLinesDirtyInBlockRangeENS_10LayoutUnitES1_PNS_13RootInlineBoxE(i1, i65, i66, i168);
   i162 = 198;
  } else {
   i162 = 198;
  }
 } while (0);
 if ((i162 | 0) == 198) {
  __ZN7WebCore15RenderBlockFlow31clearDidBreakAtLineToAvoidWidowEv(i1);
 }
 if ((HEAP32[i75 >> 2] | 0) != 0) {
  HEAP32[i75 >> 2] = 0;
 }
 i75 = HEAP32[i73 >> 2] | 0;
 if ((i75 | 0) != 0) {
  HEAP32[i73 >> 2] = 0;
  HEAP32[i74 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i75);
 }
 i75 = HEAP32[i49 + 20 >> 2] | 0;
 if ((i75 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i75);
 }
 i75 = HEAP32[i49 >> 2] | 0;
 if ((i75 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i75);
 }
 i75 = HEAP32[i48 + 16 >> 2] | 0;
 if ((i75 | 0) != 0) {
  __ZN7WebCore24releaseLineBreakIteratorEPNS_17TextBreakIteratorE(i75);
 }
 i75 = HEAP32[i48 + 12 >> 2] | 0;
 do {
  if ((i75 | 0) != 0) {
   i49 = i75 | 0;
   i74 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
   if ((i74 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i75);
    break;
   } else {
    HEAP32[i49 >> 2] = i74;
    break;
   }
  }
 } while (0);
 i75 = HEAP32[i48 + 8 >> 2] | 0;
 if ((i75 | 0) == 0) {
  i214 = i48 + 4 | 0;
  i215 = HEAP32[i214 >> 2] | 0;
  __ZN3WTF14deleteOwnedPtrIN7WebCore10TextLayoutEEEvPT_(i215);
  STACKTOP = i7;
  return;
 }
 i74 = i75 | 0;
 i49 = (HEAP32[i74 >> 2] | 0) - 2 | 0;
 if ((i49 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i75);
  i214 = i48 + 4 | 0;
  i215 = HEAP32[i214 >> 2] | 0;
  __ZN3WTF14deleteOwnedPtrIN7WebCore10TextLayoutEEEvPT_(i215);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i74 >> 2] = i49;
  i214 = i48 + 4 | 0;
  i215 = HEAP32[i214 >> 2] | 0;
  __ZN3WTF14deleteOwnedPtrIN7WebCore10TextLayoutEEEvPT_(i215);
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore15RenderBlockFlow41computeInlineDirectionPositionsForSegmentEPNS_13RootInlineBoxERKNS_8LineInfoENS_10ETextAlignERfS7_PNS_7BidiRunES9_RN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINSA_6VectorIPKNS_14SimpleFontDataELj0ENSA_15CrashOnOverflowEEENS_13GlyphOverflowEEENSA_7PtrHashISE_EENSA_10HashTraitsISE_EENSR_ISO_EEEERNS_21VerticalPositionCacheERNSH_INS_15WordMeasurementELj64ESL_EE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, d106 = +0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, d117 = +0, d118 = +0, i119 = 0, d120 = +0, i121 = 0, i122 = 0, d123 = +0, i124 = 0, d125 = +0, i126 = 0, i127 = 0, i128 = 0, d129 = +0, i130 = 0, d131 = +0, i132 = 0, i133 = 0, i134 = 0, d135 = +0, i136 = 0, i137 = 0, i138 = 0, i139 = 0, d140 = +0, i141 = 0, i142 = 0, i143 = 0, i144 = 0, i145 = 0, i146 = 0, i147 = 0, i148 = 0, i149 = 0, i150 = 0, d151 = +0, i152 = 0, i153 = 0, d154 = +0, d155 = +0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 432 | 0;
 i13 = i12 | 0;
 i14 = i12 + 40 | 0;
 i15 = i12 + 64 | 0;
 i16 = i12 + 88 | 0;
 i17 = i12 + 96 | 0;
 i18 = i12 + 120 | 0;
 i19 = i12 + 136 | 0;
 i20 = i12 + 152 | 0;
 i21 = i12 + 160 | 0;
 i22 = i12 + 216 | 0;
 i23 = i12 + 232 | 0;
 i24 = i12 + 240 | 0;
 i25 = i12 + 296 | 0;
 i26 = i12 + 304 | 0;
 i27 = i12 + 312 | 0;
 i28 = i12 + 320 | 0;
 i29 = i12 + 328 | 0;
 i30 = i12 + 408 | 0;
 i31 = i12 + 416 | 0;
 i32 = i12 + 424 | 0;
 HEAP32[i25 >> 2] = i4;
 __ZN7WebCore13InlineFlowBox26getFlowSpacingLogicalWidthEv(i27, i2 | 0);
 HEAPF32[i26 >> 2] = +(HEAP32[i27 >> 2] | 0);
 HEAP8[i28] = 1;
 i27 = i29 + 12 | 0;
 i4 = i29 | 0;
 HEAP32[i4 >> 2] = i27;
 i33 = i29 + 4 | 0;
 HEAP32[i33 >> 2] = 16;
 i34 = i29 + 8 | 0;
 HEAP32[i34 >> 2] = 0;
 i29 = (i7 | 0) == 0;
 L1 : do {
  if (i29) {
   i35 = 0;
   i36 = 0;
  } else {
   i37 = i14;
   i38 = i15;
   i39 = i17;
   i40 = i21;
   i41 = i12 + 192 | 0;
   i42 = i24;
   i43 = i12 + 272 | 0;
   i44 = i3 | 0;
   i45 = i16 | 0;
   i46 = i15 + 16 | 0;
   i47 = i14 + 12 | 0;
   i48 = i15 + 8 | 0;
   i49 = i15 + 12 | 0;
   i50 = i15 | 0;
   i51 = i15 + 4 | 0;
   i52 = i14 | 0;
   i53 = i24 | 0;
   i54 = i24 + 4 | 0;
   i55 = i24 + 8 | 0;
   i56 = i24 + 12 | 0;
   i57 = i9 | 0;
   i58 = i22;
   i59 = i21 | 0;
   i60 = i21 + 4 | 0;
   i61 = i21 + 8 | 0;
   i62 = i21 + 12 | 0;
   i63 = i19;
   i64 = i14 + 4 | 0;
   i65 = i11 + 8 | 0;
   i66 = i11 | 0;
   i67 = i14 | 0;
   i68 = i13 + 32 | 0;
   i69 = i30;
   i70 = i1 + 20 | 0;
   i71 = i1 + 36 | 0;
   i72 = i31 | 0;
   i73 = i32 | 0;
   i74 = i7;
   i75 = 0;
   i76 = 0;
   i77 = 0;
   L3 : while (1) {
    if ((HEAP8[i74 | 0] & 4) != 0) {
     i35 = i74;
     i36 = i76;
     break L1;
    }
    i78 = i74 + 20 | 0;
    i79 = HEAP32[i78 >> 2] | 0;
    do {
     if ((i79 | 0) == 0) {
      i80 = i77;
      i81 = i76;
      i82 = i75;
     } else {
      i83 = i74 + 16 | 0;
      if ((HEAP32[(HEAP32[i83 >> 2] | 0) + 20 >> 2] & 25165824 | 0) == 16777216) {
       i80 = i77;
       i81 = i76;
       i82 = i75;
       break;
      }
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i79 >> 2] | 0) + 20 >> 2] & 31](i79) | 0) {
       i80 = i77;
       i81 = i76;
       i82 = i75;
       break;
      }
      i84 = HEAP32[i83 >> 2] | 0;
      do {
       if ((HEAP32[i84 + 20 >> 2] & 768 | 0) == 256) {
        i85 = i84;
        if ((HEAP32[i25 >> 2] | 0) != 3 | (i74 | 0) == (i8 | 0)) {
         i86 = i76;
         i87 = i84 + 44 | 0;
        } else {
         if ((HEAP8[i28] & 1) == 0) {
          i88 = (HEAP32[i78 >> 2] | 0) + 32 | 0;
          HEAP32[i88 >> 2] = HEAP32[i88 >> 2] | 8192;
         }
         i88 = i84 + 44 | 0;
         i89 = HEAP32[i88 >> 2] | 0;
         if ((HEAP32[i89 + 16 >> 2] & 32 | 0) == 0) {
          i90 = HEAP32[i74 + 8 >> 2] | 0;
          i91 = __ZN7WebCore4Font25expansionOpportunityCountEPKtjNS_13TextDirectionERb((HEAP32[i89 + 8 >> 2] | 0) + (i90 << 1) | 0, (HEAP32[i74 + 12 >> 2] | 0) - i90 | 0, (HEAP32[(HEAP32[i78 >> 2] | 0) + 32 >> 2] | 0) >>> 2 & 1 ^ 1, i28) | 0;
         } else {
          i90 = HEAP32[i74 + 8 >> 2] | 0;
          i91 = __ZN7WebCore4Font25expansionOpportunityCountEPKhjNS_13TextDirectionERb((HEAP32[i89 + 8 >> 2] | 0) + i90 | 0, (HEAP32[i74 + 12 >> 2] | 0) - i90 | 0, (HEAP32[(HEAP32[i78 >> 2] | 0) + 32 >> 2] | 0) >>> 2 & 1 ^ 1, i28) | 0;
         }
         HEAP32[i30 >> 2] = i91;
         i90 = HEAP32[i34 >> 2] | 0;
         if ((i90 | 0) == (HEAP32[i33 >> 2] | 0)) {
          i89 = i90 + 1 | 0;
          i92 = HEAP32[i4 >> 2] | 0;
          do {
           if (i92 >>> 0 > i30 >>> 0) {
            i93 = 19;
           } else {
            if ((i92 + (i90 << 2) | 0) >>> 0 <= i30 >>> 0) {
             i93 = 19;
             break;
            }
            i94 = i69 - i92 >> 2;
            i95 = i89 + (i90 >>> 2) | 0;
            i96 = i95 >>> 0 > 16 >>> 0 ? i95 : 16;
            i95 = i96 >>> 0 > i89 >>> 0 ? i96 : i89;
            do {
             if (i90 >>> 0 < i95 >>> 0) {
              if (i95 >>> 0 > 16 >>> 0) {
               if (i95 >>> 0 > 1073741823 >>> 0) {
                i93 = 33;
                break L3;
               }
               i96 = __ZN3WTF18fastMallocGoodSizeEj(i95 << 2) | 0;
               HEAP32[i33 >> 2] = i96 >>> 2;
               i97 = __ZN3WTF10fastMallocEj(i96) | 0;
               HEAP32[i4 >> 2] = i97;
               i98 = i97;
              } else {
               HEAP32[i4 >> 2] = i27;
               HEAP32[i33 >> 2] = 16;
               i98 = i27;
              }
              i97 = i92;
              _memcpy(i98 | 0, i97 | 0, i90 << 2) | 0;
              if ((i27 | 0) == (i92 | 0) | (i92 | 0) == 0) {
               break;
              }
              if ((HEAP32[i4 >> 2] | 0) == (i92 | 0)) {
               HEAP32[i4 >> 2] = 0;
               HEAP32[i33 >> 2] = 0;
              }
              __ZN3WTF8fastFreeEPv(i97);
             }
            } while (0);
            i95 = HEAP32[i4 >> 2] | 0;
            i99 = i95 + (i94 << 2) | 0;
            i100 = i95;
           }
          } while (0);
          if ((i93 | 0) == 19) {
           i93 = 0;
           i95 = i89 + (i90 >>> 2) | 0;
           i97 = i95 >>> 0 > 16 >>> 0 ? i95 : 16;
           i95 = i97 >>> 0 > i89 >>> 0 ? i97 : i89;
           do {
            if (i90 >>> 0 < i95 >>> 0) {
             if (i95 >>> 0 > 16 >>> 0) {
              if (i95 >>> 0 > 1073741823 >>> 0) {
               i93 = 22;
               break L3;
              }
              i97 = __ZN3WTF18fastMallocGoodSizeEj(i95 << 2) | 0;
              HEAP32[i33 >> 2] = i97 >>> 2;
              i96 = __ZN3WTF10fastMallocEj(i97) | 0;
              HEAP32[i4 >> 2] = i96;
              i101 = i96;
             } else {
              HEAP32[i4 >> 2] = i27;
              HEAP32[i33 >> 2] = 16;
              i101 = i27;
             }
             i96 = i92;
             _memcpy(i101 | 0, i96 | 0, i90 << 2) | 0;
             if ((i27 | 0) == (i92 | 0) | (i92 | 0) == 0) {
              break;
             }
             if ((HEAP32[i4 >> 2] | 0) == (i92 | 0)) {
              HEAP32[i4 >> 2] = 0;
              HEAP32[i33 >> 2] = 0;
             }
             __ZN3WTF8fastFreeEPv(i96);
            }
           } while (0);
           i99 = i30;
           i100 = HEAP32[i4 >> 2] | 0;
          }
          HEAP32[i100 + (HEAP32[i34 >> 2] << 2) >> 2] = HEAP32[i99 >> 2];
          i102 = HEAP32[i34 >> 2] | 0;
         } else {
          HEAP32[(HEAP32[i4 >> 2] | 0) + (i90 << 2) >> 2] = i91;
          i102 = HEAP32[i34 >> 2] | 0;
         }
         HEAP32[i34 >> 2] = i102 + 1;
         i86 = (HEAP32[i30 >> 2] | 0) + i76 | 0;
         i87 = i88;
        }
        i92 = HEAP32[i87 >> 2] | 0;
        i95 = HEAP32[i92 + 4 >> 2] | 0;
        L57 : do {
         if ((i95 | 0) == 0) {
          i103 = i77;
         } else {
          do {
           if (!((HEAP32[i74 + 8 >> 2] | 0) != 0 | i77 ^ 1)) {
            if ((HEAP32[i92 + 16 >> 2] & 32 | 0) == 0) {
             i104 = HEAP16[HEAP32[i92 + 8 >> 2] >> 1] | 0;
            } else {
             i104 = HEAPU8[HEAP32[i92 + 8 >> 2] | 0] | 0;
            }
            if ((i104 & 65535) >>> 0 < 128 >>> 0) {
             if ((i104 & 65535) >>> 0 >= 33 >>> 0) {
              break;
             }
             if (!(i104 << 16 >> 16 == 32 | (i104 - 9 & 65535) >>> 0 < 5 >>> 0)) {
              break;
             }
            } else {
             if ((_u_charDirection(i104 & 65535) | 0) != 9) {
              break;
             }
            }
            i89 = HEAP32[i84 + 8 >> 2] | 0;
            do {
             if ((HEAP8[i44] & 1) == 0) {
              i105 = HEAP32[i89 + 36 >> 2] | 0;
             } else {
              if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i89 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
               i105 = HEAP32[i89 + 36 >> 2] | 0;
               break;
              } else {
               i105 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i89) | 0;
               break;
              }
             }
            } while (0);
            d106 = +HEAPF32[(__ZNK7WebCore11RenderStyle4fontEv(i105) | 0) + 32 >> 2];
            HEAPF32[i26 >> 2] = d106 + +HEAPF32[i26 >> 2];
           }
          } while (0);
          i94 = i74 + 12 | 0;
          i89 = HEAP32[i94 >> 2] | 0;
          i96 = i89 - 1 | 0;
          i97 = HEAP32[i87 >> 2] | 0;
          if ((HEAP32[i97 + 16 >> 2] & 32 | 0) == 0) {
           i107 = HEAP16[(HEAP32[i97 + 8 >> 2] | 0) + (i96 << 1) >> 1] | 0;
          } else {
           i107 = HEAPU8[(HEAP32[i97 + 8 >> 2] | 0) + i96 | 0] | 0;
          }
          do {
           if ((i107 & 65535) >>> 0 < 128 >>> 0) {
            if ((i107 & 65535) >>> 0 >= 33 >>> 0) {
             i108 = i89;
             break;
            }
            if (i107 << 16 >> 16 == 32 | (i107 - 9 & 65535) >>> 0 < 5 >>> 0) {
             i103 = 0;
             break L57;
            } else {
             i108 = i89;
            }
           } else {
            if ((_u_charDirection(i107 & 65535) | 0) == 9) {
             i103 = 0;
             break L57;
            }
            i108 = HEAP32[i94 >> 2] | 0;
           }
          } while (0);
          i103 = (i108 | 0) == (i95 | 0);
         }
        } while (0);
        d106 = +HEAPF32[i26 >> 2];
        _llvm_lifetime_start(20, 0, i41 | 0);
        _llvm_lifetime_start(20, 0, i43 | 0);
        _memset(i37 | 0, 0, 20) | 0;
        _memset(i38 | 0, 0, 17) | 0;
        i95 = i84 + 8 | 0;
        i92 = HEAP32[i95 >> 2] | 0;
        do {
         if ((HEAP8[i44] & 1) == 0) {
          i109 = HEAP32[i92 + 36 >> 2] | 0;
         } else {
          if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i92 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
           i109 = HEAP32[i92 + 36 >> 2] | 0;
           break;
          } else {
           i109 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i92) | 0;
           break;
          }
         }
        } while (0);
        i92 = __ZNK7WebCore11RenderStyle4fontEv(i109) | 0;
        do {
         if (__ZNK7WebCore13RootInlineBox12fitsToGlyphsEv(i2) | 0) {
          i88 = __ZNK7WebCore13RootInlineBox32includesRootLineBoxFontOrLeadingEv(i2) | 0;
          __ZN7WebCore13RootInlineBox22verticalPositionForBoxEPNS_9InlineBoxERNS_21VerticalPositionCacheE(i16, i2, HEAP32[i78 >> 2] | 0, i10);
          i90 = HEAP32[i45 >> 2] | 0;
          i94 = i92 + 24 | 0;
          if (i88) {
           i88 = HEAP32[i94 >> 2] | 0;
           i89 = i88 + 44 | 0;
           i96 = HEAP32[i89 >> 2] | 0;
           if ((i96 | 0) == 0) {
            i97 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i88, i92 | 0, 0) | 0;
            i88 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i97 >> 2] | 0) + 8 >> 2] & 3](i97, 32) | 0;
            HEAP32[i89 >> 2] = i88;
            i110 = i88;
           } else {
            i110 = i96;
           }
           i96 = _round(+(+HEAPF32[i110 + 20 >> 2])) | 0;
           i88 = HEAP32[i94 >> 2] | 0;
           i89 = i88 + 44 | 0;
           i97 = HEAP32[i89 >> 2] | 0;
           if ((i97 | 0) == 0) {
            i111 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i88, i92 | 0, 0) | 0;
            i88 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i111 >> 2] | 0) + 8 >> 2] & 3](i111, 32) | 0;
            HEAP32[i89 >> 2] = i88;
            i112 = i88;
           } else {
            i112 = i97;
           }
           i113 = _round(+(+HEAPF32[i112 + 16 >> 2])) | 0;
           i114 = i96;
          } else {
           i113 = 0;
           i114 = 0;
          }
          i96 = HEAP32[i94 >> 2] | 0;
          i97 = i96 + 44 | 0;
          i88 = HEAP32[i97 >> 2] | 0;
          if ((i88 | 0) == 0) {
           i89 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i96, i92 | 0, 0) | 0;
           i96 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i89 >> 2] | 0) + 8 >> 2] & 3](i89, 32) | 0;
           HEAP32[i97 >> 2] = i96;
           i115 = i96;
          } else {
           i115 = i88;
          }
          i88 = (_round(+(+HEAPF32[i115 + 16 >> 2])) | 0) - i90 | 0;
          i96 = HEAP32[i94 >> 2] | 0;
          i94 = i96 + 44 | 0;
          i97 = HEAP32[i94 >> 2] | 0;
          if ((i97 | 0) == 0) {
           i89 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i96, i92 | 0, 0) | 0;
           i96 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i89 >> 2] | 0) + 8 >> 2] & 3](i89, 32) | 0;
           HEAP32[i94 >> 2] = i96;
           i116 = i96;
          } else {
           i116 = i97;
          }
          i97 = _round(+(+HEAPF32[i116 + 20 >> 2])) | 0;
          if ((i88 | 0) <= (i114 | 0)) {
           if ((i97 + i90 | 0) <= (i113 | 0)) {
            break;
           }
          }
          HEAP8[i46] = 1;
         }
        } while (0);
        do {
         if ((HEAP32[(HEAP32[i78 >> 2] | 0) + 32 >> 2] & 32768 | 0) == 0) {
          d117 = +0;
         } else {
          i90 = HEAP32[(HEAP32[i95 >> 2] | 0) + 36 >> 2] | 0;
          __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontERKN3WTF6StringERKNS_11RenderStyleEjj(i13, i84, i92, __ZNK7WebCore11RenderStyle12hyphenStringEv(i90) | 0, i90, 1, 0);
          d118 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i92, i13, i14, 0);
          i90 = HEAP32[i68 >> 2] | 0;
          do {
           if ((i90 | 0) != 0) {
            i97 = i90 + 4 | 0;
            i88 = i97 | 0;
            i96 = (HEAP32[i88 >> 2] | 0) - 1 | 0;
            if ((i96 | 0) != 0) {
             HEAP32[i88 >> 2] = i96;
             break;
            }
            i96 = i97 - 4 | 0;
            if ((i96 | 0) == 0) {
             break;
            }
            FUNCTION_TABLE_vi[HEAP32[(HEAP32[i96 >> 2] | 0) + 4 >> 2] & 31](i96);
           }
          } while (0);
          if (d118 >= +2147483647) {
           d117 = +2147483648;
           break;
          }
          if (d118 <= +-2147483648) {
           d117 = +-2147483648;
           break;
          }
          d117 = +(~~d118 | 0);
         }
        } while (0);
        i90 = (HEAP32[i92 + 36 >> 2] & 256 | 0) != 0;
        i96 = HEAP8[i85 + 25 | 0] & 1;
        i97 = i74 + 8 | 0;
        do {
         if (__ZNK7WebCore13RootInlineBox12fitsToGlyphsEv(i2) | 0 | i96 << 24 >> 24 == 0) {
          i93 = 126;
         } else {
          i88 = HEAP32[i65 >> 2] | 0;
          if ((i88 | 0) == 0) {
           i93 = 126;
           break;
          }
          i94 = i74 + 12 | 0;
          i89 = i84;
          i111 = 0;
          i119 = HEAP32[i97 >> 2] | 0;
          d120 = +0;
          while (1) {
           i121 = HEAP32[i94 >> 2] | 0;
           if ((i119 | 0) >= (i121 | 0)) {
            i122 = i119;
            d123 = d120;
            break;
           }
           if ((HEAP32[i65 >> 2] | 0) >>> 0 <= i111 >>> 0) {
            i93 = 100;
            break L3;
           }
           i124 = HEAP32[i66 >> 2] | 0;
           d125 = +HEAPF32[i124 + (i111 * 36 & -1) + 4 >> 2];
           L136 : do {
            if (d125 > +0) {
             i126 = i124 + (i111 * 36 & -1) + 8 | 0;
             i127 = HEAP32[i126 >> 2] | 0;
             i128 = HEAP32[i124 + (i111 * 36 & -1) + 12 >> 2] | 0;
             if ((i127 | 0) == (i128 | 0)) {
              d129 = d120;
              i130 = i119;
              break;
             }
             if ((i127 | 0) != (i119 | 0) | (HEAP32[i124 + (i111 * 36 & -1) >> 2] | 0) != (i85 | 0) | (i128 | 0) > (i121 | 0)) {
              d129 = d120;
              i130 = i119;
              break;
             }
             do {
              if (i90 & (i128 | 0) == (i121 | 0)) {
               i127 = i121 - i119 | 0;
               _memset(i39 | 0, 0, 17) | 0;
               d131 = d120 + +FUNCTION_TABLE_fiiifiii[HEAP32[(HEAP32[i89 >> 2] | 0) + 636 >> 2] & 1](i85, HEAP32[i126 >> 2] | 0, i127, d106 + d120, (HEAP8[i44] & 1) != 0, i124 + (i111 * 36 & -1) + 16 | 0, i17);
               i132 = HEAP32[i126 >> 2] | 0;
               i133 = HEAP32[i87 >> 2] | 0;
               if ((HEAP32[i133 + 16 >> 2] & 32 | 0) == 0) {
                i134 = HEAP16[(HEAP32[i133 + 8 >> 2] | 0) + (i132 << 1) >> 1] | 0;
               } else {
                i134 = HEAPU8[(HEAP32[i133 + 8 >> 2] | 0) + i132 | 0] | 0;
               }
               if (!((i111 | 0) != 0 & (i127 | 0) == 1)) {
                d135 = d131;
                break;
               }
               if (!((i134 << 16 >> 16 | 0) == 32 | (i134 << 16 >> 16 | 0) == 9)) {
                d135 = d131;
                break;
               }
               d135 = d131 + +__ZNK7WebCore11RenderStyle11wordSpacingEv(HEAP32[(HEAP32[i95 >> 2] | 0) + 36 >> 2] | 0);
              } else {
               d135 = d120 + d125;
              }
             } while (0);
             if ((HEAP32[i124 + (i111 * 36 & -1) + 28 >> 2] | 0) == 0) {
              d129 = d135;
              i130 = i128;
              break;
             }
             i126 = HEAP32[i124 + (i111 * 36 & -1) + 16 >> 2] | 0;
             i127 = HEAP32[i124 + (i111 * 36 & -1) + 20 >> 2] | 0;
             i132 = i126 + (i127 << 2) | 0;
             L151 : do {
              if ((i127 | 0) == 0) {
               i136 = i126;
              } else {
               i133 = i126;
               while (1) {
                i137 = HEAP32[i133 >> 2] | 0;
                if (!((i137 | 0) == (-1 | 0) | (i137 | 0) == 0)) {
                 i136 = i133;
                 break L151;
                }
                i137 = i133 + 4 | 0;
                if ((i137 | 0) == (i132 | 0)) {
                 d129 = d135;
                 i130 = i128;
                 break L136;
                } else {
                 i133 = i137;
                }
               }
              }
             } while (0);
             if ((i136 | 0) == (i132 | 0)) {
              d129 = d135;
              i130 = i128;
              break;
             } else {
              i138 = i136;
             }
             while (1) {
              __ZN3WTF9HashTableIPKN7WebCore14SimpleFontDataES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i18, i67, i138, i138);
              i126 = i138 + 4 | 0;
              if ((i126 | 0) == (i132 | 0)) {
               d129 = d135;
               i130 = i128;
               break L136;
              } else {
               i139 = i126;
              }
              while (1) {
               i126 = HEAP32[i139 >> 2] | 0;
               if (!((i126 | 0) == (-1 | 0) | (i126 | 0) == 0)) {
                break;
               }
               i126 = i139 + 4 | 0;
               if ((i126 | 0) == (i132 | 0)) {
                d129 = d135;
                i130 = i128;
                break L136;
               } else {
                i139 = i126;
               }
              }
              if ((i139 | 0) == (i132 | 0)) {
               d129 = d135;
               i130 = i128;
               break;
              } else {
               i138 = i139;
              }
             }
            } else {
             d129 = d120;
             i130 = i119;
            }
           } while (0);
           i124 = i111 + 1 | 0;
           if (i124 >>> 0 < i88 >>> 0) {
            i111 = i124;
            i119 = i130;
            d120 = d129;
           } else {
            i122 = i130;
            d123 = d129;
            break;
           }
          }
          if (d123 == +0) {
           i93 = 126;
           break;
          }
          if ((i122 | 0) == (HEAP32[i94 >> 2] | 0)) {
           d140 = d123;
           break;
          }
          i119 = HEAP32[i52 >> 2] | 0;
          if ((i119 | 0) == 0) {
           i93 = 126;
           break;
          }
          __ZN3WTF8fastFreeEPv(i119);
          _memset(i37 | 0, 0, 16) | 0;
          i93 = 126;
         }
        } while (0);
        if ((i93 | 0) == 126) {
         i93 = 0;
         i95 = HEAP32[i97 >> 2] | 0;
         d140 = +FUNCTION_TABLE_fiiifiii[HEAP32[(HEAP32[i84 >> 2] | 0) + 636 >> 2] & 1](i85, i95, (HEAP32[i74 + 12 >> 2] | 0) - i95 | 0, d106, (HEAP8[i44] & 1) != 0, i14, i15);
        }
        HEAPF32[(HEAP32[i78 >> 2] | 0) + 28 >> 2] = d117 + d140;
        L170 : do {
         if ((HEAP32[i47 >> 2] | 0) != 0) {
          HEAP32[i20 >> 2] = HEAP32[i78 >> 2];
          _memset(i41 | 0, 0, 17) | 0;
          _memset(i40 | 0, 0, 12) | 0;
          HEAP32[i62 >> 2] = HEAP32[i41 >> 2];
          HEAP32[i62 + 4 >> 2] = HEAP32[i41 + 4 >> 2];
          HEAP32[i62 + 8 >> 2] = HEAP32[i41 + 8 >> 2];
          HEAP32[i62 + 12 >> 2] = HEAP32[i41 + 12 >> 2];
          HEAP32[i62 + 16 >> 2] = HEAP32[i41 + 16 >> 2];
          __ZN3WTF9HashTableIPKN7WebCore13InlineTextBoxENS_12KeyValuePairIS4_NSt3__14pairINS_6VectorIPKNS1_14SimpleFontDataELj0ENS_15CrashOnOverflowEEENS1_13GlyphOverflowEEEEENS_24KeyValuePairKeyExtractorISG_EENS_7PtrHashIS4_EENS_7HashMapIS4_SF_SK_NS_10HashTraitsIS4_EENSM_ISF_EEE18KeyValuePairTraitsESN_E3addINS_17HashMapTranslatorISQ_SK_EES4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SG_SI_SK_SQ_SN_EEEEOT0_OT1_(i19, i57, i20, i21);
          i95 = HEAP32[i63 >> 2] | 0;
          if ((HEAP32[i61 >> 2] | 0) != 0) {
           HEAP32[i61 >> 2] = 0;
          }
          i90 = HEAP32[i59 >> 2] | 0;
          if ((i90 | 0) != 0) {
           HEAP32[i59 >> 2] = 0;
           HEAP32[i60 >> 2] = 0;
           __ZN3WTF8fastFreeEPv(i90);
          }
          i90 = i95 + 4 | 0;
          i96 = HEAP32[i47 >> 2] | 0;
          i92 = i95 + 12 | 0;
          do {
           if ((HEAP32[i92 >> 2] | 0) >>> 0 < i96 >>> 0) {
            if ((HEAP32[i95 + 8 >> 2] | 0) >>> 0 >= i96 >>> 0) {
             break;
            }
            __ZN3WTF6VectorIPKN7WebCore14SimpleFontDataELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i90, i96);
           }
          } while (0);
          HEAP32[i92 >> 2] = i96;
          i95 = HEAP32[i52 >> 2] | 0;
          i94 = HEAP32[i64 >> 2] | 0;
          i119 = i95 + (i94 << 2) | 0;
          L182 : do {
           if ((HEAP32[i47 >> 2] | 0) != 0) {
            L184 : do {
             if ((i94 | 0) == 0) {
              i141 = i95;
             } else {
              i111 = i95;
              while (1) {
               i88 = HEAP32[i111 >> 2] | 0;
               if (!((i88 | 0) == (-1 | 0) | (i88 | 0) == 0)) {
                i141 = i111;
                break L184;
               }
               i111 = i111 + 4 | 0;
               if ((i111 | 0) == (i119 | 0)) {
                break L182;
               }
              }
             }
            } while (0);
            if ((i141 | 0) == (i119 | 0)) {
             break;
            }
            i111 = i90 | 0;
            if ((i96 | 0) == 0) {
             i93 = 192;
             break L3;
            }
            i88 = 0;
            i89 = i141;
            i124 = HEAP32[i141 >> 2] | 0;
            while (1) {
             HEAP32[(HEAP32[i111 >> 2] | 0) + (i88 << 2) >> 2] = i124;
             i121 = i89 + 4 | 0;
             if ((i121 | 0) == (i119 | 0)) {
              break L182;
             } else {
              i142 = i121;
             }
             while (1) {
              i143 = HEAP32[i142 >> 2] | 0;
              i121 = i143;
              if (!((i121 | 0) == (-1 | 0) | (i121 | 0) == 0)) {
               break;
              }
              i121 = i142 + 4 | 0;
              if ((i121 | 0) == (i119 | 0)) {
               break L182;
              } else {
               i142 = i121;
              }
             }
             if ((i142 | 0) == (i119 | 0)) {
              break L182;
             }
             i121 = i88 + 1 | 0;
             if ((HEAP32[i92 >> 2] | 0) >>> 0 > i121 >>> 0) {
              i88 = i121;
              i89 = i142;
              i124 = i143;
             } else {
              i93 = 193;
              break L3;
             }
            }
           }
          } while (0);
          i92 = HEAP32[(HEAP32[i78 >> 2] | 0) + 12 >> 2] | 0;
          i119 = i92;
          i96 = HEAP32[i92 + 56 >> 2] | 0;
          while (1) {
           HEAP32[i119 + 56 >> 2] = i96 & -17;
           i119 = HEAP32[i119 + 12 >> 2] | 0;
           if ((i119 | 0) == 0) {
            break L170;
           }
           i96 = HEAP32[i119 + 56 >> 2] | 0;
           if ((i96 & 16 | 0) == 0) {
            break;
           }
          }
         }
        } while (0);
        do {
         if ((HEAP32[i48 >> 2] | 0) == 0) {
          if ((HEAP32[i49 >> 2] | 0) != 0) {
           i93 = 155;
           break;
          }
          if ((HEAP32[i50 >> 2] | 0) != 0) {
           i93 = 155;
           break;
          }
          if ((HEAP32[i51 >> 2] | 0) != 0) {
           i93 = 155;
          }
         } else {
          i93 = 155;
         }
        } while (0);
        if ((i93 | 0) == 155) {
         i93 = 0;
         HEAP32[i23 >> 2] = HEAP32[i78 >> 2];
         _memset(i43 | 0, 0, 17) | 0;
         _memset(i42 | 0, 0, 12) | 0;
         HEAP32[i56 >> 2] = HEAP32[i43 >> 2];
         HEAP32[i56 + 4 >> 2] = HEAP32[i43 + 4 >> 2];
         HEAP32[i56 + 8 >> 2] = HEAP32[i43 + 8 >> 2];
         HEAP32[i56 + 12 >> 2] = HEAP32[i43 + 12 >> 2];
         HEAP32[i56 + 16 >> 2] = HEAP32[i43 + 16 >> 2];
         __ZN3WTF9HashTableIPKN7WebCore13InlineTextBoxENS_12KeyValuePairIS4_NSt3__14pairINS_6VectorIPKNS1_14SimpleFontDataELj0ENS_15CrashOnOverflowEEENS1_13GlyphOverflowEEEEENS_24KeyValuePairKeyExtractorISG_EENS_7PtrHashIS4_EENS_7HashMapIS4_SF_SK_NS_10HashTraitsIS4_EENSM_ISF_EEE18KeyValuePairTraitsESN_E3addINS_17HashMapTranslatorISQ_SK_EES4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SG_SI_SK_SQ_SN_EEEEOT0_OT1_(i22, i57, i23, i24);
         i85 = HEAP32[i58 >> 2] | 0;
         if ((HEAP32[i55 >> 2] | 0) != 0) {
          HEAP32[i55 >> 2] = 0;
         }
         i97 = HEAP32[i53 >> 2] | 0;
         if ((i97 | 0) != 0) {
          HEAP32[i53 >> 2] = 0;
          HEAP32[i54 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i97);
         }
         i97 = i85 + 16 | 0;
         HEAP32[i97 >> 2] = HEAP32[i38 >> 2];
         HEAP32[i97 + 4 >> 2] = HEAP32[i38 + 4 >> 2];
         HEAP32[i97 + 8 >> 2] = HEAP32[i38 + 8 >> 2];
         HEAP32[i97 + 12 >> 2] = HEAP32[i38 + 12 >> 2];
         HEAP8[i97 + 16 | 0] = HEAP8[i38 + 16 | 0] | 0;
         __ZN7WebCore9InlineBox26clearKnownToHaveNoOverflowEv(HEAP32[i78 >> 2] | 0);
        }
        i97 = HEAP32[i52 >> 2] | 0;
        if ((i97 | 0) == 0) {
         i144 = i103;
         i145 = i86;
         break;
        }
        __ZN3WTF8fastFreeEPv(i97);
        i144 = i103;
        i145 = i86;
       } else {
        HEAP8[i28] = 0;
        if ((HEAP32[i84 + 24 >> 2] & 4 | 0) != 0) {
         i144 = i77;
         i145 = i76;
         break;
        }
        if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i84 >> 2] | 0) + 168 >> 2] & 31](i84) | 0) {
         __ZN7WebCore15RenderBlockFlow20setMarginsForRubyRunEPNS_7BidiRunERNS_13RenderRubyRunEPNS_12RenderObjectERKNS_8LineInfoE(i1, i74, i84, i75, i3);
        }
        if ((HEAP32[i70 >> 2] & 8192 | 0) == 0) {
         i146 = i84 + 56 | 0;
        } else {
         i146 = i84 + 52 | 0;
        }
        HEAPF32[(HEAP32[i78 >> 2] | 0) + 28 >> 2] = +(HEAP32[i146 >> 2] | 0);
        i97 = i84;
        i85 = i84;
        FUNCTION_TABLE_viii[HEAP32[(HEAP32[i85 >> 2] | 0) + 792 >> 2] & 1](i31, i97, HEAP32[i71 >> 2] | 0);
        FUNCTION_TABLE_viii[HEAP32[(HEAP32[i85 >> 2] | 0) + 796 >> 2] & 1](i32, i97, HEAP32[i71 >> 2] | 0);
        HEAPF32[i26 >> 2] = +HEAPF32[i26 >> 2] + +((HEAP32[i73 >> 2] | 0) + (HEAP32[i72 >> 2] | 0) | 0);
        i144 = i77;
        i145 = i76;
       }
      } while (0);
      HEAPF32[i26 >> 2] = +HEAPF32[(HEAP32[i78 >> 2] | 0) + 28 >> 2] + +HEAPF32[i26 >> 2];
      i80 = i144;
      i81 = i145;
      i82 = HEAP32[i83 >> 2] | 0;
     }
    } while (0);
    i78 = HEAP32[i74 + 4 >> 2] | 0;
    i79 = i78;
    if ((i78 | 0) == 0) {
     i35 = i79;
     i36 = i81;
     break L1;
    } else {
     i74 = i79;
     i75 = i82;
     i76 = i81;
     i77 = i80;
    }
   }
   if ((i93 | 0) == 22) {
    _WTFCrash();
    return 0;
   } else if ((i93 | 0) == 33) {
    _WTFCrash();
    return 0;
   } else if ((i93 | 0) == 100) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i93 | 0) == 192) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i93 | 0) == 193) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
  }
 } while (0);
 do {
  if ((HEAP8[i28] & 1) == 0) {
   i147 = i36;
  } else {
   i93 = HEAP32[i34 >> 2] | 0;
   if ((i93 | 0) == 0) {
    i147 = i36;
    break;
   }
   i80 = _llvm_uadd_with_overflow_i32(i93 | 0, -1 | 0) | 0;
   if (tempRet0) {
    i93 = (HEAP32[i4 >> 2] | 0) + (i80 << 2) | 0;
    HEAP32[i93 >> 2] = (HEAP32[i93 >> 2] | 0) - 1;
    i147 = i36 - 1 | 0;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
  }
 } while (0);
 __ZN7WebCore15RenderBlockFlow30updateLogicalWidthForAlignmentERKNS_10ETextAlignEPNS_7BidiRunERfS6_S6_i(i1, i25, i8, i5, i26, i6, i147);
 d140 = +HEAPF32[i6 >> 2];
 L242 : do {
  if ((i147 | 0) != 0) {
   d117 = +HEAPF32[i26 >> 2];
   if (d117 >= d140 | i29) {
    break;
   } else {
    i148 = i7;
    i149 = 0;
    i150 = i147;
    d151 = d117;
   }
   L244 : while (1) {
    if ((HEAP8[i148 | 0] & 4) != 0) {
     break L242;
    }
    i6 = HEAP32[i148 + 20 >> 2] | 0;
    do {
     if ((i6 | 0) == 0 | (i148 | 0) == (i8 | 0)) {
      i152 = i150;
      i153 = i149;
      d154 = d151;
     } else {
      i5 = HEAP32[i148 + 16 >> 2] | 0;
      if ((HEAP32[i5 + 20 >> 2] & 768 | 0) != 256) {
       i152 = i150;
       i153 = i149;
       d154 = d151;
       break;
      }
      if ((HEAP32[i34 >> 2] | 0) >>> 0 <= i149 >>> 0) {
       break L244;
      }
      i25 = HEAP32[(HEAP32[i4 >> 2] | 0) + (i149 << 2) >> 2] | 0;
      if (((HEAP32[(HEAP32[(HEAP32[i5 + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0) {
       i5 = ~~((d140 - d151) * +(i25 >>> 0 >>> 0) / +(i150 >>> 0 >>> 0));
       i1 = i6 + 32 | 0;
       i36 = HEAP32[i1 >> 2] | 0;
       i28 = i6 + 28 | 0;
       d117 = +HEAPF32[i28 >> 2] - +(i36 >> 20 | 0);
       HEAP32[i1 >> 2] = i36 & 1048575 | i5 << 20;
       d123 = +(i5 | 0);
       HEAPF32[i28 >> 2] = d123 + d117;
       d117 = d123 + +HEAPF32[i26 >> 2];
       HEAPF32[i26 >> 2] = d117;
       d155 = d117;
      } else {
       d155 = d151;
      }
      if ((i150 | 0) == (i25 | 0)) {
       break L242;
      } else {
       i152 = i150 - i25 | 0;
       i153 = i149 + 1 | 0;
       d154 = d155;
      }
     }
    } while (0);
    i6 = HEAP32[i148 + 4 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break L242;
    } else {
     i148 = i6;
     i149 = i153;
     i150 = i152;
     d151 = d154;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return 0;
  }
 } while (0);
 if ((HEAP32[i34 >> 2] | 0) != 0) {
  HEAP32[i34 >> 2] = 0;
 }
 i34 = HEAP32[i4 >> 2] | 0;
 if ((i27 | 0) == (i34 | 0) | (i34 | 0) == 0) {
  STACKTOP = i12;
  return i35 | 0;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i33 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i34);
 STACKTOP = i12;
 return i35 | 0;
}
function __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE21createBidiRunsForLineERKS1_NS_23VisualDirectionOverrideEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 264 | 0;
 i6 = i5 | 0;
 i7 = i5 + 256 | 0;
 i8 = i1 + 120 | 0;
 if ((i3 | 0) != 0) {
  HEAP8[i8] = 0;
  i9 = i1 + 16 | 0;
  i10 = i1;
  HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
  HEAP32[i9 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
  HEAP32[i9 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
  i9 = i1 + 32 | 0;
  HEAP32[i1 + 32 >> 2] = 0;
  HEAP32[i1 + 36 >> 2] = 0;
  HEAP32[i1 + 40 >> 2] = -1;
  HEAP32[i1 + 44 >> 2] = 0;
  i11 = i1 + 4 | 0;
  i12 = i1 + 12 | 0;
  i13 = i2 + 12 | 0;
  i14 = i2 + 4 | 0;
  i15 = i1 | 0;
  i16 = i1 + 8 | 0;
  i17 = HEAP32[i12 >> 2] | 0;
  while (1) {
   i18 = HEAP32[i11 >> 2] | 0;
   if ((i17 | 0) == (HEAP32[i13 >> 2] | 0)) {
    if ((i18 | 0) == (HEAP32[i14 >> 2] | 0)) {
     break;
    }
   }
   if ((i18 | 0) == 0) {
    break;
   }
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i9 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
   HEAP32[i9 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
   HEAP32[i9 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
   if ((HEAP32[i18 + 20 >> 2] & 768 | 0) == 256) {
    i19 = i17 + 1 | 0;
    HEAP32[i12 >> 2] = i19;
    if (i19 >>> 0 < (HEAP32[(HEAP32[i18 + 44 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
     i17 = i19;
     continue;
    }
   }
   HEAP32[i11 >> 2] = __ZN7WebCoreL14bidiNextSharedINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_NS_19EmptyInlineBehaviorEPb(HEAP32[i15 >> 2] | 0, i18, i1, 0, 0) | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i16 >> 2] = -1;
   i17 = 0;
  }
  HEAP32[i1 + 80 >> 2] = (i3 | 0) != 1;
  __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
  i17 = i1 + 128 | 0;
  HEAP32[i1 + 132 >> 2] = HEAP32[i17 >> 2];
  if ((i3 | 0) != 2) {
   STACKTOP = i5;
   return;
  }
  i3 = HEAP32[i1 + 136 >> 2] | 0;
  if ((i3 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i16 = i3 - 1 | 0;
  if ((i16 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i3 = i1 + 124 | 0;
  i12 = HEAP32[i3 >> 2] | 0;
  i15 = 0;
  i11 = i12;
  while (1) {
   i15 = i15 + 1 | 0;
   i20 = HEAP32[i11 + 4 >> 2] | 0;
   i11 = i20;
   if (i15 >>> 0 >= i16 >>> 0) {
    break;
   }
  }
  i15 = HEAP32[i20 + 4 >> 2] | 0;
  i20 = 0;
  i10 = i15;
  i9 = i12;
  while (1) {
   i14 = i9 + 4 | 0;
   i13 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i10;
   i14 = i20 + 1 | 0;
   if (i14 >>> 0 > i16 >>> 0) {
    break;
   } else {
    i20 = i14;
    i10 = i9;
    i9 = i13;
   }
  }
  HEAP32[i3 >> 2] = i11;
  HEAP32[i12 + 4 >> 2] = i15;
  if ((i15 | 0) != 0) {
   STACKTOP = i5;
   return;
  }
  HEAP32[i17 >> 2] = i12;
  STACKTOP = i5;
  return;
 }
 HEAP8[i8] = 1;
 i12 = i1 + 32 | 0;
 i17 = i12;
 HEAP32[i1 + 32 >> 2] = 0;
 i15 = i1 + 36 | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = -1;
 i11 = i1 + 44 | 0;
 HEAP32[i11 >> 2] = 0;
 i3 = i1 + 48 | 0;
 i9 = i3;
 i10 = i1;
 HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = -1;
 HEAP32[i6 + 12 >> 2] = 0;
 HEAP32[i6 + 16 >> 2] = 0;
 HEAP32[i6 + 20 >> 2] = 0;
 HEAP32[i6 + 24 >> 2] = -1;
 HEAP32[i6 + 28 >> 2] = 0;
 HEAP32[i6 + 32 >> 2] = 0;
 HEAP32[i6 + 36 >> 2] = 0;
 HEAP32[i6 + 40 >> 2] = -1;
 HEAP32[i6 + 44 >> 2] = 0;
 HEAP32[i6 + 48 >> 2] = 0;
 HEAP32[i6 + 52 >> 2] = 0;
 HEAP32[i6 + 56 >> 2] = -1;
 HEAP32[i6 + 60 >> 2] = 0;
 i20 = i6 + 64 | 0;
 HEAP32[i20 >> 2] = 10;
 i16 = i6 + 68 | 0;
 HEAP32[i16 >> 2] = 10;
 i13 = i6 + 72 | 0;
 HEAP32[i13 >> 2] = 10;
 i14 = i6 + 76 | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i6 + 80 >> 2] = 10;
 HEAP32[i6 + 84 >> 2] = 0;
 HEAP32[i6 + 88 >> 2] = 0;
 HEAP32[i6 + 92 >> 2] = -1;
 HEAP32[i6 + 96 >> 2] = 0;
 i18 = i6 + 100 | 0;
 HEAP8[i18] = 0;
 HEAP32[i6 + 104 >> 2] = 0;
 HEAP32[i6 + 108 >> 2] = 0;
 HEAP32[i6 + 112 >> 2] = -1;
 HEAP32[i6 + 116 >> 2] = 0;
 i19 = i6 + 120 | 0;
 HEAP8[i19] = 1;
 _memset(i6 + 124 | 0, 0, 37) | 0;
 _memset(i6 + 164 | 0, 0, 16) | 0;
 HEAP32[i6 + 180 >> 2] = i6 + 192;
 HEAP32[i6 + 184 >> 2] = 8;
 HEAP32[i6 + 188 >> 2] = 0;
 i21 = i1 + 76 | 0;
 i22 = i7 | 0;
 i23 = i1 + 4 | 0;
 i24 = i1 + 164 | 0;
 i25 = i1 + 12 | 0;
 i26 = i1 + 72 | 0;
 i27 = i1 + 188 | 0;
 i28 = i2 + 12 | 0;
 i29 = i2 + 4 | 0;
 i30 = i1 | 0;
 i31 = i1 + 8 | 0;
 i32 = i1 + 16 | 0;
 i33 = i1 + 64 | 0;
 i34 = i1 + 68 | 0;
 i35 = i1 + 80 | 0;
 i36 = i1 + 104 | 0;
 i37 = i1 + 60 | 0;
 i38 = i1 + 52 | 0;
 i39 = i36;
 i40 = i1 + 64 | 0;
 i41 = i6 + 16 | 0;
 i42 = i6 + 32 | 0;
 i43 = i6 + 48 | 0;
 i44 = i1 + 100 | 0;
 i45 = i6 + 104 | 0;
 i46 = i1 + 84 | 0;
 i47 = 0;
 L33 : while (1) {
  while (1) {
   do {
    if (i47) {
     if (!i4) {
      i48 = HEAP32[i23 >> 2] | 0;
      if ((i48 | 0) != 0) {
       i49 = i48;
       i50 = 37;
       break;
      }
      i48 = HEAP32[i21 >> 2] | 0;
      while (1) {
       i51 = HEAP32[i48 + 8 >> 2] | 0;
       if ((i51 | 0) == 0) {
        break;
       } else {
        i48 = i51;
       }
      }
      i52 = (HEAP32[i48 + 4 >> 2] | 0) >>> 6 & 31;
      break;
     }
     __ZN7WebCore11BidiContext41copyStackRemovingUnicodeEmbeddingContextsEv(i7, HEAP32[i21 >> 2] | 0);
     i51 = HEAP32[i22 >> 2] | 0;
     HEAP32[i22 >> 2] = 0;
     i53 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i51;
     do {
      if ((i53 | 0) != 0) {
       i51 = i53 | 0;
       i54 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
       if ((i54 | 0) == 0) {
        __ZN7WebCore11BidiContextD2Ev(i53);
        __ZN3WTF8fastFreeEPv(i53);
        break;
       } else {
        HEAP32[i51 >> 2] = i54;
        break;
       }
      }
     } while (0);
     i53 = HEAP32[i22 >> 2] | 0;
     do {
      if ((i53 | 0) != 0) {
       i48 = i53 | 0;
       i54 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
       if ((i54 | 0) == 0) {
        __ZN7WebCore11BidiContextD2Ev(i53);
        __ZN3WTF8fastFreeEPv(i53);
        break;
       } else {
        HEAP32[i48 >> 2] = i54;
        break;
       }
      }
     } while (0);
     i53 = (HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] | 0) >>> 6 & 31;
     HEAP32[i20 >> 2] = i53;
     HEAP32[i13 >> 2] = i53;
     HEAP32[i16 >> 2] = i53;
     i52 = i53;
    } else {
     i53 = HEAP32[i23 >> 2] | 0;
     if ((i53 | 0) == 0) {
      i55 = 10;
      i50 = 49;
     } else {
      i49 = i53;
      i50 = 37;
     }
    }
   } while (0);
   L61 : do {
    if ((i50 | 0) == 37) {
     i50 = 0;
     i53 = HEAP32[i25 >> 2] | 0;
     do {
      if ((HEAP32[i49 + 20 >> 2] & 768 | 0) == 256) {
       i54 = HEAP32[i49 + 44 >> 2] | 0;
       if ((HEAP32[i54 + 4 >> 2] | 0) >>> 0 <= i53 >>> 0) {
        break;
       }
       if ((HEAP32[i54 + 16 >> 2] & 32 | 0) == 0) {
        i56 = HEAP16[(HEAP32[i54 + 8 >> 2] | 0) + (i53 << 1) >> 1] | 0;
       } else {
        i56 = HEAPU8[(HEAP32[i54 + 8 >> 2] | 0) + i53 | 0] | 0;
       }
       if (i56 << 16 >> 16 == 0) {
        break;
       }
       i55 = _u_charDirection(i56 & 65535) | 0;
       i50 = 49;
       break L61;
      }
     } while (0);
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i49 >> 2] | 0) + 108 >> 2] & 31](i49) | 0)) {
      i55 = 10;
      i50 = 49;
      break;
     }
     i53 = HEAP32[i23 >> 2] | 0;
     if ((HEAP32[i53 + 20 >> 2] & 768 | 0) == 256) {
      i57 = HEAP32[(HEAP32[i53 + 8 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i57 = HEAP32[i53 + 36 >> 2] | 0;
     }
     i55 = (HEAP32[i57 + 40 >> 2] | 0) >>> 30 & 1 ^ 1;
     i50 = 49;
    }
   } while (0);
   L77 : do {
    if ((i50 | 0) == 49) {
     i50 = 0;
     i53 = HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] | 0;
     if ((i53 & 2048 | 0) == 0) {
      if ((i55 | 0) != 17) {
       i52 = i55;
       break;
      }
      i52 = HEAP32[i26 >> 2] | 0;
      break;
     }
     switch (i55 | 0) {
     case 15:
      {
       i52 = i55;
       break L77;
       break;
      }
     case 14:
      {
       i52 = i55;
       break L77;
       break;
      }
     case 12:
      {
       i52 = i55;
       break L77;
       break;
      }
     case 11:
      {
       i52 = i55;
       break L77;
       break;
      }
     case 16:
      {
       i52 = 16;
       break L77;
       break;
      }
     default:
      {
       i52 = i53 >>> 6 & 31;
       break L77;
      }
     }
    }
   } while (0);
   i53 = (HEAP32[i24 >> 2] | 0) != 0 ? 10 : i52;
   L90 : do {
    switch (i53 | 0) {
    case 14:
    case 11:
    case 15:
    case 12:
    case 16:
     {
      __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE5embedE14UCharDirectionNS_19BidiEmbeddingSourceE(i1, i53, 1);
      __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE23commitExplicitEmbeddingEv(i1) | 0;
      i58 = i53;
      break;
     }
    case 0:
     {
      L93 : do {
       switch (HEAP32[i26 >> 2] | 0) {
       case 2:
        {
         if ((HEAP32[i34 >> 2] | 0) != 0) {
          i50 = 62;
         }
         break;
        }
       case 1:
       case 5:
       case 13:
        {
         i50 = 62;
         break;
        }
       case 9:
       case 8:
       case 7:
       case 18:
       case 10:
       case 3:
       case 4:
       case 6:
        {
         i54 = HEAP32[i33 >> 2] | 0;
         if ((i54 | 0) == 2) {
          if ((HEAP32[i34 >> 2] | 0) == 0) {
           break L93;
          }
          HEAP32[i35 >> 2] = 2;
          __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
          if ((HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1984 | 0) == 0) {
           break L93;
          }
          HEAP32[i17 >> 2] = HEAP32[i9 >> 2];
          HEAP32[i17 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
          HEAP32[i17 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
          HEAP32[i17 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
          HEAP32[i35 >> 2] = 1;
          __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
          break L93;
         } else if ((i54 | 0) == 5) {
          HEAP32[i35 >> 2] = 5;
          __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
          if ((HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1984 | 0) == 0) {
           break L93;
          }
          HEAP32[i17 >> 2] = HEAP32[i9 >> 2];
          HEAP32[i17 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
          HEAP32[i17 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
          HEAP32[i17 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
          HEAP32[i35 >> 2] = 1;
          __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
          break L93;
         } else {
          if ((HEAP32[i34 >> 2] | 0) == 0) {
           break L93;
          }
          if ((HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1984 | 0) == 64) {
           HEAP32[i17 >> 2] = HEAP32[i9 >> 2];
           HEAP32[i17 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
           HEAP32[i17 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
           HEAP32[i17 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
           HEAP32[i35 >> 2] = 1;
          }
          __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
          break L93;
         }
         break;
        }
       default:
        {}
       }
      } while (0);
      if ((i50 | 0) == 62) {
       i50 = 0;
       __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
      }
      HEAP32[i17 >> 2] = HEAP32[i10 >> 2];
      HEAP32[i17 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
      HEAP32[i17 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
      HEAP32[i17 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
      HEAP32[i33 >> 2] = 0;
      HEAP32[i34 >> 2] = 0;
      HEAP32[i35 >> 2] = 0;
      i58 = 0;
      break;
     }
    case 13:
    case 1:
     {
      L111 : do {
       switch (HEAP32[i26 >> 2] | 0) {
       case 0:
       case 2:
       case 5:
        {
         __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
         break;
        }
       case 10:
       case 9:
       case 3:
       case 4:
       case 6:
       case 18:
       case 7:
       case 8:
        {
         i54 = HEAP32[i33 >> 2] | 0;
         if ((i54 | 0) == 2) {
          do {
           if ((HEAP32[i34 >> 2] | 0) == 0) {
            if ((HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1984 | 0) != 0) {
             break;
            }
            HEAP32[i17 >> 2] = HEAP32[i9 >> 2];
            HEAP32[i17 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
            HEAP32[i17 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
            HEAP32[i17 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
           }
          } while (0);
          __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
          break L111;
         } else if ((i54 | 0) == 5) {
          __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
          break L111;
         } else {
          if ((HEAP32[i34 >> 2] | 0) != 0) {
           break L111;
          }
          if ((HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1984 | 0) == 0) {
           HEAP32[i17 >> 2] = HEAP32[i9 >> 2];
           HEAP32[i17 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
           HEAP32[i17 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
           HEAP32[i17 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
          }
          __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
          break L111;
         }
         break;
        }
       default:
        {}
       }
      } while (0);
      HEAP32[i17 >> 2] = HEAP32[i10 >> 2];
      HEAP32[i17 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
      HEAP32[i17 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
      HEAP32[i17 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
      HEAP32[i33 >> 2] = 1;
      HEAP32[i34 >> 2] = i53;
      HEAP32[i35 >> 2] = 1;
      i58 = i53;
      break;
     }
    case 2:
     {
      i48 = HEAP32[i34 >> 2] | 0;
      if ((i48 | 0) == 13) {
       i50 = 102;
       break L90;
      }
      i51 = HEAP32[i26 >> 2] | 0;
      switch (i51 | 0) {
      case 1:
      case 13:
      case 5:
       {
        HEAP32[i17 >> 2] = HEAP32[i9 >> 2];
        HEAP32[i17 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
        HEAP32[i17 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
        HEAP32[i17 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
        __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
        HEAP32[i35 >> 2] = 2;
        break;
       }
      case 3:
      case 6:
       {
        i59 = HEAP32[i33 >> 2] | 0;
        if ((i59 | 0) != 2) {
         i60 = i59;
         i50 = 92;
        }
        break;
       }
      case 10:
      case 9:
      case 4:
      case 18:
      case 7:
      case 8:
       {
        i60 = HEAP32[i33 >> 2] | 0;
        i50 = 92;
        break;
       }
      default:
       {}
      }
      do {
       if ((i50 | 0) == 92) {
        i50 = 0;
        if ((i60 | 0) == 2) {
         if ((i48 | 0) != 1) {
          break;
         }
         __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
         i59 = (HEAP32[i26 >> 2] | 0) == 4 ? i36 : i3;
         HEAP32[i17 >> 2] = HEAP32[i59 >> 2];
         HEAP32[i17 + 4 >> 2] = HEAP32[i59 + 4 >> 2];
         HEAP32[i17 + 8 >> 2] = HEAP32[i59 + 8 >> 2];
         HEAP32[i17 + 12 >> 2] = HEAP32[i59 + 12 >> 2];
         HEAP32[i35 >> 2] = 1;
         __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
         HEAP32[i35 >> 2] = 2;
         break;
        } else if ((i60 | 0) == 5) {
         __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
         if ((HEAP32[i34 >> 2] | 0) != 1) {
          if ((HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1984 | 0) != 64) {
           break;
          }
         }
         i59 = (HEAP32[i26 >> 2] | 0) == 4 ? i36 : i3;
         HEAP32[i17 >> 2] = HEAP32[i59 >> 2];
         HEAP32[i17 + 4 >> 2] = HEAP32[i59 + 4 >> 2];
         HEAP32[i17 + 8 >> 2] = HEAP32[i59 + 8 >> 2];
         HEAP32[i17 + 12 >> 2] = HEAP32[i59 + 12 >> 2];
         HEAP32[i35 >> 2] = 1;
         __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
         HEAP32[i35 >> 2] = 2;
         break;
        } else {
         if ((i48 | 0) != 1) {
          break;
         }
         i59 = (i51 | 0) == 4 ? i36 : i3;
         HEAP32[i17 >> 2] = HEAP32[i59 >> 2];
         HEAP32[i17 + 4 >> 2] = HEAP32[i59 + 4 >> 2];
         HEAP32[i17 + 8 >> 2] = HEAP32[i59 + 8 >> 2];
         HEAP32[i17 + 12 >> 2] = HEAP32[i59 + 12 >> 2];
         HEAP32[i35 >> 2] = 1;
         __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
         HEAP32[i35 >> 2] = 2;
         break;
        }
       }
      } while (0);
      HEAP32[i17 >> 2] = HEAP32[i10 >> 2];
      HEAP32[i17 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
      HEAP32[i17 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
      HEAP32[i17 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
      HEAP32[i33 >> 2] = 2;
      if ((HEAP32[i35 >> 2] | 0) != 10) {
       i58 = 2;
       break L90;
      }
      HEAP32[i35 >> 2] = 0;
      i58 = 2;
      break;
     }
    case 5:
     {
      i50 = 102;
      break;
     }
    case 4:
     {
      i51 = HEAP32[i26 >> 2] | 0;
      if ((i51 | 0) == 2) {
       HEAP32[i17 >> 2] = HEAP32[i10 >> 2];
       HEAP32[i17 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
       HEAP32[i17 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
       HEAP32[i17 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
       HEAP32[i40 >> 2] = 2;
       i58 = 2;
       break L90;
      } else if ((i51 | 0) == 4) {
       i58 = 4;
       break L90;
      } else {
       i51 = (HEAP8[i8] & 1) != 0 ? i12 : i3;
       HEAP32[i39 >> 2] = HEAP32[i51 >> 2];
       HEAP32[i39 + 4 >> 2] = HEAP32[i51 + 4 >> 2];
       HEAP32[i39 + 8 >> 2] = HEAP32[i51 + 8 >> 2];
       HEAP32[i39 + 12 >> 2] = HEAP32[i51 + 12 >> 2];
       i58 = 4;
       break L90;
      }
      break;
     }
    case 18:
     {
      if ((HEAP32[i11 >> 2] | 0) != (HEAP32[i37 >> 2] | 0)) {
       i58 = 18;
       break L90;
      }
      if ((HEAP32[i15 >> 2] | 0) != (HEAP32[i38 >> 2] | 0)) {
       i58 = 18;
       break L90;
      }
      HEAP32[i17 >> 2] = HEAP32[i10 >> 2];
      HEAP32[i17 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
      HEAP32[i17 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
      HEAP32[i17 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
      i58 = 18;
      break;
     }
    default:
     {
      i58 = i53;
     }
    }
   } while (0);
   do {
    if ((i50 | 0) == 102) {
     i50 = 0;
     L155 : do {
      switch (HEAP32[i26 >> 2] | 0) {
      case 0:
       {
        if ((HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1984 | 0) != 0) {
         break L155;
        }
        __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
        break;
       }
      case 1:
      case 13:
      case 2:
       {
        HEAP32[i17 >> 2] = HEAP32[i9 >> 2];
        HEAP32[i17 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
        HEAP32[i17 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
        HEAP32[i17 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
        __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
        break;
       }
      case 6:
       {
        i53 = HEAP32[i33 >> 2] | 0;
        if ((i53 | 0) != 5) {
         i61 = i53;
         i50 = 108;
        }
        break;
       }
      case 10:
      case 3:
      case 4:
      case 18:
      case 7:
      case 8:
      case 9:
       {
        i61 = HEAP32[i33 >> 2] | 0;
        i50 = 108;
        break;
       }
      default:
       {}
      }
     } while (0);
     if ((i50 | 0) == 108) {
      i50 = 0;
      do {
       if ((i61 | 0) == 2) {
        i53 = HEAP32[i34 >> 2] | 0;
        if ((i53 | 0) == 1) {
         i50 = 113;
         break;
        }
        if ((HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1984 | 0) == 64) {
         i50 = 113;
        } else {
         i62 = i53;
         i50 = 114;
        }
       } else if ((i61 | 0) == 5) {
        i50 = 113;
       } else {
        i53 = HEAP32[i34 >> 2] | 0;
        if ((i53 | 0) != 0) {
         i62 = i53;
         i50 = 114;
         break;
        }
        if ((HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1984 | 0) == 64) {
         i50 = 113;
        } else {
         i62 = 0;
         i50 = 114;
        }
       }
      } while (0);
      do {
       if ((i50 | 0) == 113) {
        i50 = 0;
        __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
        HEAP32[i35 >> 2] = 1;
       } else if ((i50 | 0) == 114) {
        i50 = 0;
        if ((HEAP32[i35 >> 2] | 0) != 10) {
         break;
        }
        HEAP32[i35 >> 2] = (i62 | 0) != 0;
       }
      } while (0);
      HEAP32[i17 >> 2] = HEAP32[i9 >> 2];
      HEAP32[i17 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
      HEAP32[i17 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
      HEAP32[i17 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
      __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
     }
     HEAP32[i17 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i17 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
     HEAP32[i17 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
     HEAP32[i17 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
     HEAP32[i33 >> 2] = 5;
     if ((HEAP32[i35 >> 2] | 0) != 10) {
      i58 = 5;
      break;
     }
     HEAP32[i35 >> 2] = 5;
     i58 = 5;
    }
   } while (0);
   do {
    if (i47) {
     if ((HEAP32[i11 >> 2] | 0) != (HEAP32[i25 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i15 >> 2] | 0) == (HEAP32[i23 >> 2] | 0)) {
      i50 = 128;
      break L33;
     }
    }
   } while (0);
   L180 : do {
    switch (i58 | 0) {
    case 4:
     {
      if ((HEAP32[i26 >> 2] | 0) == 2) {
       break L180;
      }
      HEAP32[i26 >> 2] = 4;
      break;
     }
    case 3:
    case 6:
    case 8:
    case 9:
    case 10:
     {
      switch (HEAP32[i26 >> 2] | 0) {
      case 0:
      case 1:
      case 13:
      case 2:
      case 5:
       {
        HEAP32[i26 >> 2] = i58;
        break L180;
        break;
       }
      default:
       {
        HEAP32[i26 >> 2] = 10;
        break L180;
       }
      }
      break;
     }
    case 17:
    case 18:
    case 14:
    case 11:
    case 15:
    case 12:
    case 16:
     {
      break;
     }
    default:
     {
      HEAP32[i26 >> 2] = i58;
     }
    }
   } while (0);
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i9 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
   HEAP32[i9 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
   HEAP32[i9 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
   if ((HEAP8[i8] & 1) != 0) {
    HEAP32[i32 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i32 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
    HEAP32[i32 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
    HEAP32[i32 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
    HEAP8[i8] = 0;
   }
   i53 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i53 | 0) != 0) {
     if ((HEAP32[i53 + 20 >> 2] & 768 | 0) == 256) {
      i51 = (HEAP32[i25 >> 2] | 0) + 1 | 0;
      HEAP32[i25 >> 2] = i51;
      if (i51 >>> 0 < (HEAP32[(HEAP32[i53 + 44 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
       break;
      }
     }
     HEAP32[i23 >> 2] = __ZN7WebCoreL14bidiNextSharedINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_NS_19EmptyInlineBehaviorEPb(HEAP32[i30 >> 2] | 0, i53, i1, 0, 0) | 0;
     HEAP32[i25 >> 2] = 0;
     HEAP32[i31 >> 2] = -1;
    }
   } while (0);
   if ((HEAP32[i27 >> 2] | 0) != 0) {
    if ((__ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE23commitExplicitEmbeddingEv(i1) | 0) & i47) {
     i50 = 155;
     break L33;
    }
   }
   if (i47) {
    i47 = 1;
    continue L33;
   }
   i53 = HEAP32[i23 >> 2] | 0;
   if ((HEAP32[i25 >> 2] | 0) == (HEAP32[i28 >> 2] | 0)) {
    if ((i53 | 0) == (HEAP32[i29 >> 2] | 0)) {
     break;
    }
   }
   if ((i53 | 0) == 0) {
    break;
   }
  }
  if ((HEAP8[i8] & 1) != 0) {
   break;
  }
  HEAP32[i20 >> 2] = HEAP32[i40 >> 2];
  HEAP32[i16 >> 2] = HEAP32[i34 >> 2];
  HEAP32[i13 >> 2] = HEAP32[i26 >> 2];
  i53 = HEAP32[i21 >> 2] | 0;
  if ((i53 | 0) != 0) {
   i51 = i53 | 0;
   HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
  }
  i51 = HEAP32[i14 >> 2] | 0;
  HEAP32[i14 >> 2] = i53;
  do {
   if ((i51 | 0) != 0) {
    i53 = i51 | 0;
    i48 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
    if ((i48 | 0) == 0) {
     __ZN7WebCore11BidiContextD2Ev(i51);
     __ZN3WTF8fastFreeEPv(i51);
     break;
    } else {
     HEAP32[i53 >> 2] = i48;
     break;
    }
   }
  } while (0);
  HEAP32[i41 >> 2] = HEAP32[i32 >> 2];
  HEAP32[i41 + 4 >> 2] = HEAP32[i32 + 4 >> 2];
  HEAP32[i41 + 8 >> 2] = HEAP32[i32 + 8 >> 2];
  HEAP32[i41 + 12 >> 2] = HEAP32[i32 + 12 >> 2];
  HEAP32[i42 >> 2] = HEAP32[i17 >> 2];
  HEAP32[i42 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
  HEAP32[i42 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
  HEAP32[i42 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
  HEAP32[i43 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i43 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
  HEAP32[i43 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
  HEAP32[i43 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
  HEAP8[i18] = HEAP8[i44] & 1;
  HEAP32[i45 >> 2] = HEAP32[i39 >> 2];
  HEAP32[i45 + 4 >> 2] = HEAP32[i39 + 4 >> 2];
  HEAP32[i45 + 8 >> 2] = HEAP32[i39 + 8 >> 2];
  HEAP32[i45 + 12 >> 2] = HEAP32[i39 + 12 >> 2];
  HEAP8[i19] = HEAP8[i8] & 1;
  HEAP32[i46 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i46 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
  HEAP32[i46 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
  HEAP32[i46 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
  i47 = 1;
 }
 if ((i50 | 0) == 128) {
  if ((HEAP8[i44] & 1) == 0) {
   HEAP32[i17 >> 2] = HEAP32[i46 >> 2];
   HEAP32[i17 + 4 >> 2] = HEAP32[i46 + 4 >> 2];
   HEAP32[i17 + 8 >> 2] = HEAP32[i46 + 8 >> 2];
   HEAP32[i17 + 12 >> 2] = HEAP32[i46 + 12 >> 2];
   i46 = HEAP32[i40 >> 2] | 0;
   if ((i46 | 0) == 0 | (i46 | 0) == 1 | (i46 | 0) == 5) {
    HEAP32[i35 >> 2] = i46;
   } else if ((i46 | 0) == 2) {
    HEAP32[i35 >> 2] = (HEAP32[i34 >> 2] | 0) == 0 ? 0 : 2;
   }
   __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
  }
  i46 = i2;
  HEAP32[i10 >> 2] = HEAP32[i46 >> 2];
  HEAP32[i10 + 4 >> 2] = HEAP32[i46 + 4 >> 2];
  HEAP32[i10 + 8 >> 2] = HEAP32[i46 + 8 >> 2];
  HEAP32[i10 + 12 >> 2] = HEAP32[i46 + 12 >> 2];
  HEAP32[i40 >> 2] = HEAP32[i20 >> 2];
  HEAP32[i34 >> 2] = HEAP32[i16 >> 2];
  HEAP32[i26 >> 2] = HEAP32[i13 >> 2];
  i46 = HEAP32[i14 >> 2] | 0;
  if ((i46 | 0) != 0) {
   i47 = i46 | 0;
   HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
  }
  i47 = HEAP32[i21 >> 2] | 0;
  HEAP32[i21 >> 2] = i46;
  do {
   if ((i47 | 0) != 0) {
    i46 = i47 | 0;
    i29 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
    if ((i29 | 0) == 0) {
     __ZN7WebCore11BidiContextD2Ev(i47);
     __ZN3WTF8fastFreeEPv(i47);
     break;
    } else {
     HEAP32[i46 >> 2] = i29;
     break;
    }
   }
  } while (0);
  HEAP32[i32 >> 2] = HEAP32[i41 >> 2];
  HEAP32[i32 + 4 >> 2] = HEAP32[i41 + 4 >> 2];
  HEAP32[i32 + 8 >> 2] = HEAP32[i41 + 8 >> 2];
  HEAP32[i32 + 12 >> 2] = HEAP32[i41 + 12 >> 2];
  HEAP32[i17 >> 2] = HEAP32[i42 >> 2];
  HEAP32[i17 + 4 >> 2] = HEAP32[i42 + 4 >> 2];
  HEAP32[i17 + 8 >> 2] = HEAP32[i42 + 8 >> 2];
  HEAP32[i17 + 12 >> 2] = HEAP32[i42 + 12 >> 2];
  HEAP32[i9 >> 2] = HEAP32[i43 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i43 + 4 >> 2];
  HEAP32[i9 + 8 >> 2] = HEAP32[i43 + 8 >> 2];
  HEAP32[i9 + 12 >> 2] = HEAP32[i43 + 12 >> 2];
  HEAP8[i44] = HEAP8[i18] & 1;
  HEAP32[i39 >> 2] = HEAP32[i45 >> 2];
  HEAP32[i39 + 4 >> 2] = HEAP32[i45 + 4 >> 2];
  HEAP32[i39 + 8 >> 2] = HEAP32[i45 + 8 >> 2];
  HEAP32[i39 + 12 >> 2] = HEAP32[i45 + 12 >> 2];
  HEAP8[i8] = HEAP8[i19] & 1;
  HEAP32[i35 >> 2] = 10;
 } else if ((i50 | 0) == 155) {
  i50 = i2;
  HEAP32[i10 >> 2] = HEAP32[i50 >> 2];
  HEAP32[i10 + 4 >> 2] = HEAP32[i50 + 4 >> 2];
  HEAP32[i10 + 8 >> 2] = HEAP32[i50 + 8 >> 2];
  HEAP32[i10 + 12 >> 2] = HEAP32[i50 + 12 >> 2];
  HEAP32[i40 >> 2] = HEAP32[i20 >> 2];
  HEAP32[i34 >> 2] = HEAP32[i16 >> 2];
  HEAP32[i26 >> 2] = HEAP32[i13 >> 2];
  i13 = HEAP32[i14 >> 2] | 0;
  if ((i13 | 0) != 0) {
   i14 = i13 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
  }
  i14 = HEAP32[i21 >> 2] | 0;
  HEAP32[i21 >> 2] = i13;
  do {
   if ((i14 | 0) != 0) {
    i13 = i14 | 0;
    i21 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
    if ((i21 | 0) == 0) {
     __ZN7WebCore11BidiContextD2Ev(i14);
     __ZN3WTF8fastFreeEPv(i14);
     break;
    } else {
     HEAP32[i13 >> 2] = i21;
     break;
    }
   }
  } while (0);
  HEAP32[i32 >> 2] = HEAP32[i41 >> 2];
  HEAP32[i32 + 4 >> 2] = HEAP32[i41 + 4 >> 2];
  HEAP32[i32 + 8 >> 2] = HEAP32[i41 + 8 >> 2];
  HEAP32[i32 + 12 >> 2] = HEAP32[i41 + 12 >> 2];
  HEAP32[i17 >> 2] = HEAP32[i42 >> 2];
  HEAP32[i17 + 4 >> 2] = HEAP32[i42 + 4 >> 2];
  HEAP32[i17 + 8 >> 2] = HEAP32[i42 + 8 >> 2];
  HEAP32[i17 + 12 >> 2] = HEAP32[i42 + 12 >> 2];
  HEAP32[i9 >> 2] = HEAP32[i43 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i43 + 4 >> 2];
  HEAP32[i9 + 8 >> 2] = HEAP32[i43 + 8 >> 2];
  HEAP32[i9 + 12 >> 2] = HEAP32[i43 + 12 >> 2];
  HEAP8[i44] = HEAP8[i18] & 1;
  HEAP32[i39 >> 2] = HEAP32[i45 >> 2];
  HEAP32[i39 + 4 >> 2] = HEAP32[i45 + 4 >> 2];
  HEAP32[i39 + 8 >> 2] = HEAP32[i45 + 8 >> 2];
  HEAP32[i39 + 12 >> 2] = HEAP32[i45 + 12 >> 2];
  HEAP8[i8] = HEAP8[i19] & 1;
  HEAP32[i35 >> 2] = 10;
 }
 HEAP32[i1 + 132 >> 2] = HEAP32[i1 + 128 >> 2];
 __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE21reorderRunsFromLevelsEv(i1);
 HEAP32[i1 + 84 >> 2] = 0;
 HEAP32[i1 + 88 >> 2] = 0;
 HEAP32[i1 + 92 >> 2] = -1;
 HEAP32[i1 + 96 >> 2] = 0;
 __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEED2Ev(i6);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15RenderBlockFlow15layoutLineBoxesEbRNS_10LayoutUnitES2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 128 | 0;
 i16 = i5 + 144 | 0;
 i17 = i5 + 168 | 0;
 i18 = i5 + 176 | 0;
 i19 = i5 + 184 | 0;
 i20 = i5 + 192 | 0;
 i21 = i5 + 200 | 0;
 i22 = i5 + 208 | 0;
 i23 = i5 + 216 | 0;
 i24 = i1 | 0;
 i25 = i1 | 0;
 i26 = i1;
 i27 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 752 >> 2] & 31](i25) | 0;
 i28 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i28 >> 2] | 0) + 720 >> 2] & 7](i13, i25);
 i29 = (HEAP32[i13 >> 2] | 0) + i27 | 0;
 i27 = i1 + 36 | 0;
 i13 = (HEAP32[(HEAP32[i27 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i13 | 0) == 3 | (i13 | 0) == 0) {
  HEAP32[i1 + 56 >> 2] = i29;
 } else {
  HEAP32[i1 + 52 >> 2] = i29;
 }
 i29 = i1 | 0;
 i13 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   if ((HEAP32[i13 + 8 >> 2] | 0) != (i1 | 0)) {
    break;
   }
   __ZN7WebCore15RenderBlockFlow17layoutLineGridBoxEv(i1);
  }
 } while (0);
 i13 = i1 + 20 | 0;
 do {
  if ((HEAP32[i13 >> 2] & 805306368 | 0) == 0) {
   i30 = i1 + 104 | 0;
   i31 = 0;
   i32 = 0;
   i33 = i30;
   i34 = HEAP32[i30 >> 2] | 0;
  } else {
   i30 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i29) | 0;
   i35 = i1 + 104 | 0;
   i36 = HEAP32[i35 >> 2] | 0;
   if ((i36 | 0) == 0 | (i30 | 0) == 0) {
    i31 = 0;
    i32 = i30;
    i33 = i35;
    i34 = i36;
    break;
   }
   i31 = (HEAP32[i30 + 128 >> 2] | 0) == 0;
   i32 = i30;
   i33 = i35;
   i34 = i36;
  }
 } while (0);
 if ((i34 | 0) == 0) {
  i37 = 1;
 } else {
  i37 = i31 | i2 | (HEAP32[i13 >> 2] & 1 | 0) != 0;
 }
 i31 = i14 | 0;
 HEAP8[i31] = 1;
 HEAP8[i14 + 1 | 0] = 0;
 HEAP8[i14 + 2 | 0] = 1;
 HEAP8[i14 + 3 | 0] = 1;
 _memset(i14 + 4 | 0, 0, 40) | 0;
 HEAP32[i14 + 44 >> 2] = i32;
 HEAP32[i14 + 48 >> 2] = i3;
 HEAP32[i14 + 52 >> 2] = i4;
 i4 = i31 + 56 | 0;
 HEAP8[i4] = HEAP8[i4] & -16 | (i37 & 1) << 2;
 if (i37) {
  __ZN7WebCore17RenderLineBoxList15deleteLineBoxesEv(i1 + 104 | 0);
 }
 i31 = i1 | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i27 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 33554432 | 0) == 0) {
  i38 = 17;
 } else {
  if ((HEAP32[i13 >> 2] & 65536 | 0) == 0) {
   i38 = 17;
  } else {
   i38 = 22;
  }
 }
 do {
  if ((i38 | 0) == 17) {
   if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i29) | 0)) {
    i39 = 0;
    break;
   }
   i3 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i39 = 0;
    break;
   }
   if ((HEAP32[i3 + 24 >> 2] & 16 | 0) == 0) {
    i39 = 0;
    break;
   }
   if ((HEAP32[(HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 33554432 | 0) == 0) {
    i39 = 0;
    break;
   }
   if ((HEAP32[i3 + 20 >> 2] & 65536 | 0) == 0) {
    i39 = 0;
   } else {
    i38 = 22;
   }
  }
 } while (0);
 if ((i38 | 0) == 22) {
  __ZN7WebCore15RenderBlockFlow23deleteEllipsisLineBoxesEv(i1);
  i39 = 1;
 }
 i29 = HEAP32[i1 + 28 >> 2] | 0;
 L31 : do {
  if ((i29 | 0) != 0) {
   i3 = i15 | 0;
   HEAP32[i3 >> 2] = i31;
   i32 = i15 + 4 | 0;
   HEAP32[i32 >> 2] = 0;
   i34 = i15 + 8 | 0;
   HEAP8[i34] = 0;
   i36 = HEAP32[i29 + 20 >> 2] | 0;
   do {
    if ((i36 & 768 | 0) == 256) {
     HEAP32[i32 >> 2] = i29;
     i40 = i29;
    } else {
     do {
      if ((HEAP32[i29 + 24 >> 2] & 4 | 0) == 0) {
       if ((i36 & 4096 | 0) != 0) {
        i41 = i29;
        break;
       }
       if ((i36 & 64 | 0) != 0 | (i36 & 25165824 | 0) == 16777216 | (i36 & 2048 | 0) != 0) {
        i41 = i29;
        break;
       }
       i41 = __ZN7WebCoreL14bidiNextSharedINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_NS_19EmptyInlineBehaviorEPb(i31, i29, 0, 1, 0) | 0;
      } else {
       i41 = i29;
      }
     } while (0);
     HEAP32[i32 >> 2] = i41;
     if ((i41 | 0) != 0) {
      i40 = i41;
      break;
     }
     __ZN7WebCore15RenderBlockFlow19layoutRunsAndFloatsERNS_15LineLayoutStateEb(i1, i14, 0);
     break L31;
    }
   } while (0);
   i36 = i17;
   i35 = i14 + 24 | 0;
   i30 = i16 | 0;
   i42 = i10 | 0;
   i43 = i11 | 0;
   i44 = i6 | 0;
   i45 = i7 | 0;
   i46 = i8 | 0;
   i47 = i9 | 0;
   i48 = i16 + 4 | 0;
   i49 = i16 + 8 | 0;
   i50 = i16 + 12 | 0;
   i51 = i16 + 16 | 0;
   i52 = i16 + 20 | 0;
   i53 = i14 + 32 | 0;
   i54 = i14 + 28 | 0;
   i55 = i35 | 0;
   i56 = i16;
   i57 = i16;
   i58 = i40;
   i59 = 0;
   i60 = 0;
   i61 = 0;
   i62 = 0;
   L43 : while (1) {
    i63 = HEAP32[i58 + 20 >> 2] | 0;
    if (i62) {
     i64 = 1;
    } else {
     i64 = (i63 & 1024 | 0) != 0;
    }
    i65 = i58 + 20 | 0;
    do {
     if ((i63 & 2112 | 0) != 0 | (i63 & 25165824 | 0) == 16777216) {
      i66 = i58;
      do {
       if (i2) {
        i67 = i63;
        i38 = 40;
       } else {
        if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i58 >> 2] | 0) + 988 >> 2] & 31](i66) | 0)) {
         break;
        }
        i67 = HEAP32[i65 >> 2] | 0;
        i38 = 40;
       }
      } while (0);
      do {
       if ((i38 | 0) == 40) {
        i38 = 0;
        if ((i67 & 4 | 0) == 0) {
         HEAP32[i65 >> 2] = i67 | 4;
        }
        if (!i2) {
         break;
        }
        if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i58 >> 2] | 0) + 980 >> 2] & 31](i66) | 0)) {
         break;
        }
        __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i58, 1, 0);
       }
      } while (0);
      i68 = HEAP32[i65 >> 2] | 0;
      if ((i68 & 25165824 | 0) == 16777216) {
       __ZN7WebCore11RenderBlock22insertPositionedObjectERNS_9RenderBoxE(__ZNK7WebCore12RenderObject15containingBlockEv(i58) | 0, i66);
       i69 = i61;
       i70 = i60;
       i71 = i59;
       break;
      }
      if ((i68 & 64 | 0) != 0) {
       HEAP32[i30 >> 2] = i66;
       i72 = HEAP32[i58 + 44 >> 2] | 0;
       i73 = i58;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i73 >> 2] | 0) + 776 >> 2] & 7](i10, i66);
       i74 = i72 - (HEAP32[i42 >> 2] | 0) | 0;
       i72 = HEAP32[i58 + 48 >> 2] | 0;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i73 >> 2] | 0) + 768 >> 2] & 7](i11, i66);
       i73 = i72 - (HEAP32[i43 >> 2] | 0) | 0;
       i72 = HEAP32[i58 + 52 >> 2] | 0;
       i75 = i58;
       i76 = i58;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i76 >> 2] | 0) + 776 >> 2] & 7](i6, i75);
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i76 >> 2] | 0) + 780 >> 2] & 7](i7, i75);
       i77 = (HEAP32[i44 >> 2] | 0) + i72 + (HEAP32[i45 >> 2] | 0) | 0;
       i72 = HEAP32[i58 + 56 >> 2] | 0;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i76 >> 2] | 0) + 768 >> 2] & 7](i8, i75);
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i76 >> 2] | 0) + 772 >> 2] & 7](i9, i75);
       i75 = (HEAP32[i46 >> 2] | 0) + i72 + (HEAP32[i47 >> 2] | 0) | 0;
       HEAP32[i48 >> 2] = i74;
       HEAP32[i49 >> 2] = i73;
       HEAP32[i50 >> 2] = i77;
       HEAP32[i51 >> 2] = i75;
       HEAP8[i52] = (HEAP32[i65 >> 2] | 0) >>> 20 & 1;
       i75 = HEAP32[i53 >> 2] | 0;
       if ((i75 | 0) != (HEAP32[i54 >> 2] | 0)) {
        i77 = (HEAP32[i55 >> 2] | 0) + (i75 * 24 & -1) | 0;
        HEAP32[i77 >> 2] = HEAP32[i57 >> 2];
        HEAP32[i77 + 4 >> 2] = HEAP32[i57 + 4 >> 2];
        HEAP32[i77 + 8 >> 2] = HEAP32[i57 + 8 >> 2];
        HEAP32[i77 + 12 >> 2] = HEAP32[i57 + 12 >> 2];
        HEAP32[i77 + 16 >> 2] = HEAP32[i57 + 16 >> 2];
        HEAP32[i77 + 20 >> 2] = HEAP32[i57 + 20 >> 2];
        HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
        i69 = i61;
        i70 = i60;
        i71 = i59;
        break;
       }
       i77 = i75 + 1 | 0;
       i73 = HEAP32[i55 >> 2] | 0;
       do {
        if (i73 >>> 0 > i16 >>> 0) {
         i38 = 52;
        } else {
         if ((i73 + (i75 * 24 & -1) | 0) >>> 0 <= i16 >>> 0) {
          i38 = 52;
          break;
         }
         __ZN3WTF6VectorIN7WebCore13FloatWithRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i35, i77);
         i74 = HEAP32[i55 >> 2] | 0;
         i78 = i74 + (((i56 - i73 | 0) / 24 & -1) * 24 & -1) | 0;
         i79 = i74;
        }
       } while (0);
       if ((i38 | 0) == 52) {
        i38 = 0;
        __ZN3WTF6VectorIN7WebCore13FloatWithRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i35, i77);
        i78 = i16;
        i79 = HEAP32[i55 >> 2] | 0;
       }
       i73 = i79 + ((HEAP32[i53 >> 2] | 0) * 24 & -1) | 0;
       i75 = i78;
       HEAP32[i73 >> 2] = HEAP32[i75 >> 2];
       HEAP32[i73 + 4 >> 2] = HEAP32[i75 + 4 >> 2];
       HEAP32[i73 + 8 >> 2] = HEAP32[i75 + 8 >> 2];
       HEAP32[i73 + 12 >> 2] = HEAP32[i75 + 12 >> 2];
       HEAP32[i73 + 16 >> 2] = HEAP32[i75 + 16 >> 2];
       HEAP32[i73 + 20 >> 2] = HEAP32[i75 + 20 >> 2];
       HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
       i69 = i61;
       i70 = i60;
       i71 = i59;
       break;
      }
      if (!i37) {
       if ((i68 & 29 | 0) == 0) {
        if ((i68 & 2 | 0) == 0) {
         i69 = i61;
         i70 = i60;
         i71 = i59;
         break;
        }
        __ZN7WebCore9RenderBox14dirtyLineBoxesEb(i66, 0);
       } else {
        __ZN7WebCore9RenderBox14dirtyLineBoxesEb(i66, 0);
       }
       if ((HEAP32[i65 >> 2] & 31 | 0) == 0) {
        i69 = i61;
        i70 = i60;
        i71 = i59;
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i58 >> 2] | 0) + 652 >> 2] & 31](i58);
       i69 = i61;
       i70 = i60;
       i71 = i59;
       break;
      }
      __ZN7WebCore9RenderBox14dirtyLineBoxesEb(i66, 1);
      HEAP32[i17 >> 2] = i66;
      if ((i59 | 0) != (i60 | 0)) {
       HEAP32[i61 + (i59 << 2) >> 2] = i66;
       i69 = i61;
       i70 = i60;
       i71 = i59 + 1 | 0;
       break;
      }
      i75 = i60 + 1 | 0;
      do {
       if (i61 >>> 0 > i17 >>> 0) {
        i38 = 64;
       } else {
        if ((i61 + (i60 << 2) | 0) >>> 0 <= i17 >>> 0) {
         i38 = 64;
         break;
        }
        i73 = i36 - i61 >> 2;
        i74 = i75 + (i60 >>> 2) | 0;
        i72 = i74 >>> 0 > 16 >>> 0 ? i74 : 16;
        i74 = i72 >>> 0 > i75 >>> 0 ? i72 : i75;
        do {
         if (i60 >>> 0 < i74 >>> 0) {
          if (i74 >>> 0 > 1073741823 >>> 0) {
           i38 = 71;
           break L43;
          }
          i72 = __ZN3WTF18fastMallocGoodSizeEj(i74 << 2) | 0;
          i76 = i72 >>> 2;
          i80 = __ZN3WTF10fastMallocEj(i72) | 0;
          i72 = i80;
          i81 = i61;
          _memcpy(i80 | 0, i81 | 0, i60 << 2) | 0;
          if ((i61 | 0) == 0) {
           i82 = i72;
           i83 = i76;
           break;
          }
          i80 = (i72 | 0) == (i61 | 0);
          __ZN3WTF8fastFreeEPv(i81);
          i82 = i80 ? 0 : i72;
          i83 = i80 ? 0 : i76;
         } else {
          i82 = i61;
          i83 = i60;
         }
        } while (0);
        i84 = i82 + (i73 << 2) | 0;
        i85 = i82;
        i86 = i83;
       }
      } while (0);
      do {
       if ((i38 | 0) == 64) {
        i38 = 0;
        i66 = i75 + (i60 >>> 2) | 0;
        i68 = i66 >>> 0 > 16 >>> 0 ? i66 : 16;
        i66 = i68 >>> 0 > i75 >>> 0 ? i68 : i75;
        if (i60 >>> 0 >= i66 >>> 0) {
         i84 = i17;
         i85 = i61;
         i86 = i60;
         break;
        }
        if (i66 >>> 0 > 1073741823 >>> 0) {
         i38 = 66;
         break L43;
        }
        i68 = __ZN3WTF18fastMallocGoodSizeEj(i66 << 2) | 0;
        i66 = i68 >>> 2;
        i77 = __ZN3WTF10fastMallocEj(i68) | 0;
        i68 = i77;
        i74 = i61;
        _memcpy(i77 | 0, i74 | 0, i60 << 2) | 0;
        if ((i61 | 0) == 0) {
         i84 = i17;
         i85 = i68;
         i86 = i66;
         break;
        }
        i77 = (i68 | 0) == (i61 | 0);
        __ZN3WTF8fastFreeEPv(i74);
        i84 = i17;
        i85 = i77 ? 0 : i68;
        i86 = i77 ? 0 : i66;
       }
      } while (0);
      HEAP32[i85 + (i60 << 2) >> 2] = HEAP32[i84 >> 2];
      i69 = i85;
      i70 = i86;
      i71 = i75;
     } else {
      i66 = (i63 & 768 | 0) == 256;
      if (!(i66 | (i63 & 4096 | 0) != 0)) {
       if ((HEAP32[i58 + 24 >> 2] & 4 | 0) == 0) {
        i69 = i61;
        i70 = i60;
        i71 = i59;
        break;
       }
       if ((HEAP8[i34] & 1) != 0) {
        i69 = i61;
        i70 = i60;
        i71 = i59;
        break;
       }
      }
      do {
       if (!i66) {
        if ((HEAP32[i58 + 24 >> 2] & 4 | 0) == 0) {
         break;
        }
        __ZN7WebCore12RenderInline27updateAlwaysCreateLineBoxesEb(i58, (HEAP8[i4] & 4) != 0);
       }
      } while (0);
      i66 = HEAP8[i4] & 4;
      i75 = HEAP32[i65 >> 2] | 0;
      if (i66 << 24 >> 24 == 0) {
       if ((i75 & 1 | 0) != 0) {
        i38 = 86;
       }
      } else {
       i38 = 86;
      }
      do {
       if ((i38 | 0) == 86) {
        i38 = 0;
        i77 = i66 << 24 >> 24 != 0;
        if ((i75 & 768 | 0) != 256) {
         if ((i75 & 4096 | 0) == 0) {
          __ZN7WebCore12RenderInline14dirtyLineBoxesEb(i58, i77);
          break;
         } else {
          __ZN7WebCore15RenderLineBreak14dirtyLineBoxesEb(i58, i77);
          break;
         }
        }
        i68 = i58;
        do {
         if ((i75 & 32 | 0) != 0) {
          if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i58 >> 2] | 0) + 60 >> 2] & 31](i58) | 0)) {
           break;
          }
          __ZN7WebCore13RenderCounter13updateCounterEv(i58);
         }
        } while (0);
        __ZN7WebCore10RenderText14dirtyLineBoxesEb(i68, i77);
       }
      } while (0);
      __ZN7WebCore12RenderObject16clearNeedsLayoutEv(i58);
      i69 = i61;
      i70 = i60;
      i71 = i59;
     }
    } while (0);
    i65 = __ZN7WebCoreL14bidiNextSharedINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_NS_19EmptyInlineBehaviorEPb(HEAP32[i3 >> 2] | 0, HEAP32[i32 >> 2] | 0, 0, 1, i34) | 0;
    HEAP32[i32 >> 2] = i65;
    if ((i65 | 0) == 0) {
     i38 = 33;
     break;
    } else {
     i58 = i65;
     i59 = i71;
     i60 = i70;
     i61 = i69;
     i62 = i64;
    }
   }
   if ((i38 | 0) == 66) {
    _WTFCrash();
   } else if ((i38 | 0) == 71) {
    _WTFCrash();
   } else if ((i38 | 0) == 33) {
    if ((i71 | 0) != 0) {
     i62 = 0;
     while (1) {
      i61 = HEAP32[i69 + (i62 << 2) >> 2] | 0;
      if ((HEAP32[i61 + 20 >> 2] & 31 | 0) != 0) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i61 >> 2] | 0) + 652 >> 2] & 31](i61 | 0);
      }
      i62 = i62 + 1 | 0;
      if (i62 >>> 0 >= i71 >>> 0) {
       break;
      }
     }
    }
    __ZN7WebCore15RenderBlockFlow19layoutRunsAndFloatsERNS_15LineLayoutStateEb(i1, i14, i64);
    if ((i69 | 0) == 0) {
     break;
    }
    __ZN3WTF8fastFreeEPv(i69);
    break;
   }
  }
 } while (0);
 i69 = i1 + 108 | 0;
 i64 = HEAP32[i69 >> 2] | 0;
 do {
  if ((i64 | 0) == 0) {
   i87 = 0;
  } else {
   i71 = HEAP32[i64 + 76 >> 2] | 0;
   i38 = (HEAP32[(HEAP32[i27 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i38 | 0) == 3 | (i38 | 0) == 0) {
    i88 = i1 + 56 | 0;
   } else {
    i88 = i1 + 52 | 0;
   }
   i38 = HEAP32[i88 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i28 >> 2] | 0) + 724 >> 2] & 7](i18, i25);
   i70 = (HEAP32[i18 >> 2] | 0) + i38 | 0;
   i38 = (i71 | 0) < (i70 | 0) ? i70 : i71;
   i71 = HEAP32[i69 >> 2] | 0;
   if ((((HEAP32[(HEAP32[i27 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3) - 2 | 0) >>> 0 < 2 >>> 0) {
    HEAP32[i21 >> 2] = i38;
    __ZNK7WebCore13InlineFlowBox31computeOverAnnotationAdjustmentENS_10LayoutUnitE(i22, i71, i21);
    i87 = HEAP32[i22 >> 2] | 0;
    break;
   } else {
    HEAP32[i19 >> 2] = i38;
    __ZNK7WebCore13InlineFlowBox32computeUnderAnnotationAdjustmentENS_10LayoutUnitE(i20, i71, i19);
    i87 = HEAP32[i20 >> 2] | 0;
    break;
   }
  }
 } while (0);
 i20 = (HEAP32[(HEAP32[i27 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i20 | 0) == 3 | (i20 | 0) == 0) {
  i89 = i1 + 56 | 0;
 } else {
  i89 = i1 + 52 | 0;
 }
 i20 = (HEAP32[i89 >> 2] | 0) + i87 | 0;
 i87 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 756 >> 2] & 31](i25) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i28 >> 2] | 0) + 724 >> 2] & 7](i12, i25);
 i25 = HEAP32[i12 >> 2] | 0;
 i12 = (HEAP32[(HEAP32[i27 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i12 | 0) == 3 | (i12 | 0) == 0) {
  i90 = __ZNK7WebCore9RenderBox25horizontalScrollbarHeightEv(i24) | 0;
 } else {
  i90 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 908 >> 2] & 31](i24) | 0;
 }
 i24 = i20 + i87 + i25 + i90 | 0;
 i90 = (HEAP32[(HEAP32[i27 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i90 | 0) == 3 | (i90 | 0) == 0) {
  HEAP32[i1 + 56 >> 2] = i24;
 } else {
  HEAP32[i1 + 52 >> 2] = i24;
 }
 do {
  if ((HEAP32[i33 >> 2] | 0) == 0) {
   i24 = i1 | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1040 >> 2] & 31](i24) | 0)) {
    break;
   }
   i90 = (HEAP32[(HEAP32[i27 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i90 | 0) == 3 | (i90 | 0) == 0) {
    i91 = i1 + 56 | 0;
   } else {
    i91 = i1 + 52 | 0;
   }
   i90 = HEAP32[i91 >> 2] | 0;
   __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i23, i24, 1, (HEAP32[i13 >> 2] | 0) >>> 13 & 1 ^ 1, 1);
   i24 = (HEAP32[i23 >> 2] | 0) + i90 | 0;
   i90 = (HEAP32[(HEAP32[i27 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i90 | 0) == 3 | (i90 | 0) == 0) {
    HEAP32[i1 + 56 >> 2] = i24;
    break;
   } else {
    HEAP32[i1 + 52 >> 2] = i24;
    break;
   }
  }
 } while (0);
 if (i39) {
  __ZN7WebCore15RenderBlockFlow25checkLinesForTextOverflowEv(i1);
 }
 i1 = i14 + 32 | 0;
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
 }
 i1 = i14 + 24 | 0;
 i39 = HEAP32[i1 >> 2] | 0;
 if ((i39 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i14 + 28 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i39);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15RenderBlockFlow22determineStartPositionERNS_15LineLayoutStateERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, d42 = +0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 96 | 0;
 HEAP8[i9] = 0;
 i17 = i2 | 0;
 i18 = i17 + 56 | 0;
 L1 : do {
  if ((HEAP8[i18] & 4) == 0) {
   i19 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i20 = 0;
   } else {
    i20 = (HEAP8[i19 | 0] & 2) != 0;
   }
   i19 = i10 | 0;
   HEAP32[i19 >> 2] = 0;
   HEAP32[i11 >> 2] = 0;
   i21 = i2 + 44 | 0;
   i22 = i1 | 0;
   i23 = i5 | 0;
   i24 = i1;
   i25 = i2 + 32 | 0;
   i26 = i12 | 0;
   i27 = i8 | 0;
   i28 = i6 | 0;
   i29 = i7 | 0;
   i30 = i2 + 24 | 0;
   i31 = i1 + 104 | 0;
   i32 = 0;
   L6 : while (1) {
    i33 = HEAP32[i31 >> 2] | 0;
    i34 = i33;
    if ((i33 | 0) == 0) {
     i35 = 27;
     break;
    }
    i36 = i33 | 0;
    i37 = i33 + 32 | 0;
    if ((HEAP32[i37 >> 2] & 256 | 0) != 0) {
     i38 = i34;
     i39 = i32;
     break L1;
    }
    do {
     if (i20) {
      do {
       if ((HEAP32[i21 >> 2] | 0) != 0) {
        HEAP32[i27 >> 2] = HEAP32[i33 + 80 >> 2];
        i40 = __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i22, i8) | 0;
        if ((__ZNK7WebCore13RootInlineBox16containingRegionEv(i34) | 0) == (i40 | 0)) {
         break;
        }
        i41 = HEAP32[i33 + 96 >> 2] | 0;
        __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i6, i22, i40);
        __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i7, i22, i40);
        i40 = (HEAP32[i28 >> 2] | 0) - (HEAP32[i29 >> 2] | 0) | 0;
        if ((i41 | 0) != (((i40 | 0) > 0 ? i40 : 0) | 0)) {
         i35 = 11;
         break L6;
        }
       }
      } while (0);
      HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - (HEAP32[i33 + 92 >> 2] | 0);
      __ZN7WebCore15RenderBlockFlow31adjustLinePositionForPaginationEPNS_13RootInlineBoxERNS_10LayoutUnitEPNS_16RenderFlowThreadE(i1, i34, i10, HEAP32[i21 >> 2] | 0);
      do {
       if ((HEAP32[i19 >> 2] | 0) != 0) {
        if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 1024 >> 2] & 31](i1) | 0) {
         i35 = 15;
         break L6;
        }
        if ((HEAP32[i25 >> 2] | 0) != 0) {
         i35 = 15;
         break L6;
        }
        HEAP32[i26 >> 2] = HEAP32[i19 >> 2];
        __ZN7WebCore15LineLayoutState25updateRepaintRangeFromBoxEPNS_13RootInlineBoxENS_10LayoutUnitE(i2, i34, i12);
        d42 = +(HEAP32[i19 >> 2] | 0);
        i40 = HEAP32[(HEAP32[i33 >> 2] | 0) + 24 >> 2] | 0;
        if ((HEAP32[i37 >> 2] & 2048 | 0) == 0) {
         FUNCTION_TABLE_viff[i40 & 3](i36, d42, +0);
         break;
        } else {
         FUNCTION_TABLE_viff[i40 & 3](i36, +0, d42);
         break;
        }
       }
      } while (0);
      if ((HEAP32[i21 >> 2] | 0) == 0) {
       break;
      }
      HEAP32[i23 >> 2] = HEAP32[i33 + 80 >> 2];
      __ZN7WebCore13RootInlineBox19setContainingRegionEPNS_12RenderRegionE(i34, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i22, i5) | 0);
      i40 = HEAP32[i33 + 48 >> 2] | 0;
      if ((i40 | 0) == 0) {
       break;
      }
      i41 = __ZNK7WebCore13RootInlineBox16containingRegionEv(i34) | 0;
      if ((i41 | 0) == (__ZNK7WebCore13RootInlineBox16containingRegionEv(i40) | 0)) {
       break;
      }
      i40 = i33 + 56 | 0;
      HEAP32[i40 >> 2] = HEAP32[i40 >> 2] | 8388608;
     }
    } while (0);
    HEAP8[i13] = 0;
    __ZN7WebCore15RenderBlockFlow22checkFloatsInCleanLineEPNS_13RootInlineBoxERN3WTF6VectorINS_13FloatWithRectELj0ENS3_15CrashOnOverflowEEERjRbSA_(i1, i34, i30, i11, i13, i9);
    if ((HEAP8[i13] & 1) != 0) {
     HEAP8[i18] = HEAP8[i18] | 4;
    }
    i37 = HEAP8[i9] | 0;
    if ((i37 & 1) != 0) {
     i38 = i34;
     i39 = i37;
     break L1;
    }
    if ((HEAP8[i18] & 4) == 0) {
     i31 = i33 + 52 | 0;
     i32 = i37;
    } else {
     i38 = i34;
     i39 = i37;
     break L1;
    }
   }
   if ((i35 | 0) == 11) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i33 >> 2] | 0) + 100 >> 2] & 7](i36, 1);
    i38 = i34;
    i39 = i32;
    break;
   } else if ((i35 | 0) == 15) {
    HEAP8[i18] = HEAP8[i18] | 4;
    i38 = i34;
    i39 = i32;
    break;
   } else if ((i35 | 0) == 27) {
    if ((HEAP32[i11 >> 2] | 0) >>> 0 >= (HEAP32[i25 >> 2] | 0) >>> 0) {
     i38 = 0;
     i39 = i32;
     break;
    }
    HEAP8[i18] = HEAP8[i18] | 4;
    i38 = i34;
    i39 = i32;
    break;
   }
  } else {
   i38 = 0;
   i39 = 0;
  }
 } while (0);
 L38 : do {
  if ((HEAP8[i18] & 4) == 0) {
   do {
    if ((i38 | 0) == 0) {
     i34 = HEAP32[i1 + 108 >> 2] | 0;
     if ((i34 | 0) == 0) {
      i43 = 0;
      i44 = 0;
      break L38;
     }
     if ((HEAP32[i34 + 32 >> 2] & 4096 | 0) != 0) {
      i35 = 43;
      break;
     }
     i45 = i34;
     i35 = 44;
    } else {
     i34 = HEAP32[i38 + 48 >> 2] | 0;
     i11 = i34;
     if ((i34 | 0) == 0) {
      i45 = i38;
      i35 = 44;
      break;
     }
     L44 : do {
      if ((i39 & 1) == 0) {
       do {
        if ((HEAP32[i34 + 32 >> 2] & 4096 | 0) != 0) {
         i36 = HEAP32[i34 + 64 >> 2] | 0;
         if ((i36 | 0) == 0) {
          break;
         }
         if ((HEAP32[i36 + 20 >> 2] & 768 | 0) != 256) {
          i46 = i38;
          break L44;
         }
         if ((HEAP32[i34 + 60 >> 2] | 0) >>> 0 < (HEAP32[(HEAP32[i36 + 44 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
          i46 = i38;
          break L44;
         }
        }
       } while (0);
       i46 = i11;
      } else {
       i46 = i38;
      }
     } while (0);
     if ((i46 | 0) == 0) {
      i35 = 43;
     } else {
      i45 = i46;
      i35 = 44;
     }
    }
   } while (0);
   if ((i35 | 0) == 43) {
    i43 = 0;
    i44 = HEAP32[i1 + 108 >> 2] | 0;
    break;
   } else if ((i35 | 0) == 44) {
    i43 = i45;
    i44 = HEAP32[i45 + 48 >> 2] | 0;
    break;
   }
  } else {
   __ZN7WebCore17RenderLineBoxList17deleteLineBoxTreeEv(i1 + 104 | 0);
   i43 = 0;
   i44 = 0;
  }
 } while (0);
 do {
  if ((HEAP32[i2 + 32 >> 2] | 0) == 0) {
   i47 = 0;
  } else {
   i45 = i1 + 36 | 0;
   i46 = HEAP32[(HEAP32[i45 >> 2] | 0) + 44 >> 2] | 0;
   i38 = i46 >>> 13 & 3;
   if ((i38 | 0) == 3 | (i38 | 0) == 0) {
    i48 = i1 + 56 | 0;
   } else {
    i48 = i1 + 52 | 0;
   }
   i38 = HEAP32[i48 >> 2] | 0;
   i39 = HEAP32[i1 + 104 >> 2] | 0;
   i18 = i39;
   if ((i18 | 0) == (i43 | 0)) {
    i49 = 0;
    i50 = i46;
   } else {
    i46 = i1 + 20 | 0;
    i32 = i14 | 0;
    i25 = i1 + 52 | 0;
    i11 = i1 + 56 | 0;
    i34 = 0;
    i36 = i39;
    i39 = i18;
    while (1) {
     i18 = HEAP32[i36 + 100 >> 2] | 0;
     do {
      if ((i18 | 0) == 0) {
       i51 = i34;
      } else {
       i33 = HEAP32[i18 >> 2] | 0;
       i9 = HEAP32[i18 + 8 >> 2] | 0;
       i13 = i33 + (i9 << 2) | 0;
       if ((i9 | 0) == 0) {
        i51 = i34;
        break;
       }
       i5 = ((i9 << 2) - 4 | 0) >>> 2;
       i9 = i33;
       while (1) {
        i33 = HEAP32[i9 >> 2] | 0;
        HEAP32[(__ZN7WebCore15RenderBlockFlow20insertFloatingObjectERNS_9RenderBoxE(i1, i33) | 0) + 4 >> 2] = i39;
        i12 = HEAP32[((HEAP32[i46 >> 2] & 8192 | 0) == 0 ? i33 + 44 | 0 : i33 + 48 | 0) >> 2] | 0;
        FUNCTION_TABLE_viii[HEAP32[(HEAP32[i33 >> 2] | 0) + 784 >> 2] & 1](i14, i33 | 0, HEAP32[i45 >> 2] | 0);
        i33 = i12 - (HEAP32[i32 >> 2] | 0) | 0;
        i12 = (HEAP32[(HEAP32[i45 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
        if ((i12 | 0) == 3 | (i12 | 0) == 0) {
         HEAP32[i11 >> 2] = i33;
        } else {
         HEAP32[i25 >> 2] = i33;
        }
        __ZN7WebCore15RenderBlockFlow17positionNewFloatsEv(i1) | 0;
        i9 = i9 + 4 | 0;
        if ((i9 | 0) == (i13 | 0)) {
         break;
        }
       }
       i51 = i34 + 1 + i5 | 0;
      }
     } while (0);
     i18 = HEAP32[i36 + 52 >> 2] | 0;
     i13 = i18;
     if ((i13 | 0) == (i43 | 0)) {
      break;
     } else {
      i34 = i51;
      i36 = i18;
      i39 = i13;
     }
    }
    i49 = i51;
    i50 = HEAP32[(HEAP32[i45 >> 2] | 0) + 44 >> 2] | 0;
   }
   i39 = i50 >>> 13 & 3;
   if ((i39 | 0) == 3 | (i39 | 0) == 0) {
    HEAP32[i1 + 56 >> 2] = i38;
    i47 = i49;
    break;
   } else {
    HEAP32[i1 + 52 >> 2] = i38;
    i47 = i49;
    break;
   }
  }
 } while (0);
 HEAP32[i2 + 36 >> 2] = i47;
 i47 = (i44 | 0) != 0;
 HEAP8[i17] = i47 & 1 ^ 1;
 if (i47) {
  HEAP8[i2 + 3 | 0] = (HEAP32[i44 + 32 >> 2] | 0) >>> 12 & 1;
  i47 = HEAP32[i44 + 84 >> 2] | 0;
  i17 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  if ((i17 | 0) == 3 | (i17 | 0) == 0) {
   HEAP32[i1 + 56 >> 2] = i47;
  } else {
   HEAP32[i1 + 52 >> 2] = i47;
  }
  i47 = i1 | 0;
  i17 = HEAP32[i44 + 64 >> 2] | 0;
  i49 = HEAP32[i44 + 60 >> 2] | 0;
  L92 : do {
   if ((i17 | 0) == 0) {
    i52 = 0;
   } else {
    i50 = i1 | 0;
    i51 = i17;
    i14 = 0;
    while (1) {
     if ((i51 | 0) == (i50 | 0)) {
      i52 = i14;
      break L92;
     }
     do {
      if ((HEAP32[i51 + 20 >> 2] & 768 | 0) == 256) {
       i53 = 0;
      } else {
       if ((HEAP32[i51 + 24 >> 2] & 4 | 0) == 0) {
        i53 = 0;
        break;
       }
       i53 = (((HEAP32[(HEAP32[i51 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 28 & 7) - 3 | 0) >>> 0 < 3 >>> 0 | 0;
      }
     } while (0);
     i48 = i53 + i14 | 0;
     i39 = HEAP32[i51 + 8 >> 2] | 0;
     if ((i39 | 0) == 0) {
      i52 = i48;
      break;
     } else {
      i51 = i39 | 0;
      i14 = i48;
     }
    }
   }
  } while (0);
  HEAP32[i3 >> 2] = i47;
  HEAP32[i3 + 4 >> 2] = i17;
  HEAP32[i3 + 8 >> 2] = -1;
  HEAP32[i3 + 12 >> 2] = i49;
  HEAP32[i3 + 164 >> 2] = i52;
  __ZNK7WebCore13RootInlineBox19lineBreakBidiStatusEv(i15, i44);
  HEAP32[i3 + 64 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i3 + 68 >> 2] = HEAP32[i15 + 4 >> 2];
  HEAP32[i3 + 72 >> 2] = HEAP32[i15 + 8 >> 2];
  i44 = i15 + 12 | 0;
  i15 = HEAP32[i44 >> 2] | 0;
  if ((i15 | 0) != 0) {
   i52 = i15 | 0;
   HEAP32[i52 >> 2] = (HEAP32[i52 >> 2] | 0) + 1;
  }
  i52 = i3 + 76 | 0;
  i49 = HEAP32[i52 >> 2] | 0;
  HEAP32[i52 >> 2] = i15;
  do {
   if ((i49 | 0) != 0) {
    i15 = i49 | 0;
    i52 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    if ((i52 | 0) == 0) {
     __ZN7WebCore11BidiContextD2Ev(i49);
     __ZN3WTF8fastFreeEPv(i49);
     break;
    } else {
     HEAP32[i15 >> 2] = i52;
     break;
    }
   }
  } while (0);
  i49 = HEAP32[i44 >> 2] | 0;
  if ((i49 | 0) == 0) {
   STACKTOP = i4;
   return i43 | 0;
  }
  i44 = i49 | 0;
  i52 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
  if ((i52 | 0) == 0) {
   __ZN7WebCore11BidiContextD2Ev(i49);
   __ZN3WTF8fastFreeEPv(i49);
   STACKTOP = i4;
   return i43 | 0;
  } else {
   HEAP32[i44 >> 2] = i52;
   STACKTOP = i4;
   return i43 | 0;
  }
 }
 HEAP8[i2 + 3 | 0] = 1;
 i2 = i1 | 0;
 i52 = i1 + 36 | 0;
 i44 = HEAP32[i52 >> 2] | 0;
 i49 = (HEAP32[i44 + 40 >> 2] | 0) >>> 30 & 1;
 L120 : do {
  if ((HEAP32[i44 + 48 >> 2] & 1879048192 | 0) == 1073741824) {
   i15 = HEAP32[i1 + 28 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i54 = i49;
    break;
   }
   i17 = HEAP32[i15 + 20 >> 2] | 0;
   do {
    if ((i17 & 768 | 0) == 256) {
     i55 = i15;
     i56 = i17;
     i35 = 93;
    } else {
     if ((HEAP32[i15 + 24 >> 2] & 4 | 0) == 0) {
      i57 = i15;
     } else {
      if (__ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE(i15) | 0) {
       i58 = i15;
       break;
      }
      i57 = __ZN7WebCoreL14bidiNextSharedINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_NS_19EmptyInlineBehaviorEPb(i2, i15, 0, 0, 0) | 0;
     }
     if ((i57 | 0) == 0) {
      i54 = i49;
      break L120;
     }
     i55 = i57;
     i56 = HEAP32[i57 + 20 >> 2] | 0;
     i35 = 93;
    }
   } while (0);
   do {
    if ((i35 | 0) == 93) {
     if ((i56 & 768 | 0) == 256 | (i56 & 4096 | 0) != 0) {
      i58 = i55;
      break;
     }
     if ((i56 & 64 | 0) != 0 | (i56 & 25165824 | 0) == 16777216 | (i56 & 2048 | 0) != 0) {
      i58 = i55;
      break;
     }
     i58 = __ZN7WebCoreL14bidiNextSharedINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_NS_19EmptyInlineBehaviorEPb(i2, i55, 0, 0, 0) | 0;
    }
   } while (0);
   if ((i58 | 0) == 0) {
    i54 = i49;
    break;
   } else {
    i59 = i58;
    i60 = 0;
   }
   L135 : while (1) {
    if ((i59 | 0) == 0) {
     i61 = i49;
     break;
    }
    i15 = i59 + 20 | 0;
    i17 = i59;
    if ((HEAP32[i15 >> 2] & 4096 | 0) != 0) {
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 620 >> 2] & 31](i59) | 0)) {
      i61 = i49;
      break;
     }
    }
    i47 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 368 >> 2] & 31](i59) | 0;
    i17 = HEAP32[i15 >> 2] | 0;
    do {
     if (!i47) {
      i53 = (i17 & 768 | 0) == 256;
      if (i53) {
       i62 = HEAP32[(HEAP32[i59 + 8 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i62 = HEAP32[i59 + 36 >> 2] | 0;
      }
      i14 = HEAP32[i62 + 44 >> 2] & 7;
      if ((i14 | 0) == 4 | (i14 | 0) == 0) {
       break;
      }
      if (!i53) {
       break;
      }
      i53 = HEAP32[i59 + 44 >> 2] | 0;
      if ((HEAP32[i53 + 4 >> 2] | 0) == 0) {
       break;
      }
      if ((HEAP32[i53 + 16 >> 2] & 32 | 0) == 0) {
       i63 = HEAP16[(HEAP32[i53 + 8 >> 2] | 0) + (i60 << 1) >> 1] | 0;
      } else {
       i63 = HEAPU8[(HEAP32[i53 + 8 >> 2] | 0) + i60 | 0] | 0;
      }
      if (i63 << 16 >> 16 == 10) {
       i61 = i49;
       break L135;
      }
     }
    } while (0);
    if ((i17 & 768 | 0) == 256) {
     i47 = HEAP32[i59 + 44 >> 2] | 0;
     do {
      if ((HEAP32[i47 + 4 >> 2] | 0) >>> 0 > i60 >>> 0) {
       if ((HEAP32[i47 + 16 >> 2] & 32 | 0) == 0) {
        i64 = HEAP16[(HEAP32[i47 + 8 >> 2] | 0) + (i60 << 1) >> 1] | 0;
       } else {
        i64 = HEAPU8[(HEAP32[i47 + 8 >> 2] | 0) + i60 | 0] | 0;
       }
       if (i64 << 16 >> 16 == 0) {
        break;
       }
       i53 = _u_charDirection(i64 & 65535) | 0;
       if ((i53 | 0) == 0) {
        i61 = 1;
        break L135;
       } else if ((i53 | 0) == 13 | (i53 | 0) == 1) {
        i54 = 0;
        break L120;
       }
      }
     } while (0);
     i65 = HEAP32[i15 >> 2] | 0;
    } else {
     i65 = i17;
    }
    if ((i65 & 768 | 0) == 256) {
     i47 = i60 + 1 | 0;
     if (i47 >>> 0 < (HEAP32[(HEAP32[i59 + 44 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
      i66 = i59;
      i67 = i47;
     } else {
      i35 = 121;
     }
    } else {
     i35 = 121;
    }
    if ((i35 | 0) == 121) {
     i35 = 0;
     i66 = __ZN7WebCoreL14bidiNextSharedINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_NS_19EmptyInlineBehaviorEPb(i2, i59, 0, 0, 0) | 0;
     i67 = 0;
    }
    if ((i66 | 0) == 0) {
     i61 = i49;
     break;
    } else {
     i59 = i66;
     i60 = i67;
    }
   }
   i54 = i61;
  } else {
   i54 = i49;
  }
 } while (0);
 i49 = (HEAP32[(HEAP32[i52 >> 2] | 0) + 48 >> 2] | 0) >>> 28 & 7;
 __ZN7WebCore10BidiStatusC2ENS_13TextDirectionEb(i16, i54, (i49 | 0) == 2 | (i49 | 0) == 5);
 HEAP32[i3 + 64 >> 2] = HEAP32[i16 >> 2];
 HEAP32[i3 + 68 >> 2] = HEAP32[i16 + 4 >> 2];
 HEAP32[i3 + 72 >> 2] = HEAP32[i16 + 8 >> 2];
 i49 = HEAP32[i16 + 12 >> 2] | 0;
 i16 = (i49 | 0) == 0;
 if (!i16) {
  i54 = i49 | 0;
  HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
 }
 i54 = i3 + 76 | 0;
 i52 = HEAP32[i54 >> 2] | 0;
 HEAP32[i54 >> 2] = i49;
 do {
  if ((i52 | 0) != 0) {
   i54 = i52 | 0;
   i61 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
   if ((i61 | 0) == 0) {
    __ZN7WebCore11BidiContextD2Ev(i52);
    __ZN3WTF8fastFreeEPv(i52);
    break;
   } else {
    HEAP32[i54 >> 2] = i61;
    break;
   }
  }
 } while (0);
 do {
  if (!i16) {
   i52 = i49 | 0;
   i61 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
   if ((i61 | 0) == 0) {
    __ZN7WebCore11BidiContextD2Ev(i49);
    __ZN3WTF8fastFreeEPv(i49);
    break;
   } else {
    HEAP32[i52 >> 2] = i61;
    break;
   }
  }
 } while (0);
 i49 = __ZN7WebCoreL29bidiFirstSkippingEmptyInlinesERNS_13RenderElementEPNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEE(i2, i3) | 0;
 L188 : do {
  if ((i49 | 0) == 0) {
   i68 = 0;
  } else {
   i16 = i1 | 0;
   i61 = i49;
   i52 = 0;
   while (1) {
    if ((i61 | 0) == (i16 | 0)) {
     i68 = i52;
     break L188;
    }
    do {
     if ((HEAP32[i61 + 20 >> 2] & 768 | 0) == 256) {
      i69 = 0;
     } else {
      if ((HEAP32[i61 + 24 >> 2] & 4 | 0) == 0) {
       i69 = 0;
       break;
      }
      i69 = (((HEAP32[(HEAP32[i61 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 28 & 7) - 3 | 0) >>> 0 < 3 >>> 0 | 0;
     }
    } while (0);
    i17 = i69 + i52 | 0;
    i15 = HEAP32[i61 + 8 >> 2] | 0;
    if ((i15 | 0) == 0) {
     i68 = i17;
     break;
    } else {
     i61 = i15 | 0;
     i52 = i17;
    }
   }
  }
 } while (0);
 HEAP32[i3 >> 2] = i2;
 HEAP32[i3 + 4 >> 2] = i49;
 HEAP32[i3 + 8 >> 2] = -1;
 HEAP32[i3 + 12 >> 2] = 0;
 HEAP32[i3 + 164 >> 2] = i68;
 STACKTOP = i4;
 return i43 | 0;
}
function __ZN7WebCore15RenderBlockFlow48updateShapeAndSegmentsForCurrentLineInFlowThreadERPNS_15ShapeInsideInfoERNS_15LineLayoutStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 376 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 56 | 0;
 i11 = i4 + 64 | 0;
 i12 = i4 + 72 | 0;
 i13 = i4 + 88 | 0;
 i14 = i4 + 96 | 0;
 i15 = i4 + 104 | 0;
 i16 = i4 + 120 | 0;
 i17 = i4 + 128 | 0;
 i18 = i4 + 136 | 0;
 i19 = i4 + 152 | 0;
 i20 = i4 + 160 | 0;
 i21 = i4 + 168 | 0;
 i22 = i4 + 184 | 0;
 i23 = i4 + 200 | 0;
 i24 = i4 + 216 | 0;
 i25 = i4 + 224 | 0;
 i26 = i4 + 232 | 0;
 i27 = i4 + 248 | 0;
 i28 = i4 + 256 | 0;
 i29 = i4 + 264 | 0;
 i30 = i4 + 296 | 0;
 i31 = i4 + 304 | 0;
 i32 = i4 + 312 | 0;
 i33 = i4 + 320 | 0;
 i34 = i4 + 328 | 0;
 i35 = i4 + 336 | 0;
 i36 = i4 + 344 | 0;
 i37 = i4 + 352 | 0;
 i38 = i4 + 360 | 0;
 i39 = i4 + 368 | 0;
 i40 = i1 | 0;
 i41 = i1 + 36 | 0;
 i42 = (HEAP32[(HEAP32[i41 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i42 | 0) == 3 | (i42 | 0) == 0) {
  HEAP32[i28 >> 2] = HEAP32[i1 + 56 >> 2];
 } else {
  HEAP32[i28 >> 2] = HEAP32[i1 + 52 >> 2];
 }
 i42 = __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i40, i28) | 0;
 if ((i42 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i28 = i42 + 36 | 0;
 i43 = (HEAP32[(HEAP32[i28 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i43 | 0) == 3 | (i43 | 0) == 0) {
  i44 = i42 + 56 | 0;
 } else {
  i44 = i42 + 52 | 0;
 }
 if ((HEAP32[i44 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i2 >> 2] = __ZNK7WebCore11RenderBlock15shapeInsideInfoEv(i42 | 0) | 0;
 do {
  if (__ZNK7WebCore12RenderRegion12isLastRegionEv(i42) | 0) {
   i45 = 0;
   i46 = 1;
  } else {
   i44 = HEAP32[i3 + 44 >> 2] | 0;
   i43 = i29 | 0;
   i47 = i29 + 20 | 0;
   i48 = i29 + 24 | 0;
   _memset(i29 | 0, 0, 28) | 0;
   i49 = __Znwj(3080) | 0;
   i50 = i49;
   i51 = i49 + 8 | 0;
   HEAP32[i49 >> 2] = i51;
   HEAP8[i49 + 4 | 0] = 0;
   _memset(i51 | 0, 0, 3072) | 0;
   i51 = i29 + 28 | 0;
   HEAP32[i51 >> 2] = i50;
   i49 = HEAP32[i44 + 136 >> 2] | 0;
   do {
    if ((i49 | 0) == 0) {
     i52 = i29 | 0;
     i53 = 21;
    } else {
     i44 = i23 + 8 | 0;
     i54 = i23 | 0;
     i55 = i49;
     i56 = i50;
     while (1) {
      HEAP32[i24 >> 2] = i56;
      __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore12RenderRegionELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EERKS4_PNS_24ListHashSetNodeAllocatorIS4_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_(i23, i43, i55 | 0, i24);
      if ((HEAP8[i44] & 1) != 0) {
       i57 = HEAP32[HEAP32[i54 >> 2] >> 2] | 0;
       i58 = HEAP32[i48 >> 2] | 0;
       HEAP32[i57 + 4 >> 2] = i58;
       HEAP32[i57 + 8 >> 2] = 0;
       if ((i58 | 0) == 0) {
        HEAP32[i47 >> 2] = i57;
       } else {
        HEAP32[i58 + 8 >> 2] = i57;
       }
       HEAP32[i48 >> 2] = i57;
      }
      i57 = HEAP32[i55 + 8 >> 2] | 0;
      if ((i57 | 0) == 0) {
       break;
      }
      i55 = i57;
      i56 = HEAP32[i51 >> 2] | 0;
     }
     i56 = i29 | 0;
     i55 = HEAP32[i56 >> 2] | 0;
     if ((i55 | 0) == 0) {
      i52 = i56;
      i53 = 21;
      break;
     }
     i54 = HEAP32[i29 + 8 >> 2] | 0;
     i44 = i42;
     i57 = i44 + ~(i44 << 15) | 0;
     i44 = (i57 >>> 10 ^ i57) * 9 & -1;
     i57 = i44 >>> 6 ^ i44;
     i44 = i57 + ~(i57 << 11) | 0;
     i57 = i44 >>> 16 ^ i44;
     i44 = (i57 >>> 23) + ~i57 | 0;
     i58 = i44 << 12 ^ i44;
     i44 = i58 >>> 7 ^ i58;
     i58 = i44 << 2 ^ i44;
     i44 = i58 >>> 20 ^ i58 | 1;
     i58 = i57;
     i57 = 0;
     while (1) {
      i59 = i58 & i54;
      i60 = i55 + (i59 << 2) | 0;
      i61 = HEAP32[i60 >> 2] | 0;
      i62 = i61;
      if ((i62 | 0) == 0) {
       i53 = 24;
       break;
      } else if ((i62 | 0) != (-1 | 0)) {
       if ((HEAP32[i61 >> 2] | 0) == (i42 | 0)) {
        i53 = 27;
        break;
       }
      }
      i61 = (i57 | 0) == 0 ? i44 : i57;
      i58 = i61 + i59 | 0;
      i57 = i61;
     }
     if ((i53 | 0) == 24) {
      i63 = i55 + (HEAP32[i29 + 4 >> 2] << 2) | 0;
      i64 = i56;
      break;
     } else if ((i53 | 0) == 27) {
      i63 = (i60 | 0) == 0 ? i55 + (HEAP32[i29 + 4 >> 2] << 2) | 0 : i60;
      i64 = i56;
      break;
     }
    }
   } while (0);
   if ((i53 | 0) == 21) {
    i63 = HEAP32[i29 + 4 >> 2] << 2 | 0;
    i64 = i52;
   }
   i48 = HEAP32[HEAP32[(HEAP32[i63 >> 2] | 0) + 8 >> 2] >> 2] | 0;
   i43 = HEAP32[i47 >> 2] | 0;
   if ((i43 | 0) != 0) {
    i50 = HEAP32[i51 >> 2] | 0;
    i49 = i50 + 8 | 0;
    i57 = i49;
    i58 = i49 + 3072 | 0;
    i49 = i50 | 0;
    i50 = i43;
    while (1) {
     i43 = i50 + 8 | 0;
     i44 = HEAP32[i43 >> 2] | 0;
     if (i57 >>> 0 <= i50 >>> 0 & i58 >>> 0 > i50 >>> 0) {
      HEAP32[i43 >> 2] = HEAP32[i49 >> 2];
      HEAP32[i49 >> 2] = i50;
     } else {
      __ZN3WTF8fastFreeEPv(i50);
     }
     if ((i44 | 0) == 0) {
      break;
     } else {
      i50 = i44;
     }
    }
   }
   i50 = HEAP32[i51 >> 2] | 0;
   HEAP32[i51 >> 2] = 0;
   if ((i50 | 0) != 0) {
    __ZdlPv(i50);
   }
   i50 = HEAP32[i64 >> 2] | 0;
   if ((i50 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(i50);
   }
   i50 = (i48 | 0) == 0;
   if ((HEAP32[i2 >> 2] | 0) != 0 | i50) {
    i45 = i48;
    i46 = i50;
    break;
   }
   if ((__ZNK7WebCore11RenderBlock15shapeInsideInfoEv(i48 | 0) | 0) != 0) {
    i45 = i48;
    i46 = 0;
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i30, i40, (HEAP8[i3 | 0] & 1) != 0, (HEAP32[i1 + 20 >> 2] | 0) >>> 13 & 1 ^ 1, 1);
 i64 = (HEAP32[(HEAP32[i41 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i64 | 0) == 3 | (i64 | 0) == 0) {
  i65 = i1 + 56 | 0;
 } else {
  i65 = i1 + 52 | 0;
 }
 i64 = HEAP32[i65 >> 2] | 0;
 i65 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i65 >> 2] | 0) + 864 >> 2] & 7](i31, i40);
 i63 = (HEAP32[i31 >> 2] | 0) + i64 | 0;
 i64 = i30 | 0;
 i30 = (HEAP32[i64 >> 2] | 0) + i63 | 0;
 i31 = i18;
 i52 = i42 + 124 | 0;
 HEAP32[i31 >> 2] = HEAP32[i52 >> 2];
 HEAP32[i31 + 4 >> 2] = HEAP32[i52 + 4 >> 2];
 HEAP32[i31 + 8 >> 2] = HEAP32[i52 + 8 >> 2];
 HEAP32[i31 + 12 >> 2] = HEAP32[i52 + 12 >> 2];
 __ZNK7WebCore12RenderRegion33logicalTopOfFlowThreadContentRectERKNS_10LayoutRectE(i32, i42, i18);
 i18 = (HEAP32[(HEAP32[i28 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i18 | 0) == 3 | (i18 | 0) == 0) {
  i66 = i42 + 56 | 0;
 } else {
  i66 = i42 + 52 | 0;
 }
 i18 = HEAP32[i66 >> 2] | 0;
 i66 = i32 | 0;
 i32 = HEAP32[i66 >> 2] | 0;
 i31 = i42 | 0;
 i29 = i42;
 i53 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i29 >> 2] | 0) + 752 >> 2] & 31](i31) | 0;
 i60 = i42;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i60 >> 2] | 0) + 720 >> 2] & 7](i17, i31);
 i24 = HEAP32[i17 >> 2] | 0;
 i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i29 >> 2] | 0) + 756 >> 2] & 31](i31) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i60 >> 2] | 0) + 724 >> 2] & 7](i16, i31);
 i31 = i32 + i18 - i53 - i24 - i17 - (HEAP32[i16 >> 2] | 0) | 0;
 i16 = HEAP32[i2 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i67 = 2147483647;
 } else {
  i17 = i16 | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 16 >> 2] & 7](i12, i17);
  i24 = (HEAP32[i12 + 12 >> 2] | 0) + (HEAP32[i12 + 4 >> 2] | 0) | 0;
  i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 12 >> 2] & 31](i17) | 0;
  if ((i12 | 0) == 1) {
   i17 = HEAP32[i16 + 12 >> 2] | 0;
   __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i11, i17 + 60 | 0, (HEAP32[(HEAP32[i17 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
   i68 = -(HEAP32[i11 >> 2] | 0) | 0;
  } else if ((i12 | 0) == 3) {
   i11 = HEAP32[i16 + 12 >> 2] | 0;
   i68 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 752 >> 2] & 31](i11 | 0) | 0;
  } else if ((i12 | 0) == 4) {
   i12 = HEAP32[i16 + 12 >> 2] | 0;
   i16 = i12 | 0;
   i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 752 >> 2] & 31](i16) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 720 >> 2] & 7](i10, i16);
   i68 = (HEAP32[i10 >> 2] | 0) + i11 | 0;
  } else {
   i68 = 0;
  }
  i11 = i9;
  HEAP32[i11 >> 2] = HEAP32[i52 >> 2];
  HEAP32[i11 + 4 >> 2] = HEAP32[i52 + 4 >> 2];
  HEAP32[i11 + 8 >> 2] = HEAP32[i52 + 8 >> 2];
  HEAP32[i11 + 12 >> 2] = HEAP32[i52 + 12 >> 2];
  __ZNK7WebCore12RenderRegion33logicalTopOfFlowThreadContentRectERKNS_10LayoutRectE(i33, i42, i9);
  i67 = i24 + i68 + (HEAP32[i33 >> 2] | 0) | 0;
 }
 i33 = i3 + 40 | 0;
 i3 = (HEAP32[(HEAP32[i28 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i3 | 0) == 3 | (i3 | 0) == 0) {
  i69 = i42 + 56 | 0;
 } else {
  i69 = i42 + 52 | 0;
 }
 i3 = (HEAP32[i33 >> 2] | 0) >= (HEAP32[i69 >> 2] | 0);
 do {
  if (i46) {
   i70 = i30;
   i71 = i63;
   i72 = i42;
  } else {
   if (!((i30 | 0) > (i31 | 0) | i3 | (i67 | 0) < (i30 | 0))) {
    i70 = i30;
    i71 = i63;
    i72 = i42;
    break;
   }
   i69 = (HEAP32[(HEAP32[i41 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i69 | 0) == 3 | (i69 | 0) == 0) {
    i73 = i1 + 56 | 0;
   } else {
    i73 = i1 + 52 | 0;
   }
   i28 = (HEAP32[i73 >> 2] | 0) + (i31 - i63) | 0;
   if ((i69 | 0) == 3 | (i69 | 0) == 0) {
    HEAP32[i1 + 56 >> 2] = i28;
   } else {
    HEAP32[i1 + 52 >> 2] = i28;
   }
   HEAP32[i2 >> 2] = __ZNK7WebCore11RenderBlock15shapeInsideInfoEv(i45 | 0) | 0;
   i28 = (HEAP32[(HEAP32[i41 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i28 | 0) == 3 | (i28 | 0) == 0) {
    i74 = i1 + 56 | 0;
   } else {
    i74 = i1 + 52 | 0;
   }
   i28 = HEAP32[i74 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i65 >> 2] | 0) + 864 >> 2] & 7](i34, i40);
   i69 = (HEAP32[i34 >> 2] | 0) + i28 | 0;
   i28 = (HEAP32[i64 >> 2] | 0) + i69 | 0;
   i68 = i6;
   i24 = i45 + 124 | 0;
   HEAP32[i68 >> 2] = HEAP32[i24 >> 2];
   HEAP32[i68 + 4 >> 2] = HEAP32[i24 + 4 >> 2];
   HEAP32[i68 + 8 >> 2] = HEAP32[i24 + 8 >> 2];
   HEAP32[i68 + 12 >> 2] = HEAP32[i24 + 12 >> 2];
   __ZNK7WebCore12RenderRegion33logicalTopOfFlowThreadContentRectERKNS_10LayoutRectE(i35, i45, i6);
   HEAP32[i66 >> 2] = HEAP32[i35 >> 2];
   i24 = i45 | 0;
   i68 = i45;
   FUNCTION_TABLE_ii[HEAP32[(HEAP32[i68 >> 2] | 0) + 752 >> 2] & 31](i24) | 0;
   i9 = i45;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 720 >> 2] & 7](i5, i24);
   FUNCTION_TABLE_ii[HEAP32[(HEAP32[i68 >> 2] | 0) + 756 >> 2] & 31](i24) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 724 >> 2] & 7](i7, i24);
   if (!i3) {
    i70 = i28;
    i71 = i69;
    i72 = i45;
    break;
   }
   HEAP32[i33 >> 2] = 0;
   i70 = i28;
   i71 = i69;
   i72 = i45;
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i45 = HEAP32[i66 >> 2] | 0;
 i66 = (i70 | 0) <= ((HEAP32[i64 >> 2] | 0) + i45 | 0);
 i70 = HEAP32[i33 >> 2] | 0;
 i3 = i72 | 0;
 i7 = i72;
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 752 >> 2] & 31](i3) | 0;
 i35 = i72;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i35 >> 2] | 0) + 720 >> 2] & 7](i8, i3);
 if (i66 | (i71 - i45 | 0) < (i70 - i5 - (HEAP32[i8 >> 2] | 0) | 0)) {
  i8 = HEAP32[i33 >> 2] | 0;
  do {
   if ((i8 | 0) == 0) {
    i5 = HEAP32[i2 >> 2] | 0;
    i70 = i5 | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 16 >> 2] & 7](i15, i70);
    i45 = HEAP32[i15 + 4 >> 2] | 0;
    i66 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 31](i70) | 0;
    if ((i66 | 0) == 1) {
     i70 = HEAP32[i5 + 12 >> 2] | 0;
     __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i14, i70 + 60 | 0, (HEAP32[(HEAP32[i70 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
     i75 = -(HEAP32[i14 >> 2] | 0) | 0;
    } else if ((i66 | 0) == 3) {
     i70 = HEAP32[i5 + 12 >> 2] | 0;
     i75 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i70 >> 2] | 0) + 752 >> 2] & 31](i70 | 0) | 0;
    } else if ((i66 | 0) == 4) {
     i66 = HEAP32[i5 + 12 >> 2] | 0;
     i5 = i66 | 0;
     i70 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i66 >> 2] | 0) + 752 >> 2] & 31](i5) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i66 >> 2] | 0) + 720 >> 2] & 7](i13, i5);
     i75 = (HEAP32[i13 >> 2] | 0) + i70 | 0;
    } else {
     i75 = 0;
    }
    if ((i75 + i45 | 0) <= 0) {
     i76 = 0;
     break;
    }
    i45 = HEAP32[i2 >> 2] | 0;
    i70 = i45 | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i45 >> 2] | 0) + 16 >> 2] & 7](i21, i70);
    i5 = HEAP32[i21 + 4 >> 2] | 0;
    i66 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i45 >> 2] | 0) + 12 >> 2] & 31](i70) | 0;
    if ((i66 | 0) == 1) {
     i70 = HEAP32[i45 + 12 >> 2] | 0;
     __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i20, i70 + 60 | 0, (HEAP32[(HEAP32[i70 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
     i77 = -(HEAP32[i20 >> 2] | 0) | 0;
    } else if ((i66 | 0) == 3) {
     i70 = HEAP32[i45 + 12 >> 2] | 0;
     i77 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i70 >> 2] | 0) + 752 >> 2] & 31](i70 | 0) | 0;
    } else if ((i66 | 0) == 4) {
     i66 = HEAP32[i45 + 12 >> 2] | 0;
     i45 = i66 | 0;
     i70 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i66 >> 2] | 0) + 752 >> 2] & 31](i45) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i66 >> 2] | 0) + 720 >> 2] & 7](i19, i45);
     i77 = (HEAP32[i19 >> 2] | 0) + i70 | 0;
    } else {
     i77 = 0;
    }
    i76 = i77 + i5 | 0;
   } else {
    i76 = i8;
   }
  } while (0);
  i8 = i22;
  i77 = i72 + 124 | 0;
  HEAP32[i8 >> 2] = HEAP32[i77 >> 2];
  HEAP32[i8 + 4 >> 2] = HEAP32[i77 + 4 >> 2];
  HEAP32[i8 + 8 >> 2] = HEAP32[i77 + 8 >> 2];
  HEAP32[i8 + 12 >> 2] = HEAP32[i77 + 12 >> 2];
  __ZNK7WebCore12RenderRegion33logicalTopOfFlowThreadContentRectERKNS_10LayoutRectE(i36, i72, i22);
  i22 = HEAP32[i36 >> 2] | 0;
  i36 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 752 >> 2] & 31](i3) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i35 >> 2] | 0) + 720 >> 2] & 7](i25, i3);
  i8 = i76 - i71 + i22 - i36 - (HEAP32[i25 >> 2] | 0) | 0;
  i25 = (HEAP32[(HEAP32[i41 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  if ((i25 | 0) == 3 | (i25 | 0) == 0) {
   i78 = i1 + 56 | 0;
  } else {
   i78 = i1 + 52 | 0;
  }
  i41 = (HEAP32[i78 >> 2] | 0) + i8 | 0;
  if ((i25 | 0) == 3 | (i25 | 0) == 0) {
   HEAP32[i1 + 56 >> 2] = i41;
  } else {
   HEAP32[i1 + 52 >> 2] = i41;
  }
  HEAP32[i33 >> 2] = 0;
  i79 = i8 + i71 | 0;
  i80 = i77;
 } else {
  i79 = i71;
  i80 = i72 + 124 | 0;
 }
 i71 = i26;
 HEAP32[i71 >> 2] = HEAP32[i80 >> 2];
 HEAP32[i71 + 4 >> 2] = HEAP32[i80 + 4 >> 2];
 HEAP32[i71 + 8 >> 2] = HEAP32[i80 + 8 >> 2];
 HEAP32[i71 + 12 >> 2] = HEAP32[i80 + 12 >> 2];
 __ZNK7WebCore12RenderRegion33logicalTopOfFlowThreadContentRectERKNS_10LayoutRectE(i37, i72, i26);
 i26 = i79 - (HEAP32[i37 >> 2] | 0) | 0;
 i37 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 752 >> 2] & 31](i3) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i35 >> 2] | 0) + 720 >> 2] & 7](i27, i3);
 i3 = i37 + i26 + (HEAP32[i27 >> 2] | 0) | 0;
 i27 = HEAP32[i2 >> 2] | 0;
 HEAP32[i38 >> 2] = 0;
 HEAP32[i38 + 4 >> 2] = i3;
 HEAP32[i39 >> 2] = HEAP32[i64 >> 2];
 __ZN7WebCore15ShapeInsideInfo21updateSegmentsForLineENS_10LayoutSizeENS_10LayoutUnitE(i27, i38, i39) | 0;
 if (!(__ZNK7WebCore12RenderRegion12isLastRegionEv(i72) | 0)) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCoreL42pushShapeContentOverflowBelowTheContentBoxEPNS_15RenderBlockFlowEPNS_15ShapeInsideInfoENS_10LayoutUnitES4_(i1, HEAP32[i2 >> 2] | 0, i3, HEAP32[i64 >> 2] | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL27constructBidiRunsForSegmentERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERNS_11BidiRunListIS2_EERKS1_NS_23VisualDirectionOverrideEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 272 | 0;
 i7 = i6 | 0;
 i8 = i6 + 256 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE21createBidiRunsForLineERKS1_NS_23VisualDirectionOverrideEb(i1, i3, i4, i5);
 i4 = i1 + 168 | 0;
 i10 = i1 + 176 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i12 = i4 | 0;
 i13 = i7 | 0;
 i14 = i7 + 4 | 0;
 i15 = i7 + 8 | 0;
 i16 = i7 + 12 | 0;
 i17 = i7 + 16 | 0;
 i18 = i7 + 20 | 0;
 i19 = i7 + 24 | 0;
 i20 = i7 + 28 | 0;
 i21 = i7 + 32 | 0;
 i22 = i7 + 36 | 0;
 i23 = i7 + 40 | 0;
 i24 = i7 + 44 | 0;
 i25 = i7 + 48 | 0;
 i26 = i7 + 52 | 0;
 i27 = i7 + 56 | 0;
 i28 = i7 + 60 | 0;
 i29 = i7 + 64 | 0;
 i30 = i7 + 68 | 0;
 i31 = i7 + 72 | 0;
 i32 = i7 + 76 | 0;
 i33 = i7 + 80 | 0;
 i34 = i7 + 84 | 0;
 i35 = i7 + 88 | 0;
 i36 = i7 + 92 | 0;
 i37 = i7 + 96 | 0;
 i38 = i7 + 100 | 0;
 i39 = i7 + 104 | 0;
 i40 = i7 + 108 | 0;
 i41 = i7 + 112 | 0;
 i42 = i7 + 116 | 0;
 i43 = i7 + 120 | 0;
 i44 = i7 + 124 | 0;
 i45 = i7 + 192 | 0;
 i46 = i7 + 180 | 0;
 i47 = i44;
 i48 = i7 + 164 | 0;
 i49 = i7 + 184 | 0;
 i50 = i7 + 188 | 0;
 i51 = i8 | 0;
 i52 = i8 + 4 | 0;
 i53 = i8 + 8 | 0;
 i54 = i8 + 12 | 0;
 i55 = i7 + 136 | 0;
 i56 = i7 + 176 | 0;
 i57 = i7 + 168 | 0;
 i58 = i1 + 172 | 0;
 i1 = i7 + 172 | 0;
 i59 = i2 | 0;
 i60 = i44 | 0;
 i44 = i7 + 128 | 0;
 i61 = i2 + 4 | 0;
 i62 = i2 + 8 | 0;
 i63 = i7 + 132 | 0;
 i64 = i2 + 12 | 0;
 i2 = 0;
 i65 = i9 | 0;
 i9 = i11;
 L4 : while (1) {
  i11 = _llvm_uadd_with_overflow_i32(i9 | 0, -1 | 0) | 0;
  if (!tempRet0) {
   i66 = 4;
   break;
  }
  i67 = i11;
  i11 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i67 << 2) >> 2] | 0;
  HEAP32[i10 >> 2] = i67;
  i67 = i11 + 16 | 0;
  i68 = HEAP32[i67 >> 2] | 0;
  L7 : do {
   if ((i68 | 0) == 0 | (i68 | 0) == (i65 | 0)) {
    i69 = 0;
   } else {
    i70 = i68;
    i71 = 0;
    while (1) {
     i72 = HEAP32[i70 + 20 >> 2] & 768;
     if ((i71 | 0) != 0) {
      if ((i72 | 0) == 256) {
       i69 = i71;
       break L7;
      }
      if ((HEAP32[i70 + 24 >> 2] & 4 | 0) == 0) {
       i69 = i71;
       break L7;
      }
      if ((((HEAP32[(HEAP32[i70 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 28 & 7) - 3 | 0) >>> 0 >= 3 >>> 0) {
       i69 = i71;
       break L7;
      }
     }
     do {
      if ((i72 | 0) == 256) {
       i73 = i71;
      } else {
       if ((HEAP32[i70 + 24 >> 2] & 4 | 0) == 0) {
        i73 = i71;
        break;
       }
       i73 = (((HEAP32[(HEAP32[i70 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 28 & 7) - 3 | 0) >>> 0 < 3 >>> 0 ? i70 : i71;
      }
     } while (0);
     i72 = HEAP32[i70 + 8 >> 2] | 0;
     i74 = i72 | 0;
     if ((i72 | 0) == 0 | (i74 | 0) == (i65 | 0)) {
      i69 = i73;
      break;
     } else {
      i70 = i74;
      i71 = i73;
     }
    }
   }
  } while (0);
  HEAP32[i13 >> 2] = 0;
  HEAP32[i14 >> 2] = 0;
  HEAP32[i15 >> 2] = -1;
  HEAP32[i16 >> 2] = 0;
  HEAP32[i17 >> 2] = 0;
  HEAP32[i18 >> 2] = 0;
  HEAP32[i19 >> 2] = -1;
  HEAP32[i20 >> 2] = 0;
  HEAP32[i21 >> 2] = 0;
  HEAP32[i22 >> 2] = 0;
  HEAP32[i23 >> 2] = -1;
  HEAP32[i24 >> 2] = 0;
  HEAP32[i25 >> 2] = 0;
  HEAP32[i26 >> 2] = 0;
  HEAP32[i27 >> 2] = -1;
  HEAP32[i28 >> 2] = 0;
  HEAP32[i29 >> 2] = 10;
  HEAP32[i30 >> 2] = 10;
  HEAP32[i31 >> 2] = 10;
  HEAP32[i32 >> 2] = 0;
  HEAP32[i33 >> 2] = 10;
  HEAP32[i34 >> 2] = 0;
  HEAP32[i35 >> 2] = 0;
  HEAP32[i36 >> 2] = -1;
  HEAP32[i37 >> 2] = 0;
  HEAP8[i38] = 0;
  HEAP32[i39 >> 2] = 0;
  HEAP32[i40 >> 2] = 0;
  HEAP32[i41 >> 2] = -1;
  HEAP32[i42 >> 2] = 0;
  HEAP8[i43] = 1;
  _memset(i47 | 0, 0, 37) | 0;
  _memset(i48 | 0, 0, 16) | 0;
  HEAP32[i46 >> 2] = i45;
  HEAP32[i49 >> 2] = 8;
  HEAP32[i50 >> 2] = 0;
  i71 = i69;
  i70 = HEAP32[i69 + 36 >> 2] | 0;
  i74 = (HEAP32[i70 + 48 >> 2] | 0) >>> 28 & 7;
  L20 : do {
   if ((i74 | 0) == 4) {
    i72 = HEAP32[i67 >> 2] | 0;
    if ((i72 | 0) == 0) {
     i75 = i2;
     break;
    } else {
     i76 = i72;
     i77 = 0;
    }
    L22 : while (1) {
     if ((i76 | 0) == 0) {
      i78 = i2;
      break;
     }
     i72 = i76 + 20 | 0;
     i79 = i76;
     if ((HEAP32[i72 >> 2] & 4096 | 0) != 0) {
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i79 >> 2] | 0) + 620 >> 2] & 31](i76) | 0)) {
       i78 = i2;
       break;
      }
     }
     i80 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i79 >> 2] | 0) + 368 >> 2] & 31](i76) | 0;
     i79 = HEAP32[i72 >> 2] | 0;
     do {
      if (!i80) {
       i81 = (i79 & 768 | 0) == 256;
       if (i81) {
        i82 = HEAP32[(HEAP32[i76 + 8 >> 2] | 0) + 36 >> 2] | 0;
       } else {
        i82 = HEAP32[i76 + 36 >> 2] | 0;
       }
       i83 = HEAP32[i82 + 44 >> 2] & 7;
       if ((i83 | 0) == 4 | (i83 | 0) == 0) {
        break;
       }
       if (!i81) {
        break;
       }
       i81 = HEAP32[i76 + 44 >> 2] | 0;
       if ((HEAP32[i81 + 4 >> 2] | 0) == 0) {
        break;
       }
       if ((HEAP32[i81 + 16 >> 2] & 32 | 0) == 0) {
        i84 = HEAP16[(HEAP32[i81 + 8 >> 2] | 0) + (i77 << 1) >> 1] | 0;
       } else {
        i84 = HEAPU8[(HEAP32[i81 + 8 >> 2] | 0) + i77 | 0] | 0;
       }
       if (i84 << 16 >> 16 == 10) {
        i78 = i2;
        break L22;
       }
      }
     } while (0);
     if ((i79 & 768 | 0) == 256) {
      i80 = HEAP32[i76 + 44 >> 2] | 0;
      do {
       if ((HEAP32[i80 + 4 >> 2] | 0) >>> 0 > i77 >>> 0) {
        if ((HEAP32[i80 + 16 >> 2] & 32 | 0) == 0) {
         i85 = HEAP16[(HEAP32[i80 + 8 >> 2] | 0) + (i77 << 1) >> 1] | 0;
        } else {
         i85 = HEAPU8[(HEAP32[i80 + 8 >> 2] | 0) + i77 | 0] | 0;
        }
        if (i85 << 16 >> 16 == 0) {
         break;
        }
        i81 = _u_charDirection(i85 & 65535) | 0;
        if ((i81 | 0) == 0) {
         i78 = 1;
         break L22;
        } else if ((i81 | 0) == 13 | (i81 | 0) == 1) {
         i75 = 0;
         break L20;
        }
       }
      } while (0);
      i86 = HEAP32[i72 >> 2] | 0;
     } else {
      i86 = i79;
     }
     if ((i86 & 768 | 0) == 256) {
      i80 = i77 + 1 | 0;
      if (i80 >>> 0 < (HEAP32[(HEAP32[i76 + 44 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
       i87 = i76;
       i88 = i80;
      } else {
       i66 = 40;
      }
     } else {
      i66 = 40;
     }
     if ((i66 | 0) == 40) {
      i66 = 0;
      i87 = __ZN7WebCoreL14bidiNextSharedINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_NS_19EmptyInlineBehaviorEPb(i71, i76, 0, 0, 0) | 0;
      i88 = 0;
     }
     if ((i87 | 0) == 0) {
      i78 = i2;
      break;
     } else {
      i76 = i87;
      i77 = i88;
     }
    }
    i75 = i78;
   } else {
    i75 = (HEAP32[i70 + 40 >> 2] | 0) >>> 30 & 1;
   }
  } while (0);
  __ZN7WebCore10BidiStatusC2ENS_13TextDirectionEb(i8, i75, (i74 | 0) == 2 | (i74 | 0) == 5);
  HEAP32[i29 >> 2] = HEAP32[i51 >> 2];
  HEAP32[i30 >> 2] = HEAP32[i52 >> 2];
  HEAP32[i31 >> 2] = HEAP32[i53 >> 2];
  i70 = HEAP32[i54 >> 2] | 0;
  i67 = (i70 | 0) == 0;
  if (!i67) {
   i80 = i70 | 0;
   HEAP32[i80 >> 2] = (HEAP32[i80 >> 2] | 0) + 1;
  }
  i80 = HEAP32[i32 >> 2] | 0;
  HEAP32[i32 >> 2] = i70;
  do {
   if ((i80 | 0) != 0) {
    i81 = i80 | 0;
    i83 = (HEAP32[i81 >> 2] | 0) - 1 | 0;
    if ((i83 | 0) == 0) {
     __ZN7WebCore11BidiContextD2Ev(i80);
     __ZN3WTF8fastFreeEPv(i80);
     break;
    } else {
     HEAP32[i81 >> 2] = i83;
     break;
    }
   }
  } while (0);
  do {
   if (!i67) {
    i80 = i70 | 0;
    i74 = (HEAP32[i80 >> 2] | 0) - 1 | 0;
    if ((i74 | 0) == 0) {
     __ZN7WebCore11BidiContextD2Ev(i70);
     __ZN3WTF8fastFreeEPv(i70);
     break;
    } else {
     HEAP32[i80 >> 2] = i74;
     break;
    }
   }
  } while (0);
  do {
   if ((__ZN7WebCoreL29bidiFirstSkippingEmptyInlinesERNS_13RenderElementEPNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEE(i71, i7) | 0) == 0) {
    i89 = i65;
   } else {
    i70 = HEAP32[i11 + 8 >> 2] | 0;
    HEAP32[i13 >> 2] = i71;
    HEAP32[i14 >> 2] = i68;
    HEAP32[i15 >> 2] = -1;
    HEAP32[i16 >> 2] = i70;
    __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE21createBidiRunsForLineERKS1_NS_23VisualDirectionOverrideEb(i7, i3, 0, i5);
    if ((HEAP32[i55 >> 2] | 0) != 0) {
     i70 = HEAP32[i59 >> 2] | 0;
     if ((i70 | 0) == (i11 | 0)) {
      HEAP32[i59 >> 2] = HEAP32[i60 >> 2];
     } else {
      i67 = i70;
      while (1) {
       i90 = i67 + 4 | 0;
       i67 = HEAP32[i90 >> 2] | 0;
       if ((i67 | 0) == (i11 | 0)) {
        break;
       }
      }
      HEAP32[i90 >> 2] = HEAP32[i60 >> 2];
     }
     HEAP32[(HEAP32[i44 >> 2] | 0) + 4 >> 2] = HEAP32[i11 + 4 >> 2];
     if ((HEAP32[i61 >> 2] | 0) == (i11 | 0)) {
      HEAP32[i61 >> 2] = HEAP32[i44 >> 2];
     }
     if ((HEAP32[i62 >> 2] | 0) == (i11 | 0)) {
      HEAP32[i62 >> 2] = HEAP32[i63 >> 2];
     }
     HEAP32[i64 >> 2] = (HEAP32[i55 >> 2] | 0) - 1 + (HEAP32[i64 >> 2] | 0);
     if ((i11 | 0) != 0) {
      __ZN7WebCore7BidiRunD1Ev(i11);
      __ZdlPv(i11 | 0);
     }
     _memset(i47 | 0, 0, 16) | 0;
    }
    i67 = HEAP32[i56 >> 2] | 0;
    if ((i67 | 0) == 0) {
     i89 = i65;
     break;
    }
    i70 = HEAP32[i57 >> 2] | 0;
    i74 = HEAP32[i10 >> 2] | 0;
    i80 = i74 + i67 | 0;
    if (i80 >>> 0 > (HEAP32[i58 >> 2] | 0) >>> 0) {
     __ZN3WTF6VectorIPN7WebCore7BidiRunELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i80);
     i91 = HEAP32[i10 >> 2] | 0;
    } else {
     i91 = i74;
    }
    if (i80 >>> 0 < i91 >>> 0) {
     i66 = 71;
     break L4;
    }
    i74 = HEAP32[i12 >> 2] | 0;
    i83 = 0;
    while (1) {
     HEAP32[i74 + (i83 + i91 << 2) >> 2] = HEAP32[i70 + (i83 << 2) >> 2];
     i83 = i83 + 1 | 0;
     if (i83 >>> 0 >= i67 >>> 0) {
      break;
     }
    }
    HEAP32[i10 >> 2] = i80;
    if ((HEAP32[i1 >> 2] | 0) == 0) {
     i89 = i69;
     break;
    }
    if ((HEAP32[i56 >> 2] | 0) != 0) {
     HEAP32[i56 >> 2] = 0;
    }
    i67 = HEAP32[i57 >> 2] | 0;
    if ((i67 | 0) == 0) {
     i89 = i69;
     break;
    }
    HEAP32[i57 >> 2] = 0;
    HEAP32[i1 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i67);
    i89 = i69;
   }
  } while (0);
  __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEED2Ev(i7);
  i11 = HEAP32[i10 >> 2] | 0;
  if ((i11 | 0) == 0) {
   i66 = 82;
   break;
  } else {
   i2 = i75;
   i65 = i89;
   i9 = i11;
  }
 }
 if ((i66 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i66 | 0) == 71) {
  _WTFCrash();
 } else if ((i66 | 0) == 82) {
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore15RenderBlockFlow21linkToEndLineIfNeededERNS_15LineLayoutStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, d40 = +0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 216 | 0;
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
 i15 = i3 + 104 | 0;
 i16 = i3 + 144 | 0;
 i17 = i3 + 152 | 0;
 i18 = i3 + 160 | 0;
 i19 = i3 + 176 | 0;
 i20 = i3 + 192 | 0;
 i21 = i3 + 200 | 0;
 i22 = i3 + 208 | 0;
 i23 = i22;
 i24 = HEAP32[i2 + 16 >> 2] | 0;
 L1 : do {
  if ((i24 | 0) != 0) {
   if ((HEAP8[i2 + 56 | 0] & 1) == 0) {
    i25 = i4 | 0;
    i26 = i24;
    while (1) {
     HEAP32[i25 >> 2] = 0;
     __ZN7WebCore15LineLayoutState25updateRepaintRangeFromBoxEPNS_13RootInlineBoxENS_10LayoutUnitE(i2, i26, i4);
     i27 = HEAP32[i26 + 52 >> 2] | 0;
     __ZN7WebCore13InlineFlowBox10deleteLineEv(i26 | 0);
     if ((i27 | 0) == 0) {
      break L1;
     } else {
      i26 = i27;
     }
    }
   }
   i26 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
   if ((i26 | 0) == 0) {
    i28 = 0;
   } else {
    i28 = (HEAP8[i26 | 0] & 2) != 0;
   }
   i26 = i1 + 36 | 0;
   i25 = (HEAP32[(HEAP32[i26 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i25 | 0) == 3 | (i25 | 0) == 0) {
    i29 = i1 + 56 | 0;
   } else {
    i29 = i1 + 52 | 0;
   }
   i25 = i10 | 0;
   HEAP32[i25 >> 2] = (HEAP32[i29 >> 2] | 0) - (HEAP32[i2 + 12 >> 2] | 0);
   i27 = i2 + 44 | 0;
   i30 = i1 + 20 | 0;
   i31 = i12 | 0;
   i32 = i1 + 52 | 0;
   i33 = i1 + 56 | 0;
   i34 = i1 | 0;
   i35 = i5 | 0;
   i36 = i11 | 0;
   i37 = i24;
   while (1) {
    __ZN7WebCore13InlineFlowBox10attachLineEv(i37 | 0);
    if (i28) {
     HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) - (HEAP32[i37 + 92 >> 2] | 0);
     __ZN7WebCore15RenderBlockFlow31adjustLinePositionForPaginationEPNS_13RootInlineBoxERNS_10LayoutUnitEPNS_16RenderFlowThreadE(i1, i37, i10, HEAP32[i27 >> 2] | 0);
    }
    i38 = HEAP32[i25 >> 2] | 0;
    do {
     if ((i38 | 0) != 0) {
      HEAP32[i36 >> 2] = i38;
      __ZN7WebCore15LineLayoutState25updateRepaintRangeFromBoxEPNS_13RootInlineBoxENS_10LayoutUnitE(i2, i37, i11);
      i39 = i37 | 0;
      d40 = +(HEAP32[i25 >> 2] | 0);
      i41 = HEAP32[(HEAP32[i37 >> 2] | 0) + 24 >> 2] | 0;
      if ((HEAP32[i37 + 32 >> 2] & 2048 | 0) == 0) {
       FUNCTION_TABLE_viff[i41 & 3](i39, d40, +0);
       break;
      } else {
       FUNCTION_TABLE_viff[i41 & 3](i39, +0, d40);
       break;
      }
     }
    } while (0);
    do {
     if ((HEAP32[i27 >> 2] | 0) != 0) {
      HEAP32[i35 >> 2] = HEAP32[i37 + 80 >> 2];
      __ZN7WebCore13RootInlineBox19setContainingRegionEPNS_12RenderRegionE(i37, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i34, i5) | 0);
      i38 = HEAP32[i37 + 48 >> 2] | 0;
      if ((i38 | 0) == 0) {
       break;
      }
      i39 = __ZNK7WebCore13RootInlineBox16containingRegionEv(i37) | 0;
      if ((i39 | 0) == (__ZNK7WebCore13RootInlineBox16containingRegionEv(i38) | 0)) {
       break;
      }
      i38 = i37 + 56 | 0;
      HEAP32[i38 >> 2] = HEAP32[i38 >> 2] | 8388608;
     }
    } while (0);
    i38 = HEAP32[i37 + 100 >> 2] | 0;
    do {
     if ((i38 | 0) != 0) {
      i39 = HEAP32[i38 >> 2] | 0;
      i41 = HEAP32[i38 + 8 >> 2] | 0;
      i42 = i39 + (i41 << 2) | 0;
      if ((i41 | 0) == 0) {
       break;
      } else {
       i43 = i39;
      }
      while (1) {
       i39 = HEAP32[i43 >> 2] | 0;
       HEAP32[(__ZN7WebCore15RenderBlockFlow20insertFloatingObjectERNS_9RenderBoxE(i1, i39) | 0) + 4 >> 2] = i37;
       i41 = HEAP32[((HEAP32[i30 >> 2] & 8192 | 0) == 0 ? i39 + 44 | 0 : i39 + 48 | 0) >> 2] | 0;
       FUNCTION_TABLE_viii[HEAP32[(HEAP32[i39 >> 2] | 0) + 784 >> 2] & 1](i12, i39 | 0, HEAP32[i26 >> 2] | 0);
       i39 = (HEAP32[i25 >> 2] | 0) + (i41 - (HEAP32[i31 >> 2] | 0)) | 0;
       i41 = (HEAP32[(HEAP32[i26 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
       if ((i41 | 0) == 3 | (i41 | 0) == 0) {
        HEAP32[i33 >> 2] = i39;
       } else {
        HEAP32[i32 >> 2] = i39;
       }
       __ZN7WebCore15RenderBlockFlow17positionNewFloatsEv(i1) | 0;
       i43 = i43 + 4 | 0;
       if ((i43 | 0) == (i42 | 0)) {
        break;
       }
      }
     }
    } while (0);
    i37 = HEAP32[i37 + 52 >> 2] | 0;
    if ((i37 | 0) == 0) {
     break;
    }
   }
   i37 = HEAP32[(HEAP32[i1 + 108 >> 2] | 0) + 84 >> 2] | 0;
   i32 = (HEAP32[(HEAP32[i26 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i32 | 0) == 3 | (i32 | 0) == 0) {
    HEAP32[i1 + 56 >> 2] = i37;
    break;
   } else {
    HEAP32[i1 + 52 >> 2] = i37;
    break;
   }
  }
 } while (0);
 i43 = i1 + 96 | 0;
 if ((HEAP32[i43 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i12 = i2 + 56 | 0;
 do {
  if ((HEAP8[i12] & 2) == 0) {
   if (__ZN7WebCore15RenderBlockFlow17positionNewFloatsEv(i1) | 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i5 = i1 + 108 | 0;
 i11 = HEAP32[i5 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 do {
  if ((HEAP8[i12] & 2) != 0) {
   i10 = HEAP32[i11 + 36 >> 2] | 0;
   do {
    if ((i10 | 0) == 0) {
     i44 = HEAP32[i11 + 76 >> 2] | 0;
     i45 = HEAP32[i11 + 76 >> 2] | 0;
    } else {
     if ((HEAP32[i11 + 32 >> 2] & 2048 | 0) == 0) {
      i46 = (HEAP32[i10 + 28 >> 2] | 0) + (HEAP32[i10 + 20 >> 2] | 0) | 0;
     } else {
      i46 = (HEAP32[i10 + 32 >> 2] | 0) + (HEAP32[i10 + 24 >> 2] | 0) | 0;
     }
     if ((HEAP32[i11 + 32 >> 2] & 2048 | 0) == 0) {
      i44 = (HEAP32[i10 + 12 >> 2] | 0) + (HEAP32[i10 + 4 >> 2] | 0) | 0;
      i45 = i46;
      break;
     } else {
      i44 = (HEAP32[i10 + 16 >> 2] | 0) + (HEAP32[i10 + 8 >> 2] | 0) | 0;
      i45 = i46;
      break;
     }
    }
   } while (0);
   i10 = __Znwj(104) | 0;
   i26 = i10;
   __ZN7WebCore13RootInlineBoxC2ERNS_15RenderBlockFlowE(i26, i1);
   HEAP32[i10 >> 2] = H_BASE + 16;
   i28 = i10 + 32 | 0;
   HEAP32[i28 >> 2] = HEAP32[i28 >> 2] | 1024;
   i24 = i10;
   i29 = i13 | 0;
   HEAP32[i29 >> 2] = i24;
   __ZN7WebCore17RenderLineBoxList13appendLineBoxENSt3__110unique_ptrINS_13InlineFlowBoxENS1_14default_deleteIS3_EEEE(i1 + 104 | 0, i13);
   i4 = HEAP32[i29 >> 2] | 0;
   HEAP32[i29 >> 2] = 0;
   if ((i4 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
   }
   HEAP32[i28 >> 2] = HEAP32[i28 >> 2] | 2;
   i28 = HEAP32[i10 + 40 >> 2] | 0;
   if ((i28 | 0) != 0) {
    i4 = i28;
    while (1) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 72 >> 2] & 31](i4);
     i4 = HEAP32[i4 + 4 >> 2] | 0;
     if ((i4 | 0) == 0) {
      break;
     }
    }
   }
   _memset(i14 | 0, 0, 20) | 0;
   _memset(i15 | 0, 0, 40) | 0;
   i4 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i4 | 0) == 3 | (i4 | 0) == 0) {
    i47 = i1 + 56 | 0;
   } else {
    i47 = i1 + 52 | 0;
   }
   i4 = HEAP32[i47 >> 2] | 0;
   HEAP32[i16 >> 2] = i4;
   __ZN7WebCore13RootInlineBox26alignBoxesInBlockDirectionENS_10LayoutUnitERN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS2_6VectorIPKNS_14SimpleFontDataELj0ENS2_15CrashOnOverflowEEENS_13GlyphOverflowEEENS2_7PtrHashIS6_EENS2_10HashTraitsIS6_EENSJ_ISG_EEEERNS_21VerticalPositionCacheE(i17, i26, i16, i14, i15);
   i28 = i10 + 72 | 0;
   HEAP32[i28 >> 2] = i4;
   i29 = i10 + 76 | 0;
   HEAP32[i29 >> 2] = i4;
   i37 = i10 + 80 | 0;
   HEAP32[i37 >> 2] = i4;
   HEAP32[i10 + 84 >> 2] = i4;
   i32 = i1 | 0;
   HEAP32[i8 >> 2] = i4;
   i33 = __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i32, i8) | 0;
   __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i6, i32, i33);
   __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i7, i32, i33);
   i33 = (HEAP32[i6 >> 2] | 0) - (HEAP32[i7 >> 2] | 0) | 0;
   HEAP32[i10 + 96 >> 2] = (i33 | 0) > 0 ? i33 : 0;
   HEAP32[i18 >> 2] = 0;
   HEAP32[i18 + 4 >> 2] = i4;
   HEAP32[i18 + 8 >> 2] = 1;
   HEAP32[i18 + 12 >> 2] = i44 - i4;
   HEAP32[i19 >> 2] = 0;
   HEAP32[i19 + 4 >> 2] = i4;
   HEAP32[i19 + 8 >> 2] = 1;
   HEAP32[i19 + 12 >> 2] = i45 - i4;
   HEAP32[i20 >> 2] = HEAP32[i28 >> 2];
   HEAP32[i21 >> 2] = HEAP32[i29 >> 2];
   __ZN7WebCore13InlineFlowBox27setOverflowFromLogicalRectsERKNS_10LayoutRectES3_NS_10LayoutUnitES4_(i24, i18, i19, i20, i21);
   do {
    if ((HEAP32[i2 + 44 >> 2] | 0) != 0) {
     HEAP32[i9 >> 2] = HEAP32[i37 >> 2];
     __ZN7WebCore13RootInlineBox19setContainingRegionEPNS_12RenderRegionE(i26, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i32, i9) | 0);
     i29 = HEAP32[i10 + 48 >> 2] | 0;
     if ((i29 | 0) == 0) {
      break;
     }
     i28 = __ZNK7WebCore13RootInlineBox16containingRegionEv(i26) | 0;
     if ((i28 | 0) == (__ZNK7WebCore13RootInlineBox16containingRegionEv(i29) | 0)) {
      break;
     }
     i29 = i10 + 56 | 0;
     HEAP32[i29 >> 2] = HEAP32[i29 >> 2] | 8388608;
    }
   } while (0);
   i10 = HEAP32[i15 + 20 >> 2] | 0;
   if ((i10 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(i10);
   }
   i10 = HEAP32[i15 >> 2] | 0;
   if ((i10 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(i10);
   }
   i10 = HEAP32[i14 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i26 = HEAP32[i14 + 4 >> 2] | 0;
   if ((i26 | 0) > 0) {
    i32 = 0;
    while (1) {
     do {
      if ((HEAP32[i10 + (i32 * 36 & -1) >> 2] | 0) != -1) {
       i37 = i10 + (i32 * 36 & -1) + 12 | 0;
       if ((HEAP32[i37 >> 2] | 0) != 0) {
        HEAP32[i37 >> 2] = 0;
       }
       i37 = i10 + (i32 * 36 & -1) + 4 | 0;
       i24 = HEAP32[i37 >> 2] | 0;
       if ((i24 | 0) == 0) {
        break;
       }
       HEAP32[i37 >> 2] = 0;
       HEAP32[i10 + (i32 * 36 & -1) + 8 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i24);
      }
     } while (0);
     i32 = i32 + 1 | 0;
     if ((i32 | 0) >= (i26 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i10);
  }
 } while (0);
 i14 = HEAP32[i43 >> 2] | 0;
 i43 = i2 + 20 | 0;
 i2 = HEAP32[i43 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i48 = HEAP32[i14 + 20 >> 2] | 0;
 } else {
  __ZNK3WTF11ListHashSetINSt3__110unique_ptrIN7WebCore14FloatingObjectENS1_14default_deleteIS4_EEEELj4ENS3_27FloatingObjectHashFunctionsEE4findIRS4_NS3_28FloatingObjectHashTranslatorEEENS_24ListHashSetConstIteratorIS7_Lj4ES8_EERKT_(i23, i14 | 0, i2);
  i2 = i23 + 4 | 0;
  HEAP32[i2 >> 2] = HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2];
  i48 = HEAP32[i22 + 4 >> 2] | 0;
 }
 if ((i48 | 0) != 0) {
  i22 = i48;
  while (1) {
   i48 = HEAP32[i22 >> 2] | 0;
   HEAP32[i48 + 4 >> 2] = HEAP32[i5 >> 2];
   __ZN7WebCore13RootInlineBox11appendFloatERNS_9RenderBoxE(HEAP32[i5 >> 2] | 0, HEAP32[i48 >> 2] | 0);
   i22 = HEAP32[i22 + 8 >> 2] | 0;
   if ((i22 | 0) == 0) {
    break;
   }
  }
 }
 if ((HEAP32[i14 + 12 >> 2] | 0) == 0) {
  i49 = 0;
 } else {
  i49 = HEAP32[HEAP32[i14 + 24 >> 2] >> 2] | 0;
 }
 HEAP32[i43 >> 2] = i49;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15RenderBlockFlow25checkLinesForTextOverflowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, d61 = +0, d62 = +0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 288 | 0;
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
 i23 = i2 + 192 | 0;
 i24 = i2 + 232 | 0;
 i25 = i2 + 240 | 0;
 i26 = i2 + 248 | 0;
 i27 = i2 + 256 | 0;
 i28 = i2 + 264 | 0;
 i29 = i2 + 272 | 0;
 i30 = i2 + 280 | 0;
 i31 = i1 | 0;
 i32 = i1 + 36 | 0;
 i33 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[i32 >> 2] | 0) | 0;
 if (!(HEAP8[H_BASE + 168 | 0] | 0)) {
  i34 = __Znwj(4) | 0;
  __ZN3WTF12AtomicString3addEPKtj(i21, H_BASE + 160, 1);
  HEAP32[i34 >> 2] = HEAP32[i21 >> 2];
  HEAP32[H_BASE + 176 >> 2] = i34;
  HEAP8[H_BASE + 168 | 0] = 1;
 }
 i34 = i1 + 4 | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i34 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
  i35 = HEAP32[i32 >> 2] | 0;
 } else {
  i35 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i31) | 0;
 }
 i21 = __ZNK7WebCore11RenderStyle4fontEv(i35) | 0;
 i35 = i1 | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i34 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
  i36 = HEAP32[i32 >> 2] | 0;
 } else {
  i36 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i31) | 0;
 }
 __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKtiRKNS_11RenderStyleEj(i22, i35, i21, H_BASE + 160, 1, i36, 1);
 i36 = ~~+__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i21, i22, 0, 0);
 i31 = HEAP32[i22 + 32 >> 2] | 0;
 do {
  if ((i31 | 0) != 0) {
   i22 = i31 + 4 | 0;
   i34 = i22 | 0;
   i37 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
   if ((i37 | 0) != 0) {
    HEAP32[i34 >> 2] = i37;
    break;
   }
   i37 = i22 - 4 | 0;
   if ((i37 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i37 >> 2] | 0) + 4 >> 2] & 31](i37);
  }
 } while (0);
 do {
  if (__ZNK7WebCore4FonteqERKS0_(i33, i21) | 0) {
   i38 = ~~+(i36 | 0);
  } else {
   __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKtiRKNS_11RenderStyleEj(i23, i35, i33, H_BASE + 160, 1, HEAP32[i32 >> 2] | 0, 1);
   i31 = ~~+__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i33, i23, 0, 0);
   i37 = HEAP32[i23 + 32 >> 2] | 0;
   if ((i37 | 0) == 0) {
    i38 = i31;
    break;
   }
   i22 = i37 + 4 | 0;
   i37 = i22 | 0;
   i34 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
   if ((i34 | 0) != 0) {
    HEAP32[i37 >> 2] = i34;
    i38 = i31;
    break;
   }
   i34 = i22 - 4 | 0;
   if ((i34 | 0) == 0) {
    i38 = i31;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] & 31](i34);
   i38 = i31;
  }
 } while (0);
 i23 = HEAP32[(HEAP32[i32 >> 2] | 0) + 40 >> 2] | 0;
 i32 = (i23 & 1073741824 | 0) != 0;
 HEAP32[i24 >> 2] = i23 >>> 13 & 15;
 i23 = HEAP32[i1 + 104 >> 2] | 0;
 if ((i23 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i33 = i1 | 0;
 i35 = i13 | 0;
 i21 = i14 | 0;
 i31 = i1;
 i34 = i10 | 0;
 i22 = i11 | 0;
 i37 = i12 | 0;
 i39 = i25 | 0;
 i40 = i7 | 0;
 i41 = i8 | 0;
 i42 = i4 | 0;
 i43 = i5 | 0;
 i44 = i6 | 0;
 i45 = i26 | 0;
 i46 = i19 | 0;
 i47 = i20 | 0;
 i48 = i16 | 0;
 i49 = i17 | 0;
 i50 = i18 | 0;
 i51 = i30 | 0;
 i52 = i32 ^ 1;
 i53 = 1;
 i54 = i23;
 while (1) {
  i23 = i54;
  i55 = i54 + 72 | 0;
  i56 = HEAP32[i55 >> 2] | 0;
  HEAP32[i35 >> 2] = i56;
  __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i14, i33, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i33, i13) | 0);
  i57 = HEAP32[i21 >> 2] | 0;
  i58 = HEAP32[(HEAP32[i31 >> 2] | 0) + 1068 >> 2] | 0;
  HEAP32[i34 >> 2] = i56;
  HEAP32[i22 >> 2] = i57;
  HEAP32[i37 >> 2] = 0;
  FUNCTION_TABLE_viiiii[i58 & 3](i9, i33, i10, i11, i12);
  __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i25, i33, i9, i53);
  i58 = i54 | 0;
  i57 = HEAP32[i39 >> 2] | 0;
  i56 = HEAP32[i55 >> 2] | 0;
  HEAP32[i40 >> 2] = i56;
  __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i8, i33, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i33, i7) | 0);
  i59 = HEAP32[i41 >> 2] | 0;
  i60 = HEAP32[(HEAP32[i31 >> 2] | 0) + 1072 >> 2] | 0;
  HEAP32[i42 >> 2] = i56;
  HEAP32[i43 >> 2] = i59;
  HEAP32[i44 >> 2] = 0;
  FUNCTION_TABLE_viiiii[i60 & 3](i3, i33, i4, i5, i6);
  __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i26, i33, i3, i53);
  i60 = HEAP32[i45 >> 2] | 0;
  d61 = +HEAPF32[i54 + 20 >> 2];
  do {
   if (i32) {
    d62 = d61 + +HEAPF32[i54 + 28 >> 2];
    if (d62 >= +2147483647) {
     i63 = 2147483647;
     i64 = 30;
     break;
    }
    if (d62 <= +-2147483648) {
     i65 = -2147483648;
     i64 = 31;
     break;
    }
    i63 = ~~d62;
    i64 = 30;
   } else {
    if (d61 >= +2147483647) {
     break;
    }
    if (d61 <= +-2147483648) {
     i65 = -2147483648;
     i64 = 31;
     break;
    }
    i63 = ~~d61;
    i64 = 30;
   }
  } while (0);
  if ((i64 | 0) == 30) {
   i64 = 0;
   if (i32 & (i63 | 0) > (i57 | 0)) {
    i66 = i63;
    i64 = 32;
   } else {
    i65 = i63;
    i64 = 31;
   }
  }
  if ((i64 | 0) == 31) {
   i64 = 0;
   if ((i65 | 0) < (i60 | 0) & i52) {
    i66 = i65;
    i64 = 32;
   }
  }
  do {
   if ((i64 | 0) == 32) {
    i64 = 0;
    i59 = i53 ? i36 : i38;
    if (!(__ZN7WebCore13RootInlineBox26lineCanAccommodateEllipsisEbiii(i23, i32, i32 ? i57 : i60, i66, i59) | 0)) {
     break;
    }
    HEAPF32[i27 >> 2] = +__ZN7WebCore13RootInlineBox13placeEllipsisERKN3WTF12AtomicStringEbfffPNS_9InlineBoxE(i23, HEAP32[H_BASE + 176 >> 2] | 0, i32, +(i60 | 0), +(i57 | 0), +(i59 | 0), 0);
    HEAPF32[i28 >> 2] = +0;
    i59 = HEAP32[i55 >> 2] | 0;
    HEAP32[i46 >> 2] = i59;
    __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i20, i33, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i33, i19) | 0);
    i56 = HEAP32[i47 >> 2] | 0;
    i67 = HEAP32[(HEAP32[i31 >> 2] | 0) + 1068 >> 2] | 0;
    HEAP32[i48 >> 2] = i59;
    HEAP32[i49 >> 2] = i56;
    HEAP32[i50 >> 2] = 0;
    FUNCTION_TABLE_viiiii[i67 & 3](i15, i33, i16, i17, i18);
    __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i30, i33, i15, i53);
    HEAPF32[i29 >> 2] = +(HEAP32[i51 >> 2] | 0);
    __ZN7WebCore15RenderBlockFlow30updateLogicalWidthForAlignmentERKNS_10ETextAlignEPNS_7BidiRunERfS6_S6_i(i1, i24, 0, i28, i27, i29, 0);
    if (i32) {
     d61 = +HEAPF32[i28 >> 2];
     i67 = HEAP32[(HEAP32[i54 >> 2] | 0) + 24 >> 2] | 0;
     if ((HEAP32[i54 + 32 >> 2] & 2048 | 0) == 0) {
      FUNCTION_TABLE_viff[i67 & 3](i58, +0, d61);
      break;
     } else {
      FUNCTION_TABLE_viff[i67 & 3](i58, d61, +0);
      break;
     }
    } else {
     d61 = +-0 - (+HEAPF32[i29 >> 2] - (+HEAPF32[i28 >> 2] + +HEAPF32[i27 >> 2]));
     i67 = HEAP32[(HEAP32[i54 >> 2] | 0) + 24 >> 2] | 0;
     if ((HEAP32[i54 + 32 >> 2] & 2048 | 0) == 0) {
      FUNCTION_TABLE_viff[i67 & 3](i58, +0, d61);
      break;
     } else {
      FUNCTION_TABLE_viff[i67 & 3](i58, d61, +0);
      break;
     }
    }
   }
  } while (0);
  i58 = HEAP32[i54 + 52 >> 2] | 0;
  if ((i58 | 0) == 0) {
   break;
  } else {
   i53 = 0;
   i54 = i58;
  }
 }
 STACKTOP = i2;
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
     __ZN7WebCore15RenderBlockFlow19appendRunsForObjectERNS_11BidiRunListINS_7BidiRunEEEiiPNS_12RenderObjectERNS_12BidiResolverINS_14InlineIteratorES2_EE(i17, i20, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 524 >> 2] & 31](i19) | 0, i19, i1);
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
   i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 524 >> 2] & 31](i19) | 0;
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
   HEAP32[i7 >> 2] = __ZN7WebCoreL14bidiNextSharedINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_NS_19EmptyInlineBehaviorEPb(HEAP32[i6 >> 2] | 0, i3, 0, 0, 0) | 0;
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
function __ZN7WebCore15RenderBlockFlow19layoutRunsAndFloatsERNS_15LineLayoutStateEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 328 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 264 | 0;
 i8 = i4 + 280 | 0;
 i9 = i4 + 296 | 0;
 i10 = i4 + 312 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = -1;
 HEAP32[i6 + 12 >> 2] = 0;
 HEAP32[i6 + 16 >> 2] = 0;
 HEAP32[i6 + 20 >> 2] = 0;
 HEAP32[i6 + 24 >> 2] = -1;
 HEAP32[i6 + 28 >> 2] = 0;
 HEAP32[i6 + 32 >> 2] = 0;
 HEAP32[i6 + 36 >> 2] = 0;
 HEAP32[i6 + 40 >> 2] = -1;
 HEAP32[i6 + 44 >> 2] = 0;
 HEAP32[i6 + 48 >> 2] = 0;
 HEAP32[i6 + 52 >> 2] = 0;
 HEAP32[i6 + 56 >> 2] = -1;
 HEAP32[i6 + 60 >> 2] = 0;
 HEAP32[i6 + 64 >> 2] = 10;
 HEAP32[i6 + 68 >> 2] = 10;
 HEAP32[i6 + 72 >> 2] = 10;
 HEAP32[i6 + 76 >> 2] = 0;
 HEAP32[i6 + 80 >> 2] = 10;
 HEAP32[i6 + 84 >> 2] = 0;
 HEAP32[i6 + 88 >> 2] = 0;
 HEAP32[i6 + 92 >> 2] = -1;
 HEAP32[i6 + 96 >> 2] = 0;
 HEAP8[i6 + 100 | 0] = 0;
 HEAP32[i6 + 104 >> 2] = 0;
 HEAP32[i6 + 108 >> 2] = 0;
 HEAP32[i6 + 112 >> 2] = -1;
 HEAP32[i6 + 116 >> 2] = 0;
 HEAP8[i6 + 120 | 0] = 1;
 _memset(i6 + 124 | 0, 0, 37) | 0;
 _memset(i6 + 164 | 0, 0, 16) | 0;
 HEAP32[i6 + 180 >> 2] = i6 + 192;
 HEAP32[i6 + 184 >> 2] = 8;
 HEAP32[i6 + 188 >> 2] = 0;
 i11 = __ZN7WebCore15RenderBlockFlow22determineStartPositionERNS_15LineLayoutStateERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEE(i1, i2, i6) | 0;
 i12 = (i11 | 0) != 0;
 L1 : do {
  if (i12) {
   i13 = HEAP32[i11 + 48 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i14 = 0;
    break;
   } else {
    i15 = 0;
    i16 = i13;
   }
   while (1) {
    if (!(__ZNK7WebCore13RootInlineBox12isHyphenatedEv(i16) | 0)) {
     i14 = i15;
     break L1;
    }
    i13 = i15 + 1 | 0;
    i17 = HEAP32[i16 + 48 >> 2] | 0;
    if ((i17 | 0) == 0) {
     i14 = i13;
     break;
    } else {
     i15 = i13;
     i16 = i17;
    }
   }
  } else {
   i14 = 0;
  }
 } while (0);
 i16 = i2 + 56 | 0;
 do {
  if (!((HEAP8[i16] & 4) == 0 | i3 ^ 1)) {
   i15 = i1 | 0;
   i17 = i1 + 20 | 0;
   i13 = HEAP32[i17 >> 2] | 0;
   if ((i13 & 1 | 0) != 0) {
    break;
   }
   HEAP32[i17 >> 2] = i13 | 1;
   if ((i13 & 32768 | 0) != 0) {
    __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i15);
   }
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 224 | 0] & 1) != 0) {
    break;
   }
   if ((HEAP32[i17 >> 2] & 32768 | 0) == 0) {
    break;
   }
   i17 = __ZNK7WebCore12RenderObject19containerForRepaintEv(i15) | 0;
   i13 = i8;
   i18 = (HEAP32[i1 + 40 >> 2] | 0) + 56 | 0;
   HEAP32[i13 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i13 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
   HEAP32[i13 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
   HEAP32[i13 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
   __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i7, i8);
   __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i15, i17, i7, 0);
  }
 } while (0);
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1024 >> 2] & 31](i1) | 0) {
  HEAP32[i2 + 20 >> 2] = HEAP32[HEAP32[(HEAP32[i1 + 96 >> 2] | 0) + 24 >> 2] >> 2];
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i9 + 8 >> 2] = -1;
 HEAP32[i9 + 12 >> 2] = 0;
 HEAP32[i10 >> 2] = 10;
 HEAP32[i10 + 4 >> 2] = 10;
 HEAP32[i10 + 8 >> 2] = 10;
 i7 = i10 + 12 | 0;
 HEAP32[i7 >> 2] = 0;
 if (!((HEAP8[i16] & 4) != 0 | i12 ^ 1)) {
  __ZN7WebCore15RenderBlockFlow20determineEndPositionERNS_15LineLayoutStateEPNS_13RootInlineBoxERNS_14InlineIteratorERNS_10BidiStatusE(i1, i2, i11, i9, i10);
 }
 if (i12) {
  i12 = HEAP8[i16] | 0;
  if ((i12 & 8) == 0) {
   i8 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i8 | 0) == 3 | (i8 | 0) == 0) {
    i19 = i1 + 56 | 0;
   } else {
    i19 = i1 + 52 | 0;
   }
   i8 = HEAP32[i19 >> 2] | 0;
   HEAP8[i16] = i12 | 8;
   i12 = HEAP32[i2 + 48 >> 2] | 0;
   HEAP32[HEAP32[i2 + 52 >> 2] >> 2] = i8;
   HEAP32[i12 >> 2] = i8;
  } else {
  }
  i8 = i5 | 0;
  i12 = i11;
  while (1) {
   HEAP32[i8 >> 2] = 0;
   __ZN7WebCore15LineLayoutState25updateRepaintRangeFromBoxEPNS_13RootInlineBoxENS_10LayoutUnitE(i2, i12, i5);
   i11 = HEAP32[i12 + 52 >> 2] | 0;
   __ZN7WebCore13InlineFlowBox10deleteLineEv(i12 | 0);
   if ((i11 | 0) == 0) {
    break;
   } else {
    i12 = i11;
   }
  }
 }
 do {
  if ((HEAP8[i16] & 4) == 0) {
   i12 = i1 + 108 | 0;
   i5 = HEAP32[i12 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   if ((HEAP32[i5 + 32 >> 2] & 4096 | 0) == 0) {
    break;
   }
   i8 = __ZNK7WebCore13InlineFlowBox13lastLeafChildEv(i5) | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i8 + 16 >> 2] | 0;
   if ((HEAP32[i5 + 20 >> 2] & 4096 | 0) == 0) {
    i20 = 31;
   } else {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 620 >> 2] & 31](i5) | 0) {
     i20 = 31;
    } else {
     i21 = i5;
    }
   }
   if ((i20 | 0) == 31) {
    i21 = HEAP32[(__ZNK7WebCore13InlineFlowBox14firstLeafChildEv(HEAP32[i12 >> 2] | 0) | 0) + 16 >> 2] | 0;
   }
   i12 = i21 + 20 | 0;
   if ((HEAP32[i12 >> 2] & 4096 | 0) == 0) {
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 620 >> 2] & 31](i21) | 0) {
    break;
   }
   if ((HEAP32[i12 >> 2] & 768 | 0) == 256) {
    i22 = HEAP32[(HEAP32[i21 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i22 = HEAP32[i21 + 36 >> 2] | 0;
   }
   i12 = (HEAP32[i22 + 48 >> 2] | 0) >>> 20 & 3;
   if ((i12 | 0) == 0) {
    break;
   }
   __ZN7WebCore15RenderBlockFlow7newLineENS_6EClearE(i1, i12);
  }
 } while (0);
 __ZN7WebCore15RenderBlockFlow26layoutRunsAndFloatsInRangeERNS_15LineLayoutStateERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERKS4_RKNS_10BidiStatusEj(i1, i2, i6, i9, i10, i14);
 __ZN7WebCore15RenderBlockFlow21linkToEndLineIfNeededERNS_15LineLayoutStateE(i1, i2);
 i1 = i2 + 32 | 0;
 i14 = HEAP32[i1 >> 2] | 0;
 L53 : do {
  if ((i14 | 0) != 0) {
   i10 = i2 + 24 | 0;
   i9 = 0;
   while (1) {
    i22 = HEAP32[i10 >> 2] | 0;
    do {
     if ((HEAP8[i22 + (i9 * 24 & -1) + 20 | 0] & 1) == 0) {
      i21 = HEAP32[i22 + (i9 * 24 & -1) >> 2] | 0;
      if ((HEAP32[i21 + 44 >> 2] | 0) != 0) {
       break;
      }
      if ((HEAP32[i21 + 48 >> 2] | 0) != 0) {
       break;
      }
      i20 = i21 | 0;
      if (!(__ZNK7WebCore12RenderObject27checkForRepaintDuringLayoutEv(i20) | 0)) {
       break;
      }
      __ZNK7WebCore12RenderObject7repaintEb(i20, 0);
     }
    } while (0);
    i9 = i9 + 1 | 0;
    if (i9 >>> 0 >= i14 >>> 0) {
     break L53;
    }
    if ((HEAP32[i1 >> 2] | 0) >>> 0 <= i9 >>> 0) {
     break;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEED2Ev(i6);
  STACKTOP = i4;
  return;
 }
 i7 = i1 | 0;
 i14 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i14 | 0) == 0) {
  __ZN7WebCore11BidiContextD2Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEED2Ev(i6);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i7 >> 2] = i14;
  __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEED2Ev(i6);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore15RenderBlockFlow38computeInlineDirectionPositionsForLineEPNS_13RootInlineBoxERKNS_8LineInfoEPNS_7BidiRunES7_bRN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS8_6VectorIPKNS_14SimpleFontDataELj0ENS8_15CrashOnOverflowEEENS_13GlyphOverflowEEENS8_7PtrHashISC_EENS8_10HashTraitsISC_EENSP_ISM_EEEERNS_21VerticalPositionCacheERNSF_INS_15WordMeasurementELj64ESJ_EE(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, d27 = +0, d28 = +0, d29 = +0, d30 = +0, i31 = 0, d32 = +0, i33 = 0, d34 = +0, d35 = +0, d36 = +0, d37 = +0, d38 = +0, i39 = 0, i40 = 0, i41 = 0, i42 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i11 = i10 | 0;
 i12 = i10 + 16 | 0;
 i13 = i10 + 24 | 0;
 i14 = i10 + 32 | 0;
 i15 = i10 + 40 | 0;
 i16 = i10 + 48 | 0;
 i17 = i10 + 56 | 0;
 i18 = i10 + 64 | 0;
 if (i6) {
  i19 = 0;
 } else {
  i19 = (HEAP32[i2 + 32 >> 2] & 4096 | 0) == 0;
 }
 i6 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1148 >> 2] & 3](i1, i19) | 0;
 do {
  if ((HEAP8[i3 | 0] & 1) == 0) {
   i20 = 0;
  } else {
   i19 = i1 | 0;
   if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i19) | 0)) {
    i20 = 1;
    break;
   }
   i20 = (HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 28 >> 2] | 0) == (i19 | 0);
  }
 } while (0);
 i19 = HEAP32[i2 + 48 >> 2] | 0;
 if ((i19 | 0) == 0) {
  i21 = 0;
 } else {
  i21 = (HEAP32[i19 + 32 >> 2] & 4096 | 0) != 0;
 }
 i19 = __ZN7WebCore14requiresIndentEbbRKNS_11RenderStyleE(i20, i21, HEAP32[i1 + 36 >> 2] | 0) | 0;
 __ZN7WebCoreL28updateLogicalInlinePositionsERNS_15RenderBlockFlowERfS2_S2_bNS_15IndentTextOrNotENS_10LayoutUnitE(i1, i12, i13, i14, i20, i19, 0);
 i21 = __ZNK7WebCore11RenderBlock21layoutShapeInsideInfoEv(i1 | 0) | 0;
 do {
  if ((i21 | 0) != 0) {
   i22 = __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE13computedShapeEv(i21 | 0) | 0;
   i23 = HEAP32[i21 + 4 >> 2] | 0;
   i24 = HEAP32[i21 + 8 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i22 >> 2] | 0) + 12 >> 2] & 7](i11, i22);
   if ((HEAP32[i11 + 8 >> 2] | 0) < 1) {
    break;
   }
   i22 = HEAP32[i11 + 12 >> 2] | 0;
   if ((i22 | 0) < 1) {
    break;
   }
   i25 = HEAP32[i11 + 4 >> 2] | 0;
   if ((i23 | 0) < (i25 + i22 | 0)) {
    if ((i24 + i23 | 0) <= (i25 | 0)) {
     i26 = 13;
    }
   } else {
    i26 = 13;
   }
   if ((i26 | 0) == 13) {
    if (!((i24 | 0) == 0 & (i23 | 0) == (i25 | 0))) {
     break;
    }
   }
   i25 = i21 + 52 | 0;
   if ((HEAP32[i25 >> 2] | 0) == 0) {
    break;
   }
   i23 = i21 + 44 | 0;
   d27 = +(HEAP32[HEAP32[i23 >> 2] >> 2] | 0);
   d28 = +HEAPF32[i12 >> 2];
   d29 = d27 < d28 ? d28 : d27;
   HEAPF32[i16 >> 2] = d29;
   if ((HEAP32[i25 >> 2] | 0) == 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   d27 = +(HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] | 0);
   d28 = +HEAPF32[i13 >> 2];
   HEAPF32[i17 >> 2] = d29;
   HEAPF32[i18 >> 2] = d29;
   i24 = i2 | 0;
   i22 = i2 + 32 | 0;
   if ((HEAP32[i22 >> 2] & 2048 | 0) == 0) {
    HEAPF32[i2 + 24 >> 2] = d29;
   } else {
    HEAPF32[i2 + 20 >> 2] = d29;
   }
   L28 : do {
    if ((HEAP32[i25 >> 2] | 0) == 0) {
     d30 = d29;
    } else {
     i31 = 0;
     d32 = d28 < d27 ? d28 : d27;
     i33 = i4;
     while (1) {
      if ((i31 | 0) == 0) {
       d34 = d32;
       d35 = +HEAPF32[i16 >> 2];
      } else {
       d36 = +(HEAP32[(HEAP32[i23 >> 2] | 0) + (i31 << 3) >> 2] | 0);
       d37 = +HEAPF32[i12 >> 2];
       d38 = d36 < d37 ? d37 : d36;
       HEAPF32[i16 >> 2] = d38;
       if ((HEAP32[i25 >> 2] | 0) >>> 0 <= i31 >>> 0) {
        i26 = 24;
        break;
       }
       d36 = +(HEAP32[(HEAP32[i23 >> 2] | 0) + (i31 << 3) + 4 >> 2] | 0);
       d34 = d28 < d36 ? d28 : d36;
       d35 = d38;
      }
      HEAPF32[i14 >> 2] = d34 - d35;
      i39 = __ZN7WebCore15RenderBlockFlow41computeInlineDirectionPositionsForSegmentEPNS_13RootInlineBoxERKNS_8LineInfoENS_10ETextAlignERfS7_PNS_7BidiRunES9_RN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINSA_6VectorIPKNS_14SimpleFontDataELj0ENSA_15CrashOnOverflowEEENS_13GlyphOverflowEEENSA_7PtrHashISE_EENSA_10HashTraitsISE_EENSR_ISO_EEEERNS_21VerticalPositionCacheERNSH_INS_15WordMeasurementELj64ESL_EE(i1, i2, i3, i6, i16, i14, i33, i5, i7, i8, i9) | 0;
      HEAP8[i15] = 0;
      i40 = HEAP32[i33 + 20 >> 2] | 0;
      if ((i39 | 0) == 0) {
       i26 = 27;
       break;
      }
      d38 = +__ZN7WebCore13InlineFlowBox30placeBoxRangeInInlineDirectionEPNS_9InlineBoxES2_RfS3_S3_RbRN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS5_6VectorIPKNS_14SimpleFontDataELj0ENS5_15CrashOnOverflowEEENS_13GlyphOverflowEEENS5_7PtrHashIS9_EENS5_10HashTraitsIS9_EENSM_ISJ_EEEE(i24, i40, HEAP32[i39 + 20 >> 2] | 0, i16, i17, i18, i15, i7);
      i41 = HEAP32[i39 + 4 >> 2] | 0;
      if ((i41 | 0) == 0) {
       d30 = d38;
       break L28;
      }
      i39 = i31 + 1 | 0;
      if (i39 >>> 0 < (HEAP32[i25 >> 2] | 0) >>> 0) {
       i31 = i39;
       d32 = d34;
       i33 = i41;
      } else {
       d30 = d38;
       break L28;
      }
     }
     if ((i26 | 0) == 24) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i26 | 0) == 27) {
      d30 = +__ZN7WebCore13InlineFlowBox30placeBoxRangeInInlineDirectionEPNS_9InlineBoxES2_RfS3_S3_RbRN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS5_6VectorIPKNS_14SimpleFontDataELj0ENS5_15CrashOnOverflowEEENS_13GlyphOverflowEEENS5_7PtrHashIS9_EENS5_10HashTraitsIS9_EENSM_ISJ_EEEE(i24, i40, 0, i16, i17, i18, i15, i7);
      break;
     }
    }
   } while (0);
   d28 = +HEAPF32[i17 >> 2];
   d27 = +HEAPF32[i18 >> 2];
   HEAPF32[i2 + 28 >> 2] = d30 - d29;
   if ((HEAP32[i22 >> 2] & 16384 | 0) == 0) {
    STACKTOP = i10;
    return;
   }
   if (!(d28 < d29 | d27 > d30)) {
    STACKTOP = i10;
    return;
   }
   __ZN7WebCore9InlineBox26clearKnownToHaveNoOverflowEv(i2 | 0);
   STACKTOP = i10;
   return;
  }
 } while (0);
 do {
  if ((i4 | 0) != 0) {
   i18 = HEAP32[i4 + 16 >> 2] | 0;
   if ((HEAP32[i18 + 20 >> 2] & 2048 | 0) == 0) {
    break;
   }
   i17 = (HEAP32[(HEAP32[i18 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i17 | 0) == 3 | (i17 | 0) == 0) {
    i42 = i18 + 56 | 0;
   } else {
    i42 = i18 + 52 | 0;
   }
   __ZN7WebCoreL28updateLogicalInlinePositionsERNS_15RenderBlockFlowERfS2_S2_bNS_15IndentTextOrNotENS_10LayoutUnitE(i1, i12, i13, i14, i20, i19, HEAP32[i42 >> 2] | 0);
  }
 } while (0);
 __ZN7WebCore15RenderBlockFlow41computeInlineDirectionPositionsForSegmentEPNS_13RootInlineBoxERKNS_8LineInfoENS_10ETextAlignERfS7_PNS_7BidiRunES9_RN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINSA_6VectorIPKNS_14SimpleFontDataELj0ENSA_15CrashOnOverflowEEENS_13GlyphOverflowEEENSA_7PtrHashISE_EENSA_10HashTraitsISE_EENSR_ISO_EEEERNS_21VerticalPositionCacheERNSH_INS_15WordMeasurementELj64ESL_EE(i1, i2, i3, i6, i12, i14, i4, i5, i7, i8, i9) | 0;
 HEAP8[i15] = 0;
 +__ZN7WebCore13InlineFlowBox27placeBoxesInInlineDirectionEfRbRN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS2_6VectorIPKNS_14SimpleFontDataELj0ENS2_15CrashOnOverflowEEENS_13GlyphOverflowEEENS2_7PtrHashIS6_EENS2_10HashTraitsIS6_EENSJ_ISG_EEEE(i2 | 0, +HEAPF32[i12 >> 2], i15, i7);
 STACKTOP = i10;
 return;
}
function __ZN7WebCoreL14bidiNextSharedINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_NS_19EmptyInlineBehaviorEPb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i6 = (i5 | 0) != 0;
 if (i6) {
  i7 = (HEAP8[i5] & 1) != 0;
 } else {
  i7 = 0;
 }
 L4 : do {
  if ((i2 | 0) == 0) {
   i8 = 0;
   i9 = 0;
  } else {
   i10 = (i4 | 0) != 1;
   i11 = (i4 | 0) == 1;
   i12 = i10 | i7;
   i13 = (i3 | 0) == 0;
   i14 = i3 + 164 | 0;
   i15 = i1 | 0;
   i16 = i2;
   i17 = 0;
   while (1) {
    L8 : do {
     if (i7) {
      i18 = 23;
     } else {
      i19 = i16 + 20 | 0;
      i20 = HEAP32[i19 >> 2] | 0;
      do {
       if (!((i20 & 768 | 0) == 256 | (i20 & 4096 | 0) != 0)) {
        if ((i20 & 64 | 0) != 0 | (i20 & 25165824 | 0) == 16777216 | (i20 & 2048 | 0) != 0) {
         break;
        }
        i21 = HEAP32[i16 + 28 >> 2] | 0;
        i22 = i21;
        i23 = (i21 | 0) == 0;
        do {
         if (!(i13 | i23)) {
          if ((HEAP32[i21 + 20 >> 2] & 768 | 0) == 256) {
           i24 = i22;
           i25 = i17;
           break L8;
          }
          if ((HEAP32[i21 + 24 >> 2] & 4 | 0) == 0) {
           i24 = i22;
           i25 = i17;
           break L8;
          }
          i26 = HEAP32[i21 + 36 >> 2] | 0;
          i27 = (HEAP32[i26 + 48 >> 2] | 0) >>> 28 & 7;
          if ((i27 | 0) == 0) {
           break;
          }
          if ((i27 - 3 | 0) >>> 0 < 3 >>> 0) {
           __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE23commitExplicitEmbeddingEv(i3) | 0;
           HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
           break;
          }
          if ((HEAP32[i14 >> 2] | 0) != 0) {
           break;
          }
          i28 = (HEAP32[i26 + 40 >> 2] & 1073741824 | 0) == 0;
          if ((i27 | 0) == 1) {
           i29 = i28 ? 14 : 11;
          } else {
           i29 = i28 ? 15 : 12;
          }
          __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE5embedE14UCharDirectionNS_19BidiEmbeddingSourceE(i3, i29, 0);
         }
        } while (0);
        if (!i23) {
         i24 = i22;
         i25 = i17;
         break L8;
        }
       }
      } while (0);
      if (i12) {
       i18 = 23;
       break;
      }
      if ((HEAP32[i19 >> 2] & 768 | 0) == 256) {
       i30 = 0;
       i18 = 24;
       break;
      }
      if ((HEAP32[i16 + 24 >> 2] & 4 | 0) == 0) {
       i30 = 0;
       i18 = 24;
      } else {
       i8 = 1;
       i9 = i16;
       break L4;
      }
     }
    } while (0);
    if ((i18 | 0) == 23) {
     i18 = 0;
     if ((i16 | 0) == 0) {
      i8 = i17;
      i9 = 0;
      break L4;
     } else {
      i30 = i10;
      i18 = 24;
     }
    }
    L32 : do {
     if ((i18 | 0) == 24) {
      i18 = 0;
      i20 = i16;
      L34 : while (1) {
       if ((i20 | 0) == (i15 | 0)) {
        i8 = i17;
        i9 = 0;
        break L4;
       }
       do {
        if (!i13) {
         if ((HEAP32[i20 + 20 >> 2] & 768 | 0) == 256) {
          break;
         }
         if ((HEAP32[i20 + 24 >> 2] & 4 | 0) == 0) {
          break;
         }
         i21 = (HEAP32[(HEAP32[i20 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 28 & 7;
         if ((i21 | 0) == 0) {
          break;
         }
         i28 = HEAP32[i14 >> 2] | 0;
         if ((i21 - 3 | 0) >>> 0 < 3 >>> 0) {
          HEAP32[i14 >> 2] = i28 - 1;
          break;
         }
         if ((i28 | 0) != 0) {
          break;
         }
         __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE5embedE14UCharDirectionNS_19BidiEmbeddingSourceE(i3, 16, 0);
        }
       } while (0);
       i31 = HEAP32[i20 + 16 >> 2] | 0;
       if ((i31 | 0) != 0) {
        i18 = 35;
        break;
       }
       i22 = HEAP32[i20 + 8 >> 2] | 0;
       i23 = i22 | 0;
       i28 = (i22 | 0) == 0;
       do {
        if (!(i30 | i28 | (i22 | 0) == (i1 | 0))) {
         if ((HEAP32[i22 + 20 >> 2] & 768 | 0) == 256) {
          break;
         }
         if ((HEAP32[i23 + 24 >> 2] & 4 | 0) != 0) {
          i32 = 1;
          i33 = i23;
          break L34;
         }
        }
       } while (0);
       if (i28) {
        i8 = i17;
        i9 = 0;
        break L4;
       } else {
        i20 = i23;
       }
      }
      do {
       if ((i18 | 0) == 35) {
        i18 = 0;
        if (i13) {
         i24 = i31;
         i25 = i17;
         break L32;
        }
        if ((HEAP32[i31 + 20 >> 2] & 768 | 0) == 256) {
         i32 = i17;
         i33 = i31;
         break;
        }
        if ((HEAP32[i31 + 24 >> 2] & 4 | 0) == 0) {
         i24 = i31;
         i25 = i17;
         break L32;
        }
        i20 = HEAP32[i31 + 36 >> 2] | 0;
        i19 = (HEAP32[i20 + 48 >> 2] | 0) >>> 28 & 7;
        if ((i19 | 0) == 0) {
         i32 = i17;
         i33 = i31;
         break;
        }
        if ((i19 - 3 | 0) >>> 0 < 3 >>> 0) {
         __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE23commitExplicitEmbeddingEv(i3) | 0;
         HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
         i32 = i17;
         i33 = i31;
         break;
        }
        if ((HEAP32[i14 >> 2] | 0) != 0) {
         i32 = i17;
         i33 = i31;
         break;
        }
        i22 = (HEAP32[i20 + 40 >> 2] & 1073741824 | 0) == 0;
        if ((i19 | 0) == 1) {
         i34 = i22 ? 14 : 11;
        } else {
         i34 = i22 ? 15 : 12;
        }
        __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE5embedE14UCharDirectionNS_19BidiEmbeddingSourceE(i3, i34, 0);
        i32 = i17;
        i33 = i31;
       }
      } while (0);
      if ((i33 | 0) == 0) {
       i8 = i32;
       i9 = 0;
       break L4;
      } else {
       i24 = i33;
       i25 = i32;
      }
     }
    } while (0);
    i22 = HEAP32[i24 + 20 >> 2] | 0;
    if ((i22 & 768 | 0) == 256 | (i22 & 4096 | 0) != 0) {
     i8 = i25;
     i9 = i24;
     break L4;
    }
    if ((i22 & 64 | 0) != 0 | (i22 & 25165824 | 0) == 16777216 | (i22 & 2048 | 0) != 0) {
     i8 = i25;
     i9 = i24;
     break L4;
    }
    if ((HEAP32[i24 + 24 >> 2] & 4 | 0) != 0) {
     if (i11) {
      i8 = i25;
      i9 = i24;
      break L4;
     }
     if (__ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE(i24) | 0) {
      i8 = i25;
      i9 = i24;
      break L4;
     }
    }
    if ((i24 | 0) == 0) {
     i8 = i25;
     i9 = 0;
     break;
    } else {
     i16 = i24;
     i17 = i25;
    }
   }
  }
 } while (0);
 if (!i6) {
  return i9 | 0;
 }
 HEAP8[i5] = i8 & 1;
 return i9 | 0;
}
function __ZN7WebCore15RenderBlockFlow20handleTrailingSpacesERNS_11BidiRunListINS_7BidiRunEEEPNS_11BidiContextE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = i2 + 12 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = i6 + 16 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = (HEAP32[i8 + 20 >> 2] & 768 | 0) == 256;
 if (i9) {
  i10 = HEAP32[(HEAP32[i8 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i10 = HEAP32[i8 + 36 >> 2] | 0;
 }
 do {
  if ((HEAP32[i10 + 44 >> 2] & 7 | 0) != 2) {
   if ((HEAP32[(HEAP32[i10 + 24 >> 2] | 0) + 88 >> 2] & 7168 | 0) == 4096) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 if (i9) {
  i11 = HEAP32[(HEAP32[i8 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i11 = HEAP32[i8 + 36 >> 2] | 0;
 }
 i10 = HEAP32[i11 + 44 >> 2] & 7;
 if ((i10 | 0) == 4 | (i10 | 0) == 1) {
  i5 = 0;
  return i5 | 0;
 }
 if (!i9) {
  i5 = 0;
  return i5 | 0;
 }
 i9 = HEAP32[i8 + 44 >> 2] | 0;
 L22 : do {
  if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
   i10 = HEAP32[i9 + 8 >> 2] | 0;
   i11 = HEAP32[i6 + 8 >> 2] | 0;
   i12 = HEAP32[i6 + 12 >> 2] | 0;
   i13 = i8 + 8 | 0;
   if ((i12 | 0) > (i11 | 0)) {
    i14 = i12;
   } else {
    i5 = 0;
    return i5 | 0;
   }
   while (1) {
    i15 = i14 - 1 | 0;
    switch (HEAP16[i10 + (i15 << 1) >> 1] | 0) {
    case 10:
     {
      i16 = HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] & 7;
      if (!((i16 | 0) == 4 | (i16 | 0) == 0)) {
       i17 = i14;
       i18 = i12;
       i19 = i11;
       break L22;
      }
      break;
     }
    case 32:
    case 9:
    case 173:
     {
      break;
     }
    case 160:
     {
      if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 512 | 0) == 0) {
       i17 = i14;
       i18 = i12;
       i19 = i11;
       break L22;
      }
      break;
     }
    default:
     {
      i17 = i14;
      i18 = i12;
      i19 = i11;
      break L22;
     }
    }
    if ((i15 | 0) > (i11 | 0)) {
     i14 = i15;
    } else {
     i17 = i15;
     i18 = i12;
     i19 = i11;
     break L22;
    }
   }
  } else {
   i11 = HEAP32[i9 + 8 >> 2] | 0;
   i12 = HEAP32[i6 + 8 >> 2] | 0;
   i13 = HEAP32[i6 + 12 >> 2] | 0;
   i10 = i8 + 8 | 0;
   if ((i13 | 0) > (i12 | 0)) {
    i20 = i13;
   } else {
    i5 = 0;
    return i5 | 0;
   }
   while (1) {
    i15 = i20 - 1 | 0;
    switch (HEAPU8[i11 + i15 | 0] | 0) {
    case 32:
    case 9:
    case 173:
     {
      break;
     }
    case 10:
     {
      i16 = HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] & 7;
      if (!((i16 | 0) == 4 | (i16 | 0) == 0)) {
       i17 = i20;
       i18 = i13;
       i19 = i12;
       break L22;
      }
      break;
     }
    case 160:
     {
      if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 512 | 0) == 0) {
       i17 = i20;
       i18 = i13;
       i19 = i12;
       break L22;
      }
      break;
     }
    default:
     {
      i17 = i20;
      i18 = i13;
      i19 = i12;
      break L22;
     }
    }
    if ((i15 | 0) > (i12 | 0)) {
     i20 = i15;
    } else {
     i17 = i15;
     i18 = i13;
     i19 = i12;
     break L22;
    }
   }
  }
 } while (0);
 i20 = i6 | 0;
 i8 = i6 + 12 | 0;
 if ((i17 | 0) == (i18 | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 i18 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0;
 if ((i17 | 0) != (i19 | 0)) {
  i19 = i3;
  while (1) {
   i3 = HEAP32[i19 + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   } else {
    i19 = i3;
   }
  }
  i3 = __Znwj(24) | 0;
  i1 = i3;
  __ZN7WebCore7BidiRunC1EiiRNS_12RenderObjectEPNS_11BidiContextE14UCharDirection(i1, i17, HEAP32[i8 >> 2] | 0, HEAP32[i7 >> 2] | 0, i19, 10);
  HEAP32[i8 >> 2] = i17;
  if (i18) {
   i17 = i2 | 0;
   if ((HEAP32[i17 >> 2] | 0) == 0) {
    HEAP32[i17 >> 2] = i1;
    i21 = i2 + 4 | 0;
   } else {
    i17 = i2 + 4 | 0;
    HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] = i3;
    i21 = i17;
   }
   HEAP32[i21 >> 2] = i1;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
   i5 = i1;
   return i5 | 0;
  } else {
   i21 = i2 + 4 | 0;
   if ((HEAP32[i21 >> 2] | 0) == 0) {
    HEAP32[i21 >> 2] = i1;
    i22 = i2 | 0;
   } else {
    i21 = i2 | 0;
    HEAP32[i3 + 4 >> 2] = HEAP32[i21 >> 2];
    i22 = i21;
   }
   HEAP32[i22 >> 2] = i1;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
   i5 = i1;
   return i5 | 0;
  }
 }
 i1 = i2 | 0;
 i4 = i2 + 4 | 0;
 if ((i6 | 0) == (HEAP32[(i18 ? i4 : i1) >> 2] | 0)) {
  i5 = i6;
  return i5 | 0;
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if (!i18) {
  i18 = i2;
  i22 = i2 + 4 | 0;
  while (1) {
   i21 = HEAP32[i22 >> 2] | 0;
   i3 = i21;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   } else {
    i18 = i3;
    i22 = i21 + 4 | 0;
   }
  }
  i22 = i6 + 4 | 0;
  HEAP32[i18 + 4 >> 2] = HEAP32[i22 >> 2];
  if ((HEAP32[i4 >> 2] | 0) == (i6 | 0)) {
   HEAP32[i4 >> 2] = i18;
  }
  HEAP32[i22 >> 2] = HEAP32[i1 >> 2];
  HEAP32[i1 >> 2] = i6;
  HEAP8[i6 + 1 | 0] = 1;
  i5 = i6;
  return i5 | 0;
 }
 do {
  if ((i2 | 0) == (i6 | 0)) {
   i22 = i6 + 4 | 0;
   i23 = i22;
   i24 = HEAP32[i22 >> 2] | 0;
   i25 = 41;
  } else {
   i22 = i2;
   while (1) {
    i26 = i22 + 4 | 0;
    i18 = HEAP32[i26 >> 2] | 0;
    if ((i18 | 0) == (i6 | 0)) {
     break;
    } else {
     i22 = i18;
    }
   }
   i18 = i6 + 4 | 0;
   i21 = HEAP32[i18 >> 2] | 0;
   if ((i22 | 0) == 0) {
    i23 = i18;
    i24 = i21;
    i25 = 41;
    break;
   }
   HEAP32[i26 >> 2] = i21;
   i27 = i18;
  }
 } while (0);
 if ((i25 | 0) == 41) {
  HEAP32[i1 >> 2] = i24;
  i27 = i23;
 }
 HEAP32[i27 >> 2] = 0;
 HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] = i20;
 HEAP32[i4 >> 2] = i6;
 HEAP8[i6 + 1 | 0] = 0;
 i5 = i6;
 return i5 | 0;
}
function __ZN7WebCore15RenderBlockFlow44adjustLogicalLineTopAndLogicalHeightIfNeededEPNS_15ShapeInsideInfoENS_10LayoutUnitERNS_15LineLayoutStateERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEPNS_14FloatingObjectERS7_RN3WTF6VectorINS_15WordMeasurementELj64ENSE_15CrashOnOverflowEEE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i10 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i10 >> 2];
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i9 + 16 | 0;
 i13 = i9 + 24 | 0;
 i14 = i9 + 32 | 0;
 i15 = i9 + 48 | 0;
 i16 = i9 + 56 | 0;
 i17 = i7;
 if ((i2 | 0) == 0) {
  i18 = 0;
  STACKTOP = i9;
  return i18 | 0;
 }
 L4 : do {
  if ((HEAP32[i7 + 12 >> 2] | 0) == (HEAP32[i5 + 12 >> 2] | 0) & (HEAP32[i7 + 4 >> 2] | 0) == (HEAP32[i5 + 4 >> 2] | 0)) {
   i19 = i8 | 0;
   i20 = HEAP32[i8 + 8 >> 2] | 0;
   i21 = 0;
   while (1) {
    if (i21 >>> 0 >= i20 >>> 0) {
     break;
    }
    d22 = +HEAPF32[(HEAP32[i19 >> 2] | 0) + (i21 * 36 & -1) + 4 >> 2];
    if (d22 > +0) {
     i23 = 6;
     break;
    } else {
     i21 = i21 + 1 | 0;
    }
   }
   do {
    if ((i23 | 0) == 6) {
     if (!(__ZN7WebCore15ShapeInsideInfo20adjustLogicalLineTopEf(i2, d22) | 0)) {
      break;
     }
     i21 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i2 | 0) | 0;
     if ((i21 | 0) == 4) {
      i19 = HEAP32[i2 + 12 >> 2] | 0;
      i20 = i19 | 0;
      i24 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 752 >> 2] & 31](i20) | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 720 >> 2] & 7](i10, i20);
      i25 = (HEAP32[i10 >> 2] | 0) + i24 | 0;
     } else if ((i21 | 0) == 1) {
      i24 = HEAP32[i2 + 12 >> 2] | 0;
      __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i11, i24 + 60 | 0, (HEAP32[(HEAP32[i24 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
      i25 = -(HEAP32[i11 >> 2] | 0) | 0;
     } else if ((i21 | 0) == 3) {
      i21 = HEAP32[i2 + 12 >> 2] | 0;
      i25 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 752 >> 2] & 31](i21 | 0) | 0;
     } else {
      i25 = 0;
     }
     i26 = (HEAP32[i2 + 4 >> 2] | 0) + i25 | 0;
     break L4;
    }
   } while (0);
   i21 = i2 | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 7](i14, i21);
   i24 = (HEAP32[i14 + 12 >> 2] | 0) + (HEAP32[i14 + 4 >> 2] | 0) | 0;
   i20 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i21) | 0;
   if ((i20 | 0) == 4) {
    i21 = HEAP32[i2 + 12 >> 2] | 0;
    i19 = i21 | 0;
    i27 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 752 >> 2] & 31](i19) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 720 >> 2] & 7](i12, i19);
    i28 = (HEAP32[i12 >> 2] | 0) + i27 | 0;
   } else if ((i20 | 0) == 3) {
    i27 = HEAP32[i2 + 12 >> 2] | 0;
    i28 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i27 >> 2] | 0) + 752 >> 2] & 31](i27 | 0) | 0;
   } else if ((i20 | 0) == 1) {
    i20 = HEAP32[i2 + 12 >> 2] | 0;
    __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i13, i20 + 60 | 0, (HEAP32[(HEAP32[i20 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
    i28 = -(HEAP32[i13 >> 2] | 0) | 0;
   } else {
    i28 = 0;
   }
   i26 = i24 + i28 | 0;
  } else {
   i26 = 0;
  }
 } while (0);
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1024 >> 2] & 31](i1) | 0) {
   i28 = HEAP32[HEAP32[(HEAP32[i1 + 96 >> 2] | 0) + 24 >> 2] >> 2] | 0;
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    i29 = i28;
    i30 = i26;
    break;
   }
   if ((HEAP32[i1 + 20 >> 2] & 8192 | 0) == 0) {
    i13 = HEAP32[i28 + 16 >> 2] | 0;
    HEAP32[i16 >> 2] = HEAP32[i28 + 20 >> 2];
    HEAP32[i16 + 4 >> 2] = i13;
   } else {
    i13 = HEAP32[i28 + 20 >> 2] | 0;
    HEAP32[i16 >> 2] = HEAP32[i28 + 16 >> 2];
    HEAP32[i16 + 4 >> 2] = i13;
   }
   __ZNK7WebCore15ShapeInsideInfo31computeFirstFitPositionForFloatENS_10LayoutSizeE(i15, i2, i16);
   i13 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i13 | 0) == 3 | (i13 | 0) == 0) {
    i31 = i1 + 56 | 0;
   } else {
    i31 = i1 + 52 | 0;
   }
   i13 = HEAP32[i15 >> 2] | 0;
   i29 = i28;
   i30 = (HEAP32[i31 >> 2] | 0) < (i13 | 0) ? i13 : i26;
  } else {
   i29 = i6;
   i30 = i26;
  }
 } while (0);
 if ((i30 | 0) == 0) {
  i18 = 0;
  STACKTOP = i9;
  return i18 | 0;
 }
 do {
  if ((HEAP32[i4 + 44 >> 2] | 0) == 0) {
   i32 = i30 - (HEAP32[i3 >> 2] | 0) | 0;
   i33 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0;
  } else {
   HEAP32[i4 + 40 >> 2] = i30;
   i26 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0;
   i6 = i26 >>> 13 & 3;
   if ((i6 | 0) == 3 | (i6 | 0) == 0) {
    i32 = HEAP32[i1 + 56 >> 2] | 0;
    i33 = i26;
    break;
   } else {
    i32 = HEAP32[i1 + 52 >> 2] | 0;
    i33 = i26;
    break;
   }
  }
 } while (0);
 i30 = i33 >>> 13 & 3;
 if ((i30 | 0) == 3 | (i30 | 0) == 0) {
  i34 = i1 + 56 | 0;
 } else {
  i34 = i1 + 52 | 0;
 }
 __ZN7WebCore15RenderBlockFlow26removeFloatingObjectsBelowEPNS_14FloatingObjectEi(i1, i29, HEAP32[i34 >> 2] | 0);
 i34 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i34 | 0) == 3 | (i34 | 0) == 0) {
  HEAP32[i1 + 56 >> 2] = i32;
 } else {
  HEAP32[i1 + 52 >> 2] = i32;
 }
 i32 = i5;
 HEAP32[i32 >> 2] = HEAP32[i17 >> 2];
 HEAP32[i32 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
 HEAP32[i32 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
 HEAP32[i32 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
 i18 = 1;
 STACKTOP = i9;
 return i18 | 0;
}
function __ZN7WebCore15RenderBlockFlow13constructLineERNS_11BidiRunListINS_7BidiRunEEERKNS_8LineInfoE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i4 = (HEAP32[i2 + 12 >> 2] | 0) - (HEAP32[i3 + 8 >> 2] | 0) | 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = (i4 | 0) == 1;
   i8 = (i4 | 0) == 2;
   i9 = i1 + 36 | 0;
   i10 = i2 + 4 | 0;
   i11 = i3 + 2 | 0;
   i12 = i6;
   i13 = 0;
   i14 = 0;
   while (1) {
    do {
     if (i8) {
      i15 = HEAP32[i12 + 16 >> 2] | 0;
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 108 >> 2] & 31](i15) | 0) {
       i16 = i7;
       break;
      }
      i15 = HEAP32[(HEAP32[((HEAP32[(HEAP32[i9 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) == 0 ? i10 : i5) >> 2] | 0) + 16 >> 2] | 0;
      i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 108 >> 2] & 31](i15) | 0;
     } else {
      i16 = i7;
     }
    } while (0);
    do {
     if ((HEAP8[i11] & 1) == 0) {
      i15 = i12 + 16 | 0;
      i17 = __ZN7WebCoreL26createInlineBoxForRendererEPNS_12RenderObjectEbb(HEAP32[i15 >> 2] | 0, 0, i16) | 0;
      HEAP32[i12 + 20 >> 2] = i17;
      if (i14) {
       i18 = 1;
      } else {
       i18 = (HEAP32[(HEAP32[i17 + 16 >> 2] | 0) + 20 >> 2] & 234881024 | 0) != 0;
      }
      i19 = i12 | 0;
      i20 = (HEAPU8[i19] | 0) >>> 2;
      do {
       if ((i13 | 0) == 0) {
        i21 = HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] | 0;
        i22 = 13;
       } else {
        i23 = HEAP32[i13 + 16 >> 2] | 0;
        i24 = HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] | 0;
        if ((i23 | 0) != (i24 | 0)) {
         i21 = i24;
         i22 = 13;
         break;
        }
        if ((i20 & 1) != 0) {
         i21 = i23;
         i22 = 13;
         break;
        }
        __ZN7WebCore13InlineFlowBox9addToLineEPNS_9InlineBoxE(i13, i17);
        i25 = i13;
       }
      } while (0);
      if ((i22 | 0) == 13) {
       i22 = 0;
       i25 = __ZN7WebCore15RenderBlockFlow15createLineBoxesEPNS_12RenderObjectERKNS_8LineInfoEPNS_9InlineBoxEb(i1, i21 | 0, i3, i17, (i20 & 1) != 0) | 0;
      }
      i23 = HEAP32[i15 >> 2] | 0;
      if ((HEAP32[i23 + 20 >> 2] & 768 | 0) == 256) {
       i26 = HEAP32[(HEAP32[i23 + 8 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i26 = HEAP32[i23 + 36 >> 2] | 0;
      }
      i23 = HEAP32[i26 + 44 >> 2] | 0;
      i24 = i17 + 32 | 0;
      HEAP32[i24 >> 2] = (HEAPU8[i12 + 1 | 0] | 0) << 2 & 252 | HEAP32[i24 >> 2] & -253;
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 44 >> 2] & 31](i17) | 0)) {
       i27 = i18;
       i28 = i25;
       break;
      }
      i29 = i12 + 8 | 0;
      HEAP32[i17 + 44 >> 2] = HEAP32[i29 >> 2];
      HEAP16[i17 + 48 >> 1] = (HEAP32[i12 + 12 >> 2] | 0) - (HEAP32[i29 >> 2] | 0);
      i29 = (HEAP8[i19] & 1 | i23 >>> 5 & 1) << 16 | HEAP32[i24 >> 2] & -65537;
      HEAP32[i24 >> 2] = i29;
      if ((HEAP8[i19] & 2) == 0) {
       i27 = i18;
       i28 = i25;
       break;
      }
      HEAP32[i24 >> 2] = i29 | 32768;
      i27 = i18;
      i28 = i25;
     } else {
      i27 = i14;
      i28 = i13;
     }
    } while (0);
    i29 = HEAP32[i12 + 4 >> 2] | 0;
    if ((i29 | 0) == 0) {
     break;
    } else {
     i12 = i29;
     i13 = i28;
     i14 = i27;
    }
   }
   if (!i27) {
    break;
   }
   i14 = (__ZN7WebCore9InlineBox4rootEv(HEAP32[i1 + 108 >> 2] | 0) | 0) + 32 | 0;
   HEAP32[i14 >> 2] = HEAP32[i14 >> 2] | 8192;
  }
 } while (0);
 i27 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[i27 + 16 >> 2] | 0;
 L32 : do {
  if ((HEAP32[i2 + 20 >> 2] & 768 | 0) == 256) {
   if ((i27 | 0) == 0) {
    i30 = 0;
    break;
   }
   i28 = HEAP32[i27 + 12 >> 2] | 0;
   i25 = HEAP32[i2 + 44 >> 2] | 0;
   i18 = HEAP32[i25 + 4 >> 2] | 0;
   if (i28 >>> 0 >= i18 >>> 0) {
    i30 = 0;
    break;
   }
   if ((HEAP32[i25 + 16 >> 2] & 32 | 0) == 0) {
    i26 = HEAP32[i25 + 8 >> 2] | 0;
    i21 = i28;
    while (1) {
     i22 = HEAP16[i26 + (i21 << 1) >> 1] | 0;
     if ((i22 & 65535) >>> 0 >= 33 >>> 0) {
      i30 = 1;
      break L32;
     }
     if (!(i22 << 16 >> 16 == 32 | (i22 - 9 & 65535) >>> 0 < 5 >>> 0)) {
      i30 = 1;
      break L32;
     }
     i22 = i21 + 1 | 0;
     if (i22 >>> 0 < i18 >>> 0) {
      i21 = i22;
     } else {
      i30 = 0;
      break;
     }
    }
   } else {
    i21 = HEAP32[i25 + 8 >> 2] | 0;
    i26 = i28;
    while (1) {
     i22 = HEAP8[i21 + i26 | 0] | 0;
     if ((i22 & 255) >>> 0 >= 33 >>> 0) {
      i30 = 1;
      break L32;
     }
     if (!(i22 << 24 >> 24 == 32 | (i22 - 9 & 255) >>> 0 < 5 >>> 0)) {
      i30 = 1;
      break L32;
     }
     i22 = i26 + 1 | 0;
     if (i22 >>> 0 < i18 >>> 0) {
      i26 = i22;
     } else {
      i30 = 0;
      break;
     }
    }
   }
  } else {
   i30 = 1;
  }
 } while (0);
 i27 = i1 + 108 | 0;
 __ZN7WebCore13InlineFlowBox28determineSpacingForFlowBoxesEbbPNS_12RenderObjectE(HEAP32[i27 >> 2] | 0, (HEAP8[i3 + 1 | 0] & 1) != 0, i30, i2);
 i2 = HEAP32[i27 >> 2] | 0;
 i30 = i2 + 32 | 0;
 HEAP32[i30 >> 2] = HEAP32[i30 >> 2] | 2;
 i30 = HEAP32[i2 + 40 >> 2] | 0;
 if ((i30 | 0) == 0) {
  i31 = HEAP32[i27 >> 2] | 0;
  i32 = i31;
  return i32 | 0;
 } else {
  i33 = i30;
 }
 while (1) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 72 >> 2] & 31](i33);
  i33 = HEAP32[i33 + 4 >> 2] | 0;
  if ((i33 | 0) == 0) {
   break;
  }
 }
 i31 = HEAP32[i27 >> 2] | 0;
 i32 = i31;
 return i32 | 0;
}
function __ZN3WTF9HashTableIPKN7WebCore13InlineTextBoxENS_12KeyValuePairIS4_NSt3__14pairINS_6VectorIPKNS1_14SimpleFontDataELj0ENS_15CrashOnOverflowEEENS1_13GlyphOverflowEEEEENS_24KeyValuePairKeyExtractorISG_EENS_7PtrHashIS4_EENS_7HashMapIS4_SF_SK_NS_10HashTraitsIS4_EENSM_ISF_EEE18KeyValuePairTraitsESN_E6rehashEiPSG_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i1 + 4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 i5 = i1 + 8 | 0;
 HEAP32[i5 >> 2] = i2 - 1;
 i9 = __ZN3WTF10fastMallocEj(i2 * 36 & -1) | 0;
 if ((i2 | 0) > 0) {
  i10 = i4 + 24 | 0;
  i11 = i4 | 0;
  i12 = 0;
  while (1) {
   _llvm_lifetime_start(20, 0, i10 | 0);
   _llvm_lifetime_start(20, 0, i11 | 0);
   _memset(i11 | 0, 0, 17) | 0;
   HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i10 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
   HEAP32[i10 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
   HEAP32[i10 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
   HEAP32[i10 + 16 >> 2] = HEAP32[i11 + 16 >> 2];
   _llvm_lifetime_end(20, 0, i11 | 0);
   i13 = i9 + (i12 * 36 & -1) + 16 | 0;
   _memset(i9 + (i12 * 36 & -1) | 0, 0, 16) | 0;
   HEAP32[i13 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i13 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
   HEAP32[i13 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
   HEAP32[i13 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
   HEAP32[i13 + 16 >> 2] = HEAP32[i10 + 16 >> 2];
   _llvm_lifetime_end(20, 0, i10 | 0);
   i12 = i12 + 1 | 0;
   if ((i12 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i7 >> 2] = i9;
 if ((i6 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i14 = 0;
  i15 = i8;
  __ZN3WTF8fastFreeEPv(i15);
  STACKTOP = i4;
  return i14 | 0;
 } else {
  i16 = 0;
  i17 = 0;
 }
 while (1) {
  i9 = i8 + (i16 * 36 & -1) | 0;
  i2 = i9 | 0;
  i12 = HEAP32[i2 >> 2] | 0;
  i10 = i12;
  if ((i10 | 0) == (-1 | 0) | (i10 | 0) == 0) {
   i18 = i17;
  } else {
   i11 = HEAP32[i7 >> 2] | 0;
   i13 = HEAP32[i5 >> 2] | 0;
   i19 = i10 + ~(i10 << 15) | 0;
   i10 = (i19 >>> 10 ^ i19) * 9 & -1;
   i19 = i10 >>> 6 ^ i10;
   i10 = i19 + ~(i19 << 11) | 0;
   i19 = i10 >>> 16 ^ i10;
   i10 = i13 & i19;
   i20 = i11 + (i10 * 36 & -1) | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   L13 : do {
    if ((i21 | 0) == 0) {
     i22 = 0;
     i23 = i20;
     i24 = 9;
    } else {
     i25 = (i19 >>> 23) + ~i19 | 0;
     i26 = i25 << 12 ^ i25;
     i25 = i26 >>> 7 ^ i26;
     i26 = i25 << 2 ^ i25;
     i25 = i26 >>> 20 ^ i26 | 1;
     i26 = 0;
     i27 = 0;
     i28 = i10;
     i29 = i20;
     i30 = i21;
     while (1) {
      if ((i30 | 0) == (i12 | 0)) {
       i31 = i29;
       break L13;
      }
      i32 = (i30 | 0) == -1 ? i29 : i26;
      i33 = (i27 | 0) == 0 ? i25 : i27;
      i34 = i33 + i28 & i13;
      i35 = i11 + (i34 * 36 & -1) | 0;
      i36 = HEAP32[i35 >> 2] | 0;
      if ((i36 | 0) == 0) {
       i22 = i32;
       i23 = i35;
       i24 = 9;
       break;
      } else {
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
       i30 = i36;
      }
     }
    }
   } while (0);
   if ((i24 | 0) == 9) {
    i24 = 0;
    i31 = (i22 | 0) != 0 ? i22 : i23;
   }
   i11 = i31 + 12 | 0;
   if ((HEAP32[i11 >> 2] | 0) != 0) {
    HEAP32[i11 >> 2] = 0;
   }
   i13 = i31 + 4 | 0;
   i12 = HEAP32[i13 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i37 = i31 + 8 | 0;
   } else {
    HEAP32[i13 >> 2] = 0;
    i21 = i31 + 8 | 0;
    HEAP32[i21 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i12);
    i37 = i21;
   }
   HEAP32[i31 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i13 >> 2] = 0;
   HEAP32[i37 >> 2] = 0;
   HEAP32[i11 >> 2] = 0;
   i21 = i8 + (i16 * 36 & -1) + 12 | 0;
   HEAP32[i11 >> 2] = HEAP32[i21 >> 2];
   HEAP32[i21 >> 2] = 0;
   i21 = i8 + (i16 * 36 & -1) + 4 | 0;
   i11 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i21 >> 2];
   HEAP32[i21 >> 2] = i11;
   i11 = i8 + (i16 * 36 & -1) + 8 | 0;
   i21 = HEAP32[i37 >> 2] | 0;
   HEAP32[i37 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i11 >> 2] = i21;
   i21 = i31 + 16 | 0;
   i11 = i8 + (i16 * 36 & -1) + 16 | 0;
   HEAP32[i21 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i21 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
   HEAP32[i21 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
   HEAP32[i21 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
   HEAP32[i21 + 16 >> 2] = HEAP32[i11 + 16 >> 2];
   i18 = (i9 | 0) == (i3 | 0) ? i31 : i17;
  }
  i11 = i16 + 1 | 0;
  if ((i11 | 0) == (i6 | 0)) {
   break;
  } else {
   i16 = i11;
   i17 = i18;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i38 = 0;
 } else {
  i14 = i18;
  i15 = i8;
  __ZN3WTF8fastFreeEPv(i15);
  STACKTOP = i4;
  return i14 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i8 + (i38 * 36 & -1) >> 2] | 0) != -1) {
    i1 = i8 + (i38 * 36 & -1) + 12 | 0;
    if ((HEAP32[i1 >> 2] | 0) != 0) {
     HEAP32[i1 >> 2] = 0;
    }
    i1 = i8 + (i38 * 36 & -1) + 4 | 0;
    i17 = HEAP32[i1 >> 2] | 0;
    if ((i17 | 0) == 0) {
     break;
    }
    HEAP32[i1 >> 2] = 0;
    HEAP32[i8 + (i38 * 36 & -1) + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i17);
   }
  } while (0);
  i9 = i38 + 1 | 0;
  if ((i9 | 0) < (i6 | 0)) {
   i38 = i9;
  } else {
   i14 = i18;
   break;
  }
 }
 i15 = i8;
 __ZN3WTF8fastFreeEPv(i15);
 STACKTOP = i4;
 return i14 | 0;
}
function __ZN3WTF9HashTableIPKN7WebCore13InlineTextBoxENS_12KeyValuePairIS4_NSt3__14pairINS_6VectorIPKNS1_14SimpleFontDataELj0ENS_15CrashOnOverflowEEENS1_13GlyphOverflowEEEEENS_24KeyValuePairKeyExtractorISG_EENS_7PtrHashIS4_EENS_7HashMapIS4_SF_SK_NS_10HashTraitsIS4_EENSM_ISF_EEE18KeyValuePairTraitsESN_E3addINS_17HashMapTranslatorISQ_SK_EES4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SG_SI_SK_SQ_SN_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 24 | 0;
 i8 = i2 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i10 | 0) == 0) {
   i11 = 8;
  } else {
   i12 = i10 << 1;
   i11 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i12 | 0) ? i10 : i12;
  }
  __ZN3WTF9HashTableIPKN7WebCore13InlineTextBoxENS_12KeyValuePairIS4_NSt3__14pairINS_6VectorIPKNS1_14SimpleFontDataELj0ENS_15CrashOnOverflowEEENS1_13GlyphOverflowEEEEENS_24KeyValuePairKeyExtractorISG_EENS_7PtrHashIS4_EENS_7HashMapIS4_SF_SK_NS_10HashTraitsIS4_EENSM_ISF_EEE18KeyValuePairTraitsESN_E6rehashEiPSG_(i2, i11, 0) | 0;
  i13 = HEAP32[i8 >> 2] | 0;
 } else {
  i13 = i9;
 }
 i9 = HEAP32[i2 + 8 >> 2] | 0;
 i11 = HEAP32[i3 >> 2] | 0;
 i12 = i11;
 i10 = i12 + ~(i12 << 15) | 0;
 i12 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i12 >>> 6 ^ i12;
 i12 = i10 + ~(i10 << 11) | 0;
 i10 = i12 >>> 16 ^ i12;
 i12 = i10 & i9;
 i14 = i13 + (i12 * 36 & -1) | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i15 | 0) == 0) {
   i16 = i14;
   i17 = 11;
  } else {
   i18 = (i10 >>> 23) + ~i10 | 0;
   i19 = i18 << 12 ^ i18;
   i18 = i19 >>> 7 ^ i19;
   i19 = i18 << 2 ^ i18;
   i18 = i19 >>> 20 ^ i19 | 1;
   i19 = 0;
   i20 = 0;
   i21 = i12;
   i22 = i14;
   i23 = i15;
   while (1) {
    if ((i23 | 0) == (i11 | 0)) {
     i17 = 8;
     break;
    }
    i24 = (i23 | 0) == -1 ? i22 : i20;
    i25 = (i19 | 0) == 0 ? i18 : i19;
    i26 = i25 + i21 & i9;
    i27 = i13 + (i26 * 36 & -1) | 0;
    i28 = HEAP32[i27 >> 2] | 0;
    if ((i28 | 0) == 0) {
     i17 = 10;
     break;
    } else {
     i19 = i25;
     i20 = i24;
     i21 = i26;
     i22 = i27;
     i23 = i28;
    }
   }
   if ((i17 | 0) == 8) {
    i23 = i13 + ((HEAP32[i2 + 4 >> 2] | 0) * 36 & -1) | 0;
    i21 = i1;
    HEAP32[i21 >> 2] = i22;
    HEAP32[i21 + 4 >> 2] = i23;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i17 | 0) == 10) {
    if ((i24 | 0) == 0) {
     i16 = i27;
     i17 = 11;
     break;
    }
    i23 = i7;
    _llvm_lifetime_start(20, 0, i23 | 0);
    i21 = i6;
    _llvm_lifetime_start(20, 0, i21 | 0);
    _memset(i21 | 0, 0, 17) | 0;
    HEAP32[i23 >> 2] = HEAP32[i21 >> 2];
    HEAP32[i23 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
    HEAP32[i23 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
    HEAP32[i23 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
    HEAP32[i23 + 16 >> 2] = HEAP32[i21 + 16 >> 2];
    _llvm_lifetime_end(20, 0, i21 | 0);
    i21 = i24 + 16 | 0;
    _memset(i24 | 0, 0, 16) | 0;
    HEAP32[i21 >> 2] = HEAP32[i23 >> 2];
    HEAP32[i21 + 4 >> 2] = HEAP32[i23 + 4 >> 2];
    HEAP32[i21 + 8 >> 2] = HEAP32[i23 + 8 >> 2];
    HEAP32[i21 + 12 >> 2] = HEAP32[i23 + 12 >> 2];
    HEAP32[i21 + 16 >> 2] = HEAP32[i23 + 16 >> 2];
    _llvm_lifetime_end(20, 0, i23 | 0);
    i23 = i2 + 16 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) - 1;
    i29 = i24;
    i30 = HEAP32[i3 >> 2] | 0;
    i31 = i23;
    break;
   }
  }
 } while (0);
 if ((i17 | 0) == 11) {
  i29 = i16;
  i30 = i11;
  i31 = i2 + 16 | 0;
 }
 HEAP32[i29 >> 2] = i30;
 i30 = i29 + 12 | 0;
 i11 = i4 + 8 | 0;
 i16 = HEAP32[i30 >> 2] | 0;
 HEAP32[i30 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i11 >> 2] = i16;
 i16 = i29 + 4 | 0;
 i11 = i4 | 0;
 i30 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i11 >> 2] = i30;
 i30 = i29 + 8 | 0;
 i11 = i4 + 4 | 0;
 i16 = HEAP32[i30 >> 2] | 0;
 HEAP32[i30 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i11 >> 2] = i16;
 i16 = i29 + 16 | 0;
 i11 = i4 + 12 | 0;
 HEAP32[i16 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i16 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
 HEAP32[i16 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 HEAP32[i16 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
 HEAP8[i16 + 16 | 0] = HEAP8[i11 + 16 | 0] | 0;
 i11 = i2 + 12 | 0;
 i16 = (HEAP32[i11 >> 2] | 0) + 1 | 0;
 HEAP32[i11 >> 2] = i16;
 i11 = i2 + 4 | 0;
 i4 = HEAP32[i11 >> 2] | 0;
 if (((HEAP32[i31 >> 2] | 0) + i16 << 1 | 0) < (i4 | 0)) {
  i32 = i29;
  i33 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i34 = 8;
  } else {
   i31 = i4 << 1;
   i34 = (i16 * 6 & -1 | 0) < (i31 | 0) ? i4 : i31;
  }
  i31 = __ZN3WTF9HashTableIPKN7WebCore13InlineTextBoxENS_12KeyValuePairIS4_NSt3__14pairINS_6VectorIPKNS1_14SimpleFontDataELj0ENS_15CrashOnOverflowEEENS1_13GlyphOverflowEEEEENS_24KeyValuePairKeyExtractorISG_EENS_7PtrHashIS4_EENS_7HashMapIS4_SF_SK_NS_10HashTraitsIS4_EENSM_ISF_EEE18KeyValuePairTraitsESN_E6rehashEiPSG_(i2, i34, i29) | 0;
  i32 = i31;
  i33 = HEAP32[i11 >> 2] | 0;
 }
 i11 = (HEAP32[i8 >> 2] | 0) + (i33 * 36 & -1) | 0;
 i33 = i1;
 HEAP32[i33 >> 2] = i32;
 HEAP32[i33 + 4 >> 2] = i11;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
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
    if ((i14 | 0) == 14) {
     i16 = 1;
     i17 = 0;
     i18 = HEAP32[i12 + 4 >> 2] & 63;
     i19 = 13;
    } else if ((i14 | 0) == 16) {
     i13 = HEAP32[i12 + 8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i20 = i12;
      break;
     }
     i21 = i13 | 0;
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
     if ((i12 | 0) == 0) {
      i20 = i13;
      break;
     }
     i21 = i12 | 0;
     i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i22 | 0) == 0) {
      __ZN7WebCore11BidiContextD2Ev(i12);
      __ZN3WTF8fastFreeEPv(i12);
      i20 = i13;
      break;
     } else {
      HEAP32[i21 >> 2] = i22;
      i20 = i13;
      break;
     }
    } else {
     i13 = (i14 | 0) == 15;
     i22 = i13 & 1;
     i21 = (i14 | 0) == 12;
     i23 = HEAP32[i12 + 4 >> 2] & 63;
     if (!(i21 | i13 ^ 1)) {
      i16 = i22;
      i17 = 1;
      i18 = i23;
      i19 = 13;
      break;
     }
     i24 = i23 + 2 & 126;
     i25 = i22;
     i26 = i21;
     i19 = 15;
    }
   } while (0);
   if ((i19 | 0) == 13) {
    i19 = 0;
    i24 = i18 + 1 & 255 | 1;
    i25 = i16;
    i26 = i17;
    i19 = 15;
   }
   do {
    if ((i19 | 0) == 15) {
     i19 = 0;
     if ((i24 & 255) >>> 0 >= 61 >>> 0) {
      i20 = i12;
      break;
     }
     __ZN7WebCore11BidiContext6createEh14UCharDirectionbNS_19BidiEmbeddingSourceEPS0_(i3, i24, i25, i26, i15, i12);
     i14 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i12 | 0) == 0) {
      i20 = i14;
      break;
     }
     i21 = i12 | 0;
     i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i22 | 0) == 0) {
      __ZN7WebCore11BidiContextD2Ev(i12);
      __ZN3WTF8fastFreeEPv(i12);
     } else {
      HEAP32[i21 >> 2] = i22;
     }
     i22 = HEAP32[i11 >> 2] | 0;
     if ((i22 | 0) == 0) {
      i20 = i14;
      break;
     }
     i21 = i22 | 0;
     i23 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) == 0) {
      __ZN7WebCore11BidiContextD2Ev(i22);
      __ZN3WTF8fastFreeEPv(i22);
      i20 = i14;
      break;
     } else {
      HEAP32[i21 >> 2] = i23;
      i20 = i14;
      break;
     }
    }
   } while (0);
   i15 = i7 + 1 | 0;
   if (i15 >>> 0 < (HEAP32[i8 >> 2] | 0) >>> 0) {
    i12 = i20;
    i7 = i15;
   } else {
    i9 = i20;
    break;
   }
  }
 }
 i20 = HEAP32[i9 + 4 >> 2] | 0;
 i7 = i20 & 63;
 i12 = i6 & 255;
 if ((i7 & 255) >>> 0 > (i6 & 255) >>> 0) {
  __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE27raiseExplicitEmbeddingLevelE14UCharDirectionS4_(i1, i12 & 1, i20 & 1);
  i19 = 30;
 } else {
  if ((i7 & 255) >>> 0 < (i6 & 255) >>> 0) {
   __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE27lowerExplicitEmbeddingLevelE14UCharDirection(i1, i12 & 1);
  }
  if ((i9 | 0) == 0) {
   i27 = 1;
  } else {
   i19 = 30;
  }
 }
 if ((i19 | 0) == 30) {
  i19 = i9 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
  i27 = 0;
 }
 i19 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 do {
  if ((i19 | 0) != 0) {
   i4 = i19 | 0;
   i12 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore11BidiContextD2Ev(i19);
    __ZN3WTF8fastFreeEPv(i19);
    break;
   } else {
    HEAP32[i4 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i19 = i1 + 184 | 0;
 do {
  if ((HEAP32[i19 >> 2] | 0) != 0) {
   if ((HEAP32[i8 >> 2] | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
   }
   i12 = i5 | 0;
   i4 = HEAP32[i12 >> 2] | 0;
   i20 = i1 + 192 | 0;
   if ((i20 | 0) == (i4 | 0) | (i4 | 0) == 0) {
    i28 = i4;
   } else {
    HEAP32[i12 >> 2] = 0;
    HEAP32[i19 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i4);
    i28 = HEAP32[i12 >> 2] | 0;
   }
   if ((i28 | 0) != 0) {
    break;
   }
   HEAP32[i12 >> 2] = i20;
   HEAP32[i19 >> 2] = 8;
  }
 } while (0);
 i19 = i6 << 24 >> 24 != i7 << 24 >> 24;
 if (i27) {
  STACKTOP = i2;
  return i19 | 0;
 }
 i27 = i9 | 0;
 i7 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  __ZN7WebCore11BidiContextD2Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
  STACKTOP = i2;
  return i19 | 0;
 } else {
  HEAP32[i27 >> 2] = i7;
  STACKTOP = i2;
  return i19 | 0;
 }
 return 0;
}
function __ZN7WebCore15RenderBlockFlow15createLineBoxesEPNS_12RenderObjectERKNS_8LineInfoEPNS_9InlineBoxEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i6 = i1 | 0;
 i7 = i1 | 0;
 i8 = i3 | 0;
 i3 = i1 + 20 | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 24 >> 2] | 0) + 92 >> 2] & 127 | 0) == 19) {
  i9 = i2;
  i10 = i4;
  i11 = 2;
  i12 = 0;
 } else {
  i1 = i2;
  i2 = i4;
  i4 = 2;
  i13 = 0;
  while (1) {
   i14 = (i1 | 0) == (i7 | 0);
   if (i14 | (i1 | 0) == 0) {
    i15 = HEAP32[i1 + 108 >> 2] | 0;
   } else {
    i15 = HEAP32[i1 + 48 >> 2] | 0;
   }
   i16 = (i15 | 0) == 0;
   do {
    if (i5) {
     if (i16) {
      i17 = 37;
      break;
     }
     i18 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 48 >> 2] & 31](i15 | 0) | 0) & 1 ^ 1;
     i17 = 32;
    } else {
     if (i16) {
      i17 = 37;
     } else {
      i18 = 0;
      i17 = 32;
     }
    }
   } while (0);
   L12 : do {
    if ((i17 | 0) == 32) {
     i17 = 0;
     i16 = i15;
     while (1) {
      if ((HEAP32[i16 + 32 >> 2] & 2 | 0) != 0) {
       i17 = 37;
       break L12;
      }
      if ((HEAP32[i16 + 4 >> 2] | 0) != 0) {
       i17 = 37;
       break L12;
      }
      i16 = HEAP32[i16 + 12 >> 2] | 0;
      if ((i16 | 0) == 0) {
       break;
      }
     }
     if (i18 << 24 >> 24 == 0) {
      i19 = 1;
      i20 = i15;
     } else {
      i17 = 37;
     }
    }
   } while (0);
   L19 : do {
    if ((i17 | 0) == 37) {
     i17 = 0;
     i16 = __ZN7WebCoreL26createInlineBoxForRendererEPNS_12RenderObjectEbb(i1, i14, 0) | 0;
     i21 = i16;
     i22 = i16 + 32 | 0;
     i23 = HEAP32[i22 >> 2] & -2 | HEAP8[i8] & 1;
     HEAP32[i22 >> 2] = i23;
     HEAP32[i22 >> 2] = (HEAP32[i3 >> 2] | 0) >>> 13 << 11 & 2048 | i23 & -2049;
     i23 = i21;
     i22 = HEAP32[i16 + 56 >> 2] | 0;
     while (1) {
      HEAP32[i23 + 56 >> 2] = i22 & -17;
      i16 = HEAP32[i23 + 12 >> 2] | 0;
      if ((i16 | 0) == 0) {
       i19 = 0;
       i20 = i21;
       break L19;
      }
      i24 = HEAP32[i16 + 56 >> 2] | 0;
      if ((i24 & 16 | 0) == 0) {
       i19 = 0;
       i20 = i21;
       break;
      } else {
       i23 = i16;
       i22 = i24;
      }
     }
    }
   } while (0);
   i22 = (i13 | 0) == 0 ? i20 : i13;
   if ((i2 | 0) != 0) {
    __ZN7WebCore13InlineFlowBox9addToLineEPNS_9InlineBoxE(i20, i2);
   }
   if (i19 | i14) {
    i25 = i22;
    break;
   }
   if (i4 >>> 0 > 199 >>> 0) {
    i26 = i6;
   } else {
    i26 = HEAP32[i1 + 8 >> 2] | 0;
   }
   i1 = i26 | 0;
   i2 = i20 | 0;
   i4 = i4 + 1 | 0;
   i13 = i22;
  }
  return i25 | 0;
 }
 while (1) {
  i13 = (i9 | 0) == (i7 | 0);
  do {
   if (i13) {
    i17 = 5;
   } else {
    if ((i9 | 0) == 0) {
     i17 = 5;
     break;
    }
    i27 = (HEAP8[i9 + 25 | 0] & 1) == 0;
    i28 = HEAP32[i9 + 48 >> 2] | 0;
   }
  } while (0);
  if ((i17 | 0) == 5) {
   i17 = 0;
   i27 = 0;
   i28 = HEAP32[i9 + 108 >> 2] | 0;
  }
  i14 = (i28 | 0) == 0;
  do {
   if (i5) {
    if (i14) {
     i29 = 0;
     break;
    }
    i30 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 48 >> 2] & 31](i28 | 0) | 0) & 1 ^ 1;
    i17 = 10;
   } else {
    if (i14) {
     i29 = 0;
    } else {
     i30 = 0;
     i17 = 10;
    }
   }
  } while (0);
  if ((i17 | 0) == 10) {
   i17 = 0;
   i14 = i28;
   while (1) {
    if ((HEAP32[i14 + 32 >> 2] & 2 | 0) != 0) {
     i31 = 0;
     break;
    }
    if ((HEAP32[i14 + 4 >> 2] | 0) != 0) {
     i31 = 0;
     break;
    }
    i4 = HEAP32[i14 + 12 >> 2] | 0;
    if ((i4 | 0) == 0) {
     i31 = 1;
     break;
    } else {
     i14 = i4;
    }
   }
   i29 = i30 << 24 >> 24 == 0 & i31;
  }
  if (i27 | i29) {
   if (i29) {
    i32 = 1;
    i33 = i28;
    i17 = 18;
   } else {
    i34 = i10;
    i35 = i12;
   }
  } else {
   i14 = __ZN7WebCoreL26createInlineBoxForRendererEPNS_12RenderObjectEbb(i9, i13, 0) | 0;
   i4 = i14 + 32 | 0;
   i20 = HEAP32[i4 >> 2] & -2 | HEAP8[i8] & 1;
   HEAP32[i4 >> 2] = i20;
   HEAP32[i4 >> 2] = (HEAP32[i3 >> 2] | 0) >>> 13 << 11 & 2048 | i20 & -2049;
   i32 = 0;
   i33 = i14;
   i17 = 18;
  }
  if ((i17 | 0) == 18) {
   i17 = 0;
   i14 = (i12 | 0) == 0 ? i33 : i12;
   if ((i10 | 0) != 0) {
    __ZN7WebCore13InlineFlowBox9addToLineEPNS_9InlineBoxE(i33, i10);
   }
   if (i32 | i13) {
    i25 = i14;
    break;
   }
   i34 = i33 | 0;
   i35 = i14;
  }
  if (i11 >>> 0 > 199 >>> 0) {
   i36 = i6;
  } else {
   i36 = HEAP32[i9 + 8 >> 2] | 0;
  }
  i9 = i36 | 0;
  i10 = i34;
  i11 = i11 + 1 | 0;
  i12 = i35;
 }
 return i25 | 0;
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
      i19 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] & 3](i23, 32) | 0;
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
      i22 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i20 >> 2] | 0) + 8 >> 2] & 3](i20, 32) | 0;
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
function __ZN7WebCore15RenderBlockFlow29addOverflowFromInlineChildrenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, d34 = +0, d35 = +0, d36 = +0, d37 = +0, d38 = +0, d39 = +0, d40 = +0, d41 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 40 | 0;
 i7 = i2 + 56 | 0;
 i8 = i2 + 64 | 0;
 i9 = i2 + 80 | 0;
 i10 = i2 + 88 | 0;
 i11 = i2 + 104 | 0;
 i12 = HEAP32[i1 + 112 >> 2] | 0;
 if ((i12 | 0) != 0) {
  __ZN7WebCore16SimpleLineLayout19collectFlowOverflowERNS_15RenderBlockFlowERKNS0_6LayoutE(i1, i12);
  STACKTOP = i2;
  return;
 }
 i12 = i1 + 20 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if ((i13 & 65536 | 0) == 0) {
  HEAP32[i5 >> 2] = 0;
  i14 = i13;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 732 >> 2] & 7](i5, i1 | 0);
  i14 = HEAP32[i12 >> 2] | 0;
 }
 do {
  if ((i14 & 65536 | 0) != 0) {
   i13 = i5 | 0;
   if ((HEAP32[i13 >> 2] | 0) != 0) {
    break;
   }
   if ((i14 & 128 | 0) != 0) {
    break;
   }
   i15 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   if (!(__ZNK7WebCore4Node21isRootEditableElementEv(i15) | 0)) {
    break;
   }
   if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) == 0) {
    break;
   }
   HEAP32[i13 >> 2] = 1;
  }
 } while (0);
 i14 = HEAP32[i1 + 104 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i13 = i1 | 0;
 i1 = i5 | 0;
 i5 = i7 | 0;
 i15 = i9 | 0;
 i16 = i3 | 0;
 i17 = i3 + 4 | 0;
 i18 = i3 + 8 | 0;
 i19 = i3 + 12 | 0;
 i20 = i4 | 0;
 i21 = i4 + 4 | 0;
 i22 = i4 + 8 | 0;
 i23 = i4 + 12 | 0;
 i24 = i11;
 i25 = i10;
 i26 = i14;
 while (1) {
  i14 = i26;
  HEAP32[i5 >> 2] = HEAP32[i1 >> 2];
  __ZNK7WebCore13RootInlineBox24paddedLayoutOverflowRectENS_10LayoutUnitE(i6, i14, i7);
  __ZN7WebCore9RenderBox17addLayoutOverflowERKNS_10LayoutRectE(i13, i6);
  i27 = __ZNK7WebCore13RootInlineBox16containingRegionEv(i14) | 0;
  i28 = (i27 | 0) != 0;
  if (i28) {
   HEAP32[i15 >> 2] = HEAP32[i1 >> 2];
   __ZNK7WebCore13RootInlineBox24paddedLayoutOverflowRectENS_10LayoutUnitE(i8, i14, i9);
   __ZN7WebCore12RenderRegion23addLayoutOverflowForBoxEPKNS_9RenderBoxERKNS_10LayoutRectE(i27, i13, i8);
  }
  do {
   if ((HEAP32[i12 >> 2] & 65536 | 0) == 0) {
    i14 = i26 + 72 | 0;
    i29 = HEAP32[i14 >> 2] | 0;
    i30 = i26 + 76 | 0;
    i31 = HEAP32[i30 >> 2] | 0;
    i32 = i26 + 36 | 0;
    i33 = HEAP32[i32 >> 2] | 0;
    if ((i33 | 0) == 0) {
     if ((HEAP32[i26 + 32 >> 2] & 2048 | 0) == 0) {
      d34 = +HEAPF32[i26 + 28 >> 2];
      d35 = +(i31 - i29 | 0);
      d36 = +HEAPF32[i26 + 24 >> 2];
      d37 = +(i29 | 0);
     } else {
      d34 = +(i31 - i29 | 0);
      d35 = +HEAPF32[i26 + 28 >> 2];
      d36 = +(i29 | 0);
      d37 = +HEAPF32[i26 + 20 >> 2];
     }
     HEAPF32[i16 >> 2] = d37;
     HEAPF32[i17 >> 2] = d36;
     HEAPF32[i18 >> 2] = d35;
     HEAPF32[i19 >> 2] = d34;
     __ZN7WebCore19enclosingLayoutRectERKNS_9FloatRectE(i10, i3);
    } else {
     i29 = i33 + 20 | 0;
     HEAP32[i25 >> 2] = HEAP32[i29 >> 2];
     HEAP32[i25 + 4 >> 2] = HEAP32[i29 + 4 >> 2];
     HEAP32[i25 + 8 >> 2] = HEAP32[i29 + 8 >> 2];
     HEAP32[i25 + 12 >> 2] = HEAP32[i29 + 12 >> 2];
    }
    __ZN7WebCore9RenderBox17addVisualOverflowERKNS_10LayoutRectE(i13, i10);
    if (!i28) {
     break;
    }
    i29 = HEAP32[i14 >> 2] | 0;
    i14 = HEAP32[i30 >> 2] | 0;
    i30 = HEAP32[i32 >> 2] | 0;
    if ((i30 | 0) == 0) {
     if ((HEAP32[i26 + 32 >> 2] & 2048 | 0) == 0) {
      d38 = +HEAPF32[i26 + 28 >> 2];
      d39 = +(i14 - i29 | 0);
      d40 = +HEAPF32[i26 + 24 >> 2];
      d41 = +(i29 | 0);
     } else {
      d38 = +(i14 - i29 | 0);
      d39 = +HEAPF32[i26 + 28 >> 2];
      d40 = +(i29 | 0);
      d41 = +HEAPF32[i26 + 20 >> 2];
     }
     HEAPF32[i20 >> 2] = d41;
     HEAPF32[i21 >> 2] = d40;
     HEAPF32[i22 >> 2] = d39;
     HEAPF32[i23 >> 2] = d38;
     __ZN7WebCore19enclosingLayoutRectERKNS_9FloatRectE(i11, i4);
    } else {
     i29 = i30 + 20 | 0;
     HEAP32[i24 >> 2] = HEAP32[i29 >> 2];
     HEAP32[i24 + 4 >> 2] = HEAP32[i29 + 4 >> 2];
     HEAP32[i24 + 8 >> 2] = HEAP32[i29 + 8 >> 2];
     HEAP32[i24 + 12 >> 2] = HEAP32[i29 + 12 >> 2];
    }
    __ZN7WebCore12RenderRegion23addVisualOverflowForBoxEPKNS_9RenderBoxERKNS_10LayoutRectE(i27, i13, i11);
   }
  } while (0);
  i26 = HEAP32[i26 + 52 >> 2] | 0;
  if ((i26 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15RenderBlockFlow30updateLogicalWidthForAlignmentERKNS_10ETextAlignEPNS_7BidiRunERfS6_S6_i(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var d8 = +0, i9 = 0, i10 = 0, d11 = +0, d12 = +0, d13 = +0, i14 = 0, d15 = +0, d16 = +0, d17 = +0;
 L1 : do {
  switch (HEAP32[i2 >> 2] | 0) {
  case 8:
   {
    d8 = +HEAPF32[i6 >> 2];
    i9 = (i3 | 0) == 0;
    if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0) {
     if (!i9) {
      i10 = i3 + 20 | 0;
      HEAPF32[i5 >> 2] = +HEAPF32[i5 >> 2] - +HEAPF32[(HEAP32[i10 >> 2] | 0) + 28 >> 2];
      HEAPF32[(HEAP32[i10 >> 2] | 0) + 28 >> 2] = +0;
     }
     d11 = +HEAPF32[i5 >> 2];
     if (d11 >= d8) {
      return;
     }
     HEAPF32[i4 >> 2] = d8 - d11 + +HEAPF32[i4 >> 2];
     return;
    }
    if (!i9) {
     HEAPF32[(HEAP32[i3 + 20 >> 2] | 0) + 28 >> 2] = +0;
     return;
    }
    d11 = +HEAPF32[i5 >> 2];
    if (d11 <= d8) {
     return;
    }
    HEAPF32[i4 >> 2] = +HEAPF32[i4 >> 2] - (d11 - d8);
    return;
   }
  case 1:
  case 5:
   {
    d8 = +HEAPF32[i6 >> 2];
    if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) == 0) {
     d11 = +HEAPF32[i5 >> 2];
     if (d11 <= d8 | (i3 | 0) == 0) {
      HEAPF32[i4 >> 2] = d8 - d11 + +HEAPF32[i4 >> 2];
      return;
     } else {
      i9 = i3 + 20 | 0;
      i10 = (HEAP32[i9 >> 2] | 0) + 28 | 0;
      d12 = d8 + (+HEAPF32[i10 >> 2] - d11);
      HEAPF32[i10 >> 2] = d12 > +0 ? d12 : +0;
      HEAPF32[i5 >> 2] = +HEAPF32[i5 >> 2] - +HEAPF32[(HEAP32[i9 >> 2] | 0) + 28 >> 2];
      return;
     }
    }
    if ((i3 | 0) != 0) {
     i9 = i3 + 20 | 0;
     HEAPF32[i5 >> 2] = +HEAPF32[i5 >> 2] - +HEAPF32[(HEAP32[i9 >> 2] | 0) + 28 >> 2];
     HEAPF32[(HEAP32[i9 >> 2] | 0) + 28 >> 2] = +0;
    }
    d12 = +HEAPF32[i5 >> 2];
    if (d12 >= d8) {
     return;
    }
    HEAPF32[i4 >> 2] = d8 - d12 + +HEAPF32[i4 >> 2];
    return;
   }
  case 0:
  case 4:
   {
    d12 = +HEAPF32[i6 >> 2];
    if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0) {
     d8 = +HEAPF32[i5 >> 2];
     if (d8 <= d12 | (i3 | 0) == 0) {
      return;
     }
     i9 = (HEAP32[i3 + 20 >> 2] | 0) + 28 | 0;
     d11 = d12 + (+HEAPF32[i9 >> 2] - d8);
     HEAPF32[i9 >> 2] = d11 > +0 ? d11 : +0;
     return;
    }
    if ((i3 | 0) != 0) {
     HEAPF32[(HEAP32[i3 + 20 >> 2] | 0) + 28 >> 2] = +0;
     return;
    }
    d11 = +HEAPF32[i5 >> 2];
    if (d11 <= d12) {
     return;
    }
    HEAPF32[i4 >> 2] = +HEAPF32[i4 >> 2] - (d11 - d12);
    return;
   }
  case 2:
  case 6:
   {
    i9 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) == 0;
    d12 = +HEAPF32[i6 >> 2];
    if ((i3 | 0) == 0) {
     d13 = +0;
    } else {
     i10 = i3 + 20 | 0;
     d11 = +HEAPF32[i5 >> 2] - +HEAPF32[(HEAP32[i10 >> 2] | 0) + 28 >> 2];
     HEAPF32[i5 >> 2] = d11;
     i14 = (HEAP32[i10 >> 2] | 0) + 28 | 0;
     d8 = +HEAPF32[i14 >> 2];
     d15 = (d12 - d11 + +1) * +.5;
     d11 = d15 < d8 ? d15 : d8;
     HEAPF32[i14 >> 2] = d11 > +0 ? d11 : +0;
     d13 = d11;
    }
    d11 = +HEAPF32[i5 >> 2];
    if (i9) {
     d8 = d12 - d11;
     if (d11 > d12) {
      d16 = d8;
     } else {
      d16 = d8 * +.5 - d13;
     }
     d17 = d16 + +HEAPF32[i4 >> 2];
    } else {
     d8 = (d12 - d11) * +.5;
     d17 = (d8 < +0 ? +0 : d8) + +HEAPF32[i4 >> 2];
    }
    HEAPF32[i4 >> 2] = d17;
    return;
   }
  case 7:
   {
    break;
   }
  case 3:
   {
    FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1152 >> 2] & 1](i1, i7, i4, i6);
    if ((i7 | 0) == 0) {
     break L1;
    }
    if ((i3 | 0) == 0) {
     return;
    }
    i9 = i3 + 20 | 0;
    HEAPF32[i5 >> 2] = +HEAPF32[i5 >> 2] - +HEAPF32[(HEAP32[i9 >> 2] | 0) + 28 >> 2];
    HEAPF32[(HEAP32[i9 >> 2] | 0) + 28 >> 2] = +0;
    return;
   }
  default:
   {
    return;
   }
  }
 } while (0);
 d17 = +HEAPF32[i6 >> 2];
 d16 = +HEAPF32[i5 >> 2];
 i6 = d16 <= d17 | (i3 | 0) == 0;
 if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0) {
  if (i6) {
   return;
  }
  i1 = (HEAP32[i3 + 20 >> 2] | 0) + 28 | 0;
  d13 = d17 + (+HEAPF32[i1 >> 2] - d16);
  HEAPF32[i1 >> 2] = d13 > +0 ? d13 : +0;
  return;
 }
 if (i6) {
  HEAPF32[i4 >> 2] = d17 - d16 + +HEAPF32[i4 >> 2];
  return;
 } else {
  i4 = i3 + 20 | 0;
  i3 = (HEAP32[i4 >> 2] | 0) + 28 | 0;
  d13 = d17 + (+HEAPF32[i3 >> 2] - d16);
  HEAPF32[i3 >> 2] = d13 > +0 ? d13 : +0;
  HEAPF32[i5 >> 2] = +HEAPF32[i5 >> 2] - +HEAPF32[(HEAP32[i4 >> 2] | 0) + 28 >> 2];
  return;
 }
}
function __ZN7WebCore15RenderBlockFlow22positionNewFloatOnLineEPNS_14FloatingObjectES2_RNS_8LineInfoERNS_9LineWidthE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 if (!(__ZN7WebCore15RenderBlockFlow17positionNewFloatsEv(i1) | 0)) {
  i9 = 0;
  STACKTOP = i6;
  return i9 | 0;
 }
 __ZN7WebCore9LineWidth39shrinkAvailableWidthForNewFloatIfNeededEPNS_14FloatingObjectE(i5, i2);
 i5 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i9 = 1;
  STACKTOP = i6;
  return i9 | 0;
 }
 if ((HEAP8[i4 + 3 | 0] & 1) == 0) {
  i9 = 1;
  STACKTOP = i6;
  return i9 | 0;
 }
 if ((HEAP8[i4 + 2 | 0] & 1) == 0) {
  i9 = 1;
  STACKTOP = i6;
  return i9 | 0;
 }
 i10 = i1 + 96 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i1 + 20 | 0;
 i13 = i1 + 36 | 0;
 i14 = (HEAP32[(HEAP32[i13 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i14 | 0) == 3 | (i14 | 0) == 0) {
  i15 = i1 + 56 | 0;
 } else {
  i15 = i1 + 52 | 0;
 }
 i14 = i4 + 4 | 0;
 if (((HEAP32[((HEAP32[i12 >> 2] & 8192 | 0) == 0 ? i2 + 8 | 0 : i2 + 12 | 0) >> 2] | 0) - i5 | 0) != ((HEAP32[i14 >> 2] | 0) + (HEAP32[i15 >> 2] | 0) | 0)) {
  i9 = 1;
  STACKTOP = i6;
  return i9 | 0;
 }
 i15 = i11 + 24 | 0;
 i2 = HEAP32[i15 >> 2] | 0;
 i4 = HEAP32[i11 + 20 >> 2] | 0;
 L20 : do {
  if ((i2 | 0) != (i4 | 0)) {
   i11 = i1 + 52 | 0;
   i16 = i1 | 0;
   i17 = i8 | 0;
   i18 = i7 | 0;
   i19 = i1 + 56 | 0;
   i20 = i2;
   while (1) {
    i20 = HEAP32[((i20 | 0) == 0 ? i15 : i20 + 4 | 0) >> 2] | 0;
    i21 = HEAP32[i20 >> 2] | 0;
    if ((i21 | 0) == (i3 | 0)) {
     break L20;
    }
    i22 = i21 + 12 | 0;
    i23 = i21 + 8 | 0;
    i24 = (HEAP32[(HEAP32[i13 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if ((i24 | 0) == 3 | (i24 | 0) == 0) {
     i25 = i19;
    } else {
     i25 = i11;
    }
    if ((HEAP32[((HEAP32[i12 >> 2] & 8192 | 0) == 0 ? i23 : i22) >> 2] | 0) == ((HEAP32[i14 >> 2] | 0) + (HEAP32[i25 >> 2] | 0) | 0)) {
     i24 = i21 + 24 | 0;
     HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + i5;
     i24 = i21 | 0;
     i26 = HEAP32[i24 >> 2] | 0;
     i27 = HEAP32[((HEAP32[i12 >> 2] & 8192 | 0) == 0 ? i26 + 44 | 0 : i26 + 48 | 0) >> 2] | 0;
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i26 >> 2] | 0) + 784 >> 2] & 1](i8, i26 | 0, HEAP32[i13 >> 2] | 0);
     HEAP32[i18 >> 2] = i27 + i5 + (HEAP32[i17 >> 2] | 0);
     __ZN7WebCore11RenderBlock21setLogicalTopForChildERNS_9RenderBoxENS_10LayoutUnitENS0_20ApplyLayoutDeltaModeE(i16, i26, i7, 1);
     do {
      if (__ZNK7WebCore11RenderBlock28updateRegionRangeForBoxChildERKNS_9RenderBoxE(i16, HEAP32[i24 >> 2] | 0) | 0) {
       i27 = i26 + 20 | 0;
       i28 = HEAP32[i27 >> 2] | 0;
       if ((i28 & 1 | 0) != 0) {
        i29 = i27;
        break;
       }
       HEAP32[i27 >> 2] = i28 | 1;
       if ((i28 & 32768 | 0) == 0) {
        i29 = i27;
        break;
       }
       __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i26 | 0);
       i29 = i27;
      } else {
       i27 = i26 + 20 | 0;
       if ((HEAP32[i26 + 24 >> 2] & 16 | 0) == 0) {
        i29 = i27;
        break;
       }
       i28 = HEAP32[i27 >> 2] | 0;
       if ((i28 & 4 | 0) != 0) {
        i29 = i27;
        break;
       }
       HEAP32[i27 >> 2] = i28 | 4;
       i29 = i27;
      }
     } while (0);
     if ((HEAP32[i29 >> 2] & 31 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 652 >> 2] & 31](i26 | 0);
     }
     i24 = HEAP32[((HEAP32[i12 >> 2] & 8192 | 0) == 0 ? i23 : i22) >> 2] | 0;
     __ZN7WebCore15FloatingObjects18removePlacedObjectEPNS_14FloatingObjectE(HEAP32[i10 >> 2] | 0, i21);
     i27 = i24 + i5 | 0;
     if ((HEAP32[i12 >> 2] & 8192 | 0) == 0) {
      HEAP32[i23 >> 2] = i27;
     } else {
      HEAP32[i22 >> 2] = i27;
     }
     __ZN7WebCore15FloatingObjects15addPlacedObjectEPNS_14FloatingObjectE(HEAP32[i10 >> 2] | 0, i21);
    }
    if ((i20 | 0) == (i4 | 0)) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + i5;
 i9 = 1;
 STACKTOP = i6;
 return i9 | 0;
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
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 620 >> 2] & 31](i5) | 0) {
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
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 368 >> 2] & 31](i12) | 0) {
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
function __ZN7WebCore15RenderBlockFlow33checkPaginationAndFloatsAtEndLineERNS_15LineLayoutStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 + 36 | 0;
 i9 = (HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i9 | 0) == 3 | (i9 | 0) == 0) {
  i10 = i1 + 56 | 0;
 } else {
  i10 = i1 + 52 | 0;
 }
 i9 = i2 + 12 | 0;
 i11 = i7 | 0;
 i12 = (HEAP32[i10 >> 2] | 0) - (HEAP32[i9 >> 2] | 0) | 0;
 HEAP32[i11 >> 2] = i12;
 i10 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i13 = i12;
  } else {
   if ((HEAP8[i10 | 0] & 2) == 0) {
    i13 = i12;
    break;
   }
   i14 = i2 + 44 | 0;
   if ((HEAP32[i14 >> 2] | 0) == 0) {
    i13 = i12;
    break;
   }
   i15 = HEAP32[i2 + 16 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i13 = i12;
    break;
   }
   i16 = i1 | 0;
   i17 = i6 | 0;
   i18 = i4 | 0;
   i19 = i5 | 0;
   i20 = i15;
   L10 : while (1) {
    i15 = i20 + 92 | 0;
    i21 = HEAP32[i15 >> 2] | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) - i21;
    __ZN7WebCore15RenderBlockFlow31adjustLinePositionForPaginationEPNS_13RootInlineBoxERNS_10LayoutUnitEPNS_16RenderFlowThreadE(i1, i20, i7, HEAP32[i14 >> 2] | 0);
    HEAP32[i15 >> 2] = i21;
    do {
     if ((HEAP32[i14 >> 2] | 0) != 0) {
      HEAP32[i17 >> 2] = (HEAP32[i20 + 80 >> 2] | 0) + (HEAP32[i11 >> 2] | 0);
      i21 = __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i16, i6) | 0;
      if ((__ZNK7WebCore13RootInlineBox16containingRegionEv(i20) | 0) == (i21 | 0)) {
       break;
      }
      i15 = HEAP32[i20 + 96 >> 2] | 0;
      __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i4, i16, i21);
      __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i5, i16, i21);
      i21 = (HEAP32[i18 >> 2] | 0) - (HEAP32[i19 >> 2] | 0) | 0;
      if ((i15 | 0) != (((i21 | 0) > 0 ? i21 : 0) | 0)) {
       i22 = 0;
       i23 = 33;
       break L10;
      }
     }
    } while (0);
    i21 = HEAP32[i20 + 52 >> 2] | 0;
    if ((i21 | 0) == 0) {
     i23 = 13;
     break;
    } else {
     i20 = i21;
    }
   }
   if ((i23 | 0) == 13) {
    i13 = HEAP32[i11 >> 2] | 0;
    break;
   } else if ((i23 | 0) == 33) {
    STACKTOP = i3;
    return i22 | 0;
   }
  }
 } while (0);
 if ((i13 | 0) == 0) {
  i22 = 1;
  STACKTOP = i3;
  return i22 | 0;
 }
 i11 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i22 = 1;
  STACKTOP = i3;
  return i22 | 0;
 }
 i5 = (HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i24 = i1 + 56 | 0;
 } else {
  i24 = i1 + 52 | 0;
 }
 i5 = HEAP32[i24 >> 2] | 0;
 i24 = HEAP32[i9 >> 2] | 0;
 i9 = (i24 | 0) < (i5 | 0);
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 while (1) {
  i2 = HEAP32[i8 + 52 >> 2] | 0;
  if ((i2 | 0) == 0) {
   break;
  } else {
   i8 = i2;
  }
 }
 i2 = i9 ? i24 : i5;
 i5 = ((i13 | 0) > -1 ? i13 : -i13 | 0) + (HEAP32[i8 + 84 >> 2] | 0) | 0;
 i8 = HEAP32[i11 + 20 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i22 = 1;
  STACKTOP = i3;
  return i22 | 0;
 }
 i11 = (HEAP32[i1 + 20 >> 2] & 8192 | 0) == 0;
 i1 = i8;
 while (1) {
  i8 = HEAP32[i1 >> 2] | 0;
  if (i11) {
   i25 = (HEAP32[i8 + 16 >> 2] | 0) + (HEAP32[i8 + 8 >> 2] | 0) | 0;
  } else {
   i25 = (HEAP32[i8 + 20 >> 2] | 0) + (HEAP32[i8 + 12 >> 2] | 0) | 0;
  }
  if ((i25 | 0) >= (i2 | 0)) {
   if (i11) {
    i26 = (HEAP32[i8 + 16 >> 2] | 0) + (HEAP32[i8 + 8 >> 2] | 0) | 0;
   } else {
    i26 = (HEAP32[i8 + 20 >> 2] | 0) + (HEAP32[i8 + 12 >> 2] | 0) | 0;
   }
   if ((i26 | 0) < (i5 | 0)) {
    i22 = 0;
    i23 = 35;
    break;
   }
  }
  i8 = HEAP32[i1 + 8 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i22 = 1;
   i23 = 36;
   break;
  } else {
   i1 = i8;
  }
 }
 if ((i23 | 0) == 35) {
  STACKTOP = i3;
  return i22 | 0;
 } else if ((i23 | 0) == 36) {
  STACKTOP = i3;
  return i22 | 0;
 }
 return 0;
}
function __ZN7WebCore15RenderBlockFlow25startAlignedOffsetForLineENS_10LayoutUnitEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, d34 = +0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i5 + 112 | 0;
 i21 = i5 + 120 | 0;
 i22 = i5 + 128 | 0;
 i23 = i5 + 136 | 0;
 i24 = i5 + 144 | 0;
 i25 = i5 + 152 | 0;
 i26 = i2 + 36 | 0;
 i27 = (HEAP32[(HEAP32[i26 >> 2] | 0) + 40 >> 2] | 0) >>> 13 & 15;
 HEAP32[i18 >> 2] = i27;
 do {
  if ((i27 | 0) != 7) {
   if ((HEAP8[(__ZNK7WebCore8Document8settingsEv(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) + 192 | 0] & 64) != 0) {
    break;
   }
   HEAPF32[i21 >> 2] = +0;
   i28 = i2 | 0;
   i29 = (HEAP32[(HEAP32[i26 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i29 | 0) == 3 | (i29 | 0) == 0) {
    i30 = i2 + 56 | 0;
   } else {
    i30 = i2 + 52 | 0;
   }
   i29 = HEAP32[i30 >> 2] | 0;
   HEAP32[i10 >> 2] = i29;
   __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i11, i28, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i28, i10) | 0);
   i31 = HEAP32[i11 >> 2] | 0;
   i32 = i2;
   i33 = HEAP32[(HEAP32[i32 >> 2] | 0) + 1072 >> 2] | 0;
   HEAP32[i7 >> 2] = i29;
   HEAP32[i8 >> 2] = i31;
   HEAP32[i9 >> 2] = 0;
   FUNCTION_TABLE_viiiii[i33 & 3](i6, i28, i7, i8, i9);
   __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i23, i28, i6, 0);
   d34 = +(HEAP32[i23 >> 2] | 0);
   HEAPF32[i22 >> 2] = d34;
   i33 = (HEAP32[(HEAP32[i26 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i33 | 0) == 3 | (i33 | 0) == 0) {
    i35 = i2 + 56 | 0;
   } else {
    i35 = i2 + 52 | 0;
   }
   i33 = HEAP32[i35 >> 2] | 0;
   HEAP32[i16 >> 2] = i33;
   __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i17, i28, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i28, i16) | 0);
   i31 = HEAP32[i17 >> 2] | 0;
   i29 = HEAP32[(HEAP32[i32 >> 2] | 0) + 1068 >> 2] | 0;
   HEAP32[i13 >> 2] = i33;
   HEAP32[i14 >> 2] = i31;
   HEAP32[i15 >> 2] = 0;
   FUNCTION_TABLE_viiiii[i29 & 3](i12, i28, i13, i14, i15);
   __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i25, i28, i12, 0);
   HEAPF32[i24 >> 2] = +(HEAP32[i25 >> 2] | 0) - d34;
   __ZN7WebCore15RenderBlockFlow30updateLogicalWidthForAlignmentERKNS_10ETextAlignEPNS_7BidiRunERfS6_S6_i(i2, i18, 0, i22, i21, i24, 0);
   i28 = HEAP32[i26 >> 2] | 0;
   if ((HEAP32[i28 + 40 >> 2] & 1073741824 | 0) != 0) {
    d34 = +HEAPF32[i22 >> 2];
    do {
     if (d34 < +2147483647) {
      if (d34 <= +-2147483648) {
       i36 = -2147483648;
       break;
      }
      i36 = ~~d34;
     } else {
      i36 = 2147483647;
     }
    } while (0);
    HEAP32[i1 >> 2] = i36;
    STACKTOP = i5;
    return;
   }
   i29 = (HEAP32[i28 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i29 | 0) == 3 | (i29 | 0) == 0) {
    i37 = i2 + 52 | 0;
   } else {
    i37 = i2 + 56 | 0;
   }
   d34 = +(HEAP32[i37 >> 2] | 0) - +HEAPF32[i22 >> 2];
   do {
    if (d34 < +2147483647) {
     if (d34 <= +-2147483648) {
      i38 = -2147483648;
      break;
     }
     i38 = ~~d34;
    } else {
     i38 = 2147483647;
    }
   } while (0);
   HEAP32[i1 >> 2] = i38;
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP32[i19 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i20 >> 2] = 0;
 __ZNK7WebCore11RenderBlock18startOffsetForLineENS_10LayoutUnitEbS1_(i1, i2 | 0, i19, i4, i20);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15RenderBlockFlow19appendRunsForObjectERNS_11BidiRunListINS_7BidiRunEEEiiPNS_12RenderObjectERNS_12BidiResolverINS_14InlineIteratorES2_EE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 if ((i2 | 0) > (i3 | 0)) {
  return;
 }
 i6 = i4 + 20 | 0;
 i7 = i4 + 8 | 0;
 i8 = i4 + 36 | 0;
 i9 = i5 + 156 | 0;
 i10 = i5 + 152 | 0;
 i11 = i5 + 148 | 0;
 i12 = i5 + 140 | 0;
 i13 = i5 + 160 | 0;
 i14 = i5 + 76 | 0;
 i15 = i5 + 80 | 0;
 i5 = i1 | 0;
 i16 = i1 + 4 | 0;
 i17 = i1 + 12 | 0;
 i1 = i2;
 L4 : while (1) {
  i2 = HEAP32[i6 >> 2] | 0;
  if ((i2 & 64 | 0) != 0) {
   i18 = 36;
   break;
  }
  L7 : do {
   if ((i2 & 25165824 | 0) == 16777216) {
    if ((i2 & 768 | 0) == 256) {
     i19 = HEAP32[(HEAP32[i7 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i19 = HEAP32[i8 >> 2] | 0;
    }
    switch ((HEAP32[i19 + 48 >> 2] | 0) >>> 5 & 31 | 0) {
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
    if ((HEAP32[(__ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i4, 0, 0) | 0) + 24 >> 2] & 4 | 0) == 0) {
     i18 = 37;
     break L4;
    }
   }
  } while (0);
  i2 = HEAP32[i9 >> 2] | 0;
  i20 = i2 >>> 0 < (HEAP32[i10 >> 2] | 0) >>> 0;
  if (i20) {
   if ((HEAP32[i11 >> 2] | 0) >>> 0 <= i2 >>> 0) {
    i18 = 12;
    break;
   }
   i21 = HEAP32[i12 >> 2] | 0;
   i22 = HEAP32[i21 + (i2 << 4) + 4 >> 2] | 0;
   i23 = HEAP32[i21 + (i2 << 4) + 12 >> 2] | 0;
  } else {
   i22 = 0;
   i23 = 0;
  }
  i21 = i20 & (i22 | 0) == (i4 | 0);
  do {
   if ((HEAP8[i13] & 1) == 0) {
    if (!i21) {
     i18 = 19;
     break L4;
    }
    i20 = i23 + 1 | 0;
    if ((i20 | 0) > (i3 | 0)) {
     i18 = 30;
     break L4;
    }
    HEAP8[i13] = 1;
    HEAP32[i9 >> 2] = i2 + 1;
    if ((i23 | 0) == -1) {
     i18 = 42;
     break L4;
    }
    if ((i20 | 0) <= (i1 | 0)) {
     i24 = i20;
     break;
    }
    i25 = __Znwj(24) | 0;
    i26 = i25;
    __ZN7WebCore7BidiRunC1EiiRNS_12RenderObjectEPNS_11BidiContextE14UCharDirection(i26, i1, i20, i4, HEAP32[i14 >> 2] | 0, HEAP32[i15 >> 2] | 0);
    if ((HEAP32[i5 >> 2] | 0) == 0) {
     HEAP32[i5 >> 2] = i26;
    } else {
     HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] = i25;
    }
    HEAP32[i16 >> 2] = i26;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    i24 = i20;
   } else {
    if (!i21) {
     i18 = 38;
     break L4;
    }
    HEAP8[i13] = 0;
    HEAP32[i9 >> 2] = i2 + 1;
    if ((i23 | 0) < (i3 | 0)) {
     i24 = i23;
    } else {
     i18 = 39;
     break L4;
    }
   }
  } while (0);
  if ((i24 | 0) > (i3 | 0)) {
   i18 = 40;
   break;
  } else {
   i1 = i24;
  }
 }
 if ((i18 | 0) == 12) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i18 | 0) == 19) {
  i24 = __Znwj(24) | 0;
  i23 = i24;
  __ZN7WebCore7BidiRunC1EiiRNS_12RenderObjectEPNS_11BidiContextE14UCharDirection(i23, i1, i3, i4, HEAP32[i14 >> 2] | 0, HEAP32[i15 >> 2] | 0);
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   HEAP32[i5 >> 2] = i23;
  } else {
   HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] = i24;
  }
  HEAP32[i16 >> 2] = i23;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
  return;
 } else if ((i18 | 0) == 30) {
  i23 = __Znwj(24) | 0;
  i24 = i23;
  __ZN7WebCore7BidiRunC1EiiRNS_12RenderObjectEPNS_11BidiContextE14UCharDirection(i24, i1, i3, i4, HEAP32[i14 >> 2] | 0, HEAP32[i15 >> 2] | 0);
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   HEAP32[i5 >> 2] = i24;
  } else {
   HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] = i23;
  }
  HEAP32[i16 >> 2] = i24;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
  return;
 } else if ((i18 | 0) == 36) {
  return;
 } else if ((i18 | 0) == 37) {
  return;
 } else if ((i18 | 0) == 38) {
  return;
 } else if ((i18 | 0) == 39) {
  return;
 } else if ((i18 | 0) == 40) {
  return;
 } else if ((i18 | 0) == 42) {
  return;
 }
}
function __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE21reorderRunsFromLevelsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i2 = i1 + 124 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = -128;
  i5 = 0;
 } else {
  i6 = -128;
  i7 = 0;
  i8 = i3;
  while (1) {
   i3 = HEAP8[i8 + 1 | 0] | 0;
   i9 = (i3 & 255) >>> 0 < (i7 & 255) >>> 0 ? i7 : i3;
   i10 = (i6 & 255) >>> 0 < (i3 & 255) >>> 0 ? i6 : i3;
   i3 = HEAP32[i8 + 4 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i4 = i10;
    i5 = i9;
    break;
   } else {
    i6 = i10;
    i7 = i9;
    i8 = i3;
   }
  }
 }
 i8 = (i4 & 1 ^ 1) + i4 & 255;
 i4 = (HEAP32[i1 + 136 >> 2] | 0) - 1 | 0;
 if ((i5 & 255) >>> 0 < (i8 & 255) >>> 0) {
  return;
 }
 i7 = (i4 | 0) == 0;
 i6 = i1 + 128 | 0;
 i1 = i5;
 while (1) {
  if (!i7) {
   i5 = HEAP32[i2 >> 2] | 0;
   i3 = 0;
   while (1) {
    L14 : do {
     if (i3 >>> 0 >= i4 >>> 0 | (i5 | 0) == 0) {
      i11 = i5;
      i12 = i3;
     } else {
      i9 = i5;
      i10 = i3;
      while (1) {
       if ((HEAPU8[i9 + 1 | 0] | 0) >>> 0 >= (i1 & 255) >>> 0) {
        i11 = i9;
        i12 = i10;
        break L14;
       }
       i13 = HEAP32[i9 + 4 >> 2] | 0;
       i14 = i13;
       i15 = i10 + 1 | 0;
       if (i15 >>> 0 >= i4 >>> 0 | (i13 | 0) == 0) {
        i11 = i14;
        i12 = i15;
        break;
       } else {
        i9 = i14;
        i10 = i15;
       }
      }
     }
    } while (0);
    L19 : do {
     if (i12 >>> 0 > i4 >>> 0 | (i11 | 0) == 0) {
      i16 = i11;
      i17 = i12;
     } else {
      i10 = i11;
      i9 = i12;
      while (1) {
       if ((HEAPU8[i10 + 1 | 0] | 0) >>> 0 < (i1 & 255) >>> 0) {
        i16 = i10;
        i17 = i9;
        break L19;
       }
       i15 = HEAP32[i10 + 4 >> 2] | 0;
       i14 = i15;
       i13 = i9 + 1 | 0;
       if (i13 >>> 0 > i4 >>> 0 | (i15 | 0) == 0) {
        i16 = i14;
        i17 = i13;
        break;
       } else {
        i10 = i14;
        i9 = i13;
       }
      }
     }
    } while (0);
    i9 = i17 - 1 | 0;
    do {
     if (i12 >>> 0 < i9 >>> 0) {
      i10 = HEAP32[i2 >> 2] | 0;
      if ((i12 | 0) == 0) {
       i18 = 0;
       i19 = 0;
       i20 = i10;
      } else {
       i13 = 0;
       i14 = i10;
       while (1) {
        i10 = i13 + 1 | 0;
        i15 = HEAP32[i14 + 4 >> 2] | 0;
        if (i10 >>> 0 < i12 >>> 0) {
         i13 = i10;
         i14 = i15;
        } else {
         i18 = i12;
         i19 = i14;
         i20 = i15;
         break;
        }
       }
      }
      if (i18 >>> 0 < i9 >>> 0) {
       i14 = i18;
       i13 = i20;
       while (1) {
        i15 = i14 + 1 | 0;
        i10 = HEAP32[i13 + 4 >> 2] | 0;
        if (i15 >>> 0 < i9 >>> 0) {
         i14 = i15;
         i13 = i10;
        } else {
         i21 = i10;
         break;
        }
       }
      } else {
       i21 = i20;
      }
      i13 = HEAP32[i21 + 4 >> 2] | 0;
      if (i12 >>> 0 <= i9 >>> 0) {
       i14 = i12;
       i10 = i13;
       i15 = i20;
       while (1) {
        i22 = i15 + 4 | 0;
        i23 = HEAP32[i22 >> 2] | 0;
        HEAP32[i22 >> 2] = i10;
        i22 = i14 + 1 | 0;
        if (i22 >>> 0 > i9 >>> 0) {
         break;
        } else {
         i14 = i22;
         i10 = i15;
         i15 = i23;
        }
       }
      }
      if ((i19 | 0) == 0) {
       HEAP32[i2 >> 2] = i21;
      } else {
       HEAP32[i19 + 4 >> 2] = i21;
      }
      HEAP32[i20 + 4 >> 2] = i13;
      if ((i13 | 0) != 0) {
       break;
      }
      HEAP32[i6 >> 2] = i20;
     }
    } while (0);
    if (i17 >>> 0 < i4 >>> 0) {
     i5 = i16;
     i3 = i17;
    } else {
     break;
    }
   }
  }
  i1 = i1 - 1 & 255;
  if ((i1 & 255) >>> 0 < (i8 & 255) >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore15RenderBlockFlow22checkFloatsInCleanLineEPNS_13RootInlineBoxERN3WTF6VectorINS_13FloatWithRectELj0ENS3_15CrashOnOverflowEEERjRbSA_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
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
 i18 = HEAP32[i2 + 100 >> 2] | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i19 = HEAP32[i18 >> 2] | 0;
 i20 = HEAP32[i18 + 8 >> 2] | 0;
 i18 = i19 + (i20 << 2) | 0;
 if ((i20 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i20 = i10 | 0;
 i21 = i11 | 0;
 i22 = i8 | 0;
 i23 = i9 | 0;
 i24 = i3 + 8 | 0;
 i25 = i3 | 0;
 i3 = i1 + 20 | 0;
 i26 = i2 | 0;
 i27 = i2;
 i28 = i2 + 84 | 0;
 i29 = i16 | 0;
 i30 = i17 | 0;
 i31 = i19;
 while (1) {
  i19 = HEAP32[i31 >> 2] | 0;
  if ((HEAP32[i19 + 20 >> 2] & 31 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 652 >> 2] & 31](i19 | 0);
  }
  i32 = HEAP32[i19 + 52 >> 2] | 0;
  i33 = i19 | 0;
  i34 = i19;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i34 >> 2] | 0) + 776 >> 2] & 7](i10, i33);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i34 >> 2] | 0) + 780 >> 2] & 7](i11, i33);
  i35 = (HEAP32[i20 >> 2] | 0) + i32 + (HEAP32[i21 >> 2] | 0) | 0;
  i32 = HEAP32[i19 + 56 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i34 >> 2] | 0) + 768 >> 2] & 7](i8, i33);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i34 >> 2] | 0) + 772 >> 2] & 7](i9, i33);
  i33 = (HEAP32[i22 >> 2] | 0) + i32 + (HEAP32[i23 >> 2] | 0) | 0;
  i32 = HEAP32[i4 >> 2] | 0;
  if ((HEAP32[i24 >> 2] | 0) >>> 0 <= i32 >>> 0) {
   i36 = 7;
   break;
  }
  i34 = HEAP32[i25 >> 2] | 0;
  if ((HEAP32[i34 + (i32 * 24 & -1) >> 2] | 0) != (i19 | 0)) {
   i36 = 9;
   break;
  }
  i19 = i34 + (i32 * 24 & -1) + 12 | 0;
  i37 = HEAP32[i19 >> 2] | 0;
  if ((i37 | 0) != (i35 | 0) | (HEAP32[i19 + 4 >> 2] | 0) != (i33 | 0)) {
   if ((HEAP32[i3 >> 2] & 8192 | 0) == 0) {
    i19 = HEAP32[i34 + (i32 * 24 & -1) + 4 >> 2] | 0;
    HEAP32[i14 >> 2] = i37;
    HEAP32[i15 >> 2] = i35;
    i38 = (i37 | 0) < (i35 | 0) ? i15 : i14;
    i39 = i19;
   } else {
    i19 = HEAP32[i34 + (i32 * 24 & -1) + 8 >> 2] | 0;
    i37 = HEAP32[i34 + (i32 * 24 & -1) + 16 >> 2] | 0;
    HEAP32[i12 >> 2] = i37;
    HEAP32[i13 >> 2] = i33;
    i38 = (i37 | 0) < (i33 | 0) ? i13 : i12;
    i39 = i19;
   }
   i19 = HEAP32[i38 >> 2] | 0;
   i37 = 2147483647 - i39 | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 100 >> 2] & 7](i26, 1);
   HEAP32[i29 >> 2] = HEAP32[i28 >> 2];
   HEAP32[i30 >> 2] = ((i37 | 0) < (i19 | 0) ? i37 : i19) + i39;
   __ZN7WebCore15RenderBlockFlow26markLinesDirtyInBlockRangeENS_10LayoutUnitES1_PNS_13RootInlineBoxE(i1, i16, i17, i2);
   i19 = HEAP32[i4 >> 2] | 0;
   if ((HEAP32[i24 >> 2] | 0) >>> 0 <= i19 >>> 0) {
    i36 = 15;
    break;
   }
   i37 = (HEAP32[i25 >> 2] | 0) + (i19 * 24 & -1) + 12 | 0;
   HEAP32[i37 >> 2] = i35;
   HEAP32[i37 + 4 >> 2] = i33;
   HEAP8[i6] = 1;
   i40 = HEAP32[i4 >> 2] | 0;
  } else {
   i40 = i32;
  }
  HEAP32[i4 >> 2] = i40 + 1;
  i32 = i31 + 4 | 0;
  if ((i32 | 0) == (i18 | 0)) {
   i36 = 22;
   break;
  } else {
   i31 = i32;
  }
 }
 if ((i36 | 0) == 15) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i36 | 0) == 9) {
  HEAP8[i5] = 1;
  STACKTOP = i7;
  return;
 } else if ((i36 | 0) == 7) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i36 | 0) == 22) {
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore15RenderBlockFlow23deleteEllipsisLineBoxesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, d44 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
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
 i21 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] | 0;
 HEAP32[i15 >> 2] = i21 >>> 13 & 15;
 i22 = (i21 & 1073741824 | 0) == 0;
 i21 = HEAP32[i1 + 104 >> 2] | 0;
 if ((i21 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i23 = i1 | 0;
 i24 = i7 | 0;
 i25 = i8 | 0;
 i26 = i1;
 i27 = i4 | 0;
 i28 = i5 | 0;
 i29 = i6 | 0;
 i30 = i17 | 0;
 i31 = i13 | 0;
 i32 = i14 | 0;
 i33 = i10 | 0;
 i34 = i11 | 0;
 i35 = i12 | 0;
 i36 = i19 | 0;
 i37 = 1;
 i38 = i21;
 while (1) {
  i21 = i38 | 0;
  i39 = i38 + 32 | 0;
  do {
   if ((HEAP32[i39 >> 2] & 32768 | 0) != 0) {
    __ZN7WebCore13RootInlineBox15clearTruncationEv(i38);
    i40 = i38 + 72 | 0;
    i41 = HEAP32[i40 >> 2] | 0;
    HEAP32[i24 >> 2] = i41;
    __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i8, i23, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i23, i7) | 0);
    i42 = HEAP32[i25 >> 2] | 0;
    i43 = HEAP32[(HEAP32[i26 >> 2] | 0) + 1072 >> 2] | 0;
    HEAP32[i27 >> 2] = i41;
    HEAP32[i28 >> 2] = i42;
    HEAP32[i29 >> 2] = 0;
    FUNCTION_TABLE_viiiii[i43 & 3](i3, i23, i4, i5, i6);
    __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i17, i23, i3, i37);
    d44 = +(HEAP32[i30 >> 2] | 0);
    HEAPF32[i16 >> 2] = d44;
    i43 = HEAP32[i40 >> 2] | 0;
    HEAP32[i31 >> 2] = i43;
    __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i14, i23, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i23, i13) | 0);
    i40 = HEAP32[i32 >> 2] | 0;
    i42 = HEAP32[(HEAP32[i26 >> 2] | 0) + 1068 >> 2] | 0;
    HEAP32[i33 >> 2] = i43;
    HEAP32[i34 >> 2] = i40;
    HEAP32[i35 >> 2] = 0;
    FUNCTION_TABLE_viiiii[i42 & 3](i9, i23, i10, i11, i12);
    __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i19, i23, i9, 0);
    HEAPF32[i18 >> 2] = +(HEAP32[i36 >> 2] | 0) - d44;
    HEAPF32[i20 >> 2] = +HEAPF32[i38 + 28 >> 2];
    __ZN7WebCore15RenderBlockFlow30updateLogicalWidthForAlignmentERKNS_10ETextAlignEPNS_7BidiRunERfS6_S6_i(i1, i15, 0, i16, i20, i18, 0);
    if (i22) {
     i42 = (HEAP32[i39 >> 2] & 2048 | 0) == 0;
     d44 = +-0 - (+HEAPF32[(i42 ? i38 + 24 | 0 : i38 + 20 | 0) >> 2] - +HEAPF32[i16 >> 2]);
     i40 = HEAP32[(HEAP32[i38 >> 2] | 0) + 24 >> 2] | 0;
     if (i42) {
      FUNCTION_TABLE_viff[i40 & 3](i21, +0, d44);
      break;
     } else {
      FUNCTION_TABLE_viff[i40 & 3](i21, d44, +0);
      break;
     }
    } else {
     i40 = (HEAP32[i39 >> 2] & 2048 | 0) == 0;
     d44 = +HEAPF32[i16 >> 2] - +HEAPF32[(i40 ? i38 + 24 | 0 : i38 + 20 | 0) >> 2];
     i42 = HEAP32[(HEAP32[i38 >> 2] | 0) + 24 >> 2] | 0;
     if (i40) {
      FUNCTION_TABLE_viff[i42 & 3](i21, +0, d44);
      break;
     } else {
      FUNCTION_TABLE_viff[i42 & 3](i21, d44, +0);
      break;
     }
    }
   }
  } while (0);
  i21 = HEAP32[i38 + 52 >> 2] | 0;
  if ((i21 | 0) == 0) {
   break;
  } else {
   i37 = 0;
   i38 = i21;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN7WebCoreL42pushShapeContentOverflowBelowTheContentBoxEPNS_15RenderBlockFlowEPNS_15ShapeInsideInfoENS_10LayoutUnitES4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 56 | 0;
 i13 = i4 + i3 | 0;
 i14 = i2 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 7](i11, i14);
 i15 = (HEAP32[i11 + 12 >> 2] | 0) + (HEAP32[i11 + 4 >> 2] | 0) | 0;
 i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i14) | 0;
 if ((i11 | 0) == 1) {
  i14 = i2 + 12 | 0;
  i16 = HEAP32[i14 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i10, i16 + 60 | 0, (HEAP32[(HEAP32[i16 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  i17 = -(HEAP32[i10 >> 2] | 0) | 0;
  i18 = i14;
 } else if ((i11 | 0) == 3) {
  i14 = i2 + 12 | 0;
  i10 = HEAP32[i14 >> 2] | 0;
  i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 752 >> 2] & 31](i10 | 0) | 0;
  i18 = i14;
 } else if ((i11 | 0) == 4) {
  i11 = i2 + 12 | 0;
  i14 = HEAP32[i11 >> 2] | 0;
  i10 = i14 | 0;
  i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 752 >> 2] & 31](i10) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 720 >> 2] & 7](i9, i10);
  i17 = (HEAP32[i9 >> 2] | 0) + i16 | 0;
  i18 = i11;
 } else {
  i17 = 0;
  i18 = i2 + 12 | 0;
 }
 i11 = i15 + i17 | 0;
 i17 = HEAP32[i18 >> 2] | 0;
 i15 = HEAP32[i2 + 24 >> 2] | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i17 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
  i16 = i17 | 0;
  i9 = i17;
  i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 752 >> 2] & 31](i16) | 0;
  i14 = i17;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 720 >> 2] & 7](i8, i16);
  i19 = HEAP32[i8 >> 2] | 0;
  i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 756 >> 2] & 31](i16) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 724 >> 2] & 7](i7, i16);
  i20 = i10 + i15 + i19 + i8 + (HEAP32[i7 >> 2] | 0) | 0;
  i21 = HEAP32[i18 >> 2] | 0;
 } else {
  i20 = i15;
  i21 = i17;
 }
 i17 = i21 | 0;
 i15 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 756 >> 2] & 31](i17) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 724 >> 2] & 7](i6, i17);
 i17 = (i20 + i4 - i15 - (HEAP32[i6 >> 2] | 0) | 0) <= (i3 | 0);
 i6 = (i11 | 0) < (i13 | 0);
 do {
  if ((i11 | 0) > (i3 | 0) & i6) {
   i13 = i2 + 48 | 0;
   if ((HEAP32[i13 >> 2] | 0) == 0) {
    break;
   }
   i15 = i2 + 52 | 0;
   if ((HEAP32[i15 >> 2] | 0) != 0) {
    HEAP32[i15 >> 2] = 0;
   }
   i15 = i2 + 44 | 0;
   i4 = HEAP32[i15 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   HEAP32[i15 >> 2] = 0;
   HEAP32[i13 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 if (!i6) {
  STACKTOP = i5;
  return;
 }
 if ((i20 | 0) == 0 | i17) {
  STACKTOP = i5;
  return;
 }
 i17 = i1 + 36 | 0;
 i6 = (HEAP32[(HEAP32[i17 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i6 | 0) == 3 | (i6 | 0) == 0) {
  i22 = i1 + 56 | 0;
 } else {
  i22 = i1 + 52 | 0;
 }
 i6 = HEAP32[i22 >> 2] | 0;
 i22 = HEAP32[i18 >> 2] | 0;
 i18 = i22 | 0;
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 756 >> 2] & 31](i18) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i22 >> 2] | 0) + 724 >> 2] & 7](i12, i18);
 i18 = i20 - i3 + i6 - i2 - (HEAP32[i12 >> 2] | 0) | 0;
 i12 = (HEAP32[(HEAP32[i17 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i12 | 0) == 3 | (i12 | 0) == 0) {
  HEAP32[i1 + 56 >> 2] = i18;
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i1 + 52 >> 2] = i18;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore15RenderBlockFlow27createLineBoxesFromBidiRunsERNS_11BidiRunListINS_7BidiRunEEERKNS_14InlineIteratorERNS_8LineInfoERNS_21VerticalPositionCacheEPS2_RN3WTF6VectorINS_15WordMeasurementELj64ENSD_15CrashOnOverflowEEE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i9 = i8 | 0;
 i10 = i8 + 24 | 0;
 i11 = i8 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  i12 = 0;
  STACKTOP = i8;
  return i12 | 0;
 }
 i13 = i3 + 4 | 0;
 HEAP8[i4 + 1 | 0] = (HEAP32[i13 >> 2] | 0) == 0 | 0;
 i3 = __ZN7WebCore15RenderBlockFlow13constructLineERNS_11BidiRunListINS_7BidiRunEEERKNS_8LineInfoE(i1, i2, i4) | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
  STACKTOP = i8;
  return i12 | 0;
 }
 i14 = i3 + 32 | 0;
 HEAP32[i14 >> 2] = (HEAP8[i4 + 3 | 0] & 1) << 12 | HEAP32[i14 >> 2] & -4097;
 i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 60 >> 2] & 31](i3 | 0) | 0;
 _memset(i9 | 0, 0, 20) | 0;
 i15 = i2 | 0;
 i2 = HEAP32[i15 >> 2] | 0;
 if (i14) {
  __ZN7WebCore15RenderBlockFlow37computeBlockDirectionPositionsForLineEPNS_13RootInlineBoxEPNS_7BidiRunERN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS5_6VectorIPKNS_14SimpleFontDataELj0ENS5_15CrashOnOverflowEEENS_13GlyphOverflowEEENS5_7PtrHashIS9_EENS5_10HashTraitsIS9_EENSM_ISJ_EEEERNS_21VerticalPositionCacheE(i1, i3, i2, i9, i5);
  __ZN7WebCore16SVGRootInlineBox36computePerCharacterLayoutInformationEv(i3);
 } else {
  __ZN7WebCore15RenderBlockFlow38computeInlineDirectionPositionsForLineEPNS_13RootInlineBoxERKNS_8LineInfoEPNS_7BidiRunES7_bRN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS8_6VectorIPKNS_14SimpleFontDataELj0ENS8_15CrashOnOverflowEEENS_13GlyphOverflowEEENS8_7PtrHashISC_EENS8_10HashTraitsISC_EENSP_ISM_EEEERNS_21VerticalPositionCacheERNSF_INS_15WordMeasurementELj64ESJ_EE(i1, i3, i4, i2, i6, (HEAP32[i13 >> 2] | 0) == 0, i9, i5, i7);
  __ZN7WebCore15RenderBlockFlow37computeBlockDirectionPositionsForLineEPNS_13RootInlineBoxEPNS_7BidiRunERN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS5_6VectorIPKNS_14SimpleFontDataELj0ENS5_15CrashOnOverflowEEENS_13GlyphOverflowEEENS5_7PtrHashIS9_EENS5_10HashTraitsIS9_EENSM_ISJ_EEEERNS_21VerticalPositionCacheE(i1, i3, HEAP32[i15 >> 2] | 0, i9, i5);
 }
 HEAP32[i10 >> 2] = HEAP32[i3 + 72 >> 2];
 HEAP32[i11 >> 2] = HEAP32[i3 + 76 >> 2];
 __ZN7WebCore13InlineFlowBox15computeOverflowENS_10LayoutUnitES1_RN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS2_6VectorIPKNS_14SimpleFontDataELj0ENS2_15CrashOnOverflowEEENS_13GlyphOverflowEEENS2_7PtrHashIS6_EENS2_10HashTraitsIS6_EENSJ_ISG_EEEE(i3 | 0, i10, i11, i9);
 i11 = HEAP32[i9 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i12 = i3;
  STACKTOP = i8;
  return i12 | 0;
 }
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 if ((i10 | 0) > 0) {
  i9 = 0;
  while (1) {
   do {
    if ((HEAP32[i11 + (i9 * 36 & -1) >> 2] | 0) != -1) {
     i5 = i11 + (i9 * 36 & -1) + 12 | 0;
     if ((HEAP32[i5 >> 2] | 0) != 0) {
      HEAP32[i5 >> 2] = 0;
     }
     i5 = i11 + (i9 * 36 & -1) + 4 | 0;
     i15 = HEAP32[i5 >> 2] | 0;
     if ((i15 | 0) == 0) {
      break;
     }
     HEAP32[i5 >> 2] = 0;
     HEAP32[i11 + (i9 * 36 & -1) + 8 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i15);
    }
   } while (0);
   i9 = i9 + 1 | 0;
   if ((i9 | 0) >= (i10 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i11);
 i12 = i3;
 STACKTOP = i8;
 return i12 | 0;
}
function __ZN7WebCore15RenderBlockFlow14matchedEndLineERNS_15LineLayoutStateERKNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERKS4_RKNS_10BidiStatusE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = HEAP32[i3 + 12 >> 2] | 0;
 do {
  if ((i9 | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
   if ((HEAP32[i3 + 4 >> 2] | 0) != (HEAP32[i4 + 4 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i3 + 64 >> 2] | 0) != (HEAP32[i5 >> 2] | 0)) {
    i10 = 0;
    STACKTOP = i6;
    return i10 | 0;
   }
   if ((HEAP32[i3 + 72 >> 2] | 0) != (HEAP32[i5 + 8 >> 2] | 0)) {
    i10 = 0;
    STACKTOP = i6;
    return i10 | 0;
   }
   if ((HEAP32[i3 + 68 >> 2] | 0) != (HEAP32[i5 + 4 >> 2] | 0)) {
    i10 = 0;
    STACKTOP = i6;
    return i10 | 0;
   }
   if (!(__ZN7WebCoreeqERKNS_11BidiContextES2_(HEAP32[i3 + 76 >> 2] | 0, HEAP32[i5 + 12 >> 2] | 0) | 0)) {
    i10 = 0;
    STACKTOP = i6;
    return i10 | 0;
   }
   i10 = __ZN7WebCore15RenderBlockFlow33checkPaginationAndFloatsAtEndLineERNS_15LineLayoutStateE(i1, i2) | 0;
   STACKTOP = i6;
   return i10 | 0;
  }
 } while (0);
 i5 = i2 + 16 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = 0;
  STACKTOP = i6;
  return i10 | 0;
 }
 i11 = HEAP32[i3 + 4 >> 2] | 0;
 i12 = i4;
 i13 = 0;
 while (1) {
  if ((HEAP32[i12 + 64 >> 2] | 0) == (i11 | 0)) {
   if ((HEAP32[i12 + 60 >> 2] | 0) == (i9 | 0)) {
    break;
   }
  }
  i14 = i13 + 1 | 0;
  i15 = HEAP32[i12 + 52 >> 2] | 0;
  if ((i14 | 0) > 7 | (i15 | 0) == 0) {
   i10 = 0;
   i16 = 37;
   break;
  } else {
   i12 = i15;
   i13 = i14;
  }
 }
 if ((i16 | 0) == 37) {
  STACKTOP = i6;
  return i10 | 0;
 }
 __ZNK7WebCore13RootInlineBox19lineBreakBidiStatusEv(i8, i12);
 do {
  if ((HEAP32[i8 >> 2] | 0) == (HEAP32[i3 + 64 >> 2] | 0)) {
   if ((HEAP32[i8 + 8 >> 2] | 0) != (HEAP32[i3 + 72 >> 2] | 0)) {
    i17 = 1;
    break;
   }
   if ((HEAP32[i8 + 4 >> 2] | 0) != (HEAP32[i3 + 68 >> 2] | 0)) {
    i17 = 1;
    break;
   }
   i17 = (__ZN7WebCoreeqERKNS_11BidiContextES2_(HEAP32[i8 + 12 >> 2] | 0, HEAP32[i3 + 76 >> 2] | 0) | 0) ^ 1;
  } else {
   i17 = 1;
  }
 } while (0);
 i3 = HEAP32[i8 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i16 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) == 0) {
    __ZN7WebCore11BidiContextD2Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i16;
    break;
   }
  }
 } while (0);
 if (i17) {
  i10 = 0;
  STACKTOP = i6;
  return i10 | 0;
 }
 i17 = HEAP32[i12 + 52 >> 2] | 0;
 i3 = i17;
 HEAP32[i5 >> 2] = i3;
 if ((i17 | 0) == 0) {
  i18 = 0;
 } else {
  HEAP32[i2 + 12 >> 2] = HEAP32[i12 + 84 >> 2];
  i18 = __ZN7WebCore15RenderBlockFlow33checkPaginationAndFloatsAtEndLineERNS_15LineLayoutStateE(i1, i2) | 0;
 }
 if ((i4 | 0) == (i3 | 0)) {
  i10 = i18;
  STACKTOP = i6;
  return i10 | 0;
 }
 i3 = i7 | 0;
 i1 = i4;
 while (1) {
  HEAP32[i3 >> 2] = 0;
  __ZN7WebCore15LineLayoutState25updateRepaintRangeFromBoxEPNS_13RootInlineBoxENS_10LayoutUnitE(i2, i1, i7);
  i4 = HEAP32[i1 + 52 >> 2] | 0;
  __ZN7WebCore13InlineFlowBox10deleteLineEv(i1 | 0);
  if ((i4 | 0) == 0 | (i4 | 0) == (i17 | 0)) {
   i10 = i18;
   break;
  } else {
   i1 = i4;
  }
 }
 STACKTOP = i6;
 return i10 | 0;
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore12RenderRegionELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EERKS4_PNS_24ListHashSetNodeAllocatorIS4_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore12RenderRegionELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6expandEPS6_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i10 = i9 + ~(i9 << 15) | 0;
 i9 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i9 >>> 6 ^ i9;
 i9 = i10 + ~(i10 << 11) | 0;
 i10 = i9 >>> 16 ^ i9;
 i9 = (i10 >>> 23) + ~i10 | 0;
 i11 = i9 << 12 ^ i9;
 i9 = i11 >>> 7 ^ i11;
 i11 = i9 << 2 ^ i9;
 i9 = i11 >>> 20 ^ i11 | 1;
 i11 = 0;
 i12 = i10;
 i10 = 0;
 while (1) {
  i13 = i12 & i6;
  i14 = i7 + (i13 << 2) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15;
  if ((i16 | 0) == (-1 | 0)) {
   i17 = i14;
  } else if ((i16 | 0) == 0) {
   break;
  } else {
   if ((HEAP32[i15 >> 2] | 0) == (i8 | 0)) {
    i18 = 6;
    break;
   } else {
    i17 = i11;
   }
  }
  i15 = (i10 | 0) == 0 ? i9 : i10;
  i11 = i17;
  i12 = i15 + i13 | 0;
  i10 = i15;
 }
 if ((i18 | 0) == 6) {
  i18 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i7 = i1;
  HEAP32[i7 >> 2] = i14;
  HEAP32[i7 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i11 | 0) == 0) {
  i19 = i14;
 } else {
  HEAP32[i11 >> 2] = 0;
  i14 = i2 + 16 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) - 1;
  i19 = i11;
 }
 i11 = HEAP32[i4 >> 2] | 0;
 i4 = i11 | 0;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i20 = __ZN3WTF10fastMallocEj(12) | 0;
 } else {
  i18 = HEAP32[i14 + 8 >> 2] | 0;
  do {
   if ((i18 | 0) == 0) {
    i7 = i11 + 4 | 0;
    if ((HEAP8[i7] & 1) != 0) {
     i21 = 0;
     break;
    }
    i10 = i14 + 12 | 0;
    if ((i10 | 0) != (i11 + 3080 | 0)) {
     i21 = i10;
     break;
    }
    HEAP8[i7] = 1;
    i21 = 0;
   } else {
    i21 = i18;
   }
  } while (0);
  HEAP32[i4 >> 2] = i21;
  i20 = i14;
 }
 HEAP32[i20 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i20 + 4 >> 2] = 0;
 HEAP32[i20 + 8 >> 2] = 0;
 HEAP32[i19 >> 2] = i20;
 i20 = i2 + 12 | 0;
 i3 = (HEAP32[i20 >> 2] | 0) + 1 | 0;
 HEAP32[i20 >> 2] = i3;
 i20 = i2 + 4 | 0;
 i14 = HEAP32[i20 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i3 << 1 | 0) < (i14 | 0)) {
  i22 = i19;
  i23 = i14;
 } else {
  i14 = __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore12RenderRegionELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6expandEPS6_(i2, i19) | 0;
  i22 = i14;
  i23 = HEAP32[i20 >> 2] | 0;
 }
 i20 = (HEAP32[i5 >> 2] | 0) + (i23 << 2) | 0;
 i23 = i1;
 HEAP32[i23 >> 2] = i22;
 HEAP32[i23 + 4 >> 2] = i20;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore15RenderBlockFlow37computeBlockDirectionPositionsForLineEPNS_13RootInlineBoxEPNS_7BidiRunERN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS5_6VectorIPKNS_14SimpleFontDataELj0ENS5_15CrashOnOverflowEEENS_13GlyphOverflowEEENS5_7PtrHashIS9_EENS5_10HashTraitsIS9_EENSM_ISJ_EEEERNS_21VerticalPositionCacheE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i1 + 36 | 0;
 i10 = (HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i10 | 0) == 3 | (i10 | 0) == 0) {
  HEAP32[i8 >> 2] = HEAP32[i1 + 56 >> 2];
 } else {
  HEAP32[i8 >> 2] = HEAP32[i1 + 52 >> 2];
 }
 __ZN7WebCore13RootInlineBox26alignBoxesInBlockDirectionENS_10LayoutUnitERN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS2_6VectorIPKNS_14SimpleFontDataELj0ENS2_15CrashOnOverflowEEENS_13GlyphOverflowEEENS2_7PtrHashIS6_EENS2_10HashTraitsIS6_EENSJ_ISG_EEEERNS_21VerticalPositionCacheE(i7, i2, i8, i4, i5);
 i5 = HEAP32[i7 >> 2] | 0;
 i7 = (HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i7 | 0) == 3 | (i7 | 0) == 0) {
  HEAP32[i1 + 56 >> 2] = i5;
 } else {
  HEAP32[i1 + 52 >> 2] = i5;
 }
 if ((i3 | 0) == 0) {
  i11 = i2 | 0;
  i12 = i2;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13 + 100 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  FUNCTION_TABLE_vii[i15 & 7](i11, 0);
  STACKTOP = i6;
  return;
 }
 i5 = i1 + 52 | 0;
 i7 = i1 + 56 | 0;
 i1 = i3;
 while (1) {
  i3 = HEAP32[i1 + 20 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i4 = i1 + 16 | 0;
    do {
     if ((HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 25165824 | 0) == 16777216) {
      i8 = (HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
      if ((i8 | 0) == 3 | (i8 | 0) == 0) {
       i16 = i7;
      } else {
       i16 = i5;
      }
      d17 = +(HEAP32[i16 >> 2] | 0);
      if ((HEAP32[i3 + 32 >> 2] & 2048 | 0) == 0) {
       HEAPF32[i3 + 20 >> 2] = d17;
       break;
      } else {
       HEAPF32[i3 + 24 >> 2] = d17;
       break;
      }
     }
    } while (0);
    i8 = HEAP32[i4 >> 2] | 0;
    i10 = HEAP32[i8 + 20 >> 2] | 0;
    if ((i10 & 512 | 0) != 0) {
     __ZN7WebCore9RenderBox15positionLineBoxERNS_16InlineElementBoxE(i8, i3);
     break;
    }
    if ((i10 & 256 | 0) != 0) {
     __ZN7WebCore10RenderText15positionLineBoxERNS_13InlineTextBoxE(i8, i3);
     break;
    }
    if ((i10 & 4096 | 0) == 0) {
     break;
    }
    __ZN7WebCore15RenderLineBreak23replaceInlineBoxWrapperERNS_16InlineElementBoxE(i8, i3);
   }
  } while (0);
  i1 = HEAP32[i1 + 4 >> 2] | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
 i11 = i2 | 0;
 i12 = i2;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i13 + 100 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 FUNCTION_TABLE_vii[i15 & 7](i11, 0);
 STACKTOP = i6;
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
function __ZN7WebCore15RenderBlockFlow20determineEndPositionERNS_15LineLayoutStateEPNS_13RootInlineBoxERNS_14InlineIteratorERNS_10BidiStatusE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 HEAP32[i7 >> 2] = HEAP32[i2 + 36 >> 2];
 i11 = HEAP32[i3 + 52 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i3 = i2 + 24 | 0;
 i12 = 0;
 i13 = i11;
 while (1) {
  i11 = i13;
  i14 = i13 + 32 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  if ((i15 & 256 | 0) == 0) {
   HEAP8[i8] = 0;
   HEAP8[i9] = 0;
   __ZN7WebCore15RenderBlockFlow22checkFloatsInCleanLineEPNS_13RootInlineBoxERN3WTF6VectorINS_13FloatWithRectELj0ENS3_15CrashOnOverflowEEERjRbSA_(i1, i11, i3, i7, i8, i9);
   if ((HEAP8[i8] & 1) != 0) {
    i16 = 23;
    break;
   }
   i17 = HEAP32[i14 >> 2] | 0;
  } else {
   i17 = i15;
  }
  if ((i17 & 256 | 0) == 0) {
   i18 = (i12 | 0) == 0 ? i11 : i12;
  } else {
   i18 = 0;
  }
  i11 = HEAP32[i13 + 52 >> 2] | 0;
  if ((i11 | 0) == 0) {
   break;
  } else {
   i12 = i18;
   i13 = i11;
  }
 }
 if ((i16 | 0) == 23) {
  STACKTOP = i6;
  return;
 }
 if ((i18 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i16 = HEAP32[i18 + 48 >> 2] | 0;
 i13 = HEAP32[i16 + 64 >> 2] | 0;
 i12 = HEAP32[i16 + 60 >> 2] | 0;
 HEAP32[i4 >> 2] = i1;
 HEAP32[i4 + 4 >> 2] = i13;
 HEAP32[i4 + 8 >> 2] = -1;
 HEAP32[i4 + 12 >> 2] = i12;
 __ZNK7WebCore13RootInlineBox19lineBreakBidiStatusEv(i10, i16);
 HEAP32[i5 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 i12 = i10 + 12 | 0;
 i10 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i4 = i5 + 12 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i10;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 | 0;
   i4 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore11BidiContextD2Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i10 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 | 0;
   i4 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore11BidiContextD2Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i12 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i2 + 12 >> 2] = HEAP32[i16 + 84 >> 2];
 i16 = i18;
 while (1) {
  __ZN7WebCore13InlineFlowBox11extractLineEv(i16 | 0);
  i16 = HEAP32[i16 + 52 >> 2] | 0;
  if ((i16 | 0) == 0) {
   break;
  }
 }
 HEAP32[i2 + 16 >> 2] = i18;
 STACKTOP = i6;
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
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 760 >> 2] & 31](i13) | 0) != 0) {
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
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 728 >> 2] & 7](i4, i13);
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
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 764 >> 2] & 31](i7) | 0) != 0) {
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
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 732 >> 2] & 7](i6, i7);
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
function __ZN7WebCoreL29bidiFirstSkippingEmptyInlinesERNS_13RenderElementEPNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i3 + 20 >> 2] | 0;
 do {
  if ((i5 & 768 | 0) == 256) {
   i6 = i3;
   i7 = i5;
   i8 = 19;
  } else {
   do {
    if ((HEAP32[i3 + 24 >> 2] & 4 | 0) == 0) {
     i9 = i3;
    } else {
     i10 = (i2 | 0) == 0;
     do {
      if (!i10) {
       i11 = HEAP32[i3 + 36 >> 2] | 0;
       i12 = (HEAP32[i11 + 48 >> 2] | 0) >>> 28 & 7;
       if ((i12 | 0) == 0) {
        break;
       }
       if ((i12 - 3 | 0) >>> 0 < 3 >>> 0) {
        __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE23commitExplicitEmbeddingEv(i2) | 0;
        i13 = i2 + 164 | 0;
        HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
        break;
       }
       if ((HEAP32[i2 + 164 >> 2] | 0) != 0) {
        break;
       }
       i13 = (HEAP32[i11 + 40 >> 2] & 1073741824 | 0) == 0;
       if ((i12 | 0) == 1) {
        i14 = i13 ? 14 : 11;
       } else {
        i14 = i13 ? 15 : 12;
       }
       __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE5embedE14UCharDirectionNS_19BidiEmbeddingSourceE(i2, i14, 0);
      }
     } while (0);
     if (!(__ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE(i3) | 0)) {
      i9 = __ZN7WebCoreL14bidiNextSharedINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_NS_19EmptyInlineBehaviorEPb(i1, i3, i2, 0, 0) | 0;
      break;
     }
     if (i10) {
      i4 = i3;
      return i4 | 0;
     }
     __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE23commitExplicitEmbeddingEv(i2) | 0;
     i4 = i3;
     return i4 | 0;
    }
   } while (0);
   if ((i9 | 0) == 0) {
    i15 = 0;
    break;
   }
   i6 = i9;
   i7 = HEAP32[i9 + 20 >> 2] | 0;
   i8 = 19;
  }
 } while (0);
 do {
  if ((i8 | 0) == 19) {
   if ((i7 & 768 | 0) == 256 | (i7 & 4096 | 0) != 0) {
    i15 = i6;
    break;
   }
   if ((i7 & 64 | 0) != 0 | (i7 & 25165824 | 0) == 16777216 | (i7 & 2048 | 0) != 0) {
    i15 = i6;
    break;
   }
   i15 = __ZN7WebCoreL14bidiNextSharedINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_NS_19EmptyInlineBehaviorEPb(i1, i6, i2, 0, 0) | 0;
  }
 } while (0);
 if ((i2 | 0) == 0) {
  i4 = i15;
  return i4 | 0;
 }
 __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE23commitExplicitEmbeddingEv(i2) | 0;
 i4 = i15;
 return i4 | 0;
}
function __ZN7WebCore15RenderBlockFlow20setMarginsForRubyRunEPNS_7BidiRunERNS_13RenderRubyRunEPNS_12RenderObjectERKNS_8LineInfoE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = HEAP32[i2 + 4 >> 2] | 0;
 L1 : do {
  if ((i11 | 0) == 0) {
   i12 = 0;
  } else {
   i2 = i11;
   while (1) {
    i13 = i2 + 16 | 0;
    if ((HEAP32[(HEAP32[i13 >> 2] | 0) + 20 >> 2] & 25165824 | 0) != 16777216) {
     i14 = HEAP32[i2 + 20 >> 2] | 0;
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 20 >> 2] & 31](i14) | 0)) {
      break;
     }
    }
    i14 = HEAP32[i2 + 4 >> 2] | 0;
    if ((i14 | 0) == 0) {
     i12 = 0;
     break L1;
    } else {
     i2 = i14;
    }
   }
   i12 = HEAP32[i13 >> 2] | 0;
  }
 } while (0);
 i13 = i3 + 36 | 0;
 i11 = (HEAP32[(HEAP32[i13 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0;
 __ZNK7WebCore13RenderRubyRun11getOverhangEbPNS_12RenderObjectES2_RiS3_(i3, (HEAP8[i5 | 0] & 1) != 0, i11 ? i4 : i12, i11 ? i12 : i4, i9, i10);
 i4 = i1 + 36 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i15 = HEAP32[i13 >> 2] | 0;
 } else {
  i15 = i1;
 }
 i1 = i3 + 60 | 0;
 i3 = (HEAP32[i15 + 44 >> 2] | 0) >>> 13 & 3;
 i12 = (HEAP32[i15 + 40 >> 2] | 0) >>> 30 & 1;
 HEAP32[i7 >> 2] = -(HEAP32[i9 >> 2] | 0);
 __ZN7WebCore15LayoutBoxExtent8setStartENS_11WritingModeENS_13TextDirectionENS_10LayoutUnitE(i1, i3, i12, i7);
 i7 = -(HEAP32[i10 >> 2] | 0) | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i16 = i10;
  i17 = i16 + 40 | 0;
  i18 = i17 + 4 | 0;
  i19 = i18;
  i20 = HEAP32[i19 >> 2] | 0;
  i21 = i20 >>> 13;
  i22 = i21 & 3;
  i23 = i16 + 40 | 0;
  i24 = i23;
  i25 = HEAP32[i24 >> 2] | 0;
  i26 = i25 >>> 30;
  i27 = i26 & 1;
  i28 = i8 | 0;
  HEAP32[i28 >> 2] = i7;
  __ZN7WebCore15LayoutBoxExtent6setEndENS_11WritingModeENS_13TextDirectionENS_10LayoutUnitE(i1, i22, i27, i8);
  STACKTOP = i6;
  return;
 }
 i16 = HEAP32[i13 >> 2] | 0;
 i17 = i16 + 40 | 0;
 i18 = i17 + 4 | 0;
 i19 = i18;
 i20 = HEAP32[i19 >> 2] | 0;
 i21 = i20 >>> 13;
 i22 = i21 & 3;
 i23 = i16 + 40 | 0;
 i24 = i23;
 i25 = HEAP32[i24 >> 2] | 0;
 i26 = i25 >>> 30;
 i27 = i26 & 1;
 i28 = i8 | 0;
 HEAP32[i28 >> 2] = i7;
 __ZN7WebCore15LayoutBoxExtent6setEndENS_11WritingModeENS_13TextDirectionENS_10LayoutUnitE(i1, i22, i27, i8);
 STACKTOP = i6;
 return;
}
function __ZN7WebCoreL28updateLogicalInlinePositionsERNS_15RenderBlockFlowERfS2_S2_bNS_15IndentTextOrNotENS_10LayoutUnitE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, d28 = +0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 i14 = i8 + 40 | 0;
 i15 = i8 + 48 | 0;
 i16 = i8 + 56 | 0;
 i17 = i8 + 64 | 0;
 i18 = i8 + 72 | 0;
 i19 = i8 + 80 | 0;
 i20 = i8 + 88 | 0;
 i21 = i8 + 96 | 0;
 i22 = i8 + 104 | 0;
 i23 = i8 + 112 | 0;
 i24 = i8 + 120 | 0;
 i25 = i1 | 0;
 HEAP32[i22 >> 2] = i7;
 __ZNK7WebCore11RenderBlock32minLineHeightForReplacedRendererEbNS_10LayoutUnitE(i21, i25, i5, i22);
 i22 = i1 + 36 | 0;
 i5 = (HEAP32[(HEAP32[i22 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i26 = i1 + 56 | 0;
 } else {
  i26 = i1 + 52 | 0;
 }
 i5 = HEAP32[i26 >> 2] | 0;
 i26 = (i6 | 0) == 1;
 i6 = i21 | 0;
 i21 = HEAP32[i6 >> 2] | 0;
 HEAP32[i13 >> 2] = i5;
 __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i14, i25, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i25, i13) | 0);
 i13 = HEAP32[i14 >> 2] | 0;
 i14 = i1;
 i7 = HEAP32[(HEAP32[i14 >> 2] | 0) + 1072 >> 2] | 0;
 HEAP32[i10 >> 2] = i5;
 HEAP32[i11 >> 2] = i13;
 HEAP32[i12 >> 2] = i21;
 FUNCTION_TABLE_viiiii[i7 & 3](i9, i25, i10, i11, i12);
 __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i23, i25, i9, i26);
 HEAPF32[i2 >> 2] = +(HEAP32[i23 >> 2] | 0);
 i23 = (HEAP32[(HEAP32[i22 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i23 | 0) == 3 | (i23 | 0) == 0) {
  i27 = i1 + 56 | 0;
 } else {
  i27 = i1 + 52 | 0;
 }
 i1 = HEAP32[i27 >> 2] | 0;
 i27 = HEAP32[i6 >> 2] | 0;
 HEAP32[i19 >> 2] = i1;
 __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i20, i25, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i25, i19) | 0);
 i19 = HEAP32[i20 >> 2] | 0;
 i20 = HEAP32[(HEAP32[i14 >> 2] | 0) + 1068 >> 2] | 0;
 HEAP32[i16 >> 2] = i1;
 HEAP32[i17 >> 2] = i19;
 HEAP32[i18 >> 2] = i27;
 FUNCTION_TABLE_viiiii[i20 & 3](i15, i25, i16, i17, i18);
 __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i24, i25, i15, i26);
 d28 = +(HEAP32[i24 >> 2] | 0);
 HEAPF32[i3 >> 2] = d28;
 HEAPF32[i4 >> 2] = d28 - +HEAPF32[i2 >> 2];
 STACKTOP = i8;
 return;
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore12RenderRegionELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6expandEPS6_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
   i14 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = HEAP32[i13 >> 2] | 0;
   i18 = i17;
   i19 = i18 + ~(i18 << 15) | 0;
   i18 = (i19 >>> 10 ^ i19) * 9 & -1;
   i19 = i18 >>> 6 ^ i18;
   i18 = i19 + ~(i19 << 11) | 0;
   i19 = i18 >>> 16 ^ i18;
   i18 = (i19 >>> 23) + ~i19 | 0;
   i20 = i18 << 12 ^ i18;
   i18 = i20 >>> 7 ^ i20;
   i20 = i18 << 2 ^ i18;
   i18 = i20 >>> 20 ^ i20 | 1;
   i20 = i19;
   i19 = 0;
   i21 = 0;
   while (1) {
    i22 = i20 & i16;
    i23 = i14 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    i25 = i24;
    if ((i25 | 0) == (-1 | 0)) {
     i26 = i23;
    } else if ((i25 | 0) == 0) {
     i27 = 7;
     break;
    } else {
     if ((HEAP32[i24 >> 2] | 0) == (i17 | 0)) {
      i28 = i23;
      break;
     } else {
      i26 = i21;
     }
    }
    i24 = (i19 | 0) == 0 ? i18 : i19;
    i20 = i24 + i22 | 0;
    i19 = i24;
    i21 = i26;
   }
   if ((i27 | 0) == 7) {
    i27 = 0;
    i28 = (i21 | 0) != 0 ? i21 : i23;
   }
   HEAP32[i28 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i28 : i12;
  }
  i19 = i11 + 1 | 0;
  if ((i19 | 0) == (i6 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i19;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZNK7WebCore11RenderBlock18startOffsetForLineENS_10LayoutUnitEbS1_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i7 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
 i7 = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = i6 + 64 | 0;
 i16 = i6 + 72 | 0;
 i17 = i6 + 80 | 0;
 i18 = i6 + 88 | 0;
 i19 = i6 + 96 | 0;
 i20 = HEAP32[i2 + 36 >> 2] | 0;
 if ((HEAP32[i20 + 40 >> 2] & 1073741824 | 0) != 0) {
  i21 = HEAP32[i3 >> 2] | 0;
  i22 = HEAP32[i5 >> 2] | 0;
  HEAP32[i11 >> 2] = i21;
  __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i12, i2, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i2, i11) | 0);
  i11 = HEAP32[i12 >> 2] | 0;
  i12 = HEAP32[(HEAP32[i2 >> 2] | 0) + 1072 >> 2] | 0;
  HEAP32[i8 >> 2] = i21;
  HEAP32[i9 >> 2] = i11;
  HEAP32[i10 >> 2] = i22;
  FUNCTION_TABLE_viiiii[i12 & 3](i7, i2, i8, i9, i10);
  __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i1, i2, i7, i4);
  STACKTOP = i6;
  return;
 }
 i7 = (HEAP32[i20 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i7 | 0) == 3 | (i7 | 0) == 0) {
  i23 = i2 + 52 | 0;
 } else {
  i23 = i2 + 56 | 0;
 }
 i7 = HEAP32[i23 >> 2] | 0;
 i23 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i17 >> 2] = i23;
 __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i18, i2, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i2, i17) | 0);
 i17 = HEAP32[i18 >> 2] | 0;
 i18 = HEAP32[(HEAP32[i2 >> 2] | 0) + 1068 >> 2] | 0;
 HEAP32[i14 >> 2] = i23;
 HEAP32[i15 >> 2] = i17;
 HEAP32[i16 >> 2] = i3;
 FUNCTION_TABLE_viiiii[i18 & 3](i13, i2, i14, i15, i16);
 __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i19, i2, i13, i4);
 HEAP32[i1 >> 2] = i7 - (HEAP32[i19 >> 2] | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore13RootInlineBox11appendFloatERNS_9RenderBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 100 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i2;
  i6 = i1 + 8 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  if ((i7 | 0) != (HEAP32[i1 + 4 >> 2] | 0)) {
   HEAP32[(HEAP32[i1 >> 2] | 0) + (i7 << 2) >> 2] = i2;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   STACKTOP = i3;
   return;
  }
  i8 = i7 + 1 | 0;
  i9 = i1 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  do {
   if (i10 >>> 0 > i4 >>> 0) {
    i11 = 6;
   } else {
    if ((i10 + (i7 << 2) | 0) >>> 0 <= i4 >>> 0) {
     i11 = 6;
     break;
    }
    __ZN3WTF6VectorIPN7WebCore9RenderBoxELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i8);
    i12 = HEAP32[i9 >> 2] | 0;
    i13 = i12 + (i4 - i10 >> 2 << 2) | 0;
    i14 = i12;
   }
  } while (0);
  if ((i11 | 0) == 6) {
   __ZN3WTF6VectorIPN7WebCore9RenderBoxELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i8);
   i13 = i4;
   i14 = HEAP32[i9 >> 2] | 0;
  }
  HEAP32[i14 + (HEAP32[i6 >> 2] << 2) >> 2] = HEAP32[i13 >> 2];
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  STACKTOP = i3;
  return;
 }
 i6 = __ZN3WTF10fastMallocEj(12) | 0;
 i13 = i6;
 i14 = i6;
 HEAP32[i14 >> 2] = 0;
 i9 = i6 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i4 = i6 + 8 | 0;
 HEAP32[i4 >> 2] = 1;
 i6 = __ZN3WTF18fastMallocGoodSizeEj(4) | 0;
 HEAP32[i9 >> 2] = i6 >>> 2;
 i9 = __ZN3WTF10fastMallocEj(i6) | 0;
 i6 = i9;
 HEAP32[i14 >> 2] = i6;
 do {
  if ((i9 | 0) != 0) {
   i14 = HEAP32[i4 >> 2] | 0;
   i8 = i6 + (i14 << 2) | 0;
   if ((i14 | 0) == 0) {
    break;
   } else {
    i15 = i6;
   }
   while (1) {
    HEAP32[i15 >> 2] = i2;
    i15 = i15 + 4 | 0;
    if ((i15 | 0) == (i8 | 0)) {
     break;
    }
   }
  }
 } while (0);
 i15 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i13;
 if ((i15 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i15 + 8 | 0;
 if ((HEAP32[i13 >> 2] | 0) != 0) {
  HEAP32[i13 >> 2] = 0;
 }
 i13 = i15 | 0;
 i5 = HEAP32[i13 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i13 >> 2] = 0;
  HEAP32[i15 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 __ZN3WTF8fastFreeEPv(i15);
 STACKTOP = i3;
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
function __ZN7WebCoreL26createInlineBoxForRendererEPNS_12RenderObjectEbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 if (i2) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1156 >> 2] & 7](i5, i1);
  i2 = i5 | 0;
  i5 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = i5;
  __ZN7WebCore17RenderLineBoxList13appendLineBoxENSt3__110unique_ptrINS_13InlineFlowBoxENS1_14default_deleteIS3_EEEE(i1 + 104 | 0, i6);
  i6 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  if ((i6 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
  i6 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  if ((i6 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
  i10 = i5 | 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 i5 = i1 + 20 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 & 768 | 0) == 256) {
  i10 = __ZN7WebCore19RenderTextLineBoxes22createAndAppendLineBoxERNS_10RenderTextE(i1 + 48 | 0, i1) | 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 if ((i6 & 512 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 868 >> 2] & 7](i7, i1);
  i2 = i7 | 0;
  i7 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  i10 = i7;
  STACKTOP = i4;
  return i10 | 0;
 }
 if ((i6 & 4096 | 0) == 0) {
  i10 = __ZN7WebCore12RenderInline28createAndAppendInlineFlowBoxEv(i1) | 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 __ZN7WebCore15RenderLineBreak15createInlineBoxEv(i8, i1);
 i6 = i8 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = i8 | 0;
 do {
  if (i3) {
   i11 = 131072;
  } else {
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) == 2) {
    i11 = 131072;
    break;
   }
   if ((HEAP32[i5 >> 2] & 4096 | 0) == 0) {
    i11 = 0;
    break;
   }
   i11 = ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 620 >> 2] & 31](i1) | 0) & 1) << 17;
  }
 } while (0);
 i1 = i8 + 32 | 0;
 HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -131073 | i11;
 i10 = i6;
 STACKTOP = i4;
 return i10 | 0;
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
function __ZN7WebCore11RenderBlock32generatesLineBoxesForInlineChildEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = i1;
 i1 = i4 + 4 | 0;
 HEAP32[i1 >> 2] = i2;
 i7 = i4 + 8 | 0;
 HEAP32[i7 >> 2] = -1;
 i8 = i4 + 12 | 0;
 HEAP32[i8 >> 2] = 0;
 if ((i2 | 0) == 0) {
  i9 = 0;
  i10 = (i9 | 0) != 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i2 = i5 | 0;
 i11 = i5 + 1 | 0;
 i12 = i5 + 2 | 0;
 i13 = i5 + 3 | 0;
 i14 = i5 + 4 | 0;
 i15 = i5 + 8 | 0;
 while (1) {
  HEAP8[i2] = 1;
  HEAP8[i11] = 0;
  HEAP8[i12] = 1;
  HEAP8[i13] = 1;
  HEAP32[i14 >> 2] = 0;
  HEAP32[i15 >> 2] = 0;
  i16 = __ZN7WebCore15requiresLineBoxERKNS_14InlineIteratorERKNS_8LineInfoENS_18WhitespacePositionE(i4, i5, 0) | 0;
  i17 = HEAP32[i1 >> 2] | 0;
  if (i16) {
   i9 = i17;
   i18 = 12;
   break;
  }
  if ((i17 | 0) == 0) {
   i9 = 0;
   i18 = 11;
   break;
  }
  if ((HEAP32[i17 + 20 >> 2] & 768 | 0) == 256) {
   i16 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
   HEAP32[i8 >> 2] = i16;
   if (i16 >>> 0 < (HEAP32[(HEAP32[i17 + 44 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
    i19 = i17;
   } else {
    i18 = 7;
   }
  } else {
   i18 = 7;
  }
  if ((i18 | 0) == 7) {
   i18 = 0;
   i16 = __ZN7WebCoreL14bidiNextSharedINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_NS_19EmptyInlineBehaviorEPb(HEAP32[i6 >> 2] | 0, i17, 0, 0, 0) | 0;
   HEAP32[i1 >> 2] = i16;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i7 >> 2] = -1;
   i19 = i16;
  }
  if ((i19 | 0) == 0) {
   i9 = 0;
   i18 = 10;
   break;
  }
 }
 if ((i18 | 0) == 11) {
  i10 = (i9 | 0) != 0;
  STACKTOP = i3;
  return i10 | 0;
 } else if ((i18 | 0) == 10) {
  i10 = (i9 | 0) != 0;
  STACKTOP = i3;
  return i10 | 0;
 } else if ((i18 | 0) == 12) {
  i10 = (i9 | 0) != 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 return 0;
}
function __ZNK3WTF11ListHashSetINSt3__110unique_ptrIN7WebCore14FloatingObjectENS1_14default_deleteIS4_EEEELj4ENS3_27FloatingObjectHashFunctionsEE4findIRS4_NS3_28FloatingObjectHashTranslatorEEENS_24ListHashSetConstIteratorIS7_Lj4ES8_EERKT_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] | 0;
   i6 = i5 << 2 | 0;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = i8;
   i10 = i9 + ~(i9 << 15) | 0;
   i9 = (i10 >>> 10 ^ i10) * 9 & -1;
   i10 = i9 >>> 6 ^ i9;
   i9 = i10 + ~(i10 << 11) | 0;
   i10 = i9 >>> 16 ^ i9;
   i9 = (i10 >>> 23) + ~i10 | 0;
   i11 = i9 << 12 ^ i9;
   i9 = i11 >>> 7 ^ i11;
   i11 = i9 << 2 ^ i9;
   i9 = i11 >>> 20 ^ i11 | 1;
   i11 = i10;
   i10 = 0;
   while (1) {
    i12 = i11 & i5;
    i13 = i4 + (i12 << 2) | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    i15 = i14;
    if ((i15 | 0) == 0) {
     i16 = 5;
     break;
    } else if ((i15 | 0) != (-1 | 0)) {
     if ((HEAP32[HEAP32[i14 >> 2] >> 2] | 0) == (i8 | 0)) {
      i16 = 8;
      break;
     }
    }
    i14 = (i10 | 0) == 0 ? i9 : i10;
    i11 = i14 + i12 | 0;
    i10 = i14;
   }
   if ((i16 | 0) == 8) {
    i10 = HEAP32[i2 + 4 >> 2] | 0;
    i6 = (i13 | 0) == 0 ? i4 + (i10 << 2) | 0 : i13;
    i7 = i10;
    break;
   } else if ((i16 | 0) == 5) {
    i10 = HEAP32[i2 + 4 >> 2] | 0;
    i6 = i4 + (i10 << 2) | 0;
    i7 = i10;
    break;
   }
  }
 } while (0);
 if ((i6 | 0) == (i4 + (i7 << 2) | 0)) {
  HEAP32[i1 >> 2] = i2;
  HEAP32[i1 + 4 >> 2] = 0;
  return;
 } else {
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i1 >> 2] = i2;
  HEAP32[i1 + 4 >> 2] = i7;
  return;
 }
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
function __ZN7WebCore15LineLayoutState25updateRepaintRangeFromBoxEPNS_13RootInlineBoxENS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i1 + 56 | 0;
 HEAP8[i9] = HEAP8[i9] | 8;
 i9 = HEAP32[i1 + 48 >> 2] | 0;
 i10 = i2 + 36 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i2 + 72 | 0;
  } else {
   if ((HEAP32[i2 + 32 >> 2] & 2048 | 0) == 0) {
    i12 = i11 + 20 | 0;
    break;
   } else {
    i12 = i11 + 24 | 0;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i12 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i13 = (HEAP32[((i12 | 0) > 0 ? i6 : i3) >> 2] | 0) + i11 | 0;
 HEAP32[i5 >> 2] = i13;
 i11 = i9 | 0;
 HEAP32[i11 >> 2] = HEAP32[((i13 | 0) < (HEAP32[i11 >> 2] | 0) ? i5 : i9) >> 2];
 i9 = HEAP32[i1 + 52 >> 2] | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i14 = HEAP32[i2 + 76 >> 2] | 0;
  } else {
   if ((HEAP32[i2 + 32 >> 2] & 2048 | 0) == 0) {
    i14 = (HEAP32[i1 + 28 >> 2] | 0) + (HEAP32[i1 + 20 >> 2] | 0) | 0;
    break;
   } else {
    i14 = (HEAP32[i1 + 32 >> 2] | 0) + (HEAP32[i1 + 24 >> 2] | 0) | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i8 >> 2] = 0;
 i1 = (HEAP32[((i12 | 0) < 0 ? i8 : i3) >> 2] | 0) + i14 | 0;
 HEAP32[i7 >> 2] = i1;
 i14 = i9 | 0;
 HEAP32[i14 >> 2] = HEAP32[((HEAP32[i14 >> 2] | 0) < (i1 | 0) ? i7 : i9) >> 2];
 STACKTOP = i4;
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
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 108 >> 2] & 31](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 248 >> 2] & 31](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i2 >> 2] & 768 | 0) == 768) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 236 >> 2] & 31](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 240 >> 2] & 31](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 272 >> 2] & 31](i1) | 0) ^ 1;
 return i4 | 0;
}
function __ZN7WebCore15RenderBlockFlow36updateShapeAndSegmentsForCurrentLineERPNS_15ShapeInsideInfoERKNS_10LayoutSizeERNS_15LineLayoutStateE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 if ((HEAP32[i4 + 44 >> 2] | 0) != 0) {
  __ZN7WebCore15RenderBlockFlow48updateShapeAndSegmentsForCurrentLineInFlowThreadERPNS_15ShapeInsideInfoERNS_15LineLayoutStateE(i1, i2, i4);
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i9 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i9 | 0) == 3 | (i9 | 0) == 0) {
  i10 = i1 + 56 | 0;
 } else {
  i10 = i1 + 52 | 0;
 }
 i9 = (HEAP32[i3 + 4 >> 2] | 0) + (HEAP32[i10 >> 2] | 0) | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i6, i1 | 0, (HEAP8[i4 | 0] & 1) != 0, (HEAP32[i1 + 20 >> 2] | 0) >>> 13 & 1 ^ 1, 1);
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i10;
 HEAP32[i7 + 4 >> 2] = i9;
 i10 = i6 | 0;
 HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
 __ZN7WebCore15ShapeInsideInfo21updateSegmentsForLineENS_10LayoutSizeENS_10LayoutUnitE(i4, i7, i8) | 0;
 __ZN7WebCoreL42pushShapeContentOverflowBelowTheContentBoxEPNS_15RenderBlockFlowEPNS_15ShapeInsideInfoENS_10LayoutUnitES4_(i1, HEAP32[i2 >> 2] | 0, i9, HEAP32[i10 >> 2] | 0);
 STACKTOP = i5;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_viff + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_iiiiiiii + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_fi + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_fiifffii + 2;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vi + 26;
}
function __ZN3WTF6VectorIN7WebCore13FloatWithRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZNK7WebCore15RenderBlockFlow32lineWidthForPaginatedLineChangedEPNS_13RootInlineBoxENS_10LayoutUnitEPNS_16RenderFlowThreadE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 if ((i4 | 0) == 0) {
  i9 = 0;
  STACKTOP = i5;
  return i9 | 0;
 }
 i4 = i1 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i3 >> 2] | 0) + (HEAP32[i2 + 80 >> 2] | 0);
 i3 = __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i4, i8) | 0;
 if ((__ZNK7WebCore13RootInlineBox16containingRegionEv(i2) | 0) == (i3 | 0)) {
  i9 = 0;
  STACKTOP = i5;
  return i9 | 0;
 }
 i8 = HEAP32[i2 + 96 >> 2] | 0;
 __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i6, i4, i3);
 __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i7, i4, i3);
 i3 = (HEAP32[i6 >> 2] | 0) - (HEAP32[i7 >> 2] | 0) | 0;
 i9 = (i8 | 0) != (((i3 | 0) > 0 ? i3 : 0) | 0);
 STACKTOP = i5;
 return i9 | 0;
}
function __ZN7WebCore10BidiStatusC2ENS_13TextDirectionEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 12 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = (i2 | 0) != 1;
 i2 = i7 & 1;
 HEAP32[i1 + 8 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 >> 2] = i2;
 __ZN7WebCore11BidiContext6createEh14UCharDirectionbNS_19BidiEmbeddingSourceEPS0_(i5, i7 & 1, i2, i3, 0, 0);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i5;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore11BidiContextD2Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i2 | 0;
 i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore11BidiContextD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i3 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 188 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 180 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if (!((i1 + 192 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 184 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 176 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 168 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 172 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 148 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 140 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 144 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore11BidiContextD2Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
  return;
 } else {
  HEAP32[i1 >> 2] = i2;
  return;
 }
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
      i5 = 9;
      break L3;
     }
    }
    if ((HEAP32[i4 + 24 >> 2] & 4 | 0) == 0) {
     i3 = 0;
     i5 = 10;
     break L3;
    }
    if (!(__ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE(i4) | 0)) {
     i3 = 0;
     i5 = 11;
     break L3;
    }
   }
  } while (0);
  i2 = HEAP32[i4 + 16 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = 1;
   i5 = 12;
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
 } else if ((i5 | 0) == 9) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore15RenderBlockFlow18repaintDirtyFloatsERN3WTF6VectorINS_13FloatWithRectELj0ENS1_15CrashOnOverflowEEE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = i1 | 0;
 i1 = 0;
 i5 = i3;
 while (1) {
  if (i5 >>> 0 <= i1 >>> 0) {
   i6 = 4;
   break;
  }
  i7 = HEAP32[i4 >> 2] | 0;
  do {
   if ((HEAP8[i7 + (i1 * 24 & -1) + 20 | 0] & 1) == 0) {
    i8 = HEAP32[i7 + (i1 * 24 & -1) >> 2] | 0;
    if ((HEAP32[i8 + 44 >> 2] | 0) != 0) {
     break;
    }
    if ((HEAP32[i8 + 48 >> 2] | 0) != 0) {
     break;
    }
    i9 = i8 | 0;
    if (!(__ZNK7WebCore12RenderObject27checkForRepaintDuringLayoutEv(i9) | 0)) {
     break;
    }
    __ZNK7WebCore12RenderObject7repaintEb(i9, 0);
   }
  } while (0);
  i7 = i1 + 1 | 0;
  if (i7 >>> 0 >= i3 >>> 0) {
   i6 = 13;
   break;
  }
  i1 = i7;
  i5 = HEAP32[i2 >> 2] | 0;
 }
 if ((i6 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i6 | 0) == 13) {
  return;
 }
}
function __ZN7WebCore15RenderBlockFlow28createAndAppendRootInlineBoxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1156 >> 2] & 7](i3, i1);
 i5 = i3 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = i3;
 __ZN7WebCore17RenderLineBoxList13appendLineBoxENSt3__110unique_ptrINS_13InlineFlowBoxENS1_14default_deleteIS3_EEEE(i1 + 104 | 0, i4);
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
function __ZN3WTF6VectorIPKN7WebCore14SimpleFontDataELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore14RenderTextInfoD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore24releaseLineBreakIteratorEPNS_17TextBreakIteratorE(i2);
 }
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
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN3WTF14deleteOwnedPtrIN7WebCore10TextLayoutEEEvPT_(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore14RenderTextInfoD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore24releaseLineBreakIteratorEPNS_17TextBreakIteratorE(i2);
 }
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
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN3WTF14deleteOwnedPtrIN7WebCore10TextLayoutEEEvPT_(HEAP32[i1 + 4 >> 2] | 0);
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
function __ZNK7WebCore15RenderBlockFlow19updateRegionForLineEPNS_13RootInlineBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = HEAP32[i2 + 80 >> 2];
 __ZN7WebCore13RootInlineBox19setContainingRegionEPNS_12RenderRegionE(i2, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i1 | 0, i4) | 0);
 i4 = HEAP32[i2 + 48 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = __ZNK7WebCore13RootInlineBox16containingRegionEv(i2) | 0;
 if ((i1 | 0) == (__ZNK7WebCore13RootInlineBox16containingRegionEv(i4) | 0)) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 + 56 | 0;
 HEAP32[i4 >> 2] = HEAP32[i4 >> 2] | 8388608;
 STACKTOP = i3;
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
function iiiiiiii___ZN7WebCore13RootInlineBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_10LayoutUnitESC___wrapper(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return __ZN7WebCore13RootInlineBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_10LayoutUnitESC_(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
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
function __ZN7WebCore13InlineFlowBox14setConstructedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 32 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 2;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i3 = i2;
 }
 while (1) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 72 >> 2] & 31](i3);
  i3 = HEAP32[i3 + 4 >> 2] | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
 return;
}
function viiiii___ZN7WebCore13RootInlineBox5paintERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6___wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore13RootInlineBox5paintERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
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
function __ZN7WebCore15RenderBlockFlow30appendFloatingObjectToLastLineEPNS_14FloatingObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 108 | 0;
 HEAP32[i2 + 4 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore13RootInlineBox11appendFloatERNS_9RenderBoxE(HEAP32[i3 >> 2] | 0, HEAP32[i2 >> 2] | 0);
 return;
}
function fiifffii___ZN7WebCore13RootInlineBox16placeEllipsisBoxEbfffRfRb__wrapper(i1, i2, d3, d4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return +__ZN7WebCore13RootInlineBox16placeEllipsisBoxEbfffRfRb(i1 | 0, i2 | 0, +d3, +d4, +d5, i6 | 0, i7 | 0);
}
function dynCall_iiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 return FUNCTION_TABLE_iiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0) | 0;
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
 return +FUNCTION_TABLE_fiiifiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0, i7 | 0, i8 | 0);
}
function iiiii___ZNK7WebCore13InlineFlowBox22canAccommodateEllipsisEbii__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZNK7WebCore13InlineFlowBox22canAccommodateEllipsisEbii(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function dynCall_fiifffii(i1, i2, i3, d4, d5, d6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 i7 = i7 | 0;
 i8 = i8 | 0;
 return +FUNCTION_TABLE_fiifffii[i1 & 3](i2 | 0, i3 | 0, +d4, +d5, +d6, i7 | 0, i8 | 0);
}
function __ZNK7WebCore15RenderBlockFlow20textAlignmentForLineEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] | 0) >>> 13 & 15;
 return ((i3 | 0) == 3 & (i2 ^ 1) ? 7 : i3) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore15RenderBlockFlow19createRootInlineBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __Znwj(104) | 0;
 __ZN7WebCore13RootInlineBoxC1ERNS_15RenderBlockFlowE(i3, i2);
 HEAP32[i1 >> 2] = i3;
 return;
}
function iii___ZNK7WebCore13RootInlineBox16baselinePositionENS_12FontBaselineE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore13RootInlineBox16baselinePositionENS_12FontBaselineE(i1 | 0, i2 | 0) | 0;
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
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function viff___ZN7WebCore13RootInlineBox14adjustPositionEff__wrapper(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 __ZN7WebCore13RootInlineBox14adjustPositionEff(i1 | 0, +d2, +d3);
}
function __ZN7WebCore9InlineBox9markDirtyEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 32 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -257 | (i2 & 1) << 8;
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vi___ZN7WebCore13RootInlineBox30extractLineBoxFromRenderObjectEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13RootInlineBox30extractLineBoxFromRenderObjectEv(i1 | 0);
}
function vi___ZN7WebCore13RootInlineBox29removeLineBoxFromRenderObjectEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13RootInlineBox29removeLineBoxFromRenderObjectEv(i1 | 0);
}
function vi___ZN7WebCore13RootInlineBox27attachLineBoxToRenderObjectEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13RootInlineBox27attachLineBoxToRenderObjectEv(i1 | 0);
}
function vii___ZNK7WebCore13RootInlineBox10lineHeightEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13RootInlineBox10lineHeightEv(i1 | 0, i2 | 0);
}
function b11(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(11);
 return 0;
}
function b6(i1, i2, i3, d4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(6);
 return +0;
}
function ii___ZN7WebCore13RootInlineBox14selectionStateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore13RootInlineBox14selectionStateEv(i1 | 0) | 0;
}
function b5(i1, i2, d3, d4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(5);
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
function ii___ZNK7WebCore9InlineBox14caretMinOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InlineBox14caretMinOffsetEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InlineBox14caretMaxOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InlineBox14caretMaxOffsetEv(i1 | 0) | 0;
}
function vi___ZN7WebCore13RootInlineBox15clearTruncationEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13RootInlineBox15clearTruncationEv(i1 | 0);
}
function __ZNK7WebCore9InlineBox11isLineBreakEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 20 >> 2] & 4096 | 0) != 0 | 0;
}
function __ZN7WebCore27TrailingFloatsRootInlineBoxD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13RootInlineBoxD2Ev(i1 | 0);
 __ZdlPv(i1);
 return;
}
function dynCall_viff(i1, i2, d3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 FUNCTION_TABLE_viff[i1 & 3](i2 | 0, +d3, +d4);
}
function vi___ZN7WebCore13InlineFlowBox11extractLineEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13InlineFlowBox11extractLineEv(i1 | 0);
}
function vi___ZN7WebCore13InlineFlowBox10deleteLineEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13InlineFlowBox10deleteLineEv(i1 | 0);
}
function vi___ZN7WebCore13InlineFlowBox10attachLineEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13InlineFlowBox10attachLineEv(i1 | 0);
}
function vi___ZN7WebCore9InlineBox14dirtyLineBoxesEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9InlineBox14dirtyLineBoxesEv(i1 | 0);
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore9InlineBox19calculateBoundariesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _memset(i1 | 0, 0, 16) | 0;
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
function __ZN7WebCore27TrailingFloatsRootInlineBoxD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13RootInlineBoxD2Ev(i1 | 0);
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
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZNK7WebCore27TrailingFloatsRootInlineBox20virtualLogicalHeightEv(i1) {
 i1 = i1 | 0;
 return +(+0);
}
function b2(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(2);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function dynCall_fi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_fi[i1 & 3](i2 | 0);
}
function __ZN7WebCore14RenderTextInfoC2Ev(i1) {
 i1 = i1 | 0;
 _memset(i1 | 0, 0, 36) | 0;
 return;
}
function __ZN7WebCore14RenderTextInfoC1Ev(i1) {
 i1 = i1 | 0;
 _memset(i1 | 0, 0, 36) | 0;
 return;
}
function b13(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(13);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore13RootInlineBox15isRootInlineBoxEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore13InlineFlowBox15isInlineFlowBoxEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore9InlineBox18isSVGRootInlineBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InlineBox18isSVGInlineTextBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InlineBox18isSVGInlineFlowBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InlineBox18isInlineElementBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InlineBox15isInlineTextBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b8(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(8);
}
function __ZNK7WebCore13InlineFlowBox6isLeafEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b12(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(12);
 return 0;
}
function b9(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 abort(9);
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
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
function b10(i1) {
 i1 = i1 | 0;
 abort(10);
 return +0;
}
function b7(i1) {
 i1 = i1 | 0;
 abort(7);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b1() {
 abort(1);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,viiiii___ZN7WebCore13RootInlineBox5paintERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6___wrapper,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iiiii = [b2,b2,iiiii___ZNK7WebCore13InlineFlowBox22canAccommodateEllipsisEbii__wrapper,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore14RenderTextInfoC2Ev,b3,vi___ZN7WebCore13RootInlineBox30extractLineBoxFromRenderObjectEv__wrapper,b3,vi___ZN7WebCore13InlineFlowBox11extractLineEv__wrapper,b3,vi___ZN7WebCore13RootInlineBox27attachLineBoxToRenderObjectEv__wrapper,b3,vi___ZN7WebCore9InlineBox14dirtyLineBoxesEv__wrapper,b3,__ZN7WebCore27TrailingFloatsRootInlineBoxD0Ev,b3,__ZN7WebCore14RenderTextInfoD2Ev,b3,vi___ZN7WebCore13InlineFlowBox10attachLineEv__wrapper,b3,vi___ZN7WebCore13RootInlineBox15clearTruncationEv__wrapper,b3,__ZN7WebCore13InlineFlowBox14setConstructedEv,b3,__ZN7WebCore27TrailingFloatsRootInlineBoxD1Ev,b3,vi___ZN7WebCore13InlineFlowBox10deleteLineEv__wrapper,b3,vi___ZN7WebCore13RootInlineBox29removeLineBoxFromRenderObjectEv__wrapper,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,vii___ZNK7WebCore13RootInlineBox10lineHeightEv__wrapper,b4,__ZN7WebCore9InlineBox9markDirtyEb,b4,__ZNK7WebCore9InlineBox19calculateBoundariesEv,b4];
  var FUNCTION_TABLE_fiifffii = [b5,b5,fiifffii___ZN7WebCore13RootInlineBox16placeEllipsisBoxEbfffRfRb__wrapper,b5];
  var FUNCTION_TABLE_fiiifiii = [b6,b6];
  var FUNCTION_TABLE_ii = [b7,b7,ii___ZNK7WebCore9InlineBox14caretMaxOffsetEv__wrapper,b7,__ZNK7WebCore9InlineBox18isSVGRootInlineBoxEv,b7,__ZNK7WebCore9InlineBox18isSVGInlineFlowBoxEv,b7,__ZNK7WebCore9InlineBox18isSVGInlineTextBoxEv,b7,__ZNK7WebCore13InlineFlowBox15isInlineFlowBoxEv,b7,ii___ZN7WebCore13RootInlineBox14selectionStateEv__wrapper,b7,ii___ZNK7WebCore9InlineBox14caretMinOffsetEv__wrapper,b7,__ZNK7WebCore13InlineFlowBox6isLeafEv,b7,__ZNK7WebCore13RootInlineBox15isRootInlineBoxEv,b7,__ZNK7WebCore9InlineBox11isLineBreakEv,b7,__ZNK7WebCore9InlineBox18isInlineElementBoxEv,b7,__ZNK7WebCore9InlineBox15isInlineTextBoxEv,b7,b7,b7,b7
  ,b7,b7,b7];
  var FUNCTION_TABLE_viii = [b8,b8];
  var FUNCTION_TABLE_viff = [b9,b9,viff___ZN7WebCore13RootInlineBox14adjustPositionEff__wrapper,b9];
  var FUNCTION_TABLE_fi = [b10,b10,__ZNK7WebCore27TrailingFloatsRootInlineBox20virtualLogicalHeightEv,b10];
  var FUNCTION_TABLE_iiiiiiii = [b11,b11,iiiiiiii___ZN7WebCore13RootInlineBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_10LayoutUnitESC___wrapper,b11];
  var FUNCTION_TABLE_iii = [b12,b12,iii___ZNK7WebCore13RootInlineBox16baselinePositionENS_12FontBaselineE__wrapper,b12];
  var FUNCTION_TABLE_viiii = [b13,b13];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_fiifffii: dynCall_fiifffii, dynCall_fiiifiii: dynCall_fiiifiii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_viff: dynCall_viff, dynCall_fi: dynCall_fi, dynCall_iiiiiiii: dynCall_iiiiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_fiifffii": invoke_fiifffii, "invoke_fiiifiii": invoke_fiiifiii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_viff": invoke_viff, "invoke_fi": invoke_fi, "invoke_iiiiiiii": invoke_iiiiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_fiifffii = Module["dynCall_fiifffii"] = asm["dynCall_fiifffii"];
var dynCall_fiiifiii = Module["dynCall_fiiifiii"] = asm["dynCall_fiiifiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_viff = Module["dynCall_viff"] = asm["dynCall_viff"];
var dynCall_fi = Module["dynCall_fi"] = asm["dynCall_fi"];
var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = asm["dynCall_iiiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEED2Ev","__ZN7WebCoreL29bidiFirstSkippingEmptyInlinesERNS_13RenderElementEPNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEE","__ZN7WebCore15RenderBlockFlow20setMarginsForRubyRunEPNS_7BidiRunERNS_13RenderRubyRunEPNS_12RenderObjectERKNS_8LineInfoE","__ZN7WebCore15RenderBlockFlow20handleTrailingSpacesERNS_11BidiRunListINS_7BidiRunEEEPNS_11BidiContextE","__ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE27lowerExplicitEmbeddingLevelE14UCharDirection","__ZN7WebCore15RenderBlockFlow22positionNewFloatOnLineEPNS_14FloatingObjectES2_RNS_8LineInfoERNS_9LineWidthE","__ZN7WebCore13InlineFlowBox14setConstructedEv","__ZNK7WebCore9InlineBox18isSVGInlineTextBoxEv","__ZNK7WebCore27TrailingFloatsRootInlineBox20virtualLogicalHeightEv","__ZN7WebCore15RenderBlockFlow19createRootInlineBoxEv","__ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE23commitExplicitEmbeddingEv","_memcpy","__ZN7WebCore15RenderBlockFlow15createLineBoxesEPNS_12RenderObjectERKNS_8LineInfoEPNS_9InlineBoxEb","__ZN7WebCoreL14bidiNextSharedINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_NS_19EmptyInlineBehaviorEPb","__ZNK7WebCore9InlineBox11isLineBreakEv","__ZN7WebCore15RenderBlockFlow27createLineBoxesFromBidiRunsERNS_11BidiRunListINS_7BidiRunEEERKNS_14InlineIteratorERNS_8LineInfoERNS_21VerticalPositionCacheEPS2_RN3WTF6VectorINS_15WordMeasurementELj64ENSD_15CrashOnOverflowEEE","__ZN7WebCore15RenderBlockFlow37computeBlockDirectionPositionsForLineEPNS_13RootInlineBoxEPNS_7BidiRunERN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS5_6VectorIPKNS_14SimpleFontDataELj0ENS5_15CrashOnOverflowEEENS_13GlyphOverflowEEENS5_7PtrHashIS9_EENS5_10HashTraitsIS9_EENSM_ISJ_EEEERNS_21VerticalPositionCacheE","__ZN7WebCore15RenderBlockFlow33checkPaginationAndFloatsAtEndLineERNS_15LineLayoutStateE","__ZN7WebCore15RenderBlockFlow26layoutRunsAndFloatsInRangeERNS_15LineLayoutStateERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERKS4_RKNS_10BidiStatusEj","__ZN7WebCore40hasInlineDirectionBordersPaddingOrMarginERKNS_12RenderInlineE","__ZN7WebCore15RenderBlockFlow30updateLogicalWidthForAlignmentERKNS_10ETextAlignEPNS_7BidiRunERfS6_S6_i","__ZN3WTF6VectorIPKN7WebCore14SimpleFontDataELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore25requiresLineBoxForContentERKNS_12RenderInlineERKNS_8LineInfoE","__ZN7WebCore15RenderBlockFlow22checkFloatsInCleanLineEPNS_13RootInlineBoxERN3WTF6VectorINS_13FloatWithRectELj0ENS3_15CrashOnOverflowEEERjRbSA_","__ZNK7WebCore12RenderObject16isAnonymousBlockEv","__ZNK7WebCore15RenderBlockFlow32lineWidthForPaginatedLineChangedEPNS_13RootInlineBoxENS_10LayoutUnitEPNS_16RenderFlowThreadE","__ZN7WebCore14RenderTextInfoC2Ev","__ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv","__ZN7WebCore15RenderBlockFlow22determineStartPositionERNS_15LineLayoutStateERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEE","__ZNK7WebCore9InlineBox18isSVGInlineFlowBoxEv","__ZN7WebCore15RenderBlockFlow21linkToEndLineIfNeededERNS_15LineLayoutStateE","__ZN7WebCoreL27constructBidiRunsForSegmentERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERNS_11BidiRunListIS2_EERKS1_NS_23VisualDirectionOverrideEb","__ZN7WebCoreL42pushShapeContentOverflowBelowTheContentBoxEPNS_15RenderBlockFlowEPNS_15ShapeInsideInfoENS_10LayoutUnitES4_","__ZN7WebCore15RenderBlockFlow20determineEndPositionERNS_15LineLayoutStateEPNS_13RootInlineBoxERNS_14InlineIteratorERNS_10BidiStatusE","__ZN7WebCore14RenderTextInfoD2Ev","__ZN7WebCore15RenderBlockFlow19appendRunsForObjectERNS_11BidiRunListINS_7BidiRunEEEiiPNS_12RenderObjectERNS_12BidiResolverINS_14InlineIteratorES2_EE","__ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE21createBidiRunsForLineERKS1_NS_23VisualDirectionOverrideEb","__ZN7WebCore15RenderBlockFlow18repaintDirtyFloatsERN3WTF6VectorINS_13FloatWithRectELj0ENS1_15CrashOnOverflowEEE","__ZN3WTF9HashTableIPKN7WebCore13InlineTextBoxENS_12KeyValuePairIS4_NSt3__14pairINS_6VectorIPKNS1_14SimpleFontDataELj0ENS_15CrashOnOverflowEEENS1_13GlyphOverflowEEEEENS_24KeyValuePairKeyExtractorISG_EENS_7PtrHashIS4_EENS_7HashMapIS4_SF_SK_NS_10HashTraitsIS4_EENSM_ISF_EEE18KeyValuePairTraitsESN_E3addINS_17HashMapTranslatorISQ_SK_EES4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SG_SI_SK_SQ_SN_EEEEOT0_OT1_","__ZN7WebCore15RenderBlockFlow44adjustLogicalLineTopAndLogicalHeightIfNeededEPNS_15ShapeInsideInfoENS_10LayoutUnitERNS_15LineLayoutStateERNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEPNS_14FloatingObjectERS7_RN3WTF6VectorINS_15WordMeasurementELj64ENSE_15CrashOnOverflowEEE","__ZN7WebCore15RenderBlockFlow48updateShapeAndSegmentsForCurrentLineInFlowThreadERPNS_15ShapeInsideInfoERNS_15LineLayoutStateE","__ZN7WebCore27TrailingFloatsRootInlineBoxD1Ev","__ZN7WebCore15LineLayoutState25updateRepaintRangeFromBoxEPNS_13RootInlineBoxENS_10LayoutUnitE","__ZN3WTF9HashTableIPKN7WebCore14SimpleFontDataES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6expandEPS4_","__ZN3WTF6VectorIN7WebCore13FloatWithRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE21reorderRunsFromLevelsEv","__ZNK7WebCore15RenderBlockFlow19updateRegionForLineEPNS_13RootInlineBoxE","__ZNK7WebCore11RenderBlock18startOffsetForLineENS_10LayoutUnitEbS1_","__ZN7WebCore15RenderBlockFlow25checkLinesForTextOverflowEv","__ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE27raiseExplicitEmbeddingLevelE14UCharDirectionS4_","__ZN7WebCore13RootInlineBox11appendFloatERNS_9RenderBoxE","__ZN7WebCore15RenderBlockFlow41computeInlineDirectionPositionsForSegmentEPNS_13RootInlineBoxERKNS_8LineInfoENS_10ETextAlignERfS7_PNS_7BidiRunES9_RN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINSA_6VectorIPKNS_14SimpleFontDataELj0ENSA_15CrashOnOverflowEEENS_13GlyphOverflowEEENSA_7PtrHashISE_EENSA_10HashTraitsISE_EENSR_ISO_EEEERNS_21VerticalPositionCacheERNSH_INS_15WordMeasurementELj64ESL_EE","__ZNK7WebCore13InlineFlowBox15isInlineFlowBoxEv","__ZN7WebCore15RenderBlockFlow23deleteEllipsisLineBoxesEv","__ZN7WebCore27TrailingFloatsRootInlineBoxD0Ev","__ZN7WebCore10BidiStatusC2ENS_13TextDirectionEb","_memset","__ZNK7WebCore15RenderBlockFlow20textAlignmentForLineEb","__ZNK7WebCore13InlineFlowBox6isLeafEv","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore12RenderRegionELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EERKS4_PNS_24ListHashSetNodeAllocatorIS4_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_","__ZN3WTF9HashTableIPKN7WebCore13InlineTextBoxENS_12KeyValuePairIS4_NSt3__14pairINS_6VectorIPKNS1_14SimpleFontDataELj0ENS_15CrashOnOverflowEEENS1_13GlyphOverflowEEEEENS_24KeyValuePairKeyExtractorISG_EENS_7PtrHashIS4_EENS_7HashMapIS4_SF_SK_NS_10HashTraitsIS4_EENSM_ISF_EEE18KeyValuePairTraitsESN_E6rehashEiPSG_","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore12RenderRegionELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6expandEPS6_","__ZN7WebCore15RenderBlockFlow38computeInlineDirectionPositionsForLineEPNS_13RootInlineBoxERKNS_8LineInfoEPNS_7BidiRunES7_bRN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS8_6VectorIPKNS_14SimpleFontDataELj0ENS8_15CrashOnOverflowEEENS_13GlyphOverflowEEENS8_7PtrHashISC_EENS8_10HashTraitsISC_EENSP_ISM_EEEERNS_21VerticalPositionCacheERNSF_INS_15WordMeasurementELj64ESJ_EE","__ZNK3WTF11ListHashSetINSt3__110unique_ptrIN7WebCore14FloatingObjectENS1_14default_deleteIS4_EEEELj4ENS3_27FloatingObjectHashFunctionsEE4findIRS4_NS3_28FloatingObjectHashTranslatorEEENS_24ListHashSetConstIteratorIS7_Lj4ES8_EERKT_","__ZN3WTF6VectorIN7WebCore13BidiEmbeddingELj8ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZNK7WebCore9InlineBox18isSVGRootInlineBoxEv","__ZN7WebCore9InlineBox9markDirtyEb","__ZN7WebCore15RenderBlockFlow19layoutRunsAndFloatsERNS_15LineLayoutStateEb","__ZN7WebCoreL28updateLogicalInlinePositionsERNS_15RenderBlockFlowERfS2_S2_bNS_15IndentTextOrNotENS_10LayoutUnitE","__ZNK7WebCore9InlineBox19calculateBoundariesEv","__ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE5embedE14UCharDirectionNS_19BidiEmbeddingSourceE","__ZNK7WebCore9InlineBox15isInlineTextBoxEv","__ZN3WTF6VectorIPN7WebCore9RenderBoxELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCoreL26createInlineBoxForRendererEPNS_12RenderObjectEbb","__ZNK7WebCore13RootInlineBox15isRootInlineBoxEv","__ZN7WebCore15requiresLineBoxERKNS_14InlineIteratorERKNS_8LineInfoENS_18WhitespacePositionE","__ZN7WebCore15RenderBlockFlow28createAndAppendRootInlineBoxEv","__ZN7WebCore15RenderBlockFlow30appendFloatingObjectToLastLineEPNS_14FloatingObjectE","__ZN7WebCore15RenderBlockFlow36updateShapeAndSegmentsForCurrentLineERPNS_15ShapeInsideInfoERKNS_10LayoutSizeERNS_15LineLayoutStateE","__ZN7WebCore11RenderBlock32generatesLineBoxesForInlineChildEPNS_12RenderObjectE","__ZN7WebCore15RenderBlockFlow15layoutLineBoxesEbRNS_10LayoutUnitES2_","__ZN7WebCore15RenderBlockFlow25startAlignedOffsetForLineENS_10LayoutUnitEb","__ZN7WebCore15RenderBlockFlow13constructLineERNS_11BidiRunListINS_7BidiRunEEERKNS_8LineInfoE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF6VectorIPN7WebCore7BidiRunELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE","__ZN3WTF9HashTableIPKN7WebCore14SimpleFontDataES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZN7WebCore11BidiContextD2Ev","__ZN7WebCore14IsolateTracker21addFakeRunIfNecessaryERNS_12RenderObjectEjRNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEE","__ZN7WebCore15RenderBlockFlow29addOverflowFromInlineChildrenEv","__ZNK7WebCore9InlineBox18isInlineElementBoxEv","__ZN7WebCore15RenderBlockFlow14matchedEndLineERNS_15LineLayoutStateERKNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEERKS4_RKNS_10BidiStatusE"]

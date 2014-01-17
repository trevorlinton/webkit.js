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
H_BASE = parentModule["_malloc"](24 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 24;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiid(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiid"](index,a1,a2,a3,a4,a5);
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
  var __ZTVN7WebCore27CSSBasicShapeInsetRectangleE=env.__ZTVN7WebCore27CSSBasicShapeInsetRectangleE|0;
  var __ZTVN7WebCore20CSSBasicShapeEllipseE=env.__ZTVN7WebCore20CSSBasicShapeEllipseE|0;
  var __ZTVN7WebCore29CSSDeprecatedBasicShapeCircleE=env.__ZTVN7WebCore29CSSDeprecatedBasicShapeCircleE|0;
  var __ZTVN7WebCore27DeprecatedBasicShapeEllipseE=env.__ZTVN7WebCore27DeprecatedBasicShapeEllipseE|0;
  var __ZTVN7WebCore17BasicShapeEllipseE=env.__ZTVN7WebCore17BasicShapeEllipseE|0;
  var __ZTVN7WebCore20CSSBasicShapePolygonE=env.__ZTVN7WebCore20CSSBasicShapePolygonE|0;
  var __ZTVN7WebCore19CSSBasicShapeCircleE=env.__ZTVN7WebCore19CSSBasicShapeCircleE|0;
  var __ZTVN7WebCore18CSSBasicShapeInsetE=env.__ZTVN7WebCore18CSSBasicShapeInsetE|0;
  var __ZTVN7WebCore24BasicShapeInsetRectangleE=env.__ZTVN7WebCore24BasicShapeInsetRectangleE|0;
  var __ZTVN7WebCore26DeprecatedBasicShapeCircleE=env.__ZTVN7WebCore26DeprecatedBasicShapeCircleE|0;
  var __ZTVN7WebCore15BasicShapeInsetE=env.__ZTVN7WebCore15BasicShapeInsetE|0;
  var __ZTVN7WebCore16BasicShapeCircleE=env.__ZTVN7WebCore16BasicShapeCircleE|0;
  var __ZTVN7WebCore30CSSDeprecatedBasicShapeEllipseE=env.__ZTVN7WebCore30CSSDeprecatedBasicShapeEllipseE|0;
  var __ZTVN7WebCore17BasicShapePolygonE=env.__ZTVN7WebCore17BasicShapePolygonE|0;
  var __ZTVN7WebCore22CSSBasicShapeRectangleE=env.__ZTVN7WebCore22CSSBasicShapeRectangleE|0;
  var __ZTVN7WebCore19BasicShapeRectangleE=env.__ZTVN7WebCore19BasicShapeRectangleE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore4PairE=(H_BASE+8)|0;
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
  var invoke_viiiid=env.invoke_viiiid;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore18basicShapeForValueEPKNS_11RenderStyleES2_PKNS_13CSSBasicShapeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, i123 = 0, i124 = 0, i125 = 0, i126 = 0, i127 = 0, i128 = 0, i129 = 0, i130 = 0, i131 = 0, i132 = 0, i133 = 0, i134 = 0, i135 = 0, i136 = 0, i137 = 0, i138 = 0, i139 = 0, i140 = 0, i141 = 0, i142 = 0, i143 = 0, i144 = 0, i145 = 0, i146 = 0, i147 = 0, i148 = 0, i149 = 0, i150 = 0, i151 = 0, i152 = 0, i153 = 0, i154 = 0, i155 = 0, i156 = 0, i157 = 0, i158 = 0, i159 = 0, i160 = 0, i161 = 0, i162 = 0, i163 = 0, i164 = 0, i165 = 0, i166 = 0, i167 = 0, i168 = 0, i169 = 0, i170 = 0, i171 = 0, i172 = 0, i173 = 0, i174 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
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
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i29 = i28;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i31 = i30;
 i32 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i33 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i34 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i36 = i35;
 i37 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i38 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i39 = i38;
 i40 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i41 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i42 = i41;
 i43 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i44 = i43;
 i45 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i46 = i45;
 i47 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i48 = i47;
 i49 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i50 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i51 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i52 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i53 = i52;
 i54 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i55 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i56 = i55;
 i57 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i58 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i59 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i60 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i61 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i62 = i61;
 i63 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i64 = i63;
 i65 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i66 = i65;
 i67 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i68 = i67;
 i69 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i70 = i69;
 i71 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i72 = i71;
 i73 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i74 = i73;
 i75 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i76 = i75;
 i77 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i78 = i77;
 i79 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i80 = i79;
 i81 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i82 = i81;
 i83 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i84 = i83;
 i85 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i86 = i85;
 i87 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i88 = i87;
 i89 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i90 = i89;
 i91 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i92 = i91;
 i93 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i94 = i93;
 i95 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i96 = i95;
 i97 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i98 = i97 | 0;
 i99 = i97;
 i100 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i101 = i100;
 i102 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i103 = i102;
 i104 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i105 = i104 | 0;
 i106 = i104;
 i107 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i108 = i107;
 i109 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i110 = i109;
 i111 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i112 = i111 | 0;
 i113 = i111;
 i114 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i115 = i114;
 i116 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i117 = i116;
 i118 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i119 = i118 | 0;
 i120 = i118;
 i121 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i122 = i121;
 i123 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i124 = i123;
 i125 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i126 = i125 | 0;
 i127 = i125;
 i128 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i129 = i128;
 i130 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i131 = i130;
 i132 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i133 = i132 | 0;
 i134 = i132;
 i135 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i136 = i135;
 i137 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i138 = i137;
 i139 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i140 = i139 | 0;
 i141 = i139;
 i142 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i143 = i142;
 i144 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i145 = i144;
 i146 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i147 = i146 | 0;
 i148 = i146;
 i149 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i150 = i149;
 i151 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i152 = i151;
 switch (FUNCTION_TABLE_ii[HEAP32[HEAP32[i4 >> 2] >> 2] & 1](i4) | 0) {
 case 0:
  {
   i153 = __ZN3WTF10fastMallocEj(60) | 0;
   HEAP32[i153 + 4 >> 2] = 1;
   HEAP32[i153 + 8 >> 2] = 0;
   HEAP32[i153 >> 2] = __ZTVN7WebCore19BasicShapeRectangleE + 8;
   i154 = i153 + 12 | 0;
   _memset(i154 | 0, 0, 7) | 0;
   i155 = i153 + 20 | 0;
   _memset(i155 | 0, 0, 7) | 0;
   i156 = i153 + 28 | 0;
   _memset(i156 | 0, 0, 7) | 0;
   i157 = i153 + 36 | 0;
   _memset(i157 | 0, 0, 7) | 0;
   i158 = i153 + 44 | 0;
   _memset(i158 | 0, 0, 7) | 0;
   i159 = i153 + 52 | 0;
   _memset(i159 | 0, 0, 7) | 0;
   i160 = i2 + 24 | 0;
   __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i7, HEAP32[i4 + 16 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i160 >> 2] | 0) + 80 >> 2], 0);
   do {
    if ((i155 | 0) == (i6 | 0)) {
     if ((HEAP8[i7 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
    } else {
     i161 = i155;
     i162 = HEAP32[i6 + 4 >> 2] | 0;
     HEAP32[i161 >> 2] = HEAP32[i6 >> 2];
     HEAP32[i161 + 4 >> 2] = i162;
     HEAP8[i7 + 5 | 0] = 0;
    }
   } while (0);
   __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i9, HEAP32[i4 + 12 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i160 >> 2] | 0) + 80 >> 2], 0);
   do {
    if ((i154 | 0) == (i8 | 0)) {
     if ((HEAP8[i9 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
    } else {
     i7 = i154;
     i6 = HEAP32[i8 + 4 >> 2] | 0;
     HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
     HEAP32[i7 + 4 >> 2] = i6;
     HEAP8[i9 + 5 | 0] = 0;
    }
   } while (0);
   __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i11, HEAP32[i4 + 20 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i160 >> 2] | 0) + 80 >> 2], 0);
   do {
    if ((i156 | 0) == (i10 | 0)) {
     if ((HEAP8[i11 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
    } else {
     i9 = i156;
     i8 = HEAP32[i10 + 4 >> 2] | 0;
     HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i9 + 4 >> 2] = i8;
     HEAP8[i11 + 5 | 0] = 0;
    }
   } while (0);
   __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i13, HEAP32[i4 + 24 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i160 >> 2] | 0) + 80 >> 2], 0);
   do {
    if ((i157 | 0) == (i12 | 0)) {
     if ((HEAP8[i13 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i13);
    } else {
     i11 = i157;
     i10 = HEAP32[i12 + 4 >> 2] | 0;
     HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i11 + 4 >> 2] = i10;
     HEAP8[i13 + 5 | 0] = 0;
    }
   } while (0);
   i13 = HEAP32[i4 + 28 >> 2] | 0;
   do {
    if ((i13 | 0) == 0) {
     HEAP32[i22 >> 2] = 0;
     HEAP8[i23 + 4 | 0] = 0;
     i12 = i23 + 5 | 0;
     HEAP8[i12] = 3;
     HEAP8[i23 + 6 | 0] = 0;
     if ((i158 | 0) != (i22 | 0)) {
      i157 = i158;
      i10 = HEAP32[i22 + 4 >> 2] | 0;
      HEAP32[i157 >> 2] = HEAP32[i22 >> 2];
      HEAP32[i157 + 4 >> 2] = i10;
      HEAP8[i12] = 0;
     }
     HEAP32[i24 >> 2] = 0;
     HEAP8[i25 + 4 | 0] = 0;
     i12 = i25 + 5 | 0;
     HEAP8[i12] = 3;
     HEAP8[i25 + 6 | 0] = 0;
     if ((i159 | 0) == (i24 | 0)) {
      break;
     }
     i10 = i159;
     i157 = HEAP32[i24 + 4 >> 2] | 0;
     HEAP32[i10 >> 2] = HEAP32[i24 >> 2];
     HEAP32[i10 + 4 >> 2] = i157;
     HEAP8[i12] = 0;
    } else {
     __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i15, i13, i2, i3, +HEAPF32[(HEAP32[i160 >> 2] | 0) + 80 >> 2], 0);
     i12 = HEAP32[i14 >> 2] | 0;
     i157 = HEAP32[i14 + 4 >> 2] | 0;
     HEAP32[i16 >> 2] = i12;
     HEAP32[i16 + 4 >> 2] = i157;
     if ((i12 & 0 | 0) == 0 & (i157 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i17);
     }
     do {
      if ((i158 | 0) == (i16 | 0)) {
       if ((HEAP8[i17 + 5 | 0] | 0) != 10) {
        break;
       }
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i17);
      } else {
       i157 = i158;
       i12 = HEAP32[i16 + 4 >> 2] | 0;
       HEAP32[i157 >> 2] = HEAP32[i16 >> 2];
       HEAP32[i157 + 4 >> 2] = i12;
       HEAP8[i17 + 5 | 0] = 0;
      }
     } while (0);
     i12 = HEAP32[i4 + 32 >> 2] | 0;
     do {
      if ((i12 | 0) == 0) {
       i157 = HEAP32[i14 >> 2] | 0;
       i10 = HEAP32[i14 + 4 >> 2] | 0;
       HEAP32[i20 >> 2] = i157;
       HEAP32[i20 + 4 >> 2] = i10;
       if ((i157 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i21);
       }
       if ((i159 | 0) != (i20 | 0)) {
        i10 = i159;
        i157 = HEAP32[i20 + 4 >> 2] | 0;
        HEAP32[i10 >> 2] = HEAP32[i20 >> 2];
        HEAP32[i10 + 4 >> 2] = i157;
        HEAP8[i21 + 5 | 0] = 0;
        break;
       }
       if ((HEAP8[i21 + 5 | 0] | 0) != 10) {
        break;
       }
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i21);
      } else {
       __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i19, i12, i2, i3, +HEAPF32[(HEAP32[i160 >> 2] | 0) + 80 >> 2], 0);
       if ((i159 | 0) != (i18 | 0)) {
        i157 = i159;
        i10 = HEAP32[i18 + 4 >> 2] | 0;
        HEAP32[i157 >> 2] = HEAP32[i18 >> 2];
        HEAP32[i157 + 4 >> 2] = i10;
        HEAP8[i19 + 5 | 0] = 0;
        break;
       }
       if ((HEAP8[i19 + 5 | 0] | 0) != 10) {
        break;
       }
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i19);
      }
     } while (0);
     if ((HEAP8[i15 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i15);
    }
   } while (0);
   i163 = i153;
   break;
  }
 case 1:
  {
   i153 = __ZN3WTF10fastMallocEj(36) | 0;
   HEAP32[i153 + 4 >> 2] = 1;
   HEAP32[i153 + 8 >> 2] = 0;
   HEAP32[i153 >> 2] = __ZTVN7WebCore26DeprecatedBasicShapeCircleE + 8;
   i15 = i153 + 12 | 0;
   _memset(i15 | 0, 0, 7) | 0;
   i19 = i153 + 20 | 0;
   _memset(i19 | 0, 0, 7) | 0;
   i18 = i153 + 28 | 0;
   _memset(i18 | 0, 0, 7) | 0;
   i159 = i2 + 24 | 0;
   __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i27, HEAP32[i4 + 16 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i159 >> 2] | 0) + 80 >> 2], 0);
   do {
    if ((i15 | 0) == (i26 | 0)) {
     if ((HEAP8[i27 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i27);
    } else {
     i160 = i15;
     i21 = HEAP32[i26 + 4 >> 2] | 0;
     HEAP32[i160 >> 2] = HEAP32[i26 >> 2];
     HEAP32[i160 + 4 >> 2] = i21;
     HEAP8[i27 + 5 | 0] = 0;
    }
   } while (0);
   __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i29, HEAP32[i4 + 12 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i159 >> 2] | 0) + 80 >> 2], 0);
   do {
    if ((i19 | 0) == (i28 | 0)) {
     if ((HEAP8[i29 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i29);
    } else {
     i27 = i19;
     i26 = HEAP32[i28 + 4 >> 2] | 0;
     HEAP32[i27 >> 2] = HEAP32[i28 >> 2];
     HEAP32[i27 + 4 >> 2] = i26;
     HEAP8[i29 + 5 | 0] = 0;
    }
   } while (0);
   __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i31, HEAP32[i4 + 20 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i159 >> 2] | 0) + 80 >> 2], 0);
   do {
    if ((i18 | 0) == (i30 | 0)) {
     if ((HEAP8[i31 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i31);
    } else {
     i159 = i18;
     i29 = HEAP32[i30 + 4 >> 2] | 0;
     HEAP32[i159 >> 2] = HEAP32[i30 >> 2];
     HEAP32[i159 + 4 >> 2] = i29;
     HEAP8[i31 + 5 | 0] = 0;
    }
   } while (0);
   i163 = i153;
   break;
  }
 case 5:
  {
   i153 = __ZN3WTF10fastMallocEj(48) | 0;
   HEAP32[i153 + 4 >> 2] = 1;
   HEAP32[i153 + 8 >> 2] = 0;
   HEAP32[i153 >> 2] = __ZTVN7WebCore16BasicShapeCircleE + 8;
   i31 = i153 + 12 | 0;
   HEAP32[i31 >> 2] = 0;
   i30 = i153 + 16 | 0;
   HEAP32[i30 >> 2] = 0;
   HEAP8[i153 + 20 | 0] = 0;
   HEAP8[i153 + 21 | 0] = 15;
   HEAP8[i153 + 22 | 0] = 0;
   i18 = i153 + 24 | 0;
   HEAP32[i18 >> 2] = 0;
   i29 = i153 + 28 | 0;
   HEAP32[i29 >> 2] = 0;
   HEAP8[i153 + 32 | 0] = 0;
   HEAP8[i153 + 33 | 0] = 15;
   HEAP8[i153 + 34 | 0] = 0;
   i159 = i153 + 36 | 0;
   HEAP32[i159 >> 2] = 0;
   HEAP8[i153 + 40 | 0] = 0;
   HEAP8[i153 + 41 | 0] = 15;
   HEAP8[i153 + 42 | 0] = 0;
   i28 = i153 + 44 | 0;
   HEAP32[i28 >> 2] = 1;
   i19 = HEAP32[i4 + 12 >> 2] | 0;
   do {
    if ((i19 | 0) == 0) {
     i164 = 66;
    } else {
     i26 = i4 + 16 | 0;
     if ((HEAP32[i26 >> 2] | 0) == 0) {
      i164 = 66;
      break;
     }
     __ZN7WebCoreL25convertToCenterCoordinateEPKNS_11RenderStyleES2_PNS_17CSSPrimitiveValueE(i32, i2, i3, i19);
     HEAP32[i31 >> 2] = HEAP32[i32 >> 2];
     i27 = i32 + 4 | 0;
     i15 = i27;
     i21 = i30;
     i160 = HEAP32[i15 >> 2] | 0;
     i20 = HEAP32[i15 + 4 >> 2] | 0;
     HEAP32[i21 >> 2] = i160;
     HEAP32[i21 + 4 >> 2] = i20;
     if ((i160 & 0 | 0) == 0 & (i20 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i30);
     }
     if ((HEAP8[i32 + 9 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i27);
     }
     __ZN7WebCoreL25convertToCenterCoordinateEPKNS_11RenderStyleES2_PNS_17CSSPrimitiveValueE(i33, i2, i3, HEAP32[i26 >> 2] | 0);
     HEAP32[i18 >> 2] = HEAP32[i33 >> 2];
     i26 = i33 + 4 | 0;
     i27 = i26;
     i20 = i29;
     i160 = HEAP32[i27 >> 2] | 0;
     i21 = HEAP32[i27 + 4 >> 2] | 0;
     HEAP32[i20 >> 2] = i160;
     HEAP32[i20 + 4 >> 2] = i21;
     if ((i160 & 0 | 0) == 0 & (i21 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i29);
     }
     if ((HEAP8[i33 + 9 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i26);
    }
   } while (0);
   do {
    if ((i164 | 0) == 66) {
     HEAP32[i35 >> 2] = 50;
     HEAP8[i36 + 4 | 0] = 0;
     i33 = i36 + 5 | 0;
     HEAP8[i33] = 2;
     HEAP8[i36 + 6 | 0] = 0;
     i32 = i34 | 0;
     HEAP32[i32 >> 2] = 0;
     i19 = i34 + 4 | 0;
     i26 = i19;
     i21 = HEAP32[i35 >> 2] | 0;
     i160 = HEAP32[i35 + 4 >> 2] | 0;
     HEAP32[i26 >> 2] = i21;
     HEAP32[i26 + 4 >> 2] = i160;
     if ((i21 & 0 | 0) == 0 & (i160 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i19);
      i165 = HEAP32[i32 >> 2] | 0;
     } else {
      i165 = 0;
     }
     HEAP32[i31 >> 2] = i165;
     i32 = i30;
     i160 = HEAP32[i26 >> 2] | 0;
     i21 = HEAP32[i26 + 4 >> 2] | 0;
     HEAP32[i32 >> 2] = i160;
     HEAP32[i32 + 4 >> 2] = i21;
     if ((i160 & 0 | 0) == 0 & (i21 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i30);
     }
     if ((HEAP8[i34 + 9 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i19);
     }
     if ((HEAP8[i33] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i36);
     }
     HEAP32[i38 >> 2] = 50;
     HEAP8[i39 + 4 | 0] = 0;
     i33 = i39 + 5 | 0;
     HEAP8[i33] = 2;
     HEAP8[i39 + 6 | 0] = 0;
     i19 = i37 | 0;
     HEAP32[i19 >> 2] = 0;
     i21 = i37 + 4 | 0;
     i160 = i21;
     i32 = HEAP32[i38 >> 2] | 0;
     i26 = HEAP32[i38 + 4 >> 2] | 0;
     HEAP32[i160 >> 2] = i32;
     HEAP32[i160 + 4 >> 2] = i26;
     if ((i32 & 0 | 0) == 0 & (i26 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i21);
      i166 = HEAP32[i19 >> 2] | 0;
     } else {
      i166 = 0;
     }
     HEAP32[i18 >> 2] = i166;
     i19 = i29;
     i26 = HEAP32[i160 >> 2] | 0;
     i32 = HEAP32[i160 + 4 >> 2] | 0;
     HEAP32[i19 >> 2] = i26;
     HEAP32[i19 + 4 >> 2] = i32;
     if ((i26 & 0 | 0) == 0 & (i32 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i29);
     }
     if ((HEAP8[i37 + 9 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i21);
     }
     if ((HEAP8[i33] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i39);
    }
   } while (0);
   i39 = HEAP32[i4 + 20 >> 2] | 0;
   i37 = (i39 | 0) == 0;
   if (!i37) {
    i29 = i39 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
   }
   __ZN7WebCoreL26cssValueToBasicShapeRadiusEPKNS_11RenderStyleES2_N3WTF10PassRefPtrINS_17CSSPrimitiveValueEEE(i40, i2, i3, i39);
   i29 = i40;
   i166 = i159;
   i18 = HEAP32[i29 >> 2] | 0;
   i38 = HEAP32[i29 + 4 >> 2] | 0;
   HEAP32[i166 >> 2] = i18;
   HEAP32[i166 + 4 >> 2] = i38;
   if ((i18 & 0 | 0) == 0 & (i38 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i159);
   }
   HEAP32[i28 >> 2] = HEAP32[i40 + 8 >> 2];
   if ((HEAP8[i40 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i40 | 0);
   }
   do {
    if (!i37) {
     i40 = i39 | 0;
     i28 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
     if ((i28 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i39 | 0);
      break;
     } else {
      HEAP32[i40 >> 2] = i28;
      break;
     }
    }
   } while (0);
   i163 = i153;
   break;
  }
 case 2:
  {
   i153 = __ZN3WTF10fastMallocEj(44) | 0;
   HEAP32[i153 + 4 >> 2] = 1;
   HEAP32[i153 + 8 >> 2] = 0;
   HEAP32[i153 >> 2] = __ZTVN7WebCore27DeprecatedBasicShapeEllipseE + 8;
   i39 = i153 + 12 | 0;
   _memset(i39 | 0, 0, 7) | 0;
   i37 = i153 + 20 | 0;
   _memset(i37 | 0, 0, 7) | 0;
   i28 = i153 + 28 | 0;
   _memset(i28 | 0, 0, 7) | 0;
   i40 = i153 + 36 | 0;
   _memset(i40 | 0, 0, 7) | 0;
   i159 = i2 + 24 | 0;
   __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i42, HEAP32[i4 + 12 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i159 >> 2] | 0) + 80 >> 2], 0);
   do {
    if ((i39 | 0) == (i41 | 0)) {
     if ((HEAP8[i42 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i42);
    } else {
     i38 = i39;
     i18 = HEAP32[i41 + 4 >> 2] | 0;
     HEAP32[i38 >> 2] = HEAP32[i41 >> 2];
     HEAP32[i38 + 4 >> 2] = i18;
     HEAP8[i42 + 5 | 0] = 0;
    }
   } while (0);
   __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i44, HEAP32[i4 + 16 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i159 >> 2] | 0) + 80 >> 2], 0);
   do {
    if ((i37 | 0) == (i43 | 0)) {
     if ((HEAP8[i44 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i44);
    } else {
     i42 = i37;
     i41 = HEAP32[i43 + 4 >> 2] | 0;
     HEAP32[i42 >> 2] = HEAP32[i43 >> 2];
     HEAP32[i42 + 4 >> 2] = i41;
     HEAP8[i44 + 5 | 0] = 0;
    }
   } while (0);
   __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i46, HEAP32[i4 + 20 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i159 >> 2] | 0) + 80 >> 2], 0);
   do {
    if ((i28 | 0) == (i45 | 0)) {
     if ((HEAP8[i46 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i46);
    } else {
     i44 = i28;
     i43 = HEAP32[i45 + 4 >> 2] | 0;
     HEAP32[i44 >> 2] = HEAP32[i45 >> 2];
     HEAP32[i44 + 4 >> 2] = i43;
     HEAP8[i46 + 5 | 0] = 0;
    }
   } while (0);
   __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i48, HEAP32[i4 + 24 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i159 >> 2] | 0) + 80 >> 2], 0);
   do {
    if ((i40 | 0) == (i47 | 0)) {
     if ((HEAP8[i48 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i48);
    } else {
     i159 = i40;
     i46 = HEAP32[i47 + 4 >> 2] | 0;
     HEAP32[i159 >> 2] = HEAP32[i47 >> 2];
     HEAP32[i159 + 4 >> 2] = i46;
     HEAP8[i48 + 5 | 0] = 0;
    }
   } while (0);
   i163 = i153;
   break;
  }
 case 6:
  {
   i153 = __ZN3WTF10fastMallocEj(60) | 0;
   HEAP32[i153 + 4 >> 2] = 1;
   HEAP32[i153 + 8 >> 2] = 0;
   HEAP32[i153 >> 2] = __ZTVN7WebCore17BasicShapeEllipseE + 8;
   i48 = i153 + 12 | 0;
   HEAP32[i48 >> 2] = 0;
   i47 = i153 + 16 | 0;
   HEAP32[i47 >> 2] = 0;
   HEAP8[i153 + 20 | 0] = 0;
   HEAP8[i153 + 21 | 0] = 15;
   HEAP8[i153 + 22 | 0] = 0;
   i40 = i153 + 24 | 0;
   HEAP32[i40 >> 2] = 0;
   i46 = i153 + 28 | 0;
   HEAP32[i46 >> 2] = 0;
   HEAP8[i153 + 32 | 0] = 0;
   HEAP8[i153 + 33 | 0] = 15;
   HEAP8[i153 + 34 | 0] = 0;
   i159 = i153 + 36 | 0;
   HEAP32[i159 >> 2] = 0;
   HEAP8[i153 + 40 | 0] = 0;
   HEAP8[i153 + 41 | 0] = 15;
   HEAP8[i153 + 42 | 0] = 0;
   i45 = i153 + 44 | 0;
   HEAP32[i45 >> 2] = 1;
   i28 = i153 + 48 | 0;
   HEAP32[i28 >> 2] = 0;
   HEAP8[i153 + 52 | 0] = 0;
   HEAP8[i153 + 53 | 0] = 15;
   HEAP8[i153 + 54 | 0] = 0;
   i43 = i153 + 56 | 0;
   HEAP32[i43 >> 2] = 1;
   i44 = HEAP32[i4 + 12 >> 2] | 0;
   do {
    if ((i44 | 0) == 0) {
     i164 = 120;
    } else {
     i37 = i4 + 16 | 0;
     if ((HEAP32[i37 >> 2] | 0) == 0) {
      i164 = 120;
      break;
     }
     __ZN7WebCoreL25convertToCenterCoordinateEPKNS_11RenderStyleES2_PNS_17CSSPrimitiveValueE(i49, i2, i3, i44);
     HEAP32[i48 >> 2] = HEAP32[i49 >> 2];
     i41 = i49 + 4 | 0;
     i42 = i41;
     i39 = i47;
     i18 = HEAP32[i42 >> 2] | 0;
     i38 = HEAP32[i42 + 4 >> 2] | 0;
     HEAP32[i39 >> 2] = i18;
     HEAP32[i39 + 4 >> 2] = i38;
     if ((i18 & 0 | 0) == 0 & (i38 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i47);
     }
     if ((HEAP8[i49 + 9 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i41);
     }
     __ZN7WebCoreL25convertToCenterCoordinateEPKNS_11RenderStyleES2_PNS_17CSSPrimitiveValueE(i50, i2, i3, HEAP32[i37 >> 2] | 0);
     HEAP32[i40 >> 2] = HEAP32[i50 >> 2];
     i37 = i50 + 4 | 0;
     i41 = i37;
     i38 = i46;
     i18 = HEAP32[i41 >> 2] | 0;
     i39 = HEAP32[i41 + 4 >> 2] | 0;
     HEAP32[i38 >> 2] = i18;
     HEAP32[i38 + 4 >> 2] = i39;
     if ((i18 & 0 | 0) == 0 & (i39 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i46);
     }
     if ((HEAP8[i50 + 9 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i37);
    }
   } while (0);
   do {
    if ((i164 | 0) == 120) {
     HEAP32[i52 >> 2] = 50;
     HEAP8[i53 + 4 | 0] = 0;
     i50 = i53 + 5 | 0;
     HEAP8[i50] = 2;
     HEAP8[i53 + 6 | 0] = 0;
     i49 = i51 | 0;
     HEAP32[i49 >> 2] = 0;
     i44 = i51 + 4 | 0;
     i37 = i44;
     i39 = HEAP32[i52 >> 2] | 0;
     i18 = HEAP32[i52 + 4 >> 2] | 0;
     HEAP32[i37 >> 2] = i39;
     HEAP32[i37 + 4 >> 2] = i18;
     if ((i39 & 0 | 0) == 0 & (i18 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i44);
      i167 = HEAP32[i49 >> 2] | 0;
     } else {
      i167 = 0;
     }
     HEAP32[i48 >> 2] = i167;
     i49 = i47;
     i18 = HEAP32[i37 >> 2] | 0;
     i39 = HEAP32[i37 + 4 >> 2] | 0;
     HEAP32[i49 >> 2] = i18;
     HEAP32[i49 + 4 >> 2] = i39;
     if ((i18 & 0 | 0) == 0 & (i39 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i47);
     }
     if ((HEAP8[i51 + 9 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i44);
     }
     if ((HEAP8[i50] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i53);
     }
     HEAP32[i55 >> 2] = 50;
     HEAP8[i56 + 4 | 0] = 0;
     i50 = i56 + 5 | 0;
     HEAP8[i50] = 2;
     HEAP8[i56 + 6 | 0] = 0;
     i44 = i54 | 0;
     HEAP32[i44 >> 2] = 0;
     i39 = i54 + 4 | 0;
     i18 = i39;
     i49 = HEAP32[i55 >> 2] | 0;
     i37 = HEAP32[i55 + 4 >> 2] | 0;
     HEAP32[i18 >> 2] = i49;
     HEAP32[i18 + 4 >> 2] = i37;
     if ((i49 & 0 | 0) == 0 & (i37 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i39);
      i168 = HEAP32[i44 >> 2] | 0;
     } else {
      i168 = 0;
     }
     HEAP32[i40 >> 2] = i168;
     i44 = i46;
     i37 = HEAP32[i18 >> 2] | 0;
     i49 = HEAP32[i18 + 4 >> 2] | 0;
     HEAP32[i44 >> 2] = i37;
     HEAP32[i44 + 4 >> 2] = i49;
     if ((i37 & 0 | 0) == 0 & (i49 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i46);
     }
     if ((HEAP8[i54 + 9 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i39);
     }
     if ((HEAP8[i50] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i56);
    }
   } while (0);
   i56 = HEAP32[i4 + 20 >> 2] | 0;
   i54 = (i56 | 0) == 0;
   if (!i54) {
    i46 = i56 | 0;
    HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
   }
   __ZN7WebCoreL26cssValueToBasicShapeRadiusEPKNS_11RenderStyleES2_N3WTF10PassRefPtrINS_17CSSPrimitiveValueEEE(i57, i2, i3, i56);
   i46 = i57;
   i168 = i159;
   i40 = HEAP32[i46 >> 2] | 0;
   i55 = HEAP32[i46 + 4 >> 2] | 0;
   HEAP32[i168 >> 2] = i40;
   HEAP32[i168 + 4 >> 2] = i55;
   if ((i40 & 0 | 0) == 0 & (i55 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i159);
   }
   HEAP32[i45 >> 2] = HEAP32[i57 + 8 >> 2];
   if ((HEAP8[i57 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i57 | 0);
   }
   do {
    if (!i54) {
     i57 = i56 | 0;
     i45 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
     if ((i45 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i56 | 0);
      break;
     } else {
      HEAP32[i57 >> 2] = i45;
      break;
     }
    }
   } while (0);
   i56 = HEAP32[i4 + 24 >> 2] | 0;
   i54 = (i56 | 0) == 0;
   if (!i54) {
    i45 = i56 | 0;
    HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
   }
   __ZN7WebCoreL26cssValueToBasicShapeRadiusEPKNS_11RenderStyleES2_N3WTF10PassRefPtrINS_17CSSPrimitiveValueEEE(i58, i2, i3, i56);
   i45 = i58;
   i57 = i28;
   i159 = HEAP32[i45 >> 2] | 0;
   i55 = HEAP32[i45 + 4 >> 2] | 0;
   HEAP32[i57 >> 2] = i159;
   HEAP32[i57 + 4 >> 2] = i55;
   if ((i159 & 0 | 0) == 0 & (i55 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i28);
   }
   HEAP32[i43 >> 2] = HEAP32[i58 + 8 >> 2];
   if ((HEAP8[i58 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i58 | 0);
   }
   do {
    if (!i54) {
     i58 = i56 | 0;
     i43 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
     if ((i43 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i56 | 0);
      break;
     } else {
      HEAP32[i58 >> 2] = i43;
      break;
     }
    }
   } while (0);
   i163 = i153;
   break;
  }
 case 3:
  {
   i153 = __ZN3WTF10fastMallocEj(28) | 0;
   i56 = i153;
   HEAP32[i153 + 4 >> 2] = 1;
   HEAP32[i153 + 8 >> 2] = 0;
   HEAP32[i153 >> 2] = __ZTVN7WebCore17BasicShapePolygonE + 8;
   i54 = i153 + 12 | 0;
   _memset(i54 | 0, 0, 16) | 0;
   HEAP32[i54 >> 2] = HEAP32[i4 + 24 >> 2];
   i54 = i4 + 20 | 0;
   L216 : do {
    if ((HEAP32[i54 >> 2] | 0) != 0) {
     i43 = i4 + 12 | 0;
     i58 = i2 + 24 | 0;
     i28 = i60 + 5 | 0;
     i55 = i59 + 5 | 0;
     i159 = 0;
     while (1) {
      __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i59, HEAP32[(HEAP32[i43 >> 2] | 0) + (i159 << 2) >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i58 >> 2] | 0) + 80 >> 2], 0);
      i57 = i159 | 1;
      if ((HEAP32[i54 >> 2] | 0) >>> 0 <= i57 >>> 0) {
       break;
      }
      __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i60, HEAP32[(HEAP32[i43 >> 2] | 0) + (i57 << 2) >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i58 >> 2] | 0) + 80 >> 2], 0);
      __ZN7WebCore17BasicShapePolygon11appendPointENS_6LengthES1_(i56, i59, i60);
      if ((HEAP8[i28] | 0) == 10) {
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i60);
      }
      if ((HEAP8[i55] | 0) == 10) {
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i59);
      }
      i159 = i159 + 2 | 0;
      if (i159 >>> 0 >= (HEAP32[i54 >> 2] | 0) >>> 0) {
       break L216;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   } while (0);
   i163 = i153;
   break;
  }
 case 4:
  {
   i153 = __ZN3WTF10fastMallocEj(60) | 0;
   HEAP32[i153 + 4 >> 2] = 1;
   HEAP32[i153 + 8 >> 2] = 0;
   HEAP32[i153 >> 2] = __ZTVN7WebCore24BasicShapeInsetRectangleE + 8;
   i54 = i153 + 12 | 0;
   _memset(i54 | 0, 0, 7) | 0;
   i59 = i153 + 20 | 0;
   _memset(i59 | 0, 0, 7) | 0;
   i60 = i153 + 28 | 0;
   _memset(i60 | 0, 0, 7) | 0;
   i56 = i153 + 36 | 0;
   _memset(i56 | 0, 0, 7) | 0;
   i159 = i153 + 44 | 0;
   _memset(i159 | 0, 0, 7) | 0;
   i55 = i153 + 52 | 0;
   _memset(i55 | 0, 0, 7) | 0;
   i28 = i2 + 24 | 0;
   __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i62, HEAP32[i4 + 16 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i28 >> 2] | 0) + 80 >> 2], 0);
   do {
    if ((i59 | 0) == (i61 | 0)) {
     if ((HEAP8[i62 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i62);
    } else {
     i58 = i59;
     i43 = HEAP32[i61 + 4 >> 2] | 0;
     HEAP32[i58 >> 2] = HEAP32[i61 >> 2];
     HEAP32[i58 + 4 >> 2] = i43;
     HEAP8[i62 + 5 | 0] = 0;
    }
   } while (0);
   __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i64, HEAP32[i4 + 12 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i28 >> 2] | 0) + 80 >> 2], 0);
   do {
    if ((i54 | 0) == (i63 | 0)) {
     if ((HEAP8[i64 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i64);
    } else {
     i62 = i54;
     i61 = HEAP32[i63 + 4 >> 2] | 0;
     HEAP32[i62 >> 2] = HEAP32[i63 >> 2];
     HEAP32[i62 + 4 >> 2] = i61;
     HEAP8[i64 + 5 | 0] = 0;
    }
   } while (0);
   __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i66, HEAP32[i4 + 20 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i28 >> 2] | 0) + 80 >> 2], 0);
   do {
    if ((i60 | 0) == (i65 | 0)) {
     if ((HEAP8[i66 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i66);
    } else {
     i64 = i60;
     i63 = HEAP32[i65 + 4 >> 2] | 0;
     HEAP32[i64 >> 2] = HEAP32[i65 >> 2];
     HEAP32[i64 + 4 >> 2] = i63;
     HEAP8[i66 + 5 | 0] = 0;
    }
   } while (0);
   __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i68, HEAP32[i4 + 24 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i28 >> 2] | 0) + 80 >> 2], 0);
   do {
    if ((i56 | 0) == (i67 | 0)) {
     if ((HEAP8[i68 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i68);
    } else {
     i66 = i56;
     i65 = HEAP32[i67 + 4 >> 2] | 0;
     HEAP32[i66 >> 2] = HEAP32[i67 >> 2];
     HEAP32[i66 + 4 >> 2] = i65;
     HEAP8[i68 + 5 | 0] = 0;
    }
   } while (0);
   i68 = HEAP32[i4 + 28 >> 2] | 0;
   do {
    if ((i68 | 0) == 0) {
     HEAP32[i77 >> 2] = 0;
     HEAP8[i78 + 4 | 0] = 0;
     i67 = i78 + 5 | 0;
     HEAP8[i67] = 3;
     HEAP8[i78 + 6 | 0] = 0;
     if ((i159 | 0) != (i77 | 0)) {
      i56 = i159;
      i65 = HEAP32[i77 + 4 >> 2] | 0;
      HEAP32[i56 >> 2] = HEAP32[i77 >> 2];
      HEAP32[i56 + 4 >> 2] = i65;
      HEAP8[i67] = 0;
     }
     HEAP32[i79 >> 2] = 0;
     HEAP8[i80 + 4 | 0] = 0;
     i67 = i80 + 5 | 0;
     HEAP8[i67] = 3;
     HEAP8[i80 + 6 | 0] = 0;
     if ((i55 | 0) == (i79 | 0)) {
      break;
     }
     i65 = i55;
     i56 = HEAP32[i79 + 4 >> 2] | 0;
     HEAP32[i65 >> 2] = HEAP32[i79 >> 2];
     HEAP32[i65 + 4 >> 2] = i56;
     HEAP8[i67] = 0;
    } else {
     __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i70, i68, i2, i3, +HEAPF32[(HEAP32[i28 >> 2] | 0) + 80 >> 2], 0);
     i67 = HEAP32[i69 >> 2] | 0;
     i56 = HEAP32[i69 + 4 >> 2] | 0;
     HEAP32[i71 >> 2] = i67;
     HEAP32[i71 + 4 >> 2] = i56;
     if ((i67 & 0 | 0) == 0 & (i56 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i72);
     }
     do {
      if ((i159 | 0) == (i71 | 0)) {
       if ((HEAP8[i72 + 5 | 0] | 0) != 10) {
        break;
       }
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i72);
      } else {
       i56 = i159;
       i67 = HEAP32[i71 + 4 >> 2] | 0;
       HEAP32[i56 >> 2] = HEAP32[i71 >> 2];
       HEAP32[i56 + 4 >> 2] = i67;
       HEAP8[i72 + 5 | 0] = 0;
      }
     } while (0);
     i67 = HEAP32[i4 + 32 >> 2] | 0;
     do {
      if ((i67 | 0) == 0) {
       i56 = HEAP32[i69 >> 2] | 0;
       i65 = HEAP32[i69 + 4 >> 2] | 0;
       HEAP32[i75 >> 2] = i56;
       HEAP32[i75 + 4 >> 2] = i65;
       if ((i56 & 0 | 0) == 0 & (i65 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i76);
       }
       if ((i55 | 0) != (i75 | 0)) {
        i65 = i55;
        i56 = HEAP32[i75 + 4 >> 2] | 0;
        HEAP32[i65 >> 2] = HEAP32[i75 >> 2];
        HEAP32[i65 + 4 >> 2] = i56;
        HEAP8[i76 + 5 | 0] = 0;
        break;
       }
       if ((HEAP8[i76 + 5 | 0] | 0) != 10) {
        break;
       }
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i76);
      } else {
       __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i74, i67, i2, i3, +HEAPF32[(HEAP32[i28 >> 2] | 0) + 80 >> 2], 0);
       if ((i55 | 0) != (i73 | 0)) {
        i56 = i55;
        i65 = HEAP32[i73 + 4 >> 2] | 0;
        HEAP32[i56 >> 2] = HEAP32[i73 >> 2];
        HEAP32[i56 + 4 >> 2] = i65;
        HEAP8[i74 + 5 | 0] = 0;
        break;
       }
       if ((HEAP8[i74 + 5 | 0] | 0) != 10) {
        break;
       }
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i74);
      }
     } while (0);
     if ((HEAP8[i70 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i70);
    }
   } while (0);
   i163 = i153;
   break;
  }
 case 7:
  {
   i153 = __ZN3WTF10fastMallocEj(108) | 0;
   i70 = i153 + 4 | 0;
   HEAP32[i70 >> 2] = 1;
   HEAP32[i153 + 8 >> 2] = 0;
   HEAP32[i153 >> 2] = __ZTVN7WebCore15BasicShapeInsetE + 8;
   i74 = i153 + 12 | 0;
   _memset(i74 | 0, 0, 7) | 0;
   i73 = i153 + 20 | 0;
   _memset(i73 | 0, 0, 7) | 0;
   i55 = i153 + 28 | 0;
   _memset(i55 | 0, 0, 7) | 0;
   i28 = i153 + 36 | 0;
   _memset(i28 | 0, 0, 7) | 0;
   i76 = i153 + 44 | 0;
   _memset(i76 | 0, 0, 7) | 0;
   i75 = i153 + 52 | 0;
   _memset(i75 | 0, 0, 7) | 0;
   i69 = i153 + 60 | 0;
   _memset(i69 | 0, 0, 7) | 0;
   i72 = i153 + 68 | 0;
   _memset(i72 | 0, 0, 7) | 0;
   i71 = i153 + 76 | 0;
   _memset(i71 | 0, 0, 7) | 0;
   i159 = i153 + 84 | 0;
   _memset(i159 | 0, 0, 7) | 0;
   i68 = i153 + 92 | 0;
   _memset(i68 | 0, 0, 7) | 0;
   i79 = i153 + 100 | 0;
   _memset(i79 | 0, 0, 7) | 0;
   i80 = HEAP32[i4 + 12 >> 2] | 0;
   if ((i80 | 0) == 0) {
    HEAP32[i83 >> 2] = 0;
    HEAP8[i84 + 4 | 0] = 0;
    i77 = i84 + 5 | 0;
    HEAP8[i77] = 3;
    HEAP8[i84 + 6 | 0] = 0;
    do {
     if ((i73 | 0) == (i83 | 0)) {
      i84 = i153;
      HEAP32[i1 >> 2] = i84;
      if ((i153 | 0) != 0) {
       i169 = i84;
       break;
      }
      STACKTOP = i5;
      return;
     } else {
      i84 = i73;
      i78 = HEAP32[i83 + 4 >> 2] | 0;
      HEAP32[i84 >> 2] = HEAP32[i83 >> 2];
      HEAP32[i84 + 4 >> 2] = i78;
      HEAP8[i77] = 0;
      i78 = i153;
      HEAP32[i1 >> 2] = i78;
      i169 = i78;
     }
    } while (0);
    i77 = HEAP32[i70 >> 2] | 0;
    HEAP32[i70 >> 2] = i77 + 1;
    if ((i77 | 0) == 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i153 >> 2] | 0) + 4 >> 2] & 7](i169);
     STACKTOP = i5;
     return;
    } else {
     HEAP32[i70 >> 2] = i77;
     STACKTOP = i5;
     return;
    }
   }
   i77 = i2 + 24 | 0;
   __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i82, i80, i2, i3, +HEAPF32[(HEAP32[i77 >> 2] | 0) + 80 >> 2], 0);
   do {
    if ((i73 | 0) == (i81 | 0)) {
     if ((HEAP8[i82 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i82);
    } else {
     i80 = i73;
     i70 = HEAP32[i81 + 4 >> 2] | 0;
     HEAP32[i80 >> 2] = HEAP32[i81 >> 2];
     HEAP32[i80 + 4 >> 2] = i70;
     HEAP8[i82 + 5 | 0] = 0;
    }
   } while (0);
   i82 = HEAP32[i4 + 16 >> 2] | 0;
   do {
    if ((i82 | 0) == 0) {
     HEAP32[i87 >> 2] = 0;
     HEAP8[i88 + 4 | 0] = 0;
     i81 = i88 + 5 | 0;
     HEAP8[i81] = 3;
     HEAP8[i88 + 6 | 0] = 0;
     if ((i74 | 0) == (i87 | 0)) {
      break;
     }
     i73 = i74;
     i70 = HEAP32[i87 + 4 >> 2] | 0;
     HEAP32[i73 >> 2] = HEAP32[i87 >> 2];
     HEAP32[i73 + 4 >> 2] = i70;
     HEAP8[i81] = 0;
    } else {
     __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i86, i82, i2, i3, +HEAPF32[(HEAP32[i77 >> 2] | 0) + 80 >> 2], 0);
     if ((i74 | 0) != (i85 | 0)) {
      i81 = i74;
      i70 = HEAP32[i85 + 4 >> 2] | 0;
      HEAP32[i81 >> 2] = HEAP32[i85 >> 2];
      HEAP32[i81 + 4 >> 2] = i70;
      HEAP8[i86 + 5 | 0] = 0;
      break;
     }
     if ((HEAP8[i86 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i86);
    }
   } while (0);
   i86 = HEAP32[i4 + 20 >> 2] | 0;
   do {
    if ((i86 | 0) == 0) {
     HEAP32[i91 >> 2] = 0;
     HEAP8[i92 + 4 | 0] = 0;
     i85 = i92 + 5 | 0;
     HEAP8[i85] = 3;
     HEAP8[i92 + 6 | 0] = 0;
     if ((i55 | 0) == (i91 | 0)) {
      break;
     }
     i74 = i55;
     i82 = HEAP32[i91 + 4 >> 2] | 0;
     HEAP32[i74 >> 2] = HEAP32[i91 >> 2];
     HEAP32[i74 + 4 >> 2] = i82;
     HEAP8[i85] = 0;
    } else {
     __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i90, i86, i2, i3, +HEAPF32[(HEAP32[i77 >> 2] | 0) + 80 >> 2], 0);
     if ((i55 | 0) != (i89 | 0)) {
      i85 = i55;
      i82 = HEAP32[i89 + 4 >> 2] | 0;
      HEAP32[i85 >> 2] = HEAP32[i89 >> 2];
      HEAP32[i85 + 4 >> 2] = i82;
      HEAP8[i90 + 5 | 0] = 0;
      break;
     }
     if ((HEAP8[i90 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i90);
    }
   } while (0);
   i90 = HEAP32[i4 + 24 >> 2] | 0;
   do {
    if ((i90 | 0) == 0) {
     HEAP32[i95 >> 2] = 0;
     HEAP8[i96 + 4 | 0] = 0;
     i89 = i96 + 5 | 0;
     HEAP8[i89] = 3;
     HEAP8[i96 + 6 | 0] = 0;
     if ((i28 | 0) == (i95 | 0)) {
      break;
     }
     i55 = i28;
     i86 = HEAP32[i95 + 4 >> 2] | 0;
     HEAP32[i55 >> 2] = HEAP32[i95 >> 2];
     HEAP32[i55 + 4 >> 2] = i86;
     HEAP8[i89] = 0;
    } else {
     __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i94, i90, i2, i3, +HEAPF32[(HEAP32[i77 >> 2] | 0) + 80 >> 2], 0);
     if ((i28 | 0) != (i93 | 0)) {
      i89 = i28;
      i86 = HEAP32[i93 + 4 >> 2] | 0;
      HEAP32[i89 >> 2] = HEAP32[i93 >> 2];
      HEAP32[i89 + 4 >> 2] = i86;
      HEAP8[i94 + 5 | 0] = 0;
      break;
     }
     if ((HEAP8[i94 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i94);
    }
   } while (0);
   i94 = i4 + 28 | 0;
   i93 = HEAP32[i94 >> 2] | 0;
   do {
    if ((i93 | 0) == 0) {
     HEAP32[i107 >> 2] = 0;
     HEAP8[i108 + 4 | 0] = 0;
     i28 = i108 + 5 | 0;
     HEAP8[i28] = 3;
     HEAP8[i108 + 6 | 0] = 0;
     HEAP32[i109 >> 2] = 0;
     HEAP8[i110 + 4 | 0] = 0;
     i90 = i110 + 5 | 0;
     HEAP8[i90] = 3;
     HEAP8[i110 + 6 | 0] = 0;
     i95 = HEAP32[i107 >> 2] | 0;
     i96 = HEAP32[i107 + 4 >> 2] | 0;
     HEAP32[i105 >> 2] = i95;
     HEAP32[i105 + 4 >> 2] = i96;
     HEAP8[i28] = 0;
     i86 = i104 + 8 | 0;
     i89 = i86;
     i55 = HEAP32[i109 >> 2] | 0;
     i91 = HEAP32[i109 + 4 >> 2] | 0;
     HEAP32[i86 >> 2] = i55;
     HEAP32[i86 + 4 >> 2] = i91;
     HEAP8[i90] = 0;
     do {
      if ((i76 | 0) == (i104 | 0)) {
       if (!((i55 & 0 | 0) == 0 & (i91 & 65280 | 0) == 2560)) {
        break;
       }
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i89);
      } else {
       i92 = i76;
       HEAP32[i92 >> 2] = i95;
       HEAP32[i92 + 4 >> 2] = i96;
       HEAP8[i106 + 5 | 0] = 0;
       i92 = i75;
       i82 = HEAP32[i86 + 4 >> 2] | 0;
       HEAP32[i92 >> 2] = HEAP32[i86 >> 2];
       HEAP32[i92 + 4 >> 2] = i82;
       HEAP8[i106 + 13 | 0] = 0;
      }
     } while (0);
     if ((HEAP8[i106 + 5 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i104);
     }
     if ((HEAP8[i90] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i110);
     }
     if ((HEAP8[i28] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i108);
    } else {
     if ((HEAP32[i93 + 4 >> 2] & 508 | 0) == 400) {
      i170 = HEAP32[i93 + 8 >> 2] | 0;
     } else {
      i170 = 0;
     }
     __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i101, HEAP32[i170 + 8 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i77 >> 2] | 0) + 80 >> 2], 0);
     __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i103, HEAP32[i170 + 12 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i77 >> 2] | 0) + 80 >> 2], 0);
     i86 = HEAP32[i100 >> 2] | 0;
     i96 = HEAP32[i100 + 4 >> 2] | 0;
     HEAP32[i98 >> 2] = i86;
     HEAP32[i98 + 4 >> 2] = i96;
     i95 = i101 + 5 | 0;
     HEAP8[i95] = 0;
     i89 = i97 + 8 | 0;
     i91 = i89;
     i55 = HEAP32[i102 >> 2] | 0;
     i82 = HEAP32[i102 + 4 >> 2] | 0;
     HEAP32[i89 >> 2] = i55;
     HEAP32[i89 + 4 >> 2] = i82;
     i92 = i103 + 5 | 0;
     HEAP8[i92] = 0;
     do {
      if ((i76 | 0) == (i97 | 0)) {
       if (!((i55 & 0 | 0) == 0 & (i82 & 65280 | 0) == 2560)) {
        break;
       }
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i91);
      } else {
       i85 = i76;
       HEAP32[i85 >> 2] = i86;
       HEAP32[i85 + 4 >> 2] = i96;
       HEAP8[i99 + 5 | 0] = 0;
       i85 = i75;
       i74 = HEAP32[i89 + 4 >> 2] | 0;
       HEAP32[i85 >> 2] = HEAP32[i89 >> 2];
       HEAP32[i85 + 4 >> 2] = i74;
       HEAP8[i99 + 13 | 0] = 0;
      }
     } while (0);
     if ((HEAP8[i99 + 5 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i97);
     }
     if ((HEAP8[i92] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i103);
     }
     if ((HEAP8[i95] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i101);
    }
   } while (0);
   i101 = HEAP32[i4 + 32 >> 2] | 0;
   do {
    if ((i101 | 0) == 0) {
     HEAP32[i121 >> 2] = 0;
     HEAP8[i122 + 4 | 0] = 0;
     i103 = i122 + 5 | 0;
     HEAP8[i103] = 3;
     HEAP8[i122 + 6 | 0] = 0;
     HEAP32[i123 >> 2] = 0;
     HEAP8[i124 + 4 | 0] = 0;
     i97 = i124 + 5 | 0;
     HEAP8[i97] = 3;
     HEAP8[i124 + 6 | 0] = 0;
     i99 = HEAP32[i121 >> 2] | 0;
     i75 = HEAP32[i121 + 4 >> 2] | 0;
     HEAP32[i119 >> 2] = i99;
     HEAP32[i119 + 4 >> 2] = i75;
     HEAP8[i103] = 0;
     i76 = i118 + 8 | 0;
     i102 = i76;
     i98 = HEAP32[i123 >> 2] | 0;
     i100 = HEAP32[i123 + 4 >> 2] | 0;
     HEAP32[i76 >> 2] = i98;
     HEAP32[i76 + 4 >> 2] = i100;
     HEAP8[i97] = 0;
     do {
      if ((i69 | 0) == (i118 | 0)) {
       if (!((i98 & 0 | 0) == 0 & (i100 & 65280 | 0) == 2560)) {
        break;
       }
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i102);
      } else {
       i170 = i69;
       HEAP32[i170 >> 2] = i99;
       HEAP32[i170 + 4 >> 2] = i75;
       HEAP8[i120 + 5 | 0] = 0;
       i170 = i72;
       i93 = HEAP32[i76 + 4 >> 2] | 0;
       HEAP32[i170 >> 2] = HEAP32[i76 >> 2];
       HEAP32[i170 + 4 >> 2] = i93;
       HEAP8[i120 + 13 | 0] = 0;
      }
     } while (0);
     if ((HEAP8[i120 + 5 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i118);
     }
     if ((HEAP8[i97] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i124);
     }
     if ((HEAP8[i103] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i122);
    } else {
     if ((HEAP32[i101 + 4 >> 2] & 508 | 0) == 400) {
      i171 = HEAP32[i101 + 8 >> 2] | 0;
     } else {
      i171 = 0;
     }
     __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i115, HEAP32[i171 + 8 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i77 >> 2] | 0) + 80 >> 2], 0);
     __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i117, HEAP32[i171 + 12 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i77 >> 2] | 0) + 80 >> 2], 0);
     i76 = HEAP32[i114 >> 2] | 0;
     i75 = HEAP32[i114 + 4 >> 2] | 0;
     HEAP32[i112 >> 2] = i76;
     HEAP32[i112 + 4 >> 2] = i75;
     i99 = i115 + 5 | 0;
     HEAP8[i99] = 0;
     i102 = i111 + 8 | 0;
     i100 = i102;
     i98 = HEAP32[i116 >> 2] | 0;
     i95 = HEAP32[i116 + 4 >> 2] | 0;
     HEAP32[i102 >> 2] = i98;
     HEAP32[i102 + 4 >> 2] = i95;
     i92 = i117 + 5 | 0;
     HEAP8[i92] = 0;
     do {
      if ((i69 | 0) == (i111 | 0)) {
       if (!((i98 & 0 | 0) == 0 & (i95 & 65280 | 0) == 2560)) {
        break;
       }
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i100);
      } else {
       i93 = i69;
       HEAP32[i93 >> 2] = i76;
       HEAP32[i93 + 4 >> 2] = i75;
       HEAP8[i113 + 5 | 0] = 0;
       i93 = i72;
       i170 = HEAP32[i102 + 4 >> 2] | 0;
       HEAP32[i93 >> 2] = HEAP32[i102 >> 2];
       HEAP32[i93 + 4 >> 2] = i170;
       HEAP8[i113 + 13 | 0] = 0;
      }
     } while (0);
     if ((HEAP8[i113 + 5 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i111);
     }
     if ((HEAP8[i92] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i117);
     }
     if ((HEAP8[i99] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i115);
    }
   } while (0);
   i115 = HEAP32[i4 + 36 >> 2] | 0;
   do {
    if ((i115 | 0) == 0) {
     HEAP32[i135 >> 2] = 0;
     HEAP8[i136 + 4 | 0] = 0;
     i117 = i136 + 5 | 0;
     HEAP8[i117] = 3;
     HEAP8[i136 + 6 | 0] = 0;
     HEAP32[i137 >> 2] = 0;
     HEAP8[i138 + 4 | 0] = 0;
     i111 = i138 + 5 | 0;
     HEAP8[i111] = 3;
     HEAP8[i138 + 6 | 0] = 0;
     i113 = HEAP32[i135 >> 2] | 0;
     i72 = HEAP32[i135 + 4 >> 2] | 0;
     HEAP32[i133 >> 2] = i113;
     HEAP32[i133 + 4 >> 2] = i72;
     HEAP8[i117] = 0;
     i69 = i132 + 8 | 0;
     i116 = i69;
     i112 = HEAP32[i137 >> 2] | 0;
     i114 = HEAP32[i137 + 4 >> 2] | 0;
     HEAP32[i69 >> 2] = i112;
     HEAP32[i69 + 4 >> 2] = i114;
     HEAP8[i111] = 0;
     do {
      if ((i71 | 0) == (i132 | 0)) {
       if (!((i112 & 0 | 0) == 0 & (i114 & 65280 | 0) == 2560)) {
        break;
       }
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i116);
      } else {
       i171 = i71;
       HEAP32[i171 >> 2] = i113;
       HEAP32[i171 + 4 >> 2] = i72;
       HEAP8[i134 + 5 | 0] = 0;
       i171 = i159;
       i101 = HEAP32[i69 + 4 >> 2] | 0;
       HEAP32[i171 >> 2] = HEAP32[i69 >> 2];
       HEAP32[i171 + 4 >> 2] = i101;
       HEAP8[i134 + 13 | 0] = 0;
      }
     } while (0);
     if ((HEAP8[i134 + 5 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i132);
     }
     if ((HEAP8[i111] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i138);
     }
     if ((HEAP8[i117] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i136);
    } else {
     if ((HEAP32[i115 + 4 >> 2] & 508 | 0) == 400) {
      i172 = HEAP32[i115 + 8 >> 2] | 0;
     } else {
      i172 = 0;
     }
     __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i129, HEAP32[i172 + 8 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i77 >> 2] | 0) + 80 >> 2], 0);
     __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i131, HEAP32[i172 + 12 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i77 >> 2] | 0) + 80 >> 2], 0);
     i69 = HEAP32[i128 >> 2] | 0;
     i72 = HEAP32[i128 + 4 >> 2] | 0;
     HEAP32[i126 >> 2] = i69;
     HEAP32[i126 + 4 >> 2] = i72;
     i113 = i129 + 5 | 0;
     HEAP8[i113] = 0;
     i116 = i125 + 8 | 0;
     i114 = i116;
     i112 = HEAP32[i130 >> 2] | 0;
     i99 = HEAP32[i130 + 4 >> 2] | 0;
     HEAP32[i116 >> 2] = i112;
     HEAP32[i116 + 4 >> 2] = i99;
     i92 = i131 + 5 | 0;
     HEAP8[i92] = 0;
     do {
      if ((i71 | 0) == (i125 | 0)) {
       if (!((i112 & 0 | 0) == 0 & (i99 & 65280 | 0) == 2560)) {
        break;
       }
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i114);
      } else {
       i101 = i71;
       HEAP32[i101 >> 2] = i69;
       HEAP32[i101 + 4 >> 2] = i72;
       HEAP8[i127 + 5 | 0] = 0;
       i101 = i159;
       i171 = HEAP32[i116 + 4 >> 2] | 0;
       HEAP32[i101 >> 2] = HEAP32[i116 >> 2];
       HEAP32[i101 + 4 >> 2] = i171;
       HEAP8[i127 + 13 | 0] = 0;
      }
     } while (0);
     if ((HEAP8[i127 + 5 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i125);
     }
     if ((HEAP8[i92] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i131);
     }
     if ((HEAP8[i113] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i129);
    }
   } while (0);
   do {
    if ((HEAP32[i94 >> 2] | 0) == 0) {
     HEAP32[i149 >> 2] = 0;
     HEAP8[i150 + 4 | 0] = 0;
     i129 = i150 + 5 | 0;
     HEAP8[i129] = 3;
     HEAP8[i150 + 6 | 0] = 0;
     HEAP32[i151 >> 2] = 0;
     HEAP8[i152 + 4 | 0] = 0;
     i131 = i152 + 5 | 0;
     HEAP8[i131] = 3;
     HEAP8[i152 + 6 | 0] = 0;
     i125 = HEAP32[i149 >> 2] | 0;
     i127 = HEAP32[i149 + 4 >> 2] | 0;
     HEAP32[i147 >> 2] = i125;
     HEAP32[i147 + 4 >> 2] = i127;
     HEAP8[i129] = 0;
     i159 = i146 + 8 | 0;
     i71 = i159;
     i130 = HEAP32[i151 >> 2] | 0;
     i126 = HEAP32[i151 + 4 >> 2] | 0;
     HEAP32[i159 >> 2] = i130;
     HEAP32[i159 + 4 >> 2] = i126;
     HEAP8[i131] = 0;
     do {
      if ((i68 | 0) == (i146 | 0)) {
       if (!((i130 & 0 | 0) == 0 & (i126 & 65280 | 0) == 2560)) {
        break;
       }
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i71);
      } else {
       i128 = i68;
       HEAP32[i128 >> 2] = i125;
       HEAP32[i128 + 4 >> 2] = i127;
       HEAP8[i148 + 5 | 0] = 0;
       i128 = i79;
       i172 = HEAP32[i159 + 4 >> 2] | 0;
       HEAP32[i128 >> 2] = HEAP32[i159 >> 2];
       HEAP32[i128 + 4 >> 2] = i172;
       HEAP8[i148 + 13 | 0] = 0;
      }
     } while (0);
     if ((HEAP8[i148 + 5 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i146);
     }
     if ((HEAP8[i131] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i152);
     }
     if ((HEAP8[i129] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i150);
    } else {
     i159 = HEAP32[i4 + 40 >> 2] | 0;
     if ((HEAP32[i159 + 4 >> 2] & 508 | 0) == 400) {
      i173 = HEAP32[i159 + 8 >> 2] | 0;
     } else {
      i173 = 0;
     }
     __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i143, HEAP32[i173 + 8 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i77 >> 2] | 0) + 80 >> 2], 0);
     __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i145, HEAP32[i173 + 12 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i77 >> 2] | 0) + 80 >> 2], 0);
     i159 = HEAP32[i142 >> 2] | 0;
     i127 = HEAP32[i142 + 4 >> 2] | 0;
     HEAP32[i140 >> 2] = i159;
     HEAP32[i140 + 4 >> 2] = i127;
     i125 = i143 + 5 | 0;
     HEAP8[i125] = 0;
     i71 = i139 + 8 | 0;
     i126 = i71;
     i130 = HEAP32[i144 >> 2] | 0;
     i113 = HEAP32[i144 + 4 >> 2] | 0;
     HEAP32[i71 >> 2] = i130;
     HEAP32[i71 + 4 >> 2] = i113;
     i92 = i145 + 5 | 0;
     HEAP8[i92] = 0;
     do {
      if ((i68 | 0) == (i139 | 0)) {
       if (!((i130 & 0 | 0) == 0 & (i113 & 65280 | 0) == 2560)) {
        break;
       }
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i126);
      } else {
       i172 = i68;
       HEAP32[i172 >> 2] = i159;
       HEAP32[i172 + 4 >> 2] = i127;
       HEAP8[i141 + 5 | 0] = 0;
       i172 = i79;
       i128 = HEAP32[i71 + 4 >> 2] | 0;
       HEAP32[i172 >> 2] = HEAP32[i71 >> 2];
       HEAP32[i172 + 4 >> 2] = i128;
       HEAP8[i141 + 13 | 0] = 0;
      }
     } while (0);
     if ((HEAP8[i141 + 5 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i139);
     }
     if ((HEAP8[i92] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i145);
     }
     if ((HEAP8[i125] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i143);
    }
   } while (0);
   i163 = i153;
   break;
  }
 default:
  {
   i163 = 0;
  }
 }
 i153 = HEAP32[i4 + 8 >> 2] | 0;
 L453 : do {
  if ((i153 | 0) == 0) {
   i174 = 0;
  } else {
   L455 : do {
    if ((HEAP32[i153 + 4 >> 2] & 508 | 0) == 472) {
     switch (HEAP32[i153 + 8 >> 2] | 0) {
     case 488:
      {
       i174 = 3;
       break L453;
       break;
      }
     case 484:
      {
       i174 = 2;
       break L453;
       break;
      }
     case 489:
      {
       i174 = 1;
       break L453;
       break;
      }
     case 490:
      {
       i174 = 5;
       break L453;
       break;
      }
     case 486:
      {
       i174 = 4;
       break L453;
       break;
      }
     default:
      {
       break L455;
      }
     }
    }
   } while (0);
   i174 = 0;
  }
 } while (0);
 HEAP32[i163 + 8 >> 2] = i174;
 HEAP32[i1 >> 2] = i163;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore18valueForBasicShapeEPKNS_11RenderStyleEPKNS_10BasicShapeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
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
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
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
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i29 = __ZN7WebCore12cssValuePoolEv() | 0;
 switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 1](i3) | 0) {
 case 0:
  {
   i30 = __ZN3WTF10fastMallocEj(36) | 0;
   HEAP32[i30 + 4 >> 2] = 1;
   HEAP32[i30 + 8 >> 2] = 0;
   HEAP32[i30 >> 2] = __ZTVN7WebCore22CSSBasicShapeRectangleE + 8;
   i31 = i30 + 12 | 0;
   _memset(i31 | 0, 0, 24) | 0;
   i32 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i32, i3 + 20 | 0, i2);
   i33 = i30 + 16 | 0;
   i34 = HEAP32[i33 >> 2] | 0;
   HEAP32[i33 >> 2] = i32;
   do {
    if ((i34 | 0) != 0) {
     i32 = i34 | 0;
     i33 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     if ((i33 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i34 | 0);
      break;
     } else {
      HEAP32[i32 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i34 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i34, i3 + 12 | 0, i2);
   i33 = i31;
   i31 = HEAP32[i33 >> 2] | 0;
   HEAP32[i33 >> 2] = i34;
   do {
    if ((i31 | 0) != 0) {
     i34 = i31 | 0;
     i33 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
     if ((i33 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i31 | 0);
      break;
     } else {
      HEAP32[i34 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i31 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i31, i3 + 28 | 0, i2);
   i33 = i30 + 20 | 0;
   i34 = HEAP32[i33 >> 2] | 0;
   HEAP32[i33 >> 2] = i31;
   do {
    if ((i34 | 0) != 0) {
     i31 = i34 | 0;
     i33 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     if ((i33 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i34 | 0);
      break;
     } else {
      HEAP32[i31 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i34 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i34, i3 + 36 | 0, i2);
   i33 = i30 + 24 | 0;
   i31 = HEAP32[i33 >> 2] | 0;
   HEAP32[i33 >> 2] = i34;
   do {
    if ((i31 | 0) != 0) {
     i34 = i31 | 0;
     i33 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
     if ((i33 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i31 | 0);
      break;
     } else {
      HEAP32[i34 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i31 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i31, i3 + 44 | 0, i2);
   i33 = i30 + 28 | 0;
   i34 = HEAP32[i33 >> 2] | 0;
   HEAP32[i33 >> 2] = i31;
   do {
    if ((i34 | 0) != 0) {
     i31 = i34 | 0;
     i33 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     if ((i33 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i34 | 0);
      break;
     } else {
      HEAP32[i31 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i34 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i34, i3 + 52 | 0, i2);
   i33 = i30 + 32 | 0;
   i31 = HEAP32[i33 >> 2] | 0;
   HEAP32[i33 >> 2] = i34;
   do {
    if ((i31 | 0) != 0) {
     i34 = i31 | 0;
     i33 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
     if ((i33 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i31 | 0);
      break;
     } else {
      HEAP32[i34 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i35 = i30;
   break;
  }
 case 1:
  {
   i30 = __ZN3WTF10fastMallocEj(24) | 0;
   HEAP32[i30 + 4 >> 2] = 1;
   HEAP32[i30 + 8 >> 2] = 0;
   HEAP32[i30 >> 2] = __ZTVN7WebCore29CSSDeprecatedBasicShapeCircleE + 8;
   i31 = i30 + 12 | 0;
   HEAP32[i31 >> 2] = 0;
   i33 = i30 + 16 | 0;
   HEAP32[i33 >> 2] = 0;
   i34 = i30 + 20 | 0;
   HEAP32[i34 >> 2] = 0;
   i32 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i32, i3 + 12 | 0, i2);
   i36 = HEAP32[i33 >> 2] | 0;
   HEAP32[i33 >> 2] = i32;
   do {
    if ((i36 | 0) != 0) {
     i32 = i36 | 0;
     i33 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     if ((i33 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i36 | 0);
      break;
     } else {
      HEAP32[i32 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i36 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i36, i3 + 20 | 0, i2);
   i33 = HEAP32[i31 >> 2] | 0;
   HEAP32[i31 >> 2] = i36;
   do {
    if ((i33 | 0) != 0) {
     i36 = i33 | 0;
     i31 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
     if ((i31 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i33 | 0);
      break;
     } else {
      HEAP32[i36 >> 2] = i31;
      break;
     }
    }
   } while (0);
   i33 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i33, i3 + 28 | 0, i2);
   i31 = HEAP32[i34 >> 2] | 0;
   HEAP32[i34 >> 2] = i33;
   do {
    if ((i31 | 0) != 0) {
     i33 = i31 | 0;
     i34 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
     if ((i34 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i31 | 0);
      break;
     } else {
      HEAP32[i33 >> 2] = i34;
      break;
     }
    }
   } while (0);
   i35 = i30;
   break;
  }
 case 5:
  {
   i30 = __ZN3WTF10fastMallocEj(24) | 0;
   HEAP32[i30 + 4 >> 2] = 1;
   HEAP32[i30 + 8 >> 2] = 0;
   HEAP32[i30 >> 2] = __ZTVN7WebCore19CSSBasicShapeCircleE + 8;
   i31 = i30 + 12 | 0;
   HEAP32[i31 >> 2] = 0;
   i34 = i30 + 16 | 0;
   HEAP32[i34 >> 2] = 0;
   i33 = i30 + 20 | 0;
   HEAP32[i33 >> 2] = 0;
   __ZN7WebCoreL24valueForCenterCoordinateERNS_12CSSValuePoolEPKNS_11RenderStyleERKNS_26BasicShapeCenterCoordinateE(i13, i29, i2, i3 + 12 | 0);
   i36 = i13 | 0;
   i13 = HEAP32[i36 >> 2] | 0;
   HEAP32[i36 >> 2] = 0;
   i36 = HEAP32[i31 >> 2] | 0;
   HEAP32[i31 >> 2] = i13;
   do {
    if ((i36 | 0) != 0) {
     i13 = i36 | 0;
     i31 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i31 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i36 | 0);
      break;
     } else {
      HEAP32[i13 >> 2] = i31;
      break;
     }
    }
   } while (0);
   __ZN7WebCoreL24valueForCenterCoordinateERNS_12CSSValuePoolEPKNS_11RenderStyleERKNS_26BasicShapeCenterCoordinateE(i14, i29, i2, i3 + 24 | 0);
   i36 = i14 | 0;
   i14 = HEAP32[i36 >> 2] | 0;
   HEAP32[i36 >> 2] = 0;
   i36 = HEAP32[i34 >> 2] | 0;
   HEAP32[i34 >> 2] = i14;
   do {
    if ((i36 | 0) != 0) {
     i14 = i36 | 0;
     i34 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i34 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i36 | 0);
      break;
     } else {
      HEAP32[i14 >> 2] = i34;
      break;
     }
    }
   } while (0);
   i36 = HEAP32[i3 + 44 >> 2] | 0;
   if ((i36 | 0) == 0) {
    i34 = __ZN3WTF10fastMallocEj(16) | 0;
    __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i34, i3 + 36 | 0, i2);
    HEAP32[i15 >> 2] = i34;
    i37 = i34;
   } else if ((i36 | 0) == 1) {
    __ZN7WebCore12CSSValuePool21createIdentifierValueENS_10CSSValueIDE(i15, i29, 551);
    i37 = HEAP32[i15 >> 2] | 0;
   } else if ((i36 | 0) == 2) {
    __ZN7WebCore12CSSValuePool21createIdentifierValueENS_10CSSValueIDE(i11, i29, 553);
    i36 = HEAP32[i11 >> 2] | 0;
    HEAP32[i15 >> 2] = i36;
    i37 = i36;
   } else {
    HEAP32[i15 >> 2] = 0;
    i37 = 0;
   }
   i36 = i15 | 0;
   HEAP32[i36 >> 2] = 0;
   i15 = HEAP32[i33 >> 2] | 0;
   HEAP32[i33 >> 2] = i37;
   do {
    if ((i15 | 0) != 0) {
     i37 = i15 | 0;
     i33 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
     if ((i33 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i15 | 0);
      break;
     } else {
      HEAP32[i37 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i15 = HEAP32[i36 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i36 = i15 | 0;
     i33 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
     if ((i33 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i15 | 0);
      break;
     } else {
      HEAP32[i36 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i35 = i30;
   break;
  }
 case 2:
  {
   i30 = __ZN3WTF10fastMallocEj(28) | 0;
   HEAP32[i30 + 4 >> 2] = 1;
   HEAP32[i30 + 8 >> 2] = 0;
   HEAP32[i30 >> 2] = __ZTVN7WebCore30CSSDeprecatedBasicShapeEllipseE + 8;
   i15 = i30 + 12 | 0;
   _memset(i15 | 0, 0, 16) | 0;
   i33 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i33, i3 + 12 | 0, i2);
   i36 = i15;
   i15 = HEAP32[i36 >> 2] | 0;
   HEAP32[i36 >> 2] = i33;
   do {
    if ((i15 | 0) != 0) {
     i33 = i15 | 0;
     i36 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
     if ((i36 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i15 | 0);
      break;
     } else {
      HEAP32[i33 >> 2] = i36;
      break;
     }
    }
   } while (0);
   i15 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i15, i3 + 20 | 0, i2);
   i36 = i30 + 16 | 0;
   i33 = HEAP32[i36 >> 2] | 0;
   HEAP32[i36 >> 2] = i15;
   do {
    if ((i33 | 0) != 0) {
     i15 = i33 | 0;
     i36 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i36 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i33 | 0);
      break;
     } else {
      HEAP32[i15 >> 2] = i36;
      break;
     }
    }
   } while (0);
   i33 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i33, i3 + 28 | 0, i2);
   i36 = i30 + 20 | 0;
   i15 = HEAP32[i36 >> 2] | 0;
   HEAP32[i36 >> 2] = i33;
   do {
    if ((i15 | 0) != 0) {
     i33 = i15 | 0;
     i36 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
     if ((i36 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i15 | 0);
      break;
     } else {
      HEAP32[i33 >> 2] = i36;
      break;
     }
    }
   } while (0);
   i15 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i15, i3 + 36 | 0, i2);
   i36 = i30 + 24 | 0;
   i33 = HEAP32[i36 >> 2] | 0;
   HEAP32[i36 >> 2] = i15;
   do {
    if ((i33 | 0) != 0) {
     i15 = i33 | 0;
     i36 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i36 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i33 | 0);
      break;
     } else {
      HEAP32[i15 >> 2] = i36;
      break;
     }
    }
   } while (0);
   i35 = i30;
   break;
  }
 case 6:
  {
   i30 = __ZN3WTF10fastMallocEj(28) | 0;
   HEAP32[i30 + 4 >> 2] = 1;
   HEAP32[i30 + 8 >> 2] = 0;
   HEAP32[i30 >> 2] = __ZTVN7WebCore20CSSBasicShapeEllipseE + 8;
   i33 = i30 + 12 | 0;
   _memset(i33 | 0, 0, 16) | 0;
   __ZN7WebCoreL24valueForCenterCoordinateERNS_12CSSValuePoolEPKNS_11RenderStyleERKNS_26BasicShapeCenterCoordinateE(i16, i29, i2, i3 + 12 | 0);
   i36 = i16 | 0;
   i16 = HEAP32[i36 >> 2] | 0;
   HEAP32[i36 >> 2] = 0;
   i36 = i33;
   i33 = HEAP32[i36 >> 2] | 0;
   HEAP32[i36 >> 2] = i16;
   do {
    if ((i33 | 0) != 0) {
     i16 = i33 | 0;
     i36 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i36 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i33 | 0);
      break;
     } else {
      HEAP32[i16 >> 2] = i36;
      break;
     }
    }
   } while (0);
   __ZN7WebCoreL24valueForCenterCoordinateERNS_12CSSValuePoolEPKNS_11RenderStyleERKNS_26BasicShapeCenterCoordinateE(i17, i29, i2, i3 + 24 | 0);
   i33 = i17 | 0;
   i17 = HEAP32[i33 >> 2] | 0;
   HEAP32[i33 >> 2] = 0;
   i33 = i30 + 16 | 0;
   i36 = HEAP32[i33 >> 2] | 0;
   HEAP32[i33 >> 2] = i17;
   do {
    if ((i36 | 0) != 0) {
     i17 = i36 | 0;
     i33 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i33 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i36 | 0);
      break;
     } else {
      HEAP32[i17 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i36 = HEAP32[i3 + 44 >> 2] | 0;
   if ((i36 | 0) == 0) {
    i33 = __ZN3WTF10fastMallocEj(16) | 0;
    __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i33, i3 + 36 | 0, i2);
    HEAP32[i18 >> 2] = i33;
    i38 = i33;
   } else if ((i36 | 0) == 1) {
    __ZN7WebCore12CSSValuePool21createIdentifierValueENS_10CSSValueIDE(i18, i29, 551);
    i38 = HEAP32[i18 >> 2] | 0;
   } else if ((i36 | 0) == 2) {
    __ZN7WebCore12CSSValuePool21createIdentifierValueENS_10CSSValueIDE(i10, i29, 553);
    i36 = HEAP32[i10 >> 2] | 0;
    HEAP32[i18 >> 2] = i36;
    i38 = i36;
   } else {
    HEAP32[i18 >> 2] = 0;
    i38 = 0;
   }
   i36 = i18 | 0;
   HEAP32[i36 >> 2] = 0;
   i18 = i30 + 20 | 0;
   i10 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i38;
   do {
    if ((i10 | 0) != 0) {
     i38 = i10 | 0;
     i18 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i10 | 0);
      break;
     } else {
      HEAP32[i38 >> 2] = i18;
      break;
     }
    }
   } while (0);
   i10 = HEAP32[i36 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i36 = i10 | 0;
     i18 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i10 | 0);
      break;
     } else {
      HEAP32[i36 >> 2] = i18;
      break;
     }
    }
   } while (0);
   i10 = HEAP32[i3 + 56 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i18 = __ZN3WTF10fastMallocEj(16) | 0;
    __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i18, i3 + 48 | 0, i2);
    HEAP32[i19 >> 2] = i18;
    i39 = i18;
   } else if ((i10 | 0) == 1) {
    __ZN7WebCore12CSSValuePool21createIdentifierValueENS_10CSSValueIDE(i19, i29, 551);
    i39 = HEAP32[i19 >> 2] | 0;
   } else if ((i10 | 0) == 2) {
    __ZN7WebCore12CSSValuePool21createIdentifierValueENS_10CSSValueIDE(i9, i29, 553);
    i29 = HEAP32[i9 >> 2] | 0;
    HEAP32[i19 >> 2] = i29;
    i39 = i29;
   } else {
    HEAP32[i19 >> 2] = 0;
    i39 = 0;
   }
   i29 = i19 | 0;
   HEAP32[i29 >> 2] = 0;
   i19 = i30 + 24 | 0;
   i9 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = i39;
   do {
    if ((i9 | 0) != 0) {
     i39 = i9 | 0;
     i19 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i9 | 0);
      break;
     } else {
      HEAP32[i39 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i29 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i29 = i9 | 0;
     i19 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i9 | 0);
      break;
     } else {
      HEAP32[i29 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i35 = i30;
   break;
  }
 case 3:
  {
   i30 = __ZN3WTF10fastMallocEj(28) | 0;
   HEAP32[i30 + 4 >> 2] = 1;
   HEAP32[i30 + 8 >> 2] = 0;
   HEAP32[i30 >> 2] = __ZTVN7WebCore20CSSBasicShapePolygonE + 8;
   i9 = i30 + 12 | 0;
   _memset(i9 | 0, 0, 16) | 0;
   HEAP32[i30 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 1](i3) | 0;
   i19 = i3 + 16 | 0;
   i29 = i19 + 8 | 0;
   L164 : do {
    if ((HEAP32[i29 >> 2] | 0) != 0) {
     i39 = i19;
     i10 = i9;
     i18 = i30 + 20 | 0;
     i36 = i30 + 16 | 0;
     i38 = i9;
     i33 = 0;
     while (1) {
      i17 = (HEAP32[i39 >> 2] | 0) + (i33 << 3) | 0;
      i16 = __ZN3WTF10fastMallocEj(16) | 0;
      __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i16, i17, i2);
      i17 = i33 | 1;
      if ((HEAP32[i29 >> 2] | 0) >>> 0 <= i17 >>> 0) {
       break;
      }
      i15 = (HEAP32[i39 >> 2] | 0) + (i17 << 3) | 0;
      i17 = __ZN3WTF10fastMallocEj(16) | 0;
      __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i17, i15, i2);
      i15 = HEAP32[i18 >> 2] | 0;
      if ((i15 | 0) == (HEAP32[i36 >> 2] | 0)) {
       __ZN3WTF6VectorINS_6RefPtrIN7WebCore17CSSPrimitiveValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i10, i15 + 1 | 0);
       HEAP32[(HEAP32[i38 >> 2] | 0) + (HEAP32[i18 >> 2] << 2) >> 2] = i16;
      } else {
       HEAP32[(HEAP32[i38 >> 2] | 0) + (i15 << 2) >> 2] = i16;
      }
      i16 = HEAP32[i18 >> 2] | 0;
      i15 = i16 + 1 | 0;
      HEAP32[i18 >> 2] = i15;
      if ((i15 | 0) == (HEAP32[i36 >> 2] | 0)) {
       __ZN3WTF6VectorINS_6RefPtrIN7WebCore17CSSPrimitiveValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i10, i16 + 2 | 0);
       HEAP32[(HEAP32[i38 >> 2] | 0) + (HEAP32[i18 >> 2] << 2) >> 2] = i17;
      } else {
       HEAP32[(HEAP32[i38 >> 2] | 0) + (i15 << 2) >> 2] = i17;
      }
      HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
      i33 = i33 + 2 | 0;
      if (i33 >>> 0 >= (HEAP32[i29 >> 2] | 0) >>> 0) {
       break L164;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   } while (0);
   i35 = i30;
   break;
  }
 case 4:
  {
   i30 = __ZN3WTF10fastMallocEj(36) | 0;
   HEAP32[i30 + 4 >> 2] = 1;
   HEAP32[i30 + 8 >> 2] = 0;
   HEAP32[i30 >> 2] = __ZTVN7WebCore27CSSBasicShapeInsetRectangleE + 8;
   i29 = i30 + 12 | 0;
   _memset(i29 | 0, 0, 24) | 0;
   i9 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i9, i3 + 20 | 0, i2);
   i19 = i30 + 16 | 0;
   i33 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = i9;
   do {
    if ((i33 | 0) != 0) {
     i9 = i33 | 0;
     i19 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i33 | 0);
      break;
     } else {
      HEAP32[i9 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i33 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i33, i3 + 12 | 0, i2);
   i19 = i29;
   i29 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = i33;
   do {
    if ((i29 | 0) != 0) {
     i33 = i29 | 0;
     i19 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i29 | 0);
      break;
     } else {
      HEAP32[i33 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i29 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i29, i3 + 28 | 0, i2);
   i19 = i30 + 20 | 0;
   i33 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = i29;
   do {
    if ((i33 | 0) != 0) {
     i29 = i33 | 0;
     i19 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i33 | 0);
      break;
     } else {
      HEAP32[i29 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i33 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i33, i3 + 36 | 0, i2);
   i19 = i30 + 24 | 0;
   i29 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = i33;
   do {
    if ((i29 | 0) != 0) {
     i33 = i29 | 0;
     i19 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i29 | 0);
      break;
     } else {
      HEAP32[i33 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i29 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i29, i3 + 44 | 0, i2);
   i19 = i30 + 28 | 0;
   i33 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = i29;
   do {
    if ((i33 | 0) != 0) {
     i29 = i33 | 0;
     i19 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i33 | 0);
      break;
     } else {
      HEAP32[i29 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i33 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i33, i3 + 52 | 0, i2);
   i2 = i30 + 32 | 0;
   i19 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i33;
   do {
    if ((i19 | 0) != 0) {
     i33 = i19 | 0;
     i2 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
     if ((i2 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i19 | 0);
      break;
     } else {
      HEAP32[i33 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i35 = i30;
   break;
  }
 case 7:
  {
   i30 = __ZN3WTF10fastMallocEj(44) | 0;
   HEAP32[i30 + 4 >> 2] = 1;
   HEAP32[i30 + 8 >> 2] = 0;
   HEAP32[i30 >> 2] = __ZTVN7WebCore18CSSBasicShapeInsetE + 8;
   i19 = i30 + 12 | 0;
   _memset(i19 | 0, 0, 32) | 0;
   i2 = i3 + 20 | 0;
   i33 = HEAP32[i2 >> 2] | 0;
   i29 = HEAP32[i2 + 4 >> 2] | 0;
   HEAP32[i20 >> 2] = i33;
   HEAP32[i20 + 4 >> 2] = i29;
   if ((i33 & 0 | 0) == 0 & (i29 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i21);
    i40 = HEAP32[i20 + 4 >> 2] | 0;
    i41 = HEAP32[i20 >> 2] | 0;
   } else {
    i40 = i29;
    i41 = i33;
   }
   i33 = i7;
   HEAP32[i7 >> 2] = i41;
   HEAP32[i7 + 4 >> 2] = i40;
   if ((i41 & 0 | 0) == 0 & (i40 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i33);
   }
   i40 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthE(i40, i33);
   if ((HEAP8[i33 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i33);
   }
   i33 = i19;
   i19 = HEAP32[i33 >> 2] | 0;
   HEAP32[i33 >> 2] = i40;
   do {
    if ((i19 | 0) != 0) {
     i40 = i19 | 0;
     i33 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
     if ((i33 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i19 | 0);
      break;
     } else {
      HEAP32[i40 >> 2] = i33;
      break;
     }
    }
   } while (0);
   if ((HEAP8[i21 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i21);
   }
   i21 = i3 + 12 | 0;
   i19 = HEAP32[i21 >> 2] | 0;
   i33 = HEAP32[i21 + 4 >> 2] | 0;
   HEAP32[i22 >> 2] = i19;
   HEAP32[i22 + 4 >> 2] = i33;
   if ((i19 & 0 | 0) == 0 & (i33 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i23);
    i42 = HEAP32[i22 + 4 >> 2] | 0;
    i43 = HEAP32[i22 >> 2] | 0;
   } else {
    i42 = i33;
    i43 = i19;
   }
   i19 = i6;
   HEAP32[i6 >> 2] = i43;
   HEAP32[i6 + 4 >> 2] = i42;
   if ((i43 & 0 | 0) == 0 & (i42 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i19);
   }
   i42 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthE(i42, i19);
   if ((HEAP8[i19 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i19);
   }
   i19 = i30 + 16 | 0;
   i43 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = i42;
   do {
    if ((i43 | 0) != 0) {
     i42 = i43 | 0;
     i19 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i43 | 0);
      break;
     } else {
      HEAP32[i42 >> 2] = i19;
      break;
     }
    }
   } while (0);
   if ((HEAP8[i23 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i23);
   }
   i23 = i3 + 28 | 0;
   i43 = HEAP32[i23 >> 2] | 0;
   i19 = HEAP32[i23 + 4 >> 2] | 0;
   HEAP32[i24 >> 2] = i43;
   HEAP32[i24 + 4 >> 2] = i19;
   if ((i43 & 0 | 0) == 0 & (i19 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i25);
    i44 = HEAP32[i24 + 4 >> 2] | 0;
    i45 = HEAP32[i24 >> 2] | 0;
   } else {
    i44 = i19;
    i45 = i43;
   }
   i43 = i5;
   HEAP32[i5 >> 2] = i45;
   HEAP32[i5 + 4 >> 2] = i44;
   if ((i45 & 0 | 0) == 0 & (i44 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i43);
   }
   i44 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthE(i44, i43);
   if ((HEAP8[i43 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i43);
   }
   i43 = i30 + 20 | 0;
   i45 = HEAP32[i43 >> 2] | 0;
   HEAP32[i43 >> 2] = i44;
   do {
    if ((i45 | 0) != 0) {
     i44 = i45 | 0;
     i43 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
     if ((i43 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i45 | 0);
      break;
     } else {
      HEAP32[i44 >> 2] = i43;
      break;
     }
    }
   } while (0);
   if ((HEAP8[i25 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i25);
   }
   i25 = i3 + 36 | 0;
   i45 = HEAP32[i25 >> 2] | 0;
   i43 = HEAP32[i25 + 4 >> 2] | 0;
   HEAP32[i26 >> 2] = i45;
   HEAP32[i26 + 4 >> 2] = i43;
   if ((i45 & 0 | 0) == 0 & (i43 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i27);
    i46 = HEAP32[i26 + 4 >> 2] | 0;
    i47 = HEAP32[i26 >> 2] | 0;
   } else {
    i46 = i43;
    i47 = i45;
   }
   i45 = i8;
   HEAP32[i8 >> 2] = i47;
   HEAP32[i8 + 4 >> 2] = i46;
   if ((i47 & 0 | 0) == 0 & (i46 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i45);
   }
   i46 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthE(i46, i45);
   if ((HEAP8[i45 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i45);
   }
   i45 = i30 + 24 | 0;
   i47 = HEAP32[i45 >> 2] | 0;
   HEAP32[i45 >> 2] = i46;
   do {
    if ((i47 | 0) != 0) {
     i46 = i47 | 0;
     i45 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
     if ((i45 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i47 | 0);
      break;
     } else {
      HEAP32[i46 >> 2] = i45;
      break;
     }
    }
   } while (0);
   if ((HEAP8[i27 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i27);
   }
   i27 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_10LengthSizeE(i27, i3 + 44 | 0);
   i47 = i30 + 28 | 0;
   i45 = HEAP32[i47 >> 2] | 0;
   HEAP32[i47 >> 2] = i27;
   do {
    if ((i45 | 0) != 0) {
     i27 = i45 | 0;
     i47 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     if ((i47 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i45 | 0);
      break;
     } else {
      HEAP32[i27 >> 2] = i47;
      break;
     }
    }
   } while (0);
   i45 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_10LengthSizeE(i45, i3 + 60 | 0);
   i47 = i30 + 32 | 0;
   i27 = HEAP32[i47 >> 2] | 0;
   HEAP32[i47 >> 2] = i45;
   do {
    if ((i27 | 0) != 0) {
     i45 = i27 | 0;
     i47 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
     if ((i47 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i27 | 0);
      break;
     } else {
      HEAP32[i45 >> 2] = i47;
      break;
     }
    }
   } while (0);
   i27 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_10LengthSizeE(i27, i3 + 76 | 0);
   i47 = i30 + 36 | 0;
   i45 = HEAP32[i47 >> 2] | 0;
   HEAP32[i47 >> 2] = i27;
   do {
    if ((i45 | 0) != 0) {
     i27 = i45 | 0;
     i47 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     if ((i47 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i45 | 0);
      break;
     } else {
      HEAP32[i27 >> 2] = i47;
      break;
     }
    }
   } while (0);
   i45 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_10LengthSizeE(i45, i3 + 92 | 0);
   i47 = i30 + 40 | 0;
   i27 = HEAP32[i47 >> 2] | 0;
   HEAP32[i47 >> 2] = i45;
   do {
    if ((i27 | 0) != 0) {
     i45 = i27 | 0;
     i47 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
     if ((i47 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i27 | 0);
      break;
     } else {
      HEAP32[i45 >> 2] = i47;
      break;
     }
    }
   } while (0);
   i35 = i30;
   break;
  }
 default:
  {
   i35 = 0;
  }
 }
 __ZN7WebCore11valueForBoxENS_9LayoutBoxE(i28, HEAP32[i3 + 8 >> 2] | 0);
 i3 = i28 | 0;
 i28 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i35 + 8 | 0;
 i30 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i28;
 do {
  if ((i30 | 0) != 0) {
   i28 = i30 | 0;
   i3 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i30 | 0);
    break;
   } else {
    HEAP32[i28 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i30 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i30 >> 2] = 1;
 i3 = i30 + 4 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -524288;
 i3 = i12 | 0;
 HEAP32[i3 >> 2] = i35;
 __ZN7WebCore17CSSPrimitiveValue4initEN3WTF10PassRefPtrINS_13CSSBasicShapeEEE(i30, i12);
 i12 = HEAP32[i3 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i48 = i1 | 0;
  i49 = i30;
  HEAP32[i48 >> 2] = i49;
  STACKTOP = i4;
  return;
 }
 i3 = i12 + 4 | 0;
 i12 = i3 | 0;
 i35 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 if ((i35 | 0) != 0) {
  HEAP32[i12 >> 2] = i35;
  i48 = i1 | 0;
  i49 = i30;
  HEAP32[i48 >> 2] = i49;
  STACKTOP = i4;
  return;
 }
 i35 = i3 - 4 | 0;
 if ((i35 | 0) == 0) {
  i48 = i1 | 0;
  i49 = i30;
  HEAP32[i48 >> 2] = i49;
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i35 >> 2] | 0) + 16 >> 2] & 7](i35);
 i48 = i1 | 0;
 i49 = i30;
 HEAP32[i48 >> 2] = i49;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i2 + 4 | 0;
 i11 = (HEAP32[i10 >> 2] | 0) >>> 2 & 127;
 do {
  if ((i11 | 0) == 3 | (i11 | 0) == 4 | (i11 | 0) == 108 | (i11 | 0) == 109) {
   if (!((i3 | 0) == 0 | (i4 | 0) == 0)) {
    break;
   }
   HEAP32[i1 >> 2] = 0;
   HEAP8[i1 + 4 | 0] = 0;
   HEAP8[i1 + 5 | 0] = 15;
   HEAP8[i1 + 6 | 0] = 0;
   STACKTOP = i7;
   return;
  }
 } while (0);
 i11 = __ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0;
 if ((i11 - 3 & 65535) >>> 0 < 8 >>> 0 | i11 << 16 >> 16 == 108 | i11 << 16 >> 16 == 109) {
  __ZNK7WebCore17CSSPrimitiveValue13computeLengthINS_6LengthEEET_PKNS_11RenderStyleES6_fb(i1, i2, i3, i4, d5, i6);
  STACKTOP = i7;
  return;
 }
 i6 = __ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0;
 if ((i6 - 3 & 65535) >>> 0 < 8 >>> 0 | i6 << 16 >> 16 == 108 | i6 << 16 >> 16 == 109) {
  d12 = +__ZNK7WebCore17CSSPrimitiveValue13computeLengthIdEET_PKNS_11RenderStyleES5_fb(i2, i3, i4, d5, 0);
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 3;
  HEAP8[i1 + 6 | 0] = 1;
  HEAPF32[i1 >> 2] = d12;
  STACKTOP = i7;
  return;
 }
 if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0) << 16 >> 16 == 2) {
  d12 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i2);
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 2;
  HEAP8[i1 + 6 | 0] = 1;
  HEAPF32[i1 >> 2] = d12;
  STACKTOP = i7;
  return;
 }
 i6 = HEAP32[i10 >> 2] | 0;
 if ((i6 & 508 | 0) != 452) {
  if (((i6 >>> 2 & 127) - 26 | 0) >>> 0 < 4 >>> 0) {
   __ZNK7WebCore17CSSPrimitiveValue24viewportPercentageLengthEv(i1, i2);
   STACKTOP = i7;
   return;
  } else {
   HEAP32[i1 >> 2] = 0;
   HEAP8[i1 + 4 | 0] = 0;
   HEAP8[i1 + 5 | 0] = 15;
   HEAP8[i1 + 6 | 0] = 0;
   STACKTOP = i7;
   return;
  }
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[i6 + 8 >> 2] | 0;
 FUNCTION_TABLE_viiiid[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 1](i8, i2, i3, i4, d5);
 __ZN7WebCore16CalculationValue6createEN3WTF10PassOwnPtrINS_18CalcExpressionNodeEEENS_30CalculationPermittedValueRangeE(i9, i8, HEAP8[i6 + 12 | 0] & 1);
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 7](i6);
 }
 __ZN7WebCore6LengthC1EN3WTF10PassRefPtrINS_16CalculationValueEEE(i1, i9);
 i1 = HEAP32[i9 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i9 = i1 | 0;
 i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i9 >> 2] = i6;
  STACKTOP = i7;
  return;
 }
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 7](i6);
 }
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore17BasicShapePolygon11appendPointENS_6LengthES1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = i1 + 16 | 0;
 i5 = i1 + 24 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 20 | 0;
 if ((i6 | 0) == (HEAP32[i7 >> 2] | 0)) {
  i1 = i6 + 1 | 0;
  i8 = i4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  do {
   if (i9 >>> 0 > i2 >>> 0) {
    i10 = 5;
   } else {
    if ((i9 + (i6 << 3) | 0) >>> 0 <= i2 >>> 0) {
     i10 = 5;
     break;
    }
    __ZN3WTF6VectorIN7WebCore6LengthELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i1);
    i11 = HEAP32[i8 >> 2] | 0;
    i12 = i11 + (i2 - i9 >> 3 << 3) | 0;
    i13 = i11;
   }
  } while (0);
  if ((i10 | 0) == 5) {
   __ZN3WTF6VectorIN7WebCore6LengthELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i1);
   i12 = i2;
   i13 = HEAP32[i8 >> 2] | 0;
  }
  i8 = i12;
  i1 = i13 + (HEAP32[i5 >> 2] << 3) | 0;
  i13 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i1 + 4 >> 2] = i13;
  HEAP8[i12 + 5 | 0] = 0;
 } else {
  i12 = i2;
  i13 = (HEAP32[i4 >> 2] | 0) + (i6 << 3) | 0;
  i6 = HEAP32[i12 + 4 >> 2] | 0;
  HEAP32[i13 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i13 + 4 >> 2] = i6;
  HEAP8[i2 + 5 | 0] = 0;
 }
 i2 = HEAP32[i5 >> 2] | 0;
 i6 = i2 + 1 | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) != (HEAP32[i7 >> 2] | 0)) {
  i7 = i3;
  i13 = (HEAP32[i4 >> 2] | 0) + (i6 << 3) | 0;
  i12 = HEAP32[i7 + 4 >> 2] | 0;
  HEAP32[i13 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i13 + 4 >> 2] = i12;
  HEAP8[i3 + 5 | 0] = 0;
  i14 = HEAP32[i5 >> 2] | 0;
  i15 = i14 + 1 | 0;
  HEAP32[i5 >> 2] = i15;
  return;
 }
 i12 = i2 + 2 | 0;
 i2 = i4 | 0;
 i13 = HEAP32[i2 >> 2] | 0;
 do {
  if (i13 >>> 0 > i3 >>> 0) {
   i10 = 12;
  } else {
   if ((i13 + (i6 << 3) | 0) >>> 0 <= i3 >>> 0) {
    i10 = 12;
    break;
   }
   __ZN3WTF6VectorIN7WebCore6LengthELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i12);
   i7 = HEAP32[i2 >> 2] | 0;
   i16 = i7 + (i3 - i13 >> 3 << 3) | 0;
   i17 = i7;
  }
 } while (0);
 if ((i10 | 0) == 12) {
  __ZN3WTF6VectorIN7WebCore6LengthELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i12);
  i16 = i3;
  i17 = HEAP32[i2 >> 2] | 0;
 }
 i2 = i16;
 i3 = i17 + (HEAP32[i5 >> 2] << 3) | 0;
 i17 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i3 + 4 >> 2] = i17;
 HEAP8[i16 + 5 | 0] = 0;
 i14 = HEAP32[i5 >> 2] | 0;
 i15 = i14 + 1 | 0;
 HEAP32[i5 >> 2] = i15;
 return;
}
function __ZN7WebCoreL25convertToCenterCoordinateEPKNS_11RenderStyleES2_PNS_17CSSPrimitiveValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8;
 do {
  if ((HEAP32[i4 + 4 >> 2] & 508 | 0) == 400) {
   i10 = HEAP32[i4 + 8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i11 = HEAP32[i10 + 8 >> 2] | 0;
   do {
    if ((HEAP32[i11 + 4 >> 2] & 508 | 0) == 472) {
     i12 = HEAP32[i11 + 8 >> 2] | 0;
     if ((i12 | 0) == 148) {
      i13 = 1;
      break;
     } else if ((i12 | 0) == 153) {
      i13 = 2;
      break;
     } else if ((i12 | 0) == 149) {
      i13 = 3;
      break;
     } else if ((i12 | 0) == 152) {
      i13 = 4;
      break;
     } else {
      i13 = 0;
      break;
     }
    } else {
     i13 = 0;
    }
   } while (0);
   __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i7, HEAP32[i10 + 12 >> 2] | 0, i2, i3, +HEAPF32[(HEAP32[i2 + 24 >> 2] | 0) + 80 >> 2], 0);
   HEAP32[i1 >> 2] = i13;
   i11 = i1 + 4 | 0;
   i12 = i11;
   i14 = HEAP32[i6 >> 2] | 0;
   i15 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i12 >> 2] = i14;
   HEAP32[i12 + 4 >> 2] = i15;
   if ((i14 & 0 | 0) == 0 & (i15 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i11);
   }
   if ((HEAP8[i7 + 5 | 0] | 0) != 10) {
    STACKTOP = i5;
    return;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
   STACKTOP = i5;
   return;
  }
 } while (0);
 __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i9, i4, i2, i3, +HEAPF32[(HEAP32[i2 + 24 >> 2] | 0) + 80 >> 2], 0);
 HEAP32[i1 >> 2] = 0;
 i2 = i1 + 4 | 0;
 i1 = i2;
 i3 = HEAP32[i8 >> 2] | 0;
 i4 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 HEAP32[i1 + 4 >> 2] = i4;
 if ((i3 & 0 | 0) == 0 & (i4 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i2);
 }
 if ((HEAP8[i9 + 5 | 0] | 0) != 10) {
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
 STACKTOP = i5;
 return;
}
function __ZN7WebCoreL24valueForCenterCoordinateERNS_12CSSValuePoolEPKNS_11RenderStyleERKNS_26BasicShapeCenterCoordinateE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 switch (HEAP32[i4 >> 2] | 0) {
 case 0:
  {
   i8 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i8, i4 + 4 | 0, i3);
   HEAP32[i1 >> 2] = i8;
   STACKTOP = i5;
   return;
  }
 case 1:
  {
   i9 = 148;
   break;
  }
 case 2:
  {
   i9 = 153;
   break;
  }
 case 3:
  {
   i9 = 149;
   break;
  }
 case 4:
  {
   i9 = 152;
   break;
  }
 default:
  {
   i9 = 0;
  }
 }
 __ZN7WebCore12CSSValuePool21createIdentifierValueENS_10CSSValueIDE(i7, i2, i9);
 i9 = HEAP32[i7 >> 2] | 0;
 i7 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1ERKNS_6LengthEPKNS_11RenderStyleE(i7, i4 + 4 | 0, i3);
 i3 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i3 + 4 >> 2] = 1;
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i3 + 8 >> 2] = i9;
 HEAP32[i3 + 12 >> 2] = i7;
 i7 = __ZN3WTF10fastMallocEj(16) | 0;
 i9 = i7;
 HEAP32[i7 >> 2] = 1;
 i4 = i7 + 4 | 0;
 HEAP32[i4 >> 2] = HEAP32[i4 >> 2] & -524288;
 i4 = i6 | 0;
 HEAP32[i4 >> 2] = i3;
 __ZN7WebCore17CSSPrimitiveValue4initEN3WTF10PassRefPtrINS_4PairEEE(i9, i6);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 4 | 0;
   i3 = i4 | 0;
   i7 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i3 >> 2] = i7;
    break;
   }
   i7 = i4 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 7](i7);
  }
 } while (0);
 HEAP32[i1 >> 2] = i9;
 STACKTOP = i5;
 return;
}
function __ZN7WebCoreL26cssValueToBasicShapeRadiusEPKNS_11RenderStyleES2_N3WTF10PassRefPtrINS_17CSSPrimitiveValueEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i6;
 if ((i4 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 15;
  HEAP8[i1 + 6 | 0] = 0;
  HEAP32[i1 + 8 >> 2] = 1;
  STACKTOP = i5;
  return;
 }
 do {
  if ((HEAP32[i4 + 4 >> 2] & 508 | 0) == 472) {
   i8 = HEAP32[i4 + 8 >> 2] | 0;
   if ((i8 | 0) == 551) {
    HEAP32[i1 >> 2] = 0;
    HEAP8[i1 + 4 | 0] = 0;
    HEAP8[i1 + 5 | 0] = 15;
    HEAP8[i1 + 6 | 0] = 0;
    HEAP32[i1 + 8 >> 2] = 1;
    STACKTOP = i5;
    return;
   } else if ((i8 | 0) == 553) {
    HEAP32[i1 >> 2] = 0;
    HEAP8[i1 + 4 | 0] = 0;
    HEAP8[i1 + 5 | 0] = 15;
    HEAP8[i1 + 6 | 0] = 0;
    HEAP32[i1 + 8 >> 2] = 2;
    STACKTOP = i5;
    return;
   } else {
    break;
   }
  }
 } while (0);
 __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db(i7, i4, i2, i3, +HEAPF32[(HEAP32[i2 + 24 >> 2] | 0) + 80 >> 2], 0);
 i2 = i1;
 i3 = HEAP32[i6 >> 2] | 0;
 i4 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 HEAP32[i2 + 4 >> 2] = i4;
 if ((i3 & 0 | 0) == 0 & (i4 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i1 | 0);
 }
 HEAP32[i1 + 8 >> 2] = 0;
 if ((HEAP8[i7 + 5 | 0] | 0) != 10) {
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11valueForBoxENS_9LayoutBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 switch (i2 | 0) {
 case 4:
  {
   __ZN7WebCore12CSSValuePool21createIdentifierValueENS_10CSSValueIDE(i1, __ZN7WebCore12cssValuePoolEv() | 0, 486);
   STACKTOP = i3;
   return;
  }
 case 3:
  {
   __ZN7WebCore12CSSValuePool21createIdentifierValueENS_10CSSValueIDE(i4, __ZN7WebCore12cssValuePoolEv() | 0, 488);
   HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
   STACKTOP = i3;
   return;
  }
 case 2:
  {
   __ZN7WebCore12CSSValuePool21createIdentifierValueENS_10CSSValueIDE(i5, __ZN7WebCore12cssValuePoolEv() | 0, 484);
   HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
   STACKTOP = i3;
   return;
  }
 case 1:
  {
   __ZN7WebCore12CSSValuePool21createIdentifierValueENS_10CSSValueIDE(i6, __ZN7WebCore12cssValuePoolEv() | 0, 489);
   HEAP32[i1 >> 2] = HEAP32[i6 >> 2];
   STACKTOP = i3;
   return;
  }
 case 5:
  {
   __ZN7WebCore12CSSValuePool21createIdentifierValueENS_10CSSValueIDE(i7, __ZN7WebCore12cssValuePoolEv() | 0, 490);
   HEAP32[i1 >> 2] = HEAP32[i7 >> 2];
   STACKTOP = i3;
   return;
  }
 case 0:
  {
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i3;
   return;
  }
 default:
  {
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i3;
   return;
  }
 }
}
function __ZN3WTF6VectorIN7WebCore6LengthELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
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
 i1 = i2 + (i6 << 3) | 0;
 if (i5 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 3) | 0;
 HEAP32[i3 >> 2] = i7 >>> 3;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   i5 = i6;
   i8 = i7;
   i9 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i8 + 4 >> 2] = i9;
   HEAP8[i6 + 5 | 0] = 0;
   i9 = i6 + 8 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 8 | 0;
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
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore17CSSPrimitiveValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore11boxForValueEPKNS_17CSSPrimitiveValueE(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 L1 : do {
  if ((i1 | 0) == 0) {
   i2 = 0;
  } else {
   L3 : do {
    if ((HEAP32[i1 + 4 >> 2] & 508 | 0) == 472) {
     switch (HEAP32[i1 + 8 >> 2] | 0) {
     case 488:
      {
       i2 = 3;
       break L1;
       break;
      }
     case 484:
      {
       i2 = 2;
       break L1;
       break;
      }
     case 489:
      {
       i2 = 1;
       break L1;
       break;
      }
     case 490:
      {
       i2 = 5;
       break L1;
       break;
      }
     case 486:
      {
       i2 = 4;
       break L1;
       break;
      }
     default:
      {
       break L3;
      }
     }
    }
   } while (0);
   i2 = 0;
  }
 } while (0);
 return i2 | 0;
}
function __ZN7WebCore4PairD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
}
function __ZN7WebCore4PairD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
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
function __ZN7WebCore29floatValueForCenterCoordinateERKNS_26BasicShapeCenterCoordinateEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var d3 = +0, d4 = +0;
 d3 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 4 | 0, d2, 0);
 switch (HEAP32[i1 >> 2] | 0) {
 case 0:
 case 1:
 case 4:
  {
   d4 = d3;
   return +d4;
  }
 case 3:
 case 2:
  {
   d4 = d2 - d3;
   return +d4;
  }
 default:
  {
   d4 = +0;
   return +d4;
  }
 }
 return +0;
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiiid(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 FUNCTION_TABLE_viiiid[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, +d6);
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
function b1(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 abort(1);
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 2;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
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
function b3() {
 abort(3);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore4PairD0Ev,b0,__ZN7WebCore4PairD1Ev,b0,b0,b0];
  var FUNCTION_TABLE_viiiid = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_viiiid: dynCall_viiiid, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_viiiid": invoke_viiiid, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN7WebCore27CSSBasicShapeInsetRectangleE": __ZTVN7WebCore27CSSBasicShapeInsetRectangleE, "__ZTVN7WebCore20CSSBasicShapeEllipseE": __ZTVN7WebCore20CSSBasicShapeEllipseE, "__ZTVN7WebCore29CSSDeprecatedBasicShapeCircleE": __ZTVN7WebCore29CSSDeprecatedBasicShapeCircleE, "__ZTVN7WebCore27DeprecatedBasicShapeEllipseE": __ZTVN7WebCore27DeprecatedBasicShapeEllipseE, "__ZTVN7WebCore17BasicShapeEllipseE": __ZTVN7WebCore17BasicShapeEllipseE, "__ZTVN7WebCore20CSSBasicShapePolygonE": __ZTVN7WebCore20CSSBasicShapePolygonE, "__ZTVN7WebCore19CSSBasicShapeCircleE": __ZTVN7WebCore19CSSBasicShapeCircleE, "__ZTVN7WebCore18CSSBasicShapeInsetE": __ZTVN7WebCore18CSSBasicShapeInsetE, "__ZTVN7WebCore24BasicShapeInsetRectangleE": __ZTVN7WebCore24BasicShapeInsetRectangleE, "__ZTVN7WebCore26DeprecatedBasicShapeCircleE": __ZTVN7WebCore26DeprecatedBasicShapeCircleE, "__ZTVN7WebCore15BasicShapeInsetE": __ZTVN7WebCore15BasicShapeInsetE, "__ZTVN7WebCore16BasicShapeCircleE": __ZTVN7WebCore16BasicShapeCircleE, "__ZTVN7WebCore30CSSDeprecatedBasicShapeEllipseE": __ZTVN7WebCore30CSSDeprecatedBasicShapeEllipseE, "__ZTVN7WebCore17BasicShapePolygonE": __ZTVN7WebCore17BasicShapePolygonE, "__ZTVN7WebCore22CSSBasicShapeRectangleE": __ZTVN7WebCore22CSSBasicShapeRectangleE, "__ZTVN7WebCore19BasicShapeRectangleE": __ZTVN7WebCore19BasicShapeRectangleE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_viiiid = Module["dynCall_viiiid"] = asm["dynCall_viiiid"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCoreL26cssValueToBasicShapeRadiusEPKNS_11RenderStyleES2_N3WTF10PassRefPtrINS_17CSSPrimitiveValueEEE","_strlen","__ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi107EEENS_6LengthEPKNS_11RenderStyleES5_db","__ZN7WebCore18basicShapeForValueEPKNS_11RenderStyleES2_PKNS_13CSSBasicShapeE","_memcpy","__ZN7WebCore17BasicShapePolygon11appendPointENS_6LengthES1_","__ZN7WebCoreL25convertToCenterCoordinateEPKNS_11RenderStyleES2_PNS_17CSSPrimitiveValueE","_memset","__ZN7WebCore11boxForValueEPKNS_17CSSPrimitiveValueE","__ZN3WTF6VectorIN7WebCore6LengthELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore29floatValueForCenterCoordinateERKNS_26BasicShapeCenterCoordinateEf","__ZN7WebCore18valueForBasicShapeEPKNS_11RenderStyleEPKNS_10BasicShapeE","__ZN3WTF6VectorINS_6RefPtrIN7WebCore17CSSPrimitiveValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCoreL24valueForCenterCoordinateERNS_12CSSValuePoolEPKNS_11RenderStyleERKNS_26BasicShapeCenterCoordinateE","__ZN7WebCore4PairD0Ev","__ZN7WebCore11valueForBoxENS_9LayoutBoxE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore4PairD1Ev"]

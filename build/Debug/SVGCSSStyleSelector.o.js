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
H_BASE = parentModule["_malloc"](0 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 0;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
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
var Math_min = Math.min;
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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var _fabsf=env._fabsf;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fmod=env._fmod;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore13StyleResolver16applySVGPropertyENS_13CSSPropertyIDEPNS_8CSSValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, d117 = +0, d118 = +0, d119 = +0, d120 = +0, d121 = +0, i122 = 0, i123 = 0, d124 = +0, d125 = +0, i126 = 0, i127 = 0, d128 = +0, i129 = 0, i130 = 0, i131 = 0, i132 = 0, i133 = 0, i134 = 0, i135 = 0, i136 = 0, i137 = 0, i138 = 0, i139 = 0, i140 = 0, i141 = 0, i142 = 0, d143 = +0, d144 = +0, i145 = 0, i146 = 0, i147 = 0, i148 = 0, i149 = 0, i150 = 0, d151 = +0, i152 = 0, d153 = +0, i154 = 0, i155 = 0, i156 = 0, i157 = 0, i158 = 0, i159 = 0, i160 = 0, i161 = 0, i162 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 216 | 0;
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
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 i25 = i4 + 160 | 0;
 i26 = i4 + 168 | 0;
 i27 = i4 + 176 | 0;
 i28 = i4 + 184 | 0;
 i29 = i4 + 192 | 0;
 i30 = i4 + 200 | 0;
 i31 = i4 + 208 | 0;
 i32 = i31;
 i33 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i34 = i33;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i36 = i35;
 i37 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i38 = i37;
 i39 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i40 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i41 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i42 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i43 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i44 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i45 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i46 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i47 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i48 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i49 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i50 = i49;
 i51 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i52 = i51;
 i53 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i54 = i53;
 i55 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i56 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
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
 i61 = i60;
 i62 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i63 = i62;
 i64 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i65 = i64;
 i66 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i67 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i68 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i69 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i70 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i71 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i72 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i73 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i74 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i75 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i76 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i77 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i78 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i79 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i80 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i81 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i82 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i83 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i84 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i85 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i86 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i87 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i88 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i89 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i90 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i91 = i3 + 4 | 0;
 if ((HEAP32[i91 >> 2] & 516096 | 0) == 0) {
  i92 = i3;
 } else {
  i92 = 0;
 }
 i93 = i1 + 308 | 0;
 i94 = i1 + 312 | 0;
 i95 = (HEAP32[i94 >> 2] | 0) + 36 | 0;
 i96 = HEAP32[i95 >> 2] | 0;
 if ((HEAP32[i96 >> 2] | 0) == 1) {
  i97 = i96;
 } else {
  __ZNK7WebCore14SVGRenderStyle4copyEv(i30, i96);
  i96 = HEAP32[i30 >> 2] | 0;
  i30 = HEAP32[i95 >> 2] | 0;
  i98 = i30 | 0;
  i99 = (HEAP32[i98 >> 2] | 0) - 1 | 0;
  if ((i99 | 0) == 0) {
   __ZN7WebCore14SVGRenderStyleD1Ev(i30);
   __ZN3WTF8fastFreeEPv(i30);
  } else {
   HEAP32[i98 >> 2] = i99;
  }
  HEAP32[i95 >> 2] = i96;
  i97 = i96;
 }
 i96 = (HEAP32[i1 + 320 >> 2] | 0) == 0;
 i95 = HEAP32[i91 >> 2] | 0;
 if (i96) {
  i100 = 0;
 } else {
  i100 = (i95 & 516096 | 0) == 131072;
 }
 i91 = i95 & 516096;
 if ((i91 | 0) == 139264) {
  i101 = 1;
 } else {
  i101 = i96 & (i91 | 0) == 131072;
 }
 switch (i2 | 0) {
 case 405:
  {
   if (i100) {
    i2 = i97 + 8 | 0;
    HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -16 | HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 8 >> 2] & 15;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i2 = i97 + 8 | 0;
    HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -16;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   switch (HEAP32[i92 + 8 >> 2] | 0) {
   case 142:
    {
     i102 = 1;
     break;
    }
   case 738:
    {
     i102 = 2;
     break;
    }
   case 741:
    {
     i102 = 3;
     break;
    }
   case 143:
    {
     i102 = 4;
     break;
    }
   case 740:
    {
     i102 = 5;
     break;
    }
   case 739:
    {
     i102 = 6;
     break;
    }
   case 742:
    {
     i102 = 7;
     break;
    }
   case 743:
    {
     i102 = 8;
     break;
    }
   case 576:
    {
     i102 = 9;
     break;
    }
   case 744:
    {
     i102 = 10;
     break;
    }
   case 745:
    {
     i102 = 11;
     break;
    }
   default:
    {
     i102 = 0;
    }
   }
   i2 = i97 + 8 | 0;
   HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -16 | i102;
   STACKTOP = i4;
   return;
  }
 case 406:
  {
   if (i100) {
    i102 = i97 + 8 | 0;
    HEAP32[i102 >> 2] = HEAP32[i102 >> 2] & -769 | HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 8 >> 2] & 768;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i102 = i97 + 8 | 0;
    HEAP32[i102 >> 2] = HEAP32[i102 >> 2] & -769;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   do {
    if ((HEAP32[i92 + 4 >> 2] & 508 | 0) == 472) {
     i102 = HEAP32[i92 + 8 >> 2] | 0;
     if ((i102 | 0) == 142) {
      i2 = i97 + 8 | 0;
      HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -769;
      STACKTOP = i4;
      return;
     } else if ((i102 | 0) == 144) {
      i2 = i97 + 8 | 0;
      HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -769 | 256;
      STACKTOP = i4;
      return;
     } else if ((i102 | 0) == 145) {
      i2 = i97 + 8 | 0;
      HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -769 | 512;
      STACKTOP = i4;
      return;
     } else if ((i102 | 0) == 0) {
      break;
     } else {
      STACKTOP = i4;
      return;
     }
    }
   } while (0);
   i102 = i97 + 8 | 0;
   HEAP32[i102 >> 2] = HEAP32[i102 >> 2] | 768;
   __ZN7WebCore9SVGLength21fromCSSPrimitiveValueEPNS_17CSSPrimitiveValueE(i32, i92);
   i102 = i97 + 32 | 0;
   if (__ZNK7WebCore9SVGLengtheqERKS0_((HEAP32[i102 >> 2] | 0) + 24 | 0, i32) | 0) {
    STACKTOP = i4;
    return;
   }
   i32 = HEAP32[i102 >> 2] | 0;
   if ((HEAP32[i32 >> 2] | 0) == 1) {
    i103 = i32;
   } else {
    __ZNK7WebCore13StyleMiscData4copyEv(i27, i32);
    i32 = HEAP32[i27 >> 2] | 0;
    i27 = HEAP32[i102 >> 2] | 0;
    i2 = i27 | 0;
    i96 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
    if ((i96 | 0) == 0) {
     __ZN3WTF8fastFreeEPv(i27);
    } else {
     HEAP32[i2 >> 2] = i96;
    }
    HEAP32[i102 >> 2] = i32;
    i103 = i32;
   }
   i32 = i103 + 24 | 0;
   i103 = HEAP32[i31 + 4 >> 2] | 0;
   HEAP32[i32 >> 2] = HEAP32[i31 >> 2];
   HEAP32[i32 + 4 >> 2] = i103;
   STACKTOP = i4;
   return;
  }
 case 410:
  {
   if (i100) {
    __ZN7WebCore9SVGLengthC1ERKS0_(i34, (HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 4 | 0);
    i103 = i97 + 20 | 0;
    if (__ZNK7WebCore9SVGLengtheqERKS0_((HEAP32[i103 >> 2] | 0) + 4 | 0, i34) | 0) {
     STACKTOP = i4;
     return;
    }
    i34 = HEAP32[i103 >> 2] | 0;
    if ((HEAP32[i34 >> 2] | 0) == 1) {
     i104 = i34;
    } else {
     __ZNK7WebCore13StyleTextData4copyEv(i26, i34);
     i34 = HEAP32[i26 >> 2] | 0;
     i26 = HEAP32[i103 >> 2] | 0;
     i32 = i26 | 0;
     i31 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     if ((i31 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i26);
     } else {
      HEAP32[i32 >> 2] = i31;
     }
     HEAP32[i103 >> 2] = i34;
     i104 = i34;
    }
    i34 = i104 + 4 | 0;
    i104 = HEAP32[i33 + 4 >> 2] | 0;
    HEAP32[i34 >> 2] = HEAP32[i33 >> 2];
    HEAP32[i34 + 4 >> 2] = i104;
    STACKTOP = i4;
    return;
   }
   if (!i101) {
    if ((i92 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore9SVGLength21fromCSSPrimitiveValueEPNS_17CSSPrimitiveValueE(i38, i92);
    i104 = i97 + 20 | 0;
    if (__ZNK7WebCore9SVGLengtheqERKS0_((HEAP32[i104 >> 2] | 0) + 4 | 0, i38) | 0) {
     STACKTOP = i4;
     return;
    }
    i38 = HEAP32[i104 >> 2] | 0;
    if ((HEAP32[i38 >> 2] | 0) == 1) {
     i105 = i38;
    } else {
     __ZNK7WebCore13StyleTextData4copyEv(i22, i38);
     i38 = HEAP32[i22 >> 2] | 0;
     i22 = HEAP32[i104 >> 2] | 0;
     i34 = i22 | 0;
     i33 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
     if ((i33 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i22);
     } else {
      HEAP32[i34 >> 2] = i33;
     }
     HEAP32[i104 >> 2] = i38;
     i105 = i38;
    }
    i38 = i105 + 4 | 0;
    i105 = HEAP32[i37 + 4 >> 2] | 0;
    HEAP32[i38 >> 2] = HEAP32[i37 >> 2];
    HEAP32[i38 + 4 >> 2] = i105;
    STACKTOP = i4;
    return;
   }
   i105 = i24 | 0;
   HEAP32[i105 >> 2] = 0;
   __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i36, 2, i24);
   i24 = HEAP32[i105 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i105 = i24 | 0;
     i38 = (HEAP32[i105 >> 2] | 0) - 2 | 0;
     if ((i38 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i105 >> 2] = i38;
      break;
     }
    }
   } while (0);
   i24 = i25 | 0;
   HEAP32[i24 >> 2] = 0;
   __ZN7WebCore9SVGLength22newValueSpecifiedUnitsEtfRi(i36, 1, +0, i24);
   i24 = i97 + 20 | 0;
   if (__ZNK7WebCore9SVGLengtheqERKS0_((HEAP32[i24 >> 2] | 0) + 4 | 0, i36) | 0) {
    STACKTOP = i4;
    return;
   }
   i36 = HEAP32[i24 >> 2] | 0;
   if ((HEAP32[i36 >> 2] | 0) == 1) {
    i106 = i36;
   } else {
    __ZNK7WebCore13StyleTextData4copyEv(i23, i36);
    i36 = HEAP32[i23 >> 2] | 0;
    i23 = HEAP32[i24 >> 2] | 0;
    i25 = i23 | 0;
    i38 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
    if ((i38 | 0) == 0) {
     __ZN3WTF8fastFreeEPv(i23);
    } else {
     HEAP32[i25 >> 2] = i38;
    }
    HEAP32[i24 >> 2] = i36;
    i106 = i36;
   }
   i36 = i106 + 4 | 0;
   i106 = HEAP32[i35 + 4 >> 2] | 0;
   HEAP32[i36 >> 2] = HEAP32[i35 >> 2];
   HEAP32[i36 + 4 >> 2] = i106;
   STACKTOP = i4;
   return;
  }
 case 407:
  {
   if (i100) {
    i106 = i97 + 8 | 0;
    HEAP32[i106 >> 2] = HEAP32[i106 >> 2] & -241 | HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 8 >> 2] & 240;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i106 = i97 + 8 | 0;
    HEAP32[i106 >> 2] = HEAP32[i106 >> 2] & -241;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   switch (HEAP32[i92 + 8 >> 2] | 0) {
   case 746:
    {
     i107 = 16;
     break;
    }
   case 747:
    {
     i107 = 32;
     break;
    }
   case 748:
    {
     i107 = 48;
     break;
    }
   case 743:
    {
     i107 = 64;
     break;
    }
   case 576:
    {
     i107 = 80;
     break;
    }
   case 744:
    {
     i107 = 96;
     break;
    }
   case 745:
    {
     i107 = 112;
     break;
    }
   case 740:
    {
     i107 = 128;
     break;
    }
   case 143:
    {
     i107 = 144;
     break;
    }
   case 742:
    {
     i107 = 160;
     break;
    }
   case 741:
    {
     i107 = 176;
     break;
    }
   default:
    {
     i107 = 0;
    }
   }
   i106 = i97 + 8 | 0;
   HEAP32[i106 >> 2] = HEAP32[i106 >> 2] & -241 | i107;
   STACKTOP = i4;
   return;
  }
 case 384:
  {
   if (i100) {
    i107 = i97 + 4 | 0;
    HEAP32[i107 >> 2] = HEAP32[i107 >> 2] & -12289 | HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] & 12288;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i107 = i97 + 4 | 0;
    HEAP32[i107 >> 2] = HEAP32[i107 >> 2] & -12289 | 4096;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i107 = HEAP32[i92 + 8 >> 2] | 0;
   if ((i107 | 0) == 733) {
    i108 = 8192;
   } else if ((i107 | 0) == 269) {
    i108 = 0;
   } else if ((i107 | 0) == 527) {
    i108 = 4096;
   } else {
    i108 = 0;
   }
   i107 = i97 + 4 | 0;
   HEAP32[i107 >> 2] = HEAP32[i107 >> 2] & -12289 | i108;
   STACKTOP = i4;
   return;
  }
 case 385:
  {
   if (i100) {
    i108 = i97 + 4 | 0;
    HEAP32[i108 >> 2] = HEAP32[i108 >> 2] & -49153 | HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] & 49152;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i108 = i97 + 4 | 0;
    HEAP32[i108 >> 2] = HEAP32[i108 >> 2] & -49153 | 32768;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i108 = HEAP32[i92 + 8 >> 2] | 0;
   if ((i108 | 0) == 733) {
    i109 = 32768;
   } else if ((i108 | 0) == 269) {
    i109 = 0;
   } else if ((i108 | 0) == 527) {
    i109 = 16384;
   } else {
    i109 = 0;
   }
   i108 = i97 + 4 | 0;
   HEAP32[i108 >> 2] = HEAP32[i108 >> 2] & -49153 | i109;
   STACKTOP = i4;
   return;
  }
 case 387:
  {
   if (i100) {
    i109 = i97 + 4 | 0;
    HEAP32[i109 >> 2] = HEAP32[i109 >> 2] & -4 | HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] & 3;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i109 = i97 + 4 | 0;
    HEAP32[i109 >> 2] = HEAP32[i109 >> 2] & -4;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i109 = HEAP32[i92 + 8 >> 2] | 0;
   if ((i109 | 0) == 565) {
    i110 = 2;
   } else if ((i109 | 0) == 269) {
    i110 = 0;
   } else if ((i109 | 0) == 522) {
    i110 = 1;
   } else {
    i110 = 0;
   }
   i109 = i97 + 4 | 0;
   HEAP32[i109 >> 2] = HEAP32[i109 >> 2] & -4 | i110;
   STACKTOP = i4;
   return;
  }
 case 375:
  {
   if (i100) {
    i110 = i97 + 4 | 0;
    HEAP32[i110 >> 2] = HEAP32[i110 >> 2] & -17 | HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] & 16;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i110 = i97 + 4 | 0;
    HEAP32[i110 >> 2] = HEAP32[i110 >> 2] & -17;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i110 = i97 + 4 | 0;
   HEAP32[i110 >> 2] = ((HEAP32[i92 + 8 >> 2] | 0) == 569) << 4 | HEAP32[i110 >> 2] & -17;
   STACKTOP = i4;
   return;
  }
 case 390:
  {
   if (i100) {
    i110 = i97 + 4 | 0;
    HEAP32[i110 >> 2] = HEAP32[i110 >> 2] & -33 | HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] & 32;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i110 = i97 + 4 | 0;
    HEAP32[i110 >> 2] = HEAP32[i110 >> 2] & -33;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i110 = i97 + 4 | 0;
   HEAP32[i110 >> 2] = ((HEAP32[i92 + 8 >> 2] | 0) == 569) << 5 | HEAP32[i110 >> 2] & -33;
   STACKTOP = i4;
   return;
  }
 case 401:
  {
   if (i100) {
    i110 = i97 + 4 | 0;
    HEAP32[i110 >> 2] = HEAP32[i110 >> 2] & -769 | HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] & 768;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i110 = i97 + 4 | 0;
    HEAP32[i110 >> 2] = HEAP32[i110 >> 2] & -769;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i110 = HEAP32[i92 + 8 >> 2] | 0;
   if ((i110 | 0) == 482) {
    i111 = 256;
   } else if ((i110 | 0) == 737) {
    i111 = 512;
   } else {
    i111 = 0;
   }
   i110 = i97 + 4 | 0;
   HEAP32[i110 >> 2] = HEAP32[i110 >> 2] & -769 | i111;
   STACKTOP = i4;
   return;
  }
 case 396:
  {
   if (i100) {
    i111 = i97 + 4 | 0;
    HEAP32[i111 >> 2] = HEAP32[i111 >> 2] & -13 | HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] & 12;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i111 = i97 + 4 | 0;
    HEAP32[i111 >> 2] = HEAP32[i111 >> 2] & -13;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i111 = HEAP32[i92 + 8 >> 2] | 0;
   if ((i111 | 0) == 522) {
    i112 = 4;
   } else if ((i111 | 0) == 734) {
    i112 = 8;
   } else if ((i111 | 0) == 524) {
    i112 = 12;
   } else {
    i112 = 0;
   }
   i111 = i97 + 4 | 0;
   HEAP32[i111 >> 2] = HEAP32[i111 >> 2] & -13 | i112;
   STACKTOP = i4;
   return;
  }
 case 388:
  {
   if (i100) {
    i112 = HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 12 >> 2] | 0;
    __ZN7WebCore14SVGRenderStyle12setFillPaintENS_8SVGPaint12SVGPaintTypeERKNS_5ColorERKN3WTF6StringEbb(i97, HEAP32[i112 + 8 >> 2] | 0, i112 + 12 | 0, i112 + 20 | 0, (HEAP8[i1 + 341 | 0] & 1) != 0, (HEAP8[i1 + 342 | 0] & 1) != 0);
    STACKTOP = i4;
    return;
   }
   if (i101) {
    HEAP32[i39 >> 2] = -16777216;
    HEAP8[i39 + 4 | 0] = 1;
    i112 = i40 | 0;
    HEAP32[i112 >> 2] = 0;
    __ZN7WebCore14SVGRenderStyle12setFillPaintENS_8SVGPaint12SVGPaintTypeERKNS_5ColorERKN3WTF6StringEbb(i97, 1, i39, i40, (HEAP8[i1 + 341 | 0] & 1) != 0, (HEAP8[i1 + 342 | 0] & 1) != 0);
    i40 = HEAP32[i112 >> 2] | 0;
    if ((i40 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i112 = i40 | 0;
    i39 = (HEAP32[i112 >> 2] | 0) - 2 | 0;
    if ((i39 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i40);
     STACKTOP = i4;
     return;
    } else {
     HEAP32[i112 >> 2] = i39;
     STACKTOP = i4;
     return;
    }
   }
   if ((i91 | 0) != 212992) {
    STACKTOP = i4;
    return;
   }
   i39 = HEAP32[i3 + 20 >> 2] | 0;
   __ZNK7WebCore11RenderStyle5colorEv(i42, HEAP32[i94 >> 2] | 0);
   HEAP32[i41 >> 2] = 0;
   HEAP8[i41 + 4 | 0] = 0;
   if ((HEAP32[i3 + 16 >> 2] | 0) == 3) {
    i112 = i41;
    i40 = i42;
    HEAP32[i112 >> 2] = HEAP32[i40 >> 2];
    HEAP8[i112 + 4 | 0] = HEAP8[i40 + 4 | 0] | 0;
   } else {
    i40 = i41;
    i112 = i3 + 8 | 0;
    HEAP32[i40 >> 2] = HEAP32[i112 >> 2];
    HEAP8[i40 + 4 | 0] = HEAP8[i112 + 4 | 0] | 0;
   }
   i112 = i43 | 0;
   i40 = HEAP32[i3 + 24 >> 2] | 0;
   HEAP32[i112 >> 2] = i40;
   if ((i40 | 0) != 0) {
    i42 = i40 | 0;
    HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 2;
   }
   __ZN7WebCore14SVGRenderStyle12setFillPaintENS_8SVGPaint12SVGPaintTypeERKNS_5ColorERKN3WTF6StringEbb(i97, i39, i41, i43, (HEAP8[i1 + 341 | 0] & 1) != 0, (HEAP8[i1 + 342 | 0] & 1) != 0);
   i43 = HEAP32[i112 >> 2] | 0;
   if ((i43 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i112 = i43 | 0;
   i41 = (HEAP32[i112 >> 2] | 0) - 2 | 0;
   if ((i41 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i43);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i112 >> 2] = i41;
    STACKTOP = i4;
    return;
   }
   break;
  }
 case 397:
  {
   if (i100) {
    i41 = HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 16 >> 2] | 0;
    __ZN7WebCore14SVGRenderStyle14setStrokePaintENS_8SVGPaint12SVGPaintTypeERKNS_5ColorERKN3WTF6StringEbb(i97, HEAP32[i41 + 40 >> 2] | 0, i41 + 44 | 0, i41 + 52 | 0, (HEAP8[i1 + 341 | 0] & 1) != 0, (HEAP8[i1 + 342 | 0] & 1) != 0);
    STACKTOP = i4;
    return;
   }
   if (i101) {
    HEAP32[i44 >> 2] = 0;
    HEAP8[i44 + 4 | 0] = 0;
    i41 = i45 | 0;
    HEAP32[i41 >> 2] = 0;
    __ZN7WebCore14SVGRenderStyle14setStrokePaintENS_8SVGPaint12SVGPaintTypeERKNS_5ColorERKN3WTF6StringEbb(i97, 101, i44, i45, (HEAP8[i1 + 341 | 0] & 1) != 0, (HEAP8[i1 + 342 | 0] & 1) != 0);
    i45 = HEAP32[i41 >> 2] | 0;
    if ((i45 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i41 = i45 | 0;
    i44 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
    if ((i44 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i45);
     STACKTOP = i4;
     return;
    } else {
     HEAP32[i41 >> 2] = i44;
     STACKTOP = i4;
     return;
    }
   }
   if ((i91 | 0) != 212992) {
    STACKTOP = i4;
    return;
   }
   i91 = HEAP32[i3 + 20 >> 2] | 0;
   __ZNK7WebCore11RenderStyle5colorEv(i47, HEAP32[i94 >> 2] | 0);
   HEAP32[i46 >> 2] = 0;
   HEAP8[i46 + 4 | 0] = 0;
   if ((HEAP32[i3 + 16 >> 2] | 0) == 3) {
    i44 = i46;
    i41 = i47;
    HEAP32[i44 >> 2] = HEAP32[i41 >> 2];
    HEAP8[i44 + 4 | 0] = HEAP8[i41 + 4 | 0] | 0;
   } else {
    i41 = i46;
    i44 = i3 + 8 | 0;
    HEAP32[i41 >> 2] = HEAP32[i44 >> 2];
    HEAP8[i41 + 4 | 0] = HEAP8[i44 + 4 | 0] | 0;
   }
   i44 = i48 | 0;
   i41 = HEAP32[i3 + 24 >> 2] | 0;
   HEAP32[i44 >> 2] = i41;
   if ((i41 | 0) != 0) {
    i47 = i41 | 0;
    HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 2;
   }
   __ZN7WebCore14SVGRenderStyle14setStrokePaintENS_8SVGPaint12SVGPaintTypeERKNS_5ColorERKN3WTF6StringEbb(i97, i91, i46, i48, (HEAP8[i1 + 341 | 0] & 1) != 0, (HEAP8[i1 + 342 | 0] & 1) != 0);
   i48 = HEAP32[i44 >> 2] | 0;
   if ((i48 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i44 = i48 | 0;
   i46 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
   if ((i46 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i48);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i44 >> 2] = i46;
    STACKTOP = i4;
    return;
   }
   break;
  }
 case 404:
  {
   if (i100) {
    __ZN7WebCore9SVGLengthC1ERKS0_(i50, (HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 16 >> 2] | 0) + 12 | 0);
    i46 = i97 + 16 | 0;
    if (__ZNK7WebCore9SVGLengtheqERKS0_((HEAP32[i46 >> 2] | 0) + 12 | 0, i50) | 0) {
     STACKTOP = i4;
     return;
    }
    i50 = (__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i46) | 0) + 12 | 0;
    i46 = HEAP32[i49 + 4 >> 2] | 0;
    HEAP32[i50 >> 2] = HEAP32[i49 >> 2];
    HEAP32[i50 + 4 >> 2] = i46;
    STACKTOP = i4;
    return;
   }
   if (!i101) {
    if ((i92 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore9SVGLength21fromCSSPrimitiveValueEPNS_17CSSPrimitiveValueE(i54, i92);
    i46 = i97 + 16 | 0;
    if (__ZNK7WebCore9SVGLengtheqERKS0_((HEAP32[i46 >> 2] | 0) + 12 | 0, i54) | 0) {
     STACKTOP = i4;
     return;
    }
    i54 = (__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i46) | 0) + 12 | 0;
    i46 = HEAP32[i53 + 4 >> 2] | 0;
    HEAP32[i54 >> 2] = HEAP32[i53 >> 2];
    HEAP32[i54 + 4 >> 2] = i46;
    STACKTOP = i4;
    return;
   }
   i46 = i10 | 0;
   HEAP32[i46 >> 2] = 0;
   __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i52, 2, i10);
   i10 = HEAP32[i46 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i46 = i10 | 0;
     i54 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
     if ((i54 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i46 >> 2] = i54;
      break;
     }
    }
   } while (0);
   i10 = i11 | 0;
   HEAP32[i10 >> 2] = 0;
   __ZN7WebCore9SVGLength22newValueSpecifiedUnitsEtfRi(i52, 1, +1, i10);
   i10 = i97 + 16 | 0;
   if (__ZNK7WebCore9SVGLengtheqERKS0_((HEAP32[i10 >> 2] | 0) + 12 | 0, i52) | 0) {
    STACKTOP = i4;
    return;
   }
   i52 = (__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i10) | 0) + 12 | 0;
   i10 = HEAP32[i51 + 4 >> 2] | 0;
   HEAP32[i52 >> 2] = HEAP32[i51 >> 2];
   HEAP32[i52 + 4 >> 2] = i10;
   STACKTOP = i4;
   return;
  }
 case 398:
  {
   if (i100) {
    i10 = HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 16 >> 2] | 0;
    i52 = HEAP32[i10 + 32 >> 2] | 0;
    i51 = i10 + 36 | 0;
    i11 = HEAP32[i51 >> 2] | 0;
    i54 = i55 | 0;
    HEAP32[i54 >> 2] = 0;
    i46 = i55 + 4 | 0;
    HEAP32[i46 >> 2] = 0;
    i53 = i55 + 8 | 0;
    HEAP32[i53 >> 2] = i11;
    do {
     if ((i52 | 0) != 0) {
      if (i52 >>> 0 > 536870911 >>> 0) {
       _WTFCrash();
      }
      i11 = __ZN3WTF18fastMallocGoodSizeEj(i52 << 3) | 0;
      HEAP32[i46 >> 2] = i11 >>> 3;
      i50 = __ZN3WTF10fastMallocEj(i11) | 0;
      i11 = i50;
      HEAP32[i54 >> 2] = i11;
      if ((i50 | 0) == 0) {
       break;
      }
      i50 = HEAP32[i10 + 28 >> 2] | 0;
      i49 = HEAP32[i51 >> 2] | 0;
      i44 = i50 + (i49 << 3) | 0;
      if ((i49 | 0) == 0) {
       break;
      } else {
       i113 = i50;
       i114 = i11;
      }
      while (1) {
       __ZN7WebCore9SVGLengthC1ERKS0_(i114, i113);
       i11 = i113 + 8 | 0;
       if ((i11 | 0) == (i44 | 0)) {
        break;
       } else {
        i113 = i11;
        i114 = i114 + 8 | 0;
       }
      }
     }
    } while (0);
    i114 = i97 + 16 | 0;
    i113 = HEAP32[i114 >> 2] | 0;
    i51 = HEAP32[i113 + 36 >> 2] | 0;
    L376 : do {
     if ((i51 | 0) == (HEAP32[i53 >> 2] | 0)) {
      i10 = HEAP32[i113 + 28 >> 2] | 0;
      i52 = HEAP32[i54 >> 2] | 0;
      i44 = 0;
      while (1) {
       if (i44 >>> 0 >= i51 >>> 0) {
        break L376;
       }
       if (__ZNK7WebCore9SVGLengtheqERKS0_(i10 + (i44 << 3) | 0, i52 + (i44 << 3) | 0) | 0) {
        i44 = i44 + 1 | 0;
       } else {
        i115 = 213;
        break;
       }
      }
     } else {
      i115 = 213;
     }
    } while (0);
    if ((i115 | 0) == 213) {
     __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEEaSERKS4_((__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i114) | 0) + 28 | 0, i55) | 0;
    }
    if ((HEAP32[i53 >> 2] | 0) != 0) {
     HEAP32[i53 >> 2] = 0;
    }
    i53 = HEAP32[i54 >> 2] | 0;
    if ((i53 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    HEAP32[i54 >> 2] = 0;
    HEAP32[i46 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i53);
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i53 = i56 | 0;
    HEAP32[i53 >> 2] = 0;
    i46 = i56 + 4 | 0;
    HEAP32[i46 >> 2] = 0;
    i54 = i56 + 8 | 0;
    HEAP32[i54 >> 2] = 0;
    i55 = i97 + 16 | 0;
    if ((HEAP32[(HEAP32[i55 >> 2] | 0) + 36 >> 2] | 0) != 0) {
     __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEEaSERKS4_((__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i55) | 0) + 28 | 0, i56) | 0;
    }
    if ((HEAP32[i54 >> 2] | 0) != 0) {
     HEAP32[i54 >> 2] = 0;
    }
    i54 = HEAP32[i53 >> 2] | 0;
    if ((i54 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    HEAP32[i53 >> 2] = 0;
    HEAP32[i46 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i54);
    STACKTOP = i4;
    return;
   }
   if ((i95 & 491520) >>> 0 <= 221184 >>> 0) {
    i54 = i57 | 0;
    HEAP32[i54 >> 2] = 0;
    i46 = i57 + 4 | 0;
    HEAP32[i46 >> 2] = 0;
    i53 = i57 + 8 | 0;
    HEAP32[i53 >> 2] = 0;
    i56 = i97 + 16 | 0;
    if ((HEAP32[(HEAP32[i56 >> 2] | 0) + 36 >> 2] | 0) != 0) {
     __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEEaSERKS4_((__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i56) | 0) + 28 | 0, i57) | 0;
    }
    if ((HEAP32[i53 >> 2] | 0) != 0) {
     HEAP32[i53 >> 2] = 0;
    }
    i53 = HEAP32[i54 >> 2] | 0;
    if ((i53 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    HEAP32[i54 >> 2] = 0;
    HEAP32[i46 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i53);
    STACKTOP = i4;
    return;
   }
   i53 = i58 | 0;
   HEAP32[i53 >> 2] = 0;
   i46 = i58 + 4 | 0;
   HEAP32[i46 >> 2] = 0;
   i54 = i58 + 8 | 0;
   HEAP32[i54 >> 2] = 0;
   i57 = i3 + 16 | 0;
   i56 = HEAP32[i57 >> 2] | 0;
   do {
    if ((i56 | 0) == 0) {
     i116 = 0;
    } else {
     i55 = i3 + 8 | 0;
     i114 = 0;
     i51 = i56;
     while (1) {
      if (i51 >>> 0 <= i114 >>> 0) {
       i115 = 235;
       break;
      }
      i113 = HEAP32[(HEAP32[i55 >> 2] | 0) + (i114 << 2) >> 2] | 0;
      do {
       if ((HEAP32[i113 + 4 >> 2] & 516096 | 0) == 0) {
        __ZN7WebCore9SVGLength21fromCSSPrimitiveValueEPNS_17CSSPrimitiveValueE(i59, i113);
        i44 = HEAP32[i54 >> 2] | 0;
        if ((i44 | 0) == (HEAP32[i46 >> 2] | 0)) {
         __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i58, i59);
         break;
        } else {
         __ZN7WebCore9SVGLengthC1ERKS0_((HEAP32[i53 >> 2] | 0) + (i44 << 3) | 0, i59);
         HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
         break;
        }
       }
      } while (0);
      i113 = i114 + 1 | 0;
      if (i113 >>> 0 >= i56 >>> 0) {
       i115 = 242;
       break;
      }
      i114 = i113;
      i51 = HEAP32[i57 >> 2] | 0;
     }
     if ((i115 | 0) == 235) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i115 | 0) == 242) {
      i116 = HEAP32[i54 >> 2] | 0;
      break;
     }
    }
   } while (0);
   i57 = i97 + 16 | 0;
   i56 = HEAP32[i57 >> 2] | 0;
   L434 : do {
    if ((HEAP32[i56 + 36 >> 2] | 0) == (i116 | 0)) {
     i59 = HEAP32[i56 + 28 >> 2] | 0;
     i51 = HEAP32[i53 >> 2] | 0;
     i114 = 0;
     while (1) {
      if (i114 >>> 0 >= i116 >>> 0) {
       break L434;
      }
      if (__ZNK7WebCore9SVGLengtheqERKS0_(i59 + (i114 << 3) | 0, i51 + (i114 << 3) | 0) | 0) {
       i114 = i114 + 1 | 0;
      } else {
       i115 = 247;
       break;
      }
     }
    } else {
     i115 = 247;
    }
   } while (0);
   if ((i115 | 0) == 247) {
    __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEEaSERKS4_((__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i57) | 0) + 28 | 0, i58) | 0;
   }
   if ((HEAP32[i54 >> 2] | 0) != 0) {
    HEAP32[i54 >> 2] = 0;
   }
   i54 = HEAP32[i53 >> 2] | 0;
   if ((i54 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   HEAP32[i53 >> 2] = 0;
   HEAP32[i46 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i54);
   STACKTOP = i4;
   return;
  }
 case 399:
  {
   if (i100) {
    __ZN7WebCore9SVGLengthC1ERKS0_(i61, (HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 16 >> 2] | 0) + 20 | 0);
    i54 = i97 + 16 | 0;
    if (__ZNK7WebCore9SVGLengtheqERKS0_((HEAP32[i54 >> 2] | 0) + 20 | 0, i61) | 0) {
     STACKTOP = i4;
     return;
    }
    i61 = (__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i54) | 0) + 20 | 0;
    i54 = HEAP32[i60 + 4 >> 2] | 0;
    HEAP32[i61 >> 2] = HEAP32[i60 >> 2];
    HEAP32[i61 + 4 >> 2] = i54;
    STACKTOP = i4;
    return;
   }
   if (!i101) {
    if ((i92 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore9SVGLength21fromCSSPrimitiveValueEPNS_17CSSPrimitiveValueE(i65, i92);
    i54 = i97 + 16 | 0;
    if (__ZNK7WebCore9SVGLengtheqERKS0_((HEAP32[i54 >> 2] | 0) + 20 | 0, i65) | 0) {
     STACKTOP = i4;
     return;
    }
    i65 = (__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i54) | 0) + 20 | 0;
    i54 = HEAP32[i64 + 4 >> 2] | 0;
    HEAP32[i65 >> 2] = HEAP32[i64 >> 2];
    HEAP32[i65 + 4 >> 2] = i54;
    STACKTOP = i4;
    return;
   }
   i54 = i8 | 0;
   HEAP32[i54 >> 2] = 0;
   __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i63, 2, i8);
   i8 = HEAP32[i54 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i54 = i8 | 0;
     i65 = (HEAP32[i54 >> 2] | 0) - 2 | 0;
     if ((i65 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i54 >> 2] = i65;
      break;
     }
    }
   } while (0);
   i8 = i9 | 0;
   HEAP32[i8 >> 2] = 0;
   __ZN7WebCore9SVGLength22newValueSpecifiedUnitsEtfRi(i63, 1, +0, i8);
   i8 = i97 + 16 | 0;
   if (__ZNK7WebCore9SVGLengtheqERKS0_((HEAP32[i8 >> 2] | 0) + 20 | 0, i63) | 0) {
    STACKTOP = i4;
    return;
   }
   i63 = (__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i8) | 0) + 20 | 0;
   i8 = HEAP32[i62 + 4 >> 2] | 0;
   HEAP32[i63 >> 2] = HEAP32[i62 >> 2];
   HEAP32[i63 + 4 >> 2] = i8;
   STACKTOP = i4;
   return;
  }
 case 389:
  {
   if (i100) {
    d117 = +HEAPF32[(HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 12 >> 2] | 0) + 4 >> 2];
    i8 = i97 + 12 | 0;
    if (+HEAPF32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] == d117) {
     STACKTOP = i4;
     return;
    }
    HEAPF32[(__ZN7WebCore7DataRefINS_13StyleFillDataEE6accessEv(i8) | 0) + 4 >> 2] = d117;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i8 = i97 + 12 | 0;
    if (+HEAPF32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] == +1) {
     STACKTOP = i4;
     return;
    }
    HEAPF32[(__ZN7WebCore7DataRefINS_13StyleFillDataEE6accessEv(i8) | 0) + 4 >> 2] = +1;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i8 = __ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i92) | 0;
   do {
    if ((i8 << 16 >> 16 | 0) == 2) {
     d117 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i92);
     do {
      if (d117 < 3.4028234663852886e+38) {
       if (d117 <= -3.4028234663852886e+38) {
        d118 = -3.4028234663852886e+38;
        break;
       }
       d118 = d117;
      } else {
       d118 = 3.4028234663852886e+38;
      }
     } while (0);
     d119 = d118 / +100;
    } else if ((i8 << 16 >> 16 | 0) == 1) {
     d117 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i92);
     if (d117 >= 3.4028234663852886e+38) {
      d119 = 3.4028234663852886e+38;
      break;
     }
     if (d117 <= -3.4028234663852886e+38) {
      d119 = -3.4028234663852886e+38;
      break;
     }
     d119 = d117;
    } else {
     STACKTOP = i4;
     return;
    }
   } while (0);
   i8 = i97 + 12 | 0;
   if (+HEAPF32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] == d119) {
    STACKTOP = i4;
    return;
   }
   HEAPF32[(__ZN7WebCore7DataRefINS_13StyleFillDataEE6accessEv(i8) | 0) + 4 >> 2] = d119;
   STACKTOP = i4;
   return;
  }
 case 403:
  {
   if (i100) {
    d119 = +HEAPF32[(HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 16 >> 2] | 0) + 4 >> 2];
    i8 = i97 + 16 | 0;
    if (+HEAPF32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] == d119) {
     STACKTOP = i4;
     return;
    }
    HEAPF32[(__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i8) | 0) + 4 >> 2] = d119;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i8 = i97 + 16 | 0;
    if (+HEAPF32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] == +1) {
     STACKTOP = i4;
     return;
    }
    HEAPF32[(__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i8) | 0) + 4 >> 2] = +1;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i8 = __ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i92) | 0;
   do {
    if ((i8 << 16 >> 16 | 0) == 2) {
     d119 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i92);
     do {
      if (d119 < 3.4028234663852886e+38) {
       if (d119 <= -3.4028234663852886e+38) {
        d120 = -3.4028234663852886e+38;
        break;
       }
       d120 = d119;
      } else {
       d120 = 3.4028234663852886e+38;
      }
     } while (0);
     d121 = d120 / +100;
    } else if ((i8 << 16 >> 16 | 0) == 1) {
     d119 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i92);
     if (d119 >= 3.4028234663852886e+38) {
      d121 = 3.4028234663852886e+38;
      break;
     }
     if (d119 <= -3.4028234663852886e+38) {
      d121 = -3.4028234663852886e+38;
      break;
     }
     d121 = d119;
    } else {
     STACKTOP = i4;
     return;
    }
   } while (0);
   i8 = i97 + 16 | 0;
   if (+HEAPF32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] == d121) {
    STACKTOP = i4;
    return;
   }
   HEAPF32[(__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i8) | 0) + 4 >> 2] = d121;
   STACKTOP = i4;
   return;
  }
 case 383:
  {
   if (i100) {
    d121 = +HEAPF32[(HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 28 >> 2] | 0) + 4 >> 2];
    i8 = i97 + 28 | 0;
    i63 = HEAP32[i8 >> 2] | 0;
    if (+HEAPF32[i63 + 4 >> 2] == d121) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i63 >> 2] | 0) == 1) {
     i122 = i63;
    } else {
     __ZNK7WebCore13StyleStopData4copyEv(i7, i63);
     i63 = HEAP32[i7 >> 2] | 0;
     i7 = HEAP32[i8 >> 2] | 0;
     i62 = i7 | 0;
     i9 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i7);
     } else {
      HEAP32[i62 >> 2] = i9;
     }
     HEAP32[i8 >> 2] = i63;
     i122 = i63;
    }
    HEAPF32[i122 + 4 >> 2] = d121;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i122 = i97 + 28 | 0;
    i63 = HEAP32[i122 >> 2] | 0;
    if (+HEAPF32[i63 + 4 >> 2] == +1) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i63 >> 2] | 0) == 1) {
     i123 = i63;
    } else {
     __ZNK7WebCore13StyleStopData4copyEv(i6, i63);
     i63 = HEAP32[i6 >> 2] | 0;
     i6 = HEAP32[i122 >> 2] | 0;
     i8 = i6 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i6);
     } else {
      HEAP32[i8 >> 2] = i9;
     }
     HEAP32[i122 >> 2] = i63;
     i123 = i63;
    }
    HEAPF32[i123 + 4 >> 2] = +1;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i123 = __ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i92) | 0;
   do {
    if ((i123 << 16 >> 16 | 0) == 2) {
     d121 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i92);
     do {
      if (d121 < 3.4028234663852886e+38) {
       if (d121 <= -3.4028234663852886e+38) {
        d124 = -3.4028234663852886e+38;
        break;
       }
       d124 = d121;
      } else {
       d124 = 3.4028234663852886e+38;
      }
     } while (0);
     d125 = d124 / +100;
    } else if ((i123 << 16 >> 16 | 0) == 1) {
     d121 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i92);
     if (d121 >= 3.4028234663852886e+38) {
      d125 = 3.4028234663852886e+38;
      break;
     }
     if (d121 <= -3.4028234663852886e+38) {
      d125 = -3.4028234663852886e+38;
      break;
     }
     d125 = d121;
    } else {
     STACKTOP = i4;
     return;
    }
   } while (0);
   i123 = i97 + 28 | 0;
   i63 = HEAP32[i123 >> 2] | 0;
   if (+HEAPF32[i63 + 4 >> 2] == d125) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i63 >> 2] | 0) == 1) {
    i126 = i63;
   } else {
    __ZNK7WebCore13StyleStopData4copyEv(i5, i63);
    i63 = HEAP32[i5 >> 2] | 0;
    i5 = HEAP32[i123 >> 2] | 0;
    i122 = i5 | 0;
    i9 = (HEAP32[i122 >> 2] | 0) - 1 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF8fastFreeEPv(i5);
    } else {
     HEAP32[i122 >> 2] = i9;
    }
    HEAP32[i123 >> 2] = i63;
    i126 = i63;
   }
   HEAPF32[i126 + 4 >> 2] = d125;
   STACKTOP = i4;
   return;
  }
 case 394:
  {
   if (i100) {
    i126 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 4 >> 2] | 0;
    i63 = (i126 | 0) == 0;
    if (!i63) {
     i123 = i126 | 0;
     HEAP32[i123 >> 2] = (HEAP32[i123 >> 2] | 0) + 2;
    }
    i123 = i97 + 24 | 0;
    do {
     if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i123 >> 2] | 0) + 4 >> 2] | 0, i126) | 0)) {
      i9 = __ZN7WebCore7DataRefINS_26StyleInheritedResourceDataEE6accessEv(i123) | 0;
      if (!i63) {
       i122 = i126 | 0;
       HEAP32[i122 >> 2] = (HEAP32[i122 >> 2] | 0) + 2;
      }
      i122 = i9 + 4 | 0;
      i9 = HEAP32[i122 >> 2] | 0;
      HEAP32[i122 >> 2] = i126;
      if ((i9 | 0) == 0) {
       break;
      }
      i122 = i9 | 0;
      i5 = (HEAP32[i122 >> 2] | 0) - 2 | 0;
      if ((i5 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i9);
       break;
      } else {
       HEAP32[i122 >> 2] = i5;
       break;
      }
     }
    } while (0);
    if (i63) {
     STACKTOP = i4;
     return;
    }
    i63 = i126 | 0;
    i123 = (HEAP32[i63 >> 2] | 0) - 2 | 0;
    if ((i123 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i126);
     STACKTOP = i4;
     return;
    } else {
     HEAP32[i63 >> 2] = i123;
     STACKTOP = i4;
     return;
    }
   }
   if (i101) {
    i123 = i97 + 24 | 0;
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i123 >> 2] | 0) + 4 >> 2] | 0, 0) | 0) {
     STACKTOP = i4;
     return;
    }
    i63 = (__ZN7WebCore7DataRefINS_26StyleInheritedResourceDataEE6accessEv(i123) | 0) + 4 | 0;
    i123 = HEAP32[i63 >> 2] | 0;
    HEAP32[i63 >> 2] = 0;
    if ((i123 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i63 = i123 | 0;
    i126 = (HEAP32[i63 >> 2] | 0) - 2 | 0;
    if ((i126 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i123);
     STACKTOP = i4;
     return;
    } else {
     HEAP32[i63 >> 2] = i126;
     STACKTOP = i4;
     return;
    }
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i126 = i66 | 0;
   HEAP32[i126 >> 2] = 0;
   do {
    if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i92) | 0) << 16 >> 16 == 20) {
     __ZNK7WebCore17CSSPrimitiveValue14getStringValueEv(i67, i92);
     i63 = i67 | 0;
     i123 = HEAP32[i63 >> 2] | 0;
     HEAP32[i63 >> 2] = 0;
     i5 = HEAP32[i126 >> 2] | 0;
     HEAP32[i126 >> 2] = i123;
     do {
      if ((i5 | 0) != 0) {
       i123 = i5 | 0;
       i122 = (HEAP32[i123 >> 2] | 0) - 2 | 0;
       if ((i122 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i5);
        break;
       } else {
        HEAP32[i123 >> 2] = i122;
        break;
       }
      }
     } while (0);
     i5 = HEAP32[i63 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     i122 = i5 | 0;
     i123 = (HEAP32[i122 >> 2] | 0) - 2 | 0;
     if ((i123 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i122 >> 2] = i123;
      break;
     }
    }
   } while (0);
   __ZN7WebCore15SVGURIReference31fragmentIdentifierFromIRIStringERKN3WTF6StringERNS_8DocumentE(i68, i66, HEAP32[(HEAP32[(HEAP32[i93 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0);
   i66 = i97 + 24 | 0;
   i67 = i68 | 0;
   do {
    if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i66 >> 2] | 0) + 4 >> 2] | 0, HEAP32[i67 >> 2] | 0) | 0)) {
     i68 = __ZN7WebCore7DataRefINS_26StyleInheritedResourceDataEE6accessEv(i66) | 0;
     i123 = HEAP32[i67 >> 2] | 0;
     if ((i123 | 0) != 0) {
      i122 = i123 | 0;
      HEAP32[i122 >> 2] = (HEAP32[i122 >> 2] | 0) + 2;
     }
     i122 = i68 + 4 | 0;
     i68 = HEAP32[i122 >> 2] | 0;
     HEAP32[i122 >> 2] = i123;
     if ((i68 | 0) == 0) {
      break;
     }
     i123 = i68 | 0;
     i122 = (HEAP32[i123 >> 2] | 0) - 2 | 0;
     if ((i122 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i68);
      break;
     } else {
      HEAP32[i123 >> 2] = i122;
      break;
     }
    }
   } while (0);
   i66 = HEAP32[i67 >> 2] | 0;
   do {
    if ((i66 | 0) != 0) {
     i67 = i66 | 0;
     i122 = (HEAP32[i67 >> 2] | 0) - 2 | 0;
     if ((i122 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i66);
      break;
     } else {
      HEAP32[i67 >> 2] = i122;
      break;
     }
    }
   } while (0);
   i66 = HEAP32[i126 >> 2] | 0;
   if ((i66 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i126 = i66 | 0;
   i122 = (HEAP32[i126 >> 2] | 0) - 2 | 0;
   if ((i122 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i66);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i126 >> 2] = i122;
    STACKTOP = i4;
    return;
   }
   break;
  }
 case 393:
  {
   if (i100) {
    i122 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 8 >> 2] | 0;
    i126 = (i122 | 0) == 0;
    if (!i126) {
     i66 = i122 | 0;
     HEAP32[i66 >> 2] = (HEAP32[i66 >> 2] | 0) + 2;
    }
    i66 = i97 + 24 | 0;
    do {
     if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i66 >> 2] | 0) + 8 >> 2] | 0, i122) | 0)) {
      i67 = __ZN7WebCore7DataRefINS_26StyleInheritedResourceDataEE6accessEv(i66) | 0;
      if (!i126) {
       i123 = i122 | 0;
       HEAP32[i123 >> 2] = (HEAP32[i123 >> 2] | 0) + 2;
      }
      i123 = i67 + 8 | 0;
      i67 = HEAP32[i123 >> 2] | 0;
      HEAP32[i123 >> 2] = i122;
      if ((i67 | 0) == 0) {
       break;
      }
      i123 = i67 | 0;
      i68 = (HEAP32[i123 >> 2] | 0) - 2 | 0;
      if ((i68 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i67);
       break;
      } else {
       HEAP32[i123 >> 2] = i68;
       break;
      }
     }
    } while (0);
    if (i126) {
     STACKTOP = i4;
     return;
    }
    i126 = i122 | 0;
    i66 = (HEAP32[i126 >> 2] | 0) - 2 | 0;
    if ((i66 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i122);
     STACKTOP = i4;
     return;
    } else {
     HEAP32[i126 >> 2] = i66;
     STACKTOP = i4;
     return;
    }
   }
   if (i101) {
    i66 = i97 + 24 | 0;
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i66 >> 2] | 0) + 8 >> 2] | 0, 0) | 0) {
     STACKTOP = i4;
     return;
    }
    i126 = (__ZN7WebCore7DataRefINS_26StyleInheritedResourceDataEE6accessEv(i66) | 0) + 8 | 0;
    i66 = HEAP32[i126 >> 2] | 0;
    HEAP32[i126 >> 2] = 0;
    if ((i66 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i126 = i66 | 0;
    i122 = (HEAP32[i126 >> 2] | 0) - 2 | 0;
    if ((i122 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i66);
     STACKTOP = i4;
     return;
    } else {
     HEAP32[i126 >> 2] = i122;
     STACKTOP = i4;
     return;
    }
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i122 = i69 | 0;
   HEAP32[i122 >> 2] = 0;
   do {
    if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i92) | 0) << 16 >> 16 == 20) {
     __ZNK7WebCore17CSSPrimitiveValue14getStringValueEv(i70, i92);
     i126 = i70 | 0;
     i66 = HEAP32[i126 >> 2] | 0;
     HEAP32[i126 >> 2] = 0;
     i68 = HEAP32[i122 >> 2] | 0;
     HEAP32[i122 >> 2] = i66;
     do {
      if ((i68 | 0) != 0) {
       i66 = i68 | 0;
       i123 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
       if ((i123 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i68);
        break;
       } else {
        HEAP32[i66 >> 2] = i123;
        break;
       }
      }
     } while (0);
     i68 = HEAP32[i126 >> 2] | 0;
     if ((i68 | 0) == 0) {
      break;
     }
     i63 = i68 | 0;
     i123 = (HEAP32[i63 >> 2] | 0) - 2 | 0;
     if ((i123 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i68);
      break;
     } else {
      HEAP32[i63 >> 2] = i123;
      break;
     }
    }
   } while (0);
   __ZN7WebCore15SVGURIReference31fragmentIdentifierFromIRIStringERKN3WTF6StringERNS_8DocumentE(i71, i69, HEAP32[(HEAP32[(HEAP32[i93 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0);
   i69 = i97 + 24 | 0;
   i70 = i71 | 0;
   do {
    if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i69 >> 2] | 0) + 8 >> 2] | 0, HEAP32[i70 >> 2] | 0) | 0)) {
     i71 = __ZN7WebCore7DataRefINS_26StyleInheritedResourceDataEE6accessEv(i69) | 0;
     i123 = HEAP32[i70 >> 2] | 0;
     if ((i123 | 0) != 0) {
      i63 = i123 | 0;
      HEAP32[i63 >> 2] = (HEAP32[i63 >> 2] | 0) + 2;
     }
     i63 = i71 + 8 | 0;
     i71 = HEAP32[i63 >> 2] | 0;
     HEAP32[i63 >> 2] = i123;
     if ((i71 | 0) == 0) {
      break;
     }
     i123 = i71 | 0;
     i63 = (HEAP32[i123 >> 2] | 0) - 2 | 0;
     if ((i63 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i71);
      break;
     } else {
      HEAP32[i123 >> 2] = i63;
      break;
     }
    }
   } while (0);
   i69 = HEAP32[i70 >> 2] | 0;
   do {
    if ((i69 | 0) != 0) {
     i70 = i69 | 0;
     i63 = (HEAP32[i70 >> 2] | 0) - 2 | 0;
     if ((i63 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i69);
      break;
     } else {
      HEAP32[i70 >> 2] = i63;
      break;
     }
    }
   } while (0);
   i69 = HEAP32[i122 >> 2] | 0;
   if ((i69 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i122 = i69 | 0;
   i63 = (HEAP32[i122 >> 2] | 0) - 2 | 0;
   if ((i63 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i69);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i122 >> 2] = i63;
    STACKTOP = i4;
    return;
   }
   break;
  }
 case 392:
  {
   if (i100) {
    i63 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 12 >> 2] | 0;
    i122 = (i63 | 0) == 0;
    if (!i122) {
     i69 = i63 | 0;
     HEAP32[i69 >> 2] = (HEAP32[i69 >> 2] | 0) + 2;
    }
    i69 = i97 + 24 | 0;
    do {
     if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i69 >> 2] | 0) + 12 >> 2] | 0, i63) | 0)) {
      i70 = __ZN7WebCore7DataRefINS_26StyleInheritedResourceDataEE6accessEv(i69) | 0;
      if (!i122) {
       i123 = i63 | 0;
       HEAP32[i123 >> 2] = (HEAP32[i123 >> 2] | 0) + 2;
      }
      i123 = i70 + 12 | 0;
      i70 = HEAP32[i123 >> 2] | 0;
      HEAP32[i123 >> 2] = i63;
      if ((i70 | 0) == 0) {
       break;
      }
      i123 = i70 | 0;
      i71 = (HEAP32[i123 >> 2] | 0) - 2 | 0;
      if ((i71 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i70);
       break;
      } else {
       HEAP32[i123 >> 2] = i71;
       break;
      }
     }
    } while (0);
    if (i122) {
     STACKTOP = i4;
     return;
    }
    i122 = i63 | 0;
    i69 = (HEAP32[i122 >> 2] | 0) - 2 | 0;
    if ((i69 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i63);
     STACKTOP = i4;
     return;
    } else {
     HEAP32[i122 >> 2] = i69;
     STACKTOP = i4;
     return;
    }
   }
   if (i101) {
    i69 = i97 + 24 | 0;
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i69 >> 2] | 0) + 12 >> 2] | 0, 0) | 0) {
     STACKTOP = i4;
     return;
    }
    i122 = (__ZN7WebCore7DataRefINS_26StyleInheritedResourceDataEE6accessEv(i69) | 0) + 12 | 0;
    i69 = HEAP32[i122 >> 2] | 0;
    HEAP32[i122 >> 2] = 0;
    if ((i69 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i122 = i69 | 0;
    i63 = (HEAP32[i122 >> 2] | 0) - 2 | 0;
    if ((i63 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i69);
     STACKTOP = i4;
     return;
    } else {
     HEAP32[i122 >> 2] = i63;
     STACKTOP = i4;
     return;
    }
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i63 = i72 | 0;
   HEAP32[i63 >> 2] = 0;
   do {
    if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i92) | 0) << 16 >> 16 == 20) {
     __ZNK7WebCore17CSSPrimitiveValue14getStringValueEv(i73, i92);
     i122 = i73 | 0;
     i69 = HEAP32[i122 >> 2] | 0;
     HEAP32[i122 >> 2] = 0;
     i71 = HEAP32[i63 >> 2] | 0;
     HEAP32[i63 >> 2] = i69;
     do {
      if ((i71 | 0) != 0) {
       i69 = i71 | 0;
       i123 = (HEAP32[i69 >> 2] | 0) - 2 | 0;
       if ((i123 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i71);
        break;
       } else {
        HEAP32[i69 >> 2] = i123;
        break;
       }
      }
     } while (0);
     i71 = HEAP32[i122 >> 2] | 0;
     if ((i71 | 0) == 0) {
      break;
     }
     i126 = i71 | 0;
     i123 = (HEAP32[i126 >> 2] | 0) - 2 | 0;
     if ((i123 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i71);
      break;
     } else {
      HEAP32[i126 >> 2] = i123;
      break;
     }
    }
   } while (0);
   __ZN7WebCore15SVGURIReference31fragmentIdentifierFromIRIStringERKN3WTF6StringERNS_8DocumentE(i74, i72, HEAP32[(HEAP32[(HEAP32[i93 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0);
   i72 = i97 + 24 | 0;
   i73 = i74 | 0;
   do {
    if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i72 >> 2] | 0) + 12 >> 2] | 0, HEAP32[i73 >> 2] | 0) | 0)) {
     i74 = __ZN7WebCore7DataRefINS_26StyleInheritedResourceDataEE6accessEv(i72) | 0;
     i123 = HEAP32[i73 >> 2] | 0;
     if ((i123 | 0) != 0) {
      i126 = i123 | 0;
      HEAP32[i126 >> 2] = (HEAP32[i126 >> 2] | 0) + 2;
     }
     i126 = i74 + 12 | 0;
     i74 = HEAP32[i126 >> 2] | 0;
     HEAP32[i126 >> 2] = i123;
     if ((i74 | 0) == 0) {
      break;
     }
     i123 = i74 | 0;
     i126 = (HEAP32[i123 >> 2] | 0) - 2 | 0;
     if ((i126 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i74);
      break;
     } else {
      HEAP32[i123 >> 2] = i126;
      break;
     }
    }
   } while (0);
   i72 = HEAP32[i73 >> 2] | 0;
   do {
    if ((i72 | 0) != 0) {
     i73 = i72 | 0;
     i126 = (HEAP32[i73 >> 2] | 0) - 2 | 0;
     if ((i126 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i72);
      break;
     } else {
      HEAP32[i73 >> 2] = i126;
      break;
     }
    }
   } while (0);
   i72 = HEAP32[i63 >> 2] | 0;
   if ((i72 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i63 = i72 | 0;
   i126 = (HEAP32[i63 >> 2] | 0) - 2 | 0;
   if ((i126 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i72);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i63 >> 2] = i126;
    STACKTOP = i4;
    return;
   }
   break;
  }
 case 400:
  {
   if (i100) {
    i126 = i97 + 4 | 0;
    HEAP32[i126 >> 2] = HEAP32[i126 >> 2] & -193 | HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] & 192;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i126 = i97 + 4 | 0;
    HEAP32[i126 >> 2] = HEAP32[i126 >> 2] & -193;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i126 = HEAP32[i92 + 8 >> 2] | 0;
   if ((i126 | 0) == 482) {
    i127 = 64;
   } else if ((i126 | 0) == 169) {
    i127 = 128;
   } else {
    i127 = 0;
   }
   i126 = i97 + 4 | 0;
   HEAP32[i126 >> 2] = HEAP32[i126 >> 2] & -193 | i127;
   STACKTOP = i4;
   return;
  }
 case 402:
  {
   if (i100) {
    d125 = +HEAPF32[(HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 16 >> 2] | 0) + 8 >> 2];
    i127 = i97 + 16 | 0;
    if (+HEAPF32[(HEAP32[i127 >> 2] | 0) + 8 >> 2] == d125) {
     STACKTOP = i4;
     return;
    }
    HEAPF32[(__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i127) | 0) + 8 >> 2] = d125;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i127 = i97 + 16 | 0;
    if (+HEAPF32[(HEAP32[i127 >> 2] | 0) + 8 >> 2] == +4) {
     STACKTOP = i4;
     return;
    }
    HEAPF32[(__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i127) | 0) + 8 >> 2] = +4;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i92) | 0) << 16 >> 16 != 1) {
    STACKTOP = i4;
    return;
   }
   d125 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i92);
   do {
    if (d125 < 3.4028234663852886e+38) {
     if (d125 <= -3.4028234663852886e+38) {
      d128 = -3.4028234663852886e+38;
      break;
     }
     d128 = d125;
    } else {
     d128 = 3.4028234663852886e+38;
    }
   } while (0);
   i127 = i97 + 16 | 0;
   if (+HEAPF32[(HEAP32[i127 >> 2] | 0) + 8 >> 2] == d128) {
    STACKTOP = i4;
    return;
   }
   HEAPF32[(__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i127) | 0) + 8 >> 2] = d128;
   STACKTOP = i4;
   return;
  }
 case 378:
  {
   if (i100) {
    i127 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] | 0) + 8 >> 2] | 0;
    i126 = (i127 | 0) == 0;
    if (!i126) {
     i63 = i127 | 0;
     HEAP32[i63 >> 2] = (HEAP32[i63 >> 2] | 0) + 2;
    }
    i63 = i97 + 40 | 0;
    do {
     if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i63 >> 2] | 0) + 8 >> 2] | 0, i127) | 0)) {
      i72 = __ZN7WebCore7DataRefINS_17StyleResourceDataEE6accessEv(i63) | 0;
      if (!i126) {
       i73 = i127 | 0;
       HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 2;
      }
      i73 = i72 + 8 | 0;
      i72 = HEAP32[i73 >> 2] | 0;
      HEAP32[i73 >> 2] = i127;
      if ((i72 | 0) == 0) {
       break;
      }
      i73 = i72 | 0;
      i123 = (HEAP32[i73 >> 2] | 0) - 2 | 0;
      if ((i123 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i72);
       break;
      } else {
       HEAP32[i73 >> 2] = i123;
       break;
      }
     }
    } while (0);
    if (i126) {
     STACKTOP = i4;
     return;
    }
    i126 = i127 | 0;
    i63 = (HEAP32[i126 >> 2] | 0) - 2 | 0;
    if ((i63 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i127);
     STACKTOP = i4;
     return;
    } else {
     HEAP32[i126 >> 2] = i63;
     STACKTOP = i4;
     return;
    }
   }
   if (i101) {
    i63 = i97 + 40 | 0;
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i63 >> 2] | 0) + 8 >> 2] | 0, 0) | 0) {
     STACKTOP = i4;
     return;
    }
    i126 = (__ZN7WebCore7DataRefINS_17StyleResourceDataEE6accessEv(i63) | 0) + 8 | 0;
    i63 = HEAP32[i126 >> 2] | 0;
    HEAP32[i126 >> 2] = 0;
    if ((i63 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i126 = i63 | 0;
    i127 = (HEAP32[i126 >> 2] | 0) - 2 | 0;
    if ((i127 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i63);
     STACKTOP = i4;
     return;
    } else {
     HEAP32[i126 >> 2] = i127;
     STACKTOP = i4;
     return;
    }
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i127 = i75 | 0;
   HEAP32[i127 >> 2] = 0;
   do {
    if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i92) | 0) << 16 >> 16 == 20) {
     __ZNK7WebCore17CSSPrimitiveValue14getStringValueEv(i76, i92);
     i126 = i76 | 0;
     i63 = HEAP32[i126 >> 2] | 0;
     HEAP32[i126 >> 2] = 0;
     i123 = HEAP32[i127 >> 2] | 0;
     HEAP32[i127 >> 2] = i63;
     do {
      if ((i123 | 0) != 0) {
       i63 = i123 | 0;
       i73 = (HEAP32[i63 >> 2] | 0) - 2 | 0;
       if ((i73 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i123);
        break;
       } else {
        HEAP32[i63 >> 2] = i73;
        break;
       }
      }
     } while (0);
     i123 = HEAP32[i126 >> 2] | 0;
     if ((i123 | 0) == 0) {
      break;
     }
     i122 = i123 | 0;
     i73 = (HEAP32[i122 >> 2] | 0) - 2 | 0;
     if ((i73 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i123);
      break;
     } else {
      HEAP32[i122 >> 2] = i73;
      break;
     }
    }
   } while (0);
   __ZN7WebCore15SVGURIReference31fragmentIdentifierFromIRIStringERKN3WTF6StringERNS_8DocumentE(i77, i75, HEAP32[(HEAP32[(HEAP32[i93 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0);
   i75 = i97 + 40 | 0;
   i76 = i77 | 0;
   do {
    if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i75 >> 2] | 0) + 8 >> 2] | 0, HEAP32[i76 >> 2] | 0) | 0)) {
     i77 = __ZN7WebCore7DataRefINS_17StyleResourceDataEE6accessEv(i75) | 0;
     i73 = HEAP32[i76 >> 2] | 0;
     if ((i73 | 0) != 0) {
      i122 = i73 | 0;
      HEAP32[i122 >> 2] = (HEAP32[i122 >> 2] | 0) + 2;
     }
     i122 = i77 + 8 | 0;
     i77 = HEAP32[i122 >> 2] | 0;
     HEAP32[i122 >> 2] = i73;
     if ((i77 | 0) == 0) {
      break;
     }
     i73 = i77 | 0;
     i122 = (HEAP32[i73 >> 2] | 0) - 2 | 0;
     if ((i122 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i77);
      break;
     } else {
      HEAP32[i73 >> 2] = i122;
      break;
     }
    }
   } while (0);
   i75 = HEAP32[i76 >> 2] | 0;
   do {
    if ((i75 | 0) != 0) {
     i76 = i75 | 0;
     i122 = (HEAP32[i76 >> 2] | 0) - 2 | 0;
     if ((i122 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i75);
      break;
     } else {
      HEAP32[i76 >> 2] = i122;
      break;
     }
    }
   } while (0);
   i75 = HEAP32[i127 >> 2] | 0;
   if ((i75 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i127 = i75 | 0;
   i122 = (HEAP32[i127 >> 2] | 0) - 2 | 0;
   if ((i122 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i75);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i127 >> 2] = i122;
    STACKTOP = i4;
    return;
   }
   break;
  }
 case 376:
  {
   if (i100) {
    i122 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] | 0) + 12 >> 2] | 0;
    i127 = (i122 | 0) == 0;
    if (!i127) {
     i75 = i122 | 0;
     HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + 2;
    }
    i75 = i97 + 40 | 0;
    do {
     if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i75 >> 2] | 0) + 12 >> 2] | 0, i122) | 0)) {
      i76 = __ZN7WebCore7DataRefINS_17StyleResourceDataEE6accessEv(i75) | 0;
      if (!i127) {
       i73 = i122 | 0;
       HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 2;
      }
      i73 = i76 + 12 | 0;
      i76 = HEAP32[i73 >> 2] | 0;
      HEAP32[i73 >> 2] = i122;
      if ((i76 | 0) == 0) {
       break;
      }
      i73 = i76 | 0;
      i77 = (HEAP32[i73 >> 2] | 0) - 2 | 0;
      if ((i77 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i76);
       break;
      } else {
       HEAP32[i73 >> 2] = i77;
       break;
      }
     }
    } while (0);
    if (i127) {
     STACKTOP = i4;
     return;
    }
    i127 = i122 | 0;
    i75 = (HEAP32[i127 >> 2] | 0) - 2 | 0;
    if ((i75 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i122);
     STACKTOP = i4;
     return;
    } else {
     HEAP32[i127 >> 2] = i75;
     STACKTOP = i4;
     return;
    }
   }
   if (i101) {
    i75 = i97 + 40 | 0;
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i75 >> 2] | 0) + 12 >> 2] | 0, 0) | 0) {
     STACKTOP = i4;
     return;
    }
    i127 = (__ZN7WebCore7DataRefINS_17StyleResourceDataEE6accessEv(i75) | 0) + 12 | 0;
    i75 = HEAP32[i127 >> 2] | 0;
    HEAP32[i127 >> 2] = 0;
    if ((i75 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i127 = i75 | 0;
    i122 = (HEAP32[i127 >> 2] | 0) - 2 | 0;
    if ((i122 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i75);
     STACKTOP = i4;
     return;
    } else {
     HEAP32[i127 >> 2] = i122;
     STACKTOP = i4;
     return;
    }
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i122 = i78 | 0;
   HEAP32[i122 >> 2] = 0;
   do {
    if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i92) | 0) << 16 >> 16 == 20) {
     __ZNK7WebCore17CSSPrimitiveValue14getStringValueEv(i79, i92);
     i127 = i79 | 0;
     i75 = HEAP32[i127 >> 2] | 0;
     HEAP32[i127 >> 2] = 0;
     i77 = HEAP32[i122 >> 2] | 0;
     HEAP32[i122 >> 2] = i75;
     do {
      if ((i77 | 0) != 0) {
       i75 = i77 | 0;
       i73 = (HEAP32[i75 >> 2] | 0) - 2 | 0;
       if ((i73 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i77);
        break;
       } else {
        HEAP32[i75 >> 2] = i73;
        break;
       }
      }
     } while (0);
     i77 = HEAP32[i127 >> 2] | 0;
     if ((i77 | 0) == 0) {
      break;
     }
     i126 = i77 | 0;
     i73 = (HEAP32[i126 >> 2] | 0) - 2 | 0;
     if ((i73 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i77);
      break;
     } else {
      HEAP32[i126 >> 2] = i73;
      break;
     }
    }
   } while (0);
   __ZN7WebCore15SVGURIReference31fragmentIdentifierFromIRIStringERKN3WTF6StringERNS_8DocumentE(i80, i78, HEAP32[(HEAP32[(HEAP32[i93 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0);
   i78 = i97 + 40 | 0;
   i79 = i80 | 0;
   do {
    if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i78 >> 2] | 0) + 12 >> 2] | 0, HEAP32[i79 >> 2] | 0) | 0)) {
     i80 = __ZN7WebCore7DataRefINS_17StyleResourceDataEE6accessEv(i78) | 0;
     i73 = HEAP32[i79 >> 2] | 0;
     if ((i73 | 0) != 0) {
      i126 = i73 | 0;
      HEAP32[i126 >> 2] = (HEAP32[i126 >> 2] | 0) + 2;
     }
     i126 = i80 + 12 | 0;
     i80 = HEAP32[i126 >> 2] | 0;
     HEAP32[i126 >> 2] = i73;
     if ((i80 | 0) == 0) {
      break;
     }
     i73 = i80 | 0;
     i126 = (HEAP32[i73 >> 2] | 0) - 2 | 0;
     if ((i126 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i80);
      break;
     } else {
      HEAP32[i73 >> 2] = i126;
      break;
     }
    }
   } while (0);
   i78 = HEAP32[i79 >> 2] | 0;
   do {
    if ((i78 | 0) != 0) {
     i79 = i78 | 0;
     i126 = (HEAP32[i79 >> 2] | 0) - 2 | 0;
     if ((i126 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i78);
      break;
     } else {
      HEAP32[i79 >> 2] = i126;
      break;
     }
    }
   } while (0);
   i78 = HEAP32[i122 >> 2] | 0;
   if ((i78 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i122 = i78 | 0;
   i126 = (HEAP32[i122 >> 2] | 0) - 2 | 0;
   if ((i126 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i78);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i122 >> 2] = i126;
    STACKTOP = i4;
    return;
   }
   break;
  }
 case 374:
  {
   if (i100) {
    i126 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] | 0) + 4 >> 2] | 0;
    i122 = (i126 | 0) == 0;
    if (!i122) {
     i78 = i126 | 0;
     HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 2;
    }
    i78 = i97 + 40 | 0;
    do {
     if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i78 >> 2] | 0) + 4 >> 2] | 0, i126) | 0)) {
      i79 = __ZN7WebCore7DataRefINS_17StyleResourceDataEE6accessEv(i78) | 0;
      if (!i122) {
       i73 = i126 | 0;
       HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 2;
      }
      i73 = i79 + 4 | 0;
      i79 = HEAP32[i73 >> 2] | 0;
      HEAP32[i73 >> 2] = i126;
      if ((i79 | 0) == 0) {
       break;
      }
      i73 = i79 | 0;
      i80 = (HEAP32[i73 >> 2] | 0) - 2 | 0;
      if ((i80 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i79);
       break;
      } else {
       HEAP32[i73 >> 2] = i80;
       break;
      }
     }
    } while (0);
    if (i122) {
     STACKTOP = i4;
     return;
    }
    i122 = i126 | 0;
    i78 = (HEAP32[i122 >> 2] | 0) - 2 | 0;
    if ((i78 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i126);
     STACKTOP = i4;
     return;
    } else {
     HEAP32[i122 >> 2] = i78;
     STACKTOP = i4;
     return;
    }
   }
   if (i101) {
    i78 = i97 + 40 | 0;
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i78 >> 2] | 0) + 4 >> 2] | 0, 0) | 0) {
     STACKTOP = i4;
     return;
    }
    i122 = (__ZN7WebCore7DataRefINS_17StyleResourceDataEE6accessEv(i78) | 0) + 4 | 0;
    i78 = HEAP32[i122 >> 2] | 0;
    HEAP32[i122 >> 2] = 0;
    if ((i78 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i122 = i78 | 0;
    i126 = (HEAP32[i122 >> 2] | 0) - 2 | 0;
    if ((i126 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i78);
     STACKTOP = i4;
     return;
    } else {
     HEAP32[i122 >> 2] = i126;
     STACKTOP = i4;
     return;
    }
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i126 = i81 | 0;
   HEAP32[i126 >> 2] = 0;
   do {
    if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i92) | 0) << 16 >> 16 == 20) {
     __ZNK7WebCore17CSSPrimitiveValue14getStringValueEv(i82, i92);
     i122 = i82 | 0;
     i78 = HEAP32[i122 >> 2] | 0;
     HEAP32[i122 >> 2] = 0;
     i80 = HEAP32[i126 >> 2] | 0;
     HEAP32[i126 >> 2] = i78;
     do {
      if ((i80 | 0) != 0) {
       i78 = i80 | 0;
       i73 = (HEAP32[i78 >> 2] | 0) - 2 | 0;
       if ((i73 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i80);
        break;
       } else {
        HEAP32[i78 >> 2] = i73;
        break;
       }
      }
     } while (0);
     i80 = HEAP32[i122 >> 2] | 0;
     if ((i80 | 0) == 0) {
      break;
     }
     i127 = i80 | 0;
     i73 = (HEAP32[i127 >> 2] | 0) - 2 | 0;
     if ((i73 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i80);
      break;
     } else {
      HEAP32[i127 >> 2] = i73;
      break;
     }
    }
   } while (0);
   __ZN7WebCore15SVGURIReference31fragmentIdentifierFromIRIStringERKN3WTF6StringERNS_8DocumentE(i83, i81, HEAP32[(HEAP32[(HEAP32[i93 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0);
   i93 = i97 + 40 | 0;
   i81 = i83 | 0;
   do {
    if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i93 >> 2] | 0) + 4 >> 2] | 0, HEAP32[i81 >> 2] | 0) | 0)) {
     i83 = __ZN7WebCore7DataRefINS_17StyleResourceDataEE6accessEv(i93) | 0;
     i82 = HEAP32[i81 >> 2] | 0;
     if ((i82 | 0) != 0) {
      i73 = i82 | 0;
      HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 2;
     }
     i73 = i83 + 4 | 0;
     i83 = HEAP32[i73 >> 2] | 0;
     HEAP32[i73 >> 2] = i82;
     if ((i83 | 0) == 0) {
      break;
     }
     i82 = i83 | 0;
     i73 = (HEAP32[i82 >> 2] | 0) - 2 | 0;
     if ((i73 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i83);
      break;
     } else {
      HEAP32[i82 >> 2] = i73;
      break;
     }
    }
   } while (0);
   i93 = HEAP32[i81 >> 2] | 0;
   do {
    if ((i93 | 0) != 0) {
     i81 = i93 | 0;
     i73 = (HEAP32[i81 >> 2] | 0) - 2 | 0;
     if ((i73 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i93);
      break;
     } else {
      HEAP32[i81 >> 2] = i73;
      break;
     }
    }
   } while (0);
   i93 = HEAP32[i126 >> 2] | 0;
   if ((i93 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i126 = i93 | 0;
   i73 = (HEAP32[i126 >> 2] | 0) - 2 | 0;
   if ((i73 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i93);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i126 >> 2] = i73;
    STACKTOP = i4;
    return;
   }
   break;
  }
 case 411:
  {
   if (i100) {
    i73 = i97 + 4 | 0;
    HEAP32[i73 >> 2] = HEAP32[i73 >> 2] & -3073 | HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] & 3072;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i73 = i97 + 4 | 0;
    HEAP32[i73 >> 2] = HEAP32[i73 >> 2] & -3073;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i73 = HEAP32[i92 + 8 >> 2] | 0;
   if ((i73 | 0) == 143) {
    i129 = 1024;
   } else if ((i73 | 0) == 370) {
    i129 = 2048;
   } else {
    i129 = 0;
   }
   i73 = i97 + 4 | 0;
   HEAP32[i73 >> 2] = HEAP32[i73 >> 2] & -3073 | i129;
   STACKTOP = i4;
   return;
  }
 case 413:
  {
   if (i100) {
    i129 = i97 + 4 | 0;
    HEAP32[i129 >> 2] = HEAP32[i129 >> 2] & -458753 | HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] & 458752;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i129 = i97 + 4 | 0;
    HEAP32[i129 >> 2] = HEAP32[i129 >> 2] & -458753;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   switch (HEAP32[i92 + 8 >> 2] | 0) {
   case 530:
    {
     i130 = 65536;
     break;
    }
   case 534:
    {
     i130 = 131072;
     break;
    }
   case 531:
    {
     i130 = 196608;
     break;
    }
   case 535:
    {
     i130 = 262144;
     break;
    }
   case 532:
    {
     i130 = 327680;
     break;
    }
   default:
    {
     i130 = 0;
    }
   }
   i129 = i97 + 4 | 0;
   HEAP32[i129 >> 2] = HEAP32[i129 >> 2] & -458753 | i130;
   STACKTOP = i4;
   return;
  }
 case 382:
  {
   if (i100) {
    i130 = HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 28 >> 2] | 0;
    i129 = i130 + 8 | 0;
    i73 = i97 + 28 | 0;
    i126 = HEAP32[i73 >> 2] | 0;
    do {
     if ((HEAP32[i126 + 8 >> 2] | 0) == (HEAP32[i129 >> 2] | 0)) {
      if ((HEAP8[i126 + 12 | 0] & 1) != 0 ^ (HEAP8[i130 + 12 | 0] & 1) != 0) {
       break;
      }
      STACKTOP = i4;
      return;
     }
    } while (0);
    if ((HEAP32[i126 >> 2] | 0) == 1) {
     i131 = i126;
    } else {
     __ZNK7WebCore13StyleStopData4copyEv(i12, i126);
     i126 = HEAP32[i12 >> 2] | 0;
     i12 = HEAP32[i73 >> 2] | 0;
     i130 = i12 | 0;
     i93 = (HEAP32[i130 >> 2] | 0) - 1 | 0;
     if ((i93 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i12);
     } else {
      HEAP32[i130 >> 2] = i93;
     }
     HEAP32[i73 >> 2] = i126;
     i131 = i126;
    }
    i126 = i131 + 8 | 0;
    i131 = i129;
    HEAP32[i126 >> 2] = HEAP32[i131 >> 2];
    HEAP8[i126 + 4 | 0] = HEAP8[i131 + 4 | 0] | 0;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i131 = __ZN7WebCore7makeRGBEiii(0, 0, 0) | 0;
    i126 = i97 + 28 | 0;
    i129 = HEAP32[i126 >> 2] | 0;
    do {
     if ((HEAP32[i129 + 8 >> 2] | 0) == (i131 | 0)) {
      if ((HEAP8[i129 + 12 | 0] & 1) == 0) {
       break;
      }
      STACKTOP = i4;
      return;
     }
    } while (0);
    if ((HEAP32[i129 >> 2] | 0) == 1) {
     i132 = i129;
    } else {
     __ZNK7WebCore13StyleStopData4copyEv(i13, i129);
     i129 = HEAP32[i13 >> 2] | 0;
     i13 = HEAP32[i126 >> 2] | 0;
     i73 = i13 | 0;
     i93 = (HEAP32[i73 >> 2] | 0) - 1 | 0;
     if ((i93 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i13);
     } else {
      HEAP32[i73 >> 2] = i93;
     }
     HEAP32[i126 >> 2] = i129;
     i132 = i129;
    }
    HEAP32[i132 + 8 >> 2] = i131;
    HEAP8[i132 + 12 | 0] = 1;
    STACKTOP = i4;
    return;
   }
   if (((i95 >>> 13 & 63) - 25 | 0) >>> 0 >= 2 >>> 0) {
    STACKTOP = i4;
    return;
   }
   __ZNK7WebCore11RenderStyle5colorEv(i84, HEAP32[i94 >> 2] | 0);
   if ((HEAP32[i3 + 16 >> 2] | 0) == 3) {
    i133 = HEAP32[i84 >> 2] | 0;
    i134 = HEAP8[i84 + 4 | 0] | 0;
   } else {
    i133 = HEAP32[i3 + 8 >> 2] | 0;
    i134 = HEAP8[i3 + 12 | 0] | 0;
   }
   i84 = i97 + 28 | 0;
   i132 = HEAP32[i84 >> 2] | 0;
   do {
    if ((HEAP32[i132 + 8 >> 2] | 0) == (i133 | 0)) {
     if ((HEAP8[i132 + 12 | 0] & 1) != 0 ^ (i134 & 1) != 0) {
      break;
     }
     STACKTOP = i4;
     return;
    }
   } while (0);
   if ((HEAP32[i132 >> 2] | 0) == 1) {
    i135 = i132;
   } else {
    __ZNK7WebCore13StyleStopData4copyEv(i14, i132);
    i132 = HEAP32[i14 >> 2] | 0;
    i14 = HEAP32[i84 >> 2] | 0;
    i131 = i14 | 0;
    i129 = (HEAP32[i131 >> 2] | 0) - 1 | 0;
    if ((i129 | 0) == 0) {
     __ZN3WTF8fastFreeEPv(i14);
    } else {
     HEAP32[i131 >> 2] = i129;
    }
    HEAP32[i84 >> 2] = i132;
    i135 = i132;
   }
   HEAP32[i135 + 8 >> 2] = i133;
   HEAP8[i135 + 12 | 0] = i134;
   STACKTOP = i4;
   return;
  }
 case 381:
  {
   if (i100) {
    i134 = HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 32 >> 2] | 0;
    i135 = i134 + 16 | 0;
    i133 = i97 + 32 | 0;
    i132 = HEAP32[i133 >> 2] | 0;
    do {
     if ((HEAP32[i132 + 16 >> 2] | 0) == (HEAP32[i135 >> 2] | 0)) {
      if ((HEAP8[i132 + 20 | 0] & 1) != 0 ^ (HEAP8[i134 + 20 | 0] & 1) != 0) {
       break;
      }
      STACKTOP = i4;
      return;
     }
    } while (0);
    if ((HEAP32[i132 >> 2] | 0) == 1) {
     i136 = i132;
    } else {
     __ZNK7WebCore13StyleMiscData4copyEv(i15, i132);
     i132 = HEAP32[i15 >> 2] | 0;
     i15 = HEAP32[i133 >> 2] | 0;
     i134 = i15 | 0;
     i84 = (HEAP32[i134 >> 2] | 0) - 1 | 0;
     if ((i84 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i15);
     } else {
      HEAP32[i134 >> 2] = i84;
     }
     HEAP32[i133 >> 2] = i132;
     i136 = i132;
    }
    i132 = i136 + 16 | 0;
    i136 = i135;
    HEAP32[i132 >> 2] = HEAP32[i136 >> 2];
    HEAP8[i132 + 4 | 0] = HEAP8[i136 + 4 | 0] | 0;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i136 = __ZN7WebCore7makeRGBEiii(255, 255, 255) | 0;
    i132 = i97 + 32 | 0;
    i135 = HEAP32[i132 >> 2] | 0;
    do {
     if ((HEAP32[i135 + 16 >> 2] | 0) == (i136 | 0)) {
      if ((HEAP8[i135 + 20 | 0] & 1) == 0) {
       break;
      }
      STACKTOP = i4;
      return;
     }
    } while (0);
    if ((HEAP32[i135 >> 2] | 0) == 1) {
     i137 = i135;
    } else {
     __ZNK7WebCore13StyleMiscData4copyEv(i16, i135);
     i135 = HEAP32[i16 >> 2] | 0;
     i16 = HEAP32[i132 >> 2] | 0;
     i133 = i16 | 0;
     i84 = (HEAP32[i133 >> 2] | 0) - 1 | 0;
     if ((i84 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i16);
     } else {
      HEAP32[i133 >> 2] = i84;
     }
     HEAP32[i132 >> 2] = i135;
     i137 = i135;
    }
    HEAP32[i137 + 16 >> 2] = i136;
    HEAP8[i137 + 20 | 0] = 1;
    STACKTOP = i4;
    return;
   }
   if (((i95 >>> 13 & 63) - 25 | 0) >>> 0 >= 2 >>> 0) {
    STACKTOP = i4;
    return;
   }
   __ZNK7WebCore11RenderStyle5colorEv(i85, HEAP32[i94 >> 2] | 0);
   if ((HEAP32[i3 + 16 >> 2] | 0) == 3) {
    i138 = HEAP32[i85 >> 2] | 0;
    i139 = HEAP8[i85 + 4 | 0] | 0;
   } else {
    i138 = HEAP32[i3 + 8 >> 2] | 0;
    i139 = HEAP8[i3 + 12 | 0] | 0;
   }
   i85 = i97 + 32 | 0;
   i137 = HEAP32[i85 >> 2] | 0;
   do {
    if ((HEAP32[i137 + 16 >> 2] | 0) == (i138 | 0)) {
     if ((HEAP8[i137 + 20 | 0] & 1) != 0 ^ (i139 & 1) != 0) {
      break;
     }
     STACKTOP = i4;
     return;
    }
   } while (0);
   if ((HEAP32[i137 >> 2] | 0) == 1) {
    i140 = i137;
   } else {
    __ZNK7WebCore13StyleMiscData4copyEv(i17, i137);
    i137 = HEAP32[i17 >> 2] | 0;
    i17 = HEAP32[i85 >> 2] | 0;
    i136 = i17 | 0;
    i135 = (HEAP32[i136 >> 2] | 0) - 1 | 0;
    if ((i135 | 0) == 0) {
     __ZN3WTF8fastFreeEPv(i17);
    } else {
     HEAP32[i136 >> 2] = i135;
    }
    HEAP32[i85 >> 2] = i137;
    i140 = i137;
   }
   HEAP32[i140 + 16 >> 2] = i138;
   HEAP8[i140 + 20 | 0] = i139;
   STACKTOP = i4;
   return;
  }
 case 380:
  {
   if (i100) {
    d128 = +HEAPF32[(HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 32 >> 2] | 0) + 12 >> 2];
    i139 = i97 + 32 | 0;
    i140 = HEAP32[i139 >> 2] | 0;
    if (+HEAPF32[i140 + 12 >> 2] == d128) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i140 >> 2] | 0) == 1) {
     i141 = i140;
    } else {
     __ZNK7WebCore13StyleMiscData4copyEv(i18, i140);
     i140 = HEAP32[i18 >> 2] | 0;
     i18 = HEAP32[i139 >> 2] | 0;
     i138 = i18 | 0;
     i137 = (HEAP32[i138 >> 2] | 0) - 1 | 0;
     if ((i137 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i18);
     } else {
      HEAP32[i138 >> 2] = i137;
     }
     HEAP32[i139 >> 2] = i140;
     i141 = i140;
    }
    HEAPF32[i141 + 12 >> 2] = d128;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i141 = i97 + 32 | 0;
    i140 = HEAP32[i141 >> 2] | 0;
    if (+HEAPF32[i140 + 12 >> 2] == +1) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i140 >> 2] | 0) == 1) {
     i142 = i140;
    } else {
     __ZNK7WebCore13StyleMiscData4copyEv(i19, i140);
     i140 = HEAP32[i19 >> 2] | 0;
     i19 = HEAP32[i141 >> 2] | 0;
     i139 = i19 | 0;
     i137 = (HEAP32[i139 >> 2] | 0) - 1 | 0;
     if ((i137 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i19);
     } else {
      HEAP32[i139 >> 2] = i137;
     }
     HEAP32[i141 >> 2] = i140;
     i142 = i140;
    }
    HEAPF32[i142 + 12 >> 2] = +1;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i142 = __ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i92) | 0;
   do {
    if ((i142 << 16 >> 16 | 0) == 2) {
     d128 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i92);
     do {
      if (d128 < 3.4028234663852886e+38) {
       if (d128 <= -3.4028234663852886e+38) {
        d143 = -3.4028234663852886e+38;
        break;
       }
       d143 = d128;
      } else {
       d143 = 3.4028234663852886e+38;
      }
     } while (0);
     d144 = d143 / +100;
    } else if ((i142 << 16 >> 16 | 0) == 1) {
     d128 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i92);
     if (d128 >= 3.4028234663852886e+38) {
      d144 = 3.4028234663852886e+38;
      break;
     }
     if (d128 <= -3.4028234663852886e+38) {
      d144 = -3.4028234663852886e+38;
      break;
     }
     d144 = d128;
    } else {
     STACKTOP = i4;
     return;
    }
   } while (0);
   i142 = i97 + 32 | 0;
   i122 = HEAP32[i142 >> 2] | 0;
   if (+HEAPF32[i122 + 12 >> 2] == d144) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i122 >> 2] | 0) == 1) {
    i145 = i122;
   } else {
    __ZNK7WebCore13StyleMiscData4copyEv(i20, i122);
    i122 = HEAP32[i20 >> 2] | 0;
    i20 = HEAP32[i142 >> 2] | 0;
    i140 = i20 | 0;
    i141 = (HEAP32[i140 >> 2] | 0) - 1 | 0;
    if ((i141 | 0) == 0) {
     __ZN3WTF8fastFreeEPv(i20);
    } else {
     HEAP32[i140 >> 2] = i141;
    }
    HEAP32[i142 >> 2] = i122;
    i145 = i122;
   }
   HEAPF32[i145 + 12 >> 2] = d144;
   STACKTOP = i4;
   return;
  }
 case 379:
  {
   if (i100) {
    i145 = HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 32 >> 2] | 0;
    i122 = i145 + 4 | 0;
    i142 = i97 + 32 | 0;
    i141 = HEAP32[i142 >> 2] | 0;
    do {
     if ((HEAP32[i141 + 4 >> 2] | 0) == (HEAP32[i122 >> 2] | 0)) {
      if ((HEAP8[i141 + 8 | 0] & 1) != 0 ^ (HEAP8[i145 + 8 | 0] & 1) != 0) {
       break;
      }
      STACKTOP = i4;
      return;
     }
    } while (0);
    if ((HEAP32[i141 >> 2] | 0) == 1) {
     i146 = i141;
    } else {
     __ZNK7WebCore13StyleMiscData4copyEv(i21, i141);
     i141 = HEAP32[i21 >> 2] | 0;
     i21 = HEAP32[i142 >> 2] | 0;
     i145 = i21 | 0;
     i140 = (HEAP32[i145 >> 2] | 0) - 1 | 0;
     if ((i140 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i21);
     } else {
      HEAP32[i145 >> 2] = i140;
     }
     HEAP32[i142 >> 2] = i141;
     i146 = i141;
    }
    i141 = i146 + 4 | 0;
    i146 = i122;
    HEAP32[i141 >> 2] = HEAP32[i146 >> 2];
    HEAP8[i141 + 4 | 0] = HEAP8[i146 + 4 | 0] | 0;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i146 = __ZN7WebCore7makeRGBEiii(0, 0, 0) | 0;
    i141 = i97 + 32 | 0;
    i122 = HEAP32[i141 >> 2] | 0;
    do {
     if ((HEAP32[i122 + 4 >> 2] | 0) == (i146 | 0)) {
      if ((HEAP8[i122 + 8 | 0] & 1) == 0) {
       break;
      }
      STACKTOP = i4;
      return;
     }
    } while (0);
    if ((HEAP32[i122 >> 2] | 0) == 1) {
     i147 = i122;
    } else {
     __ZNK7WebCore13StyleMiscData4copyEv(i28, i122);
     i122 = HEAP32[i28 >> 2] | 0;
     i28 = HEAP32[i141 >> 2] | 0;
     i142 = i28 | 0;
     i140 = (HEAP32[i142 >> 2] | 0) - 1 | 0;
     if ((i140 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i28);
     } else {
      HEAP32[i142 >> 2] = i140;
     }
     HEAP32[i141 >> 2] = i122;
     i147 = i122;
    }
    HEAP32[i147 + 4 >> 2] = i146;
    HEAP8[i147 + 8 | 0] = 1;
    STACKTOP = i4;
    return;
   }
   if (((i95 >>> 13 & 63) - 25 | 0) >>> 0 >= 2 >>> 0) {
    STACKTOP = i4;
    return;
   }
   __ZNK7WebCore11RenderStyle5colorEv(i86, HEAP32[i94 >> 2] | 0);
   if ((HEAP32[i3 + 16 >> 2] | 0) == 3) {
    i148 = HEAP32[i86 >> 2] | 0;
    i149 = HEAP8[i86 + 4 | 0] | 0;
   } else {
    i148 = HEAP32[i3 + 8 >> 2] | 0;
    i149 = HEAP8[i3 + 12 | 0] | 0;
   }
   i86 = i97 + 32 | 0;
   i147 = HEAP32[i86 >> 2] | 0;
   do {
    if ((HEAP32[i147 + 4 >> 2] | 0) == (i148 | 0)) {
     if ((HEAP8[i147 + 8 | 0] & 1) != 0 ^ (i149 & 1) != 0) {
      break;
     }
     STACKTOP = i4;
     return;
    }
   } while (0);
   if ((HEAP32[i147 >> 2] | 0) == 1) {
    i150 = i147;
   } else {
    __ZNK7WebCore13StyleMiscData4copyEv(i29, i147);
    i147 = HEAP32[i29 >> 2] | 0;
    i29 = HEAP32[i86 >> 2] | 0;
    i146 = i29 | 0;
    i122 = (HEAP32[i146 >> 2] | 0) - 1 | 0;
    if ((i122 | 0) == 0) {
     __ZN3WTF8fastFreeEPv(i29);
    } else {
     HEAP32[i146 >> 2] = i122;
    }
    HEAP32[i86 >> 2] = i147;
    i150 = i147;
   }
   HEAP32[i150 + 4 >> 2] = i148;
   HEAP8[i150 + 8 | 0] = i149;
   STACKTOP = i4;
   return;
  }
 case 408:
  {
   if (i100) {
    i149 = i97 + 4 | 0;
    HEAP32[i149 >> 2] = HEAP32[i149 >> 2] & -3670017 | HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] & 3670016;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i149 = i97 + 4 | 0;
    HEAP32[i149 >> 2] = HEAP32[i149 >> 2] & -3670017;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i92) | 0) << 16 >> 16 != 11) {
    STACKTOP = i4;
    return;
   }
   d144 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i92);
   do {
    if (d144 < 3.4028234663852886e+38) {
     if (d144 <= -3.4028234663852886e+38) {
      d151 = -3.4028234663852886e+38;
      break;
     }
     d151 = d144;
    } else {
     d151 = 3.4028234663852886e+38;
    }
   } while (0);
   d144 = +Math_abs(+(+_fmod(+d151, +(+360))));
   do {
    if (d144 <= +45 | d144 > +315) {
     i152 = 0;
    } else {
     if (d144 > +45 & d144 <= +135) {
      i152 = 524288;
      break;
     }
     i152 = d144 > +135 & d144 <= +225 ? 1048576 : 1572864;
    }
   } while (0);
   i149 = i97 + 4 | 0;
   HEAP32[i149 >> 2] = HEAP32[i149 >> 2] & -3670017 | i152;
   STACKTOP = i4;
   return;
  }
 case 409:
  {
   if (i100) {
    i152 = i97 + 4 | 0;
    HEAP32[i152 >> 2] = HEAP32[i152 >> 2] & -29360129 | HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] & 29360128;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i152 = i97 + 4 | 0;
    HEAP32[i152 >> 2] = HEAP32[i152 >> 2] & -29360129 | 16777216;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i92) | 0) << 16 >> 16 != 11) {
    if ((HEAP32[i92 + 4 >> 2] & 508 | 0) != 472) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i92 + 8 >> 2] | 0) != 269) {
     STACKTOP = i4;
     return;
    }
    i152 = i97 + 4 | 0;
    HEAP32[i152 >> 2] = HEAP32[i152 >> 2] & -29360129 | 16777216;
    STACKTOP = i4;
    return;
   }
   d144 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i92);
   do {
    if (d144 < 3.4028234663852886e+38) {
     if (d144 <= -3.4028234663852886e+38) {
      d153 = -3.4028234663852886e+38;
      break;
     }
     d153 = d144;
    } else {
     d153 = 3.4028234663852886e+38;
    }
   } while (0);
   d144 = +Math_abs(+(+_fmod(+d153, +(+360))));
   do {
    if (d144 <= +45 | d144 > +315) {
     i154 = 0;
    } else {
     if (d144 > +45 & d144 <= +135) {
      i154 = 4194304;
      break;
     }
     i154 = d144 > +135 & d144 <= +225 ? 8388608 : 12582912;
    }
   } while (0);
   i152 = i97 + 4 | 0;
   HEAP32[i152 >> 2] = HEAP32[i152 >> 2] & -29360129 | i154;
   STACKTOP = i4;
   return;
  }
 case 414:
  {
   if (i100) {
    i154 = i1 + 324 | 0;
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i154 >> 2] | 0) + 36 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) == 0) {
     i155 = 0;
    } else {
     i152 = __ZN3WTF10fastMallocEj(36) | 0;
     __ZN7WebCore10ShadowDataC1ERKS0_(i152, HEAP32[(HEAP32[(HEAP32[(HEAP32[i154 >> 2] | 0) + 36 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0);
     i155 = i152;
    }
    i152 = i87 | 0;
    HEAP32[i152 >> 2] = i155;
    __ZN7WebCore14SVGRenderStyle9setShadowEN3WTF10PassOwnPtrINS_10ShadowDataEEE(i97, i87);
    i87 = HEAP32[i152 >> 2] | 0;
    if ((i87 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore10ShadowDataD2Ev(i87);
    __ZN3WTF8fastFreeEPv(i87);
    STACKTOP = i4;
    return;
   }
   if (!((i92 | 0) == 0 & (i101 ^ 1))) {
    i87 = i88 | 0;
    HEAP32[i87 >> 2] = 0;
    __ZN7WebCore14SVGRenderStyle9setShadowEN3WTF10PassOwnPtrINS_10ShadowDataEEE(i97, i88);
    i88 = HEAP32[i87 >> 2] | 0;
    if ((i88 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore10ShadowDataD2Ev(i88);
    __ZN3WTF8fastFreeEPv(i88);
    STACKTOP = i4;
    return;
   }
   if ((i95 & 491520) >>> 0 <= 221184 >>> 0) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i3 + 16 >> 2] | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i95 = HEAP32[HEAP32[i3 + 8 >> 2] >> 2] | 0;
   if ((HEAP32[i95 + 4 >> 2] & 516096 | 0) != 155648) {
    STACKTOP = i4;
    return;
   }
   i3 = i1 + 328 | 0;
   i88 = __ZNK7WebCore17CSSPrimitiveValue13computeLengthIiEET_PKNS_11RenderStyleES5_fb(HEAP32[i95 + 8 >> 2] | 0, HEAP32[i94 >> 2] | 0, HEAP32[i3 >> 2] | 0, +1, 0) | 0;
   i87 = __ZNK7WebCore17CSSPrimitiveValue13computeLengthIiEET_PKNS_11RenderStyleES5_fb(HEAP32[i95 + 12 >> 2] | 0, HEAP32[i94 >> 2] | 0, HEAP32[i3 >> 2] | 0, +1, 0) | 0;
   i152 = HEAP32[i95 + 16 >> 2] | 0;
   if ((i152 | 0) == 0) {
    i156 = 0;
   } else {
    i156 = __ZNK7WebCore17CSSPrimitiveValue13computeLengthIiEET_PKNS_11RenderStyleES5_fb(i152, HEAP32[i94 >> 2] | 0, HEAP32[i3 >> 2] | 0, +1, 0) | 0;
   }
   i3 = HEAP32[i95 + 28 >> 2] | 0;
   do {
    if ((i3 | 0) == 0) {
     i157 = 0;
     i158 = 0;
     i159 = 1;
     i160 = 0;
     i161 = __ZN3WTF10fastMallocEj(36) | 0;
    } else {
     __ZNK7WebCore13StyleResolver23colorFromPrimitiveValueEPNS_17CSSPrimitiveValueEb(i89, i1, i3, 0);
     i95 = HEAP32[i89 >> 2] | 0;
     i94 = HEAP8[i89 + 4 | 0] | 0;
     i152 = __ZN3WTF10fastMallocEj(36) | 0;
     if ((i94 & 1) == 0) {
      i157 = 0;
      i158 = 0;
      i159 = 1;
      i160 = 0;
      i161 = i152;
      break;
     }
     i157 = 0;
     i158 = i95;
     i159 = i94 & 255;
     i160 = 0;
     i161 = i152;
    }
   } while (0);
   i89 = i161;
   HEAP32[i89 >> 2] = i88;
   HEAP32[i89 + 4 >> 2] = i87;
   HEAP32[i161 + 8 >> 2] = i156;
   HEAP32[i161 + 12 >> 2] = 0;
   i156 = i161 + 16 | 0;
   HEAP32[i156 >> 2] = i158 | i160;
   HEAP32[i156 + 4 >> 2] = i157 | i159;
   HEAP32[i161 + 24 >> 2] = 0;
   HEAP8[i161 + 28 | 0] = 0;
   HEAP32[i161 + 32 >> 2] = 0;
   i159 = i90 | 0;
   HEAP32[i159 >> 2] = i161;
   __ZN7WebCore14SVGRenderStyle9setShadowEN3WTF10PassOwnPtrINS_10ShadowDataEEE(i97, i90);
   i90 = HEAP32[i159 >> 2] | 0;
   if ((i90 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore10ShadowDataD2Ev(i90);
   __ZN3WTF8fastFreeEPv(i90);
   STACKTOP = i4;
   return;
  }
 case 412:
  {
   if (i100) {
    i90 = i97 + 8 | 0;
    HEAP32[i90 >> 2] = HEAP32[i90 >> 2] & -1025 | HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 8 >> 2] & 1024;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i90 = i97 + 8 | 0;
    HEAP32[i90 >> 2] = HEAP32[i90 >> 2] & -1025;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i90 = i97 + 8 | 0;
   HEAP32[i90 >> 2] = ((HEAP32[i92 + 8 >> 2] | 0) == 750) << 10 | HEAP32[i90 >> 2] & -1025;
   STACKTOP = i4;
   return;
  }
 case 373:
  {
   if (i100) {
    i90 = i97 + 8 | 0;
    HEAP32[i90 >> 2] = HEAP32[i90 >> 2] & -6145 | HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 8 >> 2] & 6144;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i90 = i97 + 8 | 0;
    HEAP32[i90 >> 2] = HEAP32[i90 >> 2] & -6145;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i90 = HEAP32[i92 + 8 >> 2] | 0;
   if ((i90 | 0) == 749) {
    i162 = 2048;
   } else if ((i90 | 0) == 361) {
    i162 = 4096;
   } else {
    i162 = 0;
   }
   i90 = i97 + 8 | 0;
   HEAP32[i90 >> 2] = HEAP32[i90 >> 2] & -6145 | i162;
   STACKTOP = i4;
   return;
  }
 case 395:
  {
   if (i100) {
    i100 = i97 + 8 | 0;
    HEAP32[i100 >> 2] = HEAP32[i100 >> 2] & -8193 | HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 36 >> 2] | 0) + 8 >> 2] & 8192;
    STACKTOP = i4;
    return;
   }
   if (i101) {
    i101 = i97 + 8 | 0;
    HEAP32[i101 >> 2] = HEAP32[i101 >> 2] & -8193;
    STACKTOP = i4;
    return;
   }
   if ((i92 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i101 = i97 + 8 | 0;
   HEAP32[i101 >> 2] = ((HEAP32[i92 + 8 >> 2] | 0) == 72) << 13 | HEAP32[i101 >> 2] & -8193;
   STACKTOP = i4;
   return;
  }
 default:
  {
   STACKTOP = i4;
   return;
  }
 }
}
function __ZN7WebCore14SVGRenderStyle14setStrokePaintENS_8SVGPaint12SVGPaintTypeERKNS_5ColorERKN3WTF6StringEbb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 do {
  if (i5) {
   i7 = i1 + 16 | 0;
   i8 = i7 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if ((HEAP32[i9 + 40 >> 2] | 0) == (i2 | 0)) {
    i10 = i9;
   } else {
    HEAP32[(__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i7) | 0) + 40 >> 2] = i2;
    i10 = HEAP32[i8 >> 2] | 0;
   }
   if ((HEAP32[i10 + 44 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
    if ((HEAP8[i10 + 48 | 0] & 1) != 0 ^ (HEAP8[i3 + 4 | 0] & 1) != 0) {
     i11 = 6;
    } else {
     i12 = i10;
    }
   } else {
    i11 = 6;
   }
   if ((i11 | 0) == 6) {
    i9 = (__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i7) | 0) + 44 | 0;
    i13 = i3;
    HEAP32[i9 >> 2] = HEAP32[i13 >> 2];
    HEAP8[i9 + 4 | 0] = HEAP8[i13 + 4 | 0] | 0;
    i12 = HEAP32[i8 >> 2] | 0;
   }
   i8 = i4 | 0;
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i12 + 52 >> 2] | 0, HEAP32[i8 >> 2] | 0) | 0) {
    break;
   }
   i13 = __ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i7) | 0;
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) != 0) {
    i8 = i7 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   i8 = i13 + 52 | 0;
   i13 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i13 | 0) == 0) {
    break;
   }
   i7 = i13 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 if (!i6) {
  return;
 }
 i6 = i1 + 16 | 0;
 i1 = i6 | 0;
 i12 = HEAP32[i1 >> 2] | 0;
 if ((HEAP32[i12 + 56 >> 2] | 0) == (i2 | 0)) {
  i14 = i12;
 } else {
  HEAP32[(__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i6) | 0) + 56 >> 2] = i2;
  i14 = HEAP32[i1 >> 2] | 0;
 }
 if ((HEAP32[i14 + 60 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
  if ((HEAP8[i14 + 64 | 0] & 1) != 0 ^ (HEAP8[i3 + 4 | 0] & 1) != 0) {
   i11 = 19;
  } else {
   i15 = i14;
  }
 } else {
  i11 = 19;
 }
 if ((i11 | 0) == 19) {
  i11 = (__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i6) | 0) + 60 | 0;
  i14 = i3;
  HEAP32[i11 >> 2] = HEAP32[i14 >> 2];
  HEAP8[i11 + 4 | 0] = HEAP8[i14 + 4 | 0] | 0;
  i15 = HEAP32[i1 >> 2] | 0;
 }
 i1 = i4 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i15 + 68 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0) {
  return;
 }
 i15 = __ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i6) | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i1 = i6 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 }
 i1 = i15 + 68 | 0;
 i15 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i15 | 0) == 0) {
  return;
 }
 i6 = i15 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i15);
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  return;
 }
}
function __ZN7WebCore14SVGRenderStyle12setFillPaintENS_8SVGPaint12SVGPaintTypeERKNS_5ColorERKN3WTF6StringEbb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 do {
  if (i5) {
   i7 = i1 + 12 | 0;
   i8 = i7 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if ((HEAP32[i9 + 8 >> 2] | 0) == (i2 | 0)) {
    i10 = i9;
   } else {
    HEAP32[(__ZN7WebCore7DataRefINS_13StyleFillDataEE6accessEv(i7) | 0) + 8 >> 2] = i2;
    i10 = HEAP32[i8 >> 2] | 0;
   }
   if ((HEAP32[i10 + 12 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
    if ((HEAP8[i10 + 16 | 0] & 1) != 0 ^ (HEAP8[i3 + 4 | 0] & 1) != 0) {
     i11 = 6;
    } else {
     i12 = i10;
    }
   } else {
    i11 = 6;
   }
   if ((i11 | 0) == 6) {
    i9 = (__ZN7WebCore7DataRefINS_13StyleFillDataEE6accessEv(i7) | 0) + 12 | 0;
    i13 = i3;
    HEAP32[i9 >> 2] = HEAP32[i13 >> 2];
    HEAP8[i9 + 4 | 0] = HEAP8[i13 + 4 | 0] | 0;
    i12 = HEAP32[i8 >> 2] | 0;
   }
   i8 = i4 | 0;
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i12 + 20 >> 2] | 0, HEAP32[i8 >> 2] | 0) | 0) {
    break;
   }
   i13 = __ZN7WebCore7DataRefINS_13StyleFillDataEE6accessEv(i7) | 0;
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) != 0) {
    i8 = i7 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   i8 = i13 + 20 | 0;
   i13 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i13 | 0) == 0) {
    break;
   }
   i7 = i13 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 if (!i6) {
  return;
 }
 i6 = i1 + 12 | 0;
 i1 = i6 | 0;
 i12 = HEAP32[i1 >> 2] | 0;
 if ((HEAP32[i12 + 24 >> 2] | 0) == (i2 | 0)) {
  i14 = i12;
 } else {
  HEAP32[(__ZN7WebCore7DataRefINS_13StyleFillDataEE6accessEv(i6) | 0) + 24 >> 2] = i2;
  i14 = HEAP32[i1 >> 2] | 0;
 }
 if ((HEAP32[i14 + 28 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
  if ((HEAP8[i14 + 32 | 0] & 1) != 0 ^ (HEAP8[i3 + 4 | 0] & 1) != 0) {
   i11 = 19;
  } else {
   i15 = i14;
  }
 } else {
  i11 = 19;
 }
 if ((i11 | 0) == 19) {
  i11 = (__ZN7WebCore7DataRefINS_13StyleFillDataEE6accessEv(i6) | 0) + 28 | 0;
  i14 = i3;
  HEAP32[i11 >> 2] = HEAP32[i14 >> 2];
  HEAP8[i11 + 4 | 0] = HEAP8[i14 + 4 | 0] | 0;
  i15 = HEAP32[i1 >> 2] | 0;
 }
 i1 = i4 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i15 + 36 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0) {
  return;
 }
 i15 = __ZN7WebCore7DataRefINS_13StyleFillDataEE6accessEv(i6) | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i1 = i6 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 }
 i1 = i15 + 36 | 0;
 i15 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i15 | 0) == 0) {
  return;
 }
 i6 = i15 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i15);
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEEaSERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i4 >>> 0 > i6 >>> 0) {
   HEAP32[i3 >> 2] = i6;
   i7 = i6;
  } else {
   i8 = i1 + 4 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if (i6 >>> 0 <= i9 >>> 0) {
    i7 = i4;
    break;
   }
   do {
    if ((i9 | 0) != 0) {
     if ((i4 | 0) != 0) {
      HEAP32[i3 >> 2] = 0;
     }
     i10 = i1 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     HEAP32[i10 >> 2] = 0;
     HEAP32[i8 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i11);
    }
   } while (0);
   __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, HEAP32[i5 >> 2] | 0);
   i7 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 i4 = i2 | 0;
 i2 = i1 | 0;
 _memmove(HEAP32[i2 >> 2] | 0, HEAP32[i4 >> 2] | 0, i7 << 3 | 0) | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i8 = i7 + (i6 << 3) | 0;
 if ((i4 | 0) == (i6 | 0)) {
  i12 = i4;
 } else {
  i6 = i7 + (i4 << 3) | 0;
  i7 = (HEAP32[i2 >> 2] | 0) + (i4 << 3) | 0;
  while (1) {
   __ZN7WebCore9SVGLengthC1ERKS0_(i7, i6);
   i4 = i6 + 8 | 0;
   if ((i4 | 0) == (i8 | 0)) {
    break;
   } else {
    i6 = i4;
    i7 = i7 + 8 | 0;
   }
  }
  i12 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i12;
 return i1 | 0;
}
function __ZN7WebCore7DataRefINS_26StyleInheritedResourceDataEE6accessEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i5 = i1;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZNK7WebCore26StyleInheritedResourceData4copyEv(i3, i1);
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i6 = i3 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  i8 = HEAP32[i3 + 12 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i9 = i8 | 0;
    i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i9 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i8 = HEAP32[i3 + 8 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i10 = i8 | 0;
    i9 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i10 >> 2] = i9;
     break;
    }
   }
  } while (0);
  i8 = HEAP32[i3 + 4 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i9 = i8 | 0;
    i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i9 >> 2] = i10;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i3);
 } else {
  HEAP32[i6 >> 2] = i7;
 }
 HEAP32[i4 >> 2] = i1;
 i5 = i1;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore7DataRefINS_17StyleResourceDataEE6accessEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i5 = i1;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZNK7WebCore17StyleResourceData4copyEv(i3, i1);
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i6 = i3 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  i8 = HEAP32[i3 + 12 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i9 = i8 | 0;
    i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i9 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i8 = HEAP32[i3 + 8 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i10 = i8 | 0;
    i9 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i10 >> 2] = i9;
     break;
    }
   }
  } while (0);
  i8 = HEAP32[i3 + 4 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i9 = i8 | 0;
    i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i9 >> 2] = i10;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i3);
 } else {
  HEAP32[i6 >> 2] = i7;
 }
 HEAP32[i4 >> 2] = i1;
 i5 = i1;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i5 = i1;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZNK7WebCore15StyleStrokeData4copyEv(i3, i1);
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i6 = i3 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  i8 = HEAP32[i3 + 68 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i9 = i8 | 0;
    i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i9 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i8 = HEAP32[i3 + 52 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i10 = i8 | 0;
    i9 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i10 >> 2] = i9;
     break;
    }
   }
  } while (0);
  i8 = i3 + 36 | 0;
  if ((HEAP32[i8 >> 2] | 0) != 0) {
   HEAP32[i8 >> 2] = 0;
  }
  i8 = i3 + 28 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  if ((i9 | 0) != 0) {
   HEAP32[i8 >> 2] = 0;
   HEAP32[i3 + 32 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i9);
  }
  __ZN3WTF8fastFreeEPv(i3);
 } else {
  HEAP32[i6 >> 2] = i7;
 }
 HEAP32[i4 >> 2] = i1;
 i5 = i1;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 <= i2 >>> 0) {
   if ((i7 + (i4 << 3) | 0) >>> 0 <= i2 >>> 0) {
    break;
   }
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   i9 = i8 + 1 + (i8 >>> 2) | 0;
   i8 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
   i8 = HEAP32[i6 >> 2] | 0;
   i10 = i8 + (i2 - i7 >> 3 << 3) | 0;
   i11 = i8;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = i11 + (i12 << 3) | 0;
   __ZN7WebCore9SVGLengthC1ERKS0_(i13, i10);
   i14 = HEAP32[i3 >> 2] | 0;
   i15 = i14 + 1 | 0;
   HEAP32[i3 >> 2] = i15;
   return;
  }
 } while (0);
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i7 + 1 + (i7 >>> 2) | 0;
 i7 = i4 >>> 0 > 16 >>> 0 ? i4 : 16;
 __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i5 >>> 0 ? i7 : i5);
 i10 = i2;
 i11 = HEAP32[i6 >> 2] | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i13 = i11 + (i12 << 3) | 0;
 __ZN7WebCore9SVGLengthC1ERKS0_(i13, i10);
 i14 = HEAP32[i3 >> 2] | 0;
 i15 = i14 + 1 | 0;
 HEAP32[i3 >> 2] = i15;
 return;
}
function __ZN7WebCore7DataRefINS_13StyleFillDataEE6accessEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i5 = i1;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZNK7WebCore13StyleFillData4copyEv(i3, i1);
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i6 = i3 | 0;
 i7 = i3 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i6 + 36 >> 2] | 0;
  do {
   if ((i9 | 0) != 0) {
    i10 = i9 | 0;
    i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i10 >> 2] = i11;
     break;
    }
   }
  } while (0);
  i9 = HEAP32[i6 + 20 >> 2] | 0;
  do {
   if ((i9 | 0) != 0) {
    i6 = i9 | 0;
    i11 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i6 >> 2] = i11;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i3);
 } else {
  HEAP32[i7 >> 2] = i8;
 }
 HEAP32[i4 >> 2] = i1;
 i5 = i1;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore14SVGRenderStyle9setShadowEN3WTF10PassOwnPtrINS_10ShadowDataEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 36 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore18StyleShadowSVGData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   i9 = HEAP32[i4 + 4 >> 2] | 0;
   if ((i9 | 0) != 0) {
    __ZN7WebCore10ShadowDataD2Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
   }
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 4 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore10ShadowDataD2Ev(i6);
 __ZN3WTF8fastFreeEPv(i6);
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 << 3) | 0;
 if (i2 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
 HEAP32[i3 >> 2] = i7 >>> 3;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   __ZN7WebCore9SVGLengthC1ERKS0_(i7, i6);
   i2 = i6 + 8 | 0;
   if ((i2 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i2;
    i7 = i7 + 8 | 0;
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
function _memmove(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i2 | 0) < (i1 | 0) & (i1 | 0) < (i2 + i3 | 0)) {
  i4 = i1;
  i2 = i2 + i3 | 0;
  i1 = i1 + i3 | 0;
  while ((i3 | 0) > 0) {
   i1 = i1 - 1 | 0;
   i2 = i2 - 1 | 0;
   i3 = i3 - 1 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
  }
  i1 = i4;
 } else {
  _memcpy(i1, i2, i3) | 0;
 }
 return i1 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore10ShadowDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  __ZN7WebCore10ShadowDataD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
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
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
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
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b1() {
 abort(1);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iii = [b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "_fabsf": _fabsf, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fmod": _fmod, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore7DataRefINS_13StyleFillDataEE6accessEv","__ZN7WebCore7DataRefINS_17StyleResourceDataEE6accessEv","__ZN7WebCore13StyleResolver16applySVGPropertyENS_13CSSPropertyIDEPNS_8CSSValueE","__ZN7WebCore14SVGRenderStyle14setStrokePaintENS_8SVGPaint12SVGPaintTypeERKNS_5ColorERKN3WTF6StringEbb","__ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEEaSERKS4_","_memmove","_memset","__ZN7WebCore7DataRefINS_26StyleInheritedResourceDataEE6accessEv","__ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","_memcpy","__ZN7WebCore14SVGRenderStyle12setFillPaintENS_8SVGPaint12SVGPaintTypeERKNS_5ColorERKN3WTF6StringEbb","_strlen","__ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_","__ZN7WebCore10ShadowDataD2Ev","__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv","__ZN7WebCore14SVGRenderStyle9setShadowEN3WTF10PassOwnPtrINS_10ShadowDataEEE","__ZN3WTF15CrashOnOverflow10overflowedEv"]

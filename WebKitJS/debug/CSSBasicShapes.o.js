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
H_BASE = parentModule["_malloc"](512 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 512;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([41,0,0,0,0,0,0,0,48,0,0,0,0,0,0,0,105,110,115,101,116,45,114,101,99,116,97,110,103,108,101,40,0,0,0,0,0,0,0,0,44,32,0,0,0,0,0,0,114,101,99,116,97,110,103,108,101,40,0,0,0,0,0,0,112,111,108,121,103,111,110,40,110,111,110,122,101,114,111,44,32,0,0,0,0,0,0,0,112,111,108,121,103,111,110,40,101,118,101,110,111,100,100,44,32,0,0,0,0,0,0,0,101,108,108,105,112,115,101,40,0,0,0,0,0,0,0,0,97,116,0,0,0,0,0,0,105,110,115,101,116,40,0,0,114,111,117,110,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore18CSSBasicShapeInsetE=(H_BASE+440)|0;
  var __ZTVN7WebCore30CSSDeprecatedBasicShapeEllipseE=(H_BASE+160)|0;
  var __ZTVN7WebCore29CSSDeprecatedBasicShapeCircleE=(H_BASE+200)|0;
  var __ZTVN7WebCore19CSSBasicShapeCircleE=(H_BASE+400)|0;
  var __ZTVN7WebCore20CSSBasicShapeEllipseE=(H_BASE+360)|0;
  var __ZTVN7WebCore27CSSBasicShapeInsetRectangleE=(H_BASE+240)|0;
  var __ZTVN7WebCore22CSSBasicShapeRectangleE=(H_BASE+280)|0;
  var __ZTVN7WebCore20CSSBasicShapePolygonE=(H_BASE+320)|0;
  var __ZTVN7WebCore13CSSBasicShapeE=(H_BASE+480)|0;
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
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore18CSSBasicShapeInset7cssTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 240 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 72 | 0;
 i12 = i3 + 80 | 0;
 i13 = i3 + 88 | 0;
 i14 = i3 + 96 | 0;
 i15 = i3 + 104 | 0;
 i16 = i3 + 112 | 0;
 i17 = i3 + 120 | 0;
 i18 = i3 + 128 | 0;
 i19 = i3 + 136 | 0;
 i20 = i3 + 144 | 0;
 i21 = i3 + 152 | 0;
 i22 = i3 + 160 | 0;
 i23 = i3 + 168 | 0;
 i24 = i3 + 176 | 0;
 i25 = i3 + 184 | 0;
 i26 = i3 + 192 | 0;
 i27 = i3 + 200 | 0;
 i28 = i3 + 208 | 0;
 i29 = i3 + 216 | 0;
 i30 = i3 + 224 | 0;
 i31 = i3 + 232 | 0;
 i32 = i11 | 0;
 HEAP32[i32 >> 2] = 0;
 i33 = i12 | 0;
 HEAP32[i33 >> 2] = 0;
 i34 = HEAP32[i2 + 28 >> 2] | 0;
 do {
  if ((i34 | 0) == 0) {
   i35 = 0;
   i36 = 0;
  } else {
   if ((HEAP32[i34 + 4 >> 2] & 508 | 0) == 400) {
    i37 = HEAP32[i34 + 8 >> 2] | 0;
   } else {
    i37 = 0;
   }
   i38 = HEAP32[i37 + 8 >> 2] | 0;
   do {
    if ((i38 | 0) == 0) {
     __ZN3WTF6StringC1EPKc(i13, H_BASE + 16 | 0);
     i39 = i13 | 0;
     i40 = HEAP32[i39 >> 2] | 0;
     HEAP32[i39 >> 2] = 0;
     HEAP32[i32 >> 2] = i40;
     i41 = HEAP32[i39 >> 2] | 0;
     if ((i41 | 0) == 0) {
      i42 = i40;
      break;
     }
     i39 = i41 | 0;
     i43 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
     if ((i43 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i41);
      i42 = i40;
      break;
     } else {
      HEAP32[i39 >> 2] = i43;
      i42 = i40;
      break;
     }
    } else {
     __ZNK7WebCore8CSSValue7cssTextEv(i13, i38 | 0);
     i40 = i13 | 0;
     i43 = HEAP32[i40 >> 2] | 0;
     HEAP32[i40 >> 2] = 0;
     HEAP32[i32 >> 2] = i43;
     i39 = HEAP32[i40 >> 2] | 0;
     if ((i39 | 0) == 0) {
      i42 = i43;
      break;
     }
     i40 = i39 | 0;
     i41 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
     if ((i41 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i39);
      i42 = i43;
      break;
     } else {
      HEAP32[i40 >> 2] = i41;
      i42 = i43;
      break;
     }
    }
   } while (0);
   i38 = HEAP32[i37 + 12 >> 2] | 0;
   if ((i38 | 0) == 0) {
    i35 = i42;
    i36 = 0;
    break;
   }
   __ZNK7WebCore8CSSValue7cssTextEv(i14, i38 | 0);
   i38 = i14 | 0;
   i43 = HEAP32[i38 >> 2] | 0;
   HEAP32[i38 >> 2] = 0;
   HEAP32[i33 >> 2] = i43;
   i35 = i42;
   i36 = i43;
  }
 } while (0);
 i42 = i15 | 0;
 HEAP32[i42 >> 2] = 0;
 i14 = i16 | 0;
 HEAP32[i14 >> 2] = 0;
 i37 = HEAP32[i2 + 32 >> 2] | 0;
 do {
  if ((i37 | 0) == 0) {
   i44 = 0;
   i45 = 0;
  } else {
   if ((HEAP32[i37 + 4 >> 2] & 508 | 0) == 400) {
    i46 = HEAP32[i37 + 8 >> 2] | 0;
   } else {
    i46 = 0;
   }
   i13 = HEAP32[i46 + 8 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i47 = 0;
   } else {
    __ZNK7WebCore8CSSValue7cssTextEv(i17, i13 | 0);
    i13 = i17 | 0;
    i34 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = 0;
    HEAP32[i42 >> 2] = i34;
    i47 = i34;
   }
   i34 = HEAP32[i46 + 12 >> 2] | 0;
   if ((i34 | 0) == 0) {
    i44 = i47;
    i45 = 0;
    break;
   }
   __ZNK7WebCore8CSSValue7cssTextEv(i18, i34 | 0);
   i34 = i18 | 0;
   i13 = HEAP32[i34 >> 2] | 0;
   HEAP32[i34 >> 2] = 0;
   HEAP32[i14 >> 2] = i13;
   i44 = i47;
   i45 = i13;
  }
 } while (0);
 i47 = i19 | 0;
 HEAP32[i47 >> 2] = 0;
 i18 = i20 | 0;
 HEAP32[i18 >> 2] = 0;
 i46 = HEAP32[i2 + 36 >> 2] | 0;
 do {
  if ((i46 | 0) == 0) {
   i48 = 0;
   i49 = 0;
  } else {
   if ((HEAP32[i46 + 4 >> 2] & 508 | 0) == 400) {
    i50 = HEAP32[i46 + 8 >> 2] | 0;
   } else {
    i50 = 0;
   }
   i17 = HEAP32[i50 + 8 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i51 = 0;
   } else {
    __ZNK7WebCore8CSSValue7cssTextEv(i21, i17 | 0);
    i17 = i21 | 0;
    i37 = HEAP32[i17 >> 2] | 0;
    HEAP32[i17 >> 2] = 0;
    HEAP32[i47 >> 2] = i37;
    i51 = i37;
   }
   i37 = HEAP32[i50 + 12 >> 2] | 0;
   if ((i37 | 0) == 0) {
    i48 = i51;
    i49 = 0;
    break;
   }
   __ZNK7WebCore8CSSValue7cssTextEv(i22, i37 | 0);
   i37 = i22 | 0;
   i17 = HEAP32[i37 >> 2] | 0;
   HEAP32[i37 >> 2] = 0;
   HEAP32[i18 >> 2] = i17;
   i48 = i51;
   i49 = i17;
  }
 } while (0);
 i51 = i23 | 0;
 HEAP32[i51 >> 2] = 0;
 i22 = i24 | 0;
 HEAP32[i22 >> 2] = 0;
 i50 = HEAP32[i2 + 40 >> 2] | 0;
 do {
  if ((i50 | 0) == 0) {
   i52 = 0;
   i53 = 0;
  } else {
   if ((HEAP32[i50 + 4 >> 2] & 508 | 0) == 400) {
    i54 = HEAP32[i50 + 8 >> 2] | 0;
   } else {
    i54 = 0;
   }
   i21 = HEAP32[i54 + 8 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i55 = 0;
   } else {
    __ZNK7WebCore8CSSValue7cssTextEv(i25, i21 | 0);
    i21 = i25 | 0;
    i46 = HEAP32[i21 >> 2] | 0;
    HEAP32[i21 >> 2] = 0;
    HEAP32[i51 >> 2] = i46;
    i55 = i46;
   }
   i46 = HEAP32[i54 + 12 >> 2] | 0;
   if ((i46 | 0) == 0) {
    i52 = i55;
    i53 = 0;
    break;
   }
   __ZNK7WebCore8CSSValue7cssTextEv(i26, i46 | 0);
   i46 = i26 | 0;
   i21 = HEAP32[i46 >> 2] | 0;
   HEAP32[i46 >> 2] = 0;
   HEAP32[i22 >> 2] = i21;
   i52 = i55;
   i53 = i21;
  }
 } while (0);
 i55 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i55 | 0) == 0) {
  HEAP32[i27 >> 2] = 0;
  i56 = 1;
  i57 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i27, i55 | 0);
  i56 = 0;
  i57 = 1;
 }
 i55 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i55 | 0) == 0) {
  HEAP32[i28 >> 2] = 0;
  i58 = 1;
  i59 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i28, i55 | 0);
  i58 = 0;
  i59 = 1;
 }
 i55 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i55 | 0) == 0) {
  HEAP32[i29 >> 2] = 0;
  i60 = 1;
  i61 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i29, i55 | 0);
  i60 = 0;
  i61 = 1;
 }
 i55 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i55 | 0) == 0) {
  HEAP32[i30 >> 2] = 0;
  i62 = 1;
  i63 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i30, i55 | 0);
  i62 = 0;
  i63 = 1;
 }
 i55 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i55 | 0) == 0) {
  HEAP32[i31 >> 2] = 0;
  i64 = 1;
  i65 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i31, i55 | 0);
  i64 = 0;
  i65 = 1;
 }
 i55 = i6 | 0;
 i6 = i7;
 i2 = i8 | 0;
 i8 = i9;
 HEAP8[i55] = HEAP8[H_BASE + 144 | 0] | 0;
 HEAP8[i55 + 1 | 0] = HEAP8[H_BASE + 145 | 0] | 0;
 HEAP8[i55 + 2 | 0] = HEAP8[H_BASE + 146 | 0] | 0;
 HEAP8[i55 + 3 | 0] = HEAP8[H_BASE + 147 | 0] | 0;
 HEAP8[i55 + 4 | 0] = HEAP8[H_BASE + 148 | 0] | 0;
 HEAP8[i55 + 5 | 0] = HEAP8[H_BASE + 149 | 0] | 0;
 HEAP8[i55 + 6 | 0] = HEAP8[H_BASE + 150 | 0] | 0;
 HEAP16[i7 >> 1] = 32;
 HEAP8[i2] = HEAP8[H_BASE + 152 | 0] | 0;
 HEAP8[i2 + 1 | 0] = HEAP8[H_BASE + 153 | 0] | 0;
 HEAP8[i2 + 2 | 0] = HEAP8[H_BASE + 154 | 0] | 0;
 HEAP8[i2 + 3 | 0] = HEAP8[H_BASE + 155 | 0] | 0;
 HEAP8[i2 + 4 | 0] = HEAP8[H_BASE + 156 | 0] | 0;
 HEAP8[i2 + 5 | 0] = HEAP8[H_BASE + 157 | 0] | 0;
 HEAP16[i9 >> 1] = 47;
 i9 = i10 | 0;
 HEAP32[i9 >> 2] = 0;
 i7 = i10 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i26 = i10 + 8 | 0;
 HEAP32[i26 >> 2] = 0;
 i54 = i10 + 12 | 0;
 HEAP8[i54] = 1;
 HEAP32[i10 + 16 >> 2] = 0;
 i25 = i10 + 20 | 0;
 HEAP32[i25 >> 2] = 0;
 i50 = i27 | 0;
 i21 = HEAP32[i50 >> 2] | 0;
 if ((i21 | 0) == 0) {
  i66 = 26;
 } else {
  i66 = (HEAP32[i21 + 4 >> 2] | 0) + 26 | 0;
 }
 i21 = i28 | 0;
 i46 = HEAP32[i21 >> 2] | 0;
 if ((i46 | 0) == 0) {
  i67 = 0;
 } else {
  i67 = HEAP32[i46 + 4 >> 2] | 0;
 }
 i46 = i29 | 0;
 i17 = HEAP32[i46 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i68 = 0;
 } else {
  i68 = HEAP32[i17 + 4 >> 2] | 0;
 }
 i17 = i30 | 0;
 i37 = HEAP32[i17 >> 2] | 0;
 if ((i37 | 0) == 0) {
  i69 = 0;
 } else {
  i69 = HEAP32[i37 + 4 >> 2] | 0;
 }
 i37 = (i35 | 0) == 0;
 if (i37) {
  i70 = 0;
 } else {
  i70 = HEAP32[i35 + 4 >> 2] | 0;
 }
 if ((i44 | 0) == 0) {
  i71 = 0;
 } else {
  i71 = HEAP32[i44 + 4 >> 2] | 0;
 }
 if ((i48 | 0) == 0) {
  i72 = 0;
 } else {
  i72 = HEAP32[i48 + 4 >> 2] | 0;
 }
 if ((i52 | 0) == 0) {
  i73 = 0;
 } else {
  i73 = HEAP32[i52 + 4 >> 2] | 0;
 }
 i52 = (i36 | 0) == 0;
 if (i52) {
  i74 = 0;
 } else {
  i74 = HEAP32[i36 + 4 >> 2] | 0;
 }
 if ((i45 | 0) == 0) {
  i75 = 0;
 } else {
  i75 = HEAP32[i45 + 4 >> 2] | 0;
 }
 if ((i49 | 0) == 0) {
  i76 = 0;
 } else {
  i76 = HEAP32[i49 + 4 >> 2] | 0;
 }
 if ((i53 | 0) == 0) {
  i77 = 0;
 } else {
  i77 = HEAP32[i53 + 4 >> 2] | 0;
 }
 i53 = i31 | 0;
 i49 = HEAP32[i53 >> 2] | 0;
 if ((i49 | 0) == 0) {
  i78 = 0;
 } else {
  i45 = HEAP32[i49 + 4 >> 2] | 0;
  i78 = (i45 | 0) == 0 ? 0 : i45 + 1 | 0;
 }
 __ZN3WTF13StringBuilder15reserveCapacityEj(i10, i67 + i66 + i68 + i69 + i70 + i71 + i72 + i73 + i74 + i75 + i76 + i77 + i78 | 0);
 __ZN3WTF13StringBuilder6appendEPKhj(i10, i55, 6);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i10, i27);
 __ZN3WTF13StringBuilder6appendEPKhj(i10, i6, 1);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i10, i28);
 __ZN3WTF13StringBuilder6appendEPKhj(i10, i6, 1);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i10, i29);
 __ZN3WTF13StringBuilder6appendEPKhj(i10, i6, 1);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i10, i30);
 if (!(i37 | i52)) {
  __ZN3WTF13StringBuilder6appendEPKhj(i10, i6, 1);
  __ZN3WTF13StringBuilder6appendEPKhj(i10, i2, 5);
  __ZN3WTF13StringBuilder6appendEPKhj(i10, i6, 1);
  __ZN3WTF13StringBuilder6appendERKNS_6StringE(i10, i11);
  __ZN3WTF13StringBuilder6appendEPKhj(i10, i6, 1);
  __ZN3WTF13StringBuilder6appendERKNS_6StringE(i10, i15);
  __ZN3WTF13StringBuilder6appendEPKhj(i10, i6, 1);
  __ZN3WTF13StringBuilder6appendERKNS_6StringE(i10, i19);
  __ZN3WTF13StringBuilder6appendEPKhj(i10, i6, 1);
  __ZN3WTF13StringBuilder6appendERKNS_6StringE(i10, i23);
  __ZN3WTF13StringBuilder6appendEPKhj(i10, i6, 1);
  __ZN3WTF13StringBuilder6appendEPKhj(i10, i8, _strlen(i8 | 0) | 0);
  __ZN3WTF13StringBuilder6appendEPKhj(i10, i6, 1);
  __ZN3WTF13StringBuilder6appendERKNS_6StringE(i10, i12);
  __ZN3WTF13StringBuilder6appendEPKhj(i10, i6, 1);
  __ZN3WTF13StringBuilder6appendERKNS_6StringE(i10, i16);
  __ZN3WTF13StringBuilder6appendEPKhj(i10, i6, 1);
  __ZN3WTF13StringBuilder6appendERKNS_6StringE(i10, i20);
  __ZN3WTF13StringBuilder6appendEPKhj(i10, i6, 1);
  __ZN3WTF13StringBuilder6appendERKNS_6StringE(i10, i24);
 }
 HEAP8[i4] = 41;
 i24 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i24 | 0) == 0) {
   i79 = 85;
  } else {
   i6 = HEAP32[i9 >> 2] | 0;
   if (i6 >>> 0 >= (HEAP32[i24 + 4 >> 2] | 0) >>> 0) {
    i79 = 85;
    break;
   }
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    i79 = 85;
    break;
   }
   i20 = (HEAP8[i54] & 1) == 0;
   HEAP32[i9 >> 2] = i6 + 1;
   if (i20) {
    HEAP16[(HEAP32[i10 + 20 >> 2] | 0) + (i6 << 1) >> 1] = 41;
    break;
   } else {
    HEAP8[(HEAP32[i25 >> 2] | 0) + i6 | 0] = 41;
    break;
   }
  }
 } while (0);
 if ((i79 | 0) == 85) {
  __ZN3WTF13StringBuilder6appendEPKhj(i10, i4, 1);
 }
 i4 = HEAP32[i53 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
    break;
   }
   HEAP8[i5] = 32;
   i24 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i24 | 0) == 0) {
     i79 = 94;
    } else {
     i6 = HEAP32[i9 >> 2] | 0;
     if (i6 >>> 0 >= (HEAP32[i24 + 4 >> 2] | 0) >>> 0) {
      i79 = 94;
      break;
     }
     if ((HEAP32[i7 >> 2] | 0) != 0) {
      i79 = 94;
      break;
     }
     i20 = (HEAP8[i54] & 1) == 0;
     HEAP32[i9 >> 2] = i6 + 1;
     if (i20) {
      HEAP16[(HEAP32[i10 + 20 >> 2] | 0) + (i6 << 1) >> 1] = 32;
      break;
     } else {
      HEAP8[(HEAP32[i25 >> 2] | 0) + i6 | 0] = 32;
      break;
     }
    }
   } while (0);
   if ((i79 | 0) == 94) {
    __ZN3WTF13StringBuilder6appendEPKhj(i10, i5, 1);
   }
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i10, i31);
  }
 } while (0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i10);
 i31 = HEAP32[i7 >> 2] | 0;
 if ((i31 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i10);
  i10 = HEAP32[i7 >> 2] | 0;
  HEAP32[i1 >> 2] = i10;
  if ((i10 | 0) != 0) {
   i80 = i10;
   i79 = 99;
  }
 } else {
  HEAP32[i1 >> 2] = i31;
  i80 = i31;
  i79 = 99;
 }
 if ((i79 | 0) == 99) {
  i79 = i80 | 0;
  HEAP32[i79 >> 2] = (HEAP32[i79 >> 2] | 0) + 2;
 }
 i79 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i79 | 0) != 0) {
   i26 = i79 | 0;
   i80 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i80 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i79);
    break;
   } else {
    HEAP32[i26 >> 2] = i80;
    break;
   }
  }
 } while (0);
 i79 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i79 | 0) != 0) {
   i7 = i79 | 0;
   i80 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i80 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i79);
    break;
   } else {
    HEAP32[i7 >> 2] = i80;
    break;
   }
  }
 } while (0);
 do {
  if (i64) {
   i79 = HEAP32[i53 >> 2] | 0;
   if ((i79 | 0) == 0) {
    break;
   }
   i80 = i79 | 0;
   i7 = (HEAP32[i80 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i79);
    break;
   } else {
    HEAP32[i80 >> 2] = i7;
    break;
   }
  }
 } while (0);
 do {
  if (i65) {
   i64 = HEAP32[i53 >> 2] | 0;
   if ((i64 | 0) == 0) {
    break;
   }
   i7 = i64 | 0;
   i80 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i80 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i64);
    break;
   } else {
    HEAP32[i7 >> 2] = i80;
    break;
   }
  }
 } while (0);
 do {
  if (i62) {
   i53 = HEAP32[i17 >> 2] | 0;
   if ((i53 | 0) == 0) {
    break;
   }
   i65 = i53 | 0;
   i80 = (HEAP32[i65 >> 2] | 0) - 2 | 0;
   if ((i80 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i53);
    break;
   } else {
    HEAP32[i65 >> 2] = i80;
    break;
   }
  }
 } while (0);
 do {
  if (i63) {
   i62 = HEAP32[i17 >> 2] | 0;
   if ((i62 | 0) == 0) {
    break;
   }
   i80 = i62 | 0;
   i65 = (HEAP32[i80 >> 2] | 0) - 2 | 0;
   if ((i65 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i62);
    break;
   } else {
    HEAP32[i80 >> 2] = i65;
    break;
   }
  }
 } while (0);
 do {
  if (i60) {
   i17 = HEAP32[i46 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   i63 = i17 | 0;
   i65 = (HEAP32[i63 >> 2] | 0) - 2 | 0;
   if ((i65 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i63 >> 2] = i65;
    break;
   }
  }
 } while (0);
 do {
  if (i61) {
   i60 = HEAP32[i46 >> 2] | 0;
   if ((i60 | 0) == 0) {
    break;
   }
   i65 = i60 | 0;
   i63 = (HEAP32[i65 >> 2] | 0) - 2 | 0;
   if ((i63 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i60);
    break;
   } else {
    HEAP32[i65 >> 2] = i63;
    break;
   }
  }
 } while (0);
 do {
  if (i58) {
   i46 = HEAP32[i21 >> 2] | 0;
   if ((i46 | 0) == 0) {
    break;
   }
   i61 = i46 | 0;
   i63 = (HEAP32[i61 >> 2] | 0) - 2 | 0;
   if ((i63 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i46);
    break;
   } else {
    HEAP32[i61 >> 2] = i63;
    break;
   }
  }
 } while (0);
 do {
  if (i59) {
   i58 = HEAP32[i21 >> 2] | 0;
   if ((i58 | 0) == 0) {
    break;
   }
   i63 = i58 | 0;
   i61 = (HEAP32[i63 >> 2] | 0) - 2 | 0;
   if ((i61 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i58);
    break;
   } else {
    HEAP32[i63 >> 2] = i61;
    break;
   }
  }
 } while (0);
 do {
  if (i56) {
   i21 = HEAP32[i50 >> 2] | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   i59 = i21 | 0;
   i61 = (HEAP32[i59 >> 2] | 0) - 2 | 0;
   if ((i61 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i59 >> 2] = i61;
    break;
   }
  }
 } while (0);
 do {
  if (i57) {
   i56 = HEAP32[i50 >> 2] | 0;
   if ((i56 | 0) == 0) {
    break;
   }
   i61 = i56 | 0;
   i59 = (HEAP32[i61 >> 2] | 0) - 2 | 0;
   if ((i59 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i56);
    break;
   } else {
    HEAP32[i61 >> 2] = i59;
    break;
   }
  }
 } while (0);
 i50 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i50 | 0) != 0) {
   i22 = i50 | 0;
   i57 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i57 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i50);
    break;
   } else {
    HEAP32[i22 >> 2] = i57;
    break;
   }
  }
 } while (0);
 i50 = HEAP32[i51 >> 2] | 0;
 do {
  if ((i50 | 0) != 0) {
   i51 = i50 | 0;
   i57 = (HEAP32[i51 >> 2] | 0) - 2 | 0;
   if ((i57 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i50);
    break;
   } else {
    HEAP32[i51 >> 2] = i57;
    break;
   }
  }
 } while (0);
 i50 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i50 | 0) != 0) {
   i18 = i50 | 0;
   i57 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i57 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i50);
    break;
   } else {
    HEAP32[i18 >> 2] = i57;
    break;
   }
  }
 } while (0);
 i50 = HEAP32[i47 >> 2] | 0;
 do {
  if ((i50 | 0) != 0) {
   i47 = i50 | 0;
   i57 = (HEAP32[i47 >> 2] | 0) - 2 | 0;
   if ((i57 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i50);
    break;
   } else {
    HEAP32[i47 >> 2] = i57;
    break;
   }
  }
 } while (0);
 i50 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i50 | 0) != 0) {
   i14 = i50 | 0;
   i57 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i57 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i50);
    break;
   } else {
    HEAP32[i14 >> 2] = i57;
    break;
   }
  }
 } while (0);
 i50 = HEAP32[i42 >> 2] | 0;
 do {
  if ((i50 | 0) != 0) {
   i42 = i50 | 0;
   i57 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
   if ((i57 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i50);
    break;
   } else {
    HEAP32[i42 >> 2] = i57;
    break;
   }
  }
 } while (0);
 i50 = HEAP32[i33 >> 2] | 0;
 do {
  if ((i50 | 0) != 0) {
   i33 = i50 | 0;
   i57 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
   if ((i57 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i50);
    break;
   } else {
    HEAP32[i33 >> 2] = i57;
    break;
   }
  }
 } while (0);
 i50 = HEAP32[i32 >> 2] | 0;
 if ((i50 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i32 = i50 | 0;
 i57 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
 if ((i57 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i50);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i32 >> 2] = i57;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore20CSSBasicShapePolygon7cssTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 72 | 0;
 i10 = i3 + 96 | 0;
 i11 = i3 + 104 | 0;
 i12 = i3 + 112 | 0;
 i13 = i2 + 20 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 L1 : do {
  if ((i14 | 0) == 0) {
   i15 = 0;
   i16 = 0;
  } else {
   if (i14 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i17 = __ZN3WTF18fastMallocGoodSizeEj(i14 << 2) | 0;
   i18 = __ZN3WTF10fastMallocEj(i17) | 0;
   if ((HEAP32[i13 >> 2] | 0) == 0) {
    i15 = 0;
    i16 = i18;
    break;
   }
   i19 = i2 + 12 | 0;
   i20 = i11;
   i21 = i11 | 0;
   i22 = 0;
   i23 = i17 >>> 2;
   i17 = i18;
   i18 = 0;
   L7 : while (1) {
    __ZNK7WebCore8CSSValue7cssTextEv(i11, HEAP32[(HEAP32[i19 >> 2] | 0) + (i18 << 2) >> 2] | 0);
    if ((i22 | 0) == (i23 | 0)) {
     i24 = i23 + 1 | 0;
     do {
      if (i17 >>> 0 > i11 >>> 0) {
       i25 = 10;
      } else {
       if ((i17 + (i23 << 2) | 0) >>> 0 <= i11 >>> 0) {
        i25 = 10;
        break;
       }
       i26 = i20 - i17 >> 2;
       i27 = i24 + (i23 >>> 2) | 0;
       i28 = i27 >>> 0 > 16 >>> 0 ? i27 : 16;
       i27 = i28 >>> 0 > i24 >>> 0 ? i28 : i24;
       do {
        if (i23 >>> 0 < i27 >>> 0) {
         if (i27 >>> 0 > 1073741823 >>> 0) {
          i25 = 17;
          break L7;
         }
         i28 = __ZN3WTF18fastMallocGoodSizeEj(i27 << 2) | 0;
         i29 = i28 >>> 2;
         i30 = __ZN3WTF10fastMallocEj(i28) | 0;
         i28 = i30;
         i31 = i17;
         _memcpy(i30 | 0, i31 | 0, i23 << 2) | 0;
         if ((i17 | 0) == 0) {
          i32 = i28;
          i33 = i29;
          break;
         }
         i30 = (i28 | 0) == (i17 | 0);
         __ZN3WTF8fastFreeEPv(i31);
         i32 = i30 ? 0 : i28;
         i33 = i30 ? 0 : i29;
        } else {
         i32 = i17;
         i33 = i23;
        }
       } while (0);
       i34 = i32 + (i26 << 2) | 0;
       i35 = i32;
       i36 = i33;
      }
     } while (0);
     do {
      if ((i25 | 0) == 10) {
       i25 = 0;
       i27 = i24 + (i23 >>> 2) | 0;
       i29 = i27 >>> 0 > 16 >>> 0 ? i27 : 16;
       i27 = i29 >>> 0 > i24 >>> 0 ? i29 : i24;
       if (i23 >>> 0 >= i27 >>> 0) {
        i34 = i11;
        i35 = i17;
        i36 = i23;
        break;
       }
       if (i27 >>> 0 > 1073741823 >>> 0) {
        i25 = 12;
        break L7;
       }
       i29 = __ZN3WTF18fastMallocGoodSizeEj(i27 << 2) | 0;
       i27 = i29 >>> 2;
       i30 = __ZN3WTF10fastMallocEj(i29) | 0;
       i29 = i30;
       i28 = i17;
       _memcpy(i30 | 0, i28 | 0, i23 << 2) | 0;
       if ((i17 | 0) == 0) {
        i34 = i11;
        i35 = i29;
        i36 = i27;
        break;
       }
       i30 = (i29 | 0) == (i17 | 0);
       __ZN3WTF8fastFreeEPv(i28);
       i34 = i11;
       i35 = i30 ? 0 : i29;
       i36 = i30 ? 0 : i27;
      }
     } while (0);
     i27 = i34 | 0;
     i30 = HEAP32[i27 >> 2] | 0;
     HEAP32[i27 >> 2] = 0;
     HEAP32[i35 + (i23 << 2) >> 2] = i30;
     i37 = i35;
     i38 = i36;
     i39 = i24;
    } else {
     i30 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = 0;
     HEAP32[i17 + (i22 << 2) >> 2] = i30;
     i37 = i17;
     i38 = i23;
     i39 = i22 + 1 | 0;
    }
    i30 = HEAP32[i21 >> 2] | 0;
    do {
     if ((i30 | 0) != 0) {
      i27 = i30 | 0;
      i29 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
      if ((i29 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i30);
       break;
      } else {
       HEAP32[i27 >> 2] = i29;
       break;
      }
     }
    } while (0);
    i30 = i18 + 1 | 0;
    if (i30 >>> 0 < (HEAP32[i13 >> 2] | 0) >>> 0) {
     i22 = i39;
     i23 = i38;
     i17 = i37;
     i18 = i30;
    } else {
     i15 = i39;
     i16 = i37;
     break L1;
    }
   }
   if ((i25 | 0) == 12) {
    _WTFCrash();
   } else if ((i25 | 0) == 17) {
    _WTFCrash();
   }
  }
 } while (0);
 i37 = i2 + 24 | 0;
 i39 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i39 | 0) == 0) {
  HEAP32[i12 >> 2] = 0;
  i40 = 1;
  i41 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i12, i39 | 0);
  i40 = 0;
  i41 = 1;
 }
 i39 = i8 | 0;
 i8 = i9 | 0;
 i9 = i10 | 0;
 i10 = i7 | 0;
 HEAP32[i10 >> 2] = 0;
 i2 = i7 + 4 | 0;
 HEAP32[i2 >> 2] = 0;
 i38 = i7 + 8 | 0;
 HEAP32[i38 >> 2] = 0;
 i13 = i7 + 12 | 0;
 HEAP8[i13] = 1;
 HEAP32[i7 + 16 >> 2] = 0;
 i36 = i7 + 20 | 0;
 HEAP32[i36 >> 2] = 0;
 _memcpy(i39 | 0, H_BASE + 96 | 0, 18) | 0;
 _memcpy(i8 | 0, H_BASE + 72 | 0, 18) | 0;
 HEAP8[i9] = HEAP8[H_BASE + 48 | 0] | 0;
 HEAP8[i9 + 1 | 0] = HEAP8[H_BASE + 49 | 0] | 0;
 HEAP8[i9 + 2 | 0] = HEAP8[H_BASE + 50 | 0] | 0;
 i35 = (i15 | 0) == 0;
 L41 : do {
  if (i35) {
   i42 = 17;
  } else {
   i34 = 0;
   i11 = 17;
   while (1) {
    i33 = HEAP32[i16 + (i34 << 2) >> 2] | 0;
    if ((i33 | 0) == 0) {
     i43 = 1;
    } else {
     i43 = (HEAP32[i33 + 4 >> 2] | 0) + 1 | 0;
    }
    i33 = i34 | 1;
    if (i15 >>> 0 <= i33 >>> 0) {
     break;
    }
    i32 = HEAP32[i16 + (i33 << 2) >> 2] | 0;
    if ((i32 | 0) == 0) {
     i44 = 0;
    } else {
     i44 = HEAP32[i32 + 4 >> 2] | 0;
    }
    i32 = i43 + ((i34 | 0) == 0 ? i11 : i11 + 2 | 0) + i44 | 0;
    i33 = i34 + 2 | 0;
    if (i33 >>> 0 < i15 >>> 0) {
     i34 = i33;
     i11 = i32;
    } else {
     i42 = i32;
     break L41;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i44 = i12 | 0;
 i43 = HEAP32[i44 >> 2] | 0;
 do {
  if ((i43 | 0) == 0) {
   i45 = i42;
  } else {
   i11 = HEAP32[i43 + 4 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i45 = i42;
    break;
   }
   i45 = i42 + 1 + i11 | 0;
  }
 } while (0);
 __ZN3WTF13StringBuilder15reserveCapacityEj(i7, i45);
 if ((HEAP32[i37 >> 2] | 0) == 1) {
  __ZN3WTF13StringBuilder6appendEPKhj(i7, i39, 17);
 } else {
  __ZN3WTF13StringBuilder6appendEPKhj(i7, i8, 17);
 }
 L61 : do {
  if (!i35) {
   i8 = i7 + 20 | 0;
   i39 = 0;
   while (1) {
    if ((i39 | 0) != 0) {
     __ZN3WTF13StringBuilder6appendEPKhj(i7, i9, 2);
    }
    __ZN3WTF13StringBuilder6appendERKNS_6StringE(i7, i16 + (i39 << 2) | 0);
    HEAP8[i4] = 32;
    i37 = HEAP32[i38 >> 2] | 0;
    do {
     if ((i37 | 0) == 0) {
      i25 = 54;
     } else {
      i45 = HEAP32[i10 >> 2] | 0;
      if (i45 >>> 0 >= (HEAP32[i37 + 4 >> 2] | 0) >>> 0) {
       i25 = 54;
       break;
      }
      if ((HEAP32[i2 >> 2] | 0) != 0) {
       i25 = 54;
       break;
      }
      i42 = (HEAP8[i13] & 1) == 0;
      HEAP32[i10 >> 2] = i45 + 1;
      if (i42) {
       HEAP16[(HEAP32[i8 >> 2] | 0) + (i45 << 1) >> 1] = 32;
       break;
      } else {
       HEAP8[(HEAP32[i36 >> 2] | 0) + i45 | 0] = 32;
       break;
      }
     }
    } while (0);
    if ((i25 | 0) == 54) {
     i25 = 0;
     __ZN3WTF13StringBuilder6appendEPKhj(i7, i4, 1);
    }
    i37 = i39 | 1;
    if (i15 >>> 0 <= i37 >>> 0) {
     break;
    }
    __ZN3WTF13StringBuilder6appendERKNS_6StringE(i7, i16 + (i37 << 2) | 0);
    i39 = i39 + 2 | 0;
    if (i39 >>> 0 >= i15 >>> 0) {
     break L61;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 HEAP8[i5] = 41;
 i4 = HEAP32[i38 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i25 = 64;
  } else {
   i9 = HEAP32[i10 >> 2] | 0;
   if (i9 >>> 0 >= (HEAP32[i4 + 4 >> 2] | 0) >>> 0) {
    i25 = 64;
    break;
   }
   if ((HEAP32[i2 >> 2] | 0) != 0) {
    i25 = 64;
    break;
   }
   i39 = (HEAP8[i13] & 1) == 0;
   HEAP32[i10 >> 2] = i9 + 1;
   if (i39) {
    HEAP16[(HEAP32[i7 + 20 >> 2] | 0) + (i9 << 1) >> 1] = 41;
    break;
   } else {
    HEAP8[(HEAP32[i36 >> 2] | 0) + i9 | 0] = 41;
    break;
   }
  }
 } while (0);
 if ((i25 | 0) == 64) {
  __ZN3WTF13StringBuilder6appendEPKhj(i7, i5, 1);
 }
 i5 = HEAP32[i44 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
    break;
   }
   HEAP8[i6] = 32;
   i4 = HEAP32[i38 >> 2] | 0;
   do {
    if ((i4 | 0) == 0) {
     i25 = 73;
    } else {
     i9 = HEAP32[i10 >> 2] | 0;
     if (i9 >>> 0 >= (HEAP32[i4 + 4 >> 2] | 0) >>> 0) {
      i25 = 73;
      break;
     }
     if ((HEAP32[i2 >> 2] | 0) != 0) {
      i25 = 73;
      break;
     }
     i39 = (HEAP8[i13] & 1) == 0;
     HEAP32[i10 >> 2] = i9 + 1;
     if (i39) {
      HEAP16[(HEAP32[i7 + 20 >> 2] | 0) + (i9 << 1) >> 1] = 32;
      break;
     } else {
      HEAP8[(HEAP32[i36 >> 2] | 0) + i9 | 0] = 32;
      break;
     }
    }
   } while (0);
   if ((i25 | 0) == 73) {
    __ZN3WTF13StringBuilder6appendEPKhj(i7, i6, 1);
   }
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i7, i12);
  }
 } while (0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i7);
 i12 = HEAP32[i2 >> 2] | 0;
 if ((i12 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i7);
  i7 = HEAP32[i2 >> 2] | 0;
  HEAP32[i1 >> 2] = i7;
  if ((i7 | 0) != 0) {
   i46 = i7;
   i25 = 78;
  }
 } else {
  HEAP32[i1 >> 2] = i12;
  i46 = i12;
  i25 = 78;
 }
 if ((i25 | 0) == 78) {
  i25 = i46 | 0;
  HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
 }
 i25 = HEAP32[i38 >> 2] | 0;
 do {
  if ((i25 | 0) != 0) {
   i38 = i25 | 0;
   i46 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
   if ((i46 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i25);
    break;
   } else {
    HEAP32[i38 >> 2] = i46;
    break;
   }
  }
 } while (0);
 i25 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i25 | 0) != 0) {
   i2 = i25 | 0;
   i46 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i46 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i25);
    break;
   } else {
    HEAP32[i2 >> 2] = i46;
    break;
   }
  }
 } while (0);
 do {
  if (i40) {
   i25 = HEAP32[i44 >> 2] | 0;
   if ((i25 | 0) == 0) {
    break;
   }
   i46 = i25 | 0;
   i2 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i25);
    break;
   } else {
    HEAP32[i46 >> 2] = i2;
    break;
   }
  }
 } while (0);
 do {
  if (i41) {
   i40 = HEAP32[i44 >> 2] | 0;
   if ((i40 | 0) == 0) {
    break;
   }
   i2 = i40 | 0;
   i46 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i46 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i40);
    break;
   } else {
    HEAP32[i2 >> 2] = i46;
    break;
   }
  }
 } while (0);
 if (!i35) {
  i35 = i16 + (i15 << 2) | 0;
  i15 = i16;
  while (1) {
   i44 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i44 | 0) != 0) {
     i41 = i44 | 0;
     i46 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
     if ((i46 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i44);
      break;
     } else {
      HEAP32[i41 >> 2] = i46;
      break;
     }
    }
   } while (0);
   i15 = i15 + 4 | 0;
   if ((i15 | 0) == (i35 | 0)) {
    break;
   }
  }
 }
 if ((i16 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF8fastFreeEPv(i16);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore27CSSBasicShapeInsetRectangle7cssTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 48 | 0;
 i7 = i3 + 72 | 0;
 i8 = i3 + 80 | 0;
 i9 = i3 + 88 | 0;
 i10 = i3 + 96 | 0;
 i11 = i3 + 104 | 0;
 i12 = i3 + 112 | 0;
 i13 = i3 + 120 | 0;
 __ZNK7WebCore8CSSValue7cssTextEv(i7, HEAP32[i2 + 16 >> 2] | 0);
 __ZNK7WebCore8CSSValue7cssTextEv(i8, HEAP32[i2 + 12 >> 2] | 0);
 __ZNK7WebCore8CSSValue7cssTextEv(i9, HEAP32[i2 + 20 >> 2] | 0);
 __ZNK7WebCore8CSSValue7cssTextEv(i10, HEAP32[i2 + 24 >> 2] | 0);
 i14 = HEAP32[i2 + 28 >> 2] | 0;
 if ((i14 | 0) == 0) {
  HEAP32[i11 >> 2] = 0;
  i15 = 1;
  i16 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i11, i14 | 0);
  i15 = 0;
  i16 = 1;
 }
 i14 = HEAP32[i2 + 32 >> 2] | 0;
 if ((i14 | 0) == 0) {
  HEAP32[i12 >> 2] = 0;
  i17 = 1;
  i18 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i12, i14 | 0);
  i17 = 0;
  i18 = 1;
 }
 i14 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i14 | 0) == 0) {
  HEAP32[i13 >> 2] = 0;
  i19 = 1;
  i20 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i13, i14 | 0);
  i19 = 0;
  i20 = 1;
 }
 i14 = i3 + 16 | 0;
 i2 = i3 + 40 | 0;
 _memcpy(i14 | 0, H_BASE + 24 | 0, 17) | 0;
 HEAP8[i2] = HEAP8[H_BASE + 48 | 0] | 0;
 HEAP8[i2 + 1 | 0] = HEAP8[H_BASE + 49 | 0] | 0;
 HEAP8[i2 + 2 | 0] = HEAP8[H_BASE + 50 | 0] | 0;
 i21 = i6 | 0;
 HEAP32[i21 >> 2] = 0;
 i22 = i6 + 4 | 0;
 HEAP32[i22 >> 2] = 0;
 i23 = i6 + 8 | 0;
 HEAP32[i23 >> 2] = 0;
 i24 = i6 + 12 | 0;
 HEAP8[i24] = 1;
 HEAP32[i6 + 16 >> 2] = 0;
 i25 = i6 + 20 | 0;
 HEAP32[i25 >> 2] = 0;
 i26 = i7 | 0;
 i27 = HEAP32[i26 >> 2] | 0;
 if ((i27 | 0) == 0) {
  i28 = 27;
 } else {
  i28 = (HEAP32[i27 + 4 >> 2] | 0) + 27 | 0;
 }
 i27 = i8 | 0;
 i29 = HEAP32[i27 >> 2] | 0;
 if ((i29 | 0) == 0) {
  i30 = 0;
 } else {
  i30 = HEAP32[i29 + 4 >> 2] | 0;
 }
 i29 = i9 | 0;
 i31 = HEAP32[i29 >> 2] | 0;
 if ((i31 | 0) == 0) {
  i32 = 0;
 } else {
  i32 = HEAP32[i31 + 4 >> 2] | 0;
 }
 i31 = i10 | 0;
 i33 = HEAP32[i31 >> 2] | 0;
 if ((i33 | 0) == 0) {
  i34 = 0;
 } else {
  i34 = HEAP32[i33 + 4 >> 2] | 0;
 }
 i33 = i11 | 0;
 i35 = HEAP32[i33 >> 2] | 0;
 if ((i35 | 0) == 0) {
  i36 = 0;
 } else {
  i36 = HEAP32[i35 + 4 >> 2] | 0;
 }
 i35 = i12 | 0;
 i37 = HEAP32[i35 >> 2] | 0;
 if ((i37 | 0) == 0) {
  i38 = 0;
 } else {
  i38 = HEAP32[i37 + 4 >> 2] | 0;
 }
 i37 = i13 | 0;
 i39 = HEAP32[i37 >> 2] | 0;
 if ((i39 | 0) == 0) {
  i40 = 0;
 } else {
  i41 = HEAP32[i39 + 4 >> 2] | 0;
  i40 = (i41 | 0) == 0 ? 0 : i41 + 1 | 0;
 }
 __ZN3WTF13StringBuilder15reserveCapacityEj(i6, i30 + i28 + i32 + i34 + i36 + i38 + i40 | 0);
 __ZN3WTF13StringBuilder6appendEPKhj(i6, i14, 16);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i7);
 __ZN3WTF13StringBuilder6appendEPKhj(i6, i2, 2);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i8);
 __ZN3WTF13StringBuilder6appendEPKhj(i6, i2, 2);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i9);
 __ZN3WTF13StringBuilder6appendEPKhj(i6, i2, 2);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i10);
 do {
  if ((HEAP32[i33 >> 2] | 0) != 0) {
   __ZN3WTF13StringBuilder6appendEPKhj(i6, i2, 2);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i11);
   if ((HEAP32[i35 >> 2] | 0) == 0) {
    break;
   }
   __ZN3WTF13StringBuilder6appendEPKhj(i6, i2, 2);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i12);
  }
 } while (0);
 HEAP8[i4] = 41;
 i12 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i42 = 33;
  } else {
   i2 = HEAP32[i21 >> 2] | 0;
   if (i2 >>> 0 >= (HEAP32[i12 + 4 >> 2] | 0) >>> 0) {
    i42 = 33;
    break;
   }
   if ((HEAP32[i22 >> 2] | 0) != 0) {
    i42 = 33;
    break;
   }
   i11 = (HEAP8[i24] & 1) == 0;
   HEAP32[i21 >> 2] = i2 + 1;
   if (i11) {
    HEAP16[(HEAP32[i6 + 20 >> 2] | 0) + (i2 << 1) >> 1] = 41;
    break;
   } else {
    HEAP8[(HEAP32[i25 >> 2] | 0) + i2 | 0] = 41;
    break;
   }
  }
 } while (0);
 if ((i42 | 0) == 33) {
  __ZN3WTF13StringBuilder6appendEPKhj(i6, i4, 1);
 }
 i4 = HEAP32[i37 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
    break;
   }
   HEAP8[i5] = 32;
   i12 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i12 | 0) == 0) {
     i42 = 42;
    } else {
     i2 = HEAP32[i21 >> 2] | 0;
     if (i2 >>> 0 >= (HEAP32[i12 + 4 >> 2] | 0) >>> 0) {
      i42 = 42;
      break;
     }
     if ((HEAP32[i22 >> 2] | 0) != 0) {
      i42 = 42;
      break;
     }
     i11 = (HEAP8[i24] & 1) == 0;
     HEAP32[i21 >> 2] = i2 + 1;
     if (i11) {
      HEAP16[(HEAP32[i6 + 20 >> 2] | 0) + (i2 << 1) >> 1] = 32;
      break;
     } else {
      HEAP8[(HEAP32[i25 >> 2] | 0) + i2 | 0] = 32;
      break;
     }
    }
   } while (0);
   if ((i42 | 0) == 42) {
    __ZN3WTF13StringBuilder6appendEPKhj(i6, i5, 1);
   }
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i13);
  }
 } while (0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i6);
 i13 = HEAP32[i22 >> 2] | 0;
 if ((i13 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i6);
  i6 = HEAP32[i22 >> 2] | 0;
  HEAP32[i1 >> 2] = i6;
  if ((i6 | 0) != 0) {
   i43 = i6;
   i42 = 47;
  }
 } else {
  HEAP32[i1 >> 2] = i13;
  i43 = i13;
  i42 = 47;
 }
 if ((i42 | 0) == 47) {
  i42 = i43 | 0;
  HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 2;
 }
 i42 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i42 | 0) != 0) {
   i23 = i42 | 0;
   i43 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i43 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i42);
    break;
   } else {
    HEAP32[i23 >> 2] = i43;
    break;
   }
  }
 } while (0);
 i42 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i42 | 0) != 0) {
   i22 = i42 | 0;
   i43 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i43 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i42);
    break;
   } else {
    HEAP32[i22 >> 2] = i43;
    break;
   }
  }
 } while (0);
 do {
  if (i19) {
   i42 = HEAP32[i37 >> 2] | 0;
   if ((i42 | 0) == 0) {
    break;
   }
   i43 = i42 | 0;
   i22 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i42);
    break;
   } else {
    HEAP32[i43 >> 2] = i22;
    break;
   }
  }
 } while (0);
 do {
  if (i20) {
   i19 = HEAP32[i37 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i22 = i19 | 0;
   i43 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i43 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i22 >> 2] = i43;
    break;
   }
  }
 } while (0);
 do {
  if (i17) {
   i37 = HEAP32[i35 >> 2] | 0;
   if ((i37 | 0) == 0) {
    break;
   }
   i20 = i37 | 0;
   i43 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i43 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i37);
    break;
   } else {
    HEAP32[i20 >> 2] = i43;
    break;
   }
  }
 } while (0);
 do {
  if (i18) {
   i17 = HEAP32[i35 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   i43 = i17 | 0;
   i20 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i43 >> 2] = i20;
    break;
   }
  }
 } while (0);
 do {
  if (i15) {
   i35 = HEAP32[i33 >> 2] | 0;
   if ((i35 | 0) == 0) {
    break;
   }
   i18 = i35 | 0;
   i20 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i35);
    break;
   } else {
    HEAP32[i18 >> 2] = i20;
    break;
   }
  }
 } while (0);
 do {
  if (i16) {
   i15 = HEAP32[i33 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i20 = i15 | 0;
   i18 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i20 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i33 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i31 = i33 | 0;
   i16 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i31 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i33 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i29 = i33 | 0;
   i16 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i29 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i33 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i27 = i33 | 0;
   i16 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i27 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i33 = HEAP32[i26 >> 2] | 0;
 if ((i33 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i26 = i33 | 0;
 i16 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
 if ((i16 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i33);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i26 >> 2] = i16;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore22CSSBasicShapeRectangle7cssTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 40 | 0;
 i7 = i3 + 64 | 0;
 i8 = i3 + 72 | 0;
 i9 = i3 + 80 | 0;
 i10 = i3 + 88 | 0;
 i11 = i3 + 96 | 0;
 i12 = i3 + 104 | 0;
 i13 = i3 + 112 | 0;
 __ZNK7WebCore8CSSValue7cssTextEv(i7, HEAP32[i2 + 16 >> 2] | 0);
 __ZNK7WebCore8CSSValue7cssTextEv(i8, HEAP32[i2 + 12 >> 2] | 0);
 __ZNK7WebCore8CSSValue7cssTextEv(i9, HEAP32[i2 + 20 >> 2] | 0);
 __ZNK7WebCore8CSSValue7cssTextEv(i10, HEAP32[i2 + 24 >> 2] | 0);
 i14 = HEAP32[i2 + 28 >> 2] | 0;
 if ((i14 | 0) == 0) {
  HEAP32[i11 >> 2] = 0;
  i15 = 1;
  i16 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i11, i14 | 0);
  i15 = 0;
  i16 = 1;
 }
 i14 = HEAP32[i2 + 32 >> 2] | 0;
 if ((i14 | 0) == 0) {
  HEAP32[i12 >> 2] = 0;
  i17 = 1;
  i18 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i12, i14 | 0);
  i17 = 0;
  i18 = 1;
 }
 i14 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i14 | 0) == 0) {
  HEAP32[i13 >> 2] = 0;
  i19 = 1;
  i20 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i13, i14 | 0);
  i19 = 0;
  i20 = 1;
 }
 i14 = i3 + 16 | 0;
 i2 = i3 + 32 | 0;
 _memcpy(i14 | 0, H_BASE + 56 | 0, 11) | 0;
 HEAP8[i2] = HEAP8[H_BASE + 48 | 0] | 0;
 HEAP8[i2 + 1 | 0] = HEAP8[H_BASE + 49 | 0] | 0;
 HEAP8[i2 + 2 | 0] = HEAP8[H_BASE + 50 | 0] | 0;
 i21 = i6 | 0;
 HEAP32[i21 >> 2] = 0;
 i22 = i6 + 4 | 0;
 HEAP32[i22 >> 2] = 0;
 i23 = i6 + 8 | 0;
 HEAP32[i23 >> 2] = 0;
 i24 = i6 + 12 | 0;
 HEAP8[i24] = 1;
 HEAP32[i6 + 16 >> 2] = 0;
 i25 = i6 + 20 | 0;
 HEAP32[i25 >> 2] = 0;
 i26 = i7 | 0;
 i27 = HEAP32[i26 >> 2] | 0;
 if ((i27 | 0) == 0) {
  i28 = 21;
 } else {
  i28 = (HEAP32[i27 + 4 >> 2] | 0) + 21 | 0;
 }
 i27 = i8 | 0;
 i29 = HEAP32[i27 >> 2] | 0;
 if ((i29 | 0) == 0) {
  i30 = 0;
 } else {
  i30 = HEAP32[i29 + 4 >> 2] | 0;
 }
 i29 = i9 | 0;
 i31 = HEAP32[i29 >> 2] | 0;
 if ((i31 | 0) == 0) {
  i32 = 0;
 } else {
  i32 = HEAP32[i31 + 4 >> 2] | 0;
 }
 i31 = i10 | 0;
 i33 = HEAP32[i31 >> 2] | 0;
 if ((i33 | 0) == 0) {
  i34 = 0;
 } else {
  i34 = HEAP32[i33 + 4 >> 2] | 0;
 }
 i33 = i11 | 0;
 i35 = HEAP32[i33 >> 2] | 0;
 if ((i35 | 0) == 0) {
  i36 = 0;
 } else {
  i36 = HEAP32[i35 + 4 >> 2] | 0;
 }
 i35 = i12 | 0;
 i37 = HEAP32[i35 >> 2] | 0;
 if ((i37 | 0) == 0) {
  i38 = 0;
 } else {
  i38 = HEAP32[i37 + 4 >> 2] | 0;
 }
 i37 = i13 | 0;
 i39 = HEAP32[i37 >> 2] | 0;
 if ((i39 | 0) == 0) {
  i40 = 0;
 } else {
  i41 = HEAP32[i39 + 4 >> 2] | 0;
  i40 = (i41 | 0) == 0 ? 0 : i41 + 1 | 0;
 }
 __ZN3WTF13StringBuilder15reserveCapacityEj(i6, i30 + i28 + i32 + i34 + i36 + i38 + i40 | 0);
 __ZN3WTF13StringBuilder6appendEPKhj(i6, i14, 10);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i7);
 __ZN3WTF13StringBuilder6appendEPKhj(i6, i2, 2);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i8);
 __ZN3WTF13StringBuilder6appendEPKhj(i6, i2, 2);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i9);
 __ZN3WTF13StringBuilder6appendEPKhj(i6, i2, 2);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i10);
 do {
  if ((HEAP32[i33 >> 2] | 0) != 0) {
   __ZN3WTF13StringBuilder6appendEPKhj(i6, i2, 2);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i11);
   if ((HEAP32[i35 >> 2] | 0) == 0) {
    break;
   }
   __ZN3WTF13StringBuilder6appendEPKhj(i6, i2, 2);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i12);
  }
 } while (0);
 HEAP8[i4] = 41;
 i12 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i42 = 33;
  } else {
   i2 = HEAP32[i21 >> 2] | 0;
   if (i2 >>> 0 >= (HEAP32[i12 + 4 >> 2] | 0) >>> 0) {
    i42 = 33;
    break;
   }
   if ((HEAP32[i22 >> 2] | 0) != 0) {
    i42 = 33;
    break;
   }
   i11 = (HEAP8[i24] & 1) == 0;
   HEAP32[i21 >> 2] = i2 + 1;
   if (i11) {
    HEAP16[(HEAP32[i6 + 20 >> 2] | 0) + (i2 << 1) >> 1] = 41;
    break;
   } else {
    HEAP8[(HEAP32[i25 >> 2] | 0) + i2 | 0] = 41;
    break;
   }
  }
 } while (0);
 if ((i42 | 0) == 33) {
  __ZN3WTF13StringBuilder6appendEPKhj(i6, i4, 1);
 }
 i4 = HEAP32[i37 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
    break;
   }
   HEAP8[i5] = 32;
   i12 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i12 | 0) == 0) {
     i42 = 42;
    } else {
     i2 = HEAP32[i21 >> 2] | 0;
     if (i2 >>> 0 >= (HEAP32[i12 + 4 >> 2] | 0) >>> 0) {
      i42 = 42;
      break;
     }
     if ((HEAP32[i22 >> 2] | 0) != 0) {
      i42 = 42;
      break;
     }
     i11 = (HEAP8[i24] & 1) == 0;
     HEAP32[i21 >> 2] = i2 + 1;
     if (i11) {
      HEAP16[(HEAP32[i6 + 20 >> 2] | 0) + (i2 << 1) >> 1] = 32;
      break;
     } else {
      HEAP8[(HEAP32[i25 >> 2] | 0) + i2 | 0] = 32;
      break;
     }
    }
   } while (0);
   if ((i42 | 0) == 42) {
    __ZN3WTF13StringBuilder6appendEPKhj(i6, i5, 1);
   }
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i13);
  }
 } while (0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i6);
 i13 = HEAP32[i22 >> 2] | 0;
 if ((i13 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i6);
  i6 = HEAP32[i22 >> 2] | 0;
  HEAP32[i1 >> 2] = i6;
  if ((i6 | 0) != 0) {
   i43 = i6;
   i42 = 47;
  }
 } else {
  HEAP32[i1 >> 2] = i13;
  i43 = i13;
  i42 = 47;
 }
 if ((i42 | 0) == 47) {
  i42 = i43 | 0;
  HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 2;
 }
 i42 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i42 | 0) != 0) {
   i23 = i42 | 0;
   i43 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i43 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i42);
    break;
   } else {
    HEAP32[i23 >> 2] = i43;
    break;
   }
  }
 } while (0);
 i42 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i42 | 0) != 0) {
   i22 = i42 | 0;
   i43 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i43 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i42);
    break;
   } else {
    HEAP32[i22 >> 2] = i43;
    break;
   }
  }
 } while (0);
 do {
  if (i19) {
   i42 = HEAP32[i37 >> 2] | 0;
   if ((i42 | 0) == 0) {
    break;
   }
   i43 = i42 | 0;
   i22 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i42);
    break;
   } else {
    HEAP32[i43 >> 2] = i22;
    break;
   }
  }
 } while (0);
 do {
  if (i20) {
   i19 = HEAP32[i37 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i22 = i19 | 0;
   i43 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i43 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i22 >> 2] = i43;
    break;
   }
  }
 } while (0);
 do {
  if (i17) {
   i37 = HEAP32[i35 >> 2] | 0;
   if ((i37 | 0) == 0) {
    break;
   }
   i20 = i37 | 0;
   i43 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i43 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i37);
    break;
   } else {
    HEAP32[i20 >> 2] = i43;
    break;
   }
  }
 } while (0);
 do {
  if (i18) {
   i17 = HEAP32[i35 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   i43 = i17 | 0;
   i20 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i43 >> 2] = i20;
    break;
   }
  }
 } while (0);
 do {
  if (i15) {
   i35 = HEAP32[i33 >> 2] | 0;
   if ((i35 | 0) == 0) {
    break;
   }
   i18 = i35 | 0;
   i20 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i35);
    break;
   } else {
    HEAP32[i18 >> 2] = i20;
    break;
   }
  }
 } while (0);
 do {
  if (i16) {
   i15 = HEAP32[i33 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i20 = i15 | 0;
   i18 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i20 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i33 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i31 = i33 | 0;
   i16 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i31 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i33 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i29 = i33 | 0;
   i16 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i29 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i33 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i27 = i33 | 0;
   i16 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i27 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i33 = HEAP32[i26 >> 2] | 0;
 if ((i33 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i26 = i33 | 0;
 i16 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
 if ((i16 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i33);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i26 >> 2] = i16;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore20CSSBasicShapeEllipse7cssTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 + 24 | 0;
 i5 = i3 + 32 | 0;
 i6 = i3 + 56 | 0;
 i7 = i3 + 64 | 0;
 i8 = i3 + 72 | 0;
 i9 = i3 + 80 | 0;
 i10 = i3 + 88 | 0;
 i11 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i11 | 0) == 0) {
  HEAP32[i6 >> 2] = 0;
  i12 = 1;
  i13 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i6, i11 | 0);
  i12 = 0;
  i13 = 1;
 }
 i11 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i11 | 0) == 0) {
  HEAP32[i7 >> 2] = 0;
  i14 = 1;
  i15 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i7, i11 | 0);
  i14 = 0;
  i15 = 1;
 }
 i11 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i11 | 0) == 0) {
  HEAP32[i8 >> 2] = 0;
  i16 = 1;
  i17 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i8, i11 | 0);
  i16 = 0;
  i17 = 1;
 }
 i11 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i11 | 0) == 0) {
  HEAP32[i9 >> 2] = 0;
  i18 = 1;
  i19 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i9, i11 | 0);
  i18 = 0;
  i19 = 1;
 }
 i11 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i11 | 0) == 0) {
  HEAP32[i10 >> 2] = 0;
  i20 = 1;
  i21 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i10, i11 | 0);
  i20 = 0;
  i21 = 1;
 }
 i11 = i3 | 0;
 i2 = i3 + 16 | 0;
 i22 = i4;
 _memcpy(i11 | 0, H_BASE + 120 | 0, 9) | 0;
 HEAP8[i2] = HEAP8[H_BASE + 136 | 0] | 0;
 HEAP8[i2 + 1 | 0] = HEAP8[H_BASE + 137 | 0] | 0;
 HEAP8[i2 + 2 | 0] = HEAP8[H_BASE + 138 | 0] | 0;
 HEAP16[i4 >> 1] = 32;
 HEAP32[i5 >> 2] = 0;
 i4 = i5 + 4 | 0;
 HEAP32[i4 >> 2] = 0;
 i23 = i5 + 8 | 0;
 HEAP32[i23 >> 2] = 0;
 HEAP8[i5 + 12 | 0] = 1;
 HEAP32[i5 + 16 >> 2] = 0;
 HEAP32[i5 + 20 >> 2] = 0;
 __ZN3WTF13StringBuilder6appendEPKhj(i5, i11, 8);
 i11 = i6 | 0;
 if ((HEAP32[i11 >> 2] | 0) == 0) {
  i24 = 0;
 } else {
  __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i6);
  i24 = 1;
 }
 i6 = i7 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  i25 = i24;
 } else {
  if (i24) {
   __ZN3WTF13StringBuilder6appendEPKhj(i5, i22, 1);
  }
  __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i7);
  i25 = 1;
 }
 i7 = i8 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  if ((HEAP32[i9 >> 2] | 0) != 0) {
   i26 = 24;
  }
 } else {
  i26 = 24;
 }
 if ((i26 | 0) == 24) {
  if (i25) {
   __ZN3WTF13StringBuilder6appendEPKhj(i5, i22, 1);
  }
  __ZN3WTF13StringBuilder6appendEPKhj(i5, i2, 2);
  __ZN3WTF13StringBuilder6appendEPKhj(i5, i22, 1);
  __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i8);
  __ZN3WTF13StringBuilder6appendEPKhj(i5, i22, 1);
  __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i9);
 }
 __ZN3WTF13StringBuilder6appendEPKhj(i5, H_BASE + 8 | 0, 1);
 i8 = i10 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN3WTF13StringBuilder6appendEPKhj(i5, i22, 1);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i10);
  }
 } while (0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i5);
 i10 = HEAP32[i4 >> 2] | 0;
 if ((i10 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i5);
  i5 = HEAP32[i4 >> 2] | 0;
  HEAP32[i1 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i27 = i5;
   i26 = 33;
  }
 } else {
  HEAP32[i1 >> 2] = i10;
  i27 = i10;
  i26 = 33;
 }
 if ((i26 | 0) == 33) {
  i26 = i27 | 0;
  HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
 }
 i26 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i26 | 0) != 0) {
   i23 = i26 | 0;
   i27 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i27 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i26);
    break;
   } else {
    HEAP32[i23 >> 2] = i27;
    break;
   }
  }
 } while (0);
 i26 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i26 | 0) != 0) {
   i4 = i26 | 0;
   i27 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i27 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i26);
    break;
   } else {
    HEAP32[i4 >> 2] = i27;
    break;
   }
  }
 } while (0);
 do {
  if (i20) {
   i26 = HEAP32[i8 >> 2] | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   i27 = i26 | 0;
   i4 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i26);
    break;
   } else {
    HEAP32[i27 >> 2] = i4;
    break;
   }
  }
 } while (0);
 do {
  if (i21) {
   i20 = HEAP32[i8 >> 2] | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   i4 = i20 | 0;
   i27 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i27 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i4 >> 2] = i27;
    break;
   }
  }
 } while (0);
 do {
  if (i18) {
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i21 = i8 | 0;
   i27 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i27 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i21 >> 2] = i27;
    break;
   }
  }
 } while (0);
 do {
  if (i19) {
   i18 = HEAP32[i9 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   i27 = i18 | 0;
   i21 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i27 >> 2] = i21;
    break;
   }
  }
 } while (0);
 do {
  if (i16) {
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i19 = i9 | 0;
   i21 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i19 >> 2] = i21;
    break;
   }
  }
 } while (0);
 do {
  if (i17) {
   i16 = HEAP32[i7 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   i21 = i16 | 0;
   i19 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i21 >> 2] = i19;
    break;
   }
  }
 } while (0);
 do {
  if (i14) {
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i17 = i7 | 0;
   i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i17 >> 2] = i19;
    break;
   }
  }
 } while (0);
 do {
  if (i15) {
   i14 = HEAP32[i6 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i19 = i14 | 0;
   i17 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i19 >> 2] = i17;
    break;
   }
  }
 } while (0);
 do {
  if (i12) {
   i6 = HEAP32[i11 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i15 = i6 | 0;
   i17 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i15 >> 2] = i17;
    break;
   }
  }
 } while (0);
 if (!i13) {
  STACKTOP = i3;
  return;
 }
 i13 = HEAP32[i11 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i13 | 0;
 i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i12 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i13);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i11 >> 2] = i12;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore19CSSBasicShapeCircle7cssTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 48 | 0;
 i8 = i3 + 56 | 0;
 i9 = i3 + 64 | 0;
 i10 = i3 + 72 | 0;
 i11 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i11 | 0) == 0) {
  HEAP32[i7 >> 2] = 0;
  i12 = 1;
  i13 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i7, i11 | 0);
  i12 = 0;
  i13 = 1;
 }
 i11 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i11 | 0) == 0) {
  HEAP32[i8 >> 2] = 0;
  i14 = 1;
  i15 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i8, i11 | 0);
  i14 = 0;
  i15 = 1;
 }
 i11 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i11 | 0) == 0) {
  HEAP32[i9 >> 2] = 0;
  i16 = 1;
  i17 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i9, i11 | 0);
  i16 = 0;
  i17 = 1;
 }
 i11 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i11 | 0) == 0) {
  HEAP32[i10 >> 2] = 0;
  i18 = 1;
  i19 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i10, i11 | 0);
  i18 = 0;
  i19 = 1;
 }
 i11 = i3 + 8 | 0;
 i2 = i5;
 HEAP32[i4 >> 2] = 1668442467;
 HEAP32[i4 + 4 >> 2] = 2647404;
 HEAP8[i11] = HEAP8[H_BASE + 136 | 0] | 0;
 HEAP8[i11 + 1 | 0] = HEAP8[H_BASE + 137 | 0] | 0;
 HEAP8[i11 + 2 | 0] = HEAP8[H_BASE + 138 | 0] | 0;
 HEAP16[i5 >> 1] = 32;
 HEAP32[i6 >> 2] = 0;
 i5 = i6 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i20 = i6 + 8 | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP8[i6 + 12 | 0] = 1;
 HEAP32[i6 + 16 >> 2] = 0;
 HEAP32[i6 + 20 >> 2] = 0;
 __ZN3WTF13StringBuilder6appendEPKhj(i6, i4, 7);
 i4 = i7 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i7);
 }
 i7 = i8 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  if ((HEAP32[i9 >> 2] | 0) != 0) {
   i21 = 17;
  }
 } else {
  i21 = 17;
 }
 if ((i21 | 0) == 17) {
  if ((HEAP32[i4 >> 2] | 0) != 0) {
   __ZN3WTF13StringBuilder6appendEPKhj(i6, i2, 1);
  }
  __ZN3WTF13StringBuilder6appendEPKhj(i6, i11, 2);
  __ZN3WTF13StringBuilder6appendEPKhj(i6, i2, 1);
  __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i8);
  __ZN3WTF13StringBuilder6appendEPKhj(i6, i2, 1);
  __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i9);
 }
 __ZN3WTF13StringBuilder6appendEPKhj(i6, H_BASE + 8 | 0, 1);
 i8 = i10 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   if ((HEAP32[i11 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN3WTF13StringBuilder6appendEPKhj(i6, i2, 1);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i10);
  }
 } while (0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i6);
 i10 = HEAP32[i5 >> 2] | 0;
 if ((i10 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i6);
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i1 >> 2] = i6;
  if ((i6 | 0) != 0) {
   i22 = i6;
   i21 = 26;
  }
 } else {
  HEAP32[i1 >> 2] = i10;
  i22 = i10;
  i21 = 26;
 }
 if ((i21 | 0) == 26) {
  i21 = i22 | 0;
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
 }
 i21 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i20 = i21 | 0;
   i22 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i20 >> 2] = i22;
    break;
   }
  }
 } while (0);
 i21 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i5 = i21 | 0;
   i22 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i5 >> 2] = i22;
    break;
   }
  }
 } while (0);
 do {
  if (i18) {
   i21 = HEAP32[i8 >> 2] | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   i22 = i21 | 0;
   i5 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i22 >> 2] = i5;
    break;
   }
  }
 } while (0);
 do {
  if (i19) {
   i18 = HEAP32[i8 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   i5 = i18 | 0;
   i22 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i5 >> 2] = i22;
    break;
   }
  }
 } while (0);
 do {
  if (i16) {
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i19 = i8 | 0;
   i22 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i19 >> 2] = i22;
    break;
   }
  }
 } while (0);
 do {
  if (i17) {
   i16 = HEAP32[i9 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   i22 = i16 | 0;
   i19 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i22 >> 2] = i19;
    break;
   }
  }
 } while (0);
 do {
  if (i14) {
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i17 = i9 | 0;
   i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i17 >> 2] = i19;
    break;
   }
  }
 } while (0);
 do {
  if (i15) {
   i14 = HEAP32[i7 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i19 = i14 | 0;
   i17 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i19 >> 2] = i17;
    break;
   }
  }
 } while (0);
 do {
  if (i12) {
   i7 = HEAP32[i4 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i15 = i7 | 0;
   i17 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i15 >> 2] = i17;
    break;
   }
  }
 } while (0);
 if (!i13) {
  STACKTOP = i3;
  return;
 }
 i13 = HEAP32[i4 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i13 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i12 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i13);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i12;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore30CSSDeprecatedBasicShapeEllipse7cssTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 64 | 0;
 i8 = i3 + 72 | 0;
 i9 = i3 + 80 | 0;
 i10 = i3 + 88 | 0;
 i11 = i3 + 96 | 0;
 __ZNK7WebCore8CSSValue7cssTextEv(i7, HEAP32[i2 + 12 >> 2] | 0);
 __ZNK7WebCore8CSSValue7cssTextEv(i8, HEAP32[i2 + 16 >> 2] | 0);
 __ZNK7WebCore8CSSValue7cssTextEv(i9, HEAP32[i2 + 20 >> 2] | 0);
 __ZNK7WebCore8CSSValue7cssTextEv(i10, HEAP32[i2 + 24 >> 2] | 0);
 i12 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i12 | 0) == 0) {
  HEAP32[i11 >> 2] = 0;
  i13 = 1;
  i14 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i11, i12 | 0);
  i13 = 0;
  i14 = 1;
 }
 i12 = i3 + 40 | 0;
 i2 = i3 + 56 | 0;
 i15 = i6 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i6 + 4 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i6 + 8 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i6 + 12 | 0;
 HEAP8[i18] = 1;
 HEAP32[i6 + 16 >> 2] = 0;
 i19 = i6 + 20 | 0;
 HEAP32[i19 >> 2] = 0;
 _memcpy(i12 | 0, H_BASE + 120 | 0, 9) | 0;
 HEAP8[i2] = HEAP8[H_BASE + 48 | 0] | 0;
 HEAP8[i2 + 1 | 0] = HEAP8[H_BASE + 49 | 0] | 0;
 HEAP8[i2 + 2 | 0] = HEAP8[H_BASE + 50 | 0] | 0;
 __ZN3WTF13StringBuilder6appendEPKhj(i6, i12, 8);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i7);
 __ZN3WTF13StringBuilder6appendEPKhj(i6, i2, 2);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i8);
 __ZN3WTF13StringBuilder6appendEPKhj(i6, i2, 2);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i9);
 __ZN3WTF13StringBuilder6appendEPKhj(i6, i2, 2);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i10);
 HEAP8[i5] = 41;
 i2 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i20 = 10;
  } else {
   i12 = HEAP32[i15 >> 2] | 0;
   if (i12 >>> 0 >= (HEAP32[i2 + 4 >> 2] | 0) >>> 0) {
    i20 = 10;
    break;
   }
   if ((HEAP32[i16 >> 2] | 0) != 0) {
    i20 = 10;
    break;
   }
   i21 = (HEAP8[i18] & 1) == 0;
   HEAP32[i15 >> 2] = i12 + 1;
   if (i21) {
    HEAP16[(HEAP32[i6 + 20 >> 2] | 0) + (i12 << 1) >> 1] = 41;
    break;
   } else {
    HEAP8[(HEAP32[i19 >> 2] | 0) + i12 | 0] = 41;
    break;
   }
  }
 } while (0);
 if ((i20 | 0) == 10) {
  __ZN3WTF13StringBuilder6appendEPKhj(i6, i5, 1);
 }
 i5 = i11 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
    break;
   }
   HEAP8[i4] = 32;
   i12 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i12 | 0) == 0) {
     i20 = 19;
    } else {
     i21 = HEAP32[i15 >> 2] | 0;
     if (i21 >>> 0 >= (HEAP32[i12 + 4 >> 2] | 0) >>> 0) {
      i20 = 19;
      break;
     }
     if ((HEAP32[i16 >> 2] | 0) != 0) {
      i20 = 19;
      break;
     }
     i22 = (HEAP8[i18] & 1) == 0;
     HEAP32[i15 >> 2] = i21 + 1;
     if (i22) {
      HEAP16[(HEAP32[i6 + 20 >> 2] | 0) + (i21 << 1) >> 1] = 32;
      break;
     } else {
      HEAP8[(HEAP32[i19 >> 2] | 0) + i21 | 0] = 32;
      break;
     }
    }
   } while (0);
   if ((i20 | 0) == 19) {
    __ZN3WTF13StringBuilder6appendEPKhj(i6, i4, 1);
   }
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i11);
  }
 } while (0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i6);
 i11 = HEAP32[i16 >> 2] | 0;
 if ((i11 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i6);
  i6 = HEAP32[i16 >> 2] | 0;
  HEAP32[i1 >> 2] = i6;
  if ((i6 | 0) != 0) {
   i23 = i6;
   i20 = 24;
  }
 } else {
  HEAP32[i1 >> 2] = i11;
  i23 = i11;
  i20 = 24;
 }
 if ((i20 | 0) == 24) {
  i20 = i23 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
 }
 i20 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i17 = i20 | 0;
   i23 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i23 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i17 >> 2] = i23;
    break;
   }
  }
 } while (0);
 i20 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i16 = i20 | 0;
   i23 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i23 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i16 >> 2] = i23;
    break;
   }
  }
 } while (0);
 do {
  if (i13) {
   i20 = HEAP32[i5 >> 2] | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   i23 = i20 | 0;
   i16 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i23 >> 2] = i16;
    break;
   }
  }
 } while (0);
 do {
  if (i14) {
   i13 = HEAP32[i5 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i16 = i13 | 0;
   i23 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i23 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i16 >> 2] = i23;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 | 0;
   i14 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i10 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 | 0;
   i14 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i9 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 | 0;
   i14 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i8 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i5 | 0;
 i14 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i14 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i14;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore29CSSDeprecatedBasicShapeCircle7cssTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 56 | 0;
 i9 = i3 + 64 | 0;
 i10 = i3 + 72 | 0;
 i11 = i3 + 80 | 0;
 __ZNK7WebCore8CSSValue7cssTextEv(i8, HEAP32[i2 + 16 >> 2] | 0);
 __ZNK7WebCore8CSSValue7cssTextEv(i9, HEAP32[i2 + 12 >> 2] | 0);
 __ZNK7WebCore8CSSValue7cssTextEv(i10, HEAP32[i2 + 20 >> 2] | 0);
 i12 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i12 | 0) == 0) {
  HEAP32[i11 >> 2] = 0;
  i13 = 1;
  i14 = 0;
 } else {
  __ZNK7WebCore8CSSValue7cssTextEv(i11, i12 | 0);
  i13 = 0;
  i14 = 1;
 }
 i12 = i3 + 48 | 0;
 i2 = i6 | 0;
 HEAP32[i2 >> 2] = 0;
 i15 = i6 + 4 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i6 + 8 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i6 + 12 | 0;
 HEAP8[i17] = 1;
 HEAP32[i6 + 16 >> 2] = 0;
 i18 = i6 + 20 | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i7 >> 2] = 1668442467;
 HEAP32[i7 + 4 >> 2] = 2647404;
 HEAP8[i12] = HEAP8[H_BASE + 48 | 0] | 0;
 HEAP8[i12 + 1 | 0] = HEAP8[H_BASE + 49 | 0] | 0;
 HEAP8[i12 + 2 | 0] = HEAP8[H_BASE + 50 | 0] | 0;
 __ZN3WTF13StringBuilder6appendEPKhj(i6, i7, 7);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i8);
 __ZN3WTF13StringBuilder6appendEPKhj(i6, i12, 2);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i9);
 __ZN3WTF13StringBuilder6appendEPKhj(i6, i12, 2);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i10);
 HEAP8[i5] = 41;
 i12 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i19 = 10;
  } else {
   i7 = HEAP32[i2 >> 2] | 0;
   if (i7 >>> 0 >= (HEAP32[i12 + 4 >> 2] | 0) >>> 0) {
    i19 = 10;
    break;
   }
   if ((HEAP32[i15 >> 2] | 0) != 0) {
    i19 = 10;
    break;
   }
   i20 = (HEAP8[i17] & 1) == 0;
   HEAP32[i2 >> 2] = i7 + 1;
   if (i20) {
    HEAP16[(HEAP32[i6 + 20 >> 2] | 0) + (i7 << 1) >> 1] = 41;
    break;
   } else {
    HEAP8[(HEAP32[i18 >> 2] | 0) + i7 | 0] = 41;
    break;
   }
  }
 } while (0);
 if ((i19 | 0) == 10) {
  __ZN3WTF13StringBuilder6appendEPKhj(i6, i5, 1);
 }
 i5 = i11 | 0;
 i12 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   if ((HEAP32[i12 + 4 >> 2] | 0) == 0) {
    break;
   }
   HEAP8[i4] = 32;
   i7 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i7 | 0) == 0) {
     i19 = 19;
    } else {
     i20 = HEAP32[i2 >> 2] | 0;
     if (i20 >>> 0 >= (HEAP32[i7 + 4 >> 2] | 0) >>> 0) {
      i19 = 19;
      break;
     }
     if ((HEAP32[i15 >> 2] | 0) != 0) {
      i19 = 19;
      break;
     }
     i21 = (HEAP8[i17] & 1) == 0;
     HEAP32[i2 >> 2] = i20 + 1;
     if (i21) {
      HEAP16[(HEAP32[i6 + 20 >> 2] | 0) + (i20 << 1) >> 1] = 32;
      break;
     } else {
      HEAP8[(HEAP32[i18 >> 2] | 0) + i20 | 0] = 32;
      break;
     }
    }
   } while (0);
   if ((i19 | 0) == 19) {
    __ZN3WTF13StringBuilder6appendEPKhj(i6, i4, 1);
   }
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i11);
  }
 } while (0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i6);
 i11 = HEAP32[i15 >> 2] | 0;
 if ((i11 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i6);
  i6 = HEAP32[i15 >> 2] | 0;
  HEAP32[i1 >> 2] = i6;
  if ((i6 | 0) != 0) {
   i22 = i6;
   i19 = 24;
  }
 } else {
  HEAP32[i1 >> 2] = i11;
  i22 = i11;
  i19 = 24;
 }
 if ((i19 | 0) == 24) {
  i19 = i22 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
 }
 i19 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i16 = i19 | 0;
   i22 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i16 >> 2] = i22;
    break;
   }
  }
 } while (0);
 i19 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i15 = i19 | 0;
   i22 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i15 >> 2] = i22;
    break;
   }
  }
 } while (0);
 do {
  if (i13) {
   i19 = HEAP32[i5 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i22 = i19 | 0;
   i15 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i22 >> 2] = i15;
    break;
   }
  }
 } while (0);
 do {
  if (i14) {
   i13 = HEAP32[i5 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i15 = i13 | 0;
   i22 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i15 >> 2] = i22;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 | 0;
   i14 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i10 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 | 0;
   i14 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i9 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i5 | 0;
 i14 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i14 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i8 >> 2] = i14;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore18CSSBasicShapeInset6equalsERKNS_13CSSBasicShapeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((FUNCTION_TABLE_ii[HEAP32[HEAP32[i2 >> 2] >> 2] & 31](i2) | 0) != 7) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 i6 = HEAP32[i2 + 12 >> 2] | 0;
 i7 = (i6 | 0) == 0;
 do {
  if (i5 | i7) {
   if (i5 & i7) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i4, i6) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i6 = HEAP32[i1 + 16 >> 2] | 0;
 i4 = (i6 | 0) == 0;
 i7 = HEAP32[i2 + 16 >> 2] | 0;
 i5 = (i7 | 0) == 0;
 do {
  if (i4 | i5) {
   if (i4 & i5) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i6, i7) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i7 = HEAP32[i1 + 20 >> 2] | 0;
 i6 = (i7 | 0) == 0;
 i5 = HEAP32[i2 + 20 >> 2] | 0;
 i4 = (i5 | 0) == 0;
 do {
  if (i6 | i4) {
   if (i6 & i4) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i7, i5) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 i7 = (i5 | 0) == 0;
 i4 = HEAP32[i2 + 24 >> 2] | 0;
 i6 = (i4 | 0) == 0;
 do {
  if (i7 | i6) {
   if (i7 & i6) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i5, i4) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 i6 = HEAP32[i2 + 28 >> 2] | 0;
 i7 = (i6 | 0) == 0;
 do {
  if (i5 | i7) {
   if (i5 & i7) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i4, i6) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i6 = HEAP32[i1 + 32 >> 2] | 0;
 i4 = (i6 | 0) == 0;
 i7 = HEAP32[i2 + 32 >> 2] | 0;
 i5 = (i7 | 0) == 0;
 do {
  if (i4 | i5) {
   if (i4 & i5) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i6, i7) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i7 = HEAP32[i1 + 36 >> 2] | 0;
 i6 = (i7 | 0) == 0;
 i5 = HEAP32[i2 + 36 >> 2] | 0;
 i4 = (i5 | 0) == 0;
 do {
  if (i6 | i4) {
   if (i6 & i4) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i7, i5) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 40 >> 2] | 0;
 i1 = (i5 | 0) == 0;
 i7 = HEAP32[i2 + 40 >> 2] | 0;
 i2 = (i7 | 0) == 0;
 if (i1 | i2) {
  i3 = i1 & i2;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i5, i7) | 0;
 return i3 | 0;
}
function __ZNK7WebCore27CSSBasicShapeInsetRectangle6equalsERKNS_13CSSBasicShapeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((FUNCTION_TABLE_ii[HEAP32[HEAP32[i2 >> 2] >> 2] & 31](i2) | 0) != 4) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 i6 = HEAP32[i2 + 16 >> 2] | 0;
 i7 = (i6 | 0) == 0;
 do {
  if (i5 | i7) {
   if (i5 & i7) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i4, i6) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 i4 = (i6 | 0) == 0;
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 i5 = (i7 | 0) == 0;
 do {
  if (i4 | i5) {
   if (i4 & i5) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i6, i7) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i7 = HEAP32[i1 + 20 >> 2] | 0;
 i6 = (i7 | 0) == 0;
 i5 = HEAP32[i2 + 20 >> 2] | 0;
 i4 = (i5 | 0) == 0;
 do {
  if (i6 | i4) {
   if (i6 & i4) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i7, i5) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 i7 = (i5 | 0) == 0;
 i4 = HEAP32[i2 + 24 >> 2] | 0;
 i6 = (i4 | 0) == 0;
 do {
  if (i7 | i6) {
   if (i7 & i6) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i5, i4) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 i6 = HEAP32[i2 + 28 >> 2] | 0;
 i7 = (i6 | 0) == 0;
 do {
  if (i5 | i7) {
   if (i5 & i7) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i4, i6) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i6 = HEAP32[i1 + 32 >> 2] | 0;
 i4 = (i6 | 0) == 0;
 i7 = HEAP32[i2 + 32 >> 2] | 0;
 i5 = (i7 | 0) == 0;
 do {
  if (i4 | i5) {
   if (i4 & i5) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i6, i7) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = (i7 | 0) == 0;
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = (i6 | 0) == 0;
 if (i1 | i2) {
  i3 = i1 & i2;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i7, i6) | 0;
 return i3 | 0;
}
function __ZNK7WebCore22CSSBasicShapeRectangle6equalsERKNS_13CSSBasicShapeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((FUNCTION_TABLE_ii[HEAP32[HEAP32[i2 >> 2] >> 2] & 31](i2) | 0) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 i6 = HEAP32[i2 + 16 >> 2] | 0;
 i7 = (i6 | 0) == 0;
 do {
  if (i5 | i7) {
   if (i5 & i7) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i4, i6) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 i4 = (i6 | 0) == 0;
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 i5 = (i7 | 0) == 0;
 do {
  if (i4 | i5) {
   if (i4 & i5) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i6, i7) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i7 = HEAP32[i1 + 20 >> 2] | 0;
 i6 = (i7 | 0) == 0;
 i5 = HEAP32[i2 + 20 >> 2] | 0;
 i4 = (i5 | 0) == 0;
 do {
  if (i6 | i4) {
   if (i6 & i4) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i7, i5) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 i7 = (i5 | 0) == 0;
 i4 = HEAP32[i2 + 24 >> 2] | 0;
 i6 = (i4 | 0) == 0;
 do {
  if (i7 | i6) {
   if (i7 & i6) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i5, i4) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 i6 = HEAP32[i2 + 28 >> 2] | 0;
 i7 = (i6 | 0) == 0;
 do {
  if (i5 | i7) {
   if (i5 & i7) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i4, i6) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i6 = HEAP32[i1 + 32 >> 2] | 0;
 i4 = (i6 | 0) == 0;
 i7 = HEAP32[i2 + 32 >> 2] | 0;
 i5 = (i7 | 0) == 0;
 do {
  if (i4 | i5) {
   if (i4 & i5) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i6, i7) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = (i7 | 0) == 0;
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = (i6 | 0) == 0;
 if (i1 | i2) {
  i3 = i1 & i2;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i7, i6) | 0;
 return i3 | 0;
}
function __ZN7WebCore18CSSBasicShapeInsetD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 448;
 i3 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i2 >> 2] = H_BASE + 488;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_vi + 22;
}
function __ZN7WebCore27CSSBasicShapeInsetRectangleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 248;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i2 >> 2] = H_BASE + 488;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore22CSSBasicShapeRectangleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 288;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i2 >> 2] = H_BASE + 488;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZNK7WebCore30CSSDeprecatedBasicShapeEllipse6equalsERKNS_13CSSBasicShapeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((FUNCTION_TABLE_ii[HEAP32[HEAP32[i2 >> 2] >> 2] & 31](i2) | 0) != 2) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 i6 = HEAP32[i2 + 12 >> 2] | 0;
 i7 = (i6 | 0) == 0;
 do {
  if (i5 | i7) {
   if (i5 & i7) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i4, i6) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i6 = HEAP32[i1 + 16 >> 2] | 0;
 i4 = (i6 | 0) == 0;
 i7 = HEAP32[i2 + 16 >> 2] | 0;
 i5 = (i7 | 0) == 0;
 do {
  if (i4 | i5) {
   if (i4 & i5) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i6, i7) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i7 = HEAP32[i1 + 20 >> 2] | 0;
 i6 = (i7 | 0) == 0;
 i5 = HEAP32[i2 + 20 >> 2] | 0;
 i4 = (i5 | 0) == 0;
 do {
  if (i6 | i4) {
   if (i6 & i4) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i7, i5) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 i7 = (i5 | 0) == 0;
 i4 = HEAP32[i2 + 24 >> 2] | 0;
 i6 = (i4 | 0) == 0;
 do {
  if (i7 | i6) {
   if (i7 & i6) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i5, i4) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = (i4 | 0) == 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = (i5 | 0) == 0;
 if (i1 | i2) {
  i3 = i1 & i2;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i4, i5) | 0;
 return i3 | 0;
}
function __ZNK7WebCore20CSSBasicShapeEllipse6equalsERKNS_13CSSBasicShapeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((FUNCTION_TABLE_ii[HEAP32[HEAP32[i2 >> 2] >> 2] & 31](i2) | 0) != 6) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 i6 = HEAP32[i2 + 12 >> 2] | 0;
 i7 = (i6 | 0) == 0;
 do {
  if (i5 | i7) {
   if (i5 & i7) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i4, i6) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i6 = HEAP32[i1 + 16 >> 2] | 0;
 i4 = (i6 | 0) == 0;
 i7 = HEAP32[i2 + 16 >> 2] | 0;
 i5 = (i7 | 0) == 0;
 do {
  if (i4 | i5) {
   if (i4 & i5) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i6, i7) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i7 = HEAP32[i1 + 20 >> 2] | 0;
 i6 = (i7 | 0) == 0;
 i5 = HEAP32[i2 + 20 >> 2] | 0;
 i4 = (i5 | 0) == 0;
 do {
  if (i6 | i4) {
   if (i6 & i4) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i7, i5) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 i7 = (i5 | 0) == 0;
 i4 = HEAP32[i2 + 24 >> 2] | 0;
 i6 = (i4 | 0) == 0;
 do {
  if (i7 | i6) {
   if (i7 & i6) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i5, i4) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = (i4 | 0) == 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = (i5 | 0) == 0;
 if (i1 | i2) {
  i3 = i1 & i2;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i4, i5) | 0;
 return i3 | 0;
}
function __ZNK7WebCore20CSSBasicShapePolygon6equalsERKNS_13CSSBasicShapeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if ((FUNCTION_TABLE_ii[HEAP32[HEAP32[i2 >> 2] >> 2] & 31](i2) | 0) != 3) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = (i6 | 0) == 0;
 do {
  if (i5 | i7) {
   if (i5 & i7) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i4, i6) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i6 = i1 + 20 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 i7 = i2 + 20 | 0;
 if ((i4 | 0) != (HEAP32[i7 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if ((i4 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i5 = i1 + 12 | 0;
 i1 = i2 + 12 | 0;
 i2 = 0;
 i8 = i4;
 while (1) {
  if (i8 >>> 0 <= i2 >>> 0) {
   i9 = 10;
   break;
  }
  i10 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i2 << 2) >> 2] | 0;
  i11 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 << 2) >> 2] | 0;
  if ((i10 | 0) != (i11 | 0)) {
   if ((i10 | 0) == 0 | (i11 | 0) == 0) {
    i3 = 0;
    i9 = 23;
    break;
   }
   if (!(__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i10, i11) | 0)) {
    i3 = 0;
    i9 = 22;
    break;
   }
  }
  i11 = i2 + 1 | 0;
  if (i11 >>> 0 >= i4 >>> 0) {
   i3 = 1;
   i9 = 24;
   break;
  }
  if ((HEAP32[i6 >> 2] | 0) >>> 0 <= i11 >>> 0) {
   i9 = 8;
   break;
  }
  i2 = i11;
  i8 = HEAP32[i7 >> 2] | 0;
 }
 if ((i9 | 0) == 22) {
  return i3 | 0;
 } else if ((i9 | 0) == 23) {
  return i3 | 0;
 } else if ((i9 | 0) == 24) {
  return i3 | 0;
 } else if ((i9 | 0) == 10) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i9 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
}
function __ZNK7WebCore29CSSDeprecatedBasicShapeCircle6equalsERKNS_13CSSBasicShapeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((FUNCTION_TABLE_ii[HEAP32[HEAP32[i2 >> 2] >> 2] & 31](i2) | 0) != 1) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 i6 = HEAP32[i2 + 16 >> 2] | 0;
 i7 = (i6 | 0) == 0;
 do {
  if (i5 | i7) {
   if (i5 & i7) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i4, i6) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 i4 = (i6 | 0) == 0;
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 i5 = (i7 | 0) == 0;
 do {
  if (i4 | i5) {
   if (i4 & i5) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i6, i7) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i7 = HEAP32[i1 + 20 >> 2] | 0;
 i6 = (i7 | 0) == 0;
 i5 = HEAP32[i2 + 20 >> 2] | 0;
 i4 = (i5 | 0) == 0;
 do {
  if (i6 | i4) {
   if (i6 & i4) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i7, i5) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = (i5 | 0) == 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = (i7 | 0) == 0;
 if (i1 | i2) {
  i3 = i1 & i2;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i5, i7) | 0;
 return i3 | 0;
}
function __ZNK7WebCore19CSSBasicShapeCircle6equalsERKNS_13CSSBasicShapeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((FUNCTION_TABLE_ii[HEAP32[HEAP32[i2 >> 2] >> 2] & 31](i2) | 0) != 5) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 i6 = HEAP32[i2 + 12 >> 2] | 0;
 i7 = (i6 | 0) == 0;
 do {
  if (i5 | i7) {
   if (i5 & i7) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i4, i6) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i6 = HEAP32[i1 + 16 >> 2] | 0;
 i4 = (i6 | 0) == 0;
 i7 = HEAP32[i2 + 16 >> 2] | 0;
 i5 = (i7 | 0) == 0;
 do {
  if (i4 | i5) {
   if (i4 & i5) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i6, i7) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i7 = HEAP32[i1 + 20 >> 2] | 0;
 i6 = (i7 | 0) == 0;
 i5 = HEAP32[i2 + 20 >> 2] | 0;
 i4 = (i5 | 0) == 0;
 do {
  if (i6 | i4) {
   if (i6 & i4) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i7, i5) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = (i5 | 0) == 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = (i7 | 0) == 0;
 if (i1 | i2) {
  i3 = i1 & i2;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i5, i7) | 0;
 return i3 | 0;
}
function __ZN7WebCore30CSSDeprecatedBasicShapeEllipseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 168;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i2 >> 2] = H_BASE + 488;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore20CSSBasicShapeEllipseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 368;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i2 >> 2] = H_BASE + 488;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
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
function __ZN7WebCore20CSSBasicShapePolygonD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 328;
 i3 = i1 + 20 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 12 | 0;
 if ((i4 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 + (i4 << 2) | 0;
  i4 = i6;
  while (1) {
   i6 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i8 = i6 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i6 | 0);
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
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 HEAP32[i2 >> 2] = H_BASE + 488;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i10 = i1;
  __ZN3WTF8fastFreeEPv(i10);
  return;
 }
 i3 = i2 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
  i10 = i1;
  __ZN3WTF8fastFreeEPv(i10);
  return;
 } else {
  HEAP32[i3 >> 2] = i5;
  i10 = i1;
  __ZN3WTF8fastFreeEPv(i10);
  return;
 }
}
function __ZN7WebCore29CSSDeprecatedBasicShapeCircleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 208;
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 HEAP32[i2 >> 2] = H_BASE + 488;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore19CSSBasicShapeCircleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 408;
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 HEAP32[i2 >> 2] = H_BASE + 488;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore20CSSBasicShapePolygonD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 328;
 i3 = i1 + 20 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 12 | 0;
 if ((i4 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 + (i4 << 2) | 0;
  i4 = i6;
  while (1) {
   i6 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i8 = i6 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i6 | 0);
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
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 HEAP32[i2 >> 2] = H_BASE + 488;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
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
function __ZN7WebCore13CSSBasicShapeD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 488;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore13CSSBasicShapeD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 488;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore30CSSDeprecatedBasicShapeEllipseD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore30CSSDeprecatedBasicShapeEllipseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore29CSSDeprecatedBasicShapeCircleD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore29CSSDeprecatedBasicShapeCircleD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore27CSSBasicShapeInsetRectangleD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore27CSSBasicShapeInsetRectangleD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore22CSSBasicShapeRectangleD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22CSSBasicShapeRectangleD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore20CSSBasicShapeEllipseD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore20CSSBasicShapeEllipseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
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
function __ZN7WebCore19CSSBasicShapeCircleD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19CSSBasicShapeCircleD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore18CSSBasicShapeInsetD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18CSSBasicShapeInsetD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore30CSSDeprecatedBasicShapeEllipseD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore30CSSDeprecatedBasicShapeEllipseD2Ev(i1);
 return;
}
function __ZN7WebCore29CSSDeprecatedBasicShapeCircleD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore29CSSDeprecatedBasicShapeCircleD2Ev(i1);
 return;
}
function __ZN7WebCore27CSSBasicShapeInsetRectangleD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore27CSSBasicShapeInsetRectangleD2Ev(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
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
function __ZN7WebCore22CSSBasicShapeRectangleD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22CSSBasicShapeRectangleD2Ev(i1);
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
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function __ZN7WebCore20CSSBasicShapeEllipseD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore20CSSBasicShapeEllipseD2Ev(i1);
 return;
}
function __ZN7WebCore19CSSBasicShapeCircleD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19CSSBasicShapeCircleD2Ev(i1);
 return;
}
function __ZN7WebCore18CSSBasicShapeInsetD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18CSSBasicShapeInsetD2Ev(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZNK7WebCore30CSSDeprecatedBasicShapeEllipse4typeEv(i1) {
 i1 = i1 | 0;
 return 2;
}
function __ZNK7WebCore29CSSDeprecatedBasicShapeCircle4typeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore27CSSBasicShapeInsetRectangle4typeEv(i1) {
 i1 = i1 | 0;
 return 4;
}
function __ZNK7WebCore22CSSBasicShapeRectangle4typeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore20CSSBasicShapePolygon4typeEv(i1) {
 i1 = i1 | 0;
 return 3;
}
function __ZNK7WebCore20CSSBasicShapeEllipse4typeEv(i1) {
 i1 = i1 | 0;
 return 6;
}
function __ZNK7WebCore19CSSBasicShapeCircle4typeEv(i1) {
 i1 = i1 | 0;
 return 5;
}
function __ZNK7WebCore18CSSBasicShapeInset4typeEv(i1) {
 i1 = i1 | 0;
 return 7;
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
}
function b1(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(1);
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore29CSSDeprecatedBasicShapeCircleD0Ev,b0,__ZN7WebCore20CSSBasicShapePolygonD1Ev,b0,__ZN7WebCore30CSSDeprecatedBasicShapeEllipseD0Ev,b0,__ZN7WebCore19CSSBasicShapeCircleD0Ev,b0,__ZN7WebCore20CSSBasicShapePolygonD0Ev,b0,__ZN7WebCore22CSSBasicShapeRectangleD1Ev,b0,__ZN7WebCore29CSSDeprecatedBasicShapeCircleD1Ev,b0,__ZN7WebCore22CSSBasicShapeRectangleD0Ev,b0,__ZN7WebCore18CSSBasicShapeInsetD1Ev,b0,__ZN7WebCore20CSSBasicShapeEllipseD0Ev,b0,__ZN7WebCore13CSSBasicShapeD0Ev,b0,__ZN7WebCore18CSSBasicShapeInsetD0Ev,b0,__ZN7WebCore30CSSDeprecatedBasicShapeEllipseD1Ev,b0,__ZN7WebCore13CSSBasicShapeD1Ev
  ,b0,__ZN7WebCore19CSSBasicShapeCircleD1Ev,b0,__ZN7WebCore27CSSBasicShapeInsetRectangleD0Ev,b0,__ZN7WebCore20CSSBasicShapeEllipseD1Ev,b0,__ZN7WebCore27CSSBasicShapeInsetRectangleD1Ev,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZNK7WebCore22CSSBasicShapeRectangle7cssTextEv,b1,__ZNK7WebCore20CSSBasicShapePolygon7cssTextEv,b1,__ZNK7WebCore18CSSBasicShapeInset7cssTextEv,b1,__ZNK7WebCore29CSSDeprecatedBasicShapeCircle7cssTextEv,b1,__ZNK7WebCore19CSSBasicShapeCircle7cssTextEv,b1,__ZNK7WebCore30CSSDeprecatedBasicShapeEllipse7cssTextEv,b1,__ZNK7WebCore20CSSBasicShapeEllipse7cssTextEv,b1,__ZNK7WebCore27CSSBasicShapeInsetRectangle7cssTextEv,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZNK7WebCore18CSSBasicShapeInset4typeEv,b2,__ZNK7WebCore22CSSBasicShapeRectangle4typeEv,b2,__ZNK7WebCore30CSSDeprecatedBasicShapeEllipse4typeEv,b2,__ZNK7WebCore20CSSBasicShapePolygon4typeEv,b2,__ZNK7WebCore20CSSBasicShapeEllipse4typeEv,b2,__ZNK7WebCore29CSSDeprecatedBasicShapeCircle4typeEv,b2,__ZNK7WebCore27CSSBasicShapeInsetRectangle4typeEv,b2,__ZNK7WebCore19CSSBasicShapeCircle4typeEv,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_v = [b3,b3,v____cxa_pure_virtual__wrapper,b3];
  var FUNCTION_TABLE_iii = [b4,b4,__ZNK7WebCore20CSSBasicShapeEllipse6equalsERKNS_13CSSBasicShapeE,b4,__ZNK7WebCore27CSSBasicShapeInsetRectangle6equalsERKNS_13CSSBasicShapeE,b4,__ZNK7WebCore20CSSBasicShapePolygon6equalsERKNS_13CSSBasicShapeE,b4,__ZNK7WebCore30CSSDeprecatedBasicShapeEllipse6equalsERKNS_13CSSBasicShapeE,b4,__ZNK7WebCore18CSSBasicShapeInset6equalsERKNS_13CSSBasicShapeE,b4,__ZNK7WebCore22CSSBasicShapeRectangle6equalsERKNS_13CSSBasicShapeE,b4,__ZNK7WebCore19CSSBasicShapeCircle6equalsERKNS_13CSSBasicShapeE,b4,__ZNK7WebCore29CSSDeprecatedBasicShapeCircle6equalsERKNS_13CSSBasicShapeE,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore29CSSDeprecatedBasicShapeCircleD0Ev","__ZN7WebCore22CSSBasicShapeRectangleD2Ev","__ZN7WebCore20CSSBasicShapePolygonD1Ev","__ZN7WebCore30CSSDeprecatedBasicShapeEllipseD0Ev","__ZNK7WebCore18CSSBasicShapeInset4typeEv","__ZNK7WebCore22CSSBasicShapeRectangle4typeEv","__ZN7WebCore29CSSDeprecatedBasicShapeCircleD2Ev","__ZNK7WebCore18CSSBasicShapeInset6equalsERKNS_13CSSBasicShapeE","__ZNK7WebCore20CSSBasicShapeEllipse6equalsERKNS_13CSSBasicShapeE","__ZNK7WebCore30CSSDeprecatedBasicShapeEllipse4typeEv","_memset","__ZNK7WebCore20CSSBasicShapePolygon4typeEv","__ZN7WebCore19CSSBasicShapeCircleD0Ev","__ZNK7WebCore29CSSDeprecatedBasicShapeCircle4typeEv","__ZN7WebCore18CSSBasicShapeInsetD0Ev","__ZN7WebCore13CSSBasicShapeD1Ev","__ZN7WebCore29CSSDeprecatedBasicShapeCircleD1Ev","__ZN7WebCore22CSSBasicShapeRectangleD0Ev","__ZNK7WebCore19CSSBasicShapeCircle4typeEv","__ZN7WebCore18CSSBasicShapeInsetD1Ev","_memcpy","__ZN7WebCore27CSSBasicShapeInsetRectangleD2Ev","__ZN7WebCore20CSSBasicShapeEllipseD0Ev","__ZN7WebCore30CSSDeprecatedBasicShapeEllipseD2Ev","__ZNK7WebCore20CSSBasicShapeEllipse4typeEv","__ZNK7WebCore30CSSDeprecatedBasicShapeEllipse6equalsERKNS_13CSSBasicShapeE","__ZNK7WebCore20CSSBasicShapePolygon7cssTextEv","__ZNK7WebCore22CSSBasicShapeRectangle7cssTextEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore20CSSBasicShapeEllipseD2Ev","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZN7WebCore19CSSBasicShapeCircleD2Ev","__ZN7WebCore13CSSBasicShapeD0Ev","__ZNK7WebCore18CSSBasicShapeInset7cssTextEv","__ZNK7WebCore22CSSBasicShapeRectangle6equalsERKNS_13CSSBasicShapeE","__ZNK7WebCore27CSSBasicShapeInsetRectangle6equalsERKNS_13CSSBasicShapeE","__ZNK7WebCore29CSSDeprecatedBasicShapeCircle7cssTextEv","__ZNK7WebCore19CSSBasicShapeCircle6equalsERKNS_13CSSBasicShapeE","__ZNK7WebCore19CSSBasicShapeCircle7cssTextEv","__ZNK7WebCore27CSSBasicShapeInsetRectangle4typeEv","__ZN7WebCore30CSSDeprecatedBasicShapeEllipseD1Ev","__ZN7WebCore22CSSBasicShapeRectangleD1Ev","__ZNK7WebCore20CSSBasicShapePolygon6equalsERKNS_13CSSBasicShapeE","__ZN7WebCore20CSSBasicShapePolygonD0Ev","_strlen","__ZN7WebCore19CSSBasicShapeCircleD1Ev","__ZNK7WebCore30CSSDeprecatedBasicShapeEllipse7cssTextEv","__ZNK7WebCore20CSSBasicShapeEllipse7cssTextEv","__ZN7WebCore18CSSBasicShapeInsetD2Ev","__ZNK7WebCore27CSSBasicShapeInsetRectangle7cssTextEv","__ZN7WebCore20CSSBasicShapeEllipseD1Ev","__ZN7WebCore27CSSBasicShapeInsetRectangleD1Ev","__ZNK7WebCore29CSSDeprecatedBasicShapeCircle6equalsERKNS_13CSSBasicShapeE","__ZN7WebCore27CSSBasicShapeInsetRectangleD0Ev"]

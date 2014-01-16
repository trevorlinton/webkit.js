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
H_BASE = parentModule["_malloc"](216 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 216;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_di(index,a1) {
  try {
    return Module["dynCall_di"](index,a1);
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
  var __ZTVN7WebCore20RenderScrollbarThemeE=(H_BASE+8)|0;
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
  var invoke_di=env.invoke_di;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_iiii + 8;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_di + 2;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_di + 4;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_viiiii + 8;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_viiiiii + 4;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_viiii + 12;
}
function __ZN7WebCore20RenderScrollbarTheme31constrainTrackRectToTrackPiecesEPNS_20ScrollbarThemeClientERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i2 | 0;
 i6 = i2 + 16 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore15RenderScrollbar25trackPieceRectWithMarginsENS_13ScrollbarPartERKNS_7IntRectE(i5, 0, 4, i4);
  i7 = 0;
 } else {
  i8 = i3 - 36 | 0;
  __ZN7WebCore15RenderScrollbar25trackPieceRectWithMarginsENS_13ScrollbarPartERKNS_7IntRectE(i5, i8, 4, i4);
  i7 = i8;
 }
 __ZN7WebCore15RenderScrollbar25trackPieceRectWithMarginsENS_13ScrollbarPartERKNS_7IntRectE(i6, i7, 16, i4);
 i7 = i1;
 i8 = i4;
 HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 68 >> 2] & 15](i3) | 0) == 0) {
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i1 >> 2] = i3;
  HEAP32[i1 + 8 >> 2] = (HEAP32[i6 + 8 >> 2] | 0) + (HEAP32[i6 >> 2] | 0) - i3;
  STACKTOP = i2;
  return;
 } else {
  i3 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i1 + 4 >> 2] = i3;
  HEAP32[i1 + 12 >> 2] = (HEAP32[i6 + 12 >> 2] | 0) + (HEAP32[i6 + 4 >> 2] | 0) - i3;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore20RenderScrollbarTheme25buttonSizesAlongTrackAxisEPNS_20ScrollbarThemeClientERiS3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 48 | 0;
 i10 = i1;
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i10 >> 2] | 0) + 128 >> 2] & 15](i6, i1, i2, 1, 0);
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i10 >> 2] | 0) + 132 >> 2] & 15](i7, i1, i2, 2, 0);
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i10 >> 2] | 0) + 128 >> 2] & 15](i8, i1, i2, 32, 0);
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i10 >> 2] | 0) + 132 >> 2] & 15](i9, i1, i2, 64, 0);
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 68 >> 2] & 15](i2) | 0) == 0) {
  HEAP32[i3 >> 2] = (HEAP32[i7 + 8 >> 2] | 0) + (HEAP32[i6 + 8 >> 2] | 0);
  i11 = (HEAP32[i9 + 8 >> 2] | 0) + (HEAP32[i8 + 8 >> 2] | 0) | 0;
  HEAP32[i4 >> 2] = i11;
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i3 >> 2] = (HEAP32[i7 + 12 >> 2] | 0) + (HEAP32[i6 + 12 >> 2] | 0);
  i11 = (HEAP32[i9 + 12 >> 2] | 0) + (HEAP32[i8 + 12 >> 2] | 0) | 0;
  HEAP32[i4 >> 2] = i11;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore20RenderScrollbarTheme10hasButtonsEPNS_20ScrollbarThemeClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN7WebCore20RenderScrollbarTheme25buttonSizesAlongTrackAxisEPNS_20ScrollbarThemeClientERiS3_(i1, i2, i4, i5);
 i1 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i4 >> 2] | 0) | 0;
 i4 = i2;
 i5 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 68 >> 2] & 15](i2) | 0) == 0;
 i6 = HEAP32[i4 >> 2] | 0;
 if (i5) {
  i7 = FUNCTION_TABLE_ii[HEAP32[i6 + 8 >> 2] & 15](i2) | 0;
  i8 = (i1 | 0) <= (i7 | 0);
  STACKTOP = i3;
  return i8 | 0;
 } else {
  i7 = FUNCTION_TABLE_ii[HEAP32[i6 + 12 >> 2] & 15](i2) | 0;
  i8 = (i1 | 0) <= (i7 | 0);
  STACKTOP = i3;
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore20RenderScrollbarTheme9trackRectEPNS_20ScrollbarThemeClientEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 120 >> 2] & 31](i2, i3) | 0)) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 36 >> 2] & 15](i1, i3);
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore20RenderScrollbarTheme25buttonSizesAlongTrackAxisEPNS_20ScrollbarThemeClientERiS3_(i2, i3, i5, i6);
 if ((i3 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = i3 - 36 | 0;
 }
 __ZN7WebCore15RenderScrollbar9trackRectEii(i1, i7, HEAP32[i5 >> 2] | 0, HEAP32[i6 >> 2] | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20RenderScrollbarTheme18willPaintScrollbarEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, d6 = +0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i1 | 0;
 if ((i3 | 0) == 0) {
  i5 = 0;
 } else {
  i5 = i3 - 36 | 0;
 }
 d6 = +__ZN7WebCore15RenderScrollbar7opacityEv(i5);
 if (d6 == +1) {
  STACKTOP = i1;
  return;
 }
 __ZN7WebCore15GraphicsContext4saveEv(i2);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 36 >> 2] & 15](i4, i3);
 __ZN7WebCore15GraphicsContext4clipERKNS_7IntRectE(i2, i4);
 __ZN7WebCore15GraphicsContext22beginTransparencyLayerEf(i2, d6);
 STACKTOP = i1;
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
function __ZN7WebCore20RenderScrollbarTheme24paintScrollbarBackgroundEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i1 | 0;
 if ((i3 | 0) == 0) {
  i5 = 0;
 } else {
  i5 = i3 - 36 | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 36 >> 2] & 15](i4, i3);
 __ZN7WebCore15RenderScrollbar9paintPartEPNS_15GraphicsContextENS_13ScrollbarPartERKNS_7IntRectE(i5, i2, 128, i4);
 STACKTOP = i1;
 return;
}
function __ZN7WebCore20RenderScrollbarTheme17paintScrollCornerEPNS_10ScrollViewEPNS_15GraphicsContextERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i1 = i2 | 0;
 i5 = i2 + 16 | 0;
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i1, i4);
 HEAP32[i5 >> 2] = -1;
 HEAP8[i5 + 4 | 0] = 1;
 __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i3, i1, i5, 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore20RenderScrollbarTheme15paintTrackPieceEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectENS_13ScrollbarPartE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 if ((i3 | 0) == 0) {
  i6 = 0;
 } else {
  i6 = i3 - 36 | 0;
 }
 __ZN7WebCore15RenderScrollbar9paintPartEPNS_15GraphicsContextENS_13ScrollbarPartERKNS_7IntRectE(i6, i2, i5, i4);
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
function __ZN7WebCore20RenderScrollbarTheme17didPaintScrollbarEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
 } else {
  i4 = i3 - 36 | 0;
 }
 if (+__ZN7WebCore15RenderScrollbar7opacityEv(i4) == +1) {
  return;
 }
 __ZN7WebCore15GraphicsContext20endTransparencyLayerEv(i2);
 __ZN7WebCore15GraphicsContext7restoreEv(i2);
 return;
}
function __ZN7WebCore20RenderScrollbarTheme11paintButtonEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectENS_13ScrollbarPartE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 if ((i3 | 0) == 0) {
  i6 = 0;
 } else {
  i6 = i3 - 36 | 0;
 }
 __ZN7WebCore15RenderScrollbar9paintPartEPNS_15GraphicsContextENS_13ScrollbarPartERKNS_7IntRectE(i6, i2, i5, i4);
 return;
}
function viiiiii___ZN7WebCore23ScrollbarThemeComposite18paintOverhangAreasEPNS_10ScrollViewEPNS_15GraphicsContextERKNS_7IntRectES7_S7___wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore23ScrollbarThemeComposite18paintOverhangAreasEPNS_10ScrollViewEPNS_15GraphicsContextERKNS_7IntRectES7_S7_(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZN7WebCore20RenderScrollbarTheme20paintTrackBackgroundEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 if ((i3 | 0) == 0) {
  i5 = 0;
 } else {
  i5 = i3 - 36 | 0;
 }
 __ZN7WebCore15RenderScrollbar9paintPartEPNS_15GraphicsContextENS_13ScrollbarPartERKNS_7IntRectE(i5, i2, 256, i4);
 return;
}
function __ZN7WebCore20RenderScrollbarTheme10paintThumbEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 if ((i3 | 0) == 0) {
  i5 = 0;
 } else {
  i5 = i3 - 36 | 0;
 }
 __ZN7WebCore15RenderScrollbar9paintPartEPNS_15GraphicsContextENS_13ScrollbarPartERKNS_7IntRectE(i5, i2, 8, i4);
 return;
}
function __ZN7WebCore20RenderScrollbarTheme20renderScrollbarThemeEv() {
 var i1 = 0, i2 = 0, i3 = 0;
 if (HEAP8[H_BASE + 208 | 0] | 0) {
  i1 = HEAP32[H_BASE + 216 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(4) | 0;
  i3 = i2;
  HEAP32[i2 >> 2] = H_BASE + 16;
  HEAP32[H_BASE + 216 >> 2] = i3;
  HEAP8[H_BASE + 208 | 0] = 1;
  i1 = i3;
  return i1 | 0;
 }
 return 0;
}
function viiiiii___ZN7WebCore23ScrollbarThemeComposite10splitTrackEPNS_20ScrollbarThemeClientERKNS_7IntRectERS3_S6_S6___wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore23ScrollbarThemeComposite10splitTrackEPNS_20ScrollbarThemeClientERKNS_7IntRectERS3_S6_S6_(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZN7WebCore20RenderScrollbarTheme17forwardButtonRectEPNS_20ScrollbarThemeClientENS_13ScrollbarPartEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 if ((i3 | 0) == 0) {
  i6 = 0;
 } else {
  i6 = i3 - 36 | 0;
 }
 __ZN7WebCore15RenderScrollbar10buttonRectENS_13ScrollbarPartE(i1, i6, i4);
 return;
}
function __ZN7WebCore20RenderScrollbarTheme14backButtonRectEPNS_20ScrollbarThemeClientENS_13ScrollbarPartEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 if ((i3 | 0) == 0) {
  i6 = 0;
 } else {
  i6 = i3 - 36 | 0;
 }
 __ZN7WebCore15RenderScrollbar10buttonRectENS_13ScrollbarPartE(i1, i6, i4);
 return;
}
function iiiii___ZN7WebCore23ScrollbarThemeComposite5paintEPNS_20ScrollbarThemeClientEPNS_15GraphicsContextERKNS_7IntRectE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore23ScrollbarThemeComposite5paintEPNS_20ScrollbarThemeClientEPNS_15GraphicsContextERKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore20RenderScrollbarTheme8hasThumbEPNS_20ScrollbarThemeClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 | 0;
 i4 = i1;
 i1 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 92 >> 2] & 31](i3, i2) | 0;
 return (i1 - (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 84 >> 2] & 31](i3, i2) | 0) | 0) > -1 | 0;
}
function __ZN7WebCore20RenderScrollbarTheme14paintTickmarksEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i1 = __ZN7WebCore14ScrollbarTheme5themeEv() | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] & 15](i1, i2, i3, i4);
 return;
}
function __ZN7WebCore20RenderScrollbarTheme19shouldCenterOnThumbEPNS_20ScrollbarThemeClientERKNS_18PlatformMouseEventE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = __ZN7WebCore14ScrollbarTheme5themeEv() | 0;
 return FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 68 >> 2] & 15](i1, i2, i3) | 0;
}
function viii___ZN7WebCore23ScrollbarThemeComposite14invalidatePartEPNS_20ScrollbarThemeClientENS_13ScrollbarPartE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore23ScrollbarThemeComposite14invalidatePartEPNS_20ScrollbarThemeClientENS_13ScrollbarPartE(i1 | 0, i2 | 0, i3 | 0);
}
function iiii___ZN7WebCore23ScrollbarThemeComposite7hitTestEPNS_20ScrollbarThemeClientERKNS_8IntPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZN7WebCore23ScrollbarThemeComposite7hitTestEPNS_20ScrollbarThemeClientERKNS_8IntPointE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore20RenderScrollbarTheme18minimumThumbLengthEPNS_20ScrollbarThemeClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
 } else {
  i3 = i2 - 36 | 0;
 }
 return __ZN7WebCore15RenderScrollbar18minimumThumbLengthEv(i3) | 0;
}
function __ZN7WebCore20RenderScrollbarTheme19unregisterScrollbarEPNS_20ScrollbarThemeClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i1 = __ZN7WebCore14ScrollbarTheme5themeEv() | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 112 >> 2] & 15](i1, i2);
 return;
}
function __ZN7WebCore20RenderScrollbarTheme18scrollbarThicknessENS_20ScrollbarControlSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i1 = __ZN7WebCore14ScrollbarTheme5themeEv() | 0;
 return FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 31](i1, i2) | 0;
}
function __ZN7WebCore20RenderScrollbarTheme17registerScrollbarEPNS_20ScrollbarThemeClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i1 = __ZN7WebCore14ScrollbarTheme5themeEv() | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 108 >> 2] & 15](i1, i2);
 return;
}
function viii___ZN7WebCore23ScrollbarThemeComposite9thumbRectEPNS_20ScrollbarThemeClientE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore23ScrollbarThemeComposite9thumbRectEPNS_20ScrollbarThemeClientE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZN7WebCore23ScrollbarThemeComposite13trackPositionEPNS_20ScrollbarThemeClientE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore23ScrollbarThemeComposite13trackPositionEPNS_20ScrollbarThemeClientE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN7WebCore23ScrollbarThemeComposite13thumbPositionEPNS_20ScrollbarThemeClientE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore23ScrollbarThemeComposite13thumbPositionEPNS_20ScrollbarThemeClientE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN7WebCore23ScrollbarThemeComposite11trackLengthEPNS_20ScrollbarThemeClientE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore23ScrollbarThemeComposite11trackLengthEPNS_20ScrollbarThemeClientE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN7WebCore23ScrollbarThemeComposite11thumbLengthEPNS_20ScrollbarThemeClientE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore23ScrollbarThemeComposite11thumbLengthEPNS_20ScrollbarThemeClientE(i1 | 0, i2 | 0) | 0;
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore20RenderScrollbarTheme27initialAutoscrollTimerDelayEv(i1) {
 i1 = i1 | 0;
 i1 = __ZN7WebCore14ScrollbarTheme5themeEv() | 0;
 return +(+FUNCTION_TABLE_di[HEAP32[(HEAP32[i1 >> 2] | 0) + 100 >> 2] & 7](i1));
}
function __ZN7WebCore20RenderScrollbarTheme20autoscrollTimerDelayEv(i1) {
 i1 = i1 | 0;
 i1 = __ZN7WebCore14ScrollbarTheme5themeEv() | 0;
 return +(+FUNCTION_TABLE_di[HEAP32[(HEAP32[i1 >> 2] | 0) + 104 >> 2] & 7](i1));
}
function __ZNK7WebCore20RenderScrollbarTheme16buttonsPlacementEv(i1) {
 i1 = i1 | 0;
 i1 = __ZN7WebCore14ScrollbarTheme5themeEv() | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 15](i1) | 0;
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
function __ZN7WebCore14ScrollbarTheme32shouldDragDocumentInsteadOfThumbEPNS_20ScrollbarThemeClientERKNS_18PlatformMouseEventE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 0;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZN7WebCore14ScrollbarTheme26shouldSnapBackToDragOriginEPNS_20ScrollbarThemeClientERKNS_18PlatformMouseEventE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore14ScrollbarTheme27updateScrollbarOverlayStyleEPNS_20ScrollbarThemeClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
}
function b9(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(9);
}
function __ZN7WebCore14ScrollbarTheme18updateEnabledStateEPNS_20ScrollbarThemeClientE(i1, i2) {
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
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function __ZN7WebCore20RenderScrollbarThemeD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore14ScrollbarTheme22maxOverlapBetweenPagesEv(i1) {
 i1 = i1 | 0;
 return 2147483647;
}
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 7](i2 | 0);
}
function __ZNK7WebCore20RenderScrollbarTheme20supportsControlTintsEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b11(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(11);
}
function __ZN7WebCore14ScrollbarTheme28usesOverlayScrollbarsChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore14ScrollbarTheme26invalidateOnMouseEnterExitEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZNK7WebCore14ScrollbarTheme21usesOverlayScrollbarsEv(i1) {
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
function __ZNK7WebCore14ScrollbarTheme11isMockThemeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore14ScrollbarTheme12themeChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function __ZN7WebCore20RenderScrollbarThemeD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b10(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(10);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
 return +0;
}
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore20RenderScrollbarTheme15paintTrackPieceEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectENS_13ScrollbarPartE,b0,__ZN7WebCore20RenderScrollbarTheme11paintButtonEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectENS_13ScrollbarPartE,b0,__ZN7WebCore20RenderScrollbarTheme17forwardButtonRectEPNS_20ScrollbarThemeClientENS_13ScrollbarPartEb,b0,__ZN7WebCore20RenderScrollbarTheme14backButtonRectEPNS_20ScrollbarThemeClientENS_13ScrollbarPartEb,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_di = [b1,b1,__ZN7WebCore20RenderScrollbarTheme27initialAutoscrollTimerDelayEv,b1,__ZN7WebCore20RenderScrollbarTheme20autoscrollTimerDelayEv,b1,b1,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore20RenderScrollbarThemeD1Ev,b2,__ZN7WebCore14ScrollbarTheme12themeChangedEv,b2,__ZN7WebCore14ScrollbarTheme28usesOverlayScrollbarsChangedEv,b2,__ZN7WebCore20RenderScrollbarThemeD0Ev,b2,b2,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore20RenderScrollbarTheme19unregisterScrollbarEPNS_20ScrollbarThemeClientE,b3,__ZN7WebCore14ScrollbarTheme18updateEnabledStateEPNS_20ScrollbarThemeClientE,b3,__ZN7WebCore20RenderScrollbarTheme17registerScrollbarEPNS_20ScrollbarThemeClientE,b3,__ZN7WebCore14ScrollbarTheme27updateScrollbarOverlayStyleEPNS_20ScrollbarThemeClientE,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZNK7WebCore20RenderScrollbarTheme16buttonsPlacementEv,b4,__ZNK7WebCore14ScrollbarTheme21usesOverlayScrollbarsEv,b4,__ZNK7WebCore20RenderScrollbarTheme20supportsControlTintsEv,b4,__ZN7WebCore14ScrollbarTheme22maxOverlapBetweenPagesEv,b4,__ZNK7WebCore14ScrollbarTheme11isMockThemeEv,b4,__ZN7WebCore14ScrollbarTheme26invalidateOnMouseEnterExitEv,b4,b4,b4];
  var FUNCTION_TABLE_iiii = [b5,b5,__ZN7WebCore14ScrollbarTheme32shouldDragDocumentInsteadOfThumbEPNS_20ScrollbarThemeClientERKNS_18PlatformMouseEventE,b5,__ZN7WebCore20RenderScrollbarTheme19shouldCenterOnThumbEPNS_20ScrollbarThemeClientERKNS_18PlatformMouseEventE,b5,__ZN7WebCore14ScrollbarTheme26shouldSnapBackToDragOriginEPNS_20ScrollbarThemeClientERKNS_18PlatformMouseEventE,b5,iiii___ZN7WebCore23ScrollbarThemeComposite7hitTestEPNS_20ScrollbarThemeClientERKNS_8IntPointE__wrapper,b5,b5,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6,viii___ZN7WebCore23ScrollbarThemeComposite9thumbRectEPNS_20ScrollbarThemeClientE__wrapper,b6,__ZN7WebCore20RenderScrollbarTheme24paintScrollbarBackgroundEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientE,b6,__ZN7WebCore20RenderScrollbarTheme18willPaintScrollbarEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientE,b6,viii___ZN7WebCore23ScrollbarThemeComposite14invalidatePartEPNS_20ScrollbarThemeClientENS_13ScrollbarPartE__wrapper,b6,__ZN7WebCore20RenderScrollbarTheme17didPaintScrollbarEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientE,b6,b6,b6,b6,b6];
  var FUNCTION_TABLE_v = [b7,b7];
  var FUNCTION_TABLE_iiiii = [b8,b8,iiiii___ZN7WebCore23ScrollbarThemeComposite5paintEPNS_20ScrollbarThemeClientEPNS_15GraphicsContextERKNS_7IntRectE__wrapper,b8];
  var FUNCTION_TABLE_viiiiii = [b9,b9,viiiiii___ZN7WebCore23ScrollbarThemeComposite18paintOverhangAreasEPNS_10ScrollViewEPNS_15GraphicsContextERKNS_7IntRectES7_S7___wrapper,b9,viiiiii___ZN7WebCore23ScrollbarThemeComposite10splitTrackEPNS_20ScrollbarThemeClientERKNS_7IntRectERS3_S6_S6___wrapper,b9,b9,b9];
  var FUNCTION_TABLE_iii = [b10,b10,__ZN7WebCore20RenderScrollbarTheme18minimumThumbLengthEPNS_20ScrollbarThemeClientE,b10,__ZN7WebCore20RenderScrollbarTheme18scrollbarThicknessENS_20ScrollbarControlSizeE,b10,iii___ZN7WebCore23ScrollbarThemeComposite13thumbPositionEPNS_20ScrollbarThemeClientE__wrapper,b10,iii___ZN7WebCore23ScrollbarThemeComposite11trackLengthEPNS_20ScrollbarThemeClientE__wrapper,b10,__ZN7WebCore20RenderScrollbarTheme8hasThumbEPNS_20ScrollbarThemeClientE,b10,iii___ZN7WebCore23ScrollbarThemeComposite11thumbLengthEPNS_20ScrollbarThemeClientE__wrapper,b10,iii___ZN7WebCore23ScrollbarThemeComposite13trackPositionEPNS_20ScrollbarThemeClientE__wrapper,b10,__ZN7WebCore20RenderScrollbarTheme10hasButtonsEPNS_20ScrollbarThemeClientE,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10
  ,b10,b10,b10];
  var FUNCTION_TABLE_viiii = [b11,b11,__ZN7WebCore20RenderScrollbarTheme9trackRectEPNS_20ScrollbarThemeClientEb,b11,__ZN7WebCore20RenderScrollbarTheme10paintThumbEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectE,b11,__ZN7WebCore20RenderScrollbarTheme20paintTrackBackgroundEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectE,b11,__ZN7WebCore20RenderScrollbarTheme14paintTickmarksEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectE,b11,__ZN7WebCore20RenderScrollbarTheme17paintScrollCornerEPNS_10ScrollViewEPNS_15GraphicsContextERKNS_7IntRectE,b11,__ZN7WebCore20RenderScrollbarTheme31constrainTrackRectToTrackPiecesEPNS_20ScrollbarThemeClientERKNS_7IntRectE,b11,b11,b11];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_di: dynCall_di, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_di": invoke_di, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore20RenderScrollbarTheme18minimumThumbLengthEPNS_20ScrollbarThemeClientE","__ZNK7WebCore14ScrollbarTheme11isMockThemeEv","__ZN7WebCore20RenderScrollbarTheme15paintTrackPieceEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectENS_13ScrollbarPartE","__ZNK7WebCore20RenderScrollbarTheme16buttonsPlacementEv","__ZNK7WebCore14ScrollbarTheme21usesOverlayScrollbarsEv","_strlen","__ZN7WebCore20RenderScrollbarTheme9trackRectEPNS_20ScrollbarThemeClientEb","__ZN7WebCore20RenderScrollbarTheme10paintThumbEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectE","__ZNK7WebCore20RenderScrollbarTheme20supportsControlTintsEv","__ZN7WebCore20RenderScrollbarTheme20paintTrackBackgroundEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectE","__ZN7WebCore20RenderScrollbarTheme11paintButtonEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectENS_13ScrollbarPartE","__ZN7WebCore20RenderScrollbarTheme27initialAutoscrollTimerDelayEv","__ZN7WebCore14ScrollbarTheme22maxOverlapBetweenPagesEv","__ZN7WebCore20RenderScrollbarThemeD1Ev","__ZN7WebCore20RenderScrollbarTheme24paintScrollbarBackgroundEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientE","_memset","__ZN7WebCore20RenderScrollbarTheme14paintTickmarksEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectE","__ZN7WebCore14ScrollbarTheme12themeChangedEv","__ZN7WebCore14ScrollbarTheme28usesOverlayScrollbarsChangedEv","__ZN7WebCore20RenderScrollbarTheme17paintScrollCornerEPNS_10ScrollViewEPNS_15GraphicsContextERKNS_7IntRectE","__ZN7WebCore20RenderScrollbarTheme18willPaintScrollbarEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientE","__ZN7WebCore20RenderScrollbarTheme19unregisterScrollbarEPNS_20ScrollbarThemeClientE","__ZN7WebCore20RenderScrollbarTheme18scrollbarThicknessENS_20ScrollbarControlSizeE","__ZN7WebCore20RenderScrollbarTheme31constrainTrackRectToTrackPiecesEPNS_20ScrollbarThemeClientERKNS_7IntRectE","__ZN7WebCore20RenderScrollbarThemeD0Ev","__ZN7WebCore14ScrollbarTheme26invalidateOnMouseEnterExitEv","__ZN7WebCore20RenderScrollbarTheme20autoscrollTimerDelayEv","__ZN7WebCore14ScrollbarTheme32shouldDragDocumentInsteadOfThumbEPNS_20ScrollbarThemeClientERKNS_18PlatformMouseEventE","__ZN7WebCore20RenderScrollbarTheme8hasThumbEPNS_20ScrollbarThemeClientE","__ZN7WebCore20RenderScrollbarTheme17forwardButtonRectEPNS_20ScrollbarThemeClientENS_13ScrollbarPartEb","__ZN7WebCore20RenderScrollbarTheme25buttonSizesAlongTrackAxisEPNS_20ScrollbarThemeClientERiS3_","__ZN7WebCore14ScrollbarTheme18updateEnabledStateEPNS_20ScrollbarThemeClientE","__ZN7WebCore20RenderScrollbarTheme20renderScrollbarThemeEv","__ZN7WebCore20RenderScrollbarTheme17registerScrollbarEPNS_20ScrollbarThemeClientE","__ZN7WebCore20RenderScrollbarTheme19shouldCenterOnThumbEPNS_20ScrollbarThemeClientERKNS_18PlatformMouseEventE","__ZN7WebCore20RenderScrollbarTheme17didPaintScrollbarEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientE","_memcpy","__ZN7WebCore14ScrollbarTheme26shouldSnapBackToDragOriginEPNS_20ScrollbarThemeClientERKNS_18PlatformMouseEventE","__ZN7WebCore14ScrollbarTheme27updateScrollbarOverlayStyleEPNS_20ScrollbarThemeClientE","__ZN7WebCore20RenderScrollbarTheme14backButtonRectEPNS_20ScrollbarThemeClientENS_13ScrollbarPartEb","__ZN7WebCore20RenderScrollbarTheme10hasButtonsEPNS_20ScrollbarThemeClientE"]

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
H_BASE = parentModule["_malloc"](16 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 16;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore11CanvasStyleC1Ej;
var __ZN7WebCore11CanvasStyleC1Eff;
var __ZN7WebCore11CanvasStyleC1Effff;
var __ZN7WebCore11CanvasStyleC1Efffff;
var __ZN7WebCore11CanvasStyleC1EN3WTF10PassRefPtrINS_14CanvasGradientEEE;
var __ZN7WebCore11CanvasStyleC1EN3WTF10PassRefPtrINS_13CanvasPatternEEE;
var __ZN7WebCore11CanvasStyleD1Ev;
var __ZN7WebCore11CanvasStyleC1ERKS0_;
/* memory initializer */ allocate([99,117,114,114,101,110,116,99,111,108,111,114,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_vifffff(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_vifffff"](index,a1,a2,a3,a4,a5,a6);
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
function invoke_viff(index,a1,a2,a3) {
  try {
    Module["dynCall_viff"](index,a1,a2,a3);
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
function invoke_viffff(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viffff"](index,a1,a2,a3,a4,a5);
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
  var invoke_vifffff=env.invoke_vifffff;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_viff=env.invoke_viff;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viffff=env.invoke_viffff;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore11CanvasStyle16applyStrokeColorEPNS_15GraphicsContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i8 | 0) == 1) {
  HEAP32[i5 >> 2] = HEAP32[HEAP32[i1 >> 2] >> 2];
  HEAP8[i5 + 4 | 0] = 1;
  __ZN7WebCore15GraphicsContext14setStrokeColorERKNS_5ColorENS_10ColorSpaceE(i2, i5, 0);
  STACKTOP = i3;
  return;
 } else if ((i8 | 0) == 0) {
  HEAP32[i4 >> 2] = HEAP32[i1 >> 2];
  HEAP8[i4 + 4 | 0] = 1;
  __ZN7WebCore15GraphicsContext14setStrokeColorERKNS_5ColorENS_10ColorSpaceE(i2, i4, 0);
  STACKTOP = i3;
  return;
 } else if ((i8 | 0) == 3) {
  i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] | 0;
  i5 = i7 | 0;
  HEAP32[i5 >> 2] = i4;
  if ((i4 | 0) != 0) {
   i9 = i4 + 4 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  }
  __ZN7WebCore15GraphicsContext16setStrokePatternEN3WTF10PassRefPtrINS_7PatternEEE(i2, i7);
  i7 = HEAP32[i5 >> 2] | 0;
  if ((i7 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i5 = i7 + 4 | 0;
  i7 = i5 | 0;
  i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) != 0) {
   HEAP32[i7 >> 2] = i9;
   STACKTOP = i3;
   return;
  }
  i9 = i5 - 4 | 0;
  if ((i9 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 3](i9);
  STACKTOP = i3;
  return;
 } else if ((i8 | 0) == 2) {
  i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] | 0;
  i1 = i6 | 0;
  HEAP32[i1 >> 2] = i8;
  if ((i8 | 0) != 0) {
   i9 = i8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  }
  __ZN7WebCore15GraphicsContext17setStrokeGradientEN3WTF10PassRefPtrINS_8GradientEEE(i2, i6);
  i6 = HEAP32[i1 >> 2] | 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i1 = i6 | 0;
  i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i2 | 0) == 0) {
   __ZN7WebCore8GradientD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i1 >> 2] = i2;
   STACKTOP = i3;
   return;
  }
 } else {
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore11CanvasStyle14applyFillColorEPNS_15GraphicsContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i8 | 0) == 1) {
  HEAP32[i5 >> 2] = HEAP32[HEAP32[i1 >> 2] >> 2];
  HEAP8[i5 + 4 | 0] = 1;
  __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i2, i5, 0);
  STACKTOP = i3;
  return;
 } else if ((i8 | 0) == 0) {
  HEAP32[i4 >> 2] = HEAP32[i1 >> 2];
  HEAP8[i4 + 4 | 0] = 1;
  __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i2, i4, 0);
  STACKTOP = i3;
  return;
 } else if ((i8 | 0) == 2) {
  i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] | 0;
  i5 = i6 | 0;
  HEAP32[i5 >> 2] = i4;
  if ((i4 | 0) != 0) {
   i9 = i4 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  }
  __ZN7WebCore15GraphicsContext15setFillGradientEN3WTF10PassRefPtrINS_8GradientEEE(i2, i6);
  i6 = HEAP32[i5 >> 2] | 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i5 = i6 | 0;
  i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore8GradientD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i5 >> 2] = i9;
   STACKTOP = i3;
   return;
  }
 } else if ((i8 | 0) == 3) {
  i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] | 0;
  i1 = i7 | 0;
  HEAP32[i1 >> 2] = i8;
  if ((i8 | 0) != 0) {
   i9 = i8 + 4 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  }
  __ZN7WebCore15GraphicsContext14setFillPatternEN3WTF10PassRefPtrINS_7PatternEEE(i2, i7);
  i7 = HEAP32[i1 >> 2] | 0;
  if ((i7 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i1 = i7 + 4 | 0;
  i7 = i1 | 0;
  i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i2 | 0) != 0) {
   HEAP32[i7 >> 2] = i2;
   STACKTOP = i3;
   return;
  }
  i2 = i1 - 4 | 0;
  if ((i2 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 3](i2);
  STACKTOP = i3;
  return;
 } else {
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore24parseColorOrCurrentColorERjRKN3WTF6StringEPNS_17HTMLCanvasElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = (i3 | 0) == 0;
 if (i7) {
  i8 = 0;
 } else {
  i8 = HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0;
 }
 if (!(__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 8 | 0) | 0)) {
  if (__ZN7WebCore9CSSParser10parseColorERjRKN3WTF6StringEb(i1, i2, 0) | 0) {
   STACKTOP = i4;
   return 1;
  } else {
   i9 = __ZN7WebCore9CSSParser16parseSystemColorERjRKN3WTF6StringEPNS_8DocumentE(i1, i2, i8) | 0;
   STACKTOP = i4;
   return i9 | 0;
  }
 }
 do {
  if (i7) {
   i10 = -16777216;
  } else {
   if ((HEAP32[i3 + 12 >> 2] & 256 | 0) == 0) {
    i10 = -16777216;
    break;
   }
   i9 = HEAP32[i3 + 48 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i10 = -16777216;
    break;
   }
   i8 = i9 + 8 | 0;
   if ((HEAP32[i8 >> 2] | 0) == 0) {
    i10 = -16777216;
    break;
   }
   HEAP32[i5 >> 2] = -16777216;
   __ZNK7WebCore15StyleProperties16getPropertyValueENS_13CSSPropertyIDE(i6, HEAP32[i8 >> 2] | 0, 1);
   __ZN7WebCore9CSSParser10parseColorERjRKN3WTF6StringEb(i5, i6, 0) | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i9 = i8 | 0;
     i2 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i9 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i10 = HEAP32[i5 >> 2] | 0;
  }
 } while (0);
 HEAP32[i1 >> 2] = i10;
 STACKTOP = i4;
 return 1;
}
function __ZN7WebCore11CanvasStyleaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0;
 if ((i1 | 0) == (i2 | 0)) {
  return i1 | 0;
 }
 __ZN7WebCore11CanvasStyleD2Ev(i1);
 if ((i1 | 0) == 0) {
  return i1 | 0;
 }
 i3 = i2;
 i4 = i1;
 i5 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 HEAP32[i4 + 4 >> 2] = i6;
 i4 = i6;
 i6 = i5;
 if ((i4 | 0) == 1) {
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  d7 = +HEAPF32[i3 + 4 >> 2];
  d8 = +HEAPF32[i3 + 8 >> 2];
  d9 = +HEAPF32[i3 + 12 >> 2];
  d10 = +HEAPF32[i3 + 16 >> 2];
  d11 = +HEAPF32[i3 + 20 >> 2];
  HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
  HEAPF32[i5 + 4 >> 2] = d7;
  HEAPF32[i5 + 8 >> 2] = d8;
  HEAPF32[i5 + 12 >> 2] = d9;
  HEAPF32[i5 + 16 >> 2] = d10;
  HEAPF32[i5 + 20 >> 2] = d11;
  HEAP32[i1 >> 2] = i5;
  return i1 | 0;
 } else if ((i4 | 0) == 2) {
  i5 = i6 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  return i1 | 0;
 } else if ((i4 | 0) == 3) {
  i4 = i6 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  return i1 | 0;
 } else {
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore12currentColorEPNS_17HTMLCanvasElementE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 if ((i1 | 0) == 0) {
  i5 = -16777216;
  STACKTOP = i2;
  return i5 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] & 256 | 0) == 0) {
  i5 = -16777216;
  STACKTOP = i2;
  return i5 | 0;
 }
 i6 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i5 = -16777216;
  STACKTOP = i2;
  return i5 | 0;
 }
 i1 = i6 + 8 | 0;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  i5 = -16777216;
  STACKTOP = i2;
  return i5 | 0;
 }
 HEAP32[i3 >> 2] = -16777216;
 __ZNK7WebCore15StyleProperties16getPropertyValueENS_13CSSPropertyIDE(i4, HEAP32[i1 >> 2] | 0, 1);
 __ZN7WebCore9CSSParser10parseColorERjRKN3WTF6StringEb(i3, i4, 0) | 0;
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
 i5 = HEAP32[i3 >> 2] | 0;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore11CanvasStyleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 2) {
  i3 = HEAP32[i1 >> 2] | 0;
  i4 = i3 | 0;
  i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i4 >> 2] = i5;
   return;
  }
  i5 = HEAP32[i3 + 4 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i4 = i5 | 0;
    i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
    if ((i6 | 0) == 0) {
     __ZN7WebCore8GradientD1Ev(i5);
     __ZN3WTF8fastFreeEPv(i5);
     break;
    } else {
     HEAP32[i4 >> 2] = i6;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i3);
  return;
 } else if ((i2 | 0) == 3) {
  i3 = HEAP32[i1 >> 2] | 0;
  i5 = i3 | 0;
  i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  if ((i6 | 0) == 0) {
   __ZN7WebCore13CanvasPatternD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
   return;
  } else {
   HEAP32[i5 >> 2] = i6;
   return;
  }
 } else if ((i2 | 0) == 1) {
  i2 = HEAP32[i1 >> 2] | 0;
  if ((i2 | 0) == 0) {
   return;
  }
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  return;
 }
}
function __ZN7WebCore11CanvasStyleD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 2) {
  i3 = HEAP32[i1 >> 2] | 0;
  i4 = i3 | 0;
  i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i4 >> 2] = i5;
   return;
  }
  i5 = HEAP32[i3 + 4 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i4 = i5 | 0;
    i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
    if ((i6 | 0) == 0) {
     __ZN7WebCore8GradientD1Ev(i5);
     __ZN3WTF8fastFreeEPv(i5);
     break;
    } else {
     HEAP32[i4 >> 2] = i6;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i3);
  return;
 } else if ((i2 | 0) == 3) {
  i3 = HEAP32[i1 >> 2] | 0;
  i5 = i3 | 0;
  i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  if ((i6 | 0) == 0) {
   __ZN7WebCore13CanvasPatternD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
   return;
  } else {
   HEAP32[i5 >> 2] = i6;
   return;
  }
 } else if ((i2 | 0) == 1) {
  i2 = HEAP32[i1 >> 2] | 0;
  if ((i2 | 0) == 0) {
   return;
  }
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  return;
 }
}
function __ZN7WebCore11CanvasStyleC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0;
 i3 = i2;
 i4 = i1;
 i5 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 HEAP32[i4 + 4 >> 2] = i6;
 i4 = i6;
 i6 = i5;
 if ((i4 | 0) == 2) {
  i5 = i6 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  return;
 } else if ((i4 | 0) == 3) {
  i5 = i6 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  return;
 } else if ((i4 | 0) == 1) {
  i4 = __ZN3WTF10fastMallocEj(24) | 0;
  i5 = HEAP32[i2 >> 2] | 0;
  d7 = +HEAPF32[i5 + 4 >> 2];
  d8 = +HEAPF32[i5 + 8 >> 2];
  d9 = +HEAPF32[i5 + 12 >> 2];
  d10 = +HEAPF32[i5 + 16 >> 2];
  d11 = +HEAPF32[i5 + 20 >> 2];
  HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
  HEAPF32[i4 + 4 >> 2] = d7;
  HEAPF32[i4 + 8 >> 2] = d8;
  HEAPF32[i4 + 12 >> 2] = d9;
  HEAPF32[i4 + 16 >> 2] = d10;
  HEAPF32[i4 + 20 >> 2] = d11;
  HEAP32[i1 >> 2] = i4;
  return;
 } else {
  return;
 }
}
function __ZN7WebCore11CanvasStyleC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0;
 i3 = i2;
 i4 = i1;
 i5 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 HEAP32[i4 + 4 >> 2] = i6;
 i4 = i6;
 i6 = i5;
 if ((i4 | 0) == 2) {
  i5 = i6 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  return;
 } else if ((i4 | 0) == 3) {
  i5 = i6 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  return;
 } else if ((i4 | 0) == 1) {
  i4 = __ZN3WTF10fastMallocEj(24) | 0;
  i5 = HEAP32[i2 >> 2] | 0;
  d7 = +HEAPF32[i5 + 4 >> 2];
  d8 = +HEAPF32[i5 + 8 >> 2];
  d9 = +HEAPF32[i5 + 12 >> 2];
  d10 = +HEAPF32[i5 + 16 >> 2];
  d11 = +HEAPF32[i5 + 20 >> 2];
  HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
  HEAPF32[i4 + 4 >> 2] = d7;
  HEAPF32[i4 + 8 >> 2] = d8;
  HEAPF32[i4 + 12 >> 2] = d9;
  HEAPF32[i4 + 16 >> 2] = d10;
  HEAPF32[i4 + 20 >> 2] = d11;
  HEAP32[i1 >> 2] = i4;
  return;
 } else {
  return;
 }
}
function __ZNK7WebCore11CanvasStyle17isEquivalentColorERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if ((i3 | 0) == 0) {
  i4 = (HEAP32[i1 >> 2] | 0) == (HEAP32[i2 >> 2] | 0);
  return i4 | 0;
 } else if ((i3 | 0) == 1) {
  i3 = HEAP32[i1 >> 2] | 0;
  i1 = HEAP32[i2 >> 2] | 0;
  if (+HEAPF32[i3 + 4 >> 2] != +HEAPF32[i1 + 4 >> 2]) {
   i4 = 0;
   return i4 | 0;
  }
  if (+HEAPF32[i3 + 8 >> 2] != +HEAPF32[i1 + 8 >> 2]) {
   i4 = 0;
   return i4 | 0;
  }
  if (+HEAPF32[i3 + 12 >> 2] != +HEAPF32[i1 + 12 >> 2]) {
   i4 = 0;
   return i4 | 0;
  }
  if (+HEAPF32[i3 + 16 >> 2] != +HEAPF32[i1 + 16 >> 2]) {
   i4 = 0;
   return i4 | 0;
  }
  i4 = +HEAPF32[i3 + 20 >> 2] == +HEAPF32[i1 + 20 >> 2];
  return i4 | 0;
 } else {
  i4 = 0;
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore11CanvasStyle33createFromStringWithOverrideAlphaERKN3WTF6StringEf(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 8 | 0) | 0) {
  HEAPF32[i1 >> 2] = d3;
  HEAP32[i1 + 4 >> 2] = 5;
  STACKTOP = i4;
  return;
 }
 if (__ZN7WebCore9CSSParser10parseColorERjRKN3WTF6StringEb(i5, i2, 0) | 0) {
  HEAP32[i1 >> 2] = __ZN7WebCore22colorWithOverrideAlphaEjf(HEAP32[i5 >> 2] | 0, d3) | 0;
  HEAP32[i1 + 4 >> 2] = 0;
  STACKTOP = i4;
  return;
 } else {
  __ZN7WebCore9CSSParser16parseSystemColorERjRKN3WTF6StringEPNS_8DocumentE(i5, i2, 0) | 0;
  HEAP32[i1 + 4 >> 2] = 6;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore11CanvasStyle16createFromStringERKN3WTF6StringEPNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 8 | 0) | 0) {
  HEAP32[i1 + 4 >> 2] = 4;
  STACKTOP = i4;
  return;
 }
 do {
  if (!(__ZN7WebCore9CSSParser10parseColorERjRKN3WTF6StringEb(i5, i2, 0) | 0)) {
   if (__ZN7WebCore9CSSParser16parseSystemColorERjRKN3WTF6StringEPNS_8DocumentE(i5, i2, i3) | 0) {
    break;
   }
   HEAP32[i1 + 4 >> 2] = 6;
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i1 + 4 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11CanvasStyle17isEquivalentCMYKAEfffff(i1, d2, d3, d4, d5, d6) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 var i7 = 0, i8 = 0;
 do {
  if ((HEAP32[i1 + 4 >> 2] | 0) == 1) {
   i7 = HEAP32[i1 >> 2] | 0;
   if (+HEAPF32[i7 + 4 >> 2] != d2) {
    i8 = 0;
    break;
   }
   if (+HEAPF32[i7 + 8 >> 2] != d3) {
    i8 = 0;
    break;
   }
   if (+HEAPF32[i7 + 12 >> 2] != d4) {
    i8 = 0;
    break;
   }
   if (+HEAPF32[i7 + 16 >> 2] != d5) {
    i8 = 0;
    break;
   }
   i8 = +HEAPF32[i7 + 20 >> 2] == d6;
  } else {
   i8 = 0;
  }
 } while (0);
 return i8 | 0;
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
function __ZN7WebCore11CanvasStyleC2Efffff(i1, d2, d3, d4, d5, d6) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 var i7 = 0;
 i7 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i7 >> 2] = __ZN7WebCore17makeRGBAFromCMYKAEfffff(d2, d3, d4, d5, d6) | 0;
 HEAPF32[i7 + 4 >> 2] = d2;
 HEAPF32[i7 + 8 >> 2] = d3;
 HEAPF32[i7 + 12 >> 2] = d4;
 HEAPF32[i7 + 16 >> 2] = d5;
 HEAPF32[i7 + 20 >> 2] = d6;
 HEAP32[i1 >> 2] = i7;
 HEAP32[i1 + 4 >> 2] = 1;
 return;
}
function __ZN7WebCore11CanvasStyleC1Efffff(i1, d2, d3, d4, d5, d6) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 var i7 = 0;
 i7 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i7 >> 2] = __ZN7WebCore17makeRGBAFromCMYKAEfffff(d2, d3, d4, d5, d6) | 0;
 HEAPF32[i7 + 4 >> 2] = d2;
 HEAPF32[i7 + 8 >> 2] = d3;
 HEAPF32[i7 + 12 >> 2] = d4;
 HEAPF32[i7 + 16 >> 2] = d5;
 HEAPF32[i7 + 20 >> 2] = d6;
 HEAP32[i1 >> 2] = i7;
 HEAP32[i1 + 4 >> 2] = 1;
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
function __ZNK7WebCore11CanvasStyle16isEquivalentRGBAEffff(i1, d2, d3, d4, d5) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 var i6 = 0, i7 = 0;
 if ((HEAP32[i1 + 4 >> 2] | 0) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 i7 = HEAP32[i1 >> 2] | 0;
 i6 = (i7 | 0) == (__ZN7WebCore20makeRGBA32FromFloatsEffff(d2, d3, d4, d5) | 0);
 return i6 | 0;
}
function __ZN7WebCore11CanvasStyleC2EN3WTF10PassRefPtrINS_14CanvasGradientEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = (i2 | 0) == 0 ? 6 : 2;
 return;
}
function __ZN7WebCore11CanvasStyleC1EN3WTF10PassRefPtrINS_14CanvasGradientEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = (i2 | 0) == 0 ? 6 : 2;
 return;
}
function __ZN7WebCore11CanvasStyleC2EN3WTF10PassRefPtrINS_13CanvasPatternEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = (i2 | 0) == 0 ? 6 : 3;
 return;
}
function __ZN7WebCore11CanvasStyleC1EN3WTF10PassRefPtrINS_13CanvasPatternEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = (i2 | 0) == 0 ? 6 : 3;
 return;
}
function __ZN7WebCore11CanvasStyleC2Effff(i1, d2, d3, d4, d5) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 HEAP32[i1 >> 2] = __ZN7WebCore20makeRGBA32FromFloatsEffff(d2, d3, d4, d5) | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore11CanvasStyleC1Effff(i1, d2, d3, d4, d5) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 HEAP32[i1 >> 2] = __ZN7WebCore20makeRGBA32FromFloatsEffff(d2, d3, d4, d5) | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore11CanvasStyleC2Eff(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 HEAP32[i1 >> 2] = __ZN7WebCore20makeRGBA32FromFloatsEffff(d2, d2, d2, d3) | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore11CanvasStyleC1Eff(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 HEAP32[i1 >> 2] = __ZN7WebCore20makeRGBA32FromFloatsEffff(d2, d2, d2, d3) | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function dynCall_vifffff(i1, i2, d3, d4, d5, d6, d7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 d7 = +d7;
 FUNCTION_TABLE_vifffff[i1 & 3](i2 | 0, +d3, +d4, +d5, +d6, +d7);
}
function dynCall_viffff(i1, i2, d3, d4, d5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 FUNCTION_TABLE_viffff[i1 & 3](i2 | 0, +d3, +d4, +d5, +d6);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function dynCall_viff(i1, i2, d3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 FUNCTION_TABLE_viff[i1 & 3](i2 | 0, +d3, +d4);
}
function __ZN7WebCore11CanvasStyleC2Ej(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore11CanvasStyleC1Ej(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
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
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function b0(i1, d2, d3, d4, d5, d6) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 abort(0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function b7(i1, d2, d3, d4, d5) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 abort(7);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
}
function b3(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 abort(3);
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
function b5() {
 abort(5);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vifffff = [b0,b0,__ZN7WebCore11CanvasStyleC2Efffff,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore11CanvasStyleD2Ev,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore11CanvasStyleC2ERKS0_,b2,__ZN7WebCore11CanvasStyleC2Ej,b2,__ZN7WebCore11CanvasStyleC2EN3WTF10PassRefPtrINS_14CanvasGradientEEE,b2,__ZN7WebCore11CanvasStyleC2EN3WTF10PassRefPtrINS_13CanvasPatternEEE,b2,b2,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_viff = [b3,b3,__ZN7WebCore11CanvasStyleC2Eff,b3];
  var FUNCTION_TABLE_ii = [b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  var FUNCTION_TABLE_viffff = [b7,b7,__ZN7WebCore11CanvasStyleC2Effff,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vifffff: dynCall_vifffff, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_viff: dynCall_viff, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viffff: dynCall_viffff };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vifffff": invoke_vifffff, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_viff": invoke_viff, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viffff": invoke_viffff, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vifffff = Module["dynCall_vifffff"] = asm["dynCall_vifffff"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_viff = Module["dynCall_viff"] = asm["dynCall_viff"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viffff = Module["dynCall_viffff"] = asm["dynCall_viffff"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore11CanvasStyle33createFromStringWithOverrideAlphaERKN3WTF6StringEf","_strlen","__ZN7WebCore12currentColorEPNS_17HTMLCanvasElementE","__ZNK7WebCore11CanvasStyle17isEquivalentCMYKAEfffff","__ZN7WebCore11CanvasStyle16createFromStringERKN3WTF6StringEPNS_8DocumentE","__ZN7WebCore11CanvasStyleD2Ev","__ZN7WebCore11CanvasStyleC2ERKS0_","_memset","__ZN7WebCore11CanvasStyleC2EN3WTF10PassRefPtrINS_13CanvasPatternEEE","_memcpy","__ZNK7WebCore11CanvasStyle16applyStrokeColorEPNS_15GraphicsContextE","__ZNK7WebCore11CanvasStyle16isEquivalentRGBAEffff","__ZNK7WebCore11CanvasStyle14applyFillColorEPNS_15GraphicsContextE","__ZN7WebCore11CanvasStyleC2Eff","__ZN7WebCore24parseColorOrCurrentColorERjRKN3WTF6StringEPNS_17HTMLCanvasElementE","__ZN7WebCore11CanvasStyleC2Ej","__ZN7WebCore11CanvasStyleC2EN3WTF10PassRefPtrINS_14CanvasGradientEEE","__ZN7WebCore11CanvasStyleaSERKS0_","__ZN7WebCore11CanvasStyleC2Efffff","__ZNK7WebCore11CanvasStyle17isEquivalentColorERKS0_","__ZN7WebCore11CanvasStyleC2Effff"]

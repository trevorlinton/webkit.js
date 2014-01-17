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
H_BASE = parentModule["_malloc"](320 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 320;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiidi(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiidi"](index,a1,a2,a3,a4,a5);
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore27DeprecatedBasicShapeEllipseE=(H_BASE+8)|0;
  var __ZTVN7WebCore17BasicShapeEllipseE=(H_BASE+208)|0;
  var __ZTVN7WebCore24BasicShapeInsetRectangleE=(H_BASE+88)|0;
  var __ZTVN7WebCore26DeprecatedBasicShapeCircleE=(H_BASE+48)|0;
  var __ZTVN7WebCore15BasicShapeInsetE=(H_BASE+288)|0;
  var __ZTVN7WebCore16BasicShapeCircleE=(H_BASE+248)|0;
  var __ZTVN7WebCore17BasicShapePolygonE=(H_BASE+168)|0;
  var __ZTVN7WebCore19BasicShapeRectangleE=(H_BASE+128)|0;
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
  var invoke_viiidi=env.invoke_viiidi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var _sqrtf=env._sqrtf;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore17BasicShapeEllipse5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 32 | 0;
 i11 = i6 + 48 | 0;
 i12 = i6 + 64 | 0;
 i13 = i6 + 80 | 0;
 i14 = i6 + 88 | 0;
 i15 = i6 + 104 | 0;
 i16 = i6 + 120 | 0;
 i17 = i6 + 136 | 0;
 i18 = __ZN3WTF10fastMallocEj(60) | 0;
 i19 = i18 + 4 | 0;
 HEAP32[i19 >> 2] = 1;
 HEAP32[i18 + 8 >> 2] = 0;
 HEAP32[i18 >> 2] = H_BASE + 216;
 i20 = i18 + 12 | 0;
 HEAP32[i20 >> 2] = 0;
 i21 = i18 + 16 | 0;
 HEAP32[i21 >> 2] = 0;
 HEAP8[i18 + 20 | 0] = 0;
 HEAP8[i18 + 21 | 0] = 15;
 HEAP8[i18 + 22 | 0] = 0;
 i22 = i18 + 24 | 0;
 HEAP32[i22 >> 2] = 0;
 i23 = i18 + 28 | 0;
 HEAP32[i23 >> 2] = 0;
 HEAP8[i18 + 32 | 0] = 0;
 HEAP8[i18 + 33 | 0] = 15;
 HEAP8[i18 + 34 | 0] = 0;
 i24 = i18 + 36 | 0;
 HEAP32[i24 >> 2] = 0;
 HEAP8[i18 + 40 | 0] = 0;
 HEAP8[i18 + 41 | 0] = 15;
 HEAP8[i18 + 42 | 0] = 0;
 i25 = i18 + 44 | 0;
 HEAP32[i25 >> 2] = 1;
 i26 = i18 + 48 | 0;
 HEAP32[i26 >> 2] = 0;
 HEAP8[i18 + 52 | 0] = 0;
 HEAP8[i18 + 53 | 0] = 15;
 HEAP8[i18 + 54 | 0] = 0;
 i27 = i18 + 56 | 0;
 HEAP32[i27 >> 2] = 1;
 i28 = i2 + 44 | 0;
 do {
  if ((HEAP32[i28 >> 2] | 0) == 0) {
   i29 = i3 + 36 | 0;
   i30 = i3 + 44 | 0;
   if ((HEAP32[i30 >> 2] | 0) != 0) {
    break;
   }
   i31 = i2 + 56 | 0;
   if ((HEAP32[i31 >> 2] | 0) != 0) {
    break;
   }
   i32 = i3 + 48 | 0;
   i33 = i3 + 56 | 0;
   if ((HEAP32[i33 >> 2] | 0) != 0) {
    break;
   }
   __ZNK7WebCore10BasicShape16referenceBoxSizeERKNS_9RenderBoxE(i13, i2 | 0, i5);
   __ZNK7WebCore26BasicShapeCenterCoordinate5blendERKS0_dRKNS_9FloatSizeE(i14, i2 + 12 | 0, i3 + 12 | 0, d4, i13);
   HEAP32[i20 >> 2] = HEAP32[i14 >> 2];
   i34 = i14 + 4 | 0;
   i35 = i34;
   i36 = i21;
   i37 = HEAP32[i35 >> 2] | 0;
   i38 = HEAP32[i35 + 4 >> 2] | 0;
   HEAP32[i36 >> 2] = i37;
   HEAP32[i36 + 4 >> 2] = i38;
   if ((i37 & 0 | 0) == 0 & (i38 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i21);
   }
   if ((HEAP8[i14 + 9 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i34);
   }
   __ZNK7WebCore26BasicShapeCenterCoordinate5blendERKS0_dRKNS_9FloatSizeE(i15, i2 + 24 | 0, i3 + 24 | 0, d4, i13);
   HEAP32[i22 >> 2] = HEAP32[i15 >> 2];
   i34 = i15 + 4 | 0;
   i38 = i34;
   i37 = i23;
   i36 = HEAP32[i38 >> 2] | 0;
   i35 = HEAP32[i38 + 4 >> 2] | 0;
   HEAP32[i37 >> 2] = i36;
   HEAP32[i37 + 4 >> 2] = i35;
   if ((i36 & 0 | 0) == 0 & (i35 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i23);
   }
   if ((HEAP8[i15 + 9 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i34);
   }
   i34 = i7;
   do {
    if ((HEAP32[i28 >> 2] | 0) == 0) {
     if ((HEAP32[i30 >> 2] | 0) != 0) {
      i39 = 40;
      break;
     }
     __ZNK7WebCore6Length5blendERKS0_d(i34, i2 + 36 | 0, i29, d4);
     i35 = i16;
     i36 = HEAP32[i7 >> 2] | 0;
     i37 = HEAP32[i7 + 4 >> 2] | 0;
     HEAP32[i35 >> 2] = i36;
     HEAP32[i35 + 4 >> 2] = i37;
     if ((i36 & 0 | 0) == 0 & (i37 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i16 | 0);
     }
     HEAP32[i16 + 8 >> 2] = 0;
     if ((HEAP8[i34 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i34);
    } else {
     i39 = 40;
    }
   } while (0);
   if ((i39 | 0) == 40) {
    i34 = i29;
    i37 = i16;
    i36 = HEAP32[i34 >> 2] | 0;
    i35 = HEAP32[i34 + 4 >> 2] | 0;
    HEAP32[i37 >> 2] = i36;
    HEAP32[i37 + 4 >> 2] = i35;
    if ((i36 & 0 | 0) == 0 & (i35 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i16 | 0);
    }
    HEAP32[i16 + 8 >> 2] = HEAP32[i30 >> 2];
   }
   i35 = i16;
   i36 = i24;
   i37 = HEAP32[i35 >> 2] | 0;
   i34 = HEAP32[i35 + 4 >> 2] | 0;
   HEAP32[i36 >> 2] = i37;
   HEAP32[i36 + 4 >> 2] = i34;
   if ((i37 & 0 | 0) == 0 & (i34 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i24);
   }
   HEAP32[i25 >> 2] = HEAP32[i16 + 8 >> 2];
   if ((HEAP8[i16 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i16 | 0);
   }
   i34 = i8;
   do {
    if ((HEAP32[i31 >> 2] | 0) == 0) {
     if ((HEAP32[i33 >> 2] | 0) != 0) {
      i39 = 53;
      break;
     }
     __ZNK7WebCore6Length5blendERKS0_d(i34, i2 + 48 | 0, i32, d4);
     i37 = i17;
     i36 = HEAP32[i8 >> 2] | 0;
     i35 = HEAP32[i8 + 4 >> 2] | 0;
     HEAP32[i37 >> 2] = i36;
     HEAP32[i37 + 4 >> 2] = i35;
     if ((i36 & 0 | 0) == 0 & (i35 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i17 | 0);
     }
     HEAP32[i17 + 8 >> 2] = 0;
     if ((HEAP8[i34 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i34);
    } else {
     i39 = 53;
    }
   } while (0);
   if ((i39 | 0) == 53) {
    i34 = i32;
    i31 = i17;
    i30 = HEAP32[i34 >> 2] | 0;
    i29 = HEAP32[i34 + 4 >> 2] | 0;
    HEAP32[i31 >> 2] = i30;
    HEAP32[i31 + 4 >> 2] = i29;
    if ((i30 & 0 | 0) == 0 & (i29 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i17 | 0);
    }
    HEAP32[i17 + 8 >> 2] = HEAP32[i33 >> 2];
   }
   i29 = i17;
   i30 = i26;
   i31 = HEAP32[i29 >> 2] | 0;
   i34 = HEAP32[i29 + 4 >> 2] | 0;
   HEAP32[i30 >> 2] = i31;
   HEAP32[i30 + 4 >> 2] = i34;
   if ((i31 & 0 | 0) == 0 & (i34 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i26);
   }
   HEAP32[i27 >> 2] = HEAP32[i17 + 8 >> 2];
   if ((HEAP8[i17 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i17 | 0);
   }
   HEAP32[i1 >> 2] = i18;
   STACKTOP = i6;
   return;
  }
 } while (0);
 i17 = i9 | 0;
 i39 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i17 >> 2] = i39;
 i8 = i9 + 4 | 0;
 i2 = i3 + 16 | 0;
 i16 = i8;
 i7 = HEAP32[i2 >> 2] | 0;
 i28 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i16 >> 2] = i7;
 HEAP32[i16 + 4 >> 2] = i28;
 if ((i7 & 0 | 0) == 0 & (i28 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i8);
  i40 = HEAP32[i17 >> 2] | 0;
 } else {
  i40 = i39;
 }
 HEAP32[i20 >> 2] = i40;
 i40 = i21;
 i20 = HEAP32[i16 >> 2] | 0;
 i39 = HEAP32[i16 + 4 >> 2] | 0;
 HEAP32[i40 >> 2] = i20;
 HEAP32[i40 + 4 >> 2] = i39;
 if ((i20 & 0 | 0) == 0 & (i39 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i21);
 }
 if ((HEAP8[i9 + 9 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i8);
 }
 i8 = i10 | 0;
 i9 = HEAP32[i3 + 24 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 i21 = i10 + 4 | 0;
 i39 = i3 + 28 | 0;
 i20 = i21;
 i40 = HEAP32[i39 >> 2] | 0;
 i16 = HEAP32[i39 + 4 >> 2] | 0;
 HEAP32[i20 >> 2] = i40;
 HEAP32[i20 + 4 >> 2] = i16;
 if ((i40 & 0 | 0) == 0 & (i16 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i21);
  i41 = HEAP32[i8 >> 2] | 0;
 } else {
  i41 = i9;
 }
 HEAP32[i22 >> 2] = i41;
 i41 = i23;
 i22 = HEAP32[i20 >> 2] | 0;
 i9 = HEAP32[i20 + 4 >> 2] | 0;
 HEAP32[i41 >> 2] = i22;
 HEAP32[i41 + 4 >> 2] = i9;
 if ((i22 & 0 | 0) == 0 & (i9 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i23);
 }
 if ((HEAP8[i10 + 9 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i21);
 }
 i21 = i3 + 36 | 0;
 i10 = i11;
 i23 = HEAP32[i21 >> 2] | 0;
 i9 = HEAP32[i21 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = i23;
 HEAP32[i10 + 4 >> 2] = i9;
 if ((i23 & 0 | 0) == 0 & (i9 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i11 | 0);
  i42 = HEAP32[i10 + 4 >> 2] | 0;
  i43 = HEAP32[i10 >> 2] | 0;
 } else {
  i42 = i9;
  i43 = i23;
 }
 i23 = i11 + 8 | 0;
 HEAP32[i23 >> 2] = HEAP32[i3 + 44 >> 2];
 i9 = i24;
 HEAP32[i9 >> 2] = i43;
 HEAP32[i9 + 4 >> 2] = i42;
 if ((i43 & 0 | 0) == 0 & (i42 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i24);
 }
 HEAP32[i25 >> 2] = HEAP32[i23 >> 2];
 if ((HEAP8[i11 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i11 | 0);
 }
 i11 = i3 + 48 | 0;
 i23 = i12;
 i25 = HEAP32[i11 >> 2] | 0;
 i24 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i23 >> 2] = i25;
 HEAP32[i23 + 4 >> 2] = i24;
 if ((i25 & 0 | 0) == 0 & (i24 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i12 | 0);
  i44 = HEAP32[i23 + 4 >> 2] | 0;
  i45 = HEAP32[i23 >> 2] | 0;
 } else {
  i44 = i24;
  i45 = i25;
 }
 i25 = i12 + 8 | 0;
 HEAP32[i25 >> 2] = HEAP32[i3 + 56 >> 2];
 i3 = i26;
 HEAP32[i3 >> 2] = i45;
 HEAP32[i3 + 4 >> 2] = i44;
 if ((i45 & 0 | 0) == 0 & (i44 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i26);
 }
 HEAP32[i27 >> 2] = HEAP32[i25 >> 2];
 if ((HEAP8[i12 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i12 | 0);
 }
 i12 = i18;
 HEAP32[i1 >> 2] = i12;
 if ((i18 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i1 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = i1 + 1;
 if ((i1 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 63](i12);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i19 >> 2] = i1;
  STACKTOP = i6;
  return;
 }
}
function __ZNK7WebCore15BasicShapeInset5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
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
 STACKTOP = STACKTOP + 16 | 0;
 i23 = i22 | 0;
 i24 = i22;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i26 = i25 | 0;
 i27 = i25;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i29 = i28 | 0;
 i30 = i28;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i32 = i31 | 0;
 i33 = i31;
 i34 = __ZN3WTF10fastMallocEj(108) | 0;
 HEAP32[i34 + 4 >> 2] = 1;
 HEAP32[i34 + 8 >> 2] = 0;
 HEAP32[i34 >> 2] = H_BASE + 296;
 i35 = i34 + 12 | 0;
 _memset(i35 | 0, 0, 7) | 0;
 i36 = i34 + 20 | 0;
 _memset(i36 | 0, 0, 7) | 0;
 i37 = i34 + 28 | 0;
 _memset(i37 | 0, 0, 7) | 0;
 i38 = i34 + 36 | 0;
 _memset(i38 | 0, 0, 7) | 0;
 i39 = i34 + 44 | 0;
 _memset(i39 | 0, 0, 7) | 0;
 i40 = i34 + 52 | 0;
 _memset(i40 | 0, 0, 7) | 0;
 i41 = i34 + 60 | 0;
 _memset(i41 | 0, 0, 7) | 0;
 i42 = i34 + 68 | 0;
 _memset(i42 | 0, 0, 7) | 0;
 i43 = i34 + 76 | 0;
 _memset(i43 | 0, 0, 7) | 0;
 i44 = i34 + 84 | 0;
 _memset(i44 | 0, 0, 7) | 0;
 i45 = i34 + 92 | 0;
 _memset(i45 | 0, 0, 7) | 0;
 i46 = i34 + 100 | 0;
 _memset(i46 | 0, 0, 7) | 0;
 __ZNK7WebCore6Length5blendERKS0_d(i15, i2 + 20 | 0, i3 + 20 | 0, d4);
 do {
  if ((i36 | 0) == (i14 | 0)) {
   if ((HEAP8[i15 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i15);
  } else {
   i47 = i36;
   i48 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i47 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i47 + 4 >> 2] = i48;
   HEAP8[i15 + 5 | 0] = 0;
  }
 } while (0);
 __ZNK7WebCore6Length5blendERKS0_d(i17, i2 + 12 | 0, i3 + 12 | 0, d4);
 do {
  if ((i35 | 0) == (i16 | 0)) {
   if ((HEAP8[i17 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i17);
  } else {
   i15 = i35;
   i14 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i15 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i15 + 4 >> 2] = i14;
   HEAP8[i17 + 5 | 0] = 0;
  }
 } while (0);
 __ZNK7WebCore6Length5blendERKS0_d(i19, i2 + 28 | 0, i3 + 28 | 0, d4);
 do {
  if ((i37 | 0) == (i18 | 0)) {
   if ((HEAP8[i19 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i19);
  } else {
   i17 = i37;
   i16 = HEAP32[i18 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i17 + 4 >> 2] = i16;
   HEAP8[i19 + 5 | 0] = 0;
  }
 } while (0);
 __ZNK7WebCore6Length5blendERKS0_d(i21, i2 + 36 | 0, i3 + 36 | 0, d4);
 do {
  if ((i38 | 0) == (i20 | 0)) {
   if ((HEAP8[i21 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i21);
  } else {
   i19 = i38;
   i18 = HEAP32[i20 + 4 >> 2] | 0;
   HEAP32[i19 >> 2] = HEAP32[i20 >> 2];
   HEAP32[i19 + 4 >> 2] = i18;
   HEAP8[i21 + 5 | 0] = 0;
  }
 } while (0);
 i21 = i3 + 44 | 0;
 __ZNK7WebCore6Length5blendERKS0_d(i8, i2 + 44 | 0, i21, d4);
 __ZNK7WebCore6Length5blendERKS0_d(i9, i2 + 52 | 0, i21 + 8 | 0, d4);
 i21 = HEAP32[i8 >> 2] | 0;
 i20 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i23 >> 2] = i21;
 HEAP32[i23 + 4 >> 2] = i20;
 i23 = i22 + 8 | 0;
 i8 = i23;
 i38 = HEAP32[i9 >> 2] | 0;
 i18 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i23 >> 2] = i38;
 HEAP32[i23 + 4 >> 2] = i18;
 do {
  if ((i39 | 0) == (i22 | 0)) {
   if (!((i38 & 0 | 0) == 0 & (i18 & 65280 | 0) == 2560)) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i8);
  } else {
   i9 = i39;
   HEAP32[i9 >> 2] = i21;
   HEAP32[i9 + 4 >> 2] = i20;
   HEAP8[i24 + 5 | 0] = 0;
   i9 = i40;
   i19 = HEAP32[i23 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i23 >> 2];
   HEAP32[i9 + 4 >> 2] = i19;
   HEAP8[i24 + 13 | 0] = 0;
  }
 } while (0);
 if ((HEAP8[i24 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i22);
 }
 __ZNK7WebCore6Length5blendERKS0_d(i6, i2 + 60 | 0, i3 + 60 | 0, d4);
 __ZNK7WebCore6Length5blendERKS0_d(i7, i2 + 68 | 0, i3 + 68 | 0, d4);
 i22 = HEAP32[i6 >> 2] | 0;
 i24 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i26 >> 2] = i22;
 HEAP32[i26 + 4 >> 2] = i24;
 i26 = i25 + 8 | 0;
 i6 = i26;
 i23 = HEAP32[i7 >> 2] | 0;
 i40 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i26 >> 2] = i23;
 HEAP32[i26 + 4 >> 2] = i40;
 do {
  if ((i41 | 0) == (i25 | 0)) {
   if (!((i23 & 0 | 0) == 0 & (i40 & 65280 | 0) == 2560)) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
  } else {
   i7 = i41;
   HEAP32[i7 >> 2] = i22;
   HEAP32[i7 + 4 >> 2] = i24;
   HEAP8[i27 + 5 | 0] = 0;
   i7 = i42;
   i20 = HEAP32[i26 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i26 >> 2];
   HEAP32[i7 + 4 >> 2] = i20;
   HEAP8[i27 + 13 | 0] = 0;
  }
 } while (0);
 if ((HEAP8[i27 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i25);
 }
 i25 = i3 + 76 | 0;
 __ZNK7WebCore6Length5blendERKS0_d(i10, i2 + 76 | 0, i25, d4);
 __ZNK7WebCore6Length5blendERKS0_d(i11, i2 + 84 | 0, i25 + 8 | 0, d4);
 i25 = HEAP32[i10 >> 2] | 0;
 i27 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i29 >> 2] = i25;
 HEAP32[i29 + 4 >> 2] = i27;
 i29 = i28 + 8 | 0;
 i10 = i29;
 i26 = HEAP32[i11 >> 2] | 0;
 i42 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i29 >> 2] = i26;
 HEAP32[i29 + 4 >> 2] = i42;
 do {
  if ((i43 | 0) == (i28 | 0)) {
   if (!((i26 & 0 | 0) == 0 & (i42 & 65280 | 0) == 2560)) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i10);
  } else {
   i11 = i43;
   HEAP32[i11 >> 2] = i25;
   HEAP32[i11 + 4 >> 2] = i27;
   HEAP8[i30 + 5 | 0] = 0;
   i11 = i44;
   i24 = HEAP32[i29 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i29 >> 2];
   HEAP32[i11 + 4 >> 2] = i24;
   HEAP8[i30 + 13 | 0] = 0;
  }
 } while (0);
 if ((HEAP8[i30 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i28);
 }
 i28 = i3 + 92 | 0;
 __ZNK7WebCore6Length5blendERKS0_d(i12, i2 + 92 | 0, i28, d4);
 __ZNK7WebCore6Length5blendERKS0_d(i13, i2 + 100 | 0, i28 + 8 | 0, d4);
 i28 = HEAP32[i12 >> 2] | 0;
 i2 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i32 >> 2] = i28;
 HEAP32[i32 + 4 >> 2] = i2;
 i32 = i31 + 8 | 0;
 i12 = i32;
 i3 = HEAP32[i13 >> 2] | 0;
 i30 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i32 >> 2] = i3;
 HEAP32[i32 + 4 >> 2] = i30;
 do {
  if ((i45 | 0) == (i31 | 0)) {
   if (!((i3 & 0 | 0) == 0 & (i30 & 65280 | 0) == 2560)) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i12);
  } else {
   i13 = i45;
   HEAP32[i13 >> 2] = i28;
   HEAP32[i13 + 4 >> 2] = i2;
   HEAP8[i33 + 5 | 0] = 0;
   i13 = i46;
   i29 = HEAP32[i32 + 4 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i32 >> 2];
   HEAP32[i13 + 4 >> 2] = i29;
   HEAP8[i33 + 13 | 0] = 0;
  }
 } while (0);
 if ((HEAP8[i33 + 5 | 0] | 0) != 10) {
  i49 = i1 | 0;
  i50 = i34;
  HEAP32[i49 >> 2] = i50;
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i31);
 i49 = i1 | 0;
 i50 = i34;
 HEAP32[i49 >> 2] = i50;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore6Length5blendERKS0_d(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0, d16 = +0, d17 = +0;
 i5 = HEAP8[i3 + 5 | 0] | 0;
 do {
  if (i5 << 24 >> 24 != 10) {
   i6 = HEAP8[i2 + 5 | 0] | 0;
   if (i6 << 24 >> 24 == 10) {
    break;
   }
   if ((HEAP8[i3 + 6 | 0] & 1) == 0) {
    if ((HEAP32[i3 >> 2] | 0) != 0) {
     i7 = 7;
    }
   } else {
    if (+HEAPF32[i3 >> 2] != +0) {
     i7 = 7;
    }
   }
   do {
    if ((i7 | 0) == 7) {
     if ((HEAP8[i2 + 6 | 0] & 1) == 0) {
      if ((HEAP32[i2 >> 2] | 0) == 0 | i5 << 24 >> 24 == i6 << 24 >> 24) {
       break;
      }
     } else {
      if (+HEAPF32[i2 >> 2] == +0 | i5 << 24 >> 24 == i6 << 24 >> 24) {
       break;
      }
     }
     __ZNK7WebCore6Length15blendMixedTypesERKS0_d(i1, i2, i3, d4);
     return;
    }
   } while (0);
   if ((HEAP8[i3 + 6 | 0] & 1) == 0) {
    if ((HEAP32[i3 >> 2] | 0) == 0) {
     i7 = 14;
    }
   } else {
    if (+HEAPF32[i3 >> 2] == +0) {
     i7 = 14;
    }
   }
   do {
    if ((i7 | 0) == 14) {
     if ((HEAP8[i2 + 6 | 0] & 1) == 0) {
      if ((HEAP32[i2 >> 2] | 0) != 0) {
       break;
      }
     } else {
      if (+HEAPF32[i2 >> 2] != +0) {
       break;
      }
     }
     i8 = i2;
     i9 = i1;
     i10 = HEAP32[i8 >> 2] | 0;
     i11 = HEAP32[i8 + 4 >> 2] | 0;
     HEAP32[i9 >> 2] = i10;
     HEAP32[i9 + 4 >> 2] = i11;
     if (!((i10 & 0 | 0) == 0 & (i11 & 65280 | 0) == 2560)) {
      return;
     }
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i1);
     return;
    }
   } while (0);
   i11 = i6 & 255;
   if ((HEAP8[i2 + 6 | 0] & 1) == 0) {
    if ((HEAP32[i2 >> 2] | 0) == 0) {
     i7 = 22;
    } else {
     i12 = i11;
    }
   } else {
    if (+HEAPF32[i2 >> 2] != +0) {
     i12 = i11;
    } else {
     i7 = 22;
    }
   }
   if ((i7 | 0) == 22) {
    i12 = i5 & 255;
   }
   if ((HEAP8[i3 + 6 | 0] & 1) == 0) {
    i13 = (HEAP32[i3 >> 2] | 0) != 0;
   } else {
    i13 = +HEAPF32[i3 >> 2] != +0;
   }
   if ((i12 | 0) == 2) {
    do {
     if (i13) {
      if ((HEAP8[i3 + 6 | 0] & 1) == 0) {
       d14 = +(HEAP32[i3 >> 2] | 0);
       break;
      } else {
       d14 = +HEAPF32[i3 >> 2];
       break;
      }
     } else {
      d14 = +0;
     }
    } while (0);
    i6 = HEAP8[i2 + 6 | 0] | 0;
    if ((i6 & 1) == 0) {
     if ((HEAP32[i2 >> 2] | 0) == 0) {
      d15 = +0;
     } else {
      i7 = 34;
     }
    } else {
     if (+HEAPF32[i2 >> 2] != +0) {
      i7 = 34;
     } else {
      d15 = +0;
     }
    }
    do {
     if ((i7 | 0) == 34) {
      if ((i6 & 1) == 0) {
       d15 = +(HEAP32[i2 >> 2] | 0);
       break;
      } else {
       d15 = +HEAPF32[i2 >> 2];
       break;
      }
     }
    } while (0);
    HEAPF32[i1 >> 2] = d14 + (d15 - d14) * d4;
    HEAP8[i1 + 4 | 0] = 0;
    HEAP8[i1 + 5 | 0] = 2;
    HEAP8[i1 + 6 | 0] = 1;
    return;
   } else {
    do {
     if (i13) {
      if ((HEAP8[i3 + 6 | 0] & 1) == 0) {
       d16 = +(HEAP32[i3 >> 2] | 0);
       break;
      } else {
       d16 = +HEAPF32[i3 >> 2];
       break;
      }
     } else {
      d16 = +0;
     }
    } while (0);
    i6 = HEAP8[i2 + 6 | 0] | 0;
    if ((i6 & 1) == 0) {
     if ((HEAP32[i2 >> 2] | 0) == 0) {
      d17 = +0;
     } else {
      i7 = 45;
     }
    } else {
     if (+HEAPF32[i2 >> 2] != +0) {
      i7 = 45;
     } else {
      d17 = +0;
     }
    }
    do {
     if ((i7 | 0) == 45) {
      if ((i6 & 1) == 0) {
       d17 = +(HEAP32[i2 >> 2] | 0);
       break;
      } else {
       d17 = +HEAPF32[i2 >> 2];
       break;
      }
     }
    } while (0);
    HEAPF32[i1 >> 2] = d16 + (d17 - d16) * d4;
    HEAP8[i1 + 4 | 0] = 0;
    HEAP8[i1 + 5 | 0] = i12;
    HEAP8[i1 + 6 | 0] = 1;
    return;
   }
  }
 } while (0);
 __ZNK7WebCore6Length15blendMixedTypesERKS0_d(i1, i2, i3, d4);
 return;
}
function __ZNK7WebCore16BasicShapeCircle5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 32 | 0;
 i11 = i6 + 48 | 0;
 i12 = __ZN3WTF10fastMallocEj(48) | 0;
 HEAP32[i12 + 4 >> 2] = 1;
 HEAP32[i12 + 8 >> 2] = 0;
 HEAP32[i12 >> 2] = H_BASE + 256;
 i13 = i12 + 12 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i12 + 16 | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP8[i12 + 20 | 0] = 0;
 HEAP8[i12 + 21 | 0] = 15;
 HEAP8[i12 + 22 | 0] = 0;
 i15 = i12 + 24 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i12 + 28 | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP8[i12 + 32 | 0] = 0;
 HEAP8[i12 + 33 | 0] = 15;
 HEAP8[i12 + 34 | 0] = 0;
 i17 = i12 + 36 | 0;
 HEAP32[i17 >> 2] = 0;
 HEAP8[i12 + 40 | 0] = 0;
 HEAP8[i12 + 41 | 0] = 15;
 HEAP8[i12 + 42 | 0] = 0;
 i18 = i12 + 44 | 0;
 HEAP32[i18 >> 2] = 1;
 __ZNK7WebCore10BasicShape16referenceBoxSizeERKNS_9RenderBoxE(i8, i2 | 0, i5);
 __ZNK7WebCore26BasicShapeCenterCoordinate5blendERKS0_dRKNS_9FloatSizeE(i9, i2 + 12 | 0, i3 + 12 | 0, d4, i8);
 HEAP32[i13 >> 2] = HEAP32[i9 >> 2];
 i13 = i9 + 4 | 0;
 i5 = i13;
 i19 = i14;
 i20 = HEAP32[i5 >> 2] | 0;
 i21 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i19 >> 2] = i20;
 HEAP32[i19 + 4 >> 2] = i21;
 if ((i20 & 0 | 0) == 0 & (i21 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i14);
 }
 if ((HEAP8[i9 + 9 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i13);
 }
 __ZNK7WebCore26BasicShapeCenterCoordinate5blendERKS0_dRKNS_9FloatSizeE(i10, i2 + 24 | 0, i3 + 24 | 0, d4, i8);
 HEAP32[i15 >> 2] = HEAP32[i10 >> 2];
 i15 = i10 + 4 | 0;
 i8 = i15;
 i13 = i16;
 i9 = HEAP32[i8 >> 2] | 0;
 i14 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = i9;
 HEAP32[i13 + 4 >> 2] = i14;
 if ((i9 & 0 | 0) == 0 & (i14 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i16);
 }
 if ((HEAP8[i10 + 9 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i15);
 }
 i15 = i3 + 36 | 0;
 i10 = i7;
 do {
  if ((HEAP32[i2 + 44 >> 2] | 0) == 0) {
   if ((HEAP32[i3 + 44 >> 2] | 0) != 0) {
    i22 = 11;
    break;
   }
   __ZNK7WebCore6Length5blendERKS0_d(i10, i2 + 36 | 0, i15, d4);
   i16 = i11;
   i14 = HEAP32[i7 >> 2] | 0;
   i9 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i16 >> 2] = i14;
   HEAP32[i16 + 4 >> 2] = i9;
   if ((i14 & 0 | 0) == 0 & (i9 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i11 | 0);
   }
   HEAP32[i11 + 8 >> 2] = 0;
   if ((HEAP8[i10 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i10);
  } else {
   i22 = 11;
  }
 } while (0);
 if ((i22 | 0) == 11) {
  i22 = i15;
  i15 = i11;
  i10 = HEAP32[i22 >> 2] | 0;
  i7 = HEAP32[i22 + 4 >> 2] | 0;
  HEAP32[i15 >> 2] = i10;
  HEAP32[i15 + 4 >> 2] = i7;
  if ((i10 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i11 | 0);
  }
  HEAP32[i11 + 8 >> 2] = HEAP32[i3 + 44 >> 2];
 }
 i3 = i11;
 i7 = i17;
 i10 = HEAP32[i3 >> 2] | 0;
 i15 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = i10;
 HEAP32[i7 + 4 >> 2] = i15;
 if ((i10 & 0 | 0) == 0 & (i15 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i17);
 }
 HEAP32[i18 >> 2] = HEAP32[i11 + 8 >> 2];
 if ((HEAP8[i11 + 5 | 0] | 0) != 10) {
  i23 = i1 | 0;
  i24 = i12;
  HEAP32[i23 >> 2] = i24;
  STACKTOP = i6;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i11 | 0);
 i23 = i1 | 0;
 i24 = i12;
 HEAP32[i23 >> 2] = i24;
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore24BasicShapeInsetRectangle5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
 i18 = __ZN3WTF10fastMallocEj(60) | 0;
 HEAP32[i18 + 4 >> 2] = 1;
 HEAP32[i18 + 8 >> 2] = 0;
 HEAP32[i18 >> 2] = H_BASE + 96;
 i19 = i18 + 12 | 0;
 _memset(i19 | 0, 0, 7) | 0;
 i20 = i18 + 20 | 0;
 _memset(i20 | 0, 0, 7) | 0;
 i21 = i18 + 28 | 0;
 _memset(i21 | 0, 0, 7) | 0;
 i22 = i18 + 36 | 0;
 _memset(i22 | 0, 0, 7) | 0;
 i23 = i18 + 44 | 0;
 _memset(i23 | 0, 0, 7) | 0;
 i24 = i18 + 52 | 0;
 _memset(i24 | 0, 0, 7) | 0;
 __ZNK7WebCore6Length5blendERKS0_d(i7, i2 + 20 | 0, i3 + 20 | 0, d4);
 do {
  if ((i20 | 0) == (i6 | 0)) {
   if ((HEAP8[i7 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
  } else {
   i25 = i20;
   i26 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i25 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i25 + 4 >> 2] = i26;
   HEAP8[i7 + 5 | 0] = 0;
  }
 } while (0);
 __ZNK7WebCore6Length5blendERKS0_d(i9, i2 + 12 | 0, i3 + 12 | 0, d4);
 do {
  if ((i19 | 0) == (i8 | 0)) {
   if ((HEAP8[i9 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
  } else {
   i7 = i19;
   i6 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i7 + 4 >> 2] = i6;
   HEAP8[i9 + 5 | 0] = 0;
  }
 } while (0);
 __ZNK7WebCore6Length5blendERKS0_d(i11, i2 + 28 | 0, i3 + 28 | 0, d4);
 do {
  if ((i21 | 0) == (i10 | 0)) {
   if ((HEAP8[i11 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
  } else {
   i9 = i21;
   i8 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i9 + 4 >> 2] = i8;
   HEAP8[i11 + 5 | 0] = 0;
  }
 } while (0);
 __ZNK7WebCore6Length5blendERKS0_d(i13, i2 + 36 | 0, i3 + 36 | 0, d4);
 do {
  if ((i22 | 0) == (i12 | 0)) {
   if ((HEAP8[i13 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i13);
  } else {
   i11 = i22;
   i10 = HEAP32[i12 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i11 + 4 >> 2] = i10;
   HEAP8[i13 + 5 | 0] = 0;
  }
 } while (0);
 __ZNK7WebCore6Length5blendERKS0_d(i15, i2 + 44 | 0, i3 + 44 | 0, d4);
 do {
  if ((i23 | 0) == (i14 | 0)) {
   if ((HEAP8[i15 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i15);
  } else {
   i13 = i23;
   i12 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i13 + 4 >> 2] = i12;
   HEAP8[i15 + 5 | 0] = 0;
  }
 } while (0);
 __ZNK7WebCore6Length5blendERKS0_d(i17, i2 + 52 | 0, i3 + 52 | 0, d4);
 if ((i24 | 0) != (i16 | 0)) {
  i3 = i24;
  i24 = HEAP32[i16 + 4 >> 2] | 0;
  HEAP32[i3 >> 2] = HEAP32[i16 >> 2];
  HEAP32[i3 + 4 >> 2] = i24;
  HEAP8[i17 + 5 | 0] = 0;
  i27 = i1 | 0;
  i28 = i18;
  HEAP32[i27 >> 2] = i28;
  STACKTOP = i5;
  return;
 }
 if ((HEAP8[i17 + 5 | 0] | 0) != 10) {
  i27 = i1 | 0;
  i28 = i18;
  HEAP32[i27 >> 2] = i28;
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i17);
 i27 = i1 | 0;
 i28 = i18;
 HEAP32[i27 >> 2] = i28;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore19BasicShapeRectangle5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
 i18 = __ZN3WTF10fastMallocEj(60) | 0;
 HEAP32[i18 + 4 >> 2] = 1;
 HEAP32[i18 + 8 >> 2] = 0;
 HEAP32[i18 >> 2] = H_BASE + 136;
 i19 = i18 + 12 | 0;
 _memset(i19 | 0, 0, 7) | 0;
 i20 = i18 + 20 | 0;
 _memset(i20 | 0, 0, 7) | 0;
 i21 = i18 + 28 | 0;
 _memset(i21 | 0, 0, 7) | 0;
 i22 = i18 + 36 | 0;
 _memset(i22 | 0, 0, 7) | 0;
 i23 = i18 + 44 | 0;
 _memset(i23 | 0, 0, 7) | 0;
 i24 = i18 + 52 | 0;
 _memset(i24 | 0, 0, 7) | 0;
 __ZNK7WebCore6Length5blendERKS0_d(i7, i2 + 20 | 0, i3 + 20 | 0, d4);
 do {
  if ((i20 | 0) == (i6 | 0)) {
   if ((HEAP8[i7 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
  } else {
   i25 = i20;
   i26 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i25 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i25 + 4 >> 2] = i26;
   HEAP8[i7 + 5 | 0] = 0;
  }
 } while (0);
 __ZNK7WebCore6Length5blendERKS0_d(i9, i2 + 12 | 0, i3 + 12 | 0, d4);
 do {
  if ((i19 | 0) == (i8 | 0)) {
   if ((HEAP8[i9 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
  } else {
   i7 = i19;
   i6 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i7 + 4 >> 2] = i6;
   HEAP8[i9 + 5 | 0] = 0;
  }
 } while (0);
 __ZNK7WebCore6Length5blendERKS0_d(i11, i2 + 28 | 0, i3 + 28 | 0, d4);
 do {
  if ((i21 | 0) == (i10 | 0)) {
   if ((HEAP8[i11 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
  } else {
   i9 = i21;
   i8 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i9 + 4 >> 2] = i8;
   HEAP8[i11 + 5 | 0] = 0;
  }
 } while (0);
 __ZNK7WebCore6Length5blendERKS0_d(i13, i2 + 36 | 0, i3 + 36 | 0, d4);
 do {
  if ((i22 | 0) == (i12 | 0)) {
   if ((HEAP8[i13 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i13);
  } else {
   i11 = i22;
   i10 = HEAP32[i12 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i11 + 4 >> 2] = i10;
   HEAP8[i13 + 5 | 0] = 0;
  }
 } while (0);
 __ZNK7WebCore6Length5blendERKS0_d(i15, i2 + 44 | 0, i3 + 44 | 0, d4);
 do {
  if ((i23 | 0) == (i14 | 0)) {
   if ((HEAP8[i15 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i15);
  } else {
   i13 = i23;
   i12 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i13 + 4 >> 2] = i12;
   HEAP8[i15 + 5 | 0] = 0;
  }
 } while (0);
 __ZNK7WebCore6Length5blendERKS0_d(i17, i2 + 52 | 0, i3 + 52 | 0, d4);
 if ((i24 | 0) != (i16 | 0)) {
  i3 = i24;
  i24 = HEAP32[i16 + 4 >> 2] | 0;
  HEAP32[i3 >> 2] = HEAP32[i16 >> 2];
  HEAP32[i3 + 4 >> 2] = i24;
  HEAP8[i17 + 5 | 0] = 0;
  i27 = i1 | 0;
  i28 = i18;
  HEAP32[i27 >> 2] = i28;
  STACKTOP = i5;
  return;
 }
 if ((HEAP8[i17 + 5 | 0] | 0) != 10) {
  i27 = i1 | 0;
  i28 = i18;
  HEAP32[i27 >> 2] = i28;
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i17);
 i27 = i1 | 0;
 i28 = i18;
 HEAP32[i27 >> 2] = i28;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore10BasicShape16referenceBoxSizeERKNS_9RenderBoxE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, d19 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 64 | 0;
 i12 = i4 + 80 | 0;
 i13 = i4 + 88 | 0;
 i14 = i4 + 96 | 0;
 i15 = i4 + 104 | 0;
 switch (HEAP32[i2 + 8 >> 2] | 0) {
 case 4:
  {
   i2 = i3 | 0;
   i16 = i3;
   FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 744 >> 2] & 31](i2) | 0;
   i17 = i3;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 712 >> 2] & 1](i4 + 48 | 0, i2);
   FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 736 >> 2] & 31](i2) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 704 >> 2] & 1](i4 + 56 | 0, i2);
   __ZNK7WebCore9RenderBox11clientWidthEv(i5, i3);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 712 >> 2] & 1](i6, i2);
   i16 = (HEAP32[i5 >> 2] | 0) - (HEAP32[i6 >> 2] | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 716 >> 2] & 1](i7, i2);
   i6 = i16 - (HEAP32[i7 >> 2] | 0) | 0;
   __ZNK7WebCore9RenderBox12clientHeightEv(i8, i3);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 704 >> 2] & 1](i9, i2);
   i7 = (HEAP32[i8 >> 2] | 0) - (HEAP32[i9 >> 2] | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 708 >> 2] & 1](i10, i2);
   d18 = +(i7 - (HEAP32[i10 >> 2] | 0) | 0);
   HEAPF32[i1 >> 2] = +(i6 | 0);
   HEAPF32[i1 + 4 >> 2] = d18;
   STACKTOP = i4;
   return;
  }
 case 3:
  {
   __ZNK7WebCore9RenderBox14paddingBoxRectEv(i11, i3);
   i6 = i11 + 8 | 0;
   d18 = +(HEAP32[i6 + 4 >> 2] | 0);
   HEAPF32[i1 >> 2] = +(HEAP32[i6 >> 2] | 0);
   HEAPF32[i1 + 4 >> 2] = d18;
   STACKTOP = i4;
   return;
  }
 case 0:
 case 1:
  {
   i6 = i3;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 776 >> 2] & 1](i12, i3);
   i11 = (HEAP32[i12 >> 2] | 0) + (HEAP32[i3 + 52 >> 2] | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 780 >> 2] & 1](i13, i3);
   d18 = +(i11 + (HEAP32[i13 >> 2] | 0) | 0);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 768 >> 2] & 1](i14, i3);
   i13 = (HEAP32[i14 >> 2] | 0) + (HEAP32[i3 + 56 >> 2] | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 772 >> 2] & 1](i15, i3);
   d19 = +(i13 + (HEAP32[i15 >> 2] | 0) | 0);
   HEAPF32[i1 >> 2] = d18;
   HEAPF32[i1 + 4 >> 2] = d19;
   STACKTOP = i4;
   return;
  }
 case 2:
  {
   i15 = i3 + 52 | 0;
   d19 = +(HEAP32[i15 + 4 >> 2] | 0);
   HEAPF32[i1 >> 2] = +(HEAP32[i15 >> 2] | 0);
   HEAPF32[i1 + 4 >> 2] = d19;
   STACKTOP = i4;
   return;
  }
 default:
  {
   HEAPF32[i1 >> 2] = +0;
   HEAPF32[i1 + 4 >> 2] = +0;
   STACKTOP = i4;
   return;
  }
 }
}
function __ZNK7WebCore27DeprecatedBasicShapeEllipse5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
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
 i14 = __ZN3WTF10fastMallocEj(44) | 0;
 HEAP32[i14 + 4 >> 2] = 1;
 HEAP32[i14 + 8 >> 2] = 0;
 HEAP32[i14 >> 2] = H_BASE + 16;
 i15 = i14 + 12 | 0;
 _memset(i15 | 0, 0, 7) | 0;
 i16 = i14 + 20 | 0;
 _memset(i16 | 0, 0, 7) | 0;
 i17 = i14 + 28 | 0;
 _memset(i17 | 0, 0, 7) | 0;
 i18 = i14 + 36 | 0;
 _memset(i18 | 0, 0, 7) | 0;
 __ZNK7WebCore6Length5blendERKS0_d(i7, i2 + 12 | 0, i3 + 12 | 0, d4);
 do {
  if ((i15 | 0) == (i6 | 0)) {
   if ((HEAP8[i7 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
  } else {
   i19 = i15;
   i20 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i19 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i19 + 4 >> 2] = i20;
   HEAP8[i7 + 5 | 0] = 0;
  }
 } while (0);
 __ZNK7WebCore6Length5blendERKS0_d(i9, i2 + 20 | 0, i3 + 20 | 0, d4);
 do {
  if ((i16 | 0) == (i8 | 0)) {
   if ((HEAP8[i9 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
  } else {
   i7 = i16;
   i6 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i7 + 4 >> 2] = i6;
   HEAP8[i9 + 5 | 0] = 0;
  }
 } while (0);
 __ZNK7WebCore6Length5blendERKS0_d(i11, i2 + 28 | 0, i3 + 28 | 0, d4);
 do {
  if ((i17 | 0) == (i10 | 0)) {
   if ((HEAP8[i11 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
  } else {
   i9 = i17;
   i8 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i9 + 4 >> 2] = i8;
   HEAP8[i11 + 5 | 0] = 0;
  }
 } while (0);
 __ZNK7WebCore6Length5blendERKS0_d(i13, i2 + 36 | 0, i3 + 36 | 0, d4);
 if ((i18 | 0) != (i12 | 0)) {
  i3 = i18;
  i18 = HEAP32[i12 + 4 >> 2] | 0;
  HEAP32[i3 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i3 + 4 >> 2] = i18;
  HEAP8[i13 + 5 | 0] = 0;
  i21 = i1 | 0;
  i22 = i14;
  HEAP32[i21 >> 2] = i22;
  STACKTOP = i5;
  return;
 }
 if ((HEAP8[i13 + 5 | 0] | 0) != 10) {
  i21 = i1 | 0;
  i22 = i14;
  HEAP32[i21 >> 2] = i22;
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i13);
 i21 = i1 | 0;
 i22 = i14;
 HEAP32[i21 >> 2] = i22;
 STACKTOP = i5;
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
function __ZN7WebCore15BasicShapeInset4pathERNS_4PathERKNS_9FloatRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, d17 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i3 + 8 | 0;
 d11 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 36 | 0, +HEAPF32[i10 >> 2], 0);
 i12 = i3 + 12 | 0;
 d13 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 20 | 0, +HEAPF32[i12 >> 2], 0);
 d14 = d11 + +HEAPF32[i3 >> 2];
 d15 = d13 + +HEAPF32[i3 + 4 >> 2];
 d16 = +HEAPF32[i10 >> 2];
 d17 = d16 - d11 - +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 12 | 0, d16, 0);
 d16 = +HEAPF32[i12 >> 2];
 d11 = d16 - d13 - +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 28 | 0, d16, 0);
 HEAPF32[i5 >> 2] = d14;
 HEAPF32[i5 + 4 >> 2] = d15;
 HEAPF32[i5 + 8 >> 2] = d17 < +0 ? +0 : d17;
 HEAPF32[i5 + 12 >> 2] = d11 < +0 ? +0 : d11;
 d11 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 44 | 0, +HEAPF32[i10 >> 2], 0);
 d17 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 52 | 0, +HEAPF32[i12 >> 2], 0);
 HEAPF32[i6 >> 2] = d11;
 HEAPF32[i6 + 4 >> 2] = d17;
 d17 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 60 | 0, +HEAPF32[i10 >> 2], 0);
 d11 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 68 | 0, +HEAPF32[i12 >> 2], 0);
 HEAPF32[i7 >> 2] = d17;
 HEAPF32[i7 + 4 >> 2] = d11;
 d11 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 76 | 0, +HEAPF32[i10 >> 2], 0);
 d17 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 84 | 0, +HEAPF32[i12 >> 2], 0);
 HEAPF32[i8 >> 2] = d11;
 HEAPF32[i8 + 4 >> 2] = d17;
 d17 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 92 | 0, +HEAPF32[i10 >> 2], 0);
 d11 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 100 | 0, +HEAPF32[i12 >> 2], 0);
 HEAPF32[i9 >> 2] = d17;
 HEAPF32[i9 + 4 >> 2] = d11;
 __ZN7WebCore4Path14addRoundedRectERKNS_9FloatRectERKNS_9FloatSizeES6_S6_S6_NS0_19RoundedRectStrategyE(i2, i5, i6, i7, i8, i9, 0);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore17BasicShapePolygon5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i2 + 24 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = __ZN3WTF10fastMallocEj(28) | 0;
 i11 = i10;
 HEAP32[i10 + 4 >> 2] = 1;
 HEAP32[i10 + 8 >> 2] = 0;
 HEAP32[i10 >> 2] = H_BASE + 176;
 i12 = i10 + 12 | 0;
 _memset(i12 | 0, 0, 16) | 0;
 if ((i9 | 0) == 0) {
  HEAP32[i1 >> 2] = i10;
  STACKTOP = i5;
  return;
 }
 HEAP32[i12 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 31](i3) | 0;
 i12 = i2 + 16 | 0;
 i2 = i3 + 16 | 0;
 i3 = i2 + 8 | 0;
 i13 = i2;
 i2 = i7 + 5 | 0;
 i14 = i6 + 5 | 0;
 i15 = 0;
 while (1) {
  if ((HEAP32[i8 >> 2] | 0) >>> 0 <= i15 >>> 0) {
   i16 = 5;
   break;
  }
  if ((HEAP32[i3 >> 2] | 0) >>> 0 <= i15 >>> 0) {
   i16 = 7;
   break;
  }
  __ZNK7WebCore6Length5blendERKS0_d(i6, (HEAP32[i12 >> 2] | 0) + (i15 << 3) | 0, (HEAP32[i13 >> 2] | 0) + (i15 << 3) | 0, d4);
  i17 = i15 | 1;
  if ((HEAP32[i8 >> 2] | 0) >>> 0 <= i17 >>> 0) {
   i16 = 9;
   break;
  }
  if ((HEAP32[i3 >> 2] | 0) >>> 0 <= i17 >>> 0) {
   i16 = 11;
   break;
  }
  __ZNK7WebCore6Length5blendERKS0_d(i7, (HEAP32[i12 >> 2] | 0) + (i17 << 3) | 0, (HEAP32[i13 >> 2] | 0) + (i17 << 3) | 0, d4);
  __ZN7WebCore17BasicShapePolygon11appendPointENS_6LengthES1_(i11, i6, i7);
  if ((HEAP8[i2] | 0) == 10) {
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
  }
  if ((HEAP8[i14] | 0) == 10) {
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
  }
  i17 = i15 + 2 | 0;
  if (i17 >>> 0 < i9 >>> 0) {
   i15 = i17;
  } else {
   i16 = 17;
   break;
  }
 }
 if ((i16 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i16 | 0) == 7) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i16 | 0) == 9) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i16 | 0) == 11) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i16 | 0) == 17) {
  HEAP32[i1 >> 2] = i10;
  STACKTOP = i5;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_viiidi + 10;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_viiidi + 8;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_viiidi + 4;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_viiidi + 12;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_viiidi + 14;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_viiidi + 2;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_viiidi + 6;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_viiidi + 16;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 20;
}
function __ZN7WebCore17BasicShapePolygon4pathERNS_4PathERKNS_9FloatRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, i11 = 0, d12 = +0, i13 = 0, i14 = 0, d15 = +0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 24 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i1 + 16 | 0;
 i1 = i3 + 8 | 0;
 d10 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(HEAP32[i9 >> 2] | 0, +HEAPF32[i1 >> 2], 0);
 i11 = i3 | 0;
 if ((HEAP32[i7 >> 2] | 0) >>> 0 <= 1 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 d12 = d10 + +HEAPF32[i11 >> 2];
 i13 = i3 + 12 | 0;
 d10 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE((HEAP32[i9 >> 2] | 0) + 8 | 0, +HEAPF32[i13 >> 2], 0);
 i14 = i3 + 4 | 0;
 d15 = d10 + +HEAPF32[i14 >> 2];
 HEAPF32[i5 >> 2] = d12;
 HEAPF32[i5 + 4 >> 2] = d15;
 __ZN7WebCore4Path6moveToERKNS_10FloatPointE(i2, i5);
 L7 : do {
  if (i8 >>> 0 > 2 >>> 0) {
   i5 = i6 | 0;
   i3 = i6 + 4 | 0;
   i16 = 2;
   while (1) {
    if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i16 >>> 0) {
     i17 = 7;
     break;
    }
    d15 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE((HEAP32[i9 >> 2] | 0) + (i16 << 3) | 0, +HEAPF32[i1 >> 2], 0);
    i18 = i16 | 1;
    if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i18 >>> 0) {
     i17 = 9;
     break;
    }
    d12 = d15 + +HEAPF32[i11 >> 2];
    d15 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE((HEAP32[i9 >> 2] | 0) + (i18 << 3) | 0, +HEAPF32[i13 >> 2], 0);
    d10 = d15 + +HEAPF32[i14 >> 2];
    HEAPF32[i5 >> 2] = d12;
    HEAPF32[i3 >> 2] = d10;
    __ZN7WebCore4Path9addLineToERKNS_10FloatPointE(i2, i6);
    i16 = i16 + 2 | 0;
    if (i16 >>> 0 >= i8 >>> 0) {
     break L7;
    }
   }
   if ((i17 | 0) == 7) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i17 | 0) == 9) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 __ZN7WebCore4Path12closeSubpathEv(i2);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore26DeprecatedBasicShapeCircle5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
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
 i12 = __ZN3WTF10fastMallocEj(36) | 0;
 HEAP32[i12 + 4 >> 2] = 1;
 HEAP32[i12 + 8 >> 2] = 0;
 HEAP32[i12 >> 2] = H_BASE + 56;
 i13 = i12 + 12 | 0;
 _memset(i13 | 0, 0, 7) | 0;
 i14 = i12 + 20 | 0;
 _memset(i14 | 0, 0, 7) | 0;
 i15 = i12 + 28 | 0;
 _memset(i15 | 0, 0, 7) | 0;
 __ZNK7WebCore6Length5blendERKS0_d(i7, i2 + 12 | 0, i3 + 12 | 0, d4);
 do {
  if ((i13 | 0) == (i6 | 0)) {
   if ((HEAP8[i7 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
  } else {
   i16 = i13;
   i17 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i16 + 4 >> 2] = i17;
   HEAP8[i7 + 5 | 0] = 0;
  }
 } while (0);
 __ZNK7WebCore6Length5blendERKS0_d(i9, i2 + 20 | 0, i3 + 20 | 0, d4);
 do {
  if ((i14 | 0) == (i8 | 0)) {
   if ((HEAP8[i9 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
  } else {
   i7 = i14;
   i6 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i7 + 4 >> 2] = i6;
   HEAP8[i9 + 5 | 0] = 0;
  }
 } while (0);
 __ZNK7WebCore6Length5blendERKS0_d(i11, i2 + 28 | 0, i3 + 28 | 0, d4);
 if ((i15 | 0) != (i10 | 0)) {
  i3 = i15;
  i15 = HEAP32[i10 + 4 >> 2] | 0;
  HEAP32[i3 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i3 + 4 >> 2] = i15;
  HEAP8[i11 + 5 | 0] = 0;
  i18 = i1 | 0;
  i19 = i12;
  HEAP32[i18 >> 2] = i19;
  STACKTOP = i5;
  return;
 }
 if ((HEAP8[i11 + 5 | 0] | 0) != 10) {
  i18 = i1 | 0;
  i19 = i12;
  HEAP32[i18 >> 2] = i19;
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
 i18 = i1 | 0;
 i19 = i12;
 HEAP32[i18 >> 2] = i19;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore26BasicShapeCenterCoordinate17lengthForBlendingERKNS_9FloatSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, d11 = +0, i12 = 0, d13 = +0, d14 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5;
 i7 = i2 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i8;
 HEAP32[i5 + 4 >> 2] = i9;
 if ((i8 & 0 | 0) == 0 & (i9 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i6);
 }
 i9 = HEAP32[i2 >> 2] | 0;
 if ((i9 | 0) == 3) {
  i2 = HEAP8[i6 + 5 | 0] | 0;
  do {
   if ((i2 << 24 >> 24 | 0) == 10 | (i2 << 24 >> 24 | 0) == 2) {
    if ((HEAP8[i6 + 6 | 0] & 1) == 0) {
     d10 = +(HEAP32[i5 >> 2] | 0);
     break;
    } else {
     d10 = +HEAPF32[i5 >> 2];
     break;
    }
   } else {
    if ((HEAP8[i6 + 6 | 0] & 1) == 0) {
     d11 = +(HEAP32[i5 >> 2] | 0);
    } else {
     d11 = +HEAPF32[i5 >> 2];
    }
    d10 = d11 / +HEAPF32[i3 + 4 >> 2] * +100;
   }
  } while (0);
  HEAPF32[i1 >> 2] = +100 - d10;
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 2;
  HEAP8[i1 + 6 | 0] = 1;
  i12 = i2;
 } else if ((i9 | 0) == 2) {
  i9 = HEAP8[i6 + 5 | 0] | 0;
  do {
   if ((i9 << 24 >> 24 | 0) == 10 | (i9 << 24 >> 24 | 0) == 2) {
    if ((HEAP8[i6 + 6 | 0] & 1) == 0) {
     d13 = +(HEAP32[i5 >> 2] | 0);
     break;
    } else {
     d13 = +HEAPF32[i5 >> 2];
     break;
    }
   } else {
    if ((HEAP8[i6 + 6 | 0] & 1) == 0) {
     d14 = +(HEAP32[i5 >> 2] | 0);
    } else {
     d14 = +HEAPF32[i5 >> 2];
    }
    d13 = d14 / +HEAPF32[i3 >> 2] * +100;
   }
  } while (0);
  HEAPF32[i1 >> 2] = +100 - d13;
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 2;
  HEAP8[i1 + 6 | 0] = 1;
  i12 = i9;
 } else {
  i9 = i1;
  i1 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i9 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i9 + 4 >> 2] = i1;
  HEAP8[i6 + 5 | 0] = 0;
  STACKTOP = i4;
  return;
 }
 if (i12 << 24 >> 24 != 10) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9RenderBox14paddingBoxRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
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
 i14 = i2 | 0;
 i15 = i2;
 i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 744 >> 2] & 31](i14) | 0;
 i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 736 >> 2] & 31](i14) | 0;
 __ZNK7WebCore9RenderBox11clientWidthEv(i7, i2);
 i15 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 712 >> 2] & 1](i8, i14);
 i18 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 716 >> 2] & 1](i9, i14);
 i8 = i18 - (HEAP32[i9 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 712 >> 2] & 1](i10, i14);
 i9 = i8 + (HEAP32[i10 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 716 >> 2] & 1](i11, i14);
 i10 = i9 + (HEAP32[i11 >> 2] | 0) | 0;
 __ZNK7WebCore9RenderBox12clientHeightEv(i4, i2);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 704 >> 2] & 1](i5, i14);
 i2 = (HEAP32[i4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 708 >> 2] & 1](i6, i14);
 i5 = i2 - (HEAP32[i6 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 704 >> 2] & 1](i12, i14);
 i6 = i5 + (HEAP32[i12 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 708 >> 2] & 1](i13, i14);
 i14 = i6 + (HEAP32[i13 >> 2] | 0) | 0;
 HEAP32[i1 >> 2] = i16;
 HEAP32[i1 + 4 >> 2] = i17;
 HEAP32[i1 + 8 >> 2] = i10;
 HEAP32[i1 + 12 >> 2] = i14;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16BasicShapeCircle4pathERNS_4PathERKNS_9FloatRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, i9 = 0, i10 = 0, d11 = +0, d12 = +0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, d19 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i1 + 12 | 0;
 i7 = i3 + 8 | 0;
 d8 = +__ZN7WebCore29floatValueForCenterCoordinateERKNS_26BasicShapeCenterCoordinateEf(i6, +HEAPF32[i7 >> 2]);
 i9 = i1 + 24 | 0;
 i10 = i3 + 12 | 0;
 d11 = +__ZN7WebCore29floatValueForCenterCoordinateERKNS_26BasicShapeCenterCoordinateEf(i9, +HEAPF32[i10 >> 2]);
 d12 = +HEAPF32[i7 >> 2];
 d13 = +HEAPF32[i10 >> 2];
 i10 = i1 + 44 | 0;
 do {
  if ((HEAP32[i10 >> 2] | 0) == 0) {
   d14 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 36 | 0, +Math_sqrt((d12 * d12 + d13 * d13) * +.5), 0);
  } else {
   d15 = +__ZN7WebCore29floatValueForCenterCoordinateERKNS_26BasicShapeCenterCoordinateEf(i6, d12);
   d16 = +__ZN7WebCore29floatValueForCenterCoordinateERKNS_26BasicShapeCenterCoordinateEf(i9, d13);
   d17 = d12 - d15;
   if ((HEAP32[i10 >> 2] | 0) == 1) {
    d18 = d13 - d16;
    d19 = d18 < d16 ? d18 : d16;
    d18 = d17 < d15 ? d17 : d15;
    d14 = d19 < d18 ? d19 : d18;
    break;
   } else {
    d18 = d13 - d16;
    d19 = d15 < d17 ? d17 : d15;
    d15 = d16 < d18 ? d18 : d16;
    d14 = d19 < d15 ? d15 : d19;
    break;
   }
  }
 } while (0);
 d13 = d11 - d14 + +HEAPF32[i3 + 4 >> 2];
 d11 = d14 * +2;
 HEAPF32[i5 >> 2] = d8 - d14 + +HEAPF32[i3 >> 2];
 HEAPF32[i5 + 4 >> 2] = d13;
 HEAPF32[i5 + 8 >> 2] = d11;
 HEAPF32[i5 + 12 >> 2] = d11;
 __ZN7WebCore4Path10addEllipseERKNS_9FloatRectE(i2, i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17BasicShapeEllipse4pathERNS_4PathERKNS_9FloatRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, d7 = +0, i8 = 0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i3 + 8 | 0;
 d7 = +__ZN7WebCore29floatValueForCenterCoordinateERKNS_26BasicShapeCenterCoordinateEf(i1 + 12 | 0, +HEAPF32[i6 >> 2]);
 i8 = i3 + 12 | 0;
 d9 = +__ZN7WebCore29floatValueForCenterCoordinateERKNS_26BasicShapeCenterCoordinateEf(i1 + 24 | 0, +HEAPF32[i8 >> 2]);
 d10 = +HEAPF32[i6 >> 2];
 i6 = HEAP32[i1 + 44 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   d11 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 36 | 0, d10, 0);
  } else {
   d12 = d10 - d7;
   if ((i6 | 0) == 1) {
    d11 = d12 < d7 ? d12 : d7;
    break;
   } else {
    d11 = d12 > d7 ? d12 : d7;
    break;
   }
  }
 } while (0);
 d10 = +HEAPF32[i8 >> 2];
 i8 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   d13 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 48 | 0, d10, 0);
  } else {
   d12 = d10 - d9;
   if ((i8 | 0) == 1) {
    d13 = d12 < d9 ? d12 : d9;
    break;
   } else {
    d13 = d12 > d9 ? d12 : d9;
    break;
   }
  }
 } while (0);
 d10 = d9 - d13 + +HEAPF32[i3 + 4 >> 2];
 HEAPF32[i5 >> 2] = d7 - d11 + +HEAPF32[i3 >> 2];
 HEAPF32[i5 + 4 >> 2] = d10;
 HEAPF32[i5 + 8 >> 2] = d11 * +2;
 HEAPF32[i5 + 12 >> 2] = d13 * +2;
 __ZN7WebCore4Path10addEllipseERKNS_9FloatRectE(i2, i5);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore10BasicShape8canBlendEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1;
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 31](i1) | 0;
 if ((i4 | 0) != (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 31](i2) | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != (HEAP32[i2 + 8 >> 2] | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 do {
  if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 31](i1) | 0) == 3) {
   if ((HEAP32[i1 + 24 >> 2] | 0) != (HEAP32[i2 + 24 >> 2] | 0)) {
    i5 = 0;
    return i5 | 0;
   }
   i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1) | 0;
   if ((i4 | 0) == (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i2) | 0)) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 do {
  if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 31](i1) | 0) == 5) {
   if ((HEAP32[i1 + 44 >> 2] | 0) != 0) {
    i5 = 0;
    return i5 | 0;
   }
   if ((HEAP32[i2 + 44 >> 2] | 0) == 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 31](i1) | 0) != 6) {
  i5 = 1;
  return i5 | 0;
 }
 if ((HEAP32[i1 + 44 >> 2] | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i2 + 44 >> 2] | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i1 + 56 >> 2] | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = (HEAP32[i2 + 56 >> 2] | 0) == 0;
 return i5 | 0;
}
function __ZN7WebCore24BasicShapeInsetRectangle4pathERNS_4PathERKNS_9FloatRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, i9 = 0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i3 + 8 | 0;
 d8 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 36 | 0, +HEAPF32[i7 >> 2], 0);
 i9 = i3 + 12 | 0;
 d10 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 20 | 0, +HEAPF32[i9 >> 2], 0);
 d11 = d8 + +HEAPF32[i3 >> 2];
 d12 = d10 + +HEAPF32[i3 + 4 >> 2];
 d13 = +HEAPF32[i7 >> 2];
 d14 = d13 - d8 - +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 12 | 0, d13, 0);
 d13 = +HEAPF32[i9 >> 2];
 d8 = d13 - d10 - +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 28 | 0, d13, 0);
 HEAPF32[i5 >> 2] = d11;
 HEAPF32[i5 + 4 >> 2] = d12;
 HEAPF32[i5 + 8 >> 2] = d14 < +0 ? +0 : d14;
 HEAPF32[i5 + 12 >> 2] = d8 < +0 ? +0 : d8;
 d8 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 44 | 0, +HEAPF32[i7 >> 2], 0);
 d14 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 52 | 0, +HEAPF32[i9 >> 2], 0);
 HEAPF32[i6 >> 2] = d8;
 HEAPF32[i6 + 4 >> 2] = d14;
 __ZN7WebCore4Path14addRoundedRectERKNS_9FloatRectERKNS_9FloatSizeENS0_19RoundedRectStrategyE(i2, i5, i6, 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15BasicShapeInsetD2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 296;
 if ((HEAP8[i1 + 105 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 100 | 0);
 }
 if ((HEAP8[i1 + 97 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i1 + 81 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 76 | 0);
 }
 if ((HEAP8[i1 + 73 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i1 + 65 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 return;
}
function __ZN7WebCore19BasicShapeRectangle4pathERNS_4PathERKNS_9FloatRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, i10 = 0, d11 = +0, d12 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i3 + 8 | 0;
 d8 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 20 | 0, +HEAPF32[i7 >> 2], 0);
 d9 = d8 + +HEAPF32[i3 >> 2];
 i10 = i3 + 12 | 0;
 d8 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 12 | 0, +HEAPF32[i10 >> 2], 0);
 d11 = d8 + +HEAPF32[i3 + 4 >> 2];
 d8 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 28 | 0, +HEAPF32[i7 >> 2], 0);
 d12 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 36 | 0, +HEAPF32[i10 >> 2], 0);
 HEAPF32[i5 >> 2] = d9;
 HEAPF32[i5 + 4 >> 2] = d11;
 HEAPF32[i5 + 8 >> 2] = d8;
 HEAPF32[i5 + 12 >> 2] = d12;
 d12 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 44 | 0, +HEAPF32[i7 >> 2], 0);
 d8 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 52 | 0, +HEAPF32[i10 >> 2], 0);
 HEAPF32[i6 >> 2] = d12;
 HEAPF32[i6 + 4 >> 2] = d8;
 __ZN7WebCore4Path14addRoundedRectERKNS_9FloatRectERKNS_9FloatSizeENS0_19RoundedRectStrategyE(i2, i5, i6, 0);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore26BasicShapeCenterCoordinate5blendERKS0_dRKNS_9FloatSizeE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i7;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 __ZNK7WebCore26BasicShapeCenterCoordinate17lengthForBlendingERKNS_9FloatSizeE(i9, i2, i5);
 __ZNK7WebCore26BasicShapeCenterCoordinate17lengthForBlendingERKNS_9FloatSizeE(i10, i3, i5);
 __ZNK7WebCore6Length5blendERKS0_d(i8, i9, i10, d4);
 HEAP32[i1 >> 2] = 0;
 i5 = i1 + 4 | 0;
 i1 = i5;
 i3 = HEAP32[i7 >> 2] | 0;
 i2 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 HEAP32[i1 + 4 >> 2] = i2;
 if ((i3 & 0 | 0) == 0 & (i2 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 if ((HEAP8[i8 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i8);
 }
 if ((HEAP8[i10 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i10);
 }
 if ((HEAP8[i9 + 5 | 0] | 0) != 10) {
  STACKTOP = i6;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
 STACKTOP = i6;
 return;
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
function __ZN7WebCore27DeprecatedBasicShapeEllipse4pathERNS_4PathERKNS_9FloatRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, d7 = +0, i8 = 0, d9 = +0, d10 = +0, d11 = +0, d12 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i3 + 8 | 0;
 d7 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 12 | 0, +HEAPF32[i6 >> 2], 0);
 i8 = i3 + 12 | 0;
 d9 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 20 | 0, +HEAPF32[i8 >> 2], 0);
 d10 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 28 | 0, +HEAPF32[i6 >> 2], 0);
 d11 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 36 | 0, +HEAPF32[i8 >> 2], 0);
 d12 = d9 - d11 + +HEAPF32[i3 + 4 >> 2];
 HEAPF32[i5 >> 2] = d7 - d10 + +HEAPF32[i3 >> 2];
 HEAPF32[i5 + 4 >> 2] = d12;
 HEAPF32[i5 + 8 >> 2] = d10 * +2;
 HEAPF32[i5 + 12 >> 2] = d11 * +2;
 __ZN7WebCore4Path10addEllipseERKNS_9FloatRectE(i2, i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore26DeprecatedBasicShapeCircle4pathERNS_4PathERKNS_9FloatRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, d6 = +0, i7 = 0, d8 = +0, d9 = +0, d10 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 d6 = +HEAPF32[i3 + 8 >> 2];
 i7 = i3 + 12 | 0;
 d8 = +HEAPF32[i7 >> 2];
 d9 = +Math_sqrt((d6 * d6 + d8 * d8) * +.5);
 d8 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 12 | 0, d6, 0);
 d6 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 20 | 0, +HEAPF32[i7 >> 2], 0);
 d10 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 28 | 0, d9, 0);
 d9 = d6 - d10 + +HEAPF32[i3 + 4 >> 2];
 d6 = d10 * +2;
 HEAPF32[i5 >> 2] = d8 - d10 + +HEAPF32[i3 >> 2];
 HEAPF32[i5 + 4 >> 2] = d9;
 HEAPF32[i5 + 8 >> 2] = d6;
 HEAPF32[i5 + 12 >> 2] = d6;
 __ZN7WebCore4Path10addEllipseERKNS_9FloatRectE(i2, i5);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore16BasicShapeCircle24floatValueForRadiusInBoxEff(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0, d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0;
 i4 = i1 + 44 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  d5 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 36 | 0, +Math_sqrt((d2 * d2 + d3 * d3) * +.5), 0);
  return +d5;
 }
 d6 = +__ZN7WebCore29floatValueForCenterCoordinateERKNS_26BasicShapeCenterCoordinateEf(i1 + 12 | 0, d2);
 d7 = +__ZN7WebCore29floatValueForCenterCoordinateERKNS_26BasicShapeCenterCoordinateEf(i1 + 24 | 0, d3);
 d8 = d2 - d6;
 if ((HEAP32[i4 >> 2] | 0) == 1) {
  d2 = d3 - d7;
  d9 = d2 < d7 ? d2 : d7;
  d2 = d8 < d6 ? d8 : d6;
  d5 = d9 < d2 ? d9 : d2;
  return +d5;
 } else {
  d2 = d3 - d7;
  d3 = d6 < d8 ? d8 : d6;
  d6 = d7 < d2 ? d2 : d7;
  d5 = d3 < d6 ? d6 : d3;
  return +d5;
 }
 return +0;
}
function __ZN7WebCore24BasicShapeInsetRectangleD2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 96;
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 return;
}
function __ZN7WebCore19BasicShapeRectangleD2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 136;
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 return;
}
function __ZN7WebCore17BasicShapePolygonD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 176;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 16 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 3) | 0;
  i3 = i5;
  while (1) {
   if ((HEAP8[i3 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
   }
   i3 = i3 + 8 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = i1;
  __ZN3WTF8fastFreeEPv(i7);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i7 = i1;
 __ZN3WTF8fastFreeEPv(i7);
 return;
}
function __ZN7WebCore17BasicShapePolygonD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 176;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 16 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 3) | 0;
  i3 = i5;
  while (1) {
   if ((HEAP8[i3 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
   }
   i3 = i3 + 8 | 0;
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
 HEAP32[i1 + 20 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore27DeprecatedBasicShapeEllipseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) != 10) {
  i2 = i1;
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 i2 = i1;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore17BasicShapeEllipseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 216;
 if ((HEAP8[i1 + 53 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 48 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 21 | 0] | 0) != 10) {
  i2 = i1;
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 16 | 0);
 i2 = i1;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore27DeprecatedBasicShapeEllipseD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
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
function __ZN7WebCore17BasicShapeEllipseD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 216;
 if ((HEAP8[i1 + 53 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 48 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 21 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 16 | 0);
 return;
}
function __ZN7WebCore26DeprecatedBasicShapeCircleD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 56;
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) != 10) {
  i2 = i1;
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 i2 = i1;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore16BasicShapeCircleD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 256;
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 21 | 0] | 0) != 10) {
  i2 = i1;
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 16 | 0);
 i2 = i1;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore17BasicShapeEllipse24floatValueForRadiusInBoxERKNS_16BasicShapeRadiusEff(i1, i2, d3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 var d5 = +0, d6 = +0;
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  d5 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 | 0, d4, 0);
  return +d5;
 }
 d6 = d4 - d3;
 if ((i1 | 0) == 1) {
  d5 = d6 < d3 ? d6 : d3;
  return +d5;
 } else {
  d5 = d6 > d3 ? d6 : d3;
  return +d5;
 }
 return +0;
}
function __ZN7WebCore26DeprecatedBasicShapeCircleD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 56;
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
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
function __ZN7WebCore16BasicShapeCircleD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 256;
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 21 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 16 | 0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiidi(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiidi[i1 & 31](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0);
}
function __ZN7WebCore24BasicShapeInsetRectangleD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore24BasicShapeInsetRectangleD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore19BasicShapeRectangleD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19BasicShapeRectangleD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore15BasicShapeInsetD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15BasicShapeInsetD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore24BasicShapeInsetRectangleD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore24BasicShapeInsetRectangleD2Ev(i1);
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
 FUNCTION_TABLE_vii[i1 & 1](i2 | 0, i3 | 0);
}
function __ZN7WebCore19BasicShapeRectangleD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19BasicShapeRectangleD2Ev(i1);
 return;
}
function b1(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 abort(1);
}
function __ZN7WebCore15BasicShapeInsetD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15BasicShapeInsetD2Ev(i1);
 return;
}
function __ZNK7WebCore17BasicShapePolygon8windRuleEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 12 >> 2] | 0;
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
function __ZNK7WebCore27DeprecatedBasicShapeEllipse4typeEv(i1) {
 i1 = i1 | 0;
 return 2;
}
function __ZNK7WebCore26DeprecatedBasicShapeCircle4typeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore24BasicShapeInsetRectangle4typeEv(i1) {
 i1 = i1 | 0;
 return 4;
}
function __ZNK7WebCore19BasicShapeRectangle4typeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore17BasicShapePolygon4typeEv(i1) {
 i1 = i1 | 0;
 return 3;
}
function __ZNK7WebCore17BasicShapeEllipse4typeEv(i1) {
 i1 = i1 | 0;
 return 6;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function __ZNK7WebCore16BasicShapeCircle4typeEv(i1) {
 i1 = i1 | 0;
 return 5;
}
function __ZNK7WebCore15BasicShapeInset4typeEv(i1) {
 i1 = i1 | 0;
 return 7;
}
function __ZNK7WebCore10BasicShape8windRuleEv(i1) {
 i1 = i1 | 0;
 return 0;
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
}
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore16BasicShapeCircleD0Ev,b0,__ZN7WebCore26DeprecatedBasicShapeCircleD1Ev,b0,__ZN7WebCore15BasicShapeInsetD1Ev,b0,__ZN7WebCore17BasicShapeEllipseD0Ev,b0,__ZN7WebCore17BasicShapeEllipseD1Ev,b0,__ZN7WebCore17BasicShapePolygonD0Ev,b0,__ZN7WebCore26DeprecatedBasicShapeCircleD0Ev,b0,__ZN7WebCore19BasicShapeRectangleD1Ev,b0,__ZN7WebCore27DeprecatedBasicShapeEllipseD0Ev,b0,__ZN7WebCore15BasicShapeInsetD0Ev,b0,__ZN7WebCore24BasicShapeInsetRectangleD0Ev,b0,__ZN7WebCore24BasicShapeInsetRectangleD1Ev,b0,__ZN7WebCore16BasicShapeCircleD1Ev,b0,__ZN7WebCore27DeprecatedBasicShapeEllipseD1Ev
  ,b0,__ZN7WebCore19BasicShapeRectangleD0Ev,b0,__ZN7WebCore17BasicShapePolygonD1Ev,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_viiidi = [b1,b1,__ZNK7WebCore17BasicShapeEllipse5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE,b1,__ZNK7WebCore24BasicShapeInsetRectangle5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE,b1,__ZNK7WebCore16BasicShapeCircle5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE,b1,__ZNK7WebCore26DeprecatedBasicShapeCircle5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE,b1,__ZNK7WebCore27DeprecatedBasicShapeEllipse5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE,b1,__ZNK7WebCore19BasicShapeRectangle5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE,b1,__ZNK7WebCore17BasicShapePolygon5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE,b1,__ZNK7WebCore15BasicShapeInset5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore10BasicShape8windRuleEv,b3,__ZNK7WebCore17BasicShapePolygon4typeEv,b3,__ZNK7WebCore19BasicShapeRectangle4typeEv,b3,__ZNK7WebCore26DeprecatedBasicShapeCircle4typeEv,b3,__ZNK7WebCore27DeprecatedBasicShapeEllipse4typeEv,b3,__ZNK7WebCore16BasicShapeCircle4typeEv,b3,__ZNK7WebCore24BasicShapeInsetRectangle4typeEv,b3,__ZNK7WebCore17BasicShapeEllipse4typeEv,b3,__ZNK7WebCore17BasicShapePolygon8windRuleEv,b3,__ZNK7WebCore15BasicShapeInset4typeEv,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore19BasicShapeRectangle4pathERNS_4PathERKNS_9FloatRectE,b4,__ZN7WebCore24BasicShapeInsetRectangle4pathERNS_4PathERKNS_9FloatRectE,b4,__ZN7WebCore15BasicShapeInset4pathERNS_4PathERKNS_9FloatRectE,b4,__ZN7WebCore16BasicShapeCircle4pathERNS_4PathERKNS_9FloatRectE,b4,__ZN7WebCore17BasicShapePolygon4pathERNS_4PathERKNS_9FloatRectE,b4,__ZN7WebCore27DeprecatedBasicShapeEllipse4pathERNS_4PathERKNS_9FloatRectE,b4,__ZN7WebCore26DeprecatedBasicShapeCircle4pathERNS_4PathERKNS_9FloatRectE,b4,__ZN7WebCore17BasicShapeEllipse4pathERNS_4PathERKNS_9FloatRectE,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_viiidi: dynCall_viiidi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_viiidi": invoke_viiidi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "_sqrtf": _sqrtf, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_viiidi = Module["dynCall_viiidi"] = asm["dynCall_viiidi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore19BasicShapeRectangle4pathERNS_4PathERKNS_9FloatRectE","__ZNK7WebCore10BasicShape8windRuleEv","__ZNK7WebCore26BasicShapeCenterCoordinate17lengthForBlendingERKNS_9FloatSizeE","__ZN7WebCore24BasicShapeInsetRectangle4pathERNS_4PathERKNS_9FloatRectE","__ZN7WebCore26DeprecatedBasicShapeCircleD1Ev","__ZN7WebCore15BasicShapeInsetD1Ev","__ZN7WebCore17BasicShapePolygon11appendPointENS_6LengthES1_","__ZN7WebCore17BasicShapeEllipseD0Ev","_strlen","__ZN7WebCore16BasicShapeCircleD1Ev","__ZNK7WebCore27DeprecatedBasicShapeEllipse4typeEv","__ZN7WebCore15BasicShapeInset4pathERNS_4PathERKNS_9FloatRectE","__ZNK7WebCore17BasicShapePolygon4typeEv","__ZN7WebCore16BasicShapeCircleD0Ev","__ZN7WebCore16BasicShapeCircle4pathERNS_4PathERKNS_9FloatRectE","__ZN7WebCore17BasicShapePolygonD0Ev","__ZNK7WebCore10BasicShape16referenceBoxSizeERKNS_9RenderBoxE","__ZN7WebCore26DeprecatedBasicShapeCircleD0Ev","__ZN7WebCore19BasicShapeRectangleD1Ev","__ZN7WebCore17BasicShapePolygon4pathERNS_4PathERKNS_9FloatRectE","__ZNK7WebCore10BasicShape8canBlendEPKS0_","__ZNK7WebCore16BasicShapeCircle24floatValueForRadiusInBoxEff","__ZNK7WebCore26BasicShapeCenterCoordinate5blendERKS0_dRKNS_9FloatSizeE","__ZN7WebCore15BasicShapeInsetD0Ev","__ZN7WebCore24BasicShapeInsetRectangleD0Ev","__ZNK7WebCore17BasicShapeEllipse5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE","__ZN7WebCore27DeprecatedBasicShapeEllipseD1Ev","__ZN7WebCore24BasicShapeInsetRectangleD1Ev","__ZNK7WebCore19BasicShapeRectangle4typeEv","__ZNK7WebCore9RenderBox14paddingBoxRectEv","__ZN7WebCore27DeprecatedBasicShapeEllipseD0Ev","__ZNK7WebCore26DeprecatedBasicShapeCircle4typeEv","__ZN3WTF15CrashOnOverflow10overflowedEv","_memset","__ZNK7WebCore16BasicShapeCircle5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE","__ZN7WebCore27DeprecatedBasicShapeEllipse4pathERNS_4PathERKNS_9FloatRectE","__ZNK7WebCore6Length5blendERKS0_d","__ZN7WebCore19BasicShapeRectangleD0Ev","__ZN7WebCore17BasicShapeEllipseD1Ev","__ZNK7WebCore16BasicShapeCircle4typeEv","__ZNK7WebCore15BasicShapeInset4typeEv","__ZNK7WebCore17BasicShapeEllipse24floatValueForRadiusInBoxERKNS_16BasicShapeRadiusEff","__ZNK7WebCore26DeprecatedBasicShapeCircle5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE","__ZN7WebCore24BasicShapeInsetRectangleD2Ev","__ZNK7WebCore24BasicShapeInsetRectangle5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE","__ZNK7WebCore27DeprecatedBasicShapeEllipse5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE","__ZNK7WebCore24BasicShapeInsetRectangle4typeEv","__ZNK7WebCore19BasicShapeRectangle5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE","__ZN7WebCore19BasicShapeRectangleD2Ev","_memcpy","__ZN7WebCore17BasicShapePolygonD1Ev","__ZN7WebCore15BasicShapeInsetD2Ev","__ZN7WebCore17BasicShapeEllipse4pathERNS_4PathERKNS_9FloatRectE","__ZNK7WebCore17BasicShapeEllipse4typeEv","__ZN3WTF6VectorIN7WebCore6LengthELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore17BasicShapePolygon8windRuleEv","__ZNK7WebCore17BasicShapePolygon5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE","__ZN7WebCore26DeprecatedBasicShapeCircle4pathERNS_4PathERKNS_9FloatRectE","__ZNK7WebCore15BasicShapeInset5blendEPKNS_10BasicShapeEdRKNS_9RenderBoxE"]

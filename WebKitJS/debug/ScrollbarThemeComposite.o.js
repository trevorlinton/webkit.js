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
H_BASE = parentModule["_malloc"](200 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 200;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
function invoke_fi(index,a1) {
  try {
    return Module["dynCall_fi"](index,a1);
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
  var __ZTVN7WebCore23ScrollbarThemeCompositeE=(H_BASE+8)|0;
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
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_di=env.invoke_di;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_fi=env.invoke_fi;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _round=env._round;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore23ScrollbarThemeComposite7hitTestEPNS_20ScrollbarThemeClientERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 56 | 0;
 i10 = i4 + 72 | 0;
 i11 = i4 + 88 | 0;
 i12 = i4 + 104 | 0;
 i13 = i4 + 120 | 0;
 i14 = i4 + 136 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] & 15](i2) | 0)) {
  i15 = 0;
  STACKTOP = i4;
  return i15 | 0;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 60 >> 2] & 15](i5, i2, i3);
 i3 = i2;
 i16 = FUNCTION_TABLE_ii[HEAP32[HEAP32[i3 >> 2] >> 2] & 15](i2) | 0;
 i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i2) | 0;
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + i16;
 i16 = i5 + 4 | 0;
 HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + i17;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] & 15](i6, i2);
 i17 = HEAP32[i3 >> 2] | 0;
 i5 = HEAP32[i16 >> 2] | 0;
 i18 = HEAP32[i6 >> 2] | 0;
 if ((i18 | 0) > (i17 | 0)) {
  i15 = 0;
  STACKTOP = i4;
  return i15 | 0;
 }
 if (((HEAP32[i6 + 8 >> 2] | 0) + i18 | 0) <= (i17 | 0)) {
  i15 = 0;
  STACKTOP = i4;
  return i15 | 0;
 }
 i17 = HEAP32[i6 + 4 >> 2] | 0;
 if ((i17 | 0) > (i5 | 0)) {
  i15 = 0;
  STACKTOP = i4;
  return i15 | 0;
 }
 if (((HEAP32[i6 + 12 >> 2] | 0) + i17 | 0) <= (i5 | 0)) {
  i15 = 0;
  STACKTOP = i4;
  return i15 | 0;
 }
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 136 >> 2] & 15](i7, i1, i2, 0);
 i5 = HEAP32[i3 >> 2] | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) <= (i5 | 0)) {
   if (((HEAP32[i7 + 8 >> 2] | 0) + i6 | 0) <= (i5 | 0)) {
    break;
   }
   i18 = HEAP32[i7 + 4 >> 2] | 0;
   if ((i18 | 0) > (i17 | 0)) {
    break;
   }
   if (((HEAP32[i7 + 12 >> 2] | 0) + i18 | 0) <= (i17 | 0)) {
    break;
   }
   _memset(i8 | 0, 0, 16) | 0;
   _memset(i9 | 0, 0, 16) | 0;
   _memset(i10 | 0, 0, 16) | 0;
   FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 144 >> 2] & 7](i1, i2, i7, i8, i9, i10);
   i18 = HEAP32[i3 >> 2] | 0;
   i19 = HEAP32[i16 >> 2] | 0;
   i20 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i20 | 0) <= (i18 | 0)) {
     if (((HEAP32[i9 + 8 >> 2] | 0) + i20 | 0) <= (i18 | 0)) {
      break;
     }
     i21 = HEAP32[i9 + 4 >> 2] | 0;
     if ((i21 | 0) > (i19 | 0)) {
      break;
     }
     if (((HEAP32[i9 + 12 >> 2] | 0) + i21 | 0) > (i19 | 0)) {
      i15 = 8;
     } else {
      break;
     }
     STACKTOP = i4;
     return i15 | 0;
    }
   } while (0);
   i20 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i20 | 0) <= (i18 | 0)) {
     if (((HEAP32[i8 + 8 >> 2] | 0) + i20 | 0) <= (i18 | 0)) {
      break;
     }
     i21 = HEAP32[i8 + 4 >> 2] | 0;
     if ((i21 | 0) > (i19 | 0)) {
      break;
     }
     if (((HEAP32[i8 + 12 >> 2] | 0) + i21 | 0) > (i19 | 0)) {
      i15 = 4;
     } else {
      break;
     }
     STACKTOP = i4;
     return i15 | 0;
    }
   } while (0);
   i20 = HEAP32[i10 >> 2] | 0;
   if ((i20 | 0) > (i18 | 0)) {
    i15 = 256;
    STACKTOP = i4;
    return i15 | 0;
   }
   if (((HEAP32[i10 + 8 >> 2] | 0) + i20 | 0) <= (i18 | 0)) {
    i15 = 256;
    STACKTOP = i4;
    return i15 | 0;
   }
   i20 = HEAP32[i10 + 4 >> 2] | 0;
   if ((i20 | 0) > (i19 | 0)) {
    i15 = 256;
    STACKTOP = i4;
    return i15 | 0;
   }
   i15 = ((HEAP32[i10 + 12 >> 2] | 0) + i20 | 0) > (i19 | 0) ? 16 : 256;
   STACKTOP = i4;
   return i15 | 0;
  }
 } while (0);
 i10 = i1;
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i10 >> 2] | 0) + 128 >> 2] & 7](i11, i1, i2, 1, 0);
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = HEAP32[i16 >> 2] | 0;
 i7 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i7 | 0) <= (i8 | 0)) {
   if (((HEAP32[i11 + 8 >> 2] | 0) + i7 | 0) <= (i8 | 0)) {
    break;
   }
   i17 = HEAP32[i11 + 4 >> 2] | 0;
   if ((i17 | 0) > (i9 | 0)) {
    break;
   }
   if (((HEAP32[i11 + 12 >> 2] | 0) + i17 | 0) > (i9 | 0)) {
    i15 = 1;
   } else {
    break;
   }
   STACKTOP = i4;
   return i15 | 0;
  }
 } while (0);
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i10 >> 2] | 0) + 128 >> 2] & 7](i12, i1, i2, 32, 0);
 i9 = HEAP32[i3 >> 2] | 0;
 i11 = HEAP32[i16 >> 2] | 0;
 i8 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i8 | 0) <= (i9 | 0)) {
   if (((HEAP32[i12 + 8 >> 2] | 0) + i8 | 0) <= (i9 | 0)) {
    break;
   }
   i7 = HEAP32[i12 + 4 >> 2] | 0;
   if ((i7 | 0) > (i11 | 0)) {
    break;
   }
   if (((HEAP32[i12 + 12 >> 2] | 0) + i7 | 0) > (i11 | 0)) {
    i15 = 32;
   } else {
    break;
   }
   STACKTOP = i4;
   return i15 | 0;
  }
 } while (0);
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i10 >> 2] | 0) + 132 >> 2] & 7](i13, i1, i2, 2, 0);
 i11 = HEAP32[i3 >> 2] | 0;
 i12 = HEAP32[i16 >> 2] | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i9 | 0) <= (i11 | 0)) {
   if (((HEAP32[i13 + 8 >> 2] | 0) + i9 | 0) <= (i11 | 0)) {
    break;
   }
   i8 = HEAP32[i13 + 4 >> 2] | 0;
   if ((i8 | 0) > (i12 | 0)) {
    break;
   }
   if (((HEAP32[i13 + 12 >> 2] | 0) + i8 | 0) > (i12 | 0)) {
    i15 = 2;
   } else {
    break;
   }
   STACKTOP = i4;
   return i15 | 0;
  }
 } while (0);
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i10 >> 2] | 0) + 132 >> 2] & 7](i14, i1, i2, 64, 0);
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i16 >> 2] | 0;
 i16 = HEAP32[i14 >> 2] | 0;
 if ((i16 | 0) > (i2 | 0)) {
  i15 = 128;
  STACKTOP = i4;
  return i15 | 0;
 }
 if (((HEAP32[i14 + 8 >> 2] | 0) + i16 | 0) <= (i2 | 0)) {
  i15 = 128;
  STACKTOP = i4;
  return i15 | 0;
 }
 i2 = HEAP32[i14 + 4 >> 2] | 0;
 if ((i2 | 0) > (i3 | 0)) {
  i15 = 128;
  STACKTOP = i4;
  return i15 | 0;
 }
 i15 = ((HEAP32[i14 + 12 >> 2] | 0) + i2 | 0) > (i3 | 0) ? 64 : 128;
 STACKTOP = i4;
 return i15 | 0;
}
function __ZN7WebCore23ScrollbarThemeComposite5paintEPNS_20ScrollbarThemeClientEPNS_15GraphicsContextERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 208 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 48 | 0;
 i10 = i5 + 64 | 0;
 i11 = i5 + 80 | 0;
 i12 = i5 + 96 | 0;
 i13 = i5 + 112 | 0;
 i14 = i5 + 128 | 0;
 i15 = i5 + 144 | 0;
 i16 = i5 + 160 | 0;
 i17 = i5 + 176 | 0;
 i18 = i5 + 192 | 0;
 i19 = i6;
 _memset(i19 | 0, 0, 16) | 0;
 i20 = i7;
 _memset(i20 | 0, 0, 16) | 0;
 i21 = i8;
 _memset(i21 | 0, 0, 16) | 0;
 i22 = i9;
 _memset(i22 | 0, 0, 16) | 0;
 i23 = i1;
 do {
  if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i23 >> 2] | 0) + 120 >> 2] & 15](i1, i2) | 0) {
   i24 = i1;
   FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i24 >> 2] | 0) + 128 >> 2] & 7](i10, i1, i2, 1, 1);
   i25 = i10;
   HEAP32[i19 >> 2] = HEAP32[i25 >> 2];
   HEAP32[i19 + 4 >> 2] = HEAP32[i25 + 4 >> 2];
   HEAP32[i19 + 8 >> 2] = HEAP32[i25 + 8 >> 2];
   HEAP32[i19 + 12 >> 2] = HEAP32[i25 + 12 >> 2];
   i25 = (__ZNK7WebCore7IntRect10intersectsERKS0_(i4, i6) | 0) & 1;
   FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i24 >> 2] | 0) + 128 >> 2] & 7](i11, i1, i2, 32, 1);
   i26 = i11;
   HEAP32[i20 >> 2] = HEAP32[i26 >> 2];
   HEAP32[i20 + 4 >> 2] = HEAP32[i26 + 4 >> 2];
   HEAP32[i20 + 8 >> 2] = HEAP32[i26 + 8 >> 2];
   HEAP32[i20 + 12 >> 2] = HEAP32[i26 + 12 >> 2];
   i26 = __ZNK7WebCore7IntRect10intersectsERKS0_(i4, i7) | 0;
   i27 = i26 ? i25 | 32 : i25;
   FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i24 >> 2] | 0) + 132 >> 2] & 7](i12, i1, i2, 2, 1);
   i25 = i12;
   HEAP32[i21 >> 2] = HEAP32[i25 >> 2];
   HEAP32[i21 + 4 >> 2] = HEAP32[i25 + 4 >> 2];
   HEAP32[i21 + 8 >> 2] = HEAP32[i25 + 8 >> 2];
   HEAP32[i21 + 12 >> 2] = HEAP32[i25 + 12 >> 2];
   i25 = __ZNK7WebCore7IntRect10intersectsERKS0_(i4, i8) | 0;
   i26 = i25 ? i27 | 2 : i27;
   FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i24 >> 2] | 0) + 132 >> 2] & 7](i13, i1, i2, 64, 1);
   i24 = i13;
   HEAP32[i22 >> 2] = HEAP32[i24 >> 2];
   HEAP32[i22 + 4 >> 2] = HEAP32[i24 + 4 >> 2];
   HEAP32[i22 + 8 >> 2] = HEAP32[i24 + 8 >> 2];
   HEAP32[i22 + 12 >> 2] = HEAP32[i24 + 12 >> 2];
   if (!(__ZNK7WebCore7IntRect10intersectsERKS0_(i4, i9) | 0)) {
    i28 = i26;
    break;
   }
   i28 = i26 | 64;
  } else {
   i28 = 0;
  }
 } while (0);
 _memset(i14 | 0, 0, 16) | 0;
 _memset(i15 | 0, 0, 16) | 0;
 _memset(i16 | 0, 0, 16) | 0;
 i22 = i1;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i22 >> 2] | 0) + 136 >> 2] & 15](i17, i1, i2, 1);
 i13 = __ZNK7WebCore7IntRect10intersectsERKS0_(i4, i17) | 0;
 i21 = i13 ? i28 | 256 : i28;
 if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i23 >> 2] | 0) + 124 >> 2] & 15](i1, i2) | 0) {
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i22 >> 2] | 0) + 136 >> 2] & 15](i18, i1, i2, 0);
  FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 144 >> 2] & 7](i1, i2, i18, i14, i15, i16);
  i18 = __ZNK7WebCore7IntRect10intersectsERKS0_(i4, i15) | 0;
  i22 = i18 ? i21 | 8 : i21;
  i18 = __ZNK7WebCore7IntRect10intersectsERKS0_(i4, i14) | 0;
  i23 = i18 ? i22 | 4 : i22;
  i22 = __ZNK7WebCore7IntRect10intersectsERKS0_(i4, i16) | 0;
  i29 = i22 ? i23 | 16 : i23;
 } else {
  i29 = i21;
 }
 i21 = i1;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i21 >> 2] | 0) + 152 >> 2] & 15](i1, i3, i2);
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i21 >> 2] | 0) + 160 >> 2] & 15](i1, i3, i2);
 if ((i29 & 1 | 0) != 0) {
  FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 172 >> 2] & 7](i1, i3, i2, i6, 1);
 }
 if ((i29 & 32 | 0) != 0) {
  FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 172 >> 2] & 7](i1, i3, i2, i7, 32);
 }
 if ((i29 & 2 | 0) != 0) {
  FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 172 >> 2] & 7](i1, i3, i2, i8, 2);
 }
 if ((i29 & 64 | 0) != 0) {
  FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 172 >> 2] & 7](i1, i3, i2, i9, 64);
 }
 if ((i29 & 256 | 0) != 0) {
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 15](i1, i3, i2, i17);
 }
 i9 = (i29 & 16 | 0) != 0;
 i8 = (i29 & 4 | 0) == 0;
 if (!(i8 & (i9 ^ 1))) {
  if (!i8) {
   FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 168 >> 2] & 7](i1, i3, i2, i14, 4);
  }
  if (i9) {
   FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 168 >> 2] & 7](i1, i3, i2, i16, 16);
  }
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] & 15](i1 | 0, i3, i2, i17);
 }
 if ((i29 & 8 | 0) == 0) {
  i30 = HEAP32[i21 >> 2] | 0;
  i31 = i30 + 156 | 0;
  i32 = HEAP32[i31 >> 2] | 0;
  FUNCTION_TABLE_viii[i32 & 15](i1, i3, i2);
  STACKTOP = i5;
  return 1;
 }
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 176 >> 2] & 15](i1, i3, i2, i15);
 i30 = HEAP32[i21 >> 2] | 0;
 i31 = i30 + 156 | 0;
 i32 = HEAP32[i31 >> 2] | 0;
 FUNCTION_TABLE_viii[i32 & 15](i1, i3, i2);
 STACKTOP = i5;
 return 1;
}
function __ZN7WebCore23ScrollbarThemeComposite14invalidatePartEPNS_20ScrollbarThemeClientENS_13ScrollbarPartE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 80 | 0;
 i11 = i4 + 96 | 0;
 i12 = i4 + 112 | 0;
 i13 = i4 + 128 | 0;
 i14 = i4 + 144 | 0;
 i15 = i4 + 160 | 0;
 i16 = i4 + 176 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i17 = i5;
 _memset(i17 | 0, 0, 16) | 0;
 L4 : do {
  switch (i3 | 0) {
  case 32:
   {
    FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 128 >> 2] & 7](i7, i1, i2, 32, 1);
    i18 = i7;
    HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
    HEAP32[i17 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
    HEAP32[i17 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
    HEAP32[i17 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
    break;
   }
  case 2:
   {
    FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 132 >> 2] & 7](i8, i1, i2, 2, 1);
    i18 = i8;
    HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
    HEAP32[i17 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
    HEAP32[i17 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
    HEAP32[i17 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
    break;
   }
  case 64:
   {
    FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 132 >> 2] & 7](i9, i1, i2, 64, 1);
    i18 = i9;
    HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
    HEAP32[i17 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
    HEAP32[i17 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
    HEAP32[i17 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
    break;
   }
  case 1:
   {
    FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 128 >> 2] & 7](i6, i1, i2, 1, 1);
    i18 = i6;
    HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
    HEAP32[i17 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
    HEAP32[i17 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
    HEAP32[i17 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
    break;
   }
  case 256:
   {
    FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 136 >> 2] & 15](i10, i1, i2, 1);
    i18 = i10;
    HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
    HEAP32[i17 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
    HEAP32[i17 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
    HEAP32[i17 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
    break;
   }
  case 128:
   {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] & 15](i11, i2);
    i18 = i11;
    HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
    HEAP32[i17 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
    HEAP32[i17 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
    HEAP32[i17 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
    break;
   }
  default:
   {
    i18 = i12;
    _memset(i18 | 0, 0, 16) | 0;
    i19 = i13;
    _memset(i19 | 0, 0, 16) | 0;
    i20 = i14;
    _memset(i20 | 0, 0, 16) | 0;
    i21 = HEAP32[i1 >> 2] | 0;
    i22 = HEAP32[i21 + 144 >> 2] | 0;
    FUNCTION_TABLE_viiii[HEAP32[i21 + 136 >> 2] & 15](i15, i1, i2, 0);
    FUNCTION_TABLE_viiiiii[i22 & 7](i1, i2, i15, i12, i13, i14);
    if ((i3 | 0) == 16) {
     HEAP32[i17 >> 2] = HEAP32[i20 >> 2];
     HEAP32[i17 + 4 >> 2] = HEAP32[i20 + 4 >> 2];
     HEAP32[i17 + 8 >> 2] = HEAP32[i20 + 8 >> 2];
     HEAP32[i17 + 12 >> 2] = HEAP32[i20 + 12 >> 2];
     break L4;
    } else if ((i3 | 0) == 4) {
     HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
     HEAP32[i17 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
     HEAP32[i17 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
     HEAP32[i17 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
     break L4;
    } else {
     HEAP32[i17 >> 2] = HEAP32[i19 >> 2];
     HEAP32[i17 + 4 >> 2] = HEAP32[i19 + 4 >> 2];
     HEAP32[i17 + 8 >> 2] = HEAP32[i19 + 8 >> 2];
     HEAP32[i17 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
     break L4;
    }
   }
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 15](i16, i2);
 i17 = HEAP32[i16 + 4 >> 2] | 0;
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - (HEAP32[i16 >> 2] | 0);
 i16 = i5 + 4 | 0;
 HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) - i17;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 15](i2, i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore23ScrollbarThemeComposite10splitTrackEPNS_20ScrollbarThemeClientERKNS_7IntRectERS3_S6_S6_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 180 >> 2] & 15](i8, i1, i2, i3);
 i3 = i2;
 i9 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 68 >> 2] & 15](i2) | 0) == 0;
 i10 = HEAP32[i3 >> 2] | 0;
 if (i9) {
  i11 = FUNCTION_TABLE_ii[HEAP32[i10 + 12 >> 2] & 15](i2) | 0;
 } else {
  i11 = FUNCTION_TABLE_ii[HEAP32[i10 + 8 >> 2] & 15](i2) | 0;
 }
 i10 = i1;
 i9 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i10 >> 2] | 0) + 80 >> 2] & 15](i1, i2) | 0;
 i12 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 68 >> 2] & 15](i2) | 0) == 0;
 i3 = i8 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 if (i12) {
  i12 = i8 + 4 | 0;
  i14 = i8 + 12 | 0;
  i15 = (((HEAP32[i14 >> 2] | 0) - i11 | 0) / 2 & -1) + (HEAP32[i12 >> 2] | 0) | 0;
  i16 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i10 >> 2] | 0) + 84 >> 2] & 15](i1, i2) | 0;
  HEAP32[i5 >> 2] = i13 + i9;
  HEAP32[i5 + 4 >> 2] = i15;
  HEAP32[i5 + 8 >> 2] = i16;
  HEAP32[i5 + 12 >> 2] = i11;
  i15 = HEAP32[i3 >> 2] | 0;
  i17 = HEAP32[i12 >> 2] | 0;
  i12 = ((i16 | 0) / 2 & -1) + i9 | 0;
  i16 = HEAP32[i14 >> 2] | 0;
  HEAP32[i4 >> 2] = i15;
  HEAP32[i4 + 4 >> 2] = i17;
  HEAP32[i4 + 8 >> 2] = i12;
  HEAP32[i4 + 12 >> 2] = i16;
  i14 = i15 - i12 + (HEAP32[i8 + 8 >> 2] | 0) - i15 | 0;
  HEAP32[i6 >> 2] = i12 + i15;
  HEAP32[i6 + 4 >> 2] = i17;
  HEAP32[i6 + 8 >> 2] = i14;
  HEAP32[i6 + 12 >> 2] = i16;
  STACKTOP = i7;
  return;
 } else {
  i16 = i8 + 8 | 0;
  i14 = (((HEAP32[i16 >> 2] | 0) - i11 | 0) / 2 & -1) + i13 | 0;
  i13 = i8 + 4 | 0;
  i17 = (HEAP32[i13 >> 2] | 0) + i9 | 0;
  i15 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i10 >> 2] | 0) + 84 >> 2] & 15](i1, i2) | 0;
  HEAP32[i5 >> 2] = i14;
  HEAP32[i5 + 4 >> 2] = i17;
  HEAP32[i5 + 8 >> 2] = i11;
  HEAP32[i5 + 12 >> 2] = i15;
  i5 = HEAP32[i3 >> 2] | 0;
  i3 = HEAP32[i13 >> 2] | 0;
  i13 = HEAP32[i16 >> 2] | 0;
  i16 = ((i15 | 0) / 2 & -1) + i9 | 0;
  HEAP32[i4 >> 2] = i5;
  HEAP32[i4 + 4 >> 2] = i3;
  HEAP32[i4 + 8 >> 2] = i13;
  HEAP32[i4 + 12 >> 2] = i16;
  i4 = i3 - i16 + (HEAP32[i8 + 12 >> 2] | 0) - i3 | 0;
  HEAP32[i6 >> 2] = i5;
  HEAP32[i6 + 4 >> 2] = i3 + i16;
  HEAP32[i6 + 8 >> 2] = i13;
  HEAP32[i6 + 12 >> 2] = i4;
  STACKTOP = i7;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_iiii + 8;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_di + 2;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_di + 4;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_viiiiii + 4;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_viiii + 2;
}
function __ZN7WebCore23ScrollbarThemeComposite18paintOverhangAreasEPNS_10ScrollViewEPNS_15GraphicsContextERKNS_7IntRectES7_S7_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i1 = i2 | 0;
 i7 = i2 + 8 | 0;
 i8 = i2 + 24 | 0;
 i9 = i2 + 40 | 0;
 i10 = i2 + 48 | 0;
 i11 = i2 + 64 | 0;
 HEAP32[i1 >> 2] = -1;
 HEAP8[i1 + 4 | 0] = 1;
 __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i3, i1, 0);
 do {
  if ((HEAP32[i4 + 8 >> 2] | 0) >= 1) {
   if ((HEAP32[i4 + 12 >> 2] | 0) < 1) {
    break;
   }
   i1 = i8;
   i12 = i4;
   HEAP32[i1 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i1 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
   HEAP32[i1 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
   HEAP32[i1 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
   __ZN7WebCore7IntRect9intersectERKS0_(i8, i6);
   __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i7, i8);
   __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectE(i3, i7);
  }
 } while (0);
 HEAP32[i9 >> 2] = -1;
 HEAP8[i9 + 4 | 0] = 1;
 __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i3, i9, 0);
 if ((HEAP32[i5 + 8 >> 2] | 0) < 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i5 + 12 >> 2] | 0) < 1) {
  STACKTOP = i2;
  return;
 }
 i9 = i11;
 i7 = i5;
 HEAP32[i9 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 __ZN7WebCore7IntRect9intersectERKS0_(i11, i6);
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i10, i11);
 __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectE(i3, i10);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore23ScrollbarThemeComposite13thumbPositionEPNS_20ScrollbarThemeClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, d5 = +0, d6 = +0, i7 = 0, d8 = +0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] & 15](i2) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i2;
 d5 = +-0 - +FUNCTION_TABLE_fi[HEAP32[(HEAP32[i4 >> 2] | 0) + 76 >> 2] & 1](i2);
 d6 = +FUNCTION_TABLE_fi[HEAP32[(HEAP32[i4 >> 2] | 0) + 76 >> 2] & 1](i2);
 i7 = i2;
 d8 = d6 + +(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 80 >> 2] & 15](i2) | 0);
 d6 = d8 - +(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 84 >> 2] & 15](i2) | 0);
 d8 = d6 > d5 ? d6 : d5;
 d5 = +(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 84 >> 2] & 15](i2) | 0) + (d8 > +0 ? d8 : +0);
 d8 = d5 - +(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 80 >> 2] & 15](i2) | 0);
 if (d8 == +0) {
  i3 = 1;
  return i3 | 0;
 }
 d5 = +FUNCTION_TABLE_fi[HEAP32[(HEAP32[i4 >> 2] | 0) + 76 >> 2] & 1](i2);
 i4 = i1;
 i7 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 92 >> 2] & 15](i1, i2) | 0;
 d6 = (d5 > +0 ? d5 : +0) * +(i7 - (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 84 >> 2] & 15](i1, i2) | 0) | 0) / d8;
 i3 = d6 < +1 & d6 > +0 ? 1 : ~~d6;
 return i3 | 0;
}
function __ZN7WebCore23ScrollbarThemeComposite11thumbLengthEPNS_20ScrollbarThemeClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, d5 = +0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, i10 = 0, i11 = 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] & 15](i2) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i2;
 d5 = +(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 80 >> 2] & 15](i2) | 0);
 i6 = i2;
 d7 = +-0 - +FUNCTION_TABLE_fi[HEAP32[(HEAP32[i6 >> 2] | 0) + 76 >> 2] & 1](i2);
 d8 = +FUNCTION_TABLE_fi[HEAP32[(HEAP32[i6 >> 2] | 0) + 76 >> 2] & 1](i2);
 d9 = d8 + +(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 80 >> 2] & 15](i2) | 0);
 d8 = d9 - +(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 84 >> 2] & 15](i2) | 0);
 d9 = d8 > d7 ? d8 : d7;
 d7 = d5 / (+(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 84 >> 2] & 15](i2) | 0) + (d9 > +0 ? d9 : +0));
 i4 = i1;
 i6 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 92 >> 2] & 15](i1, i2) | 0;
 i10 = ~~+_round(+(d7 * +(i6 | 0)));
 i11 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 148 >> 2] & 15](i1, i2) | 0;
 i2 = (i10 | 0) < (i11 | 0) ? i11 : i10;
 i3 = (i2 | 0) > (i6 | 0) ? 0 : i2;
 return i3 | 0;
}
function __ZN7WebCore23ScrollbarThemeComposite9thumbRectEPNS_20ScrollbarThemeClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 124 >> 2] & 15](i2, i3) | 0) {
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 136 >> 2] & 15](i5, i2, i3, 0);
  _memset(i6 | 0, 0, 16) | 0;
  i9 = i7;
  _memset(i9 | 0, 0, 16) | 0;
  _memset(i8 | 0, 0, 16) | 0;
  FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 144 >> 2] & 7](i2, i3, i5, i6, i7, i8);
  i8 = i1;
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
  HEAP32[i8 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
  HEAP32[i8 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
  STACKTOP = i4;
  return;
 } else {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore23ScrollbarThemeComposite13trackPositionEPNS_20ScrollbarThemeClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 i7 = HEAP32[i6 + 180 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[i6 + 136 >> 2] & 15](i5, i1, i2, 0);
 FUNCTION_TABLE_viiii[i7 & 15](i4, i1, i2, i5);
 i5 = i2;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 68 >> 2] & 15](i2) | 0) == 0) {
  i1 = HEAP32[i4 >> 2] | 0;
  i8 = i1 - (FUNCTION_TABLE_ii[HEAP32[HEAP32[i5 >> 2] >> 2] & 15](i2) | 0) | 0;
  STACKTOP = i3;
  return i8 | 0;
 } else {
  i1 = HEAP32[i4 + 4 >> 2] | 0;
  i8 = i1 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i2) | 0) | 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore23ScrollbarThemeComposite11trackLengthEPNS_20ScrollbarThemeClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 i7 = HEAP32[i6 + 180 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[i6 + 136 >> 2] & 15](i5, i1, i2, 0);
 FUNCTION_TABLE_viiii[i7 & 15](i4, i1, i2, i5);
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 68 >> 2] & 15](i2) | 0) == 0) {
  i8 = HEAP32[i4 + 8 >> 2] | 0;
  STACKTOP = i3;
  return i8 | 0;
 } else {
  i8 = HEAP32[i4 + 12 >> 2] | 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 return 0;
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
function __ZN7WebCore23ScrollbarThemeComposite17paintScrollCornerEPNS_10ScrollViewEPNS_15GraphicsContextERKNS_7IntRectE(i1, i2, i3, i4) {
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
function __ZN7WebCore23ScrollbarThemeComposite31constrainTrackRectToTrackPiecesEPNS_20ScrollbarThemeClientERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i3 = i1;
 i1 = i4;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 return;
}
function __ZN7WebCore23ScrollbarThemeComposite18minimumThumbLengthEPNS_20ScrollbarThemeClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] | 0;
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] & 15](i2) | 0;
 return FUNCTION_TABLE_iii[i3 & 15](i1 | 0, i4) | 0;
}
function __ZN7WebCore23ScrollbarThemeComposite15paintTrackPieceEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectENS_13ScrollbarPartE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return;
}
function __ZN7WebCore23ScrollbarThemeComposite11paintButtonEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectENS_13ScrollbarPartE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return;
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
function __ZN7WebCore23ScrollbarThemeComposite20paintTrackBackgroundEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
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
function __ZN7WebCore23ScrollbarThemeComposite10paintThumbEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function __ZN7WebCore14ScrollbarTheme14paintTickmarksEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
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
function __ZN7WebCore23ScrollbarThemeComposite24paintScrollbarBackgroundEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore14ScrollbarTheme26shouldSnapBackToDragOriginEPNS_20ScrollbarThemeClientERKNS_18PlatformMouseEventE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 0;
}
function __ZN7WebCore23ScrollbarThemeComposite18willPaintScrollbarEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore23ScrollbarThemeComposite17didPaintScrollbarEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore14ScrollbarTheme19shouldCenterOnThumbEPNS_20ScrollbarThemeClientERKNS_18PlatformMouseEventE(i1, i2, i3) {
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
function b10(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(10);
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore14ScrollbarTheme19unregisterScrollbarEPNS_20ScrollbarThemeClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore14ScrollbarTheme18scrollbarThicknessENS_20ScrollbarControlSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore14ScrollbarTheme18updateEnabledStateEPNS_20ScrollbarThemeClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore14ScrollbarTheme17registerScrollbarEPNS_20ScrollbarThemeClientE(i1, i2) {
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
function b1(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(1);
 return 0;
}
function __ZN7WebCore23ScrollbarThemeCompositeD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function __ZN7WebCore14ScrollbarTheme27initialAutoscrollTimerDelayEv(i1) {
 i1 = i1 | 0;
 return +(+.25);
}
function __ZN7WebCore14ScrollbarTheme22maxOverlapBetweenPagesEv(i1) {
 i1 = i1 | 0;
 return 2147483647;
}
function dynCall_fi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_fi[i1 & 1](i2 | 0);
}
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 7](i2 | 0);
}
function b12(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(12);
}
function __ZN7WebCore14ScrollbarTheme28usesOverlayScrollbarsChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore14ScrollbarTheme26invalidateOnMouseEnterExitEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore14ScrollbarTheme20autoscrollTimerDelayEv(i1) {
 i1 = i1 | 0;
 return +(+.05);
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
function __ZNK7WebCore14ScrollbarTheme20supportsControlTintsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
 return 0;
}
function __ZNK7WebCore14ScrollbarTheme16buttonsPlacementEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore14ScrollbarTheme11isMockThemeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore14ScrollbarTheme12themeChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore23ScrollbarThemeCompositeD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b7(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(7);
}
function b11(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(11);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b9(i1) {
 i1 = i1 | 0;
 abort(9);
 return +0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
 return +0;
}
function b5(i1) {
 i1 = i1 | 0;
 abort(5);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b8() {
 abort(8);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore23ScrollbarThemeComposite15paintTrackPieceEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectENS_13ScrollbarPartE,b0,__ZN7WebCore23ScrollbarThemeComposite11paintButtonEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectENS_13ScrollbarPartE,b0,b0,b0];
  var FUNCTION_TABLE_iiiii = [b1,b1,__ZN7WebCore23ScrollbarThemeComposite5paintEPNS_20ScrollbarThemeClientEPNS_15GraphicsContextERKNS_7IntRectE,b1];
  var FUNCTION_TABLE_di = [b2,b2,__ZN7WebCore14ScrollbarTheme27initialAutoscrollTimerDelayEv,b2,__ZN7WebCore14ScrollbarTheme20autoscrollTimerDelayEv,b2,b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore23ScrollbarThemeCompositeD0Ev,b3,__ZN7WebCore14ScrollbarTheme28usesOverlayScrollbarsChangedEv,b3,__ZN7WebCore14ScrollbarTheme12themeChangedEv,b3,__ZN7WebCore23ScrollbarThemeCompositeD1Ev,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,__ZN7WebCore14ScrollbarTheme19unregisterScrollbarEPNS_20ScrollbarThemeClientE,b4,__ZN7WebCore14ScrollbarTheme17registerScrollbarEPNS_20ScrollbarThemeClientE,b4,__ZN7WebCore14ScrollbarTheme18updateEnabledStateEPNS_20ScrollbarThemeClientE,b4,__ZN7WebCore14ScrollbarTheme27updateScrollbarOverlayStyleEPNS_20ScrollbarThemeClientE,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_ii = [b5,b5,__ZNK7WebCore14ScrollbarTheme21usesOverlayScrollbarsEv,b5,__ZNK7WebCore14ScrollbarTheme20supportsControlTintsEv,b5,__ZN7WebCore14ScrollbarTheme22maxOverlapBetweenPagesEv,b5,__ZNK7WebCore14ScrollbarTheme11isMockThemeEv,b5,__ZN7WebCore14ScrollbarTheme26invalidateOnMouseEnterExitEv,b5,__ZNK7WebCore14ScrollbarTheme16buttonsPlacementEv,b5,b5,b5];
  var FUNCTION_TABLE_iiii = [b6,b6,__ZN7WebCore14ScrollbarTheme19shouldCenterOnThumbEPNS_20ScrollbarThemeClientERKNS_18PlatformMouseEventE,b6,__ZN7WebCore14ScrollbarTheme32shouldDragDocumentInsteadOfThumbEPNS_20ScrollbarThemeClientERKNS_18PlatformMouseEventE,b6,__ZN7WebCore14ScrollbarTheme26shouldSnapBackToDragOriginEPNS_20ScrollbarThemeClientERKNS_18PlatformMouseEventE,b6,__ZN7WebCore23ScrollbarThemeComposite7hitTestEPNS_20ScrollbarThemeClientERKNS_8IntPointE,b6,b6,b6,b6,b6,b6,b6];
  var FUNCTION_TABLE_viii = [b7,b7,__ZN7WebCore23ScrollbarThemeComposite24paintScrollbarBackgroundEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientE,b7,__ZN7WebCore23ScrollbarThemeComposite9thumbRectEPNS_20ScrollbarThemeClientE,b7,__ZN7WebCore23ScrollbarThemeComposite17didPaintScrollbarEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientE,b7,__ZN7WebCore23ScrollbarThemeComposite14invalidatePartEPNS_20ScrollbarThemeClientENS_13ScrollbarPartE,b7,__ZN7WebCore23ScrollbarThemeComposite18willPaintScrollbarEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientE,b7,b7,b7,b7,b7];
  var FUNCTION_TABLE_v = [b8,b8,v____cxa_pure_virtual__wrapper,b8];
  var FUNCTION_TABLE_fi = [b9,b9];
  var FUNCTION_TABLE_viiiiii = [b10,b10,__ZN7WebCore23ScrollbarThemeComposite18paintOverhangAreasEPNS_10ScrollViewEPNS_15GraphicsContextERKNS_7IntRectES7_S7_,b10,__ZN7WebCore23ScrollbarThemeComposite10splitTrackEPNS_20ScrollbarThemeClientERKNS_7IntRectERS3_S6_S6_,b10,b10,b10];
  var FUNCTION_TABLE_iii = [b11,b11,__ZN7WebCore23ScrollbarThemeComposite13thumbPositionEPNS_20ScrollbarThemeClientE,b11,__ZN7WebCore14ScrollbarTheme18scrollbarThicknessENS_20ScrollbarControlSizeE,b11,__ZN7WebCore23ScrollbarThemeComposite11trackLengthEPNS_20ScrollbarThemeClientE,b11,__ZN7WebCore23ScrollbarThemeComposite11thumbLengthEPNS_20ScrollbarThemeClientE,b11,__ZN7WebCore23ScrollbarThemeComposite18minimumThumbLengthEPNS_20ScrollbarThemeClientE,b11,__ZN7WebCore23ScrollbarThemeComposite13trackPositionEPNS_20ScrollbarThemeClientE,b11,b11,b11];
  var FUNCTION_TABLE_viiii = [b12,b12,__ZN7WebCore23ScrollbarThemeComposite31constrainTrackRectToTrackPiecesEPNS_20ScrollbarThemeClientERKNS_7IntRectE,b12,__ZN7WebCore23ScrollbarThemeComposite20paintTrackBackgroundEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectE,b12,__ZN7WebCore23ScrollbarThemeComposite17paintScrollCornerEPNS_10ScrollViewEPNS_15GraphicsContextERKNS_7IntRectE,b12,__ZN7WebCore14ScrollbarTheme14paintTickmarksEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectE,b12,__ZN7WebCore23ScrollbarThemeComposite10paintThumbEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectE,b12,b12,b12,b12,b12];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_iiiii: dynCall_iiiii, dynCall_di: dynCall_di, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_fi: dynCall_fi, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_iiiii": invoke_iiiii, "invoke_di": invoke_di, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_fi": invoke_fi, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_round": _round, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_fi = Module["dynCall_fi"] = asm["dynCall_fi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore23ScrollbarThemeComposite31constrainTrackRectToTrackPiecesEPNS_20ScrollbarThemeClientERKNS_7IntRectE","__ZN7WebCore23ScrollbarThemeComposite24paintScrollbarBackgroundEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientE","__ZNK7WebCore14ScrollbarTheme21usesOverlayScrollbarsEv","__ZN7WebCore23ScrollbarThemeComposite11trackLengthEPNS_20ScrollbarThemeClientE","__ZNK7WebCore14ScrollbarTheme20supportsControlTintsEv","__ZN7WebCore23ScrollbarThemeCompositeD0Ev","__ZN7WebCore23ScrollbarThemeCompositeD1Ev","__ZN7WebCore14ScrollbarTheme27initialAutoscrollTimerDelayEv","__ZN7WebCore14ScrollbarTheme28usesOverlayScrollbarsChangedEv","__ZN7WebCore14ScrollbarTheme20autoscrollTimerDelayEv","__ZN7WebCore14ScrollbarTheme22maxOverlapBetweenPagesEv","__ZN7WebCore23ScrollbarThemeComposite9thumbRectEPNS_20ScrollbarThemeClientE","__ZN7WebCore14ScrollbarTheme19unregisterScrollbarEPNS_20ScrollbarThemeClientE","_memset","__ZN7WebCore23ScrollbarThemeComposite5paintEPNS_20ScrollbarThemeClientEPNS_15GraphicsContextERKNS_7IntRectE","__ZN7WebCore14ScrollbarTheme12themeChangedEv","__ZN7WebCore23ScrollbarThemeComposite17didPaintScrollbarEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientE","__ZN7WebCore23ScrollbarThemeComposite15paintTrackPieceEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectENS_13ScrollbarPartE","__ZNK7WebCore14ScrollbarTheme11isMockThemeEv","__ZN7WebCore23ScrollbarThemeComposite13thumbPositionEPNS_20ScrollbarThemeClientE","__ZN7WebCore14ScrollbarTheme19shouldCenterOnThumbEPNS_20ScrollbarThemeClientERKNS_18PlatformMouseEventE","__ZN7WebCore14ScrollbarTheme26invalidateOnMouseEnterExitEv","__ZN7WebCore23ScrollbarThemeComposite14invalidatePartEPNS_20ScrollbarThemeClientENS_13ScrollbarPartE","__ZN7WebCore14ScrollbarTheme32shouldDragDocumentInsteadOfThumbEPNS_20ScrollbarThemeClientERKNS_18PlatformMouseEventE","__ZN7WebCore14ScrollbarTheme17registerScrollbarEPNS_20ScrollbarThemeClientE","__ZN7WebCore23ScrollbarThemeComposite11thumbLengthEPNS_20ScrollbarThemeClientE","__ZN7WebCore23ScrollbarThemeComposite20paintTrackBackgroundEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectE","__ZN7WebCore14ScrollbarTheme18updateEnabledStateEPNS_20ScrollbarThemeClientE","__ZN7WebCore23ScrollbarThemeComposite10paintThumbEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectE","__ZNK7WebCore14ScrollbarTheme16buttonsPlacementEv","__ZN7WebCore23ScrollbarThemeComposite17paintScrollCornerEPNS_10ScrollViewEPNS_15GraphicsContextERKNS_7IntRectE","__ZN7WebCore14ScrollbarTheme14paintTickmarksEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectE","_memcpy","__ZN7WebCore23ScrollbarThemeComposite11paintButtonEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientERKNS_7IntRectENS_13ScrollbarPartE","__ZN7WebCore14ScrollbarTheme26shouldSnapBackToDragOriginEPNS_20ScrollbarThemeClientERKNS_18PlatformMouseEventE","__ZN7WebCore23ScrollbarThemeComposite18paintOverhangAreasEPNS_10ScrollViewEPNS_15GraphicsContextERKNS_7IntRectES7_S7_","__ZN7WebCore23ScrollbarThemeComposite18minimumThumbLengthEPNS_20ScrollbarThemeClientE","__ZN7WebCore14ScrollbarTheme27updateScrollbarOverlayStyleEPNS_20ScrollbarThemeClientE","__ZN7WebCore14ScrollbarTheme18scrollbarThicknessENS_20ScrollbarControlSizeE","__ZN7WebCore23ScrollbarThemeComposite18willPaintScrollbarEPNS_15GraphicsContextEPNS_20ScrollbarThemeClientE","__ZN7WebCore23ScrollbarThemeComposite10splitTrackEPNS_20ScrollbarThemeClientERKNS_7IntRectERS3_S6_S6_","__ZN7WebCore23ScrollbarThemeComposite7hitTestEPNS_20ScrollbarThemeClientERKNS_8IntPointE","__ZN7WebCore23ScrollbarThemeComposite13trackPositionEPNS_20ScrollbarThemeClientE"]

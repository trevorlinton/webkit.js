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
H_BASE = parentModule["_malloc"](344 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 344;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore19FEComponentTransferC1EPNS_6FilterERKNS_25ComponentTransferFunctionES5_S5_S5_;
/* memory initializer */ allocate([34,32,115,108,111,112,101,61,34,0,0,0,0,0,0,0,116,121,112,101,61,34,0,0,125,93,10,0,0,0,0,0,123,97,108,112,104,97,58,32,0,0,0,0,0,0,0,0,123,98,108,117,101,58,32,0,123,103,114,101,101,110,58,32,0,0,0,0,0,0,0,0,125,10,0,0,0,0,0,0,71,65,77,77,65,0,0,0,123,114,101,100,58,32,0,0,76,73,78,69,65,82,0,0,68,73,83,67,82,69,84,69,0,0,0,0,0,0,0,0,84,65,66,76,69,0,0,0,73,68,69,78,84,73,84,89,0,0,0,0,0,0,0,0,85,78,75,78,79,87,78,0,34,0,0,0,0,0,0,0,34,32,111,102,102,115,101,116,61,34,0,0,0,0,0,0,34,32,101,120,112,111,110,101,110,116,61,34,0,0,0,0,34,32,97,109,112,108,105,116,117,100,101,61,34,0,0,0,34,32,105,110,116,101,114,99,101,112,116,61,34,0,0,0,32,10,0,0,0,0,0,0,91,102,101,67,111,109,112,111,110,101,110,116,84,114,97,110,115,102,101,114,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZTVN7WebCore19FEComponentTransferE=(H_BASE+288)|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var _llvm_pow_f64=env._llvm_pow_f64;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore19FEComponentTransfer9getValuesEPhS1_S1_S1_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i7 = i6 | 0;
 i8 = 0;
 while (1) {
  i9 = i8 & 255;
  HEAP8[i5 + i8 | 0] = i9;
  HEAP8[i4 + i8 | 0] = i9;
  HEAP8[i3 + i8 | 0] = i9;
  HEAP8[i2 + i8 | 0] = i9;
  i8 = i8 + 1 | 0;
  if (i8 >>> 0 >= 256 >>> 0) {
   break;
  }
 }
 i8 = i7 | 0;
 HEAP32[i7 >> 2] = HEAP32[i1 + 120 >> 2];
 HEAPF32[i7 + 4 >> 2] = +HEAPF32[i1 + 124 >> 2];
 HEAPF32[i7 + 8 >> 2] = +HEAPF32[i1 + 128 >> 2];
 HEAPF32[i7 + 12 >> 2] = +HEAPF32[i1 + 132 >> 2];
 HEAPF32[i7 + 16 >> 2] = +HEAPF32[i1 + 136 >> 2];
 HEAPF32[i7 + 20 >> 2] = +HEAPF32[i1 + 140 >> 2];
 i9 = HEAP32[i1 + 148 >> 2] | 0;
 i10 = i1 + 152 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i7 + 24 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i7 + 28 | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i7 + 32 >> 2] = i11;
 do {
  if ((i9 | 0) != 0) {
   if (i9 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i11 = __ZN3WTF18fastMallocGoodSizeEj(i9 << 2) | 0;
   HEAP32[i13 >> 2] = i11 >>> 2;
   i14 = __ZN3WTF10fastMallocEj(i11) | 0;
   HEAP32[i12 >> 2] = i14;
   if ((i14 | 0) == 0) {
    break;
   }
   _memcpy(i14 | 0, HEAP32[i1 + 144 >> 2] | 0, HEAP32[i10 >> 2] << 2) | 0;
  }
 } while (0);
 HEAP32[i7 + 36 >> 2] = HEAP32[i1 + 156 >> 2];
 HEAPF32[i7 + 40 >> 2] = +HEAPF32[i1 + 160 >> 2];
 HEAPF32[i7 + 44 >> 2] = +HEAPF32[i1 + 164 >> 2];
 HEAPF32[i7 + 48 >> 2] = +HEAPF32[i1 + 168 >> 2];
 HEAPF32[i7 + 52 >> 2] = +HEAPF32[i1 + 172 >> 2];
 HEAPF32[i7 + 56 >> 2] = +HEAPF32[i1 + 176 >> 2];
 i10 = HEAP32[i1 + 184 >> 2] | 0;
 i12 = i1 + 188 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i9 = i7 + 60 | 0;
 HEAP32[i9 >> 2] = 0;
 i14 = i7 + 64 | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i7 + 68 >> 2] = i13;
 do {
  if ((i10 | 0) != 0) {
   if (i10 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i13 = __ZN3WTF18fastMallocGoodSizeEj(i10 << 2) | 0;
   HEAP32[i14 >> 2] = i13 >>> 2;
   i11 = __ZN3WTF10fastMallocEj(i13) | 0;
   HEAP32[i9 >> 2] = i11;
   if ((i11 | 0) == 0) {
    break;
   }
   _memcpy(i11 | 0, HEAP32[i1 + 180 >> 2] | 0, HEAP32[i12 >> 2] << 2) | 0;
  }
 } while (0);
 HEAP32[i7 + 72 >> 2] = HEAP32[i1 + 192 >> 2];
 HEAPF32[i7 + 76 >> 2] = +HEAPF32[i1 + 196 >> 2];
 HEAPF32[i7 + 80 >> 2] = +HEAPF32[i1 + 200 >> 2];
 HEAPF32[i7 + 84 >> 2] = +HEAPF32[i1 + 204 >> 2];
 HEAPF32[i7 + 88 >> 2] = +HEAPF32[i1 + 208 >> 2];
 HEAPF32[i7 + 92 >> 2] = +HEAPF32[i1 + 212 >> 2];
 i12 = HEAP32[i1 + 220 >> 2] | 0;
 i9 = i1 + 224 | 0;
 i14 = HEAP32[i9 >> 2] | 0;
 i10 = i7 + 96 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i7 + 100 | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i7 + 104 >> 2] = i14;
 do {
  if ((i12 | 0) != 0) {
   if (i12 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i14 = __ZN3WTF18fastMallocGoodSizeEj(i12 << 2) | 0;
   HEAP32[i11 >> 2] = i14 >>> 2;
   i13 = __ZN3WTF10fastMallocEj(i14) | 0;
   HEAP32[i10 >> 2] = i13;
   if ((i13 | 0) == 0) {
    break;
   }
   _memcpy(i13 | 0, HEAP32[i1 + 216 >> 2] | 0, HEAP32[i9 >> 2] << 2) | 0;
  }
 } while (0);
 HEAP32[i7 + 108 >> 2] = HEAP32[i1 + 228 >> 2];
 HEAPF32[i7 + 112 >> 2] = +HEAPF32[i1 + 232 >> 2];
 HEAPF32[i7 + 116 >> 2] = +HEAPF32[i1 + 236 >> 2];
 HEAPF32[i7 + 120 >> 2] = +HEAPF32[i1 + 240 >> 2];
 HEAPF32[i7 + 124 >> 2] = +HEAPF32[i1 + 244 >> 2];
 HEAPF32[i7 + 128 >> 2] = +HEAPF32[i1 + 248 >> 2];
 i9 = HEAP32[i1 + 256 >> 2] | 0;
 i10 = i1 + 260 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i7 + 132 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i7 + 136 | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i7 + 140 >> 2] = i11;
 do {
  if ((i9 | 0) != 0) {
   if (i9 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i11 = __ZN3WTF18fastMallocGoodSizeEj(i9 << 2) | 0;
   HEAP32[i13 >> 2] = i11 >>> 2;
   i14 = __ZN3WTF10fastMallocEj(i11) | 0;
   HEAP32[i12 >> 2] = i14;
   if ((i14 | 0) == 0) {
    break;
   }
   _memcpy(i14 | 0, HEAP32[i1 + 252 >> 2] | 0, HEAP32[i10 >> 2] << 2) | 0;
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[H_BASE + 264 + (HEAP32[i7 >> 2] << 2) >> 2] & 15](i2, i8);
 i8 = i7 + 36 | 0;
 FUNCTION_TABLE_vii[HEAP32[H_BASE + 264 + (HEAP32[i8 >> 2] << 2) >> 2] & 15](i3, i8);
 i8 = i7 + 72 | 0;
 FUNCTION_TABLE_vii[HEAP32[H_BASE + 264 + (HEAP32[i8 >> 2] << 2) >> 2] & 15](i4, i8);
 i8 = i7 + 108 | 0;
 FUNCTION_TABLE_vii[HEAP32[H_BASE + 264 + (HEAP32[i8 >> 2] << 2) >> 2] & 15](i5, i8);
 i8 = i7 + 140 | 0;
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
 }
 i8 = i7 + 132 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i7 + 136 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = i7 + 104 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 i5 = i7 + 96 | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i7 + 100 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i8);
 }
 i8 = i7 + 68 | 0;
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
 }
 i8 = i7 + 60 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i7 + 64 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = i7 + 32 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 i5 = i7 + 24 | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i7 + 28 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i8);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore19FEComponentTransferC2EPNS_6FilterERKNS_25ComponentTransferFunctionES5_S5_S5_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 296;
 HEAP32[i1 + 120 >> 2] = HEAP32[i3 >> 2];
 HEAPF32[i1 + 124 >> 2] = +HEAPF32[i3 + 4 >> 2];
 HEAPF32[i1 + 128 >> 2] = +HEAPF32[i3 + 8 >> 2];
 HEAPF32[i1 + 132 >> 2] = +HEAPF32[i3 + 12 >> 2];
 HEAPF32[i1 + 136 >> 2] = +HEAPF32[i3 + 16 >> 2];
 HEAPF32[i1 + 140 >> 2] = +HEAPF32[i3 + 20 >> 2];
 i2 = HEAP32[i3 + 28 >> 2] | 0;
 i7 = i3 + 32 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i1 + 144 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i1 + 148 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i1 + 152 >> 2] = i8;
 do {
  if ((i2 | 0) != 0) {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
   HEAP32[i10 >> 2] = i8 >>> 2;
   i11 = __ZN3WTF10fastMallocEj(i8) | 0;
   HEAP32[i9 >> 2] = i11;
   if ((i11 | 0) == 0) {
    break;
   }
   _memcpy(i11 | 0, HEAP32[i3 + 24 >> 2] | 0, HEAP32[i7 >> 2] << 2) | 0;
  }
 } while (0);
 HEAP32[i1 + 156 >> 2] = HEAP32[i4 >> 2];
 HEAPF32[i1 + 160 >> 2] = +HEAPF32[i4 + 4 >> 2];
 HEAPF32[i1 + 164 >> 2] = +HEAPF32[i4 + 8 >> 2];
 HEAPF32[i1 + 168 >> 2] = +HEAPF32[i4 + 12 >> 2];
 HEAPF32[i1 + 172 >> 2] = +HEAPF32[i4 + 16 >> 2];
 HEAPF32[i1 + 176 >> 2] = +HEAPF32[i4 + 20 >> 2];
 i7 = HEAP32[i4 + 28 >> 2] | 0;
 i3 = i4 + 32 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 i10 = i1 + 180 | 0;
 HEAP32[i10 >> 2] = 0;
 i2 = i1 + 184 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 188 >> 2] = i9;
 do {
  if ((i7 | 0) != 0) {
   if (i7 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i9 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 2) | 0;
   HEAP32[i2 >> 2] = i9 >>> 2;
   i11 = __ZN3WTF10fastMallocEj(i9) | 0;
   HEAP32[i10 >> 2] = i11;
   if ((i11 | 0) == 0) {
    break;
   }
   _memcpy(i11 | 0, HEAP32[i4 + 24 >> 2] | 0, HEAP32[i3 >> 2] << 2) | 0;
  }
 } while (0);
 HEAP32[i1 + 192 >> 2] = HEAP32[i5 >> 2];
 HEAPF32[i1 + 196 >> 2] = +HEAPF32[i5 + 4 >> 2];
 HEAPF32[i1 + 200 >> 2] = +HEAPF32[i5 + 8 >> 2];
 HEAPF32[i1 + 204 >> 2] = +HEAPF32[i5 + 12 >> 2];
 HEAPF32[i1 + 208 >> 2] = +HEAPF32[i5 + 16 >> 2];
 HEAPF32[i1 + 212 >> 2] = +HEAPF32[i5 + 20 >> 2];
 i3 = HEAP32[i5 + 28 >> 2] | 0;
 i4 = i5 + 32 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 i2 = i1 + 216 | 0;
 HEAP32[i2 >> 2] = 0;
 i7 = i1 + 220 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 224 >> 2] = i10;
 do {
  if ((i3 | 0) != 0) {
   if (i3 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i10 = __ZN3WTF18fastMallocGoodSizeEj(i3 << 2) | 0;
   HEAP32[i7 >> 2] = i10 >>> 2;
   i11 = __ZN3WTF10fastMallocEj(i10) | 0;
   HEAP32[i2 >> 2] = i11;
   if ((i11 | 0) == 0) {
    break;
   }
   _memcpy(i11 | 0, HEAP32[i5 + 24 >> 2] | 0, HEAP32[i4 >> 2] << 2) | 0;
  }
 } while (0);
 HEAP32[i1 + 228 >> 2] = HEAP32[i6 >> 2];
 HEAPF32[i1 + 232 >> 2] = +HEAPF32[i6 + 4 >> 2];
 HEAPF32[i1 + 236 >> 2] = +HEAPF32[i6 + 8 >> 2];
 HEAPF32[i1 + 240 >> 2] = +HEAPF32[i6 + 12 >> 2];
 HEAPF32[i1 + 244 >> 2] = +HEAPF32[i6 + 16 >> 2];
 HEAPF32[i1 + 248 >> 2] = +HEAPF32[i6 + 20 >> 2];
 i4 = HEAP32[i6 + 28 >> 2] | 0;
 i5 = i6 + 32 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 252 | 0;
 HEAP32[i7 >> 2] = 0;
 i3 = i1 + 256 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 260 >> 2] = i2;
 if ((i4 | 0) == 0) {
  return;
 }
 if (i4 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i2 = __ZN3WTF18fastMallocGoodSizeEj(i4 << 2) | 0;
 HEAP32[i3 >> 2] = i2 >>> 2;
 i3 = __ZN3WTF10fastMallocEj(i2) | 0;
 HEAP32[i7 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 _memcpy(i3 | 0, HEAP32[i6 + 24 >> 2] | 0, HEAP32[i5 >> 2] << 2) | 0;
 return;
}
function __ZN7WebCore19FEComponentTransferC1EPNS_6FilterERKNS_25ComponentTransferFunctionES5_S5_S5_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 296;
 HEAP32[i1 + 120 >> 2] = HEAP32[i3 >> 2];
 HEAPF32[i1 + 124 >> 2] = +HEAPF32[i3 + 4 >> 2];
 HEAPF32[i1 + 128 >> 2] = +HEAPF32[i3 + 8 >> 2];
 HEAPF32[i1 + 132 >> 2] = +HEAPF32[i3 + 12 >> 2];
 HEAPF32[i1 + 136 >> 2] = +HEAPF32[i3 + 16 >> 2];
 HEAPF32[i1 + 140 >> 2] = +HEAPF32[i3 + 20 >> 2];
 i2 = HEAP32[i3 + 28 >> 2] | 0;
 i7 = i3 + 32 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i1 + 144 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i1 + 148 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i1 + 152 >> 2] = i8;
 do {
  if ((i2 | 0) != 0) {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
   HEAP32[i10 >> 2] = i8 >>> 2;
   i11 = __ZN3WTF10fastMallocEj(i8) | 0;
   HEAP32[i9 >> 2] = i11;
   if ((i11 | 0) == 0) {
    break;
   }
   _memcpy(i11 | 0, HEAP32[i3 + 24 >> 2] | 0, HEAP32[i7 >> 2] << 2) | 0;
  }
 } while (0);
 HEAP32[i1 + 156 >> 2] = HEAP32[i4 >> 2];
 HEAPF32[i1 + 160 >> 2] = +HEAPF32[i4 + 4 >> 2];
 HEAPF32[i1 + 164 >> 2] = +HEAPF32[i4 + 8 >> 2];
 HEAPF32[i1 + 168 >> 2] = +HEAPF32[i4 + 12 >> 2];
 HEAPF32[i1 + 172 >> 2] = +HEAPF32[i4 + 16 >> 2];
 HEAPF32[i1 + 176 >> 2] = +HEAPF32[i4 + 20 >> 2];
 i7 = HEAP32[i4 + 28 >> 2] | 0;
 i3 = i4 + 32 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 i10 = i1 + 180 | 0;
 HEAP32[i10 >> 2] = 0;
 i2 = i1 + 184 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 188 >> 2] = i9;
 do {
  if ((i7 | 0) != 0) {
   if (i7 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i9 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 2) | 0;
   HEAP32[i2 >> 2] = i9 >>> 2;
   i11 = __ZN3WTF10fastMallocEj(i9) | 0;
   HEAP32[i10 >> 2] = i11;
   if ((i11 | 0) == 0) {
    break;
   }
   _memcpy(i11 | 0, HEAP32[i4 + 24 >> 2] | 0, HEAP32[i3 >> 2] << 2) | 0;
  }
 } while (0);
 HEAP32[i1 + 192 >> 2] = HEAP32[i5 >> 2];
 HEAPF32[i1 + 196 >> 2] = +HEAPF32[i5 + 4 >> 2];
 HEAPF32[i1 + 200 >> 2] = +HEAPF32[i5 + 8 >> 2];
 HEAPF32[i1 + 204 >> 2] = +HEAPF32[i5 + 12 >> 2];
 HEAPF32[i1 + 208 >> 2] = +HEAPF32[i5 + 16 >> 2];
 HEAPF32[i1 + 212 >> 2] = +HEAPF32[i5 + 20 >> 2];
 i3 = HEAP32[i5 + 28 >> 2] | 0;
 i4 = i5 + 32 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 i2 = i1 + 216 | 0;
 HEAP32[i2 >> 2] = 0;
 i7 = i1 + 220 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 224 >> 2] = i10;
 do {
  if ((i3 | 0) != 0) {
   if (i3 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i10 = __ZN3WTF18fastMallocGoodSizeEj(i3 << 2) | 0;
   HEAP32[i7 >> 2] = i10 >>> 2;
   i11 = __ZN3WTF10fastMallocEj(i10) | 0;
   HEAP32[i2 >> 2] = i11;
   if ((i11 | 0) == 0) {
    break;
   }
   _memcpy(i11 | 0, HEAP32[i5 + 24 >> 2] | 0, HEAP32[i4 >> 2] << 2) | 0;
  }
 } while (0);
 HEAP32[i1 + 228 >> 2] = HEAP32[i6 >> 2];
 HEAPF32[i1 + 232 >> 2] = +HEAPF32[i6 + 4 >> 2];
 HEAPF32[i1 + 236 >> 2] = +HEAPF32[i6 + 8 >> 2];
 HEAPF32[i1 + 240 >> 2] = +HEAPF32[i6 + 12 >> 2];
 HEAPF32[i1 + 244 >> 2] = +HEAPF32[i6 + 16 >> 2];
 HEAPF32[i1 + 248 >> 2] = +HEAPF32[i6 + 20 >> 2];
 i4 = HEAP32[i6 + 28 >> 2] | 0;
 i5 = i6 + 32 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 252 | 0;
 HEAP32[i7 >> 2] = 0;
 i3 = i1 + 256 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 260 >> 2] = i2;
 if ((i4 | 0) == 0) {
  return;
 }
 if (i4 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i2 = __ZN3WTF18fastMallocGoodSizeEj(i4 << 2) | 0;
 HEAP32[i3 >> 2] = i2 >>> 2;
 i3 = __ZN3WTF10fastMallocEj(i2) | 0;
 HEAP32[i7 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 _memcpy(i3 | 0, HEAP32[i6 + 24 >> 2] | 0, HEAP32[i5 >> 2] << 2) | 0;
 return;
}
function __ZN7WebCore19FEComponentTransfer21platformApplySoftwareEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 1056 | 0;
 i3 = i2 | 0;
 i4 = i2 + 256 | 0;
 i5 = i2 + 512 | 0;
 i6 = i2 + 768 | 0;
 i7 = i2 + 1024 | 0;
 i8 = i2 + 1040 | 0;
 i9 = i1 | 0;
 i10 = __ZNK7WebCore12FilterEffect11inputEffectEj(i9, 0) | 0;
 i11 = __ZN7WebCore12FilterEffect29createUnmultipliedImageResultEv(i9) | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore19FEComponentTransfer9getValuesEPhS1_S1_S1_(i1, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
 i1 = i8;
 i12 = i10 + 36 | 0;
 HEAP32[i1 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
 HEAP32[i1 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
 __ZNK7WebCore12FilterEffect31requestedRegionOfInputImageDataERKNS_7IntRectE(i7, i9, i8);
 __ZN7WebCore12FilterEffect21copyUnmultipliedImageEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEERKNS_7IntRectE(i10, i11, i7);
 i7 = HEAP32[i11 + 16 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i7 + 12 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = HEAP32[i11 + 20 >> 2] | 0;
 i10 = HEAP32[i11 + 8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 } else {
  i13 = 0;
 }
 while (1) {
  i11 = i10 + i13 | 0;
  HEAP8[i11] = HEAP8[i3 + (HEAPU8[i11] | 0) | 0] | 0;
  i11 = i10 + (i13 | 1) | 0;
  HEAP8[i11] = HEAP8[i4 + (HEAPU8[i11] | 0) | 0] | 0;
  i11 = i10 + (i13 | 2) | 0;
  HEAP8[i11] = HEAP8[i5 + (HEAPU8[i11] | 0) | 0] | 0;
  i11 = i10 + (i13 | 3) | 0;
  HEAP8[i11] = HEAP8[i6 + (HEAPU8[i11] | 0) | 0] | 0;
  i13 = i13 + 4 | 0;
  if (i13 >>> 0 >= i7 >>> 0) {
   break;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEEaSERKS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
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
  } else {
   i7 = i1 + 4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if (i6 >>> 0 <= i8 >>> 0) {
    break;
   }
   do {
    if ((i8 | 0) == 0) {
     i9 = 0;
    } else {
     if ((i4 | 0) != 0) {
      HEAP32[i3 >> 2] = 0;
     }
     i10 = i1 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     if ((i11 | 0) == 0) {
      i9 = i8;
      break;
     }
     HEAP32[i10 >> 2] = 0;
     HEAP32[i7 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i11);
     i9 = HEAP32[i7 >> 2] | 0;
    }
   } while (0);
   i8 = HEAP32[i5 >> 2] | 0;
   if (i9 >>> 0 >= i8 >>> 0) {
    break;
   }
   i11 = i1 | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   if (i8 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
    return 0;
   }
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = __ZN3WTF18fastMallocGoodSizeEj(i8 << 2) | 0;
   HEAP32[i7 >> 2] = i13 >>> 2;
   i8 = __ZN3WTF10fastMallocEj(i13) | 0;
   HEAP32[i11 >> 2] = i8;
   i13 = i10;
   _memcpy(i8 | 0, i13 | 0, i12 << 2) | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   if ((HEAP32[i11 >> 2] | 0) == (i10 | 0)) {
    HEAP32[i11 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i13);
  }
 } while (0);
 i9 = i2 | 0;
 i2 = i1 | 0;
 _memmove(HEAP32[i2 >> 2] | 0, HEAP32[i9 >> 2] | 0, HEAP32[i3 >> 2] << 2 | 0) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 _memcpy((HEAP32[i2 >> 2] | 0) + (i4 << 2) | 0, (HEAP32[i9 >> 2] | 0) + (i4 << 2) | 0, (HEAP32[i5 >> 2] | 0) - i4 << 2) | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 return i1 | 0;
}
function __ZNK7WebCore19FEComponentTransfer22externalRepresentationERNS_10TextStreamEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3);
 __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 240 | 0) | 0;
 i4 = i1 | 0;
 __ZNK7WebCore12FilterEffect22externalRepresentationERNS_10TextStreamEi(i4, i2, 0) | 0;
 __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 232 | 0) | 0;
 i5 = i3 + 2 | 0;
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i5);
 __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCorelsERNS_10TextStreamERKNS_25ComponentTransferFunctionE(__ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 96 | 0) | 0, i1 + 120 | 0) | 0, H_BASE + 80 | 0) | 0;
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i5);
 __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCorelsERNS_10TextStreamERKNS_25ComponentTransferFunctionE(__ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 64 | 0) | 0, i1 + 156 | 0) | 0, H_BASE + 80 | 0) | 0;
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i5);
 __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCorelsERNS_10TextStreamERKNS_25ComponentTransferFunctionE(__ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 56 | 0) | 0, i1 + 192 | 0) | 0, H_BASE + 80 | 0) | 0;
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i5);
 __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCorelsERNS_10TextStreamERKNS_25ComponentTransferFunctionE(__ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 40 | 0) | 0, i1 + 228 | 0) | 0, H_BASE + 32 | 0) | 0;
 i1 = __ZNK7WebCore12FilterEffect11inputEffectEj(i4, 0) | 0;
 FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 3](i1, i2, i3 + 1 | 0) | 0;
 return i2 | 0;
}
function __ZN7WebCorelsERNS_10TextStreamERKNS_25ComponentTransferFunctionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 24 | 0) | 0;
 switch (HEAP32[i2 >> 2] | 0) {
 case 1:
  {
   __ZN7WebCore10TextStreamlsEPKc(i3, H_BASE + 136 | 0) | 0;
   break;
  }
 case 0:
  {
   __ZN7WebCore10TextStreamlsEPKc(i3, H_BASE + 152 | 0) | 0;
   break;
  }
 case 3:
  {
   __ZN7WebCore10TextStreamlsEPKc(i3, H_BASE + 112 | 0) | 0;
   break;
  }
 case 4:
  {
   __ZN7WebCore10TextStreamlsEPKc(i3, H_BASE + 104 | 0) | 0;
   break;
  }
 case 5:
  {
   __ZN7WebCore10TextStreamlsEPKc(i3, H_BASE + 88 | 0) | 0;
   break;
  }
 case 2:
  {
   __ZN7WebCore10TextStreamlsEPKc(i3, H_BASE + 128 | 0) | 0;
   break;
  }
 default:
  {}
 }
 i4 = __ZN7WebCore10TextStreamlsEPKc(i3, H_BASE + 8 | 0) | 0;
 i3 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i4, +HEAPF32[i2 + 4 >> 2]) | 0, H_BASE + 216 | 0) | 0;
 i4 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i3, +HEAPF32[i2 + 8 >> 2]) | 0, H_BASE + 200 | 0) | 0;
 i3 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i4, +HEAPF32[i2 + 12 >> 2]) | 0, H_BASE + 184 | 0) | 0;
 i4 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i3, +HEAPF32[i2 + 16 >> 2]) | 0, H_BASE + 168 | 0) | 0;
 __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i4, +HEAPF32[i2 + 20 >> 2]) | 0, H_BASE + 160 | 0) | 0;
 return i1 | 0;
}
function __ZN7WebCore19FEComponentTransferD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 296;
 i2 = i1 + 260 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 252 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 256 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 224 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 216 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 220 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 188 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 180 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 184 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 152 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 144 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = i1 | 0;
  __ZN7WebCore12FilterEffectD2Ev(i4);
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 148 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i4 = i1 | 0;
 __ZN7WebCore12FilterEffectD2Ev(i4);
 return;
}
function __ZN7WebCoreL5tableEPhRKNS_25ComponentTransferFunctionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0, i7 = 0, i8 = 0, d9 = +0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, i14 = 0, d15 = +0;
 i3 = i2 + 32 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i4 - 1 | 0;
 d6 = +(i5 >>> 0 >>> 0);
 i7 = i2 + 24 | 0;
 i2 = 0;
 i8 = i4;
 while (1) {
  d9 = d6 * (+(i2 >>> 0 >>> 0) / +255);
  i4 = ~~d9;
  if (i8 >>> 0 <= i4 >>> 0) {
   i10 = 4;
   break;
  }
  i11 = HEAP32[i7 >> 2] | 0;
  d12 = +HEAPF32[i11 + (i4 << 2) >> 2];
  i13 = i4 + 1 | 0;
  i14 = i5 >>> 0 < i13 >>> 0 ? i5 : i13;
  if (i8 >>> 0 <= i14 >>> 0) {
   i10 = 6;
   break;
  }
  d15 = (d12 + (d9 - +(i4 >>> 0 >>> 0)) * (+HEAPF32[i11 + (i14 << 2) >> 2] - d12)) * +255;
  d12 = d15 < +255 ? d15 : +255;
  HEAP8[i1 + i2 | 0] = d12 > +0 ? ~~d12 : 0;
  i14 = i2 + 1 | 0;
  if (i14 >>> 0 >= 256 >>> 0) {
   i10 = 11;
   break;
  }
  i2 = i14;
  i8 = HEAP32[i3 >> 2] | 0;
 }
 if ((i10 | 0) == 11) {
  return;
 } else if ((i10 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i10 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZNK7WebCore19FEComponentTransfer13greenFunctionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 156 >> 2];
 HEAPF32[i1 + 4 >> 2] = +HEAPF32[i2 + 160 >> 2];
 HEAPF32[i1 + 8 >> 2] = +HEAPF32[i2 + 164 >> 2];
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[i2 + 168 >> 2];
 HEAPF32[i1 + 16 >> 2] = +HEAPF32[i2 + 172 >> 2];
 HEAPF32[i1 + 20 >> 2] = +HEAPF32[i2 + 176 >> 2];
 i3 = HEAP32[i2 + 184 >> 2] | 0;
 i4 = i2 + 188 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 24 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 28 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = i5;
 if ((i3 | 0) == 0) {
  return;
 }
 if (i3 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i5 = __ZN3WTF18fastMallocGoodSizeEj(i3 << 2) | 0;
 HEAP32[i7 >> 2] = i5 >>> 2;
 i7 = __ZN3WTF10fastMallocEj(i5) | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) == 0) {
  return;
 }
 _memcpy(i7 | 0, HEAP32[i2 + 180 >> 2] | 0, HEAP32[i4 >> 2] << 2) | 0;
 return;
}
function __ZNK7WebCore19FEComponentTransfer13alphaFunctionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 228 >> 2];
 HEAPF32[i1 + 4 >> 2] = +HEAPF32[i2 + 232 >> 2];
 HEAPF32[i1 + 8 >> 2] = +HEAPF32[i2 + 236 >> 2];
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[i2 + 240 >> 2];
 HEAPF32[i1 + 16 >> 2] = +HEAPF32[i2 + 244 >> 2];
 HEAPF32[i1 + 20 >> 2] = +HEAPF32[i2 + 248 >> 2];
 i3 = HEAP32[i2 + 256 >> 2] | 0;
 i4 = i2 + 260 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 24 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 28 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = i5;
 if ((i3 | 0) == 0) {
  return;
 }
 if (i3 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i5 = __ZN3WTF18fastMallocGoodSizeEj(i3 << 2) | 0;
 HEAP32[i7 >> 2] = i5 >>> 2;
 i7 = __ZN3WTF10fastMallocEj(i5) | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) == 0) {
  return;
 }
 _memcpy(i7 | 0, HEAP32[i2 + 252 >> 2] | 0, HEAP32[i4 >> 2] << 2) | 0;
 return;
}
function __ZNK7WebCore19FEComponentTransfer12blueFunctionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 192 >> 2];
 HEAPF32[i1 + 4 >> 2] = +HEAPF32[i2 + 196 >> 2];
 HEAPF32[i1 + 8 >> 2] = +HEAPF32[i2 + 200 >> 2];
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[i2 + 204 >> 2];
 HEAPF32[i1 + 16 >> 2] = +HEAPF32[i2 + 208 >> 2];
 HEAPF32[i1 + 20 >> 2] = +HEAPF32[i2 + 212 >> 2];
 i3 = HEAP32[i2 + 220 >> 2] | 0;
 i4 = i2 + 224 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 24 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 28 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = i5;
 if ((i3 | 0) == 0) {
  return;
 }
 if (i3 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i5 = __ZN3WTF18fastMallocGoodSizeEj(i3 << 2) | 0;
 HEAP32[i7 >> 2] = i5 >>> 2;
 i7 = __ZN3WTF10fastMallocEj(i5) | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) == 0) {
  return;
 }
 _memcpy(i7 | 0, HEAP32[i2 + 216 >> 2] | 0, HEAP32[i4 >> 2] << 2) | 0;
 return;
}
function __ZNK7WebCore19FEComponentTransfer11redFunctionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 120 >> 2];
 HEAPF32[i1 + 4 >> 2] = +HEAPF32[i2 + 124 >> 2];
 HEAPF32[i1 + 8 >> 2] = +HEAPF32[i2 + 128 >> 2];
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[i2 + 132 >> 2];
 HEAPF32[i1 + 16 >> 2] = +HEAPF32[i2 + 136 >> 2];
 HEAPF32[i1 + 20 >> 2] = +HEAPF32[i2 + 140 >> 2];
 i3 = HEAP32[i2 + 148 >> 2] | 0;
 i4 = i2 + 152 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 24 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 28 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = i5;
 if ((i3 | 0) == 0) {
  return;
 }
 if (i3 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i5 = __ZN3WTF18fastMallocGoodSizeEj(i3 << 2) | 0;
 HEAP32[i7 >> 2] = i5 >>> 2;
 i7 = __ZN3WTF10fastMallocEj(i5) | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) == 0) {
  return;
 }
 _memcpy(i7 | 0, HEAP32[i2 + 144 >> 2] | 0, HEAP32[i4 >> 2] << 2) | 0;
 return;
}
function __ZN7WebCoreL8discreteEPhRKNS_25ComponentTransferFunctionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0;
 i3 = i2 + 32 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i4 - 1 | 0;
 i6 = i2 + 24 | 0;
 i2 = 0;
 i7 = i4;
 while (1) {
  i8 = ~~(+((Math_imul(i2, i4) | 0) >>> 0 >>> 0) / +255);
  i9 = i5 >>> 0 < i8 >>> 0 ? i5 : i8;
  if (i7 >>> 0 <= i9 >>> 0) {
   i10 = 4;
   break;
  }
  d11 = +HEAPF32[(HEAP32[i6 >> 2] | 0) + (i9 << 2) >> 2] * +255;
  d12 = d11 < +255 ? d11 : +255;
  HEAP8[i1 + i2 | 0] = d12 > +0 ? ~~d12 : 0;
  i9 = i2 + 1 | 0;
  if (i9 >>> 0 >= 256 >>> 0) {
   i10 = 9;
   break;
  }
  i2 = i9;
  i7 = HEAP32[i3 >> 2] | 0;
 }
 if ((i10 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i10 | 0) == 9) {
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 264 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 4;
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
function __ZN7WebCore19FEComponentTransfer16setGreenFunctionERKNS_25ComponentTransferFunctionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 156 >> 2] = HEAP32[i2 >> 2];
 HEAPF32[i1 + 160 >> 2] = +HEAPF32[i2 + 4 >> 2];
 HEAPF32[i1 + 164 >> 2] = +HEAPF32[i2 + 8 >> 2];
 HEAPF32[i1 + 168 >> 2] = +HEAPF32[i2 + 12 >> 2];
 HEAPF32[i1 + 172 >> 2] = +HEAPF32[i2 + 16 >> 2];
 HEAPF32[i1 + 176 >> 2] = +HEAPF32[i2 + 20 >> 2];
 __ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEEaSERKS2_(i1 + 180 | 0, i2 + 24 | 0) | 0;
 return;
}
function __ZN7WebCore19FEComponentTransfer16setAlphaFunctionERKNS_25ComponentTransferFunctionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 228 >> 2] = HEAP32[i2 >> 2];
 HEAPF32[i1 + 232 >> 2] = +HEAPF32[i2 + 4 >> 2];
 HEAPF32[i1 + 236 >> 2] = +HEAPF32[i2 + 8 >> 2];
 HEAPF32[i1 + 240 >> 2] = +HEAPF32[i2 + 12 >> 2];
 HEAPF32[i1 + 244 >> 2] = +HEAPF32[i2 + 16 >> 2];
 HEAPF32[i1 + 248 >> 2] = +HEAPF32[i2 + 20 >> 2];
 __ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEEaSERKS2_(i1 + 252 | 0, i2 + 24 | 0) | 0;
 return;
}
function __ZN7WebCore19FEComponentTransfer15setBlueFunctionERKNS_25ComponentTransferFunctionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 192 >> 2] = HEAP32[i2 >> 2];
 HEAPF32[i1 + 196 >> 2] = +HEAPF32[i2 + 4 >> 2];
 HEAPF32[i1 + 200 >> 2] = +HEAPF32[i2 + 8 >> 2];
 HEAPF32[i1 + 204 >> 2] = +HEAPF32[i2 + 12 >> 2];
 HEAPF32[i1 + 208 >> 2] = +HEAPF32[i2 + 16 >> 2];
 HEAPF32[i1 + 212 >> 2] = +HEAPF32[i2 + 20 >> 2];
 __ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEEaSERKS2_(i1 + 216 | 0, i2 + 24 | 0) | 0;
 return;
}
function __ZN7WebCore19FEComponentTransfer14setRedFunctionERKNS_25ComponentTransferFunctionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 120 >> 2] = HEAP32[i2 >> 2];
 HEAPF32[i1 + 124 >> 2] = +HEAPF32[i2 + 4 >> 2];
 HEAPF32[i1 + 128 >> 2] = +HEAPF32[i2 + 8 >> 2];
 HEAPF32[i1 + 132 >> 2] = +HEAPF32[i2 + 12 >> 2];
 HEAPF32[i1 + 136 >> 2] = +HEAPF32[i2 + 16 >> 2];
 HEAPF32[i1 + 140 >> 2] = +HEAPF32[i2 + 20 >> 2];
 __ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEEaSERKS2_(i1 + 144 | 0, i2 + 24 | 0) | 0;
 return;
}
function __ZN7WebCoreL5gammaEPhRKNS_25ComponentTransferFunctionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0, d7 = +0;
 i3 = i2 + 16 | 0;
 i4 = i2 + 12 | 0;
 i5 = i2 + 20 | 0;
 i2 = 0;
 while (1) {
  d6 = +HEAPF32[i4 >> 2] * +Math_pow(+(+(i2 >>> 0 >>> 0) / +255), +(+HEAPF32[i3 >> 2]));
  d7 = (d6 + +HEAPF32[i5 >> 2]) * +255;
  d6 = d7 < +255 ? d7 : +255;
  HEAP8[i1 + i2 | 0] = d6 > +0 ? ~~d6 : 0;
  i2 = i2 + 1 | 0;
  if (i2 >>> 0 >= 256 >>> 0) {
   break;
  }
 }
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
function __ZN7WebCoreL6linearEPhRKNS_25ComponentTransferFunctionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, d5 = +0, d6 = +0;
 i3 = i2 + 4 | 0;
 i4 = i2 + 8 | 0;
 i2 = 0;
 while (1) {
  d5 = +(i2 >>> 0 >>> 0) * +HEAPF32[i3 >> 2] + +HEAPF32[i4 >> 2] * +255;
  d6 = d5 < +255 ? d5 : +255;
  HEAP8[i1 + i2 | 0] = d6 > +0 ? ~~d6 : 0;
  i2 = i2 + 1 | 0;
  if (i2 >>> 0 >= 256 >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore19FEComponentTransfer6createEPNS_6FilterERKNS_25ComponentTransferFunctionES5_S5_S5_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0;
 i7 = __ZN3WTF10fastMallocEj(264) | 0;
 __ZN7WebCore19FEComponentTransferC2EPNS_6FilterERKNS_25ComponentTransferFunctionES5_S5_S5_(i7, i2, i3, i4, i5, i6);
 HEAP32[i1 >> 2] = i7;
 return;
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
function __ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12FilterEffect25transformResultColorSpaceENS_10ColorSpaceE(i2, HEAP32[i1 + 112 >> 2] | 0);
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
 FUNCTION_TABLE_viiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vi___ZN7WebCore12FilterEffect26determineAbsolutePaintRectEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12FilterEffect26determineAbsolutePaintRectEv(i1 | 0);
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 112 >> 2] = i2;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 116 >> 2] = i2;
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
function __ZN7WebCore19FEComponentTransferD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19FEComponentTransferD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function b6(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(6);
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
function __ZN7WebCore19FEComponentTransferD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19FEComponentTransferD2Ev(i1);
 return;
}
function __ZN7WebCoreL8identityEPhRKNS_25ComponentTransferFunctionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
 return 0;
}
function __ZNK7WebCore12FilterEffect16filterEffectTypeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function __ZN7WebCore19FEComponentTransfer4dumpEv(i1) {
 i1 = i1 | 0;
 return;
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
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
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0,__ZNK7WebCore12FilterEffect16filterEffectTypeEv,b0,__ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore19FEComponentTransferD1Ev,b1,__ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv,b1,__ZN7WebCore19FEComponentTransferD0Ev,b1,vi___ZN7WebCore12FilterEffect26determineAbsolutePaintRectEv__wrapper,b1,__ZN7WebCore19FEComponentTransfer21platformApplySoftwareEv,b1,__ZN7WebCore19FEComponentTransfer4dumpEv,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCoreL6linearEPhRKNS_25ComponentTransferFunctionE,b2,__ZN7WebCoreL8identityEPhRKNS_25ComponentTransferFunctionE,b2,__ZN7WebCoreL5gammaEPhRKNS_25ComponentTransferFunctionE,b2,__ZN7WebCoreL5tableEPhRKNS_25ComponentTransferFunctionE,b2,__ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE,b2,__ZN7WebCoreL8discreteEPhRKNS_25ComponentTransferFunctionE,b2,__ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE,b2];
  var FUNCTION_TABLE_iiii = [b3,b3,__ZNK7WebCore19FEComponentTransfer22externalRepresentationERNS_10TextStreamEi,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_viiiiii = [b6,b6,__ZN7WebCore19FEComponentTransferC2EPNS_6FilterERKNS_25ComponentTransferFunctionES5_S5_S5_,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "_malloc": _malloc, "_llvm_pow_f64": _llvm_pow_f64, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore19FEComponentTransferD0Ev","__ZN7WebCoreL5tableEPhRKNS_25ComponentTransferFunctionE","_memset","__ZNK7WebCore19FEComponentTransfer22externalRepresentationERNS_10TextStreamEi","__ZNK7WebCore19FEComponentTransfer13alphaFunctionEv","__ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv","__ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv","__ZN7WebCore19FEComponentTransfer15setBlueFunctionERKNS_25ComponentTransferFunctionE","__ZN7WebCoreL8identityEPhRKNS_25ComponentTransferFunctionE","__ZN7WebCoreL6linearEPhRKNS_25ComponentTransferFunctionE","__ZNK7WebCore19FEComponentTransfer11redFunctionEv","_memcpy","__ZN7WebCore19FEComponentTransferD2Ev","__ZN7WebCoreL8discreteEPhRKNS_25ComponentTransferFunctionE","__ZN7WebCore19FEComponentTransfer6createEPNS_6FilterERKNS_25ComponentTransferFunctionES5_S5_S5_","__ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEEaSERKS2_","__ZN7WebCore19FEComponentTransfer14setRedFunctionERKNS_25ComponentTransferFunctionE","__ZN7WebCore19FEComponentTransfer16setGreenFunctionERKNS_25ComponentTransferFunctionE","__ZN7WebCore19FEComponentTransferC2EPNS_6FilterERKNS_25ComponentTransferFunctionES5_S5_S5_","__ZN7WebCorelsERNS_10TextStreamERKNS_25ComponentTransferFunctionE","__ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE","__ZN7WebCore19FEComponentTransfer9getValuesEPhS1_S1_S1_","__ZN7WebCore19FEComponentTransferD1Ev","__ZNK7WebCore12FilterEffect16filterEffectTypeEv","__ZN7WebCore19FEComponentTransfer21platformApplySoftwareEv","_memmove","__ZN7WebCoreL5gammaEPhRKNS_25ComponentTransferFunctionE","__ZNK7WebCore19FEComponentTransfer13greenFunctionEv","__ZNK7WebCore19FEComponentTransfer12blueFunctionEv","__ZN7WebCore19FEComponentTransfer4dumpEv","__ZN7WebCore19FEComponentTransfer16setAlphaFunctionERKNS_25ComponentTransferFunctionE","__ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE"]

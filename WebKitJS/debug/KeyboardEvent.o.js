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
H_BASE = parentModule["_malloc"](144 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 144;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore17KeyboardEventInitC1Ev;
var __ZN7WebCore13KeyboardEventC1Ev;
var __ZN7WebCore13KeyboardEventC1ERKNS_21PlatformKeyboardEventEPNS_9DOMWindowE;
var __ZN7WebCore13KeyboardEventC1ERKN3WTF12AtomicStringERKNS_17KeyboardEventInitE;
var __ZN7WebCore13KeyboardEventD1Ev;
/* memory initializer */ allocate([77,101,116,97,0,0,0,0,65,108,116,0,0,0,0,0,83,104,105,102,116,0,0,0,67,111,110,116,114,111,108,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZTVN7WebCore13KeyboardEventE=(H_BASE+40)|0;
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
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore13KeyboardEventC2ERKNS_21PlatformKeyboardEventEPNS_9DOMWindowE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 2) {
  i8 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 204 | 0;
 } else if ((i7 | 0) == 3) {
  i8 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 196 | 0;
 } else if ((i7 | 0) == 4) {
  i8 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 200 | 0;
 } else {
  i8 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 196 | 0;
 }
 d9 = +HEAPF64[i2 + 8 >> 3];
 if ((i3 | 0) != 0) {
  i7 = i3 + 36 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 i10 = i5 | 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore7UIEventC2ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEi(i1, i8, 1, 1, d9, i5, 0);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 36 | 0;
   i8 = i10 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i8 >> 2] = i3;
    break;
   }
   i3 = i10 - 36 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] & 15](i3);
  }
 } while (0);
 i5 = i1 + 60 | 0;
 HEAP8[i5] = (i7 & 255) << 1 & 2 | i7 >>> 1 & 1 | i7 >>> 3 << 2 & 4 | i7 >>> 2 << 3 & 8 | HEAP8[i5] & -16;
 HEAP32[i1 >> 2] = H_BASE + 48;
 i5 = __ZN3WTF10fastMallocEj(48) | 0;
 i7 = i2;
 HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 i7 = HEAP32[i2 + 16 >> 2] | 0;
 HEAP32[i5 + 16 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i3 = i7 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = HEAP32[i2 + 20 >> 2] | 0;
 HEAP32[i5 + 20 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i7 = i3 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i2 + 24 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i5 + 24 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i10 = i3 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = i2 + 28 | 0;
 HEAP32[i5 + 28 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i5 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i5 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP8[i5 + 40 | 0] = HEAP8[i2 + 40 | 0] & 1;
 i3 = i2 + 41 | 0;
 HEAP8[i5 + 41 | 0] = HEAP8[i3] & 1;
 HEAP8[i5 + 42 | 0] = HEAP8[i2 + 42 | 0] & 1;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 + 64 >> 2] = i5;
 __ZN3WTF10PassOwnPtrIN7WebCore21PlatformKeyboardEventEED2Ev(i6);
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i1 + 68 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i1 + 72 | 0;
 if ((HEAP8[i3] & 1) != 0) {
  i11 = 3;
  HEAP32[i7 >> 2] = i11;
  i12 = i1 + 76 | 0;
  i13 = HEAP8[i12] | 0;
  i14 = i13 & -2;
  HEAP8[i12] = i14;
  STACKTOP = i4;
  return;
 }
 switch (HEAP32[i10 >> 2] | 0) {
 case 163:
 case 161:
 case 165:
 case 92:
  {
   i11 = 2;
   HEAP32[i7 >> 2] = i11;
   i12 = i1 + 76 | 0;
   i13 = HEAP8[i12] | 0;
   i14 = i13 & -2;
   HEAP8[i12] = i14;
   STACKTOP = i4;
   return;
  }
 case 162:
 case 160:
 case 164:
 case 91:
  {
   i11 = 1;
   HEAP32[i7 >> 2] = i11;
   i12 = i1 + 76 | 0;
   i13 = HEAP8[i12] | 0;
   i14 = i13 & -2;
   HEAP8[i12] = i14;
   STACKTOP = i4;
   return;
  }
 default:
  {
   i11 = 0;
   HEAP32[i7 >> 2] = i11;
   i12 = i1 + 76 | 0;
   i13 = HEAP8[i12] | 0;
   i14 = i13 & -2;
   HEAP8[i12] = i14;
   STACKTOP = i4;
   return;
  }
 }
}
function __ZN7WebCore13KeyboardEventC1ERKNS_21PlatformKeyboardEventEPNS_9DOMWindowE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 2) {
  i8 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 204 | 0;
 } else if ((i7 | 0) == 3) {
  i8 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 196 | 0;
 } else if ((i7 | 0) == 4) {
  i8 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 200 | 0;
 } else {
  i8 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 196 | 0;
 }
 d9 = +HEAPF64[i2 + 8 >> 3];
 if ((i3 | 0) != 0) {
  i7 = i3 + 36 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 i10 = i5 | 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore7UIEventC2ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEi(i1, i8, 1, 1, d9, i5, 0);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 36 | 0;
   i8 = i10 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i8 >> 2] = i3;
    break;
   }
   i3 = i10 - 36 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] & 15](i3);
  }
 } while (0);
 i5 = i1 + 60 | 0;
 HEAP8[i5] = (i7 & 255) << 1 & 2 | i7 >>> 1 & 1 | i7 >>> 3 << 2 & 4 | i7 >>> 2 << 3 & 8 | HEAP8[i5] & -16;
 HEAP32[i1 >> 2] = H_BASE + 48;
 i5 = __ZN3WTF10fastMallocEj(48) | 0;
 i7 = i2;
 HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 i7 = HEAP32[i2 + 16 >> 2] | 0;
 HEAP32[i5 + 16 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i3 = i7 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = HEAP32[i2 + 20 >> 2] | 0;
 HEAP32[i5 + 20 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i7 = i3 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i2 + 24 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i5 + 24 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i10 = i3 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = i2 + 28 | 0;
 HEAP32[i5 + 28 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i5 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i5 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP8[i5 + 40 | 0] = HEAP8[i2 + 40 | 0] & 1;
 i3 = i2 + 41 | 0;
 HEAP8[i5 + 41 | 0] = HEAP8[i3] & 1;
 HEAP8[i5 + 42 | 0] = HEAP8[i2 + 42 | 0] & 1;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 + 64 >> 2] = i5;
 __ZN3WTF10PassOwnPtrIN7WebCore21PlatformKeyboardEventEED2Ev(i6);
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i1 + 68 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i1 + 72 | 0;
 if ((HEAP8[i3] & 1) != 0) {
  i11 = 3;
  HEAP32[i7 >> 2] = i11;
  i12 = i1 + 76 | 0;
  i13 = HEAP8[i12] | 0;
  i14 = i13 & -2;
  HEAP8[i12] = i14;
  STACKTOP = i4;
  return;
 }
 switch (HEAP32[i10 >> 2] | 0) {
 case 163:
 case 161:
 case 165:
 case 92:
  {
   i11 = 2;
   HEAP32[i7 >> 2] = i11;
   i12 = i1 + 76 | 0;
   i13 = HEAP8[i12] | 0;
   i14 = i13 & -2;
   HEAP8[i12] = i14;
   STACKTOP = i4;
   return;
  }
 case 162:
 case 160:
 case 164:
 case 91:
  {
   i11 = 1;
   HEAP32[i7 >> 2] = i11;
   i12 = i1 + 76 | 0;
   i13 = HEAP8[i12] | 0;
   i14 = i13 & -2;
   HEAP8[i12] = i14;
   STACKTOP = i4;
   return;
  }
 default:
  {
   i11 = 0;
   HEAP32[i7 >> 2] = i11;
   i12 = i1 + 76 | 0;
   i13 = HEAP8[i12] | 0;
   i14 = i13 & -2;
   HEAP8[i12] = i14;
   STACKTOP = i4;
   return;
  }
 }
}
function __ZN7WebCore13KeyboardEventC2ERKN3WTF12AtomicStringERKNS_17KeyboardEventInitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (HEAP8[i3 | 0] & 1) != 0;
 i7 = (HEAP8[i3 + 1 | 0] & 1) != 0;
 i8 = HEAP32[i3 + 4 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i9 = i8 + 36 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = HEAP32[i3 + 8 >> 2] | 0;
 i10 = HEAP8[i3 + 20 | 0] & 1;
 i11 = HEAP8[i3 + 21 | 0] | 0;
 i12 = HEAP8[i3 + 22 | 0] | 0;
 i13 = HEAP8[i3 + 23 | 0] | 0;
 i14 = i5 | 0;
 HEAP32[i14 >> 2] = i8;
 __ZN7WebCore7UIEventC2ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEi(i1, i2, i6, i7, i5, i9);
 i9 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 + 36 | 0;
   i5 = i14 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i14 - 36 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 44 >> 2] & 15](i7);
  }
 } while (0);
 i9 = i1 + 60 | 0;
 HEAP8[i9] = i11 << 1 & 2 | i10 | i12 << 2 & 4 | i13 << 3 & 8 | HEAP8[i9] & -16;
 HEAP32[i1 >> 2] = H_BASE + 48;
 HEAP32[i1 + 64 >> 2] = 0;
 i9 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i1 + 68 >> 2] = i9;
 if ((i9 | 0) == 0) {
  i15 = i1 + 72 | 0;
  i16 = i3 + 16 | 0;
  i17 = HEAP32[i16 >> 2] | 0;
  HEAP32[i15 >> 2] = i17;
  i18 = i1 + 76 | 0;
  i19 = HEAP8[i18] | 0;
  i20 = i19 & -2;
  HEAP8[i18] = i20;
  STACKTOP = i4;
  return;
 }
 i13 = i9 | 0;
 HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 i15 = i1 + 72 | 0;
 i16 = i3 + 16 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 HEAP32[i15 >> 2] = i17;
 i18 = i1 + 76 | 0;
 i19 = HEAP8[i18] | 0;
 i20 = i19 & -2;
 HEAP8[i18] = i20;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore13KeyboardEventC1ERKN3WTF12AtomicStringERKNS_17KeyboardEventInitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (HEAP8[i3 | 0] & 1) != 0;
 i7 = (HEAP8[i3 + 1 | 0] & 1) != 0;
 i8 = HEAP32[i3 + 4 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i9 = i8 + 36 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = HEAP32[i3 + 8 >> 2] | 0;
 i10 = HEAP8[i3 + 20 | 0] & 1;
 i11 = HEAP8[i3 + 21 | 0] | 0;
 i12 = HEAP8[i3 + 22 | 0] | 0;
 i13 = HEAP8[i3 + 23 | 0] | 0;
 i14 = i5 | 0;
 HEAP32[i14 >> 2] = i8;
 __ZN7WebCore7UIEventC2ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEi(i1, i2, i6, i7, i5, i9);
 i9 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 + 36 | 0;
   i5 = i14 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i14 - 36 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 44 >> 2] & 15](i7);
  }
 } while (0);
 i9 = i1 + 60 | 0;
 HEAP8[i9] = i11 << 1 & 2 | i10 | i12 << 2 & 4 | i13 << 3 & 8 | HEAP8[i9] & -16;
 HEAP32[i1 >> 2] = H_BASE + 48;
 HEAP32[i1 + 64 >> 2] = 0;
 i9 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i1 + 68 >> 2] = i9;
 if ((i9 | 0) == 0) {
  i15 = i1 + 72 | 0;
  i16 = i3 + 16 | 0;
  i17 = HEAP32[i16 >> 2] | 0;
  HEAP32[i15 >> 2] = i17;
  i18 = i1 + 76 | 0;
  i19 = HEAP8[i18] | 0;
  i20 = i19 & -2;
  HEAP8[i18] = i20;
  STACKTOP = i4;
  return;
 }
 i13 = i9 | 0;
 HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 i15 = i1 + 72 | 0;
 i16 = i3 + 16 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 HEAP32[i15 >> 2] = i17;
 i18 = i1 + 76 | 0;
 i19 = HEAP8[i18] | 0;
 i20 = i19 & -2;
 HEAP8[i18] = i20;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore13KeyboardEvent17initKeyboardEventERKN3WTF12AtomicStringEbbPNS_9DOMWindowERKNS1_6StringEjbbbbb(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
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
 i12 = i12 | 0;
 var i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i13 | 0;
 if ((HEAP32[i1 + 32 >> 2] | 0) != 0) {
  STACKTOP = i13;
  return;
 }
 i15 = i14 | 0;
 HEAP32[i15 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i16 = i5 + 36 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 }
 __ZN7WebCore7UIEvent11initUIEventERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEi(i1, i2, i3, i4, i14, 0);
 i14 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i15 = i14 + 36 | 0;
   i4 = i15 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i4 >> 2] = i3;
    break;
   }
   i3 = i15 - 36 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] & 15](i3);
  }
 } while (0);
 i14 = HEAP32[i6 >> 2] | 0;
 if ((i14 | 0) != 0) {
  i6 = i14 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i1 + 68 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i14;
 do {
  if ((i3 | 0) != 0) {
   i14 = i3 | 0;
   i6 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i14 >> 2] = i6;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 72 >> 2] = i7;
 i7 = i1 + 60 | 0;
 HEAP8[i7] = (i9 & 1) << 1 | i8 & 1 | (i10 & 1) << 2 | (i11 & 1) << 3 | HEAP8[i7] & -16;
 i7 = i1 + 76 | 0;
 HEAP8[i7] = HEAP8[i7] & -2 | i12 & 1;
 STACKTOP = i13;
 return;
}
function __ZNK7WebCore13KeyboardEvent8charCodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = 0;
  } else {
   i6 = HEAP32[i4 + 52 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i5 = 0;
    break;
   }
   i5 = __ZNK7WebCore12EventHandler38needsKeyboardEventDisambiguationQuirksEv(HEAP32[i6 + 472 >> 2] | 0) | 0;
  }
 } while (0);
 i4 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i6 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 if (!((HEAP32[i1 + 12 >> 2] | 0) == (HEAP32[i6 + 200 >> 2] | 0) | i5)) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i5 = i3 | 0;
 i6 = HEAP32[i4 + 16 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i4 = i6 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = __ZNK3WTF6String19characterStartingAtEj(i3, 0) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i7 = i4;
  STACKTOP = i2;
  return i7 | 0;
 }
 i5 = i3 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i7 = i4;
  STACKTOP = i2;
  return i7 | 0;
 } else {
  HEAP32[i5 >> 2] = i6;
  i7 = i4;
  STACKTOP = i2;
  return i7 | 0;
 }
 return 0;
}
function runPostSets() {
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 8;
}
function __ZN3WTF10PassOwnPtrIN7WebCore21PlatformKeyboardEventEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF6OwnPtrIN7WebCore21PlatformKeyboardEventEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore13KeyboardEvent7keyCodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i5 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i5 | 0) != (HEAP32[i4 + 196 >> 2] | 0)) {
   if ((i5 | 0) == (HEAP32[i4 + 204 >> 2] | 0)) {
    break;
   }
   i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 68 >> 2] & 63](i1) | 0;
   return i3 | 0;
  }
 } while (0);
 i1 = HEAP32[i2 + 28 >> 2] | 0;
 switch (i1 | 0) {
 case 160:
 case 161:
  {
   i3 = 16;
   return i3 | 0;
  }
 case 164:
 case 165:
  {
   i3 = 18;
   return i3 | 0;
  }
 case 162:
 case 163:
  {
   i3 = 17;
   return i3 | 0;
  }
 default:
  {
   i3 = i1;
   return i3 | 0;
  }
 }
 return 0;
}
function __ZNK7WebCore13KeyboardEvent16getModifierStateERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i2 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 32 | 0) | 0) {
  i4 = (HEAP8[i1 + 60 | 0] & 1) != 0;
  return i4 | 0;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 24 | 0) | 0) {
  i4 = (HEAP8[i1 + 60 | 0] & 4) != 0;
  return i4 | 0;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 16 | 0) | 0) {
  i4 = (HEAP8[i1 + 60 | 0] & 2) != 0;
  return i4 | 0;
 }
 if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 8 | 0) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP8[i1 + 60 | 0] & 8) != 0;
 return i4 | 0;
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
function __ZN7WebCore13KeyboardEventD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 i2 = HEAP32[i1 + 68 >> 2] | 0;
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
 __ZN3WTF6OwnPtrIN7WebCore21PlatformKeyboardEventEED2Ev(i1 + 64 | 0);
 __ZN7WebCore7UIEventD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function __ZN7WebCore13KeyboardEventD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 i2 = HEAP32[i1 + 68 >> 2] | 0;
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
 __ZN3WTF6OwnPtrIN7WebCore21PlatformKeyboardEventEED2Ev(i1 + 64 | 0);
 __ZN7WebCore7UIEventD2Ev(i1);
 return;
}
function __ZN7WebCore13KeyboardEventD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 i2 = HEAP32[i1 + 68 >> 2] | 0;
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
 __ZN3WTF6OwnPtrIN7WebCore21PlatformKeyboardEventEED2Ev(i1 + 64 | 0);
 __ZN7WebCore7UIEventD2Ev(i1);
 return;
}
function __ZN7WebCore17findKeyboardEventEPNS_5EventE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 } else {
  i3 = i1;
 }
 while (1) {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 63](i3) | 0) {
   break;
  }
  i1 = HEAP32[i3 + 48 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i2 = 0;
   i4 = 7;
   break;
  } else {
   i3 = i1;
  }
 }
 if ((i4 | 0) == 7) {
  return i2 | 0;
 }
 i2 = i3;
 return i2 | 0;
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
function __ZN7WebCore13KeyboardEventC2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore7UIEventC2Ev(i1);
 i2 = i1 + 60 | 0;
 HEAP8[i2] = HEAP8[i2] & -16;
 HEAP32[i1 >> 2] = H_BASE + 48;
 HEAP32[i1 + 64 >> 2] = 0;
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP32[i1 + 72 >> 2] = 0;
 i2 = i1 + 76 | 0;
 HEAP8[i2] = HEAP8[i2] & -2;
 return;
}
function __ZN7WebCore13KeyboardEventC1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore7UIEventC2Ev(i1);
 i2 = i1 + 60 | 0;
 HEAP8[i2] = HEAP8[i2] & -16;
 HEAP32[i1 >> 2] = H_BASE + 48;
 HEAP32[i1 + 64 >> 2] = 0;
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP32[i1 + 72 >> 2] = 0;
 i2 = i1 + 76 | 0;
 HEAP8[i2] = HEAP8[i2] & -2;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function viii___ZNK7WebCore5Event8cloneForEPNS_17HTMLIFrameElementE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore5Event8cloneForEPNS_17HTMLIFrameElementE(i1 | 0, i2 | 0, i3 | 0);
}
function ii___ZNK7WebCore5Event25isBeforeTextInsertedEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event25isBeforeTextInsertedEventEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore5Event19isBeforeUnloadEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event19isBeforeUnloadEventEv(i1 | 0) | 0;
}
function __ZN7WebCore17KeyboardEventInitC2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11UIEventInitC2Ev(i1 | 0);
 _memset(i1 + 12 | 0, 0, 12) | 0;
 return;
}
function __ZN7WebCore17KeyboardEventInitC1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11UIEventInitC2Ev(i1 | 0);
 _memset(i1 + 12 | 0, 0, 12) | 0;
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
function __ZNK7WebCore13KeyboardEvent5whichEv(i1) {
 i1 = i1 | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 64 >> 2] & 63](i1) | 0;
}
function ii___ZNK7WebCore5Event16isClipboardEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event16isClipboardEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event12isTouchEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event12isTouchEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event12isMouseEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event12isMouseEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event12isFocusEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event12isFocusEventEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function ii___ZNK7WebCore5Event11isDragEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event11isDragEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7UIEvent9isUIEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7UIEvent9isUIEventEv(i1 | 0) | 0;
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
function vi___ZN7WebCore5Event14receivedTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore5Event14receivedTargetEv(i1 | 0);
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function ii___ZNK7WebCore7UIEvent5pageYEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7UIEvent5pageYEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7UIEvent5pageXEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7UIEvent5pageXEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7UIEvent6layerYEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7UIEvent6layerYEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7UIEvent6layerXEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7UIEvent6layerXEv(i1 | 0) | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 63](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZNK7WebCore13KeyboardEvent15isKeyboardEventEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore13KeyboardEvent14eventInterfaceEv(i1) {
 i1 = i1 | 0;
 return 9;
}
function b2(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(2);
}
function __ZNK7WebCore5Event13relatedTargetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
 return 0;
}
function __ZNK7WebCore5Event9clipboardEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore13KeyboardEventD2Ev,b0,__ZN7WebCore17KeyboardEventInitC2Ev,b0,__ZN7WebCore13KeyboardEventD0Ev,b0,vi___ZN7WebCore5Event14receivedTargetEv__wrapper,b0,__ZN7WebCore13KeyboardEventC2Ev,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_ii = [b1,b1,ii___ZN7WebCore7UIEvent6layerXEv__wrapper,b1,__ZNK7WebCore13KeyboardEvent7keyCodeEv,b1,ii___ZNK7WebCore5Event12isTouchEventEv__wrapper,b1,__ZNK7WebCore13KeyboardEvent5whichEv,b1,__ZNK7WebCore13KeyboardEvent14eventInterfaceEv,b1,ii___ZNK7WebCore5Event25isBeforeTextInsertedEventEv__wrapper,b1,ii___ZNK7WebCore7UIEvent5pageXEv__wrapper,b1,ii___ZN7WebCore7UIEvent6layerYEv__wrapper,b1,__ZNK7WebCore13KeyboardEvent15isKeyboardEventEv,b1,ii___ZNK7WebCore5Event12isFocusEventEv__wrapper,b1,__ZNK7WebCore5Event13relatedTargetEv,b1,ii___ZNK7WebCore5Event11isDragEventEv__wrapper,b1,ii___ZNK7WebCore7UIEvent9isUIEventEv__wrapper,b1,ii___ZNK7WebCore5Event16isClipboardEventEv__wrapper
  ,b1,ii___ZNK7WebCore5Event19isBeforeUnloadEventEv__wrapper,b1,ii___ZNK7WebCore7UIEvent5pageYEv__wrapper,b1,__ZNK7WebCore13KeyboardEvent8charCodeEv,b1,__ZNK7WebCore5Event9clipboardEv,b1,ii___ZNK7WebCore5Event12isMouseEventEv__wrapper,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_viii = [b2,b2,viii___ZNK7WebCore5Event8cloneForEPNS_17HTMLIFrameElementE__wrapper,b2,__ZN7WebCore13KeyboardEventC2ERKNS_21PlatformKeyboardEventEPNS_9DOMWindowE,b2,__ZN7WebCore13KeyboardEventC2ERKN3WTF12AtomicStringERKNS_17KeyboardEventInitE,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore13KeyboardEvent16getModifierStateERKN3WTF6StringE","__ZN7WebCore17KeyboardEventInitC2Ev","__ZN3WTF6OwnPtrIN7WebCore21PlatformKeyboardEventEED2Ev","__ZN7WebCore13KeyboardEventC2ERKNS_21PlatformKeyboardEventEPNS_9DOMWindowE","_strlen","__ZNK7WebCore13KeyboardEvent14eventInterfaceEv","__ZNK7WebCore13KeyboardEvent7keyCodeEv","__ZN7WebCore13KeyboardEventD0Ev","__ZN7WebCore13KeyboardEvent17initKeyboardEventERKN3WTF12AtomicStringEbbPNS_9DOMWindowERKNS1_6StringEjbbbbb","_memset","__ZNK7WebCore13KeyboardEvent15isKeyboardEventEv","__ZN3WTF10PassOwnPtrIN7WebCore21PlatformKeyboardEventEED2Ev","_memcpy","__ZN7WebCore13KeyboardEventC2ERKN3WTF12AtomicStringERKNS_17KeyboardEventInitE","__ZNK7WebCore13KeyboardEvent8charCodeEv","__ZNK7WebCore5Event13relatedTargetEv","__ZNK7WebCore5Event9clipboardEv","__ZN7WebCore13KeyboardEventC2Ev","__ZN7WebCore13KeyboardEventD2Ev","__ZN7WebCore17findKeyboardEventEPNS_5EventE","__ZNK7WebCore13KeyboardEvent5whichEv"]

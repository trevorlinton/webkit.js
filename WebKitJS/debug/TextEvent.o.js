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
H_BASE = parentModule["_malloc"](120 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 120;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore9TextEventC1Ev;
var __ZN7WebCore9TextEventC1EN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringENS_18TextEventInputTypeE;
var __ZN7WebCore9TextEventC1EN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringENS2_INS_16DocumentFragmentEEEbb;
var __ZN7WebCore9TextEventC1EN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringERKNS1_6VectorINS_20DictationAlternativeELj0ENS1_15CrashOnOverflowEEE;
var __ZN7WebCore9TextEventD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZTVN7WebCore9TextEventE=(H_BASE+8)|0;
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
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore9TextEventC2EN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringERKNS1_6VectorINS_20DictationAlternativeELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 344 | 0;
 i8 = i6 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 >> 2] = i2;
 __ZN7WebCore7UIEventC2ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEi(i1, i7, 1, 1, i6, 0);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 + 36 | 0;
   i7 = i8 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i7 >> 2] = i2;
    break;
   }
   i2 = i8 - 36 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 15](i2);
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 60 >> 2] = 6;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 64 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i3 = i6 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP8[i1 + 72 | 0] = 0;
 HEAP8[i1 + 73 | 0] = 0;
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 i6 = i4 + 8 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 i8 = i1 + 76 | 0;
 HEAP32[i8 >> 2] = 0;
 i7 = i1 + 80 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 84 >> 2] = i2;
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if (i3 >>> 0 > 268435455 >>> 0) {
  _WTFCrash();
 }
 i2 = __ZN3WTF18fastMallocGoodSizeEj(i3 << 4) | 0;
 HEAP32[i7 >> 2] = i2 >>> 4;
 i7 = __ZN3WTF10fastMallocEj(i2) | 0;
 i2 = i7;
 HEAP32[i8 >> 2] = i2;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i7 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 i6 = i7 + (i4 << 4) | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 } else {
  i10 = i7;
  i11 = i2;
 }
 while (1) {
  i2 = i11;
  i7 = i10;
  HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i2 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
  HEAP32[i2 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
  HEAP32[i2 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
  i7 = i10 + 16 | 0;
  if ((i7 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i7;
   i11 = i11 + 16 | 0;
  }
 }
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9TextEventC1EN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringERKNS1_6VectorINS_20DictationAlternativeELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 344 | 0;
 i8 = i6 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 >> 2] = i2;
 __ZN7WebCore7UIEventC2ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEi(i1, i7, 1, 1, i6, 0);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 + 36 | 0;
   i7 = i8 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i7 >> 2] = i2;
    break;
   }
   i2 = i8 - 36 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 15](i2);
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 60 >> 2] = 6;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 64 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i3 = i6 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP8[i1 + 72 | 0] = 0;
 HEAP8[i1 + 73 | 0] = 0;
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 i6 = i4 + 8 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 i8 = i1 + 76 | 0;
 HEAP32[i8 >> 2] = 0;
 i7 = i1 + 80 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 84 >> 2] = i2;
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if (i3 >>> 0 > 268435455 >>> 0) {
  _WTFCrash();
 }
 i2 = __ZN3WTF18fastMallocGoodSizeEj(i3 << 4) | 0;
 HEAP32[i7 >> 2] = i2 >>> 4;
 i7 = __ZN3WTF10fastMallocEj(i2) | 0;
 i2 = i7;
 HEAP32[i8 >> 2] = i2;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i7 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 i6 = i7 + (i4 << 4) | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 } else {
  i10 = i7;
  i11 = i2;
 }
 while (1) {
  i2 = i11;
  i7 = i10;
  HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i2 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
  HEAP32[i2 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
  HEAP32[i2 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
  i7 = i10 + 16 | 0;
  if ((i7 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i7;
   i11 = i11 + 16 | 0;
  }
 }
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9TextEvent22createForFragmentPasteEN3WTF10PassRefPtrINS_9DOMWindowEEENS2_INS_16DocumentFragmentEEEbb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = __ZN3WTF10fastMallocEj(88) | 0;
 i10 = i9;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i8, H_BASE + 120 | 0);
 i11 = i3 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i11 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 344 | 0;
 i12 = i7 | 0;
 HEAP32[i12 >> 2] = i2;
 __ZN7WebCore7UIEventC2ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEi(i9, i11, 1, 1, i7, 0);
 i7 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i12 = i7 + 36 | 0;
   i11 = i12 | 0;
   i2 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i11 >> 2] = i2;
    break;
   }
   i2 = i12 - 36 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 15](i2);
  }
 } while (0);
 HEAP32[i9 >> 2] = H_BASE + 16;
 HEAP32[i9 + 60 >> 2] = 4;
 i7 = i8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i9 + 64 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 HEAP32[i9 + 68 >> 2] = i3;
 HEAP8[i9 + 72 | 0] = i4 & 1;
 HEAP8[i9 + 73 | 0] = i5 & 1;
 HEAP32[i9 + 76 >> 2] = 0;
 HEAP32[i9 + 80 >> 2] = 0;
 HEAP32[i9 + 84 >> 2] = 0;
 HEAP32[i1 >> 2] = i10;
 i10 = HEAP32[i7 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i7 = i10 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i7 >> 2] = i1;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore9TextEventC2EN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringENS2_INS_16DocumentFragmentEEEbb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 344 | 0;
 i10 = i8 | 0;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 __ZN7WebCore7UIEventC2ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEi(i1, i9, 1, 1, i8, 0);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 + 36 | 0;
   i9 = i10 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i10 - 36 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 15](i2);
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 60 >> 2] = 4;
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 64 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i3 = i8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 68 >> 2] = i4;
 HEAP8[i1 + 72 | 0] = i5 & 1;
 HEAP8[i1 + 73 | 0] = i6 & 1;
 HEAP32[i1 + 76 >> 2] = 0;
 HEAP32[i1 + 80 >> 2] = 0;
 HEAP32[i1 + 84 >> 2] = 0;
 STACKTOP = i7;
 return;
}
function __ZN7WebCore9TextEventC1EN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringENS2_INS_16DocumentFragmentEEEbb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 344 | 0;
 i10 = i8 | 0;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 __ZN7WebCore7UIEventC2ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEi(i1, i9, 1, 1, i8, 0);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 + 36 | 0;
   i9 = i10 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i10 - 36 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 15](i2);
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 60 >> 2] = 4;
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 64 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i3 = i8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 68 >> 2] = i4;
 HEAP8[i1 + 72 | 0] = i5 & 1;
 HEAP8[i1 + 73 | 0] = i6 & 1;
 HEAP32[i1 + 76 >> 2] = 0;
 HEAP32[i1 + 80 >> 2] = 0;
 HEAP32[i1 + 84 >> 2] = 0;
 STACKTOP = i7;
 return;
}
function __ZN7WebCore9TextEvent13initTextEventERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEERKNS1_6StringE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 if ((HEAP32[i1 + 32 >> 2] | 0) != 0) {
  STACKTOP = i7;
  return;
 }
 i9 = i8 | 0;
 i10 = i5 | 0;
 i5 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i9 >> 2] = i5;
 __ZN7WebCore7UIEvent11initUIEventERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEi(i1, i2, i3, i4, i8, 0);
 i8 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = i8 + 36 | 0;
   i4 = i9 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i4 >> 2] = i3;
    break;
   }
   i3 = i9 - 36 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] & 15](i3);
  }
 } while (0);
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i6 = i8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i1 + 64 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i8;
 if ((i1 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i8 = i1 | 0;
 i6 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i8 >> 2] = i6;
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore9TextEvent6createEN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringENS_18TextEventInputTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = __ZN3WTF10fastMallocEj(88) | 0;
 i8 = i7;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 344 | 0;
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = i2;
 __ZN7WebCore7UIEventC2ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEi(i7, i9, 1, 1, i6, 0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 36 | 0;
   i9 = i10 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i10 - 36 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 15](i2);
  }
 } while (0);
 HEAP32[i7 >> 2] = H_BASE + 16;
 HEAP32[i7 + 60 >> 2] = i4;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i7 + 64 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i7 + 68 >> 2] = 0;
 HEAP8[i7 + 72 | 0] = 0;
 HEAP8[i7 + 73 | 0] = 0;
 HEAP32[i7 + 76 >> 2] = 0;
 HEAP32[i7 + 80 >> 2] = 0;
 HEAP32[i7 + 84 >> 2] = 0;
 HEAP32[i1 >> 2] = i8;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9TextEvent23createForPlainTextPasteEN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = __ZN3WTF10fastMallocEj(88) | 0;
 i8 = i7;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 344 | 0;
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = i2;
 __ZN7WebCore7UIEventC2ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEi(i7, i9, 1, 1, i6, 0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 36 | 0;
   i9 = i10 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i10 - 36 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 15](i2);
  }
 } while (0);
 HEAP32[i7 >> 2] = H_BASE + 16;
 HEAP32[i7 + 60 >> 2] = 4;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i7 + 64 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i3 = i6 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i7 + 68 >> 2] = 0;
 HEAP8[i7 + 72 | 0] = i4 & 1;
 HEAP8[i7 + 73 | 0] = 0;
 HEAP32[i7 + 76 >> 2] = 0;
 HEAP32[i7 + 80 >> 2] = 0;
 HEAP32[i7 + 84 >> 2] = 0;
 HEAP32[i1 >> 2] = i8;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9TextEvent13createForDropEN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __ZN3WTF10fastMallocEj(88) | 0;
 i7 = i6;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 344 | 0;
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = i2;
 __ZN7WebCore7UIEventC2ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEi(i6, i8, 1, 1, i5, 0);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 36 | 0;
   i8 = i9 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i8 >> 2] = i2;
    break;
   }
   i2 = i9 - 36 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 15](i2);
  }
 } while (0);
 HEAP32[i6 >> 2] = H_BASE + 16;
 HEAP32[i6 + 60 >> 2] = 5;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i6 + 64 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i3 = i5 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i6 + 68 >> 2] = 0;
 HEAP8[i6 + 72 | 0] = 0;
 HEAP8[i6 + 73 | 0] = 0;
 HEAP32[i6 + 76 >> 2] = 0;
 HEAP32[i6 + 80 >> 2] = 0;
 HEAP32[i6 + 84 >> 2] = 0;
 HEAP32[i1 >> 2] = i7;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9TextEventC2EN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringENS_18TextEventInputTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 344 | 0;
 i8 = i6 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 >> 2] = i2;
 __ZN7WebCore7UIEventC2ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEi(i1, i7, 1, 1, i6, 0);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 + 36 | 0;
   i7 = i8 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i7 >> 2] = i2;
    break;
   }
   i2 = i8 - 36 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 15](i2);
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 60 >> 2] = i4;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 64 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP8[i1 + 72 | 0] = 0;
 HEAP8[i1 + 73 | 0] = 0;
 HEAP32[i1 + 76 >> 2] = 0;
 HEAP32[i1 + 80 >> 2] = 0;
 HEAP32[i1 + 84 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9TextEventC1EN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringENS_18TextEventInputTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 344 | 0;
 i8 = i6 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 >> 2] = i2;
 __ZN7WebCore7UIEventC2ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEi(i1, i7, 1, 1, i6, 0);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 + 36 | 0;
   i7 = i8 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i7 >> 2] = i2;
    break;
   }
   i2 = i8 - 36 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 15](i2);
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 60 >> 2] = i4;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 64 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP8[i1 + 72 | 0] = 0;
 HEAP8[i1 + 73 | 0] = 0;
 HEAP32[i1 + 76 >> 2] = 0;
 HEAP32[i1 + 80 >> 2] = 0;
 HEAP32[i1 + 84 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9TextEvent18createForDictationEN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringERKNS1_6VectorINS_20DictationAlternativeELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = __ZN3WTF10fastMallocEj(88) | 0;
 i8 = i6 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 >> 2] = i2;
 __ZN7WebCore9TextEventC2EN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringERKNS1_6VectorINS_20DictationAlternativeELj0ENS1_15CrashOnOverflowEEE(i7, i6, i3, i4);
 HEAP32[i1 >> 2] = i7;
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = i7 + 36 | 0;
 i7 = i8 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i7 >> 2] = i1;
  STACKTOP = i5;
  return;
 }
 i1 = i8 - 36 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 44 >> 2] & 15](i1);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9TextEventD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 84 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 76 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 80 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i6 = i1;
  __ZN7WebCore7UIEventD2Ev(i6);
  return;
 }
 i2 = i3 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i6 = i1;
  __ZN7WebCore7UIEventD2Ev(i6);
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  i6 = i1;
  __ZN7WebCore7UIEventD2Ev(i6);
  return;
 }
}
function __ZN7WebCore9TextEventD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 84 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 76 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 80 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i6 = i1;
  __ZN7WebCore7UIEventD2Ev(i6);
  return;
 }
 i2 = i3 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i6 = i1;
  __ZN7WebCore7UIEventD2Ev(i6);
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  i6 = i1;
  __ZN7WebCore7UIEventD2Ev(i6);
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 30;
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
function __ZN7WebCore9TextEvent6createEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(88) | 0;
 __ZN7WebCore7UIEventC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 16;
 HEAP32[i2 + 76 >> 2] = 0;
 HEAP32[i2 + 80 >> 2] = 0;
 HEAP32[i2 + 84 >> 2] = 0;
 _memset(i2 + 60 | 0, 0, 14) | 0;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore9TextEventC2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7UIEventC2Ev(i1);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 76 >> 2] = 0;
 HEAP32[i1 + 80 >> 2] = 0;
 HEAP32[i1 + 84 >> 2] = 0;
 _memset(i1 + 60 | 0, 0, 14) | 0;
 return;
}
function __ZN7WebCore9TextEventC1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7UIEventC2Ev(i1);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 76 >> 2] = 0;
 HEAP32[i1 + 80 >> 2] = 0;
 HEAP32[i1 + 84 >> 2] = 0;
 _memset(i1 + 60 | 0, 0, 14) | 0;
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
function viii___ZNK7WebCore5Event8cloneForEPNS_17HTMLIFrameElementE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore5Event8cloneForEPNS_17HTMLIFrameElementE(i1 | 0, i2 | 0, i3 | 0);
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
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
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore5Event19isBeforeUnloadEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event19isBeforeUnloadEventEv(i1 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function ii___ZNK7WebCore5Event16isClipboardEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event16isClipboardEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event15isKeyboardEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event15isKeyboardEventEv(i1 | 0) | 0;
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
function b4(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(4);
}
function ii___ZNK7WebCore5Event11isDragEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event11isDragEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7UIEvent9isUIEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7UIEvent9isUIEventEv(i1 | 0) | 0;
}
function __ZN7WebCore9TextEventD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TextEventD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function ii___ZNK7WebCore7UIEvent8charCodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7UIEvent8charCodeEv(i1 | 0) | 0;
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
function ii___ZNK7WebCore7UIEvent7keyCodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7UIEvent7keyCodeEv(i1 | 0) | 0;
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
function ii___ZNK7WebCore7UIEvent5whichEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7UIEvent5whichEv(i1 | 0) | 0;
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
function b6(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(6);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZNK7WebCore9TextEvent14eventInterfaceEv(i1) {
 i1 = i1 | 0;
 return 18;
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
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore9TextEventD0Ev,b0,__ZN7WebCore9TextEventD2Ev,b0,__ZN7WebCore9TextEventC2Ev,b0,vi___ZN7WebCore5Event14receivedTargetEv__wrapper,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_ii = [b1,b1,ii___ZNK7WebCore5Event15isKeyboardEventEv__wrapper,b1,ii___ZN7WebCore7UIEvent6layerXEv__wrapper,b1,ii___ZNK7WebCore5Event12isTouchEventEv__wrapper,b1,ii___ZNK7WebCore5Event25isBeforeTextInsertedEventEv__wrapper,b1,ii___ZNK7WebCore7UIEvent9isUIEventEv__wrapper,b1,ii___ZN7WebCore7UIEvent6layerYEv__wrapper,b1,__ZNK7WebCore9TextEvent14eventInterfaceEv,b1,ii___ZNK7WebCore7UIEvent7keyCodeEv__wrapper,b1,ii___ZNK7WebCore5Event12isFocusEventEv__wrapper,b1,ii___ZNK7WebCore5Event11isDragEventEv__wrapper,b1,__ZNK7WebCore5Event13relatedTargetEv,b1,ii___ZNK7WebCore5Event16isClipboardEventEv__wrapper,b1,ii___ZNK7WebCore5Event19isBeforeUnloadEventEv__wrapper,b1,ii___ZNK7WebCore7UIEvent8charCodeEv__wrapper
  ,b1,ii___ZNK7WebCore7UIEvent5whichEv__wrapper,b1,ii___ZNK7WebCore7UIEvent5pageYEv__wrapper,b1,__ZNK7WebCore5Event9clipboardEv,b1,ii___ZNK7WebCore5Event12isMouseEventEv__wrapper,b1,ii___ZNK7WebCore7UIEvent5pageXEv__wrapper,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_viii = [b2,b2,viii___ZNK7WebCore5Event8cloneForEPNS_17HTMLIFrameElementE__wrapper,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_viiiiii = [b4,b4,__ZN7WebCore9TextEventC2EN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringENS2_INS_16DocumentFragmentEEEbb,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6,__ZN7WebCore9TextEventC2EN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringENS_18TextEventInputTypeE,b6,__ZN7WebCore9TextEventC2EN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringERKNS1_6VectorINS_20DictationAlternativeELj0ENS1_15CrashOnOverflowEEE,b6,b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore9TextEventC2EN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringENS_18TextEventInputTypeE","__ZN7WebCore9TextEvent22createForFragmentPasteEN3WTF10PassRefPtrINS_9DOMWindowEEENS2_INS_16DocumentFragmentEEEbb","__ZN7WebCore9TextEventC2EN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringENS2_INS_16DocumentFragmentEEEbb","__ZN7WebCore9TextEvent6createEv","__ZN7WebCore9TextEvent23createForPlainTextPasteEN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringEb","__ZN7WebCore9TextEvent18createForDictationEN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringERKNS1_6VectorINS_20DictationAlternativeELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore9TextEvent6createEN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringENS_18TextEventInputTypeE","__ZN7WebCore9TextEvent13createForDropEN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringE","_memset","_memcpy","__ZNK7WebCore5Event9clipboardEv","__ZN7WebCore9TextEventC2EN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringERKNS1_6VectorINS_20DictationAlternativeELj0ENS1_15CrashOnOverflowEEE","_strlen","__ZNK7WebCore9TextEvent14eventInterfaceEv","__ZNK7WebCore5Event13relatedTargetEv","__ZN7WebCore9TextEvent13initTextEventERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEERKNS1_6StringE","__ZN7WebCore9TextEventC2Ev","__ZN7WebCore9TextEventD0Ev","__ZN7WebCore9TextEventD2Ev"]

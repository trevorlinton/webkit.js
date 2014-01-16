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
H_BASE = parentModule["_malloc"](296 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 296;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore10FileReaderC1ERNS_22ScriptExecutionContextE;
var __ZN7WebCore10FileReaderD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,204,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
  var __ZTVN7WebCore16CrossThreadTask1IPNS_10FileReaderES2_EE=(H_BASE+88)|0;
  var __ZTVN7WebCore10FileReaderE=(H_BASE+120)|0;
  var __ZTVN7WebCore25EventTargetWithInlineDataE=(H_BASE+8)|0;
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
  var invoke_iiiii=env.invoke_iiiii;
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
function __ZN7WebCore10FileReader7doAbortEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 76 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   __ZN7WebCore16FileReaderLoader6cancelEv(i7);
   i8 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] & 63](i8);
  }
 } while (0);
 HEAP32[i1 + 56 >> 2] = 2;
 HEAP8[i1 + 60 | 0] = 0;
 i7 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i7 >> 2] = 1;
 HEAP32[i7 + 4 >> 2] = 3;
 i8 = i1 + 80 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i7;
 do {
  if ((i9 | 0) != 0) {
   i7 = i9 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i9 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 148 | 0;
 i8 = i1 + 16 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i10 = 0;
  i11 = 0;
  i12 = 0;
  i13 = 0;
 } else {
  i10 = 0;
  i11 = HEAP32[i7 + 104 >> 2] | 0;
  i12 = 0;
  i13 = HEAP32[i7 + 100 >> 2] | 0;
 }
 i7 = __ZN3WTF10fastMallocEj(72) | 0;
 __ZN7WebCore13ProgressEventC1ERKN3WTF12AtomicStringEbyy(i7, i9, 1, i13, i12, i11, i10);
 i10 = i5 | 0;
 HEAP32[i10 >> 2] = i7;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i8, i5) | 0;
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i7 = i10 | 0;
   i11 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i7 >> 2] = i11;
    break;
   }
   i11 = i10 - 8 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
  }
 } while (0);
 i5 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 4 | 0;
 i11 = HEAP32[i6 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i14 = 0;
  i15 = 0;
  i16 = 0;
  i17 = 0;
 } else {
  i14 = 0;
  i15 = HEAP32[i11 + 104 >> 2] | 0;
  i16 = 0;
  i17 = HEAP32[i11 + 100 >> 2] | 0;
 }
 i11 = __ZN3WTF10fastMallocEj(72) | 0;
 __ZN7WebCore13ProgressEventC1ERKN3WTF12AtomicStringEbyy(i11, i5, 1, i17, i16, i15, i14);
 i14 = i4 | 0;
 HEAP32[i14 >> 2] = i11;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i8, i4) | 0;
 i4 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i14 = i4 + 8 | 0;
   i11 = i14 | 0;
   i15 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i11 >> 2] = i15;
    break;
   }
   i15 = i14 - 8 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 63](i15);
  }
 } while (0);
 i4 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 652 | 0;
 i15 = HEAP32[i6 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i18 = 0;
  i19 = 0;
  i20 = 0;
  i21 = 0;
 } else {
  i18 = 0;
  i19 = HEAP32[i15 + 104 >> 2] | 0;
  i20 = 0;
  i21 = HEAP32[i15 + 100 >> 2] | 0;
 }
 i15 = __ZN3WTF10fastMallocEj(72) | 0;
 __ZN7WebCore13ProgressEventC1ERKN3WTF12AtomicStringEbyy(i15, i4, 1, i21, i20, i19, i18);
 i18 = i3 | 0;
 HEAP32[i18 >> 2] = i15;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i8, i3) | 0;
 i3 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i18 = i3 + 8 | 0;
   i8 = i18 | 0;
   i15 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i8 >> 2] = i15;
    break;
   }
   i15 = i18 - 8 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 63](i15);
  }
 } while (0);
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
 i3 = i1 + 12 | 0;
 i1 = i3 | 0;
 i15 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i15 | 0) != 0) {
  HEAP32[i1 >> 2] = i15;
  STACKTOP = i2;
  return;
 }
 i15 = i3 - 12 | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 63](i15);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore10FileReader16didFinishLoadingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 if ((HEAP8[i1 + 60 | 0] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i1 + 56 >> 2] = 2;
 i6 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 592 | 0;
 i7 = i1 + 16 | 0;
 i8 = i1 + 76 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 0;
  i11 = 0;
  i12 = 0;
  i13 = 0;
 } else {
  i10 = 0;
  i11 = HEAP32[i9 + 104 >> 2] | 0;
  i12 = 0;
  i13 = HEAP32[i9 + 100 >> 2] | 0;
 }
 i9 = __ZN3WTF10fastMallocEj(72) | 0;
 __ZN7WebCore13ProgressEventC1ERKN3WTF12AtomicStringEbyy(i9, i6, 1, i13, i12, i11, i10);
 i10 = i5 | 0;
 HEAP32[i10 >> 2] = i9;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i7, i5) | 0;
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i9 = i10 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i9 >> 2] = i11;
    break;
   }
   i11 = i10 - 8 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
  }
 } while (0);
 i5 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 212 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i14 = 0;
  i15 = 0;
  i16 = 0;
  i17 = 0;
 } else {
  i14 = 0;
  i15 = HEAP32[i11 + 104 >> 2] | 0;
  i16 = 0;
  i17 = HEAP32[i11 + 100 >> 2] | 0;
 }
 i11 = __ZN3WTF10fastMallocEj(72) | 0;
 __ZN7WebCore13ProgressEventC1ERKN3WTF12AtomicStringEbyy(i11, i5, 1, i17, i16, i15, i14);
 i14 = i4 | 0;
 HEAP32[i14 >> 2] = i11;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i7, i4) | 0;
 i4 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i14 = i4 + 8 | 0;
   i11 = i14 | 0;
   i15 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i11 >> 2] = i15;
    break;
   }
   i15 = i14 - 8 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 63](i15);
  }
 } while (0);
 i4 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 652 | 0;
 i15 = HEAP32[i8 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i18 = 0;
  i19 = 0;
  i20 = 0;
  i21 = 0;
 } else {
  i18 = 0;
  i19 = HEAP32[i15 + 104 >> 2] | 0;
  i20 = 0;
  i21 = HEAP32[i15 + 100 >> 2] | 0;
 }
 i15 = __ZN3WTF10fastMallocEj(72) | 0;
 __ZN7WebCore13ProgressEventC1ERKN3WTF12AtomicStringEbyy(i15, i4, 1, i21, i20, i19, i18);
 i18 = i3 | 0;
 HEAP32[i18 >> 2] = i15;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i7, i3) | 0;
 i3 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i18 = i3 + 8 | 0;
   i7 = i18 | 0;
   i15 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i7 >> 2] = i15;
    break;
   }
   i15 = i18 - 8 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 63](i15);
  }
 } while (0);
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
 i3 = i1 + 12 | 0;
 i1 = i3 | 0;
 i15 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i15 | 0) != 0) {
  HEAP32[i1 >> 2] = i15;
  STACKTOP = i2;
  return;
 }
 i15 = i3 - 12 | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 63](i15);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore10FileReader7didFailEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP8[i1 + 60 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i1 + 56 >> 2] = 2;
 i6 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i6 >> 2] = 1;
 HEAP32[i6 + 4 >> 2] = i2;
 i2 = i1 + 80 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i7 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 148 | 0;
 i2 = i1 + 16 | 0;
 i6 = i1 + 76 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = 0;
  i10 = 0;
  i11 = 0;
  i12 = 0;
 } else {
  i9 = 0;
  i10 = HEAP32[i8 + 104 >> 2] | 0;
  i11 = 0;
  i12 = HEAP32[i8 + 100 >> 2] | 0;
 }
 i8 = __ZN3WTF10fastMallocEj(72) | 0;
 __ZN7WebCore13ProgressEventC1ERKN3WTF12AtomicStringEbyy(i8, i7, 1, i12, i11, i10, i9);
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = i8;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i2, i5) | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 8 | 0;
   i8 = i9 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i8 >> 2] = i10;
    break;
   }
   i10 = i9 - 8 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
  }
 } while (0);
 i5 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 652 | 0;
 i10 = HEAP32[i6 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i13 = 0;
  i14 = 0;
  i15 = 0;
  i16 = 0;
 } else {
  i13 = 0;
  i14 = HEAP32[i10 + 104 >> 2] | 0;
  i15 = 0;
  i16 = HEAP32[i10 + 100 >> 2] | 0;
 }
 i10 = __ZN3WTF10fastMallocEj(72) | 0;
 __ZN7WebCore13ProgressEventC1ERKN3WTF12AtomicStringEbyy(i10, i5, 1, i16, i15, i14, i13);
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = i10;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i2, i4) | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i13 = i4 + 8 | 0;
   i2 = i13 | 0;
   i10 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i2 >> 2] = i10;
    break;
   }
   i10 = i13 - 8 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
  }
 } while (0);
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - 1;
 i4 = i1 + 12 | 0;
 i1 = i4 | 0;
 i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i1 >> 2] = i10;
  STACKTOP = i3;
  return;
 }
 i10 = i4 - 12 | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] & 63](i10);
 STACKTOP = i3;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_vii + 10;
}
function __ZN7WebCore10FileReader12readInternalEPNS_4BlobENS_16FileReaderLoader8ReadTypeERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = i1 + 56 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 1) {
  HEAP32[i4 >> 2] = 11;
  return;
 }
 i4 = i1 + 12 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 if ((i2 | 0) != 0) {
  i4 = i2 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 64 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 + 8 | 0;
   i7 = i2 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i7 >> 2] = i8;
    break;
   }
   i8 = i2 - 8 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
  }
 } while (0);
 i6 = i1 + 68 | 0;
 HEAP32[i6 >> 2] = i3;
 HEAP32[i5 >> 2] = 1;
 i5 = i1 + 80 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i3 = __ZN3WTF10fastMallocEj(124) | 0;
 __ZN7WebCore16FileReaderLoaderC1ENS0_8ReadTypeEPNS_22FileReaderLoaderClientE(i3, HEAP32[i6 >> 2] | 0, (i1 | 0) == 0 ? 0 : i1 + 52 | 0);
 i6 = i1 + 76 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i3;
 if ((i8 | 0) == 0) {
  i9 = i3;
 } else {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] & 63](i8);
  i9 = HEAP32[i6 >> 2] | 0;
 }
 __ZN7WebCore16FileReaderLoader11setEncodingERKN3WTF6StringE(i9, i1 + 72 | 0);
 i9 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i3 = i8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i9 + 20 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i8;
 do {
  if ((i9 | 0) != 0) {
   i8 = i9 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i8 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN7WebCore16FileReaderLoader5startEPNS_22ScriptExecutionContextEPNS_4BlobE(HEAP32[i6 >> 2] | 0, HEAP32[i1 + 4 >> 2] | 0, HEAP32[i4 >> 2] | 0);
 return;
}
function __ZN7WebCore10FileReaderD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP32[i1 + 16 >> 2] = H_BASE + 200;
 HEAP32[i1 + 52 >> 2] = H_BASE + 272;
 i2 = i1 + 76 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   __ZN7WebCore16FileReaderLoader6cancelEv(i3);
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] & 63](i4);
  }
 } while (0);
 HEAP32[i1 + 56 >> 2] = 2;
 i3 = HEAP32[i1 + 80 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 36 >> 2] & 63](i3);
 }
 i3 = HEAP32[i1 + 72 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i2 = i5 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = i4;
    break;
   }
   i4 = i5 - 8 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  }
 } while (0);
 i3 = i1 + 16 | 0;
 HEAP32[i3 >> 2] = H_BASE + 16;
 __ZN7WebCore15EventTargetDataD1Ev(i1 + 20 | 0);
 __ZN7WebCore11EventTargetD2Ev(i3 | 0);
 __ZN7WebCore15ActiveDOMObjectD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore10FileReaderD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP32[i1 + 16 >> 2] = H_BASE + 200;
 HEAP32[i1 + 52 >> 2] = H_BASE + 272;
 i2 = i1 + 76 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   __ZN7WebCore16FileReaderLoader6cancelEv(i3);
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] & 63](i4);
  }
 } while (0);
 HEAP32[i1 + 56 >> 2] = 2;
 i3 = HEAP32[i1 + 80 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 36 >> 2] & 63](i3);
 }
 i3 = HEAP32[i1 + 72 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i2 = i5 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = i4;
    break;
   }
   i4 = i5 - 8 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  }
 } while (0);
 i3 = i1 + 16 | 0;
 HEAP32[i3 >> 2] = H_BASE + 16;
 __ZN7WebCore15EventTargetDataD1Ev(i1 + 20 | 0);
 __ZN7WebCore11EventTargetD2Ev(i3 | 0);
 __ZN7WebCore15ActiveDOMObjectD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore10FileReader14didReceiveDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, d4 = +0, i5 = 0, d6 = +0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 d4 = +__ZN3WTF27monotonicallyIncreasingTimeEv() * +1e3;
 i5 = i1 + 88 | 0;
 d6 = +HEAPF64[i5 >> 3];
 if (d6 == +0) {
  HEAPF64[i5 >> 3] = d4;
  STACKTOP = i2;
  return;
 }
 if (d4 - d6 <= +50) {
  STACKTOP = i2;
  return;
 }
 i7 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 592 | 0;
 i8 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = 0;
  i10 = 0;
  i11 = 0;
  i12 = 0;
 } else {
  i9 = 0;
  i10 = HEAP32[i8 + 104 >> 2] | 0;
  i11 = 0;
  i12 = HEAP32[i8 + 100 >> 2] | 0;
 }
 i8 = __ZN3WTF10fastMallocEj(72) | 0;
 __ZN7WebCore13ProgressEventC1ERKN3WTF12AtomicStringEbyy(i8, i7, 1, i12, i11, i10, i9);
 i9 = i3 | 0;
 HEAP32[i9 >> 2] = i8;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 + 16 | 0, i3) | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i9 = i3 + 8 | 0;
   i1 = i9 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i1 >> 2] = i8;
    break;
   }
   i8 = i9 - 8 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
  }
 } while (0);
 HEAPF64[i5 >> 3] = d4;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore10FileReader15didStartLoadingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 224 | 0;
 i5 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  i7 = 0;
  i8 = 0;
  i9 = 0;
 } else {
  i6 = 0;
  i7 = HEAP32[i5 + 104 >> 2] | 0;
  i8 = 0;
  i9 = HEAP32[i5 + 100 >> 2] | 0;
 }
 i5 = __ZN3WTF10fastMallocEj(72) | 0;
 __ZN7WebCore13ProgressEventC1ERKN3WTF12AtomicStringEbyy(i5, i4, 1, i9, i8, i7, i6);
 i6 = i3 | 0;
 HEAP32[i6 >> 2] = i5;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 + 16 | 0, i3) | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i3 + 8 | 0;
 i3 = i6 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i6 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore10FileReader9fireEventERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  i7 = 0;
  i8 = 0;
  i9 = 0;
 } else {
  i6 = 0;
  i7 = HEAP32[i5 + 104 >> 2] | 0;
  i8 = 0;
  i9 = HEAP32[i5 + 100 >> 2] | 0;
 }
 i5 = __ZN3WTF10fastMallocEj(72) | 0;
 __ZN7WebCore13ProgressEventC1ERKN3WTF12AtomicStringEbyy(i5, i2, 1, i9, i8, i7, i6);
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = i5;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 + 16 | 0, i4) | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i4 + 8 | 0;
 i4 = i6 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i6 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10FileReader5abortEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 60 | 0;
 if ((HEAP8[i4] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i1 + 56 >> 2] | 0) != 1) {
  STACKTOP = i2;
  return;
 }
 HEAP8[i4] = 1;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] | 0;
 i6 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i6 >> 2] = H_BASE + 96;
 HEAP32[i6 + 4 >> 2] = F_BASE_vii + 6;
 HEAP32[i6 + 8 >> 2] = i1;
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = i6;
 FUNCTION_TABLE_vii[i5 & 15](i4, i3);
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore10FileReader6createERNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = __ZN3WTF10fastMallocEj(96) | 0;
 HEAP32[i3 + 12 >> 2] = 1;
 i4 = i3;
 __ZN7WebCore15ActiveDOMObjectC2EPNS_22ScriptExecutionContextE(i4, i2);
 i2 = i3 + 16 | 0;
 HEAP32[i2 >> 2] = H_BASE + 16;
 __ZN7WebCore15EventTargetDataC1Ev(i3 + 20 | 0);
 HEAP32[i3 >> 2] = H_BASE + 128;
 HEAP32[i2 >> 2] = H_BASE + 200;
 HEAP32[i3 + 52 >> 2] = H_BASE + 272;
 HEAP32[i3 + 56 >> 2] = 0;
 HEAP8[i3 + 60 | 0] = 0;
 HEAP32[i3 + 64 >> 2] = 0;
 HEAP32[i3 + 68 >> 2] = 1;
 HEAP32[i3 + 72 >> 2] = 0;
 HEAP32[i3 + 76 >> 2] = 0;
 HEAP32[i3 + 80 >> 2] = 0;
 HEAPF64[i3 + 88 >> 3] = +0;
 __ZN7WebCore15ActiveDOMObject15suspendIfNeededEv(i4);
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZN7WebCore10FileReader10readAsTextEPNS_4BlobERKN3WTF6StringERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i3 = i5 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 72 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN7WebCore10FileReader12readInternalEPNS_4BlobENS_16FileReaderLoader8ReadTypeERi(i1, i2, 3, i4);
 return;
}
function __ZN7WebCore10FileReaderC2ERNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 12 >> 2] = 1;
 __ZN7WebCore15ActiveDOMObjectC2EPNS_22ScriptExecutionContextE(i1 | 0, i2);
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = H_BASE + 16;
 __ZN7WebCore15EventTargetDataC1Ev(i1 + 20 | 0);
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP32[i2 >> 2] = H_BASE + 200;
 HEAP32[i1 + 52 >> 2] = H_BASE + 272;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP8[i1 + 60 | 0] = 0;
 HEAP32[i1 + 64 >> 2] = 0;
 HEAP32[i1 + 68 >> 2] = 1;
 HEAP32[i1 + 72 >> 2] = 0;
 HEAP32[i1 + 76 >> 2] = 0;
 HEAP32[i1 + 80 >> 2] = 0;
 HEAPF64[i1 + 88 >> 3] = +0;
 return;
}
function __ZN7WebCore10FileReaderC1ERNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 12 >> 2] = 1;
 __ZN7WebCore15ActiveDOMObjectC2EPNS_22ScriptExecutionContextE(i1 | 0, i2);
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = H_BASE + 16;
 __ZN7WebCore15EventTargetDataC1Ev(i1 + 20 | 0);
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP32[i2 >> 2] = H_BASE + 200;
 HEAP32[i1 + 52 >> 2] = H_BASE + 272;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP8[i1 + 60 | 0] = 0;
 HEAP32[i1 + 64 >> 2] = 0;
 HEAP32[i1 + 68 >> 2] = 1;
 HEAP32[i1 + 72 >> 2] = 0;
 HEAP32[i1 + 76 >> 2] = 0;
 HEAP32[i1 + 80 >> 2] = 0;
 HEAPF64[i1 + 88 >> 3] = +0;
 return;
}
function __ZN7WebCore10FileReader10readAsTextEPNS_4BlobERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = i1 + 72 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN7WebCore10FileReader12readInternalEPNS_4BlobENS_16FileReaderLoader8ReadTypeERi(i1, i2, 3, i3);
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
function __ZN7WebCore10FileReader9terminateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 76 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   __ZN7WebCore16FileReaderLoader6cancelEv(i3);
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] & 63](i4);
  }
 } while (0);
 HEAP32[i1 + 56 >> 2] = 2;
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
function __ZN7WebCore10FileReader4stopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 76 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   __ZN7WebCore16FileReaderLoader6cancelEv(i3);
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] & 63](i4);
  }
 } while (0);
 HEAP32[i1 + 56 >> 2] = 2;
 return;
}
function __ZN7WebCore10FileReader16derefEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 12 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 12 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 63](i3);
 return;
}
function iiiii___ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZThn16_N7WebCore10FileReader16derefEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 96 + 80 | 0;
 i1 = i2 + 12 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i2);
 return;
}
function __ZNK7WebCore10FileReader17arrayBufferResultEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 76 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP32[i2 + 80 >> 2] | 0) != 0) {
    break;
   }
   __ZNK7WebCore16FileReaderLoader17arrayBufferResultEv(i1, i3);
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore10FileReader12stringResultEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 76 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP32[i2 + 80 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore16FileReaderLoader12stringResultEv(i1, i3);
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function iiiii___ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore10FileReader18readAsBinaryStringEPNS_4BlobERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore10FileReader12readInternalEPNS_4BlobENS_16FileReaderLoader8ReadTypeERi(i1, i2, 1, i3);
 return;
}
function __ZN7WebCore10FileReader17readAsArrayBufferEPNS_4BlobERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore10FileReader12readInternalEPNS_4BlobENS_16FileReaderLoader8ReadTypeERi(i1, i2, 0, i3);
 return;
}
function __ZN7WebCore10FileReader13readAsDataURLEPNS_4BlobERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore10FileReader12readInternalEPNS_4BlobENS_16FileReaderLoader8ReadTypeERi(i1, i2, 4, i3);
 return;
}
function iii___ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i2 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore16CrossThreadTask1IPNS_10FileReaderES2_E11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vii[HEAP32[i1 + 4 >> 2] & 15](i2, HEAP32[i1 + 8 >> 2] | 0);
 return;
}
function __ZN7WebCore25EventTargetWithInlineDataD0Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 __ZN7WebCore15EventTargetDataD1Ev(i1 + 4 | 0);
 __ZN7WebCore11EventTargetD2Ev(i1 | 0);
 __ZdlPv(i1);
 return;
}
function vii___ZN7WebCore15ActiveDOMObject7suspendENS0_19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore15ActiveDOMObject7suspendENS0_19ReasonForSuspensionE(i1 | 0, i2 | 0);
}
function __ZN7WebCore25EventTargetWithInlineDataD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 __ZN7WebCore15EventTargetDataD1Ev(i1 + 4 | 0);
 __ZN7WebCore11EventTargetD2Ev(i1 | 0);
 return;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZN7WebCore16CrossThreadTask1IPNS_10FileReaderES2_ED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function vi___ZN7WebCore26ContextDestructionObserver16contextDestroyedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore26ContextDestructionObserver16contextDestroyedEv(i1 | 0);
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function __ZThn52_N7WebCore10FileReaderD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 96 + 44 | 0;
 __ZN7WebCore10FileReaderD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZThn16_N7WebCore10FileReaderD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 96 + 80 | 0;
 __ZN7WebCore10FileReaderD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCoreL12delayedAbortEPNS_22ScriptExecutionContextEPNS_10FileReaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10FileReader7doAbortEv(i2);
 return;
}
function __ZThn16_N7WebCore10FileReader14refEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 96 + 92 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function ii___ZNK7WebCore15ActiveDOMObject18hasPendingActivityEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore15ActiveDOMObject18hasPendingActivityEv(i1 | 0) | 0;
}
function __ZN7WebCore10FileReader14refEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 12 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget23removeAllEventListenersEv(i1 | 0);
}
function __ZThn52_N7WebCore10FileReader7didFailEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10FileReader7didFailEi(i1 - 96 + 44 | 0, i2);
 return;
}
function __ZThn52_N7WebCore10FileReader16didFinishLoadingEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10FileReader16didFinishLoadingEv(i1 - 96 + 44 | 0);
 return;
}
function __ZThn52_N7WebCore10FileReader15didStartLoadingEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10FileReader15didStartLoadingEv(i1 - 96 + 44 | 0);
 return;
}
function __ZN7WebCore16CrossThreadTask1IPNS_10FileReaderES2_ED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
}
function __ZThn52_N7WebCore10FileReader14didReceiveDataEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10FileReader14didReceiveDataEv(i1 - 96 + 44 | 0);
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
function ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget11toDOMWindowEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
}
function ii___ZN7WebCore11EventTarget6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget6toNodeEv(i1 | 0) | 0;
}
function vi___ZN7WebCore15ActiveDOMObject6resumeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15ActiveDOMObject6resumeEv(i1 | 0);
}
function __ZN7WebCore10FileReaderD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10FileReaderD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
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
function __ZThn16_NK7WebCore10FileReader22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 96 + 84 >> 2] | 0;
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
function __ZThn52_N7WebCore10FileReaderD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10FileReaderD2Ev(i1 - 96 + 44 | 0);
 return;
}
function __ZThn16_N7WebCore10FileReaderD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10FileReaderD2Ev(i1 - 96 + 80 | 0);
 return;
}
function __ZNK7WebCore10FileReader22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 4 >> 2] | 0;
}
function __ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv(i1) {
 i1 = i1 | 0;
 return i1 + 4 | 0;
}
function b0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(0);
 return 0;
}
function __ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv(i1) {
 i1 = i1 | 0;
 return i1 + 4 | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZThn16_NK7WebCore10FileReader20eventTargetInterfaceEv(i1) {
 i1 = i1 | 0;
 return 10;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZNK7WebCore10FileReader20eventTargetInterfaceEv(i1) {
 i1 = i1 | 0;
 return 10;
}
function __ZNK7WebCore10FileReader10canSuspendEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiii = [b0,b0,iiiii___ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b0,iiiii___ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZThn16_N7WebCore10FileReaderD1Ev,b1,__ZN7WebCore10FileReader14didReceiveDataEv,b1,__ZThn52_N7WebCore10FileReader16didFinishLoadingEv,b1,__ZN7WebCore10FileReaderD2Ev,b1,__ZN7WebCore10FileReader4stopEv,b1,__ZN7WebCore10FileReader16derefEventTargetEv,b1,__ZN7WebCore25EventTargetWithInlineDataD0Ev,b1,__ZN7WebCore10FileReader14refEventTargetEv,b1,__ZThn52_N7WebCore10FileReader15didStartLoadingEv,b1,__ZN7WebCore10FileReader16didFinishLoadingEv,b1,vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper,b1,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b1,__ZThn52_N7WebCore10FileReader14didReceiveDataEv,b1,vi___ZN7WebCore15ActiveDOMObject6resumeEv__wrapper
  ,b1,__ZN7WebCore10FileReaderD0Ev,b1,__ZN7WebCore10FileReader15didStartLoadingEv,b1,__ZN7WebCore25EventTargetWithInlineDataD1Ev,b1,__ZThn16_N7WebCore10FileReaderD0Ev,b1,__ZN7WebCore16CrossThreadTask1IPNS_10FileReaderES2_ED0Ev,b1,vi___ZN7WebCore26ContextDestructionObserver16contextDestroyedEv__wrapper,b1,__ZThn52_N7WebCore10FileReaderD0Ev,b1,__ZThn16_N7WebCore10FileReader16derefEventTargetEv,b1,__ZThn16_N7WebCore10FileReader14refEventTargetEv,b1,__ZN7WebCore16CrossThreadTask1IPNS_10FileReaderES2_ED1Ev,b1,__ZThn52_N7WebCore10FileReaderD1Ev,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore10FileReader7didFailEi,b2,__ZN7WebCore16CrossThreadTask1IPNS_10FileReaderES2_E11performTaskEPNS_22ScriptExecutionContextE,b2,__ZN7WebCoreL12delayedAbortEPNS_22ScriptExecutionContextEPNS_10FileReaderE,b2,__ZN7WebCore10FileReaderC2ERNS_22ScriptExecutionContextE,b2,__ZThn52_N7WebCore10FileReader7didFailEi,b2,vii___ZN7WebCore15ActiveDOMObject7suspendENS0_19ReasonForSuspensionE__wrapper,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZThn16_NK7WebCore10FileReader20eventTargetInterfaceEv,b3,__ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv,b3,__ZNK7WebCore10FileReader20eventTargetInterfaceEv,b3,__ZThn16_NK7WebCore10FileReader22scriptExecutionContextEv,b3,ii___ZN7WebCore11EventTarget6toNodeEv__wrapper,b3,__ZNK7WebCore10FileReader10canSuspendEv,b3,__ZNK7WebCore10FileReader22scriptExecutionContextEv,b3,ii___ZNK7WebCore15ActiveDOMObject18hasPendingActivityEv__wrapper,b3,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b3,__ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv,b3,__ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv,b3,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4,v____cxa_pure_virtual__wrapper,b4];
  var FUNCTION_TABLE_iii = [b5,b5,iii___ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore10FileReader7didFailEi","__ZThn16_N7WebCore10FileReaderD1Ev","__ZN7WebCore10FileReader14didReceiveDataEv","__ZThn52_N7WebCore10FileReader16didFinishLoadingEv","__ZThn16_NK7WebCore10FileReader20eventTargetInterfaceEv","__ZN7WebCore10FileReaderD2Ev","__ZN7WebCore10FileReader4stopEv","__ZN7WebCore10FileReader16derefEventTargetEv","__ZNK7WebCore10FileReader20eventTargetInterfaceEv","__ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv","__ZN7WebCore25EventTargetWithInlineDataD0Ev","__ZN7WebCore10FileReader9fireEventERKN3WTF12AtomicStringE","__ZNK7WebCore10FileReader17arrayBufferResultEv","__ZN7WebCore10FileReader10readAsTextEPNS_4BlobERKN3WTF6StringERi","__ZN7WebCoreL12delayedAbortEPNS_22ScriptExecutionContextEPNS_10FileReaderE","__ZThn52_N7WebCore10FileReader7didFailEi","_memset","__ZThn52_N7WebCore10FileReader15didStartLoadingEv","__ZThn16_N7WebCore10FileReaderD0Ev","__ZN7WebCore10FileReader16didFinishLoadingEv","__ZThn16_NK7WebCore10FileReader22scriptExecutionContextEv","_strlen","__ZNK7WebCore10FileReader10canSuspendEv","__ZN7WebCore10FileReader6createERNS_22ScriptExecutionContextE","__ZNK7WebCore10FileReader22scriptExecutionContextEv","__ZThn16_N7WebCore10FileReader14refEventTargetEv","__ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv","__ZN7WebCore10FileReader10readAsTextEPNS_4BlobERi","__ZThn52_N7WebCore10FileReader14didReceiveDataEv","__ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv","__ZN7WebCore10FileReader13readAsDataURLEPNS_4BlobERi","__ZN7WebCore10FileReaderD0Ev","__ZN7WebCore10FileReader15didStartLoadingEv","__ZN7WebCore16CrossThreadTask1IPNS_10FileReaderES2_E11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore10FileReader5abortEv","__ZN7WebCore25EventTargetWithInlineDataD1Ev","__ZN7WebCore10FileReaderC2ERNS_22ScriptExecutionContextE","__ZN7WebCore10FileReader12stringResultEv","__ZThn52_N7WebCore10FileReaderD0Ev","__ZThn16_N7WebCore10FileReader16derefEventTargetEv","__ZN7WebCore10FileReader7doAbortEv","__ZN7WebCore16CrossThreadTask1IPNS_10FileReaderES2_ED0Ev","__ZN7WebCore10FileReader12readInternalEPNS_4BlobENS_16FileReaderLoader8ReadTypeERi","_memcpy","__ZN7WebCore10FileReader17readAsArrayBufferEPNS_4BlobERi","__ZN7WebCore10FileReader18readAsBinaryStringEPNS_4BlobERi","__ZN7WebCore16CrossThreadTask1IPNS_10FileReaderES2_ED1Ev","__ZN7WebCore10FileReader9terminateEv","__ZThn52_N7WebCore10FileReaderD1Ev","__ZN7WebCore10FileReader14refEventTargetEv"]

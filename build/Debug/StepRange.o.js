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
H_BASE = parentModule["_malloc"](56 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 56;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore9StepRangeC1Ev;
var __ZN7WebCore9StepRangeC1ERKS0_;
var __ZN7WebCore9StepRangeC1ERKNS_7DecimalES3_S3_S3_RKNS0_15StepDescriptionE;
/* memory initializer */ allocate([97,110,121,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore9StepRange9parseStepENS_15AnyStepHandlingERKNS0_15StepDescriptionERKN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 216 | 0;
 i6 = i5 | 0;
 i7 = i5 + 24 | 0;
 i8 = i5 + 48 | 0;
 i9 = i5 + 72 | 0;
 i10 = i5 + 96 | 0;
 i11 = i5 + 120 | 0;
 i12 = i5 + 144 | 0;
 i13 = i5 + 168 | 0;
 i14 = i5 + 192 | 0;
 i15 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   if ((HEAP32[i15 + 4 >> 2] | 0) == 0) {
    break;
   }
   do {
    if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(i15, H_BASE + 8 | 0) | 0) {
     if ((i2 | 0) == 0) {
      __ZN7WebCore7Decimal3nanEv(i1);
      STACKTOP = i5;
      return;
     } else if ((i2 | 0) == 1) {
      __ZN7WebCore7DecimalC1Ei(i1, Math_imul(HEAP32[i3 + 8 >> 2] | 0, HEAP32[i3 >> 2] | 0) | 0);
      STACKTOP = i5;
      return;
     } else {
      break;
     }
    }
   } while (0);
   __ZN7WebCore27parseToDecimalForNumberTypeERKN3WTF6StringE(i6, i4);
   i16 = HEAP32[i6 + 12 >> 2] | 0;
   do {
    if (!((i16 | 0) == 2 | (i16 | 0) == 0)) {
     __ZN7WebCore7DecimalC1Ei(i7, 0);
     if (__ZNK7WebCore7DecimalleERKS0_(i6, i7) | 0) {
      break;
     }
     i17 = HEAP32[i3 + 12 >> 2] | 0;
     if ((i17 | 0) == 1) {
      __ZNK7WebCore7Decimal5roundEv(i9, i6);
      __ZN7WebCore7DecimalC1Ei(i10, 1);
      i18 = __ZNK7WebCore7DecimalltERKS0_(i9, i10) | 0;
      __ZN7WebCore7DecimalaSERKS0_(i6, i18 ? i10 : i9) | 0;
      __ZN7WebCore7DecimalC1Ei(i11, HEAP32[i3 + 8 >> 2] | 0);
      __ZN7WebCore7DecimalmLERKS0_(i6, i11) | 0;
     } else if ((i17 | 0) == 2) {
      __ZN7WebCore7DecimalC1Ei(i12, HEAP32[i3 + 8 >> 2] | 0);
      __ZN7WebCore7DecimalmLERKS0_(i6, i12) | 0;
      __ZNK7WebCore7Decimal5roundEv(i13, i6);
      __ZN7WebCore7DecimalC1Ei(i14, 1);
      i18 = __ZNK7WebCore7DecimalltERKS0_(i13, i14) | 0;
      __ZN7WebCore7DecimalaSERKS0_(i6, i18 ? i14 : i13) | 0;
     } else if ((i17 | 0) == 0) {
      __ZN7WebCore7DecimalC1Ei(i8, HEAP32[i3 + 8 >> 2] | 0);
      __ZN7WebCore7DecimalmLERKS0_(i6, i8) | 0;
     }
     __ZN7WebCore7DecimalC1ERKS0_(i1, i6);
     STACKTOP = i5;
     return;
    }
   } while (0);
   __ZN7WebCore7DecimalC1Ei(i1, Math_imul(HEAP32[i3 + 8 >> 2] | 0, HEAP32[i3 >> 2] | 0) | 0);
   STACKTOP = i5;
   return;
  }
 } while (0);
 __ZN7WebCore7DecimalC1Ei(i1, Math_imul(HEAP32[i3 + 8 >> 2] | 0, HEAP32[i3 >> 2] | 0) | 0);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore9StepRange12stepMismatchERKNS_7DecimalE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 240 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 48 | 0;
 i7 = i3 + 72 | 0;
 i8 = i3 + 96 | 0;
 i9 = i3 + 120 | 0;
 i10 = i3 + 144 | 0;
 i11 = i3 + 168 | 0;
 i12 = i3 + 192 | 0;
 i13 = i3 + 216 | 0;
 if ((HEAP8[i1 + 112 | 0] & 1) == 0) {
  i14 = 0;
  STACKTOP = i3;
  return i14 | 0;
 }
 i15 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i15 | 0) == 2 | (i15 | 0) == 0) {
  i14 = 0;
  STACKTOP = i3;
  return i14 | 0;
 }
 __ZNK7WebCore7DecimalmiERKS0_(i5, i2, i1 + 72 | 0);
 __ZNK7WebCore7Decimal3absEv(i4, i5);
 i5 = HEAP32[i4 + 12 >> 2] | 0;
 if ((i5 | 0) == 2 | (i5 | 0) == 0) {
  i14 = 0;
  STACKTOP = i3;
  return i14 | 0;
 }
 if (HEAP8[H_BASE + 32 | 0] | 0) {
  i16 = HEAP32[H_BASE + 56 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore7DecimalC1ENS0_4SignEiy(i5, 0, 0, 0, 2097152);
  HEAP32[H_BASE + 56 >> 2] = i5;
  HEAP8[H_BASE + 32 | 0] = 1;
  i16 = i5;
 }
 __ZNK7WebCore7DecimaldvERKS0_(i6, i4, i16);
 i16 = i1 + 48 | 0;
 if (__ZNK7WebCore7DecimalgtERKS0_(i6, i16) | 0) {
  i14 = 0;
  STACKTOP = i3;
  return i14 | 0;
 }
 __ZNK7WebCore7DecimaldvERKS0_(i10, i4, i16);
 __ZNK7WebCore7Decimal5roundEv(i9, i10);
 __ZNK7WebCore7DecimalmlERKS0_(i8, i16, i9);
 __ZNK7WebCore7DecimalmiERKS0_(i11, i4, i8);
 __ZNK7WebCore7Decimal3absEv(i7, i11);
 if (!(HEAP8[H_BASE + 24 | 0] | 0)) {
  i11 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore7DecimalC1ENS0_4SignEiy(i11, 0, 0, 16777216, 0);
  HEAP32[H_BASE + 48 >> 2] = i11;
  HEAP8[H_BASE + 24 | 0] = 1;
 }
 if ((HEAP32[i1 + 108 >> 2] | 0) == 0) {
  __ZNK7WebCore7DecimaldvERKS0_(i12, i16, HEAP32[H_BASE + 48 >> 2] | 0);
 } else {
  __ZN7WebCore7DecimalC1Ei(i12, 0);
 }
 if (!(__ZNK7WebCore7DecimalltERKS0_(i12, i7) | 0)) {
  i14 = 0;
  STACKTOP = i3;
  return i14 | 0;
 }
 __ZNK7WebCore7DecimalmiERKS0_(i13, i16, i12);
 i14 = __ZNK7WebCore7DecimalltERKS0_(i7, i13) | 0;
 STACKTOP = i3;
 return i14 | 0;
}
function __ZNK7WebCore9StepRange10clampValueERKNS_7DecimalE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i4 + 48 | 0;
 i8 = i4 + 72 | 0;
 i9 = i4 + 96 | 0;
 i10 = i4 + 120 | 0;
 i11 = i4 + 144 | 0;
 i12 = i2 + 24 | 0;
 i13 = i2 | 0;
 i14 = __ZNK7WebCore7DecimalltERKS0_(i13, i3) | 0;
 i15 = i14 ? i13 : i3;
 i3 = __ZNK7WebCore7DecimalltERKS0_(i12, i15) | 0;
 __ZN7WebCore7DecimalC1ERKS0_(i9, i3 ? i15 : i12);
 if ((HEAP8[i2 + 112 | 0] & 1) == 0) {
  __ZN7WebCore7DecimalC1ERKS0_(i1, i9);
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore7DecimalmiERKS0_(i6, i9, i12);
 i9 = i2 + 48 | 0;
 __ZNK7WebCore7DecimaldvERKS0_(i7, i6, i9);
 __ZNK7WebCore7Decimal5roundEv(i8, i7);
 __ZNK7WebCore7DecimalmlERKS0_(i5, i8, i9);
 __ZNK7WebCore7DecimalplERKS0_(i10, i12, i5);
 if (__ZNK7WebCore7DecimalgtERKS0_(i10, i13) | 0) {
  __ZNK7WebCore7DecimalmiERKS0_(i11, i10, i9);
 } else {
  __ZN7WebCore7DecimalC1ERKS0_(i11, i10);
 }
 __ZN7WebCore7DecimalC1ERKS0_(i1, i11);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9StepRange17alignValueForStepERKNS_7DecimalES3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i6 = i5 | 0;
 i7 = i5 + 24 | 0;
 i8 = i5 + 48 | 0;
 i9 = i5 + 72 | 0;
 if (HEAP8[H_BASE + 16 | 0] | 0) {
  i10 = HEAP32[H_BASE + 40 >> 2] | 0;
 } else {
  i11 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore7DecimalC1ENS0_4SignEiy(i11, 0, 21, 1, 0);
  HEAP32[H_BASE + 40 >> 2] = i11;
  HEAP8[H_BASE + 16 | 0] = 1;
  i10 = i11;
 }
 if (__ZNK7WebCore7DecimalgeERKS0_(i4, i10) | 0) {
  __ZN7WebCore7DecimalC1ERKS0_(i1, i4);
  STACKTOP = i5;
  return;
 }
 if (__ZNK7WebCore9StepRange12stepMismatchERKNS_7DecimalE(i2, i3) | 0) {
  __ZN7WebCore7DecimalC1ERKS0_(i1, i4);
  STACKTOP = i5;
  return;
 } else {
  i3 = i2 + 72 | 0;
  __ZNK7WebCore7DecimalmiERKS0_(i7, i4, i3);
  i4 = i2 + 48 | 0;
  __ZNK7WebCore7DecimaldvERKS0_(i8, i7, i4);
  __ZNK7WebCore7Decimal5roundEv(i9, i8);
  __ZNK7WebCore7DecimalmlERKS0_(i6, i9, i4);
  __ZNK7WebCore7DecimalplERKS0_(i1, i3, i6);
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore9StepRangeC2ERKNS_7DecimalES3_S3_S3_RKNS0_15StepDescriptionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0;
 __ZN7WebCore7DecimalC1ERKS0_(i1 | 0, i4);
 __ZN7WebCore7DecimalC1ERKS0_(i1 + 24 | 0, i3);
 i3 = i1 + 48 | 0;
 i4 = i5 + 12 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) == 2 | (i7 | 0) == 0) {
  __ZN7WebCore7DecimalC1Ei(i3, 1);
 } else {
  __ZN7WebCore7DecimalC1ERKS0_(i3, i5);
 }
 i5 = i1 + 72 | 0;
 i3 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i3 | 0) == 2 | (i3 | 0) == 0) {
  __ZN7WebCore7DecimalC1Ei(i5, 1);
 } else {
  __ZN7WebCore7DecimalC1ERKS0_(i5, i2);
 }
 i2 = i1 + 96 | 0;
 i5 = i6;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP8[i1 + 112 | 0] = (i5 | 0) != 2 & (i5 | 0) != 0 & 1;
 return;
}
function __ZN7WebCore9StepRangeC1ERKNS_7DecimalES3_S3_S3_RKNS0_15StepDescriptionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0;
 __ZN7WebCore7DecimalC1ERKS0_(i1 | 0, i4);
 __ZN7WebCore7DecimalC1ERKS0_(i1 + 24 | 0, i3);
 i3 = i1 + 48 | 0;
 i4 = i5 + 12 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) == 2 | (i7 | 0) == 0) {
  __ZN7WebCore7DecimalC1Ei(i3, 1);
 } else {
  __ZN7WebCore7DecimalC1ERKS0_(i3, i5);
 }
 i5 = i1 + 72 | 0;
 i3 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i3 | 0) == 2 | (i3 | 0) == 0) {
  __ZN7WebCore7DecimalC1Ei(i5, 1);
 } else {
  __ZN7WebCore7DecimalC1ERKS0_(i5, i2);
 }
 i2 = i1 + 96 | 0;
 i5 = i6;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP8[i1 + 112 | 0] = (i5 | 0) != 2 & (i5 | 0) != 0 & 1;
 return;
}
function __ZN7WebCore9StepRangeC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 __ZN7WebCore7DecimalC1ERKS0_(i1 | 0, i2 | 0);
 __ZN7WebCore7DecimalC1ERKS0_(i1 + 24 | 0, i2 + 24 | 0);
 __ZN7WebCore7DecimalC1ERKS0_(i1 + 48 | 0, i2 + 48 | 0);
 __ZN7WebCore7DecimalC1ERKS0_(i1 + 72 | 0, i2 + 72 | 0);
 i3 = i1 + 96 | 0;
 i4 = i2 + 96 | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 HEAP8[i1 + 112 | 0] = HEAP8[i2 + 112 | 0] & 1;
 return;
}
function __ZN7WebCore9StepRangeC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 __ZN7WebCore7DecimalC1ERKS0_(i1 | 0, i2 | 0);
 __ZN7WebCore7DecimalC1ERKS0_(i1 + 24 | 0, i2 + 24 | 0);
 __ZN7WebCore7DecimalC1ERKS0_(i1 + 48 | 0, i2 + 48 | 0);
 __ZN7WebCore7DecimalC1ERKS0_(i1 + 72 | 0, i2 + 72 | 0);
 i3 = i1 + 96 | 0;
 i4 = i2 + 96 | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 HEAP8[i1 + 112 | 0] = HEAP8[i2 + 112 | 0] & 1;
 return;
}
function __ZNK7WebCore9StepRange11roundByStepERKNS_7DecimalES3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i6 = i5 | 0;
 i7 = i5 + 24 | 0;
 i8 = i5 + 48 | 0;
 i9 = i5 + 72 | 0;
 __ZNK7WebCore7DecimalmiERKS0_(i7, i3, i4);
 i3 = i2 + 48 | 0;
 __ZNK7WebCore7DecimaldvERKS0_(i8, i7, i3);
 __ZNK7WebCore7Decimal5roundEv(i9, i8);
 __ZNK7WebCore7DecimalmlERKS0_(i6, i9, i3);
 __ZNK7WebCore7DecimalplERKS0_(i1, i4, i6);
 STACKTOP = i5;
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
function __ZNK7WebCore9StepRange15acceptableErrorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if (!(HEAP8[H_BASE + 24 | 0] | 0)) {
  i3 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore7DecimalC1ENS0_4SignEiy(i3, 0, 0, 16777216, 0);
  HEAP32[H_BASE + 48 >> 2] = i3;
  HEAP8[H_BASE + 24 | 0] = 1;
 }
 if ((HEAP32[i2 + 108 >> 2] | 0) == 0) {
  __ZNK7WebCore7DecimaldvERKS0_(i1, i2 + 48 | 0, HEAP32[H_BASE + 48 >> 2] | 0);
  return;
 } else {
  __ZN7WebCore7DecimalC1Ei(i1, 0);
  return;
 }
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
function __ZN7WebCore9StepRangeC2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7DecimalC1Ei(i1 | 0, 100);
 __ZN7WebCore7DecimalC1Ei(i1 + 24 | 0, 0);
 __ZN7WebCore7DecimalC1Ei(i1 + 48 | 0, 1);
 __ZN7WebCore7DecimalC1Ei(i1 + 72 | 0, 0);
 HEAP32[i1 + 96 >> 2] = 1;
 HEAP32[i1 + 100 >> 2] = 0;
 HEAP32[i1 + 104 >> 2] = 1;
 HEAP32[i1 + 108 >> 2] = 0;
 HEAP8[i1 + 112 | 0] = 0;
 return;
}
function __ZN7WebCore9StepRangeC1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7DecimalC1Ei(i1 | 0, 100);
 __ZN7WebCore7DecimalC1Ei(i1 + 24 | 0, 0);
 __ZN7WebCore7DecimalC1Ei(i1 + 48 | 0, 1);
 __ZN7WebCore7DecimalC1Ei(i1 + 72 | 0, 0);
 HEAP32[i1 + 96 >> 2] = 1;
 HEAP32[i1 + 100 >> 2] = 0;
 HEAP32[i1 + 104 >> 2] = 1;
 HEAP32[i1 + 108 >> 2] = 0;
 HEAP8[i1 + 112 | 0] = 0;
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
function b4(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(4);
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore9StepRangeC2Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore9StepRangeC2ERKS0_,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_viiiiii = [b4,b4,__ZN7WebCore9StepRangeC2ERKNS_7DecimalES3_S3_S3_RKNS0_15StepDescriptionE,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore9StepRange17alignValueForStepERKNS_7DecimalES3_","__ZN7WebCore9StepRangeC2Ev","__ZNK7WebCore9StepRange15acceptableErrorEv","_memset","__ZN7WebCore9StepRangeC2ERKS0_","__ZNK7WebCore9StepRange11roundByStepERKNS_7DecimalES3_","_memcpy","_strlen","__ZNK7WebCore9StepRange12stepMismatchERKNS_7DecimalE","__ZN7WebCore9StepRangeC2ERKNS_7DecimalES3_S3_S3_RKNS0_15StepDescriptionE","__ZN7WebCore9StepRange9parseStepENS_15AnyStepHandlingERKNS0_15StepDescriptionERKN3WTF6StringE","__ZNK7WebCore9StepRange10clampValueERKNS_7DecimalE"]

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
H_BASE = parentModule["_malloc"](96 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 96;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore21IDBIndexWriterLevelDBC1ERKNS_16IDBIndexMetadataERKN3WTF6VectorINS4_6RefPtrINS_6IDBKeyEEELj0ENS4_15CrashOnOverflowEEE;
/* memory initializer */ allocate([85,110,97,98,108,101,32,116,111,32,97,100,100,32,107,101,121,32,116,111,32,105,110,100,101,120,32,39,37,115,39,58,32,97,116,32,108,101,97,115,116,32,111,110,101,32,107,101,121,32,100,111,101,115,32,110,111,116,32,115,97,116,105,115,102,121,32,116,104,101,32,117,110,105,113,117,101,110,101,115,115,32,114,101,113,117,105,114,101,109,101,110,116,115,46,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore21IDBIndexWriterLevelDB15verifyIndexKeysERNS_22IDBBackingStoreLevelDBERNS_33IDBBackingStoreTransactionLevelDBExxxRbPKNS_6IDBKeyEPN3WTF6StringE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
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
 var i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = i13 | 0;
 i15 = i13 + 8 | 0;
 HEAP8[i10] = 0;
 i16 = i1 + 56 | 0;
 i17 = i1 + 48 | 0;
 i18 = 0;
 while (1) {
  if (i18 >>> 0 >= (HEAP32[i16 >> 2] | 0) >>> 0) {
   i19 = 20;
   break;
  }
  if (!(__ZNK7WebCore21IDBIndexWriterLevelDB16addingKeyAllowedERNS_22IDBBackingStoreLevelDBERNS_33IDBBackingStoreTransactionLevelDBExxxPKNS_6IDBKeyES7_Rb(i1, i2, i3, i4, i5, i6, i7, i8, i9, HEAP32[(HEAP32[i17 >> 2] | 0) + (i18 << 2) >> 2] | 0, i11, i10) | 0)) {
   i20 = 0;
   i19 = 22;
   break;
  }
  if ((HEAP8[i10] & 1) == 0) {
   i19 = 5;
   break;
  } else {
   i18 = i18 + 1 | 0;
  }
 }
 if ((i19 | 0) == 5) {
  if ((i12 | 0) == 0) {
   i20 = 1;
   STACKTOP = i13;
   return i20 | 0;
  }
  __ZNK3WTF6String4utf8ENS_14ConversionModeE(i15, i1 + 8 | 0, 0);
  i1 = i15 | 0;
  i15 = HEAP32[i1 >> 2] | 0;
  if ((i15 | 0) == 0) {
   i21 = 0;
  } else {
   i21 = i15 + 8 | 0;
  }
  __ZN3WTF6String6formatEPKcz(i14, H_BASE + 8 | 0, (i15 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i15 >> 2] = i21, i15) | 0);
  STACKTOP = i15;
  i15 = i14 | 0;
  i14 = HEAP32[i15 >> 2] | 0;
  HEAP32[i15 >> 2] = 0;
  i21 = i12 | 0;
  i12 = HEAP32[i21 >> 2] | 0;
  HEAP32[i21 >> 2] = i14;
  do {
   if ((i12 | 0) != 0) {
    i14 = i12 | 0;
    i21 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
    if ((i21 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i12);
     break;
    } else {
     HEAP32[i14 >> 2] = i21;
     break;
    }
   }
  } while (0);
  i12 = HEAP32[i15 >> 2] | 0;
  do {
   if ((i12 | 0) != 0) {
    i15 = i12 | 0;
    i21 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
    if ((i21 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i12);
     break;
    } else {
     HEAP32[i15 >> 2] = i21;
     break;
    }
   }
  } while (0);
  i12 = HEAP32[i1 >> 2] | 0;
  if ((i12 | 0) == 0) {
   i20 = 1;
   STACKTOP = i13;
   return i20 | 0;
  }
  i1 = i12 | 0;
  i21 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i21 | 0) == 0) {
   __ZN3WTF8fastFreeEPv(i12);
   i20 = 1;
   STACKTOP = i13;
   return i20 | 0;
  } else {
   HEAP32[i1 >> 2] = i21;
   i20 = 1;
   STACKTOP = i13;
   return i20 | 0;
  }
 } else if ((i19 | 0) == 20) {
  HEAP8[i10] = 1;
  i20 = 1;
  STACKTOP = i13;
  return i20 | 0;
 } else if ((i19 | 0) == 22) {
  STACKTOP = i13;
  return i20 | 0;
 }
 return 0;
}
function __ZN7WebCore21IDBIndexWriterLevelDBC2ERKNS_16IDBIndexMetadataERKN3WTF6VectorINS4_6RefPtrINS_6IDBKeyEEELj0ENS4_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 HEAP32[i1 >> 2] = 1;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 16 | 0;
 i4 = i2 + 8 | 0;
 i6 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i6;
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 16 >> 2];
 i6 = HEAP32[i2 + 20 >> 2] | 0;
 HEAP32[i1 + 28 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i5 = i6 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = HEAP32[i2 + 28 >> 2] | 0;
 i6 = i2 + 32 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 i7 = i1 + 32 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i1 + 36 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   if (i5 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i4 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
   HEAP32[i8 >> 2] = i4 >>> 2;
   i9 = __ZN3WTF10fastMallocEj(i4) | 0;
   i4 = i9;
   HEAP32[i7 >> 2] = i4;
   if ((i9 | 0) == 0) {
    break;
   }
   i9 = HEAP32[i2 + 24 >> 2] | 0;
   i10 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (i10 << 2) | 0;
   if ((i10 | 0) == 0) {
    break;
   } else {
    i12 = i9;
    i13 = i4;
   }
   while (1) {
    i4 = HEAP32[i12 >> 2] | 0;
    HEAP32[i13 >> 2] = i4;
    if ((i4 | 0) != 0) {
     i9 = i4 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    }
    i9 = i12 + 4 | 0;
    if ((i9 | 0) == (i11 | 0)) {
     break;
    } else {
     i12 = i9;
     i13 = i13 + 4 | 0;
    }
   }
  }
 } while (0);
 HEAP8[i1 + 44 | 0] = HEAP8[i2 + 36 | 0] & 1;
 HEAP8[i1 + 45 | 0] = HEAP8[i2 + 37 | 0] & 1;
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 i13 = i3 + 8 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 i6 = i1 + 48 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 52 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 56 >> 2] = i12;
 if ((i2 | 0) == 0) {
  return;
 }
 if (i2 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i12 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
 HEAP32[i7 >> 2] = i12 >>> 2;
 i7 = __ZN3WTF10fastMallocEj(i12) | 0;
 i12 = i7;
 HEAP32[i6 >> 2] = i12;
 if ((i7 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i13 >> 2] | 0;
 i13 = i7 + (i3 << 2) | 0;
 if ((i3 | 0) == 0) {
  return;
 } else {
  i14 = i7;
  i15 = i12;
 }
 while (1) {
  i12 = HEAP32[i14 >> 2] | 0;
  HEAP32[i15 >> 2] = i12;
  if ((i12 | 0) != 0) {
   i7 = i12 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  }
  i7 = i14 + 4 | 0;
  if ((i7 | 0) == (i13 | 0)) {
   break;
  } else {
   i14 = i7;
   i15 = i15 + 4 | 0;
  }
 }
 return;
}
function __ZN7WebCore21IDBIndexWriterLevelDBC1ERKNS_16IDBIndexMetadataERKN3WTF6VectorINS4_6RefPtrINS_6IDBKeyEEELj0ENS4_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 HEAP32[i1 >> 2] = 1;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 16 | 0;
 i4 = i2 + 8 | 0;
 i6 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i6;
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 16 >> 2];
 i6 = HEAP32[i2 + 20 >> 2] | 0;
 HEAP32[i1 + 28 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i5 = i6 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = HEAP32[i2 + 28 >> 2] | 0;
 i6 = i2 + 32 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 i7 = i1 + 32 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i1 + 36 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   if (i5 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i4 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
   HEAP32[i8 >> 2] = i4 >>> 2;
   i9 = __ZN3WTF10fastMallocEj(i4) | 0;
   i4 = i9;
   HEAP32[i7 >> 2] = i4;
   if ((i9 | 0) == 0) {
    break;
   }
   i9 = HEAP32[i2 + 24 >> 2] | 0;
   i10 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (i10 << 2) | 0;
   if ((i10 | 0) == 0) {
    break;
   } else {
    i12 = i9;
    i13 = i4;
   }
   while (1) {
    i4 = HEAP32[i12 >> 2] | 0;
    HEAP32[i13 >> 2] = i4;
    if ((i4 | 0) != 0) {
     i9 = i4 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    }
    i9 = i12 + 4 | 0;
    if ((i9 | 0) == (i11 | 0)) {
     break;
    } else {
     i12 = i9;
     i13 = i13 + 4 | 0;
    }
   }
  }
 } while (0);
 HEAP8[i1 + 44 | 0] = HEAP8[i2 + 36 | 0] & 1;
 HEAP8[i1 + 45 | 0] = HEAP8[i2 + 37 | 0] & 1;
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 i13 = i3 + 8 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 i6 = i1 + 48 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 52 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 56 >> 2] = i12;
 if ((i2 | 0) == 0) {
  return;
 }
 if (i2 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i12 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
 HEAP32[i7 >> 2] = i12 >>> 2;
 i7 = __ZN3WTF10fastMallocEj(i12) | 0;
 i12 = i7;
 HEAP32[i6 >> 2] = i12;
 if ((i7 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i13 >> 2] | 0;
 i13 = i7 + (i3 << 2) | 0;
 if ((i3 | 0) == 0) {
  return;
 } else {
  i14 = i7;
  i15 = i12;
 }
 while (1) {
  i12 = HEAP32[i14 >> 2] | 0;
  HEAP32[i15 >> 2] = i12;
  if ((i12 | 0) != 0) {
   i7 = i12 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  }
  i7 = i14 + 4 | 0;
  if ((i7 | 0) == (i13 | 0)) {
   break;
  } else {
   i14 = i7;
   i15 = i15 + 4 | 0;
  }
 }
 return;
}
function __ZNK7WebCore21IDBIndexWriterLevelDB16addingKeyAllowedERNS_22IDBBackingStoreLevelDBERNS_33IDBBackingStoreTransactionLevelDBExxxPKNS_6IDBKeyES7_Rb(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
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
 var i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = i13 | 0;
 i15 = i13 + 8 | 0;
 HEAP8[i12] = 0;
 if ((HEAP8[i1 + 44 | 0] & 1) == 0) {
  HEAP8[i12] = 1;
  i16 = 1;
  STACKTOP = i13;
  return i16 | 0;
 }
 i1 = i14 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP8[i15] = 0;
 do {
  if (__ZN7WebCore22IDBBackingStoreLevelDB16keyExistsInIndexERNS_33IDBBackingStoreTransactionLevelDBExxxRKNS_6IDBKeyERN3WTF6RefPtrIS3_EERb(i2, i3, i4, i5, i6, i7, i8, i9, i10, i14, i15) | 0) {
   if ((HEAP8[i15] & 1) != 0) {
    if ((i11 | 0) == 0) {
     i17 = 1;
     break;
    }
    if (!(__ZNK7WebCore6IDBKey7isEqualEPKS0_(HEAP32[i1 >> 2] | 0, i11) | 0)) {
     i17 = 1;
     break;
    }
   }
   HEAP8[i12] = 1;
   i17 = 1;
  } else {
   i17 = 0;
  }
 } while (0);
 i12 = HEAP32[i1 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i16 = i17;
  STACKTOP = i13;
  return i16 | 0;
 }
 i1 = i12 | 0;
 i11 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) == 0) {
  __ZN7WebCore6IDBKeyD1Ev(i12);
  __ZN3WTF8fastFreeEPv(i12);
  i16 = i17;
  STACKTOP = i13;
  return i16 | 0;
 } else {
  HEAP32[i1 >> 2] = i11;
  i16 = i17;
  STACKTOP = i13;
  return i16 | 0;
 }
 return 0;
}
function __ZNK7WebCore21IDBIndexWriterLevelDB14writeIndexKeysEPKNS_19IDBRecordIdentifierERNS_22IDBBackingStoreLevelDBERNS_33IDBBackingStoreTransactionLevelDBExx(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i9 = i1 + 16 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 i9 = i1 + 56 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  return;
 }
 i12 = i1 + 48 | 0;
 i1 = 0;
 while (1) {
  __ZN7WebCore22IDBBackingStoreLevelDB21putIndexDataForRecordERNS_33IDBBackingStoreTransactionLevelDBExxxRKNS_6IDBKeyEPKNS_19IDBRecordIdentifierE(i3, i4, i5, i6, i7, i8, i10, i11, HEAP32[(HEAP32[i12 >> 2] | 0) + (i1 << 2) >> 2] | 0, i2) | 0;
  i1 = i1 + 1 | 0;
  if (i1 >>> 0 >= (HEAP32[i9 >> 2] | 0) >>> 0) {
   break;
  }
 }
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
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
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
}
function b2(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(2);
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_ii = [b1,b1];
  var FUNCTION_TABLE_viii = [b2,b2,__ZN7WebCore21IDBIndexWriterLevelDBC2ERKNS_16IDBIndexMetadataERKN3WTF6VectorINS4_6RefPtrINS_6IDBKeyEEELj0ENS4_15CrashOnOverflowEEE,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore21IDBIndexWriterLevelDB15verifyIndexKeysERNS_22IDBBackingStoreLevelDBERNS_33IDBBackingStoreTransactionLevelDBExxxRbPKNS_6IDBKeyEPN3WTF6StringE","_memset","__ZNK7WebCore21IDBIndexWriterLevelDB14writeIndexKeysEPKNS_19IDBRecordIdentifierERNS_22IDBBackingStoreLevelDBERNS_33IDBBackingStoreTransactionLevelDBExx","__ZN7WebCore21IDBIndexWriterLevelDBC2ERKNS_16IDBIndexMetadataERKN3WTF6VectorINS4_6RefPtrINS_6IDBKeyEEELj0ENS4_15CrashOnOverflowEEE","_memcpy","__ZNK7WebCore21IDBIndexWriterLevelDB16addingKeyAllowedERNS_22IDBBackingStoreLevelDBERNS_33IDBBackingStoreTransactionLevelDBExxxPKNS_6IDBKeyES7_Rb"]

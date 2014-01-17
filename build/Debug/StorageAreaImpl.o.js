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
H_BASE = parentModule["_malloc"](112 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 112;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore15StorageAreaImplD1Ev;
var __ZN7WebCore15StorageAreaImplC1EPS0_;
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
var Math_min = Math.min;
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_did(index,a1,a2) {
  try {
    return Module["dynCall_did"](index,a1,a2);
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
  var __ZTVN7WebCore5TimerINS_15StorageAreaImplEEE=(H_BASE+8)|0;
  var __ZTVN7WebCore15StorageAreaImplE=(H_BASE+40)|0;
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
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
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
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore15StorageAreaImpl6createENS_11StorageTypeEN3WTF10PassRefPtrINS_14SecurityOriginEEENS3_INS_18StorageSyncManagerEEEj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = __ZN3WTF10fastMallocEj(88) | 0;
 i13 = i12;
 i14 = i3 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 i14 = i4 | 0;
 i4 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 i14 = i12 + 4 | 0;
 HEAP32[i14 >> 2] = 1;
 HEAP32[i12 >> 2] = H_BASE + 48;
 HEAP32[i12 + 8 >> 2] = i2;
 i2 = i12 + 12 | 0;
 HEAP32[i2 >> 2] = i3;
 __ZN7WebCore10StorageMap6createEj(i7, i5);
 i5 = i7 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i12 + 16 >> 2] = i7;
 i7 = i12 + 20 | 0;
 HEAP32[i7 >> 2] = 0;
 i5 = i12 + 24 | 0;
 HEAP32[i5 >> 2] = i4;
 HEAP32[i12 + 28 >> 2] = 0;
 i4 = i12 + 32 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i4);
 HEAP32[i4 >> 2] = H_BASE + 16;
 HEAP32[i12 + 76 >> 2] = i13;
 i4 = i12 + 80 | 0;
 HEAP32[i4 >> 2] = F_BASE_vii + 6;
 HEAP32[i4 + 4 >> 2] = 0;
 __ZN7WebCore14StorageTracker7trackerEv() | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i15 = i1 | 0;
  HEAP32[i15 >> 2] = i13;
  STACKTOP = i6;
  return;
 }
 i5 = i9 | 0;
 HEAP32[i5 >> 2] = i4;
 i3 = i4 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = i10 | 0;
 HEAP32[i3 >> 2] = i13;
 if ((i12 | 0) != 0) {
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 }
 __ZNK7WebCore14SecurityOrigin18databaseIdentifierEv(i11, HEAP32[i2 >> 2] | 0);
 __ZN7WebCore15StorageAreaSync6createEN3WTF10PassRefPtrINS_18StorageSyncManagerEEENS2_INS_15StorageAreaImplEEERKNS1_6StringE(i8, i9, i10, i11);
 i10 = i8 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i9 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 do {
  if ((i9 | 0) != 0) {
   i8 = i9 | 0;
   if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore15StorageAreaSyncD1Ev(i9);
   __ZN3WTF8fastFreeEPv(i9);
  }
 } while (0);
 i9 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i10 = i9 | 0;
   if (((tempValue = HEAP32[i10 >> 2] | 0, HEAP32[i10 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore15StorageAreaSyncD1Ev(i9);
   __ZN3WTF8fastFreeEPv(i9);
  }
 } while (0);
 i9 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i11 = i9 | 0;
   i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i11 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i3 = i9 + 4 | 0;
   i10 = i3 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i10 >> 2] = i11;
    break;
   }
   i11 = i3 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 31](i11);
  }
 } while (0);
 i9 = HEAP32[i5 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i15 = i1 | 0;
  HEAP32[i15 >> 2] = i13;
  STACKTOP = i6;
  return;
 }
 i5 = i9 | 0;
 i11 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) == 0) {
  __ZN7WebCore18StorageSyncManagerD1Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
  i15 = i1 | 0;
  HEAP32[i15 >> 2] = i13;
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i5 >> 2] = i11;
  i15 = i1 | 0;
  HEAP32[i15 >> 2] = i13;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore15StorageAreaImpl5clearEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 + 20 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  __ZN7WebCore15StorageAreaSync24blockUntilImportCompleteEv(i9);
 }
 i9 = i1 + 16 | 0;
 if ((__ZNK7WebCore10StorageMap6lengthEv(HEAP32[i9 >> 2] | 0) | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore10StorageMap6createEj(i4, HEAP32[(HEAP32[i9 >> 2] | 0) + 36 >> 2] | 0);
 i10 = i4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i4;
 do {
  if ((i11 | 0) != 0) {
   __ZN3WTF10RefCountedIN7WebCore10StorageMapEE5derefEv(i11 | 0);
   i4 = HEAP32[i10 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN3WTF10RefCountedIN7WebCore10StorageMapEE5derefEv(i4 | 0);
  }
 } while (0);
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) != 0) {
  __ZN7WebCore15StorageAreaSync13scheduleClearEv(i10);
 }
 i10 = i5 | 0;
 HEAP32[i10 >> 2] = 0;
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = 0;
 i11 = i7 | 0;
 HEAP32[i11 >> 2] = 0;
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  __ZN7WebCore22StorageEventDispatcher26dispatchLocalStorageEventsERKN3WTF6StringES4_S4_PNS_14SecurityOriginEPNS_5FrameE(i5, i6, i7, i4, i2);
 } else {
  __ZN7WebCore22StorageEventDispatcher28dispatchSessionStorageEventsERKN3WTF6StringES4_S4_PNS_14SecurityOriginEPNS_5FrameE(i5, i6, i7, i4, i2);
 }
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i11 = i2 | 0;
   i4 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i11 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = i2 | 0;
   i4 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i8 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i10 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = i2 | 0;
 i4 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i10 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore15StorageAreaImpl10removeItemEPNS_5FrameERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i1 + 20 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) != 0) {
  __ZN7WebCore15StorageAreaSync24blockUntilImportCompleteEv(i10);
 }
 i10 = i5 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i1 + 16 | 0;
 __ZN7WebCore10StorageMap10removeItemERKN3WTF6StringERS2_(i6, HEAP32[i11 >> 2] | 0, i3, i5);
 i12 = i6 | 0;
 i6 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i6;
   if ((i12 | 0) == 0) {
    break;
   }
   __ZN3WTF10RefCountedIN7WebCore10StorageMapEE5derefEv(i12 | 0);
  }
 } while (0);
 if ((HEAP32[i10 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i7 | 0;
   HEAP32[i9 >> 2] = 0;
   __ZN7WebCore15StorageAreaSync19scheduleItemForSyncERKN3WTF6StringES4_(i6, i3, i7);
   i11 = HEAP32[i9 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i9 = i11 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i9 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i7 = i8 | 0;
 HEAP32[i7 >> 2] = 0;
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  __ZN7WebCore22StorageEventDispatcher26dispatchLocalStorageEventsERKN3WTF6StringES4_S4_PNS_14SecurityOriginEPNS_5FrameE(i3, i5, i8, i6, i2);
 } else {
  __ZN7WebCore22StorageEventDispatcher28dispatchSessionStorageEventsERKN3WTF6StringES4_S4_PNS_14SecurityOriginEPNS_5FrameE(i3, i5, i8, i6, i2);
 }
 i2 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i7 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i10 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i10 = i2 | 0;
 i6 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore15StorageAreaImpl7setItemEPNS_5FrameERKN3WTF6StringES6_Rb(i1, i2, i3, i4, i5) {
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
 i9 = i1 + 20 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) != 0) {
  __ZN7WebCore15StorageAreaSync24blockUntilImportCompleteEv(i10);
 }
 i10 = i7 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i1 + 16 | 0;
 __ZN7WebCore10StorageMap7setItemERKN3WTF6StringES4_RS2_Rb(i8, HEAP32[i11 >> 2] | 0, i3, i4, i7, i5);
 i12 = i8 | 0;
 i8 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 do {
  if ((i8 | 0) != 0) {
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i8;
   if ((i12 | 0) == 0) {
    break;
   }
   __ZN3WTF10RefCountedIN7WebCore10StorageMapEE5derefEv(i12 | 0);
  }
 } while (0);
 do {
  if ((HEAP8[i5] & 1) == 0) {
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i10 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0) {
    break;
   }
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) != 0) {
    __ZN7WebCore15StorageAreaSync19scheduleItemForSyncERKN3WTF6StringES4_(i8, i3, i4);
   }
   i8 = HEAP32[i1 + 12 >> 2] | 0;
   if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
    __ZN7WebCore22StorageEventDispatcher26dispatchLocalStorageEventsERKN3WTF6StringES4_S4_PNS_14SecurityOriginEPNS_5FrameE(i3, i7, i4, i8, i2);
    break;
   } else {
    __ZN7WebCore22StorageEventDispatcher28dispatchSessionStorageEventsERKN3WTF6StringES4_S4_PNS_14SecurityOriginEPNS_5FrameE(i3, i7, i4, i8, i2);
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i10 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i10 = i2 | 0;
 i4 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i10 >> 2] = i4;
  STACKTOP = i6;
  return;
 }
}
function __ZN3WTF10RefCountedIN7WebCore10StorageMapEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = HEAP32[i1 + 8 >> 2] | 0;
  if ((i2 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = i3 + (i4 << 3) | 0;
    do {
     if ((HEAP32[i5 >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i4 << 3) + 4 >> 2] | 0;
      do {
       if ((i6 | 0) != 0) {
        i7 = i6 | 0;
        i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
        if ((i8 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i6);
         break;
        } else {
         HEAP32[i7 >> 2] = i8;
         break;
        }
       }
      } while (0);
      i6 = HEAP32[i5 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i8 = i6 | 0;
      i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i8 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i2 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore15StorageAreaImplD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 __ZN7WebCore9TimerBaseD2Ev(i1 + 32 | 0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore18StorageSyncManagerD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore15StorageAreaSyncD1Ev(i2);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore10StorageMapEE5derefEv(i2 | 0);
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore15StorageAreaImplD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 __ZN7WebCore9TimerBaseD2Ev(i1 + 32 | 0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore18StorageSyncManagerD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore15StorageAreaSyncD1Ev(i2);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore10StorageMapEE5derefEv(i2 | 0);
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore15StorageAreaImpl22clearForOriginDeletionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 20 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore15StorageAreaSync24blockUntilImportCompleteEv(i5);
 }
 i5 = i1 + 16 | 0;
 do {
  if ((__ZNK7WebCore10StorageMap6lengthEv(HEAP32[i5 >> 2] | 0) | 0) != 0) {
   __ZN7WebCore10StorageMap6createEj(i3, HEAP32[(HEAP32[i5 >> 2] | 0) + 36 >> 2] | 0);
   i1 = i3 | 0;
   i6 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i7 | 0) == 0) {
    break;
   }
   __ZN3WTF10RefCountedIN7WebCore10StorageMapEE5derefEv(i7 | 0);
   i7 = HEAP32[i1 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   __ZN3WTF10RefCountedIN7WebCore10StorageMapEE5derefEv(i7 | 0);
  }
 } while (0);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore15StorageAreaSync13scheduleClearEv(i5);
 __ZN7WebCore15StorageAreaSync21scheduleCloseDatabaseEv(HEAP32[i4 >> 2] | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14SecurityOriginD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore15StorageAreaImpl4copyEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = __ZN3WTF10fastMallocEj(88) | 0;
 i4 = i3;
 HEAP32[i3 + 4 >> 2] = 1;
 HEAP32[i3 >> 2] = H_BASE + 48;
 HEAP32[i3 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 i5 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i3 + 12 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue + 1, tempValue;
 }
 i6 = HEAP32[i2 + 16 >> 2] | 0;
 HEAP32[i3 + 16 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i5 = i6 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 HEAP32[i3 + 20 >> 2] = 0;
 i5 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i3 + 24 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 HEAP32[i3 + 28 >> 2] = 0;
 i2 = i3 + 32 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 16;
 HEAP32[i3 + 76 >> 2] = i4;
 i2 = i3 + 80 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 6;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP32[i1 >> 2] = i4;
 return;
}
function __ZN7WebCore15StorageAreaImplC2EPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 48;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 i3 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue + 1, tempValue;
 }
 i4 = HEAP32[i2 + 16 >> 2] | 0;
 HEAP32[i1 + 16 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 20 >> 2] = 0;
 i3 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 28 >> 2] = 0;
 i2 = i1 + 32 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 16;
 HEAP32[i1 + 76 >> 2] = i1;
 i2 = i1 + 80 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 6;
 HEAP32[i2 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore15StorageAreaImplC1EPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 48;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 i3 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue + 1, tempValue;
 }
 i4 = HEAP32[i2 + 16 >> 2] | 0;
 HEAP32[i1 + 16 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 20 >> 2] = 0;
 i3 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 28 >> 2] = 0;
 i2 = i1 + 32 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 16;
 HEAP32[i1 + 76 >> 2] = i1;
 i2 = i1 + 80 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 6;
 HEAP32[i2 + 4 >> 2] = 0;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vi + 10;
}
function __ZN7WebCore15StorageAreaImpl20dispatchStorageEventERKN3WTF6StringES4_S4_PNS_5FrameE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  __ZN7WebCore22StorageEventDispatcher26dispatchLocalStorageEventsERKN3WTF6StringES4_S4_PNS_14SecurityOriginEPNS_5FrameE(i2, i3, i4, i6, i5);
  return;
 } else {
  __ZN7WebCore22StorageEventDispatcher28dispatchSessionStorageEventsERKN3WTF6StringES4_S4_PNS_14SecurityOriginEPNS_5FrameE(i2, i3, i4, i6, i5);
  return;
 }
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
function __ZN7WebCore15StorageAreaImpl19closeDatabaseIfIdleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (+HEAPF64[i1 + 40 >> 3] == +0) {
  return;
 }
 __ZN7WebCore9TimerBase4stopEv(i1 + 32 | 0);
 i2 = i1 + 20 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore15StorageAreaSync24blockUntilImportCompleteEv(i1);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore15StorageAreaSync21scheduleCloseDatabaseEv(i1);
 return;
}
function __ZN7WebCore5TimerINS_15StorageAreaImplEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 7](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 7](i4, i1);
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
function __ZN7WebCore15StorageAreaImpl20decrementAccessCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 28 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) != 0) {
  return;
 }
 i3 = i1 + 32 | 0;
 if (+HEAPF64[i1 + 40 >> 3] != +0) {
  __ZN7WebCore9TimerBase4stopEv(i3);
 }
 __ZN7WebCore9TimerBase5startEdd(i3, +HEAPF64[(__ZN7WebCore14StorageTracker7trackerEv() | 0) + 240 >> 3], +0);
 return;
}
function __ZN7WebCore15StorageAreaImpl23closeDatabaseTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 + 20 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore15StorageAreaSync24blockUntilImportCompleteEv(i1);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore15StorageAreaSync21scheduleCloseDatabaseEv(i1);
 return;
}
function __ZN7WebCore15StorageAreaImpl4syncEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 20 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore15StorageAreaSync24blockUntilImportCompleteEv(i1);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore15StorageAreaSync12scheduleSyncEv(i1);
 return;
}
function __ZN7WebCore15StorageAreaImpl4itemERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore15StorageAreaSync24blockUntilImportCompleteEv(i4);
 }
 __ZNK7WebCore10StorageMap7getItemERKN3WTF6StringE(i1, HEAP32[i2 + 16 >> 2] | 0, i3);
 return;
}
function __ZN7WebCore15StorageAreaImpl8containsERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore15StorageAreaSync24blockUntilImportCompleteEv(i3);
 }
 return __ZNK7WebCore10StorageMap8containsERKN3WTF6StringE(HEAP32[i1 + 16 >> 2] | 0, i2) | 0;
}
function __ZN7WebCore15StorageAreaImpl11importItemsERKN3WTF7HashMapINS1_6StringES3_NS1_10StringHashENS1_10HashTraitsIS3_EES6_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10StorageMap11importItemsERKN3WTF7HashMapINS1_6StringES3_NS1_10StringHashENS1_10HashTraitsIS3_EES6_EE(HEAP32[i1 + 16 >> 2] | 0, i2);
 return;
}
function __ZN7WebCore15StorageAreaImpl3keyEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore15StorageAreaSync24blockUntilImportCompleteEv(i4);
 }
 __ZN7WebCore10StorageMap3keyEj(i1, HEAP32[i2 + 16 >> 2] | 0, i3);
 return;
}
function __ZN7WebCore15StorageAreaImpl6lengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15StorageAreaSync24blockUntilImportCompleteEv(i2);
 }
 return __ZNK7WebCore10StorageMap6lengthEv(HEAP32[i1 + 16 >> 2] | 0) | 0;
}
function __ZN7WebCore15StorageAreaImpl20incrementAccessCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 28 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 if (+HEAPF64[i1 + 40 >> 3] == +0) {
  return;
 }
 __ZN7WebCore9TimerBase4stopEv(i1 + 32 | 0);
 return;
}
function __ZNK7WebCore15StorageAreaImpl24blockUntilImportCompleteEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore15StorageAreaSync24blockUntilImportCompleteEv(i2);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore15StorageAreaImpl16canAccessStorageEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 32 >> 2] | 0) != 0;
 return i3 | 0;
}
function __ZN7WebCore15StorageAreaImpl5closeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore15StorageAreaSync17scheduleFinalSyncEv(i2);
 return;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore5TimerINS_15StorageAreaImplEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
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
function __ZN7WebCore15StorageAreaImplD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15StorageAreaImplD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
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
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function __ZN7WebCore5TimerINS_15StorageAreaImplEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZNK7WebCore15StorageAreaImpl11storageTypeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 8 >> 2] | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function __ZN7WebCore15StorageAreaImpl22memoryBytesUsedByCacheEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function b1(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(1);
 return +0;
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
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore15StorageAreaImpl7setItemEPNS_5FrameERKN3WTF6StringES6_Rb,b0];
  var FUNCTION_TABLE_did = [b1,b1,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore15StorageAreaImplD0Ev,b2,__ZN7WebCore5TimerINS_15StorageAreaImplEED0Ev,b2,__ZN7WebCore15StorageAreaImplD2Ev,b2,__ZN7WebCore5TimerINS_15StorageAreaImplEE5firedEv,b2,__ZN7WebCore15StorageAreaImpl19closeDatabaseIfIdleEv,b2,__ZN7WebCore15StorageAreaImpl20incrementAccessCountEv,b2,__ZN7WebCore15StorageAreaImpl20decrementAccessCountEv,b2,__ZN7WebCore5TimerINS_15StorageAreaImplEED1Ev,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore15StorageAreaImpl5clearEPNS_5FrameE,b3,__ZN7WebCore15StorageAreaImplC2EPS0_,b3,__ZN7WebCore15StorageAreaImpl23closeDatabaseTimerFiredEPNS_5TimerIS0_EE,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZN7WebCore15StorageAreaImpl22memoryBytesUsedByCacheEv,b4,__ZN7WebCore15StorageAreaImpl6lengthEv,b4,__ZNK7WebCore15StorageAreaImpl11storageTypeEv,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZN7WebCore15StorageAreaImpl4itemERKN3WTF6StringE,b5,__ZN7WebCore15StorageAreaImpl3keyEj,b5,__ZN7WebCore15StorageAreaImpl10removeItemEPNS_5FrameERKN3WTF6StringE,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7,__ZN7WebCore15StorageAreaImpl16canAccessStorageEPNS_5FrameE,b7,__ZN7WebCore15StorageAreaImpl8containsERKN3WTF6StringE,b7,b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore15StorageAreaImpl23closeDatabaseTimerFiredEPNS_5TimerIS0_EE","__ZN3WTF10RefCountedIN7WebCore10StorageMapEE5derefEv","__ZN7WebCore15StorageAreaImpl3keyEj","__ZN7WebCore15StorageAreaImpl22clearForOriginDeletionEv","__ZN7WebCore15StorageAreaImpl20decrementAccessCountEv","__ZNK7WebCore15StorageAreaImpl24blockUntilImportCompleteEv","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN7WebCore15StorageAreaImplC2EPS0_","__ZN7WebCore15StorageAreaImpl10removeItemEPNS_5FrameERKN3WTF6StringE","__ZN7WebCore15StorageAreaImpl6lengthEv","__ZN7WebCore15StorageAreaImpl4itemERKN3WTF6StringE","_memset","__ZN7WebCore15StorageAreaImpl6createENS_11StorageTypeEN3WTF10PassRefPtrINS_14SecurityOriginEEENS3_INS_18StorageSyncManagerEEEj","_memcpy","__ZN7WebCore15StorageAreaImpl20incrementAccessCountEv","__ZN7WebCore15StorageAreaImpl5clearEPNS_5FrameE","__ZN7WebCore5TimerINS_15StorageAreaImplEED1Ev","__ZN7WebCore15StorageAreaImpl4syncEv","__ZN7WebCore5TimerINS_15StorageAreaImplEED0Ev","__ZN7WebCore15StorageAreaImplD2Ev","__ZN7WebCore15StorageAreaImpl11importItemsERKN3WTF7HashMapINS1_6StringES3_NS1_10StringHashENS1_10HashTraitsIS3_EES6_EE","__ZN7WebCore15StorageAreaImpl5closeEv","__ZN7WebCore15StorageAreaImplD0Ev","__ZN7WebCore15StorageAreaImpl7setItemEPNS_5FrameERKN3WTF6StringES6_Rb","__ZN7WebCore15StorageAreaImpl22memoryBytesUsedByCacheEv","__ZN7WebCore14SecurityOriginD2Ev","__ZN7WebCore15StorageAreaImpl20dispatchStorageEventERKN3WTF6StringES4_S4_PNS_5FrameE","__ZN7WebCore15StorageAreaImpl16canAccessStorageEPNS_5FrameE","__ZN7WebCore5TimerINS_15StorageAreaImplEE5firedEv","__ZN7WebCore15StorageAreaImpl8containsERKN3WTF6StringE","__ZN7WebCore15StorageAreaImpl19closeDatabaseIfIdleEv","__ZN7WebCore15StorageAreaImpl4copyEv","__ZNK7WebCore15StorageAreaImpl11storageTypeEv"]

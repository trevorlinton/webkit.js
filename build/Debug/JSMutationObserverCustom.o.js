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
H_BASE = parentModule["_malloc"](72 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 72;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([67,97,108,108,98,97,99,107,32,97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,97,32,102,117,110,99,116,105,111,110,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var __ZTVN7WebCore23JSMutationObserverOwnerE=(H_BASE+48)|0;
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
function __ZN3JSC8JSObject17putDirectInternalILNS0_7PutModeE1EEEbRNS_2VMENS_12PropertyNameENS_7JSValueEjRNS_15PutPropertySlotEPNS_6JSCellE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i9 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i9 >> 2];
 i9 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 i9 = i8 + 8 | 0;
 i10 = i8 + 16 | 0;
 i11 = i8 + 24 | 0;
 i12 = i8 + 32 | 0;
 i13 = i8 + 40 | 0;
 i14 = i8 + 48 | 0;
 i15 = i8 + 56 | 0;
 i16 = i8 + 64 | 0;
 i17 = i8 + 72 | 0;
 i18 = i8 + 80 | 0;
 i19 = i8 + 88 | 0;
 i20 = i1 | 0;
 i21 = HEAP32[i20 >> 2] | 0;
 if ((HEAP32[i21 + 56 >> 2] & 196608 | 0) != 0) {
  i22 = HEAP32[i3 >> 2] | 0;
  HEAP32[i10 >> 2] = i22;
  i23 = __ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameERjRPNS_6JSCellE(i21, i2, i10, i8 | 0, i9) | 0;
  if ((i23 | 0) != -1) {
   i10 = HEAP32[i9 >> 2] | 0;
   if (!((i10 | 0) == 0 | (i10 | 0) == (i7 | 0))) {
    i10 = HEAP32[i20 >> 2] | 0;
    HEAP32[i11 >> 2] = i22;
    __ZN3JSC9Structure27despecifyDictionaryFunctionERNS_2VMENS_12PropertyNameE(i10, i2, i11);
   }
   i11 = i4 | 0;
   i10 = HEAP32[i11 + 4 >> 2] | 0;
   if ((i23 | 0) < 100) {
    i24 = i1 + (i23 + 1 << 3) | 0;
   } else {
    i24 = (HEAP32[i1 + 4 >> 2] | 0) - 8 + (99 - i23 << 3) | 0;
   }
   i25 = i24 | 0;
   HEAP32[i25 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i25 + 4 >> 2] = i10;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) != 0 & (i10 | 0) == (i7 | 0)) {
    STACKTOP = i8;
    return 1;
   }
   HEAP32[i6 >> 2] = 1;
   HEAP32[i6 + 4 >> 2] = i1;
   HEAP32[i6 + 16 >> 2] = i23;
   STACKTOP = i8;
   return 1;
  }
  i23 = i2 + 16 | 0;
  __ZN3JSC4Heap22incrementDeferralDepthEv(i23);
  i10 = i1 + 4 | 0;
  i9 = HEAP32[i10 >> 2] | 0;
  if (__ZN3JSC9Structure27putWillGrowOutOfLineStorageEv(HEAP32[i20 >> 2] | 0) | 0) {
   i25 = HEAP32[i20 >> 2] | 0;
   i11 = HEAP32[i25 + 48 >> 2] | 0;
   i24 = (i11 | 0) < 100 ? 0 : i11 - 99 | 0;
   do {
    if ((i24 | 0) == 0) {
     i26 = 0;
    } else {
     if (i24 >>> 0 < 5 >>> 0) {
      i26 = 4;
      break;
     }
     i11 = i24 - 1 | 0;
     i27 = i11 >>> 1 | i11;
     i11 = i27 >>> 2 | i27;
     i27 = i11 >>> 4 | i11;
     i11 = i27 >>> 8 | i27;
     i26 = (i11 >>> 16 | i11) + 1 | 0;
    }
   } while (0);
   i28 = __ZN3JSC8JSObject20growOutOfLineStorageERNS_2VMEjj(i1, i2, i26, __ZN3JSC9Structure36suggestedNewOutOfLineStorageCapacityEv(i25) | 0) | 0;
  } else {
   i28 = i9;
  }
  i9 = HEAP32[i20 >> 2] | 0;
  HEAP32[i12 >> 2] = i22;
  i22 = __ZN3JSC9Structure28addPropertyWithoutTransitionERNS_2VMENS_12PropertyNameEjPNS_6JSCellE(i9, i2, i12, i5, i7) | 0;
  HEAP32[i10 >> 2] = i28;
  i10 = i4 | 0;
  i12 = HEAP32[i10 + 4 >> 2] | 0;
  if ((i22 | 0) < 100) {
   i29 = i1 + (i22 + 1 << 3) | 0;
  } else {
   i29 = i28 - 8 + (99 - i22 << 3) | 0;
  }
  i28 = i29 | 0;
  HEAP32[i28 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i28 + 4 >> 2] = i12;
  if ((i7 | 0) == 0) {
   HEAP32[i6 >> 2] = 2;
   HEAP32[i6 + 4 >> 2] = i1;
   HEAP32[i6 + 16 >> 2] = i22;
  }
  if ((i5 & 2 | 0) != 0) {
   i22 = (HEAP32[i20 >> 2] | 0) + 58 | 0;
   HEAP8[i22] = HEAP8[i22] | 16;
  }
  __ZN3JSC4Heap35decrementDeferralDepthAndGCIfNeededEv(i23);
  STACKTOP = i8;
  return 1;
 }
 i23 = HEAP32[i21 + 48 >> 2] | 0;
 i22 = (i23 | 0) < 100 ? 0 : i23 - 99 | 0;
 do {
  if ((i22 | 0) == 0) {
   i30 = 0;
  } else {
   if (i22 >>> 0 < 5 >>> 0) {
    i30 = 4;
    break;
   }
   i23 = i22 - 1 | 0;
   i12 = i23 >>> 1 | i23;
   i23 = i12 >>> 2 | i12;
   i12 = i23 >>> 4 | i23;
   i23 = i12 >>> 8 | i12;
   i30 = (i23 >>> 16 | i23) + 1 | 0;
  }
 } while (0);
 i22 = HEAP32[i3 >> 2] | 0;
 HEAP32[i14 >> 2] = i22;
 i3 = __ZN3JSC9Structure40addPropertyTransitionToExistingStructureEPS0_NS_12PropertyNameEjPNS_6JSCellERi(i21, i14, i5, i7, i13) | 0;
 if ((i3 | 0) != 0) {
  i14 = i2 + 16 | 0;
  __ZN3JSC4Heap22incrementDeferralDepthEv(i14);
  i21 = i1 + 4 | 0;
  i23 = HEAP32[i21 >> 2] | 0;
  i12 = HEAP32[i3 + 48 >> 2] | 0;
  i28 = (i12 | 0) < 100 ? 0 : i12 - 99 | 0;
  i12 = (i28 | 0) == 0;
  do {
   if (i12) {
    i31 = 0;
   } else {
    if (i28 >>> 0 < 5 >>> 0) {
     i31 = 4;
     break;
    }
    i10 = i28 - 1 | 0;
    i29 = i10 >>> 1 | i10;
    i10 = i29 >>> 2 | i29;
    i29 = i10 >>> 4 | i10;
    i10 = i29 >>> 8 | i29;
    i31 = (i10 >>> 16 | i10) + 1 | 0;
   }
  } while (0);
  if ((i30 | 0) == (i31 | 0)) {
   i32 = i23;
  } else {
   do {
    if (i12) {
     i33 = 0;
    } else {
     if (i28 >>> 0 < 5 >>> 0) {
      i33 = 4;
      break;
     }
     i23 = i28 - 1 | 0;
     i31 = i23 >>> 1 | i23;
     i23 = i31 >>> 2 | i31;
     i31 = i23 >>> 4 | i23;
     i23 = i31 >>> 8 | i31;
     i33 = (i23 >>> 16 | i23) + 1 | 0;
    }
   } while (0);
   i32 = __ZN3JSC8JSObject20growOutOfLineStorageERNS_2VMEjj(i1, i2, i30, i33) | 0;
  }
  HEAP32[i21 >> 2] = i32;
  HEAP32[i20 >> 2] = i3;
  i3 = HEAP32[i13 >> 2] | 0;
  i21 = i4 | 0;
  i33 = HEAP32[i21 + 4 >> 2] | 0;
  if ((i3 | 0) < 100) {
   i34 = i1 + (i3 + 1 << 3) | 0;
  } else {
   i34 = i32 - 8 + (99 - i3 << 3) | 0;
  }
  i32 = i34 | 0;
  HEAP32[i32 >> 2] = HEAP32[i21 >> 2];
  HEAP32[i32 + 4 >> 2] = i33;
  if ((i7 | 0) == 0) {
   HEAP32[i6 >> 2] = 2;
   HEAP32[i6 + 4 >> 2] = i1;
   HEAP32[i6 + 16 >> 2] = i3;
  }
  __ZN3JSC4Heap35decrementDeferralDepthAndGCIfNeededEv(i14);
  STACKTOP = i8;
  return 1;
 }
 i14 = HEAP32[i20 >> 2] | 0;
 HEAP32[i17 >> 2] = i22;
 i3 = __ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameERjRPNS_6JSCellE(i14, i2, i17, i15, i16) | 0;
 HEAP32[i13 >> 2] = i3;
 if ((i3 | 0) == -1) {
  i15 = HEAP32[i20 >> 2] | 0;
  HEAP32[i19 >> 2] = i22;
  i17 = __ZN3JSC9Structure21addPropertyTransitionERNS_2VMEPS0_NS_12PropertyNameEjPNS_6JSCellERiNS_15PutPropertySlot7ContextE(i2, i15, i19, i5, i7, i13, HEAPU8[i6 + 21 | 0] | 0) | 0;
  i19 = HEAP32[(HEAP32[i20 >> 2] | 0) + 48 >> 2] | 0;
  i15 = (i19 | 0) < 100 ? 0 : i19 - 99 | 0;
  do {
   if ((i15 | 0) == 0) {
    i35 = 0;
   } else {
    if (i15 >>> 0 < 5 >>> 0) {
     i35 = 4;
     break;
    }
    i19 = i15 - 1 | 0;
    i14 = i19 >>> 1 | i19;
    i19 = i14 >>> 2 | i14;
    i14 = i19 >>> 4 | i19;
    i19 = i14 >>> 8 | i14;
    i35 = (i19 >>> 16 | i19) + 1 | 0;
   }
  } while (0);
  __ZN3JSC8JSObject43setStructureAndReallocateStorageIfNecessaryERNS_2VMEjPNS_9StructureE(i1, i2, i35, i17);
  i35 = HEAP32[i13 >> 2] | 0;
  i15 = i4 | 0;
  i19 = HEAP32[i15 + 4 >> 2] | 0;
  if ((i35 | 0) < 100) {
   i36 = i1 + (i35 + 1 << 3) | 0;
  } else {
   i36 = (HEAP32[i1 + 4 >> 2] | 0) - 8 + (99 - i35 << 3) | 0;
  }
  i14 = i36 | 0;
  HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i14 + 4 >> 2] = i19;
  if ((i7 | 0) == 0) {
   HEAP32[i6 >> 2] = 2;
   HEAP32[i6 + 4 >> 2] = i1;
   HEAP32[i6 + 16 >> 2] = i35;
  }
  if ((i5 & 2 | 0) == 0) {
   STACKTOP = i8;
   return 1;
  }
  i5 = i17 + 58 | 0;
  HEAP8[i5] = HEAP8[i5] | 16;
  STACKTOP = i8;
  return 1;
 }
 i5 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i37 = i3;
  } else {
   if ((i5 | 0) != (i7 | 0)) {
    i16 = HEAP32[i20 >> 2] | 0;
    HEAP32[i18 >> 2] = i22;
    HEAP32[i20 >> 2] = __ZN3JSC9Structure27despecifyFunctionTransitionERNS_2VMEPS0_NS_12PropertyNameE(i2, i16, i18) | 0;
    i37 = HEAP32[i13 >> 2] | 0;
    break;
   }
   i16 = i4 | 0;
   i17 = HEAP32[i16 + 4 >> 2] | 0;
   if ((i3 | 0) < 100) {
    i38 = i1 + (i3 + 1 << 3) | 0;
   } else {
    i38 = (HEAP32[i1 + 4 >> 2] | 0) - 8 + (99 - i3 << 3) | 0;
   }
   i35 = i38 | 0;
   HEAP32[i35 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i35 + 4 >> 2] = i17;
   STACKTOP = i8;
   return 1;
  }
 } while (0);
 HEAP32[i6 >> 2] = 1;
 HEAP32[i6 + 4 >> 2] = i1;
 HEAP32[i6 + 16 >> 2] = i37;
 i6 = i4 | 0;
 i4 = HEAP32[i6 + 4 >> 2] | 0;
 if ((i37 | 0) < 100) {
  i39 = i1 + (i37 + 1 << 3) | 0;
 } else {
  i39 = (HEAP32[i1 + 4 >> 2] | 0) - 8 + (99 - i37 << 3) | 0;
 }
 i37 = i39 | 0;
 HEAP32[i37 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i37 + 4 >> 2] = i4;
 STACKTOP = i8;
 return 1;
}
function __ZN7WebCore23JSMutationObserverOwner26isReachableFromOpaqueRootsEN3JSC6HandleINS1_7UnknownEEEPvRNS1_11SlotVisitorE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i1 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
 i1 = i3 | 0;
 __ZNK7WebCore16MutationObserver16getObservedNodesEv(i1, HEAP32[(HEAP32[HEAP32[i2 >> 2] >> 2] | 0) + 12 >> 2] | 0);
 i2 = HEAP32[i1 >> 2] | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 i6 = i2 + (i5 << 2) | 0;
 L1 : do {
  if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
   i7 = 0;
  } else {
   L3 : do {
    if ((i5 | 0) == 0) {
     i8 = i2;
    } else {
     i9 = i2;
     while (1) {
      i10 = HEAP32[i9 >> 2] | 0;
      if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
       i8 = i9;
       break L3;
      }
      i10 = i9 + 4 | 0;
      if ((i10 | 0) == (i6 | 0)) {
       i7 = 0;
       break L1;
      } else {
       i9 = i10;
      }
     }
    }
   } while (0);
   if ((i8 | 0) == (i6 | 0)) {
    i7 = 0;
    break;
   }
   i9 = HEAP32[i4 + 20 >> 2] | 0;
   i10 = i4 + 28 | 0;
   if ((i9 | 0) == 0) {
    i11 = i8;
    while (1) {
     i12 = HEAP32[i11 >> 2] | 0;
     i13 = HEAP32[i12 + 12 >> 2] | 0;
     L12 : do {
      if ((i13 & 256 | 0) == 0) {
       i14 = i12;
       i15 = i13;
       while (1) {
        i16 = (i15 & 4096 | 0) == 0;
        do {
         if (i16) {
          i17 = 11;
         } else {
          if ((HEAP32[(HEAP32[i14 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i14 | 0)) {
           i17 = 11;
           break;
          }
          i18 = HEAP32[i14 + 92 >> 2] | 0;
         }
        } while (0);
        if ((i17 | 0) == 11) {
         i17 = 0;
         i18 = HEAP32[i14 + 16 >> 2] | 0;
        }
        if ((i18 | 0) == 0) {
         break L12;
        }
        do {
         if (i16) {
          i17 = 16;
         } else {
          if ((HEAP32[(HEAP32[i14 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i14 | 0)) {
           i17 = 16;
           break;
          }
          i19 = HEAP32[i14 + 92 >> 2] | 0;
         }
        } while (0);
        if ((i17 | 0) == 16) {
         i17 = 0;
         i19 = HEAP32[i14 + 16 >> 2] | 0;
        }
        i14 = i19 | 0;
        i15 = HEAP32[i19 + 12 >> 2] | 0;
       }
      }
     } while (0);
     i13 = i11 + 4 | 0;
     if ((i13 | 0) == (i6 | 0)) {
      i7 = 0;
      break L1;
     } else {
      i20 = i13;
     }
     while (1) {
      i13 = HEAP32[i20 >> 2] | 0;
      if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
       break;
      }
      i13 = i20 + 4 | 0;
      if ((i13 | 0) == (i6 | 0)) {
       i7 = 0;
       break L1;
      } else {
       i20 = i13;
      }
     }
     if ((i20 | 0) == (i6 | 0)) {
      i7 = 0;
      break L1;
     } else {
      i11 = i20;
     }
    }
   } else {
    i21 = i8;
   }
   while (1) {
    i11 = HEAP32[i21 >> 2] | 0;
    i13 = HEAP32[i11 + 12 >> 2] | 0;
    if ((i13 & 256 | 0) == 0) {
     i12 = i11;
     i15 = i13;
     while (1) {
      i13 = (i15 & 4096 | 0) == 0;
      do {
       if (i13) {
        i17 = 27;
       } else {
        if ((HEAP32[(HEAP32[i12 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i12 | 0)) {
         i17 = 27;
         break;
        }
        i22 = HEAP32[i12 + 92 >> 2] | 0;
       }
      } while (0);
      if ((i17 | 0) == 27) {
       i17 = 0;
       i22 = HEAP32[i12 + 16 >> 2] | 0;
      }
      if ((i22 | 0) == 0) {
       break;
      }
      do {
       if (i13) {
        i17 = 32;
       } else {
        if ((HEAP32[(HEAP32[i12 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i12 | 0)) {
         i17 = 32;
         break;
        }
        i23 = HEAP32[i12 + 92 >> 2] | 0;
       }
      } while (0);
      if ((i17 | 0) == 32) {
       i17 = 0;
       i23 = HEAP32[i12 + 16 >> 2] | 0;
      }
      i12 = i23 | 0;
      i15 = HEAP32[i23 + 12 >> 2] | 0;
     }
     i24 = i12;
    } else {
     i24 = HEAP32[(HEAP32[i11 + 20 >> 2] | 0) + 8 >> 2] | 0;
    }
    i15 = HEAP32[i10 >> 2] | 0;
    i13 = i24;
    i14 = i13 + ~(i13 << 15) | 0;
    i13 = (i14 >>> 10 ^ i14) * 9 & -1;
    i14 = i13 >>> 6 ^ i13;
    i13 = i14 + ~(i14 << 11) | 0;
    i14 = i13 >>> 16 ^ i13;
    i13 = i15 & i14;
    i16 = i9 + (i13 << 2) | 0;
    i25 = HEAP32[i16 >> 2] | 0;
    L54 : do {
     if ((i25 | 0) == (i24 | 0)) {
      i26 = i16;
      i17 = 39;
     } else {
      i27 = (i14 >>> 23) + ~i14 | 0;
      i28 = i27 << 12 ^ i27;
      i27 = i28 >>> 7 ^ i28;
      i28 = i27 << 2 ^ i27;
      i27 = i28 >>> 20 ^ i28 | 1;
      i28 = 0;
      i29 = i13;
      i30 = i25;
      while (1) {
       if ((i30 | 0) == 0) {
        break L54;
       }
       i31 = (i28 | 0) == 0 ? i27 : i28;
       i32 = i31 + i29 & i15;
       i33 = i9 + (i32 << 2) | 0;
       i34 = HEAP32[i33 >> 2] | 0;
       if ((i34 | 0) == (i24 | 0)) {
        i26 = i33;
        i17 = 39;
        break;
       } else {
        i28 = i31;
        i29 = i32;
        i30 = i34;
       }
      }
     }
    } while (0);
    if ((i17 | 0) == 39) {
     i17 = 0;
     if ((i26 | 0) != 0) {
      i7 = 1;
      break L1;
     }
    }
    i15 = i21 + 4 | 0;
    if ((i15 | 0) == (i6 | 0)) {
     i7 = 0;
     break L1;
    } else {
     i35 = i15;
    }
    while (1) {
     i15 = HEAP32[i35 >> 2] | 0;
     if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
      break;
     }
     i15 = i35 + 4 | 0;
     if ((i15 | 0) == (i6 | 0)) {
      i7 = 0;
      break L1;
     } else {
      i35 = i15;
     }
    }
    if ((i35 | 0) == (i6 | 0)) {
     i7 = 0;
     break;
    } else {
     i21 = i35;
    }
   }
  }
 } while (0);
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return i7 | 0;
 }
 __ZN3WTF8fastFreeEPv(i2);
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore29JSMutationObserverConstructor27constructJSMutationObserverEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 48 | 0;
 i7 = i2 + 56 | 0;
 i8 = i2 + 64 | 0;
 i9 = i2 + 72 | 0;
 i10 = i2 + 80 | 0;
 i11 = i2 + 88 | 0;
 i12 = i2 + 96 | 0;
 i13 = i2 + 104 | 0;
 i14 = i2 + 112 | 0;
 if ((HEAP32[i1 + 32 >> 2] | 0) == 1) {
  i15 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
  i16 = (i15 | 0) == 0;
  i17 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
  i18 = i9 | 0;
  HEAP32[i18 >> 2] = (i16 ? 0 : 0) | i15;
  HEAP32[i18 + 4 >> 2] = i16 ? -6 : -5;
  __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i8, i17, i1, i9);
  i9 = i8 | 0;
  i19 = HEAP32[i9 + 4 >> 2] | 0;
  i20 = HEAP32[i9 >> 2] | 0;
  STACKTOP = i2;
  return (tempRet0 = i19, i20) | 0;
 }
 i9 = i1 + 48 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i8 & 0 | 0) == 0 & (HEAP32[i9 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i17 = __ZN3JSC6JSCell9getObjectEv(i8) | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   i16 = i17 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   i15 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     if ((i15 | 0) == (HEAP32[i15 >> 2] | 0)) {
      break;
     }
     _WTFCrash();
     return 0;
    }
   } while (0);
   i15 = i17;
   if ((FUNCTION_TABLE_iii[HEAP32[(HEAP32[((HEAP32[(i15 & -65536) + 1048 >> 2] | 0) == 2 ? i17 + 8 | 0 : i18 + 32 | 0) >> 2] | 0) + 28 >> 2] & 1](i16, i10) | 0) == 0) {
    break;
   }
   i21 = HEAP32[i1 + 24 >> 2] | 0;
   i22 = HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] | 0;
   i23 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN7WebCore18JSMutationCallbackC1EPN3JSC8JSObjectEPNS_17JSDOMGlobalObjectE(i23, i17, i22);
   i22 = HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] | 0;
   i24 = i14 | 0;
   HEAP32[i24 >> 2] = i23;
   __ZN7WebCore16MutationObserver6createEN3WTF10PassRefPtrINS_16MutationCallbackEEE(i13, i14);
   i23 = i13 | 0;
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_16MutationObserverE(i12, i1, i22, HEAP32[i23 >> 2] | 0);
   i22 = HEAP32[i12 >> 2] | 0;
   i25 = i22;
   i26 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i26 | 0) != 0) {
     i23 = i26 | 0;
     i27 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     if ((i27 | 0) == 0) {
      __ZN7WebCore16MutationObserverD1Ev(i26);
      __ZN3WTF8fastFreeEPv(i26);
      break;
     } else {
      HEAP32[i23 >> 2] = i27;
      break;
     }
    }
   } while (0);
   i26 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i26 | 0) != 0) {
     i17 = i26 + 4 | 0;
     i18 = i17 | 0;
     i27 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i27 | 0) != 0) {
      HEAP32[i18 >> 2] = i27;
      break;
     }
     i27 = i17 - 4 | 0;
     if ((i27 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] & 7](i27);
    }
   } while (0);
   i26 = __ZN3WTF10fastMallocEj(20) | 0;
   i24 = i26;
   i27 = i26;
   HEAP32[i27 >> 2] = 2;
   HEAP32[i26 + 4 >> 2] = 0;
   i17 = i26 + 12 | 0;
   HEAP32[i26 + 8 >> 2] = i17;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i26 + 16 >> 2] = (__ZN3WTF29cryptographicallyRandomNumberEv() | 0) << 7 | 128;
   i17 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & -65536) + 1076 >> 2] | 0) + 20544 >> 2] | 0;
   i18 = (i22 | 0) == 0;
   i23 = (i18 ? 0 : 0) | i22;
   i28 = (i18 ? -6 : -5) | 0;
   HEAP32[i5 >> 2] = 0;
   HEAP32[i5 + 4 >> 2] = 0;
   i18 = i5 + 8 | 0;
   HEAP32[i18 >> 2] = i23;
   HEAP32[i18 + 4 >> 2] = i28;
   HEAP8[i5 + 20 | 0] = 0;
   HEAP8[i5 + 21 | 0] = 0;
   HEAP32[i5 + 24 >> 2] = 0;
   HEAP32[i6 >> 2] = i24;
   i18 = i7 | 0;
   HEAP32[i18 >> 2] = i15;
   HEAP32[i18 + 4 >> 2] = -5;
   __ZN3JSC8JSObject17putDirectInternalILNS0_7PutModeE1EEEbRNS_2VMENS_12PropertyNameENS_7JSValueEjRNS_15PutPropertySlotEPNS_6JSCellE(i25, i17, i6, i7, 0, i5, __ZN3JSC21getCallableObjectSlowEPNS_6JSCellE(i16) | 0) | 0;
   if ((i26 | 0) == 0) {
    i19 = i28;
    i20 = i23;
    STACKTOP = i2;
    return (tempRet0 = i19, i20) | 0;
   }
   i26 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    i19 = i28;
    i20 = i23;
    STACKTOP = i2;
    return (tempRet0 = i19, i20) | 0;
   } else {
    HEAP32[i27 >> 2] = i26;
    i19 = i28;
    i20 = i23;
    STACKTOP = i2;
    return (tempRet0 = i19, i20) | 0;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i11, H_BASE + 8 | 0);
 i5 = __ZN3JSC15createTypeErrorEPNS_9ExecStateERKN3WTF6StringE(i1, i11) | 0;
 i7 = (i5 | 0) == 0;
 i6 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i12 = i4 | 0;
 HEAP32[i12 >> 2] = (i7 ? 0 : 0) | i5;
 HEAP32[i12 + 4 >> 2] = i7 ? -6 : -5;
 __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i6, i1, i4);
 i4 = i3 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i1 = HEAP32[i4 + 4 >> 2] | 0;
 i4 = HEAP32[i11 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i19 = i1;
  i20 = i3;
  STACKTOP = i2;
  return (tempRet0 = i19, i20) | 0;
 }
 i11 = i4 | 0;
 i6 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i19 = i1;
  i20 = i3;
  STACKTOP = i2;
  return (tempRet0 = i19, i20) | 0;
 } else {
  HEAP32[i11 >> 2] = i6;
  i19 = i1;
  i20 = i3;
  STACKTOP = i2;
  return (tempRet0 = i19, i20) | 0;
 }
 return 0;
}
function __ZN3JSC9Structure27putWillGrowOutOfLineStorageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = i1 + 40 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   do {
    if (!(__ZN3WTF19isCompilationThreadEv() | 0)) {
     i4 = HEAP32[i1 + 48 >> 2] | 0;
     i5 = HEAPU8[i1 + 56 | 0] | 0;
     if ((i4 | 0) < (i5 | 0)) {
      i6 = i4 + 1 | 0;
     } else {
      i6 = ((i4 | 0) < 100 ? 0 : i4 - 99 | 0) + i5 | 0;
     }
     i7 = HEAP32[i3 + 16 >> 2] | 0;
     i8 = HEAP32[i3 + 24 >> 2] | 0;
     i9 = (i8 | 0) == 0;
     if (i9) {
      i10 = 0;
     } else {
      i10 = HEAP32[i8 + 8 >> 2] | 0;
     }
     if ((i6 | 0) != (i10 + i7 | 0)) {
      _WTFCrash();
      return 0;
     }
     if (i9) {
      i11 = 0;
     } else {
      i11 = HEAP32[i8 + 8 >> 2] | 0;
     }
     i8 = i11 + i7 | 0;
     if (((i8 >>> 0 < i5 >>> 0 ? 0 : i8 - i5 | 0) | 0) == (((i4 | 0) < 100 ? 0 : i4 - 99 | 0) | 0)) {
      break;
     }
     _WTFCrash();
     return 0;
    }
   } while (0);
   i4 = HEAP32[i2 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i4 + 24 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     if ((HEAP32[i5 + 8 >> 2] | 0) == 0) {
      break;
     } else {
      i12 = 0;
     }
     return i12 | 0;
    }
   } while (0);
   i5 = HEAP32[i4 + 16 >> 2] | 0;
   i8 = HEAP32[i1 + 48 >> 2] | 0;
   i7 = (i8 | 0) < 100 ? 0 : i8 - 99 | 0;
   do {
    if ((i7 | 0) == 0) {
     i13 = 0;
    } else {
     if (i7 >>> 0 < 5 >>> 0) {
      i13 = 4;
      break;
     }
     i8 = i7 - 1 | 0;
     i9 = i8 >>> 1 | i8;
     i8 = i9 >>> 2 | i9;
     i9 = i8 >>> 4 | i8;
     i8 = i9 >>> 8 | i9;
     i13 = (i8 >>> 16 | i8) + 1 | 0;
    }
   } while (0);
   i12 = (i5 | 0) == ((HEAPU8[i1 + 56 | 0] | 0) + i13 | 0);
   return i12 | 0;
  }
 } while (0);
 i13 = HEAP32[i1 + 48 >> 2] | 0;
 i1 = (i13 | 0) < 100 ? 0 : i13 - 99 | 0;
 do {
  if ((i1 | 0) == 0) {
   i14 = 0;
  } else {
   if (i1 >>> 0 < 5 >>> 0) {
    i14 = 4;
    break;
   }
   i13 = i1 - 1 | 0;
   i2 = i13 >>> 1 | i13;
   i13 = i2 >>> 2 | i2;
   i2 = i13 >>> 4 | i13;
   i13 = i2 >>> 8 | i2;
   i14 = (i13 >>> 16 | i13) + 1 | 0;
  }
 } while (0);
 i12 = (i1 | 0) == (i14 | 0);
 return i12 | 0;
}
function __ZN3JSC8JSObject43setStructureAndReallocateStorageIfNecessaryERNS_2VMEjPNS_9StructureE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = i4 + 48 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = (i6 | 0) < 100 ? 0 : i6 - 99 | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = 0;
  } else {
   if (i7 >>> 0 < 5 >>> 0) {
    i8 = 4;
    break;
   }
   i6 = i7 - 1 | 0;
   i9 = i6 >>> 1 | i6;
   i6 = i9 >>> 2 | i9;
   i9 = i6 >>> 4 | i6;
   i6 = i9 >>> 8 | i9;
   i8 = (i6 >>> 16 | i6) + 1 | 0;
  }
 } while (0);
 if ((i8 | 0) == (i3 | 0)) {
  HEAP32[i1 >> 2] = i4;
  return;
 }
 i8 = i2 + 16 | 0;
 __ZN3JSC4Heap22incrementDeferralDepthEv(i8);
 i7 = HEAP32[i5 >> 2] | 0;
 i5 = (i7 | 0) < 100 ? 0 : i7 - 99 | 0;
 do {
  if ((i5 | 0) == 0) {
   i10 = 0;
  } else {
   if (i5 >>> 0 < 5 >>> 0) {
    i10 = 4;
    break;
   }
   i7 = i5 - 1 | 0;
   i6 = i7 >>> 1 | i7;
   i7 = i6 >>> 2 | i6;
   i6 = i7 >>> 4 | i7;
   i7 = i6 >>> 8 | i6;
   i10 = (i7 >>> 16 | i7) + 1 | 0;
  }
 } while (0);
 HEAP32[i1 + 4 >> 2] = __ZN3JSC8JSObject20growOutOfLineStorageERNS_2VMEjj(i1, i2, i3, i10) | 0;
 HEAP32[i1 >> 2] = i4;
 __ZN3JSC4Heap35decrementDeferralDepthAndGCIfNeededEv(i8);
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
function viii___ZN7WebCore23JSMutationObserverOwner8finalizeEN3JSC6HandleINS1_7UnknownEEEPv__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore23JSMutationObserverOwner8finalizeEN3JSC6HandleINS1_7UnknownEEEPv(i1 | 0, i2 | 0, i3 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function runPostSets() {
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_viii + 2;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
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
function __ZN7WebCore23JSMutationObserverOwnerD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15WeakHandleOwnerD2Ev(i1 | 0);
 __ZdlPv(i1);
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
function __ZN7WebCore23JSMutationObserverOwnerD1Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15WeakHandleOwnerD2Ev(i1 | 0);
 return;
}
function b0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(0);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiii = [b0,b0,__ZN7WebCore23JSMutationObserverOwner26isReachableFromOpaqueRootsEN3JSC6HandleINS1_7UnknownEEEPvRNS1_11SlotVisitorE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore23JSMutationObserverOwnerD0Ev,b1,__ZN7WebCore23JSMutationObserverOwnerD1Ev,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,viii___ZN7WebCore23JSMutationObserverOwner8finalizeEN3JSC6HandleINS1_7UnknownEEEPv__wrapper,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore23JSMutationObserverOwnerD0Ev","__ZN7WebCore29JSMutationObserverConstructor27constructJSMutationObserverEPN3JSC9ExecStateE","_strlen","__ZN3JSC8JSObject43setStructureAndReallocateStorageIfNecessaryERNS_2VMEjPNS_9StructureE","__ZN3JSC8JSObject17putDirectInternalILNS0_7PutModeE1EEEbRNS_2VMENS_12PropertyNameENS_7JSValueEjRNS_15PutPropertySlotEPNS_6JSCellE","_memset","_memcpy","__ZN3JSC9Structure27putWillGrowOutOfLineStorageEv","__ZN7WebCore23JSMutationObserverOwnerD1Ev","__ZN7WebCore23JSMutationObserverOwner26isReachableFromOpaqueRootsEN3JSC6HandleINS1_7UnknownEEEPvRNS1_11SlotVisitorE"]

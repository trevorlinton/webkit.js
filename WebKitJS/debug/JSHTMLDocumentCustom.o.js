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
H_BASE = parentModule["_malloc"](24 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 24;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([111,112,101,110,0,0,0,0,97,108,108,0,0,0,0,0,10,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    return Module["dynCall_iiiiiii"](index,a1,a2,a3,a4,a5,a6);
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
  var __ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE=env.__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE|0;
  var __ZN7WebCore9HTMLNames9iframeTagE=env.__ZN7WebCore9HTMLNames9iframeTagE|0;
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
  var invoke_ii=env.invoke_ii;
  var invoke_vi=env.invoke_vi;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_iiiii=env.invoke_iiiii;
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
function __ZN7WebCore14JSHTMLDocument10nameGetterEPN3JSC9ExecStateExxNS1_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
 i4 = i5 | 0;
 i3 = i5 + 8 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 40 | 0;
 i11 = i2;
 i2 = HEAP32[i11 + 12 >> 2] | 0;
 i12 = i2;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = __ZN7WebCore16findAtomicStringEN3JSC12PropertyNameE(i4) | 0;
 if ((i6 | 0) == 0) {
  i13 = -4;
  i14 = 0;
  STACKTOP = i5;
  return (tempRet0 = i13, i14) | 0;
 }
 i4 = i2 + 2292 | 0;
 i15 = HEAP32[i4 >> 2] | 0;
 i16 = i15;
 if ((i15 | 0) == 0) {
  i13 = -4;
  i14 = 0;
  STACKTOP = i5;
  return (tempRet0 = i13, i14) | 0;
 }
 i15 = HEAP32[i2 + 2300 >> 2] | 0;
 i17 = i6;
 i18 = i17 + ~(i17 << 15) | 0;
 i17 = (i18 >>> 10 ^ i18) * 9 & -1;
 i18 = i17 >>> 6 ^ i17;
 i17 = i18 + ~(i18 << 11) | 0;
 i18 = i17 >>> 16 ^ i17;
 i17 = i15 & i18;
 i19 = i16 + (i17 * 24 & -1) | 0;
 i20 = HEAP32[i19 >> 2] | 0;
 L7 : do {
  if ((i20 | 0) == (i6 | 0)) {
   i21 = i19;
  } else {
   i22 = (i18 >>> 23) + ~i18 | 0;
   i23 = i22 << 12 ^ i22;
   i22 = i23 >>> 7 ^ i23;
   i23 = i22 << 2 ^ i22;
   i22 = i23 >>> 20 ^ i23 | 1;
   i23 = 0;
   i24 = i17;
   i25 = i20;
   while (1) {
    if ((i25 | 0) == 0) {
     i13 = -4;
     i14 = 0;
     break;
    }
    i26 = (i23 | 0) == 0 ? i22 : i23;
    i27 = i26 + i24 & i15;
    i28 = i16 + (i27 * 24 & -1) | 0;
    i29 = HEAP32[i28 >> 2] | 0;
    if ((i29 | 0) == (i6 | 0)) {
     i21 = i28;
     break L7;
    } else {
     i23 = i26;
     i24 = i27;
     i25 = i29;
    }
   }
   STACKTOP = i5;
   return (tempRet0 = i13, i14) | 0;
  }
 } while (0);
 if ((i21 | 0) == 0) {
  i13 = -4;
  i14 = 0;
  STACKTOP = i5;
  return (tempRet0 = i13, i14) | 0;
 }
 if (__ZNK7WebCore12HTMLDocument41documentNamedItemContainsMultipleElementsERKN3WTF16AtomicStringImplE(i12, i6) | 0) {
  i12 = i7 | 0;
  HEAP32[i12 >> 2] = i6;
  i21 = i6 | 0;
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
  __ZN7WebCore8Document18documentNamedItemsERKN3WTF12AtomicStringE(i3, i2, i7);
  i7 = i3 | 0;
  i3 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  i7 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i12 = i7 | 0;
    i21 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i21 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i12 >> 2] = i21;
     break;
    }
   }
  } while (0);
  __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_14HTMLCollectionE(i8, i1, HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] | 0, i3);
  i7 = i8 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  i21 = HEAP32[i7 + 4 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i13 = i21;
   i14 = i8;
   STACKTOP = i5;
   return (tempRet0 = i13, i14) | 0;
  }
  i7 = i3 + 8 | 0;
  i3 = i7 | 0;
  i12 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
  if ((i12 | 0) != 0) {
   HEAP32[i3 >> 2] = i12;
   i13 = i21;
   i14 = i8;
   STACKTOP = i5;
   return (tempRet0 = i13, i14) | 0;
  }
  i12 = i7 - 8 | 0;
  if ((i12 | 0) == 0) {
   i13 = i21;
   i14 = i8;
   STACKTOP = i5;
   return (tempRet0 = i13, i14) | 0;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 15](i12);
  i13 = i21;
  i14 = i8;
  STACKTOP = i5;
  return (tempRet0 = i13, i14) | 0;
 }
 i8 = __ZNK7WebCore18DocumentOrderedMap29getElementByDocumentNamedItemERKN3WTF16AtomicStringImplERKNS_9TreeScopeE(i4, i6, i2 + 44 | 0) | 0;
 i2 = HEAP32[i8 + 44 >> 2] | 0;
 i6 = HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0;
 do {
  if ((i2 | 0) == (i6 | 0)) {
   i30 = 21;
  } else {
   if ((HEAP32[i2 + 12 >> 2] | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
    if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
     i30 = 21;
     break;
    }
   }
   if ((i8 | 0) != 0) {
    i30 = 26;
    break;
   }
   HEAP32[i10 + 4 >> 2] = -3;
   HEAP32[i10 >> 2] = 0;
  }
 } while (0);
 do {
  if ((i30 | 0) == 21) {
   i6 = HEAP32[i8 + 52 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i30 = 26;
    break;
   }
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_5FrameE(i9, i1, i6);
   i6 = i9 | 0;
   i13 = HEAP32[i6 + 4 >> 2] | 0;
   i14 = HEAP32[i6 >> 2] | 0;
   STACKTOP = i5;
   return (tempRet0 = i13, i14) | 0;
  }
 } while (0);
 L49 : do {
  if ((i30 | 0) == 26) {
   i9 = HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] | 0;
   i6 = i8 | 0;
   i2 = HEAP32[(HEAP32[(HEAP32[HEAP32[i1 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0;
   do {
    if ((HEAP8[i2 + 92 | 0] & 1) == 0) {
     i30 = 31;
    } else {
     i4 = HEAP32[i8 + 4 >> 2] | 0;
     if ((i4 | 0) == 0) {
      i30 = 31;
      break;
     }
     if ((HEAP32[i4 + 8 >> 2] & 3 | 0) != 0) {
      i30 = 31;
      break;
     }
     i21 = HEAP32[i4 >> 2] | 0;
     if ((i21 | 0) == 0) {
      i30 = 31;
      break;
     }
     i31 = i21 | 0;
     i30 = 40;
    }
   } while (0);
   L56 : do {
    if ((i30 | 0) == 31) {
     i21 = i8;
     i4 = HEAP32[i2 + 12 >> 2] | 0;
     i12 = HEAP32[i2 + 4 >> 2] | 0;
     i7 = i8;
     i3 = i7 + ~(i7 << 15) | 0;
     i7 = (i3 >>> 10 ^ i3) * 9 & -1;
     i3 = i7 >>> 6 ^ i7;
     i7 = i3 + ~(i3 << 11) | 0;
     i3 = i7 >>> 16 ^ i7;
     if ((i12 | 0) == 0) {
      break;
     }
     i7 = i4 & i3;
     i16 = i12 + (i7 << 3) | 0;
     i15 = HEAP32[i16 >> 2] | 0;
     if ((i15 | 0) == (i21 | 0)) {
      i32 = i16;
     } else {
      i16 = (i3 >>> 23) + ~i3 | 0;
      i3 = i16 << 12 ^ i16;
      i16 = i3 >>> 7 ^ i3;
      i3 = i16 << 2 ^ i16;
      i16 = i3 >>> 20 ^ i3 | 1;
      i3 = 0;
      i20 = i7;
      i7 = i15;
      while (1) {
       if ((i7 | 0) == 0) {
        break L56;
       }
       i15 = (i3 | 0) == 0 ? i16 : i3;
       i17 = i15 + i20 & i4;
       i18 = i12 + (i17 << 3) | 0;
       i19 = HEAP32[i18 >> 2] | 0;
       if ((i19 | 0) == (i21 | 0)) {
        i32 = i18;
        break;
       } else {
        i3 = i15;
        i20 = i17;
        i7 = i19;
       }
      }
     }
     if ((i32 | 0) == 0) {
      break;
     }
     i7 = HEAP32[i32 + 4 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     if ((HEAP32[i7 + 8 >> 2] & 3 | 0) != 0) {
      break;
     }
     i31 = HEAP32[i7 >> 2] | 0;
     i30 = 40;
    }
   } while (0);
   do {
    if ((i30 | 0) == 40) {
     if ((i31 | 0) == 0) {
      break;
     }
     HEAP32[i10 + 4 >> 2] = -5;
     HEAP32[i10 >> 2] = i31;
     break L49;
    }
   } while (0);
   __ZN7WebCore13createWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_4NodeE(i10, i1, i9, i6);
  }
 } while (0);
 i1 = i10 | 0;
 i13 = HEAP32[i1 + 4 >> 2] | 0;
 i14 = HEAP32[i1 >> 2] | 0;
 STACKTOP = i5;
 return (tempRet0 = i13, i14) | 0;
}
function __ZN7WebCoreL13documentWriteEPN3JSC9ExecStateEPNS_12HTMLDocumentENS_18NewlineRequirementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 280 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 96 | 0;
 i9 = i4 + 104 | 0;
 i10 = i4 + 112 | 0;
 i11 = i4 + 192 | 0;
 i12 = i4 + 272 | 0;
 i13 = HEAP32[i1 + 32 >> 2] | 0;
 i14 = i13 - 1 | 0;
 do {
  if ((i14 | 0) == 0) {
   HEAP32[i6 + 4 >> 2] = -4;
   HEAP32[i6 >> 2] = 0;
   i15 = 6;
  } else {
   i16 = i1 + 48 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   i18 = HEAP32[i16 + 4 >> 2] | 0;
   i16 = i6 | 0;
   HEAP32[i16 >> 2] = i17;
   HEAP32[i16 + 4 >> 2] = i18;
   i16 = i17;
   if (!((i17 & 0 | 0) == 0 & (i18 & -1 | 0) == (-5 | 0))) {
    i15 = 6;
    break;
   }
   if ((HEAP8[(HEAP32[i16 >> 2] | 0) + 52 | 0] | 0) != 5) {
    i15 = 6;
    break;
   }
   i19 = i16;
  }
 } while (0);
 if ((i15 | 0) == 6) {
  i19 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i6, i1) | 0;
 }
 i6 = i19 + 12 | 0;
 i16 = HEAP32[i6 >> 2] | 0;
 if ((i16 | 0) == 0) {
  __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i19, i1);
  i19 = HEAP32[i6 >> 2] | 0;
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = i19;
  if ((i19 | 0) == 0) {
   i20 = i6;
  } else {
   i21 = i19;
   i22 = i6;
   i15 = 10;
  }
 } else {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = i16;
  i21 = i16;
  i22 = i6;
  i15 = 10;
 }
 if ((i15 | 0) == 10) {
  i6 = i21 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
  i20 = i22;
 }
 __ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE(i7, i5);
 do {
  if ((i13 | 0) == 1) {
   __ZN7WebCore15SegmentedString5clearEv(i7);
  } else if ((i13 | 0) != 2) {
   if (i14 >>> 0 <= 1 >>> 0) {
    break;
   }
   i5 = i9 | 0;
   i22 = i8 | 0;
   i6 = i10 + 36 | 0;
   i21 = i10 + 44 | 0;
   i16 = i10 + 16 | 0;
   i19 = i10 + 48 | 0;
   i18 = 1;
   while (1) {
    i17 = i1 + (i18 + 6 << 3) | 0;
    i23 = HEAP32[i17 >> 2] | 0;
    i24 = HEAP32[i17 + 4 >> 2] | 0;
    HEAP32[i5 >> 2] = i23;
    HEAP32[i5 + 4 >> 2] = i24;
    i17 = i23;
    do {
     if ((i23 & 0 | 0) == 0 & (i24 & -1 | 0) == (-5 | 0)) {
      if ((HEAP8[(HEAP32[i17 >> 2] | 0) + 52 | 0] | 0) != 5) {
       i15 = 18;
       break;
      }
      i25 = i17;
     } else {
      i15 = 18;
     }
    } while (0);
    if ((i15 | 0) == 18) {
     i15 = 0;
     i25 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i9, i1) | 0;
    }
    i17 = i25 + 12 | 0;
    i24 = HEAP32[i17 >> 2] | 0;
    if ((i24 | 0) == 0) {
     __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i25, i1);
     i23 = HEAP32[i17 >> 2] | 0;
     HEAP32[i22 >> 2] = i23;
     if ((i23 | 0) != 0) {
      i26 = i23;
      i15 = 22;
     }
    } else {
     HEAP32[i22 >> 2] = i24;
     i26 = i24;
     i15 = 22;
    }
    if ((i15 | 0) == 22) {
     i15 = 0;
     i24 = i26 | 0;
     HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
    }
    __ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE(i10, i8);
    __ZN7WebCore15SegmentedString6appendERKS0_(i7, i10);
    __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i6);
    i24 = HEAP32[i21 >> 2] | 0;
    if ((i24 | 0) != 0) {
     HEAP32[i21 >> 2] = 0;
     HEAP32[i19 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i24);
    }
    i24 = HEAP32[i16 >> 2] | 0;
    do {
     if ((i24 | 0) != 0) {
      i23 = i24 | 0;
      i17 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
      if ((i17 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i24);
       break;
      } else {
       HEAP32[i23 >> 2] = i17;
       break;
      }
     }
    } while (0);
    i24 = HEAP32[i22 >> 2] | 0;
    do {
     if ((i24 | 0) != 0) {
      i17 = i24 | 0;
      i23 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
      if ((i23 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i24);
       break;
      } else {
       HEAP32[i17 >> 2] = i23;
       break;
      }
     }
    } while (0);
    i18 = i18 + 1 | 0;
    if (i18 >>> 0 >= i14 >>> 0) {
     break;
    }
   }
  }
 } while (0);
 do {
  if ((i3 | 0) != 0) {
   __ZN3WTF6StringC1EPKtj(i12, H_BASE + 24, 1);
   __ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE(i11, i12);
   __ZN7WebCore15SegmentedString6appendERKS0_(i7, i11);
   __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i11 + 36 | 0);
   i14 = i11 + 44 | 0;
   i10 = HEAP32[i14 >> 2] | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i14 >> 2] = 0;
    HEAP32[i11 + 48 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i10);
   }
   i10 = HEAP32[i11 + 16 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i14 = i10 | 0;
     i8 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i14 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i10 = HEAP32[i12 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i8 = i10 | 0;
   i14 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i8 >> 2] = i14;
    break;
   }
  }
 } while (0);
 __ZN7WebCore8Document5writeERKNS_15SegmentedStringEPS0_(i2 | 0, i7, __ZNK7WebCore9DOMWindow8documentEv(HEAP32[(HEAP32[(HEAP32[HEAP32[i1 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 660 >> 2] | 0) | 0);
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i7 + 36 | 0);
 i1 = i7 + 44 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i7 + 48 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i7 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i7 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i20 = i2 | 0;
 i1 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i20 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = (i2 | 0) == 0;
 i15 = i13 + 16 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i13 + 20 | 0;
 HEAP32[i16 >> 2] = -1;
 i17 = i13 + 24 | 0;
 HEAP32[i17 >> 2] = (i14 ? 0 : 0) | i2;
 HEAP32[i17 + 4 >> 2] = i14 ? -6 : -5;
 i14 = HEAP32[i4 >> 2] | 0;
 i4 = i3 + 16 | 0;
 i18 = i9 | 0;
 i19 = i11 | 0;
 i20 = i12 | 0;
 i21 = i2;
 while (1) {
  i22 = i21 | 0;
  i2 = HEAP32[i22 >> 2] | 0;
  if ((HEAP8[i2 + 53 | 0] & 32) == 0) {
   i23 = HEAP32[(HEAP32[i4 >> 2] & -65536) + 1076 >> 2] | 0;
   HEAP32[i18 >> 2] = i14;
   i24 = __ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameERjRPNS_6JSCellE(i2, i23, i9, i7, i8) | 0;
   if ((i24 | 0) != -1) {
    i25 = 4;
    break;
   }
   HEAP32[i19 >> 2] = i14;
   if (__ZN3JSC8JSObject22getOwnPropertySlotSlowEPNS_9ExecStateENS_12PropertyNameERNS_12PropertySlotE(i21, i3, i11, i13) | 0) {
    break;
   }
  } else {
   i23 = HEAP32[i2 >> 2] | 0;
   if ((i23 | 0) != 0) {
    if ((i23 | 0) != (HEAP32[i23 >> 2] | 0)) {
     i25 = 13;
     break;
    }
   }
   i23 = HEAP32[(HEAP32[((HEAP32[(i21 & -65536) + 1048 >> 2] | 0) == 2 ? i21 + 8 | 0 : i2 + 32 | 0) >> 2] | 0) + 52 >> 2] | 0;
   HEAP32[i20 >> 2] = i14;
   if (FUNCTION_TABLE_iiiii[i23 & 1](i21, i3, i12, i13) | 0) {
    break;
   }
  }
  i23 = (HEAP32[i22 >> 2] | 0) + 8 | 0;
  i2 = HEAP32[i23 >> 2] | 0;
  if (!((i2 & 0 | 0) == 0 & (HEAP32[i23 + 4 >> 2] & -1 | 0) == (-5 | 0))) {
   i25 = 24;
   break;
  }
  i23 = i2;
  if ((HEAPU8[(HEAP32[i23 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
   i25 = 24;
   break;
  }
  i21 = i23;
 }
 L13 : do {
  if ((i25 | 0) == 24) {
   HEAP32[i1 + 4 >> 2] = -4;
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i5;
   return;
  } else if ((i25 | 0) == 4) {
   if ((i24 | 0) < 100) {
    i26 = i21 + (i24 + 1 << 3) | 0;
   } else {
    i26 = (HEAP32[i21 + 4 >> 2] | 0) - 8 + (99 - i24 << 3) | 0;
   }
   i12 = i26 | 0;
   i20 = HEAP32[i12 >> 2] | 0;
   i11 = HEAP32[i12 + 4 >> 2] | 0;
   i12 = i11;
   do {
    if ((HEAP8[(HEAP32[i22 >> 2] | 0) + 58 | 0] & 8) != 0 & ((i12 | 0) == (-5 | 0) & 0 == 0)) {
     if ((HEAP8[(HEAP32[i20 >> 2] | 0) + 52 | 0] | 0) != 8) {
      break;
     }
     i19 = i10 | 0;
     HEAP32[i19 >> 2] = i20 & -1;
     HEAP32[i19 + 4 >> 2] = i11 & 0 | -5;
     __ZN3JSC8JSObject22fillGetterPropertySlotERNS_12PropertySlotENS_7JSValueEji(i21, i13, i10, HEAP32[i7 >> 2] | 0, i24);
     break L13;
    }
   } while (0);
   i19 = HEAP32[i7 >> 2] | 0;
   i8 = i13 + 8 | 0;
   HEAP32[i8 >> 2] = i20 & -1;
   HEAP32[i8 + 4 >> 2] = i12 | i11 & 0;
   HEAP32[i13 >> 2] = i19;
   HEAP32[i13 + 32 >> 2] = i21;
   HEAP32[i15 >> 2] = 1;
   HEAP32[i16 >> 2] = i24;
  } else if ((i25 | 0) == 13) {
   _WTFCrash();
  }
 } while (0);
 i25 = HEAP32[i15 >> 2] | 0;
 if ((i25 | 0) == 1) {
  i15 = i13 + 8 | 0;
  i24 = HEAP32[i15 + 4 >> 2] | 0;
  i16 = i1 | 0;
  HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i16 + 4 >> 2] = i24;
  STACKTOP = i5;
  return;
 } else if ((i25 | 0) == 4) {
  i24 = i13 + 8 | 0;
  i16 = HEAP32[i13 + 32 >> 2] | 0;
  i15 = (i16 | 0) == 0;
  i21 = FUNCTION_TABLE_iiiiiii[HEAP32[i24 >> 2] & 1](i3, (i15 ? 0 : 0) | i16, (i15 ? -6 : -5) | 0, HEAP32[i17 >> 2] | 0, HEAP32[i17 + 4 >> 2] | 0, HEAP32[i24 + 4 >> 2] | 0) | 0;
  i24 = i1 | 0;
  HEAP32[i24 >> 2] = i21;
  HEAP32[i24 + 4 >> 2] = tempRet0;
  STACKTOP = i5;
  return;
 } else if ((i25 | 0) == 2) {
  __ZNK3JSC12PropertySlot14functionGetterEPNS_9ExecStateE(i1, i13, i3);
  STACKTOP = i5;
  return;
 } else {
  i25 = HEAP32[i13 + 8 >> 2] | 0;
  i24 = HEAP32[i13 + 32 >> 2] | 0;
  i13 = (i24 | 0) == 0;
  i21 = HEAP32[i17 >> 2] | 0;
  i15 = HEAP32[i17 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = i14;
  i14 = FUNCTION_TABLE_iiiiiii[i25 & 1](i3, (i13 ? 0 : 0) | i24, (i13 ? -6 : -5) | 0, i21, i15, i6) | 0;
  i6 = i1 | 0;
  HEAP32[i6 >> 2] = i14;
  HEAP32[i6 + 4 >> 2] = tempRet0;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore14JSHTMLDocument4openEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i3 + 32 | 0;
 if (((HEAP32[i12 >> 2] | 0) - 1 | 0) >>> 0 <= 2 >>> 0) {
  i13 = __ZNK7WebCore9DOMWindow8documentEv(HEAP32[(HEAP32[(HEAP32[HEAP32[i3 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 660 >> 2] | 0) | 0;
  __ZN7WebCore8Document4openEPS0_(HEAP32[i2 + 12 >> 2] | 0, i13);
  HEAP32[i1 + 4 >> 2] = (i2 | 0) == 0 ? -6 : -5;
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
 i13 = HEAP32[(HEAP32[i2 + 12 >> 2] | 0) + 332 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i2 = __ZN7WebCore18toJSDOMWindowShellEPNS_5FrameERNS_15DOMWrapperWorldE(i13, HEAP32[(HEAP32[(HEAP32[HEAP32[i3 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0) | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   __ZN3JSC10Identifier3addEPNS_9ExecStateEPKc(i5, i3, H_BASE + 8 | 0);
   i14 = HEAP32[i5 >> 2] | 0;
   HEAP32[i9 >> 2] = i14;
   __ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE(i8, i2 | 0, i3, i9);
   do {
    if ((i14 | 0) != 0) {
     i15 = i14 | 0;
     i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i15 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i14 = i8 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   i15 = i16;
   do {
    if ((i16 & 0 | 0) == 0 & (HEAP32[i14 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
     i17 = i15;
     i18 = HEAP32[i17 >> 2] | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i19 | 0) != 0) {
       if ((i19 | 0) == (HEAP32[i19 >> 2] | 0)) {
        break;
       }
       _WTFCrash();
      }
     } while (0);
     i19 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[((HEAP32[(i15 & -65536) + 1048 >> 2] | 0) == 2 ? i17 + 8 | 0 : i18 + 32 | 0) >> 2] | 0) + 28 >> 2] & 1](i17, i10) | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     i20 = HEAP32[i14 >> 2] | 0;
     i21 = HEAP32[i14 + 4 >> 2] | 0;
     HEAP32[i11 >> 2] = i3 + 48;
     HEAP32[i11 + 4 >> 2] = (HEAP32[i12 >> 2] | 0) - 1;
     i22 = HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] | 0;
     HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] = i3;
     i23 = i6 | 0;
     HEAP32[i23 >> 2] = i20;
     HEAP32[i23 + 4 >> 2] = i21;
     i21 = i7 | 0;
     HEAP32[i21 >> 2] = i2;
     HEAP32[i21 + 4 >> 2] = -5;
     __ZN3JSC4callEPNS_9ExecStateENS_7JSValueENS_8CallTypeERKNS_8CallDataES2_RKNS_7ArgListE(i1, i3, i6, i19, i10, i7, i11);
     if ((HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] | 0) == 0) {
      HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] = i22;
      STACKTOP = i4;
      return;
     }
     HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] = i22;
     if ((i22 | 0) != 0) {
      STACKTOP = i4;
      return;
     }
     __ZN7WebCore21JSMainThreadExecState21didLeaveScriptContextEv();
     STACKTOP = i4;
     return;
    }
   } while (0);
   i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i3) | 0;
   HEAP32[i1 + 4 >> 2] = (i2 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i2;
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 + 4 >> 2] = -4;
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 | 0;
 HEAP16[i3 >> 1] = 0;
 HEAP16[i1 + 2 >> 1] = 0;
 i4 = i1 + 4 | 0;
 i5 = i1 + 8 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
 }
 HEAP32[i5 >> 2] = i7;
 i2 = i1 + 12 | 0;
 HEAP8[i2] = 1;
 i8 = i1 + 16 | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) == 0) {
  i10 = i7;
 } else {
  i7 = i9 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  i10 = HEAP32[i5 >> 2] | 0;
 }
 i5 = (i10 | 0) == 0;
 do {
  if (i5) {
   HEAP8[i1 + 13 | 0] = 0;
   i11 = 0;
  } else {
   i7 = HEAP32[i8 >> 2] | 0;
   i9 = i1 + 13 | 0;
   if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
    HEAP8[i9] = 0;
    if ((i7 | 0) == 0) {
     i12 = 0;
    } else {
     i12 = HEAP32[i7 + 8 >> 2] | 0;
    }
    HEAP32[i4 >> 2] = i12;
    i11 = 0;
    break;
   } else {
    HEAP8[i9] = 1;
    if ((i7 | 0) == 0) {
     i13 = 0;
    } else {
     i13 = HEAP32[i7 + 8 >> 2] | 0;
    }
    HEAP32[i4 >> 2] = i13;
    i11 = 1;
    break;
   }
  }
 } while (0);
 i13 = i1 + 20 | 0;
 HEAP16[i13 >> 1] = 0;
 _memset(i1 + 24 | 0, 0, 33) | 0;
 i12 = HEAP32[i6 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i14 = 1;
 } else {
  i14 = (HEAP32[i12 + 4 >> 2] | 0) == 0 | 0;
 }
 HEAP8[i1 + 57 | 0] = i14;
 i14 = i1 + 58 | 0;
 HEAP8[i14] = 0;
 do {
  if (i5) {
   i12 = i1 + 60 | 0;
   HEAP32[i12 >> 2] = F_BASE_vi + 10;
   HEAP32[i12 + 4 >> 2] = 0;
   HEAP8[i14] = 0;
   i12 = i1 + 68 | 0;
   HEAP32[i12 >> 2] = F_BASE_vi + 10;
   HEAP32[i12 + 4 >> 2] = 0;
  } else {
   i12 = i11 << 24 >> 24 == 0;
   do {
    if (i12) {
     i6 = HEAP32[i4 >> 2] | 0;
     if ((i6 | 0) == 0) {
      i15 = 0;
      break;
     }
     i15 = HEAP16[i6 >> 1] | 0;
    } else {
     i15 = HEAPU8[HEAP32[i4 >> 2] | 0] | 0;
    }
   } while (0);
   HEAP16[i13 >> 1] = i15;
   if ((i10 | 0) <= 1) {
    break;
   }
   if ((HEAP16[i3 >> 1] | 0) != 0) {
    break;
   }
   i6 = i1 + 60 | 0;
   if (i12) {
    HEAP32[i6 >> 2] = F_BASE_vi + 8;
    HEAP32[i6 + 4 >> 2] = 0;
    HEAP8[i14] = 0;
    i8 = i1 + 68 | 0;
    if ((HEAP8[i2] & 1) == 0) {
     HEAP32[i8 >> 2] = F_BASE_vi + 8;
     HEAP32[i8 + 4 >> 2] = 0;
     return;
    } else {
     HEAP32[i8 >> 2] = F_BASE_vi + 4;
     HEAP32[i8 + 4 >> 2] = 0;
     return;
    }
   } else {
    HEAP32[i6 >> 2] = F_BASE_vi + 2;
    HEAP32[i6 + 4 >> 2] = 0;
    HEAP8[i14] = 2;
    i6 = i1 + 68 | 0;
    if ((HEAP8[i2] & 1) == 0) {
     HEAP32[i6 >> 2] = F_BASE_vi + 2;
     HEAP32[i6 + 4 >> 2] = 0;
     return;
    } else {
     HEAP32[i6 >> 2] = F_BASE_vi + 6;
     HEAP32[i6 + 4 >> 2] = 0;
     HEAP8[i14] = 3;
     return;
    }
   }
  }
 } while (0);
 __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i1);
 return;
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
function __ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i2 + 16 | 0;
 __ZN3JSC4Heap22incrementDeferralDepthEv(i5);
 i6 = i1 + 40 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = HEAP32[i1 + 20 >> 2] | 0;
   if ((HEAP8[i1 + 54 | 0] & 16) == 0) {
    i9 = i8;
   } else {
    i9 = HEAP32[i8 + 4 >> 2] | 0;
   }
   if ((i9 | 0) == 0) {
    i10 = -1;
    break;
   }
   __ZN3JSC9Structure22materializePropertyMapERNS_2VME(i1, i2);
   i8 = HEAP32[i6 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i10 = -1;
   } else {
    i11 = i8;
    i12 = 6;
   }
  } else {
   i11 = i7;
   i12 = 6;
  }
 } while (0);
 L7 : do {
  if ((i12 | 0) == 6) {
   i7 = HEAP32[i3 >> 2] | 0;
   i6 = HEAP32[i7 + 16 >> 2] | 0;
   i2 = i6 >>> 7;
   i1 = HEAP32[i11 + 8 >> 2] | 0;
   i9 = HEAP32[i11 + 12 >> 2] | 0;
   i8 = HEAP32[i9 + ((i1 & i2) << 2) >> 2] | 0;
   if ((i8 | 0) == 0) {
    i10 = -1;
    break;
   }
   i13 = i9 + (HEAP32[i11 + 4 >> 2] << 2) | 0;
   i14 = (i6 >>> 30) + ~i2 | 0;
   i6 = i14 << 12 ^ i14;
   i14 = i6 >>> 7 ^ i6;
   i6 = i14 << 2 ^ i14;
   i14 = i6 >>> 20 ^ i6 | 1;
   i6 = 0;
   i15 = i2;
   i2 = i8;
   while (1) {
    i16 = i2 - 1 | 0;
    if ((i7 | 0) == (HEAP32[i13 + (i16 << 4) >> 2] | 0)) {
     break;
    }
    i8 = (i6 | 0) == 0 ? i14 : i6;
    i17 = i8 + i15 | 0;
    i18 = HEAP32[i9 + ((i17 & i1) << 2) >> 2] | 0;
    if ((i18 | 0) == 0) {
     i10 = -1;
     break L7;
    } else {
     i6 = i8;
     i15 = i17;
     i2 = i18;
    }
   }
   if ((i13 + (i16 << 4) | 0) == 0) {
    i10 = -1;
    break;
   }
   i10 = HEAP32[i13 + (i16 << 4) + 4 >> 2] | 0;
  }
 } while (0);
 __ZN3JSC4Heap35decrementDeferralDepthAndGCIfNeededEv(i5);
 STACKTOP = i4;
 return i10 | 0;
}
function __ZNK7WebCore14JSHTMLDocument3allEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i2 | 0;
 i9 = HEAP32[(HEAP32[i3 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 __ZN3JSC10Identifier3addEPNS_9ExecStateEPKc(i6, i3, H_BASE + 16 | 0);
 i10 = HEAP32[i6 >> 2] | 0;
 i6 = i2 | 0;
 i11 = HEAP32[i6 >> 2] | 0;
 HEAP32[i5 >> 2] = i10;
 i12 = __ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameE(i11, i9, i5) | 0;
 if ((i12 | 0) == -1) {
  i13 = 0;
  i14 = 0;
  i15 = -6;
 } else {
  if ((i12 | 0) < 100) {
   i16 = i8 + (i12 + 1 << 3) | 0;
  } else {
   i16 = (HEAP32[i2 + 4 >> 2] | 0) - 8 + (99 - i12 << 3) | 0;
  }
  i12 = i16 | 0;
  i16 = HEAP32[i12 + 4 >> 2] | 0;
  i13 = i16 & 0;
  i14 = HEAP32[i12 >> 2] & -1;
  i15 = i16;
 }
 do {
  if ((i10 | 0) != 0) {
   i16 = i10 | 0;
   i12 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i16 >> 2] = i12;
    break;
   }
  }
 } while (0);
 if ((i15 | 0) != -6) {
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i14;
  HEAP32[i10 + 4 >> 2] = i15 | i13;
  STACKTOP = i4;
  return;
 }
 i13 = HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] | 0;
 __ZN7WebCore8Document3allEv(i7, HEAP32[i2 + 12 >> 2] | 0);
 i2 = i7 | 0;
 __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_14HTMLCollectionE(i1, i3, i13, HEAP32[i2 >> 2] | 0);
 i13 = HEAP32[i2 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i13 + 8 | 0;
 i13 = i2 | 0;
 i3 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i13 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
 i3 = i2 - 8 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
 STACKTOP = i4;
 return;
}
function __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + (i4 << 4) | 0;
 if (i3 >>> 0 <= i4 >>> 0) {
  if ((i3 | 0) == (i4 | 0)) {
   return;
  }
  i8 = i6 + (i3 << 4) | 0;
  while (1) {
   i9 = HEAP32[i8 + 12 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i10 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i8 = i8 + 16 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  return;
 }
 if ((i4 | 0) == 0) {
  i12 = i6;
  i13 = i3;
 } else {
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 + 12 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i4 = i6 | 0;
     i8 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i4 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 16 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i12 + (i2 << 4) | 0;
 if ((i13 | 0) == (i2 | 0)) {
  return;
 }
 i2 = i12 + (i13 << 4) | 0;
 while (1) {
  i13 = HEAP32[i2 + 12 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    i12 = i13 | 0;
    i5 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     break;
    } else {
     HEAP32[i12 >> 2] = i5;
     break;
    }
   }
  } while (0);
  i2 = i2 + 16 | 0;
  if ((i2 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore14JSHTMLDocument18canGetItemsForNameEPN3JSC9ExecStateEPNS_12HTMLDocumentENS1_12PropertyNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 i3 = __ZN7WebCore16findAtomicStringEN3JSC12PropertyNameE(i4) | 0;
 if ((i3 | 0) == 0) {
  i5 = 0;
  STACKTOP = i1;
  return i5 | 0;
 }
 i4 = HEAP32[i2 + 2292 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  STACKTOP = i1;
  return i5 | 0;
 }
 i6 = HEAP32[i2 + 2300 >> 2] | 0;
 i2 = i3;
 i7 = i2 + ~(i2 << 15) | 0;
 i2 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i2 >>> 6 ^ i2;
 i2 = i7 + ~(i7 << 11) | 0;
 i7 = i2 >>> 16 ^ i2;
 i2 = i6 & i7;
 i8 = i4 + (i2 * 24 & -1) | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L7 : do {
  if ((i9 | 0) == (i3 | 0)) {
   i10 = i8;
  } else {
   i11 = (i7 >>> 23) + ~i7 | 0;
   i12 = i11 << 12 ^ i11;
   i11 = i12 >>> 7 ^ i12;
   i12 = i11 << 2 ^ i11;
   i11 = i12 >>> 20 ^ i12 | 1;
   i12 = 0;
   i13 = i2;
   i14 = i9;
   while (1) {
    if ((i14 | 0) == 0) {
     i10 = 0;
     break L7;
    }
    i15 = (i12 | 0) == 0 ? i11 : i12;
    i16 = i15 + i13 & i6;
    i17 = i4 + (i16 * 24 & -1) | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    if ((i18 | 0) == (i3 | 0)) {
     i10 = i17;
     break;
    } else {
     i12 = i15;
     i13 = i16;
     i14 = i18;
    }
   }
  }
 } while (0);
 i5 = (i10 | 0) != 0;
 STACKTOP = i1;
 return i5 | 0;
}
function __ZNK7WebCore12HTMLDocument41documentNamedItemContainsMultipleElementsERKN3WTF16AtomicStringImplE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 + 2292 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 2296 >> 2] | 0;
  i5 = i4 * 24 & -1 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 2300 >> 2] | 0;
  i8 = i2;
  i9 = i8 + ~(i8 << 15) | 0;
  i8 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i8 >>> 6 ^ i8;
  i8 = i9 + ~(i9 << 11) | 0;
  i9 = i8 >>> 16 ^ i8;
  i8 = i4 & i9;
  i10 = i3 + (i8 * 24 & -1) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L3 : do {
   if ((i11 | 0) == (i2 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i8;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L3;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 * 24 & -1) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i2 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i2 = HEAP32[i1 + 2296 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i2 * 24 & -1) | 0 : i12;
  i6 = i3;
  i7 = i2;
 }
 if ((i5 | 0) == (i6 + (i7 * 24 & -1) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 i21 = (HEAP32[i5 + 8 >> 2] | 0) >>> 0 > 1 >>> 0;
 return i21 | 0;
}
function __ZN7WebCore14JSHTMLDocument6setAllEPN3JSC9ExecStateENS1_7JSValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 32 | 0;
 i7 = i4 + 40 | 0;
 i8 = i4 + 48 | 0;
 i9 = HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 __ZN3JSC10Identifier3addEPNS_9ExecStateEPKc(i8, i2, H_BASE + 16 | 0);
 i2 = HEAP32[i8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 i8 = (i1 | 0) == 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 i11 = i5 + 8 | 0;
 HEAP32[i11 >> 2] = (i8 ? 0 : 0) | i1;
 HEAP32[i11 + 4 >> 2] = i8 ? -6 : -5;
 HEAP8[i5 + 20 | 0] = 0;
 HEAP8[i5 + 21 | 0] = 0;
 HEAP32[i5 + 24 >> 2] = 0;
 HEAP32[i6 >> 2] = i2;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = i3;
 HEAP32[i8 + 4 >> 2] = i10;
 if ((i3 & 0 | 0) == 0 & (i10 & -1 | 0) == (-5 | 0)) {
  i12 = __ZN3JSC21getCallableObjectSlowEPNS_6JSCellE(i3) | 0;
 } else {
  i12 = 0;
 }
 __ZN3JSC8JSObject17putDirectInternalILNS0_7PutModeE1EEEbRNS_2VMENS_12PropertyNameENS_7JSValueEjRNS_15PutPropertySlotEPNS_6JSCellE(i1 | 0, i9, i6, i7, 0, i5, i12) | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i12 = i2 | 0;
 i5 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i12 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
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
function __ZN7WebCore14JSHTMLDocument7writelnEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCoreL13documentWriteEPN3JSC9ExecStateEPNS_12HTMLDocumentENS_18NewlineRequirementE(i3, HEAP32[i2 + 12 >> 2] | 0, 1);
 HEAP32[i1 + 4 >> 2] = -4;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore14JSHTMLDocument5writeEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCoreL13documentWriteEPN3JSC9ExecStateEPNS_12HTMLDocumentENS_18NewlineRequirementE(i3, HEAP32[i2 + 12 >> 2] | 0, 0);
 HEAP32[i1 + 4 >> 2] = -4;
 HEAP32[i1 >> 2] = 0;
 return;
}
function dynCall_iiiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return FUNCTION_TABLE_iiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function vi___ZN7WebCore15SegmentedString28advanceAndUpdateLineNumber16Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString28advanceAndUpdateLineNumber16Ev(i1 | 0);
}
function vi___ZN7WebCore15SegmentedString27advanceAndUpdateLineNumber8Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString27advanceAndUpdateLineNumber8Ev(i1 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function b2(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(2);
 return 0;
}
function vi___ZN7WebCore15SegmentedString12advanceEmptyEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString12advanceEmptyEv(i1 | 0);
}
function vi___ZN7WebCore15SegmentedString9advance16Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString9advance16Ev(i1 | 0);
}
function vi___ZN7WebCore15SegmentedString8advance8Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString8advance8Ev(i1 | 0);
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
function b3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(3);
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
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
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
function b4() {
 abort(4);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,vi___ZN7WebCore15SegmentedString8advance8Ev__wrapper,b1,vi___ZN7WebCore15SegmentedString28advanceAndUpdateLineNumber16Ev__wrapper,b1,vi___ZN7WebCore15SegmentedString27advanceAndUpdateLineNumber8Ev__wrapper,b1,vi___ZN7WebCore15SegmentedString9advance16Ev__wrapper,b1,vi___ZN7WebCore15SegmentedString12advanceEmptyEv__wrapper,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_iiiiiii = [b2,b2];
  var FUNCTION_TABLE_iiiii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vi: dynCall_vi, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_iiiii: dynCall_iiiii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vi": invoke_vi, "invoke_iiiiiii": invoke_iiiiiii, "invoke_iiiii": invoke_iiiii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE": __ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE, "__ZN7WebCore9HTMLNames9iframeTagE": __ZN7WebCore9HTMLNames9iframeTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore12HTMLDocument41documentNamedItemContainsMultipleElementsERKN3WTF16AtomicStringImplE","__ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv","__ZN3JSC8JSObject43setStructureAndReallocateStorageIfNecessaryERNS_2VMEjPNS_9StructureE","__ZN3JSC8JSObject17putDirectInternalILNS0_7PutModeE1EEEbRNS_2VMENS_12PropertyNameENS_7JSValueEjRNS_15PutPropertySlotEPNS_6JSCellE","__ZN7WebCoreL13documentWriteEPN3JSC9ExecStateEPNS_12HTMLDocumentENS_18NewlineRequirementE","__ZN7WebCore14JSHTMLDocument7writelnEPN3JSC9ExecStateE","__ZN7WebCore14JSHTMLDocument10nameGetterEPN3JSC9ExecStateExxNS1_12PropertyNameE","__ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE","_memset","__ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameE","_strlen","__ZN7WebCore14JSHTMLDocument4openEPN3JSC9ExecStateE","_memcpy","__ZN3JSC9Structure27putWillGrowOutOfLineStorageEv","__ZNK7WebCore14JSHTMLDocument3allEPN3JSC9ExecStateE","__ZN7WebCore14JSHTMLDocument5writeEPN3JSC9ExecStateE","__ZN7WebCore14JSHTMLDocument6setAllEPN3JSC9ExecStateENS1_7JSValueE","__ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE","__ZN7WebCore14JSHTMLDocument18canGetItemsForNameEPN3JSC9ExecStateEPNS_12HTMLDocumentENS1_12PropertyNameE"]

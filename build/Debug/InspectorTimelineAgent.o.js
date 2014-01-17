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
H_BASE = parentModule["_malloc"](392 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 392;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore22InspectorTimelineAgentD1Ev;
var __ZN7WebCore22InspectorTimelineAgentC1EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentEPNS_20InspectorMemoryAgentENS0_13InspectorTypeEPNS_15InspectorClientE;
/* memory initializer */ allocate([110,111,100,101,115,0,0,0,106,115,69,118,101,110,116,76,105,115,116,101,110,101,114,115,0,0,0,0,0,0,0,0,84,105,109,101,108,105,110,101,0,0,0,0,0,0,0,0,117,115,101,100,72,101,97,112,83,105,122,101,68,101,108,116,97,0,0,0,0,0,0,0,101,110,100,84,105,109,101,0,99,104,105,108,100,114,101,110,0,0,0,0,0,0,0,0,100,97,116,97,0,0,0,0,102,114,97,109,101,73,100,0,119,101,98,83,111,99,107,101,116,80,114,111,116,111,99,111,108,0,0,0,0,0,0,0,117,114,108,0,0,0,0,0,105,100,101,110,116,105,102,105,101,114,0,0,0,0,0,0,117,115,101,100,72,101,97,112,83,105,122,101,0,0,0,0,99,111,117,110,116,101,114,115,0,0,0,0,0,0,0,0,100,111,99,117,109,101,110,116,115,0,0,0,0,0,0,0,116,121,112,101,0,0,0,0,101,110,100,76,105,110,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var __ZTVN7WebCore18InspectorAgentBaseE=(H_BASE+360)|0;
  var __ZTVN7WebCore22InspectorTimelineAgentE=(H_BASE+272)|0;
  var __ZTVN9Inspector18InspectorAgentBaseE=(H_BASE+232)|0;
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
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore22InspectorTimelineAgent24didCompleteCurrentRecordENS_18TimelineRecordTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, d26 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 72 | 0;
 i14 = i3 + 80 | 0;
 i15 = i1 + 48 | 0;
 i16 = i1 + 56 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i18 = _llvm_uadd_with_overflow_i32(i17 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i17 = i18;
 i18 = HEAP32[i15 >> 2] | 0;
 i19 = HEAP32[i18 + (i17 * 20 & -1) >> 2] | 0;
 i20 = (i19 | 0) == 0;
 if (!i20) {
  i21 = i19 + 4 | 0;
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
 }
 i21 = HEAP32[i18 + (i17 * 20 & -1) + 4 >> 2] | 0;
 i22 = (i21 | 0) == 0;
 if (!i22) {
  i23 = i21 + 4 | 0;
  HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
 }
 i23 = HEAP32[i18 + (i17 * 20 & -1) + 8 >> 2] | 0;
 i24 = (i23 | 0) == 0;
 if (!i24) {
  i25 = i23 + 4 | 0;
  HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
 }
 i25 = HEAP32[i18 + (i17 * 20 & -1) + 16 >> 2] | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 if ((i17 | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 __ZN3WTF6VectorIN7WebCore22InspectorTimelineAgent19TimelineRecordEntryELj0ENS_15CrashOnOverflowEE6shrinkEj(i15, i17 - 1 | 0);
 i17 = i19 | 0;
 __ZN3WTF6StringC1EPKc(i9, H_BASE + 104 | 0);
 i15 = i10 | 0;
 HEAP32[i15 >> 2] = i21;
 if (!i22) {
  i16 = i21 + 4 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i17, i9, i10);
 i10 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i15 = i10 + 4 | 0;
   i16 = i15 | 0;
   i18 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i16 >> 2] = i18;
    break;
   }
   i18 = i15 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 31](i18);
  }
 } while (0);
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i9 = i10 | 0;
   i18 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i18;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i11, H_BASE + 88 | 0);
 i10 = i12 | 0;
 HEAP32[i10 >> 2] = i23;
 if (!i24) {
  i18 = i23 + 4 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase8setArrayERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorArrayEEE(i17, i11, i12);
 i12 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i10 = i12 + 4 | 0;
   i18 = i10 | 0;
   i9 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i18 >> 2] = i9;
    break;
   }
   i9 = i10 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
  }
 } while (0);
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i11 = i12 | 0;
   i9 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i11 >> 2] = i9;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i13, H_BASE + 80 | 0);
 d26 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
 __ZN9Inspector19InspectorBasicValue6createEd(i8, (d26 - +HEAPF64[i1 + 24 >> 3]) * +1e3);
 i12 = i7 | 0;
 i9 = i8 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i12 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i17, i13, i7);
 i7 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i12 = i7 + 4 | 0;
   i8 = i12 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i8 >> 2] = i11;
    break;
   }
   i11 = i12 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 31](i11);
  }
 } while (0);
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 + 4 | 0;
   i11 = i9 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i11 >> 2] = i12;
    break;
   }
   i12 = i9 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
  }
 } while (0);
 i7 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i13 = i7 | 0;
   i12 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i13 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i7 = __ZN3JSC4Heap4sizeEv((__ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0) + 16 | 0) | 0;
 do {
  if ((i7 | 0) != (i25 | 0)) {
   __ZN3WTF6StringC1EPKc(i14, H_BASE + 56 | 0);
   __ZN9Inspector19InspectorBasicValue6createEd(i6, +((i7 - i25 | 0) >>> 0 >>> 0));
   i12 = i5 | 0;
   i13 = i6 | 0;
   i9 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i12 >> 2] = i9;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i17, i14, i5);
   i9 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i12 = i9 + 4 | 0;
     i11 = i12 | 0;
     i8 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i11 >> 2] = i8;
      break;
     }
     i8 = i12 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
    }
   } while (0);
   i9 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i8 = i9 + 4 | 0;
     i12 = i8 | 0;
     i11 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) != 0) {
      HEAP32[i12 >> 2] = i11;
      break;
     }
     i11 = i8 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 31](i11);
    }
   } while (0);
   i9 = HEAP32[i14 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i13 = i9 | 0;
   i11 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i13 >> 2] = i11;
    break;
   }
  }
 } while (0);
 if (!i20) {
  i14 = i19 + 4 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 }
 __ZN7WebCore22InspectorTimelineAgent17commitFrameRecordEv(i1);
 i14 = i4 | 0;
 HEAP32[i14 >> 2] = i19;
 __ZN7WebCore22InspectorTimelineAgent24innerAddRecordToTimelineEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeE(i1, i4, i2);
 i2 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i14 = i2 + 4 | 0;
   i4 = i14 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i4 >> 2] = i1;
    break;
   }
   i1 = i14 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
  }
 } while (0);
 do {
  if (!i24) {
   i2 = i23 + 4 | 0;
   i1 = i2 | 0;
   i14 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i1 >> 2] = i14;
    break;
   }
   i14 = i2 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 31](i14);
  }
 } while (0);
 do {
  if (!i22) {
   i23 = i21 + 4 | 0;
   i24 = i23 | 0;
   i14 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i24 >> 2] = i14;
    break;
   }
   i14 = i23 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 31](i14);
  }
 } while (0);
 if (i20) {
  STACKTOP = i3;
  return;
 }
 i20 = i19 + 4 | 0;
 i19 = i20 | 0;
 i21 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
 if ((i21 | 0) != 0) {
  HEAP32[i19 >> 2] = i21;
  STACKTOP = i3;
  return;
 }
 i21 = i20 - 4 | 0;
 if ((i21 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 31](i21);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent14setDOMCountersEPN9Inspector11TypeBuilder8Timeline13TimelineEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, d26 = +0, d27 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 72 | 0;
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 i20 = i3 + 128 | 0;
 i21 = i3 + 136 | 0;
 i22 = i3 + 144 | 0;
 i23 = i3 + 152 | 0;
 i24 = __ZN3JSC4Heap4sizeEv((__ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0) + 16 | 0) | 0;
 i25 = i2 | 0;
 HEAP32[i23 >> 2] = H_BASE + 168;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i22, i23);
 __ZN9Inspector19InspectorBasicValue6createEd(i21, +(i24 | 0));
 i24 = i20 | 0;
 i23 = i21 | 0;
 i21 = HEAP32[i23 >> 2] | 0;
 HEAP32[i23 >> 2] = 0;
 HEAP32[i24 >> 2] = i21;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i25, i22, i20);
 i20 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i24 = i20 + 4 | 0;
   i21 = i24 | 0;
   i2 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i21 >> 2] = i2;
    break;
   }
   i2 = i24 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
  }
 } while (0);
 i20 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i23 = i20 + 4 | 0;
   i2 = i23 | 0;
   i24 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) != 0) {
    HEAP32[i2 >> 2] = i24;
    break;
   }
   i24 = i23 - 4 | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 31](i24);
  }
 } while (0);
 i20 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i22 = i20 | 0;
   i24 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i24 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i22 >> 2] = i24;
    break;
   }
  }
 } while (0);
 if ((HEAP8[i1 + 85 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 + 72 >> 2] | 0) == 0) {
  i1 = __ZN7WebCore17InspectorCounters12counterValueENS0_11CounterTypeE(0) | 0;
  d26 = +(i1 | 0);
  d27 = +(__ZN7WebCore17InspectorCounters12counterValueENS0_11CounterTypeE(1) | 0);
 } else {
  d26 = +0;
  d27 = +0;
 }
 i1 = __ZN7WebCore28ThreadLocalInspectorCounters12counterValueENS0_11CounterTypeE(__ZN7WebCore28ThreadLocalInspectorCounters7currentEv() | 0, 0) | 0;
 __ZN9Inspector15InspectorObject6createEv(i19);
 i20 = HEAP32[i19 >> 2] | 0;
 i19 = i20 | 0;
 HEAP32[i18 >> 2] = H_BASE + 200;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector19InspectorBasicValue6createEd(i16, d26);
 i18 = i15 | 0;
 i24 = i16 | 0;
 i16 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 HEAP32[i18 >> 2] = i16;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i19, i17, i15);
 i15 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i18 = i15 + 4 | 0;
   i16 = i18 | 0;
   i22 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i22 | 0) != 0) {
    HEAP32[i16 >> 2] = i22;
    break;
   }
   i22 = i18 - 4 | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 31](i22);
  }
 } while (0);
 i15 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i24 = i15 + 4 | 0;
   i22 = i24 | 0;
   i18 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i22 >> 2] = i18;
    break;
   }
   i18 = i24 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 31](i18);
  }
 } while (0);
 i15 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i17 = i15 | 0;
   i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i17 >> 2] = i18;
    break;
   }
  }
 } while (0);
 HEAP32[i14 >> 2] = H_BASE + 8;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i13, i14);
 __ZN9Inspector19InspectorBasicValue6createEd(i12, d27);
 i14 = i11 | 0;
 i15 = i12 | 0;
 i12 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i14 >> 2] = i12;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i19, i13, i11);
 i11 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i14 = i11 + 4 | 0;
   i12 = i14 | 0;
   i18 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i12 >> 2] = i18;
    break;
   }
   i18 = i14 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 31](i18);
  }
 } while (0);
 i11 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i15 = i11 + 4 | 0;
   i18 = i15 | 0;
   i14 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i18 >> 2] = i14;
    break;
   }
   i14 = i15 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 31](i14);
  }
 } while (0);
 i11 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i13 = i11 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 HEAP32[i10 >> 2] = H_BASE + 16;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 __ZN9Inspector19InspectorBasicValue6createEd(i8, +(i1 | 0));
 i1 = i7 | 0;
 i10 = i8 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i1 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i19, i9, i7);
 i7 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i1 = i7 + 4 | 0;
   i19 = i1 | 0;
   i8 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i19 >> 2] = i8;
    break;
   }
   i8 = i1 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 + 4 | 0;
   i8 = i10 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i8 >> 2] = i1;
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
  }
 } while (0);
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 | 0;
   i1 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i9 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if ((i20 | 0) != 0) {
   i7 = i20 + 4 | 0;
   i1 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i1 + 1;
   i7 = i20 + 4 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i7 >> 2] = i1;
    break;
   }
   i1 = i7 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
  }
 } while (0);
 HEAP32[i5 >> 2] = H_BASE + 184;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i4, i5);
 i5 = i6 | 0;
 HEAP32[i5 >> 2] = i20;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i25, i4, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 + 4 | 0;
   i25 = i5 | 0;
   i20 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i25 >> 2] = i20;
    break;
   }
   i20 = i5 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 31](i20);
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i6 | 0;
 i20 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i20 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i20;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore22InspectorTimelineAgent24innerAddRecordToTimelineEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 __ZN3WTF6StringC1EPKc(i8, H_BASE + 216 | 0);
 switch (i3 | 0) {
 case 5:
  {
   i12 = 69;
   break;
  }
 case 3:
  {
   i12 = 67;
   break;
  }
 case 18:
  {
   i12 = 82;
   break;
  }
 case 23:
  {
   i12 = 87;
   break;
  }
 case 0:
  {
   i12 = 64;
   break;
  }
 case 33:
  {
   i12 = 98;
   break;
  }
 case 34:
  {
   i12 = 99;
   break;
  }
 case 6:
  {
   i12 = 70;
   break;
  }
 case 29:
  {
   i12 = 94;
   break;
  }
 case 30:
  {
   i12 = 95;
   break;
  }
 case 27:
  {
   i12 = 91;
   break;
  }
 case 1:
  {
   i12 = 65;
   break;
  }
 case 31:
  {
   i12 = 96;
   break;
  }
 case 32:
  {
   i12 = 97;
   break;
  }
 case 4:
  {
   i12 = 68;
   break;
  }
 case 24:
  {
   i12 = 88;
   break;
  }
 case 8:
  {
   i12 = 72;
   break;
  }
 case 28:
  {
   i12 = 93;
   break;
  }
 case 25:
  {
   i12 = 89;
   break;
  }
 case 20:
  {
   i12 = 84;
   break;
  }
 case 9:
  {
   i12 = 73;
   break;
  }
 case 10:
  {
   i12 = 74;
   break;
  }
 case 11:
  {
   i12 = 75;
   break;
  }
 case 12:
  {
   i12 = 76;
   break;
  }
 case 13:
  {
   i12 = 77;
   break;
  }
 case 14:
  {
   i12 = 78;
   break;
  }
 case 15:
  {
   i12 = 79;
   break;
  }
 case 16:
  {
   i12 = 80;
   break;
  }
 case 26:
  {
   i12 = 90;
   break;
  }
 case 19:
  {
   i12 = 83;
   break;
  }
 case 7:
  {
   i12 = 71;
   break;
  }
 case 17:
  {
   i12 = 81;
   break;
  }
 case 21:
  {
   i12 = 85;
   break;
  }
 case 22:
  {
   i12 = 86;
   break;
  }
 case 2:
  {
   i12 = 66;
   break;
  }
 default:
  {
   i12 = 81;
  }
 }
 __ZN9Inspector11TypeBuilder23getWebEnumConstantValueEi(i9, i12);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i9);
 i12 = i6 | 0;
 i3 = i7 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i12 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i2, i8, i6);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 4 | 0;
   i2 = i12 | 0;
   i7 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i2 >> 2] = i7;
    break;
   }
   i7 = i12 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 i6 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i3 = i6 + 4 | 0;
   i7 = i3 | 0;
   i12 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i7 >> 2] = i12;
    break;
   }
   i12 = i3 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i8 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i11 = i5 | 0;
 HEAP32[i11 >> 2] = 0;
 FUNCTION_TABLE_iii[HEAP32[(HEAP32[i6 >> 2] | 0) + 40 >> 2] & 1](i6 | 0, i5) | 0;
 i5 = HEAP32[i11 >> 2] | 0;
 i12 = i5;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 4 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   i8 = HEAP32[i11 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 + 4 | 0;
   i8 = i9 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i8 >> 2] = i3;
    break;
   }
   i3 = i9 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
  }
 } while (0);
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 + 4 | 0;
   i3 = i11 | 0;
   i9 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i3 >> 2] = i9;
    break;
   }
   i9 = i11 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
  }
 } while (0);
 __ZN7WebCore22InspectorTimelineAgent14setDOMCountersEPN9Inspector11TypeBuilder8Timeline13TimelineEventE(i1, i12);
 i12 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i6 = i10 | 0;
  HEAP32[i6 >> 2] = i5;
  __ZN7WebCore22InspectorTimelineAgent9sendEventEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEE(i1, i10);
  i10 = HEAP32[i6 >> 2] | 0;
  if ((i10 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i6 = i10 + 4 | 0;
  i10 = i6 | 0;
  i9 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) != 0) {
   HEAP32[i10 >> 2] = i9;
   STACKTOP = i4;
   return;
  }
  i9 = i6 - 4 | 0;
  if ((i9 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
  STACKTOP = i4;
  return;
 }
 i9 = _llvm_uadd_with_overflow_i32(i12 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i12 = i9;
 i9 = HEAP32[i1 + 48 >> 2] | 0;
 i1 = HEAP32[i9 + (i12 * 20 & -1) >> 2] | 0;
 i6 = (i1 | 0) == 0;
 if (!i6) {
  i10 = i1 + 4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 i10 = HEAP32[i9 + (i12 * 20 & -1) + 4 >> 2] | 0;
 i11 = (i10 | 0) == 0;
 if (!i11) {
  i3 = i10 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = HEAP32[i9 + (i12 * 20 & -1) + 8 >> 2] | 0;
 i12 = (i3 | 0) == 0;
 if (!i12) {
  i9 = i3 + 4 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = i3 + 12 | 0;
 i8 = i3 + 20 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i9, i7 + 1 | 0);
  HEAP32[(HEAP32[i9 >> 2] | 0) + (HEAP32[i8 >> 2] << 2) >> 2] = i5;
 } else {
  HEAP32[(HEAP32[i9 >> 2] | 0) + (i7 << 2) >> 2] = i5;
 }
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 do {
  if (!i12) {
   i8 = i3 + 4 | 0;
   i5 = i8 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i8 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 do {
  if (!i11) {
   i3 = i10 + 4 | 0;
   i12 = i3 | 0;
   i7 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i12 >> 2] = i7;
    break;
   }
   i7 = i3 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 if (i6) {
  STACKTOP = i4;
  return;
 }
 i6 = i1 + 4 | 0;
 i1 = i6 | 0;
 i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i1 >> 2] = i10;
  STACKTOP = i4;
  return;
 }
 i10 = i6 - 4 | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent15localToPageQuadERKNS_12RenderObjectERKNS_10LayoutRectEPNS_9FloatQuadE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, d27 = +0, d28 = +0, d29 = +0, d30 = +0, d31 = +0, d32 = +0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i1 | 0;
 i6 = i5 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i8 = i7 | 0;
 i9 = i7;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = i14;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i19 = i18;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i23 = i22;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i26 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0;
 d27 = +(HEAP32[i3 >> 2] | 0);
 d28 = +(HEAP32[i3 + 4 >> 2] | 0);
 d29 = +(HEAP32[i3 + 8 >> 2] | 0);
 d30 = +(HEAP32[i3 + 12 >> 2] | 0);
 d31 = +d27;
 d32 = +d28;
 HEAPF32[i8 >> 2] = d31;
 HEAPF32[i8 + 4 >> 2] = d32;
 d32 = d27 + d29;
 HEAPF32[i7 + 8 >> 2] = d32;
 HEAPF32[i9 + 12 >> 2] = d28;
 d29 = d28 + d30;
 HEAPF32[i7 + 16 >> 2] = d32;
 HEAPF32[i9 + 20 >> 2] = d29;
 HEAPF32[i7 + 24 >> 2] = d27;
 HEAPF32[i9 + 28 >> 2] = d29;
 __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i5, i2, i9, 0, 0, 0);
 i9 = i26 | 0;
 d29 = +HEAPF32[i6 >> 2];
 d27 = +HEAPF32[i6 + 4 >> 2];
 d32 = +_round(+d29);
 do {
  if (d32 < +2147483647) {
   if (d32 <= +-2147483648) {
    i33 = -2147483648;
    break;
   }
   i33 = ~~d32;
  } else {
   i33 = 2147483647;
  }
 } while (0);
 d32 = +_round(+d27);
 do {
  if (d32 < +2147483647) {
   if (d32 <= +-2147483648) {
    i34 = -2147483648;
    break;
   }
   i34 = ~~d32;
  } else {
   i34 = 2147483647;
  }
 } while (0);
 HEAP32[i13 >> 2] = i33;
 HEAP32[i13 + 4 >> 2] = i34;
 __ZNK7WebCore10ScrollView18contentsToRootViewERKNS_8IntPointE(i12, i9, i13);
 __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i11, i12);
 i12 = i4;
 i11 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i12 + 4 >> 2] = i11;
 i11 = i5 + 8 | 0;
 d32 = +HEAPF32[i11 >> 2];
 d27 = +HEAPF32[i11 + 4 >> 2];
 d29 = +_round(+d32);
 do {
  if (d29 < +2147483647) {
   if (d29 <= +-2147483648) {
    i35 = -2147483648;
    break;
   }
   i35 = ~~d29;
  } else {
   i35 = 2147483647;
  }
 } while (0);
 d29 = +_round(+d27);
 do {
  if (d29 < +2147483647) {
   if (d29 <= +-2147483648) {
    i36 = -2147483648;
    break;
   }
   i36 = ~~d29;
  } else {
   i36 = 2147483647;
  }
 } while (0);
 HEAP32[i17 >> 2] = i35;
 HEAP32[i17 + 4 >> 2] = i36;
 __ZNK7WebCore10ScrollView18contentsToRootViewERKNS_8IntPointE(i16, i9, i17);
 __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i15, i16);
 i16 = i4 + 8 | 0;
 i15 = HEAP32[i14 + 4 >> 2] | 0;
 HEAP32[i16 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i16 + 4 >> 2] = i15;
 i15 = i5 + 16 | 0;
 d29 = +HEAPF32[i15 >> 2];
 d27 = +HEAPF32[i15 + 4 >> 2];
 d32 = +_round(+d29);
 do {
  if (d32 < +2147483647) {
   if (d32 <= +-2147483648) {
    i37 = -2147483648;
    break;
   }
   i37 = ~~d32;
  } else {
   i37 = 2147483647;
  }
 } while (0);
 d32 = +_round(+d27);
 do {
  if (d32 < +2147483647) {
   if (d32 <= +-2147483648) {
    i38 = -2147483648;
    break;
   }
   i38 = ~~d32;
  } else {
   i38 = 2147483647;
  }
 } while (0);
 HEAP32[i21 >> 2] = i37;
 HEAP32[i21 + 4 >> 2] = i38;
 __ZNK7WebCore10ScrollView18contentsToRootViewERKNS_8IntPointE(i20, i9, i21);
 __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i19, i20);
 i20 = i4 + 16 | 0;
 i19 = HEAP32[i18 + 4 >> 2] | 0;
 HEAP32[i20 >> 2] = HEAP32[i18 >> 2];
 HEAP32[i20 + 4 >> 2] = i19;
 i19 = i5 + 24 | 0;
 d32 = +HEAPF32[i19 >> 2];
 d27 = +HEAPF32[i19 + 4 >> 2];
 d29 = +_round(+d32);
 do {
  if (d29 < +2147483647) {
   if (d29 <= +-2147483648) {
    i39 = -2147483648;
    break;
   }
   i39 = ~~d29;
  } else {
   i39 = 2147483647;
  }
 } while (0);
 d29 = +_round(+d27);
 if (d29 >= +2147483647) {
  i40 = 2147483647;
  i41 = i25 | 0;
  HEAP32[i41 >> 2] = i39;
  i42 = i25 + 4 | 0;
  HEAP32[i42 >> 2] = i40;
  __ZNK7WebCore10ScrollView18contentsToRootViewERKNS_8IntPointE(i24, i9, i25);
  __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i23, i24);
  i43 = i4 + 24 | 0;
  i44 = i43;
  i45 = i22 | 0;
  i46 = HEAP32[i45 >> 2] | 0;
  i47 = i22 + 4 | 0;
  i48 = HEAP32[i47 >> 2] | 0;
  i49 = i44 | 0;
  HEAP32[i49 >> 2] = i46;
  i50 = i44 + 4 | 0;
  HEAP32[i50 >> 2] = i48;
  STACKTOP = i1;
  return;
 }
 if (d29 <= +-2147483648) {
  i40 = -2147483648;
  i41 = i25 | 0;
  HEAP32[i41 >> 2] = i39;
  i42 = i25 + 4 | 0;
  HEAP32[i42 >> 2] = i40;
  __ZNK7WebCore10ScrollView18contentsToRootViewERKNS_8IntPointE(i24, i9, i25);
  __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i23, i24);
  i43 = i4 + 24 | 0;
  i44 = i43;
  i45 = i22 | 0;
  i46 = HEAP32[i45 >> 2] | 0;
  i47 = i22 + 4 | 0;
  i48 = HEAP32[i47 >> 2] | 0;
  i49 = i44 | 0;
  HEAP32[i49 >> 2] = i46;
  i50 = i44 + 4 | 0;
  HEAP32[i50 >> 2] = i48;
  STACKTOP = i1;
  return;
 }
 i40 = ~~d29;
 i41 = i25 | 0;
 HEAP32[i41 >> 2] = i39;
 i42 = i25 + 4 | 0;
 HEAP32[i42 >> 2] = i40;
 __ZNK7WebCore10ScrollView18contentsToRootViewERKNS_8IntPointE(i24, i9, i25);
 __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i23, i24);
 i43 = i4 + 24 | 0;
 i44 = i43;
 i45 = i22 | 0;
 i46 = HEAP32[i45 >> 2] | 0;
 i47 = i22 + 4 | 0;
 i48 = HEAP32[i47 >> 2] | 0;
 i49 = i44 | 0;
 HEAP32[i49 >> 2] = i46;
 i50 = i44 + 4 | 0;
 HEAP32[i50 >> 2] = i48;
 STACKTOP = i1;
 return;
}
function __ZN7WebCore21TimelineRecordFactory25createWebSocketCreateDataEmRKNS_3URLERKN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 __ZN9Inspector15InspectorObject6createEv(i12);
 i16 = i12 | 0;
 i12 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 i16 = i12 | 0;
 __ZN3WTF6StringC1EPKc(i13, H_BASE + 152 | 0);
 __ZN9Inspector19InspectorBasicValue6createEd(i11, +(i2 >>> 0 >>> 0));
 i2 = i10 | 0;
 i17 = i11 | 0;
 i11 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i2 >> 2] = i11;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i16, i13, i10);
 i10 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i2 = i10 + 4 | 0;
   i11 = i2 | 0;
   i18 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i11 >> 2] = i18;
    break;
   }
   i18 = i2 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 31](i18);
  }
 } while (0);
 i10 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i17 = i10 + 4 | 0;
   i18 = i17 | 0;
   i2 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i18 >> 2] = i2;
    break;
   }
   i2 = i17 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
  }
 } while (0);
 i10 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i13 = i10 | 0;
   i2 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i13 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i14, H_BASE + 144 | 0);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i9, i3 | 0);
 i3 = i8 | 0;
 i10 = i9 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i3 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i16, i14, i8);
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 + 4 | 0;
   i9 = i3 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i3 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
  }
 } while (0);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 + 4 | 0;
   i2 = i10 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i2 >> 2] = i3;
    break;
   }
   i3 = i10 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
  }
 } while (0);
 i8 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i14 = i8 | 0;
   i3 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i14 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  i19 = i1 | 0;
  HEAP32[i19 >> 2] = i12;
  STACKTOP = i5;
  return;
 }
 __ZN3WTF6StringC1EPKc(i15, H_BASE + 120 | 0);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i4);
 i4 = i6 | 0;
 i8 = i7 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i4 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i16, i15, i6);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 4 | 0;
   i16 = i4 | 0;
   i7 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i16 >> 2] = i7;
    break;
   }
   i7 = i4 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 + 4 | 0;
   i7 = i8 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i7 >> 2] = i4;
    break;
   }
   i4 = i8 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
  }
 } while (0);
 i6 = HEAP32[i15 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i19 = i1 | 0;
  HEAP32[i19 >> 2] = i12;
  STACKTOP = i5;
  return;
 }
 i15 = i6 | 0;
 i4 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  i19 = i1 | 0;
  HEAP32[i19 >> 2] = i12;
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i15 >> 2] = i4;
  i19 = i1 | 0;
  HEAP32[i19 >> 2] = i12;
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 8;
  i6 = 0;
 } else {
  i7 = i4 << 1;
  i5 = ((HEAP32[i1 + 12 >> 2] | 0) * 6 & -1 | 0) < (i7 | 0) ? i4 : i7;
  i6 = i4;
 }
 i4 = i1 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i5 - 1;
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i5 = i7 + (i10 << 3) | 0;
  i12 = i5 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = HEAP32[i13 + 16 >> 2] | 0;
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   i13 = (i18 >>> 23) + ~i18 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 11;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 11) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 + 4 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 4 | 0;
     i14 = i13 | 0;
     i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i14 >> 2] = i16;
      break;
     }
     i16 = i13 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 31](i16);
    }
   } while (0);
   i17 = i27 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i16 = i20 | 0;
     i13 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i16 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 >> 2] = i20;
   i20 = i7 + (i10 << 3) + 4 | 0;
   i13 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i19 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i27 : i11;
  }
  i13 = i10 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i13;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i28 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i28 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 + 4 | 0;
      i27 = i10 | 0;
      i2 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      if ((i2 | 0) != 0) {
       HEAP32[i27 >> 2] = i2;
       break;
      }
      i2 = i10 - 4 | 0;
      if ((i2 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i2 = i11 | 0;
    i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i2 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
   i28 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrINS4_15InspectorObjectEEEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i18 + 4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i4;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 + 4 | 0;
   i13 = i4 | 0;
   i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i13 >> 2] = i9;
    break;
   }
   i9 = i4 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i9;
 i8 = i2 + 4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, i18) | 0;
  i19 = i4;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrINS4_14InspectorArrayEEEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i18 + 4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i4;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 + 4 | 0;
   i13 = i4 | 0;
   i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i13 >> 2] = i9;
    break;
   }
   i9 = i4 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i9;
 i8 = i2 + 4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, i18) | 0;
  i19 = i4;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i18 + 4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i4;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 + 4 | 0;
   i13 = i4 | 0;
   i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i13 >> 2] = i9;
    break;
   }
   i9 = i4 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i9;
 i8 = i2 + 4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, i18) | 0;
  i19 = i4;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent17pushCurrentRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 32 | 0;
 __ZN7WebCore22InspectorTimelineAgent17commitFrameRecordEv(i1);
 d10 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
 if (i4) {
  i11 = HEAP32[i1 + 64 >> 2] | 0;
 } else {
  i11 = 0;
 }
 __ZN7WebCore21TimelineRecordFactory19createGenericRecordEdi(i7, (d10 - +HEAPF64[i1 + 24 >> 3]) * +1e3, i11);
 i11 = i7 | 0;
 i7 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 __ZN7WebCore22InspectorTimelineAgent18setFrameIdentifierEPN9Inspector15InspectorObjectEPNS_5FrameE(i1, i7, i5);
 i5 = i1 + 48 | 0;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 __ZN9Inspector14InspectorArray6createEv(i9);
 i11 = __ZN3JSC4Heap4sizeEv((__ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0) + 16 | 0) | 0;
 i4 = i8 | 0;
 HEAP32[i4 >> 2] = i7;
 i12 = i8 + 4 | 0;
 HEAP32[i12 >> 2] = i2;
 i2 = i8 + 8 | 0;
 i13 = i9 | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i2 >> 2] = i9;
 i9 = i8 + 12 | 0;
 HEAP32[i9 >> 2] = i3;
 i3 = i8 + 16 | 0;
 HEAP32[i3 >> 2] = i11;
 i11 = i1 + 56 | 0;
 i14 = HEAP32[i11 >> 2] | 0;
 if ((i14 | 0) == (HEAP32[i1 + 52 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore22InspectorTimelineAgent19TimelineRecordEntryELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS3_EEvOT_(i5, i8);
 } else {
  i8 = HEAP32[i5 >> 2] | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i8 + (i14 * 20 & -1) >> 2] = i7;
  i7 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = 0;
  HEAP32[i8 + (i14 * 20 & -1) + 4 >> 2] = i7;
  i7 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i8 + (i14 * 20 & -1) + 8 >> 2] = i7;
  HEAP32[i8 + (i14 * 20 & -1) + 12 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i8 + (i14 * 20 & -1) + 16 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 i11 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i2 = i11 + 4 | 0;
   i3 = i2 | 0;
   i14 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i3 >> 2] = i14;
    break;
   }
   i14 = i2 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 31](i14);
  }
 } while (0);
 i11 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i12 = i11 + 4 | 0;
   i14 = i12 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i14 >> 2] = i2;
    break;
   }
   i2 = i12 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
  }
 } while (0);
 i11 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i4 = i11 + 4 | 0;
   i2 = i4 | 0;
   i12 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i2 >> 2] = i12;
    break;
   }
   i12 = i4 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
  }
 } while (0);
 i11 = HEAP32[i13 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i13 = i11 + 4 | 0;
 i11 = i13 | 0;
 i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i12 | 0) != 0) {
  HEAP32[i11 >> 2] = i12;
  STACKTOP = i6;
  return;
 }
 i12 = i13 - 4 | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent12didWriteHTMLEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = _llvm_uadd_with_overflow_i32(i7 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = i8;
 i8 = HEAP32[i1 + 48 >> 2] | 0;
 i9 = HEAP32[i8 + (i7 * 20 & -1) >> 2] | 0;
 i10 = (i9 | 0) == 0;
 if (!i10) {
  i11 = i9 + 4 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 i11 = HEAP32[i8 + (i7 * 20 & -1) + 4 >> 2] | 0;
 i12 = (i11 | 0) == 0;
 if (!i12) {
  i13 = i11 + 4 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 }
 i13 = HEAP32[i8 + (i7 * 20 & -1) + 8 >> 2] | 0;
 i7 = (i13 | 0) == 0;
 if (!i7) {
  i8 = i13 + 4 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 224 | 0);
 __ZN9Inspector19InspectorBasicValue6createEd(i5, +(i2 >>> 0 >>> 0));
 i2 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i11 | 0, i6, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i14 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i5 >> 2] = i14;
    break;
   }
   i14 = i2 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 31](i14);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i14 = i8 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i14 >> 2] = i2;
    break;
   }
   i2 = i8 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN7WebCore22InspectorTimelineAgent24didCompleteCurrentRecordENS_18TimelineRecordTypeE(i1, 10);
 do {
  if (!i7) {
   i1 = i13 + 4 | 0;
   i4 = i1 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i4 >> 2] = i2;
    break;
   }
   i2 = i1 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
  }
 } while (0);
 do {
  if (!i12) {
   i13 = i11 + 4 | 0;
   i7 = i13 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i7 >> 2] = i2;
    break;
   }
   i2 = i13 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
  }
 } while (0);
 if (i10) {
  STACKTOP = i3;
  return;
 }
 i10 = i9 + 4 | 0;
 i9 = i10 | 0;
 i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) != 0) {
  HEAP32[i9 >> 2] = i11;
  STACKTOP = i3;
  return;
 }
 i11 = i10 - 4 | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 31](i11);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent18setFrameIdentifierEPN9Inspector15InspectorObjectEPNS_5FrameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i10 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i7 | 0;
 HEAP32[i1 >> 2] = 0;
 __ZN7WebCore18InspectorPageAgent7frameIdEPNS_5FrameE(i8, i10, i3);
 i3 = i8 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i10 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i8;
 do {
  if ((i10 | 0) != 0) {
   i8 = i10 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i8 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i3 = i10 | 0;
   i11 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i3 >> 2] = i11;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i9, H_BASE + 112 | 0);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i6, i7);
 i7 = i5 | 0;
 i10 = i6 | 0;
 i6 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i7 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i2 | 0, i9, i5);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 4 | 0;
   i2 = i7 | 0;
   i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i2 >> 2] = i6;
    break;
   }
   i6 = i7 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i6 = i10 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = i10 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i9 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i5 | 0;
 i7 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i1 >> 2] = i7;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore22InspectorTimelineAgent19TimelineRecordEntryELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 20 & -1) | 0;
 if (i2 >>> 0 > 214748364 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 20 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 20 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = i6 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 >> 2] = i8;
   i8 = i6 + 4 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = i9;
   i9 = i6 + 8 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   HEAP32[i7 + 8 >> 2] = i10;
   HEAP32[i7 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
   HEAP32[i7 + 16 >> 2] = HEAP32[i6 + 16 >> 2];
   i10 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i9 = i10 + 4 | 0;
     i11 = i9 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) != 0) {
      HEAP32[i11 >> 2] = i12;
      break;
     }
     i12 = i9 - 4 | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
    }
   } while (0);
   i10 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i12 = i10 + 4 | 0;
     i9 = i12 | 0;
     i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) != 0) {
      HEAP32[i9 >> 2] = i11;
      break;
     }
     i11 = i12 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 31](i11);
    }
   } while (0);
   i10 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i8 = i10 + 4 | 0;
     i11 = i8 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) != 0) {
      HEAP32[i11 >> 2] = i12;
      break;
     }
     i12 = i8 - 4 | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
    }
   } while (0);
   i10 = i6 + 20 | 0;
   if ((i10 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i10;
    i7 = i7 + 20 | 0;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrINS4_15InspectorObjectEEEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i5, i1 + 12 | 0, i2, i3);
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = i3 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i5 = i6 + 4 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i3;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i6 + 4 | 0;
  i6 = i3 | 0;
  i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i6 >> 2] = i5;
   STACKTOP = i4;
   return;
  }
  i5 = i3 - 4 | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  STACKTOP = i4;
  return;
 }
 i5 = i1 + 32 | 0;
 i3 = i1 + 40 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != (HEAP32[i1 + 36 >> 2] | 0)) {
  i1 = HEAP32[i2 >> 2] | 0;
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2] = i1;
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i7 = i6 + 1 | 0;
 i1 = i5 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if (i8 >>> 0 > i2 >>> 0) {
   i9 = 13;
  } else {
   if ((i8 + (i6 << 2) | 0) >>> 0 <= i2 >>> 0) {
    i9 = 13;
    break;
   }
   __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
   i10 = HEAP32[i1 >> 2] | 0;
   i11 = i10 + (i2 - i8 >> 2 << 2) | 0;
   i12 = i10;
  }
 } while (0);
 if ((i9 | 0) == 13) {
  __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
  i11 = i2;
  i12 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (HEAP32[i3 >> 2] << 2) >> 2] = i1;
 if ((i1 | 0) != 0) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN9Inspector19InspectorObjectBase8setArrayERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorArrayEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrINS4_14InspectorArrayEEEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i5, i1 + 12 | 0, i2, i3);
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = i3 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i5 = i6 + 4 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i3;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i6 + 4 | 0;
  i6 = i3 | 0;
  i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i6 >> 2] = i5;
   STACKTOP = i4;
   return;
  }
  i5 = i3 - 4 | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  STACKTOP = i4;
  return;
 }
 i5 = i1 + 32 | 0;
 i3 = i1 + 40 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != (HEAP32[i1 + 36 >> 2] | 0)) {
  i1 = HEAP32[i2 >> 2] | 0;
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2] = i1;
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i7 = i6 + 1 | 0;
 i1 = i5 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if (i8 >>> 0 > i2 >>> 0) {
   i9 = 13;
  } else {
   if ((i8 + (i6 << 2) | 0) >>> 0 <= i2 >>> 0) {
    i9 = 13;
    break;
   }
   __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
   i10 = HEAP32[i1 >> 2] | 0;
   i11 = i10 + (i2 - i8 >> 2 << 2) | 0;
   i12 = i10;
  }
 } while (0);
 if ((i9 | 0) == 13) {
  __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
  i11 = i2;
  i12 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (HEAP32[i3 >> 2] << 2) >> 2] = i1;
 if ((i1 | 0) != 0) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i5, i1 + 12 | 0, i2, i3);
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = i3 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i5 = i6 + 4 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i3;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i6 + 4 | 0;
  i6 = i3 | 0;
  i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i6 >> 2] = i5;
   STACKTOP = i4;
   return;
  }
  i5 = i3 - 4 | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  STACKTOP = i4;
  return;
 }
 i5 = i1 + 32 | 0;
 i3 = i1 + 40 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != (HEAP32[i1 + 36 >> 2] | 0)) {
  i1 = HEAP32[i2 >> 2] | 0;
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2] = i1;
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i7 = i6 + 1 | 0;
 i1 = i5 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if (i8 >>> 0 > i2 >>> 0) {
   i9 = 13;
  } else {
   if ((i8 + (i6 << 2) | 0) >>> 0 <= i2 >>> 0) {
    i9 = 13;
    break;
   }
   __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
   i10 = HEAP32[i1 >> 2] | 0;
   i11 = i10 + (i2 - i8 >> 2 << 2) | 0;
   i12 = i10;
  }
 } while (0);
 if ((i9 | 0) == 13) {
  __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
  i11 = i2;
  i12 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (HEAP32[i3 >> 2] << 2) >> 2] = i1;
 if ((i1 | 0) != 0) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent12appendRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 d11 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
 if (i4) {
  i12 = HEAP32[i1 + 64 >> 2] | 0;
 } else {
  i12 = 0;
 }
 __ZN7WebCore21TimelineRecordFactory19createGenericRecordEdi(i8, (d11 - +HEAPF64[i1 + 24 >> 3]) * +1e3, i12);
 i12 = i8 | 0;
 i8 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i9, H_BASE + 104 | 0);
 i12 = i10 | 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i12 >> 2] = i2;
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i8 | 0, i9, i10);
 i10 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i12 = i10 + 4 | 0;
   i2 = i12 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = i4;
    break;
   }
   i4 = i12 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
  }
 } while (0);
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i9 = i10 | 0;
   i4 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore22InspectorTimelineAgent18setFrameIdentifierEPN9Inspector15InspectorObjectEPNS_5FrameE(i1, i8, i5);
 __ZN7WebCore22InspectorTimelineAgent17commitFrameRecordEv(i1);
 i5 = i7 | 0;
 HEAP32[i5 >> 2] = i8;
 __ZN7WebCore22InspectorTimelineAgent24innerAddRecordToTimelineEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeE(i1, i7, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i5 = i3 + 4 | 0;
 i3 = i5 | 0;
 i7 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i3 >> 2] = i7;
  STACKTOP = i6;
  return;
 }
 i7 = i5 - 4 | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore22InspectorTimelineAgentD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 280;
 HEAP32[i1 + 12 >> 2] = H_BASE + 324;
 i3 = i1 + 80 | 0;
 HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] = 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 i4 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 + 4 | 0;
   i5 = i3 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i4 = i1 + 48 | 0;
 if ((HEAP32[i1 + 56 >> 2] | 0) != 0) {
  __ZN3WTF6VectorIN7WebCore22InspectorTimelineAgent19TimelineRecordEntryELj0ENS_15CrashOnOverflowEE6shrinkEj(i4, 0);
 }
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 52 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 + 4 | 0;
   i3 = i6 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i3 >> 2] = i5;
    break;
   }
   i5 = i6 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i4 = i1 + 32 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i5 | 0) != 0) {
  __ZdlPv(i5);
 }
 __ZN9Inspector41InspectorTimelineBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 240;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i5;
  return;
 }
}
function __ZN7WebCore22InspectorTimelineAgentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 280;
 HEAP32[i1 + 12 >> 2] = H_BASE + 324;
 i3 = i1 + 80 | 0;
 HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] = 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 i4 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 + 4 | 0;
   i5 = i3 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i4 = i1 + 48 | 0;
 if ((HEAP32[i1 + 56 >> 2] | 0) != 0) {
  __ZN3WTF6VectorIN7WebCore22InspectorTimelineAgent19TimelineRecordEntryELj0ENS_15CrashOnOverflowEE6shrinkEj(i4, 0);
 }
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 52 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 + 4 | 0;
   i3 = i6 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i3 >> 2] = i5;
    break;
   }
   i5 = i6 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i4 = i1 + 32 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i5 | 0) != 0) {
  __ZdlPv(i5);
 }
 __ZN9Inspector41InspectorTimelineBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 240;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i5;
  return;
 }
}
function __ZN7WebCore22InspectorTimelineAgent9sendEventEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = 0;
 FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 40 >> 2] & 1](i2 | 0, i4) | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 i7 = i4;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   i8 = HEAP32[i6 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 + 4 | 0;
   i8 = i9 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i8 >> 2] = i10;
    break;
   }
   i10 = i9 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
  }
 } while (0);
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 4 | 0;
   i4 = i6 | 0;
   i10 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i4 >> 2] = i10;
    break;
   }
   i10 = i6 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
  }
 } while (0);
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = i7;
 __ZN9Inspector35InspectorTimelineFrontendDispatcher13eventRecordedEN3WTF10PassRefPtrINS_11TypeBuilder8Timeline13TimelineEventEEE(i2, i5);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i5 + 4 | 0;
 i5 = i1 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i2 = i1 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore21TimelineRecordFactory26createGenericWebSocketDataEm(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 152 | 0);
 __ZN9Inspector19InspectorBasicValue6createEd(i5, +(i2 >>> 0 >>> 0));
 i2 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i6 | 0, i7, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i5 >> 2] = i9;
    break;
   }
   i9 = i2 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i9 = i8 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i8 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i2;
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore22InspectorTimelineAgent17commitFrameRecordEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 68 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF6StringC1EPKc(i3, H_BASE + 104 | 0);
 __ZN9Inspector15InspectorObject6createEv(i4);
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i7 | 0, i3, i4);
 i7 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 + 4 | 0;
   i8 = i4 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i8 >> 2] = i9;
    break;
   }
   i9 = i4 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
  }
 } while (0);
 i7 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i3 = i7 | 0;
   i9 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i3 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore22InspectorTimelineAgent24innerAddRecordToTimelineEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeE(i1, i5, 1);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i5 + 4 | 0;
 i5 = i7 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i7 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i2;
 return;
}
function __ZN3WTF6VectorIN7WebCore22InspectorTimelineAgent19TimelineRecordEntryELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS3_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 * 20 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore22InspectorTimelineAgent19TimelineRecordEntryELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (((i2 - i7 | 0) / 20 & -1) * 20 & -1) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore22InspectorTimelineAgent19TimelineRecordEntryELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 i2 = i11 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i12 + (i6 * 20 & -1) >> 2] = i5;
 i5 = i11 + 4 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i12 + (i6 * 20 & -1) + 4 >> 2] = i2;
 i2 = i11 + 8 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i12 + (i6 * 20 & -1) + 8 >> 2] = i5;
 HEAP32[i12 + (i6 * 20 & -1) + 12 >> 2] = HEAP32[i11 + 12 >> 2];
 HEAP32[i12 + (i6 * 20 & -1) + 16 >> 2] = HEAP32[i11 + 16 >> 2];
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore22InspectorTimelineAgentC2EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentEPNS_20InspectorMemoryAgentENS0_13InspectorTypeEPNS_15InspectorClientE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 HEAP32[i9 >> 2] = H_BASE + 40;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i8, i9);
 i9 = i1 | 0;
 HEAP32[i9 >> 2] = H_BASE + 240;
 i10 = i8 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i8;
 do {
  if ((i8 | 0) == 0) {
   HEAP32[i9 >> 2] = H_BASE + 368;
   HEAP32[i1 + 8 >> 2] = i2;
  } else {
   i11 = i8 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i9 >> 2] = H_BASE + 368;
   HEAP32[i1 + 8 >> 2] = i2;
   if ((i11 | 0) == 0) {
    break;
   }
   i12 = i11 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i12 >> 2] = i13;
    break;
   }
  }
 } while (0);
 HEAP32[i9 >> 2] = H_BASE + 280;
 HEAP32[i1 + 12 >> 2] = H_BASE + 324;
 HEAP32[i1 + 16 >> 2] = i3;
 HEAP32[i1 + 20 >> 2] = i4;
 HEAP32[i1 + 48 >> 2] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP32[i1 + 56 >> 2] = 0;
 _memset(i1 + 24 | 0, 0, 16) | 0;
 HEAP32[i1 + 60 >> 2] = 1;
 HEAP32[i1 + 64 >> 2] = 5;
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP32[i1 + 72 >> 2] = i5;
 HEAP32[i1 + 76 >> 2] = i6;
 i6 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i6 >> 2] = 1;
 HEAP32[i6 + 4 >> 2] = i1;
 HEAP32[i1 + 80 >> 2] = i6;
 HEAP8[i1 + 84 | 0] = 0;
 HEAP8[i1 + 85 | 0] = 0;
 STACKTOP = i7;
 return;
}
function __ZN7WebCore22InspectorTimelineAgentC1EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentEPNS_20InspectorMemoryAgentENS0_13InspectorTypeEPNS_15InspectorClientE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 HEAP32[i9 >> 2] = H_BASE + 40;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i8, i9);
 i9 = i1 | 0;
 HEAP32[i9 >> 2] = H_BASE + 240;
 i10 = i8 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i8;
 do {
  if ((i8 | 0) == 0) {
   HEAP32[i9 >> 2] = H_BASE + 368;
   HEAP32[i1 + 8 >> 2] = i2;
  } else {
   i11 = i8 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i9 >> 2] = H_BASE + 368;
   HEAP32[i1 + 8 >> 2] = i2;
   if ((i11 | 0) == 0) {
    break;
   }
   i12 = i11 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i12 >> 2] = i13;
    break;
   }
  }
 } while (0);
 HEAP32[i9 >> 2] = H_BASE + 280;
 HEAP32[i1 + 12 >> 2] = H_BASE + 324;
 HEAP32[i1 + 16 >> 2] = i3;
 HEAP32[i1 + 20 >> 2] = i4;
 HEAP32[i1 + 48 >> 2] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP32[i1 + 56 >> 2] = 0;
 _memset(i1 + 24 | 0, 0, 16) | 0;
 HEAP32[i1 + 60 >> 2] = 1;
 HEAP32[i1 + 64 >> 2] = 5;
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP32[i1 + 72 >> 2] = i5;
 HEAP32[i1 + 76 >> 2] = i6;
 i6 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i6 >> 2] = 1;
 HEAP32[i6 + 4 >> 2] = i1;
 HEAP32[i1 + 80 >> 2] = i6;
 HEAP8[i1 + 84 | 0] = 0;
 HEAP8[i1 + 85 | 0] = 0;
 STACKTOP = i7;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent10willLayoutEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = __ZNK7WebCore9FrameView10layoutRootEb(HEAP32[i2 + 452 >> 2] | 0, 0) | 0;
 i6 = (i5 | 0) != 0;
 if (i6) {
  i7 = i5;
  i8 = 3;
 } else {
  i5 = __ZNK7WebCore5Frame15contentRendererEv(i2) | 0;
  if ((i5 | 0) == 0) {
   i9 = 0;
   i10 = 0;
  } else {
   i7 = i5 | 0;
   i8 = 3;
  }
 }
 if ((i8 | 0) == 3) {
  i8 = 0;
  i5 = 0;
  i11 = i7;
  while (1) {
   i12 = i5 + 1 | 0;
   i13 = HEAP32[i11 + 20 >> 2] | 0;
   if ((i13 & 29 | 0) == 0) {
    i14 = i13 >>> 1 & 1;
   } else {
    i14 = 1;
   }
   i13 = i14 + i8 | 0;
   i15 = __ZNK7WebCore12RenderObject14nextInPreOrderEPKS0_(i11, i7) | 0;
   if ((i15 | 0) == 0) {
    i9 = i13;
    i10 = i12;
    break;
   } else {
    i8 = i13;
    i5 = i12;
    i11 = i15;
   }
  }
 }
 __ZN7WebCore21TimelineRecordFactory16createLayoutDataEjjb(i4, i9, i10, i6);
 __ZN7WebCore22InspectorTimelineAgent17pushCurrentRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i4, 5, 1, i2);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i4 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIN7WebCore22InspectorTimelineAgent19TimelineRecordEntryELj0ENS_15CrashOnOverflowEE6shrinkEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i5 = i3 + (i1 * 20 & -1) | 0;
 if ((i1 | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = i2;
  return;
 }
 i1 = i3 + (i2 * 20 & -1) | 0;
 while (1) {
  i3 = HEAP32[i1 + 8 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i6 = i3 + 4 | 0;
    i7 = i6 | 0;
    i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    if ((i8 | 0) != 0) {
     HEAP32[i7 >> 2] = i8;
     break;
    }
    i8 = i6 - 4 | 0;
    if ((i8 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
   }
  } while (0);
  i3 = HEAP32[i1 + 4 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i8 = i3 + 4 | 0;
    i6 = i8 | 0;
    i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
    if ((i7 | 0) != 0) {
     HEAP32[i6 >> 2] = i7;
     break;
    }
    i7 = i8 - 4 | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
   }
  } while (0);
  i3 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i7 = i3 + 4 | 0;
    i8 = i7 | 0;
    i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
    if ((i6 | 0) != 0) {
     HEAP32[i8 >> 2] = i6;
     break;
    }
    i6 = i7 - 4 | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
   }
  } while (0);
  i1 = i1 + 20 | 0;
  if ((i1 | 0) == (i5 | 0)) {
   break;
  }
 }
 HEAP32[i4 >> 2] = i2;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent8didPaintEPNS_12RenderObjectERKNS_10LayoutRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 32 | 0;
 i7 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 56 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i8 = HEAP32[i1 + 48 >> 2] | 0;
 _memset(i5 | 0, 0, 32) | 0;
 __ZN7WebCore22InspectorTimelineAgent15localToPageQuadERKNS_12RenderObjectERKNS_10LayoutRectEPNS_9FloatQuadE(0, i2, i3, i5);
 __ZN7WebCore21TimelineRecordFactory15createPaintDataERKNS_9FloatQuadE(i6, i5);
 i5 = i6 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i3 = i8 + (i7 * 20 & -1) + 4 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i6;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 + 4 | 0;
   i3 = i6 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i3 >> 2] = i8;
    break;
   }
   i8 = i6 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  }
 } while (0);
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 + 4 | 0;
   i8 = i5 | 0;
   i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i8 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 __ZN7WebCore22InspectorTimelineAgent24didCompleteCurrentRecordENS_18TimelineRecordTypeE(i1, 6);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent4stopEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 84 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  return;
 }
 i3 = i1 + 80 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i4 >> 2] = 1;
 HEAP32[i4 + 4 >> 2] = i5;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 44 >> 2] = 0;
 i5 = i1 + 68 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 4 | 0;
   i3 = i5 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i3 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i4 = i1 + 48 | 0;
 i6 = i1 + 52 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) != 0) {
   if ((HEAP32[i1 + 56 >> 2] | 0) != 0) {
    __ZN3WTF6VectorIN7WebCore22InspectorTimelineAgent19TimelineRecordEntryELj0ENS_15CrashOnOverflowEE6shrinkEj(i4, 0);
   }
   i5 = i4 | 0;
   i3 = HEAP32[i5 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   HEAP32[i5 >> 2] = 0;
   HEAP32[i6 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 i6 = i1 + 60 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 HEAP8[i2] = 0;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __Znwj(4) | 0;
 HEAP32[i6 >> 2] = i2;
 i2 = i1 + 32 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i7 | 0) != 0) {
  __ZdlPv(i7);
 }
 __ZN9Inspector34InspectorTimelineBackendDispatcher6createEPNS_26InspectorBackendDispatcherEPNS_41InspectorTimelineBackendDispatcherHandlerE(i5, i3, i1 + 12 | 0);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i7 = i1 + 36 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i5;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 + 4 | 0;
   i7 = i5 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i7 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i1 + 4 | 0;
 i1 = i3 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
 i6 = i3 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent27willReceiveResourceResponseEmRKNS_16ResourceResponseEPNS_5FrameE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 __ZN7WebCore18IdentifiersFactory9requestIdEm(i6, i2);
 __ZN7WebCore21TimelineRecordFactory33createResourceReceiveResponseDataERKN3WTF6StringERKNS_16ResourceResponseE(i7, i6, i3);
 __ZN7WebCore22InspectorTimelineAgent17pushCurrentRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i7, 22, 0, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i1 = i7 | 0;
   i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i1 >> 2] = i3;
    break;
   }
   i3 = i7 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i4 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i6 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore22InspectorTimelineAgent23willSendResourceRequestEmRKNS_15ResourceRequestEPNS_5FrameE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 __ZN7WebCore18IdentifiersFactory9requestIdEm(i6, i2);
 __ZN7WebCore21TimelineRecordFactory29createResourceSendRequestDataERKN3WTF6StringERKNS_15ResourceRequestE(i7, i6, i3);
 __ZN7WebCore22InspectorTimelineAgent12appendRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i7, 21, 1, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i1 = i7 | 0;
   i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i1 >> 2] = i3;
    break;
   }
   i3 = i7 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i4 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i6 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore22InspectorTimelineAgent24didFinishLoadingResourceEmbdPNS_5FrameE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 __ZN7WebCore18IdentifiersFactory9requestIdEm(i8, i2);
 __ZN7WebCore21TimelineRecordFactory24createResourceFinishDataERKN3WTF6StringEbd(i7, i8, i3, d4 * +1e3);
 __ZN7WebCore22InspectorTimelineAgent12appendRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i7, 24, 0, i5);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 4 | 0;
   i1 = i7 | 0;
   i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i1 >> 2] = i3;
    break;
   }
   i3 = i7 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
  }
 } while (0);
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i8 = i5 | 0;
 i3 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i8 >> 2] = i3;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore22InspectorTimelineAgent23willReceiveResourceDataEmPNS_5FrameEi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 __ZN7WebCore18IdentifiersFactory9requestIdEm(i6, i2);
 __ZN7WebCore21TimelineRecordFactory25createReceiveResourceDataERKN3WTF6StringEi(i7, i6, i4);
 __ZN7WebCore22InspectorTimelineAgent17pushCurrentRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i7, 23, 0, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 + 4 | 0;
   i1 = i7 | 0;
   i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i1 >> 2] = i4;
    break;
   }
   i4 = i7 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i3 | 0;
 i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i6 >> 2] = i4;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore22InspectorTimelineAgent9didLayoutEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = _llvm_uadd_with_overflow_i32(i5 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i5 = HEAP32[i1 + 48 >> 2] | 0;
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i4 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i4 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 476 >> 2] & 15](i2, i4, 0);
 if ((HEAP32[i9 >> 2] | 0) != 0) {
  __ZN7WebCore21TimelineRecordFactory16appendLayoutRootEPN9Inspector15InspectorObjectERKNS_9FloatQuadE(HEAP32[i5 + (i6 * 20 & -1) + 4 >> 2] | 0, HEAP32[i7 >> 2] | 0);
 }
 __ZN7WebCore22InspectorTimelineAgent24didCompleteCurrentRecordENS_18TimelineRecordTypeE(i1, 5);
 if ((HEAP32[i9 >> 2] | 0) != 0) {
  HEAP32[i9 >> 2] = 0;
 }
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i7 >> 2] = 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i9);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent13didBeginFrameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, d4 = +0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 d4 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
 __ZN7WebCore21TimelineRecordFactory19createGenericRecordEdi(i3, (d4 - +HEAPF64[i1 + 24 >> 3]) * +1e3, 0);
 i5 = i3 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 68 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i3;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 + 4 | 0;
   i6 = i3 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = i3 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 + 4 | 0;
 i1 = i5 | 0;
 i7 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i1 >> 2] = i7;
  STACKTOP = i2;
  return;
 }
 i7 = i5 - 4 | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
 STACKTOP = i2;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 240 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_vi + 4;
}
function __ZN7WebCore22InspectorTimelineAgent29willDestroyFrontendAndBackendEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 32 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i5 | 0) != 0) {
  __ZdlPv(i5);
 }
 i5 = i1 + 36 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 4 | 0;
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = i5 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 7](i1, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore22InspectorTimelineAgent22didMarkDOMContentEventEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 do {
  if ((i2 | 0) == 0) {
   i5 = 0;
  } else {
   i6 = HEAP32[i1 + 16 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i5 = 0;
    break;
   }
   i5 = (__ZN7WebCore18InspectorPageAgent9mainFrameEv(i6) | 0) == (i2 | 0);
  }
 } while (0);
 __ZN7WebCore21TimelineRecordFactory14createMarkDataEb(i4, i5);
 __ZN7WebCore22InspectorTimelineAgent12appendRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i4, 16, 0, i2);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i4 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent16didMarkLoadEventEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 do {
  if ((i2 | 0) == 0) {
   i5 = 0;
  } else {
   i6 = HEAP32[i1 + 16 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i5 = 0;
    break;
   }
   i5 = (__ZN7WebCore18InspectorPageAgent9mainFrameEv(i6) | 0) == (i2 | 0);
  }
 } while (0);
 __ZN7WebCore21TimelineRecordFactory14createMarkDataEb(i4, i5);
 __ZN7WebCore22InspectorTimelineAgent12appendRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i4, 15, 0, i2);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i4 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent16clearRecordStackEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 68 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i3 = i1 + 48 | 0;
 i5 = i1 + 52 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   if ((HEAP32[i1 + 56 >> 2] | 0) != 0) {
    __ZN3WTF6VectorIN7WebCore22InspectorTimelineAgent19TimelineRecordEntryELj0ENS_15CrashOnOverflowEE6shrinkEj(i3, 0);
   }
   i2 = i3 | 0;
   i4 = HEAP32[i2 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   HEAP32[i2 >> 2] = 0;
   HEAP32[i5 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 i5 = i1 + 60 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent13didCommitLoadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 68 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i3 = i1 + 48 | 0;
 i5 = i1 + 52 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   if ((HEAP32[i1 + 56 >> 2] | 0) != 0) {
    __ZN3WTF6VectorIN7WebCore22InspectorTimelineAgent19TimelineRecordEntryELj0ENS_15CrashOnOverflowEE6shrinkEj(i3, 0);
   }
   i2 = i3 | 0;
   i4 = HEAP32[i2 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   HEAP32[i2 >> 2] = 0;
   HEAP32[i5 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 i5 = i1 + 60 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent19addRecordToTimelineEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore22InspectorTimelineAgent17commitFrameRecordEv(i1);
 i6 = i5 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i2;
 __ZN7WebCore22InspectorTimelineAgent24innerAddRecordToTimelineEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeE(i1, i5, i3);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i3 + 4 | 0;
 i3 = i6 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i3 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
 i5 = i6 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent18didCreateWebSocketEmRKNS_3URLERKN3WTF6StringEPNS_5FrameE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 __ZN7WebCore21TimelineRecordFactory25createWebSocketCreateDataEmRKNS_3URLERKN3WTF6StringE(i7, i2, i3, i4);
 __ZN7WebCore22InspectorTimelineAgent12appendRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i7, 31, 1, i5);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i7 = i5 + 4 | 0;
 i5 = i7 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i6;
  return;
 }
 i1 = i7 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent36willDispatchXHRReadyStateChangeEventERKN3WTF6StringEiPNS_5FrameE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 __ZN7WebCore21TimelineRecordFactory29createXHRReadyStateChangeDataERKN3WTF6StringEi(i6, i2, i3);
 __ZN7WebCore22InspectorTimelineAgent17pushCurrentRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i6, 25, 0, i4);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i4 + 4 | 0;
 i4 = i6 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i5;
  return;
 }
 i1 = i6 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent18willEvaluateScriptERKN3WTF6StringEiPNS_5FrameE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 __ZN7WebCore21TimelineRecordFactory24createEvaluateScriptDataERKN3WTF6StringEd(i6, i2, +(i3 | 0));
 __ZN7WebCore22InspectorTimelineAgent17pushCurrentRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i6, 14, 1, i4);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i4 + 4 | 0;
 i4 = i6 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i5;
  return;
 }
 i1 = i6 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent16willCallFunctionERKN3WTF6StringEiPNS_5FrameE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 __ZN7WebCore21TimelineRecordFactory22createFunctionCallDataERKN3WTF6StringEi(i6, i2, i3);
 __ZN7WebCore22InspectorTimelineAgent17pushCurrentRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i6, 27, 1, i4);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i4 + 4 | 0;
 i4 = i6 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i5;
  return;
 }
 i1 = i6 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent26didScheduleResourceRequestERKN3WTF6StringEPNS_5FrameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore21TimelineRecordFactory33createScheduleResourceRequestDataERKN3WTF6StringE(i5, i2);
 __ZN7WebCore22InspectorTimelineAgent12appendRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i5, 20, 1, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 + 4 | 0;
 i3 = i5 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent15didInstallTimerEiibPNS_5FrameE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 __ZN7WebCore21TimelineRecordFactory22createTimerInstallDataEiib(i7, i2, i3, i4);
 __ZN7WebCore22InspectorTimelineAgent12appendRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i7, 11, 1, i5);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i7 = i5 + 4 | 0;
 i5 = i7 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i6;
  return;
 }
 i1 = i7 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent24willDispatchXHRLoadEventERKN3WTF6StringEPNS_5FrameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore21TimelineRecordFactory17createXHRLoadDataERKN3WTF6StringE(i5, i2);
 __ZN7WebCore22InspectorTimelineAgent17pushCurrentRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i5, 26, 1, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 + 4 | 0;
 i3 = i5 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent17willDispatchEventERKNS_5EventEPNS_5FrameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore21TimelineRecordFactory23createEventDispatchDataERKNS_5EventE(i5, i2);
 __ZN7WebCore22InspectorTimelineAgent17pushCurrentRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i5, 0, 0, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 + 4 | 0;
 i3 = i5 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent36didReceiveWebSocketHandshakeResponseEmPNS_5FrameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore21TimelineRecordFactory26createGenericWebSocketDataEm(i5, i2);
 __ZN7WebCore22InspectorTimelineAgent12appendRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i5, 33, 0, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 + 4 | 0;
 i3 = i5 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 + (i4 >>> 2) | 0;
 i6 = i5 >>> 0 > 16 >>> 0 ? i5 : 16;
 i5 = i6 >>> 0 > i2 >>> 0 ? i6 : i2;
 if (i4 >>> 0 >= i5 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i3 >> 2] = i1 >>> 2;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore22InspectorTimelineAgent33willSendWebSocketHandshakeRequestEmPNS_5FrameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore21TimelineRecordFactory26createGenericWebSocketDataEm(i5, i2);
 __ZN7WebCore22InspectorTimelineAgent12appendRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i5, 32, 1, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 + 4 | 0;
 i3 = i5 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent12didTimeStampEPNS_5FrameERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore21TimelineRecordFactory19createTimeStampDataERKN3WTF6StringE(i5, i3);
 __ZN7WebCore22InspectorTimelineAgent12appendRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i5, 17, 1, i2);
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i2 + 4 | 0;
 i2 = i5 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent7timeEndEPNS_5FrameERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore21TimelineRecordFactory19createTimeStampDataERKN3WTF6StringE(i5, i3);
 __ZN7WebCore22InspectorTimelineAgent12appendRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i5, 19, 1, i2);
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i2 + 4 | 0;
 i2 = i5 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent22willFireAnimationFrameEiPNS_5FrameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore21TimelineRecordFactory24createAnimationFrameDataEi(i5, i2);
 __ZN7WebCore22InspectorTimelineAgent17pushCurrentRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i5, 30, 0, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 + 4 | 0;
 i3 = i5 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent4timeEPNS_5FrameERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore21TimelineRecordFactory19createTimeStampDataERKN3WTF6StringE(i5, i3);
 __ZN7WebCore22InspectorTimelineAgent12appendRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i5, 18, 1, i2);
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i2 + 4 | 0;
 i2 = i5 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent24didRequestAnimationFrameEiPNS_5FrameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore21TimelineRecordFactory24createAnimationFrameDataEi(i5, i2);
 __ZN7WebCore22InspectorTimelineAgent12appendRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i5, 28, 1, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 + 4 | 0;
 i3 = i5 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent23didCancelAnimationFrameEiPNS_5FrameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore21TimelineRecordFactory24createAnimationFrameDataEi(i5, i2);
 __ZN7WebCore22InspectorTimelineAgent12appendRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i5, 29, 1, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 + 4 | 0;
 i3 = i5 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent19didDestroyWebSocketEmPNS_5FrameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore21TimelineRecordFactory26createGenericWebSocketDataEm(i5, i2);
 __ZN7WebCore22InspectorTimelineAgent12appendRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i5, 34, 1, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 + 4 | 0;
 i3 = i5 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent13willFireTimerEiPNS_5FrameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore21TimelineRecordFactory22createGenericTimerDataEi(i5, i2);
 __ZN7WebCore22InspectorTimelineAgent17pushCurrentRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i5, 13, 0, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 + 4 | 0;
 i3 = i5 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent13willWriteHTMLEjPNS_5FrameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore21TimelineRecordFactory19createParseHTMLDataEj(i5, i2);
 __ZN7WebCore22InspectorTimelineAgent17pushCurrentRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i5, 10, 1, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 + 4 | 0;
 i3 = i5 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent14didRemoveTimerEiPNS_5FrameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore21TimelineRecordFactory22createGenericTimerDataEi(i5, i2);
 __ZN7WebCore22InspectorTimelineAgent12appendRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i5, 12, 1, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 + 4 | 0;
 i3 = i5 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 + (i4 >>> 2) | 0;
 i6 = i5 >>> 0 > 16 >>> 0 ? i5 : 16;
 i5 = i6 >>> 0 > i2 >>> 0 ? i6 : i2;
 if (i4 >>> 0 >= i5 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i3 >> 2] = i1 >>> 2;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore22InspectorTimelineAgent29didScheduleStyleRecalculationEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN9Inspector15InspectorObject6createEv(i4);
 __ZN7WebCore22InspectorTimelineAgent12appendRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i4, 2, 1, i2);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i4 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent20willRecalculateStyleEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN9Inspector15InspectorObject6createEv(i4);
 __ZN7WebCore22InspectorTimelineAgent17pushCurrentRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i4, 3, 1, i2);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i4 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent19didInvalidateLayoutEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN9Inspector15InspectorObject6createEv(i4);
 __ZN7WebCore22InspectorTimelineAgent12appendRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i4, 4, 1, i2);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i4 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent10willScrollEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN9Inspector15InspectorObject6createEv(i4);
 __ZN7WebCore22InspectorTimelineAgent17pushCurrentRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i4, 7, 0, i2);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i4 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent9willPaintEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN9Inspector15InspectorObject6createEv(i4);
 __ZN7WebCore22InspectorTimelineAgent17pushCurrentRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i4, 6, 1, i2);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i4 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent13willCompositeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 __ZN9Inspector15InspectorObject6createEv(i3);
 __ZN7WebCore22InspectorTimelineAgent17pushCurrentRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE(i1, i3, 9, 0, 0);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i1 + 4 | 0;
 i1 = i3 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i2;
  return;
 }
 i4 = i3 - 4 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 STACKTOP = i2;
 return;
}
function __ZThn12_N7WebCore22InspectorTimelineAgent5startEPN3WTF6StringEPKiPKb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, d7 = +0;
 i2 = i1 - 88 + 76 | 0;
 i1 = i2;
 if ((HEAP32[i2 + 32 >> 2] | 0) == 0) {
  return;
 }
 do {
  if ((i3 | 0) == 0) {
   i5 = 5;
  } else {
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 | 0) <= 0) {
    i5 = 5;
    break;
   }
   HEAP32[i2 + 64 >> 2] = i6;
  }
 } while (0);
 if ((i5 | 0) == 5) {
  HEAP32[i2 + 64 >> 2] = 5;
 }
 if ((i4 | 0) != 0) {
  HEAP8[i1 + 85 | 0] = HEAP8[i4] & 1;
 }
 d7 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
 HEAPF64[i2 + 24 >> 3] = d7 - +__ZN3WTF11currentTimeEv();
 HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 44 >> 2] = i2;
 HEAP8[i2 + 84 | 0] = 1;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent5startEPN3WTF6StringEPKiPKb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, d6 = +0;
 if ((HEAP32[i1 + 32 >> 2] | 0) == 0) {
  return;
 }
 do {
  if ((i3 | 0) == 0) {
   i5 = 5;
  } else {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) <= 0) {
    i5 = 5;
    break;
   }
   HEAP32[i1 + 64 >> 2] = i2;
  }
 } while (0);
 if ((i5 | 0) == 5) {
  HEAP32[i1 + 64 >> 2] = 5;
 }
 if ((i4 | 0) != 0) {
  HEAP8[i1 + 85 | 0] = HEAP8[i4] & 1;
 }
 d6 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
 HEAPF64[i1 + 24 >> 3] = d6 - +__ZN3WTF11currentTimeEv();
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 44 >> 2] = i1;
 HEAP8[i1 + 84 | 0] = 1;
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
function __ZN7WebCore22InspectorTimelineAgent14didCancelFrameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 68 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
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
function __ZN9Inspector18InspectorAgentBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 240;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore18InspectorAgentBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 240;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
 __ZdlPv(i1);
 return;
}
function __ZThn12_N7WebCore22InspectorTimelineAgent28supportsFrameInstrumentationEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i2 = HEAP32[i1 - 88 + 152 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  HEAP8[i3] = i4;
  return;
 }
 i4 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 96 >> 2] & 1](i2) | 0) & 1;
 HEAP8[i3] = i4;
 return;
}
function __ZThn12_N7WebCore22InspectorTimelineAgent20canMonitorMainThreadEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i2 = HEAP32[i1 - 88 + 152 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  HEAP8[i3] = i4;
  return;
 }
 i4 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 60 >> 2] & 1](i2) | 0) & 1;
 HEAP8[i3] = i4;
 return;
}
function __ZN7WebCore22InspectorTimelineAgent28supportsFrameInstrumentationEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  HEAP8[i3] = i4;
  return;
 }
 i4 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 96 >> 2] & 1](i2) | 0) & 1;
 HEAP8[i3] = i4;
 return;
}
function __ZN9Inspector18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 240;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore22InspectorTimelineAgent20canMonitorMainThreadEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  HEAP8[i3] = i4;
  return;
 }
 i4 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 60 >> 2] & 1](i2) | 0) & 1;
 HEAP8[i3] = i4;
 return;
}
function __ZN7WebCore18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 240;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
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
function __ZN7WebCore22InspectorTimelineAgent4pageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore22InspectorTimelineAgent35didDispatchXHRReadyStateChangeEventEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorTimelineAgent24didCompleteCurrentRecordENS_18TimelineRecordTypeE(i1, 25);
 return;
}
function __ZN7WebCore22InspectorTimelineAgent26didReceiveResourceResponseEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorTimelineAgent24didCompleteCurrentRecordENS_18TimelineRecordTypeE(i1, 22);
 return;
}
function __ZN7WebCore22InspectorTimelineAgent23didDispatchXHRLoadEventEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorTimelineAgent24didCompleteCurrentRecordENS_18TimelineRecordTypeE(i1, 26);
 return;
}
function __ZThn12_N7WebCore22InspectorTimelineAgent4stopEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22InspectorTimelineAgent4stopEPN3WTF6StringE(i1 - 88 + 76 | 0, 0);
 return;
}
function __ZN7WebCore22InspectorTimelineAgent22didReceiveResourceDataEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorTimelineAgent24didCompleteCurrentRecordENS_18TimelineRecordTypeE(i1, 23);
 return;
}
function __ZN7WebCore21TimelineTimeConverter5resetEv(i1) {
 i1 = i1 | 0;
 var d2 = +0;
 d2 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
 HEAPF64[i1 >> 3] = d2 - +__ZN3WTF11currentTimeEv();
 return;
}
function __ZN7WebCore22InspectorTimelineAgent21didFireAnimationFrameEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorTimelineAgent24didCompleteCurrentRecordENS_18TimelineRecordTypeE(i1, 30);
 return;
}
function __ZN7WebCore22InspectorTimelineAgent19didRecalculateStyleEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorTimelineAgent24didCompleteCurrentRecordENS_18TimelineRecordTypeE(i1, 3);
 return;
}
function __ZN7WebCore22InspectorTimelineAgent17didEvaluateScriptEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorTimelineAgent24didCompleteCurrentRecordENS_18TimelineRecordTypeE(i1, 14);
 return;
}
function __ZN7WebCore22InspectorTimelineAgent16didDispatchEventEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorTimelineAgent24didCompleteCurrentRecordENS_18TimelineRecordTypeE(i1, 0);
 return;
}
function __ZN7WebCore22InspectorTimelineAgent15didCallFunctionEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorTimelineAgent24didCompleteCurrentRecordENS_18TimelineRecordTypeE(i1, 27);
 return;
}
function __ZN7WebCore22InspectorTimelineAgent9timestampEv(i1) {
 i1 = i1 | 0;
 var d2 = +0;
 d2 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
 return +((d2 - +HEAPF64[i1 + 24 >> 3]) * +1e3);
}
function __ZN7WebCore22InspectorTimelineAgent12didFireTimerEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorTimelineAgent24didCompleteCurrentRecordENS_18TimelineRecordTypeE(i1, 13);
 return;
}
function __ZN7WebCore22InspectorTimelineAgent12didCompositeEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorTimelineAgent24didCompleteCurrentRecordENS_18TimelineRecordTypeE(i1, 9);
 return;
}
function __ZN7WebCore22InspectorTimelineAgent9didScrollEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorTimelineAgent24didCompleteCurrentRecordENS_18TimelineRecordTypeE(i1, 7);
 return;
}
function __ZThn12_N7WebCore22InspectorTimelineAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 88 + 76 | 0;
 __ZN7WebCore22InspectorTimelineAgentD2Ev(i2);
 __ZdlPv(i2);
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
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
function __ZThn12_N7WebCore22InspectorTimelineAgentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorTimelineAgentD2Ev(i1 - 88 + 76 | 0);
 return;
}
function __ZN7WebCore22InspectorTimelineAgentD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorTimelineAgentD2Ev(i1);
 __ZdlPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function b5(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(5);
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
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZN9Inspector18InspectorAgentBase12discardAgentEv(i1) {
 i1 = i1 | 0;
 return;
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore22InspectorTimelineAgentD0Ev,b0,__ZN9Inspector18InspectorAgentBase12discardAgentEv,b0,__ZThn12_N7WebCore22InspectorTimelineAgentD1Ev,b0,__ZN9Inspector18InspectorAgentBaseD0Ev,b0,__ZN9Inspector18InspectorAgentBaseD1Ev,b0,__ZN7WebCore22InspectorTimelineAgentD2Ev,b0,__ZThn12_N7WebCore22InspectorTimelineAgentD0Ev,b0,__ZN7WebCore22InspectorTimelineAgent29willDestroyFrontendAndBackendEv,b0,__ZN7WebCore18InspectorAgentBaseD1Ev,b0,__ZN7WebCore18InspectorAgentBaseD0Ev,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore22InspectorTimelineAgent4stopEPN3WTF6StringE,b1,__ZThn12_N7WebCore22InspectorTimelineAgent4stopEPN3WTF6StringE,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZThn12_N7WebCore22InspectorTimelineAgent28supportsFrameInstrumentationEPN3WTF6StringEPb,b3,__ZN7WebCore22InspectorTimelineAgent20canMonitorMainThreadEPN3WTF6StringEPb,b3,__ZN7WebCore22InspectorTimelineAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE,b3,__ZN7WebCore22InspectorTimelineAgent28supportsFrameInstrumentationEPN3WTF6StringEPb,b3,__ZThn12_N7WebCore22InspectorTimelineAgent20canMonitorMainThreadEPN3WTF6StringEPb,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4,v____cxa_pure_virtual__wrapper,b4];
  var FUNCTION_TABLE_viiiiii = [b5,b5,__ZN7WebCore22InspectorTimelineAgentC2EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentEPNS_20InspectorMemoryAgentENS0_13InspectorTypeEPNS_15InspectorClientE,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,__ZN7WebCore22InspectorTimelineAgent5startEPN3WTF6StringEPKiPKb,b7,__ZThn12_N7WebCore22InspectorTimelineAgent5startEPN3WTF6StringEPKiPKb,b7,b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZThn12_N7WebCore22InspectorTimelineAgentD1Ev","__ZN7WebCore22InspectorTimelineAgent16willCallFunctionERKN3WTF6StringEiPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgent20canMonitorMainThreadEPN3WTF6StringEPb","__ZN7WebCore22InspectorTimelineAgent12didTimeStampEPNS_5FrameERKN3WTF6StringE","__ZN7WebCore22InspectorTimelineAgent19didDestroyWebSocketEmPNS_5FrameE","__ZN9Inspector18InspectorAgentBase12discardAgentEv","__ZN3WTF6VectorIN7WebCore22InspectorTimelineAgent19TimelineRecordEntryELj0ENS_15CrashOnOverflowEE6shrinkEj","__ZN7WebCore22InspectorTimelineAgent16didMarkLoadEventEPNS_5FrameE","__ZN3WTF6VectorIN7WebCore22InspectorTimelineAgent19TimelineRecordEntryELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS3_EEvOT_","_memcpy","__ZN7WebCore22InspectorTimelineAgent9sendEventEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrINS4_14InspectorArrayEEEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore22InspectorTimelineAgent22willFireAnimationFrameEiPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgent9didScrollEv","__ZN7WebCore22InspectorTimelineAgent23didDispatchXHRLoadEventEv","__ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE","__ZN9Inspector18InspectorAgentBaseD0Ev","__ZN7WebCore22InspectorTimelineAgent21didFireAnimationFrameEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore21TimelineRecordFactory26createGenericWebSocketDataEm","__ZN7WebCore22InspectorTimelineAgent29willDestroyFrontendAndBackendEv","__ZN7WebCore22InspectorTimelineAgent23didCancelAnimationFrameEiPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgent12didFireTimerEv","__ZN7WebCore22InspectorTimelineAgent29didScheduleStyleRecalculationEPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgent24didFinishLoadingResourceEmbdPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgent24didCompleteCurrentRecordENS_18TimelineRecordTypeE","__ZN7WebCore22InspectorTimelineAgent19didInvalidateLayoutEPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgentD2Ev","__ZN7WebCore22InspectorTimelineAgent7timeEndEPNS_5FrameERKN3WTF6StringE","__ZN7WebCore22InspectorTimelineAgent10willLayoutEPNS_5FrameE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZThn12_N7WebCore22InspectorTimelineAgent5startEPN3WTF6StringEPKiPKb","__ZN7WebCore22InspectorTimelineAgent9didLayoutEPNS_12RenderObjectE","__ZN9Inspector18InspectorAgentBaseD1Ev","__ZN7WebCore22InspectorTimelineAgent17commitFrameRecordEv","__ZN7WebCore22InspectorTimelineAgent12appendRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgent17pushCurrentRecordEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeEbPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgent35didDispatchXHRReadyStateChangeEventEv","__ZN7WebCore22InspectorTimelineAgent22didReceiveResourceDataEv","__ZN7WebCore22InspectorTimelineAgent12didCompositeEv","__ZN7WebCore22InspectorTimelineAgent36willDispatchXHRReadyStateChangeEventERKN3WTF6StringEiPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgent23willReceiveResourceDataEmPNS_5FrameEi","__ZThn12_N7WebCore22InspectorTimelineAgent4stopEPN3WTF6StringE","__ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE","__ZN7WebCore22InspectorTimelineAgent24willDispatchXHRLoadEventERKN3WTF6StringEPNS_5FrameE","__ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore22InspectorTimelineAgent13willCompositeEv","__ZN7WebCore22InspectorTimelineAgent13didBeginFrameEv","__ZN7WebCore22InspectorTimelineAgent8didPaintEPNS_12RenderObjectERKNS_10LayoutRectE","__ZN7WebCore22InspectorTimelineAgent26didScheduleResourceRequestERKN3WTF6StringEPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgent15localToPageQuadERKNS_12RenderObjectERKNS_10LayoutRectEPNS_9FloatQuadE","__ZN7WebCore22InspectorTimelineAgent17willDispatchEventERKNS_5EventEPNS_5FrameE","__ZN9Inspector19InspectorObjectBase8setArrayERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorArrayEEE","__ZN7WebCore22InspectorTimelineAgent5startEPN3WTF6StringEPKiPKb","__ZN7WebCore22InspectorTimelineAgent24innerAddRecordToTimelineEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeE","__ZN7WebCore18InspectorAgentBaseD0Ev","__ZN7WebCore22InspectorTimelineAgent4timeEPNS_5FrameERKN3WTF6StringE","__ZN7WebCore21TimelineTimeConverter5resetEv","__ZN7WebCore22InspectorTimelineAgent18willEvaluateScriptERKN3WTF6StringEiPNS_5FrameE","_memset","__ZN7WebCore22InspectorTimelineAgent33willSendWebSocketHandshakeRequestEmPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgent14didRemoveTimerEiPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgent17didEvaluateScriptEv","__ZN7WebCore22InspectorTimelineAgent24didRequestAnimationFrameEiPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgentD0Ev","__ZN7WebCore22InspectorTimelineAgent13willWriteHTMLEjPNS_5FrameE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrINS4_15InspectorObjectEEEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore22InspectorTimelineAgent12didWriteHTMLEj","__ZN7WebCore22InspectorTimelineAgent28supportsFrameInstrumentationEPN3WTF6StringEPb","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZThn12_N7WebCore22InspectorTimelineAgent20canMonitorMainThreadEPN3WTF6StringEPb","__ZN7WebCore22InspectorTimelineAgent16didDispatchEventEv","__ZN7WebCore22InspectorTimelineAgent19addRecordToTimelineEN3WTF10PassRefPtrIN9Inspector15InspectorObjectEEENS_18TimelineRecordTypeE","__ZN7WebCore22InspectorTimelineAgent16clearRecordStackEv","__ZN7WebCore22InspectorTimelineAgent36didReceiveWebSocketHandshakeResponseEmPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgent19didRecalculateStyleEv","__ZN7WebCore22InspectorTimelineAgent18didCreateWebSocketEmRKNS_3URLERKN3WTF6StringEPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgent26didReceiveResourceResponseEv","__ZN7WebCore22InspectorTimelineAgentC2EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentEPNS_20InspectorMemoryAgentENS0_13InspectorTypeEPNS_15InspectorClientE","__ZThn12_N7WebCore22InspectorTimelineAgentD0Ev","__ZN7WebCore22InspectorTimelineAgent27willReceiveResourceResponseEmRKNS_16ResourceResponseEPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgent13willFireTimerEiPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgent9willPaintEPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgent22didMarkDOMContentEventEPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgent20willRecalculateStyleEPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgent15didCallFunctionEv","__ZN7WebCore18InspectorAgentBaseD1Ev","__ZN7WebCore22InspectorTimelineAgent13didCommitLoadEv","__ZN7WebCore22InspectorTimelineAgent14setDOMCountersEPN9Inspector11TypeBuilder8Timeline13TimelineEventE","__ZN7WebCore22InspectorTimelineAgent14didCancelFrameEv","__ZN7WebCore22InspectorTimelineAgent4pageEv","__ZN7WebCore22InspectorTimelineAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE","__ZN7WebCore22InspectorTimelineAgent18setFrameIdentifierEPN9Inspector15InspectorObjectEPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgent15didInstallTimerEiibPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgent9timestampEv","__ZN7WebCore22InspectorTimelineAgent23willSendResourceRequestEmRKNS_15ResourceRequestEPNS_5FrameE","__ZN7WebCore22InspectorTimelineAgent4stopEPN3WTF6StringE","__ZThn12_N7WebCore22InspectorTimelineAgent28supportsFrameInstrumentationEPN3WTF6StringEPb","__ZN7WebCore22InspectorTimelineAgent10willScrollEPNS_5FrameE","__ZN3WTF6VectorIN7WebCore22InspectorTimelineAgent19TimelineRecordEntryELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore21TimelineRecordFactory25createWebSocketCreateDataEmRKNS_3URLERKN3WTF6StringE"]

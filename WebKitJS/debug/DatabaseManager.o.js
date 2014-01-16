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
H_BASE = parentModule["_malloc"](40 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 40;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore15DatabaseManager16ProposedDatabaseC1ERS0_PNS_14SecurityOriginERKN3WTF6StringES8_m;
var __ZN7WebCore15DatabaseManager16ProposedDatabaseD1Ev;
var __ZN7WebCore15DatabaseManagerC1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12) {
  try {
    Module["dynCall_viiiiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
  var __ZTVN7WebCore28DatabaseCreationCallbackTaskE=(H_BASE+8)|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_viiiiiiiiiiii=env.invoke_viiiiiiiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
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
function __ZN7WebCore15DatabaseManager12openDatabaseEPNS_22ScriptExecutionContextERKN3WTF6StringES6_S6_mNS3_10PassRefPtrINS_16DatabaseCallbackEEERNS_13DatabaseErrorE(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i11 = i10 | 0;
 i12 = i10 + 8 | 0;
 i13 = i10 + 16 | 0;
 i14 = i10 + 24 | 0;
 i15 = i10 + 32 | 0;
 i16 = i10 + 40 | 0;
 i17 = i10 + 48 | 0;
 i18 = i10 + 56 | 0;
 __ZN7WebCore16ScriptController19initializeThreadingEv();
 i19 = i8 | 0;
 i8 = (HEAP32[i19 >> 2] | 0) == 0;
 i20 = i13 | 0;
 HEAP32[i20 >> 2] = 0;
 __ZN7WebCore15DatabaseManager19openDatabaseBackendEPNS_22ScriptExecutionContextENS_12DatabaseTypeERKN3WTF6StringES7_S7_mbRNS_13DatabaseErrorERS5_(i14, i2, i3, 0, i4, i5, i6, i7, i8, i9, i13);
 i13 = i14 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 do {
  if ((i14 | 0) == 0) {
   HEAP32[i1 >> 2] = 0;
  } else {
   i13 = i16 | 0;
   HEAP32[i13 >> 2] = i14;
   i9 = i14 + 4 | 0;
   tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue + 1, tempValue;
   __ZN7WebCore8Database6createEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_19DatabaseBackendBaseEEE(i15, i3, i16);
   i9 = i15 | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i9 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i13 = i9 + 4 | 0;
     i7 = i13 | 0;
     if (((tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i7 = i13 - 4 | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
    }
   } while (0);
   __ZN7WebCore15DatabaseManager26existingDatabaseContextForEPNS_22ScriptExecutionContextE(i12, i2, i3);
   i9 = i12 | 0;
   i7 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   if ((i7 | 0) == 0) {
    i9 = __ZN3WTF10fastMallocEj(24) | 0;
    __ZN7WebCore15DatabaseContextC1EPNS_22ScriptExecutionContextE(i9, i3);
    i21 = i9;
   } else {
    i21 = i7;
   }
   HEAP8[i21 + 20 | 0] = 1;
   i7 = (i8 | 0) == 0;
   if (!i7) {
    i9 = i8 + 4 | 0;
    tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue + 1, tempValue;
   }
   i9 = i17 | 0;
   i13 = HEAP32[(HEAP32[i3 + 12 >> 2] | 0) + 8 >> 2] | 0;
   HEAP32[i9 >> 2] = i13;
   if ((i13 | 0) != 0) {
    i6 = i13 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   }
   do {
    if ((i3 | 0) == 0) {
     i22 = i8;
    } else {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 3](i3) | 0) {
      i23 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(__ZNK7WebCore8Document4pageEv(i3 - 156 + 68 | 0) | 0) | 0;
     } else {
      i23 = __ZN7WebCore24InspectorInstrumentation40instrumentingAgentsForNonDocumentContextEPNS_22ScriptExecutionContextE(i3) | 0;
     }
     if ((i23 | 0) == 0) {
      i22 = i8;
      break;
     }
     i6 = i11 | 0;
     HEAP32[i6 >> 2] = i8;
     __ZN7WebCore24InspectorInstrumentation19didOpenDatabaseImplEPNS_19InstrumentingAgentsEN3WTF10PassRefPtrINS_8DatabaseEEERKNS3_6StringES9_S9_(i23, i11, i17, i4, i5);
     i13 = HEAP32[i6 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i22 = 0;
      break;
     }
     i6 = i13 + 4 | 0;
     i13 = i6 | 0;
     if (((tempValue = HEAP32[i13 >> 2] | 0, HEAP32[i13 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      i22 = 0;
      break;
     }
     i13 = i6 - 4 | 0;
     if ((i13 | 0) == 0) {
      i22 = 0;
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 15](i13);
     i22 = 0;
    }
   } while (0);
   i13 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i6 = i13 | 0;
     i24 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i6 >> 2] = i24;
      break;
     }
    }
   } while (0);
   do {
    if ((i22 | 0) != 0) {
     i13 = i22 + 4 | 0;
     i9 = i13 | 0;
     if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i9 = i13 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
    }
   } while (0);
   do {
    if ((HEAP8[i14 + 45 | 0] & 1) != 0) {
     i9 = HEAP32[i19 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     i13 = HEAP32[i8 + 208 >> 2] | 0;
     i24 = HEAP32[(HEAP32[i13 >> 2] | 0) + 60 >> 2] | 0;
     if (i7) {
      i25 = i9;
     } else {
      i9 = i8 + 4 | 0;
      tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue + 1, tempValue;
      i25 = HEAP32[i19 >> 2] | 0;
     }
     HEAP32[i19 >> 2] = 0;
     i9 = __ZN3WTF10fastMallocEj(12) | 0;
     HEAP32[i9 >> 2] = H_BASE + 16;
     HEAP32[i9 + 4 >> 2] = i8;
     HEAP32[i9 + 8 >> 2] = i25;
     i6 = i18 | 0;
     HEAP32[i6 >> 2] = i9;
     FUNCTION_TABLE_vii[i24 & 3](i13, i18);
     i13 = HEAP32[i6 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 15](i13);
    }
   } while (0);
   HEAP32[i1 >> 2] = i8;
   do {
    if ((i21 | 0) != 0) {
     i7 = i21 + 12 | 0;
     i13 = i7 | 0;
     if (((tempValue = HEAP32[i13 >> 2] | 0, HEAP32[i13 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i13 = i7 - 12 | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] & 15](i13);
    }
   } while (0);
   i8 = i14 + 4 | 0;
   i13 = i8 | 0;
   if (((tempValue = HEAP32[i13 >> 2] | 0, HEAP32[i13 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i13 = i8 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 15](i13);
  }
 } while (0);
 i14 = HEAP32[i20 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 i20 = i14 | 0;
 i21 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
 if ((i21 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i14);
  STACKTOP = i10;
  return;
 } else {
  HEAP32[i20 >> 2] = i21;
  STACKTOP = i10;
  return;
 }
}
function __ZN7WebCore15DatabaseManager19openDatabaseBackendEPNS_22ScriptExecutionContextENS_12DatabaseTypeERKN3WTF6StringES7_S7_mbRNS_13DatabaseErrorERS5_(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i13 = i12 | 0;
 i14 = i12 + 8 | 0;
 i15 = i12 + 16 | 0;
 i16 = i12 + 24 | 0;
 i17 = i12 + 32 | 0;
 i18 = i12 + 64 | 0;
 i19 = i12 + 88 | 0;
 i20 = i12 + 96 | 0;
 i21 = i12 + 104 | 0;
 __ZN7WebCore15DatabaseManager26existingDatabaseContextForEPNS_22ScriptExecutionContextE(i13, i2, i3);
 i22 = i13 | 0;
 i13 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 if ((i13 | 0) == 0) {
  i22 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15DatabaseContextC1EPNS_22ScriptExecutionContextE(i22, i3);
  i23 = i22;
 } else {
  i23 = i13;
 }
 __ZN7WebCore15DatabaseContext7backendEv(i15, i23);
 i13 = i14 | 0;
 i22 = i15 | 0;
 i15 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 HEAP32[i13 >> 2] = i15;
 i15 = i2 | 0;
 i22 = HEAP32[i15 >> 2] | 0;
 FUNCTION_TABLE_viiiiiiiiiiii[HEAP32[(HEAP32[i22 >> 2] | 0) + 20 >> 2] & 1](i16, i22, i14, i4, i5, i6, i7, i8, i9, i10, i11, 0);
 i22 = i16 | 0;
 i16 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 L4 : do {
  if ((i16 | 0) == 0) {
   L6 : do {
    switch (HEAP32[i10 >> 2] | 0) {
    case 1:
    case 3:
    case 4:
     {
      HEAP32[i1 >> 2] = 0;
      break L4;
      break;
     }
    case 5:
     {
      FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i3 >> 2] | 0) + 40 >> 2] & 1](i3, 4, 3, i11, 0);
      HEAP32[i1 >> 2] = 0;
      break L4;
      break;
     }
    case 2:
     {
      __ZN7WebCore15DatabaseManager16ProposedDatabaseC2ERS0_PNS_14SecurityOriginERKN3WTF6StringES8_m(i17, i2, HEAP32[i3 + 12 >> 2] | 0, i5, i7, i8);
      __ZNKR3WTF6String12isolatedCopyEv(i19, i5);
      __ZNKR3WTF6String12isolatedCopyEv(i20, i7);
      i22 = i18 | 0;
      i24 = i19 | 0;
      i25 = HEAP32[i24 >> 2] | 0;
      HEAP32[i22 >> 2] = i25;
      if ((i25 | 0) != 0) {
       i26 = i25 | 0;
       HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
      }
      i26 = i18 + 4 | 0;
      i25 = i20 | 0;
      i27 = HEAP32[i25 >> 2] | 0;
      HEAP32[i26 >> 2] = i27;
      if ((i27 | 0) != 0) {
       i28 = i27 | 0;
       HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
      }
      i28 = i18 + 8 | 0;
      HEAP32[i28 >> 2] = i8;
      HEAP32[i28 + 4 >> 2] = 0;
      i28 = i18 + 16 | 0;
      HEAP32[i28 >> 2] = 0;
      HEAP32[i28 + 4 >> 2] = 0;
      __ZN7WebCore15DatabaseContext21databaseExceededQuotaERKN3WTF6StringENS_15DatabaseDetailsE(i23, i5, i18);
      i28 = HEAP32[i26 >> 2] | 0;
      do {
       if ((i28 | 0) != 0) {
        i26 = i28 | 0;
        i27 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
        if ((i27 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i28);
         break;
        } else {
         HEAP32[i26 >> 2] = i27;
         break;
        }
       }
      } while (0);
      i28 = HEAP32[i22 >> 2] | 0;
      do {
       if ((i28 | 0) != 0) {
        i27 = i28 | 0;
        i26 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
        if ((i26 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i28);
         break;
        } else {
         HEAP32[i27 >> 2] = i26;
         break;
        }
       }
      } while (0);
      i28 = HEAP32[i25 >> 2] | 0;
      do {
       if ((i28 | 0) != 0) {
        i22 = i28 | 0;
        i26 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
        if ((i26 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i28);
         break;
        } else {
         HEAP32[i22 >> 2] = i26;
         break;
        }
       }
      } while (0);
      i28 = HEAP32[i24 >> 2] | 0;
      do {
       if ((i28 | 0) != 0) {
        i25 = i28 | 0;
        i26 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
        if ((i26 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i28);
         break;
        } else {
         HEAP32[i25 >> 2] = i26;
         break;
        }
       }
      } while (0);
      __ZN7WebCore15DatabaseManager16ProposedDatabaseD2Ev(i17);
      HEAP32[i10 >> 2] = 0;
      i28 = HEAP32[i15 >> 2] | 0;
      FUNCTION_TABLE_viiiiiiiiiiii[HEAP32[(HEAP32[i28 >> 2] | 0) + 20 >> 2] & 1](i21, i28, i14, i4, i5, i6, i7, i8, i9, i10, i11, 1);
      i28 = i21 | 0;
      i24 = HEAP32[i28 >> 2] | 0;
      HEAP32[i28 >> 2] = 0;
      if ((i24 | 0) != 0) {
       i29 = i24;
       i30 = 30;
       break L4;
      }
      if ((HEAP32[i10 >> 2] | 0) != 5) {
       break L6;
      }
      FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i3 >> 2] | 0) + 40 >> 2] & 1](i3, 4, 3, i11, 0);
      HEAP32[i1 >> 2] = 0;
      break L4;
      break;
     }
    default:
     {}
    }
   } while (0);
   HEAP32[i1 >> 2] = 0;
  } else {
   i29 = i16;
   i30 = 30;
  }
 } while (0);
 if ((i30 | 0) == 30) {
  HEAP32[i1 >> 2] = i29;
 }
 i29 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i29 | 0) != 0) {
   i13 = i29 + 12 | 0;
   i1 = i13 | 0;
   if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i1 = i13 - 12 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 15](i1);
  }
 } while (0);
 if ((i23 | 0) == 0) {
  STACKTOP = i12;
  return;
 }
 i29 = i23 + 12 | 0;
 i23 = i29 | 0;
 if (((tempValue = HEAP32[i23 >> 2] | 0, HEAP32[i23 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  STACKTOP = i12;
  return;
 }
 i23 = i29 - 12 | 0;
 if ((i23 | 0) == 0) {
  STACKTOP = i12;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] & 15](i23);
 STACKTOP = i12;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore22ScriptExecutionContextENS_12KeyValuePairIS3_PNS1_15DatabaseContextEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS3_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableIPN7WebCore22ScriptExecutionContextENS_12KeyValuePairIS3_PNS1_15DatabaseContextEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = i7 & i6;
 i11 = i10 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 11;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i14 = 8;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i10 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 10;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 11;
     break;
    }
    i20 = i21;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   } else if ((i14 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i14 | 0) == 11) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 HEAP32[i26 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i27 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i27;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i28 >> 2] | 0) + i27 << 1 | 0) < (i8 | 0)) {
  i29 = i26;
  i30 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i31 = 8;
  } else {
   i28 = i8 << 1;
   i31 = (i27 * 6 & -1 | 0) < (i28 | 0) ? i8 : i28;
  }
  i28 = __ZN3WTF9HashTableIPN7WebCore22ScriptExecutionContextENS_12KeyValuePairIS3_PNS1_15DatabaseContextEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i31, i26) | 0;
  i29 = i28;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore15DatabaseManager16ProposedDatabaseES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableIPN7WebCore15DatabaseManager16ProposedDatabaseES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore15DatabaseManager16ProposedDatabaseES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore15DatabaseManager23detailsForNameAndOriginERKN3WTF6StringEPNS_14SecurityOriginE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i5 = i2 + 52 | 0;
 i6 = (i5 | 0) == 0;
 if (!i6) {
  __ZN3WTF5Mutex4lockEv(i5);
 }
 i7 = i2 + 32 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i2 + 36 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i8 + (i10 << 2) | 0;
 L4 : do {
  if ((HEAP32[i2 + 44 >> 2] | 0) != 0) {
   L6 : do {
    if ((i10 | 0) == 0) {
     i12 = i8;
    } else {
     i13 = i8;
     while (1) {
      i14 = HEAP32[i13 >> 2] | 0;
      if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
       i12 = i13;
       break L6;
      }
      i13 = i13 + 4 | 0;
      if ((i13 | 0) == (i11 | 0)) {
       break L4;
      }
     }
    }
   } while (0);
   if ((i12 | 0) == (i11 | 0)) {
    break;
   }
   i13 = i3 | 0;
   i14 = i12;
   while (1) {
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] | 0, HEAP32[i13 >> 2] | 0) | 0) {
     if (__ZNK7WebCore14SecurityOrigin5equalEPKS0_(HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] | 0, i4) | 0) {
      break;
     }
    }
    i15 = i14 + 4 | 0;
    L17 : do {
     if ((i15 | 0) == (i11 | 0)) {
      i16 = i11;
     } else {
      i17 = i15;
      while (1) {
       i18 = HEAP32[i17 >> 2] | 0;
       if (!((i18 | 0) == (-1 | 0) | (i18 | 0) == 0)) {
        i16 = i17;
        break L17;
       }
       i18 = i17 + 4 | 0;
       if ((i18 | 0) == (i11 | 0)) {
        i16 = i11;
        break;
       } else {
        i17 = i18;
       }
      }
     }
    } while (0);
    if ((i16 | 0) == ((HEAP32[i7 >> 2] | 0) + (HEAP32[i9 >> 2] << 2) | 0)) {
     break L4;
    } else {
     i14 = i16;
    }
   }
   i13 = HEAP32[i14 >> 2] | 0;
   i15 = HEAP32[i13 + 8 >> 2] | 0;
   HEAP32[i1 >> 2] = i15;
   if ((i15 | 0) != 0) {
    i17 = i15 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
   }
   i17 = HEAP32[i13 + 12 >> 2] | 0;
   HEAP32[i1 + 4 >> 2] = i17;
   if ((i17 | 0) != 0) {
    i15 = i17 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   }
   i15 = i1 + 8 | 0;
   i17 = i13 + 16 | 0;
   i18 = HEAP32[i17 + 4 >> 2] | 0;
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i15 + 4 >> 2] = i18;
   i18 = i1 + 16 | 0;
   i15 = i13 + 24 | 0;
   i13 = HEAP32[i15 + 4 >> 2] | 0;
   HEAP32[i18 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i18 + 4 >> 2] = i13;
   if (i6) {
    return;
   }
   __ZN3WTF5Mutex6unlockEv(i5);
   return;
  }
 } while (0);
 if (!i6) {
  __ZN3WTF5Mutex6unlockEv(i5);
 }
 i5 = HEAP32[i2 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i5 >> 2] | 0) + 36 >> 2] & 1](i1, i5, i3, i4);
 return;
}
function __ZN3WTF9HashTableIPN7WebCore22ScriptExecutionContextENS_12KeyValuePairIS3_PNS1_15DatabaseContextEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i2 = i7 + (i11 << 3) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i2;
   i17 = i30;
   i13 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i17 + 4 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i13 = i11 + 1 | 0;
  if ((i13 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i13;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore15DatabaseManager16ProposedDatabaseC2ERS0_PNS_14SecurityOriginERKN3WTF6StringES8_m(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 24 | 0;
 i11 = i7 + 32 | 0;
 i12 = i7 + 40 | 0;
 i13 = i1 | 0;
 HEAP32[i13 >> 2] = i2;
 __ZNK7WebCore14SecurityOrigin12isolatedCopyEv(i10, i3);
 i3 = i10 | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = i10;
 __ZNKR3WTF6String12isolatedCopyEv(i11, i4);
 __ZNKR3WTF6String12isolatedCopyEv(i12, i5);
 i5 = i6;
 i6 = 0;
 i4 = i11 | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i10 = i11 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = i12 | 0;
 i12 = HEAP32[i10 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i12;
 do {
  if ((i12 | 0) == 0) {
   i11 = i1 + 16 | 0;
   HEAP32[i11 >> 2] = i5;
   HEAP32[i11 + 4 >> 2] = i6;
   i11 = i1 + 24 | 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i11 + 4 >> 2] = 0;
  } else {
   i11 = i12 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   i11 = HEAP32[i10 >> 2] | 0;
   i3 = i1 + 16 | 0;
   HEAP32[i3 >> 2] = i5;
   HEAP32[i3 + 4 >> 2] = i6;
   i3 = i1 + 24 | 0;
   HEAP32[i3 >> 2] = 0;
   HEAP32[i3 + 4 >> 2] = 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i3 = i11 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i3 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i13 >> 2] | 0;
 HEAP32[i8 >> 2] = i1;
 i1 = i6 + 52 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF9HashTableIPN7WebCore15DatabaseManager16ProposedDatabaseES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i9, i6 + 32 | 0, i8, i8);
  STACKTOP = i7;
  return;
 } else {
  __ZN3WTF5Mutex4lockEv(i1);
  __ZN3WTF9HashTableIPN7WebCore15DatabaseManager16ProposedDatabaseES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i9, i6 + 32 | 0, i8, i8);
  __ZN3WTF5Mutex6unlockEv(i1);
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore15DatabaseManager16ProposedDatabaseC1ERS0_PNS_14SecurityOriginERKN3WTF6StringES8_m(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 24 | 0;
 i11 = i7 + 32 | 0;
 i12 = i7 + 40 | 0;
 i13 = i1 | 0;
 HEAP32[i13 >> 2] = i2;
 __ZNK7WebCore14SecurityOrigin12isolatedCopyEv(i10, i3);
 i3 = i10 | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = i10;
 __ZNKR3WTF6String12isolatedCopyEv(i11, i4);
 __ZNKR3WTF6String12isolatedCopyEv(i12, i5);
 i5 = i6;
 i6 = 0;
 i4 = i11 | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i10 = i11 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = i12 | 0;
 i12 = HEAP32[i10 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i12;
 do {
  if ((i12 | 0) == 0) {
   i11 = i1 + 16 | 0;
   HEAP32[i11 >> 2] = i5;
   HEAP32[i11 + 4 >> 2] = i6;
   i11 = i1 + 24 | 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i11 + 4 >> 2] = 0;
  } else {
   i11 = i12 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   i11 = HEAP32[i10 >> 2] | 0;
   i3 = i1 + 16 | 0;
   HEAP32[i3 >> 2] = i5;
   HEAP32[i3 + 4 >> 2] = i6;
   i3 = i1 + 24 | 0;
   HEAP32[i3 >> 2] = 0;
   HEAP32[i3 + 4 >> 2] = 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i3 = i11 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i3 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i13 >> 2] | 0;
 HEAP32[i8 >> 2] = i1;
 i1 = i6 + 52 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF9HashTableIPN7WebCore15DatabaseManager16ProposedDatabaseES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i9, i6 + 32 | 0, i8, i8);
  STACKTOP = i7;
  return;
 } else {
  __ZN3WTF5Mutex4lockEv(i1);
  __ZN3WTF9HashTableIPN7WebCore15DatabaseManager16ProposedDatabaseES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i9, i6 + 32 | 0, i8, i8);
  __ZN3WTF5Mutex6unlockEv(i1);
  STACKTOP = i7;
  return;
 }
}
function __ZN3WTF9HashTableIPN7WebCore15DatabaseManager16ProposedDatabaseES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore15DatabaseManager16openDatabaseSyncEPNS_22ScriptExecutionContextERKN3WTF6StringES6_S6_mNS3_10PassRefPtrINS_16DatabaseCallbackEEERNS_13DatabaseErrorE(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i11 = i10 | 0;
 i12 = i10 + 8 | 0;
 i13 = i10 + 16 | 0;
 i14 = i10 + 24 | 0;
 i15 = i8 | 0;
 i8 = (HEAP32[i15 >> 2] | 0) == 0;
 i16 = i11 | 0;
 HEAP32[i16 >> 2] = 0;
 __ZN7WebCore15DatabaseManager19openDatabaseBackendEPNS_22ScriptExecutionContextENS_12DatabaseTypeERKN3WTF6StringES7_S7_mbRNS_13DatabaseErrorERS5_(i12, i2, i3, 1, i4, i5, i6, i7, i8, i9, i11);
 i11 = i12 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 do {
  if ((i12 | 0) == 0) {
   HEAP32[i1 >> 2] = 0;
  } else {
   i11 = i14 | 0;
   HEAP32[i11 >> 2] = i12;
   i9 = i12 + 4 | 0;
   tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue + 1, tempValue;
   __ZN7WebCore12DatabaseSync6createEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_19DatabaseBackendBaseEEE(i13, i3, i14);
   i9 = i13 | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i9 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i11 = i9 + 4 | 0;
     i7 = i11 | 0;
     if (((tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i7 = i11 - 4 | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
    }
   } while (0);
   do {
    if ((HEAP8[i12 + 45 | 0] & 1) != 0) {
     i9 = HEAP32[i15 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_iii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 1](i9, i8) | 0;
    }
   } while (0);
   HEAP32[i1 >> 2] = i8;
   i9 = i12 + 4 | 0;
   i7 = i9 | 0;
   if (((tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i7 = i9 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
  }
 } while (0);
 i12 = HEAP32[i16 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 i16 = i12 | 0;
 i1 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i12);
  STACKTOP = i10;
  return;
 } else {
  HEAP32[i16 >> 2] = i1;
  STACKTOP = i10;
  return;
 }
}
function __ZN3WTF7HashMapIPN7WebCore22ScriptExecutionContextEPNS1_15DatabaseContextENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS8_IS5_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 3 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 3) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
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
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 3) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 3) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore22ScriptExecutionContextENS_12KeyValuePairIS3_PNS1_15DatabaseContextEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore15DatabaseManager19fullPathForDatabaseEPNS_14SecurityOriginERKN3WTF6StringEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i6 = i2 + 52 | 0;
 i7 = (i6 | 0) == 0;
 if (!i7) {
  __ZN3WTF5Mutex4lockEv(i6);
 }
 i8 = i2 + 32 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i2 + 36 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i9 + (i11 << 2) | 0;
 L4 : do {
  if ((HEAP32[i2 + 44 >> 2] | 0) != 0) {
   L6 : do {
    if ((i11 | 0) == 0) {
     i13 = i9;
    } else {
     i14 = i9;
     while (1) {
      i15 = HEAP32[i14 >> 2] | 0;
      if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
       i13 = i14;
       break L6;
      }
      i14 = i14 + 4 | 0;
      if ((i14 | 0) == (i12 | 0)) {
       break L4;
      }
     }
    }
   } while (0);
   if ((i13 | 0) == (i12 | 0)) {
    break;
   }
   i14 = i4 | 0;
   i15 = i13;
   while (1) {
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] | 0, HEAP32[i14 >> 2] | 0) | 0) {
     if (__ZNK7WebCore14SecurityOrigin5equalEPKS0_(HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] | 0, i3) | 0) {
      break;
     }
    }
    i16 = i15 + 4 | 0;
    L17 : do {
     if ((i16 | 0) == (i12 | 0)) {
      i17 = i12;
     } else {
      i18 = i16;
      while (1) {
       i19 = HEAP32[i18 >> 2] | 0;
       if (!((i19 | 0) == (-1 | 0) | (i19 | 0) == 0)) {
        i17 = i18;
        break L17;
       }
       i19 = i18 + 4 | 0;
       if ((i19 | 0) == (i12 | 0)) {
        i17 = i12;
        break;
       } else {
        i18 = i19;
       }
      }
     }
    } while (0);
    if ((i17 | 0) == ((HEAP32[i8 >> 2] | 0) + (HEAP32[i10 >> 2] << 2) | 0)) {
     break L4;
    } else {
     i15 = i17;
    }
   }
   HEAP32[i1 >> 2] = 0;
   if (i7) {
    return;
   }
   __ZN3WTF5Mutex6unlockEv(i6);
   return;
  }
 } while (0);
 if (!i7) {
  __ZN3WTF5Mutex6unlockEv(i6);
 }
 i6 = HEAP32[i2 >> 2] | 0;
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] & 1](i1, i6, i3, i4, i5);
 return;
}
function __ZN3WTF7HashSetIPN7WebCore15DatabaseManager16ProposedDatabaseENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 2) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
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
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore15DatabaseManager16ProposedDatabaseES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore15DatabaseManager26existingDatabaseContextForEPNS_22ScriptExecutionContextE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = i2 + 52 | 0;
 i5 = (i4 | 0) == 0;
 if (!i5) {
  __ZN3WTF5Mutex4lockEv(i4);
 }
 i6 = HEAP32[i2 + 20 >> 2] | 0;
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 i2 = i3;
 i8 = i2 + ~(i2 << 15) | 0;
 i2 = (i8 >>> 10 ^ i8) * 9 & -1;
 i8 = i2 >>> 6 ^ i2;
 i2 = i8 + ~(i8 << 11) | 0;
 i8 = i2 >>> 16 ^ i2;
 L4 : do {
  if ((i7 | 0) == 0) {
   i9 = 0;
  } else {
   i2 = i6 & i8;
   i10 = i7 + (i2 << 3) | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == (i3 | 0)) {
    i12 = i10;
   } else {
    i10 = (i8 >>> 23) + ~i8 | 0;
    i13 = i10 << 12 ^ i10;
    i10 = i13 >>> 7 ^ i13;
    i13 = i10 << 2 ^ i10;
    i10 = i13 >>> 20 ^ i13 | 1;
    i13 = 0;
    i14 = i2;
    i2 = i11;
    while (1) {
     if ((i2 | 0) == 0) {
      i9 = 0;
      break L4;
     }
     i11 = (i13 | 0) == 0 ? i10 : i13;
     i15 = i11 + i14 & i6;
     i16 = i7 + (i15 << 3) | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     if ((i17 | 0) == (i3 | 0)) {
      i12 = i16;
      break;
     } else {
      i13 = i11;
      i14 = i15;
      i2 = i17;
     }
    }
   }
   if ((i12 | 0) == 0) {
    i9 = 0;
    break;
   }
   i2 = HEAP32[i12 + 4 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i9 = 0;
    break;
   }
   i14 = i2 + 12 | 0;
   tempValue = HEAP32[i14 >> 2] | 0, HEAP32[i14 >> 2] = tempValue + 1, tempValue;
   i9 = i2;
  }
 } while (0);
 HEAP32[i1 >> 2] = i9;
 if (i5) {
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i4);
 return;
}
function __ZN7WebCore15DatabaseManager16ProposedDatabaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 HEAP32[i3 >> 2] = i1;
 i5 = i4 + 52 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF7HashSetIPN7WebCore15DatabaseManager16ProposedDatabaseENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i4 + 32 | 0, i3) | 0;
 } else {
  __ZN3WTF5Mutex4lockEv(i5);
  __ZN3WTF7HashSetIPN7WebCore15DatabaseManager16ProposedDatabaseENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i4 + 32 | 0, i3) | 0;
  __ZN3WTF5Mutex6unlockEv(i5);
 }
 i5 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i5 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i5);
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15DatabaseManager16ProposedDatabaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 HEAP32[i3 >> 2] = i1;
 i5 = i4 + 52 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF7HashSetIPN7WebCore15DatabaseManager16ProposedDatabaseENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i4 + 32 | 0, i3) | 0;
 } else {
  __ZN3WTF5Mutex4lockEv(i5);
  __ZN3WTF7HashSetIPN7WebCore15DatabaseManager16ProposedDatabaseENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i4 + 32 | 0, i3) | 0;
  __ZN3WTF5Mutex6unlockEv(i5);
 }
 i5 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i5 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i5);
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15DatabaseManager31interruptAllDatabasesForContextEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN7WebCore15DatabaseManager26existingDatabaseContextForEPNS_22ScriptExecutionContextE(i4, i1, i2);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 64 >> 2] | 0;
 __ZN7WebCore15DatabaseContext7backendEv(i5, i4);
 i6 = i5 | 0;
 FUNCTION_TABLE_vii[i1 & 3](i2, HEAP32[i6 >> 2] | 0);
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 12 | 0;
   i1 = i6 | 0;
   if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i1 = i6 - 12 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 15](i1);
  }
 } while (0);
 i2 = i4 + 12 | 0;
 i4 = i2 | 0;
 if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 - 12 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 15](i4);
 STACKTOP = i3;
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
function __ZN7WebCore15DatabaseManager13stopDatabasesEPNS_22ScriptExecutionContextEPNS_24DatabaseTaskSynchronizerE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore15DatabaseManager26existingDatabaseContextForEPNS_22ScriptExecutionContextE(i5, i1, i2);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i5 | 0) == 0) {
  if ((i3 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore24DatabaseTaskSynchronizer13taskCompletedEv(i3);
  STACKTOP = i4;
  return;
 }
 if ((i3 | 0) != 0 & ((__ZN7WebCore15DatabaseContext13stopDatabasesEPNS_24DatabaseTaskSynchronizerE(i5, i3) | 0) ^ 1)) {
  __ZN7WebCore24DatabaseTaskSynchronizer13taskCompletedEv(i3);
 }
 i3 = i5 + 12 | 0;
 i5 = i3 | 0;
 if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 - 12 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 15](i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15DatabaseManager23registerDatabaseContextEPNS_15DatabaseContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 HEAP32[i4 >> 2] = i2;
 i7 = i1 + 52 | 0;
 i8 = (i7 | 0) == 0;
 if (!i8) {
  __ZN3WTF5Mutex4lockEv(i7);
 }
 HEAP32[i5 >> 2] = HEAP32[i2 + 4 >> 2];
 __ZN3WTF9HashTableIPN7WebCore22ScriptExecutionContextENS_12KeyValuePairIS3_PNS1_15DatabaseContextEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS3_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 12 | 0, i5, i4);
 if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
  HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] = HEAP32[i4 >> 2];
 }
 if (i8) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i7);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15DatabaseManager19addProposedDatabaseEPNS0_16ProposedDatabaseE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = i2;
 i2 = i1 + 52 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF9HashTableIPN7WebCore15DatabaseManager16ProposedDatabaseES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i5, i1 + 32 | 0, i4, i4);
  STACKTOP = i3;
  return;
 } else {
  __ZN3WTF5Mutex4lockEv(i2);
  __ZN3WTF9HashTableIPN7WebCore15DatabaseManager16ProposedDatabaseES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i5, i1 + 32 | 0, i4, i4);
  __ZN3WTF5Mutex6unlockEv(i2);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore28DatabaseCreationCallbackTaskD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i4 = i3 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 4 | 0;
   i3 = i4 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i3 = i4 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore28DatabaseCreationCallbackTaskD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i4 = i3 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 4 | 0;
   i3 = i4 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i3 = i4 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore15DatabaseManager16hasOpenDatabasesEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore15DatabaseManager26existingDatabaseContextForEPNS_22ScriptExecutionContextE(i4, i1, i2);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  STACKTOP = i3;
  return i5 | 0;
 }
 i2 = (HEAP8[i4 + 20 | 0] & 1) != 0;
 i1 = i4 + 12 | 0;
 i4 = i1 | 0;
 if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  i5 = i2;
  STACKTOP = i3;
  return i5 | 0;
 }
 i4 = i1 - 12 | 0;
 if ((i4 | 0) == 0) {
  i5 = i2;
  STACKTOP = i3;
  return i5 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 15](i4);
 i5 = i2;
 STACKTOP = i3;
 return i5 | 0;
}
function __ZN7WebCore15DatabaseManager25unregisterDatabaseContextEPNS_15DatabaseContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 52 | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i4 >> 2] = HEAP32[i2 + 4 >> 2];
  __ZN3WTF7HashMapIPN7WebCore22ScriptExecutionContextEPNS1_15DatabaseContextENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS8_IS5_EEE6removeERKS3_(i1 + 12 | 0, i4) | 0;
  STACKTOP = i3;
  return;
 } else {
  __ZN3WTF5Mutex4lockEv(i5);
  HEAP32[i4 >> 2] = HEAP32[i2 + 4 >> 2];
  __ZN3WTF7HashMapIPN7WebCore22ScriptExecutionContextEPNS1_15DatabaseContextENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS8_IS5_EEE6removeERKS3_(i1 + 12 | 0, i4) | 0;
  __ZN3WTF5Mutex6unlockEv(i5);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore15DatabaseManager7managerEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i1 = HEAP32[H_BASE + 40 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i2 = i1;
  return i2 | 0;
 }
 i1 = __ZN3WTF10fastMallocEj(76) | 0;
 i3 = i1;
 i4 = __ZN7WebCore18platformStrategiesEv() | 0;
 i5 = i4 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 3](i4) | 0;
  HEAP32[i5 >> 2] = i7;
  i8 = i7;
 } else {
  i8 = i6;
 }
 HEAP32[i1 >> 2] = FUNCTION_TABLE_ii[HEAP32[HEAP32[i8 >> 2] >> 2] & 3](i8) | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 1;
 _memset(i1 + 12 | 0, 0, 40) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 52 | 0);
 HEAP32[H_BASE + 40 >> 2] = i3;
 i2 = i3;
 return i2 | 0;
}
function __ZN7WebCore15DatabaseManager22removeProposedDatabaseEPNS0_16ProposedDatabaseE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 i2 = i1 + 52 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF7HashSetIPN7WebCore15DatabaseManager16ProposedDatabaseENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i1 + 32 | 0, i4) | 0;
  STACKTOP = i3;
  return;
 } else {
  __ZN3WTF5Mutex4lockEv(i2);
  __ZN3WTF7HashSetIPN7WebCore15DatabaseManager16ProposedDatabaseENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i1 + 32 | 0, i4) | 0;
  __ZN3WTF5Mutex6unlockEv(i2);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore15DatabaseManager18databaseContextForEPNS_22ScriptExecutionContextE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore15DatabaseManager26existingDatabaseContextForEPNS_22ScriptExecutionContextE(i5, i2, i3);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i5 | 0) == 0) {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15DatabaseContextC1EPNS_22ScriptExecutionContextE(i2, i3);
  i6 = i2;
 } else {
  i6 = i5;
 }
 HEAP32[i1 >> 2] = i6;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15DatabaseManagerC2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = __ZN7WebCore18platformStrategiesEv() | 0;
 i3 = i2 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 3](i2) | 0;
  HEAP32[i3 >> 2] = i5;
  i6 = i5;
 } else {
  i6 = i4;
 }
 HEAP32[i1 >> 2] = FUNCTION_TABLE_ii[HEAP32[HEAP32[i6 >> 2] >> 2] & 3](i6) | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 1;
 _memset(i1 + 12 | 0, 0, 40) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 52 | 0);
 return;
}
function __ZN7WebCore15DatabaseManagerC1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = __ZN7WebCore18platformStrategiesEv() | 0;
 i3 = i2 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 3](i2) | 0;
  HEAP32[i3 >> 2] = i5;
  i6 = i5;
 } else {
  i6 = i4;
 }
 HEAP32[i1 >> 2] = FUNCTION_TABLE_ii[HEAP32[HEAP32[i6 >> 2] >> 2] & 3](i6) | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 1;
 _memset(i1 + 12 | 0, 0, 40) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 52 | 0);
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
function dynCall_viiiiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13) {
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
 i13 = i13 | 0;
 FUNCTION_TABLE_viiiiiiiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0, i12 | 0, i13 | 0);
}
function __ZN7WebCore15DatabaseManager22databaseNamesForOriginEPNS_14SecurityOriginERN3WTF6VectorINS3_6StringELj0ENS3_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i1 >> 2] | 0;
 return FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 32 >> 2] & 1](i4, i2, i3) | 0;
}
function __ZN7WebCore15DatabaseManager29exceptionCodeForDatabaseErrorENS_13DatabaseErrorE(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 switch (i1 | 0) {
 case 1:
 case 2:
 case 3:
 case 4:
  {
   i2 = 18;
   break;
  }
 case 5:
  {
   i2 = 11;
   break;
  }
 default:
  {
   i2 = 0;
  }
 }
 return i2 | 0;
}
function __ZN7WebCore15DatabaseManager7originsERN3WTF6VectorINS1_6RefPtrINS_14SecurityOriginEEELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 28 >> 2] & 3](i3, i2);
 return;
}
function __ZN7WebCore15DatabaseManager8setQuotaEPNS_14SecurityOriginEy(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = HEAP32[i1 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i5 >> 2] | 0) + 48 >> 2] & 1](i5, i2, i3, i4);
 return;
}
function __ZN7WebCore15DatabaseManager14deleteDatabaseEPNS_14SecurityOriginERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i1 >> 2] | 0;
 return FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] & 1](i4, i2, i3) | 0;
}
function __ZN7WebCore15DatabaseManager14usageForOriginEPNS_14SecurityOriginE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 40 >> 2] & 1](i3, i2) | 0;
 return (tempRet0 = tempRet0, i1) | 0;
}
function __ZN7WebCore15DatabaseManager14quotaForOriginEPNS_14SecurityOriginE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] & 1](i3, i2) | 0;
 return (tempRet0 = tempRet0, i1) | 0;
}
function __ZN7WebCore28DatabaseCreationCallbackTask11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 1](i2, HEAP32[i1 + 4 >> 2] | 0) | 0;
 return;
}
function __ZN7WebCore15DatabaseManager9setClientEPNS_21DatabaseManagerClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 + 4 >> 2] = i2;
 i3 = HEAP32[i1 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 3](i3, i2);
 return;
}
function b3(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
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
 abort(3);
}
function __ZN7WebCore15DatabaseManager17hasEntryForOriginEPNS_14SecurityOriginE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 return FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 1](i3, i2) | 0;
}
function __ZN7WebCore15DatabaseManager24setDatabaseDirectoryPathERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 3](i3, i2);
 return;
}
function __ZN7WebCore15DatabaseManager12deleteOriginEPNS_14SecurityOriginE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 return FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 56 >> 2] & 1](i3, i2) | 0;
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
function __ZN7WebCore15DatabaseManager15logErrorMessageEPNS_22ScriptExecutionContextERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 40 >> 2] & 1](i1, 4, 3, i2, 0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore15DatabaseManager21databaseDirectoryPathEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 3](i1, i3);
 return;
}
function __ZN7WebCore15DatabaseManager10initializeERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[HEAP32[i3 >> 2] >> 2] & 3](i3, i2);
 return;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZN7WebCore15DatabaseManager18deleteAllDatabasesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 52 >> 2] & 15](i2);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 2;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0) | 0;
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
function b7(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(7);
}
function __ZN7WebCore15DatabaseManager14setIsAvailableEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 8 | 0] = i2 & 1;
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
function __ZN7WebCore15DatabaseManager11isAvailableEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 8 | 0] & 1) != 0 | 0;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function __ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b9(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(9);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
 return 0;
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore15DatabaseManager16ProposedDatabaseD2Ev,b1,__ZN7WebCore28DatabaseCreationCallbackTaskD0Ev,b1,__ZN7WebCore28DatabaseCreationCallbackTaskD1Ev,b1,__ZN7WebCore15DatabaseManagerC2Ev,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore28DatabaseCreationCallbackTask11performTaskEPNS_22ScriptExecutionContextE,b2];
  var FUNCTION_TABLE_viiiiiiiiiiii = [b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv,b4];
  var FUNCTION_TABLE_iiii = [b5,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_viiiiii = [b7,b7,__ZN7WebCore15DatabaseManager16ProposedDatabaseC2ERS0_PNS_14SecurityOriginERKN3WTF6StringES8_m,b7];
  var FUNCTION_TABLE_iii = [b8,b8];
  var FUNCTION_TABLE_viiii = [b9,b9];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_viiiiiiiiiiii: dynCall_viiiiiiiiiiii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_viiiiiiiiiiii": invoke_viiiiiiiiiiii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_viiiiiiiiiiii = Module["dynCall_viiiiiiiiiiii"] = asm["dynCall_viiiiiiiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore15DatabaseManager16hasOpenDatabasesEPNS_22ScriptExecutionContextE","_strlen","__ZN7WebCore15DatabaseManager11isAvailableEv","__ZN7WebCore15DatabaseManager19fullPathForDatabaseEPNS_14SecurityOriginERKN3WTF6StringEb","__ZN7WebCore28DatabaseCreationCallbackTaskD0Ev","__ZN7WebCore15DatabaseManager7managerEv","__ZN7WebCore15DatabaseManager22removeProposedDatabaseEPNS0_16ProposedDatabaseE","__ZN7WebCore28DatabaseCreationCallbackTaskD1Ev","__ZN7WebCore15DatabaseManager14deleteDatabaseEPNS_14SecurityOriginERKN3WTF6StringE","__ZN7WebCore15DatabaseManager22databaseNamesForOriginEPNS_14SecurityOriginERN3WTF6VectorINS3_6StringELj0ENS3_15CrashOnOverflowEEE","__ZN7WebCore15DatabaseManager24setDatabaseDirectoryPathERKN3WTF6StringE","__ZN7WebCore15DatabaseManager12deleteOriginEPNS_14SecurityOriginE","__ZNK7WebCore15DatabaseManager21databaseDirectoryPathEv","__ZN7WebCore28DatabaseCreationCallbackTask11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore15DatabaseManager16ProposedDatabaseD2Ev","__ZN7WebCore15DatabaseManager19openDatabaseBackendEPNS_22ScriptExecutionContextENS_12DatabaseTypeERKN3WTF6StringES7_S7_mbRNS_13DatabaseErrorERS5_","__ZN7WebCore15DatabaseManager26existingDatabaseContextForEPNS_22ScriptExecutionContextE","__ZN7WebCore15DatabaseManager7originsERN3WTF6VectorINS1_6RefPtrINS_14SecurityOriginEEELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore15DatabaseManager9setClientEPNS_21DatabaseManagerClientE","__ZN3WTF7HashMapIPN7WebCore22ScriptExecutionContextEPNS1_15DatabaseContextENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS8_IS5_EEE6removeERKS3_","__ZN7WebCore15DatabaseManager14setIsAvailableEb","__ZN7WebCore15DatabaseManager8setQuotaEPNS_14SecurityOriginEy","__ZN7WebCore15DatabaseManager29exceptionCodeForDatabaseErrorENS_13DatabaseErrorE","__ZN7WebCore15DatabaseManager12openDatabaseEPNS_22ScriptExecutionContextERKN3WTF6StringES6_S6_mNS3_10PassRefPtrINS_16DatabaseCallbackEEERNS_13DatabaseErrorE","__ZN7WebCore15DatabaseManagerC2Ev","__ZN7WebCore14SecurityOriginD2Ev","__ZN7WebCore15DatabaseManager19addProposedDatabaseEPNS0_16ProposedDatabaseE","__ZN7WebCore15DatabaseManager16openDatabaseSyncEPNS_22ScriptExecutionContextERKN3WTF6StringES6_S6_mNS3_10PassRefPtrINS_16DatabaseCallbackEEERNS_13DatabaseErrorE","__ZN3WTF9HashTableIPN7WebCore22ScriptExecutionContextENS_12KeyValuePairIS3_PNS1_15DatabaseContextEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_","__ZN7WebCore15DatabaseManager18deleteAllDatabasesEv","__ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv","__ZN7WebCore15DatabaseManager13stopDatabasesEPNS_22ScriptExecutionContextEPNS_24DatabaseTaskSynchronizerE","__ZN3WTF7HashSetIPN7WebCore15DatabaseManager16ProposedDatabaseENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_","__ZN7WebCore15DatabaseManager23registerDatabaseContextEPNS_15DatabaseContextE","__ZN7WebCore15DatabaseManager16ProposedDatabaseC2ERS0_PNS_14SecurityOriginERKN3WTF6StringES8_m","__ZN7WebCore15DatabaseManager14usageForOriginEPNS_14SecurityOriginE","__ZN7WebCore15DatabaseManager14quotaForOriginEPNS_14SecurityOriginE","__ZN7WebCore15DatabaseManager10initializeERKN3WTF6StringE","__ZN7WebCore15DatabaseManager31interruptAllDatabasesForContextEPNS_22ScriptExecutionContextE","_memset","_memcpy","__ZN7WebCore15DatabaseManager18databaseContextForEPNS_22ScriptExecutionContextE","__ZN3WTF9HashTableIPN7WebCore15DatabaseManager16ProposedDatabaseES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_","__ZN7WebCore15DatabaseManager25unregisterDatabaseContextEPNS_15DatabaseContextE","__ZN7WebCore15DatabaseManager23detailsForNameAndOriginERKN3WTF6StringEPNS_14SecurityOriginE","__ZN7WebCore15DatabaseManager15logErrorMessageEPNS_22ScriptExecutionContextERKN3WTF6StringE","__ZN7WebCore15DatabaseManager17hasEntryForOriginEPNS_14SecurityOriginE","__ZN3WTF9HashTableIPN7WebCore15DatabaseManager16ProposedDatabaseES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZN3WTF9HashTableIPN7WebCore22ScriptExecutionContextENS_12KeyValuePairIS3_PNS1_15DatabaseContextEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS3_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S7_S9_SB_SH_SE_EEEEOT0_OT1_"]

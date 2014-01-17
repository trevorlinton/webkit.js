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
H_BASE = parentModule["_malloc"](576 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 576;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore22InspectorDatabaseAgentC1EPNS_19InstrumentingAgentsE;
var __ZN7WebCore22InspectorDatabaseAgentD1Ev;
/* memory initializer */ allocate([109,101,115,115,97,103,101,0,99,111,100,101,0,0,0,0,68,97,116,97,98,97,115,101,32,110,111,116,32,102,111,117,110,100,0,0,0,0,0,0,68,97,116,97,98,97,115,101,32,97,103,101,110,116,32,105,115,32,110,111,116,32,101,110,97,98,108,101,100,0,0,0,68,97,116,97,98,97,115,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
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
  var __ZTVN7WebCore18InspectorAgentBaseE=(H_BASE+384)|0;
  var __ZTVN9Inspector11TypeBuilder5ArrayIN3WTF6StringEEE=(H_BASE+216)|0;
  var __ZTVN7WebCore22InspectorDatabaseAgentE=(H_BASE+296)|0;
  var __ZTVN9Inspector18InspectorAgentBaseE=(H_BASE+96)|0;
  var __ZTVN9Inspector11TypeBuilder5ArrayINS_14InspectorValueEEE=(H_BASE+136)|0;
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
  var invoke_iiii=env.invoke_iiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore12_GLOBAL__N_117StatementCallback11handleEventEPNS_14SQLTransactionEPNS_12SQLResultSetE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i2 | 0;
 i5 = i2 + 8 | 0;
 i6 = i2 + 16 | 0;
 i7 = i2 + 24 | 0;
 i8 = i2 + 32 | 0;
 i9 = i2 + 40 | 0;
 i10 = i2 + 48 | 0;
 i11 = i2 + 56 | 0;
 i12 = i2 + 64 | 0;
 i13 = __ZNK7WebCore12SQLResultSet4rowsEv(i3) | 0;
 i3 = __ZN3WTF10fastMallocEj(24) | 0;
 i14 = i3;
 __ZN9Inspector18InspectorArrayBaseC2Ev(i3);
 HEAP32[i3 >> 2] = H_BASE + 224;
 i15 = i13 + 12 | 0;
 if ((HEAP32[i15 >> 2] | 0) != 0) {
  i16 = i13 + 4 | 0;
  i17 = i5 | 0;
  i18 = i3 + 12 | 0;
  i19 = i3 + 20 | 0;
  i20 = i3 + 16 | 0;
  i3 = i18;
  i21 = i18;
  i18 = i4 | 0;
  i22 = 0;
  while (1) {
   i23 = HEAP32[(HEAP32[i16 >> 2] | 0) + (i22 << 2) >> 2] | 0;
   HEAP32[i17 >> 2] = i23;
   if ((i23 | 0) != 0) {
    i24 = i23 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
   }
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i4, i5);
   i24 = HEAP32[i19 >> 2] | 0;
   if ((i24 | 0) == (HEAP32[i20 >> 2] | 0)) {
    __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i24 + 1 | 0);
    i23 = (HEAP32[i21 >> 2] | 0) + (HEAP32[i19 >> 2] << 2) | 0;
    i25 = HEAP32[i18 >> 2] | 0;
    HEAP32[i18 >> 2] = 0;
    HEAP32[i23 >> 2] = i25;
   } else {
    i25 = (HEAP32[i21 >> 2] | 0) + (i24 << 2) | 0;
    i24 = HEAP32[i18 >> 2] | 0;
    HEAP32[i18 >> 2] = 0;
    HEAP32[i25 >> 2] = i24;
   }
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   i24 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i25 = i24 + 4 | 0;
     i23 = i25 | 0;
     i26 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     if ((i26 | 0) != 0) {
      HEAP32[i23 >> 2] = i26;
      break;
     }
     i26 = i25 - 4 | 0;
     if ((i26 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 63](i26);
    }
   } while (0);
   i24 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i26 = i24 | 0;
     i25 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i26 >> 2] = i25;
      break;
     }
    }
   } while (0);
   i22 = i22 + 1 | 0;
   if (i22 >>> 0 >= (HEAP32[i15 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 i15 = __ZN3WTF10fastMallocEj(24) | 0;
 i22 = i15;
 __ZN9Inspector18InspectorArrayBaseC2Ev(i15);
 HEAP32[i15 >> 2] = H_BASE + 144;
 i17 = i13 + 24 | 0;
 if ((HEAP32[i17 >> 2] | 0) != 0) {
  i18 = i13 + 16 | 0;
  i13 = i6 | 0;
  i19 = i15 + 12 | 0;
  i21 = i15 + 20 | 0;
  i3 = i15 + 16 | 0;
  i15 = i19;
  i20 = i19;
  i19 = i7 | 0;
  i5 = i8 | 0;
  i4 = i9 | 0;
  i16 = 0;
  while (1) {
   i24 = (HEAP32[i18 >> 2] | 0) + (i16 * 24 & -1) | 0;
   i25 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i25 | 0) == 1) {
     __ZN9Inspector19InspectorBasicValue6createEd(i8, +__ZNK7WebCore8SQLValue6numberEv(i24));
     i26 = HEAP32[i5 >> 2] | 0;
     HEAP32[i5 >> 2] = 0;
     i23 = i26 | 0;
     i26 = HEAP32[i21 >> 2] | 0;
     if ((i26 | 0) == (HEAP32[i3 >> 2] | 0)) {
      __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i15, i26 + 1 | 0);
      HEAP32[(HEAP32[i20 >> 2] | 0) + (HEAP32[i21 >> 2] << 2) >> 2] = i23;
     } else {
      HEAP32[(HEAP32[i20 >> 2] | 0) + (i26 << 2) >> 2] = i23;
     }
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
     i23 = HEAP32[i5 >> 2] | 0;
     if ((i23 | 0) == 0) {
      break;
     }
     i26 = i23 + 4 | 0;
     i23 = i26 | 0;
     i27 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     if ((i27 | 0) != 0) {
      HEAP32[i23 >> 2] = i27;
      break;
     }
     i27 = i26 - 4 | 0;
     if ((i27 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] & 63](i27);
    } else if ((i25 | 0) == 2) {
     __ZNK7WebCore8SQLValue6stringEv(i7, i24);
     __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i6, i7);
     i27 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     i26 = i27 | 0;
     i27 = HEAP32[i21 >> 2] | 0;
     if ((i27 | 0) == (HEAP32[i3 >> 2] | 0)) {
      __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i15, i27 + 1 | 0);
      HEAP32[(HEAP32[i20 >> 2] | 0) + (HEAP32[i21 >> 2] << 2) >> 2] = i26;
     } else {
      HEAP32[(HEAP32[i20 >> 2] | 0) + (i27 << 2) >> 2] = i26;
     }
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
     i26 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i26 | 0) != 0) {
       i27 = i26 + 4 | 0;
       i23 = i27 | 0;
       i28 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
       if ((i28 | 0) != 0) {
        HEAP32[i23 >> 2] = i28;
        break;
       }
       i28 = i27 - 4 | 0;
       if ((i28 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 63](i28);
      }
     } while (0);
     i26 = HEAP32[i19 >> 2] | 0;
     if ((i26 | 0) == 0) {
      break;
     }
     i28 = i26 | 0;
     i27 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i28 >> 2] = i27;
      break;
     }
    } else if ((i25 | 0) == 0) {
     __ZN9Inspector14InspectorValue4nullEv(i9);
     i27 = HEAP32[i4 >> 2] | 0;
     HEAP32[i4 >> 2] = 0;
     i28 = HEAP32[i21 >> 2] | 0;
     if ((i28 | 0) == (HEAP32[i3 >> 2] | 0)) {
      __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i15, i28 + 1 | 0);
      HEAP32[(HEAP32[i20 >> 2] | 0) + (HEAP32[i21 >> 2] << 2) >> 2] = i27;
     } else {
      HEAP32[(HEAP32[i20 >> 2] | 0) + (i28 << 2) >> 2] = i27;
     }
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
     i27 = HEAP32[i4 >> 2] | 0;
     if ((i27 | 0) == 0) {
      break;
     }
     i28 = i27 + 4 | 0;
     i27 = i28 | 0;
     i26 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     if ((i26 | 0) != 0) {
      HEAP32[i27 >> 2] = i26;
      break;
     }
     i26 = i28 - 4 | 0;
     if ((i26 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 63](i26);
    }
   } while (0);
   i16 = i16 + 1 | 0;
   if (i16 >>> 0 >= (HEAP32[i17 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 i17 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i10 | 0;
 HEAP32[i1 >> 2] = i14;
 i14 = i11 | 0;
 HEAP32[i14 >> 2] = i22;
 i22 = i12 | 0;
 HEAP32[i22 >> 2] = 0;
 __ZN9Inspector41InspectorDatabaseBackendDispatcherHandler18ExecuteSQLCallback11sendSuccessEN3WTF10PassRefPtrINS_11TypeBuilder5ArrayINS2_6StringEEEEENS3_INS5_INS_14InspectorValueEEEEENS3_INS4_8Database5ErrorEEE(i17, i10, i11, i12);
 i12 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i22 = i12 + 4 | 0;
   i11 = i22 | 0;
   i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i11 >> 2] = i10;
    break;
   }
   i10 = i22 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
  }
 } while (0);
 i12 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i14 = i12 + 4 | 0;
   i10 = i14 | 0;
   i22 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i22 | 0) != 0) {
    HEAP32[i10 >> 2] = i22;
    break;
   }
   i22 = i14 - 4 | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 63](i22);
  }
 } while (0);
 i12 = HEAP32[i1 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i2;
  return 1;
 }
 i1 = i12 + 4 | 0;
 i12 = i1 | 0;
 i22 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 if ((i22 | 0) != 0) {
  HEAP32[i12 >> 2] = i22;
  STACKTOP = i2;
  return 1;
 }
 i22 = i1 - 4 | 0;
 if ((i22 | 0) == 0) {
  STACKTOP = i2;
  return 1;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 63](i22);
 STACKTOP = i2;
 return 1;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore25InspectorDatabaseResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EES1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = i2 + 4 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i9 = 8;
   i10 = 0;
  } else {
   i11 = i8 << 1;
   i9 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i8 : i11;
   i10 = i8;
  }
  HEAP32[i7 >> 2] = i9;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = i9 - 1;
  HEAP32[i5 >> 2] = __ZN3WTF16fastZeroedMallocEj(i9 << 3) | 0;
  if ((i10 | 0) != 0) {
   i9 = 0;
   while (1) {
    i8 = i9 << 3 | 0;
    i11 = HEAP32[i8 >> 2] | 0;
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore25InspectorDatabaseResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_(i2, i8) | 0;
    }
    i9 = i9 + 1 | 0;
    if ((i9 | 0) == (i10 | 0)) {
     break;
    }
   }
  }
  HEAP32[i2 + 16 >> 2] = 0;
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore25InspectorDatabaseResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(0, i10);
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = i7;
 } else {
  i12 = i6;
  i13 = i2 + 8 | 0;
 }
 i6 = HEAP32[i13 >> 2] | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i10 = HEAP32[i3 + 16 >> 2] | 0;
 if (i10 >>> 0 > 127 >>> 0) {
  i14 = i10 >>> 7;
 } else {
  i14 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i14 >>> 23) + ~i14 | 0;
 i10 = i3 << 12 ^ i3;
 i3 = i10 >>> 7 ^ i10;
 i10 = i3 << 2 ^ i3;
 i3 = i10 >>> 20 ^ i10 | 1;
 i10 = 0;
 i9 = i14;
 i14 = 0;
 while (1) {
  i8 = i9 & i6;
  i15 = i12 + (i8 << 3) | 0;
  i11 = HEAP32[i15 >> 2] | 0;
  i16 = i11;
  if ((i16 | 0) == 0) {
   break;
  } else if ((i16 | 0) == (-1 | 0)) {
   i17 = i15;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i11, HEAP32[i7 >> 2] | 0) | 0) {
    i18 = 16;
    break;
   } else {
    i17 = i10;
   }
  }
  i11 = (i14 | 0) == 0 ? i3 : i14;
  i10 = i17;
  i9 = i11 + i8 | 0;
  i14 = i11;
 }
 if ((i18 | 0) == 16) {
  i18 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i14 = i1;
  HEAP32[i14 >> 2] = i15;
  HEAP32[i14 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i10 | 0) == 0) {
  i19 = i15;
 } else {
  i15 = i10;
  HEAP32[i15 >> 2] = 0;
  HEAP32[i15 + 4 >> 2] = 0;
  i15 = i2 + 16 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) - 1;
  i19 = i10;
 }
 i10 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i19 | 0;
 i15 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i10;
 do {
  if ((i15 | 0) != 0) {
   i10 = i15 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i4 >> 2] | 0;
 if ((i15 | 0) != 0) {
  i4 = i15 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i19 + 4 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i15;
 do {
  if ((i7 | 0) != 0) {
   i15 = i7 | 0;
   i4 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore25InspectorDatabaseResourceD2Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i15 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i7 = i2 + 12 | 0;
 i4 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
 HEAP32[i7 >> 2] = i4;
 i7 = i2 + 16 | 0;
 i15 = i2 + 4 | 0;
 i10 = HEAP32[i15 >> 2] | 0;
 if (((HEAP32[i7 >> 2] | 0) + i4 << 1 | 0) < (i10 | 0)) {
  i20 = i19;
  i21 = i10;
 } else {
  if ((i10 | 0) == 0) {
   i22 = 8;
   i23 = 0;
  } else {
   i18 = i10 << 1;
   i22 = (i4 * 6 & -1 | 0) < (i18 | 0) ? i10 : i18;
   i23 = i10;
  }
  i10 = HEAP32[i5 >> 2] | 0;
  HEAP32[i15 >> 2] = i22;
  HEAP32[i13 >> 2] = i22 - 1;
  HEAP32[i5 >> 2] = __ZN3WTF16fastZeroedMallocEj(i22 << 3) | 0;
  if ((i23 | 0) == 0) {
   i24 = 0;
  } else {
   i22 = 0;
   i13 = 0;
   while (1) {
    i18 = i10 + (i22 << 3) | 0;
    i4 = HEAP32[i18 >> 2] | 0;
    if ((i4 | 0) == (-1 | 0) | (i4 | 0) == 0) {
     i25 = i13;
    } else {
     i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore25InspectorDatabaseResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_(i2, i18) | 0;
     i25 = (i18 | 0) == (i19 | 0) ? i4 : i13;
    }
    i4 = i22 + 1 | 0;
    if ((i4 | 0) == (i23 | 0)) {
     i24 = i25;
     break;
    } else {
     i22 = i4;
     i13 = i25;
    }
   }
  }
  HEAP32[i7 >> 2] = 0;
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore25InspectorDatabaseResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i10, i23);
  i20 = i24;
  i21 = HEAP32[i15 >> 2] | 0;
 }
 i15 = (HEAP32[i5 >> 2] | 0) + (i21 << 3) | 0;
 i21 = i1;
 HEAP32[i21 >> 2] = i20;
 HEAP32[i21 + 4 >> 2] = i15;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore12_GLOBAL__N_123reportTransactionFailedEPN9Inspector41InspectorDatabaseBackendDispatcherHandler18ExecuteSQLCallbackEPNS_8SQLErrorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
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
 __ZN9Inspector15InspectorObject6createEv(i12);
 i17 = HEAP32[i12 >> 2] | 0;
 __ZNKR3WTF6String12isolatedCopyEv(i13, i2 + 8 | 0);
 i12 = i17 | 0;
 HEAP32[i11 >> 2] = H_BASE + 8;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i10, i11);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i9, i13);
 i11 = i8 | 0;
 i18 = i9 | 0;
 i9 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i11 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i10, i8);
 i8 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i11 = i8 + 4 | 0;
   i9 = i11 | 0;
   i19 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i9 >> 2] = i19;
    break;
   }
   i19 = i11 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 63](i19);
  }
 } while (0);
 i8 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i18 = i8 + 4 | 0;
   i19 = i18 | 0;
   i11 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i19 >> 2] = i11;
    break;
   }
   i11 = i18 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
  }
 } while (0);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i10 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = H_BASE + 16;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 __ZN9Inspector19InspectorBasicValue6createEd(i5, +(i8 | 0));
 i8 = i4 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i8 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i6, i4);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i12 = i8 | 0;
   i5 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i12 >> 2] = i5;
    break;
   }
   i5 = i8 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i5 = i7 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i5 >> 2] = i8;
    break;
   }
   i8 = i7 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i6 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i4 = i17;
 i8 = (i17 | 0) == 0;
 if (!i8) {
  i6 = i17 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i13 = i6 | 0;
   i7 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i13 >> 2] = i7;
    break;
   }
  }
 } while (0);
 do {
  if (!i8) {
   i6 = i17 + 4 | 0;
   i7 = i6 | 0;
   i13 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i7 >> 2] = i13;
    break;
   }
   i13 = i6 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
  }
 } while (0);
 i17 = i14 | 0;
 HEAP32[i17 >> 2] = 0;
 i8 = i15 | 0;
 HEAP32[i8 >> 2] = 0;
 i13 = i16 | 0;
 HEAP32[i13 >> 2] = i4;
 __ZN9Inspector41InspectorDatabaseBackendDispatcherHandler18ExecuteSQLCallback11sendSuccessEN3WTF10PassRefPtrINS_11TypeBuilder5ArrayINS2_6StringEEEEENS3_INS5_INS_14InspectorValueEEEEENS3_INS4_8Database5ErrorEEE(i1, i14, i15, i16);
 i16 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i13 = i16 + 4 | 0;
   i15 = i13 | 0;
   i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i15 >> 2] = i14;
    break;
   }
   i14 = i13 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 63](i14);
  }
 } while (0);
 i16 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i8 = i16 + 4 | 0;
   i14 = i8 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i14 >> 2] = i13;
    break;
   }
   i13 = i8 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
  }
 } while (0);
 i16 = HEAP32[i17 >> 2] | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i17 = i16 + 4 | 0;
 i16 = i17 | 0;
 i13 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
 if ((i13 | 0) != 0) {
  HEAP32[i16 >> 2] = i13;
  STACKTOP = i3;
  return;
 }
 i13 = i17 - 4 | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22InspectorDatabaseAgent21getDatabaseTableNamesEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIS2_EEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 32 | 0;
 if ((HEAP8[i1 + 44 | 0] & 1) == 0) {
  __ZN3WTF6StringC1EPKc(i7, H_BASE + 48 | 0);
  i10 = i7 | 0;
  i7 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = 0;
  i11 = i2 | 0;
  i2 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = i7;
  do {
   if ((i2 | 0) != 0) {
    i7 = i2 | 0;
    i11 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i2);
     break;
    } else {
     HEAP32[i7 >> 2] = i11;
     break;
    }
   }
  } while (0);
  i2 = HEAP32[i10 >> 2] | 0;
  if ((i2 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i10 = i2 | 0;
  i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
  if ((i11 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i2);
   STACKTOP = i5;
   return;
  } else {
   HEAP32[i10 >> 2] = i11;
   STACKTOP = i5;
   return;
  }
 }
 i11 = __ZN3WTF10fastMallocEj(24) | 0;
 __ZN9Inspector18InspectorArrayBaseC2Ev(i11);
 HEAP32[i11 >> 2] = H_BASE + 224;
 i10 = i4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i11;
 do {
  if ((i4 | 0) != 0) {
   i11 = i4 + 4 | 0;
   i2 = i11 | 0;
   i7 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i2 >> 2] = i7;
    break;
   }
   i7 = i11 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
  }
 } while (0);
 i4 = __ZN7WebCore22InspectorDatabaseAgent13databaseForIdERKN3WTF6StringE(i1, i3) | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore8Database10tableNamesEv(i8, i4);
 i4 = i8 + 8 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i1 = i8 | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i9 | 0;
   i11 = i6 | 0;
   i2 = 0;
   i12 = i3;
   while (1) {
    i13 = HEAP32[i10 >> 2] | 0;
    if (i12 >>> 0 <= i2 >>> 0) {
     i14 = 19;
     break;
    }
    i15 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 << 2) >> 2] | 0;
    HEAP32[i7 >> 2] = i15;
    if ((i15 | 0) != 0) {
     i16 = i15 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
    }
    i16 = i13 + 12 | 0;
    __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i6, i9);
    i15 = i13 + 20 | 0;
    i17 = HEAP32[i15 >> 2] | 0;
    if ((i17 | 0) == (HEAP32[i13 + 16 >> 2] | 0)) {
     __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i16, i17 + 1 | 0);
     i13 = (HEAP32[i16 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) | 0;
     i18 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     HEAP32[i13 >> 2] = i18;
    } else {
     i18 = (HEAP32[i16 >> 2] | 0) + (i17 << 2) | 0;
     i17 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     HEAP32[i18 >> 2] = i17;
    }
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
    i15 = HEAP32[i11 >> 2] | 0;
    do {
     if ((i15 | 0) != 0) {
      i17 = i15 + 4 | 0;
      i18 = i17 | 0;
      i16 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
      if ((i16 | 0) != 0) {
       HEAP32[i18 >> 2] = i16;
       break;
      }
      i16 = i17 - 4 | 0;
      if ((i16 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
     }
    } while (0);
    i15 = HEAP32[i7 >> 2] | 0;
    do {
     if ((i15 | 0) != 0) {
      i16 = i15 | 0;
      i17 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
      if ((i17 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i15);
       break;
      } else {
       HEAP32[i16 >> 2] = i17;
       break;
      }
     }
    } while (0);
    i2 = i2 + 1 | 0;
    i12 = HEAP32[i4 >> 2] | 0;
    if (i2 >>> 0 >= i3 >>> 0) {
     break;
    }
   }
   if ((i14 | 0) == 19) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((i12 | 0) == 0) {
    break;
   }
   i2 = HEAP32[i1 >> 2] | 0;
   i7 = i2 + (i12 << 2) | 0;
   i11 = i2;
   while (1) {
    i2 = HEAP32[i11 >> 2] | 0;
    do {
     if ((i2 | 0) != 0) {
      i15 = i2 | 0;
      i17 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
      if ((i17 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i2);
       break;
      } else {
       HEAP32[i15 >> 2] = i17;
       break;
      }
     }
    } while (0);
    i11 = i11 + 4 | 0;
    if ((i11 | 0) == (i7 | 0)) {
     break;
    }
   }
   HEAP32[i4 >> 2] = 0;
  }
 } while (0);
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 STACKTOP = i5;
 return;
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
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
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
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
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
function __ZN7WebCore22InspectorDatabaseAgent15didOpenDatabaseEN3WTF10PassRefPtrINS_8DatabaseEEERKNS1_6StringES7_S7_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i2 | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] & 31](i7, i2 | 0);
 i2 = __ZN7WebCore22InspectorDatabaseAgent14findByFileNameERKN3WTF6StringE(i1, i7) | 0;
 i14 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i7 = i14 | 0;
   i15 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i7 >> 2] = i15;
    break;
   }
  }
 } while (0);
 if ((i2 | 0) != 0) {
  i14 = HEAP32[i13 >> 2] | 0;
  HEAP32[i13 >> 2] = 0;
  i15 = i2 + 4 | 0;
  i2 = HEAP32[i15 >> 2] | 0;
  HEAP32[i15 >> 2] = i14;
  if ((i2 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  i14 = i2 + 4 | 0;
  i2 = i14 | 0;
  if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
   STACKTOP = i6;
   return;
  }
  i2 = i14 - 4 | 0;
  if ((i2 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
  STACKTOP = i6;
  return;
 }
 i2 = i10 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i2 >> 2] = i14;
 __ZN7WebCore25InspectorDatabaseResource6createEN3WTF10PassRefPtrINS_8DatabaseEEERKNS1_6StringES7_S7_(i9, i10, i3, i4, i5);
 i5 = i8 | 0;
 i4 = i9 | 0;
 i9 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i5 >> 2] = i9;
 i9 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i2 = i9 + 4 | 0;
   i4 = i2 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i4 = i2 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  }
 } while (0);
 i9 = i11 | 0;
 i4 = HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i9 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i2 = i4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore25InspectorDatabaseResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EES1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i12, i1 + 24 | 0, i11, i8);
 do {
  if ((HEAP8[i12 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i12 >> 2] | 0;
   i11 = HEAP32[i5 >> 2] | 0;
   if ((i11 | 0) != 0) {
    i2 = i11 | 0;
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
   }
   i2 = i8 + 4 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i11;
   if ((i8 | 0) == 0) {
    break;
   }
   i11 = i8 | 0;
   i2 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore25InspectorDatabaseResourceD2Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    break;
   } else {
    HEAP32[i11 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i9 = i12 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i9 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   if ((HEAP8[i1 + 44 | 0] & 1) == 0) {
    break;
   }
   __ZN7WebCore25InspectorDatabaseResource4bindEPN9Inspector35InspectorDatabaseFrontendDispatcherE(HEAP32[i5 >> 2] | 0, i12);
  }
 } while (0);
 i12 = HEAP32[i5 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i5 = i12 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore25InspectorDatabaseResourceD2Ev(i12);
  __ZN3WTF8fastFreeEPv(i12);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore22InspectorDatabaseAgent10executeSQLEPN3WTF6StringERKS2_S5_NS1_10PassRefPtrIN9Inspector41InspectorDatabaseBackendDispatcherHandler18ExecuteSQLCallbackEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i2 | 0;
 i7 = i2 + 8 | 0;
 i8 = i2 + 16 | 0;
 i9 = i2 + 24 | 0;
 i10 = i2 + 32 | 0;
 i11 = i5 | 0;
 i5 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 do {
  if ((HEAP8[i1 + 44 | 0] & 1) == 0) {
   __ZN3WTF6StringC1EPKc(i6, H_BASE + 48 | 0);
   __ZN9Inspector26InspectorBackendDispatcher12CallbackBase11sendFailureERKN3WTF6StringE(i5 | 0, i6);
   i11 = HEAP32[i6 >> 2] | 0;
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
  } else {
   i13 = __ZN7WebCore22InspectorDatabaseAgent13databaseForIdERKN3WTF6StringE(i1, i3) | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF6StringC1EPKc(i7, H_BASE + 24 | 0);
    __ZN9Inspector26InspectorBackendDispatcher12CallbackBase11sendFailureERKN3WTF6StringE(i5 | 0, i7);
    i12 = HEAP32[i7 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    i11 = i12 | 0;
    i14 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i14 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i12);
     break;
    } else {
     HEAP32[i11 >> 2] = i14;
     break;
    }
   }
   i14 = (i5 | 0) == 0;
   if (!i14) {
    i11 = i5 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   }
   i11 = __ZN3WTF10fastMallocEj(16) | 0;
   HEAP32[i11 + 4 >> 2] = 1;
   HEAP32[i11 >> 2] = H_BASE + 528;
   i12 = HEAP32[i4 >> 2] | 0;
   HEAP32[i11 + 8 >> 2] = i12;
   if ((i12 | 0) != 0) {
    i15 = i12 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   }
   HEAP32[i11 + 12 >> 2] = i5;
   if (!i14) {
    i14 = i5 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   }
   i14 = __ZN3WTF10fastMallocEj(12) | 0;
   HEAP32[i14 + 4 >> 2] = 1;
   HEAP32[i14 >> 2] = H_BASE + 464;
   HEAP32[i14 + 8 >> 2] = i5;
   i15 = __ZN3WTF10fastMallocEj(8) | 0;
   HEAP32[i15 + 4 >> 2] = 1;
   HEAP32[i15 >> 2] = H_BASE + 432;
   i12 = i8 | 0;
   HEAP32[i12 >> 2] = i11;
   i11 = i9 | 0;
   HEAP32[i11 >> 2] = i14;
   i14 = i10 | 0;
   HEAP32[i14 >> 2] = i15;
   __ZN7WebCore8Database11transactionEN3WTF10PassRefPtrINS_22SQLTransactionCallbackEEENS2_INS_27SQLTransactionErrorCallbackEEENS2_INS_12VoidCallbackEEE(i13, i8, i9, i10);
   i13 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i14 = i13 + 4 | 0;
     i15 = i14 | 0;
     i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i15 >> 2] = i16;
      break;
     }
     i16 = i14 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
    }
   } while (0);
   i13 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i16 = i13 + 4 | 0;
     i14 = i16 | 0;
     if (((tempValue = HEAP32[i14 >> 2] | 0, HEAP32[i14 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i14 = i16 - 4 | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 63](i14);
    }
   } while (0);
   i13 = HEAP32[i12 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i11 = i13 + 4 | 0;
   i13 = i11 | 0;
   if (((tempValue = HEAP32[i13 >> 2] | 0, HEAP32[i13 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i13 = i11 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
  }
 } while (0);
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv(i5 | 0);
 STACKTOP = i2;
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
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
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
function runPostSets() {
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_iiii + 2;
}
function __ZN7WebCore12_GLOBAL__N_119TransactionCallback11handleEventEPNS_14SQLTransactionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i1 + 12 | 0;
 if (!(__ZNK9Inspector26InspectorBackendDispatcher12CallbackBase8isActiveEv(HEAP32[i7 >> 2] | 0) | 0)) {
  STACKTOP = i3;
  return 1;
 }
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i4 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i4 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = HEAP32[i7 >> 2] | 0;
 if ((i11 | 0) != 0) {
  i12 = i11 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i12 + 4 >> 2] = 1;
 HEAP32[i12 >> 2] = H_BASE + 560;
 HEAP32[i12 + 8 >> 2] = i11;
 i11 = HEAP32[i7 >> 2] | 0;
 if ((i11 | 0) != 0) {
  i7 = i11 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i7 + 4 >> 2] = 1;
 HEAP32[i7 >> 2] = H_BASE + 496;
 HEAP32[i7 + 8 >> 2] = i11;
 i11 = i5 | 0;
 HEAP32[i11 >> 2] = i12;
 i12 = i6 | 0;
 HEAP32[i12 >> 2] = i7;
 i7 = i3 + 32 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore14SQLTransaction10executeSQLERKN3WTF6StringERKNS1_6VectorINS_8SQLValueELj0ENS1_15CrashOnOverflowEEENS1_10PassRefPtrINS_20SQLStatementCallbackEEENSB_INS_25SQLStatementErrorCallbackEEERi(i2, i1 + 8 | 0, i4, i5, i6, i7);
 i7 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i12 = i7 + 4 | 0;
   i6 = i12 | 0;
   if (((tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i6 = i12 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 i7 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i11 = i7 + 4 | 0;
   i6 = i11 | 0;
   if (((tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i6 = i11 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i6 = HEAP32[i8 >> 2] | 0;
  i11 = i6 + (i7 * 24 & -1) | 0;
  i7 = i6;
  while (1) {
   i6 = HEAP32[i7 + 16 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i12 = i6 | 0;
     i5 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i12 >> 2] = i5;
      break;
     }
    }
   } while (0);
   i7 = i7 + 24 | 0;
   if ((i7 | 0) == (i11 | 0)) {
    break;
   }
  }
  HEAP32[i10 >> 2] = 0;
 }
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return 1;
 }
 HEAP32[i8 >> 2] = 0;
 HEAP32[i9 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i10);
 STACKTOP = i3;
 return 1;
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
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
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
function __ZN7WebCore22InspectorDatabaseAgent14findByFileNameERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 24 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 28 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i6 + (i8 << 3) | 0;
 if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 L4 : do {
  if ((i8 | 0) == 0) {
   i11 = i6;
  } else {
   i1 = i6;
   while (1) {
    i12 = HEAP32[i1 >> 2] | 0;
    if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
     i11 = i1;
     break L4;
    }
    i12 = i1 + 8 | 0;
    if ((i12 | 0) == (i9 | 0)) {
     i10 = 0;
     break;
    } else {
     i1 = i12;
    }
   }
   STACKTOP = i3;
   return i10 | 0;
  }
 } while (0);
 if ((i11 | 0) == (i9 | 0)) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i6 = i4 | 0;
 i8 = i2 | 0;
 i2 = i11;
 while (1) {
  i13 = i2 + 4 | 0;
  i11 = HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 28 >> 2] & 31](i4, i11 | 0);
  i11 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i6 >> 2] | 0, HEAP32[i8 >> 2] | 0) | 0;
  i1 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    i12 = i1 | 0;
    i14 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i14 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i12 >> 2] = i14;
     break;
    }
   }
  } while (0);
  if (i11) {
   break;
  }
  i1 = i2 + 8 | 0;
  L22 : do {
   if ((i1 | 0) == (i9 | 0)) {
    i15 = i9;
   } else {
    i14 = i1;
    while (1) {
     i12 = HEAP32[i14 >> 2] | 0;
     if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
      i15 = i14;
      break L22;
     }
     i12 = i14 + 8 | 0;
     if ((i12 | 0) == (i9 | 0)) {
      i15 = i9;
      break;
     } else {
      i14 = i12;
     }
    }
   }
  } while (0);
  if ((i15 | 0) == ((HEAP32[i5 >> 2] | 0) + (HEAP32[i7 >> 2] << 3) | 0)) {
   i10 = 0;
   i16 = 22;
   break;
  } else {
   i2 = i15;
  }
 }
 if ((i16 | 0) == 22) {
  STACKTOP = i3;
  return i10 | 0;
 }
 i10 = HEAP32[i13 >> 2] | 0;
 STACKTOP = i3;
 return i10 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore25InspectorDatabaseResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i5 + 16 >> 2] | 0;
 if (i6 >>> 0 > 127 >>> 0) {
  i7 = i6 >>> 7;
 } else {
  i7 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i5) | 0;
 }
 i5 = (i7 >>> 23) + ~i7 | 0;
 i6 = i5 << 12 ^ i5;
 i5 = i6 >>> 7 ^ i6;
 i6 = i5 << 2 ^ i5;
 i5 = i6 >>> 20 ^ i6 | 1;
 i6 = i7;
 i7 = 0;
 i8 = 0;
 while (1) {
  i9 = i6 & i4;
  i10 = i3 + (i9 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  if ((i12 | 0) == (-1 | 0)) {
   i13 = i10;
  } else if ((i12 | 0) == 0) {
   i14 = 6;
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i11, HEAP32[i1 >> 2] | 0) | 0) {
    i15 = i10;
    break;
   } else {
    i13 = i8;
   }
  }
  i11 = (i7 | 0) == 0 ? i5 : i7;
  i6 = i11 + i9 | 0;
  i7 = i11;
  i8 = i13;
 }
 if ((i14 | 0) == 6) {
  i15 = (i8 | 0) != 0 ? i8 : i10;
 }
 i10 = i15 + 4 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i14 = i8 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) == 0) {
    __ZN7WebCore25InspectorDatabaseResourceD2Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    break;
   } else {
    HEAP32[i14 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i8 = i15 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i14 = i13 | 0;
   i7 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i14 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i8 >> 2] = i13;
 i13 = i2 + 4 | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 return i15 | 0;
}
function __ZN7WebCore25InspectorDatabaseResourceD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
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
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  return;
 }
 i2 = i1 - 4 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 return;
}
function __ZN7WebCore22InspectorDatabaseAgent10databaseIdEPNS_8DatabaseE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = HEAP32[i2 + 24 >> 2] | 0;
 i5 = HEAP32[i2 + 28 >> 2] | 0;
 i6 = i4 + (i5 << 3) | 0;
 L1 : do {
  if ((HEAP32[i2 + 36 >> 2] | 0) != 0) {
   L3 : do {
    if ((i5 | 0) == 0) {
     i7 = i4;
    } else {
     i8 = i4;
     while (1) {
      i9 = HEAP32[i8 >> 2] | 0;
      if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
       i7 = i8;
       break L3;
      }
      i8 = i8 + 8 | 0;
      if ((i8 | 0) == (i6 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i7 | 0) == (i6 | 0)) {
    break;
   } else {
    i10 = i7;
   }
   while (1) {
    if ((HEAP32[(HEAP32[i10 + 4 >> 2] | 0) + 4 >> 2] | 0) == (i3 | 0)) {
     break;
    }
    i8 = i10 + 8 | 0;
    if ((i8 | 0) == (i6 | 0)) {
     break L1;
    } else {
     i11 = i8;
    }
    while (1) {
     i8 = HEAP32[i11 >> 2] | 0;
     if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
      break;
     }
     i8 = i11 + 8 | 0;
     if ((i8 | 0) == (i6 | 0)) {
      break L1;
     } else {
      i11 = i8;
     }
    }
    if ((i11 | 0) == (i6 | 0)) {
     break L1;
    } else {
     i10 = i11;
    }
   }
   i8 = HEAP32[i10 >> 2] | 0;
   HEAP32[i1 >> 2] = i8;
   if ((i8 | 0) == 0) {
    return;
   }
   i9 = i8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZThn12_N7WebCore22InspectorDatabaseAgent6enableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 - 48 + 36 | 0;
 i1 = i2 + 44 | 0;
 if ((HEAP8[i1] & 1) != 0) {
  return;
 }
 HEAP8[i1] = 1;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 i3 = HEAP32[i2 + 28 >> 2] | 0;
 i4 = i1 + (i3 << 3) | 0;
 if ((HEAP32[i2 + 36 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i3 | 0) == 0) {
   i5 = i1;
  } else {
   i6 = i1;
   while (1) {
    i7 = HEAP32[i6 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i5 = i6;
     break L7;
    }
    i6 = i6 + 8 | 0;
    if ((i6 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i4 | 0)) {
  return;
 }
 i1 = i2 + 16 | 0;
 i2 = i5;
 L16 : while (1) {
  __ZN7WebCore25InspectorDatabaseResource4bindEPN9Inspector35InspectorDatabaseFrontendDispatcherE(HEAP32[i2 + 4 >> 2] | 0, HEAP32[i1 >> 2] | 0);
  i5 = i2 + 8 | 0;
  if ((i5 | 0) == (i4 | 0)) {
   i8 = 17;
   break;
  } else {
   i9 = i5;
  }
  while (1) {
   i5 = HEAP32[i9 >> 2] | 0;
   if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
    break;
   }
   i5 = i9 + 8 | 0;
   if ((i5 | 0) == (i4 | 0)) {
    i8 = 19;
    break L16;
   } else {
    i9 = i5;
   }
  }
  if ((i9 | 0) == (i4 | 0)) {
   i8 = 18;
   break;
  } else {
   i2 = i9;
  }
 }
 if ((i8 | 0) == 17) {
  return;
 } else if ((i8 | 0) == 18) {
  return;
 } else if ((i8 | 0) == 19) {
  return;
 }
}
function __ZN7WebCore22InspectorDatabaseAgent13databaseForIdERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 + 24 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i1 + 28 >> 2] | 0;
  i6 = i5 << 3 | 0;
  i7 = 0;
  i8 = i5;
 } else {
  i5 = HEAP32[i1 + 32 >> 2] | 0;
  i9 = i2 | 0;
  i2 = HEAP32[i9 >> 2] | 0;
  i10 = HEAP32[i2 + 16 >> 2] | 0;
  if (i10 >>> 0 > 127 >>> 0) {
   i11 = i10 >>> 7;
  } else {
   i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
  }
  i2 = (i11 >>> 23) + ~i11 | 0;
  i10 = i2 << 12 ^ i2;
  i2 = i10 >>> 7 ^ i10;
  i10 = i2 << 2 ^ i2;
  i2 = i10 >>> 20 ^ i10 | 1;
  i10 = i11;
  i11 = 0;
  while (1) {
   i12 = i10 & i5;
   i13 = i4 + (i12 << 3) | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   i15 = i14;
   if ((i15 | 0) == 0) {
    i16 = 0;
    break;
   } else if ((i15 | 0) != (-1 | 0)) {
    if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i9 >> 2] | 0) | 0) {
     i16 = i13;
     break;
    }
   }
   i13 = (i11 | 0) == 0 ? i2 : i11;
   i10 = i13 + i12 | 0;
   i11 = i13;
  }
  i11 = HEAP32[i3 >> 2] | 0;
  i3 = HEAP32[i1 + 28 >> 2] | 0;
  i6 = (i16 | 0) == 0 ? i11 + (i3 << 3) | 0 : i16;
  i7 = i11;
  i8 = i3;
 }
 if ((i6 | 0) == (i7 + (i8 << 3) | 0)) {
  i17 = 0;
  return i17 | 0;
 }
 i17 = HEAP32[(HEAP32[i6 + 4 >> 2] | 0) + 4 >> 2] | 0;
 return i17 | 0;
}
function __ZN7WebCore22InspectorDatabaseAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __Znwj(4) | 0;
 HEAP32[i6 >> 2] = i2;
 i2 = i1 + 16 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i7 | 0) != 0) {
  __ZdlPv(i7);
 }
 __ZN9Inspector34InspectorDatabaseBackendDispatcher6createEPNS_26InspectorBackendDispatcherEPNS_41InspectorDatabaseBackendDispatcherHandlerE(i5, i3, i1 + 12 | 0);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i7 = i1 + 20 | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
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
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorDatabaseAgent6enableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 44 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  return;
 }
 HEAP8[i2] = 1;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 i4 = i2 + (i3 << 3) | 0;
 if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i3 | 0) == 0) {
   i5 = i2;
  } else {
   i6 = i2;
   while (1) {
    i7 = HEAP32[i6 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i5 = i6;
     break L7;
    }
    i6 = i6 + 8 | 0;
    if ((i6 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i4 | 0)) {
  return;
 }
 i2 = i1 + 16 | 0;
 i1 = i5;
 L16 : while (1) {
  __ZN7WebCore25InspectorDatabaseResource4bindEPN9Inspector35InspectorDatabaseFrontendDispatcherE(HEAP32[i1 + 4 >> 2] | 0, HEAP32[i2 >> 2] | 0);
  i5 = i1 + 8 | 0;
  if ((i5 | 0) == (i4 | 0)) {
   i8 = 17;
   break;
  } else {
   i9 = i5;
  }
  while (1) {
   i5 = HEAP32[i9 >> 2] | 0;
   if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
    break;
   }
   i5 = i9 + 8 | 0;
   if ((i5 | 0) == (i4 | 0)) {
    i8 = 19;
    break L16;
   } else {
    i9 = i5;
   }
  }
  if ((i9 | 0) == (i4 | 0)) {
   i8 = 18;
   break;
  } else {
   i1 = i9;
  }
 }
 if ((i8 | 0) == 17) {
  return;
 } else if ((i8 | 0) == 18) {
  return;
 } else if ((i8 | 0) == 19) {
  return;
 }
}
function __ZN7WebCore22InspectorDatabaseAgentD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 304;
 HEAP32[i1 + 12 >> 2] = H_BASE + 348;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 52 >> 2] = 0;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore25InspectorDatabaseResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i3, HEAP32[i1 + 28 >> 2] | 0);
 }
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 i3 = i1 + 16 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZdlPv(i6);
 }
 __ZN9Inspector41InspectorDatabaseBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 104;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  return;
 }
}
function __ZN7WebCore22InspectorDatabaseAgentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 304;
 HEAP32[i1 + 12 >> 2] = H_BASE + 348;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 52 >> 2] = 0;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore25InspectorDatabaseResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i3, HEAP32[i1 + 28 >> 2] | 0);
 }
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 i3 = i1 + 16 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZdlPv(i6);
 }
 __ZN9Inspector41InspectorDatabaseBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 104;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore25InspectorDatabaseResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if ((i2 | 0) > 0) {
  i3 = 0;
 } else {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 while (1) {
  i5 = i1 + (i3 << 3) | 0;
  do {
   if ((HEAP32[i5 >> 2] | 0) != -1) {
    i6 = HEAP32[i1 + (i3 << 3) + 4 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i7 = i6 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) == 0) {
       __ZN7WebCore25InspectorDatabaseResourceD2Ev(i6);
       __ZN3WTF8fastFreeEPv(i6);
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
  i3 = i3 + 1 | 0;
  if ((i3 | 0) >= (i2 | 0)) {
   break;
  }
 }
 i4 = i1;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore22InspectorDatabaseAgentC2EPNS_19InstrumentingAgentsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i5 >> 2] = H_BASE + 80;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i4, i5);
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = H_BASE + 104;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i4;
 do {
  if ((i4 | 0) == 0) {
   HEAP32[i5 >> 2] = H_BASE + 392;
   i7 = i1 + 8 | 0;
   HEAP32[i7 >> 2] = i2;
   i8 = i7;
  } else {
   i7 = i4 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i5 >> 2] = H_BASE + 392;
   i9 = i1 + 8 | 0;
   HEAP32[i9 >> 2] = i2;
   if ((i7 | 0) == 0) {
    i8 = i9;
    break;
   }
   i10 = i7 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    i8 = i9;
    break;
   } else {
    HEAP32[i10 >> 2] = i11;
    i8 = i9;
    break;
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = H_BASE + 304;
 HEAP32[i1 + 12 >> 2] = H_BASE + 348;
 _memset(i1 + 16 | 0, 0, 29) | 0;
 HEAP32[(HEAP32[i8 >> 2] | 0) + 52 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22InspectorDatabaseAgentC1EPNS_19InstrumentingAgentsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i5 >> 2] = H_BASE + 80;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i4, i5);
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = H_BASE + 104;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i4;
 do {
  if ((i4 | 0) == 0) {
   HEAP32[i5 >> 2] = H_BASE + 392;
   i7 = i1 + 8 | 0;
   HEAP32[i7 >> 2] = i2;
   i8 = i7;
  } else {
   i7 = i4 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i5 >> 2] = H_BASE + 392;
   i9 = i1 + 8 | 0;
   HEAP32[i9 >> 2] = i2;
   if ((i7 | 0) == 0) {
    i8 = i9;
    break;
   }
   i10 = i7 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    i8 = i9;
    break;
   } else {
    HEAP32[i10 >> 2] = i11;
    i8 = i9;
    break;
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = H_BASE + 304;
 HEAP32[i1 + 12 >> 2] = H_BASE + 348;
 _memset(i1 + 16 | 0, 0, 29) | 0;
 HEAP32[(HEAP32[i8 >> 2] | 0) + 52 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function __ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i5 | 0) != 0) {
    i4 = HEAP32[i2 + 12 >> 2] | 0;
    if ((i4 | 0) > 0) {
     i2 = 0;
     while (1) {
      i6 = HEAP32[i5 + (i2 << 3) >> 2] | 0;
      i7 = i6;
      do {
       if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
        i8 = i6 | 0;
        i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
        if ((i9 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i6);
         break;
        } else {
         HEAP32[i8 >> 2] = i9;
         break;
        }
       }
      } while (0);
      i2 = i2 + 1 | 0;
      if ((i2 | 0) >= (i4 | 0)) {
       break;
      }
     }
    }
    __ZN3WTF8fastFreeEPv(i5);
   }
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
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
function __ZN7WebCore22InspectorDatabaseAgent29willDestroyFrontendAndBackendEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZdlPv(i3);
 }
 i3 = i1 + 20 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 31](i1, 0);
 return;
}
function __ZN7WebCore12_GLOBAL__N_119TransactionCallbackD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 528;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv(i2 | 0);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZN3WTF8fastFreeEPv(i3);
  return;
 }
 i4 = i2 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i3 = i1;
  __ZN3WTF8fastFreeEPv(i3);
  return;
 } else {
  HEAP32[i4 >> 2] = i5;
  i3 = i1;
  __ZN3WTF8fastFreeEPv(i3);
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
function __ZN7WebCore12_GLOBAL__N_119TransactionCallbackD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 528;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv(i2 | 0);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
function __ZN7WebCore22InspectorDatabaseAgent14clearResourcesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore25InspectorDatabaseResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i3, HEAP32[i1 + 28 >> 2] | 0);
 _memset(i2 | 0, 0, 16) | 0;
 return;
}
function __ZThn12_N7WebCore22InspectorDatabaseAgent10executeSQLEPN3WTF6StringERKS2_S5_NS1_10PassRefPtrIN9Inspector41InspectorDatabaseBackendDispatcherHandler18ExecuteSQLCallbackEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore22InspectorDatabaseAgent10executeSQLEPN3WTF6StringERKS2_S5_NS1_10PassRefPtrIN9Inspector41InspectorDatabaseBackendDispatcherHandler18ExecuteSQLCallbackEEE(i1 - 48 + 36 | 0, 0, i3, i4, i5);
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
 HEAP32[i1 >> 2] = H_BASE + 104;
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
 HEAP32[i1 >> 2] = H_BASE + 104;
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
function __ZThn12_N7WebCore22InspectorDatabaseAgent21getDatabaseTableNamesEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIS2_EEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore22InspectorDatabaseAgent21getDatabaseTableNamesEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIS2_EEEE(i1 - 48 + 36 | 0, i2, i3, i4);
 return;
}
function __ZN7WebCore12_GLOBAL__N_124TransactionErrorCallbackD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 464;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZN3WTF8fastFreeEPv(i3);
  return;
 }
 __ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv(i2 | 0);
 i3 = i1;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN7WebCore12_GLOBAL__N_122StatementErrorCallbackD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 496;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZN3WTF8fastFreeEPv(i3);
  return;
 }
 __ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv(i2 | 0);
 i3 = i1;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN7WebCore12_GLOBAL__N_117StatementCallbackD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 560;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZN3WTF8fastFreeEPv(i3);
  return;
 }
 __ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv(i2 | 0);
 i3 = i1;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN9Inspector18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 104;
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
function __ZN7WebCore18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 104;
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
function __ZN7WebCore12_GLOBAL__N_122StatementErrorCallback11handleEventEPNS_14SQLTransactionEPNS_8SQLErrorE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12_GLOBAL__N_123reportTransactionFailedEPN9Inspector41InspectorDatabaseBackendDispatcherHandler18ExecuteSQLCallbackEPNS_8SQLErrorE(HEAP32[i1 + 8 >> 2] | 0, i3);
 return 1;
}
function __ZN7WebCore12_GLOBAL__N_124TransactionErrorCallback11handleEventEPNS_8SQLErrorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12_GLOBAL__N_123reportTransactionFailedEPN9Inspector41InspectorDatabaseBackendDispatcherHandler18ExecuteSQLCallbackEPNS_8SQLErrorE(HEAP32[i1 + 8 >> 2] | 0, i2);
 return 1;
}
function __ZN7WebCore12_GLOBAL__N_124TransactionErrorCallbackD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 464;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv(i2 | 0);
 return;
}
function __ZN7WebCore12_GLOBAL__N_122StatementErrorCallbackD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 496;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv(i2 | 0);
 return;
}
function __ZN7WebCore12_GLOBAL__N_117StatementCallbackD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 560;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv(i2 | 0);
 return;
}
function iii___ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE(i1 | 0, i2 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE(i1 | 0, i2 | 0);
}
function iii___ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE(i1 | 0, i2 | 0) | 0;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZThn12_N7WebCore22InspectorDatabaseAgent7disableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 - 48 + 80 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  return;
 }
 HEAP8[i2] = 0;
 return;
}
function iii___ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE(i1 | 0, i2 | 0) | 0;
}
function __ZN7WebCore22InspectorDatabaseAgent7disableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 + 44 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  return;
 }
 HEAP8[i2] = 0;
 return;
}
function __ZThn12_N7WebCore22InspectorDatabaseAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 48 + 36 | 0;
 __ZN7WebCore22InspectorDatabaseAgentD2Ev(i2);
 __ZdlPv(i2);
 return;
}
function iii___ZNK9Inspector14InspectorValue9asBooleanEPb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue9asBooleanEPb(i1 | 0, i2 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPm__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPm(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPl__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPl(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPj__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPj(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPi(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPd__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPd(i1 | 0, i2 | 0) | 0;
}
function __ZN9Inspector11TypeBuilder5ArrayINS_14InspectorValueEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function vii___ZN9Inspector18InspectorArrayBase7asArrayEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN9Inspector18InspectorArrayBase7asArrayEv(i1 | 0, i2 | 0);
}
function __ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function vii___ZN9Inspector14InspectorValue8asObjectEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN9Inspector14InspectorValue8asObjectEv(i1 | 0, i2 | 0);
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
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
function __ZN9Inspector11TypeBuilder5ArrayINS_14InspectorValueEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 return;
}
function __ZThn12_N7WebCore22InspectorDatabaseAgentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorDatabaseAgentD2Ev(i1 - 48 + 36 | 0);
 return;
}
function __ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore22InspectorDatabaseAgentD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorDatabaseAgentD2Ev(i1);
 __ZdlPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
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
function __ZN7WebCore12_GLOBAL__N_126TransactionSuccessCallbackD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function b1(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(1);
}
function __ZN7WebCore12_GLOBAL__N_126TransactionSuccessCallback11handleEventEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
}
function __ZN7WebCore12_GLOBAL__N_126TransactionSuccessCallbackD2Ev(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return 0;
}
function __ZN9Inspector18InspectorAgentBase12discardAgentEv(i1) {
 i1 = i1 | 0;
 return;
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
  var FUNCTION_TABLE_iiii = [b0,b0,__ZN7WebCore12_GLOBAL__N_117StatementCallback11handleEventEPNS_14SQLTransactionEPNS_12SQLResultSetE,b0,__ZN7WebCore12_GLOBAL__N_122StatementErrorCallback11handleEventEPNS_14SQLTransactionEPNS_8SQLErrorE,b0,b0,b0];
  var FUNCTION_TABLE_viiiii = [b1,b1,__ZThn12_N7WebCore22InspectorDatabaseAgent10executeSQLEPN3WTF6StringERKS2_S5_NS1_10PassRefPtrIN9Inspector41InspectorDatabaseBackendDispatcherHandler18ExecuteSQLCallbackEEE,b1,__ZN7WebCore22InspectorDatabaseAgent10executeSQLEPN3WTF6StringERKS2_S5_NS1_10PassRefPtrIN9Inspector41InspectorDatabaseBackendDispatcherHandler18ExecuteSQLCallbackEEE,b1,b1,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN9Inspector11TypeBuilder5ArrayINS_14InspectorValueEED0Ev,b2,__ZN7WebCore12_GLOBAL__N_119TransactionCallbackD2Ev,b2,__ZN7WebCore12_GLOBAL__N_119TransactionCallbackD0Ev,b2,__ZN9Inspector11TypeBuilder5ArrayINS_14InspectorValueEED1Ev,b2,__ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED0Ev,b2,__ZN9Inspector18InspectorAgentBase12discardAgentEv,b2,__ZN7WebCore12_GLOBAL__N_126TransactionSuccessCallbackD0Ev,b2,__ZN7WebCore18InspectorAgentBaseD0Ev,b2,__ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED1Ev,b2,__ZN7WebCore22InspectorDatabaseAgent29willDestroyFrontendAndBackendEv,b2,__ZN7WebCore22InspectorDatabaseAgentD2Ev,b2,__ZN7WebCore12_GLOBAL__N_117StatementCallbackD2Ev,b2,__ZN9Inspector18InspectorAgentBaseD0Ev,b2,__ZN9Inspector18InspectorAgentBaseD1Ev
  ,b2,__ZN7WebCore12_GLOBAL__N_117StatementCallbackD0Ev,b2,__ZN7WebCore22InspectorDatabaseAgentD0Ev,b2,__ZN7WebCore12_GLOBAL__N_124TransactionErrorCallbackD2Ev,b2,__ZThn12_N7WebCore22InspectorDatabaseAgentD1Ev,b2,__ZN7WebCore12_GLOBAL__N_126TransactionSuccessCallbackD2Ev,b2,__ZN7WebCore12_GLOBAL__N_122StatementErrorCallbackD0Ev,b2,__ZN7WebCore18InspectorAgentBaseD1Ev,b2,__ZN7WebCore12_GLOBAL__N_124TransactionErrorCallbackD0Ev,b2,__ZN7WebCore12_GLOBAL__N_122StatementErrorCallbackD2Ev,b2,__ZThn12_N7WebCore22InspectorDatabaseAgentD0Ev,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,vii___ZN9Inspector18InspectorArrayBase7asArrayEv__wrapper,b3,__ZThn12_N7WebCore22InspectorDatabaseAgent6enableEPN3WTF6StringE,b3,__ZN7WebCore22InspectorDatabaseAgent6enableEPN3WTF6StringE,b3,vii___ZN9Inspector14InspectorValue8asObjectEv__wrapper,b3,vii___ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE__wrapper,b3,__ZN7WebCore22InspectorDatabaseAgentC2EPNS_19InstrumentingAgentsE,b3,__ZN7WebCore22InspectorDatabaseAgent7disableEPN3WTF6StringE,b3,__ZThn12_N7WebCore22InspectorDatabaseAgent7disableEPN3WTF6StringE,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZN7WebCore12_GLOBAL__N_126TransactionSuccessCallback11handleEventEv,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZN7WebCore22InspectorDatabaseAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE,b5];
  var FUNCTION_TABLE_v = [b6,b6,v____cxa_pure_virtual__wrapper,b6];
  var FUNCTION_TABLE_iii = [b7,b7,iii___ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE__wrapper,b7,iii___ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE__wrapper,b7,iii___ZNK9Inspector14InspectorValue8asNumberEPj__wrapper,b7,iii___ZNK9Inspector14InspectorValue8asNumberEPi__wrapper,b7,iii___ZNK9Inspector14InspectorValue8asNumberEPm__wrapper,b7,iii___ZNK9Inspector14InspectorValue8asNumberEPl__wrapper,b7,iii___ZNK9Inspector14InspectorValue9asBooleanEPb__wrapper,b7,iii___ZNK9Inspector14InspectorValue8asNumberEPd__wrapper,b7,iii___ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE__wrapper,b7,iii___ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE__wrapper,b7,__ZN7WebCore12_GLOBAL__N_124TransactionErrorCallback11handleEventEPNS_8SQLErrorE,b7,__ZN7WebCore12_GLOBAL__N_119TransactionCallback11handleEventEPNS_14SQLTransactionE,b7,b7,b7,b7
  ,b7,b7,b7];
  var FUNCTION_TABLE_viiii = [b8,b8,__ZThn12_N7WebCore22InspectorDatabaseAgent21getDatabaseTableNamesEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIS2_EEEE,b8,__ZN7WebCore22InspectorDatabaseAgent21getDatabaseTableNamesEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIS2_EEEE,b8,b8,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore12_GLOBAL__N_119TransactionCallbackD2Ev","__ZN7WebCore12_GLOBAL__N_122StatementErrorCallbackD0Ev","__ZN7WebCore12_GLOBAL__N_119TransactionCallbackD0Ev","__ZN7WebCore22InspectorDatabaseAgentD0Ev","__ZN7WebCore12_GLOBAL__N_117StatementCallback11handleEventEPNS_14SQLTransactionEPNS_12SQLResultSetE","__ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED0Ev","__ZN9Inspector18InspectorAgentBase12discardAgentEv","__ZThn12_N7WebCore22InspectorDatabaseAgent6enableEPN3WTF6StringE","__ZThn12_N7WebCore22InspectorDatabaseAgent21getDatabaseTableNamesEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIS2_EEEE","__ZN7WebCore12_GLOBAL__N_124TransactionErrorCallback11handleEventEPNS_8SQLErrorE","__ZN7WebCore18InspectorAgentBaseD0Ev","__ZN7WebCore22InspectorDatabaseAgent6enableEPN3WTF6StringE","__ZN7WebCore22InspectorDatabaseAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE","_memset","__ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED1Ev","_memcpy","__ZN7WebCore18InspectorAgentBaseD1Ev","__ZN7WebCore22InspectorDatabaseAgent29willDestroyFrontendAndBackendEv","__ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv","__ZN7WebCore22InspectorDatabaseAgent7disableEPN3WTF6StringE","__ZN9Inspector11TypeBuilder5ArrayINS_14InspectorValueEED0Ev","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore12_GLOBAL__N_117StatementCallbackD2Ev","__ZN9Inspector18InspectorAgentBaseD0Ev","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore25InspectorDatabaseResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN9Inspector18InspectorAgentBaseD1Ev","__ZN7WebCore12_GLOBAL__N_122StatementErrorCallback11handleEventEPNS_14SQLTransactionEPNS_8SQLErrorE","__ZN7WebCore22InspectorDatabaseAgentC2EPNS_19InstrumentingAgentsE","__ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore25InspectorDatabaseResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EES1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore12_GLOBAL__N_117StatementCallbackD0Ev","__ZN9Inspector11TypeBuilder5ArrayINS_14InspectorValueEED1Ev","__ZN7WebCore22InspectorDatabaseAgent10databaseIdEPNS_8DatabaseE","__ZN7WebCore22InspectorDatabaseAgent14findByFileNameERKN3WTF6StringE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore25InspectorDatabaseResourceEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_","__ZN7WebCore22InspectorDatabaseAgentD2Ev","__ZN7WebCore12_GLOBAL__N_124TransactionErrorCallbackD2Ev","__ZN7WebCore12_GLOBAL__N_119TransactionCallback11handleEventEPNS_14SQLTransactionE","__ZN7WebCore25InspectorDatabaseResourceD2Ev","__ZN7WebCore12_GLOBAL__N_126TransactionSuccessCallbackD2Ev","__ZN7WebCore12_GLOBAL__N_124TransactionErrorCallbackD0Ev","__ZN7WebCore22InspectorDatabaseAgent21getDatabaseTableNamesEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIS2_EEEE","__ZN7WebCore12_GLOBAL__N_126TransactionSuccessCallback11handleEventEv","__ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZThn12_N7WebCore22InspectorDatabaseAgent10executeSQLEPN3WTF6StringERKS2_S5_NS1_10PassRefPtrIN9Inspector41InspectorDatabaseBackendDispatcherHandler18ExecuteSQLCallbackEEE","__ZN7WebCore12_GLOBAL__N_126TransactionSuccessCallbackD0Ev","__ZN7WebCore22InspectorDatabaseAgent14clearResourcesEv","__ZN7WebCore12_GLOBAL__N_123reportTransactionFailedEPN9Inspector41InspectorDatabaseBackendDispatcherHandler18ExecuteSQLCallbackEPNS_8SQLErrorE","__ZN7WebCore22InspectorDatabaseAgent10executeSQLEPN3WTF6StringERKS2_S5_NS1_10PassRefPtrIN9Inspector41InspectorDatabaseBackendDispatcherHandler18ExecuteSQLCallbackEEE","__ZN7WebCore22InspectorDatabaseAgent15didOpenDatabaseEN3WTF10PassRefPtrINS_8DatabaseEEERKNS1_6StringES7_S7_","__ZN7WebCore12_GLOBAL__N_122StatementErrorCallbackD2Ev","__ZN7WebCore22InspectorDatabaseAgent13databaseForIdERKN3WTF6StringE","__ZThn12_N7WebCore22InspectorDatabaseAgentD1Ev","__ZThn12_N7WebCore22InspectorDatabaseAgent7disableEPN3WTF6StringE","__ZThn12_N7WebCore22InspectorDatabaseAgentD0Ev"]

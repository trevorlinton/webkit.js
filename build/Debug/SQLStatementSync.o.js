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
H_BASE = parentModule["_malloc"](304 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 304;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore16SQLStatementSyncC1ERKN3WTF6StringERKNS1_6VectorINS_8SQLValueELj0ENS1_15CrashOnOverflowEEEi;
/* memory initializer */ allocate([37,115,32,40,37,100,44,32,37,115,41,0,0,0,0,0,99,111,117,108,100,32,110,111,116,32,101,120,101,99,117,116,101,32,115,116,97,116,101,109,101,110,116,0,0,0,0,0,115,116,97,116,101,109,101,110,116,32,102,97,105,108,101,100,32,100,117,101,32,116,111,32,97,32,99,111,110,115,116,114,97,105,110,116,32,102,97,105,108,117,114,101,0,0,0,0,99,111,117,108,100,32,110,111,116,32,105,116,101,114,97,116,101,32,114,101,115,117,108,116,115,0,0,0,0,0,0,0,99,111,117,108,100,32,110,111,116,32,98,105,110,100,32,118,97,108,117,101,0,0,0,0,116,104,101,114,101,32,119,97,115,32,110,111,116,32,101,110,111,117,103,104,32,114,101,109,97,105,110,105,110,103,32,115,116,111,114,97,103,101,32,115,112,97,99,101,0,0,0,0,110,117,109,98,101,114,32,111,102,32,39,63,39,115,32,105,110,32,115,116,97,116,101,109,101,110,116,32,115,116,114,105,110,103,32,100,111,101,115,32,110,111,116,32,109,97,116,99,104,32,97,114,103,117,109,101,110,116,32,99,111,117,110,116,0,0,0,0,0,0,0,0,99,111,117,108,100,32,110,111,116,32,112,114,101,112,97,114,101,32,115,116,97,116,101,109,101,110,116,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore13SQLResultDoneE=env.__ZN7WebCore13SQLResultDoneE|0;
  var __ZN7WebCore11SQLResultOkE=env.__ZN7WebCore11SQLResultOkE|0;
  var __ZN7WebCore18SQLResultInterruptE=env.__ZN7WebCore18SQLResultInterruptE|0;
  var __ZN7WebCore13SQLResultFullE=env.__ZN7WebCore13SQLResultFullE|0;
  var __ZN7WebCore12SQLResultRowE=env.__ZN7WebCore12SQLResultRowE|0;
  var __ZN7WebCore19SQLResultConstraintE=env.__ZN7WebCore19SQLResultConstraintE|0;
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
  var invoke_v=env.invoke_v;
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
function __ZN7WebCore16SQLStatementSync7executeEPNS_12DatabaseSyncERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 48 | 0;
 i12 = i5 + 56 | 0;
 i13 = i5 + 64 | 0;
 i14 = i5 + 72 | 0;
 i15 = i5 + 96 | 0;
 i16 = i5 + 104 | 0;
 i17 = i3 | 0;
 __ZN7WebCore19DatabaseBackendBase24setAuthorizerPermissionsEi(i17, HEAP32[i2 + 16 >> 2] | 0);
 i18 = i3 + 48 | 0;
 __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i10, i18, i2 | 0);
 i19 = __ZN7WebCore15SQLiteStatement7prepareEv(i10) | 0;
 if ((i19 | 0) != (HEAP32[__ZN7WebCore11SQLResultOkE >> 2] | 0)) {
  HEAP32[i4 >> 2] = (i19 | 0) == (HEAP32[__ZN7WebCore18SQLResultInterruptE >> 2] | 0) ? 1001 : 1005;
  i20 = __ZN7WebCore14SQLiteDatabase12lastErrorMsgEv(i18) | 0;
  __ZN3WTF6String6formatEPKcz(i9, H_BASE + 8 | 0, (i21 = STACKTOP, STACKTOP = STACKTOP + 24 | 0, HEAP32[i21 >> 2] = H_BASE + 280, HEAP32[i21 + 8 >> 2] = i19, HEAP32[i21 + 16 >> 2] = i20, i21) | 0);
  STACKTOP = i21;
  i20 = i9 | 0;
  i9 = HEAP32[i20 >> 2] | 0;
  if ((i9 | 0) != 0) {
   i22 = i9 | 0;
   HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
  }
  i22 = i3 + 164 | 0;
  i23 = HEAP32[i22 >> 2] | 0;
  HEAP32[i22 >> 2] = i9;
  do {
   if ((i23 | 0) != 0) {
    i9 = i23 | 0;
    i22 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i22 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i23);
     break;
    } else {
     HEAP32[i9 >> 2] = i22;
     break;
    }
   }
  } while (0);
  i23 = HEAP32[i20 >> 2] | 0;
  do {
   if ((i23 | 0) != 0) {
    i20 = i23 | 0;
    i22 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
    if ((i22 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i23);
     break;
    } else {
     HEAP32[i20 >> 2] = i22;
     break;
    }
   }
  } while (0);
  HEAP32[i1 >> 2] = 0;
  __ZN7WebCore15SQLiteStatementD1Ev(i10);
  STACKTOP = i5;
  return;
 }
 i23 = __ZNK7WebCore15SQLiteStatement18bindParameterCountEv(i10) | 0;
 i22 = i2 + 12 | 0;
 if ((i23 | 0) != (HEAP32[i22 >> 2] | 0)) {
  i20 = __ZN7WebCore19DatabaseBackendBase13isInterruptedEv(i17) | 0;
  HEAP32[i4 >> 2] = i20 ? 1001 : 1005;
  __ZN3WTF6StringC1EPKc(i11, H_BASE + 208 | 0);
  i20 = i11 | 0;
  i11 = HEAP32[i20 >> 2] | 0;
  if ((i11 | 0) != 0) {
   i9 = i11 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
  }
  i9 = i3 + 164 | 0;
  i24 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i11;
  do {
   if ((i24 | 0) != 0) {
    i11 = i24 | 0;
    i9 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i24);
     break;
    } else {
     HEAP32[i11 >> 2] = i9;
     break;
    }
   }
  } while (0);
  i24 = HEAP32[i20 >> 2] | 0;
  do {
   if ((i24 | 0) != 0) {
    i20 = i24 | 0;
    i9 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i24);
     break;
    } else {
     HEAP32[i20 >> 2] = i9;
     break;
    }
   }
  } while (0);
  HEAP32[i1 >> 2] = 0;
  __ZN7WebCore15SQLiteStatementD1Ev(i10);
  STACKTOP = i5;
  return;
 }
 i24 = i2 + 4 | 0;
 i2 = HEAP32[__ZN7WebCore13SQLResultFullE >> 2] | 0;
 i9 = 0;
 i20 = i23;
 while (1) {
  if (i9 >>> 0 >= i20 >>> 0) {
   i25 = 52;
   break;
  }
  i23 = i9 + 1 | 0;
  i26 = __ZN7WebCore15SQLiteStatement9bindValueEiRKNS_8SQLValueE(i10, i23, (HEAP32[i24 >> 2] | 0) + (i9 * 24 & -1) | 0) | 0;
  if ((i26 | 0) == (i2 | 0)) {
   i25 = 28;
   break;
  }
  if ((i26 | 0) != (i19 | 0)) {
   i25 = 41;
   break;
  }
  i9 = i23;
  i20 = HEAP32[i22 >> 2] | 0;
 }
 if ((i25 | 0) == 28) {
  HEAP32[i4 >> 2] = 1004;
  __ZN3WTF6StringC1EPKc(i12, H_BASE + 160 | 0);
  i22 = i12 | 0;
  i12 = HEAP32[i22 >> 2] | 0;
  if ((i12 | 0) != 0) {
   i20 = i12 | 0;
   HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
  }
  i20 = i3 + 164 | 0;
  i9 = HEAP32[i20 >> 2] | 0;
  HEAP32[i20 >> 2] = i12;
  do {
   if ((i9 | 0) != 0) {
    i12 = i9 | 0;
    i20 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i20 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i12 >> 2] = i20;
     break;
    }
   }
  } while (0);
  i9 = HEAP32[i22 >> 2] | 0;
  do {
   if ((i9 | 0) != 0) {
    i22 = i9 | 0;
    i20 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
    if ((i20 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i22 >> 2] = i20;
     break;
    }
   }
  } while (0);
  HEAP32[i1 >> 2] = 0;
  __ZN7WebCore15SQLiteStatementD1Ev(i10);
  STACKTOP = i5;
  return;
 } else if ((i25 | 0) == 41) {
  HEAP32[i4 >> 2] = 1001;
  i9 = __ZN7WebCore14SQLiteDatabase12lastErrorMsgEv(i18) | 0;
  __ZN3WTF6String6formatEPKcz(i7, H_BASE + 8 | 0, (i21 = STACKTOP, STACKTOP = STACKTOP + 24 | 0, HEAP32[i21 >> 2] = H_BASE + 136, HEAP32[i21 + 8 >> 2] = i26, HEAP32[i21 + 16 >> 2] = i9, i21) | 0);
  STACKTOP = i21;
  i9 = i7 | 0;
  i7 = HEAP32[i9 >> 2] | 0;
  if ((i7 | 0) != 0) {
   i26 = i7 | 0;
   HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
  }
  i26 = i3 + 164 | 0;
  i20 = HEAP32[i26 >> 2] | 0;
  HEAP32[i26 >> 2] = i7;
  do {
   if ((i20 | 0) != 0) {
    i7 = i20 | 0;
    i26 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i26 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i20);
     break;
    } else {
     HEAP32[i7 >> 2] = i26;
     break;
    }
   }
  } while (0);
  i20 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i20 | 0) != 0) {
    i9 = i20 | 0;
    i26 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i26 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i20);
     break;
    } else {
     HEAP32[i9 >> 2] = i26;
     break;
    }
   }
  } while (0);
  HEAP32[i1 >> 2] = 0;
  __ZN7WebCore15SQLiteStatementD1Ev(i10);
  STACKTOP = i5;
  return;
 } else if ((i25 | 0) == 52) {
  i20 = __ZN3WTF10fastMallocEj(24) | 0;
  i26 = i20;
  __ZN7WebCore12SQLResultSetC1Ev(i26);
  i9 = __ZN7WebCore15SQLiteStatement4stepEv(i10) | 0;
  do {
   if ((i9 | 0) == (HEAP32[__ZN7WebCore12SQLResultRowE >> 2] | 0)) {
    i7 = __ZN7WebCore15SQLiteStatement11columnCountEv(i10) | 0;
    i22 = __ZNK7WebCore12SQLResultSet4rowsEv(i26) | 0;
    if ((i7 | 0) > 0) {
     i12 = i13 | 0;
     i19 = 0;
     while (1) {
      __ZN7WebCore15SQLiteStatement13getColumnNameEi(i13, i10, i19);
      __ZN7WebCore19SQLResultSetRowList9addColumnERKN3WTF6StringE(i22, i13);
      i24 = HEAP32[i12 >> 2] | 0;
      do {
       if ((i24 | 0) != 0) {
        i23 = i24 | 0;
        i11 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
        if ((i11 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i24);
         break;
        } else {
         HEAP32[i23 >> 2] = i11;
         break;
        }
       }
      } while (0);
      i19 = i19 + 1 | 0;
      if ((i19 | 0) >= (i7 | 0)) {
       break;
      }
     }
    }
    i19 = i22 + 16 | 0;
    i12 = i22 + 24 | 0;
    i24 = i22 + 20 | 0;
    i11 = i14 + 16 | 0;
    i23 = i19 | 0;
    i27 = 0;
    while (1) {
     if ((i27 | 0) >= (i7 | 0)) {
      i28 = __ZN7WebCore15SQLiteStatement4stepEv(i10) | 0;
      if ((i28 | 0) == (i9 | 0)) {
       i27 = 0;
       continue;
      } else {
       break;
      }
     }
     __ZN7WebCore15SQLiteStatement14getColumnValueEi(i14, i10, i27);
     i29 = HEAP32[i12 >> 2] | 0;
     if ((i29 | 0) == (HEAP32[i24 >> 2] | 0)) {
      __ZN3WTF6VectorIN7WebCore8SQLValueELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i19, i14);
     } else {
      __ZN7WebCore8SQLValueC1ERKS0_((HEAP32[i23 >> 2] | 0) + (i29 * 24 & -1) | 0, i14);
      HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     }
     i29 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i29 | 0) != 0) {
       i30 = i29 | 0;
       i31 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
       if ((i31 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i29);
        break;
       } else {
        HEAP32[i30 >> 2] = i31;
        break;
       }
      }
     } while (0);
     i27 = i27 + 1 | 0;
    }
    if ((i28 | 0) == (HEAP32[__ZN7WebCore13SQLResultDoneE >> 2] | 0)) {
     i25 = 121;
     break;
    }
    HEAP32[i4 >> 2] = 1001;
    i27 = __ZN7WebCore14SQLiteDatabase12lastErrorMsgEv(i18) | 0;
    __ZN3WTF6String6formatEPKcz(i6, H_BASE + 8 | 0, (i21 = STACKTOP, STACKTOP = STACKTOP + 24 | 0, HEAP32[i21 >> 2] = H_BASE + 104, HEAP32[i21 + 8 >> 2] = i28, HEAP32[i21 + 16 >> 2] = i27, i21) | 0);
    STACKTOP = i21;
    i27 = i6 | 0;
    i11 = HEAP32[i27 >> 2] | 0;
    if ((i11 | 0) != 0) {
     i12 = i11 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
    }
    i12 = i3 + 164 | 0;
    i23 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = i11;
    do {
     if ((i23 | 0) != 0) {
      i11 = i23 | 0;
      i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
      if ((i12 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i23);
       break;
      } else {
       HEAP32[i11 >> 2] = i12;
       break;
      }
     }
    } while (0);
    i23 = HEAP32[i27 >> 2] | 0;
    do {
     if ((i23 | 0) != 0) {
      i12 = i23 | 0;
      i11 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
      if ((i11 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i23);
       break;
      } else {
       HEAP32[i12 >> 2] = i11;
       break;
      }
     }
    } while (0);
    HEAP32[i1 >> 2] = 0;
   } else {
    if ((i9 | 0) == (HEAP32[__ZN7WebCore13SQLResultDoneE >> 2] | 0)) {
     if (!(__ZN7WebCore19DatabaseBackendBase19lastActionWasInsertEv(i17) | 0)) {
      i25 = 121;
      break;
     }
     i23 = __ZN7WebCore14SQLiteDatabase15lastInsertRowIDEv(i18) | 0;
     __ZN7WebCore12SQLResultSet11setInsertIdEx(i26, i23, tempRet0);
     i25 = 121;
     break;
    }
    if ((i9 | 0) == (i2 | 0)) {
     HEAP32[i4 >> 2] = 1004;
     __ZN3WTF6StringC1EPKc(i15, H_BASE + 160 | 0);
     i23 = i15 | 0;
     i27 = HEAP32[i23 >> 2] | 0;
     if ((i27 | 0) != 0) {
      i11 = i27 | 0;
      HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
     }
     i11 = i3 + 164 | 0;
     i12 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = i27;
     do {
      if ((i12 | 0) != 0) {
       i27 = i12 | 0;
       i11 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
       if ((i11 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i12);
        break;
       } else {
        HEAP32[i27 >> 2] = i11;
        break;
       }
      }
     } while (0);
     i12 = HEAP32[i23 >> 2] | 0;
     do {
      if ((i12 | 0) != 0) {
       i11 = i12 | 0;
       i27 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
       if ((i27 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i12);
        break;
       } else {
        HEAP32[i11 >> 2] = i27;
        break;
       }
      }
     } while (0);
     HEAP32[i1 >> 2] = 0;
     break;
    }
    if ((i9 | 0) == (HEAP32[__ZN7WebCore19SQLResultConstraintE >> 2] | 0)) {
     HEAP32[i4 >> 2] = 1006;
     __ZN3WTF6StringC1EPKc(i16, H_BASE + 56 | 0);
     i12 = i16 | 0;
     i23 = HEAP32[i12 >> 2] | 0;
     if ((i23 | 0) != 0) {
      i27 = i23 | 0;
      HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 2;
     }
     i27 = i3 + 164 | 0;
     i11 = HEAP32[i27 >> 2] | 0;
     HEAP32[i27 >> 2] = i23;
     do {
      if ((i11 | 0) != 0) {
       i23 = i11 | 0;
       i27 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
       if ((i27 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i11);
        break;
       } else {
        HEAP32[i23 >> 2] = i27;
        break;
       }
      }
     } while (0);
     i11 = HEAP32[i12 >> 2] | 0;
     do {
      if ((i11 | 0) != 0) {
       i27 = i11 | 0;
       i23 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
       if ((i23 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i11);
        break;
       } else {
        HEAP32[i27 >> 2] = i23;
        break;
       }
      }
     } while (0);
     HEAP32[i1 >> 2] = 0;
     break;
    } else {
     HEAP32[i4 >> 2] = 1001;
     i11 = __ZN7WebCore14SQLiteDatabase12lastErrorMsgEv(i18) | 0;
     __ZN3WTF6String6formatEPKcz(i8, H_BASE + 8 | 0, (i21 = STACKTOP, STACKTOP = STACKTOP + 24 | 0, HEAP32[i21 >> 2] = H_BASE + 24, HEAP32[i21 + 8 >> 2] = i9, HEAP32[i21 + 16 >> 2] = i11, i21) | 0);
     STACKTOP = i21;
     i11 = i8 | 0;
     i12 = HEAP32[i11 >> 2] | 0;
     if ((i12 | 0) != 0) {
      i23 = i12 | 0;
      HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
     }
     i23 = i3 + 164 | 0;
     i27 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = i12;
     do {
      if ((i27 | 0) != 0) {
       i12 = i27 | 0;
       i23 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
       if ((i23 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i27);
        break;
       } else {
        HEAP32[i12 >> 2] = i23;
        break;
       }
      }
     } while (0);
     i27 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i27 | 0) != 0) {
       i23 = i27 | 0;
       i12 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
       if ((i12 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i27);
        break;
       } else {
        HEAP32[i23 >> 2] = i12;
        break;
       }
      }
     } while (0);
     HEAP32[i1 >> 2] = 0;
     break;
    }
   }
  } while (0);
  if ((i25 | 0) == 121) {
   __ZN7WebCore12SQLResultSet15setRowsAffectedEi(i26, __ZN7WebCore14SQLiteDatabase11lastChangesEv(i18) | 0);
   HEAP32[i1 >> 2] = i26;
   __ZN7WebCore15SQLiteStatementD1Ev(i10);
   STACKTOP = i5;
   return;
  }
  if ((i20 | 0) == 0) {
   __ZN7WebCore15SQLiteStatementD1Ev(i10);
   STACKTOP = i5;
   return;
  }
  i26 = i20;
  if (((tempValue = HEAP32[i26 >> 2] | 0, HEAP32[i26 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
   __ZN7WebCore15SQLiteStatementD1Ev(i10);
   STACKTOP = i5;
   return;
  }
  i26 = HEAP32[i20 + 4 >> 2] | 0;
  do {
   if ((i26 | 0) != 0) {
    i1 = i26 | 0;
    i18 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
    if ((i18 | 0) == 0) {
     __ZN7WebCore19SQLResultSetRowListD2Ev(i26);
     __ZN3WTF8fastFreeEPv(i26);
     break;
    } else {
     HEAP32[i1 >> 2] = i18;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i20);
  __ZN7WebCore15SQLiteStatementD1Ev(i10);
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore19SQLResultSetRowListD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 16 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 24 & -1) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 + 16 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 24 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 12 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i6 = i1 + 4 | 0;
 if ((i4 | 0) != 0) {
  i3 = HEAP32[i6 >> 2] | 0;
  i5 = i3 + (i4 << 2) | 0;
  i4 = i3;
  while (1) {
   i3 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i8 = i3 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i8 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i5 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF6VectorIN7WebCore8SQLValueELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 <= i2 >>> 0) {
   if ((i7 + (i4 * 24 & -1) | 0) >>> 0 <= i2 >>> 0) {
    break;
   }
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   i9 = i8 + 1 + (i8 >>> 2) | 0;
   i8 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   __ZN3WTF6VectorIN7WebCore8SQLValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
   i8 = HEAP32[i6 >> 2] | 0;
   i10 = i8 + (((i2 - i7 | 0) / 24 & -1) * 24 & -1) | 0;
   i11 = i8;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = i11 + (i12 * 24 & -1) | 0;
   __ZN7WebCore8SQLValueC1ERKS0_(i13, i10);
   i14 = HEAP32[i3 >> 2] | 0;
   i15 = i14 + 1 | 0;
   HEAP32[i3 >> 2] = i15;
   return;
  }
 } while (0);
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i7 + 1 + (i7 >>> 2) | 0;
 i7 = i4 >>> 0 > 16 >>> 0 ? i4 : 16;
 __ZN3WTF6VectorIN7WebCore8SQLValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i5 >>> 0 ? i7 : i5);
 i10 = i2;
 i11 = HEAP32[i6 >> 2] | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i13 = i11 + (i12 * 24 & -1) | 0;
 __ZN7WebCore8SQLValueC1ERKS0_(i13, i10);
 i14 = HEAP32[i3 >> 2] | 0;
 i15 = i14 + 1 | 0;
 HEAP32[i3 >> 2] = i15;
 return;
}
function __ZN7WebCore16SQLStatementSyncC2ERKN3WTF6StringERKNS1_6VectorINS_8SQLValueELj0ENS1_15CrashOnOverflowEEEi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i1 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i6;
 if ((i2 | 0) == 0) {
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = i4;
  return;
 }
 if (i2 >>> 0 > 178956970 >>> 0) {
  _WTFCrash();
 }
 i6 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 24 & -1) | 0;
 HEAP32[i8 >> 2] = (i6 >>> 0) / 24 & -1;
 i8 = __ZN3WTF10fastMallocEj(i6) | 0;
 i6 = i8;
 HEAP32[i7 >> 2] = i6;
 if ((i8 | 0) == 0) {
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = i4;
  return;
 }
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 i5 = i8 + (i3 * 24 & -1) | 0;
 if ((i3 | 0) == 0) {
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = i4;
  return;
 } else {
  i10 = i8;
  i11 = i6;
 }
 while (1) {
  __ZN7WebCore8SQLValueC1ERKS0_(i11, i10);
  i6 = i10 + 24 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i6;
   i11 = i11 + 24 | 0;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = i4;
 return;
}
function __ZN7WebCore16SQLStatementSyncC1ERKN3WTF6StringERKNS1_6VectorINS_8SQLValueELj0ENS1_15CrashOnOverflowEEEi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i1 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i6;
 if ((i2 | 0) == 0) {
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = i4;
  return;
 }
 if (i2 >>> 0 > 178956970 >>> 0) {
  _WTFCrash();
 }
 i6 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 24 & -1) | 0;
 HEAP32[i8 >> 2] = (i6 >>> 0) / 24 & -1;
 i8 = __ZN3WTF10fastMallocEj(i6) | 0;
 i6 = i8;
 HEAP32[i7 >> 2] = i6;
 if ((i8 | 0) == 0) {
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = i4;
  return;
 }
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 i5 = i8 + (i3 * 24 & -1) | 0;
 if ((i3 | 0) == 0) {
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = i4;
  return;
 } else {
  i10 = i8;
  i11 = i6;
 }
 while (1) {
  __ZN7WebCore8SQLValueC1ERKS0_(i11, i10);
  i6 = i10 + 24 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i6;
   i11 = i11 + 24 | 0;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = i4;
 return;
}
function __ZN7WebCore19SQLResultSetRowList9addColumnERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 4 | 0;
 i4 = i1 + 12 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == (HEAP32[i1 + 8 >> 2] | 0)) {
   i6 = i5 + 1 | 0;
   i7 = i3 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   do {
    if (i8 >>> 0 > i2 >>> 0) {
     i9 = 6;
    } else {
     if ((i8 + (i5 << 2) | 0) >>> 0 <= i2 >>> 0) {
      i9 = 6;
      break;
     }
     __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i6);
     i10 = HEAP32[i7 >> 2] | 0;
     i11 = i10 + (i2 - i8 >> 2 << 2) | 0;
     i12 = i10;
    }
   } while (0);
   if ((i9 | 0) == 6) {
    __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i6);
    i11 = i2;
    i12 = HEAP32[i7 >> 2] | 0;
   }
   i8 = HEAP32[i11 >> 2] | 0;
   HEAP32[i12 + (HEAP32[i4 >> 2] << 2) >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
  } else {
   i10 = HEAP32[i2 >> 2] | 0;
   HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 << 2) >> 2] = i10;
   if ((i10 | 0) == 0) {
    break;
   }
   i8 = i10 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
 } while (0);
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 return;
}
function __ZN3WTF6VectorIN7WebCore8SQLValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 24 & -1) | 0;
 if (i2 >>> 0 > 178956970 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 24 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 24 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   __ZN7WebCore8SQLValueC1ERKS0_(i7, i6);
   i2 = HEAP32[i6 + 16 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i8 = i2 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i2 = i6 + 24 | 0;
   if ((i2 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i2;
    i7 = i7 + 24 | 0;
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
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
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
function b4(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(4);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
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
function b2() {
 abort(2);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_ii = [b1,b1];
  var FUNCTION_TABLE_v = [b2,b2];
  var FUNCTION_TABLE_iii = [b3,b3];
  var FUNCTION_TABLE_viiii = [b4,b4,__ZN7WebCore16SQLStatementSyncC2ERKN3WTF6StringERKNS1_6VectorINS_8SQLValueELj0ENS1_15CrashOnOverflowEEEi,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore13SQLResultDoneE": __ZN7WebCore13SQLResultDoneE, "__ZN7WebCore11SQLResultOkE": __ZN7WebCore11SQLResultOkE, "__ZN7WebCore18SQLResultInterruptE": __ZN7WebCore18SQLResultInterruptE, "__ZN7WebCore13SQLResultFullE": __ZN7WebCore13SQLResultFullE, "__ZN7WebCore12SQLResultRowE": __ZN7WebCore12SQLResultRowE, "__ZN7WebCore19SQLResultConstraintE": __ZN7WebCore19SQLResultConstraintE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore19SQLResultSetRowListD2Ev","__ZN3WTF6VectorIN7WebCore8SQLValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3WTF6VectorIN7WebCore8SQLValueELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_","_memset","_memcpy","__ZN7WebCore19SQLResultSetRowList9addColumnERKN3WTF6StringE","__ZN7WebCore16SQLStatementSync7executeEPNS_12DatabaseSyncERi","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore16SQLStatementSyncC2ERKN3WTF6StringERKNS1_6VectorINS_8SQLValueELj0ENS1_15CrashOnOverflowEEEi"]

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
H_BASE = parentModule["_malloc"](80 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 80;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([103,108,111,98,97,108,32,99,111,100,101,0,0,0,0,0,101,118,97,108,32,99,111,100,101,0,0,0,0,0,0,0,115,111,117,114,99,101,85,82,76,0,0,0,0,0,0,0,99,111,108,117,109,110,0,0,108,105,110,101,0,0,0,0,117,110,100,101,102,105,110,101,100,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
  var __ZTVN10Deprecated11ScriptValueE=env.__ZTVN10Deprecated11ScriptValueE|0;
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var __ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE=env.__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE|0;
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
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore34createScriptCallStackFromExceptionEPN3JSC9ExecStateERNS0_7JSValueEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, d48 = +0, i49 = 0, i50 = 0, d51 = +0, i52 = 0, i53 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 64 | 0;
 i14 = i5 + 72 | 0;
 i15 = i5 + 80 | 0;
 i16 = i5 + 88 | 0;
 i17 = i5 + 104 | 0;
 i18 = i5 + 112 | 0;
 i19 = i5 + 120 | 0;
 i20 = i5 + 128 | 0;
 i21 = i5 + 136 | 0;
 i22 = i5 + 144 | 0;
 i23 = i12 | 0;
 HEAP32[i23 >> 2] = 0;
 i24 = i12 + 4 | 0;
 HEAP32[i24 >> 2] = 0;
 i25 = i12 + 8 | 0;
 HEAP32[i25 >> 2] = 0;
 i26 = i2 + 16 | 0;
 i27 = HEAP32[(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0) + 24816 >> 2] | 0;
 i28 = (i27 | 0) == 0;
 i29 = i27 - 40 + 32 | 0;
 L1 : do {
  if (i28) {
   i30 = i29 + 4 | 0;
   i31 = 20;
  } else {
   HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
   i32 = i13 | 0;
   i33 = i16 | 0;
   i34 = i16 + 4 | 0;
   i35 = i16 + 8 | 0;
   i36 = i16 + 12 | 0;
   i37 = i29 + 4 | 0;
   i38 = 0;
   while (1) {
    if (!(i38 >>> 0 < (HEAP32[i37 >> 2] | 0) >>> 0 & i38 >>> 0 < i4 >>> 0)) {
     i30 = i37;
     i31 = 20;
     break L1;
    }
    i39 = i27 + (i38 * 40 & -1) | 0;
    i40 = HEAP32[i39 >> 2] | 0;
    if ((i40 | 0) == 0) {
     i31 = 7;
    } else {
     if ((HEAP32[i40 + 4 >> 2] | 0) == -6) {
      i31 = 7;
     }
    }
    if ((i31 | 0) == 7) {
     i31 = 0;
     if ((HEAP32[i25 >> 2] | 0) != 0) {
      i41 = i37;
      i31 = 21;
      break L1;
     }
    }
    __ZNK3JSC10StackFrame20friendlyFunctionNameEPNS_9ExecStateE(i13, i39, i2);
    __ZN3JSC10StackFrame20computeLineAndColumnERjS1_(i39, i14, i15);
    __ZN7WebCore15ScriptCallFrameC1ERKN3WTF6StringES4_jj(i16, i13, i27 + (i38 * 40 & -1) + 36 | 0, HEAP32[i14 >> 2] | 0, HEAP32[i15 >> 2] | 0);
    i39 = HEAP32[i25 >> 2] | 0;
    if ((i39 | 0) == (HEAP32[i24 >> 2] | 0)) {
     __ZN3WTF6VectorIN7WebCore15ScriptCallFrameELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i12, i16);
    } else {
     i40 = HEAP32[i23 >> 2] | 0;
     i42 = HEAP32[i33 >> 2] | 0;
     HEAP32[i40 + (i39 << 4) >> 2] = i42;
     if ((i42 | 0) != 0) {
      i43 = i42 | 0;
      HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 2;
     }
     i43 = HEAP32[i34 >> 2] | 0;
     HEAP32[i40 + (i39 << 4) + 4 >> 2] = i43;
     if ((i43 | 0) != 0) {
      i42 = i43 | 0;
      HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 2;
     }
     HEAP32[i40 + (i39 << 4) + 8 >> 2] = HEAP32[i35 >> 2];
     HEAP32[i40 + (i39 << 4) + 12 >> 2] = HEAP32[i36 >> 2];
     HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
    }
    __ZN7WebCore15ScriptCallFrameD1Ev(i16);
    i39 = HEAP32[i32 >> 2] | 0;
    do {
     if ((i39 | 0) != 0) {
      i40 = i39 | 0;
      i42 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
      if ((i42 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i39);
       break;
      } else {
       HEAP32[i40 >> 2] = i42;
       break;
      }
     }
    } while (0);
    i38 = i38 + 1 | 0;
   }
  }
 } while (0);
 if ((i31 | 0) == 20) {
  if ((HEAP32[i25 >> 2] | 0) == 0) {
   i44 = i30;
  } else {
   i41 = i30;
   i31 = 21;
  }
 }
 do {
  if ((i31 | 0) == 21) {
   i30 = HEAP32[i23 >> 2] | 0;
   i16 = i3 + 4 | 0;
   if ((HEAP32[i16 >> 2] | 0) == -5) {
    i45 = __ZNK3JSC6JSCell8toObjectEPNS_9ExecStateEPNS_14JSGlobalObjectE(HEAP32[i3 >> 2] | 0, i2, HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) | 0;
   } else {
    i45 = __ZNK3JSC7JSValue16toObjectSlowCaseEPNS_9ExecStateEPNS_14JSGlobalObjectE(i3, i2, HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) | 0;
   }
   if ((HEAP32[i16 >> 2] | 0) != -5) {
    i44 = i41;
    break;
   }
   if ((HEAPU8[(HEAP32[HEAP32[i3 >> 2] >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
    i44 = i41;
    break;
   }
   i16 = HEAP32[i30 + 4 >> 2] | 0;
   if ((i16 | 0) != 0) {
    if ((HEAP32[i16 + 4 >> 2] | 0) != 0) {
     i44 = i41;
     break;
    }
   }
   i16 = HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0;
   __ZN3JSC10Identifier3addEPNS_9ExecStateEPKc(i6, i2, H_BASE + 64 | 0);
   i15 = HEAP32[i6 >> 2] | 0;
   i14 = i45 | 0;
   i13 = HEAP32[i14 >> 2] | 0;
   HEAP32[i7 >> 2] = i15;
   i4 = __ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameE(i13, i16, i7) | 0;
   if ((i4 | 0) == -1) {
    HEAP32[i17 + 4 >> 2] = -6;
    HEAP32[i17 >> 2] = 0;
   } else {
    if ((i4 | 0) < 100) {
     i46 = i45 + (i4 + 1 << 3) | 0;
    } else {
     i46 = (HEAP32[i45 + 4 >> 2] | 0) - 8 + (99 - i4 << 3) | 0;
    }
    i4 = i46 | 0;
    i16 = HEAP32[i4 + 4 >> 2] | 0;
    i13 = i17 | 0;
    HEAP32[i13 >> 2] = HEAP32[i4 >> 2];
    HEAP32[i13 + 4 >> 2] = i16;
   }
   do {
    if ((i15 | 0) != 0) {
     i16 = i15 | 0;
     i13 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i16 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i15 = HEAP32[i17 + 4 >> 2] | 0;
   do {
    if ((i15 | 0) == -6) {
     i47 = 0;
    } else {
     i13 = (i15 | 0) == -1;
     i16 = i15 >>> 0 < 4294967289 >>> 0;
     if (!(i13 | i16)) {
      i47 = 0;
      break;
     }
     do {
      if (i13) {
       d48 = +(HEAP32[i17 >> 2] | 0);
      } else {
       if (i16) {
        d48 = +HEAPF64[i17 >> 3];
        break;
       } else {
        d48 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i17, i2);
        break;
       }
      }
     } while (0);
     i47 = ~~d48;
    }
   } while (0);
   i15 = HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0;
   __ZN3JSC10Identifier3addEPNS_9ExecStateEPKc(i8, i2, H_BASE + 56 | 0);
   i16 = HEAP32[i8 >> 2] | 0;
   i13 = HEAP32[i14 >> 2] | 0;
   HEAP32[i9 >> 2] = i16;
   i4 = __ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameE(i13, i15, i9) | 0;
   if ((i4 | 0) == -1) {
    HEAP32[i18 + 4 >> 2] = -6;
    HEAP32[i18 >> 2] = 0;
   } else {
    if ((i4 | 0) < 100) {
     i49 = i45 + (i4 + 1 << 3) | 0;
    } else {
     i49 = (HEAP32[i45 + 4 >> 2] | 0) - 8 + (99 - i4 << 3) | 0;
    }
    i4 = i49 | 0;
    i15 = HEAP32[i4 + 4 >> 2] | 0;
    i13 = i18 | 0;
    HEAP32[i13 >> 2] = HEAP32[i4 >> 2];
    HEAP32[i13 + 4 >> 2] = i15;
   }
   do {
    if ((i16 | 0) != 0) {
     i15 = i16 | 0;
     i13 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i15 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i16 = HEAP32[i18 + 4 >> 2] | 0;
   do {
    if ((i16 | 0) == -6) {
     i50 = 0;
    } else {
     i13 = (i16 | 0) == -1;
     i15 = i16 >>> 0 < 4294967289 >>> 0;
     if (!(i13 | i15)) {
      i50 = 0;
      break;
     }
     do {
      if (i13) {
       d51 = +(HEAP32[i18 >> 2] | 0);
      } else {
       if (i15) {
        d51 = +HEAPF64[i18 >> 3];
        break;
       } else {
        d51 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i18, i2);
        break;
       }
      }
     } while (0);
     i50 = ~~d51;
    }
   } while (0);
   i16 = HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0;
   __ZN3JSC10Identifier3addEPNS_9ExecStateEPKc(i10, i2, H_BASE + 40 | 0);
   i15 = HEAP32[i10 >> 2] | 0;
   i13 = HEAP32[i14 >> 2] | 0;
   HEAP32[i11 >> 2] = i15;
   i4 = __ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameE(i13, i16, i11) | 0;
   if ((i4 | 0) == -1) {
    HEAP32[i19 + 4 >> 2] = -6;
    HEAP32[i19 >> 2] = 0;
   } else {
    if ((i4 | 0) < 100) {
     i52 = i45 + (i4 + 1 << 3) | 0;
    } else {
     i52 = (HEAP32[i45 + 4 >> 2] | 0) - 8 + (99 - i4 << 3) | 0;
    }
    i4 = i52 | 0;
    i16 = HEAP32[i4 + 4 >> 2] | 0;
    i13 = i19 | 0;
    HEAP32[i13 >> 2] = HEAP32[i4 >> 2];
    HEAP32[i13 + 4 >> 2] = i16;
   }
   do {
    if ((i15 | 0) != 0) {
     i16 = i15 | 0;
     i13 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i16 >> 2] = i13;
      break;
     }
    }
   } while (0);
   do {
    if ((HEAP32[i19 + 4 >> 2] | 0) == -5) {
     i15 = HEAP32[i19 >> 2] | 0;
     if ((HEAP8[(HEAP32[i15 >> 2] | 0) + 52 | 0] | 0) != 5) {
      i31 = 80;
      break;
     }
     i14 = i15 + 12 | 0;
     i13 = HEAP32[i14 >> 2] | 0;
     if ((i13 | 0) == 0) {
      __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i15, i2);
      i15 = HEAP32[i14 >> 2] | 0;
      HEAP32[i20 >> 2] = i15;
      if ((i15 | 0) == 0) {
       break;
      } else {
       i53 = i15;
      }
     } else {
      HEAP32[i20 >> 2] = i13;
      i53 = i13;
     }
     i13 = i53 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
    } else {
     i31 = 80;
    }
   } while (0);
   if ((i31 | 0) == 80) {
    HEAP32[i21 >> 2] = H_BASE + 72;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
   }
   if ((HEAP32[i25 >> 2] | 0) == 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i13 = HEAP32[i23 >> 2] | 0;
   __ZN7WebCore15ScriptCallFrameC1ERKN3WTF6StringES4_jj(i22, i30 | 0, i20, i47, i50);
   i15 = HEAP32[i22 >> 2] | 0;
   if ((i15 | 0) != 0) {
    i14 = i15 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   }
   i14 = i13 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i15;
   do {
    if ((i16 | 0) != 0) {
     i15 = i16 | 0;
     i14 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i15 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i16 = HEAP32[i22 + 4 >> 2] | 0;
   if ((i16 | 0) != 0) {
    i30 = i16 | 0;
    HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 2;
   }
   i30 = i13 + 4 | 0;
   i14 = HEAP32[i30 >> 2] | 0;
   HEAP32[i30 >> 2] = i16;
   do {
    if ((i14 | 0) != 0) {
     i16 = i14 | 0;
     i30 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i30 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i16 >> 2] = i30;
      break;
     }
    }
   } while (0);
   HEAP32[i13 + 8 >> 2] = HEAP32[i22 + 8 >> 2];
   HEAP32[i13 + 12 >> 2] = HEAP32[i22 + 12 >> 2];
   __ZN7WebCore15ScriptCallFrameD1Ev(i22);
   i14 = HEAP32[i20 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i44 = i41;
    break;
   }
   i30 = i14 | 0;
   i16 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    i44 = i41;
    break;
   } else {
    HEAP32[i30 >> 2] = i16;
    i44 = i41;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15ScriptCallStack6createERN3WTF6VectorINS_15ScriptCallFrameELj0ENS1_15CrashOnOverflowEEE(i1, i12);
 do {
  if (!i28) {
   i12 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
   HEAP32[i29 >> 2] = i12;
   if ((i12 | 0) != 0) {
    break;
   }
   i12 = HEAP32[i44 >> 2] | 0;
   i1 = i27 + (i12 * 40 & -1) | 0;
   if ((i12 | 0) != 0) {
    i12 = i27;
    while (1) {
     __ZN3JSC10StackFrameD2Ev(i12);
     i12 = i12 + 40 | 0;
     if ((i12 | 0) == (i1 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i29);
  }
 } while (0);
 i29 = HEAP32[i25 >> 2] | 0;
 if ((i29 | 0) != 0) {
  i27 = HEAP32[i23 >> 2] | 0;
  i44 = i27 + (i29 << 4) | 0;
  i29 = i27;
  while (1) {
   __ZN7WebCore15ScriptCallFrameD1Ev(i29);
   i29 = i29 + 16 | 0;
   if ((i29 | 0) == (i44 | 0)) {
    break;
   }
  }
  HEAP32[i25 >> 2] = 0;
 }
 i25 = HEAP32[i23 >> 2] | 0;
 if ((i25 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i23 >> 2] = 0;
 HEAP32[i24 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i25);
 STACKTOP = i5;
 return;
}
function __ZNK3JSC10StackFrame20friendlyFunctionNameEPNS_9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i5 >> 2] = 0;
 i11 = HEAP32[i2 >> 2] | 0;
 i12 = (i11 | 0) == 0;
 do {
  if (i12) {
   i13 = 0;
  } else {
   if ((HEAP32[i11 + 4 >> 2] | 0) == -6) {
    i13 = 0;
    break;
   }
   i13 = HEAP32[i11 >> 2] | 0;
  }
 } while (0);
 i14 = HEAP32[i2 + 4 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   __ZN3WTF6StringC1EPKc(i10, H_BASE + 8 | 0);
   i2 = i10 | 0;
   i15 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i5 >> 2] = i15;
   i16 = i15;
   i17 = 21;
  } else if ((i14 | 0) == 1) {
   __ZN3WTF6StringC1EPKc(i7, H_BASE + 24 | 0);
   i15 = i7 | 0;
   i2 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   HEAP32[i5 >> 2] = i2;
   i16 = i2;
   i17 = 21;
  } else if ((i14 | 0) == 3) {
   if (i12) {
    i17 = 22;
    break;
   }
   if ((HEAP32[i11 + 4 >> 2] | 0) == -6) {
    i17 = 22;
    break;
   }
   __ZN3JSC24getCalculatedDisplayNameEPNS_9ExecStateEPNS_8JSObjectE(i8, i3, i13);
   i2 = i8 | 0;
   i15 = HEAP32[i2 >> 2] | 0;
   if ((i15 | 0) != 0) {
    i18 = i15 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
   }
   HEAP32[i5 >> 2] = i15;
   i18 = HEAP32[i2 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i16 = i15;
    i17 = 21;
    break;
   }
   i2 = i18 | 0;
   i19 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    i16 = i15;
    i17 = 21;
    break;
   } else {
    HEAP32[i2 >> 2] = i19;
    i16 = i15;
    i17 = 21;
    break;
   }
  } else if ((i14 | 0) == 2) {
   __ZN3JSC24getCalculatedDisplayNameEPNS_9ExecStateEPNS_8JSObjectE(i9, i3, i13);
   i15 = i9 | 0;
   i19 = HEAP32[i15 >> 2] | 0;
   if ((i19 | 0) != 0) {
    i2 = i19 | 0;
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
   }
   HEAP32[i5 >> 2] = i19;
   i2 = HEAP32[i15 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i16 = i19;
    i17 = 21;
    break;
   }
   i15 = i2 | 0;
   i18 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    i16 = i19;
    i17 = 21;
    break;
   } else {
    HEAP32[i15 >> 2] = i18;
    i16 = i19;
    i17 = 21;
    break;
   }
  } else {
   i17 = 22;
  }
 } while (0);
 if ((i17 | 0) == 21) {
  if ((i16 | 0) == 0) {
   i17 = 22;
  } else {
   i20 = i6;
   i21 = i16;
   i22 = 0;
  }
 }
 if ((i17 | 0) == 22) {
  i20 = __ZN3WTF11emptyStringEv() | 0;
  i21 = 0;
  i22 = 1;
 }
 i17 = HEAP32[i20 >> 2] | 0;
 HEAP32[i1 >> 2] = i17;
 if ((i17 | 0) != 0) {
  i1 = i17 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 }
 if (i22) {
  STACKTOP = i4;
  return;
 }
 i22 = i21 | 0;
 i1 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i21);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i22 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore21createScriptCallStackEjb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 40 | 0;
 i7 = i4 + 56 | 0;
 i8 = i4 + 64 | 0;
 i9 = i4 + 80 | 0;
 i10 = i4 + 88 | 0;
 i11 = i6 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i6 + 4 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i6 + 8 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] | 0;
 L1 : do {
  if ((i14 | 0) != 0) {
   i15 = HEAP32[(HEAP32[(HEAP32[i14 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 20616 >> 2] | 0;
   HEAP32[i7 >> 2] = i6;
   HEAP32[i7 + 4 >> 2] = i2;
   __ZN3JSC12StackVisitorC1EPNS_9ExecStateE(i5, i15);
   i15 = i5 + 32 | 0;
   if ((HEAP32[i15 >> 2] | 0) == 0) {
    break;
   }
   while (1) {
    if ((__ZN7WebCore28CreateScriptCallStackFunctorclERN3JSC12StackVisitorE(i7, i5) | 0) != 0) {
     break L1;
    }
    __ZN3JSC12StackVisitor13gotoNextFrameEv(i5);
    if ((HEAP32[i15 >> 2] | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 do {
  if (!((HEAP32[i13 >> 2] | 0) != 0 | i3)) {
   __ZN3WTF6StringC1EPKc(i9, H_BASE + 72 | 0);
   __ZN3WTF6StringC1EPKc(i10, H_BASE + 72 | 0);
   __ZN7WebCore15ScriptCallFrameC1ERKN3WTF6StringES4_jj(i8, i9, i10, 0, 0);
   i5 = HEAP32[i13 >> 2] | 0;
   if ((i5 | 0) == (HEAP32[i12 >> 2] | 0)) {
    __ZN3WTF6VectorIN7WebCore15ScriptCallFrameELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i6, i8);
   } else {
    i7 = HEAP32[i11 >> 2] | 0;
    i2 = HEAP32[i8 >> 2] | 0;
    HEAP32[i7 + (i5 << 4) >> 2] = i2;
    if ((i2 | 0) != 0) {
     i14 = i2 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
    }
    i14 = HEAP32[i8 + 4 >> 2] | 0;
    HEAP32[i7 + (i5 << 4) + 4 >> 2] = i14;
    if ((i14 | 0) != 0) {
     i2 = i14 | 0;
     HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
    }
    HEAP32[i7 + (i5 << 4) + 8 >> 2] = HEAP32[i8 + 8 >> 2];
    HEAP32[i7 + (i5 << 4) + 12 >> 2] = HEAP32[i8 + 12 >> 2];
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   }
   __ZN7WebCore15ScriptCallFrameD1Ev(i8);
   i5 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i5 = HEAP32[i9 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i2 = i5 | 0;
   i7 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i2 >> 2] = i7;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15ScriptCallStack6createERN3WTF6VectorINS_15ScriptCallFrameELj0ENS1_15CrashOnOverflowEEE(i1, i6);
 i6 = HEAP32[i13 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i1 = HEAP32[i11 >> 2] | 0;
  i9 = i1 + (i6 << 4) | 0;
  i6 = i1;
  while (1) {
   __ZN7WebCore15ScriptCallFrameD1Ev(i6);
   i6 = i6 + 16 | 0;
   if ((i6 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i13 >> 2] = 0;
 }
 i13 = HEAP32[i11 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i11 >> 2] = 0;
 HEAP32[i12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore21createScriptArgumentsEPN3JSC9ExecStateEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i6 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i6 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = (HEAP32[i2 + 32 >> 2] | 0) - 1 | 0;
 L1 : do {
  if (i11 >>> 0 > i3 >>> 0) {
   i12 = i2 + 16 | 0;
   i13 = i7 | 0;
   i14 = i7 + 4 | 0;
   i15 = i5 | 0;
   i16 = i7 + 4 | 0;
   i17 = i3;
   while (1) {
    i18 = HEAP32[(HEAP32[i12 >> 2] & -65536) + 1076 >> 2] | 0;
    i19 = i2 + (i17 + 6 << 3) | 0;
    i20 = HEAP32[i19 >> 2] | 0;
    i21 = HEAP32[i19 + 4 >> 2] | 0;
    HEAP32[i13 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
    if ((HEAP32[i18 + 20444 >> 2] | 0) != 0) {
     break;
    }
    i19 = i18 + 20440 | 0;
    i22 = HEAP32[i19 >> 2] | 0;
    if ((i22 | 0) == 0) {
     __ZN3JSC9HandleSet4growEv(i18 + 20360 | 0);
     i23 = HEAP32[i19 >> 2] | 0;
    } else {
     i23 = i22;
    }
    i22 = i23 + 12 | 0;
    HEAP32[i19 >> 2] = HEAP32[i22 >> 2];
    HEAP32[i23 + 4 >> 2] = -6;
    HEAP32[i23 >> 2] = 0;
    i19 = i23 + 8 | 0;
    HEAP32[i19 >> 2] = 0;
    HEAP32[i22 >> 2] = 0;
    i24 = i18 + 20420 | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    HEAP32[i19 >> 2] = i18 + 20408;
    HEAP32[i22 >> 2] = i25;
    HEAP32[i24 >> 2] = i23;
    HEAP32[i25 + 8 >> 2] = i23;
    i25 = i23 | 0;
    HEAP32[i14 >> 2] = i25;
    HEAP32[i15 >> 2] = i20;
    HEAP32[i15 + 4 >> 2] = i21;
    __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i23 & -4096) + 12 >> 2] | 0, i25, i5);
    i25 = HEAP32[i15 + 4 >> 2] | 0;
    i21 = i23 | 0;
    HEAP32[i21 >> 2] = HEAP32[i15 >> 2];
    HEAP32[i21 + 4 >> 2] = i25;
    i25 = HEAP32[i10 >> 2] | 0;
    if ((i25 | 0) == (HEAP32[i9 >> 2] | 0)) {
     __ZN3WTF6VectorIN10Deprecated11ScriptValueELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i6, i7);
    } else {
     i21 = HEAP32[i8 >> 2] | 0;
     HEAP32[i21 + (i25 << 3) >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
     __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i21 + (i25 << 3) + 4 | 0, i16);
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
    }
    __ZN10Deprecated11ScriptValueD1Ev(i7);
    i17 = i17 + 1 | 0;
    if (i17 >>> 0 >= i11 >>> 0) {
     break L1;
    }
   }
   _WTFCrash();
  }
 } while (0);
 __ZN7WebCore15ScriptArguments6createEPN3JSC9ExecStateERN3WTF6VectorIN10Deprecated11ScriptValueELj0ENS4_15CrashOnOverflowEEE(i1, i2, i6);
 i6 = HEAP32[i10 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i2 = HEAP32[i8 >> 2] | 0;
  i1 = i2 + (i6 << 3) | 0;
  i6 = i2;
  while (1) {
   FUNCTION_TABLE_vi[HEAP32[HEAP32[i6 >> 2] >> 2] & 1](i6);
   i6 = i6 + 8 | 0;
   if ((i6 | 0) == (i1 | 0)) {
    break;
   }
  }
  HEAP32[i10 >> 2] = 0;
 }
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = 0;
 HEAP32[i9 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i10);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore38CreateScriptCallStackForConsoleFunctorclERN3JSC12StackVisitorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i1 | 0;
 if ((HEAP8[i9] & 1) != 0) {
  HEAP8[i9] = 0;
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i9 = i1 + 4 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  i10 = 1;
  STACKTOP = i3;
  return i10 | 0;
 }
 i11 = i2 | 0;
 i12 = i1 + 8 | 0;
 do {
  if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
   if ((HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0) == 0) {
    break;
   } else {
    i10 = 1;
   }
   STACKTOP = i3;
   return i10 | 0;
  }
 } while (0);
 __ZN3JSC12StackVisitor5Frame20computeLineAndColumnERjS2_(i11, i4, i5);
 i2 = HEAP32[i12 >> 2] | 0;
 __ZN3JSC12StackVisitor5Frame12functionNameEv(i7, i11);
 __ZN3JSC12StackVisitor5Frame9sourceURLEv(i8, i11);
 __ZN7WebCore15ScriptCallFrameC1ERKN3WTF6StringES4_jj(i6, i7, i8, HEAP32[i4 >> 2] | 0, HEAP32[i5 >> 2] | 0);
 i5 = i2 + 8 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == (HEAP32[i2 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore15ScriptCallFrameELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i2, i6);
 } else {
  i11 = HEAP32[i2 >> 2] | 0;
  i2 = HEAP32[i6 >> 2] | 0;
  HEAP32[i11 + (i4 << 4) >> 2] = i2;
  if ((i2 | 0) != 0) {
   i12 = i2 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
  }
  i12 = HEAP32[i6 + 4 >> 2] | 0;
  HEAP32[i11 + (i4 << 4) + 4 >> 2] = i12;
  if ((i12 | 0) != 0) {
   i2 = i12 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
  }
  HEAP32[i11 + (i4 << 4) + 8 >> 2] = HEAP32[i6 + 8 >> 2];
  HEAP32[i11 + (i4 << 4) + 12 >> 2] = HEAP32[i6 + 12 >> 2];
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 __ZN7WebCore15ScriptCallFrameD1Ev(i6);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i8 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) - 1;
 i10 = 0;
 STACKTOP = i3;
 return i10 | 0;
}
function __ZN3JSC10StackFrameD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
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
   i4 = i2 + 4 | 0;
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i3 >> 2] = i5;
    break;
   }
   i5 = i4 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
  }
 } while (0);
 i2 = i1 + 12 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = HEAP32[(i5 & -4096) + 12 >> 2] | 0;
  i3 = i5;
  i6 = i4 + 84 | 0;
  i7 = i3 + 12 | 0;
  if ((i3 | 0) == (HEAP32[i6 >> 2] | 0)) {
   HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
  }
  i6 = i5 + 8 | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i5 + 12 >> 2] = i8;
  HEAP32[i8 + 8 >> 2] = i5;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i7 >> 2] = 0;
  i6 = i4 + 80 | 0;
  HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i6 >> 2] = i3;
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i6 = HEAP32[(i3 & -4096) + 12 >> 2] | 0;
  i7 = i3;
  i4 = i6 + 84 | 0;
  i5 = i7 + 12 | 0;
  if ((i7 | 0) == (HEAP32[i4 >> 2] | 0)) {
   HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
  }
  i4 = i3 + 8 | 0;
  i3 = HEAP32[i4 >> 2] | 0;
  i8 = HEAP32[i5 >> 2] | 0;
  HEAP32[i3 + 12 >> 2] = i8;
  HEAP32[i8 + 8 >> 2] = i3;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i5 >> 2] = 0;
  i4 = i6 + 80 | 0;
  HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i4 >> 2] = i7;
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i7 = HEAP32[(i1 & -4096) + 12 >> 2] | 0;
 i4 = i1;
 i5 = i7 + 84 | 0;
 i6 = i4 + 12 | 0;
 if ((i4 | 0) == (HEAP32[i5 >> 2] | 0)) {
  HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 }
 i5 = i1 + 8 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i3;
 HEAP32[i3 + 8 >> 2] = i1;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 i5 = i7 + 80 | 0;
 HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i5 >> 2] = i4;
 HEAP32[i2 >> 2] = 0;
 return;
}
function __ZN7WebCore28CreateScriptCallStackFunctorclERN3JSC12StackVisitorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i1 + 4 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  i10 = 1;
  STACKTOP = i3;
  return i10 | 0;
 }
 i11 = i2 | 0;
 __ZN3JSC12StackVisitor5Frame20computeLineAndColumnERjS2_(i11, i4, i5);
 i2 = HEAP32[i1 >> 2] | 0;
 __ZN3JSC12StackVisitor5Frame12functionNameEv(i7, i11);
 __ZN3JSC12StackVisitor5Frame9sourceURLEv(i8, i11);
 __ZN7WebCore15ScriptCallFrameC1ERKN3WTF6StringES4_jj(i6, i7, i8, HEAP32[i4 >> 2] | 0, HEAP32[i5 >> 2] | 0);
 i5 = i2 + 8 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == (HEAP32[i2 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore15ScriptCallFrameELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i2, i6);
 } else {
  i11 = HEAP32[i2 >> 2] | 0;
  i2 = HEAP32[i6 >> 2] | 0;
  HEAP32[i11 + (i4 << 4) >> 2] = i2;
  if ((i2 | 0) != 0) {
   i1 = i2 | 0;
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
  }
  i1 = HEAP32[i6 + 4 >> 2] | 0;
  HEAP32[i11 + (i4 << 4) + 4 >> 2] = i1;
  if ((i1 | 0) != 0) {
   i2 = i1 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
  }
  HEAP32[i11 + (i4 << 4) + 8 >> 2] = HEAP32[i6 + 8 >> 2];
  HEAP32[i11 + (i4 << 4) + 12 >> 2] = HEAP32[i6 + 12 >> 2];
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 __ZN7WebCore15ScriptCallFrameD1Ev(i6);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i8 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) - 1;
 i10 = 0;
 STACKTOP = i3;
 return i10 | 0;
}
function __ZN7WebCore21createScriptCallStackEPN3JSC9ExecStateEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i5 = i4 | 0;
 i6 = i4 + 40 | 0;
 i7 = i4 + 80 | 0;
 i8 = i4 + 96 | 0;
 i9 = i4 + 112 | 0;
 i10 = i7 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i7 + 4 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i7 + 8 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = HEAP32[(HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 20616 >> 2] | 0;
 HEAP8[i8 | 0] = 1;
 HEAP32[i8 + 4 >> 2] = i3;
 HEAP32[i8 + 8 >> 2] = i7;
 __ZN3JSC12StackVisitorC1EPNS_9ExecStateE(i5, i13);
 i2 = i5 + 32 | 0;
 L1 : do {
  if ((HEAP32[i2 >> 2] | 0) != 0) {
   while (1) {
    if ((__ZN7WebCore38CreateScriptCallStackForConsoleFunctorclERN3JSC12StackVisitorE(i8, i5) | 0) != 0) {
     break L1;
    }
    __ZN3JSC12StackVisitor13gotoNextFrameEv(i5);
    if ((HEAP32[i2 >> 2] | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 L6 : do {
  if ((HEAP32[i12 >> 2] | 0) == 0) {
   HEAP8[i9 | 0] = 0;
   HEAP32[i9 + 4 >> 2] = i3;
   HEAP32[i9 + 8 >> 2] = i7;
   __ZN3JSC12StackVisitorC1EPNS_9ExecStateE(i6, i13);
   i2 = i6 + 32 | 0;
   if ((HEAP32[i2 >> 2] | 0) == 0) {
    break;
   }
   while (1) {
    if ((__ZN7WebCore38CreateScriptCallStackForConsoleFunctorclERN3JSC12StackVisitorE(i9, i6) | 0) != 0) {
     break L6;
    }
    __ZN3JSC12StackVisitor13gotoNextFrameEv(i6);
    if ((HEAP32[i2 >> 2] | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 __ZN7WebCore15ScriptCallStack6createERN3WTF6VectorINS_15ScriptCallFrameELj0ENS1_15CrashOnOverflowEEE(i1, i7);
 i7 = HEAP32[i12 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i1 = HEAP32[i10 >> 2] | 0;
  i6 = i1 + (i7 << 4) | 0;
  i7 = i1;
  while (1) {
   __ZN7WebCore15ScriptCallFrameD1Ev(i7);
   i7 = i7 + 16 | 0;
   if ((i7 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i12 >> 2] = 0;
 }
 i12 = HEAP32[i10 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i10 >> 2] = 0;
 HEAP32[i11 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i12);
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorIN7WebCore15ScriptCallFrameELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 << 4) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore15ScriptCallFrameELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (i2 - i7 >> 4 << 4) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore15ScriptCallFrameELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (i6 << 4) >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i12 + (i6 << 4) + 4 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i13 = i12 + (i6 << 4) + 8 | 0;
  i14 = i11 + 8 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  HEAP32[i13 >> 2] = i15;
  i16 = i12 + (i6 << 4) + 12 | 0;
  i17 = i11 + 12 | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  HEAP32[i16 >> 2] = i18;
  i19 = HEAP32[i3 >> 2] | 0;
  i20 = i19 + 1 | 0;
  HEAP32[i3 >> 2] = i20;
  return;
 }
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 i13 = i12 + (i6 << 4) + 8 | 0;
 i14 = i11 + 8 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 HEAP32[i13 >> 2] = i15;
 i16 = i12 + (i6 << 4) + 12 | 0;
 i17 = i11 + 12 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 HEAP32[i16 >> 2] = i18;
 i19 = HEAP32[i3 >> 2] | 0;
 i20 = i19 + 1 | 0;
 HEAP32[i3 >> 2] = i20;
 return;
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
function __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[(i2 & -4096) + 12 >> 2] | 0;
 if ((HEAP32[i6 + 84 >> 2] | 0) != 0) {
  _WTFCrash();
 }
 i2 = i6 + 80 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i6);
  i8 = HEAP32[i2 >> 2] | 0;
 } else {
  i8 = i7;
 }
 i7 = i8 + 12 | 0;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i8 + 4 >> 2] = -6;
 HEAP32[i8 >> 2] = 0;
 i2 = i8 + 8 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 i9 = i6 + 60 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i2 >> 2] = i6 + 48;
 HEAP32[i7 >> 2] = i10;
 HEAP32[i9 >> 2] = i8;
 HEAP32[i10 + 8 >> 2] = i8;
 i10 = i8 | 0;
 HEAP32[i5 >> 2] = i10;
 i9 = HEAP32[i1 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i11 = 0;
  i12 = 0;
  i13 = -6;
  i14 = 0;
 } else {
  i1 = i9 | 0;
  i9 = HEAP32[i1 >> 2] | 0;
  i7 = HEAP32[i1 + 4 >> 2] | 0;
  i11 = i7 & 0;
  i12 = i9 & -1;
  i13 = i7 & -1;
  i14 = i9 & 0;
 }
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = i12 | i14;
 HEAP32[i9 + 4 >> 2] = i11 | i13;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i8 & -4096) + 12 >> 2] | 0, i10, i4);
 i4 = HEAP32[i9 + 4 >> 2] | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i10 + 4 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIN7WebCore15ScriptCallFrameELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 << 4) | 0;
 if (i2 >>> 0 > 268435455 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 4) | 0;
 HEAP32[i3 >> 2] = i7 >>> 4;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = HEAP32[i6 >> 2] | 0;
   HEAP32[i7 >> 2] = i2;
   if ((i2 | 0) != 0) {
    i8 = i2 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   i8 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i7 + 4 >> 2] = i8;
   if ((i8 | 0) != 0) {
    i2 = i8 | 0;
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
   }
   HEAP32[i7 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
   HEAP32[i7 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
   __ZN7WebCore15ScriptCallFrameD1Ev(i6);
   i2 = i6 + 16 | 0;
   if ((i2 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i2;
    i7 = i7 + 16 | 0;
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
function __ZN3WTF6VectorIN10Deprecated11ScriptValueELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i1, i2) {
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
   if ((i7 + (i4 << 3) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN10Deprecated11ScriptValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (i2 - i7 >> 3 << 3) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN10Deprecated11ScriptValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i12 + (i6 << 3) >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i12 + (i6 << 3) + 4 | 0, i11 + 4 | 0);
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN3WTF6VectorIN10Deprecated11ScriptValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 << 3) | 0;
 if (i2 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
 HEAP32[i3 >> 2] = i7 >>> 3;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   HEAP32[i7 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
   __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i7 + 4 | 0, i6 + 4 | 0);
   FUNCTION_TABLE_vi[HEAP32[HEAP32[i6 >> 2] >> 2] & 1](i6);
   i2 = i6 + 8 | 0;
   if ((i2 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i2;
    i7 = i7 + 8 | 0;
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
function __ZN7WebCore31createScriptCallStackForConsoleEPN3JSC9ExecStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
  i3 = 1;
  __ZN7WebCore21createScriptCallStackEPN3JSC9ExecStateEj(i1, i2, i3);
  return;
 }
 i4 = __ZN7WebCore24InspectorInstrumentation19consoleAgentEnabledEPNS_22ScriptExecutionContextE(__ZNK7WebCore17JSDOMGlobalObject22scriptExecutionContextEv(HEAP32[(HEAP32[HEAP32[i2 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0) | 0) | 0;
 i3 = i4 ? 200 : 1;
 __ZN7WebCore21createScriptCallStackEPN3JSC9ExecStateEj(i1, i2, i3);
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
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b1() {
 abort(1);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iii = [b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN10Deprecated11ScriptValueE": __ZTVN10Deprecated11ScriptValueE, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE, "__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE": __ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore38CreateScriptCallStackForConsoleFunctorclERN3JSC12StackVisitorE","_strlen","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF6VectorIN7WebCore15ScriptCallFrameELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3JSC6StrongINS_7UnknownEEC2ERKS2_","__ZN7WebCore28CreateScriptCallStackFunctorclERN3JSC12StackVisitorE","_memset","__ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameE","__ZN3WTF6VectorIN10Deprecated11ScriptValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZNK3JSC10StackFrame20friendlyFunctionNameEPNS_9ExecStateE","__ZN3JSC10StackFrameD2Ev","_memcpy","__ZN7WebCore21createScriptCallStackEjb","__ZN7WebCore31createScriptCallStackForConsoleEPN3JSC9ExecStateE","__ZN3WTF6VectorIN7WebCore15ScriptCallFrameELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_","__ZN7WebCore21createScriptArgumentsEPN3JSC9ExecStateEj","__ZN7WebCore34createScriptCallStackFromExceptionEPN3JSC9ExecStateERNS0_7JSValueEj","__ZN3WTF6VectorIN10Deprecated11ScriptValueELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_","__ZN7WebCore21createScriptCallStackEPN3JSC9ExecStateEj"]

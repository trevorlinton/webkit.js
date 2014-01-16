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
H_BASE = parentModule["_malloc"](88 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 88;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore7ConsoleC1EPNS_5FrameE;
var __ZN7WebCore7ConsoleD1Ev;
/* memory initializer */ allocate([83,116,97,99,107,32,84,114,97,99,101,0,0,0,0,0,9,37,115,10,0,0,0,0,32,37,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
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
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
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
function invoke_viiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  try {
    Module["dynCall_viiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8);
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
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore7ConsoleE=(H_BASE+40)|0;
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
  var invoke_vii=env.invoke_vii;
  var invoke_vi=env.invoke_vi;
  var invoke_v=env.invoke_v;
  var invoke_ii=env.invoke_ii;
  var invoke_viiiiiiii=env.invoke_viiiiiiii;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _fputc=env._fputc;
  var _malloc=env._malloc;
  var _pwrite=env._pwrite;
  var _putchar=env._putchar;
  var _puts=env._puts;
  var _fputs=env._fputs;
  var ___setErrNo=env.___setErrNo;
  var _fwrite=env._fwrite;
  var __reallyNegative=env.__reallyNegative;
  var __formatString=env.__formatString;
  var _send=env._send;
  var _write=env._write;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fprintf=env._fprintf;
  var _free=env._free;
  var _printf=env._printf;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCoreL18internalAddMessageEPNS_4PageENS_11MessageTypeENS_12MessageLevelEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEEbb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 i14 = i8 + 40 | 0;
 i15 = i8 + 48 | 0;
 i16 = i5 | 0;
 i5 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 do {
  if ((i1 | 0) == 0) {
   i17 = 57;
  } else {
   if (!i6) {
    if ((HEAP32[i5 + 16 >> 2] | 0) == 0) {
     break;
    }
   }
   __ZN7WebCore21createScriptCallStackEPN3JSC9ExecStateEj(i10, i4, i7 ? 200 : 1);
   i16 = i10 | 0;
   i18 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   i16 = __ZNK7WebCore15ScriptCallStack2atEj(i18, 0) | 0;
   i19 = i11 | 0;
   HEAP32[i19 >> 2] = 0;
   i20 = __ZN7WebCore15ScriptArguments24getFirstArgumentAsStringERN3WTF6StringEb(i5, i11, 0) | 0;
   i21 = (i5 | 0) == 0;
   if (!i21) {
    i22 = i5 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
   }
   i22 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i1) | 0;
   do {
    if ((i22 | 0) == 0) {
     if (i21) {
      break;
     }
     i23 = i5 | 0;
     i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     if ((i24 | 0) == 0) {
      __ZN7WebCore15ScriptArgumentsD1Ev(i5);
      __ZN3WTF8fastFreeEPv(i5);
      break;
     } else {
      HEAP32[i23 >> 2] = i24;
      break;
     }
    } else {
     i24 = i9 | 0;
     HEAP32[i24 >> 2] = i5;
     __ZN7WebCore24InspectorInstrumentation23addMessageToConsoleImplEPNS_19InstrumentingAgentsENS_13MessageSourceENS_11MessageTypeENS_12MessageLevelERKN3WTF6StringEPN3JSC9ExecStateENS6_10PassRefPtrINS_15ScriptArgumentsEEEm(i22, 3, i2, i3, i11, i4, i9, 0);
     i23 = HEAP32[i24 >> 2] | 0;
     if ((i23 | 0) == 0) {
      break;
     }
     i24 = i23 | 0;
     i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     if ((i25 | 0) == 0) {
      __ZN7WebCore15ScriptArgumentsD1Ev(i23);
      __ZN3WTF8fastFreeEPv(i23);
      break;
     } else {
      HEAP32[i24 >> 2] = i25;
      break;
     }
    }
   } while (0);
   i22 = i1 + 48 | 0;
   i21 = HEAP32[i22 >> 2] | 0;
   do {
    if ((HEAP8[i21 + 194 | 0] & 64) == 0) {
     if (i20) {
      i25 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
      FUNCTION_TABLE_viiiiiiii[HEAP32[(HEAP32[i25 >> 2] | 0) + 96 >> 2] & 1](i25, 3, i2, i3, i11, HEAP32[i16 + 8 >> 2] | 0, HEAP32[i16 + 12 >> 2] | 0, i16 + 4 | 0);
      i26 = HEAP32[i22 >> 2] | 0;
     } else {
      i26 = i21;
     }
     if ((HEAP8[i26 + 186 | 0] & 64) == 0) {
      if (!(__ZN7WebCore11PageConsole21shouldPrintExceptionsEv() | 0)) {
       break;
      }
     }
     __ZN7WebCore11PageConsole25printSourceURLAndPositionERKN3WTF6StringEjj(i16 + 4 | 0, HEAP32[i16 + 8 >> 2] | 0, 0);
     __ZN7WebCore11PageConsole32printMessageSourceAndLevelPrefixENS_13MessageSourceENS_12MessageLevelE(3, i3);
     i25 = i5 + 16 | 0;
     if ((HEAP32[i25 >> 2] | 0) != 0) {
      i24 = i13 | 0;
      i23 = i12 | 0;
      i27 = 0;
      while (1) {
       i28 = __ZNK7WebCore15ScriptArguments10argumentAtEj(i5, i27) | 0;
       __ZNK10Deprecated11ScriptValue8toStringEPN3JSC9ExecStateE(i12, i28, __ZNK7WebCore15ScriptArguments11globalStateEv(i5) | 0);
       __ZNK3WTF6String4utf8ENS_14ConversionModeE(i13, i12, 0);
       i28 = HEAP32[i24 >> 2] | 0;
       if ((i28 | 0) == 0) {
        i29 = 0;
       } else {
        i29 = i28 + 8 | 0;
       }
       _printf(H_BASE + 32 | 0, (i30 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i30 >> 2] = i29, i30) | 0) | 0;
       STACKTOP = i30;
       i28 = HEAP32[i24 >> 2] | 0;
       do {
        if ((i28 | 0) != 0) {
         i31 = i28 | 0;
         i32 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
         if ((i32 | 0) == 0) {
          __ZN3WTF8fastFreeEPv(i28);
          break;
         } else {
          HEAP32[i31 >> 2] = i32;
          break;
         }
        }
       } while (0);
       i28 = HEAP32[i23 >> 2] | 0;
       do {
        if ((i28 | 0) != 0) {
         i32 = i28 | 0;
         i31 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
         if ((i31 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i28);
          break;
         } else {
          HEAP32[i32 >> 2] = i31;
          break;
         }
        }
       } while (0);
       i27 = i27 + 1 | 0;
       if (i27 >>> 0 >= (HEAP32[i25 >> 2] | 0) >>> 0) {
        break;
       }
      }
     }
     _putchar(10) | 0;
     if (!i7) {
      break;
     }
     _puts(H_BASE + 8 | 0) | 0;
     if ((__ZNK7WebCore15ScriptCallStack4sizeEv(i18) | 0) == 0) {
      break;
     }
     i25 = i14 | 0;
     i27 = i15 | 0;
     i23 = 0;
     while (1) {
      i24 = HEAP32[(__ZNK7WebCore15ScriptCallStack2atEj(i18, i23) | 0) >> 2] | 0;
      HEAP32[i25 >> 2] = i24;
      if ((i24 | 0) != 0) {
       i28 = i24 | 0;
       HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
      }
      __ZNK3WTF6String4utf8ENS_14ConversionModeE(i15, i14, 0);
      i28 = HEAP32[i27 >> 2] | 0;
      if ((i28 | 0) == 0) {
       i33 = 0;
      } else {
       i33 = i28 + 8 | 0;
      }
      _printf(H_BASE + 24 | 0, (i30 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i30 >> 2] = i33, i30) | 0) | 0;
      STACKTOP = i30;
      i28 = HEAP32[i27 >> 2] | 0;
      do {
       if ((i28 | 0) != 0) {
        i24 = i28 | 0;
        i31 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
        if ((i31 | 0) == 0) {
         __ZN3WTF8fastFreeEPv(i28);
         break;
        } else {
         HEAP32[i24 >> 2] = i31;
         break;
        }
       }
      } while (0);
      i28 = HEAP32[i25 >> 2] | 0;
      do {
       if ((i28 | 0) != 0) {
        i31 = i28 | 0;
        i24 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
        if ((i24 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i28);
         break;
        } else {
         HEAP32[i31 >> 2] = i24;
         break;
        }
       }
      } while (0);
      i23 = i23 + 1 | 0;
      if (i23 >>> 0 >= (__ZNK7WebCore15ScriptCallStack4sizeEv(i18) | 0) >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i16 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i21 = i16 | 0;
     i22 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i21 >> 2] = i22;
      break;
     }
    }
   } while (0);
   if ((i18 | 0) == 0) {
    i17 = 57;
    break;
   }
   i16 = i18 | 0;
   i19 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) == 0) {
    __ZN7WebCore15ScriptCallStackD1Ev(i18);
    __ZN3WTF8fastFreeEPv(i18);
    i17 = 57;
    break;
   } else {
    HEAP32[i16 >> 2] = i19;
    i17 = 57;
    break;
   }
  }
 } while (0);
 do {
  if ((i17 | 0) == 57) {
   if ((i5 | 0) != 0) {
    break;
   }
   STACKTOP = i8;
   return;
  }
 } while (0);
 i17 = i5 | 0;
 i30 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
 if ((i30 | 0) == 0) {
  __ZN7WebCore15ScriptArgumentsD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i8;
  return;
 } else {
  HEAP32[i17 >> 2] = i30;
  STACKTOP = i8;
  return;
 }
}
function __ZN7WebCore7Console10profileEndEPN3JSC9ExecStateERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i11 = HEAP32[i10 + 32 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i10 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i11) | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if (!(__ZN7WebCore24InspectorInstrumentation19profilerEnabledImplEPNS_19InstrumentingAgentsE(i10) | 0)) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore14ScriptProfiler4stopEPN3JSC9ExecStateERKN3WTF6StringE(i6, i2, i3);
 i3 = i5 | 0;
 i10 = i6 | 0;
 i6 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i3 >> 2] = i6;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i10 = i1 + 20 | 0;
 i12 = i1 + 28 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i13 | 0) == (HEAP32[i1 + 24 >> 2] | 0)) {
   i14 = i13 + 1 | 0;
   i15 = i10 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   do {
    if (i16 >>> 0 > i5 >>> 0) {
     i17 = 10;
    } else {
     if ((i16 + (i13 << 2) | 0) >>> 0 <= i5 >>> 0) {
      i17 = 10;
      break;
     }
     __ZN3WTF6VectorINS_6RefPtrIN7WebCore13ScriptProfileEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i10, i14);
     i18 = HEAP32[i15 >> 2] | 0;
     i19 = i18 + (i5 - i16 >> 2 << 2) | 0;
     i20 = i18;
    }
   } while (0);
   if ((i17 | 0) == 10) {
    __ZN3WTF6VectorINS_6RefPtrIN7WebCore13ScriptProfileEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i10, i14);
    i19 = i5;
    i20 = HEAP32[i15 >> 2] | 0;
   }
   i16 = HEAP32[i19 >> 2] | 0;
   HEAP32[i20 + (HEAP32[i12 >> 2] << 2) >> 2] = i16;
   if ((i16 | 0) == 0) {
    break;
   }
   i18 = i16 + 4 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
  } else {
   HEAP32[(HEAP32[i10 >> 2] | 0) + (i13 << 2) >> 2] = i6;
   i18 = i6 + 4 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
  }
 } while (0);
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 __ZN7WebCore21createScriptCallStackEPN3JSC9ExecStateEj(i7, i2, 1);
 i2 = i7 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i8 | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 HEAP32[i2 >> 2] = i12;
 if ((i12 | 0) != 0) {
  i6 = i12 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i9 | 0;
 HEAP32[i6 >> 2] = i7;
 i12 = (i7 | 0) == 0;
 if (!i12) {
  i13 = i7 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 }
 __ZN7WebCore24InspectorInstrumentation10addProfileEPNS_4PageEN3WTF6RefPtrINS_13ScriptProfileEEENS3_10PassRefPtrINS_15ScriptCallStackEEE(i11, i8, i9);
 i9 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i6 = i9 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore15ScriptCallStackD1Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    HEAP32[i6 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i2 = i9 + 4 | 0;
   i8 = i2 | 0;
   i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i8 >> 2] = i6;
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 do {
  if (!i12) {
   i9 = i7 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore15ScriptCallStackD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i9 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i3 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i7 + 4 | 0;
 i7 = i3 | 0;
 i12 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i12 | 0) != 0) {
  HEAP32[i7 >> 2] = i12;
  STACKTOP = i4;
  return;
 }
 i12 = i3 - 4 | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 15](i12);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore7Console7profileEPN3JSC9ExecStateERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = HEAP32[i8 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i1) | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if (!(__ZN7WebCore24InspectorInstrumentation19profilerEnabledImplEPNS_19InstrumentingAgentsE(i8) | 0)) {
  STACKTOP = i4;
  return;
 }
 i8 = i5 | 0;
 i9 = i3 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i3 | 0) == 0) {
  i10 = 7;
 } else {
  i11 = i3 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
  if ((HEAP32[i9 >> 2] | 0) == 0) {
   i10 = 7;
  }
 }
 do {
  if ((i10 | 0) == 7) {
   i9 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i1) | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF6StringC1EPKc(i6, H_BASE + 88 | 0);
   } else {
    __ZN7WebCore24InspectorInstrumentation38getCurrentUserInitiatedProfileNameImplEPNS_19InstrumentingAgentsEb(i6, i9, 1);
   }
   i9 = i6 | 0;
   i11 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i3 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i11;
   do {
    if ((i3 | 0) != 0) {
     i11 = i3 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i3 = HEAP32[i9 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i12 = i3 | 0;
   i11 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i12 >> 2] = i11;
    break;
   }
  }
 } while (0);
 __ZN7WebCore14ScriptProfiler5startEPN3JSC9ExecStateERKN3WTF6StringE(i2, i5);
 __ZN7WebCore21createScriptCallStackEPN3JSC9ExecStateEj(i7, i2, 1);
 i2 = i7 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = __ZNK7WebCore15ScriptCallStack2atEj(i7, 0) | 0;
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i2 + 12 >> 2] | 0;
 i11 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i1) | 0;
 if ((i11 | 0) != 0) {
  __ZN7WebCore24InspectorInstrumentation37addStartProfilingMessageToConsoleImplEPNS_19InstrumentingAgentsERKN3WTF6StringEjjS6_(i11, i5, i6, i10, i2 + 4 | 0);
 }
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 | 0;
   i10 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore15ScriptCallStackD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i2 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i7 | 0;
 i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i8 >> 2] = i10;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore7Console14groupCollapsedEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = HEAP32[i7 + 32 >> 2] | 0;
 }
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = 0;
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i1 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i8) | 0;
 do {
  if ((i1 | 0) == 0) {
   if ((i3 | 0) == 0) {
    break;
   }
   i8 = i3 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    __ZN7WebCore15ScriptArgumentsD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  } else {
   i9 = i5 | 0;
   HEAP32[i9 >> 2] = i3;
   __ZN7WebCore24InspectorInstrumentation23addMessageToConsoleImplEPNS_19InstrumentingAgentsENS_13MessageSourceENS_11MessageTypeENS_12MessageLevelERKN3WTF6StringEPN3JSC9ExecStateENS6_10PassRefPtrINS_15ScriptArgumentsEEEm(i1, 3, 6, 1, i6, i2, i5, 0);
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore15ScriptArgumentsD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i5 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i7 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore7Console5groupEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = HEAP32[i7 + 32 >> 2] | 0;
 }
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = 0;
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i1 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i8) | 0;
 do {
  if ((i1 | 0) == 0) {
   if ((i3 | 0) == 0) {
    break;
   }
   i8 = i3 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    __ZN7WebCore15ScriptArgumentsD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  } else {
   i9 = i5 | 0;
   HEAP32[i9 >> 2] = i3;
   __ZN7WebCore24InspectorInstrumentation23addMessageToConsoleImplEPNS_19InstrumentingAgentsENS_13MessageSourceENS_11MessageTypeENS_12MessageLevelERKN3WTF6StringEPN3JSC9ExecStateENS6_10PassRefPtrINS_15ScriptArgumentsEEEm(i1, 3, 5, 1, i6, i2, i5, 0);
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore15ScriptArgumentsD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i5 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i7 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore24InspectorInstrumentation10addProfileEPNS_4PageEN3WTF6RefPtrINS_13ScriptProfileEEENS3_10PassRefPtrINS_15ScriptCallStackEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i1) | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i5 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = i6 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i2 >> 2] = i3;
 __ZN7WebCore24InspectorInstrumentation14addProfileImplEPNS_19InstrumentingAgentsEN3WTF6RefPtrINS_13ScriptProfileEEENS3_10PassRefPtrINS_15ScriptCallStackEEE(i7, i5, i6);
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore15ScriptCallStackD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i2 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i6 + 4 | 0;
 i6 = i1 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i6 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
 i5 = i1 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore7Console7timeEndEPN3JSC9ExecStateERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 __ZN7WebCore31createScriptCallStackForConsoleEPN3JSC9ExecStateE(i6, i2);
 i2 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i1 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i2 + 32 >> 2] | 0) | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   i7 = i5 | 0;
   HEAP32[i7 >> 2] = i6;
   __ZN7WebCore24InspectorInstrumentation21stopConsoleTimingImplEPNS_19InstrumentingAgentsEPNS_5FrameERKN3WTF6StringENS5_10PassRefPtrINS_15ScriptCallStackEEE(i1, i2, i3, i5);
   i1 = HEAP32[i7 >> 2] | 0;
   if ((i1 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i7 = i1 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore15ScriptCallStackD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i7 >> 2] = i8;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i6 | 0;
 i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore15ScriptCallStackD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore7Console9timeStampEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 do {
  if (!((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i5 | 0) == 0)) {
   i1 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i5 + 32 >> 2] | 0) | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   i6 = i4 | 0;
   HEAP32[i6 >> 2] = i2;
   __ZN7WebCore24InspectorInstrumentation20consoleTimeStampImplEPNS_19InstrumentingAgentsEPNS_5FrameEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE(i1, i5, i4);
   i1 = HEAP32[i6 >> 2] | 0;
   if ((i1 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i6 = i1 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore15ScriptArgumentsD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i6 >> 2] = i7;
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore15ScriptArgumentsD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore7Console5countEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i6 + 32 >> 2] | 0;
 }
 i6 = i3 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i7) | 0;
 if ((i6 | 0) == 0) {
  if ((i3 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i7 = i3 | 0;
  i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i1 | 0) == 0) {
   __ZN7WebCore15ScriptArgumentsD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i7 >> 2] = i1;
   STACKTOP = i4;
   return;
  }
 } else {
  i1 = i5 | 0;
  HEAP32[i1 >> 2] = i3;
  __ZN7WebCore24InspectorInstrumentation16consoleCountImplEPNS_19InstrumentingAgentsEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE(i6, i2, i5);
  i5 = HEAP32[i1 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i1 = i5 | 0;
  i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i2 | 0) == 0) {
   __ZN7WebCore15ScriptArgumentsD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i1 >> 2] = i2;
   STACKTOP = i4;
   return;
  }
 }
}
function __ZN7WebCore7Console8groupEndEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
 } else {
  i6 = HEAP32[i5 + 32 >> 2] | 0;
 }
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = 0;
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = 0;
 i7 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i6) | 0;
 do {
  if ((i7 | 0) != 0) {
   __ZN7WebCore24InspectorInstrumentation23addMessageToConsoleImplEPNS_19InstrumentingAgentsENS_13MessageSourceENS_11MessageTypeENS_12MessageLevelERKN3WTF6StringES9_jjPN3JSC9ExecStateEm(i7, 3, 7, 1, i3, i4, 0, 0, 0, 0);
   i6 = HEAP32[i1 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
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
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i4;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore7ConsoleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 20 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 + 4 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 24 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore17DOMWindowPropertyD2Ev(i1 | 0);
 i2 = i1 + 12 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function __ZN7WebCore7ConsoleD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 20 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 + 4 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 24 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore17DOMWindowPropertyD2Ev(i1 | 0);
 i2 = i1 + 12 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function __ZN7WebCore7Console15assertConditionEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 if (i4) {
  STACKTOP = i5;
  return;
 }
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i4 + 32 >> 2] | 0;
 }
 i4 = i6 | 0;
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i4 >> 2] = i3;
 __ZN7WebCoreL18internalAddMessageEPNS_4PageENS_11MessageTypeENS_12MessageLevelEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEEbb(i7, 9, 3, i2, i6, 1, 0);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i4 = i6 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore15ScriptArgumentsD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i4 >> 2] = i2;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore7Console6dirxmlEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i6 + 32 >> 2] | 0;
 }
 i6 = i5 | 0;
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i6 >> 2] = i3;
 __ZN7WebCoreL18internalAddMessageEPNS_4PageENS_11MessageTypeENS_12MessageLevelEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEEbb(i7, 2, 1, i2, i5, 0, 0);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i5 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore15ScriptArgumentsD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i6 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore7Console5traceEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i6 + 32 >> 2] | 0;
 }
 i6 = i5 | 0;
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i6 >> 2] = i3;
 __ZN7WebCoreL18internalAddMessageEPNS_4PageENS_11MessageTypeENS_12MessageLevelEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEEbb(i7, 4, 1, i2, i5, 1, 1);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i5 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore15ScriptArgumentsD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i6 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore7Console5tableEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i6 + 32 >> 2] | 0;
 }
 i6 = i5 | 0;
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i6 >> 2] = i3;
 __ZN7WebCoreL18internalAddMessageEPNS_4PageENS_11MessageTypeENS_12MessageLevelEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEEbb(i7, 3, 1, i2, i5, 0, 0);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i5 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore15ScriptArgumentsD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i6 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore7Console5errorEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i6 + 32 >> 2] | 0;
 }
 i6 = i5 | 0;
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i6 >> 2] = i3;
 __ZN7WebCoreL18internalAddMessageEPNS_4PageENS_11MessageTypeENS_12MessageLevelEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEEbb(i7, 0, 3, i2, i5, 0, 0);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i5 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore15ScriptArgumentsD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i6 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore7Console5debugEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i6 + 32 >> 2] | 0;
 }
 i6 = i5 | 0;
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i6 >> 2] = i3;
 __ZN7WebCoreL18internalAddMessageEPNS_4PageENS_11MessageTypeENS_12MessageLevelEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEEbb(i7, 0, 4, i2, i5, 0, 0);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i5 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore15ScriptArgumentsD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i6 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore7Console5clearEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i6 + 32 >> 2] | 0;
 }
 i6 = i5 | 0;
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i6 >> 2] = i3;
 __ZN7WebCoreL18internalAddMessageEPNS_4PageENS_11MessageTypeENS_12MessageLevelEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEEbb(i7, 8, 1, i2, i5, 1, 0);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i5 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore15ScriptArgumentsD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i6 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore7Console4warnEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i6 + 32 >> 2] | 0;
 }
 i6 = i5 | 0;
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i6 >> 2] = i3;
 __ZN7WebCoreL18internalAddMessageEPNS_4PageENS_11MessageTypeENS_12MessageLevelEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEEbb(i7, 0, 2, i2, i5, 0, 0);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i5 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore15ScriptArgumentsD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i6 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore7Console4infoEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i3 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i6 + 32 >> 2] | 0;
 }
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = i3;
 __ZN7WebCoreL18internalAddMessageEPNS_4PageENS_11MessageTypeENS_12MessageLevelEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEEbb(i7, 0, 1, i2, i5, 0, 0);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i5 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore15ScriptArgumentsD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i6 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore7Console3logEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i6 + 32 >> 2] | 0;
 }
 i6 = i5 | 0;
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i6 >> 2] = i3;
 __ZN7WebCoreL18internalAddMessageEPNS_4PageENS_11MessageTypeENS_12MessageLevelEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEEbb(i7, 0, 1, i2, i5, 0, 0);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i5 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore15ScriptArgumentsD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i6 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore7Console3dirEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i6 + 32 >> 2] | 0;
 }
 i6 = i5 | 0;
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i6 >> 2] = i3;
 __ZN7WebCoreL18internalAddMessageEPNS_4PageENS_11MessageTypeENS_12MessageLevelEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEEbb(i7, 1, 1, i2, i5, 0, 0);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i5 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore15ScriptArgumentsD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i6 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore13ScriptProfileEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore7Console4timeERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i3 + 32 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore24InspectorInstrumentation22startConsoleTimingImplEPNS_19InstrumentingAgentsEPNS_5FrameERKN3WTF6StringE(i1, i3, i2);
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
function runPostSets() {
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 6;
}
function __ZN7WebCore7ConsoleC2EPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 1;
 __ZN7WebCore17DOMWindowPropertyC2EPNS_5FrameE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 48;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 return;
}
function __ZN7WebCore7ConsoleC1EPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 1;
 __ZN7WebCore17DOMWindowPropertyC2EPNS_5FrameE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 48;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 return;
}
function dynCall_viiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 FUNCTION_TABLE_viiiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZN7WebCore17DOMWindowProperty27reconnectFrameFromPageCacheEPNS_5FrameE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17DOMWindowProperty27reconnectFrameFromPageCacheEPNS_5FrameE(i1 | 0, i2 | 0);
}
function vi___ZN7WebCore17DOMWindowProperty36willDestroyGlobalObjectInCachedFrameEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17DOMWindowProperty36willDestroyGlobalObjectInCachedFrameEv(i1 | 0);
}
function vi___ZN7WebCore17DOMWindowProperty31willDetachGlobalObjectFromFrameEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17DOMWindowProperty31willDetachGlobalObjectFromFrameEv(i1 | 0);
}
function vi___ZN7WebCore17DOMWindowProperty30willDestroyGlobalObjectInFrameEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17DOMWindowProperty30willDestroyGlobalObjectInFrameEv(i1 | 0);
}
function vi___ZN7WebCore17DOMWindowProperty27disconnectFrameForPageCacheEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17DOMWindowProperty27disconnectFrameForPageCacheEv(i1 | 0);
}
function b4(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 abort(4);
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function __ZN7WebCore7ConsoleD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7ConsoleD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
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
function b0(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(0);
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
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b2() {
 abort(2);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vii = [b0,b0,vii___ZN7WebCore17DOMWindowProperty27reconnectFrameFromPageCacheEPNS_5FrameE__wrapper,b0,__ZN7WebCore7ConsoleC2EPNS_5FrameE,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,vi___ZN7WebCore17DOMWindowProperty30willDestroyGlobalObjectInFrameEv__wrapper,b1,__ZN7WebCore7ConsoleD2Ev,b1,__ZN7WebCore7ConsoleD0Ev,b1,vi___ZN7WebCore17DOMWindowProperty36willDestroyGlobalObjectInCachedFrameEv__wrapper,b1,vi___ZN7WebCore17DOMWindowProperty27disconnectFrameForPageCacheEv__wrapper,b1,vi___ZN7WebCore17DOMWindowProperty31willDetachGlobalObjectFromFrameEv__wrapper,b1,b1,b1];
  var FUNCTION_TABLE_v = [b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viiiiiiii = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vii: dynCall_vii, dynCall_vi: dynCall_vi, dynCall_v: dynCall_v, dynCall_ii: dynCall_ii, dynCall_viiiiiiii: dynCall_viiiiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vii": invoke_vii, "invoke_vi": invoke_vi, "invoke_v": invoke_v, "invoke_ii": invoke_ii, "invoke_viiiiiiii": invoke_viiiiiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_fputc": _fputc, "_malloc": _malloc, "_pwrite": _pwrite, "_putchar": _putchar, "_puts": _puts, "_fputs": _fputs, "___setErrNo": ___setErrNo, "_fwrite": _fwrite, "__reallyNegative": __reallyNegative, "__formatString": __formatString, "_send": _send, "_write": _write, "_llvm_lifetime_start": _llvm_lifetime_start, "_fprintf": _fprintf, "_free": _free, "_printf": _printf, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = asm["dynCall_viiiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore7Console9timeStampEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE","__ZN7WebCore7Console5errorEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE","__ZN7WebCore7Console4infoEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE","__ZN7WebCore7Console4warnEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE","__ZN7WebCore7Console3dirEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE","__ZN7WebCore7Console5tableEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE","__ZN7WebCore7Console4timeERKN3WTF6StringE","__ZN7WebCore7Console7timeEndEPN3JSC9ExecStateERKN3WTF6StringE","__ZN7WebCore24InspectorInstrumentation10addProfileEPNS_4PageEN3WTF6RefPtrINS_13ScriptProfileEEENS3_10PassRefPtrINS_15ScriptCallStackEEE","__ZN7WebCore7Console5groupEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE","__ZN7WebCoreL18internalAddMessageEPNS_4PageENS_11MessageTypeENS_12MessageLevelEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEEbb","__ZN7WebCore7Console15assertConditionEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEEb","_memset","__ZN7WebCore7Console14groupCollapsedEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE","_memcpy","__ZN7WebCore7Console5traceEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE","__ZN7WebCore7Console5countEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE","__ZN7WebCore7Console8groupEndEv","__ZN7WebCore7Console5clearEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE","__ZN7WebCore7ConsoleC2EPNS_5FrameE","__ZN7WebCore7Console7profileEPN3JSC9ExecStateERKN3WTF6StringE","__ZN7WebCore7ConsoleD2Ev","__ZN7WebCore7Console6dirxmlEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE","__ZN7WebCore7Console3logEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE","__ZN7WebCore7Console5debugEPN3JSC9ExecStateEN3WTF10PassRefPtrINS_15ScriptArgumentsEEE","__ZN7WebCore7Console10profileEndEPN3JSC9ExecStateERKN3WTF6StringE","__ZN3WTF6VectorINS_6RefPtrIN7WebCore13ScriptProfileEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore7ConsoleD0Ev"]

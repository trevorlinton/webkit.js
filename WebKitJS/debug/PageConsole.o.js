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
H_BASE = parentModule["_malloc"](208 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 208;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore11PageConsoleC1ERNS_4PageE;
var __ZN7WebCore11PageConsoleD1Ev;
/* memory initializer */ allocate([67,83,83,0,0,0,0,0,82,69,78,68,69,82,73,78,71,0,0,0,0,0,0,0,65,80,80,67,65,67,72,69,0,0,0,0,0,0,0,0,83,84,79,82,65,71,69,0,67,79,78,83,79,76,69,65,80,73,0,0,0,0,0,0,78,69,84,87,79,82,75,0,74,83,0,0,0,0,0,0,88,77,76,0,0,0,0,0,32,37,115,10,0,0,0,0,37,115,32,37,115,58,0,0,69,82,82,79,82,0,0,0,87,65,82,78,0,0,0,0,76,79,71,0,0,0,0,0,68,69,66,85,71,0,0,0,85,78,75,78,79,87,78,0,79,84,72,69,82,0,0,0,83,69,67,85,82,73,84,89,0,0,0,0,0,0,0,0,37,115,58,32,0,0,0,0,37,115,58,37,117,58,37,117,58,32,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
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
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var _pwrite=env._pwrite;
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
function __ZN7WebCore11PageConsole10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = i11 | 0;
 i13 = i11 + 8 | 0;
 if (!((HEAP32[H_BASE + 208 >> 2] | 0) == 0 | (i2 | 0) == 3)) {
  STACKTOP = i11;
  return;
 }
 i14 = i8 | 0;
 i8 = HEAP32[i14 >> 2] | 0;
 i15 = i1 | 0;
 i1 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i16 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i1) | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation23addMessageToConsoleImplEPNS_19InstrumentingAgentsENS_13MessageSourceENS_11MessageTypeENS_12MessageLevelERKN3WTF6StringES9_jjPN3JSC9ExecStateEm(i16, i2, 0, i3, i4, i5, i6, i7, i9, i10);
  } else {
   HEAP32[i14 >> 2] = 0;
   i16 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i1) | 0;
   if ((i16 | 0) == 0) {
    i17 = i8 | 0;
    i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
    if ((i18 | 0) == 0) {
     __ZN7WebCore15ScriptCallStackD1Ev(i8);
     __ZN3WTF8fastFreeEPv(i8);
     break;
    } else {
     HEAP32[i17 >> 2] = i18;
     break;
    }
   }
   i18 = i12 | 0;
   HEAP32[i18 >> 2] = i8;
   __ZN7WebCore24InspectorInstrumentation23addMessageToConsoleImplEPNS_19InstrumentingAgentsENS_13MessageSourceENS_11MessageTypeENS_12MessageLevelERKN3WTF6StringENS6_10PassRefPtrINS_15ScriptCallStackEEEm(i16, i2, 0, i3, i4, i12, i10);
   i16 = HEAP32[i18 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   i18 = i16 | 0;
   i17 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) == 0) {
    __ZN7WebCore15ScriptCallStackD1Ev(i16);
    __ZN3WTF8fastFreeEPv(i16);
    break;
   } else {
    HEAP32[i18 >> 2] = i17;
    break;
   }
  }
 } while (0);
 if ((i2 | 0) == 7) {
  STACKTOP = i11;
  return;
 }
 i10 = HEAP32[i15 >> 2] | 0;
 if ((HEAP8[(HEAP32[i10 + 48 >> 2] | 0) + 194 | 0] & 64) != 0) {
  STACKTOP = i11;
  return;
 }
 i12 = HEAP32[(HEAP32[i10 + 20 >> 2] | 0) + 8 >> 2] | 0;
 FUNCTION_TABLE_viiiiiii[HEAP32[(HEAP32[i12 >> 2] | 0) + 92 >> 2] & 1](i12, i2, i3, i4, i6, i7, i5);
 do {
  if ((HEAP8[(HEAP32[(HEAP32[i15 >> 2] | 0) + 48 >> 2] | 0) + 186 | 0] & 64) == 0) {
   if ((HEAP8[H_BASE + 200 | 0] & 1) != 0) {
    break;
   }
   STACKTOP = i11;
   return;
  }
 } while (0);
 __ZN7WebCore11PageConsole25printSourceURLAndPositionERKN3WTF6StringEjj(i5, i6, i7);
 switch (i2 | 0) {
 case 1:
  {
   i19 = H_BASE + 80 | 0;
   break;
  }
 case 2:
  {
   i19 = H_BASE + 72 | 0;
   break;
  }
 case 3:
  {
   i19 = H_BASE + 56 | 0;
   break;
  }
 case 4:
  {
   i19 = H_BASE + 48 | 0;
   break;
  }
 case 5:
  {
   i19 = H_BASE + 32 | 0;
   break;
  }
 case 6:
  {
   i19 = H_BASE + 16 | 0;
   break;
  }
 case 7:
  {
   i19 = H_BASE + 8 | 0;
   break;
  }
 case 8:
  {
   i19 = H_BASE + 160 | 0;
   break;
  }
 case 9:
  {
   i19 = H_BASE + 152 | 0;
   break;
  }
 case 0:
  {
   i19 = H_BASE + 88 | 0;
   break;
  }
 default:
  {
   i19 = H_BASE + 144 | 0;
  }
 }
 if ((i3 | 0) == 1) {
  i20 = H_BASE + 128 | 0;
 } else if ((i3 | 0) == 2) {
  i20 = H_BASE + 120 | 0;
 } else if ((i3 | 0) == 3) {
  i20 = H_BASE + 112 | 0;
 } else if ((i3 | 0) == 4) {
  i20 = H_BASE + 136 | 0;
 } else {
  i20 = H_BASE + 144 | 0;
 }
 _printf(H_BASE + 104 | 0, (i3 = STACKTOP, STACKTOP = STACKTOP + 16 | 0, HEAP32[i3 >> 2] = i19, HEAP32[i3 + 8 >> 2] = i20, i3) | 0) | 0;
 STACKTOP = i3;
 __ZNK3WTF6String4utf8ENS_14ConversionModeE(i13, i4, 0);
 i4 = i13 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i21 = 0;
 } else {
  i21 = i13 + 8 | 0;
 }
 _printf(H_BASE + 96 | 0, (i3 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i3 >> 2] = i21, i3) | 0) | 0;
 STACKTOP = i3;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i11;
  return;
 }
 i4 = i3 | 0;
 i21 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i21 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i3);
  STACKTOP = i11;
  return;
 } else {
  HEAP32[i4 >> 2] = i21;
  STACKTOP = i11;
  return;
 }
}
function __ZN7WebCore11PageConsole10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEmPNS_8DocumentE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i8 | 0;
 HEAP32[i11 >> 2] = 0;
 do {
  if ((i6 | 0) == 0) {
   i12 = 0;
   i13 = 0;
  } else {
   i14 = HEAP32[i6 + 356 >> 2] | 0;
   do {
    if ((i14 | 0) == 0) {
     HEAP32[i11 >> 2] = i14;
    } else {
     i15 = i14 | 0;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
     i15 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = i14;
     if ((i15 | 0) == 0) {
      break;
     }
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
   if ((HEAP8[i6 + 964 | 0] & 1) == 0) {
    i12 = 0;
    i13 = 0;
    break;
   }
   if ((HEAP32[i6 + 1960 >> 2] | 0) != 0) {
    i12 = 0;
    i13 = 0;
    break;
   }
   if ((__ZNK7WebCore8Document24scriptableDocumentParserEv(i6) | 0) == 0) {
    i12 = 0;
    i13 = 0;
    break;
   }
   i14 = __ZNK7WebCore8Document24scriptableDocumentParserEv(i6) | 0;
   i17 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 80 >> 2] & 1](i14) | 0) ^ 1;
   if (!((HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] | 0) == 0 & i17)) {
    i12 = 0;
    i13 = 0;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 84 >> 2] & 3](i9, i14);
   i12 = (HEAP32[i9 >> 2] | 0) + 1 | 0;
   i13 = (HEAP32[i9 + 4 >> 2] | 0) + 1 | 0;
  }
 } while (0);
 i9 = i10 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZN7WebCore11PageConsole10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm(i1, i2, i3, i4, i8, i12, i13, i10, 0, i5);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore15ScriptCallStackD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i11 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i11 = i5 | 0;
 i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i11 >> 2] = i10;
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore11PageConsole25printSourceURLAndPositionERKN3WTF6StringEjj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((i2 | 0) == 0 | (i3 | 0) == 0) {
  __ZNK3WTF6String4utf8ENS_14ConversionModeE(i6, i1, 0);
  i7 = i6 | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i8 = 0;
  } else {
   i8 = i6 + 8 | 0;
  }
  _printf(H_BASE + 176 | 0, (i9 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i9 >> 2] = i8, i9) | 0) | 0;
  STACKTOP = i9;
  i8 = HEAP32[i7 >> 2] | 0;
  if ((i8 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i7 = i8 | 0;
  i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i6 | 0) == 0) {
   __ZN3WTF8fastFreeEPv(i8);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i7 >> 2] = i6;
   STACKTOP = i4;
   return;
  }
 } else {
  __ZNK3WTF6String4utf8ENS_14ConversionModeE(i5, i1, 0);
  i1 = i5 | 0;
  i5 = HEAP32[i1 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i10 = 0;
  } else {
   i10 = i5 + 8 | 0;
  }
  _printf(H_BASE + 184 | 0, (i9 = STACKTOP, STACKTOP = STACKTOP + 24 | 0, HEAP32[i9 >> 2] = i10, HEAP32[i9 + 8 >> 2] = i2, HEAP32[i9 + 16 >> 2] = i3, i9) | 0) | 0;
  STACKTOP = i9;
  i9 = HEAP32[i1 >> 2] | 0;
  if ((i9 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i1 = i9 | 0;
  i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i3 | 0) == 0) {
   __ZN3WTF8fastFreeEPv(i9);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i1 >> 2] = i3;
   STACKTOP = i4;
   return;
  }
 }
}
function __ZN7WebCore11PageConsole10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringENS3_10PassRefPtrINS_15ScriptCallStackEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i8 | 0;
 i11 = i5 | 0;
 i5 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i10 >> 2] = i5;
 __ZN7WebCore11PageConsole10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm(i1, i2, i3, i4, i7, 0, 0, i8, 0, 0);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore15ScriptCallStackD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i9 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i9 = i8 | 0;
 i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i9 >> 2] = i7;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore11PageConsole32printMessageSourceAndLevelPrefixENS_13MessageSourceENS_12MessageLevelE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 switch (i1 | 0) {
 case 7:
  {
   i4 = H_BASE + 8 | 0;
   break;
  }
 case 8:
  {
   i4 = H_BASE + 160 | 0;
   break;
  }
 case 9:
  {
   i4 = H_BASE + 152 | 0;
   break;
  }
 case 0:
  {
   i4 = H_BASE + 88 | 0;
   break;
  }
 case 2:
  {
   i4 = H_BASE + 72 | 0;
   break;
  }
 case 3:
  {
   i4 = H_BASE + 56 | 0;
   break;
  }
 case 4:
  {
   i4 = H_BASE + 48 | 0;
   break;
  }
 case 5:
  {
   i4 = H_BASE + 32 | 0;
   break;
  }
 case 6:
  {
   i4 = H_BASE + 16 | 0;
   break;
  }
 case 1:
  {
   i4 = H_BASE + 80 | 0;
   break;
  }
 default:
  {
   i4 = H_BASE + 144 | 0;
  }
 }
 if ((i2 | 0) == 1) {
  i5 = H_BASE + 128 | 0;
 } else if ((i2 | 0) == 2) {
  i5 = H_BASE + 120 | 0;
 } else if ((i2 | 0) == 3) {
  i5 = H_BASE + 112 | 0;
 } else if ((i2 | 0) == 4) {
  i5 = H_BASE + 136 | 0;
 } else {
  i5 = H_BASE + 144 | 0;
 }
 _printf(H_BASE + 104 | 0, (i2 = STACKTOP, STACKTOP = STACKTOP + 16 | 0, HEAP32[i2 >> 2] = i4, HEAP32[i2 + 8 >> 2] = i5, i2) | 0) | 0;
 STACKTOP = i2;
 STACKTOP = i3;
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
function dynCall_viiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function b3(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(3);
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
function __ZN7WebCore11PageConsole24setShouldPrintExceptionsEb(i1) {
 i1 = i1 | 0;
 HEAP8[H_BASE + 200 | 0] = i1 & 1;
 return;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZN7WebCore11PageConsole6unmuteEv() {
 HEAP32[H_BASE + 208 >> 2] = (HEAP32[H_BASE + 208 >> 2] | 0) - 1;
 return;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function __ZN7WebCore11PageConsole4muteEv() {
 HEAP32[H_BASE + 208 >> 2] = (HEAP32[H_BASE + 208 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore11PageConsoleC2ERNS_4PageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore11PageConsoleC1ERNS_4PageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore11PageConsole21shouldPrintExceptionsEv() {
 return (HEAP8[H_BASE + 200 | 0] & 1) != 0 | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
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
function __ZN7WebCore11PageConsoleD2Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore11PageConsoleD1Ev(i1) {
 i1 = i1 | 0;
 return;
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore11PageConsoleD2Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore11PageConsoleC2ERNS_4PageE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viiiiiii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viiiiiii: dynCall_viiiiiii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viiiiiii": invoke_viiiiiii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "_pwrite": _pwrite, "___setErrNo": ___setErrNo, "_fwrite": _fwrite, "__reallyNegative": __reallyNegative, "__formatString": __formatString, "_send": _send, "_write": _write, "_llvm_lifetime_start": _llvm_lifetime_start, "_fprintf": _fprintf, "_free": _free, "_printf": _printf, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE": __ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore11PageConsole4muteEv","__ZN7WebCore11PageConsoleD2Ev","__ZN7WebCore11PageConsole25printSourceURLAndPositionERKN3WTF6StringEjj","_memset","__ZN7WebCore11PageConsole10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm","__ZN7WebCore11PageConsole21shouldPrintExceptionsEv","__ZN7WebCore11PageConsole24setShouldPrintExceptionsEb","_memcpy","__ZN7WebCore11PageConsole6unmuteEv","__ZN7WebCore11PageConsoleC2ERNS_4PageE","__ZN7WebCore11PageConsole10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEmPNS_8DocumentE","__ZN7WebCore11PageConsole10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringENS3_10PassRefPtrINS_15ScriptCallStackEEE","__ZN7WebCore11PageConsole32printMessageSourceAndLevelPrefixENS_13MessageSourceENS_12MessageLevelE"]

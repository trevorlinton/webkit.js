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
H_BASE = parentModule["_malloc"](48 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 48;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore15ScheduledActionC1EPN3JSC9ExecStateENS1_7JSValueERNS_15DOMWrapperWorldE;
/* memory initializer */ allocate([117,110,100,101,102,105,110,101,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var __ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE=env.__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN3JSC20StringSourceProviderE=(H_BASE+24)|0;
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
function __ZN7WebCore15ScheduledAction24executeFunctionInContextEPN3JSC14JSGlobalObjectENS1_7JSValueEPNS_22ScriptExecutionContextE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 128 | 0;
 i14 = i5 + 136 | 0;
 i15 = i5 + 144 | 0;
 i16 = i5 + 152 | 0;
 i17 = i5 + 160 | 0;
 i18 = i5 + 168 | 0;
 i19 = i5 + 176 | 0;
 __ZN3JSC12JSLockHolderC1EPNS_2VME(i10, __ZN7WebCore22ScriptExecutionContext2vmEv(i4) | 0);
 i20 = i1 | 0;
 i21 = HEAP32[i20 >> 2] | 0;
 if ((i21 | 0) == 0) {
  __ZN3JSC12JSLockHolderD1Ev(i10);
  STACKTOP = i5;
  return;
 }
 i22 = i21 | 0;
 i21 = HEAP32[i22 >> 2] | 0;
 i23 = i21;
 if (!((i21 & 0 | 0) == 0 & (HEAP32[i22 + 4 >> 2] & -1 | 0) == (-5 | 0))) {
  __ZN3JSC12JSLockHolderD1Ev(i10);
  STACKTOP = i5;
  return;
 }
 i22 = i23;
 i21 = HEAP32[i22 >> 2] | 0;
 i24 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   if ((i24 | 0) == (HEAP32[i24 >> 2] | 0)) {
    break;
   }
   _WTFCrash();
  }
 } while (0);
 i24 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[((HEAP32[(i23 & -65536) + 1048 >> 2] | 0) == 2 ? i22 + 8 | 0 : i21 + 32 | 0) >> 2] | 0) + 28 >> 2] & 1](i22, i11) | 0;
 if ((i24 | 0) == 0) {
  __ZN3JSC12JSLockHolderD1Ev(i10);
  STACKTOP = i5;
  return;
 }
 i22 = __ZN3JSC14JSGlobalObject10globalExecEv(i2) | 0;
 i2 = i12 | 0;
 HEAP32[i2 >> 2] = 0;
 i21 = i12 + 4 | 0;
 HEAP32[i21 >> 2] = 8;
 i23 = i12 + 72 | 0;
 HEAP32[i23 >> 2] = i12 + 8;
 i25 = i12 + 76 | 0;
 HEAP32[i25 >> 2] = 0;
 i26 = i1 + 12 | 0;
 i27 = HEAP32[i26 >> 2] | 0;
 L14 : do {
  if ((i27 | 0) != 0) {
   i28 = i1 + 4 | 0;
   i29 = i8 | 0;
   i30 = 0;
   i31 = i27;
   while (1) {
    if (i31 >>> 0 <= i30 >>> 0) {
     break;
    }
    i32 = HEAP32[(HEAP32[i28 >> 2] | 0) + (i30 << 2) >> 2] | 0;
    if ((i32 | 0) == 0) {
     i33 = 0;
     i34 = 0;
     i35 = -6;
     i36 = 0;
    } else {
     i37 = i32 | 0;
     i32 = HEAP32[i37 >> 2] | 0;
     i38 = HEAP32[i37 + 4 >> 2] | 0;
     i33 = i38 & 0;
     i34 = i32 & -1;
     i35 = i38 & -1;
     i36 = i32 & 0;
    }
    i32 = HEAP32[i2 >> 2] | 0;
    i38 = i34 | i36;
    i37 = i33 | i35;
    if ((i32 | 0) < (HEAP32[i21 >> 2] | 0)) {
     i39 = (HEAP32[i23 >> 2] | 0) + (i32 << 3) | 0;
     HEAP32[i39 >> 2] = i38;
     HEAP32[i39 + 4 >> 2] = i37;
     HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
    } else {
     HEAP32[i29 >> 2] = i38;
     HEAP32[i29 + 4 >> 2] = i37;
     __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i12, i8);
    }
    i37 = i30 + 1 | 0;
    if (i37 >>> 0 >= i27 >>> 0) {
     break L14;
    }
    i30 = i37;
    i31 = HEAP32[i26 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 __ZN7WebCore21JSMainThreadExecState22instrumentFunctionCallEPNS_22ScriptExecutionContextEN3JSC8CallTypeERKNS3_8CallDataE(i13, i4, i24, i11);
 i26 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 3](i4) | 0;
 i4 = HEAP32[i20 >> 2] | 0;
 i20 = (i4 | 0) == 0;
 do {
  if (i26) {
   if (i20) {
    i40 = 0;
    i41 = 0;
    i42 = -6;
    i43 = 0;
   } else {
    i27 = i4 | 0;
    i8 = HEAP32[i27 >> 2] | 0;
    i35 = HEAP32[i27 + 4 >> 2] | 0;
    i40 = i35 & 0;
    i41 = i8 & -1;
    i42 = i35 & -1;
    i43 = i8 & 0;
   }
   i8 = i3 | 0;
   i35 = HEAP32[i8 >> 2] | 0;
   i27 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i14 >> 2] = HEAP32[i23 >> 2];
   HEAP32[i14 + 4 >> 2] = HEAP32[i2 >> 2];
   i8 = HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] | 0;
   HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] = i22;
   i33 = i6 | 0;
   HEAP32[i33 >> 2] = i41 | i43;
   HEAP32[i33 + 4 >> 2] = i40 | i42;
   i33 = i7 | 0;
   HEAP32[i33 >> 2] = i35;
   HEAP32[i33 + 4 >> 2] = i27;
   __ZN3JSC4callEPNS_9ExecStateENS_7JSValueENS_8CallTypeERKNS_8CallDataES2_RKNS_7ArgListE(i15, i22, i6, i24, i11, i7, i14);
   if ((HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] | 0) == 0) {
    HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] = i8;
    break;
   }
   HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] = i8;
   if ((i8 | 0) != 0) {
    break;
   }
   __ZN7WebCore21JSMainThreadExecState21didLeaveScriptContextEv();
  } else {
   if (i20) {
    HEAP32[i16 + 4 >> 2] = -6;
    HEAP32[i16 >> 2] = 0;
   } else {
    i8 = i4 | 0;
    i27 = HEAP32[i8 + 4 >> 2] | 0;
    i33 = i16 | 0;
    HEAP32[i33 >> 2] = HEAP32[i8 >> 2];
    HEAP32[i33 + 4 >> 2] = i27;
   }
   i27 = i3 | 0;
   i33 = HEAP32[i27 + 4 >> 2] | 0;
   i8 = i17 | 0;
   HEAP32[i8 >> 2] = HEAP32[i27 >> 2];
   HEAP32[i8 + 4 >> 2] = i33;
   HEAP32[i18 >> 2] = HEAP32[i23 >> 2];
   HEAP32[i18 + 4 >> 2] = HEAP32[i2 >> 2];
   __ZN3JSC4callEPNS_9ExecStateENS_7JSValueENS_8CallTypeERKNS_8CallDataES2_RKNS_7ArgListE(i19, i22, i16, i24, i11, i17, i18);
  }
 } while (0);
 do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
   if ((HEAP32[i13 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation19didCallFunctionImplERKNS_30InspectorInstrumentationCookieE(i13);
  }
 } while (0);
 i18 = (HEAP32[(HEAP32[i22 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 if (!((HEAP32[i18 >> 2] & 0 | 0) == 0 & (HEAP32[i18 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
  __ZN7WebCore22reportCurrentExceptionEPN3JSC9ExecStateE(i22);
 }
 __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i13);
 i13 = HEAP32[i25 >> 2] | 0;
 if ((i13 | 0) != 0) {
  HEAP32[i9 >> 2] = i12;
  __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i13, i9) | 0;
 }
 if ((HEAP32[i21 >> 2] | 0) == 8) {
  __ZN3JSC12JSLockHolderD1Ev(i10);
  STACKTOP = i5;
  return;
 }
 i21 = HEAP32[i23 >> 2] | 0;
 if ((i21 | 0) == 0) {
  __ZN3JSC12JSLockHolderD1Ev(i10);
  STACKTOP = i5;
  return;
 }
 __ZdaPv(i21);
 __ZN3JSC12JSLockHolderD1Ev(i10);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15ScheduledActionC2EPN3JSC9ExecStateENS1_7JSValueERNS_15DOMWrapperWorldE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i2 + 16 | 0;
 i10 = HEAP32[(HEAP32[i9 >> 2] & -65536) + 1076 >> 2] | 0;
 i11 = i3 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 i12 = HEAP32[i11 + 4 >> 2] | 0;
 if ((HEAP32[i10 + 20444 >> 2] | 0) != 0) {
  _WTFCrash();
 }
 i11 = i10 + 20440 | 0;
 i13 = HEAP32[i11 >> 2] | 0;
 if ((i13 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i10 + 20360 | 0);
  i14 = HEAP32[i11 >> 2] | 0;
 } else {
  i14 = i13;
 }
 i13 = i14 + 12 | 0;
 HEAP32[i11 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i14 + 4 >> 2] = -6;
 HEAP32[i14 >> 2] = 0;
 i11 = i14 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i13 >> 2] = 0;
 i15 = i10 + 20420 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 HEAP32[i11 >> 2] = i10 + 20408;
 HEAP32[i13 >> 2] = i16;
 HEAP32[i15 >> 2] = i14;
 HEAP32[i16 + 8 >> 2] = i14;
 i16 = i14 | 0;
 i15 = i1 | 0;
 HEAP32[i15 >> 2] = i16;
 i13 = i7 | 0;
 HEAP32[i13 >> 2] = i3;
 HEAP32[i13 + 4 >> 2] = i12;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i14 & -4096) + 12 >> 2] | 0, i16, i7);
 i7 = HEAP32[i13 + 4 >> 2] | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 HEAP32[i16 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i16 + 4 >> 2] = i7;
 i7 = i1 + 4 | 0;
 i16 = i7 | 0;
 i13 = i1 + 8 | 0;
 i15 = i1 + 12 | 0;
 _memset(i7 | 0, 0, 16) | 0;
 HEAP32[i1 + 20 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i1 = i4 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 i1 = i2 + 32 | 0;
 if (((HEAP32[i1 >> 2] | 0) - 1 | 0) >>> 0 <= 2 >>> 0) {
  STACKTOP = i5;
  return;
 }
 i4 = i8 | 0;
 i14 = i6 | 0;
 i12 = i8;
 i3 = 2;
 while (1) {
  i10 = HEAP32[(HEAP32[i9 >> 2] & -65536) + 1076 >> 2] | 0;
  i11 = i2 + (i3 + 6 << 3) | 0;
  i17 = HEAP32[i11 >> 2] | 0;
  i18 = HEAP32[i11 + 4 >> 2] | 0;
  if ((HEAP32[i10 + 20444 >> 2] | 0) != 0) {
   i19 = 10;
   break;
  }
  i11 = i10 + 20440 | 0;
  i20 = HEAP32[i11 >> 2] | 0;
  if ((i20 | 0) == 0) {
   __ZN3JSC9HandleSet4growEv(i10 + 20360 | 0);
   i21 = HEAP32[i11 >> 2] | 0;
  } else {
   i21 = i20;
  }
  i20 = i21 + 12 | 0;
  HEAP32[i11 >> 2] = HEAP32[i20 >> 2];
  HEAP32[i21 + 4 >> 2] = -6;
  HEAP32[i21 >> 2] = 0;
  i11 = i21 + 8 | 0;
  HEAP32[i11 >> 2] = 0;
  HEAP32[i20 >> 2] = 0;
  i22 = i10 + 20420 | 0;
  i23 = HEAP32[i22 >> 2] | 0;
  HEAP32[i11 >> 2] = i10 + 20408;
  HEAP32[i20 >> 2] = i23;
  HEAP32[i22 >> 2] = i21;
  HEAP32[i23 + 8 >> 2] = i21;
  i23 = i21 | 0;
  HEAP32[i4 >> 2] = i23;
  HEAP32[i14 >> 2] = i17;
  HEAP32[i14 + 4 >> 2] = i18;
  __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i21 & -4096) + 12 >> 2] | 0, i23, i6);
  i23 = HEAP32[i14 + 4 >> 2] | 0;
  i18 = HEAP32[i4 >> 2] | 0;
  HEAP32[i18 >> 2] = HEAP32[i14 >> 2];
  HEAP32[i18 + 4 >> 2] = i23;
  i23 = HEAP32[i15 >> 2] | 0;
  if ((i23 | 0) == (HEAP32[i13 >> 2] | 0)) {
   i18 = i23 + 1 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   do {
    if (i17 >>> 0 > i8 >>> 0) {
     i19 = 17;
    } else {
     if ((i17 + (i23 << 2) | 0) >>> 0 <= i8 >>> 0) {
      i19 = 17;
      break;
     }
     __ZN3WTF6VectorIN3JSC6StrongINS1_7UnknownEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i7, i18);
     i22 = HEAP32[i16 >> 2] | 0;
     i24 = i22 + (i12 - i17 >> 2 << 2) | 0;
     i25 = i22;
    }
   } while (0);
   if ((i19 | 0) == 17) {
    i19 = 0;
    __ZN3WTF6VectorIN3JSC6StrongINS1_7UnknownEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i7, i18);
    i24 = i8;
    i25 = HEAP32[i16 >> 2] | 0;
   }
   __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i25 + (HEAP32[i15 >> 2] << 2) | 0, i24);
  } else {
   __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_((HEAP32[i16 >> 2] | 0) + (i23 << 2) | 0, i8);
  }
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  i17 = HEAP32[i4 >> 2] | 0;
  if ((i17 | 0) != 0) {
   i22 = HEAP32[(i17 & -4096) + 12 >> 2] | 0;
   i20 = i17;
   i10 = i22 + 84 | 0;
   i11 = i20 + 12 | 0;
   if ((i20 | 0) == (HEAP32[i10 >> 2] | 0)) {
    HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
   }
   i10 = i17 + 8 | 0;
   i17 = HEAP32[i10 >> 2] | 0;
   i26 = HEAP32[i11 >> 2] | 0;
   HEAP32[i17 + 12 >> 2] = i26;
   HEAP32[i26 + 8 >> 2] = i17;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i11 >> 2] = 0;
   i10 = i22 + 80 | 0;
   HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i10 >> 2] = i20;
   HEAP32[i4 >> 2] = 0;
  }
  i20 = i3 + 1 | 0;
  if (i20 >>> 0 < ((HEAP32[i1 >> 2] | 0) - 1 | 0) >>> 0) {
   i3 = i20;
  } else {
   i19 = 26;
   break;
  }
 }
 if ((i19 | 0) == 10) {
  _WTFCrash();
 } else if ((i19 | 0) == 26) {
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore15ScheduledActionC1EPN3JSC9ExecStateENS1_7JSValueERNS_15DOMWrapperWorldE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i2 + 16 | 0;
 i10 = HEAP32[(HEAP32[i9 >> 2] & -65536) + 1076 >> 2] | 0;
 i11 = i3 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 i12 = HEAP32[i11 + 4 >> 2] | 0;
 if ((HEAP32[i10 + 20444 >> 2] | 0) != 0) {
  _WTFCrash();
 }
 i11 = i10 + 20440 | 0;
 i13 = HEAP32[i11 >> 2] | 0;
 if ((i13 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i10 + 20360 | 0);
  i14 = HEAP32[i11 >> 2] | 0;
 } else {
  i14 = i13;
 }
 i13 = i14 + 12 | 0;
 HEAP32[i11 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i14 + 4 >> 2] = -6;
 HEAP32[i14 >> 2] = 0;
 i11 = i14 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i13 >> 2] = 0;
 i15 = i10 + 20420 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 HEAP32[i11 >> 2] = i10 + 20408;
 HEAP32[i13 >> 2] = i16;
 HEAP32[i15 >> 2] = i14;
 HEAP32[i16 + 8 >> 2] = i14;
 i16 = i14 | 0;
 i15 = i1 | 0;
 HEAP32[i15 >> 2] = i16;
 i13 = i7 | 0;
 HEAP32[i13 >> 2] = i3;
 HEAP32[i13 + 4 >> 2] = i12;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i14 & -4096) + 12 >> 2] | 0, i16, i7);
 i7 = HEAP32[i13 + 4 >> 2] | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 HEAP32[i16 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i16 + 4 >> 2] = i7;
 i7 = i1 + 4 | 0;
 i16 = i7 | 0;
 i13 = i1 + 8 | 0;
 i15 = i1 + 12 | 0;
 _memset(i7 | 0, 0, 16) | 0;
 HEAP32[i1 + 20 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i1 = i4 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 i1 = i2 + 32 | 0;
 if (((HEAP32[i1 >> 2] | 0) - 1 | 0) >>> 0 <= 2 >>> 0) {
  STACKTOP = i5;
  return;
 }
 i4 = i8 | 0;
 i14 = i6 | 0;
 i12 = i8;
 i3 = 2;
 while (1) {
  i10 = HEAP32[(HEAP32[i9 >> 2] & -65536) + 1076 >> 2] | 0;
  i11 = i2 + (i3 + 6 << 3) | 0;
  i17 = HEAP32[i11 >> 2] | 0;
  i18 = HEAP32[i11 + 4 >> 2] | 0;
  if ((HEAP32[i10 + 20444 >> 2] | 0) != 0) {
   i19 = 10;
   break;
  }
  i11 = i10 + 20440 | 0;
  i20 = HEAP32[i11 >> 2] | 0;
  if ((i20 | 0) == 0) {
   __ZN3JSC9HandleSet4growEv(i10 + 20360 | 0);
   i21 = HEAP32[i11 >> 2] | 0;
  } else {
   i21 = i20;
  }
  i20 = i21 + 12 | 0;
  HEAP32[i11 >> 2] = HEAP32[i20 >> 2];
  HEAP32[i21 + 4 >> 2] = -6;
  HEAP32[i21 >> 2] = 0;
  i11 = i21 + 8 | 0;
  HEAP32[i11 >> 2] = 0;
  HEAP32[i20 >> 2] = 0;
  i22 = i10 + 20420 | 0;
  i23 = HEAP32[i22 >> 2] | 0;
  HEAP32[i11 >> 2] = i10 + 20408;
  HEAP32[i20 >> 2] = i23;
  HEAP32[i22 >> 2] = i21;
  HEAP32[i23 + 8 >> 2] = i21;
  i23 = i21 | 0;
  HEAP32[i4 >> 2] = i23;
  HEAP32[i14 >> 2] = i17;
  HEAP32[i14 + 4 >> 2] = i18;
  __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i21 & -4096) + 12 >> 2] | 0, i23, i6);
  i23 = HEAP32[i14 + 4 >> 2] | 0;
  i18 = HEAP32[i4 >> 2] | 0;
  HEAP32[i18 >> 2] = HEAP32[i14 >> 2];
  HEAP32[i18 + 4 >> 2] = i23;
  i23 = HEAP32[i15 >> 2] | 0;
  if ((i23 | 0) == (HEAP32[i13 >> 2] | 0)) {
   i18 = i23 + 1 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   do {
    if (i17 >>> 0 > i8 >>> 0) {
     i19 = 17;
    } else {
     if ((i17 + (i23 << 2) | 0) >>> 0 <= i8 >>> 0) {
      i19 = 17;
      break;
     }
     __ZN3WTF6VectorIN3JSC6StrongINS1_7UnknownEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i7, i18);
     i22 = HEAP32[i16 >> 2] | 0;
     i24 = i22 + (i12 - i17 >> 2 << 2) | 0;
     i25 = i22;
    }
   } while (0);
   if ((i19 | 0) == 17) {
    i19 = 0;
    __ZN3WTF6VectorIN3JSC6StrongINS1_7UnknownEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i7, i18);
    i24 = i8;
    i25 = HEAP32[i16 >> 2] | 0;
   }
   __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i25 + (HEAP32[i15 >> 2] << 2) | 0, i24);
  } else {
   __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_((HEAP32[i16 >> 2] | 0) + (i23 << 2) | 0, i8);
  }
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  i17 = HEAP32[i4 >> 2] | 0;
  if ((i17 | 0) != 0) {
   i22 = HEAP32[(i17 & -4096) + 12 >> 2] | 0;
   i20 = i17;
   i10 = i22 + 84 | 0;
   i11 = i20 + 12 | 0;
   if ((i20 | 0) == (HEAP32[i10 >> 2] | 0)) {
    HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
   }
   i10 = i17 + 8 | 0;
   i17 = HEAP32[i10 >> 2] | 0;
   i26 = HEAP32[i11 >> 2] | 0;
   HEAP32[i17 + 12 >> 2] = i26;
   HEAP32[i26 + 8 >> 2] = i17;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i11 >> 2] = 0;
   i10 = i22 + 80 | 0;
   HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i10 >> 2] = i20;
   HEAP32[i4 >> 2] = 0;
  }
  i20 = i3 + 1 | 0;
  if (i20 >>> 0 < ((HEAP32[i1 >> 2] | 0) - 1 | 0) >>> 0) {
   i3 = i20;
  } else {
   i19 = 26;
   break;
  }
 }
 if ((i19 | 0) == 10) {
  _WTFCrash();
 } else if ((i19 | 0) == 26) {
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore15ScheduledAction6createEPN3JSC9ExecStateERNS_15DOMWrapperWorldEPNS_21ContentSecurityPolicyE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 if ((HEAP32[i2 + 32 >> 2] | 0) == 1) {
  HEAP32[i7 + 4 >> 2] = -4;
  HEAP32[i7 >> 2] = 0;
  i10 = i7 | 0;
  i11 = HEAP32[i10 + 4 >> 2] | 0;
  i12 = HEAP32[i10 >> 2] | 0;
 } else {
  i10 = i2 + 48 | 0;
  i13 = HEAP32[i10 >> 2] | 0;
  i14 = HEAP32[i10 + 4 >> 2] | 0;
  i10 = i7 | 0;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i14;
  i11 = i14;
  i12 = i13;
 }
 i13 = i7 | 0;
 i14 = i12;
 do {
  if ((i12 & 0 | 0) == 0 & (i11 & -1 | 0) == (-5 | 0)) {
   i10 = i14;
   i15 = HEAP32[i10 >> 2] | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     if ((i16 | 0) == (HEAP32[i16 >> 2] | 0)) {
      break;
     }
     _WTFCrash();
    }
   } while (0);
   if ((FUNCTION_TABLE_iii[HEAP32[(HEAP32[((HEAP32[(i14 & -65536) + 1048 >> 2] | 0) == 2 ? i10 + 8 | 0 : i15 + 32 | 0) >> 2] | 0) + 28 >> 2] & 1](i10, i8) | 0) == 0) {
    break;
   }
   i16 = __ZN3WTF10fastMallocEj(24) | 0;
   i17 = HEAP32[i13 + 4 >> 2] | 0;
   i18 = i9 | 0;
   HEAP32[i18 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i18 + 4 >> 2] = i17;
   __ZN7WebCore15ScheduledActionC2EPN3JSC9ExecStateENS1_7JSValueERNS_15DOMWrapperWorldE(i16, i2, i9, i3);
   HEAP32[i1 >> 2] = i16;
   STACKTOP = i5;
   return;
  }
 } while (0);
 do {
  if ((i4 | 0) != 0) {
   if (__ZNK7WebCore21ContentSecurityPolicy9allowEvalEPN3JSC9ExecStateENS0_15ReportingStatusE(i4, i2, 0) | 0) {
    break;
   }
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i5;
   return;
  }
 } while (0);
 do {
  if ((HEAP32[i7 + 4 >> 2] | 0) == -5) {
   i4 = HEAP32[i7 >> 2] | 0;
   if ((HEAP8[(HEAP32[i4 >> 2] | 0) + 52 | 0] | 0) != 5) {
    i19 = 15;
    break;
   }
   i20 = i4;
  } else {
   i19 = 15;
  }
 } while (0);
 if ((i19 | 0) == 15) {
  i20 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i7, i2) | 0;
 }
 i7 = i20 + 12 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i20, i2);
  i20 = HEAP32[i7 >> 2] | 0;
  if ((i20 | 0) == 0) {
   i21 = 0;
   i22 = 1;
  } else {
   i23 = i20;
   i19 = 18;
  }
 } else {
  i23 = i4;
  i19 = 18;
 }
 if ((i19 | 0) == 18) {
  i19 = i23 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
  i21 = i23;
  i22 = 0;
 }
 i23 = (HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 if ((HEAP32[i23 >> 2] & 0 | 0) == 0 & (HEAP32[i23 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
  i23 = __ZN3WTF10fastMallocEj(24) | 0;
  i2 = HEAP32[i3 + 68 >> 2] | 0;
  if ((HEAP32[i2 + 20444 >> 2] | 0) != 0) {
   _WTFCrash();
  }
  i19 = i2 + 20440 | 0;
  i4 = HEAP32[i19 >> 2] | 0;
  if ((i4 | 0) == 0) {
   __ZN3JSC9HandleSet4growEv(i2 + 20360 | 0);
   i24 = HEAP32[i19 >> 2] | 0;
  } else {
   i24 = i4;
  }
  i4 = i24 + 12 | 0;
  HEAP32[i19 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i24 + 4 >> 2] = -6;
  HEAP32[i24 >> 2] = 0;
  i19 = i24 + 8 | 0;
  HEAP32[i19 >> 2] = 0;
  HEAP32[i4 >> 2] = 0;
  i20 = i2 + 20420 | 0;
  i7 = HEAP32[i20 >> 2] | 0;
  HEAP32[i19 >> 2] = i2 + 20408;
  HEAP32[i4 >> 2] = i7;
  HEAP32[i20 >> 2] = i24;
  HEAP32[i7 + 8 >> 2] = i24;
  i7 = i24 | 0;
  i20 = i23;
  HEAP32[i20 >> 2] = i7;
  i4 = i6 | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i4 + 4 >> 2] = -6;
  __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i24 & -4096) + 12 >> 2] | 0, i7, i6);
  i6 = HEAP32[i4 + 4 >> 2] | 0;
  i7 = HEAP32[i20 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i7 + 4 >> 2] = i6;
  HEAP32[i23 + 4 >> 2] = 0;
  HEAP32[i23 + 8 >> 2] = 0;
  HEAP32[i23 + 12 >> 2] = 0;
  HEAP32[i23 + 16 >> 2] = i21;
  if (!i22) {
   i6 = i21 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
  }
  HEAP32[i23 + 20 >> 2] = i3;
  i6 = i3 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  HEAP32[i1 >> 2] = i23;
 } else {
  HEAP32[i1 >> 2] = 0;
 }
 if (i22) {
  STACKTOP = i5;
  return;
 }
 i22 = i21 | 0;
 i1 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i21);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i22 >> 2] = i1;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore21JSMainThreadExecState22instrumentFunctionCallEPNS_22ScriptExecutionContextEN3JSC8CallTypeERKNS3_8CallDataE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 if (!(__ZN7WebCore24InspectorInstrumentation20timelineAgentEnabledEPNS_22ScriptExecutionContextE(i2) | 0)) {
  __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i1);
  STACKTOP = i5;
  return;
 }
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = 0;
 do {
  if ((i3 | 0) == 2) {
   i9 = i4 | 0;
   i10 = HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 36 >> 2] | 0) + 8 >> 2] | 0;
   do {
    if ((i10 | 0) == 0) {
     HEAP32[i8 >> 2] = i10;
    } else {
     i11 = i10 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
     i11 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = i10;
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
   i14 = HEAP32[(HEAP32[i9 >> 2] | 0) + 64 >> 2] | 0;
  } else {
   __ZN3WTF6StringC1EPKc(i7, H_BASE + 8 | 0);
   i10 = i7 | 0;
   i13 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   i12 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i13;
   do {
    if ((i12 | 0) != 0) {
     i13 = i12 | 0;
     i11 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i13 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i10 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i14 = 1;
    break;
   }
   i9 = i12 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    i14 = 1;
    break;
   } else {
    HEAP32[i9 >> 2] = i11;
    i14 = 1;
    break;
   }
  }
 } while (0);
 L27 : do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
   __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i1);
  } else {
   do {
    if ((i2 | 0) != 0) {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 3](i2) | 0) {
      i15 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(__ZNK7WebCore8Document4pageEv(i2 - 156 + 68 | 0) | 0) | 0;
     } else {
      i15 = __ZN7WebCore24InspectorInstrumentation40instrumentingAgentsForNonDocumentContextEPNS_22ScriptExecutionContextE(i2) | 0;
     }
     if ((i15 | 0) == 0) {
      break;
     }
     __ZN7WebCore24InspectorInstrumentation20willCallFunctionImplEPNS_19InstrumentingAgentsERKN3WTF6StringEiPNS_22ScriptExecutionContextE(i1, i15, i6, i14, i2);
     break L27;
    }
   } while (0);
   __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i1);
  }
 } while (0);
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = i1 | 0;
 i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i8 >> 2] = i2;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore16ScriptSourceCodeC2ERKN3WTF6StringERKNS_3URLERKNS1_12TextPositionE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i3 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i6 | 0;
 if ((i8 | 0) == 0) {
  HEAP32[i9 >> 2] = 0;
  i10 = 0;
  i11 = 1;
 } else {
  HEAP32[i9 >> 2] = i8;
  i12 = i8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
  i10 = 1;
  i11 = 0;
 }
 i12 = __ZN3WTF10fastMallocEj(28) | 0;
 i8 = i12;
 __ZN3JSC14SourceProviderC2ERKN3WTF6StringERKNS1_12TextPositionE(i8, i6, i4);
 HEAP32[i12 >> 2] = H_BASE + 32;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i12 + 24 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i12 = i6 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = i1 | 0;
 HEAP32[i12 >> 2] = i8;
 do {
  if (i10) {
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i6 = i8 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 do {
  if (i11) {
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i2 = i10 | 0;
   i6 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i2 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i12 = i9 + 4 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 i11 = (HEAP32[i4 + 4 >> 2] | 0) + 1 | 0;
 HEAP32[i1 + 4 >> 2] = i9;
 HEAP32[i1 + 8 >> 2] = 0;
 i4 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 3](i9) | 0) >> 2] | 0;
 if ((i4 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = HEAP32[i4 + 4 >> 2] | 0;
 }
 HEAP32[i1 + 12 >> 2] = i13;
 HEAP32[i1 + 16 >> 2] = (i12 | 0) < 1 ? 1 : i12;
 HEAP32[i1 + 20 >> 2] = (i11 | 0) < 1 ? 1 : i11;
 __ZN7WebCore24CachedResourceHandleBaseC2Ev(i1 + 24 | 0);
 i11 = HEAP32[i7 >> 2] | 0;
 HEAP32[i1 + 28 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i7 = i11 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i3 + 4 | 0;
 i11 = i1 + 32 | 0;
 i12 = HEAP8[i11] & -2 | HEAP8[i7] & 1;
 HEAP8[i11] = i12;
 HEAP8[i11] = i12 & -3 | HEAP8[i7] & 2;
 HEAP32[i1 + 36 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i3 + 16 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i3 + 20 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i3 + 24 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i3 + 28 >> 2];
 HEAP32[i1 + 60 >> 2] = HEAP32[i3 + 32 >> 2];
 HEAP32[i1 + 64 >> 2] = HEAP32[i3 + 36 >> 2];
 HEAP32[i1 + 68 >> 2] = HEAP32[i3 + 40 >> 2];
 HEAP32[i1 + 72 >> 2] = HEAP32[i3 + 44 >> 2];
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15ScheduledAction7executeEPNS_17WorkerGlobalScopeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 88 | 0;
 i7 = HEAP32[i2 + 260 >> 2] | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((HEAP32[i8 + 4 >> 2] | 0) == -6) {
    break;
   }
   i9 = i7 + 8 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i11 = 5;
   } else {
    if ((HEAP32[i10 + 4 >> 2] | 0) == -6) {
     i11 = 5;
    } else {
     i12 = i10;
     i11 = 7;
    }
   }
   do {
    if ((i11 | 0) == 5) {
     __ZN7WebCore22WorkerScriptController10initScriptEv(i7);
     i10 = HEAP32[i9 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i13 = 0;
      break;
     }
     if ((HEAP32[i10 + 4 >> 2] | 0) == -6) {
      i13 = 0;
     } else {
      i12 = i10;
      i11 = 7;
     }
    }
   } while (0);
   if ((i11 | 0) == 7) {
    i13 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i4 + 4 >> 2] = (i13 | 0) == 0 ? -6 : -5;
   HEAP32[i4 >> 2] = i13;
   __ZN7WebCore15ScheduledAction24executeFunctionInContextEPN3JSC14JSGlobalObjectENS1_7JSValueEPNS_22ScriptExecutionContextE(i1, i13, i4, i2 | 0);
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 __ZN7WebCore16ScriptSourceCodeC2ERKN3WTF6StringERKNS_3URLERKNS1_12TextPositionE(i5, i1 + 16 | 0, i2 + 196 | 0, i6);
 __ZN7WebCore22WorkerScriptController8evaluateERKNS_16ScriptSourceCodeE(i7, i5);
 i7 = HEAP32[i5 + 28 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i5 + 24 | 0);
 i7 = HEAP32[i5 + 4 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i6 = i2 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i6 >> 2] = i1;
    break;
   }
   i1 = i2 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 7](i1);
  }
 } while (0);
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i7 + 4 | 0;
 i7 = i5 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i7 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 7](i1);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 HEAP32[i2 >> 2] = -1;
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i3 = i1 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i1 + 4 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if (!((i4 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  return;
 }
 i4 = (i5 | 0) / 2 & -1;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i4 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i4 << 2) | 0;
 if ((i5 | 0) != 0) {
  i4 = 0;
  while (1) {
   i1 = HEAP32[i7 + (i4 << 2) >> 2] | 0;
   i8 = i1;
   if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
    i9 = HEAP32[i6 >> 2] | 0;
    i10 = HEAP32[i3 >> 2] | 0;
    i11 = i8 + ~(i8 << 15) | 0;
    i8 = (i11 >>> 10 ^ i11) * 9 & -1;
    i11 = i8 >>> 6 ^ i8;
    i8 = i11 + ~(i11 << 11) | 0;
    i11 = i8 >>> 16 ^ i8;
    i8 = i10 & i11;
    i12 = i9 + (i8 << 2) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    L9 : do {
     if ((i13 | 0) == 0) {
      i14 = 0;
      i15 = i12;
      i16 = 6;
     } else {
      i17 = (i11 >>> 23) + ~i11 | 0;
      i18 = i17 << 12 ^ i17;
      i17 = i18 >>> 7 ^ i18;
      i18 = i17 << 2 ^ i17;
      i17 = i18 >>> 20 ^ i18 | 1;
      i18 = 0;
      i19 = 0;
      i20 = i8;
      i21 = i12;
      i22 = i13;
      while (1) {
       if ((i22 | 0) == (i1 | 0)) {
        i23 = i21;
        break L9;
       }
       i24 = (i22 | 0) == -1 ? i21 : i18;
       i25 = (i19 | 0) == 0 ? i17 : i19;
       i26 = i25 + i20 & i10;
       i27 = i9 + (i26 << 2) | 0;
       i28 = HEAP32[i27 >> 2] | 0;
       if ((i28 | 0) == 0) {
        i14 = i24;
        i15 = i27;
        i16 = 6;
        break;
       } else {
        i18 = i24;
        i19 = i25;
        i20 = i26;
        i21 = i27;
        i22 = i28;
       }
      }
     }
    } while (0);
    if ((i16 | 0) == 6) {
     i16 = 0;
     i23 = (i14 | 0) != 0 ? i14 : i15;
    }
    HEAP32[i23 >> 2] = i1;
   }
   i4 = i4 + 1 | 0;
   if ((i4 | 0) == (i5 | 0)) {
    break;
   }
  }
 }
 HEAP32[i2 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 return;
}
function __ZN7WebCore15ScheduledAction7executeEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 20 | 0;
 i7 = __ZN7WebCore13toJSDOMWindowEPNS_5FrameERNS_15DOMWrapperWorldE(HEAP32[i2 + 332 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[(HEAP32[i7 + 660 >> 2] | 0) + 52 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i8 + 4 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 i9 = i8 + 460 | 0;
 L7 : do {
  if (__ZN7WebCore16ScriptController17canExecuteScriptsENS_33ReasonForCallingCanExecuteScriptsE(HEAP32[i9 >> 2] | 0, 0) | 0) {
   i10 = HEAP32[i1 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     if ((HEAP32[i10 + 4 >> 2] | 0) == -6) {
      break;
     }
     i11 = __ZNK7WebCore15JSDOMWindowBase5shellEv(i7 | 0) | 0;
     HEAP32[i4 + 4 >> 2] = (i11 | 0) == 0 ? -6 : -5;
     HEAP32[i4 >> 2] = i11;
     __ZN7WebCore15ScheduledAction24executeFunctionInContextEPN3JSC14JSGlobalObjectENS1_7JSValueEPNS_22ScriptExecutionContextE(i1, i7, i4, (i2 | 0) == 0 ? 0 : i2 + 88 | 0);
     break L7;
    }
   } while (0);
   __ZN7WebCore16ScriptController20executeScriptInWorldERNS_15DOMWrapperWorldERKN3WTF6StringEb(i5, HEAP32[i9 >> 2] | 0, HEAP32[i6 >> 2] | 0, i1 + 16 | 0, 0);
   __ZN10Deprecated11ScriptValueD1Ev(i5);
  }
 } while (0);
 i5 = i8 + 4 | 0;
 i8 = i5 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i8 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 7](i1);
 STACKTOP = i3;
 return;
}
function __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
 __ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_(i1 | 0, i5);
 i21 = 1;
 return i21 | 0;
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
function __ZN3WTF6VectorIN3JSC6StrongINS1_7UnknownEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3JSC20StringSourceProviderD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
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
 __ZN3JSC14SourceProviderD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3JSC20StringSourceProviderD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
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
 __ZN3JSC14SourceProviderD2Ev(i1 | 0);
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
function __ZN7WebCore15ScheduledAction7executeEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 3](i2) | 0) {
  __ZN7WebCore15ScheduledAction7executeEPNS_8DocumentE(i1, i2 - 156 + 68 | 0);
  return;
 } else {
  __ZN7WebCore15ScheduledAction7executeEPNS_17WorkerGlobalScopeE(i1, i2);
  return;
 }
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
function runPostSets() {
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 2;
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
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
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
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function __ZNK3JSC20StringSourceProvider6sourceEv(i1) {
 i1 = i1 | 0;
 return i1 + 24 | 0;
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
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN3JSC20StringSourceProviderD0Ev,b0,__ZN3JSC20StringSourceProviderD1Ev,b0,b0,b0];
  var FUNCTION_TABLE_ii = [b1,b1,__ZNK3JSC20StringSourceProvider6sourceEv,b1];
  var FUNCTION_TABLE_v = [b2,b2];
  var FUNCTION_TABLE_iii = [b3,b3];
  var FUNCTION_TABLE_viiii = [b4,b4,__ZN7WebCore15ScheduledActionC2EPN3JSC9ExecStateENS1_7JSValueERNS_15DOMWrapperWorldE,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE, "__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE": __ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore15ScheduledAction24executeFunctionInContextEPN3JSC14JSGlobalObjectENS1_7JSValueEPNS_22ScriptExecutionContextE","__ZNK3JSC20StringSourceProvider6sourceEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF6VectorIN3JSC6StrongINS1_7UnknownEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3JSC6StrongINS_7UnknownEEC2ERKS2_","__ZN3JSC20StringSourceProviderD0Ev","__ZN7WebCore15ScheduledAction7executeEPNS_17WorkerGlobalScopeE","__ZN7WebCore15ScheduledAction7executeEPNS_8DocumentE","_memset","__ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","_memcpy","_strlen","__ZN7WebCore15ScheduledActionC2EPN3JSC9ExecStateENS1_7JSValueERNS_15DOMWrapperWorldE","__ZN7WebCore15ScheduledAction7executeEPNS_22ScriptExecutionContextE","__ZN7WebCore21JSMainThreadExecState22instrumentFunctionCallEPNS_22ScriptExecutionContextEN3JSC8CallTypeERKNS3_8CallDataE","__ZN3JSC20StringSourceProviderD1Ev","__ZN7WebCore16ScriptSourceCodeC2ERKN3WTF6StringERKNS_3URLERKNS1_12TextPositionE","__ZN7WebCore15ScheduledAction6createEPN3JSC9ExecStateERNS_15DOMWrapperWorldEPNS_21ContentSecurityPolicyE","__ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_"]

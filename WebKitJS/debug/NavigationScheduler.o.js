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
H_BASE = parentModule["_malloc"](336 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 336;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore19NavigationSchedulerC1EPNS_5FrameE;
var __ZN7WebCore19NavigationSchedulerD1Ev;
/* memory initializer */ allocate([71,69,84,0,0,0,0,0,95,115,101,108,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_did(index,a1,a2) {
  try {
    return Module["dynCall_did"](index,a1,a2);
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
  var __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE=env.__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore17ScheduledRedirectE=(H_BASE+256)|0;
  var __ZTVN7WebCore22ScheduledURLNavigationE=(H_BASE+176)|0;
  var __ZTVN7WebCore16ScheduledRefreshE=(H_BASE+296)|0;
  var __ZTVN7WebCore23ScheduledFormSubmissionE=(H_BASE+136)|0;
  var __ZTVN7WebCore23ScheduledLocationChangeE=(H_BASE+96)|0;
  var __ZTVN7WebCore26ScheduledHistoryNavigationE=(H_BASE+56)|0;
  var __ZTVN7WebCore19ScheduledNavigationE=(H_BASE+216)|0;
  var __ZTVN7WebCore5TimerINS_19NavigationSchedulerEEE=(H_BASE+24)|0;
  var __ZN7WebCore33NavigationDisablerForBeforeUnload24s_navigationDisableCountE=(H_BASE+336)|0;
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
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore19NavigationScheduler22scheduleLocationChangeEPNS_14SecurityOriginERKN3WTF6StringES6_bb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i8 = i7 | 0;
 i9 = i7 + 48 | 0;
 i10 = i7 + 96 | 0;
 i11 = i1 | 0;
 if ((HEAP32[(HEAP32[i11 >> 2] | 0) + 32 >> 2] | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i12 = __ZN7WebCore20protocolIsJavaScriptERKN3WTF6StringE(i3) | 0;
 if (!(i12 | (HEAP32[H_BASE + 336 >> 2] | 0) == 0)) {
  STACKTOP = i7;
  return;
 }
 i12 = i3 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 L13 : do {
  if (i6) {
   i14 = 1;
  } else {
   i13 = HEAP32[i11 >> 2] | 0;
   do {
    if (!(__ZN7WebCore16ScriptController21processingUserGestureEv() | 0)) {
     i15 = HEAP32[i13 + 128 >> 2] | 0;
     if ((i15 | 0) == 0) {
      break;
     }
     if ((HEAP8[i15 + 978 | 0] & 1) == 0) {
      i14 = 1;
      break L13;
     }
    }
   } while (0);
   i15 = __ZNK7WebCore9FrameTree6parentEv(i13 + 40 | 0) | 0;
   if ((i15 | 0) == 0) {
    i14 = 0;
    break;
   } else {
    i16 = i15;
   }
   while (1) {
    i15 = HEAP32[i16 + 456 >> 2] | 0;
    if (!(__ZNK7WebCore11FrameLoader10isCompleteEv(i16 + 80 | 0) | 0)) {
     i14 = 1;
     break L13;
    }
    if ((i15 | 0) != 0) {
     if ((HEAP8[i15 + 1244 | 0] & 1) != 0) {
      i14 = 1;
      break L13;
     }
    }
    i15 = __ZNK7WebCore9FrameTree6parentEv(i16 + 40 | 0) | 0;
    if ((i15 | 0) == 0) {
     i14 = 0;
     break;
    } else {
     i16 = i15;
    }
   }
  }
 } while (0);
 i16 = HEAP32[i11 >> 2] | 0;
 i6 = i16 + 80 | 0;
 __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i8, 0, i3);
 do {
  if (__ZNK7WebCore3URL21hasFragmentIdentifierEv(i8) | 0) {
   if (!(__ZN7WebCore31equalIgnoringFragmentIdentifierERKNS_3URLES2_((HEAP32[(HEAP32[i11 >> 2] | 0) + 456 >> 2] | 0) + 356 | 0, i8) | 0)) {
    i17 = 20;
    break;
   }
   __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i9, HEAP32[(HEAP32[i11 >> 2] | 0) + 456 >> 2] | 0, i3);
   __ZN7WebCore11FrameLoader14changeLocationEPNS_14SecurityOriginERKNS_3URLERKN3WTF6StringEbbb(i6, i2, i9, i4, i5, i14, 0);
   i13 = HEAP32[i9 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i15 = i13 | 0;
   i18 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i15 >> 2] = i18;
    break;
   }
  } else {
   i17 = 20;
  }
 } while (0);
 do {
  if ((i17 | 0) == 20) {
   i9 = __ZNK7WebCore23FrameLoaderStateMachine30committedFirstRealDocumentLoadEv(i16 + 104 | 0) | 0;
   i6 = __ZN3WTF10fastMallocEj(40) | 0;
   i3 = i6;
   HEAP32[i3 >> 2] = H_BASE + 224;
   HEAPF64[i6 + 8 >> 3] = +0;
   HEAP8[i6 + 16 | 0] = i5 & 1;
   HEAP8[i6 + 17 | 0] = i14 & 1;
   HEAP8[i6 + 18 | 0] = i9 & 1 ^ 1;
   HEAP8[i6 + 19 | 0] = 1;
   HEAP8[i6 + 20 | 0] = (__ZN7WebCore16ScriptController21processingUserGestureEv() | 0) & 1;
   HEAP32[i3 >> 2] = H_BASE + 184;
   HEAP32[i6 + 24 >> 2] = i2;
   if ((i2 | 0) != 0) {
    i9 = i2 | 0;
    tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue + 1, tempValue;
   }
   i9 = HEAP32[i12 >> 2] | 0;
   HEAP32[i6 + 28 >> 2] = i9;
   if ((i9 | 0) != 0) {
    i11 = i9 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   }
   i11 = HEAP32[i4 >> 2] | 0;
   HEAP32[i6 + 32 >> 2] = i11;
   if ((i11 | 0) != 0) {
    i9 = i11 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   HEAP8[i6 + 36 | 0] = 0;
   HEAP32[i3 >> 2] = H_BASE + 104;
   i3 = i10 | 0;
   HEAP32[i3 >> 2] = i6;
   __ZN7WebCore19NavigationScheduler8scheduleEN3WTF10PassOwnPtrINS_19ScheduledNavigationEEE(i1, i10);
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i8 = i10 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i8 >> 2] = i1;
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore23ScheduledFormSubmission4fireEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 336 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 320 | 0;
 i7 = i3 + 328 | 0;
 __ZN7WebCore20UserGestureIndicatorC1ENS_26ProcessingUserGestureStateE(i4, (HEAP8[i1 + 20 | 0] & 1) != 0 ? 0 : 2);
 i8 = i1 + 24 | 0;
 i9 = HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 64 >> 2] | 0) + 20 >> 2] | 0;
 if (!(__ZN7WebCore8Document11canNavigateEPNS_5FrameE(i9, i2) | 0)) {
  __ZN7WebCore20UserGestureIndicatorD1Ev(i4);
  STACKTOP = i3;
  return;
 }
 i10 = HEAP32[i9 + 100 >> 2] | 0;
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i11 = i10 | 0;
  tempValue = HEAP32[i11 >> 2] | 0, HEAP32[i11 >> 2] = tempValue + 1, tempValue;
 }
 i11 = i5 + 8 | 0;
 __ZN7WebCore15ResourceRequestC2Ev(i11);
 i10 = i5 + 192 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP8[i5 + 196 | 0] = 0;
 HEAP8[i5 + 197 | 0] = 0;
 i12 = i5 + 200 | 0;
 _memset(i12 | 0, 0, 16) | 0;
 __ZN7WebCore3URL10invalidateEv(i5 + 212 | 0);
 i13 = i5 + 260 | 0;
 HEAP32[i13 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i13);
 HEAP8[i5 + 308 | 0] = 0;
 __ZN7WebCore14FormSubmission24populateFrameLoadRequestERNS_16FrameLoadRequestE(HEAP32[i8 >> 2] | 0, i5);
 i13 = (HEAP8[i1 + 16 | 0] & 1) != 0;
 i14 = (HEAP8[i1 + 17 | 0] & 1) != 0;
 i1 = HEAP32[i8 >> 2] | 0;
 i15 = HEAP32[i1 + 80 >> 2] | 0;
 i16 = i6 | 0;
 HEAP32[i16 >> 2] = i15;
 if ((i15 | 0) == 0) {
  i17 = i1;
 } else {
  i1 = i15 + 8 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  i17 = HEAP32[i8 >> 2] | 0;
 }
 i8 = HEAP32[i17 + 64 >> 2] | 0;
 i17 = i7 | 0;
 HEAP32[i17 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i1 = i8 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 __ZN7WebCore11FrameLoader16loadFrameRequestERKNS_16FrameLoadRequestEbbN3WTF10PassRefPtrINS_5EventEEENS5_INS_9FormStateEEENS_18ShouldSendReferrerE(i2 + 80 | 0, i5, i13, i14, i6, i7, 0);
 i7 = HEAP32[i17 >> 2] | 0;
 if ((i7 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i7 | 0);
 }
 i7 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i16 = i7 + 8 | 0;
   i17 = i16 | 0;
   i6 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i17 >> 2] = i6;
    break;
   }
   i6 = i16 - 8 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 __ZN7WebCore14SubstituteDataD2Ev(i12);
 i12 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i10 = i12 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15ResourceRequestD2Ev(i11);
 i11 = HEAP32[i9 >> 2] | 0;
 if ((i11 | 0) == 0) {
  __ZN7WebCore20UserGestureIndicatorD1Ev(i4);
  STACKTOP = i3;
  return;
 }
 i9 = i11 | 0;
 if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  __ZN7WebCore20UserGestureIndicatorD1Ev(i4);
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i11);
 __ZN3WTF8fastFreeEPv(i11);
 __ZN7WebCore20UserGestureIndicatorD1Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17ScheduledRedirect4fireEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 56 | 0;
 i7 = i3 + 64 | 0;
 i8 = i3 + 112 | 0;
 i9 = i3 + 120 | 0;
 __ZN7WebCore20UserGestureIndicatorC1ENS_26ProcessingUserGestureStateE(i4, (HEAP8[i1 + 20 | 0] & 1) != 0 ? 0 : 2);
 i10 = (HEAP32[i2 + 456 >> 2] | 0) + 356 | 0;
 i11 = i6 | 0;
 i12 = i1 + 28 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 HEAP32[i11 >> 2] = i13;
 if ((i13 | 0) != 0) {
  i14 = i13 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
 }
 __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i5, 0, i6);
 i6 = __ZN7WebCore31equalIgnoringFragmentIdentifierERKNS_3URLES2_(i10, i5) | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i5 = i10 | 0;
   i14 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i5 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i11 = i10 | 0;
   i14 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i11 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i1 + 24 >> 2] | 0;
 i14 = i8 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 HEAP32[i14 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i12 = i11 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i7, 0, i8);
 i8 = i9 | 0;
 i12 = HEAP32[i1 + 32 >> 2] | 0;
 HEAP32[i8 >> 2] = i12;
 if ((i12 | 0) != 0) {
  i11 = i12 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 __ZN7WebCore11FrameLoader14changeLocationEPNS_14SecurityOriginERKNS_3URLERKN3WTF6StringEbbb(i2 + 80 | 0, i10, i7, i9, (HEAP8[i1 + 16 | 0] & 1) != 0, (HEAP8[i1 + 17 | 0] & 1) != 0, i6);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i8 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i14 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore20UserGestureIndicatorD1Ev(i4);
  STACKTOP = i3;
  return;
 }
 i14 = i6 | 0;
 i1 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  __ZN7WebCore20UserGestureIndicatorD1Ev(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i14 >> 2] = i1;
  __ZN7WebCore20UserGestureIndicatorD1Ev(i4);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore14FormSubmissionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 88 >> 2] | 0;
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
 i2 = HEAP32[i1 + 84 >> 2] | 0;
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
 i2 = HEAP32[i1 + 80 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 8 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i2 | 0);
 }
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
function __ZN7WebCore19NavigationScheduler22scheduleFormSubmissionEN3WTF10PassRefPtrINS_14FormSubmissionEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 i6 = __ZNK7WebCore23FrameLoaderStateMachine30committedFirstRealDocumentLoadEv((HEAP32[i5 >> 2] | 0) + 104 | 0) | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if (__ZN7WebCore16ScriptController21processingUserGestureEv() | 0) {
   i8 = 4;
  } else {
   i9 = HEAP32[i7 + 128 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i8 = 4;
    break;
   }
   if ((HEAP8[i9 + 978 | 0] & 1) == 0) {
    i10 = 1;
   } else {
    i8 = 4;
   }
  }
 } while (0);
 L4 : do {
  if ((i8 | 0) == 4) {
   i9 = __ZNK7WebCore9FrameTree6parentEv(i7 + 40 | 0) | 0;
   if ((i9 | 0) != 0) {
    i11 = i9;
    while (1) {
     i9 = HEAP32[i11 + 456 >> 2] | 0;
     if (!(__ZNK7WebCore11FrameLoader10isCompleteEv(i11 + 80 | 0) | 0)) {
      i10 = 1;
      break L4;
     }
     if ((i9 | 0) != 0) {
      if ((HEAP8[i9 + 1244 | 0] & 1) != 0) {
       i10 = 1;
       break L4;
      }
     }
     i11 = __ZNK7WebCore9FrameTree6parentEv(i11 + 40 | 0) | 0;
     if ((i11 | 0) == 0) {
      break;
     }
    }
   }
   if ((HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 64 >> 2] | 0) + 24 >> 2] | 0) != 0) {
    i10 = 0;
    break;
   }
   if ((__ZNK7WebCore9FrameTree6parentEv((HEAP32[i5 >> 2] | 0) + 40 | 0) | 0) == 0) {
    i10 = 0;
    break;
   }
   i10 = (__ZN7WebCore16ScriptController21processingUserGestureEv() | 0) & 1 ^ 1;
  }
 } while (0);
 i5 = __ZN3WTF10fastMallocEj(32) | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = HEAP8[i2 + 76 | 0] & 1;
 i8 = i5;
 HEAP32[i8 >> 2] = H_BASE + 224;
 HEAPF64[i5 + 8 >> 3] = +0;
 HEAP8[i5 + 16 | 0] = i7;
 HEAP8[i5 + 17 | 0] = i10;
 HEAP8[i5 + 18 | 0] = i6 & 1 ^ 1;
 HEAP8[i5 + 19 | 0] = 1;
 HEAP8[i5 + 20 | 0] = (__ZN7WebCore16ScriptController21processingUserGestureEv() | 0) & 1;
 HEAP32[i8 >> 2] = H_BASE + 144;
 HEAP32[i5 + 24 >> 2] = i2;
 HEAP8[i5 + 28 | 0] = 0;
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = i5;
 __ZN7WebCore19NavigationScheduler8scheduleEN3WTF10PassOwnPtrINS_19ScheduledNavigationEEE(i1, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore19NavigationScheduler8scheduleEN3WTF10PassOwnPtrINS_19ScheduledNavigationEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 4 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i2 | 0;
 if ((HEAP8[(HEAP32[i5 >> 2] | 0) + 18 | 0] & 1) != 0) {
  i2 = HEAP32[i3 >> 2] | 0;
  i6 = HEAP32[i2 + 132 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = i2;
  } else {
   __ZN7WebCore14DocumentLoader11stopLoadingEv(i6);
   i7 = HEAP32[i3 >> 2] | 0;
  }
  __ZN7WebCore11FrameLoader11stopLoadingENS_17UnloadEventPolicyE(i7 + 80 | 0, 2);
 }
 i7 = i1 + 8 | 0;
 do {
  if (+HEAPF64[i1 + 16 >> 3] != +0) {
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i2 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i6 + 32 >> 2] | 0) | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation35frameClearedScheduledNavigationImplEPNS_19InstrumentingAgentsEPNS_5FrameE(i2, i6);
  }
 } while (0);
 __ZN7WebCore9TimerBase4stopEv(i7);
 i7 = i1 + 64 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 do {
  if ((i6 | 0) == 0) {
   i2 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   HEAP32[i7 >> 2] = i2;
  } else {
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 15](i6, HEAP32[i3 >> 2] | 0, 0);
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
   i2 = HEAP32[i7 >> 2] | 0;
   i8 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   HEAP32[i7 >> 2] = i8;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
  }
 } while (0);
 do {
  if (!(__ZNK7WebCore11FrameLoader10isCompleteEv((HEAP32[i3 >> 2] | 0) + 80 | 0) | 0)) {
   if ((HEAP8[(HEAP32[i7 >> 2] | 0) + 19 | 0] & 1) == 0) {
    break;
   }
   __ZN7WebCore11FrameLoader9completedEv((HEAP32[i3 >> 2] | 0) + 80 | 0);
  }
 } while (0);
 if ((HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] | 0) != 0) {
  __ZN7WebCore19NavigationScheduler10startTimerEv(i1);
 }
 i1 = i4 + 4 | 0;
 i4 = i1 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_viii + 6;
}
function __ZN7WebCore19NavigationScheduler15scheduleRefreshEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i6 + 32 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = (HEAP32[i6 + 456 >> 2] | 0) + 356 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = __ZN3WTF10fastMallocEj(40) | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i8 + 456 >> 2] | 0) + 100 >> 2] | 0;
 __ZNK7WebCore11FrameLoader16outgoingReferrerEv(i4, i8 + 80 | 0);
 i8 = i6;
 HEAP32[i8 >> 2] = H_BASE + 224;
 HEAPF64[i6 + 8 >> 3] = +0;
 HEAP8[i6 + 16 | 0] = 1;
 HEAP8[i6 + 17 | 0] = 1;
 HEAP8[i6 + 18 | 0] = 0;
 HEAP8[i6 + 19 | 0] = 1;
 HEAP8[i6 + 20 | 0] = (__ZN7WebCore16ScriptController21processingUserGestureEv() | 0) & 1;
 HEAP32[i8 >> 2] = H_BASE + 184;
 HEAP32[i6 + 24 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i9 = i5 | 0;
  tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue + 1, tempValue;
 }
 i9 = HEAP32[i7 >> 2] | 0;
 HEAP32[i6 + 28 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i7 = i9 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i6 + 32 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i9 = i4 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP8[i6 + 36 | 0] = 0;
 HEAP32[i8 >> 2] = H_BASE + 304;
 i8 = i3 | 0;
 HEAP32[i8 >> 2] = i6;
 __ZN7WebCore19NavigationScheduler8scheduleEN3WTF10PassOwnPtrINS_19ScheduledNavigationEEE(i1, i3);
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 }
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i3 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i7 >> 2] = i8;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore19NavigationScheduler16scheduleRedirectEdRKN3WTF6StringE(i1, d2, i3) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 | 0;
 if ((HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = __ZN7WebCore20protocolIsJavaScriptERKN3WTF6StringE(i3) | 0;
 if (!(i7 | (HEAP32[H_BASE + 336 >> 2] | 0) == 0)) {
  STACKTOP = i4;
  return;
 }
 if (d2 < +0 | d2 > +2147483) {
  STACKTOP = i4;
  return;
 }
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if (+HEAPF64[i3 + 8 >> 3] >= d2) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i3 = __ZN3WTF10fastMallocEj(40) | 0;
 i8 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] | 0) + 100 >> 2] | 0;
 i6 = i3;
 HEAP32[i6 >> 2] = H_BASE + 224;
 HEAPF64[i3 + 8 >> 3] = d2;
 HEAP8[i3 + 16 | 0] = 1;
 HEAP8[i3 + 17 | 0] = d2 <= +1 | 0;
 HEAP8[i3 + 18 | 0] = 0;
 HEAP8[i3 + 19 | 0] = 0;
 i9 = i3 + 20 | 0;
 HEAP8[i9] = (__ZN7WebCore16ScriptController21processingUserGestureEv() | 0) & 1;
 HEAP32[i6 >> 2] = H_BASE + 184;
 HEAP32[i3 + 24 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i10 = i8 | 0;
  tempValue = HEAP32[i10 >> 2] | 0, HEAP32[i10 >> 2] = tempValue + 1, tempValue;
 }
 i10 = HEAP32[i7 >> 2] | 0;
 HEAP32[i3 + 28 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i7 = i10 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 HEAP32[i3 + 32 >> 2] = 0;
 HEAP8[i3 + 36 | 0] = 0;
 HEAP32[i6 >> 2] = H_BASE + 264;
 HEAP8[i9] = 0;
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = i3;
 __ZN7WebCore19NavigationScheduler8scheduleEN3WTF10PassOwnPtrINS_19ScheduledNavigationEEE(i1, i5);
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15ResourceRequestC2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i4);
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP8[i4 + 4 | 0] | 0;
 i6 = i1 + 4 | 0;
 HEAP8[i6] = HEAP8[i6] & -4 | i7 & 1 | i7 & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i4 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i4 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i4 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i4 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i4 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i4 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i4 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i4 + 44 >> 2];
 HEAP32[i1 + 48 >> 2] = 0;
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
 i4 = i1 + 64 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i4);
 HEAP32[i3 >> 2] = H_BASE + 8;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 112 | 0, i3);
 __ZN7WebCore13HTTPHeaderMapC1Ev(i1 + 116 | 0);
 _memset(i1 + 136 | 0, 0, 16) | 0;
 HEAP8[i1 + 152 | 0] = 11;
 HEAP32[i1 + 156 >> 2] = 1;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i2;
  return;
 }
 i5 = i3 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i4;
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore19NavigationScheduler25scheduleHistoryNavigationEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i6 + 56 >> 2] | 0;
 do {
  if ((__ZNK7WebCore21BackForwardController12forwardCountEv(i7) | 0) >= (i2 | 0)) {
   if ((__ZNK7WebCore21BackForwardController9backCountEv(i7) | 0) < (-i2 | 0)) {
    break;
   }
   i6 = __ZN3WTF10fastMallocEj(32) | 0;
   i8 = i6;
   HEAP32[i8 >> 2] = H_BASE + 224;
   _memset(i6 + 8 | 0, 0, 11) | 0;
   HEAP8[i6 + 19 | 0] = 1;
   HEAP8[i6 + 20 | 0] = (__ZN7WebCore16ScriptController21processingUserGestureEv() | 0) & 1;
   HEAP32[i8 >> 2] = H_BASE + 64;
   HEAP32[i6 + 24 >> 2] = i2;
   i8 = i4 | 0;
   HEAP32[i8 >> 2] = i6;
   __ZN7WebCore19NavigationScheduler8scheduleEN3WTF10PassOwnPtrINS_19ScheduledNavigationEEE(i1, i4);
   i6 = HEAP32[i8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
   STACKTOP = i3;
   return;
  }
 } while (0);
 i4 = i1 + 8 | 0;
 do {
  if (+HEAPF64[i1 + 16 >> 3] != +0) {
   i2 = HEAP32[i5 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i7 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i2 + 32 >> 2] | 0) | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation35frameClearedScheduledNavigationImplEPNS_19InstrumentingAgentsEPNS_5FrameE(i7, i2);
  }
 } while (0);
 __ZN7WebCore9TimerBase4stopEv(i4);
 i4 = i1 + 64 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 15](i1, HEAP32[i5 >> 2] | 0, 0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16ScheduledRefresh4fireEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 56 | 0;
 i7 = i3 + 64 | 0;
 __ZN7WebCore20UserGestureIndicatorC1ENS_26ProcessingUserGestureStateE(i4, (HEAP8[i1 + 20 | 0] & 1) != 0 ? 0 : 2);
 i8 = HEAP32[i1 + 24 >> 2] | 0;
 i9 = i6 | 0;
 i10 = HEAP32[i1 + 28 >> 2] | 0;
 HEAP32[i9 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i11 = i10 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i5, 0, i6);
 i6 = i7 | 0;
 i11 = HEAP32[i1 + 32 >> 2] | 0;
 HEAP32[i6 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i10 = i11 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 __ZN7WebCore11FrameLoader14changeLocationEPNS_14SecurityOriginERKNS_3URLERKN3WTF6StringEbbb(i2 + 80 | 0, i8, i5, i7, (HEAP8[i1 + 16 | 0] & 1) != 0, (HEAP8[i1 + 17 | 0] & 1) != 0, 1);
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i5 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i9 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore20UserGestureIndicatorD1Ev(i4);
  STACKTOP = i3;
  return;
 }
 i9 = i1 | 0;
 i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  __ZN7WebCore20UserGestureIndicatorD1Ev(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i9 >> 2] = i7;
  __ZN7WebCore20UserGestureIndicatorD1Ev(i4);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore19ResourceRequestBaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 144 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 136 | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i3 >> 2] | 0;
  i6 = i5 + (i4 << 2) | 0;
  i4 = i5;
  while (1) {
   i5 = HEAP32[i4 >> 2] | 0;
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
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 140 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore13HTTPHeaderMapD1Ev(i1 + 116 | 0);
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
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
function __ZN7WebCore26ScheduledHistoryNavigation4fireEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 __ZN7WebCore20UserGestureIndicatorC1ENS_26ProcessingUserGestureStateE(i4, (HEAP8[i1 + 20 | 0] & 1) != 0 ? 0 : 2);
 i7 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i7 | 0) != 0) {
  __ZN7WebCore21BackForwardController15goBackOrForwardEi(HEAP32[(HEAP32[i2 + 32 >> 2] | 0) + 56 >> 2] | 0, i7);
  __ZN7WebCore20UserGestureIndicatorD1Ev(i4);
  STACKTOP = i3;
  return;
 }
 i7 = (HEAP32[i2 + 456 >> 2] | 0) + 356 | 0;
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 16 | 0);
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore11FrameLoader11urlSelectedERKNS_3URLERKN3WTF6StringENS4_10PassRefPtrINS_5EventEEEbbNS_18ShouldSendReferrerE(i2 + 80 | 0, i7, i5, i6, (HEAP8[i1 + 16 | 0] & 1) != 0, (HEAP8[i1 + 17 | 0] & 1) != 0, 0);
 i1 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i8 = i1 + 8 | 0;
   i6 = i8 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = i8 - 8 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore20UserGestureIndicatorD1Ev(i4);
  STACKTOP = i3;
  return;
 }
 i5 = i1 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  __ZN7WebCore20UserGestureIndicatorD1Ev(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i7;
  __ZN7WebCore20UserGestureIndicatorD1Ev(i4);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore19NavigationScheduler10timerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i3 + 32 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 if ((HEAP8[i4 + 98 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   return;
  }
  i5 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i4) | 0;
  if ((i5 | 0) == 0) {
   return;
  }
  __ZN7WebCore24InspectorInstrumentation35frameClearedScheduledNavigationImplEPNS_19InstrumentingAgentsEPNS_5FrameE(i5, i3);
  return;
 }
 i5 = i3 + 4 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 64 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 15](i1, HEAP32[i2 >> 2] | 0);
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i5 + 32 >> 2] | 0) | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation35frameClearedScheduledNavigationImplEPNS_19InstrumentingAgentsEPNS_5FrameE(i2, i5);
  }
 } while (0);
 if ((i1 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 }
 i1 = i3 + 4 | 0;
 i3 = i1 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i3 >> 2] = i5;
  return;
 }
 i5 = i1 - 4 | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
 return;
}
function __ZN7WebCore14SubstituteDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
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
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore12SharedBufferD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore15ResourceRequestD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 172 >> 2] | 0;
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
 i2 = HEAP32[i1 + 168 >> 2] | 0;
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
 i2 = HEAP32[i1 + 164 >> 2] | 0;
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
 i2 = HEAP32[i1 + 160 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 }
}
function __ZN7WebCore22ScheduledURLNavigation13didStartTimerEPNS_5FrameEPNS_5TimerINS_19NavigationSchedulerEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, d10 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 36 | 0;
 if ((HEAP8[i7] & 1) != 0) {
  STACKTOP = i4;
  return;
 }
 HEAP8[i7] = 1;
 __ZN7WebCore20UserGestureIndicatorC1ENS_26ProcessingUserGestureStateE(i5, (HEAP8[i1 + 20 | 0] & 1) != 0 ? 0 : 2);
 __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i6, 0, i1 + 28 | 0);
 d8 = +HEAPF64[i1 + 8 >> 3];
 d9 = +__ZN3WTF11currentTimeEv();
 d10 = d9 + +__ZNK7WebCore9TimerBase16nextFireIntervalEv(i3);
 __ZN7WebCore11FrameLoader16clientRedirectedERKNS_3URLEddb(i2 + 80 | 0, i6, d8, d10, (HEAP8[i1 + 17 | 0] & 1) != 0);
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN7WebCore20UserGestureIndicatorD1Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore23ScheduledFormSubmission13didStartTimerEPNS_5FrameEPNS_5TimerINS_19NavigationSchedulerEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, d10 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 28 | 0;
 if ((HEAP8[i7] & 1) != 0) {
  STACKTOP = i4;
  return;
 }
 HEAP8[i7] = 1;
 __ZN7WebCore20UserGestureIndicatorC1ENS_26ProcessingUserGestureStateE(i5, (HEAP8[i1 + 20 | 0] & 1) != 0 ? 0 : 2);
 __ZNK7WebCore14FormSubmission10requestURLEv(i6, HEAP32[i1 + 24 >> 2] | 0);
 d8 = +HEAPF64[i1 + 8 >> 3];
 d9 = +__ZN3WTF11currentTimeEv();
 d10 = d9 + +__ZNK7WebCore9TimerBase16nextFireIntervalEv(i3);
 __ZN7WebCore11FrameLoader16clientRedirectedERKNS_3URLEddb(i2 + 80 | 0, i6, d8, d10, (HEAP8[i1 + 17 | 0] & 1) != 0);
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN7WebCore20UserGestureIndicatorD1Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorINSt3__14pairINS_6StringES3_EELj0ENS_15CrashOnOverflowEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 3) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
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
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i8 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i3 = i3 + 8 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
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
function __ZN7WebCore19NavigationScheduler23mustLockBackForwardListEPNS_5FrameE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 do {
  if (!(__ZN7WebCore16ScriptController21processingUserGestureEv() | 0)) {
   i2 = HEAP32[i1 + 128 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   if ((HEAP8[i2 + 978 | 0] & 1) == 0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i2 = __ZNK7WebCore9FrameTree6parentEv(i1 + 40 | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 while (1) {
  i2 = HEAP32[i4 + 456 >> 2] | 0;
  if (!(__ZNK7WebCore11FrameLoader10isCompleteEv(i4 + 80 | 0) | 0)) {
   i3 = 1;
   i5 = 14;
   break;
  }
  if ((i2 | 0) != 0) {
   if ((HEAP8[i2 + 1244 | 0] & 1) != 0) {
    i3 = 1;
    i5 = 11;
    break;
   }
  }
  i2 = __ZNK7WebCore9FrameTree6parentEv(i4 + 40 | 0) | 0;
  if ((i2 | 0) == 0) {
   i3 = 0;
   i5 = 10;
   break;
  } else {
   i4 = i2;
  }
 }
 if ((i5 | 0) == 10) {
  return i3 | 0;
 } else if ((i5 | 0) == 11) {
  return i3 | 0;
 } else if ((i5 | 0) == 14) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore22ScheduledURLNavigation4fireEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN7WebCore20UserGestureIndicatorC1ENS_26ProcessingUserGestureStateE(i4, (HEAP8[i1 + 20 | 0] & 1) != 0 ? 0 : 2);
 i6 = HEAP32[i1 + 24 >> 2] | 0;
 __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i5, 0, i1 + 28 | 0);
 __ZN7WebCore11FrameLoader14changeLocationEPNS_14SecurityOriginERKNS_3URLERKN3WTF6StringEbbb(i2 + 80 | 0, i6, i5, i1 + 32 | 0, (HEAP8[i1 + 16 | 0] & 1) != 0, (HEAP8[i1 + 17 | 0] & 1) != 0, 0);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore20UserGestureIndicatorD1Ev(i4);
  STACKTOP = i3;
  return;
 }
 i5 = i1 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  __ZN7WebCore20UserGestureIndicatorD1Ev(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i6;
  __ZN7WebCore20UserGestureIndicatorD1Ev(i4);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore23ScheduledLocationChangeD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
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
 i2 = HEAP32[i1 + 28 >> 2] | 0;
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
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
 i3 = i2 | 0;
 if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 i5 = i1;
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore22ScheduledURLNavigationD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
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
 i2 = HEAP32[i1 + 28 >> 2] | 0;
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
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
 i3 = i2 | 0;
 if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 i5 = i1;
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore17ScheduledRedirectD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
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
 i2 = HEAP32[i1 + 28 >> 2] | 0;
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
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
 i3 = i2 | 0;
 if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 i5 = i1;
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore16ScheduledRefreshD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
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
 i2 = HEAP32[i1 + 28 >> 2] | 0;
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
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
 i3 = i2 | 0;
 if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 i5 = i1;
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 __ZN3WTF6VectorINSt3__14pairINS_6StringES3_EELj0ENS_15CrashOnOverflowEED2Ev(i1 + 8 | 0);
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i5 = i2 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore19NavigationScheduler10startTimerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, d6 = +0;
 i2 = i1 + 64 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = i1 + 8 | 0;
 if (+HEAPF64[i1 + 16 >> 3] != +0) {
  return;
 }
 i5 = i1 | 0;
 if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 7](i3, HEAP32[i5 >> 2] | 0) | 0)) {
  return;
 }
 d6 = +HEAPF64[(HEAP32[i2 >> 2] | 0) + 8 >> 3];
 __ZN7WebCore9TimerBase5startEdd(i4, d6, +0);
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i1 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i3 + 32 >> 2] | 0) | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation28frameScheduledNavigationImplEPNS_19InstrumentingAgentsEPNS_5FrameEd(i1, i3, d6);
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 15](i3, HEAP32[i5 >> 2] | 0, i4);
 return;
}
function __ZN7WebCore23ScheduledLocationChangeD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
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
 i2 = HEAP32[i1 + 28 >> 2] | 0;
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
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore22ScheduledURLNavigationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
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
 i2 = HEAP32[i1 + 28 >> 2] | 0;
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
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore17ScheduledRedirectD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
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
 i2 = HEAP32[i1 + 28 >> 2] | 0;
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
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore16ScheduledRefreshD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
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
 i2 = HEAP32[i1 + 28 >> 2] | 0;
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
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore19NavigationScheduler6cancelEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 8 | 0;
 do {
  if (+HEAPF64[i1 + 16 >> 3] != +0) {
   i4 = HEAP32[i1 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i4 + 32 >> 2] | 0) | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation35frameClearedScheduledNavigationImplEPNS_19InstrumentingAgentsEPNS_5FrameE(i5, i4);
  }
 } while (0);
 __ZN7WebCore9TimerBase4stopEv(i3);
 i3 = i1 + 64 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 15](i4, HEAP32[i1 >> 2] | 0, i2);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
 return;
}
function __ZN7WebCore19NavigationScheduler5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 8 | 0;
 do {
  if (+HEAPF64[i1 + 16 >> 3] != +0) {
   i3 = HEAP32[i1 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i4 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i3 + 32 >> 2] | 0) | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation35frameClearedScheduledNavigationImplEPNS_19InstrumentingAgentsEPNS_5FrameE(i4, i3);
  }
 } while (0);
 __ZN7WebCore9TimerBase4stopEv(i2);
 i2 = i1 + 64 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
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
function __ZN7WebCore23ScheduledFormSubmissionD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 144;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore14FormSubmissionD2Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore5TimerINS_19NavigationSchedulerEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 15](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 15](i4, i1);
  return;
 }
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
function __ZN7WebCore23ScheduledFormSubmissionD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 144;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore14FormSubmissionD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore19NavigationSchedulerC2EPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 i2 = i1 + 8 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 32;
 HEAP32[i1 + 52 >> 2] = i1;
 i2 = i1 + 56 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 10;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP32[i1 + 64 >> 2] = 0;
 return;
}
function __ZN7WebCore19NavigationSchedulerC1EPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 i2 = i1 + 8 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 32;
 HEAP32[i1 + 52 >> 2] = i1;
 i2 = i1 + 56 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 10;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP32[i1 + 64 >> 2] = 0;
 return;
}
function __ZN7WebCore23ScheduledFormSubmission12didStopTimerEPNS_5FrameEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP8[i1 + 28 | 0] & 1) == 0) {
  return;
 }
 __ZN7WebCore11FrameLoader33clientRedirectCancelledOrFinishedEb(i2 + 80 | 0, i3);
 return;
}
function __ZN7WebCore22ScheduledURLNavigation12didStopTimerEPNS_5FrameEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP8[i1 + 36 | 0] & 1) == 0) {
  return;
 }
 __ZN7WebCore11FrameLoader33clientRedirectCancelledOrFinishedEb(i2 + 80 | 0, i3);
 return;
}
function __ZN7WebCore19NavigationSchedulerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 8 | 0);
 return;
}
function __ZN7WebCore19NavigationSchedulerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 8 | 0);
 return;
}
function __ZN7WebCore19NavigationScheduler27redirectScheduledDuringLoadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[i2 + 18 | 0] & 1) != 0;
 return i3 | 0;
}
function __ZN7WebCore19NavigationScheduler21locationChangePendingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[i2 + 19 | 0] & 1) != 0;
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore17ScheduledRedirect16shouldStartTimerEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore11FrameLoader23allAncestorsAreCompleteEv(i2 + 80 | 0) | 0;
}
function __ZN7WebCore19ScheduledNavigation13didStartTimerEPNS_5FrameEPNS_5TimerINS_19NavigationSchedulerEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore5TimerINS_19NavigationSchedulerEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
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
function __ZN7WebCore19ScheduledNavigation12didStopTimerEPNS_5FrameEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
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
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function __ZN7WebCore19ScheduledNavigation16shouldStartTimerEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 1;
}
function __ZN7WebCore5TimerINS_19NavigationSchedulerEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function __ZN7WebCore26ScheduledHistoryNavigationD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZN7WebCore19ScheduledNavigationD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZN7WebCore26ScheduledHistoryNavigationD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function __ZN7WebCore19ScheduledNavigationD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function b0(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(0);
 return +0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_did = [b0,b0,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore5TimerINS_19NavigationSchedulerEE5firedEv,b1,__ZN7WebCore26ScheduledHistoryNavigationD1Ev,b1,__ZN7WebCore26ScheduledHistoryNavigationD0Ev,b1,__ZN7WebCore22ScheduledURLNavigationD1Ev,b1,__ZN7WebCore19NavigationSchedulerD2Ev,b1,__ZN7WebCore5TimerINS_19NavigationSchedulerEED0Ev,b1,__ZN7WebCore17ScheduledRedirectD1Ev,b1,__ZN7WebCore23ScheduledLocationChangeD1Ev,b1,__ZN7WebCore23ScheduledFormSubmissionD1Ev,b1,__ZN7WebCore17ScheduledRedirectD0Ev,b1,__ZN7WebCore23ScheduledFormSubmissionD0Ev,b1,__ZN7WebCore16ScheduledRefreshD0Ev,b1,__ZN7WebCore23ScheduledLocationChangeD0Ev,b1,__ZN7WebCore16ScheduledRefreshD1Ev
  ,b1,__ZN7WebCore19ScheduledNavigationD1Ev,b1,__ZN7WebCore19ScheduledNavigationD0Ev,b1,__ZN7WebCore5TimerINS_19NavigationSchedulerEED1Ev,b1,__ZN7WebCore22ScheduledURLNavigationD0Ev,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore26ScheduledHistoryNavigation4fireEPNS_5FrameE,b2,__ZN7WebCore19NavigationSchedulerC2EPNS_5FrameE,b2,__ZN7WebCore17ScheduledRedirect4fireEPNS_5FrameE,b2,__ZN7WebCore22ScheduledURLNavigation4fireEPNS_5FrameE,b2,__ZN7WebCore19NavigationScheduler10timerFiredEPNS_5TimerIS0_EE,b2,__ZN7WebCore23ScheduledFormSubmission4fireEPNS_5FrameE,b2,__ZN7WebCore16ScheduledRefresh4fireEPNS_5FrameE,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore23ScheduledFormSubmission13didStartTimerEPNS_5FrameEPNS_5TimerINS_19NavigationSchedulerEEE,b4,__ZN7WebCore19ScheduledNavigation12didStopTimerEPNS_5FrameEb,b4,__ZN7WebCore22ScheduledURLNavigation12didStopTimerEPNS_5FrameEb,b4,__ZN7WebCore23ScheduledFormSubmission12didStopTimerEPNS_5FrameEb,b4,__ZN7WebCore22ScheduledURLNavigation13didStartTimerEPNS_5FrameEPNS_5TimerINS_19NavigationSchedulerEEE,b4,__ZN7WebCore19ScheduledNavigation13didStartTimerEPNS_5FrameEPNS_5TimerINS_19NavigationSchedulerEEE,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5,v____cxa_pure_virtual__wrapper,b5];
  var FUNCTION_TABLE_iii = [b6,b6,__ZN7WebCore17ScheduledRedirect16shouldStartTimerEPNS_5FrameE,b6,__ZN7WebCore19ScheduledNavigation16shouldStartTimerEPNS_5FrameE,b6,b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE": __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore17ScheduledRedirect16shouldStartTimerEPNS_5FrameE","__ZN7WebCore19NavigationScheduler25scheduleHistoryNavigationEi","__ZN7WebCore19NavigationScheduler21locationChangePendingEv","__ZN3WTF6VectorINSt3__14pairINS_6StringES3_EELj0ENS_15CrashOnOverflowEED2Ev","__ZN7WebCore23ScheduledFormSubmission13didStartTimerEPNS_5FrameEPNS_5TimerINS_19NavigationSchedulerEEE","__ZN7WebCore19ScheduledNavigation12didStopTimerEPNS_5FrameEb","_memset","__ZN7WebCore15ResourceRequestC2Ev","__ZN7WebCore19NavigationScheduler27redirectScheduledDuringLoadEv","__ZN7WebCore22ScheduledURLNavigation4fireEPNS_5FrameE","__ZN7WebCore22ScheduledURLNavigationD1Ev","__ZN7WebCore19NavigationScheduler22scheduleFormSubmissionEN3WTF10PassRefPtrINS_14FormSubmissionEEE","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv","__ZN7WebCore26ScheduledHistoryNavigation4fireEPNS_5FrameE","__ZN7WebCore23ScheduledFormSubmissionD0Ev","__ZN7WebCore17ScheduledRedirectD1Ev","__ZN7WebCore19NavigationScheduler5clearEv","__ZN7WebCore19NavigationScheduler23mustLockBackForwardListEPNS_5FrameE","__ZN7WebCore23ScheduledLocationChangeD1Ev","__ZN7WebCore19NavigationScheduler6cancelEb","__ZN7WebCore5TimerINS_19NavigationSchedulerEE5firedEv","__ZN7WebCore23ScheduledFormSubmissionD1Ev","__ZN7WebCore19NavigationSchedulerD2Ev","__ZN7WebCore5TimerINS_19NavigationSchedulerEED0Ev","__ZN7WebCore15ResourceRequestD2Ev","__ZN7WebCore26ScheduledHistoryNavigationD1Ev","__ZN7WebCore14SubstituteDataD2Ev","__ZN7WebCore14SecurityOriginD2Ev","__ZN7WebCore5TimerINS_19NavigationSchedulerEED1Ev","__ZN7WebCore19NavigationScheduler8scheduleEN3WTF10PassOwnPtrINS_19ScheduledNavigationEEE","__ZN7WebCore16ScheduledRefreshD0Ev","__ZN7WebCore19NavigationScheduler10startTimerEv","__ZN7WebCore23ScheduledLocationChangeD0Ev","__ZN7WebCore22ScheduledURLNavigation13didStartTimerEPNS_5FrameEPNS_5TimerINS_19NavigationSchedulerEEE","__ZN7WebCore17ScheduledRedirect4fireEPNS_5FrameE","__ZN7WebCore19ResourceRequestBaseD2Ev","__ZN7WebCore19ScheduledNavigation16shouldStartTimerEPNS_5FrameE","__ZN7WebCore16ScheduledRefreshD1Ev","__ZN7WebCore22ScheduledURLNavigation12didStopTimerEPNS_5FrameEb","__ZN7WebCore26ScheduledHistoryNavigationD0Ev","__ZN7WebCore19NavigationScheduler10timerFiredEPNS_5TimerIS0_EE","__ZN7WebCore19ScheduledNavigation13didStartTimerEPNS_5FrameEPNS_5TimerINS_19NavigationSchedulerEEE","__ZN7WebCore23ScheduledFormSubmission4fireEPNS_5FrameE","_memcpy","__ZN7WebCore19NavigationScheduler22scheduleLocationChangeEPNS_14SecurityOriginERKN3WTF6StringES6_bb","__ZN7WebCore19ScheduledNavigationD1Ev","__ZN7WebCore19NavigationScheduler16scheduleRedirectEdRKN3WTF6StringE","__ZN7WebCore19ScheduledNavigationD0Ev","__ZN7WebCore19NavigationSchedulerC2EPNS_5FrameE","__ZN7WebCore16ScheduledRefresh4fireEPNS_5FrameE","__ZN7WebCore17ScheduledRedirectD0Ev","__ZN7WebCore14FormSubmissionD2Ev","__ZN7WebCore22ScheduledURLNavigationD0Ev","__ZN7WebCore19NavigationScheduler15scheduleRefreshEv","__ZN7WebCore23ScheduledFormSubmission12didStopTimerEPNS_5FrameEb"]

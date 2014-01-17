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
H_BASE = parentModule["_malloc"](0 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 0;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore15CachedFrameBaseC1ERNS_5FrameE;
var __ZN7WebCore15CachedFrameBaseD1Ev;
var __ZN7WebCore11CachedFrameC1ERNS_5FrameE;
/* no memory initializer */
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore15CachedFrameBase7restoreEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 8 | 0;
 if ((HEAP8[i1 + 72 | 0] & 1) != 0) {
  __ZN7WebCore10ScrollView16setParentVisibleEb(HEAP32[i6 >> 2] | 0, 1);
 }
 i7 = HEAP32[(HEAP32[i6 >> 2] | 0) + 216 >> 2] | 0;
 __ZN7WebCore21ScriptCachedFrameData7restoreERNS_5FrameE(HEAP32[i1 + 64 >> 2] | 0, i7);
 i6 = i1 | 0;
 if ((__ZN7WebCore8Document13svgExtensionsEv(HEAP32[i6 >> 2] | 0) | 0) != 0) {
  __ZN7WebCore21SVGDocumentExtensions17unpauseAnimationsEv(__ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[i6 >> 2] | 0) | 0);
 }
 __ZN7WebCore19AnimationController27resumeAnimationsForDocumentEPNS_8DocumentE(HEAP32[i7 + 476 >> 2] | 0, HEAP32[i6 >> 2] | 0);
 i8 = HEAP32[i7 + 472 >> 2] | 0;
 i9 = HEAP32[i1 + 12 >> 2] | 0;
 i10 = i3 | 0;
 HEAP32[i10 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i11 = i9 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 __ZN7WebCore12EventHandler17setMousePressNodeEN3WTF10PassRefPtrINS_4NodeEEE(i8, i3);
 i3 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i10 = i3 + 8 | 0;
   i8 = i10 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 260 >> 2] & 7](i3, 2);
 __ZN7WebCore8Document42resumeScriptedAnimationControllerCallbacksEv(HEAP32[i6 >> 2] | 0);
 __ZN7WebCore16ScriptController27updatePlatformScriptObjectsEv(HEAP32[i7 + 460 >> 2] | 0);
 if ((HEAP8[i1 + 73 | 0] & 1) != 0) {
  __ZN7WebCore9FrameView20restoreBackingStoresEv(HEAP32[i7 + 452 >> 2] | 0);
 }
 i3 = HEAP32[i7 + 84 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 400 >> 2] & 3](i3);
 i3 = i1 + 84 | 0;
 L18 : do {
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   i10 = i7 + 40 | 0;
   i11 = i1 + 76 | 0;
   i8 = i4 | 0;
   i9 = 0;
   while (1) {
    i12 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + (i9 << 2) >> 2] | 0) + 8 >> 2] | 0) + 216 >> 2] | 0;
    HEAP32[i8 >> 2] = i12;
    if ((i12 | 0) != 0) {
     i13 = i12 + 4 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
    }
    __ZN7WebCore9FrameTree11appendChildEN3WTF10PassRefPtrINS_5FrameEEE(i10, i4);
    i13 = HEAP32[i8 >> 2] | 0;
    do {
     if ((i13 | 0) != 0) {
      i12 = i13 + 4 | 0;
      i14 = i12 | 0;
      i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
      if ((i15 | 0) != 0) {
       HEAP32[i14 >> 2] = i15;
       break;
      }
      i15 = i12 - 4 | 0;
      if ((i15 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 3](i15);
     }
    } while (0);
    if ((HEAP32[i3 >> 2] | 0) >>> 0 <= i9 >>> 0) {
     break;
    }
    i13 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i9 << 2) >> 2] | 0;
    i15 = i13 + 8 | 0;
    if ((HEAP8[i13 + 72 | 0] & 1) == 0) {
     i12 = (HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0) + 88 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
    }
    __ZN7WebCore11FrameLoader4openERNS_15CachedFrameBaseE((HEAP32[(HEAP32[i15 >> 2] | 0) + 216 >> 2] | 0) + 80 | 0, i13 | 0);
    i9 = i9 + 1 | 0;
    if (i9 >>> 0 >= (HEAP32[i3 >> 2] | 0) >>> 0) {
     break L18;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 __ZN7WebCore8Document20enqueuePageshowEventENS_24PageshowEventPersistenceE(HEAP32[i6 >> 2] | 0, 1);
 i3 = HEAP32[(HEAP32[i7 + 92 >> 2] | 0) + 4 >> 2] | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i16 = 0;
   i17 = 31;
  } else {
   i4 = i3 + 136 | 0;
   i1 = HEAP32[i4 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i16 = 1;
    i17 = 31;
    break;
   }
   i9 = i1 | 0;
   tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue + 1, tempValue;
   i9 = i5 | 0;
   i11 = HEAP32[i4 >> 2] | 0;
   HEAP32[i9 >> 2] = i11;
   if ((i11 | 0) == 0) {
    i18 = 1;
    i19 = i1;
    i20 = i9;
    break;
   }
   i4 = i11 | 0;
   tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue + 1, tempValue;
   i18 = 1;
   i19 = i1;
   i20 = i9;
  }
 } while (0);
 if ((i17 | 0) == 31) {
  __ZN7WebCore21SerializedScriptValue9nullValueEv(i5);
  i18 = i16;
  i19 = 0;
  i20 = i5 | 0;
 }
 __ZN7WebCore8Document20enqueuePopstateEventEN3WTF10PassRefPtrINS_21SerializedScriptValueEEE(i7, i5);
 i5 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i20 = i5 | 0;
   if (((tempValue = HEAP32[i20 >> 2] | 0, HEAP32[i20 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore21SerializedScriptValueD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 if ((i19 | 0) == 0 | i18 ^ 1) {
  i21 = HEAP32[i6 >> 2] | 0;
  __ZN7WebCore8Document30documentDidResumeFromPageCacheEv(i21);
  STACKTOP = i2;
  return;
 }
 i18 = i19 | 0;
 if (((tempValue = HEAP32[i18 >> 2] | 0, HEAP32[i18 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  i21 = HEAP32[i6 >> 2] | 0;
  __ZN7WebCore8Document30documentDidResumeFromPageCacheEv(i21);
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore21SerializedScriptValueD1Ev(i19);
 __ZN3WTF8fastFreeEPv(i19);
 i21 = HEAP32[i6 >> 2] | 0;
 __ZN7WebCore8Document30documentDidResumeFromPageCacheEv(i21);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11CachedFrameC2ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore15CachedFrameBaseC2ERNS_5FrameE(i1 | 0, i2);
 i5 = i2 + 32 | 0;
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((HEAP32[i6 + 4 >> 2] | 0) == (i2 | 0)) {
   i7 = HEAP32[i2 + 28 >> 2] | 0;
   i8 = i4 | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) != 0) {
    i9 = i7 + 4 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   }
   __ZN7WebCore15FocusController15setFocusedFrameEN3WTF10PassRefPtrINS_5FrameEEE(i6, i4);
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i8 = i9 + 4 | 0;
   i9 = i8 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i9 >> 2] = i7;
    break;
   }
   i7 = i8 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 3](i7);
  }
 } while (0);
 __ZN7WebCore9FrameView22detachCustomScrollbarsEv(HEAP32[i1 + 8 >> 2] | 0);
 i4 = i1 | 0;
 __ZN7WebCore8Document14setInPageCacheEb(HEAP32[i4 >> 2] | 0, 1);
 __ZN7WebCore11FrameLoader11stopLoadingENS_17UnloadEventPolicyE(i2 + 80 | 0, 2);
 i6 = i2 + 40 | 0;
 i7 = HEAP32[i2 + 64 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i8 = i1 + 76 | 0;
  i9 = i1 + 84 | 0;
  i10 = i1 + 80 | 0;
  i11 = i8 | 0;
  i12 = i7;
  while (1) {
   i7 = __Znwj(88) | 0;
   __ZN7WebCore11CachedFrameC2ERNS_5FrameE(i7, i12);
   i13 = HEAP32[i9 >> 2] | 0;
   if ((i13 | 0) == (HEAP32[i10 >> 2] | 0)) {
    __ZN3WTF6VectorINS_6OwnPtrIN7WebCore11CachedFrameEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, i13 + 1 | 0);
    HEAP32[(HEAP32[i11 >> 2] | 0) + (HEAP32[i9 >> 2] << 2) >> 2] = i7;
   } else {
    HEAP32[(HEAP32[i11 >> 2] | 0) + (i13 << 2) >> 2] = i7;
   }
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i12 = HEAP32[i12 + 56 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
  }
 }
 __ZN7WebCore8Document31documentWillSuspendForPageCacheEv(HEAP32[i4 >> 2] | 0);
 __ZN7WebCore8Document43suspendScriptedAnimationControllerCallbacksEv(HEAP32[i4 >> 2] | 0);
 i12 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 256 >> 2] & 7](i12, 2);
 i12 = __ZN3WTF10fastMallocEj(20) | 0;
 __ZN7WebCore21ScriptCachedFrameDataC1ERNS_5FrameE(i12, i2);
 i9 = i1 + 64 | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i12;
 if ((i11 | 0) != 0) {
  __ZN7WebCore21ScriptCachedFrameDataD1Ev(i11);
  __ZN3WTF8fastFreeEPv(i11);
 }
 __ZN7WebCore9DOMWindow19suspendForPageCacheEv(HEAP32[(HEAP32[i4 >> 2] | 0) + 336 >> 2] | 0);
 i4 = i2 + 84 | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 384 >> 2] & 7](i11, i1);
 do {
  if ((HEAP8[i1 + 73 | 0] & 1) != 0) {
   if ((HEAP8[(__ZN7WebCore9pageCacheEv() | 0) + 16 | 0] & 1) == 0) {
    break;
   }
   __ZN7WebCore9FrameView18clearBackingStoresEv(HEAP32[i2 + 452 >> 2] | 0);
  }
 } while (0);
 __ZN7WebCore5Frame11clearTimersEv(i2);
 i2 = i1 + 84 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  i11 = i1 + 76 | 0;
  i12 = 0;
  while (1) {
   __ZN7WebCore9FrameTree11removeChildEPNS_5FrameE(i6, HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + (i12 << 2) >> 2] | 0) + 8 >> 2] | 0) + 216 >> 2] | 0);
   i12 = i12 + 1 | 0;
   if (i12 >>> 0 >= (HEAP32[i2 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 if ((HEAP8[i1 + 72 | 0] & 1) != 0) {
  i14 = HEAP32[i4 >> 2] | 0;
  i15 = i14;
  i16 = HEAP32[i15 >> 2] | 0;
  i17 = i16 + 396 | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  FUNCTION_TABLE_vi[i18 & 3](i14);
  STACKTOP = i3;
  return;
 }
 i1 = (HEAP32[i5 >> 2] | 0) + 88 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) - 1;
 i14 = HEAP32[i4 >> 2] | 0;
 i15 = i14;
 i16 = HEAP32[i15 >> 2] | 0;
 i17 = i16 + 396 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 FUNCTION_TABLE_vi[i18 & 3](i14);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11CachedFrameC1ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore15CachedFrameBaseC2ERNS_5FrameE(i1 | 0, i2);
 i5 = i2 + 32 | 0;
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((HEAP32[i6 + 4 >> 2] | 0) == (i2 | 0)) {
   i7 = HEAP32[i2 + 28 >> 2] | 0;
   i8 = i4 | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) != 0) {
    i9 = i7 + 4 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   }
   __ZN7WebCore15FocusController15setFocusedFrameEN3WTF10PassRefPtrINS_5FrameEEE(i6, i4);
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i8 = i9 + 4 | 0;
   i9 = i8 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i9 >> 2] = i7;
    break;
   }
   i7 = i8 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 3](i7);
  }
 } while (0);
 __ZN7WebCore9FrameView22detachCustomScrollbarsEv(HEAP32[i1 + 8 >> 2] | 0);
 i4 = i1 | 0;
 __ZN7WebCore8Document14setInPageCacheEb(HEAP32[i4 >> 2] | 0, 1);
 __ZN7WebCore11FrameLoader11stopLoadingENS_17UnloadEventPolicyE(i2 + 80 | 0, 2);
 i6 = i2 + 40 | 0;
 i7 = HEAP32[i2 + 64 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i8 = i1 + 76 | 0;
  i9 = i1 + 84 | 0;
  i10 = i1 + 80 | 0;
  i11 = i8 | 0;
  i12 = i7;
  while (1) {
   i7 = __Znwj(88) | 0;
   __ZN7WebCore11CachedFrameC2ERNS_5FrameE(i7, i12);
   i13 = HEAP32[i9 >> 2] | 0;
   if ((i13 | 0) == (HEAP32[i10 >> 2] | 0)) {
    __ZN3WTF6VectorINS_6OwnPtrIN7WebCore11CachedFrameEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, i13 + 1 | 0);
    HEAP32[(HEAP32[i11 >> 2] | 0) + (HEAP32[i9 >> 2] << 2) >> 2] = i7;
   } else {
    HEAP32[(HEAP32[i11 >> 2] | 0) + (i13 << 2) >> 2] = i7;
   }
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i12 = HEAP32[i12 + 56 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
  }
 }
 __ZN7WebCore8Document31documentWillSuspendForPageCacheEv(HEAP32[i4 >> 2] | 0);
 __ZN7WebCore8Document43suspendScriptedAnimationControllerCallbacksEv(HEAP32[i4 >> 2] | 0);
 i12 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 256 >> 2] & 7](i12, 2);
 i12 = __ZN3WTF10fastMallocEj(20) | 0;
 __ZN7WebCore21ScriptCachedFrameDataC1ERNS_5FrameE(i12, i2);
 i9 = i1 + 64 | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i12;
 if ((i11 | 0) != 0) {
  __ZN7WebCore21ScriptCachedFrameDataD1Ev(i11);
  __ZN3WTF8fastFreeEPv(i11);
 }
 __ZN7WebCore9DOMWindow19suspendForPageCacheEv(HEAP32[(HEAP32[i4 >> 2] | 0) + 336 >> 2] | 0);
 i4 = i2 + 84 | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 384 >> 2] & 7](i11, i1);
 do {
  if ((HEAP8[i1 + 73 | 0] & 1) != 0) {
   if ((HEAP8[(__ZN7WebCore9pageCacheEv() | 0) + 16 | 0] & 1) == 0) {
    break;
   }
   __ZN7WebCore9FrameView18clearBackingStoresEv(HEAP32[i2 + 452 >> 2] | 0);
  }
 } while (0);
 __ZN7WebCore5Frame11clearTimersEv(i2);
 i2 = i1 + 84 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  i11 = i1 + 76 | 0;
  i12 = 0;
  while (1) {
   __ZN7WebCore9FrameTree11removeChildEPNS_5FrameE(i6, HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + (i12 << 2) >> 2] | 0) + 8 >> 2] | 0) + 216 >> 2] | 0);
   i12 = i12 + 1 | 0;
   if (i12 >>> 0 >= (HEAP32[i2 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 if ((HEAP8[i1 + 72 | 0] & 1) != 0) {
  i14 = HEAP32[i4 >> 2] | 0;
  i15 = i14;
  i16 = HEAP32[i15 >> 2] | 0;
  i17 = i16 + 396 | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  FUNCTION_TABLE_vi[i18 & 3](i14);
  STACKTOP = i3;
  return;
 }
 i1 = (HEAP32[i5 >> 2] | 0) + 88 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) - 1;
 i14 = HEAP32[i4 >> 2] | 0;
 i15 = i14;
 i16 = HEAP32[i15 >> 2] | 0;
 i17 = i16 + 396 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 FUNCTION_TABLE_vi[i18 & 3](i14);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11CachedFrame5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 + 84 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i7 - 1 | 0;
 do {
  if ((i8 | 0) > -1) {
   i9 = i1 + 76 | 0;
   i10 = i8;
   i11 = i7;
   while (1) {
    if (i11 >>> 0 <= i10 >>> 0) {
     i12 = 6;
     break;
    }
    __ZN7WebCore11CachedFrame5clearEv(HEAP32[(HEAP32[i9 >> 2] | 0) + (i10 << 2) >> 2] | 0);
    i13 = i10 - 1 | 0;
    if ((i13 | 0) <= -1) {
     i12 = 9;
     break;
    }
    i10 = i13;
    i11 = HEAP32[i6 >> 2] | 0;
   }
   if ((i12 | 0) == 6) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i12 | 0) == 9) {
    i11 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = 0;
    if ((i11 | 0) == 0) {
     break;
    } else {
     i14 = i11;
     i12 = 10;
     break;
    }
   }
  } else {
   HEAP32[i4 >> 2] = 0;
   i14 = i5;
   i12 = 10;
  }
 } while (0);
 do {
  if ((i12 | 0) == 10) {
   i5 = i14 + 8 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i14 = i1 + 8 | 0;
 i12 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 do {
  if ((i12 | 0) != 0) {
   i14 = i12 + 4 | 0;
   i5 = i14 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i14 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 3](i6);
  }
 } while (0);
 i12 = i1 + 12 | 0;
 i6 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 8 | 0;
   i14 = i12 | 0;
   i5 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i6 = i3 | 0;
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i3);
 i12 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i5 = i1 + 16 | 0;
 i14 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i12;
 do {
  if ((i14 | 0) != 0) {
   i12 = i14 | 0;
   i5 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i12 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i14 = HEAP8[i3 + 4 | 0] | 0;
 i5 = i1 + 20 | 0;
 HEAP8[i5] = HEAP8[i5] & -4 | i14 & 1 | i14 & 2;
 HEAP32[i1 + 24 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i3 + 16 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i3 + 20 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i3 + 24 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i3 + 28 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i3 + 32 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i3 + 36 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i3 + 40 >> 2];
 HEAP32[i1 + 60 >> 2] = HEAP32[i3 + 44 >> 2];
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 | 0;
   i14 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i6 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i3 = i1 + 68 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i14 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 3](i14);
 }
 i14 = i1 + 64 | 0;
 i1 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore21ScriptCachedFrameDataD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15CachedFrameBaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 84 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 76 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) != 0) {
    __ZN7WebCore15CachedFrameBaseD2Ev(i5 | 0);
    __ZdlPv(i5);
   }
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
  HEAP32[i1 + 80 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 3](i2);
 }
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore21ScriptCachedFrameDataD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 8 | 0;
   i4 = i6 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 4 | 0;
   i3 = i6 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i6 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 3](i4);
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 4 | 0;
   i6 = i4 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i4 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 3](i3);
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 return;
}
function __ZN7WebCore15CachedFrameBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 84 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 76 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) != 0) {
    __ZN7WebCore15CachedFrameBaseD2Ev(i5 | 0);
    __ZdlPv(i5);
   }
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
  HEAP32[i1 + 80 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 3](i2);
 }
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore21ScriptCachedFrameDataD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 8 | 0;
   i4 = i6 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 4 | 0;
   i3 = i6 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i6 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 3](i4);
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 4 | 0;
   i6 = i4 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i4 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 3](i3);
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 return;
}
function __ZN7WebCore15CachedFrameBaseC2ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i2 + 456 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i2 + 128 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i4 = i5 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i2 + 452 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = __ZNK7WebCore12EventHandler14mousePressNodeEv(HEAP32[i2 + 472 >> 2] | 0) | 0;
 HEAP32[i1 + 12 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i5 = i6 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i5 + 356 >> 2] | 0;
 HEAP32[i1 + 16 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i6 = i3 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i5 + 360 | 0;
 i3 = i1 + 20 | 0;
 i7 = HEAP8[i3] & -2 | HEAP8[i6] & 1;
 HEAP8[i3] = i7;
 HEAP8[i3] = i7 & -3 | HEAP8[i6] & 2;
 HEAP32[i1 + 24 >> 2] = HEAP32[i5 + 364 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i5 + 368 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i5 + 372 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i5 + 376 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i5 + 380 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i5 + 384 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i5 + 388 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i5 + 392 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i5 + 396 >> 2];
 HEAP32[i1 + 60 >> 2] = HEAP32[i5 + 400 >> 2];
 HEAP32[i1 + 64 >> 2] = 0;
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP8[i1 + 72 | 0] = (__ZNK7WebCore9FrameTree6parentEv(i2 + 40 | 0) | 0) == 0 | 0;
 HEAP8[i1 + 73 | 0] = (__ZNK7WebCore9FrameView20hasCompositedContentEv(HEAP32[i4 >> 2] | 0) | 0) & 1;
 HEAP32[i1 + 76 >> 2] = 0;
 HEAP32[i1 + 80 >> 2] = 0;
 HEAP32[i1 + 84 >> 2] = 0;
 return;
}
function __ZN7WebCore15CachedFrameBaseC1ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i2 + 456 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i2 + 128 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i4 = i5 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i2 + 452 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = __ZNK7WebCore12EventHandler14mousePressNodeEv(HEAP32[i2 + 472 >> 2] | 0) | 0;
 HEAP32[i1 + 12 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i5 = i6 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i5 + 356 >> 2] | 0;
 HEAP32[i1 + 16 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i6 = i3 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i5 + 360 | 0;
 i3 = i1 + 20 | 0;
 i7 = HEAP8[i3] & -2 | HEAP8[i6] & 1;
 HEAP8[i3] = i7;
 HEAP8[i3] = i7 & -3 | HEAP8[i6] & 2;
 HEAP32[i1 + 24 >> 2] = HEAP32[i5 + 364 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i5 + 368 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i5 + 372 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i5 + 376 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i5 + 380 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i5 + 384 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i5 + 388 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i5 + 392 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i5 + 396 >> 2];
 HEAP32[i1 + 60 >> 2] = HEAP32[i5 + 400 >> 2];
 HEAP32[i1 + 64 >> 2] = 0;
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP8[i1 + 72 | 0] = (__ZNK7WebCore9FrameTree6parentEv(i2 + 40 | 0) | 0) == 0 | 0;
 HEAP8[i1 + 73 | 0] = (__ZNK7WebCore9FrameView20hasCompositedContentEv(HEAP32[i4 >> 2] | 0) | 0) & 1;
 HEAP32[i1 + 76 >> 2] = 0;
 HEAP32[i1 + 80 >> 2] = 0;
 HEAP32[i1 + 84 >> 2] = 0;
 return;
}
function __ZN7WebCore11CachedFrame7destroyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore9DOMWindow22willDestroyCachedFrameEv(HEAP32[i3 + 336 >> 2] | 0);
 if ((HEAP8[i1 + 72 | 0] & 1) == 0) {
  i3 = i1 + 8 | 0;
  HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] = 0;
  __ZN7WebCore11FrameLoader28detachViewsAndDocumentLoaderEv((HEAP32[(HEAP32[i3 >> 2] | 0) + 216 >> 2] | 0) + 80 | 0);
 }
 i3 = i1 + 84 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 - 1 | 0;
 L7 : do {
  if ((i5 | 0) > -1) {
   i6 = i1 + 76 | 0;
   i7 = i5;
   i8 = i4;
   while (1) {
    if (i8 >>> 0 <= i7 >>> 0) {
     break;
    }
    __ZN7WebCore11CachedFrame7destroyEv(HEAP32[(HEAP32[i6 >> 2] | 0) + (i7 << 2) >> 2] | 0);
    i9 = i7 - 1 | 0;
    if ((i9 | 0) <= -1) {
     break L7;
    }
    i7 = i9;
    i8 = HEAP32[i3 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i3 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 3](i3);
 }
 __ZN7WebCore5Frame11clearTimersEPNS_9FrameViewEPNS_8DocumentE(HEAP32[i1 + 8 >> 2] | 0, HEAP32[i2 >> 2] | 0);
 i3 = HEAP32[i2 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 28 >> 2] & 3](i3);
 __ZN7WebCore8Document14setInPageCacheEb(HEAP32[i2 >> 2] | 0, 0);
 __ZN7WebCore8Document21prepareForDestructionEv(HEAP32[i2 >> 2] | 0);
 __ZN7WebCore11CachedFrame5clearEv(i1);
 return;
}
function __ZN3WTF6VectorINS_6OwnPtrIN7WebCore11CachedFrameEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZNK7WebCore11CachedFrame20descendantFrameCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 84 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i1 + 76 | 0;
 i1 = i3;
 i3 = 0;
 while (1) {
  i6 = (__ZNK7WebCore11CachedFrame20descendantFrameCountEv(HEAP32[(HEAP32[i5 >> 2] | 0) + (i3 << 2) >> 2] | 0) | 0) + i1 | 0;
  i7 = i3 + 1 | 0;
  if (i7 >>> 0 < (HEAP32[i2 >> 2] | 0) >>> 0) {
   i1 = i6;
   i3 = i7;
  } else {
   i4 = i6;
   break;
  }
 }
 return i4 | 0;
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
function __ZN7WebCore11CachedFrame26setCachedFramePlatformDataEN3WTF10PassOwnPtrINS_23CachedFramePlatformDataEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 68 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 3](i1);
 return;
}
function __ZN7WebCore11CachedFrame4openEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 8 | 0;
 if ((HEAP8[i1 + 72 | 0] & 1) == 0) {
  i3 = (HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0) + 88 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 __ZN7WebCore11FrameLoader4openERNS_15CachedFrameBaseE((HEAP32[(HEAP32[i2 >> 2] | 0) + 216 >> 2] | 0) + 80 | 0, i1 | 0);
 return;
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function __ZN7WebCore11CachedFrame23cachedFramePlatformDataEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 68 >> 2] | 0;
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
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b3() {
 abort(3);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore15CachedFrameBaseD2Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore15CachedFrameBaseC2ERNS_5FrameE,b1,__ZN7WebCore11CachedFrameC2ERNS_5FrameE,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore15CachedFrameBase7restoreEv","__ZN7WebCore11CachedFrame26setCachedFramePlatformDataEN3WTF10PassOwnPtrINS_23CachedFramePlatformDataEEE","__ZN7WebCore11CachedFrame23cachedFramePlatformDataEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF6VectorINS_6OwnPtrIN7WebCore11CachedFrameEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore11CachedFrame20descendantFrameCountEv","_memset","__ZN7WebCore11CachedFrame4openEv","__ZN7WebCore11CachedFrame7destroyEv","_memcpy","_strlen","__ZN7WebCore15CachedFrameBaseD2Ev","__ZN7WebCore15CachedFrameBaseC2ERNS_5FrameE","__ZN7WebCore11CachedFrameC2ERNS_5FrameE","__ZN7WebCore11CachedFrame5clearEv"]

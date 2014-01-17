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
H_BASE = parentModule["_malloc"](784 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 784;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore11EventSourceD1Ev;
/* memory initializer */ allocate([69,118,101,110,116,83,111,117,114,99,101,39,115,32,114,101,115,112,111,110,115,101,32,104,97,115,32,97,32,77,73,77,69,32,116,121,112,101,32,40,34,0,0,0,0,0,0,0,34,41,32,116,104,97,116,32,105,115,32,110,111,116,32,85,84,70,45,56,46,32,65,98,111,114,116,105,110,103,32,116,104,101,32,99,111,110,110,101,99,116,105,111,110,46,0,0,69,118,101,110,116,83,111,117,114,99,101,39,115,32,114,101,115,112,111,110,115,101,32,104,97,115,32,97,32,99,104,97,114,115,101,116,32,40,34,0,85,84,70,45,56,0,0,0,76,97,115,116,45,69,118,101,110,116,45,73,68,0,0,0,110,111,45,99,97,99,104,101,0,0,0,0,0,0,0,0,67,97,99,104,101,45,67,111,110,116,114,111,108,0,0,0,116,101,120,116,47,101,118,101,110,116,45,115,116,114,101,97,109,0,0,0,0,0,0,0,119,105,116,104,67,114,101,100,101,110,116,105,97,108,115,0,116,101,120,116,47,112,108,97,105,110,0,0,0,0,0,0,114,101,116,114,121,0,0,0,105,100,0,0,0,0,0,0,101,118,101,110,116,0,0,0,100,97,116,97,0,0,0,0,46,32,0,0,0,0,0,0,69,118,101,110,116,83,111,117,114,99,101,32,99,97,110,110,111,116,32,108,111,97,100,32,0,0,0,0,0,0,0,0,34,41,32,116,104,97,116,32,105,115,32,110,111,116,32,34,116,101,120,116,47,101,118,101,110,116,45,115,116,114,101,97,109,34,46,32,65,98,111,114,116,105,110,103,32,116,104,101,32,99,111,110,110,101,99,116,105,111,110,46,0,0,0,0,65,99,99,101,112,116,0,0,71,69,84,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,216,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,212,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,184,11,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viid(index,a1,a2,a3) {
  try {
    Module["dynCall_viid"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
  var __ZTVN7WebCore5TimerINS_11EventSourceEEE=(H_BASE+408)|0;
  var __ZTVN7WebCore25EventTargetWithInlineDataE=(H_BASE+440)|0;
  var __ZTVN7WebCore11EventSourceE=(H_BASE+576)|0;
  var __ZTVN7WebCore22ThreadableLoaderClientE=(H_BASE+520)|0;
  var __ZN7WebCore11EventSource21defaultReconnectDelayE=(H_BASE+776)|0;
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
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viid=env.invoke_viid;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore11EventSource20parseEventStreamLineEjii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 if ((i4 | 0) == 0) {
  i14 = i1 + 204 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  do {
   if ((i15 | 0) != 0) {
    HEAP32[i14 >> 2] = i15 - 1;
    i16 = i1 + 208 | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    do {
     if ((i17 | 0) != 0) {
      i18 = i1 + 212 | 0;
      i19 = HEAP32[i18 >> 2] | 0;
      HEAP32[i18 >> 2] = i17;
      HEAP32[i16 >> 2] = 0;
      if ((i19 | 0) == 0) {
       break;
      }
      i18 = i19 | 0;
      i20 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
      if ((i20 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i19);
       break;
      } else {
       HEAP32[i18 >> 2] = i20;
       break;
      }
     }
    } while (0);
    __ZN7WebCore11EventSource18createMessageEventEv(i7, i1);
    i16 = i6 | 0;
    i17 = i7 | 0;
    i20 = HEAP32[i17 >> 2] | 0;
    HEAP32[i17 >> 2] = 0;
    HEAP32[i16 >> 2] = i20;
    __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i6) | 0;
    i20 = HEAP32[i16 >> 2] | 0;
    if ((i20 | 0) == 0) {
     break;
    }
    i16 = i20 + 8 | 0;
    i20 = i16 | 0;
    i17 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
    if ((i17 | 0) != 0) {
     HEAP32[i20 >> 2] = i17;
     break;
    }
    i17 = i16 - 8 | 0;
    if ((i17 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 63](i17);
   }
  } while (0);
  i6 = i1 + 192 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  if ((i7 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  __ZN3WTF6StringC1EPKc(i8, H_BASE + 784 | 0);
  i7 = i8 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  i15 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = i8;
  do {
   if ((i15 | 0) != 0) {
    i8 = i15 | 0;
    i6 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i15);
     break;
    } else {
     HEAP32[i8 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i15 = HEAP32[i7 >> 2] | 0;
  if ((i15 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i7 = i15 | 0;
  i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
  if ((i6 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i15);
   STACKTOP = i5;
   return;
  } else {
   HEAP32[i7 >> 2] = i6;
   STACKTOP = i5;
   return;
  }
 }
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = (i3 | 0) < 0;
 i7 = i1 + 184 | 0;
 if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i15 = i1 + 176 | 0;
 __ZN3WTF6StringC1EPKtj(i9, (HEAP32[i15 >> 2] | 0) + (i2 << 1) | 0, i6 ? i4 : i3);
 do {
  if (i6) {
   i21 = i4;
  } else {
   i8 = i2 + 1 + i3 | 0;
   if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i8 >>> 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((HEAP16[(HEAP32[i15 >> 2] | 0) + (i8 << 1) >> 1] | 0) == 32) {
    i21 = i3 + 2 | 0;
    break;
   } else {
    i21 = i3 + 1 | 0;
    break;
   }
  }
 } while (0);
 i3 = i21 + i2 | 0;
 i2 = i4 - i21 | 0;
 i6 = i9 | 0;
 do {
  if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 280 | 0) | 0) {
   if ((i21 | 0) == (i4 | 0)) {
    i22 = HEAP32[i1 + 204 >> 2] | 0;
    i23 = i1 + 196 | 0;
    i24 = i1 + 200 | 0;
   } else {
    i9 = i1 + 196 | 0;
    if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i3 >>> 0) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
    i8 = HEAP32[i15 >> 2] | 0;
    i14 = i1 + 204 | 0;
    i17 = HEAP32[i14 >> 2] | 0;
    i16 = i17 + i2 | 0;
    i20 = i1 + 200 | 0;
    if (i16 >>> 0 > (HEAP32[i20 >> 2] | 0) >>> 0) {
     __ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i9, i16);
     i25 = HEAP32[i14 >> 2] | 0;
    } else {
     i25 = i17;
    }
    if (i16 >>> 0 < i25 >>> 0) {
     _WTFCrash();
    }
    i17 = HEAP32[i9 >> 2] | 0;
    i18 = 0;
    while (1) {
     HEAP16[i17 + (i18 + i25 << 1) >> 1] = HEAP16[i8 + (i18 + i3 << 1) >> 1] | 0;
     i18 = i18 + 1 | 0;
     if (i18 >>> 0 >= i2 >>> 0) {
      break;
     }
    }
    HEAP32[i14 >> 2] = i16;
    i22 = i16;
    i23 = i9;
    i24 = i20;
   }
   i18 = i1 + 204 | 0;
   if ((i22 | 0) == (HEAP32[i24 >> 2] | 0)) {
    __ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i23, i22 + 1 | 0);
    HEAP16[(HEAP32[i23 >> 2] | 0) + (HEAP32[i18 >> 2] << 1) >> 1] = 10;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
    break;
   } else {
    HEAP16[(HEAP32[i23 >> 2] | 0) + (i22 << 1) >> 1] = 10;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
    break;
   }
  } else {
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 272 | 0) | 0) {
    do {
     if ((i21 | 0) == (i4 | 0)) {
      __ZN3WTF6StringC1EPKc(i10, H_BASE + 784 | 0);
      i26 = 1;
      i27 = 0;
     } else {
      if ((HEAP32[i7 >> 2] | 0) >>> 0 > i3 >>> 0) {
       __ZN3WTF6StringC1EPKtj(i10, (HEAP32[i15 >> 2] | 0) + (i3 << 1) | 0, i2);
       i26 = 0;
       i27 = 1;
       break;
      } else {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
     }
    } while (0);
    i20 = i10 | 0;
    i9 = HEAP32[i20 >> 2] | 0;
    HEAP32[i20 >> 2] = 0;
    i16 = i1 + 192 | 0;
    i14 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = i9;
    do {
     if ((i14 | 0) != 0) {
      i9 = i14 | 0;
      i16 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
      if ((i16 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i14);
       break;
      } else {
       HEAP32[i9 >> 2] = i16;
       break;
      }
     }
    } while (0);
    do {
     if (i26) {
      i14 = HEAP32[i20 >> 2] | 0;
      if ((i14 | 0) == 0) {
       break;
      }
      i16 = i14 | 0;
      i9 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
      if ((i9 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i14);
       break;
      } else {
       HEAP32[i16 >> 2] = i9;
       break;
      }
     }
    } while (0);
    if (!i27) {
     break;
    }
    i9 = HEAP32[i20 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break;
    }
    i16 = i9 | 0;
    i14 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
    if ((i14 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i16 >> 2] = i14;
     break;
    }
   }
   if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 264 | 0) | 0)) {
    if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 256 | 0) | 0)) {
     break;
    }
    if ((i21 | 0) == (i4 | 0)) {
     i14 = i1 + 216 | 0;
     HEAP32[i14 >> 2] = 3e3;
     HEAP32[i14 + 4 >> 2] = 0;
     break;
    }
    if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i3 >>> 0) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
    __ZN3WTF6StringC1EPKtj(i12, (HEAP32[i15 >> 2] | 0) + (i3 << 1) | 0, i2);
    i14 = __ZNK3WTF6String8toUInt64EPb(i12, i13) | 0;
    if ((HEAP8[i13] & 1) != 0) {
     i16 = i1 + 216 | 0;
     HEAP32[i16 >> 2] = i14;
     HEAP32[i16 + 4 >> 2] = tempRet0;
    }
    i16 = HEAP32[i12 >> 2] | 0;
    if ((i16 | 0) == 0) {
     break;
    }
    i14 = i16 | 0;
    i9 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i16);
     break;
    } else {
     HEAP32[i14 >> 2] = i9;
     break;
    }
   }
   do {
    if ((i21 | 0) == (i4 | 0)) {
     __ZN3WTF6StringC1EPKc(i11, H_BASE + 784 | 0);
     i28 = 1;
     i29 = 0;
    } else {
     if ((HEAP32[i7 >> 2] | 0) >>> 0 > i3 >>> 0) {
      __ZN3WTF6StringC1EPKtj(i11, (HEAP32[i15 >> 2] | 0) + (i3 << 1) | 0, i2);
      i28 = 0;
      i29 = 1;
      break;
     } else {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    }
   } while (0);
   i20 = i11 | 0;
   i9 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   i14 = i1 + 208 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i9;
   do {
    if ((i16 | 0) != 0) {
     i9 = i16 | 0;
     i14 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i9 >> 2] = i14;
      break;
     }
    }
   } while (0);
   do {
    if (i28) {
     i16 = HEAP32[i20 >> 2] | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     i14 = i16 | 0;
     i9 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i14 >> 2] = i9;
      break;
     }
    }
   } while (0);
   if (!i29) {
    break;
   }
   i9 = HEAP32[i20 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i14 = i9 | 0;
   i16 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i14 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i29 = HEAP32[i6 >> 2] | 0;
 if ((i29 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i29 | 0;
 i28 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i28 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i29);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i6 >> 2] = i28;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore11EventSource18didReceiveResponseEmRKNS_16ResourceResponseE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i2 | 0;
 i5 = i2 + 8 | 0;
 i6 = i2 + 16 | 0;
 i7 = i2 + 40 | 0;
 i8 = i2 + 48 | 0;
 i9 = i2 + 72 | 0;
 i10 = i2 + 80 | 0;
 i11 = i2 + 88 | 0;
 i12 = i3 | 0;
 __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i5, __ZNK7WebCore20ResourceResponseBase3urlEv(i12) | 0);
 i3 = i5 | 0;
 __ZNK7WebCore14SecurityOrigin8toStringEv(i4, HEAP32[i3 >> 2] | 0);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i13 = i1 + 224 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i4;
 do {
  if ((i14 | 0) != 0) {
   i4 = i14 | 0;
   i13 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i4 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i5 = i14 | 0;
   i13 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i5 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i3 = i14 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i14);
   __ZN3WTF8fastFreeEPv(i14);
  }
 } while (0);
 i14 = __ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i12) | 0;
 i3 = __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(__ZNK7WebCore20ResourceResponseBase8mimeTypeEv(i12) | 0) >> 2] | 0, H_BASE + 200 | 0) | 0;
 i13 = (i14 | 0) == 200;
 L17 : do {
  if (i13 & i3) {
   i14 = __ZNK7WebCore20ResourceResponseBase16textEncodingNameEv(i12) | 0;
   i5 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
      break;
     }
     if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(i5, H_BASE + 144 | 0) | 0) {
      break;
     }
     HEAP32[i6 >> 2] = 0;
     i4 = i6 + 4 | 0;
     HEAP32[i4 >> 2] = 0;
     i15 = i6 + 8 | 0;
     HEAP32[i15 >> 2] = 0;
     HEAP8[i6 + 12 | 0] = 1;
     HEAP32[i6 + 16 >> 2] = 0;
     HEAP32[i6 + 20 >> 2] = 0;
     __ZN3WTF13StringBuilder6appendEPKhj(i6, H_BASE + 104 | 0, 39);
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i14);
     __ZN3WTF13StringBuilder6appendEPKhj(i6, H_BASE + 56 | 0, 46);
     i16 = HEAP32[i1 + 48 >> 2] | 0;
     i17 = HEAP32[(HEAP32[i16 >> 2] | 0) + 40 >> 2] | 0;
     __ZN3WTF13StringBuilder11shrinkToFitEv(i6);
     i18 = HEAP32[i4 >> 2] | 0;
     if ((i18 | 0) == 0) {
      __ZNK3WTF13StringBuilder11reifyStringEv(i6);
      i19 = HEAP32[i4 >> 2] | 0;
      i20 = i7 | 0;
      HEAP32[i20 >> 2] = i19;
      if ((i19 | 0) == 0) {
       i21 = i20;
      } else {
       i22 = i19;
       i23 = 19;
      }
     } else {
      HEAP32[i7 >> 2] = i18;
      i22 = i18;
      i23 = 19;
     }
     if ((i23 | 0) == 19) {
      i18 = i22 | 0;
      HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
      i21 = i7 | 0;
     }
     FUNCTION_TABLE_viiiii[i17 & 3](i16, 1, 3, i7, 0);
     i16 = HEAP32[i21 >> 2] | 0;
     do {
      if ((i16 | 0) != 0) {
       i17 = i16 | 0;
       i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
       if ((i18 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i16);
        break;
       } else {
        HEAP32[i17 >> 2] = i18;
        break;
       }
      }
     } while (0);
     i16 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i16 | 0) != 0) {
       i18 = i16 | 0;
       i17 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
       if ((i17 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i16);
        break;
       } else {
        HEAP32[i18 >> 2] = i17;
        break;
       }
      }
     } while (0);
     i16 = HEAP32[i4 >> 2] | 0;
     if ((i16 | 0) == 0) {
      break L17;
     }
     i15 = i16 | 0;
     i17 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break L17;
     } else {
      HEAP32[i15 >> 2] = i17;
      break L17;
     }
    }
   } while (0);
   HEAP16[i1 + 106 >> 1] = 1;
   i14 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 280 | 0;
   i5 = __ZN3WTF10fastMallocEj(56) | 0;
   __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i5, i14, 0, 0);
   i14 = i10 | 0;
   HEAP32[i14 >> 2] = i5;
   __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i10) | 0;
   i5 = HEAP32[i14 >> 2] | 0;
   if ((i5 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   i14 = i5 + 8 | 0;
   i5 = i14 | 0;
   i17 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i5 >> 2] = i17;
    STACKTOP = i2;
    return;
   }
   i17 = i14 - 8 | 0;
   if ((i17 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 63](i17);
   STACKTOP = i2;
   return;
  } else {
   if (i3 | i13 ^ 1) {
    break;
   }
   HEAP32[i8 >> 2] = 0;
   i17 = i8 + 4 | 0;
   HEAP32[i17 >> 2] = 0;
   i14 = i8 + 8 | 0;
   HEAP32[i14 >> 2] = 0;
   HEAP8[i8 + 12 | 0] = 1;
   HEAP32[i8 + 16 >> 2] = 0;
   HEAP32[i8 + 20 >> 2] = 0;
   __ZN3WTF13StringBuilder6appendEPKhj(i8, H_BASE + 8 | 0, 41);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i8, __ZNK7WebCore20ResourceResponseBase8mimeTypeEv(i12) | 0);
   __ZN3WTF13StringBuilder6appendEPKhj(i8, H_BASE + 328 | 0, 60);
   i5 = HEAP32[i1 + 48 >> 2] | 0;
   i15 = HEAP32[(HEAP32[i5 >> 2] | 0) + 40 >> 2] | 0;
   __ZN3WTF13StringBuilder11shrinkToFitEv(i8);
   i16 = HEAP32[i17 >> 2] | 0;
   if ((i16 | 0) == 0) {
    __ZNK3WTF13StringBuilder11reifyStringEv(i8);
    i18 = HEAP32[i17 >> 2] | 0;
    i19 = i9 | 0;
    HEAP32[i19 >> 2] = i18;
    if ((i18 | 0) == 0) {
     i24 = i19;
    } else {
     i25 = i18;
     i23 = 36;
    }
   } else {
    HEAP32[i9 >> 2] = i16;
    i25 = i16;
    i23 = 36;
   }
   if ((i23 | 0) == 36) {
    i16 = i25 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
    i24 = i9 | 0;
   }
   FUNCTION_TABLE_viiiii[i15 & 3](i5, 1, 3, i9, 0);
   i5 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i15 = i5 | 0;
     i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i15 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i5 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i16 = i5 | 0;
     i15 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i16 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i5 = HEAP32[i17 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i14 = i5 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i24 = HEAP32[i1 + 112 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[HEAP32[i24 >> 2] >> 2] & 63](i24);
 i24 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 148 | 0;
 i9 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i9, i24, 0, 0);
 i24 = i11 | 0;
 HEAP32[i24 >> 2] = i9;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i11) | 0;
 i11 = HEAP32[i24 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i24 = i11 + 8 | 0;
 i11 = i24 | 0;
 i1 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i11 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i24 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i2;
 return;
}
function __ZN3WTF13tryMakeStringIPKcNS_6StringES2_S3_EENS_10PassRefPtrINS_10StringImplEEET_T0_T1_T2_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = _strlen(i2 | 0) | 0;
 i10 = _strlen(i4 | 0) | 0;
 i11 = i3 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 i12 = (i3 | 0) == 0;
 if (i12) {
  i13 = 0;
 } else {
  i13 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i14 = _llvm_uadd_with_overflow_i32(i9 | 0, i13 | 0) | 0;
 i13 = tempRet0;
 i15 = _llvm_uadd_with_overflow_i32(i14 | 0, i10 | 0) | 0;
 i14 = tempRet0;
 i16 = i5 | 0;
 i5 = HEAP32[i16 >> 2] | 0;
 i17 = (i5 | 0) == 0;
 if (i17) {
  i18 = 0;
 } else {
  i18 = HEAP32[i5 + 4 >> 2] | 0;
 }
 i19 = _llvm_uadd_with_overflow_i32(i15 | 0, i18 | 0) | 0;
 i18 = i19;
 if (tempRet0 | (i13 | i14)) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 if (i12) {
  i20 = 9;
 } else {
  if ((HEAP32[i3 + 16 >> 2] & 32 | 0) != 0) {
   i20 = 9;
  }
 }
 do {
  if ((i20 | 0) == 9) {
   if (!i17) {
    if ((HEAP32[i5 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i18 | 0) == 0) {
     i3 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i3 | 0) == 0) {
      i20 = 26;
      break;
     }
     i12 = i3 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
     i21 = i3;
     i22 = 0;
    } else {
     if (i18 >>> 0 > 4294967275 >>> 0) {
      i20 = 26;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i8, i18 + 20 | 0);
     i3 = i8 | 0;
     i12 = HEAP32[i3 >> 2] | 0;
     HEAP32[i3 >> 2] = 0;
     if ((i12 | 0) == 0) {
      i20 = 26;
      break;
     }
     i3 = i12 + 20 | 0;
     HEAP32[i12 >> 2] = 2;
     HEAP32[i12 + 4 >> 2] = i18;
     HEAP32[i12 + 8 >> 2] = i3;
     HEAP32[i12 + 12 >> 2] = 0;
     HEAP32[i12 + 16 >> 2] = 32;
     i21 = i12;
     i22 = i3;
    }
   } while (0);
   if ((i20 | 0) == 26) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i6;
    return;
   }
   _memcpy(i22 | 0, i2 | 0, i9) | 0;
   i3 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i3 | 0) == 0) {
     i23 = 0;
    } else {
     i12 = HEAP32[i3 + 4 >> 2] | 0;
     i14 = HEAP32[i3 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i24 = i3;
     } else {
      i13 = 0;
      while (1) {
       HEAP8[i22 + (i13 + i9) | 0] = HEAP8[i14 + i13 | 0] | 0;
       i13 = i13 + 1 | 0;
       if (i13 >>> 0 >= i12 >>> 0) {
        break;
       }
      }
      i12 = HEAP32[i11 >> 2] | 0;
      if ((i12 | 0) == 0) {
       i23 = 0;
       break;
      } else {
       i24 = i12;
      }
     }
     i23 = HEAP32[i24 + 4 >> 2] | 0;
    }
   } while (0);
   i3 = i23 + i9 | 0;
   _memcpy(i22 + i3 | 0, i4 | 0, i10) | 0;
   i12 = i3 + i10 | 0;
   i3 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i13 = HEAP32[i3 + 4 >> 2] | 0;
     i14 = HEAP32[i3 + 8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     } else {
      i25 = 0;
     }
     while (1) {
      HEAP8[i22 + (i12 + i25) | 0] = HEAP8[i14 + i25 | 0] | 0;
      i25 = i25 + 1 | 0;
      if (i25 >>> 0 >= i13 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i21;
   STACKTOP = i6;
   return;
  }
 } while (0);
 do {
  if ((i18 | 0) == 0) {
   i21 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i21 | 0) == 0) {
    i20 = 52;
    break;
   }
   i25 = i21 | 0;
   HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
   i26 = i21;
   i27 = 0;
  } else {
   if (i18 >>> 0 > 2147483637 >>> 0) {
    i20 = 52;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i7, (i18 << 1) + 20 | 0);
   i21 = i7 | 0;
   i25 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   if ((i25 | 0) == 0) {
    i20 = 52;
    break;
   }
   i21 = i25 + 20 | 0;
   HEAP32[i25 >> 2] = 2;
   HEAP32[i25 + 4 >> 2] = i18;
   HEAP32[i25 + 8 >> 2] = i21;
   HEAP32[i25 + 12 >> 2] = 0;
   HEAP32[i25 + 16 >> 2] = 0;
   i26 = i25;
   i27 = i21;
  }
 } while (0);
 if ((i20 | 0) == 52) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 if ((i9 | 0) != 0) {
  i20 = 0;
  while (1) {
   HEAP16[i27 + (i20 << 1) >> 1] = HEAPU8[i2 + i20 | 0] | 0;
   i20 = i20 + 1 | 0;
   if (i20 >>> 0 >= i9 >>> 0) {
    break;
   }
  }
 }
 i20 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i20 | 0) == 0) {
   i28 = 0;
  } else {
   i2 = HEAP32[i20 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i20 + 16 >> 2] & 32 | 0) == 0) {
     i18 = HEAP32[i20 + 8 >> 2] | 0;
     if ((i2 | 0) == 0) {
      break;
     } else {
      i29 = 0;
     }
     while (1) {
      HEAP16[i27 + (i29 + i9 << 1) >> 1] = HEAP16[i18 + (i29 << 1) >> 1] | 0;
      i29 = i29 + 1 | 0;
      if (i29 >>> 0 >= i2 >>> 0) {
       break;
      }
     }
    } else {
     i18 = HEAP32[i20 + 8 >> 2] | 0;
     if ((i2 | 0) == 0) {
      break;
     } else {
      i30 = 0;
     }
     while (1) {
      HEAP16[i27 + (i30 + i9 << 1) >> 1] = HEAPU8[i18 + i30 | 0] | 0;
      i30 = i30 + 1 | 0;
      if (i30 >>> 0 >= i2 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i2 = HEAP32[i11 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i28 = 0;
    break;
   }
   i28 = HEAP32[i2 + 4 >> 2] | 0;
  }
 } while (0);
 i11 = i28 + i9 | 0;
 if ((i10 | 0) != 0) {
  i9 = 0;
  while (1) {
   HEAP16[i27 + (i9 + i11 << 1) >> 1] = HEAPU8[i4 + i9 | 0] | 0;
   i9 = i9 + 1 | 0;
   if (i9 >>> 0 >= i10 >>> 0) {
    break;
   }
  }
 }
 i9 = i11 + i10 | 0;
 i10 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i16 = HEAP32[i10 + 4 >> 2] | 0;
   if ((HEAP32[i10 + 16 >> 2] & 32 | 0) == 0) {
    i11 = HEAP32[i10 + 8 >> 2] | 0;
    if ((i16 | 0) == 0) {
     break;
    } else {
     i31 = 0;
    }
    while (1) {
     HEAP16[i27 + (i31 + i9 << 1) >> 1] = HEAP16[i11 + (i31 << 1) >> 1] | 0;
     i31 = i31 + 1 | 0;
     if (i31 >>> 0 >= i16 >>> 0) {
      break;
     }
    }
   } else {
    i11 = HEAP32[i10 + 8 >> 2] | 0;
    if ((i16 | 0) == 0) {
     break;
    } else {
     i32 = 0;
    }
    while (1) {
     HEAP16[i27 + (i32 + i9 << 1) >> 1] = HEAPU8[i11 + i32 | 0] | 0;
     i32 = i32 + 1 | 0;
     if (i32 >>> 0 >= i16 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i26;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore11EventSource7connectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 i3 = i2 | 0;
 i4 = i2 + 184 | 0;
 i5 = i2 + 192 | 0;
 i6 = i2 + 200 | 0;
 i7 = i2 + 208 | 0;
 i8 = i2 + 248 | 0;
 i9 = i1 + 56 | 0;
 i10 = i3 | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i10, i9, 0);
 _memset(i3 + 160 | 0, 0, 19) | 0;
 HEAP32[i3 + 180 >> 2] = 15;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 400 | 0);
 __ZN7WebCore19ResourceRequestBase13setHTTPMethodERKN3WTF6StringE(i10, i4);
 i11 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i4 = i11 | 0;
   i12 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i4 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 200 | 0);
 __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i10, H_BASE + 392 | 0, i5);
 i11 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i5 = i11 | 0;
   i12 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i5 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 168 | 0);
 __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i10, H_BASE + 184 | 0, i6);
 i11 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i6 = i11 | 0;
   i12 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i6 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i11 = i1 + 212 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   if ((HEAP32[i12 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i10, H_BASE + 152 | 0, i11);
  }
 } while (0);
 i11 = i1 + 48 | 0;
 i10 = HEAP32[(HEAP32[i11 >> 2] | 0) + 12 >> 2] | 0;
 __ZN7WebCore23ThreadableLoaderOptionsC1Ev(i7);
 HEAP32[i7 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 1;
 if (__ZNK7WebCore14SecurityOrigin10canRequestERKNS_3URLE(i10, i9) | 0) {
  i13 = 0;
 } else {
  i13 = HEAP8[i1 + 104 | 0] & 1 ^ 1;
 }
 HEAP32[i7 + 12 >> 2] = i13;
 HEAP32[i7 + 28 >> 2] = 2;
 HEAP32[i7 + 32 >> 2] = 1;
 HEAP32[i7 + 8 >> 2] = 1;
 if ((i10 | 0) != 0) {
  i13 = i10 | 0;
  tempValue = HEAP32[i13 >> 2] | 0, HEAP32[i13 >> 2] = tempValue + 1, tempValue;
 }
 i13 = i7 + 36 | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i10;
 do {
  if ((i9 | 0) != 0) {
   i10 = i9 | 0;
   if (((tempValue = HEAP32[i10 >> 2] | 0, HEAP32[i10 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i9);
   __ZN3WTF8fastFreeEPv(i9);
  }
 } while (0);
 __ZN7WebCore16ThreadableLoader6createEPNS_22ScriptExecutionContextEPNS_22ThreadableLoaderClientERKNS_15ResourceRequestERKNS_23ThreadableLoaderOptionsE(i8, HEAP32[i11 >> 2] | 0, i1 + 40 | 0, i3, i7);
 i11 = i8 | 0;
 i8 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i9 = i1 + 112 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i10 | 0) == 0) {
  i14 = i8;
 } else {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 16 >> 2] & 63](i10);
  i10 = HEAP32[i11 >> 2] | 0;
  if ((i10 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 16 >> 2] & 63](i10);
  }
  i14 = HEAP32[i9 >> 2] | 0;
 }
 if ((i14 | 0) == 0) {
  __ZN7WebCore23ThreadableLoaderOptionsD1Ev(i7);
  __ZN7WebCore15ResourceRequestD2Ev(i3);
  STACKTOP = i2;
  return;
 }
 HEAP8[i1 + 189 | 0] = 1;
 __ZN7WebCore23ThreadableLoaderOptionsD1Ev(i7);
 __ZN7WebCore15ResourceRequestD2Ev(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11EventSource18createMessageEventEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = __ZN3WTF10fastMallocEj(96) | 0;
 __ZN7WebCore12MessageEventC1Ev(i8);
 i9 = HEAP32[i2 + 192 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = 3;
  } else {
   if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
    i10 = 3;
    break;
   }
   if ((HEAP32[i9 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i9);
    i11 = i4 | 0;
   } else {
    i12 = i4 | 0;
    HEAP32[i12 >> 2] = i9;
    i13 = i9 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
    i11 = i12;
   }
   HEAP32[i5 >> 2] = HEAP32[i11 >> 2];
   i14 = 0;
   i15 = 1;
  }
 } while (0);
 do {
  if ((i10 | 0) == 3) {
   i11 = HEAP32[(HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 228 >> 2] | 0;
   HEAP32[i5 >> 2] = i11;
   if ((i11 | 0) == 0) {
    i14 = 1;
    i15 = 0;
    break;
   }
   i9 = i11 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   i14 = 1;
   i15 = 0;
  }
 } while (0);
 i10 = i2 + 204 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i11 = __ZN3WTF10StringImpl5emptyEv() | 0;
  i4 = i11 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
  i16 = i11;
 } else {
  i11 = __ZN3WTF10fastMallocEj(20) | 0;
  i4 = i2 + 196 | 0;
  i12 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 + 200 >> 2] = 0;
  HEAP32[i10 >> 2] = 0;
  HEAP32[i11 >> 2] = 2;
  HEAP32[i11 + 4 >> 2] = i9;
  HEAP32[i11 + 8 >> 2] = i12;
  HEAP32[i11 + 12 >> 2] = 0;
  HEAP32[i11 + 16 >> 2] = 1;
  __ZN3WTF8fastFreeEPv(0);
  i16 = i11;
 }
 i11 = i7 | 0;
 HEAP32[i11 >> 2] = i16;
 __ZN7WebCore21SerializedScriptValue6createERKN3WTF6StringE(i6, i7);
 __ZN7WebCore12MessageEvent16initMessageEventERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_21SerializedScriptValueEEERKNS1_6StringESA_PNS_9DOMWindowEPNS_11MessagePortE(i8, i5, 0, 0, i6, i2 + 224 | 0, i2 + 212 | 0, 0, 0);
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   if (((tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore21SerializedScriptValueD1Ev(i2);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i11 = i2 | 0;
   i6 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i11 >> 2] = i6;
    break;
   }
  }
 } while (0);
 do {
  if (i15) {
   i2 = HEAP32[i5 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i6 = i2 | 0;
   i11 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i11;
    break;
   }
  }
 } while (0);
 if (!i14) {
  i17 = i1 | 0;
  HEAP32[i17 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
 i14 = HEAP32[i5 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i17 = i1 | 0;
  HEAP32[i17 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
 i5 = i14 | 0;
 i15 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i15 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i14);
  i17 = i1 | 0;
  HEAP32[i17 >> 2] = i8;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i15;
  i17 = i1 | 0;
  HEAP32[i17 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11EventSourceC2ERNS_22ScriptExecutionContextERKNS_3URLERKNS_10DictionaryE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 HEAP32[i1 + 36 >> 2] = 1;
 i11 = i1 | 0;
 HEAP32[i11 >> 2] = H_BASE + 448;
 __ZN7WebCore15EventTargetDataC1Ev(i1 + 4 | 0);
 i12 = i1 + 40 | 0;
 HEAP32[i12 >> 2] = H_BASE + 528;
 __ZN7WebCore15ActiveDOMObjectC2EPNS_22ScriptExecutionContextE(i1 + 44 | 0, i2);
 HEAP32[i11 >> 2] = H_BASE + 584;
 HEAP32[i12 >> 2] = H_BASE + 684;
 HEAP32[i1 + 44 >> 2] = H_BASE + 732;
 i12 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 56 >> 2] = i12;
 if ((i12 | 0) != 0) {
  i11 = i12 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 i11 = i3 + 4 | 0;
 i12 = i1 + 60 | 0;
 i2 = HEAP8[i12] & -2 | HEAP8[i11] & 1;
 HEAP8[i12] = i2;
 HEAP8[i12] = i2 & -3 | HEAP8[i11] & 2;
 HEAP32[i1 + 64 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i1 + 68 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i1 + 72 >> 2] = HEAP32[i3 + 16 >> 2];
 HEAP32[i1 + 76 >> 2] = HEAP32[i3 + 20 >> 2];
 HEAP32[i1 + 80 >> 2] = HEAP32[i3 + 24 >> 2];
 HEAP32[i1 + 84 >> 2] = HEAP32[i3 + 28 >> 2];
 HEAP32[i1 + 88 >> 2] = HEAP32[i3 + 32 >> 2];
 HEAP32[i1 + 92 >> 2] = HEAP32[i3 + 36 >> 2];
 HEAP32[i1 + 96 >> 2] = HEAP32[i3 + 40 >> 2];
 HEAP32[i1 + 100 >> 2] = HEAP32[i3 + 44 >> 2];
 i3 = i1 + 104 | 0;
 HEAP8[i3] = 0;
 HEAP16[i1 + 106 >> 1] = 0;
 __ZN3WTF6StringC1EPKc(i9, H_BASE + 240 | 0);
 __ZN7WebCore12TextEncodingC1EPKc(i10, H_BASE + 144 | 0);
 i11 = __ZN3WTF10fastMallocEj(52) | 0;
 __ZN7WebCore19TextResourceDecoderC1ERKN3WTF6StringERKNS_12TextEncodingEb(i11, i9, i10, 0);
 HEAP32[i1 + 108 >> 2] = i11;
 i11 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i9 = i11 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 112 >> 2] = 0;
 i11 = i1 + 120 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i11);
 HEAP32[i11 >> 2] = H_BASE + 416;
 HEAP32[i1 + 164 >> 2] = i1;
 i11 = i1 + 168 | 0;
 HEAP32[i11 >> 2] = F_BASE_vii + 12;
 HEAP32[i11 + 4 >> 2] = 0;
 i11 = i1 + 216 | 0;
 _memset(i1 + 176 | 0, 0, 14) | 0;
 _memset(i1 + 192 | 0, 0, 24) | 0;
 HEAP32[i11 >> 2] = 3e3;
 HEAP32[i11 + 4 >> 2] = 0;
 HEAP32[i1 + 224 >> 2] = 0;
 i1 = i4 | 0;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i11 = HEAP32[i4 + 4 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i11 + 4 >> 2] | 0) == -6) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i6 + 4 >> 2] = -6;
 HEAP32[i6 >> 2] = 0;
 if ((__ZNK7WebCore12JSDictionary14tryGetPropertyEPKcRN3JSC7JSValueE(i4 | 0, H_BASE + 224 | 0, i6) | 0) != 2) {
  STACKTOP = i5;
  return;
 }
 i4 = HEAP32[i1 >> 2] | 0;
 i11 = i6 | 0;
 i6 = HEAP32[i11 + 4 >> 2] | 0;
 i10 = i8 | 0;
 HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i10 + 4 >> 2] = i6;
 __ZN7WebCore12JSDictionary12convertValueEPN3JSC9ExecStateENS1_7JSValueERb(i4, i8, i7);
 i8 = (HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 if (!((HEAP32[i8 >> 2] & 0 | 0) == 0 & (HEAP32[i8 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
  STACKTOP = i5;
  return;
 }
 HEAP8[i3] = HEAP8[i7] & 1;
 STACKTOP = i5;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_viid + 6;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_viid + 4;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_viid + 2;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_vi + 8;
}
function __ZN7WebCore11EventSourceD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 584;
 HEAP32[i1 + 40 >> 2] = H_BASE + 684;
 HEAP32[i1 + 44 >> 2] = H_BASE + 732;
 i3 = HEAP32[i1 + 224 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 212 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 208 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = i1 + 204 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 196 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 200 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i1 + 192 >> 2] | 0;
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
 i5 = i1 + 184 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 i5 = i1 + 176 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 180 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 120 | 0);
 i4 = HEAP32[i1 + 112 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 63](i4);
 }
 i4 = HEAP32[i1 + 108 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore19TextResourceDecoderD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i6 = i1 + 44 | 0;
  __ZN7WebCore15ActiveDOMObjectD2Ev(i6);
  HEAP32[i2 >> 2] = H_BASE + 448;
  i7 = i1 + 4 | 0;
  __ZN7WebCore15EventTargetDataD1Ev(i7);
  i8 = i1 | 0;
  __ZN7WebCore11EventTargetD2Ev(i8);
  return;
 }
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i6 = i1 + 44 | 0;
  __ZN7WebCore15ActiveDOMObjectD2Ev(i6);
  HEAP32[i2 >> 2] = H_BASE + 448;
  i7 = i1 + 4 | 0;
  __ZN7WebCore15EventTargetDataD1Ev(i7);
  i8 = i1 | 0;
  __ZN7WebCore11EventTargetD2Ev(i8);
  return;
 } else {
  HEAP32[i3 >> 2] = i5;
  i6 = i1 + 44 | 0;
  __ZN7WebCore15ActiveDOMObjectD2Ev(i6);
  HEAP32[i2 >> 2] = H_BASE + 448;
  i7 = i1 + 4 | 0;
  __ZN7WebCore15EventTargetDataD1Ev(i7);
  i8 = i1 | 0;
  __ZN7WebCore11EventTargetD2Ev(i8);
  return;
 }
}
function __ZN7WebCore11EventSourceD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 584;
 HEAP32[i1 + 40 >> 2] = H_BASE + 684;
 HEAP32[i1 + 44 >> 2] = H_BASE + 732;
 i3 = HEAP32[i1 + 224 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 212 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 208 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = i1 + 204 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 196 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 200 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i1 + 192 >> 2] | 0;
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
 i5 = i1 + 184 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 i5 = i1 + 176 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 180 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 120 | 0);
 i4 = HEAP32[i1 + 112 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 63](i4);
 }
 i4 = HEAP32[i1 + 108 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore19TextResourceDecoderD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i6 = i1 + 44 | 0;
  __ZN7WebCore15ActiveDOMObjectD2Ev(i6);
  HEAP32[i2 >> 2] = H_BASE + 448;
  i7 = i1 + 4 | 0;
  __ZN7WebCore15EventTargetDataD1Ev(i7);
  i8 = i1 | 0;
  __ZN7WebCore11EventTargetD2Ev(i8);
  return;
 }
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i6 = i1 + 44 | 0;
  __ZN7WebCore15ActiveDOMObjectD2Ev(i6);
  HEAP32[i2 >> 2] = H_BASE + 448;
  i7 = i1 + 4 | 0;
  __ZN7WebCore15EventTargetDataD1Ev(i7);
  i8 = i1 | 0;
  __ZN7WebCore11EventTargetD2Ev(i8);
  return;
 } else {
  HEAP32[i3 >> 2] = i5;
  i6 = i1 + 44 | 0;
  __ZN7WebCore15ActiveDOMObjectD2Ev(i6);
  HEAP32[i2 >> 2] = H_BASE + 448;
  i7 = i1 + 4 | 0;
  __ZN7WebCore15EventTargetDataD1Ev(i7);
  i8 = i1 | 0;
  __ZN7WebCore11EventTargetD2Ev(i8);
  return;
 }
}
function __ZN7WebCore11EventSource16didFinishLoadingEmd(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 i5 = i1 + 184 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  if ((HEAP32[i1 + 204 >> 2] | 0) != 0) {
   i6 = 3;
  }
 } else {
  i6 = 3;
 }
 do {
  if ((i6 | 0) == 3) {
   __ZN7WebCore11EventSource16parseEventStreamEv(i1);
   i7 = i1 + 180 | 0;
   do {
    if ((HEAP32[i7 >> 2] | 0) != 0) {
     if ((HEAP32[i5 >> 2] | 0) != 0) {
      HEAP32[i5 >> 2] = 0;
     }
     i8 = i1 + 176 | 0;
     i9 = HEAP32[i8 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     HEAP32[i8 >> 2] = 0;
     HEAP32[i7 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i9);
    }
   } while (0);
   i7 = i1 + 200 | 0;
   do {
    if ((HEAP32[i7 >> 2] | 0) != 0) {
     i9 = i1 + 204 | 0;
     if ((HEAP32[i9 >> 2] | 0) != 0) {
      HEAP32[i9 >> 2] = 0;
     }
     i9 = i1 + 196 | 0;
     i8 = HEAP32[i9 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     HEAP32[i9 >> 2] = 0;
     HEAP32[i7 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i8);
    }
   } while (0);
   __ZN3WTF6StringC1EPKc(i4, H_BASE + 784 | 0);
   i7 = i4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   i9 = i1 + 192 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i8;
   do {
    if ((i10 | 0) != 0) {
     i8 = i10 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i10 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i9 = i10 | 0;
     i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i9 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i10 = i1 + 208 | 0;
   i7 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i10 = i7 | 0;
   i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i4 = i1 + 189 | 0;
 if ((HEAP8[i4] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP8[i4] = 0;
 if ((HEAP16[i1 + 106 >> 1] | 0) != 2) {
  __ZN7WebCore11EventSource17scheduleReconnectEv(i1);
  STACKTOP = i2;
  return;
 }
 i4 = i1 + 52 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - 1;
 i4 = i1 + 36 | 0;
 i1 = i4 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = i4 - 36 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] & 63](i5);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11EventSource16parseEventStreamEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = i1 + 184 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 188 | 0;
 i5 = i1 + 106 | 0;
 i6 = i1 + 176 | 0;
 i7 = 0;
 L1 : while (1) {
  if (i7 >>> 0 >= i3 >>> 0) {
   i8 = i7;
   i9 = 18;
   break;
  }
  if ((HEAP8[i4] & 1) == 0) {
   i10 = i7;
  } else {
   if ((HEAP32[i2 >> 2] | 0) >>> 0 <= i7 >>> 0) {
    i9 = 5;
    break;
   }
   i11 = ((HEAP16[(HEAP32[i6 >> 2] | 0) + (i7 << 1) >> 1] | 0) == 10) + i7 | 0;
   HEAP8[i4] = 0;
   i10 = i11;
  }
  if (i10 >>> 0 >= i3 >>> 0) {
   i8 = i10;
   i9 = 18;
   break;
  }
  i11 = HEAP32[i2 >> 2] | 0;
  i12 = -1;
  i13 = -1;
  i14 = i10;
  while (1) {
   if (i11 >>> 0 <= i14 >>> 0) {
    i9 = 10;
    break L1;
   }
   i15 = HEAPU16[(HEAP32[i6 >> 2] | 0) + (i14 << 1) >> 1] | 0;
   if ((i15 | 0) == 58) {
    i16 = (i13 | 0) < 0 ? i14 - i10 | 0 : i13;
    i17 = i12;
   } else if ((i15 | 0) == 10) {
    i9 = 14;
   } else if ((i15 | 0) == 13) {
    HEAP8[i4] = 1;
    i9 = 14;
   } else {
    i16 = i13;
    i17 = i12;
   }
   if ((i9 | 0) == 14) {
    i9 = 0;
    i16 = i13;
    i17 = i14 - i10 | 0;
   }
   i15 = i14 + 1 | 0;
   i18 = (i17 | 0) < 0;
   if (i18 & i15 >>> 0 < i3 >>> 0) {
    i12 = i17;
    i13 = i16;
    i14 = i15;
   } else {
    break;
   }
  }
  if (i18) {
   i8 = i10;
   i9 = 18;
   break;
  }
  __ZN7WebCore11EventSource20parseEventStreamLineEjii(i1, i10, i16, i17);
  i14 = i10 + 1 + i17 | 0;
  if ((HEAP16[i5 >> 1] | 0) == 2) {
   i8 = i14;
   i9 = 18;
   break;
  } else {
   i7 = i14;
  }
 }
 if ((i9 | 0) == 18) {
  if ((i8 | 0) != (i3 | 0)) {
   if ((i8 | 0) == 0) {
    return;
   }
   i3 = HEAP32[i6 >> 2] | 0;
   _memmove(i3 | 0, i3 + (i8 << 1) | 0, (HEAP32[i2 >> 2] | 0) - i8 << 1 | 0) | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - i8;
   return;
  }
  i8 = i1 + 180 | 0;
  if ((HEAP32[i8 >> 2] | 0) == 0) {
   return;
  }
  if ((HEAP32[i2 >> 2] | 0) != 0) {
   HEAP32[i2 >> 2] = 0;
  }
  i2 = HEAP32[i6 >> 2] | 0;
  if ((i2 | 0) == 0) {
   return;
  }
  HEAP32[i6 >> 2] = 0;
  HEAP32[i8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else if ((i9 | 0) == 10) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i9 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore11EventSource6createERNS_22ScriptExecutionContextERKN3WTF6StringERKNS_10DictionaryERi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = i6 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((HEAP32[i8 + 4 >> 2] | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] & 15](i7, i2, i3);
   L4 : do {
    if ((HEAP8[i7 + 4 | 0] & 1) == 0) {
     HEAP32[i5 >> 2] = 12;
     HEAP32[i1 >> 2] = 0;
    } else {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 31](i2) | 0) {
      if (!(__ZN7WebCore16ScriptController42shouldBypassMainWorldContentSecurityPolicyEv(HEAP32[(HEAP32[i2 - 156 + 400 >> 2] | 0) + 460 >> 2] | 0) | 0)) {
       i9 = 8;
      }
     } else {
      i9 = 8;
     }
     do {
      if ((i9 | 0) == 8) {
       if (__ZNK7WebCore21ContentSecurityPolicy20allowConnectToSourceERKNS_3URLENS0_15ReportingStatusE(HEAP32[i2 + 16 >> 2] | 0, i7, 0) | 0) {
        break;
       }
       HEAP32[i5 >> 2] = 18;
       HEAP32[i1 >> 2] = 0;
       break L4;
      }
     } while (0);
     i10 = __ZN3WTF10fastMallocEj(232) | 0;
     i11 = i10;
     __ZN7WebCore11EventSourceC2ERNS_22ScriptExecutionContextERKNS_3URLERKNS_10DictionaryE(i11, i2, i7, i4);
     i12 = i10 + 36 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     i12 = i10 + 52 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     __ZN7WebCore9TimerBase5startEdd(i10 + 120 | 0, +0, +0);
     __ZN7WebCore15ActiveDOMObject15suspendIfNeededEv(i10 + 44 | 0);
     HEAP32[i1 >> 2] = i11;
    }
   } while (0);
   i11 = HEAP32[i7 >> 2] | 0;
   if ((i11 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   i10 = i11 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    STACKTOP = i6;
    return;
   } else {
    HEAP32[i10 >> 2] = i12;
    STACKTOP = i6;
    return;
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = 12;
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i6;
 return;
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
function __ZN7WebCore11EventSource25didFailAccessControlCheckERKNS_13ResourceErrorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i2 | 0;
 __ZNK7WebCore17ResourceErrorBase8lazyInitEv(i7);
 i8 = i5 | 0;
 i9 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i10 = i9 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 __ZNK7WebCore17ResourceErrorBase8lazyInitEv(i7);
 i7 = i6 | 0;
 i10 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i7 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i2 = i10 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF10makeStringIPKcNS_6StringES2_S3_EES3_T_T0_T1_T2_(i4, H_BASE + 296 | 0, i5, H_BASE + 288 | 0, i6);
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
 i6 = HEAP32[i1 + 48 >> 2] | 0;
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i6 >> 2] | 0) + 40 >> 2] & 3](i6, 1, 3, i4, 0);
 __ZN7WebCore11EventSource22abortConnectionAttemptEv(i1);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i1 | 0;
 i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11EventSource14didReceiveDataEPKci(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 176 | 0;
 __ZN7WebCore19TextResourceDecoder6decodeEPKcj(i5, HEAP32[i1 + 108 >> 2] | 0, i2, i3);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i7 = 0;
   i8 = 0;
  } else {
   if ((HEAP32[i5 + 16 >> 2] & 32 | 0) == 0) {
    i9 = HEAP32[i5 + 8 >> 2] | 0;
    i10 = i5;
   } else {
    i2 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i5) | 0;
    i9 = i2;
    i10 = HEAP32[i3 >> 2] | 0;
   }
   if ((i10 | 0) == 0) {
    i7 = 0;
    i8 = i9;
    break;
   }
   i7 = HEAP32[i10 + 4 >> 2] | 0;
   i8 = i9;
  }
 } while (0);
 i9 = i1 + 184 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i5 = i10 + i7 | 0;
 if (i5 >>> 0 > (HEAP32[i1 + 180 >> 2] | 0) >>> 0) {
  __ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i5);
  i11 = HEAP32[i9 >> 2] | 0;
 } else {
  i11 = i10;
 }
 if (i5 >>> 0 < i11 >>> 0) {
  _WTFCrash();
 }
 i10 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i6 = 0;
  while (1) {
   HEAP16[i10 + (i6 + i11 << 1) >> 1] = HEAP16[i8 + (i6 << 1) >> 1] | 0;
   i6 = i6 + 1 | 0;
   if (i6 >>> 0 >= i7 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i9 >> 2] = i5;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore11EventSource16parseEventStreamEv(i1);
  STACKTOP = i4;
  return;
 }
 i3 = i5 | 0;
 i9 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  __ZN7WebCore11EventSource16parseEventStreamEv(i1);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i3 >> 2] = i9;
  __ZN7WebCore11EventSource16parseEventStreamEv(i1);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i2 + 4 | 0;
 i6 = i1 + 4 | 0;
 i8 = HEAP8[i6] & -2 | HEAP8[i7] & 1;
 HEAP8[i6] = i8;
 HEAP8[i6] = i8 & -3 | HEAP8[i7] & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
 HEAP32[i1 + 48 >> 2] = i3;
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
 i3 = i1 + 64 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i3);
 HEAP32[i5 >> 2] = H_BASE + 400;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 112 | 0, i5);
 __ZN7WebCore13HTTPHeaderMapC1Ev(i1 + 116 | 0);
 _memset(i1 + 136 | 0, 0, 16) | 0;
 HEAP8[i1 + 152 | 0] = 11;
 HEAP32[i1 + 156 >> 2] = 1;
 STACKTOP = i4;
 return;
}
function __ZN3WTF10makeStringIPKcNS_6StringES2_S3_EES3_T_T0_T1_T2_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i8 | 0;
 i11 = HEAP32[i3 >> 2] | 0;
 HEAP32[i10 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i3 = i11 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i9 | 0;
 i11 = HEAP32[i5 >> 2] | 0;
 HEAP32[i3 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i5 = i11 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringIPKcNS_6StringES2_S3_EENS_10PassRefPtrINS_10StringImplEEET_T0_T1_T2_(i7, i2, i8, i4, i9);
 i9 = i7 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i3 = i9 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i10 = i9 | 0;
   i4 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i4;
    break;
   }
  }
 } while (0);
 if ((i7 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i7;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore11EventSource22abortConnectionAttemptEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 do {
  if ((HEAP8[i1 + 189 | 0] & 1) == 0) {
   HEAP16[i1 + 106 >> 1] = 2;
   i4 = i1 + 52 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - 1;
   i4 = i1 + 36 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 36 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] & 63](i6);
  } else {
   i6 = HEAP32[i1 + 112 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[HEAP32[i6 >> 2] >> 2] & 63](i6);
  }
 } while (0);
 i6 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 148 | 0;
 i4 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i4, i6, 0, 0);
 i6 = i3 | 0;
 HEAP32[i6 >> 2] = i4;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i3) | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i3 + 8 | 0;
 i3 = i6 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i6 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i2;
 return;
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
function __ZN3WTF13StringBuilder6appendERKNS_6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i1 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   i6 = i2 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   i6 = i1 + 4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i2;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i10 = 0;
   } else {
    i10 = HEAP32[i7 + 4 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = i10;
   HEAP8[i1 + 12 | 0] = (HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0) >>> 5 & 1;
   return;
  }
 } while (0);
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  __ZN3WTF13StringBuilder6appendEPKtj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 } else {
  __ZN3WTF13StringBuilder6appendEPKhj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 }
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
function __ZN7WebCore11EventSource17scheduleReconnectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP16[i1 + 106 >> 1] = 0;
 i4 = i1 + 216 | 0;
 __ZN7WebCore9TimerBase5startEdd(i1 + 120 | 0, (+((HEAP32[i4 >> 2] | 0) >>> 0) + +((HEAP32[i4 + 4 >> 2] | 0) >>> 0) * +4294967296) / +1e3, +0);
 i4 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 148 | 0;
 i5 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i5, i4, 0, 0);
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i5;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i3) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 + 8 | 0;
 i3 = i4 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i4 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i2;
 return;
}
function __ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
 if ((i5 | 0) < 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 1) | 0;
 HEAP32[i3 >> 2] = i1 >>> 1;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 1) | 0;
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
function __ZN7WebCore11EventSource5closeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 106 | 0;
 if ((HEAP16[i2 >> 1] | 0) == 2) {
  return;
 }
 if (+HEAPF64[i1 + 128 >> 3] != +0) {
  __ZN7WebCore9TimerBase4stopEv(i1 + 120 | 0);
 }
 if ((HEAP8[i1 + 189 | 0] & 1) != 0) {
  i3 = HEAP32[i1 + 112 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[HEAP32[i3 >> 2] >> 2] & 63](i3);
  return;
 }
 HEAP16[i2 >> 1] = 2;
 i2 = i1 + 52 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - 1;
 i2 = i1 + 36 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 36 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] & 63](i3);
 return;
}
function __ZN7WebCore11EventSource4stopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 106 | 0;
 if ((HEAP16[i2 >> 1] | 0) == 2) {
  return;
 }
 if (+HEAPF64[i1 + 128 >> 3] != +0) {
  __ZN7WebCore9TimerBase4stopEv(i1 + 120 | 0);
 }
 if ((HEAP8[i1 + 189 | 0] & 1) != 0) {
  i3 = HEAP32[i1 + 112 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[HEAP32[i3 >> 2] >> 2] & 63](i3);
  return;
 }
 HEAP16[i2 >> 1] = 2;
 i2 = i1 + 52 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - 1;
 i2 = i1 + 36 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 36 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] & 63](i3);
 return;
}
function __ZThn44_N7WebCore11EventSource4stopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 232 + 188 | 0;
 i1 = i2 + 106 | 0;
 if ((HEAP16[i1 >> 1] | 0) == 2) {
  return;
 }
 if (+HEAPF64[i2 + 128 >> 3] != +0) {
  __ZN7WebCore9TimerBase4stopEv(i2 + 120 | 0);
 }
 if ((HEAP8[i2 + 189 | 0] & 1) != 0) {
  i3 = HEAP32[i2 + 112 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[HEAP32[i3 >> 2] >> 2] & 63](i3);
  return;
 }
 HEAP16[i1 >> 1] = 2;
 i1 = i2 + 52 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) - 1;
 i1 = i2 + 36 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 63](i2);
 return;
}
function __ZThn40_N7WebCore11EventSource7didFailERKNS_13ResourceErrorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 - 232 + 192 | 0;
 i1 = i3;
 if ((HEAP8[i2 + 17 | 0] & 1) != 0) {
  HEAP16[i1 + 106 >> 1] = 2;
 }
 i2 = i1 + 189 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  return;
 }
 HEAP8[i2] = 0;
 if ((HEAP16[i1 + 106 >> 1] | 0) != 2) {
  __ZN7WebCore11EventSource17scheduleReconnectEv(i1);
  return;
 }
 i2 = i3 + 52 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - 1;
 i2 = i3 + 36 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = i4;
  return;
 }
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] & 63](i1);
 return;
}
function __ZN7WebCore11EventSource7didFailERKNS_13ResourceErrorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP8[i2 + 17 | 0] & 1) != 0) {
  HEAP16[i1 + 106 >> 1] = 2;
 }
 i2 = i1 + 189 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  return;
 }
 HEAP8[i2] = 0;
 if ((HEAP16[i1 + 106 >> 1] | 0) != 2) {
  __ZN7WebCore11EventSource17scheduleReconnectEv(i1);
  return;
 }
 i2 = i1 + 52 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - 1;
 i2 = i1 + 36 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 36 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] & 63](i3);
 return;
}
function __ZN7WebCore11EventSource19networkRequestEndedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 189 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  return;
 }
 HEAP8[i2] = 0;
 if ((HEAP16[i1 + 106 >> 1] | 0) != 2) {
  __ZN7WebCore11EventSource17scheduleReconnectEv(i1);
  return;
 }
 i2 = i1 + 52 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - 1;
 i2 = i1 + 36 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 36 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] & 63](i3);
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
function __ZN7WebCore5TimerINS_11EventSourceEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 31](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 31](i4, i1);
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
function _memmove(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i2 | 0) < (i1 | 0) & (i1 | 0) < (i2 + i3 | 0)) {
  i4 = i1;
  i2 = i2 + i3 | 0;
  i1 = i1 + i3 | 0;
  while ((i3 | 0) > 0) {
   i1 = i1 - 1 | 0;
   i2 = i2 - 1 | 0;
   i3 = i3 - 1 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
  }
  i1 = i4;
 } else {
  _memcpy(i1, i2, i3) | 0;
 }
 return i1 | 0;
}
function __ZN7WebCore11EventSource16derefEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 36 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 36 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] & 63](i3);
 return;
}
function iiiii___ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function iiiii___ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZThn40_N7WebCore11EventSource18didReceiveResponseEmRKNS_16ResourceResponseE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11EventSource18didReceiveResponseEmRKNS_16ResourceResponseE(i1 - 232 + 192 | 0, 0, i3);
 return;
}
function __ZNK7WebCore11EventSource3urlEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 56 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZThn40_N7WebCore11EventSource25didFailAccessControlCheckERKNS_13ResourceErrorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11EventSource25didFailAccessControlCheckERKNS_13ResourceErrorE(i1 - 232 + 192 | 0, i2);
 return;
}
function iii___ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i2 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore25EventTargetWithInlineDataD0Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 448;
 __ZN7WebCore15EventTargetDataD1Ev(i1 + 4 | 0);
 __ZN7WebCore11EventTargetD2Ev(i1 | 0);
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore22ThreadableLoaderClient25didFailAccessControlCheckERKNS_13ResourceErrorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 31](i1, i2);
 return;
}
function vii___ZN7WebCore15ActiveDOMObject7suspendENS0_19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore15ActiveDOMObject7suspendENS0_19ReasonForSuspensionE(i1 | 0, i2 | 0);
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZThn40_N7WebCore11EventSource14didReceiveDataEPKci(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11EventSource14didReceiveDataEPKci(i1 - 232 + 192 | 0, i2, i3);
 return;
}
function __ZN7WebCore25EventTargetWithInlineDataD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 448;
 __ZN7WebCore15EventTargetDataD1Ev(i1 + 4 | 0);
 __ZN7WebCore11EventTargetD2Ev(i1 | 0);
 return;
}
function __ZThn40_N7WebCore11EventSource16didFinishLoadingEmd(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 __ZN7WebCore11EventSource16didFinishLoadingEmd(i1 - 232 + 192 | 0, 0, +0);
 return;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZThn44_N7WebCore11EventSourceD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 232 + 188 | 0;
 __ZN7WebCore11EventSourceD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZThn40_N7WebCore11EventSourceD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 232 + 192 | 0;
 __ZN7WebCore11EventSourceD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function vi___ZN7WebCore26ContextDestructionObserver16contextDestroyedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore26ContextDestructionObserver16contextDestroyedEv(i1 | 0);
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function ii___ZNK7WebCore15ActiveDOMObject18hasPendingActivityEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore15ActiveDOMObject18hasPendingActivityEv(i1 | 0) | 0;
}
function __ZThn40_N7WebCore11EventSource20didFailRedirectCheckEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventSource22abortConnectionAttemptEv(i1 - 232 + 192 | 0);
 return;
}
function __ZN7WebCore22ThreadableLoaderClient11didSendDataEyy(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return;
}
function __ZN7WebCore11EventSource17connectTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11EventSource7connectEv(i1);
 return;
}
function __ZN7WebCore11EventSource14refEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 36 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget23removeAllEventListenersEv(i1 | 0);
}
function __ZN7WebCore22ThreadableLoaderClient18didReceiveResponseEmRKNS_16ResourceResponseE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function ii___ZNK7WebCore15ActiveDOMObject10canSuspendEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore15ActiveDOMObject10canSuspendEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore11EventSource22scheduleInitialConnectEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBase5startEdd(i1 + 120 | 0, +0, +0);
 return;
}
function __ZN7WebCore11EventSource20didFailRedirectCheckEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventSource22abortConnectionAttemptEv(i1);
 return;
}
function ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget11toDOMWindowEv(i1 | 0) | 0;
}
function dynCall_viid(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 FUNCTION_TABLE_viid[i1 & 7](i2 | 0, i3 | 0, +d4);
}
function __ZN7WebCore5TimerINS_11EventSourceEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
}
function ii___ZN7WebCore11EventTarget6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget6toNodeEv(i1 | 0) | 0;
}
function __ZN7WebCore22ThreadableLoaderClient14didReceiveDataEPKci(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore11EventSourceD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventSourceD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function vi___ZN7WebCore15ActiveDOMObject6resumeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15ActiveDOMObject6resumeEv(i1 | 0);
}
function __ZN7WebCore22ThreadableLoaderClient16didFinishLoadingEmd(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
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
function __ZThn44_N7WebCore11EventSourceD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventSourceD2Ev(i1 - 232 + 188 | 0);
 return;
}
function __ZThn40_N7WebCore11EventSourceD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventSourceD2Ev(i1 - 232 + 192 | 0);
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
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function __ZN7WebCore22ThreadableLoaderClient7didFailERKNS_13ResourceErrorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore11EventSource15withCredentialsEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 104 | 0] & 1) != 0 | 0;
}
function __ZNK7WebCore11EventSource22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 48 >> 2] | 0;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv(i1) {
 i1 = i1 | 0;
 return i1 + 4 | 0;
}
function __ZN7WebCore5TimerINS_11EventSourceEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function __ZN7WebCore22ThreadableLoaderClient32isDocumentThreadableLoaderClientEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
 return 0;
}
function __ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv(i1) {
 i1 = i1 | 0;
 return i1 + 4 | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZN7WebCore22ThreadableLoaderClientD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore11EventSource10readyStateEv(i1) {
 i1 = i1 | 0;
 return HEAP16[i1 + 106 >> 1] | 0;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function __ZN7WebCore22ThreadableLoaderClient20didFailRedirectCheckEv(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZNK7WebCore11EventSource20eventTargetInterfaceEv(i1) {
 i1 = i1 | 0;
 return 3;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function __ZN7WebCore22ThreadableLoaderClientD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b7(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(7);
}
function b9(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(9);
 return 0;
}
function b1(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(1);
 return +0;
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore22ThreadableLoaderClient11didSendDataEyy,b0];
  var FUNCTION_TABLE_did = [b1,b1,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore5TimerINS_11EventSourceEE5firedEv,b2,__ZN7WebCore5TimerINS_11EventSourceEED0Ev,b2,__ZN7WebCore11EventSource20didFailRedirectCheckEv,b2,__ZThn44_N7WebCore11EventSource4stopEv,b2,__ZN7WebCore25EventTargetWithInlineDataD0Ev,b2,__ZN7WebCore11EventSource4stopEv,b2,__ZThn44_N7WebCore11EventSourceD1Ev,b2,__ZN7WebCore11EventSource14refEventTargetEv,b2,__ZN7WebCore11EventSourceD2Ev,b2,vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper,b2,__ZN7WebCore22ThreadableLoaderClientD1Ev,b2,__ZN7WebCore22ThreadableLoaderClientD0Ev,b2,__ZThn40_N7WebCore11EventSourceD0Ev,b2,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper
  ,b2,__ZN7WebCore25EventTargetWithInlineDataD1Ev,b2,vi___ZN7WebCore15ActiveDOMObject6resumeEv__wrapper,b2,__ZN7WebCore11EventSourceD0Ev,b2,__ZN7WebCore5TimerINS_11EventSourceEED1Ev,b2,__ZThn40_N7WebCore11EventSourceD1Ev,b2,__ZThn44_N7WebCore11EventSourceD0Ev,b2,__ZN7WebCore22ThreadableLoaderClient20didFailRedirectCheckEv,b2,vi___ZN7WebCore26ContextDestructionObserver16contextDestroyedEv__wrapper,b2,__ZN7WebCore11EventSource16derefEventTargetEv,b2,__ZThn40_N7WebCore11EventSource20didFailRedirectCheckEv,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZThn40_N7WebCore11EventSource7didFailERKNS_13ResourceErrorE,b3,__ZN7WebCore11EventSource25didFailAccessControlCheckERKNS_13ResourceErrorE,b3,__ZN7WebCore11EventSource7didFailERKNS_13ResourceErrorE,b3,__ZN7WebCore22ThreadableLoaderClient7didFailERKNS_13ResourceErrorE,b3,__ZThn40_N7WebCore11EventSource25didFailAccessControlCheckERKNS_13ResourceErrorE,b3,__ZN7WebCore11EventSource17connectTimerFiredEPNS_5TimerIS0_EE,b3,__ZN7WebCore22ThreadableLoaderClient25didFailAccessControlCheckERKNS_13ResourceErrorE,b3,vii___ZN7WebCore15ActiveDOMObject7suspendENS0_19ReasonForSuspensionE__wrapper,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZNK7WebCore11EventSource22scriptExecutionContextEv,b4,__ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv,b4,ii___ZNK7WebCore15ActiveDOMObject10canSuspendEv__wrapper,b4,ii___ZN7WebCore11EventTarget6toNodeEv__wrapper,b4,ii___ZNK7WebCore15ActiveDOMObject18hasPendingActivityEv__wrapper,b4,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b4,__ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv,b4,__ZNK7WebCore11EventSource20eventTargetInterfaceEv,b4,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b4,__ZN7WebCore22ThreadableLoaderClient32isDocumentThreadableLoaderClientEv,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZThn40_N7WebCore11EventSource18didReceiveResponseEmRKNS_16ResourceResponseE,b5,__ZThn40_N7WebCore11EventSource14didReceiveDataEPKci,b5,__ZN7WebCore22ThreadableLoaderClient14didReceiveDataEPKci,b5,__ZN7WebCore11EventSource14didReceiveDataEPKci,b5,__ZN7WebCore22ThreadableLoaderClient18didReceiveResponseEmRKNS_16ResourceResponseE,b5,__ZN7WebCore11EventSource18didReceiveResponseEmRKNS_16ResourceResponseE,b5,b5,b5];
  var FUNCTION_TABLE_v = [b6,b6,v____cxa_pure_virtual__wrapper,b6];
  var FUNCTION_TABLE_viid = [b7,b7,__ZThn40_N7WebCore11EventSource16didFinishLoadingEmd,b7,__ZN7WebCore11EventSource16didFinishLoadingEmd,b7,__ZN7WebCore22ThreadableLoaderClient16didFinishLoadingEmd,b7];
  var FUNCTION_TABLE_iiiii = [b8,b8,iiiii___ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b8,iiiii___ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b8,b8,b8];
  var FUNCTION_TABLE_iii = [b9,b9,iii___ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b9];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viid: dynCall_viid, dynCall_iiiii: dynCall_iiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viid": invoke_viid, "invoke_iiiii": invoke_iiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE": __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viid = Module["dynCall_viid"] = asm["dynCall_viid"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZThn40_N7WebCore11EventSource18didReceiveResponseEmRKNS_16ResourceResponseE","__ZThn40_N7WebCore11EventSource14didReceiveDataEPKci","__ZNK7WebCore11EventSource22scriptExecutionContextEv","__ZN7WebCore5TimerINS_11EventSourceEE5firedEv","__ZN7WebCore11EventSource7connectEv","__ZN7WebCore5TimerINS_11EventSourceEED0Ev","__ZN7WebCore11EventSource17scheduleReconnectEv","__ZN7WebCore11EventSource22abortConnectionAttemptEv","__ZThn40_N7WebCore11EventSource16didFinishLoadingEmd","__ZN7WebCore11EventSource22scheduleInitialConnectEv","__ZThn44_N7WebCore11EventSource4stopEv","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN7WebCore11EventSource20didFailRedirectCheckEv","__ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv","__ZNK7WebCore11EventSource3urlEv","__ZN7WebCore11EventSource4stopEv","__ZThn40_N7WebCore11EventSource7didFailERKNS_13ResourceErrorE","__ZN7WebCore11EventSource16didFinishLoadingEmd","__ZN7WebCore11EventSourceD2Ev","__ZNK7WebCore11EventSource15withCredentialsEv","__ZN7WebCore22ThreadableLoaderClient14didReceiveDataEPKci","_memset","__ZN7WebCore11EventSource14refEventTargetEv","__ZN7WebCore11EventSource14didReceiveDataEPKci","__ZN7WebCore15ResourceRequestD2Ev","__ZN7WebCore22ThreadableLoaderClient11didSendDataEyy","__ZN7WebCore11EventSource16derefEventTargetEv","__ZN7WebCore22ThreadableLoaderClientD1Ev","__ZNK7WebCore11EventSource10readyStateEv","__ZN3WTF13tryMakeStringIPKcNS_6StringES2_S3_EENS_10PassRefPtrINS_10StringImplEEET_T0_T1_T2_","__ZN7WebCore14SecurityOriginD2Ev","__ZN7WebCore22ThreadableLoaderClientD0Ev","__ZN7WebCore11EventSource7didFailERKNS_13ResourceErrorE","__ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv","__ZThn40_N7WebCore11EventSourceD0Ev","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZN7WebCore22ThreadableLoaderClient7didFailERKNS_13ResourceErrorE","__ZN7WebCore22ThreadableLoaderClient20didFailRedirectCheckEv","__ZN7WebCore11EventSource20parseEventStreamLineEjii","__ZN7WebCore11EventSource6createERNS_22ScriptExecutionContextERKN3WTF6StringERKNS_10DictionaryERi","__ZThn40_N7WebCore11EventSourceD1Ev","__ZN7WebCore19ResourceRequestBaseD2Ev","__ZN7WebCore11EventSourceD0Ev","__ZN7WebCore11EventSource18createMessageEventEv","__ZN7WebCore25EventTargetWithInlineDataD0Ev","__ZN7WebCore11EventSourceC2ERNS_22ScriptExecutionContextERKNS_3URLERKNS_10DictionaryE","__ZN7WebCore5TimerINS_11EventSourceEED1Ev","__ZN7WebCore22ThreadableLoaderClient18didReceiveResponseEmRKNS_16ResourceResponseE","__ZNK7WebCore11EventSource20eventTargetInterfaceEv","__ZThn44_N7WebCore11EventSourceD1Ev","__ZN3WTF10makeStringIPKcNS_6StringES2_S3_EES3_T_T0_T1_T2_","__ZThn44_N7WebCore11EventSourceD0Ev","_memmove","__ZN7WebCore25EventTargetWithInlineDataD1Ev","__ZN7WebCore11EventSource18didReceiveResponseEmRKNS_16ResourceResponseE","__ZN7WebCore11EventSource17connectTimerFiredEPNS_5TimerIS0_EE","__ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE","__ZN7WebCore11EventSource16parseEventStreamEv","__ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore11EventSource25didFailAccessControlCheckERKNS_13ResourceErrorE","_memcpy","__ZN7WebCore11EventSource5closeEv","__ZN7WebCore11EventSource19networkRequestEndedEv","__ZN7WebCore22ThreadableLoaderClient32isDocumentThreadableLoaderClientEv","__ZN7WebCore22ThreadableLoaderClient25didFailAccessControlCheckERKNS_13ResourceErrorE","__ZN7WebCore22ThreadableLoaderClient16didFinishLoadingEmd","__ZThn40_N7WebCore11EventSource20didFailRedirectCheckEv","__ZThn40_N7WebCore11EventSource25didFailAccessControlCheckERKNS_13ResourceErrorE"]

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
H_BASE = parentModule["_malloc"](112 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 112;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore21ResourceLoadSchedulerC1Ev;
var __ZN7WebCore21ResourceLoadSchedulerD1Ev;
var __ZN7WebCore21ResourceLoadScheduler15HostInformationC1ERKN3WTF6StringEj;
var __ZN7WebCore21ResourceLoadScheduler15HostInformationD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
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
  var __ZTVN7WebCore21ResourceLoadSchedulerE=(H_BASE+40)|0;
  var __ZTVN7WebCore5TimerINS_21ResourceLoadSchedulerEEE=(H_BASE+8)|0;
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
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viii=env.invoke_viii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore21ResourceLoadScheduler15HostInformation6removeEPNS_14ResourceLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i3 = i1 + 100 | 0;
 i4 = (i2 | 0) == 0;
 if (!i4) {
  i5 = i2 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i1 + 104 >> 2] | 0;
  i7 = i6 << 2 | 0;
  i8 = 0;
  i9 = i6;
 } else {
  i6 = HEAP32[i1 + 108 >> 2] | 0;
  i10 = i2;
  i11 = i10 + ~(i10 << 15) | 0;
  i10 = (i11 >>> 10 ^ i11) * 9 & -1;
  i11 = i10 >>> 6 ^ i10;
  i10 = i11 + ~(i11 << 11) | 0;
  i11 = i10 >>> 16 ^ i10;
  i10 = i6 & i11;
  i12 = i5 + (i10 << 2) | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  L7 : do {
   if ((i13 | 0) == (i2 | 0)) {
    i14 = i12;
   } else {
    i15 = (i11 >>> 23) + ~i11 | 0;
    i16 = i15 << 12 ^ i15;
    i15 = i16 >>> 7 ^ i16;
    i16 = i15 << 2 ^ i15;
    i15 = i16 >>> 20 ^ i16 | 1;
    i16 = 0;
    i17 = i10;
    i18 = i13;
    while (1) {
     if ((i18 | 0) == 0) {
      i14 = 0;
      break L7;
     }
     i19 = (i16 | 0) == 0 ? i15 : i16;
     i20 = i19 + i17 & i6;
     i21 = i5 + (i20 << 2) | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     if ((i22 | 0) == (i2 | 0)) {
      i14 = i21;
      break;
     } else {
      i16 = i19;
      i17 = i20;
      i18 = i22;
     }
    }
   }
  } while (0);
  i6 = HEAP32[i1 + 104 >> 2] | 0;
  i7 = (i14 | 0) == 0 ? i5 + (i6 << 2) | 0 : i14;
  i8 = i5;
  i9 = i6;
 }
 i6 = i3 | 0;
 i3 = i1 + 104 | 0;
 do {
  if ((i7 | 0) == (i8 + (i9 << 2) | 0)) {
   i23 = 0;
  } else {
   i5 = i7 | 0;
   i14 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i13 = i14 + 4 | 0;
     i10 = i13 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) != 0) {
      HEAP32[i10 >> 2] = i11;
      break;
     }
     i11 = i13 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 31](i11);
    }
   } while (0);
   HEAP32[i5 >> 2] = -1;
   i14 = i1 + 116 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   i14 = i1 + 112 | 0;
   i11 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i11;
   i14 = HEAP32[i3 >> 2] | 0;
   if (!((i11 * 6 & -1 | 0) < (i14 | 0) & (i14 | 0) > 8)) {
    i23 = 1;
    break;
   }
   __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14ResourceLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i6, (i14 | 0) / 2 & -1, 0) | 0;
   i23 = 1;
  }
 } while (0);
 do {
  if (!i4) {
   i6 = i2 + 4 | 0;
   i3 = i6 | 0;
   i7 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i3 >> 2] = i7;
    break;
   }
   i7 = i6 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 if (i23) {
  return;
 }
 i23 = i1 + 84 | 0;
 i7 = HEAP32[i23 >> 2] | 0;
 i6 = i1 + 80 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 L35 : do {
  if ((i3 | 0) == (i7 | 0)) {
   i24 = 37;
  } else {
   i9 = HEAP32[i1 + 88 >> 2] | 0;
   i8 = i1 + 92 | 0;
   i14 = i3;
   while (1) {
    i11 = i9 + (i14 << 2) | 0;
    if ((HEAP32[i11 >> 2] | 0) == (i2 | 0)) {
     i25 = i14;
     i26 = i11;
     i27 = 4;
     i28 = i23;
     i29 = i6;
     i30 = i9;
     i31 = i7;
     break L35;
    }
    i11 = (i14 | 0) == ((HEAP32[i8 >> 2] | 0) - 1 | 0) ? 0 : i14 + 1 | 0;
    if ((i11 | 0) == (i7 | 0)) {
     i24 = 37;
     break;
    } else {
     i14 = i11;
    }
   }
  }
 } while (0);
 L40 : do {
  if ((i24 | 0) == 37) {
   i7 = i1 + 64 | 0;
   i6 = HEAP32[i7 >> 2] | 0;
   i23 = i1 + 60 | 0;
   i3 = HEAP32[i23 >> 2] | 0;
   if ((i3 | 0) != (i6 | 0)) {
    i14 = HEAP32[i1 + 68 >> 2] | 0;
    i8 = i1 + 72 | 0;
    i9 = i3;
    while (1) {
     i3 = i14 + (i9 << 2) | 0;
     if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
      i25 = i9;
      i26 = i3;
      i27 = 3;
      i28 = i7;
      i29 = i23;
      i30 = i14;
      i31 = i6;
      break L40;
     }
     i9 = (i9 | 0) == ((HEAP32[i8 >> 2] | 0) - 1 | 0) ? 0 : i9 + 1 | 0;
     if ((i9 | 0) == (i6 | 0)) {
      break;
     }
    }
   }
   i6 = i1 + 44 | 0;
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i1 + 40 | 0;
   i14 = HEAP32[i8 >> 2] | 0;
   if ((i14 | 0) != (i9 | 0)) {
    i23 = HEAP32[i1 + 48 >> 2] | 0;
    i7 = i1 + 52 | 0;
    i3 = i14;
    while (1) {
     i14 = i23 + (i3 << 2) | 0;
     if ((HEAP32[i14 >> 2] | 0) == (i2 | 0)) {
      i25 = i3;
      i26 = i14;
      i27 = 2;
      i28 = i6;
      i29 = i8;
      i30 = i23;
      i31 = i9;
      break L40;
     }
     i3 = (i3 | 0) == ((HEAP32[i7 >> 2] | 0) - 1 | 0) ? 0 : i3 + 1 | 0;
     if ((i3 | 0) == (i9 | 0)) {
      break;
     }
    }
   }
   i9 = i1 + 24 | 0;
   i3 = HEAP32[i9 >> 2] | 0;
   i7 = i1 + 20 | 0;
   i23 = HEAP32[i7 >> 2] | 0;
   if ((i23 | 0) != (i3 | 0)) {
    i8 = HEAP32[i1 + 28 >> 2] | 0;
    i6 = i1 + 32 | 0;
    i14 = i23;
    while (1) {
     i23 = i8 + (i14 << 2) | 0;
     if ((HEAP32[i23 >> 2] | 0) == (i2 | 0)) {
      i25 = i14;
      i26 = i23;
      i27 = 1;
      i28 = i9;
      i29 = i7;
      i30 = i8;
      i31 = i3;
      break L40;
     }
     i14 = (i14 | 0) == ((HEAP32[i6 >> 2] | 0) - 1 | 0) ? 0 : i14 + 1 | 0;
     if ((i14 | 0) == (i3 | 0)) {
      break;
     }
    }
   }
   i3 = i1 + 4 | 0;
   i14 = HEAP32[i3 >> 2] | 0;
   i6 = i1 | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   if ((i8 | 0) == (i14 | 0)) {
    return;
   }
   i7 = HEAP32[i1 + 8 >> 2] | 0;
   i9 = i1 + 12 | 0;
   i23 = i8;
   while (1) {
    i8 = i7 + (i23 << 2) | 0;
    if ((HEAP32[i8 >> 2] | 0) == (i2 | 0)) {
     i25 = i23;
     i26 = i8;
     i27 = 0;
     i28 = i3;
     i29 = i6;
     i30 = i7;
     i31 = i14;
     break L40;
    }
    i23 = (i23 | 0) == ((HEAP32[i9 >> 2] | 0) - 1 | 0) ? 0 : i23 + 1 | 0;
    if ((i23 | 0) == (i14 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i31 | 0) == (i25 | 0)) {
  return;
 }
 i31 = i30 + (i25 + 1 << 2) | 0;
 do {
  if (!i4) {
   i24 = i2 + 4 | 0;
   i14 = i24 | 0;
   i23 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) != 0) {
    HEAP32[i14 >> 2] = i23;
    break;
   }
   i23 = i24 - 4 | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 31](i23);
  }
 } while (0);
 i2 = HEAP32[i29 >> 2] | 0;
 if (i2 >>> 0 > i25 >>> 0) {
  _memmove(i26 | 0, i31 | 0, (HEAP32[i28 >> 2] | 0) + (i25 ^ 1073741823) << 2 | 0) | 0;
  i25 = HEAP32[i1 + (i27 * 20 & -1) + 12 >> 2] | 0;
  HEAP32[i28 >> 2] = (((HEAP32[i28 >> 2] | 0) - 1 + i25 | 0) >>> 0) % (i25 >>> 0) & -1;
  return;
 } else {
  i25 = i30 + (i2 << 2) | 0;
  _memmove(i30 + (i2 + 1 << 2) | 0, i25 | 0, i26 - i25 | 0) | 0;
  HEAP32[i29 >> 2] = (((HEAP32[i29 >> 2] | 0) + 1 | 0) >>> 0) % ((HEAP32[i1 + (i27 * 20 & -1) + 12 >> 2] | 0) >>> 0) & -1;
  return;
 }
}
function __ZN7WebCore21ResourceLoadScheduler20servePendingRequestsENS_20ResourceLoadPriorityE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 if ((HEAP32[i1 + 88 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore9TimerBase4stopEv(i1 + 32 | 0);
 __ZN7WebCore21ResourceLoadScheduler20servePendingRequestsEPNS0_15HostInformationENS_20ResourceLoadPriorityE(0, HEAP32[i1 + 24 >> 2] | 0, i2);
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i6 = i4 + (i5 << 3) | 0;
 if ((HEAP32[i1 + 16 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i5 | 0) == 0) {
   i7 = i4;
  } else {
   i1 = i4;
   while (1) {
    i8 = HEAP32[i1 >> 2] | 0;
    if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
     i7 = i1;
     break L7;
    }
    i1 = i1 + 8 | 0;
    if ((i1 | 0) == (i6 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i7 | 0) == (i6 | 0)) {
  return;
 } else {
  i9 = 0;
  i10 = 0;
  i11 = 0;
  i12 = i7;
 }
 L15 : while (1) {
  i7 = i12 + 4 | 0;
  if ((i9 | 0) == (i10 | 0)) {
   i4 = i10 + 1 | 0;
   do {
    if (i11 >>> 0 > i7 >>> 0) {
     i13 = 12;
    } else {
     if ((i11 + (i10 << 2) | 0) >>> 0 <= i7 >>> 0) {
      i13 = 12;
      break;
     }
     i5 = i7 - i11 >> 2;
     i1 = i4 + (i10 >>> 2) | 0;
     i8 = i1 >>> 0 > 16 >>> 0 ? i1 : 16;
     i1 = i8 >>> 0 > i4 >>> 0 ? i8 : i4;
     do {
      if (i10 >>> 0 < i1 >>> 0) {
       if (i1 >>> 0 > 1073741823 >>> 0) {
        i13 = 19;
        break L15;
       }
       i8 = __ZN3WTF18fastMallocGoodSizeEj(i1 << 2) | 0;
       i14 = i8 >>> 2;
       i15 = __ZN3WTF10fastMallocEj(i8) | 0;
       i8 = i15;
       i16 = i11;
       _memcpy(i15 | 0, i16 | 0, i10 << 2) | 0;
       if ((i11 | 0) == 0) {
        i17 = i8;
        i18 = i14;
        break;
       }
       i15 = (i8 | 0) == (i11 | 0);
       __ZN3WTF8fastFreeEPv(i16);
       i17 = i15 ? 0 : i8;
       i18 = i15 ? 0 : i14;
      } else {
       i17 = i11;
       i18 = i10;
      }
     } while (0);
     i19 = i17 + (i5 << 2) | 0;
     i20 = i17;
     i21 = i18;
    }
   } while (0);
   do {
    if ((i13 | 0) == 12) {
     i13 = 0;
     i1 = i4 + (i10 >>> 2) | 0;
     i14 = i1 >>> 0 > 16 >>> 0 ? i1 : 16;
     i1 = i14 >>> 0 > i4 >>> 0 ? i14 : i4;
     if (i10 >>> 0 >= i1 >>> 0) {
      i19 = i7;
      i20 = i11;
      i21 = i10;
      break;
     }
     if (i1 >>> 0 > 1073741823 >>> 0) {
      i13 = 14;
      break L15;
     }
     i14 = __ZN3WTF18fastMallocGoodSizeEj(i1 << 2) | 0;
     i1 = i14 >>> 2;
     i15 = __ZN3WTF10fastMallocEj(i14) | 0;
     i14 = i15;
     i8 = i11;
     _memcpy(i15 | 0, i8 | 0, i10 << 2) | 0;
     if ((i11 | 0) == 0) {
      i19 = i7;
      i20 = i14;
      i21 = i1;
      break;
     }
     i15 = (i14 | 0) == (i11 | 0);
     __ZN3WTF8fastFreeEPv(i8);
     i19 = i7;
     i20 = i15 ? 0 : i14;
     i21 = i15 ? 0 : i1;
    }
   } while (0);
   HEAP32[i20 + (i10 << 2) >> 2] = HEAP32[i19 >> 2];
   i22 = i20;
   i23 = i21;
   i24 = i4;
  } else {
   HEAP32[i11 + (i9 << 2) >> 2] = HEAP32[i7 >> 2];
   i22 = i11;
   i23 = i10;
   i24 = i9 + 1 | 0;
  }
  i1 = i12 + 8 | 0;
  if ((i1 | 0) == (i6 | 0)) {
   i13 = 7;
   break;
  } else {
   i25 = i1;
  }
  while (1) {
   i1 = HEAP32[i25 >> 2] | 0;
   if (!((i1 | 0) == (-1 | 0) | (i1 | 0) == 0)) {
    break;
   }
   i1 = i25 + 8 | 0;
   if ((i1 | 0) == (i6 | 0)) {
    i13 = 7;
    break L15;
   } else {
    i25 = i1;
   }
  }
  if ((i25 | 0) == (i6 | 0)) {
   i13 = 7;
   break;
  } else {
   i9 = i24;
   i10 = i23;
   i11 = i22;
   i12 = i25;
  }
 }
 if ((i13 | 0) == 14) {
  _WTFCrash();
 } else if ((i13 | 0) == 19) {
  _WTFCrash();
 } else if ((i13 | 0) == 7) {
  L43 : do {
   if ((i24 | 0) > 0) {
    i25 = 0;
    while (1) {
     if (i24 >>> 0 <= i25 >>> 0) {
      break;
     }
     i12 = HEAP32[i22 + (i25 << 2) >> 2] | 0;
     L47 : do {
      if ((HEAP32[i12 + 112 >> 2] | 0) == 0) {
       i11 = 0;
       while (1) {
        if (i11 >>> 0 >= 5 >>> 0) {
         break;
        }
        if ((HEAP32[i12 + (i11 * 20 & -1) >> 2] | 0) == (HEAP32[i12 + (i11 * 20 & -1) + 4 >> 2] | 0)) {
         i11 = i11 + 1 | 0;
        } else {
         i13 = 33;
         break L47;
        }
       }
       i11 = __ZN3WTF7HashMapINS_6StringEPN7WebCore21ResourceLoadScheduler15HostInformationENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE4takeERKS1_(i3, i12 + 120 | 0) | 0;
       if ((i11 | 0) == 0) {
        break;
       }
       __ZN7WebCore21ResourceLoadScheduler15HostInformationD2Ev(i11);
       __ZN3WTF8fastFreeEPv(i11);
      } else {
       i13 = 33;
      }
     } while (0);
     if ((i13 | 0) == 33) {
      i13 = 0;
      __ZN7WebCore21ResourceLoadScheduler20servePendingRequestsEPNS0_15HostInformationENS_20ResourceLoadPriorityE(0, i12, i2);
     }
     i25 = i25 + 1 | 0;
     if ((i25 | 0) >= (i24 | 0)) {
      break L43;
     }
    }
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  } while (0);
  if ((i22 | 0) == 0) {
   return;
  }
  __ZN3WTF8fastFreeEPv(i22);
  return;
 }
}
function __ZN7WebCore21ResourceLoadScheduler20servePendingRequestsEPNS0_15HostInformationENS_20ResourceLoadPriorityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i1 | 0;
 i5 = i1 + 8 | 0;
 if ((i3 | 0) > 4) {
  STACKTOP = i1;
  return;
 }
 i6 = i2 + 120 | 0;
 i7 = i4 | 0;
 i8 = i2 + 100 | 0;
 i9 = i2 + 112 | 0;
 i10 = i2 + 124 | 0;
 i11 = 4;
 L4 : while (1) {
  i12 = i2 + (i11 * 20 & -1) | 0;
  i13 = i2 + (i11 * 20 & -1) + 4 | 0;
  i14 = i2 + (i11 * 20 & -1) + 8 | 0;
  i15 = i2 + (i11 * 20 & -1) + 12 | 0;
  i16 = (i11 | 0) == 0;
  while (1) {
   i17 = HEAP32[i12 >> 2] | 0;
   if ((i17 | 0) == (HEAP32[i13 >> 2] | 0)) {
    break;
   }
   i18 = HEAP32[(HEAP32[i14 >> 2] | 0) + (i17 << 2) >> 2] | 0;
   i17 = (i18 | 0) == 0;
   if (!i17) {
    i19 = i18 + 4 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   }
   if ((__ZNK7WebCore14ResourceLoader11frameLoaderEv(i18) | 0) == 0) {
    i20 = 0;
   } else {
    i20 = HEAP32[(HEAP32[(__ZNK7WebCore14ResourceLoader11frameLoaderEv(i18) | 0) >> 2] | 0) + 456 >> 2] | 0;
   }
   do {
    if ((HEAP32[i6 >> 2] | 0) == 0) {
     if ((i20 | 0) == 0) {
      i21 = 18;
      break;
     }
     if ((HEAP8[i20 + 964 | 0] & 1) != 0) {
      i21 = 13;
      break;
     }
     if (__ZNK7WebCore8Document21haveStylesheetsLoadedEv(i20) | 0) {
      i21 = 18;
     } else {
      i21 = 13;
     }
    } else {
     i21 = 13;
    }
   } while (0);
   do {
    if ((i21 | 0) == 13) {
     i21 = 0;
     i19 = HEAP32[i9 >> 2] | 0;
     if (i16) {
      if ((i19 | 0) == 0) {
       i22 = 0;
      } else {
       i23 = 1;
       break;
      }
     } else {
      i22 = i19;
     }
     if ((HEAP8[(__ZN7WebCore21resourceLoadSchedulerEv() | 0) + 92 | 0] & 1) == 0) {
      i24 = HEAP32[i10 >> 2] | 0;
     } else {
      i24 = 1;
     }
     if ((i22 | 0) < (i24 | 0)) {
      i21 = 18;
     } else {
      i23 = 1;
     }
    }
   } while (0);
   if ((i21 | 0) == 18) {
    i21 = 0;
    i19 = HEAP32[(HEAP32[i14 >> 2] | 0) + (HEAP32[i12 >> 2] << 2) >> 2] | 0;
    do {
     if ((i19 | 0) != 0) {
      i25 = i19 + 4 | 0;
      i26 = i25 | 0;
      i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
      if ((i27 | 0) != 0) {
       HEAP32[i26 >> 2] = i27;
       break;
      }
      i27 = i25 - 4 | 0;
      if ((i27 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] & 31](i27);
     }
    } while (0);
    i19 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = (i19 | 0) == ((HEAP32[i15 >> 2] | 0) - 1 | 0) ? 0 : i19 + 1 | 0;
    HEAP32[i7 >> 2] = i18;
    if (!i17) {
     i19 = i18 + 4 | 0;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
    }
    __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14ResourceLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i5, i8, i4, i4);
    i19 = HEAP32[i7 >> 2] | 0;
    do {
     if ((i19 | 0) != 0) {
      i27 = i19 + 4 | 0;
      i25 = i27 | 0;
      i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
      if ((i26 | 0) != 0) {
       HEAP32[i25 >> 2] = i26;
       break;
      }
      i26 = i27 - 4 | 0;
      if ((i26 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 31](i26);
     }
    } while (0);
    __ZN7WebCore14ResourceLoader5startEv(i18);
    i23 = 0;
   }
   do {
    if (!i17) {
     i19 = i18 + 4 | 0;
     i26 = i19 | 0;
     i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     if ((i27 | 0) != 0) {
      HEAP32[i26 >> 2] = i27;
      break;
     }
     i27 = i19 - 4 | 0;
     if ((i27 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] & 31](i27);
    }
   } while (0);
   if ((i23 | 0) == 1) {
    i21 = 40;
    break L4;
   }
  }
  i15 = i11 - 1 | 0;
  if ((i15 | 0) < (i3 | 0)) {
   i21 = 41;
   break;
  } else {
   i11 = i15;
  }
 }
 if ((i21 | 0) == 40) {
  STACKTOP = i1;
  return;
 } else if ((i21 | 0) == 41) {
  STACKTOP = i1;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore21ResourceLoadScheduler15HostInformationEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore21ResourceLoadScheduler15HostInformationEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i11 = i9 >>> 7;
 } else {
  i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i11 >>> 23) + ~i11 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i7 = i11;
 i11 = 0;
 while (1) {
  i12 = i7 & i6;
  i13 = i10 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 11;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i11 | 0) == 0 ? i3 : i11;
  i9 = i16;
  i7 = i14 + i12 | 0;
  i11 = i14;
 }
 if ((i17 | 0) == 11) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
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
 HEAP32[i18 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i13 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i13;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i13 << 1 | 0) < (i8 | 0)) {
  i19 = i18;
  i20 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i21 = 8;
  } else {
   i9 = i8 << 1;
   i21 = (i13 * 6 & -1 | 0) < (i9 | 0) ? i8 : i9;
  }
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore21ResourceLoadScheduler15HostInformationEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i21, i18) | 0;
  i19 = i9;
  i20 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14ResourceLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
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
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14ResourceLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i8, 0) | 0;
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
  } else {
   i13 = (i9 >>> 23) + ~i9 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i3;
   i17 = i7;
   i18 = i11;
   while (1) {
    if ((i18 | 0) == (i8 | 0)) {
     i19 = 8;
     break;
    }
    i20 = (i18 | 0) == -1 ? i17 : i15;
    i21 = (i14 | 0) == 0 ? i13 : i14;
    i22 = i21 + i16 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i19 = 10;
     break;
    } else {
     i14 = i21;
     i15 = i20;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
   if ((i19 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i18 = i2 + 16 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) - 1;
    i12 = i20;
    break;
   } else if ((i19 | 0) == 8) {
    i18 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i16 = i1;
    HEAP32[i16 >> 2] = i17;
    HEAP32[i16 + 4 >> 2] = i18;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 i10 = i4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i12 | 0;
 i19 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i4;
 do {
  if ((i19 | 0) != 0) {
   i4 = i19 + 4 | 0;
   i10 = i4 | 0;
   i20 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i10 >> 2] = i20;
    break;
   }
   i20 = i4 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 31](i20);
  }
 } while (0);
 i19 = i2 + 12 | 0;
 i20 = (HEAP32[i19 >> 2] | 0) + 1 | 0;
 HEAP32[i19 >> 2] = i20;
 i19 = i2 + 4 | 0;
 i4 = HEAP32[i19 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i20 << 1 | 0) < (i4 | 0)) {
  i25 = i12;
  i26 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i27 = 8;
  } else {
   i10 = i4 << 1;
   i27 = (i20 * 6 & -1 | 0) < (i10 | 0) ? i4 : i10;
  }
  i10 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14ResourceLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i27, i12) | 0;
  i25 = i10;
  i26 = HEAP32[i19 >> 2] | 0;
 }
 i19 = (HEAP32[i5 >> 2] | 0) + (i26 << 2) | 0;
 i26 = i1;
 HEAP32[i26 >> 2] = i25;
 HEAP32[i26 + 4 >> 2] = i19;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore21ResourceLoadScheduler15HostInformationEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
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
  i2 = i7 + (i10 << 3) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
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
     i25 = 9;
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
   if ((i25 | 0) == 9) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i19 >> 2] = i17;
   HEAP32[i27 + 4 >> 2] = HEAP32[i7 + (i10 << 3) + 4 >> 2];
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
  }
  i17 = i10 + 1 | 0;
  if ((i17 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i17;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i28 << 3) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 | 0;
    i27 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i10 >> 2] = i27;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
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
function __ZN7WebCore21ResourceLoadScheduler10hostForURLERKNS_3URLENS0_16CreateHostPolicyE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 if ((HEAP8[i2 + 4 | 0] & 2) == 0) {
  i8 = HEAP32[i1 + 24 >> 2] | 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 __ZNK7WebCore3URL4hostEv(i5, i2);
 i2 = i1 + 4 | 0;
 i9 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i10 = i5 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = HEAP32[i11 + 16 >> 2] | 0;
 if (i12 >>> 0 > 127 >>> 0) {
  i13 = i12 >>> 7;
 } else {
  i13 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i11) | 0;
 }
 L9 : do {
  if ((i1 | 0) == 0) {
   i14 = 0;
  } else {
   i11 = (i13 >>> 23) + ~i13 | 0;
   i12 = i11 << 12 ^ i11;
   i11 = i12 >>> 7 ^ i12;
   i12 = i11 << 2 ^ i11;
   i11 = i12 >>> 20 ^ i12 | 1;
   i12 = i13;
   i15 = 0;
   while (1) {
    i16 = i12 & i9;
    i17 = i1 + (i16 << 3) | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    i19 = i18;
    if ((i19 | 0) == 0) {
     i14 = 0;
     break L9;
    } else if ((i19 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i18, HEAP32[i10 >> 2] | 0) | 0) {
      break;
     }
    }
    i18 = (i15 | 0) == 0 ? i11 : i15;
    i12 = i18 + i16 | 0;
    i15 = i18;
   }
   if ((i17 | 0) == 0) {
    i14 = 0;
    break;
   }
   i14 = HEAP32[i1 + (i16 << 3) + 4 >> 2] | 0;
  }
 } while (0);
 HEAP32[i6 >> 2] = i14;
 if ((i14 | 0) == 0 & (i3 | 0) == 0) {
  i3 = __ZN3WTF10fastMallocEj(128) | 0;
  i16 = HEAP32[H_BASE + 112 >> 2] | 0;
  _memset(i3 | 0, 0, 120) | 0;
  i1 = HEAP32[i10 >> 2] | 0;
  HEAP32[i3 + 120 >> 2] = i1;
  if ((i1 | 0) != 0) {
   i17 = i1 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
  }
  HEAP32[i3 + 124 >> 2] = i16;
  HEAP32[i6 >> 2] = i3;
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore21ResourceLoadScheduler15HostInformationEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i7, i2, i5, i6);
  i20 = HEAP32[i6 >> 2] | 0;
 } else {
  i20 = i14;
 }
 i14 = HEAP32[i10 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i8 = i20;
  STACKTOP = i4;
  return i8 | 0;
 }
 i10 = i14 | 0;
 i6 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i14);
  i8 = i20;
  STACKTOP = i4;
  return i8 | 0;
 } else {
  HEAP32[i10 >> 2] = i6;
  i8 = i20;
  STACKTOP = i4;
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore21ResourceLoadScheduler12scheduleLoadEPNS_14ResourceLoaderENS_20ResourceLoadPriorityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = HEAP32[i2 + 16 >> 2] | 0;
 i5 = i2 + 192 | 0;
 if ((__ZNK7WebCore14DocumentLoader21archiveResourceForURLERKNS_3URLE(i4, __ZNK7WebCore19ResourceRequestBase3urlEv(i5) | 0) | 0) != 0) {
  __ZN7WebCore14ResourceLoader5startEv(i2);
  return;
 }
 i4 = __ZN7WebCore21ResourceLoadScheduler10hostForURLERKNS_3URLENS0_16CreateHostPolicyE(i1, __ZNK7WebCore19ResourceRequestBase3urlEv(i5) | 0, 0) | 0;
 L5 : do {
  if ((HEAP32[i4 + 112 >> 2] | 0) == 0) {
   i6 = 0;
   while (1) {
    if (i6 >>> 0 >= 5 >>> 0) {
     i7 = 0;
     break L5;
    }
    if ((HEAP32[i4 + (i6 * 20 & -1) >> 2] | 0) == (HEAP32[i4 + (i6 * 20 & -1) + 4 >> 2] | 0)) {
     i6 = i6 + 1 | 0;
    } else {
     i7 = 1;
     break;
    }
   }
  } else {
   i7 = 1;
  }
 } while (0);
 i6 = i4 + (i3 * 20 & -1) | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = i4 + (i3 * 20 & -1) + 4 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i11 = HEAP32[i4 + (i3 * 20 & -1) + 12 >> 2] | 0;
   if ((i10 | 0) == 0) {
    if ((i11 | 0) == 0) {
     i12 = 11;
     break;
    } else {
     i13 = 0;
     break;
    }
   } else {
    if ((i10 | 0) == (i11 - 1 | 0)) {
     i12 = 11;
     break;
    } else {
     i13 = i10;
     break;
    }
   }
  } else {
   if ((i10 + 1 | 0) == (i8 | 0)) {
    i12 = 11;
   } else {
    i13 = i10;
   }
  }
 } while (0);
 if ((i12 | 0) == 11) {
  __ZN3WTF5DequeINS_6RefPtrIN7WebCore14ResourceLoaderEEELj0EE14expandCapacityEv(i6);
  i13 = HEAP32[i9 >> 2] | 0;
 }
 HEAP32[(HEAP32[i4 + (i3 * 20 & -1) + 8 >> 2] | 0) + (i13 << 2) >> 2] = i2;
 if ((i2 | 0) != 0) {
  i13 = i2 + 4 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 }
 i13 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = (i13 | 0) == ((HEAP32[i4 + (i3 * 20 & -1) + 12 >> 2] | 0) - 1 | 0) ? 0 : i13 + 1 | 0;
 do {
  if ((i3 | 0) <= 1) {
   if ((HEAP8[(__ZNK7WebCore19ResourceRequestBase3urlEv(i5) | 0) + 4 | 0] & 2) == 0) {
    break;
   }
   if (!((i3 | 0) != 1 | i7)) {
    break;
   }
   __ZN7WebCore21ResourceLoadScheduler32notifyDidScheduleResourceRequestEPNS_14ResourceLoaderE(0, i2);
   if (+HEAPF64[i1 + 40 >> 3] != +0) {
    return;
   }
   __ZN7WebCore9TimerBase5startEdd(i1 + 32 | 0, +0, +0);
   return;
  }
 } while (0);
 __ZN7WebCore21ResourceLoadScheduler20servePendingRequestsEPNS0_15HostInformationENS_20ResourceLoadPriorityE(0, i4, i3);
 return;
}
function __ZN3WTF7HashMapINS_6StringEPN7WebCore21ResourceLoadScheduler15HostInformationENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE4takeERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = i5 << 3 | 0;
  i7 = 0;
  i8 = i5;
 } else {
  i5 = HEAP32[i1 + 8 >> 2] | 0;
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
  i3 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = (i16 | 0) == 0 ? i11 + (i3 << 3) | 0 : i16;
  i7 = i11;
  i8 = i3;
 }
 i3 = i1 + 4 | 0;
 if ((i6 | 0) == (i7 + (i8 << 3) | 0)) {
  i17 = 0;
  return i17 | 0;
 }
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 i7 = i1 | 0;
 i11 = i6 | 0;
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i16 = i6 | 0;
   i10 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i16 >> 2] = i10;
    break;
   }
  }
 } while (0);
 HEAP32[i11 >> 2] = -1;
 i11 = i1 + 16 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 i11 = i1 + 12 | 0;
 i1 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 HEAP32[i11 >> 2] = i1;
 i11 = HEAP32[i3 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i11 | 0) & (i11 | 0) > 8)) {
  i17 = i8;
  return i17 | 0;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore21ResourceLoadScheduler15HostInformationEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i7, (i11 | 0) / 2 & -1, 0) | 0;
 i17 = i8;
 return i17 | 0;
}
function __ZN7WebCore21ResourceLoadScheduler15HostInformationD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 120 >> 2] | 0;
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
 i2 = HEAP32[i1 + 100 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 104 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i3 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i3 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
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
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
     }
    } while (0);
    i3 = i3 + 1 | 0;
    if ((i3 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore14ResourceLoaderEEELj0EE10destroyAllEv(i1 + 80 | 0);
 i2 = i1 + 88 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 92 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore14ResourceLoaderEEELj0EE10destroyAllEv(i1 + 60 | 0);
 i4 = i1 + 68 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 72 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore14ResourceLoaderEEELj0EE10destroyAllEv(i1 + 40 | 0);
 i2 = i1 + 48 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 52 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore14ResourceLoaderEEELj0EE10destroyAllEv(i1 + 20 | 0);
 i4 = i1 + 28 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 32 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore14ResourceLoaderEEELj0EE10destroyAllEv(i1 | 0);
 i2 = i1 + 8 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore21ResourceLoadScheduler15HostInformationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 120 >> 2] | 0;
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
 i2 = HEAP32[i1 + 100 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 104 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i3 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i3 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
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
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
     }
    } while (0);
    i3 = i3 + 1 | 0;
    if ((i3 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore14ResourceLoaderEEELj0EE10destroyAllEv(i1 + 80 | 0);
 i2 = i1 + 88 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 92 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore14ResourceLoaderEEELj0EE10destroyAllEv(i1 + 60 | 0);
 i4 = i1 + 68 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 72 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore14ResourceLoaderEEELj0EE10destroyAllEv(i1 + 40 | 0);
 i2 = i1 + 48 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 52 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore14ResourceLoaderEEELj0EE10destroyAllEv(i1 + 20 | 0);
 i4 = i1 + 28 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 32 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore14ResourceLoaderEEELj0EE10destroyAllEv(i1 | 0);
 i2 = i1 + 8 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN3WTF5DequeINS_6RefPtrIN7WebCore14ResourceLoaderEEELj0EE10destroyAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + (i4 << 2) | 0;
 if (i3 >>> 0 <= i4 >>> 0) {
  if ((i3 | 0) == (i4 | 0)) {
   return;
  }
  i8 = i6 + (i3 << 2) | 0;
  while (1) {
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 + 4 | 0;
     i11 = i10 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) != 0) {
      HEAP32[i11 >> 2] = i12;
      break;
     }
     i12 = i10 - 4 | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
    }
   } while (0);
   i8 = i8 + 4 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  return;
 }
 if ((i4 | 0) == 0) {
  i13 = i6;
  i14 = i3;
 } else {
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i4 = i6 + 4 | 0;
     i8 = i4 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i4 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  i13 = HEAP32[i5 >> 2] | 0;
  i14 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i13 + (i2 << 2) | 0;
 if ((i14 | 0) == (i2 | 0)) {
  return;
 }
 i2 = i13 + (i14 << 2) | 0;
 while (1) {
  i14 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i14 | 0) != 0) {
    i13 = i14 + 4 | 0;
    i5 = i13 | 0;
    i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
    if ((i7 | 0) != 0) {
     HEAP32[i5 >> 2] = i7;
     break;
    }
    i7 = i13 - 4 | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
   }
  } while (0);
  i2 = i2 + 4 | 0;
  if ((i2 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14ResourceLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i5 = i2;
 i6 = i5 + ~(i5 << 15) | 0;
 i5 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i5 >>> 6 ^ i5;
 i5 = i6 + ~(i6 << 11) | 0;
 i6 = i5 >>> 16 ^ i5;
 i5 = i6 & i4;
 i7 = i3 + (i5 << 2) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L1 : do {
  if ((i8 | 0) == 0) {
   i9 = 0;
   i10 = i7;
   i11 = 3;
  } else {
   i12 = (i6 >>> 23) + ~i6 | 0;
   i13 = i12 << 12 ^ i12;
   i12 = i13 >>> 7 ^ i13;
   i13 = i12 << 2 ^ i12;
   i12 = i13 >>> 20 ^ i13 | 1;
   i13 = 0;
   i14 = 0;
   i15 = i5;
   i16 = i7;
   i17 = i8;
   while (1) {
    if ((i17 | 0) == (i2 | 0)) {
     i18 = i16;
     break L1;
    }
    i19 = (i17 | 0) == -1 ? i16 : i13;
    i20 = (i14 | 0) == 0 ? i12 : i14;
    i21 = i20 + i15 & i4;
    i22 = i3 + (i21 << 2) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    if ((i23 | 0) == 0) {
     i9 = i19;
     i10 = i22;
     i11 = 3;
     break;
    } else {
     i13 = i19;
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
    }
   }
  }
 } while (0);
 if ((i11 | 0) == 3) {
  i18 = (i9 | 0) != 0 ? i9 : i10;
 }
 i10 = i18 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i11 = i9 + 4 | 0;
   i3 = i11 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i11 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
  }
 } while (0);
 i9 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i10 >> 2] = i9;
 return i18 | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14ResourceLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
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
  i2 = i7 + (i10 << 2) | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14ResourceLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) | 0;
   i12 = (i2 | 0) == (i3 | 0) ? i6 : i11;
  }
  i6 = i10 + 1 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i6;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i13 = 0;
 } else {
  i8 = i12;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i13 << 2) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 + 4 | 0;
    i3 = i10 | 0;
    i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
    if ((i6 | 0) != 0) {
     HEAP32[i3 >> 2] = i6;
     break;
    }
    i6 = i10 - 4 | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
   }
  } while (0);
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i13 = i1;
  } else {
   i8 = i12;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore21ResourceLoadScheduler27crossOriginRedirectReceivedEPNS_14ResourceLoaderERKNS_3URLE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = __ZN7WebCore21ResourceLoadScheduler10hostForURLERKNS_3URLENS0_16CreateHostPolicyE(i1, __ZNK7WebCore19ResourceRequestBase3urlEv(i2 + 192 | 0) | 0, 1) | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = __ZN7WebCore21ResourceLoadScheduler10hostForURLERKNS_3URLENS0_16CreateHostPolicyE(i1, i3, 0) | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i6 + 120 >> 2] | 0, HEAP32[i7 + 120 >> 2] | 0) | 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i1 = i2 + 4 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14ResourceLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i4 + 8 | 0, i7 + 100 | 0, i5, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i7 = i3 | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i7 >> 2] = i1;
    break;
   }
   i1 = i3 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
  }
 } while (0);
 __ZN7WebCore21ResourceLoadScheduler15HostInformation6removeEPNS_14ResourceLoaderE(i6, i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore21resourceLoadSchedulerEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i1 = HEAP32[H_BASE + 104 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i2 = i1;
  return i2 | 0;
 }
 if ((HEAP8[H_BASE + 96 | 0] & 1) != 0) {
  i1 = __ZN3WTF10fastMallocEj(96) | 0;
  i3 = i1;
  HEAP32[i1 >> 2] = H_BASE + 48;
  _memset(i1 + 4 | 0, 0, 20) | 0;
  i4 = __ZN3WTF10fastMallocEj(128) | 0;
  _memset(i4 | 0, 0, 124) | 0;
  HEAP32[i4 + 124 >> 2] = 20;
  HEAP32[i1 + 24 >> 2] = i4;
  i4 = i1 + 32 | 0;
  __ZN7WebCore9TimerBaseC2Ev(i4);
  HEAP32[i4 >> 2] = H_BASE + 16;
  HEAP32[i1 + 76 >> 2] = i3;
  i4 = i1 + 80 | 0;
  HEAP32[i4 >> 2] = F_BASE_vii + 8;
  HEAP32[i4 + 4 >> 2] = 0;
  HEAP32[i1 + 88 >> 2] = 0;
  HEAP8[i1 + 92 | 0] = 0;
  i1 = __ZN7WebCore43initializeMaximumHTTPConnectionCountPerHostEv() | 0;
  HEAP32[H_BASE + 112 >> 2] = i1;
  HEAP32[H_BASE + 104 >> 2] = i3;
  i2 = i3;
  return i2 | 0;
 }
 HEAP8[H_BASE + 96 | 0] = 1;
 i3 = __ZN7WebCore18platformStrategiesEv() | 0;
 i1 = i3 + 12 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 1](i3) | 0;
  HEAP32[i1 >> 2] = i5;
  i6 = i5;
 } else {
  i6 = i4;
 }
 i4 = FUNCTION_TABLE_ii[HEAP32[HEAP32[i6 >> 2] >> 2] & 1](i6) | 0;
 HEAP32[H_BASE + 104 >> 2] = i4;
 HEAP8[H_BASE + 96 | 0] = 0;
 i2 = i4;
 return i2 | 0;
}
function __ZN7WebCore21ResourceLoadScheduler15HostInformation8scheduleEPNS_14ResourceLoaderENS_20ResourceLoadPriorityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = i1 + (i3 * 20 & -1) | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + (i3 * 20 & -1) + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i8 = HEAP32[i1 + (i3 * 20 & -1) + 12 >> 2] | 0;
   if ((i7 | 0) == 0) {
    if ((i8 | 0) == 0) {
     i9 = 6;
     break;
    } else {
     i10 = 0;
     break;
    }
   } else {
    if ((i7 | 0) == (i8 - 1 | 0)) {
     i9 = 6;
     break;
    } else {
     i10 = i7;
     break;
    }
   }
  } else {
   if ((i7 + 1 | 0) == (i5 | 0)) {
    i9 = 6;
   } else {
    i10 = i7;
   }
  }
 } while (0);
 if ((i9 | 0) == 6) {
  __ZN3WTF5DequeINS_6RefPtrIN7WebCore14ResourceLoaderEEELj0EE14expandCapacityEv(i4);
  i10 = HEAP32[i6 >> 2] | 0;
 }
 HEAP32[(HEAP32[i1 + (i3 * 20 & -1) + 8 >> 2] | 0) + (i10 << 2) >> 2] = i2;
 if ((i2 | 0) != 0) {
  i10 = i2 + 4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 i10 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = (i10 | 0) == ((HEAP32[i1 + (i3 * 20 & -1) + 12 >> 2] | 0) - 1 | 0) ? 0 : i10 + 1 | 0;
 return;
}
function __ZN3WTF5DequeINS_6RefPtrIN7WebCore14ResourceLoaderEEELj0EE14expandCapacityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + 1 + (i3 >>> 2) | 0;
 i7 = i6 >>> 0 > 16 >>> 0 ? i6 : 16;
 if (i7 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 2) | 0;
 HEAP32[i2 >> 2] = i6 >>> 2;
 i7 = __ZN3WTF10fastMallocEj(i6) | 0;
 i6 = i7;
 HEAP32[i4 >> 2] = i6;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 if (i9 >>> 0 > i10 >>> 0) {
  _memcpy(i7 | 0, i5 | 0, i10 << 2) | 0;
  i7 = HEAP32[i8 >> 2] | 0;
  i1 = i7 - i3 + (HEAP32[i2 >> 2] | 0) | 0;
  _memcpy((HEAP32[i4 >> 2] | 0) + (i1 << 2) | 0, i5 + (i7 << 2) | 0, i3 - i7 << 2) | 0;
  HEAP32[i8 >> 2] = i1;
 } else {
  _memcpy(i6 + (i9 << 2) | 0, i5 + (i9 << 2) | 0, i10 - i9 << 2) | 0;
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore21ResourceLoadScheduler32notifyDidScheduleResourceRequestEPNS_14ResourceLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((__ZNK7WebCore14ResourceLoader11frameLoaderEv(i2) | 0) == 0) {
  i3 = 0;
 } else {
  i3 = HEAP32[(HEAP32[(__ZNK7WebCore14ResourceLoader11frameLoaderEv(i2) | 0) >> 2] | 0) + 456 >> 2] | 0;
 }
 i1 = __ZNK7WebCore19ResourceRequestBase3urlEv(i2 + 192 | 0) | 0;
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i3 | 0) == 0) {
  return;
 }
 i2 = __ZNK7WebCore8Document4pageEv(i3) | 0;
 do {
  if ((i2 | 0) == 0) {
   i4 = HEAP32[i3 + 2204 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i5 = 0;
    break;
   }
   i5 = __ZNK7WebCore8Document4pageEv(i4) | 0;
  } else {
   i5 = i2;
  }
 } while (0);
 i2 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i5) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore24InspectorInstrumentation30didScheduleResourceRequestImplEPNS_19InstrumentingAgentsERKN3WTF6StringEPNS_5FrameE(i2, i1, HEAP32[i3 + 332 >> 2] | 0);
 return;
}
function __ZN7WebCore21ResourceLoadScheduler15HostInformation17addLoadInProgressEPNS_14ResourceLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i6 = i2 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14ResourceLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 100 | 0, i4, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i4 + 4 | 0;
 i4 = i5 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore21ResourceLoadSchedulerD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 __ZN7WebCore9TimerBaseD2Ev(i1 + 32 | 0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZN3WTF8fastFreeEPv(i3);
  return;
 }
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i5 = 0;
  while (1) {
   i6 = HEAP32[i2 + (i5 << 3) >> 2] | 0;
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
   i5 = i5 + 1 | 0;
   if ((i5 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 i3 = i1;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN7WebCore21ResourceLoadScheduler23scheduleSubresourceLoadEPNS_5FrameEPNS_14CachedResourceERKNS_15ResourceRequestENS_20ResourceLoadPriorityERKNS_21ResourceLoaderOptionsE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8 | 0;
 __ZN7WebCore17SubresourceLoader6createEPNS_5FrameEPNS_14CachedResourceERKNS_15ResourceRequestERKNS_21ResourceLoaderOptionsE(i9, i3, i4, i5, i7);
 i7 = i9 | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 if ((i9 | 0) == 0) {
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i9;
  STACKTOP = i8;
  return;
 }
 __ZN7WebCore21ResourceLoadScheduler12scheduleLoadEPNS_14ResourceLoaderENS_20ResourceLoadPriorityE(i2, i9, i6);
 i10 = i1 | 0;
 HEAP32[i10 >> 2] = i9;
 STACKTOP = i8;
 return;
}
function __ZN7WebCore21ResourceLoadSchedulerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 __ZN7WebCore9TimerBaseD2Ev(i1 + 32 | 0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i1 = 0;
  while (1) {
   i4 = HEAP32[i2 + (i1 << 3) >> 2] | 0;
   i5 = i4;
   do {
    if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
     i6 = i4 | 0;
     i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i6 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore21ResourceLoadSchedulerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 __ZN7WebCore9TimerBaseD2Ev(i1 + 32 | 0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i1 = 0;
  while (1) {
   i4 = HEAP32[i2 + (i1 << 3) >> 2] | 0;
   i5 = i4;
   do {
    if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
     i6 = i4 | 0;
     i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i6 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore21ResourceLoadScheduler21resumePendingRequestsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 88 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) != 0) {
  return;
 }
 L4 : do {
  if ((HEAP32[i1 + 16 >> 2] | 0) == 0) {
   i3 = HEAP32[i1 + 24 >> 2] | 0;
   if ((HEAP32[i3 + 112 >> 2] | 0) == 0) {
    i4 = 0;
   } else {
    break;
   }
   while (1) {
    if (i4 >>> 0 >= 5 >>> 0) {
     break;
    }
    if ((HEAP32[i3 + (i4 * 20 & -1) >> 2] | 0) == (HEAP32[i3 + (i4 * 20 & -1) + 4 >> 2] | 0)) {
     i4 = i4 + 1 | 0;
    } else {
     break L4;
    }
   }
   return;
  }
 } while (0);
 if (+HEAPF64[i1 + 40 >> 3] != +0) {
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 32 | 0, +0, +0);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_viiiiiii + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vi + 16;
}
function __ZN7WebCore21ResourceLoadSchedulerC2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 _memset(i1 + 4 | 0, 0, 20) | 0;
 i2 = __ZN3WTF10fastMallocEj(128) | 0;
 _memset(i2 | 0, 0, 124) | 0;
 HEAP32[i2 + 124 >> 2] = 20;
 HEAP32[i1 + 24 >> 2] = i2;
 i2 = i1 + 32 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 16;
 HEAP32[i1 + 76 >> 2] = i1;
 i2 = i1 + 80 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 8;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP32[i1 + 88 >> 2] = 0;
 HEAP8[i1 + 92 | 0] = 0;
 i1 = __ZN7WebCore43initializeMaximumHTTPConnectionCountPerHostEv() | 0;
 HEAP32[H_BASE + 112 >> 2] = i1;
 return;
}
function __ZN7WebCore21ResourceLoadSchedulerC1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 _memset(i1 + 4 | 0, 0, 20) | 0;
 i2 = __ZN3WTF10fastMallocEj(128) | 0;
 _memset(i2 | 0, 0, 124) | 0;
 HEAP32[i2 + 124 >> 2] = 20;
 HEAP32[i1 + 24 >> 2] = i2;
 i2 = i1 + 32 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 16;
 HEAP32[i1 + 76 >> 2] = i1;
 i2 = i1 + 80 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 8;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP32[i1 + 88 >> 2] = 0;
 HEAP8[i1 + 92 | 0] = 0;
 i1 = __ZN7WebCore43initializeMaximumHTTPConnectionCountPerHostEv() | 0;
 HEAP32[H_BASE + 112 >> 2] = i1;
 return;
}
function __ZN7WebCore21ResourceLoadScheduler15HostInformationC2ERKN3WTF6StringEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 _memset(i1 | 0, 0, 40) | 0;
 _memset(i1 + 40 | 0, 0, 20) | 0;
 _memset(i1 + 60 | 0, 0, 20) | 0;
 _memset(i1 + 80 | 0, 0, 20) | 0;
 _memset(i1 + 100 | 0, 0, 20) | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 120 >> 2] = i4;
 if ((i4 | 0) == 0) {
  i5 = i1 + 124 | 0;
  HEAP32[i5 >> 2] = i3;
  return;
 }
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 i5 = i1 + 124 | 0;
 HEAP32[i5 >> 2] = i3;
 return;
}
function __ZN7WebCore21ResourceLoadScheduler15HostInformationC1ERKN3WTF6StringEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 _memset(i1 | 0, 0, 40) | 0;
 _memset(i1 + 40 | 0, 0, 20) | 0;
 _memset(i1 + 60 | 0, 0, 20) | 0;
 _memset(i1 + 80 | 0, 0, 20) | 0;
 _memset(i1 + 100 | 0, 0, 20) | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 120 >> 2] = i4;
 if ((i4 | 0) == 0) {
  i5 = i1 + 124 | 0;
  HEAP32[i5 >> 2] = i3;
  return;
 }
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 i5 = i1 + 124 | 0;
 HEAP32[i5 >> 2] = i3;
 return;
}
function __ZNK7WebCore21ResourceLoadScheduler15HostInformation13limitRequestsENS_20ResourceLoadPriorityE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   if ((i3 | 0) == 0) {
    i4 = 0;
    break;
   } else {
    i5 = 1;
   }
   return i5 | 0;
  } else {
   i4 = i3;
  }
 } while (0);
 if ((HEAP8[(__ZN7WebCore21resourceLoadSchedulerEv() | 0) + 92 | 0] & 1) == 0) {
  i6 = HEAP32[i1 + 124 >> 2] | 0;
 } else {
  i6 = 1;
 }
 i5 = (i4 | 0) >= (i6 | 0);
 return i5 | 0;
}
function __ZNK7WebCore21ResourceLoadScheduler15HostInformation11hasRequestsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP32[i1 + 112 >> 2] | 0) == 0) {
  i2 = 0;
 } else {
  i3 = 1;
  return i3 | 0;
 }
 while (1) {
  if (i2 >>> 0 >= 5 >>> 0) {
   i3 = 0;
   i4 = 6;
   break;
  }
  if ((HEAP32[i1 + (i2 * 20 & -1) >> 2] | 0) == (HEAP32[i1 + (i2 * 20 & -1) + 4 >> 2] | 0)) {
   i2 = i2 + 1 | 0;
  } else {
   i3 = 1;
   i4 = 7;
   break;
  }
 }
 if ((i4 | 0) == 7) {
  return i3 | 0;
 } else if ((i4 | 0) == 6) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore21ResourceLoadScheduler24schedulePluginStreamLoadEPNS_5FrameEPNS_32NetscapePlugInStreamLoaderClientERKNS_15ResourceRequestE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore26NetscapePlugInStreamLoader6createEPNS_5FrameEPNS_32NetscapePlugInStreamLoaderClientERKNS_15ResourceRequestE(i1, i3, i4, i5);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 __ZN7WebCore21ResourceLoadScheduler12scheduleLoadEPNS_14ResourceLoaderENS_20ResourceLoadPriorityE(i2, i5, 1);
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
function __ZN7WebCore21ResourceLoadScheduler6removeEPNS_14ResourceLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN7WebCore21ResourceLoadScheduler10hostForURLERKNS_3URLENS0_16CreateHostPolicyE(i1, __ZNK7WebCore19ResourceRequestBase3urlEv(i2 + 192 | 0) | 0, 1) | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore21ResourceLoadScheduler15HostInformation6removeEPNS_14ResourceLoaderE(i3, i2);
 }
 if (+HEAPF64[i1 + 40 >> 3] != +0) {
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 32 | 0, +0, +0);
 return;
}
function __ZN7WebCore5TimerINS_21ResourceLoadSchedulerEE5firedEv(i1) {
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
function dynCall_viiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore21ResourceLoadScheduler28scheduleServePendingRequestsEv(i1) {
 i1 = i1 | 0;
 if (+HEAPF64[i1 + 40 >> 3] != +0) {
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 32 | 0, +0, +0);
 return;
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
function __ZN7WebCore21ResourceLoadScheduler17requestTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 15](i1, 0);
 return;
}
function __ZN7WebCore21ResourceLoadScheduler22suspendPendingRequestsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 88 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore5TimerINS_21ResourceLoadSchedulerEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function b5(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(5);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore21ResourceLoadScheduler23setSerialLoadingEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 92 | 0] = i2 & 1;
 return;
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
function __ZN7WebCore5TimerINS_21ResourceLoadSchedulerEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
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
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function b8(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(8);
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function b1(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(1);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore21ResourceLoadScheduler24schedulePluginStreamLoadEPNS_5FrameEPNS_32NetscapePlugInStreamLoaderClientERKNS_15ResourceRequestE,b0];
  var FUNCTION_TABLE_did = [b1,b1,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore5TimerINS_21ResourceLoadSchedulerEED0Ev,b2,__ZN7WebCore5TimerINS_21ResourceLoadSchedulerEED1Ev,b2,__ZN7WebCore21ResourceLoadSchedulerC2Ev,b2,__ZN7WebCore21ResourceLoadScheduler22suspendPendingRequestsEv,b2,__ZN7WebCore5TimerINS_21ResourceLoadSchedulerEE5firedEv,b2,__ZN7WebCore21ResourceLoadScheduler21resumePendingRequestsEv,b2,__ZN7WebCore21ResourceLoadScheduler15HostInformationD2Ev,b2,__ZN7WebCore21ResourceLoadSchedulerD0Ev,b2,__ZN7WebCore21ResourceLoadSchedulerD2Ev,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore21ResourceLoadScheduler6removeEPNS_14ResourceLoaderE,b3,__ZN7WebCore21ResourceLoadScheduler20servePendingRequestsENS_20ResourceLoadPriorityE,b3,__ZN7WebCore21ResourceLoadScheduler23setSerialLoadingEnabledEb,b3,__ZN7WebCore21ResourceLoadScheduler17requestTimerFiredEPNS_5TimerIS0_EE,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4];
  var FUNCTION_TABLE_viiiiiii = [b5,b5,__ZN7WebCore21ResourceLoadScheduler23scheduleSubresourceLoadEPNS_5FrameEPNS_14CachedResourceERKNS_15ResourceRequestENS_20ResourceLoadPriorityERKNS_21ResourceLoaderOptionsE,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  var FUNCTION_TABLE_viii = [b8,b8,__ZN7WebCore21ResourceLoadScheduler27crossOriginRedirectReceivedEPNS_14ResourceLoaderERKNS_3URLE,b8,__ZN7WebCore21ResourceLoadScheduler15HostInformationC2ERKN3WTF6StringEj,b8,b8,b8];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viiiiiii: dynCall_viiiiiii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viii: dynCall_viii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viiiiiii": invoke_viiiiiii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viii": invoke_viii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE }, buffer);
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
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore21ResourceLoadScheduler15HostInformationEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_","_strlen","__ZN3WTF7HashMapINS_6StringEPN7WebCore21ResourceLoadScheduler15HostInformationENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE4takeERKS1_","__ZN7WebCore21ResourceLoadScheduler23setSerialLoadingEnabledEb","__ZNK7WebCore21ResourceLoadScheduler15HostInformation13limitRequestsENS_20ResourceLoadPriorityE","__ZN7WebCore21ResourceLoadScheduler28scheduleServePendingRequestsEv","__ZN7WebCore21ResourceLoadSchedulerC2Ev","__ZN7WebCore21ResourceLoadScheduler12scheduleLoadEPNS_14ResourceLoaderENS_20ResourceLoadPriorityE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore14ResourceLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZN7WebCore21ResourceLoadScheduler17requestTimerFiredEPNS_5TimerIS0_EE","__ZN7WebCore21ResourceLoadScheduler6removeEPNS_14ResourceLoaderE","__ZN7WebCore21ResourceLoadScheduler10hostForURLERKNS_3URLENS0_16CreateHostPolicyE","__ZN7WebCore21ResourceLoadScheduler15HostInformation17addLoadInProgressEPNS_14ResourceLoaderE","__ZN7WebCore21ResourceLoadScheduler15HostInformation8scheduleEPNS_14ResourceLoaderENS_20ResourceLoadPriorityE","_memset","__ZN7WebCore21ResourceLoadScheduler32notifyDidScheduleResourceRequestEPNS_14ResourceLoaderE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore14ResourceLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_","_memcpy","__ZN7WebCore21ResourceLoadSchedulerD0Ev","__ZN7WebCore21ResourceLoadScheduler15HostInformationC2ERKN3WTF6StringEj","__ZN7WebCore21ResourceLoadScheduler15HostInformation6removeEPNS_14ResourceLoaderE","__ZN7WebCore21ResourceLoadScheduler22suspendPendingRequestsEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore21ResourceLoadScheduler15HostInformationEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore21ResourceLoadScheduler20servePendingRequestsEPNS0_15HostInformationENS_20ResourceLoadPriorityE","__ZN7WebCore5TimerINS_21ResourceLoadSchedulerEED0Ev","__ZN7WebCore21ResourceLoadScheduler15HostInformationD2Ev","__ZNK7WebCore21ResourceLoadScheduler15HostInformation11hasRequestsEv","__ZN3WTF5DequeINS_6RefPtrIN7WebCore14ResourceLoaderEEELj0EE14expandCapacityEv","__ZN7WebCore21ResourceLoadScheduler24schedulePluginStreamLoadEPNS_5FrameEPNS_32NetscapePlugInStreamLoaderClientERKNS_15ResourceRequestE","__ZN3WTF5DequeINS_6RefPtrIN7WebCore14ResourceLoaderEEELj0EE10destroyAllEv","__ZN7WebCore21ResourceLoadScheduler27crossOriginRedirectReceivedEPNS_14ResourceLoaderERKNS_3URLE","__ZN7WebCore5TimerINS_21ResourceLoadSchedulerEED1Ev","_memmove","__ZN7WebCore21ResourceLoadScheduler20servePendingRequestsENS_20ResourceLoadPriorityE","__ZN7WebCore21ResourceLoadSchedulerD2Ev","__ZN7WebCore5TimerINS_21ResourceLoadSchedulerEE5firedEv","__ZN7WebCore21ResourceLoadScheduler23scheduleSubresourceLoadEPNS_5FrameEPNS_14CachedResourceERKNS_15ResourceRequestENS_20ResourceLoadPriorityERKNS_21ResourceLoaderOptionsE","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore14ResourceLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_","__ZN7WebCore21ResourceLoadScheduler21resumePendingRequestsEv","__ZN7WebCore21resourceLoadSchedulerEv"]

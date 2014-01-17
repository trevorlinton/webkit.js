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
H_BASE = parentModule["_malloc"](8 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 8;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore17HistoryControllerC1ERNS_5FrameE;
var __ZN7WebCore17HistoryControllerD1Ev;
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
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var invoke_viii=env.invoke_viii;
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
function __ZN7WebCore17HistoryController14initializeItemEPNS_11HistoryItemE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 56 | 0;
 i7 = i3 + 104 | 0;
 i8 = i3 + 112 | 0;
 i9 = i1 | 0;
 i1 = HEAP32[(HEAP32[i9 >> 2] | 0) + 128 >> 2] | 0;
 i10 = __ZNK7WebCore14DocumentLoader14unreachableURLEv(i1) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = (i11 | 0) == 0;
 if (!i12) {
  i13 = i11 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = HEAP8[i10 + 4 | 0] | 0;
 i14 = HEAP32[i10 + 8 >> 2] | 0;
 i15 = HEAP32[i10 + 12 >> 2] | 0;
 i16 = HEAP32[i10 + 16 >> 2] | 0;
 i17 = HEAP32[i10 + 20 >> 2] | 0;
 i18 = HEAP32[i10 + 24 >> 2] | 0;
 i19 = HEAP32[i10 + 28 >> 2] | 0;
 i20 = HEAP32[i10 + 32 >> 2] | 0;
 i21 = HEAP32[i10 + 36 >> 2] | 0;
 i22 = HEAP32[i10 + 40 >> 2] | 0;
 i23 = HEAP32[i10 + 44 >> 2] | 0;
 i10 = i5 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i5);
 i24 = i6 | 0;
 HEAP32[i24 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i6);
 do {
  if (i12) {
   i25 = 14;
  } else {
   if ((HEAP32[i11 + 4 >> 2] | 0) == 0) {
    i25 = 14;
    break;
   }
   i26 = i11 | 0;
   HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
   i27 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i11;
   do {
    if ((i27 | 0) != 0) {
     i28 = i27 | 0;
     i29 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i29 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i28 >> 2] = i29;
      break;
     }
    }
   } while (0);
   i27 = i5 + 4 | 0;
   i29 = i13 & 3;
   HEAP8[i27] = i29 | HEAP8[i27] & -4;
   HEAP32[i5 + 8 >> 2] = i14;
   HEAP32[i5 + 12 >> 2] = i15;
   HEAP32[i5 + 16 >> 2] = i16;
   HEAP32[i5 + 20 >> 2] = i17;
   HEAP32[i5 + 24 >> 2] = i18;
   HEAP32[i5 + 28 >> 2] = i19;
   HEAP32[i5 + 32 >> 2] = i20;
   HEAP32[i5 + 36 >> 2] = i21;
   HEAP32[i5 + 40 >> 2] = i22;
   HEAP32[i5 + 44 >> 2] = i23;
   HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
   i27 = HEAP32[i24 >> 2] | 0;
   HEAP32[i24 >> 2] = i11;
   do {
    if ((i27 | 0) != 0) {
     i28 = i27 | 0;
     i30 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i30 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i28 >> 2] = i30;
      break;
     }
    }
   } while (0);
   i27 = i6 + 4 | 0;
   HEAP8[i27] = i29 | HEAP8[i27] & -4;
   HEAP32[i6 + 8 >> 2] = i14;
   HEAP32[i6 + 12 >> 2] = i15;
   HEAP32[i6 + 16 >> 2] = i16;
   HEAP32[i6 + 20 >> 2] = i17;
   HEAP32[i6 + 24 >> 2] = i18;
   HEAP32[i6 + 28 >> 2] = i19;
   HEAP32[i6 + 32 >> 2] = i20;
   HEAP32[i6 + 36 >> 2] = i21;
   HEAP32[i6 + 40 >> 2] = i22;
   HEAP32[i6 + 44 >> 2] = i23;
  }
 } while (0);
 if ((i25 | 0) == 14) {
  i23 = __ZNK7WebCore14DocumentLoader3urlEv(i1) | 0;
  i22 = HEAP32[i23 >> 2] | 0;
  if ((i22 | 0) != 0) {
   i21 = i22 | 0;
   HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
  }
  i21 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = i22;
  do {
   if ((i21 | 0) != 0) {
    i22 = i21 | 0;
    i20 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
    if ((i20 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i21);
     break;
    } else {
     HEAP32[i22 >> 2] = i20;
     break;
    }
   }
  } while (0);
  i21 = i23 + 4 | 0;
  i20 = i5 + 4 | 0;
  i22 = HEAP8[i20] & -2 | HEAP8[i21] & 1;
  HEAP8[i20] = i22;
  HEAP8[i20] = i22 & -3 | HEAP8[i21] & 2;
  HEAP32[i5 + 8 >> 2] = HEAP32[i23 + 8 >> 2];
  HEAP32[i5 + 12 >> 2] = HEAP32[i23 + 12 >> 2];
  HEAP32[i5 + 16 >> 2] = HEAP32[i23 + 16 >> 2];
  HEAP32[i5 + 20 >> 2] = HEAP32[i23 + 20 >> 2];
  HEAP32[i5 + 24 >> 2] = HEAP32[i23 + 24 >> 2];
  HEAP32[i5 + 28 >> 2] = HEAP32[i23 + 28 >> 2];
  HEAP32[i5 + 32 >> 2] = HEAP32[i23 + 32 >> 2];
  HEAP32[i5 + 36 >> 2] = HEAP32[i23 + 36 >> 2];
  HEAP32[i5 + 40 >> 2] = HEAP32[i23 + 40 >> 2];
  HEAP32[i5 + 44 >> 2] = HEAP32[i23 + 44 >> 2];
  i23 = __ZNK7WebCore14DocumentLoader11originalURLEv(i1) | 0;
  i21 = HEAP32[i23 >> 2] | 0;
  if ((i21 | 0) != 0) {
   i22 = i21 | 0;
   HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
  }
  i22 = HEAP32[i24 >> 2] | 0;
  HEAP32[i24 >> 2] = i21;
  do {
   if ((i22 | 0) != 0) {
    i21 = i22 | 0;
    i20 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
    if ((i20 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i22);
     break;
    } else {
     HEAP32[i21 >> 2] = i20;
     break;
    }
   }
  } while (0);
  i22 = i23 + 4 | 0;
  i20 = i6 + 4 | 0;
  i21 = HEAP8[i20] & -2 | HEAP8[i22] & 1;
  HEAP8[i20] = i21;
  HEAP8[i20] = i21 & -3 | HEAP8[i22] & 2;
  HEAP32[i6 + 8 >> 2] = HEAP32[i23 + 8 >> 2];
  HEAP32[i6 + 12 >> 2] = HEAP32[i23 + 12 >> 2];
  HEAP32[i6 + 16 >> 2] = HEAP32[i23 + 16 >> 2];
  HEAP32[i6 + 20 >> 2] = HEAP32[i23 + 20 >> 2];
  HEAP32[i6 + 24 >> 2] = HEAP32[i23 + 24 >> 2];
  HEAP32[i6 + 28 >> 2] = HEAP32[i23 + 28 >> 2];
  HEAP32[i6 + 32 >> 2] = HEAP32[i23 + 32 >> 2];
  HEAP32[i6 + 36 >> 2] = HEAP32[i23 + 36 >> 2];
  HEAP32[i6 + 40 >> 2] = HEAP32[i23 + 40 >> 2];
  HEAP32[i6 + 44 >> 2] = HEAP32[i23 + 44 >> 2];
 }
 i23 = HEAP32[i10 >> 2] | 0;
 if ((i23 | 0) == 0) {
  i25 = 29;
 } else {
  if ((HEAP32[i23 + 4 >> 2] | 0) == 0) {
   i25 = 29;
  }
 }
 if ((i25 | 0) == 29) {
  i23 = __ZN7WebCore8blankURLEv() | 0;
  i22 = HEAP32[i23 >> 2] | 0;
  if ((i22 | 0) != 0) {
   i21 = i22 | 0;
   HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
  }
  i21 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = i22;
  do {
   if ((i21 | 0) != 0) {
    i22 = i21 | 0;
    i20 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
    if ((i20 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i21);
     break;
    } else {
     HEAP32[i22 >> 2] = i20;
     break;
    }
   }
  } while (0);
  i21 = i23 + 4 | 0;
  i20 = i5 + 4 | 0;
  i22 = HEAP8[i20] & -2 | HEAP8[i21] & 1;
  HEAP8[i20] = i22;
  HEAP8[i20] = i22 & -3 | HEAP8[i21] & 2;
  HEAP32[i5 + 8 >> 2] = HEAP32[i23 + 8 >> 2];
  HEAP32[i5 + 12 >> 2] = HEAP32[i23 + 12 >> 2];
  HEAP32[i5 + 16 >> 2] = HEAP32[i23 + 16 >> 2];
  HEAP32[i5 + 20 >> 2] = HEAP32[i23 + 20 >> 2];
  HEAP32[i5 + 24 >> 2] = HEAP32[i23 + 24 >> 2];
  HEAP32[i5 + 28 >> 2] = HEAP32[i23 + 28 >> 2];
  HEAP32[i5 + 32 >> 2] = HEAP32[i23 + 32 >> 2];
  HEAP32[i5 + 36 >> 2] = HEAP32[i23 + 36 >> 2];
  HEAP32[i5 + 40 >> 2] = HEAP32[i23 + 40 >> 2];
  HEAP32[i5 + 44 >> 2] = HEAP32[i23 + 44 >> 2];
 }
 i23 = HEAP32[i24 >> 2] | 0;
 if ((i23 | 0) == 0) {
  i25 = 38;
 } else {
  if ((HEAP32[i23 + 4 >> 2] | 0) == 0) {
   i25 = 38;
  }
 }
 if ((i25 | 0) == 38) {
  i23 = __ZN7WebCore8blankURLEv() | 0;
  i21 = HEAP32[i23 >> 2] | 0;
  if ((i21 | 0) != 0) {
   i22 = i21 | 0;
   HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
  }
  i22 = HEAP32[i24 >> 2] | 0;
  HEAP32[i24 >> 2] = i21;
  do {
   if ((i22 | 0) != 0) {
    i21 = i22 | 0;
    i20 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
    if ((i20 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i22);
     break;
    } else {
     HEAP32[i21 >> 2] = i20;
     break;
    }
   }
  } while (0);
  i22 = i23 + 4 | 0;
  i20 = i6 + 4 | 0;
  i21 = HEAP8[i20] & -2 | HEAP8[i22] & 1;
  HEAP8[i20] = i21;
  HEAP8[i20] = i21 & -3 | HEAP8[i22] & 2;
  HEAP32[i6 + 8 >> 2] = HEAP32[i23 + 8 >> 2];
  HEAP32[i6 + 12 >> 2] = HEAP32[i23 + 12 >> 2];
  HEAP32[i6 + 16 >> 2] = HEAP32[i23 + 16 >> 2];
  HEAP32[i6 + 20 >> 2] = HEAP32[i23 + 20 >> 2];
  HEAP32[i6 + 24 >> 2] = HEAP32[i23 + 24 >> 2];
  HEAP32[i6 + 28 >> 2] = HEAP32[i23 + 28 >> 2];
  HEAP32[i6 + 32 >> 2] = HEAP32[i23 + 32 >> 2];
  HEAP32[i6 + 36 >> 2] = HEAP32[i23 + 36 >> 2];
  HEAP32[i6 + 40 >> 2] = HEAP32[i23 + 40 >> 2];
  HEAP32[i6 + 44 >> 2] = HEAP32[i23 + 44 >> 2];
 }
 i23 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i9 >> 2] | 0) + 40 | 0) | 0;
 do {
  if ((i23 | 0) == 0) {
   __ZN3WTF12AtomicString3addEPKh(i4, H_BASE + 8 | 0);
   i22 = HEAP32[i4 >> 2] | 0;
   i21 = i7 | 0;
   HEAP32[i21 >> 2] = i22;
   if ((i22 | 0) == 0) {
    i31 = i21;
    break;
   }
   i20 = i22 | 0;
   i19 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = i19 + 2;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    i31 = i21;
    break;
   } else {
    HEAP32[i20 >> 2] = i19;
    i31 = i21;
    break;
   }
  } else {
   i21 = HEAP32[i23 + 52 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i19 = i7 | 0;
    HEAP32[i19 >> 2] = 0;
    i31 = i19;
    break;
   }
   i19 = i21 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
   i20 = i7 | 0;
   HEAP32[i20 >> 2] = i21;
   i22 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = i22 + 2;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    i31 = i20;
    break;
   } else {
    HEAP32[i19 >> 2] = i22;
    i31 = i20;
    break;
   }
  }
 } while (0);
 i23 = i8 | 0;
 i4 = HEAP32[i1 + 980 >> 2] | 0;
 HEAP32[i23 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i20 = i4 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
 }
 HEAP32[i8 + 4 >> 2] = HEAP32[i1 + 984 >> 2];
 __ZN7WebCore11HistoryItem6setURLERKNS_3URLE(i2, i5);
 __ZN7WebCore11HistoryItem9setTargetERKN3WTF6StringE(i2, (HEAP32[i9 >> 2] | 0) + 52 | 0);
 __ZN7WebCore11HistoryItem9setParentERKN3WTF6StringE(i2, i7);
 __ZN7WebCore11HistoryItem8setTitleERKN3WTF6StringE(i2, i8 | 0);
 __ZN7WebCore11HistoryItem20setOriginalURLStringERKN3WTF6StringE(i2, i6 | 0);
 if (i12) {
  i25 = 59;
 } else {
  if ((HEAP32[i11 + 4 >> 2] | 0) == 0) {
   i25 = 59;
  } else {
   i25 = 60;
  }
 }
 if ((i25 | 0) == 59) {
  if ((__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i1 + 784 | 0) | 0) > 399) {
   i25 = 60;
  }
 }
 if ((i25 | 0) == 60) {
  HEAP8[i2 + 80 | 0] = 1;
 }
 __ZN7WebCore11HistoryItem22setFormInfoFromRequestERKNS_15ResourceRequestE(i2, __ZN7WebCore14DocumentLoader7requestEv(i1) | 0);
 i1 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i23 = i1 | 0;
   i2 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i23 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i31 = i1 | 0;
   i2 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i31 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i24 = i1 | 0;
   i2 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i24 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i10 = i1 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i10 >> 2] = i2;
    break;
   }
  }
 } while (0);
 if (i12) {
  STACKTOP = i3;
  return;
 }
 i12 = i11 | 0;
 i1 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i11);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i12 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17HistoryController42updateForRedirectWithLockedBackForwardListEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 48 | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = (HEAP8[(HEAP32[i6 + 36 >> 2] | 0) + 194 | 0] & 64) != 0;
 __ZNK7WebCore14DocumentLoader13urlForHistoryEv(i3, HEAP32[i6 + 128 >> 2] | 0);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((HEAP8[(HEAP32[i6 + 128 >> 2] | 0) + 976 | 0] & 1) == 0) {
   i8 = __ZNK7WebCore9FrameTree6parentEv(i6 + 40 | 0) | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = HEAP32[(HEAP32[i8 + 92 >> 2] | 0) + 4 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN7WebCore17HistoryController10createItemEv(i4, i1);
   __ZN7WebCore11HistoryItem12setChildItemEN3WTF10PassRefPtrIS0_EE(i9, i4);
   i9 = HEAP32[i4 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i8 = i9 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    HEAP32[i8 >> 2] = i10;
    break;
   }
  } else {
   do {
    if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
     if ((__ZNK7WebCore9FrameTree6parentEv(i6 + 40 | 0) | 0) != 0) {
      break;
     }
     i10 = HEAP32[i3 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     if ((HEAP32[i10 + 4 >> 2] | 0) == 0) {
      break;
     }
     __ZN7WebCore17HistoryController36updateBackForwardListClippedAtTargetEb(i1, 1);
     do {
      if (!i7) {
       i10 = HEAP32[(HEAP32[i5 >> 2] | 0) + 84 >> 2] | 0;
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 260 >> 2] & 3](i10);
       HEAP8[(HEAP32[(HEAP32[i5 >> 2] | 0) + 128 >> 2] | 0) + 1504 | 0] = 1;
       i10 = HEAP32[(__ZNK7WebCore14DocumentLoader14unreachableURLEv(HEAP32[(HEAP32[i5 >> 2] | 0) + 128 >> 2] | 0) | 0) >> 2] | 0;
       if ((i10 | 0) != 0) {
        if ((HEAP32[i10 + 4 >> 2] | 0) != 0) {
         break;
        }
       }
       i10 = HEAP32[(HEAP32[i5 >> 2] | 0) + 84 >> 2] | 0;
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 264 >> 2] & 3](i10);
      }
     } while (0);
     i10 = HEAP32[(HEAP32[i5 >> 2] | 0) + 84 >> 2] | 0;
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 276 >> 2] & 3](i10);
    }
   } while (0);
   __ZN7WebCore17HistoryController17updateCurrentItemEv(i1);
  }
 } while (0);
 i1 = i3 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 do {
  if (!((HEAP32[i6 + 4 >> 2] | 0) == 0 | i7)) {
   i4 = HEAP32[i5 >> 2] | 0;
   i10 = HEAP32[i4 + 32 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i11 = i4;
   } else {
    i4 = __ZN7WebCore18platformStrategiesEv() | 0;
    i8 = i4 + 32 | 0;
    i9 = HEAP32[i8 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] & 1](i4) | 0;
     HEAP32[i8 >> 2] = i12;
     i13 = i12;
    } else {
     i13 = i9;
    }
    i9 = HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] | 0;
    i12 = __ZN7WebCore15visitedLinkHashERKN3WTF6StringE(i3 | 0) | 0;
    FUNCTION_TABLE_viiii[i9 & 1](i13, i10, i12, tempRet0);
    i11 = HEAP32[i5 >> 2] | 0;
   }
   i12 = HEAP32[i11 + 128 >> 2] | 0;
   if ((HEAP8[i12 + 1504 | 0] & 1) != 0) {
    break;
   }
   i10 = HEAP32[(__ZNK7WebCore14DocumentLoader14unreachableURLEv(i12) | 0) >> 2] | 0;
   if ((i10 | 0) != 0) {
    if ((HEAP32[i10 + 4 >> 2] | 0) != 0) {
     break;
    }
   }
   i10 = HEAP32[i5 >> 2] | 0;
   i12 = HEAP32[(HEAP32[i10 + 456 >> 2] | 0) + 356 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   if ((HEAP32[i12 + 4 >> 2] | 0) == 0) {
    break;
   }
   i12 = HEAP32[i10 + 84 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 264 >> 2] & 3](i12);
  }
 } while (0);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i5 | 0;
 i11 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i1 >> 2] = i11;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore17HistoryController27recursiveSetProvisionalItemEPNS_11HistoryItemES2_NS_13FrameLoadTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 if ((i2 | 0) == 0 | (i3 | 0) == 0 | (i2 | 0) == (i3 | 0)) {
  STACKTOP = i5;
  return;
 }
 i9 = i2 + 120 | 0;
 i10 = i3 + 120 | 0;
 if (!((HEAP32[i9 >> 2] | 0) == (HEAP32[i10 >> 2] | 0) & (HEAP32[i9 + 4 >> 2] | 0) == (HEAP32[i10 + 4 >> 2] | 0))) {
  STACKTOP = i5;
  return;
 }
 if (!(__ZNK7WebCore17HistoryController22currentFramesMatchItemEPNS_11HistoryItemE(i1, i2) | 0)) {
  STACKTOP = i5;
  return;
 }
 if (!(__ZNK7WebCore11HistoryItem13hasSameFramesEPS0_(i3, i2) | 0)) {
  STACKTOP = i5;
  return;
 }
 i10 = i2 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 i10 = i1 + 12 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i2;
 do {
  if ((i9 | 0) != 0) {
   i10 = i9 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i9 = __ZNK7WebCore11HistoryItem8childrenEv(i2) | 0;
 i2 = i9 + 8 | 0;
 i11 = HEAP32[i2 >> 2] | 0;
 if ((i11 | 0) <= 0) {
  STACKTOP = i5;
  return;
 }
 i10 = i9 | 0;
 i9 = i7 | 0;
 i12 = i1 | 0;
 i1 = i6 | 0;
 i13 = i8 | 0;
 i14 = 0;
 i15 = i11;
 while (1) {
  if (i15 >>> 0 <= i14 >>> 0) {
   i16 = 12;
   break;
  }
  i17 = HEAP32[(__ZNK7WebCore11HistoryItem6targetEv(HEAP32[(HEAP32[i10 >> 2] | 0) + (i14 << 2) >> 2] | 0) | 0) >> 2] | 0;
  HEAP32[i9 >> 2] = i17;
  if ((i17 | 0) != 0) {
   i18 = i17 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
  }
  i18 = __ZNK7WebCore11HistoryItem19childItemWithTargetERKN3WTF6StringE(i3, i7) | 0;
  i17 = (HEAP32[i12 >> 2] | 0) + 40 | 0;
  i19 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i19 | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
   } else {
    if ((HEAP32[i19 + 16 >> 2] & 16 | 0) == 0) {
     __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i6, i19);
     break;
    } else {
     HEAP32[i1 >> 2] = i19;
     i20 = i19 | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
     break;
    }
   }
  } while (0);
  HEAP32[i13 >> 2] = HEAP32[i1 >> 2];
  i19 = __ZNK7WebCore9FrameTree5childERKN3WTF12AtomicStringE(i17, i8) | 0;
  i20 = HEAP32[i13 >> 2] | 0;
  do {
   if ((i20 | 0) != 0) {
    i21 = i20 | 0;
    i22 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
    if ((i22 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i20);
     break;
    } else {
     HEAP32[i21 >> 2] = i22;
     break;
    }
   }
  } while (0);
  if ((HEAP32[i2 >> 2] | 0) >>> 0 <= i14 >>> 0) {
   i16 = 25;
   break;
  }
  __ZN7WebCore17HistoryController27recursiveSetProvisionalItemEPNS_11HistoryItemES2_NS_13FrameLoadTypeE(HEAP32[i19 + 92 >> 2] | 0, HEAP32[(HEAP32[i10 >> 2] | 0) + (i14 << 2) >> 2] | 0, i18, i4);
  i20 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i20 | 0) != 0) {
    i17 = i20 | 0;
    i22 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
    if ((i22 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i20);
     break;
    } else {
     HEAP32[i17 >> 2] = i22;
     break;
    }
   }
  } while (0);
  i20 = i14 + 1 | 0;
  if ((i20 | 0) >= (i11 | 0)) {
   i16 = 38;
   break;
  }
  i14 = i20;
  i15 = HEAP32[i2 >> 2] | 0;
 }
 if ((i16 | 0) == 12) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i16 | 0) == 25) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i16 | 0) == 38) {
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore17HistoryController17recursiveGoToItemEPNS_11HistoryItemES2_NS_13FrameLoadTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 do {
  if (!((i2 | 0) == 0 | (i3 | 0) == 0 | (i2 | 0) == (i3 | 0))) {
   i9 = i2 + 120 | 0;
   i10 = i3 + 120 | 0;
   if (!((HEAP32[i9 >> 2] | 0) == (HEAP32[i10 >> 2] | 0) & (HEAP32[i9 + 4 >> 2] | 0) == (HEAP32[i10 + 4 >> 2] | 0))) {
    break;
   }
   if (!(__ZNK7WebCore17HistoryController22currentFramesMatchItemEPNS_11HistoryItemE(i1, i2) | 0)) {
    break;
   }
   if (!(__ZNK7WebCore11HistoryItem13hasSameFramesEPS0_(i3, i2) | 0)) {
    break;
   }
   i10 = __ZNK7WebCore11HistoryItem8childrenEv(i2) | 0;
   i9 = i10 + 8 | 0;
   i11 = HEAP32[i9 >> 2] | 0;
   if ((i11 | 0) <= 0) {
    STACKTOP = i5;
    return;
   }
   i12 = i10 | 0;
   i10 = i7 | 0;
   i13 = i1 | 0;
   i14 = i6 | 0;
   i15 = i8 | 0;
   i16 = 0;
   i17 = i11;
   while (1) {
    if (i17 >>> 0 <= i16 >>> 0) {
     i18 = 8;
     break;
    }
    i19 = HEAP32[(__ZNK7WebCore11HistoryItem6targetEv(HEAP32[(HEAP32[i12 >> 2] | 0) + (i16 << 2) >> 2] | 0) | 0) >> 2] | 0;
    HEAP32[i10 >> 2] = i19;
    if ((i19 | 0) != 0) {
     i20 = i19 | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
    }
    i20 = __ZNK7WebCore11HistoryItem19childItemWithTargetERKN3WTF6StringE(i3, i7) | 0;
    i19 = (HEAP32[i13 >> 2] | 0) + 40 | 0;
    i21 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i21 | 0) == 0) {
      HEAP32[i14 >> 2] = 0;
     } else {
      if ((HEAP32[i21 + 16 >> 2] & 16 | 0) == 0) {
       __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i6, i21);
       break;
      } else {
       HEAP32[i14 >> 2] = i21;
       i22 = i21 | 0;
       HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
       break;
      }
     }
    } while (0);
    HEAP32[i15 >> 2] = HEAP32[i14 >> 2];
    i21 = __ZNK7WebCore9FrameTree5childERKN3WTF12AtomicStringE(i19, i8) | 0;
    i22 = HEAP32[i15 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i23 = i22 | 0;
      i24 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
      if ((i24 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i22);
       break;
      } else {
       HEAP32[i23 >> 2] = i24;
       break;
      }
     }
    } while (0);
    if ((HEAP32[i9 >> 2] | 0) >>> 0 <= i16 >>> 0) {
     i18 = 21;
     break;
    }
    __ZN7WebCore17HistoryController17recursiveGoToItemEPNS_11HistoryItemES2_NS_13FrameLoadTypeE(HEAP32[i21 + 92 >> 2] | 0, HEAP32[(HEAP32[i12 >> 2] | 0) + (i16 << 2) >> 2] | 0, i20, i4);
    i22 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i19 = i22 | 0;
      i24 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
      if ((i24 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i22);
       break;
      } else {
       HEAP32[i19 >> 2] = i24;
       break;
      }
     }
    } while (0);
    i22 = i16 + 1 | 0;
    if ((i22 | 0) >= (i11 | 0)) {
     i18 = 30;
     break;
    }
    i16 = i22;
    i17 = HEAP32[i9 >> 2] | 0;
   }
   if ((i18 | 0) == 8) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i18 | 0) == 21) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i18 | 0) == 30) {
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 __ZN7WebCore11FrameLoader8loadItemEPNS_11HistoryItemENS_13FrameLoadTypeE((HEAP32[i1 >> 2] | 0) + 80 | 0, i2, i4);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17HistoryController24recursiveUpdateForCommitEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if (!((i5 | 0) == 0 | (i5 | 0) == (i3 | 0))) {
   i6 = i5 + 120 | 0;
   i7 = i3 + 120 | 0;
   if (!((HEAP32[i6 >> 2] | 0) == (HEAP32[i7 >> 2] | 0) & (HEAP32[i6 + 4 >> 2] | 0) == (HEAP32[i7 + 4 >> 2] | 0))) {
    break;
   }
   if (!(__ZNK7WebCore17HistoryController22currentFramesMatchItemEPNS_11HistoryItemE(i1, i5) | 0)) {
    break;
   }
   if (!(__ZNK7WebCore11HistoryItem13hasSameFramesEPS0_(i3, i5) | 0)) {
    break;
   }
   __ZN7WebCore17HistoryController17saveDocumentStateEv(i1);
   __ZN7WebCore17HistoryController36saveScrollPositionAndViewStateToItemEPNS_11HistoryItemE(i1, HEAP32[i4 >> 2] | 0);
   i7 = i1 | 0;
   i6 = HEAP32[(HEAP32[i7 >> 2] | 0) + 452 >> 2] | 0;
   if ((i6 | 0) != 0) {
    __ZN7WebCore9FrameView20setWasScrolledByUserEb(i6, 0);
   }
   HEAP8[i1 + 16 | 0] = 0;
   i6 = HEAP32[i4 >> 2] | 0;
   if ((i6 | 0) != 0) {
    i8 = i6 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   }
   i8 = i1 + 8 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i6;
   do {
    if ((i9 | 0) != 0) {
     i6 = i9 | 0;
     i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore11HistoryItemD1Ev(i9);
      __ZN3WTF8fastFreeEPv(i9);
      break;
     } else {
      HEAP32[i6 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i2 >> 2] | 0;
   if ((i9 | 0) != 0) {
    i8 = i9 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   }
   i8 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i9;
   do {
    if ((i8 | 0) != 0) {
     i9 = i8 | 0;
     i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i6 | 0) == 0) {
      __ZN7WebCore11HistoryItemD1Ev(i8);
      __ZN3WTF8fastFreeEPv(i8);
      break;
     } else {
      HEAP32[i9 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   do {
    if ((i8 | 0) != 0) {
     i6 = i8 | 0;
     i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) == 0) {
      __ZN7WebCore11HistoryItemD1Ev(i8);
      __ZN3WTF8fastFreeEPv(i8);
      break;
     } else {
      HEAP32[i6 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i8 = __ZNK7WebCore11FrameLoader8loadTypeEv((HEAP32[i7 >> 2] | 0) + 80 | 0) | 0;
   do {
    if (!((i8 | 0) == 4 | (i8 | 0) == 9 | (i8 | 0) == 6 | (i8 | 0) == 8)) {
     i9 = HEAP32[i4 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     i6 = HEAP32[i7 >> 2] | 0;
     if ((HEAP32[i6 + 364 >> 2] | 0) != (i9 | 0)) {
      break;
     }
     if ((HEAP8[(HEAP32[i6 + 128 >> 2] | 0) + 976 | 0] & 1) != 0) {
      break;
     }
     i10 = HEAP32[i6 + 456 >> 2] | 0;
     __ZN7WebCore8Document26setStateForNewFormElementsERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEE(i10, __ZNK7WebCore11HistoryItem13documentStateEv(i9) | 0);
    }
   } while (0);
   __ZN7WebCore17HistoryController33restoreScrollPositionAndViewStateEv(i1);
  }
 } while (0);
 i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 64 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 } else {
  i11 = i4;
 }
 while (1) {
  __ZN7WebCore17HistoryController24recursiveUpdateForCommitEv(HEAP32[i11 + 92 >> 2] | 0);
  i11 = HEAP32[i11 + 56 >> 2] | 0;
  if ((i11 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore17HistoryController12replaceStateEN3WTF10PassRefPtrINS_21SerializedScriptValueEEERKNS1_6StringES7_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i1 + 4 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i12 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
  } else {
   if ((HEAP32[i12 + 4 >> 2] | 0) == 0) {
    i13 = i11;
    break;
   }
   __ZN7WebCore11HistoryItem12setURLStringERKN3WTF6StringE(i11, i4);
   i13 = HEAP32[i10 >> 2] | 0;
  }
 } while (0);
 __ZN7WebCore11HistoryItem8setTitleERKN3WTF6StringE(i13, i3);
 i3 = HEAP32[i10 >> 2] | 0;
 i13 = i6 | 0;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i13 >> 2] = i2;
 __ZN7WebCore11HistoryItem14setStateObjectEN3WTF10PassRefPtrINS_21SerializedScriptValueEEE(i3, i6);
 i6 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i13 = i6 | 0;
   if (((tempValue = HEAP32[i13 >> 2] | 0, HEAP32[i13 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore21SerializedScriptValueD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 i13 = i7 | 0;
 HEAP32[i13 >> 2] = 0;
 __ZN7WebCore11HistoryItem11setFormDataEN3WTF10PassRefPtrINS_8FormDataEEE(i6, i7);
 i7 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i13 = i7 | 0;
   i6 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i13 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 i10 = i8 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore11HistoryItem18setFormContentTypeERKN3WTF6StringE(i7, i8);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i8 = i1 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 if ((HEAP8[(HEAP32[i1 + 36 >> 2] | 0) + 194 | 0] & 64) != 0) {
  STACKTOP = i5;
  return;
 }
 i7 = HEAP32[i1 + 32 >> 2] | 0;
 __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i9, 0, i4);
 i4 = __ZN7WebCore18platformStrategiesEv() | 0;
 i1 = i4 + 32 | 0;
 i10 = HEAP32[i1 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] & 1](i4) | 0;
  HEAP32[i1 >> 2] = i6;
  i14 = i6;
 } else {
  i14 = i10;
 }
 i10 = HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] | 0;
 i6 = __ZN7WebCore15visitedLinkHashERKN3WTF6StringE(i9 | 0) | 0;
 FUNCTION_TABLE_viiii[i10 & 1](i14, i7, i6, tempRet0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[(HEAP32[i8 >> 2] | 0) + 84 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 260 >> 2] & 3](i6);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17HistoryController21updateForStandardLoadENS0_17HistoryUpdateTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = (HEAP8[(HEAP32[i6 + 36 >> 2] | 0) + 194 | 0] & 64) != 0;
 i8 = i6 + 128 | 0;
 __ZNK7WebCore14DocumentLoader13urlForHistoryEv(i4, HEAP32[i8 >> 2] | 0);
 do {
  if ((HEAP8[(HEAP32[i8 >> 2] | 0) + 976 | 0] & 1) == 0) {
   i9 = i4 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i11 = i9;
    break;
   }
   if ((HEAP32[i10 + 4 >> 2] | 0) == 0) {
    i11 = i9;
    break;
   }
   if ((i2 | 0) != 1) {
    __ZN7WebCore17HistoryController36updateBackForwardListClippedAtTargetEb(i1, 1);
   }
   do {
    if (!i7) {
     i10 = i6 + 84 | 0;
     i12 = HEAP32[i10 >> 2] | 0;
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 260 >> 2] & 3](i12);
     HEAP8[(HEAP32[i8 >> 2] | 0) + 1504 | 0] = 1;
     i12 = HEAP32[(__ZNK7WebCore14DocumentLoader14unreachableURLEv(HEAP32[i8 >> 2] | 0) | 0) >> 2] | 0;
     if ((i12 | 0) != 0) {
      if ((HEAP32[i12 + 4 >> 2] | 0) != 0) {
       break;
      }
     }
     i12 = HEAP32[i10 >> 2] | 0;
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 264 >> 2] & 3](i12);
    }
   } while (0);
   i12 = HEAP32[(HEAP32[i5 >> 2] | 0) + 84 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 276 >> 2] & 3](i12);
   i11 = i9;
  } else {
   __ZN7WebCore17HistoryController17updateCurrentItemEv(i1);
   i11 = i4 | 0;
  }
 } while (0);
 i1 = HEAP32[i11 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 do {
  if (!((HEAP32[i1 + 4 >> 2] | 0) == 0 | i7)) {
   i2 = HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0;
   if ((i2 | 0) != 0) {
    i12 = __ZN7WebCore18platformStrategiesEv() | 0;
    i10 = i12 + 32 | 0;
    i13 = HEAP32[i10 >> 2] | 0;
    if ((i13 | 0) == 0) {
     i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 36 >> 2] & 1](i12) | 0;
     HEAP32[i10 >> 2] = i14;
     i15 = i14;
    } else {
     i15 = i13;
    }
    i13 = HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] | 0;
    i14 = __ZN7WebCore15visitedLinkHashERKN3WTF6StringE(i4 | 0) | 0;
    FUNCTION_TABLE_viiii[i13 & 1](i15, i2, i14, tempRet0);
   }
   i14 = HEAP32[i8 >> 2] | 0;
   if ((HEAP8[i14 + 1504 | 0] & 1) != 0) {
    break;
   }
   i2 = HEAP32[(__ZNK7WebCore14DocumentLoader14unreachableURLEv(i14) | 0) >> 2] | 0;
   if ((i2 | 0) != 0) {
    if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
     break;
    }
   }
   i2 = HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0) + 356 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
    break;
   }
   i2 = HEAP32[i6 + 84 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 264 >> 2] & 3](i2);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i6 | 0;
 i5 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i11 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17HistoryController9pushStateEN3WTF10PassRefPtrINS_21SerializedScriptValueEEERKNS1_6StringES7_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i1 + 4 | 0;
 if ((HEAP32[i10 >> 2] | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i11 = i1 | 0;
 i1 = HEAP32[i11 >> 2] | 0;
 i12 = HEAP32[i1 + 32 >> 2] | 0;
 __ZN7WebCore17HistoryController14createItemTreeERNS_5FrameEb(i6, HEAP32[(HEAP32[i1 + 28 >> 2] | 0) + 92 >> 2] | 0, i1, 0);
 i1 = i6 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 __ZN7WebCore11HistoryItem8setTitleERKN3WTF6StringE(HEAP32[i10 >> 2] | 0, i3);
 i3 = HEAP32[i10 >> 2] | 0;
 i1 = i7 | 0;
 i13 = i2 | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 __ZN7WebCore11HistoryItem14setStateObjectEN3WTF10PassRefPtrINS_21SerializedScriptValueEEE(i3, i7);
 i7 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i1 = i7 | 0;
   if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore21SerializedScriptValueD1Ev(i7);
   __ZN3WTF8fastFreeEPv(i7);
  }
 } while (0);
 __ZN7WebCore11HistoryItem12setURLStringERKN3WTF6StringE(HEAP32[i10 >> 2] | 0, i4);
 i10 = HEAP32[i12 + 56 >> 2] | 0;
 i7 = i8 | 0;
 HEAP32[i7 >> 2] = i6;
 __ZN7WebCore21BackForwardController7addItemEN3WTF10PassRefPtrINS_11HistoryItemEEE(i10, i8);
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i7 = i8 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  }
 } while (0);
 if ((HEAP8[(HEAP32[(HEAP32[i11 >> 2] | 0) + 36 >> 2] | 0) + 194 | 0] & 64) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i9, 0, i4);
 i4 = __ZN7WebCore18platformStrategiesEv() | 0;
 i8 = i4 + 32 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] & 1](i4) | 0;
  HEAP32[i8 >> 2] = i7;
  i14 = i7;
 } else {
  i14 = i10;
 }
 i10 = HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] | 0;
 i7 = __ZN7WebCore15visitedLinkHashERKN3WTF6StringE(i9 | 0) | 0;
 FUNCTION_TABLE_viiii[i10 & 1](i14, i12, i7, tempRet0);
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i9 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[(HEAP32[i11 >> 2] | 0) + 84 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 260 >> 2] & 3](i7);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17HistoryController14createItemTreeERNS_5FrameEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 __ZN7WebCore17HistoryController10createItemEv(i6, i2);
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 if ((HEAP8[i2 + 16 | 0] & 1) == 0) {
  __ZN7WebCore17HistoryController36saveScrollPositionAndViewStateToItemEPNS_11HistoryItemE(i2, HEAP32[i2 + 8 >> 2] | 0);
 }
 if (i4) {
  if ((HEAP32[i2 >> 2] | 0) == (i3 | 0)) {
   i9 = 20;
  } else {
   i9 = 5;
  }
 } else {
  i9 = 5;
 }
 if ((i9 | 0) == 5) {
  __ZN7WebCore17HistoryController17saveDocumentStateEv(i2);
  i8 = i2 + 8 | 0;
  i10 = HEAP32[i8 >> 2] | 0;
  i11 = i2 | 0;
  if ((i10 | 0) != 0) {
   if ((HEAP32[i11 >> 2] | 0) == (i3 | 0)) {
    i12 = i10;
   } else {
    i2 = i10 + 120 | 0;
    i10 = HEAP32[i2 + 4 >> 2] | 0;
    i13 = i6 + 120 | 0;
    HEAP32[i13 >> 2] = HEAP32[i2 >> 2];
    HEAP32[i13 + 4 >> 2] = i10;
    i12 = HEAP32[i8 >> 2] | 0;
   }
   i8 = i12 + 128 | 0;
   i12 = HEAP32[i8 + 4 >> 2] | 0;
   i10 = i6 + 128 | 0;
   HEAP32[i10 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i10 + 4 >> 2] = i12;
  }
  i12 = HEAP32[i11 >> 2] | 0;
  i10 = HEAP32[i12 + 64 >> 2] | 0;
  if ((i10 | 0) == 0) {
   i14 = i12;
  } else {
   i12 = i7 | 0;
   i8 = i10;
   while (1) {
    i10 = i8 + 80 | 0;
    if (__ZNK7WebCore11FrameLoader14frameHasLoadedEv(i10) | 0) {
     i9 = 13;
    } else {
     if (!(__ZNK7WebCore11FrameLoader23isHostedByObjectElementEv(i10) | 0)) {
      i9 = 13;
     }
    }
    do {
     if ((i9 | 0) == 13) {
      i9 = 0;
      __ZN7WebCore17HistoryController14createItemTreeERNS_5FrameEb(i7, HEAP32[i8 + 92 >> 2] | 0, i3, i4);
      __ZN7WebCore11HistoryItem12addChildItemEN3WTF10PassRefPtrIS0_EE(i6, i7);
      i10 = HEAP32[i12 >> 2] | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      i13 = i10 | 0;
      i2 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
      if ((i2 | 0) == 0) {
       __ZN7WebCore11HistoryItemD1Ev(i10);
       __ZN3WTF8fastFreeEPv(i10);
       break;
      } else {
       HEAP32[i13 >> 2] = i2;
       break;
      }
     }
    } while (0);
    i8 = HEAP32[i8 + 56 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break;
    }
   }
   i14 = HEAP32[i11 >> 2] | 0;
  }
  if ((i14 | 0) == (i3 | 0)) {
   i9 = 20;
  }
 }
 if ((i9 | 0) == 20) {
  __ZN7WebCore11HistoryItem15setIsTargetItemEb(i6, 1);
 }
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = i6 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i9 + 1;
 if ((i9 | 0) == 0) {
  __ZN7WebCore11HistoryItemD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i5;
  return;
 }
}
function __ZNK7WebCore17HistoryController22currentFramesMatchItemEPNS_11HistoryItemE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 i7 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 3;
 } else {
  if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
   i8 = 3;
  } else {
   i9 = i1;
   i8 = 6;
  }
 }
 do {
  if ((i8 | 0) == 3) {
   i1 = HEAP32[(__ZNK7WebCore11HistoryItem6targetEv(i2) | 0) >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
    break;
   }
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = 6;
  }
 } while (0);
 do {
  if ((i8 | 0) == 6) {
   i1 = __ZNK7WebCore11HistoryItem6targetEv(i2) | 0;
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i9 + 52 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0) {
    break;
   } else {
    i10 = 0;
   }
   STACKTOP = i3;
   return i10 | 0;
  }
 } while (0);
 i9 = __ZNK7WebCore11HistoryItem8childrenEv(i2) | 0;
 i2 = i9 + 8 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != (__ZNK7WebCore9FrameTree10childCountEv((HEAP32[i6 >> 2] | 0) + 40 | 0) | 0)) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 i7 = i9 | 0;
 i9 = i4 | 0;
 i11 = i5 | 0;
 i12 = 0;
 while (1) {
  if (i12 >>> 0 >= i1 >>> 0) {
   i10 = 1;
   i8 = 25;
   break;
  }
  i13 = (HEAP32[i6 >> 2] | 0) + 40 | 0;
  if ((HEAP32[i2 >> 2] | 0) >>> 0 <= i12 >>> 0) {
   i8 = 11;
   break;
  }
  i14 = HEAP32[(__ZNK7WebCore11HistoryItem6targetEv(HEAP32[(HEAP32[i7 >> 2] | 0) + (i12 << 2) >> 2] | 0) | 0) >> 2] | 0;
  do {
   if ((i14 | 0) == 0) {
    HEAP32[i9 >> 2] = 0;
   } else {
    if ((HEAP32[i14 + 16 >> 2] & 16 | 0) == 0) {
     __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i14);
     break;
    } else {
     HEAP32[i9 >> 2] = i14;
     i15 = i14 | 0;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
     break;
    }
   }
  } while (0);
  HEAP32[i11 >> 2] = HEAP32[i9 >> 2];
  i14 = (__ZNK7WebCore9FrameTree5childERKN3WTF12AtomicStringE(i13, i5) | 0) == 0;
  i15 = HEAP32[i11 >> 2] | 0;
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
  if (i14) {
   i10 = 0;
   i8 = 26;
   break;
  } else {
   i12 = i12 + 1 | 0;
  }
 }
 if ((i8 | 0) == 11) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i8 | 0) == 25) {
  STACKTOP = i3;
  return i10 | 0;
 } else if ((i8 | 0) == 26) {
  STACKTOP = i3;
  return i10 | 0;
 }
 return 0;
}
function __ZN7WebCore17HistoryController15updateForCommitEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = __ZNK7WebCore11FrameLoader8loadTypeEv(i3 + 80 | 0) | 0;
 do {
  if (!(__ZN7WebCore21isBackForwardLoadTypeENS_13FrameLoadTypeE(i4) | 0)) {
   if ((i4 | 0) == 9 | (i4 | 0) == 4) {
    if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
     return;
    }
    i5 = HEAP32[(__ZNK7WebCore14DocumentLoader14unreachableURLEv(HEAP32[i3 + 132 >> 2] | 0) | 0) >> 2] | 0;
    if ((i5 | 0) == 0) {
     return;
    }
    if ((HEAP32[i5 + 4 >> 2] | 0) != 0) {
     break;
    }
    return;
   } else if ((i4 | 0) == 8) {
    if ((HEAP32[i1 + 12 >> 2] | 0) != 0) {
     break;
    }
    return;
   } else {
    return;
   }
  }
 } while (0);
 HEAP8[i1 + 16 | 0] = 0;
 i4 = i1 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i5 = i3 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 do {
  if ((i6 | 0) != 0) {
   i3 = i6 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = i1 + 12 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i5 = i1 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i1;
 do {
  if ((i5 | 0) != 0) {
   i1 = i5 | 0;
   i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i1 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i6 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore17HistoryController24recursiveUpdateForCommitEv(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] | 0) + 92 >> 2] | 0);
 return;
}
function __ZN7WebCore17HistoryController40recursiveUpdateForSameDocumentNavigationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP8[i1 + 16 | 0] = 0;
   i6 = 0;
  } else {
   if (!(__ZNK7WebCore11HistoryItem32shouldDoSameDocumentNavigationToEPS0_(i5, i3) | 0)) {
    return;
   }
   i7 = HEAP32[i4 >> 2] | 0;
   HEAP8[i1 + 16 | 0] = 0;
   if ((i7 | 0) == 0) {
    i6 = 0;
    break;
   }
   i8 = i7 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   i6 = i7;
  }
 } while (0);
 i3 = i1 + 8 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i6;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i3 = i5 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 64 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 } else {
  i9 = i3;
 }
 while (1) {
  __ZN7WebCore17HistoryController40recursiveUpdateForSameDocumentNavigationEv(HEAP32[i9 + 92 >> 2] | 0);
  i9 = HEAP32[i9 + 56 >> 2] | 0;
  if ((i9 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore17HistoryController8goToItemEPNS_11HistoryItemENS_13FrameLoadTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i5 + 32 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i5 + 84 >> 2] | 0;
 if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i7 >> 2] | 0) + 268 >> 2] & 1](i7, i2) | 0)) {
  return;
 }
 if ((HEAP8[i1 + 17 | 0] & 1) != 0) {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  }
  i7 = i1 + 20 | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i2;
  do {
   if ((i5 | 0) != 0) {
    i7 = i5 | 0;
    i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    if ((i8 | 0) == 0) {
     __ZN7WebCore11HistoryItemD1Ev(i5);
     __ZN3WTF8fastFreeEPv(i5);
     break;
    } else {
     HEAP32[i7 >> 2] = i8;
     break;
    }
   }
  } while (0);
  HEAP32[i1 + 24 >> 2] = i3;
  return;
 }
 i5 = i6 + 56 | 0;
 i6 = __ZN7WebCore21BackForwardController11itemAtIndexEi(HEAP32[i5 >> 2] | 0, 0) | 0;
 i8 = (i6 | 0) == 0;
 if (!i8) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 __ZN7WebCore21BackForwardController14setCurrentItemEPNS_11HistoryItemE(HEAP32[i5 >> 2] | 0, i2);
 i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 84 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 276 >> 2] & 3](i5);
 __ZN7WebCore17HistoryController27recursiveSetProvisionalItemEPNS_11HistoryItemES2_NS_13FrameLoadTypeE(i1, i2, i6, i3);
 __ZN7WebCore17HistoryController17recursiveGoToItemEPNS_11HistoryItemES2_NS_13FrameLoadTypeE(i1, i2, i6, i3);
 if (i8) {
  return;
 }
 i8 = i6 | 0;
 i3 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore11HistoryItemD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
  return;
 } else {
  HEAP32[i8 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore17HistoryController23updateForClientRedirectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore11HistoryItem18clearDocumentStateEv(i5);
  __ZN7WebCore11HistoryItem16clearScrollPointEv(HEAP32[i4 >> 2] | 0);
 }
 i4 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i5 = HEAP8[(HEAP32[i1 + 36 >> 2] | 0) + 194 | 0] | 0;
 __ZNK7WebCore14DocumentLoader13urlForHistoryEv(i3, HEAP32[i1 + 128 >> 2] | 0);
 i1 = i3 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 do {
  if ((HEAP32[i6 + 4 >> 2] | 0) == 0 | (i5 & 64) != 0) {
   i7 = i6;
  } else {
   i8 = HEAP32[(HEAP32[i4 >> 2] | 0) + 32 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i7 = i6;
    break;
   }
   i9 = __ZN7WebCore18platformStrategiesEv() | 0;
   i10 = i9 + 32 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 36 >> 2] & 1](i9) | 0;
    HEAP32[i10 >> 2] = i12;
    i13 = i12;
   } else {
    i13 = i11;
   }
   i11 = HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] | 0;
   i12 = __ZN7WebCore15visitedLinkHashERKN3WTF6StringE(i3 | 0) | 0;
   FUNCTION_TABLE_viiii[i11 & 1](i13, i8, i12, tempRet0);
   i12 = HEAP32[i1 >> 2] | 0;
   if ((i12 | 0) != 0) {
    i7 = i12;
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 i1 = i7 | 0;
 i13 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i13 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i1 >> 2] = i13;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore17HistoryController17saveDocumentStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 if (__ZNK7WebCore23FrameLoaderStateMachine28creatingInitialEmptyDocumentEv((HEAP32[i4 >> 2] | 0) + 104 | 0) | 0) {
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[((HEAP8[i1 + 16 | 0] & 1) == 0 ? i1 + 8 | 0 : i1 + 4 | 0) >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] | 0;
 if (!(__ZNK7WebCore11HistoryItem17isCurrentDocumentEPNS_8DocumentE(i5, i1) | 0)) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i1 + 1584 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP8[i1 + 2285 | 0] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore8Document17formElementsStateEv(i3, i1);
 __ZN7WebCore11HistoryItem16setDocumentStateERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEE(i5, i3);
 i5 = i3 + 8 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i4 = i3 | 0;
 if ((i1 | 0) != 0) {
  i6 = HEAP32[i4 >> 2] | 0;
  i7 = i6 + (i1 << 2) | 0;
  i1 = i6;
  while (1) {
   i6 = HEAP32[i1 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
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
   i1 = i1 + 4 | 0;
   if ((i1 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i5 >> 2] = 0;
 }
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17HistoryController36updateBackForwardListClippedAtTargetEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i3 + 56 | 0;
 i7 = i1 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore14DocumentLoader13urlForHistoryEv(i4, HEAP32[i1 + 128 >> 2] | 0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = (HEAP32[i1 + 4 >> 2] | 0) == 0;
 i9 = i1 | 0;
 i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 do {
  if ((i10 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i1);
   if (!i4) {
    break;
   }
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i9 >> 2] = i10;
   if (!i4) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i4 = HEAP32[(HEAP32[i7 >> 2] | 0) + 28 >> 2] | 0;
 __ZN7WebCore11FrameLoader30checkDidPerformFirstNavigationEv(i4 + 80 | 0);
 __ZN7WebCore17HistoryController14createItemTreeERNS_5FrameEb(i5, HEAP32[i4 + 92 >> 2] | 0, HEAP32[i7 >> 2] | 0, i2);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[i8 + 56 >> 2] | 0;
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = i5;
 __ZN7WebCore21BackForwardController7addItemEN3WTF10PassRefPtrINS_11HistoryItemEEE(i2, i6);
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i6 | 0;
 i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore11HistoryItemD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i8 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17HistoryController33restoreScrollPositionAndViewStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0;
 i2 = i1 | 0;
 if (!(__ZNK7WebCore23FrameLoaderStateMachine30committedFirstRealDocumentLoadEv((HEAP32[i2 >> 2] | 0) + 104 | 0) | 0)) {
  return;
 }
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 84 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 356 >> 2] & 3](i1);
 i1 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 452 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 i6 = (i5 | 0) != 0;
 do {
  if (i6) {
   if ((HEAP32[i1 + 28 >> 2] | 0) != (i1 | 0)) {
    break;
   }
   i7 = __ZN7WebCore4Page20scrollingCoordinatorEv(i5) | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 24 >> 2] & 3](i7, i4);
  }
 } while (0);
 if (__ZNK7WebCore9FrameView17wasScrolledByUserEv(i4) | 0) {
  return;
 }
 do {
  if (i6) {
   i1 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i1 + 28 >> 2] | 0) != (i1 | 0)) {
    break;
   }
   if (+__ZNK7WebCore11HistoryItem15pageScaleFactorEv(HEAP32[i3 >> 2] | 0) == +0) {
    break;
   }
   d8 = +__ZNK7WebCore11HistoryItem15pageScaleFactorEv(HEAP32[i3 >> 2] | 0);
   __ZN7WebCore4Page18setPageScaleFactorEfRKNS_8IntPointE(i5, d8, __ZNK7WebCore11HistoryItem11scrollPointEv(HEAP32[i3 >> 2] | 0) | 0);
   return;
  }
 } while (0);
 __ZN7WebCore9FrameView17setScrollPositionERKNS_8IntPointE(i4, __ZNK7WebCore11HistoryItem11scrollPointEv(HEAP32[i3 >> 2] | 0) | 0);
 return;
}
function __ZN7WebCore17HistoryController17updateCurrentItemEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i1 + 4 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[(HEAP32[i1 >> 2] | 0) + 128 >> 2] | 0;
 i6 = HEAP32[(__ZNK7WebCore14DocumentLoader14unreachableURLEv(i5) | 0) >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 __ZNK7WebCore11HistoryItem3urlEv(i3, HEAP32[i4 >> 2] | 0);
 i6 = __ZNK7WebCore14DocumentLoader3urlEv(i5) | 0;
 i7 = i3 | 0;
 i3 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i7 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 if (i3) {
  __ZN7WebCore11HistoryItem22setFormInfoFromRequestERKNS_15ResourceRequestE(i6, __ZN7WebCore14DocumentLoader7requestEv(i5) | 0);
  STACKTOP = i2;
  return;
 } else {
  i5 = __ZNK7WebCore11HistoryItem12isTargetItemEv(i6) | 0;
  __ZN7WebCore11HistoryItem5resetEv(HEAP32[i4 >> 2] | 0);
  __ZN7WebCore17HistoryController14initializeItemEPNS_11HistoryItemE(i1, HEAP32[i4 >> 2] | 0);
  __ZN7WebCore11HistoryItem15setIsTargetItemEb(HEAP32[i4 >> 2] | 0, i5);
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore17HistoryController36saveScrollPositionAndViewStateToItemEPNS_11HistoryItemE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i1 + 452 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[(HEAP32[i1 + 456 >> 2] | 0) + 1433 | 0] & 1) == 0) {
  i1 = i4 | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i8 >> 2] | 0) + 164 >> 2] & 1](i4, i8 | 0, 0);
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i1 >> 2];
  HEAP32[i6 + 4 >> 2] = i4;
  __ZN7WebCore11HistoryItem14setScrollPointERKNS_8IntPointE(i2, i6);
 } else {
  i6 = i8 + 124 | 0;
  i8 = HEAP32[i6 + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i5 + 4 >> 2] = i8;
  __ZN7WebCore11HistoryItem14setScrollPointERKNS_8IntPointE(i2, i5);
 }
 i5 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i5 + 32 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = i5;
  } else {
   if ((HEAP32[i5 + 28 >> 2] | 0) != (i5 | 0)) {
    i9 = i5;
    break;
   }
   __ZN7WebCore11HistoryItem18setPageScaleFactorEf(i2, +HEAPF32[i8 + 112 >> 2]);
   i9 = HEAP32[i7 >> 2] | 0;
  }
 } while (0);
 i7 = HEAP32[i9 + 84 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 352 >> 2] & 3](i7, i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17HistoryController31updateForSameDocumentNavigationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i3 + 456 >> 2] | 0;
 i5 = HEAP32[i4 + 356 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
  return;
 }
 if ((HEAP8[(HEAP32[i3 + 36 >> 2] | 0) + 194 | 0] & 64) != 0) {
  return;
 }
 i5 = HEAP32[i3 + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i3 = __ZN7WebCore18platformStrategiesEv() | 0;
 i6 = i3 + 32 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 36 >> 2] & 1](i3) | 0;
  HEAP32[i6 >> 2] = i8;
  i9 = i8;
 } else {
  i9 = i7;
 }
 i7 = HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] | 0;
 i8 = __ZN7WebCore15visitedLinkHashERKN3WTF6StringE(i4 + 356 | 0) | 0;
 FUNCTION_TABLE_viiii[i7 & 1](i9, i5, i8, tempRet0);
 __ZN7WebCore17HistoryController40recursiveUpdateForSameDocumentNavigationEv(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] | 0) + 92 >> 2] | 0);
 i8 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i8 | 0) == 0) {
  return;
 }
 __ZN7WebCore11HistoryItem6setURLERKNS_3URLE(i8, (HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0) + 356 | 0);
 i8 = HEAP32[(HEAP32[i2 >> 2] | 0) + 84 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 260 >> 2] & 3](i8);
 return;
}
function __ZN7WebCore17HistoryController10createItemEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = __ZN3WTF10fastMallocEj(160) | 0;
 i4 = i3;
 __ZN7WebCore11HistoryItemC1Ev(i4);
 __ZN7WebCore17HistoryController14initializeItemEPNS_11HistoryItemE(i2, i4);
 HEAP8[i2 + 16 | 0] = 0;
 i5 = i2 + 4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = i2 + 8 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if ((i3 | 0) != 0) {
  i2 = i3;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 if ((i2 | 0) == 0) {
  i8 = i1 | 0;
  HEAP32[i8 >> 2] = i4;
  return;
 }
 i5 = i2 | 0;
 i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore11HistoryItemD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  i8 = i1 | 0;
  HEAP32[i8 >> 2] = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i3;
  i8 = i1 | 0;
  HEAP32[i8 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore17HistoryController18replaceCurrentItemEPNS_11HistoryItemE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i4 = i1 + 12 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) == 0;
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 if (i5) {
  i5 = i1 + 4 | 0;
  i1 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i2;
  if ((i1 | 0) == 0) {
   return;
  }
  i5 = i1 | 0;
  i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  if ((i3 | 0) == 0) {
   __ZN7WebCore11HistoryItemD1Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  } else {
   HEAP32[i5 >> 2] = i3;
   return;
  }
 } else {
  i3 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = i2;
  if ((i3 | 0) == 0) {
   return;
  }
  i2 = i3 | 0;
  i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i4 | 0) == 0) {
   __ZN7WebCore11HistoryItemD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
   return;
  } else {
   HEAP32[i2 >> 2] = i4;
   return;
  }
 }
}
function __ZN7WebCore17HistoryControllerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
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
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
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
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
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
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore11HistoryItemD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore17HistoryControllerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
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
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
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
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
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
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore11HistoryItemD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore17HistoryController14setCurrentItemEPNS_11HistoryItemE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 HEAP8[i1 + 16 | 0] = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = i1 + 8 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if ((i2 | 0) != 0) {
  i1 = i2 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore11HistoryItemD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore17HistoryController31invalidateCurrentItemCachedPageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = __ZN7WebCore9pageCacheEv() | 0;
 i5 = i1 + 4 | 0;
 if ((__ZN7WebCore9PageCache3getEPNS_11HistoryItemE(i4, HEAP32[i5 >> 2] | 0) | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = __ZN7WebCore9pageCacheEv() | 0;
 __ZN7WebCore9PageCache4takeEPNS_11HistoryItemE(i3, i4, HEAP32[i5 >> 2] | 0);
 i5 = i3 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = HEAP32[HEAP32[i3 + 16 >> 2] >> 2] | 0;
 if ((i5 | 0) == (HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0)) {
  __ZN7WebCore8Document14setInPageCacheEb(i5, 0);
  __ZN7WebCore10CachedPage5clearEv(i3);
 }
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore10CachedPageD1Ev(i3);
 __ZdlPv(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17HistoryController20restoreDocumentStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 i3 = __ZNK7WebCore11FrameLoader8loadTypeEv((HEAP32[i2 >> 2] | 0) + 80 | 0) | 0;
 if ((i3 | 0) == 4 | (i3 | 0) == 9 | (i3 | 0) == 6 | (i3 | 0) == 8) {
  return;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i1 + 364 >> 2] | 0) != (i3 | 0)) {
  return;
 }
 if ((HEAP8[(HEAP32[i1 + 128 >> 2] | 0) + 976 | 0] & 1) != 0) {
  return;
 }
 i2 = HEAP32[i1 + 456 >> 2] | 0;
 __ZN7WebCore8Document26setStateForNewFormElementsERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEE(i2, __ZNK7WebCore11HistoryItem13documentStateEv(i3) | 0);
 return;
}
function __ZN7WebCore17HistoryController15updateForReloadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 4 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) != 0) {
   i3 = __ZN7WebCore9pageCacheEv() | 0;
   __ZN7WebCore9PageCache6removeEPNS_11HistoryItemE(i3, HEAP32[i2 >> 2] | 0);
   i3 = i1 | 0;
   if ((__ZNK7WebCore11FrameLoader8loadTypeEv((HEAP32[i3 >> 2] | 0) + 80 | 0) | 0) != 4) {
    if ((__ZNK7WebCore11FrameLoader8loadTypeEv((HEAP32[i3 >> 2] | 0) + 80 | 0) | 0) != 9) {
     break;
    }
   }
   __ZN7WebCore17HistoryController36saveScrollPositionAndViewStateToItemEPNS_11HistoryItemE(i1, HEAP32[i2 >> 2] | 0);
  }
 } while (0);
 __ZN7WebCore17HistoryController17updateCurrentItemEv(i1);
 return;
}
function __ZNK7WebCore17HistoryController14itemsAreClonesEPNS_11HistoryItemES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 if ((i2 | 0) == 0 | (i3 | 0) == 0 | (i2 | 0) == (i3 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i2 + 120 | 0;
 i6 = i3 + 120 | 0;
 if (!((HEAP32[i5 >> 2] | 0) == (HEAP32[i6 >> 2] | 0) & (HEAP32[i5 + 4 >> 2] | 0) == (HEAP32[i6 + 4 >> 2] | 0))) {
  i4 = 0;
  return i4 | 0;
 }
 if (!(__ZNK7WebCore17HistoryController22currentFramesMatchItemEPNS_11HistoryItemE(i1, i2) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = __ZNK7WebCore11HistoryItem13hasSameFramesEPS0_(i3, i2) | 0;
 return i4 | 0;
}
function __ZN7WebCore17HistoryController16setDefersLoadingEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP8[i1 + 17 | 0] = i2 & 1;
 if (i2) {
  return;
 }
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore17HistoryController8goToItemEPNS_11HistoryItemENS_13FrameLoadTypeE(i1, i3, HEAP32[i1 + 24 >> 2] | 0);
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore11HistoryItemD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore17HistoryController26saveDocumentAndScrollStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i3 = i1;
 }
 while (1) {
  i1 = i3 + 92 | 0;
  __ZN7WebCore17HistoryController17saveDocumentStateEv(HEAP32[i1 >> 2] | 0);
  i4 = HEAP32[i1 >> 2] | 0;
  __ZN7WebCore17HistoryController36saveScrollPositionAndViewStateToItemEPNS_11HistoryItemE(i4, HEAP32[i4 + 4 >> 2] | 0);
  i3 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i3 + 40 | 0, HEAP32[i2 >> 2] | 0) | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
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
function __ZN7WebCore17HistoryController18setProvisionalItemEPNS_11HistoryItemE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = i1 + 12 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore11HistoryItemD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
}
function __ZNK7WebCore17HistoryController31shouldStopLoadingForHistoryItemEPNS_11HistoryItemE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (__ZNK7WebCore11HistoryItem32shouldDoSameDocumentNavigationToEPS0_(i3, i2) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 84 >> 2] | 0;
 i4 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 272 >> 2] & 1](i3, i2) | 0;
 return i4 | 0;
}
function __ZNK7WebCore17HistoryController27currentItemShouldBeReplacedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = __ZNK7WebCore11HistoryItem9urlStringEv(i2) | 0;
 i2 = __ZN7WebCore8blankURLEv() | 0;
 i3 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i1 >> 2] | 0, HEAP32[i2 >> 2] | 0) | 0;
 return i3 | 0;
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
function __ZN7WebCore17HistoryController31clearScrollPositionAndViewStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore11HistoryItem16clearScrollPointEv(i1);
 __ZN7WebCore11HistoryItem18setPageScaleFactorEf(HEAP32[i2 >> 2] | 0, +0);
 return;
}
function __ZN7WebCore17HistoryController30updateForBackForwardNavigationEv(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 16 | 0] & 1) == 0) {
  __ZN7WebCore17HistoryController36saveScrollPositionAndViewStateToItemEPNS_11HistoryItemE(i1, HEAP32[i1 + 8 >> 2] | 0);
 }
 __ZN7WebCore17HistoryController17updateCurrentItemEv(i1);
 return;
}
function __ZN7WebCore17HistoryControllerC2ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP8[i1 + 16 | 0] = 1;
 HEAP8[i1 + 17 | 0] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 return;
}
function __ZN7WebCore17HistoryControllerC1ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP8[i1 + 16 | 0] = 1;
 HEAP8[i1 + 17 | 0] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 return;
}
function __ZN7WebCore17HistoryController19setCurrentItemTitleERKNS_19StringWithDirectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore11HistoryItem8setTitleERKN3WTF6StringE(i3, i2 | 0);
 return;
}
function __ZN7WebCore17HistoryController31isReloadTypeWithProvisionalItemENS_13FrameLoadTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i2 | 0) == 9 | (i2 | 0) == 4) {
  i3 = (HEAP32[i1 + 12 >> 2] | 0) != 0;
 } else {
  i3 = 0;
 }
 return i3 | 0;
}
function __ZN7WebCore17HistoryController36isReplaceLoadTypeWithProvisionalItemENS_13FrameLoadTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i2 | 0) != 8) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i1 + 12 >> 2] | 0) != 0;
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore17HistoryController38updateBackForwardListForFragmentScrollEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17HistoryController36updateBackForwardListClippedAtTargetEb(i1, 0);
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 1](i2 | 0, i3 | 0, i4 | 0);
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
function __ZN7WebCore17HistoryController27updateForFrameLoadCompletedEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 16 | 0] = 1;
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function b6(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(6);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
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
function b4() {
 abort(4);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore17HistoryControllerD2Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore17HistoryControllerC2ERNS_5FrameE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore17HistoryController17recursiveGoToItemEPNS_11HistoryItemES2_NS_13FrameLoadTypeE","__ZN7WebCore17HistoryController17updateCurrentItemEv","__ZN7WebCore17HistoryController36updateBackForwardListClippedAtTargetEb","__ZN7WebCore17HistoryController8goToItemEPNS_11HistoryItemENS_13FrameLoadTypeE","__ZN7WebCore17HistoryController27updateForFrameLoadCompletedEv","_memset","__ZN7WebCore17HistoryController10createItemEv","__ZN7WebCore17HistoryController38updateBackForwardListForFragmentScrollEv","__ZN7WebCore17HistoryController18replaceCurrentItemEPNS_11HistoryItemE","__ZN7WebCore17HistoryController27recursiveSetProvisionalItemEPNS_11HistoryItemES2_NS_13FrameLoadTypeE","__ZN7WebCore17HistoryController30updateForBackForwardNavigationEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore17HistoryController40recursiveUpdateForSameDocumentNavigationEv","__ZN7WebCore17HistoryController31invalidateCurrentItemCachedPageEv","__ZN7WebCore17HistoryController9pushStateEN3WTF10PassRefPtrINS_21SerializedScriptValueEEERKNS1_6StringES7_","__ZN7WebCore17HistoryController26saveDocumentAndScrollStateEv","__ZN7WebCore17HistoryController31isReloadTypeWithProvisionalItemENS_13FrameLoadTypeE","__ZN7WebCore17HistoryControllerC2ERNS_5FrameE","__ZN7WebCore17HistoryController19setCurrentItemTitleERKNS_19StringWithDirectionE","__ZN7WebCore17HistoryController23updateForClientRedirectEv","_memcpy","__ZNK7WebCore17HistoryController22currentFramesMatchItemEPNS_11HistoryItemE","__ZN7WebCore17HistoryController15updateForCommitEv","__ZN7WebCore17HistoryControllerD2Ev","__ZN7WebCore17HistoryController24recursiveUpdateForCommitEv","__ZN7WebCore17HistoryController16setDefersLoadingEb","__ZN7WebCore17HistoryController20restoreDocumentStateEv","__ZN7WebCore17HistoryController31updateForSameDocumentNavigationEv","__ZN7WebCore17HistoryController36saveScrollPositionAndViewStateToItemEPNS_11HistoryItemE","__ZNK7WebCore17HistoryController31shouldStopLoadingForHistoryItemEPNS_11HistoryItemE","__ZN7WebCore17HistoryController14createItemTreeERNS_5FrameEb","__ZN7WebCore17HistoryController15updateForReloadEv","__ZN7WebCore17HistoryController31clearScrollPositionAndViewStateEv","__ZN7WebCore17HistoryController21updateForStandardLoadENS0_17HistoryUpdateTypeE","__ZNK7WebCore17HistoryController27currentItemShouldBeReplacedEv","__ZNK7WebCore17HistoryController14itemsAreClonesEPNS_11HistoryItemES2_","__ZN7WebCore17HistoryController42updateForRedirectWithLockedBackForwardListEv","_strlen","__ZN7WebCore17HistoryController33restoreScrollPositionAndViewStateEv","__ZN7WebCore17HistoryController36isReplaceLoadTypeWithProvisionalItemENS_13FrameLoadTypeE","__ZN7WebCore17HistoryController17saveDocumentStateEv","__ZN7WebCore17HistoryController12replaceStateEN3WTF10PassRefPtrINS_21SerializedScriptValueEEERKNS1_6StringES7_","__ZN7WebCore17HistoryController18setProvisionalItemEPNS_11HistoryItemE","__ZN7WebCore17HistoryController14setCurrentItemEPNS_11HistoryItemE","__ZN7WebCore17HistoryController14initializeItemEPNS_11HistoryItemE"]

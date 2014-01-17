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
H_BASE = parentModule["_malloc"](152 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 152;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore12FloatPolygonC1EN3WTF10PassOwnPtrINS1_6VectorINS_10FloatPointELj0ENS1_15CrashOnOverflowEEEEENS_8WindRuleE;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
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
  var __ZTVN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE4NodeE=(H_BASE+96)|0;
  var __ZTVN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEEE=(H_BASE+64)|0;
  var __ZTVN7WebCore15PODIntervalTreeIfPNS_16FloatPolygonEdgeEEE=(H_BASE+128)|0;
  var __ZTVN7WebCore16FloatPolygonEdgeE=(H_BASE+32)|0;
  var __ZTVN7WebCore16PODFreeListArenaINS_15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE4NodeEEE=(H_BASE+8)|0;
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
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore12FloatPolygonC2EN3WTF10PassOwnPtrINS1_6VectorINS_10FloatPointELj0ENS1_15CrashOnOverflowEEEEENS_8WindRuleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, d19 = +0, d20 = +0, i21 = 0, d22 = +0, d23 = +0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, d38 = +0;
 i4 = i1 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 i3 = i1 + 8 | 0;
 _memset(i3 | 0, 0, 16) | 0;
 i2 = i1 + 28 | 0;
 i5 = i2 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 32 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 36 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i1 + 40 | 0;
 i9 = i8 | 0;
 HEAP32[i9 >> 2] = H_BASE + 72;
 i10 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i10 + 4 >> 2] = 1;
 HEAP32[i10 >> 2] = H_BASE + 16;
 HEAP32[i10 + 8 >> 2] = 0;
 HEAP32[i10 + 12 >> 2] = 16384;
 HEAP32[i10 + 16 >> 2] = 0;
 HEAP32[i10 + 20 >> 2] = 0;
 HEAP32[i10 + 24 >> 2] = 0;
 i11 = i1 + 44 | 0;
 HEAP32[i11 >> 2] = i10;
 HEAP32[i1 + 48 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 136;
 HEAP8[i1 + 52 | 0] = 1;
 i9 = HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 do {
  if (i10 >>> 0 < i9 >>> 0) {
   i12 = HEAP32[i6 >> 2] | 0;
   if (i12 >>> 0 < i9 >>> 0) {
    i13 = i12 + 1 + (i12 >>> 2) | 0;
    i12 = i13 >>> 0 > 16 >>> 0 ? i13 : 16;
    __ZN3WTF6VectorIN7WebCore16FloatPolygonEdgeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i12 >>> 0 > i9 >>> 0 ? i12 : i9);
   }
   i12 = HEAP32[i5 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i13 = HEAP32[i7 >> 2] | 0;
   i14 = i12 + (i9 * 20 & -1) | 0;
   if ((i13 | 0) == (i9 | 0)) {
    break;
   }
   i15 = i12 + (i13 * 20 & -1) | 0;
   while (1) {
    HEAP32[i15 >> 2] = H_BASE + 40;
    i15 = i15 + 20 | 0;
    if ((i15 | 0) == (i14 | 0)) {
     break;
    }
   }
  } else {
   i14 = HEAP32[i5 >> 2] | 0;
   i15 = i14 + (i10 * 20 & -1) | 0;
   if ((i10 | 0) == (i9 | 0)) {
    break;
   }
   i13 = i14 + (i9 * 20 & -1) | 0;
   while (1) {
    FUNCTION_TABLE_vi[HEAP32[HEAP32[i13 >> 2] >> 2] & 31](i13);
    i13 = i13 + 20 | 0;
    if ((i13 | 0) == (i15 | 0)) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = i9;
 i10 = i9 >>> 0 < 3 >>> 0;
 i15 = i1 + 24 | 0;
 HEAP8[i15] = i10 & 1;
 do {
  if ((i9 | 0) != 0) {
   i13 = HEAP32[i4 >> 2] | 0;
   if ((HEAP32[i13 + 8 >> 2] | 0) == 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else {
    i14 = HEAP32[i13 >> 2] | 0;
    i13 = i3;
    i12 = HEAP32[i14 + 4 >> 2] | 0;
    HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i13 + 4 >> 2] = i12;
    break;
   }
  }
 } while (0);
 if (i10) {
  return;
 }
 i10 = HEAP32[i4 >> 2] | 0;
 i12 = HEAP32[i10 + 8 >> 2] | 0;
 i13 = i10 | 0;
 i14 = 1;
 i16 = 0;
 while (1) {
  if (i12 >>> 0 <= i14 >>> 0) {
   i17 = 18;
   break;
  }
  i18 = HEAP32[i13 >> 2] | 0;
  d19 = +HEAPF32[i18 + (i14 << 3) + 4 >> 2];
  if (i12 >>> 0 <= i16 >>> 0) {
   i17 = 20;
   break;
  }
  d20 = +HEAPF32[i18 + (i16 << 3) + 4 >> 2];
  do {
   if (d19 < d20) {
    i17 = 24;
   } else {
    if (d19 != d20) {
     i21 = i16;
     break;
    }
    if (+HEAPF32[i18 + (i14 << 3) >> 2] < +HEAPF32[i18 + (i16 << 3) >> 2]) {
     i17 = 24;
    } else {
     i21 = i16;
    }
   }
  } while (0);
  if ((i17 | 0) == 24) {
   i17 = 0;
   i21 = i14;
  }
  i18 = i14 + 1 | 0;
  if (i18 >>> 0 < i9 >>> 0) {
   i14 = i18;
   i16 = i21;
  } else {
   i17 = 26;
   break;
  }
 }
 if ((i17 | 0) == 18) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i17 | 0) == 20) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i17 | 0) == 26) {
  i16 = ((i21 + 1 | 0) >>> 0) % (i9 >>> 0) & -1;
  if (i12 >>> 0 <= i16 >>> 0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i14 = HEAP32[i10 >> 2] | 0;
  i13 = i14 + (i16 << 3) | 0;
  d20 = +HEAPF32[i13 >> 2];
  d19 = +HEAPF32[i13 + 4 >> 2];
  i13 = ((i9 - 1 + i21 | 0) >>> 0) % (i9 >>> 0) & -1;
  if (i12 >>> 0 <= i13 >>> 0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i9 = i14 + (i13 << 3) | 0;
  d22 = +HEAPF32[i9 >> 2];
  d23 = +HEAPF32[i9 + 4 >> 2];
  if (i12 >>> 0 <= i21 >>> 0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i9 = (d19 - d23) * (+HEAPF32[i14 + (i21 << 3) >> 2] - d22) - (d20 - d22) * (+HEAPF32[i14 + (i21 << 3) + 4 >> 2] - d23) > +0;
  i21 = 0;
  i14 = 0;
  i13 = i10;
  i10 = i12;
  L47 : while (1) {
   if (i10 >>> 0 <= i14 >>> 0) {
    i17 = 34;
    break;
   }
   __ZN7WebCore9FloatRect6extendERKNS_10FloatPointE(i3, (HEAP32[i13 >> 2] | 0) + (i14 << 3) | 0);
   i12 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i12 + 8 >> 2] | 0;
   if (i9) {
    i24 = i14 + 1 | 0;
   } else {
    i24 = i14 - 1 + i16 | 0;
   }
   i18 = (i24 >>> 0) % (i16 >>> 0) & -1;
   L54 : do {
    if ((i18 | 0) == 0) {
     i25 = 0;
     i26 = i12 | 0;
     i27 = i16 - 1 | 0;
    } else {
     i28 = i12 | 0;
     i29 = i16 - 1 | 0;
     if (i16 >>> 0 <= i14 >>> 0) {
      i17 = 45;
      break L47;
     }
     i30 = HEAP32[i28 >> 2] | 0;
     d23 = +HEAPF32[i30 + (i14 << 3) >> 2];
     i31 = i30 + (i14 << 3) + 4 | 0;
     if (i9) {
      i32 = i18;
      while (1) {
       if (d23 != +HEAPF32[i30 + (i32 << 3) >> 2]) {
        i25 = i32;
        i26 = i28;
        i27 = i29;
        break L54;
       }
       if (+HEAPF32[i31 >> 2] != +HEAPF32[i30 + (i32 << 3) + 4 >> 2]) {
        i25 = i32;
        i26 = i28;
        i27 = i29;
        break L54;
       }
       i33 = ((i32 + 1 | 0) >>> 0) % (i16 >>> 0) & -1;
       if ((i33 | 0) == 0) {
        i25 = 0;
        i26 = i28;
        i27 = i29;
        break;
       } else {
        i32 = i33;
       }
      }
     } else {
      i32 = i18;
      while (1) {
       if (d23 != +HEAPF32[i30 + (i32 << 3) >> 2]) {
        i25 = i32;
        i26 = i28;
        i27 = i29;
        break L54;
       }
       if (+HEAPF32[i31 >> 2] != +HEAPF32[i30 + (i32 << 3) + 4 >> 2]) {
        i25 = i32;
        i26 = i28;
        i27 = i29;
        break L54;
       }
       i33 = ((i32 + i29 | 0) >>> 0) % (i16 >>> 0) & -1;
       if ((i33 | 0) == 0) {
        i25 = 0;
        i26 = i28;
        i27 = i29;
        break;
       } else {
        i32 = i33;
       }
      }
     }
    }
   } while (0);
   i18 = i16 >>> 0 > i14 >>> 0;
   L68 : do {
    if (i9) {
     i12 = i25;
     while (1) {
      if ((i12 | 0) == 0) {
       i34 = 0;
       break L68;
      }
      i32 = ((i12 + 1 | 0) >>> 0) % (i16 >>> 0) & -1;
      if (!i18) {
       i17 = 97;
       break L47;
      }
      i29 = HEAP32[i26 >> 2] | 0;
      if (i16 >>> 0 <= i12 >>> 0) {
       i17 = 99;
       break L47;
      }
      d23 = +HEAPF32[i29 + (i14 << 3) >> 2];
      d22 = +HEAPF32[i29 + (i14 << 3) + 4 >> 2];
      if ((+HEAPF32[i29 + (i12 << 3) >> 2] - d23) * (+HEAPF32[i29 + (i32 << 3) + 4 >> 2] - d22) - (+HEAPF32[i29 + (i12 << 3) + 4 >> 2] - d22) * (+HEAPF32[i29 + (i32 << 3) >> 2] - d23) == +0) {
       i12 = i32;
      } else {
       i34 = i12;
       break;
      }
     }
    } else {
     if (i18) {
      i35 = i25;
     } else {
      if ((i25 | 0) == 0) {
       i34 = 0;
       break;
      } else {
       i17 = 96;
       break L47;
      }
     }
     while (1) {
      if ((i35 | 0) == 0) {
       i34 = 0;
       break L68;
      }
      i12 = ((i35 + i27 | 0) >>> 0) % (i16 >>> 0) & -1;
      i32 = HEAP32[i26 >> 2] | 0;
      if (i16 >>> 0 <= i35 >>> 0) {
       i17 = 98;
       break L47;
      }
      d23 = +HEAPF32[i32 + (i14 << 3) >> 2];
      d22 = +HEAPF32[i32 + (i14 << 3) + 4 >> 2];
      if ((+HEAPF32[i32 + (i35 << 3) >> 2] - d23) * (+HEAPF32[i32 + (i12 << 3) + 4 >> 2] - d22) - (+HEAPF32[i32 + (i35 << 3) + 4 >> 2] - d22) * (+HEAPF32[i32 + (i12 << 3) >> 2] - d23) == +0) {
       i35 = i12;
      } else {
       i34 = i35;
       break;
      }
     }
    }
   } while (0);
   if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i21 >>> 0) {
    i17 = 62;
    break;
   }
   HEAP32[(HEAP32[i5 >> 2] | 0) + (i21 * 20 & -1) + 16 >> 2] = i1;
   if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i21 >>> 0) {
    i17 = 64;
    break;
   }
   HEAP32[(HEAP32[i5 >> 2] | 0) + (i21 * 20 & -1) + 4 >> 2] = i14;
   if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i21 >>> 0) {
    i17 = 66;
    break;
   }
   HEAP32[(HEAP32[i5 >> 2] | 0) + (i21 * 20 & -1) + 8 >> 2] = i34;
   if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i21 >>> 0) {
    i17 = 68;
    break;
   }
   HEAP32[(HEAP32[i5 >> 2] | 0) + (i21 * 20 & -1) + 12 >> 2] = i21;
   i36 = i21 + 1 | 0;
   if ((i34 | 0) == 0) {
    i17 = 71;
    break;
   }
   i16 = HEAP32[i4 >> 2] | 0;
   i21 = i36;
   i14 = i34;
   i13 = i16;
   i10 = HEAP32[i16 + 8 >> 2] | 0;
  }
  if ((i17 | 0) == 34) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i17 | 0) == 45) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i17 | 0) == 62) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i17 | 0) == 64) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i17 | 0) == 66) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i17 | 0) == 68) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i17 | 0) == 71) {
   do {
    if (i36 >>> 0 > 3 >>> 0) {
     i10 = HEAP32[i7 >> 2] | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     i13 = HEAP32[i5 >> 2] | 0;
     if (i10 >>> 0 <= i21 >>> 0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     i10 = i13 + (i21 * 20 & -1) | 0;
     i34 = i10;
     i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i34 >> 2] | 0) + 8 >> 2] & 15](i10) | 0;
     i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i34 >> 2] | 0) + 12 >> 2] & 15](i10) | 0;
     i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 12 >> 2] & 15](i13) | 0;
     d23 = +HEAPF32[i14 >> 2];
     d22 = +HEAPF32[i14 + 4 >> 2];
     if ((+HEAPF32[i4 >> 2] - d23) * (+HEAPF32[i10 + 4 >> 2] - d22) - (+HEAPF32[i4 + 4 >> 2] - d22) * (+HEAPF32[i10 >> 2] - d23) != +0) {
      i37 = i36;
      break;
     }
     if ((HEAP32[i7 >> 2] | 0) == 0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else {
      HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] = HEAP32[i13 + (i21 * 20 & -1) + 4 >> 2];
      i37 = i21;
      break;
     }
    } else {
     i37 = i36;
    }
   } while (0);
   i36 = HEAP32[i7 >> 2] | 0;
   do {
    if (i36 >>> 0 < i37 >>> 0) {
     i21 = HEAP32[i6 >> 2] | 0;
     if (i21 >>> 0 < i37 >>> 0) {
      i13 = i21 + 1 + (i21 >>> 2) | 0;
      i21 = i13 >>> 0 > 16 >>> 0 ? i13 : 16;
      __ZN3WTF6VectorIN7WebCore16FloatPolygonEdgeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i21 >>> 0 > i37 >>> 0 ? i21 : i37);
     }
     i21 = HEAP32[i5 >> 2] | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     i13 = HEAP32[i7 >> 2] | 0;
     i10 = i21 + (i37 * 20 & -1) | 0;
     if ((i13 | 0) == (i37 | 0)) {
      break;
     }
     i4 = i21 + (i13 * 20 & -1) | 0;
     while (1) {
      HEAP32[i4 >> 2] = H_BASE + 40;
      i4 = i4 + 20 | 0;
      if ((i4 | 0) == (i10 | 0)) {
       break;
      }
     }
    } else {
     i10 = HEAP32[i5 >> 2] | 0;
     i4 = i10 + (i36 * 20 & -1) | 0;
     if ((i36 | 0) == (i37 | 0)) {
      break;
     }
     i13 = i10 + (i37 * 20 & -1) | 0;
     while (1) {
      FUNCTION_TABLE_vi[HEAP32[HEAP32[i13 >> 2] >> 2] & 31](i13);
      i13 = i13 + 20 | 0;
      if ((i13 | 0) == (i4 | 0)) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i7 >> 2] = i37;
   i36 = i37 >>> 0 < 3 >>> 0;
   HEAP8[i15] = i36 & 1;
   if (i36) {
    return;
   }
   i36 = i8 | 0;
   i8 = 0;
   while (1) {
    i15 = (HEAP32[i5 >> 2] | 0) + (i8 * 20 & -1) | 0;
    i37 = i15 | 0;
    i2 = i15;
    d23 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 15](i37) | 0) + 4 >> 2];
    d22 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 15](i37) | 0) + 4 >> 2];
    d20 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 15](i37) | 0) + 4 >> 2];
    d19 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 15](i37) | 0) + 4 >> 2];
    d38 = d20 < d19 ? d19 : d20;
    i37 = __ZN7WebCore16PODFreeListArenaINS_15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE4NodeEE8allocateEj(HEAP32[i11 >> 2] | 0, 36) | 0;
    if ((i37 | 0) != 0) {
     HEAP32[i37 >> 2] = H_BASE + 104;
     HEAP32[i37 + 4 >> 2] = 0;
     HEAP32[i37 + 8 >> 2] = 0;
     HEAP32[i37 + 12 >> 2] = 0;
     HEAP32[i37 + 16 >> 2] = 1;
     HEAPF32[i37 + 20 >> 2] = d22 < d23 ? d22 : d23;
     HEAPF32[i37 + 24 >> 2] = d38;
     HEAP32[i37 + 28 >> 2] = i15;
     HEAPF32[i37 + 32 >> 2] = d38;
    }
    __ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE10insertNodeEPNS5_4NodeE(i36, i37);
    i8 = i8 + 1 | 0;
    if (i8 >>> 0 >= (HEAP32[i7 >> 2] | 0) >>> 0) {
     break;
    }
   }
   return;
  } else if ((i17 | 0) == 96) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i17 | 0) == 97) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i17 | 0) == 98) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i17 | 0) == 99) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 }
}
function __ZN7WebCore12FloatPolygonC1EN3WTF10PassOwnPtrINS1_6VectorINS_10FloatPointELj0ENS1_15CrashOnOverflowEEEEENS_8WindRuleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, d19 = +0, d20 = +0, i21 = 0, d22 = +0, d23 = +0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, d38 = +0;
 i4 = i1 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 i3 = i1 + 8 | 0;
 _memset(i3 | 0, 0, 16) | 0;
 i2 = i1 + 28 | 0;
 i5 = i2 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 32 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 36 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i1 + 40 | 0;
 i9 = i8 | 0;
 HEAP32[i9 >> 2] = H_BASE + 72;
 i10 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i10 + 4 >> 2] = 1;
 HEAP32[i10 >> 2] = H_BASE + 16;
 HEAP32[i10 + 8 >> 2] = 0;
 HEAP32[i10 + 12 >> 2] = 16384;
 HEAP32[i10 + 16 >> 2] = 0;
 HEAP32[i10 + 20 >> 2] = 0;
 HEAP32[i10 + 24 >> 2] = 0;
 i11 = i1 + 44 | 0;
 HEAP32[i11 >> 2] = i10;
 HEAP32[i1 + 48 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 136;
 HEAP8[i1 + 52 | 0] = 1;
 i9 = HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 do {
  if (i10 >>> 0 < i9 >>> 0) {
   i12 = HEAP32[i6 >> 2] | 0;
   if (i12 >>> 0 < i9 >>> 0) {
    i13 = i12 + 1 + (i12 >>> 2) | 0;
    i12 = i13 >>> 0 > 16 >>> 0 ? i13 : 16;
    __ZN3WTF6VectorIN7WebCore16FloatPolygonEdgeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i12 >>> 0 > i9 >>> 0 ? i12 : i9);
   }
   i12 = HEAP32[i5 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i13 = HEAP32[i7 >> 2] | 0;
   i14 = i12 + (i9 * 20 & -1) | 0;
   if ((i13 | 0) == (i9 | 0)) {
    break;
   }
   i15 = i12 + (i13 * 20 & -1) | 0;
   while (1) {
    HEAP32[i15 >> 2] = H_BASE + 40;
    i15 = i15 + 20 | 0;
    if ((i15 | 0) == (i14 | 0)) {
     break;
    }
   }
  } else {
   i14 = HEAP32[i5 >> 2] | 0;
   i15 = i14 + (i10 * 20 & -1) | 0;
   if ((i10 | 0) == (i9 | 0)) {
    break;
   }
   i13 = i14 + (i9 * 20 & -1) | 0;
   while (1) {
    FUNCTION_TABLE_vi[HEAP32[HEAP32[i13 >> 2] >> 2] & 31](i13);
    i13 = i13 + 20 | 0;
    if ((i13 | 0) == (i15 | 0)) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = i9;
 i10 = i9 >>> 0 < 3 >>> 0;
 i15 = i1 + 24 | 0;
 HEAP8[i15] = i10 & 1;
 do {
  if ((i9 | 0) != 0) {
   i13 = HEAP32[i4 >> 2] | 0;
   if ((HEAP32[i13 + 8 >> 2] | 0) == 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else {
    i14 = HEAP32[i13 >> 2] | 0;
    i13 = i3;
    i12 = HEAP32[i14 + 4 >> 2] | 0;
    HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i13 + 4 >> 2] = i12;
    break;
   }
  }
 } while (0);
 if (i10) {
  return;
 }
 i10 = HEAP32[i4 >> 2] | 0;
 i12 = HEAP32[i10 + 8 >> 2] | 0;
 i13 = i10 | 0;
 i14 = 1;
 i16 = 0;
 while (1) {
  if (i12 >>> 0 <= i14 >>> 0) {
   i17 = 18;
   break;
  }
  i18 = HEAP32[i13 >> 2] | 0;
  d19 = +HEAPF32[i18 + (i14 << 3) + 4 >> 2];
  if (i12 >>> 0 <= i16 >>> 0) {
   i17 = 20;
   break;
  }
  d20 = +HEAPF32[i18 + (i16 << 3) + 4 >> 2];
  do {
   if (d19 < d20) {
    i17 = 24;
   } else {
    if (d19 != d20) {
     i21 = i16;
     break;
    }
    if (+HEAPF32[i18 + (i14 << 3) >> 2] < +HEAPF32[i18 + (i16 << 3) >> 2]) {
     i17 = 24;
    } else {
     i21 = i16;
    }
   }
  } while (0);
  if ((i17 | 0) == 24) {
   i17 = 0;
   i21 = i14;
  }
  i18 = i14 + 1 | 0;
  if (i18 >>> 0 < i9 >>> 0) {
   i14 = i18;
   i16 = i21;
  } else {
   i17 = 26;
   break;
  }
 }
 if ((i17 | 0) == 18) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i17 | 0) == 20) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i17 | 0) == 26) {
  i16 = ((i21 + 1 | 0) >>> 0) % (i9 >>> 0) & -1;
  if (i12 >>> 0 <= i16 >>> 0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i14 = HEAP32[i10 >> 2] | 0;
  i13 = i14 + (i16 << 3) | 0;
  d20 = +HEAPF32[i13 >> 2];
  d19 = +HEAPF32[i13 + 4 >> 2];
  i13 = ((i9 - 1 + i21 | 0) >>> 0) % (i9 >>> 0) & -1;
  if (i12 >>> 0 <= i13 >>> 0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i9 = i14 + (i13 << 3) | 0;
  d22 = +HEAPF32[i9 >> 2];
  d23 = +HEAPF32[i9 + 4 >> 2];
  if (i12 >>> 0 <= i21 >>> 0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i9 = (d19 - d23) * (+HEAPF32[i14 + (i21 << 3) >> 2] - d22) - (d20 - d22) * (+HEAPF32[i14 + (i21 << 3) + 4 >> 2] - d23) > +0;
  i21 = 0;
  i14 = 0;
  i13 = i10;
  i10 = i12;
  L47 : while (1) {
   if (i10 >>> 0 <= i14 >>> 0) {
    i17 = 34;
    break;
   }
   __ZN7WebCore9FloatRect6extendERKNS_10FloatPointE(i3, (HEAP32[i13 >> 2] | 0) + (i14 << 3) | 0);
   i12 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i12 + 8 >> 2] | 0;
   if (i9) {
    i24 = i14 + 1 | 0;
   } else {
    i24 = i14 - 1 + i16 | 0;
   }
   i18 = (i24 >>> 0) % (i16 >>> 0) & -1;
   L54 : do {
    if ((i18 | 0) == 0) {
     i25 = 0;
     i26 = i12 | 0;
     i27 = i16 - 1 | 0;
    } else {
     i28 = i12 | 0;
     i29 = i16 - 1 | 0;
     if (i16 >>> 0 <= i14 >>> 0) {
      i17 = 45;
      break L47;
     }
     i30 = HEAP32[i28 >> 2] | 0;
     d23 = +HEAPF32[i30 + (i14 << 3) >> 2];
     i31 = i30 + (i14 << 3) + 4 | 0;
     if (i9) {
      i32 = i18;
      while (1) {
       if (d23 != +HEAPF32[i30 + (i32 << 3) >> 2]) {
        i25 = i32;
        i26 = i28;
        i27 = i29;
        break L54;
       }
       if (+HEAPF32[i31 >> 2] != +HEAPF32[i30 + (i32 << 3) + 4 >> 2]) {
        i25 = i32;
        i26 = i28;
        i27 = i29;
        break L54;
       }
       i33 = ((i32 + 1 | 0) >>> 0) % (i16 >>> 0) & -1;
       if ((i33 | 0) == 0) {
        i25 = 0;
        i26 = i28;
        i27 = i29;
        break;
       } else {
        i32 = i33;
       }
      }
     } else {
      i32 = i18;
      while (1) {
       if (d23 != +HEAPF32[i30 + (i32 << 3) >> 2]) {
        i25 = i32;
        i26 = i28;
        i27 = i29;
        break L54;
       }
       if (+HEAPF32[i31 >> 2] != +HEAPF32[i30 + (i32 << 3) + 4 >> 2]) {
        i25 = i32;
        i26 = i28;
        i27 = i29;
        break L54;
       }
       i33 = ((i32 + i29 | 0) >>> 0) % (i16 >>> 0) & -1;
       if ((i33 | 0) == 0) {
        i25 = 0;
        i26 = i28;
        i27 = i29;
        break;
       } else {
        i32 = i33;
       }
      }
     }
    }
   } while (0);
   i18 = i16 >>> 0 > i14 >>> 0;
   L68 : do {
    if (i9) {
     i12 = i25;
     while (1) {
      if ((i12 | 0) == 0) {
       i34 = 0;
       break L68;
      }
      i32 = ((i12 + 1 | 0) >>> 0) % (i16 >>> 0) & -1;
      if (!i18) {
       i17 = 97;
       break L47;
      }
      i29 = HEAP32[i26 >> 2] | 0;
      if (i16 >>> 0 <= i12 >>> 0) {
       i17 = 99;
       break L47;
      }
      d23 = +HEAPF32[i29 + (i14 << 3) >> 2];
      d22 = +HEAPF32[i29 + (i14 << 3) + 4 >> 2];
      if ((+HEAPF32[i29 + (i12 << 3) >> 2] - d23) * (+HEAPF32[i29 + (i32 << 3) + 4 >> 2] - d22) - (+HEAPF32[i29 + (i12 << 3) + 4 >> 2] - d22) * (+HEAPF32[i29 + (i32 << 3) >> 2] - d23) == +0) {
       i12 = i32;
      } else {
       i34 = i12;
       break;
      }
     }
    } else {
     if (i18) {
      i35 = i25;
     } else {
      if ((i25 | 0) == 0) {
       i34 = 0;
       break;
      } else {
       i17 = 96;
       break L47;
      }
     }
     while (1) {
      if ((i35 | 0) == 0) {
       i34 = 0;
       break L68;
      }
      i12 = ((i35 + i27 | 0) >>> 0) % (i16 >>> 0) & -1;
      i32 = HEAP32[i26 >> 2] | 0;
      if (i16 >>> 0 <= i35 >>> 0) {
       i17 = 98;
       break L47;
      }
      d23 = +HEAPF32[i32 + (i14 << 3) >> 2];
      d22 = +HEAPF32[i32 + (i14 << 3) + 4 >> 2];
      if ((+HEAPF32[i32 + (i35 << 3) >> 2] - d23) * (+HEAPF32[i32 + (i12 << 3) + 4 >> 2] - d22) - (+HEAPF32[i32 + (i35 << 3) + 4 >> 2] - d22) * (+HEAPF32[i32 + (i12 << 3) >> 2] - d23) == +0) {
       i35 = i12;
      } else {
       i34 = i35;
       break;
      }
     }
    }
   } while (0);
   if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i21 >>> 0) {
    i17 = 62;
    break;
   }
   HEAP32[(HEAP32[i5 >> 2] | 0) + (i21 * 20 & -1) + 16 >> 2] = i1;
   if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i21 >>> 0) {
    i17 = 64;
    break;
   }
   HEAP32[(HEAP32[i5 >> 2] | 0) + (i21 * 20 & -1) + 4 >> 2] = i14;
   if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i21 >>> 0) {
    i17 = 66;
    break;
   }
   HEAP32[(HEAP32[i5 >> 2] | 0) + (i21 * 20 & -1) + 8 >> 2] = i34;
   if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i21 >>> 0) {
    i17 = 68;
    break;
   }
   HEAP32[(HEAP32[i5 >> 2] | 0) + (i21 * 20 & -1) + 12 >> 2] = i21;
   i36 = i21 + 1 | 0;
   if ((i34 | 0) == 0) {
    i17 = 71;
    break;
   }
   i16 = HEAP32[i4 >> 2] | 0;
   i21 = i36;
   i14 = i34;
   i13 = i16;
   i10 = HEAP32[i16 + 8 >> 2] | 0;
  }
  if ((i17 | 0) == 34) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i17 | 0) == 45) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i17 | 0) == 62) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i17 | 0) == 64) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i17 | 0) == 66) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i17 | 0) == 68) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i17 | 0) == 71) {
   do {
    if (i36 >>> 0 > 3 >>> 0) {
     i10 = HEAP32[i7 >> 2] | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     i13 = HEAP32[i5 >> 2] | 0;
     if (i10 >>> 0 <= i21 >>> 0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     i10 = i13 + (i21 * 20 & -1) | 0;
     i34 = i10;
     i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i34 >> 2] | 0) + 8 >> 2] & 15](i10) | 0;
     i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i34 >> 2] | 0) + 12 >> 2] & 15](i10) | 0;
     i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 12 >> 2] & 15](i13) | 0;
     d23 = +HEAPF32[i14 >> 2];
     d22 = +HEAPF32[i14 + 4 >> 2];
     if ((+HEAPF32[i4 >> 2] - d23) * (+HEAPF32[i10 + 4 >> 2] - d22) - (+HEAPF32[i4 + 4 >> 2] - d22) * (+HEAPF32[i10 >> 2] - d23) != +0) {
      i37 = i36;
      break;
     }
     if ((HEAP32[i7 >> 2] | 0) == 0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else {
      HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] = HEAP32[i13 + (i21 * 20 & -1) + 4 >> 2];
      i37 = i21;
      break;
     }
    } else {
     i37 = i36;
    }
   } while (0);
   i36 = HEAP32[i7 >> 2] | 0;
   do {
    if (i36 >>> 0 < i37 >>> 0) {
     i21 = HEAP32[i6 >> 2] | 0;
     if (i21 >>> 0 < i37 >>> 0) {
      i13 = i21 + 1 + (i21 >>> 2) | 0;
      i21 = i13 >>> 0 > 16 >>> 0 ? i13 : 16;
      __ZN3WTF6VectorIN7WebCore16FloatPolygonEdgeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i21 >>> 0 > i37 >>> 0 ? i21 : i37);
     }
     i21 = HEAP32[i5 >> 2] | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     i13 = HEAP32[i7 >> 2] | 0;
     i10 = i21 + (i37 * 20 & -1) | 0;
     if ((i13 | 0) == (i37 | 0)) {
      break;
     }
     i4 = i21 + (i13 * 20 & -1) | 0;
     while (1) {
      HEAP32[i4 >> 2] = H_BASE + 40;
      i4 = i4 + 20 | 0;
      if ((i4 | 0) == (i10 | 0)) {
       break;
      }
     }
    } else {
     i10 = HEAP32[i5 >> 2] | 0;
     i4 = i10 + (i36 * 20 & -1) | 0;
     if ((i36 | 0) == (i37 | 0)) {
      break;
     }
     i13 = i10 + (i37 * 20 & -1) | 0;
     while (1) {
      FUNCTION_TABLE_vi[HEAP32[HEAP32[i13 >> 2] >> 2] & 31](i13);
      i13 = i13 + 20 | 0;
      if ((i13 | 0) == (i4 | 0)) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i7 >> 2] = i37;
   i36 = i37 >>> 0 < 3 >>> 0;
   HEAP8[i15] = i36 & 1;
   if (i36) {
    return;
   }
   i36 = i8 | 0;
   i8 = 0;
   while (1) {
    i15 = (HEAP32[i5 >> 2] | 0) + (i8 * 20 & -1) | 0;
    i37 = i15 | 0;
    i2 = i15;
    d23 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 15](i37) | 0) + 4 >> 2];
    d22 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 15](i37) | 0) + 4 >> 2];
    d20 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 15](i37) | 0) + 4 >> 2];
    d19 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 15](i37) | 0) + 4 >> 2];
    d38 = d20 < d19 ? d19 : d20;
    i37 = __ZN7WebCore16PODFreeListArenaINS_15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE4NodeEE8allocateEj(HEAP32[i11 >> 2] | 0, 36) | 0;
    if ((i37 | 0) != 0) {
     HEAP32[i37 >> 2] = H_BASE + 104;
     HEAP32[i37 + 4 >> 2] = 0;
     HEAP32[i37 + 8 >> 2] = 0;
     HEAP32[i37 + 12 >> 2] = 0;
     HEAP32[i37 + 16 >> 2] = 1;
     HEAPF32[i37 + 20 >> 2] = d22 < d23 ? d22 : d23;
     HEAPF32[i37 + 24 >> 2] = d38;
     HEAP32[i37 + 28 >> 2] = i15;
     HEAPF32[i37 + 32 >> 2] = d38;
    }
    __ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE10insertNodeEPNS5_4NodeE(i36, i37);
    i8 = i8 + 1 | 0;
    if (i8 >>> 0 >= (HEAP32[i7 >> 2] | 0) >>> 0) {
     break;
    }
   }
   return;
  } else if ((i17 | 0) == 96) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i17 | 0) == 97) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i17 | 0) == 98) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i17 | 0) == 99) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 }
}
function __ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE10insertNodeEPNS5_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   HEAP32[i2 + 12 >> 2] = 0;
   i5 = 6;
  } else {
   d6 = +HEAPF32[i2 + 20 >> 2];
   i7 = i4;
   while (1) {
    i8 = i7 + 20 | 0;
    i9 = i7 + 4 | 0;
    i10 = i7 + 8 | 0;
    i11 = HEAP32[(d6 < +HEAPF32[i8 >> 2] ? i9 : i10) >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    } else {
     i7 = i11;
    }
   }
   i11 = i2 + 12 | 0;
   HEAP32[i11 >> 2] = i7;
   if ((i7 | 0) == 0) {
    i5 = 6;
    break;
   }
   if (d6 < +HEAPF32[i8 >> 2]) {
    HEAP32[i9 >> 2] = i2;
    i12 = i11;
    break;
   } else {
    HEAP32[i10 >> 2] = i2;
    i12 = i11;
    break;
   }
  }
 } while (0);
 if ((i5 | 0) == 6) {
  HEAP32[i3 >> 2] = i2;
  i12 = i2 + 12 | 0;
 }
 HEAP32[i2 + 16 >> 2] = 1;
 i5 = i1;
 FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 7](i1, i2) | 0;
 i10 = HEAP32[i12 >> 2] | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 L14 : do {
  if ((i12 | 0) == (i2 | 0)) {
   i13 = i10;
   i14 = i2;
  } else {
   i9 = i2;
   i8 = i10;
   i4 = i12;
   i11 = i10;
   while (1) {
    i15 = i9 + 12 | 0;
    i16 = i11 + 16 | 0;
    if ((HEAP32[i16 >> 2] | 0) != 1) {
     i13 = i8;
     i14 = i4;
     break L14;
    }
    i17 = i11 + 12 | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    i19 = HEAP32[i18 + 4 >> 2] | 0;
    L18 : do {
     if ((i11 | 0) == (i19 | 0)) {
      i20 = HEAP32[i18 + 8 >> 2] | 0;
      do {
       if ((i20 | 0) != 0) {
        i21 = i20 + 16 | 0;
        if ((HEAP32[i21 >> 2] | 0) != 1) {
         break;
        }
        HEAP32[i16 >> 2] = 2;
        HEAP32[i21 >> 2] = 2;
        HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 12 >> 2] | 0) + 16 >> 2] = 1;
        FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 7](i1, HEAP32[i15 >> 2] | 0) | 0;
        i21 = HEAP32[(HEAP32[i15 >> 2] | 0) + 12 >> 2] | 0;
        FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 7](i1, i21) | 0;
        i22 = i21;
        i23 = i21 + 12 | 0;
        break L18;
       }
      } while (0);
      i20 = i11 + 8 | 0;
      if ((i9 | 0) == (HEAP32[i20 >> 2] | 0)) {
       i21 = i9 + 4 | 0;
       HEAP32[i20 >> 2] = HEAP32[i21 >> 2];
       i20 = HEAP32[i21 >> 2] | 0;
       if ((i20 | 0) == 0) {
        i24 = i18;
       } else {
        HEAP32[i20 + 12 >> 2] = i11;
        i24 = HEAP32[i17 >> 2] | 0;
       }
       HEAP32[i15 >> 2] = i24;
       i20 = HEAP32[i17 >> 2] | 0;
       do {
        if ((i20 | 0) == 0) {
         HEAP32[i3 >> 2] = i9;
        } else {
         i25 = i20 + 4 | 0;
         if ((HEAP32[i25 >> 2] | 0) == (i11 | 0)) {
          HEAP32[i25 >> 2] = i9;
          break;
         } else {
          HEAP32[i20 + 8 >> 2] = i9;
          break;
         }
        }
       } while (0);
       HEAP32[i21 >> 2] = i11;
       HEAP32[i17 >> 2] = i9;
       FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 7](i1, i11) | 0;
       FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 7](i1, i9) | 0;
       i26 = i11;
       i27 = HEAP32[i17 >> 2] | 0;
      } else {
       i26 = i9;
       i27 = i11;
      }
      i20 = i26 + 12 | 0;
      HEAP32[i27 + 16 >> 2] = 2;
      HEAP32[(HEAP32[(HEAP32[i20 >> 2] | 0) + 12 >> 2] | 0) + 16 >> 2] = 1;
      i25 = HEAP32[(HEAP32[i20 >> 2] | 0) + 12 >> 2] | 0;
      i20 = i25 + 4 | 0;
      i28 = HEAP32[i20 >> 2] | 0;
      i29 = i28 + 8 | 0;
      HEAP32[i20 >> 2] = HEAP32[i29 >> 2];
      i20 = HEAP32[i29 >> 2] | 0;
      if ((i20 | 0) != 0) {
       HEAP32[i20 + 12 >> 2] = i25;
      }
      i20 = i25 + 12 | 0;
      i30 = i28 + 12 | 0;
      HEAP32[i30 >> 2] = HEAP32[i20 >> 2];
      i31 = HEAP32[i20 >> 2] | 0;
      do {
       if ((i31 | 0) == 0) {
        HEAP32[i3 >> 2] = i28;
       } else {
        i32 = i31 + 4 | 0;
        if ((HEAP32[i32 >> 2] | 0) == (i25 | 0)) {
         HEAP32[i32 >> 2] = i28;
         break;
        } else {
         HEAP32[i31 + 8 >> 2] = i28;
         break;
        }
       }
      } while (0);
      HEAP32[i29 >> 2] = i25;
      HEAP32[i20 >> 2] = i28;
      FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 7](i1, i25) | 0;
      FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 7](i1, i28) | 0;
      i22 = i26;
      i23 = i30;
     } else {
      do {
       if ((i19 | 0) != 0) {
        i31 = i19 + 16 | 0;
        if ((HEAP32[i31 >> 2] | 0) != 1) {
         break;
        }
        HEAP32[i16 >> 2] = 2;
        HEAP32[i31 >> 2] = 2;
        HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 12 >> 2] | 0) + 16 >> 2] = 1;
        FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 7](i1, HEAP32[i15 >> 2] | 0) | 0;
        i31 = HEAP32[(HEAP32[i15 >> 2] | 0) + 12 >> 2] | 0;
        FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 7](i1, i31) | 0;
        i22 = i31;
        i23 = i31 + 12 | 0;
        break L18;
       }
      } while (0);
      i30 = i11 + 4 | 0;
      if ((i9 | 0) == (HEAP32[i30 >> 2] | 0)) {
       i28 = i9 + 8 | 0;
       HEAP32[i30 >> 2] = HEAP32[i28 >> 2];
       i30 = HEAP32[i28 >> 2] | 0;
       if ((i30 | 0) == 0) {
        i33 = i18;
       } else {
        HEAP32[i30 + 12 >> 2] = i11;
        i33 = HEAP32[i17 >> 2] | 0;
       }
       HEAP32[i15 >> 2] = i33;
       i30 = HEAP32[i17 >> 2] | 0;
       do {
        if ((i30 | 0) == 0) {
         HEAP32[i3 >> 2] = i9;
        } else {
         i25 = i30 + 4 | 0;
         if ((HEAP32[i25 >> 2] | 0) == (i11 | 0)) {
          HEAP32[i25 >> 2] = i9;
          break;
         } else {
          HEAP32[i30 + 8 >> 2] = i9;
          break;
         }
        }
       } while (0);
       HEAP32[i28 >> 2] = i11;
       HEAP32[i17 >> 2] = i9;
       FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 7](i1, i11) | 0;
       FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 7](i1, i9) | 0;
       i34 = i11;
       i35 = HEAP32[i17 >> 2] | 0;
      } else {
       i34 = i9;
       i35 = i11;
      }
      i30 = i34 + 12 | 0;
      HEAP32[i35 + 16 >> 2] = 2;
      HEAP32[(HEAP32[(HEAP32[i30 >> 2] | 0) + 12 >> 2] | 0) + 16 >> 2] = 1;
      i25 = HEAP32[(HEAP32[i30 >> 2] | 0) + 12 >> 2] | 0;
      i30 = i25 + 8 | 0;
      i20 = HEAP32[i30 >> 2] | 0;
      i29 = i20 + 4 | 0;
      HEAP32[i30 >> 2] = HEAP32[i29 >> 2];
      i30 = HEAP32[i29 >> 2] | 0;
      if ((i30 | 0) != 0) {
       HEAP32[i30 + 12 >> 2] = i25;
      }
      i30 = i25 + 12 | 0;
      i31 = i20 + 12 | 0;
      HEAP32[i31 >> 2] = HEAP32[i30 >> 2];
      i21 = HEAP32[i30 >> 2] | 0;
      do {
       if ((i21 | 0) == 0) {
        HEAP32[i3 >> 2] = i20;
       } else {
        i32 = i21 + 4 | 0;
        if ((HEAP32[i32 >> 2] | 0) == (i25 | 0)) {
         HEAP32[i32 >> 2] = i20;
         break;
        } else {
         HEAP32[i21 + 8 >> 2] = i20;
         break;
        }
       }
      } while (0);
      HEAP32[i29 >> 2] = i25;
      HEAP32[i30 >> 2] = i20;
      FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 7](i1, i25) | 0;
      FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 7](i1, i20) | 0;
      i22 = i34;
      i23 = i31;
     }
    } while (0);
    i17 = HEAP32[i23 >> 2] | 0;
    i15 = HEAP32[i3 >> 2] | 0;
    if ((i22 | 0) == (i15 | 0)) {
     i13 = i17;
     i14 = i22;
     break L14;
    }
    i9 = i22;
    i8 = i17;
    i4 = i15;
    i11 = HEAP32[i22 + 12 >> 2] | 0;
   }
  }
 } while (0);
 if ((i13 | 0) == 0) {
  i36 = i14;
  i37 = i36 + 16 | 0;
  HEAP32[i37 >> 2] = 2;
  return;
 } else {
  i38 = i13;
 }
 while (1) {
  i13 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 7](i1, i38) | 0;
  i38 = HEAP32[i38 + 12 >> 2] | 0;
  if ((i38 | 0) == 0 | i13 ^ 1) {
   break;
  }
 }
 i36 = HEAP32[i3 >> 2] | 0;
 i37 = i36 + 16 | 0;
 HEAP32[i37 >> 2] = 2;
 return;
}
function __ZNK7WebCore10VertexPair12overlapsRectERKNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, d4 = +0, d5 = +0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, i18 = 0, i19 = 0, i20 = 0;
 i3 = i1;
 d4 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 15](i1) | 0) >> 2];
 d5 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 15](i1) | 0) >> 2];
 i6 = i2 | 0;
 i7 = i2 + 8 | 0;
 if ((d5 < d4 ? d5 : d4) >= +HEAPF32[i6 >> 2] + +HEAPF32[i7 >> 2]) {
  i8 = 0;
  return i8 | 0;
 }
 d4 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 15](i1) | 0) >> 2];
 d5 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 15](i1) | 0) >> 2];
 if ((d4 < d5 ? d5 : d4) <= +HEAPF32[i6 >> 2]) {
  i8 = 0;
  return i8 | 0;
 }
 d4 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 15](i1) | 0) + 4 >> 2];
 d5 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 15](i1) | 0) + 4 >> 2];
 i9 = i2 + 4 | 0;
 i10 = i2 + 12 | 0;
 if ((d5 < d4 ? d5 : d4) >= +HEAPF32[i9 >> 2] + +HEAPF32[i10 >> 2]) {
  i8 = 0;
  return i8 | 0;
 }
 d4 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 15](i1) | 0) + 4 >> 2];
 d5 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 15](i1) | 0) + 4 >> 2];
 if ((d4 < d5 ? d5 : d4) <= +HEAPF32[i9 >> 2]) {
  i8 = 0;
  return i8 | 0;
 }
 i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 15](i1) | 0;
 i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 15](i1) | 0;
 i13 = i2;
 d4 = +HEAPF32[i13 >> 2];
 d5 = +HEAPF32[i11 >> 2];
 d14 = +HEAPF32[i11 + 4 >> 2];
 d15 = (d4 - d5) * (+HEAPF32[i12 + 4 >> 2] - d14) - (+HEAPF32[i12 >> 2] - d5) * (+HEAPF32[i13 + 4 >> 2] - d14);
 i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 15](i1) | 0;
 i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 15](i1) | 0;
 d14 = +HEAPF32[i13 >> 2];
 d5 = +HEAPF32[i13 + 4 >> 2];
 d4 = (+HEAPF32[i6 >> 2] + +HEAPF32[i7 >> 2] - d14) * (+HEAPF32[i12 + 4 >> 2] - d5) - (+HEAPF32[i9 >> 2] - d5) * (+HEAPF32[i12 >> 2] - d14);
 i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 15](i1) | 0;
 i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 15](i1) | 0;
 d14 = +HEAPF32[i12 >> 2];
 d5 = +HEAPF32[i12 + 4 >> 2];
 d16 = (+HEAPF32[i6 >> 2] - d14) * (+HEAPF32[i13 + 4 >> 2] - d5) - (+HEAPF32[i9 >> 2] + +HEAPF32[i10 >> 2] - d5) * (+HEAPF32[i13 >> 2] - d14);
 i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 15](i1) | 0;
 i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 15](i1) | 0;
 d14 = +HEAPF32[i13 >> 2];
 d5 = +HEAPF32[i13 + 4 >> 2];
 d17 = (+HEAPF32[i6 >> 2] + +HEAPF32[i7 >> 2] - d14) * (+HEAPF32[i12 + 4 >> 2] - d5) - (+HEAPF32[i9 >> 2] + +HEAPF32[i10 >> 2] - d5) * (+HEAPF32[i12 >> 2] - d14);
 if (d15 != +0) {
  i18 = d15 > +0 ? 1 : -1;
 } else {
  i18 = 0;
 }
 do {
  if (d4 != +0) {
   i12 = d4 > +0 ? 1 : -1;
   if ((i18 | 0) == 0) {
    i19 = i12;
    break;
   }
   if ((i18 | 0) == (i12 | 0)) {
    i19 = i18;
    break;
   } else {
    i8 = 1;
   }
   return i8 | 0;
  } else {
   i19 = i18;
  }
 } while (0);
 do {
  if (d16 != +0) {
   i18 = d16 > +0 ? 1 : -1;
   if ((i19 | 0) == 0) {
    i20 = i18;
    break;
   }
   if ((i19 | 0) == (i18 | 0)) {
    i20 = i19;
    break;
   } else {
    i8 = 1;
   }
   return i8 | 0;
  } else {
   i20 = i19;
  }
 } while (0);
 do {
  if (!(d17 == +0 | (i20 | 0) == 0)) {
   if ((i20 | 0) == ((d17 > +0 ? 1 : -1) | 0)) {
    break;
   } else {
    i8 = 1;
   }
   return i8 | 0;
  }
 } while (0);
 i8 = 0;
 return i8 | 0;
}
function __ZN7WebCore16PODFreeListArenaINS_15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE4NodeEE8allocateEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 12 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i6 | 0) == 0) {
     i7 = i4 + 8 | 0;
     i8 = HEAP32[i7 >> 2] | 0;
     i9 = _llvm_uadd_with_overflow_i32(i8 | 0, i2 | 0) | 0;
     i10 = i9;
     if (tempRet0) {
      break;
     }
     if (i10 >>> 0 > (HEAP32[i4 + 4 >> 2] | 0) >>> 0) {
      break;
     }
     i9 = (HEAP32[i4 >> 2] | 0) + i8 | 0;
     HEAP32[i7 >> 2] = i10;
     i11 = i9;
     i12 = 7;
    } else {
     HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
     i11 = i6;
     i12 = 7;
    }
   } while (0);
   do {
    if ((i12 | 0) == 7) {
     if ((i11 | 0) == 0) {
      break;
     } else {
      i13 = i11;
     }
     return i13 | 0;
    }
   } while (0);
   i6 = HEAP32[i1 + 16 >> 2] | 0;
   i5 = i6 + (HEAP32[i1 + 24 >> 2] << 2) | 0;
   i9 = i6;
   while (1) {
    if ((i9 | 0) == (i5 | 0)) {
     break L1;
    }
    i14 = (HEAP32[i9 >> 2] | 0) + 12 | 0;
    i15 = HEAP32[i14 >> 2] | 0;
    if ((i15 | 0) == 0) {
     i9 = i9 + 4 | 0;
    } else {
     break;
    }
   }
   HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
   i13 = i15;
   return i13 | 0;
  }
 } while (0);
 i15 = i1 + 12 | 0;
 i14 = HEAP32[i15 >> 2] | 0;
 if (i14 >>> 0 < i2 >>> 0) {
  HEAP32[i15 >> 2] = i2;
  i16 = i2;
 } else {
  i16 = i14;
 }
 i14 = i1 + 16 | 0;
 i15 = __Znwj(16) | 0;
 i11 = i15;
 HEAP32[i15 + 4 >> 2] = i16;
 HEAP32[i15 + 8 >> 2] = 0;
 HEAP32[i15 + 12 >> 2] = 0;
 HEAP32[i15 >> 2] = __ZN3WTF10fastMallocEj(i16) | 0;
 i16 = i1 + 24 | 0;
 i15 = HEAP32[i16 >> 2] | 0;
 if ((i15 | 0) == (HEAP32[i1 + 20 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6OwnPtrIN7WebCore16PODFreeListArenaINS2_15PODRedBlackTreeINS2_11PODIntervalIfPNS2_16FloatPolygonEdgeEEEE4NodeEE13FreeListChunkEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i14, i15 + 1 | 0);
  HEAP32[(HEAP32[i14 >> 2] | 0) + (HEAP32[i16 >> 2] << 2) >> 2] = i11;
 } else {
  HEAP32[(HEAP32[i14 >> 2] | 0) + (i15 << 2) >> 2] = i11;
 }
 i11 = (HEAP32[i16 >> 2] | 0) + 1 | 0;
 HEAP32[i16 >> 2] = i11;
 i16 = _llvm_uadd_with_overflow_i32(i11 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i11 = HEAP32[(HEAP32[i14 >> 2] | 0) + (i16 << 2) >> 2] | 0;
 HEAP32[i3 >> 2] = i11;
 i3 = i11 + 12 | 0;
 i16 = HEAP32[i3 >> 2] | 0;
 if ((i16 | 0) != 0) {
  HEAP32[i3 >> 2] = HEAP32[i16 >> 2];
  i13 = i16;
  return i13 | 0;
 }
 i16 = i11 + 8 | 0;
 i3 = HEAP32[i16 >> 2] | 0;
 i14 = _llvm_uadd_with_overflow_i32(i3 | 0, i2 | 0) | 0;
 i2 = i14;
 if (tempRet0) {
  i13 = 0;
  return i13 | 0;
 }
 if (i2 >>> 0 > (HEAP32[i11 + 4 >> 2] | 0) >>> 0) {
  i13 = 0;
  return i13 | 0;
 }
 i14 = (HEAP32[i11 >> 2] | 0) + i3 | 0;
 HEAP32[i16 >> 2] = i2;
 i13 = i14;
 return i13 | 0;
}
function __ZNK7WebCore12FloatPolygon15containsEvenOddERKNS_10FloatPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, i18 = 0, d19 = +0, d20 = +0, d21 = +0, i22 = 0;
 i3 = i1 + 36 | 0;
 L1 : do {
  if ((HEAP32[i3 >> 2] | 0) == 0) {
   i4 = 0;
  } else {
   i5 = i1 + 28 | 0;
   i6 = i2 | 0;
   i7 = i2 + 4 | 0;
   i8 = 0;
   i9 = 0;
   L3 : while (1) {
    i10 = (HEAP32[i5 >> 2] | 0) + (i8 * 20 & -1) | 0;
    i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] & 15](i10) | 0;
    if ((HEAP32[i3 >> 2] | 0) >>> 0 <= i8 >>> 0) {
     i12 = 4;
     break;
    }
    i10 = (HEAP32[i5 >> 2] | 0) + (i8 * 20 & -1) | 0;
    i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 12 >> 2] & 15](i10) | 0;
    d14 = +HEAPF32[i6 >> 2];
    d15 = +HEAPF32[i11 >> 2];
    d16 = +HEAPF32[i13 >> 2];
    do {
     if (d14 >= (d16 < d15 ? d16 : d15)) {
      if (d14 > (d15 < d16 ? d16 : d15)) {
       break;
      }
      d17 = +HEAPF32[i11 + 4 >> 2];
      if ((d16 - d15) * (+HEAPF32[i7 >> 2] - d17) - (d14 - d15) * (+HEAPF32[i13 + 4 >> 2] - d17) == +0) {
       i18 = 1;
       i12 = 17;
       break L3;
      }
     }
    } while (0);
    d17 = +HEAPF32[i11 + 4 >> 2];
    d19 = +HEAPF32[i7 >> 2];
    if (d17 > d19) {
     i12 = 10;
    } else {
     d20 = +HEAPF32[i13 + 4 >> 2];
     if (d20 > d19) {
      d21 = d20;
      i12 = 12;
     } else {
      i12 = 10;
     }
    }
    do {
     if ((i12 | 0) == 10) {
      i12 = 0;
      if (d17 <= d19) {
       i22 = i9;
       break;
      }
      d20 = +HEAPF32[i13 + 4 >> 2];
      if (d20 > d19) {
       i22 = i9;
      } else {
       d21 = d20;
       i12 = 12;
      }
     }
    } while (0);
    do {
     if ((i12 | 0) == 12) {
      i12 = 0;
      if (d14 >= d15 + (d19 - d17) / (d21 - d17) * (d16 - d15)) {
       i22 = i9;
       break;
      }
      i22 = i9 + 1 | 0;
     }
    } while (0);
    i13 = i8 + 1 | 0;
    if (i13 >>> 0 < (HEAP32[i3 >> 2] | 0) >>> 0) {
     i8 = i13;
     i9 = i22;
    } else {
     i4 = i22;
     break L1;
    }
   }
   if ((i12 | 0) == 4) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i12 | 0) == 17) {
    return i18 | 0;
   }
  }
 } while (0);
 i18 = (i4 & 1 | 0) != 0;
 return i18 | 0;
}
function __ZNK7WebCore12FloatPolygon15containsNonZeroERKNS_10FloatPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, i18 = 0, d19 = +0, d20 = +0, i21 = 0;
 i3 = i1 + 36 | 0;
 L1 : do {
  if ((HEAP32[i3 >> 2] | 0) == 0) {
   i4 = 0;
  } else {
   i5 = i1 + 28 | 0;
   i6 = i2 | 0;
   i7 = i2 + 4 | 0;
   i8 = 0;
   i9 = 0;
   L3 : while (1) {
    i10 = (HEAP32[i5 >> 2] | 0) + (i8 * 20 & -1) | 0;
    i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] & 15](i10) | 0;
    if ((HEAP32[i3 >> 2] | 0) >>> 0 <= i8 >>> 0) {
     i12 = 4;
     break;
    }
    i10 = (HEAP32[i5 >> 2] | 0) + (i8 * 20 & -1) | 0;
    i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 12 >> 2] & 15](i10) | 0;
    d14 = +HEAPF32[i6 >> 2];
    d15 = +HEAPF32[i11 >> 2];
    d16 = +HEAPF32[i13 >> 2];
    do {
     if (d14 >= (d16 < d15 ? d16 : d15)) {
      if (d14 > (d15 < d16 ? d16 : d15)) {
       break;
      }
      d17 = +HEAPF32[i11 + 4 >> 2];
      if ((d16 - d15) * (+HEAPF32[i7 >> 2] - d17) - (d14 - d15) * (+HEAPF32[i13 + 4 >> 2] - d17) == +0) {
       i18 = 1;
       i12 = 19;
       break L3;
      }
     }
    } while (0);
    d17 = +HEAPF32[i13 + 4 >> 2];
    d19 = +HEAPF32[i7 >> 2];
    do {
     if (d17 < d19) {
      d20 = +HEAPF32[i11 + 4 >> 2];
      if (d20 <= d19) {
       i21 = i9;
       break;
      }
      if ((d17 - d20) * (d14 - d15) - (d16 - d15) * (d19 - d20) <= +0) {
       i21 = i9;
       break;
      }
      i21 = i9 + 1 | 0;
     } else {
      if (d17 <= d19) {
       i21 = i9;
       break;
      }
      d20 = +HEAPF32[i11 + 4 >> 2];
      if (d20 > d19) {
       i21 = i9;
       break;
      }
      if ((d17 - d20) * (d14 - d15) - (d16 - d15) * (d19 - d20) >= +0) {
       i21 = i9;
       break;
      }
      i21 = i9 - 1 | 0;
     }
    } while (0);
    i11 = i8 + 1 | 0;
    if (i11 >>> 0 < (HEAP32[i3 >> 2] | 0) >>> 0) {
     i8 = i11;
     i9 = i21;
    } else {
     i4 = i21;
     break L1;
    }
   }
   if ((i12 | 0) == 19) {
    return i18 | 0;
   } else if ((i12 | 0) == 4) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
  }
 } while (0);
 i18 = (i4 | 0) != 0;
 return i18 | 0;
}
function __ZNK7WebCore12FloatPolygon16overlappingEdgesEffRN3WTF6VectorIPKNS_16FloatPolygonEdgeELj0ENS1_15CrashOnOverflowEEE(i1, d2, d3, i4) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i7 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i6 >> 2] = i7;
 HEAPF32[i6 + 4 >> 2] = d2;
 HEAPF32[i6 + 8 >> 2] = d3;
 __ZNK7WebCore15PODIntervalTreeIfPNS_16FloatPolygonEdgeEE21searchForOverlapsFromINS_24PODIntervalSearchAdapterIfS2_EEEEvPNS_15PODRedBlackTreeINS_11PODIntervalIfS2_EEE4NodeERT_(i1 + 40 | 0, HEAP32[i1 + 48 >> 2] | 0, i6);
 i6 = HEAP32[i10 >> 2] | 0;
 i1 = i4 + 8 | 0;
 do {
  if ((HEAP32[i1 >> 2] | 0) >>> 0 < i6 >>> 0) {
   if ((HEAP32[i4 + 4 >> 2] | 0) >>> 0 >= i6 >>> 0) {
    break;
   }
   __ZN3WTF6VectorIPKN7WebCore16FloatPolygonEdgeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i6);
  }
 } while (0);
 HEAP32[i1 >> 2] = i6;
 L5 : do {
  if ((i6 | 0) != 0) {
   i7 = i4 | 0;
   i11 = 0;
   while (1) {
    if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i11 >>> 0) {
     i12 = 7;
     break;
    }
    if ((HEAP32[i1 >> 2] | 0) >>> 0 <= i11 >>> 0) {
     i12 = 9;
     break;
    }
    HEAP32[(HEAP32[i7 >> 2] | 0) + (i11 << 2) >> 2] = HEAP32[(HEAP32[i8 >> 2] | 0) + (i11 << 4) + 8 >> 2];
    i11 = i11 + 1 | 0;
    if (i11 >>> 0 >= i6 >>> 0) {
     break L5;
    }
   }
   if ((i12 | 0) == 7) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i12 | 0) == 9) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
  }
 } while (0);
 i12 = (i6 | 0) != 0;
 if ((HEAP32[i10 >> 2] | 0) != 0) {
  HEAP32[i10 >> 2] = 0;
 }
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i5;
  return i12 | 0;
 }
 HEAP32[i8 >> 2] = 0;
 HEAP32[i9 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i10);
 STACKTOP = i5;
 return i12 | 0;
}
function __ZNK7WebCore15PODIntervalTreeIfPNS_16FloatPolygonEdgeEE23checkInvariantsFromNodeEPNS_15PODRedBlackTreeINS_11PODIntervalIfS2_EEE4NodeEPf(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, d14 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 + 32 | 0;
 d8 = +HEAPF32[i7 >> 2];
 HEAPF32[i5 >> 2] = d8;
 HEAPF32[i6 >> 2] = d8;
 i9 = HEAP32[i2 + 4 >> 2] | 0;
 i10 = HEAP32[i2 + 8 >> 2] | 0;
 i11 = (i9 | 0) != 0;
 do {
  if (i11) {
   if (__ZNK7WebCore15PODIntervalTreeIfPNS_16FloatPolygonEdgeEE23checkInvariantsFromNodeEPNS_15PODRedBlackTreeINS_11PODIntervalIfS2_EEE4NodeEPf(i1, i9, i5) | 0) {
    break;
   } else {
    i12 = 0;
   }
   STACKTOP = i4;
   return i12 | 0;
  }
 } while (0);
 do {
  if ((i10 | 0) == 0) {
   if (i11) {
    d13 = +HEAPF32[i5 >> 2];
    break;
   }
   i9 = i2 + 24 | 0;
   if ((i3 | 0) != 0) {
    HEAPF32[i3 >> 2] = +HEAPF32[i9 >> 2];
   }
   i12 = +HEAPF32[i9 >> 2] == +HEAPF32[i7 >> 2];
   STACKTOP = i4;
   return i12 | 0;
  } else {
   if (!(__ZNK7WebCore15PODIntervalTreeIfPNS_16FloatPolygonEdgeEE23checkInvariantsFromNodeEPNS_15PODRedBlackTreeINS_11PODIntervalIfS2_EEE4NodeEPf(i1, i10, i6) | 0)) {
    i12 = 0;
    STACKTOP = i4;
    return i12 | 0;
   }
   if (i11) {
    d8 = +HEAPF32[i5 >> 2];
    d14 = +HEAPF32[i6 >> 2];
    d13 = d8 < d14 ? d14 : d8;
    break;
   } else {
    d13 = +HEAPF32[i6 >> 2];
    break;
   }
  }
 } while (0);
 d8 = +HEAPF32[i2 + 24 >> 2];
 d14 = d13 < d8 ? d8 : d13;
 if (d14 != +HEAPF32[i7 >> 2]) {
  i12 = 0;
  STACKTOP = i4;
  return i12 | 0;
 }
 if ((i3 | 0) == 0) {
  i12 = 1;
  STACKTOP = i4;
  return i12 | 0;
 }
 HEAPF32[i3 >> 2] = d14;
 i12 = 1;
 STACKTOP = i4;
 return i12 | 0;
}
function __ZNK7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE23checkInvariantsFromNodeEPNS5_4NodeEPi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i3 >> 2] = 1;
  i7 = 1;
  STACKTOP = i4;
  return i7 | 0;
 }
 i8 = i2 + 16 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 2) {
   i10 = HEAP32[i2 + 4 >> 2] | 0;
   i11 = i2 + 8 | 0;
  } else if ((i9 | 0) == 1) {
   i12 = HEAP32[i2 + 4 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     if ((HEAP32[i12 + 16 >> 2] | 0) == 2) {
      break;
     } else {
      i7 = 0;
     }
     STACKTOP = i4;
     return i7 | 0;
    }
   } while (0);
   i13 = i2 + 8 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i10 = i12;
    i11 = i13;
    break;
   }
   if ((HEAP32[i14 + 16 >> 2] | 0) == 2) {
    i10 = i12;
    i11 = i13;
    break;
   } else {
    i7 = 0;
   }
   STACKTOP = i4;
   return i7 | 0;
  } else {
   i7 = 0;
   STACKTOP = i4;
   return i7 | 0;
  }
 } while (0);
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 i2 = __ZNK7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE23checkInvariantsFromNodeEPNS5_4NodeEPi(i1, i10, i5) | 0;
 if (!(i2 & (__ZNK7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE23checkInvariantsFromNodeEPNS5_4NodeEPi(i1, HEAP32[i11 >> 2] | 0, i6) | 0))) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i11 = HEAP32[i5 >> 2] | 0;
 HEAP32[i3 >> 2] = ((HEAP32[i8 >> 2] | 0) == 2) + i11;
 i7 = (i11 | 0) == (HEAP32[i6 >> 2] | 0);
 STACKTOP = i4;
 return i7 | 0;
}
function __ZNK7WebCore24PODIntervalSearchAdapterIfPNS_16FloatPolygonEdgeEE15collectIfNeededERKNS_11PODIntervalIfS2_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if (+HEAPF32[i2 + 4 >> 2] < +HEAPF32[i1 + 4 >> 2]) {
  return;
 }
 if (+HEAPF32[i1 + 8 >> 2] < +HEAPF32[i2 >> 2]) {
  return;
 }
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = i3 + 8 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) != (HEAP32[i3 + 4 >> 2] | 0)) {
  i5 = (HEAP32[i3 >> 2] | 0) + (i4 << 4) | 0;
  i6 = i2;
  HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i5 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
  HEAP32[i5 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
  HEAP32[i5 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  return;
 }
 i6 = i4 + 1 | 0;
 i5 = i3 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 7;
  } else {
   if ((i7 + (i4 << 4) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 7;
    break;
   }
   __ZN3WTF6VectorIN7WebCore11PODIntervalIfPNS1_16FloatPolygonEdgeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i6);
   i9 = HEAP32[i5 >> 2] | 0;
   i10 = i9 + (i2 - i7 >> 4 << 4) | 0;
   i11 = i9;
  }
 } while (0);
 if ((i8 | 0) == 7) {
  __ZN3WTF6VectorIN7WebCore11PODIntervalIfPNS1_16FloatPolygonEdgeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i6);
  i10 = i2;
  i11 = HEAP32[i5 >> 2] | 0;
 }
 i5 = i11 + (HEAP32[i1 >> 2] << 4) | 0;
 i11 = i10;
 HEAP32[i5 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZNK7WebCore10VertexPair12intersectionERKS0_RNS_10FloatPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, i9 = 0, d10 = +0, d11 = +0, d12 = +0, i13 = 0, d14 = +0, d15 = +0, d16 = +0;
 i4 = i1;
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 15](i1) | 0;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 15](i1) | 0;
 d7 = +HEAPF32[i5 >> 2] - +HEAPF32[i6 >> 2];
 d8 = +HEAPF32[i5 + 4 >> 2] - +HEAPF32[i6 + 4 >> 2];
 i6 = i2;
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 15](i2) | 0;
 i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 15](i2) | 0;
 d10 = +HEAPF32[i5 >> 2] - +HEAPF32[i9 >> 2];
 d11 = +HEAPF32[i5 + 4 >> 2] - +HEAPF32[i9 + 4 >> 2];
 d12 = d7 * d11 - d8 * d10;
 if (d12 == +0) {
  i13 = 0;
  return i13 | 0;
 }
 i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 15](i1) | 0;
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 15](i2) | 0;
 d14 = +HEAPF32[i9 >> 2] - +HEAPF32[i5 >> 2];
 d15 = +HEAPF32[i9 + 4 >> 2] - +HEAPF32[i5 + 4 >> 2];
 d16 = (d10 * d15 - d11 * d14) / d12;
 d11 = (d7 * d15 - d8 * d14) / d12;
 if (d16 < +0 | d11 < +0 | d16 > +1 | d11 > +1) {
  i13 = 0;
  return i13 | 0;
 }
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 15](i1) | 0;
 i1 = i3;
 d11 = +(d7 * d16 + +HEAPF32[i5 >> 2]);
 d7 = +(d8 * d16 + +HEAPF32[i5 + 4 >> 2]);
 HEAPF32[i1 >> 2] = d11;
 HEAPF32[i1 + 4 >> 2] = d7;
 i13 = 1;
 return i13 | 0;
}
function __ZN3WTF6VectorIN7WebCore11PODIntervalIfPNS1_16FloatPolygonEdgeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
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
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 + (i6 << 4) | 0;
 if (i5 >>> 0 > 268435455 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 4) | 0;
 HEAP32[i3 >> 2] = i7 >>> 4;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   i5 = i7;
   i8 = i6;
   HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i5 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
   HEAP32[i5 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   HEAP32[i5 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
   i8 = i6 + 16 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
    i7 = i7 + 16 | 0;
   }
  }
 }
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF6VectorIN7WebCore16FloatPolygonEdgeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 i1 = i5 + (i6 * 20 & -1) | 0;
 if (i2 >>> 0 > 214748364 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 20 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 20 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   HEAP32[i7 >> 2] = H_BASE + 40;
   HEAP32[i7 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   HEAP32[i7 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
   HEAP32[i7 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
   HEAP32[i7 + 16 >> 2] = HEAP32[i6 + 16 >> 2];
   FUNCTION_TABLE_vi[HEAP32[HEAP32[i6 >> 2] >> 2] & 31](i6);
   i2 = i6 + 20 | 0;
   if ((i2 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i2;
    i7 = i7 + 20 | 0;
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
function __ZNK7WebCore15PODIntervalTreeIfPNS_16FloatPolygonEdgeEE21searchForOverlapsFromINS_24PODIntervalSearchAdapterIfS2_EEEEvPNS_15PODRedBlackTreeINS_11PODIntervalIfS2_EEE4NodeERT_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = i3 + 8 | 0;
 i5 = i3 + 4 | 0;
 i6 = i2;
 while (1) {
  i2 = HEAP32[i6 + 4 >> 2] | 0;
  do {
   if ((i2 | 0) != 0) {
    if (+HEAPF32[i2 + 32 >> 2] < +HEAPF32[i5 >> 2]) {
     break;
    }
    __ZNK7WebCore15PODIntervalTreeIfPNS_16FloatPolygonEdgeEE21searchForOverlapsFromINS_24PODIntervalSearchAdapterIfS2_EEEEvPNS_15PODRedBlackTreeINS_11PODIntervalIfS2_EEE4NodeERT_(i1, i2, i3);
   }
  } while (0);
  i2 = i6 + 20 | 0;
  __ZNK7WebCore24PODIntervalSearchAdapterIfPNS_16FloatPolygonEdgeEE15collectIfNeededERKNS_11PODIntervalIfS2_EE(i3, i2);
  if (+HEAPF32[i4 >> 2] < +HEAPF32[i2 >> 2]) {
   i7 = 10;
   break;
  }
  i2 = HEAP32[i6 + 8 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i7 = 11;
   break;
  } else {
   i6 = i2;
  }
 }
 if ((i7 | 0) == 10) {
  return;
 } else if ((i7 | 0) == 11) {
  return;
 }
}
function __ZN3WTF6VectorINS_6OwnPtrIN7WebCore16PODFreeListArenaINS2_15PODRedBlackTreeINS2_11PODIntervalIfPNS2_16FloatPolygonEdgeEEEE4NodeEE13FreeListChunkEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorIPKN7WebCore16FloatPolygonEdgeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore16PODFreeListArenaINS_15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE4NodeEED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 16 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(HEAP32[i5 >> 2] | 0);
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
 if ((i2 | 0) == 0) {
  i7 = i1;
  __ZN3WTF8fastFreeEPv(i7);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i7 = i1;
 __ZN3WTF8fastFreeEPv(i7);
 return;
}
function __ZN7WebCore15PODIntervalTreeIfPNS_16FloatPolygonEdgeEE10updateNodeEPNS_15PODRedBlackTreeINS_11PODIntervalIfS2_EEE4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, i8 = 0;
 i1 = i2 + 24 | 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = i1;
  } else {
   i5 = i3 + 32 | 0;
   if (+HEAPF32[i1 >> 2] >= +HEAPF32[i5 >> 2]) {
    i4 = i1;
    break;
   }
   i4 = i5;
  }
 } while (0);
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i6 = i4;
  } else {
   i3 = i1 + 32 | 0;
   if (+HEAPF32[i4 >> 2] >= +HEAPF32[i3 >> 2]) {
    i6 = i4;
    break;
   }
   i6 = i3;
  }
 } while (0);
 d7 = +HEAPF32[i6 >> 2];
 i6 = i2 + 32 | 0;
 if (d7 == +HEAPF32[i6 >> 2]) {
  i8 = 0;
  return i8 | 0;
 }
 HEAPF32[i6 >> 2] = d7;
 i8 = 1;
 return i8 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_iii + 2;
}
function __ZN7WebCore16PODFreeListArenaINS_15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE4NodeEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 16 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(HEAP32[i5 >> 2] | 0);
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
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore15PODIntervalTreeIfPNS_16FloatPolygonEdgeEE15checkInvariantsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i1 + 8 | 0;
 if (!(__ZNK7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE23checkInvariantsFromNodeEPNS5_4NodeEPi(i1 | 0, HEAP32[i3 >> 2] | 0, i2 | 0) | 0)) {
  i4 = 0;
  STACKTOP = i2;
  return i4 | 0;
 }
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i4 = 1;
  STACKTOP = i2;
  return i4 | 0;
 }
 i4 = __ZNK7WebCore15PODIntervalTreeIfPNS_16FloatPolygonEdgeEE23checkInvariantsFromNodeEPNS_15PODRedBlackTreeINS_11PODIntervalIfS2_EEE4NodeEPf(i1, i5, 0) | 0;
 STACKTOP = i2;
 return i4 | 0;
}
function __ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 72;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 __ZdlPv(i1);
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
function __ZN7WebCore15PODIntervalTreeIfPNS_16FloatPolygonEdgeEED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 72;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 __ZdlPv(i1);
 return;
}
function __ZNK7WebCore12FloatPolygon8containsERKNS_10FloatPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if (!(__ZNK7WebCore9FloatRect8containsERKNS_10FloatPointENS0_12ContainsModeE(i1 + 8 | 0, i2, 0) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
  i3 = __ZNK7WebCore12FloatPolygon15containsNonZeroERKNS_10FloatPointE(i1, i2) | 0;
  return i3 | 0;
 } else {
  i3 = __ZNK7WebCore12FloatPolygon15containsEvenOddERKNS_10FloatPointE(i1, i2) | 0;
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 72;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 return;
}
function __ZN7WebCore15PODIntervalTreeIfPNS_16FloatPolygonEdgeEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 72;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
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
function __ZNK7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE15checkInvariantsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = __ZNK7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE23checkInvariantsFromNodeEPNS5_4NodeEPi(i1, HEAP32[i1 + 8 >> 2] | 0, i2 | 0) | 0;
 STACKTOP = i2;
 return i3 | 0;
}
function __ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE4Node8copyFromEPS6_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 20 | 0;
 i1 = i2 + 20 | 0;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 return;
}
function __ZNK7WebCore16FloatPolygonEdge7vertex2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i3 = HEAP32[HEAP32[i1 + 16 >> 2] >> 2] | 0;
 if ((HEAP32[i3 + 8 >> 2] | 0) >>> 0 > i2 >>> 0) {
  return (HEAP32[i3 >> 2] | 0) + (i2 << 3) | 0;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
}
function __ZNK7WebCore16FloatPolygonEdge7vertex1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i3 = HEAP32[HEAP32[i1 + 16 >> 2] >> 2] | 0;
 if ((HEAP32[i3 + 8 >> 2] | 0) >>> 0 > i2 >>> 0) {
  return (HEAP32[i3 >> 2] | 0) + (i2 << 3) | 0;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE10updateNodeEPNS5_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE4NodeD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function __ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE4NodeD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZN7WebCore16FloatPolygonEdgeD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
}
function __ZN7WebCore16FloatPolygonEdgeD1Ev(i1) {
 i1 = i1 | 0;
 return;
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
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE4NodeD1Ev,b0,__ZN7WebCore15PODIntervalTreeIfPNS_16FloatPolygonEdgeEED0Ev,b0,__ZN7WebCore15PODIntervalTreeIfPNS_16FloatPolygonEdgeEED1Ev,b0,__ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEED1Ev,b0,__ZN7WebCore16FloatPolygonEdgeD1Ev,b0,__ZN7WebCore16PODFreeListArenaINS_15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE4NodeEED1Ev,b0,__ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE4NodeD0Ev,b0,__ZN7WebCore16FloatPolygonEdgeD0Ev,b0,__ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEED0Ev,b0,__ZN7WebCore16PODFreeListArenaINS_15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE4NodeEED0Ev,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE4Node8copyFromEPS6_,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZNK7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE15checkInvariantsEv,b2,__ZNK7WebCore15PODIntervalTreeIfPNS_16FloatPolygonEdgeEE15checkInvariantsEv,b2,__ZNK7WebCore16FloatPolygonEdge7vertex1Ev,b2,__ZNK7WebCore16FloatPolygonEdge7vertex2Ev,b2,b2,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore12FloatPolygonC2EN3WTF10PassOwnPtrINS1_6VectorINS_10FloatPointELj0ENS1_15CrashOnOverflowEEEEENS_8WindRuleE,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5,__ZN7WebCore15PODIntervalTreeIfPNS_16FloatPolygonEdgeEE10updateNodeEPNS_15PODRedBlackTreeINS_11PODIntervalIfS2_EEE4NodeE,b5,__ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE10updateNodeEPNS5_4NodeE,b5,b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore15PODIntervalTreeIfPNS_16FloatPolygonEdgeEE10updateNodeEPNS_15PODRedBlackTreeINS_11PODIntervalIfS2_EEE4NodeE","_strlen","__ZN7WebCore15PODIntervalTreeIfPNS_16FloatPolygonEdgeEED0Ev","__ZNK7WebCore10VertexPair12intersectionERKS0_RNS_10FloatPointE","__ZN7WebCore15PODIntervalTreeIfPNS_16FloatPolygonEdgeEED1Ev","__ZN3WTF6VectorIPKN7WebCore16FloatPolygonEdgeELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore16FloatPolygonEdgeD0Ev","__ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEED0Ev","__ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE4NodeD1Ev","__ZNK7WebCore16FloatPolygonEdge7vertex2Ev","__ZNK7WebCore12FloatPolygon16overlappingEdgesEffRN3WTF6VectorIPKNS_16FloatPolygonEdgeELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEED1Ev","__ZNK7WebCore24PODIntervalSearchAdapterIfPNS_16FloatPolygonEdgeEE15collectIfNeededERKNS_11PODIntervalIfS2_EE","_memset","__ZNK7WebCore15PODIntervalTreeIfPNS_16FloatPolygonEdgeEE21searchForOverlapsFromINS_24PODIntervalSearchAdapterIfS2_EEEEvPNS_15PODRedBlackTreeINS_11PODIntervalIfS2_EEE4NodeERT_","__ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE4Node8copyFromEPS6_","_memcpy","__ZNK7WebCore12FloatPolygon15containsEvenOddERKNS_10FloatPointE","__ZNK7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE15checkInvariantsEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore15PODIntervalTreeIfPNS_16FloatPolygonEdgeEE15checkInvariantsEv","__ZN7WebCore16PODFreeListArenaINS_15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE4NodeEE8allocateEj","__ZN7WebCore12FloatPolygonC2EN3WTF10PassOwnPtrINS1_6VectorINS_10FloatPointELj0ENS1_15CrashOnOverflowEEEEENS_8WindRuleE","__ZNK7WebCore16FloatPolygonEdge7vertex1Ev","__ZNK7WebCore12FloatPolygon8containsERKNS_10FloatPointE","__ZN7WebCore16PODFreeListArenaINS_15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE4NodeEED1Ev","__ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE4NodeD0Ev","__ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE10insertNodeEPNS5_4NodeE","__ZN3WTF6VectorIN7WebCore11PODIntervalIfPNS1_16FloatPolygonEdgeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore10VertexPair12overlapsRectERKNS_9FloatRectE","__ZN3WTF6VectorIN7WebCore16FloatPolygonEdgeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZNK7WebCore12FloatPolygon15containsNonZeroERKNS_10FloatPointE","__ZN7WebCore16FloatPolygonEdgeD1Ev","__ZNK7WebCore15PODIntervalTreeIfPNS_16FloatPolygonEdgeEE23checkInvariantsFromNodeEPNS_15PODRedBlackTreeINS_11PODIntervalIfS2_EEE4NodeEPf","__ZN3WTF6VectorINS_6OwnPtrIN7WebCore16PODFreeListArenaINS2_15PODRedBlackTreeINS2_11PODIntervalIfPNS2_16FloatPolygonEdgeEEEE4NodeEE13FreeListChunkEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore16PODFreeListArenaINS_15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE4NodeEED0Ev","__ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE10updateNodeEPNS5_4NodeE","__ZNK7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE23checkInvariantsFromNodeEPNS5_4NodeEPi"]

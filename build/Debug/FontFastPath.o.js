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
var Math_min = Math.min;
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_fiif(index,a1,a2,a3) {
  try {
    return Module["dynCall_fiif"](index,a1,a2,a3);
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
  var invoke_fiif=env.invoke_fiif;
  var invoke_ii=env.invoke_ii;
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var _floorf=env._floorf;
  var ___setErrNo=env.___setErrNo;
  var _malloc=env._malloc;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore4Font30offsetForPositionForSimpleTextERKNS_7TextRunEfb(i1, i2, d3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, d27 = +0, i28 = 0, i29 = 0, d30 = +0, i31 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 73920 | 0;
 i6 = i5 | 0;
 i7 = i5 + 73784 | 0;
 i8 = i6 + 12 | 0;
 i9 = i6 | 0;
 HEAP32[i9 >> 2] = i8;
 i10 = i6 + 4 | 0;
 HEAP32[i10 >> 2] = 2048;
 i11 = i6 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i6 + 8224 | 0;
 i13 = i6 + 8208 | 0;
 HEAP32[i13 >> 2] = i12;
 i14 = i6 + 8212 | 0;
 HEAP32[i14 >> 2] = 2048;
 i15 = i6 + 8216 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i6 + 57388 | 0;
 i17 = i6 + 57376 | 0;
 HEAP32[i17 >> 2] = i16;
 i18 = i6 + 57380 | 0;
 HEAP32[i18 >> 2] = 2048;
 i19 = i6 + 57384 | 0;
 HEAP32[i19 >> 2] = 0;
 HEAPF32[i6 + 73772 >> 2] = +0;
 HEAPF32[i6 + 73776 >> 2] = +0;
 __ZN7WebCore13WidthIteratorC1EPKNS_4FontERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS7_7PtrHashISB_EENS7_10HashTraitsISB_EEEEbb(i7, i1, i2, 0, 0, 0);
 i1 = i2 + 8 | 0;
 __ZN7WebCore13WidthIterator7advanceEiPNS_11GlyphBufferE(i7, HEAP32[i1 >> 2] | 0, i6) | 0;
 L1 : do {
  if ((HEAP32[i2 + 24 >> 2] & 16 | 0) == 0) {
   d20 = +HEAPF32[i7 + 12 >> 2];
   i6 = HEAP32[i11 >> 2] | 0;
   if ((i6 | 0) < 0) {
    i21 = 0;
    break;
   }
   i22 = HEAP32[i7 + 40 >> 2] | 0;
   i23 = HEAP32[i7 + 32 >> 2] | 0;
   i24 = HEAP32[i19 >> 2] | 0;
   i25 = HEAP32[i17 >> 2] | 0;
   L26 : do {
    if (i4) {
     i26 = 0;
     d27 = d20;
     while (1) {
      if ((i26 | 0) == (i6 | 0)) {
       break L26;
      }
      if (i22 >>> 0 <= i26 >>> 0) {
       i28 = 58;
       break;
      }
      i29 = HEAP32[i23 + (i26 << 2) >> 2] | 0;
      if (i24 >>> 0 <= i26 >>> 0) {
       i28 = 62;
       break;
      }
      d30 = +HEAPF32[i25 + (i26 << 3) >> 2];
      if (d27 - d30 * +.5 <= d3) {
       i21 = i29;
       break L1;
      }
      i31 = i26 + 1 | 0;
      if ((i31 | 0) > (i6 | 0)) {
       i21 = i29;
       break L1;
      } else {
       i26 = i31;
       d27 = d27 - d30;
      }
     }
     if ((i28 | 0) == 58) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return 0;
     } else if ((i28 | 0) == 62) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return 0;
     }
    } else {
     i26 = 0;
     d27 = d20;
     while (1) {
      if ((i26 | 0) == (i6 | 0)) {
       break L26;
      }
      if (i22 >>> 0 <= i26 >>> 0) {
       i28 = 57;
       break;
      }
      i31 = HEAP32[i23 + (i26 << 2) >> 2] | 0;
      if (i24 >>> 0 <= i26 >>> 0) {
       i28 = 61;
       break;
      }
      d30 = d27 - +HEAPF32[i25 + (i26 << 3) >> 2];
      if (d30 <= d3) {
       i21 = i31;
       break L1;
      }
      i29 = i26 + 1 | 0;
      if ((i29 | 0) > (i6 | 0)) {
       i21 = i31;
       break L1;
      } else {
       i26 = i29;
       d27 = d30;
      }
     }
     if ((i28 | 0) == 57) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return 0;
     } else if ((i28 | 0) == 61) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return 0;
     }
    }
   } while (0);
   i21 = HEAP32[i1 >> 2] | 0;
  } else {
   i6 = HEAP32[i11 >> 2] | 0;
   if ((i6 | 0) < 0) {
    i21 = 0;
    break;
   }
   i25 = HEAP32[i7 + 40 >> 2] | 0;
   i24 = HEAP32[i7 + 32 >> 2] | 0;
   i23 = HEAP32[i19 >> 2] | 0;
   i22 = HEAP32[i17 >> 2] | 0;
   L4 : do {
    if (i4) {
     d20 = +0;
     i26 = 0;
     while (1) {
      if ((i26 | 0) == (i6 | 0)) {
       break L4;
      }
      if (i25 >>> 0 <= i26 >>> 0) {
       i28 = 63;
       break;
      }
      i29 = HEAP32[i24 + (i26 << 2) >> 2] | 0;
      if (i23 >>> 0 <= i26 >>> 0) {
       i28 = 65;
       break;
      }
      d27 = +HEAPF32[i22 + (i26 << 3) >> 2];
      if (d20 + d27 * +.5 >= d3) {
       i21 = i29;
       break L1;
      }
      i31 = i26 + 1 | 0;
      if ((i31 | 0) > (i6 | 0)) {
       i21 = i29;
       break L1;
      } else {
       d20 = d20 + d27;
       i26 = i31;
      }
     }
     if ((i28 | 0) == 63) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return 0;
     } else if ((i28 | 0) == 65) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return 0;
     }
    } else {
     d20 = +0;
     i26 = 0;
     while (1) {
      if ((i26 | 0) == (i6 | 0)) {
       break L4;
      }
      if (i25 >>> 0 <= i26 >>> 0) {
       i28 = 64;
       break;
      }
      i31 = HEAP32[i24 + (i26 << 2) >> 2] | 0;
      if (i23 >>> 0 <= i26 >>> 0) {
       i28 = 66;
       break;
      }
      d27 = d20 + +HEAPF32[i22 + (i26 << 3) >> 2];
      if (d27 >= d3) {
       i21 = i31;
       break L1;
      }
      i29 = i26 + 1 | 0;
      if ((i29 | 0) > (i6 | 0)) {
       i21 = i31;
       break L1;
      } else {
       d20 = d27;
       i26 = i29;
      }
     }
     if ((i28 | 0) == 64) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return 0;
     } else if ((i28 | 0) == 66) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return 0;
     }
    }
   } while (0);
   i21 = HEAP32[i1 >> 2] | 0;
  }
 } while (0);
 i1 = i7 + 96 | 0;
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
 }
 i1 = i7 + 88 | 0;
 i28 = HEAP32[i1 >> 2] | 0;
 if ((i28 | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i7 + 92 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i28);
 }
 i28 = HEAP32[i7 + 84 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i1 = i28 | 0;
   i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i1 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i28 = i7 + 40 | 0;
 if ((HEAP32[i28 >> 2] | 0) != 0) {
  HEAP32[i28 >> 2] = 0;
 }
 i28 = i7 + 32 | 0;
 i4 = HEAP32[i28 >> 2] | 0;
 if (!((i7 + 44 | 0) == (i4 | 0) | (i4 | 0) == 0)) {
  HEAP32[i28 >> 2] = 0;
  HEAP32[i7 + 36 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 if ((HEAP32[i19 >> 2] | 0) != 0) {
  HEAP32[i19 >> 2] = 0;
 }
 i19 = HEAP32[i17 >> 2] | 0;
 if (!((i16 | 0) == (i19 | 0) | (i19 | 0) == 0)) {
  HEAP32[i17 >> 2] = 0;
  HEAP32[i18 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i19);
 }
 if ((HEAP32[i15 >> 2] | 0) != 0) {
  HEAP32[i15 >> 2] = 0;
 }
 i15 = HEAP32[i13 >> 2] | 0;
 if (!((i12 | 0) == (i15 | 0) | (i15 | 0) == 0)) {
  HEAP32[i13 >> 2] = 0;
  HEAP32[i14 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i15);
 }
 if ((HEAP32[i11 >> 2] | 0) != 0) {
  HEAP32[i11 >> 2] = 0;
 }
 i11 = HEAP32[i9 >> 2] | 0;
 if ((i8 | 0) == (i11 | 0) | (i11 | 0) == 0) {
  STACKTOP = i5;
  return i21 | 0;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i11);
 STACKTOP = i5;
 return i21 | 0;
}
function __ZNK7WebCore4Font33getGlyphsAndAdvancesForSimpleTextERKNS_7TextRunEiiRNS_11GlyphBufferENS0_20ForTextEmphasisOrNotE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, d21 = +0, d22 = +0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, d27 = +0, i28 = 0, i29 = 0, d30 = +0, i31 = 0, d32 = +0, i33 = 0, i34 = 0, d35 = +0, i36 = 0, i37 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 73920 | 0;
 i8 = i7 | 0;
 i9 = i7 + 136 | 0;
 __ZN7WebCore13WidthIteratorC1EPKNS_4FontERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS7_7PtrHashISB_EENS7_10HashTraitsISB_EEEEbb(i8, i1, i2, 0, 0, (i6 | 0) != 0);
 i6 = i9 + 12 | 0;
 i1 = i9 | 0;
 HEAP32[i1 >> 2] = i6;
 i10 = i9 + 4 | 0;
 HEAP32[i10 >> 2] = 2048;
 i11 = i9 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i9 + 8224 | 0;
 i13 = i9 + 8208 | 0;
 HEAP32[i13 >> 2] = i12;
 i14 = i9 + 8212 | 0;
 HEAP32[i14 >> 2] = 2048;
 i15 = i9 + 8216 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i9 + 57388 | 0;
 i17 = i9 + 57376 | 0;
 HEAP32[i17 >> 2] = i16;
 i18 = i9 + 57380 | 0;
 HEAP32[i18 >> 2] = 2048;
 i19 = i9 + 57384 | 0;
 HEAP32[i19 >> 2] = 0;
 HEAPF32[i9 + 73772 >> 2] = +0;
 HEAPF32[i9 + 73776 >> 2] = +0;
 __ZN7WebCore13WidthIterator7advanceEiPNS_11GlyphBufferE(i8, HEAP32[i2 + 8 >> 2] | 0, i9) | 0;
 i20 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i20 | 0) == 0) {
   d21 = +0;
  } else {
   d22 = +HEAPF32[i8 + 12 >> 2];
   L3 : do {
    if ((i20 | 0) > 0) {
     i23 = HEAP32[i8 + 40 >> 2] | 0;
     i24 = HEAP32[i8 + 32 >> 2] | 0;
     i25 = HEAP32[i19 >> 2] | 0;
     i26 = HEAP32[i17 >> 2] | 0;
     d27 = +0;
     i28 = 0;
     while (1) {
      if (i23 >>> 0 <= i28 >>> 0) {
       i29 = 5;
       break;
      }
      if ((HEAP32[i24 + (i28 << 2) >> 2] | 0) >= (i3 | 0)) {
       d30 = d27;
       i31 = i28;
       break L3;
      }
      if (i25 >>> 0 <= i28 >>> 0) {
       i29 = 8;
       break;
      }
      d32 = d27 + +HEAPF32[i26 + (i28 << 3) >> 2];
      i33 = i28 + 1 | 0;
      if ((i33 | 0) < (i20 | 0)) {
       d27 = d32;
       i28 = i33;
      } else {
       d30 = d32;
       i31 = i33;
       break L3;
      }
     }
     if ((i29 | 0) == 8) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return +0;
     } else if ((i29 | 0) == 5) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return +0;
     }
    } else {
     d30 = +0;
     i31 = 0;
    }
   } while (0);
   i28 = i20 - 1 | 0;
   L14 : do {
    if ((i28 | 0) < (i31 | 0)) {
     i34 = i20;
     d35 = d22;
    } else {
     i26 = HEAP32[i8 + 40 >> 2] | 0;
     i25 = HEAP32[i8 + 32 >> 2] | 0;
     i24 = HEAP32[i19 >> 2] | 0;
     i23 = HEAP32[i17 >> 2] | 0;
     i33 = i20;
     d27 = d22;
     i36 = i28;
     while (1) {
      if (i26 >>> 0 <= i36 >>> 0) {
       i29 = 13;
       break;
      }
      if ((HEAP32[i25 + (i36 << 2) >> 2] | 0) < (i4 | 0)) {
       i34 = i33;
       d35 = d27;
       break L14;
      }
      if (i24 >>> 0 <= i36 >>> 0) {
       i29 = 16;
       break;
      }
      d32 = d27 - +HEAPF32[i23 + (i36 << 3) >> 2];
      i37 = i36 - 1 | 0;
      if ((i37 | 0) < (i31 | 0)) {
       i34 = i36;
       d35 = d32;
       break L14;
      } else {
       i33 = i36;
       d27 = d32;
       i36 = i37;
      }
     }
     if ((i29 | 0) == 13) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return +0;
     } else if ((i29 | 0) == 16) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return +0;
     }
    }
   } while (0);
   __ZN7WebCore11GlyphBuffer3addEPKS0_ii(i5, i9, i31, i34 - i31 | 0);
   if ((HEAP32[i2 + 24 >> 2] & 16 | 0) != 0) {
    d21 = d30;
    break;
   }
   i28 = (HEAP32[i5 + 8 >> 2] | 0) - 1 | 0;
   if ((i28 | 0) > 0) {
    i36 = 0;
    i33 = i28;
    while (1) {
     __ZN7WebCore11GlyphBuffer4swapEii(i5, i36, i33);
     i36 = i36 + 1 | 0;
     i33 = i33 - 1 | 0;
     if ((i36 | 0) >= (i33 | 0)) {
      break;
     }
    }
   }
   d21 = d22 - d35;
  }
 } while (0);
 if ((HEAP32[i19 >> 2] | 0) != 0) {
  HEAP32[i19 >> 2] = 0;
 }
 i19 = HEAP32[i17 >> 2] | 0;
 if (!((i16 | 0) == (i19 | 0) | (i19 | 0) == 0)) {
  HEAP32[i17 >> 2] = 0;
  HEAP32[i18 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i19);
 }
 if ((HEAP32[i15 >> 2] | 0) != 0) {
  HEAP32[i15 >> 2] = 0;
 }
 i15 = HEAP32[i13 >> 2] | 0;
 if (!((i12 | 0) == (i15 | 0) | (i15 | 0) == 0)) {
  HEAP32[i13 >> 2] = 0;
  HEAP32[i14 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i15);
 }
 if ((HEAP32[i11 >> 2] | 0) != 0) {
  HEAP32[i11 >> 2] = 0;
 }
 i11 = HEAP32[i1 >> 2] | 0;
 if (!((i6 | 0) == (i11 | 0) | (i11 | 0) == 0)) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i10 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i11);
 }
 i11 = i8 + 96 | 0;
 if ((HEAP32[i11 >> 2] | 0) != 0) {
  HEAP32[i11 >> 2] = 0;
 }
 i11 = i8 + 88 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i11 >> 2] = 0;
  HEAP32[i8 + 92 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = HEAP32[i8 + 84 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i11 = i10 | 0;
   i1 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i11 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i10 = i8 + 40 | 0;
 if ((HEAP32[i10 >> 2] | 0) != 0) {
  HEAP32[i10 >> 2] = 0;
 }
 i10 = i8 + 32 | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 if ((i8 + 44 | 0) == (i1 | 0) | (i1 | 0) == 0) {
  STACKTOP = i7;
  return +d21;
 }
 HEAP32[i10 >> 2] = 0;
 HEAP32[i8 + 36 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i7;
 return +d21;
}
function __ZNK7WebCore4Font17drawEmphasisMarksEPNS_15GraphicsContextERKNS_7TextRunERKNS_11GlyphBufferERKN3WTF12AtomicStringERKNS_10FloatPointE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, d21 = +0, d22 = +0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 73800 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = __ZN7WebCore9fontCacheEv() | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 i11 = i8 | 0;
 HEAP16[i11 >> 1] = 0;
 i12 = i8 + 4 | 0;
 HEAP32[i12 >> 2] = 0;
 do {
  if (__ZNK7WebCore4Font24getEmphasisMarkGlyphDataERKN3WTF12AtomicStringERNS_9GlyphDataE(i1, i5, i8) | 0) {
   i13 = HEAP32[i12 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i14 = HEAP16[i11 >> 1] | 0;
   i15 = HEAP16[i13 + 1122 >> 1] | 0;
   i16 = i4 + 8 | 0;
   if ((HEAP32[i16 >> 2] | 0) == 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i17 = i4 + 8216 | 0;
   if ((HEAP32[i17 >> 2] | 0) == 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i18 = i4 | 0;
   i19 = i4 + 8208 | 0;
   d20 = +__ZN7WebCoreL21offsetToMiddleOfGlyphEPKNS_14SimpleFontDataEt(HEAP32[HEAP32[i18 >> 2] >> 2] | 0, HEAP32[HEAP32[i19 >> 2] >> 2] & 65535);
   d21 = d20 + +HEAPF32[i6 >> 2];
   d22 = d21 - +__ZN7WebCoreL21offsetToMiddleOfGlyphEPKNS_14SimpleFontDataEt(i13, i14);
   d21 = +HEAPF32[i6 + 4 >> 2];
   HEAPF32[i9 >> 2] = d22;
   HEAPF32[i9 + 4 >> 2] = d21;
   i23 = i10 + 12 | 0;
   i24 = i10 | 0;
   HEAP32[i24 >> 2] = i23;
   i25 = i10 + 4 | 0;
   HEAP32[i25 >> 2] = 2048;
   i26 = i10 + 8 | 0;
   HEAP32[i26 >> 2] = 0;
   i27 = i10 + 8224 | 0;
   i28 = i10 + 8208 | 0;
   HEAP32[i28 >> 2] = i27;
   i29 = i10 + 8212 | 0;
   HEAP32[i29 >> 2] = 2048;
   i30 = i10 + 8216 | 0;
   HEAP32[i30 >> 2] = 0;
   i31 = i10 + 57388 | 0;
   i32 = i10 + 57376 | 0;
   HEAP32[i32 >> 2] = i31;
   i33 = i10 + 57380 | 0;
   HEAP32[i33 >> 2] = 2048;
   i34 = i10 + 57384 | 0;
   HEAP32[i34 >> 2] = 0;
   HEAPF32[i10 + 73772 >> 2] = +0;
   HEAPF32[i10 + 73776 >> 2] = +0;
   i35 = HEAP32[i16 >> 2] | 0;
   L10 : do {
    if ((i35 | 0) > 1) {
     i36 = i4 + 57384 | 0;
     i37 = i4 + 57376 | 0;
     i38 = 0;
     d21 = d20;
     i39 = 1;
     i40 = i35;
     while (1) {
      if (i40 >>> 0 <= i39 >>> 0) {
       i41 = 10;
       break;
      }
      if ((HEAP32[i17 >> 2] | 0) >>> 0 <= i39 >>> 0) {
       i41 = 12;
       break;
      }
      d22 = +__ZN7WebCoreL21offsetToMiddleOfGlyphEPKNS_14SimpleFontDataEt(HEAP32[(HEAP32[i18 >> 2] | 0) + (i39 << 2) >> 2] | 0, HEAP32[(HEAP32[i19 >> 2] | 0) + (i39 * 24 & -1) >> 2] & 65535);
      if ((HEAP32[i36 >> 2] | 0) >>> 0 <= i38 >>> 0) {
       i41 = 14;
       break;
      }
      if ((HEAP32[i17 >> 2] | 0) >>> 0 <= i38 >>> 0) {
       i41 = 16;
       break;
      }
      __ZN7WebCore11GlyphBuffer3addEtPKNS_14SimpleFontDataEfPKNS_9FloatSizeE(i10, (HEAP32[(HEAP32[i19 >> 2] | 0) + (i38 * 24 & -1) >> 2] & 65535) << 16 >> 16 != 0 ? i14 : i15, i13, d22 + (+HEAPF32[(HEAP32[i37 >> 2] | 0) + (i38 << 3) >> 2] - d21), 0);
      i42 = i39 + 1 | 0;
      i43 = HEAP32[i16 >> 2] | 0;
      if ((i42 | 0) < (i43 | 0)) {
       i38 = i39;
       d21 = d22;
       i39 = i42;
       i40 = i43;
      } else {
       i44 = i43;
       break L10;
      }
     }
     if ((i41 | 0) == 12) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i41 | 0) == 16) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i41 | 0) == 14) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i41 | 0) == 10) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    } else {
     i44 = i35;
    }
   } while (0);
   i35 = i44 - 1 | 0;
   if ((HEAP32[i17 >> 2] | 0) >>> 0 <= i35 >>> 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   __ZN7WebCore11GlyphBuffer3addEtPKNS_14SimpleFontDataEfPKNS_9FloatSizeE(i10, (HEAP32[(HEAP32[i19 >> 2] | 0) + (i35 * 24 & -1) >> 2] & 65535) << 16 >> 16 != 0 ? i14 : i15, i13, +0, 0);
   __ZNK7WebCore4Font15drawGlyphBufferEPNS_15GraphicsContextERKNS_7TextRunERKNS_11GlyphBufferERNS_10FloatPointE(i1, i2, i3, i10, i9);
   if ((HEAP32[i34 >> 2] | 0) != 0) {
    HEAP32[i34 >> 2] = 0;
   }
   i35 = HEAP32[i32 >> 2] | 0;
   if (!((i31 | 0) == (i35 | 0) | (i35 | 0) == 0)) {
    HEAP32[i32 >> 2] = 0;
    HEAP32[i33 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i35);
   }
   if ((HEAP32[i30 >> 2] | 0) != 0) {
    HEAP32[i30 >> 2] = 0;
   }
   i35 = HEAP32[i28 >> 2] | 0;
   if (!((i27 | 0) == (i35 | 0) | (i35 | 0) == 0)) {
    HEAP32[i28 >> 2] = 0;
    HEAP32[i29 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i35);
   }
   if ((HEAP32[i26 >> 2] | 0) != 0) {
    HEAP32[i26 >> 2] = 0;
   }
   i35 = HEAP32[i24 >> 2] | 0;
   if ((i23 | 0) == (i35 | 0) | (i35 | 0) == 0) {
    break;
   }
   HEAP32[i24 >> 2] = 0;
   HEAP32[i25 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i35);
  }
 } while (0);
 i9 = __ZN7WebCore9fontCacheEv() | 0;
 i10 = i9 | 0;
 i3 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 HEAP32[i10 >> 2] = i3;
 if ((i3 | 0) != 0) {
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore9FontCache29purgeInactiveFontDataIfNeededEv(i9);
 STACKTOP = i7;
 return;
}
function __ZNK7WebCore4Font26selectionRectForSimpleTextERKNS_7TextRunERKNS_10FloatPointEiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, d23 = +0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, d28 = +0, i29 = 0, i30 = 0, d31 = +0, d32 = +0, i33 = 0, d34 = +0, d35 = +0, d36 = +0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 73920 | 0;
 i9 = i8 | 0;
 i10 = i8 + 73784 | 0;
 i11 = i9 + 12 | 0;
 i12 = i9 | 0;
 HEAP32[i12 >> 2] = i11;
 i13 = i9 + 4 | 0;
 HEAP32[i13 >> 2] = 2048;
 i14 = i9 + 8 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i9 + 8224 | 0;
 i16 = i9 + 8208 | 0;
 HEAP32[i16 >> 2] = i15;
 i17 = i9 + 8212 | 0;
 HEAP32[i17 >> 2] = 2048;
 i18 = i9 + 8216 | 0;
 HEAP32[i18 >> 2] = 0;
 i19 = i9 + 57388 | 0;
 i20 = i9 + 57376 | 0;
 HEAP32[i20 >> 2] = i19;
 i21 = i9 + 57380 | 0;
 HEAP32[i21 >> 2] = 2048;
 i22 = i9 + 57384 | 0;
 HEAP32[i22 >> 2] = 0;
 HEAPF32[i9 + 73772 >> 2] = +0;
 HEAPF32[i9 + 73776 >> 2] = +0;
 __ZN7WebCore13WidthIteratorC1EPKNS_4FontERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS7_7PtrHashISB_EENS7_10HashTraitsISB_EEEEbb(i10, i2, i3, 0, 0, 0);
 __ZN7WebCore13WidthIterator7advanceEiPNS_11GlyphBufferE(i10, HEAP32[i3 + 8 >> 2] | 0, i9) | 0;
 d23 = +HEAPF32[i10 + 12 >> 2];
 i9 = HEAP32[i14 >> 2] | 0;
 L1 : do {
  if ((i9 | 0) > 0) {
   i2 = HEAP32[i10 + 40 >> 2] | 0;
   i24 = HEAP32[i10 + 32 >> 2] | 0;
   i25 = HEAP32[i22 >> 2] | 0;
   i26 = HEAP32[i20 >> 2] | 0;
   i27 = 0;
   d28 = +0;
   while (1) {
    if (i2 >>> 0 <= i27 >>> 0) {
     i29 = 4;
     break;
    }
    if ((HEAP32[i24 + (i27 << 2) >> 2] | 0) >= (i6 | 0)) {
     i30 = i27;
     d31 = d28;
     break L1;
    }
    if (i25 >>> 0 <= i27 >>> 0) {
     i29 = 7;
     break;
    }
    d32 = d28 + +HEAPF32[i26 + (i27 << 3) >> 2];
    i33 = i27 + 1 | 0;
    if ((i33 | 0) < (i9 | 0)) {
     i27 = i33;
     d28 = d32;
    } else {
     i30 = i33;
     d31 = d32;
     break L1;
    }
   }
   if ((i29 | 0) == 7) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i29 | 0) == 4) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  } else {
   i30 = 0;
   d31 = +0;
  }
 } while (0);
 i6 = i9 - 1 | 0;
 L12 : do {
  if ((i6 | 0) < (i30 | 0)) {
   d34 = d23;
  } else {
   i9 = HEAP32[i10 + 40 >> 2] | 0;
   i27 = HEAP32[i10 + 32 >> 2] | 0;
   i26 = HEAP32[i22 >> 2] | 0;
   i25 = HEAP32[i20 >> 2] | 0;
   d28 = d23;
   i24 = i6;
   while (1) {
    if (i9 >>> 0 <= i24 >>> 0) {
     i29 = 12;
     break;
    }
    if ((HEAP32[i27 + (i24 << 2) >> 2] | 0) < (i7 | 0)) {
     d34 = d28;
     break L12;
    }
    if (i26 >>> 0 <= i24 >>> 0) {
     i29 = 15;
     break;
    }
    d32 = d28 - +HEAPF32[i25 + (i24 << 3) >> 2];
    i2 = i24 - 1 | 0;
    if ((i2 | 0) < (i30 | 0)) {
     d34 = d32;
     break L12;
    } else {
     d28 = d32;
     i24 = i2;
    }
   }
   if ((i29 | 0) == 12) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i29 | 0) == 15) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 d28 = +HEAPF32[i4 >> 2];
 if ((HEAP32[i3 + 24 >> 2] & 16 | 0) == 0) {
  d32 = d23 + d28;
  d23 = +Math_floor(d32 - d34);
  d35 = +HEAPF32[i4 + 4 >> 2];
  d36 = +_round(+(d32 - d31)) - d23;
  HEAPF32[i1 >> 2] = d23;
  HEAPF32[i1 + 4 >> 2] = d35;
  HEAPF32[i1 + 8 >> 2] = d36;
  HEAPF32[i1 + 12 >> 2] = +(i5 | 0);
 } else {
  d36 = +Math_floor(d31 + d28);
  d31 = +HEAPF32[i4 + 4 >> 2];
  d35 = +_round(+(d34 + d28)) - d36;
  HEAPF32[i1 >> 2] = d36;
  HEAPF32[i1 + 4 >> 2] = d31;
  HEAPF32[i1 + 8 >> 2] = d35;
  HEAPF32[i1 + 12 >> 2] = +(i5 | 0);
 }
 i5 = i10 + 96 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 i5 = i10 + 88 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i10 + 92 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 i1 = HEAP32[i10 + 84 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = i10 + 40 | 0;
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
 }
 i1 = i10 + 32 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if (!((i10 + 44 | 0) == (i4 | 0) | (i4 | 0) == 0)) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i10 + 36 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 if ((HEAP32[i22 >> 2] | 0) != 0) {
  HEAP32[i22 >> 2] = 0;
 }
 i22 = HEAP32[i20 >> 2] | 0;
 if (!((i19 | 0) == (i22 | 0) | (i22 | 0) == 0)) {
  HEAP32[i20 >> 2] = 0;
  HEAP32[i21 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i22);
 }
 if ((HEAP32[i18 >> 2] | 0) != 0) {
  HEAP32[i18 >> 2] = 0;
 }
 i18 = HEAP32[i16 >> 2] | 0;
 if (!((i15 | 0) == (i18 | 0) | (i18 | 0) == 0)) {
  HEAP32[i16 >> 2] = 0;
  HEAP32[i17 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i18);
 }
 if ((HEAP32[i14 >> 2] | 0) != 0) {
  HEAP32[i14 >> 2] = 0;
 }
 i14 = HEAP32[i12 >> 2] | 0;
 if ((i11 | 0) == (i14 | 0) | (i14 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 HEAP32[i12 >> 2] = 0;
 HEAP32[i13 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i14);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore11GlyphBuffer3addEtPKNS_14SimpleFontDataEfPKNS_9FloatSizeE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 32 | 0;
 i9 = i8;
 HEAP32[i6 >> 2] = i3;
 i10 = i1 | 0;
 i11 = i1 + 8 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == (HEAP32[i1 + 4 >> 2] | 0)) {
  i13 = i12 + 1 | 0;
  i14 = i1 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  do {
   if (i15 >>> 0 > i6 >>> 0) {
    i16 = 5;
   } else {
    if ((i15 + (i12 << 2) | 0) >>> 0 <= i6 >>> 0) {
     i16 = 5;
     break;
    }
    i17 = i13 + (i12 >>> 2) | 0;
    i18 = i17 >>> 0 > 16 >>> 0 ? i17 : 16;
    __ZN3WTF6VectorIPKN7WebCore14SimpleFontDataELj2048ENS_15CrashOnOverflowEE15reserveCapacityEj(i10, i18 >>> 0 > i13 >>> 0 ? i18 : i13);
    i18 = HEAP32[i14 >> 2] | 0;
    i19 = i18 + (i6 - i15 >> 2 << 2) | 0;
    i20 = i18;
   }
  } while (0);
  if ((i16 | 0) == 5) {
   i15 = i13 + (i12 >>> 2) | 0;
   i18 = i15 >>> 0 > 16 >>> 0 ? i15 : 16;
   __ZN3WTF6VectorIPKN7WebCore14SimpleFontDataELj2048ENS_15CrashOnOverflowEE15reserveCapacityEj(i10, i18 >>> 0 > i13 >>> 0 ? i18 : i13);
   i19 = i6;
   i20 = HEAP32[i14 >> 2] | 0;
  }
  HEAP32[i20 + (HEAP32[i11 >> 2] << 2) >> 2] = HEAP32[i19 >> 2];
 } else {
  HEAP32[(HEAP32[i1 >> 2] | 0) + (i12 << 2) >> 2] = i3;
 }
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 HEAP32[i7 >> 2] = i2 & 65535;
 i2 = i1 + 8208 | 0;
 i11 = i1 + 8216 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 if ((i3 | 0) == (HEAP32[i1 + 8212 >> 2] | 0)) {
  i12 = i3 + 1 | 0;
  i19 = i2 | 0;
  i20 = HEAP32[i19 >> 2] | 0;
  do {
   if (i20 >>> 0 > i7 >>> 0) {
    i16 = 12;
   } else {
    if ((i20 + (i3 * 24 & -1) | 0) >>> 0 <= i7 >>> 0) {
     i16 = 12;
     break;
    }
    i14 = i12 + (i3 >>> 2) | 0;
    i6 = i14 >>> 0 > 16 >>> 0 ? i14 : 16;
    __ZN3WTF6VectorI13cairo_glyph_tLj2048ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i6 >>> 0 > i12 >>> 0 ? i6 : i12);
    i6 = HEAP32[i19 >> 2] | 0;
    i21 = i6 + (((i7 - i20 | 0) / 24 & -1) * 24 & -1) | 0;
    i22 = i6;
   }
  } while (0);
  if ((i16 | 0) == 12) {
   i20 = i12 + (i3 >>> 2) | 0;
   i6 = i20 >>> 0 > 16 >>> 0 ? i20 : 16;
   __ZN3WTF6VectorI13cairo_glyph_tLj2048ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i6 >>> 0 > i12 >>> 0 ? i6 : i12);
   i21 = i7;
   i22 = HEAP32[i19 >> 2] | 0;
  }
  i19 = i22 + ((HEAP32[i11 >> 2] | 0) * 24 & -1) | 0;
  i22 = i21;
  HEAP32[i19 >> 2] = HEAP32[i22 >> 2];
  HEAP32[i19 + 4 >> 2] = HEAP32[i22 + 4 >> 2];
  HEAP32[i19 + 8 >> 2] = HEAP32[i22 + 8 >> 2];
  HEAP32[i19 + 12 >> 2] = HEAP32[i22 + 12 >> 2];
  HEAP32[i19 + 16 >> 2] = HEAP32[i22 + 16 >> 2];
  HEAP32[i19 + 20 >> 2] = HEAP32[i22 + 20 >> 2];
 } else {
  i22 = (HEAP32[i2 >> 2] | 0) + (i3 * 24 & -1) | 0;
  i3 = i7;
  HEAP32[i22 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i22 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
  HEAP32[i22 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
  HEAP32[i22 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
  HEAP32[i22 + 16 >> 2] = HEAP32[i3 + 16 >> 2];
  HEAP32[i22 + 20 >> 2] = HEAP32[i3 + 20 >> 2];
 }
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 i11 = i1 + 57376 | 0;
 HEAPF32[i8 >> 2] = d4;
 HEAPF32[i9 + 4 >> 2] = +0;
 i3 = i1 + 57384 | 0;
 i22 = HEAP32[i3 >> 2] | 0;
 if ((i22 | 0) != (HEAP32[i1 + 57380 >> 2] | 0)) {
  i1 = (HEAP32[i11 >> 2] | 0) + (i22 << 3) | 0;
  i7 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i1 + 4 >> 2] = i7;
  i23 = HEAP32[i3 >> 2] | 0;
  i24 = i23 + 1 | 0;
  HEAP32[i3 >> 2] = i24;
  STACKTOP = i5;
  return;
 }
 i7 = i22 + 1 | 0;
 i1 = i11 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 do {
  if (i2 >>> 0 > i9 >>> 0) {
   i16 = 19;
  } else {
   if ((i2 + (i22 << 3) | 0) >>> 0 <= i9 >>> 0) {
    i16 = 19;
    break;
   }
   i19 = i7 + (i22 >>> 2) | 0;
   i21 = i19 >>> 0 > 16 >>> 0 ? i19 : 16;
   __ZN3WTF6VectorIN7WebCore9FloatSizeELj2048ENS_15CrashOnOverflowEE15reserveCapacityEj(i11, i21 >>> 0 > i7 >>> 0 ? i21 : i7);
   i21 = HEAP32[i1 >> 2] | 0;
   i25 = i21 + (i8 - i2 >> 3 << 3) | 0;
   i26 = i21;
  }
 } while (0);
 if ((i16 | 0) == 19) {
  i16 = i7 + (i22 >>> 2) | 0;
  i22 = i16 >>> 0 > 16 >>> 0 ? i16 : 16;
  __ZN3WTF6VectorIN7WebCore9FloatSizeELj2048ENS_15CrashOnOverflowEE15reserveCapacityEj(i11, i22 >>> 0 > i7 >>> 0 ? i22 : i7);
  i25 = i9;
  i26 = HEAP32[i1 >> 2] | 0;
 }
 i1 = i25;
 i25 = i26 + (HEAP32[i3 >> 2] << 3) | 0;
 i26 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i25 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i25 + 4 >> 2] = i26;
 i23 = HEAP32[i3 >> 2] | 0;
 i24 = i23 + 1 | 0;
 HEAP32[i3 >> 2] = i24;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore4Font15drawGlyphBufferEPNS_15GraphicsContextERKNS_7TextRunERKNS_11GlyphBufferERNS_10FloatPointE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, d14 = +0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, i21 = 0, i22 = 0, d23 = +0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, d33 = +0, i34 = 0, i35 = 0, i36 = 0, d37 = +0, i38 = 0, d39 = +0, i40 = 0, i41 = 0, d42 = +0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i4 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i10 = i4 | 0;
 i11 = HEAP32[HEAP32[i10 >> 2] >> 2] | 0;
 i12 = i5 | 0;
 d13 = +HEAPF32[i12 >> 2];
 d14 = +HEAPF32[i5 + 4 >> 2] - +HEAPF32[i4 + 73776 >> 2];
 i5 = i7 | 0;
 HEAPF32[i5 >> 2] = d13;
 i15 = i7 + 4 | 0;
 HEAPF32[i15 >> 2] = d14;
 i16 = i4 + 57384 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 if ((i17 | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i18 = i4 + 57376 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 d20 = d13 + +HEAPF32[i19 >> 2];
 d13 = d14 + +HEAPF32[i19 + 4 >> 2];
 i19 = HEAP32[i3 + 32 >> 2] | 0;
 L7 : do {
  if ((i9 | 0) > 1) {
   i3 = i19;
   if ((i19 | 0) == 0) {
    d14 = d13;
    i21 = 0;
    i22 = 1;
    d23 = d20;
    i24 = i11;
    i25 = i9;
    i26 = i17;
    while (1) {
     if (i25 >>> 0 <= i22 >>> 0) {
      i27 = 27;
      break;
     }
     i28 = HEAP32[(HEAP32[i10 >> 2] | 0) + (i22 << 2) >> 2] | 0;
     if ((i28 | 0) == (i24 | 0)) {
      i29 = i24;
      i30 = i21;
      i31 = i26;
     } else {
      __ZNK7WebCore4Font10drawGlyphsEPNS_15GraphicsContextEPKNS_14SimpleFontDataERKNS_11GlyphBufferEiiRKNS_10FloatPointE(i1, i2, i24, i4, i21, i22 - i21 | 0, i7);
      i32 = HEAP32[i16 >> 2] | 0;
      HEAPF32[i5 >> 2] = d23;
      HEAPF32[i15 >> 2] = d14;
      i29 = i28;
      i30 = i22;
      i31 = i32;
     }
     if (i31 >>> 0 <= i22 >>> 0) {
      i27 = 29;
      break;
     }
     i32 = (HEAP32[i18 >> 2] | 0) + (i22 << 3) | 0;
     d33 = d23 + +HEAPF32[i32 >> 2];
     i28 = i22 + 1 | 0;
     i34 = HEAP32[i8 >> 2] | 0;
     if ((i28 | 0) < (i34 | 0)) {
      d14 = d14 + +HEAPF32[i32 + 4 >> 2];
      i21 = i30;
      i22 = i28;
      d23 = d33;
      i24 = i29;
      i25 = i34;
      i26 = i31;
     } else {
      i35 = i30;
      i36 = i28;
      d37 = d33;
      i38 = i29;
      break L7;
     }
    }
    if ((i27 | 0) == 27) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i27 | 0) == 29) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   } else {
    d39 = d13;
    i40 = 0;
    i41 = 1;
    d42 = d20;
    i43 = i11;
    i44 = i9;
    i45 = i17;
   }
   while (1) {
    if (i44 >>> 0 <= i41 >>> 0) {
     i27 = 28;
     break;
    }
    i26 = HEAP32[(HEAP32[i10 >> 2] | 0) + (i41 << 2) >> 2] | 0;
    if ((i26 | 0) == (i43 | 0)) {
     i46 = i43;
     i47 = i40;
     i48 = i45;
    } else {
     if ((HEAP32[i43 + 76 >> 2] | 0) == 0) {
      __ZNK7WebCore4Font10drawGlyphsEPNS_15GraphicsContextEPKNS_14SimpleFontDataERKNS_11GlyphBufferEiiRKNS_10FloatPointE(i1, i2, i43, i4, i40, i41 - i40 | 0, i7);
     } else {
      FUNCTION_TABLE_viiiiiii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 1](i19, i2, i43, i4, i40, i41 - i40 | 0, i7);
     }
     HEAPF32[i5 >> 2] = d42;
     HEAPF32[i15 >> 2] = d39;
     i46 = i26;
     i47 = i41;
     i48 = HEAP32[i16 >> 2] | 0;
    }
    if (i48 >>> 0 <= i41 >>> 0) {
     i27 = 30;
     break;
    }
    i26 = (HEAP32[i18 >> 2] | 0) + (i41 << 3) | 0;
    d23 = d42 + +HEAPF32[i26 >> 2];
    i25 = i41 + 1 | 0;
    i24 = HEAP32[i8 >> 2] | 0;
    if ((i25 | 0) < (i24 | 0)) {
     d39 = d39 + +HEAPF32[i26 + 4 >> 2];
     i40 = i47;
     i41 = i25;
     d42 = d23;
     i43 = i46;
     i44 = i24;
     i45 = i48;
    } else {
     i35 = i47;
     i36 = i25;
     d37 = d23;
     i38 = i46;
     break L7;
    }
   }
   if ((i27 | 0) == 28) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 30) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  } else {
   i35 = 0;
   i36 = 1;
   d37 = d20;
   i38 = i11;
  }
 } while (0);
 do {
  if ((i19 | 0) != 0) {
   if ((HEAP32[i38 + 76 >> 2] | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_viiiiiii[HEAP32[(HEAP32[i19 >> 2] | 0) + 12 >> 2] & 1](i19, i2, i38, i4, i35, i36 - i35 | 0, i7);
   STACKTOP = i6;
   return;
  }
 } while (0);
 __ZNK7WebCore4Font10drawGlyphsEPNS_15GraphicsContextEPKNS_14SimpleFontDataERKNS_11GlyphBufferEiiRKNS_10FloatPointE(i1, i2, i38, i4, i35, i36 - i35 | 0, i7);
 HEAPF32[i12 >> 2] = d37;
 STACKTOP = i6;
 return;
}
function __ZN7WebCoreL21offsetToMiddleOfGlyphEPKNS_14SimpleFontDataEt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, i16 = 0, d17 = +0, i18 = 0, d19 = +0, d20 = +0, d21 = +0, i22 = 0, d23 = +0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = (HEAP16[i1 + 1136 >> 1] | 0) == i2 << 16 >> 16 & i2 << 16 >> 16 != 0;
 if ((HEAP32[i1 + 56 >> 2] | 0) != 0) {
  do {
   if (i6) {
    d7 = +0;
   } else {
    i8 = i1 + 84 | 0;
    i9 = i2 & 65535;
    i10 = i9 >>> 8;
    i11 = (i10 | 0) == 0;
    do {
     if (i11) {
      if ((HEAP8[i8 | 0] & 1) == 0) {
       i12 = 33;
       break;
      }
      i13 = i1 + 88 | 0;
     } else {
      i12 = 33;
     }
    } while (0);
    if ((i12 | 0) == 33) {
     i13 = __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i8, i10) | 0;
    }
    i14 = i9 & 255;
    d15 = +HEAPF32[i13 + (i14 << 2) >> 2];
    if (d15 != +-1) {
     d7 = d15;
     break;
    }
    i16 = HEAP32[i1 + 76 >> 2] | 0;
    if ((i16 | 0) == 0) {
     d17 = +__ZNK7WebCore14SimpleFontData21platformWidthForGlyphEt(i1, i2);
    } else {
     d17 = +FUNCTION_TABLE_fiif[HEAP32[(HEAP32[i16 >> 2] | 0) + 12 >> 2] & 1](i16, i2, +HEAPF32[i1 + 60 >> 2]);
    }
    do {
     if (i11) {
      if ((HEAP8[i8 | 0] & 1) == 0) {
       i12 = 41;
       break;
      }
      i18 = i1 + 88 | 0;
     } else {
      i12 = 41;
     }
    } while (0);
    if ((i12 | 0) == 41) {
     i18 = __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i8, i10) | 0;
    }
    HEAPF32[i18 + (i14 << 2) >> 2] = d17;
    d7 = d17;
   }
  } while (0);
  d19 = d7 * +.5;
  STACKTOP = i3;
  return +d19;
 }
 do {
  if (i6) {
   d20 = +0;
   d21 = +0;
  } else {
   i18 = i1 + 80 | 0;
   i13 = i18 | 0;
   i11 = HEAP32[i13 >> 2] | 0;
   if ((i11 | 0) != 0) {
    i9 = i2 & 65535;
    i16 = i9 >>> 8;
    do {
     if ((i16 | 0) == 0) {
      if ((HEAP8[i11 | 0] & 1) == 0) {
       i12 = 7;
       break;
      }
      i22 = i11 + 4 | 0;
     } else {
      i12 = 7;
     }
    } while (0);
    if ((i12 | 0) == 7) {
     i22 = __ZN7WebCore15GlyphMetricsMapINS_9FloatRectEE18locatePageSlowCaseEj(i11, i16) | 0;
    }
    i14 = i9 & 255;
    d7 = +HEAPF32[i22 + (i14 << 4) + 8 >> 2];
    if (d7 != +-1) {
     d20 = +HEAPF32[i22 + (i14 << 4) >> 2];
     d21 = d7;
     break;
    }
   }
   __ZNK7WebCore14SimpleFontData22platformBoundsForGlyphEt(i4, i1, i2);
   d7 = +HEAPF32[i4 >> 2];
   d17 = +HEAPF32[i4 + 4 >> 2];
   d15 = +HEAPF32[i4 + 8 >> 2];
   d23 = +HEAPF32[i4 + 12 >> 2];
   do {
    if ((HEAP32[i13 >> 2] | 0) == 0) {
     i14 = __Znwj(4104) | 0;
     HEAP8[i14] = 0;
     i10 = i14 + 4100 | 0;
     i8 = i10;
     i24 = i14 + 4 | 0;
     while (1) {
      _memset(i24 | 0, 0, 16) | 0;
      i24 = i24 + 16 | 0;
      if ((i24 | 0) == (i8 | 0)) {
       break;
      }
     }
     HEAP32[i10 >> 2] = 0;
     i8 = i5 | 0;
     HEAP32[i8 >> 2] = i14;
     __ZN3WTF6OwnPtrIN7WebCore15GlyphMetricsMapINS1_9FloatRectEEEEaSERKNS_10PassOwnPtrIS4_EE(i18, i5) | 0;
     i24 = HEAP32[i8 >> 2] | 0;
     if ((i24 | 0) == 0) {
      break;
     }
     i8 = HEAP32[i24 + 4100 >> 2] | 0;
     if ((i8 | 0) != 0) {
      i25 = HEAP32[i8 >> 2] | 0;
      if ((i25 | 0) != 0) {
       i26 = HEAP32[i8 + 4 >> 2] | 0;
       if ((i26 | 0) > 0) {
        i27 = 0;
        while (1) {
         do {
          if ((HEAP32[i25 + (i27 << 3) >> 2] | 0) != -1) {
           i28 = HEAP32[i25 + (i27 << 3) + 4 >> 2] | 0;
           if ((i28 | 0) == 0) {
            break;
           }
           __ZdlPv(i28);
          }
         } while (0);
         i27 = i27 + 1 | 0;
         if ((i27 | 0) >= (i26 | 0)) {
          break;
         }
        }
       }
       __ZN3WTF8fastFreeEPv(i25);
      }
      __ZN3WTF8fastFreeEPv(i8);
     }
     __ZdlPv(i24 | 0);
    }
   } while (0);
   i18 = HEAP32[i13 >> 2] | 0;
   i9 = i2 & 65535;
   i16 = i9 >>> 8;
   do {
    if ((i16 | 0) == 0) {
     if ((HEAP8[i18 | 0] & 1) == 0) {
      i12 = 26;
      break;
     }
     i29 = i18 + 4 | 0;
    } else {
     i12 = 26;
    }
   } while (0);
   if ((i12 | 0) == 26) {
    i29 = __ZN7WebCore15GlyphMetricsMapINS_9FloatRectEE18locatePageSlowCaseEj(i18, i16) | 0;
   }
   i13 = i9 & 255;
   HEAPF32[i29 + (i13 << 4) >> 2] = d7;
   HEAPF32[i29 + (i13 << 4) + 4 >> 2] = d17;
   HEAPF32[i29 + (i13 << 4) + 8 >> 2] = d15;
   HEAPF32[i29 + (i13 << 4) + 12 >> 2] = d23;
   d20 = d7;
   d21 = d15;
  }
 } while (0);
 d19 = d20 + d21 * +.5;
 STACKTOP = i3;
 return +d19;
}
function __ZNK7WebCore4Font23floatWidthForSimpleTextERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, d26 = +0, d27 = +0, i28 = 0, i29 = 0, d30 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 73920 | 0;
 i6 = i5 | 0;
 i7 = i5 + 136 | 0;
 i8 = (i4 | 0) != 0;
 __ZN7WebCore13WidthIteratorC1EPKNS_4FontERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS7_7PtrHashISB_EENS7_10HashTraitsISB_EEEEbb(i6, i1, i2, i3, i8, 0);
 i3 = i7 + 12 | 0;
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = i3;
 i10 = i7 + 4 | 0;
 HEAP32[i10 >> 2] = 2048;
 i11 = i7 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i7 + 8224 | 0;
 i13 = i7 + 8208 | 0;
 HEAP32[i13 >> 2] = i12;
 i14 = i7 + 8212 | 0;
 HEAP32[i14 >> 2] = 2048;
 i15 = i7 + 8216 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i7 + 57388 | 0;
 i17 = i7 + 57376 | 0;
 HEAP32[i17 >> 2] = i16;
 i18 = i7 + 57380 | 0;
 HEAP32[i18 >> 2] = 2048;
 i19 = i7 + 57384 | 0;
 HEAP32[i19 >> 2] = 0;
 HEAPF32[i7 + 73772 >> 2] = +0;
 HEAPF32[i7 + 73776 >> 2] = +0;
 __ZN7WebCore13WidthIterator7advanceEiPNS_11GlyphBufferE(i6, HEAP32[i2 + 8 >> 2] | 0, (HEAP32[i1 + 36 >> 2] & 768 | 0) != 0 ? i7 : 0) | 0;
 if (i8) {
  i8 = i4 + 8 | 0;
  d20 = +Math_ceil(+-0 - +HEAPF32[i6 + 116 >> 2]);
  i7 = i4 + 16 | 0;
  i2 = HEAP8[i7] | 0;
  if ((i2 & 1) == 0) {
   i21 = HEAP32[i1 + 24 >> 2] | 0;
   i22 = i21 + 44 | 0;
   i23 = HEAP32[i22 >> 2] | 0;
   if ((i23 | 0) == 0) {
    i24 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i21, i1 | 0, 0) | 0;
    i21 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i24 >> 2] | 0) + 8 >> 2] & 1](i24, 32) | 0;
    HEAP32[i22 >> 2] = i21;
    i25 = i21;
   } else {
    i25 = i23;
   }
   d26 = +(_round(+(+HEAPF32[i25 + 16 >> 2])) | 0);
   d27 = d26;
   i28 = HEAP8[i7] | 0;
  } else {
   d27 = +0;
   i28 = i2;
  }
  i2 = ~~(d20 - d27);
  i7 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = (i7 | 0) < (i2 | 0) ? i2 : i7;
  i7 = i4 + 12 | 0;
  d27 = +Math_ceil(+HEAPF32[i6 + 112 >> 2]);
  if ((i28 & 1) == 0) {
   i28 = HEAP32[i1 + 24 >> 2] | 0;
   i2 = i28 + 44 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i25 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i28, i1 | 0, 0) | 0;
    i1 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i25 >> 2] | 0) + 8 >> 2] & 1](i25, 32) | 0;
    HEAP32[i2 >> 2] = i1;
    i29 = i1;
   } else {
    i29 = i8;
   }
   d30 = +(_round(+(+HEAPF32[i29 + 20 >> 2])) | 0);
  } else {
   d30 = +0;
  }
  i29 = ~~(d27 - d30);
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = (i8 | 0) < (i29 | 0) ? i29 : i8;
  HEAP32[i4 >> 2] = ~~+Math_ceil(+HEAPF32[i6 + 120 >> 2]);
  HEAP32[i4 + 4 >> 2] = ~~+Math_ceil(+HEAPF32[i6 + 124 >> 2]);
 }
 d30 = +HEAPF32[i6 + 12 >> 2];
 if ((HEAP32[i19 >> 2] | 0) != 0) {
  HEAP32[i19 >> 2] = 0;
 }
 i19 = HEAP32[i17 >> 2] | 0;
 if (!((i16 | 0) == (i19 | 0) | (i19 | 0) == 0)) {
  HEAP32[i17 >> 2] = 0;
  HEAP32[i18 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i19);
 }
 if ((HEAP32[i15 >> 2] | 0) != 0) {
  HEAP32[i15 >> 2] = 0;
 }
 i15 = HEAP32[i13 >> 2] | 0;
 if (!((i12 | 0) == (i15 | 0) | (i15 | 0) == 0)) {
  HEAP32[i13 >> 2] = 0;
  HEAP32[i14 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i15);
 }
 if ((HEAP32[i11 >> 2] | 0) != 0) {
  HEAP32[i11 >> 2] = 0;
 }
 i11 = HEAP32[i9 >> 2] | 0;
 if (!((i3 | 0) == (i11 | 0) | (i11 | 0) == 0)) {
  HEAP32[i9 >> 2] = 0;
  HEAP32[i10 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i11);
 }
 i11 = i6 + 96 | 0;
 if ((HEAP32[i11 >> 2] | 0) != 0) {
  HEAP32[i11 >> 2] = 0;
 }
 i11 = i6 + 88 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i11 >> 2] = 0;
  HEAP32[i6 + 92 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = HEAP32[i6 + 84 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i11 = i10 | 0;
   i9 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i11 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i10 = i6 + 40 | 0;
 if ((HEAP32[i10 >> 2] | 0) != 0) {
  HEAP32[i10 >> 2] = 0;
 }
 i10 = i6 + 32 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 if ((i6 + 44 | 0) == (i9 | 0) | (i9 | 0) == 0) {
  STACKTOP = i5;
  return +d30;
 }
 HEAP32[i10 >> 2] = 0;
 HEAP32[i6 + 36 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i9);
 STACKTOP = i5;
 return +d30;
}
function __ZN7WebCore15GlyphMetricsMapINS_9FloatRectEE18locatePageSlowCaseEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 do {
  if ((i2 | 0) == 0) {
   HEAP8[i1 | 0] = 1;
   i7 = i1 + 4 | 0;
  } else {
   i8 = i1 + 4100 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   L4 : do {
    if ((i9 | 0) == 0) {
     i10 = __ZN3WTF10fastMallocEj(20) | 0;
     _memset(i10 | 0, 0, 20) | 0;
     i11 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = i10;
     if ((i11 | 0) == 0) {
      break;
     }
     i10 = HEAP32[i11 >> 2] | 0;
     if ((i10 | 0) != 0) {
      i12 = HEAP32[i11 + 4 >> 2] | 0;
      if ((i12 | 0) > 0) {
       i13 = 0;
       while (1) {
        do {
         if ((HEAP32[i10 + (i13 << 3) >> 2] | 0) != -1) {
          i14 = HEAP32[i10 + (i13 << 3) + 4 >> 2] | 0;
          if ((i14 | 0) == 0) {
           break;
          }
          __ZdlPv(i14);
         }
        } while (0);
        i13 = i13 + 1 | 0;
        if ((i13 | 0) >= (i12 | 0)) {
         break;
        }
       }
      }
      __ZN3WTF8fastFreeEPv(i10);
     }
     __ZN3WTF8fastFreeEPv(i11);
    } else {
     i12 = HEAP32[i9 + 8 >> 2] | 0;
     i13 = HEAP32[i9 >> 2] | 0;
     i14 = ~(i2 << 15) + i2 | 0;
     i15 = (i14 >>> 10 ^ i14) * 9 & -1;
     i14 = i15 >>> 6 ^ i15;
     i15 = i14 + ~(i14 << 11) | 0;
     i14 = i15 >>> 16 ^ i15;
     if ((i13 | 0) == 0) {
      break;
     }
     i15 = i12 & i14;
     i16 = i13 + (i15 << 3) | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     if ((i17 | 0) == (i2 | 0)) {
      i18 = i16;
     } else {
      i16 = (i14 >>> 23) + ~i14 | 0;
      i14 = i16 << 12 ^ i16;
      i16 = i14 >>> 7 ^ i14;
      i14 = i16 << 2 ^ i16;
      i16 = i14 >>> 20 ^ i14 | 1;
      i14 = 0;
      i19 = i15;
      i15 = i17;
      while (1) {
       if ((i15 | 0) == 0) {
        break L4;
       }
       i17 = (i14 | 0) == 0 ? i16 : i14;
       i20 = i17 + i19 & i12;
       i21 = i13 + (i20 << 3) | 0;
       i22 = HEAP32[i21 >> 2] | 0;
       if ((i22 | 0) == (i2 | 0)) {
        i18 = i21;
        break;
       } else {
        i14 = i17;
        i19 = i20;
        i15 = i22;
       }
      }
     }
     if ((i18 | 0) == 0) {
      break;
     }
     i15 = HEAP32[i18 + 4 >> 2] | 0;
     if ((i15 | 0) == 0) {
      break;
     } else {
      i23 = i15;
     }
     STACKTOP = i3;
     return i23 | 0;
    }
   } while (0);
   i9 = __Znwj(4096) | 0;
   i15 = i9 + 4096 | 0;
   i19 = i9;
   while (1) {
    _memset(i19 | 0, 0, 16) | 0;
    i19 = i19 + 16 | 0;
    if ((i19 | 0) == (i15 | 0)) {
     break;
    }
   }
   i15 = i9;
   i19 = HEAP32[i8 >> 2] | 0;
   HEAP32[i4 >> 2] = i2;
   i14 = i5 | 0;
   HEAP32[i14 >> 2] = i15;
   __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapINS3_9FloatRectEE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIjEENS_7HashMapIiS8_SD_NS_10HashTraitsIiEENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EEiNS_10PassOwnPtrIS7_EEEENS_18HashTableAddResultINS_17HashTableIteratorIiS9_SB_SD_SJ_SG_EEEEOT0_OT1_(i6, i19 | 0, i4, i5);
   if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
    i19 = (HEAP32[i6 >> 2] | 0) + 4 | 0;
    i13 = HEAP32[i19 >> 2] | 0;
    i12 = HEAP32[i14 >> 2] | 0;
    HEAP32[i14 >> 2] = 0;
    HEAP32[i19 >> 2] = i12;
    if ((i13 | 0) == 0) {
     i7 = i15;
     break;
    }
    __ZdlPv(i13);
    i7 = i15;
    break;
   } else {
    i13 = HEAP32[i14 >> 2] | 0;
    if ((i13 | 0) == 0) {
     i7 = i15;
     break;
    }
    __ZdlPv(i13);
    i7 = i15;
    break;
   }
  }
 } while (0);
 i6 = 0;
 while (1) {
  HEAPF32[i7 + (i6 << 4) >> 2] = +0;
  HEAPF32[i7 + (i6 << 4) + 4 >> 2] = +0;
  HEAPF32[i7 + (i6 << 4) + 8 >> 2] = +-1;
  HEAPF32[i7 + (i6 << 4) + 12 >> 2] = +-1;
  i5 = i6 + 1 | 0;
  if (i5 >>> 0 < 256 >>> 0) {
   i6 = i5;
  } else {
   i23 = i7;
   break;
  }
 }
 STACKTOP = i3;
 return i23 | 0;
}
function __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 do {
  if ((i2 | 0) == 0) {
   HEAP8[i1 | 0] = 1;
   i7 = i1 + 4 | 0;
  } else {
   i8 = i1 + 1028 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   L4 : do {
    if ((i9 | 0) == 0) {
     i10 = __ZN3WTF10fastMallocEj(20) | 0;
     i11 = i10;
     _memset(i10 | 0, 0, 20) | 0;
     i10 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = i11;
     if ((i10 | 0) == 0) {
      i12 = i11;
      break;
     }
     i11 = HEAP32[i10 >> 2] | 0;
     if ((i11 | 0) != 0) {
      i13 = HEAP32[i10 + 4 >> 2] | 0;
      if ((i13 | 0) > 0) {
       i14 = 0;
       while (1) {
        do {
         if ((HEAP32[i11 + (i14 << 3) >> 2] | 0) != -1) {
          i15 = HEAP32[i11 + (i14 << 3) + 4 >> 2] | 0;
          if ((i15 | 0) == 0) {
           break;
          }
          __ZdlPv(i15);
         }
        } while (0);
        i14 = i14 + 1 | 0;
        if ((i14 | 0) >= (i13 | 0)) {
         break;
        }
       }
      }
      __ZN3WTF8fastFreeEPv(i11);
     }
     __ZN3WTF8fastFreeEPv(i10);
     i12 = HEAP32[i8 >> 2] | 0;
    } else {
     i13 = HEAP32[i9 + 8 >> 2] | 0;
     i14 = HEAP32[i9 >> 2] | 0;
     i15 = ~(i2 << 15) + i2 | 0;
     i16 = (i15 >>> 10 ^ i15) * 9 & -1;
     i15 = i16 >>> 6 ^ i16;
     i16 = i15 + ~(i15 << 11) | 0;
     i15 = i16 >>> 16 ^ i16;
     if ((i14 | 0) == 0) {
      i12 = i9;
      break;
     }
     i16 = i13 & i15;
     i17 = i14 + (i16 << 3) | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     if ((i18 | 0) == (i2 | 0)) {
      i19 = i17;
     } else {
      i17 = (i15 >>> 23) + ~i15 | 0;
      i15 = i17 << 12 ^ i17;
      i17 = i15 >>> 7 ^ i15;
      i15 = i17 << 2 ^ i17;
      i17 = i15 >>> 20 ^ i15 | 1;
      i15 = 0;
      i20 = i16;
      i16 = i18;
      while (1) {
       if ((i16 | 0) == 0) {
        i12 = i9;
        break L4;
       }
       i18 = (i15 | 0) == 0 ? i17 : i15;
       i21 = i18 + i20 & i13;
       i22 = i14 + (i21 << 3) | 0;
       i23 = HEAP32[i22 >> 2] | 0;
       if ((i23 | 0) == (i2 | 0)) {
        i19 = i22;
        break;
       } else {
        i15 = i18;
        i20 = i21;
        i16 = i23;
       }
      }
     }
     if ((i19 | 0) == 0) {
      i12 = i9;
      break;
     }
     i16 = HEAP32[i19 + 4 >> 2] | 0;
     if ((i16 | 0) == 0) {
      i12 = i9;
      break;
     } else {
      i24 = i16;
     }
     STACKTOP = i3;
     return i24 | 0;
    }
   } while (0);
   i9 = __Znwj(1024) | 0;
   HEAP32[i4 >> 2] = i2;
   i8 = i5 | 0;
   HEAP32[i8 >> 2] = i9;
   __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EEiNS_10PassOwnPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIiS8_SA_SC_SI_SF_EEEEOT0_OT1_(i6, i12 | 0, i4, i5);
   if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
    i16 = (HEAP32[i6 >> 2] | 0) + 4 | 0;
    i20 = HEAP32[i16 >> 2] | 0;
    i15 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = 0;
    HEAP32[i16 >> 2] = i15;
    if ((i20 | 0) == 0) {
     i7 = i9;
     break;
    }
    __ZdlPv(i20);
    i7 = i9;
    break;
   } else {
    i20 = HEAP32[i8 >> 2] | 0;
    if ((i20 | 0) == 0) {
     i7 = i9;
     break;
    }
    __ZdlPv(i20);
    i7 = i9;
    break;
   }
  }
 } while (0);
 i6 = 0;
 while (1) {
  HEAPF32[i7 + (i6 << 2) >> 2] = +-1;
  i5 = i6 + 1 | 0;
  if (i5 >>> 0 < 256 >>> 0) {
   i6 = i5;
  } else {
   i24 = i7;
   break;
  }
 }
 STACKTOP = i3;
 return i24 | 0;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapINS3_9FloatRectEE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIjEENS_7HashMapIiS8_SD_NS_10HashTraitsIiEENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EEiNS_10PassOwnPtrIS7_EEEENS_18HashTableAddResultINS_17HashTableIteratorIiS9_SB_SD_SJ_SG_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
  __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapINS3_9FloatRectEE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIjEENS_7HashMapIiS8_SD_NS_10HashTraitsIiEENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8 + ~(i8 << 15) | 0;
 i7 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i7 >>> 6 ^ i7;
 i7 = i9 + ~(i9 << 11) | 0;
 i9 = i7 >>> 16 ^ i7;
 i7 = i9 & i6;
 i11 = i10 + (i7 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i9 >>> 23) + ~i9 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i7;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i6;
    i25 = i10 + (i24 << 3) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i16 = i23;
     i17 = i22;
     i18 = i24;
     i19 = i25;
     i20 = i26;
    }
   }
   if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i21 | 0) == 10) {
    if ((i22 | 0) == 0) {
     i13 = i25;
     i14 = i8;
     break;
    }
    i20 = i22;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i13 = i22;
    i14 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = i13 + 4 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 i22 = i4 | 0;
 i4 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 HEAP32[i14 >> 2] = i4;
 if ((i3 | 0) != 0) {
  __ZdlPv(i3);
 }
 i3 = i2 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i2 + 4 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i22 = i14 << 1;
   i29 = (i4 * 6 & -1 | 0) < (i22 | 0) ? i14 : i22;
  }
  i22 = __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapINS3_9FloatRectEE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIjEENS_7HashMapIiS8_SD_NS_10HashTraitsIiEENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i29, i13) | 0;
  i27 = i22;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EEiNS_10PassOwnPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIiS8_SA_SC_SI_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
  __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8 + ~(i8 << 15) | 0;
 i7 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i7 >>> 6 ^ i7;
 i7 = i9 + ~(i9 << 11) | 0;
 i9 = i7 >>> 16 ^ i7;
 i7 = i9 & i6;
 i11 = i10 + (i7 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i9 >>> 23) + ~i9 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i7;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i6;
    i25 = i10 + (i24 << 3) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i16 = i23;
     i17 = i22;
     i18 = i24;
     i19 = i25;
     i20 = i26;
    }
   }
   if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i21 | 0) == 10) {
    if ((i22 | 0) == 0) {
     i13 = i25;
     i14 = i8;
     break;
    }
    i20 = i22;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i13 = i22;
    i14 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = i13 + 4 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 i22 = i4 | 0;
 i4 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 HEAP32[i14 >> 2] = i4;
 if ((i3 | 0) != 0) {
  __ZdlPv(i3);
 }
 i3 = i2 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i2 + 4 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i22 = i14 << 1;
   i29 = (i4 * 6 & -1 | 0) < (i22 | 0) ? i14 : i22;
  }
  i22 = __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i29, i13) | 0;
  i27 = i22;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapINS3_9FloatRectEE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIjEENS_7HashMapIiS8_SD_NS_10HashTraitsIiEENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
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
  if ((i13 | 0) == (-1 | 0) | (i13 | 0) == 0) {
   i14 = i11;
  } else {
   i15 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = i13 + ~(i13 << 15) | 0;
   i18 = (i17 >>> 10 ^ i17) * 9 & -1;
   i17 = i18 >>> 6 ^ i18;
   i18 = i17 + ~(i17 << 11) | 0;
   i17 = i18 >>> 16 ^ i18;
   i18 = i16 & i17;
   i19 = i15 + (i18 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
    } else {
     i24 = (i17 >>> 23) + ~i17 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i18;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i16;
      i34 = i15 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 6;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 6) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i15 = i30 + 4 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i36 = i13;
   } else {
    __ZdlPv(i16);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
   i16 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i15 >> 2] = i20;
   i14 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i14;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i37 = 0;
 } else {
  i8 = i14;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i37 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    __ZdlPv(i1);
   }
  } while (0);
  i2 = i37 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i37 = i2;
  } else {
   i8 = i14;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
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
  if ((i13 | 0) == (-1 | 0) | (i13 | 0) == 0) {
   i14 = i11;
  } else {
   i15 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = i13 + ~(i13 << 15) | 0;
   i18 = (i17 >>> 10 ^ i17) * 9 & -1;
   i17 = i18 >>> 6 ^ i18;
   i18 = i17 + ~(i17 << 11) | 0;
   i17 = i18 >>> 16 ^ i18;
   i18 = i16 & i17;
   i19 = i15 + (i18 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
    } else {
     i24 = (i17 >>> 23) + ~i17 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i18;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i16;
      i34 = i15 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 6;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 6) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i15 = i30 + 4 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i36 = i13;
   } else {
    __ZdlPv(i16);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
   i16 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i15 >> 2] = i20;
   i14 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i14;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i37 = 0;
 } else {
  i8 = i14;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i37 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    __ZdlPv(i1);
   }
  } while (0);
  i2 = i37 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i37 = i2;
  } else {
   i8 = i14;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore11GlyphBuffer3addEPKS0_ii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i5 = i1 + 8208 | 0;
 i6 = HEAP32[i2 + 8208 >> 2] | 0;
 i7 = i1 + 8216 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i8 + i4 | 0;
 i10 = HEAP32[i1 + 8212 >> 2] | 0;
 if (i9 >>> 0 > i10 >>> 0) {
  i11 = i10 + 1 + (i10 >>> 2) | 0;
  i10 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
  __ZN3WTF6VectorI13cairo_glyph_tLj2048ENS_15CrashOnOverflowEE15reserveCapacityEj(i5, i10 >>> 0 > i9 >>> 0 ? i10 : i9);
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 if (i9 >>> 0 < i12 >>> 0) {
  _WTFCrash();
 }
 i8 = HEAP32[i5 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 if (!i5) {
  i10 = 0;
  while (1) {
   i11 = i8 + ((i10 + i12 | 0) * 24 & -1) | 0;
   i13 = i6 + ((i10 + i3 | 0) * 24 & -1) | 0;
   HEAP32[i11 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i11 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
   HEAP32[i11 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
   HEAP32[i11 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
   HEAP32[i11 + 16 >> 2] = HEAP32[i13 + 16 >> 2];
   HEAP32[i11 + 20 >> 2] = HEAP32[i13 + 20 >> 2];
   i10 = i10 + 1 | 0;
   if (i10 >>> 0 >= i4 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i7 >> 2] = i9;
 i9 = i1 + 57376 | 0;
 i7 = HEAP32[i2 + 57376 >> 2] | 0;
 i10 = i1 + 57384 | 0;
 i6 = HEAP32[i10 >> 2] | 0;
 i12 = i6 + i4 | 0;
 i8 = HEAP32[i1 + 57380 >> 2] | 0;
 if (i12 >>> 0 > i8 >>> 0) {
  i13 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i13 >>> 0 > 16 >>> 0 ? i13 : 16;
  __ZN3WTF6VectorIN7WebCore9FloatSizeELj2048ENS_15CrashOnOverflowEE15reserveCapacityEj(i9, i8 >>> 0 > i12 >>> 0 ? i8 : i12);
  i14 = HEAP32[i10 >> 2] | 0;
 } else {
  i14 = i6;
 }
 if (i12 >>> 0 < i14 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i9 >> 2] | 0;
 if (!i5) {
  i9 = 0;
  while (1) {
   i8 = i7 + (i9 + i3 << 3) | 0;
   i13 = i6 + (i9 + i14 << 3) | 0;
   i11 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i13 + 4 >> 2] = i11;
   i9 = i9 + 1 | 0;
   if (i9 >>> 0 >= i4 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i10 >> 2] = i12;
 i12 = HEAP32[i2 >> 2] | 0;
 i2 = i1 + 8 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 i9 = i10 + i4 | 0;
 i14 = HEAP32[i1 + 4 >> 2] | 0;
 if (i9 >>> 0 > i14 >>> 0) {
  i6 = i14 + 1 + (i14 >>> 2) | 0;
  i14 = i6 >>> 0 > 16 >>> 0 ? i6 : 16;
  __ZN3WTF6VectorIPKN7WebCore14SimpleFontDataELj2048ENS_15CrashOnOverflowEE15reserveCapacityEj(i1 | 0, i14 >>> 0 > i9 >>> 0 ? i14 : i9);
  i15 = HEAP32[i2 >> 2] | 0;
 } else {
  i15 = i10;
 }
 if (i9 >>> 0 < i15 >>> 0) {
  _WTFCrash();
 }
 i10 = HEAP32[i1 >> 2] | 0;
 if (i5) {
  HEAP32[i2 >> 2] = i9;
  return;
 } else {
  i16 = 0;
 }
 while (1) {
  HEAP32[i10 + (i16 + i15 << 2) >> 2] = HEAP32[i12 + (i16 + i3 << 2) >> 2];
  i16 = i16 + 1 | 0;
  if (i16 >>> 0 >= i4 >>> 0) {
   break;
  }
 }
 HEAP32[i2 >> 2] = i9;
 return;
}
function __ZN7WebCore11GlyphBuffer4swapEii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if (i6 >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = i1 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i8 + (i2 << 2) | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if (i6 >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAP32[i9 >> 2] = HEAP32[i8 + (i3 << 2) >> 2];
 if ((HEAP32[i5 >> 2] | 0) >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAP32[(HEAP32[i7 >> 2] | 0) + (i3 << 2) >> 2] = i10;
 i10 = i1 + 8216 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 if (i7 >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i5 = i1 + 8208 | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 i9 = i4 | 0;
 i6 = i8 + (i2 * 24 & -1) | 0;
 HEAP32[i9 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 HEAP32[i9 + 16 >> 2] = HEAP32[i6 + 16 >> 2];
 HEAP32[i9 + 20 >> 2] = HEAP32[i6 + 20 >> 2];
 if (i7 >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = i8 + (i3 * 24 & -1) | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 HEAP32[i6 + 16 >> 2] = HEAP32[i7 + 16 >> 2];
 HEAP32[i6 + 20 >> 2] = HEAP32[i7 + 20 >> 2];
 if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i10 = (HEAP32[i5 >> 2] | 0) + (i3 * 24 & -1) | 0;
 HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 HEAP32[i10 + 16 >> 2] = HEAP32[i9 + 16 >> 2];
 HEAP32[i10 + 20 >> 2] = HEAP32[i9 + 20 >> 2];
 i9 = i1 + 57384 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if (i10 >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i5 = i1 + 57376 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + (i2 << 3) | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i6 = HEAP32[i7 + 4 >> 2] | 0;
 if (i10 >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i10 = i1 + (i3 << 3) | 0;
 i1 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i7 + 4 >> 2] = i1;
 if ((HEAP32[i9 >> 2] | 0) >>> 0 > i3 >>> 0) {
  i9 = (HEAP32[i5 >> 2] | 0) + (i3 << 3) | 0;
  HEAP32[i9 >> 2] = i2;
  HEAP32[i9 + 4 >> 2] = i6;
  STACKTOP = i4;
  return;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZNK7WebCore4Font14drawSimpleTextEPNS_15GraphicsContextERKNS_7TextRunERKNS_10FloatPointEii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, d23 = +0, d24 = +0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 73792 | 0;
 i8 = i7 | 0;
 i9 = i7 + 73784 | 0;
 i10 = i8 + 12 | 0;
 i11 = i8 | 0;
 HEAP32[i11 >> 2] = i10;
 i12 = i8 + 4 | 0;
 HEAP32[i12 >> 2] = 2048;
 i13 = i8 + 8 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i8 + 8224 | 0;
 i15 = i8 + 8208 | 0;
 HEAP32[i15 >> 2] = i14;
 i16 = i8 + 8212 | 0;
 HEAP32[i16 >> 2] = 2048;
 i17 = i8 + 8216 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i8 + 57388 | 0;
 i19 = i8 + 57376 | 0;
 HEAP32[i19 >> 2] = i18;
 i20 = i8 + 57380 | 0;
 HEAP32[i20 >> 2] = 2048;
 i21 = i8 + 57384 | 0;
 HEAP32[i21 >> 2] = 0;
 HEAPF32[i8 + 73772 >> 2] = +0;
 HEAPF32[i8 + 73776 >> 2] = +0;
 d22 = +HEAPF32[i4 >> 2];
 d23 = d22 + +__ZNK7WebCore4Font33getGlyphsAndAdvancesForSimpleTextERKNS_7TextRunEiiRNS_11GlyphBufferENS0_20ForTextEmphasisOrNotE(i1, i3, i5, i6, i8, 0);
 if ((HEAP32[i13 >> 2] | 0) == 0) {
  d24 = +0;
 } else {
  d22 = +HEAPF32[i4 + 4 >> 2];
  i4 = i9 | 0;
  HEAPF32[i4 >> 2] = d23;
  HEAPF32[i9 + 4 >> 2] = d22;
  __ZNK7WebCore4Font15drawGlyphBufferEPNS_15GraphicsContextERKNS_7TextRunERKNS_11GlyphBufferERNS_10FloatPointE(i1, i2, i3, i8, i9);
  d24 = +HEAPF32[i4 >> 2] - d23;
 }
 if ((HEAP32[i21 >> 2] | 0) != 0) {
  HEAP32[i21 >> 2] = 0;
 }
 i21 = HEAP32[i19 >> 2] | 0;
 if (!((i18 | 0) == (i21 | 0) | (i21 | 0) == 0)) {
  HEAP32[i19 >> 2] = 0;
  HEAP32[i20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i21);
 }
 if ((HEAP32[i17 >> 2] | 0) != 0) {
  HEAP32[i17 >> 2] = 0;
 }
 i17 = HEAP32[i15 >> 2] | 0;
 if (!((i14 | 0) == (i17 | 0) | (i17 | 0) == 0)) {
  HEAP32[i15 >> 2] = 0;
  HEAP32[i16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i17);
 }
 if ((HEAP32[i13 >> 2] | 0) != 0) {
  HEAP32[i13 >> 2] = 0;
 }
 i13 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) == (i13 | 0) | (i13 | 0) == 0) {
  STACKTOP = i7;
  return +d24;
 }
 HEAP32[i11 >> 2] = 0;
 HEAP32[i12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i7;
 return +d24;
}
function __ZNK7WebCore4Font30drawEmphasisMarksForSimpleTextEPNS_15GraphicsContextERKNS_7TextRunERKN3WTF12AtomicStringERKNS_10FloatPointEii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, d23 = +0, d24 = +0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 73792 | 0;
 i9 = i8 | 0;
 i10 = i8 + 73784 | 0;
 i11 = i9 + 12 | 0;
 i12 = i9 | 0;
 HEAP32[i12 >> 2] = i11;
 i13 = i9 + 4 | 0;
 HEAP32[i13 >> 2] = 2048;
 i14 = i9 + 8 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i9 + 8224 | 0;
 i16 = i9 + 8208 | 0;
 HEAP32[i16 >> 2] = i15;
 i17 = i9 + 8212 | 0;
 HEAP32[i17 >> 2] = 2048;
 i18 = i9 + 8216 | 0;
 HEAP32[i18 >> 2] = 0;
 i19 = i9 + 57388 | 0;
 i20 = i9 + 57376 | 0;
 HEAP32[i20 >> 2] = i19;
 i21 = i9 + 57380 | 0;
 HEAP32[i21 >> 2] = 2048;
 i22 = i9 + 57384 | 0;
 HEAP32[i22 >> 2] = 0;
 HEAPF32[i9 + 73772 >> 2] = +0;
 HEAPF32[i9 + 73776 >> 2] = +0;
 d23 = +__ZNK7WebCore4Font33getGlyphsAndAdvancesForSimpleTextERKNS_7TextRunEiiRNS_11GlyphBufferENS0_20ForTextEmphasisOrNotE(i1, i3, i6, i7, i9, 1);
 if ((HEAP32[i14 >> 2] | 0) != 0) {
  d24 = +HEAPF32[i5 + 4 >> 2];
  HEAPF32[i10 >> 2] = d23 + +HEAPF32[i5 >> 2];
  HEAPF32[i10 + 4 >> 2] = d24;
  __ZNK7WebCore4Font17drawEmphasisMarksEPNS_15GraphicsContextERKNS_7TextRunERKNS_11GlyphBufferERKN3WTF12AtomicStringERKNS_10FloatPointE(i1, i2, i3, i9, i4, i10);
 }
 if ((HEAP32[i22 >> 2] | 0) != 0) {
  HEAP32[i22 >> 2] = 0;
 }
 i22 = HEAP32[i20 >> 2] | 0;
 if (!((i19 | 0) == (i22 | 0) | (i22 | 0) == 0)) {
  HEAP32[i20 >> 2] = 0;
  HEAP32[i21 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i22);
 }
 if ((HEAP32[i18 >> 2] | 0) != 0) {
  HEAP32[i18 >> 2] = 0;
 }
 i18 = HEAP32[i16 >> 2] | 0;
 if (!((i15 | 0) == (i18 | 0) | (i18 | 0) == 0)) {
  HEAP32[i16 >> 2] = 0;
  HEAP32[i17 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i18);
 }
 if ((HEAP32[i14 >> 2] | 0) != 0) {
  HEAP32[i14 >> 2] = 0;
 }
 i14 = HEAP32[i12 >> 2] | 0;
 if ((i11 | 0) == (i14 | 0) | (i14 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 HEAP32[i12 >> 2] = 0;
 HEAP32[i13 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i14);
 STACKTOP = i8;
 return;
}
function __ZNK7WebCore4Font24getEmphasisMarkGlyphDataERKN3WTF12AtomicStringERNS_9GlyphDataE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i2 = HEAP32[i6 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i8 = i6 + 8 | 0;
 if ((HEAP32[i6 + 16 >> 2] & 32 | 0) == 0) {
  i9 = HEAP16[HEAP32[i8 >> 2] >> 1] | 0;
 } else {
  i9 = HEAPU8[HEAP32[i8 >> 2] | 0] | 0;
 }
 i8 = i9 & 65535;
 do {
  if ((i8 & 63488 | 0) == 55296) {
   if ((i8 & 1024 | 0) != 0 | i2 >>> 0 < 2 >>> 0) {
    i7 = 0;
    STACKTOP = i4;
    return i7 | 0;
   }
   i9 = i6 + 8 | 0;
   if ((HEAP32[i6 + 16 >> 2] & 32 | 0) == 0) {
    i10 = HEAP16[(HEAP32[i9 >> 2] | 0) + 2 >> 1] | 0;
   } else {
    i10 = HEAPU8[(HEAP32[i9 >> 2] | 0) + 1 | 0] | 0;
   }
   i9 = i10 & 65535;
   if ((i9 & 64512 | 0) == 56320) {
    i11 = (i8 << 10) - 56613888 + i9 | 0;
    break;
   } else {
    i7 = 0;
    STACKTOP = i4;
    return i7 | 0;
   }
  } else {
   i11 = i8;
  }
 } while (0);
 __ZNK7WebCore10FontGlyphs28glyphDataAndPageForCharacterERKNS_15FontDescriptionEibNS_15FontDataVariantE(i5, HEAP32[i1 + 24 >> 2] | 0, i1 | 0, i11, 0, 3);
 i11 = i5;
 i5 = HEAP32[i11 + 4 >> 2] | 0;
 i1 = i3;
 HEAP32[i1 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i1 + 4 >> 2] = i5;
 i7 = 1;
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN3WTF6VectorIN7WebCore9FloatSizeELj2048ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i7 = i5 + (i6 << 3) | 0;
 do {
  if (i2 >>> 0 > 2048 >>> 0) {
   if (i2 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   } else {
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
    HEAP32[i3 >> 2] = i8 >>> 3;
    i9 = __ZN3WTF10fastMallocEj(i8) | 0;
    HEAP32[i4 >> 2] = i9;
    i10 = i9;
    break;
   }
  } else {
   i9 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i9;
   HEAP32[i3 >> 2] = 2048;
   i10 = i9;
  }
 } while (0);
 if ((i6 | 0) != 0) {
  i6 = i5;
  i2 = i10;
  while (1) {
   i10 = i6;
   i9 = i2;
   i8 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i9 + 4 >> 2] = i8;
   i8 = i6 + 8 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   } else {
    i6 = i8;
    i2 = i2 + 8 | 0;
   }
  }
 }
 if ((i1 + 12 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN3WTF6VectorI13cairo_glyph_tLj2048ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i2 >>> 0 > 2048 >>> 0) {
   if (i2 >>> 0 > 178956970 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 24 & -1) | 0;
    HEAP32[i3 >> 2] = (i7 >>> 0) / 24 & -1;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 16 | 0;
    break;
   }
  } else {
   i8 = i1 + 16 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 2048;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 * 24 & -1) | 0;
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF6VectorIPKN7WebCore14SimpleFontDataELj2048ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i2 >>> 0 > 2048 >>> 0) {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i7 >>> 2;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 2048;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 << 2) | 0;
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore4Font18emphasisMarkHeightERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = __ZN7WebCore9fontCacheEv() | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 HEAP16[i4 >> 1] = 0;
 i5 = i4 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if (__ZNK7WebCore4Font24getEmphasisMarkGlyphDataERKN3WTF12AtomicStringERNS_9GlyphDataE(i1, i2, i4) | 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i7 = 0;
    break;
   }
   i8 = _round(+(+HEAPF32[i6 + 16 >> 2])) | 0;
   i7 = (_round(+(+HEAPF32[i6 + 20 >> 2])) | 0) + i8 | 0;
  } else {
   i7 = 0;
  }
 } while (0);
 i5 = __ZN7WebCore9fontCacheEv() | 0;
 i4 = i5 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i2 | 0) != 0) {
  STACKTOP = i3;
  return i7 | 0;
 }
 __ZN7WebCore9FontCache29purgeInactiveFontDataIfNeededEv(i5);
 STACKTOP = i3;
 return i7 | 0;
}
function __ZNK7WebCore4Font31primaryFontHasGlyphForCharacterEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 >>> 8;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 i5 = i4 + 44 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i4, i1 | 0, 0) | 0;
  i1 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 1](i7, 32) | 0;
  HEAP32[i5 >> 2] = i1;
  i8 = i1;
 } else {
  i8 = i6;
 }
 i6 = HEAP32[(__ZN7WebCore17GlyphPageTreeNode8getChildEPKNS_8FontDataEj(__ZN7WebCore17GlyphPageTreeNode7getRootEj(i3) | 0, i8 | 0, i3) | 0) + 24 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i9 = 0;
  return i9 | 0;
 }
 i3 = i2 & 255;
 i2 = HEAP32[i6 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i10 = HEAP32[i6 + 524 + (i3 << 2) >> 2] | 0;
 } else {
  i10 = (HEAP16[i6 + 12 + (i3 << 1) >> 1] | 0) == 0 ? 0 : i2;
 }
 i9 = (i10 | 0) != 0;
 return i9 | 0;
}
function __ZN3WTF6OwnPtrIN7WebCore15GlyphMetricsMapINS1_9FloatRectEEEEaSERKNS_10PassOwnPtrIS4_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  return i1 | 0;
 }
 i2 = HEAP32[i4 + 4100 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) != 0) {
   i5 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i5 | 0) > 0) {
    i6 = 0;
    while (1) {
     do {
      if ((HEAP32[i3 + (i6 << 3) >> 2] | 0) != -1) {
       i7 = HEAP32[i3 + (i6 << 3) + 4 >> 2] | 0;
       if ((i7 | 0) == 0) {
        break;
       }
       __ZdlPv(i7);
      }
     } while (0);
     i6 = i6 + 1 | 0;
     if ((i6 | 0) >= (i5 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZdlPv(i4 | 0);
 return i1 | 0;
}
function __ZNK7WebCore4Font19emphasisMarkDescentERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = __ZN7WebCore9fontCacheEv() | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 HEAP16[i4 >> 1] = 0;
 i5 = i4 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if (__ZNK7WebCore4Font24getEmphasisMarkGlyphDataERKN3WTF12AtomicStringERNS_9GlyphDataE(i1, i2, i4) | 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i7 = 0;
    break;
   }
   i7 = _round(+(+HEAPF32[i6 + 20 >> 2])) | 0;
  } else {
   i7 = 0;
  }
 } while (0);
 i5 = __ZN7WebCore9fontCacheEv() | 0;
 i4 = i5 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i2 | 0) != 0) {
  STACKTOP = i3;
  return i7 | 0;
 }
 __ZN7WebCore9FontCache29purgeInactiveFontDataIfNeededEv(i5);
 STACKTOP = i3;
 return i7 | 0;
}
function __ZNK7WebCore4Font18emphasisMarkAscentERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = __ZN7WebCore9fontCacheEv() | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 HEAP16[i4 >> 1] = 0;
 i5 = i4 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if (__ZNK7WebCore4Font24getEmphasisMarkGlyphDataERKN3WTF12AtomicStringERNS_9GlyphDataE(i1, i2, i4) | 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i7 = 0;
    break;
   }
   i7 = _round(+(+HEAPF32[i6 + 16 >> 2])) | 0;
  } else {
   i7 = 0;
  }
 } while (0);
 i5 = __ZN7WebCore9fontCacheEv() | 0;
 i4 = i5 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i2 | 0) != 0) {
  STACKTOP = i3;
  return i7 | 0;
 }
 __ZN7WebCore9FontCache29purgeInactiveFontDataIfNeededEv(i5);
 STACKTOP = i3;
 return i7 | 0;
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
function dynCall_fiif(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 return +FUNCTION_TABLE_fiif[i1 & 1](i2 | 0, i3 | 0, +d4);
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
function b1(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(1);
 return +0;
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
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_fiif = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viiiiiii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_fiif: dynCall_fiif, dynCall_ii: dynCall_ii, dynCall_viiiiiii: dynCall_viiiiiii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_fiif": invoke_fiif, "invoke_ii": invoke_ii, "invoke_viiiiiii": invoke_viiiiiii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "_floorf": _floorf, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_fiif = Module["dynCall_fiif"] = asm["dynCall_fiif"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore4Font26selectionRectForSimpleTextERKNS_7TextRunERKNS_10FloatPointEiii","_strlen","__ZN3WTF6OwnPtrIN7WebCore15GlyphMetricsMapINS1_9FloatRectEEEEaSERKNS_10PassOwnPtrIS4_EE","__ZNK7WebCore4Font15drawGlyphBufferEPNS_15GraphicsContextERKNS_7TextRunERKNS_11GlyphBufferERNS_10FloatPointE","__ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapINS3_9FloatRectEE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIjEENS_7HashMapIiS8_SD_NS_10HashTraitsIiEENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_","__ZNK7WebCore4Font18emphasisMarkHeightERKN3WTF12AtomicStringE","__ZNK7WebCore4Font30drawEmphasisMarksForSimpleTextEPNS_15GraphicsContextERKNS_7TextRunERKN3WTF12AtomicStringERKNS_10FloatPointEii","__ZNK7WebCore4Font30offsetForPositionForSimpleTextERKNS_7TextRunEfb","__ZN3WTF6VectorI13cairo_glyph_tLj2048ENS_15CrashOnOverflowEE15reserveCapacityEj","_memset","__ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_","__ZN3WTF6VectorIN7WebCore9FloatSizeELj2048ENS_15CrashOnOverflowEE15reserveCapacityEj","_memcpy","__ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj","__ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapINS3_9FloatRectEE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIjEENS_7HashMapIiS8_SD_NS_10HashTraitsIiEENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EEiNS_10PassOwnPtrIS7_EEEENS_18HashTableAddResultINS_17HashTableIteratorIiS9_SB_SD_SJ_SG_EEEEOT0_OT1_","__ZNK7WebCore4Font24getEmphasisMarkGlyphDataERKN3WTF12AtomicStringERNS_9GlyphDataE","__ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EEiNS_10PassOwnPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIiS8_SA_SC_SI_SF_EEEEOT0_OT1_","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCoreL21offsetToMiddleOfGlyphEPKNS_14SimpleFontDataEt","__ZNK7WebCore4Font14drawSimpleTextEPNS_15GraphicsContextERKNS_7TextRunERKNS_10FloatPointEii","__ZN7WebCore11GlyphBuffer3addEPKS0_ii","__ZN7WebCore15GlyphMetricsMapINS_9FloatRectEE18locatePageSlowCaseEj","__ZNK7WebCore4Font17drawEmphasisMarksEPNS_15GraphicsContextERKNS_7TextRunERKNS_11GlyphBufferERKN3WTF12AtomicStringERKNS_10FloatPointE","__ZNK7WebCore4Font19emphasisMarkDescentERKN3WTF12AtomicStringE","__ZNK7WebCore4Font23floatWidthForSimpleTextERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE","__ZNK7WebCore4Font18emphasisMarkAscentERKN3WTF12AtomicStringE","__ZN7WebCore11GlyphBuffer4swapEii","__ZNK7WebCore4Font33getGlyphsAndAdvancesForSimpleTextERKNS_7TextRunEiiRNS_11GlyphBufferENS0_20ForTextEmphasisOrNotE","__ZNK7WebCore4Font31primaryFontHasGlyphForCharacterEi","__ZN7WebCore11GlyphBuffer3addEtPKNS_14SimpleFontDataEfPKNS_9FloatSizeE","__ZN3WTF6VectorIPKN7WebCore14SimpleFontDataELj2048ENS_15CrashOnOverflowEE15reserveCapacityEj"]

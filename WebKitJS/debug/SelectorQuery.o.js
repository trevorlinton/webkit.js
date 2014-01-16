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
var __ZN7WebCore13SelectorQueryC1ERKNS_15CSSSelectorListE;
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
  var __ZN3WTF8starAtomE=env.__ZN3WTF8starAtomE|0;
  var __ZTVN7WebCore17StaticElementListE=env.__ZTVN7WebCore17StaticElementListE|0;
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
function __ZNK7WebCore16SelectorDataList7executeINS_37AllElementExtractorSelectorQueryTraitEEEvRNS_13ContainerNodeERNT_10OutputTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 1) {
  i6 = i2 + 36 | 0;
  while (1) {
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i8 = 207;
    break;
   }
   if ((HEAP32[i7 + 12 >> 2] & 4 | 0) == 0) {
    i6 = i7 + 28 | 0;
   } else {
    break;
   }
  }
  if ((i8 | 0) == 207) {
   return;
  }
  i6 = i1 | 0;
  i9 = i3 + 8 | 0;
  i10 = i3 + 4 | 0;
  i11 = i3 | 0;
  i12 = i2 | 0;
  i13 = i7;
  L9 : while (1) {
   i7 = i13;
   i14 = 0;
   while (1) {
    if (i14 >>> 0 >= i5 >>> 0) {
     break;
    }
    if ((HEAP32[i4 >> 2] | 0) >>> 0 <= i14 >>> 0) {
     i8 = 157;
     break L9;
    }
    if (__ZNK7WebCore16SelectorDataList15selectorMatchesERKNS0_12SelectorDataERNS_7ElementERKNS_13ContainerNodeE(0, (HEAP32[i6 >> 2] | 0) + (i14 << 3) | 0, i7, i2) | 0) {
     i8 = 159;
     break;
    } else {
     i14 = i14 + 1 | 0;
    }
   }
   do {
    if ((i8 | 0) == 159) {
     i8 = 0;
     i14 = HEAP32[i9 >> 2] | 0;
     if ((i14 | 0) == (HEAP32[i10 >> 2] | 0)) {
      __ZN3WTF6VectorINS_3RefIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i14 + 1 | 0);
      HEAP32[(HEAP32[i11 >> 2] | 0) + (HEAP32[i9 >> 2] << 2) >> 2] = i7;
      i15 = i13 + 8 | 0;
      HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
      HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
      break;
     } else {
      HEAP32[(HEAP32[i11 >> 2] | 0) + (i14 << 2) >> 2] = i7;
      i14 = i13 + 8 | 0;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
      HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i13 + 36 >> 2] | 0;
   do {
    if ((i7 | 0) == 0) {
     if ((i13 | 0) == (i12 | 0)) {
      i8 = 208;
      break L9;
     }
     i14 = HEAP32[i13 + 28 >> 2] | 0;
     if ((i14 | 0) != 0) {
      i16 = i14;
      break;
     }
     i14 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i13, i12) | 0;
     if ((i14 | 0) == 0) {
      i8 = 209;
      break L9;
     } else {
      i16 = i14;
     }
    } else {
     i16 = i7;
    }
   } while (0);
   if ((HEAP32[i16 + 12 >> 2] & 4 | 0) == 0) {
    i17 = i16;
   } else {
    i13 = i16;
    continue;
   }
   while (1) {
    if ((i17 | 0) == (i12 | 0)) {
     i8 = 210;
     break L9;
    }
    i7 = HEAP32[i17 + 28 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i14 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i17, i12) | 0;
     if ((i14 | 0) == 0) {
      i8 = 211;
      break L9;
     } else {
      i18 = i14;
     }
    } else {
     i18 = i7;
    }
    if ((HEAP32[i18 + 12 >> 2] & 4 | 0) == 0) {
     i17 = i18;
    } else {
     i13 = i18;
     continue L9;
    }
   }
  }
  if ((i8 | 0) == 157) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i8 | 0) == 208) {
   return;
  } else if ((i8 | 0) == 209) {
   return;
  } else if ((i8 | 0) == 210) {
   return;
  } else if ((i8 | 0) == 211) {
   return;
  }
 }
 i18 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[i18 >> 2] | 0;
 i13 = i2 + 12 | 0;
 L39 : do {
  if ((HEAP32[i13 >> 2] & 256 | 0) != 0) {
   i17 = i2 + 20 | 0;
   i12 = HEAP32[i17 >> 2] | 0;
   if ((HEAP32[(HEAP32[i12 + 8 >> 2] | 0) + 664 >> 2] | 0) == 0 | (i1 | 0) == 0) {
    break;
   } else {
    i19 = i1;
   }
   while (1) {
    i16 = HEAP32[i19 >> 2] | 0;
    if ((i16 & 120 | 0) == 16) {
     break;
    }
    if ((i16 & 7 | 0) != 4) {
     break L39;
    }
    i16 = (HEAP8[i19 + 2 | 0] & 2) != 0 ? 0 : i19 + 8 | 0;
    if ((i16 | 0) == 0) {
     break L39;
    } else {
     i19 = i16;
    }
   }
   if ((i19 | 0) == 0) {
    break;
   }
   i16 = i19 + 4 | 0;
   if ((HEAP8[i19 + 2 | 0] & 4) == 0) {
    i20 = i16 | 0;
   } else {
    i20 = (HEAP32[i16 >> 2] | 0) + 4 | 0;
   }
   i16 = i20;
   i9 = i2 | 0;
   i11 = HEAP32[i12 + 20 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i10 = HEAP32[i20 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     i6 = HEAP32[i11 >> 2] | 0;
     if ((i6 | 0) == 0) {
      i4 = HEAP32[i11 + 4 >> 2] | 0;
      i21 = i4 * 24 & -1 | 0;
      i22 = 0;
      i23 = i4;
     } else {
      i4 = HEAP32[i11 + 8 >> 2] | 0;
      i5 = i10;
      i7 = i5 + ~(i5 << 15) | 0;
      i5 = (i7 >>> 10 ^ i7) * 9 & -1;
      i7 = i5 >>> 6 ^ i5;
      i5 = i7 + ~(i7 << 11) | 0;
      i7 = i5 >>> 16 ^ i5;
      i5 = i4 & i7;
      i14 = i6 + (i5 * 24 & -1) | 0;
      i15 = HEAP32[i14 >> 2] | 0;
      L56 : do {
       if ((i15 | 0) == (i10 | 0)) {
        i24 = i14;
       } else {
        i25 = (i7 >>> 23) + ~i7 | 0;
        i26 = i25 << 12 ^ i25;
        i25 = i26 >>> 7 ^ i26;
        i26 = i25 << 2 ^ i25;
        i25 = i26 >>> 20 ^ i26 | 1;
        i26 = 0;
        i27 = i5;
        i28 = i15;
        while (1) {
         if ((i28 | 0) == 0) {
          i24 = 0;
          break L56;
         }
         i29 = (i26 | 0) == 0 ? i25 : i26;
         i30 = i29 + i27 & i4;
         i31 = i6 + (i30 * 24 & -1) | 0;
         i32 = HEAP32[i31 >> 2] | 0;
         if ((i32 | 0) == (i10 | 0)) {
          i24 = i31;
          break;
         } else {
          i26 = i29;
          i27 = i30;
          i28 = i32;
         }
        }
       }
      } while (0);
      i10 = HEAP32[i11 + 4 >> 2] | 0;
      i21 = (i24 | 0) == 0 ? i6 + (i10 * 24 & -1) | 0 : i24;
      i22 = i6;
      i23 = i10;
     }
     if ((i21 | 0) == (i22 + (i23 * 24 & -1) | 0)) {
      break;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) >>> 0 <= 1 >>> 0) {
      break;
     }
     i10 = __ZNK7WebCore9TreeScope18getAllElementsByIdERKN3WTF12AtomicStringE(i12, i16) | 0;
     i4 = i10 + 8 | 0;
     i15 = HEAP32[i4 >> 2] | 0;
     i5 = HEAP32[i17 >> 2] | 0;
     do {
      if ((HEAP32[i5 + 8 >> 2] | 0) == (i9 | 0)) {
       i33 = 1;
      } else {
       if ((HEAP32[i13 >> 2] & 4096 | 0) == 0) {
        i33 = 0;
        break;
       }
       i33 = (HEAP32[i5 + 4 >> 2] | 0) == (i2 | 0);
      }
     } while (0);
     if ((i15 | 0) == 0) {
      return;
     }
     i5 = i10 | 0;
     i6 = i3 + 8 | 0;
     i7 = i3 + 4 | 0;
     i14 = i3 | 0;
     if (i33) {
      i28 = 0;
      i27 = i15;
      while (1) {
       if (i27 >>> 0 <= i28 >>> 0) {
        i8 = 172;
        break;
       }
       i26 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i28 << 2) >> 2] | 0;
       do {
        if (__ZNK7WebCore16SelectorDataList15selectorMatchesERKNS0_12SelectorDataERNS_7ElementERKNS_13ContainerNodeE(0, i18, i26, i2) | 0) {
         i25 = HEAP32[i6 >> 2] | 0;
         if ((i25 | 0) == (HEAP32[i7 >> 2] | 0)) {
          __ZN3WTF6VectorINS_3RefIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i25 + 1 | 0);
          HEAP32[(HEAP32[i14 >> 2] | 0) + (HEAP32[i6 >> 2] << 2) >> 2] = i26;
          i32 = i26 + 8 | 0;
          HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
          HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
          break;
         } else {
          HEAP32[(HEAP32[i14 >> 2] | 0) + (i25 << 2) >> 2] = i26;
          i25 = i26 + 8 | 0;
          HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
          HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
          break;
         }
        }
       } while (0);
       i26 = i28 + 1 | 0;
       if (i26 >>> 0 >= i15 >>> 0) {
        i8 = 175;
        break;
       }
       i28 = i26;
       i27 = HEAP32[i4 >> 2] | 0;
      }
      if ((i8 | 0) == 172) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      } else if ((i8 | 0) == 175) {
       return;
      }
     } else {
      i34 = 0;
      i35 = i15;
     }
     while (1) {
      if (i35 >>> 0 <= i34 >>> 0) {
       i8 = 173;
       break;
      }
      i27 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i34 << 2) >> 2] | 0;
      do {
       if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i27 | 0, i9) | 0) {
        if (!(__ZNK7WebCore16SelectorDataList15selectorMatchesERKNS0_12SelectorDataERNS_7ElementERKNS_13ContainerNodeE(0, i18, i27, i2) | 0)) {
         break;
        }
        i28 = HEAP32[i6 >> 2] | 0;
        if ((i28 | 0) == (HEAP32[i7 >> 2] | 0)) {
         __ZN3WTF6VectorINS_3RefIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i28 + 1 | 0);
         HEAP32[(HEAP32[i14 >> 2] | 0) + (HEAP32[i6 >> 2] << 2) >> 2] = i27;
         i10 = i27 + 8 | 0;
         HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
         HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
         break;
        } else {
         HEAP32[(HEAP32[i14 >> 2] | 0) + (i28 << 2) >> 2] = i27;
         i28 = i27 + 8 | 0;
         HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
         HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
         break;
        }
       }
      } while (0);
      i27 = i34 + 1 | 0;
      if (i27 >>> 0 >= i15 >>> 0) {
       i8 = 176;
       break;
      }
      i34 = i27;
      i35 = HEAP32[i4 >> 2] | 0;
     }
     if ((i8 | 0) == 173) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i8 | 0) == 176) {
      return;
     }
    }
   } while (0);
   i11 = __ZNK7WebCore9TreeScope14getElementByIdERKN3WTF12AtomicStringE(i12, i16) | 0;
   if ((i11 | 0) == 0) {
    return;
   }
   i4 = HEAP32[i17 >> 2] | 0;
   do {
    if ((HEAP32[i4 + 8 >> 2] | 0) != (i9 | 0)) {
     if ((HEAP32[i13 >> 2] & 4096 | 0) != 0) {
      if ((HEAP32[i4 + 4 >> 2] | 0) == (i2 | 0)) {
       break;
      }
     }
     if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i11 | 0, i9) | 0) {
      break;
     }
     return;
    }
   } while (0);
   if (!(__ZNK7WebCore16SelectorDataList15selectorMatchesERKNS0_12SelectorDataERNS_7ElementERKNS_13ContainerNodeE(0, i18, i11, i2) | 0)) {
    return;
   }
   i9 = i3 + 8 | 0;
   i4 = HEAP32[i9 >> 2] | 0;
   if ((i4 | 0) == (HEAP32[i3 + 4 >> 2] | 0)) {
    __ZN3WTF6VectorINS_3RefIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i4 + 1 | 0);
    HEAP32[(HEAP32[i3 >> 2] | 0) + (HEAP32[i9 >> 2] << 2) >> 2] = i11;
    i17 = i11 + 8 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
    return;
   } else {
    HEAP32[(HEAP32[i3 >> 2] | 0) + (i4 << 2) >> 2] = i11;
    i4 = i11 + 8 | 0;
    HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
    return;
   }
  }
 } while (0);
 i13 = HEAP8[i1 + 2 | 0] | 0;
 do {
  if ((i13 & 2) != 0) {
   if ((HEAP32[i1 >> 2] & 120 | 0) != 8) {
    if ((HEAP32[i1 >> 2] & 120 | 0) != 24) {
     break;
    }
    i35 = i1 + 4 | 0;
    if ((i13 & 4) == 0) {
     i36 = i35 | 0;
    } else {
     i36 = (HEAP32[i35 >> 2] | 0) + 4 | 0;
    }
    i35 = i2 + 36 | 0;
    while (1) {
     i37 = HEAP32[i35 >> 2] | 0;
     if ((i37 | 0) == 0) {
      i8 = 197;
      break;
     }
     if ((HEAP32[i37 + 12 >> 2] & 4 | 0) == 0) {
      i35 = i37 + 28 | 0;
     } else {
      break;
     }
    }
    if ((i8 | 0) == 197) {
     return;
    }
    i35 = i2 | 0;
    i11 = i3 + 8 | 0;
    i34 = i3 + 4 | 0;
    i33 = i3 | 0;
    i21 = i37;
    L136 : while (1) {
     i23 = i21;
     i22 = HEAP32[i21 + 48 >> 2] | 0;
     L138 : do {
      if ((i22 | 0) != 0) {
       i24 = HEAP32[i22 + 12 >> 2] | 0;
       if ((i24 | 0) == 0) {
        break;
       }
       i20 = i24 + 12 | 0;
       i19 = HEAP32[i36 >> 2] | 0;
       i9 = i24 + 8 | 0;
       i24 = 0;
       while (1) {
        if ((HEAP32[i20 + (i24 << 2) >> 2] | 0) == (i19 | 0)) {
         break;
        }
        i24 = i24 + 1 | 0;
        if (i24 >>> 0 >= (HEAP32[i9 >> 2] | 0) >>> 0) {
         break L138;
        }
       }
       i9 = HEAP32[i11 >> 2] | 0;
       if ((i9 | 0) == (HEAP32[i34 >> 2] | 0)) {
        __ZN3WTF6VectorINS_3RefIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i9 + 1 | 0);
        HEAP32[(HEAP32[i33 >> 2] | 0) + (HEAP32[i11 >> 2] << 2) >> 2] = i23;
        i24 = i21 + 8 | 0;
        HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
        HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
        break;
       } else {
        HEAP32[(HEAP32[i33 >> 2] | 0) + (i9 << 2) >> 2] = i23;
        i9 = i21 + 8 | 0;
        HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
        HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
        break;
       }
      }
     } while (0);
     i23 = HEAP32[i21 + 36 >> 2] | 0;
     do {
      if ((i23 | 0) == 0) {
       if ((i21 | 0) == (i35 | 0)) {
        i8 = 198;
        break L136;
       }
       i22 = HEAP32[i21 + 28 >> 2] | 0;
       if ((i22 | 0) != 0) {
        i38 = i22;
        break;
       }
       i22 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i21, i35) | 0;
       if ((i22 | 0) == 0) {
        i8 = 199;
        break L136;
       } else {
        i38 = i22;
       }
      } else {
       i38 = i23;
      }
     } while (0);
     if ((HEAP32[i38 + 12 >> 2] & 4 | 0) == 0) {
      i39 = i38;
     } else {
      i21 = i38;
      continue;
     }
     while (1) {
      if ((i39 | 0) == (i35 | 0)) {
       i8 = 200;
       break L136;
      }
      i23 = HEAP32[i39 + 28 >> 2] | 0;
      if ((i23 | 0) == 0) {
       i22 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i39, i35) | 0;
       if ((i22 | 0) == 0) {
        i8 = 201;
        break L136;
       } else {
        i40 = i22;
       }
      } else {
       i40 = i23;
      }
      if ((HEAP32[i40 + 12 >> 2] & 4 | 0) == 0) {
       i39 = i40;
      } else {
       i21 = i40;
       continue L136;
      }
     }
    }
    if ((i8 | 0) == 198) {
     return;
    } else if ((i8 | 0) == 199) {
     return;
    } else if ((i8 | 0) == 200) {
     return;
    } else if ((i8 | 0) == 201) {
     return;
    }
   }
   i21 = HEAP32[i1 + 4 >> 2] | 0;
   i35 = i21 + 12 | 0;
   i11 = i21 + 16 | 0;
   i21 = HEAP32[i11 >> 2] | 0;
   if ((i21 | 0) != (HEAP32[__ZN3WTF8starAtomE >> 2] | 0)) {
    i33 = i2 + 36 | 0;
    while (1) {
     i41 = HEAP32[i33 >> 2] | 0;
     if ((i41 | 0) == 0) {
      i8 = 192;
      break;
     }
     if ((HEAP32[i41 + 12 >> 2] & 4 | 0) == 0) {
      i33 = i41 + 28 | 0;
     } else {
      break;
     }
    }
    if ((i8 | 0) == 192) {
     return;
    }
    i33 = i35 | 0;
    i34 = i3 + 8 | 0;
    i23 = i3 + 4 | 0;
    i22 = i3 | 0;
    i9 = i2 | 0;
    i24 = i41;
    i19 = i21;
    L174 : while (1) {
     i20 = i24;
     i4 = HEAP32[i24 + 44 >> 2] | 0;
     do {
      if ((HEAP32[i4 + 16 >> 2] | 0) == (i19 | 0)) {
       i17 = HEAP32[i33 >> 2] | 0;
       if ((i17 | 0) != (HEAP32[__ZN3WTF8starAtomE >> 2] | 0)) {
        if ((HEAP32[i4 + 12 >> 2] | 0) != (i17 | 0)) {
         break;
        }
       }
       i17 = HEAP32[i34 >> 2] | 0;
       if ((i17 | 0) == (HEAP32[i23 >> 2] | 0)) {
        __ZN3WTF6VectorINS_3RefIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i17 + 1 | 0);
        HEAP32[(HEAP32[i22 >> 2] | 0) + (HEAP32[i34 >> 2] << 2) >> 2] = i20;
        i16 = i24 + 8 | 0;
        HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
        HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
        break;
       } else {
        HEAP32[(HEAP32[i22 >> 2] | 0) + (i17 << 2) >> 2] = i20;
        i17 = i24 + 8 | 0;
        HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
        HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
        break;
       }
      }
     } while (0);
     i20 = HEAP32[i24 + 36 >> 2] | 0;
     do {
      if ((i20 | 0) == 0) {
       if ((i24 | 0) == (i9 | 0)) {
        i8 = 193;
        break L174;
       }
       i4 = HEAP32[i24 + 28 >> 2] | 0;
       if ((i4 | 0) != 0) {
        i42 = i4;
        break;
       }
       i4 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i24, i9) | 0;
       if ((i4 | 0) == 0) {
        i8 = 194;
        break L174;
       } else {
        i42 = i4;
       }
      } else {
       i42 = i20;
      }
     } while (0);
     if ((HEAP32[i42 + 12 >> 2] & 4 | 0) == 0) {
      i20 = i42;
      while (1) {
       if ((i20 | 0) == (i9 | 0)) {
        i8 = 195;
        break L174;
       }
       i4 = HEAP32[i20 + 28 >> 2] | 0;
       if ((i4 | 0) == 0) {
        i17 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i20, i9) | 0;
        if ((i17 | 0) == 0) {
         i8 = 196;
         break L174;
        } else {
         i43 = i17;
        }
       } else {
        i43 = i4;
       }
       if ((HEAP32[i43 + 12 >> 2] & 4 | 0) == 0) {
        i20 = i43;
       } else {
        i44 = i43;
        break;
       }
      }
     } else {
      i44 = i42;
     }
     i24 = i44;
     i19 = HEAP32[i11 >> 2] | 0;
    }
    if ((i8 | 0) == 193) {
     return;
    } else if ((i8 | 0) == 194) {
     return;
    } else if ((i8 | 0) == 195) {
     return;
    } else if ((i8 | 0) == 196) {
     return;
    }
   }
   i11 = i35 | 0;
   i19 = HEAP32[i11 >> 2] | 0;
   i24 = i2 + 36 | 0;
   if ((i19 | 0) == (i21 | 0)) {
    i9 = i24;
    while (1) {
     i45 = HEAP32[i9 >> 2] | 0;
     if ((i45 | 0) == 0) {
      i8 = 187;
      break;
     }
     if ((HEAP32[i45 + 12 >> 2] & 4 | 0) == 0) {
      i9 = i45 + 28 | 0;
     } else {
      break;
     }
    }
    if ((i8 | 0) == 187) {
     return;
    }
    i9 = i3 + 8 | 0;
    i21 = i3 + 4 | 0;
    i35 = i3 | 0;
    i34 = i2 | 0;
    i22 = i45;
    L211 : while (1) {
     i23 = i22;
     i33 = HEAP32[i9 >> 2] | 0;
     if ((i33 | 0) == (HEAP32[i21 >> 2] | 0)) {
      __ZN3WTF6VectorINS_3RefIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i33 + 1 | 0);
      HEAP32[(HEAP32[i35 >> 2] | 0) + (HEAP32[i9 >> 2] << 2) >> 2] = i23;
      i20 = i22 + 8 | 0;
      HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
     } else {
      HEAP32[(HEAP32[i35 >> 2] | 0) + (i33 << 2) >> 2] = i23;
      i23 = i22 + 8 | 0;
      HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
     }
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
     i23 = HEAP32[i22 + 36 >> 2] | 0;
     do {
      if ((i23 | 0) == 0) {
       if ((i22 | 0) == (i34 | 0)) {
        i8 = 188;
        break L211;
       }
       i33 = HEAP32[i22 + 28 >> 2] | 0;
       if ((i33 | 0) != 0) {
        i46 = i33;
        break;
       }
       i33 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i22, i34) | 0;
       if ((i33 | 0) == 0) {
        i8 = 189;
        break L211;
       } else {
        i46 = i33;
       }
      } else {
       i46 = i23;
      }
     } while (0);
     if ((HEAP32[i46 + 12 >> 2] & 4 | 0) == 0) {
      i47 = i46;
     } else {
      i22 = i46;
      continue;
     }
     while (1) {
      if ((i47 | 0) == (i34 | 0)) {
       i8 = 190;
       break L211;
      }
      i23 = HEAP32[i47 + 28 >> 2] | 0;
      if ((i23 | 0) == 0) {
       i33 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i47, i34) | 0;
       if ((i33 | 0) == 0) {
        i8 = 191;
        break L211;
       } else {
        i48 = i33;
       }
      } else {
       i48 = i23;
      }
      if ((HEAP32[i48 + 12 >> 2] & 4 | 0) == 0) {
       i47 = i48;
      } else {
       i22 = i48;
       continue L211;
      }
     }
    }
    if ((i8 | 0) == 188) {
     return;
    } else if ((i8 | 0) == 189) {
     return;
    } else if ((i8 | 0) == 190) {
     return;
    } else if ((i8 | 0) == 191) {
     return;
    }
   } else {
    i49 = i24;
   }
   while (1) {
    i50 = HEAP32[i49 >> 2] | 0;
    if ((i50 | 0) == 0) {
     i8 = 182;
     break;
    }
    if ((HEAP32[i50 + 12 >> 2] & 4 | 0) == 0) {
     i49 = i50 + 28 | 0;
    } else {
     break;
    }
   }
   if ((i8 | 0) == 182) {
    return;
   }
   i24 = i3 + 8 | 0;
   i22 = i3 + 4 | 0;
   i34 = i3 | 0;
   i9 = i2 | 0;
   i35 = i50;
   i21 = i19;
   L239 : while (1) {
    i23 = i35;
    do {
     if ((HEAP32[(HEAP32[i35 + 44 >> 2] | 0) + 12 >> 2] | 0) == (i21 | 0)) {
      i33 = HEAP32[i24 >> 2] | 0;
      if ((i33 | 0) == (HEAP32[i22 >> 2] | 0)) {
       __ZN3WTF6VectorINS_3RefIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i33 + 1 | 0);
       HEAP32[(HEAP32[i34 >> 2] | 0) + (HEAP32[i24 >> 2] << 2) >> 2] = i23;
       i20 = i35 + 8 | 0;
       HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
       HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
       break;
      } else {
       HEAP32[(HEAP32[i34 >> 2] | 0) + (i33 << 2) >> 2] = i23;
       i33 = i35 + 8 | 0;
       HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
       HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
       break;
      }
     }
    } while (0);
    i23 = HEAP32[i35 + 36 >> 2] | 0;
    do {
     if ((i23 | 0) == 0) {
      if ((i35 | 0) == (i9 | 0)) {
       i8 = 183;
       break L239;
      }
      i33 = HEAP32[i35 + 28 >> 2] | 0;
      if ((i33 | 0) != 0) {
       i51 = i33;
       break;
      }
      i33 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i35, i9) | 0;
      if ((i33 | 0) == 0) {
       i8 = 184;
       break L239;
      } else {
       i51 = i33;
      }
     } else {
      i51 = i23;
     }
    } while (0);
    if ((HEAP32[i51 + 12 >> 2] & 4 | 0) == 0) {
     i23 = i51;
     while (1) {
      if ((i23 | 0) == (i9 | 0)) {
       i8 = 185;
       break L239;
      }
      i33 = HEAP32[i23 + 28 >> 2] | 0;
      if ((i33 | 0) == 0) {
       i20 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i23, i9) | 0;
       if ((i20 | 0) == 0) {
        i8 = 186;
        break L239;
       } else {
        i52 = i20;
       }
      } else {
       i52 = i33;
      }
      if ((HEAP32[i52 + 12 >> 2] & 4 | 0) == 0) {
       i23 = i52;
      } else {
       i53 = i52;
       break;
      }
     }
    } else {
     i53 = i51;
    }
    i35 = i53;
    i21 = HEAP32[i11 >> 2] | 0;
   }
   if ((i8 | 0) == 183) {
    return;
   } else if ((i8 | 0) == 184) {
    return;
   } else if ((i8 | 0) == 185) {
    return;
   } else if ((i8 | 0) == 186) {
    return;
   }
  }
 } while (0);
 i53 = i2 + 36 | 0;
 while (1) {
  i54 = HEAP32[i53 >> 2] | 0;
  if ((i54 | 0) == 0) {
   i8 = 202;
   break;
  }
  if ((HEAP32[i54 + 12 >> 2] & 4 | 0) == 0) {
   i53 = i54 + 28 | 0;
  } else {
   break;
  }
 }
 if ((i8 | 0) == 202) {
  return;
 }
 i53 = i3 + 8 | 0;
 i51 = i3 + 4 | 0;
 i52 = i3 | 0;
 i50 = i2 | 0;
 i49 = i54;
 L272 : while (1) {
  i54 = i49;
  do {
   if (__ZNK7WebCore16SelectorDataList15selectorMatchesERKNS0_12SelectorDataERNS_7ElementERKNS_13ContainerNodeE(0, i18, i54, i2) | 0) {
    i48 = HEAP32[i53 >> 2] | 0;
    if ((i48 | 0) == (HEAP32[i51 >> 2] | 0)) {
     __ZN3WTF6VectorINS_3RefIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i48 + 1 | 0);
     HEAP32[(HEAP32[i52 >> 2] | 0) + (HEAP32[i53 >> 2] << 2) >> 2] = i54;
     i47 = i49 + 8 | 0;
     HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
     HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
     break;
    } else {
     HEAP32[(HEAP32[i52 >> 2] | 0) + (i48 << 2) >> 2] = i54;
     i48 = i49 + 8 | 0;
     HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 1;
     HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
     break;
    }
   }
  } while (0);
  i54 = HEAP32[i49 + 36 >> 2] | 0;
  do {
   if ((i54 | 0) == 0) {
    if ((i49 | 0) == (i50 | 0)) {
     i8 = 203;
     break L272;
    }
    i48 = HEAP32[i49 + 28 >> 2] | 0;
    if ((i48 | 0) != 0) {
     i55 = i48;
     break;
    }
    i48 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i49, i50) | 0;
    if ((i48 | 0) == 0) {
     i8 = 204;
     break L272;
    } else {
     i55 = i48;
    }
   } else {
    i55 = i54;
   }
  } while (0);
  if ((HEAP32[i55 + 12 >> 2] & 4 | 0) == 0) {
   i56 = i55;
  } else {
   i49 = i55;
   continue;
  }
  while (1) {
   if ((i56 | 0) == (i50 | 0)) {
    i8 = 205;
    break L272;
   }
   i54 = HEAP32[i56 + 28 >> 2] | 0;
   if ((i54 | 0) == 0) {
    i48 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i56, i50) | 0;
    if ((i48 | 0) == 0) {
     i8 = 206;
     break L272;
    } else {
     i57 = i48;
    }
   } else {
    i57 = i54;
   }
   if ((HEAP32[i57 + 12 >> 2] & 4 | 0) == 0) {
    i56 = i57;
   } else {
    i49 = i57;
    continue L272;
   }
  }
 }
 if ((i8 | 0) == 203) {
  return;
 } else if ((i8 | 0) == 204) {
  return;
 } else if ((i8 | 0) == 205) {
  return;
 } else if ((i8 | 0) == 206) {
  return;
 }
}
function __ZNK7WebCore16SelectorDataList7executeINS_40SingleElementExtractorSelectorQueryTraitEEEvRNS_13ContainerNodeERNT_10OutputTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 1) {
  i6 = i2 + 36 | 0;
  while (1) {
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i8 = 163;
    break;
   }
   if ((HEAP32[i7 + 12 >> 2] & 4 | 0) == 0) {
    i6 = i7 + 28 | 0;
   } else {
    break;
   }
  }
  if ((i8 | 0) == 163) {
   return;
  }
  i6 = i1 | 0;
  i9 = i2 | 0;
  i10 = i7;
  L9 : while (1) {
   i11 = i10;
   i7 = 0;
   while (1) {
    if (i7 >>> 0 >= i5 >>> 0) {
     break;
    }
    if ((HEAP32[i4 >> 2] | 0) >>> 0 <= i7 >>> 0) {
     i8 = 129;
     break L9;
    }
    if (__ZNK7WebCore16SelectorDataList15selectorMatchesERKNS0_12SelectorDataERNS_7ElementERKNS_13ContainerNodeE(0, (HEAP32[i6 >> 2] | 0) + (i7 << 3) | 0, i11, i2) | 0) {
     i8 = 131;
     break L9;
    } else {
     i7 = i7 + 1 | 0;
    }
   }
   i7 = HEAP32[i10 + 36 >> 2] | 0;
   do {
    if ((i7 | 0) == 0) {
     if ((i10 | 0) == (i9 | 0)) {
      i8 = 171;
      break L9;
     }
     i12 = HEAP32[i10 + 28 >> 2] | 0;
     if ((i12 | 0) != 0) {
      i13 = i12;
      break;
     }
     i12 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i10, i9) | 0;
     if ((i12 | 0) == 0) {
      i8 = 172;
      break L9;
     } else {
      i13 = i12;
     }
    } else {
     i13 = i7;
    }
   } while (0);
   if ((HEAP32[i13 + 12 >> 2] & 4 | 0) == 0) {
    i14 = i13;
   } else {
    i10 = i13;
    continue;
   }
   while (1) {
    if ((i14 | 0) == (i9 | 0)) {
     i8 = 173;
     break L9;
    }
    i7 = HEAP32[i14 + 28 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i12 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i14, i9) | 0;
     if ((i12 | 0) == 0) {
      i8 = 174;
      break L9;
     } else {
      i15 = i12;
     }
    } else {
     i15 = i7;
    }
    if ((HEAP32[i15 + 12 >> 2] & 4 | 0) == 0) {
     i14 = i15;
    } else {
     i10 = i15;
     continue L9;
    }
   }
  }
  if ((i8 | 0) == 131) {
   HEAP32[i3 >> 2] = i11;
   return;
  } else if ((i8 | 0) == 129) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i8 | 0) == 171) {
   return;
  } else if ((i8 | 0) == 172) {
   return;
  } else if ((i8 | 0) == 173) {
   return;
  } else if ((i8 | 0) == 174) {
   return;
  }
 }
 i11 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[i11 >> 2] | 0;
 i15 = i2 + 12 | 0;
 L36 : do {
  if ((HEAP32[i15 >> 2] & 256 | 0) != 0) {
   i10 = i2 + 20 | 0;
   i14 = HEAP32[i10 >> 2] | 0;
   if ((HEAP32[(HEAP32[i14 + 8 >> 2] | 0) + 664 >> 2] | 0) == 0 | (i1 | 0) == 0) {
    break;
   } else {
    i16 = i1;
   }
   while (1) {
    i9 = HEAP32[i16 >> 2] | 0;
    if ((i9 & 120 | 0) == 16) {
     break;
    }
    if ((i9 & 7 | 0) != 4) {
     break L36;
    }
    i9 = (HEAP8[i16 + 2 | 0] & 2) != 0 ? 0 : i16 + 8 | 0;
    if ((i9 | 0) == 0) {
     break L36;
    } else {
     i16 = i9;
    }
   }
   if ((i16 | 0) == 0) {
    break;
   }
   i9 = i16 + 4 | 0;
   if ((HEAP8[i16 + 2 | 0] & 4) == 0) {
    i17 = i9 | 0;
   } else {
    i17 = (HEAP32[i9 >> 2] | 0) + 4 | 0;
   }
   i9 = i17;
   i13 = i2 | 0;
   i6 = HEAP32[i14 + 20 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i4 = HEAP32[i17 >> 2] | 0;
     if ((i4 | 0) == 0) {
      break;
     }
     i5 = HEAP32[i6 >> 2] | 0;
     if ((i5 | 0) == 0) {
      i7 = HEAP32[i6 + 4 >> 2] | 0;
      i18 = i7 * 24 & -1 | 0;
      i19 = 0;
      i20 = i7;
     } else {
      i7 = HEAP32[i6 + 8 >> 2] | 0;
      i12 = i4;
      i21 = i12 + ~(i12 << 15) | 0;
      i12 = (i21 >>> 10 ^ i21) * 9 & -1;
      i21 = i12 >>> 6 ^ i12;
      i12 = i21 + ~(i21 << 11) | 0;
      i21 = i12 >>> 16 ^ i12;
      i12 = i7 & i21;
      i22 = i5 + (i12 * 24 & -1) | 0;
      i23 = HEAP32[i22 >> 2] | 0;
      L54 : do {
       if ((i23 | 0) == (i4 | 0)) {
        i24 = i22;
       } else {
        i25 = (i21 >>> 23) + ~i21 | 0;
        i26 = i25 << 12 ^ i25;
        i25 = i26 >>> 7 ^ i26;
        i26 = i25 << 2 ^ i25;
        i25 = i26 >>> 20 ^ i26 | 1;
        i26 = 0;
        i27 = i12;
        i28 = i23;
        while (1) {
         if ((i28 | 0) == 0) {
          i24 = 0;
          break L54;
         }
         i29 = (i26 | 0) == 0 ? i25 : i26;
         i30 = i29 + i27 & i7;
         i31 = i5 + (i30 * 24 & -1) | 0;
         i32 = HEAP32[i31 >> 2] | 0;
         if ((i32 | 0) == (i4 | 0)) {
          i24 = i31;
          break;
         } else {
          i26 = i29;
          i27 = i30;
          i28 = i32;
         }
        }
       }
      } while (0);
      i4 = HEAP32[i6 + 4 >> 2] | 0;
      i18 = (i24 | 0) == 0 ? i5 + (i4 * 24 & -1) | 0 : i24;
      i19 = i5;
      i20 = i4;
     }
     if ((i18 | 0) == (i19 + (i20 * 24 & -1) | 0)) {
      break;
     }
     if ((HEAP32[i18 + 8 >> 2] | 0) >>> 0 <= 1 >>> 0) {
      break;
     }
     i4 = __ZNK7WebCore9TreeScope18getAllElementsByIdERKN3WTF12AtomicStringE(i14, i9) | 0;
     i7 = i4 + 8 | 0;
     i23 = HEAP32[i7 >> 2] | 0;
     i12 = HEAP32[i10 >> 2] | 0;
     do {
      if ((HEAP32[i12 + 8 >> 2] | 0) == (i13 | 0)) {
       i33 = 1;
      } else {
       if ((HEAP32[i15 >> 2] & 4096 | 0) == 0) {
        i33 = 0;
        break;
       }
       i33 = (HEAP32[i12 + 4 >> 2] | 0) == (i2 | 0);
      }
     } while (0);
     if ((i23 | 0) == 0) {
      return;
     }
     i12 = i4 | 0;
     L70 : do {
      if (i33) {
       i5 = 0;
       i21 = i23;
       while (1) {
        if (i21 >>> 0 <= i5 >>> 0) {
         i8 = 142;
         break;
        }
        i22 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i5 << 2) >> 2] | 0;
        if (__ZNK7WebCore16SelectorDataList15selectorMatchesERKNS0_12SelectorDataERNS_7ElementERKNS_13ContainerNodeE(0, i11, i22, i2) | 0) {
         i34 = i22;
         break L70;
        }
        i22 = i5 + 1 | 0;
        if (i22 >>> 0 >= i23 >>> 0) {
         i8 = 145;
         break;
        }
        i5 = i22;
        i21 = HEAP32[i7 >> 2] | 0;
       }
       if ((i8 | 0) == 142) {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       } else if ((i8 | 0) == 145) {
        return;
       }
      } else {
       i21 = 0;
       i5 = i23;
       while (1) {
        if (i5 >>> 0 <= i21 >>> 0) {
         i8 = 143;
         break;
        }
        i22 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i21 << 2) >> 2] | 0;
        if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i22 | 0, i13) | 0) {
         if (__ZNK7WebCore16SelectorDataList15selectorMatchesERKNS0_12SelectorDataERNS_7ElementERKNS_13ContainerNodeE(0, i11, i22, i2) | 0) {
          i34 = i22;
          break L70;
         }
        }
        i22 = i21 + 1 | 0;
        if (i22 >>> 0 >= i23 >>> 0) {
         i8 = 166;
         break;
        }
        i21 = i22;
        i5 = HEAP32[i7 >> 2] | 0;
       }
       if ((i8 | 0) == 143) {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       } else if ((i8 | 0) == 166) {
        return;
       }
      }
     } while (0);
     HEAP32[i3 >> 2] = i34;
     return;
    }
   } while (0);
   i6 = __ZNK7WebCore9TreeScope14getElementByIdERKN3WTF12AtomicStringE(i14, i9) | 0;
   if ((i6 | 0) == 0) {
    return;
   }
   i7 = HEAP32[i10 >> 2] | 0;
   do {
    if ((HEAP32[i7 + 8 >> 2] | 0) != (i13 | 0)) {
     if ((HEAP32[i15 >> 2] & 4096 | 0) != 0) {
      if ((HEAP32[i7 + 4 >> 2] | 0) == (i2 | 0)) {
       break;
      }
     }
     if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i6 | 0, i13) | 0) {
      break;
     }
     return;
    }
   } while (0);
   if (!(__ZNK7WebCore16SelectorDataList15selectorMatchesERKNS0_12SelectorDataERNS_7ElementERKNS_13ContainerNodeE(0, i11, i6, i2) | 0)) {
    return;
   }
   HEAP32[i3 >> 2] = i6;
   return;
  }
 } while (0);
 i15 = HEAP8[i1 + 2 | 0] | 0;
 do {
  if ((i15 & 2) != 0) {
   if ((HEAP32[i1 >> 2] & 120 | 0) != 8) {
    if ((HEAP32[i1 >> 2] & 120 | 0) != 24) {
     break;
    }
    i34 = i1 + 4 | 0;
    if ((i15 & 4) == 0) {
     i35 = i34 | 0;
    } else {
     i35 = (HEAP32[i34 >> 2] | 0) + 4 | 0;
    }
    i34 = i2 + 36 | 0;
    while (1) {
     i36 = HEAP32[i34 >> 2] | 0;
     if ((i36 | 0) == 0) {
      i8 = 159;
      break;
     }
     if ((HEAP32[i36 + 12 >> 2] & 4 | 0) == 0) {
      i34 = i36 + 28 | 0;
     } else {
      break;
     }
    }
    if ((i8 | 0) == 159) {
     return;
    }
    i34 = i2 | 0;
    i6 = i36;
    L122 : while (1) {
     i37 = i6;
     i33 = HEAP32[i6 + 48 >> 2] | 0;
     do {
      if ((i33 | 0) != 0) {
       i18 = HEAP32[i33 + 12 >> 2] | 0;
       if ((i18 | 0) == 0) {
        break;
       }
       i20 = i18 + 12 | 0;
       i19 = HEAP32[i35 >> 2] | 0;
       i24 = i18 + 8 | 0;
       i18 = 0;
       while (1) {
        if ((HEAP32[i20 + (i18 << 2) >> 2] | 0) == (i19 | 0)) {
         i8 = 97;
         break L122;
        }
        i18 = i18 + 1 | 0;
        if (i18 >>> 0 >= (HEAP32[i24 >> 2] | 0) >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i33 = HEAP32[i6 + 36 >> 2] | 0;
     do {
      if ((i33 | 0) == 0) {
       if ((i6 | 0) == (i34 | 0)) {
        i8 = 178;
        break L122;
       }
       i24 = HEAP32[i6 + 28 >> 2] | 0;
       if ((i24 | 0) != 0) {
        i38 = i24;
        break;
       }
       i24 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i6, i34) | 0;
       if ((i24 | 0) == 0) {
        i8 = 179;
        break L122;
       } else {
        i38 = i24;
       }
      } else {
       i38 = i33;
      }
     } while (0);
     if ((HEAP32[i38 + 12 >> 2] & 4 | 0) == 0) {
      i39 = i38;
     } else {
      i6 = i38;
      continue;
     }
     while (1) {
      if ((i39 | 0) == (i34 | 0)) {
       i8 = 180;
       break L122;
      }
      i33 = HEAP32[i39 + 28 >> 2] | 0;
      if ((i33 | 0) == 0) {
       i24 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i39, i34) | 0;
       if ((i24 | 0) == 0) {
        i8 = 181;
        break L122;
       } else {
        i40 = i24;
       }
      } else {
       i40 = i33;
      }
      if ((HEAP32[i40 + 12 >> 2] & 4 | 0) == 0) {
       i39 = i40;
      } else {
       i6 = i40;
       continue L122;
      }
     }
    }
    if ((i8 | 0) == 97) {
     HEAP32[i3 >> 2] = i37;
     return;
    } else if ((i8 | 0) == 178) {
     return;
    } else if ((i8 | 0) == 179) {
     return;
    } else if ((i8 | 0) == 180) {
     return;
    } else if ((i8 | 0) == 181) {
     return;
    }
   }
   i6 = HEAP32[i1 + 4 >> 2] | 0;
   i34 = i6 + 12 | 0;
   i33 = i6 + 16 | 0;
   i6 = HEAP32[i33 >> 2] | 0;
   if ((i6 | 0) != (HEAP32[__ZN3WTF8starAtomE >> 2] | 0)) {
    i24 = i2 + 36 | 0;
    while (1) {
     i41 = HEAP32[i24 >> 2] | 0;
     if ((i41 | 0) == 0) {
      i8 = 154;
      break;
     }
     if ((HEAP32[i41 + 12 >> 2] & 4 | 0) == 0) {
      i24 = i41 + 28 | 0;
     } else {
      break;
     }
    }
    if ((i8 | 0) == 154) {
     return;
    }
    i24 = i34 | 0;
    i18 = i2 | 0;
    i19 = i41;
    i20 = i6;
    L158 : while (1) {
     i42 = i19;
     i17 = HEAP32[i19 + 44 >> 2] | 0;
     if ((HEAP32[i17 + 16 >> 2] | 0) == (i20 | 0)) {
      i16 = HEAP32[i24 >> 2] | 0;
      if ((i16 | 0) == (HEAP32[__ZN3WTF8starAtomE >> 2] | 0)) {
       i8 = 73;
       break;
      }
      if ((HEAP32[i17 + 12 >> 2] | 0) == (i16 | 0)) {
       i8 = 73;
       break;
      }
     }
     i16 = HEAP32[i19 + 36 >> 2] | 0;
     do {
      if ((i16 | 0) == 0) {
       if ((i19 | 0) == (i18 | 0)) {
        i8 = 151;
        break L158;
       }
       i17 = HEAP32[i19 + 28 >> 2] | 0;
       if ((i17 | 0) != 0) {
        i43 = i17;
        break;
       }
       i17 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i19, i18) | 0;
       if ((i17 | 0) == 0) {
        i8 = 182;
        break L158;
       } else {
        i43 = i17;
       }
      } else {
       i43 = i16;
      }
     } while (0);
     if ((HEAP32[i43 + 12 >> 2] & 4 | 0) == 0) {
      i16 = i43;
      while (1) {
       if ((i16 | 0) == (i18 | 0)) {
        i8 = 183;
        break L158;
       }
       i17 = HEAP32[i16 + 28 >> 2] | 0;
       if ((i17 | 0) == 0) {
        i13 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i16, i18) | 0;
        if ((i13 | 0) == 0) {
         i8 = 177;
         break L158;
        } else {
         i44 = i13;
        }
       } else {
        i44 = i17;
       }
       if ((HEAP32[i44 + 12 >> 2] & 4 | 0) == 0) {
        i16 = i44;
       } else {
        i45 = i44;
        break;
       }
      }
     } else {
      i45 = i43;
     }
     i19 = i45;
     i20 = HEAP32[i33 >> 2] | 0;
    }
    if ((i8 | 0) == 151) {
     return;
    } else if ((i8 | 0) == 73) {
     HEAP32[i3 >> 2] = i42;
     return;
    } else if ((i8 | 0) == 177) {
     return;
    } else if ((i8 | 0) == 182) {
     return;
    } else if ((i8 | 0) == 183) {
     return;
    }
   }
   i33 = i34 | 0;
   i20 = HEAP32[i33 >> 2] | 0;
   i19 = i2 + 36 | 0;
   if ((i20 | 0) == (i6 | 0)) {
    i18 = i19;
    while (1) {
     i46 = HEAP32[i18 >> 2] | 0;
     if ((i46 | 0) == 0) {
      i8 = 158;
      break;
     }
     if ((HEAP32[i46 + 12 >> 2] & 4 | 0) == 0) {
      i18 = i46 + 28 | 0;
     } else {
      break;
     }
    }
    if ((i8 | 0) == 158) {
     return;
    }
    HEAP32[i3 >> 2] = i46;
    return;
   } else {
    i47 = i19;
   }
   while (1) {
    i48 = HEAP32[i47 >> 2] | 0;
    if ((i48 | 0) == 0) {
     i8 = 164;
     break;
    }
    if ((HEAP32[i48 + 12 >> 2] & 4 | 0) == 0) {
     i47 = i48 + 28 | 0;
    } else {
     break;
    }
   }
   if ((i8 | 0) == 164) {
    return;
   }
   i19 = i2 | 0;
   L199 : do {
    if ((HEAP32[(HEAP32[i48 + 44 >> 2] | 0) + 12 >> 2] | 0) == (i20 | 0)) {
     i49 = i48;
    } else {
     i18 = i48;
     L200 : while (1) {
      i6 = HEAP32[i18 + 36 >> 2] | 0;
      do {
       if ((i6 | 0) == 0) {
        if ((i18 | 0) == (i19 | 0)) {
         i8 = 165;
         break L200;
        }
        i34 = HEAP32[i18 + 28 >> 2] | 0;
        if ((i34 | 0) != 0) {
         i50 = i34;
         break;
        }
        i34 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i18, i19) | 0;
        if ((i34 | 0) == 0) {
         i8 = 157;
         break L200;
        } else {
         i50 = i34;
        }
       } else {
        i50 = i6;
       }
      } while (0);
      if ((HEAP32[i50 + 12 >> 2] & 4 | 0) == 0) {
       i6 = i50;
       while (1) {
        if ((i6 | 0) == (i19 | 0)) {
         i8 = 149;
         break L200;
        }
        i34 = HEAP32[i6 + 28 >> 2] | 0;
        if ((i34 | 0) == 0) {
         i24 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i6, i19) | 0;
         if ((i24 | 0) == 0) {
          i8 = 147;
          break L200;
         } else {
          i51 = i24;
         }
        } else {
         i51 = i34;
        }
        if ((HEAP32[i51 + 12 >> 2] & 4 | 0) == 0) {
         i6 = i51;
        } else {
         i52 = i51;
         break;
        }
       }
      } else {
       i52 = i50;
      }
      if ((HEAP32[(HEAP32[i52 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i33 >> 2] | 0)) {
       i49 = i52;
       break L199;
      } else {
       i18 = i52;
      }
     }
     if ((i8 | 0) == 147) {
      return;
     } else if ((i8 | 0) == 149) {
      return;
     } else if ((i8 | 0) == 157) {
      return;
     } else if ((i8 | 0) == 165) {
      return;
     }
    }
   } while (0);
   HEAP32[i3 >> 2] = i49;
   return;
  }
 } while (0);
 i49 = i2 + 36 | 0;
 while (1) {
  i53 = HEAP32[i49 >> 2] | 0;
  if ((i53 | 0) == 0) {
   i8 = 155;
   break;
  }
  if ((HEAP32[i53 + 12 >> 2] & 4 | 0) == 0) {
   i49 = i53 + 28 | 0;
  } else {
   break;
  }
 }
 if ((i8 | 0) == 155) {
  return;
 }
 i49 = i2 | 0;
 i52 = i53;
 L229 : while (1) {
  i54 = i52;
  if (__ZNK7WebCore16SelectorDataList15selectorMatchesERKNS0_12SelectorDataERNS_7ElementERKNS_13ContainerNodeE(0, i11, i54, i2) | 0) {
   i8 = 112;
   break;
  }
  i53 = HEAP32[i52 + 36 >> 2] | 0;
  do {
   if ((i53 | 0) == 0) {
    if ((i52 | 0) == (i49 | 0)) {
     i8 = 168;
     break L229;
    }
    i50 = HEAP32[i52 + 28 >> 2] | 0;
    if ((i50 | 0) != 0) {
     i55 = i50;
     break;
    }
    i50 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i52, i49) | 0;
    if ((i50 | 0) == 0) {
     i8 = 169;
     break L229;
    } else {
     i55 = i50;
    }
   } else {
    i55 = i53;
   }
  } while (0);
  if ((HEAP32[i55 + 12 >> 2] & 4 | 0) == 0) {
   i56 = i55;
  } else {
   i52 = i55;
   continue;
  }
  while (1) {
   if ((i56 | 0) == (i49 | 0)) {
    i8 = 161;
    break L229;
   }
   i53 = HEAP32[i56 + 28 >> 2] | 0;
   if ((i53 | 0) == 0) {
    i50 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i56, i49) | 0;
    if ((i50 | 0) == 0) {
     i8 = 162;
     break L229;
    } else {
     i57 = i50;
    }
   } else {
    i57 = i53;
   }
   if ((HEAP32[i57 + 12 >> 2] & 4 | 0) == 0) {
    i56 = i57;
   } else {
    i52 = i57;
    continue L229;
   }
  }
 }
 if ((i8 | 0) == 112) {
  HEAP32[i3 >> 2] = i54;
  return;
 } else if ((i8 | 0) == 161) {
  return;
 } else if ((i8 | 0) == 162) {
  return;
 } else if ((i8 | 0) == 168) {
  return;
 } else if ((i8 | 0) == 169) {
  return;
 }
}
function __ZN7WebCore18SelectorQueryCache3addERKN3WTF12AtomicStringERNS_8DocumentERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 2440 | 0;
 i6 = i5 | 0;
 i7 = i5 + 2288 | 0;
 i8 = i5 + 2360 | 0;
 i9 = i5 + 2408 | 0;
 i10 = i5 + 2416 | 0;
 i11 = i5 + 2424 | 0;
 i12 = i1 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 L1 : do {
  if ((i13 | 0) == 0) {
   i14 = i1 + 4 | 0;
   i15 = HEAP32[i14 >> 2] << 3 | 0;
   i16 = i14;
  } else {
   i14 = HEAP32[i1 + 8 >> 2] | 0;
   i17 = HEAP32[i2 >> 2] | 0;
   i18 = HEAP32[i17 + 16 >> 2] | 0;
   i19 = i18 >>> 7;
   i20 = (i18 >>> 30) + ~i19 | 0;
   i18 = i20 << 12 ^ i20;
   i20 = i18 >>> 7 ^ i18;
   i18 = i20 << 2 ^ i20;
   i20 = i18 >>> 20 ^ i18 | 1;
   i18 = i19;
   i19 = 0;
   while (1) {
    i21 = i18 & i14;
    i22 = i13 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     break;
    } else if ((i24 | 0) != (-1 | 0)) {
     if ((i23 | 0) == (i17 | 0)) {
      i25 = 7;
      break;
     }
    }
    i23 = (i19 | 0) == 0 ? i20 : i19;
    i18 = i23 + i21 | 0;
    i19 = i23;
   }
   do {
    if ((i25 | 0) == 7) {
     if ((i22 | 0) == 0) {
      break;
     }
     i15 = i22;
     i16 = i1 + 4 | 0;
     break L1;
    }
   } while (0);
   i19 = i1 + 4 | 0;
   i15 = i13 + (HEAP32[i19 >> 2] << 3) | 0;
   i16 = i19;
  }
 } while (0);
 if ((i15 | 0) != (i13 + (HEAP32[i16 >> 2] << 3) | 0)) {
  i26 = HEAP32[i15 + 4 >> 2] | 0;
  STACKTOP = i5;
  return i26 | 0;
 }
 i15 = i8 | 0;
 HEAP32[i15 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i8);
 __ZN7WebCore16CSSParserContextC1ERNS_8DocumentERKNS_3URLERKN3WTF6StringE(i7, i3, i8, __ZN3WTF11emptyStringEv() | 0);
 __ZN7WebCore9CSSParserC1ERKNS_16CSSParserContextE(i6, i7);
 i8 = HEAP32[i7 + 48 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 | 0;
   i13 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i3 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i7 = i8 | 0;
   i13 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i7 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i15 = i8 | 0;
   i13 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i15 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i8 = i9 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore9CSSParser13parseSelectorERKN3WTF6StringERNS_15CSSSelectorListE(i6, i2 | 0, i9);
 do {
  if ((HEAP32[i8 >> 2] | 0) == 0) {
   i25 = 26;
  } else {
   if (__ZNK7WebCore15CSSSelectorList18hasInvalidSelectorEv(i9) | 0) {
    i25 = 26;
    break;
   }
   if (__ZN7WebCore15CSSSelectorList32selectorsNeedNamespaceResolutionEv(i9) | 0) {
    HEAP32[i4 >> 2] = 14;
    i27 = 0;
    break;
   }
   i13 = i1 + 12 | 0;
   L42 : do {
    if ((HEAP32[i13 >> 2] | 0) == 256) {
     i15 = HEAP32[i12 >> 2] | 0;
     i7 = HEAP32[i16 >> 2] | 0;
     i3 = i15 + (i7 << 3) | 0;
     L45 : do {
      if ((i7 | 0) == 0) {
       i28 = i15;
      } else {
       i22 = i15;
       while (1) {
        i19 = HEAP32[i22 >> 2] | 0;
        if (!((i19 | 0) == (-1 | 0) | (i19 | 0) == 0)) {
         i28 = i22;
         break L45;
        }
        i22 = i22 + 8 | 0;
        if ((i22 | 0) == (i3 | 0)) {
         break;
        }
       }
       i29 = i1 | 0;
       break L42;
      }
     } while (0);
     i15 = i1 | 0;
     if ((i28 | 0) == (i3 | 0)) {
      i29 = i15;
      break;
     }
     i7 = i28 + 4 | 0;
     i22 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = 0;
     if ((i22 | 0) != 0) {
      __ZN7WebCore15CSSSelectorListD1Ev(i22 + 12 | 0);
      i7 = i22 + 8 | 0;
      if ((HEAP32[i7 >> 2] | 0) != 0) {
       HEAP32[i7 >> 2] = 0;
      }
      i7 = i22 | 0;
      i19 = HEAP32[i7 >> 2] | 0;
      if ((i19 | 0) != 0) {
       HEAP32[i7 >> 2] = 0;
       HEAP32[i22 + 4 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i19);
      }
      __ZN3WTF8fastFreeEPv(i22);
     }
     i22 = i28 | 0;
     i19 = HEAP32[i22 >> 2] | 0;
     do {
      if ((i19 | 0) != 0) {
       i7 = i19 | 0;
       i18 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
       if ((i18 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i19);
        break;
       } else {
        HEAP32[i7 >> 2] = i18;
        break;
       }
      }
     } while (0);
     HEAP32[i22 >> 2] = -1;
     i19 = i1 + 16 | 0;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
     i19 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     HEAP32[i13 >> 2] = i19;
     i3 = HEAP32[i16 >> 2] | 0;
     if (!((i19 * 6 & -1 | 0) < (i3 | 0) & (i3 | 0) > 8)) {
      i29 = i15;
      break;
     }
     __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NSt3__110unique_ptrIN7WebCore13SelectorQueryENS3_14default_deleteIS6_EEEEEENS_24KeyValuePairKeyExtractorISA_EENS_16AtomicStringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E6rehashEiPSA_(i15, (i3 | 0) / 2 & -1, 0) | 0;
     i29 = i15;
    } else {
     i29 = i1 | 0;
    }
   } while (0);
   i13 = __ZN3WTF10fastMallocEj(16) | 0;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i13 + 4 >> 2] = 0;
   HEAP32[i13 + 8 >> 2] = 0;
   i3 = i13 + 12 | 0;
   __ZN7WebCore15CSSSelectorListC1ERKS0_(i3, i9);
   __ZN7WebCore16SelectorDataList10initializeERKNS_15CSSSelectorListE(i13, i3);
   i3 = i10 | 0;
   HEAP32[i3 >> 2] = i13;
   __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NSt3__110unique_ptrIN7WebCore13SelectorQueryENS3_14default_deleteIS6_EEEEEENS_24KeyValuePairKeyExtractorISA_EENS_16AtomicStringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKS1_S9_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_SA_SC_SD_SJ_SG_EEEEOT0_OT1_(i11, i29, i2, i10);
   i13 = HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] | 0;
   i19 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   if ((i19 | 0) == 0) {
    i27 = i13;
    break;
   }
   __ZN7WebCore15CSSSelectorListD1Ev(i19 + 12 | 0);
   i3 = i19 + 8 | 0;
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    HEAP32[i3 >> 2] = 0;
   }
   i3 = i19 | 0;
   i18 = HEAP32[i3 >> 2] | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i3 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i18);
   }
   __ZN3WTF8fastFreeEPv(i19);
   i27 = i13;
  }
 } while (0);
 if ((i25 | 0) == 26) {
  HEAP32[i4 >> 2] = 12;
  i27 = 0;
 }
 __ZN7WebCore15CSSSelectorListD1Ev(i9);
 __ZN7WebCore9CSSParserD1Ev(i6);
 i26 = i27;
 STACKTOP = i5;
 return i26 | 0;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NSt3__110unique_ptrIN7WebCore13SelectorQueryENS3_14default_deleteIS6_EEEEEENS_24KeyValuePairKeyExtractorISA_EENS_16AtomicStringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKS1_S9_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_SA_SC_SD_SJ_SG_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
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
  __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NSt3__110unique_ptrIN7WebCore13SelectorQueryENS3_14default_deleteIS6_EEEEEENS_24KeyValuePairKeyExtractorISA_EENS_16AtomicStringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E6rehashEiPSA_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = HEAP32[i8 + 16 >> 2] | 0;
 i7 = i9 >>> 7;
 i11 = (i9 >>> 30) + ~i7 | 0;
 i9 = i11 << 12 ^ i11;
 i11 = i9 >>> 7 ^ i9;
 i9 = i11 << 2 ^ i11;
 i11 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i12 = i7;
 i7 = 0;
 while (1) {
  i13 = i12 & i6;
  i14 = i10 + (i13 << 3) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15;
  if ((i16 | 0) == (-1 | 0)) {
   i17 = i14;
  } else if ((i16 | 0) == 0) {
   break;
  } else {
   if ((i15 | 0) == (i8 | 0)) {
    i18 = 8;
    break;
   } else {
    i17 = i9;
   }
  }
  i15 = (i7 | 0) == 0 ? i11 : i7;
  i9 = i17;
  i12 = i15 + i13 | 0;
  i7 = i15;
 }
 if ((i18 | 0) == 8) {
  i18 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i14;
  HEAP32[i10 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i19 = i14;
  i20 = i2 + 16 | 0;
 } else {
  i14 = i9;
  HEAP32[i14 >> 2] = 0;
  HEAP32[i14 + 4 >> 2] = 0;
  i14 = i2 + 16 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) - 1;
  i19 = i9;
  i20 = i14;
 }
 __ZN3WTF17HashMapTranslatorINS_7HashMapINS_12AtomicStringENSt3__110unique_ptrIN7WebCore13SelectorQueryENS3_14default_deleteIS6_EEEENS_16AtomicStringHashENS_10HashTraitsIS2_EENSB_IS9_EEE18KeyValuePairTraitsESA_E9translateINS_12KeyValuePairIS2_S9_EERKS2_S9_EEvRT_OT0_OT1_(i19, i3, i4);
 i4 = i2 + 12 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i3;
 i4 = i2 + 4 | 0;
 i14 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i20 >> 2] | 0) + i3 << 1 | 0) < (i14 | 0)) {
  i21 = i19;
  i22 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i23 = 8;
  } else {
   i20 = i14 << 1;
   i23 = (i3 * 6 & -1 | 0) < (i20 | 0) ? i14 : i20;
  }
  i20 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NSt3__110unique_ptrIN7WebCore13SelectorQueryENS3_14default_deleteIS6_EEEEEENS_24KeyValuePairKeyExtractorISA_EENS_16AtomicStringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E6rehashEiPSA_(i2, i23, i19) | 0;
  i21 = i20;
  i22 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i22 << 3) | 0;
 i22 = i1;
 HEAP32[i22 >> 2] = i21;
 HEAP32[i22 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NSt3__110unique_ptrIN7WebCore13SelectorQueryENS3_14default_deleteIS6_EEEEEENS_24KeyValuePairKeyExtractorISA_EENS_16AtomicStringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E6rehashEiPSA_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
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
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NSt3__110unique_ptrIN7WebCore13SelectorQueryENS3_14default_deleteIS6_EEEEEENS_24KeyValuePairKeyExtractorISA_EENS_16AtomicStringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E8reinsertEOSA_(i1, i2) | 0;
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
  i1 = i7 + (i13 << 3) | 0;
  i11 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i11 | 0) != -1) {
    i10 = i7 + (i13 << 3) + 4 | 0;
    i3 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = 0;
    if ((i3 | 0) == 0) {
     i14 = i11;
    } else {
     __ZN7WebCore15CSSSelectorListD1Ev(i3 + 12 | 0);
     i10 = i3 + 8 | 0;
     if ((HEAP32[i10 >> 2] | 0) != 0) {
      HEAP32[i10 >> 2] = 0;
     }
     i10 = i3 | 0;
     i6 = HEAP32[i10 >> 2] | 0;
     if ((i6 | 0) != 0) {
      HEAP32[i10 >> 2] = 0;
      HEAP32[i3 + 4 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i6);
     }
     __ZN3WTF8fastFreeEPv(i3);
     i14 = HEAP32[i1 >> 2] | 0;
    }
    if ((i14 | 0) == 0) {
     break;
    }
    i3 = i14 | 0;
    i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i14);
     break;
    } else {
     HEAP32[i3 >> 2] = i6;
     break;
    }
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
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NSt3__110unique_ptrIN7WebCore13SelectorQueryENS3_14default_deleteIS6_EEEEEENS_24KeyValuePairKeyExtractorISA_EENS_16AtomicStringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E8reinsertEOSA_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i5 + 16 >> 2] | 0;
 i7 = i6 >>> 7;
 i8 = (i6 >>> 30) + ~i7 | 0;
 i6 = i8 << 12 ^ i8;
 i8 = i6 >>> 7 ^ i6;
 i6 = i8 << 2 ^ i8;
 i8 = i6 >>> 20 ^ i6 | 1;
 i6 = i7;
 i7 = 0;
 i9 = 0;
 while (1) {
  i10 = i6 & i4;
  i11 = i3 + (i10 << 3) | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  i13 = i12;
  if ((i13 | 0) == 0) {
   i14 = 3;
   break;
  } else if ((i13 | 0) == (-1 | 0)) {
   i15 = i11;
  } else {
   if ((i12 | 0) == (i5 | 0)) {
    i16 = i11;
    break;
   } else {
    i15 = i9;
   }
  }
  i12 = (i7 | 0) == 0 ? i8 : i7;
  i6 = i12 + i10 | 0;
  i7 = i12;
  i9 = i15;
 }
 if ((i14 | 0) == 3) {
  i16 = (i9 | 0) != 0 ? i9 : i11;
 }
 i11 = i16 + 4 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 if ((i9 | 0) != 0) {
  __ZN7WebCore15CSSSelectorListD1Ev(i9 + 12 | 0);
  i14 = i9 + 8 | 0;
  if ((HEAP32[i14 >> 2] | 0) != 0) {
   HEAP32[i14 >> 2] = 0;
  }
  i14 = i9 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  if ((i15 | 0) != 0) {
   HEAP32[i14 >> 2] = 0;
   HEAP32[i9 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i15);
  }
  __ZN3WTF8fastFreeEPv(i9);
 }
 i9 = i16 | 0;
 i15 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i14 = i15 | 0;
   i7 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i14 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i9 >> 2] = i15;
 i15 = i2 + 4 | 0;
 i2 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i11 >> 2] = i2;
 return i16 | 0;
}
function __ZNK7WebCore16SelectorDataList8queryAllERNS_13ContainerNodeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i5 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i5 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZNK7WebCore16SelectorDataList7executeINS_37AllElementExtractorSelectorQueryTraitEEEvRNS_13ContainerNodeERNT_10OutputTypeE(i2, i3, i5);
 i5 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i5 + 4 >> 2] = 0;
 HEAP32[i5 + 8 >> 2] = 1;
 HEAP32[i5 >> 2] = __ZTVN7WebCore17StaticElementListE + 8;
 i3 = i5 + 12 | 0;
 HEAP32[i3 >> 2] = 0;
 i2 = i5 + 16 | 0;
 HEAP32[i2 >> 2] = 0;
 i9 = i5 + 20 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = 0;
 i9 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = i9;
 i9 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = i9;
 HEAP32[i1 >> 2] = i5;
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i1 = HEAP32[i6 >> 2] | 0;
  i9 = i1 + (i5 << 2) | 0;
  i5 = i1;
  while (1) {
   i1 = (HEAP32[i5 >> 2] | 0) + 8 | 0;
   i2 = i1 - 8 | 0;
   i3 = i1 | 0;
   i10 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i10;
   do {
    if ((i10 | 0) < 1) {
     if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i2);
    }
   } while (0);
   i5 = i5 + 4 | 0;
   if ((i5 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i8 >> 2] = 0;
 }
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i8);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore16SelectorDataList15selectorMatchesERKNS0_12SelectorDataERNS_7ElementERKNS_13ContainerNodeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i1 | 0;
 i6 = i1 + 8 | 0;
 i7 = i1 + 16 | 0;
 i8 = i1 + 56 | 0;
 do {
  if ((HEAP8[i2 + 4 | 0] & 1) != 0) {
   if ((HEAP32[i3 + 12 >> 2] & 32 | 0) != 0) {
    break;
   }
   __ZN7WebCore23SelectorCheckerFastPathC1EPKNS_11CSSSelectorEPKNS_7ElementE(i5, HEAP32[i2 >> 2] | 0, i3);
   if (!(__ZNK7WebCore23SelectorCheckerFastPath24matchesRightmostSelectorENS_15SelectorChecker16VisitedMatchTypeE(i5, 0) | 0)) {
    i9 = 0;
    STACKTOP = i1;
    return i9 | 0;
   }
   i9 = __ZNK7WebCore23SelectorCheckerFastPath7matchesEv(i5) | 0;
   STACKTOP = i1;
   return i9 | 0;
  }
 } while (0);
 __ZN7WebCore15SelectorCheckerC1ERNS_8DocumentENS0_4ModeE(i6, HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0, 2);
 HEAP32[i7 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i7 + 4 >> 2] = i3;
 i3 = i7 + 8 | 0;
 _memset(i3 | 0, 0, 27) | 0;
 HEAP32[i3 >> 2] = (HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i4 | 0) ? 0 : i4;
 HEAP32[i8 >> 2] = 0;
 i9 = (__ZNK7WebCore15SelectorChecker16matchRecursivelyERKNS0_23SelectorCheckingContextERNS_8PseudoIdE(i6, i7, i8) | 0) == 0;
 STACKTOP = i1;
 return i9 | 0;
}
function __ZN7WebCore16SelectorDataList10initializeERKNS_15CSSSelectorListE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i4 = 0;
  i5 = i2;
 }
 while (1) {
  i6 = i5;
  while (1) {
   i7 = HEAP8[i6 + 2 | 0] | 0;
   i6 = i6 + 8 | 0;
   if ((i7 & 2) != 0) {
    break;
   }
  }
  i4 = i4 + 1 | 0;
  i5 = (i7 & 1) != 0 ? 0 : i6;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 do {
  if ((i4 | 0) == 0) {
   i8 = i2;
  } else {
   if (i4 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   } else {
    i5 = __ZN3WTF18fastMallocGoodSizeEj(i4 << 3) | 0;
    HEAP32[i1 + 4 >> 2] = i5 >>> 3;
    HEAP32[i1 >> 2] = __ZN3WTF10fastMallocEj(i5) | 0;
    i8 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 if ((i8 | 0) == 0) {
  return;
 }
 i3 = i1 | 0;
 i4 = i1 + 8 | 0;
 i1 = i8;
 while (1) {
  i8 = __ZN7WebCore23SelectorCheckerFastPath6canUseEPKNS_11CSSSelectorE(i1) | 0;
  i2 = (HEAP32[i3 >> 2] | 0) + (HEAP32[i4 >> 2] << 3) | 0;
  HEAP32[i2 >> 2] = i1;
  HEAP32[i2 + 4 >> 2] = i8 & 1;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  i8 = i1;
  while (1) {
   i9 = HEAP8[i8 + 2 | 0] | 0;
   i8 = i8 + 8 | 0;
   if ((i9 & 2) != 0) {
    break;
   }
  }
  i1 = (i9 & 1) != 0 ? 0 : i8;
  if ((i1 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore18SelectorQueryCache10invalidateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i4 = 0;
  while (1) {
   i5 = i2 + (i4 << 3) | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i6 | 0) != -1) {
     i7 = i2 + (i4 << 3) + 4 | 0;
     i8 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = 0;
     if ((i8 | 0) == 0) {
      i9 = i6;
     } else {
      __ZN7WebCore15CSSSelectorListD1Ev(i8 + 12 | 0);
      i7 = i8 + 8 | 0;
      if ((HEAP32[i7 >> 2] | 0) != 0) {
       HEAP32[i7 >> 2] = 0;
      }
      i7 = i8 | 0;
      i10 = HEAP32[i7 >> 2] | 0;
      if ((i10 | 0) != 0) {
       HEAP32[i7 >> 2] = 0;
       HEAP32[i8 + 4 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i10);
      }
      __ZN3WTF8fastFreeEPv(i8);
      i9 = HEAP32[i5 >> 2] | 0;
     }
     if ((i9 | 0) == 0) {
      break;
     }
     i8 = i9 | 0;
     i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i8 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i4 = i4 + 1 | 0;
   if ((i4 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZN3WTF17HashMapTranslatorINS_7HashMapINS_12AtomicStringENSt3__110unique_ptrIN7WebCore13SelectorQueryENS3_14default_deleteIS6_EEEENS_16AtomicStringHashENS_10HashTraitsIS2_EENSB_IS9_EEE18KeyValuePairTraitsESA_E9translateINS_12KeyValuePairIS2_S9_EERKS2_S9_EEvRT_OT0_OT1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i2 = i4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i5 = i3 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i1 + 4 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore15CSSSelectorListD1Ev(i1 + 12 | 0);
 i3 = i1 + 8 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF6VectorINS_3RefIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZNK7WebCore16SelectorDataList7matchesERNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 | 0;
 i1 = i2 | 0;
 i6 = 0;
 while (1) {
  if (i6 >>> 0 >= i4 >>> 0) {
   i7 = 0;
   i8 = 8;
   break;
  }
  if ((HEAP32[i3 >> 2] | 0) >>> 0 <= i6 >>> 0) {
   i8 = 4;
   break;
  }
  if (__ZNK7WebCore16SelectorDataList15selectorMatchesERKNS0_12SelectorDataERNS_7ElementERKNS_13ContainerNodeE(0, (HEAP32[i5 >> 2] | 0) + (i6 << 3) | 0, i2, i1) | 0) {
   i7 = 1;
   i8 = 7;
   break;
  } else {
   i6 = i6 + 1 | 0;
  }
 }
 if ((i8 | 0) == 7) {
  return i7 | 0;
 } else if ((i8 | 0) == 8) {
  return i7 | 0;
 } else if ((i8 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
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
function __ZNK7WebCore16SelectorDataList10queryFirstERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZNK7WebCore16SelectorDataList7executeINS_40SingleElementExtractorSelectorQueryTraitEEEvRNS_13ContainerNodeERNT_10OutputTypeE(i1, i2, i4);
 STACKTOP = i3;
 return HEAP32[i4 >> 2] | 0;
}
function __ZN7WebCore13SelectorQueryC2ERKNS_15CSSSelectorListE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 i3 = i1 + 12 | 0;
 __ZN7WebCore15CSSSelectorListC1ERKS0_(i3, i2);
 __ZN7WebCore16SelectorDataList10initializeERKNS_15CSSSelectorListE(i1 | 0, i3);
 return;
}
function __ZN7WebCore13SelectorQueryC1ERKNS_15CSSSelectorListE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 i3 = i1 + 12 | 0;
 __ZN7WebCore15CSSSelectorListC1ERKS0_(i3, i2);
 __ZN7WebCore16SelectorDataList10initializeERKNS_15CSSSelectorListE(i1 | 0, i3);
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
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
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore13SelectorQueryC2ERKNS_15CSSSelectorListE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN3WTF8starAtomE": __ZN3WTF8starAtomE, "__ZTVN7WebCore17StaticElementListE": __ZTVN7WebCore17StaticElementListE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore16SelectorDataList7executeINS_40SingleElementExtractorSelectorQueryTraitEEEvRNS_13ContainerNodeERNT_10OutputTypeE","_strlen","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NSt3__110unique_ptrIN7WebCore13SelectorQueryENS3_14default_deleteIS6_EEEEEENS_24KeyValuePairKeyExtractorISA_EENS_16AtomicStringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKS1_S9_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_SA_SC_SD_SJ_SG_EEEEOT0_OT1_","__ZN7WebCore16SelectorDataList10initializeERKNS_15CSSSelectorListE","__ZNK7WebCore16SelectorDataList10queryFirstERNS_13ContainerNodeE","_memset","__ZN3WTF17HashMapTranslatorINS_7HashMapINS_12AtomicStringENSt3__110unique_ptrIN7WebCore13SelectorQueryENS3_14default_deleteIS6_EEEENS_16AtomicStringHashENS_10HashTraitsIS2_EENSB_IS9_EEE18KeyValuePairTraitsESA_E9translateINS_12KeyValuePairIS2_S9_EERKS2_S9_EEvRT_OT0_OT1_","__ZN3WTF6VectorINS_3RefIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore16SelectorDataList7matchesERNS_7ElementE","__ZNK7WebCore16SelectorDataList8queryAllERNS_13ContainerNodeE","_memcpy","__ZNK7WebCore16SelectorDataList7executeINS_37AllElementExtractorSelectorQueryTraitEEEvRNS_13ContainerNodeERNT_10OutputTypeE","__ZN7WebCore13SelectorQueryC2ERKNS_15CSSSelectorListE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NSt3__110unique_ptrIN7WebCore13SelectorQueryENS3_14default_deleteIS6_EEEEEENS_24KeyValuePairKeyExtractorISA_EENS_16AtomicStringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E8reinsertEOSA_","__ZN7WebCore18SelectorQueryCache3addERKN3WTF12AtomicStringERNS_8DocumentERi","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NSt3__110unique_ptrIN7WebCore13SelectorQueryENS3_14default_deleteIS6_EEEEEENS_24KeyValuePairKeyExtractorISA_EENS_16AtomicStringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E6rehashEiPSA_","__ZN7WebCore18SelectorQueryCache10invalidateEv","__ZNK7WebCore16SelectorDataList15selectorMatchesERKNS0_12SelectorDataERNS_7ElementERKNS_13ContainerNodeE"]

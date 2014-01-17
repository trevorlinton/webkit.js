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
var __ZN7WebCore11FileChooserC1EPNS_17FileChooserClientERKNS_19FileChooserSettingsE;
var __ZN7WebCore11FileChooserD1Ev;
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
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore11FileChooser11chooseFilesERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = HEAP32[i1 + 44 >> 2] | 0;
 i7 = i2 + 8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) == (i8 | 0)) {
   if ((_memcmp(HEAP32[i1 + 36 >> 2] | 0, HEAP32[i2 >> 2] | 0, i6 << 2 | 0) | 0) != 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i6 = i1 + 4 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i4 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i4 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 if ((i8 | 0) == 0) {
  i12 = i1;
 } else {
  i1 = i2 | 0;
  i2 = i5 | 0;
  i8 = i5 + 4 | 0;
  i13 = i5;
  i14 = 0;
  while (1) {
   i15 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i14 << 2) >> 2] | 0;
   HEAP32[i2 >> 2] = i15;
   if ((i15 | 0) != 0) {
    i16 = i15 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   }
   HEAP32[i8 >> 2] = 0;
   i16 = HEAP32[i11 >> 2] | 0;
   if ((i16 | 0) == (HEAP32[i10 >> 2] | 0)) {
    i15 = i16 + 1 | 0;
    i17 = HEAP32[i9 >> 2] | 0;
    do {
     if (i17 >>> 0 > i5 >>> 0) {
      i18 = 16;
     } else {
      if ((i17 + (i16 << 3) | 0) >>> 0 <= i5 >>> 0) {
       i18 = 16;
       break;
      }
      i19 = i15 + (i16 >>> 2) | 0;
      i20 = i19 >>> 0 > 16 >>> 0 ? i19 : 16;
      __ZN3WTF6VectorIN7WebCore19FileChooserFileInfoELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i4, i20 >>> 0 > i15 >>> 0 ? i20 : i15);
      i20 = HEAP32[i9 >> 2] | 0;
      i21 = i20 + (i13 - i17 >> 3 << 3) | 0;
      i22 = i20;
     }
    } while (0);
    if ((i18 | 0) == 16) {
     i18 = 0;
     i17 = i15 + (i16 >>> 2) | 0;
     i20 = i17 >>> 0 > 16 >>> 0 ? i17 : 16;
     __ZN3WTF6VectorIN7WebCore19FileChooserFileInfoELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i4, i20 >>> 0 > i15 >>> 0 ? i20 : i15);
     i21 = i5;
     i22 = HEAP32[i9 >> 2] | 0;
    }
    i20 = HEAP32[i11 >> 2] | 0;
    i17 = HEAP32[i21 >> 2] | 0;
    HEAP32[i22 + (i20 << 3) >> 2] = i17;
    if ((i17 | 0) != 0) {
     i19 = i17 | 0;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
    }
    i19 = HEAP32[i21 + 4 >> 2] | 0;
    HEAP32[i22 + (i20 << 3) + 4 >> 2] = i19;
    if ((i19 | 0) != 0) {
     i20 = i19 | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
    }
    i23 = HEAP32[i11 >> 2] | 0;
   } else {
    i20 = HEAP32[i9 >> 2] | 0;
    i19 = HEAP32[i2 >> 2] | 0;
    HEAP32[i20 + (i16 << 3) >> 2] = i19;
    if ((i19 | 0) != 0) {
     i17 = i19 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
    }
    i17 = HEAP32[i8 >> 2] | 0;
    HEAP32[i20 + (i16 << 3) + 4 >> 2] = i17;
    if ((i17 | 0) != 0) {
     i20 = i17 | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
    }
    i23 = HEAP32[i11 >> 2] | 0;
   }
   HEAP32[i11 >> 2] = i23 + 1;
   i20 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i17 = i20 | 0;
     i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i17 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i16 = i20 | 0;
     i15 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i16 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i14 = i14 + 1 | 0;
   if (i14 >>> 0 >= (HEAP32[i7 >> 2] | 0) >>> 0) {
    break;
   }
  }
  i12 = HEAP32[i6 >> 2] | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] & 1](i12, i4);
 i4 = HEAP32[i11 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i12 = HEAP32[i9 >> 2] | 0;
  i6 = i12 + (i4 << 3) | 0;
  i4 = i12;
  while (1) {
   i12 = HEAP32[i4 + 4 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i7 = i12 | 0;
     i14 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i7 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i14 = i12 | 0;
     i7 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i14 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i4 = i4 + 8 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i11 >> 2] = 0;
 }
 i11 = HEAP32[i9 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i11);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11FileChooser11chooseFilesERKN3WTF6VectorINS_19FileChooserFileInfoELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = i2 + 8 | 0;
 L1 : do {
  if ((HEAP32[i3 >> 2] | 0) == 0) {
   i4 = 0;
   i5 = 0;
  } else {
   i6 = i2 | 0;
   i7 = 0;
   i8 = 0;
   i9 = 0;
   i10 = 0;
   L3 : while (1) {
    i11 = (HEAP32[i6 >> 2] | 0) + (i10 << 3) | 0;
    do {
     if ((i7 | 0) == (i8 | 0)) {
      i12 = i8 + 1 | 0;
      do {
       if (i9 >>> 0 > i11 >>> 0) {
        i13 = 9;
       } else {
        if ((i9 + (i8 << 2) | 0) >>> 0 <= i11 >>> 0) {
         i13 = 9;
         break;
        }
        i14 = i11 - i9 >> 2;
        i15 = i12 + (i8 >>> 2) | 0;
        i16 = i15 >>> 0 > 16 >>> 0 ? i15 : 16;
        i15 = i16 >>> 0 > i12 >>> 0 ? i16 : i12;
        do {
         if (i8 >>> 0 < i15 >>> 0) {
          if (i15 >>> 0 > 1073741823 >>> 0) {
           i13 = 16;
           break L3;
          }
          i16 = __ZN3WTF18fastMallocGoodSizeEj(i15 << 2) | 0;
          i17 = i16 >>> 2;
          i18 = __ZN3WTF10fastMallocEj(i16) | 0;
          i16 = i18;
          i19 = i9;
          _memcpy(i18 | 0, i19 | 0, i8 << 2) | 0;
          if ((i9 | 0) == 0) {
           i20 = i16;
           i21 = i17;
           break;
          }
          i18 = (i16 | 0) == (i9 | 0);
          __ZN3WTF8fastFreeEPv(i19);
          i20 = i18 ? 0 : i16;
          i21 = i18 ? 0 : i17;
         } else {
          i20 = i9;
          i21 = i8;
         }
        } while (0);
        i22 = i20 + (i14 << 2) | 0;
        i23 = i20;
        i24 = i21;
       }
      } while (0);
      do {
       if ((i13 | 0) == 9) {
        i13 = 0;
        i15 = i12 + (i8 >>> 2) | 0;
        i17 = i15 >>> 0 > 16 >>> 0 ? i15 : 16;
        i15 = i17 >>> 0 > i12 >>> 0 ? i17 : i12;
        if (i8 >>> 0 >= i15 >>> 0) {
         i22 = i11;
         i23 = i9;
         i24 = i8;
         break;
        }
        if (i15 >>> 0 > 1073741823 >>> 0) {
         i13 = 11;
         break L3;
        }
        i17 = __ZN3WTF18fastMallocGoodSizeEj(i15 << 2) | 0;
        i15 = i17 >>> 2;
        i18 = __ZN3WTF10fastMallocEj(i17) | 0;
        i17 = i18;
        i16 = i9;
        _memcpy(i18 | 0, i16 | 0, i8 << 2) | 0;
        if ((i9 | 0) == 0) {
         i22 = i11;
         i23 = i17;
         i24 = i15;
         break;
        }
        i18 = (i17 | 0) == (i9 | 0);
        __ZN3WTF8fastFreeEPv(i16);
        i22 = i11;
        i23 = i18 ? 0 : i17;
        i24 = i18 ? 0 : i15;
       }
      } while (0);
      i15 = HEAP32[i22 >> 2] | 0;
      HEAP32[i23 + (i8 << 2) >> 2] = i15;
      if ((i15 | 0) == 0) {
       i25 = i23;
       i26 = i24;
       i27 = i12;
       break;
      }
      i18 = i15 | 0;
      HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
      i25 = i23;
      i26 = i24;
      i27 = i12;
     } else {
      i18 = HEAP32[i11 >> 2] | 0;
      HEAP32[i9 + (i7 << 2) >> 2] = i18;
      if ((i18 | 0) != 0) {
       i15 = i18 | 0;
       HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
      }
      i25 = i9;
      i26 = i8;
      i27 = i7 + 1 | 0;
     }
    } while (0);
    i11 = i10 + 1 | 0;
    if (i11 >>> 0 < (HEAP32[i3 >> 2] | 0) >>> 0) {
     i7 = i27;
     i8 = i26;
     i9 = i25;
     i10 = i11;
    } else {
     i4 = i27;
     i5 = i25;
     break L1;
    }
   }
   if ((i13 | 0) == 11) {
    _WTFCrash();
   } else if ((i13 | 0) == 16) {
    _WTFCrash();
   }
  }
 } while (0);
 if ((HEAP32[i1 + 44 >> 2] | 0) == (i4 | 0)) {
  if ((_memcmp(HEAP32[i1 + 36 >> 2] | 0, i5 | 0, i4 << 2 | 0) | 0) != 0) {
   i13 = 25;
  }
 } else {
  i13 = 25;
 }
 do {
  if ((i13 | 0) == 25) {
   i25 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i25 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i25 >> 2] | 0) + 8 >> 2] & 1](i25, i2);
  }
 } while (0);
 if ((i4 | 0) != 0) {
  i2 = i5 + (i4 << 2) | 0;
  i4 = i5;
  while (1) {
   i1 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i13 = i1 | 0;
     i25 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i13 >> 2] = i25;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i2 | 0)) {
    break;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore19FileChooserSettingsC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 HEAP8[i1 | 0] = HEAP8[i2 | 0] & 1;
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 i4 = i2 + 12 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   if (i3 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i5 = __ZN3WTF18fastMallocGoodSizeEj(i3 << 2) | 0;
   HEAP32[i7 >> 2] = i5 >>> 2;
   i8 = __ZN3WTF10fastMallocEj(i5) | 0;
   i5 = i8;
   HEAP32[i6 >> 2] = i5;
   if ((i8 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i2 + 4 >> 2] | 0;
   i9 = HEAP32[i4 >> 2] | 0;
   i10 = i8 + (i9 << 2) | 0;
   if ((i9 | 0) == 0) {
    break;
   } else {
    i11 = i8;
    i12 = i5;
   }
   while (1) {
    i5 = HEAP32[i11 >> 2] | 0;
    HEAP32[i12 >> 2] = i5;
    if ((i5 | 0) != 0) {
     i8 = i5 | 0;
     HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
    }
    i8 = i11 + 4 | 0;
    if ((i8 | 0) == (i10 | 0)) {
     break;
    } else {
     i11 = i8;
     i12 = i12 + 4 | 0;
    }
   }
  }
 } while (0);
 i12 = HEAP32[i2 + 20 >> 2] | 0;
 i11 = i2 + 24 | 0;
 i4 = HEAP32[i11 >> 2] | 0;
 i6 = i1 + 16 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 20 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = i4;
 do {
  if ((i12 | 0) != 0) {
   if (i12 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i4 = __ZN3WTF18fastMallocGoodSizeEj(i12 << 2) | 0;
   HEAP32[i7 >> 2] = i4 >>> 2;
   i3 = __ZN3WTF10fastMallocEj(i4) | 0;
   i4 = i3;
   HEAP32[i6 >> 2] = i4;
   if ((i3 | 0) == 0) {
    break;
   }
   i3 = HEAP32[i2 + 16 >> 2] | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   i8 = i3 + (i10 << 2) | 0;
   if ((i10 | 0) == 0) {
    break;
   } else {
    i13 = i3;
    i14 = i4;
   }
   while (1) {
    i4 = HEAP32[i13 >> 2] | 0;
    HEAP32[i14 >> 2] = i4;
    if ((i4 | 0) != 0) {
     i3 = i4 | 0;
     HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
    }
    i3 = i13 + 4 | 0;
    if ((i3 | 0) == (i8 | 0)) {
     break;
    } else {
     i13 = i3;
     i14 = i14 + 4 | 0;
    }
   }
  }
 } while (0);
 i14 = HEAP32[i2 + 32 >> 2] | 0;
 i13 = i2 + 36 | 0;
 i11 = HEAP32[i13 >> 2] | 0;
 i6 = i1 + 28 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 32 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = i11;
 if ((i14 | 0) == 0) {
  return;
 }
 if (i14 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i11 = __ZN3WTF18fastMallocGoodSizeEj(i14 << 2) | 0;
 HEAP32[i7 >> 2] = i11 >>> 2;
 i7 = __ZN3WTF10fastMallocEj(i11) | 0;
 i11 = i7;
 HEAP32[i6 >> 2] = i11;
 if ((i7 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i2 + 28 >> 2] | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 i13 = i7 + (i2 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i15 = i7;
  i16 = i11;
 }
 while (1) {
  i11 = HEAP32[i15 >> 2] | 0;
  HEAP32[i16 >> 2] = i11;
  if ((i11 | 0) != 0) {
   i7 = i11 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  i7 = i15 + 4 | 0;
  if ((i7 | 0) == (i13 | 0)) {
   break;
  } else {
   i15 = i7;
   i16 = i16 + 4 | 0;
  }
 }
 return;
}
function __ZN7WebCore19FileChooserSettingsD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 36 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 28 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
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
  HEAP32[i1 + 32 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 24 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i6 = i1 + 16 | 0;
 if ((i4 | 0) != 0) {
  i3 = HEAP32[i6 >> 2] | 0;
  i5 = i3 + (i4 << 2) | 0;
  i4 = i3;
  while (1) {
   i3 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i8 = i3 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i8 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i5 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 12 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i5 = i1 + 4 | 0;
 if ((i6 | 0) != 0) {
  i4 = HEAP32[i5 >> 2] | 0;
  i3 = i4 + (i6 << 2) | 0;
  i6 = i4;
  while (1) {
   i4 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i7 = i4 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i6 = i6 + 4 | 0;
   if ((i6 | 0) == (i3 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore19FileChooserSettings11acceptTypesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = i1 | 0;
 HEAP32[i3 >> 2] = 0;
 i4 = i1 + 4 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 8 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i2 + 12 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i2 + 24 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) + i7 | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = 0;
   i11 = i7;
  } else {
   if (i9 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i12 = __ZN3WTF18fastMallocGoodSizeEj(i9 << 2) | 0;
    i13 = i12 >>> 2;
    HEAP32[i4 >> 2] = i13;
    HEAP32[i3 >> 2] = __ZN3WTF10fastMallocEj(i12) | 0;
    i10 = i13;
    i11 = HEAP32[i6 >> 2] | 0;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 if (i11 >>> 0 > i10 >>> 0) {
  __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i11);
  i14 = HEAP32[i5 >> 2] | 0;
 } else {
  i14 = 0;
 }
 if (i11 >>> 0 < i14 >>> 0) {
  _WTFCrash();
 }
 i10 = HEAP32[i3 >> 2] | 0;
 if ((i11 | 0) != 0) {
  i9 = 0;
  while (1) {
   i7 = HEAP32[i6 + (i9 << 2) >> 2] | 0;
   HEAP32[i10 + (i9 + i14 << 2) >> 2] = i7;
   if ((i7 | 0) != 0) {
    i13 = i7 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   }
   i9 = i9 + 1 | 0;
   if (i9 >>> 0 >= i11 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i5 >> 2] = i11;
 i9 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i8 = i2 + i11 | 0;
 if (i8 >>> 0 > (HEAP32[i4 >> 2] | 0) >>> 0) {
  __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i8);
  i15 = HEAP32[i5 >> 2] | 0;
 } else {
  i15 = i11;
 }
 if (i8 >>> 0 < i15 >>> 0) {
  _WTFCrash();
 }
 i11 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i5 >> 2] = i8;
  return;
 } else {
  i16 = 0;
 }
 while (1) {
  i3 = HEAP32[i9 + (i16 << 2) >> 2] | 0;
  HEAP32[i11 + (i16 + i15 << 2) >> 2] = i3;
  if ((i3 | 0) != 0) {
   i1 = i3 | 0;
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
  }
  i16 = i16 + 1 | 0;
  if (i16 >>> 0 >= i2 >>> 0) {
   break;
  }
 }
 HEAP32[i5 >> 2] = i8;
 return;
}
function __ZN3WTF6VectorIN7WebCore19FileChooserFileInfoELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 i1 = i5 + (i6 << 3) | 0;
 if (i2 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
 HEAP32[i3 >> 2] = i7 >>> 3;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = i6 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) != 0) {
    i9 = i8 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   i9 = i6 + 4 | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   HEAP32[i7 + 4 >> 2] = i8;
   if ((i8 | 0) != 0) {
    i10 = i8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   }
   i10 = HEAP32[i9 >> 2] | 0;
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
   i10 = HEAP32[i2 >> 2] | 0;
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
   i10 = i6 + 8 | 0;
   if ((i10 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i10;
    i7 = i7 + 8 | 0;
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
function __ZN7WebCore11FileChooser10chooseFileERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 i6 = i4 + 4 | 0;
 i7 = i4 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = __ZN3WTF18fastMallocGoodSizeEj(64) | 0;
 HEAP32[i6 >> 2] = i8 >>> 2;
 i9 = __ZN3WTF10fastMallocEj(i8) | 0;
 HEAP32[i5 >> 2] = i9;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 __ZN7WebCore11FileChooser11chooseFilesERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEE(i1, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i9 = i1 + (i4 << 2) | 0;
  i4 = i1;
  while (1) {
   i8 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i2 = i8 | 0;
     i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i2 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i7 >> 2] = 0;
 }
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore11FileChooser6createEPNS_17FileChooserClientERKNS_19FileChooserSettingsE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = __ZN3WTF10fastMallocEj(48) | 0;
 HEAP32[i4 >> 2] = 1;
 HEAP32[i4 + 4 >> 2] = i2;
 __ZN7WebCore19FileChooserSettingsC2ERKS0_(i4 + 8 | 0, i3);
 HEAP32[i1 >> 2] = i4;
 return;
}
function _memcmp(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 while ((i4 | 0) < (i3 | 0)) {
  i5 = HEAPU8[i1 + i4 | 0] | 0;
  i6 = HEAPU8[i2 + i4 | 0] | 0;
  if ((i5 | 0) != (i6 | 0)) return ((i5 | 0) > (i6 | 0) ? 1 : -1) | 0;
  i4 = i4 + 1 | 0;
 }
 return 0;
}
function __ZN7WebCore11FileChooserC2EPNS_17FileChooserClientERKNS_19FileChooserSettingsE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2;
 __ZN7WebCore19FileChooserSettingsC2ERKS0_(i1 + 8 | 0, i3);
 return;
}
function __ZN7WebCore11FileChooserC1EPNS_17FileChooserClientERKNS_19FileChooserSettingsE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2;
 __ZN7WebCore19FileChooserSettingsC2ERKS0_(i1 + 8 | 0, i3);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
 FUNCTION_TABLE_vii[i1 & 1](i2 | 0, i3 | 0);
}
function __ZN7WebCore11FileChooserD2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19FileChooserSettingsD2Ev(i1 + 8 | 0);
 return;
}
function __ZN7WebCore11FileChooserD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19FileChooserSettingsD2Ev(i1 + 8 | 0);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZN7WebCore11FileChooser10invalidateEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore11FileChooserD2Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore11FileChooserC2EPNS_17FileChooserClientERKNS_19FileChooserSettingsE,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _memcmp: _memcmp, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _memcmp = Module["_memcmp"] = asm["_memcmp"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore11FileChooser10chooseFileERKN3WTF6StringE","_memcmp","__ZN7WebCore19FileChooserSettingsD2Ev","__ZN7WebCore11FileChooser11chooseFilesERKN3WTF6VectorINS_19FileChooserFileInfoELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore11FileChooser10invalidateEv","__ZN7WebCore11FileChooser6createEPNS_17FileChooserClientERKNS_19FileChooserSettingsE","__ZN3WTF6VectorIN7WebCore19FileChooserFileInfoELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","_memset","__ZN7WebCore11FileChooserC2EPNS_17FileChooserClientERKNS_19FileChooserSettingsE","_memcpy","_strlen","__ZN7WebCore11FileChooserD2Ev","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore19FileChooserSettingsC2ERKS0_","__ZNK7WebCore19FileChooserSettings11acceptTypesEv","__ZN7WebCore11FileChooser11chooseFilesERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEE"]

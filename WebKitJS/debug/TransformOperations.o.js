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
var __ZN7WebCore19TransformOperationsC1Eb;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
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
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
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
function invoke_viiidi(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiidi"](index,a1,a2,a3,a4,a5);
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
  var __ZTVN7WebCore26Matrix3DTransformOperationE=env.__ZTVN7WebCore26Matrix3DTransformOperationE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore26IdentityTransformOperationE=(H_BASE+8)|0;
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
  var invoke_ii=env.invoke_ii;
  var invoke_vi=env.invoke_vi;
  var invoke_viiidi=env.invoke_viiidi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore19TransformOperations25blendByMatchingOperationsERKS0_RKd(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i1 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i1 + 4 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i1 + 8 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i3 + 8 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = i2 + 8 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = i15 >>> 0 < i17 >>> 0 ? i17 : i15;
 if ((i18 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i19 = i3 | 0;
 i3 = i6 | 0;
 i20 = i2 | 0;
 i2 = i7 | 0;
 i21 = i9 | 0;
 i22 = i8 | 0;
 i23 = i10 | 0;
 i24 = i1 | 0;
 i1 = i8;
 i25 = 0;
 i26 = 0;
 i27 = 0;
 L4 : while (1) {
  do {
   if (i25 >>> 0 < i15 >>> 0) {
    if ((HEAP32[i14 >> 2] | 0) >>> 0 <= i25 >>> 0) {
     i28 = 6;
     break L4;
    }
    i29 = HEAP32[(HEAP32[i19 >> 2] | 0) + (i25 << 2) >> 2] | 0;
    HEAP32[i3 >> 2] = i29;
    if ((i29 | 0) == 0) {
     break;
    }
    i30 = i29 + 4 | 0;
    HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
   } else {
    HEAP32[i3 >> 2] = 0;
   }
  } while (0);
  do {
   if (i25 >>> 0 < i17 >>> 0) {
    if ((HEAP32[i16 >> 2] | 0) >>> 0 <= i25 >>> 0) {
     i28 = 12;
     break L4;
    }
    i30 = HEAP32[(HEAP32[i20 >> 2] | 0) + (i25 << 2) >> 2] | 0;
    HEAP32[i2 >> 2] = i30;
    if ((i30 | 0) == 0) {
     i28 = 15;
     break;
    }
    i29 = i30 + 4 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
    i29 = HEAP32[i2 >> 2] | 0;
    if ((i29 | 0) == 0) {
     i28 = 15;
     break;
    }
    FUNCTION_TABLE_viiidi[HEAP32[(HEAP32[i29 >> 2] | 0) + 20 >> 2] & 3](i9, i29, HEAP32[i3 >> 2] | 0, +HEAPF64[i4 >> 3], 0);
    i29 = HEAP32[i21 >> 2] | 0;
    i31 = i29;
    i32 = i29;
   } else {
    HEAP32[i2 >> 2] = 0;
    i28 = 15;
   }
  } while (0);
  if ((i28 | 0) == 15) {
   i28 = 0;
   i29 = HEAP32[i3 >> 2] | 0;
   if ((i29 | 0) == 0) {
    HEAP32[i21 >> 2] = 0;
    i33 = 0;
   } else {
    FUNCTION_TABLE_viiidi[HEAP32[(HEAP32[i29 >> 2] | 0) + 20 >> 2] & 3](i9, i29, 0, +HEAPF64[i4 >> 3], 1);
    i33 = HEAP32[i21 >> 2] | 0;
   }
   i31 = i33;
   i32 = i33;
  }
  HEAP32[i21 >> 2] = 0;
  HEAP32[i22 >> 2] = i32;
  do {
   if ((i31 | 0) == 0) {
    i29 = __ZN3WTF10fastMallocEj(8) | 0;
    HEAP32[i29 + 4 >> 2] = 1;
    HEAP32[i29 >> 2] = H_BASE + 16;
    HEAP32[i23 >> 2] = i29;
    do {
     if (+HEAPF64[i4 >> 3] > +.5) {
      i29 = (HEAP32[i2 >> 2] | 0) != 0 ? i7 : i10;
      if ((i26 | 0) != (HEAP32[i12 >> 2] | 0)) {
       i30 = HEAP32[i29 >> 2] | 0;
       HEAP32[i27 + (i26 << 2) >> 2] = i30;
       if ((i30 | 0) != 0) {
        i34 = i30 + 4 | 0;
        HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
       }
       i34 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
       HEAP32[i13 >> 2] = i34;
       i35 = i34;
       i36 = i27;
       break;
      }
      i34 = i26 + 1 | 0;
      do {
       if (i27 >>> 0 > i29 >>> 0) {
        i28 = 37;
       } else {
        if ((i27 + (i26 << 2) | 0) >>> 0 <= i29 >>> 0) {
         i28 = 37;
         break;
        }
        __ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i24, i34);
        i30 = HEAP32[i11 >> 2] | 0;
        i37 = i30 + (i29 - i27 >> 2 << 2) | 0;
        i38 = i30;
       }
      } while (0);
      if ((i28 | 0) == 37) {
       i28 = 0;
       __ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i24, i34);
       i37 = i29;
       i38 = HEAP32[i11 >> 2] | 0;
      }
      i30 = HEAP32[i13 >> 2] | 0;
      i39 = HEAP32[i37 >> 2] | 0;
      HEAP32[i38 + (i30 << 2) >> 2] = i39;
      if ((i39 | 0) != 0) {
       i40 = i39 + 4 | 0;
       HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 1;
      }
      i40 = i30 + 1 | 0;
      HEAP32[i13 >> 2] = i40;
      i35 = i40;
      i36 = i38;
     } else {
      i40 = (HEAP32[i3 >> 2] | 0) != 0 ? i6 : i10;
      if ((i26 | 0) != (HEAP32[i12 >> 2] | 0)) {
       i30 = HEAP32[i40 >> 2] | 0;
       HEAP32[i27 + (i26 << 2) >> 2] = i30;
       if ((i30 | 0) != 0) {
        i39 = i30 + 4 | 0;
        HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
       }
       i39 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
       HEAP32[i13 >> 2] = i39;
       i35 = i39;
       i36 = i27;
       break;
      }
      i39 = i26 + 1 | 0;
      do {
       if (i27 >>> 0 > i40 >>> 0) {
        i28 = 48;
       } else {
        if ((i27 + (i26 << 2) | 0) >>> 0 <= i40 >>> 0) {
         i28 = 48;
         break;
        }
        __ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i24, i39);
        i30 = HEAP32[i11 >> 2] | 0;
        i41 = i30 + (i40 - i27 >> 2 << 2) | 0;
        i42 = i30;
       }
      } while (0);
      if ((i28 | 0) == 48) {
       i28 = 0;
       __ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i24, i39);
       i41 = i40;
       i42 = HEAP32[i11 >> 2] | 0;
      }
      i29 = HEAP32[i13 >> 2] | 0;
      i34 = HEAP32[i41 >> 2] | 0;
      HEAP32[i42 + (i29 << 2) >> 2] = i34;
      if ((i34 | 0) != 0) {
       i30 = i34 + 4 | 0;
       HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
      }
      i30 = i29 + 1 | 0;
      HEAP32[i13 >> 2] = i30;
      i35 = i30;
      i36 = i42;
     }
    } while (0);
    i30 = HEAP32[i23 >> 2] | 0;
    if ((i30 | 0) == 0) {
     i43 = i35;
     i44 = i36;
     break;
    }
    i29 = i30 + 4 | 0;
    i30 = i29 | 0;
    i34 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
    if ((i34 | 0) != 0) {
     HEAP32[i30 >> 2] = i34;
     i43 = i35;
     i44 = i36;
     break;
    }
    i34 = i29 - 4 | 0;
    if ((i34 | 0) == 0) {
     i43 = i35;
     i44 = i36;
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] & 7](i34);
    i43 = i35;
    i44 = i36;
   } else {
    if ((i26 | 0) != (HEAP32[i12 >> 2] | 0)) {
     HEAP32[i27 + (i26 << 2) >> 2] = i31;
     i34 = i31 + 4 | 0;
     HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
     i34 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
     HEAP32[i13 >> 2] = i34;
     i43 = i34;
     i44 = i27;
     break;
    }
    i34 = i26 + 1 | 0;
    do {
     if (i27 >>> 0 > i8 >>> 0) {
      i28 = 25;
     } else {
      if ((i27 + (i26 << 2) | 0) >>> 0 <= i8 >>> 0) {
       i28 = 25;
       break;
      }
      __ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i24, i34);
      i29 = HEAP32[i11 >> 2] | 0;
      i45 = i29 + (i1 - i27 >> 2 << 2) | 0;
      i46 = i29;
     }
    } while (0);
    if ((i28 | 0) == 25) {
     i28 = 0;
     __ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i24, i34);
     i45 = i8;
     i46 = HEAP32[i11 >> 2] | 0;
    }
    i29 = HEAP32[i13 >> 2] | 0;
    i30 = HEAP32[i45 >> 2] | 0;
    HEAP32[i46 + (i29 << 2) >> 2] = i30;
    if ((i30 | 0) != 0) {
     i47 = i30 + 4 | 0;
     HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
    }
    i47 = i29 + 1 | 0;
    HEAP32[i13 >> 2] = i47;
    i43 = i47;
    i44 = i46;
   }
  } while (0);
  i47 = HEAP32[i22 >> 2] | 0;
  do {
   if ((i47 | 0) != 0) {
    i29 = i47 + 4 | 0;
    i30 = i29 | 0;
    i48 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
    if ((i48 | 0) != 0) {
     HEAP32[i30 >> 2] = i48;
     break;
    }
    i48 = i29 - 4 | 0;
    if ((i48 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i48 >> 2] | 0) + 4 >> 2] & 7](i48);
   }
  } while (0);
  i47 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i47 | 0) != 0) {
    i48 = i47 + 4 | 0;
    i29 = i48 | 0;
    i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
    if ((i30 | 0) != 0) {
     HEAP32[i29 >> 2] = i30;
     break;
    }
    i30 = i48 - 4 | 0;
    if ((i30 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 7](i30);
   }
  } while (0);
  i47 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i47 | 0) != 0) {
    i30 = i47 + 4 | 0;
    i48 = i30 | 0;
    i29 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
    if ((i29 | 0) != 0) {
     HEAP32[i48 >> 2] = i29;
     break;
    }
    i29 = i30 - 4 | 0;
    if ((i29 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 7](i29);
   }
  } while (0);
  i47 = i25 + 1 | 0;
  if (i47 >>> 0 < i18 >>> 0) {
   i25 = i47;
   i26 = i43;
   i27 = i44;
  } else {
   i28 = 76;
   break;
  }
 }
 if ((i28 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i28 | 0) == 12) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i28 | 0) == 76) {
  STACKTOP = i5;
  return;
 }
}
function __ZNK7WebCore19TransformOperations5blendERKS0_dRKNS_10LayoutSizeE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 HEAPF64[i7 >> 3] = d4;
 i8 = i3 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i2 + 8 | 0;
 do {
  if ((i9 | 0) == (HEAP32[i10 >> 2] | 0)) {
   i11 = i3 | 0;
   i12 = i2 | 0;
   i13 = 0;
   while (1) {
    if (i13 >>> 0 >= i9 >>> 0) {
     i14 = 9;
     break;
    }
    if ((HEAP32[i8 >> 2] | 0) >>> 0 <= i13 >>> 0) {
     i14 = 5;
     break;
    }
    i15 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i13 << 2) >> 2] | 0;
    if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i13 >>> 0) {
     i14 = 7;
     break;
    }
    if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 7](i15, HEAP32[(HEAP32[i12 >> 2] | 0) + (i13 << 2) >> 2] | 0) | 0) {
     i13 = i13 + 1 | 0;
    } else {
     i14 = 17;
     break;
    }
   }
   if ((i14 | 0) == 5) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i14 | 0) == 9) {
    i13 = HEAP32[i2 + 4 >> 2] | 0;
    i11 = HEAP32[i10 >> 2] | 0;
    i15 = i1 | 0;
    HEAP32[i15 >> 2] = 0;
    i16 = i1 + 4 | 0;
    HEAP32[i16 >> 2] = 0;
    HEAP32[i1 + 8 >> 2] = i11;
    if ((i13 | 0) == 0) {
     STACKTOP = i6;
     return;
    }
    if (i13 >>> 0 > 1073741823 >>> 0) {
     _WTFCrash();
    }
    i11 = __ZN3WTF18fastMallocGoodSizeEj(i13 << 2) | 0;
    HEAP32[i16 >> 2] = i11 >>> 2;
    i16 = __ZN3WTF10fastMallocEj(i11) | 0;
    i11 = i16;
    HEAP32[i15 >> 2] = i11;
    if ((i16 | 0) == 0) {
     STACKTOP = i6;
     return;
    }
    i16 = HEAP32[i12 >> 2] | 0;
    i15 = HEAP32[i10 >> 2] | 0;
    i13 = i16 + (i15 << 2) | 0;
    if ((i15 | 0) == 0) {
     STACKTOP = i6;
     return;
    } else {
     i17 = i16;
     i18 = i11;
    }
    while (1) {
     i11 = HEAP32[i17 >> 2] | 0;
     HEAP32[i18 >> 2] = i11;
     if ((i11 | 0) != 0) {
      i16 = i11 + 4 | 0;
      HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     }
     i16 = i17 + 4 | 0;
     if ((i16 | 0) == (i13 | 0)) {
      break;
     } else {
      i17 = i16;
      i18 = i18 + 4 | 0;
     }
    }
    STACKTOP = i6;
    return;
   } else if ((i14 | 0) == 7) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i14 | 0) == 17) {
    i19 = HEAP32[i8 >> 2] | 0;
    break;
   }
  } else {
   i19 = i9;
  }
 } while (0);
 L31 : do {
  if ((i19 | 0) != 0) {
   if ((i19 | 0) != (HEAP32[i10 >> 2] | 0)) {
    break;
   }
   i9 = i3 | 0;
   i18 = i2 | 0;
   i17 = 0;
   while (1) {
    if (i17 >>> 0 >= i19 >>> 0) {
     i14 = 27;
     break;
    }
    if ((HEAP32[i8 >> 2] | 0) >>> 0 <= i17 >>> 0) {
     i14 = 23;
     break;
    }
    i13 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i17 << 2) >> 2] | 0;
    if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i17 >>> 0) {
     i14 = 25;
     break;
    }
    if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i13 >> 2] | 0) + 28 >> 2] & 7](i13, HEAP32[(HEAP32[i18 >> 2] | 0) + (i17 << 2) >> 2] | 0) | 0) {
     i17 = i17 + 1 | 0;
    } else {
     break L31;
    }
   }
   if ((i14 | 0) == 23) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i14 | 0) == 25) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i14 | 0) == 27) {
    __ZNK7WebCore19TransformOperations25blendByMatchingOperationsERKS0_RKd(i1, i2, i3, i7);
    STACKTOP = i6;
    return;
   }
  }
 } while (0);
 __ZNK7WebCore19TransformOperations31blendByUsingMatrixInterpolationERKS0_dRKNS_10LayoutSizeE(i1, i2, i3, d4, i5);
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore19TransformOperations31blendByUsingMatrixInterpolationERKS0_dRKNS_10LayoutSizeE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 272 | 0;
 i7 = i6 | 0;
 i8 = i6 + 128 | 0;
 i9 = i6 + 256 | 0;
 i10 = i6 + 264 | 0;
 i11 = i1 | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 i12 = i1 + 8 | 0;
 HEAP32[i12 >> 2] = 0;
 HEAPF64[i7 >> 3] = +1;
 _memset(i7 + 8 | 0, 0, 32) | 0;
 HEAPF64[i7 + 40 >> 3] = +1;
 _memset(i7 + 48 | 0, 0, 32) | 0;
 HEAPF64[i7 + 80 >> 3] = +1;
 _memset(i7 + 88 | 0, 0, 32) | 0;
 HEAPF64[i7 + 120 >> 3] = +1;
 HEAPF64[i8 >> 3] = +1;
 _memset(i8 + 8 | 0, 0, 32) | 0;
 HEAPF64[i8 + 40 >> 3] = +1;
 _memset(i8 + 48 | 0, 0, 32) | 0;
 HEAPF64[i8 + 80 >> 3] = +1;
 _memset(i8 + 88 | 0, 0, 32) | 0;
 HEAPF64[i8 + 120 >> 3] = +1;
 i13 = i5 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 i15 = i5 + 4 | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 HEAPF32[i9 >> 2] = +(i14 | 0);
 HEAPF32[i9 + 4 >> 2] = +(i5 | 0);
 i16 = i3 + 8 | 0;
 if ((HEAP32[i16 >> 2] | 0) == 0) {
  i17 = i14;
  i18 = i5;
 } else {
  i5 = i3 | 0;
  i3 = 0;
  while (1) {
   i14 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i3 << 2) >> 2] | 0;
   FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] & 3](i14, i7, i9) | 0;
   i3 = i3 + 1 | 0;
   if (i3 >>> 0 >= (HEAP32[i16 >> 2] | 0) >>> 0) {
    break;
   }
  }
  i17 = HEAP32[i13 >> 2] | 0;
  i18 = HEAP32[i15 >> 2] | 0;
 }
 HEAPF32[i10 >> 2] = +(i17 | 0);
 HEAPF32[i10 + 4 >> 2] = +(i18 | 0);
 i18 = i2 + 8 | 0;
 if ((HEAP32[i18 >> 2] | 0) != 0) {
  i17 = i2 | 0;
  i2 = 0;
  while (1) {
   i15 = HEAP32[(HEAP32[i17 >> 2] | 0) + (i2 << 2) >> 2] | 0;
   FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i15 >> 2] | 0) + 16 >> 2] & 3](i15, i8, i10) | 0;
   i2 = i2 + 1 | 0;
   if (i2 >>> 0 >= (HEAP32[i18 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 __ZN7WebCore20TransformationMatrix5blendERKS0_d(i8, i7, d4);
 i7 = i1 | 0;
 i1 = __ZN3WTF10fastMallocEj(136) | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = __ZTVN7WebCore26Matrix3DTransformOperationE + 8;
 i18 = i1 + 8 | 0;
 HEAPF64[i18 >> 3] = +1;
 _memset(i1 + 16 | 0, 0, 32) | 0;
 HEAPF64[i1 + 48 >> 3] = +1;
 _memset(i1 + 56 | 0, 0, 32) | 0;
 HEAPF64[i1 + 88 >> 3] = +1;
 _memset(i1 + 96 | 0, 0, 32) | 0;
 HEAPF64[i1 + 128 >> 3] = +1;
 if ((i18 | 0) == (i8 | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i7, 1);
  i19 = HEAP32[i11 >> 2] | 0;
  i20 = HEAP32[i12 >> 2] | 0;
  i21 = i19 + (i20 << 2) | 0;
  i22 = i1;
  HEAP32[i21 >> 2] = i22;
  i23 = i20 + 1 | 0;
  HEAP32[i12 >> 2] = i23;
  STACKTOP = i6;
  return;
 }
 _memcpy(i18 | 0, i8 | 0, 128) | 0;
 __ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i7, 1);
 i19 = HEAP32[i11 >> 2] | 0;
 i20 = HEAP32[i12 >> 2] | 0;
 i21 = i19 + (i20 << 2) | 0;
 i22 = i1;
 HEAP32[i21 >> 2] = i22;
 i23 = i20 + 1 | 0;
 HEAP32[i12 >> 2] = i23;
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore19TransformOperations15operationsMatchERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 if ((i4 | 0) != (HEAP32[i5 >> 2] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 i7 = i1 | 0;
 i1 = i2 | 0;
 i2 = 0;
 while (1) {
  if (i2 >>> 0 >= i4 >>> 0) {
   i6 = 1;
   i8 = 12;
   break;
  }
  if ((HEAP32[i3 >> 2] | 0) >>> 0 <= i2 >>> 0) {
   i8 = 5;
   break;
  }
  i9 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i2 << 2) >> 2] | 0;
  if ((HEAP32[i5 >> 2] | 0) >>> 0 <= i2 >>> 0) {
   i8 = 7;
   break;
  }
  if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i9 >> 2] | 0) + 28 >> 2] & 7](i9, HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 << 2) >> 2] | 0) | 0) {
   i2 = i2 + 1 | 0;
  } else {
   i6 = 0;
   i8 = 10;
   break;
  }
 }
 if ((i8 | 0) == 7) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i8 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i8 | 0) == 10) {
  return i6 | 0;
 } else if ((i8 | 0) == 12) {
  return i6 | 0;
 }
 return 0;
}
function __ZNK7WebCore19TransformOperationseqERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 if ((i4 | 0) != (HEAP32[i5 >> 2] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 i7 = i1 | 0;
 i1 = i2 | 0;
 i2 = 0;
 while (1) {
  if (i2 >>> 0 >= i4 >>> 0) {
   i6 = 1;
   i8 = 10;
   break;
  }
  if ((HEAP32[i3 >> 2] | 0) >>> 0 <= i2 >>> 0) {
   i8 = 5;
   break;
  }
  i9 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i2 << 2) >> 2] | 0;
  if ((HEAP32[i5 >> 2] | 0) >>> 0 <= i2 >>> 0) {
   i8 = 7;
   break;
  }
  if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 7](i9, HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 << 2) >> 2] | 0) | 0) {
   i2 = i2 + 1 | 0;
  } else {
   i6 = 0;
   i8 = 11;
   break;
  }
 }
 if ((i8 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i8 | 0) == 7) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i8 | 0) == 10) {
  return i6 | 0;
 } else if ((i8 | 0) == 11) {
  return i6 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore19TransformOperationsC2Eb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 | 0;
 HEAP32[i3 >> 2] = 0;
 i4 = i1 + 4 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 8 | 0;
 HEAP32[i5 >> 2] = 0;
 if (!i2) {
  return;
 }
 i2 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i2 + 4 >> 2] = 1;
 HEAP32[i2 >> 2] = H_BASE + 16;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == (HEAP32[i4 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1 | 0, i6 + 1 | 0);
  HEAP32[(HEAP32[i3 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) >> 2] = i2;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  return;
 } else {
  HEAP32[(HEAP32[i3 >> 2] | 0) + (i6 << 2) >> 2] = i2;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  return;
 }
}
function __ZN7WebCore19TransformOperationsC1Eb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 | 0;
 HEAP32[i3 >> 2] = 0;
 i4 = i1 + 4 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 8 | 0;
 HEAP32[i5 >> 2] = 0;
 if (!i2) {
  return;
 }
 i2 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i2 + 4 >> 2] = 1;
 HEAP32[i2 >> 2] = H_BASE + 16;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == (HEAP32[i4 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1 | 0, i6 + 1 | 0);
  HEAP32[(HEAP32[i3 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) >> 2] = i2;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  return;
 } else {
  HEAP32[(HEAP32[i3 >> 2] | 0) + (i6 << 2) >> 2] = i2;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  return;
 }
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
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_viiidi + 2;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_iii + 2;
}
function __ZN7WebCore26IdentityTransformOperation5blendEPKNS_18TransformOperationEdb(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore26IdentityTransformOperation10isSameTypeERKNS_18TransformOperationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 7](i2) | 0) == 20 | 0;
}
function __ZNK7WebCore26IdentityTransformOperationeqERKNS_18TransformOperationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 7](i1, i2) | 0;
}
function dynCall_viiidi(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiidi[i1 & 3](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0);
}
function __ZNK7WebCore26IdentityTransformOperation5applyERNS_20TransformationMatrixERKNS_9FloatSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0) | 0;
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
function b2(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 abort(2);
}
function __ZN7WebCore26IdentityTransformOperationD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZNK7WebCore26IdentityTransformOperation10isIdentityEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
 return 0;
}
function __ZNK7WebCore26IdentityTransformOperation4typeEv(i1) {
 i1 = i1 | 0;
 return 20;
}
function __ZN7WebCore26IdentityTransformOperationD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
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
  var FUNCTION_TABLE_ii = [b0,b0,__ZNK7WebCore26IdentityTransformOperation10isIdentityEv,b0,__ZNK7WebCore26IdentityTransformOperation4typeEv,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore26IdentityTransformOperationD0Ev,b1,__ZN7WebCore26IdentityTransformOperationD1Ev,b1,b1,b1];
  var FUNCTION_TABLE_viiidi = [b2,b2,__ZN7WebCore26IdentityTransformOperation5blendEPKNS_18TransformOperationEdb,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore19TransformOperationsC2Eb,b3];
  var FUNCTION_TABLE_iiii = [b4,b4,__ZNK7WebCore26IdentityTransformOperation5applyERNS_20TransformationMatrixERKNS_9FloatSizeE,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6,__ZNK7WebCore26IdentityTransformOperation10isSameTypeERKNS_18TransformOperationE,b6,__ZNK7WebCore26IdentityTransformOperationeqERKNS_18TransformOperationE,b6,b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vi: dynCall_vi, dynCall_viiidi: dynCall_viiidi, dynCall_vii: dynCall_vii, dynCall_iiii: dynCall_iiii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vi": invoke_vi, "invoke_viiidi": invoke_viiidi, "invoke_vii": invoke_vii, "invoke_iiii": invoke_iiii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN7WebCore26Matrix3DTransformOperationE": __ZTVN7WebCore26Matrix3DTransformOperationE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_viiidi = Module["dynCall_viiidi"] = asm["dynCall_viiidi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore19TransformOperationseqERKS0_","_strlen","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore19TransformOperations15operationsMatchERKS0_","__ZN7WebCore26IdentityTransformOperation5blendEPKNS_18TransformOperationEdb","__ZNK7WebCore19TransformOperations31blendByUsingMatrixInterpolationERKS0_dRKNS_10LayoutSizeE","_memset","__ZNK7WebCore19TransformOperations25blendByMatchingOperationsERKS0_RKd","__ZNK7WebCore26IdentityTransformOperation10isSameTypeERKNS_18TransformOperationE","_memcpy","__ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore26IdentityTransformOperation5applyERNS_20TransformationMatrixERKNS_9FloatSizeE","__ZNK7WebCore26IdentityTransformOperationeqERKNS_18TransformOperationE","__ZN7WebCore26IdentityTransformOperationD0Ev","__ZNK7WebCore26IdentityTransformOperation10isIdentityEv","__ZN7WebCore19TransformOperationsC2Eb","__ZN7WebCore26IdentityTransformOperationD1Ev","__ZNK7WebCore19TransformOperations5blendERKS0_dRKNS_10LayoutSizeE","__ZNK7WebCore26IdentityTransformOperation4typeEv"]

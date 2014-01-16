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
H_BASE = parentModule["_malloc"](104 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 104;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore12FilterEffectD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEEE=(H_BASE+72)|0;
  var __ZTVN7WebCore12FilterEffectE=(H_BASE+8)|0;
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
  var invoke_iiii=env.invoke_iiii;
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
function __ZN7WebCore12FilterEffect21copyUnmultipliedImageEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i10 = i1 + 12 | 0;
 do {
  if ((HEAP32[i10 >> 2] | 0) == 0) {
   i11 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i11 | 0) != 0) {
    i12 = i1 + 44 | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    i14 = HEAP32[i12 + 4 >> 2] | 0;
    HEAP32[i7 >> 2] = 0;
    HEAP32[i7 + 4 >> 2] = 0;
    i12 = i6 + 8 | 0;
    HEAP32[i12 >> 2] = i13;
    HEAP32[i12 + 4 >> 2] = i14;
    __ZNK7WebCore11ImageBuffer24getUnmultipliedImageDataERKNS_7IntRectENS0_16CoordinateSystemE(i5, i11, i8, 0);
    i11 = i5 | 0;
    i14 = HEAP32[i11 >> 2] | 0;
    HEAP32[i11 >> 2] = 0;
    i12 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = i14;
    do {
     if ((i12 | 0) != 0) {
      i14 = i12 + 4 | 0;
      i13 = i14 | 0;
      i15 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
      if ((i15 | 0) != 0) {
       HEAP32[i13 >> 2] = i15;
       break;
      }
      i15 = i14 - 4 | 0;
      if ((i15 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 12 >> 2] & 15](i15);
     }
    } while (0);
    i12 = HEAP32[i11 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    i15 = i12 + 4 | 0;
    i12 = i15 | 0;
    i14 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
    if ((i14 | 0) != 0) {
     HEAP32[i12 >> 2] = i14;
     break;
    }
    i14 = i15 - 4 | 0;
    if ((i14 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 12 >> 2] & 15](i14);
    break;
   }
   i14 = i1 + 44 | 0;
   i15 = i1 + 48 | 0;
   __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE19createUninitializedEj(i9, Math_imul(HEAP32[i14 >> 2] << 2, HEAP32[i15 >> 2] | 0) | 0);
   i12 = i9 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i13;
   do {
    if ((i12 | 0) != 0) {
     i13 = i12 + 4 | 0;
     i16 = i13 | 0;
     i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i17 | 0) != 0) {
      HEAP32[i16 >> 2] = i17;
      break;
     }
     i17 = i13 - 4 | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 12 >> 2] & 15](i17);
    }
   } while (0);
   i12 = HEAP32[i1 + 16 >> 2] | 0;
   i11 = HEAP32[i12 + 16 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i18 = 0;
    } else {
     if ((HEAP32[i11 + 12 >> 2] | 0) == 0) {
      i18 = 0;
      break;
     }
     i18 = HEAP32[i12 + 8 >> 2] | 0;
    }
   } while (0);
   i12 = HEAP32[i10 >> 2] | 0;
   i11 = HEAP32[i12 + 16 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i19 = 0;
    } else {
     if ((HEAP32[i11 + 12 >> 2] | 0) == 0) {
      i19 = 0;
      break;
     }
     i19 = HEAP32[i12 + 8 >> 2] | 0;
    }
   } while (0);
   i12 = Math_imul(HEAP32[i14 >> 2] << 2, HEAP32[i15 >> 2] | 0) | 0;
   i11 = i18 + i12 | 0;
   if ((i12 | 0) > 0) {
    i20 = i19;
    i21 = i18;
   } else {
    break;
   }
   while (1) {
    i12 = HEAP8[i21 + 3 | 0] | 0;
    i17 = i12 & 255;
    if (i12 << 24 >> 24 == 0) {
     HEAP8[i20] = 0;
     HEAP8[i20 + 1 | 0] = 0;
     HEAP8[i20 + 2 | 0] = 0;
    } else {
     HEAP8[i20] = (((HEAPU8[i21] | 0) * 255 & -1) >>> 0) / (i17 >>> 0) & -1;
     HEAP8[i20 + 1 | 0] = (((HEAPU8[i21 + 1 | 0] | 0) * 255 & -1) >>> 0) / (i17 >>> 0) & -1;
     HEAP8[i20 + 2 | 0] = (((HEAPU8[i21 + 2 | 0] | 0) * 255 & -1) >>> 0) / (i17 >>> 0) & -1;
    }
    HEAP8[i20 + 3 | 0] = i12;
    i12 = i21 + 4 | 0;
    if (i12 >>> 0 < i11 >>> 0) {
     i20 = i20 + 4 | 0;
     i21 = i12;
    } else {
     break;
    }
   }
  }
 } while (0);
 __ZN7WebCore12FilterEffect14copyImageBytesEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEES5_RKNS_7IntRectE(i1, HEAP32[i10 >> 2] | 0, i2, i3);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12FilterEffect22copyPremultipliedImageEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i10 = i1 + 16 | 0;
 do {
  if ((HEAP32[i10 >> 2] | 0) == 0) {
   i11 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i11 | 0) != 0) {
    i12 = i1 + 44 | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    i14 = HEAP32[i12 + 4 >> 2] | 0;
    HEAP32[i7 >> 2] = 0;
    HEAP32[i7 + 4 >> 2] = 0;
    i12 = i6 + 8 | 0;
    HEAP32[i12 >> 2] = i13;
    HEAP32[i12 + 4 >> 2] = i14;
    __ZNK7WebCore11ImageBuffer25getPremultipliedImageDataERKNS_7IntRectENS0_16CoordinateSystemE(i5, i11, i8, 0);
    i11 = i5 | 0;
    i14 = HEAP32[i11 >> 2] | 0;
    HEAP32[i11 >> 2] = 0;
    i12 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = i14;
    do {
     if ((i12 | 0) != 0) {
      i14 = i12 + 4 | 0;
      i13 = i14 | 0;
      i15 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
      if ((i15 | 0) != 0) {
       HEAP32[i13 >> 2] = i15;
       break;
      }
      i15 = i14 - 4 | 0;
      if ((i15 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 12 >> 2] & 15](i15);
     }
    } while (0);
    i12 = HEAP32[i11 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    i15 = i12 + 4 | 0;
    i12 = i15 | 0;
    i14 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
    if ((i14 | 0) != 0) {
     HEAP32[i12 >> 2] = i14;
     break;
    }
    i14 = i15 - 4 | 0;
    if ((i14 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 12 >> 2] & 15](i14);
    break;
   }
   i14 = i1 + 44 | 0;
   i15 = i1 + 48 | 0;
   __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE19createUninitializedEj(i9, Math_imul(HEAP32[i14 >> 2] << 2, HEAP32[i15 >> 2] | 0) | 0);
   i12 = i9 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i13;
   do {
    if ((i12 | 0) != 0) {
     i13 = i12 + 4 | 0;
     i16 = i13 | 0;
     i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i17 | 0) != 0) {
      HEAP32[i16 >> 2] = i17;
      break;
     }
     i17 = i13 - 4 | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 12 >> 2] & 15](i17);
    }
   } while (0);
   i12 = HEAP32[i1 + 12 >> 2] | 0;
   i11 = HEAP32[i12 + 16 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i18 = 0;
    } else {
     if ((HEAP32[i11 + 12 >> 2] | 0) == 0) {
      i18 = 0;
      break;
     }
     i18 = HEAP32[i12 + 8 >> 2] | 0;
    }
   } while (0);
   i12 = HEAP32[i10 >> 2] | 0;
   i11 = HEAP32[i12 + 16 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i19 = 0;
    } else {
     if ((HEAP32[i11 + 12 >> 2] | 0) == 0) {
      i19 = 0;
      break;
     }
     i19 = HEAP32[i12 + 8 >> 2] | 0;
    }
   } while (0);
   i12 = Math_imul(HEAP32[i14 >> 2] << 2, HEAP32[i15 >> 2] | 0) | 0;
   i11 = i18 + i12 | 0;
   if ((i12 | 0) > 0) {
    i20 = i19;
    i21 = i18;
   } else {
    break;
   }
   while (1) {
    i12 = HEAP8[i21 + 3 | 0] | 0;
    i17 = i12 & 255;
    HEAP8[i20] = ((Math_imul(HEAPU8[i21] | 0, i17) | 0) >>> 0) / 255 & -1;
    HEAP8[i20 + 1 | 0] = ((Math_imul(HEAPU8[i21 + 1 | 0] | 0, i17) | 0) >>> 0) / 255 & -1;
    HEAP8[i20 + 2 | 0] = ((Math_imul(HEAPU8[i21 + 2 | 0] | 0, i17) | 0) >>> 0) / 255 & -1;
    HEAP8[i20 + 3 | 0] = i12;
    i12 = i21 + 4 | 0;
    if (i12 >>> 0 < i11 >>> 0) {
     i20 = i20 + 4 | 0;
     i21 = i12;
    } else {
     break;
    }
   }
  }
 } while (0);
 __ZN7WebCore12FilterEffect14copyImageBytesEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEES5_RKNS_7IntRectE(i1, HEAP32[i10 >> 2] | 0, i2, i3);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12FilterEffect13asImageBufferEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = i9;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = i12;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = i1 + 8 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 if ((i16 | 0) != 0) {
  i17 = i16;
  STACKTOP = i2;
  return i17 | 0;
 }
 i16 = i1 + 12 | 0;
 do {
  if ((HEAP32[i16 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 16 >> 2] | 0) == 0) {
    i17 = 0;
   } else {
    break;
   }
   STACKTOP = i2;
   return i17 | 0;
  }
 } while (0);
 i18 = i1 + 44 | 0;
 i19 = HEAP32[i18 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i18 >> 2];
 HEAP32[i4 + 4 >> 2] = i19;
 i19 = HEAP32[i1 + 116 >> 2] | 0;
 i4 = HEAP32[(HEAP32[i1 + 68 >> 2] | 0) + 20 >> 2] | 0;
 HEAP8[i3] = 0;
 i20 = __ZN3WTF10fastMallocEj(144) | 0;
 i21 = i20;
 __ZN7WebCore11ImageBufferC1ERKNS_7IntSizeEfNS_10ColorSpaceENS_13RenderingModeERb(i21, i5, +1, i19, i4, i3);
 do {
  if ((HEAP8[i3] & 1) == 0) {
   if ((i20 | 0) == 0) {
    i22 = 0;
    break;
   }
   __ZN7WebCore11ImageBufferD1Ev(i21);
   __ZN3WTF8fastFreeEPv(i20);
   i22 = 0;
  } else {
   i22 = i21;
  }
 } while (0);
 i21 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = i22;
 if ((i21 | 0) == 0) {
  i23 = i22;
 } else {
  __ZN7WebCore11ImageBufferD1Ev(i21);
  __ZN3WTF8fastFreeEPv(i21);
  i23 = HEAP32[i15 >> 2] | 0;
 }
 i21 = HEAP32[i18 >> 2] | 0;
 i22 = HEAP32[i18 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 i7 = i6 + 8 | 0;
 HEAP32[i7 >> 2] = i21;
 HEAP32[i7 + 4 >> 2] = i22;
 i7 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i1 = HEAP32[i16 >> 2] | 0;
  HEAP32[i12 >> 2] = i21;
  HEAP32[i12 + 4 >> 2] = i22;
  HEAP32[i14 >> 2] = 0;
  HEAP32[i14 + 4 >> 2] = 0;
  __ZN7WebCore11ImageBuffer12putByteArrayENS_8MultiplyEPN3JSC21GenericTypedArrayViewINS2_19Uint8ClampedAdaptorEEERKNS_7IntSizeERKNS_7IntRectERKNS_8IntPointENS0_16CoordinateSystemE(i23, 1, i1, i13, i8, i14, 0);
 } else {
  HEAP32[i9 >> 2] = i21;
  HEAP32[i9 + 4 >> 2] = i22;
  HEAP32[i11 >> 2] = 0;
  HEAP32[i11 + 4 >> 2] = 0;
  __ZN7WebCore11ImageBuffer12putByteArrayENS_8MultiplyEPN3JSC21GenericTypedArrayViewINS2_19Uint8ClampedAdaptorEEERKNS_7IntSizeERKNS_7IntRectERKNS_8IntPointENS0_16CoordinateSystemE(i23, 0, i7, i10, i8, i11, 0);
 }
 i17 = HEAP32[i15 >> 2] | 0;
 STACKTOP = i2;
 return i17 | 0;
}
function __ZN7WebCore12FilterEffect14copyImageBytesEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEES5_RKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = i4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) < 0) {
   i7 = 5;
  } else {
   i8 = HEAP32[i4 + 4 >> 2] | 0;
   if ((i8 | 0) < 0) {
    i7 = 5;
    break;
   }
   i9 = HEAP32[i4 + 8 >> 2] | 0;
   if ((i9 + i6 | 0) > (HEAP32[i1 + 44 >> 2] | 0)) {
    i7 = 5;
    break;
   }
   if (((HEAP32[i4 + 12 >> 2] | 0) + i8 | 0) > (HEAP32[i1 + 48 >> 2] | 0)) {
    i7 = 5;
   } else {
    i10 = i6;
    i11 = i9;
   }
  }
 } while (0);
 if ((i7 | 0) == 5) {
  i7 = HEAP32[i3 + 16 >> 2] | 0;
  do {
   if ((i7 | 0) == 0) {
    i12 = 0;
    i13 = 0;
   } else {
    if ((HEAP32[i7 + 12 >> 2] | 0) == 0) {
     i12 = 0;
     i13 = 0;
     break;
    }
    i12 = HEAP32[i3 + 20 >> 2] | 0;
    i13 = HEAP32[i3 + 8 >> 2] | 0;
   }
  } while (0);
  _memset(i13 | 0, 0, i12 | 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
  i11 = HEAP32[i4 + 8 >> 2] | 0;
 }
 i5 = i11 + i10 | 0;
 if ((i5 | 0) < 1) {
  return;
 }
 i11 = HEAP32[i4 + 4 >> 2] | 0;
 i12 = (HEAP32[i4 + 12 >> 2] | 0) + i11 | 0;
 if ((i12 | 0) < 1) {
  return;
 }
 i13 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i10 | 0) >= (i13 | 0)) {
  return;
 }
 i7 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i11 | 0) >= (i7 | 0)) {
  return;
 }
 i1 = (i10 | 0) < 0;
 i6 = i1 ? -i10 | 0 : 0;
 i9 = i1 ? 0 : i10;
 i10 = (i11 | 0) < 0;
 i1 = i10 ? 0 : i11;
 i8 = i10 ? -i11 | 0 : 0;
 i11 = (i12 | 0) > (i7 | 0) ? i7 : i12;
 i12 = ((i5 | 0) > (i13 | 0) ? i13 : i5) - i9 << 2;
 i5 = HEAP32[i4 + 8 >> 2] | 0;
 i4 = i5 << 2;
 i7 = i13 << 2;
 i10 = HEAP32[i3 + 16 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i14 = 0;
  } else {
   if ((HEAP32[i10 + 12 >> 2] | 0) == 0) {
    i14 = 0;
    break;
   }
   i14 = HEAP32[i3 + 8 >> 2] | 0;
  }
 } while (0);
 i3 = i14 + ((Math_imul(i5, i8) | 0) + i6 << 2) | 0;
 i6 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i15 = 0;
  } else {
   if ((HEAP32[i6 + 12 >> 2] | 0) == 0) {
    i15 = 0;
    break;
   }
   i15 = HEAP32[i2 + 8 >> 2] | 0;
  }
 } while (0);
 if ((i1 | 0) >= (i11 | 0)) {
  return;
 }
 i2 = i1;
 i6 = i3;
 i3 = i15 + ((Math_imul(i13, i1) | 0) + i9 << 2) | 0;
 while (1) {
  _memcpy(i6 | 0, i3 | 0, i12) | 0;
  i9 = i2 + 1 | 0;
  if ((i9 | 0) < (i11 | 0)) {
   i2 = i9;
   i6 = i6 + i4 | 0;
   i3 = i3 + i7 | 0;
  } else {
   break;
  }
 }
 return;
}
function __ZN3JSC23JSGenericTypedArrayViewINS_19Uint8ClampedAdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i3 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = 3;
  } else {
   if ((HEAP32[i8 + 12 >> 2] | 0) == 0) {
    i9 = 3;
    break;
   }
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = i8;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i12 = i8;
   i13 = i11;
   i14 = 0;
   i15 = HEAP32[i7 >> 2] | 0;
  }
 } while (0);
 if ((i9 | 0) == 3) {
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = 0;
  i12 = 0;
  i13 = i9;
  i14 = 1;
  i15 = i3;
 }
 i3 = HEAP32[i15 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i16 = 0;
   i17 = 0;
  } else {
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i18 = 0;
   } else {
    i18 = HEAP32[i15 + 12 >> 2] & 2147483647;
   }
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i16 = 0;
    i17 = i18;
    break;
   }
   i16 = HEAP32[i15 + 20 >> 2] | 0;
   i17 = i18;
  }
 } while (0);
 __ZN3JSC17JSArrayBufferView19ConstructionContextC1ERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i5, i1, i2, i6, i17, i16);
 i16 = HEAP32[i13 >> 2] | 0;
 if ((i16 | 0) != 0) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i16 | 0);
 }
 i16 = i1 + 13264 | 0;
 i13 = i16 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i19 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i16, 20) | 0;
 } else {
  HEAP32[i13 >> 2] = HEAP32[i17 >> 2];
  i19 = i17;
 }
 HEAP32[i19 >> 2] = 0;
 i17 = i19;
 i13 = i19;
 __ZN3JSC17JSArrayBufferViewC2ERNS_2VMERNS0_19ConstructionContextE(i13, i1, i5);
 __ZN3JSC17JSArrayBufferView14finishCreationERNS_2VME(i13, i1);
 if (i14) {
  STACKTOP = i4;
  return i17 | 0;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i12 | 0);
 STACKTOP = i4;
 return i17 | 0;
}
function __ZN7WebCore12FilterEffect5applyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 if ((HEAP32[i1 + 12 >> 2] | 0) != 0) {
  return;
 }
 if ((HEAP32[i1 + 16 >> 2] | 0) != 0) {
  return;
 }
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = (i3 | 0) == 0;
 L10 : do {
  if (!i4) {
   i5 = i1 + 20 | 0;
   i6 = i1;
   i7 = 0;
   i8 = i3;
   L12 : while (1) {
    if (i8 >>> 0 <= i7 >>> 0) {
     i9 = 7;
     break;
    }
    i10 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i7 << 2) >> 2] | 0;
    __ZN7WebCore12FilterEffect5applyEv(i10);
    do {
     if ((HEAP32[i10 + 8 >> 2] | 0) == 0) {
      if ((HEAP32[i10 + 12 >> 2] | 0) != 0) {
       break;
      }
      if ((HEAP32[i10 + 16 >> 2] | 0) == 0) {
       i9 = 26;
       break L12;
      }
     }
    } while (0);
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 40 >> 2] & 3](i1, i10, i7);
    i11 = i7 + 1 | 0;
    if (i11 >>> 0 >= i3 >>> 0) {
     break L10;
    }
    i7 = i11;
    i8 = HEAP32[i2 >> 2] | 0;
   }
   if ((i9 | 0) == 7) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i9 | 0) == 26) {
    return;
   }
  }
 } while (0);
 i9 = i1;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] & 15](i1);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] & 7](i1, HEAP32[i1 + 112 >> 2] | 0);
 i8 = HEAP32[i1 + 44 >> 2] | 0;
 i7 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i8 | 0) < 0 | +(i8 | 0) > +5e3) {
  return;
 }
 if (!(+(i7 | 0) <= +5e3 & (i7 | 0) > -1)) {
  return;
 }
 L30 : do {
  if (!(i4 | (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 44 >> 2] & 15](i1) | 0) ^ 1)) {
   i7 = i1 + 20 | 0;
   i8 = 0;
   while (1) {
    if ((HEAP32[i2 >> 2] | 0) >>> 0 <= i8 >>> 0) {
     break;
    }
    i6 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i8 << 2) >> 2] | 0;
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 15](i6);
    i8 = i8 + 1 | 0;
    if (i8 >>> 0 >= i3 >>> 0) {
     break L30;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 15](i1);
 return;
}
function __ZN7WebCore12FilterEffect21clearResultsRecursiveEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 12 | 0;
 do {
  if ((i3 | 0) == 0) {
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) != 0) {
    i6 = i5;
    i7 = 5;
    break;
   }
   if ((HEAP32[i1 + 16 >> 2] | 0) != 0) {
    i7 = 9;
   }
  } else {
   HEAP32[i2 >> 2] = 0;
   __ZN7WebCore11ImageBufferD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i7 = 9;
   } else {
    i6 = i5;
    i7 = 5;
   }
  }
 } while (0);
 do {
  if ((i7 | 0) == 5) {
   HEAP32[i1 + 12 >> 2] = 0;
   i4 = i6 + 4 | 0;
   i3 = i4 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i3 >> 2] = i2;
    i7 = 9;
    break;
   }
   i2 = i4 - 4 | 0;
   if ((i2 | 0) == 0) {
    i7 = 9;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 15](i2);
   i7 = 9;
  }
 } while (0);
 do {
  if ((i7 | 0) == 9) {
   i6 = i1 + 16 | 0;
   i2 = HEAP32[i6 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   HEAP32[i6 >> 2] = 0;
   i6 = i2 + 4 | 0;
   i2 = i6 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = i4;
    break;
   }
   i4 = i6 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 15](i4);
  }
 } while (0);
 i4 = i1 + 28 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i2 = i1 + 20 | 0;
 i1 = 0;
 i3 = i6;
 while (1) {
  if (i3 >>> 0 <= i1 >>> 0) {
   i7 = 17;
   break;
  }
  __ZN7WebCore12FilterEffect21clearResultsRecursiveEv(HEAP32[(HEAP32[i2 >> 2] | 0) + (i1 << 2) >> 2] | 0);
  i5 = i1 + 1 | 0;
  if (i5 >>> 0 >= i6 >>> 0) {
   i7 = 22;
   break;
  }
  i1 = i5;
  i3 = HEAP32[i4 >> 2] | 0;
 }
 if ((i7 | 0) == 17) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i7 | 0) == 22) {
  return;
 }
}
function __ZN7WebCore12FilterEffectD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 20 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
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
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
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
  HEAP32[i1 + 24 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 15](i3);
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 15](i6);
  }
 } while (0);
 i2 = i1 + 8 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore11ImageBufferD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore12FilterEffectD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 20 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
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
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
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
  HEAP32[i1 + 24 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 15](i3);
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 15](i6);
  }
 } while (0);
 i2 = i1 + 8 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore11ImageBufferD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore12FilterEffect26determineAbsolutePaintRectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 + 16 | 0;
 i4 = i2 + 32 | 0;
 i5 = i2 + 48 | 0;
 i6 = i1 + 36 | 0;
 i7 = i2 | 0;
 _memset(i7 | 0, 0, 16) | 0;
 i8 = i6;
 HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 i7 = i1 + 28 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L1 : do {
  if ((i8 | 0) != 0) {
   i9 = i1 + 20 | 0;
   i10 = i3;
   i11 = 0;
   i12 = i8;
   while (1) {
    if (i12 >>> 0 <= i11 >>> 0) {
     break;
    }
    i13 = (HEAP32[(HEAP32[i9 >> 2] | 0) + (i11 << 2) >> 2] | 0) + 36 | 0;
    HEAP32[i10 >> 2] = HEAP32[i13 >> 2];
    HEAP32[i10 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
    HEAP32[i10 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
    HEAP32[i10 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
    __ZN7WebCore7IntRect5uniteERKS0_(i6, i3);
    i13 = i11 + 1 | 0;
    if (i13 >>> 0 >= i8 >>> 0) {
     break L1;
    }
    i11 = i13;
    i12 = HEAP32[i7 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i7 = i1 + 52 | 0;
 if ((HEAP8[i1 + 108 | 0] & 1) == 0) {
  __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i5, i7);
  __ZN7WebCore7IntRect5uniteERKS0_(i6, i5);
  STACKTOP = i2;
  return;
 } else {
  __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i4, i7);
  __ZN7WebCore7IntRect9intersectERKS0_(i6, i4);
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore12FilterEffect25transformResultColorSpaceENS_10ColorSpaceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 do {
  if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 12 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i1 + 16 >> 2] | 0) != 0) {
    break;
   }
   return;
  }
 } while (0);
 i3 = i1 + 116 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  return;
 }
 i4 = __ZN7WebCore12FilterEffect13asImageBufferEv(i1) | 0;
 __ZN7WebCore11ImageBuffer19transformColorSpaceENS_10ColorSpaceES1_(i4, HEAP32[i3 >> 2] | 0, i2);
 HEAP32[i3 >> 2] = i2;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   HEAP32[i2 >> 2] = 0;
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 15](i6);
  }
 } while (0);
 i3 = i1 + 16 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 4 | 0;
 i1 = i3 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i1 >> 2] = i2;
  return;
 }
 i2 = i3 - 4 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 15](i2);
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = (i2 | 0) == 0;
 if (!i7) {
  i8 = i2 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 if (i8 >>> 0 < i3 >>> 0) {
  i9 = 0;
 } else {
  i9 = (i8 - i3 | 0) >>> 0 >= i4 >>> 0;
 }
 if (!i7) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 }
 if (i9) {
  i9 = __ZN3WTF10fastMallocEj(24) | 0;
  if (!i7) {
   i8 = i2 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
  i8 = i6 | 0;
  HEAP32[i8 >> 2] = i2;
  __ZN3JSC15ArrayBufferViewC2EN3WTF10PassRefPtrINS_11ArrayBufferEEEj(i9, i6, i3);
  i3 = HEAP32[i8 >> 2] | 0;
  if ((i3 | 0) != 0) {
   __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i3 | 0);
  }
  HEAP32[i9 >> 2] = H_BASE + 80;
  HEAP32[i9 + 20 >> 2] = i4;
  HEAP32[i1 >> 2] = i9;
 } else {
  HEAP32[i1 >> 2] = 0;
 }
 if (i7) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 STACKTOP = i5;
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE19createUninitializedEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 do {
  if ((i2 | 0) < 0) {
   i6 = 3;
  } else {
   __ZN3WTF13tryFastMallocEj(i4, i2);
   i7 = i4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   if ((i8 | 0) == 0) {
    i6 = 3;
    break;
   }
   i7 = __ZN3WTF10fastMallocEj(24) | 0;
   i9 = i7;
   HEAP32[i9 >> 2] = 2;
   _memset(i7 + 4 | 0, 0, 20) | 0;
   HEAP32[i7 + 12 >> 2] = i8;
   HEAP32[i7 + 16 >> 2] = i2;
   __ZN3WTF8fastFreeEPv(0);
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = i5 | 0;
   HEAP32[i8 >> 2] = i7;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i1, i5, 0, i2);
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) != 0) {
    __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i9 | 0);
   }
   __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i7);
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i6 | 0) == 3) {
  __ZN3WTF8fastFreeEPv(0);
 }
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12FilterEffect23createImageBufferResultEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 if ((HEAP32[i1 + 44 >> 2] | 0) < 1) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 if ((HEAP32[i1 + 48 >> 2] | 0) < 1) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i6 = i1 + 44 | 0;
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = i7;
 i7 = HEAP32[i1 + 116 >> 2] | 0;
 i6 = HEAP32[(HEAP32[i1 + 68 >> 2] | 0) + 20 >> 2] | 0;
 HEAP8[i3] = 0;
 i8 = __ZN3WTF10fastMallocEj(144) | 0;
 i9 = i8;
 __ZN7WebCore11ImageBufferC1ERKNS_7IntSizeEfNS_10ColorSpaceENS_13RenderingModeERb(i9, i4, +1, i7, i6, i3);
 do {
  if ((HEAP8[i3] & 1) == 0) {
   if ((i8 | 0) == 0) {
    i10 = 0;
    break;
   }
   __ZN7WebCore11ImageBufferD1Ev(i9);
   __ZN3WTF8fastFreeEPv(i8);
   i10 = 0;
  } else {
   i10 = i9;
  }
 } while (0);
 i9 = i1 + 8 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i10;
 if ((i1 | 0) == 0) {
  i5 = i10;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZN7WebCore11ImageBufferD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 i5 = HEAP32[i9 >> 2] | 0;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i2 = HEAP32[i3 + 484 >> 2] | 0;
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i7 = i1 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = __ZN3JSC23JSGenericTypedArrayViewINS_19Uint8ClampedAdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i6, i2, i5) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return i7 | 0;
 }
 i2 = i3 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 15](i2);
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN7WebCore12FilterEffect30createPremultipliedImageResultEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i4 | 0) < 1) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i6 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i6 | 0) < 1) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE19createUninitializedEj(i3, Math_imul(i4 << 2, i6) | 0);
 i6 = i3 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = i1 + 16 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i3;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 + 4 | 0;
   i4 = i3 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i4 >> 2] = i7;
    break;
   }
   i7 = i3 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] & 15](i7);
  }
 } while (0);
 i5 = HEAP32[i6 >> 2] | 0;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore12FilterEffect29createUnmultipliedImageResultEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i4 | 0) < 1) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i6 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i6 | 0) < 1) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE19createUninitializedEj(i3, Math_imul(i4 << 2, i6) | 0);
 i6 = i3 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = i1 + 12 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i3;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 + 4 | 0;
   i4 = i3 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i4 >> 2] = i7;
    break;
   }
   i7 = i3 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] & 15](i7);
  }
 } while (0);
 i5 = HEAP32[i6 >> 2] | 0;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore12FilterEffect11clearResultEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  __ZN7WebCore11ImageBufferD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 12 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   HEAP32[i3 >> 2] = 0;
   i4 = i2 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 15](i6);
  }
 } while (0);
 i2 = i1 + 16 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 15](i3);
 return;
}
function __ZN7WebCore12FilterEffect29forceValidPreMultipliedPixelsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i1 | 0) > 3) {
  i3 = HEAP32[i2 + 8 >> 2] | 0;
  i4 = (i1 | 0) / 4 & -1;
 } else {
  return;
 }
 while (1) {
  i1 = HEAP8[i3 + 3 | 0] | 0;
  if ((HEAPU8[i3] | 0) >>> 0 > (i1 & 255) >>> 0) {
   HEAP8[i3] = i1;
  }
  i2 = i3 + 1 | 0;
  if ((HEAPU8[i2] | 0) >>> 0 > (i1 & 255) >>> 0) {
   HEAP8[i2] = i1;
  }
  i2 = i3 + 2 | 0;
  if ((HEAPU8[i2] | 0) >>> 0 > (i1 & 255) >>> 0) {
   HEAP8[i2] = i1;
  }
  i1 = i4 - 1 | 0;
  if ((i1 | 0) > 0) {
   i3 = i3 + 4 | 0;
   i4 = i1;
  } else {
   break;
  }
 }
 return;
}
function __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) != 0 | (i1 | 0) == 0) {
  return;
 }
 i3 = i1 + 20 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i3);
 }
 __ZN3WTF8fastFreeEPv(HEAP32[i1 + 12 >> 2] | 0);
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i3 & 1 | 0) == 0) {
   i2 = i3;
   if ((i3 | 0) == 0) {
    break;
   }
   i4 = i2 + 8 | 0;
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
   }
   i4 = i2 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
    HEAP32[i2 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i5);
   }
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_iiii + 4;
}
function __ZN7WebCore12FilterEffect20asPremultipliedImageERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE19createUninitializedEj(i5, Math_imul(HEAP32[i3 + 8 >> 2] << 2, HEAP32[i3 + 12 >> 2] | 0) | 0);
 i6 = HEAP32[i5 >> 2] | 0;
 __ZN7WebCore12FilterEffect22copyPremultipliedImageEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEERKNS_7IntRectE(i2, i6, i3);
 HEAP32[i1 >> 2] = i6;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12FilterEffect19asUnmultipliedImageERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE19createUninitializedEj(i5, Math_imul(HEAP32[i3 + 8 >> 2] << 2, HEAP32[i3 + 12 >> 2] | 0) | 0);
 i6 = HEAP32[i5 >> 2] | 0;
 __ZN7WebCore12FilterEffect21copyUnmultipliedImageEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEERKNS_7IntRectE(i2, i6, i3);
 HEAP32[i1 >> 2] = i6;
 STACKTOP = i4;
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
function __ZNK7WebCore12FilterEffect31requestedRegionOfInputImageDataERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i2 + 36 | 0;
 i5 = i3;
 i3 = i2 + 44 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = i1;
 i7 = (HEAP32[i4 + 4 >> 2] | 0) - (HEAP32[i5 + 4 >> 2] | 0) | 0;
 HEAP32[i3 >> 2] = (HEAP32[i4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0);
 HEAP32[i3 + 4 >> 2] = i7;
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = i2;
 HEAP32[i7 + 4 >> 2] = i6;
 return;
}
function __ZNK7WebCore12FilterEffect25drawingRegionOfInputImageERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i3 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i4 + 4 >> 2] | 0;
 i4 = i1;
 i7 = (HEAP32[i3 + 4 >> 2] | 0) - (HEAP32[i2 + 40 >> 2] | 0) | 0;
 HEAP32[i4 >> 2] = (HEAP32[i3 >> 2] | 0) - (HEAP32[i2 + 36 >> 2] | 0);
 HEAP32[i4 + 4 >> 2] = i7;
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = i5;
 HEAP32[i7 + 4 >> 2] = i6;
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
function __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 16;
 _memset(i1 + 8 | 0, 0, 25) | 0;
 _memset(i1 + 36 | 0, 0, 32) | 0;
 HEAP32[i1 + 68 >> 2] = i2;
 _memset(i1 + 72 | 0, 0, 36) | 0;
 HEAP8[i1 + 108 | 0] = 1;
 HEAP32[i1 + 112 >> 2] = 2;
 HEAP32[i1 + 116 >> 2] = 0;
 return;
}
function __ZNK3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE10byteLengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
    i3 = 0;
    break;
   }
   i3 = HEAP32[i1 + 20 >> 2] | 0;
  }
 } while (0);
 return i3 | 0;
}
function __ZNK7WebCore12FilterEffect11inputEffectEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP32[i1 + 28 >> 2] | 0) >>> 0 > i2 >>> 0) {
  return HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + (i2 << 2) >> 2] | 0;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
}
function __ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12FilterEffect25transformResultColorSpaceENS_10ColorSpaceE(i2, HEAP32[i1 + 112 >> 2] | 0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 112 >> 2] = i2;
 return;
}
function __ZNK7WebCore12FilterEffect22externalRepresentationERNS_10TextStreamEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return i2 | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 116 >> 2] = i2;
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
function __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore12FilterEffectD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12FilterEffectD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
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
function __ZNK3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE7getTypeEv(i1) {
 i1 = i1 | 0;
 return 3;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function __ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return 0;
}
function __ZNK7WebCore12FilterEffect16filterEffectTypeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
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
  var FUNCTION_TABLE_iiii = [b0,b0,__ZNK7WebCore12FilterEffect22externalRepresentationERNS_10TextStreamEi,b0,__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore12FilterEffectD2Ev,b1,__ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv,b1,__ZN7WebCore12FilterEffectD0Ev,b1,__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEED0Ev,b1,__ZN7WebCore12FilterEffect26determineAbsolutePaintRectEv,b1,__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEED1Ev,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE,b2,__ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE7getTypeEv,b3,__ZNK7WebCore12FilterEffect16filterEffectTypeEv,b3,__ZNK3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE10byteLengthEv,b3,__ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i,b4];
  var FUNCTION_TABLE_v = [b5,b5,v____cxa_pure_virtual__wrapper,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore12FilterEffectD2Ev","_strlen","__ZN7WebCore12FilterEffectD0Ev","__ZN7WebCore12FilterEffect23createImageBufferResultEv","__ZNK3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE10byteLengthEv","_memset","__ZN7WebCore12FilterEffect30createPremultipliedImageResultEv","__ZN7WebCore12FilterEffect25transformResultColorSpaceENS_10ColorSpaceE","__ZN7WebCore12FilterEffect19asUnmultipliedImageERKNS_7IntRectE","__ZNK3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE7getTypeEv","__ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv","__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE19createUninitializedEj","__ZN7WebCore12FilterEffect26determineAbsolutePaintRectEv","__ZN3JSC23JSGenericTypedArrayViewINS_19Uint8ClampedAdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE","__ZN7WebCore12FilterEffect21copyUnmultipliedImageEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEERKNS_7IntRectE","__ZN7WebCore12FilterEffect22copyPremultipliedImageEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEERKNS_7IntRectE","__ZN7WebCore12FilterEffect11clearResultEv","__ZN7WebCore12FilterEffect14copyImageBytesEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEES5_RKNS_7IntRectE","__ZNK7WebCore12FilterEffect31requestedRegionOfInputImageDataERKNS_7IntRectE","__ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i","__ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore12FilterEffect20asPremultipliedImageERKNS_7IntRectE","__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE","__ZNK7WebCore12FilterEffect25drawingRegionOfInputImageERKNS_7IntRectE","__ZN7WebCore12FilterEffect29createUnmultipliedImageResultEv","__ZNK7WebCore12FilterEffect11inputEffectEj","__ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE","__ZN7WebCore12FilterEffect13asImageBufferEv","__ZNK7WebCore12FilterEffect16filterEffectTypeEv","__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj","_memcpy","__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEED1Ev","__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEED0Ev","__ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv","__ZN7WebCore12FilterEffect21clearResultsRecursiveEv","__ZN7WebCore12FilterEffect29forceValidPreMultipliedPixelsEv","__ZN7WebCore12FilterEffectC2EPNS_6FilterE","__ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE","__ZN7WebCore12FilterEffect5applyEv","__ZNK7WebCore12FilterEffect22externalRepresentationERNS_10TextStreamEi"]

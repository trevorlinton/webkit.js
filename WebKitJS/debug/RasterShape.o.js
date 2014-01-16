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
H_BASE = parentModule["_malloc"](56 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 56;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore23MarginIntervalGeneratorC1Ej;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
  var __ZTVN7WebCore11RasterShapeE=(H_BASE+8)|0;
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
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _ceilf=env._ceilf;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _malloc=env._malloc;
  var _sqrt=env._sqrt;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNSt3__16__sortIRNS_6__lessIiiEEPiEEvT0_S5_T_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0;
 i4 = i1;
 i1 = i2;
 L1 : while (1) {
  i2 = i1;
  i5 = i1 - 4 | 0;
  i6 = i4;
  L3 : while (1) {
   i7 = i6;
   i8 = i2 - i7 | 0;
   i9 = i8 >> 2;
   switch (i9 | 0) {
   case 5:
    {
     i10 = 26;
     break L1;
     break;
    }
   case 4:
    {
     i10 = 14;
     break L1;
     break;
    }
   case 2:
    {
     i10 = 4;
     break L1;
     break;
    }
   case 3:
    {
     i10 = 6;
     break L1;
     break;
    }
   case 0:
   case 1:
    {
     i10 = 97;
     break L1;
     break;
    }
   default:
    {}
   }
   if ((i8 | 0) < 124) {
    i10 = 28;
    break L1;
   }
   i11 = (i9 | 0) / 2 & -1;
   i12 = i6 + (i11 << 2) | 0;
   do {
    if ((i8 | 0) > 3996) {
     i13 = (i9 | 0) / 4 & -1;
     i14 = __ZNSt3__17__sort5IRNS_6__lessIiiEEPiEEjT0_S5_S5_S5_S5_T_(i6, i6 + (i13 << 2) | 0, i12, i6 + (i13 + i11 << 2) | 0, i5, 0) | 0;
    } else {
     i13 = HEAP32[i12 >> 2] | 0;
     i15 = HEAP32[i6 >> 2] | 0;
     i16 = HEAP32[i5 >> 2] | 0;
     i17 = (i16 | 0) < (i13 | 0);
     if ((i13 | 0) >= (i15 | 0)) {
      if (!i17) {
       i14 = 0;
       break;
      }
      HEAP32[i12 >> 2] = i16;
      HEAP32[i5 >> 2] = i13;
      i18 = HEAP32[i12 >> 2] | 0;
      i19 = HEAP32[i6 >> 2] | 0;
      if ((i18 | 0) >= (i19 | 0)) {
       i14 = 1;
       break;
      }
      HEAP32[i6 >> 2] = i18;
      HEAP32[i12 >> 2] = i19;
      i14 = 2;
      break;
     }
     if (i17) {
      HEAP32[i6 >> 2] = i16;
      HEAP32[i5 >> 2] = i15;
      i14 = 1;
      break;
     }
     HEAP32[i6 >> 2] = i13;
     HEAP32[i12 >> 2] = i15;
     i13 = HEAP32[i5 >> 2] | 0;
     if ((i13 | 0) >= (i15 | 0)) {
      i14 = 1;
      break;
     }
     HEAP32[i12 >> 2] = i13;
     HEAP32[i5 >> 2] = i15;
     i14 = 2;
    }
   } while (0);
   i11 = HEAP32[i6 >> 2] | 0;
   i9 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i11 | 0) < (i9 | 0)) {
     i20 = i5;
     i21 = i14;
    } else {
     i8 = i5;
     while (1) {
      i22 = i8 - 4 | 0;
      if ((i6 | 0) == (i22 | 0)) {
       break;
      }
      i23 = HEAP32[i22 >> 2] | 0;
      if ((i23 | 0) < (i9 | 0)) {
       i10 = 66;
       break;
      } else {
       i8 = i22;
      }
     }
     if ((i10 | 0) == 66) {
      i10 = 0;
      HEAP32[i6 >> 2] = i23;
      HEAP32[i22 >> 2] = i11;
      i20 = i22;
      i21 = i14 + 1 | 0;
      break;
     }
     i8 = i6 + 4 | 0;
     i15 = HEAP32[i5 >> 2] | 0;
     if ((i11 | 0) < (i15 | 0)) {
      i24 = i8;
     } else {
      i13 = i8;
      while (1) {
       if ((i13 | 0) == (i5 | 0)) {
        i10 = 100;
        break L1;
       }
       i25 = HEAP32[i13 >> 2] | 0;
       i26 = i13 + 4 | 0;
       if ((i11 | 0) < (i25 | 0)) {
        break;
       } else {
        i13 = i26;
       }
      }
      HEAP32[i13 >> 2] = i15;
      HEAP32[i5 >> 2] = i25;
      i24 = i26;
     }
     if ((i24 | 0) == (i5 | 0)) {
      i10 = 101;
      break L1;
     } else {
      i27 = i5;
      i28 = i24;
     }
     while (1) {
      i8 = HEAP32[i6 >> 2] | 0;
      i16 = i28;
      while (1) {
       i29 = HEAP32[i16 >> 2] | 0;
       i30 = i16 + 4 | 0;
       if ((i8 | 0) < (i29 | 0)) {
        i31 = i27;
        break;
       } else {
        i16 = i30;
       }
      }
      while (1) {
       i31 = i31 - 4 | 0;
       i32 = HEAP32[i31 >> 2] | 0;
       if ((i8 | 0) >= (i32 | 0)) {
        break;
       }
      }
      if (i16 >>> 0 >= i31 >>> 0) {
       i6 = i16;
       continue L3;
      }
      HEAP32[i16 >> 2] = i32;
      HEAP32[i31 >> 2] = i29;
      i27 = i31;
      i28 = i30;
     }
    }
   } while (0);
   i11 = i6 + 4 | 0;
   L42 : do {
    if (i11 >>> 0 < i20 >>> 0) {
     i9 = i20;
     i15 = i11;
     i13 = i21;
     i8 = i12;
     while (1) {
      i17 = HEAP32[i8 >> 2] | 0;
      i19 = i15;
      while (1) {
       i33 = HEAP32[i19 >> 2] | 0;
       i34 = i19 + 4 | 0;
       if ((i33 | 0) < (i17 | 0)) {
        i19 = i34;
       } else {
        i35 = i9;
        break;
       }
      }
      while (1) {
       i35 = i35 - 4 | 0;
       i36 = HEAP32[i35 >> 2] | 0;
       if ((i36 | 0) < (i17 | 0)) {
        break;
       }
      }
      if (i19 >>> 0 > i35 >>> 0) {
       i37 = i19;
       i38 = i13;
       i39 = i8;
       break L42;
      }
      HEAP32[i19 >> 2] = i36;
      HEAP32[i35 >> 2] = i33;
      i9 = i35;
      i15 = i34;
      i13 = i13 + 1 | 0;
      i8 = (i8 | 0) == (i19 | 0) ? i35 : i8;
     }
    } else {
     i37 = i11;
     i38 = i21;
     i39 = i12;
    }
   } while (0);
   do {
    if ((i37 | 0) == (i39 | 0)) {
     i40 = i38;
    } else {
     i12 = HEAP32[i39 >> 2] | 0;
     i11 = HEAP32[i37 >> 2] | 0;
     if ((i12 | 0) >= (i11 | 0)) {
      i40 = i38;
      break;
     }
     HEAP32[i37 >> 2] = i12;
     HEAP32[i39 >> 2] = i11;
     i40 = i38 + 1 | 0;
    }
   } while (0);
   if ((i40 | 0) == 0) {
    i41 = __ZNSt3__127__insertion_sort_incompleteIRNS_6__lessIiiEEPiEEbT0_S5_T_(i6, i37, 0) | 0;
    i11 = i37 + 4 | 0;
    if (__ZNSt3__127__insertion_sort_incompleteIRNS_6__lessIiiEEPiEEbT0_S5_T_(i11, i1, 0) | 0) {
     i10 = 78;
     break;
    }
    if (i41) {
     i6 = i11;
     continue;
    }
   }
   i11 = i37;
   if ((i11 - i7 | 0) >= (i2 - i11 | 0)) {
    i10 = 82;
    break;
   }
   __ZNSt3__16__sortIRNS_6__lessIiiEEPiEEvT0_S5_T_(i6, i37, i3);
   i6 = i37 + 4 | 0;
  }
  if ((i10 | 0) == 78) {
   i10 = 0;
   if (i41) {
    i10 = 84;
    break;
   } else {
    i4 = i6;
    i1 = i37;
    continue;
   }
  } else if ((i10 | 0) == 82) {
   i10 = 0;
   __ZNSt3__16__sortIRNS_6__lessIiiEEPiEEvT0_S5_T_(i37 + 4 | 0, i1, i3);
   i4 = i6;
   i1 = i37;
   continue;
  }
 }
 if ((i10 | 0) == 28) {
  i37 = i6 + 8 | 0;
  i4 = i6 + 4 | 0;
  i3 = HEAP32[i4 >> 2] | 0;
  i41 = HEAP32[i6 >> 2] | 0;
  i40 = HEAP32[i37 >> 2] | 0;
  i38 = (i40 | 0) < (i3 | 0);
  do {
   if ((i3 | 0) < (i41 | 0)) {
    if (i38) {
     HEAP32[i6 >> 2] = i40;
     HEAP32[i37 >> 2] = i41;
     i42 = i41;
     break;
    }
    HEAP32[i6 >> 2] = i3;
    HEAP32[i4 >> 2] = i41;
    if ((i40 | 0) >= (i41 | 0)) {
     i42 = i40;
     break;
    }
    HEAP32[i4 >> 2] = i40;
    HEAP32[i37 >> 2] = i41;
    i42 = i41;
   } else {
    if (!i38) {
     i42 = i40;
     break;
    }
    HEAP32[i4 >> 2] = i40;
    HEAP32[i37 >> 2] = i3;
    if ((i40 | 0) >= (i41 | 0)) {
     i42 = i3;
     break;
    }
    HEAP32[i6 >> 2] = i40;
    HEAP32[i4 >> 2] = i41;
    i42 = i3;
   }
  } while (0);
  i3 = i6 + 12 | 0;
  if ((i3 | 0) == (i1 | 0)) {
   return;
  } else {
   i43 = i37;
   i44 = i3;
   i45 = i42;
  }
  while (1) {
   i42 = HEAP32[i44 >> 2] | 0;
   if ((i42 | 0) < (i45 | 0)) {
    i3 = i43;
    i37 = i44;
    i41 = i45;
    while (1) {
     HEAP32[i37 >> 2] = i41;
     if ((i3 | 0) == (i6 | 0)) {
      i46 = i6;
      break;
     }
     i4 = i3 - 4 | 0;
     i40 = HEAP32[i4 >> 2] | 0;
     if ((i42 | 0) < (i40 | 0)) {
      i37 = i3;
      i3 = i4;
      i41 = i40;
     } else {
      i46 = i3;
      break;
     }
    }
    HEAP32[i46 >> 2] = i42;
   }
   i3 = i44 + 4 | 0;
   if ((i3 | 0) == (i1 | 0)) {
    break;
   }
   i41 = HEAP32[i44 >> 2] | 0;
   i43 = i44;
   i44 = i3;
   i45 = i41;
  }
  return;
 } else if ((i10 | 0) == 26) {
  __ZNSt3__17__sort5IRNS_6__lessIiiEEPiEEjT0_S5_S5_S5_S5_T_(i6, i6 + 4 | 0, i6 + 8 | 0, i6 + 12 | 0, i5, 0) | 0;
  return;
 } else if ((i10 | 0) == 14) {
  i45 = i6 + 4 | 0;
  i44 = i6 + 8 | 0;
  i43 = HEAP32[i45 >> 2] | 0;
  i1 = HEAP32[i6 >> 2] | 0;
  i46 = HEAP32[i44 >> 2] | 0;
  i41 = (i46 | 0) < (i43 | 0);
  do {
   if ((i43 | 0) < (i1 | 0)) {
    if (i41) {
     HEAP32[i6 >> 2] = i46;
     HEAP32[i44 >> 2] = i1;
     i47 = i1;
     break;
    }
    HEAP32[i6 >> 2] = i43;
    HEAP32[i45 >> 2] = i1;
    if ((i46 | 0) >= (i1 | 0)) {
     i47 = i46;
     break;
    }
    HEAP32[i45 >> 2] = i46;
    HEAP32[i44 >> 2] = i1;
    i47 = i1;
   } else {
    if (!i41) {
     i47 = i46;
     break;
    }
    HEAP32[i45 >> 2] = i46;
    HEAP32[i44 >> 2] = i43;
    if ((i46 | 0) >= (i1 | 0)) {
     i47 = i43;
     break;
    }
    HEAP32[i6 >> 2] = i46;
    HEAP32[i45 >> 2] = i1;
    i47 = i43;
   }
  } while (0);
  i43 = HEAP32[i5 >> 2] | 0;
  if ((i43 | 0) >= (i47 | 0)) {
   return;
  }
  HEAP32[i44 >> 2] = i43;
  HEAP32[i5 >> 2] = i47;
  i47 = HEAP32[i44 >> 2] | 0;
  i43 = HEAP32[i45 >> 2] | 0;
  if ((i47 | 0) >= (i43 | 0)) {
   return;
  }
  HEAP32[i45 >> 2] = i47;
  HEAP32[i44 >> 2] = i43;
  i43 = HEAP32[i6 >> 2] | 0;
  if ((i47 | 0) >= (i43 | 0)) {
   return;
  }
  HEAP32[i6 >> 2] = i47;
  HEAP32[i45 >> 2] = i43;
  return;
 } else if ((i10 | 0) == 4) {
  i43 = HEAP32[i5 >> 2] | 0;
  i45 = HEAP32[i6 >> 2] | 0;
  if ((i43 | 0) >= (i45 | 0)) {
   return;
  }
  HEAP32[i6 >> 2] = i43;
  HEAP32[i5 >> 2] = i45;
  return;
 } else if ((i10 | 0) == 6) {
  i45 = i6 + 4 | 0;
  i43 = HEAP32[i45 >> 2] | 0;
  i47 = HEAP32[i6 >> 2] | 0;
  i44 = HEAP32[i5 >> 2] | 0;
  i1 = (i44 | 0) < (i43 | 0);
  if ((i43 | 0) >= (i47 | 0)) {
   if (!i1) {
    return;
   }
   HEAP32[i45 >> 2] = i44;
   HEAP32[i5 >> 2] = i43;
   i46 = HEAP32[i45 >> 2] | 0;
   i41 = HEAP32[i6 >> 2] | 0;
   if ((i46 | 0) >= (i41 | 0)) {
    return;
   }
   HEAP32[i6 >> 2] = i46;
   HEAP32[i45 >> 2] = i41;
   return;
  }
  if (i1) {
   HEAP32[i6 >> 2] = i44;
   HEAP32[i5 >> 2] = i47;
   return;
  }
  HEAP32[i6 >> 2] = i43;
  HEAP32[i45 >> 2] = i47;
  i43 = HEAP32[i5 >> 2] | 0;
  if ((i43 | 0) >= (i47 | 0)) {
   return;
  }
  HEAP32[i45 >> 2] = i43;
  HEAP32[i5 >> 2] = i47;
  return;
 } else if ((i10 | 0) == 84) {
  return;
 } else if ((i10 | 0) == 97) {
  return;
 } else if ((i10 | 0) == 100) {
  return;
 } else if ((i10 | 0) == 101) {
  return;
 }
}
function __ZN7WebCore13ShapeIntervalIiE19uniteShapeIntervalsERKN3WTF6VectorIS1_Lj0ENS2_15CrashOnOverflowEEES7_RS5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 L1 : do {
  if ((i5 | 0) == 0) {
   i6 = HEAP32[i2 >> 2] | 0;
   i7 = HEAP32[i2 + 8 >> 2] | 0;
  } else {
   i8 = i2 + 8 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i10 = HEAP32[i1 >> 2] | 0;
   L4 : do {
    if ((i5 | 0) == (i9 | 0)) {
     i11 = HEAP32[i2 >> 2] | 0;
     i12 = 0;
     while (1) {
      if (i12 >>> 0 >= i5 >>> 0) {
       i6 = i11;
       i7 = i5;
       break L1;
      }
      if ((HEAP32[i10 + (i12 << 3) >> 2] | 0) != (HEAP32[i11 + (i12 << 3) >> 2] | 0)) {
       break L4;
      }
      if ((HEAP32[i10 + (i12 << 3) + 4 >> 2] | 0) == (HEAP32[i11 + (i12 << 3) + 4 >> 2] | 0)) {
       i12 = i12 + 1 | 0;
      } else {
       break;
      }
     }
    }
   } while (0);
   i12 = i1 | 0;
   if ((i9 | 0) == 0) {
    i11 = i10 + (i5 << 3) | 0;
    i13 = i3 + 8 | 0;
    i14 = i3 + 4 | 0;
    i15 = i3 | 0;
    i16 = i10;
    i17 = HEAP32[i13 >> 2] | 0;
    while (1) {
     if ((i17 | 0) == (HEAP32[i14 >> 2] | 0)) {
      i18 = i17 + 1 | 0;
      i19 = HEAP32[i15 >> 2] | 0;
      do {
       if (i19 >>> 0 > i16 >>> 0) {
        i20 = 24;
       } else {
        if ((i19 + (i17 << 3) | 0) >>> 0 <= i16 >>> 0) {
         i20 = 24;
         break;
        }
        __ZN3WTF6VectorIN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i18);
        i21 = HEAP32[i15 >> 2] | 0;
        i22 = i21 + (i16 - i19 >> 3 << 3) | 0;
        i23 = i21;
       }
      } while (0);
      if ((i20 | 0) == 24) {
       i20 = 0;
       __ZN3WTF6VectorIN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i18);
       i22 = i16;
       i23 = HEAP32[i15 >> 2] | 0;
      }
      i19 = i22;
      i21 = i23 + (HEAP32[i13 >> 2] << 3) | 0;
      i24 = HEAP32[i19 + 4 >> 2] | 0;
      HEAP32[i21 >> 2] = HEAP32[i19 >> 2];
      HEAP32[i21 + 4 >> 2] = i24;
     } else {
      i24 = i16;
      i21 = (HEAP32[i15 >> 2] | 0) + (i17 << 3) | 0;
      i19 = HEAP32[i24 + 4 >> 2] | 0;
      HEAP32[i21 >> 2] = HEAP32[i24 >> 2];
      HEAP32[i21 + 4 >> 2] = i19;
     }
     i17 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
     HEAP32[i13 >> 2] = i17;
     i16 = i16 + 8 | 0;
     if ((i16 | 0) == (i11 | 0)) {
      break;
     }
    }
    return;
   }
   i11 = i2 | 0;
   i16 = i3 + 8 | 0;
   i17 = i3 + 4 | 0;
   i13 = i3 | 0;
   i15 = i10;
   i14 = HEAP32[i11 >> 2] | 0;
   i9 = i10;
   i19 = i5;
   L27 : while (1) {
    i21 = (i15 | 0) == (i9 + (i19 << 3) | 0);
    i24 = HEAP32[i11 >> 2] | 0;
    i25 = HEAP32[i8 >> 2] | 0;
    if (i21) {
     if ((i14 | 0) == (i24 + (i25 << 3) | 0)) {
      i20 = 51;
      break;
     }
    }
    do {
     if ((i14 | 0) == (i24 + (i25 << 3) | 0)) {
      i20 = 34;
     } else {
      if (!i21) {
       if ((HEAP32[i15 >> 2] | 0) < (HEAP32[i14 >> 2] | 0)) {
        i20 = 34;
        break;
       }
      }
      i26 = i14;
      i27 = i15;
      i28 = i14 + 8 | 0;
     }
    } while (0);
    if ((i20 | 0) == 34) {
     i20 = 0;
     i26 = i15;
     i27 = i15 + 8 | 0;
     i28 = i14;
    }
    i21 = HEAP32[i16 >> 2] | 0;
    do {
     if ((i21 | 0) == 0) {
      i20 = 41;
     } else {
      i25 = _llvm_uadd_with_overflow_i32(i21 | 0, -1 | 0) | 0;
      if (!tempRet0) {
       i20 = 38;
       break L27;
      }
      i24 = i25;
      i25 = HEAP32[i13 >> 2] | 0;
      i18 = i25 + (i24 << 3) + 4 | 0;
      i29 = HEAP32[i18 >> 2] | 0;
      if ((i29 | 0) < (HEAP32[i26 >> 2] | 0)) {
       i20 = 41;
       break;
      }
      i30 = HEAP32[i26 + 4 >> 2] | 0;
      if ((HEAP32[i25 + (i24 << 3) >> 2] | 0) > (i30 | 0)) {
       i20 = 41;
       break;
      }
      HEAP32[i18 >> 2] = (i29 | 0) < (i30 | 0) ? i30 : i29;
     }
    } while (0);
    do {
     if ((i20 | 0) == 41) {
      i20 = 0;
      if ((i21 | 0) != (HEAP32[i17 >> 2] | 0)) {
       i29 = i26;
       i30 = (HEAP32[i13 >> 2] | 0) + (i21 << 3) | 0;
       i18 = HEAP32[i29 + 4 >> 2] | 0;
       HEAP32[i30 >> 2] = HEAP32[i29 >> 2];
       HEAP32[i30 + 4 >> 2] = i18;
       HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
       break;
      }
      i18 = i21 + 1 | 0;
      i30 = HEAP32[i13 >> 2] | 0;
      do {
       if (i30 >>> 0 > i26 >>> 0) {
        i20 = 46;
       } else {
        if ((i30 + (i21 << 3) | 0) >>> 0 <= i26 >>> 0) {
         i20 = 46;
         break;
        }
        __ZN3WTF6VectorIN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i18);
        i29 = HEAP32[i13 >> 2] | 0;
        i31 = i29 + (i26 - i30 >> 3 << 3) | 0;
        i32 = i29;
       }
      } while (0);
      if ((i20 | 0) == 46) {
       i20 = 0;
       __ZN3WTF6VectorIN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i18);
       i31 = i26;
       i32 = HEAP32[i13 >> 2] | 0;
      }
      i30 = i31;
      i29 = i32 + (HEAP32[i16 >> 2] << 3) | 0;
      i24 = HEAP32[i30 + 4 >> 2] | 0;
      HEAP32[i29 >> 2] = HEAP32[i30 >> 2];
      HEAP32[i29 + 4 >> 2] = i24;
      HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     }
    } while (0);
    i15 = i27;
    i14 = i28;
    i9 = HEAP32[i12 >> 2] | 0;
    i19 = HEAP32[i4 >> 2] | 0;
   }
   if ((i20 | 0) == 38) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i20 | 0) == 51) {
    return;
   }
  }
 } while (0);
 i4 = i6 + (i7 << 3) | 0;
 if ((i7 | 0) == 0) {
  return;
 }
 i7 = i3 + 8 | 0;
 i28 = i3 + 4 | 0;
 i27 = i3 | 0;
 i32 = i6;
 i6 = HEAP32[i7 >> 2] | 0;
 while (1) {
  if ((i6 | 0) == (HEAP32[i28 >> 2] | 0)) {
   i31 = i6 + 1 | 0;
   i26 = HEAP32[i27 >> 2] | 0;
   do {
    if (i26 >>> 0 > i32 >>> 0) {
     i20 = 14;
    } else {
     if ((i26 + (i6 << 3) | 0) >>> 0 <= i32 >>> 0) {
      i20 = 14;
      break;
     }
     __ZN3WTF6VectorIN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i31);
     i5 = HEAP32[i27 >> 2] | 0;
     i33 = i5 + (i32 - i26 >> 3 << 3) | 0;
     i34 = i5;
    }
   } while (0);
   if ((i20 | 0) == 14) {
    i20 = 0;
    __ZN3WTF6VectorIN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i31);
    i33 = i32;
    i34 = HEAP32[i27 >> 2] | 0;
   }
   i26 = i33;
   i5 = i34 + (HEAP32[i7 >> 2] << 3) | 0;
   i2 = HEAP32[i26 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i26 >> 2];
   HEAP32[i5 + 4 >> 2] = i2;
  } else {
   i2 = i32;
   i5 = (HEAP32[i27 >> 2] | 0) + (i6 << 3) | 0;
   i26 = HEAP32[i2 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i5 + 4 >> 2] = i26;
  }
  i6 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
  HEAP32[i7 >> 2] = i6;
  i32 = i32 + 8 | 0;
  if ((i32 | 0) == (i4 | 0)) {
   break;
  }
 }
 return;
}
function __ZNK7WebCore20RasterShapeIntervals27computeShapeMarginIntervalsEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = __Znwj(32) | 0;
 i9 = i8;
 i10 = i2 + 24 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 _memset(i8 | 0, 0, 28) | 0;
 HEAP32[i8 + 28 >> 2] = i3;
 __ZN3WTF6VectorINS0_IN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEEELj0ES4_E6resizeEj(i8 + 16 | 0, i11 + (i3 << 1) | 0);
 i11 = i3 + 1 | 0;
 i8 = (i11 | 0) == 0;
 do {
  if (i8) {
   i12 = 0;
  } else {
   i13 = i11 >>> 0 < 16 >>> 0 ? 16 : i11;
   if ((i13 | 0) == 0) {
    i12 = 0;
    break;
   }
   if (i13 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i12 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i13 << 2) | 0) | 0;
    break;
   }
  }
 } while (0);
 i13 = Math_imul(i3, i3) | 0;
 i14 = 0;
 while (1) {
  if (i11 >>> 0 <= i14 >>> 0) {
   i15 = 8;
   break;
  }
  HEAP32[i12 + (i14 << 2) >> 2] = ~~+Math_sqrt(+((i13 - (Math_imul(i14, i14) | 0) | 0) >>> 0 >>> 0));
  i14 = i14 + 1 | 0;
  if (i14 >>> 0 > i3 >>> 0) {
   break;
  }
 }
 if ((i15 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i14 = HEAP32[i2 + 4 >> 2] | 0;
 i13 = HEAP32[i2 + 12 >> 2] | 0;
 i16 = i13 + i14 | 0;
 L14 : do {
  if ((i13 | 0) > 0) {
   i17 = i2 + 28 | 0;
   i18 = i2 + 16 | 0;
   i19 = i3 >>> 0 < 2147483647 >>> 0 ? i3 : 2147483647;
   i20 = i6 | 0;
   i21 = i6 + 4 | 0;
   i22 = i7 | 0;
   i23 = i7 + 4 | 0;
   i24 = i5 | 0;
   i25 = i5 + 4 | 0;
   i26 = i14;
   L16 : while (1) {
    i27 = (HEAP32[i17 >> 2] | 0) + i26 | 0;
    if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i27 >>> 0) {
     i15 = 13;
     break;
    }
    i28 = HEAP32[i18 >> 2] | 0;
    i29 = HEAP32[i28 + (i27 * 12 & -1) + 8 >> 2] | 0;
    L19 : do {
     if ((i29 | 0) != 0) {
      i30 = HEAP32[i28 + (i27 * 12 & -1) >> 2] | 0;
      i31 = _llvm_uadd_with_overflow_i32(i29 | 0, -1 | 0) | 0;
      if (!tempRet0) {
       i15 = 16;
       break L16;
      }
      i32 = HEAP32[i30 >> 2] | 0;
      i33 = HEAP32[i30 + (i31 << 3) + 4 >> 2] | 0;
      if ((i32 | 0) == (i33 | 0)) {
       break;
      }
      i31 = i26 - i19 | 0;
      i30 = i26 + i19 | 0;
      i34 = i26 - 1 | 0;
      L23 : do {
       if ((i34 | 0) >= (i31 | 0)) {
        i35 = i34;
        while (1) {
         if ((i35 | 0) > (i14 | 0)) {
          i36 = (HEAP32[i17 >> 2] | 0) + i35 | 0;
          if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i36 >>> 0) {
           i15 = 21;
           break L16;
          }
          i37 = HEAP32[i18 >> 2] | 0;
          i38 = HEAP32[i37 + (i36 * 12 & -1) + 8 >> 2] | 0;
          if ((i38 | 0) == 0) {
           i39 = 0;
           i40 = 0;
          } else {
           i41 = HEAP32[i37 + (i36 * 12 & -1) >> 2] | 0;
           i36 = _llvm_uadd_with_overflow_i32(i38 | 0, -1 | 0) | 0;
           if (!tempRet0) {
            i15 = 24;
            break L16;
           }
           i39 = HEAP32[i41 >> 2] | 0;
           i40 = HEAP32[i41 + (i36 << 3) + 4 >> 2] | 0;
          }
          if ((i39 | 0) <= (i32 | 0) & (i40 | 0) >= (i33 | 0)) {
           break L23;
          }
         }
         i36 = i35 - i26 | 0;
         i41 = (i36 | 0) > -1 ? i36 : -i36 | 0;
         if (i41 >>> 0 < i11 >>> 0) {
          i42 = HEAP32[i12 + (i41 << 2) >> 2] | 0;
         } else {
          i42 = 0;
         }
         HEAP32[i24 >> 2] = i32 - i42;
         HEAP32[i25 >> 2] = i42 + i33;
         __ZN7WebCore20RasterShapeIntervals19uniteMarginIntervalEiRKNS_13ShapeIntervalIiEE(i9, i35, i5);
         i35 = i35 - 1 | 0;
         if ((i35 | 0) < (i31 | 0)) {
          break;
         }
        }
       }
      } while (0);
      if (i8) {
       i43 = 0;
      } else {
       i43 = HEAP32[i12 >> 2] | 0;
      }
      HEAP32[i20 >> 2] = i32 - i43;
      HEAP32[i21 >> 2] = i43 + i33;
      __ZN7WebCore20RasterShapeIntervals19uniteMarginIntervalEiRKNS_13ShapeIntervalIiEE(i9, i26, i6);
      i31 = i26 + 1 | 0;
      if ((i31 | 0) > (i30 | 0)) {
       break;
      } else {
       i44 = i31;
      }
      while (1) {
       if ((i44 | 0) < (i16 | 0)) {
        i31 = (HEAP32[i17 >> 2] | 0) + i44 | 0;
        if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i31 >>> 0) {
         i15 = 35;
         break L16;
        }
        i34 = HEAP32[i18 >> 2] | 0;
        i35 = HEAP32[i34 + (i31 * 12 & -1) + 8 >> 2] | 0;
        if ((i35 | 0) == 0) {
         i45 = 0;
         i46 = 0;
        } else {
         i41 = HEAP32[i34 + (i31 * 12 & -1) >> 2] | 0;
         i31 = _llvm_uadd_with_overflow_i32(i35 | 0, -1 | 0) | 0;
         if (!tempRet0) {
          i15 = 38;
          break L16;
         }
         i45 = HEAP32[i41 >> 2] | 0;
         i46 = HEAP32[i41 + (i31 << 3) + 4 >> 2] | 0;
        }
        if ((i45 | 0) <= (i32 | 0) & (i46 | 0) >= (i33 | 0)) {
         break L19;
        }
       }
       i31 = i44 - i26 | 0;
       i41 = (i31 | 0) > -1 ? i31 : -i31 | 0;
       if (i41 >>> 0 < i11 >>> 0) {
        i47 = HEAP32[i12 + (i41 << 2) >> 2] | 0;
       } else {
        i47 = 0;
       }
       HEAP32[i22 >> 2] = i32 - i47;
       HEAP32[i23 >> 2] = i47 + i33;
       __ZN7WebCore20RasterShapeIntervals19uniteMarginIntervalEiRKNS_13ShapeIntervalIiEE(i9, i44, i7);
       i44 = i44 + 1 | 0;
       if ((i44 | 0) > (i30 | 0)) {
        break;
       }
      }
     }
    } while (0);
    i26 = i26 + 1 | 0;
    if ((i26 | 0) >= (i16 | 0)) {
     break L14;
    }
   }
   if ((i15 | 0) == 13) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i15 | 0) == 21) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i15 | 0) == 24) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i15 | 0) == 35) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i15 | 0) == 38) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i15 | 0) == 16) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i9;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF8fastFreeEPv(i12);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore20RasterShapeIntervals22firstIncludedIntervalYEiRKNS_7IntSizeERNS_10LayoutUnitE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 24 | 0;
 i9 = i8 | 0;
 i10 = i8;
 i11 = i1 | 0;
 i12 = i1 + 4 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = (i13 | 0) < (i2 | 0) ? i2 : i13;
 i2 = i3 | 0;
 i15 = HEAP32[i2 >> 2] | 0;
 if ((i15 | 0) < 1) {
  i16 = 0;
  STACKTOP = i5;
  return i16 | 0;
 }
 i17 = i3 + 4 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 if ((i18 | 0) < 1) {
  i16 = 0;
  STACKTOP = i5;
  return i16 | 0;
 }
 if ((i15 | 0) > (HEAP32[i1 + 8 >> 2] | 0)) {
  i16 = 0;
  STACKTOP = i5;
  return i16 | 0;
 }
 i19 = i1 + 12 | 0;
 if ((i14 | 0) > ((HEAP32[i19 >> 2] | 0) + i13 - i18 | 0)) {
  i16 = 0;
  STACKTOP = i5;
  return i16 | 0;
 }
 i13 = i7 | 0;
 i20 = i7 + 4 | 0;
 i21 = i7 + 8 | 0;
 i22 = i8 + 8 | 0;
 i23 = i3;
 i3 = i8;
 i8 = i22;
 i24 = i10 + 12 | 0;
 i25 = i10 + 4 | 0;
 i26 = i1 + 28 | 0;
 i27 = i1 + 24 | 0;
 i28 = i1 + 16 | 0;
 i29 = i14;
 i14 = i18;
 i18 = i15;
 L13 : while (1) {
  HEAP32[i13 >> 2] = 0;
  HEAP32[i20 >> 2] = 0;
  HEAP32[i21 >> 2] = 0;
  do {
   if (__ZNK7WebCore20RasterShapeIntervals19getIntervalX1ValuesEiiiRN3WTF6VectorIiLj0ENS1_15CrashOnOverflowEEE(i1, i29, i14 + i29 | 0, i18, i7) | 0) {
    i30 = HEAP32[i13 >> 2] | 0;
    i15 = HEAP32[i21 >> 2] | 0;
    __ZNSt3__16__sortIRNS_6__lessIiiEEPiEEvT0_S5_T_(i30, i30 + (i15 << 2) | 0, i6);
    HEAP32[i9 >> 2] = 0;
    HEAP32[i9 + 4 >> 2] = 0;
    i31 = HEAP32[i23 + 4 >> 2] | 0;
    HEAP32[i22 >> 2] = HEAP32[i23 >> 2];
    HEAP32[i22 + 4 >> 2] = i31;
    if ((i15 | 0) == 0) {
     break;
    }
    i31 = 0;
    i32 = i29;
    i33 = 0;
    while (1) {
     i34 = HEAP32[i30 + (i33 << 2) >> 2] | 0;
     if ((i33 | 0) == 0) {
      i35 = 13;
     } else {
      i36 = i33 - 1 | 0;
      if (i15 >>> 0 <= i36 >>> 0) {
       i35 = 11;
       break L13;
      }
      if ((i34 | 0) != (HEAP32[i30 + (i36 << 2) >> 2] | 0)) {
       i35 = 13;
      }
     }
     L23 : do {
      if ((i35 | 0) == 13) {
       i35 = 0;
       HEAP32[i9 >> 2] = i34 | i31;
       HEAP32[i9 + 4 >> 2] = i32;
       if (!(__ZNK7WebCore7IntRect8containsERKS0_(i11, i10) | 0)) {
        break;
       }
       i36 = HEAP32[i3 >> 2] | 0;
       i37 = (HEAP32[i8 >> 2] | 0) + i36 | 0;
       i38 = HEAP32[i24 >> 2] | 0;
       if ((i38 | 0) <= 0) {
        i35 = 25;
        break L13;
       }
       i39 = HEAP32[i25 >> 2] | 0;
       i40 = HEAP32[i26 >> 2] | 0;
       i41 = HEAP32[i27 >> 2] | 0;
       i42 = i39 + i38 | 0;
       i38 = i39;
       while (1) {
        i39 = i38 + i40 | 0;
        if (i41 >>> 0 <= i39 >>> 0) {
         i35 = 17;
         break L13;
        }
        i43 = HEAP32[i28 >> 2] | 0;
        i44 = HEAP32[i43 + (i39 * 12 & -1) + 8 >> 2] | 0;
        if ((i44 | 0) == 0) {
         break L23;
        }
        i45 = HEAP32[i43 + (i39 * 12 & -1) >> 2] | 0;
        i39 = 0;
        while (1) {
         i43 = HEAP32[i45 + (i39 << 3) >> 2] | 0;
         if ((i43 | 0) > (i37 | 0)) {
          break L23;
         }
         if ((i43 | 0) <= (i36 | 0)) {
          if ((HEAP32[i45 + (i39 << 3) + 4 >> 2] | 0) >= (i37 | 0)) {
           break;
          }
         }
         i39 = i39 + 1 | 0;
         if (i39 >>> 0 >= i44 >>> 0) {
          break L23;
         }
        }
        i44 = i38 + 1 | 0;
        if ((i44 | 0) < (i42 | 0)) {
         i38 = i44;
        } else {
         i35 = 25;
         break L13;
        }
       }
      }
     } while (0);
     i34 = i33 + 1 | 0;
     if (i34 >>> 0 < i15 >>> 0) {
      i33 = i34;
     } else {
      i46 = i15;
      i35 = 29;
      break;
     }
    }
   } else {
    i46 = HEAP32[i21 >> 2] | 0;
    i35 = 29;
   }
  } while (0);
  do {
   if ((i35 | 0) == 29) {
    i35 = 0;
    if ((i46 | 0) == 0) {
     break;
    }
    HEAP32[i21 >> 2] = 0;
   }
  } while (0);
  i15 = HEAP32[i13 >> 2] | 0;
  if ((i15 | 0) != 0) {
   HEAP32[i13 >> 2] = 0;
   HEAP32[i20 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i15);
  }
  i15 = i29 + 1 | 0;
  i33 = HEAP32[i17 >> 2] | 0;
  if ((i15 | 0) > ((HEAP32[i19 >> 2] | 0) + (HEAP32[i12 >> 2] | 0) - i33 | 0)) {
   i16 = 0;
   i35 = 42;
   break;
  }
  i29 = i15;
  i14 = i33;
  i18 = HEAP32[i2 >> 2] | 0;
 }
 if ((i35 | 0) == 17) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i35 | 0) == 11) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i35 | 0) == 25) {
  HEAP32[i4 >> 2] = i29;
  HEAP32[i21 >> 2] = 0;
  if ((i30 | 0) == 0) {
   i16 = 1;
   STACKTOP = i5;
   return i16 | 0;
  }
  HEAP32[i13 >> 2] = 0;
  HEAP32[i20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i30);
  i16 = 1;
  STACKTOP = i5;
  return i16 | 0;
 } else if ((i35 | 0) == 42) {
  STACKTOP = i5;
  return i16 | 0;
 }
 return 0;
}
function __ZN7WebCore13ShapeIntervalIiE23intersectShapeIntervalsERKN3WTF6VectorIS1_Lj0ENS2_15CrashOnOverflowEEES7_RS5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5;
 i7 = i1 + 8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i2 + 8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i11 = HEAP32[i1 >> 2] | 0;
 i12 = HEAP32[i2 >> 2] | 0;
 L7 : do {
  if ((i8 | 0) == (i10 | 0)) {
   i13 = 0;
   while (1) {
    if (i13 >>> 0 >= i8 >>> 0) {
     break;
    }
    if ((HEAP32[i11 + (i13 << 3) >> 2] | 0) != (HEAP32[i12 + (i13 << 3) >> 2] | 0)) {
     break L7;
    }
    if ((HEAP32[i11 + (i13 << 3) + 4 >> 2] | 0) == (HEAP32[i12 + (i13 << 3) + 4 >> 2] | 0)) {
     i13 = i13 + 1 | 0;
    } else {
     break L7;
    }
   }
   i13 = i11 + (i8 << 3) | 0;
   i14 = i3 + 8 | 0;
   i15 = i3 + 4 | 0;
   i16 = i3 | 0;
   i17 = i11;
   i18 = HEAP32[i14 >> 2] | 0;
   while (1) {
    if ((i18 | 0) == (HEAP32[i15 >> 2] | 0)) {
     i19 = i18 + 1 | 0;
     i20 = HEAP32[i16 >> 2] | 0;
     do {
      if (i20 >>> 0 > i17 >>> 0) {
       i21 = 12;
      } else {
       if ((i20 + (i18 << 3) | 0) >>> 0 <= i17 >>> 0) {
        i21 = 12;
        break;
       }
       __ZN3WTF6VectorIN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i19);
       i22 = HEAP32[i16 >> 2] | 0;
       i23 = i22 + (i17 - i20 >> 3 << 3) | 0;
       i24 = i22;
      }
     } while (0);
     if ((i21 | 0) == 12) {
      i21 = 0;
      __ZN3WTF6VectorIN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i19);
      i23 = i17;
      i24 = HEAP32[i16 >> 2] | 0;
     }
     i20 = i23;
     i22 = i24 + (HEAP32[i14 >> 2] << 3) | 0;
     i25 = HEAP32[i20 + 4 >> 2] | 0;
     HEAP32[i22 >> 2] = HEAP32[i20 >> 2];
     HEAP32[i22 + 4 >> 2] = i25;
    } else {
     i25 = i17;
     i22 = (HEAP32[i16 >> 2] | 0) + (i18 << 3) | 0;
     i20 = HEAP32[i25 + 4 >> 2] | 0;
     HEAP32[i22 >> 2] = HEAP32[i25 >> 2];
     HEAP32[i22 + 4 >> 2] = i20;
    }
    i18 = (HEAP32[i14 >> 2] | 0) + 1 | 0;
    HEAP32[i14 >> 2] = i18;
    i17 = i17 + 8 | 0;
    if ((i17 | 0) == (i13 | 0)) {
     break;
    }
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i24 = i1 | 0;
 i1 = i2 | 0;
 i2 = (HEAP32[i11 >> 2] | 0) < (HEAP32[i12 >> 2] | 0);
 i23 = i5;
 i10 = i6 + 4 | 0;
 i13 = i3 + 8 | 0;
 i17 = i3 + 4 | 0;
 i18 = i3 | 0;
 i14 = i5;
 i16 = i2 ? i11 + 8 | 0 : i11;
 i15 = i2 ? i11 : i12;
 i20 = i2 ? i12 : i12 + 8 | 0;
 i12 = i11;
 i11 = i8;
 while (1) {
  i8 = (i16 | 0) == (i12 + (i11 << 3) | 0);
  i2 = HEAP32[i1 >> 2] | 0;
  i22 = HEAP32[i9 >> 2] | 0;
  if (i8) {
   if ((i20 | 0) == (i2 + (i22 << 3) | 0)) {
    break;
   }
  }
  do {
   if ((i20 | 0) == (i2 + (i22 << 3) | 0)) {
    i21 = 22;
   } else {
    if (!i8) {
     if ((HEAP32[i16 >> 2] | 0) < (HEAP32[i20 >> 2] | 0)) {
      i21 = 22;
      break;
     }
    }
    i26 = i20;
    i27 = i16;
    i28 = i20 + 8 | 0;
   }
  } while (0);
  if ((i21 | 0) == 22) {
   i21 = 0;
   i26 = i16;
   i27 = i16 + 8 | 0;
   i28 = i20;
  }
  i8 = i15 + 4 | 0;
  i22 = HEAP32[i8 >> 2] | 0;
  i2 = HEAP32[i26 >> 2] | 0;
  if ((i22 | 0) < (i2 | 0)) {
   i16 = i27;
   i15 = i26;
   i20 = i28;
   i12 = i12;
   i11 = i11;
   continue;
  }
  i25 = HEAP32[i15 >> 2] | 0;
  i29 = i26 + 4 | 0;
  i30 = HEAP32[i29 >> 2] | 0;
  if ((i25 | 0) > (i30 | 0)) {
   i16 = i27;
   i15 = i26;
   i20 = i28;
   i12 = i12;
   i11 = i11;
   continue;
  }
  HEAP32[i23 >> 2] = (i25 | 0) < (i2 | 0) ? i2 : i25;
  HEAP32[i10 >> 2] = (i30 | 0) < (i22 | 0) ? i30 : i22;
  i22 = HEAP32[i13 >> 2] | 0;
  if ((i22 | 0) == (HEAP32[i17 >> 2] | 0)) {
   i30 = i22 + 1 | 0;
   i25 = HEAP32[i18 >> 2] | 0;
   do {
    if (i25 >>> 0 > i6 >>> 0) {
     i21 = 30;
    } else {
     if ((i25 + (i22 << 3) | 0) >>> 0 <= i6 >>> 0) {
      i21 = 30;
      break;
     }
     __ZN3WTF6VectorIN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i30);
     i2 = HEAP32[i18 >> 2] | 0;
     i31 = i2 + (i14 - i25 >> 3 << 3) | 0;
     i32 = i2;
    }
   } while (0);
   if ((i21 | 0) == 30) {
    i21 = 0;
    __ZN3WTF6VectorIN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i30);
    i31 = i6;
    i32 = HEAP32[i18 >> 2] | 0;
   }
   i25 = i31;
   i2 = i32 + (HEAP32[i13 >> 2] << 3) | 0;
   i33 = HEAP32[i25 + 4 >> 2] | 0;
   HEAP32[i2 >> 2] = HEAP32[i25 >> 2];
   HEAP32[i2 + 4 >> 2] = i33;
  } else {
   i33 = (HEAP32[i18 >> 2] | 0) + (i22 << 3) | 0;
   i2 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i33 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i33 + 4 >> 2] = i2;
  }
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
  i16 = i27;
  i15 = (HEAP32[i29 >> 2] | 0) > (HEAP32[i8 >> 2] | 0) ? i26 : i15;
  i20 = i28;
  i12 = HEAP32[i24 >> 2] | 0;
  i11 = HEAP32[i7 >> 2] | 0;
 }
 STACKTOP = i4;
 return;
}
function __ZNSt3__127__insertion_sort_incompleteIRNS_6__lessIiiEEPiEEbT0_S5_T_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 switch (i2 - i1 >> 2 | 0) {
 case 5:
  {
   __ZNSt3__17__sort5IRNS_6__lessIiiEEPiEEjT0_S5_S5_S5_S5_T_(i1, i1 + 4 | 0, i1 + 8 | 0, i1 + 12 | 0, i2 - 4 | 0, 0) | 0;
   i4 = 1;
   return i4 | 0;
  }
 case 4:
  {
   i3 = i1 + 4 | 0;
   i5 = i1 + 8 | 0;
   i6 = i2 - 4 | 0;
   i7 = HEAP32[i3 >> 2] | 0;
   i8 = HEAP32[i1 >> 2] | 0;
   i9 = HEAP32[i5 >> 2] | 0;
   i10 = (i9 | 0) < (i7 | 0);
   do {
    if ((i7 | 0) < (i8 | 0)) {
     if (i10) {
      HEAP32[i1 >> 2] = i9;
      HEAP32[i5 >> 2] = i8;
      i11 = i8;
      break;
     }
     HEAP32[i1 >> 2] = i7;
     HEAP32[i3 >> 2] = i8;
     if ((i9 | 0) >= (i8 | 0)) {
      i11 = i9;
      break;
     }
     HEAP32[i3 >> 2] = i9;
     HEAP32[i5 >> 2] = i8;
     i11 = i8;
    } else {
     if (!i10) {
      i11 = i9;
      break;
     }
     HEAP32[i3 >> 2] = i9;
     HEAP32[i5 >> 2] = i7;
     if ((i9 | 0) >= (i8 | 0)) {
      i11 = i7;
      break;
     }
     HEAP32[i1 >> 2] = i9;
     HEAP32[i3 >> 2] = i8;
     i11 = i7;
    }
   } while (0);
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) >= (i11 | 0)) {
    i4 = 1;
    return i4 | 0;
   }
   HEAP32[i5 >> 2] = i7;
   HEAP32[i6 >> 2] = i11;
   i11 = HEAP32[i5 >> 2] | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i11 | 0) >= (i6 | 0)) {
    i4 = 1;
    return i4 | 0;
   }
   HEAP32[i3 >> 2] = i11;
   HEAP32[i5 >> 2] = i6;
   i6 = HEAP32[i1 >> 2] | 0;
   if ((i11 | 0) >= (i6 | 0)) {
    i4 = 1;
    return i4 | 0;
   }
   HEAP32[i1 >> 2] = i11;
   HEAP32[i3 >> 2] = i6;
   i4 = 1;
   return i4 | 0;
  }
 case 0:
 case 1:
  {
   i4 = 1;
   return i4 | 0;
  }
 case 2:
  {
   i6 = i2 - 4 | 0;
   i3 = HEAP32[i6 >> 2] | 0;
   i11 = HEAP32[i1 >> 2] | 0;
   if ((i3 | 0) >= (i11 | 0)) {
    i4 = 1;
    return i4 | 0;
   }
   HEAP32[i1 >> 2] = i3;
   HEAP32[i6 >> 2] = i11;
   i4 = 1;
   return i4 | 0;
  }
 case 3:
  {
   i11 = i1 + 4 | 0;
   i6 = i2 - 4 | 0;
   i3 = HEAP32[i11 >> 2] | 0;
   i5 = HEAP32[i1 >> 2] | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   i8 = (i7 | 0) < (i3 | 0);
   if ((i3 | 0) >= (i5 | 0)) {
    if (!i8) {
     i4 = 1;
     return i4 | 0;
    }
    HEAP32[i11 >> 2] = i7;
    HEAP32[i6 >> 2] = i3;
    i9 = HEAP32[i11 >> 2] | 0;
    i10 = HEAP32[i1 >> 2] | 0;
    if ((i9 | 0) >= (i10 | 0)) {
     i4 = 1;
     return i4 | 0;
    }
    HEAP32[i1 >> 2] = i9;
    HEAP32[i11 >> 2] = i10;
    i4 = 1;
    return i4 | 0;
   }
   if (i8) {
    HEAP32[i1 >> 2] = i7;
    HEAP32[i6 >> 2] = i5;
    i4 = 1;
    return i4 | 0;
   }
   HEAP32[i1 >> 2] = i3;
   HEAP32[i11 >> 2] = i5;
   i3 = HEAP32[i6 >> 2] | 0;
   if ((i3 | 0) >= (i5 | 0)) {
    i4 = 1;
    return i4 | 0;
   }
   HEAP32[i11 >> 2] = i3;
   HEAP32[i6 >> 2] = i5;
   i4 = 1;
   return i4 | 0;
  }
 default:
  {
   i5 = i1 + 8 | 0;
   i6 = i1 + 4 | 0;
   i3 = HEAP32[i6 >> 2] | 0;
   i11 = HEAP32[i1 >> 2] | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   i8 = (i7 | 0) < (i3 | 0);
   do {
    if ((i3 | 0) < (i11 | 0)) {
     if (i8) {
      HEAP32[i1 >> 2] = i7;
      HEAP32[i5 >> 2] = i11;
      i12 = i11;
      break;
     }
     HEAP32[i1 >> 2] = i3;
     HEAP32[i6 >> 2] = i11;
     if ((i7 | 0) >= (i11 | 0)) {
      i12 = i7;
      break;
     }
     HEAP32[i6 >> 2] = i7;
     HEAP32[i5 >> 2] = i11;
     i12 = i11;
    } else {
     if (!i8) {
      i12 = i7;
      break;
     }
     HEAP32[i6 >> 2] = i7;
     HEAP32[i5 >> 2] = i3;
     if ((i7 | 0) >= (i11 | 0)) {
      i12 = i3;
      break;
     }
     HEAP32[i1 >> 2] = i7;
     HEAP32[i6 >> 2] = i11;
     i12 = i3;
    }
   } while (0);
   i3 = i1 + 12 | 0;
   if ((i3 | 0) == (i2 | 0)) {
    i4 = 1;
    return i4 | 0;
   } else {
    i13 = i5;
    i14 = 0;
    i15 = i3;
    i16 = i12;
   }
   while (1) {
    i12 = HEAP32[i15 >> 2] | 0;
    if ((i12 | 0) < (i16 | 0)) {
     i3 = i13;
     i5 = i15;
     i11 = i16;
     while (1) {
      HEAP32[i5 >> 2] = i11;
      if ((i3 | 0) == (i1 | 0)) {
       i17 = i1;
       break;
      }
      i6 = i3 - 4 | 0;
      i7 = HEAP32[i6 >> 2] | 0;
      if ((i12 | 0) < (i7 | 0)) {
       i5 = i3;
       i3 = i6;
       i11 = i7;
      } else {
       i17 = i3;
       break;
      }
     }
     HEAP32[i17 >> 2] = i12;
     i3 = i14 + 1 | 0;
     if ((i3 | 0) == 8) {
      break;
     } else {
      i18 = i3;
     }
    } else {
     i18 = i14;
    }
    i3 = i15 + 4 | 0;
    if ((i3 | 0) == (i2 | 0)) {
     i4 = 1;
     i19 = 47;
     break;
    }
    i11 = HEAP32[i15 >> 2] | 0;
    i13 = i15;
    i14 = i18;
    i15 = i3;
    i16 = i11;
   }
   if ((i19 | 0) == 47) {
    return i4 | 0;
   }
   i4 = (i15 + 4 | 0) == (i2 | 0);
   return i4 | 0;
  }
 }
 return 0;
}
function __ZNK7WebCore20RasterShapeIntervals19getIntervalX1ValuesEiiiRN3WTF6VectorIiLj0ENS1_15CrashOnOverflowEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i6 = i1 + 28 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i1 + 24 | 0;
 i9 = i1 + 16 | 0;
 i1 = i2;
 while (1) {
  if ((i1 | 0) >= (i3 | 0)) {
   i10 = 6;
   break;
  }
  i11 = i7 + i1 | 0;
  if ((HEAP32[i8 >> 2] | 0) >>> 0 <= i11 >>> 0) {
   i10 = 4;
   break;
  }
  if ((HEAP32[(HEAP32[i9 >> 2] | 0) + (i11 * 12 & -1) + 8 >> 2] | 0) == 0) {
   i12 = 0;
   i10 = 22;
   break;
  } else {
   i1 = i1 + 1 | 0;
  }
 }
 if ((i10 | 0) == 6) {
  i1 = i7 + i2 | 0;
  if ((HEAP32[i8 >> 2] | 0) >>> 0 <= i1 >>> 0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return 0;
  }
  __ZN7WebCoreL14appendX1ValuesERKN3WTF6VectorINS_13ShapeIntervalIiEELj0ENS0_15CrashOnOverflowEEEiRNS1_IiLj0ES4_EE((HEAP32[i9 >> 2] | 0) + (i1 * 12 & -1) | 0, i4, i5);
  i1 = i2 + 1 | 0;
  if ((i1 | 0) < (i3 | 0)) {
   i13 = i2;
   i14 = i1;
  } else {
   i12 = 1;
   return i12 | 0;
  }
  while (1) {
   i1 = HEAP32[i6 >> 2] | 0;
   i2 = i1 + i14 | 0;
   i7 = HEAP32[i8 >> 2] | 0;
   if (i7 >>> 0 <= i2 >>> 0) {
    i10 = 10;
    break;
   }
   i11 = HEAP32[i9 >> 2] | 0;
   i15 = i1 + i13 | 0;
   if (i7 >>> 0 <= i15 >>> 0) {
    i10 = 12;
    break;
   }
   i7 = HEAP32[i11 + (i2 * 12 & -1) + 8 >> 2] | 0;
   L16 : do {
    if ((i7 | 0) == (HEAP32[i11 + (i15 * 12 & -1) + 8 >> 2] | 0)) {
     i1 = HEAP32[i11 + (i2 * 12 & -1) >> 2] | 0;
     i16 = HEAP32[i11 + (i15 * 12 & -1) >> 2] | 0;
     i17 = 0;
     while (1) {
      if (i17 >>> 0 >= i7 >>> 0) {
       break L16;
      }
      if ((HEAP32[i1 + (i17 << 3) >> 2] | 0) != (HEAP32[i16 + (i17 << 3) >> 2] | 0)) {
       i10 = 18;
       break L16;
      }
      if ((HEAP32[i1 + (i17 << 3) + 4 >> 2] | 0) == (HEAP32[i16 + (i17 << 3) + 4 >> 2] | 0)) {
       i17 = i17 + 1 | 0;
      } else {
       i10 = 18;
       break;
      }
     }
    } else {
     i10 = 18;
    }
   } while (0);
   if ((i10 | 0) == 18) {
    i10 = 0;
    __ZN7WebCoreL14appendX1ValuesERKN3WTF6VectorINS_13ShapeIntervalIiEELj0ENS0_15CrashOnOverflowEEEiRNS1_IiLj0ES4_EE(i11 + (i2 * 12 & -1) | 0, i4, i5);
   }
   i7 = i14 + 1 | 0;
   if ((i7 | 0) < (i3 | 0)) {
    i13 = i14;
    i14 = i7;
   } else {
    i12 = 1;
    i10 = 23;
    break;
   }
  }
  if ((i10 | 0) == 10) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return 0;
  } else if ((i10 | 0) == 12) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return 0;
  } else if ((i10 | 0) == 23) {
   return i12 | 0;
  }
 } else if ((i10 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i10 | 0) == 22) {
  return i12 | 0;
 }
 return 0;
}
function __ZNK7WebCore20RasterShapeIntervals20getIncludedIntervalsEiiRN3WTF6VectorINS_13ShapeIntervalIiEELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i7 | 0) > (i2 | 0)) {
  STACKTOP = i5;
  return;
 }
 if (((HEAP32[i1 + 12 >> 2] | 0) + i7 | 0) < (i3 | 0)) {
  STACKTOP = i5;
  return;
 }
 i7 = i1 + 28 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i1 + 24 | 0;
 i10 = i1 + 16 | 0;
 i1 = i2;
 while (1) {
  if ((i1 | 0) >= (i3 | 0)) {
   i11 = 8;
   break;
  }
  i12 = i8 + i1 | 0;
  if ((HEAP32[i9 >> 2] | 0) >>> 0 <= i12 >>> 0) {
   i11 = 6;
   break;
  }
  if ((HEAP32[(HEAP32[i10 >> 2] | 0) + (i12 * 12 & -1) + 8 >> 2] | 0) == 0) {
   i11 = 23;
   break;
  } else {
   i1 = i1 + 1 | 0;
  }
 }
 if ((i11 | 0) == 23) {
  STACKTOP = i5;
  return;
 } else if ((i11 | 0) == 8) {
  i1 = i8 + i2 | 0;
  if ((HEAP32[i9 >> 2] | 0) >>> 0 <= i1 >>> 0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  __ZN3WTF6VectorIN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEEaSERKS5_(i4, (HEAP32[i10 >> 2] | 0) + (i1 * 12 & -1) | 0) | 0;
  i1 = i2 + 1 | 0;
  if ((i1 | 0) >= (i3 | 0)) {
   STACKTOP = i5;
   return;
  }
  i2 = i4 + 8 | 0;
  i8 = i6 | 0;
  i12 = i6 + 4 | 0;
  i13 = i6 + 8 | 0;
  i14 = i4 | 0;
  i15 = i4 + 4 | 0;
  i16 = i1;
  while (1) {
   if ((HEAP32[i2 >> 2] | 0) == 0) {
    i11 = 22;
    break;
   }
   HEAP32[i8 >> 2] = 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i13 >> 2] = 0;
   i1 = (HEAP32[i7 >> 2] | 0) + i16 | 0;
   if ((HEAP32[i9 >> 2] | 0) >>> 0 <= i1 >>> 0) {
    i11 = 14;
    break;
   }
   __ZN7WebCore13ShapeIntervalIiE23intersectShapeIntervalsERKN3WTF6VectorIS1_Lj0ENS2_15CrashOnOverflowEEES7_RS5_(i4, (HEAP32[i10 >> 2] | 0) + (i1 * 12 & -1) | 0, i6);
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i13 >> 2] = i1;
   i17 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i8 >> 2] = i17;
   i18 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i12 >> 2] = i18;
   if ((i1 | 0) != 0) {
    HEAP32[i13 >> 2] = 0;
   }
   if ((i17 | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i12 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i17);
   }
   i17 = i16 + 1 | 0;
   if ((i17 | 0) < (i3 | 0)) {
    i16 = i17;
   } else {
    i11 = 24;
    break;
   }
  }
  if ((i11 | 0) == 22) {
   STACKTOP = i5;
   return;
  } else if ((i11 | 0) == 24) {
   STACKTOP = i5;
   return;
  } else if ((i11 | 0) == 14) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } else if ((i11 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZNK7WebCore20RasterShapeIntervals15buildBoundsPathERNS_4PathE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i1 + 4 | 0;
 i6 = i1 + 12 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) <= 0) {
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i5 >> 2] | 0;
 i9 = i1 + 28 | 0;
 i10 = i1 + 24 | 0;
 i11 = i1 + 16 | 0;
 i1 = i4 | 0;
 i12 = i4 + 4 | 0;
 i13 = i4 + 8 | 0;
 i14 = i4 + 12 | 0;
 i15 = i8;
 i16 = i8;
 i8 = i7;
 L4 : while (1) {
  i7 = HEAP32[i9 >> 2] | 0;
  i17 = i7 + i15 | 0;
  i18 = HEAP32[i10 >> 2] | 0;
  if (i18 >>> 0 <= i17 >>> 0) {
   i19 = 4;
   break;
  }
  i20 = HEAP32[i11 >> 2] | 0;
  i21 = HEAP32[i20 + (i17 * 12 & -1) + 8 >> 2] | 0;
  if ((i21 | 0) == 0) {
   i22 = i15;
   i23 = i16;
   i24 = i8;
  } else {
   i25 = HEAP32[i20 + (i17 * 12 & -1) >> 2] | 0;
   i17 = _llvm_uadd_with_overflow_i32(i21 | 0, -1 | 0) | 0;
   if (!tempRet0) {
    i19 = 7;
    break;
   }
   i21 = HEAP32[i25 >> 2] | 0;
   i26 = HEAP32[i25 + (i17 << 3) + 4 >> 2] | 0;
   i17 = i8 + i16 | 0;
   i25 = i15;
   while (1) {
    i27 = i25 + 1 | 0;
    if ((i27 | 0) >= (i17 | 0)) {
     break;
    }
    i28 = i7 + i27 | 0;
    if (i18 >>> 0 <= i28 >>> 0) {
     i19 = 11;
     break L4;
    }
    i29 = HEAP32[i20 + (i28 * 12 & -1) + 8 >> 2] | 0;
    if ((i29 | 0) == 0) {
     break;
    }
    i30 = HEAP32[i20 + (i28 * 12 & -1) >> 2] | 0;
    i28 = _llvm_uadd_with_overflow_i32(i29 | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i19 = 14;
     break L4;
    }
    if ((HEAP32[i30 >> 2] | 0) != (i21 | 0) | (HEAP32[i30 + (i28 << 3) + 4 >> 2] | 0) != (i26 | 0)) {
     break;
    } else {
     i25 = i27;
    }
   }
   HEAPF32[i1 >> 2] = +(i21 | 0);
   HEAPF32[i12 >> 2] = +(i15 | 0);
   HEAPF32[i13 >> 2] = +(i26 - i21 | 0);
   HEAPF32[i14 >> 2] = +(i27 - i15 | 0);
   __ZN7WebCore4Path7addRectERKNS_9FloatRectE(i2, i4);
   i22 = i25;
   i23 = HEAP32[i5 >> 2] | 0;
   i24 = HEAP32[i6 >> 2] | 0;
  }
  i20 = i22 + 1 | 0;
  if ((i20 | 0) < (i24 + i23 | 0)) {
   i15 = i20;
   i16 = i23;
   i8 = i24;
  } else {
   i19 = 20;
   break;
  }
 }
 if ((i19 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i19 | 0) == 14) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i19 | 0) == 11) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i19 | 0) == 7) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i19 | 0) == 20) {
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore11RasterShape15marginIntervalsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, d4 = +0, i5 = 0, i6 = 0, d7 = +0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 d4 = +HEAPF32[i1 + 8 >> 2];
 if (d4 == +0) {
  i5 = i1 + 16 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 d7 = +Math_ceil(d4);
 do {
  if (d7 < +4294967295) {
   if (d7 <= +0) {
    i8 = 0;
    break;
   }
   i8 = ~~d7;
  } else {
   i8 = -1;
  }
 } while (0);
 i9 = HEAP32[i1 + 24 >> 2] | 0;
 i10 = HEAP32[i1 + 28 >> 2] | 0;
 i11 = i9 >>> 0 < i10 >>> 0 ? i10 : i9;
 i9 = i1 + 20 | 0;
 if ((HEAP32[i9 >> 2] | 0) != 0) {
  i5 = i9;
  i6 = HEAP32[i5 >> 2] | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZNK7WebCore20RasterShapeIntervals27computeShapeMarginIntervalsEj(i3, HEAP32[i1 + 16 >> 2] | 0, i11 >>> 0 < i8 >>> 0 ? i11 : i8);
 i8 = HEAP32[i9 >> 2] | 0;
 i11 = i3 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i9 >> 2] = i3;
 if ((i8 | 0) == 0) {
  i5 = i9;
  i6 = HEAP32[i5 >> 2] | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i3 = i8 + 24 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i10 = i8 + 16 | 0;
 if ((i1 | 0) != 0) {
  i12 = HEAP32[i10 >> 2] | 0;
  i13 = i12 + (i1 * 12 & -1) | 0;
  i1 = i12;
  while (1) {
   i12 = i1 + 8 | 0;
   if ((HEAP32[i12 >> 2] | 0) != 0) {
    HEAP32[i12 >> 2] = 0;
   }
   i12 = i1 | 0;
   i14 = HEAP32[i12 >> 2] | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i12 >> 2] = 0;
    HEAP32[i1 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i14);
   }
   i1 = i1 + 12 | 0;
   if ((i1 | 0) == (i13 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i10 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i10 >> 2] = 0;
  HEAP32[i8 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZdlPv(i8);
 i8 = HEAP32[i11 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i5 = i9;
  i6 = HEAP32[i5 >> 2] | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i11 = i8 + 24 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 i10 = i8 + 16 | 0;
 if ((i3 | 0) != 0) {
  i13 = HEAP32[i10 >> 2] | 0;
  i1 = i13 + (i3 * 12 & -1) | 0;
  i3 = i13;
  while (1) {
   i13 = i3 + 8 | 0;
   if ((HEAP32[i13 >> 2] | 0) != 0) {
    HEAP32[i13 >> 2] = 0;
   }
   i13 = i3 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i13 >> 2] = 0;
    HEAP32[i3 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i14);
   }
   i3 = i3 + 12 | 0;
   if ((i3 | 0) == (i1 | 0)) {
    break;
   }
  }
  HEAP32[i11 >> 2] = 0;
 }
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) != 0) {
  HEAP32[i10 >> 2] = 0;
  HEAP32[i8 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i11);
 }
 __ZdlPv(i8);
 i5 = i9;
 i6 = HEAP32[i5 >> 2] | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN3WTF6VectorIN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEEaSERKS5_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i4 >>> 0 > i6 >>> 0) {
   HEAP32[i3 >> 2] = i6;
  } else {
   i7 = i1 + 4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if (i6 >>> 0 <= i8 >>> 0) {
    break;
   }
   do {
    if ((i8 | 0) == 0) {
     i9 = 0;
    } else {
     if ((i4 | 0) != 0) {
      HEAP32[i3 >> 2] = 0;
     }
     i10 = i1 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     if ((i11 | 0) == 0) {
      i9 = i8;
      break;
     }
     HEAP32[i10 >> 2] = 0;
     HEAP32[i7 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i11);
     i9 = HEAP32[i7 >> 2] | 0;
    }
   } while (0);
   i8 = HEAP32[i5 >> 2] | 0;
   if (i9 >>> 0 >= i8 >>> 0) {
    break;
   }
   i11 = i1 | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = i10 + (i12 << 3) | 0;
   if (i8 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
    return 0;
   }
   i14 = __ZN3WTF18fastMallocGoodSizeEj(i8 << 3) | 0;
   HEAP32[i7 >> 2] = i14 >>> 3;
   i8 = __ZN3WTF10fastMallocEj(i14) | 0;
   HEAP32[i11 >> 2] = i8;
   if ((i12 | 0) != 0) {
    i12 = i10;
    i14 = i8;
    while (1) {
     i8 = i12;
     i15 = i14;
     i16 = HEAP32[i8 + 4 >> 2] | 0;
     HEAP32[i15 >> 2] = HEAP32[i8 >> 2];
     HEAP32[i15 + 4 >> 2] = i16;
     i16 = i12 + 8 | 0;
     if ((i16 | 0) == (i13 | 0)) {
      break;
     } else {
      i12 = i16;
      i14 = i14 + 8 | 0;
     }
    }
   }
   if ((i10 | 0) == 0) {
    break;
   }
   if ((HEAP32[i11 >> 2] | 0) == (i10 | 0)) {
    HEAP32[i11 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i10);
  }
 } while (0);
 i9 = i2 | 0;
 i2 = i1 | 0;
 _memmove(HEAP32[i2 >> 2] | 0, HEAP32[i9 >> 2] | 0, HEAP32[i3 >> 2] << 3 | 0) | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i14 = i4 + (i6 << 3) | 0;
 if ((i9 | 0) == (i6 | 0)) {
  i17 = i9;
 } else {
  i6 = i4 + (i9 << 3) | 0;
  i4 = (HEAP32[i2 >> 2] | 0) + (i9 << 3) | 0;
  while (1) {
   i9 = i6;
   i2 = i4;
   i12 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i2 + 4 >> 2] = i12;
   i12 = i6 + 8 | 0;
   if ((i12 | 0) == (i14 | 0)) {
    break;
   } else {
    i6 = i12;
    i4 = i4 + 8 | 0;
   }
  }
  i17 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i17;
 return i1 | 0;
}
function __ZNSt3__17__sort5IRNS_6__lessIiiEEPiEEjT0_S5_S5_S5_S5_T_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = (i8 | 0) < (i6 | 0);
 do {
  if ((i6 | 0) < (i7 | 0)) {
   if (i9) {
    HEAP32[i1 >> 2] = i8;
    HEAP32[i3 >> 2] = i7;
    i10 = 1;
    i11 = i7;
    break;
   }
   HEAP32[i1 >> 2] = i6;
   HEAP32[i2 >> 2] = i7;
   i12 = HEAP32[i3 >> 2] | 0;
   if ((i12 | 0) >= (i7 | 0)) {
    i10 = 1;
    i11 = i12;
    break;
   }
   HEAP32[i2 >> 2] = i12;
   HEAP32[i3 >> 2] = i7;
   i10 = 2;
   i11 = i7;
  } else {
   if (!i9) {
    i10 = 0;
    i11 = i8;
    break;
   }
   HEAP32[i2 >> 2] = i8;
   HEAP32[i3 >> 2] = i6;
   i12 = HEAP32[i2 >> 2] | 0;
   i13 = HEAP32[i1 >> 2] | 0;
   if ((i12 | 0) >= (i13 | 0)) {
    i10 = 1;
    i11 = i6;
    break;
   }
   HEAP32[i1 >> 2] = i12;
   HEAP32[i2 >> 2] = i13;
   i10 = 2;
   i11 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) < (i11 | 0)) {
   HEAP32[i3 >> 2] = i6;
   HEAP32[i4 >> 2] = i11;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = HEAP32[i2 >> 2] | 0;
   if ((i8 | 0) >= (i9 | 0)) {
    i14 = i10 + 1 | 0;
    break;
   }
   HEAP32[i2 >> 2] = i8;
   HEAP32[i3 >> 2] = i9;
   i9 = HEAP32[i2 >> 2] | 0;
   i8 = HEAP32[i1 >> 2] | 0;
   if ((i9 | 0) < (i8 | 0)) {
    HEAP32[i1 >> 2] = i9;
    HEAP32[i2 >> 2] = i8;
    i14 = i10 + 3 | 0;
    break;
   } else {
    i14 = i10 + 2 | 0;
    break;
   }
  } else {
   i14 = i10;
  }
 } while (0);
 i10 = HEAP32[i5 >> 2] | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 if ((i10 | 0) >= (i11 | 0)) {
  i15 = i14;
  return i15 | 0;
 }
 HEAP32[i4 >> 2] = i10;
 HEAP32[i5 >> 2] = i11;
 i11 = HEAP32[i4 >> 2] | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i11 | 0) >= (i5 | 0)) {
  i15 = i14 + 1 | 0;
  return i15 | 0;
 }
 HEAP32[i3 >> 2] = i11;
 HEAP32[i4 >> 2] = i5;
 i5 = HEAP32[i3 >> 2] | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) >= (i4 | 0)) {
  i15 = i14 + 2 | 0;
  return i15 | 0;
 }
 HEAP32[i2 >> 2] = i5;
 HEAP32[i3 >> 2] = i4;
 i4 = HEAP32[i2 >> 2] | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) >= (i3 | 0)) {
  i15 = i14 + 3 | 0;
  return i15 | 0;
 }
 HEAP32[i1 >> 2] = i4;
 HEAP32[i2 >> 2] = i3;
 i15 = i14 + 4 | 0;
 return i15 | 0;
}
function __ZN7WebCoreL18appendLineSegmentsERKN3WTF6VectorINS_13ShapeIntervalIiEELj0ENS0_15CrashOnOverflowEEERNS1_INS_11LineSegmentELj0ES4_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, d16 = +0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = i1 + 8 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 | 0;
 i1 = i4;
 i8 = i5 + 4 | 0;
 i9 = i2 + 8 | 0;
 i10 = i2 + 4 | 0;
 i11 = i2 | 0;
 i12 = i4;
 i13 = 0;
 while (1) {
  i14 = HEAP32[i7 >> 2] | 0;
  d15 = +(HEAP32[i14 + (i13 << 3) >> 2] | 0);
  d16 = +((HEAP32[i14 + (i13 << 3) + 4 >> 2] | 0) + 1 | 0);
  do {
   if (d15 < +2147483647) {
    if (d15 <= +-2147483648) {
     i17 = -2147483648;
     break;
    }
    i17 = ~~d15;
   } else {
    i17 = 2147483647;
   }
  } while (0);
  HEAP32[i1 >> 2] = i17;
  do {
   if (d16 < +2147483647) {
    if (d16 <= +-2147483648) {
     i18 = -2147483648;
     break;
    }
    i18 = ~~d16;
   } else {
    i18 = 2147483647;
   }
  } while (0);
  HEAP32[i8 >> 2] = i18;
  i14 = HEAP32[i9 >> 2] | 0;
  if ((i14 | 0) == (HEAP32[i10 >> 2] | 0)) {
   i19 = i14 + 1 | 0;
   i20 = HEAP32[i11 >> 2] | 0;
   do {
    if (i20 >>> 0 > i5 >>> 0) {
     i21 = 13;
    } else {
     if ((i20 + (i14 << 3) | 0) >>> 0 <= i5 >>> 0) {
      i21 = 13;
      break;
     }
     __ZN3WTF6VectorIN7WebCore11LineSegmentELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i19);
     i22 = HEAP32[i11 >> 2] | 0;
     i23 = i22 + (i12 - i20 >> 3 << 3) | 0;
     i24 = i22;
    }
   } while (0);
   if ((i21 | 0) == 13) {
    i21 = 0;
    __ZN3WTF6VectorIN7WebCore11LineSegmentELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i19);
    i23 = i5;
    i24 = HEAP32[i11 >> 2] | 0;
   }
   i20 = i23;
   i22 = i24 + (HEAP32[i9 >> 2] << 3) | 0;
   i25 = HEAP32[i20 + 4 >> 2] | 0;
   HEAP32[i22 >> 2] = HEAP32[i20 >> 2];
   HEAP32[i22 + 4 >> 2] = i25;
  } else {
   i25 = (HEAP32[i11 >> 2] | 0) + (i14 << 3) | 0;
   i22 = HEAP32[i4 + 4 >> 2] | 0;
   HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i25 + 4 >> 2] = i22;
  }
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i13 = i13 + 1 | 0;
  if (i13 >>> 0 >= (HEAP32[i6 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RasterShapeIntervals20getExcludedIntervalsEiiRN3WTF6VectorINS_13ShapeIntervalIiEELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i7 | 0) > (i3 | 0)) {
  STACKTOP = i5;
  return;
 }
 i8 = (HEAP32[i1 + 12 >> 2] | 0) + i7 | 0;
 if ((i8 | 0) <= (i2 | 0)) {
  STACKTOP = i5;
  return;
 }
 i9 = (i7 | 0) > (i2 | 0) ? i7 : i2;
 i2 = (i8 | 0) < (i3 | 0) ? i8 : i3;
 i3 = i1 + 28 | 0;
 i8 = (HEAP32[i3 >> 2] | 0) + i9 | 0;
 i7 = i1 + 24 | 0;
 if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i8 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i10 = i1 + 16 | 0;
 __ZN3WTF6VectorIN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEEaSERKS5_(i4, (HEAP32[i10 >> 2] | 0) + (i8 * 12 & -1) | 0) | 0;
 i8 = i9 + 1 | 0;
 if ((i8 | 0) >= (i2 | 0)) {
  STACKTOP = i5;
  return;
 }
 i9 = i6 | 0;
 i1 = i6 + 4 | 0;
 i11 = i6 + 8 | 0;
 i12 = i4 + 8 | 0;
 i13 = i4 | 0;
 i14 = i4 + 4 | 0;
 i15 = i8;
 while (1) {
  HEAP32[i9 >> 2] = 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i11 >> 2] = 0;
  i8 = (HEAP32[i3 >> 2] | 0) + i15 | 0;
  if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i8 >>> 0) {
   i16 = 8;
   break;
  }
  __ZN7WebCore13ShapeIntervalIiE19uniteShapeIntervalsERKN3WTF6VectorIS1_Lj0ENS2_15CrashOnOverflowEEES7_RS5_(i4, (HEAP32[i10 >> 2] | 0) + (i8 * 12 & -1) | 0, i6);
  i8 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i11 >> 2] = i8;
  i17 = HEAP32[i13 >> 2] | 0;
  HEAP32[i13 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i9 >> 2] = i17;
  i18 = HEAP32[i14 >> 2] | 0;
  HEAP32[i14 >> 2] = HEAP32[i1 >> 2];
  HEAP32[i1 >> 2] = i18;
  if ((i8 | 0) != 0) {
   HEAP32[i11 >> 2] = 0;
  }
  if ((i17 | 0) != 0) {
   HEAP32[i9 >> 2] = 0;
   HEAP32[i1 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i17);
  }
  i17 = i15 + 1 | 0;
  if ((i17 | 0) < (i2 | 0)) {
   i15 = i17;
  } else {
   i16 = 16;
   break;
  }
 }
 if ((i16 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i16 | 0) == 16) {
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore20RasterShapeIntervals14appendIntervalEiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i7;
 HEAP32[i6 >> 2] = i3;
 HEAP32[i6 + 4 >> 2] = i2;
 HEAP32[i6 + 8 >> 2] = i4 - i3;
 HEAP32[i6 + 12 >> 2] = 1;
 __ZN7WebCore7IntRect5uniteERKS0_(i1 | 0, i6);
 i6 = (HEAP32[i1 + 28 >> 2] | 0) + i2 | 0;
 if ((HEAP32[i1 + 24 >> 2] | 0) >>> 0 <= i6 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 i1 = i2 + (i6 * 12 & -1) | 0;
 HEAP32[i7 >> 2] = i3;
 HEAP32[i8 + 4 >> 2] = i4;
 i4 = i2 + (i6 * 12 & -1) + 8 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != (HEAP32[i2 + (i6 * 12 & -1) + 4 >> 2] | 0)) {
  i6 = (HEAP32[i1 >> 2] | 0) + (i3 << 3) | 0;
  i2 = HEAP32[i7 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i6 + 4 >> 2] = i2;
  i9 = HEAP32[i4 >> 2] | 0;
  i10 = i9 + 1 | 0;
  HEAP32[i4 >> 2] = i10;
  STACKTOP = i5;
  return;
 }
 i2 = i3 + 1 | 0;
 i6 = i1 | 0;
 i11 = HEAP32[i6 >> 2] | 0;
 do {
  if (i11 >>> 0 > i8 >>> 0) {
   i12 = 7;
  } else {
   if ((i11 + (i3 << 3) | 0) >>> 0 <= i8 >>> 0) {
    i12 = 7;
    break;
   }
   __ZN3WTF6VectorIN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2);
   i13 = HEAP32[i6 >> 2] | 0;
   i14 = i13 + (i7 - i11 >> 3 << 3) | 0;
   i15 = i13;
  }
 } while (0);
 if ((i12 | 0) == 7) {
  __ZN3WTF6VectorIN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2);
  i14 = i8;
  i15 = HEAP32[i6 >> 2] | 0;
 }
 i6 = i14;
 i14 = i15 + (HEAP32[i4 >> 2] << 3) | 0;
 i15 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i14 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i14 + 4 >> 2] = i15;
 i9 = HEAP32[i4 >> 2] | 0;
 i10 = i9 + 1 | 0;
 HEAP32[i4 >> 2] = i10;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20RasterShapeIntervals19uniteMarginIntervalEiRKNS_13ShapeIntervalIiEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = (HEAP32[i1 + 28 >> 2] | 0) + i2 | 0;
 if ((HEAP32[i1 + 24 >> 2] | 0) >>> 0 <= i6 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = HEAP32[i1 + 16 >> 2] | 0;
 i8 = i7 + (i6 * 12 & -1) | 0;
 i9 = i7 + (i6 * 12 & -1) + 8 | 0;
 do {
  if ((HEAP32[i9 >> 2] | 0) == 0) {
   i10 = i8 | 0;
   if ((HEAP32[i7 + (i6 * 12 & -1) + 4 >> 2] | 0) == 0) {
    __ZN3WTF6VectorIN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, 1);
    i11 = i3;
    i12 = (HEAP32[i10 >> 2] | 0) + (HEAP32[i9 >> 2] << 3) | 0;
    i13 = HEAP32[i11 + 4 >> 2] | 0;
    HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
    HEAP32[i12 + 4 >> 2] = i13;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
    break;
   } else {
    i13 = i3;
    i12 = HEAP32[i10 >> 2] | 0;
    i10 = HEAP32[i13 + 4 >> 2] | 0;
    HEAP32[i12 >> 2] = HEAP32[i13 >> 2];
    HEAP32[i12 + 4 >> 2] = i10;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
    break;
   }
  } else {
   i10 = HEAP32[i8 >> 2] | 0;
   i12 = i10 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   i11 = HEAP32[i3 >> 2] | 0;
   i14 = i10 + 4 | 0;
   i10 = HEAP32[i14 >> 2] | 0;
   i15 = HEAP32[i3 + 4 >> 2] | 0;
   HEAP32[i12 >> 2] = (i11 | 0) < (i13 | 0) ? i11 : i13;
   HEAP32[i14 >> 2] = (i10 | 0) < (i15 | 0) ? i15 : i10;
  }
 } while (0);
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = (HEAP32[i3 + 4 >> 2] | 0) - i8 | 0;
 HEAP32[i5 >> 2] = i8;
 HEAP32[i5 + 4 >> 2] = i2;
 HEAP32[i5 + 8 >> 2] = i9;
 HEAP32[i5 + 12 >> 2] = 1;
 __ZN7WebCore7IntRect5uniteERKS0_(i1 | 0, i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL14appendX1ValuesERKN3WTF6VectorINS_13ShapeIntervalIiEELj0ENS0_15CrashOnOverflowEEEiRNS1_IiLj0ES4_EE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 8 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i1 | 0;
 i1 = i3 + 8 | 0;
 i8 = i3 + 4 | 0;
 i9 = i3 | 0;
 i10 = i5;
 i11 = 0;
 while (1) {
  i12 = HEAP32[i7 >> 2] | 0;
  i13 = HEAP32[i12 + (i11 << 3) >> 2] | 0;
  do {
   if (((HEAP32[i12 + (i11 << 3) + 4 >> 2] | 0) - i13 | 0) >= (i2 | 0)) {
    HEAP32[i5 >> 2] = i13;
    i14 = HEAP32[i1 >> 2] | 0;
    if ((i14 | 0) != (HEAP32[i8 >> 2] | 0)) {
     HEAP32[(HEAP32[i9 >> 2] | 0) + (i14 << 2) >> 2] = i13;
     HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
     break;
    }
    i15 = i14 + 1 | 0;
    i16 = HEAP32[i9 >> 2] | 0;
    do {
     if (i16 >>> 0 > i5 >>> 0) {
      i17 = 8;
     } else {
      if ((i16 + (i14 << 2) | 0) >>> 0 <= i5 >>> 0) {
       i17 = 8;
       break;
      }
      __ZN3WTF6VectorIiLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i15);
      i18 = HEAP32[i9 >> 2] | 0;
      i19 = i18 + (i10 - i16 >> 2 << 2) | 0;
      i20 = i18;
     }
    } while (0);
    if ((i17 | 0) == 8) {
     i17 = 0;
     __ZN3WTF6VectorIiLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i15);
     i19 = i5;
     i20 = HEAP32[i9 >> 2] | 0;
    }
    HEAP32[i20 + (HEAP32[i1 >> 2] << 2) >> 2] = HEAP32[i19 >> 2];
    HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
   }
  } while (0);
  i11 = i11 + 1 | 0;
  if (i11 >>> 0 >= (HEAP32[i6 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore20RasterShapeIntervals8containsERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 if (!(__ZNK7WebCore7IntRect8containsERKS0_(i1 | 0, i2) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = (HEAP32[i2 + 8 >> 2] | 0) + i4 | 0;
 i6 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i6 | 0) <= 0) {
  i3 = 1;
  return i3 | 0;
 }
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 i8 = HEAP32[i1 + 24 >> 2] | 0;
 i9 = i1 + 16 | 0;
 i1 = i7;
 L7 : while (1) {
  i10 = i2 + i1 | 0;
  if (i8 >>> 0 <= i10 >>> 0) {
   i11 = 5;
   break;
  }
  i12 = HEAP32[i9 >> 2] | 0;
  i13 = HEAP32[i12 + (i10 * 12 & -1) + 8 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i3 = 0;
   i11 = 14;
   break;
  }
  i14 = HEAP32[i12 + (i10 * 12 & -1) >> 2] | 0;
  i10 = 0;
  while (1) {
   i12 = HEAP32[i14 + (i10 << 3) >> 2] | 0;
   if ((i12 | 0) > (i5 | 0)) {
    i3 = 0;
    i11 = 15;
    break L7;
   }
   if ((i12 | 0) <= (i4 | 0)) {
    if ((HEAP32[i14 + (i10 << 3) + 4 >> 2] | 0) >= (i5 | 0)) {
     break;
    }
   }
   i12 = i10 + 1 | 0;
   if (i12 >>> 0 < i13 >>> 0) {
    i10 = i12;
   } else {
    i3 = 0;
    i11 = 16;
    break L7;
   }
  }
  i10 = i1 + 1 | 0;
  if ((i10 | 0) < (i6 + i7 | 0)) {
   i1 = i10;
  } else {
   i3 = 1;
   i11 = 17;
   break;
  }
 }
 if ((i11 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i11 | 0) == 14) {
  return i3 | 0;
 } else if ((i11 | 0) == 15) {
  return i3 | 0;
 } else if ((i11 | 0) == 16) {
  return i3 | 0;
 } else if ((i11 | 0) == 17) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore11RasterShapeD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2 + 24 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  i5 = i2 + 16 | 0;
  if ((i4 | 0) != 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i6 + (i4 * 12 & -1) | 0;
   i4 = i6;
   while (1) {
    i6 = i4 + 8 | 0;
    if ((HEAP32[i6 >> 2] | 0) != 0) {
     HEAP32[i6 >> 2] = 0;
    }
    i6 = i4 | 0;
    i8 = HEAP32[i6 >> 2] | 0;
    if ((i8 | 0) != 0) {
     HEAP32[i6 >> 2] = 0;
     HEAP32[i4 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i8);
    }
    i4 = i4 + 12 | 0;
    if ((i4 | 0) == (i7 | 0)) {
     break;
    }
   }
   HEAP32[i3 >> 2] = 0;
  }
  i3 = HEAP32[i5 >> 2] | 0;
  if ((i3 | 0) != 0) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i2 + 20 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZdlPv(i2);
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 24 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i5 = i2 + 16 | 0;
 if ((i3 | 0) != 0) {
  i7 = HEAP32[i5 >> 2] | 0;
  i4 = i7 + (i3 * 12 & -1) | 0;
  i3 = i7;
  while (1) {
   i7 = i3 + 8 | 0;
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
   }
   i7 = i3 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
    HEAP32[i3 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i8);
   }
   i3 = i3 + 12 | 0;
   if ((i3 | 0) == (i4 | 0)) {
    break;
   }
  }
  HEAP32[i1 >> 2] = 0;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i2 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZdlPv(i2);
 return;
}
function __ZN3WTF6VectorINS0_IN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEEELj0ES4_E15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 12 & -1) | 0;
 if (i2 >>> 0 > 357913941 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 12 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 12 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = i7 | 0;
   HEAP32[i2 >> 2] = 0;
   i8 = i7 + 4 | 0;
   HEAP32[i8 >> 2] = 0;
   i9 = i7 + 8 | 0;
   HEAP32[i9 >> 2] = 0;
   i10 = i6 + 8 | 0;
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i10 >> 2] = 0;
   i9 = i6 | 0;
   i11 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i9 >> 2] = i11;
   i11 = i6 + 4 | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i11 >> 2] = i2;
   if ((HEAP32[i10 >> 2] | 0) != 0) {
    HEAP32[i10 >> 2] = 0;
   }
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i9 >> 2] = 0;
    HEAP32[i11 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i10);
   }
   i10 = i6 + 12 | 0;
   if ((i10 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i10;
    i7 = i7 + 12 | 0;
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
function __ZN3WTF6VectorINS0_IN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEEELj0ES4_E6resizeEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (i4 >>> 0 < i2 >>> 0) {
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  if (i5 >>> 0 < i2 >>> 0) {
   i6 = i5 + 1 + (i5 >>> 2) | 0;
   i5 = i6 >>> 0 > 16 >>> 0 ? i6 : 16;
   __ZN3WTF6VectorINS0_IN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEEELj0ES4_E15reserveCapacityEj(i1, i5 >>> 0 > i2 >>> 0 ? i5 : i2);
  }
  i5 = HEAP32[i1 >> 2] | 0;
  if ((i5 | 0) == 0) {
   HEAP32[i3 >> 2] = i2;
   return;
  }
  i6 = HEAP32[i3 >> 2] | 0;
  i7 = i5 + (i2 * 12 & -1) | 0;
  if ((i6 | 0) == (i2 | 0)) {
   HEAP32[i3 >> 2] = i2;
   return;
  }
  i8 = i5 + (i6 * 12 & -1) | 0;
  while (1) {
   HEAP32[i8 >> 2] = 0;
   HEAP32[i8 + 4 >> 2] = 0;
   HEAP32[i8 + 8 >> 2] = 0;
   i8 = i8 + 12 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = i2;
  return;
 } else {
  i7 = HEAP32[i1 >> 2] | 0;
  i1 = i7 + (i4 * 12 & -1) | 0;
  if ((i4 | 0) == (i2 | 0)) {
   HEAP32[i3 >> 2] = i2;
   return;
  }
  i4 = i7 + (i2 * 12 & -1) | 0;
  while (1) {
   i7 = i4 + 8 | 0;
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
   }
   i7 = i4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
    HEAP32[i4 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i8);
   }
   i4 = i4 + 12 | 0;
   if ((i4 | 0) == (i1 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = i2;
  return;
 }
}
function __ZNK7WebCore11RasterShape20getExcludedIntervalsENS_10LayoutUnitES1_RN3WTF6VectorINS_11LineSegmentELj0ENS2_15CrashOnOverflowEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = __ZNK7WebCore11RasterShape15marginIntervalsEv(i1) | 0;
 if ((HEAP32[i7 + 8 >> 2] | 0) < 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i7 + 12 >> 2] | 0) < 1) {
  STACKTOP = i5;
  return;
 }
 i1 = i6 | 0;
 HEAP32[i1 >> 2] = 0;
 i8 = i6 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i6 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = HEAP32[i2 >> 2] | 0;
 __ZNK7WebCore20RasterShapeIntervals20getExcludedIntervalsEiiRN3WTF6VectorINS_13ShapeIntervalIiEELj0ENS1_15CrashOnOverflowEEE(i7, i10, (HEAP32[i3 >> 2] | 0) + i10 | 0, i6);
 __ZN7WebCoreL18appendLineSegmentsERKN3WTF6VectorINS_13ShapeIntervalIiEELj0ENS0_15CrashOnOverflowEEERNS1_INS_11LineSegmentELj0ES4_EE(i6, i4);
 if ((HEAP32[i9 >> 2] | 0) != 0) {
  HEAP32[i9 >> 2] = 0;
 }
 i9 = HEAP32[i1 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i9);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore11RasterShape20getIncludedIntervalsENS_10LayoutUnitES1_RN3WTF6VectorINS_11LineSegmentELj0ENS2_15CrashOnOverflowEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = HEAP32[i1 + 16 >> 2] | 0;
 if ((HEAP32[i7 + 8 >> 2] | 0) < 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i7 + 12 >> 2] | 0) < 1) {
  STACKTOP = i5;
  return;
 }
 i1 = i6 | 0;
 HEAP32[i1 >> 2] = 0;
 i8 = i6 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i6 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = HEAP32[i2 >> 2] | 0;
 __ZNK7WebCore20RasterShapeIntervals20getIncludedIntervalsEiiRN3WTF6VectorINS_13ShapeIntervalIiEELj0ENS1_15CrashOnOverflowEEE(i7, i10, (HEAP32[i3 >> 2] | 0) + i10 | 0, i6);
 __ZN7WebCoreL18appendLineSegmentsERKN3WTF6VectorINS_13ShapeIntervalIiEELj0ENS0_15CrashOnOverflowEEERNS1_INS_11LineSegmentELj0ES4_EE(i6, i4);
 if ((HEAP32[i9 >> 2] | 0) != 0) {
  HEAP32[i9 >> 2] = 0;
 }
 i9 = HEAP32[i1 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i9);
 STACKTOP = i5;
 return;
}
function __ZN3WTF6VectorIN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
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
 i1 = i2 + (i6 << 3) | 0;
 if (i5 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 3) | 0;
 HEAP32[i3 >> 2] = i7 >>> 3;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   i5 = i6;
   i8 = i7;
   i9 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i8 + 4 >> 2] = i9;
   i9 = i6 + 8 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 8 | 0;
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
function __ZN3WTF6VectorIN7WebCore11LineSegmentELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
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
 i1 = i2 + (i6 << 3) | 0;
 if (i5 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 3) | 0;
 HEAP32[i3 >> 2] = i7 >>> 3;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   i5 = i6;
   i8 = i7;
   i9 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i8 + 4 >> 2] = i9;
   i9 = i6 + 8 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 8 | 0;
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
function __ZNK7WebCore11RasterShape31firstIncludedIntervalLogicalTopENS_10LayoutUnitERKNS_10LayoutSizeERS1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = HEAP32[i1 + 16 >> 2] | 0;
 if ((HEAP32[i7 + 8 >> 2] | 0) < 1) {
  i8 = 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 if ((HEAP32[i7 + 12 >> 2] | 0) < 1) {
  i8 = 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i6 + 4 >> 2] = i2;
 i8 = __ZNK7WebCore20RasterShapeIntervals22firstIncludedIntervalYEiRKNS_7IntSizeERNS_10LayoutUnitE(i7, i1, i6, i4) | 0;
 STACKTOP = i5;
 return i8 | 0;
}
function __ZN3WTF6VectorIiLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore23MarginIntervalGeneratorC2Ej(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 | 0;
 i4 = i1 + 8 | 0;
 i5 = i2 + 1 | 0;
 _memset(i1 | 0, 0, 24) | 0;
 if ((i5 | 0) != 0) {
  __ZN3WTF6VectorIiLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1 | 0, i5);
 }
 HEAP32[i4 >> 2] = i5;
 i1 = Math_imul(i2, i2) | 0;
 i6 = 0;
 i7 = i5;
 while (1) {
  if (i7 >>> 0 <= i6 >>> 0) {
   i8 = 5;
   break;
  }
  i5 = ~~+Math_sqrt(+((i1 - (Math_imul(i6, i6) | 0) | 0) >>> 0 >>> 0));
  HEAP32[(HEAP32[i3 >> 2] | 0) + (i6 << 2) >> 2] = i5;
  i5 = i6 + 1 | 0;
  if (i5 >>> 0 > i2 >>> 0) {
   i8 = 8;
   break;
  }
  i6 = i5;
  i7 = HEAP32[i4 >> 2] | 0;
 }
 if ((i8 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i8 | 0) == 8) {
  return;
 }
}
function __ZN7WebCore23MarginIntervalGeneratorC1Ej(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 | 0;
 i4 = i1 + 8 | 0;
 i5 = i2 + 1 | 0;
 _memset(i1 | 0, 0, 24) | 0;
 if ((i5 | 0) != 0) {
  __ZN3WTF6VectorIiLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1 | 0, i5);
 }
 HEAP32[i4 >> 2] = i5;
 i1 = Math_imul(i2, i2) | 0;
 i6 = 0;
 i7 = i5;
 while (1) {
  if (i7 >>> 0 <= i6 >>> 0) {
   i8 = 5;
   break;
  }
  i5 = ~~+Math_sqrt(+((i1 - (Math_imul(i6, i6) | 0) | 0) >>> 0 >>> 0));
  HEAP32[(HEAP32[i3 >> 2] | 0) + (i6 << 2) >> 2] = i5;
  i5 = i6 + 1 | 0;
  if (i5 >>> 0 > i2 >>> 0) {
   i8 = 8;
   break;
  }
  i6 = i5;
  i7 = HEAP32[i4 >> 2] | 0;
 }
 if ((i8 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i8 | 0) == 8) {
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
function __ZNK7WebCore23MarginIntervalGenerator10intervalAtEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = i3 - (HEAP32[i2 + 12 >> 2] | 0) | 0;
 i3 = (i4 | 0) > -1 ? i4 : -i4 | 0;
 if (i3 >>> 0 < (HEAP32[i2 + 8 >> 2] | 0) >>> 0) {
  i5 = HEAP32[(HEAP32[i2 >> 2] | 0) + (i3 << 2) >> 2] | 0;
 } else {
  i5 = 0;
 }
 i3 = (HEAP32[i2 + 20 >> 2] | 0) + i5 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i2 + 16 >> 2] | 0) - i5;
 HEAP32[i1 + 4 >> 2] = i3;
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
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vii + 2;
}
function __ZNK7WebCore11RasterShape29shapeMarginLogicalBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = __ZNK7WebCore11RasterShape15marginIntervalsEv(i2) | 0;
 i2 = i3;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i1 + 4 >> 2] = i4;
 i4 = i3 + 8 | 0;
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i1 + 12 >> 2] = i3;
 return;
}
function __ZNK7WebCore11RasterShape17buildDisplayPathsERNS_5Shape12DisplayPathsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore20RasterShapeIntervals15buildBoundsPathERNS_4PathE(HEAP32[i1 + 16 >> 2] | 0, i2 | 0);
 if (+HEAPF32[i1 + 8 >> 2] == +0) {
  return;
 }
 __ZNK7WebCore20RasterShapeIntervals15buildBoundsPathERNS_4PathE(__ZNK7WebCore11RasterShape15marginIntervalsEv(i1) | 0, i2 + 4 | 0);
 return;
}
function __ZNK7WebCore11RasterShape30shapePaddingLogicalBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = i3;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i1 + 4 >> 2] = i4;
 i4 = i3 + 8 | 0;
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i1 + 12 >> 2] = i3;
 return;
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
function __ZN7WebCore23MarginIntervalGenerator3setEiRKNS_13ShapeIntervalIiEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 + 12 >> 2] = i2;
 HEAP32[i1 + 16 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i3 + 4 >> 2];
 return;
}
function __ZNK7WebCore11RasterShape7isEmptyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((HEAP32[i2 + 8 >> 2] | 0) < 1) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 12 >> 2] | 0) < 1;
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
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
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function __ZN7WebCore11RasterShapeD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RasterShapeD2Ev(i1);
 __ZdlPv(i1);
 return;
}
function __ZNK7WebCore11RasterShape16paddingIntervalsEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 16 >> 2] | 0;
}
function b0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(0);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function __ZN7WebCore11RasterShapeD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RasterShapeD2Ev(i1);
 return;
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
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
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
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiii = [b0,b0,__ZNK7WebCore11RasterShape31firstIncludedIntervalLogicalTopENS_10LayoutUnitERKNS_10LayoutSizeERS1_,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore11RasterShapeD0Ev,b1,__ZN7WebCore11RasterShapeD1Ev,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZNK7WebCore11RasterShape17buildDisplayPathsERNS_5Shape12DisplayPathsE,b2,__ZN7WebCore23MarginIntervalGeneratorC2Ej,b2,__ZNK7WebCore11RasterShape29shapeMarginLogicalBoundingBoxEv,b2,__ZNK7WebCore11RasterShape30shapePaddingLogicalBoundingBoxEv,b2,b2,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore11RasterShape7isEmptyEv,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6,__ZNK7WebCore11RasterShape20getExcludedIntervalsENS_10LayoutUnitES1_RN3WTF6VectorINS_11LineSegmentELj0ENS2_15CrashOnOverflowEEE,b6,__ZNK7WebCore11RasterShape20getIncludedIntervalsENS_10LayoutUnitES1_RN3WTF6VectorINS_11LineSegmentELj0ENS2_15CrashOnOverflowEEE,b6,b6,b6];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_ceilf": _ceilf, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_malloc": _malloc, "_sqrt": _sqrt, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore11RasterShape31firstIncludedIntervalLogicalTopENS_10LayoutUnitERKNS_10LayoutSizeERS1_","_strlen","__ZN7WebCore23MarginIntervalGenerator3setEiRKNS_13ShapeIntervalIiEE","__ZNK7WebCore11RasterShape7isEmptyEv","__ZN3WTF6VectorIN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore20RasterShapeIntervals8containsERKNS_7IntRectE","__ZNSt3__127__insertion_sort_incompleteIRNS_6__lessIiiEEPiEEbT0_S5_T_","__ZN7WebCore13ShapeIntervalIiE19uniteShapeIntervalsERKN3WTF6VectorIS1_Lj0ENS2_15CrashOnOverflowEEES7_RS5_","__ZN3WTF6VectorINS0_IN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEEELj0ES4_E15reserveCapacityEj","__ZN7WebCore20RasterShapeIntervals14appendIntervalEiii","__ZNK7WebCore11RasterShape20getIncludedIntervalsENS_10LayoutUnitES1_RN3WTF6VectorINS_11LineSegmentELj0ENS2_15CrashOnOverflowEEE","__ZN7WebCoreL18appendLineSegmentsERKN3WTF6VectorINS_13ShapeIntervalIiEELj0ENS0_15CrashOnOverflowEEERNS1_INS_11LineSegmentELj0ES4_EE","__ZNK7WebCore20RasterShapeIntervals20getExcludedIntervalsEiiRN3WTF6VectorINS_13ShapeIntervalIiEELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore23MarginIntervalGenerator10intervalAtEi","__ZNK7WebCore11RasterShape29shapeMarginLogicalBoundingBoxEv","__ZNK7WebCore20RasterShapeIntervals22firstIncludedIntervalYEiRKNS_7IntSizeERNS_10LayoutUnitE","_memset","_memcpy","__ZN7WebCore11RasterShapeD2Ev","__ZN7WebCore20RasterShapeIntervals19uniteMarginIntervalEiRKNS_13ShapeIntervalIiEE","__ZNK7WebCore20RasterShapeIntervals27computeShapeMarginIntervalsEj","__ZNK7WebCore20RasterShapeIntervals19getIntervalX1ValuesEiiiRN3WTF6VectorIiLj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore20RasterShapeIntervals15buildBoundsPathERNS_4PathE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF6VectorIN7WebCore11LineSegmentELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore11RasterShape15marginIntervalsEv","__ZNSt3__16__sortIRNS_6__lessIiiEEPiEEvT0_S5_T_","__ZN3WTF6VectorIiLj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF6VectorIN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEEaSERKS5_","__ZN7WebCore11RasterShapeD0Ev","__ZN7WebCore11RasterShapeD1Ev","__ZNK7WebCore11RasterShape20getExcludedIntervalsENS_10LayoutUnitES1_RN3WTF6VectorINS_11LineSegmentELj0ENS2_15CrashOnOverflowEEE","__ZNK7WebCore20RasterShapeIntervals20getIncludedIntervalsEiiRN3WTF6VectorINS_13ShapeIntervalIiEELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore23MarginIntervalGeneratorC2Ej","_memmove","__ZNK7WebCore11RasterShape17buildDisplayPathsERNS_5Shape12DisplayPathsE","__ZN7WebCore13ShapeIntervalIiE23intersectShapeIntervalsERKN3WTF6VectorIS1_Lj0ENS2_15CrashOnOverflowEEES7_RS5_","__ZNK7WebCore11RasterShape30shapePaddingLogicalBoundingBoxEv","__ZNK7WebCore11RasterShape16paddingIntervalsEv","__ZNSt3__17__sort5IRNS_6__lessIiiEEPiEEjT0_S5_S5_S5_S5_T_","__ZN7WebCoreL14appendX1ValuesERKN3WTF6VectorINS_13ShapeIntervalIiEELj0ENS0_15CrashOnOverflowEEEiRNS1_IiLj0ES4_EE","__ZN3WTF6VectorINS0_IN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEEELj0ES4_E6resizeEj"]

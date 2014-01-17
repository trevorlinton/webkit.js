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
var __ZN7WebCore13AnimationListC1ERKS0_;
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
function __ZN7WebCore13AnimationList19fillUnsetPropertiesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0;
 i2 = i1 | 0;
 i3 = i1 + 8 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = 0;
 while (1) {
  i5 = i4 >>> 0 < i1 >>> 0;
  if (!i5) {
   i6 = i1;
   break;
  }
  if ((HEAP8[(HEAP32[(HEAP32[i2 >> 2] | 0) + (i4 << 2) >> 2] | 0) + 44 | 0] & 64) == 0) {
   i7 = 4;
   break;
  } else {
   i4 = i4 + 1 | 0;
  }
 }
 L4 : do {
  if ((i7 | 0) == 4) {
   if (i5 & (i4 | 0) != 0) {
    i8 = i4;
    i9 = 0;
    i10 = i1;
   } else {
    i6 = i1;
    break;
   }
   while (1) {
    i11 = HEAP32[i2 >> 2] | 0;
    i12 = HEAP32[i11 + (i8 << 2) >> 2] | 0;
    if (i10 >>> 0 <= i9 >>> 0) {
     break;
    }
    HEAPF64[i12 + 24 >> 3] = +HEAPF64[(HEAP32[i11 + (i9 << 2) >> 2] | 0) + 24 >> 3];
    i11 = i12 + 44 | 0;
    HEAP8[i11] = HEAP8[i11] | 64;
    i11 = i8 + 1 | 0;
    i12 = HEAP32[i3 >> 2] | 0;
    if (i11 >>> 0 >= i12 >>> 0) {
     i6 = i12;
     break L4;
    }
    i8 = i11;
    i9 = i9 + 1 | 0;
    i10 = i12;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i10 = 0;
 while (1) {
  i13 = i10 >>> 0 < i6 >>> 0;
  if (!i13) {
   i14 = i6;
   break;
  }
  if ((HEAP8[(HEAP32[(HEAP32[i2 >> 2] | 0) + (i10 << 2) >> 2] | 0) + 44 | 0] | 0) < 0) {
   i10 = i10 + 1 | 0;
  } else {
   i7 = 12;
   break;
  }
 }
 L15 : do {
  if ((i7 | 0) == 12) {
   if (i13 & (i10 | 0) != 0) {
    i15 = i10;
    i16 = 0;
    i17 = i6;
   } else {
    i14 = i6;
    break;
   }
   while (1) {
    i9 = HEAP32[i2 >> 2] | 0;
    if (i17 >>> 0 <= i16 >>> 0) {
     break;
    }
    i8 = (HEAP32[i9 + (i15 << 2) >> 2] | 0) + 44 | 0;
    i1 = i8;
    i4 = HEAP32[i1 >> 2] & -4 | HEAP32[(HEAP32[i9 + (i16 << 2) >> 2] | 0) + 44 >> 2] & 3;
    HEAP32[i1 >> 2] = i4;
    HEAP8[i8] = i4 & 255 | -128;
    i4 = i15 + 1 | 0;
    i8 = HEAP32[i3 >> 2] | 0;
    if (i4 >>> 0 >= i8 >>> 0) {
     i14 = i8;
     break L15;
    }
    i15 = i4;
    i16 = i16 + 1 | 0;
    i17 = i8;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i17 = 0;
 while (1) {
  i18 = i17 >>> 0 < i14 >>> 0;
  if (!i18) {
   i19 = i14;
   break;
  }
  if ((HEAP8[(HEAP32[(HEAP32[i2 >> 2] | 0) + (i17 << 2) >> 2] | 0) + 45 | 0] & 1) == 0) {
   i7 = 20;
   break;
  } else {
   i17 = i17 + 1 | 0;
  }
 }
 L26 : do {
  if ((i7 | 0) == 20) {
   if (i18 & (i17 | 0) != 0) {
    i20 = i17;
    i21 = 0;
    i22 = i14;
   } else {
    i19 = i14;
    break;
   }
   while (1) {
    i16 = HEAP32[i2 >> 2] | 0;
    i15 = HEAP32[i16 + (i20 << 2) >> 2] | 0;
    if (i22 >>> 0 <= i21 >>> 0) {
     break;
    }
    HEAPF64[i15 + 32 >> 3] = +HEAPF64[(HEAP32[i16 + (i21 << 2) >> 2] | 0) + 32 >> 3];
    i16 = i15 + 45 | 0;
    HEAP8[i16] = HEAP8[i16] | 1;
    i16 = i20 + 1 | 0;
    i15 = HEAP32[i3 >> 2] | 0;
    if (i16 >>> 0 >= i15 >>> 0) {
     i19 = i15;
     break L26;
    }
    i20 = i16;
    i21 = i21 + 1 | 0;
    i22 = i15;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i22 = 0;
 while (1) {
  i23 = i22 >>> 0 < i19 >>> 0;
  if (!i23) {
   i24 = i19;
   break;
  }
  if ((HEAP8[(HEAP32[(HEAP32[i2 >> 2] | 0) + (i22 << 2) >> 2] | 0) + 45 | 0] & 2) == 0) {
   i7 = 28;
   break;
  } else {
   i22 = i22 + 1 | 0;
  }
 }
 L37 : do {
  if ((i7 | 0) == 28) {
   if (i23 & (i22 | 0) != 0) {
    i25 = i22;
    i26 = 0;
    i27 = i19;
   } else {
    i24 = i19;
    break;
   }
   while (1) {
    i21 = HEAP32[i2 >> 2] | 0;
    i20 = HEAP32[i21 + (i25 << 2) >> 2] | 0;
    if (i27 >>> 0 <= i26 >>> 0) {
     break;
    }
    i14 = i20 + 44 | 0;
    i17 = HEAP32[i14 >> 2] | 0;
    HEAP32[i14 >> 2] = i17 & -13 | HEAP32[(HEAP32[i21 + (i26 << 2) >> 2] | 0) + 44 >> 2] & 12;
    HEAP8[i20 + 45 | 0] = i17 >>> 8 & 255 | 2;
    i17 = i25 + 1 | 0;
    i20 = HEAP32[i3 >> 2] | 0;
    if (i17 >>> 0 >= i20 >>> 0) {
     i24 = i20;
     break L37;
    }
    i25 = i17;
    i26 = i26 + 1 | 0;
    i27 = i20;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i27 = 0;
 while (1) {
  i28 = i27 >>> 0 < i24 >>> 0;
  if (!i28) {
   i29 = i24;
   break;
  }
  if ((HEAP8[(HEAP32[(HEAP32[i2 >> 2] | 0) + (i27 << 2) >> 2] | 0) + 45 | 0] & 4) == 0) {
   i7 = 36;
   break;
  } else {
   i27 = i27 + 1 | 0;
  }
 }
 L48 : do {
  if ((i7 | 0) == 36) {
   if (i28 & (i27 | 0) != 0) {
    i30 = i27;
    i31 = 0;
    i32 = i24;
   } else {
    i29 = i24;
    break;
   }
   while (1) {
    i26 = HEAP32[i2 >> 2] | 0;
    i25 = HEAP32[i26 + (i30 << 2) >> 2] | 0;
    if (i32 >>> 0 <= i31 >>> 0) {
     break;
    }
    HEAPF64[i25 + 16 >> 3] = +HEAPF64[(HEAP32[i26 + (i31 << 2) >> 2] | 0) + 16 >> 3];
    i26 = i25 + 45 | 0;
    HEAP8[i26] = HEAP8[i26] | 4;
    i26 = i30 + 1 | 0;
    i25 = HEAP32[i3 >> 2] | 0;
    if (i26 >>> 0 >= i25 >>> 0) {
     i29 = i25;
     break L48;
    }
    i30 = i26;
    i31 = i31 + 1 | 0;
    i32 = i25;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i32 = 0;
 while (1) {
  i33 = i32 >>> 0 < i29 >>> 0;
  if (!i33) {
   i34 = i29;
   break;
  }
  if ((HEAP8[(HEAP32[(HEAP32[i2 >> 2] | 0) + (i32 << 2) >> 2] | 0) + 45 | 0] & 16) == 0) {
   i7 = 44;
   break;
  } else {
   i32 = i32 + 1 | 0;
  }
 }
 L59 : do {
  if ((i7 | 0) == 44) {
   if (i33 & (i32 | 0) != 0) {
    i35 = i32;
    i36 = 0;
    i37 = i29;
   } else {
    i34 = i29;
    break;
   }
   while (1) {
    i31 = HEAP32[i2 >> 2] | 0;
    i30 = HEAP32[i31 + (i35 << 2) >> 2] | 0;
    if (i37 >>> 0 <= i36 >>> 0) {
     break;
    }
    i24 = i30 + 44 | 0;
    i27 = HEAP32[i24 >> 2] | 0;
    HEAP32[i24 >> 2] = i27 & -49 | HEAP32[(HEAP32[i31 + (i36 << 2) >> 2] | 0) + 44 >> 2] & 48;
    HEAP8[i30 + 45 | 0] = i27 >>> 8 & 255 | 16;
    i27 = i35 + 1 | 0;
    i30 = HEAP32[i3 >> 2] | 0;
    if (i27 >>> 0 >= i30 >>> 0) {
     i34 = i30;
     break L59;
    }
    i35 = i27;
    i36 = i36 + 1 | 0;
    i37 = i30;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i37 = 0;
 while (1) {
  i38 = i37 >>> 0 < i34 >>> 0;
  if (!i38) {
   i39 = i34;
   break;
  }
  if ((HEAP8[(HEAP32[(HEAP32[i2 >> 2] | 0) + (i37 << 2) >> 2] | 0) + 45 | 0] & 8) == 0) {
   i7 = 52;
   break;
  } else {
   i37 = i37 + 1 | 0;
  }
 }
 L70 : do {
  if ((i7 | 0) == 52) {
   if (i38 & (i37 | 0) != 0) {
    i40 = i37;
    i41 = 0;
    i42 = i34;
   } else {
    i39 = i34;
    break;
   }
   while (1) {
    i36 = HEAP32[i2 >> 2] | 0;
    i35 = HEAP32[i36 + (i40 << 2) >> 2] | 0;
    if (i42 >>> 0 <= i41 >>> 0) {
     break;
    }
    i29 = HEAP32[(HEAP32[i36 + (i41 << 2) >> 2] | 0) + 4 >> 2] | 0;
    if ((i29 | 0) != 0) {
     i36 = i29 | 0;
     HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 2;
    }
    i36 = i35 + 4 | 0;
    i32 = HEAP32[i36 >> 2] | 0;
    HEAP32[i36 >> 2] = i29;
    do {
     if ((i32 | 0) != 0) {
      i29 = i32 | 0;
      i36 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
      if ((i36 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i32);
       break;
      } else {
       HEAP32[i29 >> 2] = i36;
       break;
      }
     }
    } while (0);
    i32 = i35 + 45 | 0;
    HEAP8[i32] = HEAP8[i32] | 8;
    i32 = i40 + 1 | 0;
    i36 = HEAP32[i3 >> 2] | 0;
    if (i32 >>> 0 >= i36 >>> 0) {
     i39 = i36;
     break L70;
    }
    i40 = i32;
    i41 = i41 + 1 | 0;
    i42 = i36;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i42 = 0;
 while (1) {
  i43 = i42 >>> 0 < i39 >>> 0;
  if (!i43) {
   i44 = i39;
   break;
  }
  if ((HEAP8[(HEAP32[(HEAP32[i2 >> 2] | 0) + (i42 << 2) >> 2] | 0) + 45 | 0] & 64) == 0) {
   i7 = 66;
   break;
  } else {
   i42 = i42 + 1 | 0;
  }
 }
 L90 : do {
  if ((i7 | 0) == 66) {
   if (i43 & (i42 | 0) != 0) {
    i45 = i42;
    i46 = 0;
    i47 = i39;
   } else {
    i44 = i39;
    break;
   }
   while (1) {
    i41 = HEAP32[i2 >> 2] | 0;
    i40 = HEAP32[i41 + (i45 << 2) >> 2] | 0;
    if (i47 >>> 0 <= i46 >>> 0) {
     break;
    }
    i34 = HEAP32[(HEAP32[i41 + (i46 << 2) >> 2] | 0) + 40 >> 2] | 0;
    if ((i34 | 0) != 0) {
     i41 = i34 + 4 | 0;
     HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 1;
    }
    i41 = i40 + 40 | 0;
    i37 = HEAP32[i41 >> 2] | 0;
    HEAP32[i41 >> 2] = i34;
    do {
     if ((i37 | 0) != 0) {
      i34 = i37 + 4 | 0;
      i41 = i34 | 0;
      i38 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
      if ((i38 | 0) != 0) {
       HEAP32[i41 >> 2] = i38;
       break;
      }
      i38 = i34 - 4 | 0;
      if ((i38 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] & 1](i38);
     }
    } while (0);
    i37 = i40 + 45 | 0;
    HEAP8[i37] = HEAP8[i37] | 64;
    i37 = i45 + 1 | 0;
    i35 = HEAP32[i3 >> 2] | 0;
    if (i37 >>> 0 >= i35 >>> 0) {
     i44 = i35;
     break L90;
    }
    i45 = i37;
    i46 = i46 + 1 | 0;
    i47 = i35;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i47 = 0;
 while (1) {
  i48 = i47 >>> 0 < i44 >>> 0;
  if (!i48) {
   i7 = 87;
   break;
  }
  if ((HEAP8[(HEAP32[(HEAP32[i2 >> 2] | 0) + (i47 << 2) >> 2] | 0) + 45 | 0] & 32) == 0) {
   break;
  } else {
   i47 = i47 + 1 | 0;
  }
 }
 if ((i7 | 0) == 87) {
  return;
 }
 if (i48 & (i47 | 0) != 0) {
  i49 = i47;
  i50 = 0;
  i51 = i44;
 } else {
  return;
 }
 while (1) {
  i44 = HEAP32[i2 >> 2] | 0;
  i47 = HEAP32[i44 + (i49 << 2) >> 2] | 0;
  if (i51 >>> 0 <= i50 >>> 0) {
   i7 = 83;
   break;
  }
  HEAP32[i47 + 8 >> 2] = HEAP32[(HEAP32[i44 + (i50 << 2) >> 2] | 0) + 8 >> 2];
  i44 = i47 + 45 | 0;
  HEAP8[i44] = HEAP8[i44] | 32;
  i44 = i49 + 1 | 0;
  i47 = HEAP32[i3 >> 2] | 0;
  if (i44 >>> 0 >= i47 >>> 0) {
   i7 = 89;
   break;
  }
  i49 = i44;
  i50 = i50 + 1 | 0;
  i51 = i47;
 }
 if ((i7 | 0) == 83) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i7 | 0) == 89) {
  return;
 }
}
function __ZN7WebCore13AnimationListC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 | 0;
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 i1 = i2 + 8 | 0;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  return;
 }
 i7 = i2 | 0;
 i2 = 0;
 while (1) {
  i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i2 << 2) >> 2] | 0;
  i9 = __ZN3WTF10fastMallocEj(48) | 0;
  __ZN7WebCore9AnimationC1ERKS0_(i9, i8);
  i8 = HEAP32[i6 >> 2] | 0;
  if ((i8 | 0) == (HEAP32[i5 >> 2] | 0)) {
   __ZN3WTF6VectorINS_6RefPtrIN7WebCore9AnimationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i8 + 1 | 0);
   HEAP32[(HEAP32[i4 >> 2] | 0) + (HEAP32[i6 >> 2] << 2) >> 2] = i9;
  } else {
   HEAP32[(HEAP32[i4 >> 2] | 0) + (i8 << 2) >> 2] = i9;
  }
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  i2 = i2 + 1 | 0;
  if (i2 >>> 0 >= (HEAP32[i1 >> 2] | 0) >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore13AnimationListC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 | 0;
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 i1 = i2 + 8 | 0;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  return;
 }
 i7 = i2 | 0;
 i2 = 0;
 while (1) {
  i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i2 << 2) >> 2] | 0;
  i9 = __ZN3WTF10fastMallocEj(48) | 0;
  __ZN7WebCore9AnimationC1ERKS0_(i9, i8);
  i8 = HEAP32[i6 >> 2] | 0;
  if ((i8 | 0) == (HEAP32[i5 >> 2] | 0)) {
   __ZN3WTF6VectorINS_6RefPtrIN7WebCore9AnimationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i8 + 1 | 0);
   HEAP32[(HEAP32[i4 >> 2] | 0) + (HEAP32[i6 >> 2] << 2) >> 2] = i9;
  } else {
   HEAP32[(HEAP32[i4 >> 2] | 0) + (i8 << 2) >> 2] = i9;
  }
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  i2 = i2 + 1 | 0;
  if (i2 >>> 0 >= (HEAP32[i1 >> 2] | 0) >>> 0) {
   break;
  }
 }
 return;
}
function __ZNK7WebCore13AnimationListeqERKS0_(i1, i2) {
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
 i8 = i4;
 while (1) {
  if (i2 >>> 0 >= i8 >>> 0) {
   i6 = 1;
   i9 = 11;
   break;
  }
  if ((HEAP32[i5 >> 2] | 0) >>> 0 <= i2 >>> 0) {
   i9 = 5;
   break;
  }
  if (!(__ZNK7WebCore9Animation15animationsMatchEPKS0_b(HEAP32[(HEAP32[i7 >> 2] | 0) + (i2 << 2) >> 2] | 0, HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 << 2) >> 2] | 0, 1) | 0)) {
   i6 = 0;
   i9 = 9;
   break;
  }
  i2 = i2 + 1 | 0;
  i8 = HEAP32[i3 >> 2] | 0;
 }
 if ((i9 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i9 | 0) == 9) {
  return i6 | 0;
 } else if ((i9 | 0) == 11) {
  return i6 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore9AnimationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore13AnimationListC2ERKS0_,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN3WTF15CrashOnOverflow10overflowedEv","_memset","__ZN7WebCore13AnimationList19fillUnsetPropertiesEv","__ZNK7WebCore13AnimationListeqERKS0_","_memcpy","__ZN3WTF6VectorINS_6RefPtrIN7WebCore9AnimationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore13AnimationListC2ERKS0_"]

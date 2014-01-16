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
var __ZN7WebCore9FillLayerC1ENS_14EFillLayerTypeE;
var __ZN7WebCore9FillLayerC1ERKS0_;
var __ZN7WebCore9FillLayerD1Ev;
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
function __ZN7WebCore9FillLayer19fillUnsetPropertiesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0;
 i2 = (i1 | 0) != 0;
 if (i2) {
  i3 = i1;
 } else {
  return;
 }
 while (1) {
  if ((HEAP32[i3 + 40 >> 2] & 1073741824 | 0) == 0) {
   i4 = 5;
   break;
  }
  i5 = HEAP32[i3 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  } else {
   i3 = i5;
  }
 }
 do {
  if ((i4 | 0) == 5) {
   if ((i3 | 0) == (i1 | 0) | (i3 | 0) == 0) {
    break;
   } else {
    i6 = i3;
    i7 = i1;
   }
   while (1) {
    i5 = i6 + 8 | 0;
    i8 = i7 + 8 | 0;
    i9 = i5;
    i10 = HEAP32[i8 >> 2] | 0;
    i11 = HEAP32[i8 + 4 >> 2] | 0;
    HEAP32[i9 >> 2] = i10;
    HEAP32[i9 + 4 >> 2] = i11;
    if ((i10 & 0 | 0) == 0 & (i11 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
    }
    i5 = i7 + 44 | 0;
    i11 = HEAP32[i5 >> 2] | 0;
    if ((i11 & 1 | 0) != 0) {
     i10 = i6 + 44 | 0;
     i9 = HEAP32[i10 >> 2] & -7 | i11 & 6;
     HEAP32[i10 >> 2] = i9;
     HEAP32[i10 >> 2] = i9 & -25 | HEAP32[i5 >> 2] & 24;
    }
    i5 = HEAP32[i7 >> 2] | 0;
    i7 = (i5 | 0) != (i6 | 0) & (i5 | 0) != 0 ? i5 : i1;
    i6 = HEAP32[i6 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 if (i2) {
  i12 = i1;
 } else {
  return;
 }
 while (1) {
  if ((HEAP32[i12 + 40 >> 2] | 0) >= 0) {
   i4 = 14;
   break;
  }
  i6 = HEAP32[i12 >> 2] | 0;
  if ((i6 | 0) == 0) {
   break;
  } else {
   i12 = i6;
  }
 }
 do {
  if ((i4 | 0) == 14) {
   if ((i12 | 0) == (i1 | 0) | (i12 | 0) == 0) {
    break;
   } else {
    i13 = i12;
    i14 = i1;
   }
   while (1) {
    i6 = i13 + 16 | 0;
    i7 = i14 + 16 | 0;
    i3 = i6;
    i5 = HEAP32[i7 >> 2] | 0;
    i9 = HEAP32[i7 + 4 >> 2] | 0;
    HEAP32[i3 >> 2] = i5;
    HEAP32[i3 + 4 >> 2] = i9;
    if ((i5 & 0 | 0) == 0 & (i9 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i6);
    }
    i6 = i14 + 44 | 0;
    i9 = HEAP32[i6 >> 2] | 0;
    if ((i9 & 1 | 0) != 0) {
     i5 = i13 + 44 | 0;
     i3 = HEAP32[i5 >> 2] & -7 | i9 & 6;
     HEAP32[i5 >> 2] = i3;
     HEAP32[i5 >> 2] = i3 & -25 | HEAP32[i6 >> 2] & 24;
    }
    i6 = HEAP32[i14 >> 2] | 0;
    i14 = (i6 | 0) != (i13 | 0) & (i6 | 0) != 0 ? i6 : i1;
    i13 = HEAP32[i13 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 if (i2) {
  i15 = i1;
 } else {
  return;
 }
 while (1) {
  i16 = HEAP32[i15 + 40 >> 2] | 0;
  if ((i16 & 33554432 | 0) == 0) {
   i4 = 23;
   break;
  }
  i13 = HEAP32[i15 >> 2] | 0;
  if ((i13 | 0) == 0) {
   break;
  } else {
   i15 = i13;
  }
 }
 L38 : do {
  if ((i4 | 0) == 23) {
   if ((i15 | 0) == (i1 | 0) | (i15 | 0) == 0) {
    break;
   } else {
    i17 = i15;
    i18 = i1;
    i19 = i16;
   }
   while (1) {
    HEAP32[i17 + 40 >> 2] = i19 & -4 | HEAP32[i18 + 40 >> 2] & 3;
    i13 = HEAP32[i18 >> 2] | 0;
    i14 = HEAP32[i17 >> 2] | 0;
    if ((i14 | 0) == 0) {
     break L38;
    }
    i12 = (i13 | 0) != (i17 | 0) & (i13 | 0) != 0 ? i13 : i1;
    i17 = i14;
    i18 = i12;
    i19 = HEAP32[i14 + 40 >> 2] | 0;
   }
  }
 } while (0);
 if (i2) {
  i20 = i1;
 } else {
  return;
 }
 while (1) {
  i21 = HEAP32[i20 + 40 >> 2] | 0;
  if ((i21 & 67108864 | 0) == 0) {
   i4 = 29;
   break;
  }
  i19 = HEAP32[i20 >> 2] | 0;
  if ((i19 | 0) == 0) {
   break;
  } else {
   i20 = i19;
  }
 }
 L49 : do {
  if ((i4 | 0) == 29) {
   if ((i20 | 0) == (i1 | 0) | (i20 | 0) == 0) {
    break;
   } else {
    i22 = i20;
    i23 = i1;
    i24 = i21;
   }
   while (1) {
    HEAP32[i22 + 40 >> 2] = i24 & -13 | HEAP32[i23 + 40 >> 2] & 12;
    i19 = HEAP32[i23 >> 2] | 0;
    i18 = HEAP32[i22 >> 2] | 0;
    if ((i18 | 0) == 0) {
     break L49;
    }
    i17 = (i19 | 0) != (i22 | 0) & (i19 | 0) != 0 ? i19 : i1;
    i22 = i18;
    i23 = i17;
    i24 = HEAP32[i18 + 40 >> 2] | 0;
   }
  }
 } while (0);
 if (i2) {
  i25 = i1;
 } else {
  return;
 }
 while (1) {
  if ((HEAP32[i25 + 44 >> 2] & 32 | 0) == 0) {
   i4 = 35;
   break;
  }
  i24 = HEAP32[i25 >> 2] | 0;
  if ((i24 | 0) == 0) {
   break;
  } else {
   i25 = i24;
  }
 }
 do {
  if ((i4 | 0) == 35) {
   if ((i25 | 0) == (i1 | 0) | (i25 | 0) == 0) {
    break;
   } else {
    i26 = i25;
    i27 = i1;
   }
   while (1) {
    i24 = i26 + 40 | 0;
    HEAP32[i24 >> 2] = HEAP32[i24 >> 2] & -61441 | HEAP32[i27 + 40 >> 2] & 61440;
    i24 = HEAP32[i27 >> 2] | 0;
    i27 = (i24 | 0) != (i26 | 0) & (i24 | 0) != 0 ? i24 : i1;
    i26 = HEAP32[i26 >> 2] | 0;
    if ((i26 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 if (i2) {
  i28 = i1;
 } else {
  return;
 }
 while (1) {
  if ((HEAP32[i28 + 44 >> 2] & 64 | 0) == 0) {
   i4 = 40;
   break;
  }
  i26 = HEAP32[i28 >> 2] | 0;
  if ((i26 | 0) == 0) {
   break;
  } else {
   i28 = i26;
  }
 }
 do {
  if ((i4 | 0) == 40) {
   if ((i28 | 0) == (i1 | 0) | (i28 | 0) == 0) {
    break;
   } else {
    i29 = i28;
    i30 = i1;
   }
   while (1) {
    i26 = i29 + 40 | 0;
    HEAP32[i26 >> 2] = HEAP32[i26 >> 2] & -8126465 | HEAP32[i30 + 40 >> 2] & 8126464;
    i26 = HEAP32[i30 >> 2] | 0;
    i30 = (i26 | 0) != (i29 | 0) & (i26 | 0) != 0 ? i26 : i1;
    i29 = HEAP32[i29 >> 2] | 0;
    if ((i29 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 if (i2) {
  i31 = i1;
 } else {
  return;
 }
 while (1) {
  i32 = HEAP32[i31 + 40 >> 2] | 0;
  if ((i32 & 134217728 | 0) == 0) {
   i4 = 45;
   break;
  }
  i29 = HEAP32[i31 >> 2] | 0;
  if ((i29 | 0) == 0) {
   break;
  } else {
   i31 = i29;
  }
 }
 L80 : do {
  if ((i4 | 0) == 45) {
   if ((i31 | 0) == (i1 | 0) | (i31 | 0) == 0) {
    break;
   } else {
    i33 = i31;
    i34 = i1;
    i35 = i32;
   }
   while (1) {
    HEAP32[i33 + 40 >> 2] = i35 & -49 | HEAP32[i34 + 40 >> 2] & 48;
    i29 = HEAP32[i34 >> 2] | 0;
    i30 = HEAP32[i33 >> 2] | 0;
    if ((i30 | 0) == 0) {
     break L80;
    }
    i28 = (i29 | 0) != (i33 | 0) & (i29 | 0) != 0 ? i29 : i1;
    i33 = i30;
    i34 = i28;
    i35 = HEAP32[i30 + 40 >> 2] | 0;
   }
  }
 } while (0);
 if (i2) {
  i36 = i1;
 } else {
  return;
 }
 while (1) {
  i37 = HEAP32[i36 + 40 >> 2] | 0;
  if ((i37 & 268435456 | 0) == 0) {
   i4 = 51;
   break;
  }
  i35 = HEAP32[i36 >> 2] | 0;
  if ((i35 | 0) == 0) {
   break;
  } else {
   i36 = i35;
  }
 }
 L91 : do {
  if ((i4 | 0) == 51) {
   if ((i36 | 0) == (i1 | 0) | (i36 | 0) == 0) {
    break;
   } else {
    i38 = i36;
    i39 = i1;
    i40 = i37;
   }
   while (1) {
    HEAP32[i38 + 40 >> 2] = i40 & -449 | HEAP32[i39 + 40 >> 2] & 448;
    i35 = HEAP32[i39 >> 2] | 0;
    i34 = HEAP32[i38 >> 2] | 0;
    if ((i34 | 0) == 0) {
     break L91;
    }
    i33 = (i35 | 0) != (i38 | 0) & (i35 | 0) != 0 ? i35 : i1;
    i38 = i34;
    i39 = i33;
    i40 = HEAP32[i34 + 40 >> 2] | 0;
   }
  }
 } while (0);
 if (i2) {
  i41 = i1;
 } else {
  return;
 }
 while (1) {
  i42 = HEAP32[i41 + 40 >> 2] | 0;
  if ((i42 & 536870912 | 0) == 0) {
   i4 = 57;
   break;
  }
  i40 = HEAP32[i41 >> 2] | 0;
  if ((i40 | 0) == 0) {
   break;
  } else {
   i41 = i40;
  }
 }
 L102 : do {
  if ((i4 | 0) == 57) {
   if ((i41 | 0) == (i1 | 0) | (i41 | 0) == 0) {
    break;
   } else {
    i43 = i41;
    i44 = i1;
    i45 = i42;
   }
   while (1) {
    HEAP32[i43 + 40 >> 2] = i45 & -3585 | HEAP32[i44 + 40 >> 2] & 3584;
    i40 = HEAP32[i44 >> 2] | 0;
    i39 = HEAP32[i43 >> 2] | 0;
    if ((i39 | 0) == 0) {
     break L102;
    }
    i38 = (i40 | 0) != (i43 | 0) & (i40 | 0) != 0 ? i40 : i1;
    i43 = i39;
    i44 = i38;
    i45 = HEAP32[i39 + 40 >> 2] | 0;
   }
  }
 } while (0);
 if (i2) {
  i46 = i1;
 } else {
  return;
 }
 while (1) {
  i47 = HEAP32[i46 + 40 >> 2] | 0;
  if ((i47 & 196608 | 0) == 196608) {
   break;
  }
  i2 = HEAP32[i46 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i4 = 80;
   break;
  } else {
   i46 = i2;
  }
 }
 if ((i4 | 0) == 80) {
  return;
 }
 if ((i46 | 0) == (i1 | 0) | (i46 | 0) == 0) {
  return;
 } else {
  i48 = i46;
  i49 = i1;
  i50 = i47;
 }
 while (1) {
  HEAP32[i48 + 40 >> 2] = i50 & -196609 | HEAP32[i49 + 40 >> 2] & 196608;
  i47 = i48 + 24 | 0;
  i46 = i49 + 24 | 0;
  i4 = i47;
  i2 = HEAP32[i46 >> 2] | 0;
  i45 = HEAP32[i46 + 4 >> 2] | 0;
  HEAP32[i4 >> 2] = i2;
  HEAP32[i4 + 4 >> 2] = i45;
  if ((i2 & 0 | 0) == 0 & (i45 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i47 | 0);
  }
  i47 = i48 + 32 | 0;
  i45 = i49 + 32 | 0;
  i2 = i47;
  i4 = HEAP32[i45 >> 2] | 0;
  i46 = HEAP32[i45 + 4 >> 2] | 0;
  HEAP32[i2 >> 2] = i4;
  HEAP32[i2 + 4 >> 2] = i46;
  if ((i4 & 0 | 0) == 0 & (i46 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i47);
  }
  i47 = HEAP32[i49 >> 2] | 0;
  i46 = HEAP32[i48 >> 2] | 0;
  if ((i46 | 0) == 0) {
   break;
  }
  i4 = (i47 | 0) != (i48 | 0) & (i47 | 0) != 0 ? i47 : i1;
  i48 = i46;
  i49 = i4;
  i50 = HEAP32[i46 + 40 >> 2] | 0;
 }
 return;
}
function __ZN7WebCore9FillLayeraSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) != (i6 | 0)) {
  if ((i4 | 0) == 0) {
   i7 = i6;
  } else {
   __ZN7WebCore9FillLayerD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
   i7 = HEAP32[i5 >> 2] | 0;
  }
  if ((i7 | 0) == 0) {
   i8 = 0;
  } else {
   i7 = __ZN3WTF10fastMallocEj(48) | 0;
   __ZN7WebCore9FillLayerC2ERKS0_(i7, HEAP32[i5 >> 2] | 0);
   i8 = i7;
  }
  HEAP32[i3 >> 2] = i8;
 }
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i3 = i8 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = i1 + 4 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i8;
 do {
  if ((i7 | 0) != 0) {
   i8 = i7 + 4 | 0;
   i3 = i8 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i3 >> 2] = i5;
    break;
   }
   i5 = i8 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
  }
 } while (0);
 i7 = i1 + 8 | 0;
 i5 = i2 + 8 | 0;
 i8 = i7;
 i3 = HEAP32[i5 >> 2] | 0;
 i4 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = i3;
 HEAP32[i8 + 4 >> 2] = i4;
 if ((i3 & 0 | 0) == 0 & (i4 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
 }
 i7 = i1 + 16 | 0;
 i4 = i2 + 16 | 0;
 i3 = i7;
 i8 = HEAP32[i4 >> 2] | 0;
 i5 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = i8;
 HEAP32[i3 + 4 >> 2] = i5;
 if ((i8 & 0 | 0) == 0 & (i5 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
 }
 i7 = i2 + 44 | 0;
 i5 = i1 + 44 | 0;
 i8 = HEAP32[i5 >> 2] & -7 | HEAP32[i7 >> 2] & 6;
 HEAP32[i5 >> 2] = i8;
 i3 = i8 & -25 | HEAP32[i7 >> 2] & 24;
 HEAP32[i5 >> 2] = i3;
 HEAP32[i5 >> 2] = i3 & -2 | HEAP32[i7 >> 2] & 1;
 i3 = i1 + 24 | 0;
 i8 = i2 + 24 | 0;
 i4 = i3;
 i6 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = i9;
 if ((i6 & 0 | 0) == 0 & (i9 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i3 | 0);
 }
 i3 = i1 + 32 | 0;
 i9 = i2 + 32 | 0;
 i6 = i3;
 i4 = HEAP32[i9 >> 2] | 0;
 i8 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i4;
 HEAP32[i6 + 4 >> 2] = i8;
 if ((i4 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i3);
 }
 i3 = i2 + 40 | 0;
 i2 = i1 + 40 | 0;
 i8 = HEAP32[i2 >> 2] & -4 | HEAP32[i3 >> 2] & 3;
 HEAP32[i2 >> 2] = i8;
 i4 = i8 & -13 | HEAP32[i3 >> 2] & 12;
 HEAP32[i2 >> 2] = i4;
 i8 = i4 & -61441 | HEAP32[i3 >> 2] & 61440;
 HEAP32[i2 >> 2] = i8;
 i4 = i8 & -8126465 | HEAP32[i3 >> 2] & 8126464;
 HEAP32[i2 >> 2] = i4;
 i8 = i4 & -49 | HEAP32[i3 >> 2] & 48;
 HEAP32[i2 >> 2] = i8;
 i4 = i8 & -449 | HEAP32[i3 >> 2] & 448;
 HEAP32[i2 >> 2] = i4;
 i8 = i4 & -3585 | HEAP32[i3 >> 2] & 3584;
 HEAP32[i2 >> 2] = i8;
 i4 = i8 & -196609 | HEAP32[i3 >> 2] & 196608;
 HEAP32[i2 >> 2] = i4;
 i8 = i4 & -8388609 | HEAP32[i3 >> 2] & 8388608;
 HEAP32[i2 >> 2] = i8;
 i4 = i8 & -16777217 | HEAP32[i3 >> 2] & 16777216;
 HEAP32[i2 >> 2] = i4;
 i8 = i4 & -33554433 | HEAP32[i3 >> 2] & 33554432;
 HEAP32[i2 >> 2] = i8;
 i4 = i8 & -67108865 | HEAP32[i3 >> 2] & 67108864;
 HEAP32[i2 >> 2] = i4;
 i8 = HEAP32[i5 >> 2] & -33 | HEAP32[i7 >> 2] & 32;
 HEAP32[i5 >> 2] = i8;
 i6 = i8 & -65 | HEAP32[i7 >> 2] & 64;
 HEAP32[i5 >> 2] = i6;
 i8 = i4 & -134217729 | HEAP32[i3 >> 2] & 134217728;
 HEAP32[i2 >> 2] = i8;
 i4 = i8 & -268435457 | HEAP32[i3 >> 2] & 268435456;
 HEAP32[i2 >> 2] = i4;
 i8 = i4 & -536870913 | HEAP32[i3 >> 2] & 536870912;
 HEAP32[i2 >> 2] = i8;
 i4 = i8 & -1073741825 | HEAP32[i3 >> 2] & 1073741824;
 HEAP32[i2 >> 2] = i4;
 HEAP32[i2 >> 2] = i4 & 2147483647 | HEAP32[i3 >> 2] & -2147483648;
 i3 = i6 & -129 | HEAP32[i7 >> 2] & 128;
 HEAP32[i5 >> 2] = i3;
 HEAP32[i5 >> 2] = i3 & -257 | HEAP32[i7 >> 2] & 256;
 return i1 | 0;
}
function __ZNK7WebCore9FillLayereqERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, i12 = 0, i13 = 0;
 i3 = i2;
 i2 = i1;
 L1 : while (1) {
  i1 = HEAP32[i2 + 4 >> 2] | 0;
  i4 = HEAP32[i3 + 4 >> 2] | 0;
  if ((i1 | 0) != (i4 | 0)) {
   if ((i1 | 0) == 0 | (i4 | 0) == 0) {
    i5 = 0;
    i6 = 35;
    break;
   }
   i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] & 1](i1) | 0;
   if ((i7 | 0) != (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] & 1](i4) | 0)) {
    i5 = 0;
    i6 = 36;
    break;
   }
  }
  i4 = i2 + 8 | 0;
  i7 = i3 + 8 | 0;
  i1 = HEAP8[i2 + 13 | 0] | 0;
  if (i1 << 24 >> 24 != (HEAP8[i3 + 13 | 0] | 0)) {
   i5 = 0;
   i6 = 37;
   break;
  }
  if (((HEAP8[i3 + 12 | 0] ^ HEAP8[i2 + 12 | 0]) & 1) != 0) {
   i5 = 0;
   i6 = 38;
   break;
  }
  do {
   if (i1 << 24 >> 24 != 15) {
    if ((HEAP8[i2 + 14 | 0] & 1) == 0) {
     d8 = +(HEAP32[i4 >> 2] | 0);
    } else {
     d8 = +HEAPF32[i4 >> 2];
    }
    if ((HEAP8[i3 + 14 | 0] & 1) == 0) {
     d9 = +(HEAP32[i7 >> 2] | 0);
    } else {
     d9 = +HEAPF32[i7 >> 2];
    }
    if (d8 == d9) {
     break;
    }
    if (!(__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i4, i7) | 0)) {
     i5 = 0;
     i6 = 39;
     break L1;
    }
   }
  } while (0);
  i7 = i2 + 16 | 0;
  i4 = i3 + 16 | 0;
  i1 = HEAP8[i2 + 21 | 0] | 0;
  if (i1 << 24 >> 24 != (HEAP8[i3 + 21 | 0] | 0)) {
   i5 = 0;
   i6 = 40;
   break;
  }
  if (((HEAP8[i3 + 20 | 0] ^ HEAP8[i2 + 20 | 0]) & 1) != 0) {
   i5 = 0;
   i6 = 41;
   break;
  }
  do {
   if (i1 << 24 >> 24 != 15) {
    if ((HEAP8[i2 + 22 | 0] & 1) == 0) {
     d10 = +(HEAP32[i7 >> 2] | 0);
    } else {
     d10 = +HEAPF32[i7 >> 2];
    }
    if ((HEAP8[i3 + 22 | 0] & 1) == 0) {
     d11 = +(HEAP32[i4 >> 2] | 0);
    } else {
     d11 = +HEAPF32[i4 >> 2];
    }
    if (d10 == d11) {
     break;
    }
    if (!(__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i7, i4) | 0)) {
     i5 = 0;
     i6 = 42;
     break L1;
    }
   }
  } while (0);
  i4 = i2 + 44 | 0;
  i7 = i3 + 44 | 0;
  if (((HEAP32[i7 >> 2] ^ HEAP32[i4 >> 2]) & 30 | 0) != 0) {
   i5 = 0;
   i6 = 43;
   break;
  }
  if (((HEAP32[i3 + 40 >> 2] ^ HEAP32[i2 + 40 >> 2]) & 16777215 | 0) != 0) {
   i5 = 0;
   i6 = 44;
   break;
  }
  if (!(__ZNK7WebCore10LengthSizeeqERKS0_(i2 + 24 | 0, i3 + 24 | 0) | 0)) {
   i5 = 0;
   i6 = 45;
   break;
  }
  if (((HEAP32[i7 >> 2] ^ HEAP32[i4 >> 2]) & 256 | 0) != 0) {
   i5 = 0;
   i6 = 46;
   break;
  }
  i12 = HEAP32[i2 >> 2] | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  if ((i12 | 0) == 0) {
   i13 = i4;
   i6 = 33;
   break;
  }
  if ((i4 | 0) == 0) {
   i13 = 0;
   i6 = 33;
   break;
  } else {
   i3 = i4;
   i2 = i12;
  }
 }
 if ((i6 | 0) == 33) {
  i5 = (i12 | 0) == (i13 | 0);
  return i5 | 0;
 } else if ((i6 | 0) == 35) {
  return i5 | 0;
 } else if ((i6 | 0) == 36) {
  return i5 | 0;
 } else if ((i6 | 0) == 37) {
  return i5 | 0;
 } else if ((i6 | 0) == 38) {
  return i5 | 0;
 } else if ((i6 | 0) == 39) {
  return i5 | 0;
 } else if ((i6 | 0) == 40) {
  return i5 | 0;
 } else if ((i6 | 0) == 41) {
  return i5 | 0;
 } else if ((i6 | 0) == 42) {
  return i5 | 0;
 } else if ((i6 | 0) == 43) {
  return i5 | 0;
 } else if ((i6 | 0) == 44) {
  return i5 | 0;
 } else if ((i6 | 0) == 45) {
  return i5 | 0;
 } else if ((i6 | 0) == 46) {
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCore9FillLayerC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i2 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  i4 = 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(48) | 0;
  __ZN7WebCore9FillLayerC2ERKS0_(i5, HEAP32[i3 >> 2] | 0);
  i4 = i5;
 }
 HEAP32[i1 >> 2] = i4;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = i1 + 8 | 0;
 i4 = i2 + 8 | 0;
 i3 = i5;
 i6 = HEAP32[i4 >> 2] | 0;
 i7 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = i6;
 HEAP32[i3 + 4 >> 2] = i7;
 if ((i6 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 i5 = i1 + 16 | 0;
 i7 = i2 + 16 | 0;
 i6 = i5;
 i3 = HEAP32[i7 >> 2] | 0;
 i4 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i3;
 HEAP32[i6 + 4 >> 2] = i4;
 if ((i3 & 0 | 0) == 0 & (i4 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 i5 = i1 + 24 | 0;
 i4 = i2 + 24 | 0;
 i3 = i5;
 i6 = HEAP32[i4 >> 2] | 0;
 i7 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = i6;
 HEAP32[i3 + 4 >> 2] = i7;
 if ((i6 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5 | 0);
 }
 i5 = i1 + 32 | 0;
 i7 = i2 + 32 | 0;
 i6 = i5;
 i3 = HEAP32[i7 >> 2] | 0;
 i4 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i3;
 HEAP32[i6 + 4 >> 2] = i4;
 if ((i3 & 0 | 0) == 0 & (i4 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 i5 = i2 + 40 | 0;
 i4 = i1 + 40 | 0;
 i3 = HEAP32[i4 >> 2] & -4 | HEAP32[i5 >> 2] & 3;
 HEAP32[i4 >> 2] = i3;
 i6 = i3 & -13 | HEAP32[i5 >> 2] & 12;
 HEAP32[i4 >> 2] = i6;
 i3 = i6 & -49 | HEAP32[i5 >> 2] & 48;
 HEAP32[i4 >> 2] = i3;
 i6 = i3 & -449 | HEAP32[i5 >> 2] & 448;
 HEAP32[i4 >> 2] = i6;
 i3 = i6 & -3585 | HEAP32[i5 >> 2] & 3584;
 HEAP32[i4 >> 2] = i3;
 i6 = i3 & -61441 | HEAP32[i5 >> 2] & 61440;
 HEAP32[i4 >> 2] = i6;
 i3 = i6 & -196609 | HEAP32[i5 >> 2] & 196608;
 HEAP32[i4 >> 2] = i3;
 i6 = i3 & -8126465 | HEAP32[i5 >> 2] & 8126464;
 HEAP32[i4 >> 2] = i6;
 i3 = i6 & -8388609 | HEAP32[i5 >> 2] & 8388608;
 HEAP32[i4 >> 2] = i3;
 i6 = i3 & -16777217 | HEAP32[i5 >> 2] & 16777216;
 HEAP32[i4 >> 2] = i6;
 i3 = i6 & -33554433 | HEAP32[i5 >> 2] & 33554432;
 HEAP32[i4 >> 2] = i3;
 i6 = i3 & -67108865 | HEAP32[i5 >> 2] & 67108864;
 HEAP32[i4 >> 2] = i6;
 i3 = i6 & -134217729 | HEAP32[i5 >> 2] & 134217728;
 HEAP32[i4 >> 2] = i3;
 i6 = i3 & -268435457 | HEAP32[i5 >> 2] & 268435456;
 HEAP32[i4 >> 2] = i6;
 i3 = i6 & -536870913 | HEAP32[i5 >> 2] & 536870912;
 HEAP32[i4 >> 2] = i3;
 i6 = i3 & -1073741825 | HEAP32[i5 >> 2] & 1073741824;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 >> 2] = i6 & 2147483647 | HEAP32[i5 >> 2] & -2147483648;
 i5 = i2 + 44 | 0;
 i2 = i1 + 44 | 0;
 i1 = HEAP32[i2 >> 2] & -2 | HEAP32[i5 >> 2] & 1;
 HEAP32[i2 >> 2] = i1;
 i6 = i1 & -7 | HEAP32[i5 >> 2] & 6;
 HEAP32[i2 >> 2] = i6;
 i1 = i6 & -25 | HEAP32[i5 >> 2] & 24;
 HEAP32[i2 >> 2] = i1;
 i6 = i1 & -33 | HEAP32[i5 >> 2] & 32;
 HEAP32[i2 >> 2] = i6;
 i1 = i6 & -65 | HEAP32[i5 >> 2] & 64;
 HEAP32[i2 >> 2] = i1;
 i6 = i1 & -129 | HEAP32[i5 >> 2] & 128;
 HEAP32[i2 >> 2] = i6;
 HEAP32[i2 >> 2] = i6 & -257 | HEAP32[i5 >> 2] & 256;
 return;
}
function __ZN7WebCore9FillLayerC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i2 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  i4 = 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(48) | 0;
  __ZN7WebCore9FillLayerC2ERKS0_(i5, HEAP32[i3 >> 2] | 0);
  i4 = i5;
 }
 HEAP32[i1 >> 2] = i4;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = i1 + 8 | 0;
 i4 = i2 + 8 | 0;
 i3 = i5;
 i6 = HEAP32[i4 >> 2] | 0;
 i7 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = i6;
 HEAP32[i3 + 4 >> 2] = i7;
 if ((i6 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 i5 = i1 + 16 | 0;
 i7 = i2 + 16 | 0;
 i6 = i5;
 i3 = HEAP32[i7 >> 2] | 0;
 i4 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i3;
 HEAP32[i6 + 4 >> 2] = i4;
 if ((i3 & 0 | 0) == 0 & (i4 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 i5 = i1 + 24 | 0;
 i4 = i2 + 24 | 0;
 i3 = i5;
 i6 = HEAP32[i4 >> 2] | 0;
 i7 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = i6;
 HEAP32[i3 + 4 >> 2] = i7;
 if ((i6 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5 | 0);
 }
 i5 = i1 + 32 | 0;
 i7 = i2 + 32 | 0;
 i6 = i5;
 i3 = HEAP32[i7 >> 2] | 0;
 i4 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i3;
 HEAP32[i6 + 4 >> 2] = i4;
 if ((i3 & 0 | 0) == 0 & (i4 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 i5 = i2 + 40 | 0;
 i4 = i1 + 40 | 0;
 i3 = HEAP32[i4 >> 2] & -4 | HEAP32[i5 >> 2] & 3;
 HEAP32[i4 >> 2] = i3;
 i6 = i3 & -13 | HEAP32[i5 >> 2] & 12;
 HEAP32[i4 >> 2] = i6;
 i3 = i6 & -49 | HEAP32[i5 >> 2] & 48;
 HEAP32[i4 >> 2] = i3;
 i6 = i3 & -449 | HEAP32[i5 >> 2] & 448;
 HEAP32[i4 >> 2] = i6;
 i3 = i6 & -3585 | HEAP32[i5 >> 2] & 3584;
 HEAP32[i4 >> 2] = i3;
 i6 = i3 & -61441 | HEAP32[i5 >> 2] & 61440;
 HEAP32[i4 >> 2] = i6;
 i3 = i6 & -196609 | HEAP32[i5 >> 2] & 196608;
 HEAP32[i4 >> 2] = i3;
 i6 = i3 & -8126465 | HEAP32[i5 >> 2] & 8126464;
 HEAP32[i4 >> 2] = i6;
 i3 = i6 & -8388609 | HEAP32[i5 >> 2] & 8388608;
 HEAP32[i4 >> 2] = i3;
 i6 = i3 & -16777217 | HEAP32[i5 >> 2] & 16777216;
 HEAP32[i4 >> 2] = i6;
 i3 = i6 & -33554433 | HEAP32[i5 >> 2] & 33554432;
 HEAP32[i4 >> 2] = i3;
 i6 = i3 & -67108865 | HEAP32[i5 >> 2] & 67108864;
 HEAP32[i4 >> 2] = i6;
 i3 = i6 & -134217729 | HEAP32[i5 >> 2] & 134217728;
 HEAP32[i4 >> 2] = i3;
 i6 = i3 & -268435457 | HEAP32[i5 >> 2] & 268435456;
 HEAP32[i4 >> 2] = i6;
 i3 = i6 & -536870913 | HEAP32[i5 >> 2] & 536870912;
 HEAP32[i4 >> 2] = i3;
 i6 = i3 & -1073741825 | HEAP32[i5 >> 2] & 1073741824;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 >> 2] = i6 & 2147483647 | HEAP32[i5 >> 2] & -2147483648;
 i5 = i2 + 44 | 0;
 i2 = i1 + 44 | 0;
 i1 = HEAP32[i2 >> 2] & -2 | HEAP32[i5 >> 2] & 1;
 HEAP32[i2 >> 2] = i1;
 i6 = i1 & -7 | HEAP32[i5 >> 2] & 6;
 HEAP32[i2 >> 2] = i6;
 i1 = i6 & -25 | HEAP32[i5 >> 2] & 24;
 HEAP32[i2 >> 2] = i1;
 i6 = i1 & -33 | HEAP32[i5 >> 2] & 32;
 HEAP32[i2 >> 2] = i6;
 i1 = i6 & -65 | HEAP32[i5 >> 2] & 64;
 HEAP32[i2 >> 2] = i1;
 i6 = i1 & -129 | HEAP32[i5 >> 2] & 128;
 HEAP32[i2 >> 2] = i6;
 HEAP32[i2 >> 2] = i6 & -257 | HEAP32[i5 >> 2] & 256;
 return;
}
function __ZNK7WebCore10LengthSizeeqERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, d10 = +0;
 i3 = i1 | 0;
 i4 = i2 | 0;
 i5 = HEAP8[i1 + 5 | 0] | 0;
 if (i5 << 24 >> 24 != (HEAP8[i2 + 5 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if (((HEAP8[i2 + 4 | 0] ^ HEAP8[i1 + 4 | 0]) & 1) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 do {
  if (i5 << 24 >> 24 != 15) {
   if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
    d7 = +(HEAP32[i1 >> 2] | 0);
   } else {
    d7 = +HEAPF32[i1 >> 2];
   }
   if ((HEAP8[i2 + 6 | 0] & 1) == 0) {
    d8 = +(HEAP32[i2 >> 2] | 0);
   } else {
    d8 = +HEAPF32[i2 >> 2];
   }
   if (d7 == d8) {
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i3, i4) | 0) {
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  }
 } while (0);
 i4 = i1 + 8 | 0;
 i3 = i2 + 8 | 0;
 i5 = HEAP8[i1 + 13 | 0] | 0;
 if (i5 << 24 >> 24 != (HEAP8[i2 + 13 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if (((HEAP8[i2 + 12 | 0] ^ HEAP8[i1 + 12 | 0]) & 1) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 if (i5 << 24 >> 24 == 15) {
  i6 = 1;
  return i6 | 0;
 }
 if ((HEAP8[i1 + 14 | 0] & 1) == 0) {
  d9 = +(HEAP32[i4 >> 2] | 0);
 } else {
  d9 = +HEAPF32[i4 >> 2];
 }
 if ((HEAP8[i2 + 14 | 0] & 1) == 0) {
  d10 = +(HEAP32[i3 >> 2] | 0);
 } else {
  d10 = +HEAPF32[i3 >> 2];
 }
 if (d9 == d10) {
  i6 = 1;
  return i6 | 0;
 }
 i6 = __ZNK7WebCore6Length17isCalculatedEqualERKS0_(i4, i3) | 0;
 return i6 | 0;
}
function __ZN7WebCore9FillLayerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore9FillLayerD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 if ((HEAP8[i1 + 37 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 32 | 0);
 }
 if ((HEAP8[i1 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 24 | 0);
 }
 if ((HEAP8[i1 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 16 | 0);
 }
 if ((HEAP8[i1 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 8 | 0);
 }
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
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 3](i3);
 return;
}
function __ZN7WebCore9FillLayerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore9FillLayerD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 if ((HEAP8[i1 + 37 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 32 | 0);
 }
 if ((HEAP8[i1 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 24 | 0);
 }
 if ((HEAP8[i1 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 16 | 0);
 }
 if ((HEAP8[i1 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 8 | 0);
 }
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
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 3](i3);
 return;
}
function __ZNK7WebCore9FillLayer14computeClipMaxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i1 + 44 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i1 + 40 >> 2] | 0) >>> 2 << 9 & 1536 | HEAP32[i4 >> 2] & -1537;
  return;
 }
 __ZNK7WebCore9FillLayer14computeClipMaxEv(i3);
 i3 = (HEAP32[i1 + 40 >> 2] | 0) >>> 2 & 3;
 i4 = (HEAP32[(HEAP32[i2 >> 2] | 0) + 40 >> 2] | 0) >>> 2 & 3;
 do {
  if ((i3 | 0) == 0 | (i4 | 0) == 0) {
   i5 = 0;
  } else {
   if ((i3 | 0) == 1 | (i4 | 0) == 1) {
    i5 = 512;
    break;
   }
   i5 = (i3 | 0) == 2 | (i4 | 0) == 2 ? 1024 : 1536;
  }
 } while (0);
 i4 = i1 + 44 | 0;
 HEAP32[i4 >> 2] = HEAP32[i4 >> 2] & -1537 | i5;
 return;
}
function __ZNK7WebCore9FillLayer13containsImageEPNS_10StyleImageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i2;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 } else {
  i5 = i1;
 }
 while (1) {
  i1 = HEAP32[i5 + 4 >> 2] | 0;
  if ((i1 | 0) != 0) {
   i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 60 >> 2] & 1](i2) | 0;
   if ((i6 | 0) == (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] & 1](i1) | 0)) {
    i4 = 1;
    i7 = 6;
    break;
   }
  }
  i1 = HEAP32[i5 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i4 = 0;
   i7 = 7;
   break;
  } else {
   i5 = i1;
  }
 }
 if ((i7 | 0) == 7) {
  return i4 | 0;
 } else if ((i7 | 0) == 6) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore9FillLayerC2ENS_14EFillLayerTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 12 | 0] = 0;
 HEAP8[i1 + 13 | 0] = 2;
 HEAP8[i1 + 14 | 0] = 1;
 HEAPF32[i1 + 8 >> 2] = +0;
 HEAP8[i1 + 20 | 0] = 0;
 HEAP8[i1 + 21 | 0] = 2;
 HEAP8[i1 + 22 | 0] = 1;
 HEAPF32[i1 + 16 >> 2] = +0;
 _memset(i1 + 24 | 0, 0, 7) | 0;
 _memset(i1 + 32 | 0, 0, 7) | 0;
 HEAP32[i1 + 40 >> 2] = ((i2 | 0) == 0) << 4 | 204800;
 i3 = i1 + 44 | 0;
 HEAP32[i3 >> 2] = i2 << 8 & 256 | ((i2 | 0) == 1) << 5 | HEAP32[i3 >> 2] & -512 | 6;
 return;
}
function __ZN7WebCore9FillLayerC1ENS_14EFillLayerTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 12 | 0] = 0;
 HEAP8[i1 + 13 | 0] = 2;
 HEAP8[i1 + 14 | 0] = 1;
 HEAPF32[i1 + 8 >> 2] = +0;
 HEAP8[i1 + 20 | 0] = 0;
 HEAP8[i1 + 21 | 0] = 2;
 HEAP8[i1 + 22 | 0] = 1;
 HEAPF32[i1 + 16 >> 2] = +0;
 _memset(i1 + 24 | 0, 0, 7) | 0;
 _memset(i1 + 32 | 0, 0, 7) | 0;
 HEAP32[i1 + 40 >> 2] = ((i2 | 0) == 0) << 4 | 204800;
 i3 = i1 + 44 | 0;
 HEAP32[i3 >> 2] = i2 << 8 & 256 | ((i2 | 0) == 1) << 5 | HEAP32[i3 >> 2] & -512 | 6;
 return;
}
function __ZNK7WebCore9FillLayer15imagesAreLoadedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((i1 | 0) == 0) {
  i2 = 1;
  return i2 | 0;
 } else {
  i3 = i1;
 }
 while (1) {
  i1 = HEAP32[i3 + 4 >> 2] | 0;
  if ((i1 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 1](i1) | 0)) {
    i2 = 0;
    i4 = 7;
    break;
   }
  }
  i1 = HEAP32[i3 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i2 = 1;
   i4 = 8;
   break;
  } else {
   i3 = i1;
  }
 }
 if ((i4 | 0) == 7) {
  return i2 | 0;
 } else if ((i4 | 0) == 8) {
  return i2 | 0;
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
function __ZNK7WebCore9FillLayer14hasOpaqueImageEPKNS_13RenderElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 40 >> 2] | 0;
 i1 = i5 >>> 12 & 15;
 if (i1 >>> 0 < 2 >>> 0) {
  i4 = 1;
  return i4 | 0;
 }
 if (!((i5 & 8126464 | 0) == 0 & (i1 | 0) == 2)) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 68 >> 2] & 1](i3, i2) | 0;
 return i4 | 0;
}
function __ZN7WebCore9FillLayer15cullEmptyLayersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i2 = i1;
 }
 while (1) {
  i3 = i2 | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i4 = 6;
   break;
  }
  if ((HEAP32[i2 + 40 >> 2] & 16777216 | 0) == 0) {
   break;
  }
 }
 if ((i4 | 0) == 6) {
  return;
 }
 __ZN7WebCore9FillLayerD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 HEAP32[i3 >> 2] = 0;
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
function __ZNK7WebCore9FillLayer22clipOccludesNextLayersEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (i2) {
  __ZNK7WebCore9FillLayer14computeClipMaxEv(i1);
 }
 return (((HEAP32[i1 + 44 >> 2] | 0) >>> 9 ^ (HEAP32[i1 + 40 >> 2] | 0) >>> 2) & 3 | 0) == 0 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore9FillLayer11hasRepeatXYEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 & 448 | 0) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (i2 & 3584 | 0) == 0;
 return i3 | 0;
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
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore9FillLayerD2Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore9FillLayerC2ERKS0_,b1,__ZN7WebCore9FillLayerC2ENS_14EFillLayerTypeE,b1,b1,b1];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore9FillLayer22clipOccludesNextLayersEb","__ZNK7WebCore9FillLayer14computeClipMaxEv","__ZNK7WebCore9FillLayer15imagesAreLoadedEv","_memcpy","__ZNK7WebCore9FillLayer13containsImageEPNS_10StyleImageE","__ZN7WebCore9FillLayerD2Ev","__ZN7WebCore9FillLayerC2ENS_14EFillLayerTypeE","__ZN7WebCore9FillLayeraSERKS0_","__ZNK7WebCore10LengthSizeeqERKS0_","_memset","__ZN7WebCore9FillLayerC2ERKS0_","__ZN7WebCore9FillLayer19fillUnsetPropertiesEv","__ZNK7WebCore9FillLayer11hasRepeatXYEv","_strlen","__ZN7WebCore9FillLayer15cullEmptyLayersEv","__ZNK7WebCore9FillLayereqERKS0_","__ZNK7WebCore9FillLayer14hasOpaqueImageEPKNS_13RenderElementE"]

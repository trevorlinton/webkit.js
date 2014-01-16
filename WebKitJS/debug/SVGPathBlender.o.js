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
var __ZN7WebCore14SVGPathBlenderC1Ev;
/* no memory initializer */
;
;
;
;
;
;
var Math_min = Math.min;
function invoke_iiiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_iiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vifffiiii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  try {
    Module["dynCall_vifffiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
function invoke_vifi(index,a1,a2,a3) {
  try {
    Module["dynCall_vifi"](index,a1,a2,a3);
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
  var invoke_iiiiiiii=env.invoke_iiiiiiii;
  var invoke_vifffiiii=env.invoke_vifffiiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_vifi=env.invoke_vifi;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore14SVGPathBlender17blendAnimatedPathEfPNS_13SVGPathSourceES2_PNS_15SVGPathConsumerE(i1, d2, i3, i4, i5) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i1 | 0;
 HEAP32[i9 >> 2] = i3;
 i10 = i1 + 4 | 0;
 HEAP32[i10 >> 2] = i4;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i5;
 HEAP8[i1 + 44 | 0] = d2 < +.5 | 0;
 HEAPF32[i1 + 36 >> 2] = d2;
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 1](i3) | 0;
 i3 = i1 + 40 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] & 1](i11) | 0)) {
  i12 = 1;
  STACKTOP = i6;
  return i12 | 0;
 }
 i11 = i1 + 32 | 0;
 i13 = i1 + 28 | 0;
 L4 : while (1) {
  if (i5) {
   i14 = HEAP32[i9 >> 2] | 0;
   if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] & 1](i14, i7) | 0)) {
    i12 = 0;
    i15 = 45;
    break;
   }
  }
  i14 = HEAP32[i10 >> 2] | 0;
  if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] & 1](i14, i8) | 0)) {
   i12 = 0;
   i15 = 51;
   break;
  }
  i14 = HEAP32[i8 >> 2] | 0;
  i16 = (i14 | 0) < 2 ? 0 : i14 & 1;
  HEAP32[i11 >> 2] = i16;
  do {
   if (i5) {
    i17 = HEAP32[i7 >> 2] | 0;
    i18 = (i17 | 0) < 2 ? 0 : i17 & 1;
    HEAP32[i13 >> 2] = i18;
    if ((i18 | 0) == (i16 | 0)) {
     i19 = 1;
    } else {
     if ((HEAP32[i3 >> 2] | 0) != 0) {
      i12 = 0;
      i15 = 52;
      break L4;
     }
     if (i5) {
      i19 = 0;
     } else {
      break;
     }
    }
    i17 = HEAP32[i7 >> 2] | 0;
    if ((i17 | 0) == (i14 | 0) & i17 >>> 0 < 2 >>> 0) {
     break;
    }
    if (i19) {
     if (((i14 ^ i17) & 65535 | 0) == 0) {
      break;
     } else {
      i12 = 0;
      i15 = 35;
      break L4;
     }
    }
    if ((i18 | 0) == 0) {
     if ((i17 & 65535 | 0) == ((i14 & 65535) - 1 | 0)) {
      break;
     } else {
      i12 = 0;
      i15 = 34;
      break L4;
     }
    } else {
     if ((i14 & 65535 | 0) == ((i17 & 65535) - 1 | 0)) {
      break;
     } else {
      i12 = 0;
      i15 = 48;
      break L4;
     }
    }
   } else {
    HEAP32[i13 >> 2] = i16;
   }
  } while (0);
  switch (i14 | 0) {
  case 17:
  case 16:
   {
    if (!(__ZN7WebCore14SVGPathBlender30blendCurveToCubicSmoothSegmentEv(i1) | 0)) {
     i12 = 0;
     i15 = 40;
     break L4;
    }
    break;
   }
  case 9:
  case 8:
   {
    if (!(__ZN7WebCore14SVGPathBlender28blendCurveToQuadraticSegmentEv(i1) | 0)) {
     i12 = 0;
     i15 = 41;
     break L4;
    }
    break;
   }
  case 19:
  case 18:
   {
    if (!(__ZN7WebCore14SVGPathBlender34blendCurveToQuadraticSmoothSegmentEv(i1) | 0)) {
     i12 = 0;
     i15 = 42;
     break L4;
    }
    break;
   }
  case 11:
  case 10:
   {
    if (!(__ZN7WebCore14SVGPathBlender17blendArcToSegmentEv(i1) | 0)) {
     i12 = 0;
     i15 = 43;
     break L4;
    }
    break;
   }
  case 5:
  case 4:
   {
    if (!(__ZN7WebCore14SVGPathBlender18blendLineToSegmentEv(i1) | 0)) {
     i12 = 0;
     i15 = 46;
     break L4;
    }
    break;
   }
  case 13:
  case 12:
   {
    if (!(__ZN7WebCore14SVGPathBlender28blendLineToHorizontalSegmentEv(i1) | 0)) {
     i12 = 0;
     i15 = 47;
     break L4;
    }
    break;
   }
  case 3:
  case 2:
   {
    if (!(__ZN7WebCore14SVGPathBlender18blendMoveToSegmentEv(i1) | 0)) {
     i12 = 0;
     i15 = 50;
     break L4;
    }
    break;
   }
  case 15:
  case 14:
   {
    if (!(__ZN7WebCore14SVGPathBlender26blendLineToVerticalSegmentEv(i1) | 0)) {
     i12 = 0;
     i15 = 53;
     break L4;
    }
    break;
   }
  case 1:
   {
    i16 = HEAP32[i4 >> 2] | 0;
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 24 >> 2] & 3](i16);
    break;
   }
  case 7:
  case 6:
   {
    if (!(__ZN7WebCore14SVGPathBlender24blendCurveToCubicSegmentEv(i1) | 0)) {
     i12 = 0;
     i15 = 54;
     break L4;
    }
    break;
   }
  case 0:
   {
    i12 = 0;
    i15 = 49;
    break L4;
    break;
   }
  default:
   {}
  }
  if (i5) {
   i16 = HEAP32[i9 >> 2] | 0;
   i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] & 1](i16) | 0;
   i16 = HEAP32[i10 >> 2] | 0;
   if (i17 ^ (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] & 1](i16) | 0)) {
    i12 = 0;
    i15 = 37;
    break;
   }
   i16 = HEAP32[i9 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] & 1](i16) | 0)) {
    i12 = 1;
    i15 = 38;
    break;
   }
   i16 = HEAP32[i10 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] & 1](i16) | 0)) {
    i12 = 1;
    i15 = 44;
    break;
   }
  }
  i16 = HEAP32[i10 >> 2] | 0;
  if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] & 1](i16) | 0)) {
   i12 = 1;
   i15 = 36;
   break;
  }
 }
 if ((i15 | 0) == 34) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i15 | 0) == 35) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i15 | 0) == 36) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i15 | 0) == 37) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i15 | 0) == 38) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i15 | 0) == 40) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i15 | 0) == 41) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i15 | 0) == 42) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i15 | 0) == 43) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i15 | 0) == 44) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i15 | 0) == 45) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i15 | 0) == 46) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i15 | 0) == 47) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i15 | 0) == 48) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i15 | 0) == 49) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i15 | 0) == 50) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i15 | 0) == 51) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i15 | 0) == 52) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i15 | 0) == 53) {
  STACKTOP = i6;
  return i12 | 0;
 } else if ((i15 | 0) == 54) {
  STACKTOP = i6;
  return i12 | 0;
 }
 return 0;
}
function __ZN7WebCore14SVGPathBlender17blendArcToSegmentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, d27 = +0, d28 = +0, d29 = +0, d30 = +0, d31 = +0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, d38 = +0, d39 = +0, d40 = +0, d41 = +0, d42 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = i15;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAPF32[i3 >> 2] = +0;
 HEAPF32[i4 >> 2] = +0;
 HEAPF32[i5 >> 2] = +0;
 HEAP8[i6] = 0;
 HEAP8[i7] = 0;
 i19 = i8;
 HEAPF32[i19 >> 2] = +0;
 i20 = i9 + 4 | 0;
 HEAPF32[i20 >> 2] = +0;
 HEAPF32[i10 >> 2] = +0;
 HEAPF32[i11 >> 2] = +0;
 HEAPF32[i12 >> 2] = +0;
 HEAP8[i13] = 0;
 HEAP8[i14] = 0;
 i21 = i15;
 HEAPF32[i21 >> 2] = +0;
 i22 = i16 + 4 | 0;
 HEAPF32[i22 >> 2] = +0;
 i23 = i1 | 0;
 i24 = HEAP32[i23 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 8 >> 2] & 1](i24) | 0) {
   i25 = HEAP32[i23 >> 2] | 0;
   if (FUNCTION_TABLE_iiiiiiii[HEAP32[(HEAP32[i25 >> 2] | 0) + 56 >> 2] & 1](i25, i3, i4, i5, i6, i7, i9) | 0) {
    break;
   } else {
    i26 = 0;
   }
   STACKTOP = i2;
   return i26 | 0;
  }
 } while (0);
 i23 = HEAP32[i1 + 4 >> 2] | 0;
 if (!(FUNCTION_TABLE_iiiiiiii[HEAP32[(HEAP32[i23 >> 2] | 0) + 56 >> 2] & 1](i23, i10, i11, i12, i13, i14, i16) | 0)) {
  i26 = 0;
  STACKTOP = i2;
  return i26 | 0;
 }
 i23 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i23 | 0) == 0) {
  i24 = HEAP32[i1 + 8 >> 2] | 0;
  i25 = HEAP32[(HEAP32[i24 >> 2] | 0) + 48 >> 2] | 0;
  d27 = +HEAPF32[i3 >> 2];
  d28 = +HEAPF32[i1 + 36 >> 2];
  d29 = d27 + (+HEAPF32[i10 >> 2] - d27) * d28;
  d27 = +HEAPF32[i4 >> 2];
  d30 = d27 + d28 * (+HEAPF32[i11 >> 2] - d27);
  d27 = +HEAPF32[i5 >> 2];
  d31 = d27 + d28 * (+HEAPF32[i12 >> 2] - d27);
  i32 = i1 + 44 | 0;
  i33 = (HEAP8[i32] & 1) != 0;
  i34 = i33 ? (HEAP8[i6] & 1) != 0 : (HEAP8[i13] & 1) != 0;
  i35 = i33 ? (HEAP8[i7] & 1) != 0 : (HEAP8[i14] & 1) != 0;
  __ZN7WebCore14SVGPathBlender23blendAnimatedFloatPointERKNS_10FloatPointES3_(i18, i1, i9, i16);
  FUNCTION_TABLE_vifffiiii[i25 & 1](i24, d29, d30, d31, i34, i35, i18, HEAP32[((HEAP8[i32] & 1) == 0 ? i1 + 32 | 0 : i1 + 28 | 0) >> 2] | 0);
 } else {
  d31 = +HEAPF32[i15 >> 2];
  d30 = +(i23 >>> 0 >>> 0);
  i23 = HEAP32[i1 + 8 >> 2] | 0;
  i32 = HEAP32[(HEAP32[i23 >> 2] | 0) + 48 >> 2] | 0;
  d29 = +HEAPF32[i3 >> 2] + d30 * +HEAPF32[i10 >> 2];
  d27 = +HEAPF32[i4 >> 2] + d30 * +HEAPF32[i11 >> 2];
  d28 = +HEAPF32[i5 >> 2] + d30 * +HEAPF32[i12 >> 2];
  if ((HEAP8[i6] & 1) == 0) {
   i36 = (HEAP8[i13] & 1) != 0;
  } else {
   i36 = 1;
  }
  if ((HEAP8[i7] & 1) == 0) {
   i37 = (HEAP8[i14] & 1) != 0;
  } else {
   i37 = 1;
  }
  d38 = d30 * +HEAPF32[i15 + 4 >> 2] + +HEAPF32[i20 >> 2];
  HEAPF32[i17 >> 2] = d30 * d31 + +HEAPF32[i19 >> 2];
  HEAPF32[i17 + 4 >> 2] = d38;
  FUNCTION_TABLE_vifffiiii[i32 & 1](i23, d29, d27, d28, i36, i37, i17, HEAP32[i1 + 28 >> 2] | 0);
 }
 i17 = i1 + 12 | 0;
 if ((HEAP32[i1 + 28 >> 2] | 0) == 0) {
  d28 = +HEAPF32[i8 >> 2];
  d39 = d28;
  d40 = +HEAPF32[i8 + 4 >> 2];
 } else {
  d39 = +HEAPF32[i17 >> 2] + +HEAPF32[i19 >> 2];
  d40 = +HEAPF32[i1 + 16 >> 2] + +HEAPF32[i20 >> 2];
 }
 i20 = i17;
 d28 = +d39;
 d39 = +d40;
 HEAPF32[i20 >> 2] = d28;
 HEAPF32[i20 + 4 >> 2] = d39;
 i20 = i1 + 20 | 0;
 if ((HEAP32[i1 + 32 >> 2] | 0) == 0) {
  d39 = +HEAPF32[i15 >> 2];
  d41 = d39;
  d42 = +HEAPF32[i15 + 4 >> 2];
 } else {
  d41 = +HEAPF32[i20 >> 2] + +HEAPF32[i21 >> 2];
  d42 = +HEAPF32[i1 + 24 >> 2] + +HEAPF32[i22 >> 2];
 }
 i22 = i20;
 d39 = +d41;
 d41 = +d42;
 HEAPF32[i22 >> 2] = d39;
 HEAPF32[i22 + 4 >> 2] = d41;
 i26 = 1;
 STACKTOP = i2;
 return i26 | 0;
}
function __ZN7WebCore14SVGPathBlender24blendCurveToCubicSegmentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, d23 = +0, d24 = +0, d25 = +0, d26 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i3;
 HEAPF32[i14 >> 2] = +0;
 i15 = i4 + 4 | 0;
 HEAPF32[i15 >> 2] = +0;
 HEAPF32[i5 >> 2] = +0;
 HEAPF32[i5 + 4 >> 2] = +0;
 HEAPF32[i6 >> 2] = +0;
 HEAPF32[i6 + 4 >> 2] = +0;
 i16 = i7;
 HEAPF32[i16 >> 2] = +0;
 i17 = i8 + 4 | 0;
 HEAPF32[i17 >> 2] = +0;
 HEAPF32[i9 >> 2] = +0;
 HEAPF32[i9 + 4 >> 2] = +0;
 HEAPF32[i10 >> 2] = +0;
 HEAPF32[i10 + 4 >> 2] = +0;
 i18 = i1 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 8 >> 2] & 1](i19) | 0) {
   i20 = HEAP32[i18 >> 2] | 0;
   if (FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i20 >> 2] | 0) + 40 >> 2] & 1](i20, i5, i6, i4) | 0) {
    break;
   } else {
    i21 = 0;
   }
   STACKTOP = i2;
   return i21 | 0;
  }
 } while (0);
 i18 = HEAP32[i1 + 4 >> 2] | 0;
 if (!(FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i18 >> 2] | 0) + 40 >> 2] & 1](i18, i9, i10, i8) | 0)) {
  i21 = 0;
  STACKTOP = i2;
  return i21 | 0;
 }
 i18 = HEAP32[i1 + 8 >> 2] | 0;
 i19 = HEAP32[(HEAP32[i18 >> 2] | 0) + 20 >> 2] | 0;
 __ZN7WebCore14SVGPathBlender23blendAnimatedFloatPointERKNS_10FloatPointES3_(i11, i1, i5, i9);
 __ZN7WebCore14SVGPathBlender23blendAnimatedFloatPointERKNS_10FloatPointES3_(i12, i1, i6, i10);
 __ZN7WebCore14SVGPathBlender23blendAnimatedFloatPointERKNS_10FloatPointES3_(i13, i1, i4, i8);
 i8 = i1 + 28 | 0;
 i4 = i1 + 32 | 0;
 FUNCTION_TABLE_viiiii[i19 & 1](i18, i11, i12, i13, HEAP32[((HEAP8[i1 + 44 | 0] & 1) == 0 ? i4 : i8) >> 2] | 0);
 i13 = i1 + 12 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  d22 = +HEAPF32[i3 >> 2];
  d23 = d22;
  d24 = +HEAPF32[i3 + 4 >> 2];
 } else {
  d23 = +HEAPF32[i13 >> 2] + +HEAPF32[i14 >> 2];
  d24 = +HEAPF32[i1 + 16 >> 2] + +HEAPF32[i15 >> 2];
 }
 i15 = i13;
 d22 = +d23;
 d23 = +d24;
 HEAPF32[i15 >> 2] = d22;
 HEAPF32[i15 + 4 >> 2] = d23;
 i15 = i1 + 20 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  d23 = +HEAPF32[i7 >> 2];
  d25 = d23;
  d26 = +HEAPF32[i7 + 4 >> 2];
 } else {
  d25 = +HEAPF32[i15 >> 2] + +HEAPF32[i16 >> 2];
  d26 = +HEAPF32[i1 + 24 >> 2] + +HEAPF32[i17 >> 2];
 }
 i17 = i15;
 d23 = +d25;
 d25 = +d26;
 HEAPF32[i17 >> 2] = d23;
 HEAPF32[i17 + 4 >> 2] = d25;
 i21 = 1;
 STACKTOP = i2;
 return i21 | 0;
}
function __ZN7WebCore14SVGPathBlender28blendLineToHorizontalSegmentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, i16 = 0, i17 = 0, d18 = +0, d19 = +0, d20 = +0, d21 = +0, d22 = +0, d23 = +0, d24 = +0, i25 = 0, d26 = +0, i27 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 HEAPF32[i3 >> 2] = +0;
 HEAPF32[i4 >> 2] = +0;
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 1](i6) | 0) {
   i7 = HEAP32[i5 >> 2] | 0;
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i7 >> 2] | 0) + 32 >> 2] & 1](i7, i3) | 0) {
    break;
   } else {
    i8 = 0;
   }
   STACKTOP = i2;
   return i8 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] & 1](i5, i4) | 0)) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 28 >> 2] | 0;
 d9 = +HEAPF32[i3 >> 2];
 d10 = +HEAPF32[i4 >> 2];
 i7 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i11 = i1 + 28 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   i13 = i1 + 32 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i12 | 0) == (i14 | 0)) {
    d15 = d9 + (d10 - d9) * +HEAPF32[i1 + 36 >> 2];
    i16 = i11;
    i17 = i13;
    break;
   }
   d18 = +HEAPF32[i1 + 20 >> 2];
   d19 = +HEAPF32[i1 + 12 >> 2];
   if ((i12 | 0) == 0) {
    d20 = d10 + d18;
   } else {
    d20 = d10 - d18;
   }
   d21 = +HEAPF32[i1 + 36 >> 2];
   d22 = d9 + (d20 - d9) * d21;
   if ((HEAP8[i1 + 44 | 0] & 1) != 0) {
    d15 = d22;
    i16 = i11;
    i17 = i13;
    break;
   }
   d23 = d19 + (d18 - d19) * d21;
   if ((i14 | 0) == 0) {
    d15 = d22 + d23;
    i16 = i11;
    i17 = i13;
    break;
   } else {
    d15 = d22 - d23;
    i16 = i11;
    i17 = i13;
    break;
   }
  } else {
   d15 = d9 + d10 * +(i7 >>> 0 >>> 0);
   i16 = i1 + 28 | 0;
   i17 = i1 + 32 | 0;
  }
 } while (0);
 FUNCTION_TABLE_vifi[i6 & 1](i5, d15, HEAP32[((HEAP8[i1 + 44 | 0] & 1) == 0 ? i17 : i16) >> 2] | 0);
 i5 = i1 + 12 | 0;
 if ((HEAP32[i16 >> 2] | 0) == 0) {
  d24 = +HEAPF32[i3 >> 2];
  i25 = i5 | 0;
 } else {
  i16 = i5 | 0;
  d24 = +HEAPF32[i16 >> 2] + +HEAPF32[i3 >> 2];
  i25 = i16;
 }
 HEAPF32[i25 >> 2] = d24;
 i25 = i1 + 20 | 0;
 if ((HEAP32[i17 >> 2] | 0) == 0) {
  d26 = +HEAPF32[i4 >> 2];
  i27 = i25 | 0;
 } else {
  i17 = i25 | 0;
  d26 = +HEAPF32[i17 >> 2] + +HEAPF32[i4 >> 2];
  i27 = i17;
 }
 HEAPF32[i27 >> 2] = d26;
 i8 = 1;
 STACKTOP = i2;
 return i8 | 0;
}
function __ZN7WebCore14SVGPathBlender26blendLineToVerticalSegmentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, i16 = 0, i17 = 0, d18 = +0, d19 = +0, d20 = +0, d21 = +0, d22 = +0, d23 = +0, d24 = +0, i25 = 0, d26 = +0, i27 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 HEAPF32[i3 >> 2] = +0;
 HEAPF32[i4 >> 2] = +0;
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 1](i6) | 0) {
   i7 = HEAP32[i5 >> 2] | 0;
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i7 >> 2] | 0) + 36 >> 2] & 1](i7, i3) | 0) {
    break;
   } else {
    i8 = 0;
   }
   STACKTOP = i2;
   return i8 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 36 >> 2] & 1](i5, i4) | 0)) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0;
 d9 = +HEAPF32[i3 >> 2];
 d10 = +HEAPF32[i4 >> 2];
 i7 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i11 = i1 + 28 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   i13 = i1 + 32 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i12 | 0) == (i14 | 0)) {
    d15 = d9 + (d10 - d9) * +HEAPF32[i1 + 36 >> 2];
    i16 = i11;
    i17 = i13;
    break;
   }
   d18 = +HEAPF32[i1 + 24 >> 2];
   d19 = +HEAPF32[i1 + 16 >> 2];
   if ((i12 | 0) == 0) {
    d20 = d10 + d18;
   } else {
    d20 = d10 - d18;
   }
   d21 = +HEAPF32[i1 + 36 >> 2];
   d22 = d9 + (d20 - d9) * d21;
   if ((HEAP8[i1 + 44 | 0] & 1) != 0) {
    d15 = d22;
    i16 = i11;
    i17 = i13;
    break;
   }
   d23 = d19 + (d18 - d19) * d21;
   if ((i14 | 0) == 0) {
    d15 = d22 + d23;
    i16 = i11;
    i17 = i13;
    break;
   } else {
    d15 = d22 - d23;
    i16 = i11;
    i17 = i13;
    break;
   }
  } else {
   d15 = d9 + d10 * +(i7 >>> 0 >>> 0);
   i16 = i1 + 28 | 0;
   i17 = i1 + 32 | 0;
  }
 } while (0);
 FUNCTION_TABLE_vifi[i6 & 1](i5, d15, HEAP32[((HEAP8[i1 + 44 | 0] & 1) == 0 ? i17 : i16) >> 2] | 0);
 if ((HEAP32[i16 >> 2] | 0) == 0) {
  d24 = +HEAPF32[i3 >> 2];
  i25 = i1 + 16 | 0;
 } else {
  i16 = i1 + 16 | 0;
  d24 = +HEAPF32[i16 >> 2] + +HEAPF32[i3 >> 2];
  i25 = i16;
 }
 HEAPF32[i25 >> 2] = d24;
 if ((HEAP32[i17 >> 2] | 0) == 0) {
  d26 = +HEAPF32[i4 >> 2];
  i27 = i1 + 24 | 0;
 } else {
  i17 = i1 + 24 | 0;
  d26 = +HEAPF32[i17 >> 2] + +HEAPF32[i4 >> 2];
  i27 = i17;
 }
 HEAPF32[i27 >> 2] = d26;
 i8 = 1;
 STACKTOP = i2;
 return i8 | 0;
}
function __ZN7WebCore14SVGPathBlender30blendCurveToCubicSmoothSegmentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, d19 = +0, d20 = +0, d21 = +0, d22 = +0, d23 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i3;
 HEAPF32[i11 >> 2] = +0;
 i12 = i4 + 4 | 0;
 HEAPF32[i12 >> 2] = +0;
 HEAPF32[i5 >> 2] = +0;
 HEAPF32[i5 + 4 >> 2] = +0;
 i13 = i6;
 HEAPF32[i13 >> 2] = +0;
 i14 = i7 + 4 | 0;
 HEAPF32[i14 >> 2] = +0;
 HEAPF32[i8 >> 2] = +0;
 HEAPF32[i8 + 4 >> 2] = +0;
 i15 = i1 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] & 1](i16) | 0) {
   i17 = HEAP32[i15 >> 2] | 0;
   if (FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i17 >> 2] | 0) + 44 >> 2] & 1](i17, i5, i4) | 0) {
    break;
   } else {
    i18 = 0;
   }
   STACKTOP = i2;
   return i18 | 0;
  }
 } while (0);
 i15 = HEAP32[i1 + 4 >> 2] | 0;
 if (!(FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i15 >> 2] | 0) + 44 >> 2] & 1](i15, i8, i7) | 0)) {
  i18 = 0;
  STACKTOP = i2;
  return i18 | 0;
 }
 i15 = HEAP32[i1 + 8 >> 2] | 0;
 i16 = HEAP32[(HEAP32[i15 >> 2] | 0) + 36 >> 2] | 0;
 __ZN7WebCore14SVGPathBlender23blendAnimatedFloatPointERKNS_10FloatPointES3_(i9, i1, i5, i8);
 __ZN7WebCore14SVGPathBlender23blendAnimatedFloatPointERKNS_10FloatPointES3_(i10, i1, i4, i7);
 i7 = i1 + 28 | 0;
 i4 = i1 + 32 | 0;
 FUNCTION_TABLE_viiii[i16 & 1](i15, i9, i10, HEAP32[((HEAP8[i1 + 44 | 0] & 1) == 0 ? i4 : i7) >> 2] | 0);
 i10 = i1 + 12 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  d19 = +HEAPF32[i3 >> 2];
  d20 = d19;
  d21 = +HEAPF32[i3 + 4 >> 2];
 } else {
  d20 = +HEAPF32[i10 >> 2] + +HEAPF32[i11 >> 2];
  d21 = +HEAPF32[i1 + 16 >> 2] + +HEAPF32[i12 >> 2];
 }
 i12 = i10;
 d19 = +d20;
 d20 = +d21;
 HEAPF32[i12 >> 2] = d19;
 HEAPF32[i12 + 4 >> 2] = d20;
 i12 = i1 + 20 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  d20 = +HEAPF32[i6 >> 2];
  d22 = d20;
  d23 = +HEAPF32[i6 + 4 >> 2];
 } else {
  d22 = +HEAPF32[i12 >> 2] + +HEAPF32[i13 >> 2];
  d23 = +HEAPF32[i1 + 24 >> 2] + +HEAPF32[i14 >> 2];
 }
 i14 = i12;
 d20 = +d22;
 d22 = +d23;
 HEAPF32[i14 >> 2] = d20;
 HEAPF32[i14 + 4 >> 2] = d22;
 i18 = 1;
 STACKTOP = i2;
 return i18 | 0;
}
function __ZN7WebCore14SVGPathBlender28blendCurveToQuadraticSegmentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, d19 = +0, d20 = +0, d21 = +0, d22 = +0, d23 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i3;
 HEAPF32[i11 >> 2] = +0;
 i12 = i4 + 4 | 0;
 HEAPF32[i12 >> 2] = +0;
 HEAPF32[i5 >> 2] = +0;
 HEAPF32[i5 + 4 >> 2] = +0;
 i13 = i6;
 HEAPF32[i13 >> 2] = +0;
 i14 = i7 + 4 | 0;
 HEAPF32[i14 >> 2] = +0;
 HEAPF32[i8 >> 2] = +0;
 HEAPF32[i8 + 4 >> 2] = +0;
 i15 = i1 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] & 1](i16) | 0) {
   i17 = HEAP32[i15 >> 2] | 0;
   if (FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i17 >> 2] | 0) + 48 >> 2] & 1](i17, i5, i4) | 0) {
    break;
   } else {
    i18 = 0;
   }
   STACKTOP = i2;
   return i18 | 0;
  }
 } while (0);
 i15 = HEAP32[i1 + 4 >> 2] | 0;
 if (!(FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i15 >> 2] | 0) + 48 >> 2] & 1](i15, i8, i7) | 0)) {
  i18 = 0;
  STACKTOP = i2;
  return i18 | 0;
 }
 i15 = HEAP32[i1 + 8 >> 2] | 0;
 i16 = HEAP32[(HEAP32[i15 >> 2] | 0) + 40 >> 2] | 0;
 __ZN7WebCore14SVGPathBlender23blendAnimatedFloatPointERKNS_10FloatPointES3_(i9, i1, i5, i8);
 __ZN7WebCore14SVGPathBlender23blendAnimatedFloatPointERKNS_10FloatPointES3_(i10, i1, i4, i7);
 i7 = i1 + 28 | 0;
 i4 = i1 + 32 | 0;
 FUNCTION_TABLE_viiii[i16 & 1](i15, i9, i10, HEAP32[((HEAP8[i1 + 44 | 0] & 1) == 0 ? i4 : i7) >> 2] | 0);
 i10 = i1 + 12 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  d19 = +HEAPF32[i3 >> 2];
  d20 = d19;
  d21 = +HEAPF32[i3 + 4 >> 2];
 } else {
  d20 = +HEAPF32[i10 >> 2] + +HEAPF32[i11 >> 2];
  d21 = +HEAPF32[i1 + 16 >> 2] + +HEAPF32[i12 >> 2];
 }
 i12 = i10;
 d19 = +d20;
 d20 = +d21;
 HEAPF32[i12 >> 2] = d19;
 HEAPF32[i12 + 4 >> 2] = d20;
 i12 = i1 + 20 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  d20 = +HEAPF32[i6 >> 2];
  d22 = d20;
  d23 = +HEAPF32[i6 + 4 >> 2];
 } else {
  d22 = +HEAPF32[i12 >> 2] + +HEAPF32[i13 >> 2];
  d23 = +HEAPF32[i1 + 24 >> 2] + +HEAPF32[i14 >> 2];
 }
 i14 = i12;
 d20 = +d22;
 d22 = +d23;
 HEAPF32[i14 >> 2] = d20;
 HEAPF32[i14 + 4 >> 2] = d22;
 i18 = 1;
 STACKTOP = i2;
 return i18 | 0;
}
function __ZN7WebCore14SVGPathBlender34blendCurveToQuadraticSmoothSegmentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, d20 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i3;
 HEAPF32[i8 >> 2] = +0;
 i9 = i4 + 4 | 0;
 HEAPF32[i9 >> 2] = +0;
 i10 = i5;
 HEAPF32[i10 >> 2] = +0;
 i11 = i6 + 4 | 0;
 HEAPF32[i11 >> 2] = +0;
 i12 = i1 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] & 1](i13) | 0) {
   i14 = HEAP32[i12 >> 2] | 0;
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i14 >> 2] | 0) + 52 >> 2] & 1](i14, i4) | 0) {
    break;
   } else {
    i15 = 0;
   }
   STACKTOP = i2;
   return i15 | 0;
  }
 } while (0);
 i12 = HEAP32[i1 + 4 >> 2] | 0;
 if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i12 >> 2] | 0) + 52 >> 2] & 1](i12, i6) | 0)) {
  i15 = 0;
  STACKTOP = i2;
  return i15 | 0;
 }
 i12 = HEAP32[i1 + 8 >> 2] | 0;
 i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] | 0;
 __ZN7WebCore14SVGPathBlender23blendAnimatedFloatPointERKNS_10FloatPointES3_(i7, i1, i4, i6);
 i6 = i1 + 28 | 0;
 i4 = i1 + 32 | 0;
 FUNCTION_TABLE_viii[i13 & 1](i12, i7, HEAP32[((HEAP8[i1 + 44 | 0] & 1) == 0 ? i4 : i6) >> 2] | 0);
 i7 = i1 + 12 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  d16 = +HEAPF32[i3 >> 2];
  d17 = d16;
  d18 = +HEAPF32[i3 + 4 >> 2];
 } else {
  d17 = +HEAPF32[i7 >> 2] + +HEAPF32[i8 >> 2];
  d18 = +HEAPF32[i1 + 16 >> 2] + +HEAPF32[i9 >> 2];
 }
 i9 = i7;
 d16 = +d17;
 d17 = +d18;
 HEAPF32[i9 >> 2] = d16;
 HEAPF32[i9 + 4 >> 2] = d17;
 i9 = i1 + 20 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  d17 = +HEAPF32[i5 >> 2];
  d19 = d17;
  d20 = +HEAPF32[i5 + 4 >> 2];
 } else {
  d19 = +HEAPF32[i9 >> 2] + +HEAPF32[i10 >> 2];
  d20 = +HEAPF32[i1 + 24 >> 2] + +HEAPF32[i11 >> 2];
 }
 i11 = i9;
 d17 = +d19;
 d19 = +d20;
 HEAPF32[i11 >> 2] = d17;
 HEAPF32[i11 + 4 >> 2] = d19;
 i15 = 1;
 STACKTOP = i2;
 return i15 | 0;
}
function __ZN7WebCore14SVGPathBlender18blendMoveToSegmentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, d20 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i3;
 HEAPF32[i8 >> 2] = +0;
 i9 = i4 + 4 | 0;
 HEAPF32[i9 >> 2] = +0;
 i10 = i5;
 HEAPF32[i10 >> 2] = +0;
 i11 = i6 + 4 | 0;
 HEAPF32[i11 >> 2] = +0;
 i12 = i1 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] & 1](i13) | 0) {
   i14 = HEAP32[i12 >> 2] | 0;
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i14 >> 2] | 0) + 24 >> 2] & 1](i14, i4) | 0) {
    break;
   } else {
    i15 = 0;
   }
   STACKTOP = i2;
   return i15 | 0;
  }
 } while (0);
 i12 = HEAP32[i1 + 4 >> 2] | 0;
 if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i12 >> 2] | 0) + 24 >> 2] & 1](i12, i6) | 0)) {
  i15 = 0;
  STACKTOP = i2;
  return i15 | 0;
 }
 i12 = HEAP32[i1 + 8 >> 2] | 0;
 i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 12 >> 2] | 0;
 __ZN7WebCore14SVGPathBlender23blendAnimatedFloatPointERKNS_10FloatPointES3_(i7, i1, i4, i6);
 i6 = i1 + 28 | 0;
 i4 = i1 + 32 | 0;
 FUNCTION_TABLE_viiii[i13 & 1](i12, i7, 0, HEAP32[((HEAP8[i1 + 44 | 0] & 1) == 0 ? i4 : i6) >> 2] | 0);
 i7 = i1 + 12 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  d16 = +HEAPF32[i3 >> 2];
  d17 = d16;
  d18 = +HEAPF32[i3 + 4 >> 2];
 } else {
  d17 = +HEAPF32[i7 >> 2] + +HEAPF32[i8 >> 2];
  d18 = +HEAPF32[i1 + 16 >> 2] + +HEAPF32[i9 >> 2];
 }
 i9 = i7;
 d16 = +d17;
 d17 = +d18;
 HEAPF32[i9 >> 2] = d16;
 HEAPF32[i9 + 4 >> 2] = d17;
 i9 = i1 + 20 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  d17 = +HEAPF32[i5 >> 2];
  d19 = d17;
  d20 = +HEAPF32[i5 + 4 >> 2];
 } else {
  d19 = +HEAPF32[i9 >> 2] + +HEAPF32[i10 >> 2];
  d20 = +HEAPF32[i1 + 24 >> 2] + +HEAPF32[i11 >> 2];
 }
 i11 = i9;
 d17 = +d19;
 d19 = +d20;
 HEAPF32[i11 >> 2] = d17;
 HEAPF32[i11 + 4 >> 2] = d19;
 i15 = 1;
 STACKTOP = i2;
 return i15 | 0;
}
function __ZN7WebCore14SVGPathBlender18blendLineToSegmentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, d20 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i3;
 HEAPF32[i8 >> 2] = +0;
 i9 = i4 + 4 | 0;
 HEAPF32[i9 >> 2] = +0;
 i10 = i5;
 HEAPF32[i10 >> 2] = +0;
 i11 = i6 + 4 | 0;
 HEAPF32[i11 >> 2] = +0;
 i12 = i1 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] & 1](i13) | 0) {
   i14 = HEAP32[i12 >> 2] | 0;
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i14 >> 2] | 0) + 28 >> 2] & 1](i14, i4) | 0) {
    break;
   } else {
    i15 = 0;
   }
   STACKTOP = i2;
   return i15 | 0;
  }
 } while (0);
 i12 = HEAP32[i1 + 4 >> 2] | 0;
 if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i12 >> 2] | 0) + 28 >> 2] & 1](i12, i6) | 0)) {
  i15 = 0;
  STACKTOP = i2;
  return i15 | 0;
 }
 i12 = HEAP32[i1 + 8 >> 2] | 0;
 i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 16 >> 2] | 0;
 __ZN7WebCore14SVGPathBlender23blendAnimatedFloatPointERKNS_10FloatPointES3_(i7, i1, i4, i6);
 i6 = i1 + 28 | 0;
 i4 = i1 + 32 | 0;
 FUNCTION_TABLE_viii[i13 & 1](i12, i7, HEAP32[((HEAP8[i1 + 44 | 0] & 1) == 0 ? i4 : i6) >> 2] | 0);
 i7 = i1 + 12 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  d16 = +HEAPF32[i3 >> 2];
  d17 = d16;
  d18 = +HEAPF32[i3 + 4 >> 2];
 } else {
  d17 = +HEAPF32[i7 >> 2] + +HEAPF32[i8 >> 2];
  d18 = +HEAPF32[i1 + 16 >> 2] + +HEAPF32[i9 >> 2];
 }
 i9 = i7;
 d16 = +d17;
 d17 = +d18;
 HEAPF32[i9 >> 2] = d16;
 HEAPF32[i9 + 4 >> 2] = d17;
 i9 = i1 + 20 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  d17 = +HEAPF32[i5 >> 2];
  d19 = d17;
  d20 = +HEAPF32[i5 + 4 >> 2];
 } else {
  d19 = +HEAPF32[i9 >> 2] + +HEAPF32[i10 >> 2];
  d20 = +HEAPF32[i1 + 24 >> 2] + +HEAPF32[i11 >> 2];
 }
 i11 = i9;
 d17 = +d19;
 d19 = +d20;
 HEAPF32[i11 >> 2] = d17;
 HEAPF32[i11 + 4 >> 2] = d19;
 i15 = 1;
 STACKTOP = i2;
 return i15 | 0;
}
function __ZN7WebCore14SVGPathBlender23blendAnimatedFloatPointERKNS_10FloatPointES3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, i11 = 0, d12 = +0, d13 = +0, d14 = +0, d15 = +0;
 i5 = HEAP32[i2 + 40 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = i4;
  d7 = +HEAPF32[i6 >> 2];
  d8 = +(i5 >>> 0 >>> 0);
  d9 = +HEAPF32[i3 + 4 >> 2] + d8 * +HEAPF32[i6 + 4 >> 2];
  HEAPF32[i1 >> 2] = +HEAPF32[i3 >> 2] + d8 * d7;
  HEAPF32[i1 + 4 >> 2] = d9;
  return;
 }
 i6 = HEAP32[i2 + 28 >> 2] | 0;
 i5 = HEAP32[i2 + 32 >> 2] | 0;
 if ((i6 | 0) == (i5 | 0)) {
  d9 = +HEAPF32[i3 >> 2];
  d7 = +HEAPF32[i3 + 4 >> 2];
  d8 = +HEAPF32[i2 + 36 >> 2];
  d10 = d7 + d8 * (+HEAPF32[i4 + 4 >> 2] - d7);
  HEAPF32[i1 >> 2] = d9 + d8 * (+HEAPF32[i4 >> 2] - d9);
  HEAPF32[i1 + 4 >> 2] = d10;
  return;
 }
 i11 = i4;
 d10 = +HEAPF32[i11 >> 2];
 d9 = +HEAPF32[i11 + 4 >> 2];
 d8 = +HEAPF32[i2 + 20 >> 2];
 d7 = +HEAPF32[i2 + 24 >> 2];
 if ((i6 | 0) == 0) {
  d12 = d8 + d10;
  d13 = d7 + d9;
 } else {
  d12 = d10 - d8;
  d13 = d9 - d7;
 }
 d9 = +HEAPF32[i3 >> 2];
 d10 = +HEAPF32[i3 + 4 >> 2];
 d14 = +HEAPF32[i2 + 36 >> 2];
 d15 = d9 + d14 * (d12 - d9);
 d9 = d10 + d14 * (d13 - d10);
 if ((HEAP8[i2 + 44 | 0] & 1) != 0) {
  i3 = i1;
  d10 = +d15;
  d13 = +d9;
  HEAPF32[i3 >> 2] = d10;
  HEAPF32[i3 + 4 >> 2] = d13;
  return;
 }
 d13 = +HEAPF32[i2 + 12 >> 2];
 d10 = +HEAPF32[i2 + 16 >> 2];
 d12 = d13 + d14 * (d8 - d13);
 d13 = d10 + d14 * (d7 - d10);
 if ((i5 | 0) == 0) {
  HEAPF32[i1 >> 2] = d15 + d12;
  HEAPF32[i1 + 4 >> 2] = d9 + d13;
  return;
 } else {
  i5 = i1;
  d10 = +(d15 - d12);
  d12 = +(d9 - d13);
  HEAPF32[i5 >> 2] = d10;
  HEAPF32[i5 + 4 >> 2] = d12;
  return;
 }
}
function __ZN7WebCore14SVGPathBlender28blendAnimatedDimensonalFloatEffNS_14FloatBlendModeE(i1, d2, d3, i4) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 i4 = i4 | 0;
 var i5 = 0, d6 = +0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, d11 = +0, d12 = +0, d13 = +0;
 i5 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i5 | 0) != 0) {
  d6 = +(i5 >>> 0 >>> 0) * d3 + d2;
  return +d6;
 }
 i5 = HEAP32[i1 + 28 >> 2] | 0;
 i7 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i5 | 0) == (i7 | 0)) {
  d6 = d2 + (d3 - d2) * +HEAPF32[i1 + 36 >> 2];
  return +d6;
 }
 if ((i4 | 0) == 0) {
  i8 = i1 + 20 | 0;
  i9 = i1 + 12 | 0;
 } else {
  i8 = i1 + 24 | 0;
  i9 = i1 + 16 | 0;
 }
 d10 = +HEAPF32[i8 >> 2];
 d11 = +HEAPF32[i9 >> 2];
 if ((i5 | 0) == 0) {
  d12 = d10 + d3;
 } else {
  d12 = d3 - d10;
 }
 d3 = +HEAPF32[i1 + 36 >> 2];
 d13 = d2 + (d12 - d2) * d3;
 if ((HEAP8[i1 + 44 | 0] & 1) != 0) {
  d6 = d13;
  return +d6;
 }
 d2 = d11 + (d10 - d11) * d3;
 if ((i7 | 0) == 0) {
  d6 = d13 + d2;
  return +d6;
 } else {
  d6 = d13 - d2;
  return +d6;
 }
 return +0;
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
function __ZN7WebCore14SVGPathBlender15addAnimatedPathEPNS_13SVGPathSourceES2_PNS_15SVGPathConsumerEj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 i6 = i1 + 40 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i5;
 i5 = __ZN7WebCore14SVGPathBlender17blendAnimatedPathEfPNS_13SVGPathSourceES2_PNS_15SVGPathConsumerE(i1, +0, i2, i3, i4) | 0;
 HEAP32[i6 >> 2] = i7;
 return i5 | 0;
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
function dynCall_iiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 return FUNCTION_TABLE_iiiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0) | 0;
}
function dynCall_vifffiiii(i1, i2, d3, d4, d5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 FUNCTION_TABLE_vifffiiii[i1 & 1](i2 | 0, +d3, +d4, +d5, i6 | 0, i7 | 0, i8 | 0, i9 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore14SVGPathBlender7cleanupEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 3](i2);
 _memset(i1 | 0, 0, 28) | 0;
 return;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZN7WebCore14SVGPathBlenderC2Ev(i1) {
 i1 = i1 | 0;
 HEAPF32[i1 + 36 >> 2] = +0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP8[i1 + 44 | 0] = 0;
 _memset(i1 | 0, 0, 28) | 0;
 return;
}
function __ZN7WebCore14SVGPathBlenderC1Ev(i1) {
 i1 = i1 | 0;
 HEAPF32[i1 + 36 >> 2] = +0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP8[i1 + 44 | 0] = 0;
 _memset(i1 | 0, 0, 28) | 0;
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
function b0(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(0);
 return 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function b1(i1, d2, d3, d4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 abort(1);
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
function dynCall_vifi(i1, i2, d3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 FUNCTION_TABLE_vifi[i1 & 1](i2 | 0, +d3, i4 | 0);
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
function b2(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(2);
}
function b4(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(4);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function b11(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(11);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
 return 0;
}
function b7(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(7);
}
function b9(i1, d2, i3) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 abort(9);
}
function b10(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(10);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b5(i1) {
 i1 = i1 | 0;
 abort(5);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b8() {
 abort(8);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiiiiii = [b0,b0];
  var FUNCTION_TABLE_vifffiiii = [b1,b1];
  var FUNCTION_TABLE_viiiii = [b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore14SVGPathBlenderC2Ev,b3];
  var FUNCTION_TABLE_iiiii = [b4,b4];
  var FUNCTION_TABLE_ii = [b5,b5];
  var FUNCTION_TABLE_iiii = [b6,b6];
  var FUNCTION_TABLE_viii = [b7,b7];
  var FUNCTION_TABLE_v = [b8,b8];
  var FUNCTION_TABLE_vifi = [b9,b9];
  var FUNCTION_TABLE_iii = [b10,b10];
  var FUNCTION_TABLE_viiii = [b11,b11];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiiiiii: dynCall_iiiiiiii, dynCall_vifffiiii: dynCall_vifffiiii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_iiiii: dynCall_iiiii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_vifi: dynCall_vifi, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiiiiii": invoke_iiiiiiii, "invoke_vifffiiii": invoke_vifffiiii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_iiiii": invoke_iiiii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_vifi": invoke_vifi, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = asm["dynCall_iiiiiiii"];
var dynCall_vifffiiii = Module["dynCall_vifffiiii"] = asm["dynCall_vifffiiii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_vifi = Module["dynCall_vifi"] = asm["dynCall_vifi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore14SVGPathBlender7cleanupEv","_memset","__ZN7WebCore14SVGPathBlender17blendAnimatedPathEfPNS_13SVGPathSourceES2_PNS_15SVGPathConsumerE","__ZN7WebCore14SVGPathBlender34blendCurveToQuadraticSmoothSegmentEv","__ZN7WebCore14SVGPathBlender23blendAnimatedFloatPointERKNS_10FloatPointES3_","__ZN7WebCore14SVGPathBlender18blendMoveToSegmentEv","__ZN7WebCore14SVGPathBlender24blendCurveToCubicSegmentEv","__ZN7WebCore14SVGPathBlender18blendLineToSegmentEv","_memcpy","__ZN7WebCore14SVGPathBlenderC2Ev","__ZN7WebCore14SVGPathBlender30blendCurveToCubicSmoothSegmentEv","__ZN7WebCore14SVGPathBlender28blendAnimatedDimensonalFloatEffNS_14FloatBlendModeE","__ZN7WebCore14SVGPathBlender26blendLineToVerticalSegmentEv","__ZN7WebCore14SVGPathBlender15addAnimatedPathEPNS_13SVGPathSourceES2_PNS_15SVGPathConsumerEj","__ZN7WebCore14SVGPathBlender17blendArcToSegmentEv","__ZN7WebCore14SVGPathBlender28blendLineToHorizontalSegmentEv","__ZN7WebCore14SVGPathBlender28blendCurveToQuadraticSegmentEv"]

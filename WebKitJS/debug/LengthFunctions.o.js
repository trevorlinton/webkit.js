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
var Math_min = Math.min;
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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var _round=env._round;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, d13 = +0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, i18 = 0, d19 = +0, i20 = 0, d21 = +0, i22 = 0, d23 = +0, i24 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 switch (HEAPU8[i2 + 5 | 0] | 0 | 0) {
 case 3:
  {
   if ((HEAP8[i2 + 6 | 0] & 1) == 0) {
    d11 = +(HEAP32[i2 >> 2] | 0);
   } else {
    d11 = +HEAPF32[i2 >> 2];
   }
   do {
    if (d11 < +2147483647) {
     if (d11 <= +-2147483648) {
      i12 = -2147483648;
      break;
     }
     i12 = ~~d11;
    } else {
     i12 = 2147483647;
    }
   } while (0);
   HEAP32[i1 >> 2] = i12;
   STACKTOP = i6;
   return;
  }
 case 2:
  {
   if ((HEAP8[i2 + 6 | 0] & 1) == 0) {
    d13 = +(HEAP32[i2 >> 2] | 0);
   } else {
    d13 = +HEAPF32[i2 >> 2];
   }
   d11 = d13 * +(HEAP32[i3 >> 2] | 0) / +100;
   if (i5) {
    d13 = +_round(+d11);
    do {
     if (d13 < +2147483647) {
      if (d13 <= +-2147483648) {
       i14 = -2147483648;
       break;
      }
      i14 = ~~d13;
     } else {
      i14 = 2147483647;
     }
    } while (0);
    HEAP32[i1 >> 2] = i14;
    STACKTOP = i6;
    return;
   } else {
    do {
     if (d11 < +2147483647) {
      if (d11 <= +-2147483648) {
       i15 = -2147483648;
       break;
      }
      i15 = ~~d11;
     } else {
      i15 = 2147483647;
     }
    } while (0);
    HEAP32[i1 >> 2] = i15;
    STACKTOP = i6;
    return;
   }
   break;
  }
 case 10:
  {
   d11 = +__ZNK7WebCore6Length21nonNanCalculatedValueEi(i2, HEAP32[i3 >> 2] | 0);
   do {
    if (d11 < +2147483647) {
     if (d11 <= +-2147483648) {
      i16 = -2147483648;
      break;
     }
     i16 = ~~d11;
    } else {
     i16 = 2147483647;
    }
   } while (0);
   HEAP32[i1 >> 2] = i16;
   STACKTOP = i6;
   return;
  }
 case 11:
  {
   if ((i4 | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i6;
    return;
   }
   __ZNK7WebCore10RenderView12viewportSizeEv(i7, i4);
   if ((HEAP8[i2 + 6 | 0] & 1) == 0) {
    d17 = +(HEAP32[i2 >> 2] | 0);
   } else {
    d17 = +HEAPF32[i2 >> 2];
   }
   d11 = +(HEAP32[i7 >> 2] | 0) * d17 / +100;
   do {
    if (d11 < +2147483647) {
     if (d11 <= +-2147483648) {
      i18 = -2147483648;
      break;
     }
     i18 = ~~d11;
    } else {
     i18 = 2147483647;
    }
   } while (0);
   HEAP32[i1 >> 2] = i18;
   STACKTOP = i6;
   return;
  }
 case 12:
  {
   if ((i4 | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i6;
    return;
   }
   __ZNK7WebCore10RenderView12viewportSizeEv(i8, i4);
   if ((HEAP8[i2 + 6 | 0] & 1) == 0) {
    d19 = +(HEAP32[i2 >> 2] | 0);
   } else {
    d19 = +HEAPF32[i2 >> 2];
   }
   d11 = +(HEAP32[i8 + 4 >> 2] | 0) * d19 / +100;
   do {
    if (d11 < +2147483647) {
     if (d11 <= +-2147483648) {
      i20 = -2147483648;
      break;
     }
     i20 = ~~d11;
    } else {
     i20 = 2147483647;
    }
   } while (0);
   HEAP32[i1 >> 2] = i20;
   STACKTOP = i6;
   return;
  }
 case 13:
  {
   if ((i4 | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i6;
    return;
   }
   __ZNK7WebCore10RenderView12viewportSizeEv(i9, i4);
   i20 = HEAP32[i9 >> 2] | 0;
   i8 = HEAP32[i9 + 4 >> 2] | 0;
   if ((HEAP8[i2 + 6 | 0] & 1) == 0) {
    d21 = +(HEAP32[i2 >> 2] | 0);
   } else {
    d21 = +HEAPF32[i2 >> 2];
   }
   d11 = +(((i8 | 0) < (i20 | 0) ? i8 : i20) | 0) * d21 / +100;
   do {
    if (d11 < +2147483647) {
     if (d11 <= +-2147483648) {
      i22 = -2147483648;
      break;
     }
     i22 = ~~d11;
    } else {
     i22 = 2147483647;
    }
   } while (0);
   HEAP32[i1 >> 2] = i22;
   STACKTOP = i6;
   return;
  }
 case 14:
  {
   if ((i4 | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i6;
    return;
   }
   __ZNK7WebCore10RenderView12viewportSizeEv(i10, i4);
   i4 = HEAP32[i10 >> 2] | 0;
   i22 = HEAP32[i10 + 4 >> 2] | 0;
   if ((HEAP8[i2 + 6 | 0] & 1) == 0) {
    d23 = +(HEAP32[i2 >> 2] | 0);
   } else {
    d23 = +HEAPF32[i2 >> 2];
   }
   d11 = +(((i4 | 0) < (i22 | 0) ? i22 : i4) | 0) * d23 / +100;
   do {
    if (d11 < +2147483647) {
     if (d11 <= +-2147483648) {
      i24 = -2147483648;
      break;
     }
     i24 = ~~d11;
    } else {
     i24 = 2147483647;
    }
   } while (0);
   HEAP32[i1 >> 2] = i24;
   STACKTOP = i6;
   return;
  }
 case 8:
 case 0:
  {
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i6;
   return;
  }
 case 1:
 case 4:
 case 5:
 case 6:
 case 7:
 case 9:
 case 15:
  {
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i6;
   return;
  }
 default:
  {
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i6;
   return;
  }
 }
}
function __ZN7WebCore19floatValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, i10 = 0, i11 = 0, d12 = +0, d13 = +0, d14 = +0, d15 = +0, d16 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 switch (HEAPU8[i1 + 5 | 0] | 0 | 0) {
 case 14:
  {
   if ((i3 | 0) == 0) {
    d9 = +0;
    STACKTOP = i4;
    return +d9;
   }
   __ZNK7WebCore10RenderView12viewportSizeEv(i8, i3);
   i10 = HEAP32[i8 >> 2] | 0;
   i11 = HEAP32[i8 + 4 >> 2] | 0;
   if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
    d12 = +(HEAP32[i1 >> 2] | 0);
   } else {
    d12 = +HEAPF32[i1 >> 2];
   }
   d9 = +(~~(+(((i10 | 0) < (i11 | 0) ? i11 : i10) | 0) * d12 / +100) | 0);
   STACKTOP = i4;
   return +d9;
  }
 case 8:
 case 0:
  {
   d9 = +(HEAP32[i2 >> 2] | 0);
   STACKTOP = i4;
   return +d9;
  }
 case 12:
  {
   if ((i3 | 0) == 0) {
    d9 = +0;
    STACKTOP = i4;
    return +d9;
   }
   __ZNK7WebCore10RenderView12viewportSizeEv(i6, i3);
   if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
    d13 = +(HEAP32[i1 >> 2] | 0);
   } else {
    d13 = +HEAPF32[i1 >> 2];
   }
   d9 = +(~~(+(HEAP32[i6 + 4 >> 2] | 0) * d13 / +100) | 0);
   STACKTOP = i4;
   return +d9;
  }
 case 13:
  {
   if ((i3 | 0) == 0) {
    d9 = +0;
    STACKTOP = i4;
    return +d9;
   }
   __ZNK7WebCore10RenderView12viewportSizeEv(i7, i3);
   i6 = HEAP32[i7 >> 2] | 0;
   i10 = HEAP32[i7 + 4 >> 2] | 0;
   if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
    d14 = +(HEAP32[i1 >> 2] | 0);
   } else {
    d14 = +HEAPF32[i1 >> 2];
   }
   d9 = +(~~(+(((i10 | 0) < (i6 | 0) ? i10 : i6) | 0) * d14 / +100) | 0);
   STACKTOP = i4;
   return +d9;
  }
 case 10:
  {
   d9 = +__ZNK7WebCore6Length21nonNanCalculatedValueEi(i1, HEAP32[i2 >> 2] | 0);
   STACKTOP = i4;
   return +d9;
  }
 case 11:
  {
   if ((i3 | 0) == 0) {
    d9 = +0;
    STACKTOP = i4;
    return +d9;
   }
   __ZNK7WebCore10RenderView12viewportSizeEv(i5, i3);
   if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
    d15 = +(HEAP32[i1 >> 2] | 0);
   } else {
    d15 = +HEAPF32[i1 >> 2];
   }
   d9 = +(~~(+(HEAP32[i5 >> 2] | 0) * d15 / +100) | 0);
   STACKTOP = i4;
   return +d9;
  }
 case 3:
  {
   if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
    d9 = +(HEAP32[i1 >> 2] | 0);
    STACKTOP = i4;
    return +d9;
   } else {
    d9 = +HEAPF32[i1 >> 2];
    STACKTOP = i4;
    return +d9;
   }
   break;
  }
 case 2:
  {
   if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
    d16 = +(HEAP32[i1 >> 2] | 0);
   } else {
    d16 = +HEAPF32[i1 >> 2];
   }
   d9 = d16 * +(HEAP32[i2 >> 2] | 0) / +100;
   STACKTOP = i4;
   return +d9;
  }
 default:
  {
   d9 = +0;
   STACKTOP = i4;
   return +d9;
  }
 }
 return +0;
}
function __ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1, d2, i3) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 switch (HEAPU8[i1 + 5 | 0] | 0 | 0) {
 case 3:
  {
   if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
    d9 = +(HEAP32[i1 >> 2] | 0);
    STACKTOP = i4;
    return +d9;
   } else {
    d9 = +HEAPF32[i1 >> 2];
    STACKTOP = i4;
    return +d9;
   }
   break;
  }
 case 2:
  {
   if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
    d10 = +(HEAP32[i1 >> 2] | 0);
   } else {
    d10 = +HEAPF32[i1 >> 2];
   }
   d9 = d10 * d2 / +100;
   STACKTOP = i4;
   return +d9;
  }
 case 10:
  {
   d9 = +__ZNK7WebCore6Length21nonNanCalculatedValueEi(i1, ~~d2);
   STACKTOP = i4;
   return +d9;
  }
 case 11:
  {
   if ((i3 | 0) == 0) {
    d9 = +0;
    STACKTOP = i4;
    return +d9;
   }
   __ZNK7WebCore10RenderView12viewportSizeEv(i5, i3);
   if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
    d11 = +(HEAP32[i1 >> 2] | 0);
   } else {
    d11 = +HEAPF32[i1 >> 2];
   }
   d9 = +(~~(+(HEAP32[i5 >> 2] | 0) * d11 / +100) | 0);
   STACKTOP = i4;
   return +d9;
  }
 case 12:
  {
   if ((i3 | 0) == 0) {
    d9 = +0;
    STACKTOP = i4;
    return +d9;
   }
   __ZNK7WebCore10RenderView12viewportSizeEv(i6, i3);
   if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
    d12 = +(HEAP32[i1 >> 2] | 0);
   } else {
    d12 = +HEAPF32[i1 >> 2];
   }
   d9 = +(~~(+(HEAP32[i6 + 4 >> 2] | 0) * d12 / +100) | 0);
   STACKTOP = i4;
   return +d9;
  }
 case 13:
  {
   if ((i3 | 0) == 0) {
    d9 = +0;
    STACKTOP = i4;
    return +d9;
   }
   __ZNK7WebCore10RenderView12viewportSizeEv(i7, i3);
   i6 = HEAP32[i7 >> 2] | 0;
   i5 = HEAP32[i7 + 4 >> 2] | 0;
   if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
    d13 = +(HEAP32[i1 >> 2] | 0);
   } else {
    d13 = +HEAPF32[i1 >> 2];
   }
   d9 = +(~~(+(((i5 | 0) < (i6 | 0) ? i5 : i6) | 0) * d13 / +100) | 0);
   STACKTOP = i4;
   return +d9;
  }
 case 14:
  {
   if ((i3 | 0) == 0) {
    d9 = +0;
    STACKTOP = i4;
    return +d9;
   }
   __ZNK7WebCore10RenderView12viewportSizeEv(i8, i3);
   i3 = HEAP32[i8 >> 2] | 0;
   i6 = HEAP32[i8 + 4 >> 2] | 0;
   if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
    d14 = +(HEAP32[i1 >> 2] | 0);
   } else {
    d14 = +HEAPF32[i1 >> 2];
   }
   d9 = +(~~(+(((i3 | 0) < (i6 | 0) ? i6 : i3) | 0) * d14 / +100) | 0);
   STACKTOP = i4;
   return +d9;
  }
 case 1:
 case 4:
 case 5:
 case 6:
 case 7:
 case 9:
 case 15:
  {
   d9 = +0;
   STACKTOP = i4;
   return +d9;
  }
 case 8:
 case 0:
  {
   d9 = d2;
   STACKTOP = i4;
   return +d9;
  }
 default:
  {
   d9 = +0;
   STACKTOP = i4;
   return +d9;
  }
 }
 return +0;
}
function __ZN7WebCore17intValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 switch (HEAPU8[i1 + 5 | 0] | 0 | 0) {
 case 3:
 case 2:
 case 10:
 case 11:
 case 12:
 case 13:
 case 14:
  {
   HEAP32[i6 >> 2] = i8;
   __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i7, i1, i6, i3, i4);
   i9 = HEAP32[i7 >> 2] | 0;
   STACKTOP = i5;
   return i9 | 0;
  }
 case 8:
 case 0:
  {
   HEAP32[i7 >> 2] = i8;
   i9 = i8;
   STACKTOP = i5;
   return i9 | 0;
  }
 case 1:
 case 4:
 case 5:
 case 6:
 case 7:
 case 9:
 case 15:
  {
   HEAP32[i7 >> 2] = 0;
   i9 = 0;
   STACKTOP = i5;
   return i9 | 0;
  }
 default:
  {
   HEAP32[i7 >> 2] = 0;
   i9 = 0;
   STACKTOP = i5;
   return i9 | 0;
  }
 }
 return 0;
}
function __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
 i7 = i6 | 0;
 switch (HEAPU8[i2 + 5 | 0] | 0 | 0) {
 case 3:
 case 2:
 case 10:
 case 11:
 case 12:
 case 13:
 case 14:
  {
   HEAP32[i7 >> 2] = HEAP32[i3 >> 2];
   __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i1, i2, i7, i4, i5);
   STACKTOP = i6;
   return;
  }
 case 8:
 case 0:
  {
   HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
   STACKTOP = i6;
   return;
  }
 case 1:
 case 4:
 case 5:
 case 6:
 case 7:
 case 9:
 case 15:
  {
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i6;
   return;
  }
 default:
  {
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i6;
   return;
  }
 }
}
function __ZN7WebCore24minimumIntValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i7, i1, i6, i3, i4);
 STACKTOP = i5;
 return HEAP32[i7 >> 2] | 0;
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
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b1() {
 abort(1);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iii = [b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "_round": _round, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore24minimumIntValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb","_strlen","__ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb","__ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb","__ZN7WebCore17intValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb","_memset","__ZN7WebCore19floatValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewE","_memcpy","__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE"]

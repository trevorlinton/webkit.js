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
var __ZN7WebCore16SVGLengthContextC1EPKNS_10SVGElementE;
var __ZN7WebCore16SVGLengthContextC1EPKNS_10SVGElementERKNS_9FloatRectE;
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
  var __ZN7WebCore8SVGNames6svgTagE=env.__ZN7WebCore8SVGNames6svgTagE|0;
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
  var _ceilf=env._ceilf;
  var ___setErrNo=env.___setErrNo;
  var _malloc=env._malloc;
  var _free=env._free;
  var _sqrtf=env._sqrtf;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore16SVGLengthContext23convertValueToUserUnitsEfNS_13SVGLengthModeENS_13SVGLengthTypeERi(i1, d2, i3, i4, i5) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, i11 = 0, i12 = 0, d13 = +0, d14 = +0, d15 = +0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 do {
  if (+HEAPF32[i1 + 12 >> 2] > +0) {
   if (+HEAPF32[i1 + 16 >> 2] <= +0) {
    i9 = 11;
    break;
   }
   if ((i4 | 0) == 2) {
    d10 = d2 / +100;
   } else {
    d10 = d2;
   }
   i11 = i8 | 0;
   HEAPF32[i11 >> 2] = +0;
   i12 = i8 + 4 | 0;
   HEAPF32[i12 >> 2] = +0;
   if (!(__ZNK7WebCore16SVGLengthContext17determineViewportERNS_9FloatSizeE(i1, i8) | 0)) {
    HEAP32[i5 >> 2] = 9;
    d13 = +0;
    break;
   }
   if ((i3 | 0) == 0) {
    d13 = d10 * +HEAPF32[i11 >> 2];
    break;
   } else if ((i3 | 0) == 2) {
    d14 = +HEAPF32[i11 >> 2];
    d15 = +HEAPF32[i12 >> 2];
    d13 = d10 * +Math_sqrt((d14 * d14 + d15 * d15) * +.5);
    break;
   } else if ((i3 | 0) == 1) {
    d13 = d10 * +HEAPF32[i12 >> 2];
    break;
   } else {
    d13 = +0;
    break;
   }
  } else {
   i9 = 11;
  }
 } while (0);
 L14 : do {
  if ((i9 | 0) == 11) {
   switch (i4 | 0) {
   case 0:
    {
     HEAP32[i5 >> 2] = 9;
     d13 = +0;
     break L14;
     break;
    }
   case 2:
    {
     d10 = d2 / +100;
     i8 = i7 | 0;
     HEAPF32[i8 >> 2] = +0;
     i12 = i7 + 4 | 0;
     HEAPF32[i12 >> 2] = +0;
     if (!(__ZNK7WebCore16SVGLengthContext17determineViewportERNS_9FloatSizeE(i1, i7) | 0)) {
      HEAP32[i5 >> 2] = 9;
      d13 = +0;
      break L14;
     }
     if ((i3 | 0) == 0) {
      d13 = d10 * +HEAPF32[i8 >> 2];
      break L14;
     } else if ((i3 | 0) == 1) {
      d13 = d10 * +HEAPF32[i12 >> 2];
      break L14;
     } else if ((i3 | 0) == 2) {
      d15 = +HEAPF32[i8 >> 2];
      d14 = +HEAPF32[i12 >> 2];
      d13 = d10 * +Math_sqrt((d15 * d15 + d14 * d14) * +.5);
      break L14;
     } else {
      d13 = +0;
      break L14;
     }
     break;
    }
   case 3:
    {
     i12 = HEAP32[i1 >> 2] | 0;
     L27 : do {
      if ((i12 | 0) != 0) {
       i8 = i12 | 0;
       while (1) {
        i16 = (HEAP32[i8 + 12 >> 2] & 2048 | 0) == 0;
        i17 = i8 + 32 | 0;
        if (i16) {
         i18 = i17 | 0;
        } else {
         i18 = HEAP32[i17 >> 2] | 0;
        }
        if ((HEAP32[i18 >> 2] | 0) != 0) {
         break;
        }
        i8 = HEAP32[i8 + 16 >> 2] | 0;
        if ((i8 | 0) == 0) {
         break L27;
        }
       }
       if (i16) {
        i19 = i17 | 0;
       } else {
        i19 = HEAP32[i17 >> 2] | 0;
       }
       i8 = HEAP32[(HEAP32[i19 >> 2] | 0) + 36 >> 2] | 0;
       if ((i8 | 0) == 0) {
        break;
       }
       d13 = +(__ZNK7WebCore11RenderStyle8fontSizeEv(i8) | 0) * d2;
       break L14;
      }
     } while (0);
     HEAP32[i5 >> 2] = 9;
     d13 = +0;
     break L14;
     break;
    }
   case 4:
    {
     i12 = HEAP32[i1 >> 2] | 0;
     L44 : do {
      if ((i12 | 0) != 0) {
       i8 = i12 | 0;
       while (1) {
        i20 = (HEAP32[i8 + 12 >> 2] & 2048 | 0) == 0;
        i21 = i8 + 32 | 0;
        if (i20) {
         i22 = i21 | 0;
        } else {
         i22 = HEAP32[i21 >> 2] | 0;
        }
        if ((HEAP32[i22 >> 2] | 0) != 0) {
         break;
        }
        i8 = HEAP32[i8 + 16 >> 2] | 0;
        if ((i8 | 0) == 0) {
         break L44;
        }
       }
       if (i20) {
        i23 = i21 | 0;
       } else {
        i23 = HEAP32[i21 >> 2] | 0;
       }
       i8 = HEAP32[(HEAP32[i23 >> 2] | 0) + 36 >> 2] | 0;
       if ((i8 | 0) == 0) {
        break;
       }
       d13 = +Math_ceil(+HEAPF32[(__ZNK7WebCore11RenderStyle11fontMetricsEv(i8) | 0) + 20 >> 2]) * d2;
       break L14;
      }
     } while (0);
     HEAP32[i5 >> 2] = 9;
     d13 = +0;
     break L14;
     break;
    }
   case 6:
    {
     d13 = d2 * +96 / 2.5399999618530273;
     break L14;
     break;
    }
   case 7:
    {
     d13 = d2 * +96 / 25.399999618530273;
     break L14;
     break;
    }
   case 8:
    {
     d13 = d2 * +96;
     break L14;
     break;
    }
   case 9:
    {
     d13 = d2 * +96 / +72;
     break L14;
     break;
    }
   case 10:
    {
     d13 = d2 * +96 / +6;
     break L14;
     break;
    }
   case 1:
   case 5:
    {
     d13 = d2;
     break L14;
     break;
    }
   default:
    {
     d13 = +0;
     break L14;
    }
   }
  }
 } while (0);
 STACKTOP = i6;
 return +d13;
}
function __ZNK7WebCore16SVGLengthContext25convertValueFromUserUnitsEfNS_13SVGLengthModeENS_13SVGLengthTypeERi(i1, d2, i3, i4, i5) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, d8 = +0, d9 = +0, i10 = 0, i11 = 0, d12 = +0, d13 = +0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 L1 : do {
  switch (i4 | 0) {
  case 0:
   {
    HEAP32[i5 >> 2] = 9;
    d8 = +0;
    break;
   }
  case 2:
   {
    d9 = d2 * +100;
    i10 = i7 | 0;
    HEAPF32[i10 >> 2] = +0;
    i11 = i7 + 4 | 0;
    HEAPF32[i11 >> 2] = +0;
    if (!(__ZNK7WebCore16SVGLengthContext17determineViewportERNS_9FloatSizeE(i1, i7) | 0)) {
     HEAP32[i5 >> 2] = 9;
     d8 = +0;
     break L1;
    }
    if ((i3 | 0) == 0) {
     d8 = d9 / +HEAPF32[i10 >> 2] * +100;
     break L1;
    } else if ((i3 | 0) == 1) {
     d8 = d9 / +HEAPF32[i11 >> 2] * +100;
     break L1;
    } else if ((i3 | 0) == 2) {
     d12 = +HEAPF32[i10 >> 2];
     d13 = +HEAPF32[i11 >> 2];
     d8 = d9 / +Math_sqrt((d12 * d12 + d13 * d13) * +.5) * +100;
     break L1;
    } else {
     d8 = +0;
     break L1;
    }
    break;
   }
  case 3:
   {
    i11 = HEAP32[i1 >> 2] | 0;
    L12 : do {
     if ((i11 | 0) != 0) {
      i10 = i11 | 0;
      while (1) {
       i14 = (HEAP32[i10 + 12 >> 2] & 2048 | 0) == 0;
       i15 = i10 + 32 | 0;
       if (i14) {
        i16 = i15 | 0;
       } else {
        i16 = HEAP32[i15 >> 2] | 0;
       }
       if ((HEAP32[i16 >> 2] | 0) != 0) {
        break;
       }
       i10 = HEAP32[i10 + 16 >> 2] | 0;
       if ((i10 | 0) == 0) {
        break L12;
       }
      }
      if (i14) {
       i17 = i15 | 0;
      } else {
       i17 = HEAP32[i15 >> 2] | 0;
      }
      i10 = HEAP32[(HEAP32[i17 >> 2] | 0) + 36 >> 2] | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      d13 = +(__ZNK7WebCore11RenderStyle8fontSizeEv(i10) | 0);
      if (d13 != +0) {
       d8 = d2 / d13;
       break L1;
      } else {
       HEAP32[i5 >> 2] = 9;
       d8 = +0;
       break L1;
      }
     }
    } while (0);
    HEAP32[i5 >> 2] = 9;
    d8 = +0;
    break;
   }
  case 4:
   {
    i11 = HEAP32[i1 >> 2] | 0;
    L32 : do {
     if ((i11 | 0) != 0) {
      i10 = i11 | 0;
      while (1) {
       i18 = (HEAP32[i10 + 12 >> 2] & 2048 | 0) == 0;
       i19 = i10 + 32 | 0;
       if (i18) {
        i20 = i19 | 0;
       } else {
        i20 = HEAP32[i19 >> 2] | 0;
       }
       if ((HEAP32[i20 >> 2] | 0) != 0) {
        break;
       }
       i10 = HEAP32[i10 + 16 >> 2] | 0;
       if ((i10 | 0) == 0) {
        break L32;
       }
      }
      if (i18) {
       i21 = i19 | 0;
      } else {
       i21 = HEAP32[i19 >> 2] | 0;
      }
      i10 = HEAP32[(HEAP32[i21 >> 2] | 0) + 36 >> 2] | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      d13 = +Math_ceil(+HEAPF32[(__ZNK7WebCore11RenderStyle11fontMetricsEv(i10) | 0) + 20 >> 2]);
      if (d13 != +0) {
       d8 = d2 / d13;
       break L1;
      } else {
       HEAP32[i5 >> 2] = 9;
       d8 = +0;
       break L1;
      }
     }
    } while (0);
    HEAP32[i5 >> 2] = 9;
    d8 = +0;
    break;
   }
  case 6:
   {
    d8 = d2 * 2.5399999618530273 / +96;
    break;
   }
  case 7:
   {
    d8 = d2 * 25.399999618530273 / +96;
    break;
   }
  case 8:
   {
    d8 = d2 / +96;
    break;
   }
  case 9:
   {
    d8 = d2 * +72 / +96;
    break;
   }
  case 10:
   {
    d8 = d2 * +6 / +96;
    break;
   }
  case 1:
  case 5:
   {
    d8 = d2;
    break;
   }
  default:
   {
    d8 = +0;
   }
  }
 } while (0);
 STACKTOP = i6;
 return +d8;
}
function __ZNK7WebCore16SVGLengthContext17determineViewportERNS_9FloatSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7;
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 do {
  if (+HEAPF32[i1 + 12 >> 2] > +0) {
   if (+HEAPF32[i1 + 16 >> 2] <= +0) {
    break;
   }
   i12 = i1 + 12 | 0;
   i13 = HEAP32[i12 + 4 >> 2] | 0;
   i14 = i2;
   HEAP32[i14 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i14 + 4 >> 2] = i13;
   i11 = 1;
   STACKTOP = i3;
   return i11 | 0;
  }
 } while (0);
 i1 = __ZNK7WebCore10SVGElement24isOutermostSVGSVGElementEv(i10) | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if (i1) {
  __ZNK7WebCore13SVGSVGElement19currentViewportSizeEv(i5, i10);
  i5 = i2;
  i1 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i5 + 4 >> 2] = i1;
  i11 = 1;
  STACKTOP = i3;
  return i11 | 0;
 }
 i1 = __ZNK7WebCore10SVGElement15viewportElementEv(i10) | 0;
 if ((i1 | 0) == 0) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 i10 = HEAP32[i1 + 44 >> 2] | 0;
 i5 = HEAP32[__ZN7WebCore8SVGNames6svgTagE >> 2] | 0;
 do {
  if ((i10 | 0) != (i5 | 0)) {
   if ((HEAP32[i10 + 12 >> 2] | 0) != (HEAP32[i5 + 12 >> 2] | 0)) {
    i11 = 0;
    STACKTOP = i3;
    return i11 | 0;
   }
   if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    break;
   } else {
    i11 = 0;
   }
   STACKTOP = i3;
   return i11 | 0;
  }
 } while (0);
 i5 = i1;
 __ZNK7WebCore13SVGSVGElement18currentViewBoxRectEv(i6, i5);
 i1 = i6 + 8 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i2;
 HEAP32[i1 >> 2] = i6;
 HEAP32[i1 + 4 >> 2] = i10;
 do {
  if ((HEAP32[tempDoublePtr >> 2] = i6, +HEAPF32[tempDoublePtr >> 2]) > +0) {
   if ((HEAP32[tempDoublePtr >> 2] = i10, +HEAPF32[tempDoublePtr >> 2]) > +0) {
    i11 = 1;
   } else {
    break;
   }
   STACKTOP = i3;
   return i11 | 0;
  }
 } while (0);
 __ZNK7WebCore13SVGSVGElement19currentViewportSizeEv(i8, i5);
 i5 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i1 + 4 >> 2] = i5;
 i11 = 1;
 STACKTOP = i3;
 return i11 | 0;
}
function __ZN7WebCore16SVGLengthContext16resolveRectangleEPKNS_10SVGElementENS_12SVGUnitTypes11SVGUnitTypeERKNS_9FloatRectERKNS_9SVGLengthESB_SB_SB_(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, d12 = +0, d13 = +0, d14 = +0, d15 = +0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i10 = i9 | 0;
 i11 = i9 + 24 | 0;
 if ((i3 | 0) == 1) {
  HEAP32[i10 >> 2] = i2;
  _memset(i10 + 4 | 0, 0, 16) | 0;
  d12 = +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(i5, i10);
  d13 = +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(i6, i10);
  d14 = +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(i7, i10);
  d15 = +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(i8, i10);
  HEAPF32[i1 >> 2] = d12;
  HEAPF32[i1 + 4 >> 2] = d13;
  HEAPF32[i1 + 8 >> 2] = d14;
  HEAPF32[i1 + 12 >> 2] = d15;
  STACKTOP = i9;
  return;
 } else {
  HEAP32[i11 >> 2] = i2;
  i2 = i11 + 4 | 0;
  i10 = i4;
  HEAP32[i2 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i2 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
  HEAP32[i2 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
  HEAP32[i2 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
  d15 = +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(i5, i11);
  d14 = d15 + +HEAPF32[i4 >> 2];
  d15 = +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(i6, i11);
  d13 = d15 + +HEAPF32[i4 + 4 >> 2];
  d15 = +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(i7, i11);
  d12 = +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(i8, i11);
  HEAPF32[i1 >> 2] = d14;
  HEAPF32[i1 + 4 >> 2] = d13;
  HEAPF32[i1 + 8 >> 2] = d15;
  HEAPF32[i1 + 12 >> 2] = d12;
  STACKTOP = i9;
  return;
 }
}
function __ZNK7WebCore16SVGLengthContext30convertValueFromUserUnitsToEXSEfRi(i1, d2, i3) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0;
 i4 = HEAP32[i1 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) != 0) {
   i1 = i4 | 0;
   while (1) {
    i5 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
    i6 = i1 + 32 | 0;
    if (i5) {
     i7 = i6 | 0;
    } else {
     i7 = HEAP32[i6 >> 2] | 0;
    }
    if ((HEAP32[i7 >> 2] | 0) != 0) {
     break;
    }
    i1 = HEAP32[i1 + 16 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break L1;
    }
   }
   if (i5) {
    i8 = i6 | 0;
   } else {
    i8 = HEAP32[i6 >> 2] | 0;
   }
   i1 = HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   d9 = +Math_ceil(+HEAPF32[(__ZNK7WebCore11RenderStyle11fontMetricsEv(i1) | 0) + 20 >> 2]);
   if (d9 != +0) {
    d10 = d2 / d9;
    return +d10;
   } else {
    HEAP32[i3 >> 2] = 9;
    d10 = +0;
    return +d10;
   }
  }
 } while (0);
 HEAP32[i3 >> 2] = 9;
 d10 = +0;
 return +d10;
}
function __ZNK7WebCore16SVGLengthContext30convertValueFromUserUnitsToEMSEfRi(i1, d2, i3) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0;
 i4 = HEAP32[i1 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) != 0) {
   i1 = i4 | 0;
   while (1) {
    i5 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
    i6 = i1 + 32 | 0;
    if (i5) {
     i7 = i6 | 0;
    } else {
     i7 = HEAP32[i6 >> 2] | 0;
    }
    if ((HEAP32[i7 >> 2] | 0) != 0) {
     break;
    }
    i1 = HEAP32[i1 + 16 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break L1;
    }
   }
   if (i5) {
    i8 = i6 | 0;
   } else {
    i8 = HEAP32[i6 >> 2] | 0;
   }
   i1 = HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   d9 = +(__ZNK7WebCore11RenderStyle8fontSizeEv(i1) | 0);
   if (d9 != +0) {
    d10 = d2 / d9;
    return +d10;
   } else {
    HEAP32[i3 >> 2] = 9;
    d10 = +0;
    return +d10;
   }
  }
 } while (0);
 HEAP32[i3 >> 2] = 9;
 d10 = +0;
 return +d10;
}
function __ZNK7WebCore16SVGLengthContext37convertValueFromUserUnitsToPercentageEfNS_13SVGLengthModeERi(i1, d2, i3, i4) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0, d11 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i6 | 0;
 HEAPF32[i7 >> 2] = +0;
 i8 = i6 + 4 | 0;
 HEAPF32[i8 >> 2] = +0;
 if (!(__ZNK7WebCore16SVGLengthContext17determineViewportERNS_9FloatSizeE(i1, i6) | 0)) {
  HEAP32[i4 >> 2] = 9;
  d9 = +0;
  STACKTOP = i5;
  return +d9;
 }
 if ((i3 | 0) == 0) {
  d9 = d2 / +HEAPF32[i7 >> 2] * +100;
  STACKTOP = i5;
  return +d9;
 } else if ((i3 | 0) == 1) {
  d9 = d2 / +HEAPF32[i8 >> 2] * +100;
  STACKTOP = i5;
  return +d9;
 } else if ((i3 | 0) == 2) {
  d10 = +HEAPF32[i7 >> 2];
  d11 = +HEAPF32[i8 >> 2];
  d9 = d2 / +Math_sqrt((d10 * d10 + d11 * d11) * +.5) * +100;
  STACKTOP = i5;
  return +d9;
 } else {
  d9 = +0;
  STACKTOP = i5;
  return +d9;
 }
 return +0;
}
function __ZNK7WebCore16SVGLengthContext30convertValueFromEXSToUserUnitsEfRi(i1, d2, i3) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0;
 i4 = HEAP32[i1 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) != 0) {
   i1 = i4 | 0;
   while (1) {
    i5 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
    i6 = i1 + 32 | 0;
    if (i5) {
     i7 = i6 | 0;
    } else {
     i7 = HEAP32[i6 >> 2] | 0;
    }
    if ((HEAP32[i7 >> 2] | 0) != 0) {
     break;
    }
    i1 = HEAP32[i1 + 16 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break L1;
    }
   }
   if (i5) {
    i8 = i6 | 0;
   } else {
    i8 = HEAP32[i6 >> 2] | 0;
   }
   i1 = HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   d9 = +Math_ceil(+HEAPF32[(__ZNK7WebCore11RenderStyle11fontMetricsEv(i1) | 0) + 20 >> 2]) * d2;
   return +d9;
  }
 } while (0);
 HEAP32[i3 >> 2] = 9;
 d9 = +0;
 return +d9;
}
function __ZNK7WebCore16SVGLengthContext37convertValueFromPercentageToUserUnitsEfNS_13SVGLengthModeERi(i1, d2, i3, i4) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0, d11 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i6 | 0;
 HEAPF32[i7 >> 2] = +0;
 i8 = i6 + 4 | 0;
 HEAPF32[i8 >> 2] = +0;
 do {
  if (__ZNK7WebCore16SVGLengthContext17determineViewportERNS_9FloatSizeE(i1, i6) | 0) {
   if ((i3 | 0) == 0) {
    d9 = +HEAPF32[i7 >> 2] * d2;
    break;
   } else if ((i3 | 0) == 1) {
    d9 = +HEAPF32[i8 >> 2] * d2;
    break;
   } else if ((i3 | 0) == 2) {
    d10 = +HEAPF32[i7 >> 2];
    d11 = +HEAPF32[i8 >> 2];
    d9 = +Math_sqrt((d10 * d10 + d11 * d11) * +.5) * d2;
    break;
   } else {
    d9 = +0;
    break;
   }
  } else {
   HEAP32[i4 >> 2] = 9;
   d9 = +0;
  }
 } while (0);
 STACKTOP = i5;
 return +d9;
}
function __ZNK7WebCore16SVGLengthContext30convertValueFromEMSToUserUnitsEfRi(i1, d2, i3) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0;
 i4 = HEAP32[i1 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) != 0) {
   i1 = i4 | 0;
   while (1) {
    i5 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
    i6 = i1 + 32 | 0;
    if (i5) {
     i7 = i6 | 0;
    } else {
     i7 = HEAP32[i6 >> 2] | 0;
    }
    if ((HEAP32[i7 >> 2] | 0) != 0) {
     break;
    }
    i1 = HEAP32[i1 + 16 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break L1;
    }
   }
   if (i5) {
    i8 = i6 | 0;
   } else {
    i8 = HEAP32[i6 >> 2] | 0;
   }
   i1 = HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   d9 = +(__ZNK7WebCore11RenderStyle8fontSizeEv(i1) | 0) * d2;
   return +d9;
  }
 } while (0);
 HEAP32[i3 >> 2] = 9;
 d9 = +0;
 return +d9;
}
function __ZN7WebCore16SVGLengthContext12resolvePointEPKNS_10SVGElementENS_12SVGUnitTypes11SVGUnitTypeERKNS_9SVGLengthES8_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, d8 = +0, d9 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 if ((i3 | 0) == 1) {
  HEAP32[i7 >> 2] = i2;
  _memset(i7 + 4 | 0, 0, 16) | 0;
  d8 = +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(i4, i7);
  d9 = +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(i5, i7);
  HEAPF32[i1 >> 2] = d8;
  HEAPF32[i1 + 4 >> 2] = d9;
  STACKTOP = i6;
  return;
 } else {
  d9 = +__ZNK7WebCore9SVGLength17valueAsPercentageEv(i4);
  d8 = +__ZNK7WebCore9SVGLength17valueAsPercentageEv(i5);
  HEAPF32[i1 >> 2] = d9;
  HEAPF32[i1 + 4 >> 2] = d8;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore16SVGLengthContext13resolveLengthEPKNS_10SVGElementENS_12SVGUnitTypes11SVGUnitTypeERKNS_9SVGLengthE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, d6 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 if ((i2 | 0) == 1) {
  HEAP32[i5 >> 2] = i1;
  _memset(i5 + 4 | 0, 0, 16) | 0;
  d6 = +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(i3, i5);
  STACKTOP = i4;
  return +d6;
 } else {
  d6 = +__ZNK7WebCore9SVGLength17valueAsPercentageEv(i3);
  STACKTOP = i4;
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
function __ZN7WebCore16SVGLengthContextC2EPKNS_10SVGElementERKNS_9FloatRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = i2;
 i2 = i1 + 4 | 0;
 i1 = i3;
 HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 return;
}
function __ZN7WebCore16SVGLengthContextC1EPKNS_10SVGElementERKNS_9FloatRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = i2;
 i2 = i1 + 4 | 0;
 i1 = i3;
 HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore16SVGLengthContextC2EPKNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 _memset(i1 + 4 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore16SVGLengthContextC1EPKNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 _memset(i1 + 4 | 0, 0, 16) | 0;
 return;
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
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore16SVGLengthContextC2EPKNS_10SVGElementE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore16SVGLengthContextC2EPKNS_10SVGElementERKNS_9FloatRectE,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_ceilf": _ceilf, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_free": _free, "_sqrtf": _sqrtf, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore8SVGNames6svgTagE": __ZN7WebCore8SVGNames6svgTagE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore16SVGLengthContext23convertValueToUserUnitsEfNS_13SVGLengthModeENS_13SVGLengthTypeERi","__ZN7WebCore16SVGLengthContextC2EPKNS_10SVGElementERKNS_9FloatRectE","_strlen","__ZNK7WebCore16SVGLengthContext30convertValueFromUserUnitsToEMSEfRi","_memset","__ZNK7WebCore16SVGLengthContext30convertValueFromUserUnitsToEXSEfRi","__ZN7WebCore16SVGLengthContextC2EPKNS_10SVGElementE","__ZNK7WebCore16SVGLengthContext30convertValueFromEMSToUserUnitsEfRi","__ZNK7WebCore16SVGLengthContext25convertValueFromUserUnitsEfNS_13SVGLengthModeENS_13SVGLengthTypeERi","__ZN7WebCore16SVGLengthContext16resolveRectangleEPKNS_10SVGElementENS_12SVGUnitTypes11SVGUnitTypeERKNS_9FloatRectERKNS_9SVGLengthESB_SB_SB_","_memcpy","__ZNK7WebCore16SVGLengthContext37convertValueFromPercentageToUserUnitsEfNS_13SVGLengthModeERi","__ZN7WebCore16SVGLengthContext12resolvePointEPKNS_10SVGElementENS_12SVGUnitTypes11SVGUnitTypeERKNS_9SVGLengthES8_","__ZN7WebCore16SVGLengthContext13resolveLengthEPKNS_10SVGElementENS_12SVGUnitTypes11SVGUnitTypeERKNS_9SVGLengthE","__ZNK7WebCore16SVGLengthContext30convertValueFromEXSToUserUnitsEfRi","__ZNK7WebCore16SVGLengthContext37convertValueFromUserUnitsToPercentageEfNS_13SVGLengthModeERi","__ZNK7WebCore16SVGLengthContext17determineViewportERNS_9FloatSizeE"]

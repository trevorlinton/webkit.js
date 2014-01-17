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
var __ZN7WebCore19RenderTextLineBoxesC1Ev;
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
function invoke_iifi(index,a1,a2,a3) {
  try {
    return Module["dynCall_iifi"](index,a1,a2,a3);
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_iifi=env.invoke_iifi;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCoreL48createVisiblePositionAfterAdjustingOffsetForBiDiERKNS_13InlineTextBoxEiNS_26ShouldAffinityBeDownstreamE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i5 = (i3 | 0) != 0;
 do {
  if (i5) {
   if ((HEAPU16[i2 + 48 >> 1] | 0) >>> 0 <= i3 >>> 0) {
    break;
   }
   i6 = (HEAP32[i2 + 44 >> 2] | 0) + i3 | 0;
   if ((i4 | 0) == 2) {
    i7 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 88 >> 2] & 1](i2 | 0) | 0) >= (i6 | 0) | 0;
   } else if ((i4 | 0) == 1) {
    i7 = 0;
   } else {
    i7 = 1;
   }
   __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, HEAP32[i2 + 16 >> 2] | 0, i6, i7);
   return;
  }
 } while (0);
 i7 = i2 | 0;
 i3 = i2 + 32 | 0;
 if (i5 ^ (HEAP32[i3 >> 2] & 4 | 0) != 0) {
  i5 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(i7) | 0;
  i6 = (i5 | 0) != 0;
  if (i6) {
   i8 = HEAP32[i3 >> 2] | 0;
   if (((i8 ^ HEAP32[i5 + 32 >> 2]) & 252 | 0) == 0) {
    i9 = i8;
   } else {
    i10 = 49;
   }
  } else {
   i10 = 49;
  }
  do {
   if ((i10 | 0) == 49) {
    i8 = i2 + 16 | 0;
    i11 = (HEAP32[(HEAP32[(__ZNK7WebCore12RenderObject15containingBlockEv(HEAP32[i8 >> 2] | 0) | 0) + 36 >> 2] | 0) + 40 >> 2] | 0) >>> 30 & 1;
    i12 = HEAP32[i3 >> 2] | 0;
    i13 = i12 >>> 2;
    if ((i11 | 0) == (i13 & 1 ^ 1 | 0)) {
     i9 = i12;
     break;
    }
    do {
     if (i6) {
      i11 = (HEAP32[i5 + 32 >> 2] | 0) >>> 2 & 63;
      i14 = i13 & 63;
      if ((i11 & 255) >>> 0 > (i14 & 255) >>> 0) {
       i15 = i5;
      } else {
       if ((i11 & 255) >>> 0 < (i14 & 255) >>> 0) {
        i16 = i7;
        break;
       }
       i14 = i2;
       i11 = HEAP32[i14 >> 2] | 0;
       if ((i12 & 4 | 0) == 0) {
        i17 = FUNCTION_TABLE_ii[HEAP32[i11 + 88 >> 2] & 1](i7) | 0;
       } else {
        i17 = FUNCTION_TABLE_ii[HEAP32[i11 + 92 >> 2] & 1](i7) | 0;
       }
       if ((i4 | 0) == 1) {
        i18 = 0;
       } else if ((i4 | 0) == 2) {
        i18 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 88 >> 2] & 1](i7) | 0) >= (i17 | 0) | 0;
       } else {
        i18 = 1;
       }
       __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, HEAP32[i8 >> 2] | 0, i17, i18);
       return;
      }
      while (1) {
       i14 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(i15) | 0;
       if ((i14 | 0) == 0) {
        break;
       }
       if (((HEAP32[i14 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 > ((HEAP32[i3 >> 2] | 0) >>> 2 & 255 & 63) >>> 0) {
        i15 = i14;
       } else {
        break;
       }
      }
      i14 = i15;
      i11 = HEAP32[i14 >> 2] | 0;
      if ((HEAP32[i15 + 32 >> 2] & 4 | 0) == 0) {
       i19 = FUNCTION_TABLE_ii[HEAP32[i11 + 88 >> 2] & 1](i15) | 0;
      } else {
       i19 = FUNCTION_TABLE_ii[HEAP32[i11 + 92 >> 2] & 1](i15) | 0;
      }
      if ((i4 | 0) == 1) {
       i20 = 0;
      } else if ((i4 | 0) == 2) {
       i20 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 88 >> 2] & 1](i15) | 0) >= (i19 | 0) | 0;
      } else {
       i20 = 1;
      }
      __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, HEAP32[i15 + 16 >> 2] | 0, i19, i20);
      return;
     } else {
      i16 = i7;
     }
    } while (0);
    while (1) {
     i8 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(i16) | 0;
     if ((i8 | 0) == 0) {
      i10 = 70;
      break;
     }
     i12 = HEAP32[i3 >> 2] | 0;
     if (((HEAP32[i8 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 < (i12 >>> 2 & 255 & 63) >>> 0) {
      i21 = i12;
      break;
     } else {
      i16 = i8;
     }
    }
    if ((i10 | 0) == 70) {
     i21 = HEAP32[i3 >> 2] | 0;
    }
    i8 = i16;
    i12 = HEAP32[i8 >> 2] | 0;
    if ((i21 & 4 | 0) == 0) {
     i22 = FUNCTION_TABLE_ii[HEAP32[i12 + 88 >> 2] & 1](i16) | 0;
    } else {
     i22 = FUNCTION_TABLE_ii[HEAP32[i12 + 92 >> 2] & 1](i16) | 0;
    }
    if ((i4 | 0) == 1) {
     i23 = 0;
    } else if ((i4 | 0) == 2) {
     i23 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 88 >> 2] & 1](i16) | 0) >= (i22 | 0) | 0;
    } else {
     i23 = 1;
    }
    __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, HEAP32[i16 + 16 >> 2] | 0, i22, i23);
    return;
   }
  } while (0);
  i23 = i2;
  i22 = HEAP32[i23 >> 2] | 0;
  if ((i9 & 4 | 0) == 0) {
   i24 = FUNCTION_TABLE_ii[HEAP32[i22 + 92 >> 2] & 1](i7) | 0;
  } else {
   i24 = FUNCTION_TABLE_ii[HEAP32[i22 + 88 >> 2] & 1](i7) | 0;
  }
  if ((i4 | 0) == 1) {
   i25 = 0;
  } else if ((i4 | 0) == 2) {
   i25 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i23 >> 2] | 0) + 88 >> 2] & 1](i7) | 0) >= (i24 | 0) | 0;
  } else {
   i25 = 1;
  }
  __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, HEAP32[i2 + 16 >> 2] | 0, i24, i25);
  return;
 } else {
  i25 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(i7) | 0;
  i24 = (i25 | 0) != 0;
  if (i24) {
   i23 = HEAP32[i3 >> 2] | 0;
   if (((i23 ^ HEAP32[i25 + 32 >> 2]) & 252 | 0) == 0) {
    i26 = i23;
   } else {
    i10 = 10;
   }
  } else {
   i10 = 10;
  }
  do {
   if ((i10 | 0) == 10) {
    i23 = i2 + 16 | 0;
    i22 = (HEAP32[(HEAP32[(__ZNK7WebCore12RenderObject15containingBlockEv(HEAP32[i23 >> 2] | 0) | 0) + 36 >> 2] | 0) + 40 >> 2] | 0) >>> 30 & 1;
    i9 = HEAP32[i3 >> 2] | 0;
    i16 = i9 >>> 2;
    if ((i22 | 0) == (i16 & 1 ^ 1 | 0)) {
     i26 = i9;
     break;
    }
    do {
     if (i24) {
      i22 = (HEAP32[i25 + 32 >> 2] | 0) >>> 2 & 63;
      i21 = i16 & 63;
      if ((i22 & 255) >>> 0 > (i21 & 255) >>> 0) {
       i27 = i25;
      } else {
       if ((i22 & 255) >>> 0 < (i21 & 255) >>> 0) {
        i28 = i7;
        break;
       }
       i21 = i2;
       i22 = HEAP32[i21 >> 2] | 0;
       if ((i9 & 4 | 0) == 0) {
        i29 = FUNCTION_TABLE_ii[HEAP32[i22 + 92 >> 2] & 1](i7) | 0;
       } else {
        i29 = FUNCTION_TABLE_ii[HEAP32[i22 + 88 >> 2] & 1](i7) | 0;
       }
       if ((i4 | 0) == 1) {
        i30 = 0;
       } else if ((i4 | 0) == 2) {
        i30 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 88 >> 2] & 1](i7) | 0) >= (i29 | 0) | 0;
       } else {
        i30 = 1;
       }
       __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, HEAP32[i23 >> 2] | 0, i29, i30);
       return;
      }
      while (1) {
       i21 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(i27) | 0;
       if ((i21 | 0) == 0) {
        break;
       }
       if (((HEAP32[i21 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 > ((HEAP32[i3 >> 2] | 0) >>> 2 & 255 & 63) >>> 0) {
        i27 = i21;
       } else {
        break;
       }
      }
      i21 = i27;
      i22 = HEAP32[i21 >> 2] | 0;
      if ((HEAP32[i27 + 32 >> 2] & 4 | 0) == 0) {
       i31 = FUNCTION_TABLE_ii[HEAP32[i22 + 92 >> 2] & 1](i27) | 0;
      } else {
       i31 = FUNCTION_TABLE_ii[HEAP32[i22 + 88 >> 2] & 1](i27) | 0;
      }
      if ((i4 | 0) == 1) {
       i32 = 0;
      } else if ((i4 | 0) == 2) {
       i32 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 88 >> 2] & 1](i27) | 0) >= (i31 | 0) | 0;
      } else {
       i32 = 1;
      }
      __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, HEAP32[i27 + 16 >> 2] | 0, i31, i32);
      return;
     } else {
      i28 = i7;
     }
    } while (0);
    while (1) {
     i23 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(i28) | 0;
     if ((i23 | 0) == 0) {
      i10 = 31;
      break;
     }
     i9 = HEAP32[i3 >> 2] | 0;
     if (((HEAP32[i23 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 < (i9 >>> 2 & 255 & 63) >>> 0) {
      i33 = i9;
      break;
     } else {
      i28 = i23;
     }
    }
    if ((i10 | 0) == 31) {
     i33 = HEAP32[i3 >> 2] | 0;
    }
    i23 = i28;
    i9 = HEAP32[i23 >> 2] | 0;
    if ((i33 & 4 | 0) == 0) {
     i34 = FUNCTION_TABLE_ii[HEAP32[i9 + 92 >> 2] & 1](i28) | 0;
    } else {
     i34 = FUNCTION_TABLE_ii[HEAP32[i9 + 88 >> 2] & 1](i28) | 0;
    }
    if ((i4 | 0) == 1) {
     i35 = 0;
    } else if ((i4 | 0) == 2) {
     i35 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i23 >> 2] | 0) + 88 >> 2] & 1](i28) | 0) >= (i34 | 0) | 0;
    } else {
     i35 = 1;
    }
    __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, HEAP32[i28 + 16 >> 2] | 0, i34, i35);
    return;
   }
  } while (0);
  i35 = i2;
  i34 = HEAP32[i35 >> 2] | 0;
  if ((i26 & 4 | 0) == 0) {
   i36 = FUNCTION_TABLE_ii[HEAP32[i34 + 88 >> 2] & 1](i7) | 0;
  } else {
   i36 = FUNCTION_TABLE_ii[HEAP32[i34 + 92 >> 2] & 1](i7) | 0;
  }
  if ((i4 | 0) == 1) {
   i37 = 0;
  } else if ((i4 | 0) == 2) {
   i37 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i35 >> 2] | 0) + 88 >> 2] & 1](i7) | 0) >= (i36 | 0) | 0;
  } else {
   i37 = 1;
  }
  __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, HEAP32[i2 + 16 >> 2] | 0, i36, i37);
  return;
 }
}
function __ZNK7WebCore19RenderTextLineBoxes21absoluteRectsForRangeERKNS_10RenderTextEjjbPb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, d62 = +0, d63 = +0, d64 = +0, d65 = +0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i9 = i8 | 0;
 i10 = i8 + 16 | 0;
 i11 = i8 + 32 | 0;
 i12 = i11 | 0;
 i13 = i11;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i17 = i16 | 0;
 i18 = i16;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i21 = i20 | 0;
 i22 = i20;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i25 = i24 | 0;
 i26 = i24;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i28 = i1 | 0;
 HEAP32[i28 >> 2] = 0;
 i29 = i1 + 4 | 0;
 HEAP32[i29 >> 2] = 0;
 i30 = i1 + 8 | 0;
 HEAP32[i30 >> 2] = 0;
 i31 = HEAP32[i2 >> 2] | 0;
 if ((i31 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i2 = i20 + 8 | 0;
 i20 = i2;
 i32 = i3 | 0;
 i3 = i2;
 i2 = i22 + 4 | 0;
 i33 = i24 + 8 | 0;
 i34 = i26 + 12 | 0;
 i35 = i22 + 12 | 0;
 i36 = i24 + 16 | 0;
 i37 = i26 + 20 | 0;
 i38 = i24 + 24 | 0;
 i24 = i26 + 28 | 0;
 i39 = i23;
 i40 = i23;
 i41 = i14 + 8 | 0;
 i42 = i11 + 8 | 0;
 i43 = i14 | 0;
 i44 = i11;
 i11 = i14 + 12 | 0;
 i45 = i13 + 12 | 0;
 i46 = i14 + 4 | 0;
 i47 = i13 + 4 | 0;
 i48 = i16 + 8 | 0;
 i49 = i18 + 12 | 0;
 i50 = i16 + 16 | 0;
 i51 = i18 + 20 | 0;
 i52 = i16 + 24 | 0;
 i16 = i18 + 28 | 0;
 i53 = i15;
 i54 = i15;
 i55 = i31;
 i31 = 0;
 i56 = 0;
 while (1) {
  i57 = HEAP32[i55 + 44 >> 2] | 0;
  do {
   if (i57 >>> 0 < i4 >>> 0) {
    i58 = 18;
   } else {
    i59 = HEAP16[i55 + 48 >> 1] | 0;
    if (i59 << 16 >> 16 == 0) {
     i60 = i57;
    } else {
     i60 = i57 - 1 + (i59 & 65535) | 0;
    }
    if (i60 >>> 0 >= i5 >>> 0) {
     i58 = 18;
     break;
    }
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i55 >> 2] | 0) + 68 >> 2] & 1](i13, i55);
    do {
     if (i6) {
      FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i55 >> 2] | 0) + 120 >> 2] & 1](i14, i55, i4, i5);
      if ((HEAP32[i55 + 32 >> 2] & 2048 | 0) == 0) {
       HEAPF32[i42 >> 2] = +(HEAP32[i41 >> 2] | 0);
       HEAPF32[i44 >> 2] = +(HEAP32[i43 >> 2] | 0);
       break;
      } else {
       HEAPF32[i45 >> 2] = +(HEAP32[i11 >> 2] | 0);
       HEAPF32[i47 >> 2] = +(HEAP32[i46 >> 2] | 0);
       break;
      }
     }
    } while (0);
    i59 = HEAP32[i12 >> 2] | 0;
    i61 = HEAP32[i12 + 4 >> 2] | 0;
    HEAP32[i17 >> 2] = i59;
    HEAP32[i17 + 4 >> 2] = i61;
    d62 = (HEAP32[tempDoublePtr >> 2] = i59, +HEAPF32[tempDoublePtr >> 2]);
    d63 = d62 + +HEAPF32[i42 >> 2];
    d64 = +HEAPF32[i47 >> 2];
    HEAPF32[i48 >> 2] = d63;
    HEAPF32[i49 >> 2] = d64;
    d65 = d64 + +HEAPF32[i45 >> 2];
    HEAPF32[i50 >> 2] = d63;
    HEAPF32[i51 >> 2] = d65;
    HEAPF32[i52 >> 2] = d62;
    HEAPF32[i16 >> 2] = d65;
    __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i19, i32, i18, 0, 0, i7);
    __ZNK7WebCore9FloatQuad11boundingBoxEv(i9, i19);
    __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i15, i9);
    if ((i31 | 0) != (HEAP32[i29 >> 2] | 0)) {
     i59 = i56 + (i31 << 4) | 0;
     HEAP32[i59 >> 2] = HEAP32[i54 >> 2];
     HEAP32[i59 + 4 >> 2] = HEAP32[i54 + 4 >> 2];
     HEAP32[i59 + 8 >> 2] = HEAP32[i54 + 8 >> 2];
     HEAP32[i59 + 12 >> 2] = HEAP32[i54 + 12 >> 2];
     i59 = (HEAP32[i30 >> 2] | 0) + 1 | 0;
     HEAP32[i30 >> 2] = i59;
     i66 = i59;
     i67 = i56;
     break;
    }
    i59 = i31 + 1 | 0;
    do {
     if (i56 >>> 0 > i15 >>> 0) {
      i58 = 15;
     } else {
      if ((i56 + (i31 << 4) | 0) >>> 0 <= i15 >>> 0) {
       i58 = 15;
       break;
      }
      __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i59);
      i61 = HEAP32[i28 >> 2] | 0;
      i68 = i61 + (i53 - i56 >> 4 << 4) | 0;
      i69 = i61;
     }
    } while (0);
    if ((i58 | 0) == 15) {
     i58 = 0;
     __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i59);
     i68 = i15;
     i69 = HEAP32[i28 >> 2] | 0;
    }
    i61 = HEAP32[i30 >> 2] | 0;
    i70 = i69 + (i61 << 4) | 0;
    i71 = i68;
    HEAP32[i70 >> 2] = HEAP32[i71 >> 2];
    HEAP32[i70 + 4 >> 2] = HEAP32[i71 + 4 >> 2];
    HEAP32[i70 + 8 >> 2] = HEAP32[i71 + 8 >> 2];
    HEAP32[i70 + 12 >> 2] = HEAP32[i71 + 12 >> 2];
    i71 = i61 + 1 | 0;
    HEAP32[i30 >> 2] = i71;
    i66 = i71;
    i67 = i69;
   }
  } while (0);
  do {
   if ((i58 | 0) == 18) {
    i58 = 0;
    __ZN7WebCoreL19localQuadForTextBoxERKNS_13InlineTextBoxEjjb(i22, i55, i4, i5, i6);
    if (__ZNK7WebCore9FloatSize6isZeroEv(i20) | 0) {
     i66 = i31;
     i67 = i56;
     break;
    }
    i57 = HEAP32[i21 >> 2] | 0;
    i71 = HEAP32[i21 + 4 >> 2] | 0;
    HEAP32[i25 >> 2] = i57;
    HEAP32[i25 + 4 >> 2] = i71;
    d65 = (HEAP32[tempDoublePtr >> 2] = i57, +HEAPF32[tempDoublePtr >> 2]);
    d62 = d65 + +HEAPF32[i3 >> 2];
    d63 = +HEAPF32[i2 >> 2];
    HEAPF32[i33 >> 2] = d62;
    HEAPF32[i34 >> 2] = d63;
    d64 = d63 + +HEAPF32[i35 >> 2];
    HEAPF32[i36 >> 2] = d62;
    HEAPF32[i37 >> 2] = d64;
    HEAPF32[i38 >> 2] = d65;
    HEAPF32[i24 >> 2] = d64;
    __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i27, i32, i26, 0, 0, i7);
    __ZNK7WebCore9FloatQuad11boundingBoxEv(i10, i27);
    __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i23, i10);
    if ((i31 | 0) != (HEAP32[i29 >> 2] | 0)) {
     i57 = i56 + (i31 << 4) | 0;
     HEAP32[i57 >> 2] = HEAP32[i40 >> 2];
     HEAP32[i57 + 4 >> 2] = HEAP32[i40 + 4 >> 2];
     HEAP32[i57 + 8 >> 2] = HEAP32[i40 + 8 >> 2];
     HEAP32[i57 + 12 >> 2] = HEAP32[i40 + 12 >> 2];
     i57 = (HEAP32[i30 >> 2] | 0) + 1 | 0;
     HEAP32[i30 >> 2] = i57;
     i66 = i57;
     i67 = i56;
     break;
    }
    i57 = i31 + 1 | 0;
    do {
     if (i56 >>> 0 > i23 >>> 0) {
      i58 = 23;
     } else {
      if ((i56 + (i31 << 4) | 0) >>> 0 <= i23 >>> 0) {
       i58 = 23;
       break;
      }
      __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i57);
      i71 = HEAP32[i28 >> 2] | 0;
      i72 = i71 + (i39 - i56 >> 4 << 4) | 0;
      i73 = i71;
     }
    } while (0);
    if ((i58 | 0) == 23) {
     i58 = 0;
     __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i57);
     i72 = i23;
     i73 = HEAP32[i28 >> 2] | 0;
    }
    i59 = HEAP32[i30 >> 2] | 0;
    i71 = i73 + (i59 << 4) | 0;
    i61 = i72;
    HEAP32[i71 >> 2] = HEAP32[i61 >> 2];
    HEAP32[i71 + 4 >> 2] = HEAP32[i61 + 4 >> 2];
    HEAP32[i71 + 8 >> 2] = HEAP32[i61 + 8 >> 2];
    HEAP32[i71 + 12 >> 2] = HEAP32[i61 + 12 >> 2];
    i61 = i59 + 1 | 0;
    HEAP32[i30 >> 2] = i61;
    i66 = i61;
    i67 = i73;
   }
  } while (0);
  i61 = HEAP32[i55 + 40 >> 2] | 0;
  if ((i61 | 0) == 0) {
   break;
  } else {
   i55 = i61;
   i31 = i66;
   i56 = i67;
  }
 }
 STACKTOP = i8;
 return;
}
function __ZNK7WebCore19RenderTextLineBoxes21absoluteQuadsForRangeERKNS_10RenderTextEjjbPb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, d58 = +0, d59 = +0, d60 = +0, d61 = +0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i8 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i15 = i14 | 0;
 i16 = i14;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = i17 | 0;
 i19 = i17;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i22 = i21 | 0;
 i23 = i21;
 i24 = i1 | 0;
 HEAP32[i24 >> 2] = 0;
 i25 = i1 + 4 | 0;
 HEAP32[i25 >> 2] = 0;
 i26 = i1 + 8 | 0;
 HEAP32[i26 >> 2] = 0;
 i27 = HEAP32[i2 >> 2] | 0;
 if ((i27 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i2 = i17 + 8 | 0;
 i17 = i2;
 i28 = i3 | 0;
 i3 = i2;
 i2 = i19 + 4 | 0;
 i29 = i21 + 8 | 0;
 i30 = i23 + 12 | 0;
 i31 = i19 + 12 | 0;
 i32 = i21 + 16 | 0;
 i33 = i23 + 20 | 0;
 i34 = i21 + 24 | 0;
 i21 = i23 + 28 | 0;
 i35 = i20;
 i36 = i20;
 i37 = i12 + 8 | 0;
 i38 = i9 + 8 | 0;
 i39 = i12 | 0;
 i40 = i9;
 i9 = i12 + 12 | 0;
 i41 = i11 + 12 | 0;
 i42 = i12 + 4 | 0;
 i43 = i11 + 4 | 0;
 i44 = i14 + 8 | 0;
 i45 = i16 + 12 | 0;
 i46 = i14 + 16 | 0;
 i47 = i16 + 20 | 0;
 i48 = i14 + 24 | 0;
 i14 = i16 + 28 | 0;
 i49 = i13;
 i50 = i13;
 i51 = i27;
 i27 = 0;
 i52 = 0;
 while (1) {
  i53 = HEAP32[i51 + 44 >> 2] | 0;
  do {
   if (i53 >>> 0 < i4 >>> 0) {
    i54 = 18;
   } else {
    i55 = HEAP16[i51 + 48 >> 1] | 0;
    if (i55 << 16 >> 16 == 0) {
     i56 = i53;
    } else {
     i56 = i53 - 1 + (i55 & 65535) | 0;
    }
    if (i56 >>> 0 >= i5 >>> 0) {
     i54 = 18;
     break;
    }
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i51 >> 2] | 0) + 68 >> 2] & 1](i11, i51);
    do {
     if (i6) {
      FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i51 >> 2] | 0) + 120 >> 2] & 1](i12, i51, i4, i5);
      if ((HEAP32[i51 + 32 >> 2] & 2048 | 0) == 0) {
       HEAPF32[i38 >> 2] = +(HEAP32[i37 >> 2] | 0);
       HEAPF32[i40 >> 2] = +(HEAP32[i39 >> 2] | 0);
       break;
      } else {
       HEAPF32[i41 >> 2] = +(HEAP32[i9 >> 2] | 0);
       HEAPF32[i43 >> 2] = +(HEAP32[i42 >> 2] | 0);
       break;
      }
     }
    } while (0);
    i55 = HEAP32[i10 >> 2] | 0;
    i57 = HEAP32[i10 + 4 >> 2] | 0;
    HEAP32[i15 >> 2] = i55;
    HEAP32[i15 + 4 >> 2] = i57;
    d58 = (HEAP32[tempDoublePtr >> 2] = i55, +HEAPF32[tempDoublePtr >> 2]);
    d59 = d58 + +HEAPF32[i38 >> 2];
    d60 = +HEAPF32[i43 >> 2];
    HEAPF32[i44 >> 2] = d59;
    HEAPF32[i45 >> 2] = d60;
    d61 = d60 + +HEAPF32[i41 >> 2];
    HEAPF32[i46 >> 2] = d59;
    HEAPF32[i47 >> 2] = d61;
    HEAPF32[i48 >> 2] = d58;
    HEAPF32[i14 >> 2] = d61;
    __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i13, i28, i16, 0, 0, i7);
    if ((i27 | 0) != (HEAP32[i25 >> 2] | 0)) {
     _memcpy(i52 + (i27 << 5) | 0, i50 | 0, 32) | 0;
     i55 = (HEAP32[i26 >> 2] | 0) + 1 | 0;
     HEAP32[i26 >> 2] = i55;
     i62 = i55;
     i63 = i52;
     break;
    }
    i55 = i27 + 1 | 0;
    do {
     if (i52 >>> 0 > i13 >>> 0) {
      i54 = 15;
     } else {
      if ((i52 + (i27 << 5) | 0) >>> 0 <= i13 >>> 0) {
       i54 = 15;
       break;
      }
      __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i55);
      i57 = HEAP32[i24 >> 2] | 0;
      i64 = i57 + (i49 - i52 >> 5 << 5) | 0;
      i65 = i57;
     }
    } while (0);
    if ((i54 | 0) == 15) {
     i54 = 0;
     __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i55);
     i64 = i13;
     i65 = HEAP32[i24 >> 2] | 0;
    }
    i57 = HEAP32[i26 >> 2] | 0;
    _memcpy(i65 + (i57 << 5) | 0, i64 | 0, 32) | 0;
    i66 = i57 + 1 | 0;
    HEAP32[i26 >> 2] = i66;
    i62 = i66;
    i63 = i65;
   }
  } while (0);
  do {
   if ((i54 | 0) == 18) {
    i54 = 0;
    __ZN7WebCoreL19localQuadForTextBoxERKNS_13InlineTextBoxEjjb(i19, i51, i4, i5, i6);
    if (__ZNK7WebCore9FloatSize6isZeroEv(i17) | 0) {
     i62 = i27;
     i63 = i52;
     break;
    }
    i53 = HEAP32[i18 >> 2] | 0;
    i66 = HEAP32[i18 + 4 >> 2] | 0;
    HEAP32[i22 >> 2] = i53;
    HEAP32[i22 + 4 >> 2] = i66;
    d61 = (HEAP32[tempDoublePtr >> 2] = i53, +HEAPF32[tempDoublePtr >> 2]);
    d58 = d61 + +HEAPF32[i3 >> 2];
    d59 = +HEAPF32[i2 >> 2];
    HEAPF32[i29 >> 2] = d58;
    HEAPF32[i30 >> 2] = d59;
    d60 = d59 + +HEAPF32[i31 >> 2];
    HEAPF32[i32 >> 2] = d58;
    HEAPF32[i33 >> 2] = d60;
    HEAPF32[i34 >> 2] = d61;
    HEAPF32[i21 >> 2] = d60;
    __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i20, i28, i23, 0, 0, i7);
    if ((i27 | 0) != (HEAP32[i25 >> 2] | 0)) {
     _memcpy(i52 + (i27 << 5) | 0, i36 | 0, 32) | 0;
     i53 = (HEAP32[i26 >> 2] | 0) + 1 | 0;
     HEAP32[i26 >> 2] = i53;
     i62 = i53;
     i63 = i52;
     break;
    }
    i53 = i27 + 1 | 0;
    do {
     if (i52 >>> 0 > i20 >>> 0) {
      i54 = 23;
     } else {
      if ((i52 + (i27 << 5) | 0) >>> 0 <= i20 >>> 0) {
       i54 = 23;
       break;
      }
      __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i53);
      i66 = HEAP32[i24 >> 2] | 0;
      i67 = i66 + (i35 - i52 >> 5 << 5) | 0;
      i68 = i66;
     }
    } while (0);
    if ((i54 | 0) == 23) {
     i54 = 0;
     __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i53);
     i67 = i20;
     i68 = HEAP32[i24 >> 2] | 0;
    }
    i55 = HEAP32[i26 >> 2] | 0;
    _memcpy(i68 + (i55 << 5) | 0, i67 | 0, 32) | 0;
    i66 = i55 + 1 | 0;
    HEAP32[i26 >> 2] = i66;
    i62 = i66;
    i63 = i68;
   }
  } while (0);
  i66 = HEAP32[i51 + 40 >> 2] | 0;
  if ((i66 | 0) == 0) {
   break;
  } else {
   i51 = i66;
   i27 = i62;
   i52 = i63;
  }
 }
 STACKTOP = i8;
 return;
}
function __ZNK7WebCore19RenderTextLineBoxes16positionForPointERKNS_10RenderTextERKNS_11LayoutPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, d27 = +0, i28 = 0, d29 = +0, i30 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   if ((HEAP32[(HEAP32[i3 + 44 >> 2] | 0) + 4 >> 2] | 0) == 0) {
    break;
   }
   i2 = (HEAP32[i10 + 32 >> 2] & 2048 | 0) == 0;
   i11 = i4 + 4 | 0;
   i12 = i4 | 0;
   i13 = HEAP32[(i2 ? i11 : i12) >> 2] | 0;
   i14 = HEAP32[(i2 ? i12 : i11) >> 2] | 0;
   i11 = (HEAP32[(HEAP32[(HEAP32[i3 + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   i12 = i6 | 0;
   i2 = i7;
   i15 = i8 | 0;
   d16 = +(i13 | 0);
   i17 = i9;
   i18 = i10;
   L4 : while (1) {
    do {
     if (__ZNK7WebCore13InlineTextBox11isLineBreakEv(i18) | 0) {
      i19 = i18 | 0;
      if ((__ZNK7WebCore9InlineBox13prevLeafChildEv(i19) | 0) != 0) {
       i20 = i18;
       break;
      }
      if ((__ZNK7WebCore9InlineBox13nextLeafChildEv(i19) | 0) == 0) {
       i20 = i18;
       break;
      }
      i21 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i19) | 0;
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 20 >> 2] & 1](i21) | 0) {
       i20 = i18;
       break;
      }
      i20 = HEAP32[i18 + 40 >> 2] | 0;
     } else {
      i20 = i18;
     }
    } while (0);
    i22 = i20 | 0;
    i21 = __ZN7WebCore9InlineBox4rootEv(i22) | 0;
    __ZNK7WebCore13RootInlineBox12selectionTopEv(i6, i21);
    i19 = HEAP32[i21 + 72 >> 2] | 0;
    HEAP32[i7 >> 2] = i19;
    i23 = HEAP32[((i19 | 0) < (HEAP32[i12 >> 2] | 0) ? i2 : i6) >> 2] | 0;
    do {
     if ((i14 | 0) > (i23 | 0)) {
      i24 = 13;
     } else {
      if ((i11 | 0) == 3 | (i11 | 0) == 1) {
       break;
      }
      if ((i14 | 0) == (i23 | 0)) {
       i24 = 13;
      }
     }
    } while (0);
    do {
     if ((i24 | 0) == 13) {
      i24 = 0;
      __ZNK7WebCore13RootInlineBox15selectionBottomEv(i8, i21);
      i23 = HEAP32[i21 + 52 >> 2] | 0;
      if ((i23 | 0) == 0) {
       i25 = HEAP32[i15 >> 2] | 0;
      } else {
       i19 = HEAP32[i23 + 72 >> 2] | 0;
       HEAP32[i9 >> 2] = i19;
       i23 = HEAP32[((i19 | 0) < (HEAP32[i15 >> 2] | 0) ? i17 : i8) >> 2] | 0;
       HEAP32[i15 >> 2] = i23;
       i25 = i23;
      }
      if ((i14 | 0) >= (i25 | 0)) {
       if (!((i11 | 0) == 3 | (i11 | 0) == 1)) {
        break;
       }
       if ((i14 | 0) != (i25 | 0)) {
        break;
       }
      }
      i23 = i20 + 32 | 0;
      i19 = i20 + 20 | 0;
      i26 = i20 + 24 | 0;
      d27 = +HEAPF32[((HEAP32[i23 >> 2] & 2048 | 0) == 0 ? i26 : i19) >> 2];
      if (d16 <= d27) {
       i24 = 20;
       break L4;
      }
      if (d16 < d27 + +HEAPF32[i20 + 28 >> 2]) {
       i28 = 2;
       break L4;
      }
      if ((__ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(i22) | 0) == 0) {
       if (d16 < +HEAPF32[((HEAP32[i23 >> 2] & 2048 | 0) == 0 ? i26 : i19) >> 2]) {
        i28 = 0;
        break L4;
       }
      }
      if ((__ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(i22) | 0) == 0) {
       i28 = 2;
       break L4;
      }
     }
    } while (0);
    i21 = HEAP32[i20 + 40 >> 2] | 0;
    if ((i21 | 0) == 0) {
     i24 = 27;
     break;
    } else {
     i18 = i21;
    }
   }
   if ((i24 | 0) == 20) {
    i18 = (__ZNK7WebCore9InlineBox13prevLeafChildEv(i22) | 0) == 0;
    i28 = i18 ? 2 : 0;
   } else if ((i24 | 0) == 27) {
    if ((i20 | 0) == 0) {
     __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, i3 | 0, 0, 1);
     STACKTOP = i5;
     return;
    }
    d27 = +(i13 | 0);
    i18 = i20 | 0;
    i14 = i20 + 32 | 0;
    i11 = i20 + 20 | 0;
    i15 = i20 + 24 | 0;
    d29 = +HEAPF32[((HEAP32[i14 >> 2] & 2048 | 0) == 0 ? i15 : i11) >> 2];
    do {
     if (d27 > d29) {
      if (d27 < d29 + +HEAPF32[i20 + 28 >> 2]) {
       i30 = 2;
       break;
      }
      if ((__ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(i18) | 0) == 0) {
       if (d27 < +HEAPF32[((HEAP32[i14 >> 2] & 2048 | 0) == 0 ? i15 : i11) >> 2]) {
        i30 = 0;
        break;
       }
      }
      i17 = (__ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(i18) | 0) == 0;
      i30 = i17 ? 2 : 0;
     } else {
      i17 = (__ZNK7WebCore9InlineBox13prevLeafChildEv(i18) | 0) == 0;
      i30 = i17 ? 2 : 0;
     }
    } while (0);
    i18 = FUNCTION_TABLE_iifi[HEAP32[(HEAP32[i20 >> 2] | 0) + 124 >> 2] & 1](i20, d27, 1) | 0;
    __ZN7WebCoreL48createVisiblePositionAfterAdjustingOffsetForBiDiERKNS_13InlineTextBoxEiNS_26ShouldAffinityBeDownstreamE(i1, i20, (HEAP32[i20 + 44 >> 2] | 0) + i18 | 0, i30);
    STACKTOP = i5;
    return;
   }
   __ZN7WebCoreL48createVisiblePositionAfterAdjustingOffsetForBiDiERKNS_13InlineTextBoxEiNS_26ShouldAffinityBeDownstreamE(i1, i20, FUNCTION_TABLE_iifi[HEAP32[(HEAP32[i20 >> 2] | 0) + 124 >> 2] & 1](i20, d16, 1) | 0, i28);
   STACKTOP = i5;
   return;
  }
 } while (0);
 __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, i3 | 0, 0, 1);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore19RenderTextLineBoxes13absoluteQuadsERKNS_10RenderTextEPbNS0_14ClippingOptionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, d43 = +0, d44 = +0, d45 = +0, d46 = +0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i7 | 0;
 i9 = i7;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i13 = i12 | 0;
 i14 = i12;
 i15 = i1 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i1 + 4 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i1 + 8 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = HEAP32[i2 >> 2] | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i2 = (i5 | 0) == 1;
 i5 = i3 + 44 | 0;
 i19 = i10;
 i20 = i10 + 8 | 0;
 i21 = i3 | 0;
 i22 = i7;
 i23 = i7 + 8 | 0;
 i7 = i9 + 4 | 0;
 i24 = i12 + 8 | 0;
 i25 = i14 + 12 | 0;
 i26 = i9 + 12 | 0;
 i27 = i12 + 16 | 0;
 i28 = i14 + 20 | 0;
 i29 = i12 + 24 | 0;
 i12 = i14 + 28 | 0;
 i30 = i11;
 i31 = i11;
 i32 = i10 + 12 | 0;
 i33 = i3 + 8 | 0;
 i3 = i10 + 4 | 0;
 i34 = i10 | 0;
 i35 = i18;
 i18 = 0;
 i36 = 0;
 while (1) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i35 >> 2] | 0) + 68 >> 2] & 1](i9, i35);
  L6 : do {
   if (i2) {
    i37 = HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] | 0;
    i38 = HEAP16[i35 + 50 >> 1] | 0;
    i39 = i38 & 65535;
    if (i38 << 16 >> 16 == -1) {
     _memset(i19 | 0, 0, 16) | 0;
     break;
    }
    i38 = __ZNK7WebCore13RootInlineBox11ellipsisBoxEv(__ZNK7WebCore9InlineBox4rootEv(i35 | 0) | 0) | 0;
    if ((i38 | 0) == 0) {
     _memset(i19 | 0, 0, 16) | 0;
     break;
    }
    i40 = HEAP32[i35 + 44 >> 2] | 0;
    i41 = -i40 | 0;
    i42 = i37 - i40 | 0;
    i40 = HEAPU16[i35 + 48 >> 1] | 0;
    do {
     if ((((i40 | 0) < (i42 | 0) ? i40 : i42) | 0) < (i39 | 0)) {
      if ((((i41 | 0) < 0 ? 0 : i41) | 0) <= (i39 | 0)) {
       break;
      }
      _memset(i19 | 0, 0, 16) | 0;
      break L6;
     }
    } while (0);
    __ZN7WebCore11EllipsisBox13selectionRectEv(i10, i38);
    i39 = HEAP32[i20 >> 2] | 0;
    if ((i39 | 0) < 1) {
     break;
    }
    i41 = HEAP32[i32 >> 2] | 0;
    if ((i41 | 0) < 1) {
     break;
    }
    i42 = (HEAP32[(HEAP32[(HEAP32[i33 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if ((i42 | 0) == 3 | (i42 | 0) == 0) {
     HEAPF32[i23 >> 2] = +(i39 + (HEAP32[i34 >> 2] | 0) | 0) - +HEAPF32[i22 >> 2];
     break;
    } else {
     HEAPF32[i26 >> 2] = +(i41 + (HEAP32[i3 >> 2] | 0) | 0) - +HEAPF32[i7 >> 2];
     break;
    }
   } else {
    _memset(i19 | 0, 0, 16) | 0;
   }
  } while (0);
  i41 = HEAP32[i8 >> 2] | 0;
  i39 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i13 >> 2] = i41;
  HEAP32[i13 + 4 >> 2] = i39;
  d43 = (HEAP32[tempDoublePtr >> 2] = i41, +HEAPF32[tempDoublePtr >> 2]);
  d44 = d43 + +HEAPF32[i23 >> 2];
  d45 = +HEAPF32[i7 >> 2];
  HEAPF32[i24 >> 2] = d44;
  HEAPF32[i25 >> 2] = d45;
  d46 = d45 + +HEAPF32[i26 >> 2];
  HEAPF32[i27 >> 2] = d44;
  HEAPF32[i28 >> 2] = d46;
  HEAPF32[i29 >> 2] = d43;
  HEAPF32[i12 >> 2] = d46;
  __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i11, i21, i14, 0, 0, i4);
  if ((i18 | 0) == (HEAP32[i16 >> 2] | 0)) {
   i41 = i18 + 1 | 0;
   do {
    if (i36 >>> 0 > i11 >>> 0) {
     i47 = 21;
    } else {
     if ((i36 + (i18 << 5) | 0) >>> 0 <= i11 >>> 0) {
      i47 = 21;
      break;
     }
     __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i41);
     i39 = HEAP32[i15 >> 2] | 0;
     i48 = i39 + (i30 - i36 >> 5 << 5) | 0;
     i49 = i39;
    }
   } while (0);
   if ((i47 | 0) == 21) {
    i47 = 0;
    __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i41);
    i48 = i11;
    i49 = HEAP32[i15 >> 2] | 0;
   }
   i39 = HEAP32[i17 >> 2] | 0;
   _memcpy(i49 + (i39 << 5) | 0, i48 | 0, 32) | 0;
   i50 = i49;
   i51 = i39;
  } else {
   _memcpy(i36 + (i18 << 5) | 0, i31 | 0, 32) | 0;
   i50 = i36;
   i51 = i18;
  }
  i39 = i51 + 1 | 0;
  HEAP32[i17 >> 2] = i39;
  i42 = HEAP32[i35 + 40 >> 2] | 0;
  if ((i42 | 0) == 0) {
   break;
  } else {
   i35 = i42;
   i18 = i39;
   i36 = i50;
  }
 }
 STACKTOP = i6;
 return;
}
function __ZN7WebCore19RenderTextLineBoxes10dirtyRangeERNS_10RenderTextEjji(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = 0;
   i9 = 0;
   i10 = 29;
  } else {
   i11 = 0;
   i12 = 0;
   i13 = 0;
   i14 = i7;
   while (1) {
    i15 = HEAP16[i14 + 48 >> 1] | 0;
    i16 = i15 << 16 >> 16 == 0;
    i17 = i14 + 44 | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    if (i16) {
     i19 = i18;
    } else {
     i19 = (i15 & 65535) - 1 + i18 | 0;
    }
    L7 : do {
     if (i19 >>> 0 < i3 >>> 0) {
      i20 = i13;
      i21 = i12;
      i22 = i11;
     } else {
      if (i18 >>> 0 > i4 >>> 0) {
       HEAP32[i17 >> 2] = i18 + i5;
       i23 = __ZN7WebCore9InlineBox4rootEv(i14 | 0) | 0;
       i24 = (i13 | 0) != 0;
       if (i24 | i11) {
        i20 = i24 ? i13 : i23;
        i21 = i23;
        i22 = i11;
        break;
       }
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i23 >> 2] | 0) + 100 >> 2] & 1](i23 | 0, 1);
       i20 = i23;
       i21 = i23;
       i22 = 1;
       break;
      }
      if (i16) {
       i25 = i18;
      } else {
       i25 = i18 - 1 + (i15 & 65535) | 0;
      }
      do {
       if (i25 >>> 0 >= i3 >>> 0) {
        if (i16) {
         i26 = i18;
        } else {
         i26 = (i15 & 65535) - 1 + i18 | 0;
        }
        if (i26 >>> 0 > i4 >>> 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 104 >> 2] & 3](i14 | 0);
        i20 = i13;
        i21 = i12;
        i22 = 1;
        break L7;
       }
      } while (0);
      do {
       if (i18 >>> 0 <= i3 >>> 0) {
        if (i16) {
         i27 = i18;
        } else {
         i27 = i18 - 1 + (i15 & 65535) | 0;
        }
        if (i27 >>> 0 < i4 >>> 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 104 >> 2] & 3](i14 | 0);
        i20 = i13;
        i21 = i12;
        i22 = 1;
        break L7;
       }
      } while (0);
      if (i16) {
       i28 = i18;
      } else {
       i28 = i18 - 1 + (i15 & 65535) | 0;
      }
      if (i28 >>> 0 < i4 >>> 0) {
       i20 = i13;
       i21 = i12;
       i22 = i11;
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 104 >> 2] & 3](i14 | 0);
      i20 = i13;
      i21 = i12;
      i22 = 1;
     }
    } while (0);
    i15 = HEAP32[i14 + 40 >> 2] | 0;
    if ((i15 | 0) == 0) {
     break;
    } else {
     i11 = i22;
     i12 = i21;
     i13 = i20;
     i14 = i15;
    }
   }
   if ((i21 | 0) == 0) {
    i29 = 0;
   } else {
    i29 = HEAP32[i21 + 52 >> 2] | 0;
   }
   if ((i20 | 0) == 0) {
    i8 = i22;
    i9 = i29;
    i10 = 29;
    break;
   }
   i14 = HEAP32[i20 + 48 >> 2] | 0;
   i30 = (i14 | 0) == 0 ? i20 : i14;
   i31 = i22;
   i32 = i29;
   i10 = 31;
  }
 } while (0);
 do {
  if ((i10 | 0) == 29) {
   i29 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i29 | 0) == 0) {
    i33 = i8;
    break;
   }
   i22 = __ZN7WebCore9InlineBox4rootEv(i29 | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i22 >> 2] | 0) + 100 >> 2] & 1](i22 | 0, 1);
   i30 = i22;
   i31 = 1;
   i32 = i9;
   i10 = 31;
  }
 } while (0);
 do {
  if ((i10 | 0) == 31) {
   if ((i30 | 0) == 0 | (i30 | 0) == (i32 | 0)) {
    i33 = i31;
    break;
   }
   i9 = i2 | 0;
   i8 = i30;
   while (1) {
    do {
     if ((HEAP32[i8 + 64 >> 2] | 0) == (i9 | 0)) {
      i1 = i8 + 60 | 0;
      i22 = HEAP32[i1 >> 2] | 0;
      if (i22 >>> 0 <= i4 >>> 0) {
       break;
      }
      HEAP32[i1 >> 2] = i22 + i5;
     }
    } while (0);
    i22 = HEAP32[i8 + 52 >> 2] | 0;
    i1 = i22;
    if ((i22 | 0) == 0 | (i1 | 0) == (i32 | 0)) {
     i33 = i31;
     break;
    } else {
     i8 = i1;
    }
   }
  }
 } while (0);
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  i34 = i33;
  return i34 | 0;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i34 = i33;
  return i34 | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 644 >> 2] & 1](i6, i2 | 0);
 i34 = 1;
 return i34 | 0;
}
function __ZNK7WebCore19RenderTextLineBoxes13absoluteRectsERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, d19 = +0, i20 = 0, i21 = 0, d22 = +0, d23 = +0, i24 = 0, d25 = +0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = i1 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i1 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i1 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = HEAP32[i2 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i3 | 0;
 i13 = i3 + 4 | 0;
 i3 = i6 + 8 | 0;
 i6 = i5;
 i14 = i5;
 i15 = i12;
 i12 = 0;
 i16 = 0;
 while (1) {
  i17 = i15 | 0;
  d18 = +(HEAP32[i2 >> 2] | 0) + +HEAPF32[i15 + 20 >> 2];
  d19 = +(HEAP32[i13 >> 2] | 0) + +HEAPF32[i15 + 24 >> 2];
  i20 = i15 + 32 | 0;
  i21 = HEAP32[i20 >> 2] | 0;
  if ((i21 & 2048 | 0) == 0) {
   d22 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i17);
   d23 = d22;
   i24 = HEAP32[i20 >> 2] | 0;
  } else {
   d23 = +HEAPF32[i15 + 28 >> 2];
   i24 = i21;
  }
  if ((i24 & 2048 | 0) == 0) {
   d25 = +HEAPF32[i15 + 28 >> 2];
  } else {
   d25 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i17);
  }
  d22 = +d18;
  d18 = +d19;
  HEAPF32[i7 >> 2] = d22;
  HEAPF32[i7 + 4 >> 2] = d18;
  d18 = +d23;
  d22 = +d25;
  HEAPF32[i3 >> 2] = d18;
  HEAPF32[i3 + 4 >> 2] = d22;
  __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i5, i8);
  if ((i12 | 0) == (HEAP32[i10 >> 2] | 0)) {
   i17 = i12 + 1 | 0;
   do {
    if (i16 >>> 0 > i5 >>> 0) {
     i26 = 13;
    } else {
     if ((i16 + (i12 << 4) | 0) >>> 0 <= i5 >>> 0) {
      i26 = 13;
      break;
     }
     __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i17);
     i21 = HEAP32[i9 >> 2] | 0;
     i27 = i21 + (i6 - i16 >> 4 << 4) | 0;
     i28 = i21;
    }
   } while (0);
   if ((i26 | 0) == 13) {
    i26 = 0;
    __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i17);
    i27 = i5;
    i28 = HEAP32[i9 >> 2] | 0;
   }
   i21 = HEAP32[i11 >> 2] | 0;
   i20 = i28 + (i21 << 4) | 0;
   i29 = i27;
   HEAP32[i20 >> 2] = HEAP32[i29 >> 2];
   HEAP32[i20 + 4 >> 2] = HEAP32[i29 + 4 >> 2];
   HEAP32[i20 + 8 >> 2] = HEAP32[i29 + 8 >> 2];
   HEAP32[i20 + 12 >> 2] = HEAP32[i29 + 12 >> 2];
   i30 = i28;
   i31 = i21;
  } else {
   i21 = i16 + (i12 << 4) | 0;
   HEAP32[i21 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i21 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
   HEAP32[i21 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
   HEAP32[i21 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
   i30 = i16;
   i31 = i12;
  }
  i21 = i31 + 1 | 0;
  HEAP32[i11 >> 2] = i21;
  i29 = HEAP32[i15 + 40 >> 2] | 0;
  if ((i29 | 0) == 0) {
   break;
  } else {
   i15 = i29;
   i12 = i21;
   i16 = i30;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL19localQuadForTextBoxERKNS_13InlineTextBoxEjjb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0, d13 = +0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = HEAP16[i2 + 48 >> 1] | 0;
 i9 = HEAP32[i2 + 44 >> 2] | 0;
 if (i8 << 16 >> 16 == 0) {
  i10 = i9;
 } else {
  i10 = (i8 & 65535) - 1 + i9 | 0;
 }
 i9 = i10 + 1 | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 120 >> 2] & 1](i7, i2, i3, i9 >>> 0 > i4 >>> 0 ? i4 : i9);
 i9 = i7 + 12 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 if ((i4 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i6;
  return;
 }
 if (i5) {
  d11 = +(HEAP32[i7 + 8 >> 2] | 0);
  i5 = i1;
  d12 = +(+(HEAP32[i7 >> 2] | 0));
  d13 = +(+(HEAP32[i7 + 4 >> 2] | 0));
  HEAPF32[i5 >> 2] = d12;
  HEAPF32[i5 + 4 >> 2] = d13;
  i5 = i1 + 8 | 0;
  d13 = +d11;
  d11 = +(+(i4 | 0));
  HEAPF32[i5 >> 2] = d13;
  HEAPF32[i5 + 4 >> 2] = d11;
  STACKTOP = i6;
  return;
 }
 i5 = (HEAP32[i2 + 32 >> 2] & 2048 | 0) == 0;
 d11 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i2 | 0);
 i4 = d11 < +2147483647;
 if (i5) {
  do {
   if (i4) {
    if (d11 <= +-2147483648) {
     i14 = -2147483648;
     break;
    }
    i14 = ~~d11;
   } else {
    i14 = 2147483647;
   }
  } while (0);
  HEAP32[i7 + 8 >> 2] = i14;
  d13 = +HEAPF32[i2 + 20 >> 2];
  do {
   if (d13 < +2147483647) {
    if (d13 <= +-2147483648) {
     i15 = -2147483648;
     break;
    }
    i15 = ~~d13;
   } else {
    i15 = 2147483647;
   }
  } while (0);
  HEAP32[i7 >> 2] = i15;
  i16 = i15;
  i17 = HEAP32[i7 + 4 >> 2] | 0;
  i18 = i14;
  i19 = HEAP32[i9 >> 2] | 0;
 } else {
  do {
   if (i4) {
    if (d11 <= +-2147483648) {
     i20 = -2147483648;
     break;
    }
    i20 = ~~d11;
   } else {
    i20 = 2147483647;
   }
  } while (0);
  HEAP32[i9 >> 2] = i20;
  d11 = +HEAPF32[i2 + 24 >> 2];
  do {
   if (d11 < +2147483647) {
    if (d11 <= +-2147483648) {
     i21 = -2147483648;
     break;
    }
    i21 = ~~d11;
   } else {
    i21 = 2147483647;
   }
  } while (0);
  HEAP32[i7 + 4 >> 2] = i21;
  i16 = HEAP32[i7 >> 2] | 0;
  i17 = i21;
  i18 = HEAP32[i7 + 8 >> 2] | 0;
  i19 = i20;
 }
 i20 = i1;
 d11 = +(+(i16 | 0));
 d13 = +(+(i17 | 0));
 HEAPF32[i20 >> 2] = d11;
 HEAPF32[i20 + 4 >> 2] = d13;
 i20 = i1 + 8 | 0;
 d13 = +(+(i18 | 0));
 d11 = +(+(i19 | 0));
 HEAPF32[i20 >> 2] = d13;
 HEAPF32[i20 + 4 >> 2] = d11;
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore19RenderTextLineBoxes11boundingBoxERKNS_10RenderTextE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, d21 = +0, d22 = +0, d23 = +0, d24 = +0, d25 = +0, d26 = +0, d27 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i4;
  return;
 } else {
  i7 = i6;
  d8 = +0;
  d9 = +0;
 }
 while (1) {
  if ((i7 | 0) == (i6 | 0)) {
   i10 = HEAP32[i6 + 32 >> 2] | 0;
   d11 = +HEAPF32[i6 + 28 >> 2];
   i12 = i10 & 2048;
   i13 = i7 + 20 | 0;
   i14 = i7 + 24 | 0;
   d15 = +HEAPF32[((i10 & 2048 | 0) == 0 ? i7 + 24 | 0 : i7 + 20 | 0) >> 2];
   i16 = 8;
  } else {
   i10 = HEAP32[i7 + 32 >> 2] | 0;
   i17 = i10 & 2048;
   i18 = i7 + 20 | 0;
   i19 = i7 + 24 | 0;
   if (+HEAPF32[((i17 | 0) == 0 ? i19 : i18) >> 2] < d9) {
    d20 = +HEAPF32[((i17 | 0) == 0 ? i19 : i18) >> 2];
   } else {
    d20 = d9;
   }
   i18 = i10 & 2048;
   i10 = i7 + 20 | 0;
   i19 = i7 + 24 | 0;
   d21 = +HEAPF32[i7 + 28 >> 2];
   if (+HEAPF32[((i18 | 0) == 0 ? i19 : i10) >> 2] + d21 > d8) {
    d11 = d21;
    i12 = i18;
    i13 = i10;
    i14 = i19;
    d15 = d20;
    i16 = 8;
   } else {
    d22 = d8;
    d23 = d20;
   }
  }
  if ((i16 | 0) == 8) {
   i16 = 0;
   d22 = +HEAPF32[((i12 | 0) == 0 ? i14 : i13) >> 2] + d11;
   d23 = d15;
  }
  i19 = HEAP32[i7 + 40 >> 2] | 0;
  if ((i19 | 0) == 0) {
   break;
  } else {
   i7 = i19;
   d8 = d22;
   d9 = d23;
  }
 }
 i7 = (HEAP32[(HEAP32[(HEAP32[i3 + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i7 | 0) == 3 | (i7 | 0) == 0) {
  d9 = +HEAPF32[i6 + 24 >> 2];
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  d8 = +HEAPF32[((HEAP32[i7 + 32 >> 2] & 2048 | 0) == 0 ? i7 + 20 | 0 : i7 + 24 | 0) >> 2];
  d24 = d8 + +__ZNK7WebCore9InlineBox13logicalHeightEv(i7 | 0) - d9;
  d25 = d9;
  d26 = d23;
  d27 = d22 - d23;
 } else {
  d9 = +HEAPF32[i6 + 20 >> 2];
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  d8 = +HEAPF32[((HEAP32[i6 + 32 >> 2] & 2048 | 0) == 0 ? i6 + 20 | 0 : i6 + 24 | 0) >> 2];
  d24 = d22 - d23;
  d25 = d23;
  d26 = d9;
  d27 = d8 + +__ZNK7WebCore9InlineBox13logicalHeightEv(i6 | 0) - d9;
 }
 HEAPF32[i5 >> 2] = d26;
 HEAPF32[i5 + 4 >> 2] = d25;
 HEAPF32[i5 + 8 >> 2] = d27;
 HEAPF32[i5 + 12 >> 2] = d24;
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i1, i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore19RenderTextLineBoxes21selectionRectForRangeEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i8 | 0;
 i10 = i8;
 _memset(i1 | 0, 0, 16) | 0;
 i11 = HEAP32[i2 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i2 = i8;
 i12 = i7 | 0;
 i13 = i7 + 4 | 0;
 i14 = i8 + 8 | 0;
 i8 = i7 + 8 | 0;
 i15 = i7 + 12 | 0;
 i16 = i11;
 while (1) {
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i16 >> 2] | 0) + 120 >> 2] & 1](i6, i16, i3, i4);
  __ZN7WebCore10LayoutRect5uniteERKS0_(i1, i6);
  i11 = HEAP16[i16 + 50 >> 1] | 0;
  i17 = i11 & 65535;
  L6 : do {
   if (i11 << 16 >> 16 == -1) {
    _memset(i2 | 0, 0, 16) | 0;
    i18 = 0;
    i19 = 0;
    i20 = 0;
    i21 = 0;
   } else {
    i22 = __ZNK7WebCore13RootInlineBox11ellipsisBoxEv(__ZNK7WebCore9InlineBox4rootEv(i16 | 0) | 0) | 0;
    if ((i22 | 0) == 0) {
     _memset(i2 | 0, 0, 16) | 0;
     i18 = 0;
     i19 = 0;
     i20 = 0;
     i21 = 0;
     break;
    }
    i23 = HEAP32[i16 + 44 >> 2] | 0;
    i24 = i3 - i23 | 0;
    i25 = i4 - i23 | 0;
    i23 = HEAPU16[i16 + 48 >> 1] | 0;
    do {
     if ((((i23 | 0) < (i25 | 0) ? i23 : i25) | 0) < (i17 | 0)) {
      if ((((i24 | 0) < 0 ? 0 : i24) | 0) <= (i17 | 0)) {
       break;
      }
      _memset(i2 | 0, 0, 16) | 0;
      i18 = 0;
      i19 = 0;
      i20 = 0;
      i21 = 0;
      break L6;
     }
    } while (0);
    __ZN7WebCore11EllipsisBox13selectionRectEv(i10, i22);
    i18 = HEAP32[i9 + 4 >> 2] | 0;
    i19 = HEAP32[i9 >> 2] | 0;
    i20 = HEAP32[i14 + 4 >> 2] | 0;
    i21 = HEAP32[i14 >> 2] | 0;
   }
  } while (0);
  HEAP32[i12 >> 2] = i19;
  HEAP32[i13 >> 2] = i18;
  HEAP32[i8 >> 2] = i21;
  HEAP32[i15 >> 2] = i20;
  __ZN7WebCore10LayoutRect5uniteERKS0_(i1, i7);
  i16 = HEAP32[i16 + 40 >> 2] | 0;
  if ((i16 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore19RenderTextLineBoxes14containsOffsetERKNS_10RenderTextEjNS0_10OffsetTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i1 = i2 + 24 | 0;
 i7 = (i4 | 0) == 1;
 L4 : do {
  if (i7) {
   i4 = i5;
   while (1) {
    i8 = HEAP32[i4 + 44 >> 2] | 0;
    i9 = i8 >>> 0 > i3 >>> 0;
    if (i9) {
     if ((HEAP8[i1] & 64) == 0) {
      i6 = 0;
      i10 = 20;
      break;
     }
    } else {
     i11 = (HEAPU16[i4 + 48 >> 1] | 0) + i8 | 0;
     if (!(i9 | i11 >>> 0 < i3 >>> 0 | (i11 | 0) == (i3 | 0))) {
      break L4;
     }
    }
    i11 = HEAP32[i4 + 40 >> 2] | 0;
    if ((i11 | 0) == 0) {
     i6 = 0;
     i10 = 21;
     break;
    } else {
     i4 = i11;
    }
   }
   if ((i10 | 0) == 20) {
    return i6 | 0;
   } else if ((i10 | 0) == 21) {
    return i6 | 0;
   }
  } else {
   i4 = i5;
   L14 : while (1) {
    i11 = HEAP32[i4 + 44 >> 2] | 0;
    i9 = i11 >>> 0 > i3 >>> 0;
    do {
     if (i9) {
      if ((HEAP8[i1] & 64) == 0) {
       i6 = 0;
       i10 = 22;
       break L14;
      }
     } else {
      i8 = (HEAPU16[i4 + 48 >> 1] | 0) + i11 | 0;
      if (i9 | i8 >>> 0 < i3 >>> 0) {
       break;
      }
      if ((i8 | 0) != (i3 | 0)) {
       break L4;
      }
      if (!(__ZNK7WebCore13InlineTextBox11isLineBreakEv(i4) | 0)) {
       break L4;
      }
     }
    } while (0);
    i9 = HEAP32[i4 + 40 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i6 = 0;
     i10 = 17;
     break;
    } else {
     i4 = i9;
    }
   }
   if ((i10 | 0) == 17) {
    return i6 | 0;
   } else if ((i10 | 0) == 22) {
    return i6 | 0;
   }
  }
 } while (0);
 if (i7 | (i3 | 0) == 0) {
  i6 = 1;
  return i6 | 0;
 }
 i6 = (__ZNK7WebCore10RenderText10nextOffsetEi(i2, __ZNK7WebCore10RenderText14previousOffsetEi(i2, i3) | 0) | 0) == (i3 | 0);
 return i6 | 0;
}
function __ZNK7WebCore19RenderTextLineBoxes25visualOverflowBoundingBoxERKNS_10RenderTextE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i2 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i4;
  return;
 }
 i11 = i5 | 0;
 i12 = i6 | 0;
 i13 = i6 + 8 | 0;
 i14 = i10;
 i10 = 2147483647;
 i15 = -2147483648;
 while (1) {
  __ZNK7WebCore13InlineTextBox19logicalOverflowRectEv(i5, i14);
  i16 = HEAP32[i11 >> 2] | 0;
  i10 = (i16 | 0) < (i10 | 0) ? i16 : i10;
  __ZNK7WebCore13InlineTextBox19logicalOverflowRectEv(i6, i14);
  i16 = (HEAP32[i13 >> 2] | 0) + (HEAP32[i12 >> 2] | 0) | 0;
  i15 = (i15 | 0) < (i16 | 0) ? i16 : i15;
  i14 = HEAP32[i14 + 40 >> 2] | 0;
  if ((i14 | 0) == 0) {
   break;
  }
 }
 __ZNK7WebCore13InlineTextBox19logicalOverflowRectEv(i7, HEAP32[i9 >> 2] | 0);
 i9 = HEAP32[i7 + 4 >> 2] | 0;
 __ZNK7WebCore13InlineTextBox19logicalOverflowRectEv(i8, HEAP32[i2 + 4 >> 2] | 0);
 i2 = i10;
 i7 = i9;
 i14 = i15 - i10 | 0;
 i10 = (HEAP32[i8 + 4 >> 2] | 0) - i9 + (HEAP32[i8 + 12 >> 2] | 0) | 0;
 i8 = (HEAP32[(HEAP32[(HEAP32[i3 + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i8 | 0) == 3 | (i8 | 0) == 0) {
  i17 = i7 | 0;
  i18 = i2 | 0;
  i19 = i10 | 0;
  i20 = i14 | 0;
 } else {
  i17 = i2 | 0;
  i18 = i7 | 0;
  i19 = i14 | 0;
  i20 = i10 | 0;
 }
 i10 = i1;
 HEAP32[i10 >> 2] = i18;
 HEAP32[i10 + 4 >> 2] = i17;
 i17 = i1 + 8 | 0;
 HEAP32[i17 >> 2] = i20;
 HEAP32[i17 + 4 >> 2] = i19;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore19RenderTextLineBoxes17setSelectionStateERNS_10RenderTextENS_12RenderObject14SelectionStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = (i3 | 0) == 2;
 if ((i3 | 0) == 2 | (i3 | 0) == 0) {
  i8 = HEAP32[i1 >> 2] | 0;
  if ((i8 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i9 = (i7 & 1) << 13;
  i7 = i8;
  while (1) {
   i8 = (__ZN7WebCore9InlineBox4rootEv(i7 | 0) | 0) + 32 | 0;
   HEAP32[i8 >> 2] = HEAP32[i8 >> 2] & -8193 | i9;
   i7 = HEAP32[i7 + 40 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
  }
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore12RenderObject17selectionStartEndERiS1_(i2 | 0, i5, i6);
 do {
  if ((i3 | 0) == 3) {
   HEAP32[i5 >> 2] = 0;
  } else if ((i3 | 0) == 1) {
   i7 = HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 4 >> 2] | 0;
   HEAP32[i6 >> 2] = i7;
   i9 = HEAP32[i5 >> 2] | 0;
   if (!((i9 | 0) != 0 & (i9 | 0) == (i7 | 0))) {
    break;
   }
   HEAP32[i5 >> 2] = i7 - 1;
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 } else {
  i10 = i2;
 }
 while (1) {
  if (__ZNK7WebCore13InlineTextBox10isSelectedEii(i10, HEAP32[i5 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0) {
   i2 = (__ZN7WebCore9InlineBox4rootEv(i10 | 0) | 0) + 32 | 0;
   HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 8192;
  }
  i10 = HEAP32[i10 + 40 >> 2] | 0;
  if ((i10 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
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
 i1 = i2 + (i6 << 4) | 0;
 if (i5 >>> 0 > 268435455 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 4) | 0;
 HEAP32[i3 >> 2] = i7 >>> 4;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   i5 = i7;
   i8 = i6;
   HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i5 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
   HEAP32[i5 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   HEAP32[i5 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
   i8 = i6 + 16 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
    i7 = i7 + 16 | 0;
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
function __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
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
 i1 = i2 + (i6 << 5) | 0;
 if (i5 >>> 0 > 134217727 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 5) | 0;
 HEAP32[i3 >> 2] = i7 >>> 5;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   _memcpy(i7 | 0, i6 | 0, 32) | 0;
   i5 = i6 + 32 | 0;
   if ((i5 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i5;
    i7 = i7 + 32 | 0;
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
function __ZNK7WebCore19RenderTextLineBoxes8findNextEiRi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i1 = HEAP16[i4 + 48 >> 1] | 0;
 i6 = i1 & 65535;
 L4 : do {
  if ((i6 | 0) < (i2 | 0)) {
   i7 = i4;
   i8 = i1;
   while (1) {
    i9 = HEAP32[i7 + 40 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break;
    }
    i10 = HEAP16[i9 + 48 >> 1] | 0;
    i11 = (i10 & 65535) + (HEAP32[i9 + 44 >> 2] | 0) | 0;
    if ((i11 | 0) < (i2 | 0)) {
     i7 = i9;
     i8 = i10;
    } else {
     i12 = i9;
     i13 = i11;
     i14 = i10;
     i15 = 6;
     break L4;
    }
   }
   i16 = i8 & 65535;
   i17 = i7;
  } else {
   i12 = i4;
   i13 = i6;
   i14 = i1;
   i15 = 6;
  }
 } while (0);
 if ((i15 | 0) == 6) {
  i16 = i2 - i13 + (i14 & 65535) | 0;
  i17 = i12;
 }
 HEAP32[i3 >> 2] = i16;
 i5 = i17;
 return i5 | 0;
}
function __ZNK7WebCore19RenderTextLineBoxes26countCharacterOffsetsUntilEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 } else {
  i5 = 0;
  i6 = i3;
 }
 while (1) {
  i7 = HEAP32[i6 + 44 >> 2] | 0;
  if (i7 >>> 0 > i2 >>> 0) {
   i4 = i5;
   i8 = 7;
   break;
  }
  i3 = HEAPU16[i6 + 48 >> 1] | 0;
  if ((i3 + i7 | 0) >>> 0 >= i2 >>> 0) {
   i8 = 4;
   break;
  }
  i1 = i3 + i5 | 0;
  i3 = HEAP32[i6 + 40 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i4 = i1;
   i8 = 9;
   break;
  } else {
   i5 = i1;
   i6 = i3;
  }
 }
 if ((i8 | 0) == 4) {
  i4 = i5 + i2 - i7 | 0;
  return i4 | 0;
 } else if ((i8 | 0) == 9) {
  return i4 | 0;
 } else if ((i8 | 0) == 7) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore19RenderTextLineBoxes22createAndAppendLineBoxERNS_10RenderTextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 652 >> 2] & 1](i4, i2);
 i2 = i1 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  HEAP32[i2 >> 2] = i5;
  HEAP32[i1 + 4 >> 2] = i5;
  i6 = i5;
  STACKTOP = i3;
  return i6 | 0;
 } else {
  i5 = i1 + 4 | 0;
  i1 = i4 | 0;
  HEAP32[(HEAP32[i5 >> 2] | 0) + 40 >> 2] = HEAP32[i1 >> 2];
  HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] = HEAP32[i5 >> 2];
  i4 = HEAP32[i1 >> 2] | 0;
  HEAP32[i5 >> 2] = i4;
  i6 = i4;
  STACKTOP = i3;
  return i6 | 0;
 }
 return 0;
}
function __ZNK7WebCore19RenderTextLineBoxes14caretMaxOffsetERKNS_10RenderTextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 4 >> 2] | 0;
  return i4 | 0;
 }
 i2 = (HEAPU16[i3 + 48 >> 1] | 0) + (HEAP32[i3 + 44 >> 2] | 0) | 0;
 i1 = HEAP32[i3 + 36 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i4 = i2;
  return i4 | 0;
 } else {
  i5 = i2;
  i6 = i1;
 }
 while (1) {
  i1 = (HEAPU16[i6 + 48 >> 1] | 0) + (HEAP32[i6 + 44 >> 2] | 0) | 0;
  i2 = (i5 | 0) < (i1 | 0) ? i1 : i5;
  i1 = HEAP32[i6 + 36 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i4 = i2;
   break;
  } else {
   i5 = i2;
   i6 = i1;
  }
 }
 return i4 | 0;
}
function __ZN7WebCore19RenderTextLineBoxes6attachERNS_13InlineTextBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   HEAP32[i1 >> 2] = i2;
   if ((i2 | 0) == 0) {
    i5 = 0;
   } else {
    i6 = i2;
    break;
   }
   HEAP32[i3 >> 2] = i5;
   return;
  } else {
   HEAP32[i4 + 40 >> 2] = i2;
   HEAP32[i2 + 36 >> 2] = HEAP32[i3 >> 2];
   i6 = i2;
  }
 } while (0);
 while (1) {
  i2 = i6 + 32 | 0;
  HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -513;
  i2 = HEAP32[i6 + 40 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i5 = i6;
   break;
  } else {
   i6 = i2;
  }
 }
 HEAP32[i3 >> 2] = i5;
 return;
}
function __ZN7WebCore19RenderTextLineBoxes7extractERNS_13InlineTextBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i2 + 36 | 0;
 HEAP32[i1 + 4 >> 2] = HEAP32[i3 >> 2];
 i4 = i1 | 0;
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i4 + 40 >> 2] = 0;
 }
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i5 = i2;
 }
 while (1) {
  i2 = i5 + 32 | 0;
  HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 512;
  i5 = HEAP32[i5 + 40 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore19RenderTextLineBoxes6removeERNS_13InlineTextBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i3 >> 2] = HEAP32[i2 + 40 >> 2];
 }
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i3 >> 2] = HEAP32[i2 + 36 >> 2];
 }
 i3 = i2 + 40 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = i2 + 36 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i1 + 36 >> 2] = HEAP32[i4 >> 2];
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 HEAP32[i1 + 40 >> 2] = HEAP32[i3 >> 2];
 return;
}
function __ZNK7WebCore19RenderTextLineBoxes14caretMinOffsetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 44 >> 2] | 0;
 i4 = HEAP32[i2 + 40 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i3 = i1;
  return i3 | 0;
 } else {
  i5 = i1;
  i6 = i4;
 }
 while (1) {
  i4 = HEAP32[i6 + 44 >> 2] | 0;
  i1 = (i4 | 0) < (i5 | 0) ? i4 : i5;
  i4 = HEAP32[i6 + 40 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i3 = i1;
   break;
  } else {
   i5 = i1;
   i6 = i4;
  }
 }
 return i3 | 0;
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
function __ZN7WebCore19RenderTextLineBoxes19removeAllFromParentERNS_10RenderTextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i1 = i3;
  while (1) {
   __ZN7WebCore9InlineBox16removeFromParentEv(i1 | 0);
   i1 = HEAP32[i1 + 40 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
  }
  return;
 }
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 644 >> 2] & 1](i1, i2 | 0);
 return;
}
function __ZNK7WebCore19RenderTextLineBoxes15hasRenderedTextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 while (1) {
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 0;
   i4 = 6;
   break;
  }
  if ((HEAP16[i1 + 48 >> 1] | 0) == 0) {
   i2 = i1 + 40 | 0;
  } else {
   i3 = 1;
   i4 = 5;
   break;
  }
 }
 if ((i4 | 0) == 5) {
  return i3 | 0;
 } else if ((i4 | 0) == 6) {
  return i3 | 0;
 }
 return 0;
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
function __ZN7WebCore19RenderTextLineBoxes9deleteAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 } else {
  i4 = i3;
 }
 while (1) {
  i3 = HEAP32[i4 + 40 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 3](i4);
  if ((i3 | 0) == 0) {
   break;
  } else {
   i4 = i3;
  }
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore19RenderTextLineBoxes8dirtyAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i3 = i2;
 }
 while (1) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 104 >> 2] & 3](i3 | 0);
  i3 = HEAP32[i3 + 40 >> 2] | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function dynCall_iifi(i1, i2, d3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iifi[i1 & 1](i2 | 0, +d3, i4 | 0) | 0;
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
function __ZN7WebCore19RenderTextLineBoxesC2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore19RenderTextLineBoxesC1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 1](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
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
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
}
function b5(i1, d2, i3) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 abort(5);
 return 0;
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore19RenderTextLineBoxesC2Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  var FUNCTION_TABLE_iifi = [b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_iifi: dynCall_iifi, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_iifi": invoke_iifi, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_iifi = Module["dynCall_iifi"] = asm["dynCall_iifi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCoreL48createVisiblePositionAfterAdjustingOffsetForBiDiERKNS_13InlineTextBoxEiNS_26ShouldAffinityBeDownstreamE","_strlen","__ZNK7WebCore19RenderTextLineBoxes15hasRenderedTextEv","__ZN7WebCore19RenderTextLineBoxes10dirtyRangeERNS_10RenderTextEjji","__ZNK7WebCore19RenderTextLineBoxes25visualOverflowBoundingBoxERKNS_10RenderTextE","__ZNK7WebCore19RenderTextLineBoxes14caretMaxOffsetERKNS_10RenderTextE","__ZN7WebCore19RenderTextLineBoxes6removeERNS_13InlineTextBoxE","__ZNK7WebCore19RenderTextLineBoxes26countCharacterOffsetsUntilEj","__ZN7WebCore19RenderTextLineBoxes6attachERNS_13InlineTextBoxE","__ZN7WebCore19RenderTextLineBoxesC2Ev","__ZN7WebCore19RenderTextLineBoxes17setSelectionStateERNS_10RenderTextENS_12RenderObject14SelectionStateE","_memset","__ZNK7WebCore19RenderTextLineBoxes14containsOffsetERKNS_10RenderTextEjNS0_10OffsetTypeE","__ZNK7WebCore19RenderTextLineBoxes14caretMinOffsetEv","_memcpy","__ZNK7WebCore19RenderTextLineBoxes13absoluteQuadsERKNS_10RenderTextEPbNS0_14ClippingOptionE","__ZN7WebCore19RenderTextLineBoxes19removeAllFromParentERNS_10RenderTextE","__ZN7WebCore19RenderTextLineBoxes8dirtyAllEv","__ZN7WebCore19RenderTextLineBoxes9deleteAllEv","__ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore19RenderTextLineBoxes16positionForPointERKNS_10RenderTextERKNS_11LayoutPointE","__ZNK7WebCore19RenderTextLineBoxes13absoluteRectsERKNS_11LayoutPointE","__ZN7WebCoreL19localQuadForTextBoxERKNS_13InlineTextBoxEjjb","__ZN7WebCore19RenderTextLineBoxes21selectionRectForRangeEjj","__ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore19RenderTextLineBoxes21absoluteQuadsForRangeERKNS_10RenderTextEjjbPb","__ZNK7WebCore19RenderTextLineBoxes21absoluteRectsForRangeERKNS_10RenderTextEjjbPb","__ZNK7WebCore19RenderTextLineBoxes11boundingBoxERKNS_10RenderTextE","__ZN7WebCore19RenderTextLineBoxes22createAndAppendLineBoxERNS_10RenderTextE","__ZNK7WebCore19RenderTextLineBoxes8findNextEiRi","__ZN7WebCore19RenderTextLineBoxes7extractERNS_13InlineTextBoxE"]

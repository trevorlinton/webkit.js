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
function invoke_fi(index,a1) {
  try {
    return Module["dynCall_fi"](index,a1);
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
function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5);
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
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_fi=env.invoke_fi;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var _round=env._round;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore9InlineBox13logicalHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 32 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 & 1024 | 0) != 0) {
  d7 = +FUNCTION_TABLE_fi[HEAP32[(HEAP32[i1 >> 2] | 0) + 64 >> 2] & 1](i1);
  STACKTOP = i2;
  return +d7;
 }
 i8 = i1 + 16 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = (HEAP32[i9 + 20 >> 2] & 768 | 0) == 256;
 do {
  if ((i6 & 1 | 0) == 0) {
   if (i10) {
    i11 = HEAP32[(HEAP32[i9 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i11 = HEAP32[i9 + 36 >> 2] | 0;
    break;
   }
  } else {
   if (i10) {
    i12 = HEAP32[i9 + 8 >> 2] | 0;
    if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i12 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
     i11 = HEAP32[i12 + 36 >> 2] | 0;
     break;
    } else {
     i11 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i12) | 0;
     break;
    }
   } else {
    if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i9 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
     i11 = HEAP32[i9 + 36 >> 2] | 0;
     break;
    } else {
     i11 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i9) | 0;
     break;
    }
   }
  }
 } while (0);
 i9 = HEAP32[i8 >> 2] | 0;
 i8 = HEAP32[i9 + 20 >> 2] | 0;
 if ((i8 & 768 | 0) == 256 | (i8 & 4096 | 0) != 0) {
  if ((HEAP32[i5 >> 2] & 131072 | 0) == 0) {
   d7 = +0;
   STACKTOP = i2;
   return +d7;
  }
  i10 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i11) | 0;
  i6 = _round(+(+HEAPF32[i10 + 4 >> 2])) | 0;
  d7 = +((_round(+(+HEAPF32[i10 + 8 >> 2])) | 0) + i6 | 0);
  STACKTOP = i2;
  return +d7;
 }
 do {
  if ((i8 & 512 | 0) != 0) {
   if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
    break;
   }
   if ((HEAP32[i5 >> 2] & 2048 | 0) == 0) {
    i13 = i9 + 52 | 0;
   } else {
    i13 = i9 + 56 | 0;
   }
   d7 = +(HEAP32[i13 >> 2] | 0);
   STACKTOP = i2;
   return +d7;
  }
 } while (0);
 i13 = i9;
 i5 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i11) | 0;
 i11 = _round(+(+HEAPF32[i5 + 4 >> 2])) | 0;
 d14 = +((_round(+(+HEAPF32[i5 + 8 >> 2])) | 0) + i11 | 0);
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  d7 = d14;
  STACKTOP = i2;
  return +d7;
 }
 i1 = i9;
 i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 752 >> 2] & 1](i13) | 0;
 i5 = i9;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 720 >> 2] & 1](i4, i13);
 i9 = (HEAP32[i4 >> 2] | 0) + i11 | 0;
 i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 756 >> 2] & 1](i13) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 724 >> 2] & 1](i3, i13);
 d7 = d14 + +(i9 + i11 + (HEAP32[i3 >> 2] | 0) | 0);
 STACKTOP = i2;
 return +d7;
}
function __ZN7WebCore9InlineBox25locationIncludingFlippingEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0, d7 = +0, d8 = +0, d9 = +0;
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 if ((HEAP32[i3 + 20 >> 2] & 768 | 0) == 256) {
  i4 = HEAP32[(HEAP32[i3 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i4 = HEAP32[i3 + 36 >> 2] | 0;
 }
 i3 = (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i3 | 0) == 3 | (i3 | 0) == 1) {
  i5 = i2;
 } else {
  d6 = +HEAPF32[i2 + 24 >> 2];
  HEAPF32[i1 >> 2] = +HEAPF32[i2 + 20 >> 2];
  HEAPF32[i1 + 4 >> 2] = d6;
  return;
 }
 while (1) {
  i3 = HEAP32[i5 + 12 >> 2] | 0;
  if ((i3 | 0) == 0) {
   break;
  } else {
   i5 = i3 | 0;
  }
 }
 i3 = __ZNK7WebCore13RootInlineBox9blockFlowEv(i5) | 0;
 i5 = (HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  d6 = +HEAPF32[i2 + 20 >> 2];
  i5 = HEAP32[i3 + 56 >> 2] | 0;
  if ((HEAP32[i2 + 32 >> 2] & 2048 | 0) == 0) {
   d7 = +HEAPF32[i2 + 28 >> 2];
  } else {
   d7 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i2);
  }
  d8 = +(i5 | 0) - d7 - +HEAPF32[i2 + 24 >> 2];
  HEAPF32[i1 >> 2] = d6;
  HEAPF32[i1 + 4 >> 2] = d8;
  return;
 } else {
  i5 = HEAP32[i3 + 52 >> 2] | 0;
  if ((HEAP32[i2 + 32 >> 2] & 2048 | 0) == 0) {
   d9 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i2);
  } else {
   d9 = +HEAPF32[i2 + 28 >> 2];
  }
  d8 = +HEAPF32[i2 + 24 >> 2];
  HEAPF32[i1 >> 2] = +(i5 | 0) - d9 - +HEAPF32[i2 + 20 >> 2];
  HEAPF32[i1 + 4 >> 2] = d8;
  return;
 }
}
function __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1;
 while (1) {
  i1 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i1 | 0) != 0) {
   i3 = i1;
   while (1) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 76 >> 2] & 1](i3) | 0) {
     i4 = i3;
    } else {
     i4 = __ZNK7WebCore13InlineFlowBox14firstLeafChildEv(i3) | 0;
    }
    i3 = HEAP32[i3 + 4 >> 2] | 0;
    i5 = (i4 | 0) == 0;
    if (!((i3 | 0) != 0 & i5)) {
     break;
    }
   }
   if (!i5) {
    i6 = 8;
    break;
   }
  }
  i3 = HEAP32[i2 + 12 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i7 = 0;
   break;
  } else {
   i2 = i3 | 0;
  }
 }
 do {
  if ((i6 | 0) == 8) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 1](i4) | 0) {
    i8 = 0;
   } else {
    i7 = i4;
    break;
   }
   return i8 | 0;
  }
 } while (0);
 i8 = i7;
 return i8 | 0;
}
function __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1;
 while (1) {
  i1 = HEAP32[i2 + 8 >> 2] | 0;
  if ((i1 | 0) != 0) {
   i3 = i1;
   while (1) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 76 >> 2] & 1](i3) | 0) {
     i4 = i3;
    } else {
     i4 = __ZNK7WebCore13InlineFlowBox13lastLeafChildEv(i3) | 0;
    }
    i3 = HEAP32[i3 + 8 >> 2] | 0;
    i5 = (i4 | 0) == 0;
    if (!((i3 | 0) != 0 & i5)) {
     break;
    }
   }
   if (!i5) {
    i6 = 8;
    break;
   }
  }
  i3 = HEAP32[i2 + 12 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i7 = 0;
   break;
  } else {
   i2 = i3 | 0;
  }
 }
 do {
  if ((i6 | 0) == 8) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 1](i4) | 0) {
    i8 = 0;
   } else {
    i7 = i4;
    break;
   }
   return i8 | 0;
  }
 } while (0);
 i8 = i7;
 return i8 | 0;
}
function __ZN7WebCore9InlineBox18flipForWritingModeERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = HEAP32[i2 + 16 >> 2] | 0;
 if ((HEAP32[i4 + 20 >> 2] & 768 | 0) == 256) {
  i5 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i5 = HEAP32[i4 + 36 >> 2] | 0;
 }
 i4 = (HEAP32[i5 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i4 | 0) == 3 | (i4 | 0) == 1) {
  i6 = i2;
 } else {
  i2 = i3;
  i4 = i1;
  i5 = HEAP32[i2 + 4 >> 2] | 0;
  HEAP32[i4 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i4 + 4 >> 2] = i5;
  return;
 }
 while (1) {
  i5 = HEAP32[i6 + 12 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  } else {
   i6 = i5 | 0;
  }
 }
 __ZNK7WebCore9RenderBox18flipForWritingModeERKNS_11LayoutPointE(i1, __ZNK7WebCore13RootInlineBox9blockFlowEv(i6) | 0, i3);
 return;
}
function __ZN7WebCore9InlineBox18flipForWritingModeERKNS_10FloatPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = HEAP32[i2 + 16 >> 2] | 0;
 if ((HEAP32[i4 + 20 >> 2] & 768 | 0) == 256) {
  i5 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i5 = HEAP32[i4 + 36 >> 2] | 0;
 }
 i4 = (HEAP32[i5 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i4 | 0) == 3 | (i4 | 0) == 1) {
  i6 = i2;
 } else {
  i2 = i3;
  i4 = i1;
  i5 = HEAP32[i2 + 4 >> 2] | 0;
  HEAP32[i4 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i4 + 4 >> 2] = i5;
  return;
 }
 while (1) {
  i5 = HEAP32[i6 + 12 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  } else {
   i6 = i5 | 0;
  }
 }
 __ZNK7WebCore9RenderBox18flipForWritingModeERKNS_10FloatPointE(i1, __ZNK7WebCore13RootInlineBox9blockFlowEv(i6) | 0, i3);
 return;
}
function __ZN7WebCore9InlineBox14adjustPositionEff(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = i1 + 20 | 0;
 HEAPF32[i4 >> 2] = +HEAPF32[i4 >> 2] + d2;
 i4 = i1 + 24 | 0;
 HEAPF32[i4 >> 2] = +HEAPF32[i4 >> 2] + d3;
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 if ((HEAP32[i4 + 20 >> 2] & 2048 | 0) == 0) {
  return;
 }
 do {
  if (d2 < +2147483647) {
   if (d2 <= +-2147483648) {
    i5 = -2147483648;
    break;
   }
   i5 = ~~d2;
  } else {
   i5 = 2147483647;
  }
 } while (0);
 do {
  if (d3 < +2147483647) {
   if (d3 <= +-2147483648) {
    i6 = -2147483648;
    break;
   }
   i6 = ~~d3;
  } else {
   i6 = 2147483647;
  }
 } while (0);
 i1 = i4 + 44 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + i5;
 i5 = i4 + 48 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + i6;
 return;
}
function __ZNK7WebCore9InlineBox13nextLeafChildEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1;
 while (1) {
  i1 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i1 | 0) != 0) {
   i3 = i1;
   while (1) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 76 >> 2] & 1](i3) | 0) {
     i4 = i3;
    } else {
     i4 = __ZNK7WebCore13InlineFlowBox14firstLeafChildEv(i3) | 0;
    }
    i3 = HEAP32[i3 + 4 >> 2] | 0;
    i5 = (i4 | 0) == 0;
    if (!((i3 | 0) != 0 & i5)) {
     break;
    }
   }
   if (!i5) {
    i6 = i4;
    i7 = 10;
    break;
   }
  }
  i3 = HEAP32[i2 + 12 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i6 = 0;
   i7 = 9;
   break;
  } else {
   i2 = i3 | 0;
  }
 }
 if ((i7 | 0) == 9) {
  return i6 | 0;
 } else if ((i7 | 0) == 10) {
  return i6 | 0;
 }
 return 0;
}
function __ZNK7WebCore9InlineBox13prevLeafChildEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1;
 while (1) {
  i1 = HEAP32[i2 + 8 >> 2] | 0;
  if ((i1 | 0) != 0) {
   i3 = i1;
   while (1) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 76 >> 2] & 1](i3) | 0) {
     i4 = i3;
    } else {
     i4 = __ZNK7WebCore13InlineFlowBox13lastLeafChildEv(i3) | 0;
    }
    i3 = HEAP32[i3 + 8 >> 2] | 0;
    i5 = (i4 | 0) == 0;
    if (!((i3 | 0) != 0 & i5)) {
     break;
    }
   }
   if (!i5) {
    i6 = i4;
    i7 = 9;
    break;
   }
  }
  i3 = HEAP32[i2 + 12 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i6 = 0;
   i7 = 10;
   break;
  } else {
   i2 = i3 | 0;
  }
 }
 if ((i7 | 0) == 9) {
  return i6 | 0;
 } else if ((i7 | 0) == 10) {
  return i6 | 0;
 }
 return 0;
}
function __ZNK7WebCore9InlineBox16nextOnLineExistsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 & 262144 | 0) == 0) {
   i4 = i3 | 262144;
   HEAP32[i2 >> 2] = i4;
   i5 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i6 = i4 & -524289;
    HEAP32[i2 >> 2] = i6;
    i7 = i6;
    break;
   }
   if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
    i6 = ((__ZNK7WebCore9InlineBox16nextOnLineExistsEv(i5 | 0) | 0) & 1) << 19;
    i5 = HEAP32[i2 >> 2] & -524289 | i6;
    HEAP32[i2 >> 2] = i5;
    i7 = i5;
    break;
   } else {
    i5 = i3 | 786432;
    HEAP32[i2 >> 2] = i5;
    i7 = i5;
    break;
   }
  } else {
   i7 = i3;
  }
 } while (0);
 return (i7 & 524288 | 0) != 0 | 0;
}
function __ZNK7WebCore9InlineBox22canAccommodateEllipsisEbii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 if ((HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 20 >> 2] & 2048 | 0) == 0) {
  i8 = 1;
  STACKTOP = i5;
  return i8 | 0;
 }
 i9 = ~~+HEAPF32[i1 + 28 >> 2];
 HEAP32[i6 >> 2] = ~~+HEAPF32[i1 + 20 >> 2];
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = i9;
 HEAP32[i6 + 12 >> 2] = 10;
 HEAP32[i7 >> 2] = i3 - (i2 ? i4 : 0);
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP32[i7 + 8 >> 2] = i4;
 HEAP32[i7 + 12 >> 2] = 10;
 i8 = (__ZNK7WebCore7IntRect10intersectsERKS0_(i6, i7) | 0) ^ 1;
 STACKTOP = i5;
 return i8 | 0;
}
function __ZN7WebCore9InlineBox18flipForWritingModeERNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 if ((HEAP32[i3 + 20 >> 2] & 768 | 0) == 256) {
  i4 = HEAP32[(HEAP32[i3 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i4 = HEAP32[i3 + 36 >> 2] | 0;
 }
 i3 = (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i3 | 0) == 3 | (i3 | 0) == 1) {
  i5 = i1;
 } else {
  return;
 }
 while (1) {
  i1 = HEAP32[i5 + 12 >> 2] | 0;
  if ((i1 | 0) == 0) {
   break;
  } else {
   i5 = i1 | 0;
  }
 }
 __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(__ZNK7WebCore13RootInlineBox9blockFlowEv(i5) | 0, i2);
 return;
}
function __ZN7WebCore9InlineBox18flipForWritingModeERNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 if ((HEAP32[i3 + 20 >> 2] & 768 | 0) == 256) {
  i4 = HEAP32[(HEAP32[i3 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i4 = HEAP32[i3 + 36 >> 2] | 0;
 }
 i3 = (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i3 | 0) == 3 | (i3 | 0) == 1) {
  i5 = i1;
 } else {
  return;
 }
 while (1) {
  i1 = HEAP32[i5 + 12 >> 2] | 0;
  if ((i1 | 0) == 0) {
   break;
  } else {
   i5 = i1 | 0;
  }
 }
 __ZNK7WebCore9RenderBox18flipForWritingModeERNS_9FloatRectE(__ZNK7WebCore13RootInlineBox9blockFlowEv(i5) | 0, i2);
 return;
}
function __ZN7WebCore9InlineBox14dirtyLineBoxesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 100 >> 2] & 1](i1, 1);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i3 = i2;
 }
 while (1) {
  if ((HEAP32[i3 + 32 >> 2] & 256 | 0) != 0) {
   i4 = 6;
   break;
  }
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 100 >> 2] & 1](i3 | 0, 1);
  i2 = HEAP32[i3 + 12 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i4 = 7;
   break;
  } else {
   i3 = i2;
  }
 }
 if ((i4 | 0) == 6) {
  return;
 } else if ((i4 | 0) == 7) {
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
function __ZNK7WebCore9InlineBox16baselinePositionENS_12FontBaselineE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((HEAP32[i3 + 20 >> 2] & 4096 | 0) != 0) {
   if ((i4 & 131072 | 0) == 0) {
    i5 = 0;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 i5 = FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i3 >> 2] | 0) + 816 >> 2] & 1](i3, i2, (i4 & 1 | 0) != 0, i4 >>> 11 & 1 ^ 1, 0) | 0;
 return i5 | 0;
}
function __ZNK7WebCore9InlineBox10lineHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 i4 = HEAP32[i2 + 32 >> 2] | 0;
 do {
  if ((HEAP32[i3 + 20 >> 2] & 4096 | 0) != 0) {
   if ((i4 & 131072 | 0) != 0) {
    break;
   }
   HEAP32[i1 >> 2] = 0;
   return;
  }
 } while (0);
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i3 >> 2] | 0) + 812 >> 2] & 1](i1, i3, (i4 & 1 | 0) != 0, i4 >>> 11 & 1 ^ 1, 0);
 return;
}
function __ZN7WebCore9InlineBox26clearKnownToHaveNoOverflowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1;
 while (1) {
  i1 = i2 + 32 | 0;
  HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -16385;
  i1 = HEAP32[i2 + 12 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 5;
   break;
  }
  if ((HEAP32[i1 + 32 >> 2] & 16384 | 0) == 0) {
   i3 = 6;
   break;
  } else {
   i2 = i1 | 0;
  }
 }
 if ((i3 | 0) == 5) {
  return;
 } else if ((i3 | 0) == 6) {
  return;
 }
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
function __ZNK7WebCore9InlineBox20previousOnLineExistsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1;
 while (1) {
  i1 = HEAP32[i2 + 12 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 0;
   i4 = 5;
   break;
  }
  if ((HEAP32[i2 + 8 >> 2] | 0) == 0) {
   i2 = i1 | 0;
  } else {
   i3 = 1;
   i4 = 6;
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
function __ZNK7WebCore9InlineBox4rootEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
 } else {
  i1 = i2;
  while (1) {
   i2 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   } else {
    i1 = i2;
   }
  }
  i3 = i1 | 0;
 }
 return i3 | 0;
}
function __ZN7WebCore9InlineBox16placeEllipsisBoxEbfffRfRb(i1, i2, d3, d4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 HEAPF32[i6 >> 2] = +HEAPF32[i1 + 28 >> 2] + +HEAPF32[i6 >> 2];
 return +(+-1);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore9InlineBox16removeFromParentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore13InlineFlowBox11removeChildEPNS_9InlineBoxE(i2, i1);
 return;
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function __ZN7WebCore9InlineBox4rootEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (1) {
  i1 = HEAP32[i2 + 12 >> 2] | 0;
  if ((i1 | 0) == 0) {
   break;
  } else {
   i2 = i1 | 0;
  }
 }
 return i2 | 0;
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
function __ZNK7WebCore9InlineBox14caretMinOffsetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 564 >> 2] & 1](i2) | 0;
}
function __ZNK7WebCore9InlineBox14caretMaxOffsetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 568 >> 2] & 1](i2) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore9InlineBox14selectionStateEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 20 >> 2] | 0) >>> 25 & 7 | 0;
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
function b7(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(7);
 return 0;
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
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_fi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_fi[i1 & 1](i2 | 0);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
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
function b5(i1) {
 i1 = i1 | 0;
 abort(5);
 return +0;
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_fi = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  var FUNCTION_TABLE_iiiiii = [b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_fi: dynCall_fi, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_fi": invoke_fi, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "_round": _round, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_fi = Module["dynCall_fi"] = asm["dynCall_fi"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore9InlineBox4rootEv","__ZNK7WebCore9InlineBox13nextLeafChildEv","__ZN7WebCore9InlineBox14selectionStateEv","__ZNK7WebCore9InlineBox14caretMaxOffsetEv","__ZN7WebCore9InlineBox18flipForWritingModeERKNS_10FloatPointE","__ZN7WebCore9InlineBox18flipForWritingModeERKNS_11LayoutPointE","__ZN7WebCore9InlineBox16placeEllipsisBoxEbfffRfRb","__ZN7WebCore9InlineBox26clearKnownToHaveNoOverflowEv","__ZN7WebCore9InlineBox25locationIncludingFlippingEv","__ZN7WebCore9InlineBox14dirtyLineBoxesEv","__ZN7WebCore9InlineBox16removeFromParentEv","__ZNK7WebCore9InlineBox16baselinePositionENS_12FontBaselineE","_memset","__ZN7WebCore9InlineBox14adjustPositionEff","_memcpy","__ZNK7WebCore9InlineBox14caretMinOffsetEv","__ZNK7WebCore9InlineBox13logicalHeightEv","__ZNK7WebCore9InlineBox20previousOnLineExistsEv","__ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv","__ZNK7WebCore9InlineBox4rootEv","__ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv","__ZN7WebCore9InlineBox18flipForWritingModeERNS_9FloatRectE","__ZNK7WebCore9InlineBox22canAccommodateEllipsisEbii","__ZN7WebCore9InlineBox18flipForWritingModeERNS_10LayoutRectE","__ZNK7WebCore9InlineBox13prevLeafChildEv","__ZNK7WebCore9InlineBox10lineHeightEv","__ZNK7WebCore9InlineBox16nextOnLineExistsEv"]

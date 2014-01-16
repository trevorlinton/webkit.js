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
H_BASE = parentModule["_malloc"](112 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 112;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore17MouseRelatedEventC1Ev;
var __ZN7WebCore17MouseRelatedEventC1ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiRKNS_8IntPointESA_bbbbb;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_viiiidiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14) {
  try {
    Module["dynCall_viiiidiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14);
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
  var __ZTVN7WebCore17MouseRelatedEventE=(H_BASE+8)|0;
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
  var invoke_viiiidiiiiiiiii=env.invoke_viiiidiiiiiiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var _round=env._round;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore17MouseRelatedEvent23computeRelativePositionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, d19 = +0, d20 = +0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 63](i5) | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 + 88 | 0;
 i7 = i1 + 80 | 0;
 i8 = i5;
 i9 = HEAP32[i7 >> 2] | 0;
 i10 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 HEAP32[i8 + 4 >> 2] = i10;
 i8 = i1 + 96 | 0;
 i7 = i8;
 HEAP32[i7 >> 2] = i9;
 HEAP32[i7 + 4 >> 2] = i10;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i10 = i6 + 32 | 0;
 if ((HEAP32[i6 + 12 >> 2] & 2048 | 0) == 0) {
  i11 = i10 | 0;
 } else {
  i11 = HEAP32[i10 >> 2] | 0;
 }
 i10 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i12 = i6;
  } else {
   d13 = +(HEAP32[i1 + 108 >> 2] | 0);
   HEAPF32[i4 >> 2] = +(HEAP32[i1 + 104 >> 2] | 0);
   HEAPF32[i4 + 4 >> 2] = d13;
   __ZNK7WebCore12RenderObject15absoluteToLocalERKNS_10FloatPointEj(i3, i10, i4, 2);
   d13 = +_round(+(+HEAPF32[i3 >> 2]));
   do {
    if (d13 < +2147483647) {
     if (d13 <= +-2147483648) {
      i14 = 0;
      i15 = -2147483648;
      break;
     }
     i14 = 0;
     i15 = ~~d13;
    } else {
     i14 = 0;
     i15 = 2147483647;
    }
   } while (0);
   d13 = +_round(+(+HEAPF32[i3 + 4 >> 2]));
   do {
    if (d13 < +2147483647) {
     if (d13 <= +-2147483648) {
      i16 = -2147483648;
      i17 = 0;
      break;
     }
     i16 = ~~d13;
     i17 = 0;
    } else {
     i16 = 2147483647;
     i17 = 0;
    }
   } while (0);
   HEAP32[i7 >> 2] = i17 | i15;
   HEAP32[i7 + 4 >> 2] = i16 | i14;
   i11 = HEAP32[i1 + 52 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     d18 = +1;
     d19 = +1;
    } else {
     i9 = HEAP32[i11 + 52 >> 2] | 0;
     if ((i9 | 0) == 0) {
      d18 = +1;
      d19 = +1;
      break;
     }
     d13 = +HEAPF32[i9 + 480 >> 2];
     d18 = +__ZNK7WebCore5Frame16frameScaleFactorEv(i9);
     d19 = d13;
    }
   } while (0);
   d13 = +1 / (d19 * d18);
   if (d13 == +1) {
    i12 = i6;
    break;
   }
   i11 = i8 | 0;
   d20 = d13 * +(HEAP32[i11 >> 2] | 0);
   do {
    if (d20 < +2147483647) {
     if (d20 <= +-2147483648) {
      i21 = -2147483648;
      break;
     }
     i21 = ~~d20;
    } else {
     i21 = 2147483647;
    }
   } while (0);
   HEAP32[i11 >> 2] = i21;
   i9 = i1 + 100 | 0;
   d20 = d13 * +(HEAP32[i9 >> 2] | 0);
   do {
    if (d20 < +2147483647) {
     if (d20 <= +-2147483648) {
      i22 = -2147483648;
      break;
     }
     i22 = ~~d20;
    } else {
     i22 = 2147483647;
    }
   } while (0);
   HEAP32[i9 >> 2] = i22;
   i12 = i6;
  }
 } while (0);
 while (1) {
  i23 = (HEAP32[i12 + 12 >> 2] & 2048 | 0) == 0;
  i24 = i12 + 32 | 0;
  if (i23) {
   i25 = i24 | 0;
  } else {
   i25 = HEAP32[i24 >> 2] | 0;
  }
  if ((HEAP32[i25 >> 2] | 0) != 0) {
   i26 = 30;
   break;
  }
  i6 = HEAP32[i12 + 16 >> 2] | 0;
  if ((i6 | 0) == 0) {
   break;
  }
  i12 = i6 | 0;
 }
 do {
  if ((i26 | 0) == 30) {
   if (i23) {
    i27 = i24 | 0;
   } else {
    i27 = HEAP32[i24 >> 2] | 0;
   }
   i12 = __ZNK7WebCore12RenderObject14enclosingLayerEv(HEAP32[i27 >> 2] | 0) | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i25 = i5 | 0;
   i6 = i1 + 92 | 0;
   i22 = i12;
   i12 = HEAP32[i25 >> 2] | 0;
   i21 = HEAP32[i6 >> 2] | 0;
   while (1) {
    i8 = HEAP32[i22 + 100 >> 2] | 0;
    i12 = i12 - (HEAP32[i22 + 96 >> 2] | 0) | 0;
    HEAP32[i25 >> 2] = i12;
    i21 = i21 - i8 | 0;
    HEAP32[i6 >> 2] = i21;
    i22 = HEAP32[i22 + 36 >> 2] | 0;
    if ((i22 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 HEAP8[i1 + 113 | 0] = 1;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17MouseRelatedEventC2ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiRKNS_8IntPointESA_bbbbb(i1, i2, i3, i4, d5, i6, i7, i8, i9, i10, i11, i12, i13, i14) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 var i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, i25 = 0, i26 = 0, i27 = 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i16 = i15 | 0;
 i17 = i15 + 16 | 0;
 i18 = i15 + 24 | 0;
 i19 = i6 | 0;
 i6 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 i19 = i17 | 0;
 HEAP32[i19 >> 2] = i6;
 __ZN7WebCore7UIEventC2ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEi(i1, i2, i3, i4, d5, i17, i7);
 i7 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i19 = i7 + 36 | 0;
   i17 = i19 | 0;
   i4 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i17 >> 2] = i4;
    break;
   }
   i4 = i19 - 36 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 44 >> 2] & 15](i4);
  }
 } while (0);
 i7 = i1 + 60 | 0;
 HEAP8[i7] = (i11 & 1) << 1 | i10 & 1 | (i12 & 1) << 2 | (i13 & 1) << 3 | HEAP8[i7] & -16;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i7 = i8;
 i8 = i1 + 64 | 0;
 i13 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i8 + 4 >> 2] = i13;
 i13 = i1 + 72 | 0;
 i8 = i1 + 80 | 0;
 i7 = i1 + 88 | 0;
 i12 = i1 + 96 | 0;
 _memset(i13 | 0, 0, 40) | 0;
 HEAP8[i1 + 112 | 0] = i14 & 1;
 i10 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i20 = 0;
   i21 = 0;
   i22 = 0;
   i23 = 0;
  } else {
   i11 = HEAP32[i10 + 52 >> 2] | 0;
   if ((i11 | 0) == 0 | i14) {
    i20 = 0;
    i21 = 0;
    i22 = 0;
    i23 = 0;
    break;
   }
   i4 = HEAP32[i11 + 452 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i20 = 0;
    i21 = 0;
    i22 = 0;
    i23 = 0;
    break;
   }
   i19 = i4 | 0;
   i17 = i16 | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 164 >> 2] & 3](i16, i19, 0);
   i4 = HEAP32[i17 >> 2] | 0;
   i3 = HEAP32[i17 + 4 >> 2] | 0;
   __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i18, i19, i9);
   i19 = HEAP32[i18 >> 2] | 0;
   i17 = HEAP32[i18 + 4 >> 2] | 0;
   d5 = +HEAPF32[i11 + 480 >> 2];
   d24 = +1 / (d5 * +__ZNK7WebCore5Frame16frameScaleFactorEv(i11));
   if (d24 == +1) {
    i20 = i4;
    i21 = i3;
    i22 = i19;
    i23 = i17;
    break;
   }
   d5 = +(i19 | 0) * d24;
   do {
    if (d5 < +2147483647) {
     if (d5 <= +-2147483648) {
      i25 = -2147483648;
      break;
     }
     i25 = ~~d5;
    } else {
     i25 = 2147483647;
    }
   } while (0);
   d5 = +(i17 | 0) * d24;
   do {
    if (d5 < +2147483647) {
     if (d5 <= +-2147483648) {
      i26 = -2147483648;
      break;
     }
     i26 = ~~d5;
    } else {
     i26 = 2147483647;
    }
   } while (0);
   d5 = +(i4 | 0) * d24;
   do {
    if (d5 < +2147483647) {
     if (d5 <= +-2147483648) {
      i27 = -2147483648;
      break;
     }
     i27 = ~~d5;
    } else {
     i27 = 2147483647;
    }
   } while (0);
   d5 = +(i3 | 0) * d24;
   if (d5 >= +2147483647) {
    i20 = i27;
    i21 = 2147483647;
    i22 = i25;
    i23 = i26;
    break;
   }
   if (d5 <= +-2147483648) {
    i20 = i27;
    i21 = -2147483648;
    i22 = i25;
    i23 = i26;
    break;
   }
   i20 = i27;
   i21 = ~~d5;
   i22 = i25;
   i23 = i26;
  }
 } while (0);
 i26 = i13;
 HEAP32[i26 >> 2] = i22 - i20;
 HEAP32[i26 + 4 >> 2] = i23 - i21;
 i21 = i8;
 i8 = i22 | 0;
 i22 = i23 | 0;
 HEAP32[i21 >> 2] = i8;
 HEAP32[i21 + 4 >> 2] = i22;
 i21 = i7;
 HEAP32[i21 >> 2] = i8;
 HEAP32[i21 + 4 >> 2] = i22;
 i21 = i12;
 HEAP32[i21 >> 2] = i8;
 HEAP32[i21 + 4 >> 2] = i22;
 __ZN7WebCore17MouseRelatedEvent19computePageLocationEv(i1);
 HEAP8[i1 + 113 | 0] = 0;
 STACKTOP = i15;
 return;
}
function __ZN7WebCore17MouseRelatedEventC1ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiRKNS_8IntPointESA_bbbbb(i1, i2, i3, i4, d5, i6, i7, i8, i9, i10, i11, i12, i13, i14) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 var i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, i25 = 0, i26 = 0, i27 = 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i16 = i15 | 0;
 i17 = i15 + 16 | 0;
 i18 = i15 + 24 | 0;
 i19 = i6 | 0;
 i6 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 i19 = i17 | 0;
 HEAP32[i19 >> 2] = i6;
 __ZN7WebCore7UIEventC2ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEi(i1, i2, i3, i4, d5, i17, i7);
 i7 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i19 = i7 + 36 | 0;
   i17 = i19 | 0;
   i4 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i17 >> 2] = i4;
    break;
   }
   i4 = i19 - 36 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 44 >> 2] & 15](i4);
  }
 } while (0);
 i7 = i1 + 60 | 0;
 HEAP8[i7] = (i11 & 1) << 1 | i10 & 1 | (i12 & 1) << 2 | (i13 & 1) << 3 | HEAP8[i7] & -16;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i7 = i8;
 i8 = i1 + 64 | 0;
 i13 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i8 + 4 >> 2] = i13;
 i13 = i1 + 72 | 0;
 i8 = i1 + 80 | 0;
 i7 = i1 + 88 | 0;
 i12 = i1 + 96 | 0;
 _memset(i13 | 0, 0, 40) | 0;
 HEAP8[i1 + 112 | 0] = i14 & 1;
 i10 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i20 = 0;
   i21 = 0;
   i22 = 0;
   i23 = 0;
  } else {
   i11 = HEAP32[i10 + 52 >> 2] | 0;
   if ((i11 | 0) == 0 | i14) {
    i20 = 0;
    i21 = 0;
    i22 = 0;
    i23 = 0;
    break;
   }
   i4 = HEAP32[i11 + 452 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i20 = 0;
    i21 = 0;
    i22 = 0;
    i23 = 0;
    break;
   }
   i19 = i4 | 0;
   i17 = i16 | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 164 >> 2] & 3](i16, i19, 0);
   i4 = HEAP32[i17 >> 2] | 0;
   i3 = HEAP32[i17 + 4 >> 2] | 0;
   __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i18, i19, i9);
   i19 = HEAP32[i18 >> 2] | 0;
   i17 = HEAP32[i18 + 4 >> 2] | 0;
   d5 = +HEAPF32[i11 + 480 >> 2];
   d24 = +1 / (d5 * +__ZNK7WebCore5Frame16frameScaleFactorEv(i11));
   if (d24 == +1) {
    i20 = i4;
    i21 = i3;
    i22 = i19;
    i23 = i17;
    break;
   }
   d5 = +(i19 | 0) * d24;
   do {
    if (d5 < +2147483647) {
     if (d5 <= +-2147483648) {
      i25 = -2147483648;
      break;
     }
     i25 = ~~d5;
    } else {
     i25 = 2147483647;
    }
   } while (0);
   d5 = +(i17 | 0) * d24;
   do {
    if (d5 < +2147483647) {
     if (d5 <= +-2147483648) {
      i26 = -2147483648;
      break;
     }
     i26 = ~~d5;
    } else {
     i26 = 2147483647;
    }
   } while (0);
   d5 = +(i4 | 0) * d24;
   do {
    if (d5 < +2147483647) {
     if (d5 <= +-2147483648) {
      i27 = -2147483648;
      break;
     }
     i27 = ~~d5;
    } else {
     i27 = 2147483647;
    }
   } while (0);
   d5 = +(i3 | 0) * d24;
   if (d5 >= +2147483647) {
    i20 = i27;
    i21 = 2147483647;
    i22 = i25;
    i23 = i26;
    break;
   }
   if (d5 <= +-2147483648) {
    i20 = i27;
    i21 = -2147483648;
    i22 = i25;
    i23 = i26;
    break;
   }
   i20 = i27;
   i21 = ~~d5;
   i22 = i25;
   i23 = i26;
  }
 } while (0);
 i26 = i13;
 HEAP32[i26 >> 2] = i22 - i20;
 HEAP32[i26 + 4 >> 2] = i23 - i21;
 i21 = i8;
 i8 = i22 | 0;
 i22 = i23 | 0;
 HEAP32[i21 >> 2] = i8;
 HEAP32[i21 + 4 >> 2] = i22;
 i21 = i7;
 HEAP32[i21 >> 2] = i8;
 HEAP32[i21 + 4 >> 2] = i22;
 i21 = i12;
 HEAP32[i21 >> 2] = i8;
 HEAP32[i21 + 4 >> 2] = i22;
 __ZN7WebCore17MouseRelatedEvent19computePageLocationEv(i1);
 HEAP8[i1 + 113 | 0] = 0;
 STACKTOP = i15;
 return;
}
function __ZN7WebCore17MouseRelatedEvent15initCoordinatesERKNS_11LayoutPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, d13 = +0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2;
 i7 = i1 + 72 | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i7 + 4 >> 2] = i8;
 i8 = i1 + 80 | 0;
 i7 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i9 = 0;
   i10 = 0;
  } else {
   i6 = HEAP32[i7 + 52 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i9 = 0;
    i10 = 0;
    break;
   }
   i11 = HEAP32[i6 + 452 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i9 = 0;
    i10 = 0;
    break;
   }
   d12 = +HEAPF32[i6 + 480 >> 2];
   d13 = d12 * +__ZNK7WebCore5Frame16frameScaleFactorEv(i6);
   i6 = i11 | 0;
   i14 = i11;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 192 >> 2] & 1](i4, i6);
   d12 = +(HEAP32[i4 >> 2] | 0) / d13;
   do {
    if (d12 < +2147483647) {
     if (d12 <= +-2147483648) {
      i15 = -2147483648;
      break;
     }
     i15 = ~~d12;
    } else {
     i15 = 2147483647;
    }
   } while (0);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 192 >> 2] & 1](i5, i6);
   d12 = +(HEAP32[i5 + 4 >> 2] | 0) / d13;
   if (d12 >= +2147483647) {
    i9 = i15;
    i10 = 2147483647;
    break;
   }
   if (d12 <= +-2147483648) {
    i9 = i15;
    i10 = -2147483648;
    break;
   }
   i9 = i15;
   i10 = ~~d12;
  }
 } while (0);
 i15 = i8;
 i8 = (HEAP32[i2 >> 2] | 0) + i9 | 0;
 i9 = (HEAP32[i2 + 4 >> 2] | 0) + i10 | 0;
 HEAP32[i15 >> 2] = i8;
 HEAP32[i15 + 4 >> 2] = i9;
 i15 = i1 + 88 | 0;
 HEAP32[i15 >> 2] = i8;
 HEAP32[i15 + 4 >> 2] = i9;
 i15 = i1 + 96 | 0;
 HEAP32[i15 >> 2] = i8;
 HEAP32[i15 + 4 >> 2] = i9;
 __ZN7WebCore17MouseRelatedEvent19computePageLocationEv(i1);
 HEAP8[i1 + 113 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17MouseRelatedEvent19computePageLocationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0, d4 = +0, i5 = 0, d6 = +0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   d3 = +1;
   d4 = +1;
  } else {
   i5 = HEAP32[i2 + 52 >> 2] | 0;
   if ((i5 | 0) == 0) {
    d3 = +1;
    d4 = +1;
    break;
   }
   d6 = +HEAPF32[i5 + 480 >> 2];
   d3 = +__ZNK7WebCore5Frame16frameScaleFactorEv(i5);
   d4 = d6;
  }
 } while (0);
 d6 = d4 * d3;
 i2 = i1;
 d3 = d6 * +(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 80 >> 2] & 63](i1) | 0);
 d4 = d6 * +(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 84 >> 2] & 63](i1) | 0);
 d6 = +_round(+d3);
 do {
  if (d6 < +2147483647) {
   if (d6 <= +-2147483648) {
    i7 = 0;
    i8 = -2147483648;
    break;
   }
   i7 = 0;
   i8 = ~~d6;
  } else {
   i7 = 0;
   i8 = 2147483647;
  }
 } while (0);
 d6 = +_round(+d4);
 do {
  if (d6 < +2147483647) {
   if (d6 <= +-2147483648) {
    i9 = -2147483648;
    i10 = 0;
    break;
   }
   i9 = ~~d6;
   i10 = 0;
  } else {
   i9 = 2147483647;
   i10 = 0;
  }
 } while (0);
 i2 = i1 + 104 | 0;
 HEAP32[i2 >> 2] = i10 | i8;
 HEAP32[i2 + 4 >> 2] = i9 | i7;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 12;
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
function dynCall_viiiidiiiiiiiii(i1, i2, i3, i4, i5, d6, i7, i8, i9, i10, i11, i12, i13, i14, i15) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 i15 = i15 | 0;
 FUNCTION_TABLE_viiiidiiiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, +d6, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0, i12 | 0, i13 | 0, i14 | 0, i15 | 0);
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
function __ZN7WebCore17MouseRelatedEvent15initCoordinatesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 80 | 0;
 i3 = i1 + 88 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 HEAP32[i3 + 4 >> 2] = i5;
 i3 = i1 + 96 | 0;
 HEAP32[i3 >> 2] = i4;
 HEAP32[i3 + 4 >> 2] = i5;
 __ZN7WebCore17MouseRelatedEvent19computePageLocationEv(i1);
 HEAP8[i1 + 113 | 0] = 0;
 return;
}
function b0(i1, i2, i3, i4, d5, i6, i7, i8, i9, i10, i11, i12, i13, i14) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 abort(0);
}
function __ZN7WebCore17MouseRelatedEventC2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore7UIEventC2Ev(i1);
 i2 = i1 + 60 | 0;
 HEAP8[i2] = HEAP8[i2] & -16;
 HEAP32[i1 >> 2] = H_BASE + 16;
 _memset(i1 + 64 | 0, 0, 50) | 0;
 return;
}
function __ZN7WebCore17MouseRelatedEventC1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore7UIEventC2Ev(i1);
 i2 = i1 + 60 | 0;
 HEAP8[i2] = HEAP8[i2] & -16;
 HEAP32[i1 >> 2] = H_BASE + 16;
 _memset(i1 + 64 | 0, 0, 50) | 0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore17MouseRelatedEvent7offsetYEv(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 113 | 0] & 1) == 0) {
  __ZN7WebCore17MouseRelatedEvent23computeRelativePositionEv(i1);
 }
 return HEAP32[i1 + 100 >> 2] | 0;
}
function viii___ZNK7WebCore5Event8cloneForEPNS_17HTMLIFrameElementE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore5Event8cloneForEPNS_17HTMLIFrameElementE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore17MouseRelatedEvent7offsetXEv(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 113 | 0] & 1) == 0) {
  __ZN7WebCore17MouseRelatedEvent23computeRelativePositionEv(i1);
 }
 return HEAP32[i1 + 96 >> 2] | 0;
}
function __ZN7WebCore17MouseRelatedEvent6layerYEv(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 113 | 0] & 1) == 0) {
  __ZN7WebCore17MouseRelatedEvent23computeRelativePositionEv(i1);
 }
 return HEAP32[i1 + 92 >> 2] | 0;
}
function __ZN7WebCore17MouseRelatedEvent6layerXEv(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 113 | 0] & 1) == 0) {
  __ZN7WebCore17MouseRelatedEvent23computeRelativePositionEv(i1);
 }
 return HEAP32[i1 + 88 >> 2] | 0;
}
function ii___ZNK7WebCore5Event25isBeforeTextInsertedEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event25isBeforeTextInsertedEventEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore5Event19isBeforeUnloadEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event19isBeforeUnloadEventEv(i1 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function ii___ZNK7WebCore7UIEvent14eventInterfaceEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7UIEvent14eventInterfaceEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event16isClipboardEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event16isClipboardEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event15isKeyboardEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event15isKeyboardEventEv(i1 | 0) | 0;
}
function __ZN7WebCore17MouseRelatedEventD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7UIEventD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function ii___ZNK7WebCore5Event12isTouchEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event12isTouchEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event12isMouseEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event12isMouseEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event12isFocusEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event12isFocusEventEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function ii___ZNK7WebCore5Event11isDragEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event11isDragEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7UIEvent9isUIEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7UIEvent9isUIEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7UIEvent8charCodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7UIEvent8charCodeEv(i1 | 0) | 0;
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
function ii___ZNK7WebCore7UIEvent7keyCodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7UIEvent7keyCodeEv(i1 | 0) | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function ii___ZNK7WebCore7UIEvent5whichEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7UIEvent5whichEv(i1 | 0) | 0;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 1](i2 | 0, i3 | 0);
}
function __ZN7WebCore17MouseRelatedEvent14receivedTargetEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 113 | 0] = 0;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 63](i2 | 0) | 0;
}
function __ZN7WebCore17MouseRelatedEventD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7UIEventD2Ev(i1);
 return;
}
function __ZNK7WebCore17MouseRelatedEvent5pageYEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 84 >> 2] | 0;
}
function __ZNK7WebCore17MouseRelatedEvent5pageXEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 80 >> 2] | 0;
}
function __ZNK7WebCore17MouseRelatedEvent1yEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 76 >> 2] | 0;
}
function __ZNK7WebCore17MouseRelatedEvent1xEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 72 >> 2] | 0;
}
function __ZNK7WebCore17MouseRelatedEvent12pageLocationEv(i1) {
 i1 = i1 | 0;
 return i1 + 80 | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function __ZNK7WebCore5Event13relatedTargetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function __ZNK7WebCore5Event9clipboardEv(i1) {
 i1 = i1 | 0;
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
  var FUNCTION_TABLE_viiiidiiiiiiiii = [b0,b0,__ZN7WebCore17MouseRelatedEventC2ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiRKNS_8IntPointESA_bbbbb,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore17MouseRelatedEventC2Ev,b1,__ZN7WebCore17MouseRelatedEventD1Ev,b1,__ZN7WebCore17MouseRelatedEvent14receivedTargetEv,b1,__ZN7WebCore17MouseRelatedEventD0Ev,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,ii___ZNK7WebCore5Event15isKeyboardEventEv__wrapper,b3,__ZN7WebCore17MouseRelatedEvent6layerXEv,b3,ii___ZNK7WebCore5Event12isTouchEventEv__wrapper,b3,__ZN7WebCore17MouseRelatedEvent6layerYEv,b3,ii___ZNK7WebCore5Event25isBeforeTextInsertedEventEv__wrapper,b3,__ZNK7WebCore17MouseRelatedEvent12pageLocationEv,b3,ii___ZNK7WebCore7UIEvent7keyCodeEv__wrapper,b3,ii___ZNK7WebCore5Event12isFocusEventEv__wrapper,b3,ii___ZNK7WebCore5Event16isClipboardEventEv__wrapper,b3,ii___ZNK7WebCore5Event11isDragEventEv__wrapper,b3,__ZNK7WebCore5Event13relatedTargetEv,b3,ii___ZNK7WebCore7UIEvent9isUIEventEv__wrapper,b3,__ZNK7WebCore17MouseRelatedEvent5pageXEv,b3,ii___ZNK7WebCore5Event19isBeforeUnloadEventEv__wrapper
  ,b3,ii___ZNK7WebCore7UIEvent8charCodeEv__wrapper,b3,ii___ZNK7WebCore7UIEvent5whichEv__wrapper,b3,ii___ZNK7WebCore7UIEvent14eventInterfaceEv__wrapper,b3,__ZNK7WebCore5Event9clipboardEv,b3,ii___ZNK7WebCore5Event12isMouseEventEv__wrapper,b3,__ZNK7WebCore17MouseRelatedEvent5pageYEv,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,viii___ZNK7WebCore5Event8cloneForEPNS_17HTMLIFrameElementE__wrapper,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiidiiiiiiiii: dynCall_viiiidiiiiiiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiidiiiiiiiii": invoke_viiiidiiiiiiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "_round": _round, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiidiiiiiiiii = Module["dynCall_viiiidiiiiiiiii"] = asm["dynCall_viiiidiiiiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore17MouseRelatedEventD1Ev","__ZN7WebCore17MouseRelatedEvent15initCoordinatesEv","__ZN7WebCore17MouseRelatedEvent7offsetYEv","__ZN7WebCore17MouseRelatedEvent6layerXEv","__ZN7WebCore17MouseRelatedEvent19computePageLocationEv","__ZN7WebCore17MouseRelatedEvent6layerYEv","__ZN7WebCore17MouseRelatedEventC2Ev","__ZN7WebCore17MouseRelatedEvent15initCoordinatesERKNS_11LayoutPointE","_memset","__ZN7WebCore17MouseRelatedEvent7offsetXEv","__ZNK7WebCore17MouseRelatedEvent12pageLocationEv","__ZN7WebCore17MouseRelatedEvent14receivedTargetEv","__ZNK7WebCore17MouseRelatedEvent1xEv","__ZNK7WebCore17MouseRelatedEvent1yEv","__ZNK7WebCore5Event13relatedTargetEv","__ZN7WebCore17MouseRelatedEventD0Ev","__ZN7WebCore17MouseRelatedEventC2ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiRKNS_8IntPointESA_bbbbb","__ZNK7WebCore17MouseRelatedEvent5pageXEv","__ZN7WebCore17MouseRelatedEvent23computeRelativePositionEv","_memcpy","__ZNK7WebCore5Event9clipboardEv","__ZNK7WebCore17MouseRelatedEvent5pageYEv"]

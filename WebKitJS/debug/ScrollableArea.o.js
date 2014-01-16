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
H_BASE = parentModule["_malloc"](224 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 224;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14ScrollableAreaD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_iiiiff(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiiff"](index,a1,a2,a3,a4,a5);
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
  var __ZTVN7WebCore14ScrollableAreaE=(H_BASE+8)|0;
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
  var invoke_iiiiff=env.invoke_iiiiff;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore14ScrollableArea21scrollPositionChangedERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 64 | 0;
 i10 = i3 + 72 | 0;
 i11 = i3 + 80 | 0;
 i12 = i3 + 88 | 0;
 i13 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 84 >> 2] & 31](i7, i1);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 204 >> 2] & 31](i1, i2);
 i2 = i1;
 i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 80 >> 2] & 31](i1) | 0;
 i15 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 31](i1) | 0;
 do {
  if ((i15 | 0) == 0) {
   i16 = 7;
  } else {
   __ZN7WebCore9Scrollbar15offsetDidChangeEv(i15);
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 220 >> 2] & 31](i15) | 0)) {
    i16 = 7;
    break;
   }
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 172 >> 2] & 31](i1) | 0) != 0) {
    i16 = 7;
    break;
   }
   if ((i14 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 132 >> 2] & 15](i15);
    break;
   } else {
    i2 = i15 | 0;
    __ZNK7WebCore6Widget9frameRectEv(i6, i2);
    i17 = HEAP32[i6 + 8 >> 2] | 0;
    __ZNK7WebCore6Widget9frameRectEv(i5, i2);
    i2 = HEAP32[i5 + 12 >> 2] | 0;
    HEAP32[i8 >> 2] = 0;
    HEAP32[i8 + 4 >> 2] = 0;
    i18 = i8 + 8 | 0;
    HEAP32[i18 >> 2] = i17;
    HEAP32[i8 + 12 >> 2] = i2;
    HEAP32[i18 >> 2] = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 104 >> 2] & 31](i14) | 0) + i17;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 16 >> 2] & 31](i15, i8);
    i16 = 8;
    break;
   }
  }
 } while (0);
 if ((i16 | 0) == 7) {
  if ((i14 | 0) != 0) {
   i16 = 8;
  }
 }
 do {
  if ((i16 | 0) == 8) {
   __ZN7WebCore9Scrollbar15offsetDidChangeEv(i14);
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 220 >> 2] & 31](i14) | 0)) {
    break;
   }
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 176 >> 2] & 31](i1) | 0) != 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 132 >> 2] & 15](i14);
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 84 >> 2] & 31](i9, i1);
 i14 = i7 | 0;
 do {
  if ((HEAP32[i9 >> 2] | 0) == (HEAP32[i14 >> 2] | 0)) {
   if ((HEAP32[i9 + 4 >> 2] | 0) != (HEAP32[i7 + 4 >> 2] | 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i9 = i1 + 4 | 0;
 do {
  if ((HEAP32[i9 >> 2] | 0) == 0) {
   __ZN7WebCore14ScrollAnimator6createEPNS_14ScrollableAreaE(i4, i1);
   i16 = HEAP32[i9 >> 2] | 0;
   i8 = i4 | 0;
   i15 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i9 >> 2] = i15;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 15](i16);
   i16 = HEAP32[i8 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 15](i16);
  }
 } while (0);
 i4 = HEAP32[i9 >> 2] | 0;
 i9 = HEAP32[(HEAP32[i4 >> 2] | 0) + 108 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 84 >> 2] & 31](i12, i1);
 i1 = (HEAP32[i12 + 4 >> 2] | 0) - (HEAP32[i7 + 4 >> 2] | 0) | 0;
 HEAP32[i11 >> 2] = (HEAP32[i12 >> 2] | 0) - (HEAP32[i14 >> 2] | 0);
 HEAP32[i11 + 4 >> 2] = i1;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i10, i11);
 FUNCTION_TABLE_vii[i9 & 31](i4, i10);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14ScrollableArea30scrollToOffsetWithoutAnimationENS_20ScrollbarOrientationEf(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = (i2 | 0) == 0;
 i2 = i1 + 4 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   __ZN7WebCore14ScrollAnimator6createEPNS_14ScrollableAreaE(i7, i1);
   i13 = HEAP32[i2 >> 2] | 0;
   i14 = i7 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   HEAP32[i2 >> 2] = i15;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 15](i13);
   i13 = HEAP32[i14 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 15](i13);
  }
 } while (0);
 i7 = HEAP32[i2 >> 2] | 0;
 if (i12) {
  __ZNK7WebCore14ScrollAnimator15currentPositionEv(i9, i7);
  d16 = +HEAPF32[i9 + 4 >> 2];
  HEAPF32[i8 >> 2] = d3;
  HEAPF32[i8 + 4 >> 2] = d16;
  do {
   if ((HEAP32[i2 >> 2] | 0) == 0) {
    __ZN7WebCore14ScrollAnimator6createEPNS_14ScrollableAreaE(i6, i1);
    i9 = HEAP32[i2 >> 2] | 0;
    i12 = i6 | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    HEAP32[i2 >> 2] = i13;
    if ((i9 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
    i9 = HEAP32[i12 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
   }
  } while (0);
  i6 = HEAP32[i2 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 31](i6, i8);
  STACKTOP = i4;
  return;
 } else {
  __ZNK7WebCore14ScrollAnimator15currentPositionEv(i11, i7);
  HEAPF32[i10 >> 2] = +HEAPF32[i11 >> 2];
  HEAPF32[i10 + 4 >> 2] = d3;
  do {
   if ((HEAP32[i2 >> 2] | 0) == 0) {
    __ZN7WebCore14ScrollAnimator6createEPNS_14ScrollableAreaE(i5, i1);
    i11 = HEAP32[i2 >> 2] | 0;
    i7 = i5 | 0;
    i8 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = 0;
    HEAP32[i2 >> 2] = i8;
    if ((i11 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 15](i11);
    i11 = HEAP32[i7 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 15](i11);
   }
  } while (0);
  i5 = HEAP32[i2 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 31](i5, i10);
  STACKTOP = i4;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_v + 2;
}
function __ZN7WebCore14ScrollableArea34constrainScrollPositionForOverhangERKNS_7IntRectERKNS_7IntSizeERKNS_8IntPointES9_ii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i8 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i13 = i12 | 0;
 i14 = i12;
 i15 = HEAP32[i2 + 8 >> 2] | 0;
 i16 = HEAP32[i3 >> 2] | 0;
 i17 = (i16 | 0) < (i15 | 0) ? i16 : i15;
 i15 = HEAP32[i2 + 12 >> 2] | 0;
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = (i2 | 0) < (i15 | 0) ? i2 : i15;
 i15 = i5 | 0;
 i18 = i5 + 4 | 0;
 i5 = (HEAP32[i4 + 4 >> 2] | 0) - i6 + (HEAP32[i18 >> 2] | 0) | 0;
 HEAP32[i10 >> 2] = (HEAP32[i15 >> 2] | 0) + (HEAP32[i4 >> 2] | 0);
 HEAP32[i10 + 4 >> 2] = i5;
 i5 = i9 + 8 | 0;
 i4 = i17 | 0;
 i19 = i3 | 0;
 HEAP32[i5 >> 2] = i4;
 HEAP32[i5 + 4 >> 2] = i19;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i13 + 4 >> 2] = 0;
 i13 = i12 + 8 | 0;
 HEAP32[i13 >> 2] = i16;
 HEAP32[i13 + 4 >> 2] = i2 - (i7 + i6);
 __ZN7WebCore7IntRect9intersectERKS0_(i11, i14);
 do {
  if ((HEAP32[i5 >> 2] | 0) != (i17 | 0) | (HEAP32[i5 + 4 >> 2] | 0) != (i3 | 0)) {
   HEAP32[i5 >> 2] = i4;
   HEAP32[i5 + 4 >> 2] = i19;
   __ZN7WebCore7IntRect9intersectERKS0_(i11, i14);
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) < (i17 | 0)) {
    i7 = i9;
    HEAP32[i7 >> 2] = i6 - i17 + (HEAP32[i7 >> 2] | 0);
   }
   i7 = HEAP32[i11 + 12 >> 2] | 0;
   if ((i7 | 0) >= (i3 | 0)) {
    break;
   }
   i6 = i11 + 4 | 0;
   HEAP32[i6 >> 2] = i7 - i3 + (HEAP32[i6 >> 2] | 0);
  }
 } while (0);
 i3 = (HEAP32[i10 + 4 >> 2] | 0) - (HEAP32[i18 >> 2] | 0) | 0;
 HEAP32[i1 >> 2] = (HEAP32[i10 >> 2] | 0) - (HEAP32[i15 >> 2] | 0);
 HEAP32[i1 + 4 >> 2] = i3;
 STACKTOP = i8;
 return;
}
function __ZN7WebCore14ScrollableArea6scrollENS_15ScrollDirectionENS_17ScrollGranularityEf(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 if (i2 >>> 0 < 2 >>> 0) {
  i8 = FUNCTION_TABLE_ii[HEAP32[i7 + 80 >> 2] & 31](i1) | 0;
  i9 = 1;
 } else {
  i8 = FUNCTION_TABLE_ii[HEAP32[i7 + 76 >> 2] & 31](i1) | 0;
  i9 = 0;
 }
 if ((i8 | 0) == 0) {
  i10 = 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 switch (i3 | 0) {
 case 0:
  {
   d11 = +(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 184 >> 2] & 31](i8) | 0);
   break;
  }
 case 1:
  {
   d11 = +(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 188 >> 2] & 31](i8) | 0);
   break;
  }
 case 2:
  {
   d11 = +(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 172 >> 2] & 31](i8) | 0);
   break;
  }
 case 3:
 case 4:
  {
   d11 = +HEAPF32[i8 + 80 >> 2];
   break;
  }
 default:
  {
   d11 = +0;
  }
 }
 if ((i2 | 0) == 2 | (i2 | 0) == 0) {
  d12 = +-0 - d4;
 } else {
  d12 = d4;
 }
 i2 = i1 + 4 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   __ZN7WebCore14ScrollAnimator6createEPNS_14ScrollableAreaE(i6, i1);
   i8 = HEAP32[i2 >> 2] | 0;
   i7 = i6 | 0;
   i13 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i2 >> 2] = i13;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
  }
 } while (0);
 i6 = HEAP32[i2 >> 2] | 0;
 i10 = FUNCTION_TABLE_iiiiff[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 1](i6, i9, i3, d11, d12) | 0;
 STACKTOP = i5;
 return i10 | 0;
}
function __ZNK7WebCore14ScrollableArea18visibleContentRectENS0_36VisibleContentRectIncludesScrollbarsE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 do {
  if ((i3 | 0) == 1) {
   i7 = i2;
   i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 80 >> 2] & 31](i2) | 0;
   do {
    if ((i8 | 0) == 0) {
     i9 = 0;
    } else {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 220 >> 2] & 31](i8) | 0) {
      i9 = 0;
      break;
     }
     i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 104 >> 2] & 31](i8) | 0;
    }
   } while (0);
   i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 76 >> 2] & 31](i2) | 0;
   if ((i8 | 0) == 0) {
    i10 = i9;
    i11 = 0;
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 220 >> 2] & 31](i8) | 0) {
    i10 = i9;
    i11 = 0;
    break;
   }
   i10 = i9;
   i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 108 >> 2] & 31](i8) | 0;
  } else {
   i10 = 0;
   i11 = 0;
  }
 } while (0);
 i9 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 84 >> 2] & 31](i5, i2);
 i3 = HEAP32[i5 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 84 >> 2] & 31](i6, i2);
 i9 = HEAP32[i6 + 4 >> 2] | 0;
 i6 = i2;
 i5 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 104 >> 2] & 31](i2) | 0) + i10 | 0;
 i10 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 100 >> 2] & 31](i2) | 0) + i11 | 0;
 HEAP32[i1 >> 2] = i3;
 HEAP32[i1 + 4 >> 2] = i9;
 HEAP32[i1 + 8 >> 2] = (i5 | 0) > 0 ? i5 : 0;
 HEAP32[i1 + 12 >> 2] = (i10 | 0) > 0 ? i10 : 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14ScrollableArea24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -193 | i2 << 6 & 192;
 i2 = i1;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 31](i1) | 0) != 0) {
  i3 = __ZN7WebCore14ScrollbarTheme5themeEv() | 0;
  i4 = HEAP32[(HEAP32[i3 >> 2] | 0) + 40 >> 2] | 0;
  i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 31](i1) | 0;
  FUNCTION_TABLE_vii[i4 & 31](i3, (i5 | 0) == 0 ? 0 : i5 + 36 | 0);
  i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 31](i1) | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 132 >> 2] & 15](i5);
 }
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 80 >> 2] & 31](i1) | 0) == 0) {
  return;
 }
 i5 = __ZN7WebCore14ScrollbarTheme5themeEv() | 0;
 i3 = HEAP32[(HEAP32[i5 >> 2] | 0) + 40 >> 2] | 0;
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 80 >> 2] & 31](i1) | 0;
 FUNCTION_TABLE_vii[i3 & 31](i5, (i4 | 0) == 0 ? 0 : i4 + 36 | 0);
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 80 >> 2] & 31](i1) | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 132 >> 2] & 15](i4);
 return;
}
function __ZNK7WebCore14ScrollableArea21maximumScrollPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 108 >> 2] & 31](i4, i2);
 i7 = i4 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i2;
 i10 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 124 >> 2] & 31](i2) | 0) + i8 | 0;
 HEAP32[i7 >> 2] = i10 + (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 128 >> 2] & 31](i2) | 0);
 i10 = HEAP32[i4 >> 2] | 0;
 i4 = i10 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 104 >> 2] & 31](i2) | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 108 >> 2] & 31](i5, i2);
 i6 = i5 + 4 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 i10 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 124 >> 2] & 31](i2) | 0) + i5 | 0;
 i5 = i10 + (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 128 >> 2] & 31](i2) | 0) | 0;
 HEAP32[i6 >> 2] = i5;
 i6 = i5 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 100 >> 2] & 31](i2) | 0) | 0;
 HEAP32[i1 >> 2] = i4;
 HEAP32[i1 + 4 >> 2] = i6;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14ScrollableArea15didAddScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i3 | 0) == 1;
 i3 = i1 + 4 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == 0) {
   __ZN7WebCore14ScrollAnimator6createEPNS_14ScrollableAreaE(i5, i1);
   i7 = HEAP32[i3 >> 2] | 0;
   i8 = i5 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i3 >> 2] = i9;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
  }
 } while (0);
 i5 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if (i6) {
  FUNCTION_TABLE_vii[HEAP32[i3 + 80 >> 2] & 31](i5, i2);
 } else {
  FUNCTION_TABLE_vii[HEAP32[i3 + 88 >> 2] & 31](i5, i2);
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 31](i1, (HEAP32[i1 + 8 >> 2] | 0) >>> 6 & 3);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14ScrollableArea19invalidateScrollbarEPNS_9ScrollbarERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = i1;
 do {
  if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 76 >> 2] & 31](i1) | 0) == (i2 | 0)) {
   i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 172 >> 2] & 31](i1) | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 124 >> 2] & 15](i5);
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 132 >> 2] & 15](i5);
   return;
  } else {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 80 >> 2] & 31](i1) | 0) != (i2 | 0)) {
    break;
   }
   i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 176 >> 2] & 31](i1) | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 124 >> 2] & 15](i5);
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 132 >> 2] & 15](i5);
   return;
  }
 } while (0);
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 188 >> 2] & 15](i1, i2, i3);
 return;
}
function __ZN7WebCore14ScrollableArea19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i3 | 0) == 1;
 i3 = i1 + 4 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == 0) {
   __ZN7WebCore14ScrollAnimator6createEPNS_14ScrollableAreaE(i5, i1);
   i7 = HEAP32[i3 >> 2] | 0;
   i8 = i5 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i3 >> 2] = i9;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
  }
 } while (0);
 i5 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if (i6) {
  FUNCTION_TABLE_vii[HEAP32[i3 + 84 >> 2] & 31](i5, i2);
  STACKTOP = i4;
  return;
 } else {
  FUNCTION_TABLE_vii[HEAP32[i3 + 92 >> 2] & 31](i5, i2);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore14ScrollableArea27notifyScrollPositionChangedERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN7WebCore14ScrollableArea21scrollPositionChangedERKNS_8IntPointE(i1, i2);
 i6 = i1 + 4 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) == 0) {
   __ZN7WebCore14ScrollAnimator6createEPNS_14ScrollableAreaE(i4, i1);
   i7 = HEAP32[i6 >> 2] | 0;
   i8 = i4 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i6 >> 2] = i9;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i5, i2);
 __ZN7WebCore14ScrollAnimator18setCurrentPositionERKNS_10FloatPointE(i4, i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14ScrollableArea34constrainScrollPositionForOverhangERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 96 >> 2] & 15](i5, i2, 0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 108 >> 2] & 31](i6, i2);
 i7 = i6 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i2;
 i10 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 124 >> 2] & 31](i2) | 0) + i8 | 0;
 HEAP32[i7 >> 2] = i10 + (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 128 >> 2] & 31](i2) | 0);
 i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 124 >> 2] & 31](i2) | 0;
 __ZN7WebCore14ScrollableArea34constrainScrollPositionForOverhangERKNS_7IntRectERKNS_7IntSizeERKNS_8IntPointES9_ii(i1, i5, i6, i3, i2 + 12 | 0, i10, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 128 >> 2] & 31](i2) | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14ScrollableArea16handleWheelEventERKNS_18PlatformWheelEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 4 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   __ZN7WebCore14ScrollAnimator6createEPNS_14ScrollableAreaE(i4, i1);
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i5 >> 2] = i8;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 i4 = HEAP32[i5 >> 2] | 0;
 i5 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 3](i4, i2) | 0;
 STACKTOP = i3;
 return i5 | 0;
}
function __ZN7WebCore14ScrollableArea30scrollToOffsetWithoutAnimationERKNS_10FloatPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 4 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   __ZN7WebCore14ScrollAnimator6createEPNS_14ScrollableAreaE(i4, i1);
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i5 >> 2] = i8;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 i4 = HEAP32[i5 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 31](i4, i2);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore14ScrollableArea21mouseEnteredScrollbarEPNS_9ScrollbarE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 4 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   __ZN7WebCore14ScrollAnimator6createEPNS_14ScrollableAreaE(i4, i1);
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i5 >> 2] = i8;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 i4 = HEAP32[i5 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 44 >> 2] & 31](i4, i2);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore14ScrollableArea20mouseExitedScrollbarEPNS_9ScrollbarE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 4 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   __ZN7WebCore14ScrollAnimator6createEPNS_14ScrollableAreaE(i4, i1);
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i5 >> 2] = i8;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 i4 = HEAP32[i5 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 48 >> 2] & 31](i4, i2);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore14ScrollableArea14scrollPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i2;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 76 >> 2] & 31](i2) | 0) == 0) {
  i4 = 0;
 } else {
  i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 76 >> 2] & 31](i2) | 0;
  i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 160 >> 2] & 31](i5) | 0;
 }
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 80 >> 2] & 31](i2) | 0) == 0) {
  i6 = 0;
  i7 = i1 | 0;
  HEAP32[i7 >> 2] = i4;
  i8 = i1 + 4 | 0;
  HEAP32[i8 >> 2] = i6;
  return;
 }
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 80 >> 2] & 31](i2) | 0;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 160 >> 2] & 31](i5) | 0;
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = i4;
 i8 = i1 + 4 | 0;
 HEAP32[i8 >> 2] = i6;
 return;
}
function __ZN7WebCore14ScrollableArea33horizontalScrollbarLayerDidChangeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 4 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   __ZN7WebCore14ScrollAnimator6createEPNS_14ScrollableAreaE(i3, i1);
   i5 = HEAP32[i4 >> 2] | 0;
   i6 = i3 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i4 >> 2] = i7;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 100 >> 2] & 15](i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14ScrollableArea31verticalScrollbarLayerDidChangeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 4 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   __ZN7WebCore14ScrollAnimator6createEPNS_14ScrollableAreaE(i3, i1);
   i5 = HEAP32[i4 >> 2] | 0;
   i6 = i3 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i4 >> 2] = i7;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 96 >> 2] & 15](i3);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore14ScrollableArea14scrollAnimatorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 4 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   __ZN7WebCore14ScrollAnimator6createEPNS_14ScrollableAreaE(i3, i1);
   i5 = HEAP32[i4 >> 2] | 0;
   i6 = i3 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i4 >> 2] = i7;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 STACKTOP = i2;
 return HEAP32[i4 >> 2] | 0;
}
function __ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1;
 do {
  if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 80 >> 2] & 31](i1) | 0) != 0) {
   i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 80 >> 2] & 31](i1) | 0;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 220 >> 2] & 31](i3) | 0) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 31](i1) | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 31](i1) | 0;
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 220 >> 2] & 31](i3) | 0;
 return i4 | 0;
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
function __ZN7WebCore14ScrollableArea32computeScrollbarValueAndOverhangEfffRfS1_(d1, d2, d3, i4, i5) {
 d1 = +d1;
 d2 = +d2;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var d6 = +0, d7 = +0;
 HEAPF32[i4 >> 2] = +0;
 HEAPF32[i5 >> 2] = +0;
 d6 = d2 - d3;
 if (d1 < +0) {
  HEAPF32[i4 >> 2] = +0;
  HEAPF32[i5 >> 2] = +-0 - d1;
  return;
 }
 d7 = d1 + d3;
 if (d7 > d2) {
  HEAPF32[i4 >> 2] = +1;
  HEAPF32[i5 >> 2] = d7 - d2;
  return;
 }
 if (d6 > +0) {
  HEAPF32[i4 >> 2] = d1 / d6;
  return;
 } else {
  HEAPF32[i4 >> 2] = +0;
  return;
 }
}
function __ZN7WebCore14ScrollableArea15setScrollOriginERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 12 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) {
   if ((HEAP32[i1 + 16 >> 2] | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
    break;
   }
   return;
  }
 } while (0);
 i4 = i2;
 i2 = i3;
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = i3;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] | 256;
 return;
}
function __ZNK7WebCore14ScrollableArea17totalContentsSizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 108 >> 2] & 31](i1, i2);
 i3 = i1 + 4 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = i2;
 i5 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 124 >> 2] & 31](i2) | 0) + i1 | 0;
 HEAP32[i3 >> 2] = i5 + (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 128 >> 2] & 31](i2) | 0);
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
function __ZN7WebCore14ScrollableArea22invalidateScrollCornerERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 200 >> 2] & 31](i1) | 0;
 if ((i3 | 0) == 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 192 >> 2] & 31](i1, i2);
  return;
 } else {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 124 >> 2] & 15](i3);
  return;
 }
}
function __ZN7WebCore14ScrollableArea19willStartLiveResizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 & 2 | 0) != 0) {
  return;
 }
 HEAP32[i2 >> 2] = i3 | 2;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 52 >> 2] & 15](i3);
 return;
}
function __ZN7WebCore14ScrollableArea17willEndLiveResizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 & 2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = i3 & -3;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 60 >> 2] & 15](i3);
 return;
}
function __ZN7WebCore14ScrollableAreaD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function __ZN7WebCore14ScrollableArea28setScrollOffsetFromInternalsERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (FUNCTION_TABLE_iii[HEAP32[HEAP32[i1 >> 2] >> 2] & 3](i1, i2) | 0) {
  return;
 }
 __ZN7WebCore14ScrollableArea21scrollPositionChangedERKNS_8IntPointE(i1, i2);
 return;
}
function __ZN7WebCore14ScrollableArea28setScrollOffsetFromAnimationERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (FUNCTION_TABLE_iii[HEAP32[HEAP32[i1 >> 2] >> 2] & 3](i1, i2) | 0) {
  return;
 }
 __ZN7WebCore14ScrollableArea21scrollPositionChangedERKNS_8IntPointE(i1, i2);
 return;
}
function __ZNK7WebCore14ScrollableArea21scrollbarsCanBeActiveEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 31](i2) | 0;
 return i3 | 0;
}
function __ZNK7WebCore14ScrollableArea33lockOverlayScrollbarStateToHiddenEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 72 >> 2] & 31](i3, i2);
 return;
}
function __ZNK7WebCore14ScrollableArea36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_8IntPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore6Widget25convertFromContainingViewERKNS_8IntPointE(i1, i3 | 0, i4);
 return;
}
function __ZNK7WebCore14ScrollableArea36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_8IntPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore6Widget23convertToContainingViewERKNS_8IntPointE(i1, i3 | 0, i4);
 return;
}
function __ZNK7WebCore14ScrollableArea36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore6Widget25convertFromContainingViewERKNS_7IntRectE(i1, i3 | 0, i4);
 return;
}
function __ZNK7WebCore14ScrollableArea36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore6Widget23convertToContainingViewERKNS_7IntRectE(i1, i3 | 0, i4);
 return;
}
function __ZN7WebCore14ScrollableAreaC2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 4 >> 2] = 0;
 i2 = i1 + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -512 | 21;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 return;
}
function __ZN7WebCore14ScrollableAreaD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
 return;
}
function __ZN7WebCore14ScrollableAreaD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
 return;
}
function __ZNK7WebCore14ScrollableArea23mouseMovedInContentAreaEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 40 >> 2] & 15](i2);
 return;
}
function __ZNK7WebCore14ScrollableArea23mouseEnteredContentAreaEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] & 15](i2);
 return;
}
function __ZNK7WebCore14ScrollableArea22mouseExitedContentAreaEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] & 15](i2);
 return;
}
function __ZN7WebCore14ScrollableArea23serviceScrollAnimationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 15](i2);
 return;
}
function __ZNK7WebCore14ScrollableArea20contentAreaWillPaintEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] & 15](i2);
 return;
}
function __ZNK7WebCore14ScrollableArea18contentAreaDidShowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 64 >> 2] & 15](i2);
 return;
}
function __ZNK7WebCore14ScrollableArea18contentAreaDidHideEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 68 >> 2] & 15](i2);
 return;
}
function __ZN7WebCore14ScrollableArea15contentsResizedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 56 >> 2] & 15](i2);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_iiiiff(i1, i2, i3, i4, d5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 d6 = +d6;
 return FUNCTION_TABLE_iiiiff[i1 & 1](i2 | 0, i3 | 0, i4 | 0, +d5, +d6) | 0;
}
function __ZNK7WebCore14ScrollableArea30hasLayerForHorizontalScrollbarEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 172 >> 2] & 31](i1) | 0) != 0 | 0;
}
function __ZNK7WebCore14ScrollableArea28hasLayerForVerticalScrollbarEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 176 >> 2] & 31](i1) | 0) != 0 | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZNK7WebCore14ScrollableArea23hasLayerForScrollCornerEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 200 >> 2] & 31](i1) | 0) != 0 | 0;
}
function __ZNK7WebCore14ScrollableArea22lastKnownMousePositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZNK7WebCore14ScrollableArea21minimumScrollPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZNK7WebCore14ScrollableArea14overhangAmountEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
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
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore14ScrollableArea27requestScrollPositionUpdateERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore14ScrollableArea27setVisibleScrollerThumbRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore14ScrollableArea21scrollbarStyleChangedEib(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
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
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function b2(i1, i2, i3, d4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 d5 = +d5;
 abort(2);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZNK7WebCore14ScrollableArea29shouldSuspendScrollAnimationsEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore14ScrollableArea27layerForHorizontalScrollbarEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14ScrollableArea25layerForVerticalScrollbarEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
}
function __ZNK7WebCore14ScrollableArea23usesCompositedScrollingEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14ScrollableArea22isRubberBandInProgressEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZNK7WebCore14ScrollableArea21scrollAnimatorEnabledEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14ScrollableArea20layerForScrollCornerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14ScrollableArea20isHandlingWheelEventEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14ScrollableArea19horizontalScrollbarEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14ScrollableArea17verticalScrollbarEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14ScrollableArea17layerForScrollingEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore14ScrollableArea17scheduleAnimationEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14ScrollableArea12headerHeightEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14ScrollableArea12footerHeightEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore14ScrollableArea12tiledBackingEv(i1) {
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
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
}
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore14ScrollableArea19willStartLiveResizeEv,b0,__ZN7WebCore14ScrollableArea17willEndLiveResizeEv,b0,__ZN7WebCore14ScrollableAreaD2Ev,b0,__ZN7WebCore14ScrollableArea15contentsResizedEv,b0,__ZN7WebCore14ScrollableAreaD0Ev,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore14ScrollableArea22invalidateScrollCornerERKNS_7IntRectE,b1,__ZNK7WebCore14ScrollableArea21maximumScrollPositionEv,b1,__ZNK7WebCore14ScrollableArea21minimumScrollPositionEv,b1,__ZNK7WebCore14ScrollableArea14overhangAmountEv,b1,__ZN7WebCore14ScrollableArea27setVisibleScrollerThumbRectERKNS_7IntRectE,b1,__ZN7WebCore14ScrollableArea24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE,b1,__ZNK7WebCore14ScrollableArea14scrollPositionEv,b1,__ZNK7WebCore14ScrollableArea22lastKnownMousePositionEv,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_iiiiff = [b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore14ScrollableArea25layerForVerticalScrollbarEv,b3,__ZNK7WebCore14ScrollableArea22isRubberBandInProgressEv,b3,__ZNK7WebCore14ScrollableArea20layerForScrollCornerEv,b3,__ZNK7WebCore14ScrollableArea12headerHeightEv,b3,__ZNK7WebCore14ScrollableArea27layerForHorizontalScrollbarEv,b3,__ZNK7WebCore14ScrollableArea21scrollAnimatorEnabledEv,b3,__ZNK7WebCore14ScrollableArea12footerHeightEv,b3,__ZNK7WebCore14ScrollableArea20isHandlingWheelEventEv,b3,__ZNK7WebCore14ScrollableArea29shouldSuspendScrollAnimationsEv,b3,__ZNK7WebCore14ScrollableArea23usesCompositedScrollingEv,b3,__ZNK7WebCore14ScrollableArea19horizontalScrollbarEv,b3,__ZN7WebCore14ScrollableArea12tiledBackingEv,b3,__ZNK7WebCore14ScrollableArea17layerForScrollingEv,b3,__ZNK7WebCore14ScrollableArea17verticalScrollbarEv
  ,b3,__ZN7WebCore14ScrollableArea17scheduleAnimationEv,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore14ScrollableArea15didAddScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE,b4,__ZN7WebCore14ScrollableArea21scrollbarStyleChangedEib,b4,__ZN7WebCore14ScrollableArea19invalidateScrollbarEPNS_9ScrollbarERKNS_7IntRectE,b4,__ZN7WebCore14ScrollableArea19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE,b4,__ZNK7WebCore14ScrollableArea18visibleContentRectENS0_36VisibleContentRectIncludesScrollbarsE,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5,v____cxa_pure_virtual__wrapper,b5];
  var FUNCTION_TABLE_iii = [b6,b6,__ZN7WebCore14ScrollableArea27requestScrollPositionUpdateERKNS_8IntPointE,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,__ZNK7WebCore14ScrollableArea36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_8IntPointE,b7,__ZNK7WebCore14ScrollableArea36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_7IntRectE,b7,__ZNK7WebCore14ScrollableArea36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_8IntPointE,b7,__ZNK7WebCore14ScrollableArea36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_7IntRectE,b7,b7,b7,b7,b7,b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiff: dynCall_iiiiff, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiff": invoke_iiiiff, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiff = Module["dynCall_iiiiff"] = asm["dynCall_iiiiff"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore14ScrollableArea21scrollPositionChangedERKNS_8IntPointE","_strlen","__ZNK7WebCore14ScrollableArea21maximumScrollPositionEv","__ZNK7WebCore14ScrollableArea36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_8IntPointE","__ZN7WebCore14ScrollableArea19willStartLiveResizeEv","__ZN7WebCore14ScrollableArea15didAddScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE","__ZNK7WebCore14ScrollableArea36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_7IntRectE","__ZNK7WebCore14ScrollableArea21scrollbarsCanBeActiveEv","__ZNK7WebCore14ScrollableArea23mouseMovedInContentAreaEv","__ZNK7WebCore14ScrollableArea23mouseEnteredContentAreaEv","__ZNK7WebCore14ScrollableArea21scrollAnimatorEnabledEv","__ZN7WebCore14ScrollableAreaC2Ev","__ZN7WebCore14ScrollableArea22invalidateScrollCornerERKNS_7IntRectE","__ZN7WebCore14ScrollableArea23serviceScrollAnimationsEv","__ZNK7WebCore14ScrollableArea20contentAreaWillPaintEv","__ZNK7WebCore14ScrollableArea18contentAreaDidHideEv","__ZN7WebCore14ScrollableArea21scrollbarStyleChangedEib","__ZNK7WebCore14ScrollableArea25layerForVerticalScrollbarEv","__ZNK7WebCore14ScrollableArea14overhangAmountEv","__ZNK7WebCore14ScrollableArea23hasLayerForScrollCornerEv","__ZN7WebCore14ScrollableArea33horizontalScrollbarLayerDidChangeEv","__ZNK7WebCore14ScrollableArea20mouseExitedScrollbarEPNS_9ScrollbarE","_memset","__ZNK7WebCore14ScrollableArea19horizontalScrollbarEv","__ZN7WebCore14ScrollableArea34constrainScrollPositionForOverhangERKNS_7IntRectERKNS_7IntSizeERKNS_8IntPointES9_ii","__ZN7WebCore14ScrollableArea19invalidateScrollbarEPNS_9ScrollbarERKNS_7IntRectE","_memcpy","__ZN7WebCore14ScrollableArea17willEndLiveResizeEv","__ZN7WebCore14ScrollableArea31verticalScrollbarLayerDidChangeEv","__ZN7WebCore14ScrollableArea16handleWheelEventERKNS_18PlatformWheelEventE","__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv","__ZN7WebCore14ScrollableArea32computeScrollbarValueAndOverhangEfffRfS1_","__ZNK7WebCore14ScrollableArea20layerForScrollCornerEv","__ZNK7WebCore14ScrollableArea12headerHeightEv","__ZN7WebCore14ScrollableArea27notifyScrollPositionChangedERKNS_8IntPointE","__ZN7WebCore14ScrollableArea28setScrollOffsetFromAnimationERKNS_8IntPointE","__ZNK7WebCore14ScrollableArea22mouseExitedContentAreaEv","__ZN7WebCore14ScrollableArea24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE","__ZN7WebCore14ScrollableArea27requestScrollPositionUpdateERKNS_8IntPointE","__ZNK7WebCore14ScrollableArea28hasLayerForVerticalScrollbarEv","__ZN7WebCore14ScrollableArea27setVisibleScrollerThumbRectERKNS_7IntRectE","__ZNK7WebCore14ScrollableArea17verticalScrollbarEv","__ZN7WebCore14ScrollableAreaD2Ev","__ZNK7WebCore14ScrollableArea12footerHeightEv","__ZNK7WebCore14ScrollableArea20isHandlingWheelEventEv","__ZNK7WebCore14ScrollableArea29shouldSuspendScrollAnimationsEv","__ZNK7WebCore14ScrollableArea21mouseEnteredScrollbarEPNS_9ScrollbarE","__ZNK7WebCore14ScrollableArea23usesCompositedScrollingEv","__ZNK7WebCore14ScrollableArea18contentAreaDidShowEv","__ZNK7WebCore14ScrollableArea36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_8IntPointE","__ZN7WebCore14ScrollableArea28setScrollOffsetFromInternalsERKNS_8IntPointE","__ZNK7WebCore14ScrollableArea14scrollPositionEv","__ZNK7WebCore14ScrollableArea36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_7IntRectE","__ZN7WebCore14ScrollableArea34constrainScrollPositionForOverhangERKNS_8IntPointE","__ZNK7WebCore14ScrollableArea30hasLayerForHorizontalScrollbarEv","__ZNK7WebCore14ScrollableArea17layerForScrollingEv","__ZNK7WebCore14ScrollableArea22lastKnownMousePositionEv","__ZN7WebCore14ScrollableArea19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE","__ZN7WebCore14ScrollableArea15contentsResizedEv","__ZNK7WebCore14ScrollableArea22isRubberBandInProgressEv","__ZNK7WebCore14ScrollableArea27layerForHorizontalScrollbarEv","__ZNK7WebCore14ScrollableArea18visibleContentRectENS0_36VisibleContentRectIncludesScrollbarsE","__ZN7WebCore14ScrollableArea12tiledBackingEv","__ZN7WebCore14ScrollableArea30scrollToOffsetWithoutAnimationERKNS_10FloatPointE","__ZN7WebCore14ScrollableArea15setScrollOriginERKNS_8IntPointE","__ZN7WebCore14ScrollableArea30scrollToOffsetWithoutAnimationENS_20ScrollbarOrientationEf","__ZNK7WebCore14ScrollableArea17totalContentsSizeEv","__ZNK7WebCore14ScrollableArea21minimumScrollPositionEv","__ZNK7WebCore14ScrollableArea14scrollAnimatorEv","__ZN7WebCore14ScrollableAreaD0Ev","__ZN7WebCore14ScrollableArea6scrollENS_15ScrollDirectionENS_17ScrollGranularityEf","__ZNK7WebCore14ScrollableArea33lockOverlayScrollbarStateToHiddenEb","__ZN7WebCore14ScrollableArea17scheduleAnimationEv"]

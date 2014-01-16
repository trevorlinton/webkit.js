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
var Math_min = Math.min;
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_di(index,a1) {
  try {
    return Module["dynCall_di"](index,a1);
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
function invoke_viiiif(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiif"](index,a1,a2,a3,a4,a5);
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
function invoke_viiiiif(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiif"](index,a1,a2,a3,a4,a5,a6);
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
function invoke_viiiiifi(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiifi"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var __ZTVN7WebCore5ThemeE=(H_BASE+8)|0;
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
  var invoke_di=env.invoke_di;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_viiiif=env.invoke_viiiif;
  var invoke_ii=env.invoke_ii;
  var invoke_viiiiif=env.invoke_viiiiif;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiifi=env.invoke_viiiiifi;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore15FontDescriptionC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 - 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAPF32[i1 + 8 >> 2] = +HEAPF32[i2 + 8 >> 2];
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[i2 + 12 >> 2];
 i3 = i2 + 16 | 0;
 i4 = i1 + 16 | 0;
 i5 = HEAP32[i4 >> 2] & -2 | HEAP32[i3 >> 2] & 1;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -3 | HEAP32[i3 >> 2] & 2;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -13 | HEAP32[i3 >> 2] & 12;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -17 | HEAP32[i3 >> 2] & 16;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -33 | HEAP32[i3 >> 2] & 32;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -65 | HEAP32[i3 >> 2] & 64;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -32641 | HEAP32[i3 >> 2] & 32640;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -229377 | HEAP32[i3 >> 2] & 229376;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -262145 | HEAP32[i3 >> 2] & 262144;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -524289 | HEAP32[i3 >> 2] & 524288;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -3145729 | HEAP32[i3 >> 2] & 3145728;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -12582913 | HEAP32[i3 >> 2] & 12582912;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -50331649 | HEAP32[i3 >> 2] & 50331648;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -201326593 | HEAP32[i3 >> 2] & 201326592;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 >> 2] = i6 & 268435455 | HEAP32[i3 >> 2] & -268435456;
 i3 = i2 + 20 | 0;
 i2 = i1 + 20 | 0;
 i1 = HEAP32[i2 >> 2] & -4 | HEAP32[i3 >> 2] & 3;
 HEAP32[i2 >> 2] = i1;
 i6 = i1 & -13 | HEAP32[i3 >> 2] & 12;
 HEAP32[i2 >> 2] = i6;
 i1 = i6 & -17 | HEAP32[i3 >> 2] & 16;
 HEAP32[i2 >> 2] = i1;
 HEAP32[i2 >> 2] = i1 & -4065 | HEAP32[i3 >> 2] & 4064;
 return;
}
function __ZNK7WebCore5Theme13controlBorderENS_11ControlPartERKNS_4FontERKNS_9LengthBoxEf(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0;
 switch (i3 | 0) {
 case 3:
 case 34:
 case 46:
 case 1:
 case 2:
  {
   HEAP32[i1 >> 2] = 0;
   HEAP8[i1 + 4 | 0] = 0;
   HEAP8[i1 + 5 | 0] = 3;
   HEAP8[i1 + 6 | 0] = 0;
   HEAP32[i1 + 8 >> 2] = 0;
   HEAP8[i1 + 12 | 0] = 0;
   HEAP8[i1 + 13 | 0] = 3;
   HEAP8[i1 + 14 | 0] = 0;
   HEAP32[i1 + 16 >> 2] = 0;
   HEAP8[i1 + 20 | 0] = 0;
   HEAP8[i1 + 21 | 0] = 3;
   HEAP8[i1 + 22 | 0] = 0;
   HEAP32[i1 + 24 >> 2] = 0;
   HEAP8[i1 + 28 | 0] = 0;
   HEAP8[i1 + 29 | 0] = 3;
   HEAP8[i1 + 30 | 0] = 0;
   return;
  }
 default:
  {}
 }
 i3 = i5;
 i4 = i1;
 i2 = HEAP32[i3 >> 2] | 0;
 i7 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i4 + 4 >> 2] = i7;
 if ((i2 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i1 | 0);
 }
 i7 = i1 + 8 | 0;
 i2 = i5 + 8 | 0;
 i4 = i7;
 i3 = HEAP32[i2 >> 2] | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i3 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
 }
 i7 = i1 + 16 | 0;
 i8 = i5 + 16 | 0;
 i3 = i7;
 i4 = HEAP32[i8 >> 2] | 0;
 i2 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 HEAP32[i3 + 4 >> 2] = i2;
 if ((i4 & 0 | 0) == 0 & (i2 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
 }
 i7 = i1 + 24 | 0;
 i1 = i5 + 24 | 0;
 i5 = i7;
 i2 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 HEAP32[i5 + 4 >> 2] = i4;
 if (!((i2 & 0 | 0) == 0 & (i4 & 65280 | 0) == 2560)) {
  return;
 }
 __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
 return;
}
function __ZNK7WebCore5Theme14controlPaddingENS_11ControlPartERKNS_4FontERKNS_9LengthBoxEf(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0;
 if ((i3 | 0) == 34 | (i3 | 0) == 35 | (i3 | 0) == 1 | (i3 | 0) == 2) {
  HEAP32[i1 >> 2] = 0;
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 3;
  HEAP8[i1 + 6 | 0] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  HEAP8[i1 + 12 | 0] = 0;
  HEAP8[i1 + 13 | 0] = 3;
  HEAP8[i1 + 14 | 0] = 0;
  HEAP32[i1 + 16 >> 2] = 0;
  HEAP8[i1 + 20 | 0] = 0;
  HEAP8[i1 + 21 | 0] = 3;
  HEAP8[i1 + 22 | 0] = 0;
  HEAP32[i1 + 24 >> 2] = 0;
  HEAP8[i1 + 28 | 0] = 0;
  HEAP8[i1 + 29 | 0] = 3;
  HEAP8[i1 + 30 | 0] = 0;
  return;
 }
 i3 = i5;
 i4 = i1;
 i2 = HEAP32[i3 >> 2] | 0;
 i7 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i4 + 4 >> 2] = i7;
 if ((i2 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i1 | 0);
 }
 i7 = i1 + 8 | 0;
 i2 = i5 + 8 | 0;
 i4 = i7;
 i3 = HEAP32[i2 >> 2] | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i3 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
 }
 i7 = i1 + 16 | 0;
 i8 = i5 + 16 | 0;
 i3 = i7;
 i4 = HEAP32[i8 >> 2] | 0;
 i2 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 HEAP32[i3 + 4 >> 2] = i2;
 if ((i4 & 0 | 0) == 0 & (i2 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
 }
 i7 = i1 + 24 | 0;
 i1 = i5 + 24 | 0;
 i5 = i7;
 i2 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 HEAP32[i5 + 4 >> 2] = i4;
 if (!((i2 & 0 | 0) == 0 & (i4 & 65280 | 0) == 2560)) {
  return;
 }
 __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_di + 2;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_viiiif + 2;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_viiiiif + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_viiiif + 4;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_viiiiif + 4;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_viiiiif + 6;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_viiiiifi + 2;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_viiiif + 6;
}
function __ZNK7WebCore5Theme18minimumControlSizeENS_11ControlPartERKNS_4FontEf(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 var i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i4 | 0;
 i2 = i3;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6;
 HEAP32[i3 >> 2] = 0;
 HEAP8[i2 + 4 | 0] = 0;
 HEAP8[i2 + 5 | 0] = 3;
 HEAP8[i2 + 6 | 0] = 0;
 HEAP32[i6 >> 2] = 0;
 HEAP8[i7 + 4 | 0] = 0;
 HEAP8[i7 + 5 | 0] = 3;
 HEAP8[i7 + 6 | 0] = 0;
 i7 = i1;
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i7 + 4 >> 2] = i2;
 i2 = i1 + 8 | 0;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore5Theme11controlSizeENS_11ControlPartERKNS_4FontERKNS_10LengthSizeEf(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0;
 i4 = i5;
 i3 = i1;
 i2 = HEAP32[i4 >> 2] | 0;
 i7 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 HEAP32[i3 + 4 >> 2] = i7;
 if ((i2 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i1 | 0);
 }
 i7 = i1 + 8 | 0;
 i1 = i5 + 8 | 0;
 i5 = i7;
 i2 = HEAP32[i1 >> 2] | 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 HEAP32[i5 + 4 >> 2] = i3;
 if (!((i2 & 0 | 0) == 0 & (i3 & 65280 | 0) == 2560)) {
  return;
 }
 __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
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
function dynCall_viiiiifi(i1, i2, i3, i4, i5, i6, d7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 d7 = +d7;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiifi[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, +d7, i8 | 0);
}
function __ZNK7WebCore5Theme14selectionColorENS_11ControlPartENS_12ControlStateENS_13SelectionPartE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP8[i1 + 4 | 0] = 0;
 return;
}
function __ZNK7WebCore5Theme5paintENS_11ControlPartEjPNS_15GraphicsContextERKNS_7IntRectEfPNS_10ScrollViewE(i1, i2, i3, i4, i5, d6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 i7 = i7 | 0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiiiif(i1, i2, i3, i4, i5, i6, d7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 d7 = +d7;
 FUNCTION_TABLE_viiiiif[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, +d7);
}
function __ZNK7WebCore5Theme11controlFontENS_11ControlPartERKNS_4FontEf(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 __ZN7WebCore15FontDescriptionC2ERKS0_(i1, i4 | 0);
 return;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function dynCall_viiiif(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 FUNCTION_TABLE_viiiif[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, +d6);
}
function __ZNK7WebCore5Theme10systemFontENS_9ThemeFontERNS_15FontDescriptionE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore4FontC1Ev(i1);
 return;
}
function __ZNK7WebCore5Theme23inflateControlPaintRectENS_11ControlPartEjRNS_7IntRectEf(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZNK7WebCore5Theme11systemColorENS_10ThemeColorE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP8[i1 + 4 | 0] = 0;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore5Theme24textSearchHighlightColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP8[i1 + 4 | 0] = 0;
 return;
}
function b9(i1, i2, i3, i4, i5, d6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 i7 = i7 | 0;
 abort(9);
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
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function b6(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 abort(6);
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
function __ZNK7WebCore5Theme28controlRequiresPreWhiteSpaceENS_11ControlPartE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZNK7WebCore5Theme28controlHasInactiveAppearanceENS_11ControlPartE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
function __ZNK7WebCore5Theme26baselinePositionAdjustmentENS_11ControlPartE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function __ZNK7WebCore5Theme24controlDrawsFocusOutlineENS_11ControlPartE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 1;
}
function __ZNK7WebCore5Theme22controlDrawsBackgroundENS_11ControlPartE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 1;
}
function __ZNK7WebCore5Theme18controlDrawsBorderENS_11ControlPartE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 1;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function b4(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 abort(4);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 3](i2 | 0);
}
function b11(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(11);
}
function __ZNK7WebCore5Theme33controlsCanHaveInactiveAppearanceEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore5Theme32controlsCanHaveHoveredAppearanceEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function __ZNK7WebCore5Theme18caretBlinkIntervalEv(i1) {
 i1 = i1 | 0;
 return +(+.5);
}
function b7(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(7);
}
function __ZN7WebCore5ThemeD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function b10(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(10);
 return 0;
}
function __ZN7WebCore5Theme12themeChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
}
function __ZN7WebCore5ThemeD1Ev(i1) {
 i1 = i1 | 0;
 return;
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
 return +0;
}
function b5(i1) {
 i1 = i1 | 0;
 abort(5);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b8() {
 abort(8);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZNK7WebCore5Theme14selectionColorENS_11ControlPartENS_12ControlStateENS_13SelectionPartE,b0];
  var FUNCTION_TABLE_di = [b1,b1,__ZNK7WebCore5Theme18caretBlinkIntervalEv,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore5Theme12themeChangedEv,b2,__ZN7WebCore5ThemeD0Ev,b2,__ZN7WebCore5ThemeD1Ev,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZNK7WebCore5Theme24textSearchHighlightColorEv,b3];
  var FUNCTION_TABLE_viiiif = [b4,b4,__ZNK7WebCore5Theme11controlFontENS_11ControlPartERKNS_4FontEf,b4,__ZNK7WebCore5Theme18minimumControlSizeENS_11ControlPartERKNS_4FontEf,b4,__ZNK7WebCore5Theme23inflateControlPaintRectENS_11ControlPartEjRNS_7IntRectEf,b4];
  var FUNCTION_TABLE_ii = [b5,b5,__ZNK7WebCore5Theme33controlsCanHaveInactiveAppearanceEv,b5,__ZNK7WebCore5Theme32controlsCanHaveHoveredAppearanceEv,b5,b5,b5];
  var FUNCTION_TABLE_viiiiif = [b6,b6,__ZNK7WebCore5Theme11controlSizeENS_11ControlPartERKNS_4FontERKNS_10LengthSizeEf,b6,__ZNK7WebCore5Theme14controlPaddingENS_11ControlPartERKNS_4FontERKNS_9LengthBoxEf,b6,__ZNK7WebCore5Theme13controlBorderENS_11ControlPartERKNS_4FontERKNS_9LengthBoxEf,b6];
  var FUNCTION_TABLE_viii = [b7,b7,__ZNK7WebCore5Theme11systemColorENS_10ThemeColorE,b7];
  var FUNCTION_TABLE_v = [b8,b8];
  var FUNCTION_TABLE_viiiiifi = [b9,b9,__ZNK7WebCore5Theme5paintENS_11ControlPartEjPNS_15GraphicsContextERKNS_7IntRectEfPNS_10ScrollViewE,b9];
  var FUNCTION_TABLE_iii = [b10,b10,__ZNK7WebCore5Theme28controlHasInactiveAppearanceENS_11ControlPartE,b10,__ZNK7WebCore5Theme24controlDrawsFocusOutlineENS_11ControlPartE,b10,__ZNK7WebCore5Theme26baselinePositionAdjustmentENS_11ControlPartE,b10,__ZNK7WebCore5Theme28controlRequiresPreWhiteSpaceENS_11ControlPartE,b10,__ZNK7WebCore5Theme18controlDrawsBorderENS_11ControlPartE,b10,__ZNK7WebCore5Theme22controlDrawsBackgroundENS_11ControlPartE,b10,b10,b10];
  var FUNCTION_TABLE_viiii = [b11,b11,__ZNK7WebCore5Theme10systemFontENS_9ThemeFontERNS_15FontDescriptionE,b11];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_di: dynCall_di, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_viiiif: dynCall_viiiif, dynCall_ii: dynCall_ii, dynCall_viiiiif: dynCall_viiiiif, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiifi: dynCall_viiiiifi, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_di": invoke_di, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_viiiif": invoke_viiiif, "invoke_ii": invoke_ii, "invoke_viiiiif": invoke_viiiiif, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiifi": invoke_viiiiifi, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_viiiif = Module["dynCall_viiiif"] = asm["dynCall_viiiif"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiif = Module["dynCall_viiiiif"] = asm["dynCall_viiiiif"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiifi = Module["dynCall_viiiiifi"] = asm["dynCall_viiiiifi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore5Theme33controlsCanHaveInactiveAppearanceEv","__ZNK7WebCore5Theme32controlsCanHaveHoveredAppearanceEv","__ZN7WebCore5Theme12themeChangedEv","__ZNK7WebCore5Theme11controlSizeENS_11ControlPartERKNS_4FontERKNS_10LengthSizeEf","__ZNK7WebCore5Theme11controlFontENS_11ControlPartERKNS_4FontEf","__ZNK7WebCore5Theme28controlHasInactiveAppearanceENS_11ControlPartE","__ZNK7WebCore5Theme10systemFontENS_9ThemeFontERNS_15FontDescriptionE","__ZNK7WebCore5Theme24controlDrawsFocusOutlineENS_11ControlPartE","__ZN7WebCore15FontDescriptionC2ERKS0_","_memset","__ZNK7WebCore5Theme11systemColorENS_10ThemeColorE","_memcpy","__ZNK7WebCore5Theme26baselinePositionAdjustmentENS_11ControlPartE","__ZNK7WebCore5Theme28controlRequiresPreWhiteSpaceENS_11ControlPartE","__ZNK7WebCore5Theme18controlDrawsBorderENS_11ControlPartE","__ZNK7WebCore5Theme18caretBlinkIntervalEv","__ZNK7WebCore5Theme18minimumControlSizeENS_11ControlPartERKNS_4FontEf","__ZNK7WebCore5Theme23inflateControlPaintRectENS_11ControlPartEjRNS_7IntRectEf","__ZNK7WebCore5Theme22controlDrawsBackgroundENS_11ControlPartE","__ZNK7WebCore5Theme14selectionColorENS_11ControlPartENS_12ControlStateENS_13SelectionPartE","__ZNK7WebCore5Theme24textSearchHighlightColorEv","__ZNK7WebCore5Theme14controlPaddingENS_11ControlPartERKNS_4FontERKNS_9LengthBoxEf","__ZNK7WebCore5Theme13controlBorderENS_11ControlPartERKNS_4FontERKNS_9LengthBoxEf","__ZN7WebCore5ThemeD0Ev","__ZNK7WebCore5Theme5paintENS_11ControlPartEjPNS_15GraphicsContextERKNS_7IntRectEfPNS_10ScrollViewE","__ZN7WebCore5ThemeD1Ev"]

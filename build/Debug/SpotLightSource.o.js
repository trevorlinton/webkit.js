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
H_BASE = parentModule["_malloc"](216 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 216;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([32,122,61,0,0,0,0,0,32,121,61,0,0,0,0,0,120,61,0,0,0,0,0,0,91,108,105,109,105,116,105,110,103,67,111,110,101,65,110,103,108,101,61,34,0,0,0,0,91,115,112,101,99,117,108,97,114,69,120,112,111,110,101,110,116,61,34,0,0,0,0,0,91,100,105,114,101,99,116,105,111,110,61,34,0,0,0,0,34,93,0,0,0,0,0,0,91,112,111,115,105,116,105,111,110,61,34,0,0,0,0,0,91,116,121,112,101,61,83,80,79,84,45,76,73,71,72,84,93,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_iif(index,a1,a2) {
  try {
    return Module["dynCall_iif"](index,a1,a2);
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
  var __ZTVN7WebCore15SpotLightSourceE=(H_BASE+144)|0;
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
  var invoke_viiiif=env.invoke_viiiif;
  var invoke_ii=env.invoke_ii;
  var invoke_iif=env.invoke_iif;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _cosf=env._cosf;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _sqrtf=env._sqrtf;
  var _llvm_pow_f32=env._llvm_pow_f32;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore15SpotLightSource22externalRepresentationERNS_10TextStreamE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 120 | 0) | 0;
 i3 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 104 | 0) | 0;
 i4 = __ZN7WebCore10TextStreamlsEPKc(i3, H_BASE + 24 | 0) | 0;
 i5 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i4, +HEAPF32[i1 + 12 >> 2]) | 0, H_BASE + 16 | 0) | 0;
 i4 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i5, +HEAPF32[i1 + 16 >> 2]) | 0, H_BASE + 8 | 0) | 0;
 __ZN7WebCore10TextStreamlsEf(i4, +HEAPF32[i1 + 20 >> 2]) | 0;
 __ZN7WebCore10TextStreamlsEPKc(i3, H_BASE + 96 | 0) | 0;
 i3 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 80 | 0) | 0;
 i4 = __ZN7WebCore10TextStreamlsEPKc(i3, H_BASE + 24 | 0) | 0;
 i5 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i4, +HEAPF32[i1 + 24 >> 2]) | 0, H_BASE + 16 | 0) | 0;
 i4 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i5, +HEAPF32[i1 + 28 >> 2]) | 0, H_BASE + 8 | 0) | 0;
 __ZN7WebCore10TextStreamlsEf(i4, +HEAPF32[i1 + 32 >> 2]) | 0;
 __ZN7WebCore10TextStreamlsEPKc(i3, H_BASE + 96 | 0) | 0;
 i3 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 56 | 0) | 0;
 __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i3, +HEAPF32[i1 + 36 >> 2]) | 0, H_BASE + 96 | 0) | 0;
 i3 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 32 | 0) | 0;
 __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i3, +HEAPF32[i1 + 40 >> 2]) | 0, H_BASE + 96 | 0) | 0;
 return i2 | 0;
}
function __ZN7WebCore15SpotLightSource18updatePaintingDataERNS_11LightSource12PaintingDataEiif(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 var d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0;
 d6 = +HEAPF32[i1 + 12 >> 2] - +(i3 | 0);
 HEAPF32[i2 >> 2] = d6;
 d7 = +HEAPF32[i1 + 16 >> 2] - +(i4 | 0);
 HEAPF32[i2 + 4 >> 2] = d7;
 d8 = +HEAPF32[i1 + 20 >> 2] - d5;
 HEAPF32[i2 + 8 >> 2] = d8;
 d5 = +Math_sqrt(d8 * d8 + (d6 * d6 + d7 * d7));
 HEAPF32[i2 + 24 >> 2] = d5;
 d9 = (d6 * +HEAPF32[i2 + 28 >> 2] + d7 * +HEAPF32[i2 + 32 >> 2] + d8 * +HEAPF32[i2 + 36 >> 2]) / d5;
 d5 = +HEAPF32[i2 + 52 >> 2];
 if (d9 > d5) {
  HEAPF32[i2 + 12 >> 2] = +0;
  HEAPF32[i2 + 16 >> 2] = +0;
  HEAPF32[i2 + 20 >> 2] = +0;
  return;
 }
 i4 = HEAP32[i2 + 60 >> 2] | 0;
 if ((i4 | 0) == 1) {
  d10 = +-0 - d9;
 } else if ((i4 | 0) == 0) {
  d10 = +1;
 } else {
  d10 = +Math_pow(+(+-0 - d9), +(+HEAPF32[i1 + 36 >> 2]));
 }
 d8 = +HEAPF32[i2 + 56 >> 2];
 if (d9 > d8) {
  d11 = d10 * ((d5 - d9) / (d5 - d8));
 } else {
  d11 = d10;
 }
 d10 = d11 > +1 ? +1 : d11;
 HEAPF32[i2 + 12 >> 2] = +HEAPF32[i2 + 40 >> 2] * d10;
 HEAPF32[i2 + 16 >> 2] = +HEAPF32[i2 + 44 >> 2] * d10;
 HEAPF32[i2 + 20 >> 2] = d10 * +HEAPF32[i2 + 48 >> 2];
 return;
}
function __ZN7WebCore15SpotLightSource16initPaintingDataERNS_11LightSource12PaintingDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, d5 = +0, d6 = +0;
 i3 = i2 + 40 | 0;
 i4 = i2 + 12 | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 i4 = i2 + 28 | 0;
 HEAPF32[i4 >> 2] = +HEAPF32[i1 + 24 >> 2] - +HEAPF32[i1 + 12 >> 2];
 HEAPF32[i2 + 32 >> 2] = +HEAPF32[i1 + 28 >> 2] - +HEAPF32[i1 + 16 >> 2];
 HEAPF32[i2 + 36 >> 2] = +HEAPF32[i1 + 32 >> 2] - +HEAPF32[i1 + 20 >> 2];
 __ZN7WebCore12FloatPoint3D9normalizeEv(i4);
 d5 = +HEAPF32[i1 + 40 >> 2];
 if (d5 != +0) {
  if (d5 < +0) {
   d6 = +-0 - d5;
  } else {
   d6 = d5;
  }
  d5 = +Math_cos((+180 - (d6 > +90 ? +90 : d6)) * 3.1415927410125732 / +180);
  HEAPF32[i2 + 52 >> 2] = d5;
  HEAPF32[i2 + 56 >> 2] = d5 + +-.01600000075995922;
 } else {
  HEAPF32[i2 + 52 >> 2] = +0;
  HEAPF32[i2 + 56 >> 2] = +-.01600000075995922;
 }
 d5 = +HEAPF32[i1 + 36 >> 2];
 if (d5 == +0) {
  HEAP32[i2 + 60 >> 2] = 0;
  return;
 }
 i1 = i2 + 60 | 0;
 if (d5 == +1) {
  HEAP32[i1 >> 2] = 1;
  return;
 } else {
  HEAP32[i1 >> 2] = 2;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_viiiif + 2;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_iif + 2;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_iif + 4;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_iif + 20;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_iif + 12;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_iif + 16;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_iif + 14;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_iif + 6;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_iif + 10;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_iif + 18;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_iif + 8;
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
function __ZN7WebCore15SpotLightSource20setLimitingConeAngleEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0;
 i3 = i1 + 40 | 0;
 if (+HEAPF32[i3 >> 2] == d2) {
  i4 = 0;
  return i4 | 0;
 }
 HEAPF32[i3 >> 2] = d2;
 i4 = 1;
 return i4 | 0;
}
function __ZN7WebCore15SpotLightSource19setSpecularExponentEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0;
 i3 = i1 + 36 | 0;
 if (+HEAPF32[i3 >> 2] == d2) {
  i4 = 0;
  return i4 | 0;
 }
 HEAPF32[i3 >> 2] = d2;
 i4 = 1;
 return i4 | 0;
}
function __ZN7WebCore15SpotLightSource12setPointsAtZEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0;
 i3 = i1 + 32 | 0;
 if (+HEAPF32[i3 >> 2] == d2) {
  i4 = 0;
  return i4 | 0;
 }
 HEAPF32[i3 >> 2] = d2;
 i4 = 1;
 return i4 | 0;
}
function __ZN7WebCore15SpotLightSource12setPointsAtYEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0;
 i3 = i1 + 28 | 0;
 if (+HEAPF32[i3 >> 2] == d2) {
  i4 = 0;
  return i4 | 0;
 }
 HEAPF32[i3 >> 2] = d2;
 i4 = 1;
 return i4 | 0;
}
function __ZN7WebCore15SpotLightSource12setPointsAtXEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0;
 i3 = i1 + 24 | 0;
 if (+HEAPF32[i3 >> 2] == d2) {
  i4 = 0;
  return i4 | 0;
 }
 HEAPF32[i3 >> 2] = d2;
 i4 = 1;
 return i4 | 0;
}
function __ZN7WebCore15SpotLightSource4setZEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0;
 i3 = i1 + 20 | 0;
 if (+HEAPF32[i3 >> 2] == d2) {
  i4 = 0;
  return i4 | 0;
 }
 HEAPF32[i3 >> 2] = d2;
 i4 = 1;
 return i4 | 0;
}
function __ZN7WebCore15SpotLightSource4setYEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0;
 i3 = i1 + 16 | 0;
 if (+HEAPF32[i3 >> 2] == d2) {
  i4 = 0;
  return i4 | 0;
 }
 HEAPF32[i3 >> 2] = d2;
 i4 = 1;
 return i4 | 0;
}
function __ZN7WebCore15SpotLightSource4setXEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0;
 i3 = i1 + 12 | 0;
 if (+HEAPF32[i3 >> 2] == d2) {
  i4 = 0;
  return i4 | 0;
 }
 HEAPF32[i3 >> 2] = d2;
 i4 = 1;
 return i4 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiiif(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 FUNCTION_TABLE_viiiif[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, +d6);
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
function dynCall_iif(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return FUNCTION_TABLE_iif[i1 & 31](i2 | 0, +d3) | 0;
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
function b2(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 abort(2);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZN7WebCore15SpotLightSourceD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore11LightSource12setElevationEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return 0;
}
function __ZN7WebCore11LightSource10setAzimuthEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function __ZN7WebCore15SpotLightSourceD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b4(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore15SpotLightSourceD0Ev,b0,__ZN7WebCore15SpotLightSourceD1Ev,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore15SpotLightSource16initPaintingDataERNS_11LightSource12PaintingDataE,b1];
  var FUNCTION_TABLE_viiiif = [b2,b2,__ZN7WebCore15SpotLightSource18updatePaintingDataERNS_11LightSource12PaintingDataEiif,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_iif = [b4,b4,__ZN7WebCore11LightSource10setAzimuthEf,b4,__ZN7WebCore11LightSource12setElevationEf,b4,__ZN7WebCore15SpotLightSource12setPointsAtYEf,b4,__ZN7WebCore15SpotLightSource20setLimitingConeAngleEf,b4,__ZN7WebCore15SpotLightSource12setPointsAtZEf,b4,__ZN7WebCore15SpotLightSource4setYEf,b4,__ZN7WebCore15SpotLightSource12setPointsAtXEf,b4,__ZN7WebCore15SpotLightSource4setZEf,b4,__ZN7WebCore15SpotLightSource19setSpecularExponentEf,b4,__ZN7WebCore15SpotLightSource4setXEf,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6,__ZNK7WebCore15SpotLightSource22externalRepresentationERNS_10TextStreamE,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_viiiif: dynCall_viiiif, dynCall_ii: dynCall_ii, dynCall_iif: dynCall_iif, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_viiiif": invoke_viiiif, "invoke_ii": invoke_ii, "invoke_iif": invoke_iif, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_cosf": _cosf, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_sqrtf": _sqrtf, "_llvm_pow_f32": _llvm_pow_f32, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_viiiif = Module["dynCall_viiiif"] = asm["dynCall_viiiif"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iif = Module["dynCall_iif"] = asm["dynCall_iif"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore11LightSource10setAzimuthEf","__ZN7WebCore11LightSource12setElevationEf","_strlen","__ZN7WebCore15SpotLightSource16initPaintingDataERNS_11LightSource12PaintingDataE","__ZN7WebCore15SpotLightSource12setPointsAtXEf","__ZN7WebCore15SpotLightSource20setLimitingConeAngleEf","_memset","__ZN7WebCore15SpotLightSource4setXEf","__ZN7WebCore15SpotLightSource12setPointsAtZEf","_memcpy","__ZN7WebCore15SpotLightSource4setYEf","__ZN7WebCore15SpotLightSource18updatePaintingDataERNS_11LightSource12PaintingDataEiif","__ZN7WebCore15SpotLightSourceD0Ev","__ZN7WebCore15SpotLightSource4setZEf","__ZNK7WebCore15SpotLightSource22externalRepresentationERNS_10TextStreamE","__ZN7WebCore15SpotLightSource19setSpecularExponentEf","__ZN7WebCore15SpotLightSource12setPointsAtYEf","__ZN7WebCore15SpotLightSourceD1Ev"]

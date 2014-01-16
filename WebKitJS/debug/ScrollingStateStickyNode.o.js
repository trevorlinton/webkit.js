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
H_BASE = parentModule["_malloc"](440 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 440;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore24ScrollingStateStickyNodeC1ERNS_18ScrollingStateTreeEy;
var __ZN7WebCore24ScrollingStateStickyNodeC1ERKS0_RNS_18ScrollingStateTreeE;
var __ZN7WebCore24ScrollingStateStickyNodeD1Ev;
/* memory initializer */ allocate([40,108,101,102,116,32,111,102,102,115,101,116,32,0,0,0,41,10,0,0,0,0,0,0,65,110,99,104,111,114,69,100,103,101,66,111,116,116,111,109,0,0,0,0,0,0,0,0,65,110,99,104,111,114,69,100,103,101,84,111,112,32,0,0,65,110,99,104,111,114,69,100,103,101,82,105,103,104,116,32,0,0,0,0,0,0,0,0,65,110,99,104,111,114,69,100,103,101,76,101,102,116,32,0,40,97,110,99,104,111,114,32,101,100,103,101,115,58,32,0,10,0,0,0,0,0,0,0,40,108,97,121,101,114,32,112,111,115,105,116,105,111,110,32,97,116,32,108,97,115,116,32,108,97,121,111,117,116,32,0,40,115,116,105,99,107,121,32,111,102,102,115,101,116,32,97,116,32,108,97,115,116,32,108,97,121,111,117,116,32,0,0,40,115,116,105,99,107,121,32,98,111,120,32,114,101,99,116,32,0,0,0,0,0,0,0,32,120,32,0,0,0,0,0,32,0,0,0,0,0,0,0,44,32,0,0,0,0,0,0,40,99,111,110,116,97,105,110,105,110,103,32,98,108,111,99,107,32,114,101,99,116,32,0,40,98,111,116,116,111,109,32,111,102,102,115,101,116,32,0,40,116,111,112,32,111,102,102,115,101,116,32,0,0,0,0,40,114,105,103,104,116,32,111,102,102,115,101,116,32,0,0,83,116,105,99,107,121,32,110,111,100,101,0,0,0,0,0,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var __ZTVN7WebCore33StickyPositionViewportConstraintsE=(H_BASE+344)|0;
  var __ZTVN7WebCore24ScrollingStateStickyNodeE=(H_BASE+376)|0;
  var __ZTVN7WebCore19ViewportConstraintsE=(H_BASE+416)|0;
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
  var invoke_viiii=env.invoke_viiii;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore24ScrollingStateStickyNode14dumpPropertiesERNS_10TextStreamEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, d16 = +0, d17 = +0, d18 = +0;
 __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 336 | 0) | 0, H_BASE + 320 | 0) | 0, H_BASE + 128 | 0) | 0;
 i4 = i1 + 68 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   i5 = 17;
  } else {
   __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 1 | 0);
   __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 112 | 0) | 0;
   i6 = HEAP32[i4 >> 2] | 0;
   if ((i6 & 1 | 0) == 0) {
    i7 = i6;
   } else {
    __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 96 | 0) | 0;
    i7 = HEAP32[i4 >> 2] | 0;
   }
   if ((i7 & 2 | 0) == 0) {
    i8 = i7;
   } else {
    __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 72 | 0) | 0;
    i8 = HEAP32[i4 >> 2] | 0;
   }
   if ((i8 & 4 | 0) == 0) {
    i9 = i8;
   } else {
    __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 56 | 0) | 0;
    i9 = HEAP32[i4 >> 2] | 0;
   }
   if ((i9 & 8 | 0) != 0) {
    __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 32 | 0) | 0;
   }
   __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 24 | 0) | 0;
   i6 = HEAP32[i4 >> 2] | 0;
   if ((i6 & 1 | 0) == 0) {
    i10 = i6;
   } else {
    __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 1 | 0);
    i6 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 8 | 0) | 0;
    __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i6, +HEAPF32[i1 + 72 >> 2]) | 0, H_BASE + 24 | 0) | 0;
    i10 = HEAP32[i4 >> 2] | 0;
   }
   if ((i10 & 2 | 0) == 0) {
    i11 = i10;
   } else {
    __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 1 | 0);
    i6 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 304 | 0) | 0;
    __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i6, +HEAPF32[i1 + 76 >> 2]) | 0, H_BASE + 24 | 0) | 0;
    i11 = HEAP32[i4 >> 2] | 0;
   }
   if ((i11 & 4 | 0) == 0) {
    i12 = i11;
   } else {
    __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 1 | 0);
    i6 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 288 | 0) | 0;
    __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i6, +HEAPF32[i1 + 80 >> 2]) | 0, H_BASE + 24 | 0) | 0;
    i12 = HEAP32[i4 >> 2] | 0;
   }
   if ((i12 & 8 | 0) == 0) {
    i5 = 17;
    break;
   }
   i6 = i3 + 1 | 0;
   __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i6);
   i13 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 272 | 0) | 0;
   __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i13, +HEAPF32[i1 + 84 >> 2]) | 0, H_BASE + 24 | 0) | 0;
   i14 = i6;
  }
 } while (0);
 if ((i5 | 0) == 17) {
  i14 = i3 + 1 | 0;
 }
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i14);
 d15 = +HEAPF32[i1 + 104 >> 2];
 d16 = +HEAPF32[i1 + 108 >> 2];
 d17 = +HEAPF32[i1 + 112 >> 2];
 d18 = +HEAPF32[i1 + 116 >> 2];
 __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(__ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 248 | 0) | 0, d15) | 0, H_BASE + 240 | 0) | 0, d16) | 0, H_BASE + 232 | 0) | 0, d17) | 0, H_BASE + 224 | 0) | 0, d18) | 0, H_BASE + 24 | 0) | 0;
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i14);
 i3 = i1 + 120 | 0;
 d18 = +HEAPF32[i3 >> 2];
 i5 = i1 + 124 | 0;
 d17 = +HEAPF32[i5 >> 2];
 i12 = i1 + 128 | 0;
 d16 = +HEAPF32[i12 >> 2];
 i4 = i1 + 132 | 0;
 d15 = +HEAPF32[i4 >> 2];
 __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(__ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 200 | 0) | 0, d18) | 0, H_BASE + 232 | 0) | 0, d17) | 0, H_BASE + 232 | 0) | 0, d16) | 0, H_BASE + 232 | 0) | 0, d15) | 0, H_BASE + 24 | 0) | 0;
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i14);
 d15 = +HEAPF32[i3 >> 2];
 d16 = +HEAPF32[i5 >> 2];
 d17 = +HEAPF32[i12 >> 2];
 d18 = +HEAPF32[i4 >> 2];
 __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(__ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 200 | 0) | 0, d15) | 0, H_BASE + 232 | 0) | 0, d16) | 0, H_BASE + 232 | 0) | 0, d17) | 0, H_BASE + 232 | 0) | 0, d18) | 0, H_BASE + 24 | 0) | 0;
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i14);
 i4 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 168 | 0) | 0;
 i12 = i1 + 136 | 0;
 i5 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i4, +HEAPF32[i12 >> 2]) | 0, H_BASE + 232 | 0) | 0;
 __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i5, +HEAPF32[i12 + 4 >> 2]) | 0, H_BASE + 24 | 0) | 0;
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i14);
 i14 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 136 | 0) | 0;
 i2 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i14, +HEAPF32[i1 + 144 >> 2]) | 0, H_BASE + 232 | 0) | 0;
 __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i2, +HEAPF32[i1 + 148 >> 2]) | 0, H_BASE + 24 | 0) | 0;
 return;
}
function __ZNK7WebCore33StickyPositionViewportConstraintseqERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, d5 = +0, d6 = +0, d7 = +0, i8 = 0;
 if (+HEAPF32[i1 + 16 >> 2] != +HEAPF32[i2 + 16 >> 2]) {
  i3 = 0;
  return i3 | 0;
 }
 if (+HEAPF32[i1 + 20 >> 2] != +HEAPF32[i2 + 20 >> 2]) {
  i3 = 0;
  return i3 | 0;
 }
 if (+HEAPF32[i1 + 24 >> 2] != +HEAPF32[i2 + 24 >> 2]) {
  i3 = 0;
  return i3 | 0;
 }
 if (+HEAPF32[i1 + 28 >> 2] != +HEAPF32[i2 + 28 >> 2]) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 48 | 0;
 d5 = +HEAPF32[i4 >> 2];
 d6 = +HEAPF32[i4 + 4 >> 2];
 i4 = i2 + 48 | 0;
 d7 = +HEAPF32[i4 >> 2];
 if (!(d5 == d7 & d6 == +HEAPF32[i4 + 4 >> 2])) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 56 | 0;
 d6 = +HEAPF32[i4 >> 2];
 i8 = i2 + 56 | 0;
 if (d6 != +HEAPF32[i8 >> 2]) {
  i3 = 0;
  return i3 | 0;
 }
 d6 = +HEAPF32[i8 + 4 >> 2];
 if (+HEAPF32[i4 + 4 >> 2] != d6) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 64 | 0;
 d6 = +HEAPF32[i4 >> 2];
 d7 = +HEAPF32[i4 + 4 >> 2];
 i4 = i2 + 64 | 0;
 d5 = +HEAPF32[i4 >> 2];
 if (!(d6 == d5 & d7 == +HEAPF32[i4 + 4 >> 2])) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 72 | 0;
 d7 = +HEAPF32[i4 >> 2];
 i8 = i2 + 72 | 0;
 if (d7 != +HEAPF32[i8 >> 2]) {
  i3 = 0;
  return i3 | 0;
 }
 d7 = +HEAPF32[i8 + 4 >> 2];
 if (+HEAPF32[i4 + 4 >> 2] != d7) {
  i3 = 0;
  return i3 | 0;
 }
 if (+HEAPF32[i1 + 80 >> 2] != +HEAPF32[i2 + 80 >> 2]) {
  i3 = 0;
  return i3 | 0;
 }
 if (+HEAPF32[i1 + 84 >> 2] != +HEAPF32[i2 + 84 >> 2]) {
  i3 = 0;
  return i3 | 0;
 }
 if (+HEAPF32[i1 + 88 >> 2] != +HEAPF32[i2 + 88 >> 2]) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = +HEAPF32[i1 + 92 >> 2] == +HEAPF32[i2 + 92 >> 2];
 return i3 | 0;
}
function __ZN7WebCore24ScrollingStateStickyNode5cloneERNS_18ScrollingStateTreeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = __Znwj(152) | 0;
 i5 = i4;
 __ZN7WebCore18ScrollingStateNodeC2ERKS0_RNS_18ScrollingStateTreeE(i5, i2 | 0, i3);
 HEAP32[i4 >> 2] = H_BASE + 384;
 i3 = i2 + 60 | 0;
 i6 = i4 + 60 | 0;
 i7 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i6 + 4 >> 2] = i7;
 HEAP32[i4 + 68 >> 2] = HEAP32[i2 + 68 >> 2];
 HEAP32[i4 + 56 >> 2] = H_BASE + 352;
 HEAPF32[i4 + 72 >> 2] = +HEAPF32[i2 + 72 >> 2];
 HEAPF32[i4 + 76 >> 2] = +HEAPF32[i2 + 76 >> 2];
 HEAPF32[i4 + 80 >> 2] = +HEAPF32[i2 + 80 >> 2];
 HEAPF32[i4 + 84 >> 2] = +HEAPF32[i2 + 84 >> 2];
 i7 = i4 + 88 | 0;
 i6 = i2 + 88 | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 i6 = i4 + 104 | 0;
 i7 = i2 + 104 | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 i7 = i4 + 120 | 0;
 i6 = i2 + 120 | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 i6 = i2 + 136 | 0;
 i7 = i4 + 136 | 0;
 i3 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i7 + 4 >> 2] = i3;
 i3 = i2 + 144 | 0;
 i2 = i4 + 144 | 0;
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i4;
 HEAP32[i1 >> 2] = i5;
 return;
}
function __ZN7WebCore24ScrollingStateStickyNodeC2ERKS0_RNS_18ScrollingStateTreeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 __ZN7WebCore18ScrollingStateNodeC2ERKS0_RNS_18ScrollingStateTreeE(i1 | 0, i2 | 0, i3);
 HEAP32[i1 >> 2] = H_BASE + 384;
 i3 = i1 + 56 | 0;
 HEAP32[i3 >> 2] = H_BASE + 424;
 i4 = i2 + 60 | 0;
 i5 = i1 + 60 | 0;
 i6 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i6;
 HEAP32[i1 + 68 >> 2] = HEAP32[i2 + 68 >> 2];
 HEAP32[i3 >> 2] = H_BASE + 352;
 HEAPF32[i1 + 72 >> 2] = +HEAPF32[i2 + 72 >> 2];
 HEAPF32[i1 + 76 >> 2] = +HEAPF32[i2 + 76 >> 2];
 HEAPF32[i1 + 80 >> 2] = +HEAPF32[i2 + 80 >> 2];
 HEAPF32[i1 + 84 >> 2] = +HEAPF32[i2 + 84 >> 2];
 i3 = i1 + 88 | 0;
 i6 = i2 + 88 | 0;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 i6 = i1 + 104 | 0;
 i3 = i2 + 104 | 0;
 HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
 i3 = i1 + 120 | 0;
 i6 = i2 + 120 | 0;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 i6 = i2 + 136 | 0;
 i3 = i1 + 136 | 0;
 i5 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i3 + 4 >> 2] = i5;
 i5 = i2 + 144 | 0;
 i2 = i1 + 144 | 0;
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZN7WebCore24ScrollingStateStickyNodeC1ERKS0_RNS_18ScrollingStateTreeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 __ZN7WebCore18ScrollingStateNodeC2ERKS0_RNS_18ScrollingStateTreeE(i1 | 0, i2 | 0, i3);
 HEAP32[i1 >> 2] = H_BASE + 384;
 i3 = i1 + 56 | 0;
 HEAP32[i3 >> 2] = H_BASE + 424;
 i4 = i2 + 60 | 0;
 i5 = i1 + 60 | 0;
 i6 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i6;
 HEAP32[i1 + 68 >> 2] = HEAP32[i2 + 68 >> 2];
 HEAP32[i3 >> 2] = H_BASE + 352;
 HEAPF32[i1 + 72 >> 2] = +HEAPF32[i2 + 72 >> 2];
 HEAPF32[i1 + 76 >> 2] = +HEAPF32[i2 + 76 >> 2];
 HEAPF32[i1 + 80 >> 2] = +HEAPF32[i2 + 80 >> 2];
 HEAPF32[i1 + 84 >> 2] = +HEAPF32[i2 + 84 >> 2];
 i3 = i1 + 88 | 0;
 i6 = i2 + 88 | 0;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 i6 = i1 + 104 | 0;
 i3 = i2 + 104 | 0;
 HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
 i3 = i1 + 120 | 0;
 i6 = i2 + 120 | 0;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 i6 = i2 + 136 | 0;
 i3 = i1 + 136 | 0;
 i5 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i3 + 4 >> 2] = i5;
 i5 = i2 + 144 | 0;
 i2 = i1 + 144 | 0;
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZN7WebCore24ScrollingStateStickyNode17updateConstraintsERKNS_33StickyPositionViewportConstraintsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if (__ZNK7WebCore33StickyPositionViewportConstraintseqERKS0_(i1 + 56 | 0, i2) | 0) {
  return;
 }
 i3 = i2 + 4 | 0;
 i4 = i1 + 60 | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i5;
 HEAP32[i1 + 68 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAPF32[i1 + 72 >> 2] = +HEAPF32[i2 + 16 >> 2];
 HEAPF32[i1 + 76 >> 2] = +HEAPF32[i2 + 20 >> 2];
 HEAPF32[i1 + 80 >> 2] = +HEAPF32[i2 + 24 >> 2];
 HEAPF32[i1 + 84 >> 2] = +HEAPF32[i2 + 28 >> 2];
 i5 = i1 + 88 | 0;
 i4 = i2 + 32 | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 i4 = i1 + 104 | 0;
 i5 = i2 + 48 | 0;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 i5 = i1 + 120 | 0;
 i4 = i2 + 64 | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 i4 = i2 + 80 | 0;
 i5 = i1 + 136 | 0;
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i3;
 i3 = i2 + 88 | 0;
 i2 = i1 + 144 | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i5;
 __ZN7WebCore18ScrollingStateNode18setPropertyChangedEj(i1 | 0, 1);
 return;
}
function __ZN7WebCore24ScrollingStateStickyNode32syncLayerPositionForViewportRectERKNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, d10 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i5 | 0;
 d7 = +(HEAP32[i2 + 8 >> 2] | 0);
 d8 = +(HEAP32[i2 + 12 >> 2] | 0);
 d9 = +(+(HEAP32[i2 >> 2] | 0));
 d10 = +(+(HEAP32[i2 + 4 >> 2] | 0));
 HEAPF32[i6 >> 2] = d9;
 HEAPF32[i6 + 4 >> 2] = d10;
 i6 = i5 + 8 | 0;
 d10 = +d7;
 d7 = +d8;
 HEAPF32[i6 >> 2] = d10;
 HEAPF32[i6 + 4 >> 2] = d7;
 __ZNK7WebCore33StickyPositionViewportConstraints32layerPositionForConstrainingRectERKNS_9FloatRectE(i4, i1 + 56 | 0, i5);
 if ((HEAP32[i1 + 48 >> 2] | 0) != 1) {
  STACKTOP = i3;
  return;
 }
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 60 >> 2] & 3](i5, i4);
 STACKTOP = i3;
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
function __ZN7WebCore24ScrollingStateStickyNode6createERNS_18ScrollingStateTreeEy(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = __Znwj(152) | 0;
 __ZN7WebCore18ScrollingStateNodeC2ENS_17ScrollingNodeTypeERNS_18ScrollingStateTreeEy(i5, 2, i2, i3, i4);
 HEAP32[i5 >> 2] = H_BASE + 384;
 HEAPF32[i5 + 60 >> 2] = +0;
 HEAPF32[i5 + 64 >> 2] = +0;
 HEAP32[i5 + 68 >> 2] = 0;
 HEAP32[i5 + 56 >> 2] = H_BASE + 352;
 _memset(i5 + 72 | 0, 0, 80) | 0;
 HEAP32[i1 >> 2] = i5;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 352 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_v + 2;
}
function __ZN7WebCore24ScrollingStateStickyNodeC2ERNS_18ScrollingStateTreeEy(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore18ScrollingStateNodeC2ENS_17ScrollingNodeTypeERNS_18ScrollingStateTreeEy(i1 | 0, 2, i2, i3, i4);
 HEAP32[i1 >> 2] = H_BASE + 384;
 HEAPF32[i1 + 60 >> 2] = +0;
 HEAPF32[i1 + 64 >> 2] = +0;
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP32[i1 + 56 >> 2] = H_BASE + 352;
 _memset(i1 + 72 | 0, 0, 80) | 0;
 return;
}
function __ZN7WebCore24ScrollingStateStickyNodeC1ERNS_18ScrollingStateTreeEy(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore18ScrollingStateNodeC2ENS_17ScrollingNodeTypeERNS_18ScrollingStateTreeEy(i1 | 0, 2, i2, i3, i4);
 HEAP32[i1 >> 2] = H_BASE + 384;
 HEAPF32[i1 + 60 >> 2] = +0;
 HEAPF32[i1 + 64 >> 2] = +0;
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP32[i1 + 56 >> 2] = H_BASE + 352;
 _memset(i1 + 72 | 0, 0, 80) | 0;
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
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore24ScrollingStateStickyNodeD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18ScrollingStateNodeD2Ev(i1 | 0);
 __ZdlPv(i1);
 return;
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
function __ZN7WebCore24ScrollingStateStickyNodeD2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18ScrollingStateNodeD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore24ScrollingStateStickyNodeD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18ScrollingStateNodeD2Ev(i1 | 0);
 return;
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
function __ZNK7WebCore33StickyPositionViewportConstraints14constraintTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function __ZN7WebCore33StickyPositionViewportConstraintsD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
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
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZN7WebCore33StickyPositionViewportConstraintsD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore19ViewportConstraintsD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
}
function __ZN7WebCore19ViewportConstraintsD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
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
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore24ScrollingStateStickyNodeD2Ev,b0,__ZN7WebCore33StickyPositionViewportConstraintsD1Ev,b0,__ZN7WebCore24ScrollingStateStickyNodeD0Ev,b0,__ZN7WebCore19ViewportConstraintsD0Ev,b0,__ZN7WebCore19ViewportConstraintsD1Ev,b0,__ZN7WebCore33StickyPositionViewportConstraintsD0Ev,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore24ScrollingStateStickyNode32syncLayerPositionForViewportRectERKNS_10LayoutRectE,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZNK7WebCore33StickyPositionViewportConstraints14constraintTypeEv,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore24ScrollingStateStickyNode5cloneERNS_18ScrollingStateTreeE,b3,__ZN7WebCore24ScrollingStateStickyNodeC2ERKS0_RNS_18ScrollingStateTreeE,b3,__ZNK7WebCore24ScrollingStateStickyNode14dumpPropertiesERNS_10TextStreamEi,b3];
  var FUNCTION_TABLE_v = [b4,b4,v____cxa_pure_virtual__wrapper,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6,__ZN7WebCore24ScrollingStateStickyNodeC2ERNS_18ScrollingStateTreeEy,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore33StickyPositionViewportConstraints14constraintTypeEv","__ZN7WebCore24ScrollingStateStickyNodeD2Ev","__ZNK7WebCore33StickyPositionViewportConstraintseqERKS0_","_memset","__ZN7WebCore24ScrollingStateStickyNode17updateConstraintsERKNS_33StickyPositionViewportConstraintsE","__ZN7WebCore24ScrollingStateStickyNode5cloneERNS_18ScrollingStateTreeE","__ZN7WebCore24ScrollingStateStickyNodeC2ERKS0_RNS_18ScrollingStateTreeE","__ZNK7WebCore24ScrollingStateStickyNode14dumpPropertiesERNS_10TextStreamEi","__ZN7WebCore24ScrollingStateStickyNodeD0Ev","__ZN7WebCore24ScrollingStateStickyNodeC2ERNS_18ScrollingStateTreeEy","__ZN7WebCore24ScrollingStateStickyNode32syncLayerPositionForViewportRectERKNS_10LayoutRectE","_memcpy","__ZN7WebCore19ViewportConstraintsD0Ev","_strlen","__ZN7WebCore19ViewportConstraintsD1Ev","__ZN7WebCore33StickyPositionViewportConstraintsD1Ev","__ZN7WebCore33StickyPositionViewportConstraintsD0Ev","__ZN7WebCore24ScrollingStateStickyNode6createERNS_18ScrollingStateTreeEy"]

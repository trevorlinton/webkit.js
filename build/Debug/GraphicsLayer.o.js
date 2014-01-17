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
H_BASE = parentModule["_malloc"](1096 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1096;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore13GraphicsLayerD1Ev;
/* memory initializer */ allocate([40,98,111,117,110,100,115,32,111,114,105,103,105,110,32,0,40,112,111,115,105,116,105,111,110,32,0,0,0,0,0,0,41,10,0,0,0,0,0,0,10,0,0,0,0,0,0,0,34,0,0,0,0,0,0,0,40,99,104,105,108,100,114,101,110,32,0,0,0,0,0,0,71,114,97,112,104,105,99,115,76,97,121,101,114,80,97,105,110,116,67,111,109,112,111,115,105,116,101,100,83,99,114,111,108,108,10,0,0,0,0,0,71,114,97,112,104,105,99,115,76,97,121,101,114,80,97,105,110,116,79,118,101,114,102,108,111,119,67,111,110,116,101,110,116,115,10,0,0,0,0,0,32,34,0,0,0,0,0,0,71,114,97,112,104,105,99,115,76,97,121,101,114,80,97,105,110,116,77,97,115,107,10,0,71,114,97,112,104,105,99,115,76,97,121,101,114,80,97,105,110,116,70,111,114,101,103,114,111,117,110,100,10,0,0,0,71,114,97,112,104,105,99,115,76,97,121,101,114,80,97,105,110,116,66,97,99,107,103,114,111,117,110,100,10,0,0,0,40,112,97,105,110,116,105,110,103,80,104,97,115,101,115,10,0,0,0,0,0,0,0,0,40,114,101,99,116,32,0,0,40,114,101,112,97,105,110,116,32,114,101,99,116,115,10,0,114,101,112,97,105,110,116,82,101,99,116,115,0,0,0,0,40,114,101,112,108,105,99,97,116,101,100,32,108,97,121,101,114,0,0,0,0,0,0,0,40,114,101,112,108,105,99,97,32,108,97,121,101,114,0,0,40,99,104,105,108,100,114,101,110,84,114,97,110,115,102,111,114,109,32,0,0,0,0,0,32,0,0,0,0,0,0,0,93,41,10,0,0,0,0,0,93,32,0,0,0,0,0,0,91,0,0,0,0,0,0,0,40,116,114,97,110,115,102,111,114,109,32,0,0,0,0,0,40,98,97,99,107,103,114,111,117,110,100,67,111,108,111,114,32,0,0,0,0,0,0,0,98,97,99,107,103,114,111,117,110,100,67,111,108,111,114,0,110,111,32,99,108,105,101,110,116,0,0,0,0,0,0,0,99,108,105,101,110,116,32,0,104,105,100,100,101,110,0,0,118,105,115,105,98,108,101,0,71,114,97,112,104,105,99,115,76,97,121,101,114,0,0,0,40,98,97,99,107,102,97,99,101,86,105,115,105,98,105,108,105,116,121,32,0,0,0,0,40,99,111,110,116,101,110,116,115,86,105,115,105,98,108,101,32,0,0,0,0,0,0,0,40,100,114,97,119,115,67,111,110,116,101,110,116,32,0,0,100,114,97,119,115,67,111,110,116,101,110,116,0,0,0,0,40,112,114,101,115,101,114,118,101,115,51,68,32,0,0,0,40,99,111,110,116,101,110,116,115,79,112,97,113,117,101,32,0,0,0,0,0,0,0,0,40,117,115,105,110,103,84,105,108,101,100,76,97,121,101,114,32,0,0,0,0,0,0,0,40,111,112,97,99,105,116,121,32,0,0,0,0,0,0,0,40,98,111,117,110,100,115,32,0,0,0,0,0,0,0,0,40,97,110,99,104,111,114,32,0,0,0,0,0,0,0,0,40,0,0,0,0,0,0,0,45,124,116,114,97,110,115,105,116,105,111,110,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_vif(index,a1,a2) {
  try {
    Module["dynCall_vif"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vid(index,a1,a2) {
  try {
    Module["dynCall_vid"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiiiid(index,a1,a2,a3,a4,a5,a6) {
  try {
    return Module["dynCall_iiiiiid"](index,a1,a2,a3,a4,a5,a6);
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
function invoke_di(index,a1) {
  try {
    return Module["dynCall_di"](index,a1);
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
function invoke_viid(index,a1,a2,a3) {
  try {
    Module["dynCall_viid"](index,a1,a2,a3);
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
function invoke_viif(index,a1,a2,a3) {
  try {
    Module["dynCall_viif"](index,a1,a2,a3);
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
  var __ZTVN7WebCore13GraphicsLayerE=(H_BASE+744)|0;
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
  var invoke_vif=env.invoke_vif;
  var invoke_vid=env.invoke_vid;
  var invoke_iiiiiid=env.invoke_iiiiiid;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_di=env.invoke_di;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viid=env.invoke_viid;
  var invoke_fi=env.invoke_fi;
  var invoke_viif=env.invoke_viif;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var _fabs=env._fabs;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore13GraphicsLayer14dumpPropertiesERNS_10TextStreamEij(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 48 | 0;
 i12 = i5 + 64 | 0;
 i13 = i5 + 72 | 0;
 i14 = i5 + 88 | 0;
 i15 = i5 + 96 | 0;
 i16 = i5 + 112 | 0;
 i17 = i5 + 120 | 0;
 i18 = i5 + 136 | 0;
 i19 = i5 + 144 | 0;
 i20 = i5 + 160 | 0;
 i21 = i5 + 168 | 0;
 i22 = i5 + 184 | 0;
 i23 = i5 + 192 | 0;
 i24 = i5 + 216 | 0;
 i25 = i1 + 20 | 0;
 i26 = i1 + 24 | 0;
 if (+HEAPF32[i25 >> 2] != +0) {
  i27 = 3;
 } else {
  if (+HEAPF32[i26 >> 2] != +0) {
   i27 = 3;
  }
 }
 if ((i27 | 0) == 3) {
  __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 1 | 0);
  i28 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 24 | 0) | 0;
  i29 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i28, +HEAPF32[i25 >> 2]) | 0, H_BASE + 384 | 0) | 0;
  __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i29, +HEAPF32[i26 >> 2]) | 0, H_BASE + 40 | 0) | 0;
 }
 i26 = i1 + 48 | 0;
 i29 = i1 + 52 | 0;
 if (+HEAPF32[i26 >> 2] != +0) {
  i27 = 6;
 } else {
  if (+HEAPF32[i29 >> 2] != +0) {
   i27 = 6;
  }
 }
 if ((i27 | 0) == 6) {
  __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 1 | 0);
  i25 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 8 | 0) | 0;
  i28 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i25, +HEAPF32[i26 >> 2]) | 0, H_BASE + 384 | 0) | 0;
  __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i28, +HEAPF32[i29 >> 2]) | 0, H_BASE + 40 | 0) | 0;
 }
 i29 = i1 + 28 | 0;
 i28 = i1 + 32 | 0;
 do {
  if (+HEAPF32[i29 >> 2] != +.5) {
   i27 = 10;
  } else {
   if (+HEAPF32[i28 >> 2] != +.5) {
    i27 = 10;
    break;
   }
   if (+HEAPF32[i1 + 36 >> 2] != +0) {
    i27 = 10;
   }
  }
 } while (0);
 if ((i27 | 0) == 10) {
  __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 1 | 0);
  i26 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 704 | 0) | 0;
  i25 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i26, +HEAPF32[i29 >> 2]) | 0, H_BASE + 384 | 0) | 0;
  __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i25, +HEAPF32[i28 >> 2]) | 0, H_BASE + 40 | 0) | 0;
 }
 HEAP32[i7 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i6, i7);
 i7 = i1 + 40 | 0;
 i28 = i1 + 44 | 0;
 if (+HEAPF32[i7 >> 2] != +HEAPF32[i6 >> 2]) {
  i27 = 13;
 } else {
  if (+HEAPF32[i28 >> 2] != +HEAPF32[i6 + 4 >> 2]) {
   i27 = 13;
  }
 }
 if ((i27 | 0) == 13) {
  __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 1 | 0);
  i6 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 688 | 0) | 0;
  i25 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i6, +HEAPF32[i7 >> 2]) | 0, H_BASE + 384 | 0) | 0;
  __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i25, +HEAPF32[i28 >> 2]) | 0, H_BASE + 40 | 0) | 0;
 }
 i28 = i1 + 320 | 0;
 if (+HEAPF32[i28 >> 2] != +1) {
  __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 1 | 0);
  i25 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 672 | 0) | 0;
  __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i25, +HEAPF32[i28 >> 2]) | 0, H_BASE + 40 | 0) | 0;
 }
 i28 = i1 + 340 | 0;
 i25 = HEAP8[i28] | 0;
 if ((i25 & 8) == 0) {
  i30 = i25;
 } else {
  __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 1 | 0);
  i25 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 648 | 0) | 0;
  __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEb(i25, (HEAP8[i28] & 8) != 0) | 0, H_BASE + 40 | 0) | 0;
  i30 = HEAP8[i28] | 0;
 }
 if ((i30 & 1) == 0) {
  i31 = i30;
 } else {
  __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 1 | 0);
  i30 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 624 | 0) | 0;
  __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEb(i30, (HEAP8[i28] & 1) != 0) | 0, H_BASE + 40 | 0) | 0;
  i31 = HEAP8[i28] | 0;
 }
 if ((i31 & 2) == 0) {
  i32 = i31;
 } else {
  __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 1 | 0);
  i31 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 608 | 0) | 0;
  __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEb(i31, (HEAP8[i28] & 2) != 0) | 0, H_BASE + 40 | 0) | 0;
  i32 = HEAP8[i28] | 0;
 }
 do {
  if ((i32 & 32) != 0) {
   i31 = HEAP32[i1 + 4 >> 2] | 0;
   if (!(FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i31 >> 2] | 0) + 64 >> 2] & 3](i31, i1, H_BASE + 592 | 0) | 0)) {
    break;
   }
   __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 1 | 0);
   i31 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 576 | 0) | 0;
   __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEb(i31, (HEAP8[i28] & 32) != 0) | 0, H_BASE + 40 | 0) | 0;
  }
 } while (0);
 i32 = HEAP8[i28] | 0;
 if ((i32 & 64) == 0) {
  __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 1 | 0);
  i31 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 552 | 0) | 0;
  __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEb(i31, (HEAP8[i28] & 64) != 0) | 0, H_BASE + 40 | 0) | 0;
  i33 = HEAP8[i28] | 0;
 } else {
  i33 = i32;
 }
 if ((i33 & 4) == 0) {
  __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 1 | 0);
  i33 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 528 | 0) | 0;
  __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEPKc(i33, (HEAP8[i28] & 4) != 0 ? H_BASE + 504 | 0 : H_BASE + 496 | 0) | 0, H_BASE + 40 | 0) | 0;
 }
 i28 = (i4 & 1 | 0) != 0;
 if (i28) {
  __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 1 | 0);
  __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 720 | 0) | 0;
  i33 = i1 + 4 | 0;
  if ((HEAP32[i33 >> 2] | 0) == 0) {
   __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 472 | 0) | 0;
  } else {
   i32 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 488 | 0) | 0;
   __ZN7WebCore10TextStreamlsEPKv(i32, HEAP32[i33 >> 2] | 0) | 0;
  }
  __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 40 | 0) | 0;
 }
 i33 = i1 + 312 | 0;
 do {
  if ((HEAP8[i1 + 316 | 0] & 1) != 0) {
   i32 = HEAP32[i1 + 4 >> 2] | 0;
   if (!(FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i32 >> 2] | 0) + 64 >> 2] & 3](i32, i1, H_BASE + 456 | 0) | 0)) {
    break;
   }
   __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 1 | 0);
   i32 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 432 | 0) | 0;
   __ZNK7WebCore5Color23nameForRenderTreeAsTextEv(i8, i33);
   __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsERKN3WTF6StringE(i32, i8) | 0, H_BASE + 40 | 0) | 0;
   i32 = HEAP32[i8 >> 2] | 0;
   if ((i32 | 0) == 0) {
    break;
   }
   i31 = i32 | 0;
   i30 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
   if ((i30 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i32);
    break;
   } else {
    HEAP32[i31 >> 2] = i30;
    break;
   }
  }
 } while (0);
 i8 = i1 + 56 | 0;
 i33 = i1 + 64 | 0;
 do {
  if (+HEAPF64[i8 >> 3] == +1) {
   if (+HEAPF64[i33 >> 3] != +0) {
    i27 = 56;
    break;
   }
   if (+HEAPF64[i1 + 72 >> 3] != +0) {
    i27 = 56;
    break;
   }
   if (+HEAPF64[i1 + 80 >> 3] != +0) {
    i27 = 56;
    break;
   }
   if (+HEAPF64[i1 + 88 >> 3] != +0) {
    i27 = 56;
    break;
   }
   if (+HEAPF64[i1 + 96 >> 3] != +1) {
    i27 = 56;
    break;
   }
   if (+HEAPF64[i1 + 104 >> 3] != +0) {
    i27 = 56;
    break;
   }
   if (+HEAPF64[i1 + 112 >> 3] != +0) {
    i27 = 56;
    break;
   }
   if (+HEAPF64[i1 + 120 >> 3] != +0) {
    i27 = 56;
    break;
   }
   if (+HEAPF64[i1 + 128 >> 3] != +0) {
    i27 = 56;
    break;
   }
   if (+HEAPF64[i1 + 136 >> 3] != +1) {
    i27 = 56;
    break;
   }
   if (+HEAPF64[i1 + 144 >> 3] != +0) {
    i27 = 56;
    break;
   }
   if (+HEAPF64[i1 + 152 >> 3] != +0) {
    i27 = 56;
    break;
   }
   if (+HEAPF64[i1 + 160 >> 3] != +0) {
    i27 = 56;
    break;
   }
   if (+HEAPF64[i1 + 168 >> 3] != +0) {
    i27 = 56;
    break;
   }
   if (+HEAPF64[i1 + 176 >> 3] != +1) {
    i27 = 56;
   }
  } else {
   i27 = 56;
  }
 } while (0);
 if ((i27 | 0) == 56) {
  __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 1 | 0);
  __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 416 | 0) | 0;
  i30 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 408 | 0) | 0;
  i31 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i30, +HEAPF64[i8 >> 3]) | 0, H_BASE + 384 | 0) | 0;
  i8 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i31, +HEAPF64[i33 >> 3]) | 0, H_BASE + 384 | 0) | 0;
  i33 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i8, +HEAPF64[i1 + 72 >> 3]) | 0, H_BASE + 384 | 0) | 0;
  __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i33, +HEAPF64[i1 + 80 >> 3]) | 0, H_BASE + 400 | 0) | 0;
  i33 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 408 | 0) | 0;
  i8 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i33, +HEAPF64[i1 + 88 >> 3]) | 0, H_BASE + 384 | 0) | 0;
  i33 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i8, +HEAPF64[i1 + 96 >> 3]) | 0, H_BASE + 384 | 0) | 0;
  i8 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i33, +HEAPF64[i1 + 104 >> 3]) | 0, H_BASE + 384 | 0) | 0;
  __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i8, +HEAPF64[i1 + 112 >> 3]) | 0, H_BASE + 400 | 0) | 0;
  i8 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 408 | 0) | 0;
  i33 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i8, +HEAPF64[i1 + 120 >> 3]) | 0, H_BASE + 384 | 0) | 0;
  i8 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i33, +HEAPF64[i1 + 128 >> 3]) | 0, H_BASE + 384 | 0) | 0;
  i33 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i8, +HEAPF64[i1 + 136 >> 3]) | 0, H_BASE + 384 | 0) | 0;
  __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i33, +HEAPF64[i1 + 144 >> 3]) | 0, H_BASE + 400 | 0) | 0;
  i33 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 408 | 0) | 0;
  i8 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i33, +HEAPF64[i1 + 152 >> 3]) | 0, H_BASE + 384 | 0) | 0;
  i33 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i8, +HEAPF64[i1 + 160 >> 3]) | 0, H_BASE + 384 | 0) | 0;
  i8 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i33, +HEAPF64[i1 + 168 >> 3]) | 0, H_BASE + 384 | 0) | 0;
  __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i8, +HEAPF64[i1 + 176 >> 3]) | 0, H_BASE + 392 | 0) | 0;
 }
 L78 : do {
  if ((HEAP32[i1 + 364 >> 2] | 0) != 0) {
   i8 = i1 + 184 | 0;
   i33 = i1 + 192 | 0;
   do {
    if (+HEAPF64[i8 >> 3] == +1) {
     if (+HEAPF64[i33 >> 3] != +0) {
      break;
     }
     if (+HEAPF64[i1 + 200 >> 3] != +0) {
      break;
     }
     if (+HEAPF64[i1 + 208 >> 3] != +0) {
      break;
     }
     if (+HEAPF64[i1 + 216 >> 3] != +0) {
      break;
     }
     if (+HEAPF64[i1 + 224 >> 3] != +1) {
      break;
     }
     if (+HEAPF64[i1 + 232 >> 3] != +0) {
      break;
     }
     if (+HEAPF64[i1 + 240 >> 3] != +0) {
      break;
     }
     if (+HEAPF64[i1 + 248 >> 3] != +0) {
      break;
     }
     if (+HEAPF64[i1 + 256 >> 3] != +0) {
      break;
     }
     if (+HEAPF64[i1 + 264 >> 3] != +1) {
      break;
     }
     if (+HEAPF64[i1 + 272 >> 3] != +0) {
      break;
     }
     if (+HEAPF64[i1 + 280 >> 3] != +0) {
      break;
     }
     if (+HEAPF64[i1 + 288 >> 3] != +0) {
      break;
     }
     if (+HEAPF64[i1 + 296 >> 3] != +0) {
      break;
     }
     if (+HEAPF64[i1 + 304 >> 3] == +1) {
      break L78;
     }
    }
   } while (0);
   __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 1 | 0);
   __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 360 | 0) | 0;
   i31 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 408 | 0) | 0;
   i30 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i31, +HEAPF64[i8 >> 3]) | 0, H_BASE + 384 | 0) | 0;
   i31 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i30, +HEAPF64[i33 >> 3]) | 0, H_BASE + 384 | 0) | 0;
   i30 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i31, +HEAPF64[i1 + 200 >> 3]) | 0, H_BASE + 384 | 0) | 0;
   __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i30, +HEAPF64[i1 + 208 >> 3]) | 0, H_BASE + 400 | 0) | 0;
   i30 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 408 | 0) | 0;
   i31 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i30, +HEAPF64[i1 + 216 >> 3]) | 0, H_BASE + 384 | 0) | 0;
   i30 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i31, +HEAPF64[i1 + 224 >> 3]) | 0, H_BASE + 384 | 0) | 0;
   i31 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i30, +HEAPF64[i1 + 232 >> 3]) | 0, H_BASE + 384 | 0) | 0;
   __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i31, +HEAPF64[i1 + 240 >> 3]) | 0, H_BASE + 400 | 0) | 0;
   i31 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 408 | 0) | 0;
   i30 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i31, +HEAPF64[i1 + 248 >> 3]) | 0, H_BASE + 384 | 0) | 0;
   i31 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i30, +HEAPF64[i1 + 256 >> 3]) | 0, H_BASE + 384 | 0) | 0;
   i30 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i31, +HEAPF64[i1 + 264 >> 3]) | 0, H_BASE + 384 | 0) | 0;
   __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i30, +HEAPF64[i1 + 272 >> 3]) | 0, H_BASE + 400 | 0) | 0;
   i30 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 408 | 0) | 0;
   i31 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i30, +HEAPF64[i1 + 280 >> 3]) | 0, H_BASE + 384 | 0) | 0;
   i30 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i31, +HEAPF64[i1 + 288 >> 3]) | 0, H_BASE + 384 | 0) | 0;
   i31 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i30, +HEAPF64[i1 + 296 >> 3]) | 0, H_BASE + 384 | 0) | 0;
   __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEd(i31, +HEAPF64[i1 + 304 >> 3]) | 0, H_BASE + 392 | 0) | 0;
  }
 } while (0);
 i31 = i1 + 372 | 0;
 if ((HEAP32[i31 >> 2] | 0) != 0) {
  __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 1 | 0);
  __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 344 | 0) | 0;
  if (i28) {
   i30 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 384 | 0) | 0;
   __ZN7WebCore10TextStreamlsEPKv(i30, HEAP32[i31 >> 2] | 0) | 0;
  }
  __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 40 | 0) | 0;
  __ZNK7WebCore13GraphicsLayer9dumpLayerERNS_10TextStreamEij(HEAP32[i31 >> 2] | 0, i2, i3 + 2 | 0, i4);
 }
 i31 = i1 + 376 | 0;
 if ((HEAP32[i31 >> 2] | 0) != 0) {
  __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 1 | 0);
  __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 320 | 0) | 0;
  if (i28) {
   i28 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 384 | 0) | 0;
   __ZN7WebCore10TextStreamlsEPKv(i28, HEAP32[i31 >> 2] | 0) | 0;
  }
  __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 40 | 0) | 0;
 }
 L110 : do {
  if ((i4 & 8 | 0) != 0) {
   if (HEAP8[H_BASE + 1088 | 0] | 0) {
    i34 = HEAP32[H_BASE + 1096 >> 2] | 0;
   } else {
    i31 = __ZN3WTF10fastMallocEj(20) | 0;
    i28 = i31;
    _memset(i31 | 0, 0, 20) | 0;
    HEAP32[H_BASE + 1096 >> 2] = i28;
    HEAP8[H_BASE + 1088 | 0] = 1;
    i34 = i28;
   }
   i28 = HEAP32[i34 >> 2] | 0;
   if ((i28 | 0) == 0) {
    break;
   }
   i31 = HEAP32[i34 + 8 >> 2] | 0;
   i30 = i1;
   i32 = i30 + ~(i30 << 15) | 0;
   i30 = (i32 >>> 10 ^ i32) * 9 & -1;
   i32 = i30 >>> 6 ^ i30;
   i30 = i32 + ~(i32 << 11) | 0;
   i32 = i30 >>> 16 ^ i30;
   i30 = i31 & i32;
   i25 = i28 + (i30 << 4) | 0;
   i7 = HEAP32[i25 >> 2] | 0;
   if ((i7 | 0) == (i1 | 0)) {
    i35 = i25;
   } else {
    i25 = (i32 >>> 23) + ~i32 | 0;
    i32 = i25 << 12 ^ i25;
    i25 = i32 >>> 7 ^ i32;
    i32 = i25 << 2 ^ i25;
    i25 = i32 >>> 20 ^ i32 | 1;
    i32 = 0;
    i6 = i30;
    i30 = i7;
    while (1) {
     if ((i30 | 0) == 0) {
      break L110;
     }
     i7 = (i32 | 0) == 0 ? i25 : i32;
     i29 = i7 + i6 & i31;
     i26 = i28 + (i29 << 4) | 0;
     i36 = HEAP32[i26 >> 2] | 0;
     if ((i36 | 0) == (i1 | 0)) {
      i35 = i26;
      break;
     } else {
      i32 = i7;
      i6 = i29;
      i30 = i36;
     }
    }
   }
   if ((i35 | 0) == 0) {
    break;
   }
   HEAP32[i10 >> 2] = i1;
   __ZNK3WTF7HashMapIPKN7WebCore13GraphicsLayerENS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE3getERKS4_(i9, i34, i10);
   i30 = i9 + 8 | 0;
   if ((HEAP32[i30 >> 2] | 0) == 0) {
    i37 = 0;
   } else {
    i6 = HEAP32[i1 + 4 >> 2] | 0;
    i32 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i6 >> 2] | 0) + 64 >> 2] & 3](i6, i1, H_BASE + 304 | 0) | 0;
    HEAP32[i30 >> 2] = 0;
    i37 = i32;
   }
   i32 = i9 | 0;
   i30 = HEAP32[i32 >> 2] | 0;
   if ((i30 | 0) == 0) {
    if (!i37) {
     break;
    }
   } else {
    HEAP32[i32 >> 2] = 0;
    HEAP32[i9 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i30);
    if (!i37) {
     break;
    }
   }
   i30 = i3 + 1 | 0;
   __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i30);
   __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 288 | 0) | 0;
   i32 = i11 + 8 | 0;
   i6 = i11 | 0;
   i28 = i13 + 8 | 0;
   i31 = i13 | 0;
   i25 = i3 + 2 | 0;
   i33 = i15 + 8 | 0;
   i8 = i15 | 0;
   i36 = i17 + 8 | 0;
   i29 = i17 | 0;
   i7 = i19 + 8 | 0;
   i26 = i19 | 0;
   i38 = i21 + 8 | 0;
   i39 = i21 | 0;
   i40 = i21 + 4 | 0;
   i41 = i19 + 4 | 0;
   i42 = i17 + 4 | 0;
   i43 = i15 + 4 | 0;
   i44 = i13 + 4 | 0;
   i45 = i11 + 4 | 0;
   i46 = 0;
   while (1) {
    if (HEAP8[H_BASE + 1088 | 0] | 0) {
     i47 = HEAP32[H_BASE + 1096 >> 2] | 0;
    } else {
     i48 = __ZN3WTF10fastMallocEj(20) | 0;
     i49 = i48;
     _memset(i48 | 0, 0, 20) | 0;
     HEAP32[H_BASE + 1096 >> 2] = i49;
     HEAP8[H_BASE + 1088 | 0] = 1;
     i47 = i49;
    }
    HEAP32[i12 >> 2] = i1;
    __ZNK3WTF7HashMapIPKN7WebCore13GraphicsLayerENS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE3getERKS4_(i11, i47, i12);
    i49 = HEAP32[i32 >> 2] | 0;
    if ((i49 | 0) != 0) {
     HEAP32[i32 >> 2] = 0;
    }
    i48 = HEAP32[i6 >> 2] | 0;
    if ((i48 | 0) != 0) {
     HEAP32[i6 >> 2] = 0;
     HEAP32[i45 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i48);
    }
    if (i46 >>> 0 >= i49 >>> 0) {
     i27 = 157;
     break;
    }
    if (HEAP8[H_BASE + 1088 | 0] | 0) {
     i50 = HEAP32[H_BASE + 1096 >> 2] | 0;
    } else {
     i49 = __ZN3WTF10fastMallocEj(20) | 0;
     i48 = i49;
     _memset(i49 | 0, 0, 20) | 0;
     HEAP32[H_BASE + 1096 >> 2] = i48;
     HEAP8[H_BASE + 1088 | 0] = 1;
     i50 = i48;
    }
    HEAP32[i14 >> 2] = i1;
    __ZNK3WTF7HashMapIPKN7WebCore13GraphicsLayerENS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE3getERKS4_(i13, i50, i14);
    i48 = HEAP32[i28 >> 2] | 0;
    if (i48 >>> 0 <= i46 >>> 0) {
     i27 = 111;
     break;
    }
    i49 = HEAP32[i31 >> 2] | 0;
    if (+HEAPF32[i49 + (i46 << 4) + 8 >> 2] > +0) {
     i51 = +HEAPF32[i49 + (i46 << 4) + 12 >> 2] <= +0;
    } else {
     i51 = 1;
    }
    if ((i48 | 0) != 0) {
     HEAP32[i28 >> 2] = 0;
    }
    if ((i49 | 0) != 0) {
     HEAP32[i31 >> 2] = 0;
     HEAP32[i44 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i49);
    }
    if (!i51) {
     __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i25);
     __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 280 | 0) | 0;
     if (HEAP8[H_BASE + 1088 | 0] | 0) {
      i52 = HEAP32[H_BASE + 1096 >> 2] | 0;
     } else {
      i49 = __ZN3WTF10fastMallocEj(20) | 0;
      i48 = i49;
      _memset(i49 | 0, 0, 20) | 0;
      HEAP32[H_BASE + 1096 >> 2] = i48;
      HEAP8[H_BASE + 1088 | 0] = 1;
      i52 = i48;
     }
     HEAP32[i16 >> 2] = i1;
     __ZNK3WTF7HashMapIPKN7WebCore13GraphicsLayerENS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE3getERKS4_(i15, i52, i16);
     i48 = HEAP32[i33 >> 2] | 0;
     if (i48 >>> 0 <= i46 >>> 0) {
      i27 = 123;
      break;
     }
     i49 = HEAP32[i8 >> 2] | 0;
     __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i2, +HEAPF32[i49 + (i46 << 4) >> 2]) | 0, H_BASE + 384 | 0) | 0;
     if ((i48 | 0) != 0) {
      HEAP32[i33 >> 2] = 0;
     }
     if ((i49 | 0) != 0) {
      HEAP32[i8 >> 2] = 0;
      HEAP32[i43 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i49);
     }
     if (HEAP8[H_BASE + 1088 | 0] | 0) {
      i53 = HEAP32[H_BASE + 1096 >> 2] | 0;
     } else {
      i49 = __ZN3WTF10fastMallocEj(20) | 0;
      i48 = i49;
      _memset(i49 | 0, 0, 20) | 0;
      HEAP32[H_BASE + 1096 >> 2] = i48;
      HEAP8[H_BASE + 1088 | 0] = 1;
      i53 = i48;
     }
     HEAP32[i18 >> 2] = i1;
     __ZNK3WTF7HashMapIPKN7WebCore13GraphicsLayerENS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE3getERKS4_(i17, i53, i18);
     i48 = HEAP32[i36 >> 2] | 0;
     if (i48 >>> 0 <= i46 >>> 0) {
      i27 = 132;
      break;
     }
     i49 = HEAP32[i29 >> 2] | 0;
     __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i2, +HEAPF32[i49 + (i46 << 4) + 4 >> 2]) | 0, H_BASE + 384 | 0) | 0;
     if ((i48 | 0) != 0) {
      HEAP32[i36 >> 2] = 0;
     }
     if ((i49 | 0) != 0) {
      HEAP32[i29 >> 2] = 0;
      HEAP32[i42 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i49);
     }
     if (HEAP8[H_BASE + 1088 | 0] | 0) {
      i54 = HEAP32[H_BASE + 1096 >> 2] | 0;
     } else {
      i49 = __ZN3WTF10fastMallocEj(20) | 0;
      i48 = i49;
      _memset(i49 | 0, 0, 20) | 0;
      HEAP32[H_BASE + 1096 >> 2] = i48;
      HEAP8[H_BASE + 1088 | 0] = 1;
      i54 = i48;
     }
     HEAP32[i20 >> 2] = i1;
     __ZNK3WTF7HashMapIPKN7WebCore13GraphicsLayerENS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE3getERKS4_(i19, i54, i20);
     i48 = HEAP32[i7 >> 2] | 0;
     if (i48 >>> 0 <= i46 >>> 0) {
      i27 = 141;
      break;
     }
     i49 = HEAP32[i26 >> 2] | 0;
     __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i2, +HEAPF32[i49 + (i46 << 4) + 8 >> 2]) | 0, H_BASE + 384 | 0) | 0;
     if ((i48 | 0) != 0) {
      HEAP32[i7 >> 2] = 0;
     }
     if ((i49 | 0) != 0) {
      HEAP32[i26 >> 2] = 0;
      HEAP32[i41 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i49);
     }
     if (HEAP8[H_BASE + 1088 | 0] | 0) {
      i55 = HEAP32[H_BASE + 1096 >> 2] | 0;
     } else {
      i49 = __ZN3WTF10fastMallocEj(20) | 0;
      i48 = i49;
      _memset(i49 | 0, 0, 20) | 0;
      HEAP32[H_BASE + 1096 >> 2] = i48;
      HEAP8[H_BASE + 1088 | 0] = 1;
      i55 = i48;
     }
     HEAP32[i22 >> 2] = i1;
     __ZNK3WTF7HashMapIPKN7WebCore13GraphicsLayerENS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE3getERKS4_(i21, i55, i22);
     i48 = HEAP32[i38 >> 2] | 0;
     if (i48 >>> 0 <= i46 >>> 0) {
      i27 = 150;
      break;
     }
     i49 = HEAP32[i39 >> 2] | 0;
     __ZN7WebCore10TextStreamlsEf(i2, +HEAPF32[i49 + (i46 << 4) + 12 >> 2]) | 0;
     if ((i48 | 0) != 0) {
      HEAP32[i38 >> 2] = 0;
     }
     if ((i49 | 0) != 0) {
      HEAP32[i39 >> 2] = 0;
      HEAP32[i40 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i49);
     }
     __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 40 | 0) | 0;
    }
    i46 = i46 + 1 | 0;
   }
   if ((i27 | 0) == 111) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 123) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 132) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 141) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 150) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 157) {
    __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i30);
    __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 40 | 0) | 0;
    break;
   }
  }
 } while (0);
 do {
  if ((i4 & 16 | 0) != 0) {
   i27 = i1 + 344 | 0;
   if ((HEAP32[i27 >> 2] | 0) == 0) {
    break;
   }
   i22 = i3 + 1 | 0;
   __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i22);
   __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 256 | 0) | 0;
   i55 = HEAP32[i27 >> 2] | 0;
   if ((i55 & 1 | 0) == 0) {
    i56 = i55;
   } else {
    __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 2 | 0);
    __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 224 | 0) | 0;
    i56 = HEAP32[i27 >> 2] | 0;
   }
   if ((i56 & 2 | 0) == 0) {
    i57 = i56;
   } else {
    __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 2 | 0);
    __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 192 | 0) | 0;
    i57 = HEAP32[i27 >> 2] | 0;
   }
   if ((i57 & 4 | 0) == 0) {
    i58 = i57;
   } else {
    __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 2 | 0);
    __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 168 | 0) | 0;
    i58 = HEAP32[i27 >> 2] | 0;
   }
   if ((i58 & 8 | 0) == 0) {
    i59 = i58;
   } else {
    __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 2 | 0);
    __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 120 | 0) | 0;
    i59 = HEAP32[i27 >> 2] | 0;
   }
   if ((i59 & 16 | 0) != 0) {
    __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3 + 2 | 0);
    __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 80 | 0) | 0;
   }
   __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i22);
   __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 40 | 0) | 0;
  }
 } while (0);
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 316 >> 2] & 3](i1, i2, i3, i4);
 i59 = i1 + 360 | 0;
 i58 = HEAP32[i59 >> 2] | 0;
 if ((i58 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i23 >> 2] = 0;
 i57 = i23 + 4 | 0;
 HEAP32[i57 >> 2] = 0;
 i56 = i23 + 8 | 0;
 HEAP32[i56 >> 2] = 0;
 HEAP8[i23 + 12 | 0] = 1;
 HEAP32[i23 + 16 >> 2] = 0;
 HEAP32[i23 + 20 >> 2] = 0;
 i22 = i1 + 352 | 0;
 i27 = i1 + 4 | 0;
 i1 = i3 + 2 | 0;
 i55 = i58;
 i58 = 0;
 while (1) {
  i21 = HEAP32[(HEAP32[i22 >> 2] | 0) + (i58 << 2) >> 2] | 0;
  i20 = HEAP32[i27 >> 2] | 0;
  do {
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i20 >> 2] | 0) + 60 >> 2] & 15](i20, i21) | 0) {
    i54 = i21 + 360 | 0;
    i19 = HEAP32[i54 >> 2] | 0;
    i18 = i55 - 1 + i19 | 0;
    if ((i19 | 0) == 0) {
     i60 = i18;
     break;
    }
    i19 = i21 + 352 | 0;
    i53 = 0;
    while (1) {
     __ZNK7WebCore13GraphicsLayer9dumpLayerERNS_10TextStreamEij(HEAP32[(HEAP32[i19 >> 2] | 0) + (i53 << 2) >> 2] | 0, i23, i1, i4);
     i17 = i53 + 1 | 0;
     if (i17 >>> 0 < (HEAP32[i54 >> 2] | 0) >>> 0) {
      i53 = i17;
     } else {
      i60 = i18;
      break;
     }
    }
   } else {
    __ZNK7WebCore13GraphicsLayer9dumpLayerERNS_10TextStreamEij(i21, i23, i1, i4);
    i60 = i55;
   }
  } while (0);
  i21 = i58 + 1 | 0;
  if (i21 >>> 0 < (HEAP32[i59 >> 2] | 0) >>> 0) {
   i55 = i60;
   i58 = i21;
  } else {
   break;
  }
 }
 i58 = i3 + 1 | 0;
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i23, i58);
 __ZN7WebCore10TextStreamlsEPKc(i23, H_BASE + 40 | 0) | 0;
 do {
  if ((i60 | 0) != 0) {
   __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i58);
   __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEj(__ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 64 | 0) | 0, i60) | 0, H_BASE + 48 | 0) | 0;
   __ZN7WebCore10TextStream7releaseEv(i24, i23);
   __ZN7WebCore10TextStreamlsERKN3WTF6StringE(i2, i24) | 0;
   i3 = HEAP32[i24 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i55 = i3 | 0;
   i59 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
   if ((i59 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i55 >> 2] = i59;
    break;
   }
  }
 } while (0);
 i24 = HEAP32[i56 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i56 = i24 | 0;
   i2 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i56 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i24 = HEAP32[i57 >> 2] | 0;
 if ((i24 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i57 = i24 | 0;
 i2 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i24);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i57 >> 2] = i2;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore13GraphicsLayer14addRepaintRectERKNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i11 = HEAP32[i1 + 4 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 56 >> 2] & 31](i11) | 0)) {
  STACKTOP = i3;
  return;
 }
 i11 = i4 | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i11 + 4 >> 2] = 0;
 i11 = i4 + 8 | 0;
 i12 = i1 + 40 | 0;
 i13 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i11 + 4 >> 2] = i13;
 __ZN7WebCore9FloatRect9intersectERKS0_(i5, i2);
 if (HEAP8[H_BASE + 1088 | 0] | 0) {
  i14 = HEAP32[H_BASE + 1096 >> 2] | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(20) | 0;
  i13 = i2;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1096 >> 2] = i13;
  HEAP8[H_BASE + 1088 | 0] = 1;
  i14 = i13;
 }
 HEAP32[i7 >> 2] = i1;
 __ZN3WTF7HashMapIPKN7WebCore13GraphicsLayerENS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE4findERKS4_(i6, i14, i7);
 if (HEAP8[H_BASE + 1088 | 0] | 0) {
  i15 = HEAP32[H_BASE + 1096 >> 2] | 0;
 } else {
  i7 = __ZN3WTF10fastMallocEj(20) | 0;
  i14 = i7;
  _memset(i7 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1096 >> 2] = i14;
  HEAP8[H_BASE + 1088 | 0] = 1;
  i15 = i14;
 }
 i14 = HEAP32[i6 >> 2] | 0;
 if ((i14 | 0) != ((HEAP32[i15 >> 2] | 0) + (HEAP32[i15 + 4 >> 2] << 4) | 0)) {
  i15 = i14 + 4 | 0;
  i6 = i14 + 12 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  if ((i7 | 0) != (HEAP32[i14 + 8 >> 2] | 0)) {
   i14 = (HEAP32[i15 >> 2] | 0) + (i7 << 4) | 0;
   i13 = i4;
   HEAP32[i14 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i14 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
   HEAP32[i14 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
   HEAP32[i14 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   STACKTOP = i3;
   return;
  }
  i13 = i7 + 1 | 0;
  i14 = i15 | 0;
  i2 = HEAP32[i14 >> 2] | 0;
  do {
   if (i2 >>> 0 > i5 >>> 0) {
    i16 = 22;
   } else {
    if ((i2 + (i7 << 4) | 0) >>> 0 <= i5 >>> 0) {
     i16 = 22;
     break;
    }
    __ZN3WTF6VectorIN7WebCore9FloatRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i15, i13);
    i11 = HEAP32[i14 >> 2] | 0;
    i17 = i11 + (i4 - i2 >> 4 << 4) | 0;
    i18 = i11;
   }
  } while (0);
  if ((i16 | 0) == 22) {
   __ZN3WTF6VectorIN7WebCore9FloatRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i15, i13);
   i17 = i5;
   i18 = HEAP32[i14 >> 2] | 0;
  }
  i14 = i18 + (HEAP32[i6 >> 2] << 4) | 0;
  i18 = i17;
  HEAP32[i14 >> 2] = HEAP32[i18 >> 2];
  HEAP32[i14 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
  HEAP32[i14 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
  HEAP32[i14 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  STACKTOP = i3;
  return;
 }
 i6 = i8 | 0;
 HEAP32[i6 >> 2] = 0;
 i18 = i8 + 4 | 0;
 HEAP32[i18 >> 2] = 0;
 i14 = i8 + 8 | 0;
 HEAP32[i14 >> 2] = 0;
 __ZN3WTF6VectorIN7WebCore9FloatRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, 1);
 i17 = HEAP32[i14 >> 2] | 0;
 i5 = (HEAP32[i6 >> 2] | 0) + (i17 << 4) | 0;
 i13 = i4;
 HEAP32[i5 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
 i13 = HEAP8[H_BASE + 1088 | 0] | 0;
 HEAP32[i14 >> 2] = i17 + 1;
 if (i13) {
  i19 = HEAP32[H_BASE + 1096 >> 2] | 0;
 } else {
  i13 = __ZN3WTF10fastMallocEj(20) | 0;
  i17 = i13;
  _memset(i13 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1096 >> 2] = i17;
  HEAP8[H_BASE + 1088 | 0] = 1;
  i19 = i17;
 }
 HEAP32[i9 >> 2] = i1;
 __ZN3WTF9HashTableIPKN7WebCore13GraphicsLayerENS_12KeyValuePairIS4_NS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_7HashMapIS4_S9_SE_NS_10HashTraitsIS4_EENSG_IS9_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_RS9_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SA_SC_SE_SK_SH_EEEEOT0_OT1_(i10, i19 | 0, i9, i8);
 if ((HEAP8[i10 + 8 | 0] & 1) == 0) {
  __ZN3WTF6VectorIN7WebCore9FloatRectELj0ENS_15CrashOnOverflowEEaSERKS4_((HEAP32[i10 >> 2] | 0) + 4 | 0, i8) | 0;
 }
 if ((HEAP32[i14 >> 2] | 0) != 0) {
  HEAP32[i14 >> 2] = 0;
 }
 i14 = HEAP32[i6 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i18 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i14);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore13GraphicsLayerENS_12KeyValuePairIS4_NS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_7HashMapIS4_S9_SE_NS_10HashTraitsIS4_EENSG_IS9_EEE18KeyValuePairTraitsESH_E6rehashEiPSA_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 i8 = __ZN3WTF10fastMallocEj(i2 << 4) | 0;
 if ((i2 | 0) > 0) {
  i9 = 0;
  while (1) {
   _memset(i8 + (i9 << 4) | 0, 0, 16) | 0;
   i9 = i9 + 1 | 0;
   if ((i9 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i6 >> 2] = i8;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i10 = 0;
  i11 = i7;
  __ZN3WTF8fastFreeEPv(i11);
  return i10 | 0;
 } else {
  i12 = 0;
  i13 = 0;
 }
 while (1) {
  i8 = i7 + (i12 << 4) | 0;
  i2 = i8 | 0;
  i9 = HEAP32[i2 >> 2] | 0;
  i14 = i9;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i13;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 4) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L12 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 8;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i9 | 0)) {
       i30 = i28;
       break L12;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 4) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 8;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 8) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i30 + 12 | 0;
   if ((HEAP32[i16 >> 2] | 0) != 0) {
    HEAP32[i16 >> 2] = 0;
   }
   i17 = i30 + 4 | 0;
   i9 = HEAP32[i17 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i36 = i30 + 8 | 0;
   } else {
    HEAP32[i17 >> 2] = 0;
    i20 = i30 + 8 | 0;
    HEAP32[i20 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i9);
    i36 = i20;
   }
   HEAP32[i30 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i17 >> 2] = 0;
   HEAP32[i36 >> 2] = 0;
   HEAP32[i16 >> 2] = 0;
   i20 = i7 + (i12 << 4) + 12 | 0;
   HEAP32[i16 >> 2] = HEAP32[i20 >> 2];
   HEAP32[i20 >> 2] = 0;
   i20 = i7 + (i12 << 4) + 4 | 0;
   i16 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i20 >> 2];
   HEAP32[i20 >> 2] = i16;
   i16 = i7 + (i12 << 4) + 8 | 0;
   i20 = HEAP32[i36 >> 2] | 0;
   HEAP32[i36 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i16 >> 2] = i20;
   i15 = (i8 | 0) == (i3 | 0) ? i30 : i13;
  }
  i20 = i12 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i12 = i20;
   i13 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i37 = 0;
 } else {
  i10 = i15;
  i11 = i7;
  __ZN3WTF8fastFreeEPv(i11);
  return i10 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 << 4) >> 2] | 0) != -1) {
    i1 = i7 + (i37 << 4) + 12 | 0;
    if ((HEAP32[i1 >> 2] | 0) != 0) {
     HEAP32[i1 >> 2] = 0;
    }
    i1 = i7 + (i37 << 4) + 4 | 0;
    i13 = HEAP32[i1 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break;
    }
    HEAP32[i1 >> 2] = 0;
    HEAP32[i7 + (i37 << 4) + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i13);
   }
  } while (0);
  i8 = i37 + 1 | 0;
  if ((i8 | 0) < (i5 | 0)) {
   i37 = i8;
  } else {
   i10 = i15;
   break;
  }
 }
 i11 = i7;
 __ZN3WTF8fastFreeEPv(i11);
 return i10 | 0;
}
function __ZN3WTF9HashTableIPKN7WebCore13GraphicsLayerENS_12KeyValuePairIS4_NS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_7HashMapIS4_S9_SE_NS_10HashTraitsIS4_EENSG_IS9_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_RS9_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SA_SC_SE_SK_SH_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableIPKN7WebCore13GraphicsLayerENS_12KeyValuePairIS4_NS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_7HashMapIS4_S9_SE_NS_10HashTraitsIS4_EENSG_IS9_EEE18KeyValuePairTraitsESH_E6rehashEiPSA_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = i7 & i6;
 i11 = i10 + (i9 << 4) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 11;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i14 = 8;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i10 + (i23 << 4) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 10;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 4) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i14 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 11;
     break;
    }
    _memset(i21 | 0, 0, 16) | 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 11) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 __ZN3WTF6VectorIN7WebCore9FloatRectELj0ENS_15CrashOnOverflowEEaSERKS4_(i26 + 4 | 0, i4) | 0;
 i4 = i2 + 12 | 0;
 i27 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i27;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i28 >> 2] | 0) + i27 << 1 | 0) < (i8 | 0)) {
  i29 = i26;
  i30 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i31 = 8;
  } else {
   i28 = i8 << 1;
   i31 = (i27 * 6 & -1 | 0) < (i28 | 0) ? i8 : i28;
  }
  i28 = __ZN3WTF9HashTableIPKN7WebCore13GraphicsLayerENS_12KeyValuePairIS4_NS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_7HashMapIS4_S9_SE_NS_10HashTraitsIS4_EENSG_IS9_EEE18KeyValuePairTraitsESH_E6rehashEiPSA_(i2, i31, i26) | 0;
  i29 = i28;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 4) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 752 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_vii + 74;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_vii + 76;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_vif + 4;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_iiiiiid + 2;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_viid + 2;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_vid + 2;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_viif + 2;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_vii + 78;
 HEAP32[H_BASE + 984 >> 2] = F_BASE_fi + 2;
 HEAP32[H_BASE + 988 >> 2] = F_BASE_vif + 8;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_vif + 2;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_fi + 4;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_di + 2;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 1052 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 1056 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 1060 >> 2] = F_BASE_vif + 6;
 HEAP32[H_BASE + 1064 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 1068 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 1072 >> 2] = F_BASE_viii + 6;
}
function __ZN7WebCore13GraphicsLayer27validateTransformOperationsERKNS_17KeyframeValueListERb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, d18 = +0, d19 = +0, d20 = +0, d21 = +0, d22 = +0, d23 = +0, i24 = 0, i25 = 0, d26 = +0, d27 = +0;
 HEAP8[i2] = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (i4 >>> 0 < 2 >>> 0) {
  i5 = -1;
  return i5 | 0;
 }
 i6 = i1 | 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= i4 >>> 0) {
   i5 = -1;
   i7 = 30;
   break;
  }
  if ((HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + (i1 << 2) >> 2] | 0) + 28 >> 2] | 0) == 0) {
   i1 = i1 + 1 | 0;
  } else {
   break;
  }
 }
 if ((i7 | 0) == 30) {
  return i5 | 0;
 }
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = HEAP32[i8 + (i1 << 2) >> 2] | 0;
 i10 = i9 + 20 | 0;
 i11 = i1 + 1 | 0;
 L10 : do {
  if (i11 >>> 0 < i4 >>> 0) {
   i12 = i11;
   i13 = i8;
   i14 = i4;
   while (1) {
    i15 = HEAP32[i13 + (i12 << 2) >> 2] | 0;
    if ((HEAP32[i15 + 28 >> 2] | 0) == 0) {
     i16 = i14;
    } else {
     if (!(__ZNK7WebCore19TransformOperations15operationsMatchERKS0_(i10, i15 + 20 | 0) | 0)) {
      i5 = -1;
      break;
     }
     i16 = HEAP32[i3 >> 2] | 0;
    }
    i15 = i12 + 1 | 0;
    if (i15 >>> 0 >= i16 >>> 0) {
     break L10;
    }
    i12 = i15;
    i13 = HEAP32[i6 >> 2] | 0;
    i14 = i16;
   }
   return i5 | 0;
  }
 } while (0);
 i16 = i9 + 28 | 0;
 L20 : do {
  if ((HEAP32[i16 >> 2] | 0) == 0) {
   d17 = +-1;
  } else {
   i9 = i10 | 0;
   d18 = +-1;
   i4 = 0;
   L22 : while (1) {
    i8 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i4 << 2) >> 2] | 0;
    i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 24 >> 2] & 31](i8) | 0;
    i8 = HEAP32[i16 >> 2] | 0;
    do {
     if ((i14 - 15 | 0) >>> 0 < 2 >>> 0 | (i14 | 0) == 6 | (i14 | 0) == 17) {
      if (i8 >>> 0 <= i4 >>> 0) {
       i7 = 15;
       break L22;
      }
      d19 = +HEAPF64[(HEAP32[(HEAP32[i9 >> 2] | 0) + (i4 << 2) >> 2] | 0) + 32 >> 3];
      if (d18 < +0) {
       d20 = +Math_abs(+d19);
      } else {
       d20 = d18;
      }
      i13 = HEAP32[i3 >> 2] | 0;
      if (i11 >>> 0 >= i13 >>> 0) {
       d21 = d20;
       break;
      }
      i12 = HEAP32[i6 >> 2] | 0;
      d22 = d20;
      d23 = d19;
      i15 = i11;
      while (1) {
       i24 = HEAP32[i12 + (i15 << 2) >> 2] | 0;
       i25 = HEAP32[i24 + 28 >> 2] | 0;
       if ((i25 | 0) == 0) {
        d26 = +0;
       } else {
        if (i25 >>> 0 <= i4 >>> 0) {
         i7 = 22;
         break L22;
        }
        d26 = +HEAPF64[(HEAP32[(HEAP32[i24 + 20 >> 2] | 0) + (i4 << 2) >> 2] | 0) + 32 >> 3];
       }
       d19 = +Math_abs(+(d26 - d23));
       d27 = d19 > d22 ? d19 : d22;
       i24 = i15 + 1 | 0;
       if (i24 >>> 0 < i13 >>> 0) {
        d22 = d27;
        d23 = d26;
        i15 = i24;
       } else {
        d21 = d27;
        break;
       }
      }
     } else {
      d21 = d18;
     }
    } while (0);
    i14 = i4 + 1 | 0;
    if (i14 >>> 0 < i8 >>> 0) {
     d18 = d21;
     i4 = i14;
    } else {
     d17 = d21;
     break L20;
    }
   }
   if ((i7 | 0) == 22) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i7 | 0) == 15) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
  }
 } while (0);
 HEAP8[i2] = d17 >= +180 | 0;
 i5 = i1;
 return i5 | 0;
}
function __ZN3WTF6VectorIN7WebCore9FloatRectELj0ENS_15CrashOnOverflowEEaSERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i4 >>> 0 > i6 >>> 0) {
   HEAP32[i3 >> 2] = i6;
  } else {
   i7 = i1 + 4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if (i6 >>> 0 <= i8 >>> 0) {
    break;
   }
   do {
    if ((i8 | 0) == 0) {
     i9 = 0;
    } else {
     if ((i4 | 0) != 0) {
      HEAP32[i3 >> 2] = 0;
     }
     i10 = i1 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     if ((i11 | 0) == 0) {
      i9 = i8;
      break;
     }
     HEAP32[i10 >> 2] = 0;
     HEAP32[i7 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i11);
     i9 = HEAP32[i7 >> 2] | 0;
    }
   } while (0);
   i8 = HEAP32[i5 >> 2] | 0;
   if (i9 >>> 0 >= i8 >>> 0) {
    break;
   }
   i11 = i1 | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = i10 + (i12 << 4) | 0;
   if (i8 >>> 0 > 268435455 >>> 0) {
    _WTFCrash();
    return 0;
   }
   i14 = __ZN3WTF18fastMallocGoodSizeEj(i8 << 4) | 0;
   HEAP32[i7 >> 2] = i14 >>> 4;
   i8 = __ZN3WTF10fastMallocEj(i14) | 0;
   HEAP32[i11 >> 2] = i8;
   if ((i12 | 0) != 0) {
    i12 = i10;
    i14 = i8;
    while (1) {
     i8 = i14;
     i15 = i12;
     HEAP32[i8 >> 2] = HEAP32[i15 >> 2];
     HEAP32[i8 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
     HEAP32[i8 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
     HEAP32[i8 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
     i15 = i12 + 16 | 0;
     if ((i15 | 0) == (i13 | 0)) {
      break;
     } else {
      i12 = i15;
      i14 = i14 + 16 | 0;
     }
    }
   }
   if ((i10 | 0) == 0) {
    break;
   }
   if ((HEAP32[i11 >> 2] | 0) == (i10 | 0)) {
    HEAP32[i11 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i10);
  }
 } while (0);
 i9 = i2 | 0;
 i2 = i1 | 0;
 _memmove(HEAP32[i2 >> 2] | 0, HEAP32[i9 >> 2] | 0, HEAP32[i3 >> 2] << 4 | 0) | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i14 = i4 + (i6 << 4) | 0;
 if ((i9 | 0) == (i6 | 0)) {
  i16 = i9;
 } else {
  i6 = i4 + (i9 << 4) | 0;
  i4 = (HEAP32[i2 >> 2] | 0) + (i9 << 4) | 0;
  while (1) {
   i9 = i4;
   i2 = i6;
   HEAP32[i9 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i9 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
   HEAP32[i9 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
   HEAP32[i9 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
   i2 = i6 + 16 | 0;
   if ((i2 | 0) == (i14 | 0)) {
    break;
   } else {
    i6 = i2;
    i4 = i4 + 16 | 0;
   }
  }
  i16 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i16;
 return i1 | 0;
}
function __ZN7WebCore13GraphicsLayer13addChildAboveEPS0_S1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i2;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 31](i2);
 i6 = i1 + 352 | 0;
 i7 = i1 + 360 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i6 | 0;
 i10 = 0;
 while (1) {
  if (i10 >>> 0 >= i8 >>> 0) {
   break;
  }
  i11 = HEAP32[i9 >> 2] | 0;
  i12 = i10 + 1 | 0;
  if ((HEAP32[i11 + (i10 << 2) >> 2] | 0) == (i3 | 0)) {
   i13 = 4;
   break;
  } else {
   i10 = i12;
  }
 }
 if ((i13 | 0) == 4) {
  L6 : do {
   if ((i8 | 0) == (HEAP32[i1 + 356 >> 2] | 0)) {
    i3 = i8 + 1 | 0;
    do {
     if (i11 >>> 0 <= i5 >>> 0) {
      if ((i11 + (i8 << 2) | 0) >>> 0 <= i5 >>> 0) {
       break;
      }
      __ZN3WTF6VectorIPN7WebCore13GraphicsLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i3);
      i14 = HEAP32[i9 >> 2] | 0;
      i15 = i14 + (i5 - i11 >> 2 << 2) | 0;
      i16 = i14;
      break L6;
     }
    } while (0);
    __ZN3WTF6VectorIPN7WebCore13GraphicsLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i3);
    i15 = i5;
    i16 = HEAP32[i9 >> 2] | 0;
   } else {
    i15 = i5;
    i16 = i11;
   }
  } while (0);
  i11 = i16 + (i12 << 2) | 0;
  _memmove(i16 + (i10 + 2 << 2) | 0, i11 | 0, (HEAP32[i7 >> 2] | 0) - i12 << 2 | 0) | 0;
  HEAP32[i11 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  HEAP32[(HEAP32[i5 >> 2] | 0) + 364 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 HEAP32[i2 + 364 >> 2] = i1;
 i15 = HEAP32[i7 >> 2] | 0;
 if ((i15 | 0) != (HEAP32[i1 + 356 >> 2] | 0)) {
  HEAP32[(HEAP32[i9 >> 2] | 0) + (i15 << 2) >> 2] = i2;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i2 = i15 + 1 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 do {
  if (i1 >>> 0 > i5 >>> 0) {
   i13 = 14;
  } else {
   if ((i1 + (i15 << 2) | 0) >>> 0 <= i5 >>> 0) {
    i13 = 14;
    break;
   }
   __ZN3WTF6VectorIPN7WebCore13GraphicsLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i2);
   i11 = HEAP32[i9 >> 2] | 0;
   i17 = i11 + (i5 - i1 >> 2 << 2) | 0;
   i18 = i11;
  }
 } while (0);
 if ((i13 | 0) == 14) {
  __ZN3WTF6VectorIPN7WebCore13GraphicsLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i2);
  i17 = i5;
  i18 = HEAP32[i9 >> 2] | 0;
 }
 HEAP32[i18 + (HEAP32[i7 >> 2] << 2) >> 2] = HEAP32[i17 >> 2];
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore13GraphicsLayer13addChildBelowEPS0_S1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i2;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 31](i2);
 i6 = i1 + 352 | 0;
 i7 = i1 + 360 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i6 | 0;
 i10 = 0;
 while (1) {
  if (i10 >>> 0 >= i8 >>> 0) {
   break;
  }
  i11 = HEAP32[i9 >> 2] | 0;
  i12 = i10 + 1 | 0;
  if ((HEAP32[i11 + (i10 << 2) >> 2] | 0) == (i3 | 0)) {
   i13 = 4;
   break;
  } else {
   i10 = i12;
  }
 }
 if ((i13 | 0) == 4) {
  L6 : do {
   if ((i8 | 0) == (HEAP32[i1 + 356 >> 2] | 0)) {
    i3 = i8 + 1 | 0;
    do {
     if (i11 >>> 0 <= i5 >>> 0) {
      if ((i11 + (i8 << 2) | 0) >>> 0 <= i5 >>> 0) {
       break;
      }
      __ZN3WTF6VectorIPN7WebCore13GraphicsLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i3);
      i14 = HEAP32[i9 >> 2] | 0;
      i15 = i14 + (i5 - i11 >> 2 << 2) | 0;
      i16 = i14;
      break L6;
     }
    } while (0);
    __ZN3WTF6VectorIPN7WebCore13GraphicsLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i3);
    i15 = i5;
    i16 = HEAP32[i9 >> 2] | 0;
   } else {
    i15 = i5;
    i16 = i11;
   }
  } while (0);
  i11 = i16 + (i10 << 2) | 0;
  _memmove(i16 + (i12 << 2) | 0, i11 | 0, (HEAP32[i7 >> 2] | 0) - i10 << 2 | 0) | 0;
  HEAP32[i11 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  HEAP32[(HEAP32[i5 >> 2] | 0) + 364 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 HEAP32[i2 + 364 >> 2] = i1;
 i15 = HEAP32[i7 >> 2] | 0;
 if ((i15 | 0) != (HEAP32[i1 + 356 >> 2] | 0)) {
  HEAP32[(HEAP32[i9 >> 2] | 0) + (i15 << 2) >> 2] = i2;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i2 = i15 + 1 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 do {
  if (i1 >>> 0 > i5 >>> 0) {
   i13 = 14;
  } else {
   if ((i1 + (i15 << 2) | 0) >>> 0 <= i5 >>> 0) {
    i13 = 14;
    break;
   }
   __ZN3WTF6VectorIPN7WebCore13GraphicsLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i2);
   i11 = HEAP32[i9 >> 2] | 0;
   i17 = i11 + (i5 - i1 >> 2 << 2) | 0;
   i18 = i11;
  }
 } while (0);
 if ((i13 | 0) == 14) {
  __ZN3WTF6VectorIPN7WebCore13GraphicsLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i2);
  i17 = i5;
  i18 = HEAP32[i9 >> 2] | 0;
 }
 HEAP32[i18 + (HEAP32[i7 >> 2] << 2) >> 2] = HEAP32[i17 >> 2];
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZNK3WTF7HashMapIPKN7WebCore13GraphicsLayerENS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE3getERKS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = i2;
 i6 = i3 + ~(i3 << 15) | 0;
 i3 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i3 >>> 6 ^ i3;
 i3 = i6 + ~(i6 << 11) | 0;
 i6 = i3 >>> 16 ^ i3;
 L1 : do {
  if ((i5 | 0) != 0) {
   i3 = i6 & i4;
   i7 = i5 + (i3 << 4) | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == (i2 | 0)) {
    i9 = i7;
   } else {
    i7 = (i6 >>> 23) + ~i6 | 0;
    i10 = i7 << 12 ^ i7;
    i7 = i10 >>> 7 ^ i10;
    i10 = i7 << 2 ^ i7;
    i7 = i10 >>> 20 ^ i10 | 1;
    i10 = 0;
    i11 = i3;
    i3 = i8;
    while (1) {
     if ((i3 | 0) == 0) {
      break L1;
     }
     i8 = (i10 | 0) == 0 ? i7 : i10;
     i12 = i8 + i11 & i4;
     i13 = i5 + (i12 << 4) | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     if ((i14 | 0) == (i2 | 0)) {
      i9 = i13;
      break;
     } else {
      i10 = i8;
      i11 = i12;
      i3 = i14;
     }
    }
   }
   if ((i9 | 0) == 0) {
    break;
   }
   i3 = HEAP32[i9 + 8 >> 2] | 0;
   i11 = i9 + 12 | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   i7 = i1 | 0;
   HEAP32[i7 >> 2] = 0;
   i14 = i1 + 4 | 0;
   HEAP32[i14 >> 2] = 0;
   HEAP32[i1 + 8 >> 2] = i10;
   if ((i3 | 0) == 0) {
    return;
   }
   if (i3 >>> 0 > 268435455 >>> 0) {
    _WTFCrash();
   }
   i10 = __ZN3WTF18fastMallocGoodSizeEj(i3 << 4) | 0;
   HEAP32[i14 >> 2] = i10 >>> 4;
   i14 = __ZN3WTF10fastMallocEj(i10) | 0;
   i10 = i14;
   HEAP32[i7 >> 2] = i10;
   if ((i14 | 0) == 0) {
    return;
   }
   i14 = HEAP32[i9 + 4 >> 2] | 0;
   i7 = HEAP32[i11 >> 2] | 0;
   i11 = i14 + (i7 << 4) | 0;
   if ((i7 | 0) == 0) {
    return;
   } else {
    i15 = i14;
    i16 = i10;
   }
   while (1) {
    i10 = i16;
    i14 = i15;
    HEAP32[i10 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i10 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
    HEAP32[i10 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
    HEAP32[i10 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
    i14 = i15 + 16 | 0;
    if ((i14 | 0) == (i11 | 0)) {
     break;
    } else {
     i15 = i14;
     i16 = i16 + 16 | 0;
    }
   }
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 return;
}
function __ZN7WebCore17KeyframeValueList6insertEN3WTF10PassOwnPtrIKNS_14AnimationValueEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, d11 = +0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = i1 | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = i2 | 0;
 i2 = 0;
 while (1) {
  if (i2 >>> 0 >= i5 >>> 0) {
   i8 = 11;
   break;
  }
  i9 = HEAP32[i6 >> 2] | 0;
  d10 = +HEAPF64[(HEAP32[i9 + (i2 << 2) >> 2] | 0) + 8 >> 3];
  d11 = +HEAPF64[(HEAP32[i7 >> 2] | 0) + 8 >> 3];
  if (d10 == d11) {
   i8 = 4;
   break;
  }
  i12 = i2 + 1 | 0;
  if (d10 > d11) {
   i8 = 8;
   break;
  } else {
   i2 = i12;
  }
 }
 if ((i8 | 0) == 4) {
  i13 = i2 + 1 | 0;
  if ((i5 | 0) == (HEAP32[i1 + 4 >> 2] | 0)) {
   __ZN3WTF6VectorINS_6OwnPtrIKN7WebCore14AnimationValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i5 + 1 | 0);
   i14 = HEAP32[i4 >> 2] | 0;
   i15 = HEAP32[i6 >> 2] | 0;
  } else {
   i14 = i5;
   i15 = i9;
  }
  i16 = i15 + (i13 << 2) | 0;
  _memmove(i15 + (i2 + 2 << 2) | 0, i16 | 0, i14 - i13 << 2 | 0) | 0;
  i13 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i16 >> 2] = i13;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  return;
 } else if ((i8 | 0) == 8) {
  if ((i5 | 0) == (HEAP32[i1 + 4 >> 2] | 0)) {
   __ZN3WTF6VectorINS_6OwnPtrIKN7WebCore14AnimationValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i5 + 1 | 0);
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = HEAP32[i6 >> 2] | 0;
  } else {
   i17 = i5;
   i18 = i9;
  }
  i9 = i18 + (i2 << 2) | 0;
  _memmove(i18 + (i12 << 2) | 0, i9 | 0, i17 - i2 << 2 | 0) | 0;
  i2 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i9 >> 2] = i2;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  return;
 } else if ((i8 | 0) == 11) {
  if ((i5 | 0) == (HEAP32[i1 + 4 >> 2] | 0)) {
   __ZN3WTF6VectorINS_6OwnPtrIKN7WebCore14AnimationValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i5 + 1 | 0);
   i3 = (HEAP32[i6 >> 2] | 0) + (HEAP32[i4 >> 2] << 2) | 0;
   i1 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i3 >> 2] = i1;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
   return;
  } else {
   i1 = (HEAP32[i6 >> 2] | 0) + (i5 << 2) | 0;
   i5 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i1 >> 2] = i5;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
   return;
  }
 }
}
function __ZN7WebCore13GraphicsLayer26animationNameForTransitionENS_18AnimatedPropertyIDE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i5 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i5 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i5 + 12 | 0;
 HEAP8[i9] = 1;
 HEAP32[i5 + 16 >> 2] = 0;
 i10 = i5 + 20 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF13StringBuilder6appendEPKhj(i5, H_BASE + 728 | 0, 12);
 __ZN3WTF13StringBuilder12appendNumberEi(i5, i2);
 HEAP8[i4] = 45;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i11 = 7;
  } else {
   i12 = HEAP32[i6 >> 2] | 0;
   if (i12 >>> 0 >= (HEAP32[i2 + 4 >> 2] | 0) >>> 0) {
    i11 = 7;
    break;
   }
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    i11 = 7;
    break;
   }
   i13 = (HEAP8[i9] & 1) == 0;
   HEAP32[i6 >> 2] = i12 + 1;
   if (i13) {
    HEAP16[(HEAP32[i5 + 20 >> 2] | 0) + (i12 << 1) >> 1] = 45;
    break;
   } else {
    HEAP8[(HEAP32[i10 >> 2] | 0) + i12 | 0] = 45;
    break;
   }
  }
 } while (0);
 if ((i11 | 0) == 7) {
  __ZN3WTF13StringBuilder6appendEPKhj(i5, i4, 1);
 }
 __ZN3WTF13StringBuilder11shrinkToFitEv(i5);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i5);
  i5 = HEAP32[i7 >> 2] | 0;
  HEAP32[i1 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i14 = i5;
   i11 = 11;
  }
 } else {
  HEAP32[i1 >> 2] = i4;
  i14 = i4;
  i11 = 11;
 }
 if ((i11 | 0) == 11) {
  i11 = i14 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 i11 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i8 = i11 | 0;
   i14 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i8 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i7 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i11 | 0;
 i14 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i14 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i11);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i14;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore13GraphicsLayerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 752;
 if (HEAP8[H_BASE + 1088 | 0] | 0) {
  i4 = HEAP32[H_BASE + 1096 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(20) | 0;
  i6 = i5;
  _memset(i5 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1096 >> 2] = i6;
  HEAP8[H_BASE + 1088 | 0] = 1;
  i4 = i6;
 }
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF7HashMapIPKN7WebCore13GraphicsLayerENS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE6removeERKS4_(i4, i3) | 0;
 i3 = i1 + 360 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 352 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 356 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 336 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 328 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i6 >> 2] | 0;
  i7 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 + 4 | 0;
     i9 = i8 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i9 >> 2] = i10;
      break;
     }
     i10 = i8 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 332 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i4 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore13GraphicsLayerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 752;
 if (HEAP8[H_BASE + 1088 | 0] | 0) {
  i4 = HEAP32[H_BASE + 1096 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(20) | 0;
  i6 = i5;
  _memset(i5 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1096 >> 2] = i6;
  HEAP8[H_BASE + 1088 | 0] = 1;
  i4 = i6;
 }
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF7HashMapIPKN7WebCore13GraphicsLayerENS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE6removeERKS4_(i4, i3) | 0;
 i3 = i1 + 360 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 352 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 356 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 336 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 328 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i6 >> 2] | 0;
  i7 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 + 4 | 0;
     i9 = i8 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i9 >> 2] = i10;
      break;
     }
     i10 = i8 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 332 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i4 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF7HashMapIPKN7WebCore13GraphicsLayerENS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE4findERKS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] << 4 | 0;
   i6 = i5;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = i8;
   i10 = i9 + ~(i9 << 15) | 0;
   i9 = (i10 >>> 10 ^ i10) * 9 & -1;
   i10 = i9 >>> 6 ^ i9;
   i9 = i10 + ~(i10 << 11) | 0;
   i10 = i9 >>> 16 ^ i9;
   i9 = i10 & i5;
   i11 = i4 + (i9 << 4) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   L4 : do {
    if ((i12 | 0) == (i8 | 0)) {
     i13 = i11;
    } else {
     i14 = (i10 >>> 23) + ~i10 | 0;
     i15 = i14 << 12 ^ i14;
     i14 = i15 >>> 7 ^ i15;
     i15 = i14 << 2 ^ i14;
     i14 = i15 >>> 20 ^ i15 | 1;
     i15 = 0;
     i16 = i9;
     i17 = i12;
     while (1) {
      if ((i17 | 0) == 0) {
       break;
      }
      i18 = (i15 | 0) == 0 ? i14 : i15;
      i19 = i18 + i16 & i5;
      i20 = i4 + (i19 << 4) | 0;
      i21 = HEAP32[i20 >> 2] | 0;
      if ((i21 | 0) == (i8 | 0)) {
       i13 = i20;
       break L4;
      } else {
       i15 = i18;
       i16 = i19;
       i17 = i21;
      }
     }
     i17 = i4 + (HEAP32[i2 + 4 >> 2] << 4) | 0;
     i6 = i17;
     i7 = i17;
     break L1;
    }
   } while (0);
   i8 = i4 + (HEAP32[i2 + 4 >> 2] << 4) | 0;
   i6 = (i13 | 0) == 0 ? i8 : i13;
   i7 = i8;
  }
 } while (0);
 i13 = i1;
 HEAP32[i13 >> 2] = i6;
 HEAP32[i13 + 4 >> 2] = i7;
 return;
}
function __ZN3WTF7HashMapIPKN7WebCore13GraphicsLayerENS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE6removeERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN3WTF7HashMapIPKN7WebCore13GraphicsLayerENS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE4findERKS4_(i4, i1, i2);
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i2 | 0) == ((HEAP32[i1 >> 2] | 0) + (HEAP32[i4 >> 2] << 4) | 0)) {
  i5 = 0;
  STACKTOP = i3;
  return i5 | 0;
 }
 i6 = i2 + 12 | 0;
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
 }
 i6 = i2 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i2 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i7);
 }
 HEAP32[i2 >> 2] = -1;
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = i1 + 12 | 0;
 i7 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i7;
 i2 = HEAP32[i4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i2 | 0) & (i2 | 0) > 8)) {
  i5 = 1;
  STACKTOP = i3;
  return i5 | 0;
 }
 __ZN3WTF9HashTableIPKN7WebCore13GraphicsLayerENS_12KeyValuePairIS4_NS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_7HashMapIS4_S9_SE_NS_10HashTraitsIS4_EENSG_IS9_EEE18KeyValuePairTraitsESH_E6rehashEiPSA_(i1 | 0, (i2 | 0) / 2 & -1, 0) | 0;
 i5 = 1;
 STACKTOP = i3;
 return i5 | 0;
}
function __ZN7WebCore13GraphicsLayer8addChildEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 if ((HEAP32[i2 + 364 >> 2] | 0) == 0) {
  i5 = i2;
 } else {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 31](i2);
  i5 = HEAP32[i4 >> 2] | 0;
 }
 HEAP32[i5 + 364 >> 2] = i1;
 i5 = i1 + 352 | 0;
 i2 = i1 + 360 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) != (HEAP32[i1 + 356 >> 2] | 0)) {
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2] = HEAP32[i4 >> 2];
  i7 = HEAP32[i2 >> 2] | 0;
  i8 = i7 + 1 | 0;
  HEAP32[i2 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
 i1 = i6 + 1 | 0;
 i9 = i5 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if (i10 >>> 0 > i4 >>> 0) {
   i11 = 7;
  } else {
   if ((i10 + (i6 << 2) | 0) >>> 0 <= i4 >>> 0) {
    i11 = 7;
    break;
   }
   __ZN3WTF6VectorIPN7WebCore13GraphicsLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i1);
   i12 = HEAP32[i9 >> 2] | 0;
   i13 = i12 + (i4 - i10 >> 2 << 2) | 0;
   i14 = i12;
  }
 } while (0);
 if ((i11 | 0) == 7) {
  __ZN3WTF6VectorIPN7WebCore13GraphicsLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i1);
  i13 = i4;
  i14 = HEAP32[i9 >> 2] | 0;
 }
 HEAP32[i14 + (HEAP32[i2 >> 2] << 2) >> 2] = HEAP32[i13 >> 2];
 i7 = HEAP32[i2 >> 2] | 0;
 i8 = i7 + 1 | 0;
 HEAP32[i2 >> 2] = i8;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13GraphicsLayer15addChildAtIndexEPS0_i(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i2;
 if ((HEAP32[i2 + 364 >> 2] | 0) == 0) {
  i6 = i2;
 } else {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 31](i2);
  i6 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i6 + 364 >> 2] = i1;
 i6 = i1 + 352 | 0;
 i2 = i1 + 360 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 L4 : do {
  if ((i7 | 0) == (HEAP32[i1 + 356 >> 2] | 0)) {
   i8 = i7 + 1 | 0;
   i9 = i6 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   do {
    if (i10 >>> 0 <= i5 >>> 0) {
     if ((i10 + (i7 << 2) | 0) >>> 0 <= i5 >>> 0) {
      break;
     }
     __ZN3WTF6VectorIPN7WebCore13GraphicsLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i8);
     i11 = (HEAP32[i9 >> 2] | 0) + (i5 - i10 >> 2 << 2) | 0;
     i12 = i9;
     break L4;
    }
   } while (0);
   __ZN3WTF6VectorIPN7WebCore13GraphicsLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i8);
   i11 = i5;
   i12 = i9;
  } else {
   i11 = i5;
   i12 = i6 | 0;
  }
 } while (0);
 i6 = HEAP32[i12 >> 2] | 0;
 i12 = i6 + (i3 << 2) | 0;
 _memmove(i6 + (i3 + 1 << 2) | 0, i12 | 0, (HEAP32[i2 >> 2] | 0) - i3 << 2 | 0) | 0;
 HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore13GraphicsLayer11setChildrenERKN3WTF6VectorIPS0_Lj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 360 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) == (i6 | 0)) {
   if ((_memcmp(HEAP32[i2 >> 2] | 0, HEAP32[i1 + 352 >> 2] | 0, i4 << 2 | 0) | 0) == 0) {
    i7 = 0;
   } else {
    break;
   }
   return i7 | 0;
  }
 } while (0);
 if ((i6 | 0) == 0) {
  i8 = i4;
 } else {
  i4 = i1 + 352 | 0;
  while (1) {
   i6 = HEAP32[HEAP32[i4 >> 2] >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] & 31](i6);
   if ((HEAP32[i5 >> 2] | 0) == 0) {
    break;
   }
  }
  i8 = HEAP32[i3 >> 2] | 0;
 }
 if ((i8 | 0) == 0) {
  i7 = 1;
  return i7 | 0;
 }
 i5 = i1;
 i4 = i2 | 0;
 i2 = 0;
 i6 = i8;
 while (1) {
  if (i6 >>> 0 <= i2 >>> 0) {
   i9 = 10;
   break;
  }
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i1, HEAP32[(HEAP32[i4 >> 2] | 0) + (i2 << 2) >> 2] | 0);
  i10 = i2 + 1 | 0;
  if (i10 >>> 0 >= i8 >>> 0) {
   i7 = 1;
   i9 = 16;
   break;
  }
  i2 = i10;
  i6 = HEAP32[i3 >> 2] | 0;
 }
 if ((i9 | 0) == 16) {
  return i7 | 0;
 } else if ((i9 | 0) == 10) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
}
function __ZN7WebCore13GraphicsLayer24validateFilterOperationsERKNS_17KeyframeValueListE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if (i3 >>> 0 < 2 >>> 0) {
  i4 = -1;
  return i4 | 0;
 }
 i5 = i1 | 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= i3 >>> 0) {
   i4 = -1;
   i6 = 12;
   break;
  }
  if ((HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + (i1 << 2) >> 2] | 0) + 28 >> 2] | 0) == 0) {
   i1 = i1 + 1 | 0;
  } else {
   break;
  }
 }
 if ((i6 | 0) == 12) {
  return i4 | 0;
 }
 i7 = HEAP32[i5 >> 2] | 0;
 i8 = (HEAP32[i7 + (i1 << 2) >> 2] | 0) + 20 | 0;
 i9 = i1 + 1 | 0;
 if (i9 >>> 0 < i3 >>> 0) {
  i10 = i9;
  i11 = i7;
  i12 = i3;
 } else {
  i4 = i1;
  return i4 | 0;
 }
 while (1) {
  i3 = HEAP32[i11 + (i10 << 2) >> 2] | 0;
  if ((HEAP32[i3 + 28 >> 2] | 0) == 0) {
   i13 = i12;
  } else {
   if (!(__ZNK7WebCore16FilterOperations15operationsMatchERKS0_(i8, i3 + 20 | 0) | 0)) {
    i4 = -1;
    i6 = 15;
    break;
   }
   i13 = HEAP32[i2 >> 2] | 0;
  }
  i3 = i10 + 1 | 0;
  if (i3 >>> 0 >= i13 >>> 0) {
   i4 = i1;
   i6 = 16;
   break;
  }
  i10 = i3;
  i11 = HEAP32[i5 >> 2] | 0;
  i12 = i13;
 }
 if ((i6 | 0) == 15) {
  return i4 | 0;
 } else if ((i6 | 0) == 16) {
  return i4 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorIN7WebCore9FloatRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore13GraphicsLayer26paintGraphicsLayerContentsERNS_15GraphicsContextERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i1 + 4 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i1 + 12 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = -i10;
 HEAP32[i6 + 4 >> 2] = -i11;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i5, i6);
 __ZN7WebCore15GraphicsContext9translateEff(i2, +HEAPF32[i5 >> 2], +HEAPF32[i5 + 4 >> 2]);
 i5 = i7;
 i6 = i3;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 i6 = i7 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + i10;
 i10 = i7 + 4 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + i11;
 i11 = HEAP32[i8 >> 2] | 0;
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i11 >> 2] | 0) + 28 >> 2] & 1](i11, i1, i2, HEAP32[i1 + 344 >> 2] | 0, i7);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore13GraphicsLayer54noteDeviceOrPageScaleFactorChangedIncludingDescendantsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 264 >> 2] & 31](i1);
 i2 = HEAP32[i1 + 368 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 264 >> 2] & 31](i2);
 }
 i2 = HEAP32[i1 + 372 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore13GraphicsLayer54noteDeviceOrPageScaleFactorChangedIncludingDescendantsEv(i2);
 }
 i2 = i1 + 360 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = i1 + 352 | 0;
 i1 = 0;
 i5 = i3;
 while (1) {
  if (i5 >>> 0 <= i1 >>> 0) {
   i6 = 8;
   break;
  }
  __ZN7WebCore13GraphicsLayer54noteDeviceOrPageScaleFactorChangedIncludingDescendantsEv(HEAP32[(HEAP32[i4 >> 2] | 0) + (i1 << 2) >> 2] | 0);
  i7 = i1 + 1 | 0;
  if (i7 >>> 0 >= i3 >>> 0) {
   i6 = 13;
   break;
  }
  i1 = i7;
  i5 = HEAP32[i2 >> 2] | 0;
 }
 if ((i6 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i6 | 0) == 13) {
  return;
 }
}
function __ZNK7WebCore13GraphicsLayer15layerTreeAsTextEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i5 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i5 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP8[i5 + 12 | 0] = 1;
 HEAP32[i5 + 16 >> 2] = 0;
 HEAP32[i5 + 20 >> 2] = 0;
 __ZNK7WebCore13GraphicsLayer9dumpLayerERNS_10TextStreamEij(i2, i5, 0, i3);
 __ZN7WebCore10TextStream7releaseEv(i1, i5);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i7 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i5 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore13GraphicsLayerC2EPNS_19GraphicsLayerClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 752;
 HEAP32[i1 + 4 >> 2] = i2;
 _memset(i1 + 8 | 0, 0, 20) | 0;
 HEAPF32[i1 + 28 >> 2] = +.5;
 HEAPF32[i1 + 32 >> 2] = +.5;
 _memset(i1 + 36 | 0, 0, 20) | 0;
 HEAPF64[i1 + 56 >> 3] = +1;
 _memset(i1 + 64 | 0, 0, 32) | 0;
 HEAPF64[i1 + 96 >> 3] = +1;
 _memset(i1 + 104 | 0, 0, 32) | 0;
 HEAPF64[i1 + 136 >> 3] = +1;
 _memset(i1 + 144 | 0, 0, 32) | 0;
 HEAPF64[i1 + 176 >> 3] = +1;
 HEAPF64[i1 + 184 >> 3] = +1;
 _memset(i1 + 192 | 0, 0, 32) | 0;
 HEAPF64[i1 + 224 >> 3] = +1;
 _memset(i1 + 232 | 0, 0, 32) | 0;
 HEAPF64[i1 + 264 >> 3] = +1;
 _memset(i1 + 272 | 0, 0, 32) | 0;
 HEAPF64[i1 + 304 >> 3] = +1;
 HEAP32[i1 + 312 >> 2] = 0;
 HEAP8[i1 + 316 | 0] = 0;
 HEAPF32[i1 + 320 >> 2] = +1;
 HEAPF32[i1 + 324 >> 2] = +0;
 __ZN7WebCore16FilterOperationsC1Ev(i1 + 328 | 0);
 HEAP8[i1 + 340 | 0] = 68;
 i2 = i1 + 341 | 0;
 HEAP8[i2] = HEAP8[i2] & -16;
 HEAP32[i1 + 344 >> 2] = 7;
 _memset(i1 + 348 | 0, 0, 96) | 0;
 return;
}
function __ZNK7WebCore13GraphicsLayer18getDebugBorderInfoERNS_5ColorERf(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = i1 + 340 | 0;
 i5 = HEAP8[i4] | 0;
 if ((i5 & 32) != 0) {
  if ((i5 & 8) == 0) {
   HEAP32[i2 >> 2] = __ZN7WebCore8makeRGBAEiiii(0, 128, 32, 128) | 0;
   HEAP8[i2 + 4 | 0] = 1;
   HEAPF32[i3 >> 2] = +2;
   return;
  } else {
   HEAP32[i2 >> 2] = __ZN7WebCore8makeRGBAEiiii(255, 128, 0, 128) | 0;
   HEAP8[i2 + 4 | 0] = 1;
   HEAPF32[i3 >> 2] = +2;
   return;
  }
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 196 >> 2] & 31](i1) | 0) {
  HEAP32[i2 >> 2] = __ZN7WebCore8makeRGBAEiiii(255, 150, 255, 200) | 0;
  HEAP8[i2 + 4 | 0] = 1;
  HEAPF32[i3 >> 2] = +2;
  return;
 }
 if ((HEAP8[i4] & 16) == 0) {
  HEAP32[i2 >> 2] = __ZN7WebCore8makeRGBAEiiii(255, 255, 0, 192) | 0;
  HEAP8[i2 + 4 | 0] = 1;
  HEAPF32[i3 >> 2] = +2;
  return;
 } else {
  HEAP32[i2 >> 2] = __ZN7WebCore8makeRGBAEiiii(128, 255, 255, 48) | 0;
  HEAP8[i2 + 4 | 0] = 1;
  HEAPF32[i3 >> 2] = +20;
  return;
 }
}
function __ZN7WebCore13GraphicsLayer15willBeDestroyedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 372 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 312 >> 2] & 127](i2, 0);
 }
 i2 = HEAP32[i1 + 376 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 52 >> 2] & 127](i2, 0);
 }
 i2 = i1 + 360 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  i3 = i1;
  i4 = HEAP32[i3 >> 2] | 0;
  i5 = i4 + 44 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  FUNCTION_TABLE_vi[i6 & 31](i1);
  return;
 }
 i7 = i1 + 352 | 0;
 while (1) {
  i8 = HEAP32[HEAP32[i7 >> 2] >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] & 31](i8);
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   break;
  }
 }
 i3 = i1;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 44 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 FUNCTION_TABLE_vi[i6 & 31](i1);
 return;
}
function __ZNK7WebCore13GraphicsLayer9dumpLayerERNS_10TextStreamEij(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3);
 __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 720 | 0) | 0, H_BASE + 512 | 0) | 0;
 if ((i4 & 1 | 0) != 0) {
  __ZN7WebCore10TextStreamlsEPKv(__ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 384 | 0) | 0, i1) | 0;
  __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsERKN3WTF6StringE(__ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 160 | 0) | 0, i1 + 8 | 0) | 0, H_BASE + 56 | 0) | 0;
 }
 __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 48 | 0) | 0;
 __ZNK7WebCore13GraphicsLayer14dumpPropertiesERNS_10TextStreamEij(i1, i2, i3, i4);
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3);
 __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 40 | 0) | 0;
 return;
}
function __ZN7WebCore13GraphicsLayer17distributeOpacityEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var d3 = +0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 d3 = +HEAPF32[i1 + 320 >> 2] * d2;
 FUNCTION_TABLE_vif[HEAP32[(HEAP32[i1 >> 2] | 0) + 308 >> 2] & 15](i1, d3);
 if ((HEAP8[i1 + 340 | 0] & 2) == 0) {
  return;
 }
 i4 = i1 + 360 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i6 = i1 + 352 | 0;
 i1 = 0;
 i7 = i5;
 while (1) {
  if (i7 >>> 0 <= i1 >>> 0) {
   i8 = 5;
   break;
  }
  i9 = HEAP32[(HEAP32[i6 >> 2] | 0) + (i1 << 2) >> 2] | 0;
  FUNCTION_TABLE_vif[HEAP32[(HEAP32[i9 >> 2] | 0) + 240 >> 2] & 15](i9, d3);
  i9 = i1 + 1 | 0;
  if (i9 >>> 0 >= i5 >>> 0) {
   i8 = 9;
   break;
  }
  i1 = i9;
  i7 = HEAP32[i4 >> 2] | 0;
 }
 if ((i8 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i8 | 0) == 9) {
  return;
 }
}
function __ZN3WTF6VectorINS_6OwnPtrIKN7WebCore14AnimationValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
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
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i3 >> 2] = i1 >>> 2;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF6VectorIPN7WebCore13GraphicsLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
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
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i3 >> 2] = i1 >>> 2;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore13GraphicsLayer16removeFromParentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 364 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = i3 + 360 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + 352 | 0;
 i3 = 0;
 while (1) {
  if (i3 >>> 0 >= i5 >>> 0) {
   break;
  }
  i7 = HEAP32[i6 >> 2] | 0;
  i8 = i7 + (i3 << 2) | 0;
  i9 = i3 + 1 | 0;
  if ((HEAP32[i8 >> 2] | 0) == (i1 | 0)) {
   i10 = 5;
   break;
  } else {
   i3 = i9;
  }
 }
 if ((i10 | 0) == 5) {
  _memmove(i8 | 0, i7 + (i9 << 2) | 0, i5 + (i3 ^ 1073741823) << 2 | 0) | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - 1;
 }
 HEAP32[i2 >> 2] = 0;
 return;
}
function __ZN7WebCore13GraphicsLayer12replaceChildEPS0_S1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = HEAP32[i1 + 360 >> 2] | 0;
 i5 = i1 + 352 | 0;
 i6 = 0;
 while (1) {
  if (i6 >>> 0 >= i4 >>> 0) {
   i7 = 0;
   i8 = 7;
   break;
  }
  i9 = (HEAP32[i5 >> 2] | 0) + (i6 << 2) | 0;
  if ((HEAP32[i9 >> 2] | 0) == (i2 | 0)) {
   break;
  } else {
   i6 = i6 + 1 | 0;
  }
 }
 if ((i8 | 0) == 7) {
  return i7 | 0;
 }
 HEAP32[i9 >> 2] = i3;
 HEAP32[i2 + 364 >> 2] = 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] & 31](i3);
 HEAP32[i3 + 364 >> 2] = i1;
 i7 = 1;
 return i7 | 0;
}
function __ZN7WebCore13GraphicsLayer20resetTrackedRepaintsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 1088 | 0] | 0) {
  i4 = HEAP32[H_BASE + 1096 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(20) | 0;
  i6 = i5;
  _memset(i5 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1096 >> 2] = i6;
  HEAP8[H_BASE + 1088 | 0] = 1;
  i4 = i6;
 }
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF7HashMapIPKN7WebCore13GraphicsLayerENS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE6removeERKS4_(i4, i3) | 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore13GraphicsLayer21setOffsetFromRendererERKNS_7IntSizeENS0_21ShouldSetNeedsDisplayE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = i1 + 12 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
   if ((HEAP32[i2 + 4 >> 2] | 0) != (HEAP32[i1 + 16 >> 2] | 0)) {
    break;
   }
   return;
  }
 } while (0);
 i5 = i2;
 i2 = i4;
 i4 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = i4;
 if ((i3 | 0) != 1) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 124 >> 2] & 31](i1);
 return;
}
function __ZN7WebCore13GraphicsLayer7setSizeERKNS_9FloatSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 40 | 0;
 do {
  if (+HEAPF32[i2 >> 2] == +HEAPF32[i3 >> 2]) {
   if (+HEAPF32[i2 + 4 >> 2] != +HEAPF32[i1 + 44 >> 2]) {
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
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 304 >> 2] & 31](i1) | 0)) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 124 >> 2] & 31](i1);
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
function __ZN7WebCore13GraphicsLayer21updateDebugIndicatorsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 if ((HEAP8[i1 + 341 | 0] & 4) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP8[i3 + 4 | 0] = 0;
 HEAPF32[i4 >> 2] = +0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 320 >> 2] & 15](i1, i3, i4);
 FUNCTION_TABLE_viif[HEAP32[(HEAP32[i1 >> 2] | 0) + 224 >> 2] & 3](i1, i3, +HEAPF32[i4 >> 2]);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore13GraphicsLayer7setNameERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 + 8 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  return;
 } else {
  HEAP32[i3 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore13GraphicsLayer20setReplicatedByLayerEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 372 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  return;
 }
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 312 >> 2] & 127](i4, 0);
 }
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 312 >> 2] & 127](i2, i1);
 }
 HEAP32[i3 >> 2] = i2;
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
function __ZNK7WebCore13GraphicsLayer11hasAncestorEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1;
 while (1) {
  i1 = HEAP32[i3 + 364 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i4 = 0;
   i5 = 5;
   break;
  }
  if ((i1 | 0) == (i2 | 0)) {
   i4 = 1;
   i5 = 6;
   break;
  } else {
   i3 = i1;
  }
 }
 if ((i5 | 0) == 5) {
  return i4 | 0;
 } else if ((i5 | 0) == 6) {
  return i4 | 0;
 }
 return 0;
}
function __ZNK7WebCore13GraphicsLayer18accumulatedOpacityEv(i1) {
 i1 = i1 | 0;
 var d2 = +0, d3 = +0, i4 = 0, d5 = +0;
 if ((HEAP8[i1 + 340 | 0] & 2) == 0) {
  d2 = +1;
  return +d2;
 }
 d3 = +HEAPF32[i1 + 320 >> 2];
 i4 = HEAP32[i1 + 364 >> 2] | 0;
 if ((i4 | 0) == 0) {
  d5 = +1;
 } else {
  d5 = +FUNCTION_TABLE_fi[HEAP32[(HEAP32[i4 >> 2] | 0) + 244 >> 2] & 7](i4);
 }
 d2 = d3 * d5;
 return +d2;
}
function _memmove(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i2 | 0) < (i1 | 0) & (i1 | 0) < (i2 + i3 | 0)) {
  i4 = i1;
  i2 = i2 + i3 | 0;
  i1 = i1 + i3 | 0;
  while ((i3 | 0) > 0) {
   i1 = i1 - 1 | 0;
   i2 = i2 - 1 | 0;
   i3 = i3 - 1 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
  }
  i1 = i4;
 } else {
  _memcpy(i1, i2, i3) | 0;
 }
 return i1 | 0;
}
function __ZN7WebCore13GraphicsLayer17removeAllChildrenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 360 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 i3 = i1 + 352 | 0;
 while (1) {
  i1 = HEAP32[HEAP32[i3 >> 2] >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 44 >> 2] & 31](i1);
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore13GraphicsLayer23setContentsClippingRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 404 | 0;
 i1 = i2;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 return;
}
function __ZN7WebCore13GraphicsLayer15setContentsRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 388 | 0;
 i1 = i2;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 return;
}
function _memcmp(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 while ((i4 | 0) < (i3 | 0)) {
  i5 = HEAPU8[i1 + i4 | 0] | 0;
  i6 = HEAPU8[i2 + i4 | 0] | 0;
  if ((i5 | 0) != (i6 | 0)) return ((i5 | 0) > (i6 | 0) ? 1 : -1) | 0;
  i4 = i4 + 1 | 0;
 }
 return 0;
}
function __ZN7WebCore13GraphicsLayer14setAnchorPointERKNS_12FloatPoint3DE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 28 | 0;
 i1 = i2;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 return;
}
function __ZN7WebCore13GraphicsLayer20setChildrenTransformERKNS_20TransformationMatrixE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 184 | 0;
 if ((i2 | 0) == 0 | (i3 | 0) == (i2 | 0)) {
  return;
 }
 _memcpy(i3 | 0, i2 | 0, 128) | 0;
 return;
}
function __ZN7WebCore13GraphicsLayer20setContentsTilePhaseERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2;
 i2 = i1 + 420 | 0;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZN7WebCore13GraphicsLayer19setContentsTileSizeERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2;
 i2 = i1 + 428 | 0;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZN7WebCore13GraphicsLayer15setBoundsOriginERKNS_10FloatPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2;
 i2 = i1 + 48 | 0;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZN7WebCore13GraphicsLayer12syncPositionERKNS_10FloatPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2;
 i2 = i1 + 20 | 0;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZN7WebCore13GraphicsLayer12setTransformERKNS_20TransformationMatrixE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 56 | 0;
 if ((i2 | 0) == 0 | (i3 | 0) == (i2 | 0)) {
  return;
 }
 _memcpy(i3 | 0, i2 | 0, 128) | 0;
 return;
}
function __ZN7WebCore13GraphicsLayer11setPositionERKNS_10FloatPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2;
 i2 = i1 + 20 | 0;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZNK7WebCore13GraphicsLayer26backingStoreMemoryEstimateEv(i1) {
 i1 = i1 | 0;
 var d2 = +0;
 if ((HEAP8[i1 + 340 | 0] & 32) == 0) {
  d2 = +0;
  return +d2;
 }
 d2 = +HEAPF32[i1 + 40 >> 2] * +4 * +HEAPF32[i1 + 44 >> 2];
 return +d2;
}
function __ZN7WebCore13GraphicsLayer12addAnimationERKNS_17KeyframeValueListERKNS_7IntSizeEPKNS_9AnimationERKN3WTF6StringEd(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 return 0;
}
function __ZN7WebCore13GraphicsLayer18setBackgroundColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 312 | 0;
 i1 = i2;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP8[i3 + 4 | 0] = HEAP8[i1 + 4 | 0] | 0;
 return;
}
function dynCall_iiiiiid(i1, i2, i3, i4, i5, i6, d7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 d7 = +d7;
 return FUNCTION_TABLE_iiiiiid[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, +d7) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
function __ZN7WebCore13GraphicsLayer26setContentsToPlatformLayerEPPv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 180 >> 2] & 127](i1, i2);
 return;
}
function __ZN7WebCore13GraphicsLayer21setAcceleratesDrawingEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 340 | 0;
 HEAP8[i3] = HEAP8[i3] & 127 | (i2 & 1) << 7;
 return;
}
function __ZN7WebCore13GraphicsLayer21setShowRepaintCounterEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 341 | 0;
 HEAP8[i3] = HEAP8[i3] & -9 | (i2 & 1) << 3;
 return;
}
function __ZN7WebCore13GraphicsLayer21setBackfaceVisibilityEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 340 | 0;
 HEAP8[i3] = HEAP8[i3] & -5 | (i2 & 1) << 2;
 return;
}
function __ZN7WebCore13GraphicsLayer10setFiltersERKNS_16FilterOperationsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore16FilterOperationsaSERKS0_(i1 + 328 | 0, i2) | 0;
 return 1;
}
function __ZN7WebCore13GraphicsLayer26setMaintainsPixelAlignmentEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 341 | 0;
 HEAP8[i3] = HEAP8[i3] & -2 | i2 & 1;
 return;
}
function __ZN7WebCore13GraphicsLayer19setAppliesPageScaleEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 341 | 0;
 HEAP8[i3] = HEAP8[i3] & -3 | (i2 & 1) << 1;
 return;
}
function __ZN7WebCore13GraphicsLayer18setContentsVisibleEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 340 | 0;
 HEAP8[i3] = HEAP8[i3] & -65 | (i2 & 1) << 6;
 return;
}
function __ZN7WebCore13GraphicsLayer18setShowDebugBorderEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 341 | 0;
 HEAP8[i3] = HEAP8[i3] & -5 | (i2 & 1) << 2;
 return;
}
function __ZN7WebCore13GraphicsLayer16setMasksToBoundsEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 340 | 0;
 HEAP8[i3] = HEAP8[i3] & -17 | (i2 & 1) << 4;
 return;
}
function __ZN7WebCore13GraphicsLayer15setDrawsContentEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 340 | 0;
 HEAP8[i3] = HEAP8[i3] & -33 | (i2 & 1) << 5;
 return;
}
function __ZN7WebCore13GraphicsLayer14setPreserves3DEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 340 | 0;
 HEAP8[i3] = HEAP8[i3] & -3 | (i2 & 1) << 1;
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
function __ZN7WebCore13GraphicsLayer22setContentsOrientationENS0_33CompositingCoordinatesOrientationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 348 >> 2] = i2;
 return;
}
function __ZN7WebCore13GraphicsLayer17setContentsOpaqueEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 340 | 0;
 HEAP8[i3] = HEAP8[i3] & -2 | i2 & 1;
 return;
}
function __ZNK7WebCore13GraphicsLayer24dumpAdditionalPropertiesERNS_10TextStreamEij(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore13GraphicsLayer19setCustomAppearanceENS0_16CustomAppearanceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 440 >> 2] = i2;
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
function dynCall_viif(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 FUNCTION_TABLE_viif[i1 & 3](i2 | 0, i3 | 0, +d4);
}
function dynCall_viid(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 FUNCTION_TABLE_viid[i1 & 3](i2 | 0, i3 | 0, +d4);
}
function b3(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 abort(3);
 return 0;
}
function __ZN7WebCore13GraphicsLayer18setReplicatedLayerEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 376 >> 2] = i2;
 return;
}
function __ZNK7WebCore13GraphicsLayer30visibleRectChangeRequiresFlushERKNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore13GraphicsLayerD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13GraphicsLayerD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore13GraphicsLayer25shouldRepaintOnSizeChangeEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 340 | 0] & 32) != 0 | 0;
}
function __ZN7WebCore13GraphicsLayer14pauseAnimationERKN3WTF6StringEd(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return;
}
function __ZN7WebCore13GraphicsLayer12setMaskLayerEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 368 >> 2] = i2;
 return;
}
function __ZNK7WebCore13GraphicsLayer28shouldDirectlyCompositeImageEPNS_5ImageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 1;
}
function __ZNK7WebCore13GraphicsLayer23maintainsPixelAlignmentEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 341 | 0] & 1) != 0 | 0;
}
function __ZN7WebCore13GraphicsLayer14setDebugBorderERKNS_5ColorEf(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
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
function __ZN7WebCore13GraphicsLayer9setParentEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 364 >> 2] = i2;
 return;
}
function __ZN7WebCore13GraphicsLayer12setZPositionEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 HEAPF32[i1 + 324 >> 2] = d2;
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
function __ZN7WebCore13GraphicsLayer10setOpacityEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 HEAPF32[i1 + 320 >> 2] = d2;
 return;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 127](i2 | 0, i3 | 0);
}
function __ZN7WebCore13GraphicsLayer21flushCompositingStateERKNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore13GraphicsLayer16appliesPageScaleEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 341 | 0] & 2) != 0 | 0;
}
function __ZN7WebCore13GraphicsLayer23setDebugBackgroundColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore13GraphicsLayer23setContentsToSolidColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_vif(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 FUNCTION_TABLE_vif[i1 & 15](i2 | 0, +d3);
}
function __ZN7WebCore13GraphicsLayer15removeAnimationERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_vid(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 FUNCTION_TABLE_vid[i1 & 3](i2 | 0, +d3);
}
function __ZN7WebCore13GraphicsLayer18setContentsToImageEPNS_5ImageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZN7WebCore13GraphicsLayer19setContentsToCanvasEPPv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore13GraphicsLayer18setContentsToMediaEPPv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore13GraphicsLayer14primaryLayerIDEv(i1) {
 i1 = i1 | 0;
 return (tempRet0 = 0, 0) | 0;
}
function __ZN7WebCore13GraphicsLayer37flushCompositingStateForThisLayerOnlyEv(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZNK7WebCore13GraphicsLayer9zPositionEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[i1 + 324 >> 2]);
}
function __ZN7WebCore13GraphicsLayer15layerDidDisplayEPPv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore13GraphicsLayer18setOpacityInternalEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return;
}
function dynCall_fi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_fi[i1 & 7](i2 | 0);
}
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 3](i2 | 0);
}
function __ZN7WebCore13GraphicsLayer17suspendAnimationsEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return;
}
function __ZN7WebCore13GraphicsLayer30deviceOrPageScaleFactorChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function b15(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(15);
}
function __ZNK7WebCore13GraphicsLayer23isGraphicsLayerCARemoteEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore13GraphicsLayer21canThrottleLayerFlushEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore13GraphicsLayer23setContentsNeedsDisplayEv(i1) {
 i1 = i1 | 0;
 return;
}
function b8(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(8);
 return 0;
}
function __ZNK7WebCore13GraphicsLayer17isGraphicsLayerCAEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore13GraphicsLayer16hasContentsLayerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore13GraphicsLayer13platformLayerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore13GraphicsLayer16resumeAnimationsEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore13GraphicsLayer12tiledBackingEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore13GraphicsLayer10initializeEv(i1) {
 i1 = i1 | 0;
 return;
}
function b9(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(9);
}
function b13(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(13);
}
function b11(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(11);
}
function b14(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(14);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function b2(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(2);
}
function b1(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(1);
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
function b12(i1) {
 i1 = i1 | 0;
 abort(12);
 return +0;
}
function b6(i1) {
 i1 = i1 | 0;
 abort(6);
 return +0;
}
function b7(i1) {
 i1 = i1 | 0;
 abort(7);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
}
function b10() {
 abort(10);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_vif = [b1,b1,__ZN7WebCore13GraphicsLayer17distributeOpacityEf,b1,__ZN7WebCore13GraphicsLayer10setOpacityEf,b1,__ZN7WebCore13GraphicsLayer18setOpacityInternalEf,b1,__ZN7WebCore13GraphicsLayer12setZPositionEf,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vid = [b2,b2,__ZN7WebCore13GraphicsLayer17suspendAnimationsEd,b2];
  var FUNCTION_TABLE_iiiiiid = [b3,b3,__ZN7WebCore13GraphicsLayer12addAnimationERKNS_17KeyframeValueListERKNS_7IntSizeEPKNS_9AnimationERKN3WTF6StringEd,b3];
  var FUNCTION_TABLE_vi = [b4,b4,__ZN7WebCore13GraphicsLayerD2Ev,b4,__ZN7WebCore13GraphicsLayer16removeFromParentEv,b4,__ZN7WebCore13GraphicsLayer37flushCompositingStateForThisLayerOnlyEv,b4,__ZN7WebCore13GraphicsLayer10initializeEv,b4,__ZN7WebCore13GraphicsLayer16resumeAnimationsEv,b4,__ZN7WebCore13GraphicsLayer15willBeDestroyedEv,b4,__ZN7WebCore13GraphicsLayer30deviceOrPageScaleFactorChangedEv,b4,__ZN7WebCore13GraphicsLayer23setContentsNeedsDisplayEv,b4,__ZN7WebCore13GraphicsLayerD0Ev,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_vii = [b5,b5,__ZN7WebCore13GraphicsLayer14setAnchorPointERKNS_12FloatPoint3DE,b5,__ZN7WebCore13GraphicsLayer21setShowRepaintCounterEb,b5,__ZN7WebCore13GraphicsLayer12syncPositionERKNS_10FloatPointE,b5,__ZN7WebCore13GraphicsLayer8addChildEPS0_,b5,__ZN7WebCore13GraphicsLayer18setContentsVisibleEb,b5,__ZN7WebCore13GraphicsLayer15removeAnimationERKN3WTF6StringE,b5,__ZN7WebCore13GraphicsLayer14setPreserves3DEb,b5,__ZN7WebCore13GraphicsLayer18setContentsToMediaEPPv,b5,__ZN7WebCore13GraphicsLayer15setDrawsContentEb,b5,__ZN7WebCore13GraphicsLayer16setMasksToBoundsEb,b5,__ZN7WebCore13GraphicsLayer21setBackfaceVisibilityEb,b5,__ZN7WebCore13GraphicsLayer15layerDidDisplayEPPv,b5,__ZN7WebCore13GraphicsLayer21setAcceleratesDrawingEb,b5,__ZN7WebCore13GraphicsLayer19setContentsToCanvasEPPv
  ,b5,__ZN7WebCore13GraphicsLayer17setContentsOpaqueEb,b5,__ZN7WebCore13GraphicsLayer19setContentsTileSizeERKNS_7IntSizeE,b5,__ZN7WebCore13GraphicsLayer26setContentsToPlatformLayerEPPv,b5,__ZN7WebCore13GraphicsLayer26setMaintainsPixelAlignmentEb,b5,__ZN7WebCore13GraphicsLayer20setReplicatedByLayerEPS0_,b5,__ZN7WebCore13GraphicsLayer15setBoundsOriginERKNS_10FloatPointE,b5,__ZN7WebCore13GraphicsLayer23setDebugBackgroundColorERKNS_5ColorE,b5,__ZN7WebCore13GraphicsLayer18setContentsToImageEPNS_5ImageE,b5,__ZN7WebCore13GraphicsLayer23setContentsClippingRectERKNS_7IntRectE,b5,__ZN7WebCore13GraphicsLayer7setNameERKN3WTF6StringE,b5,__ZN7WebCore13GraphicsLayer20setChildrenTransformERKNS_20TransformationMatrixE,b5,__ZN7WebCore13GraphicsLayer11setPositionERKNS_10FloatPointE,b5,__ZN7WebCore13GraphicsLayer21flushCompositingStateERKNS_9FloatRectE,b5,__ZN7WebCore13GraphicsLayer18setBackgroundColorERKNS_5ColorE,b5,__ZN7WebCore13GraphicsLayer22setContentsOrientationENS0_33CompositingCoordinatesOrientationE
  ,b5,__ZN7WebCore13GraphicsLayer20setContentsTilePhaseERKNS_8IntPointE,b5,__ZN7WebCore13GraphicsLayer15setContentsRectERKNS_7IntRectE,b5,__ZN7WebCore13GraphicsLayer23setContentsToSolidColorERKNS_5ColorE,b5,__ZN7WebCore13GraphicsLayer7setSizeERKNS_9FloatSizeE,b5,__ZN7WebCore13GraphicsLayer18setReplicatedLayerEPS0_,b5,__ZN7WebCore13GraphicsLayer18setShowDebugBorderEb,b5,__ZN7WebCore13GraphicsLayer19setAppliesPageScaleEb,b5,__ZN7WebCore13GraphicsLayer12setMaskLayerEPS0_,b5,__ZN7WebCore13GraphicsLayer12setTransformERKNS_20TransformationMatrixE,b5,__ZN7WebCore13GraphicsLayer19setCustomAppearanceENS0_16CustomAppearanceE,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_di = [b6,b6,__ZNK7WebCore13GraphicsLayer26backingStoreMemoryEstimateEv,b6];
  var FUNCTION_TABLE_ii = [b7,b7,__ZNK7WebCore13GraphicsLayer16hasContentsLayerEv,b7,__ZNK7WebCore13GraphicsLayer23isGraphicsLayerCARemoteEv,b7,__ZNK7WebCore13GraphicsLayer14primaryLayerIDEv,b7,__ZNK7WebCore13GraphicsLayer25shouldRepaintOnSizeChangeEv,b7,__ZNK7WebCore13GraphicsLayer21canThrottleLayerFlushEv,b7,__ZNK7WebCore13GraphicsLayer13platformLayerEv,b7,__ZNK7WebCore13GraphicsLayer12tiledBackingEv,b7,__ZNK7WebCore13GraphicsLayer16appliesPageScaleEv,b7,__ZNK7WebCore13GraphicsLayer17isGraphicsLayerCAEv,b7,__ZNK7WebCore13GraphicsLayer23maintainsPixelAlignmentEv,b7,b7,b7,b7,b7,b7,b7,b7
  ,b7,b7,b7];
  var FUNCTION_TABLE_iiii = [b8,b8,__ZN7WebCore13GraphicsLayer12replaceChildEPS0_S1_,b8];
  var FUNCTION_TABLE_viii = [b9,b9,__ZN7WebCore13GraphicsLayer13addChildAboveEPS0_S1_,b9,__ZN7WebCore13GraphicsLayer15addChildAtIndexEPS0_i,b9,__ZNK7WebCore13GraphicsLayer18getDebugBorderInfoERNS_5ColorERf,b9,__ZN7WebCore13GraphicsLayer13addChildBelowEPS0_S1_,b9,b9,b9,b9,b9,b9,b9];
  var FUNCTION_TABLE_v = [b10,b10,v____cxa_pure_virtual__wrapper,b10];
  var FUNCTION_TABLE_viid = [b11,b11,__ZN7WebCore13GraphicsLayer14pauseAnimationERKN3WTF6StringEd,b11];
  var FUNCTION_TABLE_fi = [b12,b12,__ZNK7WebCore13GraphicsLayer9zPositionEv,b12,__ZNK7WebCore13GraphicsLayer18accumulatedOpacityEv,b12,b12,b12];
  var FUNCTION_TABLE_viif = [b13,b13,__ZN7WebCore13GraphicsLayer14setDebugBorderERKNS_5ColorEf,b13];
  var FUNCTION_TABLE_iii = [b14,b14,__ZNK7WebCore13GraphicsLayer30visibleRectChangeRequiresFlushERKNS_9FloatRectE,b14,__ZN7WebCore13GraphicsLayer11setChildrenERKN3WTF6VectorIPS0_Lj0ENS1_15CrashOnOverflowEEE,b14,__ZN7WebCore13GraphicsLayer10setFiltersERKNS_16FilterOperationsE,b14,__ZNK7WebCore13GraphicsLayer28shouldDirectlyCompositeImageEPNS_5ImageE,b14,b14,b14,b14,b14,b14,b14];
  var FUNCTION_TABLE_viiii = [b15,b15,__ZNK7WebCore13GraphicsLayer24dumpAdditionalPropertiesERNS_10TextStreamEij,b15];
  return { _memcmp: _memcmp, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, _memmove: _memmove, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vif: dynCall_vif, dynCall_vid: dynCall_vid, dynCall_iiiiiid: dynCall_iiiiiid, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_di: dynCall_di, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viid: dynCall_viid, dynCall_fi: dynCall_fi, dynCall_viif: dynCall_viif, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vif": invoke_vif, "invoke_vid": invoke_vid, "invoke_iiiiiid": invoke_iiiiiid, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_di": invoke_di, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viid": invoke_viid, "invoke_fi": invoke_fi, "invoke_viif": invoke_viif, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "_fabs": _fabs, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _memcmp = Module["_memcmp"] = asm["_memcmp"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var _memmove = Module["_memmove"] = asm["_memmove"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vif = Module["dynCall_vif"] = asm["dynCall_vif"];
var dynCall_vid = Module["dynCall_vid"] = asm["dynCall_vid"];
var dynCall_iiiiiid = Module["dynCall_iiiiiid"] = asm["dynCall_iiiiiid"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viid = Module["dynCall_viid"] = asm["dynCall_viid"];
var dynCall_fi = Module["dynCall_fi"] = asm["dynCall_fi"];
var dynCall_viif = Module["dynCall_viif"] = asm["dynCall_viif"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore13GraphicsLayer18setContentsVisibleEb","__ZN7WebCore13GraphicsLayer14setPreserves3DEb","__ZN7WebCore13GraphicsLayer17removeAllChildrenEv","__ZN7WebCore13GraphicsLayer21setBackfaceVisibilityEb","__ZN3WTF6VectorIPN7WebCore13GraphicsLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore13GraphicsLayer21canThrottleLayerFlushEv","__ZN7WebCore13GraphicsLayer17distributeOpacityEf","_memcpy","__ZN3WTF7HashMapIPKN7WebCore13GraphicsLayerENS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE4findERKS4_","__ZN7WebCore13GraphicsLayer26animationNameForTransitionENS_18AnimatedPropertyIDE","__ZN3WTF9HashTableIPKN7WebCore13GraphicsLayerENS_12KeyValuePairIS4_NS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_7HashMapIS4_S9_SE_NS_10HashTraitsIS4_EENSG_IS9_EEE18KeyValuePairTraitsESH_E6rehashEiPSA_","__ZN7WebCore13GraphicsLayer20setContentsTilePhaseERKNS_8IntPointE","__ZN7WebCore13GraphicsLayer23setContentsClippingRectERKNS_7IntRectE","__ZN7WebCore13GraphicsLayer21setOffsetFromRendererERKNS_7IntSizeENS0_21ShouldSetNeedsDisplayE","__ZN7WebCore13GraphicsLayer10setFiltersERKNS_16FilterOperationsE","__ZN7WebCore13GraphicsLayer17suspendAnimationsEd","__ZN7WebCore13GraphicsLayer18setContentsToMediaEPPv","__ZNK7WebCore13GraphicsLayer28shouldDirectlyCompositeImageEPNS_5ImageE","__ZN7WebCore13GraphicsLayer14setDebugBorderERKNS_5ColorEf","__ZN7WebCore13GraphicsLayer21setAcceleratesDrawingEb","__ZNK7WebCore13GraphicsLayer11hasAncestorEPS0_","__ZN7WebCore13GraphicsLayer26setContentsToPlatformLayerEPPv","__ZN7WebCore13GraphicsLayerC2EPNS_19GraphicsLayerClientE","__ZN7WebCore13GraphicsLayerD0Ev","__ZNK7WebCore13GraphicsLayer23maintainsPixelAlignmentEv","__ZNK7WebCore13GraphicsLayer14dumpPropertiesERNS_10TextStreamEij","__ZN7WebCore13GraphicsLayer18setOpacityInternalEf","__ZN7WebCore13GraphicsLayer26paintGraphicsLayerContentsERNS_15GraphicsContextERKNS_7IntRectE","__ZN7WebCore13GraphicsLayer13addChildAboveEPS0_S1_","__ZN7WebCore13GraphicsLayer15removeAnimationERKN3WTF6StringE","__ZN7WebCore13GraphicsLayer21setShowRepaintCounterEb","__ZN7WebCore13GraphicsLayer16setMasksToBoundsEb","__ZN3WTF6VectorINS_6OwnPtrIKN7WebCore14AnimationValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore13GraphicsLayer15layerDidDisplayEPPv","__ZNK7WebCore13GraphicsLayer12tiledBackingEv","__ZN7WebCore13GraphicsLayer10initializeEv","__ZN7WebCore13GraphicsLayer12replaceChildEPS0_S1_","__ZN7WebCore13GraphicsLayer11setChildrenERKN3WTF6VectorIPS0_Lj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore13GraphicsLayer12syncPositionERKNS_10FloatPointE","__ZN3WTF7HashMapIPKN7WebCore13GraphicsLayerENS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE6removeERKS4_","__ZN7WebCore13GraphicsLayer27validateTransformOperationsERKNS_17KeyframeValueListERb","__ZNK7WebCore13GraphicsLayer18getDebugBorderInfoERNS_5ColorERf","__ZN7WebCore13GraphicsLayer18setBackgroundColorERKNS_5ColorE","__ZN7WebCore13GraphicsLayer22setContentsOrientationENS0_33CompositingCoordinatesOrientationE","__ZNK7WebCore13GraphicsLayer26backingStoreMemoryEstimateEv","__ZNK7WebCore13GraphicsLayer9dumpLayerERNS_10TextStreamEij","__ZN3WTF6VectorIN7WebCore9FloatRectELj0ENS_15CrashOnOverflowEEaSERKS4_","__ZN7WebCore13GraphicsLayer7setSizeERKNS_9FloatSizeE","__ZN7WebCore13GraphicsLayer21updateDebugIndicatorsEv","__ZN7WebCore13GraphicsLayer20resetTrackedRepaintsEv","__ZNK7WebCore13GraphicsLayer16appliesPageScaleEv","__ZN7WebCore13GraphicsLayer14setAnchorPointERKNS_12FloatPoint3DE","__ZN7WebCore13GraphicsLayer19setCustomAppearanceENS0_16CustomAppearanceE","__ZN7WebCore13GraphicsLayer12setZPositionEf","__ZN7WebCore13GraphicsLayerD2Ev","__ZN7WebCore13GraphicsLayer8addChildEPS0_","__ZN7WebCore13GraphicsLayer14pauseAnimationERKN3WTF6StringEd","__ZN7WebCore13GraphicsLayer16removeFromParentEv","__ZN7WebCore13GraphicsLayer37flushCompositingStateForThisLayerOnlyEv","_memset","__ZN7WebCore13GraphicsLayer15setDrawsContentEb","__ZN7WebCore13GraphicsLayer15addChildAtIndexEPS0_i","__ZN7WebCore13GraphicsLayer10setOpacityEf","__ZNK7WebCore13GraphicsLayer30visibleRectChangeRequiresFlushERKNS_9FloatRectE","__ZN7WebCore13GraphicsLayer20setReplicatedByLayerEPS0_","__ZNK7WebCore13GraphicsLayer9zPositionEv","__ZNK3WTF7HashMapIPKN7WebCore13GraphicsLayerENS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE3getERKS4_","__ZN7WebCore13GraphicsLayer11setPositionERKNS_10FloatPointE","__ZN7WebCore13GraphicsLayer21flushCompositingStateERKNS_9FloatRectE","__ZN7WebCore13GraphicsLayer26setMaintainsPixelAlignmentEb","_memcmp","__ZN7WebCore13GraphicsLayer7setNameERKN3WTF6StringE","__ZN7WebCore13GraphicsLayer18setContentsToImageEPNS_5ImageE","__ZN7WebCore13GraphicsLayer23setContentsToSolidColorERKNS_5ColorE","__ZN7WebCore13GraphicsLayer13addChildBelowEPS0_S1_","__ZN7WebCore13GraphicsLayer18setShowDebugBorderEb","__ZN7WebCore13GraphicsLayer12setTransformERKNS_20TransformationMatrixE","__ZN7WebCore13GraphicsLayer19setAppliesPageScaleEb","_memmove","__ZN3WTF6VectorIN7WebCore9FloatRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore13GraphicsLayer15setContentsRectERKNS_7IntRectE","__ZNK7WebCore13GraphicsLayer17isGraphicsLayerCAEv","__ZN7WebCore13GraphicsLayer12addAnimationERKNS_17KeyframeValueListERKNS_7IntSizeEPKNS_9AnimationERKN3WTF6StringEd","__ZNK7WebCore13GraphicsLayer18accumulatedOpacityEv","__ZNK7WebCore13GraphicsLayer15layerTreeAsTextEj","__ZN7WebCore13GraphicsLayer18setReplicatedLayerEPS0_","__ZN7WebCore13GraphicsLayer23setDebugBackgroundColorERKNS_5ColorE","__ZNK7WebCore13GraphicsLayer16hasContentsLayerEv","__ZNK7WebCore13GraphicsLayer23isGraphicsLayerCARemoteEv","__ZN7WebCore13GraphicsLayer24validateFilterOperationsERKNS_17KeyframeValueListE","__ZN7WebCore17KeyframeValueList6insertEN3WTF10PassOwnPtrIKNS_14AnimationValueEEE","__ZN7WebCore13GraphicsLayer15setBoundsOriginERKNS_10FloatPointE","__ZN7WebCore13GraphicsLayer16resumeAnimationsEv","__ZNK7WebCore13GraphicsLayer25shouldRepaintOnSizeChangeEv","__ZN7WebCore13GraphicsLayer15willBeDestroyedEv","__ZN7WebCore13GraphicsLayer17setContentsOpaqueEb","__ZN7WebCore13GraphicsLayer19setContentsTileSizeERKNS_7IntSizeE","__ZNK7WebCore13GraphicsLayer14primaryLayerIDEv","__ZN7WebCore13GraphicsLayer9setParentEPS0_","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore13GraphicsLayer20setChildrenTransformERKNS_20TransformationMatrixE","__ZN7WebCore13GraphicsLayer14addRepaintRectERKNS_9FloatRectE","__ZN7WebCore13GraphicsLayer19setContentsToCanvasEPPv","__ZN3WTF9HashTableIPKN7WebCore13GraphicsLayerENS_12KeyValuePairIS4_NS_6VectorINS1_9FloatRectELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_7HashMapIS4_S9_SE_NS_10HashTraitsIS4_EENSG_IS9_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_RS9_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SA_SC_SE_SK_SH_EEEEOT0_OT1_","__ZN7WebCore13GraphicsLayer30deviceOrPageScaleFactorChangedEv","__ZN7WebCore13GraphicsLayer54noteDeviceOrPageScaleFactorChangedIncludingDescendantsEv","__ZN7WebCore13GraphicsLayer23setContentsNeedsDisplayEv","__ZNK7WebCore13GraphicsLayer13platformLayerEv","__ZNK7WebCore13GraphicsLayer24dumpAdditionalPropertiesERNS_10TextStreamEij","__ZN7WebCore13GraphicsLayer12setMaskLayerEPS0_"]

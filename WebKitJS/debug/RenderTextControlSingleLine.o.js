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
H_BASE = parentModule["_malloc"](1248 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1248;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore27RenderTextControlSingleLineC1ERNS_16HTMLInputElementEN3WTF7PassRefINS_11RenderStyleEEE;
var __ZN7WebCore27RenderTextControlSingleLineD1Ev;
/* memory initializer */ allocate([82,101,110,100,101,114,84,101,120,116,67,111,110,116,114,111,108,0,0,0,0,0,0,0,76,117,99,105,100,97,32,71,114,97,110,100,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  try {
    Module["dynCall_viiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_fii(index,a1,a2) {
  try {
    return Module["dynCall_fii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
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
function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    return Module["dynCall_iiiiiii"](index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiifi(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiifi"](index,a1,a2,a3,a4,a5);
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
function invoke_viif(index,a1,a2,a3) {
  try {
    Module["dynCall_viif"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
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
  var __ZTVN7WebCore27RenderTextControlSingleLineE=(H_BASE+48)|0;
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
  var invoke_viiiiiiiiii=env.invoke_viiiiiiiiii;
  var invoke_fii=env.invoke_fii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_iiiifi=env.invoke_iiiifi;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viif=env.invoke_viif;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var ___setErrNo=env.___setErrNo;
  var _malloc=env._malloc;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore27RenderTextControlSingleLine6layoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, d47 = +0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 208 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 72 | 0;
 i13 = i2 + 80 | 0;
 i14 = i2 + 88 | 0;
 i15 = i2 + 96 | 0;
 i16 = i2 + 104 | 0;
 i17 = i2 + 112 | 0;
 i18 = i2 + 120 | 0;
 i19 = i2 + 128 | 0;
 i20 = i2 + 136 | 0;
 i21 = i2 + 144 | 0;
 i22 = i2 + 152 | 0;
 i23 = i2 + 160 | 0;
 i24 = i2 + 168 | 0;
 i25 = i2 + 176 | 0;
 i26 = i2 + 184 | 0;
 i27 = i2 + 192 | 0;
 i28 = i2 + 200 | 0;
 i29 = i28;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i31 = i30;
 i32 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i33 = i1 | 0;
 i34 = __ZNK7WebCore27TextControlInnerTextElement8rendererEv(__ZNK7WebCore17RenderTextControl16innerTextElementEv(i33) | 0) | 0;
 if ((__ZNK7WebCore16HTMLInputElement17innerBlockElementEv(__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i33) | 0) | 0) == 0) {
  i35 = 0;
 } else {
  i35 = __ZNK7WebCore4Node9renderBoxEv(__ZNK7WebCore16HTMLInputElement17innerBlockElementEv(__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i33) | 0) | 0) | 0;
 }
 i36 = (i34 | 0) != 0;
 do {
  if (i36) {
   i37 = HEAP32[i34 + 36 >> 2] | 0;
   i38 = (HEAP32[i37 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i38 | 0) == 3 | (i38 | 0) == 0) {
    i39 = (HEAP32[i37 + 4 >> 2] | 0) + 12 | 0;
   } else {
    i39 = (HEAP32[i37 + 4 >> 2] | 0) + 4 | 0;
   }
   if ((HEAP8[i39 + 5 | 0] | 0) == 0) {
    break;
   }
   _memset(i10 | 0, 0, 7) | 0;
   __ZN7WebCore11RenderStyle16setLogicalHeightENS_6LengthE(i37, i10);
   if ((HEAP8[i10 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i10);
   }
   i37 = i34 | 0;
   i38 = i1 | 0;
   if ((i37 | 0) == (i38 | 0)) {
    break;
   } else {
    i40 = i37;
   }
   while (1) {
    i37 = i40 + 20 | 0;
    i41 = HEAP32[i37 >> 2] | 0;
    do {
     if ((i41 & 1 | 0) == 0) {
      HEAP32[i37 >> 2] = i41 | 1;
      if ((i41 & 32768 | 0) == 0) {
       break;
      }
      __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i40);
     }
    } while (0);
    i40 = HEAP32[i40 + 8 >> 2] | 0;
    if ((i40 | 0) == (i38 | 0)) {
     break;
    }
   }
  }
 } while (0);
 i40 = (i35 | 0) != 0;
 do {
  if (i40) {
   i10 = HEAP32[i35 + 36 >> 2] | 0;
   i39 = (HEAP32[i10 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i39 | 0) == 3 | (i39 | 0) == 0) {
    i42 = (HEAP32[i10 + 4 >> 2] | 0) + 12 | 0;
   } else {
    i42 = (HEAP32[i10 + 4 >> 2] | 0) + 4 | 0;
   }
   if ((HEAP8[i42 + 5 | 0] | 0) == 0) {
    break;
   }
   _memset(i11 | 0, 0, 7) | 0;
   __ZN7WebCore11RenderStyle16setLogicalHeightENS_6LengthE(i10, i11);
   if ((HEAP8[i11 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
   }
   i10 = i35 | 0;
   i39 = i1 | 0;
   if ((i10 | 0) == (i39 | 0)) {
    break;
   } else {
    i43 = i10;
   }
   while (1) {
    i10 = i43 + 20 | 0;
    i38 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i38 & 1 | 0) == 0) {
      HEAP32[i10 >> 2] = i38 | 1;
      if ((i38 & 32768 | 0) == 0) {
       break;
      }
      __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i43);
     }
    } while (0);
    i43 = HEAP32[i43 + 8 >> 2] | 0;
    if ((i43 | 0) == (i39 | 0)) {
     break;
    }
   }
  }
 } while (0);
 i43 = i1 | 0;
 HEAP32[i12 >> 2] = 0;
 __ZN7WebCore15RenderBlockFlow11layoutBlockEbNS_10LayoutUnitE(i43, 0, i12);
 i12 = __ZNK7WebCore16HTMLInputElement16containerElementEv(__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i33) | 0) | 0;
 i11 = (i12 | 0) != 0;
 if (i11) {
  i44 = __ZNK7WebCore4Node9renderBoxEv(i12 | 0) | 0;
 } else {
  i44 = 0;
 }
 i12 = __ZNK7WebCore17RenderTextControl22textBlockLogicalHeightEv(i33) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1184 >> 2] & 127](i13, i1);
 do {
  if (i36) {
   i42 = i34 + 36 | 0;
   i39 = (HEAP32[(HEAP32[i42 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i39 | 0) == 3 | (i39 | 0) == 0) {
    i45 = i34 + 56 | 0;
   } else {
    i45 = i34 + 52 | 0;
   }
   if ((HEAP32[i45 >> 2] | 0) <= (HEAP32[i13 >> 2] | 0)) {
    break;
   }
   if ((i39 | 0) == 3 | (i39 | 0) == 0) {
    i46 = i34 + 56 | 0;
   } else {
    i46 = i34 + 52 | 0;
   }
   do {
    if ((i12 | 0) != (HEAP32[i46 >> 2] | 0)) {
     i39 = i1 + 20 | 0;
     i38 = HEAP32[i39 >> 2] | 0;
     if ((i38 & 1 | 0) != 0) {
      break;
     }
     HEAP32[i39 >> 2] = i38 | 1;
     if ((i38 & 32768 | 0) == 0) {
      break;
     }
     __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i1 | 0);
    }
   } while (0);
   HEAP32[i1 + 120 >> 2] = i12;
   i38 = HEAP32[i42 >> 2] | 0;
   d47 = +(i12 | 0);
   HEAPF32[i14 >> 2] = d47;
   HEAP8[i14 + 4 | 0] = 0;
   i39 = i14 + 5 | 0;
   HEAP8[i39] = 3;
   HEAP8[i14 + 6 | 0] = 1;
   __ZN7WebCore11RenderStyle16setLogicalHeightENS_6LengthE(i38, i14);
   if ((HEAP8[i39] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i14);
   }
   i39 = i34 | 0;
   i38 = i34 + 20 | 0;
   i10 = HEAP32[i38 >> 2] | 0;
   do {
    if ((i10 & 1 | 0) == 0) {
     HEAP32[i38 >> 2] = i10 | 1;
     if ((i10 & 32768 | 0) == 0) {
      break;
     }
     __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i39);
    }
   } while (0);
   if (!i40) {
    break;
   }
   i39 = HEAP32[i35 + 36 >> 2] | 0;
   HEAPF32[i15 >> 2] = d47;
   HEAP8[i15 + 4 | 0] = 0;
   i10 = i15 + 5 | 0;
   HEAP8[i10] = 3;
   HEAP8[i15 + 6 | 0] = 1;
   __ZN7WebCore11RenderStyle16setLogicalHeightENS_6LengthE(i39, i15);
   if ((HEAP8[i10] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i15);
   }
   i10 = i35 + 20 | 0;
   i39 = HEAP32[i10 >> 2] | 0;
   if ((i39 & 1 | 0) != 0) {
    break;
   }
   HEAP32[i10 >> 2] = i39 | 1;
   if ((i39 & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i35 | 0);
  }
 } while (0);
 i35 = (i44 | 0) != 0;
 do {
  if (i35) {
   if ((HEAP32[i44 + 20 >> 2] & 31 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i44 >> 2] | 0) + 652 >> 2] & 63](i44 | 0);
   }
   i15 = i44 + 36 | 0;
   i40 = HEAP32[i15 >> 2] | 0;
   i14 = (HEAP32[i40 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i14 | 0) == 3 | (i14 | 0) == 0) {
    i48 = i44 + 56 | 0;
   } else {
    i48 = i44 + 52 | 0;
   }
   i12 = HEAP32[i48 >> 2] | 0;
   i46 = HEAP32[i13 >> 2] | 0;
   if ((i12 | 0) > (i46 | 0)) {
    HEAPF32[i16 >> 2] = +(i46 | 0);
    HEAP8[i16 + 4 | 0] = 0;
    i46 = i16 + 5 | 0;
    HEAP8[i46] = 3;
    HEAP8[i16 + 6 | 0] = 1;
    __ZN7WebCore11RenderStyle16setLogicalHeightENS_6LengthE(i40, i16);
    if ((HEAP8[i46] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i16);
    }
    i46 = i1 + 20 | 0;
    i40 = HEAP32[i46 >> 2] | 0;
    if ((i40 & 1 | 0) != 0) {
     break;
    }
    HEAP32[i46 >> 2] = i40 | 1;
    if ((i40 & 32768 | 0) == 0) {
     break;
    }
    __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i1 | 0);
    break;
   }
   if ((i14 | 0) == 3 | (i14 | 0) == 0) {
    i49 = i44 + 56 | 0;
   } else {
    i49 = i44 + 52 | 0;
   }
   i14 = HEAP32[i49 >> 2] | 0;
   i40 = i1 | 0;
   __ZNK7WebCore9RenderBox20contentLogicalHeightEv(i17, i40);
   i46 = HEAP32[i15 >> 2] | 0;
   if ((i14 | 0) >= (HEAP32[i17 >> 2] | 0)) {
    HEAPF32[i20 >> 2] = +(i12 | 0);
    HEAP8[i20 + 4 | 0] = 0;
    i12 = i20 + 5 | 0;
    HEAP8[i12] = 3;
    HEAP8[i20 + 6 | 0] = 1;
    __ZN7WebCore11RenderStyle16setLogicalHeightENS_6LengthE(i46, i20);
    if ((HEAP8[i12] | 0) != 10) {
     break;
    }
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i20);
    break;
   }
   __ZNK7WebCore9RenderBox20contentLogicalHeightEv(i19, i40);
   HEAPF32[i18 >> 2] = +(HEAP32[i19 >> 2] | 0);
   HEAP8[i18 + 4 | 0] = 0;
   i40 = i18 + 5 | 0;
   HEAP8[i40] = 3;
   HEAP8[i18 + 6 | 0] = 1;
   __ZN7WebCore11RenderStyle16setLogicalHeightENS_6LengthE(i46, i18);
   if ((HEAP8[i40] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i18);
   }
   i40 = i1 + 20 | 0;
   i46 = HEAP32[i40 >> 2] | 0;
   if ((i46 & 1 | 0) != 0) {
    break;
   }
   HEAP32[i40 >> 2] = i46 | 1;
   if ((i46 & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i1 | 0);
  }
 } while (0);
 if ((HEAP32[i1 + 20 >> 2] & 31 | 0) != 0) {
  HEAP32[i21 >> 2] = 0;
  __ZN7WebCore15RenderBlockFlow11layoutBlockEbNS_10LayoutUnitE(i43, 1, i21);
 }
 do {
  if (i11 | i36 ^ 1) {
   i50 = 87;
  } else {
   i21 = i34 + 56 | 0;
   i18 = HEAP32[i21 >> 2] | 0;
   i19 = i1 | 0;
   __ZNK7WebCore9RenderBox20contentLogicalHeightEv(i22, i19);
   if ((i18 | 0) == (HEAP32[i22 >> 2] | 0)) {
    i50 = 87;
    break;
   }
   i18 = i34 + 36 | 0;
   i20 = (HEAP32[(HEAP32[i18 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i20 | 0) == 3 | (i20 | 0) == 0) {
    i51 = i21;
   } else {
    i51 = i34 + 52 | 0;
   }
   i21 = HEAP32[i51 >> 2] | 0;
   __ZNK7WebCore9RenderBox20contentLogicalHeightEv(i23, i19);
   i19 = i21 - (HEAP32[i23 >> 2] | 0) | 0;
   i21 = (HEAP32[(HEAP32[i18 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i21 | 0) == 3 | (i21 | 0) == 0) {
    i52 = i34 + 48 | 0;
   } else {
    i52 = i34 + 44 | 0;
   }
   i18 = ((i19 | 0) / -2 & -1) + (HEAP32[i52 >> 2] | 0) - ((i19 | 0) % 2 & -1) | 0;
   if ((i21 | 0) == 3 | (i21 | 0) == 0) {
    HEAP32[i34 + 48 >> 2] = i18;
    break;
   } else {
    HEAP32[i34 + 44 >> 2] = i18;
    break;
   }
  }
 } while (0);
 if ((i50 | 0) == 87) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1180 >> 2] & 127](i1, i44);
 }
 do {
  if ((__ZNK7WebCore16HTMLInputElement22innerSpinButtonElementEv(__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i33) | 0) | 0) != 0) {
   i52 = __ZNK7WebCore4Node9renderBoxEv(__ZNK7WebCore16HTMLInputElement22innerSpinButtonElementEv(__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i33) | 0) | 0) | 0;
   if ((i52 | 0) == 0) {
    break;
   }
   i23 = HEAP32[i52 + 8 >> 2] | 0;
   do {
    if (i35) {
     if ((HEAP32[(HEAP32[i44 + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0) {
      i50 = 98;
      break;
     }
     i51 = i1 | 0;
     i22 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     i11 = i1;
     i18 = HEAP32[i11 >> 2] | 0;
     if ((i22 | 0) == 3 | (i22 | 0) == 0) {
      FUNCTION_TABLE_vii[HEAP32[i18 + 712 >> 2] & 127](i24, i51);
     } else {
      FUNCTION_TABLE_vii[HEAP32[i18 + 704 >> 2] & 127](i24, i51);
     }
     i18 = -(HEAP32[i24 >> 2] | 0) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 720 >> 2] & 127](i25, i51);
     i51 = -(HEAP32[i25 >> 2] | 0) | 0;
     i11 = (HEAP32[(HEAP32[i52 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     if ((i11 | 0) == 3 | (i11 | 0) == 0) {
      i11 = i52 + 44 | 0;
      HEAP32[i11 >> 2] = i18;
      HEAP32[i11 + 4 >> 2] = i51;
      break;
     } else {
      i11 = i52 + 44 | 0;
      HEAP32[i11 >> 2] = i51;
      HEAP32[i11 + 4 >> 2] = i18;
      break;
     }
    } else {
     i50 = 98;
    }
   } while (0);
   do {
    if ((i50 | 0) == 98) {
     i18 = (HEAP32[(HEAP32[i23 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     if ((i18 | 0) == 3 | (i18 | 0) == 0) {
      i53 = i23 + 52 | 0;
     } else {
      i53 = i23 + 56 | 0;
     }
     i18 = i52 + 36 | 0;
     i11 = (HEAP32[(HEAP32[i18 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     if ((i11 | 0) == 3 | (i11 | 0) == 0) {
      i54 = i52 + 52 | 0;
     } else {
      i54 = i52 + 56 | 0;
     }
     i11 = (HEAP32[i53 >> 2] | 0) - (HEAP32[i54 >> 2] | 0) | 0;
     i51 = i1 | 0;
     i22 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     i21 = i1;
     i19 = HEAP32[i21 >> 2] | 0;
     if ((i22 | 0) == 3 | (i22 | 0) == 0) {
      FUNCTION_TABLE_vii[HEAP32[i19 + 716 >> 2] & 127](i26, i51);
     } else {
      FUNCTION_TABLE_vii[HEAP32[i19 + 708 >> 2] & 127](i26, i51);
     }
     i19 = (HEAP32[i26 >> 2] | 0) + i11 | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 720 >> 2] & 127](i27, i51);
     i51 = -(HEAP32[i27 >> 2] | 0) | 0;
     i21 = (HEAP32[(HEAP32[i18 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     if ((i21 | 0) == 3 | (i21 | 0) == 0) {
      i21 = i52 + 44 | 0;
      HEAP32[i21 >> 2] = i19;
      HEAP32[i21 + 4 >> 2] = i51;
      break;
     } else {
      i21 = i52 + 44 | 0;
      HEAP32[i21 >> 2] = i51;
      HEAP32[i21 + 4 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i23 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i23 | 0) == 3 | (i23 | 0) == 0) {
    i55 = i1 + 56 | 0;
   } else {
    i55 = i1 + 52 | 0;
   }
   i23 = HEAP32[i55 >> 2] | 0;
   i19 = i1 | 0;
   i21 = i1;
   i51 = i23 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 752 >> 2] & 511](i19) | 0) | 0;
   i23 = i51 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 756 >> 2] & 511](i19) | 0) | 0;
   i19 = (HEAP32[(HEAP32[i52 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i19 | 0) == 3 | (i19 | 0) == 0) {
    HEAP32[i52 + 56 >> 2] = i23;
    break;
   } else {
    HEAP32[i52 + 52 >> 2] = i23;
    break;
   }
  }
 } while (0);
 i55 = __ZNK7WebCore17RenderTextControl22textFormControlElementEv(i33) | 0;
 i27 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i55 >> 2] | 0) + 712 >> 2] & 511](i55) | 0;
 if ((i27 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i55 = __ZNK7WebCore4Node9renderBoxEv(i27 | 0) | 0;
 if ((i55 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if (i36) {
  i27 = i34 + 52 | 0;
  i56 = HEAP32[i27 >> 2] | 0;
  i57 = HEAP32[i27 + 4 >> 2] | 0;
 } else {
  i56 = 0;
  i57 = 0;
 }
 i27 = i55 | 0;
 i26 = i55 + 36 | 0;
 i54 = HEAP32[i26 >> 2] | 0;
 i53 = i55 | 0;
 i25 = i55;
 i24 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 744 >> 2] & 511](i53) | 0;
 i23 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 748 >> 2] & 511](i53) | 0;
 i19 = i55;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 712 >> 2] & 127](i3, i53);
 i21 = HEAP32[i3 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 716 >> 2] & 127](i4, i53);
 HEAPF32[i28 >> 2] = +(i56 - i24 - i23 - i21 - (HEAP32[i4 >> 2] | 0) | 0);
 HEAP8[i29 + 4 | 0] = 0;
 i4 = i29 + 5 | 0;
 HEAP8[i4] = 3;
 HEAP8[i29 + 6 | 0] = 1;
 i21 = i54 + 4 | 0;
 do {
  if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i21 >> 2] | 0) + 4 | 0, i29) | 0) {
   i50 = 128;
  } else {
   i54 = HEAP32[i21 >> 2] | 0;
   if ((HEAP32[i54 >> 2] | 0) == 1) {
    i58 = i54;
   } else {
    __ZNK7WebCore12StyleBoxData4copyEv(i5, i54);
    i54 = HEAP32[i5 >> 2] | 0;
    i23 = HEAP32[i21 >> 2] | 0;
    i24 = i23 | 0;
    i56 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
    if ((i56 | 0) == 0) {
     __ZN7WebCore12StyleBoxDataD2Ev(i23);
     __ZN3WTF8fastFreeEPv(i23);
    } else {
     HEAP32[i24 >> 2] = i56;
    }
    HEAP32[i21 >> 2] = i54;
    i58 = i54;
   }
   i54 = i58 + 4 | 0;
   if ((i54 | 0) == (i29 | 0)) {
    i50 = 128;
    break;
   }
   i56 = i54;
   i54 = HEAP32[i28 + 4 >> 2] | 0;
   HEAP32[i56 >> 2] = HEAP32[i28 >> 2];
   HEAP32[i56 + 4 >> 2] = i54;
   HEAP8[i4] = 0;
  }
 } while (0);
 do {
  if ((i50 | 0) == 128) {
   if ((HEAP8[i4] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i29);
  }
 } while (0);
 i29 = HEAP32[i26 >> 2] | 0;
 i26 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 736 >> 2] & 511](i53) | 0;
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 740 >> 2] & 511](i53) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 704 >> 2] & 127](i6, i53);
 i25 = HEAP32[i6 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 708 >> 2] & 127](i7, i53);
 HEAPF32[i30 >> 2] = +(i57 - i26 - i4 - i25 - (HEAP32[i7 >> 2] | 0) | 0);
 HEAP8[i31 + 4 | 0] = 0;
 i7 = i31 + 5 | 0;
 HEAP8[i7] = 3;
 HEAP8[i31 + 6 | 0] = 1;
 i25 = i29 + 4 | 0;
 do {
  if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i25 >> 2] | 0) + 12 | 0, i31) | 0) {
   i50 = 138;
  } else {
   i29 = HEAP32[i25 >> 2] | 0;
   if ((HEAP32[i29 >> 2] | 0) == 1) {
    i59 = i29;
   } else {
    __ZNK7WebCore12StyleBoxData4copyEv(i8, i29);
    i29 = HEAP32[i8 >> 2] | 0;
    i4 = HEAP32[i25 >> 2] | 0;
    i26 = i4 | 0;
    i57 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
    if ((i57 | 0) == 0) {
     __ZN7WebCore12StyleBoxDataD2Ev(i4);
     __ZN3WTF8fastFreeEPv(i4);
    } else {
     HEAP32[i26 >> 2] = i57;
    }
    HEAP32[i25 >> 2] = i29;
    i59 = i29;
   }
   i29 = i59 + 12 | 0;
   if ((i29 | 0) == (i31 | 0)) {
    i50 = 138;
    break;
   }
   i57 = i29;
   i29 = HEAP32[i30 + 4 >> 2] | 0;
   HEAP32[i57 >> 2] = HEAP32[i30 >> 2];
   HEAP32[i57 + 4 >> 2] = i29;
   HEAP8[i7] = 0;
  }
 } while (0);
 do {
  if ((i50 | 0) == 138) {
   if ((HEAP8[i7] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i31);
  }
 } while (0);
 i31 = i55 | 0;
 i7 = HEAP32[i55 + 20 >> 2] | 0;
 if ((i7 & 29 | 0) == 0) {
  i60 = (i7 & 2 | 0) != 0;
 } else {
  i60 = 1;
 }
 i50 = (i7 & 1048576 | 0) == 0;
 if ((i7 & 31 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i55 >> 2] | 0) + 652 >> 2] & 63](i27);
 }
 if (i36) {
  i36 = i34 + 44 | 0;
  i61 = HEAP32[i36 >> 2] | 0;
  i62 = HEAP32[i36 + 4 >> 2] | 0;
 } else {
  i61 = 0;
  i62 = 0;
 }
 do {
  if ((__ZNK7WebCore16HTMLInputElement17innerBlockElementEv(__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i33) | 0) | 0) == 0) {
   i63 = i61;
   i64 = i62;
  } else {
   if ((__ZNK7WebCore4Node9renderBoxEv(__ZNK7WebCore16HTMLInputElement17innerBlockElementEv(__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i33) | 0) | 0) | 0) == 0) {
    i63 = i61;
    i64 = i62;
    break;
   }
   i36 = (__ZNK7WebCore4Node9renderBoxEv(__ZNK7WebCore16HTMLInputElement17innerBlockElementEv(__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i33) | 0) | 0) | 0) + 44 | 0;
   i63 = (HEAP32[i36 >> 2] | 0) + i61 | 0;
   i64 = (HEAP32[i36 + 4 >> 2] | 0) + i62 | 0;
  }
 } while (0);
 if (i35) {
  i35 = i44 + 44 | 0;
  i65 = (HEAP32[i35 >> 2] | 0) + i63 | 0;
  i66 = (HEAP32[i35 + 4 >> 2] | 0) + i64 | 0;
 } else {
  i65 = i63;
  i66 = i64;
 }
 i64 = i55 + 44 | 0;
 HEAP32[i64 >> 2] = i65;
 HEAP32[i64 + 4 >> 2] = i66;
 do {
  if (i50) {
   if (!(__ZNK7WebCore12RenderObject27checkForRepaintDuringLayoutEv(i31) | 0)) {
    break;
   }
   __ZNK7WebCore12RenderObject7repaintEb(i31, 0);
  }
 } while (0);
 if (!i60) {
  STACKTOP = i2;
  return;
 }
 i60 = HEAP32[i1 >> 2] | 0;
 i31 = HEAP32[i60 + 1048 >> 2] | 0;
 i50 = i1 | 0;
 i66 = FUNCTION_TABLE_ii[HEAP32[i60 + 752 >> 2] & 511](i1 | 0) | 0;
 i60 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i60 | 0) == 3 | (i60 | 0) == 0) {
  __ZNK7WebCore9RenderBox12clientHeightEv(i9, i50);
 } else {
  __ZNK7WebCore9RenderBox11clientWidthEv(i9, i50);
 }
 HEAP32[i32 >> 2] = (HEAP32[i9 >> 2] | 0) + i66;
 FUNCTION_TABLE_viii[i31 & 127](i43, i32, 0);
 STACKTOP = i2;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 242;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 274;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 284;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 258;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 214;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 254;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 234;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 224;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 278;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 282;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 252;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 256;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 268;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 266;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 220;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 218;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 232;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 240;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 248;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 264;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 216;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_ii + 244;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vii + 96;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_iiiiii + 6;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_ii + 260;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_vii + 86;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_viii + 34;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_viii + 28;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_viii + 46;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_viii + 66;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_viiii + 18;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_viiii + 26;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_ii + 250;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_ii + 276;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_ii + 280;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_viii + 56;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_viiiii + 12;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_iiii + 10;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_viiii + 20;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_ii + 236;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_viii + 54;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_viii + 40;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_ii + 238;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_ii + 212;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_vii + 98;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_vii + 88;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_vii + 80;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_vii + 76;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_ii + 262;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_ii + 270;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_ii + 210;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_ii + 226;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_vii + 94;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_viii + 32;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_viii + 44;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_vii + 84;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_viiiii + 8;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_vii + 92;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_ii + 230;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_vii + 90;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_ii + 272;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_vii + 74;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_vii + 82;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_vii + 100;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_viii + 36;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_iiiifi + 4;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_iiiifi + 2;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_ii + 228;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 984 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 988 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_viiiii + 18;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_ii + 246;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_viii + 38;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_viii + 64;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_viii + 48;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_viiii + 16;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_ii + 222;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 1052 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 1056 >> 2] = F_BASE_iiii + 8;
 HEAP32[H_BASE + 1060 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 1064 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 1068 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 1072 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 1076 >> 2] = F_BASE_viii + 50;
 HEAP32[H_BASE + 1080 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 1084 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 1088 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 1092 >> 2] = F_BASE_viiiii + 16;
 HEAP32[H_BASE + 1096 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 1100 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 1104 >> 2] = F_BASE_viii + 62;
 HEAP32[H_BASE + 1108 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 1112 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 1116 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 1120 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 1124 >> 2] = F_BASE_viiiii + 14;
 HEAP32[H_BASE + 1128 >> 2] = F_BASE_viiiii + 10;
 HEAP32[H_BASE + 1132 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 1136 >> 2] = F_BASE_viii + 52;
 HEAP32[H_BASE + 1140 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 1144 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 1148 >> 2] = F_BASE_viiii + 24;
 HEAP32[H_BASE + 1152 >> 2] = F_BASE_viii + 58;
 HEAP32[H_BASE + 1156 >> 2] = F_BASE_iiiiiii + 6;
 HEAP32[H_BASE + 1160 >> 2] = F_BASE_iiiiii + 4;
 HEAP32[H_BASE + 1164 >> 2] = F_BASE_iiiiiii + 4;
 HEAP32[H_BASE + 1168 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 1172 >> 2] = F_BASE_viiiiiiiiii + 2;
 HEAP32[H_BASE + 1176 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 1180 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 1184 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 1188 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 1192 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 1196 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 1200 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 1204 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 1208 >> 2] = F_BASE_viiii + 14;
 HEAP32[H_BASE + 1212 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 1216 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 1220 >> 2] = F_BASE_viii + 60;
 HEAP32[H_BASE + 1224 >> 2] = F_BASE_fii + 2;
 HEAP32[H_BASE + 1228 >> 2] = F_BASE_viif + 2;
 HEAP32[H_BASE + 1232 >> 2] = F_BASE_viiii + 22;
 HEAP32[H_BASE + 1236 >> 2] = F_BASE_vii + 78;
 HEAP32[H_BASE + 1240 >> 2] = F_BASE_vii + 26;
}
function __ZN7WebCore27RenderTextControlSingleLine14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i9;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = i15;
 HEAP32[i1 + 120 >> 2] = -1;
 i17 = i1 | 0;
 __ZN7WebCore17RenderTextControl14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i17, i2, i3);
 i3 = __ZNK7WebCore16HTMLInputElement17innerBlockElementEv(__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i17) | 0) | 0;
 do {
  if ((i3 | 0) != 0) {
   i18 = i3 + 32 | 0;
   if ((HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0) {
    i19 = i18 | 0;
   } else {
    i19 = HEAP32[i18 >> 2] | 0;
   }
   i18 = HEAP32[i19 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   i20 = i18 + 20 | 0;
   if ((HEAP32[i20 >> 2] & 768 | 0) == 256) {
    i21 = HEAP32[(HEAP32[i18 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i21 = HEAP32[i18 + 36 >> 2] | 0;
   }
   _memset(i9 | 0, 0, 7) | 0;
   i22 = i21 + 4 | 0;
   do {
    if (!(__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i22 >> 2] | 0) + 12 | 0, i10) | 0)) {
     i23 = HEAP32[i22 >> 2] | 0;
     if ((HEAP32[i23 >> 2] | 0) == 1) {
      i24 = i23;
     } else {
      __ZNK7WebCore12StyleBoxData4copyEv(i8, i23);
      i23 = HEAP32[i8 >> 2] | 0;
      i25 = HEAP32[i22 >> 2] | 0;
      i26 = i25 | 0;
      i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
      if ((i27 | 0) == 0) {
       __ZN7WebCore12StyleBoxDataD2Ev(i25);
       __ZN3WTF8fastFreeEPv(i25);
      } else {
       HEAP32[i26 >> 2] = i27;
      }
      HEAP32[i22 >> 2] = i23;
      i24 = i23;
     }
     i23 = i24 + 12 | 0;
     if ((i23 | 0) == (i10 | 0)) {
      break;
     }
     i27 = i23;
     i23 = HEAP32[i9 + 4 >> 2] | 0;
     HEAP32[i27 >> 2] = HEAP32[i9 >> 2];
     HEAP32[i27 + 4 >> 2] = i23;
     HEAP8[i10 + 5 | 0] = 0;
    }
   } while (0);
   if ((HEAP8[i10 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i10);
   }
   if ((HEAP32[i20 >> 2] & 768 | 0) == 256) {
    i28 = HEAP32[(HEAP32[i18 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i28 = HEAP32[i18 + 36 >> 2] | 0;
   }
   _memset(i11 | 0, 0, 7) | 0;
   i22 = i28 + 4 | 0;
   do {
    if (!(__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i22 >> 2] | 0) + 4 | 0, i12) | 0)) {
     i23 = HEAP32[i22 >> 2] | 0;
     if ((HEAP32[i23 >> 2] | 0) == 1) {
      i29 = i23;
     } else {
      __ZNK7WebCore12StyleBoxData4copyEv(i7, i23);
      i23 = HEAP32[i7 >> 2] | 0;
      i27 = HEAP32[i22 >> 2] | 0;
      i26 = i27 | 0;
      i25 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
      if ((i25 | 0) == 0) {
       __ZN7WebCore12StyleBoxDataD2Ev(i27);
       __ZN3WTF8fastFreeEPv(i27);
      } else {
       HEAP32[i26 >> 2] = i25;
      }
      HEAP32[i22 >> 2] = i23;
      i29 = i23;
     }
     i23 = i29 + 4 | 0;
     if ((i23 | 0) == (i12 | 0)) {
      break;
     }
     i25 = i23;
     i23 = HEAP32[i11 + 4 >> 2] | 0;
     HEAP32[i25 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i25 + 4 >> 2] = i23;
     HEAP8[i12 + 5 | 0] = 0;
    }
   } while (0);
   if ((HEAP8[i12 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i12);
  }
 } while (0);
 i12 = __ZNK7WebCore16HTMLInputElement16containerElementEv(__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i17) | 0) | 0;
 do {
  if ((i12 | 0) != 0) {
   i11 = i12 + 32 | 0;
   if ((HEAP32[i12 + 12 >> 2] & 2048 | 0) == 0) {
    i30 = i11 | 0;
   } else {
    i30 = HEAP32[i11 >> 2] | 0;
   }
   i11 = HEAP32[i30 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i29 = i11 + 20 | 0;
   if ((HEAP32[i29 >> 2] & 768 | 0) == 256) {
    i31 = HEAP32[(HEAP32[i11 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i31 = HEAP32[i11 + 36 >> 2] | 0;
   }
   _memset(i13 | 0, 0, 7) | 0;
   i7 = i31 + 4 | 0;
   do {
    if (!(__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i7 >> 2] | 0) + 12 | 0, i14) | 0)) {
     i28 = HEAP32[i7 >> 2] | 0;
     if ((HEAP32[i28 >> 2] | 0) == 1) {
      i32 = i28;
     } else {
      __ZNK7WebCore12StyleBoxData4copyEv(i6, i28);
      i28 = HEAP32[i6 >> 2] | 0;
      i10 = HEAP32[i7 >> 2] | 0;
      i9 = i10 | 0;
      i24 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      if ((i24 | 0) == 0) {
       __ZN7WebCore12StyleBoxDataD2Ev(i10);
       __ZN3WTF8fastFreeEPv(i10);
      } else {
       HEAP32[i9 >> 2] = i24;
      }
      HEAP32[i7 >> 2] = i28;
      i32 = i28;
     }
     i28 = i32 + 12 | 0;
     if ((i28 | 0) == (i14 | 0)) {
      break;
     }
     i24 = i28;
     i28 = HEAP32[i13 + 4 >> 2] | 0;
     HEAP32[i24 >> 2] = HEAP32[i13 >> 2];
     HEAP32[i24 + 4 >> 2] = i28;
     HEAP8[i14 + 5 | 0] = 0;
    }
   } while (0);
   if ((HEAP8[i14 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i14);
   }
   if ((HEAP32[i29 >> 2] & 768 | 0) == 256) {
    i33 = HEAP32[(HEAP32[i11 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i33 = HEAP32[i11 + 36 >> 2] | 0;
   }
   _memset(i15 | 0, 0, 7) | 0;
   i7 = i33 + 4 | 0;
   do {
    if (!(__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i7 >> 2] | 0) + 4 | 0, i16) | 0)) {
     i28 = HEAP32[i7 >> 2] | 0;
     if ((HEAP32[i28 >> 2] | 0) == 1) {
      i34 = i28;
     } else {
      __ZNK7WebCore12StyleBoxData4copyEv(i5, i28);
      i28 = HEAP32[i5 >> 2] | 0;
      i24 = HEAP32[i7 >> 2] | 0;
      i9 = i24 | 0;
      i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      if ((i10 | 0) == 0) {
       __ZN7WebCore12StyleBoxDataD2Ev(i24);
       __ZN3WTF8fastFreeEPv(i24);
      } else {
       HEAP32[i9 >> 2] = i10;
      }
      HEAP32[i7 >> 2] = i28;
      i34 = i28;
     }
     i28 = i34 + 4 | 0;
     if ((i28 | 0) == (i16 | 0)) {
      break;
     }
     i10 = i28;
     i28 = HEAP32[i15 + 4 >> 2] | 0;
     HEAP32[i10 >> 2] = HEAP32[i15 >> 2];
     HEAP32[i10 + 4 >> 2] = i28;
     HEAP8[i16 + 5 | 0] = 0;
    }
   } while (0);
   if ((HEAP8[i16 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i16);
  }
 } while (0);
 i16 = __ZNK7WebCore27TextControlInnerTextElement8rendererEv(__ZNK7WebCore17RenderTextControl16innerTextElementEv(i17) | 0) | 0;
 do {
  if ((i16 | 0) != 0 & (i2 | 0) == 8) {
   i15 = i16 | 0;
   i34 = i16 + 20 | 0;
   i5 = HEAP32[i34 >> 2] | 0;
   if ((i5 & 1 | 0) != 0) {
    break;
   }
   HEAP32[i34 >> 2] = i5 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i15, 1, 0);
   if ((HEAP32[i34 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i15);
  }
 } while (0);
 i16 = __ZNK7WebCore17RenderTextControl22textFormControlElementEv(i17) | 0;
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 712 >> 2] & 511](i16) | 0;
 if ((i2 | 0) == 0) {
  i35 = i1 + 20 | 0;
  i36 = i35;
  i37 = HEAP32[i36 >> 2] | 0;
  i38 = i37 & -65537;
  HEAP32[i36 >> 2] = i38;
  STACKTOP = i4;
  return;
 }
 i16 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 680 >> 2] | 0;
 if ((i16 | 0) == (__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i17) | 0)) {
  i39 = 410;
 } else {
  i39 = (HEAP32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] | 0) >>> 25 & 1 | 410;
 }
 __ZN7WebCore13StyledElement22setInlineStylePropertyENS_13CSSPropertyIDENS_10CSSValueIDEb(i2 | 0, 140, i39, 0) | 0;
 i35 = i1 + 20 | 0;
 i36 = i35;
 i37 = HEAP32[i36 >> 2] | 0;
 i38 = i37 & -65537;
 HEAP32[i36 >> 2] = i38;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore27RenderTextControlSingleLine20createInnerTextStyleEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 __ZN7WebCore11RenderStyle6createEv(i1);
 i10 = i1 | 0;
 __ZN7WebCore11RenderStyle11inheritFromEPKS0_NS0_18IsAtShadowBoundaryE(HEAP32[i10 >> 2] | 0, i3, 1);
 i1 = i2 | 0;
 __ZNK7WebCore17RenderTextControl20adjustInnerTextStyleEPKNS_11RenderStyleEPS1_(i1, i3, HEAP32[i10 >> 2] | 0);
 i3 = (HEAP32[i10 >> 2] | 0) + 44 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -8 | 1;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = i3 + 24 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((HEAP32[i12 + 88 >> 2] & 256 | 0) == 0) {
  i13 = i3;
 } else {
  if ((HEAP32[i12 >> 2] | 0) == 1) {
   i14 = i12;
  } else {
   __ZNK7WebCore22StyleRareInheritedData4copyEv(i5, i12);
   i12 = HEAP32[i5 >> 2] | 0;
   i5 = HEAP32[i11 >> 2] | 0;
   i3 = i5 | 0;
   i15 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) == 0) {
    __ZN7WebCore22StyleRareInheritedDataD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
   } else {
    HEAP32[i3 >> 2] = i15;
   }
   HEAP32[i11 >> 2] = i12;
   i14 = i12;
  }
  i12 = i14 + 88 | 0;
  HEAP32[i12 >> 2] = HEAP32[i12 >> 2] & -257;
  i13 = HEAP32[i10 >> 2] | 0;
 }
 i12 = i13 + 48 | 0;
 HEAP32[i12 >> 2] = HEAP32[i12 >> 2] & -7169 | 1024;
 i12 = (HEAP32[i10 >> 2] | 0) + 48 | 0;
 HEAP32[i12 >> 2] = HEAP32[i12 >> 2] & -57345 | 8192;
 i12 = HEAP32[i10 >> 2] | 0;
 i13 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 680 >> 2] | 0;
 if ((i13 | 0) == (__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i1) | 0)) {
  i16 = 0;
 } else {
  i16 = (HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] | 0) >>> 25 & 1;
 }
 i1 = i12 + 20 | 0;
 i12 = HEAP32[i1 >> 2] | 0;
 if (((HEAP32[i12 + 292 >> 2] | 0) >>> 25 & 1 | 0) != (i16 | 0)) {
  if ((HEAP32[i12 >> 2] | 0) == 1) {
   i17 = i12;
  } else {
   __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i12);
   i12 = HEAP32[i6 >> 2] | 0;
   i6 = HEAP32[i1 >> 2] | 0;
   i13 = i6 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
   } else {
    HEAP32[i13 >> 2] = i14;
   }
   HEAP32[i1 >> 2] = i12;
   i17 = i12;
  }
  i12 = i17 + 292 | 0;
  HEAP32[i12 >> 2] = HEAP32[i12 >> 2] & -33554433 | i16 << 25;
 }
 i16 = HEAP32[i2 + 120 >> 2] | 0;
 do {
  if ((i16 | 0) > -1) {
   i12 = HEAP32[i10 >> 2] | 0;
   HEAPF32[i7 >> 2] = +(i16 | 0);
   HEAP8[i7 + 4 | 0] = 0;
   i17 = i7 + 5 | 0;
   HEAP8[i17] = 3;
   HEAP8[i7 + 6 | 0] = 1;
   __ZN7WebCore11RenderStyle16setLogicalHeightENS_6LengthE(i12, i7);
   if ((HEAP8[i17] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
  }
 } while (0);
 i7 = _round(+(+HEAPF32[(__ZNK7WebCore11RenderStyle11fontMetricsEv(HEAP32[i10 >> 2] | 0) | 0) + 16 >> 2])) | 0;
 __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i8, i2 | 0, 1, 0, 1);
 if ((HEAP32[i8 >> 2] | 0) >= (i7 | 0)) {
  i18 = HEAP32[i10 >> 2] | 0;
  i19 = i18 + 48 | 0;
  i20 = i19;
  i21 = HEAP32[i20 >> 2] | 0;
  i22 = i21 & -32;
  i23 = i22 | 1;
  HEAP32[i20 >> 2] = i23;
  STACKTOP = i4;
  return;
 }
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP8[i9 + 4 | 0] = 0;
 i8 = i9 + 5 | 0;
 HEAP8[i8] = 2;
 HEAP8[i9 + 6 | 0] = 1;
 HEAPF32[i9 >> 2] = +-100;
 __ZN7WebCore11RenderStyle13setLineHeightENS_6LengthE(i7, i9);
 if ((HEAP8[i8] | 0) != 10) {
  i18 = HEAP32[i10 >> 2] | 0;
  i19 = i18 + 48 | 0;
  i20 = i19;
  i21 = HEAP32[i20 >> 2] | 0;
  i22 = i21 & -32;
  i23 = i22 | 1;
  HEAP32[i20 >> 2] = i23;
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
 i18 = HEAP32[i10 >> 2] | 0;
 i19 = i18 + 48 | 0;
 i20 = i19;
 i21 = HEAP32[i20 >> 2] | 0;
 i22 = i21 & -32;
 i23 = i22 | 1;
 HEAP32[i20 >> 2] = i23;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore27RenderTextControlSingleLine15controlClipRectERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 80 | 0;
 i15 = i2 | 0;
 i16 = i2 | 0;
 i17 = i2;
 i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 744 >> 2] & 511](i16) | 0;
 i19 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 712 >> 2] & 127](i11, i16);
 i20 = (HEAP32[i11 >> 2] | 0) + i18 | 0;
 i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 736 >> 2] & 511](i16) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 704 >> 2] & 127](i12, i16);
 i17 = (HEAP32[i12 >> 2] | 0) + i18 | 0;
 __ZNK7WebCore9RenderBox11clientWidthEv(i5, i15);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 712 >> 2] & 127](i6, i16);
 i18 = (HEAP32[i5 >> 2] | 0) - (HEAP32[i6 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 716 >> 2] & 127](i7, i16);
 i6 = i18 - (HEAP32[i7 >> 2] | 0) | 0;
 __ZNK7WebCore9RenderBox12clientHeightEv(i8, i15);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 704 >> 2] & 127](i9, i16);
 i15 = (HEAP32[i8 >> 2] | 0) - (HEAP32[i9 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 708 >> 2] & 127](i10, i16);
 i16 = i15 - (HEAP32[i10 >> 2] | 0) | 0;
 i10 = i1 | 0;
 HEAP32[i10 >> 2] = i20;
 i15 = i1 + 4 | 0;
 HEAP32[i15 >> 2] = i17;
 HEAP32[i1 + 8 >> 2] = i6;
 HEAP32[i1 + 12 >> 2] = i16;
 i16 = i2 | 0;
 if ((__ZNK7WebCore4Node9renderBoxEv(__ZNK7WebCore16HTMLInputElement16containerElementEv(__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i16) | 0) | 0) | 0) == 0) {
  i21 = i20;
  i22 = i17;
  i23 = i3 | 0;
  i24 = HEAP32[i23 >> 2] | 0;
  i25 = i3 + 4 | 0;
  i26 = HEAP32[i25 >> 2] | 0;
  i27 = i21 + i24 | 0;
  HEAP32[i10 >> 2] = i27;
  i28 = i22 + i26 | 0;
  HEAP32[i15 >> 2] = i28;
  STACKTOP = i4;
  return;
 }
 i17 = i14;
 i20 = (__ZNK7WebCore4Node9renderBoxEv(__ZNK7WebCore16HTMLInputElement16containerElementEv(__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i16) | 0) | 0) | 0) + 44 | 0;
 HEAP32[i17 >> 2] = HEAP32[i20 >> 2];
 HEAP32[i17 + 4 >> 2] = HEAP32[i20 + 4 >> 2];
 HEAP32[i17 + 8 >> 2] = HEAP32[i20 + 8 >> 2];
 HEAP32[i17 + 12 >> 2] = HEAP32[i20 + 12 >> 2];
 i20 = i13;
 i17 = i1;
 HEAP32[i20 >> 2] = HEAP32[i17 >> 2];
 HEAP32[i20 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
 HEAP32[i20 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
 HEAP32[i20 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
 __ZN7WebCore10LayoutRect5uniteERKS0_(i13, i14);
 HEAP32[i17 >> 2] = HEAP32[i20 >> 2];
 HEAP32[i17 + 4 >> 2] = HEAP32[i20 + 4 >> 2];
 HEAP32[i17 + 8 >> 2] = HEAP32[i20 + 8 >> 2];
 HEAP32[i17 + 12 >> 2] = HEAP32[i20 + 12 >> 2];
 i21 = HEAP32[i10 >> 2] | 0;
 i22 = HEAP32[i15 >> 2] | 0;
 i23 = i3 | 0;
 i24 = HEAP32[i23 >> 2] | 0;
 i25 = i3 + 4 | 0;
 i26 = HEAP32[i25 >> 2] | 0;
 i27 = i21 + i24 | 0;
 HEAP32[i10 >> 2] = i27;
 i28 = i22 + i26 | 0;
 HEAP32[i15 >> 2] = i28;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore27RenderTextControlSingleLine28preferredContentLogicalWidthEf(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, d13 = +0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i8 = __ZNK7WebCore16HTMLInputElement27sizeShouldIncludeDecorationERi(__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i7) | 0, i5) | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 if ((i9 | 0) < 1) {
  HEAP32[i5 >> 2] = 20;
  i10 = 20;
 } else {
  i10 = i9;
 }
 d11 = +Math_ceil(+(i10 | 0) * d3);
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
 i10 = i1 | 0;
 HEAP32[i10 >> 2] = i12;
 i1 = i2 + 36 | 0;
 i2 = HEAP32[(__ZNK7WebCore11RenderStyle4fontEv(HEAP32[i1 >> 2] | 0) | 0) >> 2] | 0;
 do {
  if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 32 | 0) | 0) {
   d13 = +__ZNK7WebCore17RenderTextControl14scaleEmToUnitsEi(i7, 4027);
   i14 = 18;
  } else {
   i9 = i6 | 0;
   i5 = HEAP32[i2 >> 2] | 0;
   HEAP32[i9 >> 2] = i5;
   if ((i5 | 0) != 0) {
    i15 = i5 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   }
   i15 = __ZN7WebCore17RenderTextControl20hasValidAvgCharWidthEN3WTF12AtomicStringE(i6) | 0;
   i5 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i9 = i5 | 0;
     i16 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i9 >> 2] = i16;
      break;
     }
    }
   } while (0);
   if (!i15) {
    i17 = i12;
    break;
   }
   i5 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[i1 >> 2] | 0) | 0;
   i16 = HEAP32[i5 + 24 >> 2] | 0;
   i9 = i16 + 44 | 0;
   i18 = HEAP32[i9 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i19 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i16, i5 | 0, 0) | 0;
    i5 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i19 >> 2] | 0) + 8 >> 2] & 31](i19, 32) | 0;
    HEAP32[i9 >> 2] = i5;
    i20 = i5;
   } else {
    i20 = i18;
   }
   d13 = +_round(+(+HEAPF32[i20 + 44 >> 2]));
   i14 = 18;
  }
 } while (0);
 do {
  if ((i14 | 0) == 18) {
   if (d13 <= +0) {
    i17 = i12;
    break;
   }
   d11 = d13 - d3 + +(i12 | 0);
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
   HEAP32[i10 >> 2] = i21;
   i17 = i21;
  }
 } while (0);
 if (!i8) {
  STACKTOP = i4;
  return;
 }
 d3 = +__ZNK7WebCore16HTMLInputElement15decorationWidthEv(__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i7) | 0) + +(i17 | 0);
 do {
  if (d3 < +2147483647) {
   if (d3 <= +-2147483648) {
    i22 = -2147483648;
    break;
   }
   i22 = ~~d3;
  } else {
   i22 = 2147483647;
  }
 } while (0);
 HEAP32[i10 >> 2] = i22;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore27RenderTextControlSingleLine11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = i8;
 i10 = i1 | 0;
 if (!(__ZN7WebCore11RenderBlock11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1 | 0, i2, i3, i4, i5, i6) | 0)) {
  i11 = 0;
  STACKTOP = i7;
  return i11 | 0;
 }
 i6 = __ZNK7WebCore16HTMLInputElement16containerElementEv(__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i10) | 0) | 0;
 i2 = i3 + 72 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 do {
  if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i1, __ZNK7WebCore17RenderTextControl16innerTextElementEv(i10) | 0) | 0) {
   i12 = 7;
  } else {
   i13 = HEAP32[i2 >> 2] | 0;
   if ((i13 | 0) == (__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i10) | 0)) {
    i12 = 7;
    break;
   }
   if ((i6 | 0) == 0) {
    i11 = 1;
    STACKTOP = i7;
    return i11 | 0;
   }
   if ((i6 | 0) == (HEAP32[i2 >> 2] | 0)) {
    i13 = i4;
    i14 = HEAP32[i13 + 4 >> 2] | 0;
    HEAP32[i8 >> 2] = HEAP32[i13 >> 2];
    HEAP32[i8 + 4 >> 2] = i14;
    i12 = 8;
    break;
   } else {
    i11 = 1;
    STACKTOP = i7;
    return i11 | 0;
   }
  }
 } while (0);
 if ((i12 | 0) == 7) {
  i2 = i4;
  i4 = HEAP32[i2 + 4 >> 2] | 0;
  HEAP32[i8 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i8 + 4 >> 2] = i4;
  if ((i6 | 0) != 0) {
   i12 = 8;
  }
 }
 do {
  if ((i12 | 0) == 8) {
   if ((__ZNK7WebCore16HTMLInputElement17innerBlockElementEv(__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i10) | 0) | 0) == 0) {
    break;
   }
   if ((__ZNK7WebCore4Node9renderBoxEv(__ZNK7WebCore16HTMLInputElement17innerBlockElementEv(__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i10) | 0) | 0) | 0) != 0) {
    i4 = (__ZNK7WebCore4Node9renderBoxEv(__ZNK7WebCore16HTMLInputElement17innerBlockElementEv(__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i10) | 0) | 0) | 0) + 44 | 0;
    i2 = HEAP32[i4 + 4 >> 2] | 0;
    i1 = i8;
    HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) - (HEAP32[i4 >> 2] | 0);
    i4 = i9 + 4 | 0;
    HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - i2;
   }
   i2 = i6 | 0;
   if ((__ZNK7WebCore4Node9renderBoxEv(i2) | 0) == 0) {
    break;
   }
   i4 = (__ZNK7WebCore4Node9renderBoxEv(i2) | 0) + 44 | 0;
   i2 = HEAP32[i4 + 4 >> 2] | 0;
   i1 = i8;
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) - (HEAP32[i4 >> 2] | 0);
   i4 = i9 + 4 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - i2;
  }
 } while (0);
 __ZN7WebCore17RenderTextControl19hitInnerTextElementERNS_13HitTestResultERKNS_11LayoutPointES5_(i10, i3, i9, i5);
 i11 = 1;
 STACKTOP = i7;
 return i11 | 0;
}
function __ZN7WebCore27RenderTextControlSingleLine5paintERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 80 | 0;
 __ZN7WebCore11RenderBlock5paintERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2, i3);
 if ((HEAP32[i2 + 20 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP8[i1 + 116 | 0] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 i15 = i1 | 0;
 i16 = i1 | 0;
 i17 = i1;
 i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 744 >> 2] & 511](i16) | 0;
 i19 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 712 >> 2] & 127](i11, i16);
 i20 = (HEAP32[i11 >> 2] | 0) + i18 | 0;
 i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 736 >> 2] & 511](i16) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 704 >> 2] & 127](i12, i16);
 i17 = (HEAP32[i12 >> 2] | 0) + i18 | 0;
 __ZNK7WebCore9RenderBox11clientWidthEv(i5, i15);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 712 >> 2] & 127](i6, i16);
 i18 = (HEAP32[i5 >> 2] | 0) - (HEAP32[i6 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 716 >> 2] & 127](i7, i16);
 i6 = i18 - (HEAP32[i7 >> 2] | 0) | 0;
 __ZNK7WebCore9RenderBox12clientHeightEv(i8, i15);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 704 >> 2] & 127](i9, i16);
 i15 = (HEAP32[i8 >> 2] | 0) - (HEAP32[i9 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 708 >> 2] & 127](i10, i16);
 i16 = i15 - (HEAP32[i10 >> 2] | 0) | 0;
 i10 = i13 | 0;
 HEAP32[i10 >> 2] = i20;
 i15 = i13 + 4 | 0;
 HEAP32[i15 >> 2] = i17;
 HEAP32[i13 + 8 >> 2] = i6;
 HEAP32[i13 + 12 >> 2] = i16;
 i19 = i1 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 8192 | 0) == 0) {
  i9 = ((HEAP32[i1 + 52 >> 2] | 0) - i6 | 0) / 2 & -1;
  HEAP32[i10 >> 2] = i9;
  i21 = i9;
  i22 = i17;
 } else {
  i17 = ((HEAP32[i1 + 56 >> 2] | 0) - i16 | 0) / 2 & -1;
  HEAP32[i15 >> 2] = i17;
  i21 = i20;
  i22 = i17;
 }
 i17 = i1 + 44 | 0;
 i1 = (HEAP32[i17 + 4 >> 2] | 0) + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 HEAP32[i10 >> 2] = (HEAP32[i17 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) + i21;
 HEAP32[i15 >> 2] = i1 + i22;
 i22 = __ZNK7WebCore12RenderObject5themeEv(i19) | 0;
 i1 = HEAP32[(HEAP32[i22 >> 2] | 0) + 128 >> 2] | 0;
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i14, i13);
 FUNCTION_TABLE_iiiii[i1 & 7](i22, i19, i2, i14) | 0;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore27RenderTextControlSingleLine21createInnerBlockStyleEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i2 | 0;
 i5 = i2 + 8 | 0;
 i6 = i2 + 16 | 0;
 i7 = i6;
 __ZN7WebCore11RenderStyle6createEv(i1);
 i8 = i1 | 0;
 __ZN7WebCore11RenderStyle11inheritFromEPKS0_NS0_18IsAtShadowBoundaryE(HEAP32[i8 >> 2] | 0, i3, 1);
 __ZN7WebCore11RenderStyle11setFlexGrowEf(HEAP32[i8 >> 2] | 0, +1);
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP8[i7 + 4 | 0] = 0;
 i1 = i7 + 5 | 0;
 HEAP8[i1] = 3;
 HEAP8[i7 + 6 | 0] = 0;
 i9 = i3 + 4 | 0;
 do {
  if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i9 >> 2] | 0) + 20 | 0, i7) | 0) {
   i10 = 9;
  } else {
   i3 = HEAP32[i9 >> 2] | 0;
   if ((HEAP32[i3 >> 2] | 0) == 1) {
    i11 = i3;
   } else {
    __ZNK7WebCore12StyleBoxData4copyEv(i4, i3);
    i3 = HEAP32[i4 >> 2] | 0;
    i12 = HEAP32[i9 >> 2] | 0;
    i13 = i12 | 0;
    i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
    if ((i14 | 0) == 0) {
     __ZN7WebCore12StyleBoxDataD2Ev(i12);
     __ZN3WTF8fastFreeEPv(i12);
    } else {
     HEAP32[i13 >> 2] = i14;
    }
    HEAP32[i9 >> 2] = i3;
    i11 = i3;
   }
   i3 = i11 + 20 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    i10 = 9;
    break;
   }
   i14 = i3;
   i3 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i14 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i14 + 4 >> 2] = i3;
   HEAP8[i1] = 0;
  }
 } while (0);
 do {
  if ((i10 | 0) == 9) {
   if ((HEAP8[i1] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
  }
 } while (0);
 i7 = (HEAP32[i8 >> 2] | 0) + 48 | 0;
 HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & -32 | 1;
 i7 = (HEAP32[i8 >> 2] | 0) + 40 | 0;
 HEAP32[i7 >> 2] = HEAP32[i7 >> 2] | 1073741824;
 i7 = (HEAP32[i8 >> 2] | 0) + 24 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i8 + 88 >> 2] & 48 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i8 >> 2] | 0) == 1) {
  i15 = i8;
 } else {
  __ZNK7WebCore22StyleRareInheritedData4copyEv(i5, i8);
  i8 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i1 = i5 | 0;
  i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore22StyleRareInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i1 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i8;
  i15 = i8;
 }
 i8 = i15 + 88 | 0;
 HEAP32[i8 >> 2] = HEAP32[i8 >> 2] & -49;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderStyle16setLogicalHeightENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3;
 i7 = i1 + 4 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == 3 | (i6 | 0) == 0) {
  if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_(i1 + 12 | 0, i2) | 0) {
   STACKTOP = i3;
   return;
  }
  i6 = HEAP32[i7 >> 2] | 0;
  if ((HEAP32[i6 >> 2] | 0) == 1) {
   i8 = i6;
  } else {
   __ZNK7WebCore12StyleBoxData4copyEv(i4, i6);
   i6 = HEAP32[i4 >> 2] | 0;
   i4 = HEAP32[i7 >> 2] | 0;
   i9 = i4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore12StyleBoxDataD2Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
   } else {
    HEAP32[i9 >> 2] = i10;
   }
   HEAP32[i7 >> 2] = i6;
   i8 = i6;
  }
  i6 = i8 + 12 | 0;
  if ((i6 | 0) == (i2 | 0)) {
   STACKTOP = i3;
   return;
  }
  i8 = i2;
  i10 = i6;
  i6 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i10 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i10 + 4 >> 2] = i6;
  HEAP8[i2 + 5 | 0] = 0;
  STACKTOP = i3;
  return;
 } else {
  if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_(i1 + 4 | 0, i2) | 0) {
   STACKTOP = i3;
   return;
  }
  i1 = HEAP32[i7 >> 2] | 0;
  if ((HEAP32[i1 >> 2] | 0) == 1) {
   i11 = i1;
  } else {
   __ZNK7WebCore12StyleBoxData4copyEv(i5, i1);
   i1 = HEAP32[i5 >> 2] | 0;
   i5 = HEAP32[i7 >> 2] | 0;
   i6 = i5 | 0;
   i10 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore12StyleBoxDataD2Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
   } else {
    HEAP32[i6 >> 2] = i10;
   }
   HEAP32[i7 >> 2] = i1;
   i11 = i1;
  }
  i1 = i11 + 4 | 0;
  if ((i1 | 0) == (i2 | 0)) {
   STACKTOP = i3;
   return;
  }
  i11 = i2;
  i7 = i1;
  i1 = HEAP32[i11 + 4 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i7 + 4 >> 2] = i1;
  HEAP8[i2 + 5 | 0] = 0;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11RenderStyle11setFlexGrowEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i1);
  i1 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i9 = i6 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i1;
  i8 = i1;
 }
 if (+HEAPF32[(HEAP32[i8 + 60 >> 2] | 0) + 4 >> 2] == d2) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i8 >> 2] | 0) == 1) {
  i11 = i8;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i8);
  i8 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i1 = i5 | 0;
  i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i1 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i8;
  i11 = i8;
 }
 i8 = i11 + 60 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i11 >> 2] | 0) == 1) {
  i12 = i11;
 } else {
  __ZNK7WebCore20StyleFlexibleBoxData4copyEv(i4, i11);
  i11 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  i7 = i4 | 0;
  i10 = i4 | 0;
  i1 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
  if ((i1 | 0) == 0) {
   if ((HEAP8[i4 + 17 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i7 + 12 | 0);
   }
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i10 >> 2] = i1;
  }
  HEAP32[i8 >> 2] = i11;
  i12 = i11;
 }
 HEAPF32[i12 + 4 >> 2] = d2;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9RenderBox13requiresLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i2 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 & 25165824 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 36 >> 2] | 0;
 i1 = HEAP32[i4 + 20 >> 2] | 0;
 if (+HEAPF32[i1 + 4 >> 2] < +1) {
  i3 = 1;
  return i3 | 0;
 }
 i5 = i1 + 116 | 0;
 while (1) {
  if ((HEAP32[i5 + 4 >> 2] | 0) != 0) {
   i3 = 1;
   i6 = 19;
   break;
  }
  i5 = HEAP32[i5 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 if ((i6 | 0) == 19) {
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i1 + 164 >> 2] | 0) + 8 >> 2] | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i1 + 76 >> 2] | 0) + 12 >> 2] | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 296 >> 2] & 4063232 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 212 >> 2] | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 & 196608 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 292 >> 2] & 1024 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 & 262144 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 i2 = (HEAP32[i1 + 68 >> 2] | 0) + 32 | 0;
 if ((HEAP8[i2] & 3) != 3) {
  i3 = 1;
  return i3 | 0;
 }
 i1 = (HEAP32[i2 >> 2] | 0) >>> 11 & 3;
 do {
  if ((i1 | 0) != 2) {
   i2 = (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3;
   if (((i2 | 0) == 0 | (i2 | 0) == 3) ^ (i1 | 0) == 0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = (HEAP32[(HEAP32[i4 + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0;
 return i3 | 0;
}
function __ZN7WebCore27RenderTextControlSingleLine13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = HEAP32[(__ZNK7WebCore27TextControlInnerTextElement8rendererEv(__ZNK7WebCore17RenderTextControl16innerTextElementEv(i1 | 0) | 0) | 0) + 40 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   i8 = (i7 | 0) == 1 | (i7 | 0) == 3;
   do {
    if ((i2 | 0) == 0) {
     if ((i7 | 0) == 3 | (i7 | 0) == 0) {
      i9 = i8 & 1;
      break;
     } else {
      i9 = i8 ? 3 : 2;
      break;
     }
    } else if ((i2 | 0) == 1) {
     if ((i7 | 0) == 3 | (i7 | 0) == 0) {
      i9 = i8 & 1 ^ 1;
      break;
     } else {
      i9 = i8 ? 2 : 3;
      break;
     }
    } else if ((i2 | 0) == 2) {
     if ((i7 | 0) == 3 | (i7 | 0) == 0) {
      i9 = i8 ? 3 : 2;
      break;
     } else {
      i9 = i8 & 1;
      break;
     }
    } else if ((i2 | 0) == 3) {
     if ((i7 | 0) == 3 | (i7 | 0) == 0) {
      i9 = i8 ? 2 : 3;
      break;
     } else {
      i9 = i8 & 1 ^ 1;
      break;
     }
    } else {
     i9 = 0;
    }
   } while (0);
   if (__ZN7WebCore11RenderLayer6scrollENS_15ScrollDirectionENS_17ScrollGranularityEf(i6, i9, i3, d4) | 0) {
    i10 = 1;
   } else {
    break;
   }
   return i10 | 0;
  }
 } while (0);
 i10 = __ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE(i1 | 0, i2, i3, d4, i5) | 0;
 return i10 | 0;
}
function __Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = i2;
 i2 = HEAP32[i6 >> 2] | 0;
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i4 + 4 >> 2] = i7;
 if ((i2 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
  i2 = i5 + 5 | 0;
  i8 = HEAP8[i2] | 0;
  i9 = i2;
 } else {
  i8 = (i7 >>> 8 | 0 << 24) & 255;
  i9 = i5 + 5 | 0;
 }
 if ((HEAP8[i1 + 5 | 0] | 0) == i8 << 24 >> 24) {
  do {
   if (((HEAP8[i5 + 4 | 0] ^ HEAP8[i1 + 4 | 0]) & 1) == 0) {
    if (i8 << 24 >> 24 == 15) {
     i10 = 1;
     break;
    }
    if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
     d11 = +(HEAP32[i1 >> 2] | 0);
    } else {
     d11 = +HEAPF32[i1 >> 2];
    }
    if ((HEAP8[i5 + 6 | 0] & 1) == 0) {
     d12 = +(HEAP32[i4 >> 2] | 0);
    } else {
     d12 = +HEAPF32[i4 >> 2];
    }
    if (d11 == d12) {
     i10 = 1;
     break;
    }
    i10 = __ZNK7WebCore6Length17isCalculatedEqualERKS0_(i1, i5) | 0;
   } else {
    i10 = 0;
   }
  } while (0);
  i13 = i10;
  i14 = HEAP8[i9] | 0;
 } else {
  i13 = 0;
  i14 = i8;
 }
 if (i14 << 24 >> 24 != 10) {
  STACKTOP = i3;
  return i13 | 0;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return i13 | 0;
}
function __ZNK7WebCore15RenderBlockFlow21collapsedMarginBeforeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i2 + 100 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = i6;
   _llvm_lifetime_start(4, 0, i9 | 0);
   __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i5, i2 + 60 | 0, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
   HEAP32[i6 >> 2] = 0;
   i10 = HEAP32[((HEAP32[i5 >> 2] | 0) < 0 ? i6 : i5) >> 2] | 0;
   _llvm_lifetime_end(4, 0, i9 | 0);
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) != 0) {
    i11 = i9;
    i12 = i10;
    break;
   }
   __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i4, i2 + 60 | 0, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
   i9 = HEAP32[i4 >> 2] | 0;
   i13 = (i9 | 0) > 0 ? 0 : -i9 | 0;
   i14 = i10;
   i15 = i1 | 0;
   i16 = i14 - i13 | 0;
   HEAP32[i15 >> 2] = i16;
   STACKTOP = i3;
   return;
  } else {
   i11 = i8;
   i12 = HEAP32[i8 + 4 >> 2] | 0;
  }
 } while (0);
 i13 = HEAP32[i11 + 8 >> 2] | 0;
 i14 = i12;
 i15 = i1 | 0;
 i16 = i14 - i13 | 0;
 HEAP32[i15 >> 2] = i16;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore15RenderBlockFlow20collapsedMarginAfterEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i2 + 100 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = i6;
   _llvm_lifetime_start(4, 0, i9 | 0);
   __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i5, i2 + 60 | 0, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
   HEAP32[i6 >> 2] = 0;
   i10 = HEAP32[((HEAP32[i5 >> 2] | 0) < 0 ? i6 : i5) >> 2] | 0;
   _llvm_lifetime_end(4, 0, i9 | 0);
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) != 0) {
    i11 = i9;
    i12 = i10;
    break;
   }
   __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i4, i2 + 60 | 0, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
   i9 = HEAP32[i4 >> 2] | 0;
   i13 = (i9 | 0) > 0 ? 0 : -i9 | 0;
   i14 = i10;
   i15 = i1 | 0;
   i16 = i14 - i13 | 0;
   HEAP32[i15 >> 2] = i16;
   STACKTOP = i3;
   return;
  } else {
   i11 = i8;
   i12 = HEAP32[i8 + 12 >> 2] | 0;
  }
 } while (0);
 i13 = HEAP32[i11 + 16 >> 2] | 0;
 i14 = i12;
 i15 = i1 | 0;
 i16 = i14 - i13 | 0;
 HEAP32[i15 >> 2] = i16;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9RenderBox20contentLogicalHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i10 | 0) == 3 | (i10 | 0) == 0) {
  __ZNK7WebCore9RenderBox12clientHeightEv(i4, i2);
  i10 = i2 | 0;
  i11 = i2;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 704 >> 2] & 127](i5, i10);
  i12 = (HEAP32[i4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 708 >> 2] & 127](i6, i10);
  HEAP32[i1 >> 2] = i12 - (HEAP32[i6 >> 2] | 0);
  STACKTOP = i3;
  return;
 } else {
  __ZNK7WebCore9RenderBox11clientWidthEv(i7, i2);
  i6 = i2 | 0;
  i12 = i2;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 712 >> 2] & 127](i8, i6);
  i2 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 716 >> 2] & 127](i9, i6);
  HEAP32[i1 >> 2] = i2 - (HEAP32[i9 >> 2] | 0);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore27RenderTextControlSingleLine27capsLockStateMayHaveChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 do {
  if (__ZNK7WebCore16HTMLInputElement15isPasswordFieldEv(__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i2) | 0) | 0) {
   i3 = i1 + 4 | 0;
   if (!(__ZNK7WebCore14FrameSelection18isFocusedAndActiveEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 468 >> 2] | 0) | 0)) {
    i4 = 0;
    break;
   }
   i5 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 680 >> 2] | 0;
   if ((i5 | 0) != (__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i2) | 0)) {
    i4 = 0;
    break;
   }
   i4 = __ZN7WebCore21PlatformKeyboardEvent20currentCapsLockStateEv() | 0;
  } else {
   i4 = 0;
  }
 } while (0);
 i2 = i1 + 116 | 0;
 if ((i4 & 1 | 0) == (HEAP8[i2] & 1 | 0)) {
  return;
 }
 HEAP8[i2] = i4 & 1;
 __ZNK7WebCore12RenderObject7repaintEb(i1 | 0, 0);
 return;
}
function __ZN7WebCore27RenderTextControlSingleLine15getAvgCharWidthEN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0, i7 = 0, d8 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = i1 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i5 >> 2] | 0, H_BASE + 32 | 0) | 0) {
  d6 = +__ZNK7WebCore17RenderTextControl14scaleEmToUnitsEi(i2, 901);
  STACKTOP = i3;
  return +d6;
 }
 i1 = i4 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i5 = i7 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 d8 = +__ZN7WebCore17RenderTextControl15getAvgCharWidthEN3WTF12AtomicStringE(i2, i4);
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  d6 = d8;
  STACKTOP = i3;
  return +d6;
 }
 i1 = i4 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  d6 = d8;
  STACKTOP = i3;
  return +d6;
 } else {
  HEAP32[i1 >> 2] = i2;
  d6 = d8;
  STACKTOP = i3;
  return +d6;
 }
 return +0;
}
function __ZNK7WebCore20RenderBoxModelObject12paddingStartEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i2 + 36 >> 2] | 0;
 i7 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i6 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i6 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i6 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject10paddingEndEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i2 + 36 >> 2] | 0;
 i7 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i6 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i6 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i6 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i2 + 36 >> 2] | 0;
 i7 = __ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i6 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i6 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject12paddingAfterEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i2 + 36 >> 2] | 0;
 i7 = __ZNK7WebCore9LengthBox5afterENS_11WritingModeE((HEAP32[i6 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i6 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12StyleBoxDataD2Ev(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 }
 if ((HEAP8[i1 + 9 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 4 | 0);
 return;
}
function __ZN7WebCore27RenderTextControlSingleLine6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i6 = __ZNK7WebCore27TextControlInnerTextElement8rendererEv(__ZNK7WebCore17RenderTextControl16innerTextElementEv(i1 | 0) | 0) | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  return i7 | 0;
 }
 i8 = HEAP32[i6 + 40 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if (__ZN7WebCore11RenderLayer6scrollENS_15ScrollDirectionENS_17ScrollGranularityEf(i8, i2, i3, d4) | 0) {
    i7 = 1;
   } else {
    break;
   }
   return i7 | 0;
  }
 } while (0);
 i7 = __ZN7WebCore9RenderBox6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE(i1 | 0, i2, i3, d4, i5) | 0;
 return i7 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject13paddingBottomEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 92 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i7 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject12paddingRightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 76 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i7 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject11paddingLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 68 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i7 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject10paddingTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 84 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i7 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderBlock23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 __ZN7WebCore11RenderBlock27selectionGapRectsForRepaintEPKNS_22RenderLayerModelObjectE(i5, i2, i3);
 i3 = i1;
 i2 = i5;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 __ZN7WebCore10LayoutRect5uniteERKS0_(i1, i5 + 16 | 0);
 __ZN7WebCore10LayoutRect5uniteERKS0_(i1, i5 + 32 | 0);
 STACKTOP = i4;
 return;
}
function viiiiiiiiii___ZN7WebCore15RenderBlockFlow19inlineSelectionGapsERNS_11RenderBlockERKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitESA_SA_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE__wrapper(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 __ZN7WebCore15RenderBlockFlow19inlineSelectionGapsERNS_11RenderBlockERKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitESA_SA_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0);
}
function __ZN7WebCore27RenderTextControlSingleLineC2ERNS_16HTMLInputElementEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore17RenderTextControlC2ERNS_26HTMLTextFormControlElementEN3WTF7PassRefINS_11RenderStyleEEE(i1 | 0, i2 | 0, i5);
 HEAP32[i1 >> 2] = H_BASE + 56;
 HEAP8[i1 + 116 | 0] = 0;
 HEAP32[i1 + 120 >> 2] = -1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore27RenderTextControlSingleLineC1ERNS_16HTMLInputElementEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore17RenderTextControlC2ERNS_26HTMLTextFormControlElementEN3WTF7PassRefINS_11RenderStyleEEE(i1 | 0, i2 | 0, i5);
 HEAP32[i1 >> 2] = H_BASE + 56;
 HEAP8[i1 + 116 | 0] = 0;
 HEAP32[i1 + 120 >> 2] = -1;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9RenderBox18visualOverflowRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 + 88 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i2 + 52 | 0;
  i2 = HEAP32[i4 >> 2] | 0;
  i5 = HEAP32[i4 + 4 >> 2] | 0;
  i4 = i1;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i4 + 4 >> 2] = 0;
  i4 = i1 + 8 | 0;
  HEAP32[i4 >> 2] = i2;
  HEAP32[i4 + 4 >> 2] = i5;
  return;
 } else {
  i5 = i1;
  i1 = i3 + 20 | 0;
  HEAP32[i5 >> 2] = HEAP32[i1 >> 2];
  HEAP32[i5 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
  HEAP32[i5 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
  HEAP32[i5 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
  return;
 }
}
function __ZNK7WebCore27RenderTextControlSingleLine25computeLogicalHeightLimitEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((__ZNK7WebCore16HTMLInputElement16containerElementEv(__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i2 | 0) | 0) | 0) != 0) {
  __ZNK7WebCore9RenderBox20contentLogicalHeightEv(i1, i2 | 0);
  return;
 }
 i3 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i3 | 0) == 3 | (i3 | 0) == 0) {
  HEAP32[i1 >> 2] = HEAP32[i2 + 56 >> 2];
  return;
 } else {
  HEAP32[i1 >> 2] = HEAP32[i2 + 52 >> 2];
  return;
 }
}
function __ZNK7WebCore27RenderTextControlSingleLine27computeControlLogicalHeightENS_10LayoutUnitES1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i2 = STACKTOP;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i1 >> 2] = (HEAP32[i4 >> 2] | 0) + (HEAP32[i3 >> 2] | 0);
 STACKTOP = i2;
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
function iiiiiii___ZN7WebCore15RenderBlockFlow21hitTestInlineChildrenERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return __ZN7WebCore15RenderBlockFlow21hitTestInlineChildrenERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function iiiiiii___ZN7WebCore11RenderBlock15hitTestContentsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return __ZN7WebCore11RenderBlock15hitTestContentsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function viiii___ZN7WebCore15RenderBlockFlow34addFocusRingRectsForInlineChildrenERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore15RenderBlockFlow34addFocusRingRectsForInlineChildrenERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore27RenderTextControlSingleLine21textShouldBeTruncatedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 680 >> 2] | 0;
 if ((i2 | 0) == (__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i1 | 0) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 33554432 | 0) != 0;
 return i3 | 0;
}
function viiiiii___ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function viiii___ZN7WebCore17RenderTextControl17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore17RenderTextControl17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
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
function __ZN7WebCore27RenderTextControlSingleLine10autoscrollERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZNK7WebCore27TextControlInnerTextElement8rendererEv(__ZNK7WebCore17RenderTextControl16innerTextElementEv(i1 | 0) | 0) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 + 40 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore11RenderLayer10autoscrollERKNS_8IntPointE(i1, i2);
 return;
}
function __ZNK7WebCore20RenderBoxModelObject12borderBottomEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i2 + 128 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = i1 >>> 1 & 67108863;
 return i3 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject11borderRightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i2 + 112 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = i1 >>> 1 & 67108863;
 return i3 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject10borderLeftEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i2 + 104 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = i1 >>> 1 & 67108863;
 return i3 | 0;
}
function iiiiii___ZN7WebCore15RenderBlockFlow13hitTestFloatsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore15RenderBlockFlow13hitTestFloatsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZNK7WebCore20RenderBoxModelObject9borderTopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i2 + 120 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = i1 >>> 1 & 67108863;
 return i3 | 0;
}
function __ZNK7WebCore27RenderTextControlSingleLine12scrollHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 if ((__ZNK7WebCore17RenderTextControl16innerTextElementEv(i2) | 0) == 0) {
  i3 = __ZNK7WebCore9RenderBox12scrollHeightEv(i1 | 0) | 0;
  return i3 | 0;
 } else {
  i3 = __ZN7WebCore7Element12scrollHeightEv(__ZNK7WebCore17RenderTextControl16innerTextElementEv(i2) | 0) | 0;
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore27RenderTextControlSingleLine11scrollWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 if ((__ZNK7WebCore17RenderTextControl16innerTextElementEv(i2) | 0) == 0) {
  i3 = __ZNK7WebCore9RenderBox11scrollWidthEv(i1 | 0) | 0;
  return i3 | 0;
 } else {
  i3 = __ZN7WebCore7Element11scrollWidthEv(__ZNK7WebCore17RenderTextControl16innerTextElementEv(i2) | 0) | 0;
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore27RenderTextControlSingleLine10scrollLeftEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 if ((__ZNK7WebCore17RenderTextControl16innerTextElementEv(i2) | 0) == 0) {
  i3 = __ZNK7WebCore9RenderBox10scrollLeftEv(i1 | 0) | 0;
  return i3 | 0;
 } else {
  i3 = __ZN7WebCore7Element10scrollLeftEv(__ZNK7WebCore17RenderTextControl16innerTextElementEv(i2) | 0) | 0;
  return i3 | 0;
 }
 return 0;
}
function iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZNK7WebCore27RenderTextControlSingleLine9scrollTopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 if ((__ZNK7WebCore17RenderTextControl16innerTextElementEv(i2) | 0) == 0) {
  i3 = __ZNK7WebCore9RenderBox9scrollTopEv(i1 | 0) | 0;
  return i3 | 0;
 } else {
  i3 = __ZN7WebCore7Element9scrollTopEv(__ZNK7WebCore17RenderTextControl16innerTextElementEv(i2) | 0) | 0;
  return i3 | 0;
 }
 return 0;
}
function viiiii___ZN7WebCore15RenderBlockFlow22clipOutFloatingObjectsERNS_11RenderBlockEPKNS_9PaintInfoERKNS_11LayoutPointERKNS_10LayoutSizeE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore15RenderBlockFlow22clipOutFloatingObjectsERNS_11RenderBlockEPKNS_9PaintInfoERKNS_11LayoutPointERKNS_10LayoutSizeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i2 + 36 >> 2] | 0;
 } else {
  i4 = i3;
 }
 __ZNK7WebCore15LayoutBoxExtent5startENS_11WritingModeENS_13TextDirectionE(i1, i2 + 60 | 0, (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i4 + 40 >> 2] | 0) >>> 30 & 1);
 return;
}
function iiiiii___ZNK7WebCore11RenderBlock16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZNK7WebCore11RenderBlock16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i2 + 36 >> 2] | 0;
 } else {
  i4 = i3;
 }
 __ZNK7WebCore15LayoutBoxExtent3endENS_11WritingModeENS_13TextDirectionE(i1, i2 + 60 | 0, (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i4 + 40 >> 2] | 0) >>> 30 & 1);
 return;
}
function viiii___ZNK7WebCore17RenderTextControl20computeLogicalHeightENS_10LayoutUnitES1_RNS_9RenderBox27LogicalExtentComputedValuesE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore17RenderTextControl20computeLogicalHeightENS_10LayoutUnitES1_RNS_9RenderBox27LogicalExtentComputedValuesE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiii___ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viiiii___ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function dynCall_viiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 FUNCTION_TABLE_viiiiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0);
}
function viiii___ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiiii___ZN7WebCore15RenderBlockFlow21relayoutForPaginationEbNS_10LayoutUnitERNS_21LayoutStateMaintainerE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore15RenderBlockFlow21relayoutForPaginationEbNS_10LayoutUnitERNS_21LayoutStateMaintainerE(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i2 + 36 >> 2] | 0;
 } else {
  i4 = i3;
 }
 __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i1, i2 + 60 | 0, (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3);
 return;
}
function viii___ZNK7WebCore11RenderBlock13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore11RenderBlock13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore27RenderTextControlSingleLine13setScrollLeftEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 | 0;
 if ((__ZNK7WebCore17RenderTextControl16innerTextElementEv(i3) | 0) == 0) {
  return;
 }
 __ZN7WebCore7Element13setScrollLeftEi(__ZNK7WebCore17RenderTextControl16innerTextElementEv(i3) | 0, i2);
 return;
}
function __ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i2 + 36 >> 2] | 0;
 } else {
  i4 = i3;
 }
 __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i1, i2 + 60 | 0, (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3);
 return;
}
function __ZN7WebCore27RenderTextControlSingleLine12setScrollTopEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 | 0;
 if ((__ZNK7WebCore17RenderTextControl16innerTextElementEv(i3) | 0) == 0) {
  return;
 }
 __ZN7WebCore7Element12setScrollTopEi(__ZNK7WebCore17RenderTextControl16innerTextElementEv(i3) | 0, i2);
 return;
}
function viiii___ZNK7WebCore11RenderBlock25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore11RenderBlock25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiiii___ZN7WebCore11RenderBlock24isPointInOverflowControlERNS_13HitTestResultERKNS_11LayoutPointES5___wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore11RenderBlock24isPointInOverflowControlERNS_13HitTestResultERKNS_11LayoutPointES5_(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 936 >> 2] & 3](i1, i2, i3, i4, i5, 0);
 return;
}
function viiiii___ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viiiii___ZNK7WebCore15RenderBlockFlow30logicalRightFloatOffsetForLineENS_10LayoutUnitES1_S1___wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore15RenderBlockFlow30logicalRightFloatOffsetForLineENS_10LayoutUnitES1_S1_(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viiiii___ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viiiii___ZNK7WebCore15RenderBlockFlow29logicalLeftFloatOffsetForLineENS_10LayoutUnitES1_S1___wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore15RenderBlockFlow29logicalLeftFloatOffsetForLineENS_10LayoutUnitES1_S1_(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1;
 i1 = i2 + 44 | 0;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 return;
}
function viiii___ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiii___ZNK7WebCore9RenderBox22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore9RenderBox22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viiiii___ZN7WebCore11RenderBlock13paintChildrenERNS_9PaintInfoERKNS_11LayoutPointES2_b__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore11RenderBlock13paintChildrenERNS_9PaintInfoERKNS_11LayoutPointES2_b(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore9RenderBox17borderBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 52 >> 2] | 0;
 i4 = HEAP32[i2 + 56 >> 2] | 0;
 i2 = i1;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i2 + 4 >> 2] = 0;
 i2 = i1 + 8 | 0;
 HEAP32[i2 >> 2] = i3;
 HEAP32[i2 + 4 >> 2] = i4;
 return;
}
function viiiii___ZN7WebCore11RenderBlock14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore11RenderBlock14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viiii___ZN7WebCore11RenderBlock37checkForPaginationLogicalHeightChangeERNS_10LayoutUnitERbS3___wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore11RenderBlock37checkForPaginationLogicalHeightChangeERNS_10LayoutUnitERbS3_(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viii___ZNK7WebCore11RenderBlock13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore11RenderBlock13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function viiii___ZN7WebCore15RenderBlockFlow11paintFloatsERNS_9PaintInfoERKNS_11LayoutPointEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore15RenderBlockFlow11paintFloatsERNS_9PaintInfoERKNS_11LayoutPointEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viii___ZN7WebCore15RenderBlockFlow15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore15RenderBlockFlow15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 2048 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 96 >> 2] & 511](i1 | 0) | 0) ^ 1;
 return i2 | 0;
}
function viii___ZN7WebCore11RenderBlock19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore9RenderBox29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore15RenderBlockFlow34positionForPointWithInlineChildrenERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore15RenderBlockFlow34positionForPointWithInlineChildrenERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore15RenderBlockFlow19paintInlineChildrenERNS_9PaintInfoERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore15RenderBlockFlow19paintInlineChildrenERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore17RenderTextControl29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore17RenderTextControl29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2_(i1 | 0, i2 | 0, i3 | 0);
}
function iiii___ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viii___ZN7WebCore15RenderBlockFlow32moveAllChildrenIncludingFloatsToEPNS_11RenderBlockEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore15RenderBlockFlow32moveAllChildrenIncludingFloatsToEPNS_11RenderBlockEb(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore11RenderBlock16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore11RenderBlock16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore15RenderBlockFlow26dirtyLinesFromChangedChildEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17RenderLineBoxList26dirtyLinesFromChangedChildEPNS_20RenderBoxModelObjectEPNS_12RenderObjectE(i1 + 104 | 0, i1 | 0, i2);
 return;
}
function viii___ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore11RenderBlock28addChildIgnoringContinuationEPNS_12RenderObjectES2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock28addChildIgnoringContinuationEPNS_12RenderObjectES2_(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE(i1 | 0, i2 | 0);
}
function iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore11RenderBlock11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore11RenderBlock32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore11RenderBlock32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE(i1 | 0, i2 | 0) | 0;
}
function viii___ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE(i1 | 0, i2 | 0) | 0;
}
function dynCall_iiiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return FUNCTION_TABLE_iiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
}
function __ZNK7WebCore11RenderBlock26isInlineBlockOrInlineTableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 & 1024 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (i2 & 2048 | 0) != 0;
 return i3 | 0;
}
function viii___ZN7WebCore9RenderBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore9RenderBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore15RenderBlockFlow16positionForPointERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore15RenderBlockFlow16positionForPointERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore15RenderBlockFlow19inlineBlockBaselineENS_17LineDirectionModeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore15RenderBlockFlow19inlineBlockBaselineENS_17LineDirectionModeE(i1 | 0, i2 | 0) | 0;
}
function __ZNK7WebCore27RenderTextControlSingleLine14hasControlClipEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore16HTMLInputElement16containerElementEv(__ZNK7WebCore17RenderTextControl22textFormControlElementEv(i1 | 0) | 0) | 0) != 0 | 0;
}
function __ZNK7WebCore15RenderBlockFlow14containsFloatsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 12 >> 2] | 0) != 0;
 return i3 | 0;
}
function viii___ZN7WebCore15RenderBlockFlow15computeOverflowENS_10LayoutUnitEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore15RenderBlockFlow15computeOverflowENS_10LayoutUnitEb(i1 | 0, i2 | 0, i3 | 0);
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function viii___ZN7WebCore15RenderBlockFlow11layoutBlockEbNS_10LayoutUnitE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore15RenderBlockFlow11layoutBlockEbNS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore11RenderBlock8addChildEPNS_12RenderObjectES2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock8addChildEPNS_12RenderObjectES2_(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore11RenderBlock12imageChangedEPKvPKNS_7IntRectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock12imageChangedEPKvPKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi(i1 | 0, i2 | 0) | 0;
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore11RenderBlock20childBecameNonInlineEPNS_12RenderObjectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderBlock20childBecameNonInlineEPNS_12RenderObjectE(i1 | 0, i2 | 0);
}
function iii___ZN7WebCore17RenderTextControl26layoutSpecialExcludedChildEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore17RenderTextControl26layoutSpecialExcludedChildEb(i1 | 0, i2 | 0) | 0;
}
function dynCall_iiiifi(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiifi[i1 & 7](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0) | 0;
}
function vii___ZNK7WebCore9RenderBox37containingBlockLogicalWidthForContentEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox37containingBlockLogicalWidthForContentEv(i1 | 0, i2 | 0);
}
function b1(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 abort(1);
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 31](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function vii___ZNK7WebCore11RenderBlock31offsetFromLogicalTopOfFirstPageEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore11RenderBlock31offsetFromLogicalTopOfFirstPageEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv(i1 | 0, i2 | 0);
}
function iii___ZNK7WebCore15RenderBlockFlow20textAlignmentForLineEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore15RenderBlockFlow20textAlignmentForLineEb(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore11RenderBlock11removeChildERNS_12RenderObjectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderBlock11removeChildERNS_12RenderObjectE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore15RenderBlockFlow24repaintOverhangingFloatsEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore15RenderBlockFlow24repaintOverhangingFloatsEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore17RenderTextControl28canBeReplacedWithInlineRunInEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore17RenderTextControl28canBeReplacedWithInlineRunInEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv(i1 | 0, i2 | 0);
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function ii___ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv(i1 | 0) | 0;
}
function ii___ZN7WebCore11RenderBlock32updateLogicalWidthAndColumnWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11RenderBlock32updateLogicalWidthAndColumnWidthEv(i1 | 0) | 0;
}
function vii___ZN7WebCore15RenderBlockFlow19createRootInlineBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore15RenderBlockFlow19createRootInlineBoxEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore9RenderBox33needsPreferredWidthsRecalculationEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox33needsPreferredWidthsRecalculationEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore9RenderBox24maxPreferredLogicalWidthEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox24maxPreferredLogicalWidthEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore11RenderBlock21availableLogicalWidthEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore11RenderBlock21availableLogicalWidthEv(i1 | 0, i2 | 0);
}
function __ZNK7WebCore20RenderBoxModelObject12borderBeforeEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle17borderBeforeWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
}
function vi___ZN7WebCore17RenderTextControl29computePreferredLogicalWidthsEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17RenderTextControl29computePreferredLogicalWidthsEv(i1 | 0);
}
function iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject14previousOffsetEi(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore11RenderBlock15requiresColumnsEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore11RenderBlock15requiresColumnsEi(i1 | 0, i2 | 0) | 0;
}
function ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv(i1 | 0) | 0;
}
function __ZNK7WebCore20RenderBoxModelObject11borderStartEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle16borderStartWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject11borderAfterEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle16borderAfterWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 31](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vi___ZN7WebCore15RenderBlockFlow29addOverflowFromInlineChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15RenderBlockFlow29addOverflowFromInlineChildrenEv(i1 | 0);
}
function vi___ZN7WebCore11RenderBlock33markForPaginationRelayoutIfNeededEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock33markForPaginationRelayoutIfNeededEv(i1 | 0);
}
function vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject17strokeBoundingBoxEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject17objectBoundingBoxEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore9RenderBox9panScrollERKNS_8IntPointE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9RenderBox9panScrollERKNS_8IntPointE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore20RenderBoxModelObject9borderEndEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle14borderEndWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
}
function iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject10nextOffsetEi(i1 | 0, i2 | 0) | 0;
}
function ii___ZNK7WebCore11RenderBlock24shouldPaintSelectionGapsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock24shouldPaintSelectionGapsEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject14localTransformEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject22localToParentTransformEv(i1 | 0) | 0;
}
function __ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function vii___ZN7WebCore11RenderBlock15updateDragStateEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderBlock15updateDragStateEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore11RenderBlock22outlineStyleForRepaintEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock22outlineStyleForRepaintEv(i1 | 0) | 0;
}
function __ZNK7WebCore27RenderTextControlSingleLine12inputElementEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore17RenderTextControl22textFormControlElementEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore15RenderBlockFlow17firstLineBaselineEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore15RenderBlockFlow17firstLineBaselineEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11RenderBlock21isSelfCollapsingBlockEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock21isSelfCollapsingBlockEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv(i1 | 0) | 0;
}
function vi___ZN7WebCore11RenderBlock26simplifiedNormalFlowLayoutEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock26simplifiedNormalFlowLayoutEv(i1 | 0);
}
function __ZNK7WebCore15RenderBlockFlow31adjustInlineDirectionLineBoundsEiRfS1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function ii___ZNK7WebCore9RenderBox22verticalScrollbarWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox22verticalScrollbarWidthEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore15RenderBlockFlow15canHaveChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore15RenderBlockFlow15canHaveChildrenEv(i1 | 0) | 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv(i1 | 0);
}
function __ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 1;
}
function ii___ZNK7WebCore9RenderBox21hasRelativeDimensionsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox21hasRelativeDimensionsEv(i1 | 0) | 0;
}
function __ZNK7WebCore12RenderObject7isEmptyEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 511](i1) | 0) == 0 | 0;
}
function vi___ZN7WebCore17RenderTextControl17updateFromElementEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17RenderTextControl17updateFromElementEv(i1 | 0);
}
function vi___ZN7WebCore15RenderBlockFlow19updateLogicalHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15RenderBlockFlow19updateLogicalHeightEv(i1 | 0);
}
function vi___ZN7WebCore13RenderElement21willBeRemovedFromTreeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13RenderElement21willBeRemovedFromTreeEv(i1 | 0);
}
function vi___ZN7WebCore11RenderBlock23addOverflowFromChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock23addOverflowFromChildrenEv(i1 | 0);
}
function __ZN7WebCore27RenderTextControlSingleLineD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17RenderTextControlD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject15innerLineHeightEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore9RenderBox10offsetLeftEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox10offsetLeftEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14caretMinOffsetEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14caretMaxOffsetEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11RenderBlock14paginationUnitEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock14paginationUnitEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11RenderBlock14hasLineIfEmptyEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock14hasLineIfEmptyEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11RenderBlock14firstLineBlockEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock14firstLineBlockEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 127](i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore11RenderBlock19virtualContinuationEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20RenderBoxModelObject12continuationEv(i1 | 0) | 0;
}
function vi___ZN7WebCore15RenderBlockFlow16insertedIntoTreeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15RenderBlockFlow16insertedIntoTreeEv(i1 | 0);
}
function vii___ZNK7WebCore9RenderBox9offsetTopEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox9offsetTopEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore11RenderBlock13hoverAncestorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock13hoverAncestorEv(i1 | 0) | 0;
}
function vi___ZN7WebCore15RenderBlockFlow15willBeDestroyedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15RenderBlockFlow15willBeDestroyedEv(i1 | 0);
}
function __ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function ii___ZNK7WebCore15RenderBlockFlow8hasLinesEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore15RenderBlockFlow8hasLinesEv(i1 | 0) | 0;
}
function vi___ZN7WebCore11RenderBlock17updateFirstLetterEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock17updateFirstLetterEv(i1 | 0);
}
function __ZNK7WebCore9RenderBox13intrinsicSizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function dynCall_viif(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 FUNCTION_TABLE_viif[i1 & 3](i2 | 0, i3 | 0, +d4);
}
function b6(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(6);
 return 0;
}
function vi___ZN7WebCore9RenderBox18updateLogicalWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9RenderBox18updateLogicalWidthEv(i1 | 0);
}
function vi___ZN7WebCore15RenderBlockFlow11deleteLinesEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15RenderBlockFlow11deleteLinesEv(i1 | 0);
}
function vi___ZN7WebCore11RenderBlock15calcColumnWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock15calcColumnWidthEv(i1 | 0);
}
function __ZNK7WebCore27RenderTextControlSingleLine23centerContainerIfNeededEPNS_9RenderBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore9RenderBox12offsetHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 56 >> 2];
 return;
}
function __ZNK7WebCore9RenderBox12marginBottomEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 68 >> 2];
 return;
}
function __ZN7WebCore17RenderTextControl28removeLeftoverAnonymousBlockEPNS_11RenderBlockE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore9RenderBox11offsetWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 52 >> 2];
 return;
}
function __ZNK7WebCore9RenderBox11marginRightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 64 >> 2];
 return;
}
function vi___ZN7WebCore9RenderBox15updateFromStyleEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9RenderBox15updateFromStyleEv(i1 | 0);
}
function b13(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(13);
}
function __ZNK7WebCore9RenderBox10marginLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 72 >> 2];
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore9RenderBox9marginTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 60 >> 2];
 return;
}
function dynCall_fii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return +FUNCTION_TABLE_fii[i1 & 3](i2 | 0, i3 | 0);
}
function __ZN7WebCore27RenderTextControlSingleLineD2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17RenderTextControlD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore27RenderTextControlSingleLineD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17RenderTextControlD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function b15(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(15);
 return 0;
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
 FUNCTION_TABLE_vii[i1 & 127](i2 | 0, i3 | 0);
}
function b8(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 abort(8);
 return 0;
}
function __ZN7WebCore11RenderBlock17scrollbarsChangedEbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function b3(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(3);
}
function __ZNK7WebCore17RenderTextControl36requiresForcedStyleRecalcPropagationEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function v___ZN7WebCore9RenderBox15createInlineBoxEv__wrapper() {
 __ZN7WebCore9RenderBox15createInlineBoxEv();
}
function __ZNK7WebCore13RenderElement14firstChildSlowEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 28 >> 2] | 0;
}
function __ZNK7WebCore13RenderElement13lastChildSlowEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 32 >> 2] | 0;
}
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 511](i2 | 0) | 0;
}
function __ZNK7WebCore17RenderTextControl28canBeProgramaticallyScrolledEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore17RenderTextControl24canHaveGeneratedChildrenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11RenderBlock30canCollapseAnonymousBlockChildEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore17RenderTextControl10renderNameEv(i1) {
 i1 = i1 | 0;
 return H_BASE + 8 | 0;
}
function __ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b16(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(16);
}
function __ZNK7WebCore12RenderObject27isSVGTransformableContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore27RenderTextControlSingleLine11isTextFieldEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZNK7WebCore17CachedImageClient18resourceClientTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject23isTextControlInnerBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23createsAnonymousWrapperEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isSVGViewportContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isSVGResourceContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMathMLFractionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject21isRenderScrollbarPartEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isStretchingChildrenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isSVGHiddenContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isRenderMathMLFencedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12RenderObject23setNeedsTransformUpdateEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore12RenderObject21needsBoundariesUpdateEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isSnapshottedPlugInEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isSVGResourceFilterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isRenderMathMLBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isFileUploadControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b9(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(9);
 return 0;
}
function __ZNK7WebCore17RenderTextControl13isTextControlEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject18isSVGForeignObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderMathMLRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderMathMLMathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderFullScreenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderFlowThreadEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18canBeSelectionLeafEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore17RenderTextControl12avoidsFloatsEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject17isSVGGradientStopEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject17isRenderMathMLRowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isRenderTableColEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isRenderSVGBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isEmbeddedObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject15isSVGInlineTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject15isDetailsMarkerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isTableSectionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isTableCaptionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isSVGContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderRegionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderIFrameEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderButtonEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isSliderThumbEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isSVGTextPathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isRenderImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isFlexibleBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isCombineTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject12isRenderGridEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject12isListMarkerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isTableCellEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isSVGInlineEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isTextAreaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isTableRowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isSVGShapeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isSVGImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isRubyTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isRubyBaseEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isProgressEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isMenuListEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isListItemEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isFrameSetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isFieldsetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b10(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(10);
}
function __ZNK7WebCore12RenderObject9isSVGTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isSVGRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isSVGPathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isRubyRunEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isReplicaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isListBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isCounterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject8isWidgetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject8isSliderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject8isCanvasEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore9RenderBox14stopAutoscrollEv(i1) {
 i1 = i1 | 0;
 return;
}
function b12(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(12);
}
function __ZNK7WebCore12RenderObject7isVideoEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isQuoteEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isMeterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isMediaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isFrameEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject6lengthEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject6isRubyEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject5isWBREv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b14(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(14);
 return 0;
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
}
function b11() {
 abort(11);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0,__ZNK7WebCore12RenderObject19isSVGResourceFilterEv,b0,ii___ZNK7WebCore11RenderBlock14firstLineBlockEv__wrapper,b0,__ZNK7WebCore12RenderObject13isSVGTextPathEv,b0,__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv,b0,__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv,b0,__ZNK7WebCore12RenderObject10isRubyTextEv,b0,__ZNK7WebCore12RenderObject6isRubyEv,b0,__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv,b0,__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv,b0,ii___ZNK7WebCore15RenderBlockFlow17firstLineBaselineEv__wrapper,b0,ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper,b0,__ZNK7WebCore12RenderObject14isTableCaptionEv,b0,__ZNK7WebCore12RenderObject8isWidgetEv,b0,__ZNK7WebCore11RenderBlock30canCollapseAnonymousBlockChildEv
  ,b0,__ZNK7WebCore12RenderObject18isRenderFullScreenEv,b0,__ZNK7WebCore20RenderBoxModelObject11borderRightEv,b0,__ZNK7WebCore12RenderObject10isSVGShapeEv,b0,__ZNK7WebCore12RenderObject10isMenuListEv,b0,__ZNK7WebCore12RenderObject9isSVGRootEv,b0,__ZNK7WebCore12RenderObject7isFrameEv,b0,__ZNK7WebCore20RenderBoxModelObject12borderBottomEv,b0,__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv,b0,__ZNK7WebCore12RenderObject15isSVGInlineTextEv,b0,ii___ZNK7WebCore15RenderBlockFlow15canHaveChildrenEv__wrapper,b0,__ZNK7WebCore12RenderObject7isMeterEv,b0,__ZNK7WebCore12RenderObject14isSVGContainerEv,b0,__ZNK7WebCore12RenderObject22isSVGResourceContainerEv,b0,__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv,b0,__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv
  ,b0,__ZNK7WebCore12RenderObject7isQuoteEv,b0,__ZNK7WebCore12RenderObject10isListItemEv,b0,__ZNK7WebCore11RenderBlock26isInlineBlockOrInlineTableEv,b0,__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv,b0,__ZNK7WebCore12RenderObject10isSVGImageEv,b0,__ZNK7WebCore27RenderTextControlSingleLine9scrollTopEv,b0,__ZNK7WebCore12RenderObject15isDetailsMarkerEv,b0,__ZNK7WebCore12RenderObject18isRenderMathMLMathEv,b0,__ZNK7WebCore20RenderBoxModelObject11borderStartEv,b0,__ZNK7WebCore12RenderObject16isRenderTableColEv,b0,__ZNK7WebCore12RenderObject7isVideoEv,b0,__ZNK7WebCore12RenderObject10isProgressEv,b0,__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv,b0,__ZNK7WebCore12RenderObject13isCombineTextEv,b0,__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv
  ,b0,__ZNK7WebCore12RenderObject5isWBREv,b0,__ZNK7WebCore12RenderObject22isSVGViewportContainerEv,b0,__ZNK7WebCore12RenderObject18canBeSelectionLeafEv,b0,__ZNK7WebCore13RenderElement14firstChildSlowEv,b0,ii___ZNK7WebCore9RenderBox22verticalScrollbarWidthEv__wrapper,b0,ii___ZN7WebCore11RenderBlock32updateLogicalWidthAndColumnWidthEv__wrapper,b0,__ZNK7WebCore12RenderObject16isRenderSVGBlockEv,b0,__ZNK7WebCore17RenderTextControl12avoidsFloatsEv,b0,__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv,b0,__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv,b0,ii___ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv__wrapper,b0,__ZNK7WebCore12RenderObject17isRenderMathMLRowEv,b0,ii___ZNK7WebCore11RenderBlock14paginationUnitEv__wrapper,b0,ii___ZNK7WebCore15RenderBlockFlow8hasLinesEv__wrapper,b0,ii___ZNK7WebCore11RenderBlock24shouldPaintSelectionGapsEv__wrapper
  ,b0,__ZNK7WebCore15RenderBlockFlow14containsFloatsEv,b0,__ZNK7WebCore12RenderObject9isReplicaEv,b0,__ZNK7WebCore12RenderObject19isFileUploadControlEv,b0,__ZNK7WebCore27RenderTextControlSingleLine10scrollLeftEv,b0,__ZNK7WebCore12RenderObject7isMediaEv,b0,__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv,b0,__ZNK7WebCore11RenderBlock19virtualContinuationEv,b0,__ZNK7WebCore12RenderObject14isRenderButtonEv,b0,__ZNK7WebCore12RenderObject8isSliderEv,b0,ii___ZNK7WebCore11RenderBlock22outlineStyleForRepaintEv__wrapper,b0,__ZNK7WebCore17RenderTextControl13isTextControlEv,b0,__ZNK7WebCore12RenderObject10isRubyBaseEv,b0,__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv,b0,ii___ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv__wrapper,b0,__ZNK7WebCore12RenderObject18isSVGForeignObjectEv
  ,b0,__ZNK7WebCore27RenderTextControlSingleLine11scrollWidthEv,b0,ii___ZNK7WebCore9RenderBox33needsPreferredWidthsRecalculationEv__wrapper,b0,__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv,b0,ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper,b0,__ZNK7WebCore12RenderObject13isSliderThumbEv,b0,__ZNK7WebCore12RenderObject16isEmbeddedObjectEv,b0,__ZNK7WebCore12RenderObject9isSVGTextEv,b0,__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv,b0,__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv,b0,__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv,b0,__ZNK7WebCore12RenderObject11isTableCellEv,b0,__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv,b0,__ZNK7WebCore12RenderObject12isRenderGridEv,b0,__ZNK7WebCore12RenderObject9isListBoxEv,b0,__ZNK7WebCore17RenderTextControl10renderNameEv
  ,b0,__ZNK7WebCore12RenderObject9isSVGPathEv,b0,ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper,b0,ii___ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv__wrapper,b0,__ZNK7WebCore13RenderElement13lastChildSlowEv,b0,__ZNK7WebCore12RenderObject13isRenderImageEv,b0,__ZNK7WebCore12RenderObject18isRenderMathMLRootEv,b0,ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper,b0,__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv,b0,ii___ZNK7WebCore11RenderBlock14hasLineIfEmptyEv__wrapper,b0,ii___ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv__wrapper,b0,__ZNK7WebCore12RenderObject12isListMarkerEv,b0,__ZNK7WebCore12RenderObject14isRenderIFrameEv,b0,__ZNK7WebCore12RenderObject6lengthEv,b0,__ZNK7WebCore12RenderObject10isTableRowEv,b0,__ZNK7WebCore12RenderObject10isFrameSetEv
  ,b0,__ZNK7WebCore20RenderBoxModelObject11borderAfterEv,b0,__ZNK7WebCore9RenderBox13requiresLayerEv,b0,__ZNK7WebCore12RenderObject10isFieldsetEv,b0,__ZNK7WebCore12RenderObject11isSVGInlineEv,b0,__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv,b0,__ZNK7WebCore12RenderObject18isRenderFlowThreadEv,b0,ii___ZNK7WebCore9RenderBox21hasRelativeDimensionsEv__wrapper,b0,__ZNK7WebCore12RenderObject9isRubyRunEv,b0,__ZNK7WebCore20RenderBoxModelObject9borderEndEv,b0,__ZNK7WebCore17RenderTextControl28canBeProgramaticallyScrolledEv,b0,__ZNK7WebCore27RenderTextControlSingleLine12scrollHeightEv,b0,__ZNK7WebCore17RenderTextControl36requiresForcedStyleRecalcPropagationEv,b0,__ZNK7WebCore12RenderObject14isRenderRegionEv,b0,ii___ZNK7WebCore17RenderTextControl28canBeReplacedWithInlineRunInEv__wrapper,b0,ii___ZNK7WebCore11RenderBlock13hoverAncestorEv__wrapper
  ,b0,__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv,b0,__ZNK7WebCore17CachedImageClient18resourceClientTypeEv,b0,__ZN7WebCore12RenderObject21needsBoundariesUpdateEv,b0,__ZNK7WebCore27RenderTextControlSingleLine14hasControlClipEv,b0,__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv,b0,__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv,b0,__ZNK7WebCore12RenderObject10isTextAreaEv,b0,__ZNK7WebCore12RenderObject7isImageEv,b0,__ZNK7WebCore27RenderTextControlSingleLine11isTextFieldEv,b0,__ZNK7WebCore12RenderObject9isCounterEv,b0,ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper,b0,__ZNK7WebCore20RenderBoxModelObject9borderTopEv,b0,__ZNK7WebCore12RenderObject17isSVGGradientStopEv,b0,__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv,b0,__ZNK7WebCore12RenderObject8isCanvasEv
  ,b0,__ZNK7WebCore20RenderBoxModelObject10borderLeftEv,b0,ii___ZNK7WebCore11RenderBlock21isSelfCollapsingBlockEv__wrapper,b0,__ZNK7WebCore12RenderObject7isEmptyEv,b0,__ZNK7WebCore12RenderObject20isStretchingChildrenEv,b0,__ZNK7WebCore12RenderObject7isTableEv,b0,__ZNK7WebCore12RenderObject13isFlexibleBoxEv,b0,__ZNK7WebCore12RenderObject14isTableSectionEv,b0,__ZNK7WebCore17RenderTextControl24canHaveGeneratedChildrenEv,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0];
  var FUNCTION_TABLE_viiiiiiiiii = [b1,b1,viiiiiiiiii___ZN7WebCore15RenderBlockFlow19inlineSelectionGapsERNS_11RenderBlockERKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitESA_SA_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE__wrapper,b1];
  var FUNCTION_TABLE_fii = [b2,b2,__ZN7WebCore27RenderTextControlSingleLine15getAvgCharWidthEN3WTF12AtomicStringE,b2];
  var FUNCTION_TABLE_viiiii = [b3,b3,viiiii___ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb__wrapper,b3,viiiii___ZN7WebCore11RenderBlock14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper,b3,viiiii___ZN7WebCore15RenderBlockFlow22clipOutFloatingObjectsERNS_11RenderBlockEPKNS_9PaintInfoERKNS_11LayoutPointERKNS_10LayoutSizeE__wrapper,b3,viiiii___ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper,b3,viiiii___ZNK7WebCore15RenderBlockFlow29logicalLeftFloatOffsetForLineENS_10LayoutUnitES1_S1___wrapper,b3,viiiii___ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper,b3,viiiii___ZNK7WebCore15RenderBlockFlow30logicalRightFloatOffsetForLineENS_10LayoutUnitES1_S1___wrapper,b3,viiiii___ZN7WebCore11RenderBlock13paintChildrenERNS_9PaintInfoERKNS_11LayoutPointES2_b__wrapper,b3,__ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_vi = [b4,b4,vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper,b4,vi___ZN7WebCore15RenderBlockFlow19updateLogicalHeightEv__wrapper,b4,vi___ZN7WebCore11RenderBlock33markForPaginationRelayoutIfNeededEv__wrapper,b4,vi___ZN7WebCore15RenderBlockFlow11deleteLinesEv__wrapper,b4,vi___ZN7WebCore9RenderBox15updateFromStyleEv__wrapper,b4,vi___ZN7WebCore13RenderElement21willBeRemovedFromTreeEv__wrapper,b4,vi___ZN7WebCore17RenderTextControl17updateFromElementEv__wrapper,b4,vi___ZN7WebCore11RenderBlock23addOverflowFromChildrenEv__wrapper,b4,vi___ZN7WebCore11RenderBlock26simplifiedNormalFlowLayoutEv__wrapper,b4,vi___ZN7WebCore15RenderBlockFlow15willBeDestroyedEv__wrapper,b4,vi___ZN7WebCore9RenderBox18updateLogicalWidthEv__wrapper,b4,__ZN7WebCore9RenderBox14stopAutoscrollEv,b4,__ZN7WebCore27RenderTextControlSingleLineD0Ev,b4,__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv
  ,b4,vi___ZN7WebCore17RenderTextControl29computePreferredLogicalWidthsEv__wrapper,b4,vi___ZN7WebCore15RenderBlockFlow16insertedIntoTreeEv__wrapper,b4,vi___ZN7WebCore11RenderBlock15calcColumnWidthEv__wrapper,b4,vi___ZN7WebCore11RenderBlock17updateFirstLetterEv__wrapper,b4,__ZN7WebCore27RenderTextControlSingleLine6layoutEv,b4,__ZN7WebCore27RenderTextControlSingleLineD2Ev,b4,vi___ZN7WebCore15RenderBlockFlow29addOverflowFromInlineChildrenEv__wrapper,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_vii = [b5,b5,vii___ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv__wrapper,b5,__ZN7WebCore15RenderBlockFlow26dirtyLinesFromChangedChildEPNS_12RenderObjectE,b5,vii___ZNK7WebCore9RenderBox10offsetLeftEv__wrapper,b5,__ZNK7WebCore15RenderBlockFlow21collapsedMarginBeforeEv,b5,__ZNK7WebCore20RenderBoxModelObject12paddingStartEv,b5,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b5,vii___ZN7WebCore15RenderBlockFlow19createRootInlineBoxEv__wrapper,b5,vii___ZN7WebCore11RenderBlock11removeChildERNS_12RenderObjectE__wrapper,b5,__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv,b5,vii___ZNK7WebCore9RenderBox37containingBlockLogicalWidthForContentEv__wrapper,b5,vii___ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv__wrapper,b5,vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper,b5,__ZNK7WebCore27RenderTextControlSingleLine25computeLogicalHeightLimitEv,b5,__ZNK7WebCore9RenderBox9marginTopEv
  ,b5,vii___ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE__wrapper,b5,__ZN7WebCore27RenderTextControlSingleLine10autoscrollERKNS_8IntPointE,b5,__ZN7WebCore27RenderTextControlSingleLine13setScrollLeftEi,b5,__ZNK7WebCore20RenderBoxModelObject10paddingTopEv,b5,vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper,b5,__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv,b5,vii___ZN7WebCore11RenderBlock15updateDragStateEb__wrapper,b5,__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv,b5,__ZNK7WebCore9RenderBox13intrinsicSizeEv,b5,__ZNK7WebCore15RenderBlockFlow20collapsedMarginAfterEv,b5,vii___ZNK7WebCore9RenderBox9offsetTopEv__wrapper,b5,vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper,b5,vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper,b5,vii___ZNK7WebCore9RenderBox24maxPreferredLogicalWidthEv__wrapper,b5,__ZN7WebCore17RenderTextControl28removeLeftoverAnonymousBlockEPNS_11RenderBlockE
  ,b5,__ZNK7WebCore20RenderBoxModelObject10paddingEndEv,b5,__ZNK7WebCore9RenderBox18visualOverflowRectEv,b5,__ZNK7WebCore9RenderBox11marginRightEv,b5,__ZNK7WebCore9RenderBox10marginLeftEv,b5,__ZNK7WebCore9RenderBox11offsetWidthEv,b5,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b5,vii___ZN7WebCore9RenderBox9panScrollERKNS_8IntPointE__wrapper,b5,vii___ZNK7WebCore11RenderBlock31offsetFromLogicalTopOfFirstPageEv__wrapper,b5,__ZNK7WebCore20RenderBoxModelObject12paddingRightEv,b5,__ZNK7WebCore27RenderTextControlSingleLine23centerContainerIfNeededEPNS_9RenderBoxE,b5,__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv,b5,vii___ZN7WebCore15RenderBlockFlow24repaintOverhangingFloatsEb__wrapper,b5,vii___ZN7WebCore11RenderBlock20childBecameNonInlineEPNS_12RenderObjectE__wrapper,b5,vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper,b5,__ZNK7WebCore9RenderBox17borderBoundingBoxEv
  ,b5,__ZN7WebCore27RenderTextControlSingleLine12setScrollTopEi,b5,__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv,b5,__ZNK7WebCore9RenderBox12marginBottomEv,b5,vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper,b5,__ZNK7WebCore9RenderBox12offsetHeightEv,b5,vii___ZNK7WebCore11RenderBlock21availableLogicalWidthEv__wrapper,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_iiiiiii = [b6,b6,__ZN7WebCore27RenderTextControlSingleLine11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE,b6,iiiiiii___ZN7WebCore15RenderBlockFlow21hitTestInlineChildrenERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper,b6,iiiiiii___ZN7WebCore11RenderBlock15hitTestContentsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper,b6];
  var FUNCTION_TABLE_iiiii = [b7,b7,iiiii___ZN7WebCore11RenderBlock24isPointInOverflowControlERNS_13HitTestResultERKNS_11LayoutPointES5___wrapper,b7,iiiii___ZN7WebCore15RenderBlockFlow21relayoutForPaginationEbNS_10LayoutUnitERNS_21LayoutStateMaintainerE__wrapper,b7,b7,b7];
  var FUNCTION_TABLE_iiiifi = [b8,b8,__ZN7WebCore27RenderTextControlSingleLine13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE,b8,__ZN7WebCore27RenderTextControlSingleLine6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE,b8,b8,b8];
  var FUNCTION_TABLE_iiii = [b9,b9,iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper,b9,__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE,b9,iiii___ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE__wrapper,b9,iiii___ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj__wrapper,b9,iiii___ZNK7WebCore9RenderBox22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper,b9,b9,b9,b9,b9];
  var FUNCTION_TABLE_viii = [b10,b10,__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE,b10,viii___ZN7WebCore15RenderBlockFlow15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE__wrapper,b10,viii___ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper,b10,viii___ZNK7WebCore9RenderBox29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper,b10,viii___ZNK7WebCore11RenderBlock16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE__wrapper,b10,viii___ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE__wrapper,b10,__ZN7WebCore27RenderTextControlSingleLine14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE,b10,__ZN7WebCore27RenderTextControlSingleLine5paintERNS_9PaintInfoERKNS_11LayoutPointE,b10,__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE,b10,viii___ZN7WebCore15RenderBlockFlow34positionForPointWithInlineChildrenERKNS_11LayoutPointE__wrapper,b10,viii___ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b10,viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper,b10,__ZN7WebCore11RenderBlock17scrollbarsChangedEbb,b10,viii___ZN7WebCore15RenderBlockFlow16positionForPointERKNS_11LayoutPointE__wrapper
  ,b10,viii___ZNK7WebCore17RenderTextControl29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2___wrapper,b10,__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE,b10,viii___ZN7WebCore11RenderBlock19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper,b10,viii___ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE__wrapper,b10,__ZNK7WebCore27RenderTextControlSingleLine15controlClipRectERKNS_11LayoutPointE,b10,viii___ZN7WebCore11RenderBlock28addChildIgnoringContinuationEPNS_12RenderObjectES2___wrapper,b10,__ZN7WebCore27RenderTextControlSingleLineC2ERNS_16HTMLInputElementEN3WTF7PassRefINS_11RenderStyleEEE,b10,__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE,b10,viii___ZNK7WebCore11RenderBlock13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE__wrapper,b10,viii___ZN7WebCore9RenderBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b10,viii___ZN7WebCore15RenderBlockFlow11layoutBlockEbNS_10LayoutUnitE__wrapper,b10,viii___ZN7WebCore15RenderBlockFlow32moveAllChildrenIncludingFloatsToEPNS_11RenderBlockEb__wrapper,b10,viii___ZN7WebCore11RenderBlock8addChildEPNS_12RenderObjectES2___wrapper,b10,viii___ZN7WebCore11RenderBlock12imageChangedEPKvPKNS_7IntRectE__wrapper,b10,viii___ZN7WebCore15RenderBlockFlow19paintInlineChildrenERNS_9PaintInfoERKNS_11LayoutPointE__wrapper
  ,b10,__ZNK7WebCore27RenderTextControlSingleLine20createInnerTextStyleEPKNS_11RenderStyleE,b10,viii___ZN7WebCore15RenderBlockFlow15computeOverflowENS_10LayoutUnitEb__wrapper,b10,viii___ZN7WebCore11RenderBlock11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b10,viii___ZNK7WebCore11RenderBlock13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb__wrapper,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10
  ,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10
  ,b10,b10,b10,b10,b10,b10,b10,b10,b10];
  var FUNCTION_TABLE_v = [b11,b11,v___ZN7WebCore9RenderBox15createInlineBoxEv__wrapper,b11];
  var FUNCTION_TABLE_viif = [b12,b12,__ZNK7WebCore27RenderTextControlSingleLine28preferredContentLogicalWidthEf,b12];
  var FUNCTION_TABLE_viiiiii = [b13,b13,viiiiii___ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE__wrapper,b13];
  var FUNCTION_TABLE_iii = [b14,b14,iii___ZNK7WebCore11RenderBlock32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE__wrapper,b14,iii___ZNK7WebCore11RenderBlock15requiresColumnsEi__wrapper,b14,iii___ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE__wrapper,b14,iii___ZNK7WebCore15RenderBlockFlow19inlineBlockBaselineENS_17LineDirectionModeE__wrapper,b14,iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper,b14,iii___ZN7WebCore17RenderTextControl26layoutSpecialExcludedChildEb__wrapper,b14,iii___ZNK7WebCore15RenderBlockFlow20textAlignmentForLineEb__wrapper,b14,iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper,b14,iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper,b14,iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper,b14,b14,b14,b14,b14,b14,b14,b14
  ,b14,b14,b14];
  var FUNCTION_TABLE_iiiiii = [b15,b15,iiiiii___ZNK7WebCore11RenderBlock16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper,b15,iiiiii___ZN7WebCore15RenderBlockFlow13hitTestFloatsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointE__wrapper,b15,iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper,b15];
  var FUNCTION_TABLE_viiii = [b16,b16,viiii___ZN7WebCore11RenderBlock37checkForPaginationLogicalHeightChangeERNS_10LayoutUnitERbS3___wrapper,b16,viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper,b16,viiii___ZNK7WebCore17RenderTextControl20computeLogicalHeightENS_10LayoutUnitES1_RNS_9RenderBox27LogicalExtentComputedValuesE__wrapper,b16,viiii___ZN7WebCore15RenderBlockFlow34addFocusRingRectsForInlineChildrenERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper,b16,viiii___ZNK7WebCore11RenderBlock25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper,b16,viiii___ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE__wrapper,b16,__ZNK7WebCore15RenderBlockFlow31adjustInlineDirectionLineBoundsEiRfS1_,b16,__ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb,b16,viiii___ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper,b16,viiii___ZN7WebCore17RenderTextControl17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper,b16,__ZNK7WebCore27RenderTextControlSingleLine27computeControlLogicalHeightENS_10LayoutUnitES1_,b16,viiii___ZN7WebCore15RenderBlockFlow11paintFloatsERNS_9PaintInfoERKNS_11LayoutPointEb__wrapper,b16,__ZN7WebCore11RenderBlock23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb,b16,b16
  ,b16,b16,b16];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_viiiiiiiiii: dynCall_viiiiiiiiii, dynCall_fii: dynCall_fii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_iiiii: dynCall_iiiii, dynCall_iiiifi: dynCall_iiiifi, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viif: dynCall_viif, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_viiiiiiiiii": invoke_viiiiiiiiii, "invoke_fii": invoke_fii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_iiiii": invoke_iiiii, "invoke_iiiifi": invoke_iiiifi, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viif": invoke_viif, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = asm["dynCall_viiiiiiiiii"];
var dynCall_fii = Module["dynCall_fii"] = asm["dynCall_fii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_iiiifi = Module["dynCall_iiiifi"] = asm["dynCall_iiiifi"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viif = Module["dynCall_viif"] = asm["dynCall_viif"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore12RenderObject19isSVGResourceFilterEv","__ZNK7WebCore9RenderBox11marginRightEv","__ZNK7WebCore12RenderObject13isSVGTextPathEv","__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv","__ZNK7WebCore12RenderObject10isRubyTextEv","__ZNK7WebCore12RenderObject6isRubyEv","_strlen","__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv","__ZN7WebCore27RenderTextControlSingleLine14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv","__ZN7WebCore15RenderBlockFlow26dirtyLinesFromChangedChildEPNS_12RenderObjectE","__ZNK7WebCore15RenderBlockFlow21collapsedMarginBeforeEv","__ZNK7WebCore20RenderBoxModelObject12paddingStartEv","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZN7WebCore11RenderStyle16setLogicalHeightENS_6LengthE","__ZNK7WebCore12RenderObject8isWidgetEv","__ZNK7WebCore11RenderBlock30canCollapseAnonymousBlockChildEv","__ZNK7WebCore12RenderObject18isRenderFullScreenEv","__ZNK7WebCore20RenderBoxModelObject11borderRightEv","_memcpy","__ZNK7WebCore20RenderBoxModelObject9borderEndEv","__ZNK7WebCore12RenderObject10isMenuListEv","__ZNK7WebCore27RenderTextControlSingleLine20createInnerTextStyleEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject9isSVGRootEv","__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv","__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_","__ZNK7WebCore20RenderBoxModelObject12borderBottomEv","__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv","__ZNK7WebCore12RenderObject15isSVGInlineTextEv","__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv","__ZNK7WebCore12RenderObject7isMeterEv","__ZNK7WebCore12RenderObject14isSVGContainerEv","__ZNK7WebCore9RenderBox13intrinsicSizeEv","__ZNK7WebCore12RenderObject22isSVGResourceContainerEv","__ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE","__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv","__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv","__ZNK7WebCore12RenderObject7isQuoteEv","__ZNK7WebCore12RenderObject10isListItemEv","__ZNK7WebCore12RenderObject17isRenderMathMLRowEv","__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv","__ZNK7WebCore12RenderObject10isSVGImageEv","__ZNK7WebCore27RenderTextControlSingleLine9scrollTopEv","__ZNK7WebCore27RenderTextControlSingleLine25computeLogicalHeightLimitEv","__ZNK7WebCore12RenderObject20isStretchingChildrenEv","__ZNK7WebCore12RenderObject15isDetailsMarkerEv","__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE","__ZNK7WebCore20RenderBoxModelObject12paddingRightEv","__ZN7WebCore27RenderTextControlSingleLine5paintERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject16isRenderTableColEv","__ZNK7WebCore12RenderObject7isVideoEv","__ZNK7WebCore12RenderObject10isProgressEv","__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv","__ZNK7WebCore12RenderObject13isCombineTextEv","__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv","__ZNK7WebCore12RenderObject5isWBREv","__ZNK7WebCore12RenderObject22isSVGViewportContainerEv","__ZNK7WebCore27RenderTextControlSingleLine28preferredContentLogicalWidthEf","__ZNK7WebCore27RenderTextControlSingleLine21createInnerBlockStyleEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject18canBeSelectionLeafEv","__ZNK7WebCore9RenderBox9marginTopEv","__ZNK7WebCore13RenderElement14firstChildSlowEv","__ZN7WebCore27RenderTextControlSingleLine12setScrollTopEi","__ZN7WebCore27RenderTextControlSingleLine10autoscrollERKNS_8IntPointE","__ZNK7WebCore17RenderTextControl12avoidsFloatsEv","__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv","__ZNK7WebCore12RenderObject7isFrameEv","__ZN7WebCore12StyleBoxDataD2Ev","__ZNK7WebCore11RenderBlock26isInlineBlockOrInlineTableEv","__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv","__ZNK7WebCore12RenderObject16isRenderSVGBlockEv","__ZNK7WebCore15RenderBlockFlow14containsFloatsEv","__ZNK7WebCore12RenderObject9isReplicaEv","__ZNK7WebCore12RenderObject19isFileUploadControlEv","__ZN7WebCore11RenderBlock17scrollbarsChangedEbb","__ZNK7WebCore15RenderBlockFlow31adjustInlineDirectionLineBoundsEiRfS1_","__ZNK7WebCore12RenderObject7isMediaEv","__ZN7WebCore27RenderTextControlSingleLineD0Ev","__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv","__ZNK7WebCore11RenderBlock19virtualContinuationEv","__ZNK7WebCore12RenderObject14isRenderButtonEv","__ZN7WebCore27RenderTextControlSingleLine6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE","__ZNK7WebCore12RenderObject8isSliderEv","__ZNK7WebCore17RenderTextControl13isTextControlEv","__ZNK7WebCore12RenderObject10isRubyBaseEv","__ZNK7WebCore15RenderBlockFlow20collapsedMarginAfterEv","__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv","__ZNK7WebCore12RenderObject8isCanvasEv","__ZNK7WebCore27RenderTextControlSingleLine11scrollWidthEv","__ZNK7WebCore12RenderObject18isRenderMathMLMathEv","__ZNK7WebCore12RenderObject14isTableCaptionEv","__ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb","__ZN7WebCore27RenderTextControlSingleLine15getAvgCharWidthEN3WTF12AtomicStringE","__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv","__ZNK7WebCore12RenderObject16isEmbeddedObjectEv","__ZNK7WebCore12RenderObject13isSliderThumbEv","__ZN7WebCore17RenderTextControl28removeLeftoverAnonymousBlockEPNS_11RenderBlockE","__ZNK7WebCore12RenderObject9isSVGTextEv","__ZNK7WebCore12RenderObject10isTextAreaEv","__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv","__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv","__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv","__ZN7WebCore27RenderTextControlSingleLine27capsLockStateMayHaveChangedEv","__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE","_memset","__ZNK7WebCore12RenderObject10isSVGShapeEv","__ZNK7WebCore12RenderObject11isTableCellEv","__ZN7WebCore27RenderTextControlSingleLine13setScrollLeftEi","__ZNK7WebCore12RenderObject12isRenderGridEv","__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv","__ZNK7WebCore20RenderBoxModelObject10paddingEndEv","__ZN7WebCore27RenderTextControlSingleLine13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE","__ZNK7WebCore27RenderTextControlSingleLine23centerContainerIfNeededEPNS_9RenderBoxE","__ZNK7WebCore12RenderObject9isListBoxEv","__ZNK7WebCore17RenderTextControl10renderNameEv","__ZNK7WebCore12RenderObject9isSVGPathEv","__ZNK7WebCore9RenderBox18visualOverflowRectEv","__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv","__ZN7WebCore11RenderStyle11setFlexGrowEf","__ZNK7WebCore12RenderObject13isRenderImageEv","__ZNK7WebCore12RenderObject18isRenderMathMLRootEv","__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv","__ZNK7WebCore12RenderObject6lengthEv","__ZNK7WebCore27RenderTextControlSingleLine15controlClipRectERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject10isTableRowEv","__ZNK7WebCore12RenderObject13isFlexibleBoxEv","__ZNK7WebCore27RenderTextControlSingleLine12inputElementEv","__ZNK7WebCore9RenderBox11offsetWidthEv","__ZNK7WebCore12RenderObject10isFrameSetEv","__ZNK7WebCore20RenderBoxModelObject11borderAfterEv","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZNK7WebCore9RenderBox13requiresLayerEv","__ZNK7WebCore12RenderObject10isFieldsetEv","__ZNK7WebCore12RenderObject11isSVGInlineEv","__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv","__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv","__ZN7WebCore27RenderTextControlSingleLineC2ERNS_16HTMLInputElementEN3WTF7PassRefINS_11RenderStyleEEE","__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject18isSVGForeignObjectEv","__ZNK7WebCore12RenderObject18isRenderFlowThreadEv","__ZNK7WebCore13RenderElement13lastChildSlowEv","__ZNK7WebCore9RenderBox20contentLogicalHeightEv","__ZNK7WebCore12RenderObject9isRubyRunEv","__ZNK7WebCore9RenderBox12marginBottomEv","__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv","__ZNK7WebCore12RenderObject14isRenderIFrameEv","__ZN7WebCore27RenderTextControlSingleLine11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE","__ZNK7WebCore27RenderTextControlSingleLine12scrollHeightEv","__ZNK7WebCore17RenderTextControl28canBeProgramaticallyScrolledEv","__ZNK7WebCore12RenderObject14isRenderRegionEv","__ZN7WebCore9RenderBox14stopAutoscrollEv","__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv","__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv","__ZNK7WebCore17CachedImageClient18resourceClientTypeEv","__ZN7WebCore12RenderObject21needsBoundariesUpdateEv","__ZNK7WebCore27RenderTextControlSingleLine27computeControlLogicalHeightENS_10LayoutUnitES1_","__ZNK7WebCore27RenderTextControlSingleLine14hasControlClipEv","__ZN7WebCore27RenderTextControlSingleLine6layoutEv","__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv","__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv","__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv","__ZNK7WebCore12RenderObject7isImageEv","__ZNK7WebCore27RenderTextControlSingleLine11isTextFieldEv","__ZNK7WebCore12RenderObject9isCounterEv","__ZN7WebCore27RenderTextControlSingleLineD2Ev","__ZN7WebCore11RenderBlock23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb","__ZNK7WebCore20RenderBoxModelObject9borderTopEv","__ZNK7WebCore27RenderTextControlSingleLine10scrollLeftEv","__ZNK7WebCore12RenderObject17isSVGGradientStopEv","__ZNK7WebCore17RenderTextControl36requiresForcedStyleRecalcPropagationEv","__ZNK7WebCore20RenderBoxModelObject10paddingTopEv","__ZNK7WebCore20RenderBoxModelObject10borderLeftEv","__ZNK7WebCore9RenderBox17borderBoundingBoxEv","__ZNK7WebCore12RenderObject12isListMarkerEv","__ZNK7WebCore12RenderObject7isEmptyEv","__ZNK7WebCore20RenderBoxModelObject11borderStartEv","__ZNK7WebCore12RenderObject7isTableEv","__ZNK7WebCore27RenderTextControlSingleLine21textShouldBeTruncatedEv","__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv","__ZNK7WebCore12RenderObject14isTableSectionEv","__ZNK7WebCore9RenderBox10marginLeftEv","__ZNK7WebCore9RenderBox12offsetHeightEv","__ZNK7WebCore17RenderTextControl24canHaveGeneratedChildrenEv","__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE"]

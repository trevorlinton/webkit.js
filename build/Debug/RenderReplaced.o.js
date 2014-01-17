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
H_BASE = parentModule["_malloc"](1072 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1072;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14RenderReplacedC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE;
var __ZN7WebCore14RenderReplacedC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEERKNS_10LayoutSizeE;
var __ZN7WebCore14RenderReplacedC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEERKNS_10LayoutSizeE;
var __ZN7WebCore14RenderReplacedD1Ev;
/* memory initializer */ allocate([82,101,110,100,101,114,82,101,112,108,97,99,101,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiifi(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiifi"](index,a1,a2,a3,a4,a5);
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
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore14RenderReplacedE=(H_BASE+24)|0;
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
  var invoke_iiiifi=env.invoke_iiiifi;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore14RenderReplaced27computeReplacedLogicalWidthENS_22ShouldComputePreferredE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, d43 = +0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i21 = i20;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i29 = i2 + 36 | 0;
 i30 = HEAP32[i29 >> 2] | 0;
 i31 = (HEAP32[i30 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i31 | 0) == 3 | (i31 | 0) == 0) {
  i32 = HEAP32[i30 + 4 >> 2] | 0;
  i33 = i32 + 4 | 0;
  i34 = i32;
 } else {
  i32 = HEAP32[i30 + 4 >> 2] | 0;
  i33 = i32 + 12 | 0;
  i34 = i32;
 }
 i32 = HEAP8[i33 + 5 | 0] | 0;
 i33 = i32 & 255;
 do {
  if (!((i33 | 0) == 3 | (i33 | 0) == 2 | (i33 | 0) == 10)) {
   if ((i32 - 11 & 255) >>> 0 < 4 >>> 0) {
    break;
   }
   if ((i31 | 0) == 3 | (i31 | 0) == 0) {
    i35 = i34 + 4 | 0;
   } else {
    i35 = i34 + 12 | 0;
   }
   if (((HEAPU8[i35 + 5 | 0] | 0) - 6 | 0) >>> 0 < 4 >>> 0) {
    break;
   }
   i30 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 1028 >> 2] & 511](i2) | 0;
   HEAP8[i12] = 0;
   HEAPF64[i13 >> 3] = +0;
   i36 = i14 | 0;
   HEAPF32[i36 >> 2] = +0;
   i37 = i14 + 4 | 0;
   HEAPF32[i37 >> 2] = +0;
   __ZNK7WebCore14RenderReplaced41computeAspectRatioInformationForRenderBoxEPNS_9RenderBoxERNS_9FloatSizeERdRb(i2, i30, i14, i13, i12);
   i30 = HEAP32[i29 >> 2] | 0;
   i38 = (HEAP32[i30 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i38 | 0) == 3 | (i38 | 0) == 0) {
    i39 = HEAP32[i30 + 4 >> 2] | 0;
    i40 = i39 + 4 | 0;
    i41 = i39;
   } else {
    i39 = HEAP32[i30 + 4 >> 2] | 0;
    i40 = i39 + 12 | 0;
    i41 = i39;
   }
   do {
    if ((HEAP8[i40 + 5 | 0] | 0) == 0) {
     if ((i38 | 0) == 3 | (i38 | 0) == 0) {
      i42 = i41 + 12 | 0;
     } else {
      i42 = i41 + 4 | 0;
     }
     i39 = (HEAP8[i42 + 5 | 0] | 0) == 0;
     i30 = (HEAP8[i12] & 1) == 0;
     do {
      if (i30) {
       d43 = +HEAPF32[i36 >> 2];
       i44 = d43 > +0;
       i45 = i39 ^ 1;
       if (i45 | i44 ^ 1) {
        i46 = +HEAPF32[i37 >> 2] > +0;
        i47 = i45;
        i48 = i44;
        break;
       }
       i44 = i2 | 0;
       do {
        if (d43 < +2147483647) {
         if (d43 <= +-2147483648) {
          i49 = -2147483648;
          break;
         }
         i49 = ~~d43;
        } else {
         i49 = 2147483647;
        }
       } while (0);
       HEAP32[i15 >> 2] = i49;
       __ZNK7WebCore9RenderBox48computeReplacedLogicalWidthRespectingMinMaxWidthENS_10LayoutUnitENS_22ShouldComputePreferredE(i1, i44, i15, i3);
       STACKTOP = i4;
       return;
      } else {
       i46 = 0;
       i47 = i39 ^ 1;
       i48 = 0;
      }
     } while (0);
     do {
      if (+HEAPF64[i13 >> 3] != +0) {
       i39 = i47 | i48;
       if (!(i46 & (i39 ^ 1) | i47)) {
        i50 = i39;
        i51 = 40;
        break;
       }
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 896 >> 2] & 127](i16, i2);
       i39 = i2 | 0;
       d43 = +_round(+(+HEAPF64[i13 >> 3] * +(HEAP32[i16 >> 2] | 0)));
       do {
        if (d43 < +2147483647) {
         if (d43 <= +-2147483648) {
          i52 = -2147483648;
          break;
         }
         i52 = ~~d43;
        } else {
         i52 = 2147483647;
        }
       } while (0);
       HEAP32[i17 >> 2] = i52;
       __ZNK7WebCore9RenderBox48computeReplacedLogicalWidthRespectingMinMaxWidthENS_10LayoutUnitENS_22ShouldComputePreferredE(i1, i39, i17, i3);
       STACKTOP = i4;
       return;
      } else {
       if (i30) {
        break;
       }
       i50 = i47 | i48;
       i51 = 40;
      }
     } while (0);
     do {
      if ((i51 | 0) == 40) {
       if (i50 | i46) {
        break;
       }
       i30 = i2 | 0;
       i44 = __ZNK7WebCore12RenderObject15containingBlockEv(i30) | 0;
       L48 : do {
        if ((i44 | 0) == 0) {
         i51 = 63;
        } else {
         i45 = HEAP32[i44 + 20 >> 2] | 0;
         if ((i45 & 768 | 0) == 768) {
          i51 = 63;
          break;
         } else {
          i53 = i44;
          i54 = i45;
         }
         while (1) {
          i45 = i53 | 0;
          do {
           if ((i54 & 128 | 0) == 0) {
            i55 = HEAP32[i53 + 4 >> 2] | 0;
            if ((i55 | 0) == 0) {
             break;
            }
            if ((HEAP32[i55 + 12 >> 2] & 4 | 0) == 0) {
             break;
            }
            i56 = HEAP32[i55 + 44 >> 2] | 0;
            i55 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
            if ((i56 | 0) == (i55 | 0)) {
             i51 = 63;
             break L48;
            }
            if ((HEAP32[i56 + 12 >> 2] | 0) != (HEAP32[i55 + 12 >> 2] | 0)) {
             break;
            }
            if ((HEAP32[i56 + 16 >> 2] | 0) == (HEAP32[i55 + 16 >> 2] | 0)) {
             i51 = 63;
             break L48;
            }
           }
          } while (0);
          i55 = HEAP32[i53 + 36 >> 2] | 0;
          i57 = (HEAP32[i55 + 44 >> 2] | 0) >>> 13 & 3;
          if ((i57 | 0) == 3 | (i57 | 0) == 0) {
           i56 = HEAP32[i55 + 4 >> 2] | 0;
           i58 = i56 + 4 | 0;
           i59 = i56;
          } else {
           i56 = HEAP32[i55 + 4 >> 2] | 0;
           i58 = i56 + 12 | 0;
           i59 = i56;
          }
          i56 = HEAP8[i58 + 5 | 0] | 0;
          i55 = i56 & 255;
          if ((i55 | 0) == 3 | (i55 | 0) == 2 | (i55 | 0) == 10) {
           break;
          }
          if ((i56 - 11 & 255) >>> 0 < 4 >>> 0) {
           break;
          }
          i56 = __ZNK7WebCore12RenderObject15containingBlockEv(i45) | 0;
          i55 = HEAP32[i56 + 20 >> 2] | 0;
          if ((i55 & 768 | 0) == 768) {
           i51 = 63;
           break L48;
          } else {
           i53 = i56;
           i54 = i55;
          }
         }
         if ((i53 | 0) == 0) {
          i51 = 63;
          break;
         }
         i55 = i53 | 0;
         if ((i57 | 0) == 3 | (i57 | 0) == 0) {
          i60 = i59 + 4 | 0;
         } else {
          i60 = i59 + 12 | 0;
         }
         i56 = i60;
         i61 = HEAP32[i56 >> 2] | 0;
         i62 = HEAP32[i56 + 4 >> 2] | 0;
         HEAP32[i20 >> 2] = i61;
         HEAP32[i20 + 4 >> 2] = i62;
         if ((i61 & 0 | 0) == 0 & (i62 & 65280 | 0) == 2560) {
          __ZNK7WebCore6Length22incrementCalculatedRefEv(i21);
         }
         __ZNK7WebCore9RenderBox32computeReplacedLogicalWidthUsingENS_6LengthE(i19, i55, i21);
         __ZNK7WebCore9RenderBox48computeReplacedLogicalWidthRespectingMinMaxWidthENS_10LayoutUnitENS_22ShouldComputePreferredE(i18, i55, i19, i3);
         i55 = HEAP32[i18 >> 2] | 0;
         if ((HEAP8[i21 + 5 | 0] | 0) != 10) {
          i63 = i55;
          break;
         }
         __ZNK7WebCore6Length22decrementCalculatedRefEv(i21);
         i63 = i55;
        }
       } while (0);
       if ((i51 | 0) == 63) {
        __ZNK7WebCore11RenderBlock21availableLogicalWidthEv(i22, __ZNK7WebCore12RenderObject15containingBlockEv(i30) | 0);
        i63 = HEAP32[i22 >> 2] | 0;
       }
       i44 = HEAP32[i29 >> 2] | 0;
       i39 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i44 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i44 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i44 + 40 >> 2] | 0) >>> 30 & 1) | 0;
       HEAP32[i5 >> 2] = i63;
       i44 = i2 + 4 | 0;
       __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i23, i39, i5, HEAP32[(HEAP32[(HEAP32[(HEAP32[i44 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
       i39 = HEAP32[i29 >> 2] | 0;
       i55 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i39 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i39 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i39 + 40 >> 2] | 0) >>> 30 & 1) | 0;
       HEAP32[i6 >> 2] = i63;
       __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i24, i55, i6, HEAP32[(HEAP32[(HEAP32[(HEAP32[i44 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
       i44 = HEAP32[i23 >> 2] | 0;
       i55 = HEAP32[i24 >> 2] | 0;
       i39 = i2 | 0;
       i62 = HEAP32[i2 + 52 >> 2] | 0;
       __ZNK7WebCore9RenderBox11clientWidthEv(i25, i39);
       i61 = i63 - i44 - i55 - i62 + (HEAP32[i25 >> 2] | 0) | 0;
       i62 = (i61 | 0) > 0 ? i61 : 0;
       do {
        if ((HEAP8[i12] & 1) == 0) {
         i64 = i62;
        } else {
         d43 = +(i62 | 0) * +HEAPF32[i36 >> 2] / +100;
         if (d43 >= +2147483647) {
          i64 = 2147483647;
          break;
         }
         if (d43 <= +-2147483648) {
          i64 = -2147483648;
          break;
         }
         i64 = ~~d43;
        }
       } while (0);
       HEAP32[i26 >> 2] = i64;
       __ZNK7WebCore9RenderBox48computeReplacedLogicalWidthRespectingMinMaxWidthENS_10LayoutUnitENS_22ShouldComputePreferredE(i1, i39, i26, i3);
       STACKTOP = i4;
       return;
      }
     } while (0);
     if (!i48) {
      break;
     }
     i62 = i2 | 0;
     d43 = +HEAPF32[i36 >> 2];
     do {
      if (d43 < +2147483647) {
       if (d43 <= +-2147483648) {
        i65 = -2147483648;
        break;
       }
       i65 = ~~d43;
      } else {
       i65 = 2147483647;
      }
     } while (0);
     HEAP32[i27 >> 2] = i65;
     __ZNK7WebCore9RenderBox48computeReplacedLogicalWidthRespectingMinMaxWidthENS_10LayoutUnitENS_22ShouldComputePreferredE(i1, i62, i27, i3);
     STACKTOP = i4;
     return;
    }
   } while (0);
   i36 = i2 | 0;
   i37 = HEAP32[(HEAP32[i2 >> 2] | 0) + 888 >> 2] | 0;
   if ((i38 | 0) == 3 | (i38 | 0) == 0) {
    FUNCTION_TABLE_vii[i37 & 127](i7, i36);
    HEAP32[i28 >> 2] = HEAP32[i7 >> 2];
   } else {
    FUNCTION_TABLE_vii[i37 & 127](i8, i36);
    HEAP32[i28 >> 2] = HEAP32[i8 + 4 >> 2];
   }
   __ZNK7WebCore9RenderBox48computeReplacedLogicalWidthRespectingMinMaxWidthENS_10LayoutUnitENS_22ShouldComputePreferredE(i1, i36, i28, i3);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i28 = i2 | 0;
 if ((i31 | 0) == 3 | (i31 | 0) == 0) {
  i66 = i34 + 4 | 0;
 } else {
  i66 = i34 + 12 | 0;
 }
 i34 = i66;
 i66 = HEAP32[i34 >> 2] | 0;
 i31 = HEAP32[i34 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = i66;
 HEAP32[i10 + 4 >> 2] = i31;
 if ((i66 & 0 | 0) == 0 & (i31 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i11);
 }
 __ZNK7WebCore9RenderBox32computeReplacedLogicalWidthUsingENS_6LengthE(i9, i28, i11);
 __ZNK7WebCore9RenderBox48computeReplacedLogicalWidthRespectingMinMaxWidthENS_10LayoutUnitENS_22ShouldComputePreferredE(i1, i28, i9, i3);
 if ((HEAP8[i11 + 5 | 0] | 0) != 10) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
 STACKTOP = i4;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 230;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 254;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 242;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 240;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 260;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 224;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 222;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 214;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 268;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 270;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 248;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 250;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 258;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 218;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 276;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 216;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 234;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 246;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 210;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 232;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_iiiiii + 4;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 272;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 82;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_ii + 274;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_viii + 52;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_viiiii + 10;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_viii + 46;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_ii + 220;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_viii + 36;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_viiii + 18;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_viiiii + 8;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 238;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_iiii + 8;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_viii + 28;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_vii + 94;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_ii + 264;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_vii + 88;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_vii + 84;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_vii + 74;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_ii + 236;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_ii + 252;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_ii + 266;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_vii + 78;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_vii + 90;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_vii + 92;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_viii + 54;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_viii + 42;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_vii + 80;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_vii + 86;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_ii + 228;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_ii + 256;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_vii + 76;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_viiii + 20;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_viii + 40;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_viii + 38;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_iiiifi + 4;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_iiiifi + 2;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_viii + 34;
 HEAP32[H_BASE + 984 >> 2] = F_BASE_viii + 32;
 HEAP32[H_BASE + 988 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_viii + 44;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_ii + 226;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_viiii + 16;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_ii + 212;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_ii + 244;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_iiii + 10;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_viii + 48;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 1052 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 1056 >> 2] = F_BASE_ii + 262;
 HEAP32[H_BASE + 1060 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 1064 >> 2] = F_BASE_viii + 50;
}
function __ZN7WebCore14RenderReplaced29computePreferredLogicalWidthsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, d30 = +0, i31 = 0, i32 = 0, d33 = +0, i34 = 0, i35 = 0, d36 = +0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, d74 = +0, i75 = 0, i76 = 0, d77 = +0, i78 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
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
 i16 = i1 + 36 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = (HEAP32[i17 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i18 | 0) == 3 | (i18 | 0) == 0) {
  i19 = (HEAP32[i17 + 4 >> 2] | 0) + 4 | 0;
 } else {
  i19 = (HEAP32[i17 + 4 >> 2] | 0) + 12 | 0;
 }
 i17 = HEAP8[i19 + 5 | 0] | 0;
 i19 = i1 | 0;
 i20 = i1 + 76 | 0;
 i21 = i1 + 80 | 0;
 if ((i17 << 24 >> 24 | 0) == 10 | (i17 << 24 >> 24 | 0) == 2) {
  i17 = HEAP32[(HEAP32[i1 >> 2] | 0) + 888 >> 2] | 0;
  if ((i18 | 0) == 3 | (i18 | 0) == 0) {
   FUNCTION_TABLE_vii[i17 & 127](i3, i19);
   i22 = HEAP32[i3 >> 2] | 0;
  } else {
   FUNCTION_TABLE_vii[i17 & 127](i4, i19);
   i22 = HEAP32[i4 + 4 >> 2] | 0;
  }
  HEAP32[i21 >> 2] = i22;
  HEAP32[i20 >> 2] = i22;
 } else {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 892 >> 2] & 63](i7, i1, 1);
  i22 = HEAP32[i7 >> 2] | 0;
  HEAP32[i21 >> 2] = i22;
  HEAP32[i20 >> 2] = i22;
 }
 i22 = HEAP32[i16 >> 2] | 0;
 i16 = i22 + 44 | 0;
 i7 = (HEAP32[i16 >> 2] | 0) >>> 13 & 3;
 if ((i7 | 0) == 3 | (i7 | 0) == 0) {
  i4 = HEAP32[i22 + 4 >> 2] | 0;
  i23 = i4 + 4 | 0;
  i24 = i4;
 } else {
  i4 = HEAP32[i22 + 4 >> 2] | 0;
  i23 = i4 + 12 | 0;
  i24 = i4;
 }
 i4 = HEAP8[i23 + 5 | 0] | 0;
 do {
  if ((i4 << 24 >> 24 | 0) == 10 | (i4 << 24 >> 24 | 0) == 2) {
   i25 = 19;
  } else {
   if ((i7 | 0) == 3 | (i7 | 0) == 0) {
    i26 = i24 + 28 | 0;
   } else {
    i26 = i24 + 44 | 0;
   }
   i23 = HEAP8[i26 + 5 | 0] | 0;
   if ((i23 << 24 >> 24 | 0) == 10 | (i23 << 24 >> 24 | 0) == 2) {
    i25 = 19;
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1024 >> 2] & 511](i1) | 0) {
    i25 = 19;
   }
  }
 } while (0);
 if ((i25 | 0) == 19) {
  HEAP32[i20 >> 2] = 0;
 }
 i25 = HEAP32[i16 >> 2] | 0;
 i26 = i25 >>> 13 & 3;
 if ((i26 | 0) == 3 | (i26 | 0) == 0) {
  i24 = HEAP32[i22 + 4 >> 2] | 0;
  i27 = i24 + 20 | 0;
  i28 = i24;
 } else {
  i24 = HEAP32[i22 + 4 >> 2] | 0;
  i27 = i24 + 36 | 0;
  i28 = i24;
 }
 do {
  if ((HEAP8[i27 + 5 | 0] | 0) == 3) {
   if ((i26 | 0) == 3 | (i26 | 0) == 0) {
    i29 = i28 + 20 | 0;
   } else {
    i29 = i28 + 36 | 0;
   }
   if ((HEAP8[i29 + 6 | 0] & 1) == 0) {
    d30 = +(HEAP32[i29 >> 2] | 0);
   } else {
    d30 = +HEAPF32[i29 >> 2];
   }
   if (d30 <= +0) {
    i31 = i25;
    break;
   }
   if ((i26 | 0) == 3 | (i26 | 0) == 0) {
    i32 = i28 + 20 | 0;
   } else {
    i32 = i28 + 36 | 0;
   }
   if ((HEAP8[i32 + 6 | 0] & 1) == 0) {
    d33 = +(HEAP32[i32 >> 2] | 0);
   } else {
    d33 = +HEAPF32[i32 >> 2];
   }
   do {
    if (d33 < +2147483647) {
     if (d33 <= +-2147483648) {
      i34 = -2147483648;
      break;
     }
     i34 = ~~d33;
    } else {
     i34 = 2147483647;
    }
   } while (0);
   HEAP32[i9 >> 2] = i34;
   __ZNK7WebCore9RenderBox40adjustContentBoxLogicalWidthForBoxSizingENS_10LayoutUnitE(i8, i19, i9);
   i24 = i21 | 0;
   HEAP32[i24 >> 2] = HEAP32[((HEAP32[i24 >> 2] | 0) < (HEAP32[i8 >> 2] | 0) ? i8 : i21) >> 2];
   i24 = (HEAP32[i16 >> 2] | 0) >>> 13 & 3;
   if ((i24 | 0) == 3 | (i24 | 0) == 0) {
    i35 = (HEAP32[i22 + 4 >> 2] | 0) + 20 | 0;
   } else {
    i35 = (HEAP32[i22 + 4 >> 2] | 0) + 36 | 0;
   }
   if ((HEAP8[i35 + 6 | 0] & 1) == 0) {
    d36 = +(HEAP32[i35 >> 2] | 0);
   } else {
    d36 = +HEAPF32[i35 >> 2];
   }
   do {
    if (d36 < +2147483647) {
     if (d36 <= +-2147483648) {
      i37 = -2147483648;
      break;
     }
     i37 = ~~d36;
    } else {
     i37 = 2147483647;
    }
   } while (0);
   HEAP32[i11 >> 2] = i37;
   __ZNK7WebCore9RenderBox40adjustContentBoxLogicalWidthForBoxSizingENS_10LayoutUnitE(i10, i19, i11);
   i24 = i20 | 0;
   HEAP32[i24 >> 2] = HEAP32[((HEAP32[i24 >> 2] | 0) < (HEAP32[i10 >> 2] | 0) ? i10 : i20) >> 2];
   i31 = HEAP32[i16 >> 2] | 0;
  } else {
   i31 = i25;
  }
 } while (0);
 i25 = i31 >>> 13 & 3;
 if ((i25 | 0) == 3 | (i25 | 0) == 0) {
  i31 = HEAP32[i22 + 4 >> 2] | 0;
  i38 = i31 + 28 | 0;
  i39 = i31;
 } else {
  i31 = HEAP32[i22 + 4 >> 2] | 0;
  i38 = i31 + 44 | 0;
  i39 = i31;
 }
 if ((HEAP8[i38 + 5 | 0] | 0) != 3) {
  i40 = i20 | 0;
  i41 = i21 | 0;
  i42 = i1 | 0;
  i43 = i5;
  i44 = i6;
  i45 = i1;
  i46 = HEAP32[i45 >> 2] | 0;
  i47 = i46 + 760 | 0;
  i48 = HEAP32[i47 >> 2] | 0;
  i49 = FUNCTION_TABLE_ii[i48 & 511](i42) | 0;
  i50 = HEAP32[i45 >> 2] | 0;
  i51 = i50 + 764 | 0;
  i52 = HEAP32[i51 >> 2] | 0;
  i53 = FUNCTION_TABLE_ii[i52 & 511](i42) | 0;
  i54 = i53 + i49 | 0;
  i55 = i1;
  i56 = HEAP32[i55 >> 2] | 0;
  i57 = i56 + 728 | 0;
  i58 = HEAP32[i57 >> 2] | 0;
  FUNCTION_TABLE_vii[i58 & 127](i5, i42);
  i59 = i5 | 0;
  i60 = HEAP32[i59 >> 2] | 0;
  i61 = i54 + i60 | 0;
  i62 = HEAP32[i55 >> 2] | 0;
  i63 = i62 + 732 | 0;
  i64 = HEAP32[i63 >> 2] | 0;
  FUNCTION_TABLE_vii[i64 & 127](i6, i42);
  i65 = i6 | 0;
  i66 = HEAP32[i65 >> 2] | 0;
  i67 = i61 + i66 | 0;
  i68 = HEAP32[i40 >> 2] | 0;
  i69 = i68 + i67 | 0;
  HEAP32[i40 >> 2] = i69;
  i70 = HEAP32[i41 >> 2] | 0;
  i71 = i70 + i67 | 0;
  HEAP32[i41 >> 2] = i71;
  i72 = i1 | 0;
  __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i72, 0, 1);
  STACKTOP = i2;
  return;
 }
 if ((i25 | 0) == 3 | (i25 | 0) == 0) {
  i73 = i39 + 28 | 0;
 } else {
  i73 = i39 + 44 | 0;
 }
 if ((HEAP8[i73 + 6 | 0] & 1) == 0) {
  d74 = +(HEAP32[i73 >> 2] | 0);
 } else {
  d74 = +HEAPF32[i73 >> 2];
 }
 do {
  if (d74 < +2147483647) {
   if (d74 <= +-2147483648) {
    i75 = -2147483648;
    break;
   }
   i75 = ~~d74;
  } else {
   i75 = 2147483647;
  }
 } while (0);
 HEAP32[i13 >> 2] = i75;
 __ZNK7WebCore9RenderBox40adjustContentBoxLogicalWidthForBoxSizingENS_10LayoutUnitE(i12, i19, i13);
 i13 = i21 | 0;
 HEAP32[i13 >> 2] = HEAP32[((HEAP32[i12 >> 2] | 0) < (HEAP32[i13 >> 2] | 0) ? i12 : i21) >> 2];
 i21 = (HEAP32[i16 >> 2] | 0) >>> 13 & 3;
 if ((i21 | 0) == 3 | (i21 | 0) == 0) {
  i76 = (HEAP32[i22 + 4 >> 2] | 0) + 28 | 0;
 } else {
  i76 = (HEAP32[i22 + 4 >> 2] | 0) + 44 | 0;
 }
 if ((HEAP8[i76 + 6 | 0] & 1) == 0) {
  d77 = +(HEAP32[i76 >> 2] | 0);
 } else {
  d77 = +HEAPF32[i76 >> 2];
 }
 do {
  if (d77 < +2147483647) {
   if (d77 <= +-2147483648) {
    i78 = -2147483648;
    break;
   }
   i78 = ~~d77;
  } else {
   i78 = 2147483647;
  }
 } while (0);
 HEAP32[i15 >> 2] = i78;
 __ZNK7WebCore9RenderBox40adjustContentBoxLogicalWidthForBoxSizingENS_10LayoutUnitE(i14, i19, i15);
 i15 = i20 | 0;
 HEAP32[i15 >> 2] = HEAP32[((HEAP32[i14 >> 2] | 0) < (HEAP32[i15 >> 2] | 0) ? i14 : i20) >> 2];
 i40 = i15;
 i41 = i13;
 i42 = i1 | 0;
 i43 = i5;
 i44 = i6;
 i45 = i1;
 i46 = HEAP32[i45 >> 2] | 0;
 i47 = i46 + 760 | 0;
 i48 = HEAP32[i47 >> 2] | 0;
 i49 = FUNCTION_TABLE_ii[i48 & 511](i42) | 0;
 i50 = HEAP32[i45 >> 2] | 0;
 i51 = i50 + 764 | 0;
 i52 = HEAP32[i51 >> 2] | 0;
 i53 = FUNCTION_TABLE_ii[i52 & 511](i42) | 0;
 i54 = i53 + i49 | 0;
 i55 = i1;
 i56 = HEAP32[i55 >> 2] | 0;
 i57 = i56 + 728 | 0;
 i58 = HEAP32[i57 >> 2] | 0;
 FUNCTION_TABLE_vii[i58 & 127](i5, i42);
 i59 = i5 | 0;
 i60 = HEAP32[i59 >> 2] | 0;
 i61 = i54 + i60 | 0;
 i62 = HEAP32[i55 >> 2] | 0;
 i63 = i62 + 732 | 0;
 i64 = HEAP32[i63 >> 2] | 0;
 FUNCTION_TABLE_vii[i64 & 127](i6, i42);
 i65 = i6 | 0;
 i66 = HEAP32[i65 >> 2] | 0;
 i67 = i61 + i66 | 0;
 i68 = HEAP32[i40 >> 2] | 0;
 i69 = i68 + i67 | 0;
 HEAP32[i40 >> 2] = i69;
 i70 = HEAP32[i41 >> 2] | 0;
 i71 = i70 + i67 | 0;
 HEAP32[i41 >> 2] = i71;
 i72 = i1 | 0;
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i72, 0, 1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14RenderReplaced5paintERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 if (!(__ZN7WebCore14RenderReplaced11shouldPaintERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) | 0)) {
  STACKTOP = i4;
  return;
 }
 i19 = i1 | 0;
 i20 = i1 + 44 | 0;
 i21 = (HEAP32[i20 + 4 >> 2] | 0) + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i22 = i5;
 HEAP32[i22 >> 2] = (HEAP32[i20 >> 2] | 0) + (HEAP32[i3 >> 2] | 0);
 i3 = i6 + 4 | 0;
 HEAP32[i3 >> 2] = i21;
 i21 = i1 | 0;
 i20 = i1 + 20 | 0;
 i23 = i2 + 20 | 0;
 do {
  if ((HEAP32[i20 >> 2] | 0) >>> 0 > 1073741823 >>> 0) {
   i24 = HEAP32[i23 >> 2] | 0;
   if (!((i24 | 0) == 4 | (i24 | 0) == 8)) {
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 956 >> 2] & 63](i19, i2, i6);
  }
 } while (0);
 i24 = HEAP32[i23 >> 2] | 0;
 if ((i24 | 0) == 11) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 960 >> 2] & 63](i19, i2, i6);
  STACKTOP = i4;
  return;
 }
 i19 = i1 + 52 | 0;
 i25 = HEAP32[i19 >> 2] | 0;
 i26 = HEAP32[i19 + 4 >> 2] | 0;
 i27 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i8 + 4 >> 2] = i27;
 i27 = i7 + 8 | 0;
 HEAP32[i27 >> 2] = i25;
 HEAP32[i27 + 4 >> 2] = i26;
 do {
  if ((i24 | 0) == 5 | (i24 | 0) == 7) {
   i26 = HEAP32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 12 >> 2] | 0) + 64 >> 2] | 0;
   if ((i26 & 2013265920 | 0) == 0 | (i26 & 131070 | 0) == 0) {
    i28 = i24;
    break;
   }
   __ZN7WebCore12RenderObject12paintOutlineERNS_9PaintInfoERKNS_10LayoutRectE(i21, i2, i9);
   i28 = HEAP32[i23 >> 2] | 0;
  } else {
   i28 = i24;
  }
 } while (0);
 do {
  if (!((i28 | 0) == 4 | (i28 | 0) == 8)) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 511](i1) | 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i28 = HEAP32[i2 + 28 >> 2] | 0;
 if (!((i28 | 0) == 0 | (i28 | 0) == (i21 | 0))) {
  STACKTOP = i4;
  return;
 }
 i28 = (HEAP32[i20 >> 2] & 234881024 | 0) == 0;
 if (i28) {
  i29 = 0;
 } else {
  i29 = (HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) == 0;
 }
 i20 = (HEAP32[i23 >> 2] | 0) != 8;
 i23 = i20 & i29;
 if (!(i20 | i28 ^ 1)) {
  STACKTOP = i4;
  return;
 }
 i28 = i1 + 36 | 0;
 i20 = HEAP32[(HEAP32[i28 >> 2] | 0) + 16 >> 2] | 0;
 i29 = i20 + 136 | 0;
 do {
  if ((HEAP8[i20 + 141 | 0] | 0) == 10) {
   i30 = 32;
  } else {
   if ((HEAP8[i20 + 142 | 0] & 1) == 0) {
    if ((HEAP32[i29 >> 2] | 0) != 0) {
     i30 = 32;
     break;
    }
   } else {
    if (+HEAPF32[i29 >> 2] != +0) {
     i30 = 32;
     break;
    }
   }
   i24 = i20 + 152 | 0;
   if ((HEAP8[i20 + 157 | 0] | 0) == 10) {
    i30 = 32;
    break;
   }
   if ((HEAP8[i20 + 158 | 0] & 1) == 0) {
    if ((HEAP32[i24 >> 2] | 0) != 0) {
     i30 = 32;
     break;
    }
   } else {
    if (+HEAPF32[i24 >> 2] != +0) {
     i30 = 32;
     break;
    }
   }
   i24 = i20 + 168 | 0;
   if ((HEAP8[i20 + 173 | 0] | 0) == 10) {
    i30 = 32;
    break;
   }
   if ((HEAP8[i20 + 174 | 0] & 1) == 0) {
    if ((HEAP32[i24 >> 2] | 0) != 0) {
     i30 = 32;
     break;
    }
   } else {
    if (+HEAPF32[i24 >> 2] != +0) {
     i30 = 32;
     break;
    }
   }
   i24 = i20 + 184 | 0;
   if ((HEAP8[i20 + 189 | 0] | 0) == 10) {
    i30 = 32;
    break;
   }
   if ((HEAP8[i20 + 190 | 0] & 1) == 0) {
    if ((HEAP32[i24 >> 2] | 0) == 0) {
     i30 = 35;
     break;
    } else {
     i30 = 32;
     break;
    }
   } else {
    if (+HEAPF32[i24 >> 2] != +0) {
     i30 = 32;
     break;
    } else {
     i30 = 35;
     break;
    }
   }
  }
 } while (0);
 do {
  if ((i30 | 0) == 32) {
   if ((HEAP32[i19 >> 2] | 0) < 1) {
    break;
   }
   if ((HEAP32[i19 + 4 >> 2] | 0) < 1) {
    break;
   }
   i20 = i2 | 0;
   __ZN7WebCore15GraphicsContext4saveEv(HEAP32[i20 >> 2] | 0);
   i29 = HEAP32[i28 >> 2] | 0;
   i24 = i1 | 0;
   i26 = i1;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i26 >> 2] | 0) + 704 >> 2] & 127](i11, i24);
   i27 = i1;
   i25 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i27 >> 2] | 0) + 736 >> 2] & 511](i24) | 0;
   i7 = (HEAP32[i11 >> 2] | 0) + i25 | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i26 >> 2] | 0) + 708 >> 2] & 127](i12, i24);
   i25 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i27 >> 2] | 0) + 740 >> 2] & 511](i24) | 0;
   i8 = (HEAP32[i12 >> 2] | 0) + i25 | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i26 >> 2] | 0) + 712 >> 2] & 127](i13, i24);
   i25 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i27 >> 2] | 0) + 744 >> 2] & 511](i24) | 0;
   i5 = (HEAP32[i13 >> 2] | 0) + i25 | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i26 >> 2] | 0) + 716 >> 2] & 127](i14, i24);
   i26 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i27 >> 2] | 0) + 748 >> 2] & 511](i24) | 0;
   __ZNK7WebCore11RenderStyle24getRoundedInnerBorderForERKNS_10LayoutRectEiiiibb(i10, i29, i9, i7, i8, i5, (HEAP32[i14 >> 2] | 0) + i26 | 0, 1, 1);
   __ZN7WebCore20RenderBoxModelObject20clipRoundedInnerRectEPNS_15GraphicsContextERKNS_10LayoutRectERKNS_11RoundedRectE(HEAP32[i20 >> 2] | 0, i9, i10);
   i30 = 35;
  }
 } while (0);
 L53 : do {
  if ((i30 | 0) == 35) {
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1032 >> 2] & 63](i1, i2, i6);
   i10 = HEAP32[(HEAP32[i28 >> 2] | 0) + 16 >> 2] | 0;
   i9 = i10 + 136 | 0;
   do {
    if ((HEAP8[i10 + 141 | 0] | 0) != 10) {
     if ((HEAP8[i10 + 142 | 0] & 1) == 0) {
      if ((HEAP32[i9 >> 2] | 0) != 0) {
       break;
      }
     } else {
      if (+HEAPF32[i9 >> 2] != +0) {
       break;
      }
     }
     i14 = i10 + 152 | 0;
     if ((HEAP8[i10 + 157 | 0] | 0) == 10) {
      break;
     }
     if ((HEAP8[i10 + 158 | 0] & 1) == 0) {
      if ((HEAP32[i14 >> 2] | 0) != 0) {
       break;
      }
     } else {
      if (+HEAPF32[i14 >> 2] != +0) {
       break;
      }
     }
     i14 = i10 + 168 | 0;
     if ((HEAP8[i10 + 173 | 0] | 0) == 10) {
      break;
     }
     if ((HEAP8[i10 + 174 | 0] & 1) == 0) {
      if ((HEAP32[i14 >> 2] | 0) != 0) {
       break;
      }
     } else {
      if (+HEAPF32[i14 >> 2] != +0) {
       break;
      }
     }
     i14 = i10 + 184 | 0;
     if ((HEAP8[i10 + 189 | 0] | 0) == 10) {
      break;
     }
     if ((HEAP8[i10 + 190 | 0] & 1) == 0) {
      if ((HEAP32[i14 >> 2] | 0) == 0) {
       break L53;
      } else {
       break;
      }
     } else {
      if (+HEAPF32[i14 >> 2] != +0) {
       break;
      } else {
       break L53;
      }
     }
    }
   } while (0);
   __ZN7WebCore15GraphicsContext7restoreEv(HEAP32[i2 >> 2] | 0);
  }
 } while (0);
 if (!i23) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore14RenderReplaced18localSelectionRectEb(i15, i1, 1);
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = i15 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + (HEAP32[i22 >> 2] | 0);
 i22 = i15 + 4 | 0;
 HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + i1;
 i1 = HEAP32[i2 >> 2] | 0;
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i17, i15);
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i16, i17);
 __ZNK7WebCore12RenderObject24selectionBackgroundColorEv(i18, i21);
 __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i1, i16, i18, (HEAP32[(HEAP32[(HEAP32[i28 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore14RenderReplaced41computeAspectRatioInformationForRenderBoxEPNS_9RenderBoxERNS_9FloatSizeERdRb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, d14 = +0, i15 = 0, d16 = +0, d17 = +0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i7;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i11 = i7;
 HEAPF32[i11 >> 2] = +0;
 i12 = i8 + 4 | 0;
 HEAPF32[i12 >> 2] = +0;
 do {
  if ((i2 | 0) == 0) {
   FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 984 >> 2] & 31](i1, i8, i4, i5);
   if (+HEAPF64[i4 >> 3] == +0) {
    break;
   }
   d13 = +HEAPF32[i11 >> 2];
   if (d13 <= +0) {
    break;
   }
   d14 = +HEAPF32[i12 >> 2];
   if (d14 <= +0) {
    break;
   }
   i15 = i1 + 92 | 0;
   if ((HEAP32[i1 + 20 >> 2] & 8192 | 0) == 0) {
    d16 = d14;
    d17 = d13;
   } else {
    d13 = +HEAPF32[i7 >> 2];
    d16 = d13;
    d17 = +HEAPF32[i7 + 4 >> 2];
   }
   do {
    if (d16 < +2147483647) {
     if (d16 <= +-2147483648) {
      i18 = 0;
      i19 = -2147483648;
      break;
     }
     i18 = 0;
     i19 = ~~d16;
    } else {
     i18 = 0;
     i19 = 2147483647;
    }
   } while (0);
   do {
    if (d17 < +2147483647) {
     if (d17 <= +-2147483648) {
      i20 = -2147483648;
      i21 = 0;
      break;
     }
     i20 = ~~d17;
     i21 = 0;
    } else {
     i20 = 2147483647;
     i21 = 0;
    }
   } while (0);
   i22 = i15;
   HEAP32[i22 >> 2] = i21 | i19;
   HEAP32[i22 + 4 >> 2] = i20 | i18;
  } else {
   FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 984 >> 2] & 31](i2, i8, i4, i5);
   if ((HEAP8[i5] & 1) == 0) {
    d13 = +HEAPF32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
    HEAPF32[i11 >> 2] = d13 * +HEAPF32[i11 >> 2];
    HEAPF32[i12 >> 2] = d13 * +HEAPF32[i12 >> 2];
   }
   i22 = i1 | 0;
   i23 = i1 + 20 | 0;
   L6 : do {
    if ((HEAP32[i23 >> 2] & 2048 | 0) == 0) {
     i24 = 10;
    } else {
     i25 = i1;
     do {
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 92 >> 2] & 511](i22) | 0)) {
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 224 >> 2] & 511](i22) | 0) {
        break;
       }
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 232 >> 2] & 511](i22) | 0)) {
        i24 = 10;
        break L6;
       }
      }
     } while (0);
     if ((HEAP8[i5] & 1) == 0) {
      i24 = 10;
      break;
     }
     HEAPF64[i4 >> 3] = +1;
     i24 = 11;
    }
   } while (0);
   if ((i24 | 0) == 10) {
    if (+HEAPF64[i4 >> 3] != +0) {
     i24 = 11;
    }
   }
   do {
    if ((i24 | 0) == 11) {
     if ((HEAP8[i5] & 1) != 0) {
      break;
     }
     d13 = +HEAPF32[i11 >> 2];
     if (d13 <= +0) {
      break;
     }
     d14 = +HEAPF32[i12 >> 2];
     if (d14 <= +0) {
      break;
     }
     i22 = i1 + 92 | 0;
     do {
      if (d13 < +2147483647) {
       if (d13 <= +-2147483648) {
        i26 = 0;
        i27 = -2147483648;
        break;
       }
       i26 = 0;
       i27 = ~~d13;
      } else {
       i26 = 0;
       i27 = 2147483647;
      }
     } while (0);
     do {
      if (d14 < +2147483647) {
       if (d14 <= +-2147483648) {
        i28 = -2147483648;
        i29 = 0;
        break;
       }
       i28 = ~~d14;
       i29 = 0;
      } else {
       i28 = 2147483647;
       i29 = 0;
      }
     } while (0);
     i15 = i22;
     HEAP32[i15 >> 2] = i29 | i27;
     HEAP32[i15 + 4 >> 2] = i28 | i26;
    }
   } while (0);
   if ((HEAP32[i23 >> 2] & 8192 | 0) != 0) {
    break;
   }
   d14 = +HEAPF64[i4 >> 3];
   if (d14 != +0) {
    HEAPF64[i4 >> 3] = +1 / d14;
   }
   d14 = +(+HEAPF32[i12 >> 2]);
   d13 = +(+HEAPF32[i11 >> 2]);
   HEAPF32[i7 >> 2] = d14;
   HEAPF32[i7 + 4 >> 2] = d13;
  }
 } while (0);
 i26 = i3;
 i28 = HEAP32[i7 >> 2] | 0;
 i27 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i26 >> 2] = i28;
 HEAP32[i26 + 4 >> 2] = i27;
 if (+HEAPF64[i4 >> 3] == +0) {
  STACKTOP = i6;
  return;
 }
 if (!((HEAP8[i5] & 1) == 0 & (HEAP32[tempDoublePtr >> 2] = i28, +HEAPF32[tempDoublePtr >> 2]) > +0)) {
  STACKTOP = i6;
  return;
 }
 if (+HEAPF32[i12 >> 2] <= +0) {
  STACKTOP = i6;
  return;
 }
 i28 = HEAP32[i1 + 36 >> 2] | 0;
 i5 = (HEAP32[i28 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i4 = HEAP32[i28 + 4 >> 2] | 0;
  i30 = i4 + 4 | 0;
  i31 = i4;
 } else {
  i4 = HEAP32[i28 + 4 >> 2] | 0;
  i30 = i4 + 12 | 0;
  i31 = i4;
 }
 if ((HEAP8[i30 + 5 | 0] | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i32 = i31 + 12 | 0;
 } else {
  i32 = i31 + 4 | 0;
 }
 if ((HEAP8[i32 + 5 | 0] | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 i32 = i1 | 0;
 __ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv(i9, i32);
 HEAPF32[i3 >> 2] = +HEAPF32[i11 >> 2] * +(HEAP32[i9 >> 2] | 0) / +HEAPF32[i12 >> 2];
 __ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE(i10, i32, 0);
 HEAPF32[i3 + 4 >> 2] = +HEAPF32[i12 >> 2] * +(HEAP32[i10 >> 2] | 0) / +HEAPF32[i11 >> 2];
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore14RenderReplaced28computeReplacedLogicalHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, d28 = +0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i7;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i17 = i2 + 36 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = (HEAP32[i18 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i19 | 0) == 3 | (i19 | 0) == 0) {
  i20 = HEAP32[i18 + 4 >> 2] | 0;
  i21 = i20 + 12 | 0;
  i22 = i20;
 } else {
  i20 = HEAP32[i18 + 4 >> 2] | 0;
  i21 = i20 + 4 | 0;
  i22 = i20;
 }
 do {
  if ((HEAP8[i21 + 5 | 0] | 0) != 0) {
   if ((i19 | 0) == 3 | (i19 | 0) == 0) {
    i23 = i22 + 12 | 0;
   } else {
    i23 = i22 + 4 | 0;
   }
   i20 = HEAP8[i23 + 5 | 0] | 0;
   i18 = i20 & 255;
   if (!((i18 | 0) == 3 | (i18 | 0) == 2 | (i18 | 0) == 10)) {
    if ((i20 - 11 & 255) >>> 0 >= 4 >>> 0) {
     break;
    }
   }
   if (__ZNK7WebCore20RenderBoxModelObject44hasAutoHeightOrContainingBlockWithAutoHeightEv(i2 | 0) | 0) {
    break;
   }
   i20 = i2 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   i24 = (HEAP32[i18 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i24 | 0) == 3 | (i24 | 0) == 0) {
    i25 = (HEAP32[i18 + 4 >> 2] | 0) + 12 | 0;
   } else {
    i25 = (HEAP32[i18 + 4 >> 2] | 0) + 4 | 0;
   }
   i18 = i25;
   i24 = HEAP32[i18 >> 2] | 0;
   i26 = HEAP32[i18 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = i24;
   HEAP32[i7 + 4 >> 2] = i26;
   if ((i24 & 0 | 0) == 0 & (i26 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i8);
   }
   __ZNK7WebCore9RenderBox33computeReplacedLogicalHeightUsingENS_6LengthE(i6, i20, i8);
   __ZNK7WebCore9RenderBox50computeReplacedLogicalHeightRespectingMinMaxHeightENS_10LayoutUnitE(i1, i20, i6);
   if ((HEAP8[i8 + 5 | 0] | 0) != 10) {
    STACKTOP = i3;
    return;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i8);
   STACKTOP = i3;
   return;
  }
 } while (0);
 i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 1028 >> 2] & 511](i2) | 0;
 HEAP8[i9] = 0;
 HEAPF64[i10 >> 3] = +0;
 HEAPF32[i11 >> 2] = +0;
 i6 = i11 + 4 | 0;
 HEAPF32[i6 >> 2] = +0;
 __ZNK7WebCore14RenderReplaced41computeAspectRatioInformationForRenderBoxEPNS_9RenderBoxERNS_9FloatSizeERdRb(i2, i8, i11, i10, i9);
 i11 = HEAP32[i17 >> 2] | 0;
 i17 = (HEAP32[i11 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i17 | 0) == 3 | (i17 | 0) == 0) {
  i27 = (HEAP32[i11 + 4 >> 2] | 0) + 4 | 0;
 } else {
  i27 = (HEAP32[i11 + 4 >> 2] | 0) + 12 | 0;
 }
 do {
  if ((HEAP8[i9] & 1) == 0) {
   d28 = +HEAPF32[i6 >> 2];
   i11 = d28 > +0;
   if ((HEAP8[i27 + 5 | 0] | 0) != 0 | i11 ^ 1) {
    i29 = i11;
    break;
   }
   i11 = i2 | 0;
   do {
    if (d28 < +2147483647) {
     if (d28 <= +-2147483648) {
      i30 = -2147483648;
      break;
     }
     i30 = ~~d28;
    } else {
     i30 = 2147483647;
    }
   } while (0);
   HEAP32[i12 >> 2] = i30;
   __ZNK7WebCore9RenderBox50computeReplacedLogicalHeightRespectingMinMaxHeightENS_10LayoutUnitE(i1, i11, i12);
   STACKTOP = i3;
   return;
  } else {
   i29 = 0;
  }
 } while (0);
 i12 = i2 | 0;
 if (+HEAPF64[i10 >> 3] != +0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 900 >> 2] & 127](i14, i12);
  d28 = +_round(+(+(HEAP32[i14 >> 2] | 0) / +HEAPF64[i10 >> 3]));
  do {
   if (d28 < +2147483647) {
    if (d28 <= +-2147483648) {
     i31 = -2147483648;
     break;
    }
    i31 = ~~d28;
   } else {
    i31 = 2147483647;
   }
  } while (0);
  HEAP32[i13 >> 2] = i31;
  __ZNK7WebCore9RenderBox50computeReplacedLogicalHeightRespectingMinMaxHeightENS_10LayoutUnitE(i1, i12, i13);
  STACKTOP = i3;
  return;
 }
 if (i29) {
  d28 = +HEAPF32[i6 >> 2];
  do {
   if (d28 < +2147483647) {
    if (d28 <= +-2147483648) {
     i32 = -2147483648;
     break;
    }
    i32 = ~~d28;
   } else {
    i32 = 2147483647;
   }
  } while (0);
  HEAP32[i15 >> 2] = i32;
  __ZNK7WebCore9RenderBox50computeReplacedLogicalHeightRespectingMinMaxHeightENS_10LayoutUnitE(i1, i12, i15);
  STACKTOP = i3;
  return;
 } else {
  i15 = HEAP32[(HEAP32[i2 >> 2] | 0) + 888 >> 2] | 0;
  if ((i17 | 0) == 3 | (i17 | 0) == 0) {
   FUNCTION_TABLE_vii[i15 & 127](i4, i12);
   HEAP32[i16 >> 2] = HEAP32[i4 + 4 >> 2];
  } else {
   FUNCTION_TABLE_vii[i15 & 127](i5, i12);
   HEAP32[i16 >> 2] = HEAP32[i5 >> 2];
  }
  __ZNK7WebCore9RenderBox50computeReplacedLogicalHeightRespectingMinMaxHeightENS_10LayoutUnitE(i1, i12, i16);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore14RenderReplaced11shouldPaintERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 64 | 0;
 i12 = i4 + 72 | 0;
 i13 = i4 + 88 | 0;
 i14 = i2 + 20 | 0;
 switch (HEAP32[i14 >> 2] | 0) {
 case 4:
 case 5:
 case 7:
 case 8:
 case 11:
  {
   break;
  }
 default:
  {
   STACKTOP = i4;
   return 0;
  }
 }
 i15 = i1 | 0;
 i16 = HEAP32[i2 + 28 >> 2] | 0;
 if (!((i16 | 0) == 0 | (i16 | 0) == (i15 | 0))) {
  STACKTOP = i4;
  return 0;
 }
 if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
  STACKTOP = i4;
  return 0;
 }
 i16 = HEAP32[i2 + 32 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   if (__ZNK7WebCore16RenderFlowThread29objectShouldPaintInFlowRegionEPKNS_12RenderObjectEPKNS_12RenderRegionE(HEAP32[i16 + 116 >> 2] | 0, i15, i16) | 0) {
    break;
   }
   STACKTOP = i4;
   return 0;
  }
 } while (0);
 i16 = i1 | 0;
 i17 = i1 + 44 | 0;
 i18 = (HEAP32[i17 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0;
 i19 = i3 + 4 | 0;
 i3 = (HEAP32[i17 + 4 >> 2] | 0) + (HEAP32[i19 >> 2] | 0) | 0;
 i17 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 824 >> 2] & 127](i9, i16);
 i20 = (HEAP32[i9 + 4 >> 2] | 0) + i3 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 824 >> 2] & 127](i10, i16);
 i9 = (HEAP32[i10 + 4 >> 2] | 0) + i3 + (HEAP32[i10 + 12 >> 2] | 0) | 0;
 i10 = i1 + 20 | 0;
 i3 = (HEAP32[i10 >> 2] | 0) >>> 25 & 7;
 do {
  if ((i3 | 0) == 2) {
   i21 = 17;
  } else if ((i3 | 0) == 0) {
   i22 = i20;
   i23 = i9;
  } else {
   __ZNK7WebCore12RenderObject17selectionStartEndERiS1_(i15, i5, i6);
   if ((i3 | 0) == 1) {
    if ((HEAP32[i5 >> 2] | 0) == 0) {
     i21 = 17;
     break;
    } else {
     i22 = i20;
     i23 = i9;
     break;
    }
   }
   i24 = HEAP32[i1 + 4 >> 2] | 0;
   if ((HEAP32[i24 + 36 >> 2] | 0) == 0) {
    i25 = 1;
   } else {
    if ((HEAP32[i10 >> 2] & 128 | 0) == 0) {
     i26 = i24;
    } else {
     i26 = 0;
    }
    i25 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i26 | 0) | 0;
   }
   if ((i3 | 0) == 3) {
    if ((HEAP32[i6 >> 2] | 0) == (i25 | 0)) {
     i21 = 17;
     break;
    } else {
     i22 = i20;
     i23 = i9;
     break;
    }
   } else if ((i3 | 0) != 4) {
    i22 = i20;
    i23 = i9;
    break;
   }
   if ((HEAP32[i5 >> 2] | 0) != 0) {
    i22 = i20;
    i23 = i9;
    break;
   }
   if ((HEAP32[i6 >> 2] | 0) == (i25 | 0)) {
    i21 = 17;
   } else {
    i22 = i20;
    i23 = i9;
   }
  }
 } while (0);
 do {
  if ((i21 | 0) == 17) {
   i25 = HEAP32[i1 + 84 >> 2] | 0;
   if ((i25 | 0) == 0) {
    i22 = i20;
    i23 = i9;
    break;
   }
   i6 = __ZN7WebCore9InlineBox4rootEv(i25 | 0) | 0;
   i25 = HEAP32[i19 >> 2] | 0;
   __ZNK7WebCore13RootInlineBox12selectionTopEv(i11, i6);
   i5 = (HEAP32[i11 >> 2] | 0) + i25 | 0;
   i25 = i5 + (HEAP32[i19 >> 2] | 0) | 0;
   __ZNK7WebCore13RootInlineBox15selectionBottomEv(i7, i6);
   __ZNK7WebCore13RootInlineBox12selectionTopEv(i8, i6);
   i6 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 >> 2] | 0) | 0;
   i3 = i25 + ((i6 | 0) > 0 ? i6 : 0) | 0;
   i22 = (i20 | 0) < (i5 | 0) ? i20 : i5;
   i23 = (i3 | 0) < (i9 | 0) ? i9 : i3;
  }
 } while (0);
 i9 = i2 + 4 | 0;
 i20 = HEAP32[i9 >> 2] | 0;
 i8 = HEAP32[i9 + 4 >> 2] | 0;
 i9 = i2 + 12 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i7 = HEAP32[i9 + 4 >> 2] | 0;
 i9 = __ZNK7WebCore12RenderObject18maximalOutlineSizeENS_10PaintPhaseE(i15, HEAP32[i14 >> 2] | 0) | 0;
 i14 = i20 - i9 | 0;
 i20 = i9 << 1;
 i15 = i8 - i9 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 824 >> 2] & 127](i12, i16);
 if (((HEAP32[i12 >> 2] | 0) + i18 | 0) >= (i20 + i2 + i14 | 0)) {
  STACKTOP = i4;
  return 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 824 >> 2] & 127](i13, i16);
 if (((HEAP32[i13 >> 2] | 0) + i18 + (HEAP32[i13 + 8 >> 2] | 0) | 0) <= (i14 | 0)) {
  STACKTOP = i4;
  return 0;
 }
 if ((i22 | 0) < (i20 + i7 + i15 | 0)) {
  STACKTOP = i4;
  return (i23 | 0) > (i15 | 0) | 0;
 } else {
  STACKTOP = i4;
  return 0;
 }
 return 0;
}
function __ZNK7WebCore14RenderReplaced18localSelectionRectEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, d19 = +0, d20 = +0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 L1 : do {
  if (i3) {
   i13 = i2 + 20 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) >>> 25 & 7;
   do {
    if ((i14 | 0) == 2) {
     break L1;
    } else if ((i14 | 0) != 0) {
     __ZNK7WebCore12RenderObject17selectionStartEndERiS1_(i2 | 0, i9, i10);
     if ((i14 | 0) == 1) {
      if ((HEAP32[i9 >> 2] | 0) == 0) {
       break L1;
      } else {
       break;
      }
     }
     i15 = HEAP32[i2 + 4 >> 2] | 0;
     if ((HEAP32[i15 + 36 >> 2] | 0) == 0) {
      i16 = 1;
     } else {
      if ((HEAP32[i13 >> 2] & 128 | 0) == 0) {
       i17 = i15;
      } else {
       i17 = 0;
      }
      i16 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i17 | 0) | 0;
     }
     if ((i14 | 0) == 3) {
      if ((HEAP32[i10 >> 2] | 0) == (i16 | 0)) {
       break L1;
      } else {
       break;
      }
     } else if ((i14 | 0) != 4) {
      break;
     }
     if ((HEAP32[i9 >> 2] | 0) != 0) {
      break;
     }
     if ((HEAP32[i10 >> 2] | 0) == (i16 | 0)) {
      break L1;
     }
    }
   } while (0);
   _memset(i1 | 0, 0, 16) | 0;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i16 = i2 + 84 | 0;
 i10 = HEAP32[i16 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i9 = i2 + 52 | 0;
  i17 = HEAP32[i9 >> 2] | 0;
  i3 = HEAP32[i9 + 4 >> 2] | 0;
  i9 = i1;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i9 + 4 >> 2] = 0;
  i9 = i1 + 8 | 0;
  HEAP32[i9 >> 2] = i17;
  HEAP32[i9 + 4 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
 i3 = __ZN7WebCore9InlineBox4rootEv(i10 | 0) | 0;
 i10 = (HEAP32[(HEAP32[(__ZNK7WebCore13RootInlineBox9blockFlowEv(i3) | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i10 | 0) == 3 | (i10 | 0) == 1) {
  i10 = HEAP32[i16 >> 2] | 0;
  d18 = +HEAPF32[((HEAP32[i10 + 32 >> 2] & 2048 | 0) == 0 ? i10 + 20 | 0 : i10 + 24 | 0) >> 2];
  d19 = d18 + +__ZNK7WebCore9InlineBox13logicalHeightEv(i10 | 0);
  __ZNK7WebCore13RootInlineBox15selectionBottomEv(i11, i3);
  d20 = d19 - +(HEAP32[i11 >> 2] | 0);
 } else {
  __ZNK7WebCore13RootInlineBox12selectionTopEv(i12, i3);
  i11 = HEAP32[i16 >> 2] | 0;
  d20 = +(HEAP32[i12 >> 2] | 0) - +HEAPF32[((HEAP32[i11 + 32 >> 2] & 2048 | 0) == 0 ? i11 + 20 | 0 : i11 + 24 | 0) >> 2];
 }
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
 i11 = (HEAP32[(HEAP32[(__ZNK7WebCore13RootInlineBox9blockFlowEv(i3) | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i11 | 0) == 3 | (i11 | 0) == 0) {
  i11 = HEAP32[i2 + 52 >> 2] | 0;
  __ZNK7WebCore13RootInlineBox15selectionBottomEv(i5, i3);
  __ZNK7WebCore13RootInlineBox12selectionTopEv(i6, i3);
  i12 = (HEAP32[i5 >> 2] | 0) - (HEAP32[i6 >> 2] | 0) | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = i21;
  HEAP32[i1 + 8 >> 2] = i11;
  HEAP32[i1 + 12 >> 2] = (i12 | 0) > 0 ? i12 : 0;
  STACKTOP = i4;
  return;
 } else {
  __ZNK7WebCore13RootInlineBox15selectionBottomEv(i7, i3);
  __ZNK7WebCore13RootInlineBox12selectionTopEv(i8, i3);
  i3 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 >> 2] | 0) | 0;
  i8 = HEAP32[i2 + 56 >> 2] | 0;
  HEAP32[i1 >> 2] = i21;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = (i3 | 0) > 0 ? i3 : 0;
  HEAP32[i1 + 12 >> 2] = i8;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore14RenderReplaced23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, d23 = +0, d24 = +0, d25 = +0, d26 = +0, d27 = +0, d28 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 48 | 0;
 i11 = i10 | 0;
 i12 = i10;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i14 = i13 | 0;
 i15 = i13;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i17 = i2 + 20 | 0;
 i18 = (HEAP32[i17 >> 2] | 0) >>> 25 & 7;
 do {
  if ((i18 | 0) == 0) {
   i19 = 12;
  } else if ((i18 | 0) != 2) {
   __ZNK7WebCore12RenderObject17selectionStartEndERiS1_(i2 | 0, i7, i8);
   if ((i18 | 0) == 1) {
    if ((HEAP32[i7 >> 2] | 0) == 0) {
     break;
    } else {
     i19 = 12;
     break;
    }
   }
   i20 = HEAP32[i2 + 4 >> 2] | 0;
   if ((HEAP32[i20 + 36 >> 2] | 0) == 0) {
    i21 = 1;
   } else {
    if ((HEAP32[i17 >> 2] & 128 | 0) == 0) {
     i22 = i20;
    } else {
     i22 = 0;
    }
    i21 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i22 | 0) | 0;
   }
   if ((i18 | 0) == 3) {
    if ((HEAP32[i8 >> 2] | 0) == (i21 | 0)) {
     break;
    } else {
     i19 = 12;
     break;
    }
   } else if ((i18 | 0) != 4) {
    i19 = 12;
    break;
   }
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    i19 = 12;
    break;
   }
   if ((HEAP32[i8 >> 2] | 0) != (i21 | 0)) {
    i19 = 12;
   }
  }
 } while (0);
 if ((i19 | 0) == 12) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore14RenderReplaced18localSelectionRectEb(i9, i2, 1);
 if (i4) {
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 512 >> 2] & 31](i2 | 0, i3, i9, 0);
 } else {
  i4 = i9 | 0;
  d23 = +(HEAP32[i4 >> 2] | 0);
  i19 = i9 + 4 | 0;
  d24 = +(HEAP32[i19 >> 2] | 0);
  i21 = i9 + 8 | 0;
  d25 = +(HEAP32[i21 >> 2] | 0);
  i8 = i9 + 12 | 0;
  d26 = +(HEAP32[i8 >> 2] | 0);
  d27 = +d23;
  d28 = +d24;
  HEAPF32[i14 >> 2] = d27;
  HEAPF32[i14 + 4 >> 2] = d28;
  d28 = d23 + d25;
  HEAPF32[i13 + 8 >> 2] = d28;
  HEAPF32[i15 + 12 >> 2] = d24;
  d25 = d24 + d26;
  HEAPF32[i13 + 16 >> 2] = d28;
  HEAPF32[i15 + 20 >> 2] = d25;
  HEAPF32[i13 + 24 >> 2] = d23;
  HEAPF32[i15 + 28 >> 2] = d25;
  __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i16, i2 | 0, i15, i3, 0, 0);
  __ZNK7WebCore9FloatQuad11boundingBoxEv(i6, i16);
  __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i12, i6);
  i6 = HEAP32[i11 + 4 >> 2] | 0;
  i12 = i10 + 8 | 0;
  i10 = HEAP32[i12 >> 2] | 0;
  i16 = HEAP32[i12 + 4 >> 2] | 0;
  HEAP32[i4 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i19 >> 2] = i6;
  HEAP32[i21 >> 2] = i10;
  HEAP32[i8 >> 2] = i16;
 }
 i16 = i1;
 i1 = i9;
 HEAP32[i16 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i16 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i16 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i16 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore14RenderReplaced19replacedContentRectERKNS_10LayoutSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i2 | 0;
 i14 = i2 | 0;
 i15 = i2;
 i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 744 >> 2] & 511](i14) | 0;
 i17 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 712 >> 2] & 127](i11, i14);
 i18 = (HEAP32[i11 >> 2] | 0) + i16 | 0;
 i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 736 >> 2] & 511](i14) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 704 >> 2] & 127](i12, i14);
 i15 = (HEAP32[i12 >> 2] | 0) + i16 | 0;
 __ZNK7WebCore9RenderBox11clientWidthEv(i5, i13);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 712 >> 2] & 127](i6, i14);
 i16 = (HEAP32[i5 >> 2] | 0) - (HEAP32[i6 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 716 >> 2] & 127](i7, i14);
 i6 = i16 - (HEAP32[i7 >> 2] | 0) | 0;
 __ZNK7WebCore9RenderBox12clientHeightEv(i8, i13);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 704 >> 2] & 127](i9, i14);
 i13 = (HEAP32[i8 >> 2] | 0) - (HEAP32[i9 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 708 >> 2] & 127](i10, i14);
 i14 = i13 - (HEAP32[i10 >> 2] | 0) | 0;
 i10 = i6 | 0;
 i13 = i14 | 0;
 i17 = (HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 20 >> 2] | 0) + 296 >> 2] | 0) >>> 22 & 7;
 if ((i17 | 0) == 0) {
  HEAP32[i1 >> 2] = i18;
  HEAP32[i1 + 4 >> 2] = i15;
  i2 = i1 + 8 | 0;
  HEAP32[i2 >> 2] = i10;
  HEAP32[i2 + 4 >> 2] = i13;
  STACKTOP = i4;
  return;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i9 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   if ((i17 | 0) == 1 | (i17 | 0) == 4 | (i17 | 0) == 2) {
    if (+(i6 | 0) / +(i2 | 0) > +(i14 | 0) / +(i9 | 0) ^ (i17 | 0) == 2) {
     i19 = (Math_imul(i2, i14) | 0) / (i9 | 0) & -1;
     i20 = i14;
    } else {
     i19 = i6;
     i20 = (Math_imul(i9, i6) | 0) / (i2 | 0) & -1;
    }
    if ((i17 | 0) == 4 & (i19 | 0) > (i2 | 0)) {
     i21 = 11;
    } else {
     i22 = i20 | 0;
     i23 = i19 | 0;
    }
   } else if ((i17 | 0) == 3) {
    i21 = 11;
   } else {
    i22 = i13;
    i23 = i10;
   }
   if ((i21 | 0) == 11) {
    i9 = i3;
    i22 = HEAP32[i9 + 4 >> 2] | 0;
    i23 = HEAP32[i9 >> 2] | 0;
   }
   HEAP32[i1 >> 2] = ((i6 - i23 | 0) / 2 & -1) + i18;
   HEAP32[i1 + 4 >> 2] = ((i14 - i22 | 0) / 2 & -1) + i15;
   i9 = i1 + 8 | 0;
   HEAP32[i9 >> 2] = i23;
   HEAP32[i9 + 4 >> 2] = i22;
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = i18;
 HEAP32[i1 + 4 >> 2] = i15;
 i15 = i1 + 8 | 0;
 HEAP32[i15 >> 2] = i10;
 HEAP32[i15 + 4 >> 2] = i13;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14RenderReplaced16positionForPointERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i2 + 84 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = 3;
  } else {
   i10 = __ZN7WebCore9InlineBox4rootEv(i8 | 0) | 0;
   if ((i10 | 0) == 0) {
    i9 = 3;
    break;
   }
   __ZNK7WebCore13RootInlineBox12selectionTopEv(i5, i10);
   __ZNK7WebCore13RootInlineBox15selectionBottomEv(i6, i10);
  }
 } while (0);
 if ((i9 | 0) == 3) {
  i9 = (HEAP32[i2 + 36 >> 2] | 0) + 44 | 0;
  i8 = (HEAP32[i9 >> 2] | 0) >>> 13 & 3;
  if ((i8 | 0) == 3 | (i8 | 0) == 0) {
   HEAP32[i5 >> 2] = HEAP32[i2 + 48 >> 2];
  } else {
   HEAP32[i5 >> 2] = HEAP32[i2 + 44 >> 2];
  }
  i8 = (HEAP32[i9 >> 2] | 0) >>> 13 & 3;
  if ((i8 | 0) == 3 | (i8 | 0) == 0) {
   i11 = i2 + 48 | 0;
  } else {
   i11 = i2 + 44 | 0;
  }
  if ((i8 | 0) == 3 | (i8 | 0) == 0) {
   i12 = i2 + 56 | 0;
  } else {
   i12 = i2 + 52 | 0;
  }
  HEAP32[i6 >> 2] = (HEAP32[i12 >> 2] | 0) + (HEAP32[i11 >> 2] | 0);
 }
 i11 = i2 | 0;
 i12 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i12 & 8192 | 0) == 0) {
  i13 = (HEAP32[i2 + 48 >> 2] | 0) + (HEAP32[i3 + 4 >> 2] | 0) | 0;
  i14 = (HEAP32[i2 + 44 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0;
 } else {
  i13 = (HEAP32[i2 + 44 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0;
  i14 = (HEAP32[i2 + 48 >> 2] | 0) + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 }
 if ((i14 | 0) < (HEAP32[i5 >> 2] | 0)) {
  __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, i11, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 564 >> 2] & 511](i11) | 0, 1);
  STACKTOP = i4;
  return;
 }
 if ((i14 | 0) >= (HEAP32[i6 >> 2] | 0)) {
  __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, i11, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 568 >> 2] & 511](i11) | 0, 1);
  STACKTOP = i4;
  return;
 }
 do {
  if ((i12 & 128 | 0) == 0) {
   if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
    break;
   }
   i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i6 | 0) == 3 | (i6 | 0) == 0) {
    i15 = i2 + 44 | 0;
   } else {
    i15 = i2 + 48 | 0;
   }
   if ((i6 | 0) == 3 | (i6 | 0) == 0) {
    i16 = i2 + 52 | 0;
   } else {
    i16 = i2 + 56 | 0;
   }
   if ((i13 | 0) > (((HEAP32[i16 >> 2] | 0) / 2 & -1) + (HEAP32[i15 >> 2] | 0) | 0)) {
    __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, i11, 1, 1);
    STACKTOP = i4;
    return;
   } else {
    __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, i11, 0, 1);
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 __ZN7WebCore9RenderBox16positionForPointERKNS_11LayoutPointE(i1, i7, i3);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore14RenderReplaced23hasReplacedLogicalWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = (HEAP32[i2 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i3 | 0) == 3 | (i3 | 0) == 0) {
  i4 = HEAP32[i2 + 4 >> 2] | 0;
  i5 = i4 + 4 | 0;
  i6 = i4;
 } else {
  i4 = HEAP32[i2 + 4 >> 2] | 0;
  i5 = i4 + 12 | 0;
  i6 = i4;
 }
 i4 = HEAP8[i5 + 5 | 0] | 0;
 i5 = i4 & 255;
 if ((i5 | 0) == 3 | (i5 | 0) == 2 | (i5 | 0) == 10) {
  i7 = 1;
  return i7 | 0;
 }
 if ((i4 - 11 & 255) >>> 0 < 4 >>> 0) {
  i7 = 1;
  return i7 | 0;
 }
 if ((i3 | 0) == 3 | (i3 | 0) == 0) {
  i8 = i6 + 4 | 0;
 } else {
  i8 = i6 + 12 | 0;
 }
 if ((HEAP8[i8 + 5 | 0] | 0) == 0) {
  i7 = 0;
  return i7 | 0;
 }
 i8 = __ZNK7WebCore12RenderObject15containingBlockEv(i1 | 0) | 0;
 L18 : do {
  if ((i8 | 0) == 0) {
   i9 = 0;
  } else {
   i1 = HEAP32[i8 + 20 >> 2] | 0;
   if ((i1 & 768 | 0) == 768) {
    i9 = 0;
    break;
   } else {
    i10 = i8;
    i11 = i1;
   }
   while (1) {
    i1 = i10 | 0;
    do {
     if ((i11 & 128 | 0) == 0) {
      i6 = HEAP32[i10 + 4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      if ((HEAP32[i6 + 12 >> 2] & 4 | 0) == 0) {
       break;
      }
      i3 = HEAP32[i6 + 44 >> 2] | 0;
      i6 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
      if ((i3 | 0) == (i6 | 0)) {
       i9 = 0;
       break L18;
      }
      if ((HEAP32[i3 + 12 >> 2] | 0) != (HEAP32[i6 + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
       i9 = 0;
       break L18;
      }
     }
    } while (0);
    i6 = HEAP32[i10 + 36 >> 2] | 0;
    i3 = (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3;
    if ((i3 | 0) == 3 | (i3 | 0) == 0) {
     i12 = (HEAP32[i6 + 4 >> 2] | 0) + 4 | 0;
    } else {
     i12 = (HEAP32[i6 + 4 >> 2] | 0) + 12 | 0;
    }
    i6 = HEAP8[i12 + 5 | 0] | 0;
    i3 = i6 & 255;
    if ((i3 | 0) == 3 | (i3 | 0) == 2 | (i3 | 0) == 10) {
     i9 = i10;
     break L18;
    }
    if ((i6 - 11 & 255) >>> 0 < 4 >>> 0) {
     i9 = i10;
     break L18;
    }
    i6 = __ZNK7WebCore12RenderObject15containingBlockEv(i1) | 0;
    i3 = HEAP32[i6 + 20 >> 2] | 0;
    if ((i3 & 768 | 0) == 768) {
     i9 = 0;
     break;
    } else {
     i10 = i6;
     i11 = i3;
    }
   }
  }
 } while (0);
 i7 = (i9 | 0) != 0;
 return i7 | 0;
}
function __ZNK7WebCore14RenderReplaced29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i2 + 36 | 0;
 do {
  if ((HEAP32[(HEAP32[i8 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
   if ((HEAP8[(__ZNK7WebCore12RenderObject14enclosingLayerEv(i2 | 0) | 0) + 22 | 0] & 8) != 0) {
    break;
   }
   _memset(i1 | 0, 0, 16) | 0;
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZNK7WebCore14RenderReplaced18localSelectionRectEb(i6, i2, 0);
 i9 = i2 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 824 >> 2] & 127](i7, i9);
 i10 = i5;
 i11 = i6;
 HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
 __ZN7WebCore10LayoutRect5uniteERKS0_(i5, i7);
 i7 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i12 = 0;
  i13 = 0;
 } else {
  i11 = i7 + 52 | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  i13 = HEAP32[i11 + 4 >> 2] | 0;
 }
 i11 = i5 | 0;
 i7 = (HEAP32[i11 >> 2] | 0) + i12 | 0;
 HEAP32[i11 >> 2] = i7;
 i12 = i5 + 4 | 0;
 i6 = (HEAP32[i12 >> 2] | 0) + i13 | 0;
 HEAP32[i12 >> 2] = i6;
 i13 = HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] | 0;
 i8 = HEAP32[i13 + 64 >> 2] | 0;
 if ((i8 & 2013265920 | 0) == 0) {
  i14 = 0;
  i15 = 0;
 } else {
  i14 = HEAP32[i13 + 68 >> 2] | 0;
  i15 = i8 >>> 1 & 65535;
 }
 i8 = i14 + i15 | 0;
 i15 = (i8 | 0) > 0 ? i8 & 65535 : 0;
 HEAP32[i11 >> 2] = i7 - i15;
 i7 = i5 + 8 | 0;
 i11 = i15 << 1;
 HEAP32[i7 >> 2] = i11 + (HEAP32[i7 >> 2] | 0);
 HEAP32[i12 >> 2] = i6 - i15;
 i15 = i5 + 12 | 0;
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + i11;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 512 >> 2] & 31](i9, i3, i5, 0);
 i5 = i1;
 HEAP32[i5 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore14RenderReplaced32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, i16 = 0, d17 = +0, d18 = +0, d19 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 HEAP8[i4] = 0;
 i4 = i1 | 0;
 i10 = i1 + 36 | 0;
 i11 = (HEAP32[(HEAP32[i10 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i12 = i1;
 i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 888 >> 2] | 0;
 if ((i11 | 0) == 3 | (i11 | 0) == 0) {
  FUNCTION_TABLE_vii[i13 & 127](i8, i4);
  i14 = HEAP32[i8 >> 2] | 0;
 } else {
  FUNCTION_TABLE_vii[i13 & 127](i9, i4);
  i14 = HEAP32[i9 + 4 >> 2] | 0;
 }
 d15 = +(i14 | 0);
 i14 = (HEAP32[(HEAP32[i10 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i10 = HEAP32[(HEAP32[i12 >> 2] | 0) + 888 >> 2] | 0;
 if ((i14 | 0) == 3 | (i14 | 0) == 0) {
  FUNCTION_TABLE_vii[i10 & 127](i6, i4);
  i16 = HEAP32[i6 + 4 >> 2] | 0;
 } else {
  FUNCTION_TABLE_vii[i10 & 127](i7, i4);
  i16 = HEAP32[i7 >> 2] | 0;
 }
 d17 = +(i16 | 0);
 i16 = i2;
 d18 = +d15;
 d19 = +d17;
 HEAPF32[i16 >> 2] = d18;
 HEAPF32[i16 + 4 >> 2] = d19;
 i16 = i2 | 0;
 if (d15 <= +0) {
  STACKTOP = i5;
  return;
 }
 i7 = i2 + 4 | 0;
 if (d17 <= +0) {
  STACKTOP = i5;
  return;
 }
 i2 = i1 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 2048 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i4 = i1;
 do {
  if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 92 >> 2] & 511](i2) | 0)) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 224 >> 2] & 511](i2) | 0) {
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 232 >> 2] & 511](i2) | 0) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAPF64[i3 >> 3] = +HEAPF32[i16 >> 2] / +HEAPF32[i7 >> 2];
 STACKTOP = i5;
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
   i6 = 21;
   break;
  }
  i5 = HEAP32[i5 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 if ((i6 | 0) == 21) {
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
function __ZN7WebCore14RenderReplaced17setSelectionStateENS_12RenderObject14SelectionStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE(i1 | 0, i2);
 i2 = i1 + 84 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 | 0;
 if (!(__ZN7WebCore12RenderObject33canUpdateSelectionOnRootLineBoxesEv(i6) | 0)) {
  STACKTOP = i3;
  return;
 }
 i7 = __ZN7WebCore9InlineBox4rootEv(HEAP32[i2 >> 2] | 0) | 0;
 i2 = i1 + 20 | 0;
 i8 = (HEAP32[i2 >> 2] | 0) >>> 25 & 7;
 do {
  if ((i8 | 0) == 2) {
   i9 = 1;
  } else if ((i8 | 0) == 0) {
   i9 = 0;
  } else {
   __ZNK7WebCore12RenderObject17selectionStartEndERiS1_(i6, i4, i5);
   if ((i8 | 0) == 1) {
    i9 = (HEAP32[i4 >> 2] | 0) == 0;
    break;
   }
   i10 = HEAP32[i1 + 4 >> 2] | 0;
   if ((HEAP32[i10 + 36 >> 2] | 0) == 0) {
    i11 = 1;
   } else {
    if ((HEAP32[i2 >> 2] & 128 | 0) == 0) {
     i12 = i10;
    } else {
     i12 = 0;
    }
    i11 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i12 | 0) | 0;
   }
   if ((i8 | 0) == 3) {
    i9 = (HEAP32[i5 >> 2] | 0) == (i11 | 0);
    break;
   } else if ((i8 | 0) != 4) {
    i9 = 0;
    break;
   }
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    i9 = 0;
    break;
   }
   i9 = (HEAP32[i5 >> 2] | 0) == (i11 | 0);
  }
 } while (0);
 i11 = i7 + 32 | 0;
 HEAP32[i11 >> 2] = HEAP32[i11 >> 2] & -8193 | (i9 & 1) << 13;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14RenderReplaced6layoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 48 | 0;
 i5 = i1 | 0;
 __ZN7WebCore15LayoutRepainterC1ERNS_13RenderElementEb(i3, i1 | 0, __ZNK7WebCore12RenderObject27checkForRepaintDuringLayoutEv(i5) | 0);
 i6 = i1 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1016 >> 2] & 127](i4, i1);
 HEAP32[i1 + 56 >> 2] = HEAP32[i4 >> 2];
 i4 = i1;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 876 >> 2] & 63](i6);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 880 >> 2] & 63](i6);
 __ZN7WebCore9RenderBox13clearOverflowEv(i6);
 __ZN7WebCore9RenderBox23addVisualEffectOverflowEv(i6);
 __ZN7WebCore9RenderBox20updateLayerTransformEv(i6);
 i6 = i1 + 20 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if (i1 >>> 0 <= 1073741823 >>> 0) {
  i7 = __ZN7WebCore15LayoutRepainter18repaintAfterLayoutEv(i3) | 0;
  __ZN7WebCore12RenderObject16clearNeedsLayoutEv(i5);
  STACKTOP = i2;
  return;
 }
 HEAP32[i6 >> 2] = i1 & 1073741823 | 1073741824;
 i7 = __ZN7WebCore15LayoutRepainter18repaintAfterLayoutEv(i3) | 0;
 __ZN7WebCore12RenderObject16clearNeedsLayoutEv(i5);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore9RenderBox19contentLogicalWidthEv(i1, i2) {
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
  __ZNK7WebCore9RenderBox11clientWidthEv(i4, i2);
  i10 = i2 | 0;
  i11 = i2;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 712 >> 2] & 127](i5, i10);
  i12 = (HEAP32[i4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 716 >> 2] & 127](i6, i10);
  HEAP32[i1 >> 2] = i12 - (HEAP32[i6 >> 2] | 0);
  STACKTOP = i3;
  return;
 } else {
  __ZNK7WebCore9RenderBox12clientHeightEv(i7, i2);
  i6 = i2 | 0;
  i12 = i2;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 704 >> 2] & 127](i8, i6);
  i2 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 708 >> 2] & 127](i9, i6);
  HEAP32[i1 >> 2] = i2 - (HEAP32[i9 >> 2] | 0);
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore14RenderReplaced10isSelectedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 20 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) >>> 25 & 7;
 do {
  if ((i6 | 0) == 2) {
   i7 = 1;
  } else if ((i6 | 0) == 0) {
   i7 = 0;
  } else {
   __ZNK7WebCore12RenderObject17selectionStartEndERiS1_(i1 | 0, i3, i4);
   if ((i6 | 0) == 1) {
    i7 = (HEAP32[i3 >> 2] | 0) == 0;
    break;
   }
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   if ((HEAP32[i8 + 36 >> 2] | 0) == 0) {
    i9 = 1;
   } else {
    if ((HEAP32[i5 >> 2] & 128 | 0) == 0) {
     i10 = i8;
    } else {
     i10 = 0;
    }
    i9 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i10 | 0) | 0;
   }
   if ((i6 | 0) == 3) {
    i7 = (HEAP32[i4 >> 2] | 0) == (i9 | 0);
    break;
   } else if ((i6 | 0) != 4) {
    i7 = 0;
    break;
   }
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    i7 = 0;
    break;
   }
   i7 = (HEAP32[i4 >> 2] | 0) == (i9 | 0);
  }
 } while (0);
 STACKTOP = i2;
 return i7 | 0;
}
function __ZNK7WebCore14RenderReplaced24hasReplacedLogicalHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = (HEAP32[i2 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i3 | 0) == 3 | (i3 | 0) == 0) {
  i4 = HEAP32[i2 + 4 >> 2] | 0;
  i5 = i4 + 12 | 0;
  i6 = i4;
 } else {
  i4 = HEAP32[i2 + 4 >> 2] | 0;
  i5 = i4 + 4 | 0;
  i6 = i4;
 }
 if ((HEAP8[i5 + 5 | 0] | 0) == 0) {
  i7 = 0;
  return i7 | 0;
 }
 if ((i3 | 0) == 3 | (i3 | 0) == 0) {
  i8 = i6 + 12 | 0;
 } else {
  i8 = i6 + 4 | 0;
 }
 i6 = HEAP8[i8 + 5 | 0] | 0;
 i8 = i6 & 255;
 do {
  if (!((i8 | 0) == 3 | (i8 | 0) == 2 | (i8 | 0) == 10)) {
   if ((i6 - 11 & 255) >>> 0 < 4 >>> 0) {
    break;
   } else {
    i7 = 0;
   }
   return i7 | 0;
  }
 } while (0);
 i7 = (__ZNK7WebCore20RenderBoxModelObject44hasAutoHeightOrContainingBlockWithAutoHeightEv(i1 | 0) | 0) ^ 1;
 return i7 | 0;
}
function __ZN7WebCore14RenderReplaced20intrinsicSizeChangedEv(i1) {
 i1 = i1 | 0;
 var d2 = +0, i3 = 0, i4 = 0;
 d2 = +HEAPF32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
 i3 = i1 + 92 | 0;
 HEAP32[i3 >> 2] = ~~(d2 * +300);
 HEAP32[i3 + 4 >> 2] = ~~(d2 * +150);
 i3 = i1 | 0;
 i4 = i1 + 20 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 & 1 | 0) != 0) {
  __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i3, 1, 1);
  return;
 }
 HEAP32[i4 >> 2] = i1 | 1;
 __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i3, 1, 0);
 if ((HEAP32[i4 >> 2] & 32768 | 0) == 0) {
  __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i3, 1, 1);
  return;
 }
 __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i3);
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i3, 1, 1);
 return;
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
function __ZN7WebCore14RenderReplacedC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEERKNS_10LayoutSizeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore9RenderBoxC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i6, 8);
 HEAP32[i1 >> 2] = H_BASE + 32;
 i6 = i4;
 i4 = i1 + 92 | 0;
 i2 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = i2;
 i2 = i1 + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 2048;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore14RenderReplacedC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEERKNS_10LayoutSizeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore9RenderBoxC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i6, 8);
 HEAP32[i1 >> 2] = H_BASE + 32;
 i6 = i4;
 i4 = i1 + 92 | 0;
 i2 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = i2;
 i2 = i1 + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 2048;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore14RenderReplacedC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEERKNS_10LayoutSizeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore9RenderBoxC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i6, 8);
 HEAP32[i1 >> 2] = H_BASE + 32;
 i6 = i4;
 i4 = i1 + 92 | 0;
 i2 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = i2;
 i2 = i1 + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 2048;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore14RenderReplacedC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEERKNS_10LayoutSizeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore9RenderBoxC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i6, 8);
 HEAP32[i1 >> 2] = H_BASE + 32;
 i6 = i4;
 i4 = i1 + 92 | 0;
 i2 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = i2;
 i2 = i1 + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 2048;
 STACKTOP = i5;
 return;
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
function __ZNK7WebCore14RenderReplaced29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 | 0;
 i8 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i9 = HEAP32[(HEAP32[i1 >> 2] | 0) + 888 >> 2] | 0;
 if ((i8 | 0) == 3 | (i8 | 0) == 0) {
  FUNCTION_TABLE_vii[i9 & 127](i5, i7);
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  FUNCTION_TABLE_vii[i9 & 127](i6, i7);
  i10 = HEAP32[i6 + 4 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i10;
 HEAP32[i2 >> 2] = i10;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14RenderReplacedC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
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
 __ZN7WebCore9RenderBoxC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i5, 8);
 HEAP32[i1 >> 2] = H_BASE + 32;
 HEAP32[i1 + 92 >> 2] = 300;
 HEAP32[i1 + 96 >> 2] = 150;
 i5 = i1 + 20 | 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | 2048;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14RenderReplacedC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
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
 __ZN7WebCore9RenderBoxC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i5, 8);
 HEAP32[i1 >> 2] = H_BASE + 32;
 HEAP32[i1 + 92 >> 2] = 300;
 HEAP32[i1 + 96 >> 2] = 150;
 i5 = i1 + 20 | 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | 2048;
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
function __ZN7WebCore14RenderReplaced14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var d4 = +0;
 __ZN7WebCore9RenderBox14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1 | 0, i2, i3);
 if ((i3 | 0) == 0) {
  d4 = +1;
 } else {
  d4 = +HEAPF32[(HEAP32[i3 + 24 >> 2] | 0) + 80 >> 2];
 }
 if (+HEAPF32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2] == d4) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 1020 >> 2] & 63](i1);
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
function iiiiiii___ZN7WebCore9RenderBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return __ZN7WebCore9RenderBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function __ZN7WebCore14RenderReplaced15willBeDestroyedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 do {
  if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0) {
   i3 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 644 >> 2] & 127](i3, i2);
  }
 } while (0);
 __ZN7WebCore9RenderBox15willBeDestroyedEv(i1 | 0);
 return;
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
function viiii___ZN7WebCore9RenderBox17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore9RenderBox17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
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
function iiiiii___ZNK7WebCore9RenderBox16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZNK7WebCore9RenderBox16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function iiiifi___ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 return __ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE(i1 | 0, i2 | 0, i3 | 0, +d4, i5 | 0) | 0;
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
function iiiifi___ZN7WebCore9RenderBox6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 return __ZN7WebCore9RenderBox6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE(i1 | 0, i2 | 0, i3 | 0, +d4, i5 | 0) | 0;
}
function viiii___ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
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
function viiii___ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
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
function viiii___ZNK7WebCore9RenderBox20computeLogicalHeightENS_10LayoutUnitES1_RNS0_27LogicalExtentComputedValuesE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore9RenderBox20computeLogicalHeightENS_10LayoutUnitES1_RNS0_27LogicalExtentComputedValuesE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
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
function viii___ZNK7WebCore9RenderBox13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function viiiii___ZNK7WebCore9RenderBox10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore9RenderBox10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
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
function viiiii___ZN7WebCore9RenderBox14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore9RenderBox14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viii___ZNK7WebCore9RenderBox13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore12RenderObject22outlineStyleForRepaintEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i2 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
  return i2 | 0;
 } else {
  i2 = HEAP32[i1 + 36 >> 2] | 0;
  return i2 | 0;
 }
 return 0;
}
function viii___ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
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
function iiii___ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viii___ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore9RenderBox15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore9RenderBox15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
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
 return FUNCTION_TABLE_iiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
}
function __ZNK7WebCore9RenderBox21collapsedMarginBeforeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i1, i2 + 60 | 0, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
 return;
}
function viii___ZN7WebCore9RenderBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore9RenderBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore9RenderBox20collapsedMarginAfterEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i1, i2 + 60 | 0, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
 return;
}
function __ZNK7WebCore14RenderReplaced13intrinsicSizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 + 92 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZN7WebCore13RenderElement28addChildIgnoringContinuationEPNS_12RenderObjectES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 628 >> 2] & 63](i1, i2, i3);
 return;
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
function viii___ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2_(i1 | 0, i2 | 0, i3 | 0);
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
function viii___ZN7WebCore9RenderBox12imageChangedEPKvPKNS_7IntRectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore9RenderBox12imageChangedEPKvPKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE(i1 | 0, i2 | 0) | 0;
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
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore13RenderElement11removeChildERNS_12RenderObjectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore13RenderElement11removeChildERNS_12RenderObjectE(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore9RenderBox31offsetFromLogicalTopOfFirstPageEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox31offsetFromLogicalTopOfFirstPageEv(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv(i1 | 0) | 0;
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
function ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv(i1 | 0) | 0;
}
function __ZNK7WebCore20RenderBoxModelObject12borderBeforeEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle17borderBeforeWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
}
function iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject14previousOffsetEi(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore9RenderBox24repaintOverhangingFloatsEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9RenderBox24repaintOverhangingFloatsEb(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE(i1 | 0, i2 | 0);
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
function ii___ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv(i1 | 0) | 0;
}
function iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject10nextOffsetEi(i1 | 0, i2 | 0) | 0;
}
function vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject14localTransformEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore12RenderObject15updateDragStateEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject15updateDragStateEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject22localToParentTransformEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv(i1 | 0) | 0;
}
function __ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function ii___ZNK7WebCore9RenderBox22verticalScrollbarWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox22verticalScrollbarWidthEv(i1 | 0) | 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZNK7WebCore9RenderBox21availableLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox19contentLogicalWidthEv(i1, i2);
 return;
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
function vii___ZN7WebCore9RenderBox13setScrollLeftEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9RenderBox13setScrollLeftEi(i1 | 0, i2 | 0);
}
function vi___ZN7WebCore13RenderElement21willBeRemovedFromTreeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13RenderElement21willBeRemovedFromTreeEv(i1 | 0);
}
function __ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function vii___ZN7WebCore9RenderBox12setScrollTopEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9RenderBox12setScrollTopEi(i1 | 0, i2 | 0);
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
function ii___ZNK7WebCore13RenderElement13hoverAncestorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore13RenderElement13hoverAncestorEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject14firstLineBlockEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14firstLineBlockEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14caretMinOffsetEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14caretMaxOffsetEv(i1 | 0) | 0;
}
function __ZN7WebCore14RenderReplaced13paintReplacedERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 63](i2 | 0, i3 | 0, i4 | 0);
}
function vii___ZNK7WebCore9RenderBox9offsetTopEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox9offsetTopEv(i1 | 0, i2 | 0);
}
function __ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function vi___ZN7WebCore13RenderElement16insertedIntoTreeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13RenderElement16insertedIntoTreeEv(i1 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore9RenderBox11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function b4(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(4);
 return 0;
}
function vi___ZN7WebCore9RenderBox19updateLogicalHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9RenderBox19updateLogicalHeightEv(i1 | 0);
}
function ii___ZNK7WebCore9RenderBox12scrollHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox12scrollHeightEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox12avoidsFloatsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox12avoidsFloatsEv(i1 | 0) | 0;
}
function vi___ZN7WebCore9RenderBox18updateLogicalWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9RenderBox18updateLogicalWidthEv(i1 | 0);
}
function ii___ZNK7WebCore9RenderBox11scrollWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox11scrollWidthEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox10scrollLeftEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox10scrollLeftEv(i1 | 0) | 0;
}
function __ZNK7WebCore9RenderBox32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
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
function __ZNK7WebCore9RenderBox10marginLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 72 >> 2];
 return;
}
function __ZN7WebCore14RenderReplacedD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9RenderBoxD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function ii___ZNK7WebCore9RenderBox9scrollTopEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox9scrollTopEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function b9(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(9);
}
function __ZNK7WebCore9RenderBox9marginTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 60 >> 2];
 return;
}
function __ZNK7WebCore14RenderReplaced21minimumReplacedHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore20RenderBoxModelObject20childBecameNonInlineEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore9RenderBox19inlineBlockBaselineENS_17LineDirectionModeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return -1 | 0;
}
function __ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function b11(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(11);
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
function b1(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 abort(1);
 return 0;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
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
function __ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore14RenderReplacedD2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9RenderBoxD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore14RenderReplacedD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9RenderBoxD2Ev(i1 | 0);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 511](i2 | 0) | 0;
}
function __ZNK7WebCore14RenderReplaced32hasRelativeIntrinsicLogicalWidthEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b12(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(12);
}
function __ZNK7WebCore12RenderObject27isSVGTransformableContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore9RenderBox33markForPaginationRelayoutIfNeededEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore14RenderReplaced10renderNameEv(i1) {
 i1 = i1 | 0;
 return H_BASE + 8 | 0;
}
function __ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv(i1) {
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
function __ZNK7WebCore14RenderReplaced18embeddedContentBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14RenderReplaced18canBeSelectionLeafEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function __ZNK7WebCore12RenderObject19virtualContinuationEv(i1) {
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
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
 return 0;
}
function __ZNK7WebCore9RenderBox17firstLineBaselineEv(i1) {
 i1 = i1 | 0;
 return -1 | 0;
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
function __ZNK7WebCore9RenderBox21isSelfCollapsingBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14RenderReplaced15canHaveChildrenEv(i1) {
 i1 = i1 | 0;
 return 0;
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
function __ZN7WebCore12RenderObject17updateFromElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore12RenderObject13isTextControlEv(i1) {
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
function __ZNK7WebCore12RenderObject11isTextFieldEv(i1) {
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
function __ZNK7WebCore9RenderBox14hasControlClipEv(i1) {
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
function b7(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(7);
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
function b10(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(10);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE,b0,viiiii___ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper,b0,viiiii___ZNK7WebCore9RenderBox10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper,b0,viiiii___ZN7WebCore9RenderBox14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper,b0,viiiii___ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb__wrapper,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_iiiifi = [b1,b1,iiiifi___ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper,b1,iiiifi___ZN7WebCore9RenderBox6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper,b1,b1,b1];
  var FUNCTION_TABLE_vi = [b2,b2,vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper,b2,__ZN7WebCore12RenderObject17updateFromElementEv,b2,vi___ZN7WebCore13RenderElement21willBeRemovedFromTreeEv__wrapper,b2,__ZN7WebCore14RenderReplacedD0Ev,b2,__ZN7WebCore14RenderReplaced20intrinsicSizeChangedEv,b2,__ZN7WebCore14RenderReplaced15willBeDestroyedEv,b2,vi___ZN7WebCore13RenderElement16insertedIntoTreeEv__wrapper,b2,__ZN7WebCore14RenderReplaced29computePreferredLogicalWidthsEv,b2,vi___ZN7WebCore9RenderBox18updateLogicalWidthEv__wrapper,b2,__ZN7WebCore14RenderReplacedD2Ev,b2,__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv,b2,__ZN7WebCore14RenderReplaced6layoutEv,b2,vi___ZN7WebCore9RenderBox15updateFromStyleEv__wrapper,b2,vi___ZN7WebCore9RenderBox19updateLogicalHeightEv__wrapper
  ,b2,__ZN7WebCore9RenderBox33markForPaginationRelayoutIfNeededEv,b2,__ZN7WebCore9RenderBox14stopAutoscrollEv,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZNK7WebCore9RenderBox11marginRightEv,b3,vii___ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE__wrapper,b3,vii___ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv__wrapper,b3,vii___ZN7WebCore9RenderBox13setScrollLeftEi__wrapper,b3,vii___ZNK7WebCore9RenderBox10offsetLeftEv__wrapper,b3,__ZNK7WebCore20RenderBoxModelObject12paddingStartEv,b3,vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b3,vii___ZNK7WebCore9RenderBox31offsetFromLogicalTopOfFirstPageEv__wrapper,b3,__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv,b3,vii___ZNK7WebCore9RenderBox37containingBlockLogicalWidthForContentEv__wrapper,b3,vii___ZNK7WebCore9RenderBox24maxPreferredLogicalWidthEv__wrapper,b3,vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,__ZNK7WebCore9RenderBox20collapsedMarginAfterEv
  ,b3,__ZNK7WebCore14RenderReplaced13intrinsicSizeEv,b3,__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv,b3,__ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE,b3,__ZNK7WebCore14RenderReplaced28computeReplacedLogicalHeightEv,b3,vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper,b3,__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv,b3,__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv,b3,vii___ZN7WebCore9RenderBox12setScrollTopEi__wrapper,b3,vii___ZN7WebCore13RenderElement11removeChildERNS_12RenderObjectE__wrapper,b3,vii___ZN7WebCore9RenderBox9panScrollERKNS_8IntPointE__wrapper,b3,vii___ZNK7WebCore9RenderBox9offsetTopEv__wrapper,b3,vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper,b3,vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper,b3,__ZN7WebCore20RenderBoxModelObject20childBecameNonInlineEPNS_12RenderObjectE,b3,__ZNK7WebCore9RenderBox21availableLogicalWidthEv
  ,b3,__ZNK7WebCore20RenderBoxModelObject10paddingEndEv,b3,vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper,b3,__ZN7WebCore14RenderReplaced17setSelectionStateENS_12RenderObject14SelectionStateE,b3,__ZNK7WebCore14RenderReplaced21minimumReplacedHeightEv,b3,__ZNK7WebCore9RenderBox11offsetWidthEv,b3,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b3,vii___ZN7WebCore9RenderBox24repaintOverhangingFloatsEb__wrapper,b3,__ZNK7WebCore20RenderBoxModelObject12paddingRightEv,b3,__ZNK7WebCore9RenderBox21collapsedMarginBeforeEv,b3,__ZNK7WebCore9RenderBox9marginTopEv,b3,__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv,b3,vii___ZN7WebCore12RenderObject15updateDragStateEb__wrapper,b3,__ZNK7WebCore20RenderBoxModelObject10paddingTopEv,b3,__ZNK7WebCore9RenderBox18visualOverflowRectEv,b3,__ZNK7WebCore9RenderBox17borderBoundingBoxEv
  ,b3,__ZNK7WebCore9RenderBox12marginBottomEv,b3,__ZNK7WebCore9RenderBox10marginLeftEv,b3,__ZNK7WebCore9RenderBox12offsetHeightEv,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_iiiiiii = [b4,b4,iiiiiii___ZN7WebCore9RenderBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper,b4];
  var FUNCTION_TABLE_ii = [b5,b5,__ZNK7WebCore12RenderObject19isSVGResourceFilterEv,b5,__ZNK7WebCore12RenderObject13isSVGTextPathEv,b5,__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv,b5,__ZNK7WebCore12RenderObject10isRubyTextEv,b5,__ZNK7WebCore12RenderObject6isRubyEv,b5,ii___ZNK7WebCore9RenderBox9scrollTopEv__wrapper,b5,__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv,b5,__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv,b5,ii___ZNK7WebCore9RenderBox11scrollWidthEv__wrapper,b5,ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper,b5,__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv,b5,__ZNK7WebCore12RenderObject14isTableCaptionEv,b5,__ZNK7WebCore12RenderObject8isWidgetEv,b5,__ZNK7WebCore12RenderObject11isTextFieldEv
  ,b5,__ZNK7WebCore12RenderObject18isRenderFullScreenEv,b5,__ZNK7WebCore20RenderBoxModelObject11borderRightEv,b5,__ZNK7WebCore20RenderBoxModelObject9borderEndEv,b5,ii___ZNK7WebCore12RenderObject14firstLineBlockEv__wrapper,b5,ii___ZNK7WebCore9RenderBox10scrollLeftEv__wrapper,b5,__ZNK7WebCore12RenderObject9isSVGRootEv,b5,__ZNK7WebCore12RenderObject7isFrameEv,b5,__ZNK7WebCore14RenderReplaced10renderNameEv,b5,__ZNK7WebCore12RenderObject16isEmbeddedObjectEv,b5,__ZNK7WebCore20RenderBoxModelObject12borderBottomEv,b5,__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv,b5,__ZNK7WebCore12RenderObject15isSVGInlineTextEv,b5,__ZNK7WebCore12RenderObject7isMeterEv,b5,__ZNK7WebCore12RenderObject14isSVGContainerEv,b5,ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper
  ,b5,__ZNK7WebCore12RenderObject22isSVGResourceContainerEv,b5,__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv,b5,__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv,b5,__ZNK7WebCore12RenderObject7isQuoteEv,b5,__ZNK7WebCore12RenderObject10isListItemEv,b5,__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv,b5,__ZNK7WebCore12RenderObject10isSVGImageEv,b5,__ZNK7WebCore12RenderObject20isStretchingChildrenEv,b5,__ZNK7WebCore12RenderObject15isDetailsMarkerEv,b5,__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv,b5,__ZNK7WebCore12RenderObject16isRenderTableColEv,b5,__ZNK7WebCore12RenderObject7isVideoEv,b5,__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv,b5,__ZNK7WebCore12RenderObject13isCombineTextEv,b5,__ZNK7WebCore12RenderObject5isWBREv
  ,b5,__ZNK7WebCore12RenderObject22isSVGViewportContainerEv,b5,__ZNK7WebCore13RenderElement14firstChildSlowEv,b5,ii___ZNK7WebCore9RenderBox22verticalScrollbarWidthEv__wrapper,b5,__ZNK7WebCore12RenderObject10isTextAreaEv,b5,__ZNK7WebCore12RenderObject18isRenderFlowThreadEv,b5,__ZNK7WebCore14RenderReplaced15canHaveChildrenEv,b5,ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper,b5,__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv,b5,__ZNK7WebCore14RenderReplaced18canBeSelectionLeafEv,b5,__ZNK7WebCore12RenderObject17isRenderMathMLRowEv,b5,__ZNK7WebCore12RenderObject16isRenderSVGBlockEv,b5,__ZNK7WebCore12RenderObject19isFileUploadControlEv,b5,__ZNK7WebCore12RenderObject9isReplicaEv,b5,ii___ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv__wrapper,b5,__ZNK7WebCore9RenderBox14hasControlClipEv
  ,b5,__ZNK7WebCore12RenderObject7isMediaEv,b5,__ZNK7WebCore12RenderObject10isSVGShapeEv,b5,__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv,b5,__ZNK7WebCore12RenderObject8isSliderEv,b5,__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv,b5,ii___ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv__wrapper,b5,__ZNK7WebCore12RenderObject8isCanvasEv,b5,__ZNK7WebCore12RenderObject11isSVGInlineEv,b5,__ZNK7WebCore12RenderObject10isMenuListEv,b5,__ZNK7WebCore12RenderObject18isRenderMathMLMathEv,b5,ii___ZNK7WebCore13RenderElement13hoverAncestorEv__wrapper,b5,ii___ZNK7WebCore9RenderBox33needsPreferredWidthsRecalculationEv__wrapper,b5,ii___ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv__wrapper,b5,__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv,b5,ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper
  ,b5,__ZNK7WebCore12RenderObject13isSliderThumbEv,b5,__ZNK7WebCore9RenderBox17firstLineBaselineEv,b5,__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv,b5,__ZNK7WebCore12RenderObject13isTextControlEv,b5,__ZNK7WebCore12RenderObject9isSVGTextEv,b5,__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv,b5,__ZNK7WebCore12RenderObject10isProgressEv,b5,__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv,b5,__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv,b5,__ZNK7WebCore12RenderObject11isTableCellEv,b5,__ZNK7WebCore12RenderObject12isRenderGridEv,b5,__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv,b5,__ZNK7WebCore12RenderObject9isListBoxEv,b5,__ZNK7WebCore12RenderObject9isSVGPathEv,b5,ii___ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv__wrapper
  ,b5,__ZNK7WebCore14RenderReplaced18embeddedContentBoxEv,b5,__ZNK7WebCore13RenderElement13lastChildSlowEv,b5,__ZNK7WebCore12RenderObject13isRenderImageEv,b5,__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv,b5,ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper,b5,__ZNK7WebCore12RenderObject14isRenderButtonEv,b5,__ZNK7WebCore12RenderObject14isRenderIFrameEv,b5,__ZNK7WebCore12RenderObject6lengthEv,b5,__ZNK7WebCore12RenderObject10isTableRowEv,b5,__ZNK7WebCore12RenderObject13isFlexibleBoxEv,b5,__ZNK7WebCore12RenderObject10isFrameSetEv,b5,__ZNK7WebCore20RenderBoxModelObject11borderAfterEv,b5,__ZNK7WebCore9RenderBox13requiresLayerEv,b5,__ZNK7WebCore12RenderObject10isFieldsetEv,b5,__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv
  ,b5,__ZNK7WebCore12RenderObject18isSVGForeignObjectEv,b5,ii___ZNK7WebCore9RenderBox21hasRelativeDimensionsEv__wrapper,b5,__ZNK7WebCore12RenderObject9isRubyRunEv,b5,__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv,b5,__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv,b5,__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv,b5,__ZNK7WebCore12RenderObject10isRubyBaseEv,b5,__ZNK7WebCore12RenderObject14isRenderRegionEv,b5,ii___ZNK7WebCore9RenderBox12avoidsFloatsEv__wrapper,b5,ii___ZNK7WebCore9RenderBox12scrollHeightEv__wrapper,b5,__ZNK7WebCore17CachedImageClient18resourceClientTypeEv,b5,__ZN7WebCore12RenderObject21needsBoundariesUpdateEv,b5,__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv,b5,__ZNK7WebCore20RenderBoxModelObject9borderTopEv,b5,__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv
  ,b5,__ZNK7WebCore12RenderObject7isImageEv,b5,__ZNK7WebCore12RenderObject9isCounterEv,b5,ii___ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv__wrapper,b5,__ZNK7WebCore12RenderObject17isSVGGradientStopEv,b5,__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv,b5,__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv,b5,__ZNK7WebCore20RenderBoxModelObject10borderLeftEv,b5,__ZNK7WebCore12RenderObject7isEmptyEv,b5,__ZNK7WebCore9RenderBox21isSelfCollapsingBlockEv,b5,__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv,b5,__ZNK7WebCore12RenderObject12isListMarkerEv,b5,__ZNK7WebCore14RenderReplaced32hasRelativeIntrinsicLogicalWidthEv,b5,ii___ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv__wrapper,b5,__ZNK7WebCore20RenderBoxModelObject11borderStartEv,b5,__ZNK7WebCore12RenderObject7isTableEv
  ,b5,__ZNK7WebCore12RenderObject14isTableSectionEv,b5,__ZNK7WebCore12RenderObject19virtualContinuationEv,b5,ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper,b5,__ZNK7WebCore12RenderObject18isRenderMathMLRootEv,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5];
  var FUNCTION_TABLE_iiii = [b6,b6,iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper,b6,__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE,b6,iiii___ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE__wrapper,b6,iiii___ZNK7WebCore9RenderBox22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper,b6,iiii___ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj__wrapper,b6,b6,b6,b6,b6];
  var FUNCTION_TABLE_viii = [b7,b7,viii___ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper,b7,__ZN7WebCore14RenderReplacedC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE,b7,viii___ZN7WebCore9RenderBox12imageChangedEPKvPKNS_7IntRectE__wrapper,b7,__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE,b7,__ZN7WebCore13RenderElement28addChildIgnoringContinuationEPNS_12RenderObjectES2_,b7,viii___ZNK7WebCore9RenderBox13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb__wrapper,b7,viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper,b7,viii___ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper,b7,viii___ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b7,__ZN7WebCore14RenderReplaced5paintERNS_9PaintInfoERKNS_11LayoutPointE,b7,viii___ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2___wrapper,b7,__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE,b7,__ZN7WebCore14RenderReplaced14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE,b7,viii___ZN7WebCore9RenderBox15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE__wrapper
  ,b7,__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE,b7,__ZN7WebCore9RenderBox11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE,b7,__ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE,b7,__ZNK7WebCore14RenderReplaced29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE,b7,viii___ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE__wrapper,b7,__ZNK7WebCore14RenderReplaced27computeReplacedLogicalWidthENS_22ShouldComputePreferredE,b7,__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE,b7,viii___ZN7WebCore9RenderBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b7,viii___ZNK7WebCore9RenderBox13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE__wrapper,b7,__ZNK7WebCore14RenderReplaced29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2_,b7,__ZN7WebCore14RenderReplaced13paintReplacedERNS_9PaintInfoERKNS_11LayoutPointE,b7,__ZN7WebCore14RenderReplaced16positionForPointERKNS_11LayoutPointE,b7,__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE,b7,b7,b7,b7
  ,b7,b7,b7,b7,b7];
  var FUNCTION_TABLE_v = [b8,b8,v___ZN7WebCore9RenderBox15createInlineBoxEv__wrapper,b8];
  var FUNCTION_TABLE_viiiiii = [b9,b9,viiiiii___ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE__wrapper,b9];
  var FUNCTION_TABLE_iii = [b10,b10,iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper,b10,__ZNK7WebCore9RenderBox19inlineBlockBaselineENS_17LineDirectionModeE,b10,iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper,b10,iii___ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE__wrapper,b10,iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper,b10,iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper,b10,__ZNK7WebCore9RenderBox32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE,b10];
  var FUNCTION_TABLE_iiiiii = [b11,b11,iiiiii___ZNK7WebCore9RenderBox16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper,b11,iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper,b11,b11,b11];
  var FUNCTION_TABLE_viiii = [b12,b12,viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper,b12,viiii___ZN7WebCore9RenderBox17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper,b12,viiii___ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE__wrapper,b12,__ZN7WebCore14RenderReplaced23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb,b12,__ZN7WebCore14RenderReplacedC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEERKNS_10LayoutSizeE,b12,viiii___ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper,b12,__ZN7WebCore14RenderReplacedC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEERKNS_10LayoutSizeE,b12,__ZNK7WebCore14RenderReplaced32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb,b12,viiii___ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper,b12,viiii___ZNK7WebCore9RenderBox20computeLogicalHeightENS_10LayoutUnitES1_RNS0_27LogicalExtentComputedValuesE__wrapper,b12,b12,b12,b12,b12,b12,b12,b12
  ,b12,b12,b12];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_iiiifi: dynCall_iiiifi, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_iiiifi": invoke_iiiifi, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_iiiifi = Module["dynCall_iiiifi"] = asm["dynCall_iiiifi"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore12RenderObject19isSVGResourceFilterEv","__ZNK7WebCore9RenderBox11marginRightEv","__ZNK7WebCore12RenderObject13isSVGTextPathEv","__ZNK7WebCore12RenderObject10isRubyTextEv","__ZNK7WebCore12RenderObject6isRubyEv","_strlen","__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv","__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv","__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv","__ZNK7WebCore20RenderBoxModelObject12paddingStartEv","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZNK7WebCore12RenderObject8isWidgetEv","__ZNK7WebCore12RenderObject11isTextFieldEv","__ZNK7WebCore14RenderReplaced10isSelectedEv","__ZNK7WebCore12RenderObject18isRenderFullScreenEv","__ZN7WebCore14RenderReplacedC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE","__ZNK7WebCore20RenderBoxModelObject11borderRightEv","__ZN7WebCore12RenderObject17updateFromElementEv","__ZNK7WebCore20RenderBoxModelObject9borderEndEv","__ZNK7WebCore12RenderObject9isSVGRootEv","__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv","__ZNK7WebCore14RenderReplaced10renderNameEv","__ZNK7WebCore20RenderBoxModelObject12borderBottomEv","__ZN7WebCore14RenderReplaced23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb","__ZNK7WebCore12RenderObject15isSVGInlineTextEv","__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv","__ZNK7WebCore12RenderObject7isMeterEv","__ZNK7WebCore12RenderObject14isSVGContainerEv","__ZNK7WebCore12RenderObject22isSVGResourceContainerEv","__ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE","__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv","__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv","__ZNK7WebCore12RenderObject7isQuoteEv","__ZNK7WebCore12RenderObject10isListItemEv","__ZNK7WebCore12RenderObject17isRenderMathMLRowEv","__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv","__ZNK7WebCore12RenderObject10isSVGImageEv","__ZNK7WebCore12RenderObject20isStretchingChildrenEv","__ZN7WebCore14RenderReplacedD0Ev","__ZNK7WebCore12RenderObject15isDetailsMarkerEv","__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv","__ZNK7WebCore14RenderReplaced41computeAspectRatioInformationForRenderBoxEPNS_9RenderBoxERNS_9FloatSizeERdRb","__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE","__ZNK7WebCore20RenderBoxModelObject12paddingRightEv","__ZN7WebCore14RenderReplacedC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEERKNS_10LayoutSizeE","__ZNK7WebCore12RenderObject16isRenderTableColEv","__ZNK7WebCore12RenderObject7isVideoEv","__ZN7WebCore14RenderReplaced15willBeDestroyedEv","__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv","__ZNK7WebCore12RenderObject13isCombineTextEv","__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE","__ZN7WebCore14RenderReplaced20intrinsicSizeChangedEv","__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv","__ZN7WebCore14RenderReplaced6layoutEv","__ZNK7WebCore12RenderObject22isSVGViewportContainerEv","__ZNK7WebCore9RenderBox19inlineBlockBaselineENS_17LineDirectionModeE","__ZN7WebCore13RenderElement28addChildIgnoringContinuationEPNS_12RenderObjectES2_","__ZNK7WebCore9RenderBox9marginTopEv","__ZNK7WebCore13RenderElement14firstChildSlowEv","__ZNK7WebCore14RenderReplaced29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2_","__ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE","__ZNK7WebCore14RenderReplaced28computeReplacedLogicalHeightEv","__ZNK7WebCore14RenderReplaced15canHaveChildrenEv","__ZNK7WebCore9RenderBox13requiresLayerEv","__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv","__ZNK7WebCore12RenderObject7isFrameEv","__ZNK7WebCore14RenderReplaced18canBeSelectionLeafEv","__ZN7WebCore14RenderReplaced11shouldPaintERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv","__ZNK7WebCore12RenderObject16isRenderSVGBlockEv","__ZN7WebCore14RenderReplaced5paintERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore14RenderReplaced23hasReplacedLogicalWidthEv","__ZNK7WebCore12RenderObject9isReplicaEv","__ZNK7WebCore12RenderObject19isFileUploadControlEv","__ZNK7WebCore9RenderBox14hasControlClipEv","__ZNK7WebCore12RenderObject7isMediaEv","__ZNK7WebCore12RenderObject10isSVGShapeEv","__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv","__ZNK7WebCore12RenderObject14isRenderButtonEv","__ZN7WebCore14RenderReplaced14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject8isSliderEv","__ZNK7WebCore9RenderBox11offsetWidthEv","__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv","__ZNK7WebCore12RenderObject10isRubyBaseEv","__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv","__ZNK7WebCore9RenderBox20collapsedMarginAfterEv","__ZNK7WebCore9RenderBox19contentLogicalWidthEv","__ZNK7WebCore12RenderObject8isCanvasEv","__ZNK7WebCore12RenderObject18isRenderMathMLMathEv","__ZNK7WebCore12RenderObject14isTableCaptionEv","__ZNK7WebCore14RenderReplaced13intrinsicSizeEv","__ZNK7WebCore12RenderObject10isMenuListEv","__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv","__ZNK7WebCore12RenderObject16isEmbeddedObjectEv","__ZNK7WebCore12RenderObject13isSliderThumbEv","__ZNK7WebCore9RenderBox17firstLineBaselineEv","__ZN7WebCore20RenderBoxModelObject20childBecameNonInlineEPNS_12RenderObjectE","__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv","__ZNK7WebCore12RenderObject13isTextControlEv","__ZNK7WebCore12RenderObject9isSVGTextEv","__ZNK7WebCore12RenderObject10isTextAreaEv","__ZNK7WebCore9RenderBox21availableLogicalWidthEv","__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv","__ZNK7WebCore12RenderObject10isProgressEv","__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv","__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv","__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE","__ZN7WebCore14RenderReplacedC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEERKNS_10LayoutSizeE","_memset","__ZNK7WebCore12RenderObject11isTableCellEv","__ZNK7WebCore14RenderReplaced32hasRelativeIntrinsicLogicalWidthEv","__ZNK7WebCore12RenderObject12isRenderGridEv","__ZNK7WebCore14RenderReplaced18localSelectionRectEb","__ZNK7WebCore20RenderBoxModelObject10paddingEndEv","__ZN7WebCore9RenderBox11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject9isListBoxEv","__ZNK7WebCore12RenderObject9isSVGPathEv","__ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE","__ZN7WebCore14RenderReplacedD2Ev","__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv","__ZNK7WebCore14RenderReplaced29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE","__ZN7WebCore14RenderReplaced17setSelectionStateENS_12RenderObject14SelectionStateE","__ZNK7WebCore14RenderReplaced18embeddedContentBoxEv","__ZNK7WebCore14RenderReplaced21minimumReplacedHeightEv","__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv","__ZNK7WebCore12RenderObject18isRenderMathMLRootEv","__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv","__ZN7WebCore14RenderReplaced29computePreferredLogicalWidthsEv","__ZNK7WebCore12RenderObject6lengthEv","__ZNK7WebCore12RenderObject5isWBREv","__ZNK7WebCore12RenderObject10isTableRowEv","__ZNK7WebCore12RenderObject13isFlexibleBoxEv","__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject10isFrameSetEv","__ZNK7WebCore20RenderBoxModelObject11borderAfterEv","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZNK7WebCore14RenderReplaced19replacedContentRectERKNS_10LayoutSizeE","__ZNK7WebCore12RenderObject10isFieldsetEv","__ZNK7WebCore12RenderObject11isSVGInlineEv","__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv","__ZNK7WebCore14RenderReplaced27computeReplacedLogicalWidthENS_22ShouldComputePreferredE","__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE","__ZNK7WebCore9RenderBox21isSelfCollapsingBlockEv","__ZNK7WebCore12RenderObject18isSVGForeignObjectEv","__ZNK7WebCore12RenderObject18isRenderFlowThreadEv","__ZNK7WebCore13RenderElement13lastChildSlowEv","__ZNK7WebCore12RenderObject9isRubyRunEv","__ZNK7WebCore9RenderBox12marginBottomEv","__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv","__ZNK7WebCore12RenderObject14isRenderIFrameEv","__ZNK7WebCore9RenderBox21collapsedMarginBeforeEv","__ZNK7WebCore14RenderReplaced24hasReplacedLogicalHeightEv","__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv","__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv","__ZNK7WebCore12RenderObject14isRenderRegionEv","__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv","__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv","__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv","__ZNK7WebCore17CachedImageClient18resourceClientTypeEv","__ZN7WebCore12RenderObject21needsBoundariesUpdateEv","__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv","__ZNK7WebCore20RenderBoxModelObject9borderTopEv","__ZNK7WebCore14RenderReplaced32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb","__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv","__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv","__ZNK7WebCore9RenderBox32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE","__ZN7WebCore14RenderReplaced13paintReplacedERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject7isImageEv","__ZNK7WebCore12RenderObject9isCounterEv","__ZNK7WebCore12RenderObject17isSVGGradientStopEv","__ZN7WebCore14RenderReplaced16positionForPointERKNS_11LayoutPointE","__ZN7WebCore9RenderBox33markForPaginationRelayoutIfNeededEv","__ZNK7WebCore20RenderBoxModelObject10paddingTopEv","__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv","__ZNK7WebCore9RenderBox18visualOverflowRectEv","__ZNK7WebCore20RenderBoxModelObject10borderLeftEv","__ZNK7WebCore9RenderBox17borderBoundingBoxEv","__ZNK7WebCore12RenderObject19virtualContinuationEv","__ZNK7WebCore12RenderObject12isListMarkerEv","__ZNK7WebCore12RenderObject7isEmptyEv","__ZNK7WebCore20RenderBoxModelObject11borderStartEv","__ZNK7WebCore12RenderObject7isTableEv","__ZN7WebCore9RenderBox14stopAutoscrollEv","_memcpy","__ZNK7WebCore12RenderObject13isRenderImageEv","__ZNK7WebCore12RenderObject14isTableSectionEv","__ZNK7WebCore9RenderBox10marginLeftEv","__ZNK7WebCore9RenderBox12offsetHeightEv","__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE"]

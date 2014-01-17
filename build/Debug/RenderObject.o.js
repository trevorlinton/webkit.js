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
H_BASE = parentModule["_malloc"](752 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 752;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore12RenderObjectD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
 var ctlz_i8 = allocate([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_DYNAMIC);
 var cttz_i8 = allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0], "i8", ALLOC_DYNAMIC);
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
  var cttz_i8=env.cttz_i8|0;
  var ctlz_i8=env.ctlz_i8|0;
  var __ZN7WebCore9HTMLNames6imgTagE=env.__ZN7WebCore9HTMLNames6imgTagE|0;
  var __ZN7WebCore9HTMLNames8tableTagE=env.__ZN7WebCore9HTMLNames8tableTagE|0;
  var __ZN7WebCore9HTMLNames5hrTagE=env.__ZN7WebCore9HTMLNames5hrTagE|0;
  var __ZN7WebCore9HTMLNames5thTagE=env.__ZN7WebCore9HTMLNames5thTagE|0;
  var __ZN7WebCore9HTMLNames4aTagE=env.__ZN7WebCore9HTMLNames4aTagE|0;
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZN7WebCore9HTMLNames5tdTagE=env.__ZN7WebCore9HTMLNames5tdTagE|0;
  var __ZN7WebCore9HTMLNames7fontTagE=env.__ZN7WebCore9HTMLNames7fontTagE|0;
  var __ZN7WebCore9HTMLNames8hrefAttrE=env.__ZN7WebCore9HTMLNames8hrefAttrE|0;
  var __ZN7WebCore9HTMLNames10marqueeTagE=env.__ZN7WebCore9HTMLNames10marqueeTagE|0;
  var __ZN7WebCore9HTMLNames9legendTagE=env.__ZN7WebCore9HTMLNames9legendTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore12RenderObjectE=(H_BASE+8)|0;
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
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var _floorf=env._floorf;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
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
 i12 = i12 | 0;
 var i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, d74 = +0, d75 = +0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i14 = i8;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i8 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
 i14 = i13 | 0;
 i15 = i13 + 8 | 0;
 i16 = i13 + 16 | 0;
 i17 = i13 + 24 | 0;
 i18 = i13 + 32 | 0;
 i19 = i13 + 48 | 0;
 i20 = i13 + 64 | 0;
 i21 = i13 + 80 | 0;
 i22 = i13 + 96 | 0;
 i23 = i22;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i25 = i24;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i27 = i26;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i29 = i28;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i31 = i30;
 i32 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i33 = i32;
 i34 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i35 = i34;
 i36 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i37 = i36;
 i38 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i39 = i38;
 i40 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i41 = i40;
 i42 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i43 = i42;
 i44 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i45 = i44;
 i46 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i47 = i46;
 i48 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i49 = i48;
 i50 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i51 = i50;
 i52 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i53 = i52;
 i54 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i55 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i56 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i57 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i58 = i57 | 0;
 if ((i7 | 0) == 2 | (i7 | 0) == 0) {
  i59 = i6 - i4 | 0;
  i60 = i5 - i3 | 0;
 } else {
  i59 = i5 - i3 | 0;
  i60 = i6 - i4 | 0;
 }
 if ((i59 | 0) == 0 | (i60 | 0) == 0) {
  STACKTOP = i13;
  return;
 }
 i61 = (i9 | 0) == 9 & (i59 | 0) < 3 ? 8 : i9;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i62 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i62 = HEAP32[i1 + 36 >> 2] | 0;
 }
 L12 : do {
  switch (i61 | 0) {
  case 5:
   {
    i63 = 4;
    i64 = 2;
    i65 = 26;
    break;
   }
  case 3:
   {
    i63 = 2;
    i64 = 4;
    i65 = 26;
    break;
   }
  case 4:
   {
    if ((i7 - 1 | 0) >>> 0 >= 2 >>> 0) {
     i65 = 35;
     break L12;
    }
    __ZNK7WebCore5Color4darkEv(i55, i8);
    i9 = i8;
    i66 = i55;
    HEAP32[i9 >> 2] = HEAP32[i66 >> 2];
    HEAP8[i9 + 4 | 0] = HEAP8[i66 + 4 | 0] | 0;
    i65 = 35;
    break;
   }
  case 6:
  case 7:
   {
    if ((i59 | 0) <= 0) {
     STACKTOP = i13;
     return;
    }
    i66 = __ZNK7WebCore15GraphicsContext15shouldAntialiasEv(i2) | 0;
    i9 = __ZNK7WebCore15GraphicsContext11strokeStyleEv(i2) | 0;
    __ZN7WebCore15GraphicsContext18setShouldAntialiasEb(i2, i12);
    __ZN7WebCore15GraphicsContext14setStrokeColorERKNS_5ColorENS_10ColorSpaceE(i2, i8, (HEAP32[(HEAP32[i62 + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
    __ZN7WebCore15GraphicsContext18setStrokeThicknessEf(i2, +(i59 | 0));
    __ZN7WebCore15GraphicsContext14setStrokeStyleENS_11StrokeStyleE(i2, (i61 | 0) == 7 ? 3 : 2);
    if ((i7 | 0) == 2 | (i7 | 0) == 0) {
     i67 = (i6 + i4 | 0) / 2 & -1;
     HEAP32[i14 >> 2] = i3;
     HEAP32[i14 + 4 >> 2] = i67;
     HEAP32[i15 >> 2] = i5;
     HEAP32[i15 + 4 >> 2] = i67;
     __ZN7WebCore15GraphicsContext8drawLineERKNS_8IntPointES3_(i2, i14, i15);
    } else if ((i7 | 0) == 1 | (i7 | 0) == 3) {
     i67 = (i5 + i3 | 0) / 2 & -1;
     HEAP32[i16 >> 2] = i67;
     HEAP32[i16 + 4 >> 2] = i4;
     HEAP32[i17 >> 2] = i67;
     HEAP32[i17 + 4 >> 2] = i6;
     __ZN7WebCore15GraphicsContext8drawLineERKNS_8IntPointES3_(i2, i16, i17);
    }
    __ZN7WebCore15GraphicsContext18setShouldAntialiasEb(i2, i66);
    __ZN7WebCore15GraphicsContext14setStrokeStyleENS_11StrokeStyleE(i2, i9);
    STACKTOP = i13;
    return;
   }
  case 9:
   {
    i9 = (i59 + 1 | 0) / 3 & -1;
    if ((i11 | i10 | 0) == 0) {
     i66 = __ZNK7WebCore15GraphicsContext11strokeStyleEv(i2) | 0;
     __ZN7WebCore15GraphicsContext14setStrokeStyleENS_11StrokeStyleE(i2, 0);
     __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i2, i8, (HEAP32[(HEAP32[i62 + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
     i67 = __ZNK7WebCore15GraphicsContext15shouldAntialiasEv(i2) | 0;
     __ZN7WebCore15GraphicsContext18setShouldAntialiasEb(i2, i12);
     do {
      if ((i7 | 0) == 0 | (i7 | 0) == 2) {
       HEAP32[i18 >> 2] = i3;
       HEAP32[i18 + 4 >> 2] = i4;
       HEAP32[i18 + 8 >> 2] = i60;
       HEAP32[i18 + 12 >> 2] = i9;
       __ZN7WebCore15GraphicsContext8drawRectERKNS_7IntRectE(i2, i18);
       HEAP32[i19 >> 2] = i3;
       HEAP32[i19 + 4 >> 2] = i6 - i9;
       HEAP32[i19 + 8 >> 2] = i60;
       HEAP32[i19 + 12 >> 2] = i9;
       __ZN7WebCore15GraphicsContext8drawRectERKNS_7IntRectE(i2, i19);
      } else if ((i7 | 0) == 3 | (i7 | 0) == 1) {
       if ((i60 | 0) <= 1) {
        break;
       }
       i68 = i4 + 1 | 0;
       i69 = i60 - 1 | 0;
       HEAP32[i20 >> 2] = i3;
       HEAP32[i20 + 4 >> 2] = i68;
       HEAP32[i20 + 8 >> 2] = i9;
       HEAP32[i20 + 12 >> 2] = i69;
       __ZN7WebCore15GraphicsContext8drawRectERKNS_7IntRectE(i2, i20);
       HEAP32[i21 >> 2] = i5 - i9;
       HEAP32[i21 + 4 >> 2] = i68;
       HEAP32[i21 + 8 >> 2] = i9;
       HEAP32[i21 + 12 >> 2] = i69;
       __ZN7WebCore15GraphicsContext8drawRectERKNS_7IntRectE(i2, i21);
      }
     } while (0);
     __ZN7WebCore15GraphicsContext18setShouldAntialiasEb(i2, i67);
     __ZN7WebCore15GraphicsContext14setStrokeStyleENS_11StrokeStyleE(i2, i66);
     STACKTOP = i13;
     return;
    }
    i69 = (((i10 | 0) > 0 ? 1 : -1) + i10 | 0) / 3 & -1;
    i68 = (((i11 | 0) > 0 ? 1 : -1) + i11 | 0) / 3 & -1;
    if ((i7 | 0) == 2) {
     i70 = (i10 << 1 | 1 | 0) / 3 & -1;
     i71 = (i11 << 1 | 1 | 0) / 3 & -1;
     i72 = i8;
     i73 = HEAP32[i72 + 4 >> 2] | 0;
     HEAP32[i30 >> 2] = HEAP32[i72 >> 2];
     HEAP32[i30 + 4 >> 2] = i73;
     __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i1, i2, ((i70 | 0) < 0 ? 0 : i70) + i3 | 0, i4, i5 - ((i71 | 0) < 0 ? 0 : i71) | 0, i9 + i4 | 0, 2, i31, 8, i69, i68, i12);
     i71 = (-i10 << 1 | 1 | 0) / 3 & -1;
     i70 = (-i11 << 1 | 1 | 0) / 3 & -1;
     i73 = HEAP32[i72 + 4 >> 2] | 0;
     HEAP32[i32 >> 2] = HEAP32[i72 >> 2];
     HEAP32[i32 + 4 >> 2] = i73;
     __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i1, i2, ((i71 | 0) < 0 ? 0 : i71) + i3 | 0, i6 - i9 | 0, i5 - ((i70 | 0) < 0 ? 0 : i70) | 0, i6, 2, i33, 8, i69, i68, i12);
     STACKTOP = i13;
     return;
    } else if ((i7 | 0) == 1) {
     i70 = (i10 << 1 | 1 | 0) / 3 & -1;
     i71 = (i11 << 1 | 1 | 0) / 3 & -1;
     i73 = i8;
     i72 = HEAP32[i73 + 4 >> 2] | 0;
     HEAP32[i34 >> 2] = HEAP32[i73 >> 2];
     HEAP32[i34 + 4 >> 2] = i72;
     __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i1, i2, i3, ((i70 | 0) < 0 ? 0 : i70) + i4 | 0, i9 + i3 | 0, i6 - ((i71 | 0) < 0 ? 0 : i71) | 0, 1, i35, 8, i69, i68, i12);
     i71 = (-i10 << 1 | 1 | 0) / 3 & -1;
     i70 = (-i11 << 1 | 1 | 0) / 3 & -1;
     i72 = HEAP32[i73 + 4 >> 2] | 0;
     HEAP32[i36 >> 2] = HEAP32[i73 >> 2];
     HEAP32[i36 + 4 >> 2] = i72;
     __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i1, i2, i5 - i9 | 0, ((i71 | 0) < 0 ? 0 : i71) + i4 | 0, i5, i6 - ((i70 | 0) < 0 ? 0 : i70) | 0, 1, i37, 8, i69, i68, i12);
     STACKTOP = i13;
     return;
    } else if ((i7 | 0) == 0) {
     i70 = (-i10 << 1 | 1 | 0) / 3 & -1;
     i71 = (-i11 << 1 | 1 | 0) / 3 & -1;
     i72 = i8;
     i73 = HEAP32[i72 + 4 >> 2] | 0;
     HEAP32[i22 >> 2] = HEAP32[i72 >> 2];
     HEAP32[i22 + 4 >> 2] = i73;
     __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i1, i2, ((i70 | 0) < 0 ? 0 : i70) + i3 | 0, i4, i5 - ((i71 | 0) < 0 ? 0 : i71) | 0, i9 + i4 | 0, 0, i23, 8, i69, i68, i12);
     i71 = (i10 << 1 | 1 | 0) / 3 & -1;
     i70 = (i11 << 1 | 1 | 0) / 3 & -1;
     i73 = HEAP32[i72 + 4 >> 2] | 0;
     HEAP32[i24 >> 2] = HEAP32[i72 >> 2];
     HEAP32[i24 + 4 >> 2] = i73;
     __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i1, i2, ((i71 | 0) < 0 ? 0 : i71) + i3 | 0, i6 - i9 | 0, i5 - ((i70 | 0) < 0 ? 0 : i70) | 0, i6, 0, i25, 8, i69, i68, i12);
     STACKTOP = i13;
     return;
    } else if ((i7 | 0) == 3) {
     i70 = (-i10 << 1 | 1 | 0) / 3 & -1;
     i71 = (-i11 << 1 | 1 | 0) / 3 & -1;
     i73 = i8;
     i72 = HEAP32[i73 + 4 >> 2] | 0;
     HEAP32[i26 >> 2] = HEAP32[i73 >> 2];
     HEAP32[i26 + 4 >> 2] = i72;
     __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i1, i2, i3, ((i70 | 0) < 0 ? 0 : i70) + i4 | 0, i9 + i3 | 0, i6 - ((i71 | 0) < 0 ? 0 : i71) | 0, 3, i27, 8, i69, i68, i12);
     i71 = (i10 << 1 | 1 | 0) / 3 & -1;
     i70 = (i11 << 1 | 1 | 0) / 3 & -1;
     i72 = HEAP32[i73 + 4 >> 2] | 0;
     HEAP32[i28 >> 2] = HEAP32[i73 >> 2];
     HEAP32[i28 + 4 >> 2] = i72;
     __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i1, i2, i5 - i9 | 0, ((i71 | 0) < 0 ? 0 : i71) + i4 | 0, i5, i6 - ((i70 | 0) < 0 ? 0 : i70) | 0, 3, i29, 8, i69, i68, i12);
     STACKTOP = i13;
     return;
    } else {
     STACKTOP = i13;
     return;
    }
    break;
   }
  case 2:
   {
    if (!((i7 | 0) == 3 | (i7 | 0) == 0)) {
     i65 = 35;
     break L12;
    }
    __ZNK7WebCore5Color4darkEv(i54, i8);
    i68 = i8;
    i69 = i54;
    HEAP32[i68 >> 2] = HEAP32[i69 >> 2];
    HEAP8[i68 + 4 | 0] = HEAP8[i69 + 4 | 0] | 0;
    i65 = 35;
    break;
   }
  case 8:
   {
    i65 = 35;
    break;
   }
  default:
   {
    STACKTOP = i13;
    return;
   }
  }
 } while (0);
 if ((i65 | 0) == 26) {
  i54 = (i10 | 0) > 0;
  i29 = i10 + 1 | 0;
  i28 = ((i54 ? i29 : i10 - 1 | 0) | 0) / 2 & -1;
  i27 = (i11 | 0) > 0;
  i26 = i11 + 1 | 0;
  i25 = ((i27 ? i26 : i11 - 1 | 0) | 0) / 2 & -1;
  if ((i7 | 0) == 0) {
   i24 = (i4 + 1 + i6 | 0) / 2 & -1;
   i23 = i8;
   i22 = HEAP32[i23 + 4 >> 2] | 0;
   HEAP32[i38 >> 2] = HEAP32[i23 >> 2];
   HEAP32[i38 + 4 >> 2] = i22;
   __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i1, i2, (i54 ? 0 : (i10 | 0) / -2 & -1) + i3 | 0, i4, i5 - (i27 ? 0 : (i11 | 0) / -2 & -1) | 0, i24, 0, i39, i63, i28, i25, i12);
   i39 = HEAP32[i23 + 4 >> 2] | 0;
   HEAP32[i40 >> 2] = HEAP32[i23 >> 2];
   HEAP32[i40 + 4 >> 2] = i39;
   __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i1, i2, ((i29 | 0) < 0 ? 0 : (i29 | 0) / 2 & -1) + i3 | 0, i24, i5 - ((i26 | 0) < 0 ? 0 : (i26 | 0) / 2 & -1) | 0, i6, 0, i41, i64, (i10 | 0) / 2 & -1, (i11 | 0) / 2 & -1, i12);
   STACKTOP = i13;
   return;
  } else if ((i7 | 0) == 3) {
   i41 = (i3 + 1 + i5 | 0) / 2 & -1;
   i24 = i8;
   i39 = HEAP32[i24 + 4 >> 2] | 0;
   HEAP32[i42 >> 2] = HEAP32[i24 >> 2];
   HEAP32[i42 + 4 >> 2] = i39;
   __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i1, i2, i3, (i54 ? 0 : (i10 | 0) / -2 & -1) + i4 | 0, i41, i6 - (i27 ? 0 : (i11 | 0) / -2 & -1) | 0, 3, i43, i63, i28, i25, i12);
   i43 = HEAP32[i24 + 4 >> 2] | 0;
   HEAP32[i44 >> 2] = HEAP32[i24 >> 2];
   HEAP32[i44 + 4 >> 2] = i43;
   __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i1, i2, i41, ((i29 | 0) < 0 ? 0 : (i29 | 0) / 2 & -1) + i4 | 0, i5, i6 - ((i26 | 0) < 0 ? 0 : (i26 | 0) / 2 & -1) | 0, 3, i45, i64, (i10 | 0) / 2 & -1, (i11 | 0) / 2 & -1, i12);
   STACKTOP = i13;
   return;
  } else if ((i7 | 0) == 2) {
   i45 = (i10 | 0) / 2 & -1;
   i26 = (i11 | 0) / 2 & -1;
   i29 = (i4 + 1 + i6 | 0) / 2 & -1;
   i41 = i8;
   i43 = HEAP32[i41 + 4 >> 2] | 0;
   HEAP32[i46 >> 2] = HEAP32[i41 >> 2];
   HEAP32[i46 + 4 >> 2] = i43;
   __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i1, i2, ((i10 | 0) < 0 ? 0 : i45) + i3 | 0, i4, i5 - ((i11 | 0) < 0 ? 0 : i26) | 0, i29, 2, i47, i64, i28, i25, i12);
   i47 = 1 - i10 | 0;
   i43 = 1 - i11 | 0;
   i46 = HEAP32[i41 + 4 >> 2] | 0;
   HEAP32[i48 >> 2] = HEAP32[i41 >> 2];
   HEAP32[i48 + 4 >> 2] = i46;
   __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i1, i2, ((i47 | 0) < 0 ? 0 : (i47 | 0) / 2 & -1) + i3 | 0, i29, i5 - ((i43 | 0) < 0 ? 0 : (i43 | 0) / 2 & -1) | 0, i6, 2, i49, i63, i45, i26, i12);
   STACKTOP = i13;
   return;
  } else if ((i7 | 0) == 1) {
   i26 = (i10 | 0) / 2 & -1;
   i45 = (i3 + 1 + i5 | 0) / 2 & -1;
   i49 = (i11 | 0) / 2 & -1;
   i43 = i8;
   i29 = HEAP32[i43 + 4 >> 2] | 0;
   HEAP32[i50 >> 2] = HEAP32[i43 >> 2];
   HEAP32[i50 + 4 >> 2] = i29;
   __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i1, i2, i3, ((i10 | 0) < 0 ? 0 : i26) + i4 | 0, i45, i6 - ((i11 | 0) < 0 ? 0 : i49) | 0, 1, i51, i64, i28, i25, i12);
   i25 = 1 - i10 | 0;
   i28 = 1 - i11 | 0;
   i64 = HEAP32[i43 + 4 >> 2] | 0;
   HEAP32[i52 >> 2] = HEAP32[i43 >> 2];
   HEAP32[i52 + 4 >> 2] = i64;
   __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i1, i2, i45, ((i25 | 0) < 0 ? 0 : (i25 | 0) / 2 & -1) + i4 | 0, i5, i6 - ((i28 | 0) < 0 ? 0 : (i28 | 0) / 2 & -1) | 0, 1, i53, i63, i26, i49, i12);
   STACKTOP = i13;
   return;
  } else {
   STACKTOP = i13;
   return;
  }
 } else if ((i65 | 0) == 35) {
  i65 = __ZNK7WebCore15GraphicsContext11strokeStyleEv(i2) | 0;
  __ZN7WebCore15GraphicsContext14setStrokeStyleENS_11StrokeStyleE(i2, 0);
  __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i2, i8, (HEAP32[(HEAP32[i62 + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
  if ((i11 | i10 | 0) == 0) {
   i62 = __ZNK7WebCore15GraphicsContext15shouldAntialiasEv(i2) | 0;
   __ZN7WebCore15GraphicsContext18setShouldAntialiasEb(i2, i12);
   HEAP32[i56 >> 2] = i3;
   HEAP32[i56 + 4 >> 2] = i4;
   HEAP32[i56 + 8 >> 2] = i5 - i3;
   HEAP32[i56 + 12 >> 2] = i6 - i4;
   __ZN7WebCore15GraphicsContext8drawRectERKNS_7IntRectE(i2, i56);
   __ZN7WebCore15GraphicsContext18setShouldAntialiasEb(i2, i62);
   __ZN7WebCore15GraphicsContext14setStrokeStyleENS_11StrokeStyleE(i2, i65);
   STACKTOP = i13;
   return;
  }
  i62 = i57;
  HEAPF32[i57 >> 2] = +0;
  HEAPF32[i62 + 4 >> 2] = +0;
  i56 = i57 + 8 | 0;
  HEAPF32[i56 >> 2] = +0;
  HEAPF32[i56 + 4 >> 2] = +0;
  i56 = i57 + 16 | 0;
  HEAPF32[i56 >> 2] = +0;
  HEAPF32[i56 + 4 >> 2] = +0;
  i56 = i57 + 24 | 0;
  HEAPF32[i56 >> 2] = +0;
  HEAPF32[i56 + 4 >> 2] = +0;
  if ((i7 | 0) == 2) {
   i56 = (HEAPF32[tempDoublePtr >> 2] = +(((i10 | 0) < 0 ? 0 : i10) + i3 | 0), HEAP32[tempDoublePtr >> 2] | 0);
   i8 = 0;
   d74 = +(+(i4 | 0));
   HEAP32[i58 >> 2] = i56 | i8;
   HEAPF32[i58 + 4 >> 2] = d74;
   i8 = i57 + 8 | 0;
   i56 = -i10 | 0;
   i49 = (HEAPF32[tempDoublePtr >> 2] = +(((i56 | 0) < 0 ? 0 : i56) + i3 | 0), HEAP32[tempDoublePtr >> 2] | 0);
   i56 = 0;
   d75 = +(+(i6 | 0));
   HEAP32[i8 >> 2] = i49 | i56;
   HEAPF32[i8 + 4 >> 2] = d75;
   i8 = i57 + 16 | 0;
   i56 = -i11 | 0;
   HEAPF32[i8 >> 2] = +(i5 - ((i56 | 0) < 0 ? 0 : i56) | 0);
   HEAPF32[i8 + 4 >> 2] = d75;
   i8 = i57 + 24 | 0;
   HEAPF32[i8 >> 2] = +(i5 - ((i11 | 0) < 0 ? 0 : i11) | 0);
   HEAPF32[i8 + 4 >> 2] = d74;
  } else if ((i7 | 0) == 3) {
   i8 = -i10 | 0;
   i56 = (HEAPF32[tempDoublePtr >> 2] = +(i3 | 0), HEAP32[tempDoublePtr >> 2] | 0);
   i49 = i56;
   i56 = 0;
   d74 = +(+(((i8 | 0) < 0 ? 0 : i8) + i4 | 0));
   HEAP32[i58 >> 2] = i49;
   HEAPF32[i58 + 4 >> 2] = d74;
   i8 = i57 + 8 | 0;
   i56 = -i11 | 0;
   d74 = +(+(i6 - ((i56 | 0) < 0 ? 0 : i56) | 0));
   HEAP32[i8 >> 2] = i49;
   HEAPF32[i8 + 4 >> 2] = d74;
   i8 = i57 + 16 | 0;
   i49 = (HEAPF32[tempDoublePtr >> 2] = +(i5 | 0), HEAP32[tempDoublePtr >> 2] | 0);
   i56 = i49;
   i49 = 0;
   d74 = +(+(i6 - ((i11 | 0) < 0 ? 0 : i11) | 0));
   HEAP32[i8 >> 2] = i56;
   HEAPF32[i8 + 4 >> 2] = d74;
   i8 = i57 + 24 | 0;
   d74 = +(+(((i10 | 0) < 0 ? 0 : i10) + i4 | 0));
   HEAP32[i8 >> 2] = i56;
   HEAPF32[i8 + 4 >> 2] = d74;
  } else if ((i7 | 0) == 1) {
   i8 = (HEAPF32[tempDoublePtr >> 2] = +(i3 | 0), HEAP32[tempDoublePtr >> 2] | 0);
   i56 = i8;
   i8 = 0;
   d74 = +(+(((i10 | 0) < 0 ? 0 : i10) + i4 | 0));
   HEAP32[i58 >> 2] = i56;
   HEAPF32[i58 + 4 >> 2] = d74;
   i8 = i57 + 8 | 0;
   d74 = +(+(i6 - ((i11 | 0) < 0 ? 0 : i11) | 0));
   HEAP32[i8 >> 2] = i56;
   HEAPF32[i8 + 4 >> 2] = d74;
   i8 = i57 + 16 | 0;
   i56 = -i11 | 0;
   i49 = (HEAPF32[tempDoublePtr >> 2] = +(i5 | 0), HEAP32[tempDoublePtr >> 2] | 0);
   i26 = i49;
   i49 = 0;
   d74 = +(+(i6 - ((i56 | 0) < 0 ? 0 : i56) | 0));
   HEAP32[i8 >> 2] = i26;
   HEAPF32[i8 + 4 >> 2] = d74;
   i8 = i57 + 24 | 0;
   i56 = -i10 | 0;
   d74 = +(+(((i56 | 0) < 0 ? 0 : i56) + i4 | 0));
   HEAP32[i8 >> 2] = i26;
   HEAPF32[i8 + 4 >> 2] = d74;
  } else if ((i7 | 0) == 0) {
   i7 = -i10 | 0;
   i8 = (HEAPF32[tempDoublePtr >> 2] = +(((i7 | 0) < 0 ? 0 : i7) + i3 | 0), HEAP32[tempDoublePtr >> 2] | 0);
   i7 = 0;
   d74 = +(+(i4 | 0));
   HEAP32[i58 >> 2] = i8 | i7;
   HEAPF32[i58 + 4 >> 2] = d74;
   i58 = i57 + 8 | 0;
   i7 = (HEAPF32[tempDoublePtr >> 2] = +(((i10 | 0) < 0 ? 0 : i10) + i3 | 0), HEAP32[tempDoublePtr >> 2] | 0);
   i3 = 0;
   d75 = +(+(i6 | 0));
   HEAP32[i58 >> 2] = i7 | i3;
   HEAPF32[i58 + 4 >> 2] = d75;
   i58 = i57 + 16 | 0;
   HEAPF32[i58 >> 2] = +(i5 - ((i11 | 0) < 0 ? 0 : i11) | 0);
   HEAPF32[i58 + 4 >> 2] = d75;
   i58 = i57 + 24 | 0;
   i57 = -i11 | 0;
   HEAPF32[i58 >> 2] = +(i5 - ((i57 | 0) < 0 ? 0 : i57) | 0);
   HEAPF32[i58 + 4 >> 2] = d74;
  }
  __ZN7WebCore15GraphicsContext17drawConvexPolygonEjPKNS_10FloatPointEb(i2, 4, i62, i12);
  __ZN7WebCore15GraphicsContext14setStrokeStyleENS_11StrokeStyleE(i2, i65);
  STACKTOP = i13;
  return;
 }
}
function __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 72 | 0;
 i15 = i5 + 88 | 0;
 i16 = i5 + 104 | 0;
 i17 = i5 + 120 | 0;
 i18 = i5 + 136 | 0;
 i19 = i5 + 152 | 0;
 i20 = i2 + 20 | 0;
 i21 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i21 & 128 | 0) == 0) {
   i22 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i22 | 0) == 0) {
    i23 = i21;
    i24 = 6;
    break;
   }
   if ((HEAP32[i22 + 12 >> 2] & 1048580 | 0) != 1048580) {
    i23 = i21;
    i24 = 6;
    break;
   }
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 232 >> 2] & 255](i22) | 0) != 0) {
    break;
   }
   i23 = HEAP32[i20 >> 2] | 0;
   i24 = 6;
  } else {
   i23 = i21;
   i24 = 6;
  }
 } while (0);
 do {
  if ((i24 | 0) == 6) {
   if ((i23 & 128 | 0) != 0) {
    break;
   }
   i21 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   i20 = i21 + 8 | 0;
   do {
    if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i21, 0, 1) | 0)) {
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
     i22 = i11 | 0;
     HEAP32[i22 >> 2] = i21;
     HEAP32[i12 >> 2] = i3;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i13, i11, i12);
     i25 = HEAP32[i22 >> 2] | 0;
     do {
      if ((i25 | 0) != 0) {
       i22 = i25 + 8 | 0;
       i26 = i22 | 0;
       i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
       HEAP32[i26 >> 2] = i27;
       if ((i27 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
      }
     } while (0);
     __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i14, i13, 0);
     i25 = i14 | 0;
     if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(HEAP32[i25 >> 2] | 0, 0, 1) | 0) {
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i14, i4);
      i22 = HEAP32[i25 >> 2] | 0;
      do {
       if ((i22 | 0) != 0) {
        i27 = i22 + 8 | 0;
        i26 = i27 | 0;
        i28 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
        HEAP32[i26 >> 2] = i28;
        if ((i28 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
       }
      } while (0);
      i22 = HEAP32[i13 >> 2] | 0;
      if ((i22 | 0) == 0) {
       STACKTOP = i5;
       return;
      }
      i27 = i22 + 8 | 0;
      i22 = i27 | 0;
      i28 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
      HEAP32[i22 >> 2] = i28;
      if ((i28 | 0) >= 1) {
       STACKTOP = i5;
       return;
      }
      if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
       STACKTOP = i5;
       return;
      }
      __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
      STACKTOP = i5;
      return;
     }
     __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i15, i13, 0);
     i27 = i15 | 0;
     i28 = HEAP32[i27 >> 2] | 0;
     HEAP32[i27 >> 2] = 0;
     i22 = HEAP32[i25 >> 2] | 0;
     HEAP32[i25 >> 2] = i28;
     do {
      if ((i22 | 0) != 0) {
       i28 = i22 + 8 | 0;
       i26 = i28 | 0;
       i29 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
       HEAP32[i26 >> 2] = i29;
       if ((i29 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
      }
     } while (0);
     HEAP32[i14 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
     i22 = HEAP32[i15 + 8 >> 2] | 0;
     i28 = i14 + 8 | 0;
     i29 = i28;
     i26 = HEAP32[i29 >> 2] & -8 | i22 & 7;
     HEAP32[i29 >> 2] = i26;
     HEAP8[i28] = i26 & 255 & -9 | i22 & 8;
     i22 = HEAP32[i27 >> 2] | 0;
     do {
      if ((i22 | 0) != 0) {
       i26 = i22 + 8 | 0;
       i28 = i26 | 0;
       i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
       HEAP32[i28 >> 2] = i29;
       if ((i29 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
      }
     } while (0);
     if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(HEAP32[i25 >> 2] | 0, 0, 1) | 0)) {
      i22 = HEAP32[i25 >> 2] | 0;
      do {
       if ((i22 | 0) != 0) {
        i27 = i22 + 8 | 0;
        i26 = i27 | 0;
        i29 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
        HEAP32[i26 >> 2] = i29;
        if ((i29 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
       }
      } while (0);
      i22 = HEAP32[i13 >> 2] | 0;
      if ((i22 | 0) == 0) {
       break;
      }
      i27 = i22 + 8 | 0;
      i22 = i27 | 0;
      i29 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
      HEAP32[i22 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
      break;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i14, i4);
     i27 = HEAP32[i25 >> 2] | 0;
     do {
      if ((i27 | 0) != 0) {
       i29 = i27 + 8 | 0;
       i22 = i29 | 0;
       i26 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       HEAP32[i22 >> 2] = i26;
       if ((i26 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
      }
     } while (0);
     i27 = HEAP32[i13 >> 2] | 0;
     if ((i27 | 0) == 0) {
      STACKTOP = i5;
      return;
     }
     i25 = i27 + 8 | 0;
     i27 = i25 | 0;
     i29 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     HEAP32[i27 >> 2] = i29;
     if ((i29 | 0) >= 1) {
      STACKTOP = i5;
      return;
     }
     if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
      STACKTOP = i5;
      return;
     }
     __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
     STACKTOP = i5;
     return;
    }
   } while (0);
   HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   i25 = i8 | 0;
   HEAP32[i25 >> 2] = i21;
   HEAP32[i9 >> 2] = i3;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i16, i8, i9);
   i29 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i25 = i29 + 8 | 0;
     i27 = i25 | 0;
     i26 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     HEAP32[i27 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i16, i4);
   i29 = HEAP32[i16 >> 2] | 0;
   if ((i29 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i21 = i29 + 8 | 0;
   i29 = i21 | 0;
   i20 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
   HEAP32[i29 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    STACKTOP = i5;
    return;
   }
   if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
    STACKTOP = i5;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
   STACKTOP = i5;
   return;
  }
 } while (0);
 i16 = HEAP32[i2 + 8 >> 2] | 0;
 L88 : do {
  if ((i16 | 0) != 0) {
   i4 = i2;
   i9 = i16;
   L89 : while (1) {
    i8 = i9 | 0;
    i3 = i4;
    L91 : while (1) {
     i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] & 255](i3) | 0;
     L93 : do {
      if ((i13 | 0) == 0) {
       if ((i3 | 0) == (i8 | 0)) {
        i30 = i4;
        break L91;
       } else {
        i31 = i3;
       }
       while (1) {
        i14 = HEAP32[i31 + 16 >> 2] | 0;
        if ((i14 | 0) != 0) {
         i32 = i14;
         break L93;
        }
        i14 = HEAP32[i31 + 8 >> 2] | 0;
        if ((i14 | 0) == 0 | (i14 | 0) == (i9 | 0)) {
         i30 = i4;
         break L91;
        } else {
         i31 = i14 | 0;
        }
       }
      } else {
       i32 = i13;
      }
     } while (0);
     i13 = i32 + 20 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i14 & 128 | 0) == 0) {
       i15 = HEAP32[i32 + 4 >> 2] | 0;
       if ((i15 | 0) == 0) {
        i33 = i14;
        break;
       }
       if ((HEAP32[i15 + 12 >> 2] & 1048580 | 0) != 1048580) {
        i33 = i14;
        break;
       }
       if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 232 >> 2] & 255](i15) | 0) != 0) {
        i3 = i32;
        continue L91;
       }
       i33 = HEAP32[i13 >> 2] | 0;
      } else {
       i33 = i14;
      }
     } while (0);
     if ((i33 & 128 | 0) != 0) {
      i3 = i32;
      continue;
     }
     i34 = HEAP32[i32 + 4 >> 2] | 0;
     if ((i34 | 0) == 0) {
      i3 = i32;
     } else {
      i24 = 68;
      break L89;
     }
    }
    L106 : while (1) {
     i3 = HEAP32[i30 + 12 >> 2] | 0;
     if ((i3 | 0) == 0) {
      i35 = HEAP32[i30 + 8 >> 2] | 0;
     } else {
      i14 = i3;
      while (1) {
       i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] & 255](i14) | 0;
       if ((i3 | 0) == 0) {
        i35 = i14;
        break;
       } else {
        i14 = i3;
       }
      }
     }
     if ((i35 | 0) == 0 | (i35 | 0) == (i8 | 0)) {
      break;
     }
     i14 = i35 + 20 | 0;
     i3 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i3 & 128 | 0) == 0) {
       i13 = HEAP32[i35 + 4 >> 2] | 0;
       if ((i13 | 0) == 0) {
        i36 = i3;
        break;
       }
       if ((HEAP32[i13 + 12 >> 2] & 1048580 | 0) != 1048580) {
        i36 = i3;
        break;
       }
       if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 232 >> 2] & 255](i13) | 0) != 0) {
        i30 = i35;
        continue L106;
       }
       i36 = HEAP32[i14 >> 2] | 0;
      } else {
       i36 = i3;
      }
     } while (0);
     if ((i36 & 128 | 0) != 0) {
      i30 = i35;
      continue;
     }
     i37 = HEAP32[i35 + 4 >> 2] | 0;
     if ((i37 | 0) == 0) {
      i30 = i35;
     } else {
      i24 = 89;
      break L89;
     }
    }
    i3 = i9 + 20 | 0;
    i14 = HEAP32[i3 >> 2] | 0;
    do {
     if ((i14 & 128 | 0) == 0) {
      i13 = HEAP32[i9 + 4 >> 2] | 0;
      if ((i13 | 0) == 0) {
       i38 = i14;
       i24 = 104;
       break;
      }
      if ((HEAP32[i13 + 12 >> 2] & 1048580 | 0) != 1048580) {
       i38 = i14;
       i24 = 104;
       break;
      }
      if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 232 >> 2] & 255](i13) | 0) != 0) {
       break;
      }
      i38 = HEAP32[i3 >> 2] | 0;
      i24 = 104;
     } else {
      i38 = i14;
      i24 = 104;
     }
    } while (0);
    do {
     if ((i24 | 0) == 104) {
      i24 = 0;
      if ((i38 & 128 | 0) != 0) {
       break;
      }
      i39 = HEAP32[i9 + 4 >> 2] | 0;
      if ((i39 | 0) != 0) {
       i24 = 107;
       break L89;
      }
     }
    } while (0);
    i14 = HEAP32[i9 + 8 >> 2] | 0;
    if ((i14 | 0) == 0) {
     break L88;
    } else {
     i4 = i8;
     i9 = i14;
    }
   }
   if ((i24 | 0) == 89) {
    do {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i37 >> 2] | 0) + 132 >> 2] & 255](i37) | 0) {
      __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i18, i37);
     } else {
      i9 = i6 | 0;
      HEAP32[i9 >> 2] = i37;
      i4 = i37 + 8 | 0;
      HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i18, i6, 2);
      i4 = HEAP32[i9 >> 2] | 0;
      if ((i4 | 0) == 0) {
       break;
      }
      i9 = i4 + 8 | 0;
      i4 = i9 | 0;
      i14 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
      HEAP32[i4 >> 2] = i14;
      if ((i14 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i18, 1);
    i9 = HEAP32[i18 >> 2] | 0;
    if ((i9 | 0) == 0) {
     STACKTOP = i5;
     return;
    }
    i14 = i9 + 8 | 0;
    i9 = i14 | 0;
    i4 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    HEAP32[i9 >> 2] = i4;
    if ((i4 | 0) >= 1) {
     STACKTOP = i5;
     return;
    }
    if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
     STACKTOP = i5;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    STACKTOP = i5;
    return;
   } else if ((i24 | 0) == 68) {
    do {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i34 >> 2] | 0) + 132 >> 2] & 255](i34) | 0) {
      __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i17, i34);
     } else {
      i14 = i7 | 0;
      HEAP32[i14 >> 2] = i34;
      i4 = i34 + 8 | 0;
      HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i17, i7, 1);
      i4 = HEAP32[i14 >> 2] | 0;
      if ((i4 | 0) == 0) {
       break;
      }
      i14 = i4 + 8 | 0;
      i4 = i14 | 0;
      i9 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
      HEAP32[i4 >> 2] = i9;
      if ((i9 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i17, 1);
    i14 = HEAP32[i17 >> 2] | 0;
    if ((i14 | 0) == 0) {
     STACKTOP = i5;
     return;
    }
    i9 = i14 + 8 | 0;
    i14 = i9 | 0;
    i4 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
    HEAP32[i14 >> 2] = i4;
    if ((i4 | 0) >= 1) {
     STACKTOP = i5;
     return;
    }
    if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
     STACKTOP = i5;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    STACKTOP = i5;
    return;
   } else if ((i24 | 0) == 107) {
    do {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i39 >> 2] | 0) + 132 >> 2] & 255](i39) | 0) {
      __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i19, i39);
     } else {
      i9 = i10 | 0;
      HEAP32[i9 >> 2] = i39;
      i4 = i39 + 8 | 0;
      HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i19, i10, 1);
      i4 = HEAP32[i9 >> 2] | 0;
      if ((i4 | 0) == 0) {
       break;
      }
      i9 = i4 + 8 | 0;
      i4 = i9 | 0;
      i14 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
      HEAP32[i4 >> 2] = i14;
      if ((i14 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i19, 1);
    i9 = HEAP32[i19 >> 2] | 0;
    if ((i9 | 0) == 0) {
     STACKTOP = i5;
     return;
    }
    i14 = i9 + 8 | 0;
    i9 = i14 | 0;
    i4 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    HEAP32[i9 >> 2] = i4;
    if ((i4 | 0) >= 1) {
     STACKTOP = i5;
     return;
    }
    if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
     STACKTOP = i5;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 i19 = i1 + 8 | 0;
 i10 = i19;
 i39 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i39 & -8;
 HEAP8[i19] = i39 & 255 & -16;
 HEAP32[i1 + 12 >> 2] = 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, d66 = +0, i67 = 0, d68 = +0, d69 = +0, i70 = 0, d71 = +0, i72 = 0, d73 = +0, i74 = 0, d75 = +0, d76 = +0, i77 = 0, d78 = +0, d79 = +0, i80 = 0, d81 = +0, i82 = 0, d83 = +0, i84 = 0, i85 = 0, i86 = 0, i87 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i4 = i3 | 0;
 i5 = i3 + 64 | 0;
 i6 = i3 + 80 | 0;
 i7 = i3 + 120 | 0;
 i8 = i1 + 20 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 & 768 | 0) == 256) {
  i10 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i10 = HEAP32[i1 + 36 >> 2] | 0;
 }
 if ((HEAP32[i10 + 40 >> 2] & 6144 | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((i9 & 512 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i4;
 _memset(i4 | 0, 0, 53) | 0;
 HEAP8[i4 + 53 | 0] = 1;
 HEAP8[i4 + 54 | 0] = 0;
 HEAP32[i4 + 56 >> 2] = 0;
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 588 >> 2] & 7](i1, 0, i4, 4, 0);
 __ZN7WebCore14TransformState7flattenEPb(i4, 0);
 d11 = +HEAPF32[i9 >> 2];
 d12 = +HEAPF32[i9 + 4 >> 2];
 i9 = HEAP32[i4 + 40 >> 2] | 0;
 if ((i9 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i9);
 }
 if ((HEAP32[i8 >> 2] & 768 | 0) == 256) {
  i13 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i13 = HEAP32[i1 + 36 >> 2] | 0;
 }
 __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEEC2ERKS4_(i5, (HEAP32[i13 + 20 >> 2] | 0) + 44 | 0);
 i13 = i5 + 8 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 i9 = i5 | 0;
 do {
  if ((i8 | 0) == 0) {
   i14 = 102;
  } else {
   i4 = HEAP32[i9 >> 2] | 0;
   i10 = i6 | 0;
   i15 = i6 + 4 | 0;
   i16 = i15;
   i17 = i15 | 0;
   i18 = i6 + 12 | 0;
   i19 = i18;
   i20 = i6 + 20 | 0;
   i21 = i20;
   i22 = i6 + 28 | 0;
   i23 = i22;
   i24 = i6 + 36 | 0;
   i25 = i1 + 52 | 0;
   i26 = i1 + 56 | 0;
   i27 = i7;
   i28 = i7 + 16 | 0;
   i29 = i6 + 10 | 0;
   i30 = i15 | 0;
   i31 = i6 + 26 | 0;
   i32 = i20 | 0;
   i33 = i6 + 18 | 0;
   i34 = i18 | 0;
   i35 = i6 + 34 | 0;
   i36 = i22 | 0;
   i37 = i7 | 0;
   i38 = i7 + 4 | 0;
   i39 = i7 + 8 | 0;
   i40 = i7 + 12 | 0;
   i41 = i7 + 36 | 0;
   i42 = i7 + 20 | 0;
   i43 = i42;
   i44 = i1;
   i45 = i7 + 32 | 0;
   i46 = i7 + 28 | 0;
   i47 = i2 + 8 | 0;
   i48 = i2 + 4 | 0;
   i49 = i2 | 0;
   i50 = i7;
   i51 = i6 + 33 | 0;
   i52 = i6 + 25 | 0;
   i53 = i6 + 17 | 0;
   i54 = i6 + 9 | 0;
   i55 = i6 + 4 | 0;
   i56 = i20;
   i57 = i15;
   i15 = i22;
   i58 = i18;
   i59 = 0;
   while (1) {
    if (i8 >>> 0 <= i59 >>> 0) {
     i14 = 14;
     break;
    }
    i60 = HEAP32[i4 + (i59 * 40 & -1) >> 2] | 0;
    HEAP32[i10 >> 2] = i60;
    if ((i60 | 0) != 0) {
     i61 = i60 | 0;
     HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 2;
    }
    i61 = i4 + (i59 * 40 & -1) + 4 | 0;
    i60 = HEAP32[i61 >> 2] | 0;
    i62 = HEAP32[i61 + 4 >> 2] | 0;
    HEAP32[i16 >> 2] = i60;
    HEAP32[i16 + 4 >> 2] = i62;
    if ((i60 & 0 | 0) == 0 & (i62 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i17);
    }
    i62 = i4 + (i59 * 40 & -1) + 12 | 0;
    i60 = HEAP32[i62 >> 2] | 0;
    i61 = HEAP32[i62 + 4 >> 2] | 0;
    HEAP32[i19 >> 2] = i60;
    HEAP32[i19 + 4 >> 2] = i61;
    if ((i60 & 0 | 0) == 0 & (i61 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i18);
    }
    i61 = i4 + (i59 * 40 & -1) + 20 | 0;
    i60 = HEAP32[i61 >> 2] | 0;
    i62 = HEAP32[i61 + 4 >> 2] | 0;
    HEAP32[i21 >> 2] = i60;
    HEAP32[i21 + 4 >> 2] = i62;
    if ((i60 & 0 | 0) == 0 & (i62 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i20);
    }
    i62 = i4 + (i59 * 40 & -1) + 28 | 0;
    i60 = HEAP32[i62 >> 2] | 0;
    i61 = HEAP32[i62 + 4 >> 2] | 0;
    HEAP32[i23 >> 2] = i60;
    HEAP32[i23 + 4 >> 2] = i61;
    if ((i60 & 0 | 0) == 0 & (i61 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i22);
    }
    HEAP32[i24 >> 2] = HEAP32[i4 + (i59 * 40 & -1) + 36 >> 2];
    i61 = HEAP32[i25 >> 2] | 0;
    i60 = HEAP32[i26 >> 2] | 0;
    _memset(i27 | 0, 0, 36) | 0;
    i62 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i62 | 0) == 0) {
      HEAP32[i28 >> 2] = i62;
     } else {
      i63 = i62 | 0;
      HEAP32[i63 >> 2] = (HEAP32[i63 >> 2] | 0) + 2;
      i63 = HEAP32[i28 >> 2] | 0;
      HEAP32[i28 >> 2] = i62;
      if ((i63 | 0) == 0) {
       break;
      }
      i64 = i63 | 0;
      i65 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
      if ((i65 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i63);
       break;
      } else {
       HEAP32[i64 >> 2] = i65;
       break;
      }
     }
    } while (0);
    i62 = (HEAP8[i29] & 1) == 0;
    if (i62) {
     i65 = HEAP32[i30 >> 2] | 0;
     d66 = +(i65 | 0);
     i67 = i65;
     d68 = (HEAP32[tempDoublePtr >> 2] = i65, +HEAPF32[tempDoublePtr >> 2]);
    } else {
     d69 = +HEAPF32[i57 >> 2];
     d66 = d69;
     i67 = (HEAPF32[tempDoublePtr >> 2] = d69, HEAP32[tempDoublePtr >> 2] | 0);
     d68 = d69;
    }
    do {
     if (d66 < +2147483647) {
      if (d66 <= +-2147483648) {
       i70 = -2147483648;
       break;
      }
      i70 = ~~d66;
     } else {
      i70 = 2147483647;
     }
    } while (0);
    i65 = (HEAP8[i31] & 1) == 0;
    if (i65) {
     i64 = HEAP32[i32 >> 2] | 0;
     d71 = +(i64 | 0);
     i72 = i64;
     d73 = (HEAP32[tempDoublePtr >> 2] = i64, +HEAPF32[tempDoublePtr >> 2]);
    } else {
     d69 = +HEAPF32[i56 >> 2];
     d71 = d69;
     i72 = (HEAPF32[tempDoublePtr >> 2] = d69, HEAP32[tempDoublePtr >> 2] | 0);
     d73 = d69;
    }
    do {
     if (d71 < +2147483647) {
      if (d71 <= +-2147483648) {
       i74 = -2147483648;
       break;
      }
      i74 = ~~d71;
     } else {
      i74 = 2147483647;
     }
    } while (0);
    if (i62) {
     d75 = +(i67 | 0);
    } else {
     d75 = d68;
    }
    if ((HEAP8[i33] & 1) == 0) {
     d76 = +(HEAP32[i34 >> 2] | 0);
    } else {
     d76 = +HEAPF32[i58 >> 2];
    }
    d69 = +(i61 | 0) - d75 - d76;
    do {
     if (d69 < +2147483647) {
      if (d69 <= +-2147483648) {
       i77 = -2147483648;
       break;
      }
      i77 = ~~d69;
     } else {
      i77 = 2147483647;
     }
    } while (0);
    if (i65) {
     d78 = +(i72 | 0);
    } else {
     d78 = d73;
    }
    if ((HEAP8[i35] & 1) == 0) {
     d79 = +(HEAP32[i36 >> 2] | 0);
    } else {
     d79 = +HEAPF32[i15 >> 2];
    }
    d69 = +(i60 | 0) - d78 - d79;
    do {
     if (d69 < +2147483647) {
      if (d69 <= +-2147483648) {
       i80 = -2147483648;
       break;
      }
      i80 = ~~d69;
     } else {
      i80 = 2147483647;
     }
    } while (0);
    HEAP32[i37 >> 2] = i70;
    HEAP32[i38 >> 2] = i74;
    HEAP32[i39 >> 2] = i77;
    HEAP32[i40 >> 2] = i80;
    HEAP32[i41 >> 2] = HEAP32[i24 >> 2];
    HEAP32[i43 >> 2] = HEAP32[i27 >> 2];
    HEAP32[i43 + 4 >> 2] = HEAP32[i27 + 4 >> 2];
    HEAP32[i43 + 8 >> 2] = HEAP32[i27 + 8 >> 2];
    HEAP32[i43 + 12 >> 2] = HEAP32[i27 + 12 >> 2];
    FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i44 >> 2] | 0) + 512 >> 2] & 15](i1, 0, i42, 0);
    if ((HEAP32[i45 >> 2] | 0) < 0) {
     HEAP32[i45 >> 2] = 0;
     HEAP32[i46 >> 2] = 0;
    }
    if ((HEAP8[i29] & 1) == 0) {
     d81 = +(HEAP32[i30 >> 2] | 0);
    } else {
     d81 = +HEAPF32[i57 >> 2];
    }
    d69 = d11 + d81;
    do {
     if (d69 < +2147483647) {
      if (d69 <= +-2147483648) {
       i82 = -2147483648;
       break;
      }
      i82 = ~~d69;
     } else {
      i82 = 2147483647;
     }
    } while (0);
    HEAP32[i37 >> 2] = i82;
    if ((HEAP8[i31] & 1) == 0) {
     d83 = +(HEAP32[i32 >> 2] | 0);
    } else {
     d83 = +HEAPF32[i56 >> 2];
    }
    d69 = d12 + d83;
    do {
     if (d69 < +2147483647) {
      if (d69 <= +-2147483648) {
       i84 = -2147483648;
       break;
      }
      i84 = ~~d69;
     } else {
      i84 = 2147483647;
     }
    } while (0);
    HEAP32[i38 >> 2] = i84;
    i60 = HEAP32[i47 >> 2] | 0;
    if ((i60 | 0) == (HEAP32[i48 >> 2] | 0)) {
     i65 = i60 + 1 | 0;
     i61 = HEAP32[i49 >> 2] | 0;
     do {
      if (i61 >>> 0 > i7 >>> 0) {
       i14 = 79;
      } else {
       if ((i61 + (i60 * 40 & -1) | 0) >>> 0 <= i7 >>> 0) {
        i14 = 79;
        break;
       }
       i62 = i65 + (i60 >>> 2) | 0;
       i64 = i62 >>> 0 > 16 >>> 0 ? i62 : 16;
       __ZN3WTF6VectorIN7WebCore20AnnotatedRegionValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i64 >>> 0 > i65 >>> 0 ? i64 : i65);
       i64 = HEAP32[i49 >> 2] | 0;
       i85 = i64 + (((i50 - i61 | 0) / 40 & -1) * 40 & -1) | 0;
       i86 = i64;
      }
     } while (0);
     if ((i14 | 0) == 79) {
      i14 = 0;
      i61 = i65 + (i60 >>> 2) | 0;
      i64 = i61 >>> 0 > 16 >>> 0 ? i61 : 16;
      __ZN3WTF6VectorIN7WebCore20AnnotatedRegionValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i64 >>> 0 > i65 >>> 0 ? i64 : i65);
      i85 = i7;
      i86 = HEAP32[i49 >> 2] | 0;
     }
     i64 = HEAP32[i47 >> 2] | 0;
     i61 = i86 + (i64 * 40 & -1) | 0;
     i62 = i85;
     HEAP32[i61 >> 2] = HEAP32[i62 >> 2];
     HEAP32[i61 + 4 >> 2] = HEAP32[i62 + 4 >> 2];
     HEAP32[i61 + 8 >> 2] = HEAP32[i62 + 8 >> 2];
     HEAP32[i61 + 12 >> 2] = HEAP32[i62 + 12 >> 2];
     i62 = HEAP32[i85 + 16 >> 2] | 0;
     HEAP32[i86 + (i64 * 40 & -1) + 16 >> 2] = i62;
     if ((i62 | 0) != 0) {
      i61 = i62 | 0;
      HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 2;
     }
     i61 = i86 + (i64 * 40 & -1) + 20 | 0;
     i62 = i85 + 20 | 0;
     HEAP32[i61 >> 2] = HEAP32[i62 >> 2];
     HEAP32[i61 + 4 >> 2] = HEAP32[i62 + 4 >> 2];
     HEAP32[i61 + 8 >> 2] = HEAP32[i62 + 8 >> 2];
     HEAP32[i61 + 12 >> 2] = HEAP32[i62 + 12 >> 2];
     HEAP32[i86 + (i64 * 40 & -1) + 36 >> 2] = HEAP32[i85 + 36 >> 2];
    } else {
     i64 = HEAP32[i49 >> 2] | 0;
     i62 = i64 + (i60 * 40 & -1) | 0;
     HEAP32[i62 >> 2] = HEAP32[i27 >> 2];
     HEAP32[i62 + 4 >> 2] = HEAP32[i27 + 4 >> 2];
     HEAP32[i62 + 8 >> 2] = HEAP32[i27 + 8 >> 2];
     HEAP32[i62 + 12 >> 2] = HEAP32[i27 + 12 >> 2];
     i62 = HEAP32[i28 >> 2] | 0;
     HEAP32[i64 + (i60 * 40 & -1) + 16 >> 2] = i62;
     if ((i62 | 0) != 0) {
      i61 = i62 | 0;
      HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 2;
     }
     i61 = i64 + (i60 * 40 & -1) + 20 | 0;
     HEAP32[i61 >> 2] = HEAP32[i43 >> 2];
     HEAP32[i61 + 4 >> 2] = HEAP32[i43 + 4 >> 2];
     HEAP32[i61 + 8 >> 2] = HEAP32[i43 + 8 >> 2];
     HEAP32[i61 + 12 >> 2] = HEAP32[i43 + 12 >> 2];
     HEAP32[i64 + (i60 * 40 & -1) + 36 >> 2] = HEAP32[i41 >> 2];
    }
    HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
    i64 = HEAP32[i28 >> 2] | 0;
    do {
     if ((i64 | 0) != 0) {
      i61 = i64 | 0;
      i62 = (HEAP32[i61 >> 2] | 0) - 2 | 0;
      if ((i62 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i64);
       break;
      } else {
       HEAP32[i61 >> 2] = i62;
       break;
      }
     }
    } while (0);
    if ((HEAP8[i51] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i22);
    }
    if ((HEAP8[i52] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i20);
    }
    if ((HEAP8[i53] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i18);
    }
    if ((HEAP8[i54] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i55);
    }
    i64 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i64 | 0) != 0) {
      i60 = i64 | 0;
      i65 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
      if ((i65 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i64);
       break;
      } else {
       HEAP32[i60 >> 2] = i65;
       break;
      }
     }
    } while (0);
    i59 = i59 + 1 | 0;
    if (i59 >>> 0 >= i8 >>> 0) {
     break;
    }
   }
   if ((i14 | 0) == 14) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((i8 | 0) == 0) {
    i14 = 102;
    break;
   }
   i59 = HEAP32[i9 >> 2] | 0;
   i10 = i59 + (i8 * 40 & -1) | 0;
   i55 = i59;
   while (1) {
    if ((HEAP8[i55 + 33 | 0] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i55 + 28 | 0);
    }
    if ((HEAP8[i55 + 25 | 0] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i55 + 20 | 0);
    }
    if ((HEAP8[i55 + 17 | 0] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i55 + 12 | 0);
    }
    if ((HEAP8[i55 + 9 | 0] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i55 + 4 | 0);
    }
    i54 = HEAP32[i55 >> 2] | 0;
    do {
     if ((i54 | 0) != 0) {
      i18 = i54 | 0;
      i53 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
      if ((i53 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i54);
       break;
      } else {
       HEAP32[i18 >> 2] = i53;
       break;
      }
     }
    } while (0);
    i55 = i55 + 40 | 0;
    if ((i55 | 0) == (i10 | 0)) {
     break;
    }
   }
   HEAP32[i13 >> 2] = 0;
   i87 = i59;
  }
 } while (0);
 if ((i14 | 0) == 102) {
  i87 = HEAP32[i9 >> 2] | 0;
 }
 if ((i87 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i87);
 STACKTOP = i3;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 210;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 214;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 212;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 216;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_ii + 72;
}
function __ZN7WebCore12RenderObject12paintOutlineERNS_9PaintInfoERKNS_10LayoutRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = i12;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = i17;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i20 = i19;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i22 = i21;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i24 = i23;
 i25 = HEAP32[i1 + 20 >> 2] | 0;
 i26 = (i25 & 768 | 0) == 256;
 if (i26) {
  i27 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i27 = HEAP32[i1 + 36 >> 2] | 0;
 }
 i28 = HEAP32[(HEAP32[i27 + 12 >> 2] | 0) + 64 >> 2] | 0;
 do {
  if (!((i28 & 131070 | 0) != 0 & (i28 & 2013265920 | 0) != 0 & (i28 & 1879048192) >>> 0 > 134217728 >>> 0)) {
   if ((i25 & 128 | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   i27 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i27 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i27 + 12 >> 2] & 512 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP8[(HEAP32[(HEAP32[i27 + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) != 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 if (i26) {
  i29 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i29 = HEAP32[i1 + 36 >> 2] | 0;
 }
 i26 = i29 + 12 | 0;
 i28 = HEAP32[i26 >> 2] | 0;
 i27 = HEAP32[i28 + 64 >> 2] | 0;
 if ((i27 & 2013265920 | 0) == 0) {
  i30 = 0;
  i31 = 0;
 } else {
  i30 = HEAP32[i28 + 68 >> 2] | 0;
  i31 = i27 >>> 1 & 65535;
 }
 do {
  if ((i27 | 0) > -1) {
   if ((i25 & 128 | 0) != 0) {
    break;
   }
   i28 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i28 | 0) == 0) {
    break;
   }
   if ((HEAP32[i28 + 12 >> 2] & 512 | 0) == 0) {
    break;
   }
   i32 = HEAP32[(HEAP32[i28 + 20 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP8[i32 + 660 | 0] & 1) != 0) {
    i33 = i32;
    i34 = 20;
   }
  } else {
   i33 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   i34 = 20;
  }
 } while (0);
 do {
  if ((i34 | 0) == 20) {
   i25 = HEAP32[(__ZNK7WebCore8Document4pageEv(i33) | 0) + 68 >> 2] | 0;
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i25 >> 2] | 0) + 52 >> 2] & 15](i25, i29) | 0) {
    break;
   }
   i25 = i3;
   i27 = HEAP32[i25 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i25 >> 2];
   HEAP32[i5 + 4 >> 2] = i27;
   __ZN7WebCore12RenderObject14paintFocusRingERNS_9PaintInfoERKNS_11LayoutPointEPNS_11RenderStyleE(i1, i2, i6, i29);
  }
 } while (0);
 i6 = HEAP32[(HEAP32[i26 >> 2] | 0) + 64 >> 2] | 0;
 if ((i6 | 0) < 0 | (i6 & 2013265920 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i9, i3);
 i3 = i7;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - i30;
 i6 = i7 + 8 | 0;
 i7 = i6;
 i5 = i30 << 1;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i5;
 i33 = i9 + 4 | 0;
 HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) - i30;
 i30 = i9 + 12 | 0;
 HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + i5;
 i5 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i11 + 4 >> 2] = i5;
 i5 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i11 + 8 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i11 + 12 >> 2] = i5;
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i10, i11);
 i11 = i10 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) - i31;
 i5 = i10 + 8 | 0;
 i6 = i31 << 1;
 i8 = (HEAP32[i5 >> 2] | 0) + i6 | 0;
 HEAP32[i5 >> 2] = i8;
 i34 = i10 + 4 | 0;
 HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) - i31;
 i27 = i10 + 12 | 0;
 i25 = (HEAP32[i27 >> 2] | 0) + i6 | 0;
 HEAP32[i27 >> 2] = i25;
 if ((i8 | 0) < 1 | (i25 | 0) < 1) {
  STACKTOP = i4;
  return;
 }
 i25 = (HEAP32[(HEAP32[i26 >> 2] | 0) + 64 >> 2] | 0) >>> 27 & 15;
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i13, i29, 105);
 i26 = HEAP32[i2 >> 2] | 0;
 i2 = i12;
 i8 = HEAP32[i2 >> 2] | 0;
 i6 = (i8 & -16777216 | 0) != -16777216;
 do {
  if (i6) {
   if ((i25 | 0) != 8) {
    __ZN7WebCore15GraphicsContext22beginTransparencyLayerEf(i26, +(i8 >>> 24 | 0) / +255);
    i32 = HEAP32[i2 >> 2] | 0;
    HEAP32[i2 >> 2] = __ZN7WebCore7makeRGBEiii(i32 >>> 16 & 255, i32 >>> 8 & 255, i32 & 255) | 0;
    HEAP8[i12 + 4 | 0] = 1;
    break;
   }
   __ZN7WebCore4PathC1Ev(i14);
   __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i15, i10);
   __ZN7WebCore4Path7addRectERKNS_9FloatRectE(i14, i15);
   __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i16, i9);
   __ZN7WebCore4Path7addRectERKNS_9FloatRectE(i14, i16);
   __ZN7WebCore15GraphicsContext11setFillRuleENS_8WindRuleE(i26, 1);
   __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i26, i13, (HEAP32[(HEAP32[i29 + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
   __ZN7WebCore15GraphicsContext8fillPathERKNS_4PathE(i26, i14);
   __ZN7WebCore4PathD1Ev(i14);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i14 = HEAP32[i11 >> 2] | 0;
 i11 = HEAP32[i3 >> 2] | 0;
 i3 = (HEAP32[i5 >> 2] | 0) + i14 | 0;
 i5 = (HEAP32[i7 >> 2] | 0) + i11 | 0;
 i7 = HEAP32[i34 >> 2] | 0;
 i34 = HEAP32[i33 >> 2] | 0;
 i33 = (HEAP32[i27 >> 2] | 0) + i7 | 0;
 i27 = (HEAP32[i30 >> 2] | 0) + i34 | 0;
 i30 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i17 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i17 + 4 >> 2] = i30;
 __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i1, i26, i14, i7, i11, i33, 3, i18, i25, i31, i31, 0);
 i18 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i19 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i19 + 4 >> 2] = i18;
 __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i1, i26, i14, i7, i3, i34, 0, i20, i25, i31, i31, 0);
 i20 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i21 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i21 + 4 >> 2] = i20;
 __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i1, i26, i5, i7, i3, i33, 1, i22, i25, i31, i31, 0);
 i22 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i23 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i23 + 4 >> 2] = i22;
 __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i1, i26, i14, i27, i3, i33, 2, i24, i25, i31, i31, 0);
 if (!i6) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore15GraphicsContext20endTransparencyLayerEv(i26);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore12RenderObject19containerForRepaintEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i2 = i1 + 4 | 0;
 L1 : do {
  if (__ZNK7WebCore10RenderView15usesCompositingEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0) {
   do {
    if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
     i3 = 5;
    } else {
     if ((HEAP32[i1 + 24 >> 2] & 1 | 0) == 0) {
      i3 = 5;
      break;
     }
     i4 = i1;
    }
   } while (0);
   if ((i3 | 0) == 5) {
    i5 = HEAP32[i1 + 8 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i6 = 0;
     break;
    } else {
     i7 = i5;
    }
    while (1) {
     if ((HEAP32[i7 + 20 >> 2] & 768 | 0) != 256) {
      if ((HEAP32[i7 + 24 >> 2] & 1 | 0) != 0) {
       break;
      }
     }
     i5 = HEAP32[i7 + 8 >> 2] | 0;
     if ((i5 | 0) == 0) {
      i6 = 0;
      break L1;
     } else {
      i7 = i5;
     }
    }
    i4 = i7;
   }
   if ((i4 | 0) == 0) {
    i6 = 0;
    break;
   } else {
    i8 = i4;
   }
   while (1) {
    i9 = HEAP32[i8 + 40 >> 2] | 0;
    if ((i9 | 0) != 0) {
     break;
    }
    i5 = HEAP32[i8 + 8 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i6 = 0;
     break L1;
    } else {
     i10 = i5;
    }
    while (1) {
     if ((HEAP32[i10 + 20 >> 2] & 768 | 0) != 256) {
      if ((HEAP32[i10 + 24 >> 2] & 1 | 0) != 0) {
       break;
      }
     }
     i5 = HEAP32[i10 + 8 >> 2] | 0;
     if ((i5 | 0) == 0) {
      i6 = 0;
      break L1;
     } else {
      i10 = i5;
     }
    }
    if ((i10 | 0) == 0) {
     i6 = 0;
     break L1;
    } else {
     i8 = i10;
    }
   }
   i5 = __ZNK7WebCore11RenderLayer35enclosingCompositingLayerForRepaintENS_16IncludeSelfOrNotE(i9, 0) | 0;
   if ((i5 | 0) == 0) {
    i6 = 0;
    break;
   }
   i6 = HEAP32[i5 + 32 >> 2] | 0;
  } else {
   i6 = 0;
  }
 } while (0);
 i9 = i1 + 20 | 0;
 L27 : do {
  if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 225 | 0] & 1) != 0) {
   do {
    if ((HEAP32[i9 >> 2] & 768 | 0) == 256) {
     i3 = 23;
    } else {
     if ((HEAP32[i1 + 24 >> 2] & 1 | 0) == 0) {
      i3 = 23;
      break;
     }
     i11 = i1;
    }
   } while (0);
   if ((i3 | 0) == 23) {
    i10 = HEAP32[i1 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i12 = i10;
    }
    while (1) {
     if ((HEAP32[i12 + 20 >> 2] & 768 | 0) != 256) {
      if ((HEAP32[i12 + 24 >> 2] & 1 | 0) != 0) {
       break;
      }
     }
     i10 = HEAP32[i12 + 8 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break L27;
     } else {
      i12 = i10;
     }
    }
    i11 = i12;
   }
   if ((i11 | 0) == 0) {
    break;
   } else {
    i13 = i11;
   }
   while (1) {
    i14 = HEAP32[i13 + 40 >> 2] | 0;
    if ((i14 | 0) != 0) {
     break;
    }
    i10 = HEAP32[i13 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break L27;
    } else {
     i15 = i10;
    }
    while (1) {
     if ((HEAP32[i15 + 20 >> 2] & 768 | 0) != 256) {
      if ((HEAP32[i15 + 24 >> 2] & 1 | 0) != 0) {
       break;
      }
     }
     i10 = HEAP32[i15 + 8 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break L27;
     } else {
      i15 = i10;
     }
    }
    if ((i15 | 0) == 0) {
     break L27;
    } else {
     i13 = i15;
    }
   }
   i10 = __ZNK7WebCore11RenderLayer20enclosingFilterLayerENS_16IncludeSelfOrNotE(i14, 0) | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i16 = HEAP32[i10 + 32 >> 2] | 0;
   return i16 | 0;
  }
 } while (0);
 if ((HEAP32[i9 >> 2] & 805306368 | 0) == 0) {
  i16 = i6;
  return i16 | 0;
 }
 i9 = HEAP32[(__ZN7WebCore10RenderView20flowThreadControllerEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0) + 4 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i14 = i1;
   while (1) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 248 >> 2] & 255](i14) | 0) {
     break;
    }
    i15 = __ZNK7WebCore12RenderObject15containingBlockEv(i14) | 0;
    if ((i15 | 0) == 0) {
     i16 = i6;
     i3 = 68;
     break;
    } else {
     i14 = i15 | 0;
    }
   }
   if ((i3 | 0) == 68) {
    return i16 | 0;
   }
   if ((i14 | 0) == 0) {
    i16 = i6;
   } else {
    i17 = i14;
    break;
   }
   return i16 | 0;
  } else {
   i17 = i9;
  }
 } while (0);
 L66 : do {
  if ((i1 | 0) != 0) {
   i9 = i1;
   L67 : while (1) {
    i15 = HEAP32[i9 + 20 >> 2] | 0;
    do {
     if ((i15 & 805306368 | 0) == 268435456) {
      if ((i15 & 768 | 0) == 256) {
       i18 = HEAP32[(HEAP32[i9 + 8 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i18 = HEAP32[i9 + 36 >> 2] | 0;
      }
      if ((HEAP32[i18 + 48 >> 2] & 29360128 | 0) != 25165824) {
       break;
      }
      i13 = __ZNK7WebCore12RenderObject15containingBlockEv(i9) | 0;
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 248 >> 2] & 255](i13 | 0) | 0)) {
       break;
      }
      if ((HEAP32[i13 + 20 >> 2] & 25165824 | 0) == 16777216) {
       i16 = i6;
       break L67;
      }
     }
    } while (0);
    i15 = __ZNK7WebCore12RenderObject15containingBlockEv(i9) | 0;
    if ((i15 | 0) == 0) {
     break L66;
    } else {
     i9 = i15 | 0;
    }
   }
   return i16 | 0;
  }
 } while (0);
 if ((HEAP32[(HEAP32[(HEAP32[i17 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) != (HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0)) {
  i16 = i6;
  return i16 | 0;
 }
 if ((i6 | 0) == 0) {
  i19 = 0;
  i20 = (i19 | 0) != 0;
  i21 = (i19 | 0) == (i17 | 0);
  i22 = i20 & i21;
  i23 = i17 | 0;
  i24 = i22 ? i6 : i23;
  return i24 | 0;
 }
 if ((HEAP32[i6 + 20 >> 2] & 805306368 | 0) == 0) {
  i19 = 0;
  i20 = (i19 | 0) != 0;
  i21 = (i19 | 0) == (i17 | 0);
  i22 = i20 & i21;
  i23 = i17 | 0;
  i24 = i22 ? i6 : i23;
  return i24 | 0;
 }
 i16 = HEAP32[(__ZN7WebCore10RenderView20flowThreadControllerEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0) + 4 >> 2] | 0;
 if ((i16 | 0) != 0) {
  i19 = i16;
  i20 = (i19 | 0) != 0;
  i21 = (i19 | 0) == (i17 | 0);
  i22 = i20 & i21;
  i23 = i17 | 0;
  i24 = i22 ? i6 : i23;
  return i24 | 0;
 }
 i16 = i6 | 0;
 while (1) {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 248 >> 2] & 255](i16) | 0) {
   break;
  }
  i2 = __ZNK7WebCore12RenderObject15containingBlockEv(i16) | 0;
  if ((i2 | 0) == 0) {
   i19 = 0;
   i3 = 65;
   break;
  } else {
   i16 = i2 | 0;
  }
 }
 if ((i3 | 0) == 65) {
  i20 = (i19 | 0) != 0;
  i21 = (i19 | 0) == (i17 | 0);
  i22 = i20 & i21;
  i23 = i17 | 0;
  i24 = i22 ? i6 : i23;
  return i24 | 0;
 }
 i19 = i16;
 i20 = (i19 | 0) != 0;
 i21 = (i19 | 0) == (i17 | 0);
 i22 = i20 & i21;
 i23 = i17 | 0;
 i24 = i22 ? i6 : i23;
 return i24 | 0;
}
function __ZN7WebCore12RenderObject23getTextDecorationColorsEiRNS_5ColorES2_S2_bb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 i14 = i8 + 40 | 0;
 i15 = i9 | 0;
 i16 = i9 + 4 | 0;
 i17 = i10 | 0;
 i18 = i10 + 4 | 0;
 i19 = i11 | 0;
 i20 = i11 + 4 | 0;
 i21 = i5 | 0;
 i22 = i5 + 4 | 0;
 i5 = i4 | 0;
 i23 = i4 + 4 | 0;
 i4 = i3 | 0;
 i24 = i3 + 4 | 0;
 i3 = i1;
 i1 = i2;
 while (1) {
  i2 = (HEAP32[i3 + 20 >> 2] & 768 | 0) == 256;
  do {
   if (i7) {
    if (i2) {
     i25 = HEAP32[i3 + 8 >> 2] | 0;
     if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i25 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
      i26 = HEAP32[i25 + 36 >> 2] | 0;
      break;
     } else {
      i26 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i25) | 0;
      break;
     }
    } else {
     if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i3 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
      i26 = HEAP32[i3 + 36 >> 2] | 0;
      break;
     } else {
      i26 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i3) | 0;
      break;
     }
    }
   } else {
    if (i2) {
     i26 = HEAP32[(HEAP32[i3 + 8 >> 2] | 0) + 36 >> 2] | 0;
     break;
    } else {
     i26 = HEAP32[i3 + 36 >> 2] | 0;
     break;
    }
   }
  } while (0);
  i2 = (HEAP32[(HEAP32[i26 + 8 >> 2] | 0) + 36 >> 2] | 0) >>> 1;
  i25 = i2 & 15;
  __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i9, i26, 332);
  i27 = HEAP32[i15 >> 2] | 0;
  i28 = HEAP8[i16] | 0;
  do {
   if ((i28 & 1) == 0) {
    if (+HEAPF32[(HEAP32[i26 + 24 >> 2] | 0) + 16 >> 2] > +0) {
     __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i10, i26, 343);
     i29 = HEAP32[i17 >> 2] | 0;
     if (i29 >>> 0 >= 16777216 >>> 0) {
      i30 = i29;
      i31 = HEAP8[i18] | 0;
      break;
     }
    }
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i11, i26, 340);
    i30 = HEAP32[i19 >> 2] | 0;
    i31 = HEAP8[i20] | 0;
   } else {
    i30 = i27;
    i31 = i28;
   }
  } while (0);
  do {
   if ((i25 | 0) == 0) {
    i32 = i1;
   } else {
    if ((i2 & 1 | 0) == 0) {
     i33 = i1;
    } else {
     HEAP32[i4 >> 2] = i30;
     HEAP8[i24] = i31;
     i33 = i1 & -2;
    }
    if ((i2 & 2 | 0) == 0) {
     i34 = i33;
    } else {
     HEAP32[i5 >> 2] = i30;
     HEAP8[i23] = i31;
     i34 = i33 & -3;
    }
    if ((i2 & 4 | 0) == 0) {
     i32 = i34;
     break;
    }
    HEAP32[i21 >> 2] = i30;
    HEAP8[i22] = i31;
    i32 = i34 & -5;
   }
  } while (0);
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 172 >> 2] & 255](i3) | 0) {
   i35 = 62;
   break;
  }
  i2 = HEAP32[i3 + 8 >> 2] | 0;
  i25 = i2 | 0;
  do {
   if ((i2 | 0) == 0) {
    i36 = i25;
   } else {
    if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i25) | 0)) {
     i36 = i25;
     break;
    }
    i28 = i2;
    if ((__ZNK7WebCore20RenderBoxModelObject12continuationEv(i28) | 0) == 0) {
     i36 = i25;
     break;
    }
    i36 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i28) | 0;
   }
  } while (0);
  if ((i36 | 0) == 0 | (i32 | 0) == 0) {
   i35 = 61;
   break;
  }
  if (!i6) {
   i3 = i36;
   i1 = i32;
   continue;
  }
  i37 = HEAP32[i36 + 20 >> 2] | 0;
  if ((i37 & 128 | 0) != 0) {
   i3 = i36;
   i1 = i32;
   continue;
  }
  i38 = HEAP32[i36 + 4 >> 2] | 0;
  if ((i38 | 0) == 0) {
   i3 = i36;
   i1 = i32;
   continue;
  }
  if ((HEAP32[i38 + 12 >> 2] & 16 | 0) != 0) {
   if ((HEAP32[(HEAP32[i38 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4aTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i35 = 39;
    break;
   }
  }
  if ((HEAP32[i38 + 12 >> 2] & 4 | 0) == 0) {
   i3 = i36;
   i1 = i32;
   continue;
  }
  i25 = HEAP32[i38 + 44 >> 2] | 0;
  i2 = HEAP32[__ZN7WebCore9HTMLNames7fontTagE >> 2] | 0;
  if ((i25 | 0) == (i2 | 0)) {
   i35 = 39;
   break;
  }
  if ((HEAP32[i25 + 12 >> 2] | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
   i3 = i36;
   i1 = i32;
   continue;
  }
  if ((HEAP32[i25 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
   i35 = 39;
   break;
  } else {
   i3 = i36;
   i1 = i32;
  }
 }
 if ((i35 | 0) == 39) {
  i1 = (i37 & 768 | 0) == 256;
  do {
   if (i7) {
    if (i1) {
     i37 = HEAP32[i36 + 8 >> 2] | 0;
     if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i37 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
      i39 = HEAP32[i37 + 36 >> 2] | 0;
      break;
     } else {
      i39 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i37) | 0;
      break;
     }
    } else {
     if ((HEAP8[(HEAP32[(HEAP32[i38 + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
      i39 = HEAP32[i36 + 36 >> 2] | 0;
      break;
     } else {
      i39 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i36) | 0;
      break;
     }
    }
   } else {
    if (i1) {
     i39 = HEAP32[(HEAP32[i36 + 8 >> 2] | 0) + 36 >> 2] | 0;
     break;
    } else {
     i39 = HEAP32[i36 + 36 >> 2] | 0;
     break;
    }
   }
  } while (0);
  __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i12, i39, 332);
  i36 = HEAP32[i12 >> 2] | 0;
  i1 = HEAP8[i12 + 4 | 0] | 0;
  do {
   if ((i1 & 1) == 0) {
    if (+HEAPF32[(HEAP32[i39 + 24 >> 2] | 0) + 16 >> 2] > +0) {
     __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i13, i39, 343);
     i12 = HEAP32[i13 >> 2] | 0;
     if (i12 >>> 0 >= 16777216 >>> 0) {
      i40 = i12;
      i41 = HEAP8[i13 + 4 | 0] | 0;
      break;
     }
    }
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i14, i39, 340);
    i40 = HEAP32[i14 >> 2] | 0;
    i41 = HEAP8[i14 + 4 | 0] | 0;
   } else {
    i40 = i36;
    i41 = i1;
   }
  } while (0);
  if ((i32 & 1 | 0) != 0) {
   HEAP32[i4 >> 2] = i40;
   HEAP8[i24] = i41;
  }
  if ((i32 & 2 | 0) != 0) {
   HEAP32[i5 >> 2] = i40;
   HEAP8[i23] = i41;
  }
  if ((i32 & 4 | 0) == 0) {
   STACKTOP = i8;
   return;
  }
  HEAP32[i21 >> 2] = i40;
  HEAP8[i22] = i41;
  STACKTOP = i8;
  return;
 } else if ((i35 | 0) == 61) {
  STACKTOP = i8;
  return;
 } else if ((i35 | 0) == 62) {
  STACKTOP = i8;
  return;
 }
}
function __ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, d23 = +0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, d57 = +0, d58 = +0, d59 = +0, d60 = +0, i61 = 0, i62 = 0, i63 = 0, i64 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 248 | 0;
 i4 = i3 | 0;
 i5 = i3 + 64 | 0;
 i6 = i3 + 80 | 0;
 i7 = i3 + 144 | 0;
 i8 = i3 + 160 | 0;
 i9 = i3 + 168 | 0;
 i10 = i3 + 184 | 0;
 i11 = i3 + 216 | 0;
 i12 = i11 | 0;
 i13 = i11;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i15 = i14 | 0;
 i16 = i14;
 i17 = i7 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i7 + 4 | 0;
 HEAP32[i18 >> 2] = 0;
 i19 = i7 + 8 | 0;
 HEAP32[i19 >> 2] = 0;
 i20 = i6;
 _memset(i6 | 0, 0, 53) | 0;
 HEAP8[i6 + 53 | 0] = 1;
 HEAP8[i6 + 54 | 0] = 0;
 HEAP32[i6 + 56 >> 2] = 0;
 i21 = i1;
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i21 >> 2] | 0) + 588 >> 2] & 7](i1, 0, i6, 4, 0);
 __ZN7WebCore14TransformState7flattenEPb(i6, 0);
 d22 = +HEAPF32[i20 >> 2];
 d23 = +HEAPF32[i20 + 4 >> 2];
 i20 = HEAP32[i6 + 40 >> 2] | 0;
 if ((i20 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i20);
 }
 i20 = HEAP32[(HEAP32[i1 >> 2] | 0) + 600 >> 2] | 0;
 i6 = ~~+Math_floor(d23);
 HEAP32[i8 >> 2] = ~~+Math_floor(d22);
 HEAP32[i8 + 4 >> 2] = i6;
 FUNCTION_TABLE_viiii[i20 & 15](i1, i7, i8, 0);
 i8 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i7 = i9;
   i20 = ~~(+-0 - d22);
   i6 = ~~(+-0 - d23);
   i24 = i9 | 0;
   i25 = i9 + 4 | 0;
   i26 = i14 + 8 | 0;
   i27 = i16 + 4 | 0;
   i28 = i11 + 8 | 0;
   i29 = i13 + 12 | 0;
   i30 = i16 + 12 | 0;
   i31 = i11 + 16 | 0;
   i32 = i13 + 20 | 0;
   i33 = i11 + 24 | 0;
   i34 = i13 + 28 | 0;
   i35 = i5 | 0;
   i36 = i5 + 8 | 0;
   i37 = i5 + 4 | 0;
   i38 = i5 + 12 | 0;
   i39 = i4;
   i40 = i4 + 8 | 0;
   i41 = i11;
   i42 = i4 + 40 | 0;
   i43 = i4 + 53 | 0;
   i44 = i42;
   i45 = i4 + 54 | 0;
   i46 = i4 + 56 | 0;
   i47 = i10;
   i48 = i2 + 8 | 0;
   i49 = i2 + 4 | 0;
   i50 = i2 | 0;
   i51 = i10;
   i52 = 0;
   i53 = i8;
   while (1) {
    if (i53 >>> 0 <= i52 >>> 0) {
     i54 = 6;
     break;
    }
    i55 = (HEAP32[i17 >> 2] | 0) + (i52 << 4) | 0;
    HEAP32[i7 >> 2] = HEAP32[i55 >> 2];
    HEAP32[i7 + 4 >> 2] = HEAP32[i55 + 4 >> 2];
    HEAP32[i7 + 8 >> 2] = HEAP32[i55 + 8 >> 2];
    HEAP32[i7 + 12 >> 2] = HEAP32[i55 + 12 >> 2];
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + i20;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + i6;
    __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i16, i9);
    i55 = HEAP32[i15 >> 2] | 0;
    i56 = HEAP32[i15 + 4 >> 2] | 0;
    HEAP32[i12 >> 2] = i55;
    HEAP32[i12 + 4 >> 2] = i56;
    d57 = (HEAP32[tempDoublePtr >> 2] = i55, +HEAPF32[tempDoublePtr >> 2]);
    d58 = d57 + +HEAPF32[i26 >> 2];
    d59 = +HEAPF32[i27 >> 2];
    HEAPF32[i28 >> 2] = d58;
    HEAPF32[i29 >> 2] = d59;
    d60 = d59 + +HEAPF32[i30 >> 2];
    HEAPF32[i31 >> 2] = d58;
    HEAPF32[i32 >> 2] = d60;
    HEAPF32[i33 >> 2] = d57;
    HEAPF32[i34 >> 2] = d60;
    __ZNK7WebCore9FloatQuad11boundingBoxEv(i5, i13);
    d60 = +(+HEAPF32[i35 >> 2] + +HEAPF32[i36 >> 2] * +.5);
    d57 = +(+HEAPF32[i37 >> 2] + +HEAPF32[i38 >> 2] * +.5);
    HEAPF32[i39 >> 2] = d60;
    HEAPF32[i39 + 4 >> 2] = d57;
    HEAP32[i40 >> 2] = HEAP32[i41 >> 2];
    HEAP32[i40 + 4 >> 2] = HEAP32[i41 + 4 >> 2];
    HEAP32[i40 + 8 >> 2] = HEAP32[i41 + 8 >> 2];
    HEAP32[i40 + 12 >> 2] = HEAP32[i41 + 12 >> 2];
    HEAP32[i40 + 16 >> 2] = HEAP32[i41 + 16 >> 2];
    HEAP32[i40 + 20 >> 2] = HEAP32[i41 + 20 >> 2];
    HEAP32[i40 + 24 >> 2] = HEAP32[i41 + 24 >> 2];
    HEAP32[i40 + 28 >> 2] = HEAP32[i41 + 28 >> 2];
    _memset(i44 | 0, 0, 13) | 0;
    HEAP8[i43] = 1;
    HEAP8[i45] = 1;
    HEAP32[i46 >> 2] = 0;
    FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i21 >> 2] | 0) + 588 >> 2] & 7](i1, 0, i4, 6, 0);
    __ZN7WebCore14TransformState7flattenEPb(i4, 0);
    _memcpy(i47 | 0, i40 | 0, 32) | 0;
    i55 = HEAP32[i42 >> 2] | 0;
    if ((i55 | 0) != 0) {
     __ZN3WTF8fastFreeEPv(i55);
    }
    i55 = HEAP32[i48 >> 2] | 0;
    if ((i55 | 0) == (HEAP32[i49 >> 2] | 0)) {
     i56 = i55 + 1 | 0;
     i61 = HEAP32[i50 >> 2] | 0;
     do {
      if (i61 >>> 0 > i10 >>> 0) {
       i54 = 13;
      } else {
       if ((i61 + (i55 << 5) | 0) >>> 0 <= i10 >>> 0) {
        i54 = 13;
        break;
       }
       __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i56);
       i62 = HEAP32[i50 >> 2] | 0;
       i63 = i62 + (i51 - i61 >> 5 << 5) | 0;
       i64 = i62;
      }
     } while (0);
     if ((i54 | 0) == 13) {
      i54 = 0;
      __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i56);
      i63 = i10;
      i64 = HEAP32[i50 >> 2] | 0;
     }
     _memcpy(i64 + (HEAP32[i48 >> 2] << 5) | 0, i63 | 0, 32) | 0;
    } else {
     _memcpy((HEAP32[i50 >> 2] | 0) + (i55 << 5) | 0, i47 | 0, 32) | 0;
    }
    HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 1;
    i52 = i52 + 1 | 0;
    i53 = HEAP32[i19 >> 2] | 0;
    if (i52 >>> 0 >= i8 >>> 0) {
     break;
    }
   }
   if ((i54 | 0) == 6) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((i53 | 0) == 0) {
    break;
   }
   HEAP32[i19 >> 2] = 0;
  }
 } while (0);
 i19 = HEAP32[i17 >> 2] | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i17 >> 2] = 0;
 HEAP32[i18 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i19);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i1, 0, 0) | 0;
 i5 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i5 & 17 | 0) == 16) {
  i6 = (i5 & 4 | 0) == 0;
 } else {
  i6 = 0;
 }
 if ((i5 & 768 | 0) == 256) {
  i7 = 0;
 } else {
  i5 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 22 & 7;
  i7 = (i5 | 0) == 2 | (i5 | 0) == 6;
 }
 if ((i4 | 0) == 0) {
  return;
 } else {
  i8 = i6;
  i9 = i7;
  i10 = i4;
 }
 L9 : while (1) {
  i4 = i10 | 0;
  i7 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i4, 0, 0) | 0;
  if ((i7 | 0) == 0) {
   if ((HEAP32[i10 + 20 >> 2] & 768 | 0) != 768) {
    i11 = 48;
    break;
   }
  }
  do {
   if (i9) {
    if ((HEAP32[i10 + 24 >> 2] & 16 | 0) == 0) {
     i12 = 1;
    } else {
     i12 = __ZNK7WebCore12RenderObject16isAnonymousBlockEv(i4) | 0;
    }
    if ((i10 | 0) == 0) {
     i11 = 53;
     break L9;
    } else {
     i13 = i10;
    }
    while (1) {
     i14 = i13 | 0;
     if ((HEAP32[i13 + 24 >> 2] & 16 | 0) != 0) {
      if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i14) | 0)) {
       break;
      }
     }
     i6 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i14, 0, 0) | 0;
     if ((i6 | 0) == 0) {
      i11 = 54;
      break L9;
     } else {
      i13 = i6;
     }
    }
    i6 = i13 + 20 | 0;
    i5 = HEAP32[i6 >> 2] | 0;
    if ((i5 & 8 | 0) != 0) {
     i11 = 55;
     break L9;
    }
    if (i12) {
     i1 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i14, 0, 0) | 0;
     i15 = i1;
     i16 = HEAP32[i6 >> 2] | 0;
    } else {
     i15 = i7;
     i16 = i5;
    }
    i5 = i16 | 8;
    HEAP32[i6 >> 2] = i5;
    i17 = i13;
    i18 = i15;
    i19 = 1;
    i20 = i5;
   } else {
    i5 = i10 + 20 | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    if (i8) {
     if ((i6 & 16 | 0) != 0) {
      i11 = 56;
      break L9;
     }
     i1 = i6 | 16;
     HEAP32[i5 >> 2] = i1;
     i17 = i10;
     i18 = i7;
     i19 = 1;
     i20 = i1;
     break;
    } else {
     if ((i6 & 4 | 0) != 0) {
      i11 = 57;
      break L9;
     }
     i1 = i6 | 4;
     HEAP32[i5 >> 2] = i1;
     i17 = i10;
     i18 = i7;
     i19 = 0;
     i20 = i1;
     break;
    }
   }
  } while (0);
  if ((i17 | 0) == (i3 | 0)) {
   i11 = 58;
   break;
  }
  do {
   if (i2) {
    i7 = i17 | 0;
    i21 = i17 + 20 | 0;
    if ((i20 & 768 | 0) == 768) {
     i11 = 41;
     break L9;
    }
    i4 = i17;
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 208 >> 2] & 255](i7) | 0) {
     i11 = 41;
     break L9;
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 324 >> 2] & 255](i7) | 0) {
     i11 = 41;
     break L9;
    }
    if ((HEAP32[i21 >> 2] & 65536 | 0) == 0) {
     break;
    }
    i1 = HEAP32[(HEAP32[i17 + 36 >> 2] | 0) + 4 >> 2] | 0;
    i5 = HEAP8[i1 + 9 | 0] | 0;
    if (i5 << 24 >> 24 == 0 | (i5 - 4 & 255) >>> 0 < 2 >>> 0) {
     break;
    }
    if (((i5 & 255) - 6 | 0) >>> 0 < 4 >>> 0) {
     break;
    }
    i5 = HEAP8[i1 + 17 | 0] | 0;
    if (i5 << 24 >> 24 == 0 | (i5 - 4 & 255) >>> 0 < 2 >>> 0) {
     break;
    }
    if (((i5 & 255) - 6 | 0) >>> 0 < 4 >>> 0) {
     break;
    }
    if ((i5 << 24 >> 24 | 0) == 10 | (i5 << 24 >> 24 | 0) == 2) {
     break;
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 188 >> 2] & 255](i7) | 0) {
     break;
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 192 >> 2] & 255](i7) | 0) {
     break;
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 196 >> 2] & 255](i7) | 0) {
     break;
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 200 >> 2] & 255](i7) | 0) {
     break;
    }
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 204 >> 2] & 255](i7) | 0)) {
     i11 = 41;
     break L9;
    }
   }
  } while (0);
  i7 = (HEAP32[(HEAP32[i17 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 22 & 7;
  if ((i18 | 0) == 0) {
   i11 = 59;
   break;
  } else {
   i8 = i19;
   i9 = (i7 | 0) == 2 | (i7 | 0) == 6;
   i10 = i18;
  }
 }
 if ((i11 | 0) == 41) {
  if ((i17 | 0) == 0) {
   return;
  }
  if ((HEAP32[i21 >> 2] & 768 | 0) == 768) {
   __ZN7WebCore9FrameView16scheduleRelayoutEv(HEAP32[i17 + 116 >> 2] | 0);
   return;
  } else {
   i22 = i17;
  }
  while (1) {
   i21 = HEAP32[i22 + 8 >> 2] | 0;
   if ((i21 | 0) == 0) {
    break;
   } else {
    i22 = i21;
   }
  }
  if ((HEAP32[i22 + 20 >> 2] & 768 | 0) != 768) {
   return;
  }
  __ZN7WebCore9FrameView25scheduleRelayoutOfSubtreeERNS_13RenderElementE(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i17 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0, i17);
  return;
 } else if ((i11 | 0) == 48) {
  return;
 } else if ((i11 | 0) == 53) {
  return;
 } else if ((i11 | 0) == 54) {
  return;
 } else if ((i11 | 0) == 55) {
  return;
 } else if ((i11 | 0) == 56) {
  return;
 } else if ((i11 | 0) == 57) {
  return;
 } else if ((i11 | 0) == 58) {
  return;
 } else if ((i11 | 0) == 59) {
  return;
 }
}
function ___udivmoddi4(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i6 = i1;
 i7 = i2;
 i8 = i7;
 i9 = i3;
 i10 = i4;
 i11 = i10;
 if ((i8 | 0) == 0) {
  i12 = (i5 | 0) != 0;
  if ((i11 | 0) == 0) {
   if (i12) {
    HEAP32[i5 >> 2] = (i6 >>> 0) % (i9 >>> 0);
    HEAP32[i5 + 4 >> 2] = 0;
   }
   i13 = 0;
   i14 = (i6 >>> 0) / (i9 >>> 0) >>> 0;
   return (tempRet0 = i13, i14) | 0;
  } else {
   if (!i12) {
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   HEAP32[i5 >> 2] = i1 & -1;
   HEAP32[i5 + 4 >> 2] = i2 & 0;
   i13 = 0;
   i14 = 0;
   return (tempRet0 = i13, i14) | 0;
  }
 }
 i12 = (i11 | 0) == 0;
 do {
  if ((i9 | 0) == 0) {
   if (i12) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = (i8 >>> 0) % (i9 >>> 0);
     HEAP32[i5 + 4 >> 2] = 0;
    }
    i13 = 0;
    i14 = (i8 >>> 0) / (i9 >>> 0) >>> 0;
    return (tempRet0 = i13, i14) | 0;
   }
   if ((i6 | 0) == 0) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = 0;
     HEAP32[i5 + 4 >> 2] = (i8 >>> 0) % (i11 >>> 0);
    }
    i13 = 0;
    i14 = (i8 >>> 0) / (i11 >>> 0) >>> 0;
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = i11 - 1 | 0;
   if ((i15 & i11 | 0) == 0) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = i1 & -1;
     HEAP32[i5 + 4 >> 2] = i15 & i8 | i2 & 0;
    }
    i13 = 0;
    i14 = i8 >>> ((_llvm_cttz_i32(i11 | 0) | 0) >>> 0);
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = (_llvm_ctlz_i32(i11 | 0) | 0) - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
   if (i15 >>> 0 <= 30) {
    i16 = i15 + 1 | 0;
    i17 = 31 - i15 | 0;
    i18 = i16;
    i19 = i8 << i17 | i6 >>> (i16 >>> 0);
    i20 = i8 >>> (i16 >>> 0);
    i21 = 0;
    i22 = i6 << i17;
    break;
   }
   if ((i5 | 0) == 0) {
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   HEAP32[i5 >> 2] = i1 & -1;
   HEAP32[i5 + 4 >> 2] = i7 | i2 & 0;
   i13 = 0;
   i14 = 0;
   return (tempRet0 = i13, i14) | 0;
  } else {
   if (!i12) {
    i17 = (_llvm_ctlz_i32(i11 | 0) | 0) - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
    if (i17 >>> 0 <= 31) {
     i16 = i17 + 1 | 0;
     i15 = 31 - i17 | 0;
     i23 = i17 - 31 >> 31;
     i18 = i16;
     i19 = i6 >>> (i16 >>> 0) & i23 | i8 << i15;
     i20 = i8 >>> (i16 >>> 0) & i23;
     i21 = 0;
     i22 = i6 << i15;
     break;
    }
    if ((i5 | 0) == 0) {
     i13 = 0;
     i14 = 0;
     return (tempRet0 = i13, i14) | 0;
    }
    HEAP32[i5 >> 2] = i1 & -1;
    HEAP32[i5 + 4 >> 2] = i7 | i2 & 0;
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = i9 - 1 | 0;
   if ((i15 & i9 | 0) != 0) {
    i23 = (_llvm_ctlz_i32(i9 | 0) | 0) + 33 - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
    i16 = 64 - i23 | 0;
    i17 = 32 - i23 | 0;
    i24 = i17 >> 31;
    i25 = i23 - 32 | 0;
    i26 = i25 >> 31;
    i18 = i23;
    i19 = i17 - 1 >> 31 & i8 >>> (i25 >>> 0) | (i8 << i17 | i6 >>> (i23 >>> 0)) & i26;
    i20 = i26 & i8 >>> (i23 >>> 0);
    i21 = i6 << i16 & i24;
    i22 = (i8 << i16 | i6 >>> (i25 >>> 0)) & i24 | i6 << i17 & i23 - 33 >> 31;
    break;
   }
   if ((i5 | 0) != 0) {
    HEAP32[i5 >> 2] = i15 & i6;
    HEAP32[i5 + 4 >> 2] = 0;
   }
   if ((i9 | 0) == 1) {
    i13 = i7 | i2 & 0;
    i14 = i1 & -1 | 0;
    return (tempRet0 = i13, i14) | 0;
   } else {
    i15 = _llvm_cttz_i32(i9 | 0) | 0;
    i13 = i8 >>> (i15 >>> 0) | 0;
    i14 = i8 << 32 - i15 | i6 >>> (i15 >>> 0) | 0;
    return (tempRet0 = i13, i14) | 0;
   }
  }
 } while (0);
 if ((i18 | 0) == 0) {
  i27 = i22;
  i28 = i21;
  i29 = i20;
  i30 = i19;
  i31 = 0;
  i32 = 0;
 } else {
  i6 = i3 & -1 | 0;
  i3 = i10 | i4 & 0;
  i4 = _i64Add(i6, i3, -1, -1) | 0;
  i10 = tempRet0;
  i8 = i22;
  i22 = i21;
  i21 = i20;
  i20 = i19;
  i19 = i18;
  i18 = 0;
  while (1) {
   i33 = i22 >>> 31 | i8 << 1;
   i34 = i18 | i22 << 1;
   i9 = i20 << 1 | i8 >>> 31 | 0;
   i1 = i20 >>> 31 | i21 << 1 | 0;
   _i64Subtract(i4, i10, i9, i1) | 0;
   i2 = tempRet0;
   i7 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
   i35 = i7 & 1;
   i36 = _i64Subtract(i9, i1, i7 & i6, (((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1) & i3) | 0;
   i37 = tempRet0;
   i2 = i19 - 1 | 0;
   if ((i2 | 0) == 0) {
    break;
   } else {
    i8 = i33;
    i22 = i34;
    i21 = i37;
    i20 = i36;
    i19 = i2;
    i18 = i35;
   }
  }
  i27 = i33;
  i28 = i34;
  i29 = i37;
  i30 = i36;
  i31 = 0;
  i32 = i35;
 }
 i35 = i28;
 i28 = 0;
 if ((i5 | 0) != 0) {
  HEAP32[i5 >> 2] = i30;
  HEAP32[i5 + 4 >> 2] = i29;
 }
 i13 = (i35 | 0) >>> 31 | (i27 | i28) << 1 | (i28 << 1 | i35 >>> 31) & 0 | i31;
 i14 = (i35 << 1 | 0 >>> 31) & -2 | i32;
 return (tempRet0 = i13, i14) | 0;
}
function __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = (i3 | 0) != 0;
 if (i4) {
  HEAP8[i3] = 0;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i6 = i5;
  return i6 | 0;
 }
 i7 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 22 & 7;
 if ((i7 | 0) == 2) {
  if ((i5 | 0) == 0) {
   i6 = 0;
   return i6 | 0;
  }
  i1 = i2 | 0;
  if (i4) {
   i8 = i5;
  } else {
   i9 = i5;
   while (1) {
    if ((HEAP32[(HEAP32[i9 + 36 >> 2] | 0) + 48 >> 2] & 29360128 | 0) != 0) {
     i6 = i9;
     i10 = 62;
     break;
    }
    i11 = i9 | 0;
    i12 = HEAP32[i9 + 20 >> 2] | 0;
    if ((i12 & 768 | 0) == 768) {
     i6 = i9;
     i10 = 63;
     break;
    }
    if ((i12 & 131072 | 0) != 0) {
     if ((HEAP32[i9 + 24 >> 2] & 16 | 0) != 0) {
      i6 = i9;
      i10 = 57;
      break;
     }
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 376 >> 2] & 255](i11) | 0) {
     i6 = i9;
     i10 = 58;
     break;
    }
    i11 = HEAP32[i9 + 8 >> 2] | 0;
    if ((i11 | 0) == 0) {
     i6 = 0;
     i10 = 59;
     break;
    } else {
     i9 = i11;
    }
   }
   if ((i10 | 0) == 57) {
    return i6 | 0;
   } else if ((i10 | 0) == 58) {
    return i6 | 0;
   } else if ((i10 | 0) == 59) {
    return i6 | 0;
   } else if ((i10 | 0) == 62) {
    return i6 | 0;
   } else if ((i10 | 0) == 63) {
    return i6 | 0;
   }
  }
  while (1) {
   if ((HEAP32[(HEAP32[i8 + 36 >> 2] | 0) + 48 >> 2] & 29360128 | 0) != 0) {
    i6 = i8;
    i10 = 43;
    break;
   }
   i9 = i8 | 0;
   i11 = HEAP32[i8 + 20 >> 2] | 0;
   if ((i11 & 768 | 0) == 768) {
    i6 = i8;
    i10 = 40;
    break;
   }
   if ((i11 & 131072 | 0) != 0) {
    if ((HEAP32[i8 + 24 >> 2] & 16 | 0) != 0) {
     i6 = i8;
     i10 = 56;
     break;
    }
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 376 >> 2] & 255](i9) | 0) {
    i6 = i8;
    i10 = 54;
    break;
   }
   if ((i8 | 0) == (i1 | 0)) {
    HEAP8[i3] = 1;
   }
   i9 = HEAP32[i8 + 8 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i6 = 0;
    i10 = 55;
    break;
   } else {
    i8 = i9;
   }
  }
  if ((i10 | 0) == 40) {
   return i6 | 0;
  } else if ((i10 | 0) == 43) {
   return i6 | 0;
  } else if ((i10 | 0) == 54) {
   return i6 | 0;
  } else if ((i10 | 0) == 55) {
   return i6 | 0;
  } else if ((i10 | 0) == 56) {
   return i6 | 0;
  }
 } else if ((i7 | 0) == 6) {
  if ((i5 | 0) == 0) {
   i6 = 0;
   return i6 | 0;
  }
  i7 = i2 | 0;
  if (i4) {
   i13 = i5;
  } else {
   i4 = i5;
   while (1) {
    i2 = i4 | 0;
    i8 = i4 + 8 | 0;
    if ((HEAP32[i8 >> 2] | 0) == 0) {
     i6 = i4;
     i10 = 53;
     break;
    }
    i1 = i4 + 20 | 0;
    if ((HEAP32[i1 >> 2] & 131072 | 0) != 0) {
     if ((HEAP32[i4 + 24 >> 2] & 16 | 0) != 0) {
      i6 = i4;
      i10 = 44;
      break;
     }
    }
    i9 = i4;
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 376 >> 2] & 255](i2) | 0) {
     i6 = i4;
     i10 = 45;
     break;
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 248 >> 2] & 255](i2) | 0) {
     if ((HEAP32[i1 >> 2] & 25165824 | 0) == 16777216) {
      i6 = i4;
      i10 = 46;
      break;
     }
    }
    i1 = HEAP32[i8 >> 2] | 0;
    if ((i1 | 0) == 0) {
     i6 = 0;
     i10 = 47;
     break;
    } else {
     i4 = i1;
    }
   }
   if ((i10 | 0) == 44) {
    return i6 | 0;
   } else if ((i10 | 0) == 45) {
    return i6 | 0;
   } else if ((i10 | 0) == 46) {
    return i6 | 0;
   } else if ((i10 | 0) == 47) {
    return i6 | 0;
   } else if ((i10 | 0) == 53) {
    return i6 | 0;
   }
  }
  while (1) {
   i4 = i13 | 0;
   i1 = i13 + 8 | 0;
   if ((HEAP32[i1 >> 2] | 0) == 0) {
    i6 = i13;
    i10 = 61;
    break;
   }
   i8 = i13 + 20 | 0;
   if ((HEAP32[i8 >> 2] & 131072 | 0) != 0) {
    if ((HEAP32[i13 + 24 >> 2] & 16 | 0) != 0) {
     i6 = i13;
     i10 = 49;
     break;
    }
   }
   i2 = i13;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 376 >> 2] & 255](i4) | 0) {
    i6 = i13;
    i10 = 60;
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 248 >> 2] & 255](i4) | 0) {
    if ((HEAP32[i8 >> 2] & 25165824 | 0) == 16777216) {
     i6 = i13;
     i10 = 48;
     break;
    }
   }
   if ((i13 | 0) == (i7 | 0)) {
    HEAP8[i3] = 1;
   }
   i8 = HEAP32[i1 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i6 = 0;
    i10 = 52;
    break;
   } else {
    i13 = i8;
   }
  }
  if ((i10 | 0) == 48) {
   return i6 | 0;
  } else if ((i10 | 0) == 49) {
   return i6 | 0;
  } else if ((i10 | 0) == 52) {
   return i6 | 0;
  } else if ((i10 | 0) == 60) {
   return i6 | 0;
  } else if ((i10 | 0) == 61) {
   return i6 | 0;
  }
 } else {
  i6 = i5;
  return i6 | 0;
 }
 return 0;
}
function __ZNK7WebCore12RenderObject12offsetParentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, i16 = 0;
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i3 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if (!((i5 & 128 | 0) != 0 | (i3 | 0) == 0)) {
   if ((HEAP32[i3 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   i6 = HEAP32[i3 + 44 >> 2] | 0;
   i7 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
   if ((i6 | 0) == (i7 | 0)) {
    i4 = 0;
    return i4 | 0;
   }
   if ((HEAP32[i6 + 12 >> 2] | 0) != (HEAP32[i7 + 12 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i6 + 16 >> 2] | 0) == (HEAP32[i7 + 16 >> 2] | 0)) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i3 = i5 & 25165824;
 i7 = i5 & 768;
 do {
  if ((i3 | 0) == 16777216) {
   if ((i7 | 0) == 256) {
    i8 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i8 = HEAP32[i1 + 36 >> 2] | 0;
   }
   if ((HEAP32[i8 + 48 >> 2] & 29360128 | 0) == 25165824) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i8 = (i3 | 0) != 0;
 if ((i7 | 0) == 256) {
  i7 = i1 + 8 | 0;
  i9 = HEAP32[(HEAP32[i7 >> 2] | 0) + 36 >> 2] | 0;
  i10 = i7;
 } else {
  i9 = HEAP32[i1 + 36 >> 2] | 0;
  i10 = i1 + 8 | 0;
 }
 d11 = +HEAPF32[(HEAP32[i9 + 24 >> 2] | 0) + 80 >> 2];
 i9 = i10;
 L25 : while (1) {
  i12 = HEAP32[i9 >> 2] | 0;
  if ((i12 | 0) == 0) {
   i4 = 0;
   i13 = 53;
   break;
  }
  i10 = i12 + 20 | 0;
  i1 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i1 & 128 | 0) == 0) {
    i7 = HEAP32[i12 + 4 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    if ((i1 & 25165824 | 0) != 0) {
     break L25;
    }
    if ((HEAP32[i7 + 12 >> 2] & 4 | 0) == 0) {
     break;
    }
    i3 = HEAP32[i7 + 44 >> 2] | 0;
    i7 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
    if ((i3 | 0) == (i7 | 0)) {
     break L25;
    }
    if ((HEAP32[i3 + 12 >> 2] | 0) != (HEAP32[i7 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i7 + 16 >> 2] | 0)) {
     break L25;
    }
   }
  } while (0);
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 252 >> 2] & 255](i12 | 0) | 0) {
   break;
  }
  do {
   if ((HEAP32[i10 >> 2] & 128 | 0) == 0) {
    i1 = HEAP32[i12 + 4 >> 2] | 0;
    if (i8 | (i1 | 0) == 0) {
     break;
    }
    i7 = HEAP32[i1 + 44 >> 2] | 0;
    if ((HEAP32[i1 + 12 >> 2] & 16 | 0) != 0) {
     if ((HEAP32[i7 + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break L25;
     }
    }
    i1 = HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0;
    if ((i7 | 0) == (i1 | 0)) {
     break L25;
    }
    i3 = HEAP32[i7 + 12 >> 2] | 0;
    if ((i3 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
     if ((HEAP32[i7 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
      break L25;
     }
    }
    i1 = HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0;
    if ((i7 | 0) == (i1 | 0)) {
     break L25;
    }
    if ((i3 | 0) != (HEAP32[i1 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i7 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
     break L25;
    }
   }
  } while (0);
  d14 = +HEAPF32[(HEAP32[(HEAP32[i12 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
  if (d11 != d14) {
   break;
  }
  d11 = d14;
  i9 = i12 + 8 | 0;
 }
 if ((i13 | 0) == 53) {
  return i4 | 0;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 252 >> 2] & 255](i12 | 0) | 0) {
   if ((__ZNK7WebCore8Document4bodyEv(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) == 0) {
    i4 = 0;
    return i4 | 0;
   }
   i13 = __ZNK7WebCore8Document4bodyEv(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
   i9 = i13 + 32 | 0;
   if ((HEAP32[i13 + 12 >> 2] & 2048 | 0) == 0) {
    i15 = i9 | 0;
   } else {
    i15 = HEAP32[i9 >> 2] | 0;
   }
   i9 = HEAP32[i15 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i4 = 0;
   } else {
    i16 = i9;
    break;
   }
   return i4 | 0;
  } else {
   i16 = i12;
  }
 } while (0);
 if ((HEAP32[i16 + 24 >> 2] & 2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = i16;
 return i4 | 0;
}
function __ZNK7WebCore12RenderObject23absoluteBoundingBoxRectEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, d19 = +0, d20 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 200 | 0;
 i5 = i4 | 0;
 i6 = i4 + 64 | 0;
 i7 = i4 + 80 | 0;
 i8 = i4 + 96 | 0;
 i9 = i4 + 112 | 0;
 i10 = i4 + 128 | 0;
 i11 = i4 + 144 | 0;
 i12 = i4 + 160 | 0;
 i13 = i4 + 168 | 0;
 i14 = i4 + 184 | 0;
 if (i3) {
  i3 = i8 | 0;
  HEAP32[i3 >> 2] = 0;
  i15 = i8 + 4 | 0;
  HEAP32[i15 >> 2] = 0;
  i16 = i8 + 8 | 0;
  HEAP32[i16 >> 2] = 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 476 >> 2] & 31](i2, i8, 0);
  i8 = HEAP32[i16 >> 2] | 0;
  do {
   if ((i8 | 0) == 0) {
    _memset(i1 | 0, 0, 16) | 0;
   } else {
    __ZNK7WebCore9FloatQuad11boundingBoxEv(i7, HEAP32[i3 >> 2] | 0);
    __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i9, i7);
    L6 : do {
     if (i8 >>> 0 > 1 >>> 0) {
      i17 = 1;
      while (1) {
       if ((HEAP32[i16 >> 2] | 0) >>> 0 <= i17 >>> 0) {
        break;
       }
       __ZNK7WebCore9FloatQuad11boundingBoxEv(i6, (HEAP32[i3 >> 2] | 0) + (i17 << 5) | 0);
       __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i10, i6);
       __ZN7WebCore7IntRect5uniteERKS0_(i9, i10);
       i17 = i17 + 1 | 0;
       if (i17 >>> 0 >= i8 >>> 0) {
        break L6;
       }
      }
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    } while (0);
    i17 = i1;
    i18 = i9;
    HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
    HEAP32[i17 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
    HEAP32[i17 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
    HEAP32[i17 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
    if ((HEAP32[i16 >> 2] | 0) == 0) {
     break;
    }
    HEAP32[i16 >> 2] = 0;
   }
  } while (0);
  i16 = HEAP32[i3 >> 2] | 0;
  if ((i16 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  HEAP32[i3 >> 2] = 0;
  HEAP32[i15 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i16);
  STACKTOP = i4;
  return;
 }
 i16 = i5;
 _memset(i5 | 0, 0, 53) | 0;
 HEAP8[i5 + 53 | 0] = 1;
 HEAP8[i5 + 54 | 0] = 0;
 HEAP32[i5 + 56 >> 2] = 0;
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 588 >> 2] & 7](i2, 0, i5, 4, 0);
 __ZN7WebCore14TransformState7flattenEPb(i5, 0);
 d19 = +HEAPF32[i16 >> 2];
 d20 = +HEAPF32[i16 + 4 >> 2];
 i16 = HEAP32[i5 + 40 >> 2] | 0;
 if ((i16 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i16);
 }
 i16 = i11 | 0;
 HEAP32[i16 >> 2] = 0;
 i5 = i11 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i15 = i11 + 8 | 0;
 HEAP32[i15 >> 2] = 0;
 i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 472 >> 2] | 0;
 i9 = ~~+Math_floor(d20);
 HEAP32[i12 >> 2] = ~~+Math_floor(d19);
 HEAP32[i12 + 4 >> 2] = i9;
 FUNCTION_TABLE_viii[i3 & 31](i2, i11, i12);
 i12 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   _memset(i1 | 0, 0, 16) | 0;
  } else {
   i11 = HEAP32[i16 >> 2] | 0;
   i2 = i11;
   i3 = HEAP32[i2 + 4 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i13 + 4 >> 2] = i3;
   i3 = i11 + 8 | 0;
   i11 = HEAP32[i3 + 4 >> 2] | 0;
   HEAP32[i13 + 8 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i13 + 12 >> 2] = i11;
   L26 : do {
    if (i12 >>> 0 > 1 >>> 0) {
     i11 = i14 | 0;
     i3 = i14 + 4 | 0;
     i2 = i14 + 8 | 0;
     i9 = i14 + 12 | 0;
     i8 = 1;
     i10 = i12;
     while (1) {
      if (i10 >>> 0 <= i8 >>> 0) {
       break;
      }
      i6 = HEAP32[i16 >> 2] | 0;
      i7 = i6 + (i8 << 4) | 0;
      i18 = HEAP32[i7 + 4 >> 2] | 0;
      HEAP32[i11 >> 2] = HEAP32[i7 >> 2];
      HEAP32[i3 >> 2] = i18;
      i18 = i6 + (i8 << 4) + 8 | 0;
      i6 = HEAP32[i18 + 4 >> 2] | 0;
      HEAP32[i2 >> 2] = HEAP32[i18 >> 2];
      HEAP32[i9 >> 2] = i6;
      __ZN7WebCore10LayoutRect5uniteERKS0_(i13, i14);
      i6 = i8 + 1 | 0;
      if (i6 >>> 0 >= i12 >>> 0) {
       break L26;
      }
      i8 = i6;
      i10 = HEAP32[i15 >> 2] | 0;
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   } while (0);
   __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i1, i13);
   if ((HEAP32[i15 >> 2] | 0) == 0) {
    break;
   }
   HEAP32[i15 >> 2] = 0;
  }
 } while (0);
 i15 = HEAP32[i16 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i16 >> 2] = 0;
 HEAP32[i5 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i15);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 48 | 0;
 i10 = i5 + 64 | 0;
 i11 = i10 | 0;
 i12 = i10;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((i2 | 0) == 0) {
  i14 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
  i15 = i3;
  i16 = HEAP32[i15 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i6 + 4 >> 2] = i16;
  i16 = i3 + 8 | 0;
  i15 = HEAP32[i16 + 4 >> 2] | 0;
  HEAP32[i6 + 8 >> 2] = HEAP32[i16 >> 2];
  HEAP32[i6 + 12 >> 2] = i15;
  __ZNK7WebCore10RenderView20repaintViewRectangleERKNS_10LayoutRectEb(i14, i6, i4);
  STACKTOP = i5;
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 248 >> 2] & 255](i2 | 0) | 0) {
  i6 = i3;
  i14 = HEAP32[i6 + 4 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i7 + 4 >> 2] = i14;
  i14 = i3 + 8 | 0;
  i6 = HEAP32[i14 + 4 >> 2] | 0;
  HEAP32[i7 + 8 >> 2] = HEAP32[i14 >> 2];
  HEAP32[i7 + 12 >> 2] = i6;
  __ZNK7WebCore16RenderFlowThread25repaintRectangleInRegionsERKNS_10LayoutRectEb(i2, i7, i4);
  STACKTOP = i5;
  return;
 }
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0) + 12 >> 2] | 0) != 0) {
   i7 = i2 + 40 | 0;
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   if (!(__ZNK7WebCore11RenderLayer32requiresFullLayerImageForFiltersEv(i6) | 0)) {
    break;
   }
   i6 = HEAP32[i7 >> 2] | 0;
   i7 = i3;
   i14 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i8 + 4 >> 2] = i14;
   i14 = i3 + 8 | 0;
   i7 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i8 + 8 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i8 + 12 >> 2] = i7;
   __ZN7WebCore11RenderLayer37setFilterBackendNeedsRepaintingInRectERKNS_10LayoutRectEb(i6, i8, i4);
   STACKTOP = i5;
   return;
  }
 } while (0);
 i8 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 L15 : do {
  if ((HEAP32[i2 + 20 >> 2] & 768 | 0) == 768) {
   do {
    if ((HEAP32[i8 + 20 >> 2] & 32768 | 0) == 0) {
     i17 = 15;
    } else {
     i1 = i8 + 40 | 0;
     i6 = HEAP32[(HEAP32[i1 >> 2] | 0) + 208 >> 2] | 0;
     if ((i6 | 0) == 0) {
      i17 = 15;
      break;
     }
     if (!(__ZNK7WebCore18RenderLayerBacking16paintsIntoWindowEv(i6) | 0)) {
      break L15;
     }
     i6 = HEAP32[(HEAP32[i1 >> 2] | 0) + 172 >> 2] | 0;
     if ((i6 | 0) == 0) {
      i17 = 15;
      break;
     }
     __ZNK7WebCore20TransformationMatrix7mapRectERKNS_7IntRectE(i12, i6, i3);
    }
   } while (0);
   if ((i17 | 0) == 15) {
    i6 = i10;
    i1 = i3;
    HEAP32[i6 >> 2] = HEAP32[i1 >> 2];
    HEAP32[i6 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
    HEAP32[i6 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
    HEAP32[i6 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
   }
   i1 = HEAP32[i11 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i9 + 4 >> 2] = i1;
   i1 = i10 + 8 | 0;
   i6 = HEAP32[i1 + 4 >> 2] | 0;
   HEAP32[i9 + 8 >> 2] = HEAP32[i1 >> 2];
   HEAP32[i9 + 12 >> 2] = i6;
   __ZNK7WebCore10RenderView20repaintViewRectangleERKNS_10LayoutRectEb(i8, i9, i4);
   STACKTOP = i5;
   return;
  }
 } while (0);
 if (!(__ZNK7WebCore10RenderView15usesCompositingEv(i8) | 0)) {
  STACKTOP = i5;
  return;
 }
 i8 = HEAP32[i2 + 40 >> 2] | 0;
 i2 = i3;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i13 + 4 >> 2] = i4;
 i4 = i3 + 8 | 0;
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i13 + 8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i13 + 12 >> 2] = i3;
 __ZN7WebCore11RenderLayer28setBackingNeedsRepaintInRectERKNS_10LayoutRectE(i8, i13);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore12RenderObject15containingBlockEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 264 >> 2] & 255](i1) | 0)) {
    i3 = 0;
    break;
   }
   i3 = __ZNK7WebCore19RenderScrollbarPart23rendererOwningScrollbarEv(i1) | 0;
  } else {
   i3 = i2;
  }
 } while (0);
 do {
  if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
   i4 = 31;
  } else {
   i2 = HEAP32[i1 + 36 >> 2] | 0;
   if ((HEAP32[i2 + 48 >> 2] & 29360128 | 0) == 25165824) {
    i5 = i3 | 0;
    L9 : do {
     if ((i3 | 0) == 0) {
      i6 = i5;
     } else {
      i7 = i3;
      i8 = i5;
      while (1) {
       i9 = i7 + 20 | 0;
       i10 = HEAP32[i9 >> 2] | 0;
       i11 = i10 & 768;
       if ((i11 | 0) == 768) {
        break;
       }
       if (!((i10 & 131072 | 0) == 0 | (i11 | 0) == 256)) {
        if ((HEAP32[i8 + 24 >> 2] & 16 | 0) != 0) {
         break;
        }
       }
       i11 = i7;
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 376 >> 2] & 255](i8) | 0) {
        break;
       }
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 248 >> 2] & 255](i8) | 0) {
        i11 = i7 | 0;
        if ((HEAP32[i9 >> 2] & 25165824 | 0) == 16777216) {
         i6 = i11;
         break L9;
        } else {
         i12 = i11;
        }
       } else {
        i12 = i7 | 0;
       }
       i11 = HEAP32[i12 + 8 >> 2] | 0;
       i9 = i11 | 0;
       if ((i11 | 0) == 0) {
        i6 = i9;
        break L9;
       } else {
        i7 = i11;
        i8 = i9;
       }
      }
      i6 = i7 | 0;
     }
    } while (0);
    i13 = i6;
    break;
   }
   if ((HEAP32[i2 + 48 >> 2] & 29360128 | 0) != 8388608) {
    i4 = 31;
    break;
   }
   L25 : do {
    if ((i3 | 0) == 0) {
     i14 = 0;
    } else {
     i5 = i3;
     while (1) {
      if ((HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 48 >> 2] & 29360128 | 0) != 0) {
       break;
      }
      i8 = i5 | 0;
      i9 = i5 + 20 | 0;
      if ((HEAP32[i9 >> 2] & 131072 | 0) != 0) {
       if ((HEAP32[i5 + 24 >> 2] & 16 | 0) != 0) {
        break;
       }
      }
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 376 >> 2] & 255](i8) | 0) {
       break;
      }
      if ((HEAP32[i9 >> 2] & 768 | 0) == 768) {
       break;
      }
      i9 = HEAP32[i5 + 8 >> 2] | 0;
      if ((i9 | 0) == 0) {
       i14 = 0;
       break L25;
      } else {
       i5 = i9;
      }
     }
     if ((HEAP32[i5 + 24 >> 2] & 16 | 0) == 0) {
      i15 = __ZNK7WebCore12RenderObject15containingBlockEv(i5 | 0) | 0;
     } else {
      i15 = i5;
     }
     i7 = i15 | 0;
     if ((i15 | 0) == 0) {
      i14 = i7;
      break;
     } else {
      i16 = i15;
      i17 = i7;
     }
     while (1) {
      i7 = i16 | 0;
      if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i17) | 0)) {
       i14 = i7;
       break L25;
      }
      i9 = __ZNK7WebCore12RenderObject15containingBlockEv(i7) | 0;
      i7 = i9 | 0;
      if ((i9 | 0) == 0) {
       i14 = i7;
       break;
      } else {
       i16 = i9 | 0;
       i17 = i7;
      }
     }
    }
   } while (0);
   i13 = i14;
  }
 } while (0);
 if ((i4 | 0) == 31) {
  L44 : do {
   if ((i3 | 0) == 0) {
    i18 = 0;
   } else {
    i4 = i3;
    while (1) {
     if ((HEAP32[i4 + 20 >> 2] & 3072 | 0) != 1024) {
      if ((HEAP32[i4 + 24 >> 2] & 16 | 0) != 0) {
       break;
      }
     }
     i14 = HEAP32[i4 + 8 >> 2] | 0;
     if ((i14 | 0) == 0) {
      i18 = 0;
      break L44;
     } else {
      i4 = i14;
     }
    }
    i18 = i4;
   }
  } while (0);
  i13 = i18 | 0;
 }
 if ((i13 | 0) == 0) {
  i19 = 0;
  return i19 | 0;
 }
 if ((HEAP32[i13 + 24 >> 2] & 16 | 0) == 0) {
  i19 = 0;
  return i19 | 0;
 }
 i19 = i13;
 return i19 | 0;
}
function __ZNK7WebCore12RenderObject19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = i6 + 64 | 0;
 i16 = i6 + 72 | 0;
 if ((i2 | 0) == (i1 | 0)) {
  STACKTOP = i6;
  return;
 }
 i17 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 __ZNK7WebCore14TransformState11mappedPointEPb(i7, i3, 0);
 d18 = +_round(+(+HEAPF32[i7 >> 2]));
 do {
  if (d18 < +2147483647) {
   if (d18 <= +-2147483648) {
    i19 = -2147483648;
    break;
   }
   i19 = ~~d18;
  } else {
   i19 = 2147483647;
  }
 } while (0);
 d18 = +_round(+(+HEAPF32[i7 + 4 >> 2]));
 do {
  if (d18 < +2147483647) {
   if (d18 <= +-2147483648) {
    i20 = -2147483648;
    break;
   }
   i20 = ~~d18;
  } else {
   i20 = 2147483647;
  }
 } while (0);
 do {
  if ((i4 & 4 | 0) == 0) {
   i21 = i4;
  } else {
   if ((HEAP32[i17 + 20 >> 2] & 512 | 0) == 0) {
    i21 = i4;
    break;
   }
   i7 = (HEAP32[(HEAP32[i17 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i7 | 0) == 3 | (i7 | 0) == 1) {
    i7 = i17;
    __ZNK7WebCore14TransformState11mappedPointEPb(i11, i3, 0);
    d18 = +_round(+(+HEAPF32[i11 >> 2]));
    do {
     if (d18 < +2147483647) {
      if (d18 <= +-2147483648) {
       i22 = -2147483648;
       break;
      }
      i22 = ~~d18;
     } else {
      i22 = 2147483647;
     }
    } while (0);
    d18 = +_round(+(+HEAPF32[i11 + 4 >> 2]));
    do {
     if (d18 < +2147483647) {
      if (d18 <= +-2147483648) {
       i23 = -2147483648;
       break;
      }
      i23 = ~~d18;
     } else {
      i23 = 2147483647;
     }
    } while (0);
    HEAP32[i10 >> 2] = i22;
    HEAP32[i10 + 4 >> 2] = i23;
    __ZNK7WebCore9RenderBox34flipForWritingModeIncludingColumnsERKNS_11LayoutPointE(i9, i7, i10);
    i1 = (HEAP32[i9 + 4 >> 2] | 0) - i20 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i9 >> 2] | 0) - i19;
    HEAP32[i8 + 4 >> 2] = i1;
    __ZN7WebCore14TransformState4moveERKNS_10LayoutSizeENS0_21TransformAccumulationE(i3, i8, 0);
   }
   i21 = i4 & -5;
  }
 } while (0);
 i4 = i12 | 0;
 HEAP32[i4 >> 2] = 0;
 i8 = i12 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i19 = i17 | 0;
 i9 = HEAP32[(HEAP32[i17 >> 2] | 0) + 520 >> 2] | 0;
 __ZNK7WebCore14TransformState11mappedPointEPb(i14, i3, 0);
 d18 = +_round(+(+HEAPF32[i14 >> 2]));
 do {
  if (d18 < +2147483647) {
   if (d18 <= +-2147483648) {
    i24 = -2147483648;
    break;
   }
   i24 = ~~d18;
  } else {
   i24 = 2147483647;
  }
 } while (0);
 d18 = +_round(+(+HEAPF32[i14 + 4 >> 2]));
 do {
  if (d18 < +2147483647) {
   if (d18 <= +-2147483648) {
    i25 = -2147483648;
    break;
   }
   i25 = ~~d18;
  } else {
   i25 = 2147483647;
  }
 } while (0);
 HEAP32[i13 >> 2] = i24;
 HEAP32[i13 + 4 >> 2] = i25;
 FUNCTION_TABLE_viii[i9 & 31](i19, i12, i13);
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  if ((HEAP32[i8 >> 2] | 0) != 0) {
   i26 = 28;
  }
 } else {
  i26 = 28;
 }
 if ((i26 | 0) == 28) {
  __ZN7WebCore14TransformState4moveERKNS_10LayoutSizeENS0_21TransformAccumulationE(i3, i12, 0);
 }
 if ((HEAP32[i17 + 20 >> 2] & 65536 | 0) != 0) {
  __ZNK7WebCore9RenderBox21scrolledContentOffsetEv(i16, i17);
  i12 = -(HEAP32[i16 + 4 >> 2] | 0) | 0;
  HEAP32[i15 >> 2] = -(HEAP32[i16 >> 2] | 0);
  HEAP32[i15 + 4 >> 2] = i12;
  __ZN7WebCore14TransformState4moveERKNS_10LayoutSizeENS0_21TransformAccumulationE(i3, i15, 0);
 }
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i17 >> 2] | 0) + 588 >> 2] & 7](i19, i2, i3, i21, i5);
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore12RenderObject24selectionBackgroundColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 40 | 0;
 i9 = i3 + 48 | 0;
 i10 = i3 + 56 | 0;
 i11 = i3 + 64 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP8[i1 + 4 | 0] = 0;
 i12 = (HEAP32[i2 + 20 >> 2] & 768 | 0) == 256;
 if (i12) {
  i13 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i13 = HEAP32[i2 + 36 >> 2] | 0;
 }
 if ((HEAP32[(HEAP32[i13 + 24 >> 2] | 0) + 88 >> 2] & 98304 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i2 + 4 | 0;
 i14 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 468 >> 2] | 0;
 do {
  if ((HEAP8[i14 + 192 | 0] & 16) != 0) {
   if ((HEAP32[i14 + 84 >> 2] | 0) != 1) {
    break;
   }
   if (i12) {
    i15 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i15 = HEAP32[i2 + 36 >> 2] | 0;
   }
   __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i5, i15, 1);
   __ZNK7WebCore5Color14blendWithWhiteEv(i4, i5);
   i16 = i1;
   i17 = i4;
   HEAP32[i16 >> 2] = HEAP32[i17 >> 2];
   HEAP8[i16 + 4 | 0] = HEAP8[i17 + 4 | 0] | 0;
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i7 >> 2] = 5;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP32[i7 + 8 >> 2] = 0;
 __ZNK7WebCore12RenderObject22getUncachedPseudoStyleERKNS_18PseudoStyleRequestEPNS_11RenderStyleES5_(i6, i2, i7, 0, 0);
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = (i6 | 0) == 0;
 do {
  if (i7) {
   i18 = 14;
  } else {
   __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i8, i6, 23);
   if ((HEAP8[i8 + 4 | 0] & 1) == 0) {
    i18 = 14;
    break;
   }
   __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i10, i6, 23);
   __ZNK7WebCore5Color14blendWithWhiteEv(i9, i10);
   i2 = i1;
   i4 = i9;
   HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
   HEAP8[i2 + 4 | 0] = HEAP8[i4 + 4 | 0] | 0;
  }
 } while (0);
 do {
  if ((i18 | 0) == 14) {
   i9 = __ZNK7WebCore14FrameSelection18isFocusedAndActiveEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 468 >> 2] | 0) | 0;
   i10 = HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) + 68 >> 2] | 0;
   if (i9) {
    __ZNK7WebCore11RenderTheme30activeSelectionBackgroundColorEv(i11, i10);
   } else {
    __ZNK7WebCore11RenderTheme32inactiveSelectionBackgroundColorEv(i11, i10);
   }
   i10 = i1;
   i9 = i11;
   HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
   HEAP8[i10 + 4 | 0] = HEAP8[i9 + 4 | 0] | 0;
   if (!i7) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i7 = i6 | 0;
 i11 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) == 0) {
  __ZN7WebCore11RenderStyleD2Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i11;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11RenderStyleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore14SVGRenderStyleD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = i4 + 8 | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  i5 = i4 | 0;
  if ((i2 | 0) != 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i6 + (i2 << 2) | 0;
   i2 = i6;
   while (1) {
    i6 = HEAP32[i2 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i8 = i6 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i9 | 0) == 0) {
       __ZN7WebCore11RenderStyleD2Ev(i6);
       __ZN3WTF8fastFreeEPv(i6);
       break;
      } else {
       HEAP32[i8 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i7 | 0)) {
     break;
    }
   }
   HEAP32[i3 >> 2] = 0;
  }
  i3 = HEAP32[i5 >> 2] | 0;
  if (!((i4 + 12 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i4 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore18StyleInheritedDataD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore22StyleRareInheritedDataD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore17StyleSurroundDataD2Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore9FillLayerD1Ev(i4 + 4 | 0);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore15StyleVisualDataD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore12StyleBoxDataD2Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZNK7WebCore12RenderObject14selectionColorEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 HEAP32[i1 >> 2] = 0;
 i10 = i1 + 4 | 0;
 HEAP8[i10] = 0;
 if ((HEAP32[i2 + 20 >> 2] & 768 | 0) == 256) {
  i11 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i11 = HEAP32[i2 + 36 >> 2] | 0;
 }
 if ((HEAP32[(HEAP32[i11 + 24 >> 2] | 0) + 88 >> 2] & 98304 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i11 = i2 + 4 | 0;
 if (((__ZNK7WebCore9FrameView13paintBehaviorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) | 0) & 1 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i6 >> 2] = 5;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = 0;
 __ZNK7WebCore12RenderObject22getUncachedPseudoStyleERKNS_18PseudoStyleRequestEPNS_11RenderStyleES5_(i5, i2, i6, 0, 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i5 | 0) == 0) {
  i6 = __ZNK7WebCore14FrameSelection18isFocusedAndActiveEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 468 >> 2] | 0) | 0;
  i2 = HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) + 68 >> 2] | 0;
  if (i6) {
   __ZNK7WebCore11RenderTheme30activeSelectionForegroundColorEv(i9, i2);
   i6 = i1;
   i11 = i9;
   HEAP32[i6 >> 2] = HEAP32[i11 >> 2];
   HEAP8[i6 + 4 | 0] = HEAP8[i11 + 4 | 0] | 0;
   STACKTOP = i4;
   return;
  } else {
   __ZNK7WebCore11RenderTheme32inactiveSelectionForegroundColorEv(i9, i2);
   i2 = i1;
   i11 = i9;
   HEAP32[i2 >> 2] = HEAP32[i11 >> 2];
   HEAP8[i2 + 4 | 0] = HEAP8[i11 + 4 | 0] | 0;
   STACKTOP = i4;
   return;
  }
 }
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i7, i5, i3);
 i3 = i1;
 i1 = i7;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP8[i3 + 4 | 0] = HEAP8[i1 + 4 | 0] | 0;
 if ((HEAP8[i10] & 1) == 0) {
  __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i8, i5, 1);
  i10 = i8;
  HEAP32[i3 >> 2] = HEAP32[i10 >> 2];
  HEAP8[i3 + 4 | 0] = HEAP8[i10 + 4 | 0] | 0;
 }
 i10 = i5 | 0;
 i3 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore11RenderStyleD2Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i10 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore12RenderObject25getTransformFromContainerEPKS0_RKNS_10LayoutSizeERNS_20TransformationMatrixE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 392 | 0;
 i6 = i5 | 0;
 i7 = i5 + 128 | 0;
 i8 = i5 + 136 | 0;
 i9 = i5 + 264 | 0;
 HEAPF64[i4 >> 3] = +1;
 _memset(i4 + 8 | 0, 0, 32) | 0;
 HEAPF64[i4 + 40 >> 3] = +1;
 _memset(i4 + 48 | 0, 0, 32) | 0;
 HEAPF64[i4 + 80 >> 3] = +1;
 _memset(i4 + 88 | 0, 0, 32) | 0;
 HEAPF64[i4 + 120 >> 3] = +1;
 __ZN7WebCore20TransformationMatrix9translateEdd(i4, +(HEAP32[i3 >> 2] | 0), +(HEAP32[i3 + 4 >> 2] | 0)) | 0;
 do {
  if ((HEAP32[i1 + 20 >> 2] & 32768 | 0) != 0) {
   i3 = HEAP32[i1 + 40 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP32[i3 + 172 >> 2] | 0) == 0) {
    break;
   }
   __ZNK7WebCore11RenderLayer16currentTransformENS_11RenderStyle20ApplyTransformOriginE(i6, i3, 0);
   __ZN7WebCore20TransformationMatrix8multiplyERKS0_(i4, i6) | 0;
  }
 } while (0);
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i2 + 20 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 & 32768 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if ((i1 & 768 | 0) == 256) {
  i10 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i10 = HEAP32[i2 + 36 >> 2] | 0;
 }
 if (+HEAPF32[(HEAP32[i10 + 20 >> 2] | 0) + 16 >> 2] <= +0) {
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore11RenderLayer17perspectiveOriginEv(i7, HEAP32[i2 + 40 >> 2] | 0);
 HEAPF64[i8 >> 3] = +1;
 _memset(i8 + 8 | 0, 0, 32) | 0;
 HEAPF64[i8 + 40 >> 3] = +1;
 _memset(i8 + 48 | 0, 0, 32) | 0;
 HEAPF64[i8 + 80 >> 3] = +1;
 _memset(i8 + 88 | 0, 0, 32) | 0;
 HEAPF64[i8 + 120 >> 3] = +1;
 if ((HEAP32[i6 >> 2] & 768 | 0) == 256) {
  i11 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i11 = HEAP32[i2 + 36 >> 2] | 0;
 }
 __ZN7WebCore20TransformationMatrix16applyPerspectiveEd(i8, +HEAPF32[(HEAP32[i11 + 20 >> 2] | 0) + 16 >> 2]) | 0;
 i11 = i7 | 0;
 i2 = i7 + 4 | 0;
 __ZN7WebCore20TransformationMatrix16translateRight3dEddd(i4, +-0 - +HEAPF32[i11 >> 2], +-0 - +HEAPF32[i2 >> 2], +0) | 0;
 i7 = i9;
 _memcpy(i7 | 0, i8 | 0, 128) | 0;
 __ZN7WebCore20TransformationMatrix8multiplyERKS0_(i9, i4) | 0;
 _memcpy(i4 | 0, i7 | 0, 128) | 0;
 __ZN7WebCore20TransformationMatrix16translateRight3dEddd(i4, +HEAPF32[i11 >> 2], +HEAPF32[i2 >> 2], +0) | 0;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore12RenderObject22getUncachedPseudoStyleERKNS_18PseudoStyleRequestEPNS_11RenderStyleES5_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) < 8 & (i5 | 0) == 0) {
   if ((HEAP32[i2 + 20 >> 2] & 768 | 0) == 256) {
    i9 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i9 = HEAP32[i2 + 36 >> 2] | 0;
   }
   if ((1 << i8 - 1 & 127 & (HEAP32[i9 + 52 >> 2] | 0) >>> 12 | 0) != 0) {
    break;
   }
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i6;
   return;
  }
 } while (0);
 i9 = HEAP32[i2 + 20 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   if ((i9 & 768 | 0) == 256) {
    i10 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i10 = HEAP32[i2 + 36 >> 2] | 0;
    break;
   }
  } else {
   i10 = i4;
  }
 } while (0);
 L16 : do {
  if ((i9 & 128 | 0) == 0) {
   i4 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   } else {
    i11 = i4;
   }
   while (1) {
    if ((HEAP32[i11 + 12 >> 2] & 4 | 0) != 0) {
     break;
    }
    i4 = HEAP32[i11 + 16 >> 2] | 0;
    if ((i4 | 0) == 0) {
     break L16;
    } else {
     i11 = i4 | 0;
    }
   }
   i4 = i11;
   i5 = HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   i12 = i5 + 320 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   if ((i13 | 0) == 0) {
    __ZN7WebCore8Document19createStyleResolverEv(i5);
    i14 = HEAP32[i12 >> 2] | 0;
   } else {
    i14 = i13;
   }
   if ((i8 | 0) == 6) {
    __ZN7WebCore13StyleResolver15styleForElementEPNS_7ElementEPNS_11RenderStyleENS_20StyleSharingBehaviorENS_20RuleMatchingBehaviorEPNS_12RenderRegionE(i7, i14, i4, i10, 1, 0, 0);
    i13 = HEAP32[i7 >> 2] | 0;
    i12 = i13 + 52 | 0;
    HEAP32[i12 >> 2] = HEAP32[i12 >> 2] & -4033 | 384;
    HEAP32[i1 >> 2] = i13;
    STACKTOP = i6;
    return;
   } else {
    __ZN7WebCore13StyleResolver21pseudoStyleForElementEPNS_7ElementERKNS_18PseudoStyleRequestEPNS_11RenderStyleE(i1, i14, i4, i3, i10);
    STACKTOP = i6;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i6;
 return;
}
function __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEEC2ERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i5;
 if ((i3 | 0) == 0) {
  return;
 }
 if (i3 >>> 0 > 107374182 >>> 0) {
  _WTFCrash();
 }
 i5 = __ZN3WTF18fastMallocGoodSizeEj(i3 * 40 & -1) | 0;
 HEAP32[i7 >> 2] = (i5 >>> 0) / 40 & -1;
 i7 = __ZN3WTF10fastMallocEj(i5) | 0;
 i5 = i7;
 HEAP32[i6 >> 2] = i5;
 if ((i7 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i7 + (i2 * 40 & -1) | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i8 = i7;
  i9 = i5;
 }
 while (1) {
  i5 = HEAP32[i8 >> 2] | 0;
  HEAP32[i9 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  i7 = i9 + 4 | 0;
  i5 = i8 + 4 | 0;
  i2 = i7;
  i6 = HEAP32[i5 >> 2] | 0;
  i3 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i2 >> 2] = i6;
  HEAP32[i2 + 4 >> 2] = i3;
  if ((i6 & 0 | 0) == 0 & (i3 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i7 | 0);
  }
  i7 = i9 + 12 | 0;
  i3 = i8 + 12 | 0;
  i6 = i7;
  i2 = HEAP32[i3 >> 2] | 0;
  i5 = HEAP32[i3 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = i2;
  HEAP32[i6 + 4 >> 2] = i5;
  if ((i2 & 0 | 0) == 0 & (i5 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
  }
  i7 = i9 + 20 | 0;
  i5 = i8 + 20 | 0;
  i2 = i7;
  i6 = HEAP32[i5 >> 2] | 0;
  i3 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i2 >> 2] = i6;
  HEAP32[i2 + 4 >> 2] = i3;
  if ((i6 & 0 | 0) == 0 & (i3 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
  }
  i7 = i9 + 28 | 0;
  i3 = i8 + 28 | 0;
  i6 = i7;
  i2 = HEAP32[i3 >> 2] | 0;
  i5 = HEAP32[i3 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = i2;
  HEAP32[i6 + 4 >> 2] = i5;
  if ((i2 & 0 | 0) == 0 & (i5 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
  }
  HEAP32[i9 + 36 >> 2] = HEAP32[i8 + 36 >> 2];
  i7 = i8 + 40 | 0;
  if ((i7 | 0) == (i4 | 0)) {
   break;
  } else {
   i8 = i7;
   i9 = i9 + 40 | 0;
  }
 }
 return;
}
function __ZNK7WebCore12RenderObject20getCachedPseudoStyleENS_8PseudoIdEPNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) < 8) {
   if ((i8 & 768 | 0) == 256) {
    i9 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i9 = HEAP32[i1 + 36 >> 2] | 0;
   }
   if ((1 << i2 - 1 & 127 & (HEAP32[i9 + 52 >> 2] | 0) >>> 12 | 0) == 0) {
    i10 = 0;
   } else {
    break;
   }
   STACKTOP = i4;
   return i10 | 0;
  }
 } while (0);
 if ((i8 & 768 | 0) == 256) {
  i11 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i11 = HEAP32[i1 + 36 >> 2] | 0;
 }
 i8 = __ZNK7WebCore11RenderStyle20getCachedPseudoStyleENS_8PseudoIdE(i11, i2) | 0;
 if ((i8 | 0) != 0) {
  i10 = i8;
  STACKTOP = i4;
  return i10 | 0;
 }
 HEAP32[i6 >> 2] = i2;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = 0;
 __ZNK7WebCore12RenderObject22getUncachedPseudoStyleERKNS_18PseudoStyleRequestEPNS_11RenderStyleES5_(i5, i1, i6, i3, 0);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i5 | 0) == 0) {
  i10 = 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i12 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i12 = HEAP32[i1 + 36 >> 2] | 0;
 }
 i1 = i7 | 0;
 HEAP32[i1 >> 2] = i5;
 i5 = __ZN7WebCore11RenderStyle20addCachedPseudoStyleEN3WTF10PassRefPtrIS0_EE(i12, i7) | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i10 = i5;
  STACKTOP = i4;
  return i10 | 0;
 }
 i1 = i7 | 0;
 i12 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i12 | 0) == 0) {
  __ZN7WebCore11RenderStyleD2Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
  i10 = i5;
  STACKTOP = i4;
  return i10 | 0;
 } else {
  HEAP32[i1 >> 2] = i12;
  i10 = i5;
  STACKTOP = i4;
  return i10 | 0;
 }
 return 0;
}
function __ZN7WebCore12RenderObject31absoluteBoundingBoxRectForRangeEPKNS_5RangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP32[i2 + 8 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore8Document12updateLayoutEv(HEAP32[i2 + 4 >> 2] | 0);
   i7 = i4 | 0;
   HEAP32[i7 >> 2] = 0;
   i8 = i4 + 4 | 0;
   HEAP32[i8 >> 2] = 0;
   i9 = i4 + 8 | 0;
   HEAP32[i9 >> 2] = 0;
   __ZNK7WebCore5Range9textQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEbPNS0_20RangeInFixedPositionE(i2, i4, 0, 0);
   do {
    if ((HEAP32[i9 >> 2] | 0) == 0) {
     _memset(i1 | 0, 0, 16) | 0;
    } else {
     __ZNK7WebCore9FloatQuad11boundingBoxEv(i5, HEAP32[i7 >> 2] | 0);
     i10 = HEAP32[i9 >> 2] | 0;
     if (i10 >>> 0 > 1 >>> 0) {
      i11 = 1;
      while (1) {
       __ZNK7WebCore9FloatQuad11boundingBoxEv(i6, (HEAP32[i7 >> 2] | 0) + (i11 << 5) | 0);
       __ZN7WebCore9FloatRect16uniteEvenIfEmptyERKS0_(i5, i6);
       i12 = i11 + 1 | 0;
       i13 = HEAP32[i9 >> 2] | 0;
       if (i12 >>> 0 < i13 >>> 0) {
        i11 = i12;
       } else {
        i14 = i13;
        break;
       }
      }
     } else {
      i14 = i10;
     }
     i11 = i1;
     i13 = i5;
     HEAP32[i11 >> 2] = HEAP32[i13 >> 2];
     HEAP32[i11 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
     HEAP32[i11 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
     HEAP32[i11 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
     if ((i14 | 0) == 0) {
      break;
     }
     HEAP32[i9 >> 2] = 0;
    }
   } while (0);
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   HEAP32[i7 >> 2] = 0;
   HEAP32[i8 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i9);
   STACKTOP = i3;
   return;
  }
 } while (0);
 _memset(i1 | 0, 0, 16) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12RenderObject19scrollRectToVisibleERKNS_10LayoutRectERKNS_15ScrollAlignmentES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 do {
  if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
   i5 = 4;
  } else {
   if ((HEAP32[i1 + 24 >> 2] & 1 | 0) == 0) {
    i5 = 4;
    break;
   }
   i6 = i1;
  }
 } while (0);
 do {
  if ((i5 | 0) == 4) {
   i7 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i8 = 0;
    return i8 | 0;
   } else {
    i9 = i7;
   }
   while (1) {
    if ((HEAP32[i9 + 20 >> 2] & 768 | 0) != 256) {
     if ((HEAP32[i9 + 24 >> 2] & 1 | 0) != 0) {
      i5 = 7;
      break;
     }
    }
    i7 = HEAP32[i9 + 8 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i8 = 0;
     i5 = 23;
     break;
    } else {
     i9 = i7;
    }
   }
   if ((i5 | 0) == 7) {
    i6 = i9;
    break;
   } else if ((i5 | 0) == 23) {
    return i8 | 0;
   }
  }
 } while (0);
 if ((i6 | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 } else {
  i10 = i6;
 }
 L19 : while (1) {
  i11 = HEAP32[i10 + 40 >> 2] | 0;
  if ((i11 | 0) != 0) {
   i5 = 16;
   break;
  }
  i6 = HEAP32[i10 + 8 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i8 = 0;
   i5 = 21;
   break;
  } else {
   i12 = i6;
  }
  while (1) {
   if ((HEAP32[i12 + 20 >> 2] & 768 | 0) != 256) {
    if ((HEAP32[i12 + 24 >> 2] & 1 | 0) != 0) {
     break;
    }
   }
   i6 = HEAP32[i12 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i8 = 0;
    i5 = 19;
    break L19;
   } else {
    i12 = i6;
   }
  }
  if ((i12 | 0) == 0) {
   i8 = 0;
   i5 = 22;
   break;
  } else {
   i10 = i12;
  }
 }
 if ((i5 | 0) == 16) {
  __ZN7WebCore11RenderLayer19scrollRectToVisibleERKNS_10LayoutRectERKNS_15ScrollAlignmentES6_(i11, i2, i3, i4);
  i8 = 1;
  return i8 | 0;
 } else if ((i5 | 0) == 19) {
  return i8 | 0;
 } else if ((i5 | 0) == 21) {
  return i8 | 0;
 } else if ((i5 | 0) == 22) {
  return i8 | 0;
 }
 return 0;
}
function __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 + 76 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 100 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = i1 + 44 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = i1 + 12 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF6VectorIN7WebCore20AnnotatedRegionValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 40 & -1) | 0;
 if (i2 >>> 0 > 107374182 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 40 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 40 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = i7;
   i8 = i6;
   HEAP32[i2 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i2 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
   HEAP32[i2 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   HEAP32[i2 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
   i8 = i6 + 16 | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i7 + 16 >> 2] = i2;
   i2 = i7 + 20 | 0;
   i9 = i6 + 20 | 0;
   HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i2 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
   HEAP32[i2 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
   HEAP32[i2 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
   HEAP32[i7 + 36 >> 2] = HEAP32[i6 + 36 >> 2];
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i8 = i9 | 0;
     i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i8 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i9 = i6 + 40 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 40 | 0;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore12RenderObject14paintFocusRingERNS_9PaintInfoERKNS_11LayoutPointEPNS_11RenderStyleE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 40 | 0;
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i6 + 4 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i6 + 8 | 0;
 HEAP32[i12 >> 2] = 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 600 >> 2] & 15](i1, i6, i3, HEAP32[i2 + 44 >> 2] | 0);
 i3 = HEAP32[i4 + 12 >> 2] | 0;
 i13 = HEAP32[i3 + 64 >> 2] | 0;
 i14 = HEAP32[i2 >> 2] | 0;
 if ((i13 | 0) > -1) {
  i2 = i9 | 0;
  __ZN7WebCore9unionRectERKN3WTF6VectorINS_7IntRectELj0ENS0_15CrashOnOverflowEEE(i9, i6);
  i15 = HEAP32[i2 + 4 >> 2] | 0;
  HEAP32[i8 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i8 + 4 >> 2] = i15;
  i15 = i9 + 8 | 0;
  i9 = HEAP32[i15 + 4 >> 2] | 0;
  HEAP32[i8 + 8 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i8 + 12 >> 2] = i9;
  __ZN7WebCore12RenderObject13addPDFURLRectEPNS_15GraphicsContextERKNS_10LayoutRectE(i1, i14, i8);
 } else {
  if ((i13 & 2013265920 | 0) == 0) {
   i16 = 0;
   i17 = 0;
  } else {
   i16 = HEAP32[i3 + 68 >> 2] | 0;
   i17 = i13 >>> 1 & 65535;
  }
  __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i7, i4, 105);
  __ZN7WebCore15GraphicsContext13drawFocusRingERKN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEEiiRKNS_5ColorE(i14, i6, i17, i16, i7);
 }
 if ((HEAP32[i12 >> 2] | 0) != 0) {
  HEAP32[i12 >> 2] = 0;
 }
 i12 = HEAP32[i10 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i10 >> 2] = 0;
 HEAP32[i11 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i12);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 12 | 0;
 if ((HEAP32[i6 >> 2] & 1 | 0) == 0) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = i2;
  i8 = i2 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i5, 4);
  i5 = HEAP32[i7 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i7 = i5 + 8 | 0;
  i5 = i7 | 0;
  i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i8;
  if ((i8 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i2;
 i8 = i2 + 8 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 255](i2) | 0) {
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 168 >> 2] & 255](i2) | 0;
  } else {
   if ((HEAP32[i6 >> 2] & 2 | 0) == 0) {
    i9 = 0;
    break;
   }
   i9 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i2) | 0;
  }
 } while (0);
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i4, i9, 0);
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i9 + 8 | 0;
 i9 = i7 | 0;
 i4 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12RenderObject35removeFromRenderFlowThreadRecursiveEPNS_16RenderFlowThreadE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 255](i1) | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  while (1) {
   __ZN7WebCore12RenderObject35removeFromRenderFlowThreadRecursiveEPNS_16RenderFlowThreadE(i4, i2);
   i4 = HEAP32[i4 + 16 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
  }
 }
 i4 = i1 + 20 | 0;
 do {
  if ((HEAP32[i4 >> 2] & 805306368 | 0) == 536870912) {
   i3 = HEAP32[(__ZN7WebCore10RenderView20flowThreadControllerEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0) + 4 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i5 = i1;
   } else {
    i6 = i3;
    break;
   }
   while (1) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 248 >> 2] & 255](i5) | 0) {
     i7 = 6;
     break;
    }
    i3 = __ZNK7WebCore12RenderObject15containingBlockEv(i5) | 0;
    if ((i3 | 0) == 0) {
     i7 = 12;
     break;
    } else {
     i5 = i3 | 0;
    }
   }
   if ((i7 | 0) == 6) {
    i8 = i5;
    i7 = 8;
    break;
   } else if ((i7 | 0) == 12) {
    i9 = HEAP32[i4 >> 2] | 0;
    i10 = i9 & -805306369;
    HEAP32[i4 >> 2] = i10;
    return;
   }
  } else {
   i8 = i2;
   i7 = 8;
  }
 } while (0);
 do {
  if ((i7 | 0) == 8) {
   if ((i8 | 0) != 0) {
    i6 = i8;
    break;
   }
   i9 = HEAP32[i4 >> 2] | 0;
   i10 = i9 & -805306369;
   HEAP32[i4 >> 2] = i10;
   return;
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 1164 >> 2] & 31](i6, i1);
 i9 = HEAP32[i4 >> 2] | 0;
 i10 = i9 & -805306369;
 HEAP32[i4 >> 2] = i10;
 return;
}
function __ZN7WebCore12RenderObject44removeAnonymousWrappersForInlinesIfNecessaryEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 8 | 0;
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] | 0;
 L1 : do {
  if ((i1 | 0) != 0) {
   i3 = i1;
   L2 : while (1) {
    do {
     if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i3) | 0) {
      if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i3) | 0)) {
       break;
      }
      if ((__ZNK7WebCore20RenderBoxModelObject12continuationEv(i3) | 0) != 0) {
       i4 = 5;
      }
     } else {
      i4 = 5;
     }
    } while (0);
    do {
     if ((i4 | 0) == 5) {
      i4 = 0;
      i5 = (HEAP32[i3 + 20 >> 2] & 768 | 0) == 256;
      if (i5) {
       i6 = HEAP32[(HEAP32[i3 + 8 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i6 = HEAP32[i3 + 36 >> 2] | 0;
      }
      if ((HEAP32[i6 + 48 >> 2] & 100663296 | 0) != 0) {
       break;
      }
      if (i5) {
       i7 = HEAP32[(HEAP32[i3 + 8 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i7 = HEAP32[i3 + 36 >> 2] | 0;
      }
      i5 = (HEAP32[i7 + 48 >> 2] | 0) >>> 22 & 7;
      if (!((i5 | 0) == 6 | (i5 | 0) == 2)) {
       break L2;
      }
     }
    } while (0);
    i3 = HEAP32[i3 + 16 >> 2] | 0;
    if ((i3 | 0) == 0) {
     break L1;
    }
   }
   return;
  }
 } while (0);
 i7 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i7 + 28 >> 2] | 0;
 i6 = i7;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i8 = i2;
 }
 while (1) {
  i2 = HEAP32[i8 + 16 >> 2] | 0;
  if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i8) | 0) {
   __ZN7WebCore11RenderBlock25collapseAnonymousBoxChildEPS0_S1_(i6, i8);
  }
  if ((i2 | 0) == 0) {
   break;
  } else {
   i8 = i2;
  }
 }
 return;
}
function __ZN7WebCore12RenderObject15willBeDestroyedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 4 | 0;
 if ((__ZNK7WebCore12EventHandler18autoscrollRendererEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 472 >> 2] | 0) | 0) == (i1 | 0)) {
  __ZN7WebCore12EventHandler19stopAutoscrollTimerEb(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 472 >> 2] | 0, 1);
 }
 __ZNK7WebCore8Document21existingAXObjectCacheEv(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 636 >> 2] & 31](i3, i1);
 }
 __ZNK7WebCore8Document21existingAXObjectCacheEv(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 i3 = i1 + 20 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 & 524288 | 0) == 0) {
  i5 = i4;
 } else {
  __ZN7WebCore13RenderCounter19destroyCounterNodesEPNS_12RenderObjectE(i1);
  i5 = HEAP32[i3 >> 2] | 0;
 }
 if ((i5 & 32768 | 0) != 0) {
  HEAP32[i3 >> 2] = i5 & -32769;
  __ZN7WebCore22RenderLayerModelObject12destroyLayerEv(i1);
 }
 i5 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP8[i5 + 2285 | 0] & 1) != 0) {
  return;
 }
 if ((__ZNK7WebCore9FrameView10layoutRootEb(HEAP32[(HEAP32[i5 + 1584 >> 2] | 0) + 116 >> 2] | 0, 0) | 0) != (i1 | 0)) {
  return;
 }
 HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 300 >> 2] = 0;
 return;
}
function __ZNK7WebCore12RenderObject14enclosingLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 do {
  if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
   i2 = 4;
  } else {
   if ((HEAP32[i1 + 24 >> 2] & 1 | 0) == 0) {
    i2 = 4;
    break;
   }
   i3 = i1;
  }
 } while (0);
 do {
  if ((i2 | 0) == 4) {
   i4 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i5 = 0;
    return i5 | 0;
   } else {
    i6 = i4;
   }
   while (1) {
    if ((HEAP32[i6 + 20 >> 2] & 768 | 0) != 256) {
     if ((HEAP32[i6 + 24 >> 2] & 1 | 0) != 0) {
      i2 = 7;
      break;
     }
    }
    i4 = HEAP32[i6 + 8 >> 2] | 0;
    if ((i4 | 0) == 0) {
     i5 = 0;
     i2 = 18;
     break;
    } else {
     i6 = i4;
    }
   }
   if ((i2 | 0) == 7) {
    i3 = i6;
    break;
   } else if ((i2 | 0) == 18) {
    return i5 | 0;
   }
  }
 } while (0);
 if ((i3 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 } else {
  i7 = i3;
 }
 L19 : while (1) {
  i3 = HEAP32[i7 + 40 >> 2] | 0;
  if ((i3 | 0) != 0) {
   i5 = i3;
   i2 = 20;
   break;
  }
  i3 = HEAP32[i7 + 8 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i5 = 0;
   i2 = 21;
   break;
  } else {
   i8 = i3;
  }
  while (1) {
   if ((HEAP32[i8 + 20 >> 2] & 768 | 0) != 256) {
    if ((HEAP32[i8 + 24 >> 2] & 1 | 0) != 0) {
     break;
    }
   }
   i3 = HEAP32[i8 + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i5 = 0;
    i2 = 23;
    break L19;
   } else {
    i8 = i3;
   }
  }
  if ((i8 | 0) == 0) {
   i5 = 0;
   i2 = 22;
   break;
  } else {
   i7 = i8;
  }
 }
 if ((i2 | 0) == 20) {
  return i5 | 0;
 } else if ((i2 | 0) == 21) {
  return i5 | 0;
 } else if ((i2 | 0) == 22) {
  return i5 | 0;
 } else if ((i2 | 0) == 23) {
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCore12RenderObject21willBeRemovedFromTreeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 805306368 | 0) != 0) {
  i2 = HEAP32[(__ZN7WebCore10RenderView20flowThreadControllerEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0) + 4 >> 2] | 0;
  L3 : do {
   if ((i2 | 0) == 0) {
    i3 = i1;
    while (1) {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 248 >> 2] & 255](i3) | 0) {
      break;
     }
     i4 = __ZNK7WebCore12RenderObject15containingBlockEv(i3) | 0;
     if ((i4 | 0) == 0) {
      i5 = 0;
      break L3;
     } else {
      i3 = i4 | 0;
     }
    }
    i5 = i3;
   } else {
    i5 = i2;
   }
  } while (0);
  __ZN7WebCore12RenderObject35removeFromRenderFlowThreadRecursiveEPNS_16RenderFlowThreadE(i1, i5);
 }
 i5 = i1 + 8 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 L10 : do {
  if ((i2 | 0) != 0) {
   i4 = i2;
   while (1) {
    i6 = i4 | 0;
    i7 = i4;
    if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i6) | 0)) {
     break;
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 252 >> 2] & 255](i6) | 0) {
     break;
    }
    i8 = HEAP32[i4 + 8 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break L10;
    } else {
     i4 = i8;
    }
   }
   if ((i4 | 0) == 0 | (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 252 >> 2] & 255](i6) | 0) ^ 1) {
    break;
   }
   __ZN7WebCore21RenderNamedFlowThread15removeFlowChildEPNS_12RenderObjectE(i4, i1);
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 400 >> 2] & 31](i1 | 0);
 return;
}
function __ZNK7WebCore12RenderObject16isAnonymousBlockEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 & 128 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = (i3 & 768 | 0) == 256;
 if (i5) {
  i6 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i6 = HEAP32[i1 + 36 >> 2] | 0;
 }
 do {
  if ((HEAP32[i6 + 48 >> 2] & 31 | 0) != 1) {
   if (i5) {
    i7 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i7 = HEAP32[i1 + 36 >> 2] | 0;
   }
   if ((HEAP32[i7 + 48 >> 2] & 31 | 0) == 16) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 if (i5) {
  i8 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i8 = HEAP32[i1 + 36 >> 2] | 0;
 }
 if ((HEAP32[i8 + 52 >> 2] & 4032 | 0) != 0 | i5) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 24 >> 2] & 16 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i1;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 108 >> 2] & 255](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 248 >> 2] & 255](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i2 >> 2] & 768 | 0) == 768) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 236 >> 2] & 255](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 240 >> 2] & 255](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 272 >> 2] & 255](i1) | 0) ^ 1;
 return i4 | 0;
}
function __ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if ((HEAP32[i2 + 72 >> 2] | 0) != 0) {
  return;
 }
 if ((HEAP32[i1 + 20 >> 2] & 128 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i5 = 4;
  } else {
   i6 = i4;
  }
 } else {
  i5 = 4;
 }
 do {
  if ((i5 | 0) == 4) {
   i4 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i4 | 0) == 0) {
    return;
   }
   i7 = HEAP32[i4 + 20 >> 2] | 0;
   if ((i7 & 768 | 0) == 256) {
    return;
   }
   i8 = HEAP32[(HEAP32[i4 + 36 >> 2] | 0) + 52 >> 2] & 4032;
   if ((i8 | 0) == 192 | (i8 | 0) == 256) {
    i9 = i4;
    i10 = i7;
   } else {
    return;
   }
   while (1) {
    if ((i10 & 128 | 0) == 0) {
     i11 = HEAP32[i9 + 4 >> 2] | 0;
    } else {
     i11 = 0;
    }
    i7 = HEAP32[i9 + 8 >> 2] | 0;
    if (!((i7 | 0) != 0 & (i11 | 0) == 0)) {
     break;
    }
    i9 = i7;
    i10 = HEAP32[i7 + 20 >> 2] | 0;
   }
   if ((i11 | 0) != 0) {
    i6 = i11 | 0;
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore13HitTestResult12setInnerNodeEPNS_4NodeE(i2, i6);
 if ((HEAP32[i2 + 76 >> 2] | 0) == 0) {
  __ZN7WebCore13HitTestResult21setInnerNonSharedNodeEPNS_4NodeE(i2, i6);
 }
 i6 = i3;
 i3 = i2 + 88 | 0;
 i2 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i3 + 4 >> 2] = i2;
 return;
}
function __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 1 | 0) == 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i5, 3);
  i5 = HEAP32[i6 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i5 + 8 | 0;
  i5 = i6 | 0;
  i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i7;
  if ((i7 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i3;
  return;
 } else {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i4, 0, 0);
  i4 = HEAP32[i6 >> 2] | 0;
  if ((i4 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i4 + 8 | 0;
  i4 = i6 | 0;
  i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  HEAP32[i4 >> 2] = i1;
  if ((i1 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore12RenderObject16repaintRectangleERKNS_10LayoutRectEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i1;
 while (1) {
  i8 = HEAP32[i7 + 8 >> 2] | 0;
  if ((i8 | 0) == 0) {
   break;
  } else {
   i7 = i8 | 0;
  }
 }
 if ((HEAP32[i7 + 20 >> 2] & 768 | 0) != 768) {
  STACKTOP = i4;
  return;
 }
 if (__ZNK7WebCore10RenderView8printingEv(i7) | 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i5;
 i9 = i2;
 HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 i9 = HEAP32[i7 + 192 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 0;
  i11 = 0;
 } else {
  i8 = i9 + 52 | 0;
  i10 = HEAP32[i8 >> 2] | 0;
  i11 = HEAP32[i8 + 4 >> 2] | 0;
 }
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + i10;
 i10 = i5 + 4 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + i11;
 i11 = __ZNK7WebCore12RenderObject19containerForRepaintEv(i1) | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 512 >> 2] & 15](i1, i11, i5, 0);
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i6, i5);
 __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i1, (i11 | 0) == 0 ? i7 : i11, i6, i3);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17StyleSurroundDataD2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10BorderDataD2Ev(i1 + 100 | 0);
 if ((HEAP8[i1 + 97 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i1 + 81 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 76 | 0);
 }
 if ((HEAP8[i1 + 73 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i1 + 65 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
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
function __ZN7WebCore12RenderObject15updateDragStateEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 20 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 & -16385 | (i2 & 1) << 14;
 HEAP32[i3 >> 2] = i5;
 do {
  if (((i4 & 16384 | 0) != 0 ^ i2) & (i4 & 128 | 0) == 0) {
   i6 = i1 + 4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   if ((i4 & 768 | 0) == 256) {
    i8 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i8 = HEAP32[i1 + 36 >> 2] | 0;
   }
   if ((HEAP32[i8 + 52 >> 2] & 67108864 | 0) == 0) {
    if ((HEAP32[i7 + 12 >> 2] & 2052 | 0) != 2052) {
     break;
    }
    if (!(__ZNK7WebCore7Element30rareDataChildrenAffectedByDragEv(i7) | 0)) {
     break;
    }
    i9 = HEAP32[i3 >> 2] | 0;
   } else {
    i9 = i5;
   }
   if ((i9 & 128 | 0) == 0) {
    i10 = HEAP32[i6 >> 2] | 0;
   } else {
    i10 = 0;
   }
   __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i10, 32768);
  }
 } while (0);
 i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 255](i1) | 0;
 if ((i10 | 0) == 0) {
  return;
 } else {
  i11 = i10;
 }
 while (1) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 436 >> 2] & 31](i11, i2);
  i11 = HEAP32[i11 + 16 >> 2] | 0;
  if ((i11 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore12RenderObject13addPDFURLRectEPNS_15GraphicsContextERKNS_10LayoutRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 48 | 0;
 if ((HEAP32[i3 + 8 >> 2] | 0) < 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i3 + 12 >> 2] | 0) < 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i1 + 20 >> 2] & 128 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 12 >> 2] & 516 | 0) != 516) {
  STACKTOP = i4;
  return;
 }
 i1 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i7, __ZN7WebCore9HTMLNames8hrefAttrE) | 0;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i5, HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0, i1 | 0);
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i6, i3);
 __ZN7WebCore15GraphicsContext13setURLForRectERKNS_3URLERKNS_7IntRectE(i2, i5, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i6 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore12RenderObject27offsetFromAncestorContainerEPS0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i1 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = 0;
 i9 = i5 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i6 | 0;
 i11 = i6 + 4 | 0;
 i12 = i2;
 i2 = 0;
 i13 = 0;
 while (1) {
  i14 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i12, 0, 0) | 0;
  if ((i14 | 0) == 0) {
   i15 = 5;
   break;
  }
  i16 = i14 | 0;
  FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i12 >> 2] | 0) + 468 >> 2] & 7](i6, i12, i16, i5, 0);
  i14 = HEAP32[i10 >> 2] | 0;
  i17 = i14 + i2 | 0;
  HEAP32[i7 >> 2] = i17;
  i18 = HEAP32[i11 >> 2] | 0;
  i19 = i18 + i13 | 0;
  HEAP32[i8 >> 2] = i19;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + i14;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + i18;
  if ((i16 | 0) == (i3 | 0)) {
   i15 = 6;
   break;
  } else {
   i12 = i16;
   i2 = i17;
   i13 = i19;
  }
 }
 if ((i15 | 0) == 5) {
  STACKTOP = i4;
  return;
 } else if ((i15 | 0) == 6) {
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore12RenderObject41invalidateContainerPreferredLogicalWidthsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 188 >> 2] & 255](i1) | 0) {
  i2 = __ZNK7WebCore12RenderObject15containingBlockEv(i1) | 0;
 } else {
  i2 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i1, 0, 0) | 0;
 }
 while (1) {
  if ((i2 | 0) == 0) {
   i3 = 15;
   break;
  }
  i1 = i2 | 0;
  i4 = i2 + 20 | 0;
  if ((HEAP32[i4 >> 2] & 32 | 0) != 0) {
   i3 = 13;
   break;
  }
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 188 >> 2] & 255](i1) | 0) {
   i5 = __ZNK7WebCore12RenderObject15containingBlockEv(i1) | 0;
  } else {
   i5 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i1, 0, 0) | 0;
  }
  i1 = HEAP32[i4 >> 2] | 0;
  if ((i5 | 0) == 0) {
   if ((i1 & 768 | 0) != 768) {
    i3 = 16;
    break;
   }
  }
  HEAP32[i4 >> 2] = i1 | 32;
  i1 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 22 & 7;
  if ((i1 | 0) == 6 | (i1 | 0) == 2) {
   i3 = 14;
   break;
  } else {
   i2 = i5;
  }
 }
 if ((i3 | 0) == 15) {
  return;
 } else if ((i3 | 0) == 13) {
  return;
 } else if ((i3 | 0) == 14) {
  return;
 } else if ((i3 | 0) == 16) {
  return;
 }
}
function __ZN7WebCore12RenderObject32handleDynamicFloatPositionChangeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 & 768 | 0) == 256) {
  i4 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i4 = HEAP32[i1 + 36 >> 2] | 0;
 }
 switch (HEAP32[i4 + 48 >> 2] & 31 | 0) {
 case 0:
 case 19:
 case 17:
 case 7:
 case 5:
 case 21:
  {
   i5 = 1024;
   break;
  }
 default:
  {
   i5 = 0;
  }
 }
 HEAP32[i2 >> 2] = i3 & -1025 | i5;
 i3 = (i5 | 0) != 0;
 i5 = i1 + 8 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if (!(i3 ^ (HEAP32[i2 + 20 >> 2] & 2097152 | 0) != 0)) {
  return;
 }
 if (i3) {
  i3 = __ZN7WebCore11RenderBlock43createAnonymousWithParentRendererAndDisplayEPKNS_12RenderObjectENS_8EDisplayE(i2 | 0, 1) | 0;
  __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(HEAP32[i5 >> 2] | 0, i3 | 0, i1, 0);
  __ZN7WebCore13RenderElement19removeChildInternalERNS_12RenderObjectENS0_18NotifyChildrenTypeE(HEAP32[i5 >> 2] | 0, i1, 0);
  __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i3 | 0, i1, 0, 0);
  return;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 804 >> 2] & 31](i2, i1);
  return;
 }
}
function __ZN7WebCore10BorderDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP8[i1 + 97 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i1 + 81 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 76 | 0);
 }
 if ((HEAP8[i1 + 73 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i1 + 65 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) != 10) {
  i2 = i1 + 32 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  i4 = i3 | 0;
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i4);
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3 | 0;
 __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i4);
 return;
}
function __ZN7WebCore12RenderObject34destroyAndCleanupAnonymousWrappersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) != 0) {
  i2 = i1;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 604 >> 2] & 31](i1);
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i1);
  return;
 }
 i2 = i1 + 8 | 0;
 i3 = i1;
 while (1) {
  i4 = HEAP32[i2 >> 2] | 0;
  if ((i4 | 0) == 0) {
   break;
  }
  i5 = i4 | 0;
  if ((HEAP32[i4 + 20 >> 2] & 128 | 0) == 0) {
   break;
  }
  i6 = i4;
  if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 188 >> 2] & 255](i5) | 0)) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 204 >> 2] & 255](i5) | 0)) {
    break;
   }
  }
  if ((HEAP32[i4 + 28 >> 2] | 0) != (i1 | 0)) {
   break;
  }
  if ((HEAP32[i4 + 32 >> 2] | 0) == (i1 | 0)) {
   i2 = i4 + 8 | 0;
   i3 = i5;
  } else {
   break;
  }
 }
 i2 = i3;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 604 >> 2] & 31](i3);
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i3);
 return;
}
function __ZNK7WebCore12RenderObject29adjustRectForOutlineAndShadowERNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 492 >> 2] & 255](i1) | 0) + 12 >> 2] | 0;
 i4 = HEAP32[i3 + 64 >> 2] | 0;
 if ((i4 & 2013265920 | 0) == 0) {
  i5 = 0;
  i6 = 0;
 } else {
  i5 = HEAP32[i3 + 68 >> 2] | 0;
  i6 = i4 >>> 1 & 65535;
 }
 i4 = i5 + i6 | 0;
 i6 = (i4 | 0) > 0 ? i4 & 65535 : 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i7 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i7 = HEAP32[i1 + 36 >> 2] | 0;
 }
 i1 = HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 100 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i7 = i2 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) - i6;
  i7 = i2 + 8 | 0;
  i4 = i6 << 1;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i4;
  i7 = i2 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) - i6;
  i7 = i2 + 12 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i4;
  return;
 } else {
  __ZNK7WebCore10ShadowData19adjustRectForShadowERNS_10LayoutRectEi(i1, i2, i6);
  return;
 }
}
function __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i8 = i7 | 0;
 i9 = i7 + 64 | 0;
 __ZNK7WebCore9FloatQuad11boundingBoxEv(i9, i3);
 i10 = i8;
 d11 = +(+HEAPF32[i9 >> 2] + +HEAPF32[i9 + 8 >> 2] * +.5);
 d12 = +(+HEAPF32[i9 + 4 >> 2] + +HEAPF32[i9 + 12 >> 2] * +.5);
 HEAPF32[i10 >> 2] = d11;
 HEAPF32[i10 + 4 >> 2] = d12;
 i10 = i8 + 8 | 0;
 _memcpy(i10 | 0, i3 | 0, 32) | 0;
 i3 = i8 + 40 | 0;
 _memset(i3 | 0, 0, 13) | 0;
 HEAP8[i8 + 53 | 0] = 1;
 HEAP8[i8 + 54 | 0] = 1;
 HEAP32[i8 + 56 >> 2] = 0;
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 588 >> 2] & 7](i2, i4, i8, i5 | 6, i6);
 __ZN7WebCore14TransformState7flattenEPb(i8, 0);
 _memcpy(i1 | 0, i10 | 0, 32) | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 __ZN3WTF8fastFreeEPv(i10);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore12RenderObject16paintingRootRectERNS_10LayoutRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 __ZNK7WebCore12RenderObject23absoluteBoundingBoxRectEb(i5, i2, 0);
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i1 + 4 >> 2] = i7;
 i7 = i5 + 8 | 0;
 i5 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i1 + 12 >> 2] = i5;
 i5 = i3;
 i3 = i1;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] & 255](i2) | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 } else {
  i8 = i3;
 }
 while (1) {
  __ZN7WebCore12RenderObject23addAbsoluteRectForLayerERNS_10LayoutRectE(i8, i1);
  i8 = HEAP32[i8 + 16 >> 2] | 0;
  if ((i8 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore12RenderObject14caretMaxOffsetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 i3 = (i2 & 128 | 0) == 0;
 if ((i2 & 2048 | 0) != 0) {
  if (!i3) {
   i4 = 1;
   return i4 | 0;
  }
  i2 = HEAP32[i1 + 4 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i4 = 1;
   return i4 | 0;
  }
  if ((HEAP32[i2 + 12 >> 2] & 2 | 0) == 0) {
   i5 = 0;
  } else {
   i5 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i2) | 0;
  }
  i4 = i5 >>> 0 > 1 >>> 0 ? i5 : 1;
  return i4 | 0;
 }
 if (!i3) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i3 + 12 >> 2] & 4 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = HEAP32[i3 + 44 >> 2] | 0;
 i3 = HEAP32[__ZN7WebCore9HTMLNames5hrTagE >> 2] | 0;
 if ((i1 | 0) == (i3 | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i3 + 12 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0) | 0;
 return i4 | 0;
}
function __ZN7WebCore12RenderObject16insertedIntoTreeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 8 | 0;
 do {
  if ((HEAP32[i1 + 20 >> 2] & 64 | 0) == 0) {
   i3 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i3 + 20 >> 2] & 2097152 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 644 >> 2] & 31](i3, i1);
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 } else {
  i4 = i3;
 }
 while (1) {
  i5 = i4 | 0;
  i6 = i4;
  if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i5) | 0)) {
   break;
  }
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 252 >> 2] & 255](i5) | 0) {
   break;
  }
  i3 = HEAP32[i4 + 8 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i7 = 14;
   break;
  } else {
   i4 = i3;
  }
 }
 if ((i7 | 0) == 14) {
  return;
 }
 if ((i4 | 0) == 0 | (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 252 >> 2] & 255](i5) | 0) ^ 1) {
  return;
 }
 __ZN7WebCore21RenderNamedFlowThread12addFlowChildEPNS_12RenderObjectE(i4, i1);
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
function __ZN7WebCore12RenderObject23addAbsoluteRectForLayerERNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 32768 | 0) != 0) {
  i6 = i5 | 0;
  __ZNK7WebCore12RenderObject23absoluteBoundingBoxRectEb(i5, i1, 0);
  i7 = HEAP32[i6 + 4 >> 2] | 0;
  HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i4 + 4 >> 2] = i7;
  i7 = i5 + 8 | 0;
  i5 = HEAP32[i7 + 4 >> 2] | 0;
  HEAP32[i4 + 8 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i4 + 12 >> 2] = i5;
  __ZN7WebCore10LayoutRect5uniteERKS0_(i2, i4);
 }
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 255](i1) | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 } else {
  i8 = i4;
 }
 while (1) {
  __ZN7WebCore12RenderObject23addAbsoluteRectForLayerERNS_10LayoutRectE(i8, i2);
  i8 = HEAP32[i8 + 16 >> 2] | 0;
  if ((i8 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore12RenderObject19absoluteToLocalQuadERKNS_9FloatQuadEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i6 = i5 | 0;
 i7 = i5 + 64 | 0;
 __ZNK7WebCore9FloatQuad11boundingBoxEv(i7, i3);
 i8 = i6;
 d9 = +(+HEAPF32[i7 >> 2] + +HEAPF32[i7 + 8 >> 2] * +.5);
 d10 = +(+HEAPF32[i7 + 4 >> 2] + +HEAPF32[i7 + 12 >> 2] * +.5);
 HEAPF32[i8 >> 2] = d9;
 HEAPF32[i8 + 4 >> 2] = d10;
 i8 = i6 + 8 | 0;
 _memcpy(i8 | 0, i3 | 0, 32) | 0;
 i3 = i6 + 40 | 0;
 _memset(i3 | 0, 0, 13) | 0;
 HEAP8[i6 + 53 | 0] = 1;
 HEAP8[i6 + 54 | 0] = 1;
 HEAP32[i6 + 56 >> 2] = 1;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 592 >> 2] & 31](i2, i4, i6);
 __ZN7WebCore14TransformState7flattenEPb(i6, 0);
 _memcpy(i1 | 0, i8 | 0, 32) | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF8fastFreeEPv(i8);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore12RenderObject7hitTestERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestFilterE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0;
 do {
  if ((i6 | 0) == 1) {
   i7 = 0;
  } else {
   i8 = i1;
   if (FUNCTION_TABLE_iiiiiii[HEAP32[(HEAP32[i8 >> 2] | 0) + 460 >> 2] & 3](i1, i2, i3, i4, i5, 4) | 0) {
    i9 = 1;
    return i9 | 0;
   }
   if (FUNCTION_TABLE_iiiiiii[HEAP32[(HEAP32[i8 >> 2] | 0) + 460 >> 2] & 3](i1, i2, i3, i4, i5, 3) | 0) {
    i9 = 1;
    return i9 | 0;
   } else {
    i7 = FUNCTION_TABLE_iiiiiii[HEAP32[(HEAP32[i8 >> 2] | 0) + 460 >> 2] & 3](i1, i2, i3, i4, i5, 2) | 0;
    break;
   }
  }
 } while (0);
 if ((i6 | 0) == 2 | i7) {
  i9 = i7;
  return i9 | 0;
 }
 i9 = FUNCTION_TABLE_iiiiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 460 >> 2] & 3](i1, i2, i3, i4, i5, 0) | 0;
 return i9 | 0;
}
function __ZNK7WebCore12RenderObject19offsetFromContainerEPS0_RKNS_11LayoutPointEPb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i1 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 520 >> 2] & 31](i3, i1, i4);
 if ((HEAP32[i3 + 20 >> 2] & 65536 | 0) != 0) {
  __ZNK7WebCore9RenderBox21scrolledContentOffsetEv(i7, i3);
  i4 = HEAP32[i7 + 4 >> 2] | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) - (HEAP32[i7 >> 2] | 0);
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) - i4;
 }
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i2 + 20 >> 2] & 4194304 | 0) == 0) {
  i10 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 248 >> 2] & 255](i3) | 0) & 1;
 } else {
  i10 = 1;
 }
 HEAP8[i5] = i10;
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore12RenderObject21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i1 = i5 + 20 | 0;
 do {
  if ((HEAP32[i5 + 24 >> 2] & 32 | 0) != 0) {
   if ((HEAP32[i1 >> 2] & 4194304 | 0) == 0) {
    break;
   }
   __ZNK7WebCore11RenderBlock20adjustRectForColumnsERNS_10LayoutRectE(i5, i3);
  }
 } while (0);
 i6 = i5 | 0;
 do {
  if ((HEAP32[i1 >> 2] & 65536 | 0) != 0) {
   __ZNK7WebCore9RenderBox40applyCachedClipAndScrollOffsetForRepaintERNS_10LayoutRectE(i5, i3);
   if ((HEAP32[i3 + 8 >> 2] | 0) < 1) {
    return;
   }
   if ((HEAP32[i3 + 12 >> 2] | 0) >= 1) {
    break;
   }
   return;
  }
 } while (0);
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i5 >> 2] | 0) + 512 >> 2] & 15](i6, i2, i3, i4);
 return;
}
function __ZNK7WebCore12RenderObject21localToContainerPointERKNS_10FloatPointEPKNS_22RenderLayerModelObjectEjPb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i8 = i7 | 0;
 i9 = i3;
 i3 = i8;
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i3 + 4 >> 2] = i10;
 _memset(i8 + 8 | 0, 0, 45) | 0;
 HEAP8[i8 + 53 | 0] = 1;
 HEAP8[i8 + 54 | 0] = 0;
 HEAP32[i8 + 56 >> 2] = 0;
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 588 >> 2] & 7](i2, i4, i8, i5 | 6, i6);
 __ZN7WebCore14TransformState7flattenEPb(i8, 0);
 i6 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i6 + 4 >> 2] = i1;
 i1 = HEAP32[i8 + 40 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i7;
 return;
}
function __ZNK7WebCore12RenderObject22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 if ((HEAP32[i7 + 20 >> 2] & 65536 | 0) != 0) {
  __ZNK7WebCore9RenderBox21scrolledContentOffsetEv(i6, i7);
  i9 = -(HEAP32[i6 + 4 >> 2] | 0) | 0;
  HEAP32[i4 >> 2] = -(HEAP32[i6 >> 2] | 0);
  HEAP32[i4 + 4 >> 2] = i9;
 }
 __ZN7WebCore17RenderGeometryMap4pushEPKNS_12RenderObjectERKNS_10LayoutSizeEbbbb(i3, i1, i5, (HEAP32[i1 + 20 >> 2] & 4194304 | 0) != 0, 0, 0, 0);
 i8 = i7 | 0;
 STACKTOP = i2;
 return i8 | 0;
}
function __ZN7WebCore12RenderObject21columnNumberForOffsetEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(__ZNK7WebCore12RenderObject15containingBlockEv(i1) | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 i1 = HEAP32[(HEAP32[(HEAP32[i3 + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((HEAP32[i1 + 124 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = __ZNK7WebCore11RenderBlock10columnInfoEv(i3 | 0) | 0;
 if ((i5 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 1) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = (HEAP32[i1 + 136 >> 2] | 0) + (HEAP32[i1 + 132 >> 2] | 0) | 0;
 if ((HEAP8[i5 + 12 | 0] & 1) == 0) {
  i4 = ((i3 - i2 | 0) >>> 0) / (i3 >>> 0) & -1;
  return i4 | 0;
 } else {
  i4 = (i2 >>> 0) / (i3 >>> 0) & -1;
  return i4 | 0;
 }
 return 0;
}
function __ZNK7WebCore12RenderObject13isHTMLMarqueeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 128 | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i4 = HEAP32[i3 + 12 >> 2] | 0;
 i5 = i3 + 32 | 0;
 if ((i4 & 2048 | 0) == 0) {
  i6 = i5 | 0;
 } else {
  i6 = HEAP32[i5 >> 2] | 0;
 }
 if ((HEAP32[i6 >> 2] | 0) != (i1 | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 if ((i4 & 4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i4 = HEAP32[i3 + 44 >> 2] | 0;
 i3 = HEAP32[__ZN7WebCore9HTMLNames10marqueeTagE >> 2] | 0;
 if ((i4 | 0) == (i3 | 0)) {
  i2 = 1;
  return i2 | 0;
 }
 if ((HEAP32[i4 + 12 >> 2] | 0) != (HEAP32[i3 + 12 >> 2] | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0);
 return i2 | 0;
}
function __ZNK7WebCore12RenderObject7repaintEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i1;
 while (1) {
  i7 = HEAP32[i6 + 8 >> 2] | 0;
  if ((i7 | 0) == 0) {
   break;
  } else {
   i6 = i7 | 0;
  }
 }
 if ((HEAP32[i6 + 20 >> 2] & 768 | 0) != 768) {
  STACKTOP = i3;
  return;
 }
 if (__ZNK7WebCore10RenderView8printingEv(i6) | 0) {
  STACKTOP = i3;
  return;
 }
 i7 = __ZNK7WebCore12RenderObject19containerForRepaintEv(i1) | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 500 >> 2] & 31](i5, i1, i7);
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i4, i5);
 __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i1, (i7 | 0) == 0 ? i6 : i7, i4, i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12RenderObject26removeFromRenderFlowThreadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 805306368 | 0) == 0) {
  return;
 }
 i2 = HEAP32[(__ZN7WebCore10RenderView20flowThreadControllerEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0) + 4 >> 2] | 0;
 L4 : do {
  if ((i2 | 0) == 0) {
   i3 = i1;
   while (1) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 248 >> 2] & 255](i3) | 0) {
     break;
    }
    i4 = __ZNK7WebCore12RenderObject15containingBlockEv(i3) | 0;
    if ((i4 | 0) == 0) {
     i5 = 0;
     break L4;
    } else {
     i3 = i4 | 0;
    }
   }
   i5 = i3;
  } else {
   i5 = i2;
  }
 } while (0);
 __ZN7WebCore12RenderObject35removeFromRenderFlowThreadRecursiveEPNS_16RenderFlowThreadE(i1, i5);
 return;
}
function __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i3;
 i3 = i6;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i3 + 4 >> 2] = i8;
 _memset(i6 + 8 | 0, 0, 45) | 0;
 HEAP8[i6 + 53 | 0] = 1;
 HEAP8[i6 + 54 | 0] = 0;
 HEAP32[i6 + 56 >> 2] = 0;
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 588 >> 2] & 7](i2, 0, i6, i4 | 4, 0);
 __ZN7WebCore14TransformState7flattenEPb(i6, 0);
 i4 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i1;
 i1 = HEAP32[i6 + 40 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore12RenderObject14localTransformEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (!(HEAP8[H_BASE + 656 | 0] | 0)) {
  __ZN7WebCore15AffineTransformC1Ev(H_BASE + 712);
  HEAP8[H_BASE + 656 | 0] = 1;
 }
 i2 = i1;
 HEAP32[i2 >> 2] = HEAP32[H_BASE + 712 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[H_BASE + 716 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[H_BASE + 720 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[H_BASE + 724 >> 2];
 HEAP32[i2 + 16 >> 2] = HEAP32[H_BASE + 728 >> 2];
 HEAP32[i2 + 20 >> 2] = HEAP32[H_BASE + 732 >> 2];
 HEAP32[i2 + 24 >> 2] = HEAP32[H_BASE + 736 >> 2];
 HEAP32[i2 + 28 >> 2] = HEAP32[H_BASE + 740 >> 2];
 HEAP32[i2 + 32 >> 2] = HEAP32[H_BASE + 744 >> 2];
 HEAP32[i2 + 36 >> 2] = HEAP32[H_BASE + 748 >> 2];
 HEAP32[i2 + 40 >> 2] = HEAP32[H_BASE + 752 >> 2];
 HEAP32[i2 + 44 >> 2] = HEAP32[H_BASE + 756 >> 2];
 return;
}
function __ZNK7WebCore12RenderObject15absoluteToLocalERKNS_10FloatPointEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i3;
 i3 = i6;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i3 + 4 >> 2] = i8;
 _memset(i6 + 8 | 0, 0, 45) | 0;
 HEAP8[i6 + 53 | 0] = 1;
 HEAP8[i6 + 54 | 0] = 0;
 HEAP32[i6 + 56 >> 2] = 1;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 592 >> 2] & 31](i2, i4, i6);
 __ZN7WebCore14TransformState7flattenEPb(i6, 0);
 i4 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i1;
 i1 = HEAP32[i6 + 40 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i5;
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
function __ZNK7WebCore12RenderObject29shouldRespectImageOrientationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i3 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP8[i3 + 1576 | 0] & 4) != 0) {
  i4 = 1;
  return i4 | 0;
 }
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 36 >> 2] | 0) + 190 | 0] & 2) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 20 >> 2] & 128 | 0) != 0 | (i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i2 + 12 >> 2] & 16 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0) | 0;
 return i4 | 0;
}
function __ZNK7WebCore12RenderObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i7 >> 2] | 0) + 592 >> 2] & 31](i7 | 0, i2, i3);
 if ((HEAP32[i7 + 20 >> 2] & 65536 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore9RenderBox21scrolledContentOffsetEv(i6, i7);
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 __ZN7WebCore14TransformState4moveERKNS_10LayoutSizeENS0_21TransformAccumulationE(i3, i5, 0);
 STACKTOP = i4;
 return;
}
function ___remdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i8 = ((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i9 = i4 >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i10 = ((i4 | 0) < 0 ? -1 : 0) >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i11 = _i64Subtract(i7 ^ i1, i8 ^ i2, i7, i8) | 0;
 i2 = tempRet0;
 ___udivmoddi4(i11, i2, _i64Subtract(i9 ^ i3, i10 ^ i4, i9, i10) | 0, tempRet0, i6) | 0;
 i10 = _i64Subtract(HEAP32[i6 >> 2] ^ i7, HEAP32[i6 + 4 >> 2] ^ i8, i7, i8) | 0;
 i8 = tempRet0;
 STACKTOP = i5;
 return (tempRet0 = i8, i10) | 0;
}
function __ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 500 >> 2] & 31](i1, i2, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - i3;
 i4 = i1 + 8 | 0;
 i2 = i3 << 1;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + i2;
 i4 = i1 + 4 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - i3;
 i3 = i1 + 12 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + i2;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = i1 + 20 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5 & -33 | (i2 & 1) << 5;
 if (!((i5 & 32 | 0) == 0 & i2 & (i3 | 0) == 1)) {
  return;
 }
 do {
  if ((i5 & 768 | 0) != 256) {
   if ((i5 & 768 | 0) == 256) {
    i6 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i6 = HEAP32[i1 + 36 >> 2] | 0;
   }
   i3 = (HEAP32[i6 + 48 >> 2] | 0) >>> 22 & 7;
   if (!((i3 | 0) == 6 | (i3 | 0) == 2)) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore12RenderObject41invalidateContainerPreferredLogicalWidthsEv(i1);
 return;
}
function __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[(__ZN7WebCore10RenderView20flowThreadControllerEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0) + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
 } else {
  i4 = i2;
  return i4 | 0;
 }
 while (1) {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 248 >> 2] & 255](i3) | 0) {
   break;
  }
  i2 = __ZNK7WebCore12RenderObject15containingBlockEv(i3) | 0;
  if ((i2 | 0) == 0) {
   i4 = 0;
   i5 = 6;
   break;
  } else {
   i3 = i2 | 0;
  }
 }
 if ((i5 | 0) == 6) {
  return i4 | 0;
 }
 i4 = i3;
 return i4 | 0;
}
function __ZNK7WebCore12RenderObject43fixedPositionedWithNamedFlowContainingBlockEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 & 805306368 | 0) != 268435456) {
  i3 = 0;
  return i3 | 0;
 }
 if ((i2 & 768 | 0) == 256) {
  i4 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i4 = HEAP32[i1 + 36 >> 2] | 0;
 }
 if ((HEAP32[i4 + 48 >> 2] & 29360128 | 0) != 25165824) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = __ZNK7WebCore12RenderObject15containingBlockEv(i1) | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 248 >> 2] & 255](i4 | 0) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i4 + 20 >> 2] & 25165824 | 0) == 16777216;
 return i3 | 0;
}
function __ZNK7WebCore12RenderObject14nextInPreOrderEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 255](i1) | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  return i4 | 0;
 }
 if ((i1 | 0) == (i2 | 0)) {
  i4 = 0;
  return i4 | 0;
 } else {
  i5 = i1;
 }
 while (1) {
  i1 = HEAP32[i5 + 16 >> 2] | 0;
  if ((i1 | 0) != 0) {
   i4 = i1;
   i6 = 6;
   break;
  }
  i1 = HEAP32[i5 + 8 >> 2] | 0;
  i3 = i1 | 0;
  if ((i1 | 0) == 0 | (i3 | 0) == (i2 | 0)) {
   i4 = 0;
   i6 = 8;
   break;
  } else {
   i5 = i3;
  }
 }
 if ((i6 | 0) == 6) {
  return i4 | 0;
 } else if ((i6 | 0) == 8) {
  return i4 | 0;
 }
 return 0;
}
function __ZNK7WebCore12RenderObject28renderNamedFlowThreadWrapperEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 } else {
  i3 = i1;
 }
 while (1) {
  i4 = i3;
  if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i3) | 0)) {
   break;
  }
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 252 >> 2] & 255](i3) | 0) {
   break;
  }
  i1 = HEAP32[i3 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i2 = 0;
   i5 = 8;
   break;
  } else {
   i3 = i1 | 0;
  }
 }
 if ((i5 | 0) == 8) {
  return i2 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 252 >> 2] & 255](i3) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = i3;
 return i2 | 0;
}
function __ZNK7WebCore12RenderObject23enclosingBoxModelObjectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 do {
  if ((HEAP32[i1 + 20 >> 2] & 768 | 0) != 256) {
   if ((HEAP32[i1 + 24 >> 2] & 2 | 0) == 0) {
    break;
   }
   i2 = i1;
   return i2 | 0;
  }
 } while (0);
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 } else {
  i4 = i3;
 }
 while (1) {
  if ((HEAP32[i4 + 20 >> 2] & 768 | 0) != 256) {
   if ((HEAP32[i4 + 24 >> 2] & 2 | 0) != 0) {
    break;
   }
  }
  i3 = HEAP32[i4 + 8 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i2 = 0;
   i5 = 12;
   break;
  } else {
   i4 = i3;
  }
 }
 if ((i5 | 0) == 12) {
  return i2 | 0;
 }
 i2 = i4;
 return i2 | 0;
}
function __ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i3 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i3 = HEAP32[i1 + 36 >> 2] | 0;
 }
 if ((HEAP32[i3 + 40 >> 2] & 6144 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP8[i3 + 224 | 0] & 1) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP8[i3 + 1433 | 0] & 1) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (__ZNK7WebCore10ScrollView11isOffscreenEv(__ZNK7WebCore8Document4viewEv(i3) | 0) | 0) ^ 1;
 return i4 | 0;
}
function __ZN7WebCore12RenderObjectC2ERNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 i3 = i1 + 20 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -128;
 i1 = i2 + 20 | 0;
 HEAP32[i3 >> 2] = ((HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] | 0) == (i2 | 0)) << 7 | 9216;
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] | 0;
 if ((i3 | 0) == (i2 | 0)) {
  return;
 }
 i2 = (HEAP32[i3 + 1584 >> 2] | 0) + 136 | 0;
 i3 = _i64Add(HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0, 1, 0) | 0;
 HEAP32[i2 >> 2] = i3;
 HEAP32[i2 + 4 >> 2] = tempRet0;
 return;
}
function __ZNK7WebCore12RenderObject14nextInPreOrderEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 255](i1) | 0;
 if ((i2 | 0) != 0) {
  i3 = i2;
  return i3 | 0;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2;
  return i3 | 0;
 }
 i2 = i1 + 8 | 0;
 while (1) {
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = i1 | 0;
   i4 = 10;
   break;
  }
  i5 = HEAP32[i1 + 16 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i2 = i1 + 8 | 0;
  } else {
   i3 = i5;
   i4 = 7;
   break;
  }
 }
 if ((i4 | 0) == 7) {
  return i3 | 0;
 } else if ((i4 | 0) == 10) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore12RenderObject38setFlowThreadStateIncludingDescendantsENS0_15FlowThreadStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 20 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -805306369 | i2 << 28 & 805306368;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 255](i1) | 0;
 if ((i3 | 0) == 0) {
  return;
 } else {
  i4 = i3;
 }
 while (1) {
  if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 248 >> 2] & 255](i4) | 0)) {
   __ZN7WebCore12RenderObject38setFlowThreadStateIncludingDescendantsENS0_15FlowThreadStateE(i4, i2);
  }
  i4 = HEAP32[i4 + 16 >> 2] | 0;
  if ((i4 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZNK7WebCore12RenderObject8isLegendEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 128 | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i3 + 12 >> 2] & 4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i1 = HEAP32[i3 + 44 >> 2] | 0;
 i3 = HEAP32[__ZN7WebCore9HTMLNames9legendTagE >> 2] | 0;
 if ((i1 | 0) == (i3 | 0)) {
  i2 = 1;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i3 + 12 >> 2] | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0);
 return i2 | 0;
}
function ___divdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i6 = ((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i7 = i4 >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i8 = ((i4 | 0) < 0 ? -1 : 0) >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i9 = _i64Subtract(i5 ^ i1, i6 ^ i2, i5, i6) | 0;
 i2 = tempRet0;
 i1 = i7 ^ i5;
 i5 = i8 ^ i6;
 i6 = _i64Subtract((___udivmoddi4(i9, i2, _i64Subtract(i7 ^ i3, i8 ^ i4, i7, i8) | 0, tempRet0, 0) | 0) ^ i1, tempRet0 ^ i5, i1, i5) | 0;
 return (tempRet0 = tempRet0, i6) | 0;
}
function __ZN7WebCore12RenderObject23collectAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 452 >> 2] & 31](i1, i2);
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3;
 while (1) {
  __ZN7WebCore12RenderObject23collectAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE(i1, i2);
  i1 = HEAP32[i1 + 16 >> 2] | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZNK7WebCore12RenderObject31shouldUseTransformFromContainerEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 do {
  if ((HEAP32[i1 + 20 >> 2] & 32768 | 0) != 0) {
   if ((HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + 172 >> 2] | 0) == 0) {
    break;
   } else {
    i3 = 1;
   }
   return i3 | 0;
  }
 } while (0);
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 20 >> 2] & 768 | 0) == 256) {
  i4 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i4 = HEAP32[i2 + 36 >> 2] | 0;
 }
 i3 = +HEAPF32[(HEAP32[i4 + 20 >> 2] | 0) + 16 >> 2] > +0;
 return i3 | 0;
}
function __ZNK7WebCore12RenderObject27nextInPreOrderAfterChildrenEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i1 | 0) == (i2 | 0)) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i1;
 }
 while (1) {
  i1 = HEAP32[i4 + 16 >> 2] | 0;
  if ((i1 | 0) != 0) {
   i3 = i1;
   i5 = 5;
   break;
  }
  i1 = HEAP32[i4 + 8 >> 2] | 0;
  i6 = i1 | 0;
  if ((i1 | 0) == 0 | (i6 | 0) == (i2 | 0)) {
   i3 = 0;
   i5 = 6;
   break;
  } else {
   i4 = i6;
  }
 }
 if ((i5 | 0) == 5) {
  return i3 | 0;
 } else if ((i5 | 0) == 6) {
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore12RenderObject27nextInPreOrderAfterChildrenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2;
  return i3 | 0;
 }
 i2 = i1 + 8 | 0;
 while (1) {
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = i1 | 0;
   i4 = 7;
   break;
  }
  i5 = HEAP32[i1 + 16 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i2 = i1 + 8 | 0;
  } else {
   i3 = i5;
   i4 = 8;
   break;
  }
 }
 if ((i4 | 0) == 7) {
  return i3 | 0;
 } else if ((i4 | 0) == 8) {
  return i3 | 0;
 }
 return 0;
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
function __ZNK7WebCore12RenderObject14firstLeafChildEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 255](i1) | 0;
 while (1) {
  if ((i2 | 0) == 0) {
   i3 = 0;
   i4 = 6;
   break;
  }
  i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] & 255](i2) | 0;
  if ((i1 | 0) == 0) {
   i3 = i2;
   i4 = 5;
   break;
  } else {
   i2 = i1;
  }
 }
 if ((i4 | 0) == 5) {
  return i3 | 0;
 } else if ((i4 | 0) == 6) {
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore12RenderObject13lastLeafChildEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] & 255](i1) | 0;
 while (1) {
  if ((i2 | 0) == 0) {
   i3 = 0;
   i4 = 5;
   break;
  }
  i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] & 255](i2) | 0;
  if ((i1 | 0) == 0) {
   i3 = i2;
   i4 = 6;
   break;
  } else {
   i2 = i1;
  }
 }
 if ((i4 | 0) == 5) {
  return i3 | 0;
 } else if ((i4 | 0) == 6) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore12RenderObject9setParentEPNS_13RenderElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 + 8 >> 2] = i2;
 if ((i2 | 0) == 0) {
  i3 = 0;
 } else {
  i3 = (HEAP32[i2 + 20 >> 2] | 0) >>> 28 & 3;
 }
 if ((i3 | 0) == ((HEAP32[i1 + 20 >> 2] | 0) >>> 28 & 3 | 0)) {
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 248 >> 2] & 255](i1) | 0) {
  return;
 }
 __ZN7WebCore12RenderObject38setFlowThreadStateIncludingDescendantsENS0_15FlowThreadStateE(i1, i3);
 return;
}
function __ZNK7WebCore12RenderObject18previousInPreOrderEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i1 | 0) == (i2 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = HEAP32[i1 + 8 >> 2] | 0;
  return i3 | 0;
 } else {
  i1 = i2;
  while (1) {
   i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] & 255](i1) | 0;
   if ((i2 | 0) == 0) {
    i3 = i1;
    break;
   } else {
    i1 = i2;
   }
  }
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore12RenderObject7childAtEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 255](i1) | 0;
 if ((i2 | 0) != 0 & (i3 | 0) != 0) {
  i4 = i3;
  i5 = 0;
 } else {
  i6 = i3;
  return i6 | 0;
 }
 while (1) {
  i3 = HEAP32[i4 + 16 >> 2] | 0;
  i1 = i5 + 1 | 0;
  if (i1 >>> 0 < i2 >>> 0 & (i3 | 0) != 0) {
   i4 = i3;
   i5 = i1;
  } else {
   i6 = i3;
   break;
  }
 }
 return i6 | 0;
}
function __ZNK7WebCore12RenderObject12enclosingBoxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 512 | 0) != 0) {
  i2 = i1;
  return i2 | 0;
 }
 i3 = i1 + 8 | 0;
 while (1) {
  i4 = HEAP32[i3 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i2 = 0;
   i5 = 9;
   break;
  }
  if ((HEAP32[i4 + 20 >> 2] & 512 | 0) == 0) {
   i3 = i4 + 8 | 0;
  } else {
   break;
  }
 }
 if ((i5 | 0) == 9) {
  return i2 | 0;
 }
 i2 = i4;
 return i2 | 0;
}
function __ZNK7WebCore12RenderObject20hasOutlineAnnotationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 128 | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i3 + 12 >> 2] & 512 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[(HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) != 0;
 return i2 | 0;
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
function __ZNK7WebCore12RenderObject14isDescendantOfEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 L1 : do {
  if ((i1 | 0) == 0) {
   i3 = 0;
  } else {
   i4 = i1;
   while (1) {
    if ((i4 | 0) == (i2 | 0)) {
     i3 = 1;
     break L1;
    }
    i5 = HEAP32[i4 + 8 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i3 = 0;
     break;
    } else {
     i4 = i5 | 0;
    }
   }
  }
 } while (0);
 return i3 | 0;
}
function __ZNK7WebCore12RenderObject18previousInPreOrderEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = HEAP32[i1 + 8 >> 2] | 0;
  return i3 | 0;
 } else {
  i1 = i2;
  while (1) {
   i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] & 255](i1) | 0;
   if ((i2 | 0) == 0) {
    i3 = i1;
    break;
   } else {
    i1 = i2;
   }
  }
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore12RenderObject33canUpdateSelectionOnRootLineBoxesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 31 | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = __ZNK7WebCore12RenderObject15containingBlockEv(i1) | 0;
 if ((i3 | 0) == 0) {
  i2 = 1;
  return i2 | 0;
 }
 i1 = HEAP32[i3 + 20 >> 2] | 0;
 if ((i1 & 29 | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (i1 & 2 | 0) == 0;
 return i2 | 0;
}
function __ZNK7WebCore12RenderObject8isRootedEPPNS_10RenderViewE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1;
 while (1) {
  i1 = HEAP32[i3 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   break;
  } else {
   i3 = i1 | 0;
  }
 }
 if ((HEAP32[i3 + 20 >> 2] & 768 | 0) != 768) {
  i4 = 0;
  return i4 | 0;
 }
 if ((i2 | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 }
 HEAP32[i2 >> 2] = i3;
 i4 = 1;
 return i4 | 0;
}
function __ZNK7WebCore12RenderObject27checkForRepaintDuringLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP8[(__ZNK7WebCore8Document4viewEv(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) + 224 | 0] & 1) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i3 & 32768 | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (i3 & 1048576 | 0) != 0;
 return i2 | 0;
}
function ___muldsi3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 & 65535;
 i4 = i2 & 65535;
 i5 = Math_imul(i4, i3) | 0;
 i6 = i1 >>> 16;
 i1 = (i5 >>> 16) + (Math_imul(i4, i6) | 0) | 0;
 i4 = i2 >>> 16;
 i2 = Math_imul(i4, i3) | 0;
 return (tempRet0 = (i1 >>> 16) + (Math_imul(i4, i6) | 0) + (((i1 & 65535) + i2 | 0) >>> 16) | 0, i1 + i2 << 16 | i5 & 65535 | 0) | 0;
}
function __ZN7WebCore12RenderObjectD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 136 | 0;
 i3 = _i64Add(HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0, -1, -1) | 0;
 HEAP32[i2 >> 2] = i3;
 HEAP32[i2 + 4 >> 2] = tempRet0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function _llvm_cttz_i32(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP8[cttz_i8 + (i1 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 | 0;
 i2 = HEAP8[cttz_i8 + (i1 >> 8 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 8 | 0;
 i2 = HEAP8[cttz_i8 + (i1 >> 16 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 16 | 0;
 return (HEAP8[cttz_i8 + (i1 >>> 24) | 0] | 0) + 24 | 0;
}
function _llvm_ctlz_i32(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP8[ctlz_i8 + (i1 >>> 24) | 0] | 0;
 if ((i2 | 0) < 8) return i2 | 0;
 i2 = HEAP8[ctlz_i8 + (i1 >> 16 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 8 | 0;
 i2 = HEAP8[ctlz_i8 + (i1 >> 8 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 16 | 0;
 return (HEAP8[ctlz_i8 + (i1 & 255) | 0] | 0) + 24 | 0;
}
function __ZNK7WebCore12RenderObject21createVisiblePositionERKNS_8PositionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, i2, 0, 1);
  return;
 } else {
  __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i3, 1);
  return;
 }
}
function __ZN7WebCore12RenderObjectD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 136 | 0;
 i1 = _i64Add(HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0, -1, -1) | 0;
 HEAP32[i2 >> 2] = i1;
 HEAP32[i2 + 4 >> 2] = tempRet0;
 return;
}
function __ZN7WebCore12RenderObjectD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 136 | 0;
 i1 = _i64Add(HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0, -1, -1) | 0;
 HEAP32[i2 >> 2] = i1;
 HEAP32[i2 + 4 >> 2] = tempRet0;
 return;
}
function __ZNK7WebCore12RenderObject39pixelSnappedAbsoluteClippedOverflowRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 500 >> 2] & 31](i4, i2, 0);
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i1, i4);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore12RenderObject18maximalOutlineSizeENS_10PaintPhaseE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i2 - 5 | 0) >>> 0 >= 3 >>> 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 176 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore12RenderObject26hasEntirelyFixedBackgroundEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i2 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i2 = HEAP32[i1 + 36 >> 2] | 0;
 }
 return __ZNK7WebCore11RenderStyle26hasEntirelyFixedBackgroundEv(i2) | 0;
}
function __ZNK7WebCore12RenderObject15innerLineHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i2 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i2 = HEAP32[i1 + 36 >> 2] | 0;
 }
 return __ZNK7WebCore11RenderStyle18computedLineHeightEPNS_10RenderViewE(i2, 0) | 0;
}
function ___uremdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 ___udivmoddi4(i1, i2, i3, i4, i6) | 0;
 STACKTOP = i5;
 return (tempRet0 = HEAP32[i6 + 4 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
}
function __ZN7WebCore12RenderObject16positionForPointERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, i2, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 564 >> 2] & 255](i2) | 0, 1);
 return;
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
function __ZN7WebCore12RenderObject16clearNeedsLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3 & -1048608 | 1048576;
 if ((i3 & 768 | 0) == 256) {
  return;
 }
 i3 = i1 + 24 | 0;
 HEAP8[i3] = HEAP8[i3] & -65;
 return;
}
function __ZNK7WebCore12RenderObject17selectionStartEndERiS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore10RenderView17selectionStartEndERiS1_(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, i2, i3);
 return;
}
function ___muldi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = i1;
 i1 = i3;
 i3 = ___muldsi3(i5, i1) | 0;
 i6 = tempRet0;
 return (tempRet0 = (Math_imul(i2, i1) | 0) + (Math_imul(i4, i5) | 0) + i6 | i6 & 0, i3 & -1 | 0) | 0;
}
function __ZN7WebCore12RenderObject11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return 0;
}
function __ZN7WebCore12RenderObject7destroyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 604 >> 2] & 31](i1);
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i1);
 return;
}
function __ZN7WebCore12RenderObject14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZNK7WebCore12RenderObject22localToParentTransformEv(i1) {
 i1 = i1 | 0;
 if (HEAP8[H_BASE + 648 | 0] | 0) {
  return H_BASE + 664 | 0;
 }
 __ZN7WebCore15AffineTransformC1Ev(H_BASE + 664);
 HEAP8[H_BASE + 648 | 0] = 1;
 return H_BASE + 664 | 0;
}
function __ZNK7WebCore12RenderObject17isSelectionBorderEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = (HEAP32[i1 + 20 >> 2] | 0) >>> 25 & 7;
 if ((i2 | 0) == 3 | (i2 | 0) == 1 | (i2 | 0) == 4) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = 0;
 return i3 | 0;
}
function __ZNK7WebCore12RenderObject9animationEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 476 >> 2] | 0;
}
function __ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 400 >> 2] & 31](i2 | 0);
 return;
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
function _bitshift64Ashr(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 >> i3;
  return i1 >>> i3 | (i2 & (1 << i3) - 1) << 32 - i3;
 }
 tempRet0 = (i2 | 0) < 0 ? -1 : 0;
 return i2 >> i3 - 32 | 0;
}
function __ZNK7WebCore12RenderObject12isCompositedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 32768 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + 208 >> 2] | 0) != 0;
 return i2 | 0;
}
function __ZN7WebCore12RenderObject17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function __ZN7WebCore12RenderObject16removeFromParentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 636 >> 2] & 31](i2, i1);
 return;
}
function __ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function _bitshift64Shl(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 << i3 | (i1 & (1 << i3) - 1 << 32 - i3) >>> 32 - i3;
  return i1 << i3;
 }
 tempRet0 = i1 << i3 - 32;
 return 0;
}
function __ZN7WebCore12RenderObject51setLayerNeedsFullRepaintForPositionedMovementLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = (HEAP32[i1 + 40 >> 2] | 0) + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -196609 | 131072;
 return;
}
function __ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 584 >> 2] & 31](i1, i2, i3);
 return;
}
function __ZN7WebCore12RenderObject17setSelectionStateENS0_14SelectionStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 20 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -234881025 | i2 << 25 & 234881024;
 return;
}
function _i64Subtract(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i2 - i4 >>> 0;
 i5 = i2 - i4 - (i3 >>> 0 > i1 >>> 0 | 0) >>> 0;
 return (tempRet0 = i5, i1 - i3 >>> 0 | 0) | 0;
}
function _bitshift64Lshr(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 >>> i3;
  return i1 >>> i3 | (i2 & (1 << i3) - 1) << 32 - i3;
 }
 tempRet0 = 0;
 return i2 >>> i3 - 32 | 0;
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZN7WebCore12RenderObject23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZNK7WebCore12RenderObject5themeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) + 68 >> 2] | 0;
}
function __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = (HEAP32[i1 + 40 >> 2] | 0) + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -196609 | 65536;
 return;
}
function _i64Add(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i1 + i3 >>> 0;
 return (tempRet0 = i2 + i4 + (i5 >>> 0 < i1 >>> 0 | 0) >>> 0, i5 | 0) | 0;
}
function __ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function __ZNK7WebCore12RenderObject29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZNK7WebCore12RenderObject13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function ___udivdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = ___udivmoddi4(i1, i2, i3, i4, 0) | 0;
 return (tempRet0 = tempRet0, i5) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZNK7WebCore12RenderObject13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZNK7WebCore12RenderObject26selectionEmphasisMarkColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject14selectionColorEi(i1, i2, 337);
 return;
}
function __ZNK7WebCore12RenderObject24selectionForegroundColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject14selectionColorEi(i1, i2, 340);
 return;
}
function __ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv(i1) {
 i1 = i1 | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 255](i1) | 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZNK7WebCore12RenderObject7isEmptyEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 255](i1) | 0) == 0 | 0;
}
function __ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE(i1, i2, i3) {
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
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
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
function __ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZNK7WebCore12RenderObject27generatingPseudoHostElementEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 52 >> 2] | 0;
}
function b3(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(3);
 return 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore12RenderObject17strokeBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZNK7WebCore12RenderObject17objectBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore12RenderObject12imageChangedEPKvPKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return i2 - 1 | 0;
}
function __ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
function b9(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(9);
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
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZNK7WebCore12RenderObject14previousOffsetEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return i2 - 1 | 0;
}
function __ZNK7WebCore12RenderObject10nextOffsetEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return i2 + 1 | 0;
}
function __ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 255](i2 | 0) | 0;
}
function __ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv(i1) {
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
function __ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b10(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(10);
}
function __ZNK7WebCore12RenderObject27isSVGTransformableContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv(i1) {
 i1 = i1 | 0;
 return 0;
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
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
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
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
 return 0;
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
function __ZNK7WebCore12RenderObject14firstLineBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14firstChildSlowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14caretMinOffsetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12RenderObject17updateFromElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore12RenderObject13lastChildSlowEv(i1) {
 i1 = i1 | 0;
 return 0;
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
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
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
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
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
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore12RenderObject14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE,b0,__ZNK7WebCore12RenderObject19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb,b0,__ZNK7WebCore12RenderObject19offsetFromContainerEPS0_RKNS_11LayoutPointEPb,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv,b1,__ZN7WebCore12RenderObject17updateFromElementEv,b1,__ZN7WebCore12RenderObject16insertedIntoTreeEv,b1,__ZN7WebCore12RenderObject15willBeDestroyedEv,b1,__ZN7WebCore12RenderObjectD0Ev,b1,__ZN7WebCore12RenderObjectD2Ev,b1,__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv,b1,__ZN7WebCore12RenderObject21willBeRemovedFromTreeEv,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE,b2,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b2,__ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE,b2,__ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv,b2,__ZNK7WebCore12RenderObject14localTransformEv,b2,__ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv,b2,__ZNK7WebCore12RenderObject17strokeBoundingBoxEv,b2,__ZN7WebCore12RenderObject17setSelectionStateENS0_14SelectionStateE,b2,__ZNK7WebCore12RenderObject17objectBoundingBoxEv,b2,__ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv,b2,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b2,__ZN7WebCore12RenderObject15updateDragStateEb,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_iiiiiii = [b3,b3,__ZN7WebCore12RenderObject11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZNK7WebCore12RenderObject19isSVGResourceFilterEv,b4,__ZNK7WebCore12RenderObject13isSVGTextPathEv,b4,__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv,b4,__ZNK7WebCore12RenderObject10isRubyTextEv,b4,__ZNK7WebCore12RenderObject6isRubyEv,b4,__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv,b4,__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv,b4,__ZNK7WebCore12RenderObject22localToParentTransformEv,b4,__ZNK7WebCore12RenderObject8isWidgetEv,b4,__ZNK7WebCore12RenderObject11isTextFieldEv,b4,__ZNK7WebCore12RenderObject18isRenderMathMLMathEv,b4,__ZNK7WebCore12RenderObject14firstLineBlockEv,b4,__ZNK7WebCore12RenderObject9isSVGRootEv,b4,__ZNK7WebCore12RenderObject16isEmbeddedObjectEv
  ,b4,__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv,b4,__ZNK7WebCore12RenderObject15isSVGInlineTextEv,b4,__ZNK7WebCore12RenderObject7isMeterEv,b4,__ZNK7WebCore12RenderObject14isSVGContainerEv,b4,__ZNK7WebCore12RenderObject22isSVGResourceContainerEv,b4,__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv,b4,__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv,b4,__ZNK7WebCore12RenderObject7isQuoteEv,b4,__ZNK7WebCore12RenderObject18canBeSelectionLeafEv,b4,__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv,b4,__ZNK7WebCore12RenderObject10isSVGImageEv,b4,__ZNK7WebCore12RenderObject20isStretchingChildrenEv,b4,__ZNK7WebCore12RenderObject15isDetailsMarkerEv,b4,__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv,b4,__ZNK7WebCore12RenderObject13lastChildSlowEv
  ,b4,__ZNK7WebCore12RenderObject16isRenderTableColEv,b4,__ZNK7WebCore12RenderObject7isVideoEv,b4,__ZNK7WebCore12RenderObject10isProgressEv,b4,__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv,b4,__ZNK7WebCore12RenderObject13isCombineTextEv,b4,__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv,b4,__ZNK7WebCore12RenderObject5isWBREv,b4,__ZNK7WebCore12RenderObject22isSVGViewportContainerEv,b4,__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv,b4,__ZNK7WebCore12RenderObject7isFrameEv,b4,__ZNK7WebCore12RenderObject17isRenderMathMLRowEv,b4,__ZNK7WebCore12RenderObject9isReplicaEv,b4,__ZNK7WebCore12RenderObject16isRenderSVGBlockEv,b4,__ZNK7WebCore12RenderObject19isFileUploadControlEv,b4,__ZNK7WebCore12RenderObject7isMediaEv
  ,b4,__ZNK7WebCore12RenderObject10isSVGShapeEv,b4,__ZNK7WebCore12RenderObject14isRenderButtonEv,b4,__ZNK7WebCore12RenderObject8isSliderEv,b4,__ZNK7WebCore12RenderObject17isSVGGradientStopEv,b4,__ZNK7WebCore12RenderObject10isRubyBaseEv,b4,__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv,b4,__ZNK7WebCore12RenderObject8isCanvasEv,b4,__ZNK7WebCore12RenderObject10isMenuListEv,b4,__ZNK7WebCore12RenderObject18isRenderFullScreenEv,b4,__ZNK7WebCore12RenderObject14isTableCaptionEv,b4,__ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv,b4,__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv,b4,__ZNK7WebCore12RenderObject14caretMaxOffsetEv,b4,__ZNK7WebCore12RenderObject13isSliderThumbEv,b4,__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv
  ,b4,__ZNK7WebCore12RenderObject13isTextControlEv,b4,__ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv,b4,__ZNK7WebCore12RenderObject9isSVGTextEv,b4,__ZNK7WebCore12RenderObject10isTextAreaEv,b4,__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv,b4,__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv,b4,__ZNK7WebCore12RenderObject11isTableCellEv,b4,__ZNK7WebCore12RenderObject14firstChildSlowEv,b4,__ZNK7WebCore12RenderObject12isRenderGridEv,b4,__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv,b4,__ZNK7WebCore12RenderObject9isListBoxEv,b4,__ZNK7WebCore12RenderObject9isSVGPathEv,b4,__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv,b4,__ZNK7WebCore12RenderObject13isRenderImageEv,b4,__ZNK7WebCore12RenderObject18isRenderMathMLRootEv
  ,b4,__ZNK7WebCore12RenderObject14caretMinOffsetEv,b4,__ZNK7WebCore12RenderObject10isListItemEv,b4,__ZNK7WebCore12RenderObject14isRenderIFrameEv,b4,__ZNK7WebCore12RenderObject6lengthEv,b4,__ZNK7WebCore12RenderObject10isTableRowEv,b4,__ZNK7WebCore12RenderObject13isFlexibleBoxEv,b4,__ZNK7WebCore12RenderObject10isFrameSetEv,b4,__ZNK7WebCore12RenderObject10isFieldsetEv,b4,__ZNK7WebCore12RenderObject11isSVGInlineEv,b4,__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv,b4,__ZNK7WebCore12RenderObject18isSVGForeignObjectEv,b4,__ZNK7WebCore12RenderObject18isRenderFlowThreadEv,b4,__ZNK7WebCore12RenderObject9isRubyRunEv,b4,__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv,b4,__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv
  ,b4,__ZNK7WebCore12RenderObject14isRenderRegionEv,b4,__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv,b4,__ZNK7WebCore17CachedImageClient18resourceClientTypeEv,b4,__ZN7WebCore12RenderObject21needsBoundariesUpdateEv,b4,__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv,b4,__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv,b4,__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv,b4,__ZNK7WebCore12RenderObject7isImageEv,b4,__ZNK7WebCore12RenderObject9isCounterEv,b4,__ZNK7WebCore12RenderObject15innerLineHeightEv,b4,__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv,b4,__ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv,b4,__ZNK7WebCore12RenderObject19virtualContinuationEv,b4,__ZNK7WebCore12RenderObject12isListMarkerEv,b4,__ZNK7WebCore12RenderObject7isEmptyEv
  ,b4,__ZNK7WebCore12RenderObject7isTableEv,b4,__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv,b4,__ZNK7WebCore12RenderObject14isTableSectionEv,b4,__ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_iiii = [b5,b5,__ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE,b5,__ZNK7WebCore12RenderObject22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE,b5,b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6,__ZN7WebCore12RenderObject12imageChangedEPKvPKNS_7IntRectE,b6,__ZN7WebCore12RenderObject16positionForPointERKNS_11LayoutPointE,b6,__ZNK7WebCore12RenderObject13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb,b6,__ZNK7WebCore12RenderObject29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE,b6,__ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE,b6,__ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE,b6,__ZNK7WebCore12RenderObject13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE,b6,__ZNK7WebCore12RenderObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE,b6,__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6];
  var FUNCTION_TABLE_v = [b7,b7,v____cxa_pure_virtual__wrapper,b7];
  var FUNCTION_TABLE_iii = [b8,b8,__ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE,b8,__ZNK7WebCore12RenderObject10nextOffsetEi,b8,__ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi,b8,__ZNK7WebCore12RenderObject14previousOffsetEi,b8,b8,b8,b8,b8,b8,b8];
  var FUNCTION_TABLE_iiiiii = [b9,b9,__ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE,b9];
  var FUNCTION_TABLE_viiii = [b10,b10,__ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb,b10,__ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE,b10,__ZN7WebCore12RenderObject23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb,b10,__ZN7WebCore12RenderObject17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE,b10,__ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE,b10,__ZNK7WebCore12RenderObject21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb,b10,b10,b10];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "_floorf": _floorf, "___setErrNo": ___setErrNo, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "cttz_i8": cttz_i8, "ctlz_i8": ctlz_i8, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames6imgTagE": __ZN7WebCore9HTMLNames6imgTagE, "__ZN7WebCore9HTMLNames8tableTagE": __ZN7WebCore9HTMLNames8tableTagE, "__ZN7WebCore9HTMLNames5hrTagE": __ZN7WebCore9HTMLNames5hrTagE, "__ZN7WebCore9HTMLNames5thTagE": __ZN7WebCore9HTMLNames5thTagE, "__ZN7WebCore9HTMLNames4aTagE": __ZN7WebCore9HTMLNames4aTagE, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZN7WebCore9HTMLNames5tdTagE": __ZN7WebCore9HTMLNames5tdTagE, "__ZN7WebCore9HTMLNames7fontTagE": __ZN7WebCore9HTMLNames7fontTagE, "__ZN7WebCore9HTMLNames8hrefAttrE": __ZN7WebCore9HTMLNames8hrefAttrE, "__ZN7WebCore9HTMLNames10marqueeTagE": __ZN7WebCore9HTMLNames10marqueeTagE, "__ZN7WebCore9HTMLNames9legendTagE": __ZN7WebCore9HTMLNames9legendTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
// TODO: strip out parts of this we do not need
//======= begin closure i64 code =======
// Copyright 2009 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * @fileoverview Defines a Long class for representing a 64-bit two's-complement
 * integer value, which faithfully simulates the behavior of a Java "long". This
 * implementation is derived from LongLib in GWT.
 *
 */
var i64Math = (function() { // Emscripten wrapper
  var goog = { math: {} };
  /**
   * Constructs a 64-bit two's-complement integer, given its low and high 32-bit
   * values as *signed* integers.  See the from* functions below for more
   * convenient ways of constructing Longs.
   *
   * The internal representation of a long is the two given signed, 32-bit values.
   * We use 32-bit pieces because these are the size of integers on which
   * Javascript performs bit-operations.  For operations like addition and
   * multiplication, we split each number into 16-bit pieces, which can easily be
   * multiplied within Javascript's floating-point representation without overflow
   * or change in sign.
   *
   * In the algorithms below, we frequently reduce the negative case to the
   * positive case by negating the input(s) and then post-processing the result.
   * Note that we must ALWAYS check specially whether those values are MIN_VALUE
   * (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
   * a positive number, it overflows back into a negative).  Not handling this
   * case would often result in infinite recursion.
   *
   * @param {number} low  The low (signed) 32 bits of the long.
   * @param {number} high  The high (signed) 32 bits of the long.
   * @constructor
   */
  goog.math.Long = function(low, high) {
    /**
     * @type {number}
     * @private
     */
    this.low_ = low | 0;  // force into 32 signed bits.
    /**
     * @type {number}
     * @private
     */
    this.high_ = high | 0;  // force into 32 signed bits.
  };
  // NOTE: Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the
  // from* methods on which they depend.
  /**
   * A cache of the Long representations of small integer values.
   * @type {!Object}
   * @private
   */
  goog.math.Long.IntCache_ = {};
  /**
   * Returns a Long representing the given (32-bit) integer value.
   * @param {number} value The 32-bit integer in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromInt = function(value) {
    if (-128 <= value && value < 128) {
      var cachedObj = goog.math.Long.IntCache_[value];
      if (cachedObj) {
        return cachedObj;
      }
    }
    var obj = new goog.math.Long(value | 0, value < 0 ? -1 : 0);
    if (-128 <= value && value < 128) {
      goog.math.Long.IntCache_[value] = obj;
    }
    return obj;
  };
  /**
   * Returns a Long representing the given value, provided that it is a finite
   * number.  Otherwise, zero is returned.
   * @param {number} value The number in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromNumber = function(value) {
    if (isNaN(value) || !isFinite(value)) {
      return goog.math.Long.ZERO;
    } else if (value <= -goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MIN_VALUE;
    } else if (value + 1 >= goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MAX_VALUE;
    } else if (value < 0) {
      return goog.math.Long.fromNumber(-value).negate();
    } else {
      return new goog.math.Long(
          (value % goog.math.Long.TWO_PWR_32_DBL_) | 0,
          (value / goog.math.Long.TWO_PWR_32_DBL_) | 0);
    }
  };
  /**
   * Returns a Long representing the 64-bit integer that comes by concatenating
   * the given high and low bits.  Each is assumed to use 32 bits.
   * @param {number} lowBits The low 32-bits.
   * @param {number} highBits The high 32-bits.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromBits = function(lowBits, highBits) {
    return new goog.math.Long(lowBits, highBits);
  };
  /**
   * Returns a Long representation of the given string, written using the given
   * radix.
   * @param {string} str The textual representation of the Long.
   * @param {number=} opt_radix The radix in which the text is written.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromString = function(str, opt_radix) {
    if (str.length == 0) {
      throw Error('number format error: empty string');
    }
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (str.charAt(0) == '-') {
      return goog.math.Long.fromString(str.substring(1), radix).negate();
    } else if (str.indexOf('-') >= 0) {
      throw Error('number format error: interior "-" character: ' + str);
    }
    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 8));
    var result = goog.math.Long.ZERO;
    for (var i = 0; i < str.length; i += 8) {
      var size = Math.min(8, str.length - i);
      var value = parseInt(str.substring(i, i + size), radix);
      if (size < 8) {
        var power = goog.math.Long.fromNumber(Math.pow(radix, size));
        result = result.multiply(power).add(goog.math.Long.fromNumber(value));
      } else {
        result = result.multiply(radixToPower);
        result = result.add(goog.math.Long.fromNumber(value));
      }
    }
    return result;
  };
  // NOTE: the compiler should inline these constant values below and then remove
  // these variables, so there should be no runtime penalty for these.
  /**
   * Number used repeated below in calculations.  This must appear before the
   * first call to any from* function below.
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_16_DBL_ = 1 << 16;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_24_DBL_ = 1 << 24;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_32_DBL_ =
      goog.math.Long.TWO_PWR_16_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_31_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ / 2;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_48_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_64_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_32_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_63_DBL_ =
      goog.math.Long.TWO_PWR_64_DBL_ / 2;
  /** @type {!goog.math.Long} */
  goog.math.Long.ZERO = goog.math.Long.fromInt(0);
  /** @type {!goog.math.Long} */
  goog.math.Long.ONE = goog.math.Long.fromInt(1);
  /** @type {!goog.math.Long} */
  goog.math.Long.NEG_ONE = goog.math.Long.fromInt(-1);
  /** @type {!goog.math.Long} */
  goog.math.Long.MAX_VALUE =
      goog.math.Long.fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0);
  /** @type {!goog.math.Long} */
  goog.math.Long.MIN_VALUE = goog.math.Long.fromBits(0, 0x80000000 | 0);
  /**
   * @type {!goog.math.Long}
   * @private
   */
  goog.math.Long.TWO_PWR_24_ = goog.math.Long.fromInt(1 << 24);
  /** @return {number} The value, assuming it is a 32-bit integer. */
  goog.math.Long.prototype.toInt = function() {
    return this.low_;
  };
  /** @return {number} The closest floating-point representation to this value. */
  goog.math.Long.prototype.toNumber = function() {
    return this.high_ * goog.math.Long.TWO_PWR_32_DBL_ +
           this.getLowBitsUnsigned();
  };
  /**
   * @param {number=} opt_radix The radix in which the text should be written.
   * @return {string} The textual representation of this value.
   */
  goog.math.Long.prototype.toString = function(opt_radix) {
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (this.isZero()) {
      return '0';
    }
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        // We need to change the Long value before it can be negated, so we remove
        // the bottom-most digit in this base and then recurse to do the rest.
        var radixLong = goog.math.Long.fromNumber(radix);
        var div = this.div(radixLong);
        var rem = div.multiply(radixLong).subtract(this);
        return div.toString(radix) + rem.toInt().toString(radix);
      } else {
        return '-' + this.negate().toString(radix);
      }
    }
    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 6));
    var rem = this;
    var result = '';
    while (true) {
      var remDiv = rem.div(radixToPower);
      var intval = rem.subtract(remDiv.multiply(radixToPower)).toInt();
      var digits = intval.toString(radix);
      rem = remDiv;
      if (rem.isZero()) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = '' + digits + result;
      }
    }
  };
  /** @return {number} The high 32-bits as a signed value. */
  goog.math.Long.prototype.getHighBits = function() {
    return this.high_;
  };
  /** @return {number} The low 32-bits as a signed value. */
  goog.math.Long.prototype.getLowBits = function() {
    return this.low_;
  };
  /** @return {number} The low 32-bits as an unsigned value. */
  goog.math.Long.prototype.getLowBitsUnsigned = function() {
    return (this.low_ >= 0) ?
        this.low_ : goog.math.Long.TWO_PWR_32_DBL_ + this.low_;
  };
  /**
   * @return {number} Returns the number of bits needed to represent the absolute
   *     value of this Long.
   */
  goog.math.Long.prototype.getNumBitsAbs = function() {
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        return 64;
      } else {
        return this.negate().getNumBitsAbs();
      }
    } else {
      var val = this.high_ != 0 ? this.high_ : this.low_;
      for (var bit = 31; bit > 0; bit--) {
        if ((val & (1 << bit)) != 0) {
          break;
        }
      }
      return this.high_ != 0 ? bit + 33 : bit + 1;
    }
  };
  /** @return {boolean} Whether this value is zero. */
  goog.math.Long.prototype.isZero = function() {
    return this.high_ == 0 && this.low_ == 0;
  };
  /** @return {boolean} Whether this value is negative. */
  goog.math.Long.prototype.isNegative = function() {
    return this.high_ < 0;
  };
  /** @return {boolean} Whether this value is odd. */
  goog.math.Long.prototype.isOdd = function() {
    return (this.low_ & 1) == 1;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long equals the other.
   */
  goog.math.Long.prototype.equals = function(other) {
    return (this.high_ == other.high_) && (this.low_ == other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long does not equal the other.
   */
  goog.math.Long.prototype.notEquals = function(other) {
    return (this.high_ != other.high_) || (this.low_ != other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than the other.
   */
  goog.math.Long.prototype.lessThan = function(other) {
    return this.compare(other) < 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than or equal to the other.
   */
  goog.math.Long.prototype.lessThanOrEqual = function(other) {
    return this.compare(other) <= 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than the other.
   */
  goog.math.Long.prototype.greaterThan = function(other) {
    return this.compare(other) > 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than or equal to the other.
   */
  goog.math.Long.prototype.greaterThanOrEqual = function(other) {
    return this.compare(other) >= 0;
  };
  /**
   * Compares this Long with the given one.
   * @param {goog.math.Long} other Long to compare against.
   * @return {number} 0 if they are the same, 1 if the this is greater, and -1
   *     if the given one is greater.
   */
  goog.math.Long.prototype.compare = function(other) {
    if (this.equals(other)) {
      return 0;
    }
    var thisNeg = this.isNegative();
    var otherNeg = other.isNegative();
    if (thisNeg && !otherNeg) {
      return -1;
    }
    if (!thisNeg && otherNeg) {
      return 1;
    }
    // at this point, the signs are the same, so subtraction will not overflow
    if (this.subtract(other).isNegative()) {
      return -1;
    } else {
      return 1;
    }
  };
  /** @return {!goog.math.Long} The negation of this value. */
  goog.math.Long.prototype.negate = function() {
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.MIN_VALUE;
    } else {
      return this.not().add(goog.math.Long.ONE);
    }
  };
  /**
   * Returns the sum of this and the given Long.
   * @param {goog.math.Long} other Long to add to this one.
   * @return {!goog.math.Long} The sum of this and the given Long.
   */
  goog.math.Long.prototype.add = function(other) {
    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns the difference of this and the given Long.
   * @param {goog.math.Long} other Long to subtract from this.
   * @return {!goog.math.Long} The difference of this and the given Long.
   */
  goog.math.Long.prototype.subtract = function(other) {
    return this.add(other.negate());
  };
  /**
   * Returns the product of this and the given long.
   * @param {goog.math.Long} other Long to multiply with this.
   * @return {!goog.math.Long} The product of this and the other.
   */
  goog.math.Long.prototype.multiply = function(other) {
    if (this.isZero()) {
      return goog.math.Long.ZERO;
    } else if (other.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return other.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return this.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().multiply(other.negate());
      } else {
        return this.negate().multiply(other).negate();
      }
    } else if (other.isNegative()) {
      return this.multiply(other.negate()).negate();
    }
    // If both longs are small, use float multiplication
    if (this.lessThan(goog.math.Long.TWO_PWR_24_) &&
        other.lessThan(goog.math.Long.TWO_PWR_24_)) {
      return goog.math.Long.fromNumber(this.toNumber() * other.toNumber());
    }
    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns this Long divided by the given one.
   * @param {goog.math.Long} other Long by which to divide.
   * @return {!goog.math.Long} This Long divided by the given one.
   */
  goog.math.Long.prototype.div = function(other) {
    if (other.isZero()) {
      throw Error('division by zero');
    } else if (this.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      if (other.equals(goog.math.Long.ONE) ||
          other.equals(goog.math.Long.NEG_ONE)) {
        return goog.math.Long.MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
      } else if (other.equals(goog.math.Long.MIN_VALUE)) {
        return goog.math.Long.ONE;
      } else {
        // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
        var halfThis = this.shiftRight(1);
        var approx = halfThis.div(other).shiftLeft(1);
        if (approx.equals(goog.math.Long.ZERO)) {
          return other.isNegative() ? goog.math.Long.ONE : goog.math.Long.NEG_ONE;
        } else {
          var rem = this.subtract(other.multiply(approx));
          var result = approx.add(rem.div(other));
          return result;
        }
      }
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().div(other.negate());
      } else {
        return this.negate().div(other).negate();
      }
    } else if (other.isNegative()) {
      return this.div(other.negate()).negate();
    }
    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    var res = goog.math.Long.ZERO;
    var rem = this;
    while (rem.greaterThanOrEqual(other)) {
      // Approximate the result of division. This may be a little greater or
      // smaller than the actual value.
      var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));
      // We will tweak the approximate result by changing it in the 48-th digit or
      // the smallest non-fractional digit, whichever is larger.
      var log2 = Math.ceil(Math.log(approx) / Math.LN2);
      var delta = (log2 <= 48) ? 1 : Math.pow(2, log2 - 48);
      // Decrease the approximation until it is smaller than the remainder.  Note
      // that if it is too large, the product overflows and is negative.
      var approxRes = goog.math.Long.fromNumber(approx);
      var approxRem = approxRes.multiply(other);
      while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
        approx -= delta;
        approxRes = goog.math.Long.fromNumber(approx);
        approxRem = approxRes.multiply(other);
      }
      // We know the answer can't be zero... and actually, zero would cause
      // infinite recursion since we would make no progress.
      if (approxRes.isZero()) {
        approxRes = goog.math.Long.ONE;
      }
      res = res.add(approxRes);
      rem = rem.subtract(approxRem);
    }
    return res;
  };
  /**
   * Returns this Long modulo the given one.
   * @param {goog.math.Long} other Long by which to mod.
   * @return {!goog.math.Long} This Long modulo the given one.
   */
  goog.math.Long.prototype.modulo = function(other) {
    return this.subtract(this.div(other).multiply(other));
  };
  /** @return {!goog.math.Long} The bitwise-NOT of this value. */
  goog.math.Long.prototype.not = function() {
    return goog.math.Long.fromBits(~this.low_, ~this.high_);
  };
  /**
   * Returns the bitwise-AND of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to AND.
   * @return {!goog.math.Long} The bitwise-AND of this and the other.
   */
  goog.math.Long.prototype.and = function(other) {
    return goog.math.Long.fromBits(this.low_ & other.low_,
                                   this.high_ & other.high_);
  };
  /**
   * Returns the bitwise-OR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to OR.
   * @return {!goog.math.Long} The bitwise-OR of this and the other.
   */
  goog.math.Long.prototype.or = function(other) {
    return goog.math.Long.fromBits(this.low_ | other.low_,
                                   this.high_ | other.high_);
  };
  /**
   * Returns the bitwise-XOR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to XOR.
   * @return {!goog.math.Long} The bitwise-XOR of this and the other.
   */
  goog.math.Long.prototype.xor = function(other) {
    return goog.math.Long.fromBits(this.low_ ^ other.low_,
                                   this.high_ ^ other.high_);
  };
  /**
   * Returns this Long with bits shifted to the left by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the left by the given amount.
   */
  goog.math.Long.prototype.shiftLeft = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var low = this.low_;
      if (numBits < 32) {
        var high = this.high_;
        return goog.math.Long.fromBits(
            low << numBits,
            (high << numBits) | (low >>> (32 - numBits)));
      } else {
        return goog.math.Long.fromBits(0, low << (numBits - 32));
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount.
   */
  goog.math.Long.prototype.shiftRight = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >> numBits);
      } else {
        return goog.math.Long.fromBits(
            high >> (numBits - 32),
            high >= 0 ? 0 : -1);
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount, with
   * the new top bits matching the current sign bit.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount, with
   *     zeros placed into the new leading bits.
   */
  goog.math.Long.prototype.shiftRightUnsigned = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >>> numBits);
      } else if (numBits == 32) {
        return goog.math.Long.fromBits(high, 0);
      } else {
        return goog.math.Long.fromBits(high >>> (numBits - 32), 0);
      }
    }
  };
  //======= begin jsbn =======
  var navigator = { appName: 'Modern Browser' }; // polyfill a little
  // Copyright (c) 2005  Tom Wu
  // All Rights Reserved.
  // http://www-cs-students.stanford.edu/~tjw/jsbn/
  /*
   * Copyright (c) 2003-2005  Tom Wu
   * All Rights Reserved.
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND, 
   * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY 
   * WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.  
   *
   * IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
   * INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER
   * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF
   * THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT
   * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * In addition, the following condition applies:
   *
   * All redistributions must retain an intact copy of this copyright notice
   * and disclaimer.
   */
  // Basic JavaScript BN library - subset useful for RSA encryption.
  // Bits per digit
  var dbits;
  // JavaScript engine analysis
  var canary = 0xdeadbeefcafe;
  var j_lm = ((canary&0xffffff)==0xefcafe);
  // (public) Constructor
  function BigInteger(a,b,c) {
    if(a != null)
      if("number" == typeof a) this.fromNumber(a,b,c);
      else if(b == null && "string" != typeof a) this.fromString(a,256);
      else this.fromString(a,b);
  }
  // return new, unset BigInteger
  function nbi() { return new BigInteger(null); }
  // am: Compute w_j += (x*this_i), propagate carries,
  // c is initial carry, returns final carry.
  // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
  // We need to select the fastest one that works in this environment.
  // am1: use a single mult and divide to get the high bits,
  // max digit bits should be 26 because
  // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
  function am1(i,x,w,j,c,n) {
    while(--n >= 0) {
      var v = x*this[i++]+w[j]+c;
      c = Math.floor(v/0x4000000);
      w[j++] = v&0x3ffffff;
    }
    return c;
  }
  // am2 avoids a big mult-and-extract completely.
  // Max digit bits should be <= 30 because we do bitwise ops
  // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
  function am2(i,x,w,j,c,n) {
    var xl = x&0x7fff, xh = x>>15;
    while(--n >= 0) {
      var l = this[i]&0x7fff;
      var h = this[i++]>>15;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
      c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
      w[j++] = l&0x3fffffff;
    }
    return c;
  }
  // Alternately, set max digit bits to 28 since some
  // browsers slow down when dealing with 32-bit numbers.
  function am3(i,x,w,j,c,n) {
    var xl = x&0x3fff, xh = x>>14;
    while(--n >= 0) {
      var l = this[i]&0x3fff;
      var h = this[i++]>>14;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x3fff)<<14)+w[j]+c;
      c = (l>>28)+(m>>14)+xh*h;
      w[j++] = l&0xfffffff;
    }
    return c;
  }
  if(j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
    BigInteger.prototype.am = am2;
    dbits = 30;
  }
  else if(j_lm && (navigator.appName != "Netscape")) {
    BigInteger.prototype.am = am1;
    dbits = 26;
  }
  else { // Mozilla/Netscape seems to prefer am3
    BigInteger.prototype.am = am3;
    dbits = 28;
  }
  BigInteger.prototype.DB = dbits;
  BigInteger.prototype.DM = ((1<<dbits)-1);
  BigInteger.prototype.DV = (1<<dbits);
  var BI_FP = 52;
  BigInteger.prototype.FV = Math.pow(2,BI_FP);
  BigInteger.prototype.F1 = BI_FP-dbits;
  BigInteger.prototype.F2 = 2*dbits-BI_FP;
  // Digit conversions
  var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
  var BI_RC = new Array();
  var rr,vv;
  rr = "0".charCodeAt(0);
  for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
  rr = "a".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  rr = "A".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  function int2char(n) { return BI_RM.charAt(n); }
  function intAt(s,i) {
    var c = BI_RC[s.charCodeAt(i)];
    return (c==null)?-1:c;
  }
  // (protected) copy this to r
  function bnpCopyTo(r) {
    for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
    r.t = this.t;
    r.s = this.s;
  }
  // (protected) set from integer value x, -DV <= x < DV
  function bnpFromInt(x) {
    this.t = 1;
    this.s = (x<0)?-1:0;
    if(x > 0) this[0] = x;
    else if(x < -1) this[0] = x+DV;
    else this.t = 0;
  }
  // return bigint initialized to value
  function nbv(i) { var r = nbi(); r.fromInt(i); return r; }
  // (protected) set from string and radix
  function bnpFromString(s,b) {
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 256) k = 8; // byte array
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else { this.fromRadix(s,b); return; }
    this.t = 0;
    this.s = 0;
    var i = s.length, mi = false, sh = 0;
    while(--i >= 0) {
      var x = (k==8)?s[i]&0xff:intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-") mi = true;
        continue;
      }
      mi = false;
      if(sh == 0)
        this[this.t++] = x;
      else if(sh+k > this.DB) {
        this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
        this[this.t++] = (x>>(this.DB-sh));
      }
      else
        this[this.t-1] |= x<<sh;
      sh += k;
      if(sh >= this.DB) sh -= this.DB;
    }
    if(k == 8 && (s[0]&0x80) != 0) {
      this.s = -1;
      if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
    }
    this.clamp();
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) clamp off excess high words
  function bnpClamp() {
    var c = this.s&this.DM;
    while(this.t > 0 && this[this.t-1] == c) --this.t;
  }
  // (public) return string representation in given radix
  function bnToString(b) {
    if(this.s < 0) return "-"+this.negate().toString(b);
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else return this.toRadix(b);
    var km = (1<<k)-1, d, m = false, r = "", i = this.t;
    var p = this.DB-(i*this.DB)%k;
    if(i-- > 0) {
      if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
      while(i >= 0) {
        if(p < k) {
          d = (this[i]&((1<<p)-1))<<(k-p);
          d |= this[--i]>>(p+=this.DB-k);
        }
        else {
          d = (this[i]>>(p-=k))&km;
          if(p <= 0) { p += this.DB; --i; }
        }
        if(d > 0) m = true;
        if(m) r += int2char(d);
      }
    }
    return m?r:"0";
  }
  // (public) -this
  function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }
  // (public) |this|
  function bnAbs() { return (this.s<0)?this.negate():this; }
  // (public) return + if this > a, - if this < a, 0 if equal
  function bnCompareTo(a) {
    var r = this.s-a.s;
    if(r != 0) return r;
    var i = this.t;
    r = i-a.t;
    if(r != 0) return (this.s<0)?-r:r;
    while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
    return 0;
  }
  // returns bit length of the integer x
  function nbits(x) {
    var r = 1, t;
    if((t=x>>>16) != 0) { x = t; r += 16; }
    if((t=x>>8) != 0) { x = t; r += 8; }
    if((t=x>>4) != 0) { x = t; r += 4; }
    if((t=x>>2) != 0) { x = t; r += 2; }
    if((t=x>>1) != 0) { x = t; r += 1; }
    return r;
  }
  // (public) return the number of bits in "this"
  function bnBitLength() {
    if(this.t <= 0) return 0;
    return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
  }
  // (protected) r = this << n*DB
  function bnpDLShiftTo(n,r) {
    var i;
    for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
    for(i = n-1; i >= 0; --i) r[i] = 0;
    r.t = this.t+n;
    r.s = this.s;
  }
  // (protected) r = this >> n*DB
  function bnpDRShiftTo(n,r) {
    for(var i = n; i < this.t; ++i) r[i-n] = this[i];
    r.t = Math.max(this.t-n,0);
    r.s = this.s;
  }
  // (protected) r = this << n
  function bnpLShiftTo(n,r) {
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<cbs)-1;
    var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
    for(i = this.t-1; i >= 0; --i) {
      r[i+ds+1] = (this[i]>>cbs)|c;
      c = (this[i]&bm)<<bs;
    }
    for(i = ds-1; i >= 0; --i) r[i] = 0;
    r[ds] = c;
    r.t = this.t+ds+1;
    r.s = this.s;
    r.clamp();
  }
  // (protected) r = this >> n
  function bnpRShiftTo(n,r) {
    r.s = this.s;
    var ds = Math.floor(n/this.DB);
    if(ds >= this.t) { r.t = 0; return; }
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<bs)-1;
    r[0] = this[ds]>>bs;
    for(var i = ds+1; i < this.t; ++i) {
      r[i-ds-1] |= (this[i]&bm)<<cbs;
      r[i-ds] = this[i]>>bs;
    }
    if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
    r.t = this.t-ds;
    r.clamp();
  }
  // (protected) r = this - a
  function bnpSubTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]-a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c -= a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c -= a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c -= a.s;
    }
    r.s = (c<0)?-1:0;
    if(c < -1) r[i++] = this.DV+c;
    else if(c > 0) r[i++] = c;
    r.t = i;
    r.clamp();
  }
  // (protected) r = this * a, r != this,a (HAC 14.12)
  // "this" should be the larger one if appropriate.
  function bnpMultiplyTo(a,r) {
    var x = this.abs(), y = a.abs();
    var i = x.t;
    r.t = i+y.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
    r.s = 0;
    r.clamp();
    if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
  }
  // (protected) r = this^2, r != this (HAC 14.16)
  function bnpSquareTo(r) {
    var x = this.abs();
    var i = r.t = 2*x.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < x.t-1; ++i) {
      var c = x.am(i,x[i],r,2*i,0,1);
      if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
        r[i+x.t] -= x.DV;
        r[i+x.t+1] = 1;
      }
    }
    if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
    r.s = 0;
    r.clamp();
  }
  // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
  // r != q, this != m.  q or r may be null.
  function bnpDivRemTo(m,q,r) {
    var pm = m.abs();
    if(pm.t <= 0) return;
    var pt = this.abs();
    if(pt.t < pm.t) {
      if(q != null) q.fromInt(0);
      if(r != null) this.copyTo(r);
      return;
    }
    if(r == null) r = nbi();
    var y = nbi(), ts = this.s, ms = m.s;
    var nsh = this.DB-nbits(pm[pm.t-1]);	// normalize modulus
    if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
    else { pm.copyTo(y); pt.copyTo(r); }
    var ys = y.t;
    var y0 = y[ys-1];
    if(y0 == 0) return;
    var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
    var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
    var i = r.t, j = i-ys, t = (q==null)?nbi():q;
    y.dlShiftTo(j,t);
    if(r.compareTo(t) >= 0) {
      r[r.t++] = 1;
      r.subTo(t,r);
    }
    BigInteger.ONE.dlShiftTo(ys,t);
    t.subTo(y,y);	// "negative" y so we can replace sub with am later
    while(y.t < ys) y[y.t++] = 0;
    while(--j >= 0) {
      // Estimate quotient digit
      var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
      if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {	// Try it out
        y.dlShiftTo(j,t);
        r.subTo(t,r);
        while(r[i] < --qd) r.subTo(t,r);
      }
    }
    if(q != null) {
      r.drShiftTo(ys,q);
      if(ts != ms) BigInteger.ZERO.subTo(q,q);
    }
    r.t = ys;
    r.clamp();
    if(nsh > 0) r.rShiftTo(nsh,r);	// Denormalize remainder
    if(ts < 0) BigInteger.ZERO.subTo(r,r);
  }
  // (public) this mod a
  function bnMod(a) {
    var r = nbi();
    this.abs().divRemTo(a,null,r);
    if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
    return r;
  }
  // Modular reduction using "classic" algorithm
  function Classic(m) { this.m = m; }
  function cConvert(x) {
    if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
    else return x;
  }
  function cRevert(x) { return x; }
  function cReduce(x) { x.divRemTo(this.m,null,x); }
  function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  Classic.prototype.convert = cConvert;
  Classic.prototype.revert = cRevert;
  Classic.prototype.reduce = cReduce;
  Classic.prototype.mulTo = cMulTo;
  Classic.prototype.sqrTo = cSqrTo;
  // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
  // justification:
  //         xy == 1 (mod m)
  //         xy =  1+km
  //   xy(2-xy) = (1+km)(1-km)
  // x[y(2-xy)] = 1-k^2m^2
  // x[y(2-xy)] == 1 (mod m^2)
  // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
  // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
  // JS multiply "overflows" differently from C/C++, so care is needed here.
  function bnpInvDigit() {
    if(this.t < 1) return 0;
    var x = this[0];
    if((x&1) == 0) return 0;
    var y = x&3;		// y == 1/x mod 2^2
    y = (y*(2-(x&0xf)*y))&0xf;	// y == 1/x mod 2^4
    y = (y*(2-(x&0xff)*y))&0xff;	// y == 1/x mod 2^8
    y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;	// y == 1/x mod 2^16
    // last step - calculate inverse mod DV directly;
    // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
    y = (y*(2-x*y%this.DV))%this.DV;		// y == 1/x mod 2^dbits
    // we really want the negative inverse, and -DV < y < DV
    return (y>0)?this.DV-y:-y;
  }
  // Montgomery reduction
  function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp&0x7fff;
    this.mph = this.mp>>15;
    this.um = (1<<(m.DB-15))-1;
    this.mt2 = 2*m.t;
  }
  // xR mod m
  function montConvert(x) {
    var r = nbi();
    x.abs().dlShiftTo(this.m.t,r);
    r.divRemTo(this.m,null,r);
    if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
    return r;
  }
  // x/R mod m
  function montRevert(x) {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
  }
  // x = x/R mod m (HAC 14.32)
  function montReduce(x) {
    while(x.t <= this.mt2)	// pad x so am has enough room later
      x[x.t++] = 0;
    for(var i = 0; i < this.m.t; ++i) {
      // faster way of calculating u0 = x[i]*mp mod DV
      var j = x[i]&0x7fff;
      var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
      // use am to combine the multiply-shift-add into one call
      j = i+this.m.t;
      x[j] += this.m.am(0,u0,x,i,0,this.m.t);
      // propagate carry
      while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
    }
    x.clamp();
    x.drShiftTo(this.m.t,x);
    if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
  }
  // r = "x^2/R mod m"; x != r
  function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  // r = "xy/R mod m"; x,y != r
  function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  Montgomery.prototype.convert = montConvert;
  Montgomery.prototype.revert = montRevert;
  Montgomery.prototype.reduce = montReduce;
  Montgomery.prototype.mulTo = montMulTo;
  Montgomery.prototype.sqrTo = montSqrTo;
  // (protected) true iff this is even
  function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }
  // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
  function bnpExp(e,z) {
    if(e > 0xffffffff || e < 1) return BigInteger.ONE;
    var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
    g.copyTo(r);
    while(--i >= 0) {
      z.sqrTo(r,r2);
      if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
      else { var t = r; r = r2; r2 = t; }
    }
    return z.revert(r);
  }
  // (public) this^e % m, 0 <= e < 2^32
  function bnModPowInt(e,m) {
    var z;
    if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
    return this.exp(e,z);
  }
  // protected
  BigInteger.prototype.copyTo = bnpCopyTo;
  BigInteger.prototype.fromInt = bnpFromInt;
  BigInteger.prototype.fromString = bnpFromString;
  BigInteger.prototype.clamp = bnpClamp;
  BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
  BigInteger.prototype.drShiftTo = bnpDRShiftTo;
  BigInteger.prototype.lShiftTo = bnpLShiftTo;
  BigInteger.prototype.rShiftTo = bnpRShiftTo;
  BigInteger.prototype.subTo = bnpSubTo;
  BigInteger.prototype.multiplyTo = bnpMultiplyTo;
  BigInteger.prototype.squareTo = bnpSquareTo;
  BigInteger.prototype.divRemTo = bnpDivRemTo;
  BigInteger.prototype.invDigit = bnpInvDigit;
  BigInteger.prototype.isEven = bnpIsEven;
  BigInteger.prototype.exp = bnpExp;
  // public
  BigInteger.prototype.toString = bnToString;
  BigInteger.prototype.negate = bnNegate;
  BigInteger.prototype.abs = bnAbs;
  BigInteger.prototype.compareTo = bnCompareTo;
  BigInteger.prototype.bitLength = bnBitLength;
  BigInteger.prototype.mod = bnMod;
  BigInteger.prototype.modPowInt = bnModPowInt;
  // "constants"
  BigInteger.ZERO = nbv(0);
  BigInteger.ONE = nbv(1);
  // jsbn2 stuff
  // (protected) convert from radix string
  function bnpFromRadix(s,b) {
    this.fromInt(0);
    if(b == null) b = 10;
    var cs = this.chunkSize(b);
    var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
    for(var i = 0; i < s.length; ++i) {
      var x = intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
        continue;
      }
      w = b*w+x;
      if(++j >= cs) {
        this.dMultiply(d);
        this.dAddOffset(w,0);
        j = 0;
        w = 0;
      }
    }
    if(j > 0) {
      this.dMultiply(Math.pow(b,j));
      this.dAddOffset(w,0);
    }
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) return x s.t. r^x < DV
  function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }
  // (public) 0 if this == 0, 1 if this > 0
  function bnSigNum() {
    if(this.s < 0) return -1;
    else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
    else return 1;
  }
  // (protected) this *= n, this >= 0, 1 < n < DV
  function bnpDMultiply(n) {
    this[this.t] = this.am(0,n-1,this,0,0,this.t);
    ++this.t;
    this.clamp();
  }
  // (protected) this += n << w words, this >= 0
  function bnpDAddOffset(n,w) {
    if(n == 0) return;
    while(this.t <= w) this[this.t++] = 0;
    this[w] += n;
    while(this[w] >= this.DV) {
      this[w] -= this.DV;
      if(++w >= this.t) this[this.t++] = 0;
      ++this[w];
    }
  }
  // (protected) convert to radix string
  function bnpToRadix(b) {
    if(b == null) b = 10;
    if(this.signum() == 0 || b < 2 || b > 36) return "0";
    var cs = this.chunkSize(b);
    var a = Math.pow(b,cs);
    var d = nbv(a), y = nbi(), z = nbi(), r = "";
    this.divRemTo(d,y,z);
    while(y.signum() > 0) {
      r = (a+z.intValue()).toString(b).substr(1) + r;
      y.divRemTo(d,y,z);
    }
    return z.intValue().toString(b) + r;
  }
  // (public) return value as integer
  function bnIntValue() {
    if(this.s < 0) {
      if(this.t == 1) return this[0]-this.DV;
      else if(this.t == 0) return -1;
    }
    else if(this.t == 1) return this[0];
    else if(this.t == 0) return 0;
    // assumes 16 < DB < 32
    return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
  }
  // (protected) r = this + a
  function bnpAddTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]+a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c += a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c += a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += a.s;
    }
    r.s = (c<0)?-1:0;
    if(c > 0) r[i++] = c;
    else if(c < -1) r[i++] = this.DV+c;
    r.t = i;
    r.clamp();
  }
  BigInteger.prototype.fromRadix = bnpFromRadix;
  BigInteger.prototype.chunkSize = bnpChunkSize;
  BigInteger.prototype.signum = bnSigNum;
  BigInteger.prototype.dMultiply = bnpDMultiply;
  BigInteger.prototype.dAddOffset = bnpDAddOffset;
  BigInteger.prototype.toRadix = bnpToRadix;
  BigInteger.prototype.intValue = bnIntValue;
  BigInteger.prototype.addTo = bnpAddTo;
  //======= end jsbn =======
  // Emscripten wrapper
  var Wrapper = {
    abs: function(l, h) {
      var x = new goog.math.Long(l, h);
      var ret;
      if (x.isNegative()) {
        ret = x.negate();
      } else {
        ret = x;
      }
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
    },
    ensureTemps: function() {
      if (Wrapper.ensuredTemps) return;
      Wrapper.ensuredTemps = true;
      Wrapper.two32 = new BigInteger();
      Wrapper.two32.fromString('4294967296', 10);
      Wrapper.two64 = new BigInteger();
      Wrapper.two64.fromString('18446744073709551616', 10);
      Wrapper.temp1 = new BigInteger();
      Wrapper.temp2 = new BigInteger();
    },
    lh2bignum: function(l, h) {
      var a = new BigInteger();
      a.fromString(h.toString(), 10);
      var b = new BigInteger();
      a.multiplyTo(Wrapper.two32, b);
      var c = new BigInteger();
      c.fromString(l.toString(), 10);
      var d = new BigInteger();
      c.addTo(b, d);
      return d;
    },
    stringify: function(l, h, unsigned) {
      var ret = new goog.math.Long(l, h).toString();
      if (unsigned && ret[0] == '-') {
        // unsign slowly using jsbn bignums
        Wrapper.ensureTemps();
        var bignum = new BigInteger();
        bignum.fromString(ret, 10);
        ret = new BigInteger();
        Wrapper.two64.addTo(bignum, ret);
        ret = ret.toString(10);
      }
      return ret;
    },
    fromString: function(str, base, min, max, unsigned) {
      Wrapper.ensureTemps();
      var bignum = new BigInteger();
      bignum.fromString(str, base);
      var bigmin = new BigInteger();
      bigmin.fromString(min, 10);
      var bigmax = new BigInteger();
      bigmax.fromString(max, 10);
      if (unsigned && bignum.compareTo(BigInteger.ZERO) < 0) {
        var temp = new BigInteger();
        bignum.addTo(Wrapper.two64, temp);
        bignum = temp;
      }
      var error = false;
      if (bignum.compareTo(bigmin) < 0) {
        bignum = bigmin;
        error = true;
      } else if (bignum.compareTo(bigmax) > 0) {
        bignum = bigmax;
        error = true;
      }
      var ret = goog.math.Long.fromString(bignum.toString()); // min-max checks should have clamped this to a range goog.math.Long can handle well
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
      if (error) throw 'range error';
    }
  };
  return Wrapper;
})();
//======= end closure i64 code =======
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore12RenderObject9setParentEPNS_13RenderElementE","__ZNK7WebCore12RenderObject19isSVGResourceFilterEv","__ZNK7WebCore12RenderObject13isSVGTextPathEv","__ZN7WebCore12RenderObject31absoluteBoundingBoxRectForRangeEPKNS_5RangeE","__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv","__ZNK7WebCore12RenderObject10isRubyTextEv","__ZN7WebCore12RenderObject16positionForPointERKNS_11LayoutPointE","_strlen","__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv","__ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv","__ZNK7WebCore12RenderObject10isTableRowEv","__ZN7WebCore12RenderObject11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE","__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv","__ZNK7WebCore12RenderObject12isCompositedEv","__ZN7WebCore12RenderObject17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE","__ZNK7WebCore12RenderObject39pixelSnappedAbsoluteClippedOverflowRectEv","__ZN7WebCore12RenderObject16paintingRootRectERNS_10LayoutRectE","__ZNK7WebCore12RenderObject22localToParentTransformEv","__ZN7WebCore12RenderObject33canUpdateSelectionOnRootLineBoxesEv","__ZN7WebCore11RenderStyleD2Ev","__ZNK7WebCore12RenderObject8isLegendEv","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZNK7WebCore12RenderObject18previousInPreOrderEPKS0_","__ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv","__ZNK7WebCore12RenderObject8isWidgetEv","__ZN7WebCore12RenderObject38setFlowThreadStateIncludingDescendantsENS0_15FlowThreadStateE","__ZNK7WebCore12RenderObject24selectionForegroundColorEv","__ZNK7WebCore12RenderObject18isRenderFullScreenEv","__ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb","__ZN7WebCore12RenderObject12paintOutlineERNS_9PaintInfoERKNS_10LayoutRectE","__ZN7WebCore12RenderObject17updateFromElementEv","__ZNK7WebCore12RenderObject14firstLineBlockEv","__ZN7WebCore12RenderObject12imageChangedEPKvPKNS_7IntRectE","__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv","__ZNK7WebCore12RenderObject9isSVGRootEv","__ZNK7WebCore12RenderObject6isRubyEv","__ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE","__ZNK7WebCore12RenderObject13isSliderThumbEv","__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv","__ZNK7WebCore12RenderObject15isSVGInlineTextEv","__ZNK7WebCore12RenderObject13isHTMLMarqueeEv","__ZNK7WebCore12RenderObject13lastLeafChildEv","__ZNK7WebCore12RenderObject13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb","__ZNK7WebCore12RenderObject7isMeterEv","__ZN7WebCore12RenderObject13addPDFURLRectEPNS_15GraphicsContextERKNS_10LayoutRectE","__ZN7WebCore12RenderObject14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE","__ZNK7WebCore12RenderObject27offsetFromAncestorContainerEPS0_","__ZNK7WebCore12RenderObject22isSVGResourceContainerEv","__ZNK7WebCore12RenderObject29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE","__ZNK7WebCore12RenderObject7isImageEv","__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv","__ZN7WebCore10BorderDataD2Ev","__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv","__ZNK7WebCore12RenderObject7isQuoteEv","__ZNK7WebCore12RenderObject14nextInPreOrderEv","__ZNK7WebCore12RenderObject20getCachedPseudoStyleENS_8PseudoIdEPNS_11RenderStyleE","__ZNK7WebCore12RenderObject10isListItemEv","__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv","__ZNK7WebCore12RenderObject10isSVGImageEv","__ZNK7WebCore12RenderObject27generatingPseudoHostElementEv","__ZNK7WebCore12RenderObject20isStretchingChildrenEv","__ZNK7WebCore12RenderObject7isTableEv","__ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib","__ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore12RenderObject19absoluteToLocalQuadERKNS_9FloatQuadEj","__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv","__ZNK7WebCore12RenderObject13lastChildSlowEv","__ZN7WebCore12RenderObject23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb","__ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv","__ZN7WebCore12RenderObject32handleDynamicFloatPositionChangeEv","__ZNK7WebCore12RenderObject16isRenderTableColEv","__ZN7WebCore12RenderObject23getTextDecorationColorsEiRNS_5ColorES2_S2_bb","__ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE","__ZNK7WebCore12RenderObject10isProgressEv","__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv","__ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE","__ZNK7WebCore12RenderObject16isAnonymousBlockEv","__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv","__ZNK7WebCore12RenderObject5isWBREv","__ZNK7WebCore12RenderObject22isSVGViewportContainerEv","__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv","__ZNK7WebCore12RenderObject29shouldRespectImageOrientationEv","__ZNK7WebCore12RenderObject7repaintEb","__ZNK7WebCore12RenderObject12offsetParentEv","__ZNK7WebCore12RenderObject18canBeSelectionLeafEv","__ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv","__ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE","__ZN7WebCore17StyleSurroundDataD2Ev","__ZNK7WebCore12RenderObject25getTransformFromContainerEPKS0_RKNS_10LayoutSizeERNS_20TransformationMatrixE","__ZNK7WebCore12RenderObject21localToContainerPointERKNS_10FloatPointEPKNS_22RenderLayerModelObjectEjPb","__ZNK7WebCore12RenderObject14localTransformEv","__ZN7WebCore12RenderObject16insertedIntoTreeEv","__ZNK7WebCore12RenderObject7isFrameEv","__ZN3WTF6VectorIN7WebCore20AnnotatedRegionValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj","__ZN7WebCore12StyleBoxDataD2Ev","__ZNK7WebCore12RenderObject17isRenderMathMLRowEv","__ZNK7WebCore12RenderObject9isReplicaEv","__ZN7WebCore12RenderObjectD0Ev","__ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE","__ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE","__ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject27nextInPreOrderAfterChildrenEv","__ZNK7WebCore12RenderObject16isRenderSVGBlockEv","__ZN7WebCore12RenderObject15willBeDestroyedEv","__ZNK7WebCore12RenderObject17selectionStartEndERiS1_","__ZNK7WebCore12RenderObject19isFileUploadControlEv","__ZNK7WebCore12RenderObject22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE","__ZNK7WebCore12RenderObject18previousInPreOrderEv","__ZNK7WebCore12RenderObject15absoluteToLocalERKNS_10FloatPointEj","__ZNK7WebCore12RenderObject19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb","__ZN7WebCore12RenderObject21columnNumberForOffsetEi","__ZNK7WebCore12RenderObject13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject19offsetFromContainerEPS0_RKNS_11LayoutPointEPb","__ZNK7WebCore12RenderObject7isMediaEv","__ZNK7WebCore12RenderObject10isSVGShapeEv","__ZNK7WebCore12RenderObject14isRenderButtonEv","__ZNK7WebCore12RenderObject19containerForRepaintEv","__ZNK7WebCore12RenderObject22getUncachedPseudoStyleERKNS_18PseudoStyleRequestEPNS_11RenderStyleES5_","__ZNK7WebCore12RenderObject11isTextFieldEv","__ZNK7WebCore12RenderObject17isSVGGradientStopEv","__ZNK7WebCore12RenderObject10isRubyBaseEv","__ZNK7WebCore12RenderObject24selectionBackgroundColorEv","__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv","__ZNK7WebCore12RenderObject8isCanvasEv","__ZNK7WebCore12RenderObject11isSVGInlineEv","__ZNK7WebCore12RenderObject10isMenuListEv","__ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore12RenderObject18isRenderMathMLMathEv","__ZNK7WebCore12RenderObject14isTableCaptionEv","__ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv","__ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv","__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv","__ZNK7WebCore12RenderObject7childAtEj","__ZNK7WebCore12RenderObject14caretMaxOffsetEv","__ZN7WebCore12RenderObject7hitTestERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestFilterE","__ZN7WebCore12RenderObject17setSelectionStateENS0_14SelectionStateE","__ZNK7WebCore12RenderObject7isVideoEv","__ZNK7WebCore12RenderObject13isTextControlEv","__ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv","__ZNK7WebCore12RenderObject16isEmbeddedObjectEv","__ZNK7WebCore12RenderObject9isSVGTextEv","__ZNK7WebCore12RenderObject10isTextAreaEv","__ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEEC2ERKS4_","__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv","__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv","__ZNK7WebCore12RenderObject5themeEv","__ZNK7WebCore12RenderObject14isRenderIFrameEv","__ZNK7WebCore12RenderObject12enclosingBoxEv","__ZNK7WebCore12RenderObject17strokeBoundingBoxEv","__ZN7WebCore12RenderObject44removeAnonymousWrappersForInlinesIfNecessaryEv","_memset","__ZNK7WebCore12RenderObject11isTableCellEv","__ZNK7WebCore12RenderObject14firstChildSlowEv","__ZNK7WebCore12RenderObject17objectBoundingBoxEv","__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv","__ZN7WebCore12RenderObject23collectAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore12RenderObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE","__ZNK7WebCore12RenderObject14enclosingLayerEv","__ZN7WebCore12RenderObject16clearNeedsLayoutEv","__ZNK7WebCore12RenderObject26hasEntirelyFixedBackgroundEv","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZNK7WebCore12RenderObject9isListBoxEv","__ZNK7WebCore12RenderObject9isSVGPathEv","__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv","__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv","__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv","__ZN7WebCore12RenderObject23addAbsoluteRectForLayerERNS_10LayoutRectE","__ZN7WebCore12RenderObjectC2ERNS_4NodeE","__ZNK7WebCore12RenderObject14isDescendantOfEPKS0_","__ZNK7WebCore12RenderObject13isRenderImageEv","__ZNK7WebCore12RenderObject18isRenderMathMLRootEv","__ZNK7WebCore12RenderObject14caretMinOffsetEv","__ZNK7WebCore12RenderObject14nextInPreOrderEPKS0_","__ZNK7WebCore12RenderObject43fixedPositionedWithNamedFlowContainingBlockEv","__ZNK7WebCore12RenderObject23enclosingBoxModelObjectEv","__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv","__ZNK7WebCore12RenderObject15isDetailsMarkerEv","__ZNK7WebCore12RenderObject6lengthEv","__ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv","__ZNK7WebCore12RenderObject29adjustRectForOutlineAndShadowERNS_10LayoutRectE","__ZNK7WebCore12RenderObject13isFlexibleBoxEv","__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE","_memcpy","__ZNK7WebCore12RenderObject10isFrameSetEv","__ZNK7WebCore12RenderObject27nextInPreOrderAfterChildrenEPKS0_","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZNK7WebCore12RenderObject10isFieldsetEv","__ZNK7WebCore12RenderObject13isCombineTextEv","__ZNK7WebCore12RenderObject8isSliderEv","__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv","__ZNK7WebCore12RenderObject27checkForRepaintDuringLayoutEv","__ZNK7WebCore12RenderObject16repaintRectangleERKNS_10LayoutRectEb","__ZNK7WebCore12RenderObject18isSVGForeignObjectEv","__ZNK7WebCore12RenderObject18isRenderFlowThreadEv","__ZNK7WebCore12RenderObject10nextOffsetEi","__ZN7WebCore18lastPositionInNodeEPNS_4NodeE","__ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv","__ZNK7WebCore12RenderObject18maximalOutlineSizeENS_10PaintPhaseE","__ZNK7WebCore12RenderObject15containingBlockEv","__ZNK7WebCore12RenderObject9isRubyRunEv","__ZN7WebCore12RenderObject15updateDragStateEb","__ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE","__ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi","__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv","__ZNK7WebCore12RenderObject8isRootedEPPNS_10RenderViewE","__ZN7WebCore12RenderObject35removeFromRenderFlowThreadRecursiveEPNS_16RenderFlowThreadE","__ZNK7WebCore12RenderObject9animationEv","__ZNK7WebCore12RenderObject14isRenderRegionEv","__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv","__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv","__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv","__ZNK7WebCore17CachedImageClient18resourceClientTypeEv","__ZN7WebCore12RenderObject21needsBoundariesUpdateEv","__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv","__ZN7WebCore12RenderObject41invalidateContainerPreferredLogicalWidthsEv","__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv","__ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore12RenderObject16removeFromParentEv","__ZNK7WebCore12RenderObject14firstLeafChildEv","__ZN7WebCore12RenderObjectD2Ev","__ZNK7WebCore12RenderObject14isTableSectionEv","__ZNK7WebCore12RenderObject9isCounterEv","__ZNK7WebCore12RenderObject15innerLineHeightEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore12RenderObject19scrollRectToVisibleERKNS_10LayoutRectERKNS_15ScrollAlignmentES6_","__ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE","__ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE","__ZNK7WebCore12RenderObject21createVisiblePositionERKNS_8PositionE","__ZN7WebCore12RenderObject21willBeRemovedFromTreeEv","__ZNK7WebCore12RenderObject14selectionColorEi","__ZN7WebCore12RenderObject34destroyAndCleanupAnonymousWrappersEv","__ZNK7WebCore12RenderObject26selectionEmphasisMarkColorEv","__ZNK7WebCore12RenderObject14isSVGContainerEv","__ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb","__ZN7WebCore12RenderObject51setLayerNeedsFullRepaintForPositionedMovementLayoutEv","__ZNK7WebCore12RenderObject28renderNamedFlowThreadWrapperEv","__ZNK7WebCore12RenderObject17isSelectionBorderEv","__ZNK7WebCore12RenderObject23absoluteBoundingBoxRectEb","__ZNK7WebCore12RenderObject19virtualContinuationEv","__ZNK7WebCore12RenderObject14previousOffsetEi","__ZNK7WebCore12RenderObject12isListMarkerEv","__ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb","__ZNK7WebCore12RenderObject7isEmptyEv","__ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb","__ZN7WebCore12RenderObject14paintFocusRingERNS_9PaintInfoERKNS_11LayoutPointEPNS_11RenderStyleE","__ZNK7WebCore12RenderObject31shouldUseTransformFromContainerEPKS0_","__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv","__ZN7WebCore12RenderObject26removeFromRenderFlowThreadEv","__ZN7WebCore12RenderObject7destroyEv","__ZNK7WebCore12RenderObject12isRenderGridEv","__ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv","__ZNK7WebCore12RenderObject21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb","__ZNK7WebCore12RenderObject20hasOutlineAnnotationEv","_i64Add","_i64Subtract","_bitshift64Shl","_bitshift64Lshr","_bitshift64Ashr","_llvm_ctlz_i32","_llvm_cttz_i32"]
